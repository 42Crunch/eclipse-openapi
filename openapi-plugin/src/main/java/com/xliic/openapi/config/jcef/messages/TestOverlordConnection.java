package com.xliic.openapi.config.jcef.messages;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.config.payload.PlatformServices;
import com.xliic.openapi.platform.scan.ScanAPIs;

public class TestOverlordConnection extends TestConnection {

    private PlatformServices platformServices;

    public TestOverlordConnection(@NotNull Project project) {
        super("testOverlordConnection", project);
    }

    @Override
    protected @Nullable String preTestAssert() {
        platformServices = new PlatformServices();
        return platformServices.getServices().isEmpty() ? "Services host is not configured" : null;
    }

    @Override
    protected @Nullable String test() throws IOException {
        return ScanAPIs.Sync.http2Ping(platformServices.getServices()) ? null : "Socket handshake failed";
    }

    @Override
    protected void notify(boolean success, @NotNull String message) {
        project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showOverlordConnectionTest(success, message);
    }
}
