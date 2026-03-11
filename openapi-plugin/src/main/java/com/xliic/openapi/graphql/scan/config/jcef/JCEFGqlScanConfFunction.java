package com.xliic.openapi.graphql.scan.config.jcef;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.environment.jcef.messages.ShowEnvWindow;
import com.xliic.openapi.graphql.scan.config.jcef.messages.RunFullGqlScan;
import com.xliic.openapi.graphql.scan.config.jcef.messages.RunGqlScan;
import com.xliic.openapi.platform.scan.config.jcef.messages.SaveScanConf;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.webapp.WebAppFunction;
import com.xliic.openapi.webapp.http.SendHttpRequest;
import com.xliic.openapi.webapp.messages.OpenLink;
import org.jetbrains.annotations.NotNull;

import java.util.Map;

import static com.xliic.openapi.graphql.scan.config.jcef.JCEFGqlScanConfPanel.GQL_SCAN_CONF_PATH;

public class JCEFGqlScanConfFunction extends WebAppFunction {

    public JCEFGqlScanConfFunction(@NotNull Project project, 
                                   @NotNull String webAppId, 
                                   @NotNull Map<String, Object> cache, 
                                   @NotNull Browser browser, 
                                   @NotNull String name) {
        super(browser, name);
        add(new RunGqlScan(project, cache));
        add(new RunFullGqlScan(project, cache));
        add(new SaveScanConf(project, cache, GQL_SCAN_CONF_PATH));
        add(new ShowEnvWindow(project));
        add(new SavePreferences(project, cache));
        add(new SendHttpRequest(project, webAppId));
        add(new OpenLink());
    }
}
