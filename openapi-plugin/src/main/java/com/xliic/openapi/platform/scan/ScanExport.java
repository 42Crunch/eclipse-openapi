package com.xliic.openapi.platform.scan;

import static com.xliic.openapi.utils.FileUtils.saveToTempFile;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.quickfix.QuickFix;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Objects;
import java.util.UUID;

public class ScanExport {

    public static final String EXPORT_TEMP_DIR = "scan-report";

    @Nullable
    private Path nioFilePath;
    private volatile boolean tempFileSaved = false;
    private boolean removeParentDir = false;

    public @Nullable File getTempFile() {
        return nioFilePath != null ? nioFilePath.toFile() : null;
    }

    public boolean isTempFileSaved() {
        return tempFileSaved;
    }

    public void save(@NotNull Project project, @Nullable String report, @Nullable Path filePath) {
        if (filePath != null) {
            nioFilePath = filePath;
            tempFileSaved = true;
            removeParentDir = true;
        } else {
            String text = QuickFix.formatFixText(Objects.requireNonNull(report), true);
            saveToTempFile(project, EXPORT_TEMP_DIR, "scan-" + UUID.randomUUID() + ".json", text, (savedFilePath) -> {
                nioFilePath = savedFilePath;
                tempFileSaved = true;
            });
        }
    }

    public void remove() {
        if (nioFilePath != null) {
            try {
                Files.deleteIfExists(nioFilePath);
                if (removeParentDir) {
                    Files.delete(nioFilePath.getParent());
                }
            } catch (IOException ignored) {
            }
        }
    }
}
