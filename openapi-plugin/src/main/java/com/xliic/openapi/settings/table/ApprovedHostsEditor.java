package com.xliic.openapi.settings.table;

import java.util.Set;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.table.host.HostNameTableEditor;

public class ApprovedHostsEditor extends HostNameTableEditor {

    public ApprovedHostsEditor(@NotNull Composite parent) {
        super(parent, Settings.HOSTS, OpenApiBundle.message("openapi.settings.no.hosts.configured"));
    }

    @Override
    protected void applyChangesComplete(@NotNull Project project, @NotNull Set<String> hostnames) {
        BundleService bundleService = BundleService.getInstance(project);
        bundleService.scheduleToBundleByHosts(hostnames);
    }
}
