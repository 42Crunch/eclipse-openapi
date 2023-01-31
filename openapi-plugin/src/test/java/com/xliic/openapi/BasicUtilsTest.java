package com.xliic.openapi;

import junit.framework.TestCase;
import static com.xliic.openapi.utils.Utils.convertAllTabsToSpaces;

public class BasicUtilsTest extends TestCase {
    
    public void testConvertAllTabsToSpaces() {
        assertEquals("abc", convertAllTabsToSpaces("abc", 2));
        assertEquals("ttt", convertAllTabsToSpaces("ttt", 2));
        assertEquals("abc  foo", convertAllTabsToSpaces("abc" + '\t' + "foo", 2));
        assertEquals("abc\\\\\tfoo", convertAllTabsToSpaces("abc\\\\\tfoo", 2));
        assertEquals("abc    foo\\tbaz", convertAllTabsToSpaces("abc" + '\t' + "foo\\tbaz", 4));
        String text = "{\n\t\"a\": {\n\t\t\"/b\": \".*\\td\\t\"}\n\t}\n}";
        String expText = "{\n  \"a\": {\n    \"/b\": \".*\\td\\t\"}\n  }\n}";
        assertEquals(expText, convertAllTabsToSpaces(text, 2));
        expText = "{\n   \"a\": {\n      \"/b\": \".*\\td\\t\"}\n   }\n}";
        assertEquals(expText, convertAllTabsToSpaces(text, 3));
    }
}