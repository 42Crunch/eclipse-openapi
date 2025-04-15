package com.xliic.openapi.parser.ast;

import com.xliic.openapi.parser.ast.node.YamlNode;
import org.yaml.snakeyaml.DumperOptions;
import com.xliic.openapi.MockTestCase;

import java.io.FileNotFoundException;

import static com.xliic.openapi.TestUtils.*;

public class NodeUtilsTest extends MockTestCase {

    public void testFindYamlTopLevelNode() throws FileNotFoundException {

        final YamlNode root = loadYaml("test/testData/scalar.yaml");

        DumperOptions.ScalarStyle style = NodeUtils.getSuitableScalarStyle(root);
        assertEquals(DumperOptions.ScalarStyle.PLAIN, style);

        style = NodeUtils.getSuitableScalarStyle(root.find("/definitions"));
        assertEquals(DumperOptions.ScalarStyle.PLAIN, style);

        style = NodeUtils.getSuitableScalarStyle(root.find("/info/x-tags"));
        assertEquals(DumperOptions.ScalarStyle.PLAIN, style);

        style = NodeUtils.getSuitableScalarStyle(root.find("/info/x-apisguru-categories"));
        assertEquals(DumperOptions.ScalarStyle.DOUBLE_QUOTED, style);

        style = NodeUtils.getSuitableScalarStyle(root.find("/info/x-origin"));
        assertEquals(DumperOptions.ScalarStyle.PLAIN, style);

        style = NodeUtils.getSuitableScalarStyle(root.find("/info/x-origin2"));
        assertEquals(DumperOptions.ScalarStyle.SINGLE_QUOTED, style);

        style = NodeUtils.getSuitableScalarStyle(root.find("/paths"));
        assertEquals(DumperOptions.ScalarStyle.PLAIN, style);
    }
}
