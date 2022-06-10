package com.xliic.openapi.settings;

import java.awt.EventQueue;
import java.util.regex.Pattern;

import org.eclipse.core.runtime.IStatus;
import org.eclipse.jdt.internal.ui.dialogs.StatusInfo;
import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.jface.fieldassist.FieldDecorationRegistry;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.callback.EmailDialogDoOkActionCallback;
import com.xliic.openapi.services.api.IAuditService;

@SuppressWarnings("restriction")
public class AuditConfigEmailDialogWrapper extends DialogWrapper {

	// Week, but compact regexp to avoid dummy emails
	private final static Pattern EMAIL_REGEX = Pattern.compile("^(.+)@(.+)$");

	private final Project project;
	private final VirtualFile file;
	private Text emailTextField;

	public AuditConfigEmailDialogWrapper(@NotNull Project project, @NotNull VirtualFile file) {
		super(project, true);
		setTitle(OpenApiBundle.message("Security Audit Settings"));
		this.file = file;
		this.project = project;
	}

	@Override
	protected Control createDialogArea(Composite parent) {

		Composite outer = (Composite) super.createDialogArea(parent);
		initializeDialogUnits(outer);
		setOKActionEnabled(false);

		Group main = getGroup(outer);
		Label label = new Label(main, SWT.LEFT);
		label.setText("Email:");
		emailTextField = new Text(main, SWT.BORDER);
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		String previousEmail = store.getString(SettingsKeys.EMAIL);
		if (previousEmail != null && !previousEmail.isEmpty() && emailTextField != null) {
			emailTextField.setText(previousEmail);
			setOKActionEnabled(EMAIL_REGEX.matcher(previousEmail).find());
		}
		emailTextField.addModifyListener(event -> {
			setOKActionEnabled(EMAIL_REGEX.matcher(emailTextField.getText()).find());
		});
		emailTextField.setLayoutData(getFieldGridData());

		Group info = getGroup(outer);
		Label infoLabel = new Label(info, SWT.LEFT);
		infoLabel.setText("Security Audit from 42Crunch runs ~200 checks for security best practices in your API.\n"
				+ "Eclipse needs an API key to use the service. Enter your email to receive the token.");

		return outer;
	}

	private void setOKActionEnabled(boolean enabled) {
		updateStatus(new StatusInfo(enabled ? IStatus.OK : IStatus.ERROR, null));
	}

	private Group getGroup(Composite parent) {
		Group main = new Group(parent, SWT.NONE);
		main.setLayoutData(new GridData(GridData.FILL_BOTH));
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.marginHeight = convertVerticalDLUsToPixels(IDialogConstants.VERTICAL_MARGIN);
		layout.marginWidth = convertHorizontalDLUsToPixels(IDialogConstants.HORIZONTAL_MARGIN);
		layout.verticalSpacing = convertVerticalDLUsToPixels(IDialogConstants.VERTICAL_SPACING);
		layout.horizontalSpacing = convertHorizontalDLUsToPixels(IDialogConstants.HORIZONTAL_SPACING);
		main.setLayout(layout);
		main.setText("");
		return main;
	}

	private GridData getFieldGridData() {
		int margin = FieldDecorationRegistry.getDefault().getMaximumDecorationWidth();
		GridData data = new GridData();
		data.horizontalAlignment = SWT.FILL;
		data.widthHint = IDialogConstants.ENTRY_FIELD_WIDTH + margin;
		data.horizontalIndent = margin;
		data.grabExcessHorizontalSpace = true;
		return data;
	}

	private void doOKAction() {
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		store.setValue(SettingsKeys.EMAIL, emailTextField.getText());
		EventQueue.invokeLater(() -> {
			IAuditService auditService = PlatformUI.getWorkbench().getService(IAuditService.class);
			auditService.sendGenerateTokenRequest(store.getString(SettingsKeys.EMAIL),
					new EmailDialogDoOkActionCallback(project, file));
		});
	}

	@Override
	protected boolean isResizable() {
		return true;
	}

	@Override
	public boolean isHelpAvailable() {
		return false;
	}

	@Override
	protected void okPressed() {
		if (!getStatus().isOK()) {
			return;
		}
		doOKAction();
		super.okPressed();
	}
}
