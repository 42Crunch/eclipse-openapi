package com.crunch42.openapi.services;

import com.crunch42.openapi.snippets.Snippet;

public interface ISnippetService {

	void load();
	Snippet get(String id);
}
