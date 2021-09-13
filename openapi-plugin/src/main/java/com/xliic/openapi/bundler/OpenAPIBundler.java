package com.xliic.openapi.bundler;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.resources.IFile;
import org.eclipse.ui.PlatformUI;

import com.xliic.common.Workspace;
import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.services.IParserService;
import com.xliic.openapi.utils.OpenAPIUtils;

public class OpenAPIBundler {

	private final String json;
	private final IFile iFile;
	private final String auditFileName;
	private final Mapping mapping;

	// If file is closed we need to get its text, to save time to read from I/O we
	// cache the text
	// The bundler exists only during audit report handling, after it is done all
	// memory will be cleared
	private final Map<String, String> cache = new HashMap<>();

	// To boost performance we will cache already parsed referenced files
	private final Map<String, Map<String, Location>> parseCache = new HashMap<>();

	public OpenAPIBundler(IFile iFile)
			throws IOException, InterruptedException, URISyntaxException, ReferenceResolutionException {
		this.iFile = iFile;
		this.auditFileName = new VirtualFile(iFile).getPath();
		Workspace workspace = new OpenAPIWorkspace(cache, auditFileName);
		Parser parser = new Parser(workspace);
		Serializer serializer = new Serializer();
		Bundler bundler = new Bundler(parser, serializer);
		Document document = parser.parse(workspace.resolve(auditFileName));
		mapping = bundler.bundle(document);
		json = serializer.serialize(document);
	}

	public String getIFileName() {
		return new VirtualFile(iFile).getPath();
	}

	public String getAuditFileName() {
		return auditFileName;
	}

	public String getJsonText() {
		return json;
	}

	public Mapping.Location original(String pointer) throws UnsupportedEncodingException {
		return mapping.find(pointer);
	}

	public Map<String, Location> getParserData(IFile file) {
		String fileName = new VirtualFile(iFile).getPath();
		if (parseCache.containsKey(fileName)) {
			return parseCache.get(fileName);
		}
		String text = cache.get(fileName);
		IParserService parserService = PlatformUI.getWorkbench().getService(IParserService.class);
		OpenApiFileType fileType = OpenAPIUtils.getFileType(file);
		Map<String, Location> parsePointerToLocationMap = parserService.parsePointerToLocationMap(text, fileType);
		parseCache.put(fileName, parsePointerToLocationMap);
		return parsePointerToLocationMap;
	}
}
