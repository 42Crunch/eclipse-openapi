package com.xliic.openapi.wizard;

import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.ui.INewWizard;
import org.eclipse.ui.IWorkbench;

import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.OpenApiBundle;

public abstract class OpenAPICreationWizard extends Wizard implements INewWizard {

    private IStructuredSelection selection;
    private IWorkbench workbench;
    private OpenAPICreationPage mainPage;

    @Override
    public void addPages() {
        mainPage = getPage(workbench, selection);
        addPage(mainPage);
    }

    @Override
    public void init(IWorkbench workbench, IStructuredSelection selection) {
        this.workbench = workbench;
        this.selection = selection;
        setWindowTitle(OpenApiBundle.message("openapi.new.file.action.dialog.title"));
        setDefaultPageImageDescriptor(OpenAPIImages.CreateWizard);
    }

    @Override
    public boolean performFinish() {
        return mainPage.finish();
    }

    protected abstract OpenAPICreationPage getPage(IWorkbench workbench, IStructuredSelection selection);
}
