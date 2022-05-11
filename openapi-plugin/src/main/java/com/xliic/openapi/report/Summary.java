package com.xliic.openapi.report;

import com.xliic.openapi.services.HTMLService;

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
        HTMLService htmlService = HTMLService.getInstance();
        if ((all == 0) && invalid) {
            return htmlService.SUMMARY_INVALID;
        }
        String summary = htmlService.SUMMARY;
        summary = summary.replace("${summary.all}", String.valueOf(all));
        summary = summary.replace("${summary.all}", String.valueOf(all));
        summary = summary.replace("${summary.security.value}", String.valueOf(security.getValue()));
        summary = summary.replace("${summary.security.max}", String.valueOf(security.getMax()));
        summary = summary.replace("${summary.datavalidation.value}", String.valueOf(data.getValue()));
        summary = summary.replace("${summary.datavalidation.max}", String.valueOf(data.getMax()));
        return summary;
    }
}
