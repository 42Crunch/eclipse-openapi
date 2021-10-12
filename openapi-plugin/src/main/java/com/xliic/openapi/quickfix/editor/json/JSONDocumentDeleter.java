package com.xliic.openapi.quickfix.editor.json;

import java.util.List;

import com.xliic.core.editor.Editor;
import com.xliic.core.util.DocumentUtil;
import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.DocumentUpdate;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;

public class JSONDocumentDeleter extends DocumentUpdater {

	public JSONDocumentDeleter(Editor editor, ParserAST parser, List<FixItem> fixItems) {
		super(editor, parser, fixItems);
	}

	@Override
	public DocumentUpdate process(FixItem item) {

		Node target = root.find(item.getAbsolutePointer());
		Range range = target.getRange();
		int start = range.getStartOffset();
		int end = range.getEndOffset();

		if (target.next() != null) {
			end = target.next().getRange().getStartOffset();
		} else if (target.prev() != null) {
			start = getSafeEndOffset(target.prev().getRange().getEndOffset());
			end = getSafeEndOffset(end);
		} else {
			if (hasNoAlphabeticCharBeforeOffset(start)) {
				start = DocumentUtil.getLineStartOffset(start, document);
			}
			end = includeEOL(getSafeEndOffset(end));
		}
		return new DocumentUpdate(item, createMarker(start, end), null);
	}

	@Override
	public void apply(DocumentUpdate update) {
		document.deleteString(update.getMarker().getStartOffset(), update.getMarker().getEndOffset());
	}
}
