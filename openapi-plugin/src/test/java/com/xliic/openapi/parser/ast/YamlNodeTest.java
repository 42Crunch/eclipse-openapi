package com.xliic.openapi.parser.ast;

import static com.xliic.openapi.TestUtils.EOL_CRLF;
import static com.xliic.openapi.TestUtils.EOL_LF;
import static com.xliic.openapi.TestUtils.getTextInRange;
import static com.xliic.openapi.TestUtils.isValidTextRangeEnding;
import static com.xliic.openapi.TestUtils.loadFile;
import static com.xliic.openapi.TestUtils.loadYaml;
import static com.xliic.openapi.TestUtils.parseYaml;

import java.io.FileNotFoundException;
import java.util.List;

import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.parser.ast.node.YamlNode;
import com.xliic.openapi.MockTestCase;

public class YamlNodeTest extends MockTestCase {

    public void testFindYamlTopLevelNode() throws FileNotFoundException {

        final YamlNode root = loadYaml("test/testData/xkcd.yaml");

        Node swagger = root.find("/swagger");
        assertEquals("2.0", swagger.getValue());
        assertEquals("swagger", swagger.getKey());

        Node host = root.find("/host");
        assertEquals("xkcd.com", host.getValue());
        assertEquals("host", host.getKey());
    }

    public void testYamlGetChildren() throws FileNotFoundException {

        final YamlNode root = loadYaml("test/testData/xkcd.yaml");
        Node paths = root.find("/paths");
        List<Node> children = paths.getChildren();

        assertEquals(2, children.size());
        assertEquals("/info.0.json", children.get(0).getKey());
        assertEquals("/{comicId}/info.0.json", children.get(1).getKey());

        Node responses = root.find("/paths/~1{comicId}~1info.0.json/get/parameters");
        children = responses.getChildren();
        assertEquals(1, children.size());
        assertEquals("0", children.get(0).getKey());
    }

    public void testYamlChildrenArray() throws FileNotFoundException {

        final YamlNode root = loadYaml("test/testData/xkcd.yaml");
        Node paths = root.find("/schemes");
        List<Node> children = paths.getChildren();

        assertEquals(2, children.size());
        assertEquals("0", children.get(0).getKey());
        assertEquals("http", children.get(0).getValue());
        assertEquals("1", children.get(1).getKey());
        assertEquals("https", children.get(1).getValue());
    }

    public void testFindYamlMultipleLevelNode() throws FileNotFoundException {

        final YamlNode root = loadYaml("test/testData/xkcd.yaml");
        assertEquals("XKCD", root.find("/info/title").getValue());
        assertEquals("Fetch current comic and metadata.\n",
                root.find("/paths/~1info.0.json/get/description").getValue());
    }

    public void testYamlNodeDepth() throws FileNotFoundException {

        final YamlNode root = loadYaml("test/testData/xkcd.yaml");

        assertEquals(0, root.getDepth());
        assertEquals(1, root.find("/info").getDepth());
        assertEquals(2, root.find("/info/title").getDepth());
        assertEquals(2, root.find("/schemes/0").getDepth());
        assertEquals(4, root.find("/paths/~1info.0.json/get/description").getDepth());
    }

    public void testYamlSchemaNotNull() throws FileNotFoundException {

        final YamlNode root = loadYaml("test/testData/petstore-v3.yaml");

        assertNotNull(root.find("/paths/~1pets/get/parameters/0/schema"));
        assertNotNull(root.find("/paths/~1pets/get/responses/200"));
        assertNotNull(root.find("/paths/~1pets/get/responses/200/content/application~1json/schema"));
    }

    public void testYamlGetParent() {

        final YamlNode root = parseYaml("foo:\n  - 1\n  - 2\nbar:\n  baz: true");

        assertEquals("foo", root.find("/foo").getKey());
        assertEquals("0", root.find("/foo/0").getKey());
        assertEquals("1", root.find("/foo/1").getKey());
        assertEquals("baz", root.find("/bar/baz").getKey());

        assertEquals("foo", root.find("/foo/0").getParent().getKey());
        assertEquals("foo", root.find("/foo/1").getParent().getKey());
        assertEquals("bar", root.find("/bar/baz").getParent().getKey());
    }

    public void testYamlTopLevelList() {

        final YamlNode root = parseYaml("\n- 1\n- 2");

        assertNotNull(root.find(""));
        assertEquals("1", root.find("/0").getValue());
        assertEquals("2", root.find("/1").getValue());
    }

    public void testYamlGetJsonPointer() {

        final YamlNode root = parseYaml("foo:\n  - 1\n  - 2\nbar:\n  baz: true\nra/ro: true");

        assertEquals("", root.find("").getJsonPointer());
        assertEquals("/foo", root.find("/foo").getJsonPointer());
        assertEquals("/foo/0", root.find("/foo/0").getJsonPointer());
        assertEquals("/foo/1", root.find("/foo/1").getJsonPointer());
        assertEquals("/bar/baz", root.find("/bar/baz").getJsonPointer());
        assertEquals("/ra~1ro", root.find("/ra~1ro").getJsonPointer());
    }

    public void testYamlKeyRange() throws FileNotFoundException {

        String text = loadFile("test/testData/xkcd.yaml");
        final YamlNode root = parseYaml(text);

        Range range = root.find("/paths/~1{comicId}~1info.0.json/get/responses/200").getKeyRange();
        assertEquals("'200'", text.substring(range.getStartOffset(), range.getEndOffset()));

        range = root.find("/info/x-tags").getKeyRange();
        assertEquals("x-tags", text.substring(range.getStartOffset(), range.getEndOffset()));

        range = root.find("/paths/~1{comicId}~1info.0.json/get/parameters/0/required").getKeyRange();
        assertEquals("required", text.substring(range.getStartOffset(), range.getEndOffset()));

        assertNull(root.find("/paths/~1{comicId}~1info.0.json/get/parameters/0").getKeyRange());
    }

    public void testYamlValueRange() throws FileNotFoundException {

        String text = loadFile("test/testData/xkcd.yaml");
        final YamlNode root = parseYaml(text);

        Range range = root.find("/paths/~1{comicId}~1info.0.json/get/responses/200").getValueRange();
        String expected = "description: OK\n          schema:\n            $ref: '#/definitions/comic'";
        assertEquals(expected, getTextInRange(text, range));

        range = root.find("/info/x-tags").getValueRange();
        expected = "- humor\n    - comics\n  ";
        assertEquals(expected, getTextInRange(text, range));

        range = root.find("/paths/~1{comicId}~1info.0.json/get/parameters/0/required").getValueRange();
        expected = "true";
        assertEquals(expected, getTextInRange(text, range));

        range = root.find("/paths/~1{comicId}~1info.0.json/get/parameters/0").getValueRange();
        expected = "in: path\n          name: comicId\n          required: true\n          type: number";
        assertEquals(expected, getTextInRange(text, range));
    }

    public void testYamlNextAndPrevNode() throws FileNotFoundException {

        final YamlNode root = loadYaml("test/testData/xkcd.yaml");

        Node target = root.find("/swagger");
        assertNull(target.prev());
        assertEquals("/schemes", target.next().getJsonPointer());
        assertEquals("/swagger", target.next().prev().getJsonPointer());

        target = root.find("/schemes/0");
        assertNull(target.prev());
        assertEquals("/schemes/1", target.next().getJsonPointer());

        target = root.find("/definitions");
        assertNull(target.next());
        assertEquals("/paths", target.prev().getJsonPointer());
        assertEquals("/definitions", target.prev().next().getJsonPointer());

        target = root.find("/schemes/1");
        assertNull(target.next());
        assertEquals(target.prev().getJsonPointer(), "/schemes/0");
    }

    public void testYamlIsObjectOrArray() throws FileNotFoundException {

        final YamlNode root = loadYaml("test/testData/xkcd.yaml");

        assertTrue(root.find("/schemes").isArray());
        assertFalse(root.find("/schemes/0").isArray());
        assertFalse(root.find("/host").isArray());
        assertFalse(root.find("/info").isArray());

        assertFalse(root.find("/schemes").isObject());
        assertFalse(root.find("/schemes/0").isObject());
        assertFalse(root.find("/host").isObject());
        assertTrue(root.find("/info").isObject());
    }

    public void testYamlIsObjectOrArray2() {

        final String text =
                "a:\n" +
                " - a1: b\n" +
                " - - a2\n" +
                "   - a3";

        final YamlNode root = parseYaml(text);

        assertTrue(root.find("/a").isArray());
        assertTrue(root.find("/a/0").isObject());
        assertTrue(root.find("/a/0/a1").isScalar());

        assertTrue(root.find("/a/1").isArray());
        assertTrue(root.find("/a/1/0").isScalar());
        assertTrue(root.find("/a/1/1").isScalar());
    }

    public void testYamlFindNodeAtOffsetForTopLevelArray() {

        final String text = "- a: b\n- c: d";
        final YamlNode root = parseYaml(text);

        assertEquals(text.length(), 13);

        assertEquals("c", root.findNodeAtOffset(12).getKey());
        assertEquals("c", root.findNodeAtOffset(11).getKey());
        assertEquals("c", root.findNodeAtOffset(10).getKey());
        assertEquals("c", root.findNodeAtOffset(9).getKey());
        assertNull(root.findNodeAtOffset(8));
        assertNull(root.findNodeAtOffset(7));

        assertEquals("a", root.findNodeAtOffset(6).getKey());
        assertEquals("a", root.findNodeAtOffset(5).getKey());
        assertEquals("a", root.findNodeAtOffset(4).getKey());
        assertEquals("a", root.findNodeAtOffset(3).getKey());
        assertEquals("a", root.findNodeAtOffset(2).getKey());
        assertNull(root.findNodeAtOffset(1));
        assertNull(root.findNodeAtOffset(0));
    }

    public void testYamlFindNodeAtOffsetForTopLevelObject() {

        final String text = "a:\n - b: c";
        final YamlNode root = parseYaml(text);

        assertEquals(10, text.length());

        assertEquals("b", root.findNodeAtOffset(9).getKey());
        assertEquals("c", root.findNodeAtOffset(9).getValue());
        assertEquals("b", root.findNodeAtOffset(8).getKey());
        assertEquals("b", root.findNodeAtOffset(7).getKey());
        assertEquals("b", root.findNodeAtOffset(6).getKey());

        assertEquals("a", root.findNodeAtOffset(5).getKey());
        assertEquals("a", root.findNodeAtOffset(4).getKey());
        assertEquals("a", root.findNodeAtOffset(3).getKey());
        assertEquals("a", root.findNodeAtOffset(2).getKey());
        assertEquals("a", root.findNodeAtOffset(1).getKey());
        assertEquals("a", root.findNodeAtOffset(0).getKey());
    }
    public void testYamlEndingLF() throws FileNotFoundException {
        final String text = loadFile("test/testData/crlf.yaml", EOL_LF);
        assertFalse(text.contains(EOL_CRLF));
        final YamlNode root = parseYaml(text);
        assertTrue(isValidTextRangeEnding(root, text, "/paths/~1v2/get/responses/203/content" +
                "/application~1json/examples/bar/value/version/xxx"));
        assertTrue(isValidTextRangeEnding(root, text, "/paths/~1v2/get/responses/203/content"));
        assertTrue(isValidTextRangeEnding(root, text, "/paths/~1v2/get/responses/203"));
        assertTrue(isValidTextRangeEnding(root, text, "/paths/~1v2/get/responses"));
        assertTrue(isValidTextRangeEnding(root, text, "/info"));
        assertTrue(isValidTextRangeEnding(root, text, "/paths"));
    }

    public void testYamlEndingCRLF() throws FileNotFoundException {
        final String text = loadFile("test/testData/crlf.yaml", EOL_CRLF);
        assertTrue(text.contains(EOL_CRLF));
        final YamlNode root = parseYaml(text);
        assertTrue(isValidTextRangeEnding(root, text, "/paths/~1v2/get/responses/203/content/" +
                "application~1json/examples/bar/value/version/xxx"));
        assertTrue(isValidTextRangeEnding(root, text, "/paths/~1v2/get/responses/203/content"));
        assertTrue(isValidTextRangeEnding(root, text, "/paths/~1v2/get/responses/203"));
        assertTrue(isValidTextRangeEnding(root, text, "/paths/~1v2/get/responses"));
        assertTrue(isValidTextRangeEnding(root, text, "/info"));
        assertTrue(isValidTextRangeEnding(root, text, "/paths"));
    }
}
