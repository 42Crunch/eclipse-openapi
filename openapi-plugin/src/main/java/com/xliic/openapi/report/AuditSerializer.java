package com.xliic.openapi.report;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

@SuppressWarnings("serial")
public class AuditSerializer extends StdSerializer<Audit> {

    public AuditSerializer() {
        this(null);
    }

    protected AuditSerializer(Class<Audit> t) {
        super(t);
    }

    @Override
    public void serialize(Audit audit, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeObjectField("summary", audit.getSummaryProperties());
        jsonGenerator.writeObjectField("files", audit.getFilesProperties());
        jsonGenerator.writeObjectField("issues", audit.getIssuesProperties());
        jsonGenerator.writeEndObject();
    }
}
