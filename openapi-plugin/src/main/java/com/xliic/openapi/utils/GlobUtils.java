package com.xliic.openapi.utils;

import com.xliic.openapi.GlobMatcher;

public class GlobUtils {

    private static final GlobMatcher MATCHER = new GlobMatcher();

    public static boolean isMatch(String value, String glob) {
        return MATCHER.matches(glob, value);
    }
}