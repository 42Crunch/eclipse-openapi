package com.xliic.core.util;

import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.swt.graphics.Image;
import org.jetbrains.annotations.NotNull;

public class Icon {

	@NotNull
	private final ImageDescriptor descriptor;
	private Image image;
	
	public Icon(@NotNull ImageDescriptor descriptor) {
		this.descriptor = descriptor;
		image = null;
	}
	
	public ImageDescriptor get() {
		return descriptor;
	}
	
	public Image createImage() {
		if (image == null) {
			image = descriptor.createImage();
		}
		return image;
	}
}
