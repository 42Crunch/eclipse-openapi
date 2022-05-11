package com.xliic.core.util;

import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class ResourceUtil {
	
    public static InputStream getResourceAsStream(@NotNull Class<?> loaderClass, @NotNull String basePath, @NotNull String fileName) {
		try {
			URL baseURL = OpenAPIAbstractUIPlugin.getInstance().getBundle().getEntry("/");
			URL url = new URL(baseURL, "resources/" + basePath + "/" + fileName);
			return loaderClass.getResourceAsStream(url.getFile());
		}
		catch (MalformedURLException e) {
			e.printStackTrace();
		}
		return null;
    }

	public static InputStream getResourceAsStream(ClassLoader classLoader, String basePath, String fileName) {
		try {
			URL baseURL = OpenAPIAbstractUIPlugin.getInstance().getBundle().getEntry("/");
			URL url = new URL(baseURL, "resources/" + basePath + "/" + fileName);
			return classLoader.getResourceAsStream(url.getFile());
		}
		catch (MalformedURLException e) {
			e.printStackTrace();
		}
		return null;
	}
}
