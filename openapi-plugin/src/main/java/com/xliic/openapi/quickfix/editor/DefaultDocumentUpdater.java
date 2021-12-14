package com.xliic.openapi.quickfix.editor;

import com.xliic.core.editor.Editor;
import com.xliic.openapi.quickfix.FixItem;

public class DefaultDocumentUpdater extends DocumentUpdater {

	public DefaultDocumentUpdater(Editor editor) {
		super(editor, null, null);
	}

	@Override
	public DocumentUpdate process(FixItem item) {
		return null;
	}

	@Override
	public void apply(DocumentUpdate update) {
	}
}
