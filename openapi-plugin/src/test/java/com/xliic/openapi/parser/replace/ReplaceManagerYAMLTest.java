package com.xliic.openapi.parser.replace;

import static com.xliic.openapi.parser.replace.ReplaceManager.replace;

import java.util.LinkedList;

import junit.framework.TestCase;

public class ReplaceManagerYAMLTest extends TestCase {

    @SuppressWarnings("serial")
	public void testReplaceValue() {
        assertEquals("foo: baz", replace("foo: bar", new LinkedList<>() {{
            add(new Replacement("/foo", "baz"));
        }}, false));
    }

    @SuppressWarnings("serial")
	public void testQuotedReplaceValue() {
        assertEquals("foo: \"baz\"", replace("foo: \"bar\"", new LinkedList<>() {{
            add(new Replacement("/foo", "baz"));
        }}, false));
        assertEquals("foo: 'baz'", replace("foo: 'bar'", new LinkedList<>() {{
            add(new Replacement("/foo", "baz"));
        }}, false));
    }

    @SuppressWarnings("serial")
	public void testUnquotedReplaceValue() {
        assertEquals("foo: true", replace("foo: false", new LinkedList<>() {{
            add(new Replacement("/foo", "true"));
        }}, false));
        assertEquals("foo: 123", replace("foo: 321", new LinkedList<>() {{
            add(new Replacement("/foo", "123"));
        }}, false));
    }

    @SuppressWarnings("serial")
	public void testMultipleReplacements() {
        assertEquals("boom: baz", replace("foo: bar", new LinkedList<>() {{
            add(new Replacement("/foo", "baz"));
            add(new Replacement("/foo", "boom", true));
        }}, false));
    }

    @SuppressWarnings("serial")
	public void testReplaceFlowValue() {
        assertEquals("foo: {\"bar\": \"boom\"}", replace("foo: {\"bar\": \"baz\"}", new LinkedList<>() {{
            add(new Replacement("/foo/bar", "boom"));
        }}, false));
    }

    @SuppressWarnings("serial")
	public void testReplaceFlowArrayValue() {
        assertEquals("foo: [\"boom\", \"baz\"]", replace("foo: [\"bar\", \"baz\"]", new LinkedList<>() {{
            add(new Replacement("/foo/0", "boom"));
        }}, false));
        assertEquals("foo: [\"bar\", \"boom\"]", replace("foo: [\"bar\", \"baz\"]", new LinkedList<>() {{
            add(new Replacement("/foo/1", "boom"));
        }}, false));
    }

    @SuppressWarnings("serial")
	public void testReplaceKey() {
        assertEquals("baz: bar", replace("foo: bar", new LinkedList<>() {{
            add(new Replacement("/foo", "baz", true));
        }}, false));
    }

    @SuppressWarnings("serial")
	public void testReplaceQuotedKey() {
        assertEquals("\"300\": bar", replace("\"200\": bar", new LinkedList<>() {{
            add(new Replacement("/200", "300", true));
        }}, false));
    }

    @SuppressWarnings("serial")
	public void testReplaceFlowKey() {
        assertEquals("foo: {\"boom\": \"baz\"}", replace("foo: {\"bar\": \"baz\"}", new LinkedList<>() {{
            add(new Replacement("/foo/bar", "boom", true));
        }}, false));
    }

    @SuppressWarnings("serial")
	public void testReplaceValueInArray() {
        String from = "foo: one\nbar:\n- one\n- two\nbaz: three";
        assertEquals("foo: one\nbar:\n- one\n- baz\nbaz: three", replace(from, new LinkedList<>() {{
            add(new Replacement("/bar/1", "baz"));
        }}, false));
        assertEquals("foo: one\nbar:\n- baz\n- two\nbaz: three", replace(from, new LinkedList<>() {{
            add(new Replacement("/bar/0", "baz"));
        }}, false));
    }
}