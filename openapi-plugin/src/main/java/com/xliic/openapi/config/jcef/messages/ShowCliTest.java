package com.xliic.openapi.config.jcef.messages;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;

public class ShowCliTest extends WebAppConsume {

    private final boolean success;
    @Nullable
    private final String value;

//    export type CliTestResult =
//            | { success: true; version: string }
//  | { success: false; message: string };


    public ShowCliTest(boolean success, @Nullable String value) {
        super("showCliTest");
        this.success = success;
        this.value = value;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("success", success);
        result.put(success ? "version" : "message", value);
        return result;
    }
}
