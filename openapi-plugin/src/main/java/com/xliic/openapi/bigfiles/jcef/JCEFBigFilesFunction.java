package com.xliic.openapi.bigfiles.jcef;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.bigfiles.jcef.messages.BrowseFile;
import com.xliic.openapi.bigfiles.jcef.messages.Convert;
import com.xliic.openapi.webapp.WebAppFunction;

import org.jetbrains.annotations.NotNull;

public class JCEFBigFilesFunction extends WebAppFunction {

    public JCEFBigFilesFunction(@NotNull Project project, Browser browser, String name) {
    	super(browser, name);
        add(new BrowseFile(project));
        add(new Convert(project));
    }
}
