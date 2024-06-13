package com.xliic.openapi.platform.dictionary.types;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.diagnostic.Logger;
import com.xliic.core.project.Project;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.callback.SuccessASTResponseCallback;
import com.xliic.openapi.platform.dictionary.DictionaryReloadCallback;

public class DataDictionary extends SuccessASTResponseCallback implements Comparable<DataDictionary> {

    public static final String STANDARD_ID = "standard";
    public static final String STANDARD_DESC = "Default standard formats";
    public static final String FORMAT_PREFIX = "o:";

    @NotNull private final String id;
    @NotNull private final String name;
    @NotNull private final String description;
    private final Map<String, DataFormat> formats = Collections.synchronizedMap(new HashMap<>());
    @NotNull private final AtomicInteger counter;
    @NotNull private final DictionaryReloadCallback callback;

    public DataDictionary(@NotNull String id,
                          @NotNull String name,
                          @NotNull String description,
                          @NotNull Project project,
                          @NotNull AtomicInteger counter,
                          @NotNull DictionaryReloadCallback callback) {
        super(project);
        this.id = id;
        this.name = name;
        this.description = description;
        this.counter = counter;
        this.callback = callback;
    }

    @NotNull
    public String getId() {
        return id;
    }

    @NotNull
    public String getName() {
        return name;
    }

    @NotNull
    public String getDescription() {
        return description;
    }

    public boolean isStandard() {
        return STANDARD_ID.equals(id);
    }

    @NotNull
    public Map<String, DataFormat> getFormats() {
        return formats;
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        try {
            Node target = node.find("/formats");
            if (target != null) {
                for (Node child : target.getChildren()) {
                    try {
                        String name = child.getKey();
                        boolean isEnum = child.getChild("enum") != null;
                        String prefix = FORMAT_PREFIX + (isStandard() ? "" : getName() + ":");
                        if (isEnum) {
                            formats.put(name, new DataFormat(child, prefix));
                        } else {
                            String type = Objects.requireNonNull(child.getChildValue("type"));
                            switch (type) {
                                case "string": {
                                    formats.put(name, new DataFormatString(child, prefix));
                                    break;
                                }
                                case "integer": {
                                    formats.put(name, new DataFormatInteger(child, prefix));
                                    break;
                                }
                                case "number": {
                                    formats.put(name, new DataFormatNumber(child, prefix));
                                    break;
                                }
                            }
                        }
                    } catch (Throwable e) {
                    	Logger.getInstance(DataDictionary.class).error(e);
                    }
                }
            }
        } finally {
            if (counter.decrementAndGet() == 0) {
                callback.complete();
            }
        }
    }

    @Override
    public void onFailure(@NotNull String reason) {
        if (counter.decrementAndGet() == 0) {
            callback.complete();
        }
    }

    @Override
    public int compareTo(@NotNull DataDictionary o) {
        return getName().compareTo(o.getName());
    }
}
