package com.xliic.openapi;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

@SuppressWarnings("serial")
public class PayloadSerializer extends StdSerializer<Payload> {

    public PayloadSerializer() {
        this(null);
    }

    protected PayloadSerializer(Class<Payload> t) {
        super(t);
    }

    @Override
    public void serialize(Payload payload, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeObject(payload.getProperties());
    }
}
