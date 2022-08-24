package com.xliic.core.codeHighlighting;

import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.codeInsight.HighlightInfo;
import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.editor.Document;
import com.xliic.core.editor.EditorColorsScheme;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;

public abstract class TextEditorHighlightingPass {

    protected final Project myProject;
    protected final Document myDocument;

    public TextEditorHighlightingPass(@NotNull Project project, @NotNull Document document,
            boolean runIntentionPassAfter) {
        myProject = project;
        myDocument = document;
    }

    public abstract void doCollectInformation(@NotNull ProgressIndicator progress);

    public abstract void doApplyInformationToEditor();

    public final int getId() {
        return -1;
    }

    @Nullable
    public EditorColorsScheme getColorsScheme() {
        return null;
    }

    public abstract List<HighlightInfo> getInformationToEditor();

    @Nullable
    public abstract Map<String, List<IntentionAction>> getActionsToEditor();
}
