package com.xliic.openapi.async;

public enum AsyncTaskType {

    BEFORE_FILE_OPENED,
    DOCUMENT_CHANGED,
    SELECTION_CHANGED,
    BEFORE_FILE_CLOSED,
    ALL_FILES_CLOSED,
    REFACTOR_RENAME
}
