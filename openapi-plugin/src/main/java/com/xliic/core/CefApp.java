package com.xliic.core;

import org.osgi.framework.BundleContext;
import org.osgi.framework.FrameworkUtil;
import org.osgi.framework.ServiceReference;

import com.equo.middleware.api.IMiddlewareService;
import com.equo.middleware.api.handler.IResponseHandler;

public class CefApp {

    private static final CefApp self = new CefApp();

    public static synchronized CefApp getInstance() throws UnsatisfiedLinkError {
        return self;
    }

    public boolean registerSchemeHandlerFactory(String schemeName, String domainName, IResponseHandler responseHandler) {
        BundleContext ctx = FrameworkUtil.getBundle(this.getClass()).getBundleContext();
        if (ctx == null) {
            return false;
        }
        IMiddlewareService mSrv = getService(IMiddlewareService.class, ctx);
        if (mSrv == null) {
            return false;
        }
        mSrv.addResourceHandler(schemeName, domainName, responseHandler);
        return true;
    }

    public static <T extends Object> T getService(final Class<T> clazz, BundleContext bundleContext) {
        final ServiceReference<T> ref = bundleContext.getServiceReference(clazz);
        return bundleContext.getService(ref);
    }
}
