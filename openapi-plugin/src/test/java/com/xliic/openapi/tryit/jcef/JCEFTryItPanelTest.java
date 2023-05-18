package com.xliic.openapi.tryit.jcef;

import static com.xliic.openapi.TestUtils.loadFile;

import java.io.FileNotFoundException;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.openapi.utils.Utils;

import junit.framework.TestCase;

public class JCEFTryItPanelTest extends TestCase {

    private final ObjectMapper mapper = new ObjectMapper();

    @SuppressWarnings("serial")
	public void testTryItOperation() throws FileNotFoundException, JsonProcessingException {

        String oas = loadFile("test/testData/tryit/jcef/oas.json");
        String preferredBodyValue = "bah";

        Map<String, Object> payload = new HashMap<>();
        payload.put("oas", Utils.deserialize(oas, Collections.EMPTY_MAP));
        payload.put("path", "/api/register");
        payload.put("method", "post");
        payload.put("preferredMediaType", "text/plain");
        payload.put("preferredBodyValue", Utils.deserialize(preferredBodyValue, preferredBodyValue));

        Map<String, List<String>> config = new HashMap<>();
        config.put("insecureSslHostnames", new LinkedList<>());
        config.get("insecureSslHostnames").add("xxx.com");
        payload.put("config", config);

        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "tryOperation");
            put("payload", payload);
            put("prefs", new HashMap<>());
        }};

        String options = Utils.serialize(mapper, new HashMap<>() {{
            put("detail", parameters);
        }}, false);

        JsonNode actualObj = mapper.readTree(options);
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/tryit/jcef/options.json"));
        assertEquals(expectedObj, actualObj);
    }

    @SuppressWarnings("serial")
	public void testTryItOperationWithPreferredBodyValue() throws FileNotFoundException, JsonProcessingException {

        String oas = loadFile("test/testData/tryit/jcef/oas.json");
        String preferredBodyValue = loadFile("test/testData/tryit/jcef/preferredBodyValue.json");

        Map<String, Object> payload = new HashMap<>();
        payload.put("oas", Utils.deserialize(oas, Collections.EMPTY_MAP));
        payload.put("path", "/api/register");
        payload.put("method", "post");
        payload.put("preferredMediaType", "application/json");
        payload.put("preferredBodyValue", Utils.deserialize(preferredBodyValue, preferredBodyValue));

        Map<String, List<String>> config = new HashMap<>();
        config.put("insecureSslHostnames", new LinkedList<>());
        payload.put("config", config);

        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "tryOperation");
            put("payload", payload);
            put("prefs", new HashMap<>());
        }};

        String options = Utils.serialize(mapper, new HashMap<>() {{
            put("detail", parameters);
        }}, false);

        JsonNode actualObj = mapper.readTree(options);
        JsonNode expectedObj = mapper.readTree(loadFile("test/testData/tryit/jcef/options2.json"));
        assertEquals(expectedObj, actualObj);
    }
}