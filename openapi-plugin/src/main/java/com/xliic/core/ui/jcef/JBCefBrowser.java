package com.xliic.core.ui.jcef;

import org.eclipse.swt.SWT;
import org.eclipse.swt.browser.ProgressEvent;
import org.eclipse.swt.browser.ProgressListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;

public class JBCefBrowser {

    private final Browser browser;
    private ProgressListener progressListener;

    public JBCefBrowser(@NotNull Composite parent) {
        browser = new Browser(parent, SWT.NONE);
        browser.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
        browser.setJavascriptEnabled(true);
    }

    public Browser getBrowser() {
        return browser;
    }

    public String getURL() {
        return "about:blank";
    }

    public void executeJavaScript(String js, String url, int index) {
        if (!browser.isDisposed()) {
            browser.execute(js);
        }
    }

    public void reloadHTML() {
        loadHTML(browser.getText());
    }

    public final void loadHTML(@NotNull String html) {
        if (!browser.isDisposed()) {
            browser.setText(html);
        }
    }

    public final void loadURL(@NotNull String url) {
        if (!browser.isDisposed()) {
            browser.setUrl(url);
        }
    }

    public void addLoadHandler(@NotNull CefLoadHandler handler) {
        final JBCefBrowser myCefBrowser = this;
        progressListener = new ProgressListener() {
            @Override
            public void changed(ProgressEvent event) {
            }

            @Override
            public void completed(ProgressEvent event) {
                handler.onLoadingStateChange(myCefBrowser, false, false, false);
            }
        };
        browser.addProgressListener(progressListener);
    }

    public void removeLoadHandler(@NotNull CefLoadHandler handler) {
        if (progressListener != null) {
            if (!browser.isDisposed()) {
                browser.removeProgressListener(progressListener);
            }
            progressListener = null;
        }
    }

    public final @NotNull JBCefBrowser getJBCefClient() {
        return this;
    }

    public final @NotNull JBCefBrowser getCefBrowser() {
        return this;
    }

    public void dispose() {
        if (!browser.isDisposed()) {
            browser.dispose();
        }
    }
}
