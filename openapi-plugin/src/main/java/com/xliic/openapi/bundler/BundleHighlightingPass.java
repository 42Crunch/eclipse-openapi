package com.xliic.openapi.bundler;

import static com.xliic.core.codeInsight.HighlightInfo.newHighlightInfo;
import static com.xliic.core.codeInsight.SeverityRegistrar.getSeverityRegistrar;
import static com.xliic.core.codeInsight.UpdateHighlightersUtil.setHighlightersToEditor;
import static com.xliic.core.codeInspection.ProblemDescriptorUtil.getHighlightInfoType;
import static com.xliic.core.codeInspection.ProblemHighlightType.GENERIC_ERROR;
import static com.xliic.core.lang.HighlightSeverity.ERROR;
import static com.xliic.openapi.utils.Utils.REF;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeHighlighting.TextEditorHighlightingPass;
import com.xliic.core.codeInsight.HighlightInfo;
import com.xliic.core.codeInsight.HighlightInfoType;
import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.codeInsight.QuickFixAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.TextRange;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.actions.FixHostApprovedAction;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.ExtRefService;

public class BundleHighlightingPass extends TextEditorHighlightingPass {

    public final static String EXT_REF_STARTS_WITH = "Failed to resolve external reference";
    public final static String EXT_REF_ENDS_WITH = "is not in the list of approved hosts";

    private final PsiFile psiFile;

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
        if (root != null) {
            ExtRefService extRefService = ExtRefService.getInstance(myProject);
            for (BundleError error : exceptions) {
                String pointer = error.getSourcePointer();
                Node target = root.find(pointer);
                if (target != null) {
                    String msg = error.getMessage();
                    Range nodeRange = target.getKeyRange();
                    TextRange range = new TextRange(nodeRange.getStartOffset(), nodeRange.getEndOffset());
                    HighlightInfoType type = getHighlightInfoType(GENERIC_ERROR, ERROR, getSeverityRegistrar(myProject));
                    HighlightInfo.Builder builder = newHighlightInfo(type).pointer(pointer).range(range);
                    HighlightInfo info = builder.descriptionAndTooltip(msg).create();
                    String hostname = getExtRefHostName(msg, target);
                    if ((hostname != null) && !extRefService.isSafe(hostname)) {
                        List<IntentionAction> actions = new LinkedList<>();
                        actions.add(new FixHostApprovedAction(hostname));
                        QuickFixAction.registerQuickFixActions(this, pointer, actions);
                    }
                    highlights.add(info);
                }
            }
        }
    }

    private static String getExtRefHostName(String msg, Node target) {
        if (REF.equals(target.getKey())) {
            final String url = target.getValue();
            if (ExtRef.isExtRef(url) && msg.startsWith(EXT_REF_STARTS_WITH) && msg.endsWith(EXT_REF_ENDS_WITH)) {
                try {
                    return getAuthorityName(target);
                } catch (URISyntaxException e) {
                    return null;
                }
            }
        }
        return null;
    }

    private static String getAuthorityName(Node target) throws URISyntaxException {
        URI uri = new URI(target.getValue());
        String authority = uri.getAuthority();
        return authority.startsWith("www.") ? authority.substring(4) : authority;
    }

    @Override
    public void doApplyInformationToEditor() {
        setHighlightersToEditor(myProject, myDocument, 0, psiFile.getTextLength(), highlights, getColorsScheme(), getId());
    }
}
