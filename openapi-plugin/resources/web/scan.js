import { c as oe, b as ae, a as Se, u as Ce, l as Ee, t as Oe, r as Re, d as Ae, s as Pe, i as Ie, q as h, T as x, e as N, j as e, S as ke, f as qe, R as Te, P as $e, g as Ne, m as He, h as De, k as Me, n as _e } from "./TriangleExclamation.Bx9Cjic4.js";
import { g as Le, H as ce, e as Fe, s as Be, b as Ue, l as Ye } from "./slice.O08lSnJw.js";
import { S as ze, e as Ke, b as We, c as Ve } from "./Xmark.CXjf-jmZ.js";
import { p as Ge, s as Qe, a as Je, S as F, l as Xe } from "./index.VoTi6eqY.js";
import { c as Ze, l as et } from "./index.DDL_J8y6.js";
import { s as tt } from "./listener.BD7iG2ss.js";
import { D } from "./datetime.DlW1FQ29.js";
import { S as st } from "./AngleDown.BXHrY2zc.js";
import { S as nt } from "./AngleUp.BT-LmYBc.js";
import { S as $ } from "./Check.BYlFq-hF.js";
import { S as q } from "./ExclamationCircle.DZfV_vy9.js";
import { C as it, A as rt, P as ot, R as at, T as ct, a as dt } from "./index.wUGuWQIC.js";
import { R as de } from "./Response.Bd-lgNHB.js";
import { P as H } from "./Select.AYETaB4E.js";
import { T as lt } from "./Tabs.CYtaWkhP.js";
import { C as ht } from "./CollapsibleCard.Dhy-4_vZ.js";
const pt = {
  oas: {
    openapi: "3.0.0",
    info: { title: "", version: "0.0" },
    paths: {}
  },
  rawOas: "",
  scanReport: void 0,
  prefs: {
    scanServer: "",
    tryitServer: "",
    security: {},
    useGlobalBlocks: !0,
    rejectUnauthorized: !0
  },
  error: void 0,
  responses: {},
  waitings: {},
  errors: {},
  waiting: !0,
  filter: {},
  tab: "summary",
  grouped: {},
  issues: [],
  operations: {},
  titles: [],
  paths: [],
  operationIds: []
}, le = oe({
  name: "scan",
  initialState: pt,
  reducers: {
    startScan: (t, s) => {
      t.error = void 0, t.scanReport = void 0, t.waiting = !0, t.response = void 0, t.responses = {};
    },
    scanOperation: (t, s) => {
    },
    runScan: (t, s) => {
      t.defaultValues = s.payload.defaultValues, t.scanReport = void 0, t.error = void 0, t.waiting = !0, t.response = void 0, t.responses = {};
    },
    showScanReport: (t, s) => {
      var w;
      const { oas: n, path: i, method: r, report: u } = s.payload, o = Le(n, i, r), c = (o == null ? void 0 : o.operationId) === void 0 ? `${i}:${r}` : o.operationId, a = (w = u.operations) == null ? void 0 : w[c];
      a && (t.operations[c] = a);
      const p = se(u), l = B(p, t.filter), { titles: f, paths: j, operationIds: S } = T(p), { grouped: v } = T(l);
      t.issues = p, t.titles = f, t.paths = j, t.operationIds = S, t.grouped = v, t.oas = n, t.scanReport = u, t.waiting = !1;
    },
    showFullScanReport: (t, s) => {
      const { oas: n, report: i } = s.payload, r = se(i), u = B(r, t.filter), { titles: o, paths: c, operationIds: a } = T(r), { grouped: p } = T(u);
      t.oas = n, t.operations = { ...i.operations || {} }, t.issues = r, t.titles = o, t.paths = c, t.operationIds = a, t.grouped = p, t.scanReport = i, t.waiting = !1;
    },
    changeFilter: (t, s) => {
      t.filter = s.payload;
      const n = B(t.issues, t.filter), { grouped: i } = T(n);
      t.grouped = i;
    },
    changeTab: (t, s) => {
      t.tab = s.payload;
    },
    showGeneralError: (t, s) => {
      t.error = s.payload, t.waiting = !1;
    },
    showHttpResponse: (t, { payload: { id: s, response: n } }) => {
      t.responses[s] = n, t.waitings[s] = !1, delete t.errors[s];
    },
    showHttpError: (t, { payload: { id: s, error: n } }) => {
      t.errors[s] = n, t.waitings[s] = !1, delete t.responses[s];
    },
    sendHttpRequest: (t, { payload: { id: s } }) => {
      t.waitings[s] = !0;
    },
    sendCurlRequest: (t, s) => {
    },
    showJsonPointer: (t, s) => {
    },
    showAuditReport: (t, s) => {
    }
  }
}), {
  startScan: he,
  scanOperation: ut,
  runScan: un,
  showScanReport: ft,
  showFullScanReport: xt,
  showGeneralError: gt,
  showHttpError: vt,
  sendHttpRequest: mt,
  sendCurlRequest: pe,
  showHttpResponse: yt,
  showJsonPointer: ue,
  showAuditReport: jt,
  changeTab: M,
  changeFilter: g
} = le.actions;
function se(t) {
  var n, i, r;
  const s = [];
  for (const [u, o] of Object.entries((t == null ? void 0 : t.operations) || {}))
    for (const c of [
      "conformanceRequestsResults",
      "authorizationRequestsResults",
      "customRequestsResults"
    ]) {
      const a = o[c], p = o.path, l = o.method.toLocaleLowerCase();
      for (const f of a || [])
        s.push({ ...f, path: p, method: l, operationId: u });
    }
  for (const u of Object.keys((t == null ? void 0 : t.methodNotAllowed) || {}))
    for (const o of ce) {
      const c = (r = (i = (n = t == null ? void 0 : t.methodNotAllowed) == null ? void 0 : n[u]) == null ? void 0 : i[o]) == null ? void 0 : r.conformanceRequestsResults;
      for (const a of c || [])
        s.push({ ...a, path: u });
    }
  return s;
}
function B(t, s) {
  const n = (a) => {
    var p;
    return (s == null ? void 0 : s.title) === void 0 || ((p = a.test) == null ? void 0 : p.key) === s.title;
  }, i = s.severity !== void 0 ? ze.indexOf(s.severity) + 1 : 0, r = (a) => {
    var p, l;
    return s.severity === void 0 || ((p = a.outcome) == null ? void 0 : p.criticality) === void 0 || ((l = a.outcome) == null ? void 0 : l.criticality) >= i;
  }, u = (a) => (s == null ? void 0 : s.path) === void 0 || a.path === s.path, o = (a) => (s == null ? void 0 : s.method) === void 0 || a.method === s.method, c = (a) => (s == null ? void 0 : s.operationId) === void 0 || a.operationId === s.operationId;
  return t.filter((a) => n(a) && r(a) && u(a) && o(a) && c(a));
}
function T(t) {
  var o, c;
  const s = {}, n = {}, i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  for (const a of t) {
    const p = (o = a.test) == null ? void 0 : o.key;
    p !== void 0 && (s[p] === void 0 && (s[p] = [], n[p] = (c = a.test) == null ? void 0 : c.description), s[p].push(a)), i.add(a.path), a.operationId && r.add(a.operationId);
  }
  const u = Object.keys(s);
  for (const a of u)
    s[a].sort((p, l) => {
      var f, j, S, v, w, O, R, P, I, k;
      if (((f = p.outcome) == null ? void 0 : f.status) !== ((j = l.outcome) == null ? void 0 : j.status)) {
        if (((S = p.outcome) == null ? void 0 : S.status) === "error")
          return -1;
        if (((v = l.outcome) == null ? void 0 : v.status) === "error")
          return 1;
        if (((w = p.outcome) == null ? void 0 : w.status) === "defective")
          return -1;
        if (((O = l.outcome) == null ? void 0 : O.status) === "defective")
          return 1;
      }
      return ((R = p.outcome) == null ? void 0 : R.criticality) !== ((P = l.outcome) == null ? void 0 : P.criticality) ? ((I = p.outcome) == null ? void 0 : I.criticality) - ((k = l.outcome) == null ? void 0 : k.criticality) : 0;
    });
  return {
    grouped: s,
    titles: Object.keys(n),
    paths: Array.from(i),
    operationIds: Array.from(r)
  };
}
const bt = le.reducer, wt = {
  messages: []
}, fe = oe({
  name: "logging",
  initialState: wt,
  reducers: {
    showLogMessage: (t, s) => {
      t.messages.push(s.payload);
    },
    clearLogs: (t) => {
      t.messages = [];
    }
  }
}), { showLogMessage: St, clearLogs: fn } = fe.actions, xe = ae, Ct = fe.reducer, Et = {
  theme: Oe,
  scan: bt,
  router: Re,
  env: Fe,
  prefs: Ge,
  config: Ze,
  logging: Ct
}, Ot = (t, s) => Se({
  reducer: Et,
  middleware: (n) => n().prepend(t.middleware).concat(Ee),
  preloadedState: {
    theme: s
  }
}), y = () => Ce(), b = ae, ge = Ae(), C = ge.startListening;
function Rt(t, s) {
  const n = {
    savePrefs: () => C({
      matcher: Ie(Je, Qe),
      effect: async (i, r) => {
        const { prefs: u } = r.getState();
        t.postMessage({
          command: "savePrefs",
          payload: u
        });
      }
    }),
    sendHttpRequest: () => C({
      actionCreator: mt,
      effect: async (i, r) => {
        t.postMessage({
          command: "sendHttpRequest",
          payload: i.payload
        });
      }
    }),
    sendCurlRequest: () => C({
      actionCreator: pe,
      effect: async (i, r) => {
        t.postMessage({
          command: "sendCurlRequest",
          payload: i.payload
        });
      }
    }),
    showJsonPointer: () => C({
      actionCreator: ue,
      effect: async (i, r) => {
        t.postMessage({
          command: "showJsonPointer",
          payload: i.payload
        });
      }
    }),
    showAuditReport: () => C({
      actionCreator: jt,
      effect: async (i, r) => {
        t.postMessage({
          command: "showAuditReport",
          payload: void 0
        });
      }
    }),
    showEnvWindow: () => C({
      actionCreator: Be,
      effect: async (i, r) => {
        t.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return tt(C, s), Pe(n), ge;
}
function At() {
  const s = xe((o) => o.logging.messages).filter((o) => !0), n = N.useRef(null), [i, r] = N.useState(!1);
  if (N.useEffect(() => {
    n.current && !i && (n.current.scrollTop = n.current.scrollHeight);
  }, [s, i]), s.length === 0)
    return null;
  const u = () => {
    const o = n.current;
    if (o) {
      const c = o.scrollTop, a = o.scrollHeight, p = o.clientHeight;
      a - (c + p) < 10 ? r(!1) : r(!0);
    }
  };
  return /* @__PURE__ */ e.jsx(qt, { children: /* @__PURE__ */ e.jsx(It, { ref: n, onScroll: u, children: s.map((o, c, a) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(Pt, { first: c === 0, last: c === a.length - 1 }),
    /* @__PURE__ */ e.jsx("div", { children: o.message })
  ] }, c)) }) });
}
function Pt({ first: t, last: s }) {
  return /* @__PURE__ */ e.jsxs(kt, { first: t, last: s, children: [
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {})
  ] });
}
const It = h.div`
  color: var(${x.foreground});
  background-color: var(${x.background});
  line-break: anywhere;
  overflow-y: scroll;
  max-height: 200px;

  > div {
    display: flex;
    align-items: center;
    font-family: monospace;
    > div:last-child {
      padding: 4px 0px 4px 4px;
    }
  }
`, kt = h.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ first: t }) => !t && `background-color: var(${x.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${x.border});
    border: 1px solid var(${x.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ last: t }) => !t && `background-color: var(${x.border});`}
  }
`, qt = h.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${x.border});
`;
function Tt() {
  const t = b((s) => s.scan.error);
  return t ? /* @__PURE__ */ e.jsx(Nt, { children: /* @__PURE__ */ e.jsxs($t, { children: [
    /* @__PURE__ */ e.jsx("div", { children: t.message }),
    t.details && /* @__PURE__ */ e.jsx("div", { children: t.details })
  ] }) }) : null;
}
const $t = h.div`
  border: 1px solid var(${x.errorBorder});
  color: var(${x.errorForeground});
  background-color: var(${x.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
  > div {
    font-family: monospace;
  }
`, Nt = h.div`
  padding: 8px;
`;
function Ht() {
  const s = xe((n) => n.logging.messages).filter((n) => !0);
  return s.length === 0 ? null : /* @__PURE__ */ e.jsx(Mt, { children: s.map((n, i, r) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(Dt, { first: i === 0, last: i === r.length - 1 }),
    /* @__PURE__ */ e.jsx("div", { children: n.message })
  ] }, i)) });
}
function Dt({ first: t, last: s }) {
  return /* @__PURE__ */ e.jsxs(_t, { first: t, last: s, children: [
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {})
  ] });
}
const Mt = h.div`
  color: var(${x.foreground});
  background-color: var(${x.background});
  line-break: anywhere;
  padding: 8px;

  > div {
    display: flex;
    align-items: center;
    font-family: monospace;
    > div:last-child {
      padding: 4px 0px 4px 4px;
    }
  }
`, _t = h.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ first: t }) => !t && `background-color: var(${x.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${x.border});
    border: 1px solid var(${x.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ last: t }) => !t && `background-color: var(${x.border});`}
  }
`;
function Lt({
  global: t,
  issues: s,
  scanVersion: n
}) {
  const i = y(), r = s.filter(
    (o) => {
      var c, a;
      return ((c = o == null ? void 0 : o.outcome) == null ? void 0 : c.criticality) && ((a = o.outcome) == null ? void 0 : a.criticality) >= 1;
    }
  ).length, u = s.filter(
    (o) => {
      var c, a;
      return ((c = o == null ? void 0 : o.outcome) == null ? void 0 : c.criticality) && ((a = o.outcome) == null ? void 0 : a.criticality) >= 4;
    }
  ).length;
  return /* @__PURE__ */ e.jsxs(Ft, { children: [
    /* @__PURE__ */ e.jsxs(Ut, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ e.jsx("b", { children: t.state }),
        " (Exit code: ",
        t.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ e.jsx("div", { children: D.fromISO(t.endDate).toLocaleString(D.DATETIME_MED) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Execution time:",
        " ",
        D.fromISO(t.endDate).diff(D.fromISO(t.startDate)).toFormat("mm:ss.SSS")
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Scan version: ",
        n
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(Bt, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), i(M("tests")), i(g({}));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              s.length,
              " ",
              /* @__PURE__ */ e.jsx(F, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), i(M("tests")), i(g({ severity: "low" }));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              r,
              " ",
              /* @__PURE__ */ e.jsx(F, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), i(M("tests")), i(g({ severity: "high" }));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              u,
              " ",
              /* @__PURE__ */ e.jsx(F, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const Ft = h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Bt = h.div`
  display: flex;
  gap: 8px;
  & > div {
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    border: 1px solid var(${x.border});
  }
`, Ut = h.div`
  display: flex;
  border: 1px solid var(${x.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${x.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function ve({
  curl: t,
  id: s,
  waiting: n
}) {
  const i = y();
  return /* @__PURE__ */ e.jsx(Yt, { children: /* @__PURE__ */ e.jsxs(zt, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
    /* @__PURE__ */ e.jsx(ot, { children: /* @__PURE__ */ e.jsxs(at, { children: [
      /* @__PURE__ */ e.jsx(ct, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { children: /* @__PURE__ */ e.jsx(
        Ke,
        {
          onClick: (r) => {
            r.preventDefault(), r.stopPropagation(), i(pe(t));
          }
        }
      ) }) }),
      /* @__PURE__ */ e.jsx(dt, { children: /* @__PURE__ */ e.jsxs(Kt, { sideOffset: 5, children: [
        "Copy cURL command to the clipboard",
        /* @__PURE__ */ e.jsx(Wt, {})
      ] }) })
    ] }) }),
    t
  ] }) });
}
const Yt = h.div``, zt = h.div`
  & > span {
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 6px;
    & > svg {
      fill: var(${x.foreground});
    }
  }
  padding: 4px;
  padding-right: 24px;
  position: relative;
  font-family: monospace;
  background-color: var(${x.computedOne});
`, Kt = h(it)`
  color: var(${x.notificationsForeground});
  background-color: var(${x.notificationsBackground});
  border: 1px solid var(${x.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, Wt = h(rt)`
  fill: var(${x.notificationsForeground});
`;
function d(t) {
  t === void 0 || this.initialize(t), this.maxHeaderSize = d.maxHeaderSize;
}
d.prototype.initialize = function(t, s) {
  this.type = t, this.state = t + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
d.encoding = "ascii";
d.maxHeaderSize = 80 * 1024;
d.REQUEST = "REQUEST";
d.RESPONSE = "RESPONSE";
var me = d.kOnHeaders = 1, U = d.kOnHeadersComplete = 2, _ = d.kOnBody = 3, Y = d.kOnMessageComplete = 4;
d.prototype[me] = d.prototype[U] = d.prototype[_] = d.prototype[Y] = function() {
};
var ye = !0;
Object.defineProperty(d, "kOnExecute", {
  get: function() {
    return ye = !1, 99;
  }
});
var je = d.methods = [
  "DELETE",
  "GET",
  "HEAD",
  "POST",
  "PUT",
  "CONNECT",
  "OPTIONS",
  "TRACE",
  "COPY",
  "LOCK",
  "MKCOL",
  "MOVE",
  "PROPFIND",
  "PROPPATCH",
  "SEARCH",
  "UNLOCK",
  "BIND",
  "REBIND",
  "UNBIND",
  "ACL",
  "REPORT",
  "MKACTIVITY",
  "CHECKOUT",
  "MERGE",
  "M-SEARCH",
  "NOTIFY",
  "SUBSCRIBE",
  "UNSUBSCRIBE",
  "PATCH",
  "PURGE",
  "MKCALENDAR",
  "LINK",
  "UNLINK",
  "SOURCE"
], be = je.indexOf("CONNECT");
d.prototype.reinitialize = d;
d.prototype.close = d.prototype.pause = d.prototype.resume = d.prototype.free = function() {
};
d.prototype._compatMode0_11 = !1;
d.prototype.getAsyncId = function() {
  return 0;
};
var Vt = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
d.prototype.execute = function(t, s, n) {
  if (!(this instanceof d))
    throw new TypeError("not a HTTPParser");
  s = s || 0, n = typeof n == "number" ? n : t.length, this.chunk = t, this.offset = s;
  var i = this.end = s + n;
  try {
    for (; this.offset < i && !this[this.state](); )
      ;
  } catch (r) {
    if (this.isUserCall)
      throw r;
    return this.hadError = !0, r;
  }
  return this.chunk = null, n = this.offset - s, Vt[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || d.maxHeaderSize)) ? new Error("max header size exceeded") : n;
};
var Gt = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
d.prototype.finish = function() {
  if (!this.hadError) {
    if (!Gt[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[Y]());
  }
};
d.prototype.consume = d.prototype.unconsume = d.prototype.getCurrentBuffer = function() {
};
d.prototype.userCall = function() {
  this.isUserCall = !0;
  var t = this;
  return function(s) {
    return t.isUserCall = !1, s;
  };
};
d.prototype.nextRequest = function() {
  this.userCall()(this[Y]()), this.reinitialize(this.type);
};
d.prototype.consumeLine = function() {
  for (var t = this.end, s = this.chunk, n = this.offset; n < t; n++)
    if (s[n] === 10) {
      var i = this.line + s.toString(d.encoding, this.offset, n);
      return i.charAt(i.length - 1) === "\r" && (i = i.substr(0, i.length - 1)), this.line = "", this.offset = n + 1, i;
    }
  this.line += s.toString(d.encoding, this.offset, this.end), this.offset = this.end;
};
var Qt = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Jt = /^[ \t]+(.*[^ \t])/;
d.prototype.parseHeader = function(t, s) {
  if (t.indexOf("\r") !== -1)
    throw L("HPE_LF_EXPECTED");
  var n = Qt.exec(t), i = n && n[1];
  if (i)
    s.push(i), s.push(n[2]);
  else {
    var r = Jt.exec(t);
    r && s.length && (s[s.length - 1] && (s[s.length - 1] += " "), s[s.length - 1] += r[1]);
  }
};
var Xt = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
d.prototype.REQUEST_LINE = function() {
  var t = this.consumeLine();
  if (t) {
    var s = Xt.exec(t);
    if (s === null)
      throw L("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? s[1] : je.indexOf(s[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = s[2], this.info.versionMajor = +s[3], this.info.versionMinor = +s[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var Zt = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
d.prototype.RESPONSE_LINE = function() {
  var t = this.consumeLine();
  if (t) {
    var s = Zt.exec(t);
    if (s === null)
      throw L("HPE_INVALID_CONSTANT");
    this.info.versionMajor = +s[1], this.info.versionMinor = +s[2];
    var n = this.info.statusCode = +s[3];
    this.info.statusMessage = s[4], ((n / 100 | 0) === 1 || n === 204 || n === 304) && (this.body_bytes = 0), this.state = "HEADER";
  }
};
d.prototype.shouldKeepAlive = function() {
  if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {
    if (this.connection.indexOf("close") !== -1)
      return !1;
  } else if (this.connection.indexOf("keep-alive") === -1)
    return !1;
  return !!(this.body_bytes !== null || this.isChunked);
};
d.prototype.HEADER = function() {
  var t = this.consumeLine();
  if (t !== void 0) {
    var s = this.info;
    if (t)
      this.parseHeader(t, s.headers);
    else {
      for (var n = s.headers, i = !1, r, u = !1, o = 0; o < n.length; o += 2)
        switch (n[o].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = n[o + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (r = +n[o + 1], i) {
              if (r !== this.body_bytes)
                throw L("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              i = !0, this.body_bytes = r;
            break;
          case "connection":
            this.connection += n[o + 1].toLowerCase();
            break;
          case "upgrade":
            u = !0;
            break;
        }
      this.isChunked && i && (i = !1, this.body_bytes = null), u && this.connection.indexOf("upgrade") != -1 ? s.upgrade = this.type === d.REQUEST || s.statusCode === 101 : s.upgrade = s.method === be, this.isChunked && s.upgrade && (this.isChunked = !1), s.shouldKeepAlive = this.shouldKeepAlive();
      var c;
      if (ye ? c = this.userCall()(this[U](s)) : c = this.userCall()(this[U](
        s.versionMajor,
        s.versionMinor,
        s.headers,
        s.method,
        s.url,
        s.statusCode,
        s.statusMessage,
        s.upgrade,
        s.shouldKeepAlive
      )), c === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !c)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (c || this.body_bytes === 0)
          return this.nextRequest(), s.upgrade;
        this.body_bytes === null ? this.state = "BODY_RAW" : this.state = "BODY_SIZED";
      }
    }
  }
};
d.prototype.BODY_CHUNKHEAD = function() {
  var t = this.consumeLine();
  t !== void 0 && (this.body_bytes = parseInt(t, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
d.prototype.BODY_CHUNK = function() {
  var t = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[_](this.chunk, this.offset, t)), this.offset += t, this.body_bytes -= t, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
d.prototype.BODY_CHUNKEMPTYLINE = function() {
  var t = this.consumeLine();
  t !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
d.prototype.BODY_CHUNKTRAILERS = function() {
  var t = this.consumeLine();
  t !== void 0 && (t ? this.parseHeader(t, this.trailers) : (this.trailers.length && this.userCall()(this[me](this.trailers, "")), this.nextRequest()));
};
d.prototype.BODY_RAW = function() {
  var t = this.end - this.offset;
  this.userCall()(this[_](this.chunk, this.offset, t)), this.offset = this.end;
};
d.prototype.BODY_SIZED = function() {
  var t = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[_](this.chunk, this.offset, t)), this.offset += t, this.body_bytes -= t, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(t) {
  var s = d["kOn" + t];
  Object.defineProperty(d.prototype, "on" + t, {
    get: function() {
      return this[s];
    },
    set: function(n) {
      return this._compatMode0_11 = !0, be = "CONNECT", this[s] = n;
    }
  });
});
function L(t) {
  var s = new Error("Parse Error");
  return s.code = t, s;
}
function we(t) {
  if (t === void 0)
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  try {
    return es(Ue.Buffer.from(t, "base64"));
  } catch {
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  }
}
function es(t) {
  const s = new d(d.RESPONSE);
  let n = !1, i = 0, r, u, o = [], c = [];
  if (s[d.kOnHeadersComplete] = function(l) {
    l.shouldKeepAlive, l.upgrade, i = l.statusCode, l.statusMessage, r = l.versionMajor, u = l.versionMinor, o = l.headers;
  }, s[d.kOnBody] = function(l, f, j) {
    c.push(l.slice(f, f + j));
  }, s[d.kOnHeaders] = function(l) {
  }, s[d.kOnMessageComplete] = function() {
    n = !0;
  }, s.execute(t), s.finish(), !n)
    throw new Error("Could not parse");
  let a = c.join("");
  const p = [];
  for (let l = 0; l < o.length - 1; l++)
    l % 2 === 0 && p.push([o[l], o[l + 1]]);
  return {
    headers: p,
    statusCode: i,
    httpVersion: `${r}.${u}`,
    body: a
  };
}
function ts({
  issue: t,
  httpResponse: s,
  error: n,
  id: i,
  waiting: r
}) {
  var k, z, K, W, V, G, Q, J, X, Z, ee;
  const u = y(), [o, c] = N.useState(!0), { request: a, response: p, test: l, outcome: f } = t, j = (f == null ? void 0 : f.status) === "correct", S = f == null ? void 0 : f.conformant, v = f == null ? void 0 : f.error, w = f == null ? void 0 : f.excessiveDataExposure, O = !(j && S);
  let R = "N/A", P = "N/A";
  const I = ((z = (k = f == null ? void 0 : f.apiResponseAnalysis) == null ? void 0 : k[0]) == null ? void 0 : z.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  return I === "Yes" && (R = ((W = (K = f == null ? void 0 : f.apiResponseAnalysis) == null ? void 0 : K[0]) == null ? void 0 : W.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), R === "Yes" && (P = ((G = (V = f == null ? void 0 : f.apiResponseAnalysis) == null ? void 0 : V[0]) == null ? void 0 : G.responseKey) === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ e.jsxs(ss, { children: [
    /* @__PURE__ */ e.jsxs(ns, { collapsed: o, onClick: () => c(!o), children: [
      /* @__PURE__ */ e.jsx("div", { children: o ? /* @__PURE__ */ e.jsx(st, {}) : /* @__PURE__ */ e.jsx(nt, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(is, { children: l == null ? void 0 : l.description }),
        /* @__PURE__ */ e.jsxs(rs, { children: [
          v && /* @__PURE__ */ e.jsxs(A, { children: [
            /* @__PURE__ */ e.jsx(q, {}),
            " Error: ",
            v
          ] }),
          !v && O && /* @__PURE__ */ e.jsxs(A, { children: [
            /* @__PURE__ */ e.jsx(q, {}),
            " Failed",
            f.criticality > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              "/",
              /* @__PURE__ */ e.jsxs("span", { style: { fontWeight: cs[f.criticality] }, children: [
                " ",
                as[f.criticality]
              ] })
            ] })
          ] }),
          !v && !O && /* @__PURE__ */ e.jsxs(A, { children: [
            /* @__PURE__ */ e.jsx($, {}),
            " Passed"
          ] }),
          !v && O && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(A, { children: j ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx($, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(q, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ e.jsx(A, { children: S ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx($, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(q, {}),
              " Conforms to Contract: No"
            ] }) }),
            /* @__PURE__ */ e.jsx(A, { children: w ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(q, {}),
              " Excessive data exposure: Yes"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx($, {}),
              " Excessive data exposure: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(os, { children: [
      v && /* @__PURE__ */ e.jsxs(m, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Error" }),
        /* @__PURE__ */ e.jsx("div", { children: v })
      ] }),
      !v && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(m, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "HTTP code received" }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            p == null ? void 0 : p.httpStatusCode,
            " (Expected: ",
            (Q = l == null ? void 0 : l.httpStatusExpected) == null ? void 0 : Q.join(", "),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs(m, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response code found in API Contract" }),
          /* @__PURE__ */ e.jsx("div", { children: I })
        ] }),
        /* @__PURE__ */ e.jsxs(m, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Content-Type found in API Contract" }),
          /* @__PURE__ */ e.jsx("div", { children: R })
        ] }),
        /* @__PURE__ */ e.jsxs(m, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response matches API Contract" }),
          /* @__PURE__ */ e.jsx("div", { children: P })
        ] }),
        /* @__PURE__ */ e.jsxs(m, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Excessive data exposure found" }),
          /* @__PURE__ */ e.jsx("div", { children: w ? "Yes" : "No" })
        ] }),
        ((X = (J = f == null ? void 0 : f.apiResponseAnalysis) == null ? void 0 : J[0]) == null ? void 0 : X.responseDescription) && /* @__PURE__ */ e.jsxs(m, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response analysis" }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            " ",
            (ee = (Z = f == null ? void 0 : f.apiResponseAnalysis) == null ? void 0 : Z[0]) == null ? void 0 : ee.responseDescription
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs(m, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "JSON Pointer" }),
          /* @__PURE__ */ e.jsx("div", { children: l != null && l.jsonPointer ? /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "#",
              onClick: (te) => {
                te.preventDefault(), te.stopPropagation(), u(
                  ue((l == null ? void 0 : l.jsonPointer) + "")
                  // FIXME support indexed reports
                );
              },
              children: l == null ? void 0 : l.jsonPointer
            }
          ) : "N/A" })
        ] }),
        (a == null ? void 0 : a.curl) && /* @__PURE__ */ e.jsxs(m, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Request" }),
          /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(ve, { waiting: r, curl: a.curl, id: i }) })
        ] }),
        n === void 0 && (s !== void 0 || (p == null ? void 0 : p.rawPayload) !== void 0) && /* @__PURE__ */ e.jsxs(m, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response" }),
          /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
            de,
            {
              accented: !0,
              response: s || we(p == null ? void 0 : p.rawPayload)
            }
          ) })
        ] }),
        n && /* @__PURE__ */ e.jsxs(m, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Error" }),
          /* @__PURE__ */ e.jsx("div", { children: n == null ? void 0 : n.message })
        ] })
      ] })
    ] })
  ] });
}
const ss = h.div`
  margin: 8px;
  border: 1px solid var(${x.border});
`, ns = h.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${x.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${x.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ collapsed: t }) => !t && `border-bottom: 1px solid var(${x.border});
    border-left: 5px solid var(${x.badgeBackground});`}
`, is = h.div`
  font-weight: 600;
`, rs = h.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, A = h.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${x.foreground});
  }
`, os = h.div`
  background-color: var(${x.computedOne});
`, m = h.div`
  display: flex;
  padding: 8px;
  gap: 8px;
  & > div:first-child {
    flex: 1;
    opacity: 0.8;
  }
  & > div:last-child {
    line-break: anywhere;
    flex: 3;
  }
`, as = {
  0: "None",
  1: "Info",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Critical"
}, cs = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700,
  5: 700
};
function ds({
  filters: t,
  onClick: s
}) {
  return /* @__PURE__ */ e.jsx(
    ls,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), s();
      },
      children: /* @__PURE__ */ e.jsxs(ps, { children: [
        /* @__PURE__ */ e.jsx(We, {}),
        t !== 0 && /* @__PURE__ */ e.jsx(hs, { children: t })
      ] })
    }
  );
}
const ls = h.div`
  width: 34px;
  height: 26px;
  position: relative;
`, hs = h.div`
  position: absolute;
  left: 18px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${x.buttonForeground});
  background-color: var(${x.buttonBackground});
  font-size: 12px;
`, ps = h.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${x.buttonForeground});
  border: none;
  ${({ waiting: t }) => t && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${x.foreground});
  }
`;
function us() {
  const t = y();
  return /* @__PURE__ */ e.jsxs(
    fs,
    {
      onClick: (s) => {
        t(g({})), s.preventDefault(), s.stopPropagation();
      },
      children: [
        /* @__PURE__ */ e.jsx(Ve, {}),
        " ",
        /* @__PURE__ */ e.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const fs = h.div`
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
function xs() {
  const t = b((i) => i.scan.filter), s = y(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ e.jsx(gs, { children: /* @__PURE__ */ e.jsx(
    H,
    {
      label: "Severity",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (i) => {
        i && i.value !== "all" ? s(g({ ...t, severity: i == null ? void 0 : i.value })) : s(g({ ...t, severity: void 0 }));
      },
      selected: (t == null ? void 0 : t.severity) || "all"
    }
  ) });
}
const gs = h.div`
  width: 264px;
`;
function vs() {
  const { filter: t, titles: s } = b((r) => r.scan), n = y(), i = [];
  for (const r of s)
    ne[r] && i.push({ label: ne[r], value: r });
  return /* @__PURE__ */ e.jsx(ms, { children: /* @__PURE__ */ e.jsx(
    H,
    {
      label: "Type",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? n(g({ ...t, title: r.value })) : n(g({ ...t, title: void 0 }));
      },
      selected: t.title || "all"
    }
  ) });
}
const ms = h.div`
  width: 264px;
`, ne = {
  "authentication-swapping-bfla": "Scan engine executes a business logic flow with wrong credentials",
  "authentication-swapping-bola": "Scan engine invokes an operation with wrong credentials",
  "custom-request": "Custom client request",
  "parameter-header-contenttype-wrong-scan": "Scan sends a request with a wrong content type",
  "parameter-required-scan": "Scan sends a request that is missing a required parameter",
  "partial-security-accepted": "Scan sends a request where a required security requirement is missing",
  "path-item-method-not-allowed-scan": "Scan sends a request using an undefined verb",
  "path-item-method-not-allowed-no-authn-scan": "Scan sends a request without authentication using an undefined verb",
  "schema-additionalproperties-scan": "Scan sends a request that contains an undefined property",
  "schema-enum-scan": "Scan sends a request containing a value not present in the constraining enum",
  "schema-format-scan": "Scan sends a request containing a string value with wrong format",
  "schema-maxitems-scan": "Scan sends a request containing an array with too many items",
  "schema-maxlength-scan": "Scan sends a request containing a too long string",
  "schema-maximum-scan": "Scan sends a request containing a numeric value overflowing the maximum",
  "schema-minitems-scan": "Scan sends a request containing an array with too few items",
  "schema-minlength-scan": "Scan sends a request containing a string value that is too short",
  "schema-minimum-scan": "Scan sends a request containing a numeric value under the minimum.",
  "schema-multipleof-scan": "Scan sends a request containing a numeric value conflicting with the property multipleOf",
  "schema-pattern-scan": "Scan sends a request containing a string with wrong pattern",
  "schema-required-scan": "Scan sends a request that is missing a required property",
  "schema-type-wrong-array-scan": "Scan sends a request containing an array instead of the expected type",
  "schema-type-wrong-bool-scan": "Scan sends a request containing a Boolean value instead of the expected type",
  "schema-type-wrong-integer-scan": "Scan sends a request containing an integer value instead of the expected type",
  "schema-type-wrong-number-scan": "Scan sends a request containing a number value instead of the expected type",
  "schema-type-wrong-object-scan": "Scan sends a request containing an object instead of the expected type",
  "schema-type-wrong-string-scan": "Scan sends a request containing a string value instead of the expected type",
  "schema-uniqueitems-unique-scan": "Scan sends a request containing an array value that conflicts with 'uniqueItems'"
};
function ys() {
  const { filter: t, paths: s } = b((r) => r.scan), n = y(), i = s.map((r) => ({ label: r, value: r }));
  return /* @__PURE__ */ e.jsx(js, { children: /* @__PURE__ */ e.jsx(
    H,
    {
      label: "Path",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? n(
          g({ ...t, path: r.value, operationId: void 0 })
        ) : n(g({ ...t, path: void 0, operationId: void 0 }));
      },
      selected: t.path || "all"
    }
  ) });
}
const js = h.div`
  width: 264px;
`;
function bs() {
  const { filter: t, operationIds: s } = b((r) => r.scan), n = y(), i = s.map((r) => ({ label: r, value: r }));
  return /* @__PURE__ */ e.jsx(ws, { children: /* @__PURE__ */ e.jsx(
    H,
    {
      label: "Operation ID",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? n(g({ ...t, operationId: r.value })) : n(g({ ...t, operationId: void 0 }));
      },
      selected: t.operationId || "all"
    }
  ) });
}
const ws = h.div`
  width: 264px;
`;
function Ss() {
  const { filter: t } = b((i) => i.scan), s = y(), n = ce.map((i) => ({ value: i, label: i.toUpperCase() }));
  return /* @__PURE__ */ e.jsx(Cs, { children: /* @__PURE__ */ e.jsx(
    H,
    {
      label: "Method",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (i) => {
        i && i.value !== "all" ? s(
          g({ ...t, method: i.value, operationId: void 0 })
        ) : s(g({ ...t, method: void 0, operationId: void 0 }));
      },
      selected: t.method || "all"
    }
  ) });
}
const Cs = h.div`
  width: 264px;
`;
function Es() {
  const { filter: t, grouped: s } = b((c) => c.scan), [n, i] = N.useState(!0), u = ["severity", "title"].filter((c) => t && t[c] !== void 0).length, o = Object.keys(s).map((c) => s[c].length).reduce((c, a) => c + a, 0);
  return /* @__PURE__ */ e.jsxs(Os, { children: [
    /* @__PURE__ */ e.jsxs(Rs, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        o,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsx(ds, { filters: u, onClick: () => i(!n) })
    ] }),
    !n && /* @__PURE__ */ e.jsxs(As, { children: [
      /* @__PURE__ */ e.jsx(xs, {}),
      /* @__PURE__ */ e.jsx(vs, {}),
      /* @__PURE__ */ e.jsx(ys, {}),
      /* @__PURE__ */ e.jsx(Ss, {}),
      /* @__PURE__ */ e.jsx(bs, {}),
      /* @__PURE__ */ e.jsx(us, {})
    ] })
  ] });
}
const Os = h.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, Rs = h.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, As = h.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function Ps({
  issues: t,
  responses: s,
  errors: n,
  waitings: i,
  grouped: r
}) {
  return t.length === 0 ? /* @__PURE__ */ e.jsx(ie, { children: /* @__PURE__ */ e.jsx(Is, { children: "No test results available" }) }) : /* @__PURE__ */ e.jsxs(ie, { children: [
    /* @__PURE__ */ e.jsx(Es, {}),
    Object.keys(r).map((u) => /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx(ks, { children: qs[u] ?? "Unknown test type" }),
      r[u].map((o, c) => {
        const a = `${u}-${c}`;
        return /* @__PURE__ */ e.jsx(
          ts,
          {
            issue: o,
            httpResponse: s[a],
            error: n[a],
            waiting: i[a],
            id: a
          },
          a
        );
      })
    ] }, u))
  ] });
}
const ie = h.div`
  margin-top: 8px;
`, Is = h.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${x.border});
`, ks = h.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, qs = {
  "authentication-swapping-bfla": "Broken Function Level Access test performed by swapping user credentials",
  "authentication-swapping-bola": "Broken Object Access Level Authorization test performed swapping user credentials.",
  "custom-request": "Custom client request",
  "parameter-header-contenttype-wrong-scan": "Scan sends a request where the request body does not match the 'Content-Type' specified in the header.",
  "parameter-required-scan": "Scan sends a request that is missing a parameter that has been defined as required in the OpenAPI definition.",
  "partial-security-accepted": "Scan sends a request where a required security requirement is missing",
  "path-item-method-not-allowed-scan": "Scan sends a request using a verb (method) that is not defined for the path in the OpenAPI definition.",
  "path-item-method-not-allowed-no-authn-scan": "Scan sends a request without authentication using a verb (method) that is not defined for the path in the OpenAPI definition.",
  "schema-additionalproperties-scan": "Scan sends a request that contains an undefined property.",
  "schema-enum-scan": "Scan sends a request that contains a enum value not present in the property '%s' constraining this value.",
  "schema-format-scan": "Scan sends a request containing a string value with wrong format",
  "schema-maxitems-scan": "Scan sends a request containing an array which has more items than what is defined by the property 'maxItems'",
  "schema-maxlength-scan": "Scan sends a request containing a string where length is greater than the value set by 'maxLength'",
  "schema-maximum-scan": "Scan sends a request containing an integer or number value larger than the defined maximum for it.",
  "schema-minitems-scan": "Scan sends a request containing an array value with less items than defined in the property 'minItems' constraining it.",
  "schema-minlength-scan": "Scan sends a request containing a string value that is shorter than the set 'minLength'.",
  "schema-minimum-scan": "Scan sends a request containing an integer or number value smaller than the defined minimum for it.",
  "schema-multipleof-scan": "Scan sends a request containing an integer or number value that does not follow the property 'multipleOf' defined for it.",
  "schema-pattern-scan": "Scan sends a request containing a string value that does not match the regular expression pattern defined for it.",
  "schema-required-scan": "Scan sends a request that is missing a property defined as 'required'.",
  "schema-type-wrong-array-scan": "Scan sends a request containing an array instead of the value type that the OpenAPI definition expects.",
  "schema-type-wrong-bool-scan": "Scan sends a request containing a Boolean value instead of the type that the OpenAPI definition expects.",
  "schema-type-wrong-integer-scan": "Scan sends a request containing an integer value instead of the type that the OpenAPI definition expects.",
  "schema-type-wrong-number-scan": "Scan sends a request containing a number value instead of the type that the OpenAPI definition expects.",
  "schema-type-wrong-object-scan": "Scan sends a request containing an object instead of the value type that the OpenAPI definition expects.",
  "schema-type-wrong-string-scan": "Scan sends a request containing a string value instead of the type that the OpenAPI definition expects.",
  "schema-uniqueitems-unique-scan": "Scan sends a request containing an array value that does not follow the property 'uniqueItems' that constrains this value."
};
function Ts({ operation: t }) {
  var p, l;
  const s = (p = t.scenarios) == null ? void 0 : p[0];
  if (s === void 0) {
    const f = t.reason || "unknown";
    return /* @__PURE__ */ e.jsxs(Ns, { children: [
      "Happy path failed, reason: ",
      f
    ] });
  }
  const { request: n, response: i, outcome: r, happyPath: u } = s;
  let o = "N/A";
  const c = (r == null ? void 0 : r.status) === "correct" ? "Yes" : "No";
  c === "Yes" && (o = r != null && r.conformant ? "Yes" : "No");
  const a = r == null ? void 0 : r.excessiveDataExposure;
  return /* @__PURE__ */ e.jsxs($s, { children: [
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        i == null ? void 0 : i.httpStatusCode,
        " (Expected: ",
        (l = u == null ? void 0 : u.httpStatusExpected) == null ? void 0 : l.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ e.jsx("div", { children: c })
    ] }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ e.jsx("div", { children: o })
    ] }),
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Excessive data exposure found" }),
      /* @__PURE__ */ e.jsx("div", { children: a ? "Yes" : "No" })
    ] }),
    (n == null ? void 0 : n.curl) && /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Request" }),
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(ve, { curl: n == null ? void 0 : n.curl, id: "happy-path", waiting: !1 }) })
    ] }),
    (i == null ? void 0 : i.rawPayload) && /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response" }),
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(de, { accented: !0, response: we(i.rawPayload) }) })
    ] }),
    (r == null ? void 0 : r.error) && /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Error" }),
      /* @__PURE__ */ e.jsx("div", { children: r == null ? void 0 : r.error })
    ] })
  ] });
}
const $s = h.div`
  margin: 8px;
  border: 1px solid var(${x.border});
`, Ns = h.div`
  margin: 16px;
`, E = h.div`
  display: flex;
  padding: 8px;
  gap: 8px;
  & > div:first-child {
    flex: 1;
    opacity: 0.8;
  }
  & > div:last-child {
    line-break: anywhere;
    flex: 3;
  }
`;
function Hs({
  operation: t,
  operationId: s,
  defaultCollapsed: n
}) {
  var o;
  const i = (o = t.scenarios) == null ? void 0 : o.map((c) => {
    var a;
    return (a = c == null ? void 0 : c.outcome) == null ? void 0 : a.testSuccessful;
  }), u = i !== void 0 && i.every((c) => c !== void 0) ? i.every((c) => c) : t.fuzzed;
  return /* @__PURE__ */ e.jsx(Ds, { children: /* @__PURE__ */ e.jsxs(ht, { defaultCollapsed: n, children: [
    /* @__PURE__ */ e.jsxs(Ms, { children: [
      /* @__PURE__ */ e.jsx("span", { children: s }),
      /* @__PURE__ */ e.jsx("span", { children: u ? "Passed" : "Failed" })
    ] }),
    /* @__PURE__ */ e.jsxs(_s, { children: [
      /* @__PURE__ */ e.jsx(Ls, { children: t.method }),
      /* @__PURE__ */ e.jsx(Fs, { children: t.path }),
      u ? /* @__PURE__ */ e.jsx($, {}) : /* @__PURE__ */ e.jsx(ke, {})
    ] }),
    /* @__PURE__ */ e.jsx(Ts, { operation: t })
  ] }) });
}
const Ds = h.div`
  background-color: var(${x.computedOne});
`, Ms = h.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > span:first-child {
    flex: 1;
    font-weight: 600;
  }
  > span:last-child {
    flex: none;
    font-weight: 600;
  }
`, _s = h.div`
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
  > svg {
    margin-left: auto;
    margin-right: 2px;
    width: 14px;
    height: 14px;
    fill: var(${x.foreground});
  }
`, Ls = h.div`
  background-color: var(${x.badgeBackground});
  color: var(${x.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, Fs = h.div`
  line-break: anywhere;
`;
function Bs() {
  const t = y(), { scanReport: s, operations: n, responses: i, errors: r, waitings: u, tab: o, issues: c, grouped: a } = b((l) => l.scan);
  if (s === void 0)
    return /* @__PURE__ */ e.jsx(Us, { children: /* @__PURE__ */ e.jsx(zs, { children: "Report is not yet available" }) });
  const p = Object.entries(n);
  return /* @__PURE__ */ e.jsx(
    lt,
    {
      activeTab: o,
      setActiveTab: (l) => t(M(l)),
      tabs: [
        {
          id: "summary",
          title: "Summary",
          content: /* @__PURE__ */ e.jsxs(Ys, { children: [
            /* @__PURE__ */ e.jsx(
              Lt,
              {
                issues: c,
                global: s.summary,
                scanVersion: s.scanVersion
              }
            ),
            /* @__PURE__ */ e.jsx("div", { style: { fontWeight: 600, margin: "8px" }, children: "Happy Path Testing results" }),
            p.map(([l, f]) => /* @__PURE__ */ e.jsx(
              Hs,
              {
                defaultCollapsed: p.length > 1,
                operationId: l,
                operation: f
              },
              l
            ))
          ] })
        },
        {
          id: "tests",
          title: "Tests",
          content: /* @__PURE__ */ e.jsx(
            Ps,
            {
              issues: c,
              grouped: a,
              responses: i,
              errors: r,
              waitings: u
            }
          )
        },
        { id: "logs", title: "Logs", content: /* @__PURE__ */ e.jsx(Ht, {}) }
      ]
    }
  );
}
const Us = h.div``, Ys = h.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, zs = h.div`
  margin: 1em;
  padding: 10px;
`;
function Ks() {
  const { scanReport: t, waiting: s, error: n } = b((i) => i.scan);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    t && /* @__PURE__ */ e.jsx(Bs, {}),
    /* @__PURE__ */ e.jsx(Tt, {}),
    (s || n) && /* @__PURE__ */ e.jsx(At, {})
  ] });
}
const re = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ e.jsx("div", {})
  },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ e.jsx(Ks, {}),
    when: he
  }
], Ws = {
  changeTheme: _e,
  startScan: he,
  scanOperation: ut,
  showGeneralError: gt,
  showHttpError: vt,
  showHttpResponse: yt,
  showScanReport: ft,
  showFullScanReport: xt,
  loadEnv: Ye,
  loadPrefs: Xe,
  loadConfig: et,
  showLogMessage: St
};
function Vs() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(De, {}),
    /* @__PURE__ */ e.jsx(Me, {})
  ] });
}
function Gs(t, s) {
  const n = Ot(Rt(t, re), s);
  qe(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(Te.StrictMode, { children: /* @__PURE__ */ e.jsx($e, { store: n, children: /* @__PURE__ */ e.jsx(Ne.Provider, { value: re, children: /* @__PURE__ */ e.jsx(Vs, {}) }) }) })
  ), window.addEventListener("message", He(n, Ws));
}
window.renderWebView = Gs;
