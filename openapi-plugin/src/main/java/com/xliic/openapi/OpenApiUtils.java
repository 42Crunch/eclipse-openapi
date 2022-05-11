package com.xliic.openapi;

import static com.xliic.openapi.OpenApiPanelKeys.OPENAPI_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.SWAGGER_KEY;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.Objects;
import java.util.Optional;
import java.util.regex.Pattern;
import java.util.stream.Stream;

import org.apache.commons.lang.StringUtils;
import org.eclipse.ui.IViewPart;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.ScrollType;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.patterns.ElementPattern;
import com.xliic.core.patterns.JsonElementPattern;
import com.xliic.core.patterns.YamlElementPattern;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiElement;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.FileUtil;
import com.xliic.core.util.ResourceUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.ParserService;
import com.xliic.openapi.tree.OpenApiTreeNode;
import com.xliic.openapi.tree.ui.OpenAPITreeView;
import com.xliic.openapi.utils.OpenAPIUtils;
import com.xliic.openapi.utils.WorkbenchUtils;

public class OpenApiUtils {

	public final static ElementPattern<PsiElement> JSON_REF_PATTERN = new JsonElementPattern<>();
	public final static ElementPattern<PsiElement> YAML_REF_PATTERN = new YamlElementPattern<>();

	public final static Pattern VERSION_V3_REGEXP = Pattern.compile("^3\\.0\\.\\d(-.+)?$");

	public static String getRefTextFromPsiElement(@NotNull PsiElement psiElement) {
		return URLDecoder.decode(StringUtils.strip(psiElement.getText(), "\"'"), StandardCharsets.UTF_8);
	}

	public static void goToNodeInEditor(@NotNull Editor editor, @NotNull OpenApiTreeNode o) {
		int offset = editor.logicalPositionToOffset(o.getLogicalPosition());
		editor.getCaretModel().moveToOffset(offset);
		editor.getScrollingModel().scrollToCaret(ScrollType.CENTER_UP);
	}

    public static void activateToolWindow(@NotNull Project project, @NotNull String id) {
        if (!project.isDisposed()) {
            ToolWindow toolWindow = ToolWindowManager.getInstance(project).getToolWindow(id);
            if ((toolWindow != null) && !toolWindow.isActive()) {
                toolWindow.activate(null);
            }
        }
    }
    
	public static VirtualFile getSelectedOpenAPIFile(@NotNull Project project) {
		return OpenAPIUtils.getSelectedOpenAPIFile();
	}

	public static OpenApiFileType getFileType(PsiFile file) {
		if (file == null) {
			return OpenApiFileType.Unsupported;
		}
		return getFileType(file.getVirtualFile());
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

	public static String getTextFromFile(@NotNull VirtualFile file) {
		Document document = FileDocumentManager.getInstance().getDocument(file);
		if (document == null) {
			try {
				return Files.readString(new File(file.getPath()).toPath());
			} catch (Exception ignored) {
			}
		} else {
			return document.getText();
		}
		return null;
	}

	public static String getTextFromFile(@NotNull File ioFile) {
		VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(ioFile);
		if (file != null) {
			return getTextFromFile(file);
		}
		return null;
	}

	public static String getTextFromFile(@NotNull String fileName) {
		return getTextFromFile(new File(fileName));
	}

	public static boolean isToolWindowRegistered(@NotNull Project project, @NotNull String toolWindowId) {
		return true;
	}

	public static OpenFileDescriptor getOpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file,
			Range range) {
		if (range == null) {
			return new OpenFileDescriptor(project, file);
		} else {
			return new OpenFileDescriptor(project, file, range.getStartOffset());
		}
	}

	public static String getRelativePathFromTo(@NotNull String from, @NotNull String to) {

		assert !from.equals(to) && from.contains("/") && to.contains("/");

		String[] froms = from.split("/");
		String[] tos = to.split("/");
		assert froms[0].equals(tos[0]);

		StringBuilder result = new StringBuilder();
		for (int i = froms.length - 2; i >= 0; i--) {
			for (int j = 0; j < tos.length - 1; j++) {
				final String t = tos[j];
				if (froms[i].equals(t)) {
					return result.append(to.substring(to.indexOf(t) + t.length() + 1)).toString();
				}
			}
			result.append("../");
		}
		return result.toString();
	}

	public static @NotNull OpenApiVersion getOpenAPIVersion(@NotNull Node root) {
		for (Node child : root.getChildren()) {
			String key = child.getKey();
			if (SWAGGER_KEY.equals(key)) {
				return OpenApiVersion.V2;
			} else if (OPENAPI_KEY.equals(key)) {
				String value = child.getValue().trim();
				if (VERSION_V3_REGEXP.matcher(value).matches()) {
					return OpenApiVersion.V3;
				}
			}
		}
		return OpenApiVersion.Unknown;
	}
	
    public static void createTextResource(File dir, String basePath, String prefix, String suffix) throws IOException {
        ClassLoader loader = OpenApiUtils.class.getClassLoader();
        InputStream inputStream = ResourceUtil.getResourceAsStream(loader, basePath, prefix + suffix);
        Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
        File tmp = FileUtil.createTempFile(dir, prefix, suffix, true);
        PrintWriter writer = new PrintWriter(tmp, StandardCharsets.UTF_8);
        stream.forEach(writer::println);
        writer.close();
    }
}
