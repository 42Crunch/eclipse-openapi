package com.xliic.openapi.report.types;

import static com.xliic.openapi.utils.FileUtils.isGraphQl;

import java.io.File;
import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.RangeMarker;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleLocation;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;

public class Issue {

    private static final String SCORE_ZERO = "0";
    private static final String SCORE_LTO = "less than 1";
    private static final String GQL_DEFAULT_LOCATION = "1,1,1,2";

    @NotNull
    private final Project project;
    @NotNull
    private String auditFileName;
    @NotNull
    private final String id;
    @NotNull
    private final String description;
    @NotNull
    private String pointer;
    private final float score;
    private final int criticality;
    private final boolean useLocationMap;

    @NotNull
    private final String displayScore;
    @NotNull
    private final Severity severity;
    private String fileName = null;
    private URI uri = null;
    private Range range = null;
    private RangeMarker rangeMarker = null;

    public Issue(@NotNull Project project,
                 @NotNull String auditFileName,
                 @NotNull String id,
                 @NotNull String description,
                 @NotNull String pointer,
                 float score,
                 int criticality,
                 boolean useLocationMap) {
        this.project = project;
        this.auditFileName = auditFileName;
        this.id = id;
        this.description = description;
        this.pointer = pointer;
        this.score = score;
        this.criticality = criticality;
        this.useLocationMap = useLocationMap;
        displayScore = getReadableScore(score);
        severity = Severity.getSeverity(criticality);
    }

    public void finalizeInReadAction() {
        final boolean isGraphQl = isGraphQl(Objects.requireNonNull(auditFileName));
        if (isGraphQl) {
            finalizeGraphQlInReadAction();
        } else {
            finalizeOasInReadAction();
        }
    }

    private void finalizeGraphQlInReadAction() {
        fileName = auditFileName;
        disposeRangeMarker();
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
        if (file != null) {
            Document document = FileDocumentManager.getInstance().getDocument(file);
            if (document != null) {
                range = getRangeByGqlLocation(document, pointer);
                if (range == null) {
                    range = getRangeByGqlLocation(document, GQL_DEFAULT_LOCATION);
                }
                if (range != null) {
                    rangeMarker = document.createRangeMarker(range.getStartOffset(), range.getEndOffset());
                }
            }
        }
    }
    
    private static Range getRangeByGqlLocation(Document document, String pointer) {
        if (!pointer.isEmpty()) {
            String[] values = pointer.split(",");
            if (values.length == 4) {
                List<Integer> ints = new LinkedList<>();
                for (String value : values) {
                    try {
                        int intValue = Math.abs(Integer.parseInt(value)) - 1;
                        if (intValue < 0) {
                            ints.clear();
                            break;
                        }
                        ints.add(intValue);
                    } catch (NumberFormatException ignored) {
                        ints.clear();
                        break;
                    }
                }
                if (ints.size() == 4) {
                    int startLine = ints.get(0);
                    int startCol = ints.get(1);
                    int endLine = ints.get(2);
                    int endCol = ints.get(3);
                    int startOffset = document.getLineStartOffset(startLine) + startCol;
                    int endOffset = document.getLineStartOffset(endLine) + endCol;
                    if (startOffset < endOffset) {
                        return new Range(startOffset, endOffset, startLine, startCol);
                    }
                }
            }
        }
        return null;
    }

    private void finalizeOasInReadAction() {
        BundleLocation location;
        if (useLocationMap) {
            BundleResult result = BundleService.getInstance(project).getBundle(auditFileName);
            location = result.getBundleLocation(pointer);
        } else {
            location = new BundleLocation(auditFileName, pointer);
        }
        disposeRangeMarker();
        if (location.isValid()) {
            VirtualFile file = location.getFile();
            fileName = file.getPath();
            uri = location.getUri();
            pointer = location.getPointer();
            Document document = FileDocumentManager.getInstance().getDocument(file);
            if (document != null) {
                Node root = ASTService.getInstance(project).getRootNode(file);
                if (root != null) {
                    Node node = root.find(pointer);
                    if (node != null) {
                        range = node.getHighlightRange();
                        rangeMarker = document.createRangeMarker(range.getStartOffset(), range.getEndOffset());
                    }
                }
            }
        }
    }
    
    @NotNull
    public static String getReadableScore(float score) {
        int rounded = Math.abs(Math.round(score));
        if (score == 0) {
            return SCORE_ZERO;
        } else if (rounded >= 1) {
            return String.valueOf(rounded);
        }
        return SCORE_LTO;
    }

    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        if (Objects.equals(auditFileName, oldFileName)) {
            auditFileName = newFile.getPath();
        }
        if (Objects.equals(fileName, oldFileName)) {
            fileName = newFile.getPath();
        }
    }

    public void updateRangeMarkers(@NotNull Document document, @NotNull Node root) {
        if (rangeMarker != null && !rangeMarker.isValid()) {
            disposeRangeMarker();
        }
        Node node = root.find(pointer);
        if (node == null) {
            range = null;
            disposeRangeMarker();
        } else {
            range = node.getHighlightRange();
            if (rangeMarker == null) {
                rangeMarker = document.createRangeMarker(range.getStartOffset(), range.getEndOffset());
            }
        }
    }

    public @NotNull Project getProject() {
        return project;
    }

    public @NotNull String getAuditFileName() {
        return auditFileName;
    }

    public @NotNull String getId() {
        return id;
    }

    public @NotNull String getDescription() {
        return description;
    }

    public @NotNull String getPointer() {
        return pointer;
    }

    public float getScore() {
        return score;
    }

    public int getCriticality() {
        return criticality;
    }

    public @NotNull String getDisplayScore() {
        return displayScore;
    }

    public @NotNull Severity getSeverity() {
        return severity;
    }

    public String getFileName() {
        return fileName;
    }

    public URI getUri() {
        return uri;
    }

    public Range getRange() {
        return range;
    }

    public RangeMarker getRangeMarker() {
        return rangeMarker;
    }

    private void disposeRangeMarker() {
        if (rangeMarker != null) {
            rangeMarker.dispose();
            rangeMarker = null;
        }
    }
}
