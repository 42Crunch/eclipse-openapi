import { c as ae, a as re, u as le, b as de, l as ce, t as pe, r as ue, d as he, i as xe, s as ve, j as e, e as c, T as p, f as j, m as ge, g as fe, R as me, P as je, h as ye, k as be, n as $e, o as we, p as Ce } from "./TriangleExclamation.pAuQxBo5.js";
import { S as T, C as Se, a as ke, b as Ae, c as Q, d as X, e as Y } from "./Xmark.DIV8bk0p.js";
import { s as Ie } from "./listener.DBAk009r.js";
import { T as Le } from "./Tabs.Dwliy_Nj.js";
import { S as C } from "./ExclamationCircle.DcNm9nfm.js";
import { S, a as Te } from "./Switch.x8oPqJF_.js";
import { S as J } from "./AngleDown.FqWubUL_.js";
import { S as Z } from "./AngleUp.phJPZ_ZE.js";
import { P as A } from "./Select.mcNZKCHB.js";
import { B as De, S as Pe } from "./Banner.CPOTd1ij.js";
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
    byGroup: ie([])
  },
  kdb: {},
  issueTitles: [],
  filter: {},
  sqgTodo: !1,
  type: "openapi"
}, ee = ae({
  name: "audit",
  initialState: Re,
  reducers: {
    startAudit: (i, t) => {
    },
    cancelAudit: (i, t) => {
    },
    showFullReport: (i, { payload: t }) => {
      i.audit.filename !== t.filename && (i.tab = "priority", i.filter = {}, i.sqgTodo = !1, i.type = t.filename.toLowerCase().endsWith(".graphql") || t.filename.toLowerCase().endsWith(".graphqls") ? "graphql" : "openapi"), (t.compliance === void 0 || t.compliance.acceptance === "yes") && (i.sqgTodo = !1), i.audit = t, $(i);
    },
    showPartialReport: (i, {
      payload: { report: t, uri: o, ids: n }
    }) => {
      i.audit = t, i.filter = { ids: n }, i.tab = "issues", i.sqgTodo = !1, i.type = t.filename.toLowerCase().endsWith(".graphql") || t.filename.toLowerCase().endsWith(".graphqls") ? "graphql" : "openapi", $(i);
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
  const { issues: t, filtered: o, stats: n, titles: d } = qe(
    i.sqgTodo ? i.audit.todo : i.audit.issues,
    i.audit.files,
    i.kdb,
    i.filter,
    i.type
  );
  i.issues = t, i.filtered = o, i.stats = n, i.issueTitles = d;
}
function qe(i, t, o, n, d) {
  const r = Fe(i, t, o, d), s = Ve(r, o, d), l = Be(s), a = ze(r, n);
  return { issues: r, filtered: a, stats: s, titles: l };
}
function ze(i, t) {
  const o = (a, g) => t.ids === void 0 || t.ids.includes(g), n = (a) => t.domain === void 0 || a.domain === (t == null ? void 0 : t.domain), d = (a) => t.group === void 0 || a.group === (t == null ? void 0 : t.group), r = (a) => (t == null ? void 0 : t.rule) === void 0 || a.id === t.rule, s = t.severity !== void 0 ? T.indexOf(t.severity) + 1 : 0, l = (a) => t.severity === void 0 || a.criticality >= s;
  return i.filter((a, g) => o(a, g) && n(a) && d(a) && r(a) && l(a));
}
function Fe(i, t, o, n) {
  return Object.entries(i).map(([r, s]) => s.map((l, a) => ({
    ...l,
    domain: n === "graphql" ? "datavalidation" : o[l.id].group,
    group: n === "graphql" ? "schema" : o[l.id].subgroup,
    filename: t[l.documentUri].relative
  }))).reduce((r, s) => r.concat(s), []);
}
function Ve(i, t, o) {
  const n = {};
  for (const s of i)
    n[s.id] || (n[s.id] = []), n[s.id].push(s);
  const d = Object.keys(n).map((s) => ({
    id: s,
    kdb: o === "graphql" ? Ne : t[s] || Me,
    title: o === "graphql" ? n[s][0].description : t[s].title.text.replace(/^<h1>|<\/h1>$/g, ""),
    domain: n[s][0].domain,
    score: n[s].reduce((l, a) => l + a.score, 0),
    criticality: Math.max(...n[s].map((l) => l.criticality)),
    displayScore: Oe(n[s].reduce((l, a) => l + a.score, 0)),
    count: n[s].length,
    important: n[s].some((l) => l.criticality >= Se.Low)
  })), r = ie(i);
  return { byIssue: d, byGroup: r };
}
function ie(i) {
  var n, d;
  const t = { info: 0, low: 0, medium: 0, high: 0, critical: 0 }, o = {
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
    const s = r.domain, l = r.group, a = ke[r.criticality];
    s !== void 0 && l !== void 0 && //@ts-ignore
    ((d = (n = o[s]) == null ? void 0 : n[l]) == null ? void 0 : d[a]) !== void 0 && o[s][l][a]++;
  }
  return o;
}
function Be(i) {
  return i.byIssue.map((t) => ({ value: t.id, label: t.title })).sort((t, o) => {
    const n = t.value.toLowerCase(), d = o.value.toLowerCase();
    return n < d ? -1 : n > d ? 1 : 0;
  });
}
function Oe(i) {
  const t = Math.abs(Math.round(i));
  return i === 0 ? "0" : t >= 1 ? t.toString() : "less than 1";
}
const Me = {
  title: {
    text: "<h1>Article not found</h1>"
  },
  description: {
    text: `<p>Whoops! Looks like there has been an oversight and we are missing a page for this issue.</p>
           <p><a href="https://apisecurity.io/contact-us/">Let us know</a> the title of the issue, and we make sure to add it to the encyclopedia.</p>`
  }
}, Ne = {
  title: {
    text: ""
  },
  description: {
    text: ""
  }
}, {
  startAudit: te,
  cancelAudit: ne,
  showFullReport: z,
  showPartialReport: F,
  showNoReport: V,
  loadKdb: Ge,
  goToLine: B,
  copyIssueId: O,
  openLink: k,
  changeTab: m,
  changeFilter: u,
  setSqgTodo: Ee
} = ee.actions, We = ee.reducer, He = {
  audit: We,
  theme: pe,
  router: ue
}, Ue = (i, t) => re({
  reducer: He,
  middleware: (o) => o().prepend(i.middleware).concat(ce),
  preloadedState: {
    theme: t
  }
}), h = () => le(), x = de, oe = he(), w = oe.startListening;
function Ke(i, t) {
  const o = {
    goToLine: () => w({
      actionCreator: B,
      effect: async (n, d) => {
        i.postMessage({
          command: "goToLine",
          payload: n.payload
        });
      }
    }),
    copyIssueId: () => w({
      actionCreator: O,
      effect: async (n, d) => {
        i.postMessage({
          command: "copyIssueId",
          payload: n.payload
        });
      }
    }),
    openLink: () => w({
      actionCreator: k,
      effect: async (n, d) => {
        i.postMessage({
          command: "openLink",
          payload: n.payload
        });
      }
    })
  };
  return w({
    matcher: xe(z, F, V),
    effect: async (n, d) => {
      window.scrollTo(0, 0);
    }
  }), Ie(w, t), ve(o), oe;
}
const D = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "M476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87-34.63 0-77.87 8.003-137.2 32.05V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464c0 13.3 10.75 24 24 24s24-10.75 24-24V384c53.59-23.86 96.02-31.81 132.8-31.81 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09 13.6-4.98 21.5-16.48 21.5-28.78V30.73C512 11.1 495.3 0 476.3 0zM464 319.8c-30.31 10.82-58.08 16.1-84.6 16.1-30.8 0-58.31-7-87.44-14.41-32.01-8.141-68.29-17.37-111.1-17.37-42.35 0-85.99 9.09-132.8 27.73V84.14l18.03-7.301c47.39-19.2 86.38-28.54 119.2-28.54 28.24.004 49.12 6.711 73.31 14.48 25.38 8.148 54.13 17.39 90.58 17.39 35.43 0 72.24-8.496 114.9-26.61V319.8z" }) });
function P({
  children: i,
  defaultCollapsed: t
}) {
  const [o, n] = j.useState(t ?? !0), d = i.slice(0, i.length - 1), r = i[i.length - 1];
  return /* @__PURE__ */ e.jsxs(_e, { children: [
    /* @__PURE__ */ e.jsxs(
      Qe,
      {
        $collapsed: o,
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), n(!o);
        },
        children: [
          /* @__PURE__ */ e.jsx("div", { children: o ? /* @__PURE__ */ e.jsx(J, {}) : /* @__PURE__ */ e.jsx(Z, {}) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            ...d
          ] })
        ]
      }
    ),
    !o && /* @__PURE__ */ e.jsx(Xe, { children: r })
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
`, R = c.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 600;
`, b = c.div`
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
function q({
  article: i,
  lang: t,
  openLink: o
}) {
  const n = (s) => {
    s.stopPropagation(), s.preventDefault(), o(s.target.href);
  }, d = j.useRef(null);
  j.useEffect(() => {
    const s = d.current.querySelectorAll("a");
    return s.forEach((l) => {
      l.addEventListener("click", n);
    }), () => {
      s.forEach((l) => {
        l.removeEventListener("click", n);
      });
    };
  });
  const r = [
    i ? i.description.text : "",
    I(i.example, t),
    I(i.exploit, t),
    I(i.remediation, t)
  ].join("");
  return /* @__PURE__ */ e.jsx(Ye, { ref: d, dangerouslySetInnerHTML: { __html: r } });
}
function I(i, t) {
  return !i || !i.sections ? "" : i.sections.map((o) => {
    if (o.text)
      return o.text;
    if (o.code)
      return `<pre>${o.code[t]}</pre>`;
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
      onClick: (o) => {
        o.preventDefault(), o.stopPropagation(), t();
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
  const i = x((n) => n.audit.filter), t = h(), o = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ e.jsx(ni, { children: /* @__PURE__ */ e.jsx(
    A,
    {
      label: "Severity",
      options: o,
      placeholder: "All",
      onSelectedItemChange: (n) => {
        n && n.value !== "all" ? t(u({ ...i, severity: n == null ? void 0 : n.value })) : t(u({ ...i, severity: void 0 }));
      },
      selected: (i == null ? void 0 : i.severity) || "all"
    }
  ) });
}
const ni = c.div`
  width: 264px;
`;
function oi() {
  const i = h();
  return /* @__PURE__ */ e.jsxs(
    si,
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
  const { issueTitles: i, filter: t } = x((n) => n.audit), o = h();
  return /* @__PURE__ */ e.jsx(ri, { children: /* @__PURE__ */ e.jsx(
    A,
    {
      label: "Rules",
      options: [{ label: "All", value: "all" }, ...i],
      placeholder: "All",
      onSelectedItemChange: (n) => {
        n && n.value !== "all" ? o(u({ ...t, rule: n == null ? void 0 : n.value })) : o(u({ ...t, rule: void 0 }));
      },
      selected: (t == null ? void 0 : t.severity) || "all"
    }
  ) });
}
const ri = c.div`
  width: 264px;
`;
function li() {
  const i = x((n) => n.audit.filter), t = h(), o = [
    { label: "All", value: "all" },
    { label: "Security", value: "security" },
    { label: "Data validation", value: "datavalidation" },
    { label: "OpenAPI format requirements", value: "oasconformance" }
  ];
  return /* @__PURE__ */ e.jsx(di, { children: /* @__PURE__ */ e.jsx(
    A,
    {
      label: "Category",
      options: o,
      placeholder: "All",
      onSelectedItemChange: (n) => {
        n && n.value !== "all" ? t(u({ ...i, domain: n == null ? void 0 : n.value })) : t(u({ ...i, domain: void 0 }));
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
  const i = x((n) => n.audit.filter), t = h(), o = i.domain !== void 0 ? ci[i.domain] : [];
  return /* @__PURE__ */ e.jsx(ui, { children: /* @__PURE__ */ e.jsx(
    A,
    {
      label: "Group",
      options: o,
      placeholder: "All",
      onSelectedItemChange: (n) => {
        n && n.value !== "all" ? t(u({ ...i, group: n == null ? void 0 : n.value })) : t(u({ ...i, group: void 0 }));
      },
      selected: (i == null ? void 0 : i.group) || "all"
    }
  ) });
}
const ui = c.div`
  width: 264px;
`;
function hi() {
  const { filtered: i, filter: t, type: o } = x((a) => a.audit), n = h(), [d, r] = j.useState(!0), l = ["rule", "domain", "group", "severity"].filter((a) => t && t[a] !== void 0).length;
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
            n(u({})), a.preventDefault(), a.stopPropagation();
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
      /* @__PURE__ */ e.jsx(Je, { filters: l, onClick: () => r(!d) })
    ] }),
    !d && /* @__PURE__ */ e.jsxs(vi, { children: [
      o === "openapi" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(li, {}),
        /* @__PURE__ */ e.jsx(pi, {})
      ] }),
      /* @__PURE__ */ e.jsx(ti, {}),
      /* @__PURE__ */ e.jsx(ai, {}),
      /* @__PURE__ */ e.jsx(oi, {})
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
    type: o,
    audit: { filename: n }
  } = x((r) => r.audit), d = h();
  return /* @__PURE__ */ e.jsxs(mi, { children: [
    /* @__PURE__ */ e.jsx(hi, {}),
    t.map((r, s) => /* @__PURE__ */ e.jsxs(P, { children: [
      /* @__PURE__ */ e.jsx(R, { children: r.description }),
      /* @__PURE__ */ e.jsx(b, { children: /* @__PURE__ */ e.jsxs(b, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(C, {}),
          " ",
          X[r.criticality]
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(D, {}),
          " Score Impact ",
          r.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
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
      o !== "graphql" && /* @__PURE__ */ e.jsx(
        q,
        {
          lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
          article: i[r.id],
          openLink: (l) => {
            d(k(l));
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
        /* @__PURE__ */ e.jsx(C, {}),
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
function G({ issueId: i, issues: t }) {
  const o = h(), [n, d] = j.useState(!1), r = t.filter((a) => a.id === i), s = n ? r.length : 4, l = r.slice(0, s);
  return l.sort((a, g) => {
    const M = a.filename.localeCompare(g.filename);
    return M === 0 ? a.lineNo - g.lineNo : M;
  }), /* @__PURE__ */ e.jsxs($i, { children: [
    /* @__PURE__ */ e.jsxs("h2", { children: [
      r.length,
      " results with this issue"
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: l.map((a) => /* @__PURE__ */ e.jsxs(wi, { children: [
      /* @__PURE__ */ e.jsx(S, {}),
      /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: "#",
          onClick: (g) => {
            g.preventDefault(), g.stopPropagation(), o(
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
    !n && r.length > l.length && /* @__PURE__ */ e.jsxs(
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
    n && /* @__PURE__ */ e.jsx(
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
const $i = c.div`
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
`, wi = c.div`
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
    audit: { filename: o }
  } = x((s) => s.audit), n = h(), d = i.byIssue.filter((s) => s.important).slice().sort((s, l) => l.count - s.count).slice(0, 4), r = i.byIssue.filter((s) => s.important).slice().sort((s, l) => l.score - s.score).slice(0, 4);
  return /* @__PURE__ */ e.jsxs(Si, { children: [
    /* @__PURE__ */ e.jsx(E, { children: "Most common issues" }),
    d.map((s, l) => /* @__PURE__ */ e.jsxs(P, { children: [
      /* @__PURE__ */ e.jsx(R, { children: s.title }),
      /* @__PURE__ */ e.jsx(b, { children: /* @__PURE__ */ e.jsxs(b, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(C, {}),
          " ",
          X[s.criticality]
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(D, {}),
          " Score impact: ",
          s.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
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
                a.preventDefault(), a.stopPropagation(), n(O(s.id));
              },
              children: "Issue ID"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(G, { issueId: s.id, issues: t }),
        /* @__PURE__ */ e.jsx(
          q,
          {
            lang: o.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: s.kdb,
            openLink: (a) => n(k(a))
          }
        )
      ] })
    ] }, `issue-${l}`)),
    /* @__PURE__ */ e.jsx(E, { children: "Opportunities" }),
    r.map((s, l) => /* @__PURE__ */ e.jsxs(P, { children: [
      /* @__PURE__ */ e.jsx(R, { children: s.title }),
      /* @__PURE__ */ e.jsx(b, { children: /* @__PURE__ */ e.jsxs(b, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(C, {}),
          " Count ",
          s.count
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(D, {}),
          " Score impact: ",
          s.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(S, {}),
          " ",
          s.count,
          " result(s)"
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(G, { issueId: s.id, issues: t }),
        /* @__PURE__ */ e.jsx(
          q,
          {
            lang: o.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: s.kdb,
            openLink: (a) => n(k(a))
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
  onClick: o
}) {
  return i ? /* @__PURE__ */ e.jsx(
    Z,
    {
      onClick: o,
      style: {
        cursor: "pointer",
        fill: `var(${p.foreground})`,
        ...t
      }
    }
  ) : /* @__PURE__ */ e.jsx(
    J,
    {
      onClick: o,
      style: {
        cursor: "pointer",
        fill: `var(${p.foreground})`,
        ...t
      }
    }
  );
}
function Ai({
  sqgs: i,
  selected: t,
  onSelect: o
}) {
  return /* @__PURE__ */ e.jsx(Ii, { children: i.map((n, d) => /* @__PURE__ */ e.jsx(
    Li,
    {
      $selected: n.id === t,
      onClick: (r) => {
        r.preventDefault(), r.stopPropagation(), t !== n.id && o(d);
      },
      children: n.name
    },
    n.id
  )) });
}
const Ii = c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`, Li = c.div`
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
  const o = i.directives.minimumAssessmentScores;
  return i.directives.subcategoryRules, i.directives.issueRules, /* @__PURE__ */ e.jsxs(Di, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Minimum acceptable score" }),
    /* @__PURE__ */ e.jsxs(Pi, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Score" }),
      /* @__PURE__ */ e.jsx("div", { children: "current" }),
      /* @__PURE__ */ e.jsx("div", { children: "Minimum acceptable" })
    ] }),
    /* @__PURE__ */ e.jsxs(L, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Global score" }),
      /* @__PURE__ */ e.jsx(y, { $highlight: t.all < o.global, children: t.all }),
      /* @__PURE__ */ e.jsx(y, { children: o.global })
    ] }),
    /* @__PURE__ */ e.jsxs(L, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Security score" }),
      /* @__PURE__ */ e.jsx(y, { $highlight: t.security.value < o.security, children: t.security.value }),
      /* @__PURE__ */ e.jsx(y, { children: o.security })
    ] }),
    /* @__PURE__ */ e.jsxs(L, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Data validation score" }),
      /* @__PURE__ */ e.jsx(y, { $highlight: t.datavalidation.value < o.dataValidation, children: t.datavalidation.value }),
      /* @__PURE__ */ e.jsx(y, { children: o.dataValidation })
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
`, L = c.div`
  display: flex;
  > div {
    flex: 1;
    margin: 8px;
  }
`, y = c.div`
  ${({ $highlight: i }) => i && "font-weight: 700;"}
`;
function Ri({ sqg: i, stats: t }) {
  const o = h(), n = i.directives.subcategoryRules, d = t.byGroup, r = {
    security: [
      {
        name: "Authentication",
        domain: "security",
        group: "authentication",
        level: n.security.authentication,
        violations: f(n.security.authentication, d.security.authentication)
      },
      {
        name: "Authorization",
        domain: "security",
        group: "authorization",
        level: n.security.authorization,
        violations: f(n.security.authorization, d.security.authorization)
      },
      {
        name: "Transport",
        domain: "security",
        group: "transport",
        level: n.security.transport,
        violations: f(n.security.transport, d.security.transport)
      }
    ],
    data: [
      {
        name: "Paths",
        domain: "datavalidation",
        group: "paths",
        level: n.dataValidation.paths,
        violations: f(n.dataValidation.paths, d.datavalidation.paths)
      },
      {
        name: "Parameters",
        domain: "datavalidation",
        group: "parameters",
        level: n.dataValidation.parameters,
        violations: f(
          n.dataValidation.parameters,
          t.byGroup.datavalidation.parameters
        )
      },
      {
        name: "Schema",
        domain: "datavalidation",
        group: "schema",
        level: n.dataValidation.schema,
        violations: f(n.dataValidation.schema, d.datavalidation.schema)
      },
      {
        name: "Response Definition",
        domain: "datavalidation",
        group: "responsedefinition",
        level: n.dataValidation.responseDefinition,
        violations: f(
          n.dataValidation.responseDefinition,
          d.datavalidation.responsedefinition
        )
      },
      {
        name: "Response Headers",
        domain: "datavalidation",
        group: "responseheader",
        level: n.dataValidation.responseHeaders,
        violations: f(
          n.dataValidation.responseHeaders,
          d.datavalidation.responseheader
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
    /* @__PURE__ */ e.jsx(W, { children: "Security" }),
    r.security.filter((s) => s.violations.length > 0).map((s, l) => /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx("div", { children: s.name }),
      /* @__PURE__ */ e.jsx("div", { children: U(s.level) }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (a) => {
            a.stopPropagation(), a.preventDefault(), o(m("issues")), o(
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
    /* @__PURE__ */ e.jsx(W, { children: "Data validation" }),
    r.data.filter((s) => s.violations.length > 0).map((s, l) => /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx("div", { children: s.name }),
      /* @__PURE__ */ e.jsx("div", { children: U(s.level) }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (a) => {
            a.stopPropagation(), a.preventDefault(), o(m("issues")), o(
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
`, W = c.div`
  display: flex;
  background-color: var(${p.computedOne});
  border-radius: 2px;
  padding: 8px;
`, H = c.div`
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
function f(i, t) {
  if (i === "none")
    return [];
  const o = T.indexOf(i), n = [];
  for (const d of T.slice(o))
    t[d] > 0 && n.push({ level: d, count: t[d] });
  return n;
}
const Fi = {
  info: "All issues are rejected",
  low: "Issues up to level Info allowed, levels Low to Critical rejected",
  medium: "Issues up to level Low allowed, levels Medium to Critical rejected",
  high: "Issues up to level Medium allowed, levels High to Critical rejected",
  critical: "Only Critical issues are rejected",
  none: "No restrictions"
};
function U(i) {
  return Fi[i];
}
function Vi({ sqg: i, stats: t }) {
  const o = h(), n = i.directives.issueRules ?? [], r = t.byIssue.filter((s) => n.includes(s.id));
  return r.length === 0 ? null : /* @__PURE__ */ e.jsxs(Bi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Forbidden issues with problem found" }),
    r.map((s) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), o(m("issues")), o(u({ rule: s.id }));
        },
        children: s.title
      }
    ) }))
  ] });
}
const Bi = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
function Oi({
  compliance: i,
  summary: t,
  stats: o
}) {
  const [n, d] = j.useState(0), r = i.sqgsDetail[n];
  return /* @__PURE__ */ e.jsxs(Mi, { children: [
    /* @__PURE__ */ e.jsx(
      Ai,
      {
        sqgs: i.sqgsDetail,
        onSelect: d,
        selected: i.sqgsDetail[n].id
      }
    ),
    /* @__PURE__ */ e.jsx(Ti, { sqg: r, summary: t }),
    /* @__PURE__ */ e.jsx(Ri, { sqg: r, stats: o }),
    /* @__PURE__ */ e.jsx(Vi, { sqg: r, stats: o })
  ] });
}
const Mi = c.div`
  padding: 8px;
  color: var(${p.foreground});
  background-color: var(${p.background});
  border-top: 1px solid var(${p.errorBorder});
`;
function Ni() {
  const { compliance: i, summary: t } = x((a) => a.audit.audit), o = x((a) => a.audit.stats), n = x((a) => a.audit.sqgTodo), d = h(), r = (a) => {
    d(Ee(a));
  }, [s, l] = j.useState(!1);
  return i === void 0 ? null : i.acceptance === "yes" ? /* @__PURE__ */ e.jsx(Wi, { children: /* @__PURE__ */ e.jsx(De, { message: "Security quality gates passed" }) }) : /* @__PURE__ */ e.jsxs(Gi, { children: [
    /* @__PURE__ */ e.jsxs(Ei, { children: [
      /* @__PURE__ */ e.jsx(C, {}),
      /* @__PURE__ */ e.jsx("div", { children: "Security quality gates failed" }),
      /* @__PURE__ */ e.jsx(Te, { value: n, onChange: r }),
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
    s && /* @__PURE__ */ e.jsx(Oi, { compliance: i, summary: t, stats: o })
  ] });
}
const Gi = c.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${p.errorBorder});
  background-color: var(${p.errorBackground});
  color: var(${p.errorForeground});
`, Ei = c.div`
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
`, Wi = c.div`
  margin: 8px;
`;
function Hi() {
  const i = x((n) => n.audit.audit.summary), t = x((n) => n.audit.type), o = h();
  return /* @__PURE__ */ e.jsx(Ui, { children: /* @__PURE__ */ e.jsxs(Ki, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: (n) => {
          n.preventDefault(), n.stopPropagation(), o(m("issues")), o(u({}));
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
          onClick: (n) => {
            n.preventDefault(), n.stopPropagation(), o(m("issues")), o(u({ domain: "security" }));
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
            n.preventDefault(), n.stopPropagation(), o(m("issues")), o(u({ domain: "datavalidation" }));
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
function K() {
  const i = h(), { tab: t, audit: o } = x((n) => n.audit);
  return /* @__PURE__ */ e.jsxs(_i, { children: [
    o.valid === !1 && /* @__PURE__ */ e.jsx(
      ji,
      {
        onShowIssues: () => {
          i(m("issues")), i(u({ domain: "oasconformance", severity: "critical" }));
        }
      }
    ),
    /* @__PURE__ */ e.jsx(Hi, {}),
    /* @__PURE__ */ e.jsx(Ni, {}),
    /* @__PURE__ */ e.jsx(
      Le,
      {
        activeTab: t,
        setActiveTab: (n) => i(m(n)),
        tabs: [
          {
            id: "priority",
            title: "Priority",
            content: /* @__PURE__ */ e.jsx(Ci, {})
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
`, se = ge`
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
    animation: ${se} 1s linear infinite alternate;
  }
`, et = c.div`
  border: 1px solid var(${p.border});
  height: 15rem;
  animation: ${se} 1s linear infinite alternate;
`, _ = [
  { id: "starting", title: "Starting", element: /* @__PURE__ */ e.jsx("div", {}) },
  { id: "blank", title: "Blank", element: /* @__PURE__ */ e.jsx("div", {}), when: ne },
  {
    id: "start-audit",
    title: "Audit is starting",
    element: /* @__PURE__ */ e.jsx(Yi, {}),
    when: te
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
    element: /* @__PURE__ */ e.jsx(K, {}),
    when: z
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ e.jsx(K, {}),
    when: F
  }
], it = {
  startAudit: te,
  cancelAudit: ne,
  showFullReport: z,
  showPartialReport: F,
  showNoReport: V,
  loadKdb: Ge,
  changeTheme: Ce
};
function tt() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx($e, {}),
    /* @__PURE__ */ e.jsx(we, {})
  ] });
}
function nt(i, t) {
  const o = Ue(Ke(i, _), t);
  fe(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(me.StrictMode, { children: /* @__PURE__ */ e.jsx(je, { store: o, children: /* @__PURE__ */ e.jsx(ye.Provider, { value: _, children: /* @__PURE__ */ e.jsx(tt, {}) }) }) })
  ), window.addEventListener("message", be(o, it));
}
window.renderWebView = nt;
