package com.xliic.openapi.actions;

import com.xliic.common.WorkspaceException;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.progress.Task;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectLocator;
import com.xliic.core.ui.Messages;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.ExtRefService;

import org.jetbrains.annotations.NotNull;

import java.io.IOException;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import static com.xliic.openapi.OpenApiUtils.REF;

public class ExtRefReloadAction extends AnAction implements DumbAware {

  private boolean refreshInProgress = false;

  @Override
  public void update(AnActionEvent event) {

    event.getPresentation().setEnabled(false);
    if (refreshInProgress) {
      return;
    }

    Project project = event.getProject();
    if (project == null) {
      return;
    }

    VirtualFile file = OpenApiUtils.getSelectedFile(project);
    if (file == null) {
      return;
    }

    BundleService bundleService = BundleService.getInstance(project);
    if (bundleService.isPartOfBundleWithExtRefs(file.getPath())) {
      ASTService astService = ASTService.getInstance(project);
      Node root = astService.getRootNode(file);
      Set<String> refs = new HashSet<>();
      collectExternalRefs(root, refs, true);
      if (!refs.isEmpty()) {
        event.getPresentation().setEnabled(true);
      }
    }
  }

  @Override
  public void actionPerformed(@NotNull AnActionEvent event) {

    if (refreshInProgress) {
      return;
    }

    Project project = event.getProject();
    if (project == null) {
      return;
    }

    VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
    if (file == null) {
      return;
    }

    Collection<Project> projects = ProjectLocator.getInstance().getProjectsForFile(file);
    if (projects.isEmpty()) {
      String msg = OpenApiBundle.message("openapi.non.project.file", "refresh");
      Messages.showMessageDialog(project, msg, OpenApiBundle.message("openapi.error.title"), Messages.getErrorIcon());
      return;
    }

    Set<String> refs = new HashSet<>();
    ASTService astService = ASTService.getInstance(project);
    Node root = astService.getRootNode(file);
    collectExternalRefs(root, refs, false);
    Set<String> urls = refs.stream().map(ExtRef::refToURL).collect(Collectors.toSet());

    if (!refs.isEmpty()) {
      refreshInProgress = true;
      ExtRefService extRefService = ExtRefService.getInstance(project);
      final Task.Backgroundable task = new Task.Backgroundable(project,
              OpenApiBundle.message("openapi.ref.reload.progress.title"), false) {

        @Override
        public void run(@NotNull final ProgressIndicator indicator) {
          try {
            for (String url : urls) {
              ExtRef extRef = extRefService.get(url);
              if (extRef != null) {
                indicator.setText("Reloading " + url);
                extRef.refresh();
              }
            }
    		BundleService bundleService = BundleService.getInstance(project);
   			bundleService.scheduleToBundle(file.getPath(), null);
          }
          catch (IOException | WorkspaceException e) {
            e.printStackTrace();
          }
          finally {
            refreshInProgress = false;
          }
        }
      };
      ProgressManager.getInstance().run(task);
    }
  }

  private void collectExternalRefs(Node root, Set<String> urls, boolean stopIfFirstFound) {
    if (root != null) {
      for (Node node : root.getChildren()) {
        if (REF.equals(node.getKey()) && ExtRef.isExtRef(node.getValue())) {
          urls.add(node.getValue());
          if (stopIfFirstFound) {
            return;
          }
        }
        collectExternalRefs(node, urls, stopIfFirstFound);
        if (stopIfFirstFound && !urls.isEmpty()) {
          return;
        }
      }
    }
  }
}