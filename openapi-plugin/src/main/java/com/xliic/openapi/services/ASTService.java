package com.xliic.openapi.services;

import static com.xliic.openapi.platform.dictionary.types.DataFormat.FORMAT;
import static com.xliic.openapi.utils.Utils.getFileType;
import static com.xliic.openapi.utils.Utils.getTextFromFile;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.codeInsight.daemon.DaemonCodeAnalyzer;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.jsonSchema.ide.JsonSchemaService;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.async.AsyncService;
import com.xliic.openapi.async.AsyncTask;
import com.xliic.openapi.listeners.TreeDocumentListener;
import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.ParserYamlAST;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.services.api.IASTService;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.utils.Utils;

public class ASTService extends AsyncService implements IASTService, Disposable {

    private static final int DELAY = 500;
    private static final int INIT_DELAY = 500;
    private static final int CACHE_CAPACITY = 100;
    private static final int CACHE_TO_WIPE_THRESHOLD = 10;

    private final Map<String, Node> cache;
    private final Map<String, OpenApiVersion> versionCache;
    private final Map<String, TreeDocumentListener> astListenersMap;
    private final Set<String> knownOpenAPIFiles;

    private final ParserJsonAST parserJsonAST = new ParserJsonAST();
    private final ParserYamlAST parserYamlAST = new ParserYamlAST();

    private final AuditService auditService;
    private final BundleService bundleService;
    private final QuickFixService quickFixService;

    private int counter;

    @SuppressWarnings("serial")
    public ASTService(@NotNull Project project) {
        super(project, DELAY, INIT_DELAY);
        this.cache = Collections.synchronizedMap(new LinkedHashMap<>(CACHE_CAPACITY + 1, 1.0f, true) {
            @Override
            public boolean removeEldestEntry(Map.Entry<String, Node> entry) {
                return size() > CACHE_CAPACITY;
            }
        });
        versionCache = new HashMap<>();
        astListenersMap = new HashMap<>();
        knownOpenAPIFiles = new HashSet<>();
        auditService = AuditService.getInstance(project);
        bundleService = BundleService.getInstance(project);
        quickFixService = QuickFixService.getInstance();
        counter = 0;
    }

    public static ASTService getInstance(@NotNull Project project) {
        return project.getService(ASTService.class);
    }

    public static @NotNull OpenApiVersion getOpenAPIVersion(@NotNull Project project, @NotNull VirtualFile file) {
        return getOpenAPIVersion(project, file.getPath());
    }

    public static @NotNull OpenApiVersion getOpenAPIVersion(@NotNull Project project, @NotNull String fileName) {
        if (getFileType(fileName) == OpenApiFileType.Unsupported) {
            return OpenApiVersion.Unknown;
        }
        return ASTService.getInstance(project).getOpenAPIVersion(fileName);
    }

    @Override
    protected void onRunComplete() {
        if (counter > CACHE_TO_WIPE_THRESHOLD) {
            counter = 0;
            for (String fileName : new HashSet<>(cache.keySet())) {
                if (!bundleService.isFileBeingBundled(fileName) && !auditService.isFileBeingAudited(fileName)) {
                    removeFromCache(fileName);
                }
            }
        }
        counter++;
    }

    @Override
    protected void beforeFileOpened(AsyncTask task) {
        VirtualFile file = task.getFile();
        if (file != null) {
            // No real document content change has happened
            // This call must not fire the document change event
            parse(file, false);
        }
    }

    @Override
    protected void documentChanged(AsyncTask task) {
        VirtualFile file = task.getFile();
        if (file != null) {
            parse(file, true);
        }
    }

    @Override
    protected void selectionChanged(AsyncTask task) {
        treeDfs(task);
        ApplicationManager.getApplication().invokeLater(() -> {
            if (!project.isDisposed()) {
                project.getMessageBus().syncPublisher(FileListener.TOPIC).handleSelectedFile(task.getFile());
            }
        });
    }

    @Override
    protected void beforeFileClosed(AsyncTask task) {
        VirtualFile file = task.getFile();
        if (file != null) {
            TreeDocumentListener treeListener = astListenersMap.remove(file.getPath());
            if (treeListener != null) {
                ApplicationManager.getApplication().runReadAction(() -> {
                    Document document = FileDocumentManager.getInstance().getDocument(file);
                    if (document != null) {
                        document.removeDocumentListener(treeListener);
                    }
                });
            }
            ApplicationManager.getApplication().invokeLater(() -> {
                if (!project.isDisposed()) {
                    auditService.removeAuditReport(file.getPath());
                    quickFixService.handleAuditReportRemoved(file.getPath());
                    knownOpenAPIFiles.remove(file.getPath());
                    project.getMessageBus().syncPublisher(FileListener.TOPIC).handleClosedFile(file);
                }
            });
        }
    }

    @Override
    protected void allFilesClosed(AsyncTask task) {
        knownOpenAPIFiles.clear();
        ApplicationManager.getApplication().invokeLater(() -> {
            if (!project.isDisposed()) {
                project.getMessageBus().syncPublisher(FileListener.TOPIC).handleAllFilesClosed();
            }
        });
    }

    @Override
    public void refactorRename(AsyncTask task) {
        VirtualFile newFile = task.getFile();
        String oldFileName = (String) task.get(OLD_FILE_NAME_KEY);
        Node node = removeFromCache(oldFileName);
        if (node != null) {
            putInCache(newFile.getPath(), node);
        }
        if (knownOpenAPIFiles.contains(oldFileName)) {
            knownOpenAPIFiles.remove(oldFileName);
            knownOpenAPIFiles.add(newFile.getPath());
        }
    }

    @Override
    protected void treeDfs(AsyncTask task) {
        VirtualFile file = task.getFile();
        Node root = cache.get(file.getPath());
        if (root != null) {
            dfsParsedTree(file.getPath(), root);
            ApplicationManager.getApplication().invokeLater(() -> {
                PsiFile psiFile = PsiManager.getInstance(project).findFile(file);
                if (psiFile != null) {
                    DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
                }
            });
        }
    }

    public void parse(@NotNull VirtualFile file, boolean documentChanged) {
        final String fileName = file.getPath();
        Node root = getRootNodeFromFile(fileName);
        putInCache(fileName, root);
        dfsParsedTree(fileName, root);
        boolean updateSchemas = false;
        if (root != null) {
            OpenApiVersion version = Utils.getOpenAPIVersion(root);
            if (version == OpenApiVersion.Unknown) {
                updateSchemas = knownOpenAPIFiles.contains(fileName);
                knownOpenAPIFiles.remove(fileName);
            } else {
                updateSchemas = !knownOpenAPIFiles.contains(fileName);
                knownOpenAPIFiles.add(fileName);
            }
        }
        if (!astListenersMap.containsKey(fileName)) {
            ApplicationManager.getApplication().runReadAction(() -> {
                Document document = FileDocumentManager.getInstance().getDocument(file);
                if (document != null) {
                    TreeDocumentListener treeListener = new TreeDocumentListener(project);
                    astListenersMap.put(fileName, treeListener);
                    document.addDocumentListener(treeListener);
                }
            });
        }
        auditService.update(file);
        boolean finalUpdateSchemas = updateSchemas;
        ApplicationManager.getApplication().invokeLater(() -> {
            PsiFile psiFile = PsiManager.getInstance(project).findFile(file);
            if (psiFile != null) {
                DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
            }
            if (finalUpdateSchemas) {
                JsonSchemaService.Impl.get(project).reset();
            }
            if (documentChanged && !project.isDisposed()) {
                project.getMessageBus().syncPublisher(FileListener.TOPIC).handleDocumentChanged(file);
            }
        });
    }

    @Override
    public boolean isKnownOpenAPIFile(@NotNull String fileName) {
        return knownOpenAPIFiles.contains(fileName);
    }

    @Override
    @Nullable
    public Node getRootNode(@NotNull VirtualFile file) {
        return getRootNode(file.getPath());
    }

    @Override
    @Nullable
    public Node getRootNode(@NotNull String fileName) {
        Node result = cache.get(fileName);
        if (result != null) {
            return result;
        } else {
            return getRootNode(fileName, getTextFromFile(fileName, true));
        }
    }

    @Override
    @Nullable
    public Node getRootNode(@NotNull String fileName, @NotNull String text) {
        Node result = cache.get(fileName);
        if (result != null) {
            return result;
        } else {
            Node root = getRootNodeFromText(fileName, text);
            putInCache(fileName, root);
            return root;
        }
    }

    @Nullable
    public Node getRootNodeFromText(@NotNull String fileName, @NotNull String text) {
        try {
            return getParser(fileName).parse(text);
        } catch (Throwable ignored) {
        }
        return null;
    }

    @Nullable
    public Node getRootNodeFromFile(@NotNull String fileName) {
        return getRootNodeFromText(fileName, getTextFromFile(fileName, true));
    }

    @Override
    @NotNull
    public Node getOpenAPIRootNode(@NotNull String fileName) throws Exception {
        Node root = cache.get(fileName);
        if (root == null) {
            root = getParser(fileName).parse(getTextFromFile(fileName, true));
        }
        if (Utils.getOpenAPIVersion(root) == OpenApiVersion.Unknown) {
            throw new Exception("Unknown OAS version");
        } else {
            putInCache(fileName, root);
        }
        return root;
    }

    private void putInCache(String fileName, Node root) {
        cache.put(fileName, root);
        if (root == null) {
            versionCache.put(fileName, null);
        } else {
            versionCache.put(fileName, Utils.getOpenAPIVersion(root));
        }
    }

    private Node removeFromCache(String fileName) {
        versionCache.remove(fileName);
        return cache.remove(fileName);
    }

    private ParserAST getParser(String fileName) {
        return (Utils.getFileType(fileName) == OpenApiFileType.Json) ? parserJsonAST : parserYamlAST;
    }

    @Override
    public @NotNull OpenApiVersion getOpenAPIVersion(@NotNull String fileName) {
        OpenApiVersion version = versionCache.get(fileName);
        return (version == null) ? OpenApiVersion.Unknown : version;
    }

    private void dfsParsedTree(@NotNull String fileName, @Nullable Node root) {
        if (PlatformConnection.isPlatformIntegrationEnabled()) {
            DictionaryService ddService = DictionaryService.getInstance(project);
            if (!ddService.getDictionaries().isEmpty()) {
                if (root == null || (getOpenAPIVersion(fileName) == OpenApiVersion.Unknown)) {
                    ddService.removeFormatNodes(fileName);
                } else {
                    List<Node> targets = new LinkedList<>();
                    dfs(root, targets);
                    if (targets.isEmpty()) {
                        ddService.removeFormatNodes(fileName);
                    } else {
                        ddService.setFormatNodes(fileName, targets);
                    }
                }
            }
        }
    }

    private static void dfs(Node node, List<Node> targets) {
        if (FORMAT.equals(node.getKey()) && node.getTypedValue() instanceof String && !isNodeInExample(node.getJsonPointer())) {
            targets.add(node);
        } else {
            for (Node child : node.getChildren()) {
                dfs(child, targets);
            }
        }
    }

    private static boolean isNodeInExample(String pointer) {
        return pointer.contains("/example/") || pointer.contains("/examples/") || pointer.contains("/x-42c-sample/");
    }

    @Override
    public void dispose() {
        super.dispose();
        cache.clear();
        versionCache.clear();
        astListenersMap.clear();
        knownOpenAPIFiles.clear();
        counter = 0;
    }
}
