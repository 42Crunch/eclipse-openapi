package com.xliic.openapi.quickfix;

import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.MockTestCase;

import java.io.FileNotFoundException;

import static com.xliic.openapi.TestUtils.loadJson;
import static com.xliic.openapi.TestUtils.textAsOneLine;
import static com.xliic.openapi.quickfix.schema.SchemaGenerator.generateSchema;

public class SchemaGenerateTest extends MockTestCase {

    public void testGenerateSchema1() throws FileNotFoundException {
        final Node root = loadJson("test/testData/schema/schema-tc1.json");
        String schema = generateSchema(root).toString();
        assertFalse(schema.contains("undefined"));
        final Node output = loadJson("test/testData/schema/schema-tc1-output.json");
        assertEquals(textAsOneLine(output.dump()), schema);
    }

    public void testGenerateSchema2() throws FileNotFoundException {
        final Node root = loadJson("test/testData/schema/schema-tc2.json");
        String schema = generateSchema(root).toString();
        assertFalse(schema.contains("undefined"));
        final Node output = loadJson("test/testData/schema/schema-tc2-output.json");
        assertEquals(textAsOneLine(output.dump()), schema);
    }

    public void testGenerateSchema3() throws FileNotFoundException {
        final Node root = loadJson("test/testData/schema/schema-tc3.json");
        String schema = generateSchema(root).toString();
        assertFalse(schema.contains("undefined"));
        final Node output = loadJson("test/testData/schema/schema-tc3-output.json");
        assertEquals(textAsOneLine(output.dump()), schema);
    }

    public void testGenerateSchema4() throws FileNotFoundException {
        final Node root = loadJson("test/testData/schema/schema-tc4.json");
        String schema = generateSchema(root).toString();
        assertFalse(schema.contains("undefined"));
        final Node output = loadJson("test/testData/schema/schema-tc4-output.json");
        assertEquals(textAsOneLine(output.dump()), schema);
    }
}
