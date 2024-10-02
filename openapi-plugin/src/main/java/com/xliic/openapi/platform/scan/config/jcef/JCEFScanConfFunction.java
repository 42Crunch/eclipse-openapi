package com.xliic.openapi.platform.scan.config.jcef;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.environment.jcef.messages.ShowEnvWindow;
import com.xliic.openapi.platform.scan.config.jcef.messages.RunFullScan;
import com.xliic.openapi.platform.scan.config.jcef.messages.RunScan;
import com.xliic.openapi.platform.scan.config.jcef.messages.SaveScanConf;
import com.xliic.openapi.platform.scan.config.jcef.messages.UpdateScanConf;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.webapp.WebAppFunction;
import com.xliic.openapi.webapp.messages.OpenLink;
import com.xliic.openapi.webapp.http.SendHttpRequest;

public class JCEFScanConfFunction extends WebAppFunction {

    public JCEFScanConfFunction(@NotNull Project project, 
    		                    @NotNull String webAppId, 
    		                    @NotNull Map<String, Object> cache, 
    		                    @NotNull Browser browser, 
    		                    @NotNull String name) {
        super(browser, name);
        add(new RunScan(project, cache));
        add(new RunFullScan(project, cache));
        add(new SaveScanConf(project, cache));
        add(new UpdateScanConf(project, cache));
        add(new ShowEnvWindow(project));
        add(new SavePreferences(project, cache));
        add(new SendHttpRequest(project, webAppId));
        add(new OpenLink());
    }
}
