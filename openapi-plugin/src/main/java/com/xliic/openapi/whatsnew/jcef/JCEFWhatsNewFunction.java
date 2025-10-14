package com.xliic.openapi.whatsnew.jcef;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.webapp.WebAppFunction;
import com.xliic.openapi.whatsnew.jcef.messages.OpenWhatsNewLink;
import org.jetbrains.annotations.NotNull;

public class JCEFWhatsNewFunction extends WebAppFunction {

    public JCEFWhatsNewFunction(@NotNull Project project, Browser browser, String name) {
    	super(browser, name);
        add(new OpenWhatsNewLink(project));
    }
}
