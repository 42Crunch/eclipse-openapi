package com.xliic.openapi.services;

import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.services.IDisposable;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.parser.tree.TreeJSONParser;
import com.xliic.openapi.parser.tree.TreeYAMLParser;

public final class ParserService implements IParserService, IDisposable {

	private TreeJSONParser treeJSONParser = new TreeJSONParser();
	private TreeYAMLParser treeYAMLParser = new TreeYAMLParser();

	public static ParserService getInstance(Project project) {
		return (ParserService) PlatformUI.getWorkbench().getService(IParserService.class);
	}

	@Override
	public ParserData parse(@NotNull String text, @NotNull OpenApiFileType fileType) {
		try {
			if (fileType == OpenApiFileType.Json) {
				return treeJSONParser.parse(text);
			} else if (fileType == OpenApiFileType.Yaml) {
				return treeYAMLParser.parse(text);
			} else {
				return new ParserData("Incorrect file type " + fileType);
			}
		} catch (Exception e) {
			return new ParserData(e.getMessage());
		}
	}

	@Override
	public void dispose() {
		treeJSONParser = null;
		treeYAMLParser = null;
	}
}