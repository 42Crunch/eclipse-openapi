package com.xliic.openapi.platform.tree.node;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.platform.tree.node.core.ProgressAware;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.utils.TempFileUtils;

public class PlatformAudit implements ProgressAware {

    private final String id;
    private final boolean isJson;
    private float grade;
    private boolean isValid;
    private volatile boolean inProgress;

    public PlatformAudit(@NotNull String id, float grade, boolean isValid, boolean isJson) {
        this.id = id;
        this.grade = grade;
        this.isValid = isValid;
        this.isJson = isJson;
    }

    public boolean isValid() {
        return isValid;
    }

    public void setValid(boolean valid) {
        isValid = valid;
    }

    public String getId() {
        return id;
    }

    public float getGrade() {
        return grade;
    }

    public void setGrade(float grade) {
        this.grade = grade;
    }

    public boolean isJson() {
        return isJson;
    }

    public String getName() {
        return "Security Audit: " + (ready() ? Issue.transformScore(grade) : "N/A");
    }

    public boolean ready() {
        return grade != -1.0f;
    }

    @Override
    public boolean isInProgress() {
        return inProgress;
    }

    @Override
    public void setInProgress(boolean inProgress) {
        this.inProgress = inProgress;
    }

    public VirtualFile getVirtualFile() {
        return TempFileUtils.getPlatformVirtualFile(id, isJson);
    }
}
