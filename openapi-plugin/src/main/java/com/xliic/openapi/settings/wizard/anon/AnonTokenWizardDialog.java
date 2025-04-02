package com.xliic.openapi.settings.wizard.anon;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE_ANOND_TOKEN;
import static com.xliic.openapi.utils.Utils.getStatus;

import java.io.IOException;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.ui.DocumentAdapter;
import com.xliic.core.ui.DocumentEvent;
import com.xliic.core.ui.components.JTextArea;
import com.xliic.core.ui.components.JTextComponent;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.AuditAPIs;
import com.xliic.openapi.report.types.ResponseStatus;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.settings.items.Item;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.settings.wizard.WizardDialog;
import com.xliic.openapi.utils.NetUtils;

import okhttp3.Response;

public class AnonTokenWizardDialog extends WizardDialog {

    private static final String ERROR_MSG = "Unexpected error when trying to request token: ";
    private static final String PROMPT = "API token has been sent. If you don't get the mail within a couple minutes, " +
            "check your spam folder and that the address is correct. Paste the token above.";

    @Nullable
    private DocumentAdapter documentAdapter = null;

    public AnonTokenWizardDialog(@NotNull String email, @NotNull Project project, @NotNull WizardCallback callback) {
        super(project, PROMPT, callback);
        setTitle("42Crunch Security Audit Token");
        init();
        ProgressManager.getInstance().run(new Task.Backgroundable(project, "Requesting token") {
          @Override
          public void run(@NotNull ProgressIndicator progressIndicator) {
              try {
                  try (Response response = AuditAPIs.Sync.getTokenByEmail(email, false)) {
                      Node body = NetUtils.getBodyNode(response);
                      if (body == null || getStatus(body) != ResponseStatus.SUCCESS) {
                          showError("invalid response status");
                      }
                  }
              } catch (IOException e) {
                  showError(e.getMessage());
              }
          }
      });
    }

    @Override
    protected @NotNull JTextComponent getComponent(Composite parent, @Nullable GridData gridData) {
        JTextArea tokenTextArea = new JTextArea(parent);
        tokenTextArea.setEditable(true);
        documentAdapter = new DocumentAdapter() {
            @Override
            public void textChanged(@NotNull DocumentEvent e) {
                boolean valid = getTokenText().length() > 1;
                setOKActionEnabled(valid);
                Item.drawValidationStatus(component, valid ? null : "Please enter valid token from email");
            }
        };
        tokenTextArea.getDocument().addDocumentListener(documentAdapter);
        return tokenTextArea;
    }

    private String getTokenText() {
        return StringUtils.strip(component.getText(), " \n");
    }

    @Override
    protected void applySettings(@NotNull Set<String> keys) {
        keys.add(Settings.Audit.TOKEN);
        SettingsService.getInstance().setValue(Settings.Audit.TOKEN, getTokenText());
        SettingsService.getInstance().setValue(AUTH_TYPE, AUTH_TYPE_ANOND_TOKEN);
    }

    @Override
    protected @Nullable WizardDialog nextWizard() {
        return null;
    }

    private void showError(String error) {
        setOKActionEnabled(false);
        component.setEnabled(false);
        if (documentAdapter != null) {
            component.getDocument().removeDocumentListener(documentAdapter);
            documentAdapter = null;
        }
        promptComponent.setInvalid(ERROR_MSG + error);
    }
}
