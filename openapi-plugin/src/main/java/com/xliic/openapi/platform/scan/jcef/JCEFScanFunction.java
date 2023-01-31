package com.xliic.openapi.platform.scan.jcef;

import java.io.IOException;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.ide.CopyPasteManager;
import com.xliic.core.ide.StringSelection;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.core.util.SystemInfoRt;
import com.xliic.openapi.platform.scan.Preferences;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.ScanRunConfig;
import com.xliic.openapi.services.ScanService;
import com.xliic.openapi.services.TryItService;
import com.xliic.openapi.tryit.TryItResponseCallback;
import com.xliic.openapi.tryit.jcef.JCEFTryItFunction;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItRequest;
import com.xliic.openapi.tryit.payload.TryItResponse;

public abstract class JCEFScanFunction extends BrowserFunction implements Function<Object, JBCefJSQuery.Response> {

    @NotNull
    private final Project project;
    @NotNull
    private final ObjectMapper mapper = new ObjectMapper();

    public JCEFScanFunction(@NotNull Project project, @NotNull Browser browser, @NotNull String functionId) {
        super(browser, functionId);
        this.project = project;
    }

    @Override
    public Object function(Object[] arguments) {
        if (arguments != null && arguments.length == 1) {
            apply(arguments[0]);
        }
        return arguments;
    }

    public abstract PsiFile getPsiFile();

    @Override
    @SuppressWarnings("unchecked")
    public JBCefJSQuery.Response apply(Object message) {
        if (message instanceof String && !((String) message).isEmpty()) {
            try {
                Map<String, Object> props = mapper.readValue((String) message, Map.class);
                if (props.containsKey("command")) {
                    ScanService scanService = ScanService.getInstance(project);
                    String command = (String) props.get("command");
                    Map<String, Object> payload;
                    switch (command) {
                        case "saveEnv":
                            payload = (Map<String, Object>) props.get("payload");
                            String type = (String) payload.get("name");
                            Map<String, Object> env = (Map<String, Object>) payload.get("environment");
                            scanService.saveEnv(type, env);
                            break;
                        case "savePrefs":
                            payload = (Map<String, Object>) props.get("payload");
                            scanService.savePrefs(getPsiFile().getVirtualFile().getPath(), new Preferences(payload));
                            break;
                        case "runScan":
                            payload = (Map<String, Object>) props.get("payload");
                            Map<String, Object> payloadEnv = (Map<String, Object>) payload.get("env");
                            Map<String, String> configEnv = payloadEnv.entrySet().stream().collect(
                                    Collectors.toMap(Map.Entry::getKey, e -> String.valueOf(e.getValue())));
                            String rawOas = (String) payload.get("rawOas");
                            String config = mapper.writeValueAsString(payload.get("config"));
                            ScanRunConfig runConfig = new ScanRunConfig(config, configEnv, rawOas);
                            scanService.runScan(runConfig);
                            break;
                        case "sendCurlRequest":
                            String cmd = (String) props.get("payload");
                            if (SystemInfoRt.isWindows && cmd.contains("curl")) {
                                cmd = cmd.replace("curl", "curl.exe");
                            }
                            cmd = cmd.replace("'", "\"");
                            onSendCurlRequest(cmd);
                            break;
                        case "sendScanRequest":
                            payload = (Map<String, Object>) props.get("payload");
                            TryItRequest request = JCEFTryItFunction.getTryItRequest(payload);
                            TryItService tryItService = TryItService.getInstance(project);
                            tryItService.send(request, new TryItResponseCallback(project) {
                                @Override
                                public void showOperationResponse(@NotNull TryItResponse tryItResponse) {
                                    project.getMessageBus().syncPublisher(ScanListener.TOPIC).showOperationResponse(tryItResponse);
                                }

                                @Override
                                public void showOperationError(@NotNull TryItError payload) {
                                    project.getMessageBus().syncPublisher(ScanListener.TOPIC).showOperationError(payload);
                                }
                            });
                            break;
                        case "createSchema":
                            PsiFile psiFile = getPsiFile();
                            if (psiFile != null) {
                                JCEFTryItFunction.createSchema(project, psiFile, (String) message);
                            }
                            break;
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    private void onSendCurlRequest(@NotNull String cmd) {
        try {
            CopyPasteManager.getInstance().setContents(new StringSelection(cmd));
        } catch (Exception ignore) {
        }
    }
}
