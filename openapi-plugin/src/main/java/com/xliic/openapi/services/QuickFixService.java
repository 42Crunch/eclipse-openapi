package com.xliic.openapi.services;

import static com.xliic.core.util.ResourceUtil.getResourceAsStream;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.actions.FixBulkAction;
import com.xliic.openapi.quickfix.actions.FixCombinedAction;
import com.xliic.openapi.quickfix.actions.FixSingleAction;
import com.xliic.openapi.quickfix.managers.FixManagerBulk;
import com.xliic.openapi.quickfix.managers.FixManagerCombined;
import com.xliic.openapi.quickfix.managers.FixManagerSingle;
import com.xliic.openapi.quickfix.sources.FixSource;
import com.xliic.openapi.quickfix.sources.FixSourceEmpty;
import com.xliic.openapi.quickfix.sources.FixSourceMostUsedByName;
import com.xliic.openapi.quickfix.sources.FixSourceSchemaRefByResponseCode;
import com.xliic.openapi.quickfix.sources.FixSourceSecuritySchemes;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.report.html.ui.HTMLReportPanel;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.report.tree.ui.ReportPanel;
import com.xliic.openapi.services.api.IQuickFixService;

public final class QuickFixService implements IQuickFixService, Disposable {

	private final Map<String, List<QuickFix>> quickfixes;
	private final Map<String, FixSource> fixSources = new HashMap<>();

	public QuickFixService() {
		quickfixes = new HashMap<>();
		fixSources.put("default", new FixSourceEmpty());
		fixSources.put("mostUsedByName", new FixSourceMostUsedByName());
		fixSources.put("securitySchemes", new FixSourceSecuritySchemes());
		fixSources.put("schemaRefByResponseCode", new FixSourceSchemaRefByResponseCode());
	}

	@Override
	public FixSource getFixSourceInstance(String sourceName) {
		String key = fixSources.containsKey(sourceName) ? sourceName : "default";
		return fixSources.get(key);
	}

	@Override
	public void load() {
		if (quickfixes.isEmpty()) {
			InputStream inputStream = getResourceAsStream(getClass(), "", "quickfixes.json");
			InputStreamReader reader = new InputStreamReader(inputStream, StandardCharsets.UTF_8);
			Stream<String> stream = new BufferedReader(reader).lines();
			StringBuilder builder = new StringBuilder();
			stream.forEach(builder::append);
			ParserJsonAST parser = new ParserJsonAST();
			process(parser.parse(builder.toString()));
		}
	}

	public static QuickFixService getInstance() {
		return (QuickFixService) PlatformUI.getWorkbench().getService(IQuickFixService.class);
	}

	@Override
	@NotNull
	public List<FixSingleAction> getSingleFixActions(PsiFile psiFile, Issue issue) {
		List<FixSingleAction> actions = new LinkedList<>();
		if (quickfixes.containsKey(issue.getId())) {
			for (QuickFix quickFix : quickfixes.get(issue.getId())) {
				actions.add(new FixSingleAction(new FixManagerSingle(psiFile, quickFix, issue)));
			}
		}
		return actions;
	}

	public FixCombinedAction getCombinedFixAction(PsiFile psiFile, List<Issue> issues) {
		Map<QuickFix, Issue> combinableFixToIssueMap = new HashMap<>();
		List<QuickFix> combinableFixes = new LinkedList<>();
		for (Issue issue : issues) {
			if (quickfixes.containsKey(issue.getId())) {
				List<QuickFix> fixes = quickfixes.get(issue.getId());
				fixes = fixes.stream().filter(QuickFix::isCombinable).collect(Collectors.toList());
				if (!fixes.isEmpty()) {
					// Get the first one, in future better to get one with the largest fixText
					QuickFix fix = fixes.get(0);
					combinableFixes.add(fix);
					combinableFixToIssueMap.put(fix, issue);
				}
			}
		}
		if (combinableFixes.size() > 1) {
			return new FixCombinedAction(new FixManagerCombined(psiFile, combinableFixes, combinableFixToIssueMap));
		}
		return null;
	}

	@Override
	@NotNull
	public Map<Issue, List<FixBulkAction>> getBulkFixActions(PsiFile psiFile, List<Issue> issues) {
		Map<Issue, List<FixBulkAction>> issueToActions = new HashMap<>();
		if (issues.size() > 1) {
			String id = issues.get(0).getId();
			if (quickfixes.containsKey(id)) {
				for (Issue issue : issues) {
					List<FixBulkAction> actions = new LinkedList<>();
					for (QuickFix quickFix : quickfixes.get(id)) {
						actions.add(new FixBulkAction(new FixManagerBulk(psiFile, quickFix, issue, issues)));
					}
					issueToActions.put(issue, actions);
				}
			}
		}
		return issueToActions;
	}

	@Override
	public void fix(@NotNull Project project, @NotNull List<Issue> issues) {
		DataService dataService = DataService.getInstance(project);
		dataService.removeIssues(issues);
		ReportManager reportManager = ReportPanel.getInstance(project);
		if (reportManager != null) {
			reportManager.handleIssuesFixed(issues);
		}
		HTMLReportManager htmlReportManager = HTMLReportPanel.getInstance(project);
		if (htmlReportManager != null) {
			htmlReportManager.handleIssuesFixed(issues);
		}
	}

	private void process(Node root) {
		for (Node node : root.getChild("fixes").getChildren()) {
			final QuickFix fix = QuickFix.getInstance(node);
			for (String id : fix.getProblems()) {
				if (!quickfixes.containsKey(id)) {
					quickfixes.put(id, new LinkedList<>());
				}
				quickfixes.get(id).add(fix);
			}
		}
	}

	@Override
	public List<QuickFix> getAllQuickFixes() {
		List<QuickFix> result = new LinkedList<>();
		for (List<QuickFix> fixes : quickfixes.values()) {
			result.addAll(fixes);
		}
		return result;
	}

	@Override
	public void handleAuditReportRemoved(@NotNull String rootFileName) {
		for (FixSource source : fixSources.values()) {
			source.dispose(rootFileName);
		}
	}

	@Override
	public void dispose() {
		quickfixes.clear();
		for (FixSource source : fixSources.values()) {
			source.dispose();
		}
		fixSources.clear();
	}
}
