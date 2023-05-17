package com.xliic.openapi.platform;

import java.io.IOException;
import java.util.Date;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.Puller;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.utils.NetUtils;

import okhttp3.Response;

public class PlatformReportPuller extends Puller<Node> {

    private static final Date DEFAULT_LAST_DATE = new Date(0);

    @NotNull
    private final Project project;
    @NotNull
    private final String apiId;
    private final long lastDate;

    public PlatformReportPuller(@NotNull Project project, @NotNull String apiId, int pause, int duration) {
        super(pause, duration);
        this.project = project;
        this.apiId = apiId;
        PlatformService platformService = PlatformService.getInstance(project);
        Date date = platformService.getAssessmentLastDate(apiId);
        lastDate = (date == null) ? DEFAULT_LAST_DATE.getTime() : date.getTime();
    }

    @Override
    protected @NotNull Response send() throws IOException {
        return PlatformAPIs.Sync.readApi(apiId, false);
    }

    @Override
    protected @Nullable Node response(@NotNull Node body) {
        Node assessment = body.getChild("assessment");
        if (assessment == null) {
            return null;
        }
        if (!Boolean.parseBoolean(assessment.getChildValue("isProcessed"))) {
            return null;
        }
        Date date = PlatformUtils.getLastAssessmentDate(assessment);
        if (date != null && date.getTime() > lastDate) {
            PlatformService platformService = PlatformService.getInstance(project);
            platformService.setAssessmentLastDate(apiId, date);
            try {
                return NetUtils.getBodyNode(PlatformAPIs.Sync.readAuditReport(apiId));
            } catch (Exception ignored) {
            }
        }
        return null;
    }

    @Override
    @NotNull
    protected Exception timeout() {
        return new Exception("Failed to get assessment report");
    }
}
