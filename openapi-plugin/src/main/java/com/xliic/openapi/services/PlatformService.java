package com.xliic.openapi.services;

import java.util.Base64;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.application.ModalityState;
import com.xliic.core.codeInsight.daemon.DaemonCodeAnalyzer;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.core.ui.Messages;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.listeners.PlatformDocumentListener;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.PlatformReopener;
import com.xliic.openapi.platform.PlatformReportPuller;
import com.xliic.openapi.platform.callback.SuccessResponseCallback;
import com.xliic.openapi.platform.tree.PlatformFavoriteState;
import com.xliic.openapi.platform.tree.ui.PlatformPanelView;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.services.api.IPlatformService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.Utils;

import okhttp3.Callback;

public final class PlatformService implements IPlatformService, SettingsListener, Disposable {

    private static final String CONFIRMATION = "Are you sure you want to update remote API?";

    private final Project project;
    private final List<Task.Backgroundable> auditBkgTasks;
    private final Map<String, Boolean> modificationsMap;
    private final Map<String, PlatformDocumentListener> listenersMap;
    private final Map<DefaultMutableTreeNode, Callback> treeAsyncCallbacksMap;
    private final PlatformReopener reopener;
    private PlatformFavoriteState favoriteState = new PlatformFavoriteState();

    public PlatformService(@NotNull Project project) {
        this.project = project;
        auditBkgTasks = Collections.synchronizedList(new LinkedList<>());
        modificationsMap = new ConcurrentHashMap<>();
        listenersMap = new HashMap<>();
        treeAsyncCallbacksMap = new ConcurrentHashMap<>();
        reopener = new PlatformReopener(project);
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    public static PlatformService getInstance(@NotNull Project project) {
        return project.getService(PlatformService.class);
    }

    public void subscribe() {
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    @Override
    @NotNull
    public PlatformFavoriteState getState() {
        return favoriteState;
    }

    @Override
    public void loadState(@NotNull PlatformFavoriteState state) {
        favoriteState = state;
    }

    public Map<DefaultMutableTreeNode, Callback> getTreeAsyncCallbacks() {
        return treeAsyncCallbacksMap;
    }

    public void waitForPlatformAudit(@NotNull String apiId, @Nullable VirtualFile file) {
        Task.Backgroundable task = new Task.Backgroundable(project, "Platform audit", false) {
            @Override
            public void run(@NotNull ProgressIndicator progressIndicator) {
                progressIndicator.setText("Waiting for assessment report");
                try {
                    Node report = new PlatformReportPuller(apiId,1000, 60000).get();
                    PlatformService platformService = PlatformService.getInstance(project);
                    platformService.platformAuditReady(apiId, file, report);
                } catch (Exception ignored) {
                } finally {
                    auditBkgTasks.remove(this);
                }
            }
        };
        auditBkgTasks.add(task);
        ProgressManager.getInstance().run(task);
    }

    public void platformAuditReady(@NotNull String apiId, @Nullable VirtualFile file, @Nullable Node node) {
        if (node != null) {
            Node assessment = node.find("/attr/data");
            float grade = Float.parseFloat(assessment.getChild("grade").getValue());
            boolean isValid = Boolean.parseBoolean(assessment.getChild("isValid").getValue());
            SwingUtilities
                    .invokeLater(() -> project.getMessageBus().syncPublisher(PlatformListener.TOPIC).auditReportForAPIUpdated(apiId, grade, isValid));
            if (file != null) {
                AuditService auditService = AuditService.getInstance(project);
                Audit report = auditService.getAuditReport(file.getPath());
                byte[] decodedBytes = Base64.getDecoder().decode(node.getChild("data").getValue());
                Node reportNode = Utils.getJsonAST(new String(decodedBytes));
                ApplicationManager.getApplication().runReadAction(() -> {
                    boolean showAsHTML = report == null || report.isShowAsHTML();
                    boolean showAsProblems = report == null || report.isShowAsProblems();
                    Audit newReport = new Audit(project, file.getPath(), reportNode, true, showAsHTML, showAsProblems);
                    auditService.setAuditReport(file.getPath(), newReport);
                    PsiFile psiFile = PsiManager.getInstance(project).findFile(file);
                    if (psiFile != null) {
                        DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
                    }
                    SwingUtilities.invokeLater(() -> project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportReady(file));
                });
            }
        }
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (Settings.hasPlatformKey(keys) && !project.isDisposed()) {
            ToolWindowManager manager = ToolWindowManager.getInstance(project);
            if (PlatformConnection.isPlatformIntegrationEnabled()) {
                ToolWindow platformWindow = manager.getToolWindow(ToolWindowId.OPEN_API_PLATFORM);
                if (platformWindow != null && !platformWindow.isDisposed()) {
                    PlatformPanelView view = (PlatformPanelView) platformWindow.getView();
                    if (view != null && !view.isReady()) {
                        // Eclipse Development Note: removing will trigger view recreation
                        platformWindow.remove();
                    }
                }
                // Eclipse Development Note: view is always registered, open it in its
                // perspective scope
                createPlatformWindow(true);
            } else {
                ToolWindow window = manager.getToolWindow(ToolWindowId.OPEN_API_PLATFORM);
                if (window != null && !window.isDisposed()) {
                    window.remove();
                }
                EclipseUtil.removeTempProject();
            }
        }
    }

    public void createPlatformWindow(boolean activate) {
        if (activate) {
            ApplicationManager.getApplication().invokeAndWait(() -> {
                Utils.activateToolWindow(project, ToolWindowId.OPEN_API_PLATFORM);
                project.getMessageBus().syncPublisher(PlatformListener.TOPIC).reloadAll();
            }, ModalityState.NON_MODAL);
        }
        EclipseUtil.createTempProject();
    }

    public void addListener(@NotNull VirtualFile file) {
        modificationsMap.put(file.getPath(), false);
        if (!listenersMap.containsKey(file.getPath())) {
            PlatformDocumentListener listener = new PlatformDocumentListener(project);
            listenersMap.put(file.getPath(), listener);
            ApplicationManager.getApplication().runReadAction(() -> {
                Document document = FileDocumentManager.getInstance().getDocument(file);
                if (document != null) {
                    document.addDocumentListener(listener);
                }
            });
        }
    }

    public void removeListener(@NotNull VirtualFile file) {
        modificationsMap.remove(file.getPath());
        PlatformDocumentListener listener = listenersMap.remove(file.getPath());
        if (listener != null) {
            ApplicationManager.getApplication().runReadAction(() -> {
                Document document = FileDocumentManager.getInstance().getDocument(file);
                if (document != null) {
                    document.removeDocumentListener(listener);
                }
            });
        }
    }

    public void setFileIsModified(@NotNull VirtualFile file, boolean isModified) {
        modificationsMap.put(file.getPath(), isModified);
    }

    public boolean isPlatformFileModified(@NotNull VirtualFile file) {
        Boolean isModified = modificationsMap.get(file.getPath());
        return isModified != null ? isModified : false;
    }

    public void clearPlatformFileModifications() {
        modificationsMap.clear();
    }

    public void saveToPlatform(@NotNull VirtualFile file, boolean updateFileIsModified) {
        final int rc = Messages.showOkCancelDialog(project, CONFIRMATION, "Confirm", "Yes", "Cancel", Messages.getQuestionIcon());
        if (rc == Messages.OK) {
            Document document = FileDocumentManager.getInstance().getDocument(file);
            if (document != null) {
                ApplicationManager.getApplication().invokeLaterOnWriteThread(() -> {
                    FileDocumentManager.getInstance().saveDocument(document);
                    String text = Utils.getTextFromFile(file);
                    if (text != null) {
                        String apiId = PlatformUtils.getApiId(file);
                        PlatformAPIs.updateAPIContent(apiId, text, new SuccessResponseCallback(project) {
                            @Override
                            public void onCode200Response() {
                                if (updateFileIsModified) {
                                    setFileIsModified(file, false);
                                    EclipseWorkbenchUtil.updateActionBarsInSWTThread();
                                }
                                waitForPlatformAudit(apiId, file);
                            }
                        });
                    }
                });
            }
        }
    }

    public void sheduleToReopenPlatformFile(@NotNull VirtualFile deadFile) {
        reopener.sheduleToReopenPlatformFile(deadFile);
    }

    @Override
    public void dispose() {
        project.getMessageBus().connect().unsubscribe(this);
        modificationsMap.clear();
        listenersMap.clear();
        auditBkgTasks.clear();
        treeAsyncCallbacksMap.clear();
        reopener.dispose();
    }
}
