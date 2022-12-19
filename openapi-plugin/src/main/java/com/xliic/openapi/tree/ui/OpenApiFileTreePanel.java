package com.xliic.openapi.tree.ui;

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

import com.xliic.core.Disposable;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.Separator;
import com.xliic.core.ide.CommonActionsManager;
import com.xliic.core.ide.DefaultTreeExpander;
import com.xliic.core.ide.TreeExpander;
import com.xliic.core.ide.util.PropertiesComponent;
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
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.parser.dmtn.DMTNConverter;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.topic.WindowListener;
import com.xliic.openapi.tree.OpenAPIAlphaSortAction;
import com.xliic.openapi.tree.OpenAPIMouseMotionListener;
import com.xliic.openapi.tree.OpenAPITreeKeyListener;
import com.xliic.openapi.tree.OpenApiColoredTreeCellRenderer;
import com.xliic.openapi.tree.OpenApiMouseAdapter;
import com.xliic.openapi.tree.SortTreeModel;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.RootNode;

// We have to extend from JPanel to be able to register the whole stuff below as tool window component
// By doing so we will be able to access all necessary content from anywhere through ToolWindowManager
public class OpenApiFileTreePanel implements FileListener, WindowListener, SettingsListener, Disposable {

    private static final String SHOW_PROPERTY_KEY = "openapi.show.key";
    private static final Color ERROR_BACKGROUND = new JBColor(0xFFF2F2F2, 0x808080);
    private static final int EXPAND_LIMIT = 100;

    private final Project project;
    private final ToolWindow toolWindow;
    private final OpenAPIMouseMotionListener mouseMotionListener;
    private final DMTNConverter converter;
    private Tree tree;
    private String modelFileName = null;
    private final Map<String, List<String>> expandedPointers = new HashMap<>();

    public OpenApiFileTreePanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {

        tree = new Tree(new TreeViewer(parent, SWT.SINGLE | SWT.H_SCROLL | SWT.V_SCROLL));
        this.project = project;
        this.toolWindow = toolWindow;
        tree.setRootVisible(false);
        tree.setModel(new SortTreeModel(tree.getViewer(), new DefaultMutableTreeNode(), false));
        tree.setCellRenderer(new OpenApiColoredTreeCellRenderer());
        tree.addMouseListener(new OpenApiMouseAdapter(this));
        mouseMotionListener = new OpenAPIMouseMotionListener(project, tree);
        tree.addMouseMotionListener(mouseMotionListener);
        tree.addKeyListener(new OpenAPITreeKeyListener(project, tree));
        tree.setOpaque(true);

        converter = new DMTNConverter();

        List<AnJAction> titleActions = new ArrayList<>();
        titleActions.add(new OpenAPIAlphaSortAction(project, this::sortTree));
        titleActions.add(Separator.create());

        CommonActionsManager actionsManager = CommonActionsManager.getInstance();
        TreeExpander treeExpander = new DefaultTreeExpander(tree);
        titleActions.add(actionsManager.createExpandAllHeaderAction(treeExpander, tree));
        titleActions.add(actionsManager.createCollapseAllHeaderAction(treeExpander, tree));
        toolWindow.setTitleActions(titleActions);

        project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(WindowListener.TOPIC, this);

        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file != null) {
            handleSelectedFile(file);
        }
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
    public void handleToolWindowRegistered(@NotNull String id) {
        if (ToolWindowId.OPEN_API.equals(id)) {
            if (!toolWindow.isVisible() && PropertiesComponent.getInstance().isValueSet(SHOW_PROPERTY_KEY)) {
                toolWindow.show(null);
                PropertiesComponent.getInstance().setValue(SHOW_PROPERTY_KEY, false);
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
                if (!toolWindow.isVisible() && PropertiesComponent.getInstance().isValueSet(SHOW_PROPERTY_KEY)) {
                    toolWindow.show(null);
                    PropertiesComponent.getInstance().setValue(SHOW_PROPERTY_KEY, false);
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
        if (keys.contains(Settings.SortOutlines.ABC_SORT) && !project.isDisposed()) {
            boolean sort = PropertiesComponent.getInstance().getBoolean(Settings.SortOutlines.ABC_SORT);
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

    private void sortTree(boolean sort) {
        SortTreeModel model = (SortTreeModel) getTree().getModel();
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
