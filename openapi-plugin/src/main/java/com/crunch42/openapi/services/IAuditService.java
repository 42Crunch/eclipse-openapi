package com.crunch42.openapi.services;

import com.crunch42.openapi.bundler.OpenAPIBundler;
import com.crunch42.openapi.callback.AuditActionCallback;
import com.crunch42.openapi.callback.EmailDialogDoOkActionCallback;

public interface IAuditService {

    void sendAuditRequest(String token, OpenAPIBundler bundler, AuditActionCallback callback);   
    void sendGenerateTokenRequest(String email, EmailDialogDoOkActionCallback callback);
}
