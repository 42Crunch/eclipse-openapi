package com.xliic.openapi.services;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.common.WorkspaceException;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.services.api.IExtRefService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;

public class ExtRefService implements IExtRefService, Disposable {

    private final Project project;
    private final Map<String, ExtRef> cache;

    public ExtRefService(@NotNull final Project project) {
        this.project = project;
        cache = new HashMap<>();
    }

    public static ExtRefService getInstance(@NotNull Project project) {
        return project.getService(ExtRefService.class);
    }

    @Nullable
    public ExtRef getExtRef(@NotNull VirtualFile file) {
        for (ExtRef extRef : cache.values()) {
            if (file.equals(extRef.getVirtualFile())) {
                return extRef;
            }
        }
        return null;
    }

    public @NotNull ExtRef getOrCreate(URI uri, String rootFileName) throws WorkspaceException, IOException {
        URL url = uri.toURL();
        String key = url.toString();
        if (!cache.containsKey(key)) {
            cache.put(key, new ExtRef(project, url, rootFileName));
        }
        return cache.get(key);
    }

    public @Nullable ExtRef getExtRefByFile(@NotNull String fileName) {
        for (ExtRef extRef : cache.values()) {
            if (fileName.equals(extRef.getVirtualFile().getPath())) {
                return extRef;
            }
        }
        return null;
    }

    public ExtRef get(URI uri) {
        try {
            return cache.get(uri.toURL().toString());
        } catch (MalformedURLException ignored) {
        }
        return null;
    }

    public ExtRef get(String url) {
        return cache.get(url);
    }

    public void clear(Set<String> activeURLs) {
        for (String url : new HashSet<>(cache.keySet())) {
            if (!activeURLs.contains(url)) {
                ExtRef extRef = cache.remove(url);
                extRef.dispose();
            }
        }
    }

    public boolean isSafe(URI uri) {
        return isSafe(uri.getAuthority());
    }

    public boolean isSafe(String hostname) {
        List<String> hosts = SettingsService.getInstance().getList(Settings.ExtRef.APPROVED_HOSTNAMES);
        if (hosts == null) {
            return false;
        }
        for (String host : hosts) {
            if (host.equalsIgnoreCase(hostname)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void dispose() {
        project.dispose();
        for (ExtRef extRef : cache.values()) {
            extRef.dispose();
        }
        cache.clear();
    }
}
