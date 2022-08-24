package com.xliic.openapi.bundler;

public class BundleError {

    private final String rootFileName;
    private final String sourceFileName;
    private final String sourcePointer;
    private final String message;

    public BundleError(String rootFileName, String sourceFileName, String sourcePointer, String message) {
        this.rootFileName = rootFileName;
        this.sourceFileName = sourceFileName;
        this.sourcePointer = sourcePointer;
        this.message = message;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        BundleError that = (BundleError) o;

        if (!sourceFileName.equals(that.sourceFileName))
            return false;
        if (!sourcePointer.equals(that.sourcePointer))
            return false;
        return message.equals(that.message);
    }

    @Override
    public int hashCode() {
        int result = sourceFileName.hashCode();
        result = 31 * result + sourcePointer.hashCode();
        result = 31 * result + message.hashCode();
        return result;
    }

    public String getRootFileName() {
        return rootFileName;
    }

    public String getSourceFileName() {
        return sourceFileName;
    }

    public String getSourcePointer() {
        return sourcePointer;
    }

    public String getMessage() {
        return message;
    }
}
