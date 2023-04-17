package com.xliic.openapi.platform.tree.ui;

import java.util.ArrayList;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.tree.PlatformAsyncTreeModel;
import com.xliic.openapi.platform.tree.PlatformColoredTreeCellRenderer;
import com.xliic.openapi.platform.tree.PlatformTreeKeyListener;
import com.xliic.openapi.platform.tree.actions.PlatformRefreshAction;
import com.xliic.openapi.platform.tree.mouse.PlatformDoubleClickListener;
import com.xliic.openapi.platform.tree.mouse.PlatformMouseAdapter;
import com.xliic.openapi.platform.tree.utils.PlatformAPIUtils;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;

public class PlatformPanel implements PlatformListener, Disposable {

    @NotNull
    private final Project project;
    @NotNull
    private final Tree tree;
    @NotNull
    private final ToolWindow toolWindow;

    public PlatformPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {

        tree = new Tree(new TreeViewer(parent, SWT.SINGLE | SWT.H_SCROLL | SWT.V_SCROLL));

        this.project = project;
        this.toolWindow = toolWindow;

        tree.setOpaque(true);

        tree.setModel(new PlatformAsyncTreeModel(project, tree, new DefaultMutableTreeNode()));
        tree.setRootVisible(false);

        tree.addMouseListener(new PlatformMouseAdapter(this));
        tree.addKeyListener(new PlatformTreeKeyListener(project, tree));

        PlatformDoubleClickListener listener = new PlatformDoubleClickListener(this);
        listener.installOn(tree);

        tree.setCellRenderer(new PlatformColoredTreeCellRenderer());
        TreeUtil.expandAll(tree);

        List<AnJAction> titleActions = new ArrayList<>();
        titleActions.add(new PlatformRefreshAction(project, tree));
        toolWindow.setTitleActions(titleActions);

        project.getMessageBus().connect().subscribe(PlatformListener.TOPIC, this);
    }

    @Override
    public void dispose() {
        tree.removeAll();
    }

    public Tree getTree() {
        return tree;
    }

    public Project getProject() {
        return project;
    }

    @Override
    public void reloadAll() {
        PlatformUtils.reloadAll(project, tree);
    }

    @Override
    public void auditReportForAPIUpdated(@NotNull String apiId, float grade, boolean isValid) {
        PlatformAPIUtils.updateAuditStatus(tree, apiId, grade, isValid);
    }
}
