package com.xliic.openapi;

import org.jetbrains.annotations.NotNull;

import org.eclipse.core.resources.IFile;

import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.ParserService;
import com.xliic.openapi.utils.OpenAPIUtils;

public class OpenApiUtils {

    public static VirtualFile getSelectedOpenAPIFile(@NotNull Project project) {
		IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
		return (file == null) ? null : new VirtualFile(file);
    }
    
	public static OpenApiFileType getFileType(VirtualFile file) { 
		if ("json".equals(file.getExtension())) {
			return OpenApiFileType.Json;
		}
		else if ("yaml".equals(file.getExtension()) || "yml".equals(file.getExtension())) {
				return OpenApiFileType.Yaml;
		}
		else {
			return OpenApiFileType.Unsupported;
		}
	}
	
	public static OpenApiVersion getOpenAPIVersion(@NotNull Project project, VirtualFile file) {	
		OpenApiFileType fileType = getFileType(file);
		Document document = FileDocumentManager.getInstance().getDocument(file);
		ParserData data = ParserService.getInstance(project).parse(document.getText(), fileType);
        OpenApiVersion version = data.getVersion();
		return version;
	}
}
