package com.xliic.openapi.services;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.eclipse.core.resources.IFile;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.services.IDisposable;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.editor.FileEditorManager;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.listeners.ReportDocumentListener;
import com.xliic.openapi.listeners.TreeDocumentListener;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;

public class DataService implements IDataService, IDisposable {

	private final TreeDocumentListener treeListener;
	private final ReportDocumentListener reportListener;

	private Map<String, Audit> auditContext = new HashMap<>();
	private Map<String, ParserData> parserDataContext = new HashMap<>();
	private Map<String, FileProperty> fileContext = new HashMap<>();

	public DataService() {
		treeListener = new TreeDocumentListener(new Project());
		reportListener = new ReportDocumentListener(new Project());
	}

	public static DataService getInstance(Project project) {
		return (DataService) PlatformUI.getWorkbench().getService(IDataService.class);
	}

	@Override
	public void addTreeDocumentListener(@NotNull VirtualFile file) {
		Document document = FileDocumentManager.getInstance().getDocument(file);
		if (document != null) {
			document.addDocumentListener(treeListener);
		}
	}

	@Override
	public void removeTreeDocumentListener(@NotNull VirtualFile file) {
		Document document = FileDocumentManager.getInstance().getDocument(file);
		if (document != null) {
			document.removeDocumentListener(treeListener);
		}
	}

	@Override
	public void addReportDocumentListener(@NotNull VirtualFile file) {
		if (hasAuditReport(file.getPath())) {
			Set<String> participantFileNames = getAuditReport(file.getPath()).getParticipantFileNames();
			for (VirtualFile openedFile : FileEditorManager.getInstance(new Project()).getOpenFiles()) {
				if (participantFileNames.contains(openedFile.getPath())) {
					Document document = FileDocumentManager.getInstance().getDocument(openedFile);
					if (document != null) {
						document.addDocumentListener(reportListener);
					}
				}
			}
			return;
		}
		if (isAuditParticipantFile(file.getPath())) {
			Document document = FileDocumentManager.getInstance().getDocument(file);
			if (document != null) {
				document.addDocumentListener(reportListener);
			}
		}
	}

	@Override
	public void removeReportDocumentListener(@NotNull VirtualFile file) {
		if (hasAuditReport(file.getPath())) {
			Set<String> participantFileNames = getAuditReport(file.getPath()).getParticipantFileNames();
			for (VirtualFile openedFile : FileEditorManager.getInstance(new Project()).getOpenFiles()) {
				if (participantFileNames.contains(openedFile.getPath())) {
					Document document = FileDocumentManager.getInstance().getDocument(openedFile);
					if (document != null) {
						document.removeDocumentListener(reportListener);
					}
				}
			}
			return;
		}
		if (isAuditParticipantFile(file.getPath())) {
			Document document = FileDocumentManager.getInstance().getDocument(file);
			if (document != null) {
				document.removeDocumentListener(reportListener);
			}
		}
	}

	@Override
	public void handleFileNameChanged(IFile newFile, IFile oldFile) {

		String oldFileName = new VirtualFile(oldFile).getPath();

		if (hasParserData(oldFileName)) {
			setParserData(new VirtualFile(newFile).getPath(), removeParserData(oldFileName));
		}
		if (hasFileProperty(oldFileName)) {
			setFileProperty(new VirtualFile(newFile).getPath(), removeFileProperty(oldFileName));
		}
		if (hasAuditReport(oldFileName)) {
			setAuditReport(new VirtualFile(newFile).getPath(), removeAuditReport(oldFileName));
		}
		if (!auditContext.isEmpty()) {
			for (Audit audit : auditContext.values()) {
				audit.handleFileNameChanged(newFile, oldFile);
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
