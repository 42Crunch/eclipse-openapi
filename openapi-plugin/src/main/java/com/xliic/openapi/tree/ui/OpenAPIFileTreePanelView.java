package com.xliic.openapi.tree.ui;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.ToolWindowId;

public class OpenAPIFileTreePanelView extends PanelViewPart {

	public OpenAPIFileTreePanelView() {
		super(ToolWindowId.OPEN_API);
	}

	@Override
	protected Disposable createPanel(@NotNull Project project, @NotNull ToolWindow window, @NotNull Composite parent) {
		return new OpenApiFileTreePanel(project, window, parent);
	}
}
