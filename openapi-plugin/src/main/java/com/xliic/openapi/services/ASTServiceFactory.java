package com.xliic.openapi.services;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class ASTServiceFactory extends AbstractServiceFactory {

	private static final ASTService astService = new ASTService(OpenAPIAbstractUIPlugin.getInstance().getProject());

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {

		if (!IASTService.class.equals(serviceInterface)) {
			return null;
		}

		Object parentService = parentLocator.getService(IASTService.class);
		if (parentService == null) {
			return astService;
		}

		return astService;
	}
}
