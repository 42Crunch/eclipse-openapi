package com.xliic.openapi;

import static org.apache.commons.lang.RandomStringUtils.random;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;

import com.xliic.core.vfs.VirtualFile;

import junit.framework.TestCase;

public class VirtualFileTest extends TestCase {

	private File file;
	private String name;

    public void setUp() {
    	name = "tc_" + random(15, true, false).toLowerCase();
    	file = new File(name);
    }

    public void testBasic() throws IOException {
    	file.mkdir();
    	VirtualFile x = new VirtualFile(file);
    	assertEquals(x.isValid(), true);
    	assertEquals(x.isDirectory(), true);
    	assertEquals(x.getExtension(), null);
    	assertEquals(x.getPath().endsWith(name), true);
    	assertEquals(x.getIFile(), null);
    	assertEquals(x.findChild("hsgdjagjd")  , null);
    	x.delete(null);
		assertEquals(x.isValid(), false);
    }

    public void testCreateFolders() throws IOException {
    	file.mkdir();
    	VirtualFile x = new VirtualFile(file);
    	x.createChildDirectory(null, "aaa");
    	VirtualFile y = x.findChild("aaa");
    	assertEquals(y.isValid(), true);
    	assertEquals(y.isDirectory(), true);
    	assertEquals(y.getPath().endsWith("aaa"), true);
    	x.delete(null);
    	assertEquals(x.isValid(), false);
    	assertEquals(y.isValid(), false);
    }

    public void testCreateFiles() throws IOException {
    	file.mkdir();
    	VirtualFile x = new VirtualFile(file);
    	x.createChildData(x, "aaa.txt");   	
    	VirtualFile y = x.findChild("aaa.txt");
    	assertEquals(y.isValid(), true);
    	assertEquals(y.isDirectory(), false);
    	assertEquals(y.getPath().endsWith("aaa.txt"), true);
    	assertEquals(y.getExtension(), "txt");   	
    	y.delete(null);
    	assertEquals(x.isValid(), true);
    	assertEquals(y.isValid(), false);
    	x.delete(null);
    	assertEquals(x.isValid(), false);
    	assertEquals(y.isValid(), false);
    }

    public void tearDown() {
    	if (file.exists()) {
    		file.delete();
    	}
    }
}
