package com.crunch42.openapi.utils;

import static org.eclipse.jface.preference.PreferenceConverter.getColor;
import static org.eclipse.jface.preference.PreferenceConverter.getDefaultColor;
import static org.eclipse.ui.PlatformUI.getWorkbench;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.part.FileEditorInput;
import org.eclipse.ui.texteditor.DocumentProviderRegistry;
import org.eclipse.ui.texteditor.IDocumentProvider;
import org.eclipse.ui.texteditor.ITextEditor;
import org.eclipse.ui.themes.ITheme;

public class EditorUtil {
    
    public static IProject getProject(IEditorInput input) {
        if (input instanceof IFileEditorInput) {
            return ((IFileEditorInput) input).getFile().getProject();
        }
        else {
            return null;
        }
    }
    
    public static IProject getProject(IEditorPart editor) {
        IProject project = getProject(editor.getEditorInput());
        return project;
    }

    public static IFile getFile(IEditorInput input) {
        if (input instanceof IFileEditorInput) {
            IFileEditorInput fei = (IFileEditorInput) input;
            return fei.getFile();
        }
        else {
            return null;
        }
    }

    public static IFile getFile(IEditorPart editor) {
        if (editor != null) {
            IEditorInput editorInput = editor.getEditorInput();
            if (editorInput instanceof FileEditorInput) {
                FileEditorInput input = 
                        (FileEditorInput) editorInput;
                return input.getFile();
            }
        }
        return null;
    }
    
    public static ITextSelection getSelection(ITextEditor textEditor) {
        ISelectionProvider sp = textEditor.getSelectionProvider();
        return sp == null ? null : (ITextSelection) sp.getSelection();
    }
    
    public static String getSelectionText(ITextEditor textEditor) {
        ITextSelection sel = getSelection(textEditor);
        IDocument document = textEditor.getDocumentProvider()
                .getDocument(textEditor.getEditorInput());
        try {
            return document.get(sel.getOffset(), sel.getLength());
        } 
        catch (BadLocationException e) {
            e.printStackTrace();
            return "";
        }
    }

    public static IEditorPart getCurrentEditor() {
        IWorkbenchPage page = getActivePage();
        return page == null ? null : 
            page.getActiveEditor();
    }

    public static IWorkbenchPage getActivePage() {
        try {
            IWorkbenchWindow window = 
                    getWorkbench()
                        .getActiveWorkbenchWindow();
            return window == null ? null : 
                window.getActivePage();
        }
        catch (IllegalStateException ise) {
            return null;
        }
    }
    
    public static Shell getShell() {
        IWorkbenchWindow activeWindow = 
                getWorkbench()
                    .getActiveWorkbenchWindow();
        if (activeWindow != null) {
            return activeWindow.getShell();
        } 
        else {
            return null;
        }
    }

    public static IEditorPart[] getDirtyEditors() {
        Set<IEditorInput> inputs= new HashSet<IEditorInput>();
        List<IEditorPart> result= new ArrayList<IEditorPart>(0);
        IWorkbench workbench= PlatformUI.getWorkbench();
        IWorkbenchWindow[] windows= workbench.getWorkbenchWindows();
        for(int i= 0; i < windows.length; i++) {
            IWorkbenchPage[] pages= windows[i].getPages();
            for(int x= 0; x < pages.length; x++) {
                IEditorPart[] editors= pages[x].getDirtyEditors();
                for(int z= 0; z < editors.length; z++) {
                    IEditorPart ep= editors[z];
                    IEditorInput input= ep.getEditorInput();
                    if (!inputs.contains(input)) {
                        inputs.add(input);
                        result.add(ep);
                    }
                }
            }
        }
        return result.toArray(new IEditorPart[result.size()]);
    }

    public static IDocument getDocument(IEditorInput ei) {
        try {
            if (ei != null) {
                IDocumentProvider docProvider = 
                        DocumentProviderRegistry.getDefault()
                            .getDocumentProvider(ei);
                docProvider.connect(ei);
                return docProvider.getDocument(ei);
            }
        }
        catch (CoreException e) {
            // fall through
        }
        return null;
    }

    public static ITheme getCurrentTheme() {
        return PlatformUI.getWorkbench()
                .getThemeManager()
                .getCurrentTheme();
    }

    public static Color createColor(IPreferenceStore store, String key) {
    	if (store.contains(key)) {
    		RGB rgb;
    		if (store.isDefault(key)) {
    			rgb = getDefaultColor(store, key);
    		}
    		else {
    			rgb = getColor(store, key);
    		}
    		if (rgb != null) {
    			return new Color(Display.getDefault(), rgb);
    		}
    	}	
    	return null;
    }
}
