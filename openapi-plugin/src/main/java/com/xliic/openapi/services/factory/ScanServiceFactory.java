package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.ScanService;
import com.xliic.openapi.services.api.IScanService;

public class ScanServiceFactory extends AbstractServiceFactory {

    private static final ScanService service = new ScanService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IScanService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
