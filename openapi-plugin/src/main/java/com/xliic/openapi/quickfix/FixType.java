package com.xliic.openapi.quickfix;

public enum FixType {

    Insert, Replace, Delete, RegexReplace, RenameKey;

    public static FixType getFixType(String type) {

        if ("insert".equals(type)) {
            return Insert;
        } else if ("replace".equals(type)) {
            return Replace;
        } else if ("delete".equals(type)) {
            return Delete;
        } else if ("regex-replace".equals(type)) {
            return RegexReplace;
        } else if ("renameKey".equals(type)) {
            return RenameKey;
        } else {
            return null;
        }
    }
}
