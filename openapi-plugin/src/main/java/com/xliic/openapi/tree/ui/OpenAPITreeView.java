package com.xliic.openapi.tree.ui;

import java.util.LinkedList;
import java.util.List;

import javax.inject.Inject;
import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.eclipse.jface.action.IMenuListener;
import org.eclipse.jface.action.IMenuManager;
import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.jface.action.MenuManager;
import org.eclipse.jface.viewers.DecoratingStyledCellLabelProvider;
import org.eclipse.jface.viewers.DecorationContext;
import org.eclipse.jface.viewers.StyledCellLabelProvider;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.actions.ActionContext;
import org.eclipse.ui.internal.themes.WorkbenchThemeManager;
import org.eclipse.ui.part.ViewPart;

import com.xliic.core.Disposable;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.ide.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.DefaultTreeContentProvider;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.parser.dmtn.DMTNConverter;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.settings.SettingsKeys;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.topic.WindowListener;
import com.xliic.openapi.tree.OpenAPIAlphaSortAction;
import com.xliic.openapi.tree.OpenAPILAFListener;
import com.xliic.openapi.tree.OpenAPIMouseMotionListener;
import com.xliic.openapi.tree.OpenAPITreeActionGroup;
import com.xliic.openapi.tree.OpenAPITreeExpansionListener;
import com.xliic.openapi.tree.OpenAPITreeLabelProvider;
import com.xliic.openapi.tree.OpenAPITreeSelectionChangedListener;

@SuppressWarnings("restriction")
public class OpenAPITreeView extends ViewPart 
	implements FileListener, WindowListener, SettingsListener, IMenuListener, Disposable {

	private static final RGB RGB_ERROR_BACKGROUND = new RGB(242, 242, 242);
	private static final RGB RGB_ERROR_BACKGROUND_DARCULA = new RGB(128, 128, 128);

	private static final RGB RGB_ERROR_FOREGRAUND = new RGB(255, 102, 102);
	private static final RGB RGB_ERROR_FOREGRAUND_DARCULA = new RGB(255, 255, 255);

	private static RGB rgbErrorForegraund;
	private static RGB rgbErrorBackground;

	@Inject
	IWorkbench workbench;

	private TreeViewer viewer;
	private final OpenAPITreeSelectionChangedListener listener;
	private OpenAPITreeExpansionListener expansionListener;
	private OpenAPIMouseMotionListener mouseMotionListener;
	private OpenAPITreeActionGroup fActionSet;
	private Menu fContextMenu;
	private final Project project;
	private DMTNConverter converter;
	private StyledCellLabelProvider labelProvider;
	private List<AnJAction> titleActions = new LinkedList<>();

	private OpenAPILAFListener lafListener;
	private IEventBroker eventBroker;
	private boolean isValid;

	public OpenAPITreeView() {
		this.listener = new OpenAPITreeSelectionChangedListener();
		isValid = true;
		project = Project.getInstance();
	}

	private DecoratingStyledCellLabelProvider createLabelProvider() {
		return new DecoratingStyledCellLabelProvider(new OpenAPITreeLabelProvider(workbench),
				workbench.getDecoratorManager().getLabelDecorator(), DecorationContext.DEFAULT_CONTEXT);
	}
	
    @Override
    public void init(IViewSite site) throws PartInitException {
        super.init(site);
        IToolBarManager toolBarManager = site.getActionBars().getToolBarManager();
        AnJAction action = new OpenAPIAlphaSortAction(project, this);
        toolBarManager.add(action);
        titleActions.add(action);
    }
    
    public void updateToolBarActions() {
    	for (AnJAction action : titleActions) {
   			action.update();	
    	}
    }
    
    public void disableToolBarActions() {
    	for (AnJAction action : titleActions) {
   			action.setEnabled(false);
    	}
    }
    
    private void checkAlphaSortAction(boolean checked) {
    	for (AnJAction action : titleActions) {
   			if (action instanceof OpenAPIAlphaSortAction) {
   				action.setChecked(checked);
   			}
    	}
    }

	@Override
	public void createPartControl(Composite parent) {

		viewer = new TreeViewer(parent, SWT.MULTI | SWT.H_SCROLL | SWT.V_SCROLL);

		labelProvider = createLabelProvider();
		viewer.setLabelProvider(labelProvider);
		viewer.setContentProvider(new DefaultTreeContentProvider());
		viewer.addSelectionChangedListener(listener);
		expansionListener = new OpenAPITreeExpansionListener(workbench, viewer, project);
		viewer.addTreeListener(expansionListener);
		mouseMotionListener = new OpenAPIMouseMotionListener(project, viewer);
		viewer.getTree().addMouseMoveListener(mouseMotionListener);

		lafListener = new OpenAPILAFListener(workbench, this, parent);
		eventBroker = workbench.getService(IEventBroker.class);
		eventBroker.subscribe(WorkbenchThemeManager.Events.THEME_REGISTRY_RESTYLED, lafListener);

		project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
		
		fActionSet = new OpenAPITreeActionGroup(project);
		MenuManager menuMgr = new MenuManager("#PopupMenu");
		menuMgr.setRemoveAllWhenShown(true);
		menuMgr.addMenuListener(this);
		fContextMenu = menuMgr.createContextMenu(viewer.getTree());
		viewer.getTree().setMenu(fContextMenu);

	    converter = new DMTNConverter(PropertiesComponent.getInstance().getBoolean(SettingsKeys.ABC_SORT));
	    
		//handleToolWindowRegistered(); // ?
		
	    project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
	    project.getMessageBus().connect().subscribe(WindowListener.TOPIC, this);
	    project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);

	    VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
	    if (file != null) {
	      handleSelectedFile(file);
	    }
	    updateToolBarActions();
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
		if (!isDisposed()) {
			viewer.setInput(null);
			disableToolBarActions();
		}
	}

	@Override
	public void handleClosedFile(VirtualFile file) {
		expansionListener.clean(file);
	}

	@Override
	public void handleSelectedFile(VirtualFile file) {
	    ASTService astService = ASTService.getInstance(project);
	    if (astService.isKnownOpenAPIFile(file.getPath())) {
	      try {
	        DefaultMutableTreeNode root = converter.convert(astService.getOpenAPIRootNode(file.getPath()));
	        setTreeBackGround(true, null);
	        viewer.setInput(root);
	        updateToolBarActions();
	        expansionListener.expand(file);
	      }
	      catch (Exception e) {
	        setTreeBackGround(false, e.getMessage());
	        viewer.setInput(null);
	        disableToolBarActions();
	      }
	    }
	    else {
	      setNoOpenAPITreeBackGround();
	      viewer.setInput(null);
	      disableToolBarActions();
	    }
	}

	@Override
	public void handleToolWindowRegistered(String id) {
	    if (ToolWindowId.OPEN_API.equals(id)) {
	        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
	        if (file == null) {
	          return;
	        }
	        handleSelectedFile(file);
	      }
	}
	
	@Override
	public void handleToolWindowOpened(String id) {}

	@Override
	public void handleDocumentChanged(VirtualFile file) {
	    ASTService astService = ASTService.getInstance(project);
	    if (astService.isKnownOpenAPIFile(file.getPath())) {
	      try {
	        DefaultMutableTreeNode root = converter.convert(astService.getOpenAPIRootNode(file.getPath()));
	        setTreeBackGround(true, null);
	        viewer.setInput(root);
	        updateToolBarActions();
	        expansionListener.expand(file);
	      }
	      catch (Exception e) {
	        setTreeBackGround(false, e.getMessage());
	        disableToolBarActions();
	      }
	    }
	}

	@Override
	public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {
		expansionListener.replace(newFile.getPath(), oldFileName);
	}

	@Override
	public void menuAboutToShow(IMenuManager menu) {
		fActionSet.setContext(new ActionContext(viewer.getSelection()));
		fActionSet.fillContextMenu(menu);
		fActionSet.setContext(null);
	}
	
	@Override
	public void propertiesUpdated(String key) {
	  if (SettingsKeys.ABC_SORT.equals(key)) {
		  boolean sort = PropertiesComponent.getInstance().getBoolean(SettingsKeys.ABC_SORT);
		  checkAlphaSortAction(sort);
		  sort(sort);
	  	}
	}
	
	public void sort(boolean sort) {
		  converter.setSortABC(sort);
		  VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
		  if (file != null) {
			  SwingUtilities.invokeLater(() -> handleSelectedFile(file));
		  }
	}

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
		} else {
			isValid = false;
			String text = OpenApiBundle.message("openapi.tree.invalid.empty.text");
			viewer.getTree().setToolTipText(text + " " + exceptionMessage);
			viewer.getTree().setBackground(new Color(getSite().getShell().getDisplay(), rgbErrorBackground));
			viewer.getTree().setForeground(new Color(getSite().getShell().getDisplay(), rgbErrorForegraund));
		}
	}

	private boolean isDisposed() {
		return (viewer == null) || viewer.getControl().isDisposed();
	}
}
