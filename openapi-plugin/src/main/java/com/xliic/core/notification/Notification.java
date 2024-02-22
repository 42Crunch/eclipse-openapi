package com.xliic.core.notification;

import java.util.function.Function;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.DisposeEvent;
import org.eclipse.swt.events.DisposeListener;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.OpenAPIImages;

public class Notification {
	
	private static final Image INFO_IMAGE = OpenAPIImages.ReportInfo.createImage();
	private static final Image ERROR_IMAGE = OpenAPIImages.ReportError.createImage();
	private static final Image WARNING_IMAGE = OpenAPIImages.ReportWarning.createImage();
	
	private static final int WIDTH = 40;
	private static final int DELAY = 10000;
	private static final String TITLE = "OpenAPI Editor Notification";
	
	private volatile static int COUNTER = 0;
	
	@NotNull 
	private final String msg;
	@NotNull 
	private final NotificationType type;
	
	Notification(@NotNull String msg, @NotNull NotificationType type) {
		this.msg = msg;
		this.type = type;
	}

	public void notify(@NotNull Project project) {
		COUNTER += 1;
		Display display = PlatformUI.getWorkbench().getDisplay();
		String title = TITLE + (COUNTER == 1 ? "" : " (" + COUNTER + ")");
		Display.getDefault().asyncExec(() -> {
			NotificationPopup.forDisplay(display).content(getContentCreator(msg, type)).title(title, true).delay(DELAY).build().open();
		});
	}
	
	private static Function<Composite, Control> getContentCreator(String message, NotificationType type) {
		return new Function<Composite, Control>() {
			@Override
			public Control apply(Composite parent) {		
				Composite panel = new Composite(parent, SWT.NULL);
				panel.setBackground(parent.getBackground());
		        GridLayout layout = new GridLayout();
		        layout.numColumns = 2;
		        panel.setLayout(layout);
		        panel.setLayoutData(new GridData(GridData.FILL_VERTICAL));
		        // Icon
		        Label infoIco = new Label(panel, SWT.NULL);
		        infoIco.setImage(getImage(type));
		        infoIco.setBackground(parent.getBackground());
		        infoIco.setLayoutData(new GridData(GridData.VERTICAL_ALIGN_BEGINNING));
		        // Text
				Text text = new Text(panel, SWT.READ_ONLY | SWT.WRAP);
				text.setText(message);
				text.setBackground(parent.getBackground());
		        GridData gd = new GridData(GridData.FILL_BOTH);
	            GC gc = new GC(text);
	            try {
                    Point extent = gc.textExtent("X");
                    gd.widthHint = WIDTH * extent.x;
	            } finally {
	                gc.dispose();
	            }
		        text.setLayoutData(gd);
		        parent.addDisposeListener(new DisposeListener() {
					@Override
					public void widgetDisposed(DisposeEvent e) {
						COUNTER -= 1;						
					}
		        });
				return panel;
			}			
		};
	}
	
	private static Image getImage(NotificationType type) {
		if (type == NotificationType.ERROR) {
			return ERROR_IMAGE;
		} else if (type == NotificationType.WARNING) {
			return WARNING_IMAGE;
		}
		return INFO_IMAGE;
	}
}
