package com.crunch42.openapi.report;

public class Summary {

    private final int all;
    private final boolean errors;
    private final boolean invalid;

    private final Grade data;
    private final Grade security;

    public Summary(boolean errors, boolean invalid, Grade data, Grade security) {
        this.errors = errors;
        this.invalid = invalid;
        this.data = data;
        this.security = security;
        all = data.getValue() + security.getValue();
    }

    public int getAll() {
        return all;
    }

    public boolean isErrors() {
        return errors;
    }

    public Grade getData() {
        return data;
    }

    public Grade getSecurity() {
        return security;
    }

    public String getHTMLSummary() {
        if ((all == 0) && invalid) {
            return "<h1>Failed to perform security audit, the OpenAPI file is invalid or too large.</h1>" +
                    "<div><small>Please submit your feedback for the security audit " +
                    "<a href=\"https://support.42crunch.com\">here</a></small></div><hr>";
        }
        return "<h1>Security audit score: " + all + "</h1>" +
                "<h3>Security (" + security.getValue() + "/" + security.getMax() + ")</h3>" +
                "<h3>Data validation (" + data.getValue() + "/" + data.getMax() + ")</h3>" +
                "<div><small>Please submit your feedback for the security audit " +
                "<a href=\"https://support.42crunch.com\">here</a>" +
                "</small></div><hr>";
    }
}
