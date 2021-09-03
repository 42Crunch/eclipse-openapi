package com.xliic.openapi.services;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.services.IDisposable;

import com.xliic.openapi.OpenApiFileType;
import com.xliic.idea.project.Project;
import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.parser.pointer.PointerToLocationJSONParser;
import com.xliic.openapi.parser.pointer.PointerToLocationYAMLParser;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.parser.tree.TreeJSONParser;
import com.xliic.openapi.parser.tree.TreeYAMLParser;

public final class ParserService implements IParserService, IDisposable {

    private TreeJSONParser treeJSONParser = new TreeJSONParser();
    private TreeYAMLParser treeYAMLParser = new TreeYAMLParser();
    private PointerToLocationJSONParser pointerToLocationJSONParser = new PointerToLocationJSONParser();
    private PointerToLocationYAMLParser pointerToLocationYAMLParser = new PointerToLocationYAMLParser();

    public static ParserService getInstance(Project project) {
    	return (ParserService) PlatformUI.getWorkbench().getService(IParserService.class);  
    }
    
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
