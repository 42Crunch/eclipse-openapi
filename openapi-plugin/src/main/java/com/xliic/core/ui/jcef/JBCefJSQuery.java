package com.xliic.core.ui.jcef;

import java.util.function.Function;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public final class JBCefJSQuery {
	
	private final JBCefBrowserBase browser;
	
	public JBCefJSQuery(@NotNull JBCefBrowserBase browser) {
		this.browser = browser;
	}

	public static @NotNull JBCefJSQuery create(@NotNull JBCefBrowserBase browser) {
		return new JBCefJSQuery(browser);
	}
	
	public @NotNull String inject(@Nullable String queryResult) {
		return "";
	}
	
    public void addHandler(final @NotNull Function<? super String, ? extends Response> handler) {
    	browser.addLocationListener(handler);
    }
    
    public void removeHandler(@NotNull Function<? super String, ? extends Response> function) {
    	browser.removeLocationListener();
    }
	
    public static class Response {
    	
        public static final int ERR_CODE_SUCCESS = 0;
        private final @Nullable String myResponse;
        private final int myErrCode;
        private final @Nullable String myErrMsg;

        public Response(@Nullable String response) {
            this(response, 0, (String)null);
        }

        public Response(@Nullable String response, int errCode, @Nullable String errMsg) {
            this.myResponse = response;
            this.myErrCode = errCode;
            this.myErrMsg = errMsg;
        }

        public @Nullable String response() {
            return this.myResponse;
        }

        public int errCode() {
            return this.myErrCode;
        }

        public @Nullable String errMsg() {
            return this.myErrMsg;
        }

        public boolean isSuccess() {
            return this.myErrCode == 0;
        }

        public boolean hasResponse() {
            return this.myResponse != null;
        }
    }
}
