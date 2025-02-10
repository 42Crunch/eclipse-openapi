package com.xliic.core.fileChooser;

import java.io.File;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.FileDialog;
import org.eclipse.swt.widgets.MessageBox;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFileWrapper;

public class FileSaverDialog {

    private final FileDialog saveDialog;

    public FileSaverDialog(@NotNull FileSaverDescriptor descriptor, @Nullable Project project) {
    	saveDialog = new FileDialog(EclipseUtil.getShell(), SWT.SAVE);
    	saveDialog.setText(descriptor.getTitle());
        String[] extensions = descriptor.getFilterExtensions();
        if (extensions.length > 0) {
        	saveDialog.setFilterExtensions(extensions);
        }
    }

    @Nullable
    public VirtualFileWrapper save(@Nullable String filename) {
    	saveDialog.open();
    	String name = saveDialog.getFileName();
    	if (name.isEmpty()) {
    		return null;
    	}
    	File file = new File(saveDialog.getFilterPath(), name);
    	if(file.exists()) {
    		MessageBox box = new MessageBox(EclipseUtil.getShell(), SWT.ICON_WARNING | SWT.YES | SWT.NO);
    		box.setText("Confirm Save as");
    		box.setMessage(name + " already exists.\nDo you want to replace it?");
    		if (box.open() != SWT.YES) {
    			return null;
    		}
    	}
    	return new VirtualFileWrapper(file);
    }
}
