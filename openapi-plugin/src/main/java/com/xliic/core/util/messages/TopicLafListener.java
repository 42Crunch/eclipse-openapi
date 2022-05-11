package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.eclipse.e4.ui.css.swt.theme.ITheme;
import org.eclipse.e4.ui.css.swt.theme.IThemeEngine;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.internal.themes.WorkbenchThemeManager;
import org.jetbrains.annotations.NotNull;
import org.osgi.service.event.Event;
import org.osgi.service.event.EventHandler;

import com.xliic.core.ide.ui.LafManager;
import com.xliic.core.ide.ui.LafManagerListener;

@SuppressWarnings("restriction")
public class TopicLafListener<L> extends Topic<L> {
    
	public TopicLafListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
    	super(listenerClass, broadcastDirection);
    	final IWorkbench workbench = PlatformUI.getWorkbench();
    	final IEventBroker eventBroker = workbench.getService(IEventBroker.class);
    	final IThemeEngine themeEngine = workbench.getService(IThemeEngine.class);
    	eventBroker.subscribe(WorkbenchThemeManager.Events.THEME_REGISTRY_RESTYLED, new EventHandler() {
			@Override
			public void handleEvent(Event event) {
				ITheme theme = themeEngine.getActiveTheme();			
				LafManagerListener listener = syncPublisher(eventBroker);
				listener.lookAndFeelChanged(new LafManager(theme));
			}
    	});
    }

	@Override
    @SuppressWarnings("unchecked")
	public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
		LafManagerListener listener = (LafManagerListener) handler;
    	List<Object> args = (List<Object>) data;
    	if (funcId == 0) {
    		listener.lookAndFeelChanged((LafManager) args.get(0));
    	}
    } 

	@NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
    	return (T) new LafManagerListener() {
    		@Override
    	    public void lookAndFeelChanged(@NotNull LafManager manager) {
    	    	eventBroker.send(getTopic(), getArgs(0, List.of(manager)));	
    		}
    	};
    }
}
