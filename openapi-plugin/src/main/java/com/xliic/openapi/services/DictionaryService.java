package com.xliic.openapi.services;

import static com.xliic.openapi.ToolWindowId.PLATFORM_DICTIONARY;

import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.application.ModalityState;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.async.AsyncTaskType;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.callback.SuccessASTResponseCallback;
import com.xliic.openapi.platform.dictionary.DictionaryReloadCallback;
import com.xliic.openapi.platform.dictionary.completion.DictionaryElement;
import com.xliic.openapi.platform.dictionary.types.DataDictionary;
import com.xliic.openapi.platform.dictionary.types.DataFormat;
import com.xliic.openapi.services.api.IDictionaryService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.topic.SettingsListener;

public final class DictionaryService implements IDictionaryService, SettingsListener, Disposable {

    private static final List<DataDictionary> EMPTY_DICTIONARIES = new LinkedList<>();
    private static final List<Node> EMPTY_FORMAT_NODES = new LinkedList<>();
    private static final List<DictionaryElement> EMPTY_FORMATS = new LinkedList<>();

    private final Project project;
    private final List<DataDictionary> dictionaries = new LinkedList<>();
    private final AtomicInteger counter = new AtomicInteger(-1);
    private final Map<String, List<Node>> cache = Collections.synchronizedMap(new HashMap<>());

    public DictionaryService(@NotNull Project project) {
        this.project = project;
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    public static DictionaryService getInstance(@NotNull Project project) {
        return project.getService(DictionaryService.class);
    }

    @Override
    public void setFormatNodes(@NotNull String fileName, @NotNull List<Node> nodes) {
        cache.put(fileName, nodes);
    }

    @Override
    @NotNull
    public List<Node> getFormatNodes(@NotNull String fileName) {
        List<Node> nodes = cache.get(fileName);
        return nodes == null ? EMPTY_FORMAT_NODES : nodes;
    }

    @Override
    public void removeFormatNodes(@NotNull String fileName) {
        cache.remove(fileName);
    }

    @Override
    public void reload(boolean redraw) {
        reload(redraw, true);
    }

    @Override
    public void reload(boolean redraw, boolean register) {
        counter.set(-1);
        dictionaries.clear();
        PlatformAPIs.getDataDictionaries(new SuccessASTResponseCallback(project, false) {
            @Override
            public void onCode200ASTResponse(@NotNull Node node) {
                Node target = node.find("/list");
                if (target != null && !target.getChildren().isEmpty()) {
                    DictionaryReloadCallback callback = () -> {
                        if (redraw) {
                            createOrActiveDictionaryWindow(project, register);
                        }
                        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
                        if (file != null) {
                            ASTService astService = ASTService.getInstance(project);
                            astService.runAsyncTask(project, AsyncTaskType.RUN_TREE_DFS, file);
                        }
                    };
                    for (Node child : target.getChildren()) {
                        String id = child.getChildValue("id");
                        String name = child.getChildValue("name");
                        String desc = child.getChildValue("description");
                        DataDictionary dd = new DataDictionary(id, name, desc, project, counter, callback);
                        dictionaries.add(dd);
                    }
                    counter.set(dictionaries.size());
                    for (DataDictionary dd : dictionaries) {
                        PlatformAPIs.getDataDictionaryFormats(dd.getId(), dd);
                    }
                }
            }

            @Override
            public void onFailure(@NotNull String reason) {
                counter.set(0);
            }
        });
    }

    @Override
    @NotNull
    public List<DataDictionary> getDictionaries() {
        return counter.get() == 0 ? dictionaries : EMPTY_DICTIONARIES;
    }

    @Override
    @NotNull
    public List<DictionaryElement> getAllFormats() {
        if (counter.get() == 0) {
            List<DictionaryElement> result = new LinkedList<>();
            for (DataDictionary d : dictionaries) {
                for (Map.Entry<String, DataFormat> entry : d.getFormats().entrySet()) {
                    String element = "o:" + d.getName() + ":" + entry.getKey();
                    String presentableText = d.isStandard() ? entry.getKey() : element;
                    Object desc = entry.getValue().get("description");
                    String withTypeText = desc == null ? "" : (String) desc;
                    result.add(new DictionaryElement(element, presentableText, withTypeText));
                }
            }
            result.sort(Comparator.comparing(DictionaryElement::getPresentableText));
            return result;
        } else {
            return EMPTY_FORMATS;
        }
    }

    @Override
    @Nullable
    public DataFormat get(@NotNull String formatName) {
        if (counter.get() == 0) {
            // formatName = o:${dictionary.name}:${format.name}
            if (formatName.startsWith("o:")) {
                for (DataDictionary d : dictionaries) {
                    if (formatName.startsWith("o:" + d.getName())) {
                        for (Map.Entry<String, DataFormat> entry : d.getFormats().entrySet()) {
                            if (formatName.equals("o:" + d.getName() + ":" + entry.getKey())) {
                                return entry.getValue();
                            }
                        }
                    }
                }
            } else {
                for (DataDictionary d : dictionaries) {
                    if (d.isStandard()) {
                        for (Map.Entry<String, DataFormat> entry : d.getFormats().entrySet()) {
                            if (formatName.equals(entry.getKey())) {
                                return entry.getValue();
                            }
                        }
                    }
                }
            }
        }
        return null;
    }

    @Override
    public void createOrActiveDictionaryWindow(@NotNull Project project, boolean register) {
        ApplicationManager.getApplication().invokeAndWait(() -> {
            ToolWindow toolWindow = ToolWindowManager.getInstance(project).getToolWindow(PLATFORM_DICTIONARY);
            if (toolWindow == null && !register) {
                return;
            }
            OpenApiUtils.activateToolWindow(project, PLATFORM_DICTIONARY);
            project.getMessageBus().syncPublisher(PlatformListener.TOPIC).reloadDictionary();
        }, ModalityState.NON_MODAL);
    }

    @Override
    public void dispose() {
        project.getMessageBus().connect().unsubscribe(this);
        cache.clear();
        dictionaries.clear();
    }

    @Override
    public void propertiesUpdated(@NotNull String key) {
        if (Settings.isPlatformKey(key) && !project.isDisposed()) {
            ToolWindowManager manager = ToolWindowManager.getInstance(project);
            if (PlatformConnection.isEmpty()) {
                ToolWindow window = manager.getToolWindow(PLATFORM_DICTIONARY);
                if (window != null && !window.isDisposed()) {
                    window.remove();
                }
                dispose();
            } else {
                reload(false);
            }
        }
    }
}
