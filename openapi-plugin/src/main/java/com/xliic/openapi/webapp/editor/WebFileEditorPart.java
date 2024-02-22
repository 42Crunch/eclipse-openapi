package com.xliic.openapi.webapp.editor;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.part.EditorPart;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.config.jcef.JCEFConfigPanel;
import com.xliic.openapi.platform.scan.config.jcef.JCEFScanConfPanel;
import com.xliic.openapi.platform.scan.report.jcef.JCEFScanReportPanel;

public class WebFileEditorPart extends EditorPart {

	private static final Image SCAN_ICON_IMAGE = OpenAPIImages.Scan.createImage();
	private static final Image CONFIG_ICON_IMAGE = OpenAPIImages.Config.createImage();
	
    @SuppressWarnings("serial")
	private static final Map<String, Long> TABS_LIMITS = new HashMap<>() {{   	
    	put("config", 1L);
    	put("scan", 100L);
    	put("scanconf", 100L);
    }};
    private static final Map<String, Long> OPENED_TABS = new HashMap<>();
	
	@NotNull
	private Object webEditor;
	@NotNull
	private WebVirtualFile webFile;
	
	@Override
	public void doSave(IProgressMonitor monitor) {}

	@Override
	public void doSaveAs() {}

	@Override
	public void init(IEditorSite site, IEditorInput input) throws PartInitException {
		if (!(input instanceof WebFileEditorInput)) {
			throw new PartInitException("Invalid Input: WebFileEditorInput");
		}
		setSite(site);
		setInput(input);
		webFile = ((WebFileEditorInput) input).getVirtualFile();
		setPartName(webFile.getName());
		if ("config".equals(webFile.getResourceId())) {
			setTitleImage(CONFIG_ICON_IMAGE);	
		} else {
			setTitleImage(SCAN_ICON_IMAGE);
		}
	}

	@Override
	public boolean isDirty() {
		return false;
	}

	@Override
	public boolean isSaveAsAllowed() {
		return false;
	}

	@Override
	public void createPartControl(Composite parent) {
		Project project = Project.getInstance();
		incrementOpenedTabs(webFile.getResourceId());
		switch (webFile.getResourceId()) {
          case "config":
        	  webEditor = new JCEFConfigPanel(project, parent, webFile);
        	  break;
          case "scanconf":
        	  webEditor = new JCEFScanConfPanel(project, parent, webFile);
        	  break;
          case "scan":
        	  webEditor = new JCEFScanReportPanel(project, parent, webFile);
        	  break;
          default:
        	  webEditor = new WebDefaultFileEditor(webFile, parent);
		};		
	}

	@Override
	public void setFocus() {}

    public static boolean isTabsLimitOk(@NotNull String resourceId) {
        if (!TABS_LIMITS.containsKey(resourceId)) {
            return false;
        }
        Long count = OPENED_TABS.get(resourceId);
        if (count != null) {
            return count < TABS_LIMITS.get(resourceId);
        }
        return true;
    }

    private static void incrementOpenedTabs(@NotNull String resourceId) {
        if (!OPENED_TABS.containsKey(resourceId)) {
            OPENED_TABS.put(resourceId, 0L);
        }
        OPENED_TABS.put(resourceId, OPENED_TABS.get(resourceId) + 1);
    }

    public static void decrementOpenedTabs(@NotNull String resourceId) {
        if (OPENED_TABS.containsKey(resourceId)) {
            long n = OPENED_TABS.get(resourceId);
            OPENED_TABS.put(resourceId, n > 0 ? n - 1 : 0L);
        }
    }

	@Override
	public void dispose() {
		super.dispose();
		decrementOpenedTabs(webFile.getResourceId());
		if (webEditor instanceof WebFileEditor) {
			((WebFileEditor) webEditor).dispose();
		}
	}
}
