package com.xliic.core.fileChooser;

import java.awt.Component;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import com.xliic.core.project.Project;

public class FileChooserFactory {

	private static FileChooserFactory factory;

	private FileChooserFactory() {}

	public static FileChooserFactory getInstance() {
		if (factory == null) {
			factory = new FileChooserFactory();
		}
		return factory;
	}
	
	public @NotNull FileChooserDialog createFileChooser(@NotNull FileChooserDescriptor descriptor, 
                                                        @Nullable Project project,
                                                        @Nullable String text,
                                                        @Nullable Component component) {
		return new FileChooserDialog(descriptor, project, text);
	}
}
