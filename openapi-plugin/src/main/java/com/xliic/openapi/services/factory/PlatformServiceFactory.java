package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.services.api.IPlatformService;

public class PlatformServiceFactory extends AbstractServiceFactory {

	private static final PlatformService service = new PlatformService(Project.getInstance());

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		if (IPlatformService.class.equals(serviceInterface)) {
			return service;
		}
		return null;
	}
}