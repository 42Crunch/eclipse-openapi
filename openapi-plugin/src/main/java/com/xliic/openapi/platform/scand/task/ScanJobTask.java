package com.xliic.openapi.platform.scand.task;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.openapi.platform.scan.ScanGeneralError;
import com.xliic.openapi.platform.scan.config.ScanRunConfig;
import com.xliic.openapi.platform.scan.task.ScanDockerTask;
import com.xliic.openapi.platform.scan.task.ScanRunTask;
import com.xliic.openapi.platform.scand.ScandJobStatus;
import com.xliic.openapi.platform.scand.ScandUtils;

public class ScanJobTask extends ScanRunTask {

    private String jobName;

    public ScanJobTask(@NotNull Project project, @NotNull String tabId, @NotNull ScanRunConfig runConfig, @NotNull ScanDockerTask.Callback callback) {
        super(project, tabId, runConfig, callback);
        jobName = null;
    }

    @Override
    protected void runScan(@NotNull ProgressIndicator progress,
                           @NotNull String image,
                           @NotNull String service,
                           @NotNull String token,
                           @NotNull Map<String, String> env) throws Exception {
        logger.info("Using scand-manager");
        progress.setText("Using scand-manager");
        ScandJobStatus status = ScandUtils.createScandJob(token, service, image, env);
        jobName = status.getName();
        if (status.isFailed()) {
            throw new ScanGeneralError("Failed to create scand-manager job " + jobName +
                    ", received unexpected status: " + status.getStatus());
        }
        logger.info("Created scand-manager job: " + jobName);
        progress.setText("Waiting for job " + jobName);
        ScandJobStatus jobStatus = ScandUtils.waitForScandJob(jobName, logger);
        if (!jobStatus.isSucceeded()) {
            String message = "Scand-manager job " + jobName + " has failed";
            String details = status.isUnknown() ? null : ScandUtils.readJobLog(status.getName());
            throw new ScanGeneralError(message, null, details);
        }
    }

    @Override
    protected void dispose(@NotNull ProgressIndicator progress) {
        if (jobName != null) {
            progress.setText("Deleting job " + jobName);
            ScandUtils.deleteJob(jobName);
            jobName = null;
        }
    }
}
