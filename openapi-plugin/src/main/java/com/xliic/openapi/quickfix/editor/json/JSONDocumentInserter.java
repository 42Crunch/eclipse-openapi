package com.xliic.openapi.quickfix.editor.json;

import java.util.List;

import com.xliic.core.editor.Editor;
import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.DocumentIndent;
import com.xliic.openapi.quickfix.editor.DocumentUpdate;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;

public class JSONDocumentInserter extends DocumentUpdater {

	public JSONDocumentInserter(Editor editor, ParserAST parser, List<FixItem> fixItems) {
		super(editor, parser, fixItems);
	}

	@Override
	public DocumentUpdate process(FixItem item) {

		Node target = root.find(item.getAbsolutePointer());
		if (target.isScalar()) {
			return null;
		}

		Node lastChild = target.getLastChild();
		String value = item.getText();

		// The consent is that insertion into object = insertion of the key - value pair
		if (target.isObject()) {
			if (value.startsWith("{\n\t") && value.endsWith("\n}")) {
				value = value.substring(3, value.length() - 2);
				// Replace only trailing \t, i.e. a\t\t\ta\t\ta\t -> a\t\ta\ta
				value = value.replaceAll("\t(?!\t)", "");
			}
		}

		int start, end;
		DocumentIndent indent = getBasicIndent(root);
		if (lastChild == null) {
			Range range = target.getValueRange();
			start = range.getStartOffset() + 1;
			end = start;
			int padding = getCurrentIndent(start);
			value = "\n" + shift(indent.toString() + value, indent, padding);
			if (!document.getText(getTextRange(range)).contains("\n")) {
				value += "\n";
			}
			return new DocumentUpdate(item, createMarker(end), value);
		} else {
			Range range = lastChild.getRange();
			start = range.getStartOffset();
			end = range.getEndOffset();
			int padding = getCurrentIndent(start);
			return new DocumentUpdate(item, createMarker(end), ",\n" + shift(value, indent, padding));
		}
	}

	@Override
	public void apply(DocumentUpdate update) {
		document.insertString(update.getMarker().getEndOffset(), update.getValue());
	}
}
