package com.crunch42.openapi.tree.ui;

import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.ui.part.*;
import org.eclipse.jface.viewers.*;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.core.resources.IFile;
import org.eclipse.e4.core.services.events.IEventBroker;
import org.eclipse.jface.action.*;
import org.eclipse.ui.*;
import org.eclipse.ui.actions.ActionContext;
import org.eclipse.ui.internal.themes.WorkbenchThemeManager;
import org.eclipse.swt.SWT;

import javax.inject.Inject;

import org.eclipse.ui.texteditor.ITextEditor;

import com.crunch42.openapi.FileProperty;
import com.crunch42.openapi.OpenApiBundle;
import com.crunch42.openapi.OpenApiFileType;
import com.crunch42.openapi.OpenApiVersion;
import com.crunch42.openapi.actions.SecurityAuditAction;
import com.crunch42.openapi.parser.tree.ParserData;
import com.crunch42.openapi.services.IDataService;
import com.crunch42.openapi.services.IParserService;
import com.crunch42.openapi.tree.OpenAPILAFListener;
import com.crunch42.openapi.tree.OpenAPIMouseMotionListener;
import com.crunch42.openapi.tree.OpenAPITreeActionGroup;
import com.crunch42.openapi.tree.OpenAPITreeContentProvider;
import com.crunch42.openapi.tree.OpenAPITreeExpansionListener;
import com.crunch42.openapi.tree.OpenAPITreeLabelProvider;
import com.crunch42.openapi.tree.OpenAPITreeSelectionChangedListener;
import com.crunch42.openapi.tree.PanelManager;
import com.crunch42.openapi.utils.EditorUtil;
import com.crunch42.openapi.utils.OpenAPIUtils;

@SuppressWarnings("restriction")
public class OpenAPITreeView extends ViewPart implements PanelManager, IMenuListener {

	public static final String ID = "com.crunch42.openapi.tree.ui.OpenAPITreeView";

	private static final RGB RGB_ERROR_BACKGROUND = new RGB(242, 242, 242);
	private static final RGB RGB_ERROR_BACKGROUND_DARCULA = new RGB(128, 128, 128);
	
	private static final RGB RGB_ERROR_FOREGRAUND = new RGB(255, 102, 102);
	private static final RGB RGB_ERROR_FOREGRAUND_DARCULA = new RGB(255, 255, 255);
	
	private static RGB rgbErrorForegraund;
	private static RGB rgbErrorBackground;

	@Inject IWorkbench workbench;
	
	private TreeViewer viewer;
    private final OpenAPITreeSelectionChangedListener listener;
    private OpenAPITreeExpansionListener expansionListener;
    private OpenAPIMouseMotionListener mouseMotionListener;
    private OpenAPITreeActionGroup fActionSet;
    private Menu fContextMenu;
    
    private final ITreeContentProvider contentProvider = new OpenAPITreeContentProvider();
    private StyledCellLabelProvider labelProvider;
    
	private OpenAPILAFListener lafListener;
	private IEventBroker eventBroker;
	private boolean isValid;

	public OpenAPITreeView() {
    	this.listener = new OpenAPITreeSelectionChangedListener();
    	isValid = true;
    }

    private DecoratingStyledCellLabelProvider createLabelProvider() {
        return new DecoratingStyledCellLabelProvider(
                new OpenAPITreeLabelProvider(workbench), 
                workbench.getDecoratorManager().getLabelDecorator(), 
                DecorationContext.DEFAULT_CONTEXT);
    }

	@Override
	public void createPartControl(Composite parent) {

		viewer = new TreeViewer(parent, SWT.MULTI | SWT.H_SCROLL | SWT.V_SCROLL);

        labelProvider = createLabelProvider();
        viewer.setLabelProvider(labelProvider);
        viewer.setContentProvider(contentProvider);
        viewer.addSelectionChangedListener(listener);
        expansionListener = new OpenAPITreeExpansionListener(workbench, viewer);
        viewer.addTreeListener(expansionListener);
        mouseMotionListener = new OpenAPIMouseMotionListener(viewer);
        viewer.getTree().addMouseMoveListener(mouseMotionListener);

        lafListener = new OpenAPILAFListener(workbench, this, parent);
        eventBroker = workbench.getService(IEventBroker.class);
        eventBroker.subscribe(WorkbenchThemeManager.Events.THEME_REGISTRY_RESTYLED, lafListener);
        
        fActionSet = new OpenAPITreeActionGroup();
        MenuManager menuMgr = new MenuManager("#PopupMenu");
        menuMgr.setRemoveAllWhenShown(true);
        menuMgr.addMenuListener(this);
        fContextMenu= menuMgr.createContextMenu(viewer.getTree());
        viewer.getTree().setMenu(fContextMenu);

        handleToolWindowRegistered();
	}
	
	@Override
   public void dispose() {
    	super.dispose();
        if (fActionSet != null) {
            fActionSet.dispose();
        }
        if (labelProvider != null) {
            labelProvider.dispose();
        }
        expansionListener.clean();
        mouseMotionListener.cleanPaths();
        viewer.removeSelectionChangedListener(listener);
        viewer.removeTreeListener(expansionListener);
        eventBroker.unsubscribe(lafListener);
    }

	@Override
	public void setFocus() {
		viewer.getControl().setFocus();
	}

	@Override
	public void handleAllFilesClosed() {
	    setNoOpenAPITreeBackGround();
		mouseMotionListener.cleanPaths();
		viewer.setInput(null);
		eventBroker.send(SecurityAuditAction.TOPIC_OPENAPI_VALIDATION_CHANGED, false);
	}

	@Override
	public void handleClosedFile(IFile file) {
		expansionListener.clean(file);
	}

	@Override
	public void handleSelectedFile(IFile file) {
		
		IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
		mouseMotionListener.cleanPaths();
		
	    if (dataService.hasParserData(file.getFullPath().toPortableString())) {
	      ParserData data = dataService.getParserData(file.getFullPath().toPortableString());
	      setTreeBackGround(data.isValid(), data.getExceptionMessage());
	      if (!data.isValid()) {
	    	  viewer.setInput(null);
	    	  return;
	      }
	      viewer.setInput(data.getRoot());	      
	      expansionListener.expand(file);
	    }
	    else {
	    	viewer.setInput(null);
	    	setNoOpenAPITreeBackGround();
	    }
	}

	@Override
	public void handleToolWindowRegistered() {
		
		IWorkbenchPage page = EditorUtil.getActivePage();
		IEditorReference[] editors = page.getEditorReferences();
		
		for (IEditorReference editor : editors) {
			try {
				IEditorInput input = editor.getEditorInput();
				if (!(input instanceof IFileEditorInput)) {
					continue;			
				}
				
				IFileEditorInput fileInput = (IFileEditorInput) input;
				IFile file = fileInput.getFile();
				
		        OpenApiFileType fileType = OpenAPIUtils.getFileType(file);
		        if (fileType == OpenApiFileType.Unsupported) {
		        	continue;
		        }
		        
		        IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
		        dataService.addReportDocumentListener(file);
		        
				IParserService parserService = (IParserService) PlatformUI.getWorkbench().getService(IParserService.class);			
				ParserData data = parserService.parse(EditorUtil.getDocument(fileInput).get(), fileType);
		        OpenApiVersion version = data.getVersion();
		        if (version == OpenApiVersion.Unknown) {
		        	continue;
		        }

		        dataService.setFileProperty(file.getFullPath().toPortableString(), new FileProperty(fileType, version));
		        dataService.setParserData(file.getFullPath().toPortableString(), data);
		        dataService.addTreeDocumentListener(EditorUtil.getDocument(fileInput));
			} 
			catch (PartInitException e) {
				e.printStackTrace();
			}
		}
		
		ITextEditor editor = (ITextEditor) EditorUtil.getCurrentEditor();
		if (editor == null) {
			return;
		}
		IEditorInput input = editor.getEditorInput();
		if (!(input instanceof IFileEditorInput)) {
			return;			
		}
		IFileEditorInput fileInput = (IFileEditorInput) input;
		IFile file = fileInput.getFile();
		handleSelectedFile(file);	
	}

	@Override
	public void handleDocumentChanged(IFile file) {
		IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
	    ParserData data = dataService.getParserData(file.getFullPath().toPortableString());
	    setTreeBackGround(data.isValid(), data.getExceptionMessage());
	    if (data.isValid()) {
	    	mouseMotionListener.cleanPaths();
	    	viewer.setInput(data.getRoot());
	    	expansionListener.expand(file);
	    }
	}

	@Override
	public void handleFileNameChanged(IFile newFile, IFile oldFile) {
		expansionListener.replace(newFile.getFullPath().toPortableString(), oldFile.getFullPath().toPortableString());
	}

	@Override
	public void menuAboutToShow(IMenuManager menu) {
        fActionSet.setContext(new ActionContext(viewer.getSelection()));
        fActionSet.fillContextMenu(menu);
        fActionSet.setContext(null);	
	}
	
	@Override
	public void handleLAFUpdate(boolean isDarkTheme) {
		rgbErrorForegraund = isDarkTheme ? RGB_ERROR_FOREGRAUND_DARCULA : RGB_ERROR_FOREGRAUND;
		rgbErrorBackground = isDarkTheme ? RGB_ERROR_BACKGROUND_DARCULA : RGB_ERROR_BACKGROUND;
		if (!isValid) {
	    	viewer.getTree().setBackground(new Color(getSite().getShell().getDisplay(), rgbErrorBackground));
	    	viewer.getTree().setForeground(new Color(getSite().getShell().getDisplay(), rgbErrorForegraund));
		}
	}
	
	private void setNoOpenAPITreeBackGround() {
	}
	
	private void setTreeBackGround(boolean valid, String exceptionMessage) {
		if (valid) {
	    	isValid = true;
	    	viewer.getTree().setToolTipText(null);
	    	viewer.getTree().setBackground(null);
	    	viewer.getTree().setForeground(null);
	    	lafListener.refresh();
	    	eventBroker.send(SecurityAuditAction.TOPIC_OPENAPI_VALIDATION_CHANGED, true);
	    }
	    else {
	    	isValid = false;
	    	String text = OpenApiBundle.message("openapi.tree.invalid.empty.text");
	    	viewer.getTree().setToolTipText(text + " " + exceptionMessage);
	    	viewer.getTree().setBackground(new Color(getSite().getShell().getDisplay(), rgbErrorBackground));
	    	viewer.getTree().setForeground(new Color(getSite().getShell().getDisplay(), rgbErrorForegraund));
	    	eventBroker.send(SecurityAuditAction.TOPIC_OPENAPI_VALIDATION_CHANGED, false);
	    }
	}
}
