package com.xliic.openapi.report;

import java.net.URI;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.RangeMarker;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.util.TextRange;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.bundler.BundleLocation;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;

public class Issue {

	private final String id;
	private final String description;
	private final float score;
	private final String displayScore;
	private final int criticality;
	private final Severity severity;
	private final Project project;

	private String auditFileName;
	private String pointer;
	private String fileName;
	private URI uri;
	private Range range;
	private RangeMarker rangeMarker;

	public Issue(Project project, String auditFileName, String id, String description, String bundlePointer,
			float score, int criticality, boolean platform) {

		this.id = id;
		this.description = description;
		this.score = score;
		displayScore = transformScore(score);
		this.criticality = criticality;
		severity = Severity.getSeverity(criticality);
		this.auditFileName = auditFileName;
		this.project = project;
		fileName = null;
		uri = null;
		pointer = bundlePointer;
		
        BundleLocation errorLocation;
        if (platform) {
            errorLocation = new BundleLocation(auditFileName, bundlePointer);
        }
        else {
            BundleService bundleService = BundleService.getInstance(project);
            BundleResult bundleResult = bundleService.getBundle(auditFileName);
            errorLocation = bundleResult.getBundleLocation(bundlePointer);
        }
        disposeRangeMarker();

        if (errorLocation.isValid()) {
            VirtualFile file = errorLocation.getFile();
            fileName = file.getPath();
            uri = errorLocation.getUri();
            pointer = errorLocation.getPointer();
            Document document = FileDocumentManager.getInstance().getDocument(file);
            if (document != null) {
                ASTService astService = ASTService.getInstance(project);
                Node root = astService.getRootNode(file);
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

    public Map<String, Object> getProperties() {
        Map<String, Object> result = new HashMap<>();
        result.put("id", getId());
        result.put("description", getDescription());
        result.put("pointer", getPointer());
        result.put("score", getScore());
        result.put("displayScore", getDisplayScore());
        result.put("criticality", getCriticality());
        result.put("documentUri", OpenApiUtils.getURI(getFileName()));
        result.put("lineNo", range.getLine() + 1);
        return result;
    }
    
	public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {
		if (Objects.equals(auditFileName, oldFileName)) {
			auditFileName = newFile.getPath();
		}
		if (Objects.equals(fileName, oldFileName)) {
			fileName = newFile.getPath();
		}
	}

	public void updateRangeMarkers(Document document, Node root) {
		if ((rangeMarker != null) && !rangeMarker.isValid()) {
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

	public Project getProject() {
		return project;
	}

	public static String transformScore(float score) {
		int rounded = Math.abs(Math.round(score));
		if (score == 0) {
			return "0";
		} else if (rounded >= 1) {
			return String.valueOf(rounded);
		}
		return "less than 1";
	}

	public float getScore() {
		return score;
	}

	@Override
	public String toString() {
		return super.toString();
	}

	public String getId() {
		return id;
	}

	public String getFileName() {
		return fileName;
	}

	public Severity getSeverity() {
		return severity;
	}

	public String getDescription() {
		return description;
	}

	public String getPointer() {
		return pointer;
	}

	public String getDisplayScore() {
		return displayScore;
	}

	public int getCriticality() {
		return criticality;
	}

	public Range getRange() {
		return range;
	}

	public RangeMarker getRangeMarker() {
		return rangeMarker;
	}

	public String getAuditFileName() {
		return auditFileName;
	}

	public TextRange getTextRange() {
		return new TextRange(rangeMarker.getStartOffset(), rangeMarker.getEndOffset());
	}

	public String getLabel() {
		return getDescription() + " " + ("0".equals(displayScore) ? "" : "(score impact " + displayScore + ")");
	}

	public String getHighlightInfoLabel() {
		return getDescription() + " in " + getAuditOfString()
				+ ("0".equals(displayScore) ? "" : " (score impact " + displayScore + ")");
	}

	public String getLabelLocation() {
		return " " + getAuditOfString() + " " + rangeToString(range);
	}
    
    public URI getUri() {
        return uri;
    }

	private String rangeToString(Range range) {
		return "[" + (range.getLine() + 1) + ", " + (range.getColumn() + 1) + "]";
	}

	private void disposeRangeMarker() {
		if (rangeMarker != null) {
			rangeMarker.dispose();
			rangeMarker = null;
		}
	}

	private String getAuditOfString() {
		return "audit of " + Paths.get(auditFileName).getFileName().toString();
	}
}
