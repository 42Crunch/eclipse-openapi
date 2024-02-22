package com.xliic.openapi.outline.ui;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.Separator;
import com.xliic.core.ide.CommonActionsManager;
import com.xliic.core.ide.DefaultTreeExpander;
import com.xliic.core.ide.TreeExpander;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Color;
import com.xliic.core.ui.JBColor;
import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.ui.treeStructure.DefaultTreeModel;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.ui.UIUtil;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.outline.OutlineMouseAdapter;
import com.xliic.openapi.outline.OutlineMouseMotionListener;
import com.xliic.openapi.outline.OutlineSortTreeModel;
import com.xliic.openapi.outline.OutlineTreeCellRenderer;
import com.xliic.openapi.outline.OutlineTreeKeyListener;
import com.xliic.openapi.outline.actions.AbcSortAction;
import com.xliic.openapi.outline.dmtn.DMTNConverter;
import com.xliic.openapi.outline.node.BaseNode;
import com.xliic.openapi.outline.node.RootNode;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;

// We have to extend from JPanel to be able to register the whole stuff below as tool window component
// By doing so we will be able to access all necessary content from anywhere through ToolWindowManager
public class OutlinePanel implements FileListener, SettingsListener, Disposable {

    private static final String SHOW_PROPERTY_KEY = "openapi.show.key";
    private static final Color ERROR_BACKGROUND = new JBColor(0xFFF2F2F2, 0x808080);
    private static final int EXPAND_LIMIT = 100;

    private final Project project;
    private final ToolWindow toolWindow;
    private final OutlineMouseMotionListener mouseMotionListener;
    private final DMTNConverter converter;
    private Tree tree;
    private String modelFileName = null;
    private final Map<String, List<String>> expandedPointers = new HashMap<>();

    public OutlinePanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {

        tree = new Tree(new TreeViewer(parent, SWT.SINGLE | SWT.H_SCROLL | SWT.V_SCROLL));
        this.project = project;
        this.toolWindow = toolWindow;
        tree.setRootVisible(false);
        tree.setModel(new OutlineSortTreeModel(tree.getViewer(), new DefaultMutableTreeNode(), false));
        tree.setCellRenderer(new OutlineTreeCellRenderer());
        tree.addMouseListener(new OutlineMouseAdapter(this));
        mouseMotionListener = new OutlineMouseMotionListener(project, tree);
        tree.addMouseMotionListener(mouseMotionListener);
        tree.addKeyListener(new OutlineTreeKeyListener(project, tree));
        tree.setOpaque(true);

        converter = new DMTNConverter();

        List<AnJAction> titleActions = new ArrayList<>();
        titleActions.add(new AbcSortAction(project, this));
        titleActions.add(Separator.create());

        CommonActionsManager actionsManager = CommonActionsManager.getInstance();
        TreeExpander treeExpander = new DefaultTreeExpander(tree);
        titleActions.add(actionsManager.createExpandAllHeaderAction(treeExpander, tree));
        titleActions.add(actionsManager.createCollapseAllHeaderAction(treeExpander, tree));
        toolWindow.setTitleActions(titleActions);

        project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    public Project getProject() {
        return project;
    }

    public Tree getTree() {
        return tree;
    }

    @Override
    public void handleDocumentChanged(@NotNull VirtualFile file) {
        ASTService astService = ASTService.getInstance(project);
        DefaultTreeModel model = getTree().getModel();
        if (astService.isKnownOpenAPIFile(file.getPath())) {
            try {
                DefaultMutableTreeNode root = converter.convert(astService.getOpenAPIRootNode(file.getPath()));
                setRoot(model, root, file.getPath());
                setTreeBackGround(true, null);
            } catch (Exception e) {
                setTreeBackGround(false, e.getMessage());
            }
        }
    }

    @Override
    public void handleAllFilesClosed() {
        DefaultTreeModel model = getTree().getModel();
        model.setRoot(null);
        modelFileName = null;
        setNoOpenAPITreeBackGround();
    }

    @Override
    public void handleClosedFile(@NotNull VirtualFile file) {
        expandedPointers.remove(file.getPath());
    }

    @Override
    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        if (oldFileName.equals(modelFileName)) {
            modelFileName = newFile.getPath();
        }
        if (expandedPointers.containsKey(oldFileName)) {
            expandedPointers.put(newFile.getPath(), expandedPointers.remove(oldFileName));
        }
    }

    @Override
    public void handleSelectedFile(@NotNull VirtualFile file) {
        ASTService astService = ASTService.getInstance(project);
        DefaultTreeModel model = getTree().getModel();
        if (astService.isKnownOpenAPIFile(file.getPath())) {
            try {
                DefaultMutableTreeNode root = converter.convert(astService.getOpenAPIRootNode(file.getPath()));
                setRoot(model, root, file.getPath());
                setTreeBackGround(true, null);
                if (!toolWindow.isVisible() && SettingsService.getInstance().isValueSetInIDE(SHOW_PROPERTY_KEY)) {
                    toolWindow.show(null);
                    SettingsService.getInstance().setValue(SHOW_PROPERTY_KEY, false);
                }
            } catch (Exception e) {
                setRoot(model, null, file.getPath());
                setTreeBackGround(false, e.getMessage());
            }
        } else {
            setRoot(model, null, file.getPath());
            setNoOpenAPITreeBackGround();
        }
    }

    @Nullable
    public String getModelFileName() {
    	return modelFileName;
    }

    @Override
    public void dispose() {
        tree.removeAll();
        expandedPointers.clear();
        modelFileName = null;
    }

    private void setNoOpenAPITreeBackGround() {
        tree.getEmptyText().setText(OpenApiBundle.message("openapi.tree.valid.empty.text"));
        tree.setBackground(UIUtil.getTreeBackground());
        tree.setToolTipText(null);
    }

    private void setTreeBackGround(boolean valid, String exceptionMessage) {
        if (valid) {
            tree.getEmptyText().setText(OpenApiBundle.message("openapi.tree.valid.empty.text"));
            tree.setToolTipText(null);
            tree.setBackground(UIUtil.getTreeBackground());
        } else {
            String text = OpenApiBundle.message("openapi.tree.invalid.empty.text");
            tree.getEmptyText().setText(text);
            tree.setToolTipText(text + " " + exceptionMessage);
            tree.setBackground(ERROR_BACKGROUND);
        }
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (keys.contains(Settings.Outline.ABC_SORT) && !project.isDisposed()) {
            boolean sort = SettingsService.getInstance().getBoolean(Settings.Outline.ABC_SORT);
            sortTree(sort);
        }
    }

    private void setRoot(DefaultTreeModel model, DefaultMutableTreeNode root, String fileName) {
        // Save expanded nodes pointers for the previous file
        DefaultMutableTreeNode oldRoot = (DefaultMutableTreeNode) model.getRoot();
        if (oldRoot != null && modelFileName != null) {
            expandedPointers.put(modelFileName, collectExpandedPathsPointers());
        }
        model.setRoot(root);
        modelFileName = fileName;
        if (root != null) {
            List<String> pointersToExpand = expandedPointers.get(fileName);
            if (pointersToExpand == null) {
                pointersToExpand = new LinkedList<>();
                for (int i = 0; i < model.getChildCount(root); i++) {
                    DefaultMutableTreeNode child = (DefaultMutableTreeNode) model.getChild(root, i);
                    tree.expandPath(TreePathUtil.pathToTreeNode(child));
                    String pointer = getPointerFromTreeNode(child);
                    if (pointer != null) {
                        pointersToExpand.add(pointer);
                    }
                }
                expandedPointers.put(fileName, pointersToExpand);
            } else {
                List<Object> elements = new LinkedList<>();
                Map<String, DefaultMutableTreeNode> children = ((RootNode) root.getUserObject()).getChildren();
                for (String pointer : pointersToExpand) {
                    DefaultMutableTreeNode node = children.get(pointer);
                    if (node != null) {
                        elements.add(node);
                        if (EXPAND_LIMIT <= elements.size()) {
                            break;
                        }
                    }
                }
                if (!elements.isEmpty()) {
                    TreeUtil.restoreExpandedElements(tree, elements);
                }
            }
        }
    }

    public void sortTree(boolean sort) {
        OutlineSortTreeModel model = (OutlineSortTreeModel) getTree().getModel();
        model.setSortABC(sort);
        List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
        model.reload(false);
        TreeUtil.restoreExpandedPaths(tree, expandedPaths, EXPAND_LIMIT);
    }

    private List<String> collectExpandedPathsPointers() {
        List<String> pointers = new LinkedList<>();
        TreePath[] paths = tree.getViewer().getExpandedTreePaths();
        for (TreePath path : paths) {
            String pointer = getPointerFromTreeNode((DefaultMutableTreeNode) path.getLastSegment());
            if (pointer != null) {
                pointers.add(pointer);
            }
        }
        return pointers;
    }

    private String getPointerFromTreeNode(DefaultMutableTreeNode target) {
        Object obj = target.getUserObject();
        return obj instanceof BaseNode ? ((BaseNode) obj).getPointer() : null;
    }
}
