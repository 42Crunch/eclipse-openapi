package com.xliic.openapi;

import junit.framework.TestCase;

public class RelativePathUtilsTest extends TestCase {

    public void testRelativePathSame() {
        assertEquals("f2.json", OpenApiUtils.getRelativePathFromTo("/f1.json", "/f2.json"));
        assertEquals("f2.json", OpenApiUtils.getRelativePathFromTo("/a/f1.json", "/a/f2.json"));
    }

    public void testRelativePathForward() {
        assertEquals("b/c/f2.json", OpenApiUtils.getRelativePathFromTo("/a/f1.json", "/a/b/c/f2.json"));
        assertEquals("b/f2.json", OpenApiUtils.getRelativePathFromTo("/a/f1.json", "/a/b/f2.json"));
        assertEquals("c/f2.json", OpenApiUtils.getRelativePathFromTo("/a/b/f1.json", "/a/b/c/f2.json"));
        assertEquals("a/b/c/f2.json", OpenApiUtils.getRelativePathFromTo("/f1.json", "/a/b/c/f2.json"));
    }

    public void testRelativePathBackward() {
        assertEquals("../../f2.json", OpenApiUtils.getRelativePathFromTo("/a/b/c/f1.json", "/a/f2.json"));
        assertEquals("../f2.json", OpenApiUtils.getRelativePathFromTo("/a/b/f1.json", "/a/f2.json"));
        assertEquals("../f2.json", OpenApiUtils.getRelativePathFromTo("/a/b/c/f1.json", "/a/b/f2.json"));
        assertEquals("../../../f2.json", OpenApiUtils.getRelativePathFromTo("/a/b/c/f1.json", "/f2.json"));
    }

    public void testRelativePathSibling() {
        assertEquals("../d/f2.json", OpenApiUtils.getRelativePathFromTo("/a/b/c/f1.json", "/a/b/d/f2.json"));
        assertEquals("../e/f2.json", OpenApiUtils.getRelativePathFromTo("/a/b/f1.json", "/a/e/f2.json"));
        assertEquals("../../e/f/f2.json", OpenApiUtils.getRelativePathFromTo("/a/b/c/d/f1.json", "/a/b/e/f/f2.json"));
        assertEquals("../../../e/f/g/f2.json",
                OpenApiUtils.getRelativePathFromTo("/a/b/c/f1.json", "/e/f/g/f2.json"));
    }

    public void testRelativePathForWindows() {
        assertEquals("f2.json", OpenApiUtils.getRelativePathFromTo("C:/a/f1.json", "C:/a/f2.json"));
        assertEquals("a/b/c/f2.json", OpenApiUtils.getRelativePathFromTo("D:/f1.json", "D:/a/b/c/f2.json"));
        assertEquals("../../../f2.json", OpenApiUtils.getRelativePathFromTo("E:/a/b/c/f1.json", "E:/f2.json"));
        assertEquals("../../../e/f/g/f2.json",
                OpenApiUtils.getRelativePathFromTo("F:/a/b/c/f1.json", "F:/e/f/g/f2.json"));
    }

    public void testRelativePathForWindowsURIPath() {
        assertEquals("f2.json", OpenApiUtils.getRelativePathFromTo("/C:/a/f1.json", "/C:/a/f2.json"));
        assertEquals("a/b/c/f2.json", OpenApiUtils.getRelativePathFromTo("/D:/f1.json", "/D:/a/b/c/f2.json"));
        assertEquals("../../../f2.json", OpenApiUtils.getRelativePathFromTo("/E:/a/b/c/f1.json", "/E:/f2.json"));
        assertEquals("../../../e/f/g/f2.json",
                OpenApiUtils.getRelativePathFromTo("/F:/a/b/c/f1.json", "/F:/e/f/g/f2.json"));
    }

    public void testRelativePathForWindowsURL() {
        assertEquals("f2.json", OpenApiUtils.getRelativePathFromTo("file:/C:/a/f1.json", "file:/C:/a/f2.json"));
        assertEquals("a/b/c/f2.json", OpenApiUtils.getRelativePathFromTo("file:/D:/f1.json", "file:/D:/a/b/c/f2.json"));
        assertEquals("../../../f2.json", OpenApiUtils.getRelativePathFromTo("file:/E:/a/b/c/f1.json", "file:/E:/f2.json"));
        assertEquals("../../../e/f/g/f2.json",
                OpenApiUtils.getRelativePathFromTo("file:/F:/a/b/c/f1.json", "file:/F:/e/f/g/f2.json"));
    }
}