package com.xliic.openapi.actions;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.fileChooser.FileChooserDescriptor;
import com.xliic.core.fileChooser.FileChooserFactory;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.MsgUtils;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.parser.ast.node.Node;

public class LoadAuditReportAction extends ProjectAction {

    private static final String REPORT_ERROR_MSG = "Can't find 42Crunch Security Audit report in the selected file";

    public LoadAuditReportAction() {
        super("load security audit report from file");
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
                String text = OpenApiUtils.getTextFromFile(file);
                if (!StringUtils.isEmpty(text)) {
                    Node report = OpenApiUtils.getJsonAST(text);
                    if (report != null && isReportValid(report)) {
                        AuditActionCallback cb = new AuditActionCallback(project, currentFile);
                        cb.setBeforeRequest();
                        try {
                            cb.setDone(report.getChild("data"), true);
                        } catch (Throwable t) {
                            MsgUtils.error(project, REPORT_ERROR_MSG, true);
                        }
                    } else {
                        MsgUtils.error(project, REPORT_ERROR_MSG, true);
                    }
                }
            }
        }
    }
}
