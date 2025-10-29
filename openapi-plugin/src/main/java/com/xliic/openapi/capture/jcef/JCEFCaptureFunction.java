package com.xliic.openapi.capture.jcef;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.capture.jcef.messages.Convert;
import com.xliic.openapi.capture.jcef.messages.DeleteJob;
import com.xliic.openapi.capture.jcef.messages.DownloadFile;
import com.xliic.openapi.capture.jcef.messages.OpenFileLink;
import com.xliic.openapi.capture.jcef.messages.SaveCaptureSettings;
import com.xliic.openapi.capture.jcef.messages.SelectFiles;
import com.xliic.openapi.webapp.WebAppFunction;
import com.xliic.openapi.webapp.http.SendHttpRequest;

public class JCEFCaptureFunction extends WebAppFunction {

    public JCEFCaptureFunction(@NotNull Project project, @NotNull String webAppId, Browser browser, String name) {
    	super(browser, name);
        add(new SelectFiles(project));
        add(new SaveCaptureSettings(project));
        add(new Convert(project));
        add(new DownloadFile(project));
        add(new DeleteJob(project));
        add(new OpenFileLink(project));
        add(new SendHttpRequest(project, webAppId));
    }
}
