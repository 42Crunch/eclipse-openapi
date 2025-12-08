package com.xliic.openapi.platform.scand;

import static com.xliic.openapi.utils.NetUtils.getResponseBody;
import static com.xliic.openapi.settings.Settings.Platform.Scan.ScandMgr.TIMEOUT;
import static com.xliic.openapi.settings.Settings.Platform.Scan.ScandMgr.TIMEOUT_DEFAULT;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.Puller;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.ScanGeneralError;
import com.xliic.openapi.platform.scan.ScanLogger;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.NetUtils;

import okhttp3.Response;
import okhttp3.ResponseBody;

public class ScandUtils {

    private static final int PAUSE = 1000;

    @NotNull
    public static ScandJobStatus createScandJob(@NotNull String token,
                                                @NotNull String platformService,
                                                @NotNull String scandImage,
                                                @NotNull Object env) throws Exception {
        try (Response response = ScandAPIs.Sync.createJob(token, platformService, scandImage, env)) {
            Node body = NetUtils.getBodyNodeRequireNonNull(response);
            return ScandJobStatus.getInstance(body);
        } catch (Exception e) {
            throw new ScanGeneralError("Failed to create scand-manager job: " + e.getMessage());
        }
    }

    public static void deleteJob(@NotNull String name) {
        try {
            ScandAPIs.Sync.deleteJob(name);
        } catch (IOException ignored) {
        }
    }

    @Nullable
    public static String readJobLog(@NotNull String name) {
        try (Response response = ScandAPIs.Sync.readJobLog(name)) {
            try (ResponseBody body = getResponseBody(response)) {
                if (response.code() == 200 && body != null) {
                    return body.string();
                }
            }
        } catch (IOException ignored) {
        }
        return null;
    }

    @NotNull
    public static ScandJobStatus waitForScandJob(@NotNull String name, @NotNull ScanLogger logger) throws Exception {
        int timeout = SettingsService.getInstance().getIntValue(TIMEOUT, TIMEOUT_DEFAULT);
        return new Puller<ScandJobStatus>(PAUSE, timeout * 1000) {
            @Override
            protected @NotNull Response send() throws IOException {
                return ScandAPIs.Sync.readJobStatus(name);
            }

            @Override
            protected @Nullable ScandJobStatus response(@NotNull Node body) {
                ScandJobStatus jobStatus = ScandJobStatus.getInstance(body);
                logger.info("Waiting for job: " + name + ", status: " + jobStatus.getStatus());
                return (jobStatus.isSucceeded() || jobStatus.isFailed()) ? jobStatus : null;
            }

            @Override
            protected @NotNull Exception timeout() {
                return new ScanGeneralError("Timed out waiting for scand-manager job " + name + " to finish");
            }
        }.get();
    }
}
