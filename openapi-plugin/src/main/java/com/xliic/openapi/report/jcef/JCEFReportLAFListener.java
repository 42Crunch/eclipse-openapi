package com.xliic.openapi.report.jcef;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.ui.LafManager;
import com.xliic.core.ide.ui.LafManagerListener;
import com.xliic.core.ui.UIManager;
import com.xliic.core.ui.jcef.CefBrowser;
import com.xliic.openapi.services.HTMLService;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class JCEFReportLAFListener implements LafManagerListener {

  private final CefBrowser browser;
  private boolean isDarkThemeNow = isDarkTheme();

  public JCEFReportLAFListener(CefBrowser browser) {
    this.browser = browser;
    ApplicationManager.getApplication().getMessageBus().connect().subscribe(LafManagerListener.TOPIC, this);
    updateStyleSheet();
  }

  @Override
  public void lookAndFeelChanged(@NotNull LafManager source) {
    boolean isDarkTheme = isDarkTheme(source.getCurrentLookAndFeel());
    if (isDarkTheme != isDarkThemeNow) {
      updateStyleSheet(isDarkTheme);
      browser.reloadHTML();
    }
  }

  public void updateStyleSheet() {
    updateStyleSheet(isDarkTheme());
  }

  public void updateStyleSheet(boolean isDarkTheme) {
    HTMLService htmlService = HTMLService.getInstance();
    String js = isDarkTheme ? htmlService.THEME_DARK_JS : htmlService.THEME_LIGHT_JS;
    browser.executeJavaScript(js, browser.getURL(), 0);
    isDarkThemeNow = isDarkTheme;
  }

  public String updateThemeInHTML(String html) {
    String report = html;
    if (isDarkThemeNow) {
      report = report.replace("<body>", "<body class=\"vscode-dark\">");
    }
    HTMLService htmlService = HTMLService.getInstance();
    String logoSrc = htmlService.getLogo(isDarkThemeNow);
    report = report.replace("${logo}", logoSrc);
    report = report.replace("${logo}", logoSrc);
    return report;
  }

  private static boolean isDarkTheme() {
    return isDarkThemeName(UIManager.getLookAndFeel().getName());
  }

  private static boolean isDarkTheme(@Nullable UIManager.LookAndFeelInfo laf) {
    if (laf == null) {
      return false;
    }
    return isDarkThemeName(laf.getName());
  }

  private static boolean isDarkThemeName(String name) {
    return name.contains("Darcula") || name.contains("High contrast");
  }
}