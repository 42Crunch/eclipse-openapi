package com.xliic.openapi.preview;

import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.openapi.settings.AuditConfigurable;

import org.eclipse.jface.dialogs.TrayDialog;
import org.eclipse.jface.preference.PreferenceDialog;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.dialogs.PreferencesUtil;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class PreviewDialog extends TrayDialog {

    private static final String PREF_PAGE_ID = "com.xliic.openapi.settings.AuditConfigurable";

    @Nullable
    private final String message;
    private final int port;

    public PreviewDialog(@NotNull Project project, int port) {
        this(project, port, null);
    }

    public PreviewDialog(@NotNull Project project, @NotNull String message) {
        this(project, -1, message);
    }

    private PreviewDialog(@NotNull Project project, int port, @Nullable String message) {
        super(EclipseUtil.getShell());
        this.message = message;
        this.port = port;
    }

    @Override
    protected Control createDialogArea(Composite parent) {
        parent = (Composite) super.createDialogArea(parent);
        GridLayout layout = new GridLayout();
        layout.numColumns = port > 0 ? 3 : 1;
        layout.marginHeight = 10;
        layout.marginWidth = 10;
        parent.setLayout(layout);
        if (port > 0) {
            new Label(parent, SWT.NULL).setText("Failed to start preview server:");
            Link link = new Link(parent, SWT.NONE);
            link.setText("<a href=\"" + PREF_PAGE_ID + "\">port</a>");
            link.addSelectionListener(new SelectionAdapter() {
                @Override
                public void widgetSelected(SelectionEvent e) {
                    if (PREF_PAGE_ID.equals(e.text)) {
                        PreferenceDialog dialog = PreferencesUtil.createPreferenceDialogOn(null, PREF_PAGE_ID, null, null);
                        if (dialog != null) {
                            Object page = dialog.getSelectedPage();
                            if (page instanceof AuditConfigurable) {
                                ((AuditConfigurable) page).pointToServerPortComponent();
                                close();
                                dialog.open();
                            }
                        }
                    }
                }
            });
            new Label(parent, SWT.NULL).setText(port + " already in use");
        } else {
            Text textArea = new Text(parent, SWT.MULTI | SWT.READ_ONLY | SWT.V_SCROLL | SWT.WRAP);
            textArea.setText(message);
            textArea.setEditable(false);
            setLayoutDat(textArea, 50, 3);
        }
        setTitle("Preview Server");
        return parent;
    }

    public void show() {
        open();
    }

    private void setTitle(String title) {
        Shell shell = getShell();
        if ((shell != null) && !shell.isDisposed()) {
            shell.setText(title);
        }
    }

    @Override
    public boolean isHelpAvailable() {
        return false;
    }

    private static void setLayoutDat(Text widget, int widthInChars, int heigthInChars) {
        GridData gd = new GridData(GridData.FILL_BOTH);
        GC gc = new GC(widget);
        try {
            Point extent = gc.textExtent("X");
            gd.widthHint = widthInChars * extent.x;
            gd.heightHint = heigthInChars * gc.getFontMetrics().getHeight();
        } finally {
            gc.dispose();
        }
        widget.setLayoutData(gd);
    }
}
