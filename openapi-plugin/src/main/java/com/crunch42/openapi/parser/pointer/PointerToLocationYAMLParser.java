package com.crunch42.openapi.parser.pointer;

import org.snakeyaml.engine.v2.api.Load;
import org.snakeyaml.engine.v2.api.LoadSettings;
import org.snakeyaml.engine.v2.constructor.BaseConstructor;
import org.snakeyaml.engine.v2.exceptions.Mark;
import org.snakeyaml.engine.v2.nodes.*;

import java.util.*;

public class PointerToLocationYAMLParser extends PointerToLocationParser {

    private final Load load;

    public PointerToLocationYAMLParser() {
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
    protected Set<Map.Entry<String, Object>> getEntrySet(Object parent) {
        Set<Map.Entry<String, Object>> entrySet = new HashSet<>();
        for (NodeTuple nodeTuple : ((MappingNode) parent).getValue()) {
            String key = ((ScalarNode) nodeTuple.getKeyNode()).getValue();
            entrySet.add(new AbstractMap.SimpleEntry<>(key, nodeTuple));
        }
        return entrySet;
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
    protected Location getRootLocation(Object entry) {

        NodeTuple tuple = ((MappingNode) entry).getValue().get(0);
        Optional<Mark> startMark = tuple.getKeyNode().getStartMark();

        if (startMark.isPresent()) {
            Optional<Mark> endMark;
            int line = startMark.get().getLine();
            int column = startMark.get().getColumn();
            int startOffset = startMark.get().getPointer();
            int endOffset;

            if (tuple.getValueNode() instanceof ScalarNode) {
                endMark = tuple.getValueNode().getEndMark();
            }
            else {
                endMark = tuple.getKeyNode().getEndMark();
            }
            if (endMark.isPresent()) {
                endOffset = endMark.get().getPointer();
                Location result = new Location(line, column, startOffset, endOffset);
            	if (CRLF_EOL) {
            		result = result.toYAMLLocationForCrLfEOL();
            	}
            	return result;
            }
        }
        return new Location();
    }

    @Override
    protected Object getChild(Object entry) {
        return (entry instanceof NodeTuple) ? ((NodeTuple) entry).getValueNode() : entry;
    }
}
