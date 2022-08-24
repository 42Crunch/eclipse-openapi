package com.xliic.core.ui.popup;

import org.eclipse.jface.dialogs.PopupDialog;
import org.eclipse.jface.text.ITextViewerExtension5;
import org.eclipse.jface.text.Position;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.jface.util.Geometry;
import org.eclipse.swt.custom.StyledText;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.graphics.Rectangle;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.editor.Editor;
import com.xliic.core.ui.components.JComponent;

public class JBPopup extends PopupDialog {

    private final ISourceViewer viewer;
    private final Position position;
    private final JComponent content;
    private Disposable disposable;

    private static final int SNAP_POSITION_UNDER_LEFT_FIELD= 2;
    private static final int SNAP_POSITION_OVER_LEFT_FIELD= 3;

    private static final int HAH = 10;
    private static final int GAP = 2;
    private static final int snapPosition = SNAP_POSITION_UNDER_LEFT_FIELD;

    public JBPopup(@NotNull Editor editor, @NotNull Position position, @NotNull JComponent content, @Nullable JComponent preferableFocusComponent) {
        super(editor.getStyledText().getShell(), PopupDialog.HOVER_SHELLSTYLE, true, false, false, false, false, null, null);
        this.viewer = editor.getSourceViewer();
        this.position = position;
        this.content = content;
        this.disposable = null;
    }

    public void showInBestPositionFor(@NotNull Editor editor) {
        open();
    }

    @Override
    public void adjustBounds() {
        getShell().setLocation(computePopupLocation());
    }

    @Override
    public Control createDialogArea(Composite parent) {
        GridLayout layout = new GridLayout(1, true);
        parent.setLayout(layout);
        if (content instanceof JBPopupMember) {
            return ((JBPopupMember) content).create(parent).getControl();
        } else {
            return null;
        }
    }

    public void cancel() {
        close();
        if (disposable != null) {
            disposable.dispose();
            disposable = null;
        }
    }

    public void registerDisposable(@NotNull Disposable disposable) {
        this.disposable = disposable;
    }

    private Point computePopupLocation() {
        ITextViewerExtension5 viewer5 = (ITextViewerExtension5) viewer;
        int widgetOffset = viewer5.modelOffset2WidgetOffset(position.offset + position.length);
        StyledText textWidget = viewer.getTextWidget();
        Point pos = textWidget.getLocationAtOffset(widgetOffset);
        Point pSize = getExtent();
        pos.y += textWidget.getLineHeight(widgetOffset) + GAP;
        pos.x += GAP;
        Point dPos = textWidget.toDisplay(pos);
        Rectangle displayBounds = textWidget.getDisplay().getClientArea();
        Rectangle dPopupRect = Geometry.createRectangle(dPos, pSize);
        Geometry.moveInside(dPopupRect, displayBounds);
        return new Point(dPopupRect.x, dPopupRect.y);
    }

    private Point getExtent() {
        Point e = getShell().getSize();
        switch (snapPosition) {
        case SNAP_POSITION_UNDER_LEFT_FIELD:
            e.y -= HAH;
            break;
        case SNAP_POSITION_OVER_LEFT_FIELD:
            e.y -= HAH + 1;
            break;
        }
        return e;
    }
}
