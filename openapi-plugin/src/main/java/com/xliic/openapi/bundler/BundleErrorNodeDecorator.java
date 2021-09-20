//package com.xliic.openapi.bundler;
//
//import com.xliic.idea.DumbAware;
//import com.xliic.idea.file.VirtualFile;
//import com.xliic.idea.project.Project;
//import com.xliic.openapi.OpenApiFileType;
//import com.xliic.openapi.OpenApiUtils;
//import com.xliic.openapi.services.BundleService;
//
//public class BundleErrorNodeDecorator implements ProjectViewNodeDecorator, DumbAware {
//
//	@Override
//	public void decorate(ProjectViewNode<?> node, PresentationData data) {
//		Project project = node.getProject();
//		if (project == null) {
//			return;
//		}
//		VirtualFile file = node.getVirtualFile();
//		if (file == null || !file.isValid()) {
//			return;
//		}
//		BundleService bundleService = BundleService.getInstance(project);
//		if (file.isDirectory()) {
//			for (String bundleFile : bundleService.getBundleErrorsMap().keySet()) {
//				if (bundleFile.startsWith(file.getPath())) {
//					data.setAttributesKey(CodeInsightColors.ERRORS_ATTRIBUTES);
//					break;
//				}
//			}
//		} else {
//			OpenApiFileType type = OpenApiUtils.getFileType(file);
//			if (type == OpenApiFileType.Unsupported) {
//				return;
//			}
//			if (bundleService.getBundleErrorsMap().containsKey(file.getPath())) {
//				data.setAttributesKey(CodeInsightColors.ERRORS_ATTRIBUTES);
//			}
//		}
//	}
//
//	@Override
//	public void decorate(PackageDependenciesNode node, ColoredTreeCellRenderer cellRenderer) {
//	}
//}
