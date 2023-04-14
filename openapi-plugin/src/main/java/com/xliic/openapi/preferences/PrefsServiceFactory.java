package com.xliic.openapi.preferences;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

public class PrefsServiceFactory extends AbstractServiceFactory {

    private static final PrefsService service = new PrefsService();

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IPrefsService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
