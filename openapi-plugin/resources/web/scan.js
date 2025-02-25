import { c as ne, b as ie, a as be, u as Se, t as we, r as Ce, d as Ee, s as Oe, i as Ae, q as h, T as x, e as N, j as e, f as Pe, R as Re, P as Ie, g as ke, m as qe, h as Te, k as $e, l as Ne } from "./webapp.CeAUXIIl.js";
import { l as He, S as De } from "./TriangleExclamation.CgvJ-nl0.js";
import { g as Me, H as re, e as _e, s as Le, b as Fe, l as Be } from "./slice.DaiskKY_.js";
import { S as Ue, e as Ye, b as ze, c as Ke } from "./Xmark.CFuLPsAP.js";
import { p as We, s as Ve, a as Ge, S as B, l as Qe } from "./index.BiHYBvgH.js";
import { c as Je, l as Xe } from "./index.CVo6ZNUd.js";
import { s as Ze } from "./listener.-cV7RRVl.js";
import { D as M } from "./datetime.DlW1FQ29.js";
import { S as et } from "./AngleDown.Cf8-HIFo.js";
import { S as tt } from "./AngleUp.4zhx5nPt.js";
import { S as $ } from "./Check.CWJARxxg.js";
import { S as q } from "./ExclamationCircle.BBSMtR_9.js";
import { C as st, A as nt, P as it, R as rt, T as ot, a as at } from "./index.9ZOXign7.js";
import { R as oe } from "./Response.MaR7wJ40.js";
import { P as H } from "./Select.DwYaPwwt.js";
import { T as ct } from "./Tabs.ao5WcNUe.js";
import { C as dt } from "./CollapsibleCard.sDBLV0pi.js";
const lt = {
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
}, ae = ne({
  name: "scan",
  initialState: lt,
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
      const { oas: n, path: i, method: r, report: f } = s.payload, o = Me(n, i, r), c = (o == null ? void 0 : o.operationId) === void 0 ? `${i}:${r}` : o.operationId, a = (w = f.operations) == null ? void 0 : w[c];
      a && (t.operations[c] = a);
      const p = Z(f), l = U(p, t.filter), { titles: u, paths: v, operationIds: b } = T(p), { grouped: m } = T(l);
      t.issues = p, t.titles = u, t.paths = v, t.operationIds = b, t.grouped = m, t.oas = n, t.scanReport = f, t.waiting = !1;
    },
    showFullScanReport: (t, s) => {
      const { oas: n, report: i } = s.payload, r = Z(i), f = U(r, t.filter), { titles: o, paths: c, operationIds: a } = T(r), { grouped: p } = T(f);
      t.oas = n, t.operations = { ...i.operations || {} }, t.issues = r, t.titles = o, t.paths = c, t.operationIds = a, t.grouped = p, t.scanReport = i, t.waiting = !1;
    },
    changeFilter: (t, s) => {
      t.filter = s.payload;
      const n = U(t.issues, t.filter), { grouped: i } = T(n);
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
    }
  }
}), {
  startScan: ce,
  scanOperation: ht,
  runScan: hn,
  showScanReport: pt,
  showFullScanReport: ut,
  showGeneralError: ft,
  showHttpError: xt,
  sendHttpRequest: gt,
  sendCurlRequest: de,
  showHttpResponse: vt,
  showJsonPointer: le,
  changeTab: _,
  changeFilter: g
} = ae.actions;
function Z(t) {
  var n, i, r;
  const s = [];
  for (const [f, o] of Object.entries((t == null ? void 0 : t.operations) || {}))
    for (const c of [
      "conformanceRequestsResults",
      "authorizationRequestsResults",
      "customRequestsResults"
    ]) {
      const a = o[c], p = o.path, l = o.method.toLocaleLowerCase();
      for (const u of a || [])
        s.push({ ...u, path: p, method: l, operationId: f });
    }
  for (const f of Object.keys((t == null ? void 0 : t.methodNotAllowed) || {}))
    for (const o of re) {
      const c = (r = (i = (n = t == null ? void 0 : t.methodNotAllowed) == null ? void 0 : n[f]) == null ? void 0 : i[o]) == null ? void 0 : r.conformanceRequestsResults;
      for (const a of c || [])
        s.push({ ...a, path: f });
    }
  return s;
}
function U(t, s) {
  const n = (a) => {
    var p;
    return (s == null ? void 0 : s.title) === void 0 || ((p = a.test) == null ? void 0 : p.key) === s.title;
  }, i = s.severity !== void 0 ? Ue.indexOf(s.severity) + 1 : 0, r = (a) => {
    var p, l;
    return s.severity === void 0 || ((p = a.outcome) == null ? void 0 : p.criticality) === void 0 || ((l = a.outcome) == null ? void 0 : l.criticality) >= i;
  }, f = (a) => (s == null ? void 0 : s.path) === void 0 || a.path === s.path, o = (a) => (s == null ? void 0 : s.method) === void 0 || a.method === s.method, c = (a) => (s == null ? void 0 : s.operationId) === void 0 || a.operationId === s.operationId;
  return t.filter((a) => n(a) && r(a) && f(a) && o(a) && c(a));
}
function T(t) {
  var o, c;
  const s = {}, n = {}, i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  for (const a of t) {
    const p = (o = a.test) == null ? void 0 : o.key;
    p !== void 0 && (s[p] === void 0 && (s[p] = [], n[p] = (c = a.test) == null ? void 0 : c.description), s[p].push(a)), i.add(a.path), a.operationId && r.add(a.operationId);
  }
  const f = Object.keys(s);
  for (const a of f)
    s[a].sort((p, l) => {
      var u, v, b, m, w, R, E, O, I, k;
      if (((u = p.outcome) == null ? void 0 : u.status) !== ((v = l.outcome) == null ? void 0 : v.status)) {
        if (((b = p.outcome) == null ? void 0 : b.status) === "error")
          return -1;
        if (((m = l.outcome) == null ? void 0 : m.status) === "error")
          return 1;
        if (((w = p.outcome) == null ? void 0 : w.status) === "defective")
          return -1;
        if (((R = l.outcome) == null ? void 0 : R.status) === "defective")
          return 1;
      }
      return ((E = p.outcome) == null ? void 0 : E.criticality) !== ((O = l.outcome) == null ? void 0 : O.criticality) ? ((I = p.outcome) == null ? void 0 : I.criticality) - ((k = l.outcome) == null ? void 0 : k.criticality) : 0;
    });
  return {
    grouped: s,
    titles: Object.keys(n),
    paths: Array.from(i),
    operationIds: Array.from(r)
  };
}
const mt = ae.reducer, yt = {
  messages: []
}, he = ne({
  name: "logging",
  initialState: yt,
  reducers: {
    showLogMessage: (t, s) => {
      t.messages.push(s.payload);
    },
    clearLogs: (t) => {
      t.messages = [];
    }
  }
}), { showLogMessage: jt, clearLogs: pn } = he.actions, pe = ie, bt = he.reducer, St = {
  theme: we,
  scan: mt,
  router: Ce,
  env: _e,
  prefs: We,
  config: Je,
  logging: bt
}, wt = (t, s) => be({
  reducer: St,
  middleware: (n) => n().prepend(t.middleware).concat(He),
  preloadedState: {
    theme: s
  }
}), j = () => Se(), S = ie, ue = Ee(), A = ue.startListening;
function Ct(t, s) {
  const n = {
    savePrefs: () => A({
      matcher: Ae(Ge, Ve),
      effect: async (i, r) => {
        const { prefs: f } = r.getState();
        t.postMessage({
          command: "savePrefs",
          payload: f
        });
      }
    }),
    sendHttpRequest: () => A({
      actionCreator: gt,
      effect: async (i, r) => {
        t.postMessage({
          command: "sendHttpRequest",
          payload: i.payload
        });
      }
    }),
    sendCurlRequest: () => A({
      actionCreator: de,
      effect: async (i, r) => {
        t.postMessage({
          command: "sendCurlRequest",
          payload: i.payload
        });
      }
    }),
    showJsonPointer: () => A({
      actionCreator: le,
      effect: async (i, r) => {
        t.postMessage({
          command: "showJsonPointer",
          payload: i.payload
        });
      }
    }),
    showEnvWindow: () => A({
      actionCreator: Le,
      effect: async (i, r) => {
        t.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return Ze(A, s), Oe(n), ue;
}
function Et() {
  const s = pe((o) => o.logging.messages).filter((o) => !0), n = N.useRef(null), [i, r] = N.useState(!1);
  if (N.useEffect(() => {
    n.current && !i && (n.current.scrollTop = n.current.scrollHeight);
  }, [s, i]), s.length === 0)
    return null;
  const f = () => {
    const o = n.current;
    if (o) {
      const c = o.scrollTop, a = o.scrollHeight, p = o.clientHeight;
      a - (c + p) < 10 ? r(!1) : r(!0);
    }
  };
  return /* @__PURE__ */ e.jsx(Rt, { children: /* @__PURE__ */ e.jsx(At, { ref: n, onScroll: f, children: s.map((o, c, a) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(Ot, { first: c === 0, last: c === a.length - 1 }),
    /* @__PURE__ */ e.jsx("div", { children: o.message })
  ] }, c)) }) });
}
function Ot({ first: t, last: s }) {
  return /* @__PURE__ */ e.jsxs(Pt, { first: t, last: s, children: [
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {})
  ] });
}
const At = h.div`
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
`, Pt = h.div`
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
`, Rt = h.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${x.border});
`;
function It() {
  const t = S((s) => s.scan.error);
  return t ? /* @__PURE__ */ e.jsx(qt, { children: /* @__PURE__ */ e.jsxs(kt, { children: [
    /* @__PURE__ */ e.jsx("div", { children: t.message }),
    t.details && /* @__PURE__ */ e.jsx("div", { children: t.details })
  ] }) }) : null;
}
const kt = h.div`
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
`, qt = h.div`
  padding: 8px;
`;
function Tt() {
  const s = pe((n) => n.logging.messages).filter((n) => !0);
  return s.length === 0 ? null : /* @__PURE__ */ e.jsx(Nt, { children: s.map((n, i, r) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx($t, { first: i === 0, last: i === r.length - 1 }),
    /* @__PURE__ */ e.jsx("div", { children: n.message })
  ] }, i)) });
}
function $t({ first: t, last: s }) {
  return /* @__PURE__ */ e.jsxs(Ht, { first: t, last: s, children: [
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {})
  ] });
}
const Nt = h.div`
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
`, Ht = h.div`
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
function Dt({
  global: t,
  issues: s,
  scanVersion: n
}) {
  const i = j(), r = s.filter(
    (o) => {
      var c, a;
      return ((c = o == null ? void 0 : o.outcome) == null ? void 0 : c.criticality) && ((a = o.outcome) == null ? void 0 : a.criticality) >= 1;
    }
  ).length, f = s.filter(
    (o) => {
      var c, a;
      return ((c = o == null ? void 0 : o.outcome) == null ? void 0 : c.criticality) && ((a = o.outcome) == null ? void 0 : a.criticality) >= 4;
    }
  ).length;
  return /* @__PURE__ */ e.jsxs(Mt, { children: [
    /* @__PURE__ */ e.jsxs(Lt, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ e.jsx("b", { children: t.state }),
        " (Exit code: ",
        t.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ e.jsx("div", { children: M.fromISO(t.endDate).toLocaleString(M.DATETIME_MED) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Execution time:",
        " ",
        M.fromISO(t.endDate).diff(M.fromISO(t.startDate)).toFormat("mm:ss.SSS")
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Scan version: ",
        n
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(_t, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), i(_("tests")), i(g({}));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              s.length,
              " ",
              /* @__PURE__ */ e.jsx(B, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), i(_("tests")), i(g({ severity: "low" }));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              r,
              " ",
              /* @__PURE__ */ e.jsx(B, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), i(_("tests")), i(g({ severity: "high" }));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              f,
              " ",
              /* @__PURE__ */ e.jsx(B, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const Mt = h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, _t = h.div`
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
`, Lt = h.div`
  display: flex;
  border: 1px solid var(${x.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${x.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function fe({
  curl: t,
  id: s,
  waiting: n
}) {
  const i = j();
  return /* @__PURE__ */ e.jsx(Ft, { children: /* @__PURE__ */ e.jsxs(Bt, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
    /* @__PURE__ */ e.jsx(it, { children: /* @__PURE__ */ e.jsxs(rt, { children: [
      /* @__PURE__ */ e.jsx(ot, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { children: /* @__PURE__ */ e.jsx(
        Ye,
        {
          onClick: (r) => {
            r.preventDefault(), r.stopPropagation(), i(de(t));
          }
        }
      ) }) }),
      /* @__PURE__ */ e.jsx(at, { children: /* @__PURE__ */ e.jsxs(Ut, { sideOffset: 5, children: [
        "Copy cURL command to the clipboard",
        /* @__PURE__ */ e.jsx(Yt, {})
      ] }) })
    ] }) }),
    t
  ] }) });
}
const Ft = h.div``, Bt = h.div`
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
`, Ut = h(st)`
  color: var(${x.notificationsForeground});
  background-color: var(${x.notificationsBackground});
  border: 1px solid var(${x.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, Yt = h(nt)`
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
var xe = d.kOnHeaders = 1, Y = d.kOnHeadersComplete = 2, L = d.kOnBody = 3, z = d.kOnMessageComplete = 4;
d.prototype[xe] = d.prototype[Y] = d.prototype[L] = d.prototype[z] = function() {
};
var ge = !0;
Object.defineProperty(d, "kOnExecute", {
  get: function() {
    return ge = !1, 99;
  }
});
var ve = d.methods = [
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
], me = ve.indexOf("CONNECT");
d.prototype.reinitialize = d;
d.prototype.close = d.prototype.pause = d.prototype.resume = d.prototype.free = function() {
};
d.prototype._compatMode0_11 = !1;
d.prototype.getAsyncId = function() {
  return 0;
};
var zt = {
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
  return this.chunk = null, n = this.offset - s, zt[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || d.maxHeaderSize)) ? new Error("max header size exceeded") : n;
};
var Kt = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
d.prototype.finish = function() {
  if (!this.hadError) {
    if (!Kt[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[z]());
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
  this.userCall()(this[z]()), this.reinitialize(this.type);
};
d.prototype.consumeLine = function() {
  for (var t = this.end, s = this.chunk, n = this.offset; n < t; n++)
    if (s[n] === 10) {
      var i = this.line + s.toString(d.encoding, this.offset, n);
      return i.charAt(i.length - 1) === "\r" && (i = i.substr(0, i.length - 1)), this.line = "", this.offset = n + 1, i;
    }
  this.line += s.toString(d.encoding, this.offset, this.end), this.offset = this.end;
};
var Wt = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Vt = /^[ \t]+(.*[^ \t])/;
d.prototype.parseHeader = function(t, s) {
  if (t.indexOf("\r") !== -1)
    throw F("HPE_LF_EXPECTED");
  var n = Wt.exec(t), i = n && n[1];
  if (i)
    s.push(i), s.push(n[2]);
  else {
    var r = Vt.exec(t);
    r && s.length && (s[s.length - 1] && (s[s.length - 1] += " "), s[s.length - 1] += r[1]);
  }
};
var Gt = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
d.prototype.REQUEST_LINE = function() {
  var t = this.consumeLine();
  if (t) {
    var s = Gt.exec(t);
    if (s === null)
      throw F("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? s[1] : ve.indexOf(s[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = s[2], this.info.versionMajor = +s[3], this.info.versionMinor = +s[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var Qt = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
d.prototype.RESPONSE_LINE = function() {
  var t = this.consumeLine();
  if (t) {
    var s = Qt.exec(t);
    if (s === null)
      throw F("HPE_INVALID_CONSTANT");
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
      for (var n = s.headers, i = !1, r, f = !1, o = 0; o < n.length; o += 2)
        switch (n[o].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = n[o + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (r = +n[o + 1], i) {
              if (r !== this.body_bytes)
                throw F("HPE_UNEXPECTED_CONTENT_LENGTH");
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
      this.isChunked && i && (i = !1, this.body_bytes = null), f && this.connection.indexOf("upgrade") != -1 ? s.upgrade = this.type === d.REQUEST || s.statusCode === 101 : s.upgrade = s.method === me, this.isChunked && s.upgrade && (this.isChunked = !1), s.shouldKeepAlive = this.shouldKeepAlive();
      var c;
      if (ge ? c = this.userCall()(this[Y](s)) : c = this.userCall()(this[Y](
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
  this.userCall()(this[L](this.chunk, this.offset, t)), this.offset += t, this.body_bytes -= t, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
d.prototype.BODY_CHUNKEMPTYLINE = function() {
  var t = this.consumeLine();
  t !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
d.prototype.BODY_CHUNKTRAILERS = function() {
  var t = this.consumeLine();
  t !== void 0 && (t ? this.parseHeader(t, this.trailers) : (this.trailers.length && this.userCall()(this[xe](this.trailers, "")), this.nextRequest()));
};
d.prototype.BODY_RAW = function() {
  var t = this.end - this.offset;
  this.userCall()(this[L](this.chunk, this.offset, t)), this.offset = this.end;
};
d.prototype.BODY_SIZED = function() {
  var t = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[L](this.chunk, this.offset, t)), this.offset += t, this.body_bytes -= t, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(t) {
  var s = d["kOn" + t];
  Object.defineProperty(d.prototype, "on" + t, {
    get: function() {
      return this[s];
    },
    set: function(n) {
      return this._compatMode0_11 = !0, me = "CONNECT", this[s] = n;
    }
  });
});
function F(t) {
  var s = new Error("Parse Error");
  return s.code = t, s;
}
function ye(t) {
  if (t === void 0)
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  try {
    return Jt(Fe.Buffer.from(t, "base64"));
  } catch {
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  }
}
function Jt(t) {
  const s = new d(d.RESPONSE);
  let n = !1, i = 0, r, f, o = [], c = [];
  if (s[d.kOnHeadersComplete] = function(l) {
    l.shouldKeepAlive, l.upgrade, i = l.statusCode, l.statusMessage, r = l.versionMajor, f = l.versionMinor, o = l.headers;
  }, s[d.kOnBody] = function(l, u, v) {
    c.push(l.slice(u, u + v));
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
    httpVersion: `${r}.${f}`,
    body: a
  };
}
function Xt({
  issue: t,
  httpResponse: s,
  error: n,
  id: i,
  waiting: r
}) {
  var K, W, V, G, Q, J, X;
  const f = j(), [o, c] = N.useState(!0), { request: a, response: p, test: l, outcome: u } = t, v = (u == null ? void 0 : u.status) === "correct", b = u == null ? void 0 : u.conformant, m = u == null ? void 0 : u.error, w = u == null ? void 0 : u.excessiveDataExposure, R = (u == null ? void 0 : u.apiResponseAnalysis) || [], E = (u == null ? void 0 : u.testSuccessful) === !1 || !(v && b);
  let O = "N/A", I = "N/A";
  const k = ((W = (K = u == null ? void 0 : u.apiResponseAnalysis) == null ? void 0 : K[0]) == null ? void 0 : W.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  return k === "Yes" && (O = ((G = (V = u == null ? void 0 : u.apiResponseAnalysis) == null ? void 0 : V[0]) == null ? void 0 : G.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), O === "Yes" && (I = ((J = (Q = u == null ? void 0 : u.apiResponseAnalysis) == null ? void 0 : Q[0]) == null ? void 0 : J.responseKey) === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ e.jsxs(Zt, { children: [
    /* @__PURE__ */ e.jsxs(es, { collapsed: o, onClick: () => c(!o), children: [
      /* @__PURE__ */ e.jsx("div", { children: o ? /* @__PURE__ */ e.jsx(et, {}) : /* @__PURE__ */ e.jsx(tt, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(ts, { children: l == null ? void 0 : l.description }),
        /* @__PURE__ */ e.jsxs(ss, { children: [
          m && /* @__PURE__ */ e.jsxs(P, { children: [
            /* @__PURE__ */ e.jsx(q, {}),
            " Error: ",
            m
          ] }),
          !m && E && /* @__PURE__ */ e.jsxs(P, { children: [
            /* @__PURE__ */ e.jsx(q, {}),
            " Failed",
            u.criticality > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              "/",
              /* @__PURE__ */ e.jsxs("span", { style: { fontWeight: rs[u.criticality] }, children: [
                " ",
                is[u.criticality]
              ] })
            ] })
          ] }),
          !m && !E && /* @__PURE__ */ e.jsxs(P, { children: [
            /* @__PURE__ */ e.jsx($, {}),
            " Passed"
          ] }),
          !m && E && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(P, { children: v ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx($, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(q, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ e.jsx(P, { children: b ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx($, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(q, {}),
              " Conforms to Contract: No"
            ] }) }),
            /* @__PURE__ */ e.jsx(P, { children: w ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
    !o && /* @__PURE__ */ e.jsxs(ns, { children: [
      m && /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Error" }),
        /* @__PURE__ */ e.jsx("div", { children: m })
      ] }),
      !m && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "HTTP code received" }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            p == null ? void 0 : p.httpStatusCode,
            " (Expected: ",
            (X = l == null ? void 0 : l.httpStatusExpected) == null ? void 0 : X.join(", "),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response code found in API Contract" }),
          /* @__PURE__ */ e.jsx("div", { children: k })
        ] }),
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Content-Type found in API Contract" }),
          /* @__PURE__ */ e.jsx("div", { children: O })
        ] }),
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response matches API Contract" }),
          /* @__PURE__ */ e.jsx("div", { children: I })
        ] }),
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Excessive data exposure found" }),
          /* @__PURE__ */ e.jsx("div", { children: w ? "Yes" : "No" })
        ] }),
        R.length > 0 && /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response Analysis" }),
          /* @__PURE__ */ e.jsx("div", { children: R.map((D, je) => /* @__PURE__ */ e.jsx("div", { children: D.responseDescription }, je)) })
        ] }),
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "JSON Pointer" }),
          /* @__PURE__ */ e.jsx("div", { children: l != null && l.jsonPointer ? /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "#",
              onClick: (D) => {
                D.preventDefault(), D.stopPropagation(), f(
                  le((l == null ? void 0 : l.jsonPointer) + "")
                  // FIXME support indexed reports
                );
              },
              children: l == null ? void 0 : l.jsonPointer
            }
          ) : "N/A" })
        ] }),
        (a == null ? void 0 : a.curl) && /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Request" }),
          /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(fe, { waiting: r, curl: a.curl, id: i }) })
        ] }),
        n === void 0 && (s !== void 0 || (p == null ? void 0 : p.rawPayload) !== void 0) && /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response" }),
          /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
            oe,
            {
              accented: !0,
              response: s || ye(p == null ? void 0 : p.rawPayload)
            }
          ) })
        ] }),
        n && /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Error" }),
          /* @__PURE__ */ e.jsx("div", { children: n == null ? void 0 : n.message })
        ] })
      ] })
    ] })
  ] });
}
const Zt = h.div`
  margin: 8px;
  border: 1px solid var(${x.border});
`, es = h.div`
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
`, ts = h.div`
  font-weight: 600;
`, ss = h.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, P = h.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${x.foreground});
  }
`, ns = h.div`
  background-color: var(${x.computedOne});
`, y = h.div`
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
`, is = {
  0: "None",
  1: "Info",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Critical"
}, rs = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700,
  5: 700
};
function os({
  filters: t,
  onClick: s
}) {
  return /* @__PURE__ */ e.jsx(
    as,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), s();
      },
      children: /* @__PURE__ */ e.jsxs(ds, { children: [
        /* @__PURE__ */ e.jsx(ze, {}),
        t !== 0 && /* @__PURE__ */ e.jsx(cs, { children: t })
      ] })
    }
  );
}
const as = h.div`
  width: 34px;
  height: 26px;
  position: relative;
`, cs = h.div`
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
`, ds = h.button`
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
function ls() {
  const t = j();
  return /* @__PURE__ */ e.jsxs(
    hs,
    {
      onClick: (s) => {
        t(g({})), s.preventDefault(), s.stopPropagation();
      },
      children: [
        /* @__PURE__ */ e.jsx(Ke, {}),
        " ",
        /* @__PURE__ */ e.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const hs = h.div`
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
function ps() {
  const t = S((i) => i.scan.filter), s = j(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ e.jsx(us, { children: /* @__PURE__ */ e.jsx(
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
const us = h.div`
  width: 264px;
`;
function fs() {
  const { filter: t, titles: s } = S((r) => r.scan), n = j(), i = [];
  for (const r of s)
    ee[r] && i.push({ label: ee[r], value: r });
  return /* @__PURE__ */ e.jsx(xs, { children: /* @__PURE__ */ e.jsx(
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
const xs = h.div`
  width: 264px;
`, ee = {
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
function gs() {
  const { filter: t, paths: s } = S((r) => r.scan), n = j(), i = s.map((r) => ({ label: r, value: r }));
  return /* @__PURE__ */ e.jsx(vs, { children: /* @__PURE__ */ e.jsx(
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
const vs = h.div`
  width: 264px;
`;
function ms() {
  const { filter: t, operationIds: s } = S((r) => r.scan), n = j(), i = s.map((r) => ({ label: r, value: r }));
  return /* @__PURE__ */ e.jsx(ys, { children: /* @__PURE__ */ e.jsx(
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
const ys = h.div`
  width: 264px;
`;
function js() {
  const { filter: t } = S((i) => i.scan), s = j(), n = re.map((i) => ({ value: i, label: i.toUpperCase() }));
  return /* @__PURE__ */ e.jsx(bs, { children: /* @__PURE__ */ e.jsx(
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
const bs = h.div`
  width: 264px;
`;
function Ss() {
  const { filter: t, grouped: s } = S((c) => c.scan), [n, i] = N.useState(!0), f = ["severity", "title"].filter((c) => t && t[c] !== void 0).length, o = Object.keys(s).map((c) => s[c].length).reduce((c, a) => c + a, 0);
  return /* @__PURE__ */ e.jsxs(ws, { children: [
    /* @__PURE__ */ e.jsxs(Cs, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        o,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsx(os, { filters: f, onClick: () => i(!n) })
    ] }),
    !n && /* @__PURE__ */ e.jsxs(Es, { children: [
      /* @__PURE__ */ e.jsx(ps, {}),
      /* @__PURE__ */ e.jsx(fs, {}),
      /* @__PURE__ */ e.jsx(gs, {}),
      /* @__PURE__ */ e.jsx(js, {}),
      /* @__PURE__ */ e.jsx(ms, {}),
      /* @__PURE__ */ e.jsx(ls, {})
    ] })
  ] });
}
const ws = h.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, Cs = h.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, Es = h.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function Os({
  issues: t,
  responses: s,
  errors: n,
  waitings: i,
  grouped: r
}) {
  return t.length === 0 ? /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsx(As, { children: "No test results available" }) }) : /* @__PURE__ */ e.jsxs(te, { children: [
    /* @__PURE__ */ e.jsx(Ss, {}),
    Object.keys(r).map((f) => /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx(Ps, { children: Rs[f] ?? "Unknown test type" }),
      r[f].map((o, c) => {
        const a = `${f}-${c}`;
        return /* @__PURE__ */ e.jsx(
          Xt,
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
const te = h.div`
  margin-top: 8px;
`, As = h.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${x.border});
`, Ps = h.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, Rs = {
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
function Is({ operation: t }) {
  var l, u;
  const s = (l = t.scenarios) == null ? void 0 : l[0];
  if (s === void 0) {
    const v = t.reason || "unknown";
    return /* @__PURE__ */ e.jsxs(qs, { children: [
      "Happy path failed, reason: ",
      v
    ] });
  }
  const { request: n, response: i, outcome: r, happyPath: f } = s;
  let o = "N/A";
  const c = (r == null ? void 0 : r.status) === "correct" ? "Yes" : "No";
  c === "Yes" && (o = r != null && r.conformant ? "Yes" : "No");
  const a = r == null ? void 0 : r.excessiveDataExposure, p = (r == null ? void 0 : r.apiResponseAnalysis) || [];
  return /* @__PURE__ */ e.jsxs(ks, { children: [
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        i == null ? void 0 : i.httpStatusCode,
        " (Expected: ",
        (u = f == null ? void 0 : f.httpStatusExpected) == null ? void 0 : u.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ e.jsx("div", { children: c })
    ] }),
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ e.jsx("div", { children: o })
    ] }),
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Excessive data exposure found" }),
      /* @__PURE__ */ e.jsx("div", { children: a ? "Yes" : "No" })
    ] }),
    p.length > 0 && /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response Analysis" }),
      /* @__PURE__ */ e.jsx("div", { children: p.map((v, b) => /* @__PURE__ */ e.jsx("div", { children: v.responseDescription }, b)) })
    ] }),
    (n == null ? void 0 : n.curl) && /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Request" }),
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(fe, { curl: n == null ? void 0 : n.curl, id: "happy-path", waiting: !1 }) })
    ] }),
    (i == null ? void 0 : i.rawPayload) && /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response" }),
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(oe, { accented: !0, response: ye(i.rawPayload) }) })
    ] }),
    (r == null ? void 0 : r.error) && /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Error" }),
      /* @__PURE__ */ e.jsx("div", { children: r == null ? void 0 : r.error })
    ] })
  ] });
}
const ks = h.div`
  margin: 8px;
  border: 1px solid var(${x.border});
`, qs = h.div`
  margin: 16px;
`, C = h.div`
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
function Ts({
  operation: t,
  operationId: s,
  defaultCollapsed: n
}) {
  var o;
  const i = (o = t.scenarios) == null ? void 0 : o.map((c) => {
    var a;
    return (a = c == null ? void 0 : c.outcome) == null ? void 0 : a.testSuccessful;
  }), f = i !== void 0 && i.every((c) => c !== void 0) ? i.every((c) => c) : t.fuzzed;
  return /* @__PURE__ */ e.jsx($s, { children: /* @__PURE__ */ e.jsxs(dt, { defaultCollapsed: n, children: [
    /* @__PURE__ */ e.jsxs(Ns, { children: [
      /* @__PURE__ */ e.jsx("span", { children: s }),
      /* @__PURE__ */ e.jsx("span", { children: f ? "Passed" : "Failed" })
    ] }),
    /* @__PURE__ */ e.jsxs(Hs, { children: [
      /* @__PURE__ */ e.jsx(Ds, { children: t.method }),
      /* @__PURE__ */ e.jsx(Ms, { children: t.path }),
      f ? /* @__PURE__ */ e.jsx($, {}) : /* @__PURE__ */ e.jsx(De, {})
    ] }),
    /* @__PURE__ */ e.jsx(Is, { operation: t })
  ] }) });
}
const $s = h.div`
  background-color: var(${x.computedOne});
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
`, Hs = h.div`
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
`, Ds = h.div`
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
`, Ms = h.div`
  line-break: anywhere;
`;
function _s() {
  const t = j(), { scanReport: s, operations: n, responses: i, errors: r, waitings: f, tab: o, issues: c, grouped: a } = S((l) => l.scan);
  if (s === void 0)
    return /* @__PURE__ */ e.jsx(Ls, { children: /* @__PURE__ */ e.jsx(Bs, { children: "Report is not yet available" }) });
  const p = Object.entries(n);
  return /* @__PURE__ */ e.jsx(
    ct,
    {
      activeTab: o,
      setActiveTab: (l) => t(_(l)),
      tabs: [
        {
          id: "summary",
          title: "Summary",
          content: /* @__PURE__ */ e.jsxs(Fs, { children: [
            /* @__PURE__ */ e.jsx(
              Dt,
              {
                issues: c,
                global: s.summary,
                scanVersion: s.scanVersion
              }
            ),
            /* @__PURE__ */ e.jsx("div", { style: { fontWeight: 600, margin: "8px" }, children: "Happy Path Testing results" }),
            p.map(([l, u]) => /* @__PURE__ */ e.jsx(
              Ts,
              {
                defaultCollapsed: p.length > 1,
                operationId: l,
                operation: u
              },
              l
            ))
          ] })
        },
        {
          id: "tests",
          title: "Tests",
          content: /* @__PURE__ */ e.jsx(
            Os,
            {
              issues: c,
              grouped: a,
              responses: i,
              errors: r,
              waitings: f
            }
          )
        },
        { id: "logs", title: "Logs", content: /* @__PURE__ */ e.jsx(Tt, {}) }
      ]
    }
  );
}
const Ls = h.div``, Fs = h.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Bs = h.div`
  margin: 1em;
  padding: 10px;
`;
function Us() {
  const { scanReport: t, waiting: s, error: n } = S((i) => i.scan);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    t && /* @__PURE__ */ e.jsx(_s, {}),
    /* @__PURE__ */ e.jsx(It, {}),
    (s || n) && /* @__PURE__ */ e.jsx(Et, {})
  ] });
}
const se = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ e.jsx("div", {})
  },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ e.jsx(Us, {}),
    when: ce
  }
], Ys = {
  changeTheme: Ne,
  startScan: ce,
  scanOperation: ht,
  showGeneralError: ft,
  showHttpError: xt,
  showHttpResponse: vt,
  showScanReport: pt,
  showFullScanReport: ut,
  loadEnv: Be,
  loadPrefs: Qe,
  loadConfig: Xe,
  showLogMessage: jt
};
function zs() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Te, {}),
    /* @__PURE__ */ e.jsx($e, {})
  ] });
}
function Ks(t, s) {
  const n = wt(Ct(t, se), s);
  Pe(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(Re.StrictMode, { children: /* @__PURE__ */ e.jsx(Ie, { store: n, children: /* @__PURE__ */ e.jsx(ke.Provider, { value: se, children: /* @__PURE__ */ e.jsx(zs, {}) }) }) })
  ), window.addEventListener("message", qe(n, Ys));
}
window.renderWebView = Ks;
