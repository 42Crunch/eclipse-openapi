package com.xliic.core.ui;

import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Listener;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.popup.JBPopupMember;

public abstract class DoubleClickListener implements Listener {
	
	private JBPopupMember source;

    @Override
    public void handleEvent(Event event) {
    	onDoubleClick(new MouseEvent(source));
    }
    
    public void installOn(JBPopupMember source) {
    	this.source = source;
    	source.addDoubleClickListener(this);
    }
	
	protected abstract boolean onDoubleClick(@NotNull MouseEvent e);
}
