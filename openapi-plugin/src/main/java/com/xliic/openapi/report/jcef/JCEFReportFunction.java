package com.xliic.openapi.report.jcef;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.xliic.core.project.Project;
import com.xliic.openapi.report.jcef.messages.CopyIssueId;
import com.xliic.openapi.report.jcef.messages.GoToLine;
import com.xliic.openapi.report.jcef.messages.OpenLink;
import com.xliic.openapi.webapp.WebAppFunction;

public class JCEFReportFunction extends WebAppFunction {

    public JCEFReportFunction(@NotNull Project project, Browser browser, String name) {
        super(browser, name);
        add(new CopyIssueId());
        add(new GoToLine(project));
        add(new OpenLink());
    }
}
