package com.xliic.openapi.platform.tree.node.decorator;

public class PlatformErrorDecorator implements PlatformDecorator {

    private final String name;

    public PlatformErrorDecorator(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
