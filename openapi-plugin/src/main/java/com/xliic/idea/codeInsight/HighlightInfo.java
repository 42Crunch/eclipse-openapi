package com.xliic.idea.codeInsight;

import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.idea.TextRange;
import com.xliic.idea.action.IntentionAction;

public class HighlightInfo {

	private final int severity;
	private final String message;
	private final int charStart;
	private final int charEnd;
	private final String pointer;

	private List<IntentionAction> actions;

	public HighlightInfo(int severity, String message, int charStart, int charEnd, String pointer) {
		this.severity = severity;
		this.message = message;
		this.charStart = charStart;
		this.charEnd = charEnd;
		this.pointer = pointer;
		actions = new LinkedList<>();
	}

	public int getSeverity() {
		return severity;
	}

	public String getMessage() {
		return message;
	}

	public int getCharStart() {
		return charStart;
	}

	public int getCharEnd() {
		return charEnd;
	}

	public String getPointer() {
		return pointer;
	}

	public List<IntentionAction> getActions() {
		return actions;
	}

	public void setActions(List<IntentionAction> actions) {
		this.actions = actions;
	}

	public static class Builder {

		private HighlightInfoType type;
		private TextRange textRange;
		private String description;
		private String pointer;

		public Builder(@NotNull HighlightInfoType type) {
			this.type = type;
		}

		@NotNull
		public Builder range(@NotNull TextRange textRange) {
			this.textRange = textRange;
			return this;
		}

		@NotNull
		public Builder pointer(@NotNull String pointer) {
			this.pointer = pointer;
			return this;
		}

		@NotNull
		public Builder descriptionAndTooltip(@NotNull String description) {
			this.description = description;
			return this;
		}

		@Nullable
		public HighlightInfo create() {
			return new HighlightInfo(type.getSeverity(), description, textRange.getMyStartOffset(),
					textRange.getMyEndOffset(), pointer);
		}
	}

	@NotNull
	public static HighlightInfo.Builder newHighlightInfo(@NotNull HighlightInfoType type) {
		return new HighlightInfo.Builder(type);
	}

	public void addAction(@Nullable IntentionAction action) {
		actions.add(action);
	}
}
