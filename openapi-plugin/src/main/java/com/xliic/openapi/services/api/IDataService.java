package com.xliic.openapi.services.api;

import java.util.List;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;

public interface IDataService {

	public Audit removeAuditReport(String fileName);

	public void setAuditReport(String fileName, Audit audit);

	public boolean hasAuditReport(String fileName);

	public Audit getAuditReport(String fileName);

	public List<Issue> getIssuesForAuditParticipantFileName(String fileName);

	public List<Audit> getAuditReportsForAuditParticipantFileName(String fileName);

	public ParserData getParserData(String fileName);

	public void setParserData(String fileName, ParserData data);

	public ParserData removeParserData(String fileName);

	public boolean hasParserData(String fileName);

	public FileProperty getFileProperty(String fileName);

	public void setFileProperty(String fileName, FileProperty data);

	public FileProperty removeFileProperty(String fileName);

	public boolean hasFileProperty(String fileName);

	public boolean isAuditParticipantFile(String fileName);

	public void handleFileNameChanged(VirtualFile newFile, String oldFileName);
}
