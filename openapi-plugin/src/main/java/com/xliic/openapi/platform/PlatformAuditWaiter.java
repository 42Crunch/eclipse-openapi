package com.xliic.openapi.platform;

import static com.xliic.openapi.OpenApiUtils.getJsonAST;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.PlatformService;

import okhttp3.Response;
import okhttp3.ResponseBody;

public class PlatformAuditWaiter implements Runnable {

    private static final int ASSESSMENT_MAX_WAIT = 60000;
    private static final int ASSESSMENT_RETRY = 1000;

    private static final String DEFAULT_PATTERN = "yyyy-MM-dd'T'HH:mm:ss'Z'";
    private static final DateFormat formatter = new SimpleDateFormat(DEFAULT_PATTERN);

    private final Project project;
    private final String apiId;
    private final VirtualFile file;

    public PlatformAuditWaiter(@NotNull Project project, @NotNull String apiId, @Nullable VirtualFile file) {
        this.project = project;
        this.apiId = apiId;
        this.file = file;
    }

    private static Node getReportNode(Response response) {
        try (ResponseBody body = response.body()) {
            if (response.code() == 200 && body != null) {
                try {
                    String text = body.string().trim();
                    if (!text.endsWith("</html>")) {
                        return getJsonAST(text);
                    }
                } catch (IOException e) {
                    return null;
                }
            }
        }
        return null;
    }

    @Override
    public void run() {
        try {
            Date start = new Date();
            Date now = new Date();
            Date last = new Date(0);

            while (Math.abs(now.getTime() - start.getTime()) < ASSESSMENT_MAX_WAIT) {
                Response response = PlatformAPIs.readApiSync(apiId, false);
                try (ResponseBody body = response.body()) {
                    int code = response.code();
                    if (code == 200 && body != null) {
                        String text = body.string();
                        Node node = OpenApiUtils.getJsonAST(text);
                        Node assessment = node.getChild("assessment");
                        boolean isProcessed = Boolean.parseBoolean(assessment.getChild("isProcessed").getValue());
                        String lastStr = assessment.getChild("last").getValue();
                        if (isProcessed && !StringUtils.isEmpty(lastStr)) {
                            Date current = formatter.parse(lastStr);
                            boolean ready = current.getTime() > last.getTime();
                            if (ready) {
                                Node report = getReportNode(PlatformAPIs.readAuditReportSync(apiId));
                                PlatformService platformService = PlatformService.getInstance(project);
                                platformService.platformAuditReady(apiId, file, report, this);
                                break;
                            }
                        }
                    }
                }
                Thread.sleep(ASSESSMENT_RETRY);
                now = new Date();
            }
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }
}
