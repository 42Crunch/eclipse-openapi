package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.api.IAuditService;

public class AuditServiceFactory extends AbstractServiceFactory {

	private static final AuditService service = new AuditService(OpenAPIAbstractUIPlugin.getInstance().getProject());

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		if (IAuditService.class.equals(serviceInterface)) {
			return service;
		}
		return null;
	}
}
