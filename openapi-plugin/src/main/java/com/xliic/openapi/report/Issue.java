package com.xliic.openapi.report;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IMarker;
import org.eclipse.core.runtime.CoreException;
import org.json.JSONArray;
import org.json.JSONObject;

import com.xliic.openapi.bundler.Mapping;
import com.xliic.openapi.bundler.OpenAPIBundler;
import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.report.html.HTMLArticlesProvider;
import com.xliic.openapi.utils.OpenAPIUtils;

public class Issue {
	
	private static final String ISSUE_MARKER_ID = "ISSUE_MARKER_ID";
	private static final String ISSUE_MARKER_FILENAME = "ISSUE_MARKER_FILENAME";
	private static final String ISSUE_MARKER_AUDIT_FILENAME = "ISSUE_MARKER_AUDIT_FILENAME";

    private static final HTMLArticlesProvider articles = new HTMLArticlesProvider();

    private final String id;
    private final String description;
    private final float score;
    private final String displayScore;
    private final int criticality;
    private final Severity severity;

    private String auditFileName;
    private String pointer;
    private String fileName;
    private Location location;
    
    private IFile file;
    private IMarker marker;
    private int markerListId;
    
    public Issue(OpenAPIBundler bundler, String id, String description, String pointer, float score, int criticality) {

        this.id = id;
        this.description = description;
        this.score = score;
        this.displayScore = transformScore(score);
        this.criticality = criticality;
        this.severity = Severity.getSeverity(criticality);
        this.auditFileName = bundler.getAuditFileName();
        this.markerListId = -1;

        try {
            // For pointers to entities in the main file which
            // don't resolve to an external file, return null
            Mapping.Location error = bundler.original(pointer);
            if (error == null) {
                fileName = auditFileName;
                this.pointer = pointer;
            }
            else {
                File directory = new File(Paths.get(auditFileName).getParent().toString());
                fileName = new File(directory, error.file).getPath();
                this.pointer = error.pointer;
            }
            file = OpenAPIUtils.getIFile(fileName);
            if (file == null) {
                fileName = null;
                location = null;
            }
            else {
                location = bundler.getParserData(file).get(this.pointer);
            }
        }
        catch (UnsupportedEncodingException exception) {
            fileName = null;
            this.pointer = pointer;
            location = null;
        }
    }
    
    public void clean() {
    	try {
    		if (marker != null) {
    			marker.delete();
    			marker = null;
    		}
		} 
    	catch (CoreException e) {
		}
    }
    
    public static boolean isIssueMarker(IMarker marker2) {
    	try {
			return (marker2 != null) && (marker2.getAttribute(ISSUE_MARKER_ID) != null);
		} 
    	catch (CoreException e) {
			return false;
		}
    }
    
    public static IFile getFileFromMarker(IMarker marker2) {
    	try {
			return OpenAPIUtils.getIFile((String) (marker2.getAttribute(ISSUE_MARKER_FILENAME)));
		} 
    	catch (CoreException e) {
			return null;
		}
    }
    
    public static IFile getAuditFileFromMarker(IMarker marker2) {
    	try {
			return OpenAPIUtils.getIFile((String) (marker2.getAttribute(ISSUE_MARKER_AUDIT_FILENAME)));
		} 
    	catch (CoreException e) {
			return null;
		}
    }
    
    public static int getIssueListIdFromMarker(IMarker marker2) {
    	try {
			return (int) marker2.getAttribute(ISSUE_MARKER_ID);
		} 
    	catch (CoreException e) {
			return -1;
		}
    }
    
    public void createMarker(int listId) {
        try {        	
        	marker = file.createMarker(IMarker.PROBLEM);
        	marker.setAttribute(IMarker.SEVERITY, Severity.getMarkerSeverity(severity));
			marker.setAttribute(IMarker.MESSAGE, getLabel());
			marker.setAttribute(IMarker.TRANSIENT, true);
			marker.setAttribute(IMarker.LINE_NUMBER, (int) location.getLine());
			marker.setAttribute(IMarker.CHAR_START, (int) location.getStartOffset());
			marker.setAttribute(IMarker.CHAR_END, (int) location.getEndOffset());
			marker.setAttribute(ISSUE_MARKER_ID, listId);
			marker.setAttribute(ISSUE_MARKER_FILENAME, fileName);
			marker.setAttribute(ISSUE_MARKER_AUDIT_FILENAME, auditFileName);
			markerListId = listId;
		} 
        catch (CoreException e) {
			e.printStackTrace();
		}	
    }
    
    public void handleFileNameChanged(IFile newFile, IFile oldFile, List<IMarker> markers) {

    	String oldFileName = OpenAPIUtils.getAbsoluteFullFilePath(oldFile);
    	String newFileName = OpenAPIUtils.getAbsoluteFullFilePath(newFile);

        if (Objects.equals(auditFileName, oldFileName)) {
            auditFileName = newFileName;
        }
        if (Objects.equals(fileName, oldFileName)) {
            fileName = newFileName;
            file = newFile;
        }
    	try {
			for (IMarker m : markers) {
				if (getIssueListIdFromMarker(m) == markerListId) {
					marker = m;
					marker.setAttribute(ISSUE_MARKER_FILENAME, fileName);
					marker.setAttribute(ISSUE_MARKER_AUDIT_FILENAME, auditFileName);
				}
			}
		} 
    	catch (CoreException e) {
		}
    }

    public void updateLocation(Map<String, Location> pointerToLocationMap) {
        location = pointerToLocationMap.get(pointer);
    }

    private String transformScore(float score) {
        int rounded = Math.abs(Math.round(score));
        if (score == 0) {
            return "0";
        }
        else if (rounded >= 1) {
            return String.valueOf(rounded);
        }
        return "less than 1";
    }

    public float getScore() {
        return score;
    }

    @Override
    public String toString() {
        return super.toString();
    }

    public String getId() {
        return id;
    }

    public IFile getFile() {
        return file;
    }
    
    public String getFileName() {
        return fileName;
    }

    public Severity getSeverity() {
        return severity;
    }

    public String getDescription() {
        return description;
    }

    public String getPointer() {
        return pointer;
    }

    public String getDisplayScore() {
        return displayScore;
    }

    public int getCriticality() {
        return criticality;
    }

    public Location getLocation() {
        return location;
    }

    public boolean isLocationFound() {
        return location != null;
    }

    public String getAuditFileName() {
        return auditFileName;
    }

    public String getLabel() {
        return getDescription() + " " + ("0".equals(displayScore) ? "" : "(score impact " + displayScore + ")");
    }

    public String getLabelLocation() {
        return " audit of " + Paths.get(auditFileName).getFileName().toString() +
                " [" + location.getVisualLine() + ", " + location.getVisualColumn() + "]";
    }

    public String getHTMLIssue() {

        String criticality = getCriticalityName(getCriticality());
        String scoreImpact = "0".equals(getDisplayScore()) ? "" : "Score impact: " + getDisplayScore();
        String article = articleById(getId());

        int line = (int) getLocation().getVisualLine();
        String href = "target://" + fileName + "?startOffset=" + getLocation().getStartOffset() + "&length=" + getLocation().getLength();
        String shortFileName = Paths.get(fileName).getFileName().toString();
        String hrefForIssueID = "data-issue-id=" + id;

        return "<h1>" + getDescription() + "</h1>" +
                "<p>" +
                "  <small>" +
                "  Issue ID: <a class=\"issue-id\" href=\"" + hrefForIssueID + "\">" + id + "</a>" +
                "  </small>" +
                "</p>" +
                "<p>" +
                "  <small>" + "<a class=\"focus-line\" href=\"" + href +"\">" +
                shortFileName + ":" + line + "</a>.Severity: " + criticality + "." + scoreImpact +
                "  </small>" +
                "</p>" + article;
    }

    private String getCriticalityName(int criticality) {

        switch (criticality) {
            case 5:
                return "Critical";
            case 4:
                return "High";
            case 3:
                return "Medium";
            case 2:
                return "Low";
            default:
                return "Info";
        }
    }

    private String getFallbackArticleText() {
        return "<p>Whoops! Looks like there has been an oversight and we are missing a page for this issue.</p>" +
                "<p><a href=\"https://apisecurity.io/contact-us/\">Let us know</a> the title of the issue, " +
                "and we make sure to add it to the encyclopedia.</p>";
    };

    @SuppressWarnings("unchecked")
    private String partToText(Map<String, Object> part) {

        if (part == null || !part.containsKey("sections")) {
            return "";
        }

        StringBuilder text = new StringBuilder();
        List<Object> sections = ((JSONArray) part.get("sections")).toList();

        for (Object section : sections) {
            Map<String, Object> s = (Map<String, Object>) section;
            if (s.containsKey("text")) {
                text.append((String) s.get("text"));
            }
            else if (s.containsKey("code")) {
                text.append((String) s.get("code"));
            }
        }
        return text.toString();
    }

    private String articleById(String id) {

        if (articles.containsArticleId(id)) {

            Map<String, Object> article = articles.getArticle(id);
            Map<String, Object> description = ((JSONObject) article.get("description")).toJsonMap();

            String text = (String) description.get("text");
            if (article.containsKey("example")) {
                text += partToText(((JSONObject) article.get("example")).toJsonMap());
            }
            if (article.containsKey("exploit")) {
                text += partToText(((JSONObject) article.get("exploit")).toJsonMap());
            }
            if (article.containsKey("remediation")) {
                text += partToText(((JSONObject) article.get("remediation")).toJsonMap());
            }

            return text;
        }

        return getFallbackArticleText();
    }
}
