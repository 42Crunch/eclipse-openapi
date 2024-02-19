package com.xliic.openapi.report;

import java.nio.file.Paths;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.DefaultActionGroup;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.report.tree.AuditAction;
import com.xliic.openapi.report.types.AuditCompliance;
import com.xliic.openapi.report.types.AuditToDoReport;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.utils.NetUtils;

import okhttp3.Response;

public class AuditUtils {

    @SuppressWarnings("unchecked")
    public static @NotNull AuditCompliance readAuditCompliance(@NotNull String taskId) throws Exception {
        try (Response response = PlatformAPIs.Sync.readAuditCompliance(taskId)) {
            Object body = NetUtils.getBodyObject(response);
            if (body instanceof Map) {
                return new AuditCompliance((Map<String, Object>) body);
            }
        }
        throw new Exception("Failed to read audit compliance");
    }

    @SuppressWarnings("unchecked")
    public static @NotNull AuditToDoReport readAuditReportSqgTodo(@NotNull String taskId) throws Exception {
        try (Response response = PlatformAPIs.Sync.readAuditReportSqgTodo(taskId)) {
            Object body = NetUtils.getBodyObject(response);
            if (body != null) {
                return new AuditToDoReport((Map<String, Object>) body);
            }
        }
        throw new Exception("Failed to read audit sqg todo report");
    }

    @NotNull
    public static String getAuditOfText(@NotNull Issue issue) {
        return "audit of " + Paths.get(issue.getAuditFileName()).getFileName();
    }

    @NotNull
    public static String getScoreText(@NotNull Issue issue) {
        String score = issue.getDisplayScore();
        return "0".equals(score) ? "" : " (score impact " + score + ")";
    }

    @NotNull
    public static String getHighlightInfoLabel(Issue issue) {
        return issue.getDescription() + " in " + getAuditOfText(issue) + getScoreText(issue);
    }

    public static void setActionsForOperation(@NotNull PsiFile psiFile, @NotNull Node op, @NotNull List<Object> payloads) {
        String pathName = op.getParent().getKey();
        String operationName = op.getKey();
        int textOffset = op.getRange().getOffset();
        payloads.add(new AuditOperation(psiFile, pathName, operationName, textOffset));
    }

    public static void setActionsForOperation(@NotNull PsiFile psiFile, @NotNull Node op, @NotNull DefaultActionGroup actions) {
        List<Object> payloads = new LinkedList<>();
        setActionsForOperation(psiFile, op, payloads);
        payloads.forEach(p -> actions.add(new AuditAction((AuditOperation) p)));
    }
}
