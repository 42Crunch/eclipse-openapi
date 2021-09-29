package com.xliic.openapi.tree.ui;

import java.util.Optional;

import org.eclipse.ui.IViewPart;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.tree.PanelManager;
import com.xliic.openapi.utils.WorkbenchUtils;

public class OpenApiTreePanel {

	public static PanelManager getInstance(@NotNull Project project) {
		Optional<IViewPart> opt = WorkbenchUtils.findView(OpenAPITreeView.ID);
		return opt.isPresent() ? (PanelManager) opt.get() : null;
	}
}
