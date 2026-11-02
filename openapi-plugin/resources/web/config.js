import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, Dt as n, Et as r, Ft as i, H as a, It as o, M as s, Ot as c, Pt as l, Rt as ee, U as u, Vt as te, gn as ne, pn as re, q as ie, un as ae, v as oe, vn as se } from "./icons.ODuw_IC-.js";
import { c as ce, h as le, l as ue, t as d } from "./platform-api.vCfjM7pj.js";
import { a as f, c as de, l as p, o as fe } from "./index.esm.BTfY3KsF.js";
import { n as m } from "./Select.Brxu2tMx.js";
import { n as h, t as g } from "./Banner.CHX-WOk6.js";
import { _ as pe, a as me, b as _, c as he, d as ge, f as _e, g as ve, h as ye, i as be, l as xe, m as Se, n as Ce, p as we, r as Te, s as Ee, u as De, v as Oe, y as v } from "./slice.DxJ7a1u-.js";
import { a as ke, i as Ae, n as je, o as Me, r as Ne, s as Pe, t as Fe } from "./listener.DcDfArA_.js";
import { t as Ie } from "./ProgressButton.C7qCjPbJ.js";
import { n as Le, t as Re } from "./dist.Brt3vwZ_.js";
import { t as ze } from "./SearchSidebar.DT4o8uWj.js";
import { c as Be, d as y, f as Ve, i as b, l as x, m as He, n as S, o as Ue, p as C, s as w, t as We, u as T } from "./Textarea.CAL1_A19.js";
import { n as Ge, t as Ke } from "./Input.CCcWQ-fu.js";
import { t as qe } from "./webapp-client.Ck_OlnGz.js";
import { n as Je, r as Ye, t as Xe } from "./listener.DTgcTxr9.js";
//#region src/components/form/ValidProgressButton.tsx
var E = /* @__PURE__ */ e(se(), 1), Ze = ne(), D = n();
function O({ label: e, waiting: t, onClick: n }) {
	let { formState: { isValid: r } } = de();
	return /* @__PURE__ */ (0, D.jsx)(Ie, {
		disabled: !r,
		label: e,
		waiting: t,
		onClick: n
	});
}
//#endregion
//#region src/app/config/ConnectionTestBanner.tsx
function k({ result: e }) {
	return e === void 0 ? null : e.success ? /* @__PURE__ */ (0, D.jsx)(g, { message: "Successfully connected" }) : /* @__PURE__ */ (0, D.jsx)(h, {
		message: "Failed to connect",
		children: e.message
	});
}
//#endregion
//#region src/app/config/layout.tsx
var A = t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, j = t.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  > button {
    height: 35px;
    align-self: flex-start;
  }
  > div:last-child {
    flex: 1;
    align-self: stretch;
  }
`, M = t.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
//#endregion
//#region src/new-components/fields/RadioGroup.tsx
function Qe({ name: e, options: t }) {
	let { field: n } = f({ name: e });
	return /* @__PURE__ */ (0, D.jsx)(le, {
		value: n.value,
		options: t,
		onValueChange: (e) => n.onChange(e)
	});
}
//#endregion
//#region ../common/dist/esm/endpoints.js
function $e(e) {
	return e ? {
		freemiumdUrl: "https://stateless.dev.42crunch.com",
		cliFreemiumdHost: "stateless.dev.42crunch.com:443",
		kdbUrl: "https://platform.42crunch.com/kdb/audit-with-yaml.json",
		upgradeUrl: "https://42crunch.com/developer-pricing",
		stripeBillingUrl: "https://billing.stripe.com/p/login/test_cN28zp7RgbGp3qobII"
	} : {
		freemiumdUrl: "https://stateless.42crunch.com",
		cliFreemiumdHost: "stateless.42crunch.com:443",
		kdbUrl: "https://platform.42crunch.com/kdb/audit-with-yaml.json",
		upgradeUrl: "https://42crunch.com/upgrade_subscription",
		stripeBillingUrl: "https://billing.stripe.com/p/login/3csaGd9xzf5k7n2aEE"
	};
}
//#endregion
//#region src/features/http-client/freemiumd-api.ts
var N = ce({
	reducerPath: "freemiumdApi",
	baseQuery: et,
	endpoints: (e) => ({ getSubscription: e.query({ query: (e) => ({ path: `subscription?token=${encodeURIComponent(e)}` }) }) })
});
async function et(e, { signal: t, dispatch: n, getState: r }, i) {
	let { freemiumdUrl: a } = $e(r().config.data.internalUseDevEndpoints), o = `${a}/api/v1/anon/${e.path}`, [s, c] = await qe({ https: { rejectUnauthorized: !0 } }, (e, t, r, i) => n(Je({
		id: e,
		request: t,
		config: r,
		mtlsConfig: i
	})))({
		url: o,
		method: "get",
		headers: { Accept: "application/json" }
	}, void 0);
	return c === void 0 ? s.statusCode === 200 ? { data: JSON.parse(s.body) } : { error: {
		message: s.body,
		code: s.statusCode
	} } : { error: c };
}
var { useGetSubscriptionQuery: tt } = N;
//#endregion
//#region src/app/config/ProgressBar.tsx
function P({ progress: e, label: t }) {
	let n = Math.ceil(e * 100), r = t === void 0 ? `${n}%` : t;
	return /* @__PURE__ */ (0, D.jsxs)(nt, { children: [/* @__PURE__ */ (0, D.jsx)(rt, { children: r }), /* @__PURE__ */ (0, D.jsx)(it, {
		$progress: e,
		children: r
	})] });
}
var nt = t.div`
  position: relative;
  display: flex;
  height: 26px;
  background-color: var(${c.computedTwo});
  border: 1px solid var(${c.buttonBorder});
  border-radius: 6px;
  overflow: hidden;
`, rt = t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(${c.computedOne});
  color: var(${c.foreground});
  border-radius: 6px;
`, it = t.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(${c.buttonForeground});
  background-color: var(${c.buttonBackground});
  clip-path: inset(0 ${({ $progress: e }) => 100 - e * 100}% 0 0);
  transition: clip-path 0.3s linear;
`, at = o(), ot = {
	theme: i,
	config: Se,
	client: Ye,
	[d.reducerPath]: d.reducer,
	[N.reducerPath]: N.reducer
}, st = {
	changeTheme: l,
	loadConfig: be,
	showPlatformConnectionTest: _e,
	showOverlordConnectionTest: ge,
	showScandManagerConnectionTest: we,
	showCliTest: De,
	showCliDownload: xe,
	showHttpError: () => null,
	showHttpResponse: () => null
}, ct = (e, t) => {
	let n = ee({
		reducer: ot,
		middleware: (t) => t().prepend(e.middleware).concat(at.logger, d.middleware, N.middleware),
		preloadedState: { theme: t }
	});
	return ue(n.dispatch), n;
}, lt = () => re();
//#endregion
//#region src/app/config/Subscription.tsx
function ut({ token: e, useDevEndpoints: t }) {
	let { data: n, error: r, isLoading: i } = tt(e.trim(), {
		refetchOnFocus: !0,
		pollingInterval: 6e5
	}), a = lt(), { upgradeUrl: o, stripeBillingUrl: s } = $e(t);
	if (r) return /* @__PURE__ */ (0, D.jsx)(F, { children: /* @__PURE__ */ (0, D.jsxs)(h, {
		message: "Failed to load subscription status",
		children: [
			r.code,
			" ",
			r.message
		]
	}) });
	if (i || n === void 0) return /* @__PURE__ */ (0, D.jsx)(F, { children: /* @__PURE__ */ (0, D.jsx)(g, { message: "Loading subscription status..." }) });
	let c = n.monthlyOp + n.bonusOp, l = n.currentAuditUsage + n.currentScanUsage + n.currentGraphqlAuditUsage + n.currentGraphqlScanUsage, ee = c > 0 ? 1 - l / c : 0, u = n?.subscriptionKind.toLowerCase().includes("trial") || n?.subscriptionKind === "free";
	return /* @__PURE__ */ (0, D.jsxs)(F, { children: [
		/* @__PURE__ */ (0, D.jsxs)(z, { children: [
			/* @__PURE__ */ (0, D.jsxs)(I, { children: ["Subscription type: ", n?.subscriptionKind] }),
			/* @__PURE__ */ (0, D.jsx)(L, { children: "Upgrade or manage your subscription plan" }),
			/* @__PURE__ */ (0, D.jsxs)(R, { children: [u && /* @__PURE__ */ (0, D.jsx)(ie, {
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), a(me(`${o}?email=${encodeURIComponent(n.userEmail)}`));
				},
				children: "Upgrade"
			}), !u && /* @__PURE__ */ (0, D.jsx)(ie, {
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), a(me(`${s}?prefilled_email=${encodeURIComponent(n.userEmail)}`));
				},
				children: "Manage"
			})] })
		] }),
		/* @__PURE__ */ (0, D.jsxs)(z, { children: [/* @__PURE__ */ (0, D.jsx)(I, { children: "Registered email" }), /* @__PURE__ */ (0, D.jsx)(R, { children: n.userEmail })] }),
		/* @__PURE__ */ (0, D.jsxs)(z, { children: [
			/* @__PURE__ */ (0, D.jsx)(I, { children: "Subscription date" }),
			/* @__PURE__ */ (0, D.jsx)(L, { children: "Date when your monthly allowance started" }),
			/* @__PURE__ */ (0, D.jsx)(R, { children: n.periodStart })
		] }),
		!u && /* @__PURE__ */ (0, D.jsxs)(z, { children: [
			/* @__PURE__ */ (0, D.jsx)(I, { children: "Usage" }),
			/* @__PURE__ */ (0, D.jsx)(L, { children: "Monthly allowance left" }),
			/* @__PURE__ */ (0, D.jsxs)(R, { children: [
				c - l,
				" / ",
				c
			] }),
			/* @__PURE__ */ (0, D.jsx)(P, {
				label: "",
				progress: ee
			})
		] }),
		u && c <= 0 && /* @__PURE__ */ (0, D.jsx)(z, { children: /* @__PURE__ */ (0, D.jsx)(I, { children: "This trial subscription is now finished." }) })
	] });
}
var F = t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 560px;
`, I = t.div`
  font-weight: 700;
`, L = t.div`
  font-weight: 400;
  font-size: 90%;
`, R = t.div`
  font-weight: 600;
  font-size: 110%;
  > div {
    font-size: 80%;
  }
`, z = t.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid var(${c.border});
  > ${I} {
    grid-column: 1;
    grid-row: 1;
  }
  > ${L} {
    grid-column: 1;
    grid-row: 2;
  }
  > ${R} {
    grid-column: 2;
    grid-row: span 2;
    align-self: center;
    justify-self: end;
  }
  > :nth-child(4) {
    grid-column: span 2;
    grid-row: 3;
  }
`;
//#endregion
//#region src/app/config/screen/platform-connection.tsx
function dt() {
	let e = v(), { platformConnectionTestResult: t, waitingForPlatformConnectionTest: n, data: { internalUseDevEndpoints: r } } = _((e) => e.config), i = p({ name: "platformAuthType" }), a = p({ name: "anondToken" });
	return /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(M, { children: "Connection to 42Crunch Platform" }), /* @__PURE__ */ (0, D.jsxs)(A, { children: [
		/* @__PURE__ */ (0, D.jsx)(Qe, {
			name: "platformAuthType",
			options: [{
				value: "anond-token",
				label: "Freemium token"
			}, {
				value: "api-token",
				label: "Platform IDE token"
			}]
		}),
		i === "anond-token" && /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(We, {
			label: "Freemium token",
			name: "anondToken"
		}), a !== "" && /* @__PURE__ */ (0, D.jsx)(ut, {
			token: a,
			useDevEndpoints: r
		})] }),
		i === "api-token" && /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [
			/* @__PURE__ */ (0, D.jsx)(S, {
				label: "Platform URL",
				name: "platformUrl"
			}),
			/* @__PURE__ */ (0, D.jsx)(S, {
				label: "IDE token",
				name: "platformApiToken",
				password: !0
			}),
			/* @__PURE__ */ (0, D.jsxs)(j, { children: [/* @__PURE__ */ (0, D.jsx)(O, {
				label: "Test connection",
				waiting: n,
				onClick: (t) => {
					e(pe()), t.preventDefault(), t.stopPropagation();
				}
			}), /* @__PURE__ */ (0, D.jsx)(k, { result: t })] })
		] })
	] })] });
}
var B = {
	id: "platform-connection",
	label: "Connection",
	schema: T({
		platformAuthType: b(["anond-token", "api-token"]),
		platformUrl: y().url().startsWith("https://").refine((e) => {
			try {
				let t = new URL(e);
				return t.pathname === "/" || t.pathname === "";
			} catch {
				return !1;
			}
		}, { message: "Must be a valid HTTPS URL with empty path" }),
		anondToken: y().trim(),
		platformApiToken: y().regex(/^(ide_|api_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, "Token is invalid").or(x(""))
	}),
	form: dt
};
//#endregion
//#region src/app/config/screen/platform-services.tsx
function ft() {
	let e = v(), { overlordConnectionTestResult: t, waitingForOverlordConnectionTest: n } = _((e) => e.config), r = p({ name: "platformServices.source" });
	return /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(M, { children: "42Crunch Platform services" }), /* @__PURE__ */ (0, D.jsxs)(A, { children: [
		/* @__PURE__ */ (0, D.jsx)(m, {
			label: "Platform services",
			name: "platformServices.source",
			options: [{
				value: "auto",
				label: "Detect the host automatically"
			}, {
				value: "manual",
				label: "Specify the host manually"
			}]
		}),
		r == "manual" && /* @__PURE__ */ (0, D.jsx)(S, {
			label: "Host",
			name: "platformServices.manual"
		}),
		r == "auto" && /* @__PURE__ */ (0, D.jsx)(S, {
			label: "Host (automatic, read-only)",
			name: "platformServices.auto",
			disabled: !0
		}),
		/* @__PURE__ */ (0, D.jsxs)(j, { children: [/* @__PURE__ */ (0, D.jsx)(O, {
			label: "Test connection",
			waiting: n,
			onClick: (t) => {
				e(ve()), t.preventDefault(), t.stopPropagation();
			}
		}), /* @__PURE__ */ (0, D.jsx)(k, { result: t })] })
	] })] });
}
var V = {
	id: "platform-services",
	label: "Services",
	schema: T({ platformServices: T({
		source: b(["auto", "manual"]),
		manual: y(),
		auto: C()
	}) }),
	form: ft
}, pt = "^[\\w _.\\/:-]{1,2048}$", mt = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";
//#endregion
//#region src/app/config/screen/temporary-collection.tsx
function ht() {
	return /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [
		/* @__PURE__ */ (0, D.jsx)(M, { children: "Temporary Collection Name" }),
		/* @__PURE__ */ (0, D.jsx)("p", { children: "The name of the collection for temporary APIs. Make sure that the name matches the collection naming pattern defined in your organization." }),
		/* @__PURE__ */ (0, D.jsx)("p", { children: "WARNING: Do not use existing collection name. This collection will be used for temporary APIs, and all existing APIs in this collection will be deleted." }),
		/* @__PURE__ */ (0, D.jsx)(A, { children: /* @__PURE__ */ (0, D.jsx)(S, {
			label: "Collection Name",
			name: "platformTemporaryCollectionName"
		}) })
	] });
}
function gt(e) {
	let t = e || {
		pattern: ".*",
		example: "",
		description: "Any string"
	};
	return {
		id: "temporary-collection",
		label: "Temporary Collection",
		schema: T({ platformTemporaryCollectionName: Be(y().regex(new RegExp(pt), `Collection name is invalid, must match default pattern: ${pt}`), y().regex(new RegExp(t.pattern), `Collection name does not match your origanization naming convention. Example of a valid name: ${t.example}`)) }),
		form: ht
	};
}
//#endregion
//#region src/app/config/screen/mandatory-tags.tsx
function _t() {
	return /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [
		/* @__PURE__ */ (0, D.jsx)(M, { children: "Mandatory Tags" }),
		/* @__PURE__ */ (0, D.jsx)("p", { children: "42Crunch platform mandatory tags, these tags will be added to every API created on the platform." }),
		/* @__PURE__ */ (0, D.jsxs)("p", { children: [
			"Tags are specified in the format ",
			/* @__PURE__ */ (0, D.jsx)("code", { children: "category:tag" }),
			", and multiple tags are separated by spaces or commas."
		] }),
		/* @__PURE__ */ (0, D.jsx)(A, { children: /* @__PURE__ */ (0, D.jsx)(We, {
			label: "Tags",
			name: "platformMandatoryTags"
		}) })
	] });
}
var vt = T({ platformMandatoryTags: y().regex(new RegExp(mt), "Tags are invalid, must be a comma or space separated list of key:value pairs, e.g. env:dev app:myapp") });
function yt() {
	return {
		id: "mandatory-tags",
		label: "Mandatory Tags",
		schema: vt,
		form: _t
	};
}
//#endregion
//#region src/app/config/CliVersionBanner.tsx
function bt({ result: e }) {
	return e === void 0 ? null : e.success ? /* @__PURE__ */ (0, D.jsx)(g, { message: e.version }) : /* @__PURE__ */ (0, D.jsx)(h, {
		message: "Failed",
		children: e.message
	});
}
//#endregion
//#region src/app/config/screen/runtime-binary.tsx
function xt() {
	let e = v(), { waitingForCliTest: t, cliTestResult: n, waitingForCliDownload: r, cliDownloadPercent: i, cliDownloadError: a, data: { cli: o } } = _((e) => e.config);
	return /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(M, { children: "Configuration for 42Crunch Binary runtime" }), /* @__PURE__ */ (0, D.jsxs)(A, { children: [
		/* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(S, {
			label: "Download URL",
			name: "repository"
		}), /* @__PURE__ */ (0, D.jsx)(S, {
			label: "Custom binary location (optional, uses default directory if empty)",
			name: "cliDirectoryOverride"
		})] }),
		(!o.found || n?.success === !1 || r) && /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsxs)(j, { children: [/* @__PURE__ */ (0, D.jsx)(O, {
			label: "Download",
			waiting: r,
			onClick: (t) => {
				e(Te()), t.preventDefault(), t.stopPropagation();
			}
		}), r && /* @__PURE__ */ (0, D.jsx)(P, { progress: i })] }), /* @__PURE__ */ (0, D.jsx)(g, { message: `Download 42Crunch API Security Testing Binary, the binary was not found in ${o.location}` })] }),
		a !== void 0 && /* @__PURE__ */ (0, D.jsx)(h, { message: a }),
		o.found && /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(g, { message: `Using 42Crunch API Security Testing Binary in ${o.location}` }), /* @__PURE__ */ (0, D.jsxs)(j, { children: [/* @__PURE__ */ (0, D.jsx)(O, {
			label: "Check",
			waiting: t,
			onClick: (t) => {
				e(ye()), t.preventDefault(), t.stopPropagation();
			}
		}), /* @__PURE__ */ (0, D.jsx)(bt, { result: n })] })] })
	] })] });
}
var H = {
	id: "runtime-binary",
	label: "42Crunch Binary",
	schema: T({
		repository: y().url(),
		cliDirectoryOverride: Ve([x(""), y().regex(/^(\/.+|[A-Za-z]:\\.+)$/, { message: "Must be an absolute path (e.g. /home/username/42crunch-cli or C:\\Users\\username\\42crunch-cli)" })])
	}),
	form: xt
};
//#endregion
//#region src/app/config/screen/runtime-scand-manager.tsx
function St() {
	let e = v(), { scandManagerConnectionTestResult: t, waitingForScandManagerConnectionTest: n } = _((e) => e.config), r = p({ name: "scandManager.auth" });
	return /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(M, { children: "Configuration for Scand Manager runtime" }), /* @__PURE__ */ (0, D.jsx)(A, { children: /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [
		/* @__PURE__ */ (0, D.jsx)(S, {
			label: "Scand manager URL",
			name: "scandManager.url"
		}),
		/* @__PURE__ */ (0, D.jsx)(m, {
			label: "Authentication method",
			name: "scandManager.auth",
			options: [{
				value: "none",
				label: "None"
			}, {
				value: "header",
				label: "HTTP header authentication"
			}]
		}),
		r === "header" && /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(S, {
			label: "Header name",
			name: "scandManager.header.name"
		}), /* @__PURE__ */ (0, D.jsx)(S, {
			label: "Header value",
			name: "scandManager.header.value"
		})] }),
		/* @__PURE__ */ (0, D.jsx)(S, {
			label: "Docker image for 'scand-agent'",
			name: "scanImage"
		}),
		/* @__PURE__ */ (0, D.jsx)(S, {
			label: "Maximum amount of time to check on scan completion (seconds)",
			name: "scandManager.timeout"
		}),
		/* @__PURE__ */ (0, D.jsx)("p", { children: "Environment variables for proxy configuration" }),
		/* @__PURE__ */ (0, D.jsx)(S, {
			label: "HTTP_PROXY",
			name: "scandManager.httpProxy"
		}),
		/* @__PURE__ */ (0, D.jsx)(S, {
			label: "HTTPS_PROXY",
			name: "scandManager.httpsProxy"
		}),
		/* @__PURE__ */ (0, D.jsx)(S, {
			label: "HTTP_PROXY_API",
			name: "scandManager.httpProxyApi"
		}),
		/* @__PURE__ */ (0, D.jsx)(S, {
			label: "HTTPS_PROXY_API",
			name: "scandManager.httpsProxyApi"
		}),
		/* @__PURE__ */ (0, D.jsxs)(j, { children: [/* @__PURE__ */ (0, D.jsx)(O, {
			label: "Test connection",
			waiting: n,
			onClick: (t) => {
				e(Oe()), t.preventDefault(), t.stopPropagation();
			}
		}), /* @__PURE__ */ (0, D.jsx)(k, { result: t })] })
	] }) })] });
}
var U = {
	id: "runtime-scand-manager",
	label: "Scand Manager",
	schema: T({ scandManager: T({
		timeout: Ge().int().min(1).max(86400),
		httpProxy: y().url().optional().or(x("")),
		httpsProxy: y().url().optional().or(x("")),
		httpProxyApi: y().url().optional().or(x("")),
		httpsProxyApi: y().url().optional().or(x(""))
	}).catchall(C()) }),
	form: St
};
//#endregion
//#region src/components/Checkbox.tsx
function W({ name: e, label: t }) {
	let n = (0, E.useId)(), { field: r } = f({ name: e });
	return /* @__PURE__ */ (0, D.jsxs)(Ct, { children: [/* @__PURE__ */ (0, D.jsx)(wt, {
		checked: r.value,
		onCheckedChange: (e) => r.onChange(e),
		id: n,
		children: /* @__PURE__ */ (0, D.jsx)(Tt, { children: /* @__PURE__ */ (0, D.jsx)(s, {}) })
	}), /* @__PURE__ */ (0, D.jsx)("label", {
		htmlFor: n,
		children: t
	})] });
}
var Ct = t.div`
  display: flex;
  gap: 8px;
  align-items: center;
`, wt = t(Re)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${c.checkboxBackground});
  border-radius: 4px;
  border-color: var(${c.checkboxBorder});
  border-width: 1px;
  border-style: solid;
`, Tt = t(Le)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(${c.checkboxForeground});
`;
//#endregion
//#region src/app/config/screen/runtime-docker.tsx
function Et() {
	return /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(M, { children: "Configuration for Docker runtime" }), /* @__PURE__ */ (0, D.jsxs)(A, { children: [
		/* @__PURE__ */ (0, D.jsx)(S, {
			label: "Docker image for 'scand-agent'",
			name: "scanImage"
		}),
		/* @__PURE__ */ (0, D.jsx)(W, {
			name: "docker.replaceLocalhost",
			label: "Replace \"localhost\" hostname with \"host.docker.internal\" (Windows and Mac only)"
		}),
		/* @__PURE__ */ (0, D.jsx)(W, {
			name: "docker.useHostNetwork",
			label: "Use \"host\" network (Linux only)"
		})
	] })] });
}
var G = {
	id: "runtime-docker",
	label: "Docker",
	schema: T({
		scanImage: y(),
		docker: T({
			replaceLocalhost: w(),
			useHostNetwork: w()
		})
	}),
	form: Et
};
//#endregion
//#region src/app/config/screen/audit-runtime.tsx
function Dt() {
	let e = p({ name: "platformAuthType" });
	return /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(M, { children: "Runtime for API Audit" }), /* @__PURE__ */ (0, D.jsxs)(A, { children: [e === "api-token" && /* @__PURE__ */ (0, D.jsx)(m, {
		label: "Runtime",
		name: "auditRuntime",
		options: [{
			value: "platform",
			label: "Platform"
		}, {
			value: "cli",
			label: "42Crunch API Security Testing Binary"
		}]
	}), e === "anond-token" && /* @__PURE__ */ (0, D.jsx)(g, { message: "API Audit runtime is configured to use 42Crunch API Security Testing Binary" })] })] });
}
var K = {
	id: "audit-runtime",
	label: "API Audit runtime",
	schema: T({ auditRuntime: b(["platform", "cli"]) }),
	form: Dt
};
//#endregion
//#region src/app/config/screen/scan-runtime.tsx
function Ot() {
	let e = p({ name: "platformAuthType" }), t = p({ name: "scanRuntime" });
	return /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(M, { children: "Runtime for API Scan" }), /* @__PURE__ */ (0, D.jsxs)(A, { children: [
		e === "api-token" && /* @__PURE__ */ (0, D.jsx)(m, {
			label: "Runtime",
			name: "scanRuntime",
			options: [
				{
					value: "docker",
					label: "Docker"
				},
				{
					value: "scand-manager",
					label: "Scand manager"
				},
				{
					value: "cli",
					label: "42Crunch API Security Testing Binary"
				}
			]
		}),
		e === "anond-token" && /* @__PURE__ */ (0, D.jsx)(g, { message: "API Scan runtime is configured to use 42Crunch API Security Testing Binary" }),
		(t === "docker" || t === "cli") && /* @__PURE__ */ (0, D.jsxs)(A, { children: [/* @__PURE__ */ (0, D.jsx)(Ke, {
			label: "API proxy URL",
			name: "scanProxy",
			description: "The proxy URL for target API calls during the scan."
		}), " "] })
	] })] });
}
var q = {
	id: "scan-runtime",
	label: "API Scan runtime",
	schema: T({
		scanRuntime: b([
			"docker",
			"scand-manager",
			"cli"
		]),
		scanProxy: y().url().optional().or(x(""))
	}),
	form: Ot
}, J = {
	host: "",
	header: "Authorization",
	prefix: "Bearer",
	token: "Token"
};
function Y(e) {
	let { name: t, children: n, ...r } = e, { field: i } = f({ name: t });
	return /* @__PURE__ */ (0, D.jsx)(Rt, {
		...r,
		...i,
		children: n
	});
}
function kt({ name: e }) {
	let t = p({ name: e });
	return /* @__PURE__ */ (0, D.jsx)(Lt, { children: t });
}
function At({ name: e }) {
	let [t, n] = (0, E.useState)(!1);
	return /* @__PURE__ */ (0, D.jsxs)(It, { children: [
		/* @__PURE__ */ (0, D.jsx)(X, { children: /* @__PURE__ */ (0, D.jsx)(kt, { name: `${e}.host` }) }),
		/* @__PURE__ */ (0, D.jsx)(X, { children: /* @__PURE__ */ (0, D.jsx)(Y, {
			type: "text",
			name: `${e}.header`,
			placeholder: J.header
		}) }),
		/* @__PURE__ */ (0, D.jsx)(X, { children: /* @__PURE__ */ (0, D.jsx)(Y, {
			type: "text",
			name: `${e}.prefix`,
			placeholder: J.prefix
		}) }),
		/* @__PURE__ */ (0, D.jsxs)(zt, { children: [/* @__PURE__ */ (0, D.jsx)(Y, {
			type: t ? "text" : "password",
			name: `${e}.token`,
			placeholder: J.token
		}), /* @__PURE__ */ (0, D.jsx)(Bt, {
			type: "button",
			title: `${t ? "Hide" : "Reveal"} token`,
			onClick: () => n(!t),
			children: /* @__PURE__ */ (0, D.jsx)(oe, {})
		})] })
	] });
}
function jt() {
	let { fields: e } = fe({ name: "approvedHosts" });
	return /* @__PURE__ */ (0, D.jsxs)(Mt, { children: [/* @__PURE__ */ (0, D.jsx)("p", { children: "Configure authentication for the hosts approved for external reference resolution" }), /* @__PURE__ */ (0, D.jsxs)(Nt, { children: [/* @__PURE__ */ (0, D.jsxs)(Pt, { children: [
		/* @__PURE__ */ (0, D.jsx)("div", {
			className: "openapi-external-refs-host",
			children: "Host"
		}),
		/* @__PURE__ */ (0, D.jsx)("div", {
			className: "openapi-external-refs-header",
			children: "Header"
		}),
		/* @__PURE__ */ (0, D.jsx)("div", {
			className: "openapi-external-refs-prefix",
			children: "Prefix"
		}),
		/* @__PURE__ */ (0, D.jsx)("div", {
			className: "openapi-external-refs-token",
			children: "Token"
		})
	] }), /* @__PURE__ */ (0, D.jsx)(Ft, { children: e.map((e, t) => /* @__PURE__ */ (0, D.jsx)(At, { name: `approvedHosts.${t}` }, e.id)) })] })] });
}
var Mt = t.div``, Nt = t.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 0.375fr 0.375fr 0.75fr;
`, Pt = t.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${c.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Ft = t.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${c.border});
  }
`, It = t.div`
  display: contents;
`, X = t.div`
  padding: 4px 8px;
`, Lt = t.span`
  line-height: 40px;
`, Rt = t.input`
  height: 40px;
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${c.foreground});
  &::placeholder {
    color: var(${c.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, zt = t.div`
  padding: 4px 8px;
  display: flex;
  > input {
    flex: 1;
    margin-right: 4px;
  }
`, Bt = t.button`
  cursor: pointer;
  background: transparent;
  color: var(${c.foreground});
  border: 1px solid var(${c.buttonBorder});
  padding: 6px 0px;
  border-radius: 2px;
  width: 20px;
  &:focus {
    outline: 1px solid var(${c.focusBorder});
  }
  > svg {
    height: 14px;
    width: 14px;
    min-width: 14px;
    fill: var(${c.foreground});
  }
`, Z = {
	id: "openapi-external-refs",
	label: "External References",
	schema: T({ approvedHosts: Ue(C()) }),
	form: jt
};
//#endregion
//#region src/app/config/screen/internal-settings.tsx
function Vt() {
	return /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(M, { children: "Internal settings" }), /* @__PURE__ */ (0, D.jsxs)(A, { children: [
		/* @__PURE__ */ (0, D.jsx)(W, {
			label: "Use development endpoints",
			name: "internalUseDevEndpoints"
		}),
		/* @__PURE__ */ (0, D.jsx)(W, {
			label: "Disable log redaction",
			name: "internalDisableLogRedaction"
		}),
		/* @__PURE__ */ (0, D.jsx)(W, {
			label: "Register 42Crunch MCP server",
			name: "internalRegisterMcp"
		}),
		/* @__PURE__ */ (0, D.jsxs)("p", { children: [
			"Please note: The binary for the mcp server must be manually copied in place and be called",
			" ",
			/* @__PURE__ */ (0, D.jsx)("code", { children: "42c-ast-mcp" }),
			" or ",
			/* @__PURE__ */ (0, D.jsx)("code", { children: "42c-ast-mcp.exe" })
		] })
	] })] });
}
var Q = {
	id: "internal-settings",
	label: "Internal settings",
	schema: T({
		internalUseDevEndpoints: w(),
		internalDisableLogRedaction: w(),
		internalRegisterMcp: w()
	}),
	form: Vt
};
//#endregion
//#region src/app/config/util.ts
function Ht(e) {
	let t = JSON.parse(JSON.stringify(e));
	return t.platformApiToken === void 0 && (t.platformApiToken = ""), t;
}
function Ut(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/app/config/Config.tsx
function Wt() {
	let e = v(), { ready: t, errors: n, data: r } = _((e) => e.config), i = yt(), a = gt(r.platformCollectionNamingConvention), o = (e) => r.host === "visual-studio" ? void 0 : e, s = [
		{
			id: "platform",
			title: "42Crunch Platform",
			items: [
				B,
				o(V),
				o(a),
				o(i),
				o(K),
				o(q)
			]
		},
		{
			id: "runtime",
			title: "Runtimes",
			items: [
				H,
				o(U),
				o(G)
			]
		},
		{
			id: "openapi",
			title: "OpenAPI",
			items: [o(Z)]
		}
	];
	r.internalFeatures && s.push({
		id: "internal-settings",
		title: "Internal",
		items: [Q]
	});
	let c = {
		[B.id]: B,
		[V.id]: V,
		[K.id]: K,
		[q.id]: q,
		[a.id]: a,
		[i.id]: i,
		[H.id]: H,
		[U.id]: U,
		[G.id]: G,
		[Z.id]: Z,
		[Q.id]: Q
	}, l = s.map((e) => ({
		...e,
		items: e.items.filter((e) => e !== void 0)
	})).filter((e) => e.items.length > 0);
	return (0, E.useEffect)(() => {
		let t = Ht(r);
		for (let n of Object.keys(c)) {
			let { success: r } = c[n].schema.safeParse(t);
			e(r ? Ce(n) : he({
				screen: n,
				error: "Validation errors, configuration is not being saved"
			}));
		}
	}, [r]), t ? /* @__PURE__ */ (0, D.jsx)(ze, {
		sections: l,
		errors: n,
		defaultSelection: {
			sectionId: "platform",
			itemId: "platform-connection"
		},
		render: (t) => {
			let { id: n, form: i, schema: a } = c[t.itemId];
			return /* @__PURE__ */ (0, D.jsxs)(He, {
				data: r,
				wrapFormData: Ht,
				unwrapFormData: Ut,
				saveData: (t) => e(Ee(t)),
				schema: a,
				children: [/* @__PURE__ */ (0, D.jsx)(i, {}), /* @__PURE__ */ (0, D.jsx)(Gt, { id: n })]
			});
		}
	}) : null;
}
function Gt({ id: e }) {
	let t = v(), { trigger: n, formState: { isValid: r } } = de();
	return (0, E.useEffect)(() => {
		n();
	}, [e]), (0, E.useEffect)(() => {
		t(r ? Ce(e) : he({
			screen: e,
			error: "Validation errors, configuration is not being saved"
		}));
	}, [e, r]), null;
}
//#endregion
//#region src/app/config/listener.ts
var Kt = te(), $ = Kt.startListening;
function qt(e) {
	let t = {
		saveConfig: Fe($, e),
		testOverlordConnection: ke($, e),
		testScandManagerConnection: Pe($, e),
		testPlatformConnection: Me($, e),
		testCli: Ae($, e),
		downloadCli: je($, e),
		openLink: Ne($, e),
		sendHttpRequest: Xe($, e)
	};
	return u(t), Kt;
}
//#endregion
//#region src/app/config/index.tsx
function Jt(e, t) {
	let n = ct(qt(e), t);
	(0, Ze.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, D.jsx)(E.StrictMode, { children: /* @__PURE__ */ (0, D.jsxs)(ae, {
		store: n,
		children: [/* @__PURE__ */ (0, D.jsx)(r, {}), /* @__PURE__ */ (0, D.jsx)(Wt, {})]
	}) })), window.addEventListener("message", a(n, st));
}
window.renderWebView = Jt;
//#endregion
