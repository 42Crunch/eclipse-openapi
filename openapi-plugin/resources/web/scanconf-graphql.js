import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, B as n, Dt as r, Ft as i, Gt as a, H as o, Ht as s, It as c, K as l, Nt as u, Ot as d, Pt as f, Rt as p, Tt as m, U as h, Vt as g, gn as ee, jt as _, l as te, mn as ne, pn as re, q as ie, r as ae, un as oe, vn as se, zt as v } from "./icons.ODuw_IC-.js";
import { n as ce, t as le } from "./listener.BUamXvcw.js";
import { n as ue, t as y } from "./Tabs.Dgbi5KB9.js";
import { c as de, l as fe, o as pe } from "./index.esm.BTfY3KsF.js";
import { n as me } from "./Select.Brxu2tMx.js";
import { C as he, E as ge, T as _e, t as ve, x as ye } from "./dist.CV32AYWZ.js";
import { C as be, S as xe, g as Se, v as Ce, w as we } from "./dist.CLG9kswM.js";
import { i as Te, m as Ee } from "./slice.DxJ7a1u-.js";
import { i as De, r as Oe, t as ke } from "./CollapsibleCard.DbRyUZR-.js";
import { c as Ae, n as je, t as Me } from "./variables.XZ1hoMms.js";
import { n as b } from "./SearchSidebar.DT4o8uWj.js";
import { a as Ne, d as x, f as S, l as C, m as w, n as T, u as E } from "./Textarea.CAL1_A19.js";
import { $ as D, Cn as O, F as Pe, Gt as k, H as Fe, Ht as Ie, I as Le, J as A, L as Re, Lt as j, M, N as ze, O as Be, Q as Ve, Rt as He, S as Ue, U as We, V as Ge, W as Ke, Y as qe, Z as Je, a as Ye, b as Xe, bn as Ze, c as Qe, ct as $e, d as et, dn as tt, dt as nt, et as rt, f as it, fn as at, h as ot, i as st, j as ct, lt, m as ut, n as dt, p as ft, q as N, r as pt, s as mt, st as ht, t as gt, tt as P, u as _t, un as vt, ut as yt, w as bt, x as F, y as I, yn as xt, z as St } from "./GeneralError.DSPlpJtR.js";
import { t as L } from "./Input.CCcWQ-fu.js";
import { t as Ct } from "./DescriptionTooltip.CPc6ZBTd.js";
import { r as wt, t as Tt } from "./listener.DTgcTxr9.js";
//#region src/app/scanconf-graphql/actions.ts
var R = /* @__PURE__ */ e(se(), 1), Et = ee(), z = v("scanconf/runScan"), Dt = v("scanconf/runFullScan"), Ot = v("scanconf/showScanconfOperation"), kt = v("scanconf/loadUpdatedScanconf"), B = v("scanconf/loadPlaybook"), At = v("http/sendHttpRequest"), jt = v("http/showHttpResponse"), Mt = v("http/showHttpError"), V = "ENV_API_TOKEN", Nt = s({
	name: "scanconf",
	initialState: {
		graphQl: "",
		playbook: {
			operations: {},
			requests: {},
			authenticationDetails: [{}],
			before: [],
			after: [],
			environments: {},
			authorizationTests: {}
		},
		servers: [],
		selectedCredentialGroup: 0
	},
	reducers: {
		saveScanconf: (e) => {},
		saveSettings: (e, { payload: t }) => {
			e.playbook.runtimeConfiguration = {
				...e.playbook.runtimeConfiguration,
				...t
			};
		},
		saveRequest: (e, { payload: { ref: t, stage: n } }) => {
			t.type === "operation" ? e.playbook.operations[t.id].request = n : e.playbook.requests && (e.playbook.requests[t.id] = n);
		},
		removeRequest: (e, { payload: t }) => {
			t.type === "request" && e.playbook.requests?.[t.id] !== void 0 && delete e.playbook.requests[t.id];
		},
		saveCredential: (e, { payload: { group: t, id: n, credential: r } }) => {
			let i = Object.keys(r.methods || {})[0];
			e.selectedSubcredential !== void 0 && r?.methods?.[e.selectedSubcredential] === void 0 && (e.selectedSubcredential = i), r.methods[r.default] === void 0 && (r.default = i);
			let a = e.playbook.authenticationDetails[t][n].name, o = e.playbook.authenticationDetails[t][n].methods[n].credential;
			e.playbook.authenticationDetails[t][n] = r;
			let s = o.replace("{{", "").replace("}}", ""), c = r.methods[n].credential, l = c.replace("{{", "").replace("}}", ""), u = e.playbook.customizations.requests.additionalHeaders;
			u[a] = c;
			let d = e.playbook?.environments?.default?.variables;
			d[l] = {
				from: "environment",
				name: "SCAN42C_" + V,
				required: !0
			}, delete d[s];
		},
		saveEnvironment: (e, { payload: { name: t, environment: n } }) => {
			e.playbook.environments[t] = n;
		},
		addCredential: (e, { payload: { credentialGroup: t, id: n, credential: r } }) => {
			e.playbook.authenticationDetails || (e.playbook.authenticationDetails = [{}]), e.playbook.authenticationDetails[t] === void 0 && (e.playbook.authenticationDetails[t] = {}), r.credentials = { [n]: {
				description: "",
				credential: "{{" + V + "}}"
			} }, e.playbook.authenticationDetails[t][n] = r, e.playbook.customizations.requests = { additionalHeaders: { [r.name]: "{{" + V + "}}" } }, "ENV_API_TOKEN" in e.playbook?.environments?.default?.variables || ((e.playbook?.environments?.default?.variables)[V] = {
				from: "environment",
				name: "SCAN42C_" + V,
				required: !0
			});
		},
		removeCredential: (e, { payload: { credentialGroup: t, id: n } }) => {
			delete e.playbook.authenticationDetails[t][n], e.selectedCredential = void 0, e.selectedSubcredential = void 0, delete e.playbook.customizations.requests, delete (e.playbook?.environments?.default?.variables)[V];
		},
		setSecurityProfile: (e, { payload: t }) => {
			e.playbook.securityProfile = t;
		},
		removeSecurityProfile: (e) => {
			e.playbook.securityProfile = void 0, e.selectedCredential === "mtls:profile" && (e.selectedCredential = void 0, e.selectedSubcredential = void 0);
		},
		selectCredential: (e, { payload: t }) => {
			e.selectedCredentialGroup = t.group, e.selectedCredential = t.credential;
		},
		selectSubcredential: (e, { payload: t }) => {
			e.selectedSubcredential = t;
		},
		addAuthorizationTest: (e, { payload: { id: t, test: n } }) => {
			e.playbook.authorizationTests[t] = n;
		},
		saveAuthorizationTest: (e, { payload: { id: t, test: n } }) => {
			e.playbook.authorizationTests[t] = n;
		},
		removeAuthorizationTest: (e, { payload: { id: t } }) => {
			delete e.playbook.authorizationTests[t], e.selectedAuthorizationTest = Object.keys(e.playbook.authorizationTests)?.[0];
		},
		selectAuthorizationTest: (e, { payload: { id: t } }) => {
			e.selectedAuthorizationTest = t;
		},
		saveOperationReference: (e, { payload: { location: t, reference: n } }) => {
			k(e.playbook, t)[t.stageIndex] = n;
		},
		addStage: (e, { payload: { container: t, stage: n } }) => {
			k(e.playbook, t).push(n);
		},
		moveStage: (e, { payload: { location: t, to: n } }) => {
			Ie(k(e.playbook, t), t.stageIndex, n);
		},
		removeStage: (e, { payload: t }) => {
			k(e.playbook, t).splice(t.stageIndex, 1);
		},
		updateOperationAuthorizationTests: (e, { payload: { operationId: t, authorizationTests: n } }) => {
			e.playbook.operations[t].authorizationTests = n;
		},
		customizeOperation: (e, { payload: t }) => {
			e.playbook.operations[t].customized = !0;
		},
		removeCustomizationForOperation: (e, { payload: t }) => {
			e.playbook.operations[t].customTests = void 0, e.playbook.operations[t].authorizationTests = [], e.playbook.operations[t].before = [], e.playbook.operations[t].after = [], e.playbook.operations[t].scenarios = [{
				key: "happy.path",
				requests: [{
					fuzzing: !0,
					ref: {
						type: "operation",
						id: t
					}
				}],
				fuzzing: !0
			}], e.playbook.operations[t].customized = !1;
		},
		createVariable: (e, { payload: { name: t, location: n, jsonPointer: r, ref: i, statusCode: a } }) => {
			let o = i.type === "operation" ? e.playbook.operations[i.id].request : e.playbook.requests[i.id], s = ve(a), c = o.responses[a] ? a : s !== void 0 && o.responses[s] ? s : "default";
			o.responses[c] === void 0 && (o.responses[c] = {
				variableAssignments: {},
				expectations: c
			}), o.responses[c].variableAssignments[t] = {
				from: n,
				in: "body",
				contentType: "json",
				path: {
					type: "jsonPointer",
					value: r
				}
			};
		}
	},
	extraReducers: (e) => {
		e.addCase(B, (e, { payload: { graphQl: t, playbook: n } }) => {
			e.graphQl = t, e.playbook = n, e.servers = [], e.selectedCredentialGroup = 0, e.selectedCredential = Object.keys(n?.authenticationDetails?.[0] || {})?.[0], e.selectedAuthorizationTest = Object.keys(n?.authorizationTests || {})?.[0];
		});
	}
}), { saveSettings: Pt, saveEnvironment: Ft, saveScanconf: It, addCredential: H, removeCredential: U, setSecurityProfile: W, removeSecurityProfile: Lt, addStage: Rt, moveStage: zt, removeStage: Bt, saveOperationReference: Vt, saveCredential: G, selectCredential: K, selectSubcredential: Ht, addAuthorizationTest: Ut, saveAuthorizationTest: Wt, removeAuthorizationTest: Gt, selectAuthorizationTest: Kt, saveRequest: q, removeRequest: qt, updateOperationAuthorizationTests: Jt, customizeOperation: Yt, removeCustomizationForOperation: Xt, createVariable: Zt } = Nt.actions, Qt = Nt.reducer, $t = c(), en = s({
	name: "auth",
	initialState: {
		mockCurrent: { auth: [] },
		mockResult: [],
		tryCurrent: { auth: [] },
		tryResult: []
	},
	reducers: {
		startTryAuthentication: (e, { payload: t }) => {},
		resetTryAuthentication: (e) => {
			e.tryCurrent = { auth: [] }, e.tryResult = [];
		},
		addTryAuthenticationStep: (e, { payload: t }) => {},
		resetMockAuthRequestsExecution: (e) => {
			e.mockCurrent = { auth: [] }, e.mockResult = [];
		},
		addMockAuthRequestsExecutionStep: (e, { payload: t }) => {}
	},
	extraReducers: (e) => {
		e.addMatcher(a(K, Ht, G, H, U), (e, t) => {
			e.tryCurrent = { auth: [] }, e.tryResult = [];
		});
	}
}), { startTryAuthentication: tn, resetTryAuthentication: nn, addTryAuthenticationStep: rn, resetMockAuthRequestsExecution: an, addMockAuthRequestsExecutionStep: on } = en.actions, sn = en.reducer, cn = s({
	name: "requests",
	initialState: {
		tryCurrent: { auth: [] },
		tryResult: [],
		mockCurrent: { auth: [] },
		mockResult: [],
		mockMissingVariables: []
	},
	reducers: {
		setRequestId: (e, { payload: t }) => {
			e.ref = t, e.tryResult = [];
		},
		executeRequest: (e, t) => {},
		resetExecuteRequest: (e) => {
			e.tryCurrent = { auth: [] }, e.tryResult = [];
		},
		addExecutionStep: (e, { payload: t }) => {},
		resetMockRequestExecution: (e) => {
			e.mockCurrent = { auth: [] }, e.mockResult = [], e.mockMissingVariables = [];
		},
		addMockRequestExecutionStep: (e, { payload: t }) => {
			(t.event === "payload-variables-substituted" || t.event === "credential-variables-substituted") && e.mockMissingVariables.push(...t.missing.map((e) => e.name));
		}
	},
	extraReducers: (e) => {
		e.addCase(B, (e, { payload: { playbook: t, graphQl: n } }) => {
			e.ref = {
				id: Object.keys(t.operations)[0] || "",
				type: "operation"
			};
		});
	}
}), { setRequestId: ln, resetExecuteRequest: un, addExecutionStep: dn, executeRequest: fn, resetMockRequestExecution: pn, addMockRequestExecutionStep: mn } = cn.actions, hn = cn.reducer, gn = {
	theme: i,
	client: wt,
	scanconf: Qt,
	scanconfUpdate: $e,
	requests: hn,
	auth: sn,
	router: u,
	env: ge,
	prefs: xe,
	config: Ee,
	generalError: He,
	confirmationDialog: l,
	filePicker: nt
}, _n = {
	changeTheme: f,
	showHttpError: Mt,
	showHttpResponse: jt,
	showScanconfOperation: Ot,
	loadUpdatedScanconf: kt,
	loadEnv: he,
	loadConfig: Te,
	loadPrefs: Se,
	showGeneralError: j,
	loadFile: () => null,
	cancelFile: () => null
}, vn = (e, t) => p({
	reducer: gn,
	middleware: (t) => t().prepend(e.middleware).concat($t.logger),
	preloadedState: { theme: t }
}), J = () => re(), Y = ne, X = r();
function yn({ credential: e, saveCredential: t }) {
	let n = E({
		type: x(),
		in: x(),
		name: x(),
		ttl: S([C(""), x().refine((e) => qe(e) !== void 0, { message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'" })]),
		tti: S([C(""), x().refine((e) => qe(e) !== void 0, { message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'" })]),
		default: x(),
		methods: Ne()
	});
	return /* @__PURE__ */ (0, X.jsx)(w, {
		data: e,
		saveData: t,
		wrapFormData: Ve,
		unwrapFormData: Je,
		schema: n,
		children: /* @__PURE__ */ (0, X.jsx)(bn, {})
	});
}
function bn() {
	let { getValues: e } = de();
	e("methods");
	let t = e("type");
	return /* @__PURE__ */ (0, X.jsxs)(xn, { children: [
		/* @__PURE__ */ (0, X.jsx)(L, {
			label: "Type",
			name: "type",
			disabled: !0
		}),
		t !== "basic" && t !== "bearer" && /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(L, {
			label: "Location",
			name: "in",
			disabled: !0
		}), /* @__PURE__ */ (0, X.jsx)(L, {
			label: "Name",
			name: "name",
			disabled: !0
		})] }),
		/* @__PURE__ */ (0, X.jsx)(L, {
			label: "TTL",
			name: "ttl"
		}),
		/* @__PURE__ */ (0, X.jsx)(L, {
			label: "TTI",
			name: "tti"
		}),
		/* @__PURE__ */ (0, X.jsx)(L, {
			label: "Default credential name",
			name: "default",
			disabled: !0
		})
	] });
}
var xn = t.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
//#endregion
//#region src/app/scanconf-graphql/auth/CredentialValues.tsx
function Sn({ group: e, credentialId: t }) {
	let n = J(), { playbook: r, graphQl: i, selectedSubcredential: a } = Y((e) => e.scanconf), { fields: o, append: s, remove: c } = pe({ name: "methods" }), l = o.map((e, t) => ({
		id: e.key,
		title: e.key,
		content: /* @__PURE__ */ (0, X.jsxs)(Cn, {
			value: e.key,
			children: [/* @__PURE__ */ (0, X.jsx)(T, {
				label: "Credential value",
				name: `methods.${t}.value.credential`,
				disabled: !0
			}), /* @__PURE__ */ (0, X.jsx)(wn, {})]
		})
	}));
	return /* @__PURE__ */ (0, X.jsx)(y, {
		activeTab: a,
		setActiveTab: (e) => n(Ht(e)),
		tabs: l
	});
}
var Cn = t(ue)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`, wn = t.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
//#endregion
//#region src/app/scanconf-graphql/components/TryAndServerSelector.tsx
function Z({ onTry: e, onScan: t, servers: n, menu: r }) {
	let { scanServer: i, useGlobalBlocks: a, rejectUnauthorized: o } = we((e) => e.prefs), s = be(), c = (e) => s(Ce(e)), l = [...n], [u, d] = (0, R.useState)(i === "" ? l[0] : i);
	return !l.includes(i) && i !== "" && l.push(i), /* @__PURE__ */ (0, X.jsx)(En, { children: /* @__PURE__ */ (0, X.jsxs)(Tn, { children: [/* @__PURE__ */ (0, X.jsx)(Pe, {
		options: l,
		selected: u,
		onSelectedItemChange: (e) => {
			e && (d(e), c(e));
		}
	}), t && /* @__PURE__ */ (0, X.jsxs)(Dn, {
		onClick: (e) => {
			e.stopPropagation(), e.preventDefault(), t(u);
		},
		children: [/* @__PURE__ */ (0, X.jsx)(te, {}), "Scan"]
	})] }) });
}
var Tn = t.div`
  border: 1px solid var(${d.border});
  display: flex;
  align-items: center;
  flex: 1;
  height: 2.1rem;
  padding-left: 4px;
  & > div:first-child {
    flex: 1;
  }
`, En = t.div`
  background-color: var(${d.background});
  color: var(${d.foreground});
`, Dn = t.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  color: var(${d.linkForeground});
  > svg {
    fill: var(${d.linkForeground});
  }
`;
//#endregion
//#region src/app/scanconf-graphql/auth/Credential.tsx
function On({ selected: e }) {
	let t = J(), { playbook: { authenticationDetails: n }, servers: r } = Y((e) => e.scanconf), { tryResult: i } = Y((e) => e.auth), a = (e, n, r) => t(G({
		group: parseInt(e),
		id: n,
		credential: r
	})), o = parseInt(e.sectionId), s = e.itemId;
	if (!n) return /* @__PURE__ */ (0, X.jsx)("div", {});
	let c = n[o][s];
	return /* @__PURE__ */ (0, X.jsxs)(kn, { children: [
		/* @__PURE__ */ (0, X.jsx)(Z, {
			servers: r,
			onTry: (e) => {
				t(tn(e));
			}
		}),
		/* @__PURE__ */ (0, X.jsx)(P, {
			title: "Security Scheme",
			children: /* @__PURE__ */ (0, X.jsx)(yn, {
				credential: c,
				saveCredential: (t) => a(e.sectionId, e.itemId, t)
			}, e.itemId)
		}),
		/* @__PURE__ */ (0, X.jsx)(P, {
			defaultOpen: !1,
			title: "Credentials",
			count: c.credentials ? Object.keys(c.credentials).length : 0,
			children: /* @__PURE__ */ (0, X.jsx)(w, {
				data: c,
				saveData: (t) => a(e.sectionId, e.itemId, t),
				wrapFormData: Ve,
				unwrapFormData: Je,
				children: /* @__PURE__ */ (0, X.jsx)(Sn, {
					group: o,
					credentialId: s
				})
			})
		}),
		i.length > 0 && /* @__PURE__ */ (0, X.jsx)(P, {
			title: "Result",
			children: /* @__PURE__ */ (0, X.jsx)(D, { result: i })
		})
	] });
}
var kn = t.div`
  padding: 8px;
`;
//#endregion
//#region src/app/scanconf-graphql/auth/NewCredentialForm.tsx
function An({ allowApiKey: e, allowMtls: t }) {
	let n = fe({ name: "type" }), r = [...e ? [{
		value: "apiKey",
		label: "apiKey"
	}] : [], ...t ? [{
		value: "mTLS",
		label: "mTLS"
	}] : []], i = /* @__PURE__ */ (0, X.jsx)(me, {
		label: "Type",
		name: "type",
		options: r
	});
	return n === "mTLS" ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
		i,
		/* @__PURE__ */ (0, X.jsx)(M, {
			label: "Client certificate",
			name: "clientCertificate",
			title: "Select client certificate",
			extensions: tt
		}),
		/* @__PURE__ */ (0, X.jsx)(T, {
			label: "Certificate password",
			name: "clientCertificatePassword",
			password: !0
		}),
		/* @__PURE__ */ (0, X.jsx)(M, {
			label: "Server CA certificate (optional)",
			name: "caServerCertificate",
			title: "Select CA certificate",
			extensions: vt
		})
	] }) : /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
		/* @__PURE__ */ (0, X.jsx)(T, {
			label: "ID",
			name: "id"
		}),
		i,
		n !== "basic" && n !== "bearer" && /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(T, {
			label: "Location (read only)",
			name: "in",
			disabled: !0
		}), /* @__PURE__ */ (0, X.jsx)(T, {
			label: "Name",
			name: "name"
		})] }),
		/* @__PURE__ */ (0, X.jsx)(T, {
			label: "Description",
			name: "description"
		}),
		/* @__PURE__ */ (0, X.jsx)(T, {
			label: "Credential name (read only, auto-updates from ID)",
			name: "id",
			disabled: !0
		}),
		/* @__PURE__ */ (0, X.jsx)(T, {
			label: "Credential value (read only)",
			name: "credentialValue",
			disabled: !0
		})
	] });
}
//#endregion
//#region src/app/scanconf-graphql/auth/NewCredentialDialog.tsx
function jn({ onAddCredential: e, onAddSecurityProfile: t, allowApiKey: n, allowMtls: r, existing: i }) {
	let a = {
		id: "",
		type: n ? "apiKey" : "mTLS",
		in: "header",
		name: "",
		description: "",
		credentialName: "",
		credentialValue: "{{" + V + "}}",
		clientCertificate: "",
		clientCertificatePassword: "",
		caServerCertificate: ""
	}, o = E({
		id: x().optional(),
		type: x(),
		in: x().optional(),
		name: x().optional(),
		description: x().optional(),
		credentialName: x().optional(),
		credentialValue: x().optional(),
		clientCertificate: x().optional(),
		clientCertificatePassword: x().optional(),
		caServerCertificate: x().optional()
	}).superRefine((e, t) => {
		e.type === "mTLS" ? (e.clientCertificate || t.addIssue({
			code: O.custom,
			path: ["clientCertificate"],
			message: "Required"
		}), e.clientCertificatePassword || t.addIssue({
			code: O.custom,
			path: ["clientCertificatePassword"],
			message: "Required"
		})) : (Me().test(e.id ?? "") ? i.includes(e.id ?? "") && t.addIssue({
			code: O.custom,
			path: ["id"],
			message: "Already exists"
		}) : t.addIssue({
			code: O.custom,
			path: ["id"],
			message: je
		}), e.name || t.addIssue({
			code: O.custom,
			path: ["name"],
			message: "Required"
		}), e.credentialValue || t.addIssue({
			code: O.custom,
			path: ["credentialValue"],
			message: "Required"
		}));
	});
	return /* @__PURE__ */ (0, X.jsx)(rt, {
		title: "New security scheme",
		defaultValues: a,
		schema: o,
		onSubmit: (n) => {
			if (n.type === "mTLS") {
				t({
					clientCertificate: n.clientCertificate,
					clientCertificatePassword: n.clientCertificatePassword,
					caServerCertificate: n.caServerCertificate || void 0
				});
				return;
			}
			let r = { [n.id]: {
				credential: n.credentialValue,
				requests: [],
				description: ""
			} };
			e(n.id, n.type === "bearer" || n.type === "basic" ? {
				type: n.type,
				default: n.id,
				description: n.description,
				methods: r
			} : {
				type: n.type,
				default: n.id,
				in: n.in,
				name: n.name,
				description: n.description,
				methods: r
			});
		},
		trigger: /* @__PURE__ */ (0, X.jsx)(ze, {
			style: { width: "100%" },
			children: "New security scheme"
		}),
		children: /* @__PURE__ */ (0, X.jsx)(An, {
			allowApiKey: n,
			allowMtls: r
		})
	});
}
//#endregion
//#region src/app/scanconf-graphql/auth/SecurityProfile.tsx
function Mn() {
	let e = J(), { securityProfile: t } = Y((e) => e.scanconf.playbook);
	if (t === void 0) return /* @__PURE__ */ (0, X.jsx)(In, { children: /* @__PURE__ */ (0, X.jsx)(Rn, { children: "No mutual TLS security profile is configured." }) });
	let n = E({
		clientCertificate: x().min(1, { message: "Required" }),
		clientCertificatePassword: x().min(1, { message: "Required" }),
		caServerCertificate: x()
	});
	return /* @__PURE__ */ (0, X.jsx)(In, { children: /* @__PURE__ */ (0, X.jsx)(w, {
		data: t,
		saveData: (t) => e(W(t)),
		wrapFormData: Pn,
		unwrapFormData: Fn,
		schema: n,
		children: /* @__PURE__ */ (0, X.jsx)(Nn, {})
	}) });
}
function Nn() {
	return /* @__PURE__ */ (0, X.jsxs)(Ln, { children: [
		/* @__PURE__ */ (0, X.jsx)(M, {
			label: "Client certificate",
			name: "clientCertificate",
			title: "Select client certificate",
			extensions: tt
		}),
		/* @__PURE__ */ (0, X.jsx)(L, {
			label: "Certificate password",
			name: "clientCertificatePassword",
			password: !0
		}),
		/* @__PURE__ */ (0, X.jsx)(M, {
			label: "Server CA certificate (optional)",
			name: "caServerCertificate",
			title: "Select CA certificate",
			extensions: vt
		})
	] });
}
function Pn(e) {
	return {
		clientCertificate: e.clientCertificate,
		clientCertificatePassword: e.clientCertificatePassword,
		caServerCertificate: e.caServerCertificate ?? ""
	};
}
function Fn(e) {
	return {
		clientCertificate: e.clientCertificate,
		clientCertificatePassword: e.clientCertificatePassword,
		caServerCertificate: e.caServerCertificate === "" ? void 0 : e.caServerCertificate
	};
}
var In = t.div`
  padding: 8px;
`, Ln = t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Rn = t.div`
  opacity: 0.8;
`;
//#endregion
//#region src/app/scanconf-graphql/auth/Auth.tsx
function zn() {
	let e = J(), { playbook: { authenticationDetails: t, securityProfile: n }, selectedCredentialGroup: r, selectedCredential: i } = Y((e) => e.scanconf), a = (t, n) => {
		e(H({
			credentialGroup: 0,
			id: t,
			credential: n
		})), e(K({
			group: 0,
			credential: t
		}));
	}, o = (t) => {
		e(W(t)), e(K({
			group: 0,
			credential: at
		}));
	}, s = Object.keys(t?.[0] || {}).length > 0, c = n !== void 0, l = t ? t.map((t, r) => {
		let i = r === 0 ? "Default group" : `Group ${r}`, a = Object.entries(t).map(([t, n]) => ({
			id: t,
			label: t,
			menu: /* @__PURE__ */ (0, X.jsx)(N, { children: /* @__PURE__ */ (0, X.jsxs)(A, {
				onClick: (e) => e.stopPropagation(),
				onSelect: () => e(U({
					credentialGroup: r,
					id: t
				})),
				children: [/* @__PURE__ */ (0, X.jsx)(ae, {}), "Delete"]
			}) })
		}));
		return r === 0 && n !== void 0 && a.push({
			id: at,
			label: "mTLS",
			menu: /* @__PURE__ */ (0, X.jsx)(N, { children: /* @__PURE__ */ (0, X.jsxs)(A, {
				onClick: (e) => e.stopPropagation(),
				onSelect: () => e(Lt()),
				children: [/* @__PURE__ */ (0, X.jsx)(ae, {}), "Delete"]
			}) })
		}), {
			id: `${r}`,
			title: i,
			items: a
		};
	}) : [];
	return /* @__PURE__ */ (0, X.jsx)(b, {
		title: "security scheme",
		sections: l,
		render: (e) => e.itemId === "mtls:profile" ? /* @__PURE__ */ (0, X.jsx)(Mn, {}) : /* @__PURE__ */ (0, X.jsx)(On, { selected: e }),
		renderButtons: () => /* @__PURE__ */ (0, X.jsx)("div", { children: (!s || !c) && /* @__PURE__ */ (0, X.jsx)(jn, {
			existing: Object.keys(t?.[0] || []),
			allowApiKey: !s,
			allowMtls: !c,
			onAddCredential: a,
			onAddSecurityProfile: o
		}) }),
		selected: i === void 0 ? void 0 : {
			sectionId: `${r}`,
			itemId: i
		},
		onSelected: (t) => {
			e(K({
				group: parseInt(t.sectionId),
				credential: t.itemId
			}));
		}
	});
}
//#endregion
//#region src/app/scanconf-graphql/listeners/host-messages.ts
function Bn(e) {
	return () => e({
		actionCreator: Ot,
		effect: async ({ payload: { graphQl: e, scanconf: t } }, n) => {
			let [r, i] = Q(t);
			if (i !== void 0) {
				n.dispatch(j({ message: `Failed to parse scan configuration: ${i}` })), n.dispatch(_(["general-error"]));
				return;
			}
			let [a, o] = bt(Ue(), r);
			if (o !== void 0) {
				let e = o.map((e) => `${e.message}: ${e.pointer}`).join(" ");
				n.dispatch(j({ message: e })), n.dispatch(_(["general-error"]));
			} else n.dispatch(B({
				playbook: a,
				graphQl: e
			})), n.dispatch(_(["scanconf", "requests"]));
		}
	});
}
function Vn(e, t) {
	return () => e({
		actionCreator: kt,
		effect: async ({ payload: { graphQl: e, scanconf: t } }, n) => {
			let { changes: r, scanconf: i } = n.getState().scanconfUpdate, [a, o] = Q(i);
			if (o !== void 0) {
				n.dispatch(j({ message: `Failed to parse original scan configuration: ${o}` })), n.dispatch(_(["general-error"]));
				return;
			}
			let [s, c] = Q(t);
			if (c !== void 0) {
				n.dispatch(j({ message: `Failed to parse updated scan configuration: ${c}` })), n.dispatch(_(["general-error"]));
				return;
			}
			let l = s;
			n.dispatch(B({
				playbook: l,
				graphQl: e
			})), n.dispatch(_(["scanconf", "requests"]));
		}
	});
}
function Q(e) {
	try {
		return [JSON.parse(e), void 0];
	} catch (e) {
		return [void 0, `${e}`];
	}
}
//#endregion
//#region src/app/scanconf-graphql/listeners/webapp-messages.ts
var Hn = (e, t) => ({
	runScan: () => e({
		actionCreator: z,
		effect: async (e, n) => {
			t.postMessage({
				command: "runScan",
				payload: e.payload
			});
		}
	}),
	runFullScan: () => e({
		actionCreator: Dt,
		effect: async (e, n) => {
			t.postMessage({
				command: "runFullScan",
				payload: e.payload
			});
		}
	}),
	saveScanconf: () => e({
		matcher: a(q, Pt, G, H, U, W, Lt, Rt, zt, Bt, Vt, Ft, qt, Wt, Gt, Ut, Jt, Zt, Xt),
		effect: async (e, n) => {
			let { scanconf: r } = n.getState(), [i, a] = F(r.playbook);
			a === void 0 && t.postMessage({
				command: "saveScanconf",
				payload: JSON.stringify(i, null, 2)
			});
		}
	}),
	sendHttpRequest: () => e({
		actionCreator: At,
		effect: async (e, n) => {
			let { id: r, request: i, config: a } = e.payload;
			t.postMessage({
				command: "sendHttpRequest",
				payload: {
					id: r,
					request: i,
					config: a
				}
			});
		}
	}),
	showEnvWindow: () => e({
		actionCreator: _e,
		effect: async (e, n) => {
			t.postMessage({
				command: "showEnvWindow",
				payload: void 0
			});
		}
	}),
	savePrefs: () => e({
		actionCreator: Ce,
		effect: async (e, n) => {
			let { prefs: r } = n.getState();
			t.postMessage({
				command: "savePrefs",
				payload: r
			});
		}
	}),
	openLink: le(e, t),
	updateScanconf: () => e({
		actionCreator: lt,
		effect: async (e, n) => {
			t.postMessage({
				command: "updateScanconf",
				payload: void 0
			});
		}
	}),
	selectFile: () => e({
		actionCreator: yt,
		effect: async (e, n) => {
			t.postMessage({
				command: "selectFile",
				payload: e.payload
			});
		}
	})
});
//#endregion
//#region src/app/scanconf-graphql/listeners/misc.ts
function Un(e) {
	return () => e({
		actionCreator: ht,
		effect: async (e, t) => {}
	});
}
//#endregion
//#region src/app/scanconf-graphql/listener.ts
var Wn = g(), $ = Wn.startListening;
function Gn(e, t) {
	let n = Hn($, e);
	return ce($, t), h({
		...n,
		executeSendHttpRequestListener: Tt($, e),
		executeConfirmationAccept: ct($),
		executeShowScanconfOperationListener: Bn($),
		executeLoadUpdatedScanconfListener: Vn($, e),
		executeSkipScanconfUpdate: Un($)
	}), Wn;
}
//#endregion
//#region src/app/scanconf-graphql/components/scenario/util.ts
var Kn = ye();
function qn(e) {
	return e = (0, Kn.simpleClone)(e), {
		path: e.request.path,
		method: e.request.method,
		parameters: e.request.parameters,
		body: { value: JSON.stringify(e.request.body.value, null, 2) },
		environment: St(e.environment),
		defaultResponse: e.defaultResponse,
		injectionKey: e.injectionKey,
		fuzzing: e.fuzzing,
		operationId: e.operationId,
		requestOperationId: e.request.operationId,
		responses: Ge(e.responses),
		auth: e.auth
	};
}
function Jn(e) {
	return e = (0, Kn.simpleClone)(e), {
		url: e.request.url,
		method: e.request.method,
		parameters: e.request.parameters,
		body: { value: JSON.stringify(e.request.body.value, null, 2) },
		environment: St(e.environment),
		defaultResponse: e.defaultResponse,
		responses: Ge(e.responses)
	};
}
//#endregion
//#region src/app/scanconf-graphql/components/scenario/RequestCardExternal.tsx
function Yn({ requestRef: e, stage: t, saveRequest: n, defaultCollapsed: r, variables: i }) {
	let a = Zn(t);
	return /* @__PURE__ */ (0, X.jsx)($n, { children: /* @__PURE__ */ (0, X.jsx)(w, {
		data: t,
		saveData: n,
		wrapFormData: Jn,
		unwrapFormData: Le,
		children: /* @__PURE__ */ (0, X.jsxs)(Oe, {
			defaultCollapsed: r,
			children: [
				/* @__PURE__ */ (0, X.jsxs)(De, { children: [/* @__PURE__ */ (0, X.jsx)("span", { children: e.id }), /* @__PURE__ */ (0, X.jsxs)(nr, { children: [/* @__PURE__ */ (0, X.jsx)("span", { children: "Default Response" }), /* @__PURE__ */ (0, X.jsx)(ft, {
					name: "defaultResponse",
					options: a
				})] })] }),
				/* @__PURE__ */ (0, X.jsxs)(ke, { children: [/* @__PURE__ */ (0, X.jsx)(tr, { children: t.request.method }), /* @__PURE__ */ (0, X.jsx)(er, {
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ (0, X.jsx)(We, {
						variables: i,
						name: "url"
					})
				})] }),
				/* @__PURE__ */ (0, X.jsx)(Xn, {
					stage: t,
					variables: i
				})
			]
		})
	}) });
}
function Xn({ stage: e, variables: t }) {
	return /* @__PURE__ */ (0, X.jsx)($n, { children: /* @__PURE__ */ (0, X.jsx)(y, { tabs: [
		{
			id: "body",
			title: "Body",
			content: /* @__PURE__ */ (0, X.jsx)(ot, {
				variables: t,
				name: "body.value"
			}),
			disabled: e.request.body === void 0
		},
		{
			id: "query",
			title: "Query",
			content: /* @__PURE__ */ (0, X.jsx)(ut, {
				name: "parameters.query",
				variables: t
			})
		},
		{
			id: "header",
			title: "Headers",
			content: /* @__PURE__ */ (0, X.jsx)(ut, {
				name: "parameters.header",
				variables: t
			})
		},
		{
			id: "responses",
			title: "Response processing",
			content: /* @__PURE__ */ (0, X.jsx)(Ke, {
				editable: !0,
				responseCodes: Qn
			})
		}
	] }) });
}
function Zn(e) {
	return Object.keys(e.responses || {}).map((e) => ({
		label: e,
		value: e
	}));
}
var Qn = /* @__PURE__ */ "100.101.200.201.202.203.204.205.206.300.301.302.303.304.305.307.400.401.402.403.404.405.406.407.408.409.410.411.412.413.414.415.416.417.426.500.501.502.503.504.505".split("."), $n = t.div`
  > div {
    background-color: var(${d.background});
  }
`, er = t.div`
  flex: 1;
  background-color: var(${d.background});
  border: 1px solid var(${d.border});
`, tr = t.div`
  background-color: var(${d.badgeBackground});
  color: var(${d.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, nr = t.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${d.border});
  }
`;
//#endregion
//#region src/app/scanconf-graphql/requests/RequestExternal.tsx
function rr({ request: e, requestRef: t }) {
	let n = Y((e) => e.prefs.useGlobalBlocks), { tryResult: r, mockResult: i, mockMissingVariables: a } = Y((e) => e.requests), o = J(), { playbook: s, servers: c } = Y((e) => e.scanconf), l = Y((e) => e.env.data), u = (e, t) => o(fn({
		server: e,
		inputs: t
	})), d = (e) => o(q({
		ref: t,
		stage: e
	})), f = [...Ae, ..._t([])], [p, m] = (0, R.useState)({}), h = I(s, l, c);
	return (0, R.useEffect)(() => {
		let e = { ...p };
		for (let t of Object.keys(e)) a.includes(t) || delete e[t];
		for (let t of a) e[t] === void 0 && (e[t] = "");
		m(e);
	}, [a]), /* @__PURE__ */ (0, X.jsxs)(ir, { children: [
		/* @__PURE__ */ (0, X.jsx)(Z, {
			servers: h,
			onTry: (e) => u(e, p),
			menu: !0
		}),
		/* @__PURE__ */ (0, X.jsxs)(P, {
			title: "Request",
			children: [
				/* @__PURE__ */ (0, X.jsx)(Yn, {
					defaultCollapsed: !1,
					variables: f,
					requestRef: t,
					stage: e,
					saveRequest: d
				}),
				/* @__PURE__ */ (0, X.jsxs)(or, { children: ["Unset variables", /* @__PURE__ */ (0, X.jsx)(Ct, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })] }),
				/* @__PURE__ */ (0, X.jsx)(ar, { children: /* @__PURE__ */ (0, X.jsx)(w, {
					wrapFormData: it,
					unwrapFormData: et,
					data: p,
					saveData: (e) => m(e),
					children: /* @__PURE__ */ (0, X.jsx)(Fe, { name: "env" })
				}) })
			]
		}),
		r.length > 0 && /* @__PURE__ */ (0, X.jsx)(P, {
			title: "Result",
			children: /* @__PURE__ */ (0, X.jsx)(D, {
				result: r,
				collapsible: n
			})
		})
	] });
}
var ir = t.div`
  padding: 8px;
`, ar = t.div`
  border: 1px solid var(${d.border});
  background-color: var(${d.background});
`, or = t.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;
//#endregion
//#region src/app/scanconf-graphql/components/parameters/ParameterRow.tsx
function sr({ name: e, value: t }) {
	return /* @__PURE__ */ (0, X.jsxs)(lr, { children: [
		/* @__PURE__ */ (0, X.jsx)(ur, { children: e }),
		/* @__PURE__ */ (0, X.jsx)(cr, { children: t }),
		/* @__PURE__ */ (0, X.jsx)("div", {})
	] });
}
var cr = t.div`
  flex: 1;
  border-bottom: 1px solid var(${d.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`, lr = t.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, ur = t.div`
  flex: 1;
  border-bottom: 1px solid var(${d.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
//#endregion
//#region src/app/scanconf-graphql/components/parameters/ParameterGroup.tsx
function dr({ name: e }) {
	let { fields: t, append: n, remove: r } = pe({ name: e });
	return /* @__PURE__ */ (0, X.jsxs)(fr, { children: [/* @__PURE__ */ (0, X.jsxs)(pr, { children: [
		/* @__PURE__ */ (0, X.jsx)("div", { children: "Name" }),
		/* @__PURE__ */ (0, X.jsx)("div", { children: "Value" }),
		/* @__PURE__ */ (0, X.jsx)("div", {})
	] }), /* @__PURE__ */ (0, X.jsx)(mr, { children: t.map((e, t) => /* @__PURE__ */ (0, X.jsx)(sr, {
		name: e.key,
		value: e.value
	}, e.id)) })] });
}
var fr = t.div`
  padding: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, pr = t.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${d.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, mr = t.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${d.border});
  }
  & > div > div:last-child {
    padding: 2px 5px;
  }
  // for now keep with of a new entry selector to 1 column
  // & > div:last-child {
  //   grid-column: span 3;
  // }
`;
//#endregion
//#region src/app/scanconf-graphql/components/operation/RequestBody.tsx
function hr({ variables: e, readOnly: t }) {
	return /* @__PURE__ */ (0, X.jsx)(gr, { children: /* @__PURE__ */ (0, X.jsx)(Qe, {
		name: "body.value",
		readOnly: t
	}) });
}
var gr = t.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;
`;
//#endregion
//#region src/app/scanconf-graphql/components/operation/OperationTabs.tsx
function _r({ config: e, path: t, method: n, credentials: r, settings: i, availableVariables: a }) {
	let { getValues: o } = de(), s = vr(e, r, t, n, a, o("body") !== void 0);
	return /* @__PURE__ */ (0, X.jsx)(y, { tabs: s });
}
function vr(e, t, n, r, i, a) {
	return [{
		id: "body",
		title: "Body details",
		content: /* @__PURE__ */ (0, X.jsx)(hr, {
			variables: i,
			readOnly: !0
		}),
		disabled: !1
	}, {
		id: "header",
		title: "Header",
		content: /* @__PURE__ */ (0, X.jsx)(dr, { name: "parameters.header" })
	}];
}
//#endregion
//#region src/app/scanconf-graphql/components/scenario/RequestCard.tsx
function yr({ config: e, requestRef: t, stage: n, credentials: r, saveRequest: i, defaultCollapsed: a, availableVariables: o }) {
	return /* @__PURE__ */ (0, X.jsx)(br, { children: /* @__PURE__ */ (0, X.jsx)(w, {
		data: n,
		saveData: i,
		wrapFormData: qn,
		unwrapFormData: Re,
		children: /* @__PURE__ */ (0, X.jsxs)(Oe, {
			defaultCollapsed: a,
			children: [
				/* @__PURE__ */ (0, X.jsx)(De, { children: /* @__PURE__ */ (0, X.jsx)("span", { children: t.id }) }),
				/* @__PURE__ */ (0, X.jsxs)(ke, { children: [/* @__PURE__ */ (0, X.jsx)(xr, { children: n.request.method }), /* @__PURE__ */ (0, X.jsx)(Sr, { children: n.request.path })] }),
				/* @__PURE__ */ (0, X.jsx)(_r, {
					config: e,
					credentials: r,
					method: n.request.method,
					path: n.request.path,
					availableVariables: o
				})
			]
		})
	}) });
}
var br = t.div`
  > div {
    background-color: var(${d.background});
  }
`, xr = t.div`
  background-color: var(${d.badgeBackground});
  color: var(${d.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, Sr = t.div``;
//#endregion
//#region src/app/scanconf-graphql/requests/RequestInternal.tsx
function Cr({ request: e, requestRef: t }) {
	let n = J(), { graphQl: r, playbook: i, servers: a } = Y((e) => e.scanconf);
	Y((e) => e.config.data);
	let o = Y((e) => e.env.data), s = Y((e) => e.prefs.useGlobalBlocks), { tryResult: c, mockResult: l, mockMissingVariables: u } = Y((e) => e.requests), d = (e, t) => n(fn({
		server: e,
		inputs: t
	})), f = (e) => n(q({
		ref: t,
		stage: e
	})), p = i?.authenticationDetails ? i?.authenticationDetails[0] : void 0, m = [...Ae, ...mt([])], [h, g] = (0, R.useState)({}), { simple: ee } = Be(Xe(i), o), _ = I(i, o, a);
	return (0, R.useEffect)(() => {
		let e = { ...h };
		for (let t of Object.keys(e)) u.includes(t) || delete e[t];
		for (let t of u) e[t] === void 0 && (e[t] = "");
		g(e);
	}, [u]), /* @__PURE__ */ (0, X.jsxs)(wr, { children: [
		/* @__PURE__ */ (0, X.jsx)(Z, {
			menu: !0,
			servers: _,
			onTry: (e) => d(e, h),
			onScan: (t) => {
				let [r, a] = F(i);
				a === void 0 ? n(z({
					path: e.request.path,
					method: e.request.method,
					operationId: e.operationId,
					env: {
						SCAN42C_HOST: t,
						...ee
					},
					scanconf: Tr(r, e.operationId)
				})) : console.log("failed to serialize", a);
			}
		}),
		/* @__PURE__ */ (0, X.jsx)(P, {
			title: "Request",
			children: /* @__PURE__ */ (0, X.jsx)(yr, {
				defaultCollapsed: !1,
				config: void 0,
				credentials: p,
				availableVariables: m,
				requestRef: t,
				stage: e,
				saveRequest: f
			})
		}),
		c.length > 0 && /* @__PURE__ */ (0, X.jsx)(P, {
			title: "Result",
			children: /* @__PURE__ */ (0, X.jsx)(D, {
				result: c,
				collapsible: s
			})
		})
	] });
}
var wr = t.div`
  padding: 8px;
`;
function Tr(e, t) {
	if (e.operations !== void 0) for (let n of Object.keys(e?.operations)) n !== t && delete e.operations[n];
	return JSON.stringify(e, null, 2);
}
//#endregion
//#region src/app/scanconf-graphql/requests/Request.tsx
function Er({ requestRef: e }) {
	let { playbook: t } = Y((e) => e.scanconf), n = e.type === "operation" ? t.operations[e.id].request : t.requests?.[e.id];
	return n === void 0 ? /* @__PURE__ */ (0, X.jsxs)("div", { children: ["Unable to locate the request, failed to resolve: ", JSON.stringify(e)] }) : n.operationId === void 0 ? /* @__PURE__ */ (0, X.jsx)(rr, {
		requestRef: e,
		request: n
	}) : /* @__PURE__ */ (0, X.jsx)(Cr, {
		requestRef: e,
		request: n
	});
}
//#endregion
//#region src/app/scanconf-graphql/requests/Requests.tsx
function Dr() {
	let e = J(), { graphQl: t, playbook: n, servers: r } = Y((e) => e.scanconf), i = Y((e) => e.requests.ref), a = Y((e) => e.env.data), o = Y((e) => e.prefs.scanServer), s = I(n, a, r), c = s.includes(o) ? o : s[0], l = ({ sectionId: t, itemId: n }) => {
		e(ln({
			type: t === "operation" ? "operation" : "request",
			id: n
		}));
	}, u = (t) => {
		if (i?.type === "request" && i.id === t) {
			let t = Object.keys(n.operations)?.[0];
			t !== void 0 && e(ln({
				type: "operation",
				id: t
			}));
		}
		e(qt({
			type: "request",
			id: t
		}));
	}, d = Object.keys(n.operations).map((e) => ({
		id: e,
		label: e
	})), f = Object.entries(n.requests || {}).filter(([e, t]) => t.operationId !== void 0).map(([e, t]) => ({
		id: e,
		label: e
	})), p = Object.entries(n.requests || {}).filter(([e, t]) => t.operationId === void 0).map(([e, t]) => ({
		id: e,
		label: e,
		menu: /* @__PURE__ */ (0, X.jsx)(N, { children: /* @__PURE__ */ (0, X.jsx)(A, {
			onClick: (e) => e.stopPropagation(),
			onSelect: () => u(e),
			children: "Delete"
		}) })
	})), m;
	i?.type === "operation" && n.operations[i.id] !== void 0 ? m = {
		itemId: i.id,
		sectionId: "operation"
	} : i?.type === "request" && n.requests?.[i.id] !== void 0 && (m = n.requests[i.id].operationId === void 0 ? {
		itemId: i.id,
		sectionId: "external"
	} : {
		itemId: i.id,
		sectionId: "requests"
	});
	let h = [
		{
			id: "operation",
			title: "Operations",
			items: d
		},
		{
			id: "request",
			title: "Requests",
			items: f
		},
		{
			id: "external",
			title: "External Requests",
			items: p
		}
	], g = (t) => {
		let r = t, [i, o] = F(n);
		if (o !== void 0) {
			console.log("failed to serialize", o);
			return;
		}
		let { simple: s } = Be(Xe(n), a);
		e(Dt({
			env: {
				SCAN42C_HOST: r,
				...s
			},
			scanconf: JSON.stringify(i, null, 2)
		}));
	};
	return /* @__PURE__ */ (0, X.jsx)(b, {
		title: "operations",
		selected: m,
		sections: h,
		onSelected: l,
		renderButtons: () => /* @__PURE__ */ (0, X.jsx)(ie, {
			style: { width: "100%" },
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), g(c);
			},
			children: "Scan all operations"
		}),
		hideEmptySections: !0,
		render: (e) => /* @__PURE__ */ (0, X.jsx)(Er, { requestRef: {
			type: e.sectionId,
			id: e.itemId
		} }, `${e.sectionId}-${e.itemId}`)
	});
}
//#endregion
//#region src/app/scanconf-graphql/index.tsx
var Or = [
	{
		id: "starting",
		title: "",
		navigation: !1,
		element: /* @__PURE__ */ (0, X.jsx)("div", {})
	},
	{
		id: "general-error",
		title: "An error has occurred",
		element: /* @__PURE__ */ (0, X.jsx)(gt, {}),
		navigation: !1,
		when: j
	},
	{
		id: "scanconf-update",
		title: "Scan configuration is outdated",
		element: /* @__PURE__ */ (0, X.jsx)(dt, {}),
		navigation: !1
	},
	{
		id: "scanconf",
		title: "Scanconf",
		element: /* @__PURE__ */ (0, X.jsx)("div", { children: "Main" }),
		children: [
			{
				id: "requests",
				title: "Operations",
				element: /* @__PURE__ */ (0, X.jsx)(Dr, {})
			},
			{
				id: "auth",
				title: "Authentication",
				element: /* @__PURE__ */ (0, X.jsx)(zn, {})
			},
			{
				id: "environments",
				title: /* @__PURE__ */ (0, X.jsx)(pt, {}),
				element: /* @__PURE__ */ (0, X.jsx)(Ye, {})
			},
			{
				id: "settings",
				title: "Settings",
				element: /* @__PURE__ */ (0, X.jsx)(st, {})
			}
		]
	}
];
function kr(e, t) {
	let r = vn(Gn(e, Or), t);
	(0, Et.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, X.jsx)(R.StrictMode, { children: /* @__PURE__ */ (0, X.jsx)(oe, {
		store: r,
		children: /* @__PURE__ */ (0, X.jsx)(m.Provider, {
			value: Or,
			children: /* @__PURE__ */ (0, X.jsx)(Ze, {
				backend: xt,
				children: /* @__PURE__ */ (0, X.jsx)(n, {})
			})
		})
	}) })), window.addEventListener("message", o(r, _n));
}
window.renderWebView = kr;
//#endregion
