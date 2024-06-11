package com.xliic.openapi.quickfix.managers;

import java.util.LinkedList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiFileType;
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
import com.xliic.openapi.utils.Utils;

public abstract class FixManager {

	@NotNull
    protected final PsiFile psiFile;
	@NotNull
    protected final Project project;
    protected final boolean isJson;

    protected FixManager(@NotNull PsiFile psiFile) {
        this.psiFile = psiFile;
        project = psiFile.getProject();
        isJson = (Utils.getFileType(psiFile) == OpenApiFileType.Json);
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

    public static @NotNull String getAbsolutePointer(@NotNull String issuePointer, @Nullable String fixPointer) {
        return StringUtils.isEmpty(fixPointer) ? issuePointer : issuePointer + fixPointer;
    }

    protected @Nullable BundleResult getBundle(@NotNull String auditFileName, @NotNull Project project) {
        BundleService bundleService = BundleService.getInstance(project);
        return bundleService.getBundle(auditFileName);
    }

    protected @NotNull OpenApiVersion getOpenApiVersion(@NotNull String auditFileName, @NotNull Project project) {
        return ASTService.getOpenAPIVersion(project, auditFileName);
    }

    public abstract boolean isResponsibleFor(@NotNull String pointer, @NotNull String label);

    @NotNull
    protected static List<Object> wrap(@NotNull List<Object> values) {
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
    protected PlaceHolder getPlaceHolder(@NotNull String name, 
    		                             @NotNull String path, 
    		                             boolean isKeyType, 
    		                             @NotNull List<Object> values, 
    		                             @NotNull String fixPointer, 
    		                             @NotNull QuickFix fix) {
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
    protected PlaceHolder getPlaceHolder(@NotNull FixParameter parameter, 
    		                             @NotNull List<Object> values,
    		                             @NotNull String fixPointer,
    		                             @NotNull QuickFix fix) {
        return getPlaceHolder(parameter.getName(), parameter.getPath(), parameter.isKeyType(), values, fixPointer, fix);
    }

    private static @NotNull String trimPointer(@NotNull String pointer) {
        return pointer.endsWith("/") ? pointer.substring(0, pointer.length() - 1) : pointer;
    }
}
