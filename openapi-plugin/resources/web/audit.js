import { c as ne, a as se, u as ae, b as re, t as le, r as de, d as ce, i as pe, s as ue, j as e, q as c, T as p, e as b, W as he, f as xe, R as ve, P as fe, g as ge, m as me, h as je, k as ye, l as be } from "./webapp.CeAUXIIl.js";
import { l as we } from "./TriangleExclamation.CgvJ-nl0.js";
import { S as L, C as Ce, a as Se, b as $e, c as Q, d as X, e as Y } from "./Xmark.CFuLPsAP.js";
import { s as ke } from "./listener.-cV7RRVl.js";
import { T as Ae } from "./Tabs.ao5WcNUe.js";
import { S } from "./ExclamationCircle.BBSMtR_9.js";
import { S as $, a as Ie } from "./Switch.CTDoBjHS.js";
import { C as D, T as P, B as y, a as v } from "./CollapsibleCard.L8eOJDRh.js";
import { P as A } from "./Select.DwYaPwwt.js";
import { S as Te } from "./AngleDown.Cf8-HIFo.js";
import { S as Le } from "./AngleUp.4zhx5nPt.js";
import { B as De, S as Pe } from "./Banner.K84D_Xfm.js";
const Re = {
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
    byGroup: Z([])
  },
  kdb: {},
  issueTitles: [],
  filter: {},
  sqgTodo: !1
}, J = ne({
  name: "audit",
  initialState: Re,
  reducers: {
    startAudit: (i, t) => {
    },
    cancelAudit: (i, t) => {
    },
    showFullReport: (i, { payload: t }) => {
      i.audit.filename !== t.filename && (i.tab = "priority", i.filter = {}, i.sqgTodo = !1), (t.compliance === void 0 || t.compliance.acceptance === "yes") && (i.sqgTodo = !1), i.audit = t, w(i);
    },
    showPartialReport: (i, {
      payload: { report: t, uri: n, ids: o }
    }) => {
      i.audit = t, i.filter = { ids: o }, i.tab = "issues", i.sqgTodo = !1, w(i);
    },
    loadKdb: (i, { payload: t }) => {
      i.kdb = t, w(i);
    },
    changeTab: (i, t) => {
      i.tab = t.payload;
    },
    changeFilter: (i, { payload: t }) => {
      i.filter = t, w(i);
    },
    setSqgTodo: (i, { payload: t }) => {
      i.sqgTodo = t, i.filter = {}, w(i);
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
function w(i) {
  const { issues: t, filtered: n, stats: o, titles: a } = ze(
    i.sqgTodo ? i.audit.todo : i.audit.issues,
    i.audit.files,
    i.kdb,
    i.filter
  );
  i.issues = t, i.filtered = n, i.stats = o, i.issueTitles = a;
}
function ze(i, t, n, o) {
  const a = Ve(i, t, n), l = Be(a, n), s = qe(l), d = Fe(a, o);
  return { issues: a, filtered: d, stats: l, titles: s };
}
function Fe(i, t) {
  const n = (r, f) => t.ids === void 0 || t.ids.includes(f), o = (r) => t.domain === void 0 || r.domain === (t == null ? void 0 : t.domain), a = (r) => t.group === void 0 || r.group === (t == null ? void 0 : t.group), l = (r) => (t == null ? void 0 : t.rule) === void 0 || r.id === t.rule, s = t.severity !== void 0 ? L.indexOf(t.severity) + 1 : 0, d = (r) => t.severity === void 0 || r.criticality >= s;
  return i.filter((r, f) => n(r, f) && o(r) && a(r) && l(r) && d(r));
}
function Ve(i, t, n) {
  return Object.entries(i).map(([a, l]) => l.map((s, d) => ({
    ...s,
    domain: n[s.id].group,
    group: n[s.id].subgroup,
    filename: t[s.documentUri].relative
  }))).reduce((a, l) => a.concat(l), []);
}
function Be(i, t) {
  const n = {};
  for (const l of i)
    n[l.id] || (n[l.id] = []), n[l.id].push(l);
  const o = Object.keys(n).map((l) => ({
    id: l,
    kdb: t[l] || Oe,
    title: t[l].title.text.replace(/^<h1>|<\/h1>$/g, ""),
    domain: n[l][0].domain,
    score: n[l].reduce((s, d) => s + d.score, 0),
    criticality: Math.max(...n[l].map((s) => s.criticality)),
    displayScore: Me(n[l].reduce((s, d) => s + d.score, 0)),
    count: n[l].length,
    important: n[l].some((s) => s.criticality >= Ce.Low)
  })), a = Z(i);
  return { byIssue: o, byGroup: a };
}
function Z(i) {
  var o, a;
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
  for (const l of i) {
    const s = l.domain, d = l.group, r = Se[l.criticality];
    s !== void 0 && d !== void 0 && //@ts-ignore
    ((a = (o = n[s]) == null ? void 0 : o[d]) == null ? void 0 : a[r]) !== void 0 && n[s][d][r]++;
  }
  return n;
}
function qe(i) {
  return i.byIssue.map((t) => ({ value: t.id, label: t.title })).sort((t, n) => {
    const o = t.value.toLowerCase(), a = n.value.toLowerCase();
    return o < a ? -1 : o > a ? 1 : 0;
  });
}
function Me(i) {
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
}, {
  startAudit: ee,
  cancelAudit: ie,
  showFullReport: F,
  showPartialReport: V,
  showNoReport: B,
  loadKdb: Ne,
  goToLine: q,
  copyIssueId: M,
  openLink: k,
  changeTab: m,
  changeFilter: u,
  setSqgTodo: Ge
} = J.actions, Ee = J.reducer, He = {
  audit: Ee,
  theme: le,
  router: de
}, We = (i, t) => se({
  reducer: He,
  middleware: (n) => n().prepend(i.middleware).concat(we),
  preloadedState: {
    theme: t
  }
}), h = () => ae(), x = re, te = ce(), C = te.startListening;
function Ue(i, t) {
  const n = {
    goToLine: () => C({
      actionCreator: q,
      effect: async (o, a) => {
        i.postMessage({
          command: "goToLine",
          payload: o.payload
        });
      }
    }),
    copyIssueId: () => C({
      actionCreator: M,
      effect: async (o, a) => {
        i.postMessage({
          command: "copyIssueId",
          payload: o.payload
        });
      }
    }),
    openLink: () => C({
      actionCreator: k,
      effect: async (o, a) => {
        i.postMessage({
          command: "openLink",
          payload: o.payload
        });
      }
    })
  };
  return C({
    matcher: pe(F, V, B),
    effect: async (o, a) => {
      window.scrollTo(0, 0);
    }
  }), ke(C, t), ue(n), te;
}
const R = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "M476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87-34.63 0-77.87 8.003-137.2 32.05V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464c0 13.3 10.75 24 24 24s24-10.75 24-24V384c53.59-23.86 96.02-31.81 132.8-31.81 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09 13.6-4.98 21.5-16.48 21.5-28.78V30.73C512 11.1 495.3 0 476.3 0zM464 319.8c-30.31 10.82-58.08 16.1-84.6 16.1-30.8 0-58.31-7-87.44-14.41-32.01-8.141-68.29-17.37-111.1-17.37-42.35 0-85.99 9.09-132.8 27.73V84.14l18.03-7.301c47.39-19.2 86.38-28.54 119.2-28.54 28.24.004 49.12 6.711 73.31 14.48 25.38 8.148 54.13 17.39 90.58 17.39 35.43 0 72.24-8.496 114.9-26.61V319.8z" }) });
function z({
  article: i,
  lang: t,
  openLink: n
}) {
  const o = (s) => {
    s.stopPropagation(), s.preventDefault(), n(s.target.href);
  }, a = b.useRef(null);
  b.useEffect(() => {
    const s = a.current.querySelectorAll("a");
    return s.forEach((d) => {
      d.addEventListener("click", o);
    }), () => {
      s.forEach((d) => {
        d.removeEventListener("click", o);
      });
    };
  });
  const l = [
    i ? i.description.text : "",
    I(i.example, t),
    I(i.exploit, t),
    I(i.remediation, t)
  ].join("");
  return /* @__PURE__ */ e.jsx(Ke, { ref: a, dangerouslySetInnerHTML: { __html: l } });
}
function I(i, t) {
  return !i || !i.sections ? "" : i.sections.map((n) => {
    if (n.text)
      return n.text;
    if (n.code)
      return `<pre>${n.code[t]}</pre>`;
  }).join("");
}
const Ke = c.div`
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
function _e({
  filters: i,
  onClick: t
}) {
  return /* @__PURE__ */ e.jsx(
    Qe,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t();
      },
      children: /* @__PURE__ */ e.jsxs(Ye, { children: [
        /* @__PURE__ */ e.jsx($e, {}),
        i !== 0 && /* @__PURE__ */ e.jsx(Xe, { children: i })
      ] })
    }
  );
}
const Qe = c.div`
  width: 34px;
  height: 26px;
  position: relative;
`, Xe = c.div`
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
`, Ye = c.button`
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
function Je() {
  const i = x((o) => o.audit.filter), t = h(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ e.jsx(Ze, { children: /* @__PURE__ */ e.jsx(
    A,
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
const Ze = c.div`
  width: 264px;
`;
function ei() {
  const i = h();
  return /* @__PURE__ */ e.jsxs(
    ii,
    {
      onClick: (t) => {
        i(u({})), t.preventDefault(), t.stopPropagation();
      },
      children: [
        /* @__PURE__ */ e.jsx(Q, {}),
        " ",
        /* @__PURE__ */ e.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const ii = c.div`
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
function ti() {
  const { issueTitles: i, filter: t } = x((o) => o.audit), n = h();
  return /* @__PURE__ */ e.jsx(oi, { children: /* @__PURE__ */ e.jsx(
    A,
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
const oi = c.div`
  width: 264px;
`;
function ni() {
  const i = x((o) => o.audit.filter), t = h(), n = [
    { label: "All", value: "all" },
    { label: "Security", value: "security" },
    { label: "Data validation", value: "datavalidation" },
    { label: "OpenAPI format requirements", value: "oasconformance" }
  ];
  return /* @__PURE__ */ e.jsx(si, { children: /* @__PURE__ */ e.jsx(
    A,
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
const si = c.div`
  width: 264px;
`, ai = {
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
function ri() {
  const i = x((o) => o.audit.filter), t = h(), n = i.domain !== void 0 ? ai[i.domain] : [];
  return /* @__PURE__ */ e.jsx(li, { children: /* @__PURE__ */ e.jsx(
    A,
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
const li = c.div`
  width: 264px;
`;
function di() {
  const { filtered: i, filter: t } = x((d) => d.audit), n = h(), [o, a] = b.useState(!0), s = ["rule", "domain", "group", "severity"].filter((d) => t && t[d] !== void 0).length;
  return /* @__PURE__ */ e.jsxs(ci, { children: [
    t.ids !== void 0 && /* @__PURE__ */ e.jsxs(N, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        i.length,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsxs(
        ui,
        {
          onClick: (d) => {
            n(u({})), d.preventDefault(), d.stopPropagation();
          },
          children: [
            /* @__PURE__ */ e.jsx(Q, {}),
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
      /* @__PURE__ */ e.jsx(_e, { filters: s, onClick: () => a(!o) })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(pi, { children: [
      /* @__PURE__ */ e.jsx(ni, {}),
      /* @__PURE__ */ e.jsx(ri, {}),
      /* @__PURE__ */ e.jsx(Je, {}),
      /* @__PURE__ */ e.jsx(ti, {}),
      /* @__PURE__ */ e.jsx(ei, {})
    ] })
  ] });
}
const ci = c.div`
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
`, pi = c.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`, ui = c.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
function hi() {
  const {
    kdb: i,
    filtered: t,
    audit: { filename: n }
  } = x((a) => a.audit), o = h();
  return /* @__PURE__ */ e.jsxs(xi, { children: [
    /* @__PURE__ */ e.jsx(di, {}),
    t.map((a, l) => /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx(P, { children: a.description }),
      /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
          " ",
          X[a.criticality]
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(R, {}),
          " Score Impact ",
          a.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx($, {}),
          /* @__PURE__ */ e.jsxs(
            "a",
            {
              href: "#",
              onClick: (s) => {
                s.preventDefault(), s.stopPropagation(), o(
                  q({
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
          /* @__PURE__ */ e.jsx(Y, {}),
          /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "#",
              onClick: (s) => {
                s.preventDefault(), s.stopPropagation(), o(M(a.id));
              },
              children: "Issue ID"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsx(
        z,
        {
          lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
          article: i[a.id],
          openLink: (s) => {
            o(k(s));
          }
        }
      )
    ] }, `issue-${l}`))
  ] });
}
const xi = c.div``;
function vi({ onShowIssues: i }) {
  return /* @__PURE__ */ e.jsx(
    fi,
    {
      onClick: (t) => {
        t.preventDefault(), t.stopPropagation(), i();
      },
      children: /* @__PURE__ */ e.jsxs(gi, { children: [
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
const fi = c.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${p.errorBorder});
  background-color: var(${p.errorBackground});
  color: var(${p.errorForeground});
  cursor: pointer;
`, gi = c.div`
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
  const n = h(), [o, a] = b.useState(!1), l = t.filter((r) => r.id === i), s = o ? l.length : 4, d = l.slice(0, s);
  return d.sort((r, f) => {
    const O = r.filename.localeCompare(f.filename);
    return O === 0 ? r.lineNo - f.lineNo : O;
  }), /* @__PURE__ */ e.jsxs(mi, { children: [
    /* @__PURE__ */ e.jsxs("h2", { children: [
      l.length,
      " results with this issue"
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: d.map((r) => /* @__PURE__ */ e.jsxs(ji, { children: [
      /* @__PURE__ */ e.jsx($, {}),
      /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: "#",
          onClick: (f) => {
            f.preventDefault(), f.stopPropagation(), n(
              q({
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
    !o && l.length > d.length && /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (r) => {
          r.preventDefault(), r.stopPropagation(), a(!0);
        },
        children: [
          "Show ",
          l.length - d.length,
          " more"
        ]
      }
    ),
    o && /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (r) => {
          r.preventDefault(), r.stopPropagation(), a(!1);
        },
        children: "Show less"
      }
    )
  ] });
}
const mi = c.div`
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
`, ji = c.div`
  display: flex;
  align-items: center;
  margin: 4px;
  gap: 4px;
  > svg {
    fill: var(${p.foreground});
  }
`;
function yi() {
  const {
    stats: i,
    issues: t,
    audit: { filename: n }
  } = x((s) => s.audit), o = h(), a = i.byIssue.filter((s) => s.important).slice().sort((s, d) => d.count - s.count).slice(0, 4), l = i.byIssue.filter((s) => s.important).slice().sort((s, d) => d.score - s.score).slice(0, 4);
  return /* @__PURE__ */ e.jsxs(bi, { children: [
    /* @__PURE__ */ e.jsx(E, { children: "Most common issues" }),
    a.map((s, d) => /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx(P, { children: s.title }),
      /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
          " ",
          X[s.criticality]
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(R, {}),
          " Score impact: ",
          s.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx($, {}),
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
              onClick: (r) => {
                r.preventDefault(), r.stopPropagation(), o(M(s.id));
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
            openLink: (r) => o(k(r))
          }
        )
      ] })
    ] }, `issue-${d}`)),
    /* @__PURE__ */ e.jsx(E, { children: "Opportunities" }),
    l.map((s, d) => /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx(P, { children: s.title }),
      /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
          " Count ",
          s.count
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(R, {}),
          " Score impact: ",
          s.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx($, {}),
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
            openLink: (r) => o(k(r))
          }
        )
      ] })
    ] }, `issue-${d}`))
  ] });
}
const bi = c.div`
  position: relative;
`, E = c.div`
  margin: 14px;
  font-size: 12px;
  font-weight: 500;
`;
function wi({
  isOpen: i,
  style: t,
  onClick: n
}) {
  return i ? /* @__PURE__ */ e.jsx(
    Le,
    {
      onClick: n,
      style: {
        cursor: "pointer",
        fill: `var(${p.foreground})`,
        ...t
      }
    }
  ) : /* @__PURE__ */ e.jsx(
    Te,
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
function Ci({
  sqgs: i,
  selected: t,
  onSelect: n
}) {
  return /* @__PURE__ */ e.jsx(Si, { children: i.map((o, a) => /* @__PURE__ */ e.jsx(
    $i,
    {
      selected: o.id === t,
      onClick: (l) => {
        l.preventDefault(), l.stopPropagation(), t !== o.id && n(a);
      },
      children: o.name
    },
    o.id
  )) });
}
const Si = c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`, $i = c.div`
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

  ${({ selected: i }) => i ? `background-color: var(${p.computedTwo});` : `background-color: var(${p.computedOne});`}
`;
function ki({ sqg: i, summary: t }) {
  const n = i.directives.minimumAssessmentScores;
  return i.directives.subcategoryRules, i.directives.issueRules, /* @__PURE__ */ e.jsxs(Ai, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Minimum acceptable score" }),
    /* @__PURE__ */ e.jsxs(Ii, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Score" }),
      /* @__PURE__ */ e.jsx("div", { children: "current" }),
      /* @__PURE__ */ e.jsx("div", { children: "Minimum acceptable" })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Global score" }),
      /* @__PURE__ */ e.jsx(j, { highlight: t.all < n.global, children: t.all }),
      /* @__PURE__ */ e.jsx(j, { children: n.global })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Security score" }),
      /* @__PURE__ */ e.jsx(j, { highlight: t.security.value < n.security, children: t.security.value }),
      /* @__PURE__ */ e.jsx(j, { children: n.security })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Data validation score" }),
      /* @__PURE__ */ e.jsx(j, { highlight: t.datavalidation.value < n.dataValidation, children: t.datavalidation.value }),
      /* @__PURE__ */ e.jsx(j, { children: n.dataValidation })
    ] })
  ] });
}
const Ai = c.div``, Ii = c.div`
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
`, j = c.div`
  ${({ highlight: i }) => i && "font-weight: 700;"}
`;
function Ti({ sqg: i, stats: t }) {
  const n = h(), o = i.directives.subcategoryRules, a = t.byGroup, l = {
    security: [
      {
        name: "Authentication",
        domain: "security",
        group: "authentication",
        level: o.security.authentication,
        violations: g(o.security.authentication, a.security.authentication)
      },
      {
        name: "Authorization",
        domain: "security",
        group: "authorization",
        level: o.security.authorization,
        violations: g(o.security.authorization, a.security.authorization)
      },
      {
        name: "Transport",
        domain: "security",
        group: "transport",
        level: o.security.transport,
        violations: g(o.security.transport, a.security.transport)
      }
    ],
    data: [
      {
        name: "Paths",
        domain: "datavalidation",
        group: "paths",
        level: o.dataValidation.paths,
        violations: g(o.dataValidation.paths, a.datavalidation.paths)
      },
      {
        name: "Parameters",
        domain: "datavalidation",
        group: "parameters",
        level: o.dataValidation.parameters,
        violations: g(
          o.dataValidation.parameters,
          t.byGroup.datavalidation.parameters
        )
      },
      {
        name: "Schema",
        domain: "datavalidation",
        group: "schema",
        level: o.dataValidation.schema,
        violations: g(o.dataValidation.schema, a.datavalidation.schema)
      },
      {
        name: "Response Definition",
        domain: "datavalidation",
        group: "responsedefinition",
        level: o.dataValidation.responseDefinition,
        violations: g(
          o.dataValidation.responseDefinition,
          a.datavalidation.responsedefinition
        )
      },
      {
        name: "Response Headers",
        domain: "datavalidation",
        group: "responseheader",
        level: o.dataValidation.responseHeaders,
        violations: g(
          o.dataValidation.responseHeaders,
          a.datavalidation.responseheader
        )
      }
    ]
  };
  return /* @__PURE__ */ e.jsxs(Li, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Allowed issue security levels" }),
    /* @__PURE__ */ e.jsxs(Di, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Category" }),
      /* @__PURE__ */ e.jsx("div", { children: "threshold" }),
      /* @__PURE__ */ e.jsx("div", { children: "issues found" })
    ] }),
    /* @__PURE__ */ e.jsx(H, { children: "Security" }),
    l.security.filter((s) => s.violations.length > 0).map((s, d) => /* @__PURE__ */ e.jsxs(W, { children: [
      /* @__PURE__ */ e.jsx("div", { children: s.name }),
      /* @__PURE__ */ e.jsx("div", { children: U(s.level) }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (r) => {
            r.stopPropagation(), r.preventDefault(), n(m("issues")), n(
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
    /* @__PURE__ */ e.jsx(H, { children: "Data validation" }),
    l.data.filter((s) => s.violations.length > 0).map((s, d) => /* @__PURE__ */ e.jsxs(W, { children: [
      /* @__PURE__ */ e.jsx("div", { children: s.name }),
      /* @__PURE__ */ e.jsx("div", { children: U(s.level) }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (r) => {
            r.stopPropagation(), r.preventDefault(), n(m("issues")), n(
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
const Li = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, Di = c.div`
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
`, H = c.div`
  display: flex;
  background-color: var(${p.computedOne});
  border-radius: 2px;
  padding: 8px;
`, W = c.div`
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
function g(i, t) {
  if (i === "none")
    return [];
  const n = L.indexOf(i), o = [];
  for (const a of L.slice(n))
    t[a] > 0 && o.push({ level: a, count: t[a] });
  return o;
}
const Pi = {
  info: "All issues are rejected",
  low: "Issues up to level Info allowed, levels Low to Critical rejected",
  medium: "Issues up to level Low allowed, levels Medium to Critical rejected",
  high: "Issues up to level Medium allowed, levels High to Critical rejected",
  critical: "Only Critical issues are rejected",
  none: "No restrictions"
};
function U(i) {
  return Pi[i];
}
function Ri({ sqg: i, stats: t }) {
  const n = h(), o = i.directives.issueRules ?? [], l = t.byIssue.filter((s) => o.includes(s.id));
  return l.length === 0 ? null : /* @__PURE__ */ e.jsxs(zi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Forbidden issues with problem found" }),
    l.map((s) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (d) => {
          d.preventDefault(), d.stopPropagation(), n(m("issues")), n(u({ rule: s.id }));
        },
        children: s.title
      }
    ) }))
  ] });
}
const zi = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
function Fi({
  compliance: i,
  summary: t,
  stats: n
}) {
  const [o, a] = b.useState(0), l = i.sqgsDetail[o];
  return /* @__PURE__ */ e.jsxs(Vi, { children: [
    /* @__PURE__ */ e.jsx(
      Ci,
      {
        sqgs: i.sqgsDetail,
        onSelect: a,
        selected: i.sqgsDetail[o].id
      }
    ),
    /* @__PURE__ */ e.jsx(ki, { sqg: l, summary: t }),
    /* @__PURE__ */ e.jsx(Ti, { sqg: l, stats: n }),
    /* @__PURE__ */ e.jsx(Ri, { sqg: l, stats: n })
  ] });
}
const Vi = c.div`
  padding: 8px;
  color: var(${p.foreground});
  background-color: var(${p.background});
  border-top: 1px solid var(${p.errorBorder});
`;
function Bi() {
  const { compliance: i, summary: t } = x((r) => r.audit.audit), n = x((r) => r.audit.stats), o = x((r) => r.audit.sqgTodo), a = h(), l = (r) => {
    a(Ge(r));
  }, [s, d] = b.useState(!1);
  return i === void 0 ? null : i.acceptance === "yes" ? /* @__PURE__ */ e.jsx(Oi, { children: /* @__PURE__ */ e.jsx(De, { message: "Security quality gates passed" }) }) : /* @__PURE__ */ e.jsxs(qi, { children: [
    /* @__PURE__ */ e.jsxs(Mi, { children: [
      /* @__PURE__ */ e.jsx(S, {}),
      /* @__PURE__ */ e.jsx("div", { children: "Security quality gates failed" }),
      /* @__PURE__ */ e.jsx(Ie, { value: o, onChange: l }),
      "Show only SQG to-do list",
      /* @__PURE__ */ e.jsx(
        wi,
        {
          isOpen: s,
          onClick: () => d(!s),
          style: { width: 14, height: 14 }
        }
      )
    ] }),
    s && /* @__PURE__ */ e.jsx(Fi, { compliance: i, summary: t, stats: n })
  ] });
}
const qi = c.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${p.errorBorder});
  background-color: var(${p.errorBackground});
  color: var(${p.errorForeground});
`, Mi = c.div`
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
`, Oi = c.div`
  margin: 8px;
`;
function Ni() {
  const i = x((n) => n.audit.audit.summary), t = h();
  return /* @__PURE__ */ e.jsx(Gi, { children: /* @__PURE__ */ e.jsxs(Ei, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: (n) => {
          n.preventDefault(), n.stopPropagation(), t(m("issues")), t(u({}));
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
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: (n) => {
          n.preventDefault(), n.stopPropagation(), t(m("issues")), t(u({ domain: "security" }));
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
        onClick: (n) => {
          n.preventDefault(), n.stopPropagation(), t(m("issues")), t(u({ domain: "datavalidation" }));
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
  ] }) });
}
const Gi = c.div`
  margin: 8px;
`, Ei = c.div`
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
function K() {
  const i = h(), { tab: t, audit: n } = x((o) => o.audit);
  return /* @__PURE__ */ e.jsxs(Hi, { children: [
    n.valid === !1 && /* @__PURE__ */ e.jsx(
      vi,
      {
        onShowIssues: () => {
          i(m("issues")), i(u({ domain: "oasconformance", severity: "critical" }));
        }
      }
    ),
    /* @__PURE__ */ e.jsx(Ni, {}),
    /* @__PURE__ */ e.jsx(Bi, {}),
    /* @__PURE__ */ e.jsx(
      Ae,
      {
        activeTab: t,
        setActiveTab: (o) => i(m(o)),
        tabs: [
          {
            id: "priority",
            title: "Priority",
            content: /* @__PURE__ */ e.jsx(yi, {})
          },
          { id: "issues", title: "Issues", content: /* @__PURE__ */ e.jsx(hi, {}) }
        ]
      }
    )
  ] });
}
const Hi = c.div``;
function Wi() {
  return /* @__PURE__ */ e.jsxs(Ui, { children: [
    /* @__PURE__ */ e.jsx(Pe, {}),
    "There is no Security Audit report available for this file"
  ] });
}
const Ui = c.div`
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
function Ki() {
  return /* @__PURE__ */ e.jsxs(_i, { children: [
    /* @__PURE__ */ e.jsxs(Qi, { children: [
      /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsx("div", {})
    ] }),
    /* @__PURE__ */ e.jsx(Xi, {})
  ] });
}
const _i = c.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`, oe = he`
  0% {
    background-color: var(${p.computedOne});
  }
  100% {
    background-color: var(${p.computedTwo});
  }
`, Qi = c.div`
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
    animation: ${oe} 1s linear infinite alternate;
  }
`, Xi = c.div`
  border: 1px solid var(${p.border});
  height: 15rem;
  animation: ${oe} 1s linear infinite alternate;
`, _ = [
  { id: "starting", title: "Starting", element: /* @__PURE__ */ e.jsx("div", {}) },
  { id: "blank", title: "Blank", element: /* @__PURE__ */ e.jsx("div", {}), when: ie },
  {
    id: "start-audit",
    title: "Audit is starting",
    element: /* @__PURE__ */ e.jsx(Ki, {}),
    when: ee
  },
  {
    id: "no-report",
    title: "No Audit Report",
    element: /* @__PURE__ */ e.jsx(Wi, {}),
    when: B
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ e.jsx(K, {}),
    when: F
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ e.jsx(K, {}),
    when: V
  }
], Yi = {
  startAudit: ee,
  cancelAudit: ie,
  showFullReport: F,
  showPartialReport: V,
  showNoReport: B,
  loadKdb: Ne,
  changeTheme: be
};
function Ji() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(je, {}),
    /* @__PURE__ */ e.jsx(ye, {})
  ] });
}
function Zi(i, t) {
  const n = We(Ue(i, _), t);
  xe(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ve.StrictMode, { children: /* @__PURE__ */ e.jsx(fe, { store: n, children: /* @__PURE__ */ e.jsx(ge.Provider, { value: _, children: /* @__PURE__ */ e.jsx(Ji, {}) }) }) })
  ), window.addEventListener("message", me(n, Yi));
}
window.renderWebView = Zi;
