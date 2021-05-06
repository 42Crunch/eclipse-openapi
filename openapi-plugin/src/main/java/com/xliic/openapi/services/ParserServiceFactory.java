package com.xliic.openapi.services;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

public class ParserServiceFactory extends AbstractServiceFactory {

	private static final ParserService parserService = new ParserService();

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		
		if (!IParserService.class.equals(serviceInterface)) {
			return null;
		}
		
		Object parentService = parentLocator.getService(IParserService.class);
		if (parentService == null) {
			return parserService;
		}
		
		return parserService;
	}
}