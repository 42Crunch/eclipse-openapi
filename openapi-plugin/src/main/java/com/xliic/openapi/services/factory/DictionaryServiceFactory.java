package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.DictionaryService;
import com.xliic.openapi.services.api.IDictionaryService;

public class DictionaryServiceFactory extends AbstractServiceFactory {

    private static final DictionaryService service = new DictionaryService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IDictionaryService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
