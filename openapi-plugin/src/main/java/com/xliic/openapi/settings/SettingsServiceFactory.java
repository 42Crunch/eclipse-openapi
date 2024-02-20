package com.xliic.openapi.settings;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

public class SettingsServiceFactory extends AbstractServiceFactory {

    private static final SettingsService service = new SettingsService();

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (ISettingsService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
