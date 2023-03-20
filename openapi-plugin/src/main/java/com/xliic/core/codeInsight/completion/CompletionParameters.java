package com.xliic.core.codeInsight.completion;

import java.util.regex.Pattern;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;

public class CompletionParameters {

    @NotNull
    private final Project project;
    @NotNull
    private final VirtualFile file;
    @NotNull
    private final Document document;
    private final int offset;

    private String prefix;
    private Node root;
    private Node target;
    private OpenApiVersion version;
    private Pattern pattern;
    private boolean useRunnable;

    public CompletionParameters(@NotNull Project project, @NotNull VirtualFile file, @NotNull Document document, int offset) {
        this.project = project;
        this.file = file;
        this.document = document;
        this.offset = offset;
        prefix = null;
        root = null;
        target = null;
        version = null;
        pattern = null;
        useRunnable = true;
    }

    public boolean isUseRunnable() {
        return useRunnable;
    }

    public void setUseRunnable(boolean useRunnable) {
        this.useRunnable = useRunnable;
    }

    @NotNull
    public Project getProject() {
        return project;
    }

    @NotNull
    public VirtualFile getFile() {
        return file;
    }

    @NotNull
    public Document getDocument() {
        return document;
    }

    public int getOffset() {
        return offset;
    }

    public String getPrefix() {
        return prefix;
    }

    public Node getRoot() {
        return root;
    }

    public Node getTarget() {
        return target;
    }

    public OpenApiVersion getVersion() {
        return version;
    }

    public Pattern getPattern() {
        return pattern;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public void setRoot(Node root) {
        this.root = root;
    }

    public void setTarget(Node target) {
        this.target = target;
    }

    public void setVersion(OpenApiVersion version) {
        this.version = version;
    }

    public void setPattern(Pattern pattern) {
        this.pattern = pattern;
    }
}
