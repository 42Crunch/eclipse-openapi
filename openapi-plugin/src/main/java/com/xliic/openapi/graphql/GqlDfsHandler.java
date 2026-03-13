package com.xliic.openapi.graphql;

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
import com.xliic.openapi.graphql.scan.config.payload.GqlScanConfOperation;
import com.xliic.openapi.inlined.AnnotationService;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.services.InlayHintsService;
import com.xliic.openapi.tags.TagsService;
import com.xliic.openapi.tags.payload.TagsOperation;
import com.xliic.openapi.utils.Utils;

public class GqlDfsHandler extends DfsHandler<Object> {

    @NotNull
    private final Project project;
    @Nullable
    private PsiFile psiFile;

    public GqlDfsHandler(@NotNull Project project) {
        this.project = project;
    }

    @Override
    public void init(@NotNull String fileName, @Nullable OpenApiVersion version, @NotNull Map<String, Object> props) {
        super.init(fileName, version, props);
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
        psiFile = (file == null) ? null : Utils.findPsiFile(project, file);
        TagsService tagsService = TagsService.getInstance(project);
    	if (tagsService.hasApiTokenCredentials()) {
    		data.add(new TagsOperation(psiFile, 0));
    	}
    	data.add(new GqlScanConfOperation(psiFile));
    	data.add(new AuditOperation(psiFile, "", "", 0));
    }

    @Override
    public boolean visit(@NotNull Node node) {
        return false;
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
                	annotationService.install(file);
                    annotationService.updateAnnotations(psiFile, copy, redraw);
                });
            }
        }
    }
}