package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.openapi.services.QuickFixService;
import com.xliic.openapi.services.api.IQuickFixService;

public class QuickFixServiceFactory extends AbstractServiceFactory {

    private static final QuickFixService service = new QuickFixService();

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IQuickFixService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
