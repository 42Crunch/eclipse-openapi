package com.xliic.openapi.report;

import static com.xliic.openapi.OpenApiUtils.getFileLanguage;

import java.net.URI;
import java.nio.file.Paths;
import java.util.Objects;

import org.apache.commons.lang.StringUtils;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.RangeMarker;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.util.TextRange;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleLocation;
import com.xliic.openapi.bundler.BundleResult;
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
	private URI uri;
	private Range range;
	private RangeMarker rangeMarker;
	@SuppressWarnings("unused")
	private boolean platform;

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
		this.platform = platform;
		
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
        issueHTML = issueHTML.replace("${filename}", getHTMLFileName());
        issueHTML = issueHTML.replace("${lineNo}", lineNo);
        issueHTML = issueHTML.replace("${criticality}", getCriticalityName(getCriticality()));
        issueHTML = issueHTML.replace("${scoreImpact}", scoreImpact);
        issueHTML = issueHTML.replace("${article}", articleById(getId()));
        return issueHTML;
    }
    
    public URI getUri() {
        return uri;
    }

    private String getHTMLFileName() {
        return (uri == null) ? Paths.get(fileName).getFileName().toString() : uri.toString();
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

    private String partToText(Node part) {
        if ((part == null) || (part.getChild("sections") == null)) {
            return StringUtils.EMPTY;
        }
        StringBuilder text = new StringBuilder();
        for (Node section : part.getChild("sections").getChildren()) {
            String value = section.getChildValue("text");
            if (value != null) {
                text.append(value);
            }
            Node code = section.getChild("code");
            if (code != null) {
                text.append("<pre><code>");
                text.append(code.getChildValue(getFileLanguage(fileName)));
                text.append("</code></pre>");
            }
        }
        return text.toString();
    }

    private String articleById(String id) {
        HTMLService htmlService = HTMLService.getInstance();
        Node article = htmlService.getArticle(id);
        if (article != null) {
            Node description = article.getChild("description");
            String text = description.getChildValue("text");
            text += partToText(article.getChild("example"));
            text += partToText(article.getChild("exploit"));
            text += partToText(article.getChild("remediation"));
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
