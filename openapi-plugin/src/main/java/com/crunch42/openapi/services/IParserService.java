package com.crunch42.openapi.services;

import java.util.Map;

import com.crunch42.openapi.OpenApiFileType;
import com.crunch42.openapi.parser.pointer.Location;
import com.crunch42.openapi.parser.tree.ParserData;

import javax.validation.constraints.NotNull;

public interface IParserService {
	
    Map<String, Location> parsePointerToLocationMap(@NotNull String text, @NotNull OpenApiFileType fileType);
    ParserData parse(@NotNull String text, @NotNull OpenApiFileType fileType);
}
