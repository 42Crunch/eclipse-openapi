package com.xliic.openapi.environment;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;

public class EnvServiceFactory extends AbstractServiceFactory {

    private static final EnvService service = new EnvService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IEnvService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
