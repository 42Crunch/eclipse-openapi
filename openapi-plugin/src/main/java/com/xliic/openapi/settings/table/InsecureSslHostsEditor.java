package com.xliic.openapi.settings.table;

import java.util.Set;

import javax.swing.SwingUtilities;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.table.host.HostNameTableEditor;
import com.xliic.openapi.tryit.TryItListener;

public class InsecureSslHostsEditor extends HostNameTableEditor {

    public InsecureSslHostsEditor(@NotNull Composite parent) {
        super(parent, Settings.TryIt.INSECURE_SSL_HOSTNAMES, "No insecure ssl hosts configured");
    }

    @Override
    protected void applyChangesComplete(@NotNull Project project, @NotNull Set<String> hostnames) {
        SwingUtilities.invokeLater(() -> {
            project.getMessageBus().syncPublisher(TryItListener.TOPIC).tryLastOperation();
        });
    }
}
