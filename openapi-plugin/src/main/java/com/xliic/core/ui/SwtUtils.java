package com.xliic.core.ui;

import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;

public class SwtUtils {
	
	private static final int LIGHTER_COLOR_DELTA = 30; 
	
	private SwtUtils() {}
	
	public static GridLayout getGridLayout() {
    	GridLayout layout = new GridLayout();
    	layout.numColumns = 1;
    	layout.marginHeight = 0;
    	layout.marginWidth = 0;
    	layout.marginLeft = 0;
    	layout.marginRight = 0;
    	return layout;
	}
	
	public static GridLayout getGridLayout(int numColumns, int marginHeightAndWidth) {
    	GridLayout layout = new GridLayout();
    	layout.numColumns = numColumns;
    	layout.marginHeight = marginHeightAndWidth;
    	layout.marginWidth = marginHeightAndWidth;
    	layout.marginLeft = 0;
    	layout.marginRight = 0;
    	return layout;
	}

	public static GridData getGridDataFillBoth(boolean grabVerticalSpace) {
        return getGridDataFillBoth(grabVerticalSpace, true);
	}
	
	public static GridData getGridDataFillBoth() {
		return new GridData(GridData.FILL_BOTH);
	}

	public static GridData getGridDataFillBoth(boolean grabVerticalSpace, boolean grabHorizontalSpace) {
    	GridData gridData = new GridData();
        gridData.horizontalAlignment = GridData.FILL;
    	gridData.verticalAlignment = GridData.FILL;
        gridData.grabExcessHorizontalSpace = grabHorizontalSpace;
    	gridData.grabExcessVerticalSpace = grabVerticalSpace;
        return gridData;
	}
	
	public static GridData getGridDataForIcon(int horizontalIndent) {
    	GridData gridData = new GridData();
    	gridData.horizontalIndent = horizontalIndent;
        gridData.horizontalAlignment = GridData.HORIZONTAL_ALIGN_BEGINNING;
    	gridData.verticalAlignment = GridData.VERTICAL_ALIGN_CENTER;
        return gridData;
	}
	
	public static Color getLighterColor(Color color) {
		int red = Math.min(color.getRed() + LIGHTER_COLOR_DELTA, 255);
		int green = Math.min(color.getGreen() + LIGHTER_COLOR_DELTA, 255);
		int blue = Math.min(color.getBlue() + LIGHTER_COLOR_DELTA, 255);
		return new Color(red, green, blue);
	}
	
	public static GridLayout getGridLayoutForLinks(int numColumns) {
        GridLayout layout = new GridLayout();
        layout.numColumns = numColumns;
        layout.marginHeight = 10;
        layout.marginWidth = 10;
        layout.horizontalSpacing = 1;
        return layout;
	}
}
