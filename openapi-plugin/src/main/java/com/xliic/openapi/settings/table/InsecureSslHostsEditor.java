package com.xliic.openapi.settings.table;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.table.host.HostNameTableEditor;

public class InsecureSslHostsEditor extends HostNameTableEditor {

    public InsecureSslHostsEditor(@NotNull Composite parent) {
        super(parent, Settings.TryIt.INSECURE_SSL_HOSTNAMES, "No insecure ssl hosts configured");
    }
}
