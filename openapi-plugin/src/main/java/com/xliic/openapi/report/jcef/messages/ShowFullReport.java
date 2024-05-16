package com.xliic.openapi.report.jcef.messages;

import java.nio.file.Paths;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FilenameUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.util.ImmutableMap;
import com.xliic.openapi.refs.external.ExtRef;
import com.xliic.openapi.refs.external.ExtRefService;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.report.types.AuditCompliance;
import com.xliic.openapi.report.types.Grade;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.report.types.Summary;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowFullReport extends WebAppConsume {

    @NotNull
    private  final Project project;
    @NotNull
    private final Audit report;

    public ShowFullReport(@NotNull Project project, @NotNull Audit report) {
        super("showFullReport");
        this.project = project;
        this.report = report;
    }

    @Override
    protected @Nullable Map<String, Object> getPayload() {
        return getAuditPayload(project, report);
    }

    @NotNull
    public static Map<String, Object> getAuditPayload(@NotNull Project project, @NotNull Audit report) {
        Map<String, Object> result = new HashMap<>();
        result.put("filename", FilenameUtils.getName(report.getAuditFileName()));
        result.put("summary", getSummaryProperties(report));
        result.put("files", getFilesProperties(project, report));
        result.put("issues", getIssuesProperties(project, report));
        result.put("minimalReport", report.isMinimalReport());
        result.put("valid", report.isValid());
        AuditCompliance compliance = report.getCompliance();
        if (compliance != null) {
            result.put("compliance", compliance.getData());
        }
        Audit todoReport = report.getTodoReport();
        if (todoReport != null) {
            result.put("todo", getIssuesProperties(project, todoReport));
        }
        return result;
    }

    private static Map<String, Object> getSummaryProperties(Audit report) {
        Map<String, Object> result = new HashMap<>();
        Summary summary = report.getSummary();
        Grade data = summary.getData();
        result.put("datavalidation", ImmutableMap.of("value", data.getValue(), "max", data.getMax()));
        Grade security = summary.getSecurity();
        result.put("security", ImmutableMap.of("value", security.getValue(), "max", security.getMax()));
        //noinspection SpellCheckingInspection
        result.put("oasconformance", ImmutableMap.of("value", 0, "max", 0));
        result.put("all", summary.getAll());
        result.put("errors", summary.isErrors());
        result.put("invalid", summary.isInvalid());
        result.put("documentUri", Utils.getURI(report.getAuditFileName()));
        return result;
    }

    private static Map<String, Map<String, Object>> getFilesProperties(Project project, Audit report) {
        String from = Utils.getURI(report.getAuditFileName());
        Map<String, Map<String, Object>> result = new HashMap<>();
        ExtRefService extRefService = ExtRefService.getInstance(project);
        for (String fileName : report.getFileNameToIssuesMap().keySet()) {
            String to;
            Map<String, Object> props = new HashMap<>();
            ExtRef extRef = extRefService.getExtRefByFile(fileName);
            if (extRef == null) {
                String relative;
                to = Utils.getURI(fileName);
                if (from.equals(to)) {
                    relative = Paths.get(report.getAuditFileName()).getFileName().toString();
                } else {
                    relative = Utils.getRelativePathFromTo(from, to);
                }
                props.put("relative", relative);
            } else {
                to = extRef.getInternalURI();
                props.put("relative", extRef.getUrl().toString());
            }
            result.put(to, props);
        }
        return result;
    }

    private static Map<String, List<Map<String, Object>>> getIssuesProperties(Project project, Audit report) {
        Map<String, List<Map<String, Object>>> result = new HashMap<>();
        ExtRefService extRefService = ExtRefService.getInstance(project);
        Map<String, List<Issue>> issuesMap = report.getFileNameToIssuesMap();
        for (String fileName : issuesMap.keySet()) {
            List<Map<String, Object>> issues = new LinkedList<>();
            for (Issue issue : issuesMap.get(fileName)) {
                issues.add(getProperties(issue));
            }
            ExtRef extRef = extRefService.getExtRefByFile(fileName);
            if (extRef == null) {
                result.put(Utils.getURI(fileName), issues);
            } else {
                result.put(extRef.getInternalURI(), issues);
            }
        }
        return result;
    }

    private static Map<String, Object> getProperties(Issue issue) {
        Map<String, Object> result = new HashMap<>();
        result.put("id", issue.getId());
        result.put("description", issue.getDescription());
        result.put("pointer", issue.getPointer());
        result.put("score", issue.getScore());
        result.put("displayScore", issue.getDisplayScore());
        result.put("criticality", issue.getCriticality());
        if (issue.getUri() == null) {
            result.put("documentUri", Utils.getURI(issue.getFileName()));
        } else {
            result.put("documentUri", ExtRef.getInternalURI(issue.getUri()));
        }
        result.put("lineNo", issue.getRange().getLine());
        return result;
    }
}
