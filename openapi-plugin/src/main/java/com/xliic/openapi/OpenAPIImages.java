package com.xliic.openapi;

import java.net.MalformedURLException;
import java.net.URL;

import org.eclipse.jface.resource.ImageDescriptor;

public class OpenAPIImages {

    public static final ImageDescriptor PanelNode;
    public static final ImageDescriptor PropertyNode;
    public static final ImageDescriptor AddSnippet;
    public static final ImageDescriptor CreateWizard;
    public static final ImageDescriptor Any_type;

    public static final ImageDescriptor CollapseAll;
    public static final ImageDescriptor ExpandAll;

    public static final ImageDescriptor ReportError;
    public static final ImageDescriptor ReportWarning;
    public static final ImageDescriptor ReportInfo;

    public static final ImageDescriptor File;
    public static final ImageDescriptor Reset;
    public static final ImageDescriptor Filter;
    public static final ImageDescriptor OpenAPIIcon;

    public static final ImageDescriptor QuickFix;
    public static final ImageDescriptor ViewQuickFix;
    public static final ImageDescriptor ExtRef;
    public static final ImageDescriptor Host;
    public static final ImageDescriptor Sort;

    public static final ImageDescriptor Platform;
    public static final ImageDescriptor PlatformAll;
    public static final ImageDescriptor PlatformFavorite;
    public static final ImageDescriptor PlatformFolder;
    public static final ImageDescriptor PlatformFolderLocked;
    public static final ImageDescriptor PlatformAPI;
    public static final ImageDescriptor PlatformSave;

    public static final ImageDescriptor PlatformOAS;
    public static final ImageDescriptor PlatformAuditVerified;
    public static final ImageDescriptor PlatformAuditUnverified;

    public static final ImageDescriptor UpdateRunningApplication;
    public static final ImageDescriptor Refresh;
    public static final ImageDescriptor Dictionary;

    private static final URL BASE_URL = OpenAPIAbstractUIPlugin.getInstance().getBundle().getEntry("/");

    static {
        PanelNode = createImageDescriptor("icons/listFiles.png");
        PropertyNode = createImageDescriptor("icons/property.png");
        AddSnippet = createImageDescriptor("icons/add.png");
        CreateWizard = createImageDescriptor("icons/openapi-create-wizard.png");
        Any_type = createImageDescriptor("icons/any_type.png");

        CollapseAll = createImageDescriptor("icons/collapseall.png");
        ExpandAll = createImageDescriptor("icons/expandall.png");

        ReportError = createImageDescriptor("icons/reportError.png");
        ReportWarning = createImageDescriptor("icons/reportWarning.png");
        ReportInfo = createImageDescriptor("icons/reportInfo.png");

        File = createImageDescriptor("icons/text.png");
        Reset = createImageDescriptor("icons/reset.png");
        Filter = createImageDescriptor("icons/filter.png");
        OpenAPIIcon = createImageDescriptor("icons/icon_api_16.png");

        QuickFix = createImageDescriptor("icons/quickfix.png");
        ViewQuickFix = createImageDescriptor("icons/view_quickfix.png");
        ExtRef = createImageDescriptor("icons/extref.png");
        Host = createImageDescriptor("icons/host.png");
        Sort = createImageDescriptor("icons/sorted.png");

        Platform = createImageDescriptor("/icons/icon_42crunch_platform.png");
        PlatformAll = createImageDescriptor("/icons/platform-all.png");
        PlatformFavorite = createImageDescriptor("/icons/platform-favorite.png");
        PlatformFolder = createImageDescriptor("/icons/platform-folder.png");
        PlatformFolderLocked = createImageDescriptor("/icons/platform-folder-locked.png");
        PlatformAPI = createImageDescriptor("/icons/platform-api.png");
        PlatformSave = createImageDescriptor("/icons/platform-save.png");

        PlatformOAS = createImageDescriptor("/icons/platform-oas.png");
        PlatformAuditVerified = createImageDescriptor("/icons/platform-audit-verified.png");
        PlatformAuditUnverified = createImageDescriptor("/icons/platform-audit-unverified.png");

        UpdateRunningApplication = createImageDescriptor("/icons/progress.png");
        Refresh = createImageDescriptor("/icons/refresh.png");
        Dictionary = createImageDescriptor("/icons/platform-data-dictionary.png");
    }

    private static ImageDescriptor createImageDescriptor(String path) {
        try {
            return ImageDescriptor.createFromURL(new URL(BASE_URL, path));
        } catch (MalformedURLException e) {
        }
        return ImageDescriptor.getMissingImageDescriptor();
    }
}
