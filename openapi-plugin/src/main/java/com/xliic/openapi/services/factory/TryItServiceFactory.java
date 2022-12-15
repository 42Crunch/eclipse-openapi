package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.TryItService;
import com.xliic.openapi.services.api.ITryItService;

public class TryItServiceFactory extends AbstractServiceFactory {

    private static final TryItService service = new TryItService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (ITryItService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
