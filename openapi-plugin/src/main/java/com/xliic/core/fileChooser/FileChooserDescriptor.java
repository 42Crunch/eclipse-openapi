package com.xliic.core.fileChooser;

import org.jetbrains.annotations.NotNull;

public class FileChooserDescriptor {

    private final boolean myChooseFiles;
    private final boolean myChooseFolders;
    private final boolean myChooseJars;
    private final boolean myChooseJarsAsFiles;
    private final boolean myChooseJarContents;
    private final boolean myChooseMultiple;
    private String[] filterExtensions;

    public FileChooserDescriptor(boolean chooseFiles,
                                 boolean chooseFolders,
                                 boolean chooseJars,
                                 boolean chooseJarsAsFiles,
                                 boolean chooseJarContents,
                                 boolean chooseMultiple) {
        this.myChooseFiles = chooseFiles;
        this.myChooseFolders = chooseFolders;
        this.myChooseJars = chooseJars;
        this.myChooseJarsAsFiles = chooseJarsAsFiles;
        this.myChooseJarContents = chooseJarContents;
        this.myChooseMultiple = chooseMultiple;
        this.filterExtensions = new String[0];
    }

    public boolean isChooseFiles() {
        return this.myChooseFiles;
    }

    public boolean isChooseFolders() {
        return this.myChooseFolders;
    }

    public boolean isChooseJars() {
        return this.myChooseJars;
    }

    public boolean isChooseJarsAsFiles() {
        return this.myChooseJarsAsFiles;
    }

    public boolean isChooseJarContents() {
        return this.myChooseJarContents;
    }

    public boolean isChooseMultiple() {
        return this.myChooseMultiple;
    }

    public String[] getFilterExtensions() {
        return filterExtensions;
    }

    public FileChooserDescriptor withExtensionFilter(@NotNull String... extensions) {
        this.filterExtensions = new String[extensions.length];
        int i = 0;
        for (String ext : extensions) {
        	filterExtensions[i] = ext.startsWith("*.") ? ext : "*." + ext;  
        	i += 1;
        }
        return this;
    }
}
