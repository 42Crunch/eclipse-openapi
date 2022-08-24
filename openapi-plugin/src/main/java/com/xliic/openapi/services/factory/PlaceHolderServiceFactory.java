package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.PlaceHolderService;
import com.xliic.openapi.services.api.IPlaceHolderService;

public class PlaceHolderServiceFactory extends AbstractServiceFactory {

    private static final PlaceHolderService service = new PlaceHolderService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IPlaceHolderService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
