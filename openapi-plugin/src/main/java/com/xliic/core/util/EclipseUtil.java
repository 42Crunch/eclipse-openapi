package com.xliic.core.util;

import static org.eclipse.ui.PlatformUI.getWorkbench;

import java.io.File;
import java.net.URI;
import java.util.LinkedList;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IProjectDescription;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IWorkspace;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.Path;
import org.eclipse.jetty.util.StringUtil;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.ITextOperationTarget;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.jface.viewers.ILabelDecorator;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IEditorDescriptor;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IEditorReference;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IURIEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.ide.IDE;
import org.eclipse.ui.texteditor.DocumentProviderRegistry;
import org.eclipse.ui.texteditor.IDocumentProvider;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;

public class EclipseUtil {

    public static final String TEMP_PROJECT_NAME = "tmp-xliic-project";

    private EclipseUtil() {
    }

    public static Shell getShell() {
        return EclipseWorkbenchUtil.getIWorkbenchWindow().getShell();
    }

    public static Range getSelectionRange(@NotNull Node target) {
        Range range = target.getKeyRange();
        range = (range != null) ? range : target.getRange();
        if (StringUtil.isEmpty(target.getJsonPointer())) {
            int startOffset = range.getStartOffset();
            return new Range(startOffset, startOffset, range.getLine(), range.getColumn());
        }
        return range;
    }

    @Nullable
    public static ISourceViewer getSourceViewer(@NotNull IEditorInput input) {
        IEditorPart editorPart = getTextEditor(input);
        if (editorPart instanceof IEditorPart) {
            return (ISourceViewer) editorPart.getAdapter(ITextOperationTarget.class);
        }
        return null;
    }

    @Nullable
    public static ITextEditor getTextEditor(@NotNull IEditorInput input) {
        IWorkbench workbench = PlatformUI.getWorkbench();
        for (IWorkbenchWindow window : workbench.getWorkbenchWindows()) {
            for (IWorkbenchPage page : window.getPages()) {
                IEditorPart part = page.findEditor(input);
                if (part instanceof ITextEditor) {
                    return (ITextEditor) part;
                }
            }
        }
        return null;
    }

    @Nullable
    public static IEditorPart getCurrentEditor() {
        IWorkbenchPage page = getActivePage();
        return page == null ? null : page.getActiveEditor();
    }

    @NotNull
    public static ILabelDecorator getLabelDecorator() {
        return getWorkbench().getDecoratorManager().getLabelDecorator();
    }

    @NotNull
    public static TreePath getTreePathFromTreeNode(@NotNull TreeNode node) {
        List<Object> tmp = new LinkedList<>();
        DefaultMutableTreeNode root = (DefaultMutableTreeNode) node;
        tmp.add(root);
        while (root.getParent() != null) {
            root = (DefaultMutableTreeNode) root.getParent();
            tmp.add(root);
        }
        return new TreePath(tmp.toArray());
    }

    @Nullable
    public static IWorkbenchPage getActivePage() {
        try {
            IWorkbenchWindow window = getWorkbench().getActiveWorkbenchWindow();
            return window == null ? null : window.getActivePage();
        } catch (IllegalStateException ise) {
        }
        return null;
    }

    public static boolean isSupported(@NotNull IEditorInput input) {
        return input instanceof IFileEditorInput || input instanceof IURIEditorInput;
    }

    @Nullable
    public static VirtualFile getVirtualFile(@NotNull IEditorPart part) {
        return getVirtualFile(part.getEditorInput());
    }

    @Nullable
    public static VirtualFile getVirtualFile(@NotNull IEditorInput input) {
        if (input instanceof IFileEditorInput) {
            return new VirtualFile(((IFileEditorInput) input).getFile());
        } else if (input instanceof IURIEditorInput) {
            return new VirtualFile(new File(((IURIEditorInput) input).getURI()));
        }
        return null;
    }

    @Nullable
    public static IFile getWorkspaceFile(@NotNull URI uri) {
        String path = uri.getPath();
        IWorkspaceRoot wsRoot = ResourcesPlugin.getWorkspace().getRoot();
        if (path.startsWith(wsRoot.getLocationURI().getPath())) {
            return wsRoot.getFile(new Path(path));
        }
        return null;
    }

    @NotNull
    public static List<IEditorInput> getAllSupportedActiveEditorInputs() {
        List<IEditorInput> inputs = new LinkedList<>();
        IWorkbench workbench = PlatformUI.getWorkbench();
        IWorkbenchWindow[] windows = workbench.getWorkbenchWindows();
        for (IWorkbenchWindow window : windows) {
            for (IWorkbenchPage page : window.getPages()) {
                for (IEditorReference ref : page.getEditorReferences()) {
                    try {
                        IEditorInput input = ref.getEditorInput();
                        if (isSupported(input)) {
                            IEditorPart activeEditor = page.getActiveEditor();
                            if (activeEditor != null && input.equals(activeEditor.getEditorInput())) {
                                inputs.add(input);
                            }
                        }
                    } catch (PartInitException e) {
                    }
                }
            }
        }
        return inputs;
    }

    @NotNull
    public static List<IEditorInput> getAllSupportedEditorInputs() {
        List<IEditorInput> inputs = new LinkedList<>();
        IWorkbench workbench = PlatformUI.getWorkbench();
        IWorkbenchWindow[] windows = workbench.getWorkbenchWindows();
        for (IWorkbenchWindow window : windows) {
            for (IWorkbenchPage page : window.getPages()) {
                for (IEditorReference ref : page.getEditorReferences()) {
                    try {
                        IEditorInput input = ref.getEditorInput();
                        if (isSupported(input)) {
                            inputs.add(input);
                        }
                    } catch (PartInitException e) {
                    }
                }
            }
        }
        return inputs;
    }

    @NotNull
    public static List<IWorkbenchPage> getAllSupportedPages() {
        List<IWorkbenchPage> pages = new LinkedList<>();
        IWorkbench workbench = PlatformUI.getWorkbench();
        IWorkbenchWindow[] windows = workbench.getWorkbenchWindows();
        for (IWorkbenchWindow window : windows) {
            for (IWorkbenchPage page : window.getPages()) {
                for (IEditorReference ref : page.getEditorReferences()) {
                    try {
                        if (isSupported(ref.getEditorInput())) {
                            pages.add(page);
                        }
                    } catch (PartInitException e) {
                    }
                }
            }
        }
        return pages;
    }

    @Nullable
    public static IProject getProject(@NotNull String path) {
        return getProject(new File(path));
    }

    @Nullable
    public static IProject getProject(@NotNull File file) {
        if (file.exists()) {
            IProject[] projects = ResourcesPlugin.getWorkspace().getRoot().getProjects();
            for (IProject project : projects) {
                if (project.exists()) {
                    if (file.getAbsolutePath().startsWith(new File(project.getLocationURI()).getAbsolutePath())) {
                        return project;
                    }
                }
            }
        }
        return null;
    }

    public static void refreshProject(@NotNull IProject project) {
        try {
            project.refreshLocal(IResource.DEPTH_INFINITE, null);
        } catch (CoreException e) {
        }
    }

    @Nullable
    public static IDocument getDocument(@NotNull IEditorInput input) {
        try {
            IDocumentProvider docProvider = DocumentProviderRegistry.getDefault().getDocumentProvider(input);
            docProvider.connect(input);
            return docProvider.getDocument(input);
        } catch (CoreException e) {
        }
        return null;
    }

    @Nullable
    public static IEditorPart openInInternalEditor(@NotNull File file, boolean activate) {
        IEditorDescriptor desc;
        try {
            desc = IDE.getEditorDescriptor(file.getName(), true, false);
        } catch (PartInitException e) {
            desc = null;
        }
        String editorId = getInternalEditorId(desc);
        try {
            IWorkbenchPage activePage = PlatformUI.getWorkbench().getActiveWorkbenchWindow().getActivePage();
            return IDE.openEditor(activePage, file.toURI(), editorId, activate);
        } catch (PartInitException e) {
            e.printStackTrace();
        }
        return null;
    }

    @NotNull
    private static String getInternalEditorId(@Nullable IEditorDescriptor desc) {
        String editorId;
        if (desc == null || !desc.isInternal()) {
            editorId = "org.eclipse.ui.DefaultTextEditor";
        } else {
            editorId = desc.getId();
        }
        return editorId;
    }

    @NotNull
    public static void createTempProject() {
        try {
            IProject project = getTempProject();
            if (project != null) {
                if (!project.isOpen()) {
                    project.open(IResource.BACKGROUND_REFRESH, null);
                }
            } else {
                IWorkspace workspace = ResourcesPlugin.getWorkspace();
                IProjectDescription projectDescription = workspace.newProjectDescription(TEMP_PROJECT_NAME);
                projectDescription.setLocation(null);
                project = workspace.getRoot().getProject(TEMP_PROJECT_NAME);
                project.create(projectDescription, null);
                project.open(IResource.NONE, null);
            }
        } catch (CoreException e) {
            e.printStackTrace();
        }
    }

    @Nullable
    public static IProject getTempProject() throws CoreException {
        IWorkspace workspace = ResourcesPlugin.getWorkspace();
        IProject[] projects = workspace.getRoot().getProjects(IContainer.INCLUDE_HIDDEN);
        for (IProject project : projects) {
            try {
                if (TEMP_PROJECT_NAME.equalsIgnoreCase(project.getDescription().getName())) {
                    return project;
                }
            } catch (Exception re) {
                if (re.getMessage().contains("Project '" + TEMP_PROJECT_NAME + "' is not open")) {
                    return project;
                }
            }
        }
        return null;
    }

    @NotNull
    public static void removeTempProject() {
        try {
            IProject project = getTempProject();
            if (project != null) {
                project.delete(true, true, null);
            }
        } catch (CoreException e) {
            e.printStackTrace();
        }
    }
}
