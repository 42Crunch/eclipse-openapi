package com.xliic.openapi.launchpad.ui;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Color;
import com.xliic.core.ui.components.JButton;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.capture.CaptureService;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.jetbrains.annotations.NotNull;

public class LaunchPadPanel implements Disposable {

    @NotNull
    private final Project project;
    @NotNull
    private final ToolWindow toolWindow;

    public LaunchPadPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {

        this.project = project;
        this.toolWindow = toolWindow;

        Composite launchPadPanel = new Composite(parent, SWT.NONE);
        GridLayout layout = new GridLayout();
        layout.numColumns = 1;
        layout.marginHeight = 10;
        layout.marginWidth = 15;
        launchPadPanel.setLayout(layout);
        launchPadPanel.setLayoutData(new GridData(GridData.FILL_BOTH));
        launchPadPanel.setBackground(Color.DEFAULT_BACKGROUNG.getSwtGraphicsColor());

        Composite capturePanel = new Composite(launchPadPanel, SWT.NONE);
        GridLayout layout2 = new GridLayout();
        layout2.numColumns = 1;
        layout2.verticalSpacing = 15;
        capturePanel.setLayout(layout2);
        capturePanel.setLayoutData(new GridData(GridData.FILL_BOTH));
        capturePanel.setBackground(launchPadPanel.getBackground());

        Label info = new Label(capturePanel, SWT.NULL);
        info.setText("Convert HAR/Postman files to OpenAPI");

        Composite captureButtonPanel = new Composite(capturePanel, SWT.NONE);
        GridLayout layout3 = new GridLayout();
        layout3.numColumns = 1;
        layout3.marginWidth = 50;
        captureButtonPanel.setLayout(layout3);
        captureButtonPanel.setLayoutData(new GridData(GridData.FILL_BOTH));
        captureButtonPanel.setBackground(capturePanel.getBackground());

        JButton captureButton = new JButton("Convert", SWT.PUSH, captureButtonPanel);
        captureButton.addActionListener(e -> CaptureService.getInstance(project).createAndOpenCaptureWindow());
    }

    public @NotNull Project getProject() {
        return project;
    }

    @Override
    public void dispose() {
    }
}
