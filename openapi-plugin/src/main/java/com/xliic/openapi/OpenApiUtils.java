package com.xliic.openapi;

import java.io.File;
import java.nio.file.Files;
import java.util.Objects;
import java.util.Optional;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.resources.IFile;
import org.eclipse.ui.IViewPart;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.file.LocalFileSystem;
import com.xliic.idea.file.OpenFileDescriptor;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.ParserService;
import com.xliic.openapi.tree.ui.OpenAPITreeView;
import com.xliic.openapi.utils.OpenAPIUtils;
import com.xliic.openapi.utils.WorkbenchUtils;

public class OpenApiUtils {

	public static VirtualFile getSelectedOpenAPIFile(@NotNull Project project) {
		IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
		return (file == null) ? null : new VirtualFile(file);
	}

	public static OpenApiFileType getFileType(final VirtualFile file) {
		if (file == null) {
			return OpenApiFileType.Unsupported;
		}
		return getFileType(file.getPath());
	}

	public static OpenApiFileType getFileType(final String fileName) {
		if (StringUtils.isEmpty(fileName)) {
			return OpenApiFileType.Unsupported;
		} else if (Objects.equals(getFileLanguage(fileName), "json")) {
			return OpenApiFileType.Json;
		} else if (Objects.equals(getFileLanguage(fileName), "yaml")) {
			return OpenApiFileType.Yaml;
		}
		return OpenApiFileType.Unsupported;
	}

	public static String getFileLanguage(String fileName) {
		fileName = fileName.toLowerCase();
		if (fileName.endsWith(".yaml") || fileName.endsWith(".yml")) {
			return "yaml";
		} else if (fileName.endsWith(".json")) {
			return "json";
		}
		return null;
	}

	public static OpenApiVersion getOpenAPIVersion(@NotNull Project project, VirtualFile file) {
		OpenApiFileType fileType = getFileType(file);
		Document document = FileDocumentManager.getInstance().getDocument(file);
		ParserData data = ParserService.getInstance(project).parse(document.getText(), fileType);
		OpenApiVersion version = data.getVersion();
		return version;
	}

	public static IViewPart getToolWindowComponent(@NotNull Project project, @NotNull String id) {
		Optional<IViewPart> opt = WorkbenchUtils.findView(OpenAPITreeView.ID);
		return opt.isPresent() ? opt.get() : null;
	}

	public static String getTextFromFile(@NotNull File ioFile) {
		VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(ioFile);
		if (file == null) {
			return null;
		}
		String text = null;
		Document document = FileDocumentManager.getInstance().getDocument(file);
		if (document == null) {
			try {
				text = Files.readString(ioFile.toPath());
			} catch (Exception ignored) {
			}
		} else {
			text = document.getText();
		}
		return text;
	}

	public static String getTextFromFile(@NotNull String fileName) {
		return getTextFromFile(new File(fileName));
	}

	public static boolean isToolWindowRegistered(@NotNull Project project, @NotNull String toolWindowId) {
		return true;
	}

	public static OpenFileDescriptor getOpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file,
			Location location) {
		if (location == null) {
			return new OpenFileDescriptor(project, file);
		} else {
			return new OpenFileDescriptor(project, file, (int) location.getLine(), (int) location.getColumn());
		}
	}
}
