package com.xliic.openapi.quickfix.actions;

import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.bundler.BundleHighlightingPass;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Settings;

public class FixHostApprovedAction extends IntentionAction {

    private final String hostname;

    public FixHostApprovedAction(@NotNull String hostname) {
        this.hostname = hostname.toLowerCase();
    }

    @Override
    @NotNull
    public String getText() {
        return "Add " + hostname + " to the list of approved hostnames";
    }

    @Override
    @NotNull
    public String getFamilyName() {
        return getText();
    }

    @Override
    public boolean isAvailable(@NotNull Project project, Editor editor, PsiFile psiFile) {
        return true;
    }

    @Override
    public void invoke(@NotNull final Project project, Editor editor, PsiFile file, int offset) {
        Set<String> hostnames = Settings.getValues(Settings.ExtRef.APPROVED_HOSTNAMES);
        if (!hostnames.contains(hostname)) {
            hostnames.add(hostname);
            PropertiesComponent.getInstance().setList(Settings.ExtRef.APPROVED_HOSTNAMES, hostnames);
            BundleService bundleService = BundleService.getInstance(project);
            bundleService.scheduleToBundleByHost(hostname);
        }
    }

    @Override
    public boolean startInWriteAction() {
        return false;
    }

    @Override
    public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
        return label.startsWith(BundleHighlightingPass.EXT_REF_STARTS_WITH) && label.endsWith(BundleHighlightingPass.EXT_REF_ENDS_WITH)
                && label.contains(hostname);
    }
}
