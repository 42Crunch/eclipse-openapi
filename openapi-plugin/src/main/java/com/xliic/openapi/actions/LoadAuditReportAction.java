package com.xliic.openapi.actions;

import static com.xliic.openapi.services.AuditService.LOADING_KDB_ARTICLES;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.fileChooser.FileChooserDescriptor;
import com.xliic.core.fileChooser.FileChooserFactory;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;

public class LoadAuditReportAction extends ProjectAction {

    private static final String REPORT_ERROR_MSG = "Can't find 42Crunch Security Audit report in the selected file";

    public LoadAuditReportAction() {
        super("load security audit report from file", false);
    }

    private static boolean isReportValid(Node report) {
        boolean result = (report.getChild("aid") != null) && (report.getChild("tid") != null);
        return result && (report.getChild("data") != null) && (report.find("/data/assessmentVersion") != null);
    }

    @Override
    public boolean update(@NotNull Project project, @NotNull VirtualFile file) {
        return true;
    }

    @Override
    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile currentFile) {
        FileChooserDescriptor descriptor = new FileChooserDescriptor(true, false, false, false, false, false)
                .withFileFilter(new String[] { "*.json" });
        VirtualFile[] choose = FileChooserFactory.getInstance().createFileChooser(descriptor, project, "getText()", null).choose(null,
                VirtualFile.EMPTY_ARRAY);
        if (choose.length == 1) {
            VirtualFile file = choose[0];
            if (file != null) {
                String text = Utils.getTextFromFile(file);
                if (!StringUtils.isEmpty(text)) {
                    Node report = Utils.getJsonAST(text);
                    if (report != null && isReportValid(report)) {
                        ProgressManager.getInstance().run(new Task.Backgroundable(project, LOADING_KDB_ARTICLES, false) {
                            @Override
                            public void run(@NotNull ProgressIndicator progress) {
                                try {
                                    AuditService auditService = AuditService.getInstance(project);
                                    auditService.downloadArticles(progress);
                                    ApplicationManager.getApplication().invokeAndWait(() -> {
                                        auditService.cleanAuditReport(currentFile);
                                        auditService.processAuditReport(currentFile, report.getChildRequireNonNull("data"));
                                    });
                                } catch (AuditService.KdbException e) {
                                    MsgUtils.error(project, e.getMessage(), true);
                                }
                            }
                        });
                    } else {
                        MsgUtils.error(project, REPORT_ERROR_MSG, true);
                    }
                }
            }
        }
    }
}
