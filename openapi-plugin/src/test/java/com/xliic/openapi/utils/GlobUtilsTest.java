package com.xliic.openapi.utils;

import com.xliic.openapi.NodeJSTestCase;

import static com.xliic.openapi.utils.GlobUtils.isMatch;

public class GlobUtilsTest extends NodeJSTestCase {

    public void testGlobExp() {
        setPassRateThreshold(80);
        describe();
        assertAndPrintRate();
    }

    private void describe() {
        describe("issue related", () -> {
            it("should respect dots defined in glob pattern (micromatch/#23)", () -> {
                assertMatch(isMatch("z.js", "z*"));
                assertMatch(!isMatch("zzjs", "z*.js"));
                assertMatch(!isMatch("zzjs", "*z.js"));
            });
        });

        describe("single stars", () -> {
            it("should match anything except slashes and leading dots", () -> {
                assertMatch(!isMatch("a/b/c/z.js", "*.js"));
                assertMatch(!isMatch("a/b/z.js", "*.js"));
                assertMatch(!isMatch("a/z.js", "*.js"));
                assertMatch(isMatch("z.js", "*.js"));

                assertMatch(!isMatch("a/.ab", "*/*"));
                assertMatch(!isMatch(".ab", "*"));

                assertMatch(isMatch("z.js", "z*.js"));
                assertMatch(isMatch("a/z", "*/*"));
                assertMatch(isMatch("a/z.js", "*/z*.js"));
                assertMatch(isMatch("a/z.js", "a/z*.js"));

                assertMatch(isMatch("ab", "*"));
                assertMatch(isMatch("abc", "*"));

                assertMatch(!isMatch("bar", "f*"));
                assertMatch(!isMatch("foo", "*r"));
                assertMatch(!isMatch("foo", "b*"));
                assertMatch(!isMatch("foo/bar", "*"));
                assertMatch(isMatch("abc", "*c"));
                assertMatch(isMatch("abc", "a*"));
                assertMatch(isMatch("abc", "a*c"));
                assertMatch(isMatch("bar", "*r"));
                assertMatch(isMatch("bar", "b*"));
                assertMatch(isMatch("foo", "f*"));
            });

            it("should match spaces", () -> {
                assertMatch(isMatch("one abc two", "*abc*"));
                assertMatch(isMatch("a         b", "a*b"));
            });

            it("should support multiple non-consecutive stars in a path segment", () -> {
                assertMatch(!isMatch("foo", "*a*"));
                assertMatch(isMatch("bar", "*a*"));
                assertMatch(isMatch("oneabctwo", "*abc*"));
                assertMatch(!isMatch("a-b.c-d", "*-bc-*"));
                assertMatch(isMatch("a-b.c-d", "*-*.*-*"));
                assertMatch(isMatch("a-b.c-d", "*-b*c-*"));
                assertMatch(isMatch("a-b.c-d", "*-b.c-*"));
                assertMatch(isMatch("a-b.c-d", "*.*"));
                assertMatch(isMatch("a-b.c-d", "*.*-*"));
                assertMatch(isMatch("a-b.c-d", "*.*-d"));
                assertMatch(isMatch("a-b.c-d", "*.c-*"));
                assertMatch(isMatch("a-b.c-d", "*b.*d"));
                assertMatch(isMatch("a-b.c-d", "a*.c*"));
                assertMatch(isMatch("a-b.c-d", "a-*.*-d"));
                assertMatch(isMatch("a.b", "*.*"));
                assertMatch(isMatch("a.b", "*.b"));
                assertMatch(isMatch("a.b", "a.*"));
                assertMatch(isMatch("a.b", "a.b"));
            });

            it("should support multiple stars in a segment", () -> {
                assertMatch(!isMatch("a-b.c-d", "**-bc-**"));
                assertMatch(isMatch("a-b.c-d", "**-**.**-**"));
                assertMatch(isMatch("a-b.c-d", "**-b**c-**"));
                assertMatch(isMatch("a-b.c-d", "**-b.c-**"));
                assertMatch(isMatch("a-b.c-d", "**.**"));
                assertMatch(isMatch("a-b.c-d", "**.**-**"));
                assertMatch(isMatch("a-b.c-d", "**.**-d"));
                assertMatch(isMatch("a-b.c-d", "**.c-**"));
                assertMatch(isMatch("a-b.c-d", "**b.**d"));
                assertMatch(isMatch("a-b.c-d", "a**.c**"));
                assertMatch(isMatch("a-b.c-d", "a-**.**-d"));
                assertMatch(isMatch("a.b", "**.**"));
                assertMatch(isMatch("a.b", "**.b"));
                assertMatch(isMatch("a.b", "a.**"));
                assertMatch(isMatch("a.b", "a.b"));
            });

            it("should return true when one of the given patterns matches the string", () -> {
                assertMatch(isMatch("/ab", "*/*"));
                assertMatch(isMatch(".", "."));
                assertMatch(!isMatch("a/.b", "a/"));
                assertMatch(isMatch("/ab", "/*"));
                assertMatch(isMatch("/ab", "/??"));
                assertMatch(isMatch("/ab", "/?b"));
                assertMatch(isMatch("/cd", "/*"));
                assertMatch(isMatch("a", "a"));
                assertMatch(isMatch("a/.b", "a/.*"));
                assertMatch(isMatch("a/b", "?/?"));
                assertMatch(isMatch("a/b/c/d/e/j/n/p/o/z/c.md", "a/**/j/**/z/*.md"));
                assertMatch(isMatch("a/b/c/d/e/z/c.md", "a/**/z/*.md"));
                assertMatch(isMatch("a/b/c/xyz.md", "a/b/c/*.md"));
                assertMatch(isMatch("a/b/c/xyz.md", "a/b/c/*.md"));
                assertMatch(isMatch("a/b/z/.a", "a/*/z/.a"));
                assertMatch(!isMatch("a/b/z/.a", "bz"));
                assertMatch(isMatch("a/bb.bb/aa/b.b/aa/c/xyz.md", "a/**/c/*.md"));
                assertMatch(isMatch("a/bb.bb/aa/bb/aa/c/xyz.md", "a/**/c/*.md"));
                assertMatch(isMatch("a/bb.bb/c/xyz.md", "a/*/c/*.md"));
                assertMatch(isMatch("a/bb/c/xyz.md", "a/*/c/*.md"));
                assertMatch(isMatch("a/bbbb/c/xyz.md", "a/*/c/*.md"));
                assertMatch(isMatch("aaa", "*"));
                assertMatch(isMatch("ab", "*"));
                assertMatch(isMatch("ab", "ab"));
            });

            it("should return false when the path does not match the pattern", () -> {
                assertMatch(!isMatch("/ab", "*/"));
                assertMatch(!isMatch("/ab", "*/a"));
                assertMatch(!isMatch("/ab", "/"));
                assertMatch(!isMatch("/ab", "/?"));
                assertMatch(!isMatch("/ab", "/a"));
                assertMatch(!isMatch("/ab", "?/?"));
                assertMatch(!isMatch("/ab", "a/*"));
                assertMatch(!isMatch("a/.b", "a/"));
                assertMatch(!isMatch("a/b/c", "a/*"));
                assertMatch(!isMatch("a/b/c", "a/b"));
                assertMatch(!isMatch("a/b/c/d/e/z/c.md", "b/c/d/e"));
                assertMatch(!isMatch("a/b/z/.a", "b/z"));
                assertMatch(!isMatch("ab", "*/*"));
                assertMatch(!isMatch("ab", "/a"));
                assertMatch(!isMatch("ab", "a"));
                assertMatch(!isMatch("ab", "b"));
                assertMatch(!isMatch("ab", "c"));
                assertMatch(!isMatch("abcd", "ab"));
                assertMatch(!isMatch("abcd", "bc"));
                assertMatch(!isMatch("abcd", "c"));
                assertMatch(!isMatch("abcd", "cd"));
                assertMatch(!isMatch("abcd", "d"));
                assertMatch(!isMatch("abcd", "f"));
                assertMatch(!isMatch("ef", "/*"));
            });

            it("should match a path segment for each single star", () -> {
                assertMatch(!isMatch("aaa", "*/*/*"));
                assertMatch(!isMatch("aaa/bb/aa/rr", "*/*/*"));
                assertMatch(!isMatch("aaa/bba/ccc", "aaa*"));
                assertMatch(!isMatch("aaa/bba/ccc", "aaa**"));
                assertMatch(!isMatch("aaa/bba/ccc", "aaa/*"));
                assertMatch(!isMatch("aaa/bba/ccc", "aaa/*ccc"));
                assertMatch(!isMatch("aaa/bba/ccc", "aaa/*z"));
                assertMatch(!isMatch("aaa/bbb", "*/*/*"));
                assertMatch(!isMatch("ab/zzz/ejkl/hi", "*/*jk*/*i"));
                assertMatch(isMatch("aaa/bba/ccc", "*/*/*"));
                assertMatch(isMatch("aaa/bba/ccc", "aaa/**"));
                assertMatch(isMatch("aaa/bbb", "aaa/*"));
                assertMatch(isMatch("ab/zzz/ejkl/hi", "*/*z*/*/*i"));
                assertMatch(isMatch("abzzzejklhi", "*j*i"));
            });

            it("should support single globs (*)", () -> {
                assertMatch(isMatch("a", "*"));
                assertMatch(isMatch("b", "*"));
                assertMatch(!isMatch("a/a", "*"));
                assertMatch(!isMatch("a/a/a", "*"));
                assertMatch(!isMatch("a/a/b", "*"));
                assertMatch(!isMatch("a/a/a/a", "*"));
                assertMatch(!isMatch("a/a/a/a/a", "*"));

                assertMatch(!isMatch("a", "*/*"));
                assertMatch(isMatch("a/a", "*/*"));
                assertMatch(!isMatch("a/a/a", "*/*"));

                assertMatch(!isMatch("a", "*/*/*"));
                assertMatch(!isMatch("a/a", "*/*/*"));
                assertMatch(isMatch("a/a/a", "*/*/*"));
                assertMatch(!isMatch("a/a/a/a", "*/*/*"));

                assertMatch(!isMatch("a", "*/*/*/*"));
                assertMatch(!isMatch("a/a", "*/*/*/*"));
                assertMatch(!isMatch("a/a/a", "*/*/*/*"));
                assertMatch(isMatch("a/a/a/a", "*/*/*/*"));
                assertMatch(!isMatch("a/a/a/a/a", "*/*/*/*"));

                assertMatch(!isMatch("a", "*/*/*/*/*"));
                assertMatch(!isMatch("a/a", "*/*/*/*/*"));
                assertMatch(!isMatch("a/a/a", "*/*/*/*/*"));
                assertMatch(!isMatch("a/a/b", "*/*/*/*/*"));
                assertMatch(!isMatch("a/a/a/a", "*/*/*/*/*"));
                assertMatch(isMatch("a/a/a/a/a", "*/*/*/*/*"));
                assertMatch(!isMatch("a/a/a/a/a/a", "*/*/*/*/*"));

                assertMatch(!isMatch("a", "a/*"));
                assertMatch(isMatch("a/a", "a/*"));
                assertMatch(!isMatch("a/a/a", "a/*"));
                assertMatch(!isMatch("a/a/a/a", "a/*"));
                assertMatch(!isMatch("a/a/a/a/a", "a/*"));

                assertMatch(!isMatch("a", "a/*/*"));
                assertMatch(!isMatch("a/a", "a/*/*"));
                assertMatch(isMatch("a/a/a", "a/*/*"));
                assertMatch(!isMatch("b/a/a", "a/*/*"));
                assertMatch(!isMatch("a/a/a/a", "a/*/*"));
                assertMatch(!isMatch("a/a/a/a/a", "a/*/*"));

                assertMatch(!isMatch("a", "a/*/*/*"));
                assertMatch(!isMatch("a/a", "a/*/*/*"));
                assertMatch(!isMatch("a/a/a", "a/*/*/*"));
                assertMatch(isMatch("a/a/a/a", "a/*/*/*"));
                assertMatch(!isMatch("a/a/a/a/a", "a/*/*/*"));

                assertMatch(!isMatch("a", "a/*/*/*/*"));
                assertMatch(!isMatch("a/a", "a/*/*/*/*"));
                assertMatch(!isMatch("a/a/a", "a/*/*/*/*"));
                assertMatch(!isMatch("a/a/b", "a/*/*/*/*"));
                assertMatch(!isMatch("a/a/a/a", "a/*/*/*/*"));
                assertMatch(isMatch("a/a/a/a/a", "a/*/*/*/*"));

                assertMatch(!isMatch("a", "a/*/a"));
                assertMatch(!isMatch("a/a", "a/*/a"));
                assertMatch(isMatch("a/a/a", "a/*/a"));
                assertMatch(!isMatch("a/a/b", "a/*/a"));
                assertMatch(!isMatch("a/a/a/a", "a/*/a"));
                assertMatch(!isMatch("a/a/a/a/a", "a/*/a"));

                assertMatch(!isMatch("a", "a/*/b"));
                assertMatch(!isMatch("a/a", "a/*/b"));
                assertMatch(!isMatch("a/a/a", "a/*/b"));
                assertMatch(isMatch("a/a/b", "a/*/b"));
                assertMatch(!isMatch("a/a/a/a", "a/*/b"));
                assertMatch(!isMatch("a/a/a/a/a", "a/*/b"));
            });

            it("should only match a single folder per star when globstars are used", () -> {
                assertMatch(!isMatch("a", "*/**/a"));
                assertMatch(!isMatch("a/a/b", "*/**/a"));
                assertMatch(isMatch("a/a", "*/**/a"));
                assertMatch(isMatch("a/a/a", "*/**/a"));
                assertMatch(isMatch("a/a/a/a", "*/**/a"));
                assertMatch(isMatch("a/a/a/a/a", "*/**/a"));
            });

            it("should not match a trailing slash when a star is last char", () -> {
                assertMatch(!isMatch("a", "*/"));
                assertMatch(!isMatch("a", "*/*"));
                assertMatch(!isMatch("a", "a/*"));
                assertMatch(!isMatch("a/", "*/*"));
                assertMatch(!isMatch("a/", "a/*"));
                assertMatch(!isMatch("a/a", "*"));
                assertMatch(!isMatch("a/a", "*/"));
                assertMatch(!isMatch("a/x/y", "*/"));
                assertMatch(!isMatch("a/x/y", "*/*"));
                assertMatch(!isMatch("a/x/y", "a/*"));
                assertMatch(!isMatch("a/", "*"));
                assertMatch(isMatch("a/", "*"));
                assertMatch(isMatch("a", "*"));
                assertMatch(isMatch("a/", "*/"));
                assertMatch(isMatch("a/", "*{,/}"));
                assertMatch(isMatch("a/a", "*/*"));
                assertMatch(isMatch("a/a", "a/*"));
            });

            it("should work with file extensions", () -> {
                assertMatch(!isMatch("a.txt", "a/**/*.txt"));
                assertMatch(isMatch("a/x/y.txt", "a/**/*.txt"));
                assertMatch(!isMatch("a/x/y/z", "a/**/*.txt"));

                assertMatch(!isMatch("a.txt", "a/*.txt"));
                assertMatch(isMatch("a/b.txt", "a/*.txt"));
                assertMatch(!isMatch("a/x/y.txt", "a/*.txt"));
                assertMatch(!isMatch("a/x/y/z", "a/*.txt"));

                assertMatch(isMatch("a.txt", "a*.txt"));
                assertMatch(!isMatch("a/b.txt", "a*.txt"));
                assertMatch(!isMatch("a/x/y.txt", "a*.txt"));
                assertMatch(!isMatch("a/x/y/z", "a*.txt"));

                assertMatch(isMatch("a.txt", "*.txt"));
                assertMatch(!isMatch("a/b.txt", "*.txt"));
                assertMatch(!isMatch("a/x/y.txt", "*.txt"));
                assertMatch(!isMatch("a/x/y/z", "*.txt"));
            });

            it("should not match slashes when globstars are not exclusive in a path segment", () -> {
                assertMatch(!isMatch("foo/baz/bar", "foo**bar"));
                assertMatch(isMatch("foobazbar", "foo**bar"));
            });

            it("should match slashes when defined in braces", () -> {
                assertMatch(isMatch("foo", "foo{,/**}"));
            });

            it("should correctly match slashes", () -> {
                assertMatch(!isMatch("a/b", "a*"));
                assertMatch(!isMatch("a/a/bb", "a/**/b"));
                assertMatch(!isMatch("a/bb", "a/**/b"));

                assertMatch(!isMatch("foo", "*/**"));
                assertMatch(!isMatch("foo/bar", "**/"));
                assertMatch(!isMatch("foo/bar", "**/*/"));
                assertMatch(!isMatch("foo/bar", "*/*/"));
                assertMatch(!isMatch("foo/bar/", "**/*"));

                assertMatch(isMatch("/home/foo/..", "**/.."));
                assertMatch(isMatch("a", "**/a"));
                assertMatch(isMatch("a/a", "**"));
                assertMatch(isMatch("a/a", "a/**"));
                assertMatch(isMatch("a/", "a/**"));
                assertMatch(isMatch("a", "a/**"));
                assertMatch(!isMatch("a/a", "**/"));
                assertMatch(isMatch("a", "**/a/**"));
                assertMatch(isMatch("a", "a/**"));
                assertMatch(!isMatch("a/a", "**/"));
                assertMatch(isMatch("a/a", "*/**/a"));
                assertMatch(isMatch("a", "a/**"));
                assertMatch(isMatch("foo/", "*/**"));
                assertMatch(isMatch("foo/bar", "**/*"));
                assertMatch(isMatch("foo/bar", "*/*"));
                assertMatch(isMatch("foo/bar", "*/**"));
                assertMatch(isMatch("foo/bar/", "**/"));
                assertMatch(isMatch("foo/bar/", "**/*"));
                assertMatch(isMatch("foo/bar/", "**/*/"));
                assertMatch(isMatch("foo/bar/", "*/**"));
                assertMatch(isMatch("foo/bar/", "*/*/"));

                assertMatch(!isMatch("bar/baz/foo", "*/foo"));
                assertMatch(!isMatch("deep/foo/bar", "**/bar/*"));
                assertMatch(!isMatch("deep/foo/bar/baz/x", "*/bar/**"));
                assertMatch(!isMatch("ef", "/*"));
                assertMatch(!isMatch("foo/bar", "foo?bar"));
                assertMatch(!isMatch("foo/bar/baz", "**/bar*"));
                assertMatch(!isMatch("foo/bar/baz", "**/bar**"));
                assertMatch(!isMatch("foo/baz/bar", "foo**bar"));
                assertMatch(!isMatch("foo/baz/bar", "foo*bar"));
                assertMatch(isMatch("foo", "foo/**"));
                assertMatch(isMatch("/ab", "/*"));
                assertMatch(isMatch("/cd", "/*"));
                assertMatch(isMatch("/ef", "/*"));
                assertMatch(isMatch("a/b/j/c/z/x.md", "a/**/j/**/z/*.md"));
                assertMatch(isMatch("a/j/z/x.md", "a/**/j/**/z/*.md"));

                assertMatch(isMatch("bar/baz/foo", "**/foo"));
                assertMatch(isMatch("deep/foo/bar/baz", "**/bar/*"));
                assertMatch(isMatch("deep/foo/bar/baz/", "**/bar/**"));
                assertMatch(isMatch("deep/foo/bar/baz/x", "**/bar/*/*"));
                assertMatch(isMatch("foo/b/a/z/bar", "foo/**/**/bar"));
                assertMatch(isMatch("foo/b/a/z/bar", "foo/**/bar"));
                assertMatch(isMatch("foo/bar", "foo/**/**/bar"));
                assertMatch(isMatch("foo/bar", "foo/**/bar"));
                assertMatch(isMatch("foo/bar/baz/x", "*/bar/**"));
                assertMatch(isMatch("foo/baz/bar", "foo/**/**/bar"));
                assertMatch(isMatch("foo/baz/bar", "foo/**/bar"));
                assertMatch(isMatch("XXX/foo", "**/foo"));
            });

            it("should ignore leading . when defined on pattern", () -> {
                assertMatch(isMatch("ab", "./*"));
                assertMatch(!isMatch("ab", "./*/"));
                assertMatch(isMatch("ab/", "./*/"));
            });

            it("should optionally match trailing slashes with braces", () -> {
                assertMatch(isMatch("foo", "**/*"));
                assertMatch(isMatch("foo", "**/*{,/}"));
                assertMatch(isMatch("foo/", "**/*{,/}"));
                assertMatch(isMatch("foo/bar", "**/*{,/}"));
                assertMatch(isMatch("foo/bar/", "**/*{,/}"));
            });
        });
    }
}
