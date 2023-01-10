package com.xliic.openapi.platform.scan;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.openapi.parser.ast.node.Node;
import junit.framework.TestCase;

import java.io.FileNotFoundException;

import static com.xliic.openapi.TestUtils.loadFile;
import static com.xliic.openapi.TestUtils.parseJson;

public class ScanUtilsTest extends TestCase {

    private static final ObjectMapper mapper = new ObjectMapper();

    public void testLogin() throws FileNotFoundException, JsonProcessingException {
        String text = loadFile("test/testData/tryit/input.json");
        Node root = parseJson(text);
        JsonNode actualObj = mapper.readTree(ScanUtils.extractSinglePath(text, root, "/api/v1/login"));
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/scan/output-login.json"));
        assertEquals(expectedObj, actualObj);
    }

    public void testCollections() throws FileNotFoundException, JsonProcessingException {
        String text = loadFile("test/testData/tryit/input.json");
        Node root = parseJson(text);
        JsonNode actualObj = mapper.readTree(ScanUtils.extractSinglePath(text, root, "/api/v1/collections"));
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/scan/output-collections.json"));
        assertEquals(expectedObj, actualObj);
    }

    public void testMeta() throws FileNotFoundException, JsonProcessingException {
        String text = loadFile("test/testData/tryit/input.json");
        Node root = parseJson(text);
        JsonNode actualObj = mapper.readTree(ScanUtils.extractSinglePath(text, root, "/api/v2/vault/scan/organization/{vaultId}/meta"));
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/scan/output-meta.json"));
        assertEquals(expectedObj, actualObj);
    }
}
