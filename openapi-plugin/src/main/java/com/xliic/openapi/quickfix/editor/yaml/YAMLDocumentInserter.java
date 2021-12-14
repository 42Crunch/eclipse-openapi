package com.xliic.openapi.quickfix.editor.yaml;

import java.util.List;

import com.xliic.core.editor.Editor;
import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.DocumentIndent;
import com.xliic.openapi.quickfix.editor.DocumentUpdate;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;

public class YAMLDocumentInserter extends DocumentUpdater {

	public YAMLDocumentInserter(Editor editor, ParserAST parser, List<FixItem> fixItems) {
		super(editor, parser, fixItems);
	}

	@Override
	public DocumentUpdate process(FixItem item) {

		Node target = root.find(item.getAbsolutePointer());
		if (target.isScalar()) {
			return null;
		}

		Node lastChild = target.getLastChild();
		if (lastChild == null) {
			return null;
		}

		Range range = lastChild.getRange();
		int start = range.getStartOffset();
		int end = getSafeEndOffset(range.getEndOffset());

		DocumentIndent indent = getBasicIndent(root);
		int padding = getCurrentIndent(start);

		if (target.isObject()) {
			String value = "\n" + shift(item.getText(), indent, padding);
			return new DocumentUpdate(item, createMarker(end), value);
		} else if (target.isArray()) {
			String value = "\n" + shift("- " + item.getText(), indent, padding, "- ".length());
			return new DocumentUpdate(item, createMarker(end), value);
		}
		return null;
	}

	@Override
	public void apply(DocumentUpdate update) {
		document.insertString(update.getMarker().getEndOffset(), update.getValue());
	}
}
