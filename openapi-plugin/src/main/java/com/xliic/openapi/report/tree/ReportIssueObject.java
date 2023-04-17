package com.xliic.openapi.report.tree;

import static com.xliic.openapi.utils.Utils.getOpenFileDescriptor;

import java.io.File;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.errorTreeView.NavigatableErrorTreeElement;
import com.xliic.core.pom.Navigatable;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.report.types.Severity;

public class ReportIssueObject implements NavigatableErrorTreeElement {

    private final Issue issue;
    private Navigatable navigatable = null;

    public ReportIssueObject(Project project, Issue issue) {
        this.issue = issue;
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(issue.getFileName()));
        if (file != null) {
            navigatable = getOpenFileDescriptor(project, file, issue.getRange());
        }
    }

    @Override
    public String toString() {
        return issue.toString();
    }

    public Issue getIssue() {
        return issue;
    }

    public Severity getSeverity() {
        return issue.getSeverity();
    }

    public String getLabel() {
        return issue.getLabel();
    }

    public String getLabelLocation() {
        return issue.getLabelLocation();
    }

    public Range getRange() {
        return issue.getRange();
    }

    public boolean isRangeDetected() {
        return getRange() != null;
    }

    @NotNull
    @Override
    public Navigatable getNavigatable() {
        return navigatable;
    }
}
