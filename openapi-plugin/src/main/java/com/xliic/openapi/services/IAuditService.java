package com.xliic.openapi.services;

import com.xliic.openapi.bundler.OpenAPIBundler;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.callback.EmailDialogDoOkActionCallback;

public interface IAuditService {

    void sendAuditRequest(String token, OpenAPIBundler bundler, AuditActionCallback callback);   
    void sendGenerateTokenRequest(String email, EmailDialogDoOkActionCallback callback);
}
