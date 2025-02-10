package com.xliic.core.fileChooser;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.FileDialog;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;

public class FileChooserDialog {

    private final FileDialog fileChooser;
    private final boolean isChooseMultiple;

    public FileChooserDialog(@NotNull FileChooserDescriptor descriptor, @Nullable Project project, @Nullable String text) {
    	int style = SWT.OPEN;
    	isChooseMultiple = descriptor.isChooseMultiple();
    	if (isChooseMultiple) {
    		style |= SWT.MULTI;
    	}
        fileChooser = new FileDialog(EclipseUtil.getShell(), style);
        fileChooser.setText(text);
        String[] extensions = descriptor.getFilterExtensions();
        if (extensions.length > 0) {
            fileChooser.setFilterExtensions(extensions);
        }
    }

    @NotNull
    public VirtualFile[] choose(@Nullable Project project, @NotNull VirtualFile... files) {
        String result = fileChooser.open();
        if (result != null && result.length() > 0) {
        	if (isChooseMultiple) {
        		String path = fileChooser.getFilterPath();
        		String[] names = fileChooser.getFileNames();
        		List<VirtualFile> filesList = new LinkedList<>();
        		for (String name : names) {
                    File file = new File(path + File.separator + name);
                    if (file.exists()) {
                    	filesList.add(new VirtualFile(file));
                    }
        		}
        		VirtualFile[] resFiles = new VirtualFile[filesList.size()];
        		filesList.toArray(resFiles);
        		return resFiles;
        	} else {
                File file = new File(result);
                if (file.exists()) {
                    VirtualFile[] resFiles = new VirtualFile[1];
                    resFiles[0] = new VirtualFile(file);
                    return resFiles;
                }
        	}
        }
        return files;
    }
}
