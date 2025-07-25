package com.xliic.openapi.platform.scan;

import static com.xliic.openapi.platform.NamingConvention.DEFAULT_COLLECTION_NAMING_PATTERN;

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
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.Puller;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.outline.actions.ScanAction;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.NamingConvention;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.PlatformReportPuller;
import com.xliic.openapi.platform.callback.PlatformCollectionCallback;
import com.xliic.openapi.platform.callback.PlatformImportAPICallback;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.platform.tree.actions.PlatformCreateNewCollectionAction;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.tags.TagsUtils;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.utils.NetUtils;

import okhttp3.Response;

public class ScanUtils {

    public static final String COLLECTION_TEMP_NAME = "IDE Temp Collection";
    private static final SimpleDateFormat API_TEMP_NAME_DATE_FORMATTER = new SimpleDateFormat("HHmmssddMMyyyy");
    private static final int PAUSE = 1000;
    private static final int PULL_SCAN_CONFIG_DURATION = 30000;
    private static final int PULL_SCAN_REPORT_DURATION = 30000;
    private static final int PULL_REPORT_DURATION = 60000;
    private static final String TMP_PREFIX = "tmp-";
    public static final int TEMP_API_CLEAN_TIMEOUT = 600000;

    public static final String LIMIT_REACHED_MSG = "You have reached your maximum number of APIs. " +
            "Please contact support@42crunch.com to upgrade your account.";

    @NotNull
    public static String createTempAPI(@NotNull String collectionId, @NotNull String oas) throws Exception {
        PlatformAPI api = ScanUtils.createTempApi(collectionId, oas, null);
        return api.getId();
    }

    public static void auditTempAPI(@NotNull Project project, @NotNull String apiId) throws Exception {
        Node fullReport = new PlatformReportPuller(project, apiId, PAUSE, PULL_REPORT_DURATION).get();
        Node report = PlatformUtils.getAssessmentReportNode(fullReport);
        if (!"valid".equals(Objects.requireNonNull(report).getChildValue("openapiState"))) {
            throw new ScanGeneralError(report);
        }
    }

    public static boolean deleteAPI(@NotNull String apiId) {
        try {
            ScanAPIs.deleteAPI(apiId);
            return true;
        } catch (IOException ignored) {
            return false;
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
        List<String> reports = new Puller<List<String>>(PAUSE, PULL_SCAN_REPORT_DURATION) {
            @Override
            protected @NotNull Response send() throws IOException {
                return ScanAPIs.listScanReports(apiId);
            }

            @Override
            protected @Nullable List<String> response(@NotNull Node body) {
                Node list = body.getChild("list");
                if (list == null || list.getChildren().isEmpty()) {
                    return null;
                }
                return list.getChildren().stream().map(ScanReport::getTaskId).collect(Collectors.toList());
            }

            @Override
            protected @NotNull Exception timeout() {
                return new Exception("Failed to get docker scan report");
            }
        }.get();
        return reports.get(0);
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
    public static PlatformAPI createTempApi(@NotNull String collectionId, @NotNull String text, @Nullable Set<String> tagIds) throws Exception {
        Set<String> apiTagIds = TagsUtils.getMandatoryTagIds();
        if (tagIds != null) {
            apiTagIds.addAll(tagIds);
        }
        // If the api naming convention is configured, use its example as the api name
        // this way we don't have to come up with a name that matches its pattern
        NamingConvention convention = PlatformUtils.getApiNamingConvention();
        String apiName = convention.getPattern().isEmpty() ? TMP_PREFIX + API_TEMP_NAME_DATE_FORMATTER.format(new Date()) : convention.getExample();
        try (Response response = ScanAPIs.createAPI(collectionId, apiName, text, apiTagIds)) {
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

    public static void clearTempApis(@NotNull String collectionId) {
        // Check if any of the old apis have to be deleted
        final long current = new Date().getTime();
        NamingConvention convention = PlatformUtils.getApiNamingConvention();
        Logger.getInstance(ScanUtils.class).info("Clearing collection " + collectionId);
        int deletedCount = 0;
        int responseLength = 0;
        try (Response response = PlatformAPIs.Sync.listApis(collectionId)) {
            Node body = NetUtils.getBodyNodeRequireNonNull(response);
            Node list = body.find("/list");
            if (list != null) {
            	responseLength = list.getChildren().size();
                for (Node item : list.getChildren()) {
                    Node desc = item.getChildRequireNonNull("desc");
                    String name = desc.getChildValueRequireNonNull("name");
                    String apiId = desc.getChildValueRequireNonNull("id");
                    Logger.getInstance(ScanUtils.class).info("Checking API: " + name + " (" + apiId + ")");
                    if (name.startsWith(TMP_PREFIX)) {
                        Date date = API_TEMP_NAME_DATE_FORMATTER.parse(name.replace(TMP_PREFIX, ""));
                        if (current - date.getTime() > TEMP_API_CLEAN_TIMEOUT) {
                            if (ScanUtils.deleteAPI(apiId)) {
                                deletedCount++;
                                Logger.getInstance(ScanUtils.class).info("Deleting old temporary API: " + name + " (" + apiId + ")");
                            }
                        }
                    } else if (!convention.getPattern().isEmpty() && name.equals(convention.getExample())) {
                        // If the api naming convention is configured, we don't have timestamps in the name
                        deletedCount++;
                        Logger.getInstance(ScanUtils.class).info("Deleting old API with no timestamp: " + name + " (" + apiId + ")");
                    }
                }
            }
        } catch (Exception ignored) {
        }
        if (responseLength == deletedCount) {
            Logger.getInstance(ScanUtils.class).info("All temporary APIs in collection " + collectionId +
                    " have been deleted, removing collection");
            PlatformAPIs.deleteCollection(collectionId);
        } else {
            int remainingApis = responseLength - deletedCount;
            Logger.getInstance(ScanUtils.class).info("Temporary collection has been cleared, but not all APIs were deleted. " +
                    "Remaining APIs: " + remainingApis);
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
        } catch (Exception ignored) {
        }
        return text;
    }

    public static void setActionsForOperation(@NotNull PsiFile psiFile, @NotNull Node op, @NotNull List<Object> payloads) {
        String pathName = op.getParent().getKey();
        String operationName = op.getKey();
        int textOffset = op.getRange().getOffset();
        payloads.add(new ScanConfOperation(psiFile, pathName, operationName, textOffset));
    }

    public static void setActionsForOperation(@NotNull PsiFile psiFile, @NotNull Node op, @NotNull DefaultActionGroup actions) {
        List<Object> payloads = new LinkedList<>();
        setActionsForOperation(psiFile, op, payloads);
        payloads.forEach(p -> actions.add(new ScanAction((ScanConfOperation) p)));
    }

    public static String findOrCreateTempCollection() throws Exception {
    	Logger.getInstance(ScanUtils.class).info("Finding or creating temporary collection");
        NamingConvention namingConvention = PlatformUtils.getCollectionNamingConvention();
        String collectionName = SettingsService.getInstance().getValue(Settings.Platform.TEMP_COLLECTION_NAME, COLLECTION_TEMP_NAME);
        if (!namingConvention.match(collectionName)) {
            throw new Exception("The temporary collection name does not match the expected pattern defined in your organization. " +
                    "Please change the temporary collection name in your settings.");
        }
        if (!NamingConvention.match(collectionName, DEFAULT_COLLECTION_NAMING_PATTERN)) {
            throw new Exception("The temporary collection name does not match the expected pattern. " +
                    "Please change the temporary collection name in your settings.");
        }
        try (Response searchResponse = ScanAPIs.searchCollections(collectionName)) {
            Node searchBody = NetUtils.getBodyNode(searchResponse);
            if (searchBody != null) {
                List<PlatformCollection> collections = PlatformCollectionCallback.getCollections(searchBody);
                List<PlatformCollection> writableCols = new LinkedList<>();
                for (PlatformCollection collection : collections) {
                    if (collection.getPermissions().hasAll()) {
                        writableCols.add(collection);
                    }
                }
                if (writableCols.isEmpty()) {
                    try (Response response = ScanAPIs.createCollection(collectionName)) {
                        Node body = NetUtils.getBodyNode(response);
                        if (body != null) {
                            PlatformCollection collection = PlatformCreateNewCollectionAction.getPlatformCollection(body);
                            Logger.getInstance(ScanUtils.class).info("Created new temporary collection: " +
                                    collection.getName() + " " + collection.getId());
                            return collection.getId();
                        }
                    }
                } else {
                    String colId = writableCols.get(0).getId();
                    Logger.getInstance(ScanUtils.class).info("Using existing temporary collection: " + colId);
                    return colId;
                }
            }
        }
        throw new Exception("Failed to create temporary collection " + collectionName);
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
