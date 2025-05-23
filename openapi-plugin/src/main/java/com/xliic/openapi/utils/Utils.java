package com.xliic.openapi.utils;

import static com.xliic.openapi.OpenApiPanelKeys.OPENAPI_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.SWAGGER_KEY;
import static com.xliic.openapi.parser.ast.ParserAST.escape;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.regex.Pattern;
import java.util.List;
import java.util.LinkedList;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.PrettyPrinter;
import com.fasterxml.jackson.core.util.DefaultIndenter;
import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.application.ApplicationInfo;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.ide.CopyPasteManager;
import com.xliic.core.ide.StringSelection;
import com.xliic.core.patterns.ElementPattern;
import com.xliic.core.patterns.JsonElementPattern;
import com.xliic.core.patterns.YamlElementPattern;
import com.xliic.core.project.Project;
import com.xliic.core.psi.LeafPsiElement;
import com.xliic.core.psi.PsiElement;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.core.util.Computable;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.Pair;
import com.xliic.core.util.SystemInfoRt;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.FastNode;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.editor.DocumentIndent;
import com.xliic.openapi.refs.external.ExtRef;
import com.xliic.openapi.refs.external.ExtRefService;
import com.xliic.openapi.report.types.ResponseStatus;
import com.xliic.openapi.services.ASTService;

@SuppressWarnings("deprecation")
public class Utils {

    public static final String REF = "$ref";
    public static final String REF_DELIMITER = "#/";
    public static final String POINTER_SEPARATOR = "/";
    
    public final static ElementPattern<PsiElement> JSON_REF_PATTERN = new JsonElementPattern<>();
    public final static ElementPattern<PsiElement> YAML_REF_PATTERN = new YamlElementPattern<>();

    public final static Pattern VERSION_V3_REGEXP = Pattern.compile("^3\\.0\\.\\d(-.+)?$");
    public final static Pattern VERSION_V3_1_REGEXP = Pattern.compile("^3\\.1\\.\\d(-.+)?$");

    private static final String TAB_REPLACE_REGEXP = "(?<!\\\\)\\t";
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final PrettyPrinter PRINTER = getPrinter("", "");

    @NotNull
    public static PrettyPrinter getPrinter(@NotNull String indent, @NotNull String eol) {
        DefaultIndenter indenter = new DefaultIndenter(indent, eol);
        return new DefaultPrettyPrinter().withObjectIndenter(indenter).withArrayIndenter(indenter).withoutSpacesInObjectEntries();
    }

    @NotNull
    public static String getUserAgent() {
    	return "42Crunch-Eclipse/" + ApplicationInfo.getInstance().getFullVersion();
    }

    public static String pointer(String parentPointer, String key) {
        return parentPointer + POINTER_SEPARATOR + escape(key);
    }

    public static String getRefTextFromPsiElement(@NotNull PsiElement psiElement) {
        return URLDecoder.decode(StringUtils.strip(psiElement.getText(), "\"'"), StandardCharsets.UTF_8);
    }

    public static OpenFileDescriptor getOpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file, Node target) {
        if (target == null) {
            return new OpenFileDescriptor(project, file);
        } else {
            return getOpenFileDescriptor(project, file, EclipseUtil.getSelectionRange(target));
        }
    }

    public static OpenFileDescriptor getOpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file, Range range) {
        if (range == null) {
            return new OpenFileDescriptor(project, file);
        }
        return new OpenFileDescriptor(project, file, range.getOffset(), range.getLength());
    }
    
    public static void refreshFile(@NotNull String filePath) {
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
        if (file != null) {
            LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(file));
        }
    }

    @Nullable
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

    @Nullable
    public static String getTextFromFile(@NotNull File ioFile) {
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(ioFile);
        if (file != null) {
            return getTextFromFile(file);
        }
        return null;
    }

    @Nullable
    public static String getTextFromFile(@NotNull String fileName, boolean inReadAction) {
        if (inReadAction) {
            return ApplicationManager.getApplication().runReadAction((Computable<String>) () -> getTextFromFile(new File(fileName)));
        } else {
            return getTextFromFile(new File(fileName));
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
        PsiFile psiFile = Utils.findPsiFile(project, file);
        if (psiFile == null) {
            return OpenApiVersion.Unknown;
        }
        return getOpenAPIVersion(psiFile.toPsiElement().getNode());
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

    @Nullable
    public static Node getJsonAST(@NotNull String text) {
        return getJsonAST(text, true);
    }

    @Nullable
    public static Node getJsonAST(@NotNull String text, boolean ignoreOffsets) {
        try {
            if (ignoreOffsets) {
                final Object result = deserialize(text);
                if (result == null) {
                    return null;
                }
                FastNode root = new FastNode(result, null, 0, "", "");
                dfs(result, root);
                return root;
            } else {
                return new ParserJsonAST().parse(text);
            }
        } catch (Throwable t) {
            return null;
        }
    }

    public static ResponseStatus getStatus(@NotNull Node node) {
        return ResponseStatus.getStatus(node.getChildValue("status"));
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
                } else if (VERSION_V3_1_REGEXP.matcher(value).matches()) {
                    return OpenApiVersion.V3_1;
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
                String[] parts = ref.split(REF_DELIMITER);
                url = parts[0];
                pointer = "/" + parts[1];
            } else {
                url = ref;
                pointer = "";
            }
            ExtRef extRef = ExtRefService.getInstance(project).get(url);
            if (extRef != null) {
                VirtualFile extRefFile = extRef.getVirtualFile();
                if (extRefFile != null) {
                    Node root = ASTService.getInstance(project).getRootNode(extRefFile);
                    if (root != null) {
                        return createPair(extRefFile, root.find(pointer), !pointer.isEmpty());
                    }
                }
            }
        }
        // Usual file pointer reference
        else if (ref.contains(REF_DELIMITER)) {
            String[] parts = ref.split(REF_DELIMITER);
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

    public static String getFileNameFromURL(@NotNull String href, @NotNull String defaultName) {
        try {
            URL url = new URL(href);
            return FilenameUtils.getBaseName(url.getPath());
        } catch (MalformedURLException ignored) {
        }
        return defaultName;
    }

    public static String getURI(String fileName) {
        return new File(fileName).toURI().toString();
    }

    @Nullable
    public static String getURI(@Nullable VirtualFile file) {
        return file == null ? null : getURI(file.getPath());
    }

    @NotNull
    public static String convertAllTabsToSpaces(@NotNull String text, int indent) {
        return text.replaceAll(TAB_REPLACE_REGEXP, new DocumentIndent(indent, ' ').toString());
    }

    @Nullable
    public static String serialize(@NotNull ObjectMapper mapper, @NotNull Object data, boolean minify) {
        try {
            if (minify) {
                 return mapper.writer(PRINTER).writeValueAsString(data);
            }
            return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(data);
        } catch (JsonProcessingException ignored) {
        }
        return null;
    }

    @Nullable
    public static String serialize(@NotNull Object data, boolean minify) {
        return serialize(MAPPER, data, minify);
    }

    @NotNull
    public static String serialize(@NotNull Object data, boolean minify, @NotNull String defaultValue) {
        return Objects.requireNonNullElse(serialize(MAPPER, data, minify), defaultValue);
    }

    @NotNull
    public static Object deserialize(@NotNull String value, @NotNull Object defaultObj) {
        return Objects.requireNonNullElse(deserialize(MAPPER, value, Map.class), defaultObj);
    }

    @Nullable
    public static Object deserialize(@NotNull String value) {
        return deserialize(MAPPER, value, Map.class);
    }

    @Nullable
    public static <T> T deserialize(@NotNull ObjectMapper mapper, @NotNull String value, @NotNull Class<T> valueType) {
        try {
            return mapper.readValue(value, valueType);
        } catch (JsonProcessingException ignored) {
        }
        return null;
    }

    public static void goToPointerInFile(@NotNull Project project, @NotNull VirtualFile file, @NotNull String pointer) {
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(file);
        if (root != null) {
            Node target = root.find(pointer);
            if (target != null) {
                ApplicationManager.getApplication().invokeLater(() -> {
                    int offset = target.getRange().getStartOffset();
                    new OpenFileDescriptor(project, file, offset).navigate(true);
                });
            }
        }
    }

    public static void onCopyIssueId(@NotNull String id) {
        try {
            CopyPasteManager.getInstance().setContents(new StringSelection(id));
        } catch (Exception ignore) {
        }
    }

    @Nullable
    public static PsiFile findPsiFile(@NotNull Project project, @NotNull String filePath) {
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
        return file != null ? findPsiFile(project, file) : null;
    }

    @Nullable
    public static PsiFile findPsiFile(@NotNull Project project, @NotNull VirtualFile file) {
        // If the virtual file is invalid findFile rises unexpected exception
        return file.isValid() ? PsiManager.getInstance(project).findFile(file) : null;
    }
    
    @NotNull
    public static String getOs() {
        if (SystemInfoRt.isWindows) {
            return "win32";
        } else if (SystemInfoRt.isLinux) {
            return "linux";
        } else if (SystemInfoRt.isMac) {
            return "darwin";
        } else if (SystemInfoRt.isFreeBSD) {
            return "freebsd";
        } else if (SystemInfoRt.isSolaris) {
            return "sunos";
        } else if (SystemInfoRt.isUnix) {
            return "aix";
        }
        return "";
    }

    @NotNull
    public static String getOsArch() {
        return System.getProperty("os.arch").toLowerCase(Locale.ENGLISH);
    }
    
    public static boolean isArm64() {
        String arch = getOsArch();
        return "arm64".equals(arch) || "aarch64".equals(arch);
    }

    public static boolean isX64() {
        String arch = getOsArch();
        return "x64".equals(arch) || "amd64".equals(arch) || "x86_64".equals(arch);
    }

    public static void turnOnVcsShowConfirmation(@NotNull Project project) {
    }

    public static boolean turnOffVcsShowConfirmation(@NotNull Project project) {
        return false;
    }

    public static PsiFile getOpenAPIPsiFile(@NotNull AnJActionEvent event) {
        Project project = event.getProject();
        if (project != null) {
            VirtualFile file = getSelectedOpenAPIFile(project);
            if (file != null) {
                return findPsiFile(project, file);
            }
        }
        return null;
    }

    private static Pair<VirtualFile, Node> createPair(VirtualFile file, Node node, boolean strict) {
        if (file == null) {
            return null;
        } else {
            if (strict) {
                return (node == null) ? null : new Pair<>(file, node);
            } else {
                return new Pair<>(file, node);
            }
        }
    }

    private static VirtualFile getRefVirtualFile(VirtualFile file, String refFileName) {
        File rootFile = new File(Paths.get(file.getPath()).getParent().toString());
        return LocalFileSystem.getInstance().findFileByIoFile(new File(rootFile, refFileName));
    }
    
    @SuppressWarnings("unchecked")
    private static void dfs(Object object, FastNode astNode) {
        int depth = astNode.getDepth();
        String pointer = astNode.getJsonPointer();
        if (object instanceof Map) {
            List<Node> children = new LinkedList<>();
            for (Map.Entry<String, Object> entry : ((Map<String, Object>) object).entrySet()) {
                String key = entry.getKey();
                Object value = entry.getValue();
                FastNode child = new FastNode(value, astNode, depth + 1, pointer + "/" + escape(key), key);
                children.add(child);
                dfs(value, child);
            }
            astNode.addSortedChildren(children);
        } else if (object instanceof List) {
            int i = 0;
            List<Node> children = new LinkedList<>();
            for (Object value : (List<Object>) object) {
                FastNode child = new FastNode(value, astNode, depth + 1, pointer + "/" + i, String.valueOf(i));
                children.add(child);
                dfs(value, child);
                i++;
            }
            astNode.addSortedChildren(children);
        }
    }
}
