package com.xliic.openapi.listeners;

import java.util.Objects;
import java.util.Optional;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IPartListener;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.editors.text.TextEditor;
import org.eclipse.ui.texteditor.IDocumentProvider;

import com.xliic.openapi.FileProperty;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.html.ui.HTMLReportPanelView;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.report.tree.ui.ReportPanelView;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.services.IParserService;
import com.xliic.openapi.settings.AuditKeys;
import com.xliic.openapi.tree.PanelManager;
import com.xliic.openapi.tree.ui.OpenAPITreeView;
import com.xliic.openapi.utils.EditorUtil;
import com.xliic.openapi.utils.OpenAPIUtils;
import com.xliic.openapi.utils.WorkbenchUtils;

public class OpenAPIPartListener implements IPartListener {
	
	private IEditorInput previousInput = null;
	private boolean firstOpenAPIPartOpened = true;
	private IPreferenceStore store;
	
	public OpenAPIPartListener(IPreferenceStore store) {
		this.store = store;
	}
	
	@Override
	public final void partOpened(final IWorkbenchPart part) {

		if (!(part instanceof TextEditor)) {
			return;
		}
			
		IEditorInput input = ((TextEditor) part).getEditorInput();
		if (!(input instanceof IFileEditorInput)) {
			return;			
		}
		
		IFileEditorInput fileInput = (IFileEditorInput) input;
		IFile file = fileInput.getFile();
		
        OpenApiFileType fileType = OpenAPIUtils.getFileType(file);
        if (fileType == OpenApiFileType.Unsupported) {
            return;
        }
        
        IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
        dataService.addReportDocumentListener(file);
        
		IParserService parserService = (IParserService) PlatformUI.getWorkbench().getService(IParserService.class);
		IDocumentProvider dp = ((TextEditor) part).getDocumentProvider();

		ParserData data = parserService.parse(dp.getDocument(input).get(), fileType);
        OpenApiVersion version = data.getVersion();
        if (version == OpenApiVersion.Unknown) {
            return;
        }

        dataService.setFileProperty(file.getFullPath().toPortableString(), new FileProperty(fileType, version));
        dataService.setParserData(file.getFullPath().toPortableString(), data);
        dataService.addTreeDocumentListener(dp.getDocument(input));
        
        // When eclipse is started there may be a case where file is opened, but not activated (selected)
        // To fix that we call activate directly below
        // If the first file is opened manually, there will be 2 activate calls, but that's ok, we have the guard against it
        if (firstOpenAPIPartOpened) {
        	firstOpenAPIPartOpened = false;
			if (store.getBoolean(AuditKeys.IGNORE_SHOW_PERSPECTIVE_ONCE)) {
				partActivated(part);
			}
			else {
				store.setValue(AuditKeys.IGNORE_SHOW_PERSPECTIVE_ONCE, true);
		    	Display.getDefault().asyncExec(new Runnable() {
		    	    public void run() {
		    	    	WorkbenchUtils.openPerspective();
		    	    	partActivated(part);
		            }
		        });					
			}
        }
	}

	@Override
	public final void partActivated(final IWorkbenchPart part) {
		
		if (!(part instanceof TextEditor)) {
			return;
		}
			
		IEditorInput input = ((TextEditor) part).getEditorInput();
		if (!(input instanceof IFileEditorInput)) {
			return;			
		}

        // When we click outside the editor and back, the part gets activated, not to waste time by handling views we just ignore it
		// We only handle views if activation is triggered by selection between files in the editor
		if (Objects.equals(input, previousInput)) {
			return;
		}
		else {
			previousInput = input;
		}
		
		IFileEditorInput fileInput = (IFileEditorInput) input;
		IFile file = fileInput.getFile();

		Optional<IViewPart> to = WorkbenchUtils.findView(OpenAPITreeView.ID);
		if (to.isPresent() && (to.get() instanceof PanelManager)) {
			PanelManager manager = (PanelManager) to.get();
			manager.handleSelectedFile(file);
		}
		Optional<IViewPart> ro = WorkbenchUtils.findView(ReportPanelView.ID);
		if (ro.isPresent() && (ro.get() instanceof ReportManager)) {
			ReportManager manager = (ReportManager) ro.get();
			manager.handleSelectedFile(file);
		}
		Optional<IViewPart> hro = WorkbenchUtils.findView(HTMLReportPanelView.ID);
		if (hro.isPresent() && (hro.get() instanceof HTMLReportPanelView)) {
			HTMLReportPanelView manager = (HTMLReportPanelView) hro.get();
			manager.handleSelectedFile(file);
		}
	}

	@Override
	public final void partClosed(final IWorkbenchPart part) {

		if (!(part instanceof TextEditor)) {
			return;
		}
			
		IEditorInput input = ((TextEditor) part).getEditorInput();
		if (!(input instanceof IFileEditorInput)) {
			return;			
		}
				
		IFileEditorInput fileInput = (IFileEditorInput) input;
		IFile file = fileInput.getFile();
		
        OpenApiFileType fileType = OpenAPIUtils.getFileType(file);
        if (fileType == OpenApiFileType.Unsupported) {
            return;
        }

        IDocumentProvider dp = ((TextEditor) part).getDocumentProvider();
        IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
        dataService.removeReportDocumentListener(file, dp.getDocument(input));
        
        if (!dataService.hasFileProperty(file.getFullPath().toPortableString())) {
            return;
        }
        dataService.removeTreeDocumentListener(dp.getDocument(input));

        // Notify the panels
		Optional<IViewPart> to = WorkbenchUtils.findView(OpenAPITreeView.ID);
		if (to.isPresent()) {
			PanelManager manager = (PanelManager) to.get();
			manager.handleClosedFile(file);
		}
		Optional<IViewPart> ro = WorkbenchUtils.findView(ReportPanelView.ID);
		if (ro.isPresent()) {
			ReportManager manager = (ReportManager) ro.get();
			manager.handleClosedFile(file);
		}
		
		Optional<IViewPart> hro = WorkbenchUtils.findView(HTMLReportPanelView.ID);
		if (hro.isPresent()) {
			HTMLReportPanelView manager = (HTMLReportPanelView) hro.get();
			manager.handleClosedFile(file);
		}
        
        // Removing the data must always be the last step
        dataService.removeParserData(file.getFullPath().toPortableString());
        Audit report = dataService.removeAuditReport(file.getFullPath().toPortableString());
        if (report != null) {
        	report.clean();
        }
        dataService.removeFileProperty(file.getFullPath().toPortableString());
        
		if (EditorUtil.getCurrentEditor() == null) {
			previousInput = null;
			if (to.isPresent()) {
				PanelManager manager = (PanelManager) to.get();
				manager.handleAllFilesClosed();
			}
			if (ro.isPresent()) {
				ReportManager manager = (ReportManager) ro.get();
				manager.handleAllFilesClosed();
			}
			if (hro.isPresent()) {
				HTMLReportPanelView manager = (HTMLReportPanelView) hro.get();
				manager.handleAllFilesClosed();
			}
		}
	}
	
	@Override
	public final void partBroughtToTop(final IWorkbenchPart part) {}
	
	@Override
	public final void partDeactivated(final IWorkbenchPart part) {}
}
