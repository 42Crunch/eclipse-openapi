package com.xliic.openapi.services.factory;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;
import com.xliic.openapi.services.GitService;
import com.xliic.openapi.services.api.IGitService;
import com.xliic.core.project.Project;

public class GitServiceFactory extends AbstractServiceFactory {

    private static final GitService service = new GitService(Project.getInstance());

    @Override
    @SuppressWarnings("rawtypes")
    public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
        if (IGitService.class.equals(serviceInterface)) {
            return service;
        }
        return null;
    }
}
