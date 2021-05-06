package com.xliic.openapi.services;

import com.xliic.openapi.snippets.Snippet;

public interface ISnippetService {

	void load();
	Snippet get(String id);
}
