package com.xliic.openapi.actions;

import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.action.IMenuManager;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.actions.ActionGroup;

import com.xliic.openapi.snippets.Snippet;

public class OpenAPITreePathActionGroup extends ActionGroup {

	private List<String> choices;
	private Snippet snippet;
	private DefaultMutableTreeNode treeNode;
	private Image icon;

	public OpenAPITreePathActionGroup(List<String> choices, String title, Snippet snippet, DefaultMutableTreeNode node, Image icon) {
		super();
		this.choices = choices;
		this.snippet = snippet;
		this.treeNode = node;
		this.icon = icon;
	}
	
	public OpenAPITreePathActionGroup() {
		super();
	}
	
	@Override
	public void fillContextMenu(IMenuManager menu) {
      for (String choice : choices) {
    	  menu.add(new AddSnippetAction(choice, snippet, treeNode, icon));
	  }
	}
}
