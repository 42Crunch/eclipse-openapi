package com.xliic.openapi.settings;

import org.eclipse.jface.viewers.ITableLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.graphics.Image;

import com.xliic.openapi.OpenAPIImages;

public class HostNameLabelProvider extends LabelProvider implements ITableLabelProvider {
	
	private static final Image hostImage = OpenAPIImages.Host.createImage();

	@Override
	public void dispose() {}

	@Override
	public Image getColumnImage(Object element, int columnIndex) {
		return hostImage;
	}

	@Override
	public String getColumnText(Object element, int columnIndex) {
		if (element instanceof HostName) {
			HostName hostname = (HostName) element;
			return hostname.getHostname();
		}
		return element.toString();
	}
}