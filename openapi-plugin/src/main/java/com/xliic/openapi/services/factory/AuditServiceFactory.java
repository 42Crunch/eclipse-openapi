package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.api.IAuditService;

public class AuditServiceFactory extends AbstractServiceFactory {

	private static final AuditService service = new AuditService(Project.getInstance());

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		if (IAuditService.class.equals(serviceInterface)) {
			return service;
		}
		return null;
	}
}
