package com.crunch42.openapi.report.tree.filter;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.jdt.internal.ui.dialogs.StatusInfo;
import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.jface.dialogs.StatusDialog;
import org.eclipse.jface.fieldassist.FieldDecorationRegistry;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.events.SelectionListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

import com.crunch42.openapi.OpenAPIImages;
import com.crunch42.openapi.OpenApiBundle;
import com.crunch42.openapi.report.tree.ReportManager;

@SuppressWarnings("restriction")
public class FilterDialogWrapper extends StatusDialog {
	
	private Text filterFindTextField;
	private Button resetButton;
	
	private final ReportManager manager;
	private final ShowFilterAction caller;
	private final FilterState initFilterState;

	public FilterDialogWrapper(Shell parent, ReportManager manager, ShowFilterAction caller) {
		super(parent);
		setTitle(OpenApiBundle.message("Filter Audit Problems"));
		this.manager = manager;
		this.caller = caller;
		this.initFilterState = manager.getFilterState().copy();
	}

	@Override
	protected Control createDialogArea(Composite parent) {
		
		setImage(OpenAPIImages.OpenAPIIcon.createImage());
		Composite outer = (Composite) super.createDialogArea(parent);
		initializeDialogUnits(outer);
		    
		Group main = getGroup(outer, 2, "");
		Label label = new Label(main, SWT.LEFT);
		label.setText("Filter:");
		filterFindTextField = new Text(main, SWT.BORDER);
		
		FilterState filterState = manager.getFilterState();
		filterFindTextField.setText((filterState.getSearchText() == null) ? "" : filterState.getSearchText());
		filterFindTextField.addModifyListener(event -> {
	        filterState.setSearchText(filterFindTextField.getText());
	        setOKActionEnabled(!StringUtils.isEmpty(filterFindTextField.getText()));
		});
		
		filterFindTextField.setLayoutData(getFieldGridData());
		
		Group info = getGroup(outer, 1, "Options");
        
		Button findCaseSensitive = new Button(info, SWT.CHECK);
		findCaseSensitive.setText("Case sensitive");
		findCaseSensitive.setSelection(filterState.isCaseSensitiveState());
		findCaseSensitive.addSelectionListener(new SelectionListener() {
			@Override
			public void widgetDefaultSelected(SelectionEvent e) {
			}
			@Override
			public void widgetSelected(SelectionEvent e) {
				filterState.setCaseSensitiveState(!filterState.isCaseSensitiveState());
			}
		});

		Button findWholeWords = new Button(info, SWT.CHECK);
		findWholeWords.setText("Whole word");
		findWholeWords.setSelection(filterState.isWholeWordsState());
		findWholeWords.addSelectionListener(new SelectionListener() {
			@Override
			public void widgetDefaultSelected(SelectionEvent e) {
			}
			@Override
			public void widgetSelected(SelectionEvent e) {
				filterState.setWholeWordsState(!filterState.isWholeWordsState());
			}
		});

		Button findRegex = new Button(info, SWT.CHECK);		
		findRegex.setText("Regular exression");
		findRegex.setSelection(filterState.isRegexState());
		findRegex.addSelectionListener(new SelectionListener() {
			@Override
			public void widgetDefaultSelected(SelectionEvent e) {
			}
			@Override
			public void widgetSelected(SelectionEvent e) {
				filterState.setRegexState(!filterState.isRegexState());
			}
		});		
		setOKActionEnabled(false);
		return outer;
	}
	
	private void setOKActionEnabled(boolean enabled) {
		updateButtonsEnableState(new StatusInfo(enabled ? IStatus.OK : IStatus.ERROR, null));
	}
	
	private Group getGroup(Composite parent, int numColumns, String name) {
		Group main = new Group(parent, SWT.NONE);
		main.setLayoutData(new GridData(GridData.FILL_BOTH));
		GridLayout layout = new GridLayout();
		layout.numColumns = numColumns;
		layout.marginHeight = convertVerticalDLUsToPixels(IDialogConstants.VERTICAL_MARGIN);
		layout.marginWidth = convertHorizontalDLUsToPixels(IDialogConstants.HORIZONTAL_MARGIN);
		layout.verticalSpacing = convertVerticalDLUsToPixels(IDialogConstants.VERTICAL_SPACING);
		layout.horizontalSpacing = convertHorizontalDLUsToPixels(IDialogConstants.HORIZONTAL_SPACING);
		main.setLayout(layout);
		main.setText(name);
		return main;
	}

	private GridData getFieldGridData() {
		int margin = FieldDecorationRegistry.getDefault().getMaximumDecorationWidth();
		GridData data = new GridData();
		data.horizontalAlignment = SWT.FILL;
		data.widthHint = IDialogConstants.ENTRY_FIELD_WIDTH + margin;
		data.horizontalIndent = margin;
		data.grabExcessHorizontalSpace = true;
		return data;
	}

	@Override
	public boolean isResizable() {
		return true;
	}
	
	@Override
	public boolean isHelpAvailable() {
		return false;
	}
	
    @Override
    public void okPressed() {
    	manager.reloadAndRestoreExpansion();
    	caller.setChecked(true);
        super.okPressed();
    }
    
    @Override
    public void cancelPressed() {
    	FilterState filterState = manager.getFilterState();
    	filterState.set(initFilterState);
    	caller.setChecked(!StringUtils.isEmpty(filterState.getSearchText()));
        super.cancelPressed();
    }

    public void resetPressed() {
    	FilterState filterState = manager.getFilterState();
    	filterState.setCaseSensitiveState(false);
    	filterState.setWholeWordsState(false);
    	filterState.setRegexState(false);
    	filterState.setSearchText(null);
    	manager.reloadAndRestoreExpansion();
    	caller.setChecked(false);
    	super.cancelPressed();
    }
    
    @Override
    public void handleShellCloseEvent() {
    	cancelPressed();
    }
	
	@Override
	protected void createButtonsForButtonBar(Composite parent) {
		resetButton = createButton(parent, IDialogConstants.CLIENT_ID + 1, "Reset", false);
		resetButton.addSelectionListener(new SelectionListener() {
			@Override
			public void widgetDefaultSelected(SelectionEvent e) {
			}
			@Override
			public void widgetSelected(SelectionEvent e) {
				resetPressed();
			}
		});
		super.createButtonsForButtonBar(parent);
	}
}
