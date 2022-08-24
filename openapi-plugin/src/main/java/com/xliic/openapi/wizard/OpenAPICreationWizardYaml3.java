package com.xliic.openapi.wizard;

import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.ui.IWorkbench;

import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;

public class OpenAPICreationWizardYaml3 extends OpenAPICreationWizard {

    @Override
    protected OpenAPICreationPage getPage(IWorkbench workbench, IStructuredSelection selection) {
        return new OpenAPICreationPage(workbench, selection, OpenApiVersion.V3, OpenApiFileType.Yaml);
    }
}
