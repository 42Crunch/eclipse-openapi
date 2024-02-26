import { c as re, a as ae, u as le, b as de, l as ce, t as pe, r as ue, d as xe, i as he, s as ve, j as e, q as d, T as c, e as j, W as ge, f as fe, R as me, P as je, g as ye, m as be, h as we, k as $e, n as Ce } from "./extends.lDO40HzL.js";
import { S as L, C as Se, a as ke, b as Ae, c as Q, d as X, e as Y } from "./Xmark.D83KUlPs.js";
import { s as Ie } from "./listener.wKhZf4Un.js";
import { T as Te } from "./Tabs.Dk4klX6L.js";
import { S as C } from "./ExclamationCircle.BCxicLph.js";
import { S as J } from "./AngleDown.Bd1A6fn9.js";
import { S as Z } from "./AngleUp.DkgGLPvP.js";
import { P as A } from "./Select.BV5whCeg.js";
import { S as Le } from "./Switch.C_E8t4Vp.js";
import { B as De, S as Pe } from "./Banner.oieNsuut.js";
const Re = {
  audit: {
    filename: "",
    files: {},
    issues: {},
    minimalReport: !1,
    valid: !0,
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
  sqgTodo: !1
}, ee = re({
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
      payload: { report: t, uri: o, ids: n }
    }) => {
      i.audit = t, i.filter = { ids: n }, i.tab = "issues", i.sqgTodo = !1, w(i);
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
  const { issues: t, filtered: o, stats: n, titles: r } = ze(
    i.sqgTodo ? i.audit.todo : i.audit.issues,
    i.audit.files,
    i.kdb,
    i.filter
  );
  i.issues = t, i.filtered = o, i.stats = n, i.issueTitles = r;
}
function ze(i, t, o, n) {
  const r = Be(i, t, o), l = Ve(r, o), s = Me(l), p = Fe(r, n);
  return { issues: r, filtered: p, stats: l, titles: s };
}
function Fe(i, t) {
  const o = (a, g) => t.ids === void 0 || t.ids.includes(g), n = (a) => t.domain === void 0 || a.domain === (t == null ? void 0 : t.domain), r = (a) => t.group === void 0 || a.group === (t == null ? void 0 : t.group), l = (a) => (t == null ? void 0 : t.rule) === void 0 || a.id === t.rule, s = t.severity !== void 0 ? L.indexOf(t.severity) + 1 : 0, p = (a) => t.severity === void 0 || a.criticality >= s;
  return i.filter((a, g) => o(a, g) && n(a) && r(a) && l(a) && p(a));
}
function Be(i, t, o) {
  return Object.entries(i).map(([r, l]) => l.map((s, p) => ({
    ...s,
    domain: o[s.id].group,
    group: o[s.id].subgroup,
    filename: t[s.documentUri].relative
  }))).reduce((r, l) => r.concat(l), []);
}
function Ve(i, t) {
  const o = {};
  for (const l of i)
    o[l.id] || (o[l.id] = []), o[l.id].push(l);
  const n = Object.keys(o).map((l) => ({
    id: l,
    kdb: t[l] || qe,
    title: t[l].title.text.replace(/^<h1>|<\/h1>$/g, ""),
    domain: o[l][0].domain,
    score: o[l].reduce((s, p) => s + p.score, 0),
    criticality: Math.max(...o[l].map((s) => s.criticality)),
    displayScore: Oe(o[l].reduce((s, p) => s + p.score, 0)),
    count: o[l].length,
    important: o[l].some((s) => s.criticality >= Se.Low)
  })), r = ie(i);
  return { byIssue: n, byGroup: r };
}
function ie(i) {
  var n, r;
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
  for (const l of i) {
    const s = l.domain, p = l.group, a = ke[l.criticality];
    s !== void 0 && p !== void 0 && //@ts-ignore
    ((r = (n = o[s]) == null ? void 0 : n[p]) == null ? void 0 : r[a]) !== void 0 && o[s][p][a]++;
  }
  return o;
}
function Me(i) {
  return i.byIssue.map((t) => ({ value: t.id, label: t.title })).sort((t, o) => {
    const n = t.value.toLowerCase(), r = o.value.toLowerCase();
    return n < r ? -1 : n > r ? 1 : 0;
  });
}
function Oe(i) {
  const t = Math.abs(Math.round(i));
  return i === 0 ? "0" : t >= 1 ? t.toString() : "less than 1";
}
const qe = {
  title: {
    text: "<h1>Article not found</h1>"
  },
  description: {
    text: `<p>Whoops! Looks like there has been an oversight and we are missing a page for this issue.</p>
           <p><a href="https://apisecurity.io/contact-us/">Let us know</a> the title of the issue, and we make sure to add it to the encyclopedia.</p>`
  }
}, {
  startAudit: te,
  cancelAudit: ne,
  showFullReport: F,
  showPartialReport: B,
  showNoReport: V,
  loadKdb: Ne,
  goToLine: M,
  copyIssueId: O,
  openLink: S,
  changeTab: m,
  changeFilter: u,
  setSqgTodo: Ge
} = ee.actions, Ee = ee.reducer, He = {
  audit: Ee,
  theme: pe,
  router: ue
}, We = (i, t) => ae({
  reducer: He,
  middleware: (o) => o().prepend(i.middleware).concat(ce),
  preloadedState: {
    theme: t
  }
}), x = () => le(), h = de, oe = xe(), $ = oe.startListening;
function Ue(i, t) {
  const o = {
    goToLine: () => $({
      actionCreator: M,
      effect: async (n, r) => {
        i.postMessage({
          command: "goToLine",
          payload: n.payload
        });
      }
    }),
    copyIssueId: () => $({
      actionCreator: O,
      effect: async (n, r) => {
        i.postMessage({
          command: "copyIssueId",
          payload: n.payload
        });
      }
    }),
    openLink: () => $({
      actionCreator: S,
      effect: async (n, r) => {
        i.postMessage({
          command: "openLink",
          payload: n.payload
        });
      }
    })
  };
  return $({
    matcher: he(F, B, V),
    effect: async (n, r) => {
      window.scrollTo(0, 0);
    }
  }), Ie($, t), ve(o), oe;
}
const D = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "M476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87-34.63 0-77.87 8.003-137.2 32.05V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464c0 13.3 10.75 24 24 24s24-10.75 24-24V384c53.59-23.86 96.02-31.81 132.8-31.81 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09 13.6-4.98 21.5-16.48 21.5-28.78V30.73C512 11.1 495.3 0 476.3 0zM464 319.8c-30.31 10.82-58.08 16.1-84.6 16.1-30.8 0-58.31-7-87.44-14.41-32.01-8.141-68.29-17.37-111.1-17.37-42.35 0-85.99 9.09-132.8 27.73V84.14l18.03-7.301c47.39-19.2 86.38-28.54 119.2-28.54 28.24.004 49.12 6.711 73.31 14.48 25.38 8.148 54.13 17.39 90.58 17.39 35.43 0 72.24-8.496 114.9-26.61V319.8z" }) }), k = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "M173 131.5c56.2-56.23 147.3-56.23 203.5 0C430 185 432.9 270.9 383 327.9l-5.3 6.1c-8.8 10-23.9 11-33.9 2.3s-11-23.9-2.3-33.9l5.4-6.1c33.2-38 31.3-95.2-4.4-130.9-37.4-38.3-98.1-38.3-136.4 0L93.63 278.7c-37.44 37.5-37.44 98.2 0 135.6 35.67 34.8 92.97 37.6 130.87 4.4l6.2-5.4c9.9-8.7 25.1-7.7 33.8 2.3 8.8 9.9 7.7 25.1-2.2 33.8l-6.2 5.4c-57 49.8-142.9 47-196.41-6.6-56.185-56.1-56.185-148.1 0-203.4L173 131.5zm294 249c-56.2 56.2-147.3 56.2-203.5 0-54.4-54.4-56.4-139.4-6.6-196.4l4.7-5.4c8.7-10 23.9-11 33.9-2.3s11 23.9 2.3 33.9l-4.7 5.4c-33.3 38-31.3 95.2 4.3 130.9 37.5 37.4 98.2 37.4 135.7 0l113.3-113.3c37.4-37.5 37.4-98.2 0-135.6-35.7-35.68-93-37.59-130.9-4.35l-6.2 5.35c-9.9 8.7-25.1 7.7-33.8-2.26-8.8-9.97-7.7-25.14 2.2-33.86l6.2-5.36c57-49.872 142.9-47.01 196.4 6.54 56.2 56.14 56.2 147.24 0 203.44L467 380.5z" }) });
function P({
  children: i,
  defaultCollapsed: t
}) {
  const [o, n] = j.useState(t ?? !0), r = i.slice(0, i.length - 1), l = i[i.length - 1];
  return /* @__PURE__ */ e.jsxs(Ke, { children: [
    /* @__PURE__ */ e.jsxs(
      _e,
      {
        collapsed: o,
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), n(!o);
        },
        children: [
          /* @__PURE__ */ e.jsx("div", { children: o ? /* @__PURE__ */ e.jsx(J, {}) : /* @__PURE__ */ e.jsx(Z, {}) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            ...r
          ] })
        ]
      }
    ),
    !o && /* @__PURE__ */ e.jsx(Qe, { children: l })
  ] });
}
const Ke = d.div`
  margin: 8px;
  border: 1px solid var(${c.border});
  //background-color: var(${c.computedOne});
`, _e = d.div`
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
  ${({ collapsed: i }) => !i && `border-bottom: 1px solid var(${c.border});
    border-left: 5px solid var(${c.badgeBackground});`}
`, R = d.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 600;
`, b = d.div`
  //margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, v = d.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${c.foreground});
  }
`, Qe = d.div`
  //background-color: var(${c.computedOne});
`;
function z({
  article: i,
  lang: t,
  openLink: o
}) {
  const n = (s) => {
    s.stopPropagation(), s.preventDefault(), o(s.target.href);
  }, r = j.useRef(null);
  j.useEffect(() => {
    const s = r.current.querySelectorAll("a");
    return s.forEach((p) => {
      p.addEventListener("click", n);
    }), () => {
      s.forEach((p) => {
        p.removeEventListener("click", n);
      });
    };
  });
  const l = [
    i ? i.description.text : "",
    I(i.example, t),
    I(i.exploit, t),
    I(i.remediation, t)
  ].join("");
  return /* @__PURE__ */ e.jsx(Xe, { ref: r, dangerouslySetInnerHTML: { __html: l } });
}
function I(i, t) {
  return !i || !i.sections ? "" : i.sections.map((o) => {
    if (o.text)
      return o.text;
    if (o.code)
      return `<pre>${o.code[t]}</pre>`;
  }).join("");
}
const Xe = d.div`
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
function Ye({
  filters: i,
  onClick: t
}) {
  return /* @__PURE__ */ e.jsx(
    Je,
    {
      onClick: (o) => {
        o.preventDefault(), o.stopPropagation(), t();
      },
      children: /* @__PURE__ */ e.jsxs(ei, { children: [
        /* @__PURE__ */ e.jsx(Ae, {}),
        i !== 0 && /* @__PURE__ */ e.jsx(Ze, { children: i })
      ] })
    }
  );
}
const Je = d.div`
  width: 34px;
  height: 26px;
  position: relative;
`, Ze = d.div`
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
`, ei = d.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${c.buttonForeground});
  border: none;
  ${({ waiting: i }) => i && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${c.foreground});
  }
`;
function ii() {
  const i = h((n) => n.audit.filter), t = x(), o = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ e.jsx(ti, { children: /* @__PURE__ */ e.jsx(
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
const ti = d.div`
  width: 264px;
`;
function ni() {
  const i = x();
  return /* @__PURE__ */ e.jsxs(
    oi,
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
const oi = d.div`
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
function si() {
  const { issueTitles: i, filter: t } = h((n) => n.audit), o = x();
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
const ri = d.div`
  width: 264px;
`;
function ai() {
  const i = h((n) => n.audit.filter), t = x(), o = [
    { label: "All", value: "all" },
    { label: "Security", value: "security" },
    { label: "Data validation", value: "datavalidation" },
    { label: "OpenAPI format requirements", value: "oasconformance" }
  ];
  return /* @__PURE__ */ e.jsx(li, { children: /* @__PURE__ */ e.jsx(
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
const li = d.div`
  width: 264px;
`, di = {
  security: [
    { label: "All", value: "all" },
    { label: "Authentication", value: "authentication" },
    { label: "Authorization", value: "authorization" },
    { label: "Transport", value: "transport" }
  ],
  oasconformance: [
    { label: "All", value: "all" },
    { label: "Structure", value: "validation" },
    { label: "Structure", value: "semantics" },
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
function ci() {
  const i = h((n) => n.audit.filter), t = x(), o = i.domain !== void 0 ? di[i.domain] : [];
  return /* @__PURE__ */ e.jsx(pi, { children: /* @__PURE__ */ e.jsx(
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
const pi = d.div`
  width: 264px;
`;
function ui() {
  const { filtered: i, filter: t } = h((p) => p.audit), o = x(), [n, r] = j.useState(!0), s = ["rule", "domain", "group", "severity"].filter((p) => t && t[p] !== void 0).length;
  return /* @__PURE__ */ e.jsxs(xi, { children: [
    t.ids !== void 0 && /* @__PURE__ */ e.jsxs(N, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        i.length,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsxs(
        vi,
        {
          onClick: (p) => {
            o(u({})), p.preventDefault(), p.stopPropagation();
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
      /* @__PURE__ */ e.jsx(Ye, { filters: s, onClick: () => r(!n) })
    ] }),
    !n && /* @__PURE__ */ e.jsxs(hi, { children: [
      /* @__PURE__ */ e.jsx(ai, {}),
      /* @__PURE__ */ e.jsx(ci, {}),
      /* @__PURE__ */ e.jsx(ii, {}),
      /* @__PURE__ */ e.jsx(si, {}),
      /* @__PURE__ */ e.jsx(ni, {})
    ] })
  ] });
}
const xi = d.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, N = d.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, hi = d.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`, vi = d.div`
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
    audit: { filename: o }
  } = h((r) => r.audit), n = x();
  return /* @__PURE__ */ e.jsxs(fi, { children: [
    /* @__PURE__ */ e.jsx(ui, {}),
    t.map((r, l) => /* @__PURE__ */ e.jsxs(P, { children: [
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
          /* @__PURE__ */ e.jsx(k, {}),
          /* @__PURE__ */ e.jsxs(
            "a",
            {
              href: "#",
              onClick: (s) => {
                s.preventDefault(), s.stopPropagation(), n(
                  M({
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
              onClick: (s) => {
                s.preventDefault(), s.stopPropagation(), n(O(r.id));
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
          article: i[r.id],
          openLink: (s) => {
            n(S(s));
          }
        }
      )
    ] }, `issue-${l}`))
  ] });
}
const fi = d.div``;
function mi() {
  return /* @__PURE__ */ e.jsx(ji, { children: /* @__PURE__ */ e.jsxs(yi, { children: [
    /* @__PURE__ */ e.jsx(C, {}),
    /* @__PURE__ */ e.jsx("div", { children: "Your API has structural or semantic issues in its OpenAPI format. Fix these issues first and run Security Audit again to get the full audit report." })
  ] }) });
}
const ji = d.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${c.errorBorder});
  background-color: var(${c.errorBackground});
  color: var(${c.errorForeground});
`, yi = d.div`
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
function G({ issueId: i, issues: t }) {
  const o = x(), [n, r] = j.useState(!1), l = t.filter((a) => a.id === i), s = n ? l.length : 4, p = l.slice(0, s);
  return p.sort((a, g) => {
    const q = a.filename.localeCompare(g.filename);
    return q === 0 ? a.lineNo - g.lineNo : q;
  }), /* @__PURE__ */ e.jsxs(bi, { children: [
    /* @__PURE__ */ e.jsxs("h2", { children: [
      l.length,
      " results with this issue"
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: p.map((a) => /* @__PURE__ */ e.jsxs(wi, { children: [
      /* @__PURE__ */ e.jsx(k, {}),
      /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: "#",
          onClick: (g) => {
            g.preventDefault(), g.stopPropagation(), o(
              M({
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
    !n && l.length > p.length && /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (a) => {
          a.preventDefault(), a.stopPropagation(), r(!0);
        },
        children: [
          "Show ",
          l.length - p.length,
          " more"
        ]
      }
    ),
    n && /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (a) => {
          a.preventDefault(), a.stopPropagation(), r(!1);
        },
        children: "Show less"
      }
    )
  ] });
}
const bi = d.div`
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
`, wi = d.div`
  display: flex;
  align-items: center;
  margin: 4px;
  gap: 4px;
  > svg {
    fill: var(${c.foreground});
  }
`;
function $i() {
  const {
    stats: i,
    issues: t,
    audit: { filename: o }
  } = h((s) => s.audit), n = x(), r = i.byIssue.filter((s) => s.important).slice().sort((s, p) => p.count - s.count).slice(0, 4), l = i.byIssue.filter((s) => s.important).slice().sort((s, p) => p.score - s.score).slice(0, 4);
  return /* @__PURE__ */ e.jsxs(Ci, { children: [
    /* @__PURE__ */ e.jsx(E, { children: "Most common issues" }),
    r.map((s, p) => /* @__PURE__ */ e.jsxs(P, { children: [
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
          z,
          {
            lang: o.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: s.kdb,
            openLink: (a) => n(S(a))
          }
        )
      ] })
    ] }, `issue-${p}`)),
    /* @__PURE__ */ e.jsx(E, { children: "Opportunities" }),
    l.map((s, p) => /* @__PURE__ */ e.jsxs(P, { children: [
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
            lang: o.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: s.kdb,
            openLink: (a) => n(S(a))
          }
        )
      ] })
    ] }, `issue-${p}`))
  ] });
}
const Ci = d.div`
  position: relative;
`, E = d.div`
  margin: 14px;
  font-size: 12px;
  font-weight: 500;
`;
function Si({
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
        fill: `var(${c.foreground})`,
        ...t
      }
    }
  ) : /* @__PURE__ */ e.jsx(
    J,
    {
      onClick: o,
      style: {
        cursor: "pointer",
        fill: `var(${c.foreground})`,
        ...t
      }
    }
  );
}
function ki({
  sqgs: i,
  selected: t,
  onSelect: o
}) {
  return /* @__PURE__ */ e.jsx(Ai, { children: i.map((n, r) => /* @__PURE__ */ e.jsx(
    Ii,
    {
      selected: n.id === t,
      onClick: (l) => {
        l.preventDefault(), l.stopPropagation(), t !== n.id && o(r);
      },
      children: n.name
    },
    n.id
  )) });
}
const Ai = d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`, Ii = d.div`
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

  ${({ selected: i }) => i ? `background-color: var(${c.computedTwo});` : `background-color: var(${c.computedOne});`}
`;
function Ti({ sqg: i, summary: t }) {
  const o = i.directives.minimumAssessmentScores;
  return i.directives.subcategoryRules, i.directives.issueRules, /* @__PURE__ */ e.jsxs(Li, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Minimum acceptable score" }),
    /* @__PURE__ */ e.jsxs(Di, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Score" }),
      /* @__PURE__ */ e.jsx("div", { children: "current" }),
      /* @__PURE__ */ e.jsx("div", { children: "Minimum acceptable" })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Global score" }),
      /* @__PURE__ */ e.jsx(y, { highlight: t.all < o.global, children: t.all }),
      /* @__PURE__ */ e.jsx(y, { children: o.global })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Security score" }),
      /* @__PURE__ */ e.jsx(y, { highlight: t.security.value < o.security, children: t.security.value }),
      /* @__PURE__ */ e.jsx(y, { children: o.security })
    ] }),
    /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Data validation score" }),
      /* @__PURE__ */ e.jsx(y, { highlight: t.datavalidation.value < o.dataValidation, children: t.datavalidation.value }),
      /* @__PURE__ */ e.jsx(y, { children: o.dataValidation })
    ] })
  ] });
}
const Li = d.div``, Di = d.div`
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
`, T = d.div`
  display: flex;
  > div {
    flex: 1;
    margin: 8px;
  }
`, y = d.div`
  ${({ highlight: i }) => i && "font-weight: 700;"}
`;
function Pi({ sqg: i, stats: t }) {
  const o = x(), n = i.directives.subcategoryRules, r = t.byGroup, l = {
    security: [
      {
        name: "Authentication",
        domain: "security",
        group: "authentication",
        level: n.security.authentication,
        violations: f(n.security.authentication, r.security.authentication)
      },
      {
        name: "Authorization",
        domain: "security",
        group: "authorization",
        level: n.security.authorization,
        violations: f(n.security.authorization, r.security.authorization)
      },
      {
        name: "Transport",
        domain: "security",
        group: "transport",
        level: n.security.transport,
        violations: f(n.security.transport, r.security.transport)
      }
    ],
    data: [
      {
        name: "Paths",
        domain: "datavalidation",
        group: "paths",
        level: n.dataValidation.paths,
        violations: f(n.dataValidation.paths, r.datavalidation.paths)
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
        violations: f(n.dataValidation.schema, r.datavalidation.schema)
      },
      {
        name: "Response Definition",
        domain: "datavalidation",
        group: "responsedefinition",
        level: n.dataValidation.responseDefinition,
        violations: f(
          n.dataValidation.responseDefinition,
          r.datavalidation.responsedefinition
        )
      },
      {
        name: "Response Headers",
        domain: "datavalidation",
        group: "responseheader",
        level: n.dataValidation.responseHeaders,
        violations: f(
          n.dataValidation.responseHeaders,
          r.datavalidation.responseheader
        )
      }
    ]
  };
  return /* @__PURE__ */ e.jsxs(Ri, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Allowed issue security levels" }),
    /* @__PURE__ */ e.jsxs(zi, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Category" }),
      /* @__PURE__ */ e.jsx("div", { children: "threshold" }),
      /* @__PURE__ */ e.jsx("div", { children: "issues found" })
    ] }),
    /* @__PURE__ */ e.jsx(H, { children: "Security" }),
    l.security.filter((s) => s.violations.length > 0).map((s, p) => /* @__PURE__ */ e.jsxs(W, { children: [
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
    ] }, p)),
    /* @__PURE__ */ e.jsx(H, { children: "Data validation" }),
    l.data.filter((s) => s.violations.length > 0).map((s, p) => /* @__PURE__ */ e.jsxs(W, { children: [
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
    ] }, p))
  ] });
}
const Ri = d.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, zi = d.div`
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
`, H = d.div`
  display: flex;
  background-color: var(${c.computedOne});
  border-radius: 2px;
  padding: 8px;
`, W = d.div`
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
  const o = L.indexOf(i), n = [];
  for (const r of L.slice(o))
    t[r] > 0 && n.push({ level: r, count: t[r] });
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
function Bi({ sqg: i, stats: t }) {
  const o = x(), n = i.directives.issueRules, l = t.byIssue.filter((s) => n.includes(s.id));
  return l.length === 0 ? null : /* @__PURE__ */ e.jsxs(Vi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Forbidden issues with problem found" }),
    l.map((s) => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (p) => {
          p.preventDefault(), p.stopPropagation(), o(m("issues")), o(u({ rule: s.id }));
        },
        children: s.title
      }
    ) }))
  ] });
}
const Vi = d.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
function Mi({
  compliance: i,
  summary: t,
  stats: o
}) {
  const [n, r] = j.useState(0), l = i.sqgsDetail[n];
  return /* @__PURE__ */ e.jsxs(Oi, { children: [
    /* @__PURE__ */ e.jsx(
      ki,
      {
        sqgs: i.sqgsDetail,
        onSelect: r,
        selected: i.sqgsDetail[n].id
      }
    ),
    /* @__PURE__ */ e.jsx(Ti, { sqg: l, summary: t }),
    /* @__PURE__ */ e.jsx(Pi, { sqg: l, stats: o }),
    /* @__PURE__ */ e.jsx(Bi, { sqg: l, stats: o })
  ] });
}
const Oi = d.div`
  padding: 8px;
  color: var(${c.foreground});
  background-color: var(${c.background});
  border-top: 1px solid var(${c.errorBorder});
`;
function qi() {
  const { compliance: i, summary: t } = h((a) => a.audit.audit), o = h((a) => a.audit.stats), n = h((a) => a.audit.sqgTodo), r = x(), l = (a) => {
    r(Ge(a));
  }, [s, p] = j.useState(!1);
  return i === void 0 ? null : i.acceptance === "yes" ? /* @__PURE__ */ e.jsx(Ei, { children: /* @__PURE__ */ e.jsx(De, { message: "Security quality gates passed" }) }) : /* @__PURE__ */ e.jsxs(Ni, { children: [
    /* @__PURE__ */ e.jsxs(Gi, { children: [
      /* @__PURE__ */ e.jsx(C, {}),
      /* @__PURE__ */ e.jsx("div", { children: "Security quality gates failed" }),
      /* @__PURE__ */ e.jsx(Le, { value: n, onChange: l }),
      "Show only SQG to-do list",
      /* @__PURE__ */ e.jsx(
        Si,
        {
          isOpen: s,
          onClick: () => p(!s),
          style: { width: 14, height: 14 }
        }
      )
    ] }),
    s && /* @__PURE__ */ e.jsx(Mi, { compliance: i, summary: t, stats: o })
  ] });
}
const Ni = d.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${c.errorBorder});
  background-color: var(${c.errorBackground});
  color: var(${c.errorForeground});
`, Gi = d.div`
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
`, Ei = d.div`
  margin: 8px;
`;
function Hi() {
  const i = h((o) => o.audit.audit.summary), t = x();
  return /* @__PURE__ */ e.jsx(Wi, { children: /* @__PURE__ */ e.jsxs(Ui, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), t(m("issues")), t(u({}));
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
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), t(m("issues")), t(u({ domain: "security" }));
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
          o.preventDefault(), o.stopPropagation(), t(m("issues")), t(u({ domain: "datavalidation" }));
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
const Wi = d.div`
  margin: 8px;
`, Ui = d.div`
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
function K() {
  const i = x(), { tab: t, audit: o } = h((n) => n.audit);
  return /* @__PURE__ */ e.jsxs(Ki, { children: [
    o.valid === !1 && /* @__PURE__ */ e.jsx(mi, {}),
    /* @__PURE__ */ e.jsx(Hi, {}),
    /* @__PURE__ */ e.jsx(qi, {}),
    /* @__PURE__ */ e.jsx(
      Te,
      {
        activeTab: t,
        setActiveTab: (n) => i(m(n)),
        tabs: [
          {
            id: "priority",
            title: "Priority",
            content: /* @__PURE__ */ e.jsx($i, {})
          },
          { id: "issues", title: "Issues", content: /* @__PURE__ */ e.jsx(gi, {}) }
        ]
      }
    )
  ] });
}
const Ki = d.div``;
function _i() {
  return /* @__PURE__ */ e.jsxs(Qi, { children: [
    /* @__PURE__ */ e.jsx(Pe, {}),
    "There is no Security Audit report available for this file"
  ] });
}
const Qi = d.div`
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
function Xi() {
  return /* @__PURE__ */ e.jsxs(Yi, { children: [
    /* @__PURE__ */ e.jsxs(Ji, { children: [
      /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsx("div", {})
    ] }),
    /* @__PURE__ */ e.jsx(Zi, {})
  ] });
}
const Yi = d.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`, se = ge`
  0% {
    background-color: var(${c.computedOne});
  }
  100% {
    background-color: var(${c.computedTwo});
  }
`, Ji = d.div`
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
    animation: ${se} 1s linear infinite alternate;
  }
`, Zi = d.div`
  border: 1px solid var(${c.border});
  height: 15rem;
  animation: ${se} 1s linear infinite alternate;
`, _ = [
  { id: "blank", title: "Blank", element: /* @__PURE__ */ e.jsx("div", {}), when: ne },
  {
    id: "start-audit",
    title: "Audit is starting",
    element: /* @__PURE__ */ e.jsx(Xi, {}),
    when: te
  },
  {
    id: "no-report",
    title: "No Audit Report",
    element: /* @__PURE__ */ e.jsx(_i, {}),
    when: V
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
    when: B
  }
], et = {
  startAudit: te,
  cancelAudit: ne,
  showFullReport: F,
  showPartialReport: B,
  showNoReport: V,
  loadKdb: Ne,
  changeTheme: Ce
};
function it() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(we, {}),
    /* @__PURE__ */ e.jsx($e, {})
  ] });
}
function tt(i, t) {
  const o = We(Ue(i, _), t);
  fe(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(me.StrictMode, { children: /* @__PURE__ */ e.jsx(je, { store: o, children: /* @__PURE__ */ e.jsx(ye.Provider, { value: _, children: /* @__PURE__ */ e.jsx(it, {}) }) }) })
  ), window.addEventListener("message", be(o, et));
}
window.renderWebView = tt;
