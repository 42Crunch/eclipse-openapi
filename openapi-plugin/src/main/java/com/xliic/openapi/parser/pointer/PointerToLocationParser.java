package com.xliic.openapi.parser.pointer;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.validation.constraints.NotNull;

import com.xliic.openapi.utils.OpenAPIUtils;

public abstract class PointerToLocationParser {

    private Map<String, Location> pointers;
    protected boolean CRLF_EOL = false;
    
    protected abstract boolean isMap(Object parent);
    protected abstract boolean isList(Object parent);
    protected abstract Object getRootFromText(String text);
    protected abstract Set<Map.Entry<String, Object>> getEntrySet(Object parent);
    protected abstract Iterator<Object> getIterator(Object parent);
    protected abstract Location getLocation(Object entry);
    protected abstract Location getRootLocation(Object entry);
    protected abstract Object getChild(Object entry);

    private void dfs(Object parent, String parentPointer) {

        if (isMap(parent)) {
            for (Map.Entry<String, Object> entry : getEntrySet(parent)) {
                String pointer = LocationUtils.pointer(parentPointer, entry.getKey());
                pointers.put(pointer, getLocation(entry.getValue()));
                dfs(getChild(entry.getValue()), pointer);
            }
        }
        else if (isList(parent)) {
            int index = 0;
            for (Iterator<Object> it = getIterator(parent); it.hasNext(); ) {
                Object o = it.next();
                String pointer = LocationUtils.pointer(parentPointer, index);
                pointers.put(pointer, getLocation(o));
                dfs(getChild(o), pointer);
                index++;
            }
        }
    }

    private void clear() {
    	CRLF_EOL = false;
        pointers = new HashMap<>();
    }

    public Map<String, Location> parse(@NotNull String text) {
        clear();
        Object root = getRootFromText(text);
        if (root != null) {
        	CRLF_EOL = OpenAPIUtils.detectCrLfEOL(text);
            pointers.put(LocationUtils.EMPTY_POINTER, getRootLocation(root));
            dfs(root, LocationUtils.EMPTY_POINTER);
        }
        return pointers;
    }
}
