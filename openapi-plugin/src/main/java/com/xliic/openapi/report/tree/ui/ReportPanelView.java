package com.xliic.openapi.report.tree.ui;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.services.AuditService;

public class ReportPanelView extends PanelViewPart {

    public ReportPanelView() {
        super(ToolWindowId.OPEN_API_REPORT);
    }

    @Override
    protected Disposable createPanel(@NotNull Project project,
                                     @NotNull ToolWindow window,
                                     @NotNull Composite parent,
                                     @NotNull ViewPartHandler handler) {
        return new ReportPanel(project, window, parent);
    }

    @Override
    public void onViewPartBroughtToTop() {
        AuditService auditService = AuditService.getInstance(project);
        for (VirtualFile file : FileEditorManager.getInstance(project).getOpenFiles()) {
            if (auditService.getAuditReport(file.getPath()) != null) {
                ((ReportPanel) panel).refreshProblems(file);
            }
        }
    }
}
