package com.xliic.openapi.platform.callback;

import java.util.Objects;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.report.AuditUtils;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.report.types.AuditBuilder;
import com.xliic.openapi.report.types.AuditDisplayOptions;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.utils.WindowUtils;

public class PlatformAuditCallback extends SuccessASTResponseCallback {

    @NotNull
    private final VirtualFile file;
    @Nullable
    private final Tree tree;
    @Nullable
    private final DefaultMutableTreeNode progressDMTN;
    @NotNull
    private final AuditBuilder auditBuilder;

    private final boolean showInBrowser;
    private final boolean openInEditor;

    public PlatformAuditCallback(@NotNull Project project,
                                 @NotNull VirtualFile file,
                                 @Nullable Tree tree,
                                 @Nullable DefaultMutableTreeNode progressDMTN,
                                 boolean showInBrowser,
                                 boolean openInEditor) {
        this(project, file, tree, progressDMTN, showInBrowser, openInEditor, true);
    }

    public PlatformAuditCallback(@NotNull Project project,
                                 @NotNull VirtualFile file,
                                 @Nullable Tree tree,
                                 @Nullable DefaultMutableTreeNode progressDMTN,
                                 boolean showInBrowser,
                                 boolean openInEditor,
                                 boolean showDialogOnFailure) {
        super(project, showDialogOnFailure);
        this.file = file;
        this.tree = tree;
        this.progressDMTN = progressDMTN;
        this.showInBrowser = showInBrowser;
        this.openInEditor = openInEditor;
        auditBuilder = new AuditBuilder(project, true);
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        try {
            String apiId = node.getChildValueRequireNonNull("aid");
            Node assessment = Objects.requireNonNull(node.find("/attr/data"));
            float grade = Float.parseFloat(assessment.getChildValueRequireNonNull("grade"));
            boolean isValid = Boolean.parseBoolean(assessment.getChildValueRequireNonNull("isValid"));
            ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(PlatformListener.TOPIC).auditReportForAPIUpdated(apiId, grade, isValid));
            Node reportNode = PlatformUtils.getAssessmentReportNode(node);
            if (reportNode == null) {
                PlatformUtils.setInProgress(tree, progressDMTN, false);
                onFailure("Response report content is not JSON");
                return;
            }
            String tid = node.getChildValueRequireNonNull("tid");
            try {
                auditBuilder.setCompliance(AuditUtils.readAuditCompliance(tid));
            } catch (Exception e) {
                auditBuilder.setCompliance(null);
                Logger.getInstance(PlatformAuditCallback.class).error(e);
            }
            try {
                auditBuilder.setToDoReport(AuditUtils.readAuditReportSqgTodo(tid));
            } catch (Exception e) {
                auditBuilder.setToDoReport(null);
                Logger.getInstance(PlatformAuditCallback.class).error(e);
            }
            AuditService auditService = AuditService.getInstance(project);
            Audit prevReport = auditService.getAuditReport(file.getPath());
            if (prevReport != null) {
                 ApplicationManager.getApplication().invokeLater(() ->
                 	project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportClean(prevReport));
            }
            AuditDisplayOptions options;
            if (prevReport != null) {
                AuditDisplayOptions prevOptions = prevReport.getDisplayOptions();
                options = new AuditDisplayOptions(showInBrowser || prevOptions.isShowInBrowser(), prevOptions.isShowInProblemsList());
            } else {
                options = new AuditDisplayOptions(showInBrowser, false);
            }
            Audit report = auditBuilder.setFileName(file.getPath()).setAuditDisplayOptions(options).build(reportNode);
            auditService.setAuditReport(file.getPath(), report);
            ApplicationManager.getApplication().runReadAction((Computable<Void>) () -> {
                try {
                    report.finalizeInReadAction();
                } catch (Throwable t) {
                    PlatformUtils.setInProgress(tree, progressDMTN, false);
                }
                return null;
            });
            try {
                auditService.downloadArticles();
            } catch (Exception e) {
                onFailure(e.getMessage());
                return;
            }
            ApplicationManager.getApplication().invokeLater(() -> {
                WindowUtils.activateToolWindow(project, showInBrowser ? ToolWindowId.OPEN_API_HTML_REPORT : ToolWindowId.OPEN_API_REPORT);
                project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportReady(file);
                if (openInEditor) {
                    new OpenFileDescriptor(project, file).navigate(true);
                }
            });
        } finally {
        	ApplicationManager.getApplication().invokeLater(() -> PlatformUtils.setInProgress(tree, progressDMTN, false));
        }
    }
}
