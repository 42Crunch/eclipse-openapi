import { o as e } from "./rolldown-runtime.BItFwnF5.js";
import { At as t, C as n, Dt as r, E as i, Et as a, Ft as o, Gt as s, H as ee, Ht as te, It as ne, Nt as re, Ot as c, Pt as ie, R as l, Rt as ae, Tt as oe, U as se, Vt as ce, f as u, g as le, gn as ue, h as d, kt as de, mn as fe, pn as pe, t as f, un as me, vn as he, wt as ge, y as p, z as m } from "./icons.ODuw_IC-.js";
import { n as _e } from "./listener.BUamXvcw.js";
import { t as ve } from "./Tabs.Dgbi5KB9.js";
import { t as h } from "./Select.Brxu2tMx.js";
import { t as ye } from "./Switch.RJhbLnig.js";
import { t as be } from "./Banner.CHX-WOk6.js";
//#region ../common/dist/esm/audit.js
var g = /* @__PURE__ */ e(he(), 1), xe = ue(), Se = ne(), _ = [
	"info",
	"low",
	"medium",
	"high",
	"critical"
], v = {
	Info: 1,
	Low: 2,
	Medium: 3,
	High: 4,
	Critical: 5
}, Ce = {
	[v.Info]: "info",
	[v.Low]: "low",
	[v.Medium]: "medium",
	[v.High]: "high",
	[v.Critical]: "critical"
}, y = {
	[v.Info]: "Info",
	[v.Low]: "Low",
	[v.Medium]: "Medium",
	[v.High]: "High",
	[v.Critical]: "Critical"
}, we = [
	"graphql",
	"gql",
	"graphqls",
	"sdl",
	"gqls"
], Te = "article-not-found";
function b(e, t) {
	return e[t] ?? e[Te];
}
var Ee = {
	audit: {
		filename: "",
		files: {},
		issues: {},
		minimalReport: !1,
		valid: !0,
		openapiState: "",
		summary: {
			documentUri: "",
			subdocumentUris: [],
			errors: !1,
			invalid: !1,
			all: 0,
			datavalidation: {
				max: 0,
				value: 0
			},
			security: {
				max: 0,
				value: 0
			},
			oasconformance: {
				max: 0,
				value: 0
			}
		}
	},
	tab: "priority",
	issues: [],
	filtered: [],
	stats: {
		byIssue: [],
		byGroup: C([])
	},
	kdb: {},
	issueTitles: [],
	filter: {},
	sqgTodo: !1,
	type: "openapi"
}, x = te({
	name: "audit",
	initialState: Ee,
	reducers: {
		startAudit: (e, t) => {},
		cancelAudit: (e, t) => {},
		showFullReport: (e, { payload: t }) => {
			e.audit.filename !== t.filename && (e.tab = "priority", e.filter = {}, e.sqgTodo = !1, e.type = t.filename.toLowerCase().endsWith(".graphql") || t.filename.toLowerCase().endsWith(".gql") || t.filename.toLowerCase().endsWith(".graphqls") || t.filename.toLowerCase().endsWith(".sdl") || t.filename.toLowerCase().endsWith(".gqls") ? "graphql" : "openapi"), (t.compliance === void 0 || t.compliance.acceptance === "yes") && (e.sqgTodo = !1), e.audit = t, S(e);
		},
		showPartialReport: (e, { payload: { report: t, uri: n, ids: r } }) => {
			e.audit = t, e.filter = { ids: r }, e.tab = "issues", e.sqgTodo = !1, e.type = we.some((e) => t.filename.toLowerCase().endsWith(`.${e}`)) ? "graphql" : "openapi", S(e);
		},
		loadKdb: (e, { payload: t }) => {
			e.kdb = t, S(e);
		},
		changeTab: (e, t) => {
			e.tab = t.payload;
		},
		changeFilter: (e, { payload: t }) => {
			e.filter = t, S(e);
		},
		setSqgTodo: (e, { payload: t }) => {
			e.sqgTodo = t, e.filter = {}, S(e);
		},
		showNoReport: (e) => {},
		goToLine: (e, t) => {},
		copyIssueId: (e, t) => {},
		openLink: (e, t) => {}
	}
});
function S(e) {
	let { issues: t, filtered: n, stats: r, titles: i } = De(e.sqgTodo ? e.audit.todo : e.audit.issues, e.audit.files, e.kdb, e.filter, e.type);
	e.issues = t, e.filtered = n, e.stats = r, e.issueTitles = i;
}
function De(e, t, n, r, i) {
	let a = ke(e, t, n, i), o = Ae(a, n, i), s = je(o);
	return {
		issues: a,
		filtered: Oe(a, r),
		stats: o,
		titles: s
	};
}
function Oe(e, t) {
	let n = (e, n) => t.ids === void 0 || t.ids.includes(n), r = (e) => t.domain === void 0 || e.domain === t?.domain, i = (e) => t.group === void 0 || e.group === t?.group, a = (e) => t?.rule === void 0 || e.id === t.rule, o = t.severity === void 0 ? 0 : _.indexOf(t.severity) + 1, s = (e) => t.severity === void 0 || e.criticality >= o;
	return e.filter((e, t) => n(e, t) && r(e) && i(e) && a(e) && s(e));
}
function ke(e, t, n, r) {
	return Object.entries(e).map(([e, r]) => r.map((e, r) => ({
		...e,
		domain: n[e.id]?.group,
		group: n[e.id]?.subgroup,
		filename: t[e.documentUri].relative
	}))).reduce((e, t) => e.concat(t), []);
}
function Ae(e, t, n) {
	let r = {};
	for (let t of e) r[t.id] || (r[t.id] = []), r[t.id].push(t);
	return {
		byIssue: Object.keys(r).map((e) => ({
			id: e,
			kdb: b(t, e),
			title: t[e]?.title?.text?.replace(/^<h1>|<\/h1>$/g, "") ?? e,
			domain: r[e][0].domain,
			score: r[e].reduce((e, t) => e + t.score, 0),
			criticality: Math.max(...r[e].map((e) => e.criticality)),
			displayScore: Me(r[e].reduce((e, t) => e + t.score, 0)),
			count: r[e].length,
			important: r[e].some((e) => e.criticality >= v.Low)
		})),
		byGroup: C(e)
	};
}
function C(e) {
	let t = {
		info: 0,
		low: 0,
		medium: 0,
		high: 0,
		critical: 0
	}, n = {
		oasconformance: {
			validation: { ...t },
			semantics: { ...t },
			bestpractices: { ...t }
		},
		datavalidation: {
			parameters: { ...t },
			paths: { ...t },
			schema: { ...t },
			responseheader: { ...t },
			responsedefinition: { ...t }
		},
		security: {
			authentication: { ...t },
			authorization: { ...t },
			transport: { ...t }
		}
	};
	for (let t of e) {
		let e = t.domain, r = t.group, i = Ce[t.criticality];
		e !== void 0 && r !== void 0 && n[e]?.[r]?.[i] !== void 0 && n[e][r][i]++;
	}
	return n;
}
function je(e) {
	return e.byIssue.map((e) => ({
		value: e.id,
		label: e.title
	})).sort((e, t) => {
		let n = e.value.toLowerCase(), r = t.value.toLowerCase();
		return n < r ? -1 : +(n > r);
	});
}
function Me(e) {
	let t = Math.abs(Math.round(e));
	return e === 0 ? "0" : t >= 1 ? t.toString() : "less than 1";
}
var { startAudit: w, cancelAudit: T, showFullReport: E, showPartialReport: D, showNoReport: O, loadKdb: Ne, goToLine: k, copyIssueId: A, openLink: j, changeTab: M, changeFilter: N, setSqgTodo: Pe } = x.actions, Fe = {
	audit: x.reducer,
	theme: o,
	router: re
}, Ie = (e, t) => ae({
	reducer: Fe,
	middleware: (t) => t().prepend(e.middleware).concat(Se.logger),
	preloadedState: { theme: t }
}), P = () => pe(), F = fe, I = ce(), L = I.startListening;
function Le(e, t) {
	return L({
		matcher: s(E, D, O),
		effect: async (e, t) => {
			window.scrollTo(0, 0);
		}
	}), _e(L, t), se({
		goToLine: () => L({
			actionCreator: k,
			effect: async (t, n) => {
				e.postMessage({
					command: "goToLine",
					payload: t.payload
				});
			}
		}),
		copyIssueId: () => L({
			actionCreator: A,
			effect: async (t, n) => {
				e.postMessage({
					command: "copyIssueId",
					payload: t.payload
				});
			}
		}),
		openLink: () => L({
			actionCreator: j,
			effect: async (t, n) => {
				e.postMessage({
					command: "openLink",
					payload: t.payload
				});
			}
		})
	}), I;
}
//#endregion
//#region src/components/CollapsibleCard.tsx
var R = r();
function z({ children: e, defaultCollapsed: t }) {
	let [n, r] = (0, g.useState)(t ?? !0), i = e.slice(0, e.length - 1), a = e[e.length - 1];
	return /* @__PURE__ */ (0, R.jsxs)(Re, { children: [/* @__PURE__ */ (0, R.jsxs)(ze, {
		$collapsed: n,
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), r(!n);
		},
		children: [/* @__PURE__ */ (0, R.jsx)("div", { children: n ? /* @__PURE__ */ (0, R.jsx)(m, {}) : /* @__PURE__ */ (0, R.jsx)(l, {}) }), /* @__PURE__ */ (0, R.jsx)("div", { children: [...i] })]
	}), !n && /* @__PURE__ */ (0, R.jsx)(Be, { children: a })] });
}
var Re = t.div`
  margin: 8px;
  border: 1px solid var(${c.border});
  //background-color: var(${c.computedOne});
`, ze = t.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  //background-color: var(${c.computedOne});
  align-items: stretch;
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    display: flex;
    justify-content: center;
    > svg {
      fill: var(${c.foreground});
    }
  }
  & > div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  & > div:nth-child(3) {
    display: flex;
    align-items: center;
  }

  border-left: 5px solid transparent;
  ${({ $collapsed: e }) => !e && `border-bottom: 1px solid var(${c.border});
    border-left: 5px solid var(${c.badgeBackground});`}
`, B = t.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 600;
`, V = t.div`
  //margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, H = t.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${c.foreground});
  }
`, Be = t.div`
  //background-color: var(${c.computedOne});
`;
//#endregion
//#region src/app/audit/KdbArticle.tsx
function U({ article: e, issueId: t, lang: n, openLink: r }) {
	if (e === void 0) return console.warn(`No article found for issue ${t}`), /* @__PURE__ */ (0, R.jsxs)(G, { children: ["No KDB article available for the issue: ", t] });
	let i = (e) => {
		e.stopPropagation(), e.preventDefault(), r(e.target.href);
	}, a = (0, g.useRef)(null);
	(0, g.useEffect)(() => {
		let e = a.current.querySelectorAll("a");
		return e.forEach((e) => {
			e.addEventListener("click", i);
		}), () => {
			e.forEach((e) => {
				e.removeEventListener("click", i);
			});
		};
	});
	let o = [
		e ? e.description.text : "",
		W(e.example, n),
		W(e.exploit, n),
		W(e.remediation, n)
	].join("");
	return /* @__PURE__ */ (0, R.jsx)(G, {
		ref: a,
		dangerouslySetInnerHTML: { __html: o }
	});
}
function W(e, t) {
	return !e || !e.sections ? "" : e.sections.map((e) => {
		if (e.text) return e.text;
		if (e.code) return `<pre>${e.code[t]}</pre>`;
	}).join("");
}
var G = t.div`
  padding: 8px;
  weight: 500;
  font-size: var(${c.fontSize});

  > h2 {
    margin: 0;
    font-weight: 700;
    font-size: var(${c.fontSize});
  }

  & code {
    color: var(${c.foreground});
    font-family: monospace;
  }

  > pre {
    background-color: var(${c.computedOne});
    padding: 8px 4px;
    white-space: pre-wrap;
    word-break: break-all;
  }
`;
//#endregion
//#region src/app/audit/FilterButton.tsx
function Ve({ filters: e, onClick: t }) {
	return /* @__PURE__ */ (0, R.jsx)(He, {
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), t();
		},
		children: /* @__PURE__ */ (0, R.jsxs)(We, { children: [/* @__PURE__ */ (0, R.jsx)(le, {}), e !== 0 && /* @__PURE__ */ (0, R.jsx)(Ue, { children: e })] })
	});
}
var He = t.div`
  width: 34px;
  height: 26px;
  position: relative;
`, Ue = t.div`
  position: absolute;
  left: 18px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${c.buttonForeground});
  background-color: var(${c.buttonBackground});
  font-size: 12px;
`, We = t.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${c.buttonForeground});
  border: none;
  ${({ waiting: e }) => e && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${c.foreground});
  }
`;
//#endregion
//#region src/app/audit/FilterSeverity.tsx
function Ge() {
	let e = F((e) => e.audit.filter), t = P();
	return /* @__PURE__ */ (0, R.jsx)(Ke, { children: /* @__PURE__ */ (0, R.jsx)(h, {
		label: "Severity",
		options: [
			{
				label: "All",
				value: "all"
			},
			{
				label: "Critical",
				value: "critical"
			},
			{
				label: "High",
				value: "high"
			},
			{
				label: "Medium",
				value: "medium"
			},
			{
				label: "Low",
				value: "low"
			},
			{
				label: "Info",
				value: "info"
			}
		],
		placeholder: "All",
		onSelectedItemChange: (n) => {
			n && n.value !== "all" ? t(N({
				...e,
				severity: n?.value
			})) : t(N({
				...e,
				severity: void 0
			}));
		},
		selected: e?.severity || "all"
	}) });
}
var Ke = t.div`
  width: 264px;
`;
//#endregion
//#region src/app/audit/FilterResetAll.tsx
function qe() {
	let e = P();
	return /* @__PURE__ */ (0, R.jsxs)(Je, {
		onClick: (t) => {
			e(N({})), t.preventDefault(), t.stopPropagation();
		},
		children: [
			/* @__PURE__ */ (0, R.jsx)(f, {}),
			" ",
			/* @__PURE__ */ (0, R.jsx)("span", { children: "Reset filters" })
		]
	});
}
var Je = t.div`
  width: 264px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
//#endregion
//#region src/app/audit/FilterRule.tsx
function Ye() {
	let { issueTitles: e, filter: t } = F((e) => e.audit), n = P();
	return /* @__PURE__ */ (0, R.jsx)(Xe, { children: /* @__PURE__ */ (0, R.jsx)(h, {
		label: "Rules",
		options: [{
			label: "All",
			value: "all"
		}, ...e],
		placeholder: "All",
		onSelectedItemChange: (e) => {
			e && e.value !== "all" ? n(N({
				...t,
				rule: e?.value
			})) : n(N({
				...t,
				rule: void 0
			}));
		},
		selected: t?.severity || "all"
	}) });
}
var Xe = t.div`
  width: 264px;
`;
//#endregion
//#region src/app/audit/FilterDomain.tsx
function Ze() {
	let e = F((e) => e.audit.filter), t = P();
	return /* @__PURE__ */ (0, R.jsx)(Qe, { children: /* @__PURE__ */ (0, R.jsx)(h, {
		label: "Category",
		options: [
			{
				label: "All",
				value: "all"
			},
			{
				label: "Security",
				value: "security"
			},
			{
				label: "Data validation",
				value: "datavalidation"
			},
			{
				label: "OpenAPI format requirements",
				value: "oasconformance"
			}
		],
		placeholder: "All",
		onSelectedItemChange: (n) => {
			n && n.value !== "all" ? t(N({
				...e,
				domain: n?.value
			})) : t(N({
				...e,
				domain: void 0
			}));
		},
		selected: e?.domain || "all"
	}) });
}
var Qe = t.div`
  width: 264px;
`, $e = {
	security: [
		{
			label: "All",
			value: "all"
		},
		{
			label: "Authentication",
			value: "authentication"
		},
		{
			label: "Authorization",
			value: "authorization"
		},
		{
			label: "Transport",
			value: "transport"
		}
	],
	oasconformance: [
		{
			label: "All",
			value: "all"
		},
		{
			label: "Structure",
			value: "validation"
		},
		{
			label: "Semantic",
			value: "semantics"
		},
		{
			label: "Best practices",
			value: "bestpractices"
		}
	],
	datavalidation: [
		{
			label: "All",
			value: "all"
		},
		{
			label: "Parameters",
			value: "parameters"
		},
		{
			label: "Paths",
			value: "paths"
		},
		{
			label: "Schema",
			value: "schema"
		},
		{
			label: "Response headers",
			value: "responseheader"
		},
		{
			label: "Response definition",
			value: "responsedefinition"
		}
	]
};
function et() {
	let e = F((e) => e.audit.filter), t = P(), n = e.domain === void 0 ? [] : $e[e.domain];
	return /* @__PURE__ */ (0, R.jsx)(tt, { children: /* @__PURE__ */ (0, R.jsx)(h, {
		label: "Group",
		options: n,
		placeholder: "All",
		onSelectedItemChange: (n) => {
			n && n.value !== "all" ? t(N({
				...e,
				group: n?.value
			})) : t(N({
				...e,
				group: void 0
			}));
		},
		selected: e?.group || "all"
	}) });
}
var tt = t.div`
  width: 264px;
`;
//#endregion
//#region src/app/audit/FilterPanel.tsx
function nt() {
	let { filtered: e, filter: t, type: n } = F((e) => e.audit), r = P(), [i, a] = (0, g.useState)(!0), o = [
		"rule",
		"domain",
		"group",
		"severity"
	].filter((e) => t && t[e] !== void 0).length;
	return /* @__PURE__ */ (0, R.jsxs)(rt, { children: [
		t.ids !== void 0 && /* @__PURE__ */ (0, R.jsxs)(K, { children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [e.length, " issues"] }), /* @__PURE__ */ (0, R.jsxs)(at, {
			onClick: (e) => {
				r(N({})), e.preventDefault(), e.stopPropagation();
			},
			children: [
				/* @__PURE__ */ (0, R.jsx)(f, {}),
				" ",
				/* @__PURE__ */ (0, R.jsx)("span", { children: "Reset filters" })
			]
		})] }),
		t.ids === void 0 && /* @__PURE__ */ (0, R.jsxs)(K, { children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [e.length, " issues"] }), /* @__PURE__ */ (0, R.jsx)(Ve, {
			filters: o,
			onClick: () => a(!i)
		})] }),
		!i && /* @__PURE__ */ (0, R.jsxs)(it, { children: [
			n === "openapi" && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(Ze, {}), /* @__PURE__ */ (0, R.jsx)(et, {})] }),
			/* @__PURE__ */ (0, R.jsx)(Ge, {}),
			/* @__PURE__ */ (0, R.jsx)(Ye, {}),
			/* @__PURE__ */ (0, R.jsx)(qe, {})
		] })
	] });
}
var rt = t.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, K = t.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, it = t.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`, at = t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
//#endregion
//#region src/app/audit/FilteredIssues.tsx
function ot() {
	let { kdb: e, filtered: t, type: r, audit: { filename: i } } = F((e) => e.audit), a = P();
	return /* @__PURE__ */ (0, R.jsxs)(st, { children: [/* @__PURE__ */ (0, R.jsx)(nt, {}), t.map((t, r) => /* @__PURE__ */ (0, R.jsxs)(z, { children: [
		/* @__PURE__ */ (0, R.jsx)(B, { children: t.description }),
		/* @__PURE__ */ (0, R.jsx)(V, { children: /* @__PURE__ */ (0, R.jsxs)(V, { children: [
			/* @__PURE__ */ (0, R.jsxs)(H, { children: [
				/* @__PURE__ */ (0, R.jsx)(p, {}),
				" ",
				y[t.criticality]
			] }),
			/* @__PURE__ */ (0, R.jsxs)(H, { children: [
				/* @__PURE__ */ (0, R.jsx)(d, {}),
				" Score Impact ",
				t.displayScore
			] }),
			/* @__PURE__ */ (0, R.jsxs)(H, { children: [/* @__PURE__ */ (0, R.jsx)(u, {}), /* @__PURE__ */ (0, R.jsxs)("a", {
				href: "#",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), a(k({
						uri: t.documentUri,
						line: t.lineNo,
						pointer: t.pointer
					}));
				},
				children: [
					t.filename,
					":",
					t.lineNo + 1
				]
			})] }),
			/* @__PURE__ */ (0, R.jsxs)(H, { children: [/* @__PURE__ */ (0, R.jsx)(n, {}), /* @__PURE__ */ (0, R.jsx)("a", {
				href: "#",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), a(A(t.id));
				},
				children: "Issue ID"
			})] })
		] }) }),
		/* @__PURE__ */ (0, R.jsx)(U, {
			lang: i.toLowerCase().endsWith("json") ? "json" : "yaml",
			article: b(e, t.id),
			issueId: t.id,
			openLink: (e) => {
				a(j(e));
			}
		})
	] }, `issue-${r}`))] });
}
var st = t.div``;
//#endregion
//#region src/app/audit/InvalidReport.tsx
function ct({ onShowIssues: e }) {
	return /* @__PURE__ */ (0, R.jsx)(lt, {
		onClick: (t) => {
			t.preventDefault(), t.stopPropagation(), e();
		},
		children: /* @__PURE__ */ (0, R.jsxs)(ut, { children: [/* @__PURE__ */ (0, R.jsx)(p, {}), /* @__PURE__ */ (0, R.jsxs)("div", { children: [
			"Your API has structural or semantic issues. Fix these first and run Security Audit again to get the full audit report. Click ",
			/* @__PURE__ */ (0, R.jsx)("a", {
				href: "#",
				children: "here"
			}),
			" to display the issues."
		] })] })
	});
}
var lt = t.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${c.errorBorder});
  background-color: var(${c.errorBackground});
  color: var(${c.errorForeground});
  cursor: pointer;
`, ut = t.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  > svg {
    fill: var(${c.errorForeground});
  }
  > div:nth-child(2) {
    flex: 1;
  }
`;
//#endregion
//#region src/app/audit/Locations.tsx
function q({ issueId: e, issues: t }) {
	let n = P(), [r, i] = (0, g.useState)(!1), a = t.filter((t) => t.id === e), o = r ? a.length : 4, s = a.slice(0, o);
	return s.sort((e, t) => {
		let n = e.filename.localeCompare(t.filename);
		return n === 0 ? e.lineNo - t.lineNo : n;
	}), /* @__PURE__ */ (0, R.jsxs)(dt, { children: [
		/* @__PURE__ */ (0, R.jsxs)("h2", { children: [a.length, " results with this issue"] }),
		/* @__PURE__ */ (0, R.jsx)("div", { children: s.map((e) => /* @__PURE__ */ (0, R.jsxs)(ft, { children: [/* @__PURE__ */ (0, R.jsx)(u, {}), /* @__PURE__ */ (0, R.jsxs)("a", {
			href: "#",
			onClick: (t) => {
				t.preventDefault(), t.stopPropagation(), n(k({
					uri: e.documentUri,
					line: e.lineNo,
					pointer: e.pointer
				}));
			},
			children: [
				e.filename,
				":",
				e.lineNo + 1
			]
		})] }, `${e.filename}:${e.lineNo}`)) }),
		!r && a.length > s.length && /* @__PURE__ */ (0, R.jsxs)("a", {
			href: "#",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), i(!0);
			},
			children: [
				"Show ",
				a.length - s.length,
				" more"
			]
		}),
		r && /* @__PURE__ */ (0, R.jsx)("a", {
			href: "#",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), i(!1);
			},
			children: "Show less"
		})
	] });
}
var dt = t.div`
  padding-top: 8px;
  padding-left: 8px;
  > h2 {
    margin: 0;
    font-weight: 700;
    font-size: var(${c.fontSize});
  }
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, ft = t.div`
  display: flex;
  align-items: center;
  margin: 4px;
  gap: 4px;
  > svg {
    fill: var(${c.foreground});
  }
`;
//#endregion
//#region src/app/audit/PriorityIssues.tsx
function pt() {
	let { stats: e, issues: t, audit: { filename: r } } = F((e) => e.audit), i = P(), a = e.byIssue.filter((e) => e.important).slice().sort((e, t) => t.count - e.count).slice(0, 4), o = e.byIssue.filter((e) => e.important).slice().sort((e, t) => t.score - e.score).slice(0, 4);
	return /* @__PURE__ */ (0, R.jsxs)(mt, { children: [
		/* @__PURE__ */ (0, R.jsx)(J, { children: "Most common issues" }),
		a.map((e, a) => /* @__PURE__ */ (0, R.jsxs)(z, { children: [
			/* @__PURE__ */ (0, R.jsx)(B, { children: e.title }),
			/* @__PURE__ */ (0, R.jsx)(V, { children: /* @__PURE__ */ (0, R.jsxs)(V, { children: [
				/* @__PURE__ */ (0, R.jsxs)(H, { children: [
					/* @__PURE__ */ (0, R.jsx)(p, {}),
					" ",
					y[e.criticality]
				] }),
				/* @__PURE__ */ (0, R.jsxs)(H, { children: [
					/* @__PURE__ */ (0, R.jsx)(d, {}),
					" Score impact: ",
					e.displayScore
				] }),
				/* @__PURE__ */ (0, R.jsxs)(H, { children: [
					/* @__PURE__ */ (0, R.jsx)(u, {}),
					" ",
					e.count,
					" result(s)"
				] }),
				/* @__PURE__ */ (0, R.jsxs)(H, { children: [
					/* @__PURE__ */ (0, R.jsx)(n, {}),
					" ",
					/* @__PURE__ */ (0, R.jsx)("a", {
						href: "#",
						onClick: (t) => {
							t.preventDefault(), t.stopPropagation(), i(A(e.id));
						},
						children: "Issue ID"
					})
				] })
			] }) }),
			/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)(q, {
				issueId: e.id,
				issues: t
			}), /* @__PURE__ */ (0, R.jsx)(U, {
				lang: r.toLowerCase().endsWith("json") ? "json" : "yaml",
				article: e.kdb,
				openLink: (e) => i(j(e)),
				issueId: e.id
			})] })
		] }, `issue-${a}`)),
		/* @__PURE__ */ (0, R.jsx)(J, { children: "Opportunities" }),
		o.map((e, n) => /* @__PURE__ */ (0, R.jsxs)(z, { children: [
			/* @__PURE__ */ (0, R.jsx)(B, { children: e.title }),
			/* @__PURE__ */ (0, R.jsx)(V, { children: /* @__PURE__ */ (0, R.jsxs)(V, { children: [
				/* @__PURE__ */ (0, R.jsxs)(H, { children: [
					/* @__PURE__ */ (0, R.jsx)(p, {}),
					" Count ",
					e.count
				] }),
				/* @__PURE__ */ (0, R.jsxs)(H, { children: [
					/* @__PURE__ */ (0, R.jsx)(d, {}),
					" Score impact: ",
					e.displayScore
				] }),
				/* @__PURE__ */ (0, R.jsxs)(H, { children: [
					/* @__PURE__ */ (0, R.jsx)(u, {}),
					" ",
					e.count,
					" result(s)"
				] })
			] }) }),
			/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)(q, {
				issueId: e.id,
				issues: t
			}), /* @__PURE__ */ (0, R.jsx)(U, {
				lang: r.toLowerCase().endsWith("json") ? "json" : "yaml",
				article: e.kdb,
				openLink: (e) => i(j(e)),
				issueId: e.id
			})] })
		] }, `issue-${n}`))
	] });
}
var mt = t.div`
  position: relative;
`, J = t.div`
  margin: 14px;
  font-size: 12px;
  font-weight: 500;
`;
//#endregion
//#region src/components/CollapsibleCaret.tsx
function ht({ isOpen: e, style: t, onClick: n }) {
	return e ? /* @__PURE__ */ (0, R.jsx)(l, {
		onClick: n,
		style: {
			cursor: "pointer",
			fill: `var(${c.foreground})`,
			...t
		}
	}) : /* @__PURE__ */ (0, R.jsx)(m, {
		onClick: n,
		style: {
			cursor: "pointer",
			fill: `var(${c.foreground})`,
			...t
		}
	});
}
//#endregion
//#region src/app/audit/SqgList.tsx
function gt({ sqgs: e, selected: t, onSelect: n }) {
	return /* @__PURE__ */ (0, R.jsx)(_t, { children: e.map((e, r) => /* @__PURE__ */ (0, R.jsx)(vt, {
		$selected: e.id === t,
		onClick: (i) => {
			i.preventDefault(), i.stopPropagation(), t !== e.id && n(r);
		},
		children: e.name
	}, e.id)) });
}
var _t = t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`, vt = t.div`
  display: flex;
  height: 28px;
  min-width: 100px;
  border-radius: 16px;
  margin-left: 4px;
  margin-right: 4px;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid var(${c.border});
  color: var(${c.foreground});
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${({ $selected: e }) => e ? `background-color: var(${c.computedTwo});` : `background-color: var(${c.computedOne});`}
`;
//#endregion
//#region src/app/audit/SqgDetails.tsx
function yt({ sqg: e, summary: t }) {
	let n = e.directives.minimumAssessmentScores;
	return e.directives.subcategoryRules, e.directives.issueRules, /* @__PURE__ */ (0, R.jsxs)(bt, { children: [
		/* @__PURE__ */ (0, R.jsx)("h4", { children: "Minimum acceptable score" }),
		/* @__PURE__ */ (0, R.jsxs)(xt, { children: [
			/* @__PURE__ */ (0, R.jsx)("div", { children: "Score" }),
			/* @__PURE__ */ (0, R.jsx)("div", { children: "current" }),
			/* @__PURE__ */ (0, R.jsx)("div", { children: "Minimum acceptable" })
		] }),
		/* @__PURE__ */ (0, R.jsxs)(Y, { children: [
			/* @__PURE__ */ (0, R.jsx)("div", { children: "Global score" }),
			/* @__PURE__ */ (0, R.jsx)(X, {
				$highlight: t.all < n.global,
				children: t.all
			}),
			/* @__PURE__ */ (0, R.jsx)(X, { children: n.global })
		] }),
		/* @__PURE__ */ (0, R.jsxs)(Y, { children: [
			/* @__PURE__ */ (0, R.jsx)("div", { children: "Security score" }),
			/* @__PURE__ */ (0, R.jsx)(X, {
				$highlight: t.security.value < n.security,
				children: t.security.value
			}),
			/* @__PURE__ */ (0, R.jsx)(X, { children: n.security })
		] }),
		/* @__PURE__ */ (0, R.jsxs)(Y, { children: [
			/* @__PURE__ */ (0, R.jsx)("div", { children: "Data validation score" }),
			/* @__PURE__ */ (0, R.jsx)(X, {
				$highlight: t.datavalidation.value < n.dataValidation,
				children: t.datavalidation.value
			}),
			/* @__PURE__ */ (0, R.jsx)(X, { children: n.dataValidation })
		] })
	] });
}
var bt = t.div``, xt = t.div`
  display: flex;
  background-color: var(${c.computedTwo});
  border-radius: 2px;
  padding: 8px;
  > div {
    flex: 1;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
`, Y = t.div`
  display: flex;
  > div {
    flex: 1;
    margin: 8px;
  }
`, X = t.div`
  ${({ $highlight: e }) => e && "font-weight: 700;"}
`;
//#endregion
//#region src/app/audit/SqgLevelViolations.tsx
function St({ sqg: e, stats: t }) {
	let n = P(), r = e.directives.subcategoryRules, i = t.byGroup, a = {
		security: [
			{
				name: "Authentication",
				domain: "security",
				group: "authentication",
				level: r.security.authentication,
				violations: Q(r.security.authentication, i.security.authentication)
			},
			{
				name: "Authorization",
				domain: "security",
				group: "authorization",
				level: r.security.authorization,
				violations: Q(r.security.authorization, i.security.authorization)
			},
			{
				name: "Transport",
				domain: "security",
				group: "transport",
				level: r.security.transport,
				violations: Q(r.security.transport, i.security.transport)
			}
		],
		data: [
			{
				name: "Paths",
				domain: "datavalidation",
				group: "paths",
				level: r.dataValidation.paths,
				violations: Q(r.dataValidation.paths, i.datavalidation.paths)
			},
			{
				name: "Parameters",
				domain: "datavalidation",
				group: "parameters",
				level: r.dataValidation.parameters,
				violations: Q(r.dataValidation.parameters, t.byGroup.datavalidation.parameters)
			},
			{
				name: "Schema",
				domain: "datavalidation",
				group: "schema",
				level: r.dataValidation.schema,
				violations: Q(r.dataValidation.schema, i.datavalidation.schema)
			},
			{
				name: "Response Definition",
				domain: "datavalidation",
				group: "responsedefinition",
				level: r.dataValidation.responseDefinition,
				violations: Q(r.dataValidation.responseDefinition, i.datavalidation.responsedefinition)
			},
			{
				name: "Response Headers",
				domain: "datavalidation",
				group: "responseheader",
				level: r.dataValidation.responseHeaders,
				violations: Q(r.dataValidation.responseHeaders, i.datavalidation.responseheader)
			}
		]
	};
	return /* @__PURE__ */ (0, R.jsxs)(Ct, { children: [
		/* @__PURE__ */ (0, R.jsx)("h4", { children: "Allowed issue security levels" }),
		/* @__PURE__ */ (0, R.jsxs)(wt, { children: [
			/* @__PURE__ */ (0, R.jsx)("div", { children: "Category" }),
			/* @__PURE__ */ (0, R.jsx)("div", { children: "threshold" }),
			/* @__PURE__ */ (0, R.jsx)("div", { children: "issues found" })
		] }),
		/* @__PURE__ */ (0, R.jsx)(Z, { children: "Security" }),
		a.security.filter((e) => e.violations.length > 0).map((e, t) => /* @__PURE__ */ (0, R.jsxs)(Tt, { children: [
			/* @__PURE__ */ (0, R.jsx)("div", { children: e.name }),
			/* @__PURE__ */ (0, R.jsx)("div", { children: Dt(e.level) }),
			/* @__PURE__ */ (0, R.jsx)("a", {
				href: "#",
				onClick: (t) => {
					t.stopPropagation(), t.preventDefault(), n(M("issues")), n(N({
						severity: e.violations[0].level,
						domain: e.domain,
						group: e.group
					}));
				},
				children: e.violations.map((e) => `${e.level} ${e.count}`).join(", ")
			})
		] }, t)),
		/* @__PURE__ */ (0, R.jsx)(Z, { children: "Data validation" }),
		a.data.filter((e) => e.violations.length > 0).map((e, t) => /* @__PURE__ */ (0, R.jsxs)(Tt, { children: [
			/* @__PURE__ */ (0, R.jsx)("div", { children: e.name }),
			/* @__PURE__ */ (0, R.jsx)("div", { children: Dt(e.level) }),
			/* @__PURE__ */ (0, R.jsx)("a", {
				href: "#",
				onClick: (t) => {
					t.stopPropagation(), t.preventDefault(), n(M("issues")), n(N({
						severity: e.violations[0].level,
						domain: e.domain,
						group: e.group
					}));
				},
				children: e.violations.map((e) => `${e.level} ${e.count}`).join(", ")
			})
		] }, t))
	] });
}
var Ct = t.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, wt = t.div`
  display: flex;
  background-color: var(${c.computedTwo});
  border-radius: 2px;
  padding: 8px;
  > div {
    flex: 1;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
`, Z = t.div`
  display: flex;
  background-color: var(${c.computedOne});
  border-radius: 2px;
  padding: 8px;
`, Tt = t.div`
  display: flex;
  > a {
    flex: 1;
    text-transform: capitalize;
    margin: 8px;
  }
  > div {
    flex: 1;
    margin: 8px;
  }
`;
function Q(e, t) {
	if (e === "none") return [];
	let n = _.indexOf(e), r = [];
	for (let e of _.slice(n)) t[e] > 0 && r.push({
		level: e,
		count: t[e]
	});
	return r;
}
var Et = {
	info: "All issues are rejected",
	low: "Issues up to level Info allowed, levels Low to Critical rejected",
	medium: "Issues up to level Low allowed, levels Medium to Critical rejected",
	high: "Issues up to level Medium allowed, levels High to Critical rejected",
	critical: "Only Critical issues are rejected",
	none: "No restrictions"
};
function Dt(e) {
	return Et[e];
}
//#endregion
//#region src/app/audit/SqgRuleViolations.tsx
function Ot({ sqg: e, stats: t }) {
	let n = P(), r = e.directives.issueRules ?? [], i = t.byIssue.filter((e) => r.includes(e.id));
	return i.length === 0 ? null : /* @__PURE__ */ (0, R.jsxs)(kt, { children: [/* @__PURE__ */ (0, R.jsx)("h4", { children: "Forbidden issues with problem found" }), i.map((e) => /* @__PURE__ */ (0, R.jsx)("div", { children: /* @__PURE__ */ (0, R.jsx)("a", {
		href: "#",
		onClick: (t) => {
			t.preventDefault(), t.stopPropagation(), n(M("issues")), n(N({ rule: e.id }));
		},
		children: e.title
	}) }))] });
}
var kt = t.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
//#endregion
//#region src/app/audit/SqgCompliance.tsx
function At({ compliance: e, summary: t, stats: n }) {
	let [r, i] = (0, g.useState)(0), a = e.sqgsDetail[r];
	return /* @__PURE__ */ (0, R.jsxs)(jt, { children: [
		/* @__PURE__ */ (0, R.jsx)(gt, {
			sqgs: e.sqgsDetail,
			onSelect: i,
			selected: e.sqgsDetail[r].id
		}),
		/* @__PURE__ */ (0, R.jsx)(yt, {
			sqg: a,
			summary: t
		}),
		/* @__PURE__ */ (0, R.jsx)(St, {
			sqg: a,
			stats: n
		}),
		/* @__PURE__ */ (0, R.jsx)(Ot, {
			sqg: a,
			stats: n
		})
	] });
}
var jt = t.div`
  padding: 8px;
  color: var(${c.foreground});
  background-color: var(${c.background});
  border-top: 1px solid var(${c.errorBorder});
`;
//#endregion
//#region src/app/audit/SqgReport.tsx
function Mt() {
	let { compliance: e, summary: t } = F((e) => e.audit.audit), n = F((e) => e.audit.stats), r = F((e) => e.audit.sqgTodo), i = P(), a = (e) => {
		i(Pe(e));
	}, [o, s] = (0, g.useState)(!1);
	return e === void 0 ? null : e.acceptance === "yes" ? /* @__PURE__ */ (0, R.jsx)(Ft, { children: /* @__PURE__ */ (0, R.jsx)(be, { message: "Security quality gates passed" }) }) : /* @__PURE__ */ (0, R.jsxs)(Nt, { children: [/* @__PURE__ */ (0, R.jsxs)(Pt, { children: [
		/* @__PURE__ */ (0, R.jsx)(p, {}),
		/* @__PURE__ */ (0, R.jsx)("div", { children: "Security quality gates failed" }),
		/* @__PURE__ */ (0, R.jsx)(ye, {
			value: r,
			onChange: a
		}),
		"Show only SQG to-do list",
		/* @__PURE__ */ (0, R.jsx)(ht, {
			isOpen: o,
			onClick: () => s(!o),
			style: {
				width: 14,
				height: 14
			}
		})
	] }), o && /* @__PURE__ */ (0, R.jsx)(At, {
		compliance: e,
		summary: t,
		stats: n
	})] });
}
var Nt = t.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${c.errorBorder});
  background-color: var(${c.errorBackground});
  color: var(${c.errorForeground});
`, Pt = t.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  > svg {
    fill: var(${c.errorForeground});
  }
  > div:nth-child(2) {
    flex: 1;
  }
`, Ft = t.div`
  margin: 8px;
`;
//#endregion
//#region src/app/audit/SummaryTiles.tsx
function It() {
	let e = F((e) => e.audit.audit.summary), t = F((e) => e.audit.type), n = P();
	return /* @__PURE__ */ (0, R.jsx)(Lt, { children: /* @__PURE__ */ (0, R.jsxs)(Rt, { children: [/* @__PURE__ */ (0, R.jsxs)("div", {
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), n(M("issues")), n(N({}));
		},
		children: [
			/* @__PURE__ */ (0, R.jsx)("div", { children: "Global score" }),
			/* @__PURE__ */ (0, R.jsxs)("div", { children: [e.all, "/100"] }),
			/* @__PURE__ */ (0, R.jsx)("div", {})
		]
	}), t !== "graphql" && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)("div", {
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), n(M("issues")), n(N({ domain: "security" }));
		},
		children: [
			/* @__PURE__ */ (0, R.jsx)("div", { children: "Security score" }),
			/* @__PURE__ */ (0, R.jsxs)("div", { children: [
				e.security.value,
				"/",
				e.security.max
			] }),
			/* @__PURE__ */ (0, R.jsx)("div", {})
		]
	}), /* @__PURE__ */ (0, R.jsxs)("div", {
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), n(M("issues")), n(N({ domain: "datavalidation" }));
		},
		children: [
			/* @__PURE__ */ (0, R.jsx)("div", { children: "Data validation score" }),
			/* @__PURE__ */ (0, R.jsxs)("div", { children: [
				e.datavalidation.value,
				"/",
				e.datavalidation.max
			] }),
			/* @__PURE__ */ (0, R.jsx)("div", {})
		]
	})] })] }) });
}
var Lt = t.div`
  margin: 8px;
`, Rt = t.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    border: 1px solid var(${c.border});
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      background-color: var(${c.computedOne});
    }
    & > div:nth-child(1) {
      font-weight: 700;
      font-size: 12px;
    }
    & > div:nth-child(2) {
      font-size: 16px;
      font-weight: 700;
    }
    & > div:nth-child(3) {
      font-size: 12px;
    }
  }
`;
//#endregion
//#region src/app/audit/AuditReport.tsx
function zt() {
	let e = P(), { tab: t, audit: n } = F((e) => e.audit);
	return /* @__PURE__ */ (0, R.jsxs)(Bt, { children: [
		n.valid === !1 && /* @__PURE__ */ (0, R.jsx)(ct, { onShowIssues: () => {
			e(M("issues")), e(N({
				domain: "oasconformance",
				severity: "critical"
			}));
		} }),
		/* @__PURE__ */ (0, R.jsx)(It, {}),
		/* @__PURE__ */ (0, R.jsx)(Mt, {}),
		/* @__PURE__ */ (0, R.jsx)(ve, {
			activeTab: t,
			setActiveTab: (t) => e(M(t)),
			tabs: [{
				id: "priority",
				title: "Priority",
				content: /* @__PURE__ */ (0, R.jsx)(pt, {})
			}, {
				id: "issues",
				title: "Issues",
				content: /* @__PURE__ */ (0, R.jsx)(ot, {})
			}]
		})
	] });
}
var Bt = t.div``;
//#endregion
//#region src/app/audit/NoReport.tsx
function Vt() {
	return /* @__PURE__ */ (0, R.jsxs)(Ht, { children: [/* @__PURE__ */ (0, R.jsx)(i, {}), "There is no Security Audit report available for this file"] });
}
var Ht = t.div`
  display: flex;
  margin: 8px;
  padding: 8px;
  gap: 8px;
  align-items: center;
  border: 1px solid var(${c.border});
  font-size: 14px;
  > svg {
    color: var(${c.foreground});
  }
`;
//#endregion
//#region src/app/audit/Loading.tsx
function Ut() {
	return /* @__PURE__ */ (0, R.jsxs)(Wt, { children: [/* @__PURE__ */ (0, R.jsxs)(Kt, { children: [
		/* @__PURE__ */ (0, R.jsx)("div", {}),
		/* @__PURE__ */ (0, R.jsx)("div", {}),
		/* @__PURE__ */ (0, R.jsx)("div", {})
	] }), /* @__PURE__ */ (0, R.jsx)(qt, {})] });
}
var Wt = t.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`, Gt = de`
  0% {
    background-color: var(${c.computedOne});
  }
  100% {
    background-color: var(${c.computedTwo});
  }
`, Kt = t.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  & > div {
    flex: 1;
    display: flex;
    height: 100px;
    flex-direction: column;
    border: 1px solid var(${c.border});
    animation: ${Gt} 1s linear infinite alternate;
  }
`, qt = t.div`
  border: 1px solid var(${c.border});
  height: 15rem;
  animation: ${Gt} 1s linear infinite alternate;
`, $ = [
	{
		id: "starting",
		title: "Starting",
		element: /* @__PURE__ */ (0, R.jsx)("div", {})
	},
	{
		id: "blank",
		title: "Blank",
		element: /* @__PURE__ */ (0, R.jsx)("div", {}),
		when: T
	},
	{
		id: "start-audit",
		title: "Audit is starting",
		element: /* @__PURE__ */ (0, R.jsx)(Ut, {}),
		when: w
	},
	{
		id: "no-report",
		title: "No Audit Report",
		element: /* @__PURE__ */ (0, R.jsx)(Vt, {}),
		when: O
	},
	{
		id: "audit-report",
		title: "Security Audit",
		element: /* @__PURE__ */ (0, R.jsx)(zt, {}),
		when: E
	},
	{
		id: "audit-report",
		title: "Security Audit",
		element: /* @__PURE__ */ (0, R.jsx)(zt, {}),
		when: D
	}
], Jt = {
	startAudit: w,
	cancelAudit: T,
	showFullReport: E,
	showPartialReport: D,
	showNoReport: O,
	loadKdb: Ne,
	changeTheme: ie
};
function Yt() {
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(a, {}), /* @__PURE__ */ (0, R.jsx)(ge, {})] });
}
function Xt(e, t) {
	let n = Ie(Le(e, $), t);
	(0, xe.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, R.jsx)(g.StrictMode, { children: /* @__PURE__ */ (0, R.jsx)(me, {
		store: n,
		children: /* @__PURE__ */ (0, R.jsx)(oe.Provider, {
			value: $,
			children: /* @__PURE__ */ (0, R.jsx)(Yt, {})
		})
	}) })), window.addEventListener("message", ee(n, Jt));
}
window.renderWebView = Xt;
//#endregion
