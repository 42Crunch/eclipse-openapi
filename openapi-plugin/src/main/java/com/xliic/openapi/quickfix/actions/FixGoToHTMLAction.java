package com.xliic.openapi.quickfix.actions;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.utils.Utils;

public class FixGoToHTMLAction extends FixAction {

    private final List<Issue> issues;

    public FixGoToHTMLAction(List<Issue> issues) {
        super(3, OpenApiBundle.message("openapi.audit.intention.name"), null);
        this.issues = issues;
    }

    @Override
    public boolean isAvailable(@NotNull Project project, Editor editor, PsiFile file) {
        return true;
    }

    @Override
    public void invoke(@NotNull final Project project, Editor editor, PsiFile file, int offset) {
        SwingUtilities.invokeLater(() -> {
            // Eclipse Development Note
            // Activate as the view may be not visible now
            Utils.activateToolWindow(project, ToolWindowId.OPEN_API_HTML_REPORT);
            project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleViewDetails(file.getVirtualFile(), issues);
        });
    }
}
