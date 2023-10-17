package com.xliic.core.vfs;

import static org.apache.commons.lang3.RandomStringUtils.random;

import java.io.File;
import java.io.IOException;

import junit.framework.TestCase;

public class VirtualFileTest extends TestCase {

	private File file;
	private String name;

    @Override
	public void setUp() {
    	name = "tc_" + random(15, true, false).toLowerCase();
    	file = new File(name);
    }

    public void testBasic() throws IOException {
    	file.mkdir();
    	VirtualFile x = new VirtualFile(file);
    	assertEquals(true, x.isValid());
    	assertEquals(true, x.isDirectory());
    	assertEquals(null, x.getExtension());
    	assertEquals(true, x.getPath().endsWith(name));
    	assertEquals(null, x.getIFile());
    	assertEquals(null, x.findChild("hsgdjagjd"));
    	x.delete(null);
		assertEquals(false, x.isValid());
    }

    public void testCreateFolders() throws IOException {
    	file.mkdir();
    	VirtualFile x = new VirtualFile(file);
    	x.createChildDirectory(null, "aaa");
    	VirtualFile y = x.findChild("aaa");
    	assertEquals(true, y.isValid());
    	assertEquals(true, y.isDirectory());
    	assertEquals(true, y.getPath().endsWith("aaa"));
    	x.delete(null);
    	assertEquals(false, x.isValid());
    	assertEquals(false, y.isValid());
    }

    public void testCreateFiles() throws IOException {
    	file.mkdir();
    	VirtualFile x = new VirtualFile(file);
    	x.createChildData(x, "aaa.txt");
    	VirtualFile y = x.findChild("aaa.txt");
    	assertEquals(true, y.isValid());
    	assertEquals(false, y.isDirectory());
    	assertEquals(true, y.getPath().endsWith("aaa.txt"));
    	assertEquals("txt", y.getExtension());
    	y.delete(null);
    	assertEquals(true, x.isValid());
    	assertEquals(false, y.isValid());
    	x.delete(null);
    	assertEquals(false, x.isValid());
    	assertEquals(false, y.isValid());
    }

    @Override
	public void tearDown() {
    	if (file.exists()) {
    		file.delete();
    	}
    }
}
