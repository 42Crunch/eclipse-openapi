package com.xliic.openapi.cli;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

public class CliAstManifestEntry {

    @NotNull
    private final String name;
    @NotNull
    private final String architecture;
    @NotNull
    private final String version;
    @NotNull
    private final String releaseDate;
    @NotNull
    private final String downloadUrl;
    @NotNull
    private final String sha256;

    public CliAstManifestEntry(@NotNull Map<String, String> manifestEntry) {
        name = manifestEntry.get("name");
        architecture = manifestEntry.get("architecture");
        version = manifestEntry.get("version");
        releaseDate = manifestEntry.get("releaseDate");
        downloadUrl = manifestEntry.get("downloadUrl");
        sha256 = manifestEntry.get("sha256");
    }

    public @NotNull String getName() {
        return name;
    }

    public @NotNull String getArchitecture() {
        return architecture;
    }

    public @NotNull String getVersion() {
        return version;
    }

    public @NotNull String getReleaseDate() {
        return releaseDate;
    }

    public @NotNull String getDownloadUrl() {
        return downloadUrl;
    }

    public @NotNull String getSha256() {
        return sha256;
    }
}
