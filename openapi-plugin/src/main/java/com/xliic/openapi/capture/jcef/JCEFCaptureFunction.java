package com.xliic.openapi.capture.jcef;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.capture.jcef.messages.*;
import com.xliic.openapi.webapp.WebAppFunction;
import org.jetbrains.annotations.NotNull;

public class JCEFCaptureFunction extends WebAppFunction {

    public JCEFCaptureFunction(@NotNull Project project, Browser browser, String name) {
    	super(browser, name);
        add(new BrowseFiles(project));
        add(new Convert(project));
        add(new DownloadFile(project));
        add(new DeleteJob(project));
        add(new OpenFileLink(project));
    }
}
