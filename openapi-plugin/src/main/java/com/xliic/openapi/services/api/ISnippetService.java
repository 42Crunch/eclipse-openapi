package com.xliic.openapi.services.api;

import com.xliic.openapi.snippets.Snippet;

public interface ISnippetService {

	public void load();

	public Snippet get(String id);
}
