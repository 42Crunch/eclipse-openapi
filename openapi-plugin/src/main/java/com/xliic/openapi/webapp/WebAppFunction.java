package com.xliic.openapi.webapp;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.application.ApplicationManager;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class WebAppFunction extends BrowserFunction {

    private final ObjectMapper mapper = new ObjectMapper();
    private final Map<String, WebAppProduce> producers = new HashMap<>();

    public WebAppFunction(Browser browser, String name) {
        super(browser, name);
    }

    @Override
    public Object function(Object[] arguments) {
        if (arguments != null && arguments.length == 1) {
            apply(arguments[0]);
        }
        return arguments;
    }

    @SuppressWarnings("unchecked")
    public void apply(Object message) {
        if (message instanceof String && !((String) message).isEmpty()) {
            try {
                Map<String, String> props = mapper.readValue((String) message, Map.class);
                String command = props.get("command");
                if (command != null) {
                    WebAppProduce producer = producers.get(command);
                    if (producer != null) {
                        if (producer.isPayloadAsAST()) {
                            Node node = Utils.getJsonAST((String) message);
                            if (node != null) {
                            	run(producer, node.getChild("payload"));
                            }
                        } else {
                        	run(producer, props.get("payload"));
                        }
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private static void run(WebAppProduce producer, Object payload) {
        if (producer.isInsideEDT()) {
            // Use for fast operations which require EDT context
            ApplicationManager.getApplication().invokeLater(() -> producer.run(payload));
        } else {
            // Run in a separate thread to not hang the current one
            // Otherwise web UI may be unresponsive in case of time-consuming operations in the producer
            new Thread(() -> producer.run(payload)).start();
        }
    }

    protected void add(@NotNull WebAppProduce producer) {
        producers.put(producer.getName(), producer);
    }
}
