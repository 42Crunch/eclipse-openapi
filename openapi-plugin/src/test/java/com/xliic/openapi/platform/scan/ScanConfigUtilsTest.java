package com.xliic.openapi.platform.scan;

import junit.framework.TestCase;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;

import static com.xliic.openapi.platform.scan.config.ScanConfigUtils.convertTitleToAlias;
import static com.xliic.openapi.platform.scan.config.ScanConfigUtils.getGitRoot;

public class ScanConfigUtilsTest extends TestCase {

    private static final String ROOT_PATH = new File("").getAbsolutePath();

    public void testConvertTitleToAlias() {
        assertEquals("", "");
        assertEquals("abc", convertTitleToAlias("ABC"));
        assertEquals("a-b_c.d", convertTitleToAlias("A-B_C.D"));
        assertEquals("abc-foo", convertTitleToAlias("ABC-foo"));
        assertEquals("abc-foo", convertTitleToAlias("ABC--------foo"));
        assertEquals("abc-23_wer-mg334", convertTitleToAlias("abc-+23_wer#$%#mg334)"));
        assertEquals("abc-23_wer-mg334-sad-sad-.sag___", convertTitleToAlias("abc-+23_wer#$%#mg334)(*&^%$#@!~sad+-sad<>,.sag___yg"));
    }

    public void testGetGitRoot() throws IOException {
    	String gitPath;
    	if (ROOT_PATH.endsWith("src")) {
    		gitPath = Paths.get(ROOT_PATH, "test", "testData", "abc").toAbsolutePath().toString();
    	} else {
    		gitPath = Paths.get(ROOT_PATH, "src", "test", "testData", "abc").toAbsolutePath().toString();
    	}
        File git = new File(Paths.get(gitPath, ".git").toString());       
        assert git.exists() || (git.mkdir());
        assertEquals(gitPath, getGitRoot(Paths.get(gitPath, "a.json").toString()));
        assertEquals(gitPath, getGitRoot(Paths.get(gitPath,"/b/b.json").toString()));
        assertEquals(gitPath, getGitRoot(Paths.get(gitPath,"/b/c/c.json").toString()));
        FileUtils.deleteDirectory(git);
    }
}
