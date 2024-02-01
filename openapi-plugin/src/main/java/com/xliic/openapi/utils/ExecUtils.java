package com.xliic.openapi.utils;

import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.*;
import java.util.*;

public class ExecUtils {

    @SuppressWarnings("serial")
	public static class ExecException extends Exception {

        private final int code;
        @NotNull
        private final String stdOut;
        @NotNull
        private final String stdErr;

        public ExecException(int code, @NotNull String stdOut, @NotNull String stdErr) {
            this.code = code;
            this.stdOut = stdOut;
            this.stdErr = stdErr;
        }

        public ExecException(Throwable cause) {
            super(cause);
            code = -1;
            stdOut = cause.getMessage();
            stdErr = "";
        }

        public int getCode() {
            return code;
        }

        public @NotNull String getStdOut() {
            return stdOut;
        }

        public @NotNull String getStdErr() {
            return stdErr;
        }

        @Override
        public String toString() {
            StringBuilder builder = new StringBuilder();
            if (code != -1) {
                builder.append("code ").append(code).append(": ");
            }
            builder.append(stdOut);
            if (!stdErr.isEmpty()) {
                builder.append(", ").append(stdErr);
            }
            return builder.toString();
        }

        @Override
        public String getMessage() {
            return toString();
        }
    }

    @NotNull
    public static String asyncExecFile(@NotNull String cmd, @NotNull String[] params) throws ExecException {
        return asyncExecFile(cmd, params, null, new HashMap<>());
    }

    @NotNull
    public static String asyncExecFile(@NotNull String cmd, @NotNull String[] params, @Nullable VirtualFile dir) throws ExecException {
        return asyncExecFile(cmd, params, dir, null);
    }

    @NotNull
    public static String asyncExecFile(@NotNull String cmd,
                                       @NotNull String[] params,
                                       @Nullable VirtualFile dir,
                                       @Nullable Map<String, String> cmdEnv) throws ExecException {
        List<String> args = new LinkedList<>();
        args.add(cmd);
        // System.out.println(">> cmd = " + cmd);
        for (String param : params) {
            if (!param.isEmpty()) {
                args.add(param);
                // System.out.println(">> arg = " + param);
            }
        }
        ProcessBuilder builder = new ProcessBuilder(args);
        if (cmdEnv != null) {
            Map<String, String> env = builder.environment();
            env.putAll(cmdEnv);
        }
        if (dir != null) {
            builder.directory(new File(dir.getPath()));
        }
        try {
            Process process = builder.start();
            String out = readOutput(process.getInputStream());
            String err = readOutput(process.getErrorStream());
            int code = process.waitFor();
            if (code != 0) {
                throw new ExecException(code, out, err);
            }
            return out;
        } catch (IOException | InterruptedException e) {
            throw new ExecException(e);
        } finally {
            if (dir != null) {
                LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(dir));
            }
        }
    }

    private static String readOutput(InputStream reader) throws IOException {
        StringBuilder stdout = new StringBuilder();
        BufferedReader br = new BufferedReader(new InputStreamReader(reader));
        String s;
        while ((s = br.readLine()) != null) {
            stdout.append(s).append("\n");
        }
        return stdout.toString();
    }
}
