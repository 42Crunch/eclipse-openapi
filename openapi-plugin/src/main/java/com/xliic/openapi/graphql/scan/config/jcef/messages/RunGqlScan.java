package com.xliic.openapi.graphql.scan.config.jcef.messages;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.platform.scan.config.jcef.messages.RunScan;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Map;

import static com.xliic.openapi.graphql.scan.config.jcef.JCEFGqlScanConfPanel.GQL_SCAN_CONF_PATH;

public class RunGqlScan extends RunScan {

    public RunGqlScan(@NotNull Project project, @NotNull Map<String, Object> cache) {
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
