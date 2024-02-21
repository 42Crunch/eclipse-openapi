package com.xliic.openapi.listeners;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IPartListener;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.editors.text.TextEditor;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.FileEditorManagerEvent;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.editor.OpenAPIEnterTypedHandler;
import com.xliic.openapi.services.PlaceHolderService;

public class OpenAPIPartListener implements IPartListener {

    private IEditorInput prevInput = null;
    private final Project project;

    private final OpenApiFileEditorManagerListener listener;
    private final OpenAPIFileEditorManagerBeforeListener beforeListener;
    private final Map<Editor, OpenAPIEnterTypedHandler> enterTypedHandlers;

    public OpenAPIPartListener(@NotNull Project project) {
        this.project = project;
        listener = new OpenApiFileEditorManagerListener(project);
        beforeListener = new OpenAPIFileEditorManagerBeforeListener();
        enterTypedHandlers = new HashMap<>();
    }

    @Override
    public final void partOpened(final IWorkbenchPart part) {
        IEditorInput input = getFileEditorInput(part);
        if (input != null) {
            VirtualFile file = EclipseUtil.getVirtualFile(input);
            if (file != null) {
                Editor editor = new Editor(project, input);
                if (!enterTypedHandlers.containsKey(editor)) {
                    enterTypedHandlers.put(editor, new OpenAPIEnterTypedHandler(editor));
                    editor.addTraverseListener(enterTypedHandlers.get(editor));
                }
                beforeListener.beforeFileOpened(FileEditorManager.getInstance(project), file);
                listener.fileOpened(FileEditorManager.getInstance(project), file);
            }
        }
    }

    @Override
    public final void partActivated(final IWorkbenchPart part) {
        IEditorInput input = getFileEditorInput(part);
        if (input != null && !Objects.equals(input, prevInput)) {
            prevInput = input;
            VirtualFile file = EclipseUtil.getVirtualFile(input);
            if (file != null) {
                VirtualFile oldFile = EclipseUtil.getVirtualFile(prevInput);
                listener.selectionChanged(new FileEditorManagerEvent(file, oldFile));
            }
        }
    }

    @Override
    public final void partClosed(final IWorkbenchPart part) {
        IEditorInput input = getFileEditorInput(part);
        if (input != null) {
            VirtualFile file = EclipseUtil.getVirtualFile(input);
            if (file != null) {
                Editor editor = new Editor(project, input);
                PlaceHolderService placeHolderService = PlaceHolderService.getInstance(project);
                placeHolderService.dispose(editor);
                if (enterTypedHandlers.containsKey(editor)) {
                    editor.removeTraverseListener(enterTypedHandlers.remove(editor));
                }
                beforeListener.beforeFileClosed(FileEditorManager.getInstance(project), file);
                listener.fileClosed(FileEditorManager.getInstance(project), file);
            }
            if (EclipseUtil.getCurrentEditor() == null) {
                prevInput = null;
                listener.selectionChanged(new FileEditorManagerEvent(null, file));
            }
        }
    }

    @Override
    public final void partBroughtToTop(final IWorkbenchPart part) {
        if (part instanceof PanelViewPart) {
            ((PanelViewPart) part).onViewPartBroughtToTop();
        }
    }

    // This event is thrown before part closed event and annotation model is still available now
    @Override
    public final void partDeactivated(final IWorkbenchPart part) {
        IEditorInput input = getFileEditorInput(part);
        if (input != null) {
            VirtualFile file = EclipseUtil.getVirtualFile(input);
            if (file != null) {
                Editor editor = new Editor(project, input);
                PlaceHolderService placeHolderService = PlaceHolderService.getInstance(project);
                placeHolderService.dispose(editor);
            }
        }
    }

    private static IEditorInput getFileEditorInput(IWorkbenchPart part) {
        if (part instanceof TextEditor) {
            IEditorInput input = ((TextEditor) part).getEditorInput();
            if (EclipseUtil.isSupported(input)) {
                return input;
            }
        }
        return null;
    }
}
