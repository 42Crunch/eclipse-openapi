package com.xliic.core.codeInsight.highlighting;

import java.util.Collection;
import org.eclipse.jface.text.ITextOperationTarget;
import org.eclipse.jface.text.source.Annotation;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.ui.IEditorPart;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.eclipse.jface.text.Position;

import com.xliic.core.editor.Editor;
import com.xliic.core.editor.colors.TextAttributesKey;
import com.xliic.core.editor.markup.RangeHighlighter;
import com.xliic.core.project.Project;

public class HighlightManager {
	
	private static HighlightManager manager;
	private static final String FOCUS_ANNOTATION_TYPE= "org.eclipse.ui.internal.workbench.texteditor.link.master";
	
	public static HighlightManager getInstance(@NotNull Project project) {
		if (manager == null) {
			manager = new HighlightManager();
		}
		return manager;
	}
	
	public void addRangeHighlight(@NotNull Editor editor, int startOffset, int endOffset, @NotNull TextAttributesKey attributesKey, 
			boolean hideByTextChange, @Nullable Collection<? super RangeHighlighter> outHighlighters) {
		
		IEditorPart sourcepart = editor.getTextEditor(); // todo: use getAnnModel deirectly!
		if (sourcepart instanceof IEditorPart) {
			ISourceViewer viewer = (ISourceViewer) sourcepart.getAdapter(ITextOperationTarget.class);
			if (viewer != null) {
				Position position = new Position(startOffset, endOffset - startOffset);
				Annotation annotation = new Annotation(FOCUS_ANNOTATION_TYPE, false, "");
				RangeHighlighter highlighter = new RangeHighlighter(annotation, position, editor);				
				viewer.getAnnotationModel().addAnnotation(annotation, position);
				outHighlighters.add(highlighter);
			}
		}		
	}
}
