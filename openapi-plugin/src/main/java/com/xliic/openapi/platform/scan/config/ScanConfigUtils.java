package com.xliic.openapi.platform.scan.config;

import static com.xliic.openapi.utils.Utils.refreshFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;
import com.xliic.core.ide.BrowserUtil;
import com.xliic.core.module.Module;
import com.xliic.core.module.ModuleManager;
import com.xliic.core.module.ModuleRootManager;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.Utils;

public class ScanConfigUtils {

    private static final int MAX_ALIAS_LENGTH = 32;
    private static final String CONFIRM_MSG = "Thank you for using the 42Crunch API Security Testing services. "
    		+ "You have reached the limit of your monthly Freemium allowance. "
    		+ "You have the option to wait until your free monthly allowance resets or upgrade your 42Crunch subscription.";

    @NotNull
    public static String getScanTitle(@NotNull BundleResult bundle) {
        Node root = bundle.getAST();
        if (root != null) {
            Node title = root.find("/info/title");
            if (title != null && !StringUtils.isEmpty(title.getValue())) {
                return title.getValue();
            }
        }
        return "OpenAPI";
    }

    @NotNull
    public static String getAlias(@NotNull String filePath) {
        int start = filePath.lastIndexOf(".42c");
        int end = filePath.indexOf("scanconf.json");
        if (start == -1 || end == -1) {
            return "unknown";
        }
        return filePath.substring(start + ".42c".length() + "scan".length() + 2, end - 1);
    }

    public static void offerUpgrade(@NotNull Project project) {
        final int rc = Messages.showOkCancelDialog(project, CONFIRM_MSG, "Upgrade",
                "Upgrade", "Cancel", Messages.getQuestionIcon());
        if (rc == Messages.OK) {
            BrowserUtil.browse("https://42crunch.com/github-upgrade/");
        }
    }
    
    @NotNull
    public static VirtualFile createScanConf(@NotNull Project project, @NotNull String scanConfPath, @NotNull String conf) throws IOException {
        File file = new File(scanConfPath);
        VirtualFile dir = FileUtils.makeDir(project, file.getParent());
        if (dir == null) {
            throw new IOException("Failed to create dir " + file.getParent());
        }
        FileUtils.writeFile(project, dir, file.getName(), QuickFix.formatFixText(conf, true));
        return dir;
    }

    @NotNull
    @SuppressWarnings({ "unchecked", "serial" })
    public static String getScanConfPath(@NotNull Project project, @NotNull String openapiPath, @NotNull String title) {
        String rootUri = getRootPath(project, openapiPath);
        String configPath = Paths.get(rootUri,".42c", "conf.yaml").toString();
        String relativeOasPath = relative(rootUri, openapiPath);
        Map<String, Object> config = Objects.requireNonNull(readConfigOrDefault(configPath));
        Map<String, Object> apis = (Map<String, Object>) config.get("apis");
        if (apis.get(relativeOasPath) == null) {
            Set<String> aliases = getAllAliases(apis);
            String uniqueAlias = getUniqueAlias(aliases, convertTitleToAlias(title));
            apis.put(relativeOasPath, new HashMap<>() {{
                put("alias", uniqueAlias);
            }});
            String configDirPath = Paths.get(rootUri,".42c").toString();
            if (!FileUtils.exists(configDirPath)) {
                FileUtils.makeDir(project, configDirPath);
            }
            writeConfig(project, configPath, Utils.serialize(config, false));
        }
        String alias = (String) ((Map<String, Object>) apis.get(relativeOasPath)).get("alias");
        String scanDirectoryAliasPath = Paths.get(rootUri, ".42c", "scan", alias).toString();
        if (!FileUtils.exists(scanDirectoryAliasPath)) {
            FileUtils.makeDir(project, scanDirectoryAliasPath);
        }
        return Paths.get(scanDirectoryAliasPath, "scanconf.json").toString();
    }
    
    @Nullable
    @SuppressWarnings("unchecked")
    public static String findScanConfPath(@NotNull Project project, @NotNull String openapiPath) {
        String rootUri = getRootPath(project, openapiPath);
        String configPath = Paths.get(rootUri,".42c", "conf.yaml").toString();
        String relativeOasPath = relative(rootUri, openapiPath);
        Map<String, Object> config = Objects.requireNonNull(readConfigOrDefault(configPath));
        Map<String, Object> apis = (Map<String, Object>) config.get("apis");
        if (apis.get(relativeOasPath) == null) {
            return null;
        }
        String alias = (String) ((Map<String, Object>) apis.get(relativeOasPath)).get("alias");
        String scanDirectoryAliasPath = Paths.get(rootUri, ".42c", "scan", alias).toString();
        return Paths.get(scanDirectoryAliasPath, "scanconf.json").toString();
    }

    public static boolean hasConfFile(@NotNull Project project, @NotNull String openapiPath) {
        String rootUri = getRootPath(project, openapiPath);
        String configPath = Paths.get(rootUri,".42c", "conf.yaml").toString();
        return FileUtils.exists(configPath);
    }
    
    private static void writeConfig(Project project, String configPath, String config) {
        File theFile = new File(configPath);
        String parent = theFile.getParent();
        VirtualFile dir = LocalFileSystem.getInstance().findFileByIoFile(new File(parent));
        if (dir != null) {
            try {
                FileUtils.writeFile(project, dir, theFile.getName(), QuickFix.formatFixText(config, false));
            } catch (IOException ignored) {
            }
        }
    }

    @SuppressWarnings("unchecked")
    private static Set<String> getAllAliases(Map<String, Object> apis) {
        Set<String> res = new HashSet<>();
        for (Object value : apis.values()) {
            Map<String, Object> alias = (Map<String, Object>) value;
            res.add((String) alias.get("alias"));
        }
        return res;
    }

    private static String getUniqueAlias(Set<String> aliases, String newAlias) {
        String uniqueAlias = newAlias;
        for (int count = 1; aliases.contains(uniqueAlias); count++) {
            uniqueAlias = newAlias + count;
        }
        return uniqueAlias;
    }

    private static String relative(String base, String path) {
        return new File(base).toURI().relativize(new File(path).toURI()).getPath();
    }

    @SuppressWarnings("unchecked")
    private static Map<String, Object> readConfigOrDefault(String configPath) {
        if (!FileUtils.exists(configPath)) {
            Map<String, Object> def = new HashMap<>();
            def.put("apis", new HashMap<>());
            return def;
        }
        refreshFile(configPath);
        String text = Utils.getTextFromFile(configPath, true);
        try {
            return new YAMLMapper().readValue(text, Map.class);
        } catch (JsonProcessingException e) {
            return null;
        }
    }

    private static String getRootPath(Project project, String openapiPath) {
        String gitRoot = getGitRoot(openapiPath);
        if (gitRoot != null) {
            return gitRoot;
        }
        String workspaceRoot = getWorkspaceFolder(project, openapiPath);
        if (workspaceRoot != null) {
            return workspaceRoot;
        }
        return new File(openapiPath).getParentFile().getPath();
    }

    @Nullable
    public static String getGitRoot(@NotNull String filePath) {
        for (File parent = new File(filePath).getParentFile(); parent != null; parent = parent.getParentFile()) {
            File gitDir = new File(parent, ".git");
            if (gitDir.exists()) {
                return parent.toString();
            }
        }
        return null;
    }

    private static String getWorkspaceFolder(Project project, String filePath) {
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
        if (file == null) {
            return null;
        }
        for (Module module : ModuleManager.getInstance(project).getModules()) {
            VirtualFile[] roots = ModuleRootManager.getInstance(module).getContentRoots();
            for (VirtualFile root : roots) {
                if (file.getPath().startsWith(root.getPath())) {
                    return root.getPath();
                }
            }
        }
        return null;
    }

    public static String convertTitleToAlias(@NotNull String title) {
        if (StringUtils.isEmpty(title)) {
            return "";
        }
        String[] segments = title.replaceAll("[^A-Za-z0-9_\\-\\\\.]", "-").toLowerCase().split("-+");
        if (segments.length == 1) {
            return segments[0];
        }
        List<String> tmp = new LinkedList<>();
        for (String segment : segments) {
            if (!StringUtils.isEmpty(segment)) {
                tmp.add(segment);
            }
        }
        String res = String.join("-", tmp);
        return (res.length() <= MAX_ALIAS_LENGTH) ? res : res.substring(0, MAX_ALIAS_LENGTH);
    }
}
