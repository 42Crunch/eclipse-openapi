package com.xliic.core.fileEditor;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IEditorReference;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.internal.Workbench;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;

@SuppressWarnings("restriction")
public class FileEditorManager {

    private final Project project;

    public FileEditorManager(Project project) {
        this.project = project;
    }

    @NotNull
    public List<FileEditor> openEditor(@NotNull OpenFileDescriptor descriptor, boolean focusEditor) {
        descriptor.navigate(focusEditor);
        // Simply null as it is not used anywhere
        return null;
    }

    public static FileEditorManager getInstance(Project project) {
        return new FileEditorManager(project);
    }

    public Project getProject() {
        return project;
    }

    public void closeFile(@NotNull VirtualFile file) {
        for (IWorkbenchPage page : EclipseUtil.getAllSupportedPages()) {
            for (IEditorReference ref : page.getEditorReferences()) {
                try {
                    VirtualFile tmp = EclipseUtil.getVirtualFile(ref.getEditorInput());
                    if (tmp.equals(file)) {
                        page.closeEditor(ref.getEditor(true), false);
                    }
                } catch (PartInitException e) {
                }
            }
        }
    }

    @NotNull
    public VirtualFile[] getSelectedFiles() {
        FileEditor editor = getSelectedEditor();
        VirtualFile file = editor.getFile();
        if (file == null) {
            return new VirtualFile[0];
        }
        return List.of(file).toArray(new VirtualFile[0]);
    }

    @NotNull
    public FileEditor[] getAllEditors(@NotNull VirtualFile file) {
        List<FileEditor> fileEditors = new LinkedList<>();
        for (IEditorInput input : EclipseUtil.getAllSupportedEditorInputs()) {
            if (file.equals(EclipseUtil.getVirtualFile(input))) {
                fileEditors.add(new FileEditor(input));
            }
        }
        return fileEditors.toArray(new FileEditor[0]);
    }

    @NotNull
    public FileEditor[] getAllEditors() {
        List<FileEditor> fileEditors = new LinkedList<>();
        for (IEditorInput input : EclipseUtil.getAllSupportedEditorInputs()) {
            fileEditors.add(new FileEditor(input));
        }
        return fileEditors.toArray(new FileEditor[0]);
    }

    public FileEditor[] getEditors(@NotNull VirtualFile file) {
        return getAllEditors(file);
    }

    @NotNull
    public VirtualFile[] getOpenFiles() {
        List<VirtualFile> files = new LinkedList<>();
        for (IEditorInput input : EclipseUtil.getAllSupportedEditorInputs()) {
            VirtualFile file = EclipseUtil.getVirtualFile(input);
            if (file != null) {
                files.add(file);
            }
        }
        return files.toArray(new VirtualFile[0]);
    }

    @Nullable
    public FileEditor getSelectedEditor() {
        IEditorInput input = getSelectedEditorInput();
        if (input != null) {
            return new FileEditor(input);
        }
        return null;
    }

    @Nullable
    public Editor getSelectedTextEditor() {
        IEditorInput input = getSelectedEditorInput();
        if (input != null) {
            return new Editor(project, input);
        }
        return null;
    }

    @Nullable
    public FileEditor getSelectedEditor(@NotNull VirtualFile file) {
        FileEditor editor = getSelectedEditor();
        if (editor.getFile().equals(file)) {
            return editor;
        }
        return null;
    }

    private static IEditorInput getSelectedEditorInput() {
        IEditorPart part = EclipseUtil.getCurrentEditor();
        if (part == null) {
            for (IWorkbenchWindow window : Workbench.getInstance().getWorkbenchWindows()) {
                IWorkbenchPage page = window.getActivePage();
                if (page != null) {
                    part = page.getActiveEditor();
                    if (part != null) {
                        break;
                    }
                }
            }
        }
        if (part != null) {
            return part.getEditorInput();
        }
        return null;
    }
}
