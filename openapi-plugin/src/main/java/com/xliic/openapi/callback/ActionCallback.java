package com.xliic.openapi.callback;

public abstract class ActionCallback {

	private String error;

	protected void setDone() {
	};

	protected void setRejected() {
	};

	public void reject(String error) {
		this.error = error;
		setRejected();
	}

	public String getError() {
		return error;
	}
}
