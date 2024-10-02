package com.xliic.openapi.platform.scan;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.actions.ProjectAction;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.config.ScanConfService;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;

public class ScanFirstOperationAction extends ProjectAction {

    public ScanFirstOperationAction() {
        super("scan", false);
    }

    @Override
    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile file) {
        ScanConfService scanConfService = ScanConfService.getInstance(project);
        if (scanConfService.isInProgress()) {
            MsgUtils.notifyInfo(project, "Scan API of " + file.getPath() + " is in progress");
            return;
        }
        String rootFileName = file.getPath();
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundleResult = bundleService.getBundle(rootFileName);
        if (bundleResult == null) {
            return;
        }
        if (!bundleResult.isBundleComplete()) {
            bundleService.notifyOfErrors(rootFileName);
            return;
        }
        PsiFile psiFile = Utils.findPsiFile(project, file);
        if (psiFile == null) {
            return;
        }
        ScanConfOperation operation = getScanConfOperation(psiFile, bundleResult.getAST());
        if (operation != null) {
            scanConfService.scanConfActionPerformed(file, operation);
        } else {
            MsgUtils.notifyError(project, "File doesn't contain any path or operation");
        }
    }

    private ScanConfOperation getScanConfOperation(PsiFile psiFile, Node root) {
        if (root != null) {
            Node paths = root.getChild("paths");
            if (paths != null) {
                Node firstPath = paths.getChildren().get(0);
                if (firstPath != null) {
                    Node firstMethod = firstPath.getChildren().get(0);
                    if (firstMethod != null) {
                        String pathName = firstPath.getKey();
                        String operationName = firstMethod.getKey();
                        int textOffset = firstMethod.getRange().getOffset();
                        return new ScanConfOperation(psiFile, pathName, operationName, textOffset);
                    }
                }
            }
        }
        return null;
    }
}