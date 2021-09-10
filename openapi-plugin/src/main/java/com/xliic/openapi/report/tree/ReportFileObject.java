package com.xliic.openapi.report.tree;

import org.eclipse.core.resources.IFile;

import com.xliic.idea.file.VirtualFile;

public class ReportFileObject {

	private String fileName;
	private VirtualFile file;

	public ReportFileObject(String fileName, IFile file) {
		this.fileName = fileName;
		this.file = new VirtualFile(file);
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

	public void setFileWithFileName(VirtualFile file, String fileName) {
		this.file = file;
		setFileName(fileName);
	}

	public boolean hasFile(IFile file) {
		return this.file.equalsToIFile(file);
	}

	public String getShortFileName() {
		String shortName = file.getPath();
		if (shortName.startsWith("/")) {
			shortName = shortName.replaceFirst("/", "");
		}
		return shortName;
	}
}
