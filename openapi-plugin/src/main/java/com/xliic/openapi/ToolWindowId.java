package com.xliic.openapi;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class ToolWindowId {

    public static final String OPEN_API = "com.xliic.openapi.tree.ui.OpenAPITreeView";
    public static final String OPEN_API_REPORT = "com.xliic.openapi.report.tree.ui.ReportPanelView";
    public static final String OPEN_API_HTML_REPORT = "com.xliic.openapi.report.jcef.ui.JCEFReportPanelView";
    public static final String PLATFORM = "com.xliic.openapi.platform.tree.ui.PlatformPanelView";
    public static final String TRY_IT = "com.xliic.openapi.tryit.jcef.ui.JCEFTryItPanelView";
    public static final String ENV = "com.xliic.openapi.environment.jcef.ui.JCEFEnvPanelView";

    // Only web applications created in tool windows (not in editor)
    public static final Set<String> WEB_APP_IDS = new HashSet<>(
            Arrays.asList(OPEN_API_HTML_REPORT, TRY_IT, ENV));
}
