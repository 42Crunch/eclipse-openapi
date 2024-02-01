package com.xliic.openapi.tryit.jcef;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.environment.jcef.messages.ShowEnvWindow;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.tryit.jcef.messages.CreateSchemaCommand;
import com.xliic.openapi.tryit.jcef.messages.SaveConfig;
import com.xliic.openapi.tryit.jcef.messages.SendHttpRequest;
import com.xliic.openapi.webapp.WebAppFunction;

public class JCEFTryItFunction extends WebAppFunction {

    public JCEFTryItFunction(@NotNull Project project, 
    		                 @NotNull String id,
    		                 @NotNull Map<String, Object> cache, 
    		                 @NotNull Browser browser, 
    		                 @NotNull String name) {
        super(browser, name);
        add(new SendHttpRequest(project, id, true));
        add(new CreateSchemaCommand(project, cache));
        add(new SaveConfig());
        add(new ShowEnvWindow(project));
        add(new SavePreferences(project, cache));
    }
}
