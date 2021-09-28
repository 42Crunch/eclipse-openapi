package com.xliic.openapi.bundler;

import static com.xliic.idea.codeHighlighting.HighlightSeverity.ERROR;
import static com.xliic.idea.codeInsight.HighlightInfo.newHighlightInfo;
import static com.xliic.idea.codeInsight.SeverityRegistrar.getSeverityRegistrar;
import static com.xliic.idea.codeInsight.UpdateHighlightersUtil.setHighlightersToEditor;
import static com.xliic.idea.codeInspection.ProblemDescriptorUtil.getHighlightInfoType;
import static com.xliic.idea.codeInspection.ProblemHighlightType.GENERIC_ERROR;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.ProgressIndicator;
import com.xliic.idea.TextRange;
import com.xliic.idea.codeHighlighting.TextEditorHighlightingPass;
import com.xliic.idea.codeInsight.HighlightInfo;
import com.xliic.idea.codeInsight.HighlightInfoType;
import com.xliic.idea.editor.Editor;
import com.xliic.idea.file.PsiFile;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;

public class BundleHighlightingPass extends TextEditorHighlightingPass {

	private final PsiFile psiFile;
	private final List<HighlightInfo> highlights = new LinkedList<>();

	public BundleHighlightingPass(final PsiFile file, final Editor editor) {
		super(file.getProject(), editor.getDocument(), true);
		psiFile = file;
	}

	@Override
	public void doCollectInformation(@NotNull final ProgressIndicator progress) {

		BundleService bundleService = BundleService.getInstance(myProject);
		if (!bundleService.hasBundles()) {
			highlights.clear();
			return;
		}

		String bundleFile = psiFile.getVirtualFile().getPath();
		Map<String, Set<BundleError>> bundleErrorsMap = bundleService.getBundleErrorsMap();
		if (!bundleErrorsMap.containsKey(bundleFile)) {
			highlights.clear();
			return;
		}

		Set<BundleError> exceptions = bundleErrorsMap.get(bundleFile);
		ASTService astService = ASTService.getInstance(myProject);
		Node root = astService.getRootNode(psiFile.getVirtualFile());

		for (BundleError error : exceptions) {
			Node target = root.find(error.getSourcePointer());
			if (target != null) {
				String msg = error.getMessage();
				Range nodeRange = target.getKeyRange();
				TextRange range = new TextRange(nodeRange.getStartOffset(), nodeRange.getEndOffset());
				HighlightInfoType type = getHighlightInfoType(GENERIC_ERROR, ERROR, getSeverityRegistrar(myProject));
				HighlightInfo info = newHighlightInfo(type).range(range).descriptionAndTooltip(msg).create();
				highlights.add(info);
			}
		}
	}

	@Override
	public void doApplyInformationToEditor() {
		setHighlightersToEditor(myProject, myDocument, 0, psiFile.getTextLength(), highlights, getColorsScheme(),
				getId());
	}

	@Override
	public List<HighlightInfo> getInformationToEditor() {
		return highlights;
	}
}
