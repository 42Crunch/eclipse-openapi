package com.xliic.core.ui.treeStructure;

import org.eclipse.swt.events.KeyEvent;
import org.eclipse.swt.events.KeyListener;

public abstract class KeyAdapter implements KeyListener {

	@Override
	public void keyPressed(KeyEvent e) {
		keyPressed(new com.xliic.core.ui.treeStructure.KeyEvent(e.keyCode));
	}

	@Override
	public void keyReleased(KeyEvent e) {}
	
    public abstract void keyPressed(com.xliic.core.ui.treeStructure.KeyEvent e);
}
