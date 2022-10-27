package com.xliic.openapi.platform.dictionary.quickfix;

import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.dictionary.types.DataFormat;

import java.util.List;

public class DictionaryUpdate {

    private final Node container;
    private final DataFormat dataFormat;
    private final List<Node> nodesToUpdate;
    private final List<String> propsToAdd;

    public DictionaryUpdate(Node container, DataFormat dataFormat, List<Node> nodesToUpdate, List<String> propsToAdd) {
        this.container = container;
        this.dataFormat = dataFormat;
        this.nodesToUpdate = nodesToUpdate;
        this.propsToAdd = propsToAdd;
    }

    public Node getContainer() {
        return container;
    }

    public DataFormat getDataFormat() {
        return dataFormat;
    }

    public List<Node> getNodesToUpdate() {
        return nodesToUpdate;
    }

    public List<String> getPropsToAdd() {
        return propsToAdd;
    }
}
