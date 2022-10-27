package icons;

import com.xliic.core.util.Icon;
import com.xliic.core.util.IconLoader;
import org.jetbrains.annotations.NotNull;

public interface OpenApiIcons {

    Icon OpenApiLogo = findIcon("icon_api.svg");
    Icon File = findIcon("text.png");
    Icon GoTo = findIcon("goto.svg");
    Icon SecurityAudit = findIcon("42crunch_icon.svg");
    Icon PanelNode = findIcon("listFiles.svg");
    Icon PropertyNode = findIcon("property.svg");
    Icon AddSnippet = findIcon("add.svg");
    Icon ExtRef = findIcon("extref.svg");
    Icon MonitorStart = findIcon("monitor_start.png");
    Icon MonitorStop = findIcon("monitor_stop.png");
    Icon MonitorSizes = findIcon("monitor_sizes.png");
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
    Icon Dictionary = findIcon("platform-data-dictionary.png");

    private static Icon findIcon(@NotNull String name) {
        return IconLoader.findIcon("/icons/" + name, OpenApiIcons.class);
    }
}
