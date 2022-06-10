package com.xliic.core.codeInsight.lookup;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.codeInsight.completion.InsertHandler;
import com.xliic.core.util.Icon;

public class LookupElementBuilder extends LookupElement {
	
	public LookupElementBuilder(@NotNull String lookupString) {
		super(lookupString);
	}

	public static @NotNull LookupElementBuilder create(@NotNull String lookupString) {
		return new LookupElementBuilder(lookupString);
	}
	
	public @NotNull LookupElementBuilder withIcon(@Nullable Icon icon) {
		return this;
	}
	
	public @NotNull LookupElementBuilder withTypeText(@Nullable String typeText) {
		return this;
	}
	
	public @NotNull LookupElementBuilder withInsertHandler(@Nullable InsertHandler<LookupElement> insertHandler) {
		return this;
	}
}
