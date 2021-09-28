package com.xliic.openapi.services;

import java.util.List;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;

public interface IDataService {

	Audit removeAuditReport(String fileName);

	void setAuditReport(String fileName, Audit audit);

	boolean hasAuditReport(String fileName);

	Audit getAuditReport(String fileName);

	List<Issue> getIssuesForAuditParticipantFileName(String fileName);

	List<Audit> getAuditReportsForAuditParticipantFileName(String fileName);

	ParserData getParserData(String fileName);

	void setParserData(String fileName, ParserData data);

	ParserData removeParserData(String fileName);

	boolean hasParserData(String fileName);

	FileProperty getFileProperty(String fileName);

	void setFileProperty(String fileName, FileProperty data);

	FileProperty removeFileProperty(String fileName);

	boolean hasFileProperty(String fileName);

	boolean isAuditParticipantFile(String fileName);

	void handleFileNameChanged(VirtualFile newFile, String oldFileName);
}
