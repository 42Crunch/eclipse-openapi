package com.crunch42.openapi.callback;

public abstract class ActionCallback {
	
	private String error;

	protected abstract void setDone();
	protected abstract void setRejected();
    
    public void reject(String error) {
    	this.error = error;
    	setRejected();
    }
    
    public String getError() {
    	return error;
    }
}
