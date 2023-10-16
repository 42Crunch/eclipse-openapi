package com.xliic.openapi;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.util.Computable;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.GlobUtils;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.File;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class GitRepoProps {

    @NotNull
    private final List<String> urls;
    @NotNull
    private final String branch;
    @NotNull
    private final String rootPath;
    @NotNull
    private final Map<String, String> mapping = new HashMap<>();

    public GitRepoProps(@NotNull List<String> urls, @NotNull String branch, @NotNull String rootPath) {
        this.urls = urls;
        this.branch = branch;
        this.rootPath = rootPath;
    }

    public @Nullable String getConfigName(@NotNull String apiId) {
        return mapping.get(apiId);
    }

    public void readConfig() {
        String text = ApplicationManager.getApplication().runReadAction((Computable<String>) () ->
                Utils.getTextFromFile(new File(new File(rootPath), "42c-conf.yaml")));
        if (text == null) {
            return;
        }
        Node config = Utils.getJsonAST(text);
        if (config == null) {
            return;
        }
        Node container = config.find("/audit/branches");
        if (container != null) {
            List<String> patterns = new LinkedList<>();
            for (Node pattern : container.getChildren()) {
                patterns.add(pattern.getKey());
            }
            patterns.sort((a, b) -> b.length() - a.length());
            for (String glob : patterns) {
                if (GlobUtils.isMatch(branch, glob)) {
                    Node patternConfig = container.getChild(glob);
                    if (patternConfig != null) {
                        Node mappingConfig = patternConfig.getChild("mapping");
                        if (mappingConfig != null) {
                            for (Node child : mappingConfig.getChildren()) {
                                mapping.put(child.getValue(), child.getKey());
                            }
                        }
                    }
                }
            }
        }
    }

    public @NotNull List<String> getUrls() {
        return urls;
    }

    public @NotNull String getBranch() {
        return branch;
    }

    public @NotNull String getRootPath() {
        return rootPath;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GitRepoProps repoProps = (GitRepoProps) o;
        if (!urls.equals(repoProps.urls)) return false;
        if (!branch.equals(repoProps.branch)) return false;
        if (!rootPath.equals(repoProps.rootPath)) return false;
        return mapping.equals(repoProps.mapping);
    }

    @Override
    public int hashCode() {
        int result = urls.hashCode();
        result = 31 * result + branch.hashCode();
        result = 31 * result + rootPath.hashCode();
        result = 31 * result + mapping.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "GitRepoProps{" +
                "urls=" + urls +
                ", branch='" + branch + '\'' +
                ", rootPath='" + rootPath + '\'' +
                ", mapping=" + mapping +
                '}';
    }
}
