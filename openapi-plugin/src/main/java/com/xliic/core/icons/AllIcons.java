package com.xliic.core.icons;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.Icon;
import com.xliic.core.util.IconLoader;

public class AllIcons {
	
	public static final class General {
        public static final @NotNull Icon Filter = IconLoader.findIcon("/icons/filter.png");
	}
	
    public static final class Javaee {
        public static final @NotNull Icon UpdateRunningApplication = IconLoader.findIcon("/icons/progress.png");
    }
    
    public static final class Actions {
    	public static final @NotNull Icon Refresh = IconLoader.findIcon("/icons/refresh.png");
    }
}
