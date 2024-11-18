//package com.xliic.openapi.tags.inlay;
//
//import com.intellij.codeInsight.hints.*;
//import com.intellij.codeInsight.hints.presentation.InlayPresentation;
//import com.intellij.lang.Language;
//import com.intellij.openapi.editor.Editor;
//import com.intellij.openapi.project.Project;
//import com.intellij.psi.PsiFile;
//import com.xliic.openapi.HintsCollector;
//import com.xliic.openapi.services.InlayHintsService;
//import com.xliic.openapi.tags.TagsService;
//import com.xliic.openapi.tags.payload.TagsOperation;
//import org.jetbrains.annotations.Nls;
//import org.jetbrains.annotations.NotNull;
//import org.jetbrains.annotations.Nullable;
//
//import javax.swing.*;
//import java.util.List;
//
//@SuppressWarnings("UnstableApiUsage")
//public abstract class TagsHintsProvider implements InlayHintsProvider<NoSettings>  {
//
//    protected static final String PATHS = "paths";
//    private static final SettingsKey<NoSettings> KEY = new SettingsKey<>("Tags");
//
//    @Override
//    public boolean isVisibleInSettings() {
//        return true;
//    }
//
//    @NotNull
//    @Override
//    public SettingsKey<NoSettings> getKey() {
//        return KEY;
//    }
//
//    @Nls(capitalization = Nls.Capitalization.Sentence)
//    @NotNull
//    @Override
//    public String getName() {
//        return "Tags";
//    }
//
//    @NotNull
//    @Override
//    public ImmediateConfigurable createConfigurable(@NotNull NoSettings noSettings) {
//        return listener -> {
//            JPanel panel = new JPanel();
//            panel.setVisible(true);
//            return panel;
//        };
//    }
//
//    @NotNull
//    @Override
//    public NoSettings createSettings() {
//        return new NoSettings();
//    }
//
//    @Nullable
//    @Override
//    public InlayHintsCollector getCollectorFor(@NotNull PsiFile psiFile,
//                                               @NotNull Editor editor,
//                                               @NotNull NoSettings noSettings,
//                                               @NotNull InlayHintsSink inlayHintsSink) {
//
//        Project project = psiFile.getProject();
//        InlayHintsService.getInstance(project).onHintsCollectorTriggered(psiFile);
//        TagsService tagsService = TagsService.getInstance(project);
//        if (tagsService.hasApiTokenCredentials()) {
//            return new HintsCollector<TagsOperation>(editor) {
//
//                @Override
//                protected void setVisitor(@NotNull PsiFile file, @NotNull List<TagsOperation> payloads) {
//                }
//
//                @Override
//                protected void setCustomPayload(@NotNull PsiFile file, @NotNull List<TagsOperation> payloads) {
//                    payloads.add(new TagsOperation(file, getFirstOffset(file)));
//                }
//
//                @Override
//                protected @NotNull InlayPresentation getPresentation(@NotNull PsiFile file, @NotNull TagsOperation payload) {
//                    return TagsService.getInstance(file.getProject()).getPresentation(file.getVirtualFile(), getFactory(), payload);
//                }
//
//                @Override
//                protected @NotNull InlayPresentation getDummyPresentation() {
//                    return TagsService.getPresentation(getFactory());
//                }
//            };
//        } else {
//            return null;
//        }
//    }
//
//    @Override
//    public boolean isLanguageSupported(@NotNull Language language) {
//        return true;
//    }
//}
