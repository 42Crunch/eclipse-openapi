package com.xliic.openapi.signup.jcef.messages;

import static com.xliic.openapi.utils.Utils.getStatus;

import java.io.IOException;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.AuditAPIs;
import com.xliic.openapi.report.types.ResponseStatus;
import com.xliic.openapi.signup.SignUpListener;
import com.xliic.openapi.utils.NetUtils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

import okhttp3.Response;

public class RequestAnondTokenByEmail extends WebAppProduce {

    private static final String UNEXPECTED_ERROR = "Unexpected error when trying to request token";

    @NotNull
    protected final Project project;

    public RequestAnondTokenByEmail(@NotNull Project project) {
        super("requestAnondTokenByEmail", false, false);
        this.project = project;
    }

    @Override @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            String email = (String) map.get("email");
            if (email != null) {
                try {
                    boolean optIn = (boolean) map.get("optIn");
                    try (Response response = AuditAPIs.Sync.getTokenByEmail(email, optIn)) {
                        Node body = NetUtils.getBodyNode(response);
                        if (body != null && getStatus(body) == ResponseStatus.SUCCESS) {
                            ApplicationManager.getApplication().invokeLater(() -> notify(true, ""));
                        } else {
                            ApplicationManager.getApplication().invokeLater(() -> notify(false, UNEXPECTED_ERROR));
                        }
                    }
                } catch (IOException e) {
                    ApplicationManager.getApplication().invokeLater(() -> notify(false, e.toString()));
                }
            }
        }
    }

    protected void notify(boolean success, @NotNull String message) {
        project.getMessageBus().syncPublisher(SignUpListener.TOPIC).showAnondTokenResponse(success, message);
    }
}
