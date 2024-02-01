package com.xliic.openapi.platform.scan.config;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;

public class ScanConfServiceFactory extends AbstractServiceFactory {

    private static final ScanConfService service = new ScanConfService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IScanConfService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
