package com.xliic.openapi.listeners;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.BulkFileListener;
import com.xliic.core.vfs.VFileEvent;
import com.xliic.core.vfs.VFileMoveEvent;
import com.xliic.core.vfs.VFilePropertyChangeEvent;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.services.ExtRefService;
import com.xliic.openapi.topic.AuditListener;
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

    @Override
    public void delete(@NotNull Set<VirtualFile> files) {
    	Set<String> rootFileNames = new HashSet<>();
    	ExtRefService extRefService = ExtRefService.getInstance(project);
    	for (VirtualFile file : files) {
    		if (EclipseUtil.isExtRefFile(file)) {
            	ExtRef extRef = extRefService.getExtRef(file);
            	if (extRef != null) {
            		rootFileNames.add(extRef.getrRootFileName());
            	}
    		}
    	}
    	if (!rootFileNames.isEmpty()) {
        	BundleService bundleService = BundleService.getInstance(project);
        	AuditService auditService = AuditService.getInstance(project); 
        	for (String rootFileName : rootFileNames) {
        		Audit report = auditService.removeAuditReport(rootFileName);
        		if (report != null) {
        			SwingUtilities.invokeLater(() -> {
        				project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportClean(report);
        			});
        		}
        		bundleService.scheduleToBundle(rootFileName, null);
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
