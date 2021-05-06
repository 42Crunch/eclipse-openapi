package com.xliic.openapi.services;

import java.util.Map;

import javax.validation.constraints.NotNull;

import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.parser.tree.ParserData;

public interface IParserService {
	
    Map<String, Location> parsePointerToLocationMap(@NotNull String text, @NotNull OpenApiFileType fileType);
    ParserData parse(@NotNull String text, @NotNull OpenApiFileType fileType);
}
