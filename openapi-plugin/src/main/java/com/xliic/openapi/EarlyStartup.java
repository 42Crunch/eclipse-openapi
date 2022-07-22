package com.xliic.openapi;

import org.eclipse.ui.IStartup;

public class EarlyStartup implements IStartup {

	@Override
	public void earlyStartup() {
		OpenAPIAbstractUIPlugin.getInstance().runAsEarlyStartup();
	}
}
