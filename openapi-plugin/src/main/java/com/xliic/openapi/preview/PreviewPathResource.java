package com.xliic.openapi.preview;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileTime;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.eclipse.jetty.util.URIUtil;
import org.eclipse.jetty.util.resource.Resource;

public class PreviewPathResource extends Resource {

    private final Path path;
    private final URI uri;
    private Boolean alias;
    private Path realPath;

    public static boolean isSameName(Path pathA, Path pathB) {
        int aCount = pathA.getNameCount();
        int bCount = pathB.getNameCount();
        if (aCount != bCount) {
            return false;
        }
        for (int i = bCount; i-- > 0; ) {
            if (!pathA.getName(i).toString().equals(pathB.getName(i).toString())) {
                return false;
            }
        }
        return true;
    }

    public PreviewPathResource(Path path) {
        this(path, path.toUri(), true);
    }

    PreviewPathResource(Path path, URI uri, boolean bypassAllowedSchemeCheck) {
        if (!uri.isAbsolute()) {
            throw new IllegalArgumentException("not an absolute uri: " + uri);
        }
        if (!bypassAllowedSchemeCheck) {
            throw new IllegalArgumentException("not an allowed scheme: " + uri);
        }
        if (Files.isDirectory(path)) {
            String uriString = uri.toASCIIString();
            if (!uriString.endsWith("/")) {
                uri = URIUtil.correctURI(URI.create(uriString + "/"));
            }
        }
        this.path = path;
        this.uri = uri;
    }

    @Override
    public boolean exists() {
        if (alias == null) {
            return Files.exists(path);
        } else {
            if (realPath == null) {
                return false;
            }
            return Files.exists(realPath);
        }
    }

    @Override
    public Path getPath() {
        return path;
    }

    @Override
    public boolean contains(Resource other) {
        if (other == null) {
            return false;
        }
        Path thisPath = getPath();
        if (thisPath == null) {
            throw new UnsupportedOperationException("Resources without a Path must implement contains");
        }
        Path otherPath = other.getPath();
        return otherPath != null && otherPath.getFileSystem().equals(thisPath.getFileSystem()) && otherPath.startsWith(thisPath);
    }

    public Path getRealPath() {
        resolveAlias();
        return realPath;
    }

    @Override
    public URI getRealURI() {
        Path realPath = getRealPath();
        return (realPath == null) ? null : realPath.toUri();
    }

    public List<Resource> list() {
        if (!isDirectory()) {
            return List.of();
        }
        try (Stream<Path> dirStream = Files.list(getPath())) {
            return dirStream.map(PreviewPathResource::new).collect(Collectors.toCollection(ArrayList::new));
        } catch (Exception ignored) {
        }
        return List.of();
    }

    @Override
    public boolean isAlias() {
        resolveAlias();
        return alias != null && alias;
    }

    @Override
    public String getName() {
        return path.toAbsolutePath().toString();
    }

    @Override
    public String getFileName() {
        Path fn = path.getFileName();
        if (fn == null) {
            return "";
        }
        return fn.toString();
    }

    @Override
    public URI getURI() {
        return this.uri;
    }

    @Override
    public Resource resolve(String subUriPath) {
        if (URIUtil.isNotNormalWithinSelf(subUriPath)) {
            throw new IllegalArgumentException(subUriPath);
        }
        if ("/".equals(subUriPath)) {
            return this;
        }
        URI uri = getURI();
        URI resolvedUri = URIUtil.addPath(uri, subUriPath);
        Path path = Paths.get(resolvedUri);
        return newResource(path, resolvedUri);
    }

    protected Resource newResource(Path path, URI uri) {
        return new PreviewPathResource(path, uri, true);
    }

    @Override
    public boolean isDirectory() {
        return Files.isDirectory(getPath());
    }

    @Override
    public boolean isReadable() {
        return Files.isReadable(getPath());
    }

    @Override
    public Instant lastModified() {
        Path path = getPath();
        if (path == null || !Files.exists(path)) {
            return Instant.EPOCH;
        }
        try {
            FileTime ft = Files.getLastModifiedTime(path, LinkOption.NOFOLLOW_LINKS);
            return ft.toInstant();
        } catch (IOException e) {
            return Instant.EPOCH;
        }
    }

    @Override
    public long length() {
        try {
            return Files.size(getPath());
        } catch (IOException e) {
            return -1L;
        }
    }

    private void resolveAlias() {
        if (alias == null) {
            try {
                realPath = path.toRealPath();
            } catch (Exception e) {
                return;
            }
            alias = !isSameName(path, realPath) || !Objects.equals(uri, toUri(realPath));
        }
    }

    protected URI toUri(Path path) {
        URI pathUri = path.toUri();
        String rawUri = pathUri.toASCIIString();
        if (Files.isDirectory(path) && !rawUri.endsWith("/")) {
            return URI.create(rawUri + '/');
        }
        return pathUri;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        PreviewPathResource other = (PreviewPathResource)obj;
        return Objects.equals(path, other.path) && Objects.equals(uri, other.uri);
    }

    @Override
    public int hashCode() {
        return Objects.hash(path, uri);
    }

    @Override
    public String toString() {
        return this.uri.toASCIIString();
    }
}
