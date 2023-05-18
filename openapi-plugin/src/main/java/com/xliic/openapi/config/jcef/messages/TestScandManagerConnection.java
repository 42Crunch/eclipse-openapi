package com.xliic.openapi.config.jcef.messages;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.config.payload.ScandManagerConnection;
import com.xliic.openapi.platform.scand.ScandAPIs;

import okhttp3.Response;

public class TestScandManagerConnection extends TestConnection {

    public TestScandManagerConnection(@NotNull Project project) {
        super("testScandManagerConnection", project);
    }

    @Override
    protected @Nullable String preTestAssert() {
        String scandURL = new ScandManagerConnection().getUrl();
        return scandURL.isEmpty() ? "no scand manager configuration" : null;
    }

    @Override
    protected @Nullable String test() throws IOException {
        try (Response response = ScandAPIs.Sync.testConnection()) {
            return response.code() == 200 ? null : "Unexpected response code " + response.code();
        }
    }

    @Override
    protected void notify(boolean success, @NotNull String message) {
        project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showScandManagerConnectionTest(success, message);
    }
}
