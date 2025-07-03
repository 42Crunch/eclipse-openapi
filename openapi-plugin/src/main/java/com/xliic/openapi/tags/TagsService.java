package com.xliic.openapi.tags;

import static com.xliic.openapi.webapp.editor.WebFileEditor.TAGS_EDITOR_ID;

import java.util.List;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.persistence.PersistentStateComponent;
import com.xliic.core.project.Project;
import com.xliic.core.services.ITagsService;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.InlayHintsService;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.tags.payload.TagsOperation;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;

public final class TagsService implements ITagsService, PersistentStateComponent<TagsState>, Disposable {

    private static final String TAB_ID = "Tag Selection";

    @NotNull
    private final Project project;
    @NotNull
    private final TagsState state = new TagsState();
    private volatile boolean hasApiTokenCredentials;

    public TagsService(@NotNull Project project) {
        this.project = project;
        hasApiTokenCredentials = (Credentials.getCredentialsType() == Credentials.Type.ApiToken);
    }

    public static TagsService getInstance(@NotNull Project project) {
        return project.getService(TagsService.class);
    }

    @Override
    public @NotNull TagsState getState() {
        return state;
    }

    @Override
    public void loadState() {
        state.restore();
    }

    @Override
    public void saveState() {
        state.save();
    }

    public void createOrActiveTagsWindow(@NotNull TagsOperation payload) {
    	String targetFileName = payload.getPsiFile().getVirtualFile().getPath();
    	if (hasApiTokenCredentials) {
    		createAndOpenTagsWindow(targetFileName);
        }
    }

    public boolean hasApiTokenCredentials() {
        return hasApiTokenCredentials;
    }

    public void updateCredentialsType(@Nullable Credentials.Type type) {
        hasApiTokenCredentials = (type == Credentials.Type.ApiToken);
        InlayHintsService inlayHintsService = InlayHintsService.getInstance(project);
        for (VirtualFile file : FileEditorManager.getInstance(project).getOpenFiles()) {
            OpenApiFileType fileType = Utils.getFileType(file);
            if (fileType != OpenApiFileType.Unsupported) {
                OpenApiVersion version = ASTService.getOpenAPIVersion(project, file);
                if (version != OpenApiVersion.Unknown) {
                    inlayHintsService.restartHintsProvider(file.getPath());
                }
            }
        }
    }

    @Override
    public void dispose() {
    	state.dispose();
    }

    private void createAndOpenTagsWindow(String targetFileName) {
        Config config = new Config(false);      
        WindowUtils.openWebTab(project, TAGS_EDITOR_ID, TAB_ID, () -> {
        	project.getMessageBus().syncPublisher(TagsListener.TOPIC).showTags(config, targetFileName, getState().tagData);
        });
    }

    public String getTagHintName(String targetFileName) {
        Object data = getState().tagData.get(targetFileName);
        if (data != null) {
            if (data instanceof List) {
                return "Tags: " + ((List<?>) data).size() + " selected";
            } else {
                return "Tags: linked to API";
            }
        } else {
            return "Tags: 0 selected";
        }
    }
}
