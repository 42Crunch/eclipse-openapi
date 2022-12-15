package com.xliic.openapi.settings;

import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_RENDERER_INDEX;
import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_SERVER_PORT;

import java.net.URISyntaxException;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import javax.swing.event.DocumentEvent;

import org.apache.commons.lang.StringUtils;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.jetbrains.annotations.Nls;
import org.jetbrains.annotations.NotNull;

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
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.preview.PreviewCallback;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.preview.PreviewUtils;
import com.xliic.openapi.services.PreviewService;
import com.xliic.openapi.settings.Settings.Platform.Dictionary.PreAudit;
import com.xliic.openapi.settings.table.ApprovedHostsEditor;
import com.xliic.openapi.settings.table.InsecureSslHostsEditor;
import com.xliic.openapi.settings.table.host.HostNameTableEditor;
import com.xliic.openapi.topic.SettingsListener;

public class SettingsConfigurable extends SearchableConfigurable implements Configurable.NoScroll {

    private JPanel tokenPanel;
    private JTextArea tokenTextArea;
    private JButton cleanButton;
    private JComboBox<String> previewComboBox;
    private JTextField serverPortTextField;
    private JPanel previewPanel;
    private JPanel securityAuditPanel;
    private JPanel hostsPanel;
    private JPanel sslHostsPanel;
    private JPanel sortPanel;
    private JCheckBox sortABC;

    private JTextField platformURLField;
    private JTextField apiKeyField;
    private JPanel platformPanel;
    private JPanel dictPanel;
    private JComboBox<String> preAuditComboBox;
    private boolean isTokenCleaned = false;
    private HostNameTableEditor hostsTableModelEditor;
    private HostNameTableEditor sslHostsTableModelEditor;
    private final List<String> keysToNotify = new LinkedList<>();

    public SettingsConfigurable() {
        super(null, DefaultProjectFactory.getInstance().getDefaultProject());

    }

    public SettingsConfigurable(@NotNull Module module) {
        super(module, module.getProject());
    }

    @Override
    protected Control createContents(Composite parent) {

        GridLayout gridLayout = new GridLayout();
        gridLayout.numColumns = 1;
        parent.setLayout(gridLayout);
        parent.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

        platformPanel = new JPanel("42Crunch Platform Credentials", parent, SWT.NONE, 2);

        new Label(platformPanel.getComposite(), SWT.NULL).setText("Platform URL");
        platformURLField = new JTextField(platformPanel);
        String platformURL = settings.getValue(Settings.PLATFORM);
        platformURLField.setText(StringUtils.isEmpty(platformURL) ? StringUtils.EMPTY : platformURL);
        platformURLField.addValidationListener(() -> {
            if (isPlatformSettingsEmpty()) {
                apiKeyField.setValid();
                platformURLField.setValid();
                setValid(true);
            } else if (PlatformConnection.isURLValid(platformURLField.getText())) {
                platformURLField.setValid();
                setValid(true);
            } else {
                setValid(false);
                platformURLField.setInvalid("Must be a valid URL");
            }
        });

        new Label(platformPanel.getComposite(), SWT.NULL).setText("API Token");
        apiKeyField = new JTextField(platformPanel);
        apiKeyField.setEchoChar();
        apiKeyField.setText(getPlatformAPIKey());
        apiKeyField.addValidationListener(() -> {
            if (isPlatformSettingsEmpty()) {
                apiKeyField.setValid();
                platformURLField.setValid();
                setValid(true);
            } else if (PlatformConnection.isAPIKeyValid(apiKeyField.getText())) {
                apiKeyField.setValid();
                setValid(true);
            } else {
                setValid(false);
                apiKeyField.setInvalid("Must be a valid API Token");
            }
        });

        dictPanel = new JPanel("Data Dictionary", parent, SWT.NONE, 2);
        new Label(dictPanel.getComposite(), SWT.NULL).setText("Update document to match Data Dictionary definitions before runing Security Audit");
        preAuditComboBox = new JComboBox<>(dictPanel);
        preAuditComboBox.insertItemAt(PreAudit.ASK, 0);
        preAuditComboBox.insertItemAt(PreAudit.ALWAYS, 1);
        preAuditComboBox.insertItemAt(PreAudit.NEVER, 2);
        preAuditComboBox.setSelectedIndex(PreAudit.OPTIONS.indexOf(settings.getValue(PreAudit.KEY)));

        hostsPanel = new JPanel("Approved Hostnames", parent, SWT.NONE, 2);
        hostsTableModelEditor = new ApprovedHostsEditor(hostsPanel.getComposite());

        sslHostsPanel = new JPanel("Insecure Ssl Hostnames", parent, SWT.NONE, 2);
        sslHostsTableModelEditor = new InsecureSslHostsEditor(sslHostsPanel.getComposite());

        sortPanel = new JPanel("Sort Outlines", parent, SWT.NONE, 1);
        sortABC = new JCheckBox("Alphabetically sort contents of OpenAPI explorer outlines", sortPanel);

        previewPanel = new JPanel("Preview", parent, SWT.NONE, 2);
        new Label(previewPanel.getComposite(), SWT.NULL).setText("Default Preview Renderer");
        previewComboBox = new JComboBox<>(previewPanel);
        new Label(previewPanel.getComposite(), SWT.NULL).setText("Server Port");
        serverPortTextField = new JTextField(previewPanel);
        serverPortTextField.addValidationListener(() -> {
            if (PreviewUtils.isPortValid(serverPortTextField.getText())) {
                serverPortTextField.setValid();
                setValid(true);
            } else {
                setValid(false);
                serverPortTextField.setInvalid("Must be a valid port number");
            }
        });

        securityAuditPanel = new JPanel("Security Audit", parent, SWT.NONE, 3);
        new Label(securityAuditPanel.getComposite(), SWT.NULL).setText("Security Audit Token");
        tokenTextArea = new JTextArea(securityAuditPanel);

        cleanButton = new JButton("Clear", SWT.PUSH, securityAuditPanel);
        GridData gd = new GridData(GridData.HORIZONTAL_ALIGN_FILL | GridData.VERTICAL_ALIGN_BEGINNING);
        gd.widthHint = 90;
        cleanButton.setLayoutData(gd);

        String tokenText = settings.getValue(Settings.TOKEN);
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

        int rendererIndex = settings.getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX);
        previewComboBox.setSelectedIndex(rendererIndex);

        int port = settings.getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT);
        serverPortTextField.setText(String.valueOf(port));

        sortABC.setSelected(settings.getBoolean(Settings.ABC_SORT));
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
        return null;
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
        if (preAuditComboBox.getSelectedIndex() != PreAudit.OPTIONS.indexOf(settings.getValue(PreAudit.KEY))) {
            return true;
        }
        if (hostsTableModelEditor.isDirty() || sslHostsTableModelEditor.isDirty()) {
            return true;
        }
        if (isSortABCModified()) {
            return true;
        }

        String configuredTokenText = getTokenText();
        String currentTokenText = settings.getValue(Settings.TOKEN);
        if (!Objects.equals(configuredTokenText, currentTokenText)) {
            return true;
        }

        int configuredIndex = previewComboBox.getSelectedIndex();
        int rendererIndex = settings.getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX);
        if (rendererIndex != configuredIndex) {
            return true;
        }

        int port = settings.getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT);
        try {
            int configuredPort = Integer.parseInt(serverPortTextField.getText());
            if (PreviewUtils.isPortValid(configuredPort) && (port != configuredPort)) {
                return true;
            }
        } catch (NumberFormatException ignored) {
            return false;
        }

        if (isPlatformSettingsReset()) {
            return true;
        }

        String platformURL = settings.getValue(Settings.PLATFORM);
        try {
            String configuredPlatformURL = platformURLField.getText();
            if (StringUtils.isEmpty(configuredPlatformURL)) {
                return false;
            } else {
                OpenApiUtils.getDomainName(configuredPlatformURL);
            }
            if (!Objects.equals(platformURL, configuredPlatformURL)) {
                return true;
            }
        } catch (URISyntaxException ignored) {
            return false;
        }

        String platformAPIKey = getPlatformAPIKey();
        String configuredPlatformAPIKey = apiKeyField.getText();
        if (StringUtils.isEmpty(configuredPlatformAPIKey)) {
            return false;
        } else if (PlatformConnection.isAPIKeyValid(configuredPlatformAPIKey) && !Objects.equals(platformAPIKey, configuredPlatformAPIKey)) {
            return true;
        }

        return false;
    }

    @Override
    public void reset() {
        PropertiesComponent pc = settings;
        tokenTextArea.setText(pc.getValue(Settings.TOKEN));
        previewComboBox.setSelectedIndex(pc.getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX));
        serverPortTextField.setText(String.valueOf(pc.getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT)));
        hostsTableModelEditor.reset();
        sslHostsTableModelEditor.reset();
        sortABC.setSelected(settings.getBoolean(Settings.ABC_SORT));
        platformURLField.setText(settings.getValue(Settings.PLATFORM));
        apiKeyField.setText(getPlatformAPIKey());
        preAuditComboBox.setSelectedIndex(PreAudit.OPTIONS.indexOf(settings.getValue(PreAudit.KEY)));
    }

    @Override
    public void apply() {

        if (isTokenCleaned) {
            settings.unsetValue(Settings.TOKEN);
        } else {
            String configuredTokenText = getTokenText();
            String tokenText = settings.getValue(Settings.TOKEN);
            if (!Objects.equals(configuredTokenText, tokenText)) {
                settings.setValue(Settings.TOKEN, configuredTokenText);
            }
        }

        int configuredIndex = previewComboBox.getSelectedIndex();
        int rendererIndex = settings.getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX);
        if (rendererIndex != configuredIndex) {
            settings.setValue(PreviewKeys.RENDERER, configuredIndex, DEFAULT_RENDERER_INDEX);
        }

        int port = settings.getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT);
        try {
            int configuredPort = Integer.parseInt(serverPortTextField.getText());
            if (port != configuredPort) {
                settings.setValue(PreviewKeys.PORT, configuredPort, DEFAULT_SERVER_PORT);
                PreviewService previewService = PreviewService.getInstance();
                if (previewService.isInitComplete()) {
                    previewService.start(new PreviewCallback());
                }
            }
        } catch (NumberFormatException ignored) {
        }
        hostsTableModelEditor.applyChanges();
        sslHostsTableModelEditor.applyChanges();
        if (isSortABCModified()) {
            settings.setValue(Settings.ABC_SORT, sortABC.isSelected());
            notify(Settings.ABC_SORT);
        }

        if (isPlatformSettingsReset()) {
            settings.setValue(Settings.PLATFORM, "");
            notify(Settings.PLATFORM);
            PlatformConnection.setPlatformAPIKey(null);
            notify(Settings.API_KEY);
        } else {
            String platformURL = settings.getValue(Settings.PLATFORM);
            try {
                String configuredPlatformURL = platformURLField.getText();
                if (!StringUtils.isEmpty(configuredPlatformURL)) {
                    OpenApiUtils.getDomainName(configuredPlatformURL);
                    if (!Objects.equals(platformURL, configuredPlatformURL)) {
                        settings.setValue(Settings.PLATFORM, platformURLField.getText());
                        notify(Settings.PLATFORM);
                    }
                }
            } catch (URISyntaxException ignored) {
            }

            String platformAPIKey = getPlatformAPIKey();
            String configuredPlatformAPIKey = apiKeyField.getText();
            if (!StringUtils.isEmpty(configuredPlatformAPIKey) && PlatformConnection.isAPIKeyValid(configuredPlatformAPIKey)
                    && !Objects.equals(platformAPIKey, configuredPlatformAPIKey)) {
                PlatformConnection.setPlatformAPIKey(configuredPlatformAPIKey);
                notify(Settings.API_KEY);
            }
        }
        if (preAuditComboBox.getSelectedIndex() != PreAudit.OPTIONS.indexOf(settings.getValue(PreAudit.KEY))) {
            settings.setValue(PreAudit.KEY, PreAudit.OPTIONS.get(preAuditComboBox.getSelectedIndex()));
        }
        sendPropertiesUpdatedEvent();
    }

    public void pointToServerPortComponent() {
        serverPortTextField.forceFocus();
    }

    private boolean isSortABCModified() {
        boolean configuredSortABC = settings.getBoolean(Settings.ABC_SORT);
        return configuredSortABC != sortABC.isSelected();
    }

    private void notify(String key) {
        keysToNotify.add(key);
    }

    private void sendPropertiesUpdatedEvent() {
        ProjectManager projectManager = ProjectManager.getInstanceIfCreated();
        if (projectManager != null) {
            Project[] projects = projectManager.getOpenProjects();
            Set<String> keysSet = new HashSet<>(keysToNotify);
            if (keysSet.contains(Settings.PLATFORM) && keysSet.contains(Settings.API_KEY)) {
                keysToNotify.remove(Settings.API_KEY);
                keysToNotify.remove(Settings.PLATFORM);
                keysToNotify.add(Settings.PLATFORM_ALL);
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

    private boolean isPlatformSettingsEmpty() {
        return StringUtils.isEmpty(platformURLField.getText()) && StringUtils.isEmpty(apiKeyField.getText());
    }

    private boolean isPlatformSettingsReset() {
        if (isPlatformSettingsEmpty()) {
            String platformURL = settings.getValue(Settings.PLATFORM);
            return StringUtils.isNotEmpty(platformURL) && StringUtils.isNotEmpty(getPlatformAPIKey());
        }
        return false;
    }

    private String getPlatformAPIKey() {
        String password = PlatformConnection.getPlatformAPIKey();
        return StringUtils.isEmpty(password) ? StringUtils.EMPTY : password;
    }
}
