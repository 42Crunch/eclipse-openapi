package com.xliic.openapi.services;

import static com.xliic.openapi.utils.OpenAPIUtils.getValue;

import java.io.File;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.ICoreRunnable;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.services.IDisposable;
import org.jetbrains.annotations.NotNull;
import org.json.JSONException;
import org.json.JSONObject;

import com.xliic.core.application.ApplicationInfo;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.Logger;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.callback.EmailDialogDoOkActionCallback;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.ResponseStatus;
import com.xliic.openapi.services.api.IAuditService;
import com.xliic.openapi.services.api.IDataService;

import okhttp3.FormBody;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public final class AuditService implements IAuditService, IDisposable {

	private static final String ASSESS_URL = "https://stateless.42crunch.com/api/v1/anon/assess/vscode";
	private static final String TOKEN_URL = "https://stateless.42crunch.com/api/v1/anon/token";
	private static final int MAX_RETRY_ATTEMPTS = 20;
	private static final int ATTEMPT_DELAY = 5000;
    private static final String USER_AGENT = "IntelliJ/" + ApplicationInfo.getInstance().getFullVersion();
    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    private final Project project;
    private final Map<String, Audit> auditContext = new HashMap<>();

    private boolean requestInProgress;

	public AuditService(@NotNull Project project) {
		this.project = project;
		requestInProgress = false;
	}

	public static AuditService getInstance(Project project) {
		return (AuditService) PlatformUI.getWorkbench().getService(IAuditService.class);
	}

	public boolean isFileBeingAudited(@NotNull String fileName) {
		return !getAuditReportsForAuditParticipantFileName(fileName).isEmpty();
	}

	@SuppressWarnings("serial")
    public void update(@NotNull String fileName) {
        update(new HashSet<>() {{ add(fileName); }});
    }

    public void update(@NotNull Set<String> fileNames) {
        ASTService astService = ASTService.getInstance(project);
        for (String fileName : fileNames) {
            List<Audit> reports = getAuditReportsForAuditParticipantFileName(fileName);
            if (!reports.isEmpty()) {
                VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
                if (file != null) {
                    Node root = astService.getRootNode(file);
                    if (root == null) {
                        continue;
                    }
                    Document document = FileDocumentManager.getInstance().getDocument(file);
                    if (document != null) {
                        for (Audit audit : reports) {
                            audit.updateRangeMarkers(fileName, document, root);
                        }
                    }
                }
            }
        }
    }

	@Override
	public void sendAuditRequest(String token, String fileName, AuditActionCallback callback) {

		if (requestInProgress) {
			callback.reject("Audit for " + fileName + " is already in progress");
			return;
		}

		BundleService bundleService = BundleService.getInstance(project);
		final BundleResult bundleResult = bundleService.getBundle(fileName);
		if (bundleResult == null) {
			callback.reject("No bundle found for file " + fileName);
			return;
		}
		final String text = bundleResult.getJsonText();

		ICoreRunnable task = new ICoreRunnable() {
			@Override
			public void run(IProgressMonitor monitor) throws CoreException {
				try {
					monitor.setTaskName(OpenApiBundle.message("openapi.audit.report.progress.indicator"));
					Request request = getSubmitAuditRequest(token, fileName, text);
					Response response = client.newCall(request).execute();
					String jsonStr = Objects.requireNonNull(response.body()).string();
					JSONObject json = getJsonResponse(jsonStr);

					if (getStatus(json) == ResponseStatus.IN_PROGRESS) {
						for (int attempt = 0; attempt < MAX_RETRY_ATTEMPTS; attempt++) {

							Thread.sleep(ATTEMPT_DELAY);
							if (attempt >= 2) {
								monitor.setTaskName(
										OpenApiBundle.message("openapi.audit.token.progress.indicator.wait"));
							}

							request = getRetryAuditRequest(getResponseToken(json), token);
							response = client.newCall(request).execute();
							jsonStr = Objects.requireNonNull(response.body()).string();
							json = getJsonResponse(jsonStr);

							if (getStatus(json) == ResponseStatus.PROCESSED) {
								final JSONObject finalJson = json;
								ApplicationManager.getApplication().runReadAction(() -> {
									setAuditReport(fileName, new Audit(project, fileName, finalJson));
									callback.setDone();
								});
								return;
							} else {
								if (attempt >= MAX_RETRY_ATTEMPTS - 1) {
									callback.reject("Failed to audit after " + MAX_RETRY_ATTEMPTS + " attempts");
								}
							}
						}
					} else if (getStatus(json) == ResponseStatus.PROCESSED) {
						final JSONObject finalJson = json;
						ApplicationManager.getApplication().runReadAction(() -> {
							setAuditReport(fileName, new Audit(project, fileName, finalJson));
							callback.setDone();
						});
					} else if (response.code() == 403) {
						callback.reject(OpenApiBundle.message("openapi.error.response.403"));
					} else if (response.code() == 429) {
						callback.reject(OpenApiBundle.message("openapi.error.response.429"));
					} else {
						callback.reject(OpenApiBundle.message("openapi.error.response.unexpected") + " " + jsonStr);
					}
				} catch (Exception e) {
					Logger.log(e);
					callback.reject(OpenApiBundle.message("openapi.error.unexpected") + " " + e.getMessage());
				} finally {
					monitor.done();
					requestInProgress = false;
				}
			}
		};
		callback.setBeforeRequest();
		requestInProgress = true;
		Job.create(OpenApiBundle.message("openapi.audit.report.progress.title"), task).schedule();
	}

    private static Request getSubmitAuditRequest(String token, String fileName, String text) {
        RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
                .addFormDataPart("specfile", fileName,
                        RequestBody.create(text, MediaType.parse("application/json")))
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

    private static Request getGenerateTokenRequest(String email) {
        RequestBody formBody = new FormBody.Builder()
                .add("email", email)
                .build();

        return new Request.Builder()
                .url(TOKEN_URL)
                .addHeader("User-Agent", USER_AGENT)
                .post(formBody)
                .build();
    }

	@Override
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
						callback.reject(
								OpenApiBundle.message("openapi.error.token.response.unexpected") + " " + jsonStr);
					}
				} catch (Exception e) {
					monitor.done();
					Logger.log(e);
					callback.reject(OpenApiBundle.message("openapi.error.token.unexpected") + " " + e.getMessage());
				} finally {
					requestInProgress = false;
				}
			}
		};
		requestInProgress = true;
		Job.create(OpenApiBundle.message("openapi.audit.token.progress.title"), task).schedule();
	}

	@Override
	public void dispose() {
		auditContext.clear();
	}

	public static JSONObject getJsonResponse(String response) {
		JSONObject json = null;
		try {
			json = new JSONObject(response);
		} catch (JSONException ignored) {
		}
		return json;
	}

	public static ResponseStatus getStatus(JSONObject json) {
		return ResponseStatus.getStatus((String) getValue(json.toJsonMap(), "status"));
	}

	public static String getResponseToken(JSONObject json) {
		return (String) getValue(json.toJsonMap(), "token");
	}
	
    public Audit getAuditReport(String fileName) {
        return auditContext.get(fileName);
    }

    public void removeIssues(@NotNull List<Issue> issues) {
        Map<String, List<Issue>> issuesMap = new HashMap<>();
        for (Issue issue : issues) {
            String key = issue.getAuditFileName();
            if (!issuesMap.containsKey(key)) {
                issuesMap.put(key, new LinkedList<>());
            }
            issuesMap.get(key).add(issue);
        }
        for (Map.Entry<String, List<Issue>> entry : issuesMap.entrySet()) {
            auditContext.get(entry.getKey()).removeIssues(entry.getValue());
        }
    }

    public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {
        if (hasAuditReport(oldFileName)) {
            setAuditReport(newFile.getPath(), removeAuditReport(oldFileName));
        }
        if (!auditContext.isEmpty()) {
            for (Audit audit : auditContext.values()) {
                audit.handleFileNameChanged(newFile, oldFileName);
            }
        }
    }

    public List<Issue> getIssuesForAuditParticipantFileName(String fileName) {
        List<Issue> issues = new LinkedList<>();
        for (Audit audit : auditContext.values()) {
            issues.addAll(audit.getIssuesForAuditParticipantFileName(fileName));
        }
        return issues;
    }

    public List<Audit> getAuditReportsForAuditParticipantFileName(String fileName) {
        List<Audit> reports = new LinkedList<>();
        for (Audit audit : auditContext.values()) {
            if (audit.hasAuditParticipantFileName(fileName)) {
                reports.add(audit);
            }
        }
        return reports;
    }

    public void setAuditReport(String fileName, Audit audit) {
        auditContext.put(fileName, audit);
    }

    public Audit removeAuditReport(String fileName) {
        return auditContext.remove(fileName);
    }

    public boolean hasAuditReport(String fileName) {
        return auditContext.containsKey(fileName);
    }

    public boolean isNotAuditParticipantFile(String fileName) {
        for (Audit audit : auditContext.values()) {
            if (audit.hasAuditParticipantFileName(fileName)) {
                return false;
            }
        }
        return true;
    }
}
