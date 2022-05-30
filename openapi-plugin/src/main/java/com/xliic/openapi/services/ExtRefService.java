package com.xliic.openapi.services;

import com.xliic.common.WorkspaceException;
import com.xliic.core.Disposable;
import com.xliic.core.ide.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiElement;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.api.IExtRefService;
import com.xliic.openapi.settings.AuditKeys;
import org.apache.commons.lang.StringUtils;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import static com.xliic.openapi.OpenApiUtils.REF_DELIMITER;

public class ExtRefService implements IExtRefService, Disposable {

    private final Project project;
    private final Map<String, ExtRef> cache;

    public ExtRefService(@NotNull final Project project) {
        this.project = project;
        cache = new HashMap<>();
    }

    public static ExtRefService getInstance(@NotNull Project project) {
        return (ExtRefService) PlatformUI.getWorkbench().getService(IExtRefService.class);
    }

    @Nullable
    public ExtRef getExtRef(@NotNull VirtualFile file) {
    	for (ExtRef extRef : cache.values()) {
    		if (file.equals(extRef.getVirtualFile())) {
    			return extRef;
    		}
    	}
    	return null;
    }

    public @NotNull ExtRef getOrCreate(URI uri, String rootFileName) throws WorkspaceException, IOException {
        URL url = uri.toURL();
        String key = url.toString();
        if (!cache.containsKey(key)) {
            cache.put(key, new ExtRef(project, url, rootFileName));
        }
        return cache.get(key);
    }

    public ExtRef get(URI uri) {
        try {
            return cache.get(uri.toURL().toString());
        }
        catch (MalformedURLException ignored) {}
        return null;
    }

    public ExtRef get(String url) {
        return cache.get(url);
    }

    public void clear(Set<String> activeURLs) {
        for (String url : new HashSet<>(cache.keySet())) {
            if (!activeURLs.contains(url)) {
                ExtRef extRef = cache.remove(url);
                extRef.dispose();
            }
        }
    }

    public PsiElement getPsiElement(String ref) {
        if (ref.contains(REF_DELIMITER)) {
            String [] parts = ref.split(REF_DELIMITER);
            return getPsiElement(parts[0], "/" + parts[1]);
        }
        return getPsiElement(ref, StringUtils.EMPTY);
    }

    public PsiElement getPsiElement(String url, String pointer) {
        if (cache.containsKey(url)) {
            ExtRef extRef = cache.get(url);
            VirtualFile extRefFile = extRef.getVirtualFile();
            Node root = ASTService.getInstance(project).getRootNode(extRefFile);
            Node target = root.find(pointer);
            if (target != null) {
                PsiFile psiFile = PsiManager.getInstance(project).findFile(extRefFile);
                if (psiFile != null) {
                    return psiFile.findElementAt(target.getRange().getStartOffset());
                }
            }
        }
        return null;
    }

    public boolean isSafe(URI uri) {
        return isSafe(uri.getAuthority());
    }

    public boolean isSafe(String hostname) {
        String [] hosts = PropertiesComponent.getInstance().getValues(AuditKeys.HOSTS);
        if (hosts == null) {
            return false;
        }
        for (String host : hosts) {
            if (host.equalsIgnoreCase(hostname)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void dispose() {
        for (ExtRef extRef : cache.values()) {
            extRef.dispose();
        }
        cache.clear();
    }
}
