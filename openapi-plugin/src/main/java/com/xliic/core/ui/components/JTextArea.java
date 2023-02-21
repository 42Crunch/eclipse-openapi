package com.xliic.core.ui.components;

import org.apache.commons.lang.StringUtils;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.FocusListener;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Text;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.DocumentAdapter;
import com.xliic.core.ui.DocumentEvent;

public class JTextArea implements JTextComponent {

    private static final int DEFAULT_HEIGTH_CHARS = 8;
    private static final int DEFAULT_WEIGTH_CHARS = 50;
    private static final int UNLIMITED = -1;

    private Text textWidget;
    private String text;
    private Color bkgColor;

    public JTextArea(JPanel parent) {
        this(DEFAULT_WEIGTH_CHARS, DEFAULT_HEIGTH_CHARS, parent.getComposite());
    }

    public JTextArea(Composite parent) {
        this(DEFAULT_WEIGTH_CHARS, DEFAULT_HEIGTH_CHARS, parent);
    }

    public JTextArea(Composite parent, String myText) {
        textWidget = new Text(parent, SWT.READ_ONLY | SWT.WRAP);
        textWidget.setFont(parent.getFont());
        textWidget.addDisposeListener(event -> {
            text = getText();
            textWidget = null;
        });
        setText(myText);
    }

    public JTextArea(int widthInChars, int heigthInChars, JPanel parent) {
        this(widthInChars, heigthInChars, parent.getComposite());
    }

    public JTextArea(int widthInChars, int heigthInChars, Composite parent) {
        textWidget = new Text(parent, SWT.BORDER | SWT.MULTI | SWT.V_SCROLL | SWT.WRAP);
        textWidget.setFont(parent.getFont());
        setLayoutData(widthInChars, heigthInChars, 10);
        textWidget.addDisposeListener(event -> {
            text = getText();
            textWidget = null;
        });
    }

    @Override
    public void setText(String t) {
        textWidget.setText(t);
    }

    @Override
    public String getText() {
        return textWidget == null ? text : textWidget.getText();
    }

    public void setEditable(boolean editable) {
        textWidget.setEditable(editable);
    }

    public String getStripText() {
        return StringUtils.strip(getText(), " \n");
    }

    @Override
    public void setEnabled(boolean enabled) {
        textWidget.setEnabled(enabled);
    }

    public void setLayoutData(int widthInChars) {
        setLayoutData(widthInChars, UNLIMITED, 0);
    }

    private void setLayoutData(int widthInChars, int heigthInChars, int horizontalIndent) {
        GridData gd = new GridData(GridData.FILL_BOTH);
        if (widthInChars != UNLIMITED || heigthInChars > 1) {
            GC gc = new GC(textWidget);
            try {
                if (widthInChars != UNLIMITED) {
                    Point extent = gc.textExtent("X");
                    gd.widthHint = widthInChars * extent.x;
                } else {
                    gd.horizontalAlignment = GridData.FILL;
                    gd.grabExcessHorizontalSpace = true;
                }
                if (heigthInChars > 1) {
                    gd.heightHint = heigthInChars * gc.getFontMetrics().getHeight();
                }
            } finally {
                gc.dispose();
            }
        } else {
            gd.horizontalAlignment = GridData.FILL;
            gd.grabExcessHorizontalSpace = true;
        }
        if (horizontalIndent > 0) {
            gd.horizontalIndent = horizontalIndent;
        }
        textWidget.setLayoutData(gd);
    }

    public void addModifyListener(ModifyListener listener) {
        textWidget.addModifyListener(listener);
    }

    public void removeModifyListener(ModifyListener listener) {
        textWidget.removeModifyListener(listener);
    }

    public void addFocusListener(FocusListener listener) {
        textWidget.addFocusListener(listener);
    }

    public void removeFocusListener(FocusListener listener) {
        textWidget.removeFocusListener(listener);
    }

    @Override
    public void setValid() {
        textWidget.setBackground(bkgColor);
        textWidget.setToolTipText(null);
    }

    @Override
    public void setInvalid(String message) {
        textWidget.setBackground(new Color(VALIDATION_ERROR_BACKGROUND));
        textWidget.setToolTipText(message);
    }

    @Override
    public Document getDocument() {
        return new Document() {

            private ModifyListener docListener = null;

            @Override
            public void addDocumentListener(@NotNull DocumentAdapter listener) {
                if (docListener == null) {
                    docListener = new ModifyListener() {
                        @Override
                        public void modifyText(ModifyEvent e) {
                            listener.textChanged(new DocumentEvent(e));
                        }
                    };
                    textWidget.addModifyListener(docListener);
                }
            }

            @Override
            public void removeDocumentListener(@NotNull DocumentAdapter listener) {
                if (docListener != null) {
                    textWidget.removeModifyListener(docListener);
                    docListener = null;
                }
            }
        };
    }
}
