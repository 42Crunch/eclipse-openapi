package com.xliic.openapi.outline.ui;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
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
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.ui.UIUtil;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.SearchWidget;
import com.xliic.openapi.outline.OutlineMouseAdapter;
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

	private static final String SEARCH_OPEN_API_OUTLINE = "Search OpenAPI outline";
	
    private static final String SHOW_PROPERTY_KEY = "openapi.show.key";
    private static final Color ERROR_BACKGROUND = new JBColor(0xFFF2F2F2, 0x808080);
    private static final int EXPAND_LIMIT = 100;

    @NotNull
    private final Project project;
    @NotNull
    private final ToolWindow toolWindow;
    @NotNull
    private final DMTNConverter converter;
    @NotNull
    private final Tree tree;
    @Nullable
    private String modelFileName = null;
    @NotNull
    private final Map<String, List<String>> expandedPointers = new HashMap<>();
    @NotNull
    private final Map<String, String> searchValues = new HashMap<>();
    @NotNull
    private final SearchWidget searchWidget;

    public OutlinePanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {

        tree = new Tree(new TreeViewer(parent, SWT.SINGLE | SWT.H_SCROLL | SWT.V_SCROLL));
        this.project = project;
        this.toolWindow = toolWindow;
        // Install search widget
        searchWidget = new SearchWidget(project, toolWindow.getSearchParent(), SEARCH_OPEN_API_OUTLINE, false) {
            @Override
            public void searchTextChanged(@NotNull String text) {
                searchTree(text);
            }
        };
        tree.setRootVisible(false);
        tree.setModel(new OutlineSortTreeModel(tree.getViewer(), new DefaultMutableTreeNode(), false));
        tree.setCellRenderer(new OutlineTreeCellRenderer() {
            @Override
            public @Nullable String getSearchValue() {
                return modelFileName == null ? null : searchValues.get(modelFileName);
            }
        });
        tree.addMouseListener(new OutlineMouseAdapter(this));
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
        // Tree is forced to be drawn by the view in onViewPartBroughtToTop method 
    }

    public @NotNull Project getProject() {
        return project;
    }

    public @NotNull Tree getTree() {
        return tree;
    }

    @Override
    public void handleDocumentChanged(@NotNull VirtualFile file) {
        if (!Objects.equals(modelFileName, file.getPath())) {
            return;
        }
        ASTService astService = ASTService.getInstance(project);
        OutlineSortTreeModel model = (OutlineSortTreeModel) getTree().getModel();
        model.resetCache();
        if (astService.isKnownOpenAPIFile(file.getPath())) {
            try {
                DefaultMutableTreeNode root = converter.convert(astService.getOpenAPIRootNode(file.getPath()));
                setRoot(model, root, file.getPath());
                setTreeBackGround(true, null);
            } catch (Exception e) {
                setTreeBackGround(false, e.getMessage());
            } finally {
                model.resetCache();
            }
        }
    }

    @Override
    public void handleAllFilesClosed() {
    	OutlineSortTreeModel model = (OutlineSortTreeModel) getTree().getModel();
        model.setRoot(null);
        model.resetCache();
        modelFileName = null;
        setNoOpenAPITreeBackGround();
    }

    @Override
    public void handleClosedFile(@NotNull VirtualFile file) {
    	searchValues.remove(file.getPath());
        expandedPointers.remove(file.getPath());
    }

    @Override
    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        if (oldFileName.equals(modelFileName)) {
            modelFileName = newFile.getPath();
        }
        if (searchValues.containsKey(oldFileName)) {
            searchValues.put(newFile.getPath(), searchValues.remove(oldFileName));
        }
        if (expandedPointers.containsKey(oldFileName)) {
            expandedPointers.put(newFile.getPath(), expandedPointers.remove(oldFileName));
        }
    }

    @Override
    public void handleSelectedFile(@NotNull VirtualFile file) {
        ASTService astService = ASTService.getInstance(project);
        OutlineSortTreeModel model = (OutlineSortTreeModel) getTree().getModel();
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
    	((OutlineSortTreeModel) tree.getModel()).resetCache();
        tree.removeAll();
        searchValues.clear();
        expandedPointers.clear();
        modelFileName = null;
    }

    private void setNoOpenAPITreeBackGround() {
        tree.getEmptyText().setText(OpenApiBundle.message("openapi.tree.valid.empty.text"));
        tree.setBackground(UIUtil.getTreeBackground());
        tree.setToolTipText(null);
        searchWidget.setEditable(false);
    }

    private void setTreeBackGround(boolean valid, String exceptionMessage) {
        if (valid) {
            tree.getEmptyText().setText(OpenApiBundle.message("openapi.tree.valid.empty.text"));
            tree.setToolTipText(null);
            tree.setBackground(UIUtil.getTreeBackground());
            searchWidget.setEditable(true);
        } else {
            String text = OpenApiBundle.message("openapi.tree.invalid.empty.text");
            tree.getEmptyText().setText(text);
            tree.setToolTipText(text + " " + exceptionMessage);
            tree.setBackground(ERROR_BACKGROUND);
            searchWidget.setEditable(false);
        }
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (keys.contains(Settings.Outline.ABC_SORT) && !project.isDisposed()) {
            boolean sort = SettingsService.getInstance().getBoolean(Settings.Outline.ABC_SORT);
            sortTree(sort);
        }
    }

    private void setRoot(OutlineSortTreeModel model, DefaultMutableTreeNode root, String fileName) {
        model.resetCache();
        // Save expanded nodes pointers for the previous file
        DefaultMutableTreeNode oldRoot = (DefaultMutableTreeNode) model.getRoot();
        if (oldRoot != null && modelFileName != null) {
            expandedPointers.put(modelFileName, collectExpandedPathsPointers());
        }
        modelFileName = fileName;
        if (modelFileName != null) {
            model.setValue(searchValues.get(modelFileName));
        }
        try {
        	model.setRoot(root);
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
        } finally {
            model.resetCache();
        }
    }

    public void searchTree(String value) {
        OutlineSortTreeModel model = (OutlineSortTreeModel) getTree().getModel();
        model.setValue(value);
        if (modelFileName != null) {
            searchValues.put(modelFileName, value);
        }
        fastReload();
    }
    
    public void sortTree(boolean sort) {
        OutlineSortTreeModel model = (OutlineSortTreeModel) getTree().getModel();
        model.setSortABC(sort);
        fastReload();
    }

    public void fastReload() {
    	OutlineSortTreeModel model = (OutlineSortTreeModel) getTree().getModel();
        model.resetCache();
        try {
            List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
            model.reload();
            TreeUtil.restoreExpandedPaths(tree, expandedPaths, EXPAND_LIMIT);
        } finally {
            model.resetCache();
        }
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
