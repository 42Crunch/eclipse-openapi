package com.xliic.openapi.settings;

import org.jetbrains.annotations.NotNull;

public class HostName implements Comparable<HostName> {

    String hostname;

    public HostName() {
        hostname = "";
    }

    public HostName(String hostname) {
        this.hostname = hostname;
    }

    public HostName(HostName o) {
        this.hostname = o.getHostname();
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HostName hostName = (HostName) o;
        return hostname.equals(hostName.hostname);
    }

    @Override
    public int hashCode() {
        return hostname.hashCode();
    }

    @Override
    public int compareTo(@NotNull HostName o) {
        return hostname.compareTo(o.getHostname());
    }
}
