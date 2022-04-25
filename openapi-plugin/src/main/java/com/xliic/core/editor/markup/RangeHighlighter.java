package com.xliic.core.editor.markup;

import org.eclipse.jface.text.ITextOperationTarget;
import org.eclipse.jface.text.Position;
import org.eclipse.jface.text.source.Annotation;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.ui.IEditorPart;
import org.jetbrains.annotations.Contract;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.Editor;

public class RangeHighlighter {

	  private Annotation annotation;
	  private Position position; 
	  private Editor editor;
	  
	  public RangeHighlighter(@NotNull Annotation annotation, @NotNull Position position, @NotNull Editor editor) {
		  this.annotation = annotation;
		  this.position = position;
		  this.editor = editor;
	  } 

	  @NotNull
	  public Document getDocument() {
		  return editor.getDocument();
	  }

	  @Contract(pure = true)
	  public int getStartOffset() {
		  return position.getOffset();
	  }

	  @Contract(pure = true)
	  public int getEndOffset() {
		  return position.getOffset() + position.getLength();
	  }

	  @Contract(pure = true)
	  public boolean isValid() {
		  return annotation != null && position != null && editor != null && !(position.isDeleted() || annotation.isMarkedDeleted());
	  }

	  public void setGreedyToLeft(boolean greedy) {
	  }

	  public void setGreedyToRight(boolean greedy) {
	  }
	  
	  public Position getPosition() {
		  return position;
	  }

	  public void dispose() {
			IEditorPart sourcepart = editor.getTextEditor();
			if (sourcepart instanceof IEditorPart) {
				ISourceViewer viewer = (ISourceViewer) sourcepart.getAdapter(ITextOperationTarget.class);
				if (viewer != null) {
					viewer.getAnnotationModel().removeAnnotation(annotation);
					position.delete();
				}
			}
			annotation = null;
			position = null;
			editor = null;
	  }
}
