package com.xliic.core.ui.components;

import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;

public class JPanel implements JComponent {
	
	private final Group group;

	public JPanel(String text, Composite parent, int style) {
		group = new Group(parent, style);
		GridLayout layout = new GridLayout();
		layout.marginHeight = layout.marginWidth = 5;
		group.setLayout(layout);
		group.setLayoutData(new GridData(GridData.FILL_BOTH));
		group.setText(text);
	}
	
	public Group getComposite() {
		return group;
	}
	
	public void setBorder(Object border) {
		
	}
}
