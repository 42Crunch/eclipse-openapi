package com.crunch42.openapi.parser.tree;

import com.crunch42.openapi.parser.pointer.Location;
import com.crunch42.openapi.parser.pointer.LocationUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONValue;

import java.util.Iterator;

public class TreeJSONParser extends TreeParser {

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
    protected Iterator<String> getSortedKeysIterator(Object parent) {
        return ((JSONObject) parent).toJsonMap().keySet().stream().sorted().iterator();
    }

    @Override
    protected Object getObjectByKey(Object parent, String key) {
        return ((JSONObject) parent).toJsonMap().get(key);
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
    protected Object getChild(Object entry) {
        return entry;
    }

    @Override
    protected String getStringValue(Object entry) {
        return (String) ((JSONValue) entry).getValue();
    }
}
