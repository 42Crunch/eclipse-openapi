package com.xliic.openapi.services;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT;

import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
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
import com.xliic.openapi.report.AuditUtils;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.report.types.AuditBuilder;
import com.xliic.openapi.report.types.AuditDisplayOptions;
import com.xliic.openapi.services.api.IPlatformService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;

import okhttp3.Callback;

public final class PlatformService implements IPlatformService, SettingsListener, Disposable {

    private static final String CONFIRMATION = "Are you sure you want to update remote API?";

    @NotNull
    private final Project project;
    @NotNull
    private final List<Task.Backgroundable> auditBkgTasks;
    @NotNull
    private final Map<String, Boolean> fileIsDirtyMap = new ConcurrentHashMap<>();
    @NotNull
    private final Map<String, Boolean> fileReadOnlyMap = new ConcurrentHashMap<>();
    @NotNull
    private final Map<String, PlatformDocumentListener> listenersMap;
    @NotNull
    private final Map<String, Date> assessmentLastDates;
    @NotNull
    private final Map<DefaultMutableTreeNode, Callback> treeAsyncCallbacksMap;
    @NotNull
    private final PlatformReopener reopener;
    @NotNull
    private PlatformFavoriteState favoriteState = new PlatformFavoriteState();
    @NotNull
    private final AuditBuilder auditBuilder;

    public PlatformService(@NotNull Project project) {
        this.project = project;
        auditBkgTasks = Collections.synchronizedList(new LinkedList<>());
        listenersMap = new HashMap<>();
        assessmentLastDates = new HashMap<>();
        treeAsyncCallbacksMap = new ConcurrentHashMap<>();
        reopener = new PlatformReopener(project);
        auditBuilder = new AuditBuilder(project, true);
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

    @Nullable
    public Date getAssessmentLastDate(@NotNull String apiId) {
        return assessmentLastDates.get(apiId);
    }

    public void setAssessmentLastDate(@NotNull String apiId, @NotNull Date date) {
        assessmentLastDates.put(apiId, date);
    }

    public Map<DefaultMutableTreeNode, Callback> getTreeAsyncCallbacks() {
        return treeAsyncCallbacksMap;
    }

    public void waitForPlatformAudit(@NotNull String apiId, @Nullable VirtualFile file) {
        Task.Backgroundable task = new Task.Backgroundable(project, "Platform audit", false) {
            @Override
            public void run(@NotNull ProgressIndicator progressIndicator) {
                progressIndicator.setText(RUNNING_SECURITY_AUDIT);
                try {
                    Node report = new PlatformReportPuller(project, apiId,1000, 60000).get();
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
            Node assessment = Objects.requireNonNull(node.find("/attr/data"));
            float grade = Float.parseFloat(assessment.getChildValueRequireNonNull("grade"));
            boolean isValid = Boolean.parseBoolean(assessment.getChildValueRequireNonNull("isValid"));
            SwingUtilities.invokeLater(() ->
                project.getMessageBus().syncPublisher(PlatformListener.TOPIC).auditReportForAPIUpdated(apiId, grade, isValid));
            if (file != null) {
                AuditService auditService = AuditService.getInstance(project);
                Audit report = auditService.getAuditReport(file.getPath());
                Node reportNode = PlatformUtils.getAssessmentReportNode(node);
                if (reportNode == null) {
                    return;
                }
                String tid = node.getChildValueRequireNonNull("tid");
                try {
                    auditBuilder.setCompliance(AuditUtils.readAuditCompliance(tid));
                } catch (Exception e) {
                    auditBuilder.setCompliance(null);
                    e.printStackTrace();
                }
                try {
                    auditBuilder.setToDoReport(AuditUtils.readAuditReportSqgTodo(tid));
                } catch (Exception e) {
                    auditBuilder.setToDoReport(null);
                    e.printStackTrace();
                }
                boolean showInBrowser = report == null || report.getDisplayOptions().isShowInBrowser();
                boolean showInProblemsList = report == null || report.getDisplayOptions().isShowInProblemsList();
                AuditDisplayOptions options = new AuditDisplayOptions(showInBrowser, showInProblemsList);
                Audit newReport = auditBuilder.setFileName(file.getPath()).setAuditDisplayOptions(options).build(reportNode);
                auditService.setAuditReport(file.getPath(), newReport);
                ApplicationManager.getApplication().runReadAction(() -> {
                    newReport.finalizeInReadAction();
                    PsiFile psiFile = Utils.findPsiFile(project, file);
                    if (psiFile != null) {
                        DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
                    }
                    SwingUtilities.invokeLater(() -> {
                        if (report != null) {
                            project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportClean(report);
                        }
                    	project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportReady(file);
                    });
                });
            }
        }
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (Settings.hasPlatformKey(keys) && !project.isDisposed()) {
            ToolWindowManager manager = ToolWindowManager.getInstance(project);
            if (PlatformConnection.isPlatformIntegrationEnabled()) {
                ToolWindow platformWindow = manager.getToolWindow(ToolWindowId.PLATFORM);
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
                ToolWindow window = manager.getToolWindow(ToolWindowId.PLATFORM);
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
                WindowUtils.activateToolWindow(project, ToolWindowId.PLATFORM);
                project.getMessageBus().syncPublisher(PlatformListener.TOPIC).reloadAll();
            }, ModalityState.NON_MODAL);
        }
    }

    public void addListener(@NotNull VirtualFile file) {
    	fileIsDirtyMap.put(file.getPath(), false);
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
        fileReadOnlyMap.remove(file.getPath());
        fileIsDirtyMap.remove(file.getPath());
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

    public void setFileDirty(@NotNull VirtualFile file, boolean dirty) {
        fileIsDirtyMap.put(file.getPath(), dirty);
    }

    public void setFileReadOnly(@NotNull VirtualFile file, boolean readonly) {
        fileReadOnlyMap.put(file.getPath(), readonly);
    }

    public boolean isFileDirty(@NotNull VirtualFile file) {
        return fileIsDirtyMap.getOrDefault(file.getPath(), false);
    }

    public boolean isFileReadOnly(@NotNull VirtualFile file) {
        return fileReadOnlyMap.getOrDefault(file.getPath(), false);
    }

    public void projectClosingBeforeSave() {
        fileIsDirtyMap.clear();
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
                                	setFileDirty(file, false);
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
        fileReadOnlyMap.remove(deadFile.getPath());
        fileIsDirtyMap.remove(deadFile.getPath());
        reopener.sheduleToReopenPlatformFile(deadFile);
    }

    @Override
    public void dispose() {
        project.getMessageBus().connect().unsubscribe(this);
        fileIsDirtyMap.clear();
        fileReadOnlyMap.clear();
        listenersMap.clear();
        auditBkgTasks.clear();
        treeAsyncCallbacksMap.clear();
        reopener.dispose();
        assessmentLastDates.clear();
    }
}
