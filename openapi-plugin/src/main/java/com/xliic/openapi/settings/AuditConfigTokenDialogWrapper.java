package com.xliic.openapi.settings;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.jdt.internal.ui.dialogs.StatusInfo;
import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.preference.StringFieldEditor;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.callback.TokenDialogDoOkActionCallback;

@SuppressWarnings("restriction")
public class AuditConfigTokenDialogWrapper extends DialogWrapper {

	private final static int HEIGTH_IN_CHARS = 8;
	private final static int WEIGTH_IN_CHARS = 50;

	private final Project project;
	private final VirtualFile file;
	private StringFieldEditor tokenTextArea = null;

	public AuditConfigTokenDialogWrapper(@NotNull Project project, @NotNull VirtualFile file) {
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
		tokenTextArea = new StringFieldEditor(SettingsKeys.TOKEN, "Security Audit Token", WEIGTH_IN_CHARS, HEIGTH_IN_CHARS,
				StringFieldEditor.VALIDATE_ON_KEY_STROKE, main) {
			@Override
			public void fireValueChanged(String property, Object oldValue, Object newValue) {
				setOKActionEnabled(!StringUtils.isEmpty(getTokenText()));
			}
		};
		tokenTextArea.setPreferenceStore(OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore());

		Group info = getGroup(outer);
		Label infoLabel = new Label(info, SWT.LEFT);
		infoLabel.setText("API token has been sent. If you don't get the mail within a couple minutes,\n"
				+ "check your spam folder and that the address is correct. Paste the token above.");

		return outer;
	}

	private void setOKActionEnabled(boolean enabled) {
		updateButtonsEnableState(new StatusInfo(enabled ? IStatus.OK : IStatus.ERROR, null));
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

	private void doOKAction() {
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		store.setValue(SettingsKeys.TOKEN, getTokenText());
		Display.getDefault().asyncExec(new Runnable() {
			@Override
			public void run() {
				new TokenDialogDoOkActionCallback(project, file, getTokenText()).setDone();
			}
		});
	}

	private String getTokenText() {
		return StringUtils.strip(tokenTextArea.getStringValue(), " \n");
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
