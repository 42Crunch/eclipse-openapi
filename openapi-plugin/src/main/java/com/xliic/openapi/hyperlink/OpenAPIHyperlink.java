package com.xliic.openapi.hyperlink;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.hyperlink.IHyperlink;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.psi.PsiElement;
import com.xliic.openapi.utils.OpenAPIUtils;

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
		IFile file = element.getContainingFile().getVirtualFile().getIFile();
		OpenAPIUtils.gotoFile(file, element.getOffset(), 0);
	}
}