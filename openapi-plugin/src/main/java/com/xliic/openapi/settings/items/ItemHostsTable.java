package com.xliic.openapi.settings.items;

import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.settings.table.host.HostName;
import com.xliic.openapi.settings.table.host.HostNameTableEditor;

public class ItemHostsTable extends Item {

    protected final HostNameTableEditor component;

    public ItemHostsTable(HostNameTableEditor component, String key) {
        super(key);
        this.component = component;
    }

    @Override
    public boolean isModified() {
        Set<HostName> hosts = new HashSet<>(getHosts(key));
        return !hosts.equals(getNewHosts());
    }

    @Override
    public void reset() {
        component.getModel().setInput(getHosts(key));
    }

    @Override
    public void apply(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        keys.add(key);
        prevData.put(key, SettingsService.getInstance().getList(key));
        SettingsService.getInstance().setList(key, getNames(getNewHosts()));
    }

    public static List<HostName> getHosts(@NotNull String key) {
        List<HostName> values = new LinkedList<>();
        for (String hostname : SettingsService.getInstance().getSet(key)) {
            values.add(new HostName(hostname));
        }
        Collections.sort(values);
        return values;
    }

    private Set<HostName> getNewHosts() {
        Set<HostName> newHosts = new HashSet<>(component.getModel().getItems());
        newHosts.removeIf(e -> StringUtils.isEmpty(e.getHostname()));
        return newHosts;
    }

    private static List<String> getNames(Set<HostName> hosts) {
        return hosts.stream().map(HostName::getHostname).collect(Collectors.toList());
    }
}
