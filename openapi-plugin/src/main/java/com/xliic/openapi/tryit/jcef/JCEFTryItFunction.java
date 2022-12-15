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
import com.xliic.openapi.PanelBrowser;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;
import com.xliic.openapi.services.TryItService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.tryit.TryItFixManager;
import com.xliic.openapi.tryit.TryItResponseCallback;
import com.xliic.openapi.tryit.payload.TryItRequest;

public abstract class JCEFTryItFunction extends BrowserFunction implements Function<Object, JBCefJSQuery.Response> {

    private final Project project;
    private final ObjectMapper mapper;

    public JCEFTryItFunction(@NotNull Project project, @NotNull Browser browser) {
        super(browser, PanelBrowser.FUNCTION_ID);
        this.project = project;
        mapper = new ObjectMapper();
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
                                Node node = OpenApiUtils.getJsonAST((String) message);
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
                            break;
                        case "sendRequest":
                            Map<String, Object> config = (Map<String, Object>) payload.get("config");
                            Map<String, Object> https =  (Map<String, Object>) config.get("https");
                            String url = (String) payload.get("url");
                            String method = (String) payload.get("method");
                            Map<String, String> headers = (Map<String, String>) payload.get("headers");
                            boolean rejectUnauthorized = (Boolean) https.get("rejectUnauthorized");
                            Object body = payload.get("body");
                            TryItService tryItService = TryItService.getInstance(project);
                            TryItRequest request = TryItRequest.getInstance(url, method, headers, body, rejectUnauthorized);
                            tryItService.send(request, new TryItResponseCallback(project));
                            break;
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }
}
