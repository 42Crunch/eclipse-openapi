package com.xliic.openapi.report.types;

import java.util.Base64;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.Utils;

public class AuditBuilder {

    private static final List<String> KEYS =  List.of("data", "security", "warnings", "semanticErrors", "validationErrors");
    private static final Comparator<Issue> ISSUE_COMPARATOR = (a, b) -> {
        if (a.getScore() == b.getScore()) {
            return Integer.compare(b.getCriticality(), a.getCriticality());
        }
        return Float.compare(b.getScore(), a.getScore());
    };

    @NotNull
    private final Project project;
    @Nullable
    private String fileName;
    private final boolean downloaded;
    @Nullable
    private AuditCompliance compliance;
    @Nullable
    private AuditToDoReport todoReport;
    @NotNull
    private AuditDisplayOptions displayOptions = AuditDisplayOptions.DEFAULT_OPTIONS;
    @Nullable
    private IssueBuilder issueBuilder;

    public AuditBuilder(@NotNull Project project, boolean downloaded) {
        this.project = project;
        this.downloaded = downloaded;
    }

    public AuditBuilder setFileName(@NotNull String fileName) {
        this.fileName = fileName;
        issueBuilder = new IssueBuilder(project, fileName, downloaded);
        return this;
    }

    public AuditBuilder setCompliance(@Nullable AuditCompliance compliance) {
        this.compliance = compliance;
        return this;
    }

    public AuditBuilder setToDoReport(@Nullable AuditToDoReport todoReport) {
        this.todoReport = todoReport;
        return this;
    }

    public AuditBuilder setAuditDisplayOptions(@NotNull AuditDisplayOptions options) {
        this.displayOptions = options;
        return this;
    }

    public Audit build(@NotNull Node reportNode) {
        return build(reportNode, false);
    }

    public Audit build(@NotNull Node reportNode, boolean skipToDo) {
        Audit report = new Audit(Objects.requireNonNull(fileName), downloaded);
        report.setSummary(Summary.DEFAULT_SUMMARY);
        if (isStateInvalid(reportNode)) {
            return report;
        }
        List<String> pointers = getPointers(reportNode);
        if (pointers.isEmpty()) {
            return report;
        }
        Objects.requireNonNull(issueBuilder).setPointers(pointers);
        List<Issue> issues = new LinkedList<>();
        for (String key : KEYS) {
            Node node = reportNode.getChild(key);
            if (node != null) {
                issues.addAll(issueBuilder.build(node, "warnings".equals(key) ? 1 : 5));
            }
        }
        issues.sort(ISSUE_COMPARATOR);
        report.addIssues(issues);
        Grade dataGrade = getGrade(reportNode.getChild("data"), Grade.DEF_DATA_GRADE);
        Grade securityGrade = getGrade(reportNode.getChild("security"), Grade.DEF_SECURITY_GRADE);
        report.setSummary(new Summary(hasGradeErrors(reportNode), dataGrade, securityGrade));
        report.setValid(getBoolean("valid", reportNode));
        report.setMinimalReport(getBoolean("minimalReport", reportNode));
        report.setCompliance(compliance);
        if (!skipToDo && todoReport != null) {
            String text = new String(Base64.getDecoder().decode((String) todoReport.getData().get("data")));
            Node todoReportNode = Utils.getJsonAST(text);
            if (todoReportNode != null) {
                report.setTodoReport(build(todoReportNode, true));
            }
        }
        report.setDisplayOptions(displayOptions);
        clear();
        return report;
    }

    private void clear() {
        fileName = null;
        compliance = null;
        todoReport = null;
        displayOptions = AuditDisplayOptions.DEFAULT_OPTIONS;
        issueBuilder = null;
    }

    private static boolean getBoolean(String key, Node report) {
        Object value = report.getChildTypedValue(key);
        return value != null && (boolean) value;
    }

    private static List<String> getPointers(Node report) {
        List<String> pointers = new LinkedList<>();
        Node indexNode = report.getChild("index");
        if (indexNode == null) {
            return pointers;
        }
        for (Node node : indexNode.getChildren()) {
            pointers.add(node.getValue());
        }
        return pointers;
    }

    private static boolean isStateInvalid(Node report) {
        Node stateNode = report.getChild("openapiState");
        return stateNode != null && "fileInvalid".equals(stateNode.getValue());
    }

    private static Grade getGrade(Node node, Grade defaultGrade) {
        if (node != null) {
            Node scoreNode = node.getChild("score");
            Number value = (scoreNode == null) ? 0 : Float.parseFloat(scoreNode.getValue());
            return new Grade(Math.round(value.floatValue()), defaultGrade.getMax());
        }
        return defaultGrade;
    }

    private static boolean hasGradeErrors(Node report) {
        return report.getChild("semanticErrors") != null || report.getChild("validationErrors") != null;
    }
}
