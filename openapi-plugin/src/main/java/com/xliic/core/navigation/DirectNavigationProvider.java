package com.xliic.core.navigation;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.psi.PsiElement;

public interface DirectNavigationProvider {

	@Nullable
	public PsiElement getNavigationElement(@NotNull PsiElement psiElement);
}
