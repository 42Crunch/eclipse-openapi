package com.xliic.openapi.graphql;

import static com.xliic.openapi.platform.scan.ScanUtils.API_TEMP_NAME_DATE_FORMATTER;
import static com.xliic.openapi.platform.scan.ScanUtils.LIMIT_REACHED_MSG;
import static com.xliic.openapi.platform.scan.ScanUtils.TMP_PREFIX;

import java.util.Date;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.NamingConvention;
import com.xliic.openapi.platform.callback.PlatformImportAPICallback;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.utils.NetUtils;

import okhttp3.Response;

public class GraphQlUtils {

    @NotNull
    public static PlatformAPI createTempApi(@NotNull String collectionId, @NotNull String text) throws Exception {
        // If the api naming convention is configured, use its example as the api name
        // this way we don't have to come up with a name that matches its pattern
        NamingConvention convention = PlatformUtils.getApiNamingConvention();
        String apiName = convention.getPattern().isEmpty() ? TMP_PREFIX + API_TEMP_NAME_DATE_FORMATTER.format(new Date()) : convention.getExample();
        try (Response response = GraphQlAPIs.createAPI(collectionId, apiName, text)) {
            Node body = NetUtils.getBodyNodeIgnoreCode(response);
            if (body != null) {
                if (response.code() == 200) {
                    return PlatformImportAPICallback.getPlatformAPI(body, apiName);
                } else {
                    String code = body.getChildValue("code");
                    String message = body.getChildValue("message");
                    if ("109".equals(code) && "limit reached".equals(message)) {
                        throw new Exception(LIMIT_REACHED_MSG);
                    }
                }
            }
        }
        throw new Exception("Failed to create temporary api " + apiName);
    }

    public static void goToLocationInFile(@NotNull Project project, @NotNull VirtualFile file, @NotNull String pointer) {
        AuditService auditService = AuditService.getInstance(project);
        Audit root = auditService.getAuditReport(file.getPath());
        if (root != null) {
            for (Issue issue : root.getIssues()) {
                if (pointer.equals(issue.getPointer())) {
                    ApplicationManager.getApplication().invokeLater(() -> {
                        int offset = issue.getRangeMarker().getStartOffset();
                        new OpenFileDescriptor(project, file, offset).navigate(true);
                    });
                    break;
                }
            }
        }
    }
}
