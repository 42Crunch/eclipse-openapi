package com.xliic.openapi.bundler;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.services.ExtRefService;
import org.jetbrains.annotations.NotNull;

import java.io.File;
import java.net.URI;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;

public class BundleLocation {

    private final VirtualFile file;
    private final String pointer;
    private final URI uri;

    public BundleLocation() {
        file = null;
        pointer = null;
        uri = null;
    }

    public BundleLocation(String fileName, String pointer) {
        file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
        this.pointer = pointer;
        uri = null;
    }

    public BundleLocation(@NotNull Project project, String rootFileName, URI uri, String pointer) {
        if (ExtRef.isExtRef(uri)) {
            ExtRefService extRefService = ExtRefService.getInstance(project);
            ExtRef extRef = extRefService.get(uri);
            file = (extRef == null) ? null : extRef.getVirtualFile();
            this.uri = uri;
        }
        else {
            if (uri.isAbsolute()) {
                file = LocalFileSystem.getInstance().findFileByIoFile(new File(uri));
            } else {
                File directory = new File(Paths.get(rootFileName).getParent().toString());
                String fileName = URLDecoder.decode(uri.toString(), StandardCharsets.UTF_8);
                file = LocalFileSystem.getInstance().findFileByIoFile(new File(directory, fileName));
            }
            this.uri = null;
        }
        this.pointer = pointer;
    }

    public VirtualFile getFile() {
        return file;
    }

    public String getPointer() {
        return pointer;
    }

    public URI getUri() {
        return uri;
    }

    public boolean isValid() {
        return file != null;
    }
}
