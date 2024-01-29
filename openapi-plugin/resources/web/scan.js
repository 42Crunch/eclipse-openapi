import { c as pe, b as he, a as Te, u as Oe, l as qe, t as Pe, r as Ae, d as Ne, s as He, i as Ie, e as f, T as u, f as T, j as s, g as _e, R as Me, P as De, h as Le, m as Be, k as Fe, n as Ue, o as Ye } from "./webapp.yF4PwBss.js";
import { g as Ke, H as ze, e as We, s as Ve, b as Ge, l as Qe } from "./index.lcFuHH3z.js";
import { S as ue, e as Je, b as Xe, c as Ze } from "./Xmark.PxyPpQA1.js";
import { p as et, s as tt, a as st, S as H, l as nt } from "./index.klStI7S4.js";
import { c as it, l as rt } from "./slice.WPgyTBdG.js";
import { s as ot } from "./listener.8dSMuVUh.js";
import { R as fe } from "./Response.e4O8t0gl.js";
import { $ as at, a as ct, b as dt, c as lt, d as pt, e as ht } from "./index.OmGcbm4r.js";
import { D as O } from "./datetime.8rVZUDtl.js";
import { S as ut } from "./AngleDown.N2mqK8v1.js";
import { S as ft } from "./AngleUp.PYBxLDue.js";
import { S as I } from "./Check.VzTbtEKL.js";
import { S as _ } from "./ExclamationCircle.i2K0Pqn4.js";
import { P as xe } from "./Select.bX0uI-FX.js";
import { T as xt } from "./Tabs.fwjiQaQD.js";
import "./index.g1E2Oywa.js";
import "./downshift.esm.qxg3byYX.js";
import "./index.esm.Shro8ov1.js";
const gt = {
  oas: {
    openapi: "3.0.0",
    info: { title: "", version: "0.0" },
    paths: {}
  },
  rawOas: "",
  scanReport: void 0,
  isNewScanConfig: !0,
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
  titles: []
}, ge = pe({
  name: "scan",
  initialState: gt,
  reducers: {
    startScan: (e, t) => {
      e.error = void 0, e.scanReport = void 0, e.waiting = !0, e.response = void 0, e.responses = {};
    },
    scanOperation: (e, t) => {
    },
    runScan: (e, t) => {
      e.defaultValues = t.payload.defaultValues, e.scanReport = void 0, e.error = void 0, e.waiting = !0, e.response = void 0, e.responses = {};
    },
    showScanReport: (e, t) => {
      const { oas: n, path: i, method: a } = t.payload, c = Ke(n, i, a), o = (c == null ? void 0 : c.operationId) === void 0 ? `${i}:${a}` : c.operationId;
      e.operationId = o, e.oas = n, e.path = i, e.method = a;
      const r = Rt(
        t.payload.report,
        e.path,
        e.operationId
      ), l = ae(r, e.filter), { titles: x } = M(r), { grouped: h } = M(l);
      e.issues = r, e.titles = x, e.grouped = h, e.scanReport = t.payload.report, e.waiting = !1;
    },
    changeFilter: (e, t) => {
      if (e.filter = t.payload, e.isNewScanConfig) {
        const n = ae(e.issues, e.filter), { grouped: i } = M(n);
        e.grouped = i;
      } else {
        const n = Ct(e.issues, e.filter), { grouped: i } = Et(n);
        e.grouped = i;
      }
    },
    changeTab: (e, t) => {
      e.tab = t.payload;
    },
    showGeneralError: (e, t) => {
      e.error = t.payload, e.waiting = !1;
    },
    showHttpResponse: (e, { payload: { id: t, response: n } }) => {
      e.responses[t] = n, e.waitings[t] = !1, delete e.errors[t];
    },
    showHttpError: (e, { payload: { id: t, error: n } }) => {
      e.errors[t] = n, e.waitings[t] = !1, delete e.responses[t];
    },
    sendHttpRequest: (e, { payload: { id: t } }) => {
      e.waitings[t] = !0;
    },
    sendCurlRequest: (e, t) => {
    },
    showJsonPointer: (e, t) => {
    },
    showAuditReport: (e, t) => {
    }
  }
}), {
  startScan: me,
  scanOperation: mt,
  runScan: an,
  showScanReport: vt,
  showGeneralError: yt,
  showHttpError: jt,
  sendHttpRequest: bt,
  sendCurlRequest: ve,
  showHttpResponse: St,
  showJsonPointer: ye,
  showAuditReport: wt,
  changeTab: P,
  changeFilter: E
} = ge.actions;
function Ct(e, t) {
  const n = (c) => {
    var o;
    return (t == null ? void 0 : t.title) === void 0 || ((o = c.test) == null ? void 0 : o.key) === t.title;
  }, i = t.severity !== void 0 ? ue.indexOf(t.severity) + 1 : 0, a = (c) => {
    var o, r;
    return t.severity === void 0 || ((o = c.outcome) == null ? void 0 : o.criticality) === void 0 || ((r = c.outcome) == null ? void 0 : r.criticality) >= i;
  };
  return e.filter((c) => n(c) && a(c));
}
function Et(e) {
  var a, c;
  const t = {}, n = {};
  for (const o of e) {
    const r = (a = o.test) == null ? void 0 : a.key;
    r !== void 0 && (t[r] === void 0 && (t[r] = [], n[r] = (c = o.test) == null ? void 0 : c.description), t[r].push(o));
  }
  const i = Object.keys(t);
  for (const o of i)
    t[o].sort((r, l) => {
      var x, h, p, g, m, v, y, j, S, w;
      if (((x = r.outcome) == null ? void 0 : x.status) !== ((h = l.outcome) == null ? void 0 : h.status)) {
        if (((p = r.outcome) == null ? void 0 : p.status) === "incorrect")
          return -1;
        if (((g = l.outcome) == null ? void 0 : g.status) === "incorrect")
          return 1;
        if (((m = r.outcome) == null ? void 0 : m.status) === "unexpected")
          return -1;
        if (((v = l.outcome) == null ? void 0 : v.status) === "unexpected")
          return 1;
      }
      return ((y = r.outcome) == null ? void 0 : y.criticality) !== ((j = l.outcome) == null ? void 0 : j.criticality) ? ((S = r.outcome) == null ? void 0 : S.criticality) - ((w = l.outcome) == null ? void 0 : w.criticality) : 0;
    });
  return { grouped: t, titles: Object.keys(n) };
}
function Rt(e, t, n) {
  var o, r, l, x;
  const i = [], a = (r = (o = e == null ? void 0 : e.operations) == null ? void 0 : o[n]) == null ? void 0 : r.conformanceRequestsResults;
  a !== void 0 && i.push(...a);
  const c = e == null ? void 0 : e.methodNotAllowed;
  for (const h of ze) {
    const p = (x = (l = c == null ? void 0 : c[t]) == null ? void 0 : l[h]) == null ? void 0 : x.conformanceRequestsResults;
    p !== void 0 && i.push(...p);
  }
  return i;
}
function ae(e, t) {
  const n = (c) => {
    var o;
    return (t == null ? void 0 : t.title) === void 0 || ((o = c.test) == null ? void 0 : o.key) === t.title;
  }, i = t.severity !== void 0 ? ue.indexOf(t.severity) + 1 : 0, a = (c) => {
    var o, r;
    return t.severity === void 0 || ((o = c.outcome) == null ? void 0 : o.criticality) === void 0 || ((r = c.outcome) == null ? void 0 : r.criticality) >= i;
  };
  return e.filter((c) => n(c) && a(c));
}
function M(e) {
  var a, c;
  const t = {}, n = {};
  for (const o of e) {
    const r = (a = o.test) == null ? void 0 : a.key;
    r !== void 0 && (t[r] === void 0 && (t[r] = [], n[r] = (c = o.test) == null ? void 0 : c.description), t[r].push(o));
  }
  const i = Object.keys(t);
  for (const o of i)
    t[o].sort((r, l) => {
      var x, h, p, g, m, v, y, j, S, w;
      if (((x = r.outcome) == null ? void 0 : x.status) !== ((h = l.outcome) == null ? void 0 : h.status)) {
        if (((p = r.outcome) == null ? void 0 : p.status) === "error")
          return -1;
        if (((g = l.outcome) == null ? void 0 : g.status) === "error")
          return 1;
        if (((m = r.outcome) == null ? void 0 : m.status) === "defective")
          return -1;
        if (((v = l.outcome) == null ? void 0 : v.status) === "defective")
          return 1;
      }
      return ((y = r.outcome) == null ? void 0 : y.criticality) !== ((j = l.outcome) == null ? void 0 : j.criticality) ? ((S = r.outcome) == null ? void 0 : S.criticality) - ((w = l.outcome) == null ? void 0 : w.criticality) : 0;
    });
  return { grouped: t, titles: Object.keys(n) };
}
const kt = ge.reducer, $t = {
  messages: []
}, je = pe({
  name: "logging",
  initialState: $t,
  reducers: {
    showLogMessage: (e, t) => {
      e.messages.push(t.payload);
    },
    clearLogs: (e) => {
      e.messages = [];
    }
  }
}), { showLogMessage: Tt, clearLogs: cn } = je.actions, be = he, Ot = je.reducer, qt = {
  theme: Pe,
  scan: kt,
  router: Ae,
  env: We,
  prefs: et,
  config: it,
  logging: Ot
}, Pt = (e, t) => Te({
  reducer: qt,
  middleware: (n) => n().prepend(e.middleware).concat(qe),
  preloadedState: {
    theme: t
  }
}), k = () => Oe(), $ = he, Se = Ne(), R = Se.startListening;
function At(e, t) {
  const n = {
    savePrefs: () => R({
      matcher: Ie(tt, st),
      effect: async (i, a) => {
        const { prefs: c } = a.getState();
        e.postMessage({
          command: "savePrefs",
          payload: c
        });
      }
    }),
    sendHttpRequest: () => R({
      actionCreator: bt,
      effect: async (i, a) => {
        e.postMessage({
          command: "sendHttpRequest",
          payload: i.payload
        });
      }
    }),
    sendCurlRequest: () => R({
      actionCreator: ve,
      effect: async (i, a) => {
        e.postMessage({
          command: "sendCurlRequest",
          payload: i.payload
        });
      }
    }),
    showJsonPointer: () => R({
      actionCreator: ye,
      effect: async (i, a) => {
        e.postMessage({
          command: "showJsonPointer",
          payload: i.payload
        });
      }
    }),
    showAuditReport: () => R({
      actionCreator: wt,
      effect: async (i, a) => {
        e.postMessage({
          command: "showAuditReport",
          payload: void 0
        });
      }
    }),
    showEnvWindow: () => R({
      actionCreator: Ve,
      effect: async (i, a) => {
        e.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return ot(R, t), He(n), Se;
}
function Nt() {
  const t = be((o) => o.logging.messages).filter((o) => o.level == "info"), n = T.useRef(null), [i, a] = T.useState(!1);
  if (T.useEffect(() => {
    n.current && !i && (n.current.scrollTop = n.current.scrollHeight);
  }, [t, i]), t.length === 0)
    return null;
  const c = () => {
    const o = n.current;
    if (o) {
      const r = o.scrollTop, l = o.scrollHeight, x = o.clientHeight;
      l - (r + x) < 10 ? a(!1) : a(!0);
    }
  };
  return /* @__PURE__ */ s.jsx(Mt, { children: /* @__PURE__ */ s.jsx(It, { ref: n, onScroll: c, children: t.map((o, r, l) => /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsx(Ht, { first: r === 0, last: r === l.length - 1 }),
    /* @__PURE__ */ s.jsx("div", { children: o.message })
  ] }, r)) }) });
}
function Ht({ first: e, last: t }) {
  return /* @__PURE__ */ s.jsxs(_t, { first: e, last: t, children: [
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx("div", {})
  ] });
}
const It = f.div`
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
`, _t = f.div`
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
`, Mt = f.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${u.border});
`;
function Dt() {
  const e = $((t) => t.scan.error);
  return e ? /* @__PURE__ */ s.jsx(Bt, { children: /* @__PURE__ */ s.jsxs(Lt, { children: [
    /* @__PURE__ */ s.jsx("div", { children: e.message }),
    e.details && /* @__PURE__ */ s.jsx("div", { children: e.details })
  ] }) }) : null;
}
const Lt = f.div`
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
`, Bt = f.div`
  padding: 8px;
`;
function Ft() {
  const t = be((n) => n.logging.messages).filter((n) => n.level == "info");
  return t.length === 0 ? null : /* @__PURE__ */ s.jsx(Yt, { children: t.map((n, i, a) => /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsx(Ut, { first: i === 0, last: i === a.length - 1 }),
    /* @__PURE__ */ s.jsx("div", { children: n.message })
  ] }, i)) });
}
function Ut({ first: e, last: t }) {
  return /* @__PURE__ */ s.jsxs(Kt, { first: e, last: t, children: [
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx("div", {})
  ] });
}
const Yt = f.div`
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
`, Kt = f.div`
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
function d(e) {
  e === void 0 || this.initialize(e), this.maxHeaderSize = d.maxHeaderSize;
}
d.prototype.initialize = function(e, t) {
  this.type = e, this.state = e + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
d.encoding = "ascii";
d.maxHeaderSize = 80 * 1024;
d.REQUEST = "REQUEST";
d.RESPONSE = "RESPONSE";
var we = d.kOnHeaders = 1, D = d.kOnHeadersComplete = 2, A = d.kOnBody = 3, L = d.kOnMessageComplete = 4;
d.prototype[we] = d.prototype[D] = d.prototype[A] = d.prototype[L] = function() {
};
var Ce = !0;
Object.defineProperty(d, "kOnExecute", {
  get: function() {
    return Ce = !1, 99;
  }
});
var Ee = d.methods = [
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
], Re = Ee.indexOf("CONNECT");
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
d.prototype.execute = function(e, t, n) {
  if (!(this instanceof d))
    throw new TypeError("not a HTTPParser");
  t = t || 0, n = typeof n == "number" ? n : e.length, this.chunk = e, this.offset = t;
  var i = this.end = t + n;
  try {
    for (; this.offset < i && !this[this.state](); )
      ;
  } catch (a) {
    if (this.isUserCall)
      throw a;
    return this.hadError = !0, a;
  }
  return this.chunk = null, n = this.offset - t, zt[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || d.maxHeaderSize)) ? new Error("max header size exceeded") : n;
};
var Wt = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
d.prototype.finish = function() {
  if (!this.hadError) {
    if (!Wt[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[L]());
  }
};
d.prototype.consume = d.prototype.unconsume = d.prototype.getCurrentBuffer = function() {
};
d.prototype.userCall = function() {
  this.isUserCall = !0;
  var e = this;
  return function(t) {
    return e.isUserCall = !1, t;
  };
};
d.prototype.nextRequest = function() {
  this.userCall()(this[L]()), this.reinitialize(this.type);
};
d.prototype.consumeLine = function() {
  for (var e = this.end, t = this.chunk, n = this.offset; n < e; n++)
    if (t[n] === 10) {
      var i = this.line + t.toString(d.encoding, this.offset, n);
      return i.charAt(i.length - 1) === "\r" && (i = i.substr(0, i.length - 1)), this.line = "", this.offset = n + 1, i;
    }
  this.line += t.toString(d.encoding, this.offset, this.end), this.offset = this.end;
};
var Vt = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Gt = /^[ \t]+(.*[^ \t])/;
d.prototype.parseHeader = function(e, t) {
  if (e.indexOf("\r") !== -1)
    throw N("HPE_LF_EXPECTED");
  var n = Vt.exec(e), i = n && n[1];
  if (i)
    t.push(i), t.push(n[2]);
  else {
    var a = Gt.exec(e);
    a && t.length && (t[t.length - 1] && (t[t.length - 1] += " "), t[t.length - 1] += a[1]);
  }
};
var Qt = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
d.prototype.REQUEST_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var t = Qt.exec(e);
    if (t === null)
      throw N("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? t[1] : Ee.indexOf(t[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = t[2], this.info.versionMajor = +t[3], this.info.versionMinor = +t[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var Jt = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
d.prototype.RESPONSE_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var t = Jt.exec(e);
    if (t === null)
      throw N("HPE_INVALID_CONSTANT");
    this.info.versionMajor = +t[1], this.info.versionMinor = +t[2];
    var n = this.info.statusCode = +t[3];
    this.info.statusMessage = t[4], ((n / 100 | 0) === 1 || n === 204 || n === 304) && (this.body_bytes = 0), this.state = "HEADER";
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
  var e = this.consumeLine();
  if (e !== void 0) {
    var t = this.info;
    if (e)
      this.parseHeader(e, t.headers);
    else {
      for (var n = t.headers, i = !1, a, c = !1, o = 0; o < n.length; o += 2)
        switch (n[o].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = n[o + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (a = +n[o + 1], i) {
              if (a !== this.body_bytes)
                throw N("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              i = !0, this.body_bytes = a;
            break;
          case "connection":
            this.connection += n[o + 1].toLowerCase();
            break;
          case "upgrade":
            c = !0;
            break;
        }
      this.isChunked && i && (i = !1, this.body_bytes = null), c && this.connection.indexOf("upgrade") != -1 ? t.upgrade = this.type === d.REQUEST || t.statusCode === 101 : t.upgrade = t.method === Re, this.isChunked && t.upgrade && (this.isChunked = !1), t.shouldKeepAlive = this.shouldKeepAlive();
      var r;
      if (Ce ? r = this.userCall()(this[D](t)) : r = this.userCall()(this[D](
        t.versionMajor,
        t.versionMinor,
        t.headers,
        t.method,
        t.url,
        t.statusCode,
        t.statusMessage,
        t.upgrade,
        t.shouldKeepAlive
      )), r === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !r)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (r || this.body_bytes === 0)
          return this.nextRequest(), t.upgrade;
        this.body_bytes === null ? this.state = "BODY_RAW" : this.state = "BODY_SIZED";
      }
    }
  }
};
d.prototype.BODY_CHUNKHEAD = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.body_bytes = parseInt(e, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
d.prototype.BODY_CHUNK = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[A](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
d.prototype.BODY_CHUNKEMPTYLINE = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
d.prototype.BODY_CHUNKTRAILERS = function() {
  var e = this.consumeLine();
  e !== void 0 && (e ? this.parseHeader(e, this.trailers) : (this.trailers.length && this.userCall()(this[we](this.trailers, "")), this.nextRequest()));
};
d.prototype.BODY_RAW = function() {
  var e = this.end - this.offset;
  this.userCall()(this[A](this.chunk, this.offset, e)), this.offset = this.end;
};
d.prototype.BODY_SIZED = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[A](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(e) {
  var t = d["kOn" + e];
  Object.defineProperty(d.prototype, "on" + e, {
    get: function() {
      return this[t];
    },
    set: function(n) {
      return this._compatMode0_11 = !0, Re = "CONNECT", this[t] = n;
    }
  });
});
function N(e) {
  var t = new Error("Parse Error");
  return t.code = e, t;
}
function ke(e) {
  if (e === void 0)
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  try {
    return Xt(Ge.Buffer.from(e, "base64"));
  } catch {
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  }
}
function Xt(e) {
  const t = new d(d.RESPONSE);
  let n = !1, i = 0, a, c, o = [], r = [];
  if (t[d.kOnHeadersComplete] = function(h) {
    h.shouldKeepAlive, h.upgrade, i = h.statusCode, h.statusMessage, a = h.versionMajor, c = h.versionMinor, o = h.headers;
  }, t[d.kOnBody] = function(h, p, g) {
    r.push(h.slice(p, p + g));
  }, t[d.kOnHeaders] = function(h) {
  }, t[d.kOnMessageComplete] = function() {
    n = !0;
  }, t.execute(e), t.finish(), !n)
    throw new Error("Could not parse");
  let l = r.join("");
  const x = [];
  for (let h = 0; h < o.length - 1; h++)
    h % 2 === 0 && x.push([o[h], o[h + 1]]);
  return {
    headers: x,
    statusCode: i,
    httpVersion: `${a}.${c}`,
    body: l
  };
}
function $e({
  curl: e,
  id: t,
  waiting: n
}) {
  const i = k();
  return /* @__PURE__ */ s.jsx(Zt, { children: /* @__PURE__ */ s.jsxs(es, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
    /* @__PURE__ */ s.jsx(dt, { children: /* @__PURE__ */ s.jsxs(lt, { children: [
      /* @__PURE__ */ s.jsx(pt, { asChild: !0, children: /* @__PURE__ */ s.jsx("span", { children: /* @__PURE__ */ s.jsx(
        Je,
        {
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), i(ve(e));
          }
        }
      ) }) }),
      /* @__PURE__ */ s.jsx(ht, { children: /* @__PURE__ */ s.jsxs(ts, { sideOffset: 5, children: [
        "Copy cURL command to the clipboard",
        /* @__PURE__ */ s.jsx(ss, {})
      ] }) })
    ] }) }),
    e
  ] }) });
}
const Zt = f.div``, es = f.div`
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
`, ts = f(at)`
  color: var(${u.notificationsForeground});
  background-color: var(${u.notificationsBackground});
  border: 1px solid var(${u.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, ss = f(ct)`
  fill: var(${u.notificationsForeground});
`;
function ns({
  operation: e,
  issue: t,
  responses: n,
  errors: i,
  waitings: a
}) {
  var y, j;
  const { request: c, response: o, outcome: r, happyPath: l } = t, x = !e.fuzzed;
  let h = "N/A";
  const p = ((y = t == null ? void 0 : t.outcome) == null ? void 0 : y.status) === "correct" ? "Yes" : "No";
  p === "Yes" && (h = r != null && r.conformant ? "Yes" : "No");
  const g = n["happy-path"], m = i["happy-path"], v = a["happy-path"];
  return /* @__PURE__ */ s.jsxs(is, { children: [
    /* @__PURE__ */ s.jsx(C, { children: /* @__PURE__ */ s.jsx("div", { style: { opacity: 1 }, children: /* @__PURE__ */ s.jsx("b", { children: "Happy Path Testing results" }) }) }),
    /* @__PURE__ */ s.jsxs(C, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Test Status" }),
      /* @__PURE__ */ s.jsx("div", { children: x ? "Failed" : "Passed" })
    ] }),
    /* @__PURE__ */ s.jsxs(C, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        o == null ? void 0 : o.httpStatusCode,
        " (Expected: ",
        (j = l == null ? void 0 : l.httpStatusExpected) == null ? void 0 : j.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs(C, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ s.jsx("div", { children: p })
    ] }),
    /* @__PURE__ */ s.jsxs(C, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ s.jsx("div", { children: h })
    ] }),
    (c == null ? void 0 : c.curl) && /* @__PURE__ */ s.jsxs(C, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Request" }),
      /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx($e, { curl: c == null ? void 0 : c.curl, id: "happy-path", waiting: v }) })
    ] }),
    ((o == null ? void 0 : o.rawPayload) || g) && /* @__PURE__ */ s.jsxs(C, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Response" }),
      /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(
        fe,
        {
          accented: !0,
          response: g || ke(o.rawPayload)
        }
      ) })
    ] }),
    ((r == null ? void 0 : r.error) || m) && /* @__PURE__ */ s.jsxs(C, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Error" }),
      /* @__PURE__ */ s.jsx("div", { children: m ? m.message : r == null ? void 0 : r.error })
    ] })
  ] });
}
const is = f.div`
  margin: 8px;
  border: 1px solid var(${u.border});
`, C = f.div`
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
function rs({
  global: e,
  operation: t,
  issues: n
}) {
  var r;
  const i = k();
  e.issues.critical, e.issues.high;
  const a = (e.conformanceTestRequests.executed.total ?? 0) + (((r = e.methodNotAllowedTestRequests) == null ? void 0 : r.executed.total) ?? 0), c = (n == null ? void 0 : n.length) | 0, o = n.filter(
    (l) => {
      var x, h;
      return ((x = l == null ? void 0 : l.outcome) == null ? void 0 : x.criticality) && ((h = l.outcome) == null ? void 0 : h.criticality) >= 4;
    }
  ).length;
  return /* @__PURE__ */ s.jsxs(os, { children: [
    /* @__PURE__ */ s.jsxs(cs, { children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ s.jsx("b", { children: e.state }),
        " (Exit code: ",
        e.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ s.jsx("div", { children: O.fromISO(e.endDate).toLocaleString(O.DATETIME_MED) }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        "Execution time:",
        " ",
        O.fromISO(e.endDate).diff(O.fromISO(e.startDate)).toFormat("mm:ss.SSS")
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs(as, { children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          onClick: (l) => {
            l.preventDefault(), l.stopPropagation(), i(P("tests")), i(E({}));
          },
          children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              a,
              " ",
              /* @__PURE__ */ s.jsx(H, {})
            ] }),
            /* @__PURE__ */ s.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          onClick: (l) => {
            l.preventDefault(), l.stopPropagation(), i(P("tests")), i(E({}));
          },
          children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              c ?? 0,
              " ",
              /* @__PURE__ */ s.jsx(H, {})
            ] }),
            /* @__PURE__ */ s.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          onClick: (l) => {
            l.preventDefault(), l.stopPropagation(), i(P("tests")), i(E({ severity: "high" }));
          },
          children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              o,
              " ",
              /* @__PURE__ */ s.jsx(H, {})
            ] }),
            /* @__PURE__ */ s.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const os = f.div`
  margin: 8px;
`, as = f.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  & > div {
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    border: 1px solid var(${u.border});
  }
`, cs = f.div`
  display: flex;
  border: 1px solid var(${u.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${u.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function ds({
  operation: e,
  issue: t,
  httpResponse: n,
  error: i,
  id: a,
  waiting: c
}) {
  var w, B, F, U, Y, K, z, W, V, G, Q, J, X, Z, ee, te, se, ne, ie;
  const o = k(), [r, l] = T.useState(!0), { response: x, test: h, outcome: p } = t, g = (p == null ? void 0 : p.status) === "correct", m = p == null ? void 0 : p.conformant, v = !(g && m);
  let y = "N/A", j = "N/A";
  const S = ((B = (w = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : w[0]) == null ? void 0 : B.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  return S === "Yes" && (y = ((U = (F = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : F[0]) == null ? void 0 : U.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), y === "Yes" && (j = ((K = (Y = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : Y[0]) == null ? void 0 : K.responseKey) === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ s.jsxs(ls, { children: [
    /* @__PURE__ */ s.jsxs(ps, { collapsed: r, onClick: () => l(!r), children: [
      /* @__PURE__ */ s.jsx("div", { children: r ? /* @__PURE__ */ s.jsx(ut, {}) : /* @__PURE__ */ s.jsx(ft, {}) }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx(hs, { children: (z = t.test) == null ? void 0 : z.description }),
        /* @__PURE__ */ s.jsxs(us, { children: [
          v ? /* @__PURE__ */ s.jsxs(q, { children: [
            /* @__PURE__ */ s.jsx(_, {}),
            " Failed",
            t.outcome.criticality > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              "/",
              /* @__PURE__ */ s.jsxs("span", { style: { fontWeight: gs[p.criticality] }, children: [
                " ",
                xs[p.criticality]
              ] })
            ] })
          ] }) : /* @__PURE__ */ s.jsxs(q, { children: [
            /* @__PURE__ */ s.jsx(I, {}),
            " Passed"
          ] }),
          v && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(q, { children: g ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(I, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(_, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ s.jsx(q, { children: m ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(I, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(_, {}),
              " Conforms to Contract: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !r && /* @__PURE__ */ s.jsxs(fs, { children: [
      /* @__PURE__ */ s.jsxs(b, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "HTTP code received" }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          (W = t.response) == null ? void 0 : W.httpStatusCode,
          " (Expected:",
          " ",
          (G = (V = t.test) == null ? void 0 : V.httpStatusExpected) == null ? void 0 : G.join(", "),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs(b, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Response code found in API Contract" }),
        /* @__PURE__ */ s.jsx("div", { children: S })
      ] }),
      /* @__PURE__ */ s.jsxs(b, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Content-Type found in API Contract" }),
        /* @__PURE__ */ s.jsx("div", { children: y })
      ] }),
      /* @__PURE__ */ s.jsxs(b, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Response matches API Contract" }),
        /* @__PURE__ */ s.jsx("div", { children: j })
      ] }),
      ((J = (Q = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : Q[0]) == null ? void 0 : J.responseDescription) && /* @__PURE__ */ s.jsxs(b, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Response analysis" }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          " ",
          (Z = (X = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : X[0]) == null ? void 0 : Z.responseDescription
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs(b, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "JSON Pointer" }),
        /* @__PURE__ */ s.jsx("div", { children: (ee = t.test) != null && ee.jsonPointer ? /* @__PURE__ */ s.jsx(
          "a",
          {
            href: "#",
            onClick: (re) => {
              var oe;
              re.preventDefault(), re.stopPropagation(), o(
                ye(((oe = t.test) == null ? void 0 : oe.jsonPointer) + "")
                // FIXME support indexed reports
              );
            },
            children: (te = t.test) == null ? void 0 : te.jsonPointer
          }
        ) : "N/A" })
      ] }),
      ((se = t.request) == null ? void 0 : se.curl) && /* @__PURE__ */ s.jsxs(b, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Request" }),
        /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx($e, { waiting: c, curl: t.request.curl, id: a }) })
      ] }),
      i === void 0 && (n !== void 0 || ((ne = t.response) == null ? void 0 : ne.rawPayload) !== void 0) && /* @__PURE__ */ s.jsxs(b, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Response" }),
        /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(
          fe,
          {
            accented: !0,
            response: n || ke((ie = t.response) == null ? void 0 : ie.rawPayload)
          }
        ) })
      ] }),
      i && /* @__PURE__ */ s.jsxs(b, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Error" }),
        /* @__PURE__ */ s.jsx("div", { children: i == null ? void 0 : i.message })
      ] })
    ] })
  ] });
}
const ls = f.div`
  margin: 8px;
  border: 1px solid var(${u.border});
`, ps = f.div`
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
`, hs = f.div`
  font-weight: 600;
`, us = f.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, q = f.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${u.foreground});
  }
`, fs = f.div`
  background-color: var(${u.computedOne});
`, b = f.div`
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
`, xs = {
  0: "None",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Critical"
}, gs = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700
};
function ms({
  filters: e,
  onClick: t
}) {
  return /* @__PURE__ */ s.jsx(
    vs,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t();
      },
      children: /* @__PURE__ */ s.jsxs(js, { children: [
        /* @__PURE__ */ s.jsx(Xe, {}),
        e !== 0 && /* @__PURE__ */ s.jsx(ys, { children: e })
      ] })
    }
  );
}
const vs = f.div`
  width: 34px;
  height: 26px;
  position: relative;
`, ys = f.div`
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
`, js = f.button`
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
function bs() {
  const e = k();
  return /* @__PURE__ */ s.jsxs(
    Ss,
    {
      onClick: (t) => {
        e(E({})), t.preventDefault(), t.stopPropagation();
      },
      children: [
        /* @__PURE__ */ s.jsx(Ze, {}),
        " ",
        /* @__PURE__ */ s.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const Ss = f.div`
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
function ws() {
  const e = $((i) => i.scan.filter), t = k(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ s.jsx(Cs, { children: /* @__PURE__ */ s.jsx(
    xe,
    {
      label: "Severity",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (i) => {
        i && i.value !== "all" ? t(E({ ...e, severity: i == null ? void 0 : i.value })) : t(E({ ...e, severity: void 0 }));
      },
      selected: (e == null ? void 0 : e.severity) || "all"
    }
  ) });
}
const Cs = f.div`
  width: 264px;
`;
function Es() {
  const { filter: e, titles: t } = $((a) => a.scan), n = k(), i = [];
  for (const a of t)
    ce[a] && i.push({ label: ce[a], value: a });
  return /* @__PURE__ */ s.jsx(Rs, { children: /* @__PURE__ */ s.jsx(
    xe,
    {
      label: "Type",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (a) => {
        a && a.value !== "all" ? n(E({ ...e, title: a.value })) : n(E({ ...e, title: void 0 }));
      },
      selected: e.title || "all"
    }
  ) });
}
const Rs = f.div`
  width: 264px;
`, ce = {
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
function ks() {
  const { filter: e, grouped: t } = $((r) => r.scan), [n, i] = T.useState(!0), c = ["severity", "title"].filter((r) => e && e[r] !== void 0).length, o = Object.keys(t).map((r) => t[r].length).reduce((r, l) => r + l, 0);
  return /* @__PURE__ */ s.jsxs($s, { children: [
    /* @__PURE__ */ s.jsxs(Ts, { children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        o,
        " issues"
      ] }),
      /* @__PURE__ */ s.jsx(ms, { filters: c, onClick: () => i(!n) })
    ] }),
    !n && /* @__PURE__ */ s.jsxs(Os, { children: [
      /* @__PURE__ */ s.jsx(ws, {}),
      /* @__PURE__ */ s.jsx(Es, {}),
      /* @__PURE__ */ s.jsx(bs, {})
    ] })
  ] });
}
const $s = f.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, Ts = f.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, Os = f.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function qs({
  operation: e,
  issues: t,
  responses: n,
  errors: i,
  waitings: a,
  grouped: c
}) {
  return t.length === 0 ? /* @__PURE__ */ s.jsx(de, { children: /* @__PURE__ */ s.jsx(Ps, { children: "No test results available" }) }) : /* @__PURE__ */ s.jsxs(de, { children: [
    /* @__PURE__ */ s.jsx(ks, {}),
    Object.keys(c).map((o) => /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx(As, { children: Ns[o] ?? "Unknown test type" }),
      c[o].map((r, l) => {
        const x = `${o}-${l}`;
        return /* @__PURE__ */ s.jsx(
          ds,
          {
            operation: e,
            issue: r,
            httpResponse: n[x],
            error: i[x],
            waiting: a[x],
            id: x
          },
          x
        );
      })
    ] }, o))
  ] });
}
const de = f.div`
  margin-top: 8px;
`, Ps = f.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${u.border});
`, As = f.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, Ns = {
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
function Hs() {
  var p, g, m;
  const e = k(), { scanReport: t, operationId: n, responses: i, errors: a, waitings: c, tab: o, issues: r, grouped: l } = $((v) => v.scan);
  if (t === void 0)
    return /* @__PURE__ */ s.jsx(Is, { children: /* @__PURE__ */ s.jsx(_s, { children: "Report is not yet available" }) });
  const x = (g = (p = t.operations) == null ? void 0 : p[n].scenarios) == null ? void 0 : g[0], h = (m = t.operations) == null ? void 0 : m[n];
  return /* @__PURE__ */ s.jsx(
    xt,
    {
      activeTab: o,
      setActiveTab: (v) => e(P(v)),
      tabs: [
        {
          id: "summary",
          title: "Summary",
          content: /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(
              rs,
              {
                issues: r,
                global: t.summary,
                operation: h == null ? void 0 : h.summary
              }
            ),
            x && /* @__PURE__ */ s.jsx(
              ns,
              {
                operation: h,
                issue: x,
                responses: i,
                errors: a,
                waitings: c
              }
            )
          ] })
        },
        {
          id: "tests",
          title: "Tests",
          content: /* @__PURE__ */ s.jsx(
            qs,
            {
              operation: h,
              issues: r,
              grouped: l,
              responses: i,
              errors: a,
              waitings: c
            }
          )
        },
        { id: "logs", title: "Logs", content: /* @__PURE__ */ s.jsx(Ft, {}) }
      ]
    }
  );
}
const Is = f.div``, _s = f.div`
  margin: 1em;
  padding: 10px;
`;
function Ms() {
  const { scanReport: e, waiting: t, error: n } = $((i) => i.scan);
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e && /* @__PURE__ */ s.jsx(Hs, {}),
    /* @__PURE__ */ s.jsx(Dt, {}),
    (t || n) && /* @__PURE__ */ s.jsx(Nt, {})
  ] });
}
const le = [
  // {
  //   id: "start-scan",
  //   title: "Scan is starting",
  //   element: <Starting />,
  //   when: startScan,
  // },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ s.jsx(Ms, {}),
    when: me
  }
], Ds = {
  changeTheme: Ye,
  startScan: me,
  scanOperation: mt,
  showGeneralError: yt,
  showHttpError: jt,
  showHttpResponse: St,
  showScanReport: vt,
  loadEnv: Qe,
  loadPrefs: nt,
  loadConfig: rt,
  showLogMessage: Tt
};
function Ls() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Fe, {}),
    /* @__PURE__ */ s.jsx(Ue, {})
  ] });
}
function Bs(e, t) {
  const n = Pt(At(e, le), t);
  _e(document.getElementById("root")).render(
    /* @__PURE__ */ s.jsx(Me.StrictMode, { children: /* @__PURE__ */ s.jsx(De, { store: n, children: /* @__PURE__ */ s.jsx(Le.Provider, { value: le, children: /* @__PURE__ */ s.jsx(Ls, {}) }) }) })
  ), window.addEventListener("message", Be(n, Ds));
}
window.renderWebView = Bs;
