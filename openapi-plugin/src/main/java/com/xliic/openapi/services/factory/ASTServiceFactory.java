package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.api.IASTService;

public class ASTServiceFactory extends AbstractServiceFactory {

    private static final ASTService service = new ASTService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IASTService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
