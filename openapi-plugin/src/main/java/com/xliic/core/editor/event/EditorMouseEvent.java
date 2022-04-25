package com.xliic.core.editor.event;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;

public class EditorMouseEvent {
	
	private final Editor editor;
	private final int offset;
	
	public EditorMouseEvent(@NotNull Editor editor, int offset) {
		this.editor = editor;
		this.offset = offset;
	}

	  @NotNull
	  public Editor getEditor() {
	    return editor;
	  }
	  
	  public EditorMouseEventArea getArea() {
	    return EditorMouseEventArea.EDITING_AREA;
	  }

	  public int getOffset() {
	    return offset;
	  }
}
