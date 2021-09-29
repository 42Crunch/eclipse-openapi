package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.api.IBundleService;

public class BundleServiceFactory extends AbstractServiceFactory {

	private static final BundleService service = new BundleService(OpenAPIAbstractUIPlugin.getInstance().getProject());

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		if (IBundleService.class.equals(serviceInterface)) {
			return service;
		}
		return null;
	}
}