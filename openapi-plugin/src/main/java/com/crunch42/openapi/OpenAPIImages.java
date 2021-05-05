package com.crunch42.openapi;

import java.net.MalformedURLException;
import java.net.URL;

import org.eclipse.jface.resource.ImageDescriptor;

public class OpenAPIImages {
	
	public static final ImageDescriptor PanelNode;
	public static final ImageDescriptor PropertyNode;
	public static final ImageDescriptor AddSnippet;
	public static final ImageDescriptor CreateWizard;
	public static final ImageDescriptor Any_type;
	
	public static final ImageDescriptor ReportError;
	public static final ImageDescriptor ReportWarning;
	public static final ImageDescriptor ReportInfo;

	public static final ImageDescriptor File;
	public static final ImageDescriptor Reset;
	public static final ImageDescriptor Filter;
	public static final ImageDescriptor OpenAPIIcon;

	private static final URL BASE_URL = OpenAPIAbstractUIPlugin.getInstance().getBundle().getEntry("/");

	static {
		PanelNode = createImageDescriptor("icons/listFiles.png"); 
		PropertyNode = createImageDescriptor("icons/property.png");
		AddSnippet = createImageDescriptor("icons/add.png");
		CreateWizard = createImageDescriptor("icons/openapi-create-wizard.png");
		Any_type = createImageDescriptor("icons/any_type.png");
		
		ReportError = createImageDescriptor("icons/reportError.png");
	    ReportWarning = createImageDescriptor("icons/reportWarning.png");
	    ReportInfo = createImageDescriptor("icons/reportInfo.png");
	    
	    File = createImageDescriptor("icons/text.png");
	    Reset = createImageDescriptor("icons/reset.png");
	    Filter = createImageDescriptor("icons/filter.png");
	    OpenAPIIcon = createImageDescriptor("icons/icon_api_16.png");
	}

	private static ImageDescriptor createImageDescriptor(String path) {
		try {
			return ImageDescriptor.createFromURL(new URL(BASE_URL, path));
		} 
		catch (MalformedURLException e) {
		}
		return ImageDescriptor.getMissingImageDescriptor();
	}
}
