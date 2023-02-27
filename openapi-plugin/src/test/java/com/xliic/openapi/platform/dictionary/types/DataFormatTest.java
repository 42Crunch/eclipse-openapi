package com.xliic.openapi.platform.dictionary.types;

import junit.framework.TestCase;

public class DataFormatTest extends TestCase {

    public void testFinalJsonValue() {
        assertEquals("\\\"", getEscValue("\""));
        assertEquals("\\\\n", getEscValue("\\n"));
        assertEquals("xxx", getEscValue("xxx"));
        assertEquals("x\\\"x\\\"x", getEscValue("x\"x\"x"));
        assertEquals("a{5, 24}", getEscValue("a{5, 24}"));
        assertEquals("[a-z0-9]", getEscValue("[a-z0-9]"));
        assertEquals("[a-z0-9]{5, 24}", getEscValue("[a-z0-9]{5, 24}"));
        assertEquals("^[\\\\w&@#!?]{12,12}$", getEscValue("^[\\w&@#!?]{12,12}$"));
        assertEquals("^[\\\\w\\\\s\\\\.@:-]{1,255}$", getEscValue("^[\\w\\s\\.@:-]{1,255}$"));
        assertEquals("^[a-zA-Z0-9&@#!?]{1,12}$", getEscValue("^[a-zA-Z0-9&@#!?]{1,12}$"));
        assertEquals("^([a-zA-Z0-9_=]{4,})\\\\.([a-zA-Z0-9_=]{4,})\\\\.([a-zA-Z0-9_\\\\-\\\\+\\\\/=]{4,})",
                getEscValue("^([a-zA-Z0-9_=]{4,})\\.([a-zA-Z0-9_=]{4,})\\.([a-zA-Z0-9_\\-\\+\\/=]{4,})"));
    }

    private static String getEscValue(String value) {
        return (String) DataFormat.getFinalValue("pattern", value, true);
    }
}