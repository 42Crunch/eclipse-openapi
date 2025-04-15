package com.xliic.openapi;

import com.xliic.openapi.outline.dmtn.DMTNConverter;
import com.xliic.openapi.outline.node.BaseNode;
import com.xliic.openapi.outline.node.RootNode;
import com.xliic.openapi.parser.ast.node.JsonNode;

import javax.swing.tree.DefaultMutableTreeNode;
import java.io.FileNotFoundException;
import com.xliic.openapi.MockTestCase;

import static com.xliic.openapi.TestUtils.loadFile;
import static com.xliic.openapi.TestUtils.loadJson;

public class DMTNConverterTest extends MockTestCase {

    public void testV3Stress() throws FileNotFoundException {
        final JsonNode root = loadJson("test/testData/dmtn/v3-stress.json");
        DMTNConverter converter = new DMTNConverter();
        StringBuilder builder = new StringBuilder();
        long t1 = System.nanoTime();
        final DefaultMutableTreeNode res = converter.convert(root);
        long t2 = System.nanoTime();
        dfs(res, builder);
        String expected = loadFile("test/testData/dmtn/v3-stress.result.txt");
        assertEquals(expected ,builder.toString());
        dumpDelay(t1, t2);
    }

    public void testV31v2() throws FileNotFoundException {
        final JsonNode root = loadJson("test/testData/dmtn/v3.1-2.yaml");
        DMTNConverter converter = new DMTNConverter();
        StringBuilder builder = new StringBuilder();
        final DefaultMutableTreeNode res = converter.convert(root);
        dfs(res, builder);
        String expected = loadFile("test/testData/dmtn/v3.1-2.result.txt");
        assertEquals(expected ,builder.toString());
    }

    public void testV31v1() throws FileNotFoundException {
        final JsonNode root = loadJson("test/testData/dmtn/v3.1-1.yaml");
        DMTNConverter converter = new DMTNConverter();
        StringBuilder builder = new StringBuilder();
        final DefaultMutableTreeNode res = converter.convert(root);
        dfs(res, builder);
        String expected = loadFile("test/testData/dmtn/v3.1-1.result.txt");
        assertEquals(expected ,builder.toString());
    }

    public void testV3() throws FileNotFoundException {
        final JsonNode root = loadJson("test/testData/dmtn/v3.json");
        DMTNConverter converter = new DMTNConverter();
        StringBuilder builder = new StringBuilder();
        final DefaultMutableTreeNode res = converter.convert(root);
        dfs(res, builder);
        String expected = loadFile("test/testData/dmtn/v3.result.txt");
        assertEquals(expected ,builder.toString());
    }

    public void testV2() throws FileNotFoundException {
        final JsonNode root = loadJson("test/testData/dmtn/v2.json");
        DMTNConverter converter = new DMTNConverter();
        StringBuilder builder = new StringBuilder();
        final DefaultMutableTreeNode res = converter.convert(root);
        dfs(res, builder);
        String expected = loadFile("test/testData/dmtn/v2.result.txt");
        assertEquals(expected ,builder.toString());
    }

    private void dfs(DefaultMutableTreeNode node, StringBuilder builder) {
        if (node == null) {
            return;
        }
        Object o = node.getUserObject();
        if (o instanceof RootNode) {
            RootNode rootNode = (RootNode) o;
            builder.append(rootNode.getVersion()).append("\n");
            builder.append(rootNode.getChildren().size()).append("\n");
        } else {
            BaseNode baseNode = (BaseNode) o;
            builder.append(baseNode.getLevel());
            builder.append(baseNode.getName()).append("\n");
        }
        for (int i = 0; i < node.getChildCount(); i++) {
            dfs((DefaultMutableTreeNode) node.getChildAt(i), builder);
        }
    }

    private static void dumpDelay(long startTime, long endTime) {
        long duration = (endTime - startTime);
        System.out.println("Delay = " + (duration / 1000000) + " ms");
    }
}
