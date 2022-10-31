package com.xliic.core.ui.popup;

import java.util.LinkedList;
import java.util.List;

import javax.swing.ListSelectionModel;

import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.graphics.Rectangle;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.TableItem;

import com.xliic.core.ui.DoubleClickListener;
import com.xliic.core.ui.components.JComponent;

public class JBList<E> implements JComponent, JBPopupMember {

    private TableViewer list;
    private final List<E> input;
    private DoubleClickListener doubleClickListener;
    public int selectionMode;

    public JBList(List<E> input) {
        this.input = new LinkedList<>(input);
    }

    @Override
    public Control getControl() {
        return list.getControl();
    }

    public void setSelectionMode(int selectionMode) {
        if (selectionMode == ListSelectionModel.SINGLE_SELECTION) {
            selectionMode = SWT.SINGLE;
        }
    }

    @SuppressWarnings("unchecked")
    public int getSelectedIndex() {
        E item = (E) list.getStructuredSelection().getFirstElement();
        return input.indexOf(item);
    }

    @Override
    public void addDoubleClickListener(DoubleClickListener listener) {
        this.doubleClickListener = listener;
    }

    @Override
    public JBPopupMember create(Composite parent) {
        list = new TableViewer(parent, SWT.NO_TRIM | selectionMode | SWT.FULL_SELECTION);
        list.getTable().setHeaderVisible(false);
        list.setContentProvider(ArrayContentProvider.getInstance());
        list.getTable().addListener(SWT.MouseDoubleClick, doubleClickListener);
        list.getTable().addListener(SWT.MouseMove, new Listener() {
            @Override
            public void handleEvent(Event event) {
                Rectangle bounds = event.getBounds();
                TableItem item = list.getTable().getItem(new Point(bounds.x, bounds.y));
                if (item != null) {
                    list.setSelection(new StructuredSelection(item.getData()));
                }
            }
        });
        list.setInput(input);
        if (!input.isEmpty()) {
            list.setSelection(new StructuredSelection(input.get(0)));
        }
        return this;
    }
}
