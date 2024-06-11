package com.xliic.openapi.webapp.editor;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.webapp.WebApp;

public abstract class WebFileEditor extends WebApp {
	
    public static final String CONFIG_EDITOR_ID = "config";
    public static final String SCAN_EDITOR_ID = "scan";
    public static final String SCANCONF_EDITOR_ID = "scanconf";
    public static final String DATA_DICTIONARY_EDITOR_ID = "data-dictionary";
    public static final String WHATS_NEW_EDITOR_ID = "whatsnew";

    public WebFileEditor(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, file.getId(), file.getResourceId(), parent, file.getHandler());
    }
}
