package com.xliic.openapi.bundler;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import org.apache.commons.lang.StringUtils;

import com.xliic.common.Workspace;
import com.xliic.openapi.utils.OpenAPIUtils;

public class OpenAPIWorkspace implements Workspace {

    private final Map<String, String> cache;
    private final URI workspace;
    
    public OpenAPIWorkspace(@NotNull Map<String, String> cache, String auditFileName) {
        this.cache = cache;
        this.workspace =  Paths.get(auditFileName).getParent().toUri();
    }
    
    @Override
    public URI resolve(String filename) {
        // check if the filename is absolute, and return URI if so
        Path filepath = Paths.get(filename);
        if(filepath.isAbsolute()) {
           return filepath.toUri();
        }

        // for relative filenames, resolve relative to the workspace
        // URI() constructor will handle the special chars
        try {
            return workspace.resolve(new URI(null, filename, null));
        } catch (URISyntaxException e) {
            throw new IllegalArgumentException(e.getMessage(), e);
        }
    }
    
    @Override
    public String read(URI uri) throws IOException {
        String text = OpenAPIUtils.getTextFromFile(uri);
        File file = new File(uri.getPath());
        if (StringUtils.isEmpty(text) || file == null) {
            throw new IOException("Failed to read URI " + uri);
        }
        cache.put(file.getPath(), text);
        return text;
    }

    @Override
    public boolean exists(URI uri) {
        File file = new File(uri);
        return file.exists();
    }

    @Override
    public URI relativize(URI uri) {
        return workspace.relativize(uri);
    }
}
