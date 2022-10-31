package com.xliic.core.ui.popup;

import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;

import com.xliic.core.ui.DoubleClickListener;

public interface JBPopupMember {

    Control getControl();

    JBPopupMember create(Composite parent);

    void addDoubleClickListener(DoubleClickListener listener);
}
