package com.xliic.openapi.preview;

import com.xliic.openapi.bundler.OpenAPIWorkspace;
import com.xliic.openapi.listeners.PreviewDocumentListener;
import com.xliic.common.Workspace;
import com.xliic.openapi.bundler.Bundler;
import com.xliic.openapi.bundler.Parser;
import com.xliic.openapi.bundler.Serializer;
import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.PropertiesComponent;
import com.xliic.idea.document.Document;
import com.xliic.idea.editor.FileEditorManager;
import com.xliic.idea.file.LocalFileSystem;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.idea.project.ProjectLocator;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.*;

public class PreviewUtils {

    public final static int DEFAULT_SERVER_PORT = 61112;
    public final static int DEFAULT_RENDERER_INDEX = 0;

    public final static String RENDERER_SWAGGERUI = "swaggerui";
    public final static String RENDERER_REDOC = "redoc";

    public static String getQuery(String canonicalPath, int rendererIndex) {
        return "filename=" + canonicalPath + "&renderer=" + rendererIndex;
    }

    public static String getCanonicalPathFromQuery(String query) {
        return query.split("&")[0].split("=")[1];
    }

    public static int getRendererIndexFromQuery(String query) {
        return Integer.parseInt(query.split("&")[1].split("=")[1]);
    }

    public static boolean isPortInRange(int port) {
        return (port >= 0) && (port <= 65535);
    }

    public static URL getURL(VirtualFile file, int rendererIndex) throws MalformedURLException {

        int port = PropertiesComponent.getInstance().getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT);
        String renderer = (rendererIndex == 0) ? RENDERER_SWAGGERUI : RENDERER_REDOC;
        String query = getQuery(file.getCanonicalPath(), rendererIndex);

        return new URL("http://localhost:" + port + "/" + renderer + ".html?" + query);
    }

    public static String getTextFromBundler(String canonicalPath, Map<String, String> cache) throws Exception {

        Workspace workspace = new OpenAPIWorkspace(cache, canonicalPath);
        Parser parser = new Parser(workspace);
        Serializer serializer = new Serializer();
        Bundler bundler = new Bundler(parser, serializer);
        com.xliic.openapi.bundler.Document document = parser.parse(workspace.resolve(canonicalPath));
        bundler.bundle(document);

        return serializer.serialize(document);
    }

    public static boolean isFileOpenedAnywhere(VirtualFile file) {

        Collection<Project> projects = ProjectLocator.getInstance().getProjectsForFile(file);
        for (Project project : projects) {
            for (VirtualFile openFile : FileEditorManager.getInstance(project).getOpenFiles()) {
                if (Objects.equals(file.getCanonicalPath(), openFile.getCanonicalPath())) {
                    return true;
                }
            }
        }
        return false;
    }

    public static Map<String, PreviewDocumentListener> addListeners(String query, Set<String> bundledFiles) {

        Map<String, PreviewDocumentListener> listeners = new HashMap<>();

        for (String bundledFile : bundledFiles) {

            listeners.put(bundledFile, null);
            VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(bundledFile));
            if (file == null) {
                continue;
            }

            if (isFileOpenedAnywhere(file)) {
                Document document = FileDocumentManager.getInstance().getDocument(file);
                if (document != null) {
                    listeners.put(bundledFile, new PreviewDocumentListener(query, listeners));
                    document.addDocumentListener(listeners.get(bundledFile));
                }
            }
        }

        return listeners;
    }

    public static void clearListeners(Map<String, PreviewDocumentListener> listeners) {

        if (listeners == null) {
            return;
        }

        for (Map.Entry<String, PreviewDocumentListener> item : listeners.entrySet()) {

            PreviewDocumentListener listener = item.getValue();
            if (listener == null) {
                continue;
            }

            String bundledFile = item.getKey();
            VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(bundledFile));
            if (file == null) {
                continue;
            }

            Document document = FileDocumentManager.getInstance().getDocument(file);
            if (document != null) {
                document.removeDocumentListener(listener);
            }
        }
    }
}
