package com.xliic.openapi.tryit;

import java.io.IOException;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import javax.swing.SwingUtilities;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItResponse;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Headers;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class TryItResponseCallback implements Callback {

    private final Project project;

    public TryItResponseCallback(@NotNull Project project) {
        this.project = project;
    }

    @Override
    public void onResponse(@NotNull Call call, @NotNull Response response) {
        String httpVersion = response.protocol().toString();
        int statusCode = response.code();
        String statusMessage = response.message();
        List<List<String>> headers = new LinkedList<>();
        Headers respHeaders = response.headers();
        for (int i = 0; i < respHeaders.size(); i++) {
            headers.add(new LinkedList<>(Arrays.asList(respHeaders.name(i), respHeaders.value(i))));
        }
        try (ResponseBody body = response.body()) {
            if (body != null) {
                TryItResponse tryItResponse = new TryItResponse(httpVersion, statusCode, statusMessage, headers, body.string());
                SwingUtilities.invokeLater(() -> project.getMessageBus().syncPublisher(TryItListener.TOPIC).showOperationResponse(tryItResponse));
            }
        } catch (IOException e) {
            TryItError payload = new TryItError(e.getMessage(), false);
            SwingUtilities.invokeLater(() -> project.getMessageBus().syncPublisher(TryItListener.TOPIC).showOperationError(payload));
        }
    }
    @Override
    public void onFailure(@NotNull Call call, @NotNull IOException e) {
        onFailure(e.getMessage(), TryItResponse.isSslError(e));
    }

    public void onFailure(@NotNull Throwable t) {
        onFailure(t.getMessage(), false);
    }

    public void onFailure(@NotNull String msg, boolean sslError) {
        TryItError payload = new TryItError(msg, sslError);
        SwingUtilities.invokeLater(() -> project.getMessageBus().syncPublisher(TryItListener.TOPIC).showOperationError(payload));
    }
}
