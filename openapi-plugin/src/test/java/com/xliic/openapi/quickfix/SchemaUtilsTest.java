package com.xliic.openapi.quickfix;

import com.google.gson.JsonObject;
import com.xliic.openapi.parser.ast.node.JsonNode;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.schema.SchemaUtils;
import com.xliic.openapi.MockTestCase;

import java.math.BigInteger;
import java.io.FileNotFoundException;

import static com.xliic.openapi.TestUtils.*;
import static com.xliic.openapi.quickfix.schema.SchemaGenerator.generateSchema;

public class SchemaUtilsTest extends MockTestCase {

    public void testGenerateSchema1() throws FileNotFoundException {

        Node root = loadJson("test/testData/schema/schema-tc2.json");
        JsonObject schema = generateSchema(root);
        assertTrue(SchemaUtils.isEqual(schema, schema));

        JsonObject schema2 = schema.deepCopy();
        assertNotSame(schema, schema2);
        assertTrue(SchemaUtils.isEqual(schema, schema2));

        for (int i = 1; i <= 6; i++) {
            root = loadJson("test/testData/schema/utils/schema-tc2-v" + i + ".json");
            schema2 = generateSchema(root);
            assertFalse(SchemaUtils.isEqual(schema, schema2));
        }
    }

    public void testGenerateSchema2() throws FileNotFoundException {

        Node root = loadYaml("test/testData/schema/tricky/case1.yaml");
        assertSame(root, SchemaUtils.unpack(root));

        Node target = root.find("/paths/~1/get/responses/200/content/application~1json/examples/foo");
        assertSame(target, SchemaUtils.unpack(target));

        Node target2 = root.find("/paths/~1/get/responses/200/content/application~1json/examples/foo/value");
        Node target3 = SchemaUtils.unpack(target2);
        assertNotSame(target2, target3);
        assertEquals(target3.find("/a").getTypedValue(), new BigInteger("12"));
    }

    public void testGenerateSchema3() throws FileNotFoundException {

        Node root = loadYaml("test/testData/schema/tricky/case1.yaml");
        assertSame(root, SchemaUtils.unpack(root));

        Node target = root.find("/paths/~1/get/responses/300/content/application~1json/examples/foo");
        assertSame(target, SchemaUtils.unpack(target));

        Node target2 = root.find("/paths/~1/get/responses/300/content/application~1json/examples/foo/value");
        Node target3 = SchemaUtils.unpack(target2);
        assertNotSame(target2, target3);
        assertEquals(target3.find("/versions/1/links/0/href").getTypedValue(), "http://127.0.0.1:8774/v3/");
    }

    public void testGenerateSchema4() throws FileNotFoundException {

        Node root = loadYaml("test/testData/schema/tricky/case1.yaml");
        Node target = root.find("/paths/~1/get/responses/200/content/application~1json/examples/foo/value");
        String schema = generateSchema(SchemaUtils.unpack(target)).toString();

        assertFalse(schema.contains("undefined"));
        final JsonNode output = loadJson("test/testData/schema/tricky/case1-tc1-output.json");
        assertEquals(textAsOneLine(output.dump()), schema);
    }

    public void testGenerateSchema5() throws FileNotFoundException {

        Node root = loadYaml("test/testData/schema/tricky/case1.yaml");
        Node target = root.find("/paths/~1/get/responses/300/content/application~1json/examples/foo/value");
        String schema = generateSchema(SchemaUtils.unpack(target)).toString();

        assertFalse(schema.contains("undefined"));
        final JsonNode output = loadJson("test/testData/schema/tricky/case1-tc2-output.json");
        assertEquals(textAsOneLine(output.dump()), schema);
    }
}
