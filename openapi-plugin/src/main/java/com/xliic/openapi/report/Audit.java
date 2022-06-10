package com.xliic.openapi.report;

import com.xliic.core.editor.Document;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

import java.util.*;

import static org.apache.commons.lang.StringUtils.isEmpty;

public class Audit {

    private Summary summary;
    private List<Issue> issues;
    private final Map<String, List<Issue>> fileNameToIssuesMap;
    private String auditFileName;
    private final Project project;

    public Audit(@NotNull Project project, @NotNull String auditFileName, @NotNull Node response) {

        this.project = project;
        this.auditFileName = auditFileName;
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

    public void removeIssues(@NotNull List<Issue> issuesToRemove) {
        issues.removeAll(issuesToRemove);
        for (Issue issue : issuesToRemove) {
            fileNameToIssuesMap.get(issue.getFileName()).remove(issue);
        }
    }

    public List<Issue> removeIssuesForFile(@NotNull String fileName) {
        issues.removeAll(fileNameToIssuesMap.get(fileName));
        return fileNameToIssuesMap.remove(fileName);
    }

    public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {
        if (Objects.equals(auditFileName, oldFileName)) {
            auditFileName = newFile.getPath();
        }
        if (fileNameToIssuesMap.containsKey(oldFileName)) {
            for (Issue issue : fileNameToIssuesMap.get(oldFileName)) {
                issue.handleFileNameChanged(newFile, oldFileName);
            }
            fileNameToIssuesMap.put(newFile.getPath(), fileNameToIssuesMap.remove(oldFileName));
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

    public void updateRangeMarkers(String fileName, Document document, Node root) {
        if (hasAuditParticipantFileName(fileName)) {
            for (Issue issue : getIssuesForAuditParticipantFileName(fileName)) {
                issue.updateRangeMarkers(document, root);
            }
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

    private void read(Node response) {

        Grade dataGrade = new Grade(0, 70);
        Grade securityGrade = new Grade(0, 30);
        issues = new LinkedList<>();

        Node report = response.getChild("report");
        if (report == null) {
            summary = new Summary(false, true, dataGrade, securityGrade);
            return;
        }

        Node child = report.getChild("openapiState");
        if (child != null) {
            if ("fileInvalid".equals(child.getValue())) {
                summary = new Summary(false, true, dataGrade, securityGrade);
                return;
            }
        }

        List<String> pointers = new LinkedList<>();
        for (Node o : report.getChild("index").getChildren()) {
            pointers.add(o.getValue());
        }

        child = report.getChild("data");
        if (child != null) {
            issues.addAll(transformIssues(child, pointers, 5));
            child = child.getChild("score");
            Number value = (child == null) ? 0 : Float.parseFloat(child.getValue());
            dataGrade = new Grade(Math.round(value.floatValue()), 70);
        }

        child = report.getChild("security");
        if (child != null) {
            issues.addAll(transformIssues(child, pointers, 5));
            child = child.getChild("score");
            Number value = (child == null) ? 0 : Float.parseFloat(child.getValue());
            securityGrade = new Grade(Math.round(value.floatValue()), 30);
        }

        child = report.getChild("warnings");
        if (child != null) {
            issues.addAll(transformIssues(child, pointers, 1));
        }

        boolean hasGradeErrors = false;
        child = report.getChild("semanticErrors");
        if (child != null) {
            issues.addAll(transformIssues(child, pointers, 5));
            hasGradeErrors = true;
        }

        child = report.getChild("validationErrors");
        if (child != null) {
            issues.addAll(transformIssues(child, pointers, 5));
            hasGradeErrors = true;
        }

        issues.sort(new IssueComparator());
        summary = new Summary(hasGradeErrors, false, dataGrade, securityGrade);
    }

    private List<Issue> transformIssues(Node context, List<String> pointers, int defaultCriticality) {

        List<Issue> result = new LinkedList<>();
        Node issues = context.getChild("issues");
        if (issues != null) {
            for (Node child : issues.getChildren()) {
                String id = child.getKey();
                for (Node subIssueItem : child.getChild("issues").getChildren()) {

                    String pointer = pointers.get(Integer.parseInt(subIssueItem.getChildValue("pointer")));

                    String description = subIssueItem.getChildValue("specificDescription");
                    if (isEmpty(description)) {
                        description = child.getChildValue("description");
                    }

                    String scoreStr = subIssueItem.getChildValue("score");
                    float score = isEmpty(scoreStr) ? 0 : Math.abs(Float.parseFloat(scoreStr));

                    String criticalityStr = subIssueItem.getChildValue("criticality");
                    int criticality = isEmpty(criticalityStr) ? defaultCriticality : Integer.parseInt(criticalityStr);

                    result.add(new Issue(project, auditFileName, id, description, pointer, score, criticality));
                }
            }
        }
        return result;
    }
}
