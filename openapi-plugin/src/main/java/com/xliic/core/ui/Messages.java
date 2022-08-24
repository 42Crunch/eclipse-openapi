package com.xliic.core.ui;

import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.swt.widgets.Display;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;

public class Messages {

    public static final int OK = 0;
    public static final int YES = 0;
    public static final int NO = 1;
    public static final int CANCEL = 2;

    public static int showOkCancelDialog(@Nullable Project project,
            @Nullable String message,
            @NotNull String title,
            @NotNull String okText,
            @NotNull String cancelText,
            @Nullable Icon icon) {
        Boolean answer = MessageDialog.openQuestion(Display.getDefault().getActiveShell(), title, message);
        return answer ? OK : NO;
    }

    public static void showMessageDialog(@Nullable Project project,
            @NotNull String message,
            @NotNull String title,
            @Nullable Icon icon) {
        if (icon == Icon.ERROR) {
            MessageDialog.openError(EclipseUtil.getShell(), title, message);
        } else if (icon == Icon.WARNING) {
            MessageDialog.openWarning(EclipseUtil.getShell(), title, message);
        } else if (icon == Icon.INFO) {
            MessageDialog.openInformation(EclipseUtil.getShell(), title, message);
        }
    }

    public static Icon getErrorIcon() {
        return Icon.ERROR;
    }

    public static Icon getWarningIcon() {
        return Icon.WARNING;
    }

    public static Icon getQuestionIcon() {
        return Icon.INFO;
    }
}
