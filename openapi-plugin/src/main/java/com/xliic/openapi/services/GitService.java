package com.xliic.openapi.services;

import com.xliic.core.Disposable;
import com.xliic.core.git.GitLocalBranch;
import com.xliic.core.git.GitRemoteBranch;
import com.xliic.core.git.GitRepository;
import com.xliic.core.git.GitRepositoryChangeListener;
import com.xliic.core.git.GitRepositoryManager;
import com.xliic.core.git.GitUtil;
import com.xliic.core.project.Project;
import com.xliic.openapi.GitRepoProps;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.services.api.IGitService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.topic.SettingsListener;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.swing.*;
import java.util.*;

import static com.xliic.openapi.settings.Settings.Platform.TURNED_OFF;
import static com.xliic.openapi.settings.Settings.Platform.TURNED_ON;

public final class GitService implements IGitService, Disposable, GitRepositoryChangeListener, SettingsListener {

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, GitRepoProps> propsByUrl = new HashMap<>();
    @NotNull
    private final Map<String, GitRepoProps> propsByRootPath = new HashMap<>();
    private boolean active;

    public GitService(@NotNull Project project) {
        this.project = project;
        active = PlatformConnection.isPlatformIntegrationEnabled();
        if (active) {
        	GitUtil.getRepositoryManager(project).start();
        }
    }

    public static GitService getInstance(@NotNull Project project) {
        return project.getService(GitService.class);
    }

    public void subscribe() {
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(GitRepository.GIT_REPO_CHANGE, this);
    }

    @Override
    public void dispose() {
        active = false;
        propsByUrl.clear();
        propsByRootPath.clear();
    }

    @Override
    public synchronized void repositoryChanged(@NotNull GitRepository repo) {
        if (active) {
            GitRepoProps oldProps = propsByRootPath.get(repo.getRoot().getPath());
            if (oldProps != null) {
                for (String url : oldProps.getUrls()) {
                    propsByUrl.remove(url);
                }
                propsByRootPath.remove(repo.getRoot().getPath());
            }
            GitRepoProps newProps = getRepoProps(repo);
            if (newProps != null) {
                for (String url : newProps.getUrls()) {
                    propsByUrl.put(url, newProps);
                }
                propsByRootPath.put(newProps.getRootPath(), newProps);
                newProps.readConfig();
            }
            if (!Objects.equals(newProps, oldProps)) {
                SwingUtilities.invokeLater(() -> project.getMessageBus().syncPublisher(PlatformListener.TOPIC).repositoryChanged());
            }
        }
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (Settings.hasPlatformKey(keys) && !project.isDisposed()) {
            if (keys.contains(TURNED_ON) || keys.contains(TURNED_OFF)) {
                synchronized (this) {
                	GitRepositoryManager gitManager = GitUtil.getRepositoryManager(project); 
                    if (keys.contains(TURNED_ON)) {
                        active = true;
                        refresh();
                        gitManager.start();
                    } else if (keys.contains(TURNED_OFF)) {
                        dispose();
                        gitManager.stop();
                    }
                }
            }
        }
    }

    public synchronized @Nullable GitRepoProps getRepoProps(@NotNull String url) {
        return propsByUrl.get(getCleanRepoUrl(url));
    }

    public synchronized void refresh() {
        if (active) {
            propsByUrl.clear();
            propsByRootPath.clear();
            List<GitRepository> repositories = GitUtil.getRepositoryManager(project).getRepositories();
            for (GitRepository repo : repositories) {
                GitRepoProps repoProps = getRepoProps(repo);
                if (repoProps != null) {
                    for (String url : repoProps.getUrls()) {
                        propsByUrl.put(url, repoProps);
                    }
                    propsByRootPath.put(repoProps.getRootPath(), repoProps);
                    repoProps.readConfig();
                }
            }
        }
    }

    @NotNull
    public synchronized String getStringStatus() {
        StringBuilder builder = new StringBuilder();
        builder.append("Git service active: ").append(active).append("\n");
        if (propsByRootPath.isEmpty()) {
            builder.append("No properties available");
        } else {
            for (Map.Entry<String, GitRepoProps> item : propsByRootPath.entrySet()) {
                builder.append(item).append("\n");
            }
        }
        return builder.toString();
    }

    private static String getCleanRepoUrl(String url) {
        if (url.endsWith(".git")) {
            return url.substring(0, url.lastIndexOf(".git"));
        }
        return url;
    }

    private static GitRepoProps getRepoProps(GitRepository repo) {
        GitLocalBranch currentBranch = repo.getCurrentBranch();
        if (currentBranch != null) {
            GitRemoteBranch trackedBranch = currentBranch.findTrackedBranch(repo);
            if (trackedBranch != null) {
                List<String> urls = new LinkedList<>();
                for (String url : trackedBranch.getRemote().getUrls()) {
                    urls.add(getCleanRepoUrl(url));
                }
                if (!urls.isEmpty()) {
                    return new GitRepoProps(urls, currentBranch.getName(), repo.getRoot().getPath());
                }
            }
        }
        return null;
    }
}
