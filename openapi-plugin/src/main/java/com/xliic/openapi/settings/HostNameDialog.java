package com.xliic.openapi.settings;

import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

public class HostNameDialog extends Dialog {

	private String value;
	private final String title;
	private Label label;
	private Text text;

	public HostNameDialog(Shell shell, String title, String value) {
		super(shell);
		this.title = title;
		this.value = value;
	}

	@Override
	protected Control createDialogArea(Composite parent) {
		Composite comp = (Composite) super.createDialogArea(parent);
		((GridLayout) comp.getLayout()).numColumns = 2;
		label = new Label(comp, SWT.NONE);
		label.setText("Name");
		label.setFont(comp.getFont());
		text = new Text(comp, SWT.BORDER | SWT.SINGLE);
		if (value != null) {
			text.setText(value);	
		}	
		GridData gd = new GridData(GridData.FILL_HORIZONTAL);
		gd.widthHint = 300;
		text.setLayoutData(gd);
		text.setFont(comp.getFont());
		text.addModifyListener(e -> updateButtons());
		return comp;
	}

	public String getValue() {
		return value;
	}

	@Override
	protected void buttonPressed(int buttonId) {
		if (buttonId == IDialogConstants.OK_ID) {
			value = text.getText().trim();
		} else {
			value = null;
		}
		super.buttonPressed(buttonId);
	}

	@Override
	protected void configureShell(Shell shell) {
		super.configureShell(shell);
		if (title != null) {
			shell.setText(title);
		}
	}

	protected void updateButtons() {
		String name = text.getText().trim();
		getButton(IDialogConstants.OK_ID).setEnabled(name.length() > 0);
	}

	@Override
	public void create() {
		super.create();
		updateButtons();
	}
}
