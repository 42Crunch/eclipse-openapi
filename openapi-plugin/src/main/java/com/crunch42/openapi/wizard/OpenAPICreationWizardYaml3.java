package com.crunch42.openapi.wizard;

import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.ui.IWorkbench;

import com.crunch42.openapi.OpenApiFileType;
import com.crunch42.openapi.OpenApiVersion;

public class OpenAPICreationWizardYaml3 extends OpenAPICreationWizard {

	@Override
	protected OpenAPICreationPage getPage(IWorkbench workbench, IStructuredSelection selection) {
		return new OpenAPICreationPage(workbench, selection, OpenApiVersion.V3, OpenApiFileType.Yaml);
	}
}
