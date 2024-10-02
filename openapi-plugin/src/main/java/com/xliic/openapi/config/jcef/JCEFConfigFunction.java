package com.xliic.openapi.config.jcef;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.config.jcef.messages.CliDownload;
import com.xliic.openapi.config.jcef.messages.CliTest;
import com.xliic.openapi.config.jcef.messages.SaveConfig;
import com.xliic.openapi.config.jcef.messages.TestOverlordConnection;
import com.xliic.openapi.config.jcef.messages.TestPlatformConnection;
import com.xliic.openapi.config.jcef.messages.TestScandManagerConnection;
import com.xliic.openapi.webapp.WebAppFunction;
import com.xliic.openapi.webapp.messages.OpenLink;
import com.xliic.openapi.webapp.http.SendHttpRequest;

public class JCEFConfigFunction extends WebAppFunction {

    public JCEFConfigFunction(@NotNull Project project, @NotNull String webAppId, Map<String, Object> cache, Browser browser, String name) {
    	super(browser, name);
        add(new SaveConfig(project));
        add(new SendHttpRequest(project, webAppId));
        add(new TestPlatformConnection(project));
        add(new TestOverlordConnection(project));
        add(new TestScandManagerConnection(project));
        add(new CliDownload(project));
        add(new CliTest(project));
        add(new OpenLink());
    }
}
