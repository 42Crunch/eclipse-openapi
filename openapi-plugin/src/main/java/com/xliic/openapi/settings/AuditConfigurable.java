package com.xliic.openapi.settings;

import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.module.Module;
import com.xliic.core.options.Configurable;
import com.xliic.core.options.SearchableConfigurable;
import com.xliic.core.project.DefaultProjectFactory;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectManager;
import com.xliic.core.ui.DocumentAdapter;
import com.xliic.core.ui.components.JButton;
import com.xliic.core.ui.components.JCheckBox;
import com.xliic.core.ui.components.JComboBox;
import com.xliic.core.ui.components.JComponent;
import com.xliic.core.ui.components.JPanel;
import com.xliic.core.ui.components.JTextArea;
import com.xliic.core.ui.components.JTextField;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.services.PreviewService;
import com.xliic.openapi.topic.SettingsListener;

import org.apache.commons.lang.StringUtils;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.jetbrains.annotations.Nls;
import org.jetbrains.annotations.NotNull;

import java.net.URISyntaxException;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import javax.swing.event.DocumentEvent;

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
  private JPanel hostsPanel;
  private JPanel sortPanel;
  private JCheckBox sortABC;
  
  private JTextField platformURLField;
  private JTextField apiKeyField;
  private JPanel platformPanel;
  
  private boolean isTokenCleaned = false;
  private HostNameTableEditor hostsTableModelEditor;
  private final List<String> keysToNotify = new LinkedList<>();
  
  public AuditConfigurable() {
    super(null, DefaultProjectFactory.getInstance().getDefaultProject());
  }

  public AuditConfigurable(@NotNull Module module) {
    super(module, module.getProject());
  }
  
  @Override
  protected Control createContents(Composite parent) {
	  
	  GridLayout gridLayout = new GridLayout();
      gridLayout.numColumns = 1;
      parent.setLayout(gridLayout);
      parent.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
      
      platformPanel =  new JPanel("42Crunch Platform Credentials", parent, SWT.NONE, 2);

      new Label(platformPanel.getComposite(), SWT.NULL).setText("Platform URL");
      platformURLField = new JTextField(platformPanel);
      String platformURL = PropertiesComponent.getInstance().getValue(SettingsKeys.PLATFORM);
      platformURLField.setText(StringUtils.isEmpty(platformURL) ? StringUtils.EMPTY : platformURL);
      
      new Label(platformPanel.getComposite(), SWT.NULL).setText("API Key");
      apiKeyField = new JTextField(platformPanel);
      apiKeyField.setEchoChar();
      apiKeyField.setText(getPlatformAPIKey());

      hostsPanel = new JPanel("Approved Hostnames", parent, SWT.NONE, 2);
      hostsTableModelEditor = new HostNameTableEditor(hostsPanel.getComposite());
	
      sortPanel = new JPanel("Sort Outlines", parent, SWT.NONE, 1);
      sortABC = new JCheckBox("Alphabetically sort contents of OpenAPI explorer outlines", sortPanel);

      previewPanel = new JPanel("Preview", parent, SWT.NONE, 2);
      new Label(previewPanel.getComposite(), SWT.NULL).setText("Default Preview Renderer");
  	  previewComboBox = new JComboBox<>(previewPanel);     
      new Label(previewPanel.getComposite(), SWT.NULL).setText("Server Port");
      serverPortTextField = new JTextField(previewPanel);
      
      securityAuditPanel = new JPanel("Security Audit", parent, SWT.NONE, 3);
      new Label(securityAuditPanel.getComposite(), SWT.NULL).setText("Security Audit Token");
      tokenTextArea = new JTextArea(securityAuditPanel);
      
      cleanButton = new JButton("Clear", SWT.PUSH, securityAuditPanel);
      GridData gd = new GridData(GridData.HORIZONTAL_ALIGN_FILL | GridData.VERTICAL_ALIGN_BEGINNING);
      gd.widthHint = 90;
      cleanButton.setLayoutData(gd);
	
      String tokenText = PropertiesComponent.getInstance().getValue(SettingsKeys.TOKEN);
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
    
      sortABC.setSelected(PropertiesComponent.getInstance().getBoolean(SettingsKeys.ABC_SORT));
      return parent;
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
    if (hostsTableModelEditor.isDirty()) {
        return true;
    }
    if (isSortABCModified()) {
        return true;
    }
    
    String configuredTokenText = getTokenText();
    String currentTokenText = PropertiesComponent.getInstance().getValue(SettingsKeys.TOKEN);
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
    
    if (isAllPlatformSettingsEmpty()) {
        return true;
      }

      String platformURL = PropertiesComponent.getInstance().getValue(SettingsKeys.PLATFORM);
      try {
        String configuredPlatformURL = platformURLField.getText();
        if (StringUtils.isEmpty(configuredPlatformURL)) {
          return false;
        }
        else {
          OpenApiUtils.getDomainName(configuredPlatformURL);
        }
        if (!Objects.equals(platformURL, configuredPlatformURL)) {
          return true;
        }
      }
      catch (URISyntaxException ignored) {
        return false;
      }

      String platformAPIKey = getPlatformAPIKey();
      String configuredPlatformAPIKey = apiKeyField.getText();
      if (StringUtils.isEmpty(configuredPlatformAPIKey)) {
        return false;
      }
      else if (PlatformConnection.isAPIKeyValid(configuredPlatformAPIKey) &&
              !Objects.equals(platformAPIKey, configuredPlatformAPIKey)) {
        return true;
      }

    return false;
  }

  @Override
  public void reset() {
    PropertiesComponent pc = PropertiesComponent.getInstance();
    tokenTextArea.setText(pc.getValue(SettingsKeys.TOKEN));
    previewComboBox.setSelectedIndex(pc.getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX));
    serverPortTextField.setText(String.valueOf(pc.getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT)));
    hostsTableModelEditor.reset();
    sortABC.setSelected(PropertiesComponent.getInstance().getBoolean(SettingsKeys.ABC_SORT));
    platformURLField.setText(PropertiesComponent.getInstance().getValue(SettingsKeys.PLATFORM));
    apiKeyField.setText(getPlatformAPIKey());
  }

  @Override
  public void apply() {

    if (isTokenCleaned) {
      PropertiesComponent.getInstance().unsetValue(SettingsKeys.TOKEN);
    }
    else {
      String configuredTokenText = getTokenText();
      String tokenText = PropertiesComponent.getInstance().getValue(SettingsKeys.TOKEN);
      if (!Objects.equals(configuredTokenText, tokenText)) {
        PropertiesComponent.getInstance().setValue(SettingsKeys.TOKEN, configuredTokenText);
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
    hostsTableModelEditor.applyChanges();
    if (isSortABCModified()) {
        PropertiesComponent.getInstance().setValue(SettingsKeys.ABC_SORT, sortABC.isSelected());
        notify(SettingsKeys.ABC_SORT);
    }
    
    if (isAllPlatformSettingsEmpty()) {
        PropertiesComponent.getInstance().setValue(SettingsKeys.PLATFORM, "");
        notify(SettingsKeys.PLATFORM);
        PlatformConnection.setPlatformAPIKey(null);
        notify(SettingsKeys.API_KEY);
      }
      else {
        String platformURL = PropertiesComponent.getInstance().getValue(SettingsKeys.PLATFORM);
        try {
          String configuredPlatformURL = platformURLField.getText();
          if (!StringUtils.isEmpty(configuredPlatformURL)) {
            OpenApiUtils.getDomainName(configuredPlatformURL);
            if (!Objects.equals(platformURL, configuredPlatformURL)) {
              PropertiesComponent.getInstance().setValue(SettingsKeys.PLATFORM, platformURLField.getText());
              notify(SettingsKeys.PLATFORM);
            }
          }
        }
        catch (URISyntaxException ignored) {}

        String platformAPIKey = getPlatformAPIKey();
        String configuredPlatformAPIKey = apiKeyField.getText();
        if (!StringUtils.isEmpty(configuredPlatformAPIKey) &&
                PlatformConnection.isAPIKeyValid(configuredPlatformAPIKey) &&
                !Objects.equals(platformAPIKey, configuredPlatformAPIKey)) {
          PlatformConnection.setPlatformAPIKey(configuredPlatformAPIKey);
          notify(SettingsKeys.API_KEY);
        }
      }

      sendPropertiesUpdatedEvent();
  }
  
  private boolean isSortABCModified() {
      boolean configuredSortABC = PropertiesComponent.getInstance().getBoolean(SettingsKeys.ABC_SORT);
      return configuredSortABC != sortABC.isSelected();
  }
  
  private void notify(String key) {
      keysToNotify.add(key);
  }
  
  private void sendPropertiesUpdatedEvent() {
    ProjectManager projectManager = ProjectManager.getInstanceIfCreated();
    if (projectManager != null) {
      Project [] projects = projectManager.getOpenProjects();
      Set<String> keysSet = new HashSet<>(keysToNotify);
      if (keysSet.contains(SettingsKeys.PLATFORM) && keysSet.contains(SettingsKeys.API_KEY)) {
        keysToNotify.remove(SettingsKeys.API_KEY);
        keysToNotify.remove(SettingsKeys.PLATFORM);
        keysToNotify.add(SettingsKeys.PLATFORM_ALL);
      }
      for (String key : keysToNotify) {
        for (Project project : projects) {
          if (!project.isDisposed()) {
            project.getMessageBus().syncPublisher(SettingsListener.TOPIC).propertiesUpdated(key);
          }
        }
      }
      keysToNotify.clear();
    }
  }
  
  private boolean isAllPlatformSettingsEmpty() {
    String platformURL = PropertiesComponent.getInstance().getValue(SettingsKeys.PLATFORM);
    String platformAPIKey = getPlatformAPIKey();
    String configuredPlatformURL = platformURLField.getText();
    String configuredPlatformAPIKey = apiKeyField.getText();
    return StringUtils.isEmpty(configuredPlatformURL) && StringUtils.isEmpty(configuredPlatformAPIKey) &&
            !StringUtils.isEmpty(platformURL) && !StringUtils.isEmpty(platformAPIKey);
  }

  private String getPlatformAPIKey() {
    String password = PlatformConnection.getPlatformAPIKey();
    return StringUtils.isEmpty(password) ? StringUtils.EMPTY : password;
  }

  @NotNull
  @Override
  public String getId() {
    return "AuditToken";
  }
}

