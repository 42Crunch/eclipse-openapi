package com.xliic.openapi.actions;

import com.xliic.openapi.OpenApiUtils;
import com.xliic.idea.DumbAware;
import com.xliic.idea.action.AnAction;
import com.xliic.idea.action.AnActionEvent;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.services.PreviewService;

import java.net.MalformedURLException;

public abstract class PreviewAbstractAction extends AnAction implements DumbAware {

    @Override
    public void update(AnActionEvent event) {

        Project project = event.getProject();
        if (project == null) {
            event.getPresentation().setEnabled(false);
            return;
        }
        IDataService dataService = DataService.getInstance(project);
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file == null || !dataService.getParserData(file.getPath()).isValid()) {
            event.getPresentation().setEnabled(false);
            return;
        }
        if (!PreviewService.getInstance().isRunning()) {
            event.getPresentation().setEnabled(false);
            return;
        }
        event.getPresentation().setEnabled(true);
    }

    @Override
    public void actionPerformed(AnActionEvent e) {

        Project project = e.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        try {
            browse(file);
        }
        catch (MalformedURLException exception) {
            exception.printStackTrace();
        }
    }

    public abstract void browse(VirtualFile file) throws MalformedURLException;
}
