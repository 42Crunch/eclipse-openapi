package com.xliic.openapi;

import junit.framework.TestCase;

public abstract class NodeJSTestCase extends TestCase {

    private static int PASS_RATE_THRESHOLD = 50;

    private static int pass = 0;
    private static int total = 0;

    private static int itPass = 0;
    private static int itTotal = 0;

    private static int descPass = 0;
    private static int descTotal = 0;


    protected interface TestClosure {
        void run();
    }

    public static void setPassRateThreshold(int passRateThreshold) {
        PASS_RATE_THRESHOLD = passRateThreshold;
    }

    protected static void it(String name, TestClosure closure) {
        itPass = 0;
        itTotal = 0;
        closure.run();
        System.out.println(" TC [" + name + "] " + itPass + " / " + itTotal);
    }

    protected static void describe(String name, TestClosure closure) {
        descPass = 0;
        descTotal = 0;
        closure.run();
        System.out.println("Summary for [" + name + "] "  + descPass + " / " + descTotal + "\n");
    }

    protected static void assertMatch(boolean value) {
        if (value) {
            pass += 1;
            itPass += 1;
            descPass += 1;
        }
        total += 1;
        itTotal += 1;
        descTotal += 1;
    }

    protected static void assertAndPrintRate() {
        assert(total > 0);
        int rate = (int) Math.floor(100.0 * pass / total);
        System.out.println("Summary: pass rate = " + rate + "% (threshold = " + PASS_RATE_THRESHOLD + "%)");
        assert(rate >= PASS_RATE_THRESHOLD);
    }
}
