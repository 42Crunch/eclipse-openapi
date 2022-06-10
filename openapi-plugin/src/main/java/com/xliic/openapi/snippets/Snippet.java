package com.xliic.openapi.snippets;

import com.xliic.core.util.ResourceUtil;
import com.xliic.openapi.OpenApiPanelKeys;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;

public class Snippet {

    private static final String PADDING_CHAR = " ";
    private static final String BASE_PATH = "snippets";

    private final static Pattern ARGUMENT = Pattern.compile("\\$\\{\\d+}");
    private final static Pattern ARGUMENT_PLACEHOLDER = Pattern.compile("\\$\\{\\d+:([^}]*)}");
    private final static Pattern ARGUMENT_LIST = Pattern.compile("\\$\\{(\\d+)\\|(.*)\\|}");

    private final String id;
    private final String name;
    private final String container;

    private final List<String> code;
    private final Map<Integer, List<String>> choices;
    private final Map<String, String> defaultArgumentToValueMap;
    private final Map<String, Integer> defaultArgumentToIndexMap;
    private final Map<String, String> lineToArgumentMap;

    private boolean startsWithTab;

    public Snippet(String id, String name) {
        this(id, name, null);
    }

    public Snippet(String id, String name, String container) {

        this.id = id;
        this.name = name;
        this.container = container;

        code = new LinkedList<>();
        choices = new LinkedHashMap<>();
        defaultArgumentToValueMap = new LinkedHashMap<>();
        defaultArgumentToIndexMap = new LinkedHashMap<>();
        lineToArgumentMap = new LinkedHashMap<>();
        startsWithTab = false;

        InputStream inputStream = ResourceUtil.getResourceAsStream(getClass().getClassLoader(), BASE_PATH, id);
        Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
        stream.forEach(this::process);

        int index = 0;
        for (Map.Entry<String, String> entry : defaultArgumentToValueMap.entrySet()) {
            defaultArgumentToIndexMap.put(entry.getKey(), index);
            index++;
        }
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean available() {
        return code.size() > 0;
    }

    public String getContainer() {
        return container;
    }

    public List<String> getChoiceList(int index) {
        return choices.get(index);
    }

    private List<String> wrapIntoParentContainer(List<String> srcCode, String name) {

        List<String> dstCode = new LinkedList<>();

        if (this.id.endsWith("Yaml")) {
            dstCode.add(name + ":\n");
            for (String s : srcCode) {
                dstCode.add("\t" + s);
            }
            dstCode.add("\n");
        }
        else {
            boolean isMap = OpenApiPanelKeys.isPanelMap(name);
            String openChar = isMap ? "{" : "[";
            String closeChar = isMap ? "}" : "]";

            dstCode.add("\"" + name + "\": " + openChar + "\n");
            for (String s : srcCode) {
                dstCode.add("\t" + s);
            }
            dstCode.add(closeChar + "\n");
        }
        return dstCode;
    }

    public String getText(SnippetLayout layout) {

        List<String> mainCode = getCodeWithFinalValues(layout.getIndexToValueMap());

        StringBuilder strCode = new StringBuilder();
        String strPadding = (layout.getPadding() <= 0) ? "" : PADDING_CHAR.repeat(layout.getPadding());
        String strPaddingFromParent = (layout.getPaddingFromParent() <= 0) ? "" :
                PADDING_CHAR.repeat(layout.getPaddingFromParent());

        List<String> finalCode = layout.isContainerExists() ? mainCode : wrapIntoParentContainer(mainCode, container);
        if (layout.getPanel() != null) {
            finalCode = wrapIntoParentContainer(finalCode, layout.getPanel());
        }

        if (this.id.endsWith("Yaml")) {
            for (String s : finalCode) {
                strCode.append(strPadding).append(s.replace("\t", strPaddingFromParent));
            }
        }
        else {
            for (String s : finalCode) {
                strCode.append(strPadding).append(s.replace("\t", strPaddingFromParent));
            }
            if (layout.isComma()) {
                int index = strCode.length() - 1;
                strCode.replace(index, index + 1,",\n");
            }
        }
        return strCode.toString();
    }

    private List<String> getCodeWithFinalValues(Map<Integer, String> indexToValueMap) {

        List<String> dstCode = new LinkedList<>();
        for (String line : code) {
            if (lineToArgumentMap.containsKey(line)) {
                String value;
                String argument = lineToArgumentMap.get(line);
                Integer index = defaultArgumentToIndexMap.get(argument);
                if (indexToValueMap == null || !indexToValueMap.containsKey(index)) {
                    value = defaultArgumentToValueMap.get(argument);
                }
                else {
                    value = indexToValueMap.get(index);
                }
                line = line.replace(argument, value);
            }
            dstCode.add(line);
        }
        return dstCode;
    }

    private String normalize(String value) {
        if (startsWithTab) {
            return value.replaceFirst("\t", "");
        }
        return value;
    }

    private void process(String line) {

        // If the very first line
        if (code.size() == 0) {
            startsWithTab = line.startsWith("\t");
        }

        Matcher matcher = ARGUMENT.matcher(line);
        if (matcher.find()) {

            String argument = matcher.group(0);
            defaultArgumentToValueMap.put(argument, "");

            String tmp = normalize(line) + "\n";
            code.add(tmp);
            lineToArgumentMap.put(tmp, argument);
            return;
        }

        matcher = ARGUMENT_PLACEHOLDER.matcher(line);
        if (matcher.find()) {

            String argument = matcher.group(0);
            String value = matcher.group(1);
            defaultArgumentToValueMap.put(argument, value);

            String tmp = normalize(line) + "\n";
            code.add(tmp);
            lineToArgumentMap.put(tmp, argument);
            return;
        }

        matcher = ARGUMENT_LIST.matcher(line);
        if (matcher.find()) {

            String argument = matcher.group(0);
            Integer id = Integer.valueOf(matcher.group(1));
            List<String> values = List.of(matcher.group(2).split(","));

            choices.put(id, values);
            defaultArgumentToValueMap.put(argument, values.get(0));

            String tmp = normalize(line) + "\n";
            code.add(tmp);
            lineToArgumentMap.put(tmp, argument);
            return;
        }
        code.add(normalize(line) + "\n");
    }
}
