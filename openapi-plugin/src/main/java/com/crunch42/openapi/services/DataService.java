package com.crunch42.openapi.services;

import com.crunch42.openapi.FileProperty;
import com.crunch42.openapi.listeners.ReportDocumentListener;
import com.crunch42.openapi.listeners.TreeDocumentListener;
import com.crunch42.openapi.parser.tree.ParserData;
import com.crunch42.openapi.report.Audit;
import com.crunch42.openapi.report.Issue;
import com.crunch42.openapi.utils.EditorUtil;
import com.crunch42.openapi.utils.OpenAPIUtils;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.IDocument;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.services.IDisposable;

import javax.validation.constraints.NotNull;

import java.util.*;

public class DataService implements IDataService, IDisposable {
	
    private final TreeDocumentListener treeListener;
    private final ReportDocumentListener reportListener;

    private Map<String, Audit> auditContext = new HashMap<>();
    private Map<String, ParserData> parserDataContext = new HashMap<>();
    private Map<String, FileProperty> fileContext = new HashMap<>();

    public DataService() {
        treeListener = new TreeDocumentListener();
        reportListener = new ReportDocumentListener();
    }

    @Override
    public void addTreeDocumentListener(@NotNull IDocument document) {
        if (document != null) {
            document.addDocumentListener(treeListener);
        }
    }
    
    @Override
    public void removeTreeDocumentListener(@NotNull IDocument document) {
        if (document != null) {
            document.removeDocumentListener(treeListener);
        }
    }
    
    @Override
    public void addReportDocumentListener(@NotNull IFile file) {
		for (IFileEditorInput input : OpenAPIUtils.getOpenedIFileEditorInputs()) {
	        if (hasAuditReport(file.getFullPath().toPortableString())) {
	            Set<String> participantFileNames = getAuditReport(file.getFullPath().toPortableString()).getParticipantFileNames();
                if (participantFileNames.contains(OpenAPIUtils.getAbsoluteFullFilePath(input.getFile()))) {
                    IDocument document = EditorUtil.getDocument(input);
                    if (document != null) {
                        document.addDocumentListener(reportListener);
                    }
                }
	        }
	        else if (isAuditParticipantFile(OpenAPIUtils.getAbsoluteFullFilePath(file))) {        	
                IDocument document = EditorUtil.getDocument(input);
                if (document != null) {
                    document.addDocumentListener(reportListener);
                }
	        }
		}
    }
    
    @Override
    public void removeReportDocumentListener(@NotNull IFile file, @NotNull IDocument document2) {
        if (document2 != null) {
            document2.removeDocumentListener(reportListener);
        }
		for (IFileEditorInput input : OpenAPIUtils.getOpenedIFileEditorInputs()) {
	        if (hasAuditReport(file.getFullPath().toPortableString())) {
	            Set<String> participantFileNames = getAuditReport(file.getFullPath().toPortableString()).getParticipantFileNames();
                if (participantFileNames.contains(OpenAPIUtils.getAbsoluteFullFilePath(input.getFile()))) {
                    IDocument document = EditorUtil.getDocument(input);
                    if (document != null && document != document2) {
                        document.removeDocumentListener(reportListener);
                    }
                }
	        }
	        else if (isAuditParticipantFile(OpenAPIUtils.getAbsoluteFullFilePath(file))) {        	
                IDocument document = EditorUtil.getDocument(input);
                if (document != null && document != document2) {
                    document.removeDocumentListener(reportListener);
                }
	        }
		}
    }
    
    @Override
    public void handleFileNameChanged(IFile newFile, IFile oldFile) {
    	
    	String oldFileName = oldFile.getFullPath().toPortableString();

        if (hasParserData(oldFileName)) {
            setParserData(newFile.getFullPath().toPortableString(), removeParserData(oldFileName));
        }
        if (hasFileProperty(oldFileName)) {
            setFileProperty(newFile.getFullPath().toPortableString(), removeFileProperty(oldFileName));
        }
        if (hasAuditReport(oldFileName)) {
            setAuditReport(newFile.getFullPath().toPortableString(), removeAuditReport(oldFileName));
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
            };
        }
        return false;
    }
    
    @Override
    public void dispose() {
        parserDataContext = null;
        fileContext = null;
    }
}
