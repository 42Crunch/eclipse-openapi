package com.xliic.openapi.report.types;

import static org.apache.commons.lang3.StringUtils.isEmpty;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.diagnostic.Logger;
import com.xliic.core.project.Project;
import com.xliic.openapi.parser.ast.node.Node;

public class IssueBuilder {

    public static final String ISSUES = "issues";
    public static final String WARNINGS = "warnings";
    private static final String POINTER = "pointer";
    private static final String SPECIFIC_DESCRIPTION = "specificDescription";
    private static final String DESCRIPTION = "description";
    private static final String SCORE = "score";
    private static final String CRITICALITY = "criticality";
    private static final String LOCATION = "location";
    private static final String OCCURRENCES = "occurrences";

    @NotNull
    private final Project project;
    @NotNull
    private final String fileName;
    @NotNull
    private final List<String> pointers = new LinkedList<>();
    private final boolean downloaded;

    public IssueBuilder(@NotNull Project project, @NotNull String fileName, boolean downloaded) {
        this.project = project;
        this.fileName = fileName;
        this.downloaded = downloaded;
    }

    public void setPointers(@NotNull List<String> pointers) {
        this.pointers.clear();
        this.pointers.addAll(pointers);
    }

    @NotNull
    public List<Issue> buildGraphQl(@NotNull Node node, @NotNull String sourceKey) {
        List<Issue> issues = new LinkedList<>();
        try {
            Node issuesNode = node.getChild(sourceKey);
            if (issuesNode == null) {
                // Old format report may not contain warnings section
                return issues;
            }
            for (Node issueNode : issuesNode.getChildren()) {
                String id = issueNode.getKey();
                String desc = Objects.requireNonNullElse(issueNode.getChildValue(DESCRIPTION), "");
                if (StringUtils.isEmpty(desc)) {
                    desc = "ID: " + id;
                }
                Node occurrences = issueNode.getChildRequireNonNull(OCCURRENCES);
                for (Node occNode : occurrences.getChildren()) {
                    String locOrIndex = Objects.requireNonNullElse(occNode.getChildValue(LOCATION), "");
                    String location = getLocation(locOrIndex);
                    if (location == null) {
                        // Must not happen if graphql report is valid
                        continue;
                    }
                    float score = getScore(occNode);
                    // GraphQL report doesn't contain criticality property
                    // Set default value to consider all issues as high severity ones
                    int criticality = WARNINGS.equals(sourceKey) ? 3 : 4;
                    issues.add(new Issue(project, fileName, id, desc, location, score, criticality, !downloaded));
                }
            }
        } catch (Exception e) {
            Logger.getInstance(IssueBuilder.class).info(e);
        }
        return issues;
    }

    @NotNull
    public List<Issue> build(@NotNull Node node, int defaultCriticality) {
        List<Issue> issues = new LinkedList<>();
        try {
            Node issuesNode = node.getChildRequireNonNull(ISSUES);
            for (Node issueNode : issuesNode.getChildren()) {
                String id = issueNode.getKey();
                Node subIssuesNode = issueNode.getChildRequireNonNull(ISSUES);
                for (Node subIssueNode : subIssuesNode.getChildren()) {
                    String pointer = getPointer(subIssueNode);
                    String desc = getDesc(subIssueNode, issueNode);
                    float score = getScore(subIssueNode);
                    int criticality = getCriticality(issueNode, defaultCriticality);
                    issues.add(new Issue(project, fileName, id, desc, pointer, score, criticality, !downloaded));
                }
            }
        } catch (Exception e) {
        	Logger.getInstance(IssueBuilder.class).error(e);
        }
        return issues;
    }

    private String getLocation(String locOrIndex) {
        try {
            // New format where location = index number
            int index = Integer.parseInt(locOrIndex);
            if (index < 0 || index >= pointers.size()) {
                return null;
            }
            return pointers.get(index);
        } catch (NumberFormatException e) {
            // Old format where location is a real string location
            return locOrIndex;
        }
    }

    private String getPointer(Node node) {
        String pointerIndex = node.getChildValueRequireNonNull(POINTER);
        return pointers.get(Integer.parseInt(pointerIndex));
    }

    private String getDesc(Node node, Node parent) {
        String desc = node.getChildValue(SPECIFIC_DESCRIPTION);
        if (isEmpty(desc)) {
            return parent.getChildValue(DESCRIPTION);
        }
        return desc;
    }

    private float getScore(Node node) {
        String score = node.getChildValue(SCORE);
        return isEmpty(score) ? 0 : Math.abs(Float.parseFloat(score));
    }

    private int getCriticality(Node node, int defaultCriticality) {
        String cri = node.getChildValue(CRITICALITY);
        return isEmpty(cri) ? defaultCriticality : Integer.parseInt(cri);
    }
}
