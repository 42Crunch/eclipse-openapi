package com.xliic.idea.ui;

import org.eclipse.jface.preference.FieldEditorPreferencePage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.idea.Module;
import com.xliic.idea.project.Project;

public abstract class SearchableConfigurable extends FieldEditorPreferencePage implements IWorkbenchPreferencePage {

	protected final static int HEIGTH_IN_CHARS = 8;
	protected final static int WEIGTH_IN_CHARS = 50;
	
	public SearchableConfigurable(@Nullable Module module, @NotNull Project project) {
		super(GRID);
		setPreferenceStore(OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore());
	}
	
	@Override
	public void init(IWorkbench workbench) {}

	@Override
	protected void performDefaults() {
		super.performDefaults();
		reset();
	}

	
	@Override
	public boolean performOk() {
		if (isModified()) {
			apply();
		}
		return super.performOk();
	}
	
	protected Composite createComposite(Composite parent) {
		Composite composite = new Composite(parent, SWT.NONE);
		GridLayout layout = new GridLayout();
		layout.marginWidth = 0;
		layout.marginHeight = 0;
		composite.setLayout(layout);
		composite.setLayoutData(new GridData(GridData.VERTICAL_ALIGN_FILL | GridData.HORIZONTAL_ALIGN_FILL));
		return composite;
	}
	
	protected static JButton createClearButton(Composite parent) {
		Composite composite = new Composite(parent, SWT.NONE);
		GridLayout layout = new GridLayout(4, false);
		layout.marginHeight = layout.marginWidth = 0;
		composite.setLayout(layout);
		GridData data = new GridData(GridData.FILL_HORIZONTAL | GridData.HORIZONTAL_ALIGN_END);
		data.horizontalSpan = 2;
		composite.setLayoutData(data);
		return new JButton("Clear", composite, SWT.PUSH);
	}
	
	public abstract String getDisplayName();
	public abstract String getHelpTopic();
	public abstract JComponent createComponent();
	public abstract boolean isModified();
	public abstract void reset();
	public abstract void apply();
	public abstract String getId();
}
