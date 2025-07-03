package com.xliic.openapi.inlined;

import static com.xliic.openapi.OpenApiPanelKeys.PATHS;
import static com.xliic.openapi.utils.TempFileUtils.isPlatformFile;

import java.io.File;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.DfsHandler;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.report.AuditUtils;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.services.InlayHintsService;
import com.xliic.openapi.settings.Settings.InlinedAnnotations;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.tags.TagsService;
import com.xliic.openapi.tags.payload.TagsOperation;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.utils.Utils;

public class InlinedDfsHandler extends DfsHandler<Object> {

    @NotNull
    private final Project project;
    @Nullable
    private PsiFile psiFile;
    private boolean runDfs;

    public InlinedDfsHandler(@NotNull Project project) {
        this.project = project;
        runDfs = false;
    }

    @Override
    public void init(@NotNull String fileName, @Nullable OpenApiVersion version, @NotNull Map<String, Object> props) {
        super.init(fileName, version, props);
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
        psiFile = (file == null) ? null : Utils.findPsiFile(project, file);
        SettingsService settingsService = SettingsService.getInstance();
        boolean isAnnoEnabled = settingsService.getBoolean(InlinedAnnotations.ENABLE_FLAG);
        runDfs = isAnnoEnabled && psiFile != null && isOpenAPI();
    }

    @Override
    public boolean visit(@NotNull Node node) {
        if (!runDfs) {
            return false;
        }
        if (node.getDepth() == 0) {
        	TagsService tagsService = TagsService.getInstance(project);
        	if (tagsService.hasApiTokenCredentials() && !isPlatformFile(psiFile.getVirtualFile())) {
        		data.add(new TagsOperation(psiFile, node.getRange().getStartOffset()));
        	}
        }
        if (node.getParent() == null && node.getDepth() == 0) {
            int offset = node.getRange().getOffset();
            if (!isPlatformFile(psiFile.getVirtualFile())) {
            	data.add(new AuditOperation(psiFile, "", "", offset));
	            ScanConfOperation op = getFirstScanConfOperation(node, psiFile, offset);
	            if (op != null) {
	            	data.add(op);
	            }
            }
        } else if (isOperation(node)) {
        	if (version != OpenApiVersion.V3_1) {
        		TryItUtils.setActionsForOperation(psiFile, node, data);
        	}
        	if (!isPlatformFile(psiFile.getVirtualFile())) {
                ScanUtils.setActionsForOperation(psiFile, node, data);
        		AuditUtils.setActionsForOperation(psiFile, node, data);
        	}
        }
        return true;
    }

    @Override
    public void finish(boolean success) {
        if (psiFile != null) {
        	Boolean redraw = (Boolean) props.getOrDefault(InlayHintsService.REDRAW_HINTS, false);
            AnnotationService annotationService = AnnotationService.getInstance(project);
            VirtualFile file = psiFile.getVirtualFile();
            if (annotationService.isAnnotationSupportInstalled(file)) {
                annotationService.updateAnnotations(psiFile, data, redraw);
            } else {
                // Copy data to avoid list modification exception in the closure below
                final List<Object> copy = new LinkedList<>(data);
                ApplicationManager.getApplication().runReadAction(() -> {
                    if (version == OpenApiVersion.Unknown) {
                        annotationService.uninstall(file);
                    } else {
                        annotationService.install(file);
                        annotationService.updateAnnotations(psiFile, copy, redraw);
                    }
                });
            }
        }
    }

    public static boolean isPath(Node path) {
        return path != null && path.getDepth() == 2 && PATHS.equals(path.getParent().getKey());
    }

    public static boolean isOperation(Node op) {
        return op != null && op.getDepth() == 3 && TryItUtils.OPERATIONS.contains(op.getKey()) && isPath(op.getParent());
    }

    private static ScanConfOperation getFirstScanConfOperation(@NotNull Node node, @NotNull PsiFile psiFile, int offset) {
    	Node paths = node.find("/paths");
    	if (paths != null && !paths.getChildren().isEmpty()) {
    		Node path = paths.getChildren().get(0);
    		if (!path.getChildren().isEmpty()) {
    			Node operation = path.getChildren().get(0); 
    			return new ScanConfOperation(psiFile, path.getKey(), operation.getKey(), offset);
    		}
    	}
    	return null;
    }
}