package com.xliic.openapi.listeners;

import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.document.DocumentEvent;
import com.xliic.idea.document.DocumentListener;
import com.xliic.idea.file.LocalFileSystem;
import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.services.PreviewService;
import org.jetbrains.annotations.NotNull;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import static com.xliic.openapi.preview.PreviewUtils.getCanonicalPathFromQuery;
import static com.xliic.openapi.preview.PreviewUtils.getTextFromBundler;
import static com.xliic.openapi.preview.PreviewUtils.isFileOpenedAnywhere;

public class PreviewDocumentListener extends DocumentListener {

    private final String query;
    private final String canonicalPath;
    private final Map<String, PreviewDocumentListener> listeners;

    public PreviewDocumentListener(String query, Map<String, PreviewDocumentListener> listeners) {
        this.query = query;
        this.canonicalPath = getCanonicalPathFromQuery(query);
        this.listeners = listeners;
    }

    @Override public void beforeDocumentChange(@NotNull DocumentEvent event) {
    }

    @Override public void documentChanged(@NotNull DocumentEvent event) {

        try {
            // Notify clients about changes
            Map<String, String> cache = new HashMap<>();
            String text = getTextFromBundler(canonicalPath, cache);
            PreviewService.getInstance().sendText(query, text);

            // Check if there are any changes in bundle files to add or delete new listeners

            // New bundled file appeared, add listener
            for (String bundledFile : cache.keySet()) {
                if (!listeners.containsKey(bundledFile)) {
                    listeners.put(bundledFile, null);
                    VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(bundledFile));
                    if (file == null) {
                        continue;
                    }
                    if (isFileOpenedAnywhere(file)) {
                        Document document = FileDocumentManager.getInstance().getDocument(file);
                        if (document != null) {
                            listeners.put(bundledFile, new PreviewDocumentListener(query, listeners));
                            document.addDocumentListener(listeners.get(bundledFile));
                        }
                    }
                }
            }

            // Previously bundled file disappeared, remove listener
            for (String bundledFile : Set.copyOf(listeners.keySet())) {
                if (!cache.containsKey(bundledFile)) {
                    PreviewDocumentListener listener = listeners.remove(bundledFile);
                    if (listener == null) {
                        continue;
                    }
                    VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(bundledFile));
                    if (file == null) {
                        continue;
                    }
                    if (isFileOpenedAnywhere(file)) {
                        Document document = FileDocumentManager.getInstance().getDocument(file);
                        if (document != null) {
                            document.removeDocumentListener(listener);
                        }
                    }
                }
            }
        }
        catch (Exception exception) {
            exception.printStackTrace();
        }
    }
}

