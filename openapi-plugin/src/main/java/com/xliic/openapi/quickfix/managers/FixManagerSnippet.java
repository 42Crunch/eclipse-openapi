package com.xliic.openapi.quickfix.managers;

import static com.xliic.openapi.OpenAPITagsOrder.componentsTags;
import static com.xliic.openapi.OpenAPITagsOrder.topTags;
import static com.xliic.openapi.OpenApiPanelKeys.GENERAL;
import static com.xliic.openapi.OpenApiPanelKeys.PATHS;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang.WordUtils;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.parser.replace.ReplaceManager;
import com.xliic.openapi.parser.replace.Replacement;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.editor.PlaceHolder;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.SimpleNode;

public class FixManagerSnippet extends FixManager {

    private final String title;
    private final QuickFix quickFix;
    private final DefaultMutableTreeNode node;

    public FixManagerSnippet(PsiFile psiFile, QuickFix quickFix, DefaultMutableTreeNode node) {
        super(psiFile);
        this.title = quickFix.getTitle();
        this.node = node;
        this.quickFix = quickFix;
    }

    public FixManagerSnippet(PsiFile psiFile, String title, QuickFix quickFix, DefaultMutableTreeNode node) {
        super(psiFile);
        this.title = title;
        this.node = node;
        this.quickFix = quickFix;
    }

    @Override
    public List<FixItem> getFixItems() {

        boolean isJson = isJson(psiFile);
        String fixPointer = quickFix.getPointer();
        String clickedPointer = ((BaseNode) node.getUserObject()).getPointer();
        if (!clickedPointer.equals("/general") && clickedPointer.startsWith(fixPointer)) {
            fixPointer = clickedPointer;
        }

        // Process replacements here as the fix text may be updated later and parameters
        // paths will become invalid
        String text = quickFix.getFixText();
        List<FixParameter> parameters = quickFix.getParameters();
        boolean hasParameters = !parameters.isEmpty();
        if (hasParameters) {
            List<Replacement> replacements = new LinkedList<>();
            if (quickFix.getProblems().contains("operation")) {
                for (FixParameter parameter : parameters) {
                    if ("operation".equals(parameter.getName())) {
                        replacements.add(new Replacement(parameter.getPath(), title, parameter.isKeyType()));
                    }
                }
            } else {
                for (FixParameter parameter : parameters) {
                    List<Object> values = wrap(parameter.getValues());
                    if (!values.isEmpty()) {
                        String value = (String) values.get(0);
                        replacements.add(new Replacement(parameter.getPath(), value, parameter.isKeyType()));
                    }
                }
            }
            if (!replacements.isEmpty()) {
                text = ReplaceManager.replace(text, replacements, isJson);
            }
        }

        // Process the fix text as snippets insertion node may not exist
        String pointer = fixPointer;
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(psiFile.getVirtualFile());
        while (root.find(pointer) == null) {

            int index = pointer.lastIndexOf("/");
            String key = pointer.substring(index + 1);
            pointer = pointer.substring(0, index);

            StringBuilder sb = new StringBuilder();
            if (isArray(key)) {
                sb.append("{\"").append(key).append("\":[").append(text).append("]}");
            } else {
                sb.append("{\"").append(key).append("\":").append(text).append("}");
            }
            text = sb.toString();
        }
        text = QuickFix.formatFixText(text, isJson);

        String insertAfterPointer = null;
        if (pointer.isEmpty()) {
            insertAfterPointer = getInsertAfterPointer(text, root, topTags, "");
        } else if ("/components".equals(pointer)) {
            insertAfterPointer = getInsertAfterPointer(text, root, componentsTags, "/components");
        }

        // Process placeholders
        List<PlaceHolder> placeHolders = new LinkedList<>();
        if (hasParameters) {
            if (!pointer.equals(fixPointer) && isPointerArray(fixPointer)) {
                fixPointer = fixPointer + "/0";
            }
            if (quickFix.getProblems().contains("operation")) {
                List<Object> values = Collections.emptyList();
                for (FixParameter parameter : parameters) {
                    if ("description".equals(parameter.getName())) {
                        String path = parameter.getPath().replace("get", title);
                        placeHolders.add(getPlaceHolder(parameter.getName(), path, parameter.isKeyType(), values, fixPointer, quickFix));
                    }
                }
            } else {
                for (FixParameter parameter : parameters) {
                    List<Object> values = wrap(parameter.getValues());
                    placeHolders.add(getPlaceHolder(parameter, values, fixPointer, quickFix));
                }
            }
        }

        // Everything is ready here
        List<FixItem> result = new LinkedList<>();
        result.add(new FixItem(pointer, text, quickFix.getType()).withAnchorPointer(insertAfterPointer).withPlaceHolders(placeHolders));
        return result;
    }

    @Override
    public String getTitle() {
        return WordUtils.capitalize(title);
    }

    @Override
    public boolean isAvailable() {
        BaseNode o = (BaseNode) node.getUserObject();
        if ((o instanceof SimpleNode) && PATHS.equals(((SimpleNode) o).getParentName())) {
            Node node = o.getNode();
            for (Node child : node.getChildren()) {
                if (title.equals(child.getKey())) {
                    return false;
                }
            }
            return true;
        } else if (GENERAL.equals(o.getName())) {
            String id = new LinkedList<>(quickFix.getProblems()).get(0);
            if (Set.of("info", "host", "basePath").contains(id)) {
                ASTService astService = ASTService.getInstance(project);
                Node root = astService.getRootNode(psiFile.getVirtualFile());
                return root.find("/" + id) == null;
            }
        }
        return true;
    }

    private String getInsertAfterPointer(String text, Node root, List<String> sortedTags, String prefix) {
        Node node = new ParserJsonAST().parse(text);
        if ((node != null) && node.isObject() && (node.getChildren().size() == 1)) {
            String tag = node.getChildren().get(0).getKey();
            int index = sortedTags.indexOf(tag);
            if (index > 0) {
                for (int i = index - 1; i >= 0; i--) {
                    String topTag = sortedTags.get(i);
                    Node topNode = root.find(prefix + "/" + topTag);
                    if (topNode != null) {
                        return topNode.getJsonPointer();
                    }
                }
            }
        }
        return null;
    }

    private static boolean isArray(String key) {
        return "security".equals(key) || "servers".equals(key);
    }

    private static boolean isPointerArray(String pointer) {
        return isArray(pointer.substring(pointer.lastIndexOf("/") + 1));
    }

    @Override
    public boolean isResponsibleFor(String pointer, String label) {
        return false;
    }
}
