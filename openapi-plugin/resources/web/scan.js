import { c as ie, b as re, a as be, u as Se, l as we, t as Ce, r as Ee, d as Re, s as Oe, i as Te, q as f, T as u, e as q, j as e, f as Pe, R as $e, P as qe, g as Ae, m as ke, h as Ie, k as Ne, n as He } from "./extends.lDO40HzL.js";
import { g as _e, H as Me, e as De, s as Le, b as Be, l as Fe } from "./slice.BaDywrt4.js";
import { S as Ue, e as Ye, b as Ke, c as ze } from "./Xmark.D83KUlPs.js";
import { p as Ve, s as We, a as Ge, S as _, l as Qe } from "./index.CJvbMvvQ.js";
import { c as Je, l as Xe } from "./slice.vUkCMNtF.js";
import { s as Ze } from "./listener.wKhZf4Un.js";
import { R as oe } from "./Response.CfyXL7Zx.js";
import { $ as et, a as tt, b as st, c as nt, d as it, e as rt } from "./index.B4P2hb6_.js";
import { D as A } from "./datetime.BMKtNb6j.js";
import { S as ot } from "./AngleDown.Bd1A6fn9.js";
import { S as at } from "./AngleUp.DkgGLPvP.js";
import { S as M } from "./Check.DLtIyRsQ.js";
import { S as k } from "./ExclamationCircle.BCxicLph.js";
import { P as ae } from "./Select.DqkVWCgl.js";
import { T as ct } from "./Tabs.Dk4klX6L.js";
const dt = {
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
}, ce = ie({
  name: "scan",
  initialState: dt,
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
      const { oas: n, path: i, method: r } = s.payload, l = _e(n, i, r), a = (l == null ? void 0 : l.operationId) === void 0 ? `${i}:${r}` : l.operationId;
      t.operationId = a, t.oas = n, t.path = i, t.method = r;
      const o = mt(s.payload.report, t.path, t.operationId), x = ee(o, t.filter), { titles: h } = D(o), { grouped: d } = D(x);
      t.issues = o, t.titles = h, t.grouped = d, t.scanReport = s.payload.report, t.waiting = !1;
    },
    changeFilter: (t, s) => {
      t.filter = s.payload;
      const n = ee(t.issues, t.filter), { grouped: i } = D(n);
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
  startScan: de,
  scanOperation: lt,
  runScan: Ws,
  showScanReport: ht,
  showGeneralError: pt,
  showHttpError: ut,
  sendHttpRequest: ft,
  sendCurlRequest: le,
  showHttpResponse: xt,
  showJsonPointer: he,
  showAuditReport: gt,
  changeTab: I,
  changeFilter: C
} = ce.actions;
function mt(t, s, n) {
  var r, l, a, o, x;
  const i = [];
  for (const h of [
    "conformanceRequestsResults",
    "authorizationRequestsResults",
    "customRequestsResults"
  ]) {
    const d = (l = (r = t == null ? void 0 : t.operations) == null ? void 0 : r[n]) == null ? void 0 : l[h];
    d !== void 0 && i.push(...d);
  }
  for (const h of Me) {
    const d = (x = (o = (a = t == null ? void 0 : t.methodNotAllowed) == null ? void 0 : a[s]) == null ? void 0 : o[h]) == null ? void 0 : x.conformanceRequestsResults;
    d !== void 0 && i.push(...d);
  }
  return i;
}
function ee(t, s) {
  const n = (l) => {
    var a;
    return (s == null ? void 0 : s.title) === void 0 || ((a = l.test) == null ? void 0 : a.key) === s.title;
  }, i = s.severity !== void 0 ? Ue.indexOf(s.severity) + 1 : 0, r = (l) => {
    var a, o;
    return s.severity === void 0 || ((a = l.outcome) == null ? void 0 : a.criticality) === void 0 || ((o = l.outcome) == null ? void 0 : o.criticality) >= i;
  };
  return t.filter((l) => n(l) && r(l));
}
function D(t) {
  var r, l;
  const s = {}, n = {};
  for (const a of t) {
    const o = (r = a.test) == null ? void 0 : r.key;
    o !== void 0 && (s[o] === void 0 && (s[o] = [], n[o] = (l = a.test) == null ? void 0 : l.description), s[o].push(a));
  }
  const i = Object.keys(s);
  for (const a of i)
    s[a].sort((o, x) => {
      var h, d, g, p, m, v, j, b, T, P;
      if (((h = o.outcome) == null ? void 0 : h.status) !== ((d = x.outcome) == null ? void 0 : d.status)) {
        if (((g = o.outcome) == null ? void 0 : g.status) === "error")
          return -1;
        if (((p = x.outcome) == null ? void 0 : p.status) === "error")
          return 1;
        if (((m = o.outcome) == null ? void 0 : m.status) === "defective")
          return -1;
        if (((v = x.outcome) == null ? void 0 : v.status) === "defective")
          return 1;
      }
      return ((j = o.outcome) == null ? void 0 : j.criticality) !== ((b = x.outcome) == null ? void 0 : b.criticality) ? ((T = o.outcome) == null ? void 0 : T.criticality) - ((P = x.outcome) == null ? void 0 : P.criticality) : 0;
    });
  return { grouped: s, titles: Object.keys(n) };
}
const vt = ce.reducer, yt = {
  messages: []
}, pe = ie({
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
}), { showLogMessage: jt, clearLogs: Gs } = pe.actions, ue = re, bt = pe.reducer, St = {
  theme: Ce,
  scan: vt,
  router: Ee,
  env: De,
  prefs: Ve,
  config: Je,
  logging: bt
}, wt = (t, s) => be({
  reducer: St,
  middleware: (n) => n().prepend(t.middleware).concat(we),
  preloadedState: {
    theme: s
  }
}), R = () => Se(), O = re, fe = Re(), E = fe.startListening;
function Ct(t, s) {
  const n = {
    savePrefs: () => E({
      matcher: Te(Ge, We),
      effect: async (i, r) => {
        const { prefs: l } = r.getState();
        t.postMessage({
          command: "savePrefs",
          payload: l
        });
      }
    }),
    sendHttpRequest: () => E({
      actionCreator: ft,
      effect: async (i, r) => {
        t.postMessage({
          command: "sendHttpRequest",
          payload: i.payload
        });
      }
    }),
    sendCurlRequest: () => E({
      actionCreator: le,
      effect: async (i, r) => {
        t.postMessage({
          command: "sendCurlRequest",
          payload: i.payload
        });
      }
    }),
    showJsonPointer: () => E({
      actionCreator: he,
      effect: async (i, r) => {
        t.postMessage({
          command: "showJsonPointer",
          payload: i.payload
        });
      }
    }),
    showAuditReport: () => E({
      actionCreator: gt,
      effect: async (i, r) => {
        t.postMessage({
          command: "showAuditReport",
          payload: void 0
        });
      }
    }),
    showEnvWindow: () => E({
      actionCreator: Le,
      effect: async (i, r) => {
        t.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return Ze(E, s), Oe(n), fe;
}
function Et() {
  const s = ue((a) => a.logging.messages).filter((a) => !0), n = q.useRef(null), [i, r] = q.useState(!1);
  if (q.useEffect(() => {
    n.current && !i && (n.current.scrollTop = n.current.scrollHeight);
  }, [s, i]), s.length === 0)
    return null;
  const l = () => {
    const a = n.current;
    if (a) {
      const o = a.scrollTop, x = a.scrollHeight, h = a.clientHeight;
      x - (o + h) < 10 ? r(!1) : r(!0);
    }
  };
  return /* @__PURE__ */ e.jsx(Pt, { children: /* @__PURE__ */ e.jsx(Ot, { ref: n, onScroll: l, children: s.map((a, o, x) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(Rt, { first: o === 0, last: o === x.length - 1 }),
    /* @__PURE__ */ e.jsx("div", { children: a.message })
  ] }, o)) }) });
}
function Rt({ first: t, last: s }) {
  return /* @__PURE__ */ e.jsxs(Tt, { first: t, last: s, children: [
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {})
  ] });
}
const Ot = f.div`
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
`, Tt = f.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ first: t }) => !t && `background-color: var(${u.border});`}
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
    ${({ last: t }) => !t && `background-color: var(${u.border});`}
  }
`, Pt = f.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${u.border});
`;
function $t() {
  const t = O((s) => s.scan.error);
  return t ? /* @__PURE__ */ e.jsx(At, { children: /* @__PURE__ */ e.jsxs(qt, { children: [
    /* @__PURE__ */ e.jsx("div", { children: t.message }),
    t.details && /* @__PURE__ */ e.jsx("div", { children: t.details })
  ] }) }) : null;
}
const qt = f.div`
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
`, At = f.div`
  padding: 8px;
`;
function kt() {
  const s = ue((n) => n.logging.messages).filter((n) => !0);
  return s.length === 0 ? null : /* @__PURE__ */ e.jsx(Nt, { children: s.map((n, i, r) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(It, { first: i === 0, last: i === r.length - 1 }),
    /* @__PURE__ */ e.jsx("div", { children: n.message })
  ] }, i)) });
}
function It({ first: t, last: s }) {
  return /* @__PURE__ */ e.jsxs(Ht, { first: t, last: s, children: [
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {})
  ] });
}
const Nt = f.div`
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
`, Ht = f.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ first: t }) => !t && `background-color: var(${u.border});`}
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
    ${({ last: t }) => !t && `background-color: var(${u.border});`}
  }
`;
function c(t) {
  t === void 0 || this.initialize(t), this.maxHeaderSize = c.maxHeaderSize;
}
c.prototype.initialize = function(t, s) {
  this.type = t, this.state = t + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
c.encoding = "ascii";
c.maxHeaderSize = 80 * 1024;
c.REQUEST = "REQUEST";
c.RESPONSE = "RESPONSE";
var xe = c.kOnHeaders = 1, L = c.kOnHeadersComplete = 2, N = c.kOnBody = 3, B = c.kOnMessageComplete = 4;
c.prototype[xe] = c.prototype[L] = c.prototype[N] = c.prototype[B] = function() {
};
var ge = !0;
Object.defineProperty(c, "kOnExecute", {
  get: function() {
    return ge = !1, 99;
  }
});
var me = c.methods = [
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
], ve = me.indexOf("CONNECT");
c.prototype.reinitialize = c;
c.prototype.close = c.prototype.pause = c.prototype.resume = c.prototype.free = function() {
};
c.prototype._compatMode0_11 = !1;
c.prototype.getAsyncId = function() {
  return 0;
};
var _t = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
c.prototype.execute = function(t, s, n) {
  if (!(this instanceof c))
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
  return this.chunk = null, n = this.offset - s, _t[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || c.maxHeaderSize)) ? new Error("max header size exceeded") : n;
};
var Mt = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
c.prototype.finish = function() {
  if (!this.hadError) {
    if (!Mt[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[B]());
  }
};
c.prototype.consume = c.prototype.unconsume = c.prototype.getCurrentBuffer = function() {
};
c.prototype.userCall = function() {
  this.isUserCall = !0;
  var t = this;
  return function(s) {
    return t.isUserCall = !1, s;
  };
};
c.prototype.nextRequest = function() {
  this.userCall()(this[B]()), this.reinitialize(this.type);
};
c.prototype.consumeLine = function() {
  for (var t = this.end, s = this.chunk, n = this.offset; n < t; n++)
    if (s[n] === 10) {
      var i = this.line + s.toString(c.encoding, this.offset, n);
      return i.charAt(i.length - 1) === "\r" && (i = i.substr(0, i.length - 1)), this.line = "", this.offset = n + 1, i;
    }
  this.line += s.toString(c.encoding, this.offset, this.end), this.offset = this.end;
};
var Dt = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Lt = /^[ \t]+(.*[^ \t])/;
c.prototype.parseHeader = function(t, s) {
  if (t.indexOf("\r") !== -1)
    throw H("HPE_LF_EXPECTED");
  var n = Dt.exec(t), i = n && n[1];
  if (i)
    s.push(i), s.push(n[2]);
  else {
    var r = Lt.exec(t);
    r && s.length && (s[s.length - 1] && (s[s.length - 1] += " "), s[s.length - 1] += r[1]);
  }
};
var Bt = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
c.prototype.REQUEST_LINE = function() {
  var t = this.consumeLine();
  if (t) {
    var s = Bt.exec(t);
    if (s === null)
      throw H("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? s[1] : me.indexOf(s[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = s[2], this.info.versionMajor = +s[3], this.info.versionMinor = +s[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var Ft = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
c.prototype.RESPONSE_LINE = function() {
  var t = this.consumeLine();
  if (t) {
    var s = Ft.exec(t);
    if (s === null)
      throw H("HPE_INVALID_CONSTANT");
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
  var t = this.consumeLine();
  if (t !== void 0) {
    var s = this.info;
    if (t)
      this.parseHeader(t, s.headers);
    else {
      for (var n = s.headers, i = !1, r, l = !1, a = 0; a < n.length; a += 2)
        switch (n[a].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = n[a + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (r = +n[a + 1], i) {
              if (r !== this.body_bytes)
                throw H("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              i = !0, this.body_bytes = r;
            break;
          case "connection":
            this.connection += n[a + 1].toLowerCase();
            break;
          case "upgrade":
            l = !0;
            break;
        }
      this.isChunked && i && (i = !1, this.body_bytes = null), l && this.connection.indexOf("upgrade") != -1 ? s.upgrade = this.type === c.REQUEST || s.statusCode === 101 : s.upgrade = s.method === ve, this.isChunked && s.upgrade && (this.isChunked = !1), s.shouldKeepAlive = this.shouldKeepAlive();
      var o;
      if (ge ? o = this.userCall()(this[L](s)) : o = this.userCall()(this[L](
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
  var t = this.consumeLine();
  t !== void 0 && (this.body_bytes = parseInt(t, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
c.prototype.BODY_CHUNK = function() {
  var t = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[N](this.chunk, this.offset, t)), this.offset += t, this.body_bytes -= t, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
c.prototype.BODY_CHUNKEMPTYLINE = function() {
  var t = this.consumeLine();
  t !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
c.prototype.BODY_CHUNKTRAILERS = function() {
  var t = this.consumeLine();
  t !== void 0 && (t ? this.parseHeader(t, this.trailers) : (this.trailers.length && this.userCall()(this[xe](this.trailers, "")), this.nextRequest()));
};
c.prototype.BODY_RAW = function() {
  var t = this.end - this.offset;
  this.userCall()(this[N](this.chunk, this.offset, t)), this.offset = this.end;
};
c.prototype.BODY_SIZED = function() {
  var t = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[N](this.chunk, this.offset, t)), this.offset += t, this.body_bytes -= t, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(t) {
  var s = c["kOn" + t];
  Object.defineProperty(c.prototype, "on" + t, {
    get: function() {
      return this[s];
    },
    set: function(n) {
      return this._compatMode0_11 = !0, ve = "CONNECT", this[s] = n;
    }
  });
});
function H(t) {
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
    return Ut(Be.Buffer.from(t, "base64"));
  } catch {
    return {
      httpVersion: "1.0",
      headers: [],
      statusCode: 0
    };
  }
}
function Ut(t) {
  const s = new c(c.RESPONSE);
  let n = !1, i = 0, r, l, a = [], o = [];
  if (s[c.kOnHeadersComplete] = function(d) {
    d.shouldKeepAlive, d.upgrade, i = d.statusCode, d.statusMessage, r = d.versionMajor, l = d.versionMinor, a = d.headers;
  }, s[c.kOnBody] = function(d, g, p) {
    o.push(d.slice(g, g + p));
  }, s[c.kOnHeaders] = function(d) {
  }, s[c.kOnMessageComplete] = function() {
    n = !0;
  }, s.execute(t), s.finish(), !n)
    throw new Error("Could not parse");
  let x = o.join("");
  const h = [];
  for (let d = 0; d < a.length - 1; d++)
    d % 2 === 0 && h.push([a[d], a[d + 1]]);
  return {
    headers: h,
    statusCode: i,
    httpVersion: `${r}.${l}`,
    body: x
  };
}
function je({
  curl: t,
  id: s,
  waiting: n
}) {
  const i = R();
  return /* @__PURE__ */ e.jsx(Yt, { children: /* @__PURE__ */ e.jsxs(Kt, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
    /* @__PURE__ */ e.jsx(st, { children: /* @__PURE__ */ e.jsxs(nt, { children: [
      /* @__PURE__ */ e.jsx(it, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { children: /* @__PURE__ */ e.jsx(
        Ye,
        {
          onClick: (r) => {
            r.preventDefault(), r.stopPropagation(), i(le(t));
          }
        }
      ) }) }),
      /* @__PURE__ */ e.jsx(rt, { children: /* @__PURE__ */ e.jsxs(zt, { sideOffset: 5, children: [
        "Copy cURL command to the clipboard",
        /* @__PURE__ */ e.jsx(Vt, {})
      ] }) })
    ] }) }),
    t
  ] }) });
}
const Yt = f.div``, Kt = f.div`
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
`, zt = f(et)`
  color: var(${u.notificationsForeground});
  background-color: var(${u.notificationsBackground});
  border: 1px solid var(${u.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, Vt = f(tt)`
  fill: var(${u.notificationsForeground});
`;
function Wt({
  operation: t,
  issue: s,
  responses: n,
  errors: i,
  waitings: r
}) {
  var j, b;
  const { request: l, response: a, outcome: o, happyPath: x } = s, h = !t.fuzzed;
  let d = "N/A";
  const g = ((j = s == null ? void 0 : s.outcome) == null ? void 0 : j.status) === "correct" ? "Yes" : "No";
  g === "Yes" && (d = o != null && o.conformant ? "Yes" : "No");
  const p = n["happy-path"], m = i["happy-path"], v = r["happy-path"];
  return /* @__PURE__ */ e.jsxs(Gt, { children: [
    /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsx("div", { style: { opacity: 1 }, children: /* @__PURE__ */ e.jsx("b", { children: "Happy Path Testing results" }) }) }),
    /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Test Status" }),
      /* @__PURE__ */ e.jsx("div", { children: h ? "Failed" : "Passed" })
    ] }),
    /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        a == null ? void 0 : a.httpStatusCode,
        " (Expected: ",
        (b = x == null ? void 0 : x.httpStatusExpected) == null ? void 0 : b.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ e.jsx("div", { children: g })
    ] }),
    /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ e.jsx("div", { children: d })
    ] }),
    (l == null ? void 0 : l.curl) && /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Request" }),
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(je, { curl: l == null ? void 0 : l.curl, id: "happy-path", waiting: v }) })
    ] }),
    ((a == null ? void 0 : a.rawPayload) || p) && /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response" }),
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
        oe,
        {
          accented: !0,
          response: p || ye(a.rawPayload)
        }
      ) })
    ] }),
    ((o == null ? void 0 : o.error) || m) && /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Error" }),
      /* @__PURE__ */ e.jsx("div", { children: m ? m.message : o == null ? void 0 : o.error })
    ] })
  ] });
}
const Gt = f.div`
  margin: 8px;
  border: 1px solid var(${u.border});
`, w = f.div`
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
function Qt({
  global: t,
  operation: s,
  issues: n,
  scanVersion: i
}) {
  var x;
  const r = R(), l = (t.conformanceTestRequests.executed.total ?? 0) + (t.authorizationTestRequests.executed.total ?? 0) + (t.customTestRequests.executed.total ?? 0) + (((x = t.methodNotAllowedTestRequests) == null ? void 0 : x.executed.total) ?? 0), a = (n == null ? void 0 : n.length) | 0, o = n.filter(
    (h) => {
      var d, g;
      return ((d = h == null ? void 0 : h.outcome) == null ? void 0 : d.criticality) && ((g = h.outcome) == null ? void 0 : g.criticality) >= 4;
    }
  ).length;
  return /* @__PURE__ */ e.jsxs(Jt, { children: [
    /* @__PURE__ */ e.jsxs(Zt, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ e.jsx("b", { children: t.state }),
        " (Exit code: ",
        t.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ e.jsx("div", { children: A.fromISO(t.endDate).toLocaleString(A.DATETIME_MED) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Execution time:",
        " ",
        A.fromISO(t.endDate).diff(A.fromISO(t.startDate)).toFormat("mm:ss.SSS")
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Scan version: ",
        i
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(Xt, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (h) => {
            h.preventDefault(), h.stopPropagation(), r(I("tests")), r(C({}));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              l,
              " ",
              /* @__PURE__ */ e.jsx(_, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (h) => {
            h.preventDefault(), h.stopPropagation(), r(I("tests")), r(C({}));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              a ?? 0,
              " ",
              /* @__PURE__ */ e.jsx(_, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (h) => {
            h.preventDefault(), h.stopPropagation(), r(I("tests")), r(C({ severity: "high" }));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              o,
              " ",
              /* @__PURE__ */ e.jsx(_, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const Jt = f.div`
  margin: 8px;
`, Xt = f.div`
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
`, Zt = f.div`
  display: flex;
  border: 1px solid var(${u.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${u.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function es({
  operation: t,
  issue: s,
  httpResponse: n,
  error: i,
  id: r,
  waiting: l
}) {
  var F, U, Y, K, z, V, W, G, Q, J, X;
  const a = R(), [o, x] = q.useState(!0), { request: h, response: d, test: g, outcome: p } = s, m = (p == null ? void 0 : p.status) === "correct", v = p == null ? void 0 : p.conformant, j = !(m && v);
  let b = "N/A", T = "N/A";
  const P = ((U = (F = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : F[0]) == null ? void 0 : U.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  P === "Yes" && (b = ((K = (Y = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : Y[0]) == null ? void 0 : K.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), b === "Yes" && (T = ((V = (z = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : z[0]) == null ? void 0 : V.responseKey) === "response-body-badformat-scan" ? "No" : "Yes");
  const S = p == null ? void 0 : p.error;
  return /* @__PURE__ */ e.jsxs(ts, { children: [
    /* @__PURE__ */ e.jsxs(ss, { collapsed: o, onClick: () => x(!o), children: [
      /* @__PURE__ */ e.jsx("div", { children: o ? /* @__PURE__ */ e.jsx(ot, {}) : /* @__PURE__ */ e.jsx(at, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(ns, { children: g == null ? void 0 : g.description }),
        /* @__PURE__ */ e.jsxs(is, { children: [
          S && /* @__PURE__ */ e.jsxs($, { children: [
            /* @__PURE__ */ e.jsx(k, {}),
            " Error: ",
            S
          ] }),
          !S && j && /* @__PURE__ */ e.jsxs($, { children: [
            /* @__PURE__ */ e.jsx(k, {}),
            " Failed",
            p.criticality > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              "/",
              /* @__PURE__ */ e.jsxs("span", { style: { fontWeight: as[p.criticality] }, children: [
                " ",
                os[p.criticality]
              ] })
            ] })
          ] }),
          !S && !j && /* @__PURE__ */ e.jsxs($, { children: [
            /* @__PURE__ */ e.jsx(M, {}),
            " Passed"
          ] }),
          !S && j && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx($, { children: m ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(M, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(k, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ e.jsx($, { children: v ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(M, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(k, {}),
              " Conforms to Contract: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !o && /* @__PURE__ */ e.jsxs(rs, { children: [
      S && /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Error" }),
        /* @__PURE__ */ e.jsx("div", { children: S })
      ] }),
      !S && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "HTTP code received" }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            d == null ? void 0 : d.httpStatusCode,
            " (Expected: ",
            (W = g == null ? void 0 : g.httpStatusExpected) == null ? void 0 : W.join(", "),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response code found in API Contract" }),
          /* @__PURE__ */ e.jsx("div", { children: P })
        ] }),
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Content-Type found in API Contract" }),
          /* @__PURE__ */ e.jsx("div", { children: b })
        ] }),
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response matches API Contract" }),
          /* @__PURE__ */ e.jsx("div", { children: T })
        ] }),
        ((Q = (G = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : G[0]) == null ? void 0 : Q.responseDescription) && /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response analysis" }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            " ",
            (X = (J = p == null ? void 0 : p.apiResponseAnalysis) == null ? void 0 : J[0]) == null ? void 0 : X.responseDescription
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "JSON Pointer" }),
          /* @__PURE__ */ e.jsx("div", { children: g != null && g.jsonPointer ? /* @__PURE__ */ e.jsx(
            "a",
            {
              href: "#",
              onClick: (Z) => {
                Z.preventDefault(), Z.stopPropagation(), a(
                  he((g == null ? void 0 : g.jsonPointer) + "")
                  // FIXME support indexed reports
                );
              },
              children: g == null ? void 0 : g.jsonPointer
            }
          ) : "N/A" })
        ] }),
        (h == null ? void 0 : h.curl) && /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Request" }),
          /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(je, { waiting: l, curl: h.curl, id: r }) })
        ] }),
        i === void 0 && (n !== void 0 || (d == null ? void 0 : d.rawPayload) !== void 0) && /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Response" }),
          /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
            oe,
            {
              accented: !0,
              response: n || ye(d == null ? void 0 : d.rawPayload)
            }
          ) })
        ] }),
        i && /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx("div", { children: "Error" }),
          /* @__PURE__ */ e.jsx("div", { children: i == null ? void 0 : i.message })
        ] })
      ] })
    ] })
  ] });
}
const ts = f.div`
  margin: 8px;
  border: 1px solid var(${u.border});
`, ss = f.div`
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
  ${({ collapsed: t }) => !t && `border-bottom: 1px solid var(${u.border});
    border-left: 5px solid var(${u.badgeBackground});`}
`, ns = f.div`
  font-weight: 600;
`, is = f.div`
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
`, rs = f.div`
  background-color: var(${u.computedOne});
`, y = f.div`
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
  filters: t,
  onClick: s
}) {
  return /* @__PURE__ */ e.jsx(
    ds,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), s();
      },
      children: /* @__PURE__ */ e.jsxs(hs, { children: [
        /* @__PURE__ */ e.jsx(Ke, {}),
        t !== 0 && /* @__PURE__ */ e.jsx(ls, { children: t })
      ] })
    }
  );
}
const ds = f.div`
  width: 34px;
  height: 26px;
  position: relative;
`, ls = f.div`
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
`, hs = f.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${u.buttonForeground});
  border: none;
  ${({ waiting: t }) => t && "gap: 8px;"}

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
  const t = R();
  return /* @__PURE__ */ e.jsxs(
    us,
    {
      onClick: (s) => {
        t(C({})), s.preventDefault(), s.stopPropagation();
      },
      children: [
        /* @__PURE__ */ e.jsx(ze, {}),
        " ",
        /* @__PURE__ */ e.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const us = f.div`
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
  const t = O((i) => i.scan.filter), s = R(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ e.jsx(xs, { children: /* @__PURE__ */ e.jsx(
    ae,
    {
      label: "Severity",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (i) => {
        i && i.value !== "all" ? s(C({ ...t, severity: i == null ? void 0 : i.value })) : s(C({ ...t, severity: void 0 }));
      },
      selected: (t == null ? void 0 : t.severity) || "all"
    }
  ) });
}
const xs = f.div`
  width: 264px;
`;
function gs() {
  const { filter: t, titles: s } = O((r) => r.scan), n = R(), i = [];
  for (const r of s)
    te[r] && i.push({ label: te[r], value: r });
  return /* @__PURE__ */ e.jsx(ms, { children: /* @__PURE__ */ e.jsx(
    ae,
    {
      label: "Type",
      options: i,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? n(C({ ...t, title: r.value })) : n(C({ ...t, title: void 0 }));
      },
      selected: t.title || "all"
    }
  ) });
}
const ms = f.div`
  width: 264px;
`, te = {
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
  const { filter: t, grouped: s } = O((o) => o.scan), [n, i] = q.useState(!0), l = ["severity", "title"].filter((o) => t && t[o] !== void 0).length, a = Object.keys(s).map((o) => s[o].length).reduce((o, x) => o + x, 0);
  return /* @__PURE__ */ e.jsxs(ys, { children: [
    /* @__PURE__ */ e.jsxs(js, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        a,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsx(cs, { filters: l, onClick: () => i(!n) })
    ] }),
    !n && /* @__PURE__ */ e.jsxs(bs, { children: [
      /* @__PURE__ */ e.jsx(fs, {}),
      /* @__PURE__ */ e.jsx(gs, {}),
      /* @__PURE__ */ e.jsx(ps, {})
    ] })
  ] });
}
const ys = f.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, js = f.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, bs = f.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function Ss({
  operation: t,
  issues: s,
  responses: n,
  errors: i,
  waitings: r,
  grouped: l
}) {
  return s.length === 0 ? /* @__PURE__ */ e.jsx(se, { children: /* @__PURE__ */ e.jsx(ws, { children: "No test results available" }) }) : /* @__PURE__ */ e.jsxs(se, { children: [
    /* @__PURE__ */ e.jsx(vs, {}),
    Object.keys(l).map((a) => /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx(Cs, { children: Es[a] ?? "Unknown test type" }),
      l[a].map((o, x) => {
        const h = `${a}-${x}`;
        return /* @__PURE__ */ e.jsx(
          es,
          {
            operation: t,
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
const se = f.div`
  margin-top: 8px;
`, ws = f.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${u.border});
`, Cs = f.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, Es = {
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
function Rs() {
  var g, p, m;
  const t = R(), { scanReport: s, operationId: n, responses: i, errors: r, waitings: l, tab: a, issues: o, grouped: x } = O((v) => v.scan);
  if (s === void 0)
    return /* @__PURE__ */ e.jsx(Os, { children: /* @__PURE__ */ e.jsx(Ts, { children: "Report is not yet available" }) });
  const h = (p = (g = s.operations) == null ? void 0 : g[n].scenarios) == null ? void 0 : p[0], d = (m = s.operations) == null ? void 0 : m[n];
  return /* @__PURE__ */ e.jsx(
    ct,
    {
      activeTab: a,
      setActiveTab: (v) => t(I(v)),
      tabs: [
        {
          id: "summary",
          title: "Summary",
          content: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              Qt,
              {
                issues: o,
                global: s.summary,
                scanVersion: s.scanVersion,
                operation: d == null ? void 0 : d.summary
              }
            ),
            h && /* @__PURE__ */ e.jsx(
              Wt,
              {
                operation: d,
                issue: h,
                responses: i,
                errors: r,
                waitings: l
              }
            )
          ] })
        },
        {
          id: "tests",
          title: "Tests",
          content: /* @__PURE__ */ e.jsx(
            Ss,
            {
              operation: d,
              issues: o,
              grouped: x,
              responses: i,
              errors: r,
              waitings: l
            }
          )
        },
        { id: "logs", title: "Logs", content: /* @__PURE__ */ e.jsx(kt, {}) }
      ]
    }
  );
}
const Os = f.div``, Ts = f.div`
  margin: 1em;
  padding: 10px;
`;
function Ps() {
  const { scanReport: t, waiting: s, error: n } = O((i) => i.scan);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    t && /* @__PURE__ */ e.jsx(Rs, {}),
    /* @__PURE__ */ e.jsx($t, {}),
    (s || n) && /* @__PURE__ */ e.jsx(Et, {})
  ] });
}
const ne = [
  // {
  //   id: "start-scan",
  //   title: "Scan is starting",
  //   element: <Starting />,
  //   when: startScan,
  // },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ e.jsx(Ps, {}),
    when: de
  }
], $s = {
  changeTheme: He,
  startScan: de,
  scanOperation: lt,
  showGeneralError: pt,
  showHttpError: ut,
  showHttpResponse: xt,
  showScanReport: ht,
  loadEnv: Fe,
  loadPrefs: Qe,
  loadConfig: Xe,
  showLogMessage: jt
};
function qs() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Ie, {}),
    /* @__PURE__ */ e.jsx(Ne, {})
  ] });
}
function As(t, s) {
  const n = wt(Ct(t, ne), s);
  Pe(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx($e.StrictMode, { children: /* @__PURE__ */ e.jsx(qe, { store: n, children: /* @__PURE__ */ e.jsx(Ae.Provider, { value: ne, children: /* @__PURE__ */ e.jsx(qs, {}) }) }) })
  ), window.addEventListener("message", ke(n, $s));
}
window.renderWebView = As;
