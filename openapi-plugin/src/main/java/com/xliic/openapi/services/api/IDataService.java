package com.xliic.openapi.services.api;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.parser.tree.ParserData;

public interface IDataService {

	public ParserData getParserData(String fileName);

	public void setParserData(String fileName, ParserData data);

	public ParserData removeParserData(String fileName);

	public boolean hasParserData(String fileName);

	public FileProperty getFileProperty(String fileName);

	public void setFileProperty(String fileName, FileProperty data);

	public FileProperty removeFileProperty(String fileName);

	public boolean hasFileProperty(String fileName);

	public void handleFileNameChanged(VirtualFile newFile, String oldFileName);
}
