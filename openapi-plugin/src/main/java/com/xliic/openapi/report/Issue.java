package com.xliic.openapi.report;

import static com.xliic.openapi.OpenApiUtils.getFileLanguage;

import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.eclipse.core.resources.IFile;
import org.json.JSONArray;
import org.json.JSONObject;

import com.xliic.idea.TextRange;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.bundler.Mapping;
import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.report.html.HTMLArticlesProvider;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.utils.OpenAPIUtils;

public class Issue {

	private static final HTMLArticlesProvider articles = new HTMLArticlesProvider();

	private final String id;
	private final String description;
	private final float score;
	private final String displayScore;
	private final int criticality;
	private final Severity severity;

	private String auditFileName;
	private String pointer;
	private String fileName;
	private Location location;

	private IFile file;

	public Issue(Project project, String auditFileName, String id, String description, String pointer, float score,
			int criticality, Map<String, Map<String, Location>> fileToPointerToLocationMap) {

		this.id = id;
		this.description = description;
		this.score = score;
		this.displayScore = transformScore(score);
		this.criticality = criticality;
		this.severity = Severity.getSeverity(criticality);
		this.auditFileName = auditFileName;

		BundleService bundleService = BundleService.getInstance(project);
		BundleResult bundleResult = bundleService.getBundle(auditFileName);
		Mapping.Location errorLocation = bundleResult.getBundleErrorLocation(pointer);

		if (errorLocation != null) {
			this.fileName = errorLocation.file;
			this.pointer = errorLocation.pointer;
			this.location = fileToPointerToLocationMap.get(fileName).get(errorLocation.pointer);
			this.file = OpenAPIUtils.getIFile(fileName);

		} else {
			this.fileName = null;
			this.pointer = pointer;
			this.location = null;
		}
	}

	public void handleFileNameChanged(IFile newFile, IFile oldFile) {

		String oldFileName = new VirtualFile(oldFile).getPath();
		String newFileName = new VirtualFile(newFile).getPath();

		if (Objects.equals(auditFileName, oldFileName)) {
			auditFileName = newFileName;
		}
		if (Objects.equals(fileName, oldFileName)) {
			fileName = newFileName;
			file = newFile;
		}
	}

	public void updateLocation(Map<String, Location> pointerToLocationMap) {
		location = pointerToLocationMap.get(pointer);
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

	public IFile getFile() {
		return file;
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

	public Location getLocation() {
		return location;
	}

	public boolean isLocationFound() {
		return location != null;
	}

	public String getAuditFileName() {
		return auditFileName;
	}

	public String getLabel() {
		return getDescription() + " " + ("0".equals(displayScore) ? "" : "(score impact " + displayScore + ")");
	}

	public String getLabelLocation() {
		return " audit of " + Paths.get(auditFileName).getFileName().toString() + " [" + location.getVisualLine() + ", "
				+ location.getVisualColumn() + "]";
	}

	public String getHTMLIssue() {

		String criticality = getCriticalityName(getCriticality());
		String scoreImpact = "0".equals(getDisplayScore()) ? "" : "Score impact: " + getDisplayScore();
		String article = articleById(getId());

		int line = (int) getLocation().getVisualLine();
		String href = "target://" + fileName + "?startOffset=" + getLocation().getStartOffset() + "&length="
				+ getLocation().getLength();
		String shortFileName = Paths.get(fileName).getFileName().toString();
		String hrefForIssueID = "data-issue-id=" + id;

		return "<h1>" + getDescription() + "</h1>" + "<p>" + "  <small>" + "  Issue ID: <a class=\"issue-id\" href=\""
				+ hrefForIssueID + "\">" + id + "</a>" + "  </small>" + "</p>" + "<p>" + "  <small>"
				+ "<a class=\"focus-line\" href=\"" + href + "\">" + shortFileName + ":" + line + "</a>.Severity: "
				+ criticality + "." + scoreImpact + "  </small>" + "</p>" + article;
	}

	public TextRange getTextRange() {
		return new TextRange((int) location.getStartOffset(), (int) location.getEndOffset());
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

	private String getFallbackArticleText() {
		return "<p>Whoops! Looks like there has been an oversight and we are missing a page for this issue.</p>"
				+ "<p><a href=\"https://apisecurity.io/contact-us/\">Let us know</a> the title of the issue, "
				+ "and we make sure to add it to the encyclopedia.</p>";
	};

	@SuppressWarnings({ "unchecked" })
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

		if (articles.containsArticleId(id)) {

			Map<String, Object> article = articles.getArticle(id);
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

		return getFallbackArticleText();
	}
}
