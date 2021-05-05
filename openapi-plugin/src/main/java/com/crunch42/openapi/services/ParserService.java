package com.crunch42.openapi.services;

import com.crunch42.openapi.OpenApiFileType;
import com.crunch42.openapi.parser.pointer.Location;
import com.crunch42.openapi.parser.pointer.PointerToLocationJSONParser;
import com.crunch42.openapi.parser.pointer.PointerToLocationYAMLParser;
import com.crunch42.openapi.parser.tree.*;

import org.eclipse.ui.services.IDisposable;
import javax.validation.constraints.NotNull;

import java.util.HashMap;
import java.util.Map;

public final class ParserService implements IParserService, IDisposable {

    private TreeJSONParser treeJSONParser = new TreeJSONParser();
    private TreeYAMLParser treeYAMLParser = new TreeYAMLParser();
    private PointerToLocationJSONParser pointerToLocationJSONParser = new PointerToLocationJSONParser();
    private PointerToLocationYAMLParser pointerToLocationYAMLParser = new PointerToLocationYAMLParser();

    public Map<String, Location> parsePointerToLocationMap(@NotNull String text,
                                                           @NotNull OpenApiFileType fileType) {
        try {
            if (fileType == OpenApiFileType.Json) {
                return pointerToLocationJSONParser.parse(text);
            }
            else if (fileType == OpenApiFileType.Yaml) {
                return pointerToLocationYAMLParser.parse(text);
            } else {
                return new HashMap<>();
            }
        }
        catch (Exception ignored) {
            return new HashMap<>();
        }
    }

    public ParserData parse(@NotNull String text, @NotNull OpenApiFileType fileType) {
        try {
            if (fileType == OpenApiFileType.Json) {
                return treeJSONParser.parse(text);
            }
            else if (fileType == OpenApiFileType.Yaml) {
                return treeYAMLParser.parse(text);
            } else {
                return new ParserData("Incorrect file type " + fileType);
            }
        }
        catch (Exception e) {
            return new ParserData(e.getMessage());
        }
    }

    @Override
    public void dispose() {
        treeJSONParser = null;
        treeYAMLParser = null;
        pointerToLocationJSONParser = null;
        pointerToLocationYAMLParser = null;
    }
}
