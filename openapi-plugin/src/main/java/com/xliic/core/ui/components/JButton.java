package com.xliic.core.ui.components;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;

public class JButton {
	
	private final Button button;

	public JButton(String name, Composite parent, int style) {
		button = new Button(parent, style);
		button.setText(name);
	}
	
	public void setEnabled(boolean enabled) {
		button.setEnabled(enabled);
	}
	
	public void addActionListener(ActionListener listener) {
		button.addSelectionListener(new SelectionAdapter() {
		  @Override
		  public void widgetSelected(SelectionEvent e) {
			  listener.actionPerformed(new ActionEvent(this, -1, ""));
		  }
	    });	
	}
}
