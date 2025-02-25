package icons;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.Icon;
import com.xliic.core.util.IconLoader;

public interface OpenApiIcons {

    Icon OpenApiLogo = findIcon("icon_api.svg");
    Icon File = findIcon("text.png");
    Icon GoTo = findIcon("goto.svg");
    Icon SecurityAudit = findIcon("42crunch_icon.svg");
    Icon PropertyNode = findIcon("property.svg");
    Icon ExtRef = findIcon("extref.svg");
    Icon Json = findIcon("json.svg");
    Icon Yaml = findIcon("yaml.svg");
    Icon ReportError = findIcon("reportError.svg");
    Icon ReportWarning = findIcon("reportWarning.svg");
    Icon ReportInfo = findIcon("reportInfo.svg");
    Icon MatchCase = findIcon("matchCase.svg");
    Icon MatchCaseHovered = findIcon("matchCaseHovered.svg");
    Icon MatchCaseSelected = findIcon("matchCaseSelected.svg");
    Icon Words = findIcon("words.svg");
    Icon WordsHovered = findIcon("wordsHovered.svg");
    Icon WordsSelected = findIcon("wordsSelected.svg");
    Icon Regex = findIcon("regex.svg");
    Icon RegexHovered = findIcon("regexHovered.svg");
    Icon RegexSelected = findIcon("regexSelected.svg");
    Icon Reset = findIcon("reset.svg");
    Icon Preview = findIcon("preview.svg");
    Icon Platform = findIcon("icon_42crunch_platform.svg");
    Icon PlatformAll = findIcon("platform-all.png");
    Icon PlatformFavorite = findIcon("platform-favorite.png");
    Icon PlatformFolder = findIcon("platform-folder.svg");
    Icon PlatformFolderLocked = findIcon("platform-folder-locked.svg");
    Icon PlatformAPI = findIcon("platform-api.svg");
    Icon PlatformSave = findIcon("platform-save.png");
    Icon PlatformOAS = findIcon("platform-oas.svg");
    Icon PlatformAuditVerified = findIcon("platform-audit-verified.svg");
    Icon PlatformAuditUnverified = findIcon("platform-audit-unverified.svg");
    Icon PlatformFileSymLink = findIcon("file-symlink-file.svg");
    Icon Dictionary = findIcon("platform-data-dictionary.png");
    Icon TryIt = findIcon("tryit.svg");
    Icon TryItPanel = findIcon("tryitPanel.svg");
    Icon Scan = findIcon("scan.svg");
    Icon ScanPanel = findIcon("scanPanel.svg");
    Icon Config = findIcon("config.svg");
    Icon ConfigPanel = findIcon("configPanel.svg");
    Icon Audit = findIcon("audit.svg");
    Icon Copy = findIcon("copy.svg");
    Icon GeneralNode = findIcon("file-lines.svg", true);
    Icon GeneralDarkNode = findIcon("file-lines.svg", false);
    Icon PathsNode = findIcon("swap-arrows.svg", true);
    Icon PathsDarkNode = findIcon("swap-arrows.svg", false);
    Icon ServersNode = findIcon("server.svg", true);
    Icon ServersDarkNode = findIcon("server.svg", false);
    Icon SecurityNode = findIcon("key.svg", true);
    Icon SecurityDarkNode = findIcon("key.svg", false);
    Icon ComponentsNode = findIcon("box.svg", true);
    Icon ComponentsDarkNode = findIcon("box.svg", false);
    Icon SchemasNode = findIcon("sitemap.svg", true);
    Icon SchemasDarkNode = findIcon("sitemap.svg", false);
    Icon SecuritySchemesNode = findIcon("shield-keyhole.svg", true);
    Icon SecuritySchemesDarkNode = findIcon("shield-keyhole.svg", false);
    Icon ResponseNode = findIcon("response.svg", true);
    Icon ResponseDarkNode = findIcon("response.svg", false);
    Icon ParametersNode = findIcon("sliders.svg", true);
    Icon ParametersDarkNode = findIcon("sliders.svg", false);
    Icon OperationIdNode = findIcon("id-card.svg", true);
    Icon OperationIdDarkNode = findIcon("id-card.svg", false);
    Icon TagsNode = findIcon("tags.svg", true);
    Icon TagsDarkNode = findIcon("tags.svg", false);
    Icon SecurityDefinitionsNode = findIcon("shield-halved.svg", true);
    Icon SecurityDefinitionsDarkNode = findIcon("shield-halved.svg", false);
    Icon HeadersNode = findIcon("line-columns.svg", true);
    Icon HeadersDarkNode = findIcon("line-columns.svg", false);
    Icon LinksNode = findIcon("link-simple.svg", true);
    Icon LinksDarkNode = findIcon("link-simple.svg", false);
    Icon CallbacksNode = findIcon("phone-arrow-up-right.svg", true);
    Icon CallbacksDarkNode = findIcon("phone-arrow-up-right.svg", false);
    Icon ExamplesNode = findIcon("message-code.svg", true);
    Icon ExamplesDarkNode = findIcon("message-code.svg", false);
    Icon RequestBodiesNode = findIcon("request.svg", true);
    Icon RequestBodiesDarkNode = findIcon("request.svg", false);
    Icon WebhookNode = findIcon("webhook.svg", true);
    Icon WebhookDarkNode = findIcon("webhook.svg", false);
    
    public static void init() {}
    
    private static Icon findIcon(@NotNull String name) {
        return IconLoader.findIcon("/icons/" + name, OpenApiIcons.class);
    }
    
    private static Icon findIcon(@NotNull String name, boolean isForLightTheme) {
        return IconLoader.findIcon("/icons/" + (isForLightTheme ? "light/" : "dark/") + name, OpenApiIcons.class);
    }
}
