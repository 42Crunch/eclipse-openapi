package com.xliic.openapi.quickfix.actions;

import com.xliic.openapi.quickfix.managers.FixManager;

public class FixBulkAction extends FixAction {

	public FixBulkAction(FixManager provider) {
		super(3, provider.getTitle(), provider);
	}
}
