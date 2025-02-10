package com.xliic.openapi.bundler;

import org.jetbrains.annotations.NotNull;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.xliic.openapi.utils.Utils;

public class BundleSerializer extends Serializer {

    @NotNull
    private final ObjectWriter writer;

	public BundleSerializer() {
        super();
        mapper.disable(SerializationFeature.INDENT_OUTPUT);
        writer = mapper.writer(Utils.getPrinter("", ""));
    }

    @Override
    public String serialize(Document document) throws JsonProcessingException {
        return writer.writeValueAsString(document.root.node);
    }
}
