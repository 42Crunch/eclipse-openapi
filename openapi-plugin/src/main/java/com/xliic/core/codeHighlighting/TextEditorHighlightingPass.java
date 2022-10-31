package com.xliic.core.codeHighlighting;

import java.util.HashMap;
import java.util.LinkedList;
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
    protected final List<HighlightInfo> highlights = new LinkedList<>();
    protected final Map<String, List<IntentionAction>> pointerToActions = new HashMap<>();

    public TextEditorHighlightingPass(@NotNull Project project, @NotNull Document document, boolean runIntentionPassAfter) {
        myProject = project;
        myDocument = document;
    }

    public abstract void doCollectInformation(@NotNull ProgressIndicator progress);

    public abstract void doApplyInformationToEditor();

    public final int getId() {
        return -1;
    }

    public void addPointerActions(String pointer, List<IntentionAction> actions) {
        if (!pointerToActions.containsKey(pointer)) {
            pointerToActions.put(pointer, new LinkedList<>());
        }
        pointerToActions.get(pointer).addAll(actions);
    }

    @Nullable
    public EditorColorsScheme getColorsScheme() {
        return null;
    }

    public List<HighlightInfo> getInformationToEditor() {
        return highlights;
    }

    @Nullable
    public Map<String, List<IntentionAction>> getActionsToEditor() {
        return pointerToActions;
    }
}
