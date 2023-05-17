package com.xliic.openapi.platform.scan.jcef;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.environment.jcef.messages.ShowEnvWindow;
import com.xliic.openapi.platform.scan.jcef.messages.RunScan;
import com.xliic.openapi.platform.scan.jcef.messages.SendCurlRequest;
import com.xliic.openapi.platform.scan.jcef.messages.ShowAuditReport;
import com.xliic.openapi.platform.scan.jcef.messages.ShowJsonPointer;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.tryit.jcef.messages.SendHttpRequest;
import com.xliic.openapi.webapp.WebAppFunction;

public class JCEFScanFunction extends WebAppFunction {

    public JCEFScanFunction(@NotNull Project project, Map<String, Object> cache, Browser browser, String name) {
        super(browser, name);
        add(new RunScan(project));
        add(new ShowEnvWindow(project));
        add(new SavePreferences(project, cache));
        add(new SendHttpRequest(project, false));
        add(new SendCurlRequest());
        add(new ShowJsonPointer(project, cache));
        add(new ShowAuditReport(project, cache));
    }
}
