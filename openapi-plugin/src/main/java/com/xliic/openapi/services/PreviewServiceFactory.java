package com.xliic.openapi.services;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

public class PreviewServiceFactory extends AbstractServiceFactory {
	
	private static final PreviewService previewService = new PreviewService();

	@Override
	@SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		
		if (!IPreviewService.class.equals(serviceInterface)) {
			return null;
		}

		Object parentService = parentLocator.getService(IPreviewService.class);
		if (parentService == null) {
			return previewService;
		}

		return previewService;
	}
}