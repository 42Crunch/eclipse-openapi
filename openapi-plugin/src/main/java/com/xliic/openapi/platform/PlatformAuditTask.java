package com.xliic.openapi.platform;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT;
import static com.xliic.openapi.tryit.TryItUtils.extractSingleOperation;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.diagnostic.Logger;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.report.AuditUtils;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.report.types.AuditCompliance;
import com.xliic.openapi.report.types.AuditToDoReport;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.tags.TagsService;
import com.xliic.openapi.utils.NetUtils;
import okhttp3.Response;

public class PlatformAuditTask extends Task.Backgroundable {

    private static final int PAUSE = 1000;
    private static final int PULL_REPORT_DURATION = 60000;
    private static final String ERROR_MSG = "Unexpected error when trying to audit API using the platform: ";

    @NotNull
    private final Project project;
    @NotNull
    private final VirtualFile file;
    @Nullable
    private final AuditOperation operation;
    @NotNull
    private final AuditService.Callback callback;

    public PlatformAuditTask(@NotNull Project project, @NotNull VirtualFile file, @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT, false);
        this.project = project;
        this.file = file;
        operation = null;
        this.callback = callback;
    }

    public PlatformAuditTask(@NotNull Project project, @NotNull AuditOperation operation, @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT, false);
        this.project = project;
        this.file = operation.getPsiFile().getVirtualFile();
        this.operation = operation;
        this.callback = callback;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@NotNull ProgressIndicator progress) {
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundle = bundleService.getBundle(file.getPath());
        if (bundle == null || !bundle.isBundleComplete()) {
            callback.reject("Failed to bundle for audit, check OpenAPI file for errors");
            return;
        }
        String text = operation == null ? bundle.getJsonText() : extractSingleOperation(operation.getPath(), operation.getMethod(), bundle);
        String apiId = null;
        String collectionId = null;
        try {
            AuditService.getInstance(project).downloadArticles(progress);
            collectionId = ScanUtils.findOrCreateTempCollection();
            String targetFileName = file.getPath();
            Map<String, Object> tagData = TagsService.getInstance(project).getState().tagData;
            List<String> savedTagIds = new LinkedList<>();
            Object data = tagData.get(targetFileName);
            if (data != null) {
                if (data instanceof List) {
                    List<Tag> platformTags = PlatformUtils.getTags(false);
                    List<Tag> myTags = new LinkedList<> ();
                    for (Map<String, String> entry : (List<Map<String, String>>) data) {
                        myTags.add(new Tag(entry.get("categoryName"), entry.get("tagName"), entry.get("tagId")));
                    }
                    savedTagIds.addAll(getActiveTagsIds(myTags, platformTags));
                } else {
                    Map<String, String> dataMap = (Map<String, String>) data;
                    String savedApiId = dataMap.get("apiId");
                    String savedCollectionId = dataMap.get("collectionId");
                    List<Tag> platformTags = PlatformUtils.getTags(true);
                    savedTagIds.addAll(getTagsFromApi(savedCollectionId, savedApiId, platformTags));
                }
            }
            PlatformAPI api = ScanUtils.createTempApi(collectionId, text, savedTagIds);
            apiId = api.getId();
            Node fullReport = new PlatformReportPuller(project, apiId, PAUSE, PULL_REPORT_DURATION).get();
            Node report = PlatformUtils.getAssessmentReportNode(fullReport);
            if (report == null) {
                callback.reject(ERROR_MSG + "format is not valid");
                return;
            }
            String tid = fullReport.getChildValueRequireNonNull("tid");
            AuditCompliance compliance = AuditUtils.readAuditCompliance(tid);
            AuditToDoReport todoReport = AuditUtils.readAuditReportSqgTodo(tid);
            callback.complete(report, compliance, todoReport);
        } catch (Exception e) {
            if (e instanceof AuditService.KdbException) {
                callback.reject(e.getMessage());
            } else {
                String msg = e.getMessage();
                callback.reject(msg.equals(ScanUtils.LIMIT_REACHED_MSG) ? msg : ERROR_MSG + msg);
            }
            Logger.getInstance(PlatformAuditTask.class).error(e);
        } finally {
            if (apiId != null) {
                ScanUtils.deleteAPI(apiId);
            }
            if (collectionId != null) {
                ScanUtils.clearTempApis(collectionId);
            }
            progress.cancel();
        }
    }
    
    private List<String> getActiveTagsIds(List<Tag> selectedTags, List<Tag> platformTags) throws Exception {
        List<String> deadTags = new LinkedList<>();
        Set<String> activeTagIds = platformTags.stream().map(Tag::getTagId).collect(Collectors.toSet());
        for (Tag selectedTag : selectedTags) {
            if (!activeTagIds.contains(selectedTag.getTagId())) {
                deadTags.add(selectedTag.getCategoryName() + ": " + selectedTag.getTagName());
            }
        }
        if (!deadTags.isEmpty()) {
            throw new Exception("The following tags are not found: " + String.join(", ", deadTags) + ". Please change the file tags.");
        }
        return selectedTags.stream().map(Tag::getTagId).collect(Collectors.toList());
    }

    private List<String> getTagsFromApi(String collectionId, String apiId, List<Tag> platformTags) throws Exception {
        Node myApi = null;
        try (Response response = PlatformAPIs.Sync.listApis(collectionId)) {
            Node body = NetUtils.getBodyNodeRequireNonNull(response);
            Node list = body.find("/list");
            if (list != null) {
                for (Node item : list.getChildren()) {
                    Node desc = item.getChildRequireNonNull("desc");
                    if (apiId.equals(desc.getChildValue("id"))) {
                        myApi = item;
                    }
                }
            }
        } catch (Exception ignored) {
        }
        if (myApi == null) {
            throw new Exception("The api " + apiId + " is not found. Please change the file api link.");
        }
        Node tags = myApi.getChild("tags");
        List<String> tagIds = new LinkedList<>();
        if (tags != null) {
            Set<String> adminTagIds = platformTags.stream().filter(tag -> !tag.isOnlyAdminCanTag()).map(Tag::getTagId).collect(Collectors.toSet());
            for (Node tag : tags.getChildren()) {
                String tagId = tag.getChildValue("tagId");
                if (tagId != null && !adminTagIds.contains(tagId)) {
                    tagIds.add(tagId);
                }
            }
        }
        return tagIds;
    }
}
