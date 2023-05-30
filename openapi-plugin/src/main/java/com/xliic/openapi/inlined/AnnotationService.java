package com.xliic.openapi.inlined;

import java.io.File;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.eclipse.jface.text.ITextViewerExtension2;
import org.eclipse.jface.text.Position;
import org.eclipse.jface.text.source.AnnotationPainter;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.jface.text.source.inlined.AbstractInlinedAnnotation;
import org.eclipse.jface.text.source.inlined.InlinedAnnotationSupport;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.async.AsyncTaskType;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.settings.Settings.InlinedAnnotations;
import com.xliic.openapi.settings.Settings.Platform;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.tryit.payload.TryItOperation;

public final class AnnotationService implements IAnnotationService, SettingsListener, Disposable {

    private final Project project;
    private final Map<String, InlinedAnnotationSupport> cache = new HashMap<>();
    private boolean isAnnotationsEnabled;

    public AnnotationService(@NotNull Project project) {
        this.project = project;
        isAnnotationsEnabled = PropertiesComponent.getInstance().getBoolean(InlinedAnnotations.ENABLE_FLAG);
    }

    public static AnnotationService getInstance(@NotNull Project project) {
        return project.getService(AnnotationService.class);
    }

    public void subscribe() {
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    public void install(@NotNull VirtualFile file) {
        String path = file.getPath();
        InlinedAnnotationSupport support = cache.get(path);
        if (support == null) {
            support = new InlinedAnnotationSupport();
            cache.put(path, support);
            ISourceViewer sourceViewer = EclipseUtil.getSourceViewer(file);
            support.install(sourceViewer, createAnnotationPainter(sourceViewer));
        }
    }

    public void uninstall(@NotNull VirtualFile file) {
        InlinedAnnotationSupport support = cache.remove(file.getPath());
        if (support != null) {
            support.uninstall();
        }
    }

    public void updateAnnotations(@NotNull PsiFile psiFile, @NotNull List<Object> payloads) {
        if (!isAnnotationsEnabled) {
            return;
        }
        VirtualFile file = psiFile.getVirtualFile();
        InlinedAnnotationSupport support = cache.get(file.getPath());
        if (support != null) {
            Set<Integer> offsets = new HashSet<>();
            Map<Integer, TryItOperation> map1 = new HashMap<>();
            Map<Integer, ScanOperation> map2 = new HashMap<>();
            for (Object payload : payloads) {
                if (payload instanceof TryItOperation) {
                    TryItOperation po = (TryItOperation) payload;
                    int offset = po.getOffset();
                    map1.put(offset, po);
                    offsets.add(offset);
                } else if (payload instanceof ScanOperation) {
                    ScanOperation po = (ScanOperation) payload;
                    int offset = po.getOffset();
                    map2.put(offset, po);
                    offsets.add(offset);
                }
            }
            Set<AbstractInlinedAnnotation> annotations = new HashSet<>();
            ISourceViewer viewer = EclipseUtil.getSourceViewer(file);
            for (Integer offset : offsets) {
                Position pos = new Position(offset, 1);
                AbstractInlinedAnnotation an = support.findExistingAnnotation(pos);
                if (an == null) {
                    an = new InlinedAnnotation(project, pos, viewer, map1.get(offset), map2.get(offset));
                }
                annotations.add(an);
            }
            support.updateAnnotations(annotations);
        }
    }

    @Override
    public void dispose() {
        cache.clear();
        project.getMessageBus().connect().unsubscribe(this);
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (project.isDisposed()) {
            return;
        }
        if (keys.contains(InlinedAnnotations.ENABLE_FLAG)) {
            isAnnotationsEnabled = PropertiesComponent.getInstance().getBoolean(InlinedAnnotations.ENABLE_FLAG);
            if (isAnnotationsEnabled) {
                requestDfs();
            } else {
                cleanAnnotations();
            }
        } else if ((keys.contains(Platform.TURNED_ON) || keys.contains(Platform.TURNED_OFF))) {
            cleanAnnotations();
            requestDfs();
        }
    }

    private static AnnotationPainter createAnnotationPainter(ISourceViewer viewer) {
        AnnotationPainter painter = new AnnotationPainter(viewer, new AnnotationAccess());
        ((ITextViewerExtension2) viewer).addPainter(painter);
        return painter;
    }

    private void cleanAnnotations() {
        for (InlinedAnnotationSupport support: cache.values()) {
            support.updateAnnotations(new HashSet<>());
        }
    }

    private void requestDfs() {
        ASTService astService = ASTService.getInstance(project);
        for (String filePath : cache.keySet()) {
            VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
            if (file != null) {
                astService.runAsyncTask(project, AsyncTaskType.RUN_TREE_DFS, file);
            }
        }
    }
}
