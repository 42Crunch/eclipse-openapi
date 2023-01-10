package com.xliic.openapi.actions;

import static com.xliic.openapi.utils.Utils.REF;

import java.io.IOException;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import org.jetbrains.annotations.NotNull;

import com.xliic.common.WorkspaceException;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.progress.Task;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectLocator;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.ExtRefService;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;

public class ExtRefReloadAction extends AnAction implements DumbAware {

    private boolean refreshInProgress = false;

    @Override
    public void update(@NotNull AnActionEvent event) {

        event.getPresentation().setEnabled(false);
        if (refreshInProgress) {
            return;
        }

        Project project = event.getProject();
        if (project == null) {
            return;
        }

        VirtualFile file = Utils.getSelectedFile(project);
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

        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }

        Collection<Project> projects = ProjectLocator.getInstance().getProjectsForFile(file);
        if (projects.isEmpty()) {
            String msg = OpenApiBundle.message("openapi.non.project.file", "refresh");
            MsgUtils.error(project, msg, false);
            return;
        }

        Set<String> refs = new HashSet<>();
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(file);
        collectExternalRefs(root, refs, false);
        if (!refs.isEmpty()) {
            refreshInProgress = true;
            Set<String> urls = refs.stream().map(ExtRef::refToURL).collect(Collectors.toSet());
            ExtRefService extRefService = ExtRefService.getInstance(project);
            BundleService bundleService = BundleService.getInstance(project);
            final Task.Backgroundable task = new Task.Backgroundable(project, OpenApiBundle.message("openapi.ref.reload.progress.title"), false) {
                @Override
                public void run(@NotNull final ProgressIndicator indicator) {
                    try {
                        Set<String> hostnames = new HashSet<>();
                        for (String url : urls) {
                            ExtRef extRef = extRefService.get(url);
                            if (extRef != null) {
                                indicator.setText("Reloading " + url);
                                extRef.refresh();
                                String hostname = extRef.getHostName();
                                if (hostname != null) {
                                    hostnames.add(hostname);
                                }
                            }
                        }
                        if (!hostnames.isEmpty()) {
                            bundleService.scheduleToBundleByHosts(hostnames);
                        }
                    } catch (IOException | WorkspaceException e) {
                        e.printStackTrace();
                    } finally {
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
