package com.xliic.openapi.services;

import static com.xliic.openapi.ToolWindowId.SCAN;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.application.ModalityState;
import com.xliic.core.codeInsight.daemon.DaemonCodeAnalyzer;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.config.payload.ScandManagerConnection;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.scan.ScanGeneralError;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.ScanRunConfig;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.platform.scan.task.ScanDockerTask;
import com.xliic.openapi.platform.scan.task.ScanTask;
import com.xliic.openapi.platform.scand.task.ScanJobTask;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.PrefsService;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.services.api.IScanService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.Settings.Platform;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;

public final class ScanService implements IScanService, SettingsListener, Disposable {

    public static final String TERMINAL_TAB = "Scan";
    private static final String CREDENTIALS_MSG = "Platform integration not enabled, please check your 42Crunch credentials";

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Node> failedFileAndReport;
    private volatile boolean myIsNewApi;
    private volatile boolean scanTaskInProgress;

    public ScanService(@NotNull Project project) {
        this.project = project;
        failedFileAndReport = new HashMap<>(1);
        myIsNewApi = false;
        scanTaskInProgress = false;
    }

    public static ScanService getInstance(@NotNull Project project) {
        return project.getService(ScanService.class);
    }

    public void subscribe() {
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    public void runScan(@NotNull ScanRunConfig config) {
        if (scanTaskInProgress) {
            return;
        }
        String runtime = PropertiesComponent.getInstance().getValue(Settings.Platform.Scan.RUNTIME);
        boolean useDocker = Settings.Platform.Scan.RUNTIME_DOCKER.equals(runtime);
        if (!useDocker) {
            ScandManagerConnection connection = new ScandManagerConnection();
            if (connection.getUrl().isEmpty()) {
                showGeneralError("Scand-manager url is not defined", null, null);
                return;
            }
        }
        ScanDockerTask.Callback callback = new ScanDockerTask.Callback() {

            @Override
            public void setDone(@NotNull ScanReport report) {
                scanTaskInProgress = false;
                resetFailedFileAndReport();
                ApplicationManager.getApplication().invokeAndWait(() ->
                        project.getMessageBus().syncPublisher(ScanListener.TOPIC).showScanReport(report));
            }

            @Override
            public void setRejected(@NotNull Exception e) {
                scanTaskInProgress = false;
                resetFailedFileAndReport();
                if (e instanceof ScanGeneralError) {
                	ScanGeneralError ge = (ScanGeneralError) e;
                    if (ge.getReport() != null) {
                        saveFailedFileAndReport(ge.getReport());
                    }
                    showGeneralError(ge.getMessage(), ge.getCode(), ge.getDetails());
                } else {
                    showGeneralError(e.getMessage(), null, null);
                }
            }
        };
        scanTaskInProgress = true;
        ProgressManager.getInstance().run(useDocker ? new ScanDockerTask(project, config, callback, myIsNewApi) :
                new ScanJobTask(project, config, callback, myIsNewApi));
    }

    public void scanActionPerformed(@NotNull VirtualFile file, @NotNull ScanOperation payload) {
        if (scanTaskInProgress) {
            return;
        }
        if (!PlatformConnection.isPlatformIntegrationEnabled()) {
            MsgUtils.info(project, CREDENTIALS_MSG, true);
            return;
        }
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundle = bundleService.getBundle(file.getPath());
        if (bundle == null) {
            return;
        }
        if (bundle.isBundleComplete()) {
            scanTaskInProgress = true;
            initFailedFileAndReport(file.getPath());
            startScan(file);
            ProgressManager.getInstance().run(new ScanTask(project, payload.getPath(), bundle, new ScanTask.Callback() {

                @Override
                public void setDone(@NotNull String oas, @NotNull String config, boolean isNewApi) {
                    myIsNewApi = isNewApi;
                    payload.setOas(oas);
                    payload.setRawOas(oas);
                    payload.setConfig(config);
                    resetFailedFileAndReport(file.getPath());
                    createOrActiveScanWindow(payload);
                    scanTaskInProgress = false;
                }

                @Override
                public void setRejected(@NotNull Exception e) {
                    resetFailedFileAndReport(file.getPath());
                    String code = null;
                    if (e instanceof ScanGeneralError) {
                    	ScanGeneralError ge = (ScanGeneralError) e;
                        if (ge.getReport() != null) {
                            code = ScanGeneralError.AUDIT_ERROR_CODE;
                            saveFailedFileAndReport(file.getPath(), ge.getReport());
                        }
                    }
                    createOrActiveScanWindow(e.getMessage(), code);
                    scanTaskInProgress = false;
                }
            }));
        } else {
            bundleService.notifyOfErrors(file.getPath());
        }
    }

    public @Nullable Node getFailedReport() {
        return failedFileAndReport.size() == 1 ? failedFileAndReport.values().iterator().next() : null;
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (Settings.hasPlatformKey(keys) && !project.isDisposed()) {
            if (keys.contains(Platform.TURNED_OFF)) {
                scanTaskInProgress = false;
                ToolWindow window = ToolWindowManager.getInstance(project).getToolWindow(SCAN);
                if (window != null && !window.isDisposed()) {
                    window.remove();
                }
            }
        }
    }

    @Override
    public void dispose() {
        failedFileAndReport.clear();
    }

    private void createOrActiveScanWindow(ScanOperation payload) {
        VirtualFile file = payload.getPsiFile().getVirtualFile();
        Preferences prefs = PrefsService.getInstance(project).getPreferences(file);
        Environment myEnv = EnvService.getInstance(project).getEnv();
        ApplicationManager.getApplication().invokeAndWait(() -> {
            WindowUtils.activateToolWindow(project, SCAN, () ->
            	project.getMessageBus().syncPublisher(ScanListener.TOPIC).scanOperation(payload, myEnv, prefs));
        }, ModalityState.NON_MODAL);
    }

    private void createOrActiveScanWindow(String error, String code) {
        ApplicationManager.getApplication().invokeAndWait(() -> {
            WindowUtils.activateToolWindow(project, SCAN, () -> showGeneralError(error, code, null));
        }, ModalityState.NON_MODAL);
    }

    private void startScan(VirtualFile file) {
        ApplicationManager.getApplication().invokeAndWait(() -> {
            WindowUtils.activateToolWindow(project, SCAN, () ->
            	project.getMessageBus().syncPublisher(ScanListener.TOPIC).startScan(file));
        }, ModalityState.NON_MODAL);
    }

    private void initFailedFileAndReport(String filePath) {
        failedFileAndReport.clear();
        failedFileAndReport.put(filePath, null);
    }

    private void saveFailedFileAndReport(Node report) {
        if (failedFileAndReport.size() == 1) {
            String filePath = failedFileAndReport.keySet().iterator().next();
            saveFailedFileAndReport(filePath, report);
        }
    }

    private void saveFailedFileAndReport(String filePath, Node report) {
        failedFileAndReport.put(filePath, report);
    }

    private void resetFailedFileAndReport() {
        if (failedFileAndReport.size() == 1) {
            String filePath = failedFileAndReport.keySet().iterator().next();
            resetFailedFileAndReport(filePath);
        }
    }

    private void resetFailedFileAndReport(String filePath) {
        AuditService auditService = AuditService.getInstance(project);
        Audit report = auditService.removeAuditReport(filePath);
        if (report != null) {
            ApplicationManager.getApplication().invokeAndWait(() -> {
                project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportClean(report);
                PsiFile psiFile = Utils.findPsiFile(project, filePath);
                if (psiFile != null) {
                    DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
                }
            });
        }
        saveFailedFileAndReport(filePath, null);
    }

    private void showGeneralError(String message, String code, String details) {
        ApplicationManager.getApplication().invokeAndWait(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).showGeneralError(message, code, details));
    }
}
