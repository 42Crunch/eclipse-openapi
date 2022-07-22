package com.xliic.openapi.report.jcef;

import com.xliic.core.ide.ui.LafManager;
import com.xliic.core.ide.ui.LafManagerListener;
import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.ui.jcef.JBCefBrowser;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.HTMLService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.WindowListener;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import java.util.List;

public class JCEFReportPanel extends JBCefBrowser
        implements LafManagerListener, FileListener, WindowListener, AuditListener, Disposable {

  private final Project project;
  private final ToolWindow toolWindow;
  private final JCEFLoadHandlerAdapter loadHandlerAdapter;
  private final HTMLService htmlService;
  private Audit lastAuditReport;

  public JCEFReportPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {
	super(parent);
    this.project = project;
    this.toolWindow = toolWindow;
    lastAuditReport = null;
    loadHandlerAdapter = new JCEFLoadHandlerAdapter(project,this);
    htmlService = HTMLService.getInstance();

    getJBCefClient().addLoadHandler(loadHandlerAdapter, getCefBrowser());
    project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
    project.getMessageBus().connect().subscribe(WindowListener.TOPIC, this);
    project.getMessageBus().connect().subscribe(AuditListener.TOPIC, this);

    ApplicationManager.getApplication().getMessageBus().connect().subscribe(LafManagerListener.TOPIC, this);

    htmlService.initWebUI(this);
    VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
    if (file != null) {
      handleSelectedFile(file);
    }
  }

  @Override
  public void lookAndFeelChanged(@NotNull LafManager source) {
    boolean isDarkTheme = HTMLService.isDarkTheme(source.getCurrentLookAndFeel());
    htmlService.changeActiveColorTheme(this, isDarkTheme);
  }

  @Override
  public void dispose() {
    super.dispose();
    lastAuditReport = null;
    loadHandlerAdapter.dispose();
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
    for (Audit report : auditService.getAuditReportsForAuditParticipantFileName(newFile.getPath())) {
      if (report == lastAuditReport) {
        update(report);
        break;
      }
    }
  }

  @Override
  public void handleDocumentChanged(VirtualFile file) {
  }

  @Override
  public void handleClosedFile(VirtualFile file) {
    AuditService auditService = AuditService.getInstance(project);
    VirtualFile selectedFile = OpenApiUtils.getSelectedOpenAPIFile(project);
    if (selectedFile != null) {
      Audit audit = auditService.getAuditReport(selectedFile.getPath());
      if (audit != null) {
        update(audit);
      }
    }
    else {
      reportNotAvailable();
    }
  }

  @Override
  public void handleViewDetails(VirtualFile file, List<Issue> issues) {
    if (!issues.isEmpty()) {
      AuditService auditService = AuditService.getInstance(project);
      Audit report = auditService.getAuditReport(issues.get(0).getAuditFileName());
      if (report != null) {
        List<Integer> ids = report.getIssueIds(file, issues);
        htmlService.showPartialReport(this, report, file, ids);
      }
    }
  }

  @Override
  public void handleAuditReportReady(VirtualFile file) {
    AuditService auditService = AuditService.getInstance(project);
    Audit report = auditService.getAuditReport(file.getPath());
    if (!report.isPlatform() || report.isShowAsHTML()) {
      update(report);
      toolWindow.show(null);
    }
  }

  @Override
  public void handleIssuesFixed(List<Issue> issues) {
    if (!issues.isEmpty()) {
      AuditService auditService = AuditService.getInstance(project);
      Audit report = auditService.getAuditReport(issues.get(0).getAuditFileName());
      if (report != null) {
        update(report);
      }
    }
  }

  @Override
  public void handleSelectedFile(VirtualFile file) {
    AuditService auditService = AuditService.getInstance(project);
    Audit audit = auditService.getAuditReport(file.getPath());
    if (audit != null) {
      if (audit.isPlatform()) {
        if (audit.isShowAsHTML()) {
          update(audit);
        }
        else {
          reportNotAvailable();
        }
      }
      else {
        update(audit);
      }
    }
    else if (auditService.isNotAuditParticipantFile(file.getPath())) {
      reportNotAvailable();
    }
  }

  @Override
  public void handleAuditReportClean(Audit report) {}

  public void updateLastReport() {
    if (lastAuditReport == null) {
      reportNotAvailable();
    }
    else {
      update(lastAuditReport);
    }
  }

  private void update(Audit report) {
    lastAuditReport = report;
    htmlService.showFullReport(this, report);
  }

  private void reportNotAvailable() {
    lastAuditReport = null;
    htmlService.showNoReport(this);
  }
}
