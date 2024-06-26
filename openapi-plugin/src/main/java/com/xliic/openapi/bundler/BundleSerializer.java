package com.xliic.openapi.bundler;

import org.jetbrains.annotations.NotNull;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.PrettyPrinter;
import com.fasterxml.jackson.core.util.DefaultIndenter;
import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;

public class BundleSerializer extends Serializer {

    @NotNull
    private final ObjectWriter writer;

    @SuppressWarnings("deprecation")
	public BundleSerializer() {
        super();
        mapper.disable(SerializationFeature.INDENT_OUTPUT);
        DefaultIndenter indenter = new DefaultIndenter("", "");
        PrettyPrinter printer = new DefaultPrettyPrinter().withObjectIndenter(indenter).withArrayIndenter(indenter).withoutSpacesInObjectEntries();
        writer = mapper.writer(printer);
    }

    @Override
    public String serialize(Document document) throws JsonProcessingException {
        return writer.writeValueAsString(document.root.node);
    }
}
