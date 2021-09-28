package com.xliic.openapi.hyperlink;

import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.Region;
import org.eclipse.jface.text.hyperlink.AbstractHyperlinkDetector;
import org.eclipse.jface.text.hyperlink.IHyperlink;
import org.eclipse.jface.text.hyperlink.IHyperlinkDetector;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.file.PsiFile;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.idea.psi.LeafPsiElement;
import com.xliic.idea.psi.PsiElement;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.editor.OpenAPINavigationProvider;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;

public class OpenAPIHyperlinkDetector extends AbstractHyperlinkDetector implements IHyperlinkDetector {

	private final Project project;
	private final ASTService astService;
	private final OpenAPINavigationProvider provider;

	public OpenAPIHyperlinkDetector() {
		project = OpenAPIAbstractUIPlugin.getInstance().getProject();
		astService = ASTService.getInstance(project);
		provider = new OpenAPINavigationProvider();
	}

	@Override
	public IHyperlink[] detectHyperlinks(ITextViewer textViewer, IRegion region, boolean canShowMultipleHyperlinks) {
		IDocument document = textViewer.getDocument();
		VirtualFile file = FileDocumentManager.getInstance().getFile(new Document(document));
		if (file != null) {
			int offset = region.getOffset();
			PsiFile psiFile = new PsiFile(project, file);
			Node root = astService.getRootNode(file);
			if (root != null) {
				Node node = root.findNodeAtOffset(offset);
				if (node != null) {
					PsiElement element = provider.getNavigationElement(new LeafPsiElement(offset, node, psiFile));
					if (element != null) {
						return new IHyperlink[] {
								new OpenAPIHyperlink(getRegion(node), element, isExternal(file, element)) };
					}
				}
			}
		}
		return null;
	}

	private IRegion getRegion(@NotNull Node node) {
		int offset = node.getValueRange().getStartOffset();
		int length = node.getValueRange().getEndOffset() - offset;
		return new Region(offset, length);
	}

	private boolean isExternal(@NotNull VirtualFile file, @NotNull PsiElement element) {
		return !file.equals(element.getContainingFile().getVirtualFile());
	}
}