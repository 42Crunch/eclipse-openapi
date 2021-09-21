package com.xliic.openapi;

import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.ParserYamlAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.JsonNode;
import com.xliic.openapi.parser.ast.node.YamlNode;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.stream.Stream;

public class TestUtils {

    public static YamlNode loadYaml(String fileName) throws FileNotFoundException {
        return parseYaml(loadFile(fileName));
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
        File file = new File(fileName);
        InputStream inputStream = new FileInputStream(file);
        Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
        StringBuilder builder = new StringBuilder();
        stream.forEach(line -> builder.append(line).append("\n"));
        return builder.toString();
    }

    public static String getTextInRange(String text, Range range) {
        return text.substring(range.getStartOffset(), range.getEndOffset()).replace("\r\n", "\n");
    }

    public static String textAsOneLine(String text) {
        return text.replace(" ", "").replace("\n", "");
    }
}
