package com.xliic.openapi;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;
import java.util.stream.Stream;

import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.ParserYamlAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.FastNode;
import com.xliic.openapi.parser.ast.node.JsonNode;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.parser.ast.node.YamlNode;
import com.xliic.openapi.utils.Utils;

public class TestUtils {

    public static final String EOL_LF = "\n";
    public static final String EOL_CRLF = "\r\n";

    private final static String CURRENT_PATH = Paths.get(".").toAbsolutePath().normalize().toString();

    public static YamlNode loadYaml(String fileName) throws FileNotFoundException {
        return parseYaml(loadFile(fileName));
    }

    public static FastNode loadFastJson(String fileName) throws FileNotFoundException {
        return parseFastJson(loadFile(fileName));
    }

    public static FastNode parseFastJson(String text) {
        return (FastNode) Utils.getJsonAST(text);
    }
    
    public static JsonNode loadJson(String fileName) throws FileNotFoundException {
        return parseJson(loadFile(fileName));
    }

    public static JsonNode parseJson(String text) {
        ParserJsonAST parser = new ParserJsonAST();
        return (JsonNode) parser.parse(text);
    }

    public static YamlNode parseYaml(String text) {
        ParserYamlAST parser = new ParserYamlAST();
        return (YamlNode) parser.parse(text);
    }

    public static String loadFile(String fileName) throws FileNotFoundException {
        return loadFile(fileName, EOL_LF);
    }

    @SuppressWarnings("resource")
	public static String loadFile(String fileName, String eol) throws FileNotFoundException {
    	String joinPath = CURRENT_PATH.endsWith("src") ? "/" : "/src/";
        File file = new File(CURRENT_PATH + joinPath + fileName);
        InputStream inputStream = new FileInputStream(file);
        Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
        StringBuilder builder = new StringBuilder();
        stream.forEach(line -> builder.append(line).append(eol));
        return builder.toString();
    }

    public static String getTextInRange(String text, Range range) {
        return text.substring(range.getStartOffset(), range.getEndOffset()).replace(EOL_CRLF, EOL_LF);
    }

    public static String textAsOneLine(String text) {
        return text.replace(" ", "").replace(EOL_LF, "");
    }

    public static boolean isValidTextRangeEnding(Node root, String text, String pointer) {
        Node target = root.find(pointer);
        Range range = target.getRange();
        final int endOffset = range.getEndOffset();
        byte[] bytes = text.substring(range.getStartOffset(), endOffset).getBytes();
        // Check ending char
        byte ch = bytes[bytes.length - 1];
        if (ch == Range.ASCII_CR || ch == Range.ASCII_LF) {
            return false;
        }
        // No more chars to the right
        if (endOffset == text.length() - 1) {
            return true;
        }
        // Check the next char belongs to EOL
        ch = text.substring(endOffset, endOffset + 1).getBytes()[0];
        if (text.contains(EOL_CRLF)) {
            return ch == Range.ASCII_CR;
        } else {
            return ch == Range.ASCII_LF;
        }
    }
}
