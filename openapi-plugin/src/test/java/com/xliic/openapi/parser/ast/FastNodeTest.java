package com.xliic.openapi.parser.ast;

import com.xliic.openapi.parser.ast.node.FastNode;
import com.xliic.openapi.parser.ast.node.Node;
import junit.framework.TestCase;

import java.io.FileNotFoundException;
import java.util.List;

import static com.xliic.openapi.TestUtils.*;
import static org.junit.Assert.assertThrows;

public class FastNodeTest extends TestCase {

    public void testFindJsonTopLevelNode() throws FileNotFoundException {

        final FastNode root = loadFastJson("test/testData/xkcd.json");

        Node swagger = root.find("/swagger");
        assertEquals("2.0", swagger.getValue());
        assertEquals("swagger", swagger.getKey());

        Node host = root.find("/host");
        assertEquals("xkcd.com", host.getValue());
        assertEquals("host", host.getKey());
    }

    public void testJsonGetChildren() throws FileNotFoundException {

        final FastNode root = loadFastJson("test/testData/xkcd.json");

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

        final FastNode root = loadFastJson("test/testData/xkcd.json");
        Node paths = root.find("/schemes");
        List<Node> children = paths.getChildren();

        assertEquals(2, children.size());
        assertEquals("0", children.get(0).getKey());
        assertEquals("http", children.get(0).getValue());
        assertEquals("1", children.get(1).getKey());
        assertEquals("https", children.get(1).getValue());
    }

    public void testFindJsonMultipleLevelNode() throws FileNotFoundException {

        final FastNode root = loadFastJson("test/testData/xkcd.json");
        assertEquals("XKCD", root.find("/info/title").getValue());
        assertEquals("Fetch current comic and metadata.\n",
                root.find("/paths/~1info.0.json/get/description").getValue());
    }

    public void testJsonNodeDepth() throws FileNotFoundException {

        final FastNode root = loadFastJson("test/testData/xkcd.json");

        assertEquals(0, root.getDepth());
        assertEquals(1, root.find("/info").getDepth());
        assertEquals(2, root.find("/info/title").getDepth());
        assertEquals(2, root.find("/schemes/0").getDepth());
        assertEquals(4, root.find("/paths/~1info.0.json/get/description").getDepth());
    }

    public void testJsonSchemaNotNull() throws FileNotFoundException {

        final FastNode root = loadFastJson("test/testData/petstore-v3.json");

        assertNotNull(root.find("/paths/~1pets/get/parameters/0/schema"));
        assertNotNull(root.find("/paths/~1pets/get/responses/200"));
        assertNotNull(root.find("/paths/~1pets/get/responses/200/content/application~1json/schema"));
    }

    public void testJsonGetParent() {

        final FastNode root = parseFastJson("{\"foo\": [1,2], \"bar\": {\"baz\": true}}");

        assertEquals("foo", root.find("/foo").getKey());
        assertEquals("0", root.find("/foo/0").getKey());
        assertEquals("1", root.find("/foo/1").getKey());
        assertEquals("baz", root.find("/bar/baz").getKey());

        assertEquals("foo", root.find("/foo/0").getParent().getKey());
        assertEquals("foo", root.find("/foo/1").getParent().getKey());
        assertEquals("bar", root.find("/bar/baz").getParent().getKey());
    }

    public void testJsonTopLevelList() {

        final FastNode root = parseFastJson("[1, 2]");
        // Lists not supported for fast nodes
        assertNull(root);
    }

    public void testJsonGetJsonPointer() {

        final FastNode root = parseFastJson("{\"foo\": [1,2], \"bar\": {\"baz\": true}, \"ra/ro\": true}");

        assertEquals("", root.find("").getJsonPointer());
        assertEquals("/foo", root.find("/foo").getJsonPointer());
        assertEquals("/foo/0", root.find("/foo/0").getJsonPointer());
        assertEquals("/foo/1", root.find("/foo/1").getJsonPointer());
        assertEquals("/bar/baz", root.find("/bar/baz").getJsonPointer());
        assertEquals("/ra~1ro", root.find("/ra~1ro").getJsonPointer());
    }

    public void testJsonNextAndPrevNode() throws FileNotFoundException {

        final FastNode root = loadFastJson("test/testData/xkcd.json");

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

        final FastNode root = loadFastJson("test/testData/xkcd.json");

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

        final FastNode root = parseFastJson(text);

        assertTrue(root.find("/a").isArray());
        assertTrue(root.find("/a/0").isObject());
        assertTrue(root.find("/a/0/a1").isScalar());

        assertTrue(root.find("/a/1").isArray());
        assertTrue(root.find("/a/1/0").isScalar());
        assertTrue(root.find("/a/1/1").isScalar());
    }

    public void testTypes() {

        final String text =
                "{\n" +
                        "\"a\": \"foo\",\n" +
                        "\"b\": true,\n" +
                        "\"c\": 1,\n" +
                        "\"d\": 1.5,\n" +
                        "\"e\": null\n" +
                        "}";

        final FastNode root = parseFastJson(text);

        assertEquals(root.find("/a").getValue(), "foo");
        assertEquals(root.find("/b").getValue(), "true");
        assertEquals(root.find("/c").getValue(), "1");
        assertEquals(root.find("/d").getValue(), "1.5");
        assertEquals(root.find("/e").getValue(), "null");

        assertEquals(root.find("/a").getTypedValue(), "foo");
        assertEquals(root.find("/b").getTypedValue(), true);
        assertEquals(root.find("/c").getTypedValue(), 1);
        assertEquals(root.find("/d").getTypedValue(), 1.5);
        assertEquals(root.find("/e").getTypedValue(), null);
    }

    public void testNotSupported() throws FileNotFoundException {

        final FastNode root = loadFastJson("test/testData/xkcd.json");

        assertThrows(UnsupportedOperationException.class, () -> root.compareTo(root.find("/swagger")));
        assertThrows(UnsupportedOperationException.class, () -> root.find("/foo", 123));
        assertThrows(UnsupportedOperationException.class, root::getKeyRange);
        assertThrows(UnsupportedOperationException.class, root::getValueRange);
        assertThrows(UnsupportedOperationException.class, root::getRange);
        assertThrows(UnsupportedOperationException.class, root::getHighlightRange);
        assertThrows(UnsupportedOperationException.class, root::getNode);
        assertThrows(UnsupportedOperationException.class, () -> root.findNodeAtOffset(123));
        assertThrows(UnsupportedOperationException.class, root::dump);
    }
}
