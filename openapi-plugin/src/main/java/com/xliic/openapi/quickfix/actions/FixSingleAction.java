package com.xliic.openapi.quickfix.actions;

import com.xliic.openapi.quickfix.managers.FixManager;

public class FixSingleAction extends FixAction {

    public FixSingleAction(FixManager provider) {
        super(0, provider.getTitle(), provider);
    }
}
