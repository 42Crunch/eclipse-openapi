package com.xliic.openapi.inlined;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;

public class AnnotationServiceFactory extends AbstractServiceFactory {

    private static final AnnotationService service = new AnnotationService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IAnnotationService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
