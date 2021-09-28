package com.xliic.idea.navigation;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.idea.psi.PsiElement;

public interface DirectNavigationProvider {

	@Nullable
	public PsiElement getNavigationElement(@NotNull PsiElement psiElement);
}
