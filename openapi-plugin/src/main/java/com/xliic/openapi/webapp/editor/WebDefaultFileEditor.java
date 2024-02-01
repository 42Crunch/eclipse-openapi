package com.xliic.openapi.webapp.editor;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Text;
import org.jetbrains.annotations.NotNull;

public class WebDefaultFileEditor {

    public WebDefaultFileEditor(@NotNull WebVirtualFile file, @NotNull Composite parent) {
        new Text(parent, SWT.SINGLE | SWT.BORDER).setText("Unexpected web editor id " + file.getId() + " with resourceId " + file.getResourceId());
    }
}
