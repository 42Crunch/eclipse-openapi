package com.xliic.openapi.wizard;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.stream.Stream;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.dialogs.WizardNewFileCreationPage;
import org.eclipse.ui.ide.IDE;

import com.xliic.core.diagnostic.Logger;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;

public class OpenAPICreationPage extends WizardNewFileCreationPage {

    private static final URL BASE_URL = OpenAPIAbstractUIPlugin.getInstance().getBundle().getEntry("/");

    private IWorkbench workbench;
    private Button openFileCheckbox;

    private OpenApiVersion version;
    private OpenApiFileType fileType;

    private static int nameCounter = 1;

    public OpenAPICreationPage(IWorkbench workbench, IStructuredSelection selection, OpenApiVersion version, OpenApiFileType fileType) {

        super("sampleCreateReadmePage1", selection);
        this.setTitle(OpenApiBundle.message("openapi.new.file.action.dialog.title"));
        this.setDescription(OpenApiBundle.message("openapi.new.file.action.dialog.title"));
        this.workbench = workbench;
        this.version = version;
        this.fileType = fileType;
    }

    @Override
    public void createControl(Composite parent) {

        super.createControl(parent);
        Composite composite = (Composite) getControl();

        PlatformUI.getWorkbench().getHelpSystem().setHelp(composite, "org.eclipse.ui.examples.readmetool.creation_wizard_page_context");
        this.setFileName("sample" + nameCounter + (fileType == OpenApiFileType.Json ? ".json" : ".yaml"));

        Group group = new Group(composite, SWT.NONE);
        group.setLayout(new GridLayout());
        group.setText("Automatic_sample_section_generation");
        group.setLayoutData(new GridData(GridData.GRAB_HORIZONTAL | GridData.HORIZONTAL_ALIGN_FILL));

        openFileCheckbox = new Button(composite, SWT.CHECK);
        openFileCheckbox.setText("Open_file_for_editing_when_done");
        openFileCheckbox.setSelection(true);

        setPageComplete(validatePage());
    }

    public boolean finish() {

        IFile newFile = createNewFile();
        if (newFile == null) {
            return false;
        }
        try {
            if (openFileCheckbox.getSelection()) {
                IWorkbenchWindow dwindow = workbench.getActiveWorkbenchWindow();
                IWorkbenchPage page = dwindow.getActivePage();
                if (page != null) {
                    IDE.openEditor(page, newFile, true);
                }
            }
        } catch (PartInitException e) {
        	Logger.getInstance(OpenAPICreationPage.class).error(e);
            return false;
        }
        nameCounter++;
        return true;
    }

    @Override
    protected InputStream getInitialContents() {

        String id = null;
        if (fileType == OpenApiFileType.Json) {
        	if (version == OpenApiVersion.V3_1) {
                id = "Json OpenAPI version 31.json.ft";
            } else if (version == OpenApiVersion.V3) {
                id = "Json OpenAPI version 3.json.ft";
            } else if (version == OpenApiVersion.V2) {
                id = "Json OpenAPI version 2.json.ft";
            }
        } else if (fileType == OpenApiFileType.Yaml) {
        	if (version == OpenApiVersion.V3_1) {
                id = "Yaml OpenAPI version 31.yaml.ft";
            } else if (version == OpenApiVersion.V3) {
                id = "Yaml OpenAPI version 3.yaml.ft";
            } else {
                id = "Yaml OpenAPI version 2.yaml.ft";
            }
        }

        StringBuilder sb = new StringBuilder();
        try {
            URL url = new URL(BASE_URL, "resources/fileTemplates/internal/" + id);
            InputStream inputStream = getClass().getResourceAsStream(url.getFile());
            Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
            stream.forEach(line -> sb.append(line).append("\n"));
        } catch (MalformedURLException e) {
        	Logger.getInstance(OpenAPICreationPage.class).error(e);
        }
        return new ByteArrayInputStream(sb.toString().getBytes());
    }

    @Override
    protected String getNewFileLabel() {
        return "File name";
    }
}
