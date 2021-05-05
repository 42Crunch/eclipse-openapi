package com.crunch42.openapi.services;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

public class DataServiceFactory extends AbstractServiceFactory {
	
	private static final DataService dataService = new DataService();

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		
		if (!IDataService.class.equals(serviceInterface)) {
			return null;
		}

		Object parentService = parentLocator.getService(IDataService.class);
		if (parentService == null) {
			return dataService;
		}

		return dataService;
	}
}