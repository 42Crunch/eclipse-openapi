package com.xliic.openapi.quickfix;

import junit.framework.TestCase;

public class FixTitleTest extends TestCase {

    public void testTitle1() {
        FixTitle title = new FixTitle();
        title.update("Create 'a' property");
        title.update("Create 'b' property");
        title.update("Create 'c' property");
        assertEquals("Create 'a', 'b', 'c' properties", title.toString());
    }

    public void testTitle2() {
        FixTitle title = new FixTitle();
        title.update("Create 'a' property");
        title.update("Create 'b' property");
        title.update("Create '403' response");
        title.update("Create '404' response");
        assertEquals("Create 'a', 'b' properties, '403', '404' responses", title.toString());
    }

    public void testTitle3() {
        FixTitle title = new FixTitle();
        title.update("Create 'a' property");
        title.update("Create 'b' property");
        title.update("Set 'required' property to true");
        title.update("Create '403' response");
        title.update("Create '404' response");
        assertEquals("Create 'a', 'b' properties, set 'required' property to true, create '403', '404' responses", title.toString());
    }

    public void testTitle4() {
        FixTitle title = new FixTitle();
        title.update("Create 'a' property");
        title.update("Bla bla bla bla");
        title.update("Set smth");
        title.update("Foo");
        assertEquals("Create 'a' property, bla bla bla bla, set smth, foo", title.toString());
    }

    public void testTitle5() {
        FixTitle title = new FixTitle();
        title.update("Create 'a', 'b' properties");
        title.update("Create 'c' property");
        assertEquals("Create 'a', 'b', 'c' properties", title.toString());
    }

    public void testTitle6() {
        FixTitle title = new FixTitle();
        title.update("Create 'a' property");
        title.update("Create 'b', 'c' properties");
        assertEquals("Create 'a', 'b', 'c' properties", title.toString());
    }

    public void testTitle7() {
        FixTitle title = new FixTitle();
        title.update("Create 'a', 'b' properties");
        title.update("Create 'c', 'd' properties");
        assertEquals("Create 'a', 'b', 'c', 'd' properties", title.toString());
    }
}