package com.xliic.openapi.editor;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang.StringUtils;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.ui.PlatformUI;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.OpenApiTargetMapping;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.tree.OpenApiTreeNode;
import com.xliic.openapi.utils.OpenAPIUtils;

public class CompletionHelper {

	private final static String NUMBER_SIGN = "#";
	private final static String PREFIX = NUMBER_SIGN + "/";

	private static final String REF_KEY = "$ref";
	private static final Pattern KEY_VALUE_REGEX = Pattern.compile("(.*):(.*)");

	private static final ICompletionProposal[] EMPTY_ARRAY = new ICompletionProposal[0];

	public static ICompletionProposal[] updateResultSet(ITextViewer viewer, int offset) {

		IDocument doc = viewer.getDocument();
		int line, lineOffset;
		try {
			line = doc.getLineOfOffset(offset);
			lineOffset = doc.getLineOffset(line);
			int length = doc.getLineLength(line);

			String selectedString = doc.get(lineOffset, length);
			Matcher matcher = KEY_VALUE_REGEX.matcher(selectedString);
			boolean isKeyValuePattern = matcher.find();

			if (isKeyValuePattern) {
				String key = StringUtils.strip(matcher.group(1), "\"' ");
				if (!REF_KEY.equals(key)) {
					return null;
				}
			} else {
				return null;
			}
		} catch (BadLocationException e) {
			return EMPTY_ARRAY;
		}

		VirtualFile file = OpenAPIUtils.getSelectedOpenAPIFile();
		if (file == null) {
			return EMPTY_ARRAY;
		}
		IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
		if (!dataService.hasFileProperty(file.getPath())) {
			return EMPTY_ARRAY;
		}
		ParserData data = dataService.getParserData(file.getPath());
		Map<Integer, DefaultMutableTreeNode> lineToRefMap = data.getLineToRefMap();
		if (!lineToRefMap.containsKey(line)) {
			return EMPTY_ARRAY;
		}

		OpenApiVersion version = dataService.getFileProperty(file.getPath()).getVersion();
		DefaultMutableTreeNode node = lineToRefMap.get(line);
		Map<String, String> mapping = OpenApiTargetMapping.getTargetMapping(version);

		String target = null;
		DefaultMutableTreeNode parent = (DefaultMutableTreeNode) node.getParent();
		while (parent != null && target == null) {
			OpenApiTreeNode o = (OpenApiTreeNode) parent.getUserObject();
			if (o.isPanel()) {
				break;
			}
			String key = o.getKey();
			parent = (DefaultMutableTreeNode) parent.getParent();
			if (mapping.containsKey(key)) {
				target = mapping.get(key);
			}
		}
		if (target == null) {
			return EMPTY_ARRAY;
		}
		Map<String, DefaultMutableTreeNode> pointerToNodesMap = data.getPointerToNodesMap();
		if (!pointerToNodesMap.containsKey(target)) {
			return EMPTY_ARRAY;
		}
		node = pointerToNodesMap.get(target);
		int count = node.getChildCount();
		if (count == 0) {
			return EMPTY_ARRAY;
		}
		ICompletionProposal[] completionProposals = new ICompletionProposal[count];
		for (int i = 0; i < count; i++) {
			DefaultMutableTreeNode p = (DefaultMutableTreeNode) node.getChildAt(i);
			OpenApiTreeNode o = (OpenApiTreeNode) p.getUserObject();
			String element = NUMBER_SIGN + o.getPointer();
			if (element.toLowerCase().startsWith(PREFIX)) {
				completionProposals[i] = new OpenAPICompletionProposal(element, offset, 0, element.length());
			}
		}
		return completionProposals;
	}
}
