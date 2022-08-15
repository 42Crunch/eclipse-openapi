package com.xliic.core.ui.treeStructure;

public class KeyEvent {
	
	public static final int VK_ENTER = '\n';
	private final int keyCode;
	
	public KeyEvent(int keyCode) {
		this.keyCode = keyCode;
	}

    public int getKeyCode() {
        return isEnter() ? VK_ENTER : keyCode;
    }
    
    private boolean isEnter() {
    	return keyCode == '\r' || keyCode == '\n'; 
    }
}
