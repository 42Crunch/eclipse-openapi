package  com.xliic.openapi.report.html.ui;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Stream;

import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.resources.IFile;
import org.eclipse.e4.core.services.events.IEventBroker;
import org.eclipse.swt.SWT;
import org.eclipse.swt.browser.Browser;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.internal.themes.WorkbenchThemeManager;
import org.eclipse.ui.part.ViewPart;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.html.HTMLIcon;
import com.xliic.openapi.report.html.HTMLReportLAFListener;
import com.xliic.openapi.report.html.HTMLReportListener;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.utils.OpenAPIUtils;
import com.xliic.openapi.utils.WorkbenchUtils;

@SuppressWarnings("restriction")
public class HTMLReportPanelView extends ViewPart implements HTMLReportManager {

	public static final String ID = "com.xliic.openapi.report.html.ui.HTMLReportPanelView";
	public static final String HTML_GO_BACK_LINK = "#back";

	private static final URL BASE_URL = OpenAPIAbstractUIPlugin.getInstance().getBundle().getEntry("/");
	private static final String HTML_NO_ISSUES = "<h4>No issues found in this file</h4>";
	private static final String HTML_GO_BACK = "<h4><a class=\"go-full-report\" " +
			"href=\"" + HTML_GO_BACK_LINK + "\">Go back to full report</a></h4>";
	private static String HTML_NO_REPORT_AVAILABLE;

	@Inject IWorkbench workbench;
	private Browser browser;
	private Display display;

	private String defaultCssRules = "";
	private String darculaCssRules = "";
	private String cssRules = "";

	private HTMLReportListener reportListener;
	private HTMLReportLAFListener lafListener;
	private IEventBroker eventBroker;

	private String summary = StringUtils.EMPTY;
	private final Set<String> participants = new HashSet<>();
	private final Map<Issue, String> issueToHTMLText = new LinkedHashMap<>();

	public HTMLReportPanelView() {
        defaultCssRules = getCssRules("default.css");
        darculaCssRules = getCssRules("darcula.css");
        cssRules = defaultCssRules;
	}

	@Override
	public void createPartControl(Composite parent) {

        display = parent.getDisplay();
        Color fg = display.getSystemColor(SWT.COLOR_INFO_FOREGROUND);
        Color bg = display.getSystemColor(SWT.COLOR_INFO_BACKGROUND);

        browser = new Browser(parent, SWT.NONE);
        browser.setJavascriptEnabled(false);
        browser.setForeground(fg);
        browser.setBackground(bg);

        if (parent.getLayout() instanceof GridLayout) {
            browser.setLayoutData(new GridData(GridData.FILL_BOTH));
        }

        reportListener = new HTMLReportListener(this, display.getActiveShell());
        browser.addLocationListener(reportListener);

        lafListener = new HTMLReportLAFListener(workbench, this);
        eventBroker = workbench.getService(IEventBroker.class);
        eventBroker.subscribe(WorkbenchThemeManager.Events.THEME_REGISTRY_RESTYLED, lafListener);
        HTML_NO_REPORT_AVAILABLE = getNoReportAvailableHTML();
        handleToolWindowRegistered();
	}

	@Override
	public void handleAllFilesClosed() {
		reportNotAvailable();
	}

	@Override
	public void handleClosedFile(VirtualFile file, boolean selected) {
    	IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
    	IFile selectedFile = OpenAPIUtils.getSelectedOpenAPIFile();
        if (selectedFile != null && dataService.hasAuditReport(selectedFile.getFullPath().toPortableString())) {
          update(dataService.getAuditReport(selectedFile.getFullPath().toPortableString()));
        }
        else {
          reportNotAvailable();
        }
	}

	@Override
	public void handleSelectedFile(VirtualFile file) {
		IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
	    if (dataService.hasAuditReport(file.getPath())) {
	      update(dataService.getAuditReport(file.getPath()));
	      return;
	    }
	    String fileName = file.getAbsoluteFullFilePath();
	    if (!dataService.isAuditParticipantFile(fileName)) {
	      reportNotAvailable();
	    }
	}

	@Override
	public void handleAuditReportReady(IFile file) {
		WorkbenchUtils.showView2(ID, null, IWorkbenchPage.VIEW_ACTIVATE);
		IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
		update(dataService.getAuditReport(file.getFullPath().toPortableString()));
	}

	@Override
	public void handleGoToHTMLIntention(IFile file, List<Issue> issues) {
	    if (issues.isEmpty()) {
	        return;
	    }
	    summary = StringUtils.EMPTY;
	    participants.clear();
	    issueToHTMLText.clear();
	    for (Issue issue : issues) {
	    	if (!StringUtils.isEmpty(issue.getFileName())) {
	    		participants.add(issue.getFileName());
	    		issueToHTMLText.put(issue, issue.getHTMLIssue());
	    	}
	    }
	    report();
	}

	@Override
	public void handleBackToLink() {
		if (issueToHTMLText.keySet().isEmpty()) {
			return;
		}
	    Issue issue = (Issue) issueToHTMLText.keySet().toArray()[0];
	    String auditFileName = issue.getAuditFileName();
	    IFile file = OpenAPIUtils.getIFile(auditFileName);
	    IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
	    update(dataService.getAuditReport(file.getFullPath().toPortableString()));
	}

	@Override
	public void handleDocumentChanged(IFile file) {
		String key = OpenAPIUtils.getAbsoluteFullFilePath(file);
	    if (!participants.contains(key)) {
	        return;
	    }
	    for (Map.Entry<Issue, String> entry : issueToHTMLText.entrySet()) {
	        Issue issue = entry.getKey();
	        if (Objects.equals(issue.getFileName(), key)) {
	          issueToHTMLText.put(issue, issue.getHTMLIssue());
	        }
	    }
	    report();
	}

	@Override
	public void handleToolWindowRegistered() {
        IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
        if (file == null) {
        	return;
        }
        boolean hide = true;
		IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
	    if (dataService.hasAuditReport(file.getFullPath().toPortableString())) {
	      update(dataService.getAuditReport(file.getFullPath().toPortableString()));
	      hide = false;
	    }
	    else {
		    String fileName = OpenAPIUtils.getAbsoluteFullFilePath(file);
		    if (!dataService.isAuditParticipantFile(fileName)) {
		      reportNotAvailable();
		    }
	    }
		if (hide) {
			WorkbenchUtils.hideView(ID, null, IWorkbenchPage.VIEW_ACTIVATE);
		}
	}

	@Override
	public void handleFileNameChanged(IFile newFile, IFile oldFile) {
		String oldKey = OpenAPIUtils.getAbsoluteFullFilePath(oldFile);
	    if (participants.contains(oldKey)) {
	        participants.remove(oldKey);
	        String newKey = OpenAPIUtils.getAbsoluteFullFilePath(newFile);
	        participants.add(newKey);
	        for (Map.Entry<Issue, String> entry : issueToHTMLText.entrySet()) {
	          Issue issue = entry.getKey();
	          if (Objects.equals(issue.getFileName(), newKey)) {
	            issueToHTMLText.put(issue, issue.getHTMLIssue());
	          }
	        }
	        report();
	    }
	}

	@Override
	public void updateCssRules(boolean isDarkTheme) {
		cssRules = isDarkTheme ? darculaCssRules : defaultCssRules;
		HTML_NO_REPORT_AVAILABLE = getNoReportAvailableHTML();
		report();
	}

	private String getReport() {
		StringBuilder builder = new StringBuilder();
		for (Map.Entry<Issue, String> entry : issueToHTMLText.entrySet()) {
			builder.append(entry.getValue());
	    }
	    String goBack = summary.isEmpty() ? HTML_GO_BACK : StringUtils.EMPTY;
	    String issues = builder.length() > 0 ? builder.toString() : HTML_NO_ISSUES;
	    return "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\">" +
	    		"<style>" + cssRules + "</style>" +
	            "<title>API Contract Security Audit Report</title>" +
	            "</head><body>" + summary +  issues + goBack + "</body></html>";
	}

	private void clean() {
		browser.setText(StringUtils.EMPTY);
	    summary = StringUtils.EMPTY;
	    participants.clear();
	    issueToHTMLText.clear();
	}

	private void update(Audit auditReport) {
	    summary = auditReport.getHTMLSummary();
	    participants.clear();
	    issueToHTMLText.clear();
	    for (Issue issue : auditReport.getIssues()) {
	      if (issue.isLocationFound() && !StringUtils.isEmpty(issue.getFileName())) {
	        participants.add(issue.getFileName());
	        issueToHTMLText.put(issue, issue.getHTMLIssue());
	      }
	    }
	    report();
	}

	private void report() {
		browser.setText(getReport());
	}

	private void reportNotAvailable() {
	    clean();
	    browser.setText(HTML_NO_REPORT_AVAILABLE);
	}

	private String getNoReportAvailableHTML() {
		return "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\">" +
	    	   "<style>" + cssRules + "</style>" +
	            "</head><body>" +
	            "<h1>No security audit report available for this file</h1>" +
	            "<div>\n" +
	            "<span>Please open an OpenAPI file and click the <img src=\"" + HTMLIcon.ICON_42CRUNCH_BASE64_PNG +
	            "\"> button at the top right to run OpenAPI Security Audit</span>\n" +
	            "</div>\n" +
	            "</body></html>";
	}

	private String getCssRules(String cssFile) {
		StringBuilder sb = new StringBuilder();
		try {
			URL url = new URL(BASE_URL, "resources/css/" + cssFile);
			InputStream inputStream = getClass().getResourceAsStream(url.getFile());
			Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
			stream.forEach(line -> sb.append(line));

		}
		catch (MalformedURLException e) {
			e.printStackTrace();
		}
		return sb.toString();
	}

	@Override
	public void setFocus() {}

	@Override
    public void dispose() {
    	super.dispose();
	    summary = StringUtils.EMPTY;
	    participants.clear();
	    issueToHTMLText.clear();
    	eventBroker.unsubscribe(lafListener);
    }
}
