package com.xliic.core.ide;

import org.eclipse.swt.dnd.Clipboard;
import org.eclipse.swt.dnd.TextTransfer;
import org.eclipse.swt.dnd.Transfer;
import org.jetbrains.annotations.NotNull;

public class CopyPasteManager {

    private static CopyPasteManager manager;

    public static CopyPasteManager getInstance() {
        if (manager == null) {
            manager = new CopyPasteManager();
        }
        return manager;
    }

    public void setContents(@NotNull StringSelection selection) {
        copyInfoToClipboard(selection.get());
    }

    private static void copyInfoToClipboard(String textData) {
        try {
            Clipboard clipboard = new Clipboard(null);
            TextTransfer textTransfer = TextTransfer.getInstance();
            Transfer[] transfers = new Transfer[] { textTransfer };
            Object[] data = new Object[] { textData };
            clipboard.setContents(data, transfers);
            clipboard.dispose();
        } catch (Exception ignore) {
        }
    }
}
