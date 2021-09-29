package com.xliic.openapi.settings;

import com.xliic.openapi.OpenApiBundle;
import com.xliic.core.editor.event.DocumentAdapter;
import com.xliic.core.ide.PropertiesComponent;
import com.xliic.core.module.Module;
import com.xliic.core.options.Configurable;
import com.xliic.core.options.SearchableConfigurable;
import com.xliic.core.project.DefaultProjectFactory;
import com.xliic.core.ui.IdeBorderFactory;
import com.xliic.core.ui.components.JButton;
import com.xliic.core.ui.components.JComboBox;
import com.xliic.core.ui.components.JComponent;
import com.xliic.core.ui.components.JPanel;
import com.xliic.core.ui.components.JTextArea;
import com.xliic.core.ui.components.JTextField;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.services.PreviewService;
import org.apache.commons.lang.StringUtils;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.preference.StringFieldEditor;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.Nls;
import org.jetbrains.annotations.NotNull;

import javax.swing.event.DocumentEvent;
import java.util.Objects;

import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_SERVER_PORT;
import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_RENDERER_INDEX;
import static com.xliic.openapi.preview.PreviewUtils.isPortInRange;

public class AuditConfigurable extends SearchableConfigurable implements Configurable.NoScroll {

  private JPanel tokenPanel;
  private JTextArea tokenTextArea;
  private JButton cleanButton;
  private JComboBox<String> previewComboBox;
  private JTextField serverPortTextField;
  private JPanel previewPanel;
  private JPanel securityAuditPanel;
  private boolean isTokenCleaned = false;

  public AuditConfigurable() {
    super(null, DefaultProjectFactory.getInstance().getDefaultProject());
  }

  public AuditConfigurable(@NotNull Module module) {
    super(module, module.getProject());
  }
  
  @Override
  public void createFieldEditors() {
	  
	  Composite root = createComposite(getFieldEditorParent());
	  
      previewPanel = new JPanel("Preview", root, SWT.NONE);
		
  	String[][] entryNamesAndValues = {{"Swagger UI", "Swagger"}, {"ReDoc", "ReDoc"}};
	previewComboBox = new JComboBox<>(PreviewKeys.RENDERER, "Default Preview Renderer", entryNamesAndValues, previewPanel.getComposite());
	addField(previewComboBox);
		
	serverPortTextField = new JTextField(PreviewKeys.PORT, "Server Port", 50, 1, StringFieldEditor.VALIDATE_ON_KEY_STROKE, previewPanel.getComposite());
	addField(serverPortTextField);

	securityAuditPanel = new JPanel("Security Audit", root, SWT.NONE);
	tokenTextArea = new JTextArea(AuditKeys.TOKEN, "Security Audit Token", 50, 8, StringFieldEditor.VALIDATE_ON_KEY_STROKE, securityAuditPanel.getComposite());
	addField(tokenTextArea);
	
	cleanButton = createClearButton(securityAuditPanel.getComposite());

	Dialog.applyDialogFont(getFieldEditorParent());
	
	// Init

    previewPanel.setBorder(IdeBorderFactory.createTitledBorder(
            OpenApiBundle.message("openapi.settings.preview.settings")));
    securityAuditPanel.setBorder(IdeBorderFactory.createTitledBorder(
            OpenApiBundle.message("openapi.settings.security.audit.settings")));

    String tokenText = PropertiesComponent.getInstance().getValue(AuditKeys.TOKEN);
    tokenTextArea.setText(StringUtils.isEmpty(tokenText) ? StringUtils.EMPTY : tokenText);
    tokenTextArea.setEnabled(true);
    tokenTextArea.getDocument().addDocumentListener(new DocumentAdapter() {
      @Override
      protected void textChanged(@NotNull DocumentEvent e) {
        cleanButton.setEnabled(!StringUtils.isEmpty(getTokenText()));
        isTokenCleaned = false;
      }
    });
    cleanButton.setEnabled(!StringUtils.isEmpty(tokenText));
    cleanButton.addActionListener(e -> {
      tokenTextArea.setText(StringUtils.EMPTY);
      cleanButton.setEnabled(false);
      isTokenCleaned = true;
    });

    previewComboBox.insertItemAt(OpenApiBundle.message("openapi.settings.preview.item.0.settings"), 0);
    previewComboBox.insertItemAt(OpenApiBundle.message("openapi.settings.preview.item.1.settings"), 1);

    int rendererIndex = PropertiesComponent.getInstance().getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX);
    previewComboBox.setSelectedIndex(rendererIndex);

    int port = PropertiesComponent.getInstance().getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT);
    serverPortTextField.setText(String.valueOf(port));
  }

  private String getTokenText() {
    return StringUtils.strip(tokenTextArea.getText(), " \n");
  }

  @Nls
  @Override
  public String getDisplayName() {
    return OpenApiBundle.message("openapi.config.display.name");
  }

  @Override
  public String getHelpTopic() {
    return "audit_token";
  }

  @Override
  public JComponent createComponent() {
    return tokenPanel;
  }

  @Override
  public boolean isModified() {

    if (isTokenCleaned) {
      return true;
    }

    String configuredTokenText = getTokenText();
    String currentTokenText = PropertiesComponent.getInstance().getValue(AuditKeys.TOKEN);
    if (!Objects.equals(configuredTokenText, currentTokenText)) {
      return true;
    }

    int configuredIndex = previewComboBox.getSelectedIndex();
    int rendererIndex = PropertiesComponent.getInstance().getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX);
    if (rendererIndex != configuredIndex) {
      return true;
    }

    int port = PropertiesComponent.getInstance().getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT);
    try {
      int configuredPort = Integer.parseInt(serverPortTextField.getText());
      if (isPortInRange(configuredPort) && (port != configuredPort)) {
        return true;
      }
    }
    catch(NumberFormatException ignored) {
      return false;
    }

    return false;
  }

  @Override
  public void reset() {
    PropertiesComponent pc = PropertiesComponent.getInstance();
    tokenTextArea.setText(pc.getValue(AuditKeys.TOKEN));
    previewComboBox.setSelectedIndex(pc.getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX));
    serverPortTextField.setText(String.valueOf(pc.getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT)));
  }

  @Override
  public void apply() {

    if (isTokenCleaned) {
      PropertiesComponent.getInstance().unsetValue(AuditKeys.TOKEN);
    }
    else {
      String configuredTokenText = getTokenText();
      String tokenText = PropertiesComponent.getInstance().getValue(AuditKeys.TOKEN);
      if (!Objects.equals(configuredTokenText, tokenText)) {
        PropertiesComponent.getInstance().setValue(AuditKeys.TOKEN, configuredTokenText);
      }
    }

    int configuredIndex = previewComboBox.getSelectedIndex();
    int rendererIndex = PropertiesComponent.getInstance().getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX);
    if (rendererIndex != configuredIndex) {
      PropertiesComponent.getInstance().setValue(PreviewKeys.RENDERER, configuredIndex, DEFAULT_RENDERER_INDEX);
    }

    int port = PropertiesComponent.getInstance().getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT);
    try {
      int configuredPort = Integer.parseInt(serverPortTextField.getText());
      if (port != configuredPort) {
        PropertiesComponent.getInstance().setValue(PreviewKeys.PORT, configuredPort, DEFAULT_SERVER_PORT);
        PreviewService.getInstance().restartServer();
      }
    }
    catch(NumberFormatException ignored) {
    }
  }

  @NotNull
  @Override
  public String getId() {
    return "AuditToken";
  }
}

