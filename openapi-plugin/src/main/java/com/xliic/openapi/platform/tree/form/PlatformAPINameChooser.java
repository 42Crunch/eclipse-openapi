package com.xliic.openapi.platform.tree.form;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.NamingConvention;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.SuccessASTResponseCallback;

import static com.xliic.openapi.platform.NamingConvention.DEFAULT_API_NAMING_PATTERN;

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
                String pattern = node.getChildValueOrEmpty("pattern");
                String description = node.getChildValueOrEmpty("description");
                String example = node.getChildValueOrEmpty("example");
                convention = new NamingConvention(pattern, description, example);
                SwingUtilities.invokeLater(() -> enable(convention.getExample()));
            }

            @Override
            public void onFailure(@NotNull String reason) {
                SwingUtilities.invokeLater(() -> enable());
            }
        });
    }

    @Override
    protected @NotNull String getDefaultPattern() {
        return DEFAULT_API_NAMING_PATTERN;
    }
}
