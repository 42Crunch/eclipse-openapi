package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.services.KDBService;
import com.xliic.openapi.services.api.IKDBService;

public class KDBServiceFactory extends AbstractServiceFactory {

    private static final KDBService service = new KDBService();

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IKDBService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
