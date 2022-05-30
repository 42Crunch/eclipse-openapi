package com.xliic.openapi.tree.ui;

import javax.inject.Inject;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.eclipse.jface.action.IMenuListener;
import org.eclipse.jface.action.IMenuManager;
import org.eclipse.jface.action.MenuManager;
import org.eclipse.jface.viewers.DecoratingStyledCellLabelProvider;
import org.eclipse.jface.viewers.DecorationContext;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.StyledCellLabelProvider;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorReference;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.actions.ActionContext;
import org.eclipse.ui.internal.themes.WorkbenchThemeManager;
import org.eclipse.ui.part.ViewPart;
import org.eclipse.ui.texteditor.ITextEditor;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.api.IDataService;
import com.xliic.openapi.services.api.IParserService;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.WindowListener;
import com.xliic.openapi.tree.OpenAPILAFListener;
import com.xliic.openapi.tree.OpenAPIMouseMotionListener;
import com.xliic.openapi.tree.OpenAPITreeActionGroup;
import com.xliic.openapi.tree.OpenAPITreeContentProvider;
import com.xliic.openapi.tree.OpenAPITreeExpansionListener;
import com.xliic.openapi.tree.OpenAPITreeLabelProvider;
import com.xliic.openapi.tree.OpenAPITreeSelectionChangedListener;

@SuppressWarnings("restriction")
public class OpenAPITreeView extends ViewPart 
	implements FileListener, WindowListener, IMenuListener, Disposable {

	public static final String ID = "com.xliic.openapi.tree.ui.OpenAPITreeView";

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
	
	private final ITreeContentProvider contentProvider = new OpenAPITreeContentProvider();
	private StyledCellLabelProvider labelProvider;

	private OpenAPILAFListener lafListener;
	private IEventBroker eventBroker;
	private boolean isValid;

	public OpenAPITreeView() {
		this.listener = new OpenAPITreeSelectionChangedListener();
		isValid = true;
		project = OpenAPIAbstractUIPlugin.getInstance().getProject();
	}

	private DecoratingStyledCellLabelProvider createLabelProvider() {
		return new DecoratingStyledCellLabelProvider(new OpenAPITreeLabelProvider(workbench),
				workbench.getDecoratorManager().getLabelDecorator(), DecorationContext.DEFAULT_CONTEXT);
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

		project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
		
		fActionSet = new OpenAPITreeActionGroup();
		MenuManager menuMgr = new MenuManager("#PopupMenu");
		menuMgr.setRemoveAllWhenShown(true);
		menuMgr.addMenuListener(this);
		fContextMenu = menuMgr.createContextMenu(viewer.getTree());
		viewer.getTree().setMenu(fContextMenu);

		//handleToolWindowRegistered(); // ?
		
	    project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
	    project.getMessageBus().connect().subscribe(WindowListener.TOPIC, this);

	    VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
	    if (file != null) {
	      handleSelectedFile(file);
	    }
	    
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
		}
	}

	@Override
	public void handleClosedFile(VirtualFile file) {
		expansionListener.clean(file);
	}

	@Override
	public void handleSelectedFile(VirtualFile file) {

		IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
		mouseMotionListener.cleanPaths();

		if (dataService.hasParserData(file.getPath())) {
			ParserData data = dataService.getParserData(file.getPath());
			setTreeBackGround(data.isValid(), data.getExceptionMessage());
			if (!data.isValid()) {
				viewer.setInput(null);
				return;
			}
			viewer.setInput(data.getRoot());
			expansionListener.expand(file);
		} else {
			viewer.setInput(null);
			setNoOpenAPITreeBackGround();
		}
	}

	@Override
	public void handleToolWindowRegistered(String id) {

		IWorkbenchPage page = EclipseUtil.getActivePage();
		IEditorReference[] editors = page.getEditorReferences();

		for (IEditorReference editor : editors) {
			try {
				IEditorInput input = editor.getEditorInput();
				if (!EclipseUtil.isSupported(input)) {
					continue;
				}
				VirtualFile file = EclipseUtil.getVirtualFile(input);

				OpenApiFileType fileType = OpenApiUtils.getFileType(file);
				if (fileType == OpenApiFileType.Unsupported) {
					continue;
				}

				IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
				IParserService parserService = PlatformUI.getWorkbench().getService(IParserService.class);
				ParserData data = parserService.parse(EclipseUtil.getDocument(input).get(), fileType);
				OpenApiVersion version = data.getVersion();
				if (version == OpenApiVersion.Unknown) {
					continue;
				}

				dataService.setFileProperty(file.getPath(), new FileProperty(fileType, version));
				dataService.setParserData(file.getPath(), data);
			} catch (PartInitException e) {
				e.printStackTrace();
			}
		}

		ITextEditor editor = (ITextEditor) EclipseUtil.getCurrentEditor();
		if (editor == null) {
			return;
		}
		IEditorInput input = editor.getEditorInput();
		if (!EclipseUtil.isSupported(input)) {
			return;
		}
		handleSelectedFile(EclipseUtil.getVirtualFile(input));
	}
	
	@Override
	public void handleToolWindowOpened(String id) {}

	@Override
	public void handleDocumentChanged(VirtualFile file) {
		IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
		ParserData data = dataService.getParserData(file.getPath());
		setTreeBackGround(data.isValid(), data.getExceptionMessage());
		if (data.isValid()) {
			mouseMotionListener.cleanPaths();
			viewer.setInput(data.getRoot());
			expansionListener.expand(file);
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
