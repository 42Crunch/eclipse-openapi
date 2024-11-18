package com.xliic.openapi.tags;

import java.util.HashMap;
import java.util.Map;

import com.xliic.core.persistence.Converter;
import com.xliic.core.persistence.State;

public class TagsState extends State<Map<String, Object>> {

	private static final String STORAGE = "xliicPersistentTagsState";
	private static final Converter<Map<String, Object>> CONVERTER = new TagsStateConverter();

    public final Map<String, Object> tagData = new HashMap<>();

	@Override
	protected Map<String, Object> getDataToSave() {
		return tagData;
	}

	@Override
	protected void restore(Map<String, Object> data) {
		tagData.clear();
		tagData.putAll(data);
	}

	@Override
	protected String getStorageName() {
		return STORAGE;
	}

	@Override
	protected Converter<Map<String, Object>> getConverter() {
		return CONVERTER;
	}
}
