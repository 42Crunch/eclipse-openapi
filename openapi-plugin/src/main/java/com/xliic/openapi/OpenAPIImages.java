package com.xliic.openapi;

import java.net.MalformedURLException;
import java.net.URL;

import org.eclipse.jface.resource.ImageDescriptor;

public class OpenAPIImages {

    public static final ImageDescriptor PropertyNode;
    public static final ImageDescriptor CreateWizard;
    public static final ImageDescriptor Any_type;
    public static final ImageDescriptor SecurityAudit;

    public static final ImageDescriptor CollapseAll;
    public static final ImageDescriptor ExpandAll;

    public static final ImageDescriptor ReportError;
    public static final ImageDescriptor ReportWarning;
    public static final ImageDescriptor ReportInfo;

    public static final ImageDescriptor File;
    public static final ImageDescriptor Reset;
    public static final ImageDescriptor Filter;
    public static final ImageDescriptor Locate;

    public static final ImageDescriptor QuickFix;
    public static final ImageDescriptor ViewQuickFix;
    public static final ImageDescriptor ExtRef;
    public static final ImageDescriptor Host;
    public static final ImageDescriptor Sort;
    public static final ImageDescriptor Copy;
    public static final ImageDescriptor Search;
    public static final ImageDescriptor SearchClose;
    public static final ImageDescriptor MatchCase;
    public static final ImageDescriptor MatchRegex;
    public static final ImageDescriptor MatchWord;
    public static final ImageDescriptor MatchCaseSelected;
    public static final ImageDescriptor MatchRegexSelected;
    public static final ImageDescriptor MatchWordSelected;

    public static final ImageDescriptor Platform;
    public static final ImageDescriptor PlatformAll;
    public static final ImageDescriptor PlatformFavorite;
    public static final ImageDescriptor PlatformFolder;
    public static final ImageDescriptor PlatformFolderLocked;
    public static final ImageDescriptor PlatformAPI;
    public static final ImageDescriptor PlatformSave;
    public static final ImageDescriptor PlatformFileSymLink;

    public static final ImageDescriptor PlatformOAS;
    public static final ImageDescriptor PlatformAuditVerified;
    public static final ImageDescriptor PlatformAuditUnverified;

    public static final ImageDescriptor UpdateRunningApplication;
    public static final ImageDescriptor Refresh;
    public static final ImageDescriptor Dictionary;

    public static final ImageDescriptor TryIt;
    public static final ImageDescriptor TryItPanel;
    public static final ImageDescriptor TryItAnno;

    public static final ImageDescriptor Scan;
    public static final ImageDescriptor ScanPanel;
    public static final ImageDescriptor ScanAnno;

    public static final ImageDescriptor EnvPanel;
    public static final ImageDescriptor Audit;
    public static final ImageDescriptor AuditAnno;

    public static final ImageDescriptor Config;
    public static final ImageDescriptor ConfigPanel;
    public static final ImageDescriptor SignUpPanel;
    public static final ImageDescriptor WelcomePanel;

    public static final ImageDescriptor GeneralNode;
    public static final ImageDescriptor GeneralDarkNode;
    public static final ImageDescriptor PathsNode;
    public static final ImageDescriptor PathsDarkNode;
    public static final ImageDescriptor ServersNode;
    public static final ImageDescriptor ServersDarkNode;
    public static final ImageDescriptor SecurityNode;
    public static final ImageDescriptor SecurityDarkNode;
    public static final ImageDescriptor ComponentsNode;
    public static final ImageDescriptor ComponentsDarkNode;
    public static final ImageDescriptor SchemasNode;
    public static final ImageDescriptor SchemasDarkNode;
    public static final ImageDescriptor SecuritySchemesNode;
    public static final ImageDescriptor SecuritySchemesDarkNode;
    public static final ImageDescriptor ResponseNode;
    public static final ImageDescriptor ResponseDarkNode;
    public static final ImageDescriptor ParametersNode;
    public static final ImageDescriptor ParametersDarkNode;
    public static final ImageDescriptor OperationIdNode;
    public static final ImageDescriptor OperationIdDarkNode;
    public static final ImageDescriptor TagsNode;
    public static final ImageDescriptor TagsDarkNode;
    public static final ImageDescriptor SecurityDefinitionsNode;
    public static final ImageDescriptor SecurityDefinitionsDarkNode;
    public static final ImageDescriptor HeadersNode;
    public static final ImageDescriptor HeadersDarkNode;
    public static final ImageDescriptor LinksNode;
    public static final ImageDescriptor LinksDarkNode;
    public static final ImageDescriptor CallbacksNode;
    public static final ImageDescriptor CallbacksDarkNode;
    public static final ImageDescriptor ExamplesNode;
    public static final ImageDescriptor ExamplesDarkNode;
    public static final ImageDescriptor RequestBodiesNode;
    public static final ImageDescriptor RequestBodiesDarkNode;
    public static final ImageDescriptor DefaultOutlineNode;
    public static final ImageDescriptor DefaultOutlineDarkNode;
    public static final ImageDescriptor AuthUserStatusBar;
    public static final ImageDescriptor AuthUserStatusBarDark;

    private static final URL BASE_URL = OpenAPIAbstractUIPlugin.getInstance().getBundle().getEntry("/");

    static {

        PropertyNode = createImageDescriptor("icons/property.png");
        CreateWizard = createImageDescriptor("icons/openapi-create-wizard.png");
        Any_type = createImageDescriptor("icons/any_type.png");
    	SecurityAudit = createImageDescriptor("icons/42crunch_icon.png");

        CollapseAll = createImageDescriptor("icons/collapseall.png");
        ExpandAll = createImageDescriptor("icons/expandall.png");

        ReportError = createImageDescriptor("icons/reportError.png");
        ReportWarning = createImageDescriptor("icons/reportWarning.png");
        ReportInfo = createImageDescriptor("icons/reportInfo.png");

        File = createImageDescriptor("icons/text.png");
        Reset = createImageDescriptor("icons/reset.png");
        Filter = createImageDescriptor("icons/filter.png");
        Locate = createImageDescriptor("icons/link_to_selection.png");

        QuickFix = createImageDescriptor("icons/quickfix.png");
        ViewQuickFix = createImageDescriptor("icons/view_quickfix.png");
        ExtRef = createImageDescriptor("icons/extref.png");
        Host = createImageDescriptor("icons/host.png");
        Sort = createImageDescriptor("icons/sorted.png");
        Copy = createImageDescriptor("icons/copy.png");
        Search = createImageDescriptor("icons/search/search.png");
        SearchClose = createImageDescriptor("icons/search/search_close.png");
        MatchCase = createImageDescriptor("icons/search/matchCase.png");
        MatchRegex = createImageDescriptor("icons/search/matchRegex.png");
        MatchWord = createImageDescriptor("icons/search/matchWord.png");
        MatchCaseSelected = createImageDescriptor("icons/search/matchCaseSelected.png");
        MatchRegexSelected = createImageDescriptor("icons/search/matchRegexSelected.png");
        MatchWordSelected = createImageDescriptor("icons/search/matchWordSelected.png");

        Platform = createImageDescriptor("/icons/icon_42crunch_platform.png");
        PlatformAll = createImageDescriptor("/icons/platform-all.png");
        PlatformFavorite = createImageDescriptor("/icons/platform-favorite.png");
        PlatformFolder = createImageDescriptor("/icons/platform-folder.png");
        PlatformFolderLocked = createImageDescriptor("/icons/platform-folder-locked.png");
        PlatformAPI = createImageDescriptor("/icons/platform-api.png");
        PlatformSave = createImageDescriptor("/icons/platform-save.png");
        PlatformFileSymLink = createImageDescriptor("/icons/file-symlink-file.png");

        PlatformOAS = createImageDescriptor("/icons/platform-oas.png");
        PlatformAuditVerified = createImageDescriptor("/icons/platform-audit-verified.png");
        PlatformAuditUnverified = createImageDescriptor("/icons/platform-audit-unverified.png");

        UpdateRunningApplication = createImageDescriptor("/icons/progress.png");
        Refresh = createImageDescriptor("/icons/refresh.png");
        Dictionary = createImageDescriptor("/icons/platform-data-dictionary.png");

        TryIt = createImageDescriptor("/icons/tryit.png");
        TryItPanel = createImageDescriptor("/icons/tryitPanel.png");
        TryItAnno = createImageDescriptor("/icons/tryitAnno.png");
        Scan = createImageDescriptor("/icons/scan.png");
        ScanPanel = createImageDescriptor("/icons/scanPanel.png");
        ScanAnno = createImageDescriptor("/icons/scanAnno.png");
        EnvPanel = createImageDescriptor("/icons/envPanel.png");
        Audit = createImageDescriptor("/icons/audit.png");
        AuditAnno = createImageDescriptor("/icons/auditAnno.png");
        Config = createImageDescriptor("/icons/config.png");
        ConfigPanel = createImageDescriptor("/icons/configPanel.png");
        SignUpPanel = createImageDescriptor("/icons/signUpPanel.png");
        WelcomePanel = createImageDescriptor("/icons/ppWeb.png");

        GeneralNode = createImageDescriptor("/icons/light/file-lines.png");
        GeneralDarkNode = createImageDescriptor("/icons/dark/file-lines.png");
        PathsNode = createImageDescriptor("/icons/light/swap-arrows.png");
        PathsDarkNode = createImageDescriptor("/icons/dark/swap-arrows.png");
        ServersNode = createImageDescriptor("/icons/light/server.png");
        ServersDarkNode = createImageDescriptor("/icons/dark/server.png");
        SecurityNode = createImageDescriptor("/icons/light/key.png");
        SecurityDarkNode = createImageDescriptor("/icons/dark/key.png");
        ComponentsNode = createImageDescriptor("/icons/light/box.png");
        ComponentsDarkNode = createImageDescriptor("/icons/dark/box.png");
        SchemasNode = createImageDescriptor("/icons/light/sitemap.png");
        SchemasDarkNode = createImageDescriptor("/icons/dark/sitemap.png");
        SecuritySchemesNode = createImageDescriptor("/icons/light/shield-keyhole.png");
        SecuritySchemesDarkNode = createImageDescriptor("/icons/dark/shield-keyhole.png");
        ResponseNode = createImageDescriptor("/icons/light/response.png");
        ResponseDarkNode = createImageDescriptor("/icons/dark/response.png");
        ParametersNode = createImageDescriptor("/icons/light/sliders.png");
        ParametersDarkNode = createImageDescriptor("/icons/dark/sliders.png");
        OperationIdNode = createImageDescriptor("/icons/light/id-card.png");
        OperationIdDarkNode = createImageDescriptor("/icons/dark/id-card.png");
        TagsNode = createImageDescriptor("/icons/light/tags.png");
        TagsDarkNode = createImageDescriptor("/icons/dark/tags.png");
        SecurityDefinitionsNode = createImageDescriptor("/icons/light/shield-halved.png");
        SecurityDefinitionsDarkNode = createImageDescriptor("/icons/dark/shield-halved.png");
        HeadersNode = createImageDescriptor("/icons/light/line-columns.png");
        HeadersDarkNode = createImageDescriptor("/icons/dark/line-columns.png");
        LinksNode = createImageDescriptor("/icons/light/link-simple.png");
        LinksDarkNode = createImageDescriptor("/icons/dark/link-simple.png");
        CallbacksNode = createImageDescriptor("/icons/light/phone-arrow-up-right.png");
        CallbacksDarkNode = createImageDescriptor("/icons/dark/phone-arrow-up-right.png");
        ExamplesNode = createImageDescriptor("/icons/light/message-code.png");
        ExamplesDarkNode = createImageDescriptor("/icons/dark/message-code.png");
        RequestBodiesNode = createImageDescriptor("/icons/light/request.png");
        RequestBodiesDarkNode = createImageDescriptor("/icons/dark/request.png");
        DefaultOutlineNode = createImageDescriptor("icons/light/memo.png");
        DefaultOutlineDarkNode = createImageDescriptor("icons/dark/memo.png");

        AuthUserStatusBar = createImageDescriptor("icons/42crunch-status-bar-icon.png");
        AuthUserStatusBarDark = createImageDescriptor("icons/42crunch-status-bar-icon_dark.png");
    }

    private static ImageDescriptor createImageDescriptor(String path) {
        try {
            return ImageDescriptor.createFromURL(new URL(BASE_URL, path));
        } catch (MalformedURLException e) {
        }
        return ImageDescriptor.getMissingImageDescriptor();
    }
}
