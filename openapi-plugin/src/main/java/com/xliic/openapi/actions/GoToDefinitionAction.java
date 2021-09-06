package com.xliic.openapi.actions;

import java.io.File;
import java.nio.file.Paths;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.swing.tree.DefaultMutableTreeNode;
import org.jetbrains.annotations.NotNull;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.expressions.IEvaluationContext;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.Path;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.ITextSelection;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.ISources;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.handlers.HandlerUtil;
import org.eclipse.ui.texteditor.ITextEditor;

import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.services.IParserService;
import com.xliic.openapi.tree.OpenApiTreeNode;
import com.xliic.openapi.utils.EditorUtil;
import com.xliic.openapi.utils.OpenAPIUtils;

public class GoToDefinitionAction extends AbstractHandler {

	private static final String REF = "#/";
	private static final String REF_KEY = "$ref";
  	private static final Pattern KEY_VALUE_REGEX = Pattern.compile("(.*):(.*)");
  
  	private String key;
  	private String value;
  	private boolean isKeyValuePattern;
  	private int indexStart;
  	private int indexStop;

	@Override
	public void setEnabled(Object evaluationContext) {
		
		setBaseEnabled(false);
        if (evaluationContext instanceof IEvaluationContext) {

        	Object editor = ((IEvaluationContext) evaluationContext).getVariable(ISources.ACTIVE_EDITOR_NAME);
			if (editor instanceof IEditorPart) {
				
				IEditorInput input = ((IEditorPart) editor).getEditorInput();
				if (!(input instanceof IFileEditorInput)) {
					return;			
				}			
				IFileEditorInput fileInput = (IFileEditorInput) input;
				IDocument doc = EditorUtil.getDocument(fileInput);
				ITextSelection sel = (ITextSelection) ((ITextEditor) editor).getSelectionProvider().getSelection();

				try {
					int lineOffset = doc.getLineOffset(sel.getStartLine());
					int innerOffset = sel.getOffset() - lineOffset;
					int length = doc.getLineLength(sel.getStartLine());
					analize(doc.get(lineOffset, length));
					if (REF_KEY.equals(key) && !StringUtils.isEmpty(value) && isInsideRefValue(innerOffset)) {
						setBaseEnabled(true);
					}
				} 
				catch (BadLocationException e) {
				}
			}
        }
	}

	@Override
	public Object execute(ExecutionEvent event) throws ExecutionException {
	  
		IEditorPart editor = HandlerUtil.getActiveEditor(event);
		if (editor instanceof IEditorPart) {
			
			IEditorInput input = ((IEditorPart) editor).getEditorInput();
			if (!(input instanceof IFileEditorInput)) {
				return null;			
			}			
			IFileEditorInput fileInput = (IFileEditorInput) input;
			IDocument doc = EditorUtil.getDocument(fileInput);
			ITextSelection sel = (ITextSelection) ((ITextEditor) editor).getSelectionProvider().getSelection();
			IFile file = fileInput.getFile();
			
			try {
				int lineOffset = doc.getLineOffset(sel.getStartLine());		
				int length = doc.getLineLength(sel.getStartLine());
				analize(doc.get(lineOffset, length));

			    String text = value;
			    String title = "No definition found for " + text;

			    if (text.contains(REF)) {

			      String [] parts = text.split(REF);
			      String key = "/" + parts[1];
			      String refFileName = parts[0];

			      if (StringUtils.isEmpty(refFileName)) {
			        // Internal reference
			    	  IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
			    	  DefaultMutableTreeNode node = dataService.getParserData(file.getFullPath().toPortableString()).getPointerToNodesMap().get(key);
			    	  if (node == null) {
			    		  showRefNotFoundPopup(title, editor.getSite().getShell());
			    		  return null;
			    	  }
			    	  OpenApiTreeNode on = (OpenApiTreeNode) node.getUserObject();
                      int startOffset = (int) on.getStartOffset();
                      int endOffset = (int) on.getEndOffset();
                      ((ITextEditor) editor).selectAndReveal(startOffset, endOffset - startOffset);
			      }
			      else {
			        // External ref
			    	String name = new File(new File(Paths.get(file.getFullPath().toString()).getParent().toString()), refFileName).getAbsolutePath();
			    	IFile refFile = ResourcesPlugin.getWorkspace().getRoot().getFile(new Path(name));			    	
			        if (refFile == null) {
			        	showRefNotFoundPopup(title, editor.getSite().getShell());
			        	return null;
			        }

			        String text2 = OpenAPIUtils.getTextFromFile(refFile.getLocationURI());
			        IParserService parserService = (IParserService) PlatformUI.getWorkbench().getService(IParserService.class);
			        Map<String, Location> pointerToLocationMap = parserService.parsePointerToLocationMap(text2, OpenAPIUtils.getFileType(file));
			        if (!pointerToLocationMap.containsKey(key)) {
			        	showRefNotFoundPopup(title, editor.getSite().getShell());
			        	return null;
			        }
			        Location location = pointerToLocationMap.get(key);
			        OpenAPIUtils.gotoFile(refFile, (int) location.getStartOffset(), (int) (location.getEndOffset() - location.getStartOffset()));
			      }
			    }
			    else {
			    	String name = new File(new File(Paths.get(file.getFullPath().toString()).getParent().toString()), text).getAbsolutePath();
			    	IFile refFile = ResourcesPlugin.getWorkspace().getRoot().getFile(new Path(name));
			    	if (refFile == null) {
			    		showRefNotFoundPopup(title, editor.getSite().getShell());
			    		return null;
			    	}
			    	OpenAPIUtils.gotoFile(refFile, 0, 0);
			    }
			} 
			catch (BadLocationException e) {
			}
		}
		
	  return null;
  }

  private static void showRefNotFoundPopup(@NotNull String title, @NotNull Shell shell) {	
	  // Tooltip is better UI here, but it is impossible to calculate correct location to show
	  MessageDialog.openWarning(shell, "Warning", title);
  }

   private void analize(String selectedString) {

      Matcher matcher = KEY_VALUE_REGEX.matcher(selectedString);
      isKeyValuePattern = matcher.find();
      
      if (isKeyValuePattern) {
	      key = StringUtils.strip(matcher.group(1), "\"' ");
		  value = StringUtils.strip(matcher.group(2), "\"' ");
		  indexStart = selectedString.indexOf(value);
		  indexStop = indexStart + value.length();
      }
   }

   private boolean isInsideRefValue(int innerOffset) {
	   return (indexStart <= innerOffset) && (innerOffset <= indexStop);
   }
}
