package com.xliic.openapi.bundler;

import static com.xliic.openapi.ExtRef.isExtRef;
import static com.xliic.openapi.OpenApiBundle.message;
import static com.xliic.openapi.utils.Utils.getOpenAPIVersion;
import static com.xliic.openapi.utils.Utils.getTextFromFile;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.common.Workspace;
import com.xliic.common.WorkspaceContent;
import com.xliic.common.WorkspaceException;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ExtRefService;

public class BundleResult {

    private String json;
    private final String rootFileName;
    private Mapping mapping;
    private Exception exception;
    private final Set<String> bundleFiles = new HashSet<>();
    private final Set<URI> externalURIs = new HashSet<>();
    private Node bundleNode;
    private final Project project;
    private OpenApiVersion version;

    private static final ParserJsonAST parser = new ParserJsonAST();
    private static final Set<String> schemas = new HashSet<>(Arrays.asList("http://", "https://", "file:/"));

    public BundleResult(@NotNull Project project, @NotNull String rootFileName) {

        this.project = project;
        this.rootFileName = rootFileName;
        bundleNode = null;
        final URI workspaceUri = Paths.get(rootFileName).getParent().toUri();

        Workspace workspace = new Workspace() {

            @Override
            public URI resolve(String filename) {
                // Check if the filename is absolute, and return URI if so
                Path filepath = Paths.get(filename);
                if (filepath.isAbsolute()) {
                    return filepath.toUri();
                }
                // For relative filenames, resolve relative to the workspace
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
            public WorkspaceContent read(URI uri) throws IOException, WorkspaceException {
                if (isUnsupportedSchema(uri)) {
                    throw new WorkspaceException(message("openapi.ref.unable.resolve", uri.toString()));
                }
                if (isExtRef(uri)) {
                    externalURIs.add(uri);
                    ExtRefService extRefService = ExtRefService.getInstance(project);
                    if (extRefService.isSafe(uri)) {
                        ExtRef extRef = extRefService.getOrCreate(uri, rootFileName);
                        if (extRef.getVirtualFile().isValid()) {
                            return new WorkspaceContent(extRef.getText(true), extRef.getContentType());
                        } else {
                            throw new WorkspaceException("Downloaded file " + uri + " not found, please reload remote references");
                        }
                    } else {
                        throw new WorkspaceException(message("openapi.ref.not.approved", uri.getAuthority()));
                    }
                } else {
                    final String fileName = uri.getPath();
                    VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
                    if (file == null) {
                        throw new WorkspaceException(message("openapi.ref.unable.resolve", fileName));
                    }
                    bundleFiles.add(file.getPath());
                    return new WorkspaceContent(getTextFromFile(fileName, true), ExtRef.getContentType(file));
                }
            }

            @Override
            public boolean exists(URI uri) {
                return new File(uri).exists();
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
            version = OpenApiVersion.Unknown;
            if (getAST() != null) {
                version = getOpenAPIVersion(bundleNode);
                bundleNode = null;
            }
        } catch (IOException | URISyntaxException | InterruptedException | BundlingException | WorkspaceException e) {
            exception = e;
        }
    }

    public boolean isOpenAPIBundle() {
        return (version == OpenApiVersion.V2) || (version == OpenApiVersion.V3);
    }

    public String getFile() {
        return rootFileName;
    }

    public Set<String> getBundledFiles() {
        return bundleFiles;
    }

    public boolean hasBundleHost(@NotNull String hostname) {
        for (URI uri : externalURIs) {
            if (uri.getAuthority().equalsIgnoreCase(hostname)) {
                return true;
            }
        }
        return false;
    }

    public Set<String> getActiveURLs() {
        Set<String> activeURLs = new HashSet<>();
        for (URI uri : externalURIs) {
            try {
                activeURLs.add(uri.toURL().toString());
            } catch (MalformedURLException ignored) {
            }
        }
        return activeURLs;
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
                    Throwable cause = failure.cause;
                    String msg = (cause instanceof WorkspaceException) ? cause.getMessage() : failure.message;
                    result.add(new BundleError(rootFileName, file.getPath(), failure.sourcePointer, msg));
                }
            }
        } else {
            result = Collections.emptySet();
        }
        return result;
    }

    public BundleLocation getBundleLocation(String pointer) {
        try {
            // For pointers to entities in the main file which don't resolve to an external
            // file, return null
            Mapping.Location location = mapping.find(pointer);
            if (location == null) {
                return new BundleLocation(rootFileName, pointer);
            } else {
                return new BundleLocation(project, rootFileName, location.uri, location.pointer);
            }
        } catch (UnsupportedEncodingException exception) {
            return new BundleLocation();
        }
    }

    public Node getAST() {
        if (isBundleComplete()) {
            if (bundleNode == null) {
                bundleNode = parser.parse(json);
            }
            return bundleNode;
        }
        return null;
    }

    private boolean isUnsupportedSchema(URI uri) {
        try {
            String ref = uri.toURL().toString();
            for (String schema : schemas) {
                if (ref.startsWith(schema)) {
                    return false;
                }
            }
        } catch (MalformedURLException ignored) {
        }
        return true;
    }
}
