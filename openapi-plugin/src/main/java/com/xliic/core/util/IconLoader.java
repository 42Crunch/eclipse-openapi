package com.xliic.core.util;

import org.eclipse.jface.resource.ImageDescriptor;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenAPIImages;

public class IconLoader {
	
	@NotNull
	public static Icon findIcon(@NotNull String path) {	
		switch (path) {
	        case "/icons/property.svg":
	            return new Icon(OpenAPIImages.PropertyNode);
	        case "/icons/add.svg":
	            return new Icon(OpenAPIImages.AddSnippet);
	        default:
	            return new Icon(ImageDescriptor.getMissingImageDescriptor());
		}
	}
}
