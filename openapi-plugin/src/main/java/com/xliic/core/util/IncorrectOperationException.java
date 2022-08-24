package com.xliic.core.util;

@SuppressWarnings("serial")
public class IncorrectOperationException extends RuntimeException {

    public IncorrectOperationException() {
    }

    public IncorrectOperationException(String message) {
        super(message);
    }

    public IncorrectOperationException(Throwable t) {
        super(t);
    }

    public IncorrectOperationException(String message, Throwable t) {
        super(message, t);
    }
}
