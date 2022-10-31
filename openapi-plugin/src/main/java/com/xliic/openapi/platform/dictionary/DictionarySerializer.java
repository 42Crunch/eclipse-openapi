package com.xliic.openapi.platform.dictionary;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.xliic.openapi.platform.dictionary.types.DataDictionary;

@SuppressWarnings("serial")
public class DictionarySerializer extends StdSerializer<DataDictionary> {

    public DictionarySerializer() {
        this(null);
    }

    protected DictionarySerializer(Class<DataDictionary> t) {
        super(t);
    }

    @Override
    public void serialize(DataDictionary dictionary, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeObjectField("id", dictionary.getId());
        jsonGenerator.writeObjectField("name", dictionary.getName());
        jsonGenerator.writeObjectField("description", dictionary.getDescription());
        jsonGenerator.writeObjectField("formats", dictionary.getFormatsProperties());
        jsonGenerator.writeEndObject();
    }
}
