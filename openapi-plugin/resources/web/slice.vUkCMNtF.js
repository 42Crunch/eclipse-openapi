import { c as t, u as i, b as l } from "./extends.lDO40HzL.js";
const c = {
  ready: !1,
  data: {
    insecureSslHostnames: [],
    platformUrl: "https://platform.42crunch.com",
    platformApiToken: "",
    platformServices: {
      source: "auto",
      manual: void 0,
      auto: "services.42crunch.com:8001"
    },
    scandManager: {
      url: "",
      auth: "none",
      timeout: 300,
      header: {
        name: "",
        value: ""
      }
    },
    scanRuntime: "docker",
    scanImage: "",
    docker: {
      replaceLocalhost: !0,
      useHostNetwork: !0
    },
    platform: "",
    cli: { found: !1, location: "" },
    repository: "",
    platformTemporaryCollectionName: "",
    platformMandatoryTags: ""
  },
  platformConnectionTestResult: void 0,
  waitingForPlatformConnectionTest: !1,
  overlordConnectionTestResult: void 0,
  waitingForOverlordConnectionTest: !1,
  scandManagerConnectionTestResult: void 0,
  waitingForScandManagerConnectionTest: !1,
  cliTestResult: void 0,
  waitingForCliTest: !1,
  waitingForCliDownload: !1,
  cliDownloadPercent: 0,
  errors: {
    "platform-connection": void 0,
    "platform-services": void 0,
    "temporary-collection": void 0,
    "mandatory-tags": void 0,
    "scan-image": void 0,
    "scan-runtime": void 0
  },
  hasErrors: !1
}, a = t({
  name: "config",
  initialState: c,
  reducers: {
    loadConfig: (o, e) => {
      o.data = e.payload, o.ready = !0;
    },
    saveConfig: (o, e) => {
      o.data = { ...o.data, ...e.payload }, o.data.platformServices.auto = d(o.data.platformUrl), o.platformConnectionTestResult = void 0, o.overlordConnectionTestResult = void 0, o.scandManagerConnectionTestResult = void 0;
    },
    setError: (o, e) => {
      const { screen: n, error: r } = e.payload;
      o.errors[n] = r, o.hasErrors = Object.values(o.errors).some((s) => s !== void 0);
    },
    clearError: (o, e) => {
      o.errors[e.payload] = void 0, o.hasErrors = Object.values(o.errors).some((n) => n !== void 0);
    },
    addInsecureSslHostname: (o, e) => {
      o.data.insecureSslHostnames.push(e.payload);
    },
    removeInsecureSslHostname: (o, e) => {
      o.data.insecureSslHostnames = o.data.insecureSslHostnames.filter(
        (n) => n !== e.payload
      );
    },
    testPlatformConnection: (o, e) => {
      o.waitingForPlatformConnectionTest = !0, o.platformConnectionTestResult = void 0;
    },
    showPlatformConnectionTest: (o, e) => {
      o.platformConnectionTestResult = e.payload, o.waitingForPlatformConnectionTest = !1;
    },
    testOverlordConnection: (o, e) => {
      o.waitingForOverlordConnectionTest = !0, o.overlordConnectionTestResult = void 0;
    },
    showOverlordConnectionTest: (o, e) => {
      o.overlordConnectionTestResult = e.payload, o.waitingForOverlordConnectionTest = !1;
    },
    testScandManagerConnection: (o, e) => {
      o.waitingForScandManagerConnectionTest = !0, o.scandManagerConnectionTestResult = void 0;
    },
    showScandManagerConnectionTest: (o, e) => {
      o.scandManagerConnectionTestResult = e.payload, o.waitingForScandManagerConnectionTest = !1;
    },
    showConfigWindow: (o, e) => {
    },
    testCli: (o, e) => {
      o.waitingForCliTest = !0, o.cliTestResult = void 0;
    },
    showCliTest: (o, e) => {
      o.cliTestResult = e.payload, o.waitingForCliTest = !1;
    },
    downloadCli: (o, e) => {
      o.waitingForCliDownload = !0, o.cliTestResult = void 0, o.cliDownloadError = void 0;
    },
    showCliDownload: (o, e) => {
      o.cliTestResult = void 0, e.payload.completed ? (o.waitingForCliDownload = !1, o.cliDownloadPercent = 0, e.payload.success ? (o.data.cli.location = e.payload.location, o.data.cli.found = !0) : (o.data.cli.found = !1, o.cliDownloadError = e.payload.error)) : (o.waitingForCliDownload = !0, o.cliDownloadPercent = e.payload.progress.percent);
    },
    openLink: (o, e) => {
    }
  }
});
function d(o) {
  try {
    const n = new URL(o).hostname;
    return n.toLowerCase().startsWith("platform") ? n.replace(/^platform/i, "services") + ":8001" : "services." + n + ":8001";
  } catch {
    return "";
  }
}
const {
  loadConfig: f,
  saveConfig: m,
  showConfigWindow: C,
  setError: p,
  clearError: v,
  testPlatformConnection: w,
  showPlatformConnectionTest: g,
  testOverlordConnection: T,
  showOverlordConnectionTest: h,
  testScandManagerConnection: y,
  showScandManagerConnectionTest: S,
  addInsecureSslHostname: R,
  removeInsecureSslHostname: F,
  testCli: D,
  showCliTest: M,
  downloadCli: H,
  showCliDownload: P,
  openLink: E
} = a.actions, O = i, k = l, I = a.reducer;
export {
  R as a,
  k as b,
  I as c,
  T as d,
  y as e,
  D as f,
  H as g,
  v as h,
  m as i,
  g as j,
  h as k,
  f as l,
  S as m,
  M as n,
  E as o,
  P as p,
  F as r,
  p as s,
  w as t,
  O as u
};
