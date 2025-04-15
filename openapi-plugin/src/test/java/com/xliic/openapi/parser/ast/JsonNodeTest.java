package com.xliic.openapi.parser.ast;

import com.xliic.openapi.parser.ast.node.JsonNode;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.MockTestCase;

import java.io.FileNotFoundException;
import java.util.List;

import static com.xliic.openapi.TestUtils.*;

public class JsonNodeTest extends MockTestCase {

    public void testFindJsonTopLevelNode() throws FileNotFoundException {

        final JsonNode root = loadJson("test/testData/xkcd.json");

        Node swagger = root.find("/swagger");
        assertEquals("2.0", swagger.getValue());
        assertEquals("swagger", swagger.getKey());

        Node host = root.find("/host");
        assertEquals("xkcd.com", host.getValue());
        assertEquals("host", host.getKey());
    }

    public void testJsonGetChildren() throws FileNotFoundException {

        final JsonNode root = loadJson("test/testData/xkcd.json");

        Node paths = root.find("/paths");
        List<Node> children = paths.getChildren();

        assertEquals(children.size(), 2);
        assertEquals("/info.0.json", children.get(0).getKey());
        assertEquals("/{comicId}/info.0.json", children.get(1).getKey());

        Node responses = root.find("/paths/~1{comicId}~1info.0.json/get/parameters");
        children = responses.getChildren();
        assertEquals(1, children.size());
        assertEquals("0", children.get(0).getKey());
    }

    public void testJsonChildrenArray() throws FileNotFoundException {

        final JsonNode root = loadJson("test/testData/xkcd.json");
        Node paths = root.find("/schemes");
        List<Node> children = paths.getChildren();

        assertEquals(2, children.size());
        assertEquals("0", children.get(0).getKey());
        assertEquals("http", children.get(0).getValue());
        assertEquals("1", children.get(1).getKey());
        assertEquals("https", children.get(1).getValue());
    }

    public void testFindJsonMultipleLevelNode() throws FileNotFoundException {

        final JsonNode root = loadJson("test/testData/xkcd.json");
        assertEquals("XKCD", root.find("/info/title").getValue());
        assertEquals("Fetch current comic and metadata.\n",
                root.find("/paths/~1info.0.json/get/description").getValue());
    }

    public void testJsonNodeDepth() throws FileNotFoundException {

        final JsonNode root = loadJson("test/testData/xkcd.json");

        assertEquals(0, root.getDepth());
        assertEquals(1, root.find("/info").getDepth());
        assertEquals(2, root.find("/info/title").getDepth());
        assertEquals(2, root.find("/schemes/0").getDepth());
        assertEquals(4, root.find("/paths/~1info.0.json/get/description").getDepth());
    }

    public void testJsonSchemaNotNull() throws FileNotFoundException {

        final JsonNode root = loadJson("test/testData/petstore-v3.json");

        assertNotNull(root.find("/paths/~1pets/get/parameters/0/schema"));
        assertNotNull(root.find("/paths/~1pets/get/responses/200"));
        assertNotNull(root.find("/paths/~1pets/get/responses/200/content/application~1json/schema"));
    }

    public void testJsonGetParent() {

        final JsonNode root = parseJson("{\"foo\": [1,2], \"bar\": {\"baz\": true}}");

        assertEquals("foo", root.find("/foo").getKey());
        assertEquals("0", root.find("/foo/0").getKey());
        assertEquals("1", root.find("/foo/1").getKey());
        assertEquals("baz", root.find("/bar/baz").getKey());

        assertEquals("foo", root.find("/foo/0").getParent().getKey());
        assertEquals("foo", root.find("/foo/1").getParent().getKey());
        assertEquals("bar", root.find("/bar/baz").getParent().getKey());
    }

    public void testJsonTopLevelList() {

        final JsonNode root = parseJson("[1, 2]");

        assertNotNull(root.find(""));
        assertEquals("1", root.find("/0").getValue());
        assertEquals("2", root.find("/1").getValue());
    }

    public void testJsonGetJsonPointer() {

        final JsonNode root = parseJson("{\"foo\": [1,2], \"bar\": {\"baz\": true}, \"ra/ro\": true}");

        assertEquals("", root.find("").getJsonPointer());
        assertEquals("/foo", root.find("/foo").getJsonPointer());
        assertEquals("/foo/0", root.find("/foo/0").getJsonPointer());
        assertEquals("/foo/1", root.find("/foo/1").getJsonPointer());
        assertEquals("/bar/baz", root.find("/bar/baz").getJsonPointer());
        assertEquals("/ra~1ro", root.find("/ra~1ro").getJsonPointer());
    }

    public void testJsonKeyRange() throws FileNotFoundException {

        String text = loadFile("test/testData/xkcd.json");
        final JsonNode root = parseJson(text);

        Range range = root.find("/paths/~1{comicId}~1info.0.json/get/responses/200").getKeyRange();
        assertEquals("\"200\"", text.substring(range.getStartOffset(), range.getEndOffset()));

        range = root.find("/info/x-tags").getKeyRange();
        assertEquals("\"x-tags\"", text.substring(range.getStartOffset(), range.getEndOffset()));

        range = root.find("/paths/~1{comicId}~1info.0.json/get/parameters/0/required").getKeyRange();
        assertEquals("\"required\"", text.substring(range.getStartOffset(), range.getEndOffset()));

        assertNull(root.find("/paths/~1{comicId}~1info.0.json/get/parameters/0").getKeyRange());
    }

    public void testJsonValueRange() throws FileNotFoundException {

        String text = loadFile("test/testData/xhr.json");
        final JsonNode root = parseJson(text);

        Range range = root.find("/info/license/name").getValueRange();
        String expected = "\"MIT\"";
        assertEquals(expected, getTextInRange(text, range));

        range = root.find("/servers/1/url").getValueRange();
        expected = "\"https://jsonplaceholder.typicode.com\"";
        assertEquals(expected, getTextInRange(text, range));

        range = root.find("/paths/~1posts/get/responses/200").getValueRange();
        expected = "{\n            \"description\": \"OK\"\n          }";
        assertEquals(expected, getTextInRange(text, range));

        range = root.find("/servers/1").getValueRange();
        expected = "{\n      \"url\": \"https://jsonplaceholder.typicode.com\"\n    }";
        assertEquals(expected, getTextInRange(text, range));
    }

    public void testJsonNextAndPrevNode() throws FileNotFoundException {

        final JsonNode root = loadJson("test/testData/xkcd.json");

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

    public void testJsonIsObjectOrArray() throws FileNotFoundException {

        final JsonNode root = loadJson("test/testData/xkcd.json");

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
                "{\n" +
                "  \"a\": [\n" +
                "    {\n" +
                "      \"a1\": \"b\"\n" +
                "    },\n" +
                "    [\n" +
                "      \"a2\",\n" +
                "      \"a3\"\n" +
                "    ]\n" +
                "  ]\n" +
                "}";

        final JsonNode root = parseJson(text);

        assertTrue(root.find("/a").isArray());
        assertTrue(root.find("/a/0").isObject());
        assertTrue(root.find("/a/0/a1").isScalar());

        assertTrue(root.find("/a/1").isArray());
        assertTrue(root.find("/a/1/0").isScalar());
        assertTrue(root.find("/a/1/1").isScalar());
    }

    public void testJsonFindNodeAtOffsetForTopLevelArray() {

        final String text = "[ {\"a\": \"b\"}, {\"c\": \"d\"} ]";
        final JsonNode root = parseJson(text);

        assertEquals(text.length(), 26);

        assertEquals("c", root.findNodeAtOffset(23).getKey());
        assertEquals("c", root.findNodeAtOffset(19).getKey());
        assertEquals("c", root.findNodeAtOffset(15).getKey());

        assertNull(root.findNodeAtOffset(13));

        assertEquals("a", root.findNodeAtOffset(11).getKey());
        assertEquals("a", root.findNodeAtOffset(5).getKey());
        assertEquals("a", root.findNodeAtOffset(3).getKey());

        assertNull(root.findNodeAtOffset(1));
        assertNull(root.findNodeAtOffset(0));
    }

    public void testJsonFindNodeAtOffsetForTopLevelObject() {

        final String text = "\"a\": [ { \"b\": \"c\" } ]";
        final JsonNode root = parseJson(text);

        assertEquals(21, text.length());

        assertEquals("b", root.findNodeAtOffset(17).getKey());
        assertEquals("c", root.findNodeAtOffset(17).getValue());
        assertEquals("b", root.findNodeAtOffset(13).getKey());
        assertEquals("b", root.findNodeAtOffset(9).getKey());

        assertEquals("a", root.findNodeAtOffset(6).getKey());
        assertEquals("a", root.findNodeAtOffset(3).getKey());
        assertEquals("a", root.findNodeAtOffset(0).getKey());
    }
}
