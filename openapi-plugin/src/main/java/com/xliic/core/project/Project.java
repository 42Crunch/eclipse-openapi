package com.xliic.core.project;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.core.util.messages.MessageBus;

public class Project {

	private volatile boolean isDisposed;
	private MessageBus messageBus;

	public Project() {
		this.isDisposed = false;
		this.messageBus = null;
	}

	@Nullable
	public String getBasePath() {
		return "";
	}

	public String getLocationHash() {
		return String.valueOf(this.hashCode());
	}

	public Shell getShell() {
		return EclipseWorkbenchUtil.getIWorkbenchWindow().getShell();
	}

	public boolean isDisposed() {
		return isDisposed;
	}

	public void dispose() {
		isDisposed = true;
	}
	
	@NotNull 
	public MessageBus getMessageBus() {
		if (messageBus == null) {
			IWorkbench workbench = PlatformUI.getWorkbench();
			messageBus = new MessageBus(workbench.getService(IEventBroker.class));			
		}
		return messageBus;
	}
}
