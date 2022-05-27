package com.xliic.core.codeHighlighting;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IMarker;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IURIEditorInput;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.codeInsight.HighlightInfo;
import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.EclipseUtil;

public class Marker {

	public static final String JSON_POINTER = "JSON_POINTER";

	private IMarker marker;
	private List<IntentionAction> actions;

	private final PsiFile file;
	private final Editor editor;

	private final int severity;
	private final String message;
	private final int charStart;
	private final int charEnd;
	private final String pointer;

	private volatile int hashCode;

	public Marker(@NotNull Editor editor, @NotNull PsiFile file, @NotNull HighlightInfo info) {
		this.file = file;
		this.editor = editor;
		severity = info.getSeverity();
		message = info.getMessage();
		charStart = info.getCharStart();
		charEnd = info.getCharEnd();
		pointer = info.getPointer();
		actions = null;
		marker = null;
	}

	public void clearActions() {
		if (actions != null) {
			actions.clear();
		}
	}

	public void addAction(IntentionAction action) {
		if (actions == null) {
			actions = new LinkedList<>();
		}
		actions.add(action);
	}

	@Nullable
	public List<IntentionAction> getActions() {
		return actions;
	}

	public PsiFile getPsiFile() {
		return file;
	}

	public Editor getEditor() {
		return editor;
	}

	public String getMessage() {
		return message;
	}

	public String getPointer() {
		return pointer;
	}

	@Override
	public int hashCode() {
		int result = hashCode;
		if (result == 0) {
			final int prime = 31;
			result = 1;
			result = prime * result + ((file == null) ? 0 : file.hashCode());
			result = prime * result + ((message == null) ? 0 : message.hashCode());
			result = prime * result + ((pointer == null) ? 0 : pointer.hashCode());
			hashCode = result;
		}
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Marker other = (Marker) obj;
		if (file == null) {
			if (other.file != null)
				return false;
		} else if (!file.equals(other.file))
			return false;
		if (message == null) {
			if (other.message != null)
				return false;
		} else if (!message.equals(other.message))
			return false;
		if (pointer == null) {
			if (other.pointer != null)
				return false;
		} else if (!pointer.equals(other.pointer))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Marker [file=" + file + ", message=" + message + ", pointer=" + pointer + "]";
	}

	public boolean exists() {
		return (marker != null) && marker.exists();
	}

	public String getJsonPointer() {
		try {
			return (String) marker.getAttribute(JSON_POINTER);
		} catch (CoreException e) {
			return null;
		}
	}

	public void activate(Map<IMarker, Marker> markersBinding) {
		try {
			IFile ifile = file.getVirtualFile().getIFile();
			if (ifile == null) {
				ifile = getFile(editor.getEditorInput());
			}
			marker = ifile.createMarker(IMarker.PROBLEM);
			marker.setAttribute(IMarker.SEVERITY, severity);
			marker.setAttribute(IMarker.MESSAGE, message);
			marker.setAttribute(IMarker.TRANSIENT, true);
			marker.setAttribute(IMarker.CHAR_START, charStart);
			marker.setAttribute(IMarker.CHAR_END, charEnd);
			marker.setAttribute(JSON_POINTER, pointer);
			markersBinding.put(marker, this);
		} catch (CoreException e) {
			marker = null;
		}
	}

	public void dispose(Map<IMarker, Marker> markersBinding) {
		try {
			if (marker != null) {
				clearActions();
				markersBinding.remove(marker);
				marker.delete();
				marker = null;
			}
		} catch (CoreException e) {
		}
	}
	
	private static IFile getFile(@NotNull IEditorInput input) {
	  if (input instanceof IFileEditorInput) {
	      return ((IFileEditorInput) input).getFile();
	  } else if (input instanceof IURIEditorInput) {
	      URI uri = ((IURIEditorInput) input).getURI();
	      boolean isLocal = uri.getHost() == null || "localhost".equals(uri.getHost());
	      if ("file".equals(uri.getScheme()) && isLocal) {	    	  
	    	  return EclipseUtil.getWorkspaceFile(uri);
	      }
	  }
	  return null;
	}
}
