package com.xliic.core.notification;

import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;

interface NotificationContentCreator {
	
	Control apply(Composite parent, NotificationPopup popup);
}
