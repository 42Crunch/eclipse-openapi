package com.xliic.openapi.report.jcef.messages;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.services.ExtRefService;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowPartialReport extends WebAppConsume {

    @NotNull
    private  final Project project;
    @NotNull
    private final Audit report;
    @NotNull
    private final VirtualFile file;
    @NotNull
    private final List<Integer> ids;

    public ShowPartialReport(@NotNull Project project, @NotNull Audit report, @NotNull VirtualFile file, @NotNull List<Integer> ids) {
        super("showPartialReport");
        this.project = project;
        this.report = report;
        this.file = file;
        this.ids = ids;
    }

    @Override @SuppressWarnings("serial")
    protected @NotNull Map<String, Object> getPayload() {
        return new HashMap<>() {{
            put("report", ShowFullReport.getAuditPayload(project, report));
            put("uri", getPayloadURI());
            put("ids", ids);
        }};
    }

    private String getPayloadURI() {
        String fileName = file.getPath();
        ExtRef extRef = ExtRefService.getInstance(project).getExtRefByFile(fileName);
        return extRef == null ? Utils.getURI(fileName) : extRef.getInternalURI();
    }
}
