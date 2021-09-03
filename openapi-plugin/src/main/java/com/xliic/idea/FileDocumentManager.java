package com.xliic.idea;

import org.jetbrains.annotations.NotNull;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.IDocument;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorReference;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;

import com.xliic.idea.document.Document;
import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.utils.EditorUtil;

public class FileDocumentManager {
	
	private final static FileDocumentManager fileDocumentManager = new FileDocumentManager(); 
	
	public static FileDocumentManager getInstance() {
		return fileDocumentManager;
	}
	
    public Document getDocument(@NotNull VirtualFile inputFile) {
    	
        IWorkbench workbench= PlatformUI.getWorkbench();
        IWorkbenchWindow[] windows= workbench.getWorkbenchWindows();
        for (int i = 0; i < windows.length; i++) {
        	IWorkbenchPage[] pages= windows[i].getPages();
            for (int x = 0; x < pages.length; x++) {           	
            	IEditorReference[] editors= pages[x].getEditorReferences();
                for(int z = 0; z < editors.length; z++) {
                	IEditorInput input;
					try {
						input = editors[z].getEditorInput();
					} 
					catch (PartInitException e) {
						continue;
					}
    				if (!(input instanceof IFileEditorInput)) {
    					continue;			
    				}
    				IFileEditorInput fileInput = (IFileEditorInput) input;
    				IFile file = fileInput.getFile();
    				if (inputFile.equalsToIFile(file)) {
    					IDocument document = EditorUtil.getDocument(fileInput);
    					return (document == null) ? null : new Document(document);
    				}
                }
            }
        }
        return null;
    }
}
