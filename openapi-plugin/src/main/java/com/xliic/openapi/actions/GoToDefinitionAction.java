package com.xliic.openapi.actions;

import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.swt.widgets.Shell;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.actionSystem.CommonDataKeys;
import com.xliic.core.editor.Editor;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiDocumentManager;
import com.xliic.core.psi.PsiElement;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.Pair;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.utils.Utils;

public class GoToDefinitionAction extends AnAction implements DumbAware {

    @Override
    public void update(AnActionEvent event) {
        Project project = event.getProject();
        Editor editor = event.getData(CommonDataKeys.EDITOR);
        VirtualFile file = event.getData(CommonDataKeys.VIRTUAL_FILE);
        if ((project == null) || (editor == null) || (file == null)) {
            event.getPresentation().setEnabled(false);
            return;
        }
        BundleService bundleService = BundleService.getInstance(project);
        if (bundleService.isFileBeingBundled(file.getPath())) {
            event.getPresentation().setEnabled(Utils.isPsiRef(getDoubleClickedPsiElement(project, editor)));
        } else {
            event.getPresentation().setEnabled(false);
        }
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent event) {

        Project project = event.getProject();
        Editor editor = event.getData(CommonDataKeys.EDITOR);
        PsiFile psiFile = event.getData(CommonDataKeys.PSI_FILE);
        if ((project == null) || (editor == null) || (psiFile == null)) {
            return;
        }
        PsiElement psiElement = getDoubleClickedPsiElement(project, editor);
        if (psiElement == null) {
            return;
        }
        String ref = Utils.getRefTextFromPsiElement(psiElement);
        Pair<VirtualFile, Node> result = Utils.resolveRef(psiFile, ref);
        if (result == null) {
            showRefNotFoundPopup("No reference found for " + ref, editor.getShell());
        } else {
            Node target = result.getSecond();
            VirtualFile refFile = result.getFirst();
            if (target != null) {
                Range range = EclipseUtil.getSelectionRange(target);
                new OpenFileDescriptor(project, refFile, range.getOffset(), range.getLength()).navigate(true);
            } else {
                new OpenFileDescriptor(project, refFile).navigate(true);
            }
        }
    }

    private static void showRefNotFoundPopup(@NotNull String title, @NotNull Shell shell) {
        // It is impossible to calculate correct location to show
        MessageDialog.openWarning(shell, "Warning", title);
    }

    private PsiElement getDoubleClickedPsiElement(@NotNull Project project, @NotNull Editor editor) {
        PsiFile psiFile = PsiDocumentManager.getInstance(project).getPsiFile(editor.getDocument());
        if (psiFile == null) {
            return null;
        }
        int offset = editor.logicalPositionToOffset(editor.getCaretModel().getLogicalPosition());
        return psiFile.findElementAt(offset);
    }
}
