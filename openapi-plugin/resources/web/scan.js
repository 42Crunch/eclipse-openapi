import { c as he, b as pe, a as Te, u as qe, l as Pe, t as $e, r as Ae, d as ke, s as Ie, i as Ne, e as f, T as u, f as q, j as t, g as He, R as _e, P as Me, h as De, m as Le, k as Be, n as Fe, o as Ue } from "./webapp.dStGtxDE.js";
import { g as Ye, H as Ke, e as ze, s as Ve, b as We, l as Ge } from "./index.CHDSKCzO.js";
import { S as Qe, e as Je, b as Xe, c as Ze } from "./Xmark.-0ABLRej.js";
import { p as et, s as tt, a as st, S as N, l as nt } from "./index.nE7icjwC.js";
import { c as it, l as rt } from "./slice.MW7nD13G.js";
import { s as ot } from "./listener.xg4HYnF3.js";
import { R as ue } from "./Response.NrLogDFW.js";
import { $ as at, a as ct, b as dt, c as lt, d as ht, e as pt } from "./index.3YtBeUW9.js";
import { D as P } from "./datetime.8rVZUDtl.js";
import { S as ut } from "./AngleDown.1P8JpNH0.js";
import { S as ft } from "./AngleUp.FmFQlWks.js";
import { S as H } from "./Check.NOinH2ty.js";
import { S as _ } from "./ExclamationCircle.NcDeerEa.js";
import { P as fe } from "./Select.eMc73ch1.js";
import { T as xt } from "./Tabs.EvVwZ0qc.js";
import "./index.hzKdP6cc.js";
import "./downshift.esm.WyR76k9W.js";
import "./index.esm.XbmwboKu.js";
const gt = {
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
  titles: []
}, xe = he({
  name: "scan",
  initialState: gt,
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
      const { oas: n, path: i, method: r } = s.payload, d = Ye(n, i, r), a = (d == null ? void 0 : d.operationId) === void 0 ? `${i}:${r}` : d.operationId;
      e.operationId = a, e.oas = n, e.path = i, e.method = r;
      const o = Ct(s.payload.report, e.path, e.operationId), x = ae(o, e.filter), { titles: h } = M(o), { grouped: l } = M(x);
      e.issues = o, e.titles = h, e.grouped = l, e.scanReport = s.payload.report, e.waiting = !1;
    },
    changeFilter: (e, s) => {
      e.filter = s.payload;
      const n = ae(e.issues, e.filter), { grouped: i } = M(n);
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
  startScan: ge,
  scanOperation: mt,
  runScan: rn,
  showScanReport: vt,
  showGeneralError: yt,
  showHttpError: jt,
  sendHttpRequest: bt,
  sendCurlRequest: me,
  showHttpResponse: St,
  showJsonPointer: ve,
  showAuditReport: wt,
  changeTab: A,
  changeFilter: w
} = xe.actions;
function Ct(e, s, n) {
  var r, d, a, o, x;
  const i = [];
  for (const h of [
    "conformanceRequestsResults",
    "authorizationRequestsResults",
    "customRequestsResults"
  ]) {
    const l = (d = (r = e == null ? void 0 : e.operations) == null ? void 0 : r[n]) == null ? void 0 : d[h];
    l !== void 0 && i.push(...l);
  }
  for (const h of Ke) {
    const l = (x = (o = (a = e == null ? void 0 : e.methodNotAllowed) == null ? void 0 : a[s]) == null ? void 0 : o[h]) == null ? void 0 : x.conformanceRequestsResults;
    l !== void 0 && i.push(...l);
  }
  return i;
}
function ae(e, s) {
  const n = (d) => {
    var a;
    return (s == null ? void 0 : s.title) === void 0 || ((a = d.test) == null ? void 0 : a.key) === s.title;
  }, i = s.severity !== void 0 ? Qe.indexOf(s.severity) + 1 : 0, r = (d) => {
    var a, o;
    return s.severity === void 0 || ((a = d.outcome) == null ? void 0 : a.criticality) === void 0 || ((o = d.outcome) == null ? void 0 : o.criticality) >= i;
  };
  return e.filter((d) => n(d) && r(d));
}
function M(e) {
  var r, d;
  const s = {}, n = {};
  for (const a of e) {
    const o = (r = a.test) == null ? void 0 : r.key;
    o !== void 0 && (s[o] === void 0 && (s[o] = [], n[o] = (d = a.test) == null ? void 0 : d.description), s[o].push(a));
  }
  const i = Object.keys(s);
  for (const a of i)
    s[a].sort((o, x) => {
      var h, l, p, g, m, v, y, b, O, T;
      if (((h = o.outcome) == null ? void 0 : h.status) !== ((l = x.outcome) == null ? void 0 : l.status)) {
        if (((p = o.outcome) == null ? void 0 : p.status) === "error")
          return -1;
        if (((g = x.outcome) == null ? void 0 : g.status) === "error")
          return 1;
        if (((m = o.outcome) == null ? void 0 : m.status) === "defective")
          return -1;
        if (((v = x.outcome) == null ? void 0 : v.status) === "defective")
          return 1;
      }
      return ((y = o.outcome) == null ? void 0 : y.criticality) !== ((b = x.outcome) == null ? void 0 : b.criticality) ? ((O = o.outcome) == null ? void 0 : O.criticality) - ((T = x.outcome) == null ? void 0 : T.criticality) : 0;
    });
  return { grouped: s, titles: Object.keys(n) };
}
const Et = xe.reducer, Rt = {
  messages: []
}, ye = he({
  name: "logging",
  initialState: Rt,
  reducers: {
    showLogMessage: (e, s) => {
      e.messages.push(s.payload);
    },
    clearLogs: (e) => {
      e.messages = [];
    }
  }
}), { showLogMessage: Ot, clearLogs: on } = ye.actions, je = pe, Tt = ye.reducer, qt = {
  theme: $e,
  scan: Et,
  router: Ae,
  env: ze,
  prefs: et,
  config: it,
  logging: Tt
}, Pt = (e, s) => Te({
  reducer: qt,
  middleware: (n) => n().prepend(e.middleware).concat(Pe),
  preloadedState: {
    theme: s
  }
}), E = () => qe(), R = pe, be = ke(), C = be.startListening;
function $t(e, s) {
  const n = {
    savePrefs: () => C({
      matcher: Ne(tt, st),
      effect: async (i, r) => {
        const { prefs: d } = r.getState();
        e.postMessage({
          command: "savePrefs",
          payload: d
        });
      }
    }),
    sendHttpRequest: () => C({
      actionCreator: bt,
      effect: async (i, r) => {
        e.postMessage({
          command: "sendHttpRequest",
          payload: i.payload
        });
      }
    }),
    sendCurlRequest: () => C({
      actionCreator: me,
      effect: async (i, r) => {
        e.postMessage({
          command: "sendCurlRequest",
          payload: i.payload
        });
      }
    }),
    showJsonPointer: () => C({
      actionCreator: ve,
      effect: async (i, r) => {
        e.postMessage({
          command: "showJsonPointer",
          payload: i.payload
        });
      }
    }),
    showAuditReport: () => C({
      actionCreator: wt,
      effect: async (i, r) => {
        e.postMessage({
          command: "showAuditReport",
          payload: void 0
        });
      }
    }),
    showEnvWindow: () => C({
      actionCreator: Ve,
      effect: async (i, r) => {
        e.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return ot(C, s), Ie(n), be;
}
function At() {
  const s = je((a) => a.logging.messages).filter((a) => !0), n = q.useRef(null), [i, r] = q.useState(!1);
  if (q.useEffect(() => {
    n.current && !i && (n.current.scrollTop = n.current.scrollHeight);
  }, [s, i]), s.length === 0)
    return null;
  const d = () => {
    const a = n.current;
    if (a) {
      const o = a.scrollTop, x = a.scrollHeight, h = a.clientHeight;
      x - (o + h) < 10 ? r(!1) : r(!0);
    }
  };
  return /* @__PURE__ */ t.jsx(Ht, { children: /* @__PURE__ */ t.jsx(It, { ref: n, onScroll: d, children: s.map((a, o, x) => /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx(kt, { first: o === 0, last: o === x.length - 1 }),
    /* @__PURE__ */ t.jsx("div", { children: a.message })
  ] }, o)) }) });
}
function kt({ first: e, last: s }) {
  return /* @__PURE__ */ t.jsxs(Nt, { first: e, last: s, children: [
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {})
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
`, Nt = f.div`
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
`, Ht = f.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${u.border});
`;
function _t() {
  const e = R((s) => s.scan.error);
  return e ? /* @__PURE__ */ t.jsx(Dt, { children: /* @__PURE__ */ t.jsxs(Mt, { children: [
    /* @__PURE__ */ t.jsx("div", { children: e.message }),
    e.details && /* @__PURE__ */ t.jsx("div", { children: e.details })
  ] }) }) : null;
}
const Mt = f.div`
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
`, Dt = f.div`
  padding: 8px;
`;
function Lt() {
  const s = je((n) => n.logging.messages).filter((n) => !0);
  return s.length === 0 ? null : /* @__PURE__ */ t.jsx(Ft, { children: s.map((n, i, r) => /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx(Bt, { first: i === 0, last: i === r.length - 1 }),
    /* @__PURE__ */ t.jsx("div", { children: n.message })
  ] }, i)) });
}
function Bt({ first: e, last: s }) {
  return /* @__PURE__ */ t.jsxs(Ut, { first: e, last: s, children: [
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {})
  ] });
}
const Ft = f.div`
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
`, Ut = f.div`
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
var Se = c.kOnHeaders = 1, D = c.kOnHeadersComplete = 2, k = c.kOnBody = 3, L = c.kOnMessageComplete = 4;
c.prototype[Se] = c.prototype[D] = c.prototype[k] = c.prototype[L] = function() {
};
var we = !0;
Object.defineProperty(c, "kOnExecute", {
  get: function() {
    return we = !1, 99;
  }
});
var Ce = c.methods = [
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
], Ee = Ce.indexOf("CONNECT");
c.prototype.reinitialize = c;
c.prototype.close = c.prototype.pause = c.prototype.resume = c.prototype.free = function() {
};
c.prototype._compatMode0_11 = !1;
c.prototype.getAsyncId = function() {
  return 0;
};
var Yt = {
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
  return this.chunk = null, n = this.offset - s, Yt[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || c.maxHeaderSize)) ? new Error("max header size exceeded") : n;
};
var Kt = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
c.prototype.finish = function() {
  if (!this.hadError) {
    if (!Kt[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[L]());
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
  this.userCall()(this[L]()), this.reinitialize(this.type);
};
c.prototype.consumeLine = function() {
  for (var e = this.end, s = this.chunk, n = this.offset; n < e; n++)
    if (s[n] === 10) {
      var i = this.line + s.toString(c.encoding, this.offset, n);
      return i.charAt(i.length - 1) === "\r" && (i = i.substr(0, i.length - 1)), this.line = "", this.offset = n + 1, i;
    }
  this.line += s.toString(c.encoding, this.offset, this.end), this.offset = this.end;
};
var zt = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Vt = /^[ \t]+(.*[^ \t])/;
c.prototype.parseHeader = function(e, s) {
  if (e.indexOf("\r") !== -1)
    throw I("HPE_LF_EXPECTED");
  var n = zt.exec(e), i = n && n[1];
  if (i)
    s.push(i), s.push(n[2]);
  else {
    var r = Vt.exec(e);
    r && s.length && (s[s.length - 1] && (s[s.length - 1] += " "), s[s.length - 1] += r[1]);
  }
};
var Wt = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
c.prototype.REQUEST_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var s = Wt.exec(e);
    if (s === null)
      throw I("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? s[1] : Ce.indexOf(s[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = s[2], this.info.versionMajor = +s[3], this.info.versionMinor = +s[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var Gt = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
c.prototype.RESPONSE_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var s = Gt.exec(e);
    if (s === null)
      throw I("HPE_INVALID_CONSTANT");
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
      for (var n = s.headers, i = !1, r, d = !1, a = 0; a < n.length; a += 2)
        switch (n[a].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = n[a + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (r = +n[a + 1], i) {
              if (r !== this.body_bytes)
                throw I("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              i = !0, this.body_bytes = r;
            break;
          case "connection":
            this.connection += n[a + 1].toLowerCase();
            break;
          case "upgrade":
            d = !0;
            break;
        }
      this.isChunked && i && (i = !1, this.body_bytes = null), d && this.connection.indexOf("upgrade") != -1 ? s.upgrade = this.type === c.REQUEST || s.statusCode === 101 : s.upgrade = s.method === Ee, this.isChunked && s.upgrade && (this.isChunked = !1), s.shouldKeepAlive = this.shouldKeepAlive();
      var o;
      if (we ? o = this.userCall()(this[D](s)) : o = this.userCall()(this[D](
        s.versionMajor,
        s.versionMinor,
        s.headers,
        s.method,
        s.url,
        s.statusCode,
        s.statusMessage,
        s.upgrade,
        s.shouldKeepAlive
      )), o === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !o)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (o || this.body_bytes === 0)
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
  this.userCall()(this[k](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
c.prototype.BODY_CHUNKEMPTYLINE = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
c.prototype.BODY_CHUNKTRAILERS = function() {
  var e = this.consumeLine();
  e !== void 0 && (e ? this.parseHeader(e, this.trailers) : (this.trailers.length && this.userCall()(this[Se](this.trailers, "")), this.nextRequest()));
};
c.prototype.BODY_RAW = function() {
  var e = this.end - this.offset;
  this.userCall()(this[k](this.chunk, this.offset, e)), this.offset = this.end;
};
c.prototype.BODY_SIZED = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[k](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(e) {
  var s = c["kOn" + e];
  Object.defineProperty(c.prototype, "on" + e, {
    get: function() {
      return this[s];
    },
    set: function(n) {
      return this._compatMode0_11 = !0, Ee = "CONNECT", this[s] = n;
    }
  });
});
function I(e) {
  var s = new Error("Parse Error");
  return s.code = e, s;
}
function Re(e) {
  if (e === void 0)
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  try {
    return Qt(We.Buffer.from(e, "base64"));
  } catch {
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  }
}
function Qt(e) {
  const s = new c(c.RESPONSE);
  let n = !1, i = 0, r, d, a = [], o = [];
  if (s[c.kOnHeadersComplete] = function(l) {
    l.shouldKeepAlive, l.upgrade, i = l.statusCode, l.statusMessage, r = l.versionMajor, d = l.versionMinor, a = l.headers;
  }, s[c.kOnBody] = function(l, p, g) {
    o.push(l.slice(p, p + g));
  }, s[c.kOnHeaders] = function(l) {
  }, s[c.kOnMessageComplete] = function() {
    n = !0;
  }, s.execute(e), s.finish(), !n)
    throw new Error("Could not parse");
  let x = o.join("");
  const h = [];
  for (let l = 0; l < a.length - 1; l++)
    l % 2 === 0 && h.push([a[l], a[l + 1]]);
  return {
    headers: h,
    statusCode: i,
    httpVersion: `${r}.${d}`,
    body: x
  };
}
function Oe({
  curl: e,
  id: s,
  waiting: n
}) {
  const i = E();
  return /* @__PURE__ */ t.jsx(Jt, { children: /* @__PURE__ */ t.jsxs(Xt, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
    /* @__PURE__ */ t.jsx(dt, { children: /* @__PURE__ */ t.jsxs(lt, { children: [
      /* @__PURE__ */ t.jsx(ht, { asChild: !0, children: /* @__PURE__ */ t.jsx("span", { children: /* @__PURE__ */ t.jsx(
        Je,
        {
          onClick: (r) => {
            r.preventDefault(), r.stopPropagation(), i(me(e));
          }
        }
      ) }) }),
      /* @__PURE__ */ t.jsx(pt, { children: /* @__PURE__ */ t.jsxs(Zt, { sideOffset: 5, children: [
        "Copy cURL command to the clipboard",
        /* @__PURE__ */ t.jsx(es, {})
      ] }) })
    ] }) }),
    e
  ] }) });
}
const Jt = f.div``, Xt = f.div`
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
`, Zt = f(at)`
  color: var(${u.notificationsForeground});
  background-color: var(${u.notificationsBackground});
  border: 1px solid var(${u.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, es = f(ct)`
  fill: var(${u.notificationsForeground});
`;
function ts({
  operation: e,
  issue: s,
  responses: n,
  errors: i,
  waitings: r
}) {
  var y, b;
  const { request: d, response: a, outcome: o, happyPath: x } = s, h = !e.fuzzed;
  let l = "N/A";
  const p = ((y = s == null ? void 0 : s.outcome) == null ? void 0 : y.status) === "correct" ? "Yes" : "No";
  p === "Yes" && (l = o != null && o.conformant ? "Yes" : "No");
  const g = n["happy-path"], m = i["happy-path"], v = r["happy-path"];
  return /* @__PURE__ */ t.jsxs(ss, { children: [
    /* @__PURE__ */ t.jsx(S, { children: /* @__PURE__ */ t.jsx("div", { style: { opacity: 1 }, children: /* @__PURE__ */ t.jsx("b", { children: "Happy Path Testing results" }) }) }),
    /* @__PURE__ */ t.jsxs(S, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Test Status" }),
      /* @__PURE__ */ t.jsx("div", { children: h ? "Failed" : "Passed" })
    ] }),
    /* @__PURE__ */ t.jsxs(S, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        a == null ? void 0 : a.httpStatusCode,
        " (Expected: ",
        (b = x == null ? void 0 : x.httpStatusExpected) == null ? void 0 : b.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs(S, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ t.jsx("div", { children: p })
    ] }),
    /* @__PURE__ */ t.jsxs(S, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ t.jsx("div", { children: l })
    ] }),
    (d == null ? void 0 : d.curl) && /* @__PURE__ */ t.jsxs(S, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Request" }),
      /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(Oe, { curl: d == null ? void 0 : d.curl, id: "happy-path", waiting: v }) })
    ] }),
    ((a == null ? void 0 : a.rawPayload) || g) && /* @__PURE__ */ t.jsxs(S, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Response" }),
      /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(
        ue,
        {
          accented: !0,
          response: g || Re(a.rawPayload)
        }
      ) })
    ] }),
    ((o == null ? void 0 : o.error) || m) && /* @__PURE__ */ t.jsxs(S, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Error" }),
      /* @__PURE__ */ t.jsx("div", { children: m ? m.message : o == null ? void 0 : o.error })
    ] })
  ] });
}
const ss = f.div`
  margin: 8px;
  border: 1px solid var(${u.border});
`, S = f.div`
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
function ns({
  global: e,
  operation: s,
  issues: n,
  scanVersion: i
}) {
  var x;
  const r = E(), d = (e.conformanceTestRequests.executed.total ?? 0) + (e.authorizationTestRequests.executed.total ?? 0) + (e.customTestRequests.executed.total ?? 0) + (((x = e.methodNotAllowedTestRequests) == null ? void 0 : x.executed.total) ?? 0), a = (n == null ? void 0 : n.length) | 0, o = n.filter(
    (h) => {
      var l, p;
      return ((l = h == null ? void 0 : h.outcome) == null ? void 0 : l.criticality) && ((p = h.outcome) == null ? void 0 : p.criticality) >= 4;
    }
  ).length;
  return /* @__PURE__ */ t.jsxs(is, { children: [
    /* @__PURE__ */ t.jsxs(os, { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ t.jsx("b", { children: e.state }),
        " (Exit code: ",
        e.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ t.jsx("div", { children: P.fromISO(e.endDate).toLocaleString(P.DATETIME_MED) }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        "Execution time:",
        " ",
        P.fromISO(e.endDate).diff(P.fromISO(e.startDate)).toFormat("mm:ss.SSS")
      ] }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        "Scan version: ",
        i
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs(rs, { children: [
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          onClick: (h) => {
            h.preventDefault(), h.stopPropagation(), r(A("tests")), r(w({}));
          },
          children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              d,
              " ",
              /* @__PURE__ */ t.jsx(N, {})
            ] }),
            /* @__PURE__ */ t.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          onClick: (h) => {
            h.preventDefault(), h.stopPropagation(), r(A("tests")), r(w({}));
          },
          children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              a ?? 0,
              " ",
              /* @__PURE__ */ t.jsx(N, {})
            ] }),
            /* @__PURE__ */ t.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          onClick: (h) => {
            h.preventDefault(), h.stopPropagation(), r(A("tests")), r(w({ severity: "high" }));
          },
          children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              o,
              " ",
              /* @__PURE__ */ t.jsx(N, {})
            ] }),
            /* @__PURE__ */ t.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const is = f.div`
  margin: 8px;
`, rs = f.div`
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
`, os = f.div`
  display: flex;
  border: 1px solid var(${u.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${u.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function as({
  operation: e,
  issue: s,
  httpResponse: n,
  error: i,
  id: r,
  waiting: d
}) {
  var T, B, F, U, Y, K, z, V, W, G, Q, J, X, Z, ee, te, se, ne, ie;
  const a = E(), [o, x] = q.useState(!0), { response: h, test: l, outcome: p } = s, g = (p == null ? void 0 : p.status) === "correct", m = p == null ? void 0 : p.conformant, v = !(g && m);
  let y = "N/A", b = "N/A";
  const O = ((B = (T = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : T[0]) == null ? void 0 : B.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  return O === "Yes" && (y = ((U = (F = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : F[0]) == null ? void 0 : U.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), y === "Yes" && (b = ((K = (Y = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : Y[0]) == null ? void 0 : K.responseKey) === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ t.jsxs(cs, { children: [
    /* @__PURE__ */ t.jsxs(ds, { collapsed: o, onClick: () => x(!o), children: [
      /* @__PURE__ */ t.jsx("div", { children: o ? /* @__PURE__ */ t.jsx(ut, {}) : /* @__PURE__ */ t.jsx(ft, {}) }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx(ls, { children: (z = s.test) == null ? void 0 : z.description }),
        /* @__PURE__ */ t.jsxs(hs, { children: [
          v ? /* @__PURE__ */ t.jsxs($, { children: [
            /* @__PURE__ */ t.jsx(_, {}),
            " Failed",
            s.outcome.criticality > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              "/",
              /* @__PURE__ */ t.jsxs("span", { style: { fontWeight: fs[p.criticality] }, children: [
                " ",
                us[p.criticality]
              ] })
            ] })
          ] }) : /* @__PURE__ */ t.jsxs($, { children: [
            /* @__PURE__ */ t.jsx(H, {}),
            " Passed"
          ] }),
          v && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx($, { children: g ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(H, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(_, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ t.jsx($, { children: m ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(H, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(_, {}),
              " Conforms to Contract: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !o && /* @__PURE__ */ t.jsxs(ps, { children: [
      /* @__PURE__ */ t.jsxs(j, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "HTTP code received" }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          (V = s.response) == null ? void 0 : V.httpStatusCode,
          " (Expected:",
          " ",
          (G = (W = s.test) == null ? void 0 : W.httpStatusExpected) == null ? void 0 : G.join(", "),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs(j, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Response code found in API Contract" }),
        /* @__PURE__ */ t.jsx("div", { children: O })
      ] }),
      /* @__PURE__ */ t.jsxs(j, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Content-Type found in API Contract" }),
        /* @__PURE__ */ t.jsx("div", { children: y })
      ] }),
      /* @__PURE__ */ t.jsxs(j, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Response matches API Contract" }),
        /* @__PURE__ */ t.jsx("div", { children: b })
      ] }),
      ((J = (Q = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : Q[0]) == null ? void 0 : J.responseDescription) && /* @__PURE__ */ t.jsxs(j, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Response analysis" }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          " ",
          (Z = (X = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : X[0]) == null ? void 0 : Z.responseDescription
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs(j, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "JSON Pointer" }),
        /* @__PURE__ */ t.jsx("div", { children: (ee = s.test) != null && ee.jsonPointer ? /* @__PURE__ */ t.jsx(
          "a",
          {
            href: "#",
            onClick: (re) => {
              var oe;
              re.preventDefault(), re.stopPropagation(), a(
                ve(((oe = s.test) == null ? void 0 : oe.jsonPointer) + "")
                // FIXME support indexed reports
              );
            },
            children: (te = s.test) == null ? void 0 : te.jsonPointer
          }
        ) : "N/A" })
      ] }),
      ((se = s.request) == null ? void 0 : se.curl) && /* @__PURE__ */ t.jsxs(j, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Request" }),
        /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(Oe, { waiting: d, curl: s.request.curl, id: r }) })
      ] }),
      i === void 0 && (n !== void 0 || ((ne = s.response) == null ? void 0 : ne.rawPayload) !== void 0) && /* @__PURE__ */ t.jsxs(j, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Response" }),
        /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(
          ue,
          {
            accented: !0,
            response: n || Re((ie = s.response) == null ? void 0 : ie.rawPayload)
          }
        ) })
      ] }),
      i && /* @__PURE__ */ t.jsxs(j, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Error" }),
        /* @__PURE__ */ t.jsx("div", { children: i == null ? void 0 : i.message })
      ] })
    ] })
  ] });
}
const cs = f.div`
  margin: 8px;
  border: 1px solid var(${u.border});
`, ds = f.div`
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
`, ls = f.div`
  font-weight: 600;
`, hs = f.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, $ = f.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${u.foreground});
  }
`, ps = f.div`
  background-color: var(${u.computedOne});
`, j = f.div`
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
`, us = {
  0: "None",
  1: "Info",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Critical"
}, fs = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700,
  5: 700
};
function xs({
  filters: e,
  onClick: s
}) {
  return /* @__PURE__ */ t.jsx(
    gs,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), s();
      },
      children: /* @__PURE__ */ t.jsxs(vs, { children: [
        /* @__PURE__ */ t.jsx(Xe, {}),
        e !== 0 && /* @__PURE__ */ t.jsx(ms, { children: e })
      ] })
    }
  );
}
const gs = f.div`
  width: 34px;
  height: 26px;
  position: relative;
`, ms = f.div`
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
`, vs = f.button`
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
function ys() {
  const e = E();
  return /* @__PURE__ */ t.jsxs(
    js,
    {
      onClick: (s) => {
        e(w({})), s.preventDefault(), s.stopPropagation();
      },
      children: [
        /* @__PURE__ */ t.jsx(Ze, {}),
        " ",
        /* @__PURE__ */ t.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const js = f.div`
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
function bs() {
  const e = R((i) => i.scan.filter), s = E(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ t.jsx(Ss, { children: /* @__PURE__ */ t.jsx(
    fe,
    {
      label: "Severity",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (i) => {
        i && i.value !== "all" ? s(w({ ...e, severity: i == null ? void 0 : i.value })) : s(w({ ...e, severity: void 0 }));
      },
      selected: (e == null ? void 0 : e.severity) || "all"
    }
  ) });
}
const Ss = f.div`
  width: 264px;
`;
function ws() {
  const { filter: e, titles: s } = R((r) => r.scan), n = E(), i = [];
  for (const r of s)
    ce[r] && i.push({ label: ce[r], value: r });
  return /* @__PURE__ */ t.jsx(Cs, { children: /* @__PURE__ */ t.jsx(
    fe,
    {
      label: "Type",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? n(w({ ...e, title: r.value })) : n(w({ ...e, title: void 0 }));
      },
      selected: e.title || "all"
    }
  ) });
}
const Cs = f.div`
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
function Es() {
  const { filter: e, grouped: s } = R((o) => o.scan), [n, i] = q.useState(!0), d = ["severity", "title"].filter((o) => e && e[o] !== void 0).length, a = Object.keys(s).map((o) => s[o].length).reduce((o, x) => o + x, 0);
  return /* @__PURE__ */ t.jsxs(Rs, { children: [
    /* @__PURE__ */ t.jsxs(Os, { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        a,
        " issues"
      ] }),
      /* @__PURE__ */ t.jsx(xs, { filters: d, onClick: () => i(!n) })
    ] }),
    !n && /* @__PURE__ */ t.jsxs(Ts, { children: [
      /* @__PURE__ */ t.jsx(bs, {}),
      /* @__PURE__ */ t.jsx(ws, {}),
      /* @__PURE__ */ t.jsx(ys, {})
    ] })
  ] });
}
const Rs = f.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, Os = f.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, Ts = f.div`
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
  issues: s,
  responses: n,
  errors: i,
  waitings: r,
  grouped: d
}) {
  return s.length === 0 ? /* @__PURE__ */ t.jsx(de, { children: /* @__PURE__ */ t.jsx(Ps, { children: "No test results available" }) }) : /* @__PURE__ */ t.jsxs(de, { children: [
    /* @__PURE__ */ t.jsx(Es, {}),
    Object.keys(d).map((a) => /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx($s, { children: As[a] ?? "Unknown test type" }),
      d[a].map((o, x) => {
        const h = `${a}-${x}`;
        return /* @__PURE__ */ t.jsx(
          as,
          {
            operation: e,
            issue: o,
            httpResponse: n[h],
            error: i[h],
            waiting: r[h],
            id: h
          },
          h
        );
      })
    ] }, a))
  ] });
}
const de = f.div`
  margin-top: 8px;
`, Ps = f.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${u.border});
`, $s = f.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, As = {
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
function ks() {
  var p, g, m;
  const e = E(), { scanReport: s, operationId: n, responses: i, errors: r, waitings: d, tab: a, issues: o, grouped: x } = R((v) => v.scan);
  if (s === void 0)
    return /* @__PURE__ */ t.jsx(Is, { children: /* @__PURE__ */ t.jsx(Ns, { children: "Report is not yet available" }) });
  const h = (g = (p = s.operations) == null ? void 0 : p[n].scenarios) == null ? void 0 : g[0], l = (m = s.operations) == null ? void 0 : m[n];
  return /* @__PURE__ */ t.jsx(
    xt,
    {
      activeTab: a,
      setActiveTab: (v) => e(A(v)),
      tabs: [
        {
          id: "summary",
          title: "Summary",
          content: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(
              ns,
              {
                issues: o,
                global: s.summary,
                scanVersion: s.scanVersion,
                operation: l == null ? void 0 : l.summary
              }
            ),
            h && /* @__PURE__ */ t.jsx(
              ts,
              {
                operation: l,
                issue: h,
                responses: i,
                errors: r,
                waitings: d
              }
            )
          ] })
        },
        {
          id: "tests",
          title: "Tests",
          content: /* @__PURE__ */ t.jsx(
            qs,
            {
              operation: l,
              issues: o,
              grouped: x,
              responses: i,
              errors: r,
              waitings: d
            }
          )
        },
        { id: "logs", title: "Logs", content: /* @__PURE__ */ t.jsx(Lt, {}) }
      ]
    }
  );
}
const Is = f.div``, Ns = f.div`
  margin: 1em;
  padding: 10px;
`;
function Hs() {
  const { scanReport: e, waiting: s, error: n } = R((i) => i.scan);
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    e && /* @__PURE__ */ t.jsx(ks, {}),
    /* @__PURE__ */ t.jsx(_t, {}),
    (s || n) && /* @__PURE__ */ t.jsx(At, {})
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
    element: /* @__PURE__ */ t.jsx(Hs, {}),
    when: ge
  }
], _s = {
  changeTheme: Ue,
  startScan: ge,
  scanOperation: mt,
  showGeneralError: yt,
  showHttpError: jt,
  showHttpResponse: St,
  showScanReport: vt,
  loadEnv: Ge,
  loadPrefs: nt,
  loadConfig: rt,
  showLogMessage: Ot
};
function Ms() {
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Be, {}),
    /* @__PURE__ */ t.jsx(Fe, {})
  ] });
}
function Ds(e, s) {
  const n = Pt($t(e, le), s);
  He(document.getElementById("root")).render(
    /* @__PURE__ */ t.jsx(_e.StrictMode, { children: /* @__PURE__ */ t.jsx(Me, { store: n, children: /* @__PURE__ */ t.jsx(De.Provider, { value: le, children: /* @__PURE__ */ t.jsx(Ms, {}) }) }) })
  ), window.addEventListener("message", Le(n, _s));
}
window.renderWebView = Ds;
