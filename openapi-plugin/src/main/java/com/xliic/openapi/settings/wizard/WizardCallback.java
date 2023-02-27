package com.xliic.openapi.settings.wizard;

import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;

public abstract class WizardCallback {

    @NotNull
    private final List<WizardDialog> wizardChain = new LinkedList<>();

    @NotNull
    public List<WizardDialog> getWizardChain() {
        return wizardChain;
    }

    public abstract void complete();
}
