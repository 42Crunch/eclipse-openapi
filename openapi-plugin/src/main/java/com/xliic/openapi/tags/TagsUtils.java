package com.xliic.openapi.tags;

import com.xliic.core.project.Project;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.NamingConvention;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.Tag;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.NetUtils;
import okhttp3.Response;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import java.util.*;
import java.util.stream.Collectors;

import static com.xliic.openapi.platform.NamingConvention.TAGS_PATTERN;

public class TagsUtils {

    @NotNull @SuppressWarnings("unchecked")
    public static Set<String> getTags(@NotNull Project project, @NotNull String targetFileName) throws Exception {
        Map<String, Object> tagData = TagsService.getInstance(project).getState().tagData;
        Set<String> allTags = new HashSet<>();
        Object data = tagData.get(targetFileName);
        if (data != null) {
            if (data instanceof List) {
                // Do not check if tags exist or not
                for (Map<String, String> entry : (List<Map<String, String>>) data) {
                    allTags.add(entry.get("categoryName") + ":" + entry.get("tagName"));
                }
            } else {
                // Do not check if tags admin or not
                Map<String, String> dataMap = (Map<String, String>) data;
                Node tagsNode = getTagsNode(dataMap.get("collectionId"), dataMap.get("apiId"));
                for (Node tagNode : tagsNode.getChildren()) {
                    allTags.add(tagNode.getChildValue("categoryName") + ":" + tagNode.getChildValue("tagName"));
                }
            }
        }
        allTags.addAll(readMandatoryTagsFromSettings());
        // Tags format = category name:tag name
        return allTags;
    }

    @NotNull @SuppressWarnings("unchecked")
    public static Set<String> getTagIds(@NotNull Project project, @NotNull String targetFileName) throws Exception {
        Map<String, Object> tagData = TagsService.getInstance(project).getState().tagData;
        Set<String> tagIds = new HashSet<>();
        Object data = tagData.get(targetFileName);
        if (data != null) {
            if (data instanceof List) {
                List<Tag> myTags = new LinkedList<>();
                for (Map<String, String> entry : (List<Map<String, String>>) data) {
                    myTags.add(new Tag(entry.get("categoryName"), entry.get("tagName"), entry.get("tagId")));
                }
                if (!myTags.isEmpty()) {
                    List<Tag> platformTags = PlatformUtils.getTags(false);
                    tagIds.addAll(collectExistingTagIds(myTags, platformTags));
                }
            } else {
                Map<String, String> dataMap = (Map<String, String>) data;
                List<Tag> platformTags = PlatformUtils.getTags(true);
                tagIds.addAll(readExistingApiTagIds(dataMap.get("collectionId"), dataMap.get("apiId"), platformTags));
            }
        }
        return tagIds;
    }

    private static Set<String> collectExistingTagIds(List<Tag> tags, List<Tag> platformTags) throws Exception {
        List<String> deadTags = new LinkedList<>();
        Set<String> platformTagIds = platformTags.stream().map(Tag::getTagId).collect(Collectors.toSet());
        for (Tag tag : tags) {
            if (!platformTagIds.contains(tag.getTagId())) {
                deadTags.add(tag.getFullTagName());
            }
        }
        if (!deadTags.isEmpty()) {
            throw new Exception("The following tags are not found: " + String.join(", ", deadTags) + ". Please change the file tags.");
        }
        return tags.stream().map(Tag::getTagId).collect(Collectors.toSet());
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

    private static Set<String> readExistingApiTagIds(String collectionId, String apiId, List<Tag> platformTags) throws Exception {
        Set<String> tagIds = new HashSet<>();
        Node tags = getTagsNode(collectionId, apiId);
        if (tags != null) {
            Set<String> adminTagIds = platformTags.stream().filter(tag ->
                    !tag.isOnlyAdminCanTag()).map(Tag::getTagId).collect(Collectors.toSet());
            for (Node tag : tags.getChildren()) {
                String tagId = tag.getChildValue("tagId");
                if (tagId != null && !adminTagIds.contains(tagId)) {
                    tagIds.add(tagId);
                }
            }
        }
        return tagIds;
    }

    @NotNull
    public static Set<String> getMandatoryTagIds() throws Exception {
        Set<String> tagIds = new HashSet<>();
        Set<String> tags = readMandatoryTagsFromSettings();
        if (!tags.isEmpty()) {
            List<Tag> platformTags = PlatformUtils.getTags(false);
            if (!platformTags.isEmpty()) {
                tagIds.addAll(collectExistingMandatoryTagIds(tags, platformTags));
            }
        }
        return tagIds;
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

    private static Set<String> collectExistingMandatoryTagIds(Set<String> tags, List<Tag> platformTags) throws Exception {
        Set<String> tagIds = new HashSet<>();
        Set<String> deadTags = new HashSet<>();
        for (String tag : tags) {
            String tagId = findTagId(tag, platformTags);
            if (tagId != null) {
                tagIds.add(tagId);
            } else {
                deadTags.add(tag);
            }
        }
        if (!deadTags.isEmpty()) {
            throw new Exception("The mandatory tags " + String.join(", ", deadTags) + " are not found. " +
                    "Please change the mandatory tags in your settings.");
        }
        return tagIds;
    }

    private static String findTagId(String tagToFind, List<Tag> platformTags) {
        for (Tag tag : platformTags) {
            // tagToFind = category name:tag name
            if (tag.equals(tagToFind)) {
                return tag.getTagId();
            }
        }
        return null;
    }
}
