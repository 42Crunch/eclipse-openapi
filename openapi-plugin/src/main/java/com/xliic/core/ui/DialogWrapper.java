package com.xliic.core.ui;

import javax.swing.JComponent;
import javax.validation.constraints.NotNull;

import org.eclipse.core.runtime.IStatus;
import org.eclipse.jdt.internal.ui.dialogs.StatusInfo;
import org.eclipse.jface.dialogs.StatusDialog;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.ui.components.Validator;
import com.xliic.core.util.EclipseUtil;

@SuppressWarnings("restriction")
public class DialogWrapper extends StatusDialog {
	
	private final int numColumns;
	protected final Project project;

	protected DialogWrapper(@Nullable Project project, int numColumns) {
		super(EclipseUtil.getShell());
		this.project = project;
		this.numColumns = numColumns;
	}

	public boolean showAndGet() {
		return open() == Window.OK;
	}

	@Override
	protected Control createDialogArea(Composite parent) {	
		parent = (Composite) super.createDialogArea(parent);
		GridLayout layout = new GridLayout();
	    layout.numColumns = numColumns;
	    layout.marginHeight = 10;
	    layout.marginWidth = 10;
	    parent.setLayout(layout);
	    create(parent);
		return parent;
	}
	
	protected final void setOKButtonText(@NotNull String text) {
		// Ignore as it is impossible for StatusDialog
	}
	
	protected void create(Composite parent) {}
	
	protected void registerForValidation(@NotNull Object widget) {
		if (widget instanceof Validator) {
			Validator validator = (Validator) widget;
			validator.addValidationListener(() -> {
				ValidationInfo info = doValidate();
				if (info == null) {
					validator.setValid();
					setOKActionEnabled(true);
				} else {
					setOKActionEnabled(false);
					validator.setInvalid(info.getMessage());
				}
			});
		}
	}
	
	protected ValidationInfo doValidate() {
		return null;
	}
	
	protected void setOKActionEnabled(boolean enabled) {
		updateStatus(new StatusInfo(enabled ? IStatus.OK : IStatus.ERROR, null));
	}
	
	protected void init() {}
	
	protected boolean postponeValidation() {
		return false;
	}

	protected JComponent getPreferredFocusedComponent() {
		return null;
	}

    protected JComponent createCenterPanel() {
    	return null;
    }

    @Override
	public boolean isHelpAvailable() {
		return false;
	}

	@Override
	protected void okPressed() {
		doOKAction();
		super.okPressed();
	}
	
	protected void doOKAction() {}
}
