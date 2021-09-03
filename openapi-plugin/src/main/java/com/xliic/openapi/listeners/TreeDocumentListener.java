package com.xliic.openapi.listeners;

import java.util.Optional;

import org.eclipse.core.resources.IFile;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;

import com.xliic.idea.document.Document;
import com.xliic.idea.document.DocumentEvent;
import com.xliic.idea.document.DocumentListener;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.services.IParserService;
import com.xliic.openapi.tree.PanelManager;
import com.xliic.openapi.tree.ui.OpenAPITreeView;
import com.xliic.openapi.utils.OpenAPIUtils;
import com.xliic.openapi.utils.WorkbenchUtils;

public class TreeDocumentListener extends DocumentListener {

    public TreeDocumentListener() {}

	@Override
	public void beforeDocumentChange(DocumentEvent event) {}

	@Override
	public void documentChanged(DocumentEvent event) {

        IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
        if (file == null) {
            return;
        }
      
        IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);       
		IParserService parserService = (IParserService) PlatformUI.getWorkbench().getService(IParserService.class);
        Document document = event.getDocument();

        ParserData data = parserService.parse(document.getText(), OpenAPIUtils.getFileType(file));
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
