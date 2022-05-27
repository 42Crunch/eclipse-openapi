//package com.xliic.openapi.settings;
//
//import java.util.Iterator;
//import java.util.List;
//
//import org.eclipse.jface.dialogs.IDialogConstants;
//import org.eclipse.jface.preference.FieldEditorPreferencePage;
//import org.eclipse.jface.viewers.ColumnLayoutData;
//import org.eclipse.jface.viewers.ColumnWeightData;
//import org.eclipse.jface.viewers.IStructuredSelection;
//import org.eclipse.jface.viewers.TableLayout;
//import org.eclipse.jface.viewers.TableViewer;
//import org.eclipse.swt.SWT;
//import org.eclipse.swt.events.KeyAdapter;
//import org.eclipse.swt.events.KeyEvent;
//import org.eclipse.swt.events.SelectionAdapter;
//import org.eclipse.swt.events.SelectionEvent;
//import org.eclipse.swt.layout.FillLayout;
//import org.eclipse.swt.layout.GridData;
//import org.eclipse.swt.layout.GridLayout;
//import org.eclipse.swt.widgets.Button;
//import org.eclipse.swt.widgets.Composite;
//import org.eclipse.swt.widgets.Shell;
//import org.eclipse.swt.widgets.Table;
//import org.eclipse.swt.widgets.TableColumn;
//
//public abstract class TableEditor {
//
////	protected static final int ADD_BUTTON = IDialogConstants.CLIENT_ID + 1;
////	protected static final int EDIT_BUTTON = IDialogConstants.CLIENT_ID + 2;
////	protected static final int REMOVE_BUTTON = IDialogConstants.CLIENT_ID + 3;
////
////	protected SelectionAdapter selectionAdapter = new SelectionAdapter() {
////		@Override
////		public void widgetSelected(SelectionEvent e) {
////			buttonPressed(((Integer) e.widget.getData()).intValue());
////		}
////	};
////
////	private FieldEditorPreferencePage preferencePage;
////	private TableViewer tableViewer;
////	private HostNameContentProvider contentProvider;
////	private HostNameLabelProvider labelProvider = new HostNameLabelProvider();
////
////	protected Button editButton;
////	protected Button removeButton;
////	
////	private final String[] fTableColumnHeaders = { "Name" };
////	private final ColumnLayoutData[] fTableColumnLayouts = { new ColumnWeightData(33) };
////
////	public TableEditor(FieldEditorPreferencePage preferencePage) {
////		super();
////		this.preferencePage = preferencePage;
////	}
//
//	protected abstract void addButtonsToButtonGroup(Composite parent);
//	protected abstract void initialize();
//
////	protected void addContent(Object o) {
////		if (contentProvider != null) {
////			contentProvider.add(o);
////		}
////	}
////
////	private void buttonPressed(int buttonId) {
////		switch (buttonId) {
////			case ADD_BUTTON:
////				add();
////				break;
////			case EDIT_BUTTON:
////				edit(getSelection());
////				break;
////			case REMOVE_BUTTON:
////				remove();
////				break;
////			default:
////				break;
////		}
////	}
//
//	protected Button createPushButton(Composite parent, String buttonText, int buttonId) {
//		Button button = new Button(parent, SWT.PUSH);
//		button.setFont(parent.getFont());
//		button.setText(buttonText);
//		button.setData(Integer.valueOf(buttonId));
//		button.addSelectionListener(selectionAdapter);
//		return button;
//	}
//
//	protected void createButtonGroup(Composite top) {
//		Composite buttonGroup = new Composite(top, SWT.NONE);
//	    FillLayout layout = new FillLayout();
//		layout.marginHeight = 0;
//		layout.marginWidth = 0;
//		layout.type = SWT.VERTICAL;
//		buttonGroup.setLayout(layout);
//		buttonGroup.setLayoutData(new GridData(GridData.FILL_VERTICAL));
//		buttonGroup.setFont(top.getFont());
//
//		addButtonsToButtonGroup(buttonGroup);
//	}
//
//	protected void createTable(Composite parent) {
//		Table table = new Table(parent, SWT.MULTI | SWT.FULL_SELECTION | SWT.BORDER);
//		GridData data = new GridData(GridData.FILL_BOTH);
//		data.widthHint = 425;
//		data.heightHint = table.getItemHeight();
//		data.horizontalSpan = 1;
//		table.setLayoutData(data);
//		table.setFont(parent.getFont());
//
//		TableLayout tableLayout = new TableLayout();
//		table.setLayout(tableLayout);
//		table.setHeaderVisible(true);
//		table.setLinesVisible(true);
//
//		tableViewer = new TableViewer(table);
//		contentProvider = new HostNameContentProvider(tableViewer);
//
//		tableViewer.setContentProvider(contentProvider);
//		tableViewer.setLabelProvider(this.labelProvider);
//		tableViewer.addSelectionChangedListener(event -> tableSelectionChanged((IStructuredSelection) event.getSelection()));
//
//		tableViewer.addDoubleClickListener(event -> {
//			if (!event.getSelection().isEmpty() && editButton.isEnabled()) {
//				edit((IStructuredSelection) event.getSelection());
//			}
//		});
////		ArrayList<ColumnSorter> sorters = new ArrayList<>(fTableColumnHeaders.length);
//		for (int i = 0; i < fTableColumnHeaders.length; i++) {
//			tableLayout.addColumnData(fTableColumnLayouts[i]);
//			TableColumn column = new TableColumn(table, SWT.NONE, i);
//			column.setResizable(fTableColumnLayouts[i].resizable);
//			column.setText(fTableColumnHeaders[i]);
////			sorters.add(new ColumnSorter(this.tableViewer, column) {
////				@Override
////				public String getCompareText(Object obj, int columnindex) {
////					return AntPage.this.labelProvider.getColumnText(obj, columnindex);
////				}
////			});
//		}
//
//		table.addKeyListener(new KeyAdapter() {
//			@Override
//			public void keyPressed(KeyEvent event) {
//				if (editButton.isEnabled() && event.character == SWT.DEL && event.stateMask == 0) {
//					remove(tableViewer);
//				}
//			}
//		});
//	}
//
//	protected final IStructuredSelection getSelection() {
//		if (tableViewer == null || tableViewer.getControl().isDisposed()) {
//			return null;
//		}
//		return ((IStructuredSelection) tableViewer.getSelection());
//	}
//
//	protected final Shell getShell() {
//		if (tableViewer == null || tableViewer.getControl().isDisposed()) {
//			return null;
//		}
//		return tableViewer.getControl().getShell();
//	}
//
//	protected void remove() {
//		remove(tableViewer);
//	}
//
//	protected void remove(TableViewer viewer) {
//		HostNameContentProvider antContentProvider = (HostNameContentProvider) viewer.getContentProvider();
//		IStructuredSelection sel = (IStructuredSelection) viewer.getSelection();
//		Iterator<?> itr = sel.iterator();
//		while (itr.hasNext()) {
//			antContentProvider.remove(itr.next());
//		}
//	}
//
//	protected void setInput(List<?> inputs) {
//		if (tableViewer == null || tableViewer.getControl().isDisposed()) {
//			return;
//		}
//		tableViewer.setInput(inputs);
//		tableSelectionChanged((IStructuredSelection) tableViewer.getSelection());
//	}
//
//	protected final void updateContent(Object element) {
//		if (tableViewer == null || tableViewer.getControl().isDisposed()) {
//			return;
//		}
//		tableViewer.update(element, null);
//	}
//
//	protected Composite createContents(Composite top) {
//		//PlatformUI.getWorkbench().getHelpSystem().setHelp(top, getHelpContextId());
//		GridLayout layout = new GridLayout();
//		layout.numColumns = 2;
//		layout.marginHeight = 2;
//		layout.marginWidth = 2;
//		top.setLayout(layout);
//
//		top.setLayoutData(new GridData(GridData.FILL_BOTH));
//
//		createTable(top);
//		createButtonGroup(top);
//
//		return top;
//	}
//
//	protected FieldEditorPreferencePage getPreferencePage() {
//		return preferencePage;
//	}
//
//	protected TableViewer getTableViewer() {
//		return tableViewer;
//	}
//
//	protected void tableSelectionChanged(IStructuredSelection newSelection) {
//		int size = newSelection.size();
//		boolean enabled = true;
//
//		Iterator<?> itr = newSelection.iterator();
//		while (itr.hasNext()) {
//			Object element = itr.next();
////			if (element instanceof AntObject) {
////				AntObject antObject = (AntObject) element;
////				if (antObject.isDefault()) {
////					enabled = false;
////					break;
////				}
////			}
//		}
//		editButton.setEnabled(enabled && size == 1);
//		removeButton.setEnabled(enabled && size > 0);
//	}
//
//	protected abstract void edit(IStructuredSelection selection);
//	protected abstract void add();
//}
