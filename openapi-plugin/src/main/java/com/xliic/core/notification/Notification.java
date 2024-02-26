package com.xliic.core.notification;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.DisposeEvent;
import org.eclipse.swt.events.DisposeListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.project.Project;
import com.xliic.openapi.OpenAPIImages;

public class Notification {
	
	private static final Image INFO_IMAGE = OpenAPIImages.ReportInfo.createImage();
	private static final Image ERROR_IMAGE = OpenAPIImages.ReportError.createImage();
	private static final Image WARNING_IMAGE = OpenAPIImages.ReportWarning.createImage();
	
	private static final int WIDTH = 40;
	private static final int DELAY = 10000;
	private static final String TITLE = "OpenAPI Editor Notification";
	
	private List<AnAction> actions = new LinkedList<>();
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
			NotificationPopup.forDisplay(display).content(getContentCreator(msg, type, actions)).title(title, true).delay(DELAY).build().open();
		});
	}
	
	@NotNull
	public Notification addAction(@NotNull AnAction action) {
		actions.add(action);
		return this;
	}
	
	private static NotificationContentCreator getContentCreator(String message, NotificationType type, List<AnAction> actions) {
		return new NotificationContentCreator() {
			@Override
			public Control apply(Composite parent, NotificationPopup popup) {
				Composite panel = getGridPanel(parent, GridData.FILL_VERTICAL, 2);
		        // Icon
		        Label infoIco = new Label(panel, SWT.NULL);
		        infoIco.setImage(getImage(type));
		        infoIco.setBackground(parent.getBackground());
		        infoIco.setLayoutData(new GridData(GridData.VERTICAL_ALIGN_BEGINNING | GridData.HORIZONTAL_ALIGN_CENTER));
		        // Main panel with text and actions 
				Composite mainPanel = getGridPanel(panel, GridData.BEGINNING);
		        // Text
		        Text text = new Text(mainPanel, SWT.READ_ONLY | SWT.WRAP);
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
		        // Actions
		        if (!actions.isEmpty()) {	        	
					Composite actionsPanel = getGridPanel(mainPanel, GridData.BEGINNING, actions.size());
			        int index = 0;
			        for (AnAction action : actions) {		        	
						Composite linkPanel = getGridPanel(actionsPanel, GridData.CENTER, 0, index == 0 ? 0 : 5);
			            Link link = new Link(linkPanel, SWT.NONE);
			            NotificationAction nAction = (NotificationAction) action;
			            link.setText("<a href=\"" + nAction.getHref() + "\">" + nAction.getText() + "</a>");
			            link.setBackground(parent.getBackground());
			            link.addSelectionListener(new SelectionAdapter() {
			                @Override
			                public void widgetSelected(SelectionEvent e) {
			                	nAction.actionPerformed();
			                	popup.close();
			                }
			            });
			            index += 1;
			        }
		        }
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
	
	private static Composite getGridPanel(Composite parent, int style) {
		return getGridPanel(parent, style, 0, 0);
	}
	
	private static Composite getGridPanel(Composite parent, int style, int numColumns) {
		return getGridPanel(parent, style, numColumns, 0);
	}
	
	private static Composite getGridPanel(Composite parent, int style, int numColumns, int horizontalIndent) {
		Composite panel = new Composite(parent, SWT.NULL);
		panel.setBackground(parent.getBackground());
        GridLayout layout = new GridLayout();
        if (numColumns > 0) {
        	layout.numColumns = numColumns;	
        }
        layout.marginHeight = 2;
        layout.marginWidth = 2;
        layout.horizontalSpacing = 2;
        layout.verticalSpacing = 2;
        panel.setLayout(layout);
        GridData gridData = new GridData(style);
        if (horizontalIndent > 0) {
        	gridData.horizontalIndent = 5;	
        }
        panel.setLayoutData(gridData);
        return panel;
	}
}
