package com.xliic.openapi.statusbar;

import org.eclipse.jface.action.ContributionItem;
import org.eclipse.jface.action.IStatusLineManager;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.CLabel;
import org.eclipse.swt.events.MouseAdapter;
import org.eclipse.swt.events.MouseEvent;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.ui.LafManager;
import com.xliic.core.ide.ui.LafManagerListener;
import com.xliic.core.project.Project;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.config.ConfigService;
import com.xliic.openapi.webapp.messages.ChangeTheme;

public class AuthUserContributionItem extends ContributionItem implements LafManagerListener {

	public static final String ID = "com.xliic.openapi.statusbar.AuthUserContributionItem";
	private static final String TOOLTIP = "42Crunch Settings";
	private static final Image AUTH_USER_STATUS_BAR_IMG = OpenAPIImages.AuthUserStatusBar.createImage();
	private static final Image AUTH_USER_STATUS_BAR_DARK_IMG = OpenAPIImages.AuthUserStatusBarDark.createImage();

	@Nullable
	private CLabel label = null;
	@NotNull
	private final Project project;
	@NotNull 
	private final IStatusLineManager statusLineManager;

	public AuthUserContributionItem(@NotNull Project project, @NotNull IStatusLineManager statusLineManager) {
		super(ID);
		this.project = project;
		this.statusLineManager = statusLineManager;
        project.getMessageBus().connect().subscribe(LafManagerListener.TOPIC, this);
	}

	@Override
	public void fill(Composite parent) {
		label = new CLabel(parent, SWT.SHADOW_NONE);
		label.setImage(ChangeTheme.isLightTheme() ? AUTH_USER_STATUS_BAR_IMG : AUTH_USER_STATUS_BAR_DARK_IMG);
		label.setToolTipText(TOOLTIP);
		label.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseUp(MouseEvent e) {
				ConfigService.getInstance(project).createAndOpenConfigWindow();
			}
		});
		setVisible(isVisible());
	}

	@Override
	public boolean isVisible() {
		return true;
    }

	@Override
	public void dispose() {
		super.dispose();
		project.getMessageBus().connect().unsubscribe(this);
	}

	@Override
	public void lookAndFeelChanged(@NotNull LafManager manager) {
		statusLineManager.update(true);
	}
}
