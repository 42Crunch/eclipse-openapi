package com.xliic.openapi.services;

import static com.xliic.openapi.ToolWindowId.PLATFORM_DICTIONARY;
import static com.xliic.openapi.platform.dictionary.types.DataDictionary.FORMAT_PREFIX;
import static com.xliic.openapi.platform.dictionary.types.DataDictionary.STANDARD_DESC;
import static com.xliic.openapi.platform.dictionary.types.DataDictionary.STANDARD_ID;
import static com.xliic.openapi.platform.dictionary.types.DataFormat.X_42C_FORMAT;
import static com.xliic.openapi.platform.dictionary.types.DataFormat.isStandardName;

import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.async.AsyncTaskType;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.callback.SuccessASTResponseCallback;
import com.xliic.openapi.platform.dictionary.DictionaryReloadCallback;
import com.xliic.openapi.platform.dictionary.completion.DictionaryElement;
import com.xliic.openapi.platform.dictionary.types.DataDictionary;
import com.xliic.openapi.platform.dictionary.types.DataFormat;
import com.xliic.openapi.services.api.IDictionaryService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.Settings.Platform;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;

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
    }

    public static DictionaryService getInstance(@NotNull Project project) {
        return project.getService(DictionaryService.class);
    }

    public void subscribe() {
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
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
                if (target != null) {
                    DictionaryReloadCallback callback = () -> {
                        if (redraw) {
                            createOrActiveDictionaryWindow(project, register);
                        }
                        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
                        if (file != null) {
                            ASTService astService = ASTService.getInstance(project);
                            astService.runAsyncTask(project, AsyncTaskType.RUN_TREE_DFS, file);
                        }
                        EclipseWorkbenchUtil.updateActionBarsInSWTThread();
                    };
                    for (Node child : target.getChildren()) {
                        try {
                            String id = Objects.requireNonNull(child.getChildValue("id"));
                            String name = Objects.requireNonNull(child.getChildValue("name"));
                            String desc = Objects.requireNonNull(child.getChildValue("description"));
                            DataDictionary dd = new DataDictionary(id, name, desc, project, counter, callback);
                            dictionaries.add(dd);
                        } catch (Throwable e) {
                            e.printStackTrace();
                        }
                    }
                    dictionaries.add(new DataDictionary(STANDARD_ID, STANDARD_ID, STANDARD_DESC, project, counter, callback));
                    Collections.sort(dictionaries);
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
    public List<DictionaryElement> getAllFormats(boolean isJson) {
        if (counter.get() == 0) {
            List<DictionaryElement> result = new LinkedList<>();
            for (DataDictionary d : dictionaries) {
                for (Map.Entry<String, DataFormat> entry : d.getFormats().entrySet()) {
                    String element = (String) entry.getValue().get(X_42C_FORMAT, isJson);
                    if (element != null) {
                        String presentableText = d.isStandard() ? entry.getKey() : element;
                        Object desc = entry.getValue().get("description", isJson);
                        String withTypeText = desc == null ? "" : (String) desc;
                        result.add(new DictionaryElement(element, presentableText, withTypeText, d.isStandard()));
                    }
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
    public DataFormat get(@NotNull String formatName, boolean isJson) {
        if (counter.get() == 0) {
            // formatName = ${format.name}, o:${format.name}, o:${dictionary.name}:${format.name}
            boolean standard = isStandardName(formatName);
            String x42Format = (formatName.startsWith(FORMAT_PREFIX) ? "" : FORMAT_PREFIX) + formatName;
            for (DataDictionary d : dictionaries) {
                if (standard && !d.isStandard()) {
                    continue;
                }
                for (DataFormat df : d.getFormats().values()) {
                    if (x42Format.equals(df.get(X_42C_FORMAT, isJson))) {
                        return df;
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
            WindowUtils.activateToolWindow(project, PLATFORM_DICTIONARY, () ->
                project.getMessageBus().syncPublisher(PlatformListener.TOPIC).reloadDictionary(getDictionaries()));
        });
    }

    @Override
    public void dispose() {
        project.getMessageBus().connect().unsubscribe(this);
        cache.clear();
        dictionaries.clear();
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (Settings.hasPlatformKey(keys) && !project.isDisposed()) {
            if (keys.contains(Platform.TURNED_OFF)) {
                cache.clear();
                dictionaries.clear();
                ToolWindow window = ToolWindowManager.getInstance(project).getToolWindow(PLATFORM_DICTIONARY);
                if (window != null && !window.isDisposed()) {
                    window.remove();
                }
            } else {
                reload(false);
            }
        }
    }
}
