package com.xliic.openapi.quickfix.managers;

import java.util.LinkedList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.editor.PlaceHolder;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;

public abstract class FixManager {

    protected final PsiFile psiFile;
    protected final Project project;

    protected FixManager(PsiFile psiFile) {
        this.psiFile = psiFile;
        project = psiFile.getProject();
    }

    public abstract String getTitle();

    public abstract List<FixItem> getFixItems();

    public boolean isAvailable() {
        return true;
    }

    public boolean showDialog() {
        return false;
    }

    public boolean openDialog() {
        return false;
    }

    public static String getAbsolutePointer(String issuePointer, String fixPointer) {
        return StringUtils.isEmpty(fixPointer) ? issuePointer : issuePointer + fixPointer;
    }

    protected BundleResult getBundle(String auditFileName, Project project) {
        BundleService bundleService = BundleService.getInstance(project);
        return bundleService.getBundle(auditFileName);
    }

    protected OpenApiVersion getOpenApiVersion(String auditFileName, Project project) {
        return ASTService.getOpenAPIVersion(project, auditFileName);
    }

    protected boolean isJson(PsiFile file) {
        return OpenApiUtils.getFileType(file) == OpenApiFileType.Json;
    }

    public abstract boolean isResponsibleFor(@NotNull String pointer, @NotNull String label);

    @NotNull
    protected static List<Object> wrap(List<Object> values) {
        List<Object> result = new LinkedList<>();
        for (Object object : values) {
            if (object instanceof String) {
                String value = (String) object;
                result.add(value.replace("\\", "\\\\"));
            } else {
                result.add(object);
            }
        }
        return result;
    }

    @NotNull
    protected PlaceHolder getPlaceHolder(String name, String path, boolean isKeyType, List<Object> values, String fixPointer, QuickFix fix) {
        fixPointer = trimPointer(fixPointer);
        String pointer = fixPointer + path;
        if (fix.getType() == FixType.Insert) {
            ASTService astService = ASTService.getInstance(project);
            Node root = astService.getRootNode(psiFile.getVirtualFile());
            if (root != null) {
                Node target = root.find(fixPointer);
                if ((target != null) && target.isArray()) {
                    pointer = fixPointer + "/" + target.getChildren().size() + path;
                }
            }
        }
        return new PlaceHolder(fix + "/" + name, pointer, isKeyType, values);
    }

    @NotNull
    protected PlaceHolder getPlaceHolder(FixParameter parameter, List<Object> values, String fixPointer, QuickFix fix) {
        return getPlaceHolder(parameter.getName(), parameter.getPath(), parameter.isKeyType(), values, fixPointer, fix);
    }

    private static String trimPointer(String pointer) {
        return pointer.endsWith("/") ? pointer.substring(0, pointer.length() - 1) : pointer;
    }
}
