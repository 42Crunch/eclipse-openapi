package com.xliic.openapi.inlined;

import java.io.File;
import java.util.ArrayList;
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
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.services.IAnnotationService;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.Operation;
import com.xliic.openapi.async.AsyncTaskType;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.settings.Settings.InlinedAnnotations;
import com.xliic.openapi.settings.Settings.Platform;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.tags.payload.TagsOperation;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.tryit.payload.TryItOperation;

public final class AnnotationService implements IAnnotationService, FileListener, SettingsListener, Disposable {

    private final Project project;
    private final Map<String, InlinedAnnotationSupport> cache = new HashMap<>();
    private boolean isAnnotationsEnabled;

    public AnnotationService(@NotNull Project project) {
        this.project = project;
        isAnnotationsEnabled = SettingsService.getInstance().getBoolean(InlinedAnnotations.ENABLE_FLAG);
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
        	ISourceViewer viewer = EclipseUtil.getSourceViewer(file);
        	if (viewer != null) {
                support = new InlinedAnnotationSupport();
                support.install(viewer, createAnnotationPainter(viewer));
                cache.put(path, support);
        	}
        }
    }

    public void uninstall(@NotNull VirtualFile file) {
        InlinedAnnotationSupport support = cache.remove(file.getPath());
        if (support != null) {
            support.uninstall();
        }
    }

    public boolean isAnnotationSupportInstalled(@NotNull VirtualFile file) {
        return cache.get(file.getPath()) != null;
    }

    public void updateAnnotations(@NotNull PsiFile psiFile, @NotNull List<Object> payloads, boolean redraw) {
        if (!isAnnotationsEnabled) {
            return;
        }
        VirtualFile file = psiFile.getVirtualFile();
        InlinedAnnotationSupport support = cache.get(file.getPath());
        if (support != null) {
            Set<Integer> offsets = new HashSet<>();
            Map<Integer, TagsOperation> tagsOps = new HashMap<>();
            Map<Integer, TryItOperation> tryItOps = new HashMap<>();
            Map<Integer, ScanConfOperation> scanConfOps = new HashMap<>();
            Map<Integer, AuditOperation> auditOps = new HashMap<>();
            for (Object payload : payloads) {
                Operation op = (Operation) payload;
                int offset = op.getOffset();
                offsets.add(offset);
                if (op instanceof TagsOperation) {
                	tagsOps.put(offset, (TagsOperation) op);
                } else if (op instanceof TryItOperation) {
                    tryItOps.put(offset, (TryItOperation) op);
                } else if (payload instanceof ScanConfOperation) {
                    scanConfOps.put(offset, (ScanConfOperation) op);
                } else if (payload instanceof AuditOperation) {
                    auditOps.put(offset, (AuditOperation) op);
                }
            }
            Set<AbstractInlinedAnnotation> annotations = new HashSet<>();
            ISourceViewer viewer = EclipseUtil.getSourceViewer(file);
            for (Integer offset : offsets) {
                Position pos = new Position(offset, 1);
                AbstractInlinedAnnotation an = support.findExistingAnnotation(pos);
                if (an == null) {
                	ArrayList<Operation> ops = new ArrayList<>(4);
                    ops.add(tagsOps.get(offset));
                	ops.add(tryItOps.get(offset));
                	ops.add(scanConfOps.get(offset));
                	ops.add(auditOps.get(offset));
                	if (checkOperations(ops)) {
                		an = new InlinedAnnotation(project, pos, viewer, ops);
                	}
                }
                if (an != null) {
                    if (redraw) {
                    	if (tagsOps.isEmpty()) {
                    		((InlinedAnnotation) an).setTagsOperation(null);
                    	} else if (tagsOps.get(offset) != null) {
                    		((InlinedAnnotation) an).setTagsOperation(tagsOps.get(offset));
                    	}
                        an.redraw();
                    }
                    annotations.add(an);
                }
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
    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        if (cache.containsKey(oldFileName)) {
            cache.put(newFile.getPath(), cache.remove(oldFileName));
        }
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (project.isDisposed()) {
            return;
        }
        if (keys.contains(InlinedAnnotations.ENABLE_FLAG)) {
            isAnnotationsEnabled = SettingsService.getInstance().getBoolean(InlinedAnnotations.ENABLE_FLAG);
            if (isAnnotationsEnabled) {
                requestDfs();
            } else {
                dropAllSupport();
            }
        } else if (keys.contains(Platform.TURNED_ON) || keys.contains(Platform.TURNED_OFF)) {
            dropAllSupport();
            requestDfs();
        }
    }

    private boolean checkOperations(ArrayList<Operation> operations) {
    	for (Operation op : operations) {
    		if (op != null) {
    			return true;
    		}
    	}
    	return false;
    }

    private static AnnotationPainter createAnnotationPainter(ISourceViewer viewer) {
        AnnotationPainter painter = new AnnotationPainter(viewer, new AnnotationAccess());
        ((ITextViewerExtension2) viewer).addPainter(painter);
        return painter;
    }

    // Uninstall support, but leave file keys in the cache to be able to request DFS later
    // If we simply run support.updateAnnotations(new HashSet<>()) this may lead to visual overlapping
    private void dropAllSupport() {
        for (String filePath : cache.keySet()) {
            InlinedAnnotationSupport support = cache.get(filePath);
            if (support != null) {
                support.uninstall();
                cache.put(filePath, null);
            }
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
