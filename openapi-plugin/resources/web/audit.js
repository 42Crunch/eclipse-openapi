import { c as re, a as le, u as de, b as ce, r as pe, t as ue, l as he, d as xe, i as ve, s as ge, j as e, T as p, e as c, f as y, m as fe, g as me, R as je, P as ye, h as be, k as we, n as Ce, o as $e, p as Se } from "./TriangleExclamation.D0e1MsJn.js";
import { s as ke } from "./listener.BFeJqLAd.js";
import { T as Le } from "./Tabs.Ir0F6yfI.js";
import { S as Ie, a as X, b as Y } from "./Xmark.CI703j_o.js";
import { S } from "./ExclamationCircle.Cal4AUVQ.js";
import { S as k, a as Ae } from "./Switch.DpHxbObh.js";
import { S as J } from "./AngleDown.CaeaMDqj.js";
import { S as Z } from "./AngleUp.COZ6HPtA.js";
import { P as I } from "./Select.D_kX0UId.js";
import { B as Te, S as De } from "./Banner.C66VmuCw.js";
const D = ["info", "low", "medium", "high", "critical"], g = {
  Info: 1,
  Low: 2,
  Medium: 3,
  High: 4,
  Critical: 5
}, Pe = {
  [g.Info]: "info",
  [g.Low]: "low",
  [g.Medium]: "medium",
  [g.High]: "high",
  [g.Critical]: "critical"
}, ee = {
  [g.Info]: "Info",
  [g.Low]: "Low",
  [g.Medium]: "Medium",
  [g.High]: "High",
  [g.Critical]: "Critical"
}, Re = {
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
      datavalidation: { max: 0, value: 0 },
      security: { max: 0, value: 0 },
      oasconformance: { max: 0, value: 0 }
    }
  },
  tab: "priority",
  issues: [],
  filtered: [],
  stats: {
    byIssue: [],
    byGroup: te([])
  },
  kdb: {},
  issueTitles: [],
  filter: {},
  sqgTodo: !1,
  type: "openapi"
}, ie = re({
  name: "audit",
  initialState: Re,
  reducers: {
    startAudit: (i, t) => {
    },
    cancelAudit: (i, t) => {
    },
    showFullReport: (i, { payload: t }) => {
      i.audit.filename !== t.filename && (i.tab = "priority", i.filter = {}, i.sqgTodo = !1, i.type = t.filename.toLowerCase().endsWith(".graphql") || t.filename.toLowerCase().endsWith(".gql") || t.filename.toLowerCase().endsWith(".graphqls") || t.filename.toLowerCase().endsWith(".sdl") ? "graphql" : "openapi"), (t.compliance === void 0 || t.compliance.acceptance === "yes") && (i.sqgTodo = !1), i.audit = t, C(i);
    },
    showPartialReport: (i, {
      payload: { report: t, uri: n, ids: o }
    }) => {
      i.audit = t, i.filter = { ids: o }, i.tab = "issues", i.sqgTodo = !1, i.type = t.filename.toLowerCase().endsWith(".graphql") || t.filename.toLowerCase().endsWith(".graphqls") || t.filename.toLowerCase().endsWith(".sdl") ? "graphql" : "openapi", C(i);
    },
    loadKdb: (i, { payload: t }) => {
      i.kdb = t, C(i);
    },
    changeTab: (i, t) => {
      i.tab = t.payload;
    },
    changeFilter: (i, { payload: t }) => {
      i.filter = t, C(i);
    },
    setSqgTodo: (i, { payload: t }) => {
      i.sqgTodo = t, i.filter = {}, C(i);
    },
    showNoReport: (i) => {
    },
    goToLine: (i, t) => {
    },
    copyIssueId: (i, t) => {
    },
    openLink: (i, t) => {
    }
  }
});
function C(i) {
  const { issues: t, filtered: n, stats: o, titles: d } = qe(
    i.sqgTodo ? i.audit.todo : i.audit.issues,
    i.audit.files,
    i.kdb,
    i.filter,
    i.type
  );
  i.issues = t, i.filtered = n, i.stats = o, i.issueTitles = d;
}
function qe(i, t, n, o, d) {
  const r = ze(i, t, n, d), s = Me(r, n, d), l = Ve(s), a = Fe(r, o);
  return { issues: r, filtered: a, stats: s, titles: l };
}
function Fe(i, t) {
  const n = (a, f) => t.ids === void 0 || t.ids.includes(f), o = (a) => t.domain === void 0 || a.domain === (t == null ? void 0 : t.domain), d = (a) => t.group === void 0 || a.group === (t == null ? void 0 : t.group), r = (a) => (t == null ? void 0 : t.rule) === void 0 || a.id === t.rule, s = t.severity !== void 0 ? D.indexOf(t.severity) + 1 : 0, l = (a) => t.severity === void 0 || a.criticality >= s;
  return i.filter((a, f) => n(a, f) && o(a) && d(a) && r(a) && l(a));
}
function ze(i, t, n, o) {
  return Object.entries(i).map(([r, s]) => s.map((l, a) => ({
    ...l,
    domain: o === "graphql" ? "datavalidation" : n[l.id].group,
    group: o === "graphql" ? "schema" : n[l.id].subgroup,
    filename: t[l.documentUri].relative
  }))).reduce((r, s) => r.concat(s), []);
}
function Me(i, t, n) {
  const o = {};
  for (const s of i)
    o[s.id] || (o[s.id] = []), o[s.id].push(s);
  const d = Object.keys(o).map((s) => ({
    id: s,
    kdb: n === "graphql" ? He : t[s] || Oe,
    title: n === "graphql" ? o[s][0].description : t[s].title.text.replace(/^<h1>|<\/h1>$/g, ""),
    domain: o[s][0].domain,
    score: o[s].reduce((l, a) => l + a.score, 0),
    criticality: Math.max(...o[s].map((l) => l.criticality)),
    displayScore: Be(o[s].reduce((l, a) => l + a.score, 0)),
    count: o[s].length,
    important: o[s].some((l) => l.criticality >= g.Low)
  })), r = te(i);
  return { byIssue: d, byGroup: r };
}
function te(i) {
  var o, d;
  const t = { info: 0, low: 0, medium: 0, high: 0, critical: 0 }, n = {
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
  for (const r of i) {
    const s = r.domain, l = r.group, a = Pe[r.criticality];
    s !== void 0 && l !== void 0 && //@ts-ignore
    ((d = (o = n[s]) == null ? void 0 : o[l]) == null ? void 0 : d[a]) !== void 0 && n[s][l][a]++;
  }
  return n;
}
function Ve(i) {
  return i.byIssue.map((t) => ({ value: t.id, label: t.title })).sort((t, n) => {
    const o = t.value.toLowerCase(), d = n.value.toLowerCase();
    return o < d ? -1 : o > d ? 1 : 0;
  });
}
function Be(i) {
  const t = Math.abs(Math.round(i));
  return i === 0 ? "0" : t >= 1 ? t.toString() : "less than 1";
}
const Oe = {
  title: {
    text: "<h1>Article not found</h1>"
  },
  description: {
    text: `<p>Whoops! Looks like there has been an oversight and we are missing a page for this issue.</p>
           <p><a href="https://apisecurity.io/contact-us/">Let us know</a> the title of the issue, and we make sure to add it to the encyclopedia.</p>`
  }
}, He = {
  title: {
    text: ""
  },
  description: {
    text: ""
  }
}, {
  startAudit: oe,
  cancelAudit: ne,
  showFullReport: z,
  showPartialReport: M,
  showNoReport: V,
  loadKdb: Ne,
  goToLine: B,
  copyIssueId: O,
  openLink: L,
  changeTab: j,
  changeFilter: u,
  setSqgTodo: We
} = ie.actions, Ee = ie.reducer, Ge = {
  audit: Ee,
  theme: ue,
  router: pe
}, Ue = (i, t) => le({
  reducer: Ge,
  middleware: (n) => n().prepend(i.middleware).concat(he),
  preloadedState: {
    theme: t
  }
}), h = () => de(), x = ce, se = xe(), $ = se.startListening;
function Ke(i, t) {
  const n = {
    goToLine: () => $({
      actionCreator: B,
      effect: async (o, d) => {
        i.postMessage({
          command: "goToLine",
          payload: o.payload
        });
      }
    }),
    copyIssueId: () => $({
      actionCreator: O,
      effect: async (o, d) => {
        i.postMessage({
          command: "copyIssueId",
          payload: o.payload
        });
      }
    }),
    openLink: () => $({
      actionCreator: L,
      effect: async (o, d) => {
        i.postMessage({
          command: "openLink",
          payload: o.payload
        });
      }
    })
  };
  return $({
    matcher: ve(z, M, V),
    effect: async (o, d) => {
      window.scrollTo(0, 0);
    }
  }), ke($, t), ge(n), se;
}
const P = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "M476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87-34.63 0-77.87 8.003-137.2 32.05V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464c0 13.3 10.75 24 24 24s24-10.75 24-24V384c53.59-23.86 96.02-31.81 132.8-31.81 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09 13.6-4.98 21.5-16.48 21.5-28.78V30.73C512 11.1 495.3 0 476.3 0M464 319.8c-30.31 10.82-58.08 16.1-84.6 16.1-30.8 0-58.31-7-87.44-14.41-32.01-8.141-68.29-17.37-111.1-17.37-42.35 0-85.99 9.09-132.8 27.73V84.14l18.03-7.301c47.39-19.2 86.38-28.54 119.2-28.54 28.24.004 49.12 6.711 73.31 14.48 25.38 8.148 54.13 17.39 90.58 17.39 35.43 0 72.24-8.496 114.9-26.61V319.8z" }) });
function R({
  children: i,
  defaultCollapsed: t
}) {
  const [n, o] = y.useState(t ?? !0), d = i.slice(0, i.length - 1), r = i[i.length - 1];
  return /* @__PURE__ */ e.jsxs(_e, { children: [
    /* @__PURE__ */ e.jsxs(
      Qe,
      {
        $collapsed: n,
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), o(!n);
        },
        children: [
          /* @__PURE__ */ e.jsx("div", { children: n ? /* @__PURE__ */ e.jsx(J, {}) : /* @__PURE__ */ e.jsx(Z, {}) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            ...d
          ] })
        ]
      }
    ),
    !n && /* @__PURE__ */ e.jsx(Xe, { children: r })
  ] });
}
const _e = c.div`
  margin: 8px;
  border: 1px solid var(${p.border});
  //background-color: var(${p.computedOne});
`, Qe = c.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  //background-color: var(${p.computedOne});
  align-items: stretch;
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    display: flex;
    justify-content: center;
    > svg {
      fill: var(${p.foreground});
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
  ${({ $collapsed: i }) => !i && `border-bottom: 1px solid var(${p.border});
    border-left: 5px solid var(${p.badgeBackground});`}
`, q = c.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 600;
`, w = c.div`
  //margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, v = c.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${p.foreground});
  }
`, Xe = c.div`
  //background-color: var(${p.computedOne});
`;
function F({
  article: i,
  lang: t,
  openLink: n
}) {
  const o = (s) => {
    s.stopPropagation(), s.preventDefault(), n(s.target.href);
  }, d = y.useRef(null);
  y.useEffect(() => {
    const s = d.current.querySelectorAll("a");
    return s.forEach((l) => {
      l.addEventListener("click", o);
    }), () => {
      s.forEach((l) => {
        l.removeEventListener("click", o);
      });
    };
  });
  const r = [
    i ? i.description.text : "",
    A(i.example, t),
    A(i.exploit, t),
    A(i.remediation, t)
  ].join("");
  return /* @__PURE__ */ e.jsx(Ye, { ref: d, dangerouslySetInnerHTML: { __html: r } });
}
function A(i, t) {
  return !i || !i.sections ? "" : i.sections.map((n) => {
    if (n.text)
      return n.text;
    if (n.code)
      return `<pre>${n.code[t]}</pre>`;
  }).join("");
}
const Ye = c.div`
  padding: 8px;
  weight: 500;
  font-size: var(${p.fontSize});

  > h2 {
    margin: 0;
    font-weight: 700;
    font-size: var(${p.fontSize});
  }

  & code {
    color: var(${p.foreground});
    font-family: monospace;
  }

  > pre {
    background-color: var(${p.computedOne});
    padding: 8px 4px;
    white-space: pre-wrap;
    word-break: break-all;
  }
`;
function Je({
  filters: i,
  onClick: t
}) {
  return /* @__PURE__ */ e.jsx(
    Ze,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t();
      },
      children: /* @__PURE__ */ e.jsxs(ii, { children: [
        /* @__PURE__ */ e.jsx(Ie, {}),
        i !== 0 && /* @__PURE__ */ e.jsx(ei, { children: i })
      ] })
    }
  );
}
const Ze = c.div`
  width: 34px;
  height: 26px;
  position: relative;
`, ei = c.div`
  position: absolute;
  left: 18px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${p.buttonForeground});
  background-color: var(${p.buttonBackground});
  font-size: 12px;
`, ii = c.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${p.buttonForeground});
  border: none;
  ${({ waiting: i }) => i && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${p.foreground});
  }
`;
function ti() {
  const i = x((o) => o.audit.filter), t = h(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ e.jsx(oi, { children: /* @__PURE__ */ e.jsx(
    I,
    {
      label: "Severity",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (o) => {
        o && o.value !== "all" ? t(u({ ...i, severity: o == null ? void 0 : o.value })) : t(u({ ...i, severity: void 0 }));
      },
      selected: (i == null ? void 0 : i.severity) || "all"
    }
  ) });
}
const oi = c.div`
  width: 264px;
`;
function ni() {
  const i = h();
  return /* @__PURE__ */ e.jsxs(
    si,
    {
      onClick: (t) => {
        i(u({})), t.preventDefault(), t.stopPropagation();
      },
      children: [
        /* @__PURE__ */ e.jsx(X, {}),
        " ",
        /* @__PURE__ */ e.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const si = c.div`
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
function ai() {
  const { issueTitles: i, filter: t } = x((o) => o.audit), n = h();
  return /* @__PURE__ */ e.jsx(ri, { children: /* @__PURE__ */ e.jsx(
    I,
    {
      label: "Rules",
      options: [{ label: "All", value: "all" }, ...i],
      placeholder: "All",
      onSelectedItemChange: (o) => {
        o && o.value !== "all" ? n(u({ ...t, rule: o == null ? void 0 : o.value })) : n(u({ ...t, rule: void 0 }));
      },
      selected: (t == null ? void 0 : t.severity) || "all"
    }
  ) });
}
const ri = c.div`
  width: 264px;
`;
function li() {
  const i = x((o) => o.audit.filter), t = h(), n = [
    { label: "All", value: "all" },
    { label: "Security", value: "security" },
    { label: "Data validation", value: "datavalidation" },
    { label: "OpenAPI format requirements", value: "oasconformance" }
  ];
  return /* @__PURE__ */ e.jsx(di, { children: /* @__PURE__ */ e.jsx(
    I,
    {
      label: "Category",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (o) => {
        o && o.value !== "all" ? t(u({ ...i, domain: o == null ? void 0 : o.value })) : t(u({ ...i, domain: void 0 }));
      },
      selected: (i == null ? void 0 : i.domain) || "all"
    }
  ) });
}
const di = c.div`
  width: 264px;
`, ci = {
  security: [
    { label: "All", value: "all" },
    { label: "Authentication", value: "authentication" },
    { label: "Authorization", value: "authorization" },
    { label: "Transport", value: "transport" }
  ],
  oasconformance: [
    { label: "All", value: "all" },
    { label: "Structure", value: "validation" },
    { label: "Semantic", value: "semantics" },
    { label: "Best practices", value: "bestpractices" }
  ],
  datavalidation: [
    { label: "All", value: "all" },
    { label: "Parameters", value: "parameters" },
    { label: "Paths", value: "paths" },
    { label: "Schema", value: "schema" },
    { label: "Response headers", value: "responseheader" },
    { label: "Response definition", value: "responsedefinition" }
  ]
};
function pi() {
  const i = x((o) => o.audit.filter), t = h(), n = i.domain !== void 0 ? ci[i.domain] : [];
  return /* @__PURE__ */ e.jsx(ui, { children: /* @__PURE__ */ e.jsx(
    I,
    {
      label: "Group",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (o) => {
        o && o.value !== "all" ? t(u({ ...i, group: o == null ? void 0 : o.value })) : t(u({ ...i, group: void 0 }));
      },
      selected: (i == null ? void 0 : i.group) || "all"
    }
  ) });
}
const ui = c.div`
  width: 264px;
`;
function hi() {
  const { filtered: i, filter: t, type: n } = x((a) => a.audit), o = h(), [d, r] = y.useState(!0), l = ["rule", "domain", "group", "severity"].filter((a) => t && t[a] !== void 0).length;
  return /* @__PURE__ */ e.jsxs(xi, { children: [
    t.ids !== void 0 && /* @__PURE__ */ e.jsxs(N, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        i.length,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsxs(
        gi,
        {
          onClick: (a) => {
            o(u({})), a.preventDefault(), a.stopPropagation();
          },
          children: [
            /* @__PURE__ */ e.jsx(X, {}),
            " ",
            /* @__PURE__ */ e.jsx("span", { children: "Reset filters" })
          ]
        }
      )
    ] }),
    t.ids === void 0 && /* @__PURE__ */ e.jsxs(N, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        i.length,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsx(Je, { filters: l, onClick: () => r(!d) })
    ] }),
    !d && /* @__PURE__ */ e.jsxs(vi, { children: [
      n === "openapi" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(li, {}),
        /* @__PURE__ */ e.jsx(pi, {})
      ] }),
      /* @__PURE__ */ e.jsx(ti, {}),
      /* @__PURE__ */ e.jsx(ai, {}),
      /* @__PURE__ */ e.jsx(ni, {})
    ] })
  ] });
}
const xi = c.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, N = c.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, vi = c.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`, gi = c.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
function fi() {
  const {
    kdb: i,
    filtered: t,
    type: n,
    audit: { filename: o }
  } = x((r) => r.audit), d = h();
  return /* @__PURE__ */ e.jsxs(mi, { children: [
    /* @__PURE__ */ e.jsx(hi, {}),
    t.map((r, s) => /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsx(q, { children: r.description }),
      /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsxs(w, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
          " ",
          ee[r.criticality]
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(P, {}),
          " Score Impact ",
          r.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(k, {}),
          /* @__PURE__ */ e.jsxs(
            "a",
            {
              href: "#",
              onClick: (l) => {
                l.preventDefault(), l.stopPropagation(), d(
                  B({
                    uri: r.documentUri,
                    line: r.lineNo,
                    pointer: r.pointer
                  })
                );
              },
              children: [
                r.filename,
                ":",
                r.lineNo + 1
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(Y, {}),
          /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "#",
              onClick: (l) => {
                l.preventDefault(), l.stopPropagation(), d(O(r.id));
              },
              children: "Issue ID"
            }
          )
        ] })
      ] }) }),
      n !== "graphql" && /* @__PURE__ */ e.jsx(
        F,
        {
          lang: o.toLowerCase().endsWith("json") ? "json" : "yaml",
          article: i[r.id],
          openLink: (l) => {
            d(L(l));
          }
        }
      )
    ] }, `issue-${s}`))
  ] });
}
const mi = c.div``;
function ji({ onShowIssues: i }) {
  return /* @__PURE__ */ e.jsx(
    yi,
    {
      onClick: (t) => {
        t.preventDefault(), t.stopPropagation(), i();
      },
      children: /* @__PURE__ */ e.jsxs(bi, { children: [
        /* @__PURE__ */ e.jsx(S, {}),
        /* @__PURE__ */ e.jsxs("div", { children: [
          "Your API has structural or semantic issues in its OpenAPI format. Fix these issues first and run Security Audit again to get the full audit report. Click ",
          /* @__PURE__ */ e.jsx("a", { href: "#", children: "here" }),
          " to display the issues."
        ] })
      ] })
    }
  );
}
const yi = c.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${p.errorBorder});
  background-color: var(${p.errorBackground});
  color: var(${p.errorForeground});
  cursor: pointer;
`, bi = c.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  > svg {
    fill: var(${p.errorForeground});
  }
  > div:nth-child(2) {
    flex: 1;
  }
`;
function W({ issueId: i, issues: t }) {
  const n = h(), [o, d] = y.useState(!1), r = t.filter((a) => a.id === i), s = o ? r.length : 4, l = r.slice(0, s);
  return l.sort((a, f) => {
    const H = a.filename.localeCompare(f.filename);
    return H === 0 ? a.lineNo - f.lineNo : H;
  }), /* @__PURE__ */ e.jsxs(wi, { children: [
    /* @__PURE__ */ e.jsxs("h2", { children: [
      r.length,
      " results with this issue"
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: l.map((a) => /* @__PURE__ */ e.jsxs(Ci, { children: [
      /* @__PURE__ */ e.jsx(k, {}),
      /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: "#",
          onClick: (f) => {
            f.preventDefault(), f.stopPropagation(), n(
              B({
                uri: a.documentUri,
                line: a.lineNo,
                pointer: a.pointer
              })
            );
          },
          children: [
            a.filename,
            ":",
            a.lineNo + 1
          ]
        }
      )
    ] }, `${a.filename}:${a.lineNo}`)) }),
    !o && r.length > l.length && /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (a) => {
          a.preventDefault(), a.stopPropagation(), d(!0);
        },
        children: [
          "Show ",
          r.length - l.length,
          " more"
        ]
      }
    ),
    o && /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (a) => {
          a.preventDefault(), a.stopPropagation(), d(!1);
        },
        children: "Show less"
      }
    )
  ] });
}
const wi = c.div`
  padding-top: 8px;
  padding-left: 8px;
  > h2 {
    margin: 0;
    font-weight: 700;
    font-size: var(${p.fontSize});
  }
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, Ci = c.div`
  display: flex;
  align-items: center;
  margin: 4px;
  gap: 4px;
  > svg {
    fill: var(${p.foreground});
  }
`;
function $i() {
  const {
    stats: i,
    issues: t,
    audit: { filename: n }
  } = x((s) => s.audit), o = h(), d = i.byIssue.filter((s) => s.important).slice().sort((s, l) => l.count - s.count).slice(0, 4), r = i.byIssue.filter((s) => s.important).slice().sort((s, l) => l.score - s.score).slice(0, 4);
  return /* @__PURE__ */ e.jsxs(Si, { children: [
    /* @__PURE__ */ e.jsx(E, { children: "Most common issues" }),
    d.map((s, l) => /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsx(q, { children: s.title }),
      /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsxs(w, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
          " ",
          ee[s.criticality]
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(P, {}),
          " Score impact: ",
          s.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(k, {}),
          " ",
          s.count,
          " result(s)"
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(Y, {}),
          " ",
          /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "#",
              onClick: (a) => {
                a.preventDefault(), a.stopPropagation(), o(O(s.id));
              },
              children: "Issue ID"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(W, { issueId: s.id, issues: t }),
        /* @__PURE__ */ e.jsx(
          F,
          {
            lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: s.kdb,
            openLink: (a) => o(L(a))
          }
        )
      ] })
    ] }, `issue-${l}`)),
    /* @__PURE__ */ e.jsx(E, { children: "Opportunities" }),
    r.map((s, l) => /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsx(q, { children: s.title }),
      /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsxs(w, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
          " Count ",
          s.count
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(P, {}),
          " Score impact: ",
          s.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(k, {}),
          " ",
          s.count,
          " result(s)"
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(W, { issueId: s.id, issues: t }),
        /* @__PURE__ */ e.jsx(
          F,
          {
            lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: s.kdb,
            openLink: (a) => o(L(a))
          }
        )
      ] })
    ] }, `issue-${l}`))
  ] });
}
const Si = c.div`
  position: relative;
`, E = c.div`
  margin: 14px;
  font-size: 12px;
  font-weight: 500;
`;
function ki({
  isOpen: i,
  style: t,
  onClick: n
}) {
  return i ? /* @__PURE__ */ e.jsx(
    Z,
    {
      onClick: n,
      style: {
        cursor: "pointer",
        fill: `var(${p.foreground})`,
        ...t
      }
    }
  ) : /* @__PURE__ */ e.jsx(
    J,
    {
      onClick: n,
      style: {
        cursor: "pointer",
        fill: `var(${p.foreground})`,
        ...t
      }
    }
  );
}
function Li({
  sqgs: i,
  selected: t,
  onSelect: n
}) {
  return /* @__PURE__ */ e.jsx(Ii, { children: i.map((o, d) => /* @__PURE__ */ e.jsx(
    Ai,
    {
      $selected: o.id === t,
      onClick: (r) => {
        r.preventDefault(), r.stopPropagation(), t !== o.id && n(d);
      },
      children: o.name
    },
    o.id
  )) });
}
const Ii = c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`, Ai = c.div`
  display: flex;
  height: 28px;
  min-width: 100px;
  border-radius: 16px;
  margin-left: 4px;
  margin-right: 4px;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid var(${p.border});
  color: var(${p.foreground});
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${({ $selected: i }) => i ? `background-color: var(${p.computedTwo});` : `background-color: var(${p.computedOne});`}
`;
function Ti({ sqg: i, summary: t }) {
  const n = i.directives.minimumAssessmentScores;
  return i.directives.subcategoryRules, i.directives.issueRules, /* @__PURE__ */ e.jsxs(Di, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Minimum acceptable score" }),
    /* @__PURE__ */ e.jsxs(Pi, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Score" }),
      /* @__PURE__ */ e.jsx("div", { children: "current" }),
      /* @__PURE__ */ e.jsx("div", { children: "Minimum acceptable" })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Global score" }),
      /* @__PURE__ */ e.jsx(b, { $highlight: t.all < n.global, children: t.all }),
      /* @__PURE__ */ e.jsx(b, { children: n.global })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Security score" }),
      /* @__PURE__ */ e.jsx(b, { $highlight: t.security.value < n.security, children: t.security.value }),
      /* @__PURE__ */ e.jsx(b, { children: n.security })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Data validation score" }),
      /* @__PURE__ */ e.jsx(b, { $highlight: t.datavalidation.value < n.dataValidation, children: t.datavalidation.value }),
      /* @__PURE__ */ e.jsx(b, { children: n.dataValidation })
    ] })
  ] });
}
const Di = c.div``, Pi = c.div`
  display: flex;
  background-color: var(${p.computedTwo});
  border-radius: 2px;
  padding: 8px;
  > div {
    flex: 1;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
`, T = c.div`
  display: flex;
  > div {
    flex: 1;
    margin: 8px;
  }
`, b = c.div`
  ${({ $highlight: i }) => i && "font-weight: 700;"}
`;
function Ri({ sqg: i, stats: t }) {
  const n = h(), o = i.directives.subcategoryRules, d = t.byGroup, r = {
    security: [
      {
        name: "Authentication",
        domain: "security",
        group: "authentication",
        level: o.security.authentication,
        violations: m(o.security.authentication, d.security.authentication)
      },
      {
        name: "Authorization",
        domain: "security",
        group: "authorization",
        level: o.security.authorization,
        violations: m(o.security.authorization, d.security.authorization)
      },
      {
        name: "Transport",
        domain: "security",
        group: "transport",
        level: o.security.transport,
        violations: m(o.security.transport, d.security.transport)
      }
    ],
    data: [
      {
        name: "Paths",
        domain: "datavalidation",
        group: "paths",
        level: o.dataValidation.paths,
        violations: m(o.dataValidation.paths, d.datavalidation.paths)
      },
      {
        name: "Parameters",
        domain: "datavalidation",
        group: "parameters",
        level: o.dataValidation.parameters,
        violations: m(
          o.dataValidation.parameters,
          t.byGroup.datavalidation.parameters
        )
      },
      {
        name: "Schema",
        domain: "datavalidation",
        group: "schema",
        level: o.dataValidation.schema,
        violations: m(o.dataValidation.schema, d.datavalidation.schema)
      },
      {
        name: "Response Definition",
        domain: "datavalidation",
        group: "responsedefinition",
        level: o.dataValidation.responseDefinition,
        violations: m(
          o.dataValidation.responseDefinition,
          d.datavalidation.responsedefinition
        )
      },
      {
        name: "Response Headers",
        domain: "datavalidation",
        group: "responseheader",
        level: o.dataValidation.responseHeaders,
        violations: m(
          o.dataValidation.responseHeaders,
          d.datavalidation.responseheader
        )
      }
    ]
  };
  return /* @__PURE__ */ e.jsxs(qi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Allowed issue security levels" }),
    /* @__PURE__ */ e.jsxs(Fi, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Category" }),
      /* @__PURE__ */ e.jsx("div", { children: "threshold" }),
      /* @__PURE__ */ e.jsx("div", { children: "issues found" })
    ] }),
    /* @__PURE__ */ e.jsx(G, { children: "Security" }),
    r.security.filter((s) => s.violations.length > 0).map((s, l) => /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsx("div", { children: s.name }),
      /* @__PURE__ */ e.jsx("div", { children: K(s.level) }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (a) => {
            a.stopPropagation(), a.preventDefault(), n(j("issues")), n(
              u({
                severity: s.violations[0].level,
                domain: s.domain,
                group: s.group
              })
            );
          },
          children: s.violations.map((a) => `${a.level} ${a.count}`).join(", ")
        }
      )
    ] }, l)),
    /* @__PURE__ */ e.jsx(G, { children: "Data validation" }),
    r.data.filter((s) => s.violations.length > 0).map((s, l) => /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsx("div", { children: s.name }),
      /* @__PURE__ */ e.jsx("div", { children: K(s.level) }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (a) => {
            a.stopPropagation(), a.preventDefault(), n(j("issues")), n(
              u({
                severity: s.violations[0].level,
                domain: s.domain,
                group: s.group
              })
            );
          },
          children: s.violations.map((a) => `${a.level} ${a.count}`).join(", ")
        }
      )
    ] }, l))
  ] });
}
const qi = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, Fi = c.div`
  display: flex;
  background-color: var(${p.computedTwo});
  border-radius: 2px;
  padding: 8px;
  > div {
    flex: 1;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
`, G = c.div`
  display: flex;
  background-color: var(${p.computedOne});
  border-radius: 2px;
  padding: 8px;
`, U = c.div`
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
function m(i, t) {
  if (i === "none")
    return [];
  const n = D.indexOf(i), o = [];
  for (const d of D.slice(n))
    t[d] > 0 && o.push({ level: d, count: t[d] });
  return o;
}
const zi = {
  info: "All issues are rejected",
  low: "Issues up to level Info allowed, levels Low to Critical rejected",
  medium: "Issues up to level Low allowed, levels Medium to Critical rejected",
  high: "Issues up to level Medium allowed, levels High to Critical rejected",
  critical: "Only Critical issues are rejected",
  none: "No restrictions"
};
function K(i) {
  return zi[i];
}
function Mi({ sqg: i, stats: t }) {
  const n = h(), o = i.directives.issueRules ?? [], r = t.byIssue.filter((s) => o.includes(s.id));
  return r.length === 0 ? null : /* @__PURE__ */ e.jsxs(Vi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Forbidden issues with problem found" }),
    r.map((s) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), n(j("issues")), n(u({ rule: s.id }));
        },
        children: s.title
      }
    ) }))
  ] });
}
const Vi = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
function Bi({
  compliance: i,
  summary: t,
  stats: n
}) {
  const [o, d] = y.useState(0), r = i.sqgsDetail[o];
  return /* @__PURE__ */ e.jsxs(Oi, { children: [
    /* @__PURE__ */ e.jsx(
      Li,
      {
        sqgs: i.sqgsDetail,
        onSelect: d,
        selected: i.sqgsDetail[o].id
      }
    ),
    /* @__PURE__ */ e.jsx(Ti, { sqg: r, summary: t }),
    /* @__PURE__ */ e.jsx(Ri, { sqg: r, stats: n }),
    /* @__PURE__ */ e.jsx(Mi, { sqg: r, stats: n })
  ] });
}
const Oi = c.div`
  padding: 8px;
  color: var(${p.foreground});
  background-color: var(${p.background});
  border-top: 1px solid var(${p.errorBorder});
`;
function Hi() {
  const { compliance: i, summary: t } = x((a) => a.audit.audit), n = x((a) => a.audit.stats), o = x((a) => a.audit.sqgTodo), d = h(), r = (a) => {
    d(We(a));
  }, [s, l] = y.useState(!1);
  return i === void 0 ? null : i.acceptance === "yes" ? /* @__PURE__ */ e.jsx(Ei, { children: /* @__PURE__ */ e.jsx(Te, { message: "Security quality gates passed" }) }) : /* @__PURE__ */ e.jsxs(Ni, { children: [
    /* @__PURE__ */ e.jsxs(Wi, { children: [
      /* @__PURE__ */ e.jsx(S, {}),
      /* @__PURE__ */ e.jsx("div", { children: "Security quality gates failed" }),
      /* @__PURE__ */ e.jsx(Ae, { value: o, onChange: r }),
      "Show only SQG to-do list",
      /* @__PURE__ */ e.jsx(
        ki,
        {
          isOpen: s,
          onClick: () => l(!s),
          style: { width: 14, height: 14 }
        }
      )
    ] }),
    s && /* @__PURE__ */ e.jsx(Bi, { compliance: i, summary: t, stats: n })
  ] });
}
const Ni = c.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${p.errorBorder});
  background-color: var(${p.errorBackground});
  color: var(${p.errorForeground});
`, Wi = c.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  > svg {
    fill: var(${p.errorForeground});
  }
  > div:nth-child(2) {
    flex: 1;
  }
`, Ei = c.div`
  margin: 8px;
`;
function Gi() {
  const i = x((o) => o.audit.audit.summary), t = x((o) => o.audit.type), n = h();
  return /* @__PURE__ */ e.jsx(Ui, { children: /* @__PURE__ */ e.jsxs(Ki, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), n(j("issues")), n(u({}));
        },
        children: [
          /* @__PURE__ */ e.jsx("div", { children: "Global score" }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            i.all,
            "/100"
          ] }),
          /* @__PURE__ */ e.jsx("div", {})
        ]
      }
    ),
    t !== "graphql" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), n(j("issues")), n(u({ domain: "security" }));
          },
          children: [
            /* @__PURE__ */ e.jsx("div", { children: "Security score" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              i.security.value,
              "/",
              i.security.max
            ] }),
            /* @__PURE__ */ e.jsx("div", {})
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), n(j("issues")), n(u({ domain: "datavalidation" }));
          },
          children: [
            /* @__PURE__ */ e.jsx("div", { children: "Data validation score" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              i.datavalidation.value,
              "/",
              i.datavalidation.max
            ] }),
            /* @__PURE__ */ e.jsx("div", {})
          ]
        }
      )
    ] })
  ] }) });
}
const Ui = c.div`
  margin: 8px;
`, Ki = c.div`
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
    border: 1px solid var(${p.border});
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      background-color: var(${p.computedOne});
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
function _() {
  const i = h(), { tab: t, audit: n } = x((o) => o.audit);
  return /* @__PURE__ */ e.jsxs(_i, { children: [
    n.valid === !1 && /* @__PURE__ */ e.jsx(
      ji,
      {
        onShowIssues: () => {
          i(j("issues")), i(u({ domain: "oasconformance", severity: "critical" }));
        }
      }
    ),
    /* @__PURE__ */ e.jsx(Gi, {}),
    /* @__PURE__ */ e.jsx(Hi, {}),
    /* @__PURE__ */ e.jsx(
      Le,
      {
        activeTab: t,
        setActiveTab: (o) => i(j(o)),
        tabs: [
          {
            id: "priority",
            title: "Priority",
            content: /* @__PURE__ */ e.jsx($i, {})
          },
          { id: "issues", title: "Issues", content: /* @__PURE__ */ e.jsx(fi, {}) }
        ]
      }
    )
  ] });
}
const _i = c.div``;
function Qi() {
  return /* @__PURE__ */ e.jsxs(Xi, { children: [
    /* @__PURE__ */ e.jsx(De, {}),
    "There is no Security Audit report available for this file"
  ] });
}
const Xi = c.div`
  display: flex;
  margin: 8px;
  padding: 8px;
  gap: 8px;
  align-items: center;
  border: 1px solid var(${p.border});
  font-size: 14px;
  > svg {
    color: var(${p.foreground});
  }
`;
function Yi() {
  return /* @__PURE__ */ e.jsxs(Ji, { children: [
    /* @__PURE__ */ e.jsxs(Zi, { children: [
      /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsx("div", {})
    ] }),
    /* @__PURE__ */ e.jsx(et, {})
  ] });
}
const Ji = c.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`, ae = fe`
  0% {
    background-color: var(${p.computedOne});
  }
  100% {
    background-color: var(${p.computedTwo});
  }
`, Zi = c.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  & > div {
    flex: 1;
    display: flex;
    height: 100px;
    flex-direction: column;
    border: 1px solid var(${p.border});
    animation: ${ae} 1s linear infinite alternate;
  }
`, et = c.div`
  border: 1px solid var(${p.border});
  height: 15rem;
  animation: ${ae} 1s linear infinite alternate;
`, Q = [
  { id: "starting", title: "Starting", element: /* @__PURE__ */ e.jsx("div", {}) },
  { id: "blank", title: "Blank", element: /* @__PURE__ */ e.jsx("div", {}), when: ne },
  {
    id: "start-audit",
    title: "Audit is starting",
    element: /* @__PURE__ */ e.jsx(Yi, {}),
    when: oe
  },
  {
    id: "no-report",
    title: "No Audit Report",
    element: /* @__PURE__ */ e.jsx(Qi, {}),
    when: V
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ e.jsx(_, {}),
    when: z
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ e.jsx(_, {}),
    when: M
  }
], it = {
  startAudit: oe,
  cancelAudit: ne,
  showFullReport: z,
  showPartialReport: M,
  showNoReport: V,
  loadKdb: Ne,
  changeTheme: Se
};
function tt() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Ce, {}),
    /* @__PURE__ */ e.jsx($e, {})
  ] });
}
function ot(i, t) {
  const n = Ue(Ke(i, Q), t);
  me.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(je.StrictMode, { children: /* @__PURE__ */ e.jsx(ye, { store: n, children: /* @__PURE__ */ e.jsx(be.Provider, { value: Q, children: /* @__PURE__ */ e.jsx(tt, {}) }) }) })
  ), window.addEventListener("message", we(n, it));
}
window.renderWebView = ot;
