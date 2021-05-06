package com.xliic.openapi.services;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

public class SnippetServiceFactory extends AbstractServiceFactory {
	
	private static final SnippetService snippetService = new SnippetService();

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		
		if (!ISnippetService.class.equals(serviceInterface)) {
			return null;
		}

		Object parentService = parentLocator.getService(ISnippetService.class);
		if (parentService == null) {
			return snippetService;
		}

		return snippetService;
	}

}