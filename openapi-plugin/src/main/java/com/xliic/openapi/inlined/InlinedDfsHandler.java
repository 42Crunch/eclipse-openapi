package com.xliic.openapi.inlined;

import static com.xliic.openapi.OpenApiPanelKeys.PATHS;
import static com.xliic.openapi.settings.Settings.Platform.Scan.RUNTIME;
import static com.xliic.openapi.settings.Settings.Platform.Scan.RUNTIME_DOCKER;
import static com.xliic.openapi.settings.Settings.Platform.Scan.RUNTIME_CLI;

import static com.xliic.openapi.platform.PlatformConnection.isPlatformIntegrationEnabled;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
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
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.Settings.InlinedAnnotations;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.utils.Utils;

public class InlinedDfsHandler extends DfsHandler<Object> {

    @NotNull
    private final Project project;
    @Nullable
    private PsiFile psiFile;

    private boolean runDfs;
    private boolean isScanEnabled;

    public InlinedDfsHandler(@NotNull Project project) {
        this.project = project;
        runDfs = false;
    }

    @Override
    public void init(@NotNull String fileName, @Nullable OpenApiVersion version) {
        super.init(fileName, version);
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
        psiFile = (file == null) ? null : Utils.findPsiFile(project, file);
        PropertiesComponent props = PropertiesComponent.getInstance();
        boolean isAnnoEnabled = props.getBoolean(InlinedAnnotations.ENABLE_FLAG);
        runDfs = isAnnoEnabled && psiFile != null && isOpenAPI();
        boolean isPlatformIntegrationEnabled = isPlatformIntegrationEnabled();
        if (isPlatformIntegrationEnabled) {
        	isScanEnabled = true;	
        } else {
        	if (RUNTIME_CLI.equals(props.getValue(RUNTIME, RUNTIME_DOCKER))) {
        		isScanEnabled = !StringUtils.isEmpty(props.getValue(Settings.Audit.TOKEN));
        	} else {
        		isScanEnabled = false;
        	}
        }
    }

    @Override
    public boolean visit(@NotNull Node node) {
        if (!runDfs) {
            return false;
        }
        if (isOperation(node)) {
            TryItUtils.setActionsForOperation(psiFile, node, data);
            if (isScanEnabled) {
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
                // Copy data to avoid list modification exception in the closure below
                final List<Object> copy = new LinkedList<>(data);
                ApplicationManager.getApplication().runReadAction(() -> {
                    if (version == OpenApiVersion.Unknown) {
                        annotationService.uninstall(file);
                    } else {
                        annotationService.install(file);
                        annotationService.updateAnnotations(psiFile, copy);
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