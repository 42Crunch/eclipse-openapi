package com.xliic.core.fileEditor;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;

public class TextEditor {

    @NotNull 
    public Editor getEditor() {
    	return new Editor(new Project()); // todo: fix me
    }
}
