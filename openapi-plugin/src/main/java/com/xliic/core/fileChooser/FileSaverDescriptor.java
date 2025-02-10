package com.xliic.core.fileChooser;

import org.jetbrains.annotations.NotNull;

public class FileSaverDescriptor {

	@NotNull
    private final String title;
	@NotNull
    private final String description;
    private String[] filterExtensions;

    public FileSaverDescriptor(@NotNull String title, @NotNull String description, String... extensions) {
        this.title = title;
        this.description = description;
        this.filterExtensions = new String[extensions.length];
        int i = 0;
        for (String ext : extensions) {
        	filterExtensions[i] = ext.startsWith("*.") ? ext : "*." + ext;  
        	i += 1;
        }
    }

    @NotNull
    public String getTitle() {
        return this.title;
    }

    @NotNull
    public String getDescription() {
        return this.description;
    }

    public String[] getFilterExtensions() {
        return filterExtensions;
    }

    public FileSaverDescriptor withFileFilter(@NotNull String[] extensions) {
        this.filterExtensions = extensions;
        return this;
    }
}
