package com.xliic.core.fileChooser;

import java.io.File;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.FileDialog;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;

public class FileChooserDialog {

    private final FileDialog fileChooser;

    public FileChooserDialog(@NotNull FileChooserDescriptor descriptor, @Nullable Project project, @Nullable String text) {
        fileChooser = new FileDialog(EclipseUtil.getShell(), SWT.OPEN);
        fileChooser.setText(text);
        String[] extensions = descriptor.getFilterExtensions();
        if (extensions.length > 0) {
            fileChooser.setFilterExtensions(extensions);
        }
    }

    @NotNull
    public VirtualFile [] choose(@Nullable Project project, @NotNull VirtualFile... files) {
        String filename = fileChooser.open();
        if (filename != null) {
            File file = new File(filename);
            if (file.exists()) {
                VirtualFile[] result = new VirtualFile[1];
                result[0] = new VirtualFile(file);
                return result;
            }
        }
        return files;
    }
}
