package com.xliic.openapi.actions;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.AuditConfigEmailDialogWrapper;
import com.xliic.openapi.settings.SettingsKeys;

public class SecurityAuditAction extends ProjectAction {

    public SecurityAuditAction() {
        super("audit");
    }

    @Override
    public boolean update(@NotNull Project project, @NotNull VirtualFile file) {
        return true;
    }

    @Override
    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile file) {
        String rootFileName = file.getPath();
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundleResult = bundleService.getBundle(rootFileName);
        if (bundleResult == null) {
            return;
        }
        if (!bundleResult.isBundleComplete()) {
            bundleService.notifyOfErrors(rootFileName);
            return;
        }
        String token = PropertiesComponent.getInstance().getValue(SettingsKeys.TOKEN);
        if (StringUtils.isEmpty(token)) {
            new AuditConfigEmailDialogWrapper(project, file).showAndGet();
        }
        else {
            AuditService auditService = AuditService.getInstance(project);
            auditService.sendAuditRequest(token, file.getPath(), new AuditActionCallback(project, file));
        }
    }
}