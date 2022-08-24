package com.xliic.openapi.tree.ui;

import com.xliic.core.ide.CommonActionsManager;
import com.xliic.core.ide.DefaultTreeExpander;
import com.xliic.core.ide.TreeExpander;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.Disposable;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.Separator;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.ui.Color;
import com.xliic.core.ui.JBColor;
import com.xliic.core.ui.treeStructure.DefaultTreeModel;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.util.ui.UIUtil;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.parser.dmtn.DMTNConverter;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.settings.SettingsKeys;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.topic.WindowListener;
import com.xliic.openapi.tree.*;

import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.ArrayList;
import java.util.List;

// We have to extend from JPanel to be able to register the whole stuff below as tool window component
// By doing so we will be able to access all necessary content from anywhere through ToolWindowManager
public class OpenApiFileTreePanel implements FileListener, WindowListener, SettingsListener, Disposable {

    private static final String SHOW_PROPERTY_KEY = "openapi.show.key";
    private static final Color ERROR_BACKGROUND = new JBColor(0xFFF2F2F2, 0x808080);

    private final Project project;
    private final ToolWindow toolWindow;
    private final OpenApiTreeExpansionListener expansionListener;
    private final OpenAPIMouseMotionListener mouseMotionListener;
    private final DMTNConverter converter;
    private Tree tree;

    public OpenApiFileTreePanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {

        tree = new Tree(new TreeViewer(parent, SWT.SINGLE | SWT.H_SCROLL | SWT.V_SCROLL));
        this.project = project;
        this.toolWindow = toolWindow;
        tree.setRootVisible(false);
        tree.setModel(new DefaultTreeModel(tree.getViewer(), new DefaultMutableTreeNode(), false));
        tree.setCellRenderer(new OpenApiColoredTreeCellRenderer());
        expansionListener = new OpenApiTreeExpansionListener(project, tree);
        tree.addTreeExpansionListener(expansionListener);
        tree.addMouseListener(new OpenApiMouseAdapter(this));
        mouseMotionListener = new OpenAPIMouseMotionListener(project, tree);
        tree.addMouseMotionListener(mouseMotionListener);
        tree.addKeyListener(new OpenAPITreeKeyListener(project, tree));
        tree.setOpaque(true);

        converter = new DMTNConverter(PropertiesComponent.getInstance().getBoolean(SettingsKeys.ABC_SORT));

        List<AnJAction> titleActions = new ArrayList<>();
        titleActions.add(new OpenAPIAlphaSortAction(project, new OpenAPIAlphaSortAction.SortCallback() {
            @Override
            public void sort(boolean sort) {
                sortTree(sort);
            }
        }));
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
        if (astService.isKnownOpenAPIFile(file.getPath())) {
            try {
                DefaultMutableTreeNode root = converter.convert(astService.getOpenAPIRootNode(file.getPath()));
                setTreeBackGround(true, null);
                DefaultTreeModel model = getTree().getModel();
                model.setRoot(root);
                expansionListener.expand(file);
            } catch (Exception e) {
                setTreeBackGround(false, e.getMessage());
            }
        }
    }

    @Override
    public void handleToolWindowRegistered(@NotNull String id) {
        if (ToolWindowId.OPEN_API.equals(id)) {
            VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
            if (file == null) {
                return;
            }
            handleSelectedFile(file);
            if (!toolWindow.isVisible() && PropertiesComponent.getInstance().isValueSet(SHOW_PROPERTY_KEY)) {
                toolWindow.show(null);
                PropertiesComponent.getInstance().setValue(SHOW_PROPERTY_KEY, false);
            }
        }
    }

    @Override
    public void handleToolWindowOpened(@NotNull String id) {
    }

    @Override
    public void handleAllFilesClosed() {
        setNoOpenAPITreeBackGround();
        DefaultTreeModel model = getTree().getModel();
        model.setRoot(null);
    }

    @Override
    public void handleClosedFile(@NotNull VirtualFile file) {
        expansionListener.clean(file);
    }

    @Override
    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        expansionListener.replace(newFile.getPath(), oldFileName);
    }

    @Override
    public void handleSelectedFile(@NotNull VirtualFile file) {
        ASTService astService = ASTService.getInstance(project);
        if (astService.isKnownOpenAPIFile(file.getPath())) {
            try {
                DefaultMutableTreeNode root = converter.convert(astService.getOpenAPIRootNode(file.getPath()));
                setTreeBackGround(true, null);
                DefaultTreeModel model = getTree().getModel();
                model.setRoot(root);
                expansionListener.expand(file);
            } catch (Exception e) {
                setTreeBackGround(false, e.getMessage());
                DefaultTreeModel model = getTree().getModel();
                model.setRoot(null);
            }
        } else {
            setNoOpenAPITreeBackGround();
            DefaultTreeModel model = getTree().getModel();
            model.setRoot(null);
        }
    }

    @Override
    public void dispose() {
        tree.removeAll();
        expansionListener.clean();
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
    public void propertiesUpdated(@NotNull String key) {
        if (SettingsKeys.ABC_SORT.equals(key)) {
            boolean sort = PropertiesComponent.getInstance().getBoolean(SettingsKeys.ABC_SORT);
            sortTree(sort);
        }
    }

    public void sortTree(boolean sort) {
        converter.setSortABC(sort);
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file != null) {
            SwingUtilities.invokeLater(() -> handleSelectedFile(file));
        }
    }
}
