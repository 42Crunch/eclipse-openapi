import { c as xe, u as ge, a as Fe, l as Ue, t as Ye, b as Ve, s as Ke, i as ze, d as h, T as u, j as t, r as A, U as We, e as Ge, R as Je, P as Qe, m as Xe, f as Ze, g as et } from "./styled-components.browser.esm.b4077a0f.js";
import { r as tt, s as st, R as nt, a as rt } from "./Router.bc058529.js";
import { f as it, i as at, g as ot, a as ct, b as dt, c as lt, p as pt, s as me, d as ve, R as ye, e as je, S as K, w as ut, h as ht, O as ft, j as be, k as xt, u as gt, l as mt } from "./Response.f86d4258.js";
import { S as vt, c as yt, d as jt, e as bt } from "./Xmark.97e9c535.js";
import { e as St, s as wt, l as Ct } from "./slice.9806eb76.js";
import { c as Et, P as $t, S as z, l as kt } from "./ProgressButton.26aa5f1e.js";
import { u as Rt, a as Ot, F as qt } from "./index.esm.2e24c5a3.js";
import { $ as Pt, T as Tt, a as W, b as G } from "./Tabs.d6340d43.js";
import { $ as At, a as Nt, b as Ht, c as Dt, d as It, e as _t } from "./index.module.be22a077.js";
import { D as B } from "./datetime.eb6ea7e1.js";
import { S as Mt, a as Lt } from "./TriangleExclamation.3c1770d3.js";
import { S as Bt } from "./AngleUp.51e58661.js";
import { S as J } from "./ExclamationCircle.20b20ea3.js";
import { P as Se } from "./Select.aaac1f78.js";
import "./downshift.esm.c45abd85.js";
import "./index.module.827db8cc.js";
const Ft = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace"
];
function de(e) {
  return {
    query: e.parameters.query,
    header: e.parameters.header,
    path: e.parameters.path,
    cookie: e.parameters.cookie
  };
}
function Ut(e, s, n) {
  var a;
  const r = we(
    e,
    e.playbook.paths[s][n].happyPaths[0].requests[0]
  );
  return {
    parameters: {
      query: r.queryParameters,
      path: r.pathParameters,
      header: r.headerParameters,
      cookie: r.cookieParameters,
      body: {},
      formData: {}
    },
    requestBody: (a = r == null ? void 0 : r.requestBody) == null ? void 0 : a.json,
    host: r.host
  };
}
function Yt(e, s, n, r, a, c, i) {
  var f, g, m;
  const o = JSON.parse(JSON.stringify(e)), p = we(
    o,
    o.playbook.paths[s][n].happyPaths[0].requests[0]
  ), x = zt(i.server, r, a, c);
  p.host = x.endsWith("/") ? x.slice(0, -1) : x, p.path = s, p.method = n, p.requestBody && ((f = i.body) == null ? void 0 : f.value) !== void 0 && (p.requestBody.json = (g = i.body) == null ? void 0 : g.value), p.headerParameters = i.parameters.header, p.queryParameters = i.parameters.query, p.cookieParameters = i.parameters.cookie, p.pathParameters = i.parameters.path, o.playbook.paths[s] = {
    [n]: o.playbook.paths[s][n]
  }, ((m = o == null ? void 0 : o.environment) == null ? void 0 : m.host) !== void 0 && (o.environment.host = x);
  const d = Vt(
    i.security,
    i.securityIndex,
    o == null ? void 0 : o.environment
  );
  return [o, d];
}
function we(e, s) {
  return s.$ref ? it(e, s.$ref).request.requestDetails : s.request.requestDetails;
}
function Vt(e, s, n) {
  const r = {}, a = e[s];
  if (a)
    for (const [c, i] of Object.entries(a)) {
      const o = Kt(n, c);
      o !== void 0 && (typeof i == "string" ? r[o] = i : r[o] = `${i.username}:${i.password}`);
    }
  return r;
}
function Kt(e, s) {
  const n = e == null ? void 0 : e[s], r = n == null ? void 0 : n.match(/env\('(.+)'\)/);
  if (Array.isArray(r))
    return r[1];
  const a = n == null ? void 0 : n.match(/env_with_default\('(.+)',.+\)/);
  if (Array.isArray(a))
    return a[1];
}
function zt(e, s, n, r) {
  return s == "docker" && n && (r === "darwin" || r === "win32") && (e.toLowerCase().startsWith("https://localhost") || e.toLowerCase().startsWith("http://localhost")) ? e.replace(/localhost/i, "host.docker.internal") : e;
}
function X(e, s, n, r) {
  return s == "docker" && n && (r === "darwin" || r === "win32") && (e.toLowerCase().includes("https://host.docker.internal") || e.toLowerCase().includes("http://host.docker.internal")) ? e.replace("host.docker.internal", "localhost") : e;
}
const Wt = {
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
  waiting: !1,
  filter: {},
  tab: "summary",
  grouped: {},
  issues: [],
  titles: []
}, Ce = xe({
  name: "scan",
  initialState: Wt,
  reducers: {
    startScan: (e, s) => {
      e.error = void 0;
    },
    scanOperation: (e, s) => {
      const { oas: n, rawOas: r, path: a, method: c, config: i } = s.payload, o = Ut(i, a, c);
      if (at(n)) {
        const p = ot(n, a, c), x = ct(p), d = de(o);
        e.defaultValues = {
          server: o.host,
          parameters: d,
          security: x,
          securityIndex: 0,
          body: { mediaType: "application/json", value: o.requestBody }
        };
      } else {
        const p = dt(n, a, c), x = lt(p), d = de(o);
        e.defaultValues = {
          server: o.host,
          parameters: d,
          security: x,
          securityIndex: 0
        };
      }
      e.oas = n, e.rawOas = r, e.path = a, e.method = c, e.scanConfigRaw = i, e.scanConfig = o, e.scanReport = void 0, e.error = void 0;
    },
    runScan: (e, s) => {
      e.defaultValues = s.payload.defaultValues, e.scanReport = void 0, e.error = void 0, e.waiting = !0, e.response = void 0, e.responses = {};
    },
    showScanReport: (e, s) => {
      const n = Zt(s.payload.report, e.path, e.method), r = le(n, e.filter), { titles: a } = Q(n), { grouped: c } = Q(r);
      e.scanReport = s.payload.report, e.waiting = !1, e.issues = n, e.titles = a, e.grouped = c;
    },
    changeFilter: (e, s) => {
      e.filter = s.payload;
      const n = le(e.issues, e.filter), { grouped: r } = Q(n);
      e.grouped = r;
    },
    changeTab: (e, s) => {
      e.tab = s.payload;
    },
    showGeneralError: (e, s) => {
      e.error = s.payload, e.waiting = !1;
    },
    showHttpResponse: (e, s) => {
      const n = s.payload;
      e.responses[n.id] = n, e.waitings[n.id] = !1, delete e.errors[n.id];
    },
    showHttpError: (e, s) => {
      const n = s.payload;
      e.errors[n.id] = n, e.waitings[n.id] = !1, delete e.responses[n.id];
    },
    sendHttpRequest: (e, s) => {
      e.waitings[s.payload.id] = !0;
    },
    sendCurlRequest: (e, s) => {
    },
    showJsonPointer: (e, s) => {
    },
    showAuditReport: (e, s) => {
    }
  }
}), {
  startScan: Ee,
  scanOperation: $e,
  runScan: ke,
  showScanReport: Gt,
  showGeneralError: Jt,
  showHttpError: Qt,
  sendHttpRequest: Re,
  sendCurlRequest: Oe,
  showHttpResponse: Xt,
  showJsonPointer: qe,
  showAuditReport: Pe,
  changeTab: U,
  changeFilter: P
} = Ce.actions;
function le(e, s) {
  const n = (c) => {
    var i;
    return (s == null ? void 0 : s.title) === void 0 || ((i = c.test) == null ? void 0 : i.key) === s.title;
  }, r = s.severity !== void 0 ? vt.indexOf(s.severity) + 1 : 0, a = (c) => {
    var i, o;
    return s.severity === void 0 || ((i = c.outcome) == null ? void 0 : i.criticality) === void 0 || ((o = c.outcome) == null ? void 0 : o.criticality) >= r;
  };
  return e.filter((c) => n(c) && a(c));
}
function Zt(e, s, n) {
  var a, c, i;
  const r = [];
  for (const o of Ft) {
    const p = (i = (c = (a = e == null ? void 0 : e.paths) == null ? void 0 : a[s]) == null ? void 0 : c[o]) == null ? void 0 : i.conformanceRequestIssues;
    p !== void 0 && r.push(...p);
  }
  return r;
}
function Q(e) {
  var a, c;
  const s = {}, n = {};
  for (const i of e) {
    const o = (a = i.test) == null ? void 0 : a.key;
    o !== void 0 && (s[o] === void 0 && (s[o] = [], n[o] = (c = i.test) == null ? void 0 : c.description), s[o].push(i));
  }
  const r = Object.keys(s);
  for (const i of r)
    s[i].sort((o, p) => {
      var x, d, f, g, m, v, b, S, w, y;
      if (((x = o.outcome) == null ? void 0 : x.status) !== ((d = p.outcome) == null ? void 0 : d.status)) {
        if (((f = o.outcome) == null ? void 0 : f.status) === "incorrect")
          return -1;
        if (((g = p.outcome) == null ? void 0 : g.status) === "incorrect")
          return 1;
        if (((m = o.outcome) == null ? void 0 : m.status) === "unexpected")
          return -1;
        if (((v = p.outcome) == null ? void 0 : v.status) === "unexpected")
          return 1;
      }
      return ((b = o.outcome) == null ? void 0 : b.criticality) !== ((S = p.outcome) == null ? void 0 : S.criticality) ? ((w = o.outcome) == null ? void 0 : w.criticality) - ((y = p.outcome) == null ? void 0 : y.criticality) : 0;
    });
  return { grouped: s, titles: Object.keys(n) };
}
const es = Ce.reducer, ts = {
  messages: []
}, Te = xe({
  name: "logging",
  initialState: ts,
  reducers: {
    showLogMessage: (e, s) => {
      e.messages.push(s.payload);
    },
    clearLogs: (e) => {
      e.messages = [];
    }
  }
}), { showLogMessage: ss, clearLogs: ns } = Te.actions, Ae = ge, rs = Te.reducer, is = {
  theme: Ye,
  scan: es,
  router: tt,
  env: St,
  prefs: pt,
  config: Et,
  logging: rs
}, as = (e, s) => Fe({
  reducer: is,
  middleware: (n) => n().prepend(e.middleware).concat(Ue),
  preloadedState: {
    theme: s
  }
}), k = () => Rt(), j = ge, Ne = Ve(), O = Ne.startListening;
function os(e, s) {
  const n = {
    runScan: () => O({
      actionCreator: ke,
      effect: async (r, a) => {
        e.postMessage({
          command: "runScan",
          payload: {
            config: r.payload.scanConfigRaw,
            env: r.payload.env,
            rawOas: r.payload.rawOas
          }
        });
      }
    }),
    savePrefs: () => O({
      matcher: ze(me, ve),
      effect: async (r, a) => {
        const { prefs: c } = a.getState();
        e.postMessage({
          command: "savePrefs",
          payload: c
        });
      }
    }),
    sendHttpRequest: () => O({
      actionCreator: Re,
      effect: async (r, a) => {
        e.postMessage({
          command: "sendHttpRequest",
          payload: r.payload
        });
      }
    }),
    sendCurlRequest: () => O({
      actionCreator: Oe,
      effect: async (r, a) => {
        e.postMessage({
          command: "sendCurlRequest",
          payload: r.payload
        });
      }
    }),
    showJsonPointer: () => O({
      actionCreator: qe,
      effect: async (r, a) => {
        e.postMessage({
          command: "showJsonPointer",
          payload: r.payload
        });
      }
    }),
    showAuditReport: () => O({
      actionCreator: Pe,
      effect: async (r, a) => {
        e.postMessage({
          command: "showAuditReport",
          payload: void 0
        });
      }
    }),
    showEnvWindow: () => O({
      actionCreator: wt,
      effect: async (r, a) => {
        e.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return st(O, s), Ke(n), Ne;
}
function cs() {
  const s = Ae((n) => n.logging.messages).filter((n) => n.level == "info");
  return s.length === 0 ? null : /* @__PURE__ */ t.jsx(ls, { children: s.map((n, r, a) => /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx(ds, { first: r === 0, last: r === a.length - 1 }),
    /* @__PURE__ */ t.jsx("div", { children: n.message })
  ] }, r)) });
}
function ds({ first: e, last: s }) {
  return /* @__PURE__ */ t.jsxs(ps, { first: e, last: s, children: [
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {})
  ] });
}
const ls = h.div`
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
`, ps = h.div`
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
function l(e) {
  e === void 0 || this.initialize(e), this.maxHeaderSize = l.maxHeaderSize;
}
l.prototype.initialize = function(e, s) {
  this.type = e, this.state = e + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
l.encoding = "ascii";
l.maxHeaderSize = 80 * 1024;
l.REQUEST = "REQUEST";
l.RESPONSE = "RESPONSE";
var He = l.kOnHeaders = 1, Z = l.kOnHeadersComplete = 2, Y = l.kOnBody = 3, ee = l.kOnMessageComplete = 4;
l.prototype[He] = l.prototype[Z] = l.prototype[Y] = l.prototype[ee] = function() {
};
var De = !0;
Object.defineProperty(l, "kOnExecute", {
  get: function() {
    return De = !1, 99;
  }
});
var Ie = l.methods = [
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
], _e = Ie.indexOf("CONNECT");
l.prototype.reinitialize = l;
l.prototype.close = l.prototype.pause = l.prototype.resume = l.prototype.free = function() {
};
l.prototype._compatMode0_11 = !1;
l.prototype.getAsyncId = function() {
  return 0;
};
var us = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
l.prototype.execute = function(e, s, n) {
  if (!(this instanceof l))
    throw new TypeError("not a HTTPParser");
  s = s || 0, n = typeof n == "number" ? n : e.length, this.chunk = e, this.offset = s;
  var r = this.end = s + n;
  try {
    for (; this.offset < r && !this[this.state](); )
      ;
  } catch (a) {
    if (this.isUserCall)
      throw a;
    return this.hadError = !0, a;
  }
  return this.chunk = null, n = this.offset - s, us[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || l.maxHeaderSize)) ? new Error("max header size exceeded") : n;
};
var hs = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
l.prototype.finish = function() {
  if (!this.hadError) {
    if (!hs[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[ee]());
  }
};
l.prototype.consume = l.prototype.unconsume = l.prototype.getCurrentBuffer = function() {
};
l.prototype.userCall = function() {
  this.isUserCall = !0;
  var e = this;
  return function(s) {
    return e.isUserCall = !1, s;
  };
};
l.prototype.nextRequest = function() {
  this.userCall()(this[ee]()), this.reinitialize(this.type);
};
l.prototype.consumeLine = function() {
  for (var e = this.end, s = this.chunk, n = this.offset; n < e; n++)
    if (s[n] === 10) {
      var r = this.line + s.toString(l.encoding, this.offset, n);
      return r.charAt(r.length - 1) === "\r" && (r = r.substr(0, r.length - 1)), this.line = "", this.offset = n + 1, r;
    }
  this.line += s.toString(l.encoding, this.offset, this.end), this.offset = this.end;
};
var fs = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, xs = /^[ \t]+(.*[^ \t])/;
l.prototype.parseHeader = function(e, s) {
  if (e.indexOf("\r") !== -1)
    throw V("HPE_LF_EXPECTED");
  var n = fs.exec(e), r = n && n[1];
  if (r)
    s.push(r), s.push(n[2]);
  else {
    var a = xs.exec(e);
    a && s.length && (s[s.length - 1] && (s[s.length - 1] += " "), s[s.length - 1] += a[1]);
  }
};
var gs = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
l.prototype.REQUEST_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var s = gs.exec(e);
    if (s === null)
      throw V("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? s[1] : Ie.indexOf(s[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = s[2], this.info.versionMajor = +s[3], this.info.versionMinor = +s[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var ms = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
l.prototype.RESPONSE_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var s = ms.exec(e);
    if (s === null)
      throw V("HPE_INVALID_CONSTANT");
    this.info.versionMajor = +s[1], this.info.versionMinor = +s[2];
    var n = this.info.statusCode = +s[3];
    this.info.statusMessage = s[4], ((n / 100 | 0) === 1 || n === 204 || n === 304) && (this.body_bytes = 0), this.state = "HEADER";
  }
};
l.prototype.shouldKeepAlive = function() {
  if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {
    if (this.connection.indexOf("close") !== -1)
      return !1;
  } else if (this.connection.indexOf("keep-alive") === -1)
    return !1;
  return !!(this.body_bytes !== null || this.isChunked);
};
l.prototype.HEADER = function() {
  var e = this.consumeLine();
  if (e !== void 0) {
    var s = this.info;
    if (e)
      this.parseHeader(e, s.headers);
    else {
      for (var n = s.headers, r = !1, a, c = !1, i = 0; i < n.length; i += 2)
        switch (n[i].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = n[i + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (a = +n[i + 1], r) {
              if (a !== this.body_bytes)
                throw V("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              r = !0, this.body_bytes = a;
            break;
          case "connection":
            this.connection += n[i + 1].toLowerCase();
            break;
          case "upgrade":
            c = !0;
            break;
        }
      this.isChunked && r && (r = !1, this.body_bytes = null), c && this.connection.indexOf("upgrade") != -1 ? s.upgrade = this.type === l.REQUEST || s.statusCode === 101 : s.upgrade = s.method === _e, this.isChunked && s.upgrade && (this.isChunked = !1), s.shouldKeepAlive = this.shouldKeepAlive();
      var o;
      if (De ? o = this.userCall()(this[Z](s)) : o = this.userCall()(this[Z](
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
l.prototype.BODY_CHUNKHEAD = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.body_bytes = parseInt(e, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
l.prototype.BODY_CHUNK = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[Y](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
l.prototype.BODY_CHUNKEMPTYLINE = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
l.prototype.BODY_CHUNKTRAILERS = function() {
  var e = this.consumeLine();
  e !== void 0 && (e ? this.parseHeader(e, this.trailers) : (this.trailers.length && this.userCall()(this[He](this.trailers, "")), this.nextRequest()));
};
l.prototype.BODY_RAW = function() {
  var e = this.end - this.offset;
  this.userCall()(this[Y](this.chunk, this.offset, e)), this.offset = this.end;
};
l.prototype.BODY_SIZED = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[Y](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(e) {
  var s = l["kOn" + e];
  Object.defineProperty(l.prototype, "on" + e, {
    get: function() {
      return this[s];
    },
    set: function(n) {
      return this._compatMode0_11 = !0, _e = "CONNECT", this[s] = n;
    }
  });
});
function V(e) {
  var s = new Error("Parse Error");
  return s.code = e, s;
}
function Me(e) {
  const s = new l(l.RESPONSE);
  let n = !1, r = 0, a, c, i = [], o = [];
  if (s[l.kOnHeadersComplete] = function(d) {
    d.shouldKeepAlive, d.upgrade, r = d.statusCode, d.statusMessage, a = d.versionMajor, c = d.versionMinor, i = d.headers;
  }, s[l.kOnBody] = function(d, f, g) {
    o.push(d.slice(f, f + g));
  }, s[l.kOnHeaders] = function(d) {
  }, s[l.kOnMessageComplete] = function() {
    n = !0;
  }, s.execute(e), s.finish(), !n)
    throw new Error("Could not parse");
  let p = o.join("");
  const x = [];
  for (let d = 0; d < i.length - 1; d++)
    d % 2 === 0 && x.push([i[d], i[d + 1]]);
  return {
    headers: x,
    statusCode: r,
    httpVersion: `${a}.${c}`,
    body: p
  };
}
function Le({
  curl: e,
  id: s,
  waiting: n
}) {
  const r = k(), a = j((f) => f.scan.defaultValues), {
    docker: { replaceLocalhost: c },
    scanRuntime: i,
    platform: o
  } = j((f) => f.config.data), p = a == null ? void 0 : a.security[a.securityIndex], x = e.replace(/{{([\w-]+)\/([\w-]+)}}/gm, (f, g, m) => p !== void 0 && typeof p[g] == "string" ? p[g] : f), d = ws(x, s, i, c, o);
  return /* @__PURE__ */ t.jsxs(vs, { children: [
    /* @__PURE__ */ t.jsxs(ys, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
      /* @__PURE__ */ t.jsx(Ht, { children: /* @__PURE__ */ t.jsxs(Dt, { children: [
        /* @__PURE__ */ t.jsx(It, { asChild: !0, children: /* @__PURE__ */ t.jsx("span", { children: /* @__PURE__ */ t.jsx(
          yt,
          {
            onClick: (f) => {
              f.preventDefault(), f.stopPropagation(), r(
                Oe(
                  X(
                    x,
                    i,
                    c,
                    o
                  )
                )
              );
            }
          }
        ) }) }),
        /* @__PURE__ */ t.jsx(_t, { children: /* @__PURE__ */ t.jsxs(js, { sideOffset: 5, children: [
          "Copy cURL command to the clipboard",
          /* @__PURE__ */ t.jsx(bs, {})
        ] }) })
      ] }) }),
      X(e, i, c, o)
    ] }),
    /* @__PURE__ */ t.jsx(Ss, { children: /* @__PURE__ */ t.jsx(
      $t,
      {
        label: "Resend",
        waiting: n,
        onClick: (f) => {
          f.preventDefault(), f.stopPropagation(), r(Re(d));
        }
      }
    ) })
  ] });
}
const vs = h.div``, ys = h.div`
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
`, js = h(At)`
  color: var(${u.notificationsForeground});
  background-color: var(${u.notificationsBackground});
  border: 1px solid var(${u.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, bs = h(Nt)`
  fill: var(${u.notificationsForeground});
`, Ss = h.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  > button {
    width: 80px;
    height: 22px;
  }
`;
function ws(e, s, n, r, a) {
  const c = Cs(e).slice(1), i = {
    id: s,
    url: c.pop(),
    headers: {},
    method: "get",
    config: {
      https: {
        rejectUnauthorized: !1
      }
    }
  };
  for (let o = 0; o < c.length; o++) {
    const p = c[o], x = c[o + 1];
    if (p === "-d")
      i.body = x;
    else if (p == "-X")
      i.method = x.toLowerCase();
    else if (p === "-H") {
      const [d, f] = x.split(": ", 2);
      i.headers[d] = f;
    }
  }
  return i.url = X(i.url, n, r, a), i;
}
function Cs(e) {
  return Es(e).map((s) => s.value);
}
function Es(e) {
  const s = /[^\s"']+|(?:"|'){2,}|"(?!")([^"]*)"|'(?!')([^']*)'|"|'/g, n = [];
  let r;
  for (; r = s.exec(e); )
    r[2] ? n.push({ type: "single", value: r[2] }) : r[1] ? n.push({ type: "double", value: r[1] }) : n.push({ type: "plain", value: r[0] });
  return n;
}
function $s({
  issue: e,
  responses: s,
  errors: n,
  waitings: r
}) {
  var v;
  const { request: a, response: c, outcome: i, happyPath: o } = e, p = (i == null ? void 0 : i.status) !== "expected" || !(i != null && i.conformant);
  let x = "N/A";
  const d = o === null || (o == null ? void 0 : o.key) !== "happy.path.success" ? "No" : "Yes";
  d === "Yes" && (x = i != null && i.conformant ? "Yes" : "No");
  const f = s["happy-path"], g = n["happy-path"], m = r["happy-path"];
  return /* @__PURE__ */ t.jsxs(ks, { children: [
    /* @__PURE__ */ t.jsx(q, { children: /* @__PURE__ */ t.jsx("div", { style: { opacity: 1 }, children: /* @__PURE__ */ t.jsx("b", { children: "Happy Path Testing results" }) }) }),
    /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Test Status" }),
      /* @__PURE__ */ t.jsx("div", { children: p ? "Failed" : "Passed" })
    ] }),
    /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        c == null ? void 0 : c.httpStatusCode,
        " (Expected: ",
        (v = o == null ? void 0 : o.httpStatusExpected) == null ? void 0 : v.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ t.jsx("div", { children: d })
    ] }),
    /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ t.jsx("div", { children: x })
    ] }),
    (a == null ? void 0 : a.curl) && /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Request" }),
      /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(Le, { curl: a == null ? void 0 : a.curl, id: "happy-path", waiting: m }) })
    ] }),
    ((c == null ? void 0 : c.http) || f) && /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Response" }),
      /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(
        ye,
        {
          accented: !0,
          response: f || Me(je.Buffer.from(c.http, "base64"))
        }
      ) })
    ] }),
    ((i == null ? void 0 : i.error) || g) && /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx("div", { children: "Error" }),
      /* @__PURE__ */ t.jsx("div", { children: g ? g.message : i == null ? void 0 : i.error })
    ] })
  ] });
}
const ks = h.div`
  margin: 8px;
  border: 1px solid var(${u.border});
`, q = h.div`
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
function Rs({
  global: e,
  operation: s
}) {
  const n = k(), r = s.issues.critical ?? 0, a = s.issues.high ?? 0;
  return /* @__PURE__ */ t.jsxs(Os, { children: [
    /* @__PURE__ */ t.jsxs(Ps, { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ t.jsx("b", { children: e.state }),
        " (Exit code: ",
        e.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ t.jsx("div", { children: B.fromISO(e.endDate).toLocaleString(B.DATETIME_MED) }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        "Execution time:",
        " ",
        B.fromISO(e.endDate).diff(B.fromISO(e.startDate)).toFormat("mm:ss.SSS")
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs(qs, { children: [
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          onClick: (c) => {
            c.preventDefault(), c.stopPropagation(), n(U("tests")), n(P({}));
          },
          children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              s.conformanceTestRequests.executed,
              " ",
              /* @__PURE__ */ t.jsx(K, {})
            ] }),
            /* @__PURE__ */ t.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          onClick: (c) => {
            c.preventDefault(), c.stopPropagation(), n(U("tests")), n(P({}));
          },
          children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              s.issues.total ?? 0,
              " ",
              /* @__PURE__ */ t.jsx(K, {})
            ] }),
            /* @__PURE__ */ t.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          onClick: (c) => {
            c.preventDefault(), c.stopPropagation(), n(U("tests")), n(P({ severity: "high" }));
          },
          children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              r + a,
              " ",
              /* @__PURE__ */ t.jsx(K, {})
            ] }),
            /* @__PURE__ */ t.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const Os = h.div`
  margin: 8px;
`, qs = h.div`
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
`, Ps = h.div`
  display: flex;
  border: 1px solid var(${u.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${u.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function Ts({
  issue: e,
  httpResponse: s,
  error: n,
  id: r,
  waiting: a
}) {
  var w, y, E, H, D, I, C, R, _, M, N, L, T, te, se, ne, re, ie, ae;
  const c = k(), [i, o] = A.useState(!0), { response: p, test: x, outcome: d } = e, f = !((d == null ? void 0 : d.status) === "expected" && (d == null ? void 0 : d.conformant) === !0), g = (d == null ? void 0 : d.status) === "expected", m = d == null ? void 0 : d.conformant;
  let v = "N/A", b = "N/A";
  const S = ((y = (w = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : w[0]) == null ? void 0 : y.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  return S === "Yes" && (v = ((H = (E = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : E[0]) == null ? void 0 : H.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), v === "Yes" && (b = ((I = (D = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : D[0]) == null ? void 0 : I.responseKey) === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ t.jsxs(As, { children: [
    /* @__PURE__ */ t.jsxs(Ns, { collapsed: i, onClick: () => o(!i), children: [
      /* @__PURE__ */ t.jsx("div", { children: i ? /* @__PURE__ */ t.jsx(Mt, {}) : /* @__PURE__ */ t.jsx(Bt, {}) }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx(Hs, { children: (C = e.test) == null ? void 0 : C.description }),
        /* @__PURE__ */ t.jsxs(Ds, { children: [
          f ? /* @__PURE__ */ t.jsxs(F, { children: [
            /* @__PURE__ */ t.jsx(J, {}),
            " Failed",
            e.outcome.criticality > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              "/",
              /* @__PURE__ */ t.jsxs("span", { style: { fontWeight: Ms[d.criticality] }, children: [
                " ",
                _s[d.criticality]
              ] })
            ] })
          ] }) : /* @__PURE__ */ t.jsxs(F, { children: [
            /* @__PURE__ */ t.jsx(z, {}),
            " Passed"
          ] }),
          f && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(F, { children: g ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(z, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(J, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ t.jsx(F, { children: m ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(z, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(J, {}),
              " Conforms to Contract: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !i && /* @__PURE__ */ t.jsxs(Is, { children: [
      /* @__PURE__ */ t.jsxs($, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "HTTP code received" }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          (R = e.response) == null ? void 0 : R.httpStatusCode,
          " (Expected:",
          " ",
          (M = (_ = e.test) == null ? void 0 : _.httpStatusExpected) == null ? void 0 : M.join(", "),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs($, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Response code found in API Contract" }),
        /* @__PURE__ */ t.jsx("div", { children: S })
      ] }),
      /* @__PURE__ */ t.jsxs($, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Content-Type found in API Contract" }),
        /* @__PURE__ */ t.jsx("div", { children: v })
      ] }),
      /* @__PURE__ */ t.jsxs($, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Response matches API Contract" }),
        /* @__PURE__ */ t.jsx("div", { children: b })
      ] }),
      ((L = (N = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : N[0]) == null ? void 0 : L.responseDescription) && /* @__PURE__ */ t.jsxs($, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Response analysis" }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          " ",
          (te = (T = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : T[0]) == null ? void 0 : te.responseDescription
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs($, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "JSON Pointer" }),
        /* @__PURE__ */ t.jsx("div", { children: (se = e.test) != null && se.jsonPointer ? /* @__PURE__ */ t.jsx(
          "a",
          {
            href: "#",
            onClick: (oe) => {
              var ce;
              oe.preventDefault(), oe.stopPropagation(), c(
                qe(((ce = e.test) == null ? void 0 : ce.jsonPointer) + "")
                // FIXME support indexed reports
              );
            },
            children: (ne = e.test) == null ? void 0 : ne.jsonPointer
          }
        ) : "N/A" })
      ] }),
      ((re = e.request) == null ? void 0 : re.curl) && /* @__PURE__ */ t.jsxs($, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Request" }),
        /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(Le, { waiting: a, curl: e.request.curl, id: r }) })
      ] }),
      n === void 0 && (s !== void 0 || ((ie = e.response) == null ? void 0 : ie.http) !== void 0) && /* @__PURE__ */ t.jsxs($, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Response" }),
        /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(
          ye,
          {
            accented: !0,
            response: s || Me(je.Buffer.from((ae = e.response) == null ? void 0 : ae.http, "base64"))
          }
        ) })
      ] }),
      n && /* @__PURE__ */ t.jsxs($, { children: [
        /* @__PURE__ */ t.jsx("div", { children: "Error" }),
        /* @__PURE__ */ t.jsx("div", { children: n == null ? void 0 : n.message })
      ] })
    ] })
  ] });
}
const As = h.div`
  margin: 8px;
  border: 1px solid var(${u.border});
`, Ns = h.div`
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
`, Hs = h.div`
  font-weight: 600;
`, Ds = h.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, F = h.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${u.foreground});
  }
`, Is = h.div`
  background-color: var(${u.computedOne});
`, $ = h.div`
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
`, _s = {
  0: "None",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Critical"
}, Ms = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700
};
function Ls({
  filters: e,
  onClick: s
}) {
  return /* @__PURE__ */ t.jsx(
    Bs,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), s();
      },
      children: /* @__PURE__ */ t.jsxs(Us, { children: [
        /* @__PURE__ */ t.jsx(jt, {}),
        e !== 0 && /* @__PURE__ */ t.jsx(Fs, { children: e })
      ] })
    }
  );
}
const Bs = h.div`
  width: 34px;
  height: 26px;
  position: relative;
`, Fs = h.div`
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
`, Us = h.button`
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
function Ys() {
  const e = k();
  return /* @__PURE__ */ t.jsxs(
    Vs,
    {
      onClick: (s) => {
        e(P({})), s.preventDefault(), s.stopPropagation();
      },
      children: [
        /* @__PURE__ */ t.jsx(bt, {}),
        " ",
        /* @__PURE__ */ t.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const Vs = h.div`
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
function Ks() {
  const e = j((r) => r.scan.filter), s = k(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ t.jsx(zs, { children: /* @__PURE__ */ t.jsx(
    Se,
    {
      label: "Severity",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? s(P({ ...e, severity: r == null ? void 0 : r.value })) : s(P({ ...e, severity: void 0 }));
      },
      selected: (e == null ? void 0 : e.severity) || "all"
    }
  ) });
}
const zs = h.div`
  width: 264px;
`;
function Ws() {
  const { filter: e, titles: s } = j((a) => a.scan), n = k(), r = [];
  for (const a of s)
    pe[a] && r.push({ label: pe[a], value: a });
  return /* @__PURE__ */ t.jsx(Gs, { children: /* @__PURE__ */ t.jsx(
    Se,
    {
      label: "Type",
      options: r,
      placeholder: "All",
      onSelectedItemChange: (a) => {
        a && a.value !== "all" ? n(P({ ...e, title: a.value })) : n(P({ ...e, title: void 0 }));
      },
      selected: e.title || "all"
    }
  ) });
}
const Gs = h.div`
  width: 264px;
`, pe = {
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
function Js() {
  const { filter: e, grouped: s } = j((o) => o.scan), [n, r] = A.useState(!0), c = ["severity", "title"].filter((o) => e && e[o] !== void 0).length, i = Object.keys(s).map((o) => s[o].length).reduce((o, p) => o + p, 0);
  return /* @__PURE__ */ t.jsxs(Qs, { children: [
    /* @__PURE__ */ t.jsxs(Xs, { children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        i,
        " issues"
      ] }),
      /* @__PURE__ */ t.jsx(Ls, { filters: c, onClick: () => r(!n) })
    ] }),
    !n && /* @__PURE__ */ t.jsxs(Zs, { children: [
      /* @__PURE__ */ t.jsx(Ks, {}),
      /* @__PURE__ */ t.jsx(Ws, {}),
      /* @__PURE__ */ t.jsx(Ys, {})
    ] })
  ] });
}
const Qs = h.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, Xs = h.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, Zs = h.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function en({
  issues: e,
  responses: s,
  errors: n,
  waitings: r,
  grouped: a
}) {
  return e.length === 0 ? /* @__PURE__ */ t.jsx(ue, { children: /* @__PURE__ */ t.jsx(tn, { children: "No test results available" }) }) : /* @__PURE__ */ t.jsxs(ue, { children: [
    /* @__PURE__ */ t.jsx(Js, {}),
    Object.keys(a).map((c) => /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx(sn, { children: nn[c] ?? "Unknown test type" }),
      a[c].map((i, o) => {
        const p = `${c}-${o}`;
        return /* @__PURE__ */ t.jsx(
          Ts,
          {
            issue: i,
            httpResponse: s[p],
            error: n[p],
            waiting: r[p],
            id: p
          },
          p
        );
      })
    ] }, c))
  ] });
}
const ue = h.div`
  margin-top: 8px;
`, tn = h.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${u.border});
`, sn = h.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, nn = {
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
function rn() {
  var m, v, b, S, w, y;
  const { scanReport: e, path: s, method: n, responses: r, errors: a, waitings: c, tab: i, issues: o, grouped: p } = j((E) => E.scan), x = k(), d = (E) => {
    x(U(E));
  };
  if (e === void 0)
    return /* @__PURE__ */ t.jsx(he, { children: /* @__PURE__ */ t.jsx(an, { children: "Report is not yet available" }) });
  const f = (S = (b = (v = (m = e.paths) == null ? void 0 : m[s]) == null ? void 0 : v[n]) == null ? void 0 : b.happyPaths) == null ? void 0 : S[0], g = (y = (w = e.paths) == null ? void 0 : w[s]) == null ? void 0 : y.summary;
  return /* @__PURE__ */ t.jsx(he, { children: /* @__PURE__ */ t.jsxs(Pt, { value: i, onValueChange: d, children: [
    /* @__PURE__ */ t.jsxs(Tt, { children: [
      /* @__PURE__ */ t.jsx(W, { value: "summary", children: "Summary" }),
      /* @__PURE__ */ t.jsx(W, { value: "tests", children: "Tests" }),
      /* @__PURE__ */ t.jsx(W, { value: "logs", children: "Logs" })
    ] }),
    /* @__PURE__ */ t.jsxs(G, { value: "summary", children: [
      /* @__PURE__ */ t.jsx(Rs, { global: e.summary, operation: g }),
      f && /* @__PURE__ */ t.jsx(
        $s,
        {
          issue: f,
          responses: r,
          errors: a,
          waitings: c
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(G, { value: "tests", children: /* @__PURE__ */ t.jsx(
      en,
      {
        issues: o,
        grouped: p,
        responses: r,
        errors: a,
        waitings: c
      }
    ) }),
    /* @__PURE__ */ t.jsx(G, { value: "logs", children: /* @__PURE__ */ t.jsx(cs, {}) })
  ] }) });
}
const he = h.div``, an = h.div`
  margin: 1em;
  padding: 10px;
`;
function on() {
  const e = j((s) => s.scan.error);
  return e ? /* @__PURE__ */ t.jsx(dn, { children: /* @__PURE__ */ t.jsxs(cn, { children: [
    /* @__PURE__ */ t.jsx("div", { children: e.message }),
    e.details && /* @__PURE__ */ t.jsx("div", { children: e.details })
  ] }) }) : null;
}
const cn = h.div`
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
`, dn = h.div`
  padding: 8px;
`;
function ln() {
  const s = Ae((i) => i.logging.messages).filter((i) => i.level == "info"), n = A.useRef(null), [r, a] = A.useState(!1);
  if (A.useEffect(() => {
    n.current && !r && (n.current.scrollTop = n.current.scrollHeight);
  }, [s, r]), s.length === 0)
    return null;
  const c = () => {
    const i = n.current;
    if (i) {
      const o = i.scrollTop, p = i.scrollHeight, x = i.clientHeight;
      p - (o + x) < 10 ? a(!1) : a(!0);
    }
  };
  return /* @__PURE__ */ t.jsx(fn, { children: /* @__PURE__ */ t.jsx(un, { ref: n, onScroll: c, children: s.map((i, o, p) => /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx(pn, { first: o === 0, last: o === p.length - 1 }),
    /* @__PURE__ */ t.jsx("div", { children: i.message })
  ] }, o)) }) });
}
function pn({ first: e, last: s }) {
  return /* @__PURE__ */ t.jsxs(hn, { first: e, last: s, children: [
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("div", {})
  ] });
}
const un = h.div`
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
`, hn = h.div`
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
`, fn = h.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${u.border});
`;
function xn() {
  const e = k(), { path: s, method: n, oas: r, rawOas: a, defaultValues: c, scanConfigRaw: i, scanReport: o, waiting: p, error: x } = j((C) => C.scan), d = j((C) => C.prefs), {
    docker: { replaceLocalhost: f },
    scanRuntime: g,
    platform: m
  } = j((C) => C.config.data), v = mn(r, d.scanServer, c.server), b = {
    ...c,
    server: v,
    security: gn(c.security, d.security)
  }, S = async (C) => {
    const R = gt(C), [_, M] = Yt(
      i,
      s,
      n,
      g,
      f,
      m,
      R
    );
    e(me(R.server));
    const N = R.security[R.securityIndex];
    if (N)
      for (const [L, T] of Object.entries(N))
        typeof T == "string" && T.startsWith("{{") && T.endsWith("}}") && e(ve({ scheme: L, secret: T }));
    e(ns()), e(
      ke({
        defaultValues: R,
        scanConfigRaw: _,
        env: M,
        rawOas: a
      })
    );
  }, [w, y] = A.useState(!1);
  A.useEffect(() => {
    y(o !== void 0);
  }, [o]);
  const E = Ot({
    reValidateMode: "onChange",
    values: ut(b)
  }), { handleSubmit: H, formState: D } = E, I = Object.keys(D.errors || {}).length > 0;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(qt, { ...E, children: /* @__PURE__ */ t.jsxs(
      ht,
      {
        collapsed: w,
        title: "Scan Configuration",
        onExpand: () => y(!1),
        children: [
          /* @__PURE__ */ t.jsx(
            ft,
            {
              method: n,
              path: s,
              servers: be(r),
              onSubmit: H(S),
              buttonText: "Scan",
              submitDisabled: I,
              waiting: p
            }
          ),
          /* @__PURE__ */ t.jsx(xt, { oas: r, path: s, method: n })
        ]
      }
    ) }),
    o && /* @__PURE__ */ t.jsx(rn, {}),
    /* @__PURE__ */ t.jsx(on, {}),
    (p || x) && /* @__PURE__ */ t.jsx(ln, {})
  ] });
}
function gn(e, s) {
  const n = [];
  for (const r of e) {
    const a = {};
    for (const [c, i] of Object.entries(r))
      s[c] && typeof i == "string" ? a[c] = s[c] : a[c] = i;
    n.push(a);
  }
  return n;
}
function mn(e, s, n) {
  const r = be(e), a = r.some((i) => i === s);
  if (s !== void 0 && s !== "" && a)
    return s;
  const c = r.some((i) => i === s);
  return n !== void 0 && n !== "" && c ? n : r.length > 0 ? r[0] : "";
}
function vn() {
  const e = k(), { error: s } = j((n) => n.scan);
  return /* @__PURE__ */ t.jsxs(yn, { children: [
    s && /* @__PURE__ */ t.jsxs(jn, { children: [
      /* @__PURE__ */ t.jsx(Lt, {}),
      /* @__PURE__ */ t.jsx("div", { children: s.message }),
      s.code === "audit-error" && /* @__PURE__ */ t.jsx(
        bn,
        {
          onClick: (n) => {
            e(Pe()), n.preventDefault(), n.stopPropagation();
          },
          children: "View report"
        }
      )
    ] }),
    !s && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(Sn, {}),
      /* @__PURE__ */ t.jsx(wn, {})
    ] })
  ] });
}
const yn = h.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`, jn = h.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border: 1px solid var(${u.border});
  height: 58px;
  color: var(${u.errorForeground});
  background-color: var(${u.errorBackground});
  font-size: 14px;
  gap: 8px;
  > svg {
    fill: var(${u.errorForeground});
    width: 20px;
    height: 20px;
  }
  > div {
    flex: 1;
  }
`, bn = h.button`
  cursor: pointer;
  background-color: var(${u.buttonBackground});
  color: var(${u.buttonForeground});
  border: none;
  padding: 6px 16px;
`, Be = We`
  0% {
    background-color: var(${u.computedOne});
  }
  100% {
    background-color: var(${u.computedTwo});
  }
`, Sn = h.div`
  border: 1px solid var(${u.border});
  height: 2.1rem;
  animation: ${Be} 1s linear infinite alternate;
`, wn = h.div`
  border: 1px solid var(${u.border});
  height: 15rem;
  animation: ${Be} 1s linear infinite alternate;
`, fe = [
  {
    id: "start-scan",
    title: "Scan is starting",
    element: /* @__PURE__ */ t.jsx(vn, {}),
    when: Ee
  },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ t.jsx(xn, {}),
    when: $e
  }
], Cn = {
  changeTheme: et,
  startScan: Ee,
  scanOperation: $e,
  showGeneralError: Jt,
  showHttpError: Qt,
  showHttpResponse: Xt,
  showScanReport: Gt,
  loadEnv: Ct,
  loadPrefs: mt,
  loadConfig: kt,
  showLogMessage: ss
};
function En() {
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Ze, {}),
    /* @__PURE__ */ t.jsx(rt, {})
  ] });
}
function $n(e, s) {
  const n = as(os(e, fe), s);
  Ge(document.getElementById("root")).render(
    /* @__PURE__ */ t.jsx(Je.StrictMode, { children: /* @__PURE__ */ t.jsx(Qe, { store: n, children: /* @__PURE__ */ t.jsx(nt.Provider, { value: fe, children: /* @__PURE__ */ t.jsx(En, {}) }) }) })
  ), window.addEventListener("message", Xe(n, Cn));
}
window.renderWebView = $n;
