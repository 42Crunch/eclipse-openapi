package com.xliic.openapi.tags.jcef;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.tags.jcef.messages.SaveTags;
import com.xliic.openapi.webapp.WebAppFunction;
import com.xliic.openapi.webapp.http.SendHttpRequest;

public class JCEFTagsFunction extends WebAppFunction {

    public JCEFTagsFunction(@NotNull Project project, @NotNull String webAppId, @NotNull Map<String, Object> cache, Browser browser, String name) {
    	super(browser, name);
        add(new SaveTags(project, cache));
        add(new SendHttpRequest(project, webAppId));
    }
}
