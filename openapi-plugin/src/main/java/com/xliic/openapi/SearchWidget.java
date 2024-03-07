package com.xliic.openapi;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.FocusEvent;
import org.eclipse.swt.events.FocusListener;
import org.eclipse.swt.events.PaintEvent;
import org.eclipse.swt.events.PaintListener;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.events.SelectionListener;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Rectangle;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.widgets.ToolBar;
import org.eclipse.swt.widgets.ToolItem;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.actionSystem.ToggleAction;
import com.xliic.core.project.Project;
import com.xliic.core.ui.SwtUtils;
import com.xliic.openapi.webapp.messages.ChangeTheme;

public abstract class SearchWidget {

	public static final String ACTION_MATCH_CASE = "Match case";
	public static final String ACTION_MATCH_WORD = "Word";
	public static final String ACTION_MATCH_REGEX = "Regex";

	private static final Image SEARCH_ICON = OpenAPIImages.Search.createImage();
	private static final Image CLOSE_ICON = OpenAPIImages.SearchClose.createImage();
	
	private static final Image MATCH_CASE_ICON = OpenAPIImages.MatchCase.createImage();
	private static final Image MATCH_WORD_ICON = OpenAPIImages.MatchWord.createImage();
	private static final Image MATCH_REGEX_ICON = OpenAPIImages.MatchRegex.createImage();
	
	private static final Image MATCH_CASE_SEL_ICON = OpenAPIImages.MatchCaseSelected.createImage();
	private static final Image MATCH_WORD_SEL_ICON = OpenAPIImages.MatchWordSelected.createImage();
	private static final Image MATCH_REGEX_SEL_ICON = OpenAPIImages.MatchRegexSelected.createImage();
	
	private final Text searchField;
	private ToolItem closeSearchBtn = null;
    private boolean ignoreTextChanged = false;
    private final Color searchFieldColor;
	private final List<ToggleAction> matchActions = new LinkedList<>();
	private final Map<String, Boolean> matchSelections = new HashMap<>();
	private final Map<ToolItem, ToggleAction> matchItems = new HashMap<>();
	
	public SearchWidget(@NotNull Project project, @NotNull Composite parent, @Nullable String tooltip, boolean addExtraActions) {

		boolean isLight = ChangeTheme.isLightTheme();
		Composite panel = new Composite(parent, isLight ? SWT.BORDER : SWT.NONE);
		panel.setBackground(parent.getBackground());
        panel.setLayout(SwtUtils.getGridLayout(3 + (addExtraActions ? 1 : 0), isLight ? 2 : 4));
        searchFieldColor = SwtUtils.getLighterColor(parent.getBackground());
        
        // Icon
        Label searchIcon = new Label(panel, SWT.NO_BACKGROUND);
        searchIcon.setLayoutData(SwtUtils.getGridDataForIcon(2));
        searchIcon.setImage(SEARCH_ICON);
        
        // Search field        
        searchField = new Text(panel, SWT.SEARCH);
        searchField.setLayoutData(SwtUtils.getGridDataFillBoth());
        if (tooltip != null) {
        	searchField.setToolTipText(tooltip);	
        }
        searchField.addModifyListener(e -> {
        	if (closeSearchBtn != null) {
        		closeSearchBtn.setEnabled(!StringUtils.isEmpty(searchField.getText()));
        	}
            if (ignoreTextChanged) {
                ignoreTextChanged = false;
            } else {
            	searchTextChanged(searchField.getText());
            }
        });
        if (!isLight) {
            searchField.addPaintListener(new PaintListener() {
            	@Override
                public void paintControl(PaintEvent e) {
                	searchField.setBackground(searchFieldColor);
                	if (searchField.isFocusControl()) {
            			Rectangle area = searchField.getClientArea();
            			e.gc.drawFocus(area.x, area.y, area.width, area.height);
                	}
                }
            });
            searchField.addFocusListener(new FocusListener() {
            	@Override
        		public void focusGained(FocusEvent e) {
            		searchField.redraw();
        		}
            	@Override
        		public void focusLost(FocusEvent e) {
            		searchField.redraw();
        		}
        	});
        }
        
        // ToolBar with actions
        ToolBar toolBar = new ToolBar(panel, SWT.FLAT);

        // Close action
        closeSearchBtn = new ToolItem(toolBar, SWT.PUSH);
        closeSearchBtn.setImage(CLOSE_ICON);
        closeSearchBtn.setEnabled(!StringUtils.isEmpty(searchField.getText()));
        closeSearchBtn.addSelectionListener(new SelectionListener() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				searchField.setText("");
			}
			@Override
			public void widgetDefaultSelected(SelectionEvent e) {
			}
        });
        
        // Match actions
        if (addExtraActions) {
        	new ToolItem(toolBar, SWT.SEPARATOR | SWT.HORIZONTAL);
        	setExtraActions(matchActions);
        	for (ToggleAction action : matchActions) {
            	ToolItem item = new ToolItem(toolBar, SWT.PUSH);
            	final String id = action.getText();
            	boolean isSelected = action.isSelected(new AnJActionEvent(action));
            	matchSelections.put(id, isSelected);
            	item.setImage(getActionImage(id, isSelected));
            	item.setToolTipText(id);
            	item.addSelectionListener(new SelectionListener() {
					@Override
					public void widgetSelected(SelectionEvent e) {
						boolean mySelection = !matchSelections.get(id);
						item.setImage(getActionImage(id, mySelection));
						matchSelections.put(id, mySelection);
						action.setSelected(new AnJActionEvent(action), mySelection);
					}
					@Override
					public void widgetDefaultSelected(SelectionEvent e) {
					}
            	});
            	matchItems.put(item, action);
        	}
        }
	}

    protected void setExtraActions(List<ToggleAction> actions) {
    }

    protected abstract void searchTextChanged(@NotNull String text);
	
    public void clean() {
        ignoreTextChanged = true;
        searchField.setText("");
    	for (Map.Entry<ToolItem, ToggleAction> entry : matchItems.entrySet()) {
        	final String id = entry.getValue().getText();
        	matchSelections.put(id, false);
        	entry.getKey().setImage(getActionImage(id, false));
    	}
    }

    public void setEditable(boolean editable) {
    	if (closeSearchBtn != null) {
    		closeSearchBtn.setEnabled(editable);
    	}
    	if (searchField != null) {
    		searchField.setEditable(editable);
    		searchField.setEnabled(editable);
    	}
    	for (ToolItem item : matchItems.keySet()) {
    		item.setEnabled(editable);
    	}
    }
    
    private static Image getActionImage(String id, boolean isSelected) {
    	if (ACTION_MATCH_CASE.equals(id)) {
    		return isSelected ? MATCH_CASE_SEL_ICON : MATCH_CASE_ICON;	
    	} else if (ACTION_MATCH_WORD.equals(id)) {
    		return isSelected ? MATCH_WORD_SEL_ICON : MATCH_WORD_ICON;	
    	} else if (ACTION_MATCH_REGEX.equals(id)) {
    		return isSelected ? MATCH_REGEX_SEL_ICON : MATCH_REGEX_ICON;	
    	}
    	return null;
    }
}
