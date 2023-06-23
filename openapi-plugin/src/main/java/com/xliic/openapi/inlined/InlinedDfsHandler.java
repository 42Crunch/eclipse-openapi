package com.xliic.openapi.inlined;

import static com.xliic.openapi.OpenApiPanelKeys.PATHS;
import static com.xliic.openapi.platform.PlatformConnection.isPlatformIntegrationEnabled;

import java.io.File;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.DfsHandler;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.report.AuditUtils;
import com.xliic.openapi.settings.Settings.InlinedAnnotations;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.utils.Utils;

public class InlinedDfsHandler extends DfsHandler<Object> {

    @NotNull
    private final Project project;
    @Nullable
    private PsiFile psiFile;

    private boolean runDfs;
    private boolean isPlatformIntegrationEnabled;

    public InlinedDfsHandler(@NotNull Project project) {
        this.project = project;
        runDfs = false;
    }

    @Override
    public void init(@NotNull String fileName, @Nullable OpenApiVersion version) {
        super.init(fileName, version);
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
        psiFile = (file == null) ? null : Utils.findPsiFile(project, file);
        boolean isAnnoEnabled = PropertiesComponent.getInstance().getBoolean(InlinedAnnotations.ENABLE_FLAG);
        runDfs = isAnnoEnabled && psiFile != null && isOpenAPI();
        isPlatformIntegrationEnabled = isPlatformIntegrationEnabled();
    }

    @Override
    public boolean visit(@NotNull Node node) {
        if (!runDfs) {
            return false;
        }
        if (isOperation(node)) {
            TryItUtils.setActionsForOperation(psiFile, node, data);
            if (isPlatformIntegrationEnabled) {
                ScanUtils.setActionsForOperation(psiFile, node, data);
            }
            AuditUtils.setActionsForOperation(psiFile, node, data);
        }
        return true;
    }

    @Override
    public void finish(boolean success) {
        if (psiFile != null) {
            AnnotationService annotationService = AnnotationService.getInstance(project);
            VirtualFile file = psiFile.getVirtualFile();
            if (annotationService.isAnnotationSupportInstalled(file)) {
                annotationService.updateAnnotations(psiFile, data);
            } else {
                ApplicationManager.getApplication().runReadAction(() -> {
                    if (version == OpenApiVersion.Unknown) {
                        annotationService.uninstall(file);
                    } else {
                        annotationService.install(file);
                        annotationService.updateAnnotations(psiFile, data);
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
}