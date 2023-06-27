package com.xliic.openapi.platform.scan;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.actionSystem.DefaultActionGroup;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.Puller;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.PlatformReportPuller;
import com.xliic.openapi.platform.callback.PlatformCollectionCallback;
import com.xliic.openapi.platform.callback.PlatformImportAPICallback;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.platform.tree.actions.PlatformCreateNewCollectionAction;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.utils.NetUtils;

import okhttp3.Response;

public class ScanUtils {

    private static final String COLLECTION_TEMP_NAME = "IDE Temp Collection";
    private static final SimpleDateFormat API_TEMP_NAME_DATE_FORMATTER = new SimpleDateFormat("HHmmssddMMyyyy");
    private static final int PAUSE = 1000;
    private static final int PULL_SCAN_CONFIG_DURATION = 30000;
    private static final int PULL_SCAN_REPORT_DURATION = 10000;
    private static final int PULL_REPORT_DURATION = 60000;
    private static final String TMP_PREFIX = "tmp-";
    public static final int TEMP_API_CLEAN_TIMEOUT = 160000;

    public static final String LIMIT_REACHED_MSG = "You have reached your maximum number of APIs. " +
            "Please contact support@42crunch.com to upgrade your account.";

    @NotNull
    public static String createTempAPI(@NotNull String collectionId, @NotNull String oas) throws Exception {
        PlatformAPI api = ScanUtils.createTempApi(collectionId, oas);
        return api.getId();
    }

    public static void auditTempAPI(@NotNull Project project, @NotNull String apiId) throws Exception {
        Node fullReport = new PlatformReportPuller(project, apiId, PAUSE, PULL_REPORT_DURATION).get();
        Node report = PlatformUtils.getAssessmentReportNode(fullReport);
        if (!"valid".equals(Objects.requireNonNull(report).getChildValue("openapiState"))) {
            throw new ScanGeneralError(report);
        }
    }

    public static void deleteAPI(@NotNull String apiId) {
        try {
            ScanAPIs.deleteAPI(apiId);
        } catch (IOException ignored) {
        }
    }

    public static void createDefaultScanConfig(@NotNull String apiId) throws Exception {
        try (Response response = ScanAPIs.createDefaultScanConfig(apiId)) {
            Node body = NetUtils.getBodyNode(response);
            if (body != null) {
                String value = body.getChildValue("id");
                if (value != null) {
                    return;
                }
            }
        }
        throw new Exception("Failed to create default scan configuration");
    }

    public static void createScanConfig(@NotNull String apiId,
            @NotNull String name,
            @NotNull String config,
            boolean isNewApi) throws Exception {
		try (Response response = ScanAPIs.createScanConfig(apiId, name, config, isNewApi)) {
			Node body = NetUtils.getBodyNode(response);
			if (body != null) {
				String value = body.getChildValue("id");
				if (value != null) {
					return;
				}
			}
		}
		throw new Exception("Failed to create " + name + " scan configuration");
	}

    @NotNull
    public static ScanConfiguration readScanConfig(@NotNull String configId) throws Exception {
        try (Response response = ScanAPIs.readScanConfig(configId)) {
            Node body = NetUtils.getBodyNode(response);
            if (body != null) {
                return ScanConfiguration.getInstance(body);
            }
        }
        throw new Exception("Failed to read scan configuration");
    }

    @NotNull
    public static ScanReport readScanReport(@NotNull String reportId) throws Exception {
        try (Response response = ScanAPIs.readScanReport(reportId)) {
            Node body = NetUtils.getBodyNode(response);
            if (body != null) {
                return ScanReport.getInstance(body);
            }
        }
        throw new Exception("Failed to read docker scan report");
    }

    @NotNull
    public static String waitForScanReport(@NotNull String apiId) throws Exception {
        List<ScanReport> reports = new Puller<List<ScanReport>>(PAUSE, PULL_SCAN_REPORT_DURATION) {
            @Override
            protected @NotNull Response send() throws IOException {
                return ScanAPIs.listScanReports(apiId);
            }

            @Override
            protected @Nullable List<ScanReport> response(@NotNull Node body) {
                Node list = body.getChild("list");
                if (list == null || list.getChildren().isEmpty()) {
                    return null;
                }
                return list.getChildren().stream().map(ScanReport::getInstance).collect(Collectors.toList());
            }

            @Override
            protected @NotNull Exception timeout() {
                return new Exception("Failed to get docker scan report");
            }
        }.get();
        return reports.get(0).getTaskId();
    }

    @NotNull
    public static List<ScanConfiguration> getScanConfigs(@NotNull String apiId) throws Exception {
        return new Puller<List<ScanConfiguration>>(PAUSE, PULL_SCAN_CONFIG_DURATION) {
            @Override
            protected @NotNull Response send() throws IOException {
                return ScanAPIs.listScanConfigs(apiId);
            }

            @Override
            protected @Nullable List<ScanConfiguration> response(@NotNull Node body) {
                Node list = body.getChild("list");
                if (list == null || list.getChildren().isEmpty()) {
                    return null;
                }
                return list.getChildren().stream().map(ScanConfiguration::getInstance).collect(Collectors.toList());
            }

            @Override
            protected @NotNull Exception timeout() {
                return new Exception("Timed out while waiting for the scan config for API ID: " + apiId);
            }
        }.get();
    }

    @NotNull
    public static PlatformAPI createTempApi(@NotNull String collectionId, @NotNull String text) throws Exception {
        String apiName = TMP_PREFIX + API_TEMP_NAME_DATE_FORMATTER.format(new Date());
        try (Response response = ScanAPIs.createAPI(collectionId, apiName, text)) {
            Node body = NetUtils.getBodyNodeIgnoreCode(response);
            if (body != null) {
                if (response.code() == 409) {
                    String code = body.getChildValue("code");
                    String message = body.getChildValue("message");
                    if ("109".equals(code) && "limit reached".equals(message)) {
                        throw new Exception(LIMIT_REACHED_MSG);
                    }
                }
                return PlatformImportAPICallback.getPlatformAPI(body, apiName);
            }
        }
        throw new Exception("Failed to create temporary api " + apiName);
    }

    public static void clearTempApis(@NotNull String collectionId) {
        // Check if any of the old apis have to be deleted
        final long current = new Date().getTime();
        try (Response response = PlatformAPIs.Sync.listApis(collectionId)) {
            Node body = NetUtils.getBodyNodeRequireNonNull(response);
            Node list = body.find("/list");
            if (list != null) {
                for (Node item : list.getChildren()) {
                    Node desc = item.getChildRequireNonNull("desc");
                    String name = desc.getChildValueRequireNonNull("name");
                    if (name.startsWith(TMP_PREFIX)) {
                        Date date = API_TEMP_NAME_DATE_FORMATTER.parse(name.replace(TMP_PREFIX, ""));
                        if (current - date.getTime() > TEMP_API_CLEAN_TIMEOUT) {
                            ScanUtils.deleteAPI(desc.getChildValueRequireNonNull("id"));
                        }
                    }
                }
            }
        } catch (Exception ignored) {
        }
    }

    @NotNull
    public static String extractSinglePath(@NotNull String path, @NotNull BundleResult bundle) {
        return extractSinglePath(bundle.getJsonText(), bundle.getAST(), path);
    }

    @NotNull
    @SuppressWarnings("unchecked")
    public static String extractSinglePath(@NotNull String text, @NotNull Node astRoot, @NotNull String path) {
        Set<String> refs = getReferences(path, astRoot);
        try {
            Map<String, Object> root = new ObjectMapper().readValue(text, new TypeReference<>() {
            });
            if (root != null) {
                Map<String, Object> pathsMap = (Map<String, Object>) root.get("paths");
                if (pathsMap != null) {
                    pathsMap.keySet().removeIf(key -> !path.equals(key));
                }
                TryItUtils.filterComponents(root, refs);
                TryItUtils.filterDefinitions(root, refs);
                return TryItUtils.serializeToString(root);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return text;
    }

    public static void setActionsForOperation(@NotNull PsiFile psiFile, @NotNull Node op, @NotNull List<Object> payloads) {
        String pathName = op.getParent().getKey();
        String operationName = op.getKey();
        int textOffset = op.getRange().getOffset();
        payloads.add(new ScanOperation(psiFile, pathName, operationName, textOffset));
    }

    public static void setActionsForOperation(@NotNull PsiFile psiFile, @NotNull Node op, @NotNull DefaultActionGroup actions) {
        List<Object> payloads = new LinkedList<>();
        setActionsForOperation(psiFile, op, payloads);
        payloads.forEach(p -> {
            actions.add(new ScanAction("Scan", (ScanOperation) p));
        });
    }

    public static String findOrCreateTempCollection() throws Exception {
        try (Response searchResponse = ScanAPIs.searchCollections(COLLECTION_TEMP_NAME)) {
            Node searchBody = NetUtils.getBodyNode(searchResponse);
            if (searchBody != null) {
                List<PlatformCollection> collections = PlatformCollectionCallback.getCollections(searchBody);
                if (collections.isEmpty()) {
                    try (Response response = ScanAPIs.createCollection(COLLECTION_TEMP_NAME)) {
                        Node body = NetUtils.getBodyNode(response);
                        if (body != null) {
                            PlatformCollection collection = PlatformCreateNewCollectionAction.getPlatformCollection(body);
                            return collection.getId();
                        }
                    }
                } else {
                    return collections.get(0).getId();
                }
            }
        }
        throw new Exception("Failed to create temporary collection " + COLLECTION_TEMP_NAME);
    }

    private static Set<String> getReferences(String path, Node root) {
        Set<String> schemaNames = new HashSet<>();
        Node paths = root.getChild("paths");
        if (paths != null) {
            Node pathNode = paths.getChild(path);
            if (pathNode != null) {
                TryItUtils.collectSchemaNames(root, pathNode, schemaNames);
            }
        }
        return schemaNames;
    }
}
