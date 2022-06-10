package com.xliic.core.ui.components;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Text;

public class JTextField {
	
	private Text textWidget;
	
	public JTextField(JPanel parent) {
		Composite composite = parent.getComposite();
		textWidget = new Text(composite, SWT.SINGLE | SWT.BORDER);
		textWidget.setFont(composite.getFont());
		GridData gd = new GridData(GridData.FILL_HORIZONTAL);
		gd.horizontalIndent = 10;
		textWidget.setLayoutData(gd);
		textWidget.addDisposeListener(event -> textWidget = null);
	}
	
    public void setText(String t) {
    	textWidget.setText(t);
    }
	
	public String getText() {
		return textWidget.getText();
	}
}
