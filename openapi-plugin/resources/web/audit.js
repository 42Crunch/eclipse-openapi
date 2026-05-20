import { c as le, a as de, u as ce, b as pe, r as ue, t as he, l as xe, d as ve, i as fe, s as ge, j as e, T as p, e as c, f as y, m as me, g as je, R as ye, P as be, h as we, k as $e, n as Ce, o as Se, p as ke } from "./TriangleExclamation.BLKAXJ8l.js";
import { s as Ie } from "./listener.BM8yBkLB.js";
import { T as Le } from "./Tabs.BfQDe6I2.js";
import { S as Ae, a as Y, b as J } from "./Xmark.Doc6BN9Q.js";
import { S } from "./ExclamationCircle.2wqwVNIx.js";
import { S as k, a as Te } from "./Switch.BqeA-dAP.js";
import { S as Z } from "./AngleDown.DBLEm0qt.js";
import { S as ee } from "./AngleUp.d5m1Xwr8.js";
import { P as L } from "./Select.Jkx8eZok.js";
import { B as De, S as Pe } from "./Banner.BZe2qI8d.js";
const D = ["info", "low", "medium", "high", "critical"], f = {
  Info: 1,
  Low: 2,
  Medium: 3,
  High: 4,
  Critical: 5
}, Re = {
  [f.Info]: "info",
  [f.Low]: "low",
  [f.Medium]: "medium",
  [f.High]: "high",
  [f.Critical]: "critical"
}, ie = {
  [f.Info]: "Info",
  [f.Low]: "Low",
  [f.Medium]: "Medium",
  [f.High]: "High",
  [f.Critical]: "Critical"
}, qe = ["graphql", "gql", "graphqls", "sdl", "gqls"], ze = {
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
    byGroup: oe([])
  },
  kdb: {},
  issueTitles: [],
  filter: {},
  sqgTodo: !1,
  type: "openapi"
}, te = le({
  name: "audit",
  initialState: ze,
  reducers: {
    startAudit: (i, t) => {
    },
    cancelAudit: (i, t) => {
    },
    showFullReport: (i, { payload: t }) => {
      i.audit.filename !== t.filename && (i.tab = "priority", i.filter = {}, i.sqgTodo = !1, i.type = t.filename.toLowerCase().endsWith(".graphql") || t.filename.toLowerCase().endsWith(".gql") || t.filename.toLowerCase().endsWith(".graphqls") || t.filename.toLowerCase().endsWith(".sdl") || t.filename.toLowerCase().endsWith(".gqls") ? "graphql" : "openapi"), (t.compliance === void 0 || t.compliance.acceptance === "yes") && (i.sqgTodo = !1), i.audit = t, $(i);
    },
    showPartialReport: (i, {
      payload: { report: t, uri: n, ids: o }
    }) => {
      i.audit = t, i.filter = { ids: o }, i.tab = "issues", i.sqgTodo = !1, i.type = qe.some((l) => t.filename.toLowerCase().endsWith(`.${l}`)) ? "graphql" : "openapi", $(i);
    },
    loadKdb: (i, { payload: t }) => {
      i.kdb = t, $(i);
    },
    changeTab: (i, t) => {
      i.tab = t.payload;
    },
    changeFilter: (i, { payload: t }) => {
      i.filter = t, $(i);
    },
    setSqgTodo: (i, { payload: t }) => {
      i.sqgTodo = t, i.filter = {}, $(i);
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
function $(i) {
  const { issues: t, filtered: n, stats: o, titles: l } = Fe(
    i.sqgTodo ? i.audit.todo : i.audit.issues,
    i.audit.files,
    i.kdb,
    i.filter,
    i.type
  );
  i.issues = t, i.filtered = n, i.stats = o, i.issueTitles = l;
}
function Fe(i, t, n, o, l) {
  const a = Me(i, t, n), s = Ve(a, n), d = Oe(s), r = Be(a, o);
  return { issues: a, filtered: r, stats: s, titles: d };
}
function Be(i, t) {
  const n = (r, g) => t.ids === void 0 || t.ids.includes(g), o = (r) => t.domain === void 0 || r.domain === t?.domain, l = (r) => t.group === void 0 || r.group === t?.group, a = (r) => t?.rule === void 0 || r.id === t.rule, s = t.severity !== void 0 ? D.indexOf(t.severity) + 1 : 0, d = (r) => t.severity === void 0 || r.criticality >= s;
  return i.filter((r, g) => n(r, g) && o(r) && l(r) && a(r) && d(r));
}
function Me(i, t, n, o) {
  return Object.entries(i).map(([a, s]) => s.map((d, r) => ({
    ...d,
    domain: n[d.id].group,
    group: n[d.id].subgroup,
    filename: t[d.documentUri].relative
  }))).reduce((a, s) => a.concat(s), []);
}
function Ve(i, t, n) {
  const o = {};
  for (const s of i)
    o[s.id] || (o[s.id] = []), o[s.id].push(s);
  const l = Object.keys(o).map((s) => ({
    id: s,
    kdb: t[s] || Ee,
    title: t[s].title.text.replace(/^<h1>|<\/h1>$/g, ""),
    domain: o[s][0].domain,
    score: o[s].reduce((d, r) => d + r.score, 0),
    criticality: Math.max(...o[s].map((d) => d.criticality)),
    displayScore: Ne(o[s].reduce((d, r) => d + r.score, 0)),
    count: o[s].length,
    important: o[s].some((d) => d.criticality >= f.Low)
  })), a = oe(i);
  return { byIssue: l, byGroup: a };
}
function oe(i) {
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
  for (const o of i) {
    const l = o.domain, a = o.group, s = Re[o.criticality];
    l !== void 0 && a !== void 0 && //@ts-ignore
    n[l]?.[a]?.[s] !== void 0 && n[l][a][s]++;
  }
  return n;
}
function Oe(i) {
  return i.byIssue.map((t) => ({ value: t.id, label: t.title })).sort((t, n) => {
    const o = t.value.toLowerCase(), l = n.value.toLowerCase();
    return o < l ? -1 : o > l ? 1 : 0;
  });
}
function Ne(i) {
  const t = Math.abs(Math.round(i));
  return i === 0 ? "0" : t >= 1 ? t.toString() : "less than 1";
}
const Ee = {
  title: {
    text: "<h1>Article not found</h1>"
  },
  description: {
    text: `<p>Whoops! Looks like there has been an oversight and we are missing a page for this issue.</p>
           <p><a href="https://apisecurity.io/contact-us/">Let us know</a> the title of the issue, and we make sure to add it to the encyclopedia.</p>`
  }
}, {
  startAudit: ne,
  cancelAudit: se,
  showFullReport: F,
  showPartialReport: B,
  showNoReport: M,
  loadKdb: He,
  goToLine: V,
  copyIssueId: O,
  openLink: I,
  changeTab: j,
  changeFilter: u,
  setSqgTodo: Ge
} = te.actions, We = te.reducer, Ue = {
  audit: We,
  theme: he,
  router: ue
}, Ke = (i, t) => de({
  reducer: Ue,
  middleware: (n) => n().prepend(i.middleware).concat(xe),
  preloadedState: {
    theme: t
  }
}), h = () => ce(), x = pe, re = ve(), C = re.startListening;
function _e(i, t) {
  const n = {
    goToLine: () => C({
      actionCreator: V,
      effect: async (o, l) => {
        i.postMessage({
          command: "goToLine",
          payload: o.payload
        });
      }
    }),
    copyIssueId: () => C({
      actionCreator: O,
      effect: async (o, l) => {
        i.postMessage({
          command: "copyIssueId",
          payload: o.payload
        });
      }
    }),
    openLink: () => C({
      actionCreator: I,
      effect: async (o, l) => {
        i.postMessage({
          command: "openLink",
          payload: o.payload
        });
      }
    })
  };
  return C({
    matcher: fe(F, B, M),
    effect: async (o, l) => {
      window.scrollTo(0, 0);
    }
  }), Ie(C, t), ge(n), re;
}
const P = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "M476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87-34.63 0-77.87 8.003-137.2 32.05V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464c0 13.3 10.75 24 24 24s24-10.75 24-24V384c53.59-23.86 96.02-31.81 132.8-31.81 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09 13.6-4.98 21.5-16.48 21.5-28.78V30.73C512 11.1 495.3 0 476.3 0M464 319.8c-30.31 10.82-58.08 16.1-84.6 16.1-30.8 0-58.31-7-87.44-14.41-32.01-8.141-68.29-17.37-111.1-17.37-42.35 0-85.99 9.09-132.8 27.73V84.14l18.03-7.301c47.39-19.2 86.38-28.54 119.2-28.54 28.24.004 49.12 6.711 73.31 14.48 25.38 8.148 54.13 17.39 90.58 17.39 35.43 0 72.24-8.496 114.9-26.61V319.8z" }) });
function R({
  children: i,
  defaultCollapsed: t
}) {
  const [n, o] = y.useState(t ?? !0), l = i.slice(0, i.length - 1), a = i[i.length - 1];
  return /* @__PURE__ */ e.jsxs(Qe, { children: [
    /* @__PURE__ */ e.jsxs(
      Xe,
      {
        $collapsed: n,
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), o(!n);
        },
        children: [
          /* @__PURE__ */ e.jsx("div", { children: n ? /* @__PURE__ */ e.jsx(Z, {}) : /* @__PURE__ */ e.jsx(ee, {}) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            ...l
          ] })
        ]
      }
    ),
    !n && /* @__PURE__ */ e.jsx(Ye, { children: a })
  ] });
}
const Qe = c.div`
  margin: 8px;
  border: 1px solid var(${p.border});
  //background-color: var(${p.computedOne});
`, Xe = c.div`
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
`, Ye = c.div`
  //background-color: var(${p.computedOne});
`;
function z({
  article: i,
  issueId: t,
  lang: n,
  openLink: o
}) {
  if (i === void 0)
    return console.warn(`No article found for issue ${t}`), /* @__PURE__ */ e.jsxs(E, { children: [
      "No KDB article available for the issue: ",
      t
    ] });
  const l = (d) => {
    d.stopPropagation(), d.preventDefault(), o(d.target.href);
  }, a = y.useRef(null);
  y.useEffect(() => {
    const d = a.current.querySelectorAll("a");
    return d.forEach((r) => {
      r.addEventListener("click", l);
    }), () => {
      d.forEach((r) => {
        r.removeEventListener("click", l);
      });
    };
  });
  const s = [
    i ? i.description.text : "",
    A(i.example, n),
    A(i.exploit, n),
    A(i.remediation, n)
  ].join("");
  return /* @__PURE__ */ e.jsx(E, { ref: a, dangerouslySetInnerHTML: { __html: s } });
}
function A(i, t) {
  return !i || !i.sections ? "" : i.sections.map((n) => {
    if (n.text)
      return n.text;
    if (n.code)
      return `<pre>${n.code[t]}</pre>`;
  }).join("");
}
const E = c.div`
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
        /* @__PURE__ */ e.jsx(Ae, {}),
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
    L,
    {
      label: "Severity",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (o) => {
        o && o.value !== "all" ? t(u({ ...i, severity: o?.value })) : t(u({ ...i, severity: void 0 }));
      },
      selected: i?.severity || "all"
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
        /* @__PURE__ */ e.jsx(Y, {}),
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
function ri() {
  const { issueTitles: i, filter: t } = x((o) => o.audit), n = h();
  return /* @__PURE__ */ e.jsx(ai, { children: /* @__PURE__ */ e.jsx(
    L,
    {
      label: "Rules",
      options: [{ label: "All", value: "all" }, ...i],
      placeholder: "All",
      onSelectedItemChange: (o) => {
        o && o.value !== "all" ? n(u({ ...t, rule: o?.value })) : n(u({ ...t, rule: void 0 }));
      },
      selected: t?.severity || "all"
    }
  ) });
}
const ai = c.div`
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
    L,
    {
      label: "Category",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (o) => {
        o && o.value !== "all" ? t(u({ ...i, domain: o?.value })) : t(u({ ...i, domain: void 0 }));
      },
      selected: i?.domain || "all"
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
    L,
    {
      label: "Group",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (o) => {
        o && o.value !== "all" ? t(u({ ...i, group: o?.value })) : t(u({ ...i, group: void 0 }));
      },
      selected: i?.group || "all"
    }
  ) });
}
const ui = c.div`
  width: 264px;
`;
function hi() {
  const { filtered: i, filter: t, type: n } = x((r) => r.audit), o = h(), [l, a] = y.useState(!0), d = ["rule", "domain", "group", "severity"].filter((r) => t && t[r] !== void 0).length;
  return /* @__PURE__ */ e.jsxs(xi, { children: [
    t.ids !== void 0 && /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        i.length,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsxs(
        fi,
        {
          onClick: (r) => {
            o(u({})), r.preventDefault(), r.stopPropagation();
          },
          children: [
            /* @__PURE__ */ e.jsx(Y, {}),
            " ",
            /* @__PURE__ */ e.jsx("span", { children: "Reset filters" })
          ]
        }
      )
    ] }),
    t.ids === void 0 && /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        i.length,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsx(Je, { filters: d, onClick: () => a(!l) })
    ] }),
    !l && /* @__PURE__ */ e.jsxs(vi, { children: [
      n === "openapi" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(li, {}),
        /* @__PURE__ */ e.jsx(pi, {})
      ] }),
      /* @__PURE__ */ e.jsx(ti, {}),
      /* @__PURE__ */ e.jsx(ri, {}),
      /* @__PURE__ */ e.jsx(ni, {})
    ] })
  ] });
}
const xi = c.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, H = c.div`
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
`, fi = c.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
function gi() {
  const {
    kdb: i,
    filtered: t,
    type: n,
    audit: { filename: o }
  } = x((a) => a.audit), l = h();
  return /* @__PURE__ */ e.jsxs(mi, { children: [
    /* @__PURE__ */ e.jsx(hi, {}),
    t.map((a, s) => /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsx(q, { children: a.description }),
      /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsxs(w, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
          " ",
          ie[a.criticality]
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(P, {}),
          " Score Impact ",
          a.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(k, {}),
          /* @__PURE__ */ e.jsxs(
            "a",
            {
              href: "#",
              onClick: (d) => {
                d.preventDefault(), d.stopPropagation(), l(
                  V({
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
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(J, {}),
          /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "#",
              onClick: (d) => {
                d.preventDefault(), d.stopPropagation(), l(O(a.id));
              },
              children: "Issue ID"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsx(
        z,
        {
          lang: o.toLowerCase().endsWith("json") ? "json" : "yaml",
          article: i[a.id],
          issueId: a.id,
          openLink: (d) => {
            l(I(d));
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
          "Your API has structural or semantic issues. Fix these first and run Security Audit again to get the full audit report. Click ",
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
function G({ issueId: i, issues: t }) {
  const n = h(), [o, l] = y.useState(!1), a = t.filter((r) => r.id === i), s = o ? a.length : 4, d = a.slice(0, s);
  return d.sort((r, g) => {
    const N = r.filename.localeCompare(g.filename);
    return N === 0 ? r.lineNo - g.lineNo : N;
  }), /* @__PURE__ */ e.jsxs(wi, { children: [
    /* @__PURE__ */ e.jsxs("h2", { children: [
      a.length,
      " results with this issue"
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: d.map((r) => /* @__PURE__ */ e.jsxs($i, { children: [
      /* @__PURE__ */ e.jsx(k, {}),
      /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: "#",
          onClick: (g) => {
            g.preventDefault(), g.stopPropagation(), n(
              V({
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
    ] }, `${r.filename}:${r.lineNo}`)) }),
    !o && a.length > d.length && /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (r) => {
          r.preventDefault(), r.stopPropagation(), l(!0);
        },
        children: [
          "Show ",
          a.length - d.length,
          " more"
        ]
      }
    ),
    o && /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (r) => {
          r.preventDefault(), r.stopPropagation(), l(!1);
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
`, $i = c.div`
  display: flex;
  align-items: center;
  margin: 4px;
  gap: 4px;
  > svg {
    fill: var(${p.foreground});
  }
`;
function Ci() {
  const {
    stats: i,
    issues: t,
    audit: { filename: n }
  } = x((s) => s.audit), o = h(), l = i.byIssue.filter((s) => s.important).slice().sort((s, d) => d.count - s.count).slice(0, 4), a = i.byIssue.filter((s) => s.important).slice().sort((s, d) => d.score - s.score).slice(0, 4);
  return /* @__PURE__ */ e.jsxs(Si, { children: [
    /* @__PURE__ */ e.jsx(W, { children: "Most common issues" }),
    l.map((s, d) => /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsx(q, { children: s.title }),
      /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsxs(w, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
          " ",
          ie[s.criticality]
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
          /* @__PURE__ */ e.jsx(J, {}),
          " ",
          /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "#",
              onClick: (r) => {
                r.preventDefault(), r.stopPropagation(), o(O(s.id));
              },
              children: "Issue ID"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(G, { issueId: s.id, issues: t }),
        /* @__PURE__ */ e.jsx(
          z,
          {
            lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: s.kdb,
            openLink: (r) => o(I(r)),
            issueId: s.id
          }
        )
      ] })
    ] }, `issue-${d}`)),
    /* @__PURE__ */ e.jsx(W, { children: "Opportunities" }),
    a.map((s, d) => /* @__PURE__ */ e.jsxs(R, { children: [
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
        /* @__PURE__ */ e.jsx(G, { issueId: s.id, issues: t }),
        /* @__PURE__ */ e.jsx(
          z,
          {
            lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: s.kdb,
            openLink: (r) => o(I(r)),
            issueId: s.id
          }
        )
      ] })
    ] }, `issue-${d}`))
  ] });
}
const Si = c.div`
  position: relative;
`, W = c.div`
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
    ee,
    {
      onClick: n,
      style: {
        cursor: "pointer",
        fill: `var(${p.foreground})`,
        ...t
      }
    }
  ) : /* @__PURE__ */ e.jsx(
    Z,
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
function Ii({
  sqgs: i,
  selected: t,
  onSelect: n
}) {
  return /* @__PURE__ */ e.jsx(Li, { children: i.map((o, l) => /* @__PURE__ */ e.jsx(
    Ai,
    {
      $selected: o.id === t,
      onClick: (a) => {
        a.preventDefault(), a.stopPropagation(), t !== o.id && n(l);
      },
      children: o.name
    },
    o.id
  )) });
}
const Li = c.div`
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
  const n = h(), o = i.directives.subcategoryRules, l = t.byGroup, a = {
    security: [
      {
        name: "Authentication",
        domain: "security",
        group: "authentication",
        level: o.security.authentication,
        violations: m(o.security.authentication, l.security.authentication)
      },
      {
        name: "Authorization",
        domain: "security",
        group: "authorization",
        level: o.security.authorization,
        violations: m(o.security.authorization, l.security.authorization)
      },
      {
        name: "Transport",
        domain: "security",
        group: "transport",
        level: o.security.transport,
        violations: m(o.security.transport, l.security.transport)
      }
    ],
    data: [
      {
        name: "Paths",
        domain: "datavalidation",
        group: "paths",
        level: o.dataValidation.paths,
        violations: m(o.dataValidation.paths, l.datavalidation.paths)
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
        violations: m(o.dataValidation.schema, l.datavalidation.schema)
      },
      {
        name: "Response Definition",
        domain: "datavalidation",
        group: "responsedefinition",
        level: o.dataValidation.responseDefinition,
        violations: m(
          o.dataValidation.responseDefinition,
          l.datavalidation.responsedefinition
        )
      },
      {
        name: "Response Headers",
        domain: "datavalidation",
        group: "responseheader",
        level: o.dataValidation.responseHeaders,
        violations: m(
          o.dataValidation.responseHeaders,
          l.datavalidation.responseheader
        )
      }
    ]
  };
  return /* @__PURE__ */ e.jsxs(qi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Allowed issue security levels" }),
    /* @__PURE__ */ e.jsxs(zi, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Category" }),
      /* @__PURE__ */ e.jsx("div", { children: "threshold" }),
      /* @__PURE__ */ e.jsx("div", { children: "issues found" })
    ] }),
    /* @__PURE__ */ e.jsx(U, { children: "Security" }),
    a.security.filter((s) => s.violations.length > 0).map((s, d) => /* @__PURE__ */ e.jsxs(K, { children: [
      /* @__PURE__ */ e.jsx("div", { children: s.name }),
      /* @__PURE__ */ e.jsx("div", { children: _(s.level) }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (r) => {
            r.stopPropagation(), r.preventDefault(), n(j("issues")), n(
              u({
                severity: s.violations[0].level,
                domain: s.domain,
                group: s.group
              })
            );
          },
          children: s.violations.map((r) => `${r.level} ${r.count}`).join(", ")
        }
      )
    ] }, d)),
    /* @__PURE__ */ e.jsx(U, { children: "Data validation" }),
    a.data.filter((s) => s.violations.length > 0).map((s, d) => /* @__PURE__ */ e.jsxs(K, { children: [
      /* @__PURE__ */ e.jsx("div", { children: s.name }),
      /* @__PURE__ */ e.jsx("div", { children: _(s.level) }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (r) => {
            r.stopPropagation(), r.preventDefault(), n(j("issues")), n(
              u({
                severity: s.violations[0].level,
                domain: s.domain,
                group: s.group
              })
            );
          },
          children: s.violations.map((r) => `${r.level} ${r.count}`).join(", ")
        }
      )
    ] }, d))
  ] });
}
const qi = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, zi = c.div`
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
`, U = c.div`
  display: flex;
  background-color: var(${p.computedOne});
  border-radius: 2px;
  padding: 8px;
`, K = c.div`
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
  for (const l of D.slice(n))
    t[l] > 0 && o.push({ level: l, count: t[l] });
  return o;
}
const Fi = {
  info: "All issues are rejected",
  low: "Issues up to level Info allowed, levels Low to Critical rejected",
  medium: "Issues up to level Low allowed, levels Medium to Critical rejected",
  high: "Issues up to level Medium allowed, levels High to Critical rejected",
  critical: "Only Critical issues are rejected",
  none: "No restrictions"
};
function _(i) {
  return Fi[i];
}
function Bi({ sqg: i, stats: t }) {
  const n = h(), o = i.directives.issueRules ?? [], a = t.byIssue.filter((s) => o.includes(s.id));
  return a.length === 0 ? null : /* @__PURE__ */ e.jsxs(Mi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Forbidden issues with problem found" }),
    a.map((s) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (d) => {
          d.preventDefault(), d.stopPropagation(), n(j("issues")), n(u({ rule: s.id }));
        },
        children: s.title
      }
    ) }))
  ] });
}
const Mi = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
function Vi({
  compliance: i,
  summary: t,
  stats: n
}) {
  const [o, l] = y.useState(0), a = i.sqgsDetail[o];
  return /* @__PURE__ */ e.jsxs(Oi, { children: [
    /* @__PURE__ */ e.jsx(
      Ii,
      {
        sqgs: i.sqgsDetail,
        onSelect: l,
        selected: i.sqgsDetail[o].id
      }
    ),
    /* @__PURE__ */ e.jsx(Ti, { sqg: a, summary: t }),
    /* @__PURE__ */ e.jsx(Ri, { sqg: a, stats: n }),
    /* @__PURE__ */ e.jsx(Bi, { sqg: a, stats: n })
  ] });
}
const Oi = c.div`
  padding: 8px;
  color: var(${p.foreground});
  background-color: var(${p.background});
  border-top: 1px solid var(${p.errorBorder});
`;
function Ni() {
  const { compliance: i, summary: t } = x((r) => r.audit.audit), n = x((r) => r.audit.stats), o = x((r) => r.audit.sqgTodo), l = h(), a = (r) => {
    l(Ge(r));
  }, [s, d] = y.useState(!1);
  return i === void 0 ? null : i.acceptance === "yes" ? /* @__PURE__ */ e.jsx(Gi, { children: /* @__PURE__ */ e.jsx(De, { message: "Security quality gates passed" }) }) : /* @__PURE__ */ e.jsxs(Ei, { children: [
    /* @__PURE__ */ e.jsxs(Hi, { children: [
      /* @__PURE__ */ e.jsx(S, {}),
      /* @__PURE__ */ e.jsx("div", { children: "Security quality gates failed" }),
      /* @__PURE__ */ e.jsx(Te, { value: o, onChange: a }),
      "Show only SQG to-do list",
      /* @__PURE__ */ e.jsx(
        ki,
        {
          isOpen: s,
          onClick: () => d(!s),
          style: { width: 14, height: 14 }
        }
      )
    ] }),
    s && /* @__PURE__ */ e.jsx(Vi, { compliance: i, summary: t, stats: n })
  ] });
}
const Ei = c.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${p.errorBorder});
  background-color: var(${p.errorBackground});
  color: var(${p.errorForeground});
`, Hi = c.div`
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
`, Gi = c.div`
  margin: 8px;
`;
function Wi() {
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
function Q() {
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
    /* @__PURE__ */ e.jsx(Wi, {}),
    /* @__PURE__ */ e.jsx(Ni, {}),
    /* @__PURE__ */ e.jsx(
      Le,
      {
        activeTab: t,
        setActiveTab: (o) => i(j(o)),
        tabs: [
          {
            id: "priority",
            title: "Priority",
            content: /* @__PURE__ */ e.jsx(Ci, {})
          },
          { id: "issues", title: "Issues", content: /* @__PURE__ */ e.jsx(gi, {}) }
        ]
      }
    )
  ] });
}
const _i = c.div``;
function Qi() {
  return /* @__PURE__ */ e.jsxs(Xi, { children: [
    /* @__PURE__ */ e.jsx(Pe, {}),
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
`, ae = me`
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
`, X = [
  { id: "starting", title: "Starting", element: /* @__PURE__ */ e.jsx("div", {}) },
  { id: "blank", title: "Blank", element: /* @__PURE__ */ e.jsx("div", {}), when: se },
  {
    id: "start-audit",
    title: "Audit is starting",
    element: /* @__PURE__ */ e.jsx(Yi, {}),
    when: ne
  },
  {
    id: "no-report",
    title: "No Audit Report",
    element: /* @__PURE__ */ e.jsx(Qi, {}),
    when: M
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ e.jsx(Q, {}),
    when: F
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ e.jsx(Q, {}),
    when: B
  }
], it = {
  startAudit: ne,
  cancelAudit: se,
  showFullReport: F,
  showPartialReport: B,
  showNoReport: M,
  loadKdb: He,
  changeTheme: ke
};
function tt() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Ce, {}),
    /* @__PURE__ */ e.jsx(Se, {})
  ] });
}
function ot(i, t) {
  const n = Ke(_e(i, X), t);
  je.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ye.StrictMode, { children: /* @__PURE__ */ e.jsx(be, { store: n, children: /* @__PURE__ */ e.jsx(we.Provider, { value: X, children: /* @__PURE__ */ e.jsx(tt, {}) }) }) })
  ), window.addEventListener("message", $e(n, it));
}
window.renderWebView = ot;
