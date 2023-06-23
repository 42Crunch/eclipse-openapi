import { c as se, a as ae, u as le, l as de, t as ce, b as pe, i as ue, s as xe, d as c, T as d, j as e, r as j, U as he, e as ve, R as ge, P as fe, m as me, f as je, g as be } from "./styled-components.browser.esm.b4077a0f.js";
import { r as ye, s as $e, R as we, a as Ce } from "./Router.bc058529.js";
import { C as Se, S as L, a as ke, b as X, c as Y, d as Te, e as J } from "./Xmark.97e9c535.js";
import { u as Ae } from "./index.esm.2e24c5a3.js";
import { $ as Ie, T as Le, a as G, b as N } from "./Tabs.d6340d43.js";
import { S as C } from "./ExclamationCircle.20b20ea3.js";
import { S as Z } from "./TriangleExclamation.3c1770d3.js";
import { S as ee } from "./AngleUp.51e58661.js";
import { P as T } from "./Select.aaac1f78.js";
import { B as De, S as Pe } from "./Banner.440bd815.js";
import "./downshift.esm.c45abd85.js";
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
    byGroup: te([])
  },
  kdb: {},
  issueTitles: [],
  filter: {},
  sqgTodo: !1
}, ie = se({
  name: "audit",
  initialState: Re,
  reducers: {
    startAudit: (i, t) => {
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
  const { issues: t, filtered: n, stats: o, titles: s } = ze(
    i.sqgTodo ? i.audit.todo : i.audit.issues,
    i.audit.files,
    i.kdb,
    i.filter
  );
  i.issues = t, i.filtered = n, i.stats = o, i.issueTitles = s;
}
function ze(i, t, n, o) {
  const s = Be(i, t, n), l = Ve(s, n), r = Me(l), p = Fe(s, o);
  return { issues: s, filtered: p, stats: l, titles: r };
}
function Fe(i, t) {
  const n = (a, g) => t.ids === void 0 || t.ids.includes(g), o = (a) => t.domain === void 0 || a.domain === (t == null ? void 0 : t.domain), s = (a) => t.group === void 0 || a.group === (t == null ? void 0 : t.group), l = (a) => (t == null ? void 0 : t.rule) === void 0 || a.id === t.rule, r = t.severity !== void 0 ? L.indexOf(t.severity) + 1 : 0, p = (a) => t.severity === void 0 || a.criticality >= r;
  return i.filter((a, g) => n(a, g) && o(a) && s(a) && l(a) && p(a));
}
function Be(i, t, n) {
  return Object.entries(i).map(([s, l]) => l.map((r, p) => ({
    ...r,
    domain: n[r.id].group,
    group: n[r.id].subgroup,
    filename: t[r.documentUri].relative
  }))).reduce((s, l) => s.concat(l), []);
}
function Ve(i, t) {
  const n = {};
  for (const l of i)
    n[l.id] || (n[l.id] = []), n[l.id].push(l);
  const o = Object.keys(n).map((l) => ({
    id: l,
    kdb: t[l] || qe,
    title: t[l].title.text.replace(/^<h1>|<\/h1>$/g, ""),
    domain: n[l][0].domain,
    score: n[l].reduce((r, p) => r + p.score, 0),
    criticality: Math.max(...n[l].map((r) => r.criticality)),
    displayScore: Oe(n[l].reduce((r, p) => r + p.score, 0)),
    count: n[l].length,
    important: n[l].some((r) => r.criticality >= ke.Low)
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
    const r = l.domain, p = l.group, a = Se[l.criticality];
    r !== void 0 && p !== void 0 && //@ts-ignore
    ((s = (o = n[r]) == null ? void 0 : o[p]) == null ? void 0 : s[a]) !== void 0 && n[r][p][a]++;
  }
  return n;
}
function Me(i) {
  return i.byIssue.map((t) => ({ value: t.id, label: t.title })).sort((t, n) => {
    const o = t.value.toLowerCase(), s = n.value.toLowerCase();
    return o < s ? -1 : o > s ? 1 : 0;
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
  startAudit: oe,
  showFullReport: F,
  showPartialReport: B,
  showNoReport: V,
  loadKdb: Ge,
  goToLine: M,
  copyIssueId: O,
  openLink: S,
  changeTab: m,
  changeFilter: u,
  setSqgTodo: Ne
} = ie.actions, Ee = ie.reducer, He = {
  audit: Ee,
  theme: ce,
  router: ye
}, Ue = (i, t) => ae({
  reducer: He,
  middleware: (n) => n().prepend(i.middleware).concat(de),
  preloadedState: {
    theme: t
  }
}), x = () => Ae(), h = le, ne = pe(), w = ne.startListening;
function We(i, t) {
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
    matcher: ue(F, B, V),
    effect: async (o, s) => {
      window.scrollTo(0, 0);
    }
  }), $e(w, t), xe(n), ne;
}
function Ke() {
  const i = h((n) => n.audit.audit.summary), t = x();
  return /* @__PURE__ */ e.jsx(_e, { children: /* @__PURE__ */ e.jsxs(Qe, { children: [
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
const _e = c.div`
  margin: 8px;
`, Qe = c.div`
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
  return /* @__PURE__ */ e.jsxs(Xe, { children: [
    /* @__PURE__ */ e.jsxs(Ye, { collapsed: t, onClick: () => n(!t), children: [
      /* @__PURE__ */ e.jsx("div", { children: t ? /* @__PURE__ */ e.jsx(Z, {}) : /* @__PURE__ */ e.jsx(ee, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        i[0],
        i[1]
      ] })
    ] }),
    !t && /* @__PURE__ */ e.jsx(Je, { children: i[2] })
  ] });
}
const Xe = c.div`
  margin: 8px;
  border: 1px solid var(${d.border});
`, Ye = c.div`
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
`, Je = c.div`
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
    A(i.example, t),
    A(i.exploit, t),
    A(i.remediation, t)
  ].join("");
  return /* @__PURE__ */ e.jsx(Ze, { ref: s, dangerouslySetInnerHTML: { __html: l } });
}
function A(i, t) {
  return !i || !i.sections ? "" : i.sections.map((n) => {
    if (n.text)
      return n.text;
    if (n.code)
      return `<pre>${n.code[t]}</pre>`;
  }).join("");
}
const Ze = c.div`
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
  }), /* @__PURE__ */ e.jsxs(ei, { children: [
    /* @__PURE__ */ e.jsxs("h2", { children: [
      l.length,
      " results with this issue"
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: p.map((a) => /* @__PURE__ */ e.jsxs(ii, { children: [
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
const ei = c.div`
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
`, ii = c.div`
  display: flex;
  align-items: center;
  margin: 4px;
  gap: 4px;
  > svg {
    fill: var(${d.foreground});
  }
`;
function ti() {
  const {
    stats: i,
    issues: t,
    audit: { filename: n }
  } = h((r) => r.audit), o = x(), s = i.byIssue.filter((r) => r.important).slice().sort((r, p) => p.count - r.count).slice(0, 4), l = i.byIssue.filter((r) => r.important).slice().sort((r, p) => p.score - r.score).slice(0, 4);
  return /* @__PURE__ */ e.jsxs(oi, { children: [
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
const oi = c.div`
  position: relative;
`, H = c.div`
  margin: 14px;
  font-size: 12px;
  font-weight: 500;
`;
function ni({
  filters: i,
  onClick: t
}) {
  return /* @__PURE__ */ e.jsx(
    ri,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t();
      },
      children: /* @__PURE__ */ e.jsxs(ai, { children: [
        /* @__PURE__ */ e.jsx(Te, {}),
        i !== 0 && /* @__PURE__ */ e.jsx(si, { children: i })
      ] })
    }
  );
}
const ri = c.div`
  width: 34px;
  height: 26px;
  position: relative;
`, si = c.div`
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
`, ai = c.button`
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
function li() {
  const i = h((o) => o.audit.filter), t = x(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ e.jsx(di, { children: /* @__PURE__ */ e.jsx(
    T,
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
const di = c.div`
  width: 264px;
`;
function ci() {
  const i = x();
  return /* @__PURE__ */ e.jsxs(
    pi,
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
const pi = c.div`
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
function ui() {
  const { issueTitles: i, filter: t } = h((o) => o.audit), n = x();
  return /* @__PURE__ */ e.jsx(xi, { children: /* @__PURE__ */ e.jsx(
    T,
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
const xi = c.div`
  width: 264px;
`;
function hi() {
  const i = h((o) => o.audit.filter), t = x(), n = [
    { label: "All", value: "all" },
    { label: "Security", value: "security" },
    { label: "Data validation", value: "datavalidation" },
    { label: "OpenAPI format requirements", value: "oasconformance" }
  ];
  return /* @__PURE__ */ e.jsx(vi, { children: /* @__PURE__ */ e.jsx(
    T,
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
const vi = c.div`
  width: 264px;
`, gi = {
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
function fi() {
  const i = h((o) => o.audit.filter), t = x(), n = i.domain !== void 0 ? gi[i.domain] : [];
  return /* @__PURE__ */ e.jsx(mi, { children: /* @__PURE__ */ e.jsx(
    T,
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
const mi = c.div`
  width: 264px;
`;
function ji() {
  const { filtered: i, filter: t } = h((p) => p.audit), n = x(), [o, s] = j.useState(!0), r = ["rule", "domain", "group", "severity"].filter((p) => t && t[p] !== void 0).length;
  return /* @__PURE__ */ e.jsxs(bi, { children: [
    t.ids !== void 0 && /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        i.length,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsxs(
        $i,
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
      /* @__PURE__ */ e.jsx(ni, { filters: r, onClick: () => s(!o) })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(yi, { children: [
      /* @__PURE__ */ e.jsx(hi, {}),
      /* @__PURE__ */ e.jsx(fi, {}),
      /* @__PURE__ */ e.jsx(li, {}),
      /* @__PURE__ */ e.jsx(ui, {}),
      /* @__PURE__ */ e.jsx(ci, {})
    ] })
  ] });
}
const bi = c.div`
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
`, yi = c.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`, $i = c.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
function wi() {
  const {
    kdb: i,
    filtered: t,
    audit: { filename: n }
  } = h((s) => s.audit), o = x();
  return /* @__PURE__ */ e.jsxs(Ci, { children: [
    /* @__PURE__ */ e.jsx(ji, {}),
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
const Ci = c.div``;
function Si({
  value: i,
  onChange: t
}) {
  return /* @__PURE__ */ e.jsx(
    ki,
    {
      active: i,
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t(!i);
      },
      children: /* @__PURE__ */ e.jsx(Ti, { active: i })
    }
  );
}
const ki = c.div`
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
function Ai({
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
function Ii({
  sqgs: i,
  selected: t,
  onSelect: n
}) {
  return /* @__PURE__ */ e.jsx(Li, { children: i.map((o, s) => /* @__PURE__ */ e.jsx(
    Di,
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
const Li = c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`, Di = c.div`
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
function Pi({ sqg: i, summary: t }) {
  const n = i.directives.minimumAssessmentScores;
  return i.directives.subcategoryRules, i.directives.issueRules, /* @__PURE__ */ e.jsxs(Ri, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Minimum acceptable score" }),
    /* @__PURE__ */ e.jsxs(zi, { children: [
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
const Ri = c.div``, zi = c.div`
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
function Fi({ sqg: i, stats: t }) {
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
  return /* @__PURE__ */ e.jsxs(Bi, { children: [
    /* @__PURE__ */ e.jsx("h4", { children: "Allowed issue security levels" }),
    /* @__PURE__ */ e.jsxs(Vi, { children: [
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
const Bi = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`, Vi = c.div`
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
function Mi({ sqg: i, stats: t }) {
  const n = x(), o = i.directives.issueRules, l = t.byIssue.filter((r) => o.includes(r.id));
  return l.length === 0 ? null : /* @__PURE__ */ e.jsxs(Oi, { children: [
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
const Oi = c.div`
  > div {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
function qi({
  compliance: i,
  summary: t,
  stats: n
}) {
  const [o, s] = j.useState(0), l = i.sqgsDetail[o];
  return /* @__PURE__ */ e.jsxs(Gi, { children: [
    /* @__PURE__ */ e.jsx(
      Ii,
      {
        sqgs: i.sqgsDetail,
        onSelect: s,
        selected: i.sqgsDetail[o].id
      }
    ),
    /* @__PURE__ */ e.jsx(Pi, { sqg: l, summary: t }),
    /* @__PURE__ */ e.jsx(Fi, { sqg: l, stats: n }),
    /* @__PURE__ */ e.jsx(Mi, { sqg: l, stats: n })
  ] });
}
const Gi = c.div`
  padding: 8px;
  color: var(${d.foreground});
  background-color: var(${d.background});
  border-top: 1px solid var(${d.errorBorder});
`;
function Ni() {
  const { compliance: i, summary: t } = h((a) => a.audit.audit), n = h((a) => a.audit.stats), o = h((a) => a.audit.sqgTodo), s = x(), l = (a) => {
    s(Ne(a));
  }, [r, p] = j.useState(!1);
  return i === void 0 ? null : i.acceptance === "yes" ? /* @__PURE__ */ e.jsx(Ui, { children: /* @__PURE__ */ e.jsx(De, { message: "Security quality gates passed" }) }) : /* @__PURE__ */ e.jsxs(Ei, { children: [
    /* @__PURE__ */ e.jsxs(Hi, { children: [
      /* @__PURE__ */ e.jsx(C, {}),
      /* @__PURE__ */ e.jsx("div", { children: "Security quality gates failed" }),
      /* @__PURE__ */ e.jsx(Si, { value: o, onChange: l }),
      "Show only SQG to-do list",
      /* @__PURE__ */ e.jsx(
        Ai,
        {
          isOpen: r,
          onClick: () => p(!r),
          style: { width: 14, height: 14 }
        }
      )
    ] }),
    r && /* @__PURE__ */ e.jsx(qi, { compliance: i, summary: t, stats: n })
  ] });
}
const Ei = c.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${d.errorBorder});
  background-color: var(${d.errorBackground});
  color: var(${d.errorForeground});
`, Hi = c.div`
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
`, Ui = c.div`
  margin: 8px;
`;
function Wi() {
  return /* @__PURE__ */ e.jsx(Ki, { children: /* @__PURE__ */ e.jsxs(_i, { children: [
    /* @__PURE__ */ e.jsx(C, {}),
    /* @__PURE__ */ e.jsx("div", { children: "Your API has structural or semantic issues in its OpenAPI format. Fix these issues first and run Security Audit again to get the full audit report." })
  ] }) });
}
const Ki = c.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${d.errorBorder});
  background-color: var(${d.errorBackground});
  color: var(${d.errorForeground});
`, _i = c.div`
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
  return /* @__PURE__ */ e.jsxs(Qi, { children: [
    t.valid === !1 && /* @__PURE__ */ e.jsx(Wi, {}),
    /* @__PURE__ */ e.jsx(Ke, {}),
    /* @__PURE__ */ e.jsx(Ni, {}),
    /* @__PURE__ */ e.jsxs(Ie, { value: i, onValueChange: o, children: [
      /* @__PURE__ */ e.jsxs(Le, { children: [
        /* @__PURE__ */ e.jsx(G, { value: "priority", children: "Priority" }),
        /* @__PURE__ */ e.jsx(G, { value: "issues", children: "Issues" })
      ] }),
      /* @__PURE__ */ e.jsx(N, { value: "priority", children: /* @__PURE__ */ e.jsx(ti, {}) }),
      /* @__PURE__ */ e.jsx(N, { value: "issues", children: /* @__PURE__ */ e.jsx(wi, {}) })
    ] })
  ] });
}
const Qi = c.div``;
function Xi() {
  return /* @__PURE__ */ e.jsxs(Yi, { children: [
    /* @__PURE__ */ e.jsx(Pe, {}),
    "There is no Security Audit report available for this file"
  ] });
}
const Yi = c.div`
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
function Ji() {
  return /* @__PURE__ */ e.jsxs(Zi, { children: [
    /* @__PURE__ */ e.jsxs(et, { children: [
      /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsx("div", {})
    ] }),
    /* @__PURE__ */ e.jsx(it, {})
  ] });
}
const Zi = c.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`, re = he`
  0% {
    background-color: var(${d.computedOne});
  }
  100% {
    background-color: var(${d.computedTwo});
  }
`, et = c.div`
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
    animation: ${re} 1s linear infinite alternate;
  }
`, it = c.div`
  border: 1px solid var(${d.border});
  height: 15rem;
  animation: ${re} 1s linear infinite alternate;
`, Q = [
  {
    id: "start-audit",
    title: "Audit is starting",
    element: /* @__PURE__ */ e.jsx(Ji, {}),
    when: oe
  },
  {
    id: "no-report",
    title: "No Audit Report",
    element: /* @__PURE__ */ e.jsx(Xi, {}),
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
], tt = {
  startAudit: oe,
  showFullReport: F,
  showPartialReport: B,
  showNoReport: V,
  loadKdb: Ge,
  changeTheme: be
};
function ot() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(je, {}),
    /* @__PURE__ */ e.jsx(Ce, {})
  ] });
}
function nt(i, t) {
  const n = Ue(We(i, Q), t);
  ve(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(ge.StrictMode, { children: /* @__PURE__ */ e.jsx(fe, { store: n, children: /* @__PURE__ */ e.jsx(we.Provider, { value: Q, children: /* @__PURE__ */ e.jsx(ot, {}) }) }) })
  ), window.addEventListener("message", me(n, tt));
}
window.renderWebView = nt;
