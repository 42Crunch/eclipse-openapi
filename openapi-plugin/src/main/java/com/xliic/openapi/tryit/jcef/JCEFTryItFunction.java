package com.xliic.openapi.tryit.jcef;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.fileEditor.TextEditor;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.Preferences;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;
import com.xliic.openapi.services.ScanService;
import com.xliic.openapi.services.TryItService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.tryit.TryItFixManager;
import com.xliic.openapi.tryit.TryItResponseCallback;
import com.xliic.openapi.tryit.payload.TryItRequest;

public abstract class JCEFTryItFunction extends BrowserFunction implements Function<Object, JBCefJSQuery.Response> {

    @NotNull
    private final Project project;
    @NotNull
    private final ObjectMapper mapper = new ObjectMapper();

    public JCEFTryItFunction(@NotNull Project project, @NotNull Browser browser, @NotNull String functionId) {
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
                    String command = (String) props.get("command");
                    Map<String, Object> payload = (Map<String, Object>) props.get("payload");
                    switch (command) {
                        case "saveConfig":
                            List<String> hostnames = (List<String>) payload.get("insecureSslHostnames");
                            PropertiesComponent settings = PropertiesComponent.getInstance();
                            settings.setList(Settings.TryIt.INSECURE_SSL_HOSTNAMES, hostnames);
                            break;
                        case "createSchema":
                            PsiFile psiFile = getPsiFile();
                            if (psiFile != null) {
                                createSchema(project, psiFile, (String) message);
                            }
                            break;
                        case "sendRequest":
                            TryItRequest request = getTryItRequest(payload);
                            TryItService tryItService = TryItService.getInstance(project);
                            tryItService.send(request, new TryItResponseCallback(project));
                            break;
                        case "savePrefs":
                            payload = (Map<String, Object>) props.get("payload");
                            ScanService scanService = ScanService.getInstance(project);
                            scanService.savePrefs(getPsiFile().getVirtualFile().getPath(), new Preferences(payload));
                            break;
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    @SuppressWarnings("unchecked")
    public static TryItRequest getTryItRequest(@NotNull Map<String, Object> payload) {
        Map<String, Object> config = (Map<String, Object>) payload.get("config");
        Map<String, Object> https =  (Map<String, Object>) config.get("https");
        String url = (String) payload.get("url");
        String method = (String) payload.get("method");
        Map<String, String> headers = (Map<String, String>) payload.get("headers");
        boolean rejectUnauthorized = (Boolean) https.get("rejectUnauthorized");
        Object body = payload.get("body");
        return TryItRequest.getInstance(url, method, headers, body, rejectUnauthorized);
    }

    public static void createSchema(@NotNull Project project, @NotNull PsiFile psiFile,@NotNull String message) {
        Node node = OpenApiUtils.getJsonAST(message);
        if (node != null) {
            Node genFrom = node.getChild("payload");
            if (genFrom != null) {
                TryItFixManager provider = new TryItFixManager(psiFile, genFrom);
                ApplicationManager.getApplication().invokeLater(() -> {
                    if (provider.openDialog()) {
                        VirtualFile file = psiFile.getVirtualFile();
                        FileEditor [] editors = FileEditorManager.getInstance(project).getEditors(file);
                        if (editors.length > 0) {
                            Editor editor = ((TextEditor) editors[0]).getEditor();
                            DocumentUpdater documentUpdater = new DocumentUpdater(editor, psiFile);
                            WriteCommandAction.runWriteCommandAction(project, () -> {
                                    documentUpdater.process(provider.getFixItems());
                                    int offset = documentUpdater.getMoveToOffset();
                                    new OpenFileDescriptor(project, file, offset).navigate(true);
                                }
                            );
                        }
                    }
                });
            }
        }
    }
}
