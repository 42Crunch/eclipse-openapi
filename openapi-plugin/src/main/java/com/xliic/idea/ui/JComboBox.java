package com.xliic.idea.ui;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.jface.preference.ComboFieldEditor;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.swt.widgets.Composite;

public class JComboBox<T> extends ComboFieldEditor {
	
	private String value;
	private final Map<String, Integer> indexes = new HashMap<>();
	private final JComboBoxPreferenceStore store = new JComboBoxPreferenceStore();
	
	public JComboBox(String name, String labelText, String[][] entryNamesAndValues, Composite parent) {
		super(name, labelText, entryNamesAndValues, parent);
		indexes.put("Swagger", 0);
		indexes.put("ReDoc", 1);
	}
	
	@Override
	public void valueChanged(String oldValue, String newValue) {
		super.valueChanged(oldValue, newValue);
		value = newValue;
	}

    public int getSelectedIndex() {
    	return indexes.get(value);
    }
    
    public void setSelectedIndex(int index) {
    	for (Map.Entry<String, Integer> entry : indexes.entrySet()) {
    		if (entry.getValue().equals(index)) {
            	store.setSelectedComboBoxValue(entry.getKey());
        		doLoad();
        		doLoadDefault();
        		break;
    		}
    	}
    }  
    
    public void insertItemAt(T item, int index) {}
    
    @Override
	public IPreferenceStore getPreferenceStore() {
		return store;
	}

}
