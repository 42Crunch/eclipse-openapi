package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.TerminalService;
import com.xliic.openapi.services.api.ITerminalService;

public class TerminalServiceFactory extends AbstractServiceFactory {

    private static final TerminalService service = new TerminalService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (ITerminalService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
