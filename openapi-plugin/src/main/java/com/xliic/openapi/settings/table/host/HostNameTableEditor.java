package com.xliic.openapi.settings.table.host;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.jface.viewers.ColumnLayoutData;
import org.eclipse.jface.viewers.ColumnWeightData;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.TableLayout;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.KeyAdapter;
import org.eclipse.swt.events.KeyEvent;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.TableColumn;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.settings.items.ItemHostsTable;

public abstract class HostNameTableEditor {

    private static final int ADD_BUTTON = IDialogConstants.CLIENT_ID + 1;
    private static final int EDIT_BUTTON = IDialogConstants.CLIENT_ID + 2;
    private static final int REMOVE_BUTTON = IDialogConstants.CLIENT_ID + 3;

    private SelectionAdapter selectionAdapter = new SelectionAdapter() {
        @Override
        public void widgetSelected(SelectionEvent e) {
            buttonPressed(((Integer) e.widget.getData()).intValue());
        }
    };

    private TableViewer tableViewer;
    private HostNameContentProvider contentProvider;
    private HostNameLabelProvider labelProvider = new HostNameLabelProvider();

    private Button editButton;
    private Button removeButton;

    @NotNull
    private final String key;

    private final String[] fTableColumnHeaders = { "Name" };
    private final ColumnLayoutData[] fTableColumnLayouts = { new ColumnWeightData(33) };

    public HostNameTableEditor(@NotNull Composite parent, @NotNull String key, @NotNull String emptyText) {
        this.key = key;
        createTable(parent);
        createButtonGroup(parent);
        setInput(ItemHostsTable.getHosts(key));
    }

    private void addContent(Object o) {
        if (contentProvider != null) {
            contentProvider.add(o);
        }
    }

    private void buttonPressed(int buttonId) {
        switch (buttonId) {
        case ADD_BUTTON:
            add();
            break;
        case EDIT_BUTTON:
            edit(getSelection());
            break;
        case REMOVE_BUTTON:
            remove();
            break;
        default:
            break;
        }
    }

    private void add() {
        HostNameDialog dialog = new HostNameDialog(getShell(), "Add Hostname", null);
        if (dialog.open() == Window.CANCEL) {
            return;
        }
        HostName type = new HostName(dialog.getValue());
        addContent(type);
    }

    private void edit(IStructuredSelection selection) {
        HostName type = (HostName) selection.getFirstElement();
        HostNameDialog dialog = new HostNameDialog(getShell(), "Edit Hostname", type.getHostname());
        if (dialog.open() == Window.CANCEL) {
            return;
        }
        type.setHostname(dialog.getValue());
        updateContent(type);
    }

    public HostNameTableEditor getModel() {
        return this;
    }

    public @NotNull List<HostName> getItems() {
        List<HostName> values = new LinkedList<>();
        for (int i = 0; i < tableViewer.getTable().getItemCount(); i++) {
            values.add((HostName) tableViewer.getElementAt(i));
        }
        return values;
    }

    private Button createPushButton(Composite parent, String buttonText, int buttonId) {
        Button button = new Button(parent, SWT.PUSH);
        button.setFont(parent.getFont());
        button.setText(buttonText);
        button.setData(Integer.valueOf(buttonId));
        button.addSelectionListener(selectionAdapter);
        button.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
        return button;
    }

    private void createButtonGroup(Composite top) {
        Composite buttonGroup = new Composite(top, SWT.NONE);
        GridLayout layout = new GridLayout();
        layout.numColumns = 1;
        layout.marginHeight = 0;
        layout.marginWidth = 0;
        buttonGroup.setLayout(layout);
        GridData gridData = new GridData(GridData.HORIZONTAL_ALIGN_FILL | GridData.VERTICAL_ALIGN_FILL);
        gridData.widthHint = 90;
        buttonGroup.setLayoutData(gridData);
        buttonGroup.setFont(top.getFont());
        createPushButton(buttonGroup, "Add Host...", ADD_BUTTON);
        editButton = createPushButton(buttonGroup, "Edit Host...", EDIT_BUTTON);
        removeButton = createPushButton(buttonGroup, "Remove", REMOVE_BUTTON);
    }

    private void createTable(Composite parent) {
        Table table = new Table(parent, SWT.MULTI | SWT.FULL_SELECTION | SWT.BORDER);
        GridData data = new GridData(GridData.FILL_BOTH);
        // Height space for 3 items and the header
        data.heightHint = (1 + 3) * table.getItemHeight();
        data.verticalSpan = 3;
        table.setLayoutData(data);
        table.setFont(parent.getFont());
        TableLayout tableLayout = new TableLayout();
        table.setLayout(tableLayout);
        table.setHeaderVisible(true);
        table.setLinesVisible(true);
        tableViewer = new TableViewer(table);
        contentProvider = new HostNameContentProvider(tableViewer);
        tableViewer.setContentProvider(contentProvider);
        tableViewer.setLabelProvider(this.labelProvider);
        tableViewer.addSelectionChangedListener(event -> tableSelectionChanged((IStructuredSelection) event.getSelection()));

        tableViewer.addDoubleClickListener(event -> {
            if (!event.getSelection().isEmpty() && editButton.isEnabled()) {
                edit((IStructuredSelection) event.getSelection());
            }
        });
        for (int i = 0; i < fTableColumnHeaders.length; i++) {
            tableLayout.addColumnData(fTableColumnLayouts[i]);
            TableColumn column = new TableColumn(table, SWT.NONE, i);
            column.setResizable(fTableColumnLayouts[i].resizable);
            column.setText(fTableColumnHeaders[i]);
        }
        table.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent event) {
                if (editButton.isEnabled() && event.character == SWT.DEL && event.stateMask == 0) {
                    remove(tableViewer);
                }
            }
        });
    }

    private final IStructuredSelection getSelection() {
        if (tableViewer == null || tableViewer.getControl().isDisposed()) {
            return null;
        }
        return ((IStructuredSelection) tableViewer.getSelection());
    }

    private final Shell getShell() {
        if (tableViewer == null || tableViewer.getControl().isDisposed()) {
            return null;
        }
        return tableViewer.getControl().getShell();
    }

    private void remove() {
        remove(tableViewer);
    }

    private void remove(TableViewer viewer) {
        HostNameContentProvider antContentProvider = (HostNameContentProvider) viewer.getContentProvider();
        IStructuredSelection sel = (IStructuredSelection) viewer.getSelection();
        Iterator<?> itr = sel.iterator();
        while (itr.hasNext()) {
            antContentProvider.remove(itr.next());
        }
    }

    public void setInput(List<?> inputs) {
        if (tableViewer == null || tableViewer.getControl().isDisposed()) {
            return;
        }
        tableViewer.setInput(inputs);
        tableSelectionChanged((IStructuredSelection) tableViewer.getSelection());
    }

    private final void updateContent(Object element) {
        if (tableViewer == null || tableViewer.getControl().isDisposed()) {
            return;
        }
        tableViewer.update(element, null);
    }

    private void tableSelectionChanged(IStructuredSelection newSelection) {
        int size = newSelection.size();
        editButton.setEnabled(size == 1);
        removeButton.setEnabled(size > 0);
    }
}
