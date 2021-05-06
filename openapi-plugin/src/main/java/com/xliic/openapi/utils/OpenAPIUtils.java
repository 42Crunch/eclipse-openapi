package com.xliic.openapi.utils;

import static com.xliic.openapi.OpenApiPanelKeys.OPENAPI_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.SWAGGER_KEY;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;
import javax.validation.constraints.NotNull;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.FontData;
import org.eclipse.ui.IEditorDescriptor;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IEditorReference;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.internal.Workbench;
import org.eclipse.ui.part.FileEditorInput;
import org.eclipse.ui.texteditor.ITextEditor;
import org.json.JSONObject;

import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.tree.OpenApiTreeNode;

@SuppressWarnings("restriction")
public class OpenAPIUtils {
	
	private final static int DEFAULT_PADDING = 2;
	
	public static boolean detectCrLfEOL(@NotNull String text) {
		int i = text.indexOf('\n');
		if (i < 1) {
			return false;
		}
    	return text.charAt(i - 1) == '\r';
    }
	
	public static Font getBoldFont(Font font) {
    	FontData[] data = font.getFontData();
    	for (int i= 0; i<data.length; i++) {
    		data[i].setStyle(SWT.BOLD);
    	}
    	return new Font(font.getDevice(), data);
    }
	
	public static Font getItalicFont(Font font) {
    	FontData[] data = font.getFontData();
    	for (int i= 0; i<data.length; i++) {
    		data[i].setStyle(SWT.ITALIC);
    	}
    	return new Font(font.getDevice(), data);
    }
	
	public static TreePath getTreePathFromTreeNode(TreeNode node) {
		
		List<Object> tmp = new LinkedList<>();
		DefaultMutableTreeNode root = (DefaultMutableTreeNode) node;
		tmp.add(root);
		
        while (root.getParent() != null) {
            root = (DefaultMutableTreeNode) root.getParent();
            tmp.add(root);
        }
		return new TreePath(tmp.toArray());
	}

	public static IFile getIFile(String absFileName) {

        IWorkspaceRoot root = ResourcesPlugin.getWorkspace().getRoot();
        URI uri = new org.eclipse.core.runtime.Path(absFileName).toFile().toURI();
        IFile[] files = root.findFilesForLocationURI(uri);
		if ((files != null) && (files.length > 0)) {
			if (files.length > 1) {
				// In case of several nested projects, IFile must belong to the closest parent project
				Arrays.sort(files, new Comparator<IFile>() {
					@Override
					public int compare(IFile f1, IFile f2) {
						return Integer.compare(f1.getFullPath().segmentCount(), f2.getFullPath().segmentCount());
					}
				});
			}
			return files[0];
		}

		// Here project is not a part of workspace
		// API findFilesForLocationURI knows nothing about it
		IFile resultFile = null;
		int maxIndex = -1;
		final String fileName = uri.getPath();
		IProject [] projects = ResourcesPlugin.getWorkspace().getRoot().getProjects();
		for (int i = 0 ; i < projects.length ; i++) {
			IProject project = projects[i];
            if (project.exists()) {
            	String projectName = project.getName();
            	int index = fileName.indexOf(projectName);
        		// In case of several nested projects, IFile must belong to the closest parent project
                if (index > maxIndex) {
	                IFile file = project.getProject().getFile(fileName.substring(index + projectName.length() + 1));
	                if (file.exists()) {
	                	maxIndex = index;
	                	resultFile = file;
	                }
                }
            }
		}
		return resultFile;
	}
	
	public static String getAbsoluteFullFilePath(@NotNull IFile file) {
		
		String fileName = file.getFullPath().toString();
		IPath projectLocation = file.getProject().getLocation(); 
		File rootPath = projectLocation.uptoSegment(projectLocation.segmentCount() - 1).toFile();	
		File ioFile = new File(rootPath, fileName);
		
		if (!ioFile.exists()) {
			// Here project is not a part of workspace
			// Eclipse will add project name to the beginning of the file name
			// Thus the file name will become invalid and needs to be reconstructed
			// For example: fileName = /EclipseProjects/tmp/multifile-petstore/openapi.yaml
			IProject [] projects = ResourcesPlugin.getWorkspace().getRoot().getProjects();
			for (int i = 0 ; i < projects.length ; i++) {
				IProject project = projects[i];
	            if (project.exists()) {
	            	String projectPrefix = "/" + project.getName();
	            	if (fileName.startsWith(projectPrefix)) {
	            		rootPath = projectLocation.toFile();
	            		fileName = fileName.replace(projectPrefix, "");
	            		ioFile = new File(rootPath, fileName);
	            		break;
	            	}
	            }
			}
		}
		try {
			return ioFile.getCanonicalPath();
		} 
		catch (IOException e) {
		}
		return ioFile.getPath();
	}
	
	public static boolean equals(@NotNull IFile file1, @NotNull URI uri) {
		
		String f1 = getAbsoluteFullFilePath(file1);
		String f2 = uri.getPath();
		
		if (f1.contains("\\")) {
			f1 = f1.replace("\\", "/");
		}
		if (f2.startsWith("/") && !f1.startsWith("/")) {
			f1 = "/" + f1;
		}		
		return f1.equals(f2);		
	}

    public static String getTextFromFile(@NotNull URI uri) {
    	
    	// First check if the file is opened
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
    				if (equals(file, uri)) {
    					return EditorUtil.getDocument(fileInput).get();
    				}
                }
            }
        }
		// Read from the disk
		try {
			String file = uri.getPath();
			if (file.startsWith("/")) {
				file = file.replaceFirst("/", "");
			}
			return Files.readString(Path.of(file));
		}
		catch (Exception ignored) {
			return null;
		}
    }
    
    public static List<IFileEditorInput> getOpenedIFileEditorInputs() {
    	
        IWorkbench workbench= PlatformUI.getWorkbench();
        IWorkbenchWindow[] windows= workbench.getWorkbenchWindows();
        List<IFileEditorInput> result = new LinkedList<IFileEditorInput>();
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
    				result.add(fileInput);
                }
            }
        }
        return result;
    }
	
    public static Map<String, Object> getMap(Map<String, Object> source, String key) {
        if (source != null && source.containsKey(key)) {
            return ((JSONObject) source.get(key)).toJsonMap();
        }
        return null;
    }

    public static Object getValue(Map<String, Object> source, String key) {
        if (source != null && source.containsKey(key)) {
            return source.get(key);
        }
        return null;
    }
	
	public static OpenApiFileType getFileType(IFile file) {
		 
		if ("json".equals(file.getFileExtension())) {
			return OpenApiFileType.Json;
		}
		else if ("yaml".equals(file.getFileExtension()) || "yml".equals(file.getFileExtension())) {
				return OpenApiFileType.Yaml;
		}
		else {
			return OpenApiFileType.Unsupported;
		}
	 }

	public static IFile getSelectedOpenAPIFile() {	
		IFile file = getSelectedFile();
		if (file == null) {
			return null;
		}
		IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
        if (!dataService.hasFileProperty(file.getFullPath().toPortableString())) {
            return null;
        }
        return file;
	}

	public static IFile getSelectedFile() {
		IFile file = null;
		Workbench workbench = Workbench.getInstance();
		if (workbench.getActiveWorkbenchWindow() == null) {

			IWorkbenchWindow[] windows = workbench.getWorkbenchWindows();
			if (windows.length == 0) {
				return null;
			}
			else {
				IWorkbenchWindow window = windows[0];
				IWorkbenchPage page = window.getActivePage();
				IEditorPart editorPart = page.getActiveEditor();
				IFileEditorInput fileInput = (IFileEditorInput) editorPart.getEditorInput();
				file = fileInput.getFile();	
			}
		}
		else {
			if (EditorUtil.getCurrentEditor() == null) {
				return null;
			}
			IEditorInput input = EditorUtil.getCurrentEditor().getEditorInput();
			if (input instanceof IFileEditorInput) {
				IFileEditorInput fileInput = (IFileEditorInput) input;
				file = fileInput.getFile();
			}
		}
        return file;
	}
	
    public static DefaultMutableTreeNode getFirstNotEmptyPanel(DefaultMutableTreeNode panelNode) {

        String panelName = ((OpenApiTreeNode) panelNode.getUserObject()).getKey();
        DefaultMutableTreeNode root = (DefaultMutableTreeNode) panelNode.getParent();
        DefaultMutableTreeNode nextPanel = null;

        int count = root.getChildCount();
        boolean panelNodeFound = false;

        for (int i = count - 1 ; i >= 0 ; i--) {

            DefaultMutableTreeNode p = (DefaultMutableTreeNode) root.getChildAt(i);
            OpenApiTreeNode o = (OpenApiTreeNode) p.getUserObject();

            if (!panelNodeFound && panelName.equals(o.getKey())) {
                panelNodeFound = true;
                continue;
            }

            if (panelNodeFound && o.isPanelExists()) {
                nextPanel = p;
                break;
            }
        }
        return nextPanel;
    }
    
    public static int getPadding(DefaultMutableTreeNode root, OpenApiFileType fileType) {

        while (root.getParent() != null) {
            root = (DefaultMutableTreeNode) root.getParent();
        }

        int count = root.getChildCount();
        for (int i = 0 ; i < count ; i++) {

            DefaultMutableTreeNode p = (DefaultMutableTreeNode) root.getChildAt(i);
            int count2 = p.getChildCount();
            for (int j = 0 ; j < count2 ; j++) {

                DefaultMutableTreeNode p2 = (DefaultMutableTreeNode) p.getChildAt(j);
                OpenApiTreeNode o2 = (OpenApiTreeNode) p2.getUserObject();

                if (fileType == OpenApiFileType.Json) {
                    if (OPENAPI_KEY.equals(o2.getKey()) || SWAGGER_KEY.equals(o2.getKey()))  {
                        return (int) o2.getPadding() - 1;
                    }
                } else {
                    if (o2.hasMapParent() && o2.getPadding() > 0) {
                        return (int) o2.getPadding();
                    }
                }
            }
        }

        return DEFAULT_PADDING;
    }

    public static ITextEditor gotoFile(IFile file, int offset, int length) {
    	
        IWorkbenchPage page = EditorUtil.getActivePage();
        IEditorInput input = new FileEditorInput(file);
        IEditorPart part = page.findEditor(input);
        ITextEditor editor = null;
        if (part instanceof ITextEditor) {
            editor = (ITextEditor) part;
        }
        else {
            try {
                IEditorDescriptor desc = PlatformUI.getWorkbench().getEditorRegistry().getDefaultEditor(file.getName());
                IEditorPart editorPart = page.openEditor(input, desc.getId());
                if (editorPart instanceof ITextEditor) {
                	editor = (ITextEditor) page.openEditor(input, desc.getId());	
                }
                else {
                	editor = null;
                }
            } 
            catch (PartInitException e) {
                e.printStackTrace();
                return null;
            }
        }
        if (offset >= 0) {
            editor.selectAndReveal(offset, length);
        }
        page.activate(editor);
        return editor;
    }
}
