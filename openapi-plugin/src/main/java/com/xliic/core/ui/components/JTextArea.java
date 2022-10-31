package com.xliic.core.ui.components;

import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;
import javax.swing.text.Element;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.runtime.Assert;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Text;

public class JTextArea implements Validator {

    private static final int DEFAULT_HEIGTH_CHARS = 8;
    private static final int DEFAULT_WEIGTH_CHARS = 50;
    private static final int UNLIMITED = -1;

    private Text textWidget;
    private String text;
    private ModifyListener validator;
    private Color bkgColor;

    public JTextArea(JPanel parent) {
        this(DEFAULT_WEIGTH_CHARS, DEFAULT_HEIGTH_CHARS, parent.getComposite());
    }

    public JTextArea(Composite parent) {
        this(DEFAULT_WEIGTH_CHARS, DEFAULT_HEIGTH_CHARS, parent);
    }

    public JTextArea(int widthInChars, int heigthInChars, JPanel parent) {
        this(widthInChars, heigthInChars, parent.getComposite());
    }

    public JTextArea(int widthInChars, int heigthInChars, Composite parent) {
        textWidget = new Text(parent, SWT.BORDER | SWT.MULTI | SWT.V_SCROLL | SWT.WRAP);
        textWidget.setFont(parent.getFont());
        setLayout(widthInChars, heigthInChars);
        textWidget.addDisposeListener(event -> {
            text = getText();
            if (validator != null) {
                removeValidationListener();
            }
            textWidget = null;
        });
    }

    public void setText(String t) {
        textWidget.setText(t);
    }

    public String getText() {
        return textWidget == null ? text : textWidget.getText();
    }

    public String getStripText() {
        return StringUtils.strip(getText(), " \n");
    }

    public void setEnabled(boolean enabled) {
        textWidget.setEnabled(enabled);
    }

    public Document getDocument() {
        return new Document();
    }

    public class Document {
        public void addDocumentListener(DocumentListener listener) {
            textWidget.addModifyListener(new ModifyListener() {
                @Override
                public void modifyText(ModifyEvent e) {
                    listener.changedUpdate(new DocumentEvent() {
                        @Override
                        public int getOffset() {
                            return 0;
                        }

                        @Override
                        public int getLength() {
                            return 0;
                        }

                        @Override
                        public javax.swing.text.Document getDocument() {
                            return null;
                        }

                        @Override
                        public EventType getType() {
                            return null;
                        }

                        @Override
                        public ElementChange getChange(Element elem) {
                            return null;
                        }
                    });
                }
            });
        }
    }

    private void setLayout(int widthInChars, int heigthInChars) {
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
        gd.horizontalIndent = 10;
        textWidget.setLayoutData(gd);
    }

    public void addModifyListener(ModifyListener listener) {
        textWidget.addModifyListener(listener);
    }

    public void removeModifyListener(ModifyListener listener) {
        textWidget.removeModifyListener(listener);
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
    public void addValidationListener(ValidationListener listener) {
        Assert.isTrue(validator == null);
        validator = new ModifyListener() {
            @Override
            public void modifyText(ModifyEvent e) {
                listener.validate();
            }
        };
        addModifyListener(validator);
        bkgColor = textWidget.getBackground();
    }

    @Override
    public void removeValidationListener() {
        Assert.isNotNull(validator);
        removeModifyListener(validator);
        validator = null;
        bkgColor = null;
    }
}
