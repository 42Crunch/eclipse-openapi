package com.xliic.openapi.tags;

import static com.xliic.openapi.platform.NamingConvention.TAGS_PATTERN;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.settings.Credentials;
import com.xliic.core.project.Project;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.NamingConvention;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.Tag;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.NetUtils;

import okhttp3.Response;

public class TagsUtils {

    public static void applyTags(@NotNull List<String> args, @NotNull Set<String> tags) {
        if (!tags.isEmpty()) {
            args.add("--tag");
            args.add(String.join(",", tags));
        }
    }

    @NotNull
    public static Set<String> getFullTagNames(@NotNull Project project,
                                              @NotNull Credentials.Type type,
                                              @NotNull String targetFileName) throws Exception {
        return getTags(project, type, targetFileName).stream().map(Tag::getFullTagName).collect(Collectors.toSet());
    }

    @NotNull
    public static Set<Tag> getTags(@NotNull Project project,
                                   @NotNull Credentials.Type type,
                                   @NotNull String targetFileName) throws Exception {
        // Tags support available only for platform users
        if (type == Credentials.Type.AnondToken) {
            return new HashSet<>(0);
        }
        return getAllTags(project, targetFileName);
    }

    @NotNull
    public static Set<Tag> getMandatoryTags(@NotNull Project project) throws Exception {
        // This method must be called only by platform users
        return getAllTags(project, null);
    }

    private static Set<Tag> getAllTags(@NotNull Project project, @Nullable String targetFileName) throws Exception {
        Set<Tag> fileTags = targetFileName != null ? getFileTags(project, targetFileName) : new HashSet<>(0);
        Set<String> manTags = readMandatoryTagsFromSettings();
        if (!fileTags.isEmpty() || !manTags.isEmpty()) {
            List<Tag> platformTags = PlatformUtils.getTags();
            Set<Tag> existingTags = mergeAndFilterNonExistingTags(fileTags, manTags, platformTags);
            return filterAdminTags(project, filterNonExclusiveTags(existingTags), platformTags);
        }
        return new HashSet<>(0);
    }

    private static Set<Tag> filterNonExclusiveTags(Set<Tag> tags) throws Exception {
        if (!tags.isEmpty()) {
            Map<String, Set<String>> eCatTags = new HashMap<>();
            for (Tag tag : tags) {
                String eCatId = tag.getExclusiveCategoryId();
                if (eCatId != null) {
                    Set<String> fullTagNames = eCatTags.getOrDefault(eCatId, new HashSet<>());
                    fullTagNames.add(tag.getFullTagName());
                    eCatTags.put(eCatId, fullTagNames);
                }
            }
            List<String> badTagsGroups = new LinkedList<>();
            for (Set<String> values : eCatTags.values()) {
                if (values.size() > 1) {
                    badTagsGroups.add("(" + String.join(", ", values) + ")");
                }
            }
            if (!badTagsGroups.isEmpty()) {
                throw new Exception("Only one tag must be selected in the following exclusive categories: " +
                        String.join(", ", badTagsGroups) + ". Please update the file tags and/or mandatory tags in your settings.");
            }
        }
        return tags;
    }

    private static Set<Tag> mergeAndFilterNonExistingTags(Set<Tag> fileTags, Set<String> manTags, List<Tag> platformTags) throws Exception {
        Set<Tag> resTags = new HashSet<>();
        List<String> deadTags = new LinkedList<>();
        if (!fileTags.isEmpty()) {
            Set<String> platformTagIds = platformTags.stream().map(Tag::getTagId).collect(Collectors.toSet());
            for (Tag tag : fileTags) {
                if (platformTagIds.contains(tag.getTagId())) {
                    List<Tag> targetTags = platformTags.stream().filter(t -> t.getTagId().equals(tag.getTagId())).collect(Collectors.toList());
                    if (targetTags.size() == 1) {
                        // Add tag from platform as it contains all necessary data
                        resTags.add(targetTags.get(0));
                    } else {
                        deadTags.add(tag.getFullTagName());
                    }
                } else {
                    deadTags.add(tag.getFullTagName());
                }
            }
        }
        if (!manTags.isEmpty()) {
            // Here manTags has format = category name:tag name
            Set<String> platformFullTagNames = platformTags.stream().map(Tag::getFullTagName).collect(Collectors.toSet());
            for (String fullTagName : manTags) {
                if (platformFullTagNames.contains(fullTagName)) {
                    List<Tag> targetTags = platformTags.stream().filter(t -> t.getFullTagName().equals(fullTagName)).collect(Collectors.toList());
                    if (targetTags.size() == 1) {
                        // Add tag from platform as it contains all necessary data
                        resTags.add(targetTags.get(0));
                    } else {
                        deadTags.add(fullTagName);
                    }
                } else {
                    deadTags.add(fullTagName);
                }
            }
        }
        if (!deadTags.isEmpty()) {
            throw new Exception("The following tags are not found: " +
                    String.join(", ", deadTags) + ". Please update the file tags and/or mandatory tags in your settings.");
        }
        return resTags;
    }

    private static Node getTagsNode(String collectionId, String apiId) throws Exception {
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
        return myApi.getChild("tags");
    }

    @SuppressWarnings("unchecked")
    private static Set<Tag> getFileTags(Project project, String targetFileName) throws Exception {
        Set<Tag> fileTags = new HashSet<>();
        Map<String, Object> tagData = TagsService.getInstance(project).getState().tagData;
        Object data = tagData.get(targetFileName);
        if (data != null) {
            if (data instanceof List) {
                for (Map<String, String> entry : (List<Map<String, String>>) data) {
                    fileTags.add(new Tag(entry.get("categoryName"), entry.get("tagName"), entry.get("tagId")));
                }
            } else {
                Map<String, String> dataMap = (Map<String, String>) data;
                fileTags.addAll(readApiTags(dataMap.get("collectionId"), dataMap.get("apiId")));
            }
        }
        return fileTags;
    }

    private static Set<Tag> readApiTags(String collectionId, String apiId) throws Exception {
        Set<Tag> resTags = new HashSet<>();
        Node tags = getTagsNode(collectionId, apiId);
        if (tags != null) {
            for (Node tag : tags.getChildren()) {
                String tagId = tag.getChildValue("tagId");
                String tagName = tag.getChildValue("tagName");
                String categoryName = tag.getChildValue("categoryName");
                if (tagId != null && tagName != null && categoryName != null) {
                    resTags.add(new Tag(categoryName, tagName, tagId));
                }
            }
        }
        return resTags;
    }

    private static Set<Tag> filterAdminTags(Project project, Set<Tag> tags, List<Tag> platformTags) {
        if (!tags.isEmpty()) {
            Set<Tag> okTags = new HashSet<>();
            List<String> skipTags = new LinkedList<>();
            Set<String> adminTagIds = platformTags.stream().filter(Tag::isOnlyAdminCanTag).map(Tag::getTagId).collect(Collectors.toSet());
            for (Tag tag : tags) {
                if (adminTagIds.contains(tag.getTagId())) {
                    skipTags.add(tag.getFullTagName());
                } else {
                    okTags.add(tag);
                }
            }
            if (!skipTags.isEmpty()) {
                MsgUtils.notifyInfo(project, "Skip the following tags: " +
                        String.join(", ", skipTags) + ". Only organization administrators can apply them.");
            }
            return okTags;
        }
        return tags;
    }

    private static Set<String> readMandatoryTagsFromSettings() throws Exception {
        Set<String> tags = new HashSet<>();
        String value = SettingsService.getInstance().getValue(Settings.Platform.MANDATORY_TAGS, "");
        if (!StringUtils.isEmpty(value)) {
            if (NamingConvention.match(value, TAGS_PATTERN)) {
                for (String tag : value.split("[\\s,]+")) {
                    if (!StringUtils.isEmpty(tag)) {
                        tags.add(tag);
                    }
                }
            } else {
                throw new Exception("The mandatory tags " + value + " do not match the expected pattern. " +
                        "Please change the mandatory tags in your settings.");
            }
        }
        return tags;
    }
}
