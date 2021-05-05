package com.crunch42.openapi.listeners;

import com.crunch42.openapi.utils.OpenAPIUtils;
import com.crunch42.openapi.utils.WorkbenchUtils;
import com.crunch42.openapi.parser.tree.ParserData;
import com.crunch42.openapi.services.IDataService;
import com.crunch42.openapi.services.IParserService;
import com.crunch42.openapi.tree.PanelManager;
import com.crunch42.openapi.tree.ui.OpenAPITreeView;

import java.util.Optional;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.DocumentEvent;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IDocumentListener;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;

public class TreeDocumentListener implements IDocumentListener {

    public TreeDocumentListener() {}

	@Override
	public void documentAboutToBeChanged(DocumentEvent event) {}

	@Override
	public void documentChanged(DocumentEvent event) {

        IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
        if (file == null) {
            return;
        }
      
        IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);       
		IParserService parserService = (IParserService) PlatformUI.getWorkbench().getService(IParserService.class);
        IDocument document = event.getDocument();

        ParserData data = parserService.parse(document.get(), OpenAPIUtils.getFileType(file));
        if (data.isValid()) {
            dataService.setParserData(file.getFullPath().toPortableString(), data);
        }
        else {
            dataService.getParserData(file.getFullPath().toPortableString()).invalidate(data.getExceptionMessage());
        }
        
        Optional<IViewPart> o = WorkbenchUtils.findView(OpenAPITreeView.ID);
		if (o.isPresent()) {
			PanelManager manager = (PanelManager) o.get();
			manager.handleDocumentChanged(file);
        }
	}
}
