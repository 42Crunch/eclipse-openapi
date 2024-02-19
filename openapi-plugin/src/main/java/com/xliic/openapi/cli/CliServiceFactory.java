package com.xliic.openapi.cli;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

public class CliServiceFactory extends AbstractServiceFactory {

    private static final CliService service = new CliService();

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (ICliService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
