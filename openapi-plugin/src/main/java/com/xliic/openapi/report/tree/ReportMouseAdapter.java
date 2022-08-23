package com.xliic.openapi.report.tree;

import com.xliic.core.ui.treeStructure.MouseAdapter;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.openapi.report.tree.ui.ReportPanel;
import org.jetbrains.annotations.NotNull;

public class ReportMouseAdapter extends MouseAdapter {

    private final ReportLeftMouseClickHandler leftMouseClickHandler;

    public ReportMouseAdapter(@NotNull ReportPanel panel) {
        // Eclipse Development Note 
        // Set false as not interested in double clicks
    	// It will speed up single click handling process
    	super(false);
        leftMouseClickHandler = new ReportLeftMouseClickHandler(panel);
    }

    public void mouseClicked(MouseEvent event) {
        if (isLeftMouseButton(event)) {
            leftMouseClickHandler.handle(event);
        }
    }
}
