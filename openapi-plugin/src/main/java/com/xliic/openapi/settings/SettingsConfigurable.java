package com.xliic.openapi.settings;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.jetbrains.annotations.Nls;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.module.Module;
import com.xliic.core.options.Configurable;
import com.xliic.core.options.SearchableConfigurable;
import com.xliic.core.project.DefaultProjectFactory;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectManager;
import com.xliic.core.ui.DocumentAdapter;
import com.xliic.core.ui.DocumentEvent;
import com.xliic.core.ui.components.JButton;
import com.xliic.core.ui.components.JCheckBox;
import com.xliic.core.ui.components.JComboBox;
import com.xliic.core.ui.components.JComponent;
import com.xliic.core.ui.components.JPanel;
import com.xliic.core.ui.components.JTextArea;
import com.xliic.core.ui.components.JTextField;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.settings.Settings.Audit;
import com.xliic.openapi.settings.Settings.ExtRef;
import com.xliic.openapi.settings.Settings.InlinedAnnotations;
import com.xliic.openapi.settings.Settings.Outline;
import com.xliic.openapi.settings.Settings.Platform.Dictionary.PreAudit;
import com.xliic.openapi.settings.Settings.Preview;
import com.xliic.openapi.settings.Settings.SnakeYamlSettings;
import com.xliic.openapi.settings.Settings.TryIt;
import com.xliic.openapi.settings.items.Item;
import com.xliic.openapi.settings.items.ItemCheckBox;
import com.xliic.openapi.settings.items.ItemComboBox;
import com.xliic.openapi.settings.items.ItemHostsTable;
import com.xliic.openapi.settings.items.ItemIntegerField;
import com.xliic.openapi.settings.items.ItemPort;
import com.xliic.openapi.settings.items.ItemTextArea;
import com.xliic.openapi.settings.table.ApprovedHostsEditor;
import com.xliic.openapi.settings.table.InsecureSslHostsEditor;
import com.xliic.openapi.settings.table.host.HostNameTableEditor;
import com.xliic.openapi.topic.SettingsListener;

public class SettingsConfigurable extends SearchableConfigurable implements Configurable.NoScroll {

    // 42Crunch Platform Credentials
    private JPanel platformPanel;

    // Data dictionary
    private JPanel dictPanel;
    private JComboBox<String> dictPreAuditComboBox;

    // Insecure SSL hostnames
    private JPanel insecureSslHostsPanel;
    private HostNameTableEditor insecureSslHostsEditor;

    // Approved hostnames
    private JPanel approvedHostsPanel;
    private HostNameTableEditor approvedHostsEditor;

    // Sort outlines
    private JPanel sortPanel;
    private JCheckBox sortCheckbox;

    // Inlined annotations
    private JPanel inlinedPanel;
    private JCheckBox inlinedCheckbox;

    // Preview
    private JPanel previewPanel;
    private JComboBox<String> previewComboBox;
    private JTextField previewServerPortTextField;

    // Security audit
    private JPanel auditPanel;
    private JPanel auditTokenPanel;
    private JTextArea auditTokenTextArea;
    private JButton auditTokenCleanButton;
    private JPanel parserSettingsPanel;
    private JTextField codePointLimitTextField;
    
    private final List<Item> items = new LinkedList<>();

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

        platformPanel = new JPanel("42Crunch Platform", parent, SWT.NONE, 2);
        Label infoIco = new Label(platformPanel.getComposite(), SWT.NULL);
        infoIco.setImage(CONFIG_IMG);
        Label info = new Label(platformPanel.getComposite(), SWT.NULL);
        info.setText("Settings can be configured in Tools / OpenAPI (Swagger) Editor / Configure Settings...");
        
        parserSettingsPanel = new JPanel("Snake YAML Settings", parent, SWT.NONE, 2);
        codePointLimitTextField = new JTextField(parserSettingsPanel);
        // Parser default value is 3MB, increase min value up to 20MB
        items.add(new ItemIntegerField(codePointLimitTextField, SnakeYamlSettings.CODE_POINT_LIMIT, 20, 2047));

        dictPanel = new JPanel("Data Dictionary", parent, SWT.NONE, 2);
        new Label(dictPanel.getComposite(), SWT.NULL).setText("Update document to match Data Dictionary definitions before runing Security Audit");
        dictPreAuditComboBox = new JComboBox<>(dictPanel);
        dictPreAuditComboBox.insertItemAt(PreAudit.ASK, 0);
        dictPreAuditComboBox.insertItemAt(PreAudit.ALWAYS, 1);
        dictPreAuditComboBox.insertItemAt(PreAudit.NEVER, 2);
        items.add(new ItemComboBox(dictPreAuditComboBox, PreAudit.CHOICE));

        approvedHostsPanel = new JPanel("Approved Hostnames", parent, SWT.NONE, 2);
        approvedHostsEditor = new ApprovedHostsEditor(approvedHostsPanel.getComposite());
        items.add(new ItemHostsTable(approvedHostsEditor, ExtRef.APPROVED_HOSTNAMES));

        insecureSslHostsPanel = new JPanel("Insecure Ssl Hostnames", parent, SWT.NONE, 2);
        insecureSslHostsEditor = new InsecureSslHostsEditor(insecureSslHostsPanel.getComposite());
        items.add(new ItemHostsTable(insecureSslHostsEditor, TryIt.INSECURE_SSL_HOSTNAMES));

        sortPanel = new JPanel("Sort Outlines", parent, SWT.NONE, 1);
        sortCheckbox = new JCheckBox("Alphabetically sort contents of OpenAPI explorer outlines", sortPanel);
        items.add(new ItemCheckBox(sortCheckbox, Outline.ABC_SORT));

        inlinedPanel = new JPanel("Annotations", parent, SWT.NONE, 1);
        inlinedCheckbox = new JCheckBox("Show Tags/TryIt/Audit/Scan Inlined Annotations", inlinedPanel);
        items.add(new ItemCheckBox(inlinedCheckbox, InlinedAnnotations.ENABLE_FLAG));

        previewPanel = new JPanel("Preview", parent, SWT.NONE, 2);
        new Label(previewPanel.getComposite(), SWT.NULL).setText("Default Preview Renderer");
        previewComboBox = new JComboBox<>(previewPanel);
        previewComboBox.insertItemAt(Preview.SWAGGER_UI, 0);
        previewComboBox.insertItemAt(Preview.RE_DOC, 1);
        items.add(new ItemComboBox(previewComboBox, Preview.RENDERER));
        new Label(previewPanel.getComposite(), SWT.NULL).setText("Server Port");
        previewServerPortTextField = new JTextField(previewPanel);
        items.add(new ItemPort(previewServerPortTextField, Preview.PORT));

        auditPanel = new JPanel("Security Audit", parent, SWT.NONE, 3);
        new Label(auditPanel.getComposite(), SWT.NULL).setText("Security Audit Token");
        auditTokenTextArea = new JTextArea(auditPanel);
        auditTokenCleanButton = new JButton("Clear", SWT.PUSH, auditPanel);
        GridData gd = new GridData(GridData.HORIZONTAL_ALIGN_FILL | GridData.VERTICAL_ALIGN_BEGINNING);
        gd.widthHint = 90;
        auditTokenCleanButton.setLayoutData(gd);
        auditTokenTextArea.getDocument().addDocumentListener(new DocumentAdapter() {
            @Override
            public void textChanged(@NotNull DocumentEvent e) {
                auditTokenCleanButton.setEnabled(!StringUtils.isEmpty(getTokenText()));
            }
        });
        auditTokenCleanButton.addActionListener(e -> {
            auditTokenTextArea.setText(StringUtils.EMPTY);
            auditTokenCleanButton.setEnabled(false);
        });
        items.add(new ItemTextArea(auditTokenTextArea, Audit.TOKEN));
        reset();
        return parent;
    }

    private String getTokenText() {
        return StringUtils.strip(auditTokenTextArea.getText(), " \n");
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
        return auditTokenPanel;
    }

    @Override
    public boolean isModified() {
        for (Item item : items) {
            if (item.valid() && item.isModified()) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void reset() {
        for (Item item : items) {
            item.reset();
        }
    }

    @Override
    public void apply() {
        Set<String> updatedKeys = new HashSet<>();
        Map<String, Object> prevData = new HashMap<>();
        for (Item item : items) {
            if (item.valid() && item.isModified()) {
                item.apply(updatedKeys, prevData);
            }
        }
        ProjectManager projectManager = ProjectManager.getInstanceIfCreated();
        if (projectManager != null) {
            Project[] projects = projectManager.getOpenProjects();
            for (Project project : projects) {
                if (!project.isDisposed()) {
                    project.getMessageBus().syncPublisher(SettingsListener.TOPIC).propertiesUpdated(updatedKeys, prevData);
                }
            }
        }
    }

    public void pointToServerPortComponent() {
        previewServerPortTextField.forceFocus();
    }
}
