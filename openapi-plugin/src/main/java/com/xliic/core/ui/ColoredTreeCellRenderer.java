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

// For the same tree object getStyledText is called first and then getImage
// Use this information to minimize customizeCellRenderer invocations by caching its return data

public abstract class ColoredTreeCellRenderer extends StyledCellLabelProvider
implements DelegatingStyledCellLabelProvider.IStyledLabelProvider, ILabelProvider {

    private final static StyledString UNKNOWN_OBJECT_ERROR = new StyledString("null", null);

    private Object element;
    private StyledString styledText;
    private com.xliic.core.util.Icon icon;

    public ColoredTreeCellRenderer() {
        element = null;
    }

    @Override
    public StyledString getStyledText(Object element) {
        if (this.element != element) {
            customizeCellRenderer(element);
        }
        return styledText.length() == 0 ? UNKNOWN_OBJECT_ERROR : styledText;
    }

    @Override
    public Image getImage(Object element) {
        if (this.element != element) {
            customizeCellRenderer(element);
        }
        // Drop the cached element to handle the case where next renderer call is for the same element
        // In that case we must return actual result, not the cached one to keep consistency
        this.element = null;
        return icon == null ? null : icon.createImage();
    }

    @Override
    public String getText(Object element) {
        // Not invoked
        return getStyledText(element).toString();
    }

    public abstract void customizeCellRenderer(@NotNull Tree jTree, Object value, boolean selected,
            boolean expanded, boolean leaf, int row, boolean hasFocus);

    protected final void setIcon(@Nullable com.xliic.core.util.Icon icon) {
        this.icon = icon;
    }

    protected final void append(@NotNull @Nls String fragment) {
        styledText.append(fragment, SimpleTextAttributes.REGULAR_ATTRIBUTES);
    }

    protected final void append(@NotNull @Nls String fragment, @NotNull SimpleTextAttributes attributes) {
        styledText.append(fragment, attributes);
    }

    private void customizeCellRenderer(Object element) {
        this.element = element;
        styledText = new StyledString();
        icon = null;
        customizeCellRenderer(null, element, true, true, false, -1, false);
    }
}
