package com.xliic.openapi.actions;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.ScrollType;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.TextEditor;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.core.util.Icon;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;
import com.xliic.openapi.quickfix.managers.FixManager;
import com.xliic.openapi.services.ASTService;

import org.jetbrains.annotations.NotNull;

import java.util.Objects;

public class FixSnippetAction extends AnJAction implements DumbAware {

  private final FixManager provider;

  public FixSnippetAction(FixManager provider, Icon icon) {
    super(provider.getTitle(), "", icon);
    this.provider = provider;
  }

  @Override
  public void update(@NotNull AnJActionEvent event) {
	PsiFile psiFile = getOpenAPIPsiFile(event);
	if (psiFile != null && provider.isAvailable()) {
		ASTService astService = ASTService.getInstance(event.getProject());
		event.getPresentation().setEnabled(astService.getRootNode(psiFile.getVirtualFile()) != null);
	} else {
		event.getPresentation().setEnabled(false);
	}
  }

  @Override
  public void actionPerformed(@NotNull AnJActionEvent event) {

    PsiFile psiFile = getOpenAPIPsiFile(event);
    Project project = Objects.requireNonNull(psiFile).getProject();
    FileEditor fileEditor = FileEditorManager.getInstance(project).getSelectedEditor(psiFile.getVirtualFile());
    Editor editor = ((TextEditor) Objects.requireNonNull(fileEditor)).getEditor();

    DocumentUpdater documentUpdater = DocumentUpdater.getInstance(editor, psiFile, provider);
    WriteCommandAction.runWriteCommandAction(project, () -> {
          documentUpdater.process();
          editor.getCaretModel().moveToOffset(documentUpdater.getMoveToOffset());
          editor.getScrollingModel().scrollToCaret(ScrollType.CENTER_UP);
        }
    );
  }

  private PsiFile getOpenAPIPsiFile(@NotNull AnJActionEvent event) {
    Project project = event.getProject();
    if (project != null) {
      VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
      if (file != null) {
        return PsiManager.getInstance(project).findFile(file);
      }
    }
    return null;
  }
}
