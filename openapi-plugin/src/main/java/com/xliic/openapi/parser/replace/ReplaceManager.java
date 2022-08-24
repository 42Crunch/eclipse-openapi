package com.xliic.openapi.parser.replace;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.ParserYamlAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;

public class ReplaceManager {

    private static List<String> substrings(String text, List<TextReplacement> replacements) {

        int position = 0;
        List<String> result = new LinkedList<>();
        for (TextReplacement replacement : replacements) {
            final int start = replacement.getRange().getStartOffset();
            final int end = replacement.getRange().getEndOffset();
            result.add(text.substring(position, start));
            result.add(text.substring(start, end));
            position = end;
        }
        result.add(text.substring(position));
        return result;
    }

    private static String replaceTextRanges(String text, List<TextReplacement> replacements) {

        Collections.sort(replacements);
        List<String> chunks = substrings(text, replacements);
        for (int i = 0; i < replacements.size(); i++) {

            String replacement = replacements.get(i).getValue();
            final int target = i * 2 + 1;
            String original = chunks.get(target);
            String quote = "";

            if (original.startsWith("\"") && original.endsWith("\"")) {
                quote = "\"";
            } else if (original.startsWith("'") && original.endsWith("'")) {
                quote = "'";
            }
            chunks.set(target, quote + replacement + quote);
        }
        return String.join("", chunks);
    }

    public static String replace(String text, List<Replacement> replacements, boolean isJson) {

        ParserAST parser = isJson ? new ParserJsonAST() : new ParserYamlAST();
        Node root = parser.parse(text);
        List<TextReplacement> textReplacements = new LinkedList<>();
        for (Replacement replacement : replacements) {
            Node node = root.find(replacement.getPointer());
            Range range = replacement.isReplaceKey() ? node.getKeyRange() : node.getValueRange();
            textReplacements.add(new TextReplacement(range, replacement.getValue()));
        }
        return replaceTextRanges(text, textReplacements);
    }
}
