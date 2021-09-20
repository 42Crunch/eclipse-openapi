package com.xliic.openapi.bundler;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import org.apache.commons.lang.StringUtils;

import com.xliic.common.Workspace;
import com.xliic.idea.file.LocalFileSystem;
import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.OpenApiUtils;

public class BundleResult {

	private String json;
	private final String rootFileName;
	private Mapping mapping;
	private Exception exception;
	private final Set<String> bundleFiles = new HashSet<>();

	public BundleResult(String rootFileName) {

		this.rootFileName = rootFileName;
		final URI workspaceUri = Paths.get(rootFileName).getParent().toUri();

		Workspace workspace = new Workspace() {

			@Override
			public URI resolve(String filename) {
				// check if the filename is absolute, and return URI if so
				Path filepath = Paths.get(filename);
				if (filepath.isAbsolute()) {
					return filepath.toUri();
				}
				// for relative filenames, resolve relative to the workspace
				// URI() constructor will handle the special chars
				try {
					return workspaceUri.resolve(new URI(null, filename, null));
				} catch (URISyntaxException e) {
					throw new IllegalArgumentException(e.getMessage(), e);
				}
			}

			@Override
			public URI relativize(URI uri) {
				return workspaceUri.relativize(uri);
			}

			@Override
			public String read(URI uri) throws IOException {
				String text = OpenApiUtils.getTextFromFile(uri.getPath());
				VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(uri.getPath()));
				if (StringUtils.isEmpty(text) || file == null) {
					throw new IOException("Failed to read URI " + uri);
				}
				bundleFiles.add(file.getPath());
				return text;
			}

			@Override
			public boolean exists(URI uri) {
				File file = new File(uri);
				return file.exists();
			}
		};

		Parser parser = new Parser(workspace);
		Serializer serializer = new Serializer();
		Bundler bundler;
		Document document;
		exception = null;
		try {
			bundler = new Bundler(parser, serializer);
			document = parser.parse(workspace.resolve(rootFileName));
			mapping = bundler.bundle(document);
			json = serializer.serialize(document);
		} catch (IOException | URISyntaxException | InterruptedException | BundlingException e) {
			exception = e;
		}
	}

	public String getFile() {
		return rootFileName;
	}

	public Set<String> getBundledFiles() {
		return bundleFiles;
	}

	public boolean isBundleComplete() {
		return exception == null;
	}

	public String getExceptionReason() {
		return isBundleComplete() ? StringUtils.EMPTY : exception.getMessage();
	}

	public String getJsonText() {
		return json;
	}

	public Set<BundleError> getBundleErrors() {
		Set<BundleError> result;
		if (exception instanceof BundlingException) {
			result = new HashSet<>();
			BundlingException be = (BundlingException) exception;
			for (ReferenceResolutionFailure failure : be.getFailures()) {
				VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(failure.sourceFile));
				if (file != null) {
					result.add(new BundleError(rootFileName, file.getPath(), failure.sourcePointer, failure.message));
				}
			}
		} else {
			result = Collections.emptySet();
		}
		return result;
	}

	public Mapping.Location getBundleErrorLocation(String pointer) {
		try {
			// For pointers to entities in the main file which don't resolve to an external
			// file, return null
			Mapping.Location location = mapping.find(pointer);
			if (location == null) {
				return new Mapping.Location(rootFileName, pointer);
			} else {
				File directory = new File(Paths.get(rootFileName).getParent().toString());
				VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(directory, location.file));
				if (file != null) {
					return new Mapping.Location(file.getPath(), location.pointer);
				} else {
					return null;
				}
			}
		} catch (UnsupportedEncodingException exception) {
			return null;
		}
	}
}
