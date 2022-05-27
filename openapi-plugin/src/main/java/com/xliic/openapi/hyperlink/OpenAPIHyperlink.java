package com.xliic.openapi.hyperlink;

import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.hyperlink.IHyperlink;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiElement;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.Range;

public class OpenAPIHyperlink implements IHyperlink {

	private final IRegion region;
	private final PsiElement element;
	private final boolean external;

	public OpenAPIHyperlink(@NotNull IRegion region, @NotNull PsiElement element, boolean external) {
		this.region = region;
		this.element = element;
		this.external = external;
	}

	@Override
	public IRegion getHyperlinkRegion() {
		return region;
	}

	@Override
	public String getTypeLabel() {
		return null;
	}

	@Override
	public String getHyperlinkText() {
		return "OpenAPI: Go To" + (external ? " External " : " ") + "Reference";
	}

	@Override
	public void open() {
		int offset = element.getOffset();
		Project project = element.getProject();
		Range range = EclipseUtil.getSelectionRange(element.getNode());
		VirtualFile file = element.getContainingFile().getVirtualFile();
		new OpenFileDescriptor(project, file, offset, range == null ? 0 : range.getLength()).navigate(true);
	}
}