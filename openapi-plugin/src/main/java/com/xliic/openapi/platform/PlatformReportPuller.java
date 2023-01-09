package com.xliic.openapi.platform;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.Puller;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.NetUtils;

import okhttp3.Response;

public class PlatformReportPuller extends Puller<Node> {

    private static final DateFormat FORMATTER = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
    private static final long DEFAULT_TIME = new Date(0).getTime();
    private final String apiId;

    public PlatformReportPuller(String apiId, int pause, int duration) {
        super(pause, duration);
        this.apiId = apiId;
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
        String lastUpdateDate = assessment.getChildValue("last");
        if (StringUtils.isEmpty(lastUpdateDate)) {
            return null;
        }
        try {
            if (FORMATTER.parse(lastUpdateDate).getTime() > DEFAULT_TIME) {
                return NetUtils.getBodyNode(PlatformAPIs.Sync.readAuditReport(apiId));
            }
        } catch (Exception ignored) {
        }
        return null;
    }

    @Override
    @NotNull
    protected String error() {
        return "Failed to get assessment report";
    }
}
