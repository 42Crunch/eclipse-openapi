package com.xliic.openapi.platform.callback;

import java.util.Base64;
import java.util.Collections;
import java.util.Date;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.utils.NetUtils;
import com.xliic.openapi.utils.TempFileUtils;
import com.xliic.openapi.utils.Utils;

public class PlatformOASCallback extends SuccessASTResponseCallback {

    private final Tree tree;
    private final DefaultMutableTreeNode progressDMTN;
    private final boolean showAsHTML;
    private final boolean openInEditor;

    public PlatformOASCallback(@NotNull Project project, @Nullable Tree tree, @Nullable DefaultMutableTreeNode progressDMTN, boolean showAsHTML,
            boolean openInEditor) {
        this(project, tree, progressDMTN, showAsHTML, openInEditor, true);
    }

    public PlatformOASCallback(@NotNull Project project, @Nullable Tree tree, @Nullable DefaultMutableTreeNode progressDMTN, boolean showAsHTML,
            boolean openInEditor, boolean showDialogOnFailure) {
        super(project, showDialogOnFailure);
        this.tree = tree;
        this.progressDMTN = progressDMTN;
        this.showAsHTML = showAsHTML;
        this.openInEditor = openInEditor;
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        try {
            Node desc = node.getChildRequireNonNull("desc");
            String id = desc.getChildValueRequireNonNull("id");
            Date date = PlatformUtils.getLastAssessmentDate(node.getChild("assessment"));
            if (date != null) {
                PlatformService platformService = PlatformService.getInstance(project);
                platformService.setAssessmentLastDate(id, date);
            }
            boolean isJson = !Boolean.parseBoolean(desc.getChildValueRequireNonNull("yaml"));
            String specFile = desc.getChildValueRequireNonNull("specfile");
            byte[] decodedBytes = Base64.getDecoder().decode(specFile);
            String text = QuickFix.formatFixText(new String(decodedBytes), isJson);
            String platformUrl = PlatformConnection.getOptions().getPlatformUrl();
            String domain = NetUtils.getDomainName(platformUrl, "default");
            VirtualFile file = WriteCommandAction.runWriteCommandAction(project, (Computable<VirtualFile>) () -> {
                String fileName = id + (isJson ? ".json" : ".yaml");
                return TempFileUtils.createPlatformFile(this, domain, fileName, Utils.convertAllTabsToSpaces(text, 2));
            });
            if (file != null) {
                LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(file));
                PlatformService platformService = PlatformService.getInstance(project);
                platformService.setFileIsModified(file, false);
                PlatformAPIs.readAuditReport(id, new PlatformAuditCallback(project, file, tree, progressDMTN, showAsHTML, openInEditor));
            } else {
                PlatformUtils.setInProgress(tree, progressDMTN, false);
            }
        } catch (Throwable t) {
            PlatformUtils.setInProgress(tree, progressDMTN, false);
            t.printStackTrace();
        }
    }
}
