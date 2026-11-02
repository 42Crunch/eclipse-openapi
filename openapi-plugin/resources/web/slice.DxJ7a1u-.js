import { Ht as e, mn as t, pn as n } from "./icons.ODuw_IC-.js";
var r = e({
	name: "config",
	initialState: {
		ready: !1,
		data: {
			insecureSslHostnames: [],
			platformUrl: "https://platform.42crunch.com",
			platformAuthType: "anond-token",
			platformApiToken: "",
			anondToken: "",
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
				},
				httpProxy: "",
				httpsProxy: "",
				httpProxyApi: "",
				httpsProxyApi: ""
			},
			auditRuntime: "platform",
			scanRuntime: "docker",
			scanImage: "",
			scanProxy: "",
			docker: {
				replaceLocalhost: !0,
				useHostNetwork: !0
			},
			platform: "",
			cli: {
				found: !1,
				location: ""
			},
			cliDirectoryOverride: "",
			repository: "",
			platformTemporaryCollectionName: "",
			platformMandatoryTags: "",
			approvedHosts: [],
			internalUseDevEndpoints: !1,
			internalFeatures: !1,
			internalDisableLogRedaction: !1,
			internalRegisterMcp: !1,
			host: "vscode"
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
			"runtime-binary": void 0,
			"runtime-docker": void 0,
			"runtime-scand-manager": void 0,
			"audit-runtime": void 0,
			"scan-runtime": void 0,
			"openapi-external-refs": void 0,
			"internal-settings": void 0
		},
		hasErrors: !1
	},
	reducers: {
		loadConfig: (e, t) => {
			e.ready ? e.data.cli = t.payload.cli : (e.ready = !0, e.data = t.payload);
		},
		saveConfig: (e, t) => {
			e.data = {
				...e.data,
				...t.payload
			}, e.data.platformServices.auto = i(e.data.platformUrl), e.platformConnectionTestResult = void 0, e.overlordConnectionTestResult = void 0, e.scandManagerConnectionTestResult = void 0, e.cliDownloadError = void 0, e.cliTestResult = void 0;
		},
		setError: (e, t) => {
			let { screen: n, error: r } = t.payload;
			e.errors[n] = r, e.hasErrors = Object.values(e.errors).some((e) => e !== void 0);
		},
		clearError: (e, t) => {
			e.errors[t.payload] = void 0, e.hasErrors = Object.values(e.errors).some((e) => e !== void 0);
		},
		addInsecureSslHostname: (e, t) => {
			e.data.insecureSslHostnames.push(t.payload);
		},
		removeInsecureSslHostname: (e, t) => {
			e.data.insecureSslHostnames = e.data.insecureSslHostnames.filter((e) => e !== t.payload);
		},
		testPlatformConnection: (e, t) => {
			e.waitingForPlatformConnectionTest = !0, e.platformConnectionTestResult = void 0;
		},
		showPlatformConnectionTest: (e, t) => {
			e.platformConnectionTestResult = t.payload, e.waitingForPlatformConnectionTest = !1;
		},
		testOverlordConnection: (e, t) => {
			e.waitingForOverlordConnectionTest = !0, e.overlordConnectionTestResult = void 0;
		},
		showOverlordConnectionTest: (e, t) => {
			e.overlordConnectionTestResult = t.payload, e.waitingForOverlordConnectionTest = !1;
		},
		testScandManagerConnection: (e, t) => {
			e.waitingForScandManagerConnectionTest = !0, e.scandManagerConnectionTestResult = void 0;
		},
		showScandManagerConnectionTest: (e, t) => {
			e.scandManagerConnectionTestResult = t.payload, e.waitingForScandManagerConnectionTest = !1;
		},
		showConfigWindow: (e, t) => {},
		testCli: (e, t) => {
			e.waitingForCliTest = !0, e.cliTestResult = void 0;
		},
		showCliTest: (e, t) => {
			e.cliTestResult = t.payload, e.waitingForCliTest = !1;
		},
		downloadCli: (e, t) => {
			e.waitingForCliDownload = !0, e.cliTestResult = void 0, e.cliDownloadError = void 0;
		},
		showCliDownload: (e, t) => {
			e.cliTestResult = void 0, t.payload.completed ? (e.waitingForCliDownload = !1, e.cliDownloadPercent = 0, t.payload.success ? (e.data.cli.location = t.payload.location, e.data.cli.found = !0) : (e.data.cli.found = !1, e.cliDownloadError = t.payload.error)) : (e.waitingForCliDownload = !0, e.cliDownloadPercent = t.payload.progress.percent);
		},
		openLink: (e, t) => {}
	}
});
function i(e) {
	try {
		let t = new URL(e).hostname;
		return t.toLowerCase().startsWith("platform") ? t.replace(/^platform/i, "services") + ":8001" : "services." + t + ":8001";
	} catch {
		return "";
	}
}
var { loadConfig: a, saveConfig: o, showConfigWindow: s, setError: c, clearError: l, testPlatformConnection: u, showPlatformConnectionTest: d, testOverlordConnection: f, showOverlordConnectionTest: p, testScandManagerConnection: m, showScandManagerConnectionTest: h, addInsecureSslHostname: g, removeInsecureSslHostname: _, testCli: v, showCliTest: y, downloadCli: b, showCliDownload: x, openLink: S } = r.actions, C = n, w = t, T = r.reducer;
//#endregion
export { u as _, S as a, w as b, c, p as d, d as f, f as g, v as h, a as i, x as l, T as m, l as n, _ as o, h as p, b as r, o as s, g as t, y as u, m as v, C as y };
