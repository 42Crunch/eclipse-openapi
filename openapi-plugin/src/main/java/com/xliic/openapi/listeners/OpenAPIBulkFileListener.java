package com.xliic.openapi.listeners;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.BulkFileListener;
import com.xliic.core.vfs.VFileEvent;
import com.xliic.core.vfs.VFileMoveEvent;
import com.xliic.core.vfs.VFilePropertyChangeEvent;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.topic.FileListener;

public class OpenAPIBulkFileListener extends BulkFileListener {

	private final Project project;

	public OpenAPIBulkFileListener(@NotNull Project project) {
		this.project = project;
	}

	@Override
	public void after(@NotNull List<? extends VFileEvent> events) {

		for (VFileEvent event : events) {
			if (event instanceof VFileMoveEvent) {
				VirtualFile file = ((VFileMoveEvent) event).getFile();
				OpenApiFileType fileType = OpenApiUtils.getFileType(file);
				if (fileType != OpenApiFileType.Unsupported) {
					update(file, ((VFileMoveEvent) event).getOldPath());
				}
			} else if (event instanceof VFilePropertyChangeEvent) {
				VirtualFile file = ((VFilePropertyChangeEvent) event).getFile();
				OpenApiFileType fileType = OpenApiUtils.getFileType(file);
				if (fileType != OpenApiFileType.Unsupported) {
					update(file, ((VFilePropertyChangeEvent) event).getOldPath());
				}
			}
		}
	}

    private void update(VirtualFile newFile, String oldFileName) {

        BundleService bundleService = BundleService.getInstance(project);
        bundleService.handleFileNameChanged(newFile, oldFileName);

        DataService dataService = DataService.getInstance(project);
        dataService.handleFileNameChanged(newFile, oldFileName);

        AuditService auditService = AuditService.getInstance(project);
        auditService.handleFileNameChanged(newFile, oldFileName);

        ASTService astService = ASTService.getInstance(project);
        astService.handleFileNameChanged(newFile, oldFileName);

        project.getMessageBus().syncPublisher(FileListener.TOPIC).handleFileNameChanged(newFile, oldFileName);
    }
}
