package com.xliic.core.util;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class ImmutableMap<K, V> {

    public static <K, V> Map<K, V> of(K k1, V v1, K k2, V v2) {
    	Map<K, V> mutableMap = new HashMap<>();
        mutableMap.put(k1, v1);
        mutableMap.put(k2, v2);
        return Collections.unmodifiableMap(mutableMap);
    }
}
