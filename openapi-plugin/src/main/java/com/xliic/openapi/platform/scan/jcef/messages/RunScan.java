package com.xliic.openapi.platform.scan.jcef.messages;

import java.util.Map;
import java.util.stream.Collectors;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.project.Project;
import com.xliic.openapi.platform.scan.ScanRunConfig;
import com.xliic.openapi.services.ScanService;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class RunScan extends WebAppProduce {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    @NotNull
    private final Project project;

    public RunScan(@NotNull Project project) {
        super("runScan");
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            Map<String, Object> env = (Map<String, Object>) map.get("env");
            Map<String, String> configEnv = env.entrySet().stream().collect(
                    Collectors.toMap(Map.Entry::getKey, e -> String.valueOf(e.getValue())));
            String rawOas = (String) map.get("rawOas");
            String config = Utils.serialize(MAPPER, map.get("config"), true);
            if (config != null) {
                ScanService.getInstance(project).runScan(new ScanRunConfig(config, configEnv, rawOas));
            }
        }
    }
}
