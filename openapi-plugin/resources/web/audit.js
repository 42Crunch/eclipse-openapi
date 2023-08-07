import { c as ae, a as le, u as de, l as ce, t as pe, b as ue, i as xe, s as he, d as c, T as d, j as e, r as j, U as ve, e as ge, R as fe, P as me, m as je, f as be, g as ye } from "./styled-components.browser.esm.b4077a0f.js";
import { r as $e, s as we, R as Ce, a as Se } from "./Router.bc058529.js";
import { C as ke, S as L, a as Ae, b as X, c as Y, d as Te, e as J } from "./Xmark.97e9c535.js";
import { u as Ie } from "./index.esm.2e24c5a3.js";
import { $ as Le, T as De, a as G, b as N } from "./Tabs.d6340d43.js";
import { S as C } from "./ExclamationCircle.20b20ea3.js";
import { S as Z } from "./TriangleExclamation.3c1770d3.js";
import { S as ee } from "./AngleUp.51e58661.js";
import { P as A } from "./Select.aaac1f78.js";
import { B as Pe, S as Re } from "./Banner.440bd815.js";
import "./downshift.esm.c45abd85.js";
const ze = {
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
    byGroup: te([])
  },
  kdb: {},
  issueTitles: [],
  filter: {},
  sqgTodo: !1
}, ie = ae({
  name: "audit",
  initialState: ze,
  reducers: {
    startAudit: (i, t) => {
    },
    cancelAudit: (i, t) => {
    },
    showFullReport: (i, { payload: t }) => {
      i.audit.filename !== t.filename && (i.tab = "priority", i.filter = {}, i.sqgTodo = !1), (t.compliance === void 0 || t.compliance.acceptance === "yes") && (i.sqgTodo = !1), i.audit = t, $(i);
    },
    showPartialReport: (i, {
      payload: { report: t, uri: n, ids: o }
    }) => {
      i.audit = t, i.filter = { ids: o }, i.tab = "issues", i.sqgTodo = !1, $(i);
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
  const { issues: t, filtered: n, stats: o, titles: s } = Fe(
    i.sqgTodo ? i.audit.todo : i.audit.issues,
    i.audit.files,
    i.kdb,
    i.filter
  );
  i.issues = t, i.filtered = n, i.stats = o, i.issueTitles = s;
}
function Fe(i, t, n, o) {
  const s = Ve(i, t, n), l = Me(s, n), r = Oe(l), p = Be(s, o);
  return { issues: s, filtered: p, stats: l, titles: r };
}
function Be(i, t) {
  const n = (a, g) => t.ids === void 0 || t.ids.includes(g), o = (a) => t.domain === void 0 || a.domain === (t == null ? void 0 : t.domain), s = (a) => t.group === void 0 || a.group === (t == null ? void 0 : t.group), l = (a) => (t == null ? void 0 : t.rule) === void 0 || a.id === t.rule, r = t.severity !== void 0 ? L.indexOf(t.severity) + 1 : 0, p = (a) => t.severity === void 0 || a.criticality >= r;
  return i.filter((a, g) => n(a, g) && o(a) && s(a) && l(a) && p(a));
}
function Ve(i, t, n) {
  return Object.entries(i).map(([s, l]) => l.map((r, p) => ({
    ...r,
    domain: n[r.id].group,
    group: n[r.id].subgroup,
    filename: t[r.documentUri].relative
  }))).reduce((s, l) => s.concat(l), []);
}
function Me(i, t) {
  const n = {};
  for (const l of i)
    n[l.id] || (n[l.id] = []), n[l.id].push(l);
  const o = Object.keys(n).map((l) => ({
    id: l,
    kdb: t[l] || Ge,
    title: t[l].title.text.replace(/^<h1>|<\/h1>$/g, ""),
    domain: n[l][0].domain,
    score: n[l].reduce((r, p) => r + p.score, 0),
    criticality: Math.max(...n[l].map((r) => r.criticality)),
    displayScore: qe(n[l].reduce((r, p) => r + p.score, 0)),
    count: n[l].length,
    important: n[l].some((r) => r.criticality >= Ae.Low)
  })), s = te(i);
  return { byIssue: o, byGroup: s };
}
function te(i) {
  var o, s;
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
    const r = l.domain, p = l.group, a = ke[l.criticality];
    r !== void 0 && p !== void 0 && //@ts-ignore
    ((s = (o = n[r]) == null ? void 0 : o[p]) == null ? void 0 : s[a]) !== void 0 && n[r][p][a]++;
  }
  return n;
}
function Oe(i) {
  return i.byIssue.map((t) => ({ value: t.id, label: t.title })).sort((t, n) => {
    const o = t.value.toLowerCase(), s = n.value.toLowerCase();
    return o < s ? -1 : o > s ? 1 : 0;
  });
}
function qe(i) {
  const t = Math.abs(Math.round(i));
  return i === 0 ? "0" : t >= 1 ? t.toString() : "less than 1";
}
const Ge = {
  title: {
    text: "<h1>Article not found</h1>"
  },
  description: {
    text: `<p>Whoops! Looks like there has been an oversight and we are missing a page for this issue.</p>
           <p><a href="https://apisecurity.io/contact-us/">Let us know</a> the title of the issue, and we make sure to add it to the encyclopedia.</p>`
  }
}, {
  startAudit: oe,
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
  setSqgTodo: Ee
} = ie.actions, He = ie.reducer, Ue = {
  audit: He,
  theme: pe,
  router: $e
}, We = (i, t) => le({
  reducer: Ue,
  middleware: (n) => n().prepend(i.middleware).concat(ce),
  preloadedState: {
    theme: t
  }
}), x = () => Ie(), h = de, re = ue(), w = re.startListening;
function Ke(i, t) {
  const n = {
    goToLine: () => w({
      actionCreator: M,
      effect: async (o, s) => {
        i.postMessage({
          command: "goToLine",
          payload: o.payload
        });
      }
    }),
    copyIssueId: () => w({
      actionCreator: O,
      effect: async (o, s) => {
        i.postMessage({
          command: "copyIssueId",
          payload: o.payload
        });
      }
    }),
    openLink: () => w({
      actionCreator: S,
      effect: async (o, s) => {
        i.postMessage({
          command: "openLink",
          payload: o.payload
        });
      }
    })
  };
  return w({
    matcher: xe(F, B, V),
    effect: async (o, s) => {
      window.scrollTo(0, 0);
    }
  }), we(w, t), he(n), re;
}
function _e() {
  const i = h((n) => n.audit.audit.summary), t = x();
  return /* @__PURE__ */ e.jsx(Qe, { children: /* @__PURE__ */ e.jsxs(Xe, { children: [
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
const Qe = c.div`
  margin: 8px;
`, Xe = c.div`
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
    border: 1px solid var(${d.border});
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      background-color: var(${d.computedOne});
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
`, D = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "M476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87-34.63 0-77.87 8.003-137.2 32.05V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464c0 13.3 10.75 24 24 24s24-10.75 24-24V384c53.59-23.86 96.02-31.81 132.8-31.81 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09 13.6-4.98 21.5-16.48 21.5-28.78V30.73C512 11.1 495.3 0 476.3 0zM464 319.8c-30.31 10.82-58.08 16.1-84.6 16.1-30.8 0-58.31-7-87.44-14.41-32.01-8.141-68.29-17.37-111.1-17.37-42.35 0-85.99 9.09-132.8 27.73V84.14l18.03-7.301c47.39-19.2 86.38-28.54 119.2-28.54 28.24.004 49.12 6.711 73.31 14.48 25.38 8.148 54.13 17.39 90.58 17.39 35.43 0 72.24-8.496 114.9-26.61V319.8z" }) }), k = (i) => /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", width: "1em", height: "1em", ...i, children: /* @__PURE__ */ e.jsx("path", { d: "M173 131.5c56.2-56.23 147.3-56.23 203.5 0C430 185 432.9 270.9 383 327.9l-5.3 6.1c-8.8 10-23.9 11-33.9 2.3s-11-23.9-2.3-33.9l5.4-6.1c33.2-38 31.3-95.2-4.4-130.9-37.4-38.3-98.1-38.3-136.4 0L93.63 278.7c-37.44 37.5-37.44 98.2 0 135.6 35.67 34.8 92.97 37.6 130.87 4.4l6.2-5.4c9.9-8.7 25.1-7.7 33.8 2.3 8.8 9.9 7.7 25.1-2.2 33.8l-6.2 5.4c-57 49.8-142.9 47-196.41-6.6-56.185-56.1-56.185-148.1 0-203.4L173 131.5zm294 249c-56.2 56.2-147.3 56.2-203.5 0-54.4-54.4-56.4-139.4-6.6-196.4l4.7-5.4c8.7-10 23.9-11 33.9-2.3s11 23.9 2.3 33.9l-4.7 5.4c-33.3 38-31.3 95.2 4.3 130.9 37.5 37.4 98.2 37.4 135.7 0l113.3-113.3c37.4-37.5 37.4-98.2 0-135.6-35.7-35.68-93-37.59-130.9-4.35l-6.2 5.35c-9.9 8.7-25.1 7.7-33.8-2.26-8.8-9.97-7.7-25.14 2.2-33.86l6.2-5.36c57-49.872 142.9-47.01 196.4 6.54 56.2 56.14 56.2 147.24 0 203.44L467 380.5z" }) });
function P({
  children: i
}) {
  const [t, n] = j.useState(!0);
  return /* @__PURE__ */ e.jsxs(Ye, { children: [
    /* @__PURE__ */ e.jsxs(Je, { collapsed: t, onClick: () => n(!t), children: [
      /* @__PURE__ */ e.jsx("div", { children: t ? /* @__PURE__ */ e.jsx(Z, {}) : /* @__PURE__ */ e.jsx(ee, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        i[0],
        i[1]
      ] })
    ] }),
    !t && /* @__PURE__ */ e.jsx(Ze, { children: i[2] })
  ] });
}
const Ye = c.div`
  margin: 8px;
  border: 1px solid var(${d.border});
`, Je = c.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${d.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${d.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ collapsed: i }) => !i && `border-bottom: 1px solid var(${d.border});
    border-left: 5px solid var(${d.badgeBackground});`}
`, R = c.div`
  font-weight: 600;
`, y = c.div`
  margin-top: 8px;
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
    fill: var(${d.foreground});
  }
`, Ze = c.div`
  background-color: var(${d.computedOne});
`;
function z({
  article: i,
  lang: t,
  openLink: n
}) {
  const o = (r) => {
    r.stopPropagation(), r.preventDefault(), n(r.target.href);
  }, s = j.useRef(null);
  j.useEffect(() => {
    const r = s.current.querySelectorAll("a");
    return r.forEach((p) => {
      p.addEventListener("click", o);
    }), () => {
      r.forEach((p) => {
        p.removeEventListener("click", o);
      });
    };
  });
  const l = [
    i ? i.description.text : "",
    T(i.example, t),
    T(i.exploit, t),
    T(i.remediation, t)
  ].join("");
  return /* @__PURE__ */ e.jsx(ei, { ref: s, dangerouslySetInnerHTML: { __html: l } });
}
function T(i, t) {
  return !i || !i.sections ? "" : i.sections.map((n) => {
    if (n.text)
      return n.text;
    if (n.code)
      return `<pre>${n.code[t]}</pre>`;
  }).join("");
}
const ei = c.div`
  padding: 8px;
  weight: 500;
  font-size: var(${d.fontSize});

  > h2 {
    margin: 0;
    font-weight: 700;
    font-size: var(${d.fontSize});
  }

  & code {
    color: var(${d.foreground});
    font-family: monospace;
  }

  > pre {
    background-color: var(${d.computedOne});
    padding: 8px 4px;
    white-space: pre-wrap;
    word-break: break-all;
  }
`;
function E({ issueId: i, issues: t }) {
  const n = x(), [o, s] = j.useState(!1), l = t.filter((a) => a.id === i), r = o ? l.length : 4, p = l.slice(0, r);
  return p.sort((a, g) => {
    const q = a.filename.localeCompare(g.filename);
    return q === 0 ? a.lineNo - g.lineNo : q;
  }), /* @__PURE__ */ e.jsxs(ii, { children: [
    /* @__PURE__ */ e.jsxs("h2", { children: [
      l.length,
      " results with this issue"
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: p.map((a) => /* @__PURE__ */ e.jsxs(ti, { children: [
      /* @__PURE__ */ e.jsx(k, {}),
      /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: "#",
          onClick: (g) => {
            g.preventDefault(), g.stopPropagation(), n(
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
    !o && l.length > p.length && /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: "#",
        onClick: (a) => {
          a.preventDefault(), a.stopPropagation(), s(!0);
        },
        children: [
          "Show ",
          l.length - p.length,
          " more"
        ]
      }
    ),
    o && /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (a) => {
          a.preventDefault(), a.stopPropagation(), s(!1);
        },
        children: "Show less"
      }
    )
  ] });
}
const ii = c.div`
  padding-top: 8px;
  padding-left: 8px;
  > h2 {
    margin: 0;
    font-weight: 700;
    font-size: var(${d.fontSize});
  }
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, ti = c.div`
  display: flex;
  align-items: center;
  margin: 4px;
  gap: 4px;
  > svg {
    fill: var(${d.foreground});
  }
`;
function oi() {
  const {
    stats: i,
    issues: t,
    audit: { filename: n }
  } = h((r) => r.audit), o = x(), s = i.byIssue.filter((r) => r.important).slice().sort((r, p) => p.count - r.count).slice(0, 4), l = i.byIssue.filter((r) => r.important).slice().sort((r, p) => p.score - r.score).slice(0, 4);
  return /* @__PURE__ */ e.jsxs(ni, { children: [
    /* @__PURE__ */ e.jsx(H, { children: "Most common issues" }),
    s.map((r, p) => /* @__PURE__ */ e.jsxs(P, { children: [
      /* @__PURE__ */ e.jsx(R, { children: r.title }),
      /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(C, {}),
          " ",
          X[r.criticality]
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(D, {}),
          " Score impact: ",
          r.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(k, {}),
          " ",
          r.count,
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
                a.preventDefault(), a.stopPropagation(), o(O(r.id));
              },
              children: "Issue ID"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(E, { issueId: r.id, issues: t }),
        /* @__PURE__ */ e.jsx(
          z,
          {
            lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: r.kdb,
            openLink: (a) => o(S(a))
          }
        )
      ] })
    ] }, `issue-${p}`)),
    /* @__PURE__ */ e.jsx(H, { children: "Opportunities" }),
    l.map((r, p) => /* @__PURE__ */ e.jsxs(P, { children: [
      /* @__PURE__ */ e.jsx(R, { children: r.title }),
      /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(C, {}),
          " Count ",
          r.count
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(D, {}),
          " Score impact: ",
          r.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(k, {}),
          " ",
          r.count,
          " result(s)"
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(E, { issueId: r.id, issues: t }),
        /* @__PURE__ */ e.jsx(
          z,
          {
            lang: n.toLowerCase().endsWith("json") ? "json" : "yaml",
            article: r.kdb,
            openLink: (a) => o(S(a))
          }
        )
      ] })
    ] }, `issue-${p}`))
  ] });
}
const ni = c.div`
  position: relative;
`, H = c.div`
  margin: 14px;
  font-size: 12px;
  font-weight: 500;
`;
function ri({
  filters: i,
  onClick: t
}) {
  return /* @__PURE__ */ e.jsx(
    si,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t();
      },
      children: /* @__PURE__ */ e.jsxs(li, { children: [
        /* @__PURE__ */ e.jsx(Te, {}),
        i !== 0 && /* @__PURE__ */ e.jsx(ai, { children: i })
      ] })
    }
  );
}
const si = c.div`
  width: 34px;
  height: 26px;
  position: relative;
`, ai = c.div`
  position: absolute;
  left: 18px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${d.buttonForeground});
  background-color: var(${d.buttonBackground});
  font-size: 12px;
`, li = c.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${d.buttonForeground});
  border: none;
  ${({ waiting: i }) => i && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${d.foreground});
  }
`;
function di() {
  const i = h((o) => o.audit.filter), t = x(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ e.jsx(ci, { children: /* @__PURE__ */ e.jsx(
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
const ci = c.div`
  width: 264px;
`;
function pi() {
  const i = x();
  return /* @__PURE__ */ e.jsxs(
    ui,
    {
      onClick: (t) => {
        i(u({})), t.preventDefault(), t.stopPropagation();
      },
      children: [
        /* @__PURE__ */ e.jsx(J, {}),
        " ",
        /* @__PURE__ */ e.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const ui = c.div`
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
function xi() {
  const { issueTitles: i, filter: t } = h((o) => o.audit), n = x();
  return /* @__PURE__ */ e.jsx(hi, { children: /* @__PURE__ */ e.jsx(
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
const hi = c.div`
  width: 264px;
`;
function vi() {
  const i = h((o) => o.audit.filter), t = x(), n = [
    { label: "All", value: "all" },
    { label: "Security", value: "security" },
    { label: "Data validation", value: "datavalidation" },
    { label: "OpenAPI format requirements", value: "oasconformance" }
  ];
  return /* @__PURE__ */ e.jsx(gi, { children: /* @__PURE__ */ e.jsx(
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
const gi = c.div`
  width: 264px;
`, fi = {
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
function mi() {
  const i = h((o) => o.audit.filter), t = x(), n = i.domain !== void 0 ? fi[i.domain] : [];
  return /* @__PURE__ */ e.jsx(ji, { children: /* @__PURE__ */ e.jsx(
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
const ji = c.div`
  width: 264px;
`;
function bi() {
  const { filtered: i, filter: t } = h((p) => p.audit), n = x(), [o, s] = j.useState(!0), r = ["rule", "domain", "group", "severity"].filter((p) => t && t[p] !== void 0).length;
  return /* @__PURE__ */ e.jsxs(yi, { children: [
    t.ids !== void 0 && /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        i.length,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsxs(
        wi,
        {
          onClick: (p) => {
            n(u({})), p.preventDefault(), p.stopPropagation();
          },
          children: [
            /* @__PURE__ */ e.jsx(J, {}),
            " ",
            /* @__PURE__ */ e.jsx("span", { children: "Reset filters" })
          ]
        }
      )
    ] }),
    t.ids === void 0 && /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        i.length,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsx(ri, { filters: r, onClick: () => s(!o) })
    ] }),
    !o && /* @__PURE__ */ e.jsxs($i, { children: [
      /* @__PURE__ */ e.jsx(vi, {}),
      /* @__PURE__ */ e.jsx(mi, {}),
      /* @__PURE__ */ e.jsx(di, {}),
      /* @__PURE__ */ e.jsx(xi, {}),
      /* @__PURE__ */ e.jsx(pi, {})
    ] })
  ] });
}
const yi = c.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, U = c.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, $i = c.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`, wi = c.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
function Ci() {
  const {
    kdb: i,
    filtered: t,
    audit: { filename: n }
  } = h((s) => s.audit), o = x();
  return /* @__PURE__ */ e.jsxs(Si, { children: [
    /* @__PURE__ */ e.jsx(bi, {}),
    t.map((s, l) => /* @__PURE__ */ e.jsxs(P, { children: [
      /* @__PURE__ */ e.jsx(R, { children: s.description }),
      /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(C, {}),
          " ",
          X[s.criticality]
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(D, {}),
          " Score Impact ",
          s.displayScore
        ] }),
        /* @__PURE__ */ e.jsxs(v, { children: [
          /* @__PURE__ */ e.jsx(k, {}),
          /* @__PURE__ */ e.jsxs(
            "a",
            {
              href: "#",
              onClick: (r) => {
                r.preventDefault(), r.stopPropagation(), o(
                  M({
                    uri: s.documentUri,
                    line: s.lineNo,
                    pointer: s.pointer
                  })
                );
              },
              children: [
                s.filename,
                ":",
                s.lineNo + 1
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
              onClick: (r) => {
                r.preventDefault(), r.stopPropagation(), o(O(s.id));
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
          article: i[s.id],
          openLink: (r) => {
            o(S(r));
          }
        }
      )
    ] }, `issue-${l}`))
  ] });
}
const Si = c.div``;
function ki({
  value: i,
  onChange: t
}) {
  return /* @__PURE__ */ e.jsx(
    Ai,
    {
      active: i,
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t(!i);
      },
      children: /* @__PURE__ */ e.jsx(Ti, { active: i })
    }
  );
}
const Ai = c.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 34px;
  height: 17px;
  border-radius: 30px;
  border: 1px solid var(${d.border});
  ${({ active: i }) => i ? `background-color: var(${d.buttonBackground}); justify-content: end;` : `background-color: var(${d.background}); justify-content: start;`}
`, Ti = c.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  margin-right: 2px;
  margin-left: 2px;
  ${({ active: i }) => i ? `background-color: var(${d.buttonForeground}); border: 1px solid var(${d.buttonForeground});` : `background-color: var(${d.border}); border: 1px solid var(${d.border});`}
`;
function Ii({
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
        fill: `var(${d.foreground})`,
        ...t
      }
    }
  ) : /* @__PURE__ */ e.jsx(
    Z,
    {
      onClick: n,
      style: {
        cursor: "pointer",
        fill: `var(${d.foreground})`,
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
  return /* @__PURE__ */ e.jsx(Di, { children: i.map((o, s) => /* @__PURE__ */ e.jsx(
    Pi,
    {
      selected: o.id === t,
      onClick: (l) => {
        l.preventDefault(), l.stopPropagation(), t !== o.id && n(s);
      },
      children: o.name
    },
    o.id
  )) });
}
const Di = c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`, Pi = c.div`
  display: flex;
  height: 28px;
  min-width: 100px;
  border-radius: 16px;
  margin-left: 4px;
  margin-right: 4px;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid var(${d.border});
  color: var(${d.foreground});
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${({ selected: i }) => i ? `background-color: var(${d.computedTwo});` : `background-color: var(${d.computedOne});`}
`;
function Ri({ sqg: i, summary: t }) {
  const n = i.directives.minimumAssessmentScores;
  return i.directives.subcategoryRules, i.directives.issueRules, /* @__PURE__ */ e.jsxs(zi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Minimum acceptable score" }),
    /* @__PURE__ */ e.jsxs(Fi, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Score" }),
      /* @__PURE__ */ e.jsx("div", { children: "current" }),
      /* @__PURE__ */ e.jsx("div", { children: "Minimum acceptable" })
    ] }),
    /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Global score" }),
      /* @__PURE__ */ e.jsx(b, { highlight: t.all < n.global, children: t.all }),
      /* @__PURE__ */ e.jsx(b, { children: n.global })
    ] }),
    /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Security score" }),
      /* @__PURE__ */ e.jsx(b, { highlight: t.security.value < n.security, children: t.security.value }),
      /* @__PURE__ */ e.jsx(b, { children: n.security })
    ] }),
    /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Data validation score" }),
      /* @__PURE__ */ e.jsx(b, { highlight: t.datavalidation.value < n.dataValidation, children: t.datavalidation.value }),
      /* @__PURE__ */ e.jsx(b, { children: n.dataValidation })
    ] })
  ] });
}
const zi = c.div``, Fi = c.div`
  display: flex;
  background-color: var(${d.computedTwo});
  border-radius: 2px;
  padding: 8px;
  > div {
    flex: 1;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
`, I = c.div`
  display: flex;
  > div {
    flex: 1;
    margin: 8px;
  }
`, b = c.div`
  ${({ highlight: i }) => i && "font-weight: 700;"}
`;
function Bi({ sqg: i, stats: t }) {
  const n = x(), o = i.directives.subcategoryRules, s = t.byGroup, l = {
    security: [
      {
        name: "Authentication",
        domain: "security",
        group: "authentication",
        level: o.security.authentication,
        violations: f(o.security.authentication, s.security.authentication)
      },
      {
        name: "Authorization",
        domain: "security",
        group: "authorization",
        level: o.security.authorization,
        violations: f(o.security.authorization, s.security.authorization)
      },
      {
        name: "Transport",
        domain: "security",
        group: "transport",
        level: o.security.transport,
        violations: f(o.security.transport, s.security.transport)
      }
    ],
    data: [
      {
        name: "Paths",
        domain: "datavalidation",
        group: "paths",
        level: o.dataValidation.paths,
        violations: f(o.dataValidation.paths, s.datavalidation.paths)
      },
      {
        name: "Parameters",
        domain: "datavalidation",
        group: "parameters",
        level: o.dataValidation.parameters,
        violations: f(
          o.dataValidation.parameters,
          t.byGroup.datavalidation.parameters
        )
      },
      {
        name: "Schema",
        domain: "datavalidation",
        group: "schema",
        level: o.dataValidation.schema,
        violations: f(o.dataValidation.schema, s.datavalidation.schema)
      },
      {
        name: "Response Definition",
        domain: "datavalidation",
        group: "responsedefinition",
        level: o.dataValidation.responseDefinition,
        violations: f(
          o.dataValidation.responseDefinition,
          s.datavalidation.responsedefinition
        )
      },
      {
        name: "Response Headers",
        domain: "datavalidation",
        group: "responseheader",
        level: o.dataValidation.responseHeaders,
        violations: f(
          o.dataValidation.responseHeaders,
          s.datavalidation.responseheader
        )
      }
    ]
  };
  return /* @__PURE__ */ e.jsxs(Vi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Allowed issue security levels" }),
    /* @__PURE__ */ e.jsxs(Mi, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Category" }),
      /* @__PURE__ */ e.jsx("div", { children: "threshold" }),
      /* @__PURE__ */ e.jsx("div", { children: "issues found" })
    ] }),
    /* @__PURE__ */ e.jsx(W, { children: "Security" }),
    l.security.filter((r) => r.violations.length > 0).map((r, p) => /* @__PURE__ */ e.jsxs(K, { children: [
      /* @__PURE__ */ e.jsx("div", { children: r.name }),
      /* @__PURE__ */ e.jsx("div", { children: r.level }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (a) => {
            a.stopPropagation(), a.preventDefault(), n(m("issues")), n(
              u({
                severity: r.violations[0].level,
                domain: r.domain,
                group: r.group
              })
            );
          },
          children: r.violations.map((a) => `${a.level} ${a.count}`).join(", ")
        }
      )
    ] }, p)),
    /* @__PURE__ */ e.jsx(W, { children: "Data validation" }),
    l.data.filter((r) => r.violations.length > 0).map((r, p) => /* @__PURE__ */ e.jsxs(K, { children: [
      /* @__PURE__ */ e.jsx("div", { children: r.name }),
      /* @__PURE__ */ e.jsx("div", { children: r.level }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "#",
          onClick: (a) => {
            a.stopPropagation(), a.preventDefault(), n(m("issues")), n(
              u({
                severity: r.violations[0].level,
                domain: r.domain,
                group: r.group
              })
            );
          },
          children: r.violations.map((a) => `${a.level} ${a.count}`).join(", ")
        }
      )
    ] }, p))
  ] });
}
const Vi = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, Mi = c.div`
  display: flex;
  background-color: var(${d.computedTwo});
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
  background-color: var(${d.computedOne});
  border-radius: 2px;
  padding: 8px;
`, K = c.div`
  display: flex;
  > a,
  div {
    flex: 1;
    text-transform: capitalize;
    margin: 8px;
  }
`;
function f(i, t) {
  const n = L.indexOf(i), o = [];
  for (const s of L.slice(n))
    t[s] > 0 && o.push({ level: s, count: t[s] });
  return o;
}
function Oi({ sqg: i, stats: t }) {
  const n = x(), o = i.directives.issueRules, l = t.byIssue.filter((r) => o.includes(r.id));
  return l.length === 0 ? null : /* @__PURE__ */ e.jsxs(qi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Forbidden issues with problem found" }),
    l.map((r) => /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "#",
        onClick: (p) => {
          p.preventDefault(), p.stopPropagation(), n(m("issues")), n(u({ rule: r.id }));
        },
        children: r.title
      }
    ))
  ] });
}
const qi = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
function Gi({
  compliance: i,
  summary: t,
  stats: n
}) {
  const [o, s] = j.useState(0), l = i.sqgsDetail[o];
  return /* @__PURE__ */ e.jsxs(Ni, { children: [
    /* @__PURE__ */ e.jsx(
      Li,
      {
        sqgs: i.sqgsDetail,
        onSelect: s,
        selected: i.sqgsDetail[o].id
      }
    ),
    /* @__PURE__ */ e.jsx(Ri, { sqg: l, summary: t }),
    /* @__PURE__ */ e.jsx(Bi, { sqg: l, stats: n }),
    /* @__PURE__ */ e.jsx(Oi, { sqg: l, stats: n })
  ] });
}
const Ni = c.div`
  padding: 8px;
  color: var(${d.foreground});
  background-color: var(${d.background});
  border-top: 1px solid var(${d.errorBorder});
`;
function Ei() {
  const { compliance: i, summary: t } = h((a) => a.audit.audit), n = h((a) => a.audit.stats), o = h((a) => a.audit.sqgTodo), s = x(), l = (a) => {
    s(Ee(a));
  }, [r, p] = j.useState(!1);
  return i === void 0 ? null : i.acceptance === "yes" ? /* @__PURE__ */ e.jsx(Wi, { children: /* @__PURE__ */ e.jsx(Pe, { message: "Security quality gates passed" }) }) : /* @__PURE__ */ e.jsxs(Hi, { children: [
    /* @__PURE__ */ e.jsxs(Ui, { children: [
      /* @__PURE__ */ e.jsx(C, {}),
      /* @__PURE__ */ e.jsx("div", { children: "Security quality gates failed" }),
      /* @__PURE__ */ e.jsx(ki, { value: o, onChange: l }),
      "Show only SQG to-do list",
      /* @__PURE__ */ e.jsx(
        Ii,
        {
          isOpen: r,
          onClick: () => p(!r),
          style: { width: 14, height: 14 }
        }
      )
    ] }),
    r && /* @__PURE__ */ e.jsx(Gi, { compliance: i, summary: t, stats: n })
  ] });
}
const Hi = c.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${d.errorBorder});
  background-color: var(${d.errorBackground});
  color: var(${d.errorForeground});
`, Ui = c.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  > svg {
    fill: var(${d.errorForeground});
  }
  > div:nth-child(2) {
    flex: 1;
  }
`, Wi = c.div`
  margin: 8px;
`;
function Ki() {
  return /* @__PURE__ */ e.jsx(_i, { children: /* @__PURE__ */ e.jsxs(Qi, { children: [
    /* @__PURE__ */ e.jsx(C, {}),
    /* @__PURE__ */ e.jsx("div", { children: "Your API has structural or semantic issues in its OpenAPI format. Fix these issues first and run Security Audit again to get the full audit report." })
  ] }) });
}
const _i = c.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${d.errorBorder});
  background-color: var(${d.errorBackground});
  color: var(${d.errorForeground});
`, Qi = c.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  > svg {
    fill: var(${d.errorForeground});
  }
  > div:nth-child(2) {
    flex: 1;
  }
`;
function _() {
  const { tab: i, audit: t } = h((s) => s.audit), n = x(), o = (s) => {
    n(m(s));
  };
  return /* @__PURE__ */ e.jsxs(Xi, { children: [
    t.valid === !1 && /* @__PURE__ */ e.jsx(Ki, {}),
    /* @__PURE__ */ e.jsx(_e, {}),
    /* @__PURE__ */ e.jsx(Ei, {}),
    /* @__PURE__ */ e.jsxs(Le, { value: i, onValueChange: o, children: [
      /* @__PURE__ */ e.jsxs(De, { children: [
        /* @__PURE__ */ e.jsx(G, { value: "priority", children: "Priority" }),
        /* @__PURE__ */ e.jsx(G, { value: "issues", children: "Issues" })
      ] }),
      /* @__PURE__ */ e.jsx(N, { value: "priority", children: /* @__PURE__ */ e.jsx(oi, {}) }),
      /* @__PURE__ */ e.jsx(N, { value: "issues", children: /* @__PURE__ */ e.jsx(Ci, {}) })
    ] })
  ] });
}
const Xi = c.div``;
function Yi() {
  return /* @__PURE__ */ e.jsxs(Ji, { children: [
    /* @__PURE__ */ e.jsx(Re, {}),
    "There is no Security Audit report available for this file"
  ] });
}
const Ji = c.div`
  display: flex;
  margin: 8px;
  padding: 8px;
  gap: 8px;
  align-items: center;
  border: 1px solid var(${d.border});
  font-size: 14px;
  > svg {
    color: var(${d.foreground});
  }
`;
function Zi() {
  return /* @__PURE__ */ e.jsxs(et, { children: [
    /* @__PURE__ */ e.jsxs(it, { children: [
      /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsx("div", {})
    ] }),
    /* @__PURE__ */ e.jsx(tt, {})
  ] });
}
const et = c.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`, se = ve`
  0% {
    background-color: var(${d.computedOne});
  }
  100% {
    background-color: var(${d.computedTwo});
  }
`, it = c.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  & > div {
    flex: 1;
    display: flex;
    height: 100px;
    flex-direction: column;
    border: 1px solid var(${d.border});
    animation: ${se} 1s linear infinite alternate;
  }
`, tt = c.div`
  border: 1px solid var(${d.border});
  height: 15rem;
  animation: ${se} 1s linear infinite alternate;
`, Q = [
  { id: "blank", title: "Blank", element: /* @__PURE__ */ e.jsx("div", {}), when: ne },
  {
    id: "start-audit",
    title: "Audit is starting",
    element: /* @__PURE__ */ e.jsx(Zi, {}),
    when: oe
  },
  {
    id: "no-report",
    title: "No Audit Report",
    element: /* @__PURE__ */ e.jsx(Yi, {}),
    when: V
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ e.jsx(_, {}),
    when: F
  },
  {
    id: "audit-report",
    title: "Security Audit",
    element: /* @__PURE__ */ e.jsx(_, {}),
    when: B
  }
], ot = {
  startAudit: oe,
  cancelAudit: ne,
  showFullReport: F,
  showPartialReport: B,
  showNoReport: V,
  loadKdb: Ne,
  changeTheme: ye
};
function nt() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(be, {}),
    /* @__PURE__ */ e.jsx(Se, {})
  ] });
}
function rt(i, t) {
  const n = We(Ke(i, Q), t);
  ge(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(fe.StrictMode, { children: /* @__PURE__ */ e.jsx(me, { store: n, children: /* @__PURE__ */ e.jsx(Ce.Provider, { value: Q, children: /* @__PURE__ */ e.jsx(nt, {}) }) }) })
  ), window.addEventListener("message", je(n, ot));
}
window.renderWebView = rt;
