package com.xliic.openapi.report.types;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.editor.Document;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;

public class Audit {

    @NotNull
    private String auditFileName;
    private final boolean downloaded;
    @Nullable
    private AuditCompliance compliance;
    @Nullable
    private Audit todoReport;
    @NotNull
    private AuditDisplayOptions displayOptions = AuditDisplayOptions.DEFAULT_OPTIONS;

    @NotNull
    private Summary summary = Summary.DEFAULT_SUMMARY;
    @NotNull
    private final List<Issue> issues = new LinkedList<>();
    @NotNull
    private final List<Issue> hiddenIssues = new LinkedList<>();
    @NotNull
    private final Map<String, List<Issue>> fileNameToIssuesMap = new HashMap<>();
    private boolean minimalReport;
    private boolean valid;

    @NotNull
    private final String tempFile = "report-" + UUID.randomUUID() + ".json";
    private volatile boolean tempFileSaved = false;
    
    public Audit(@NotNull String auditFileName, boolean downloaded) {
        this.auditFileName = auditFileName;
        this.downloaded = downloaded;
    }

    public void finalizeInReadAction() {
        hiddenIssues.clear();
        for (Issue issue : issues) {
            issue.finalizeInReadAction();
            if (issue.getRangeMarker() == null) {
                hiddenIssues.add(issue);
            }
        }
        if (!hiddenIssues.isEmpty()) {
            issues.removeAll(hiddenIssues);
        }
        fileNameToIssuesMap.clear();
        for (Issue issue : issues) {
            if (issue.getFileName() != null) {
                if (!fileNameToIssuesMap.containsKey(issue.getFileName())) {
                    fileNameToIssuesMap.put(issue.getFileName(), new LinkedList<>());
                }
                fileNameToIssuesMap.get(issue.getFileName()).add(issue);
            }
        }
        if (todoReport != null) {
            todoReport.setTodoReport(null);
            todoReport.finalizeInReadAction();
        }
    }

    void setCompliance(@Nullable AuditCompliance compliance) {
        this.compliance = compliance;
    }

    void setTodoReport(@Nullable Audit todoReport) {
        this.todoReport = todoReport;
    }

    void setSummary(@NotNull Summary summary) {
        this.summary = summary;
    }

    void addIssues(@NotNull List<Issue> issues) {
        this.issues.addAll(issues);
    }

    void setMinimalReport(boolean minimalReport) {
        this.minimalReport = minimalReport;
    }

    void setValid(boolean valid) {
        this.valid = valid;
    }

    void setDisplayOptions(@NotNull AuditDisplayOptions displayOptions) {
        this.displayOptions = displayOptions;
    }

    public @NotNull AuditDisplayOptions getDisplayOptions() {
        return displayOptions;
    }

    public @NotNull Map<String, List<Issue>> getFileNameToIssuesMap() {
        return fileNameToIssuesMap;
    }

    public void removeIssues(@NotNull List<Issue> issuesToRemove) {
        issues.removeAll(issuesToRemove);
        for (Issue issue : issuesToRemove) {
            fileNameToIssuesMap.get(issue.getFileName()).remove(issue);
        }
    }

    @Nullable
    public List<Issue> removeIssuesForFile(@NotNull String fileName) {
        issues.removeAll(fileNameToIssuesMap.get(fileName));
        return fileNameToIssuesMap.remove(fileName);
    }

    public boolean isMinimalReport() {
        return minimalReport;
    }

    public boolean isValid() {
        return valid;
    }

    public boolean isDownloaded() {
        return downloaded;
    }

    public @Nullable AuditCompliance getCompliance() {
        return compliance;
    }

    public @Nullable Audit getTodoReport() {
        return todoReport;
    }

    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
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

    public @NotNull String getAuditFileName() {
        return auditFileName;
    }

    public @NotNull Set<String> getParticipantFileNames() {
        return fileNameToIssuesMap.keySet();
    }

    public boolean hasAuditParticipantFileName(@NotNull String fileName) {
        return fileNameToIssuesMap.containsKey(fileName);
    }

    @NotNull
    public List<Issue> getIssuesForAuditParticipantFileName(@NotNull String fileName) {
        if (fileNameToIssuesMap.containsKey(fileName)) {
            return fileNameToIssuesMap.get(fileName);
        }
        return new LinkedList<>();
    }

    public void updateRangeMarkers(@NotNull String fileName, @NotNull Document document, @NotNull Node root) {
        if (hasAuditParticipantFileName(fileName)) {
            for (Issue issue : getIssuesForAuditParticipantFileName(fileName)) {
                issue.updateRangeMarkers(document, root);
            }
        }
    }

    public @NotNull Summary getSummary() {
        return summary;
    }

    public @NotNull List<Issue> getIssues() {
        return issues;
    }

    public @NotNull List<Issue> getHiddenIssues() {
        return hiddenIssues;
    }
    
    public @NotNull String getTempFile() {
        return tempFile;
    }

    public boolean isTempFileSaved() {
        return tempFileSaved;
    }

    public void setTempFileSaved(boolean tempFileSaved) {
        this.tempFileSaved = tempFileSaved;
    }

    @NotNull
    public List<Integer> getIssueIds(@NotNull VirtualFile file, @NotNull List<Issue> issues) {
        List<Integer> ids = new LinkedList<>();
        List<Issue> fileIssues = fileNameToIssuesMap.get(file.getPath());
        for (Issue issue : issues) {
            int index = fileIssues.indexOf(issue);
            if (index >= 0) {
                ids.add(index);
            }
        }
        return ids;
    }
}
