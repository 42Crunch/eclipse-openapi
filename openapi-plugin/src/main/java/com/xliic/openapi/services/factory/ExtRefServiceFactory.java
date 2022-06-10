package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.ExtRefService;
import com.xliic.openapi.services.api.IExtRefService;

public class ExtRefServiceFactory extends AbstractServiceFactory {

	private static final ExtRefService service = new ExtRefService(Project.getInstance());

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		if (IExtRefService.class.equals(serviceInterface)) {
			return service;
		}
		return null;
	}
}
