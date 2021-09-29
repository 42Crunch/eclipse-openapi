package com.xliic.openapi.services.api;

import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.callback.EmailDialogDoOkActionCallback;

public interface IAuditService {

	public void sendAuditRequest(String token, String fileName, AuditActionCallback callback);

	public void sendGenerateTokenRequest(String email, EmailDialogDoOkActionCallback callback);
}
