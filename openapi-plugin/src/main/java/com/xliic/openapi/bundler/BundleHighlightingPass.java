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
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.ParserService;

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
		ParserService parserService = ParserService.getInstance(myProject);
		Map<String, Location> pointerToLocationMap = parserService.parsePointerToLocationMap(myDocument.getText(),
				OpenApiUtils.getFileType(bundleFile));

		for (BundleError error : exceptions) {
			if (!pointerToLocationMap.containsKey(error.getSourcePointer())) {
				continue;
			}
			String msg = error.getMessage();
			String pointer = error.getSourcePointer();
			TextRange range = pointerToLocationMap.get(pointer).getTextRange();
			HighlightInfoType type = getHighlightInfoType(GENERIC_ERROR, ERROR, getSeverityRegistrar(myProject));
			HighlightInfo info = newHighlightInfo(type).range(range).pointer(pointer).descriptionAndTooltip(msg)
					.create();
			highlights.add(info);
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
