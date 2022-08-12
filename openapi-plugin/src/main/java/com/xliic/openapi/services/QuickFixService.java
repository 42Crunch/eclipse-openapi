package com.xliic.openapi.services;

import static com.xliic.core.util.ResourceUtil.getResourceAsStream;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.actions.FixSnippetAction;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.actions.FixBulkAction;
import com.xliic.openapi.quickfix.actions.FixCombinedAction;
import com.xliic.openapi.quickfix.actions.FixSingleAction;
import com.xliic.openapi.quickfix.managers.FixManagerBulk;
import com.xliic.openapi.quickfix.managers.FixManagerCombined;
import com.xliic.openapi.quickfix.managers.FixManagerSchema;
import com.xliic.openapi.quickfix.managers.FixManagerSchemaInline;
import com.xliic.openapi.quickfix.managers.FixManagerSingle;
import com.xliic.openapi.quickfix.managers.FixManagerSnippet;
import com.xliic.openapi.quickfix.schema.SchemaUtils;
import com.xliic.openapi.quickfix.sources.FixSource;
import com.xliic.openapi.quickfix.sources.FixSourceEmpty;
import com.xliic.openapi.quickfix.sources.FixSourceMostUsedByName;
import com.xliic.openapi.quickfix.sources.FixSourceSchemaRefByResponseCode;
import com.xliic.openapi.quickfix.sources.FixSourceSecuritySchemes;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.api.IQuickFixService;
import com.xliic.openapi.topic.AuditListener;

import icons.OpenApiIcons;

public final class QuickFixService implements IQuickFixService, Disposable {

    private final Map<String, List<QuickFix>> snippets = new HashMap<>();
    private final Map<String, List<QuickFix>> quickfixes = new HashMap<>();
	private final Map<String, FixSource> fixSources = new HashMap<>();

	public QuickFixService() {
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
        loadJsonConfig("snippets.json", snippets);
        loadJsonConfig("quickfixes.json", quickfixes);
	}

	public static QuickFixService getInstance() {
		return ApplicationManager.getApplication().getService(QuickFixService.class);
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
		actions.addAll(getGenerateSchemaSingleFixActions(psiFile, issue));
		return actions;
	}
	
    @NotNull
    public List<FixSingleAction> getGenerateSchemaSingleFixActions(PsiFile psiFile, Issue issue) {
        List<FixSingleAction> actions = new LinkedList<>();
        if (quickfixes.containsKey(issue.getId())) {
            Project project = psiFile.getProject();
            ASTService astService = ASTService.getInstance(project);
            Node root = astService.getRootNode(psiFile.getVirtualFile());
            // Parsing may be in progress, return without waiting
            if (root == null) {
                return actions;
            }
            for (QuickFix quickFix : quickfixes.get(issue.getId())) {
                if (quickFix.getType() != FixType.Insert) {
                    continue;
                }
                Node genFrom;
                OpenApiVersion version = ASTService.getOpenAPIVersion(project, psiFile.getVirtualFile());
                if (version == OpenApiVersion.V2) {
                    genFrom = SchemaUtils.getSchemaV2Examples(issue.getPointer(), quickFix.getProblems(), root);
                    if (genFrom == null) {
                        genFrom = SchemaUtils.getSchemaV2Example(issue.getPointer(), quickFix.getProblems(), root);
                    }
                }
                else {
                    genFrom = SchemaUtils.getSchemaV3Examples(issue.getPointer(), quickFix.getProblems(), root);
                    if (genFrom == null) {
                        genFrom = SchemaUtils.getSchemaV3Example(issue.getPointer(), quickFix.getProblems(), root);
                    }
                }
                if (genFrom != null) {
                    actions.add(new FixSingleAction(new FixManagerSchemaInline(psiFile, quickFix, issue, genFrom)));
                    actions.add(new FixSingleAction(new FixManagerSchema(psiFile, quickFix, issue, genFrom)));
                }
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
        AuditService auditService = AuditService.getInstance(project);
        auditService.removeIssues(issues);
        project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleIssuesFixed(issues);
    }

    private void process(Node root, Map<String, List<QuickFix>> source) {
        for (Node node : root.getChild("fixes").getChildren()) {
            final QuickFix fix = QuickFix.getInstance(node);
            for (String id : fix.getProblems()) {
                if (!source.containsKey(id)) {
                    source.put(id, new LinkedList<>());
                }
                source.get(id).add(fix);
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

    @NotNull
    public List<FixSnippetAction> getSnippetFixActions(@NotNull PsiFile psiFile,
                                                       @NotNull String id,
                                                       @NotNull DefaultMutableTreeNode node) {
        List<FixSnippetAction> result = new LinkedList<>();
        QuickFix quickFix = snippets.get(id).get(0);

        if ("operation".equals(id)) {
            for (Object operation : getOperationsList(quickFix)) {
                FixManagerSnippet provider = new FixManagerSnippet(psiFile, (String) operation, quickFix, node);
                result.add(new FixSnippetAction(provider, OpenApiIcons.PropertyNode));
            }
        }
        else {
            FixManagerSnippet provider = new FixManagerSnippet(psiFile, quickFix, node);
            result.add(new FixSnippetAction(provider, OpenApiIcons.AddSnippet));
        }
        return result;
    }

    @NotNull
    public List<FixSnippetAction> getSnippetFixActions(@NotNull PsiFile psiFile,
                                                       @NotNull List<String> ids,
                                                       @NotNull DefaultMutableTreeNode node) {
        List<FixSnippetAction> result = new LinkedList<>();
        for (String id : ids) {
            result.addAll(getSnippetFixActions(psiFile, id, node));
        }
        return result;
    }

    private void loadJsonConfig(String fileName, Map<String, List<QuickFix>> source) {
        if (source.isEmpty()) {
            InputStream inputStream = getResourceAsStream(getClass().getClassLoader(),"config", fileName);
            InputStreamReader reader = new InputStreamReader(inputStream, StandardCharsets.UTF_8);
            Stream<String> stream = new BufferedReader(reader).lines();
            StringBuilder builder = new StringBuilder();
            stream.forEach(builder::append);
            ParserJsonAST parser = new ParserJsonAST();
            process(parser.parse(builder.toString()), source);
        }
    }

    private List<Object> getOperationsList(QuickFix quickFix) {
        for (FixParameter parameter : quickFix.getParameters()) {
            if ("operation".equals(parameter.getName())) {
                return parameter.getValues();
            }
        }
        return Collections.emptyList();
    }
    
	@Override
	public void dispose() {
		Project.getInstance().dispose();
		quickfixes.clear();
		for (FixSource source : fixSources.values()) {
			source.dispose();
		}
		fixSources.clear();
	}
}
