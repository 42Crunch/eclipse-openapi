package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.services.HTMLService;
import com.xliic.openapi.services.api.IHTMLService;

public class HTMLServiceFactory extends AbstractServiceFactory {

    private static final HTMLService service = new HTMLService();

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IHTMLService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}