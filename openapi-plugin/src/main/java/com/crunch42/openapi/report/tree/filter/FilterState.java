package com.crunch42.openapi.report.tree.filter;

import org.apache.commons.lang.StringUtils;

public class FilterState {

    private boolean showInfo = true;
    private boolean showWarning = true;
    private boolean showError = true;
    private boolean showSelectedFileOnly = false;

    private boolean caseSensitiveState = false;
    private boolean wholeWordsState = false;
    private boolean regexState = false;

    private String searchText = null;

    public FilterState copy() {
    	FilterState copy = new FilterState();
    	copy.showInfo = showInfo;
    	copy.showWarning = showWarning;
    	copy.showError = showError;
    	copy.showSelectedFileOnly = showSelectedFileOnly;
    	copy.caseSensitiveState = caseSensitiveState;
    	copy.wholeWordsState = wholeWordsState;
    	copy.regexState = regexState;
    	copy.searchText = searchText;
        return copy;
   }

    public void set(FilterState src) {
    	showInfo = src.showInfo;
    	showWarning = src.showWarning;
    	showError = src.showError;
    	showSelectedFileOnly = src.showSelectedFileOnly;
    	caseSensitiveState = src.caseSensitiveState;
    	wholeWordsState = src.wholeWordsState;
    	regexState = src.regexState;
    	searchText = src.searchText;
   }

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
