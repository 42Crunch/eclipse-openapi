package com.xliic.openapi.services;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class AuditServiceFactory extends AbstractServiceFactory {

	private static final AuditService auditService = new AuditService(
			OpenAPIAbstractUIPlugin.getInstance().getProject());

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {

		if (!IAuditService.class.equals(serviceInterface)) {
			return null;
		}

		Object parentService = parentLocator.getService(IAuditService.class);
		if (parentService == null) {
			return auditService;
		}

		return auditService;
	}
}
