package com.xliic.core.util;

import org.eclipse.jface.resource.ImageDescriptor;
import org.jetbrains.annotations.NotNull;

public class Icon {

	private final ImageDescriptor descriptor;
	
	public Icon(@NotNull ImageDescriptor icon) {
		this.descriptor = icon;
	}
	
	public ImageDescriptor get() {
		return descriptor;
	}
}
