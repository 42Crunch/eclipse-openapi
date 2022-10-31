package com.xliic.openapi.report.jcef;

import static org.apache.commons.lang.StringUtils.isEmpty;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.util.Map;
import java.util.function.Function;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.ide.BrowserUtil;
import com.xliic.core.ide.CopyPasteManager;
import com.xliic.core.ide.StringSelection;
import com.xliic.core.project.Project;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;

public class JCEFPostMessageListener extends BrowserFunction implements Function<Object, JBCefJSQuery.Response> {

    public static final String HADLER_ID = "injectedPostMessageHandler";

    private final Project project;
    private final ObjectMapper mapper;

    public JCEFPostMessageListener(@NotNull Project project, @NotNull Browser browser) {
        super(browser, HADLER_ID);
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

    @Override
    @SuppressWarnings("unchecked")
    public JBCefJSQuery.Response apply(Object message) {
        if (message instanceof String) {
            try {
                Map<String, String> props = mapper.readValue((String) message, Map.class);
                if (props.containsKey("command")) {
                    String command = props.get("command");
                    switch (command) {
                    case "copyIssueId":
                        String id = props.get("id");
                        if (!isEmpty(id)) {
                            onCopyIssueId(id);
                        }
                        break;
                    case "goToLine":
                        String uri = props.get("uri");
                        String pointer = props.get("pointer");
                        if (!isEmpty(uri) && (pointer != null)) {
                            onGoToLine(uri, pointer);
                        }
                        break;
                    case "openLink":
                        String href = props.get("href");
                        if (!isEmpty(href)) {
                            BrowserUtil.browse(href);
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

    private void onCopyIssueId(@NotNull String id) {
        try {
            CopyPasteManager.getInstance().setContents(new StringSelection(id));
        } catch (Exception ignore) {
        }
    }

    private void onGoToLine(@NotNull String uri, @NotNull String pointer) {
        String path = URI.create(uri).getPath(); // Will be decoded internally
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(path));
        if (file != null) {
            ASTService astService = ASTService.getInstance(project);
            Node root = astService.getRootNode(file);
            if (root != null) {
                Node target = root.find(pointer);
                if (target != null) {
                    ApplicationManager.getApplication().invokeLater(() -> {
                        Range range = EclipseUtil.getSelectionRange(target);
                        new OpenFileDescriptor(project, file, range.getOffset(), range.getLength()).navigate(true);
                    });
                }
            }
        }
    }
}
