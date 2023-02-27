package com.xliic.openapi.environment.jcef;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.environment.jcef.messages.SaveEnv;
import com.xliic.openapi.webapp.WebAppFunction;

public class JCEFEnvFunction extends WebAppFunction {

    public JCEFEnvFunction(@NotNull Project project, Browser browser, String name) {
        super(browser, name);
        add(new SaveEnv(project));
    }
}
