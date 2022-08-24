package com.xliic.openapi.services.api;

import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.actions.FixBulkAction;
import com.xliic.openapi.quickfix.actions.FixSingleAction;
import com.xliic.openapi.quickfix.sources.FixSource;
import com.xliic.openapi.report.Issue;

public interface IQuickFixService {

    public FixSource getFixSourceInstance(String sourceName);

    public void load();

    public List<FixSingleAction> getSingleFixActions(PsiFile psiFile, Issue issue);

    public Map<Issue, List<FixBulkAction>> getBulkFixActions(PsiFile psiFile, List<Issue> issues);

    public void fix(@NotNull Project project, @NotNull List<Issue> issues);

    public List<QuickFix> getAllQuickFixes();

    public void handleAuditReportRemoved(@NotNull String rootFileName);
}
