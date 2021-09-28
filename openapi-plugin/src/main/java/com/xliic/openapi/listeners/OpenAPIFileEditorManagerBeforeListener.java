package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.editor.FileEditorManager;
import com.xliic.idea.editor.FileEditorManagerListener;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.DataService;

// This class is responsible to handle open/close file system events, update data service and panels
// Do not subscribe to the events anywhere outside the class as it may lead to execution inconsistency
public class OpenAPIFileEditorManagerBeforeListener implements FileEditorManagerListener.Before {

	// Idea can't guarantee the order of Open/Close/Selection events,
	// so we have to use before events as they always come first
	@Override
	public void beforeFileOpened(@NotNull FileEditorManager source, @NotNull VirtualFile file) {

		OpenApiFileType fileType = OpenApiUtils.getFileType(file);
		if (fileType == OpenApiFileType.Unsupported) {
			return;
		}

		Project project = source.getProject();
		if (FileEditorManager.getInstance(project).getAllEditors(file).length > 0) {
			// File already opened in another editor(s)
			return;
		}

		OpenApiVersion version = OpenApiUtils.getOpenAPIVersion(project, file);
		if (version == OpenApiVersion.Unknown) {
			return;
		}
		Document document = FileDocumentManager.getInstance().getDocument(file);
		if (document != null) {
			DataService dataService = DataService.getInstance(project);
			dataService.setFileProperty(file.getPath(), new FileProperty(fileType, version));
			ASTService astService = ASTService.getInstance(project);
			astService.addASTDocumentListener(file);
			astService.parse(document);
		}
	}

	@Override
	public void beforeFileClosed(@NotNull FileEditorManager source, @NotNull VirtualFile file) {

		OpenApiFileType fileType = OpenApiUtils.getFileType(file);
		if (fileType == OpenApiFileType.Unsupported) {
			return;
		}

		Project project = source.getProject();
		if (FileEditorManager.getInstance(project).getAllEditors(file).length > 1) {
			// File also opened in another editor(s)
			return;
		}

		DataService dataService = DataService.getInstance(project);
		if (!dataService.hasFileProperty(file.getPath())) {
			return;
		}

		ASTService astService = ASTService.getInstance(project);
		astService.removeASTDocumentListener(file);
		astService.scheduleToRemove(file);

		BundleService bundleService = BundleService.getInstance(project);
		bundleService.scheduleToRemoveBundle(file.getPath());
	}
}
