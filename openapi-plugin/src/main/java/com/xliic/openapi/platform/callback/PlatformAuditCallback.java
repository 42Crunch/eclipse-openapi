package com.xliic.openapi.platform.callback;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.Computable;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.utils.WindowUtils;

public class PlatformAuditCallback extends SuccessASTResponseCallback {

    private final VirtualFile file;
    private final Tree tree;
    private final DefaultMutableTreeNode progressDMTN;
    private final boolean showAsHTML;
    private final boolean openInEditor;

    public PlatformAuditCallback(@NotNull Project project, @NotNull VirtualFile file, @Nullable Tree tree,
            @Nullable DefaultMutableTreeNode progressDMTN, boolean showAsHTML, boolean openInEditor) {
        this(project, file, tree, progressDMTN, showAsHTML, openInEditor, true);
    }

    public PlatformAuditCallback(@NotNull Project project, @NotNull VirtualFile file, @Nullable Tree tree,
            @Nullable DefaultMutableTreeNode progressDMTN, boolean showAsHTML, boolean openInEditor, boolean showDialogOnFailure) {
        super(project, showDialogOnFailure);
        this.file = file;
        this.tree = tree;
        this.progressDMTN = progressDMTN;
        this.showAsHTML = showAsHTML;
        this.openInEditor = openInEditor;
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        try {
            String apiId = node.getChild("aid").getValue();
            Node assessment = node.find("/attr/data");
            float grade = Float.parseFloat(assessment.getChild("grade").getValue());
            boolean isValid = Boolean.parseBoolean(assessment.getChild("isValid").getValue());
            SwingUtilities.invokeLater(() ->
                project.getMessageBus().syncPublisher(PlatformListener.TOPIC).auditReportForAPIUpdated(apiId, grade, isValid));
            Node reportNode = PlatformUtils.getAssessmentReportNode(node);
            if (reportNode == null) {
                PlatformUtils.setInProgress(tree, progressDMTN, false);
                onFailure("Response report content is not JSON");
                return;
            }
            AuditService auditService = AuditService.getInstance(project);
            Audit prevReport = auditService.getAuditReport(file.getPath());
            Audit report = ApplicationManager.getApplication().runReadAction((Computable<Audit>) () -> {
                try {
                    boolean newShowAsHTML;
                    boolean newShowAsProblems;
                    if (prevReport != null) {
                        newShowAsHTML = showAsHTML || prevReport.isShowAsHTML();
                        newShowAsProblems = prevReport.isShowAsProblems();
                    } else {
                        newShowAsHTML = showAsHTML;
                        newShowAsProblems = false;
                    }
                    return new Audit(project, file.getPath(), reportNode, true, newShowAsHTML, newShowAsProblems);
                } catch (Throwable t) {
                    PlatformUtils.setInProgress(tree, progressDMTN, false);
                }
                return null;
            });
            auditService.setAuditReport(file.getPath(), report);
            ApplicationManager.getApplication().invokeLater(() -> {
                WindowUtils.activateToolWindow(project, showAsHTML ? ToolWindowId.OPEN_API_HTML_REPORT : ToolWindowId.OPEN_API_REPORT);
                project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportReady(file);
                if (openInEditor) {
                    new OpenFileDescriptor(project, file).navigate(true);
                }
            });
        } finally {
            PlatformUtils.setInProgress(tree, progressDMTN, false);
        }
    }
}
