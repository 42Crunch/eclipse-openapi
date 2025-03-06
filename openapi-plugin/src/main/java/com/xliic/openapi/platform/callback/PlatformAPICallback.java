package com.xliic.openapi.platform.callback;

import static com.xliic.openapi.platform.tree.utils.PlatformUtils.goToTreeNode;

import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformFileData;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.utils.PlatformAPIUtils;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.services.PlatformService;

public class PlatformAPICallback extends SuccessASTResponseWithFailureDecoratorCallback {

    public PlatformAPICallback(@NotNull Project project, @NotNull Tree tree, @NotNull DefaultMutableTreeNode parentDMTN) {
        super(project, tree, parentDMTN);
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        Node list = node.find("/list");
        List<PlatformAPI> apis = new LinkedList<>();
        if (list != null) {
            for (Node item : list.getChildren()) {
                Node desc = item.getChildRequireNonNull("desc");
                String id = desc.getChildValueRequireNonNull("id");
                String name = desc.getChildValueRequireNonNull("name");
                String technicalName = desc.getChildValueRequireNonNull("technicalName");
                boolean isJson = !Boolean.parseBoolean(desc.getChildValueRequireNonNull("yaml"));
                Node assessment = item.getChildRequireNonNull("assessment");
                float grade = Float.parseFloat(assessment.getChildValueRequireNonNull("grade"));
                boolean isValid = Boolean.parseBoolean(assessment.getChildValueRequireNonNull("isValid"));
                apis.add(new PlatformAPI(id, name, grade, isValid, isJson, technicalName));
            }
        }
        SwingUtilities.invokeLater(() -> {
            PlatformAPIUtils.addAll(project, tree, parentDMTN, apis);
            Object parentObj = parentDMTN.getUserObject();
            PlatformCollection pco = (PlatformCollection) parentObj;
            List<PlatformFileData> data = PlatformService.getInstance(project).getWaitingForTargetingFileData(pco.getId());
            if (!data.isEmpty()) {
                Set<String> apiIds = data.stream().map(PlatformFileData::getApiId).collect(Collectors.toSet());
                for (int i = 0; i < parentDMTN.getChildCount(); i++) {
                    DefaultMutableTreeNode apiDMTN = (DefaultMutableTreeNode) parentDMTN.getChildAt(i);
                    PlatformAPI api = (PlatformAPI) apiDMTN.getUserObject();
                    if (apiIds.contains(api.getId())) {
                        PlatformUtils.targetTreeNode(tree, parentDMTN, apiDMTN, () -> goToTreeNode(tree, apiDMTN));
                        break;
                    }
                }
                PlatformService.getInstance(project).cancelWaitingForTargetingFileData(pco.getId());
            }
        });
    }
}
