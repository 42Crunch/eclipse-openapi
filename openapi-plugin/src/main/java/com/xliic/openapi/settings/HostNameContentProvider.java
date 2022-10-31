package com.xliic.openapi.settings;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.eclipse.jface.viewers.IStructuredContentProvider;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerComparator;

public class HostNameContentProvider implements IStructuredContentProvider {

    protected List<Object> elements = new ArrayList<>();
    protected TableViewer tableViewer;
    private ViewerComparator fComparator = null;
    private boolean defaultcomparator = true;

    public HostNameContentProvider(Viewer viewer) {
        tableViewer = (TableViewer) viewer;
    }

    public HostNameContentProvider(boolean defaultcomparator) {
        this.defaultcomparator = defaultcomparator;
    }

    public void add(Object o) {
        if (elements.contains(o)) {
            return;
        }
        elements.add(o);
        tableViewer.add(o);
        tableViewer.setSelection(new StructuredSelection(o), true);
    }

    @Override
    public void dispose() {
    }

    @Override
    public Object[] getElements(Object inputElement) {
        return elements.toArray();
    }

    @Override
    public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {
        tableViewer = (TableViewer) viewer;
        elements.clear();
        if (newInput != null) {
            if (defaultcomparator) {
                tableViewer.setComparator(getComparator());
            }
            List<?> list;
            if (newInput instanceof List) {
                list = ((List<?>) newInput);
            } else {
                list = Arrays.asList((Object[]) newInput);
            }
            elements.addAll(list);
        }
    }

    public void remove(Object o) {
        elements.remove(o);
        tableViewer.remove(o);
    }

    public void remove(IStructuredSelection selection) {
        Object[] array = selection.toArray();
        elements.removeAll(Arrays.asList(array));
        tableViewer.remove(array);
    }

    protected ViewerComparator getComparator() {
        if (fComparator == null) {
            fComparator = new ViewerComparator() {
                @Override
                public int compare(Viewer viewer, Object e1, Object e2) {
                    return e1.toString().compareToIgnoreCase(e2.toString());
                }
            };
        }
        return fComparator;
    }
}
