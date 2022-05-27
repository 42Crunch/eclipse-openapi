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
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.regex.Pattern;
import java.util.stream.Stream;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.resources.IProject;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.internal.Workbench;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.ide.PropertiesComponent;
import com.xliic.core.patterns.ElementPattern;
import com.xliic.core.patterns.JsonElementPattern;
import com.xliic.core.patterns.YamlElementPattern;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiElement;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.Computable;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.core.util.FileUtil;
import com.xliic.core.util.ResourceUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VfsUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.ParserService;
import com.xliic.openapi.services.api.IDataService;
import com.xliic.openapi.settings.AuditKeys;
import com.xliic.openapi.tree.OpenApiTreeNode;
import com.xliic.openapi.tree.ui.OpenAPITreeView;

@SuppressWarnings("restriction")
public class OpenApiUtils {
	
    public static final String REF = "$ref";
    public static final String REF_DELIMITER = "#/";
	public static final String PROJECT_TMP_DIR = "tmp-xliic";

	public final static ElementPattern<PsiElement> JSON_REF_PATTERN = new JsonElementPattern<>();
	public final static ElementPattern<PsiElement> YAML_REF_PATTERN = new YamlElementPattern<>();

	public final static Pattern VERSION_V3_REGEXP = Pattern.compile("^3\\.0\\.\\d(-.+)?$");

	private final static int DEFAULT_PADDING = 2;
	
	public static String getRefTextFromPsiElement(@NotNull PsiElement psiElement) {
		return URLDecoder.decode(StringUtils.strip(psiElement.getText(), "\"'"), StandardCharsets.UTF_8);
	}

    public static void activateToolWindow(@NotNull Project project, @NotNull String id) {
        if (!project.isDisposed()) {
            ToolWindow toolWindow = ToolWindowManager.getInstance(project).getToolWindow(id);
            if ((toolWindow != null) && !toolWindow.isActive()) {
                toolWindow.activate(null);
            }
        }
    }
    
    public static VirtualFile getSelectedFile(@NotNull Project project) {
        FileEditor editor = FileEditorManager.getInstance(project).getSelectedEditor();
        if (editor == null || editor.getFile() == null) {
            return null;
        }
        return editor.getFile();
    }

	public static VirtualFile getSelectedOpenAPIFile(@NotNull Project project) {
		return getSelectedOpenAPIFile();
	}
	
	public static VirtualFile getSelectedOpenAPIFile() {
		VirtualFile file = getSelectedFile();
		if (file == null) {
			return null;
		}
		IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
		if (!dataService.hasFileProperty(file.getPath())) {
			return null;
		}
		return file;
	}
    
	public static VirtualFile getSelectedFile() {
		IEditorPart part = EclipseUtil.getCurrentEditor();
		if (part == null) {
			for (IWorkbenchWindow window : Workbench.getInstance().getWorkbenchWindows()) {
				IWorkbenchPage page = window.getActivePage();
				if (page != null) {
					part = page.getActiveEditor();
					if (part != null) {
						break;
					}
				}				
			}
		}
		if (part != null) {
			return EclipseUtil.getVirtualFile(part);
		}
		return null;
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
		Optional<IViewPart> opt = EclipseWorkbenchUtil.findView(OpenAPITreeView.ID);
		return opt.isPresent() ? opt.get() : null;
	}

	public static String getTextFromFile(@NotNull VirtualFile file) {
		Document document = FileDocumentManager.getInstance().getDocument(file);
		if (document != null) {
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

    public static String getTextFromFile(@NotNull String fileName, boolean inReadAction) {
        if (inReadAction) {
            return ApplicationManager.getApplication().runReadAction(
                    (Computable<String>) () -> getTextFromFile(new File(fileName)));
        }
        else {
            return getTextFromFile(new File(fileName));
        }
    }

	public static boolean isToolWindowRegistered(@NotNull Project project, @NotNull String toolWindowId) {
		return true;
	}

	public static OpenFileDescriptor getOpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file, Node target) {
		if (target == null) {
			return new OpenFileDescriptor(project, file);
		} else {
			Range range = EclipseUtil.getSelectionRange(target);
			if (range == null) {
				return new OpenFileDescriptor(project, file);
			}
	        return new OpenFileDescriptor(project, file, range.getOffset(), range.getLength());
		}
	}
	
	public static Map<String, Object> getMap(Map<String, Object> source, String key) {
		if (source != null && source.containsKey(key)) {
			return ((JSONObject) source.get(key)).toJsonMap();
		}
		return null;
	}

	public static Object getValue(Map<String, Object> source, String key) {
		if (source != null && source.containsKey(key)) {
			return source.get(key);
		}
		return null;
	}
	
	public static DefaultMutableTreeNode getFirstNotEmptyPanel(DefaultMutableTreeNode panelNode) {

		String panelName = ((OpenApiTreeNode) panelNode.getUserObject()).getKey();
		DefaultMutableTreeNode root = (DefaultMutableTreeNode) panelNode.getParent();
		DefaultMutableTreeNode nextPanel = null;

		int count = root.getChildCount();
		boolean panelNodeFound = false;

		for (int i = count - 1; i >= 0; i--) {

			DefaultMutableTreeNode p = (DefaultMutableTreeNode) root.getChildAt(i);
			OpenApiTreeNode o = (OpenApiTreeNode) p.getUserObject();

			if (!panelNodeFound && panelName.equals(o.getKey())) {
				panelNodeFound = true;
				continue;
			}

			if (panelNodeFound && o.isPanelExists()) {
				nextPanel = p;
				break;
			}
		}
		return nextPanel;
	}

	public static int getPadding(DefaultMutableTreeNode root, OpenApiFileType fileType) {

		while (root.getParent() != null) {
			root = (DefaultMutableTreeNode) root.getParent();
		}

		int count = root.getChildCount();
		for (int i = 0; i < count; i++) {

			DefaultMutableTreeNode p = (DefaultMutableTreeNode) root.getChildAt(i);
			int count2 = p.getChildCount();
			for (int j = 0; j < count2; j++) {

				DefaultMutableTreeNode p2 = (DefaultMutableTreeNode) p.getChildAt(j);
				OpenApiTreeNode o2 = (OpenApiTreeNode) p2.getUserObject();

				if (fileType == OpenApiFileType.Json) {
					if (OPENAPI_KEY.equals(o2.getKey()) || SWAGGER_KEY.equals(o2.getKey())) {
						return (int) o2.getPadding() - 1;
					}
				} else {
					if (o2.hasMapParent() && o2.getPadding() > 0) {
						return (int) o2.getPadding();
					}
				}
			}
		}

		return DEFAULT_PADDING;
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
	
    public static File createProjectTempDirIfMissing(String path) throws IOException {
    	IProject project = EclipseUtil.getProject(path);
    	if (project != null) {
    		String projectPath = new File(project.getLocationURI()).getAbsolutePath();
    		String tempProjectPath = new File(Paths.get(projectPath, PROJECT_TMP_DIR).toUri()).getAbsolutePath();
    		File file = VfsUtil.createDirectoryIfMissing(tempProjectPath).getFile();
    		EclipseUtil.refreshProject(project);
    		return file;
    	}
    	return null;
    }
	
    public static File createPluginTempDirIfMissing() throws IOException {
        String tempDir = OpenAPIStartupActivity.PluginTempDir;
        File dir = new File(FileUtil.getTempDirectory(), tempDir);
        if (dir.exists()) {
            return dir;
        }
        else {
            return FileUtil.createTempDirectory(tempDir, "", true);
        }
    }

    public static boolean isTempFile(@NotNull VirtualFile file) {
        File dir = new File(FileUtil.getTempDirectory(), OpenAPIStartupActivity.PluginTempDir);
        VirtualFile vDir = LocalFileSystem.getInstance().findFileByIoFile(dir);
        if (vDir != null) {
            if (file.getPath().contains(vDir.getPath())) {
            	return true;
            }
        }
        return file.getPath().contains("/" + PROJECT_TMP_DIR + "/");
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
    
    public static Set<String> getApprovedHostnames() {
        Set<String> result = new HashSet<>();
        String [] hosts = PropertiesComponent.getInstance().getValues(AuditKeys.HOSTS);
        if ((hosts == null) || (hosts.length == 0)) {
            return result;
        }
        else {
            for (String host : hosts) {
                if (!StringUtils.isEmpty(host)) {
                    result.add(host);
                }
            }
        }
        return result;
    }
}
