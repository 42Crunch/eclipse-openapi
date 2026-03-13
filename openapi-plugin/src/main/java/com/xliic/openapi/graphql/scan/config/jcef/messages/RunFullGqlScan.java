package com.xliic.openapi.graphql.scan.config.jcef.messages;

import static com.xliic.openapi.graphql.scan.config.jcef.JCEFGqlScanConfPanel.GQL_SCAN_CONF_PATH;

import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.platform.scan.config.jcef.messages.RunFullScan;
import com.xliic.openapi.utils.Utils;

public class RunFullGqlScan extends RunFullScan {

    public RunFullGqlScan(@NotNull Project project, @NotNull Map<String, Object> cache) {
        super(project, cache, true);
    }

    @Override
    protected String getScanConfPath() {
        return (String) cache.get(GQL_SCAN_CONF_PATH);
    }

    @Override
    protected @Nullable String getText(@NotNull VirtualFile file) {
        return Utils.getTextFromFile(file.getPath(), true);
    }
}
