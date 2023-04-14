package com.xliic.openapi.report.jcef.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.CopyPasteManager;
import com.xliic.core.ide.StringSelection;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class CopyIssueId extends WebAppProduce {

    public CopyIssueId() {
        super("copyIssueId");
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
            onCopyIssueId((String) payload);
        }
    }

    private static void onCopyIssueId(@NotNull String id) {
        try {
            CopyPasteManager.getInstance().setContents(new StringSelection(id));
        } catch (Exception ignore) {
        }
    }
}
