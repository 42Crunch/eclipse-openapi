package com.xliic.core.services;

import org.eclipse.ui.services.AbstractServiceFactory;
import org.eclipse.ui.services.IServiceLocator;

import com.xliic.core.project.Project;
import com.xliic.openapi.cli.CliService;
import com.xliic.openapi.config.ConfigService;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.inlined.AnnotationService;
import com.xliic.openapi.platform.scan.ScanService;
import com.xliic.openapi.platform.scan.config.ScanConfService;
import com.xliic.openapi.preferences.PrefsService;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.ExtRefService;
import com.xliic.openapi.services.GitService;
import com.xliic.openapi.services.PlaceHolderService;
import com.xliic.openapi.services.PreviewService;
import com.xliic.openapi.services.QuickFixService;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.services.DictionaryService;
import com.xliic.openapi.services.TryItService;
import com.xliic.openapi.services.TerminalService;

public class CoreServiceFactory extends AbstractServiceFactory {
	
	private static final Project PROJECT = Project.getInstance();

	@Override
    @SuppressWarnings("rawtypes")
	public Object create(Class serviceInterface, IServiceLocator parentLocator, IServiceLocator locator) {
		// Create is called once and the result is saved in the service locator
		// The locator takes care of disposing all the services created below 
		if (ISettingsService.class.equals(serviceInterface)) {
			return new SettingsService();
		} else if (IAuditService.class.equals(serviceInterface)) {
			return new AuditService(PROJECT);
		} else if (IPreviewService.class.equals(serviceInterface)) {
			return new PreviewService();
		} else if (IBundleService.class.equals(serviceInterface)) {
			return new BundleService(PROJECT);
		} else if (IASTService.class.equals(serviceInterface)) {
			return new ASTService(PROJECT);
		} else if (IQuickFixService.class.equals(serviceInterface)) {
			return new QuickFixService();
		} else if (IPlaceHolderService.class.equals(serviceInterface)) {
			return new PlaceHolderService(PROJECT);
		} else if (IExtRefService.class.equals(serviceInterface)) {
			return new ExtRefService(PROJECT);
		} else if (IPlatformService.class.equals(serviceInterface)) {
			return new PlatformService(PROJECT);
		} else if (IDictionaryService.class.equals(serviceInterface)) {
			return new DictionaryService(PROJECT);
		} else if (ITryItService.class.equals(serviceInterface)) {
			return new TryItService(PROJECT);
		} else if (IScanService.class.equals(serviceInterface)) {
			return new ScanService(PROJECT);
		} else if (IScanConfService.class.equals(serviceInterface)) {
			return new ScanConfService(PROJECT);
		} else if (ITerminalService.class.equals(serviceInterface)) {
			return new TerminalService(PROJECT);
		} else if (IEnvService.class.equals(serviceInterface)) {
			return new EnvService(PROJECT);
		} else if (IPrefsService.class.equals(serviceInterface)) {
			return new PrefsService();
		} else if (IConfigService.class.equals(serviceInterface)) {
			return new ConfigService(PROJECT);
		} else if (IAnnotationService.class.equals(serviceInterface)) {
			return new AnnotationService(PROJECT);
		} else if (IGitService.class.equals(serviceInterface)) {
			return new GitService(PROJECT);
		} else if (ICliService.class.equals(serviceInterface)) {
			return new CliService();
		}
		return null;
	}
}
