package com.xliic.openapi.services;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class BundleServiceFactory extends AbstractServiceFactory {

	private static final BundleService bundleService = new BundleService(
			OpenAPIAbstractUIPlugin.getInstance().getProject());

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {

		if (!IBundleService.class.equals(serviceInterface)) {
			return null;
		}

		Object parentService = parentLocator.getService(IBundleService.class);
		if (parentService == null) {
			return bundleService;
		}

		return bundleService;
	}
}