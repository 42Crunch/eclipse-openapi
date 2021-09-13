package com.xliic.openapi.listeners;

import static com.xliic.openapi.OpenApiUtils.getFileType;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.ApplicationManager;
import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.document.DocumentEvent;
import com.xliic.idea.document.DocumentListener;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.services.ParserService;
import com.xliic.openapi.tree.PanelManager;
import com.xliic.openapi.tree.ui.OpenApiTreePanel;

public class TreeDocumentListener extends DocumentListener {

	private final Project project;

	public TreeDocumentListener(@NotNull Project project) {
		this.project = project;
	}

	@Override
	public void beforeDocumentChange(DocumentEvent event) {
	}

	@Override
	public void documentChanged(DocumentEvent event) {

		PanelManager manager = OpenApiTreePanel.getInstance(project);
		if (manager == null) {
			return;
		}
		Document document = event.getDocument();
		VirtualFile file = FileDocumentManager.getInstance().getFile(document);
		if (file == null) {
			return;
		}
		DataService dataService = DataService.getInstance(project);
		ParserService parserService = ParserService.getInstance(project);
		OpenApiFileType fileType = getFileType(file);
		String text = document.getText();

		ApplicationManager.getApplication().invokeLater(() -> {
			ParserData data = parserService.parse(text, fileType);
			if (dataService.getFileProperty(file.getPath()).getVersion() != data.getVersion()) {
				dataService.setFileProperty(file.getPath(), new FileProperty(fileType, data.getVersion()));
			}
			if (data.isValid()) {
				dataService.setParserData(file.getPath(), data);
			} else {
				dataService.getParserData(file.getPath()).invalidate(data.getExceptionMessage());
			}
			manager.handleDocumentChanged(file);
		});
	}
}
