package com.xliic.openapi.report;

import static com.xliic.openapi.utils.OpenAPIUtils.getMap;
import static com.xliic.openapi.utils.OpenAPIUtils.getValue;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.eclipse.core.resources.IFile;
import org.jetbrains.annotations.NotNull;
import org.json.JSONArray;
import org.json.JSONObject;

import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.ParserService;

public class Audit {

	private Summary summary;
	private List<Issue> issues;
	private final Map<String, List<Issue>> fileNameToIssuesMap;
	private String auditFileName;
	private final Project project;
	private Map<String, Map<String, Location>> fileToPointerToLocationMap;

	public Audit(@NotNull Project project, @NotNull String auditFileName, @NotNull JSONObject response) {

		this.project = project;
		this.auditFileName = auditFileName;

		initFileToPointerToLocationMap();
		read(response);

		fileNameToIssuesMap = new HashMap<>();
		for (Issue issue : issues) {
			if (issue.getFileName() != null) {
				if (!fileNameToIssuesMap.containsKey(issue.getFileName())) {
					fileNameToIssuesMap.put(issue.getFileName(), new LinkedList<>());
				}
				fileNameToIssuesMap.get(issue.getFileName()).add(issue);
			}
		}
	}

	private void initFileToPointerToLocationMap() {
		fileToPointerToLocationMap = new HashMap<>();
		BundleService bundleService = BundleService.getInstance(project);
		Set<String> files = bundleService.getBundle(auditFileName).getBundledFiles();
		ParserService parserService = ParserService.getInstance(project);
		for (String bundleFile : files) {
			if (!fileToPointerToLocationMap.containsKey(bundleFile)) {
				String text = OpenApiUtils.getTextFromFile(bundleFile);
				OpenApiFileType fileType = OpenApiUtils.getFileType(bundleFile);
				fileToPointerToLocationMap.put(bundleFile, parserService.parsePointerToLocationMap(text, fileType));
			}
		}
	}

	public void handleFileNameChanged(IFile newFile, IFile oldFile) {

		String oldFileName = new VirtualFile(oldFile).getPath();
		String newFileName = new VirtualFile(newFile).getPath();

		if (Objects.equals(auditFileName, oldFileName)) {
			auditFileName = newFileName;
		}
		if (fileNameToIssuesMap.containsKey(oldFileName)) {
			for (Issue issue : fileNameToIssuesMap.get(oldFileName)) {
				issue.handleFileNameChanged(newFile, oldFile);
			}
			fileNameToIssuesMap.put(newFileName, fileNameToIssuesMap.remove(oldFileName));
		}
	}

	public String getAuditFileName() {
		return auditFileName;
	}

	public Set<String> getParticipantFileNames() {
		return fileNameToIssuesMap.keySet();
	}

	public boolean hasAuditParticipantFileName(String fileName) {
		return fileNameToIssuesMap.containsKey(fileName);
	}

	public List<Issue> getIssuesForAuditParticipantFileName(String fileName) {
		if (fileNameToIssuesMap.containsKey(fileName)) {
			return fileNameToIssuesMap.get(fileName);
		}
		return new LinkedList<>();
	}

	public void updateLocation(String fileName, Map<String, Location> pointerToLocationMap) {
		if (!hasAuditParticipantFileName(fileName)) {
			return;
		}
		for (Issue issue : getIssuesForAuditParticipantFileName(fileName)) {
			issue.updateLocation(pointerToLocationMap);
		}
	}

	public Summary getSummary() {
		return summary;
	}

	public List<Issue> getIssues() {
		return issues;
	}

	public String getHTMLSummary() {
		return summary.getHTMLSummary();
	}

	private void read(JSONObject response) {

		Map<String, Object> report = getMap(response.toJsonMap(), "report");
		assert report != null;

		boolean invalid;
		boolean hasGradeErrors = false;
		issues = new LinkedList<>();

		Grade dataGrade = new Grade(0, 70);
		Grade securityGrade = new Grade(0, 30);

		if (report.containsKey("openapiState")) {
			invalid = "fileInvalid".equals(getValue(report, "openapiState"));
			if (invalid) {
				summary = new Summary(false, true, dataGrade, securityGrade);
				return;
			}
		}

		List<String> pointers = new LinkedList<>();
		for (Object o : (JSONArray) report.get("index")) {
			pointers.add((String) o);
		}

		if (report.containsKey("data")) {
			Map<String, Object> data = getMap(report, "data");
			issues.addAll(transformIssues(data, pointers, 5));
			Number value = (Number) getValue(data, "score");
			dataGrade = new Grade((value == null) ? 0 : Math.round(value.floatValue()), 70);
		}

		if (report.containsKey("security")) {
			Map<String, Object> security = getMap(report, "security");
			issues.addAll(transformIssues(security, pointers, 5));
			Number value = (Number) getValue(security, "score");
			securityGrade = new Grade((value == null) ? 0 : Math.round(value.floatValue()), 30);
		}

		if (report.containsKey("warnings")) {
			Map<String, Object> warnings = getMap(report, "warnings");
			issues.addAll(transformIssues(warnings, pointers, 1));
		}

		if (report.containsKey("semanticErrors")) {
			Map<String, Object> semanticErrors = getMap(report, "semanticErrors");
			issues.addAll(transformIssues(semanticErrors, pointers, 5));
			hasGradeErrors = true;
		}

		if (report.containsKey("validationErrors")) {
			Map<String, Object> validationErrors = getMap(report, "validationErrors");
			issues.addAll(transformIssues(validationErrors, pointers, 5));
			hasGradeErrors = true;
		}

		issues.sort(new IssueComparator());
		summary = new Summary(hasGradeErrors, false, dataGrade, securityGrade);
	}

	private List<Issue> transformIssues(Map<String, Object> context, List<String> pointers, int defaultCriticality) {

		List<Issue> result = new LinkedList<>();
		Map<String, Object> issues = getMap(context, "issues");

		for (Map.Entry<String, Object> entry : issues.entrySet()) {

			String id = entry.getKey();
			Map<String, Object> issue = ((JSONObject) entry.getValue()).toJsonMap();

			for (Object subIssueItem : (JSONArray) issue.get("issues")) {

				Map<String, Object> subIssue = ((JSONObject) subIssueItem).toJsonMap();
				String pointer = pointers.get((Integer) getValue(subIssue, "pointer"));

				String description = (String) (subIssue.containsKey("specificDescription")
						&& !"".equals(subIssue.get("specificDescription")) ? getValue(subIssue, "specificDescription")
								: getValue(issue, "description"));

				float score = subIssue.containsKey("score")
						? Math.abs(((Number) getValue(subIssue, "score")).floatValue())
						: 0;

				int criticality = issue.containsKey("criticality") ? (Integer) getValue(issue, "criticality")
						: defaultCriticality;

				result.add(new Issue(project, auditFileName, id, description, pointer, score, criticality,
						fileToPointerToLocationMap));
			}
		}
		return result;
	}
}
