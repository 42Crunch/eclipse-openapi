package com.xliic.openapi.services;

import static com.xliic.openapi.OpenApiUtils.getFileType;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.codeHighlighting.HighlightingManager;
import com.xliic.core.concurrency.JobScheduler;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.listeners.TreeDocumentListener;
import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.ParserYamlAST;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.api.IASTService;
import com.xliic.openapi.topic.FileListener;

public class ASTService implements IASTService, Runnable, Disposable {

	private static final int DELAY = 700;
	private static final int INIT_DELAY = 500;
	private static final int CACHE_CAPACITY = 100;
	private static final int CACHE_TO_WIPE_THRESHOLD = 30;

	private final HighlightingManager highlightingManager;

	private final Project project;
	private final Set<Document> documentsToBundle;
	private final Set<VirtualFile> filesToRemove;
	private final ScheduledFuture<?> scheduledFuture;
	private final Map<String, TreeDocumentListener> astListenersMap;
	private final Map<String, Node> cache;

	private final ParserJsonAST parserJsonAST = new ParserJsonAST();
	private final ParserYamlAST parserYamlAST = new ParserYamlAST();

	private int counter;

	@SuppressWarnings("serial")
	public ASTService(@NotNull final Project project) {
		this.project = project;
		this.cache = Collections.synchronizedMap(new LinkedHashMap<>(CACHE_CAPACITY + 1, 1.0f, true) {
			@Override
			public boolean removeEldestEntry(Map.Entry<String, Node> entry) {
				return size() > CACHE_CAPACITY;
			}
		});
		astListenersMap = new HashMap<>();
		documentsToBundle = new HashSet<>();
		filesToRemove = new HashSet<>();
		ScheduledExecutorService scheduler = JobScheduler.getScheduler();
		scheduledFuture = scheduler.scheduleWithFixedDelay(this, INIT_DELAY, DELAY, TimeUnit.MILLISECONDS);
		highlightingManager = HighlightingManager.getInstance(project);
		counter = 0;
	}

	public static ASTService getInstance(@NotNull Project project) {
		return (ASTService) PlatformUI.getWorkbench().getService(IASTService.class);
	}

	@Override
	public void run() {
		try {
			safeRun();
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}

	private void safeRun() {
		if (project.isDisposed()) {
			return;
		}
		// Synchronized block must be as fast as possible
		boolean nothingToDo;
		Set<Document> safeDocumentsToBundle;
		Set<VirtualFile> safeFilesToRemove;
		synchronized (this) {
			safeDocumentsToBundle = new HashSet<>(documentsToBundle);
			safeFilesToRemove = new HashSet<>(filesToRemove);
			nothingToDo = safeFilesToRemove.isEmpty() && safeDocumentsToBundle.isEmpty();
			documentsToBundle.clear();
			filesToRemove.clear();
			counter++;
		}
		// Remove files first, cancel further parsing
		for (VirtualFile file : safeFilesToRemove) {
			try {
				remove(file);
			} catch (Exception ignored) {
			} finally {
				safeDocumentsToBundle
						.removeIf(document -> file.equals(FileDocumentManager.getInstance().getFile(document)));
			}
		}
		for (Document document : safeDocumentsToBundle) {
			try {
				parse(document);
			} catch (Exception ignored) {
			}
		}
		if (nothingToDo && (counter > CACHE_TO_WIPE_THRESHOLD)) {
			counter = 0;
			cleanUnusedCacheEntries();
		}
	}

	@Override
	public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {
		Node node = cache.remove(oldFileName);
		if (node != null) {
			cache.put(newFile.getPath(), node);
		}
	}

	@Override
	public void bundleDocumentChanged(Set<String> fileNames) {
		fileNames.forEach(this::resetCacheEntry);
		DataService dataService = DataService.getInstance(project);
		fileNames.removeIf(dataService::hasFileProperty);
		AuditService auditService = AuditService.getInstance(project);
		auditService.update(fileNames);
	}

	@Override
	public void documentChanged(@NotNull Document document) {
		synchronized (this) {
			documentsToBundle.add(document);
		}
	}

	public void parse(@NotNull Document document) {
		VirtualFile file = FileDocumentManager.getInstance().getFile(document);
		if (file != null) {
			resetCacheEntry(file.getPath());
			DataService dataService = DataService.getInstance(project);
			ParserService parserService = ParserService.getInstance(project);
			OpenApiFileType fileType = getFileType(file);
			String text = document.getText();
			ParserData data = parserService.parse(text, fileType);
			if (dataService.getFileProperty(file.getPath()).getVersion() != data.getVersion()) {
				dataService.setFileProperty(file.getPath(), new FileProperty(fileType, data.getVersion()));
			}
			dataService.setParserData(file.getPath(), data);
			if (!data.isValid()) {
				dataService.getParserData(file.getPath()).invalidate(data.getExceptionMessage());
			}
            AuditService auditService = AuditService.getInstance(project);
            ApplicationManager.getApplication().invokeLater(() -> {
                auditService.update(file.getPath());
                project.getMessageBus().syncPublisher(FileListener.TOPIC).handleDocumentChanged(file);
            });
			auditService.update(file.getPath());
		}
	}

	@Override
	public Node getRootNode(@NotNull VirtualFile file) {
		return getRootNode(file.getPath());
	}

	public Node getRootNode(@NotNull String fileName) {
		Node result = cache.get(fileName);
		if (result != null) {
			return result;
		} else {
			final String text = ApplicationManager.getApplication()
					.runReadAction((Computable<String>) () -> OpenApiUtils.getTextFromFile(fileName));
			return getRootNode(fileName, text);
		}
	}

	@Override
	public Node getRootNode(@NotNull VirtualFile file, @NotNull String text) {
		return getRootNode(file.getPath(), text);
	}

	public Node getRootNode(@NotNull String fileName, @NotNull String text) {
		Node result = cache.get(fileName);
		if (result != null) {
			return result;
		} else {
            Node root;
            try {
                root = getParser(fileName).parse(text);
            }
            catch (Exception e) {
                root = null;
            }
			cache.put(fileName, root);
			return root;
		}
	}

	@Override
	public void resetCacheEntry(@NotNull String fileName) {
		if (cache.containsKey(fileName)) {
			cache.put(fileName, null);
		}
	}

	@Override
	public void addASTDocumentListener(@NotNull VirtualFile file) {
		Document document = FileDocumentManager.getInstance().getDocument(file);
		if (document != null) {
			TreeDocumentListener treeListener = new TreeDocumentListener(project);
			astListenersMap.put(file.getPath(), treeListener);
			document.addDocumentListener(treeListener);
		}
	}

	@Override
	public void removeASTDocumentListener(@NotNull VirtualFile file) {
		Document document = FileDocumentManager.getInstance().getDocument(file);
		if (document != null) {
			TreeDocumentListener treeListener = astListenersMap.remove(file.getPath());
			if (treeListener != null) {
				document.removeDocumentListener(treeListener);
			}
		}
	}

	private ParserAST getParser(String fileName) {
		return (OpenApiUtils.getFileType(fileName) == OpenApiFileType.Json) ? parserJsonAST : parserYamlAST;
	}

	@Override
	public void scheduleToRemove(@NotNull VirtualFile file) {
		synchronized (this) {
			filesToRemove.add(file);
		}
	}

	private void remove(@NotNull VirtualFile file) {
		SwingUtilities.invokeLater(() -> {
			if (!project.isDisposed()) {
	            project.getMessageBus().syncPublisher(FileListener.TOPIC).handleClosedFile(file);
	            DataService dataService = DataService.getInstance(project);
	            dataService.removeParserData(file.getPath());
	            dataService.removeFileProperty(file.getPath());
	            AuditService auditService = AuditService.getInstance(project);
	            auditService.removeAuditReport(file.getPath());
	            QuickFixService quickFixService = QuickFixService.getInstance();
	            quickFixService.handleAuditReportRemoved(file.getPath());
				highlightingManager.close(file);
			}
		});
	}

	private void cleanUnusedCacheEntries() {
		AuditService auditService = AuditService.getInstance(project);
		BundleService bundleService = BundleService.getInstance(project);
		for (String fileName : new HashSet<>(cache.keySet())) {
			if (!bundleService.isFileBeingBundled(fileName) && !auditService.isFileBeingAudited(fileName)) {
				cache.remove(fileName);
			}
		}
	}

	@Override
	public void dispose() {
		scheduledFuture.cancel(true);
		cache.clear();
		astListenersMap.clear();
		documentsToBundle.clear();
		filesToRemove.clear();
		counter = 0;
	}
}
