package com.xliic.openapi.tree.ui;

import static com.xliic.openapi.OpenApiUtils.getToolWindowComponent;

import javax.inject.Inject;

import org.eclipse.core.resources.IFile;
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
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.actions.ActionContext;
import org.eclipse.ui.internal.themes.WorkbenchThemeManager;
import org.eclipse.ui.part.ViewPart;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.Disposable;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.api.IDataService;
import com.xliic.openapi.services.api.IParserService;
import com.xliic.openapi.tree.OpenAPILAFListener;
import com.xliic.openapi.tree.OpenAPIMouseMotionListener;
import com.xliic.openapi.tree.OpenAPITreeActionGroup;
import com.xliic.openapi.tree.OpenAPITreeContentProvider;
import com.xliic.openapi.tree.OpenAPITreeExpansionListener;
import com.xliic.openapi.tree.OpenAPITreeLabelProvider;
import com.xliic.openapi.tree.OpenAPITreeSelectionChangedListener;
import com.xliic.openapi.tree.PanelManager;
import com.xliic.openapi.utils.EditorUtil;
import com.xliic.openapi.utils.OpenAPIUtils;

@SuppressWarnings("restriction")
public class OpenAPITreeView extends ViewPart implements PanelManager, IMenuListener, Disposable {

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

	private final ITreeContentProvider contentProvider = new OpenAPITreeContentProvider();
	private StyledCellLabelProvider labelProvider;

	private OpenAPILAFListener lafListener;
	private IEventBroker eventBroker;
	private boolean isValid;

	public OpenAPITreeView() {
		this.listener = new OpenAPITreeSelectionChangedListener();
		isValid = true;
	}

	public static PanelManager getInstance(@NotNull Project project) {
		return (PanelManager) getToolWindowComponent(project, ToolWindowId.OPEN_API);
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

		fActionSet = new OpenAPITreeActionGroup();
		MenuManager menuMgr = new MenuManager("#PopupMenu");
		menuMgr.setRemoveAllWhenShown(true);
		menuMgr.addMenuListener(this);
		fContextMenu = menuMgr.createContextMenu(viewer.getTree());
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

				IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
				IParserService parserService = PlatformUI.getWorkbench().getService(IParserService.class);
				ParserData data = parserService.parse(EditorUtil.getDocument(fileInput).get(), fileType);
				OpenApiVersion version = data.getVersion();
				if (version == OpenApiVersion.Unknown) {
					continue;
				}

				dataService.setFileProperty(new VirtualFile(file).getPath(), new FileProperty(fileType, version));
				dataService.setParserData(new VirtualFile(file).getPath(), data);
			} catch (PartInitException e) {
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
		handleSelectedFile(new VirtualFile(file));
	}

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
		} else {
			isValid = false;
			String text = OpenApiBundle.message("openapi.tree.invalid.empty.text");
			viewer.getTree().setToolTipText(text + " " + exceptionMessage);
			viewer.getTree().setBackground(new Color(getSite().getShell().getDisplay(), rgbErrorBackground));
			viewer.getTree().setForeground(new Color(getSite().getShell().getDisplay(), rgbErrorForegraund));
		}
	}
}
