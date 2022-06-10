package com.xliic.core.ui.components;

import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;
import javax.swing.text.Element;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Text;

public class JTextArea {
	
	private static int UNLIMITED = -1;
	
	private Text textWidget;
	
	public JTextArea(int widthInChars, int heigthInChars, JPanel parent) {
		Composite composite = parent.getComposite();
		textWidget = new Text(composite, SWT.BORDER | SWT.MULTI | SWT.V_SCROLL | SWT.WRAP);
		textWidget.setFont(composite.getFont());
		setLayout(widthInChars, heigthInChars);
		textWidget.addDisposeListener(event -> textWidget = null);
	}
	
    public void setText(String t) {
    	textWidget.setText(t);
    }
	
	public String getText() {
		return textWidget.getText();
	}
	
    public void setEnabled(boolean enabled) {
    	textWidget.setEnabled(enabled);
    }
    
    public Document getDocument() {
    	return new Document();
    }
    
	public class Document {
	    public void addDocumentListener(DocumentListener listener) {
	    	textWidget.addModifyListener(new ModifyListener() {
				@Override
				public void modifyText(ModifyEvent e) {
					listener.changedUpdate(new DocumentEvent() {
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
					});
				}
	    	});
	    } 	
	}
	
	private void setLayout(int widthInChars, int heigthInChars) {
		GridData gd = new GridData(GridData.FILL_BOTH);
		if (widthInChars != UNLIMITED || heigthInChars > 1) {
			GC gc = new GC(textWidget);
			try {
				if (widthInChars != UNLIMITED) {
					Point extent = gc.textExtent("X");
					gd.widthHint = widthInChars * extent.x;
				} else {
					gd.horizontalAlignment = GridData.FILL;
					gd.grabExcessHorizontalSpace = true;
				}
				if (heigthInChars > 1) {
					gd.heightHint = heigthInChars * gc.getFontMetrics().getHeight();
				}
			} finally {
				gc.dispose();
			}
		} else {
			gd.horizontalAlignment = GridData.FILL;
			gd.grabExcessHorizontalSpace = true;
		}
		gd.horizontalIndent = 10;
		textWidget.setLayoutData(gd);
	}
}
