package com.xliic.openapi.services;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.parser.tree.ParserData;

public interface IParserService {

	ParserData parse(@NotNull String text, @NotNull OpenApiFileType fileType);
}
