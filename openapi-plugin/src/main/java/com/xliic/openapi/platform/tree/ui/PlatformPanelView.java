package com.xliic.openapi.platform.tree.ui;

import java.util.Arrays;
import java.util.HashSet;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.ui.IMemento;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.tree.PlatformFavoriteState;
import com.xliic.openapi.services.PlatformService;

public class PlatformPanelView extends PanelViewPart {

    public static final String CREDENTIALS_NA_TEXT = "42Crunch Platform Credentials are not available";

    private static final String MEMENTO_DELIMETER = ",";
    private static final String FAVORITE_STATE_PATH = "com.xliic.openapi.platform.tree.PlatformFavoriteState";

    public PlatformPanelView() {
        super(ToolWindowId.PLATFORM);
    }

    @Override
    protected Disposable createPanel(@NotNull Project project,
                                     @NotNull ToolWindow window,
                                     @NotNull Composite parent,
                                     @NotNull ViewPartHandler handler) {
        return new PlatformPanel(project, window, parent);
    }

    @Override
    protected void saveState(@NotNull Project project, @NotNull IMemento memento) {
        PlatformService platformService = PlatformService.getInstance(project);
        if (!platformService.getState().collectionIds.isEmpty()) {
            memento.putString(FAVORITE_STATE_PATH, String.join(MEMENTO_DELIMETER, platformService.getState().collectionIds));
        }
    }

    @Override
    protected void restoreState(@NotNull Project project, @NotNull IMemento memento) {
        String collectionIds = memento.getString(FAVORITE_STATE_PATH);
        if (collectionIds != null) {
            PlatformFavoriteState state = new PlatformFavoriteState();
            state.collectionIds = new HashSet<String>(Arrays.asList(collectionIds.split(MEMENTO_DELIMETER)));
            PlatformService platformService = PlatformService.getInstance(project);
            platformService.loadState(state);
        }
    }

    @Override
    protected void createEmptyControl(Composite parent) {
        new Label(parent, SWT.NULL).setText(CREDENTIALS_NA_TEXT);
    }

    @Override
    protected boolean initControl(@NotNull Project project) {
        return PlatformConnection.isPlatformIntegrationEnabled();
    }
}
