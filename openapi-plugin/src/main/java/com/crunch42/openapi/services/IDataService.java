package com.crunch42.openapi.services;

import com.crunch42.openapi.FileProperty;
import com.crunch42.openapi.parser.tree.ParserData;
import com.crunch42.openapi.report.Audit;
import com.crunch42.openapi.report.Issue;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.IDocument;

public interface IDataService {

    void addTreeDocumentListener(@NotNull IDocument document);

    void removeTreeDocumentListener(@NotNull IDocument document);
    
    void addReportDocumentListener(@NotNull IFile file);
    
    void removeReportDocumentListener(@NotNull IFile file, @NotNull IDocument document);

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
    
    void handleFileNameChanged(IFile newFile, IFile oldFile);
}
