package com.xliic.core.ui;

import org.eclipse.jface.viewers.DelegatingStyledCellLabelProvider;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.StyledCellLabelProvider;
import org.eclipse.jface.viewers.StyledString;
import org.eclipse.swt.graphics.Image;
import org.jetbrains.annotations.Nls;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.EclipseUtil;
import com.xliic.openapi.FontStyler;

public abstract class ColoredTreeCellRenderer extends StyledCellLabelProvider 
	implements DelegatingStyledCellLabelProvider.IStyledLabelProvider, ILabelProvider {
	
	private final static StyledString error = new StyledString("null", null);
	
	private com.xliic.core.util.Icon icon;
	private String fragment;
	private SimpleTextAttributes attributes;

	private final FontStyler boldFontStyler;
	private final FontStyler counterBoldFontStyler; // TODO: REMANE
	
	public ColoredTreeCellRenderer() {
		this.boldFontStyler = new FontStyler(EclipseUtil.getBoldFont(), null);
		this.counterBoldFontStyler = new FontStyler(EclipseUtil.getBoldFont(), StyledString.COUNTER_STYLER);
	}

    @Override
    public StyledString getStyledText(Object element) {
		fragment = null;
		attributes = null;
    	customizeCellRenderer(null, element, true, true, false, -1, false);   	
        return fragment == null ? error : new StyledString(fragment, getFontStyler(attributes)); // todo: speed up
    }
    
    @Override
    public Image getImage(Object element) {   	
    	icon = null;
    	customizeCellRenderer(null, element, true, true, false, -1, false);
    	return icon == null ? null : icon.get().createImage(); // todo: speed up
    }

    @Override
    public String getText(Object element) {
        return getStyledText(element).toString(); // todo: speed up
    }   

	public abstract void customizeCellRenderer(@NotNull Tree jTree, Object value, boolean selected, boolean expanded, boolean leaf, int row, boolean hasFocus);
	
	protected final void setIcon(@Nullable com.xliic.core.util.Icon icon) {
		this.icon = icon;
	}
	
	protected final void append(@NotNull @Nls String fragment, @NotNull SimpleTextAttributes attributes) {
		this.fragment = fragment;
		this.attributes = attributes;
	}
	
	private FontStyler getFontStyler(SimpleTextAttributes attributes) {
		if (attributes == SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES) {
			return boldFontStyler;
		} else if (attributes == SimpleTextAttributes.GRAYED_ATTRIBUTES) {
			return counterBoldFontStyler;
		}
		return null;
	}
}
