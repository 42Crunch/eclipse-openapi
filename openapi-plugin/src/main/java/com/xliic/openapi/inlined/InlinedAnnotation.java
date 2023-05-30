package com.xliic.openapi.inlined;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import org.eclipse.jface.text.Position;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.jface.text.source.inlined.LineHeaderAnnotation;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.StyledText;
import org.eclipse.swt.events.MouseEvent;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.FontMetrics;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Image;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.ScanService;
import com.xliic.openapi.services.TryItService;
import com.xliic.openapi.tryit.payload.TryItOperation;

public class InlinedAnnotation extends LineHeaderAnnotation {

    private static final Image TRYIT_ICON = OpenAPIImages.TryItAnno.createImage();
    private static final Image SCAN_ICON = OpenAPIImages.ScanAnno.createImage();

    private static final String TRYIT_TEXT = "TryIt";
    private static final String SCAN_TEXT = "Scan";

    private static final int NOT_SET_ID = -1;
    private static final int TRYIT_ID = 0;
    private static final int SCAN_ID = 1;

    private int width;
    private int annoId = NOT_SET_ID;
    private final int annotationsNumber;
    private final List<Integer> bounds;

    @NotNull
    private final Project project;
    @NotNull
    private final TryItOperation top;
    @Nullable
    private final ScanOperation sop;

    @NotNull
    private Consumer<MouseEvent> action = e -> {
        if (!isOutsideWidget(e.x)) {
            actionPerformed(getAnnotationId(e.x));
        }
    };

    public InlinedAnnotation(@NotNull Project project,
                             @NotNull Position position,
                             @NotNull ISourceViewer viewer,
                             @NotNull TryItOperation payload,
                             @Nullable ScanOperation payload2) {
        super(position, viewer);
        this.project = project;
        this.top = payload;
        this.sop = payload2;
        annotationsNumber = (sop == null) ? 1 : 2;
        bounds = new ArrayList<>(annotationsNumber + 1);
    }

    private void actionPerformed(int annotationId) {
        if (annotationId == TRYIT_ID) {
            VirtualFile file = top.getPsiFile().getVirtualFile();
            BundleService bundleService = BundleService.getInstance(project);
            BundleResult bundle = bundleService.getBundle(file.getPath());
            if (bundle != null && bundle.getAST() != null) {
                top.setOas(bundle);
                TryItService tryItService = TryItService.getInstance(project);
                tryItService.createOrActiveTryItWindow(top);
            }
        } else if (annotationId == SCAN_ID) {
            VirtualFile file = sop.getPsiFile().getVirtualFile();
            ScanService scanService = ScanService.getInstance(project);
            scanService.scanActionPerformed(file, sop);
        }
    }

    private int getAnnotationId(int x) {
        for (int i = 1 ; i < bounds.size() - 1 ; i++) {
            int xi = bounds.get(i);
            if (x <= xi) {
                return i - 1;
            }
        }
        return annotationsNumber - 1;
    }

    private boolean isOutsideWidget(int x) {
        return bounds.get(bounds.size() - 1) < x;
    }

    @Override
    public void onMouseHover(MouseEvent e) {
        if (isOutsideWidget(e.x)) {
            onMouseOut(e);
        } else {
            super.onMouseHover(e);
            annoId = getAnnotationId(e.x);
            redraw();
        }
    }

    @Override
    public void onMouseOut(MouseEvent e) {
        super.onMouseOut(e);
        if (annoId != NOT_SET_ID) {
            annoId = NOT_SET_ID;
            redraw();
        }
    }

    public final int getWidth() {
        return width;
    }

    @Override
    public final void draw(GC gc, StyledText textWidget, int offset, int length, Color color, int x, int y) {
        bounds.clear();
        width = drawAndComputeWidth(gc, textWidget, offset, length, color, x, y);
    }

    @Override
    public Consumer<MouseEvent> getAction(MouseEvent e) {
        return action;
    }

    private int drawAndComputeWidth(GC gc, StyledText textWidget, int offset, int length, Color color, int x, int y) {
        FontMetrics fm = gc.getFontMetrics();
        x += fm.getLeading();
        bounds.add(x);
        double chWidth = fm.getAverageCharacterWidth();
        int x0 = addAnnotation(gc, TRYIT_ICON, TRYIT_TEXT, TRYIT_ID, color, x, y, chWidth);
        bounds.add(x0);
        if (sop != null) {
            int x1 = addAnnotation(gc, SCAN_ICON, SCAN_TEXT, SCAN_ID, color, x0, y, chWidth);
            bounds.add(x1);
        }
        return bounds.get(bounds.size() - 1) - bounds.get(0);
    }

    private int addAnnotation(GC gc, Image ico, String text, int myId, Color color, int x, int y, double chWidth) {
        gc.drawImage(ico, x, y);
        Color linkFgd = gc.getDevice().getSystemColor(SWT.COLOR_LINK_FOREGROUND);
        gc.setForeground(annoId == myId ? linkFgd : color);
        x += ico.getBounds().width;
        gc.drawText(text, x, y);
        return (int) (x + chWidth * (text.length() + 1));
    }
}
