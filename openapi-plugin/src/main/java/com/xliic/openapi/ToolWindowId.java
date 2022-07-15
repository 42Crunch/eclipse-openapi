package com.xliic.openapi;

import java.util.List;

public class ToolWindowId {

	public static final String OPEN_API = "com.xliic.openapi.tree.ui.OpenAPITreeView";
	public static final String OPEN_API_REPORT = "com.xliic.openapi.report.tree.ui.ReportPanelView";
	public static final String OPEN_API_HTML_REPORT = "com.xliic.openapi.report.jcef.ui.JCEFReportPanelView";
	public static final String OPEN_API_PLATFORM = "com.xliic.openapi.platform.tree.ui.PlatformPanelView";
	
    public static final List<String> OPEN_API_WINDOW_IDS = List.of(
    		ToolWindowId.OPEN_API, ToolWindowId.OPEN_API_REPORT, ToolWindowId.OPEN_API_HTML_REPORT);
}
