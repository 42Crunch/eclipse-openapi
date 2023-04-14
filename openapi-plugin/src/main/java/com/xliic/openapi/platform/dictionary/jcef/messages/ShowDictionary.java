package com.xliic.openapi.platform.dictionary.jcef.messages;

import com.xliic.openapi.platform.dictionary.types.DataDictionary;
import com.xliic.openapi.platform.dictionary.types.DataFormat;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.*;

public class ShowDictionary extends WebAppConsume {

    @NotNull
    private final List<DataDictionary> dictionaries;

    public ShowDictionary(@NotNull List<DataDictionary> dictionaries) {
        super("showDictionary");
        this.dictionaries = dictionaries;
    }

    @Override
    protected @Nullable List<Map<String, Object>> getPayload() {
        List<Map<String, Object>> payload = new LinkedList<>();
        for (DataDictionary dictionary : dictionaries) {
            Map<String, Object> result = new HashMap<>();
            result.put("id", dictionary.getId());
            result.put("name", dictionary.getName());
            result.put("description", dictionary.getDescription());
            result.put("formats", getFormatsProperties(dictionary));
            payload.add(result);
        }
        return payload;
    }

    private static Map<String, Map<String, Object>> getFormatsProperties(DataDictionary dictionary) {
        Map<String, DataFormat> formats = dictionary.getFormats();
        List<String> keys = new LinkedList<>(formats.keySet());
        Collections.sort(keys);
        Map<String, Map<String, Object>> result = new LinkedHashMap<>();
        for (String key : keys) {
            result.put(key, formats.get(key).getProperties());
        }
        return result;
    }
}
