package com.xliic.core.fileEditor;

import org.eclipse.jface.text.IDocument;
import org.eclipse.ui.IEditorInput;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.DocumentImpl;
import com.xliic.core.editor.ExtDocument;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;

public class FileDocumentManager {

	private final static FileDocumentManager fileDocumentManager = new FileDocumentManager();

	public static FileDocumentManager getInstance() {
		return fileDocumentManager;
	}

	@Nullable
	public VirtualFile getFile(@NotNull Document document) {
		IEditorInput input = getEditorInput(document);
		if (input != null) {
			return EclipseUtil.getVirtualFile(input);
		}
		return null;
	}

	@Nullable
	public Document getDocument(@NotNull VirtualFile file) {	
		for (IEditorInput input : EclipseUtil.getAllSupportedEditorInputs()) {
			if (file.equals(EclipseUtil.getVirtualFile(input))) {
				IDocument document = EclipseUtil.getDocument(input);
				if (document != null) {
					return new DocumentImpl(document);
				}
			}
		}
		if (file.isValid()) {
			return new ExtDocument(file);
		}
		return null;
	}

	@Nullable
	public IEditorInput getEditorInput(@NotNull Document document) {
		for (IEditorInput input : EclipseUtil.getAllSupportedEditorInputs()) {
			if (document.equals(new DocumentImpl(EclipseUtil.getDocument(input)))) {
				return input;
			}
		}
		return null;
	}
}
