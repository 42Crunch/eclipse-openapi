package com.xliic.openapi.settings.table;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.table.host.HostNameTableEditor;

public class ApprovedHostsEditor extends HostNameTableEditor {

    public ApprovedHostsEditor(@NotNull Composite parent) {
        super(parent, Settings.ExtRef.APPROVED_HOSTNAMES, OpenApiBundle.message("openapi.settings.no.hosts.configured"));
    }
}
