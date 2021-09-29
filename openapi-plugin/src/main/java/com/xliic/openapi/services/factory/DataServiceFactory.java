package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.services.api.IDataService;

public class DataServiceFactory extends AbstractServiceFactory {

	private static final DataService service = new DataService(OpenAPIAbstractUIPlugin.getInstance().getProject());

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		if (IDataService.class.equals(serviceInterface)) {
			return service;
		}
		return null;
	}
}