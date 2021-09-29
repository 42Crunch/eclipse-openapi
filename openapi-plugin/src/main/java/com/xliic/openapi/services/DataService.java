package com.xliic.openapi.services;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.services.IDisposable;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.api.IDataService;

public class DataService implements IDataService, IDisposable {

	private Map<String, Audit> auditContext = new HashMap<>();
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
		if (hasAuditReport(oldFileName)) {
			setAuditReport(newFile.getPath(), removeAuditReport(oldFileName));
		}
		if (!auditContext.isEmpty()) {
			for (Audit audit : auditContext.values()) {
				audit.handleFileNameChanged(newFile, oldFileName);
			}
		}
	}

	@Override
	public List<Issue> getIssuesForAuditParticipantFileName(String fileName) {
		List<Issue> issues = new LinkedList<>();
		for (Audit audit : auditContext.values()) {
			issues.addAll(audit.getIssuesForAuditParticipantFileName(fileName));
		}
		return issues;
	}

	@Override
	public List<Audit> getAuditReportsForAuditParticipantFileName(String fileName) {
		List<Audit> reports = new LinkedList<>();
		for (Audit audit : auditContext.values()) {
			if (audit.hasAuditParticipantFileName(fileName)) {
				reports.add(audit);
			}
		}
		return reports;
	}

	@Override
	public void setAuditReport(String fileName, Audit audit) {
		auditContext.put(fileName, audit);
	}

	@Override
	public Audit removeAuditReport(String fileName) {
		return auditContext.remove(fileName);
	}

	@Override
	public boolean hasAuditReport(String fileName) {
		return auditContext.containsKey(fileName);
	}

	@Override
	public Audit getAuditReport(String fileName) {
		return auditContext.get(fileName);
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
	public boolean isAuditParticipantFile(String fileName) {
		for (Audit audit : auditContext.values()) {
			if (audit.hasAuditParticipantFileName(fileName)) {
				return true;
			}
		}
		return false;
	}

	@Override
	public void dispose() {
		parserDataContext = null;
		fileContext = null;
	}
}
