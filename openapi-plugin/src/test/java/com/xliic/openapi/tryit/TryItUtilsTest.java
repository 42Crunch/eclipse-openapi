package com.xliic.openapi.tryit;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.MockTestCase;

import java.io.FileNotFoundException;

import static com.xliic.openapi.TestUtils.loadFile;
import static com.xliic.openapi.TestUtils.parseJson;

public class TryItUtilsTest extends MockTestCase {

    private static final ObjectMapper mapper = new ObjectMapper();

    public void testLogin() throws FileNotFoundException, JsonProcessingException {
        String text = loadFile("test/testData/tryit/input.json");
        Node root = parseJson(text);
        JsonNode actualObj = mapper.readTree(TryItUtils.extractSingleOperation(text, root, "/api/v1/login", "post"));
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/tryit/output-login-post.json"));
        assertEquals(expectedObj, actualObj);
    }

    public void testCollectionsGet() throws FileNotFoundException, JsonProcessingException {
        String text = loadFile("test/testData/tryit/input.json");
        Node root = parseJson(text);
        JsonNode actualObj = mapper.readTree(TryItUtils.extractSingleOperation(text, root, "/api/v1/collections", "get"));
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/tryit/output-collections-get.json"));
        assertEquals(expectedObj, actualObj);
    }

    public void testCollectionsPost() throws FileNotFoundException, JsonProcessingException {
        String text = loadFile("test/testData/tryit/input.json");
        Node root = parseJson(text);
        JsonNode actualObj = mapper.readTree(TryItUtils.extractSingleOperation(text, root, "/api/v1/collections", "post"));
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/tryit/output-collections-post.json"));
        assertEquals(expectedObj, actualObj);
    }

    public void testMetaGet() throws FileNotFoundException, JsonProcessingException {
        String text = loadFile("test/testData/tryit/input.json");
        Node root = parseJson(text);
        JsonNode actualObj = mapper.readTree(TryItUtils.extractSingleOperation(text, root, "/api/v2/vault/scan/organization/{vaultId}/meta", "get"));
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/tryit/output-meta-get.json"));
        assertEquals(expectedObj, actualObj);
    }

    public void testMetaPut() throws FileNotFoundException, JsonProcessingException {
        String text = loadFile("test/testData/tryit/input.json");
        Node root = parseJson(text);
        JsonNode actualObj = mapper.readTree(TryItUtils.extractSingleOperation(text, root, "/api/v2/vault/scan/organization/{vaultId}/meta", "put"));
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/tryit/output-meta-put.json"));
        assertEquals(expectedObj, actualObj);
    }

    public void testDictionariesPost() throws FileNotFoundException, JsonProcessingException {
        String text = loadFile("test/testData/tryit/input.json");
        Node root = parseJson(text);
        JsonNode actualObj = mapper.readTree(TryItUtils.extractSingleOperation(text, root, "/api/v2/dataDictionaries", "post"));
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/tryit/output-dictionaries-post.json"));
        assertEquals(expectedObj, actualObj);
    }
}
