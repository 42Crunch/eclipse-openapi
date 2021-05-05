package com.crunch42.openapi.parser.tree;

import com.crunch42.openapi.parser.pointer.Location;
import com.crunch42.openapi.parser.pointer.LocationUtils;
import org.snakeyaml.engine.v2.api.Load;
import org.snakeyaml.engine.v2.api.LoadSettings;
import org.snakeyaml.engine.v2.constructor.BaseConstructor;
import org.snakeyaml.engine.v2.nodes.*;

import java.util.*;

public class TreeYAMLParser extends TreeParser {

    private final Load load;

    public TreeYAMLParser() {
        LoadSettings settings = LoadSettings.builder().setDefaultMap(initSize -> new LinkedHashMap<>()).build();
        load = new Load(settings, new BaseConstructor(settings) {
            public Object constructSingleDocument(Optional<Node> optionalNode) {
                return optionalNode.orElse(null);
            }
        });
    }

    @Override
    protected boolean isMap(Object parent) {
        return (parent instanceof MappingNode) && (((MappingNode) parent).getNodeType() == NodeType.MAPPING);
    }

    @Override
    protected boolean isList(Object parent) {
        return (parent instanceof SequenceNode) && (((SequenceNode) parent).getNodeType() == NodeType.SEQUENCE);
    }

    @Override
    protected Object getRootFromText(String text) {
        return load.loadFromString(text);
    }

    @Override
    protected Iterator<String> getSortedKeysIterator(Object parent) {
        Set<String> keySet = new HashSet<>();
        for (NodeTuple nodeTuple : ((MappingNode) parent).getValue()) {
            keySet.add(((ScalarNode) nodeTuple.getKeyNode()).getValue());
        }
        return keySet.stream().sorted().iterator();
    }

    @Override
    protected Object getObjectByKey(Object parent, String key) {
        for (NodeTuple nodeTuple : ((MappingNode) parent).getValue()) {
            if (key.equals(((ScalarNode) nodeTuple.getKeyNode()).getValue())) {
                return nodeTuple;
            }
        }
        return null;
    }

    @Override
    protected Iterator<Object> getIterator(Object parent) {
        LinkedList<Object> list = new LinkedList<>(((SequenceNode) parent).getValue());
        return list.iterator();
    }

    @Override
    protected Location getLocation(Object entry) {    	
    	if (CRLF_EOL) {
        	return LocationUtils.getLocationForYAMLEntry(entry).toYAMLLocationForCrLfEOL();
    	}
    	else {
    		return LocationUtils.getLocationForYAMLEntry(entry);
    	}
    }

    @Override
    protected Object getChild(Object entry) {
        return (entry instanceof NodeTuple) ? ((NodeTuple) entry).getValueNode() : entry;
    }

    @Override
    protected String getStringValue(Object entry) {
        return ((ScalarNode) entry).getValue();
    }
}
