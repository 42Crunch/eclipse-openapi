package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.services.ParserService;
import com.xliic.openapi.services.api.IParserService;

public class ParserServiceFactory extends AbstractServiceFactory {

	private static final ParserService service = new ParserService();

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		if (IParserService.class.equals(serviceInterface)) {
			return service;
		}
		return null;
	}
}