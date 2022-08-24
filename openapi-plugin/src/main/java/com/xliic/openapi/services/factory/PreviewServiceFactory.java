package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.services.PreviewService;
import com.xliic.openapi.services.api.IPreviewService;

public class PreviewServiceFactory extends AbstractServiceFactory {

    private static final PreviewService service = new PreviewService();

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IPreviewService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}