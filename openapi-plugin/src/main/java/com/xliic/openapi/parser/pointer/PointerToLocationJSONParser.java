package com.xliic.openapi.parser.pointer;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.json.JSONArray;
import org.json.JSONObject;

public class PointerToLocationJSONParser extends PointerToLocationParser {

    @Override
    protected boolean isMap(Object parent) {
        return parent instanceof JSONObject;
    }

    @Override
    protected boolean isList(Object parent) {
        return parent instanceof JSONArray;
    }

    @Override
    protected Object getRootFromText(String text) {
        return JSONObject.parseWithLocation(text);
    }

    @Override
    protected Set<Map.Entry<String, Object>> getEntrySet(Object parent) {
        return ((JSONObject) parent).toJsonMap().entrySet();
    }

    @Override
    protected Iterator<Object> getIterator(Object parent) {
        return ((JSONArray) parent).iterator();
    }

    @Override
    protected Location getLocation(Object entry) {
    	if (CRLF_EOL) {
        	return LocationUtils.getLocationForJSONEntry(entry).toJSONLocationForCrLfEOL();
    	}
    	else {
    		return LocationUtils.getLocationForJSONEntry(entry);
    	}
    }

    @Override
    protected Location getRootLocation(Object entry) {
        return getLocation(entry);
    }

    @Override
    protected Object getChild(Object entry) {
        return entry;
    }
}
