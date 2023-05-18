package com.xliic.openapi.config;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;

public class ConfigServiceFactory extends AbstractServiceFactory {

    private static final ConfigService service = new ConfigService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IConfigService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
