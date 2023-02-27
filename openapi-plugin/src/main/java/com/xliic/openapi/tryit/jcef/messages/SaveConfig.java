package com.xliic.openapi.tryit.jcef.messages;

import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SaveConfig extends WebAppProduce {

    public SaveConfig() {
        super("saveConfig");
    }

    @Override @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, List<String>> map = (Map<String, List<String>>) payload;
            List<String> hostnames = map.get("insecureSslHostnames");
            PropertiesComponent.getInstance().setList(Settings.TryIt.INSECURE_SSL_HOSTNAMES, hostnames);
        }
    }
}
