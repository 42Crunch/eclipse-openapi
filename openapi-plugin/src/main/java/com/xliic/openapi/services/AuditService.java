package com.xliic.openapi.services;

import static com.xliic.openapi.utils.OpenAPIUtils.getValue;

import java.util.Objects;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.ICoreRunnable;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.services.IDisposable;
import org.json.JSONException;
import org.json.JSONObject;

import com.xliic.openapi.Logger;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.bundler.OpenAPIBundler;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.callback.EmailDialogDoOkActionCallback;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.ResponseStatus;

import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public final class AuditService implements IAuditService, IDisposable {

    private static final String ASSESS_URL = "https://stateless.apisecurity.io/api/v1/anon/assess/vscode";
    private static final String TOKEN_URL = "https://stateless.apisecurity.io/api/v1/anon/token";
    private static final int MAX_RETRY_ATTEMPTS = 20;
    private static final int ATTEMPT_DELAY = 5000;
    private  static final String USER_AGENT = "Eclipse/4.16.0";

    private boolean requestInProgress;
    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    public AuditService() {
        requestInProgress = false;
    }

    public void sendAuditRequest(String token, OpenAPIBundler bundler, AuditActionCallback callback) {

        if (requestInProgress) {
            callback.reject("Audit for " + bundler.getAuditFileName() + " is already in progress");
            return;
        }

        final String fileName = bundler.getIFileName();
        final String text = bundler.getJsonText();
        
        ICoreRunnable task = new ICoreRunnable() {
        	@Override
        	public void run(IProgressMonitor monitor) throws CoreException {          	
                try {
                	monitor.setTaskName(OpenApiBundle.message("openapi.audit.report.progress.indicator"));
                    Request request = getSubmitAuditRequest(token, fileName, text);
                    IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);

                    Response response = client.newCall(request).execute();
                    String jsonStr = Objects.requireNonNull(response.body()).string();
                    JSONObject json = getJsonResponse(jsonStr);

                    if (getStatus(json) == ResponseStatus.IN_PROGRESS) {
                        for (int attempt = 0; attempt < MAX_RETRY_ATTEMPTS; attempt++) {

                        	Thread.sleep(ATTEMPT_DELAY);
                            if (attempt >= 2) {
                            	monitor.setTaskName(OpenApiBundle.message("openapi.audit.token.progress.indicator.wait"));
                            }

                            request = getRetryAuditRequest(getResponseToken(json), token);
                            response = client.newCall(request).execute();
                            jsonStr = Objects.requireNonNull(response.body()).string();
                            json = getJsonResponse(jsonStr);

                            if (getStatus(json) == ResponseStatus.PROCESSED) {
                                dataService.setAuditReport(fileName, new Audit(bundler, json));
                                monitor.done();
                                callback.setDone();
                                return;
                            }
                            else {
                                if (attempt >= MAX_RETRY_ATTEMPTS - 1) {
                                	monitor.done();
                                    callback.reject("Failed to audit after " + MAX_RETRY_ATTEMPTS + " attempts");
                                }
                            }
                        }
                    }
                    else if (getStatus(json) == ResponseStatus.PROCESSED) {
                        dataService.setAuditReport(fileName, new Audit(bundler, json));
                        monitor.done();
                        callback.setDone();
                    }
                    else if (response.code() == 403) {
                    	monitor.done();
                        callback.reject(OpenApiBundle.message("openapi.error.response.403"));
                    }
                    else if (response.code() == 429) {
                    	monitor.done();
                        callback.reject(OpenApiBundle.message("openapi.error.response.429"));
                    }
                    else {
                    	monitor.done();
                        callback.reject(OpenApiBundle.message("openapi.error.response.unexpected") + " " + jsonStr);
                    }
                }
                catch (Exception e) {
                	monitor.done();
                	Logger.log(e);
                    callback.reject(OpenApiBundle.message("openapi.error.unexpected") + " " + e.getMessage());
                }
                finally {
                    requestInProgress = false;
                }
            }
        };
        callback.setBeforeRequest();
        requestInProgress = true;
        Job.create(OpenApiBundle.message("openapi.audit.report.progress.title"), task).schedule();
    }

    @SuppressWarnings("deprecation")
	private static Request getSubmitAuditRequest(String token, String fileName, String text) {

        RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
                .addFormDataPart("specfile", fileName,
                        RequestBody.create(MediaType.parse("application/json"), text))
                .build();

        return new Request.Builder()
                .url(ASSESS_URL)
                .method("POST", body)
                .addHeader("X-API-TOKEN", token)
                .addHeader("Accept", "application/json")
                .addHeader("User-Agent", USER_AGENT)
                .build();
    }

    private static Request getRetryAuditRequest(String token, String apiToken) {

        return new Request.Builder()
                .url(ASSESS_URL + "?token=" + token)
                .addHeader("X-API-TOKEN", apiToken)
                .addHeader("Accept", "application/json")
                .addHeader("User-Agent", USER_AGENT)
                .build();
    }

    @SuppressWarnings("deprecation")
	private static Request getGenerateTokenRequest(String email) {

        MediaType mediaType = MediaType.parse("application/x-www-form-urlencoded");
        RequestBody body = RequestBody.create(mediaType, "email=" + email);
        return new Request.Builder()
                .url(TOKEN_URL)
                .method("POST", body)
                .addHeader("Content-Type", "application/x-www-form-urlencoded")
                .addHeader("User-Agent", USER_AGENT)
                .build();
    }

    public void sendGenerateTokenRequest(String email, EmailDialogDoOkActionCallback callback) {

        if (requestInProgress) {
            return;
        }
        
        ICoreRunnable task = new ICoreRunnable() {
        	@Override
        	public void run(IProgressMonitor monitor) throws CoreException {
			  try {
				  monitor.setTaskName(OpenApiBundle.message("openapi.audit.token.progress.indicator"));
	              Request request = getGenerateTokenRequest(email);
	              Response response = client.newCall(request).execute();
	              String jsonStr = Objects.requireNonNull(response.body()).string();
	              JSONObject json = getJsonResponse(jsonStr);
	
	              if (getStatus(json) == ResponseStatus.SUCCESS) {
	            	  monitor.done();
	                  callback.setDone();
	              } else {
	            	  monitor.done();
	                  callback.reject(OpenApiBundle.message("openapi.error.token.response.unexpected") + " " + jsonStr);
	              }
	          }
	          catch (Exception e) {
	        	  monitor.done();
	        	  Logger.log(e);
	              callback.reject(OpenApiBundle.message("openapi.error.token.unexpected" + " " + e.getMessage()));
	          }
	          finally {
	              requestInProgress = false;
	          }
			}
		};
		requestInProgress = true;
        Job.create(OpenApiBundle.message("openapi.audit.token.progress.title"), task).schedule();
    }

    @Override
    public void dispose() {
    }

    public static JSONObject getJsonResponse(String response) {
        JSONObject json = null;
        try {
            json = new JSONObject(response);
        }
        catch (JSONException ignored) {
        }
        return json;
    }

    public static ResponseStatus getStatus(JSONObject json) {
        return ResponseStatus.getStatus((String) getValue(json.toJsonMap(), "status"));
    }

    public static String getResponseToken(JSONObject json) {
        return (String) getValue(json.toJsonMap(), "token");
    }
}
