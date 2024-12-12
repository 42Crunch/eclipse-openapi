package com.xliic.core.persistence;

import java.io.File;
import java.io.FileWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.concurrency.JobScheduler;
import com.xliic.core.diagnostic.Logger;

public abstract class State<T> implements Runnable {

	private ScheduledFuture<?> future;
	private final Object lock = new Object();
	private volatile boolean isSaveScheduled = false;
	private volatile boolean isActive = true;

	public final void restore() {
		try {
			File storageFile = getStorageFile(getStorageName());
			if (storageFile.exists()) {
				String content = Files.readString(storageFile.toPath(), StandardCharsets.UTF_8);
				restore(getConverter().fromString(content));
			}
		} catch (Exception e) {
			Logger.getInstance(State.class).error(e);
		}
	}

	public final void save() {
        if (isActive && !isSaveScheduled) {
            synchronized(lock) {
                if (!isSaveScheduled) {
                    future = JobScheduler.getScheduler().schedule(this, 10, TimeUnit.SECONDS);
                    isSaveScheduled = true;
                }
			}
		}
	}

	public final void dispose() {
    	isActive = false;
		synchronized(lock) {
	    	isSaveScheduled = false;
	    	saveToFile();
            if (future != null) {
                future.cancel(true);
                future = null;
            }
		}
	}

    @Override
    public void run() {
    	if (isActive && isSaveScheduled) {
	    	synchronized(lock) {
		    	if (isSaveScheduled) {
			    	saveToFile();
			    	isSaveScheduled = false;
		    	}
	    	}
    	}
    }

	protected abstract @NotNull T getDataToSave();
	protected abstract void restore(@NotNull T data);
	protected abstract @NotNull String getStorageName();
	protected abstract @NotNull Converter<T> getConverter();

	private final void saveToFile() {
		try {
			File storageFile = getStorageFile(getStorageName());
		    FileWriter fileWriter = new FileWriter(storageFile, false);
		    fileWriter.write(getConverter().toString(getDataToSave()));
		    fileWriter.close();
		} catch (Exception e) {
			Logger.getInstance(State.class).error(e);
		}
	}

	private static File getStorageFile(String storageName) {
		IWorkspaceRoot workspaceRoot = ResourcesPlugin.getWorkspace().getRoot();
		File root = new File(workspaceRoot.getLocation().toString());
		return Paths.get(root.toString(), storageName + ".json").toFile();
	}
}
