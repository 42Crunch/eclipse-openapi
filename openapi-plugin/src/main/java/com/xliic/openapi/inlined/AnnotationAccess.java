package com.xliic.openapi.inlined;

import org.eclipse.jface.text.source.Annotation;
import org.eclipse.jface.text.source.IAnnotationAccess;

public class AnnotationAccess implements IAnnotationAccess {

    @Override
    public Object getType(Annotation annotation) {
        return annotation.getType();
    }

    @Override
    public boolean isMultiLine(Annotation annotation) {
        return true;
    }

    @Override
    public boolean isTemporary(Annotation annotation) {
        return true;
    }
}
