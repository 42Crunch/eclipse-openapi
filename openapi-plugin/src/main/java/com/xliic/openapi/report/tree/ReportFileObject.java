package com.xliic.openapi.report.tree;

import org.eclipse.core.resources.IFile;

import com.xliic.openapi.utils.OpenAPIUtils;

public class ReportFileObject {

	private String fileName;

	public ReportFileObject(String fileName) {
		this.fileName = fileName;
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

	public void setFileWithFileName(String fileName) {
		setFileName(fileName);
	}

	public String getShortFileName(String projectPath) {
		IFile file = OpenAPIUtils.getIFile(fileName);
		String shortName = file.getFullPath().toPortableString();
		if (shortName.startsWith("/")) {
			shortName = shortName.replaceFirst("/", "");
		}
		return shortName;
	}
}
