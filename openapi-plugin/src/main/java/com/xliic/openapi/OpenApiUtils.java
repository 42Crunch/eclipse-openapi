package com.xliic.openapi;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.editor.Document;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.LogicalPosition;
import com.xliic.core.editor.ScrollType;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.Pair;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.core.patterns.ElementPattern;
import com.xliic.core.patterns.JsonElementPattern;
import com.xliic.core.patterns.YamlElementPattern;
import com.xliic.core.psi.PsiElement;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.core.psi.LeafPsiElement;
import com.xliic.core.util.ResourceUtil;
import com.xliic.core.util.io.FileUtil;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.ResponseStatus;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.ExtRefService;
import com.xliic.openapi.settings.SettingsKeys;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.PanelNode;
import com.xliic.openapi.tree.node.SimpleNode;
import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.swing.tree.DefaultMutableTreeNode;
import java.io.*;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.regex.Pattern;
import java.util.stream.Stream;

import static com.xliic.openapi.OpenApiPanelKeys.OPENAPI_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.SWAGGER_KEY;

public class OpenApiUtils {

    public static final String REF = "$ref";
    public static final String REF_DELIMITER = "#/";
    public static final String POINTER_SEPARATOR = "/";
	public static final String PROJECT_TMP_DIR = "tmp-xliic";

	public final static ElementPattern<PsiElement> JSON_REF_PATTERN = new JsonElementPattern<>();
	public final static ElementPattern<PsiElement> YAML_REF_PATTERN = new YamlElementPattern<>();

	public final static Pattern VERSION_V3_REGEXP = Pattern.compile("^3\\.0\\.\\d(-.+)?$");
	private final static int DEFAULT_PADDING = 2;

    public static String pointer(String key) {
        return pointer(StringUtils.EMPTY, key);
    }

    public static String pointer(String parentPointer, String key) {
        return parentPointer + POINTER_SEPARATOR + escape(key);
    }

    public static String pointer(String parentPointer, int index) {
        return parentPointer + POINTER_SEPARATOR + index;
    }

    public static String escape(String token) {
        return token.replace("~", "~0").replace("/", "~1")
                .replace("\\", "\\\\").replace("\"", "\\\"");
    }

    public static String unescape(String token) {
        return token.replace("~1", "/").replace("~0", "~")
                .replace("\\\"", "\"").replace("\\\\", "\\");
    }

    public static String getRefTextFromPsiElement(@NotNull PsiElement psiElement) {
        return URLDecoder.decode(StringUtils.strip(psiElement.getText(), "\"'"), StandardCharsets.UTF_8);
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

    public static String getTextFromFile(@NotNull VirtualFile file) {
        Document document = FileDocumentManager.getInstance().getDocument(file);
        if (document == null) {
            try {
                return Files.readString(new File(file.getPath()).toPath());
            }
            catch (Exception ignored) {
            }
        }
        else {
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

    public static void goToNodeInEditor(@NotNull Editor editor, @NotNull Node node) {
        Range range = node.getRange();
        int offset = editor.logicalPositionToOffset(new LogicalPosition(range.getLine(), range.getColumn()));
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

    public static VirtualFile getSelectedFile(@NotNull Project project) {
        FileEditor editor = FileEditorManager.getInstance(project).getSelectedEditor();
        if (editor == null || editor.getFile() == null) {
            return null;
        }
        return editor.getFile();
    }

    public static VirtualFile getSelectedOpenAPIFile(@NotNull Project project) {
        VirtualFile file = getSelectedFile(project);
        if (file != null) {
            ASTService astService = ASTService.getInstance(project);
            if (astService.isKnownOpenAPIFile(file.getPath())) {
                return file;
            }
        }
        return null;
    }

    public static OpenApiVersion getOpenAPIVersion(@NotNull Project project, VirtualFile file) {
        if (file == null) {
            return OpenApiVersion.Unknown;
        }
        PsiFile psiFile = PsiManager.getInstance(project).findFile(file);
        if (psiFile == null) {
            return OpenApiVersion.Unknown;
        }
        return getOpenAPIVersion(psiFile.toPsiElement().getNode());
    }

    public static void show(@NotNull Project project, @NotNull String toolWindowId) {
        ToolWindow toolWindow = ToolWindowManager.getInstance(project).getToolWindow(toolWindowId);
        if (toolWindow != null && !toolWindow.isVisible()) {
            toolWindow.show(null);
        }
    }

    public static boolean isToolWindowRegistered(@NotNull Project project, @NotNull String toolWindowId) {
        return ToolWindowManager.getInstance(project).getToolWindow(toolWindowId) != null;
    }

    public static DefaultMutableTreeNode getFirstNotEmptyPanel(DefaultMutableTreeNode panelNode) {

        String panelName = ((SimpleNode) panelNode.getUserObject()).getName();
        DefaultMutableTreeNode root = (DefaultMutableTreeNode) panelNode.getParent();
        DefaultMutableTreeNode nextPanel = null;

        int count = root.getChildCount();
        boolean panelNodeFound = false;

        for (int i = count - 1 ; i >= 0 ; i--) {

            DefaultMutableTreeNode p = (DefaultMutableTreeNode) root.getChildAt(i);
            BaseNode o = (BaseNode) p.getUserObject();
            if (o instanceof PanelNode) {
                if (!panelNodeFound && panelName.equals(o.getName())) {
                    panelNodeFound = true;
                    continue;
                }
                if (panelNodeFound && ((PanelNode) o).exists()) {
                    nextPanel = p;
                    break;
                }
            }
        }
        return nextPanel;
    }

    public static int getPadding(DefaultMutableTreeNode root, OpenApiFileType fileType) {

        while (root.getParent() != null) {
            root = (DefaultMutableTreeNode) root.getParent();
        }

        int count = root.getChildCount();
        for (int i = 0 ; i < count ; i++) {

            DefaultMutableTreeNode p = (DefaultMutableTreeNode) root.getChildAt(i);
            int count2 = p.getChildCount();
            for (int j = 0 ; j < count2 ; j++) {

                DefaultMutableTreeNode p2 = (DefaultMutableTreeNode) p.getChildAt(j);
                SimpleNode o2 = (SimpleNode) p2.getUserObject();

                if (fileType == OpenApiFileType.Json) {
                    if (OPENAPI_KEY.equals(o2.getName()) || SWAGGER_KEY.equals(o2.getName()))  {
                        return o2.getRange().getColumn();
                    }
                } else {
                    Node node = o2.getParent().getNode();
                    if ((node != null) && node.isObject() && (o2.getRange().getColumn() > 0)) {
                        return o2.getRange().getColumn();
                    }
                }
            }
        }

        return DEFAULT_PADDING;
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

    public static boolean isOpenAPIFileType(@NotNull VirtualFile file) {
        return getFileType(file.getPath()) != OpenApiFileType.Unsupported;
    }

    public static OpenApiFileType getFileType(final String fileName) {
        if (StringUtils.isEmpty(fileName)) {
            return OpenApiFileType.Unsupported;
        }
        else if (Objects.equals(getFileLanguage(fileName), "json")) {
            return OpenApiFileType.Json;
        }
        else if (Objects.equals(getFileLanguage(fileName), "yaml")) {
            return OpenApiFileType.Yaml;
        }
        return OpenApiFileType.Unsupported;
    }

    public static String getFileLanguage(String fileName) {
        fileName = fileName.toLowerCase();
        if (fileName.endsWith(".yaml") || fileName.endsWith(".yml")) {
            return "yaml";
        }
        else if (fileName.endsWith(".json")) {
            return "json";
        }
        return null;
    }

    public static String getRelativePathFromTo(@NotNull String from, @NotNull String to) {

        assert !from.equals(to) && from.contains("/") && to.contains("/");

        String[] froms = from.split("/");
        String[] tos = to.split("/");
        assert froms[0].equals(tos[0]);

        StringBuilder result = new StringBuilder();
        for (int i = froms.length - 2 ; i >= 0 ; i--) {
            for (int j = 0 ; j < tos.length - 1 ; j++) {
                final String t = tos[j];
                if (froms[i].equals(t)) {
                    return result.append(to.substring(to.indexOf(t) + t.length() + 1)).toString();
                }
            }
            result.append("../");
        }
        return result.toString();
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
        try {
            File dir = new File(FileUtil.getTempDirectory(), OpenAPIStartupActivity.PluginTempDir);
            VirtualFile vDir = LocalFileSystem.getInstance().findFileByIoFile(dir);
            if (vDir != null) {
                if (file.getPath().contains(vDir.getPath())) {
                	return true;
                }
            }
        }
        catch (Exception ignored) {}
        return EclipseUtil.isExtRefFile(file);
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
        String [] hosts = PropertiesComponent.getInstance().getValues(SettingsKeys.HOSTS);
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

    public static Node getJsonAST(@NotNull String text) {
        return new ParserJsonAST().parse(text);
    }

    public static ResponseStatus getStatus(@NotNull Node node) {
        return ResponseStatus.getStatus(node.getChildValue("status"));
    }

    public static @NotNull OpenApiVersion getOpenAPIVersion(@NotNull Node root) {
        for (Node child : root.getChildren()) {
            String key = child.getKey();
            if (SWAGGER_KEY.equals(key)) {
                return OpenApiVersion.V2;
            }
            else if (OPENAPI_KEY.equals(key)) {
                String value = child.getValue().trim();
                if (VERSION_V3_REGEXP.matcher(value).matches()) {
                    return OpenApiVersion.V3;
                }
            }
        }
        return OpenApiVersion.Unknown;
    }

    public static boolean isPsiRef(@Nullable PsiElement psiElement) {
        if (psiElement instanceof LeafPsiElement) {
            if (JSON_REF_PATTERN.accepts(psiElement) || YAML_REF_PATTERN.accepts(psiElement)) {
                return true;
            }
        }
        return false;
    }

    public static Pair<VirtualFile, Node> resolveRef(@NotNull PsiFile psiFile, @NotNull String ref) {

        Project project = psiFile.getProject();
        VirtualFile file = psiFile.getVirtualFile();

        // HTTP reference
        if (ExtRef.isExtRef(ref)) {
            String url, pointer;
            if (ref.contains(REF_DELIMITER)) {
                String [] parts = ref.split(REF_DELIMITER);
                url = parts[0];
                pointer = "/" + parts[1];
            }
            else {
                url = ref;
                pointer = "";
            }
            ExtRef extRef = ExtRefService.getInstance(project).get(url);
            if (extRef != null) {
                VirtualFile extRefFile = extRef.getVirtualFile();
                if (extRefFile != null) {
                    Node root = ASTService.getInstance(project).getRootNode(extRefFile);
                    if (root != null) {
                        return createPair(extRefFile, root.find(pointer), !"".equals(pointer));
                    }
                }
            }
        }
        // Usual file pointer reference
        else if (ref.contains(REF_DELIMITER)) {
            String [] parts = ref.split(REF_DELIMITER);
            String refFileName = parts[0];
            String pointer = "/" + parts[1];
            // Internal file reference
            if (StringUtils.isEmpty(refFileName)) {
                Node root = ASTService.getInstance(project).getRootNode(file);
                if (root != null) {
                    return createPair(file, root.find(pointer), true);
                }
            }
            // External file reference
            else {
                VirtualFile refFile = getRefVirtualFile(file, refFileName);
                if (refFile != null) {
                    Node root = ASTService.getInstance(project).getRootNode(refFile);
                    if (root != null) {
                        return createPair(refFile, root.find(pointer), true);
                    }
                }
            }
        }
        // Pure file reference
        else {
            VirtualFile refFile = getRefVirtualFile(file, ref);
            return createPair(refFile, null, false);
        }
        return null;
    }

    private static Pair<VirtualFile, Node> createPair(VirtualFile file, Node node, boolean strict) {
        if (file == null) {
            return null;
        }
        else {
            if (strict) {
                return (node == null) ? null : new Pair<>(file, node);
            }
            else {
                return new Pair<>(file, node);
            }
        }
    }

    private static VirtualFile getRefVirtualFile(VirtualFile file, String refFileName) {
        File rootFile = new File(Paths.get(file.getPath()).getParent().toString());
        return LocalFileSystem.getInstance().findFileByIoFile(new File(rootFile, refFileName));
    }
}
