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
import org.eclipse.core.resources.IMarker;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.jetbrains.annotations.NotNull;
import org.json.JSONArray;
import org.json.JSONObject;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.bundler.OpenAPIBundler;
import com.xliic.openapi.parser.pointer.Location;

public class Audit {

	private Summary summary;
	private List<Issue> issues;
	private final Map<String, List<Issue>> fileNameToIssuesMap = new HashMap<>();
	private String auditFileName;

	public Audit(@NotNull OpenAPIBundler bundler, @NotNull JSONObject response) {
		auditFileName = bundler.getAuditFileName();
		read(bundler, response);
		for (Issue issue : issues) {
			if (issue.getFileName() != null) {
				if (!fileNameToIssuesMap.containsKey(issue.getFileName())) {
					fileNameToIssuesMap.put(issue.getFileName(), new LinkedList<>());
				}
				fileNameToIssuesMap.get(issue.getFileName()).add(issue);
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
			List<IMarker> markers = getFileIssueMarkers(newFile);
			for (Issue issue : fileNameToIssuesMap.get(oldFileName)) {
				issue.handleFileNameChanged(newFile, oldFile, markers);
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

	public void clean() {
		for (Issue issue : issues) {
			issue.clean();
		}
	}

	private void read(OpenAPIBundler bundler, JSONObject response) {

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
			issues.addAll(transformIssues(bundler, data, pointers, 5));
			Number value = (Number) getValue(data, "score");
			dataGrade = new Grade((value == null) ? 0 : Math.round(value.floatValue()), 70);
		}

		if (report.containsKey("security")) {
			Map<String, Object> security = getMap(report, "security");
			issues.addAll(transformIssues(bundler, security, pointers, 5));
			Number value = (Number) getValue(security, "score");
			securityGrade = new Grade((value == null) ? 0 : Math.round(value.floatValue()), 30);
		}

		if (report.containsKey("warnings")) {
			Map<String, Object> warnings = getMap(report, "warnings");
			issues.addAll(transformIssues(bundler, warnings, pointers, 1));
		}

		if (report.containsKey("semanticErrors")) {
			Map<String, Object> semanticErrors = getMap(report, "semanticErrors");
			issues.addAll(transformIssues(bundler, semanticErrors, pointers, 5));
			hasGradeErrors = true;
		}

		if (report.containsKey("validationErrors")) {
			Map<String, Object> validationErrors = getMap(report, "validationErrors");
			issues.addAll(transformIssues(bundler, validationErrors, pointers, 5));
			hasGradeErrors = true;
		}

		issues.sort(new IssueComparator());
		summary = new Summary(hasGradeErrors, false, dataGrade, securityGrade);
		createMarkers();
	}

	private List<Issue> transformIssues(OpenAPIBundler bundler, Map<String, Object> context, List<String> pointers,
			int defaultCriticality) {

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

				result.add(new Issue(bundler, id, description, pointer, score, criticality));
			}
		}

		return result;
	}

	public void createMarkers() {
		for (int i = 0; i < issues.size(); i++) {
			issues.get(i).createMarker(i);
		}
	}

	private List<IMarker> getFileIssueMarkers(IFile file) {
		List<IMarker> result = new LinkedList<>();
		try {
			for (IMarker marker : file.findMarkers(IMarker.PROBLEM, false, IResource.DEPTH_ZERO)) {
				if (Issue.isIssueMarker(marker)) {
					result.add(marker);
				}
			}
		} catch (CoreException e) {
		}
		return result;
	}
}
