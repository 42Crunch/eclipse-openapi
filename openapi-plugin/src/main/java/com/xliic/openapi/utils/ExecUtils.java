package com.xliic.openapi.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.diagnostic.Logger;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;

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

        public boolean isLimitsReached() {
            Node out = Utils.getJsonAST(stdOut);
            if (out != null) {
                String value = out.getChildValue("statusMessage");
                return "limits_reached".equals(value);
            }
            return false;
        }
    }

    @NotNull
    public static String asyncExecFile(@NotNull String cmd, @NotNull List<String> params) throws ExecException {
        return asyncExecFile(cmd, params, null, new HashMap<>());
    }

    @NotNull
    public static String asyncExecFile(@NotNull String cmd, @NotNull List<String> params, @Nullable VirtualFile dir) throws ExecException {
        return asyncExecFile(cmd, params, dir, null);
    }
    
    @NotNull
    public static String asyncExecFile(@NotNull String cmd,
                                       @NotNull List<String> params,
                                       @Nullable VirtualFile dir,
                                       @Nullable Map<String, String> cmdEnv) throws ExecException {
        return asyncExecFile(cmd, params, dir, cmdEnv, false);
    }

    @NotNull
    public static String asyncExecFile(@NotNull String cmd,
                                       @NotNull List<String> params,
                                       @Nullable VirtualFile dir,
                                       @Nullable Map<String, String> cmdEnv,
                                       boolean redirectErrorStream) throws ExecException {
        List<String> args = new LinkedList<>();
        args.add(cmd);
        for (String param : params) {
            if (!param.isEmpty()) {
                args.add(param);
            }
        }
        ProcessBuilder builder = new ProcessBuilder(args);
        if (cmdEnv != null && !cmdEnv.isEmpty()) {
            Map<String, String> env = builder.environment();
            env.putAll(cmdEnv);
        }
        if (dir != null) {
            builder.directory(new File(dir.getPath()));
        }
        if (redirectErrorStream) {
            builder.redirectErrorStream(true);
        }
        debugExecArgs(args);
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

    private static void debugExecArgs(List<String> args) {
        if (!args.isEmpty()) {
            Logger logger = Logger.getInstance(ExecUtils.class);
            if (logger.isDebugEnabled()) {
                StringBuilder builder = new StringBuilder(args.get(0) + " ");
                // Start with 1 as arguments go after cmd name
                for (int i = 1; i < args.size(); i++) {
                    String arg = args.get(i);
                    if ("--token".equals(args.get(i - 1)) && !arg.startsWith("--")) {
                        builder.append(StringUtils.isEmpty(arg) ? "" : "*");
                    } else {
                        builder.append(arg);
                    }
                    if (i < args.size() - 1) {
                        builder.append(" ");
                    }
                }
                logger.debug("Running the binary: " + builder);
            }
        }
    }
}
