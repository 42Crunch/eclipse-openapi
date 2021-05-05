package com.crunch42.openapi.report.tree;

import org.eclipse.core.resources.IFile;

public class ReportFileObject {

    private String fileName;
    private IFile file;

    public ReportFileObject(String fileName, IFile file) {
        this.fileName = fileName;
        this.file = file;
    }

    @Override
    public String toString() {
        return fileName;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
    
    public void setFileWithFileName(IFile file, String fileName) {
        this.file = file;
        setFileName(fileName);
    }
    
    public boolean hasFile(IFile file) {
        return this.file.equals(file);
    }

    public String getShortFileName() {
        String shortName = file.getFullPath().toPortableString();
        if (shortName.startsWith("/")) {
            shortName = shortName.replaceFirst("/", "");
        }
        return  shortName;
    }
}
