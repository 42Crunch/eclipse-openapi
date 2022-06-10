package com.xliic.openapi.tree;

import com.xliic.core.ide.PropertiesComponent;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.actionSystem.ToggleAction;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.util.Icon;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.settings.SettingsKeys;
import com.xliic.openapi.tree.ui.OpenAPITreeView;

import org.jetbrains.annotations.NotNull;

public class OpenAPIAlphaSortAction extends ToggleAction implements DumbAware {

    private final Project project;
    private final OpenAPITreeView view;

    public OpenAPIAlphaSortAction(@NotNull Project project, @NotNull OpenAPITreeView view) {
        super("Sort Alphabetically", "Sort alphabetically", new Icon(OpenAPIImages.Sort));
        this.project = project;
        this.view = view;
    }

    @Override
    public final boolean isSelected(@NotNull AnJActionEvent event) {
        return PropertiesComponent.getInstance().getBoolean(SettingsKeys.ABC_SORT);
    }

    @Override
    public final void setSelected(@NotNull AnJActionEvent event, boolean flag) {
        view.sort(flag);
    }

    @Override
    public void update(AnJActionEvent event) {
        event.getPresentation().setEnabled(OpenApiUtils.getSelectedOpenAPIFile(project) != null);
    }
}
