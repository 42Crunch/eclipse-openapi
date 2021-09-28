package com.xliic.openapi.tree;

import static com.xliic.openapi.OpenApiPanelKeys.COMPONENTS;
import static com.xliic.openapi.OpenApiPanelKeys.DEFINITIONS;
import static com.xliic.openapi.OpenApiPanelKeys.GENERAL;
import static com.xliic.openapi.OpenApiPanelKeys.GENERAL_POINTER;
import static com.xliic.openapi.OpenApiPanelKeys.NAME_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.PARAMETERS;
import static com.xliic.openapi.OpenApiPanelKeys.PARAMETERS_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.PATHS;
import static com.xliic.openapi.OpenApiPanelKeys.REF_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.RESPONSES;
import static com.xliic.openapi.OpenApiPanelKeys.RESPONSES_KEY;
import static com.xliic.openapi.parser.pointer.LocationUtils.pointer;

import com.xliic.idea.editor.LogicalPosition;
import com.xliic.openapi.parser.pointer.Location;

public class OpenApiTreeNode {

	private String key;
	private Location location;

	private final boolean isPanel;
	private boolean panelExists;

	private final String panelKey;
	private final String parentKey;
	private String pointer;

	private final int level;
	private final boolean visible;

	private final boolean hasMapParent;
	private boolean applyHint;

	public OpenApiTreeNode(String key) {
		this(key, new Location(), true, key, key, GENERAL.equals(key) ? GENERAL_POINTER : pointer(key), 0, true, true);
	}

	public OpenApiTreeNode(String key, Location location, boolean isPanel, String panelKey, String parentKey,
			String pointer, int level, boolean hasMapParent, boolean isParentVisible) {
		this.key = key;
		this.location = location;
		this.panelKey = panelKey;
		this.parentKey = parentKey;
		this.pointer = pointer;
		this.isPanel = isPanel;
		this.level = level;
		this.panelExists = false;
		this.hasMapParent = hasMapParent;
		this.applyHint = false;
		this.visible = isParentVisible && visible();
	}

	private boolean visible() {
		if (REF_KEY.equals(key)) {
			return false;
		} else if (PATHS.equals(panelKey)) {
			if (level <= 2) {
				return true;
			} else if ((level == 3) && (PARAMETERS_KEY.equals(key) || RESPONSES_KEY.equals(key))) {
				return true;
			} else if ((level == 4) && RESPONSES_KEY.equals(parentKey)) {
				return true;
			} else if ((level == 5) && NAME_KEY.equals(key) && PARAMETERS_KEY.equals(parentKey)) {
				return true;
			}
			return visible;
		} else if (PARAMETERS.equals(panelKey)) {
			return level <= 1;
		} else if (RESPONSES.equals(panelKey)) {
			return level <= 1;
		} else if (COMPONENTS.equals(panelKey)) {
			return level <= 2;
		} else if (DEFINITIONS.equals(panelKey)) {
			return level <= 1;
		}
		return true;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public void replaceKey(String newKey) {
		location = location.applyShift(newKey.length() - getKey().length());
		key = newKey;
	}

	public boolean applyHint() {
		return applyHint;
	}

	public void setApplyHint(boolean applyHint) {
		this.applyHint = applyHint;
	}

	public boolean is(String key) {
		return this.key.equals(key);
	}

	public long getLine() {
		return location.getLine();
	}

	public long getColumn() {
		return location.getColumn();
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getPanelKey() {
		return panelKey;
	}

	public String getParentKey() {
		return parentKey;
	}

	public boolean isPanel() {
		return isPanel;
	}

	public int getLevel() {
		return level;
	}

	public boolean isVisible() {
		return visible;
	}

	public boolean hasMapParent() {
		return hasMapParent;
	}

	public long getPadding() {
		return location.getColumn() - key.length() - 1;
	}

	public boolean isPanelExists() {
		return panelExists;
	}

	public void setPanelExists(boolean panelExists) {
		this.panelExists = panelExists;
	}

	public String getPointer() {
		return pointer;
	}

	public void setPointer(String pointer) {
		this.pointer = pointer;
	}

	public long getStartOffset() {
		return location.getStartOffset();
	}

	public long getEndOffset() {
		return location.getEndOffset();
	}

	public LogicalPosition getLogicalPosition() {
		return new LogicalPosition((int) location.getStartOffset());
	}
}
