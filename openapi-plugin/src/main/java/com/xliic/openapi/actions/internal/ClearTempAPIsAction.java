package com.xliic.openapi.actions.internal;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.LockSupport;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.NetUtils;
import com.xliic.openapi.utils.Utils;

import okhttp3.Response;

public class ClearTempAPIsAction extends AnAction {

    private static final int N = 5;
    private static final int K = 2;

    @Override
    public void actionPerformed(@NotNull AnActionEvent anActionEvent) {
        Project project = anActionEvent.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundleResult = bundleService.getBundle(file.getPath());
        if (bundleResult == null || !bundleResult.isBundleComplete()) {
            return;
        }
        ProgressManager.getInstance().run(new Task.Backgroundable(project, "Test cleaning temp APIs") {
            @Override
            public void run(@NotNull ProgressIndicator progressIndicator) {
                try {
                    String collectionId = ScanUtils.findOrCreateTempCollection();
                    progressIndicator.setText("Created temp collection " + collectionId);
                    // Create APIs to clear
                    for (int i = 0 ; i < N ; i++) {
                        String apiId = ScanUtils.createTempAPI(collectionId, bundleResult.getJsonText());
                        progressIndicator.setText("Created temp api to clear " + apiId);
                        LockSupport.parkNanos(TimeUnit.SECONDS.toNanos(1));
                    }
                    progressIndicator.setText("Waiting...");
                    LockSupport.parkNanos(TimeUnit.MILLISECONDS.toNanos(ScanUtils.TEMP_API_CLEAN_TIMEOUT + 100));
                    // Create 2 fresh APIs to check they won't be cleared
                    Set<String> freshAPIs = new HashSet<>();
                    for (int i = 0 ; i < K ; i++) {
                        String apiId = ScanUtils.createTempAPI(collectionId, bundleResult.getJsonText());
                        progressIndicator.setText("Created temp api " + apiId);
                        freshAPIs.add(apiId);
                        LockSupport.parkNanos(TimeUnit.SECONDS.toNanos(1));
                    }
                    progressIndicator.setText("Clear...");
                    ScanUtils.clearTempApis(collectionId);
                    progressIndicator.setText("Clear complete");
                    Set<String> actualAPIsNames = new HashSet<>();
                    try (Response response = PlatformAPIs.Sync.listApis(collectionId)) {
                        Node body = NetUtils.getBodyNodeRequireNonNull(response);
                        Node list = body.find("/list");
                        if (list != null) {
                            for (Node item : list.getChildren()) {
                                Node desc = item.getChildRequireNonNull("desc");
                                String id = desc.getChildValueRequireNonNull("id");
                                if (freshAPIs.contains(id)) {
                                    String name = desc.getChildValueRequireNonNull("name");
                                    actualAPIsNames.add(name);
                                }
                            }
                        }
                    }
                    if (actualAPIsNames.size() == K) {
                        MsgUtils.info(project, "Current APIs: " + actualAPIsNames, true);
                    } else {
                        MsgUtils.error(project, "Unexpected number of current APIs " + actualAPIsNames.size(), true);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }
}
