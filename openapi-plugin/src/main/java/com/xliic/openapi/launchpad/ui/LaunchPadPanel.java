package com.xliic.openapi.launchpad.ui;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.wm.ToolWindow;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Text;
import org.jetbrains.annotations.NotNull;

// We have to extend from JPanel to be able to register the whole stuff below as tool window component
// By doing so we will be able to access all necessary content from anywhere through ToolWindowManager
public class LaunchPadPanel implements Disposable {

    @NotNull
    private final Project project;
    @NotNull
    private final ToolWindow toolWindow;
//    private JPanel launchPadWindowPanel;
//    private JScrollPane scrollPane;
//    private JTextField textField;

    public LaunchPadPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {
    	
        this.project = project;
        this.toolWindow = toolWindow;
        
        Text textWidget = new Text(parent, SWT.SINGLE | SWT.BORDER);
        textWidget.setFont(parent.getFont());
        textWidget.setText("TODO: add buttons here");
        
//        super(new BorderLayout());
//        this.add(launchPadWindowPanel, BorderLayout.CENTER);
//        this.project = project;
//        this.toolWindow = toolWindow;
//        textField.setText("TODO: add buttons here");
        //project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
        //project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
        //project.getMessageBus().connect().subscribe(WindowListener.TOPIC, this);
    }

    public @NotNull Project getProject() {
        return project;
    }

    @Override
    public void dispose() {
    }
}
