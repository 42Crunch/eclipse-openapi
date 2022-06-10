package com.xliic.openapi.snippets;

import java.util.Map;

public class SnippetLayout {

    private int padding;
    private int paddingFromParent;
    private boolean containerExists;
    private String panel;
    private boolean comma;
    private Map<Integer, String> indexToValueMap;

    public SnippetLayout(int padding, int paddingFromParent, boolean containerExists,
                         String panel, boolean comma, Map<Integer, String> indexToValueMap) {
        this.padding = padding;
        this.paddingFromParent = paddingFromParent;
        this.containerExists = containerExists;
        this.panel = panel;
        this.comma = comma;
        this.indexToValueMap = indexToValueMap;
    }

    public int getPadding() {
        return padding;
    }

    public void setPadding(int padding) {
        this.padding = padding;
    }

    public int getPaddingFromParent() {
        return paddingFromParent;
    }

    public void setPaddingFromParent(int paddingFromParent) {
        this.paddingFromParent = paddingFromParent;
    }

    public boolean isContainerExists() {
        return containerExists;
    }

    public void setContainerExists(boolean containerExists) {
        this.containerExists = containerExists;
    }

    public String getPanel() {
        return panel;
    }

    public void setPanel(String panel) {
        this.panel = panel;
    }

    public boolean isComma() {
        return comma;
    }

    public void setComma(boolean comma) {
        this.comma = comma;
    }

    public Map<Integer, String> getIndexToValueMap() {
        return indexToValueMap;
    }

    public void setIndexToValueMap(Map<Integer, String> indexToValueMap) {
        this.indexToValueMap = indexToValueMap;
    }
}
