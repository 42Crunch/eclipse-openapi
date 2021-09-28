package com.xliic.openapi.report.html;

import java.io.File;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.eclipse.swt.browser.LocationEvent;
import org.eclipse.swt.browser.LocationListener;
import org.eclipse.swt.dnd.Clipboard;
import org.eclipse.swt.dnd.TextTransfer;
import org.eclipse.swt.dnd.Transfer;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.internal.about.AboutUtils;

import com.xliic.idea.file.LocalFileSystem;
import com.xliic.idea.file.OpenFileDescriptor;
import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;

@SuppressWarnings("restriction")
public class HTMLReportListener implements LocationListener {

	private static final String HTTP_PROTOCOL_PREFIX = "http://";
	private static final String HTTPS_PROTOCOL_PREFIX = "https://";
	private static final String HTML_GO_BACK_LINK = "#back";
	private static final String HTML_ISSUE_ID_LINK_PREFIX = "data-issue-id=";
	private static final Pattern FILE_WITH_LINE_URI = Pattern.compile("file://(.*)\\?pointer=(.*)");
	private static final Pattern ISSUE_ID_URI = Pattern.compile(".*data-issue-id=(.*)");
	private final HTMLReportManager manager;
	private final Shell shell;

	public HTMLReportListener(HTMLReportManager manager, Shell shell) {
		this.manager = manager;
		this.shell = shell;
	}

	@Override
	public void changing(LocationEvent event) {

		String href = event.location;
		// Example
		// href=file://C:/Users/abc/IdeaProjects/test/tmp/xkcd-swagger.json?pointer=/a/b/c
		if (href.startsWith("file://") && href.contains("?pointer=")) {
			Matcher matcher = FILE_WITH_LINE_URI.matcher(href);
			if (matcher.find()) {
				String fileName = matcher.group(1);
				String pointer = matcher.group(2);
				VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
				if (file != null) {
					ASTService astService = ASTService.getInstance(manager.getProject());
					Node target = astService.getRootNode(file).find(pointer);
					new OpenFileDescriptor(manager.getProject(), file, target.getRange().getStartOffset())
							.navigate(true);
				}
			}
			event.doit = false;
			return;
		} else if (href.endsWith(HTML_GO_BACK_LINK)) {
			manager.handleBackToLink();
			event.doit = false;
		}
		// Example href data-issue-id=response-429
		else if (href.contains(HTML_ISSUE_ID_LINK_PREFIX)) {
			Matcher matcher = ISSUE_ID_URI.matcher(href);
			if (matcher.find()) {
				String issueId = URLDecoder.decode(matcher.group(1), StandardCharsets.UTF_8);
				copyInfoToClipboard(issueId);
			}
			event.doit = false;
		} else if (href.startsWith(HTTP_PROTOCOL_PREFIX) || href.startsWith(HTTPS_PROTOCOL_PREFIX)) {
			AboutUtils.openLink(shell, href);
			event.doit = false;
		}
	}

	@Override
	public void changed(LocationEvent event) {
	}

	private static void copyInfoToClipboard(String textData) {
		try {
			Clipboard clipboard = new Clipboard(null);
			TextTransfer textTransfer = TextTransfer.getInstance();
			Transfer[] transfers = new Transfer[] { textTransfer };
			Object[] data = new Object[] { textData };
			clipboard.setContents(data, transfers);
			clipboard.dispose();
		} catch (Exception ignore) {
		}
	}
}
