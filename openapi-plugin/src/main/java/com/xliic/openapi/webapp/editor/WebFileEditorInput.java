package com.xliic.openapi.webapp.editor;

import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IPersistableElement;
import org.jetbrains.annotations.NotNull;

public class WebFileEditorInput implements IEditorInput {
	
	@NotNull
	private final WebVirtualFile file;
	
	public WebFileEditorInput(@NotNull WebVirtualFile file) {
		super();
		this.file = file;
	}

	@Override
	public <T> T getAdapter(Class<T> adapter) {
		return null;
	}

	@Override
	public boolean exists() {
		return false;
	}

	@Override
	public ImageDescriptor getImageDescriptor() {
		return null;
	}

	@Override
	public String getName() {
		return "WebFileEditorInput " + file.getId();
	}

	@Override
	public IPersistableElement getPersistable() {
		return null;
	}

	@Override
	public String getToolTipText() {
		return null;
	}
	
	@NotNull
	public WebVirtualFile getVirtualFile() {
		return file;
	}
	
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WebFileEditorInput that = (WebFileEditorInput) o;
        return file.equals(that.file);
    }

    @Override
    public int hashCode() {
        return file.hashCode();
    }
}
