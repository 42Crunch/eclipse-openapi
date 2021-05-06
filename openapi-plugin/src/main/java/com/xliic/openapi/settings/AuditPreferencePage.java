package com.xliic.openapi.settings;

import java.util.Objects;

import org.apache.commons.lang.StringUtils;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.preference.FieldEditorPreferencePage;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.preference.StringFieldEditor;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.widgets.Button;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class AuditPreferencePage extends FieldEditorPreferencePage implements IWorkbenchPreferencePage {
	
	private final static int HEIGTH_IN_CHARS = 8;
	private final static int WEIGTH_IN_CHARS = 50;
	
	private Button cleanButton = null;
	private StringFieldEditor tokenTextArea = null;
	private boolean isTokenCleaned = false;

	public AuditPreferencePage() {
		super(GRID);
		setPreferenceStore(OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore());
	}

	@Override
	public void createFieldEditors() {

		tokenTextArea = new StringFieldEditor(AuditKeys.TOKEN, "Security Audit Token", 
				WEIGTH_IN_CHARS, HEIGTH_IN_CHARS, StringFieldEditor.VALIDATE_ON_KEY_STROKE, getFieldEditorParent()) {
			@Override
			public void doLoadDefault() {
				reset();
			}
			@Override
			public void fireValueChanged(String property, Object oldValue, Object newValue) {
				if (cleanButton != null) {
					cleanButton.setEnabled(!StringUtils.isEmpty(getTokenText()));	
				}
		        isTokenCleaned = false;
			}
		};
		addField(tokenTextArea);

		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
	    String tokenText = store.getString(AuditKeys.TOKEN);
	    tokenTextArea.setStringValue(StringUtils.isEmpty(tokenText) ? StringUtils.EMPTY : tokenText);
	    tokenTextArea.setEnabled(true, getFieldEditorParent());

		cleanButton = new Button(getFieldEditorParent(), SWT.FLAT | SWT.RIGHT);
		cleanButton.setText("Clean");
		cleanButton.setEnabled(!StringUtils.isEmpty(tokenText));
		
		cleanButton.addSelectionListener(new SelectionAdapter() {
            @Override
            public void widgetSelected(SelectionEvent e) {
      	      tokenTextArea.setStringValue(StringUtils.EMPTY);
      	      cleanButton.setEnabled(false);
      	      isTokenCleaned = true;
            }
        });
		
		Dialog.applyDialogFont(getFieldEditorParent());
	}

	@Override
	public void init(IWorkbench workbench) {}
	
	private String getTokenText() {
		return StringUtils.strip(tokenTextArea.getStringValue(), " \n");
	}
	
	private boolean isModified() {
		if (isTokenCleaned) {
			return true;
		}
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		String currentTokenText = store.getString(AuditKeys.TOKEN);
		return !Objects.equals(getTokenText(), currentTokenText);
	}

	private void reset() {
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		tokenTextArea.setStringValue(store.getString(AuditKeys.TOKEN));
	}

	private void apply() {
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
	    if (isTokenCleaned) {
	    	store.setValue(AuditKeys.TOKEN, StringUtils.EMPTY);
	    }
	    else {
	    	store.setValue(AuditKeys.TOKEN, getTokenText());
	    }
	}
	
	@Override
	public boolean performOk() {
		if (isModified()) {
			apply();
		}
		return super.performOk();
	}
}
