package com.xliic.openapi.services.api;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.dictionary.completion.DictionaryElement;
import com.xliic.openapi.platform.dictionary.types.DataDictionary;
import com.xliic.openapi.platform.dictionary.types.DataFormat;

public interface IDictionaryService {

    void setFormatNodes(@NotNull String fileName, @NotNull List<Node> nodes);

    List<Node> getFormatNodes(@NotNull String fileName);

    void removeFormatNodes(@NotNull String fileName);

    void reload(boolean redraw);

    void reload(boolean redraw, boolean register);

    List<DataDictionary> getDictionaries();

    List<DictionaryElement> getAllFormats(boolean isJson);

    DataFormat get(@NotNull String formatName, boolean isJson);

    void createOrActiveDictionaryWindow(@NotNull Project project, boolean register);
}
