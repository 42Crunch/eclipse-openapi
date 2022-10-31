package com.xliic.openapi.hover;

import org.eclipse.core.resources.IMarker;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.IMarkerResolution2;
import org.eclipse.ui.IMarkerResolutionRelevance;
import org.eclipse.ui.IWorkbenchPage;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.codeHighlighting.HighlightingManager;
import com.xliic.core.codeHighlighting.Marker;
import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.actions.FixAction;
import com.xliic.openapi.quickfix.actions.FixGoToHTMLAction;
import com.xliic.openapi.services.ASTService;

class OpenAPIMarkerResolution implements IMarkerResolutionRelevance, IMarkerResolution2 {

    private final static Image quickFixImage = OpenAPIImages.QuickFix.createImage();
    private final static Image viewQuickFixImage = OpenAPIImages.ViewQuickFix.createImage();

    private final Editor editor;
    private final PsiFile file;
    private final Project project;
    private final IntentionAction action;

    private final ASTService astService;
    private final HighlightingManager manager;

    public OpenAPIMarkerResolution(@NotNull Project project, @NotNull Editor editor, @NotNull PsiFile file, @NotNull IntentionAction action) {
        this.editor = editor;
        this.file = file;
        this.project = project;
        this.action = action;
        astService = ASTService.getInstance(project);
        manager = HighlightingManager.getInstance(project);
    }

    @Override
    public int getRelevanceForResolution() {
        if (action instanceof FixAction) {
            return ((FixAction) action).getPriority();
        } else {
            return 0;
        }
    }

    @Override
    public String getLabel() {
        return action.getText();
    }

    @Override
    public String getDescription() {
        return getLabel();
    }

    @Override
    public Image getImage() {
        return action instanceof FixGoToHTMLAction ? viewQuickFixImage : quickFixImage;
    }

    @Override
    public void run(IMarker marker) {
        try {
            if (editor.isDirty()) {
                int offset = getCurrentOffset(marker);
                if (offset != -1) {
                    action.invoke(project, editor, file, offset);
                }
            } else {
                action.invoke(project, editor, file, (int) marker.getAttribute(IMarker.CHAR_START));
            }
            if (OpenAPIAbstractUIPlugin.getInstance().isMuleIDE()) {
                IWorkbenchPage page = EclipseWorkbenchUtil.findWorkbenchPage(editor.getEditorInput());
                if (page != null) {
                    ApplicationManager.getApplication().runWriteAction(() -> {
                        page.activate(editor.getTextEditor());
                    });
                }
            }
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    private int getCurrentOffset(IMarker marker) throws CoreException {
        Marker m = manager.getMarker(marker);
        if (m != null) {
            String pointer = m.getJsonPointer();
            if (pointer != null) {
                Node root = astService.getRootNode(file.getVirtualFile());
                if (root != null) {
                    Node target = root.find(pointer);
                    if (target != null) {
                        return target.getRange().getStartOffset();
                    }
                }
            }
        }
        return -1;
    }
}
