package com.xliic.core.project;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.util.messages.MessageBus;

public class Project {
	
	private static final Project INSTANCE = new Project();

	private volatile boolean disposed = false;
	private MessageBus messageBus = null;

	private Project() {}

	public static synchronized Project getInstance() {
		return INSTANCE;
	}
		
	@Nullable
	public String getBasePath() {
		return "";
	}

	public String getLocationHash() {
		return String.valueOf(this.hashCode());
	}

	public boolean isDisposed() {
		return disposed;
	}

	public void dispose() {
		if (!disposed) {
			disposed = true;	
		}
	}
	
	@NotNull 
	public MessageBus getMessageBus() {
		if (messageBus == null) {
			IWorkbench workbench = PlatformUI.getWorkbench();
			messageBus = new MessageBus(workbench.getService(IEventBroker.class));			
		}
		return messageBus;
	}
	
	public <T> T getService(@NotNull Class<T> serviceClass) {
		return ApplicationManager.getApplication().getService(serviceClass);
	}
}
