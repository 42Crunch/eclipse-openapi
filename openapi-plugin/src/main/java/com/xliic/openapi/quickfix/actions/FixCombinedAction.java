package com.xliic.openapi.quickfix.actions;

import com.xliic.openapi.quickfix.managers.FixManager;

public class FixCombinedAction extends FixAction {

    public FixCombinedAction(FixManager provider) {
        super(1, provider.getTitle(), provider);
    }
}
