package icons;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.Icon;
import com.xliic.core.util.IconLoader;

public interface OpenApiIcons {

    /** 13x13 */ @NotNull Icon OpenApiLogo = IconLoader.findIcon("/icons/icon_api.svg");
    /** 16x16 */ @NotNull Icon File = IconLoader.findIcon("/icons/text.png");
    /** 16x16 */ @NotNull Icon GoTo = IconLoader.findIcon("/icons/goto.png");
    /** 16x16 */ @NotNull Icon SecurityAudit = IconLoader.findIcon("/icons/42crunch_icon.svg");
    /** 16x16 */ @NotNull Icon PanelNode = IconLoader.findIcon("/icons/listFiles.svg");
    /** 16x16 */ @NotNull Icon PropertyNode = IconLoader.findIcon("/icons/property.svg");
    /** 16x16 */ @NotNull Icon AddSnippet = IconLoader.findIcon("/icons/add.svg");
    /** 16x16 */ @NotNull Icon ExtRef = IconLoader.findIcon("/icons/extref.svg");

    /** 16x16 */ @NotNull Icon CollapseAll = IconLoader.findIcon("/icons/collapseall.png");
    /** 16x16 */ @NotNull Icon ExpandAll = IconLoader.findIcon("/icons/expandall.png");

    /** 16x16 */ @NotNull Icon Json = IconLoader.findIcon("/icons/json.svg");
    /** 16x16 */ @NotNull Icon Yaml = IconLoader.findIcon("/icons/yaml.svg");

    /** 16x16 */ @NotNull Icon ReportError = IconLoader.findIcon("/icons/reportError.svg");
    /** 16x16 */ @NotNull Icon ReportWarning = IconLoader.findIcon("/icons/reportWarning.svg");
    /** 16x16 */ @NotNull Icon ReportInfo = IconLoader.findIcon("/icons/reportInfo.svg");

    /** 16x16 */ @NotNull Icon MatchCase = IconLoader.findIcon("/icons/matchCase.svg");
    /** 16x16 */ @NotNull Icon MatchCaseHovered = IconLoader.findIcon("/icons/matchCaseHovered.svg");
    /** 16x16 */ @NotNull Icon MatchCaseSelected = IconLoader.findIcon("/icons/matchCaseSelected.svg");

    /** 16x16 */ @NotNull Icon Words = IconLoader.findIcon("/icons/words.svg");
    /** 16x16 */ @NotNull Icon WordsHovered = IconLoader.findIcon("/icons/wordsHovered.svg");
    /** 16x16 */ @NotNull Icon WordsSelected = IconLoader.findIcon("/icons/wordsSelected.svg");

    /** 16x16 */ @NotNull Icon Regex = IconLoader.findIcon("/icons/regex.svg");
    /** 16x16 */ @NotNull Icon RegexHovered = IconLoader.findIcon("/icons/regexHovered.svg");
    /** 16x16 */ @NotNull Icon RegexSelected = IconLoader.findIcon("/icons/regexSelected.svg");

    /** 16x16 */ @NotNull Icon Reset = IconLoader.findIcon("/icons/reset.svg");
    /** 16x16 */ @NotNull Icon Preview = IconLoader.findIcon("/icons/preview.svg");
    /** 16x16 */ @NotNull Icon Refresh = IconLoader.findIcon("/icons/refresh.svg");

    /** 16x16 */ @NotNull Icon Platform = IconLoader.findIcon("/icons/icon_42crunch_platform.svg");
    /** 16x16 */ @NotNull Icon PlatformAll = IconLoader.findIcon("/icons/platform-all.png");
    /** 16x16 */ @NotNull Icon PlatformFavorite = IconLoader.findIcon("/icons/platform-favorite.png");
    /** 16x16 */ @NotNull Icon PlatformFolder = IconLoader.findIcon("/icons/platform-folder.svg");
    /** 16x16 */ @NotNull Icon PlatformFolderLocked = IconLoader.findIcon("/icons/platform-folder-locked.svg");
    /** 16x16 */ @NotNull Icon PlatformAPI = IconLoader.findIcon("/icons/platform-api.svg");
    /** 16x16 */ @NotNull Icon PlatformSave = IconLoader.findIcon("/icons/platform-save.png");

    /** 16x16 */ @NotNull Icon PlatformOAS = IconLoader.findIcon("/icons/platform-oas.svg");
    /** 16x16 */ @NotNull Icon PlatformAuditVerified = IconLoader.findIcon("/icons/platform-audit-verified.svg");
    /** 16x16 */ @NotNull Icon PlatformAuditUnverified = IconLoader.findIcon("/icons/platform-audit-unverified.svg");
}
