package com.xliic.core.editor.event;

import org.jetbrains.annotations.NonNls;

public class EditorMouseEventArea {
	
	  private final String myDebugName;

	  public static final EditorMouseEventArea EDITING_AREA = new EditorMouseEventArea("EDITING_AREA");
	  public static final EditorMouseEventArea LINE_NUMBERS_AREA = new EditorMouseEventArea("LINE_NUMBERS_AREA");
	  public static final EditorMouseEventArea ANNOTATIONS_AREA = new EditorMouseEventArea("ANNOTATIONS_AREA");
	  public static final EditorMouseEventArea LINE_MARKERS_AREA = new EditorMouseEventArea("LINE_MARKERS_AREA");
	  public static final EditorMouseEventArea FOLDING_OUTLINE_AREA = new EditorMouseEventArea("FOLDING_OUTLINE_AREA");

	  private EditorMouseEventArea(@NonNls String debugName) {
	    myDebugName = debugName;
	  }

	  @NonNls
	  public String toString() {
	    return myDebugName;
	  }
}
