package com.xliic.openapi.editor;

import static com.xliic.openapi.utils.Utils.getFileType;
import static com.xliic.openapi.utils.Utils.getRefTextFromPsiElement;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.navigation.DirectNavigationProvider;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiElement;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.Pair;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.utils.TempFileUtils;
import com.xliic.openapi.utils.Utils;

public class OpenAPINavigationProvider implements DirectNavigationProvider {

    @Override
    public @Nullable PsiElement getNavigationElement(@NotNull PsiElement psiElement) {
        VirtualFile file = psiElement.getContainingFile().getVirtualFile();
        if ((getFileType(file) == OpenApiFileType.Unsupported) || !Utils.isPsiRef(psiElement)) {
            return null;
        }
        Project project = psiElement.getProject();
        String ref = getRefTextFromPsiElement(psiElement);
        Pair<VirtualFile, Node> result = Utils.resolveRef(psiElement.getContainingFile(), ref);
        if (result != null) {
            Node target = result.getSecond();
            VirtualFile refFile = result.getFirst();
            if (target == null) {
                return Utils.findPsiFile(project, refFile).toPsiElement();
            } else {
                if (ExtRef.isExtRef(ref)) {
                    PsiFile psiFile = Utils.findPsiFile(project, refFile);
                    if (psiFile != null) {
                        return psiFile.findElementAt(target.getRange().getStartOffset());
                    }
                } else {
                    // Platform files are temp files which never indexed
                    if (TempFileUtils.isPlatformFile(refFile)) {
                        PsiFile psiFile = Utils.findPsiFile(project, refFile);
                        if (psiFile != null) {
                            return psiFile.findElementAt(target.getRange().getStartOffset());
                        }
                    } else {
                        return getPsiElementFromIndex(project, refFile, target.getJsonPointer());
                    }
                }
            }
        }
        return null;
    }

    private PsiElement getPsiElementFromIndex(Project project, VirtualFile refFile, String pointer) {
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(refFile);
        if (root != null) {
            Node target = root.find(pointer);
            if (target != null) {
                return new PsiElement(target.getRange().getStartOffset(), target, new PsiFile(project, refFile));
            }
        }
        return null;
    }
}
