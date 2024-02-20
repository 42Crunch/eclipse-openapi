package com.xliic.openapi.config.jcef.messages;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.passwordSafe.PasswordSafe;
import com.xliic.core.project.Project;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.PlatformConnection;

import okhttp3.Response;

public class TestPlatformConnection extends TestConnection {

    public TestPlatformConnection(@NotNull Project project) {
        super("testPlatformConnection", project);
    }

    @Override
    protected @Nullable String preTestAssert() {
    	String error = PasswordSafe.getInstance().tryIsPasswordOk(API_KEY);
        if (error != null) {
            return error;
        }
        return PlatformConnection.isPlatformIntegrationEnabled() ? null : "no credentials";
    }

    @Override
    protected @Nullable String test() throws IOException {
        try (Response response = PlatformAPIs.Sync.testConnection()) {
            return response.code() == 200 ? null : "Unexpected response code " + response.code();
        }
    }

    @Override
    protected void notify(boolean success, @NotNull String message) {
        project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showPlatformConnectionTest(success, message);
    }
}
