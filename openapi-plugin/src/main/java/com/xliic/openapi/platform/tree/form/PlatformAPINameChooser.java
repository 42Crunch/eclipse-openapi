package com.xliic.openapi.platform.tree.form;

import com.xliic.core.project.Project;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.SuccessASTResponseCallback;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

public class PlatformAPINameChooser extends PlatformNameChooser {

    public PlatformAPINameChooser(@NotNull Project project, @NotNull String title, @NotNull String currentName) {
        super(project, title, currentName);
    }

	@Override
	public void create(Composite parent) {
		super.create(parent);
        disable();
        PlatformAPIs.getApiNamingConvention(new SuccessASTResponseCallback(project, false) {
            @Override
            public void onCode200ASTResponse(@NotNull Node node) {
                String pattern = node.getChildValue("pattern");
                String description = node.getChildValue("description");
                String example = node.getChildValue("example");
                convention = new PlatformNameConvention(pattern, description, example);
                SwingUtilities.invokeLater(() -> enable(convention.getExample()));
            }

            @Override
            public void onFailure(@NotNull String reason) {
            	SwingUtilities.invokeLater(() -> enable());
            }
        });
	}
	
    @Override
    protected String getDefaultPattern() {
        return "^[\\w _.-]{1,64}$";
    }
}
