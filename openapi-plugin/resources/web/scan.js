import { c as re, b as oe, a as we, u as Se, l as Ce, t as Ee, r as Oe, d as $e, s as Re, i as Ae, q as h, T as u, e as T, j as t, S as Ie, f as Pe, R as ke, P as Te, g as qe, m as He, h as Ne, k as Me, n as _e } from "./TriangleExclamation.C9TIeFdu.js";
import { g as De, H as ae, e as Le, s as Fe, b as Be, l as Ue } from "./slice.mNbnWN2f.js";
import { S as Ye, e as Ke, b as ze, c as We } from "./Xmark.BkZ661o-.js";
import { p as Ve, s as Ge, a as Qe, S as F, l as Je } from "./index.DveCDhYk.js";
import { c as Xe, l as Ze } from "./index.B4v_rV4O.js";
import { s as et } from "./listener.Fe-L6Hxe.js";
import { D as H } from "./datetime.BMKtNb6j.js";
import { S as tt } from "./AngleDown.xeAvjyBy.js";
import { S as st } from "./AngleUp.ax7ypatx.js";
import { S as M } from "./Check.CQ-dhxPU.js";
import { S as N } from "./ExclamationCircle.BeER_tLV.js";
import { $ as nt, a as it, b as rt, c as ot, d as at, e as ct } from "./index.DicHCJjK.js";
import { R as ce } from "./Response.BPNpayXx.js";
import { P as q } from "./Select.Di7SbbiK.js";
import { T as dt } from "./Tabs.C__eCAeZ.js";
import { C as lt } from "./CollapsibleCard.EvFtfb-e.js";
const ht = {
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
    security: {}
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
}, de = re({
  name: "scan",
  initialState: ht,
  reducers: {
    startScan: (e, s) => {
      e.error = void 0, e.scanReport = void 0, e.waiting = !0, e.response = void 0, e.responses = {};
    },
    scanOperation: (e, s) => {
    },
    runScan: (e, s) => {
      e.defaultValues = s.payload.defaultValues, e.scanReport = void 0, e.error = void 0, e.waiting = !0, e.response = void 0, e.responses = {};
    },
    showScanReport: (e, s) => {
      var b;
      const { oas: n, path: i, method: r, report: f } = s.payload, o = De(n, i, r), d = (o == null ? void 0 : o.operationId) === void 0 ? `${i}:${r}` : o.operationId, a = (b = f.operations) == null ? void 0 : b[d];
      a && (e.operations[d] = a);
      const p = te(f), l = B(p, e.filter), { titles: x, paths: j, operationIds: C } = P(p), { grouped: S } = P(l);
      e.issues = p, e.titles = x, e.paths = j, e.operationIds = C, e.grouped = S, e.oas = n, e.scanReport = f, e.waiting = !1;
    },
    showFullScanReport: (e, s) => {
      const { oas: n, report: i } = s.payload, r = te(i), f = B(r, e.filter), { titles: o, paths: d, operationIds: a } = P(r), { grouped: p } = P(f);
      e.oas = n, e.operations = { ...i.operations || {} }, e.issues = r, e.titles = o, e.paths = d, e.operationIds = a, e.grouped = p, e.scanReport = i, e.waiting = !1;
    },
    changeFilter: (e, s) => {
      e.filter = s.payload;
      const n = B(e.issues, e.filter), { grouped: i } = P(n);
      e.grouped = i;
    },
    changeTab: (e, s) => {
      e.tab = s.payload;
    },
    showGeneralError: (e, s) => {
      e.error = s.payload, e.waiting = !1;
    },
    showHttpResponse: (e, { payload: { id: s, response: n } }) => {
      e.responses[s] = n, e.waitings[s] = !1, delete e.errors[s];
    },
    showHttpError: (e, { payload: { id: s, error: n } }) => {
      e.errors[s] = n, e.waitings[s] = !1, delete e.responses[s];
    },
    sendHttpRequest: (e, { payload: { id: s } }) => {
      e.waitings[s] = !0;
    },
    sendCurlRequest: (e, s) => {
    },
    showJsonPointer: (e, s) => {
    },
    showAuditReport: (e, s) => {
    }
  }
}), {
  startScan: le,
  scanOperation: pt,
  runScan: hn,
  showScanReport: ut,
  showFullScanReport: ft,
  showGeneralError: xt,
  showHttpError: gt,
  sendHttpRequest: mt,
  sendCurlRequest: he,
  showHttpResponse: vt,
  showJsonPointer: pe,
  showAuditReport: yt,
  changeTab: _,
  changeFilter: g
} = de.actions;
function te(e) {
  var n, i, r;
  const s = [];
  for (const [f, o] of Object.entries((e == null ? void 0 : e.operations) || {}))
    for (const d of [
      "conformanceRequestsResults",
      "authorizationRequestsResults",
      "customRequestsResults"
    ]) {
      const a = o[d], p = o.path, l = o.method.toLocaleLowerCase();
      for (const x of a || [])
        s.push({ ...x, path: p, method: l, operationId: f });
    }
  for (const f of Object.keys((e == null ? void 0 : e.methodNotAllowed) || {}))
    for (const o of ae) {
      const d = (r = (i = (n = e == null ? void 0 : e.methodNotAllowed) == null ? void 0 : n[f]) == null ? void 0 : i[o]) == null ? void 0 : r.conformanceRequestsResults;
      for (const a of d || [])
        s.push({ ...a, path: f });
    }
  return s;
}
function B(e, s) {
  const n = (a) => {
    var p;
    return (s == null ? void 0 : s.title) === void 0 || ((p = a.test) == null ? void 0 : p.key) === s.title;
  }, i = s.severity !== void 0 ? Ye.indexOf(s.severity) + 1 : 0, r = (a) => {
    var p, l;
    return s.severity === void 0 || ((p = a.outcome) == null ? void 0 : p.criticality) === void 0 || ((l = a.outcome) == null ? void 0 : l.criticality) >= i;
  }, f = (a) => (s == null ? void 0 : s.path) === void 0 || a.path === s.path, o = (a) => (s == null ? void 0 : s.method) === void 0 || a.method === s.method, d = (a) => (s == null ? void 0 : s.operationId) === void 0 || a.operationId === s.operationId;
  return e.filter((a) => n(a) && r(a) && f(a) && o(a) && d(a));
}
function P(e) {
  var o, d;
  const s = {}, n = {}, i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  for (const a of e) {
    const p = (o = a.test) == null ? void 0 : o.key;
    p !== void 0 && (s[p] === void 0 && (s[p] = [], n[p] = (d = a.test) == null ? void 0 : d.description), s[p].push(a)), i.add(a.path), a.operationId && r.add(a.operationId);
  }
  const f = Object.keys(s);
  for (const a of f)
    s[a].sort((p, l) => {
      var x, j, C, S, b, $, R, m, A, I;
      if (((x = p.outcome) == null ? void 0 : x.status) !== ((j = l.outcome) == null ? void 0 : j.status)) {
        if (((C = p.outcome) == null ? void 0 : C.status) === "error")
          return -1;
        if (((S = l.outcome) == null ? void 0 : S.status) === "error")
          return 1;
        if (((b = p.outcome) == null ? void 0 : b.status) === "defective")
          return -1;
        if ((($ = l.outcome) == null ? void 0 : $.status) === "defective")
          return 1;
      }
      return ((R = p.outcome) == null ? void 0 : R.criticality) !== ((m = l.outcome) == null ? void 0 : m.criticality) ? ((A = p.outcome) == null ? void 0 : A.criticality) - ((I = l.outcome) == null ? void 0 : I.criticality) : 0;
    });
  return {
    grouped: s,
    titles: Object.keys(n),
    paths: Array.from(i),
    operationIds: Array.from(r)
  };
}
const jt = de.reducer, bt = {
  messages: []
}, ue = re({
  name: "logging",
  initialState: bt,
  reducers: {
    showLogMessage: (e, s) => {
      e.messages.push(s.payload);
    },
    clearLogs: (e) => {
      e.messages = [];
    }
  }
}), { showLogMessage: wt, clearLogs: pn } = ue.actions, fe = oe, St = ue.reducer, Ct = {
  theme: Ee,
  scan: jt,
  router: Oe,
  env: Le,
  prefs: Ve,
  config: Xe,
  logging: St
}, Et = (e, s) => we({
  reducer: Ct,
  middleware: (n) => n().prepend(e.middleware).concat(Ce),
  preloadedState: {
    theme: s
  }
}), y = () => Se(), w = oe, xe = $e(), E = xe.startListening;
function Ot(e, s) {
  const n = {
    savePrefs: () => E({
      matcher: Ae(Qe, Ge),
      effect: async (i, r) => {
        const { prefs: f } = r.getState();
        e.postMessage({
          command: "savePrefs",
          payload: f
        });
      }
    }),
    sendHttpRequest: () => E({
      actionCreator: mt,
      effect: async (i, r) => {
        e.postMessage({
          command: "sendHttpRequest",
          payload: i.payload
        });
      }
    }),
    sendCurlRequest: () => E({
      actionCreator: he,
      effect: async (i, r) => {
        e.postMessage({
          command: "sendCurlRequest",
          payload: i.payload
        });
      }
    }),
    showJsonPointer: () => E({
      actionCreator: pe,
      effect: async (i, r) => {
        e.postMessage({
          command: "showJsonPointer",
          payload: i.payload
        });
      }
    }),
    showAuditReport: () => E({
      actionCreator: yt,
      effect: async (i, r) => {
        e.postMessage({
          command: "showAuditReport",
          payload: void 0
        });
      }
    }),
    showEnvWindow: () => E({
      actionCreator: Fe,
      effect: async (i, r) => {
        e.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return et(E, s), Re(n), xe;
}
function $t() {
  const s = fe((o) => o.logging.messages).filter((o) => !0), n = T.useRef(null), [i, r] = T.useState(!1);
  if (T.useEffect(() => {
    n.current && !i && (n.current.scrollTop = n.current.scrollHeight);
  }, [s, i]), s.length === 0)
    return null;
  const f = () => {
    const o = n.current;
    if (o) {
      const d = o.scrollTop, a = o.scrollHeight, p = o.clientHeight;
      a - (d + p) < 10 ? r(!1) : r(!0);
    }
  };
  return /* @__PURE__ */ t.jsx(Pt, { children: /* @__PURE__ */ t.jsx(At, { ref: n, onScroll: f, children: s.map((o, d, a) => /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx(Rt, { first: d === 0, last: d === a.length - 1 }),
    /* @__PURE__ */ t.jsx("div", { children: o.message })
  ] }, d)) }) });
}
function Rt({ first: e, last: s }) {
  return /* @__PURE__ */ t.jsxs(It, { first: e, last: s, children: [
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {})
  ] });
}
const At = h.div`
  color: var(${u.foreground});
  background-color: var(${u.background});
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
`, It = h.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ first: e }) => !e && `background-color: var(${u.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${u.border});
    border: 1px solid var(${u.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ last: e }) => !e && `background-color: var(${u.border});`}
  }
`, Pt = h.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${u.border});
`;
function kt() {
  const e = w((s) => s.scan.error);
  return e ? /* @__PURE__ */ t.jsx(qt, { children: /* @__PURE__ */ t.jsxs(Tt, { children: [
    /* @__PURE__ */ t.jsx("div", { children: e.message }),
    e.details && /* @__PURE__ */ t.jsx("div", { children: e.details })
  ] }) }) : null;
}
const Tt = h.div`
  border: 1px solid var(${u.errorBorder});
  color: var(${u.errorForeground});
  background-color: var(${u.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
  > div {
    font-family: monospace;
  }
`, qt = h.div`
  padding: 8px;
`;
function Ht() {
  const s = fe((n) => n.logging.messages).filter((n) => !0);
  return s.length === 0 ? null : /* @__PURE__ */ t.jsx(Mt, { children: s.map((n, i, r) => /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx(Nt, { first: i === 0, last: i === r.length - 1 }),
    /* @__PURE__ */ t.jsx("div", { children: n.message })
  ] }, i)) });
}
function Nt({ first: e, last: s }) {
  return /* @__PURE__ */ t.jsxs(_t, { first: e, last: s, children: [
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {})
  ] });
}
const Mt = h.div`
  color: var(${u.foreground});
  background-color: var(${u.background});
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
    ${({ first: e }) => !e && `background-color: var(${u.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${u.border});
    border: 1px solid var(${u.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ last: e }) => !e && `background-color: var(${u.border});`}
  }
`;
function Dt({
  global: e,
  issues: s,
  scanVersion: n
}) {
  const i = y(), r = s.filter(
    (o) => {
      var d, a;
      return ((d = o == null ? void 0 : o.outcome) == null ? void 0 : d.criticality) && ((a = o.outcome) == null ? void 0 : a.criticality) >= 1;
    }
  ).length, f = s.filter(
    (o) => {
      var d, a;
      return ((d = o == null ? void 0 : o.outcome) == null ? void 0 : d.criticality) && ((a = o.outcome) == null ? void 0 : a.criticality) >= 4;
    }
  ).length;
  return /* @__PURE__ */ t.jsxs(Lt, { children: [
    /* @__PURE__ */ t.jsxs(Bt, { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ t.jsx("b", { children: e.state }),
        " (Exit code: ",
        e.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ t.jsx("div", { children: H.fromISO(e.endDate).toLocaleString(H.DATETIME_MED) }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        "Execution time:",
        " ",
        H.fromISO(e.endDate).diff(H.fromISO(e.startDate)).toFormat("mm:ss.SSS")
      ] }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        "Scan version: ",
        n
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs(Ft, { children: [
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), i(_("tests")), i(g({}));
          },
          children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              s.length,
              " ",
              /* @__PURE__ */ t.jsx(F, {})
            ] }),
            /* @__PURE__ */ t.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), i(_("tests")), i(g({ severity: "low" }));
          },
          children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              r,
              " ",
              /* @__PURE__ */ t.jsx(F, {})
            ] }),
            /* @__PURE__ */ t.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), i(_("tests")), i(g({ severity: "high" }));
          },
          children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              f,
              " ",
              /* @__PURE__ */ t.jsx(F, {})
            ] }),
            /* @__PURE__ */ t.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const Lt = h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Ft = h.div`
  display: flex;
  gap: 8px;
  & > div {
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    border: 1px solid var(${u.border});
  }
`, Bt = h.div`
  display: flex;
  border: 1px solid var(${u.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${u.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function ge({
  curl: e,
  id: s,
  waiting: n
}) {
  const i = y();
  return /* @__PURE__ */ t.jsx(Ut, { children: /* @__PURE__ */ t.jsxs(Yt, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
    /* @__PURE__ */ t.jsx(rt, { children: /* @__PURE__ */ t.jsxs(ot, { children: [
      /* @__PURE__ */ t.jsx(at, { asChild: !0, children: /* @__PURE__ */ t.jsx("span", { children: /* @__PURE__ */ t.jsx(
        Ke,
        {
          onClick: (r) => {
            r.preventDefault(), r.stopPropagation(), i(he(e));
          }
        }
      ) }) }),
      /* @__PURE__ */ t.jsx(ct, { children: /* @__PURE__ */ t.jsxs(Kt, { sideOffset: 5, children: [
        "Copy cURL command to the clipboard",
        /* @__PURE__ */ t.jsx(zt, {})
      ] }) })
    ] }) }),
    e
  ] }) });
}
const Ut = h.div``, Yt = h.div`
  & > span {
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 6px;
    & > svg {
      fill: var(${u.foreground});
    }
  }
  padding: 4px;
  padding-right: 24px;
  position: relative;
  font-family: monospace;
  background-color: var(${u.computedOne});
`, Kt = h(nt)`
  color: var(${u.notificationsForeground});
  background-color: var(${u.notificationsBackground});
  border: 1px solid var(${u.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, zt = h(it)`
  fill: var(${u.notificationsForeground});
`;
function c(e) {
  e === void 0 || this.initialize(e), this.maxHeaderSize = c.maxHeaderSize;
}
c.prototype.initialize = function(e, s) {
  this.type = e, this.state = e + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
c.encoding = "ascii";
c.maxHeaderSize = 80 * 1024;
c.REQUEST = "REQUEST";
c.RESPONSE = "RESPONSE";
var me = c.kOnHeaders = 1, U = c.kOnHeadersComplete = 2, D = c.kOnBody = 3, Y = c.kOnMessageComplete = 4;
c.prototype[me] = c.prototype[U] = c.prototype[D] = c.prototype[Y] = function() {
};
var ve = !0;
Object.defineProperty(c, "kOnExecute", {
  get: function() {
    return ve = !1, 99;
  }
});
var ye = c.methods = [
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
], je = ye.indexOf("CONNECT");
c.prototype.reinitialize = c;
c.prototype.close = c.prototype.pause = c.prototype.resume = c.prototype.free = function() {
};
c.prototype._compatMode0_11 = !1;
c.prototype.getAsyncId = function() {
  return 0;
};
var Wt = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
c.prototype.execute = function(e, s, n) {
  if (!(this instanceof c))
    throw new TypeError("not a HTTPParser");
  s = s || 0, n = typeof n == "number" ? n : e.length, this.chunk = e, this.offset = s;
  var i = this.end = s + n;
  try {
    for (; this.offset < i && !this[this.state](); )
      ;
  } catch (r) {
    if (this.isUserCall)
      throw r;
    return this.hadError = !0, r;
  }
  return this.chunk = null, n = this.offset - s, Wt[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || c.maxHeaderSize)) ? new Error("max header size exceeded") : n;
};
var Vt = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
c.prototype.finish = function() {
  if (!this.hadError) {
    if (!Vt[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[Y]());
  }
};
c.prototype.consume = c.prototype.unconsume = c.prototype.getCurrentBuffer = function() {
};
c.prototype.userCall = function() {
  this.isUserCall = !0;
  var e = this;
  return function(s) {
    return e.isUserCall = !1, s;
  };
};
c.prototype.nextRequest = function() {
  this.userCall()(this[Y]()), this.reinitialize(this.type);
};
c.prototype.consumeLine = function() {
  for (var e = this.end, s = this.chunk, n = this.offset; n < e; n++)
    if (s[n] === 10) {
      var i = this.line + s.toString(c.encoding, this.offset, n);
      return i.charAt(i.length - 1) === "\r" && (i = i.substr(0, i.length - 1)), this.line = "", this.offset = n + 1, i;
    }
  this.line += s.toString(c.encoding, this.offset, this.end), this.offset = this.end;
};
var Gt = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Qt = /^[ \t]+(.*[^ \t])/;
c.prototype.parseHeader = function(e, s) {
  if (e.indexOf("\r") !== -1)
    throw L("HPE_LF_EXPECTED");
  var n = Gt.exec(e), i = n && n[1];
  if (i)
    s.push(i), s.push(n[2]);
  else {
    var r = Qt.exec(e);
    r && s.length && (s[s.length - 1] && (s[s.length - 1] += " "), s[s.length - 1] += r[1]);
  }
};
var Jt = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
c.prototype.REQUEST_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var s = Jt.exec(e);
    if (s === null)
      throw L("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? s[1] : ye.indexOf(s[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = s[2], this.info.versionMajor = +s[3], this.info.versionMinor = +s[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var Xt = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
c.prototype.RESPONSE_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var s = Xt.exec(e);
    if (s === null)
      throw L("HPE_INVALID_CONSTANT");
    this.info.versionMajor = +s[1], this.info.versionMinor = +s[2];
    var n = this.info.statusCode = +s[3];
    this.info.statusMessage = s[4], ((n / 100 | 0) === 1 || n === 204 || n === 304) && (this.body_bytes = 0), this.state = "HEADER";
  }
};
c.prototype.shouldKeepAlive = function() {
  if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {
    if (this.connection.indexOf("close") !== -1)
      return !1;
  } else if (this.connection.indexOf("keep-alive") === -1)
    return !1;
  return !!(this.body_bytes !== null || this.isChunked);
};
c.prototype.HEADER = function() {
  var e = this.consumeLine();
  if (e !== void 0) {
    var s = this.info;
    if (e)
      this.parseHeader(e, s.headers);
    else {
      for (var n = s.headers, i = !1, r, f = !1, o = 0; o < n.length; o += 2)
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
            f = !0;
            break;
        }
      this.isChunked && i && (i = !1, this.body_bytes = null), f && this.connection.indexOf("upgrade") != -1 ? s.upgrade = this.type === c.REQUEST || s.statusCode === 101 : s.upgrade = s.method === je, this.isChunked && s.upgrade && (this.isChunked = !1), s.shouldKeepAlive = this.shouldKeepAlive();
      var d;
      if (ve ? d = this.userCall()(this[U](s)) : d = this.userCall()(this[U](
        s.versionMajor,
        s.versionMinor,
        s.headers,
        s.method,
        s.url,
        s.statusCode,
        s.statusMessage,
        s.upgrade,
        s.shouldKeepAlive
      )), d === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !d)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (d || this.body_bytes === 0)
          return this.nextRequest(), s.upgrade;
        this.body_bytes === null ? this.state = "BODY_RAW" : this.state = "BODY_SIZED";
      }
    }
  }
};
c.prototype.BODY_CHUNKHEAD = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.body_bytes = parseInt(e, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
c.prototype.BODY_CHUNK = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[D](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
c.prototype.BODY_CHUNKEMPTYLINE = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
c.prototype.BODY_CHUNKTRAILERS = function() {
  var e = this.consumeLine();
  e !== void 0 && (e ? this.parseHeader(e, this.trailers) : (this.trailers.length && this.userCall()(this[me](this.trailers, "")), this.nextRequest()));
};
c.prototype.BODY_RAW = function() {
  var e = this.end - this.offset;
  this.userCall()(this[D](this.chunk, this.offset, e)), this.offset = this.end;
};
c.prototype.BODY_SIZED = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[D](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(e) {
  var s = c["kOn" + e];
  Object.defineProperty(c.prototype, "on" + e, {
    get: function() {
      return this[s];
    },
    set: function(n) {
      return this._compatMode0_11 = !0, je = "CONNECT", this[s] = n;
    }
  });
});
function L(e) {
  var s = new Error("Parse Error");
  return s.code = e, s;
}
function be(e) {
  if (e === void 0)
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  try {
    return Zt(Be.Buffer.from(e, "base64"));
  } catch {
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  }
}
function Zt(e) {
  const s = new c(c.RESPONSE);
  let n = !1, i = 0, r, f, o = [], d = [];
  if (s[c.kOnHeadersComplete] = function(l) {
    l.shouldKeepAlive, l.upgrade, i = l.statusCode, l.statusMessage, r = l.versionMajor, f = l.versionMinor, o = l.headers;
  }, s[c.kOnBody] = function(l, x, j) {
    d.push(l.slice(x, x + j));
  }, s[c.kOnHeaders] = function(l) {
  }, s[c.kOnMessageComplete] = function() {
    n = !0;
  }, s.execute(e), s.finish(), !n)
    throw new Error("Could not parse");
  let a = d.join("");
  const p = [];
  for (let l = 0; l < o.length - 1; l++)
    l % 2 === 0 && p.push([o[l], o[l + 1]]);
  return {
    headers: p,
    statusCode: i,
    httpVersion: `${r}.${f}`,
    body: a
  };
}
function es({
  issue: e,
  httpResponse: s,
  error: n,
  id: i,
  waiting: r
}) {
  var A, I, K, z, W, V, G, Q, J, X, Z;
  const f = y(), [o, d] = T.useState(!0), { request: a, response: p, test: l, outcome: x } = e, j = (x == null ? void 0 : x.status) === "correct", C = x == null ? void 0 : x.conformant, S = !(j && C);
  let b = "N/A", $ = "N/A";
  const R = ((I = (A = x == null ? void 0 : x.apiResponseAnalysis) == null ? void 0 : A[0]) == null ? void 0 : I.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  R === "Yes" && (b = ((z = (K = x == null ? void 0 : x.apiResponseAnalysis) == null ? void 0 : K[0]) == null ? void 0 : z.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), b === "Yes" && ($ = ((V = (W = x == null ? void 0 : x.apiResponseAnalysis) == null ? void 0 : W[0]) == null ? void 0 : V.responseKey) === "response-body-badformat-scan" ? "No" : "Yes");
  const m = x == null ? void 0 : x.error;
  return /* @__PURE__ */ t.jsxs(ts, { children: [
    /* @__PURE__ */ t.jsxs(ss, { collapsed: o, onClick: () => d(!o), children: [
      /* @__PURE__ */ t.jsx("div", { children: o ? /* @__PURE__ */ t.jsx(tt, {}) : /* @__PURE__ */ t.jsx(st, {}) }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx(ns, { children: l == null ? void 0 : l.description }),
        /* @__PURE__ */ t.jsxs(is, { children: [
          m && /* @__PURE__ */ t.jsxs(k, { children: [
            /* @__PURE__ */ t.jsx(N, {}),
            " Error: ",
            m
          ] }),
          !m && S && /* @__PURE__ */ t.jsxs(k, { children: [
            /* @__PURE__ */ t.jsx(N, {}),
            " Failed",
            x.criticality > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              "/",
              /* @__PURE__ */ t.jsxs("span", { style: { fontWeight: as[x.criticality] }, children: [
                " ",
                os[x.criticality]
              ] })
            ] })
          ] }),
          !m && !S && /* @__PURE__ */ t.jsxs(k, { children: [
            /* @__PURE__ */ t.jsx(M, {}),
            " Passed"
          ] }),
          !m && S && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(k, { children: j ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(M, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(N, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ t.jsx(k, { children: C ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(M, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(N, {}),
              " Conforms to Contract: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !o && /* @__PURE__ */ t.jsxs(rs, { children: [
      m && /* @__PURE__ */ t.jsxs(v, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Error" }),
        /* @__PURE__ */ t.jsx("div", { children: m })
      ] }),
      !m && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsxs(v, { children: [
          /* @__PURE__ */ t.jsx("div", { children: "HTTP code received" }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            p == null ? void 0 : p.httpStatusCode,
            " (Expected: ",
            (G = l == null ? void 0 : l.httpStatusExpected) == null ? void 0 : G.join(", "),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs(v, { children: [
          /* @__PURE__ */ t.jsx("div", { children: "Response code found in API Contract" }),
          /* @__PURE__ */ t.jsx("div", { children: R })
        ] }),
        /* @__PURE__ */ t.jsxs(v, { children: [
          /* @__PURE__ */ t.jsx("div", { children: "Content-Type found in API Contract" }),
          /* @__PURE__ */ t.jsx("div", { children: b })
        ] }),
        /* @__PURE__ */ t.jsxs(v, { children: [
          /* @__PURE__ */ t.jsx("div", { children: "Response matches API Contract" }),
          /* @__PURE__ */ t.jsx("div", { children: $ })
        ] }),
        ((J = (Q = x == null ? void 0 : x.apiResponseAnalysis) == null ? void 0 : Q[0]) == null ? void 0 : J.responseDescription) && /* @__PURE__ */ t.jsxs(v, { children: [
          /* @__PURE__ */ t.jsx("div", { children: "Response analysis" }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            " ",
            (Z = (X = x == null ? void 0 : x.apiResponseAnalysis) == null ? void 0 : X[0]) == null ? void 0 : Z.responseDescription
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs(v, { children: [
          /* @__PURE__ */ t.jsx("div", { children: "JSON Pointer" }),
          /* @__PURE__ */ t.jsx("div", { children: l != null && l.jsonPointer ? /* @__PURE__ */ t.jsx(
            "a",
            {
              href: "#",
              onClick: (ee) => {
                ee.preventDefault(), ee.stopPropagation(), f(
                  pe((l == null ? void 0 : l.jsonPointer) + "")
                  // FIXME support indexed reports
                );
              },
              children: l == null ? void 0 : l.jsonPointer
            }
          ) : "N/A" })
        ] }),
        (a == null ? void 0 : a.curl) && /* @__PURE__ */ t.jsxs(v, { children: [
          /* @__PURE__ */ t.jsx("div", { children: "Request" }),
          /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(ge, { waiting: r, curl: a.curl, id: i }) })
        ] }),
        n === void 0 && (s !== void 0 || (p == null ? void 0 : p.rawPayload) !== void 0) && /* @__PURE__ */ t.jsxs(v, { children: [
          /* @__PURE__ */ t.jsx("div", { children: "Response" }),
          /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(
            ce,
            {
              accented: !0,
              response: s || be(p == null ? void 0 : p.rawPayload)
            }
          ) })
        ] }),
        n && /* @__PURE__ */ t.jsxs(v, { children: [
          /* @__PURE__ */ t.jsx("div", { children: "Error" }),
          /* @__PURE__ */ t.jsx("div", { children: n == null ? void 0 : n.message })
        ] })
      ] })
    ] })
  ] });
}
const ts = h.div`
  margin: 8px;
  border: 1px solid var(${u.border});
`, ss = h.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${u.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${u.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ collapsed: e }) => !e && `border-bottom: 1px solid var(${u.border});
    border-left: 5px solid var(${u.badgeBackground});`}
`, ns = h.div`
  font-weight: 600;
`, is = h.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, k = h.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${u.foreground});
  }
`, rs = h.div`
  background-color: var(${u.computedOne});
`, v = h.div`
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
`, os = {
  0: "None",
  1: "Info",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Critical"
}, as = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700,
  5: 700
};
function cs({
  filters: e,
  onClick: s
}) {
  return /* @__PURE__ */ t.jsx(
    ds,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), s();
      },
      children: /* @__PURE__ */ t.jsxs(hs, { children: [
        /* @__PURE__ */ t.jsx(ze, {}),
        e !== 0 && /* @__PURE__ */ t.jsx(ls, { children: e })
      ] })
    }
  );
}
const ds = h.div`
  width: 34px;
  height: 26px;
  position: relative;
`, ls = h.div`
  position: absolute;
  left: 18px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${u.buttonForeground});
  background-color: var(${u.buttonBackground});
  font-size: 12px;
`, hs = h.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${u.buttonForeground});
  border: none;
  ${({ waiting: e }) => e && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${u.foreground});
  }
`;
function ps() {
  const e = y();
  return /* @__PURE__ */ t.jsxs(
    us,
    {
      onClick: (s) => {
        e(g({})), s.preventDefault(), s.stopPropagation();
      },
      children: [
        /* @__PURE__ */ t.jsx(We, {}),
        " ",
        /* @__PURE__ */ t.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const us = h.div`
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
function fs() {
  const e = w((i) => i.scan.filter), s = y(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ t.jsx(xs, { children: /* @__PURE__ */ t.jsx(
    q,
    {
      label: "Severity",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (i) => {
        i && i.value !== "all" ? s(g({ ...e, severity: i == null ? void 0 : i.value })) : s(g({ ...e, severity: void 0 }));
      },
      selected: (e == null ? void 0 : e.severity) || "all"
    }
  ) });
}
const xs = h.div`
  width: 264px;
`;
function gs() {
  const { filter: e, titles: s } = w((r) => r.scan), n = y(), i = [];
  for (const r of s)
    se[r] && i.push({ label: se[r], value: r });
  return /* @__PURE__ */ t.jsx(ms, { children: /* @__PURE__ */ t.jsx(
    q,
    {
      label: "Type",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? n(g({ ...e, title: r.value })) : n(g({ ...e, title: void 0 }));
      },
      selected: e.title || "all"
    }
  ) });
}
const ms = h.div`
  width: 264px;
`, se = {
  "path-item-method-not-allowed-scan": "Scan sends a request using an undefined verb",
  "parameter-required-scan": "Scan sends a request that is missing a required parameter",
  "parameter-header-contenttype-wrong-scan": "Scan sends a request with wrong content type",
  "schema-multipleof-scan": "Scan sends a request containing a numeric value conflicting with multipleOf",
  "schema-maximum-scan": "Scan sends a request containing a numeric value overflowing maximum",
  "schema-minimum-scan": "Scan sends a request containing a numeric value under the minimum",
  "schema-minlength-scan": "Scan sends a request containing a string value that is too short",
  "schema-maxlength-scan": "Scan sends a request containing a string value that is too long",
  "schema-pattern-scan": "Scan sends a request containing a string value with wrong pattern",
  "schema-maxitems-scan": "Scan sends a request containing an array with too many items",
  "schema-minitems-scan": "Scan sends a request containing an array with too few items",
  "schema-uniqueitems-unique-scan": "Scan sends a request containing an array value that conflicts with ‘uniqueItems’",
  "schema-required-scan": "Scan sends a request that is missing a required property",
  "schema-enum-scan": "Scan sends a request containing a value not present in the constraining enum",
  "schema-additionalproperties-scan": "Scan sends a request that contains an undefined property",
  "schema-format-scan": "Scan sends a request containing a string value with wrong format",
  "schema-type-wrong-string-scan": "Scan sends a request containing a string value instead of the expected type",
  "schema-type-wrong-bool-scan": "Scan sends a request containing a Boolean value instead of the expected type",
  "schema-type-wrong-integer-scan": "Scan sends a request containing an integer value instead of the expected type",
  "schema-type-wrong-number-scan": "Scan sends a request containing a number value instead of the expected type",
  "schema-type-wrong-array-scan": "Scan sends a request containing an array instead of the expected type",
  "schema-type-wrong-object-scan": "Scan sends a request containing an object instead of the expected type"
};
function vs() {
  const { filter: e, paths: s } = w((r) => r.scan), n = y(), i = s.map((r) => ({ label: r, value: r }));
  return /* @__PURE__ */ t.jsx(ys, { children: /* @__PURE__ */ t.jsx(
    q,
    {
      label: "Path",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? n(
          g({ ...e, path: r.value, operationId: void 0 })
        ) : n(g({ ...e, path: void 0, operationId: void 0 }));
      },
      selected: e.path || "all"
    }
  ) });
}
const ys = h.div`
  width: 264px;
`;
function js() {
  const { filter: e, operationIds: s } = w((r) => r.scan), n = y(), i = s.map((r) => ({ label: r, value: r }));
  return /* @__PURE__ */ t.jsx(bs, { children: /* @__PURE__ */ t.jsx(
    q,
    {
      label: "Operation ID",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? n(g({ ...e, operationId: r.value })) : n(g({ ...e, operationId: void 0 }));
      },
      selected: e.operationId || "all"
    }
  ) });
}
const bs = h.div`
  width: 264px;
`;
function ws() {
  const { filter: e } = w((i) => i.scan), s = y(), n = ae.map((i) => ({ value: i, label: i.toUpperCase() }));
  return /* @__PURE__ */ t.jsx(Ss, { children: /* @__PURE__ */ t.jsx(
    q,
    {
      label: "Method",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (i) => {
        i && i.value !== "all" ? s(
          g({ ...e, method: i.value, operationId: void 0 })
        ) : s(g({ ...e, method: void 0, operationId: void 0 }));
      },
      selected: e.method || "all"
    }
  ) });
}
const Ss = h.div`
  width: 264px;
`;
function Cs() {
  const { filter: e, grouped: s } = w((d) => d.scan), [n, i] = T.useState(!0), f = ["severity", "title"].filter((d) => e && e[d] !== void 0).length, o = Object.keys(s).map((d) => s[d].length).reduce((d, a) => d + a, 0);
  return /* @__PURE__ */ t.jsxs(Es, { children: [
    /* @__PURE__ */ t.jsxs(Os, { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        o,
        " issues"
      ] }),
      /* @__PURE__ */ t.jsx(cs, { filters: f, onClick: () => i(!n) })
    ] }),
    !n && /* @__PURE__ */ t.jsxs($s, { children: [
      /* @__PURE__ */ t.jsx(fs, {}),
      /* @__PURE__ */ t.jsx(gs, {}),
      /* @__PURE__ */ t.jsx(vs, {}),
      /* @__PURE__ */ t.jsx(ws, {}),
      /* @__PURE__ */ t.jsx(js, {}),
      /* @__PURE__ */ t.jsx(ps, {})
    ] })
  ] });
}
const Es = h.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, Os = h.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, $s = h.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function Rs({
  issues: e,
  responses: s,
  errors: n,
  waitings: i,
  grouped: r
}) {
  return e.length === 0 ? /* @__PURE__ */ t.jsx(ne, { children: /* @__PURE__ */ t.jsx(As, { children: "No test results available" }) }) : /* @__PURE__ */ t.jsxs(ne, { children: [
    /* @__PURE__ */ t.jsx(Cs, {}),
    Object.keys(r).map((f) => /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx(Is, { children: Ps[f] ?? "Unknown test type" }),
      r[f].map((o, d) => {
        const a = `${f}-${d}`;
        return /* @__PURE__ */ t.jsx(
          es,
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
    ] }, f))
  ] });
}
const ne = h.div`
  margin-top: 8px;
`, As = h.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${u.border});
`, Is = h.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, Ps = {
  "authentication-swapping-bfla": "Broken Function Level Access test performed by swapping user credentials",
  "authentication-swapping-bola": "Broken Object Access Level Authorization test performed swapping user credentials.",
  "custom-request": "Custom client request",
  "parameter-header-contenttype-wrong-scan": "Scan sends a request where the request body does not match the 'Content-Type' specified in the header.",
  "parameter-required-scan": "Scan sends a request that is missing a parameter that has been defined as required in the OpenAPI definition.",
  "partial-security-accepted": "Scan sends a request where a required security requirement is missing",
  "path-item-method-not-allowed-scan": "Scan sends a request using a verb (method) that is not defined for the path in the OpenAPI definition.",
  "schema-additionalproperties-scan": "Scan sends a request that contains an undefined property.",
  "schema-enum-scan": "API accepts a value that is not specified in the enum array",
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
function ks({ operation: e }) {
  var d, a;
  const { request: s, response: n, outcome: i, happyPath: r } = (d = e.scenarios) == null ? void 0 : d[0];
  let f = "N/A";
  const o = (i == null ? void 0 : i.status) === "correct" ? "Yes" : "No";
  return o === "Yes" && (f = i != null && i.conformant ? "Yes" : "No"), /* @__PURE__ */ t.jsxs(Ts, { children: [
    /* @__PURE__ */ t.jsxs(O, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        n == null ? void 0 : n.httpStatusCode,
        " (Expected: ",
        (a = r == null ? void 0 : r.httpStatusExpected) == null ? void 0 : a.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs(O, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ t.jsx("div", { children: o })
    ] }),
    /* @__PURE__ */ t.jsxs(O, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ t.jsx("div", { children: f })
    ] }),
    (s == null ? void 0 : s.curl) && /* @__PURE__ */ t.jsxs(O, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Request" }),
      /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(ge, { curl: s == null ? void 0 : s.curl, id: "happy-path", waiting: !1 }) })
    ] }),
    (n == null ? void 0 : n.rawPayload) && /* @__PURE__ */ t.jsxs(O, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Response" }),
      /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(ce, { accented: !0, response: be(n.rawPayload) }) })
    ] }),
    (i == null ? void 0 : i.error) && /* @__PURE__ */ t.jsxs(O, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Error" }),
      /* @__PURE__ */ t.jsx("div", { children: i == null ? void 0 : i.error })
    ] })
  ] });
}
const Ts = h.div`
  margin: 8px;
  border: 1px solid var(${u.border});
`, O = h.div`
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
function qs({
  operation: e,
  operationId: s,
  defaultCollapsed: n
}) {
  return /* @__PURE__ */ t.jsx(Hs, { children: /* @__PURE__ */ t.jsxs(lt, { defaultCollapsed: n, children: [
    /* @__PURE__ */ t.jsxs(Ns, { children: [
      /* @__PURE__ */ t.jsx("span", { children: s }),
      /* @__PURE__ */ t.jsx("span", { children: e.fuzzed ? "Passed" : "Failed" })
    ] }),
    /* @__PURE__ */ t.jsxs(Ms, { children: [
      /* @__PURE__ */ t.jsx(_s, { children: e.method }),
      /* @__PURE__ */ t.jsx(Ds, { children: e.path }),
      e.fuzzed ? /* @__PURE__ */ t.jsx(M, {}) : /* @__PURE__ */ t.jsx(Ie, {})
    ] }),
    /* @__PURE__ */ t.jsx(ks, { operation: e })
  ] }) });
}
const Hs = h.div`
  background-color: var(${u.computedOne});
`, Ns = h.div`
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
`, Ms = h.div`
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
  > svg {
    margin-left: auto;
    margin-right: 2px;
    width: 14px;
    height: 14px;
    fill: var(${u.foreground});
  }
`, _s = h.div`
  background-color: var(${u.badgeBackground});
  color: var(${u.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, Ds = h.div`
  line-break: anywhere;
`;
function Ls() {
  const e = y(), { scanReport: s, operations: n, responses: i, errors: r, waitings: f, tab: o, issues: d, grouped: a } = w((l) => l.scan);
  if (s === void 0)
    return /* @__PURE__ */ t.jsx(Fs, { children: /* @__PURE__ */ t.jsx(Us, { children: "Report is not yet available" }) });
  const p = Object.entries(n);
  return /* @__PURE__ */ t.jsx(
    dt,
    {
      activeTab: o,
      setActiveTab: (l) => e(_(l)),
      tabs: [
        {
          id: "summary",
          title: "Summary",
          content: /* @__PURE__ */ t.jsxs(Bs, { children: [
            /* @__PURE__ */ t.jsx(
              Dt,
              {
                issues: d,
                global: s.summary,
                scanVersion: s.scanVersion
              }
            ),
            /* @__PURE__ */ t.jsx("div", { style: { fontWeight: 600, margin: "8px" }, children: "Happy Path Testing results" }),
            p.map(([l, x]) => /* @__PURE__ */ t.jsx(
              qs,
              {
                defaultCollapsed: p.length > 1,
                operationId: l,
                operation: x
              },
              l
            ))
          ] })
        },
        {
          id: "tests",
          title: "Tests",
          content: /* @__PURE__ */ t.jsx(
            Rs,
            {
              issues: d,
              grouped: a,
              responses: i,
              errors: r,
              waitings: f
            }
          )
        },
        { id: "logs", title: "Logs", content: /* @__PURE__ */ t.jsx(Ht, {}) }
      ]
    }
  );
}
const Fs = h.div``, Bs = h.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Us = h.div`
  margin: 1em;
  padding: 10px;
`;
function Ys() {
  const { scanReport: e, waiting: s, error: n } = w((i) => i.scan);
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    e && /* @__PURE__ */ t.jsx(Ls, {}),
    /* @__PURE__ */ t.jsx(kt, {}),
    (s || n) && /* @__PURE__ */ t.jsx($t, {})
  ] });
}
const ie = [
  // {
  //   id: "start-scan",
  //   title: "Scan is starting",
  //   element: <Starting />,
  //   when: startScan,
  // },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ t.jsx(Ys, {}),
    when: le
  }
], Ks = {
  changeTheme: _e,
  startScan: le,
  scanOperation: pt,
  showGeneralError: xt,
  showHttpError: gt,
  showHttpResponse: vt,
  showScanReport: ut,
  showFullScanReport: ft,
  loadEnv: Ue,
  loadPrefs: Je,
  loadConfig: Ze,
  showLogMessage: wt
};
function zs() {
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Ne, {}),
    /* @__PURE__ */ t.jsx(Me, {})
  ] });
}
function Ws(e, s) {
  const n = Et(Ot(e, ie), s);
  Pe(document.getElementById("root")).render(
    /* @__PURE__ */ t.jsx(ke.StrictMode, { children: /* @__PURE__ */ t.jsx(Te, { store: n, children: /* @__PURE__ */ t.jsx(qe.Provider, { value: ie, children: /* @__PURE__ */ t.jsx(zs, {}) }) }) })
  ), window.addEventListener("message", He(n, Ks));
}
window.renderWebView = Ws;
