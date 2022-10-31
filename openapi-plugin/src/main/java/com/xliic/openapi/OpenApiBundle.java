package com.xliic.openapi;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.MissingResourceException;
import java.util.PropertyResourceBundle;
import java.util.ResourceBundle;

public class OpenApiBundle {

    private static final URL BASE_URL = OpenAPIAbstractUIPlugin.getInstance().getBundle().getEntry("/");
    private static ResourceBundle resourceBundle = null;

    static {
        try {
            URL url = new URL(BASE_URL, "resources/messages/OpenApiBundle.properties");
            InputStream inputStream = OpenApiBundle.class.getResourceAsStream(url.getFile());
            resourceBundle = new PropertyResourceBundle(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String message(String key) {
        try {
            return unescape(resourceBundle.getString(key));
        } catch (MissingResourceException e) {
            return key;
        } catch (NullPointerException e) {
            return "!" + key + "!";
        }
    }

    public static String message(String key, String... args) {
        String value = message(key);
        if (args.length > 0 && value.contains("{") && value.contains("}")) {
            int i = 0;
            for (String arg : args) {
                value = value.replace("{" + i + "}", arg);
                i++;
            }
        }
        return unescape(value);
    }

    private static String unescape(String value) {
        if (value.contains("''")) {
            value = value.replace("''", "'");
        }
        return value;
    }
}
