package com.xliic.openapi.signup.jcef;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.signup.jcef.messages.AnondSignUpComplete;
import com.xliic.openapi.signup.jcef.messages.PlatformSignUpComplete;
import com.xliic.openapi.signup.jcef.messages.RequestAnondTokenByEmail;
import com.xliic.openapi.webapp.WebAppFunction;
import com.xliic.openapi.webapp.messages.OpenLink;

public class JCEFSignUpFunction extends WebAppFunction {

    public JCEFSignUpFunction(@NotNull Project project, Map<String, Object> cache, Browser browser, String name) {
    	super(browser, name);
        add(new AnondSignUpComplete(project));
        add(new PlatformSignUpComplete(project));
        add(new RequestAnondTokenByEmail(project));
        add(new OpenLink());
    }
}
