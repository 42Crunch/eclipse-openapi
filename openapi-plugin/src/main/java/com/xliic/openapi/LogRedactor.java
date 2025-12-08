package com.xliic.openapi;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.LinkedList;
import java.util.List;
import java.util.regex.Pattern;

public class LogRedactor {

    public enum Scope {
        CMD_EXEC_ENV,
        CMD_EXEC_ARGS,
        REQUEST_QUERY,
        REQUEST_HEADER,
        REQUEST_BODY
    }

    private static final String REDACTED = "[REDACTED]";
    private static final String UUID_TOKEN = "((ide_)|(api_))?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}";

    @NotNull
    private final List<Rule> rules = new LinkedList<>();

    public LogRedactor(Builder builder) {
        rules.addAll(builder.rules);
    }

    @NotNull
    public String redact(@NotNull String field, @NotNull String value, @NotNull Scope scope) {
        for (Rule rule : rules) {
            if (rule.scope == scope && rule.field != null && rule.field.equals(field)) {
                if (scope == Scope.CMD_EXEC_ARGS) {
                    return value.startsWith("--") ? value : rule.mask;
                } else {
                    return rule.mask;
                }
            }
        }
        return value;
    }

    @NotNull
    public String redact(@NotNull String value, @NotNull Scope scope) {
        String result = value;
        for (Rule rule : rules) {
            if (rule.scope == scope && rule.pattern != null) {
                result = rule.pattern.matcher(result).replaceAll(rule.mask);
            }
        }
        return result;
    }

    private static class Rule {

        @Nullable
        private final String field;
        @Nullable
        private final Pattern pattern;
        @NotNull
        private final String mask;
        @NotNull
        private final Scope scope;

        public Rule(@Nullable String field, @Nullable Pattern pattern, @NotNull String mask, @NotNull Scope scope) {
            this.field = field;
            this.pattern = pattern;
            this.mask = mask;
            this.scope = scope;
        }
    }

    public static class Builder {

        @NotNull
        private final List<Rule> rules = new LinkedList<>();

        public Builder() {
        }

        @NotNull
        public Builder addRule(@NotNull String field, @NotNull String mask, @NotNull Scope scope) {
            rules.add(new Rule(field, null, mask, scope));
            return this;
        }

        @NotNull
        public Builder addHeaderRules(@NotNull String... fields) {
            for (String field : fields) {
                addRule(field, REDACTED, Scope.REQUEST_HEADER);
            }
            return this;
        }

        @NotNull
        public Builder addQueryRule(@NotNull String field) {
            return addRule(field, REDACTED, Scope.REQUEST_QUERY);
        }

        @NotNull
        public Builder addCmdExecArgsRule(@NotNull String field) {
            return addRule(field, REDACTED, Scope.CMD_EXEC_ARGS);
        }

        @NotNull
        public Builder addCmdExecEnvRules(@NotNull String... fields) {
            for (String field : fields) {
                addRule(field, REDACTED, Scope.CMD_EXEC_ENV);
            }
            return this;
        }

        @NotNull
        public Builder addRegExpRule(@NotNull String regExp, @NotNull Scope scope) {
            rules.add(new Rule(null, Pattern.compile(regExp), REDACTED, scope));
            return this;
        }

        @NotNull
        public Builder addUuidTokenRegExpRule(@NotNull Scope scope) {
            return addRegExpRule(UUID_TOKEN, scope);
        }

        @NotNull
        public LogRedactor build() {
            return new LogRedactor(this);
        }
    }
}
