package com.xliic.openapi.platform.scan.report.jcef;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.environment.jcef.messages.ShowEnvWindow;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.tryit.jcef.messages.SendHttpRequest;
import com.xliic.openapi.platform.scan.report.jcef.messages.SendCurlRequest;
import com.xliic.openapi.platform.scan.report.jcef.messages.ShowAuditReport;
import com.xliic.openapi.platform.scan.report.jcef.messages.ShowJsonPointer;
import com.xliic.openapi.webapp.WebAppFunction;

public class JCEFScanReportFunction extends WebAppFunction {

    public JCEFScanReportFunction(@NotNull Project project,
    							  @NotNull String id, 
    							  @NotNull Map<String, Object> cache,
    							  @NotNull Browser browser, 
    							  @NotNull String name) {
        super(browser, name);
        add(new ShowEnvWindow(project));
        add(new SavePreferences(project, cache));
        add(new SendHttpRequest(project, id, false));
        add(new SendCurlRequest());
        add(new ShowJsonPointer(project, cache));
        add(new ShowAuditReport(project, cache));
    }
}
