package com.xliic.openapi.tree;

import com.xliic.core.icons.AllIcons;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.actionSystem.ToggleAction;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.settings.SettingsKeys;
import org.jetbrains.annotations.NotNull;

public class OpenAPIAlphaSortAction extends ToggleAction implements DumbAware {

    @NotNull
    private final Project project;
    @NotNull
    private final SortCallback callback;

    public interface SortCallback {
        void sort(boolean sort);
    }

    public OpenAPIAlphaSortAction(@NotNull Project project, @NotNull SortCallback callback) {
        super("Sort Alphabetically", "Sort alphabetically", AllIcons.ObjectBrowser.Sorted);
        this.project = project;
        this.callback = callback;
    }

    @Override
    public final boolean isSelected(@NotNull AnJActionEvent event) {
        return PropertiesComponent.getInstance().getBoolean(SettingsKeys.ABC_SORT);
    }

    @Override
    public final void setSelected(@NotNull AnJActionEvent event, boolean flag) {
        callback.sort(flag);
    }

    @Override
    public void update(AnJActionEvent event) {
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file != null) {
            ASTService astService = ASTService.getInstance(project);
            event.getPresentation().setEnabled(astService.getRootNode(file) != null);
        } else {
            event.getPresentation().setEnabled(false);
        }
    }
}
