package com.xliic.idea.file;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.project.Project;
import com.xliic.openapi.utils.OpenAPIUtils;

public class OpenFileDescriptor {

	private final VirtualFile file;
	private final int logicalLine;
	private final int logicalColumn;

	public OpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file) {
		this.file = file;
		this.logicalLine = 0;
		this.logicalColumn = 0;
	}

	public OpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file, int logicalLine, int logicalColumn) {
		this.file = file;
		this.logicalLine = logicalLine;
		this.logicalColumn = logicalColumn;
	}

	public VirtualFile getFile() {
		return file;
	}

	public void navigate(boolean requestFocus) {
		Document document = FileDocumentManager.getInstance().getDocument(file);
		if (document != null) {
			int offset = document.getLineOffset(logicalLine);
			if (offset != -1) {
				OpenAPIUtils.gotoFile(file.getIFile(), offset, 0);
				return;
			}
		}
		OpenAPIUtils.gotoFile(file.getIFile(), 0, 0);
	}
}
