package com.xliic.openapi.report.types;

public class AuditDisplayOptions {

    public static final AuditDisplayOptions DEFAULT_OPTIONS = new AuditDisplayOptions();

    private boolean showInBrowser;
    private boolean showInProblemsList;

    public AuditDisplayOptions() {
        this(true, true);
    }

    public AuditDisplayOptions(boolean showInBrowser, boolean showInProblemsList) {
        this.showInBrowser = showInBrowser;
        this.showInProblemsList = showInProblemsList;
    }

    public boolean isShowInBrowser() {
        return showInBrowser;
    }

    public void setShowInBrowser(boolean showInBrowser) {
        this.showInBrowser = showInBrowser;
    }

    public boolean isShowInProblemsList() {
        return showInProblemsList;
    }

    public void setShowInProblemsList(boolean showInProblemsList) {
        this.showInProblemsList = showInProblemsList;
    }
}
