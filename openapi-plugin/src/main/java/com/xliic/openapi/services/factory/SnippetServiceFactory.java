package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.services.SnippetService;
import com.xliic.openapi.services.api.ISnippetService;

public class SnippetServiceFactory extends AbstractServiceFactory {

	private static final SnippetService service = new SnippetService();

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		if (ISnippetService.class.equals(serviceInterface)) {
			return service;
		}
		return null;
	}
}