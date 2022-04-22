package com.xliic.openapi.quickfix.editor.json;

import java.util.List;

import com.xliic.core.editor.Editor;
import com.xliic.core.editor.RangeMarker;
import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.DocumentUpdate;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;

public class JSONDocumentKeyRenamer extends DocumentUpdater {

	public JSONDocumentKeyRenamer(Editor editor, ParserAST parser, List<FixItem> fixItems) {
		super(editor, parser, fixItems);
	}

	@Override
	public DocumentUpdate process(FixItem item) {
		Node target = root.find(item.getAbsPointer());
		Range range = target.getKeyRange();
		return new DocumentUpdate(item, createMarker(range), item.getText());
	}

	@Override
	public void apply(DocumentUpdate update) {
		RangeMarker marker = update.getMarker();
		document.replaceString(marker.getStartOffset(), marker.getEndOffset(), update.getValue());
	}
}
