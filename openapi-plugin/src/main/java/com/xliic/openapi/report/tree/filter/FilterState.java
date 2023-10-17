package com.xliic.openapi.report.tree.filter;

import org.apache.commons.lang3.StringUtils;

public class FilterState {

    private boolean showInfo = true;
    private boolean showWarning = true;
    private boolean showError = true;
    private boolean showSelectedFileOnly = false;

    private boolean caseSensitiveState = false;
    private boolean wholeWordsState = false;
    private boolean regexState = false;

    private String searchText = null;

    public void reset() {
        showInfo = true;
        showWarning = true;
        showError = true;
        showSelectedFileOnly = false;
        caseSensitiveState = false;
        wholeWordsState = false;
        regexState = false;
        searchText = null;
    }

    public boolean search() {
        return !StringUtils.isEmpty(searchText);
    }

    public boolean isShowInfo() {
        return showInfo;
    }

    public void setShowInfo(boolean showInfo) {
        this.showInfo = showInfo;
    }

    public boolean isShowWarning() {
        return showWarning;
    }

    public void setShowWarning(boolean showWarning) {
        this.showWarning = showWarning;
    }

    public boolean isShowError() {
        return showError;
    }

    public void setShowError(boolean showError) {
        this.showError = showError;
    }

    public boolean isShowSelectedFileOnly() {
        return showSelectedFileOnly;
    }

    public void setShowSelectedFileOnly(boolean showSelectedFileOnly) {
        this.showSelectedFileOnly = showSelectedFileOnly;
    }

    public boolean isCaseSensitiveState() {
        return caseSensitiveState;
    }

    public void setCaseSensitiveState(boolean caseSensitiveState) {
        this.caseSensitiveState = caseSensitiveState;
    }

    public boolean isWholeWordsState() {
        return wholeWordsState;
    }

    public void setWholeWordsState(boolean wholeWordsState) {
        this.wholeWordsState = wholeWordsState;
    }

    public boolean isRegexState() {
        return regexState;
    }

    public void setRegexState(boolean regexState) {
        this.regexState = regexState;
    }

    public String getSearchText() {
        return searchText;
    }

    public void setSearchText(String searchText) {
        this.searchText = searchText;
    }
}
