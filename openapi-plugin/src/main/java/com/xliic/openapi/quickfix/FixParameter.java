package com.xliic.openapi.quickfix;

import java.util.LinkedList;
import java.util.List;

import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.sources.FixSource;
import com.xliic.openapi.services.QuickFixService;

public class FixParameter {

	String name;
	String path;
	String type;
	FixSource source;
	List<Object> values;

	private FixParameter(String name, String path, String type, FixSource source, List<Object> values) {
		this.name = name;
		this.path = path;
		this.type = type;
		this.source = source;
		this.values = values;
	}

	public static FixParameter getInstance(Node node) {
		List<Object> values = new LinkedList<>();
		Node valuesRootNode = node.getChild("values");
		if (valuesRootNode != null) {
			for (Node valueNode : valuesRootNode.getChildren()) {
				values.add(valueNode.getValue());
			}
		}
		QuickFixService quickFixService = QuickFixService.getInstance();
		return new FixParameter(node.getChildValue("name"), node.getChildValue("path"), node.getChildValue("type"),
				quickFixService.getFixSourceInstance(node.getChildValue("source")), values);
	}

    public String getName() {
        return name;
    }
    
	public String getPath() {
		return path;
	}

	public FixSource getSource() {
		return source;
	}

	public boolean isKeyType() {
		return "key".equalsIgnoreCase(type);
	}
	
    public List<Object> getValues() {
        return values;
    }
}
