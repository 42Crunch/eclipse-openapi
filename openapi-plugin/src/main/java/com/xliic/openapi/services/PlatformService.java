package com.xliic.openapi.services;

import com.xliic.core.codeInsight.daemon.DaemonCodeAnalyzer;
import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.application.ModalityState;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.listeners.PlatformDocumentListener;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAuditWaiter;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.callback.PlatformOASCallback;
import com.xliic.openapi.platform.callback.SuccessResponseCallback;
import com.xliic.openapi.platform.tree.PlatformFavoriteState;
import com.xliic.openapi.platform.tree.ui.PlatformPanelView;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.services.api.IPlatformService;
import com.xliic.openapi.settings.SettingsKeys;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.SettingsListener;
import okhttp3.Callback;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public final class PlatformService implements IPlatformService, SettingsListener, Disposable {

    private static final String CONFIRMATION = "Are you sure you want to update remote API?";

    private final Project project;
    private final List<PlatformAuditWaiter> auditWaiters;
    private final Map<String, Boolean> modificationsMap;
    private final Map<String, PlatformDocumentListener> listenersMap;
    private final Map<DefaultMutableTreeNode, Callback> treeAsyncCallbacksMap;
    private PlatformFavoriteState favoriteState = new PlatformFavoriteState();

    public PlatformService(@NotNull Project project) {
        this.project = project;
        auditWaiters = Collections.synchronizedList(new LinkedList<>());
        modificationsMap = new ConcurrentHashMap<>();
        listenersMap = new HashMap<>();
        treeAsyncCallbacksMap = new ConcurrentHashMap<>();
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    public static PlatformService getInstance(@NotNull Project project) {
        return project.getService(PlatformService.class);
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
        PlatformAuditWaiter waiter = new PlatformAuditWaiter(project, apiId, file);
        new Thread(waiter).start();
        auditWaiters.add(waiter);
    }

    public void platformAuditReady(@NotNull String apiId,
                                   @Nullable VirtualFile file,
                                   @Nullable Node node,
                                   @NotNull PlatformAuditWaiter waiter) {
        auditWaiters.remove(waiter);
        if (node != null) {
            Node assessment = node.find("/attr/data");
            float grade = Float.parseFloat(assessment.getChild("grade").getValue());
            boolean isValid = Boolean.parseBoolean(assessment.getChild("isValid").getValue());
            SwingUtilities.invokeLater(() -> project.getMessageBus().syncPublisher(
                    PlatformListener.TOPIC).auditReportForAPIUpdated(apiId, grade, isValid));
            if (file != null) {
                AuditService auditService = AuditService.getInstance(project);
                Audit report = auditService.getAuditReport(file.getPath());
                byte[] decodedBytes = Base64.getDecoder().decode(node.getChild("data").getValue());
                Node reportNode = OpenApiUtils.getJsonAST(new String(decodedBytes));
                ApplicationManager.getApplication().runReadAction(() -> {
                    boolean showAsHTML = report == null || report.isShowAsHTML();
                    boolean showAsProblems = report == null || report.isShowAsProblems();
                    Audit newReport = new Audit(project, file.getPath(), reportNode,
                            true, showAsHTML, showAsProblems);
                    auditService.setAuditReport(file.getPath(), newReport);
                    PsiFile psiFile = PsiManager.getInstance(project).findFile(file);
                    if (psiFile != null) {
                        DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
                    }
                    SwingUtilities.invokeLater(() -> project.getMessageBus().syncPublisher(
                            AuditListener.TOPIC).handleAuditReportReady(file));
                });
            }
        }
    }

    @Override
    public void propertiesUpdated(@NotNull String key) {
        if ((SettingsKeys.PLATFORM.equals(key) || SettingsKeys.API_KEY.equals(key) ||
                SettingsKeys.PLATFORM_ALL.equals(key)) && !project.isDisposed()) {
            ToolWindowManager windowManager = ToolWindowManager.getInstance(project);
            if (PlatformConnection.isEmpty()) {
                ToolWindow platformWindow = windowManager.getToolWindow(ToolWindowId.OPEN_API_PLATFORM);
                if (platformWindow != null && !platformWindow.isDisposed()) {
                    platformWindow.remove();
                }
				EclipseUtil.removeTempProject();
            } else {
                ToolWindow platformWindow = windowManager.getToolWindow(ToolWindowId.OPEN_API_PLATFORM);
                if (platformWindow != null && !platformWindow.isDisposed()) {
                	PlatformPanelView view = (PlatformPanelView) platformWindow.getView();
                	if (view != null && view.isUnavailable()) {
                		// Eclipse Development Note 
                		// Removing will trigger view recreation
                		platformWindow.remove();
                	}
                }
            	// Eclipse Development Note 
            	// The view is always registered, open it in its perspective scope
                invokeAndWaitToCreatePlatformWindow();
            }
        }
    }

    public void invokeAndWaitToCreatePlatformWindow() {
        ApplicationManager.getApplication().invokeAndWait(() -> {
        	OpenApiUtils.activateToolWindow(project, ToolWindowId.OPEN_API_PLATFORM);
            project.getMessageBus().syncPublisher(PlatformListener.TOPIC).reloadAll();
        }, ModalityState.NON_MODAL);
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
        final int rc = Messages.showOkCancelDialog(project, CONFIRMATION,
                "Confirm", "Yes", "Cancel", Messages.getQuestionIcon());
        if (rc == Messages.OK) {
            Document document = FileDocumentManager.getInstance().getDocument(file);
            if (document != null) {
                ApplicationManager.getApplication().invokeLaterOnWriteThread(() -> {
                    FileDocumentManager.getInstance().saveDocument(document);
                    String text = OpenApiUtils.getTextFromFile(file);
                    if (text != null) {
                        String apiId = PlatformUtils.getApiId(file);
                        PlatformAPIs.updateAPIContent(apiId, text, new SuccessResponseCallback(project) {
                            @Override
                            public void onCode200Response() {
                                if (updateFileIsModified) {
                                    setFileIsModified(file, false);
                                }
                                waitForPlatformAudit(apiId, file);
                            }
                        });
                    }
                });
            }
        }
    }

    public void reopenPlatformFile(@NotNull VirtualFile deadFile) {
        String apiId = PlatformUtils.getApiId(deadFile);
        PlatformAPIs.readApi(apiId, true,
                new PlatformOASCallback(project, null, null,
                        false, true, false));
    }

    @Override
    public void dispose() {
        modificationsMap.clear();
        listenersMap.clear();
        auditWaiters.clear();
        treeAsyncCallbacksMap.clear();
    }
}