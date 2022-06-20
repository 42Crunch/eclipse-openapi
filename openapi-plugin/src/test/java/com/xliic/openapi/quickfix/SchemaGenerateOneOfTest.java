package com.xliic.openapi.quickfix;

import com.google.gson.JsonObject;
import com.xliic.openapi.parser.ast.node.Node;
import junit.framework.TestCase;

import java.io.FileNotFoundException;
import java.util.LinkedList;
import java.util.List;

import static com.xliic.openapi.TestUtils.loadJson;
import static com.xliic.openapi.TestUtils.textAsOneLine;
import static com.xliic.openapi.quickfix.schema.SchemaGenerator.generateOneOfSchema;
import static com.xliic.openapi.quickfix.schema.SchemaGenerator.generateSchema;

public class SchemaGenerateOneOfTest extends TestCase {

    public void testGenerateOneOfSchema1() throws FileNotFoundException {
        final Node root = loadJson("test/testData/schema/oneof/schema-tc1.json");
        String schema = generateOneOfSchema(getSchemas(root)).toString();
        assertFalse(schema.contains("undefined"));
        final Node output = loadJson("test/testData/schema/oneof/schema-tc1-output.json");
        assertEquals(textAsOneLine(output.dump()), schema);
    }

    public void testGenerateOneOfSchema2() throws FileNotFoundException {
        final Node root = loadJson("test/testData/schema/oneof/schema-tc2.json");
        String schema = generateOneOfSchema(getSchemas(root)).toString();
        assertFalse(schema.contains("undefined"));
        final Node output = loadJson("test/testData/schema/oneof/schema-tc2-output.json");
        assertEquals(textAsOneLine(output.dump()), schema);
    }

    private List<JsonObject> getSchemas(Node parent) {
        List<JsonObject> schemas = new LinkedList<>();
        for (Node child : parent.getChildren()) {
            schemas.add(generateSchema(child));
        }
        return schemas;
    }
}
