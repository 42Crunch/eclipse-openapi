package com.xliic.core.util.io;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.Arrays;
import java.util.Queue;
import java.util.Random;
import java.util.concurrent.ConcurrentLinkedQueue;

import org.jetbrains.annotations.NonNls;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.SystemInfoRt;

public class FileUtil {
	
	private static String ourCanonicalTempPathCache;
	private static final Random RANDOM = new Random();
	
    private static class FilesToDeleteHolder {
    	
	    private static final Queue<String> ourFilesToDelete = createFilesToDelete();

	    @NotNull
	    private static Queue<String> createFilesToDelete() {
	      final ConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<String>();
	      Runtime.getRuntime().addShutdownHook(new Thread("FileUtil deleteOnExit") {
	        @Override
	        public void run() {
	          String name;
	          while ((name = queue.poll()) != null) {
		          delete(name);
	          }
	        }
	      });
	      return queue;
	    }
	}
    
    @NotNull
    public static @NonNls String toSystemIndependentName(@NotNull String filePath) {
    	return filePath.replace('\\', '/');
    }

    public static void delete(String filePath) {
    	try {
	        Path path = Paths.get(filePath);
	        Files.walkFileTree(path, new SimpleFileVisitor<>() {
	            @Override
	            public FileVisitResult postVisitDirectory(Path dir, IOException exc) throws IOException {
	            	try {
	            		Files.delete(dir);
	            	}
	            	catch (IOException e) {
	            		e.printStackTrace();
	            	}
	                return FileVisitResult.CONTINUE;
	            }
	            @Override
	            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
	            	try {
	            		if (!file.toFile().canWrite()) {
            				file.toFile().setWritable(true);
	            		}
	            		Files.delete(file);
	            	}
	            	catch (IOException e) {
	            		e.printStackTrace();
	            	}
	            	return FileVisitResult.CONTINUE;
	            }
	        });
    	}
    	catch (IOException e) {
    		e.printStackTrace();
    	}
    }

    @NotNull
    public static File createTempFile(@NotNull File dir, @NotNull String prefix, String suffix, boolean create) throws IOException {
        return createTempFile(dir, prefix, suffix, create, true);
    }
    
    @NotNull
    public static File createTempDirectory(@NotNull String prefix, String suffix, boolean deleteOnExit) throws IOException {
        final File dir = new File(getTempDirectory());
        return createTempDirectory(dir, prefix, suffix, deleteOnExit);
    }
    
    @NotNull
    public static File createTempFile(@NotNull File dir, @NotNull String prefix, String suffix, boolean create, boolean deleteOnExit) throws IOException {
      File file = doCreateTempFile(dir, prefix, suffix, false);
      if (deleteOnExit) {
        file.deleteOnExit();
      }
      if (!create) {
        if (!file.delete() && file.exists()) {
          throw new IOException("Cannot delete a file: " + file);
        }
      }
      return file;
    }
    
    @NotNull
    public static File createTempDirectory(@NotNull File dir, @NotNull String prefix, String suffix, boolean deleteOnExit) throws IOException {
      File file = doCreateTempFile(dir, prefix, suffix, true);
      if (deleteOnExit) {
        // default deleteOnExit does not remove dirs if they are not empty
        FilesToDeleteHolder.ourFilesToDelete.add(file.getPath());
      }
      if (!file.isDirectory()) {
        throw new IOException("Cannot create a directory: " + file);
      }
      return file;
    }
    
    @NotNull
    private static File doCreateTempFile(@NotNull File dir, @NotNull String prefix, String suffix, boolean isDirectory) throws IOException {

      dir.mkdirs();

      if (prefix.length() < 3) {
        prefix = (prefix + "___").substring(0, 3);
      }
      if (suffix == null) {
        suffix = "";
      }
      // normalize and use only the file name from the prefix
      prefix = new File(prefix).getName();

      int attempts = 0;
      int i = 0;
      int maxFileNumber = 10;
      IOException exception = null;
      while (true) {
        File f = null;
        try {
          f = calcName(dir, prefix, suffix, i);

          boolean success = isDirectory ? f.mkdir() : f.createNewFile();
          if (success) {
            return normalizeFile(f);
          }
        }
        catch (IOException e) { // Win32 createFileExclusively access denied
          exception = e;
        }
        attempts++;
        int MAX_ATTEMPTS = 100;
        if (attempts > maxFileNumber / 2 || attempts > MAX_ATTEMPTS) {
          String[] children = dir.list();
          int size = children == null ? 0 : children.length;
          maxFileNumber = Math.max(10, size * 10); // if too many files are in tmp dir, we need a bigger random range than meager 10
          if (attempts > MAX_ATTEMPTS) {
            throw exception != null ? exception: new IOException("Unable to create a temporary file " + f + "\nDirectory '" + dir +
                                  "' list ("+size+" children): " + Arrays.toString(children));
          }
        }

        i++; // for some reason the file1 can't be created (previous file1 was deleted but got locked by anti-virus?). Try file2.
        if (i > 2) {
          i = 2 + RANDOM.nextInt(maxFileNumber); // generate random suffix if too many failures
        }
      }
    }
    
    @NotNull
    private static File calcName(@NotNull File dir, @NotNull String prefix, @NotNull String suffix, int i) throws IOException {
      prefix = i == 0 ? prefix : prefix + i;
      if (prefix.endsWith(".") && suffix.startsWith(".")) {
        prefix = prefix.substring(0, prefix.length() - 1);
      }
      String name = prefix + suffix;
      File f = new File(dir, name);
      if (!name.equals(f.getName())) {
        throw new IOException("A generated name is malformed: '" + name + "' (" + f + ")");
      }
      return f;
    }

    @NotNull
    private static File normalizeFile(@NotNull File temp) throws IOException {
      final File canonical = temp.getCanonicalFile();
      return SystemInfoRt.isWindows && canonical.getAbsolutePath().contains(" ") ? temp.getAbsoluteFile() : canonical;
    }
    
    @NotNull
    public static String getTempDirectory() {
      if (ourCanonicalTempPathCache == null) {
        ourCanonicalTempPathCache = calcCanonicalTempPath();
      }
      return ourCanonicalTempPathCache;
    }

    @NotNull
    private static String calcCanonicalTempPath() {
      final File file = new File(System.getProperty("java.io.tmpdir"));
      try {
        final String canonical = file.getCanonicalPath();
        if (!SystemInfoRt.isWindows || !canonical.contains(" ")) {
          return canonical;
        }
      }
      catch (IOException ignore) { }
      return file.getAbsolutePath();
    }
}
