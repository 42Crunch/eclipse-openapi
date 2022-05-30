package com.xliic.openapi.report.jcef;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.jcef.CefBrowser;
import com.xliic.core.ui.jcef.JBCefBrowser;
import com.xliic.core.ui.jcef.JBCefBrowserBase;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.HTMLService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.WindowListener;

import org.apache.commons.lang.StringUtils;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import java.util.List;
import java.util.function.Function;

import static com.xliic.openapi.services.HTMLService.append;
import static com.xliic.openapi.services.HTMLService.string;

public class JCEFReportPanel extends JBCefBrowser
        implements FileListener, WindowListener, AuditListener, JCEFGoBackHandler, Disposable {

  private final Project project;
  private final ToolWindow toolWindow;
  private final Function<? super String, ? extends JBCefJSQuery.Response> handler;
  private final JCEFReportListener reportListener;
  private final JCEFReportLAFListener lafListener;
  private final JBCefJSQuery myJSQueryOpenInBrowser;
  private final JCEFLoadHandlerAdapter loadHandlerAdapter;
  private Audit lastAuditReport;

  public JCEFReportPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {
	  super(parent);
	  
    this.project = project;
    this.toolWindow = toolWindow;
    lastAuditReport = null;
    
    myJSQueryOpenInBrowser = JBCefJSQuery.create((JBCefBrowserBase) this);
    reportListener = new JCEFReportListener(project, this);
    handler = link -> {
      reportListener.process(link);
      return null;
    };
    myJSQueryOpenInBrowser.addHandler(handler);
    lafListener = new JCEFReportLAFListener(getCefBrowser());
    loadHandlerAdapter = new JCEFLoadHandlerAdapter(myJSQueryOpenInBrowser);

    getJBCefClient().addLoadHandler(loadHandlerAdapter, getCefBrowser());
    project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
    project.getMessageBus().connect().subscribe(WindowListener.TOPIC, this);
    project.getMessageBus().connect().subscribe(AuditListener.TOPIC, this);

    VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
    if (file != null) {
      handleSelectedFile(file);
    }
  }

  @Override
  public void dispose() {
    super.dispose();
    lastAuditReport = null;
    myJSQueryOpenInBrowser.removeHandler(handler);
    getJBCefClient().removeLoadHandler(loadHandlerAdapter, getCefBrowser());
  }

  @Override
  public void handleToolWindowRegistered(String id) {
    if (ToolWindowId.OPEN_API_HTML_REPORT.equals(id)) {
      reportNotAvailable();
      if (toolWindow.isVisible()) {
        toolWindow.hide(null);
      }
    }
  }

  @Override
  public void handleToolWindowOpened(String id) {}

  @Override
  public void handleAllFilesClosed() {
    reportNotAvailable();
  }

  @Override
  public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {
    AuditService auditService = AuditService.getInstance(project);
    List<Issue> issues = auditService.getIssuesForAuditParticipantFileName(newFile.getPath());
    if (issues.isEmpty()) {
      return;
    }
    CefBrowser browser = getCefBrowser();
    HTMLService htmlService = HTMLService.getInstance();
    String js = htmlService.RENAME_JS;
    js = js.replace("${newFile}", string(newFile.getPath()));
    js = js.replace("${oldFile}", string(oldFileName));
    browser.executeJavaScript(js, browser.getURL(), 0);
  }

  @Override
  public void handleDocumentChanged(VirtualFile file) {
    AuditService auditService = AuditService.getInstance(project);
    List<Issue> issues = auditService.getIssuesForAuditParticipantFileName(file.getPath());
    if (issues.isEmpty()) {
      return;
    }
    boolean runJs = false;
    StringBuilder value = new StringBuilder("[");
    for (Issue issue : issues) {
      final Range range = issue.getRange();
      if (range != null) {
        value.append("{");
        append(value, "issueID", issue.getId(), false);
        append(value, "issuePointer", issue.getPointer(), false);
        append(value, "issueLine", String.valueOf(range.getLine() + 1), true);
        value.append("},");
        runJs = true;
      }
    }
    if (runJs) {
      CefBrowser browser = getCefBrowser();
      HTMLService htmlService = HTMLService.getInstance();
      value.replace(value.length() - 1, value.length(), "];");
      String js = htmlService.REFRESH_JS.replace("${fileName}", string(file.getPath()));
      js = js.replace("${issues}", value.toString());
      browser.executeJavaScript(js, browser.getURL(), 0);
    }
  }

  @Override
  public void handleClosedFile(VirtualFile file) {
    AuditService auditService = AuditService.getInstance(project);
    VirtualFile selectedFile = OpenApiUtils.getSelectedOpenAPIFile(project);
    if (selectedFile != null && auditService.hasAuditReport(selectedFile.getPath())) {
      update(auditService.getAuditReport(selectedFile.getPath()));
    }
    else {
      reportNotAvailable();
    }
  }

  @Override
  public void handleViewDetails(VirtualFile file, List<Issue> issues) {
    if (!issues.isEmpty()) {
      loadHTML(getReport("", issues));
    }
  }

  @Override
  public void handleAuditReportReady(VirtualFile file) {
    AuditService auditService = AuditService.getInstance(project);
    update(auditService.getAuditReport(file.getPath()));
    toolWindow.show(null);
  }

  @Override
  public void handleIssuesFixed(List<Issue> issues) {
    CefBrowser browser = getCefBrowser();
    HTMLService htmlService = HTMLService.getInstance();
    StringBuilder value = new StringBuilder("[");
    for (Issue issue : issues) {
      value.append("{");
      append(value, "issueID", issue.getId(), false);
      append(value, "issueFile", issue.getFileName(), false);
      append(value, "issuePointer", issue.getPointer(), true);
      value.append("},");
    }
    value.replace(value.length() - 1, value.length(), "]");
    String js = htmlService.REMOVE_JS.replace("${issues}", value.toString());
    browser.executeJavaScript(js, browser.getURL(), 0);
  }

  @Override
  public void handleSelectedFile(VirtualFile file) {
    AuditService auditService = AuditService.getInstance(project);
    if (auditService.hasAuditReport(file.getPath())) {
      update(auditService.getAuditReport(file.getPath()));
      return;
    }
    if (auditService.isNotAuditParticipantFile(file.getPath())) {
      reportNotAvailable();
    }
  }

  @Override
  public void handleAuditReportClean(Audit auditReport) {
	  if (auditReport == lastAuditReport) {
		  reportNotAvailable();
	  }
  }

  private String getReport(String summary, List<Issue> issuesList) {
    StringBuilder builder = new StringBuilder();
    for (Issue issue : issuesList) {
      if ((issue.getRange() != null) && !StringUtils.isEmpty(issue.getFileName())) {
        builder.append(issue.getHTMLIssue());
      }
    }
    HTMLService htmlService = HTMLService.getInstance();
    String issues = builder.length() > 0 ? builder.toString() : htmlService.NO_ISSUES_FOUND;
    String goBack = StringUtils.EMPTY;
    if (summary.isEmpty()) {
      goBack = htmlService.GO_BACK.replace("${base64Uri}", "").
              replace("href=\"#\"", "href=\"go-full-report\"");
    }
    String report = htmlService.REPORT;

    // Remove useless fragments
    report = report.replaceAll("<meta http-equiv=.*?>", "");
    report = report.replaceAll("<link rel=\"stylesheet\" href=.*bootstrapUrl}\">", "");
    report = report.replaceAll("<link rel=\"stylesheet\" href=.*styleUrl}\">", "");
    report = report.replaceAll("<script src=.*></script>", "");

    // Apply theme
    report = lafListener.updateThemeInHTML(report);

    // Inject generated HTML fragments
    report = report.replace("${summary || \"\"}", summary);
    report = report.replace("${issues || \"\"}", issues);
    report = report.replace("${backToReport}", goBack);

    // Apply CSS styles
    report = htmlService.addCssToHeader(report, true);
    return report;
  }

  private void update(Audit auditReport) {
	lastAuditReport = auditReport;
    loadHTML(getReport(auditReport.getHTMLSummary(), auditReport.getIssues()));
  }

  @Override
  public void handleBackToLink() {
    if (lastAuditReport != null) {
	  update(lastAuditReport);
	}
	else {
	  VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
	  if (file != null) {
	    handleSelectedFile(file);
	  }
	  else {
	    reportNotAvailable();
	  }
	}
  }

  private void reportNotAvailable() {
	lastAuditReport = null;
    HTMLService htmlService = HTMLService.getInstance();
    String report = htmlService.NO_REPORT_AVAILABLE;
    report = report.replaceAll("<meta http-equiv=.*?>", "");
    report = report.replace("${image}", htmlService.getCrunch42Icon());
    report = lafListener.updateThemeInHTML(report);
    report = htmlService.addCssToHeader(report, false);
    loadHTML(report);
  }
}
