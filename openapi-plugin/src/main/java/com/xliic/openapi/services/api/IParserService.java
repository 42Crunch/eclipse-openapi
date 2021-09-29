package com.xliic.openapi.services.api;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.parser.tree.ParserData;

public interface IParserService {

	public ParserData parse(@NotNull String text, @NotNull OpenApiFileType fileType);
}
