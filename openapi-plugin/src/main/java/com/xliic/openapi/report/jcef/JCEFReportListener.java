package com.xliic.openapi.report.jcef;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.ide.BrowserUtil;
import com.xliic.core.ide.CopyPasteManager;
import com.xliic.core.ide.StringSelection;
import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import java.io.File;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class JCEFReportListener {

    private static final String LOGO_SITE_URL = "https://www.42crunch.com";
    private static final String HTML_GO_BACK_LINK = "file:///jbcefbrowser/go-full-report";
    private static final String HTML_ISSUE_ID_LINK_PREFIX = "file:///jbcefbrowser/data-issue-id=";
    private static final Pattern FILE_WITH_LINE_URI = Pattern.compile("file://(.*)\\?pointer=(.*)");

    private final Project project;
    private final JCEFGoBackHandler goBackHandler;

    public JCEFReportListener(@NotNull Project project, @NotNull JCEFGoBackHandler goBackHandler) {
        this.project = project;
        this.goBackHandler = goBackHandler;
    }

    public void process(String href) {
        if (!href.isEmpty()) {
            // file://C:/Users/abc/IdeaProjects/test/tmp/xkcd-swagger.json?pointer=/a/b/c
            if (href.startsWith("file://") && href.contains("?pointer=")) {
                Matcher matcher = FILE_WITH_LINE_URI.matcher(href);
                if (matcher.find()) {
                	String fileName = URLDecoder.decode(matcher.group(1), StandardCharsets.UTF_8);
                    String pointer = matcher.group(2);
                    VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
                    if (file != null) {
                        ASTService astService = ASTService.getInstance(project);
                        Node root = astService.getRootNode(file);
                        if (root != null) {
                            Node target = root.find(pointer);
                            if (target != null) {
                                ApplicationManager.getApplication().invokeLater(() -> {
                                    Range range = EclipseUtil.getSelectionRange(target);
                                    new OpenFileDescriptor(project, file, range.getOffset(), range.getLength()).navigate(true);
                                });
                            }
                        }
                    }
                }
            }
            // file:///jbcefbrowser/go-full-report
            else if (HTML_GO_BACK_LINK.equals(href)) {
                goBackHandler.handleBackToLink();
            }
            // file:///jbcefbrowser/data-issue-id=v3-semantic-schema-property-required
            else if (href.startsWith(HTML_ISSUE_ID_LINK_PREFIX)) {
                copyInfoToClipboard(href.replace(HTML_ISSUE_ID_LINK_PREFIX, StringUtils.EMPTY));
            }
            // file:///C:/Users/viach/AppData/Local/Temp/report_jnyvaueyvu/logo.svg
            else if (href.startsWith("file://") && href.endsWith(".svg")) {
                BrowserUtil.browse(LOGO_SITE_URL);
            }
            else {
                BrowserUtil.browse(href);
            }
        }
    }

    private static void copyInfoToClipboard(String text) {
        try {
            CopyPasteManager.getInstance().setContents(new StringSelection(text));
        }
        catch (Exception ignore) {
        }
    }
}
