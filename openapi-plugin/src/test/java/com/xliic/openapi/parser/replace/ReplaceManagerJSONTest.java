package com.xliic.openapi.parser.replace;

import static com.xliic.openapi.parser.replace.ReplaceManager.replace;

import java.util.LinkedList;

import junit.framework.TestCase;

public class ReplaceManagerJSONTest extends TestCase {

    @SuppressWarnings("serial")
	public void testReplaceValue() {
        assertEquals("{\"foo\": \"baz\"}", replace("{\"foo\": \"bar\"}", new LinkedList<>() {{
            add(new Replacement("/foo", "baz"));
        }}, true));
    }

    @SuppressWarnings("serial")
    public void testUnquotedReplaceValue() {
        assertEquals("{\"foo\": true}", replace("{\"foo\": false}", new LinkedList<>() {{
            add(new Replacement("/foo", "true"));
        }}, true));
        assertEquals("{\"foo\": 123}", replace("{\"foo\": 321}", new LinkedList<>() {{
            add(new Replacement("/foo", "123"));
        }}, true));
    }

    @SuppressWarnings("serial")
    public void testMultipleReplacements() {
        assertEquals("{\"boom\": \"baz\"}", replace("{\"foo\": \"bar\"}", new LinkedList<>() {{
            add(new Replacement("/foo", "baz"));
            add(new Replacement("/foo", "boom", true));
        }}, true));
    }

    @SuppressWarnings("serial")
    public void testReplaceValueInArray() {
        assertEquals("{\"foo\": [\"boom\", \"baz\"]}",
                replace("{\"foo\": [\"bar\", \"baz\"]}", new LinkedList<>() {{
            add(new Replacement("/foo/0", "boom"));
        }}, true));
        assertEquals("{\"foo\": [\"bar\", \"boom\"]}",
                replace("{\"foo\": [\"bar\", \"baz\"]}", new LinkedList<>() {{
            add(new Replacement("/foo/1", "boom"));
        }}, true));
    }

    @SuppressWarnings("serial")
    public void testReplaceKey() {
        assertEquals("{\"baz\": \"bar\"}", replace("{\"foo\": \"bar\"}", new LinkedList<>() {{
            add(new Replacement("/foo", "baz", true));
        }}, true));
        assertEquals("{\"foo\": {\"baz\": \"baz\"}}",
                replace("{\"foo\": {\"bar\": \"baz\"}}", new LinkedList<>() {{
            add(new Replacement("/foo/bar", "baz", true));
        }}, true));
    }
}