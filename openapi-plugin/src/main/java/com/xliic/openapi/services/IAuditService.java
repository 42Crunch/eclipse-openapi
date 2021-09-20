package com.xliic.openapi.services;

import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.callback.EmailDialogDoOkActionCallback;

public interface IAuditService {

	void sendAuditRequest(String token, String fileName, AuditActionCallback callback);

	void sendGenerateTokenRequest(String email, EmailDialogDoOkActionCallback callback);
}
