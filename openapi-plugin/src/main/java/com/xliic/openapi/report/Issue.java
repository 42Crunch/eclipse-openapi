package com.xliic.openapi.report;

import static com.xliic.openapi.OpenApiUtils.getFileLanguage;

import java.io.File;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.json.JSONArray;
import org.json.JSONObject;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.RangeMarker;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.util.TextRange;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.bundler.Mapping;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.HTMLService;

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
	private Range range;
	private RangeMarker rangeMarker;

	public Issue(Project project, String auditFileName, String id, String description, String bundlePointer,
			float score, int criticality) {

		this.id = id;
		this.description = description;
		this.score = score;
		displayScore = transformScore(score);
		this.criticality = criticality;
		severity = Severity.getSeverity(criticality);
		this.auditFileName = auditFileName;
		this.project = project;
		fileName = null;
		pointer = bundlePointer;

		BundleService bundleService = BundleService.getInstance(project);
		BundleResult bundleResult = bundleService.getBundle(auditFileName);
		Mapping.Location errorLocation = bundleResult.getBundlePointerLocation(bundlePointer);
		disposeRangeMarker();

		if (errorLocation != null) {
			fileName = errorLocation.file;
			pointer = errorLocation.pointer;
			VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
			if (file != null) {
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

	private String transformScore(float score) {
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

    public String getHTMLIssue() {

        String lineNo = String.valueOf(range.getLine() + 1);
        String href = "file://" + fileName + "?pointer=" + pointer;
        String scoreImpact = "0".equals(getDisplayScore()) ? "" : "Score impact: " + getDisplayScore();

        HTMLService htmlService = HTMLService.getInstance();
        String issueHTML = htmlService.ISSUE;
        issueHTML = issueHTML.replace("${issue.description}", getDescription());
        issueHTML = issueHTML.replace("${issue.id}", id);
        issueHTML = issueHTML.replace("${issue.id}", id);
        issueHTML = issueHTML.replace("${copyRef}", "data-issue-id=" + id);
        issueHTML = issueHTML.replace("${issue.lineNo}", lineNo);
        issueHTML = issueHTML.replace("${issue.pointer}", pointer);
        issueHTML = issueHTML.replace("${base64Uri}", "");
        issueHTML = issueHTML.replace("href=\"#\"", "href=\"" + href + "\"");
        issueHTML = issueHTML.replace("${filename}", Paths.get(fileName).getFileName().toString());
        issueHTML = issueHTML.replace("${lineNo}", lineNo);
        issueHTML = issueHTML.replace("${criticality}", getCriticalityName(getCriticality()));
        issueHTML = issueHTML.replace("${scoreImpact}", scoreImpact);
        issueHTML = issueHTML.replace("${article}", articleById(getId()));
        return issueHTML;
    }

	private String rangeToString(Range range) {
		return "[" + (range.getLine() + 1) + ", " + (range.getColumn() + 1) + "]";
	}

	private String getCriticalityName(int criticality) {

		switch (criticality) {
		case 5:
			return "Critical";
		case 4:
			return "High";
		case 3:
			return "Medium";
		case 2:
			return "Low";
		default:
			return "Info";
		}
	}

	@SuppressWarnings("unchecked")
	private String partToText(Map<String, Object> part) {

		if (part == null || !part.containsKey("sections")) {
			return "";
		}

		StringBuilder text = new StringBuilder();
		List<Object> sections = ((JSONArray) part.get("sections")).toList();

		for (Object section : sections) {
			Map<String, Object> s = (Map<String, Object>) section;
			if (s.containsKey("text")) {
				text.append((String) s.get("text"));
			} else if (s.containsKey("code")) {
				text.append("<pre><code>");
				text.append(((Map<String, String>) s.get("code")).get(getFileLanguage(fileName)));
				text.append("</code></pre>");
			}
		}
		return text.toString();
	}

    private String articleById(String id) {

        HTMLService htmlService = HTMLService.getInstance();
        if (htmlService.containsArticleId(id)) {

            Map<String, Object> article = htmlService.getArticle(id);
            Map<String, Object> description = ((JSONObject) article.get("description")).toJsonMap();

            String text = (String) description.get("text");
            if (article.containsKey("example")) {
                text += partToText(((JSONObject) article.get("example")).toJsonMap());
            }
            if (article.containsKey("exploit")) {
                text += partToText(((JSONObject) article.get("exploit")).toJsonMap());
            }
            if (article.containsKey("remediation")) {
                text += partToText(((JSONObject) article.get("remediation")).toJsonMap());
            }
            return text;
        }
        return htmlService.FALLBACK_ARTICLE;
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
