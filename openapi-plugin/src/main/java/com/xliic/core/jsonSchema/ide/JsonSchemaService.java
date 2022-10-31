package com.xliic.core.jsonSchema.ide;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public class JsonSchemaService {

    private static final JsonSchemaService service = new JsonSchemaService();

    public static final class Impl {

        public Impl() {
        }

        public static JsonSchemaService get(@NotNull Project project) {
            return service;
        }
    }

    public void reset() {
    }
}
