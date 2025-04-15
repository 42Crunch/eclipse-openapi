package com.xliic.openapi;

import com.xliic.core.application.ApplicationInfo;
import com.xliic.openapi.settings.SettingsService;
import junit.framework.TestCase;
import org.mockito.MockedStatic;

import static org.mockito.Mockito.*;

public abstract class MockTestCase extends TestCase {

    private final ApplicationInfo applicationInfo = mock(ApplicationInfo.class);
    private MockedStatic<ApplicationInfo> applicationInfoMockedStatic;

    private final SettingsService settingsService = mock(SettingsService.class);
    private MockedStatic<SettingsService> settingsServiceMockedStatic;

    @Override
    public void setUp() throws Exception {
        super.setUp();

        when(applicationInfo.getFullVersion()).thenReturn("mockedVersion");
        applicationInfoMockedStatic = mockStatic(ApplicationInfo.class);
        applicationInfoMockedStatic.when(ApplicationInfo::getInstance).thenReturn(applicationInfo);

        when(settingsService.getCodePointLimit()).thenReturn(20 * 1024 * 1024);
        settingsServiceMockedStatic = mockStatic(SettingsService.class);
        settingsServiceMockedStatic.when(SettingsService::getInstance).thenReturn(settingsService);
    }

    @Override
    public void tearDown() throws Exception {
        super.tearDown();
        applicationInfoMockedStatic.close();
        settingsServiceMockedStatic.close();
    }
}
