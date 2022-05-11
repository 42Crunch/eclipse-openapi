package com.xliic.openapi.services;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.services.IDisposable;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.api.IDataService;

public class DataService implements IDataService, IDisposable {

	private Map<String, ParserData> parserDataContext = new HashMap<>();
	private Map<String, FileProperty> fileContext = new HashMap<>();

	public DataService(@NotNull Project project) {
	}

	public static DataService getInstance(Project project) {
		return (DataService) PlatformUI.getWorkbench().getService(IDataService.class);
	}
	
	@Override
    public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {
        if (hasParserData(oldFileName)) {
            setParserData(newFile.getPath(), removeParserData(oldFileName));
        }
        if (hasFileProperty(oldFileName)) {
            setFileProperty(newFile.getPath(), removeFileProperty(oldFileName));
        }
    }

	@Override
	public ParserData getParserData(String fileName) {
		return parserDataContext.get(fileName);
	}

	@Override
	public void setParserData(String fileName, ParserData data) {
		parserDataContext.put(fileName, data);
	}

	@Override
	public ParserData removeParserData(String fileName) {
		return parserDataContext.remove(fileName);
	}

	@Override
	public boolean hasParserData(String fileName) {
		return parserDataContext.containsKey(fileName);
	}

	@Override
	public FileProperty getFileProperty(String fileName) {
		return fileContext.get(fileName);
	}

	@Override
	public void setFileProperty(String fileName, FileProperty data) {
		fileContext.put(fileName, data);
	}

	@Override
	public FileProperty removeFileProperty(String fileName) {
		return fileContext.remove(fileName);
	}

	@Override
	public boolean hasFileProperty(String fileName) {
		return fileContext.containsKey(fileName);
	}

	@Override
	public void dispose() {
		parserDataContext = null;
		fileContext = null;
	}
}
