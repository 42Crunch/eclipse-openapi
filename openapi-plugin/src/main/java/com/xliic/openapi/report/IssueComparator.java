package com.xliic.openapi.report;

import java.util.Comparator;

import com.xliic.openapi.report.types.Issue;

public class IssueComparator implements Comparator<Issue> {

    @Override
    public int compare(Issue a, Issue b) {
        if (a.getCriticality() == b.getCriticality()) {
            return Float.compare(b.getScore(), a.getScore());
        }
        return Integer.compare(b.getCriticality(), a.getCriticality());
    }
}
