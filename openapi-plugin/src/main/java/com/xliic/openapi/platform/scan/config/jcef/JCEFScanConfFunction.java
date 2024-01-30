package com.xliic.openapi.platform.scan.config.jcef;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.environment.jcef.messages.ShowEnvWindow;
import com.xliic.openapi.platform.scan.config.jcef.messages.RunScan;
import com.xliic.openapi.platform.scan.config.jcef.messages.SaveScanConf;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.tryit.jcef.messages.SendHttpRequest;
import com.xliic.openapi.webapp.WebAppFunction;
import org.jetbrains.annotations.NotNull;

import java.util.Map;

public class JCEFScanConfFunction extends WebAppFunction {

    public JCEFScanConfFunction(@NotNull Project project, 
    		                    @NotNull String id, 
    		                    @NotNull Map<String, Object> cache, 
    		                    @NotNull Browser browser, 
    		                    @NotNull String name) {
        super(browser, name);
        add(new RunScan(project, cache));
        add(new SaveScanConf(project, cache));
        add(new ShowEnvWindow(project));
        add(new SavePreferences(project, cache));
        add(new SendHttpRequest(project, id, false));
    }
}
