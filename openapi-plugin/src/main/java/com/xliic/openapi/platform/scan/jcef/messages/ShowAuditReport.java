package com.xliic.openapi.platform.scan.jcef.messages;

import java.io.File;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.ScanService;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class ShowAuditReport extends WebAppProduce {

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Object> cache;

    public ShowAuditReport(@NotNull Project project, @NotNull Map<String, Object> cache) {
        super("showAuditReport");
        this.project = project;
        this.cache = cache;
    }

    @Override
    public void run(@Nullable Object payload) {
        String filePath = (String) cache.get(SavePreferences.PSI_FILE_PATH);
        if (filePath != null) {
            VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
            if (file != null) {
                Node report = ScanService.getInstance(project).getFailedReport();
                if (report != null) {
                    AuditService.getInstance(project).processAuditReport(file, report);
                }
            }
        }
    }
}
