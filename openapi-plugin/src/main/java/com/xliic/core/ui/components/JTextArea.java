package com.xliic.core.ui.components;

import java.util.LinkedList;
import java.util.List;

import javax.swing.event.DocumentEvent;
import javax.swing.text.Element;

import org.eclipse.jface.preference.StringFieldEditor;
import org.eclipse.swt.widgets.Composite;

import com.xliic.core.editor.event.DocumentAdapter;

public class JTextArea extends StringFieldEditor {
	
	private final Composite parent;
	private final Document document;
	
	public JTextArea(String name, String labelText, int widthInChars, int heigthInChars, int strategy, Composite parent) {
		super(name, labelText, widthInChars, heigthInChars, strategy, parent);
		this.parent = parent;
		document = new Document();
	}
	
	@Override
	public void doLoadDefault() {
		//reset();
	}
	
	@Override
	public void fireValueChanged(String property, Object oldValue, Object newValue) {
		for (DocumentAdapter adapter : document.getDocumentListeners()) {
			adapter.changedUpdate(new SimpleDocumentEvent());
		}
	}
	
	public String getText() {
		return super.getStringValue();
	}

	public void setText(String text) {
		super.setStringValue(text);
	}
	
    public void setEnabled(boolean enabled) {
    	super.setEnabled(enabled, parent);
    }
    
    public class Document {
    	
    	private final List<DocumentAdapter> adapters = new LinkedList<>();
    	
    	public List<DocumentAdapter> getDocumentListeners() {
    		return adapters;
    	}

    	public void addDocumentListener(DocumentAdapter adapter) {
    		adapters.add(adapter);
    	}    	
    }
    
    public Document getDocument() {
    	return document;
    }
    
    public class SimpleDocumentEvent implements DocumentEvent {

		@Override
		public int getOffset() {
			return 0;
		}

		@Override
		public int getLength() {
			return 0;
		}

		@Override
		public javax.swing.text.Document getDocument() {
			return null;
		}

		@Override
		public EventType getType() {
			return null;
		}

		@Override
		public ElementChange getChange(Element elem) {
			return null;
		}    	
    }
}
