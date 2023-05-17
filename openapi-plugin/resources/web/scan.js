import { c as ye, u as be, a as Je, l as Qe, t as Ze, b as et, s as tt, i as st, j as s, T as x, r as p, d as nt, R as rt, P as ot, m as it, e as at, f as ct } from "./ThemeStyles.c0d84d2f.js";
import { f as dt, i as lt, g as pt, a as ut, b as ht, c as ft, r as xt, p as gt, s as vt, d as $e, e as Ce, $ as je, h as mt, j as yt, k as bt, l as $t, m as Ct, n as jt, o as wt, R as we, q as Ee, w as Et, S as St, O as Tt, t as Se, u as Rt, v as Pt, x as Ot, y as kt, z as _t } from "./Response.895d496e.js";
import { e as At, s as Dt, $ as Ht, T as Nt, a as X, b as J, l as Mt } from "./TrashCan.5b3df73f.js";
import { c as Lt, $ as Te, a as It, b as Re, d as Pe, e as qt, f as Bt, g as N, P as Ft, S as Q, h as Ut, l as Yt } from "./index.module.a5a23f10.js";
import { u as Vt } from "./useDispatch.43a2a81a.js";
import { _ as D, u as Kt, F as zt } from "./index.esm.97fc0c41.js";
import { s as v, U as Wt } from "./styled-components.browser.esm.5667ec00.js";
import { D as U, S as Gt } from "./datetime.69f0f9cf.js";
import { S as Xt } from "./AngleDown.23d22323.js";
import { S as Z } from "./ExclamationCircle.a44a5fc9.js";
const Jt = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace"
];
function fe(e) {
  return {
    query: e.parameters.query,
    header: e.parameters.header,
    path: e.parameters.path,
    cookie: e.parameters.cookie
  };
}
function Qt(e, t, n) {
  var o;
  const r = Oe(
    e,
    e.playbook.paths[t][n].happyPaths[0].requests[0]
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
    requestBody: (o = r == null ? void 0 : r.requestBody) == null ? void 0 : o.json,
    host: r.host
  };
}
function Zt(e, t, n, r, o, c, i) {
  var h, g, y;
  const d = JSON.parse(JSON.stringify(e)), l = Oe(
    d,
    d.playbook.paths[t][n].happyPaths[0].requests[0]
  ), u = ss(i.server, r, o, c);
  l.host = u.endsWith("/") ? u.slice(0, -1) : u, l.path = t, l.method = n, l.requestBody && ((h = i.body) == null ? void 0 : h.value) !== void 0 && (l.requestBody.json = (g = i.body) == null ? void 0 : g.value), l.headerParameters = i.parameters.header, l.queryParameters = i.parameters.query, l.cookieParameters = i.parameters.cookie, l.pathParameters = i.parameters.path, d.playbook.paths[t] = {
    [n]: d.playbook.paths[t][n]
  }, ((y = d == null ? void 0 : d.environment) == null ? void 0 : y.host) !== void 0 && (d.environment.host = u);
  const a = es(
    i.security,
    i.securityIndex,
    d == null ? void 0 : d.environment
  );
  return [d, a];
}
function Oe(e, t) {
  return t.$ref ? dt(e, t.$ref).request.requestDetails : t.request.requestDetails;
}
function es(e, t, n) {
  const r = {}, o = e[t];
  if (o)
    for (const [c, i] of Object.entries(o)) {
      const d = ts(n, c);
      d !== void 0 && (typeof i == "string" ? r[d] = i : r[d] = `${i.username}:${i.password}`);
    }
  return r;
}
function ts(e, t) {
  const n = e == null ? void 0 : e[t], r = n == null ? void 0 : n.match(/env\('(.+)'\)/);
  if (Array.isArray(r))
    return r[1];
  const o = n == null ? void 0 : n.match(/env_with_default\('(.+)',.+\)/);
  if (Array.isArray(o))
    return o[1];
}
function ss(e, t, n, r) {
  return t == "docker" && n && (r === "darwin" || r === "win32") && (e.toLowerCase().startsWith("https://localhost") || e.toLowerCase().startsWith("http://localhost")) ? e.replace(/localhost/i, "host.docker.internal") : e;
}
function ee(e, t, n, r) {
  return t == "docker" && n && (r === "darwin" || r === "win32") && (e.toLowerCase().includes("https://host.docker.internal") || e.toLowerCase().includes("http://host.docker.internal")) ? e.replace("host.docker.internal", "localhost") : e;
}
const ns = {
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
  waiting: !1
}, ke = ye({
  name: "scan",
  initialState: ns,
  reducers: {
    startScan: (e, t) => {
      e.error = void 0;
    },
    scanOperation: (e, t) => {
      const { oas: n, rawOas: r, path: o, method: c, config: i } = t.payload, d = Qt(i, o, c);
      if (lt(n)) {
        const l = pt(n, o, c), u = ut(l), a = fe(d);
        e.defaultValues = {
          server: d.host,
          parameters: a,
          security: u,
          securityIndex: 0,
          body: { mediaType: "application/json", value: d.requestBody }
        };
      } else {
        const l = ht(n, o, c), u = ft(l), a = fe(d);
        e.defaultValues = {
          server: d.host,
          parameters: a,
          security: u,
          securityIndex: 0
        };
      }
      e.oas = n, e.rawOas = r, e.path = o, e.method = c, e.scanConfigRaw = i, e.scanConfig = d, e.scanReport = void 0, e.error = void 0;
    },
    runScan: (e, t) => {
      e.defaultValues = t.payload.defaultValues, e.scanReport = void 0, e.error = void 0, e.waiting = !0;
    },
    showScanReport: (e, t) => {
      e.scanReport = t.payload.report, e.waiting = !1;
    },
    showGeneralError: (e, t) => {
      e.error = t.payload, e.waiting = !1;
    },
    showHttpResponse: (e, t) => {
      const n = t.payload;
      e.responses[n.id] = n, e.waitings[n.id] = !1, delete e.errors[n.id];
    },
    showHttpError: (e, t) => {
      const n = t.payload;
      e.errors[n.id] = n, e.waitings[n.id] = !1, delete e.responses[n.id];
    },
    sendHttpRequest: (e, t) => {
      e.waitings[t.payload.id] = !0;
    },
    sendCurlRequest: (e, t) => {
    },
    showJsonPointer: (e, t) => {
    },
    showAuditReport: (e, t) => {
    }
  }
}), {
  startScan: _e,
  scanOperation: Ae,
  runScan: De,
  showScanReport: rs,
  showGeneralError: os,
  showHttpError: is,
  sendHttpRequest: He,
  sendCurlRequest: Ne,
  showHttpResponse: as,
  showJsonPointer: Me,
  showAuditReport: Le
} = ke.actions, cs = ke.reducer, ds = {
  messages: []
}, Ie = ye({
  name: "logging",
  initialState: ds,
  reducers: {
    showLogMessage: (e, t) => {
      e.messages.push(t.payload);
    },
    clearLogs: (e) => {
      e.messages = [];
    }
  }
}), { showLogMessage: ls, clearLogs: ps } = Ie.actions, qe = be, us = Ie.reducer, hs = {
  theme: Ze,
  scan: cs,
  router: xt,
  env: At,
  prefs: gt,
  config: Lt,
  logging: us
}, fs = (e, t) => Je({
  reducer: hs,
  middleware: (n) => n().prepend(e.middleware).concat(Qe),
  preloadedState: {
    theme: t
  }
}), V = () => Vt(), A = be, Be = et(), k = Be.startListening;
function xs(e, t) {
  const n = {
    runScan: () => k({
      actionCreator: De,
      effect: async (r, o) => {
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
    savePrefs: () => k({
      matcher: st($e, Ce),
      effect: async (r, o) => {
        const { prefs: c } = o.getState();
        e.postMessage({
          command: "savePrefs",
          payload: c
        });
      }
    }),
    sendHttpRequest: () => k({
      actionCreator: He,
      effect: async (r, o) => {
        e.postMessage({
          command: "sendHttpRequest",
          payload: r.payload
        });
      }
    }),
    sendCurlRequest: () => k({
      actionCreator: Ne,
      effect: async (r, o) => {
        e.postMessage({
          command: "sendCurlRequest",
          payload: r.payload
        });
      }
    }),
    showJsonPointer: () => k({
      actionCreator: Me,
      effect: async (r, o) => {
        e.postMessage({
          command: "showJsonPointer",
          payload: r.payload
        });
      }
    }),
    showAuditReport: () => k({
      actionCreator: Le,
      effect: async (r, o) => {
        e.postMessage({
          command: "showAuditReport",
          payload: void 0
        });
      }
    }),
    showEnvWindow: () => k({
      actionCreator: Dt,
      effect: async (r, o) => {
        e.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return vt(k, t), tt(n), Be;
}
const gs = (e) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ s.jsx("path", { d: "M64 464h224c8.8 0 16-7.2 16-16v-64h48v64c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h64v48H64c-8.84 0-16 7.2-16 16v224c0 8.8 7.16 16 16 16zm96-400c0-35.35 28.7-64 64-64h224c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V64zm64 240h224c8.8 0 16-7.2 16-16V64c0-8.84-7.2-16-16-16H224c-8.8 0-16 7.16-16 16v224c0 8.8 7.2 16 16 16z" }) });
function vs() {
  const t = qe((n) => n.logging.messages).filter((n) => n.level == "info");
  return t.length === 0 ? null : /* @__PURE__ */ s.jsx(ys, { children: t.map((n, r, o) => /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsx(ms, { first: r === 0, last: r === o.length - 1 }),
    /* @__PURE__ */ s.jsx("div", { children: n.message })
  ] }, r)) });
}
function ms({ first: e, last: t }) {
  return /* @__PURE__ */ s.jsxs(bs, { first: e, last: t, children: [
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx("div", {})
  ] });
}
const ys = v.div`
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
`, bs = v.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ first: e }) => !e && `background-color: var(${x.border});`}
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
    ${({ last: e }) => !e && `background-color: var(${x.border});`}
  }
`;
function f(e) {
  e === void 0 || this.initialize(e), this.maxHeaderSize = f.maxHeaderSize;
}
f.prototype.initialize = function(e, t) {
  this.type = e, this.state = e + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
f.encoding = "ascii";
f.maxHeaderSize = 80 * 1024;
f.REQUEST = "REQUEST";
f.RESPONSE = "RESPONSE";
var Fe = f.kOnHeaders = 1, te = f.kOnHeadersComplete = 2, K = f.kOnBody = 3, ne = f.kOnMessageComplete = 4;
f.prototype[Fe] = f.prototype[te] = f.prototype[K] = f.prototype[ne] = function() {
};
var Ue = !0;
Object.defineProperty(f, "kOnExecute", {
  get: function() {
    return Ue = !1, 99;
  }
});
var Ye = f.methods = [
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
], Ve = Ye.indexOf("CONNECT");
f.prototype.reinitialize = f;
f.prototype.close = f.prototype.pause = f.prototype.resume = f.prototype.free = function() {
};
f.prototype._compatMode0_11 = !1;
f.prototype.getAsyncId = function() {
  return 0;
};
var $s = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
f.prototype.execute = function(e, t, n) {
  if (!(this instanceof f))
    throw new TypeError("not a HTTPParser");
  t = t || 0, n = typeof n == "number" ? n : e.length, this.chunk = e, this.offset = t;
  var r = this.end = t + n;
  try {
    for (; this.offset < r && !this[this.state](); )
      ;
  } catch (o) {
    if (this.isUserCall)
      throw o;
    return this.hadError = !0, o;
  }
  return this.chunk = null, n = this.offset - t, $s[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || f.maxHeaderSize)) ? new Error("max header size exceeded") : n;
};
var Cs = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
f.prototype.finish = function() {
  if (!this.hadError) {
    if (!Cs[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[ne]());
  }
};
f.prototype.consume = f.prototype.unconsume = f.prototype.getCurrentBuffer = function() {
};
f.prototype.userCall = function() {
  this.isUserCall = !0;
  var e = this;
  return function(t) {
    return e.isUserCall = !1, t;
  };
};
f.prototype.nextRequest = function() {
  this.userCall()(this[ne]()), this.reinitialize(this.type);
};
f.prototype.consumeLine = function() {
  for (var e = this.end, t = this.chunk, n = this.offset; n < e; n++)
    if (t[n] === 10) {
      var r = this.line + t.toString(f.encoding, this.offset, n);
      return r.charAt(r.length - 1) === "\r" && (r = r.substr(0, r.length - 1)), this.line = "", this.offset = n + 1, r;
    }
  this.line += t.toString(f.encoding, this.offset, this.end), this.offset = this.end;
};
var js = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, ws = /^[ \t]+(.*[^ \t])/;
f.prototype.parseHeader = function(e, t) {
  if (e.indexOf("\r") !== -1)
    throw z("HPE_LF_EXPECTED");
  var n = js.exec(e), r = n && n[1];
  if (r)
    t.push(r), t.push(n[2]);
  else {
    var o = ws.exec(e);
    o && t.length && (t[t.length - 1] && (t[t.length - 1] += " "), t[t.length - 1] += o[1]);
  }
};
var Es = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
f.prototype.REQUEST_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var t = Es.exec(e);
    if (t === null)
      throw z("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? t[1] : Ye.indexOf(t[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = t[2], this.info.versionMajor = +t[3], this.info.versionMinor = +t[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var Ss = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
f.prototype.RESPONSE_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var t = Ss.exec(e);
    if (t === null)
      throw z("HPE_INVALID_CONSTANT");
    this.info.versionMajor = +t[1], this.info.versionMinor = +t[2];
    var n = this.info.statusCode = +t[3];
    this.info.statusMessage = t[4], ((n / 100 | 0) === 1 || n === 204 || n === 304) && (this.body_bytes = 0), this.state = "HEADER";
  }
};
f.prototype.shouldKeepAlive = function() {
  if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {
    if (this.connection.indexOf("close") !== -1)
      return !1;
  } else if (this.connection.indexOf("keep-alive") === -1)
    return !1;
  return !!(this.body_bytes !== null || this.isChunked);
};
f.prototype.HEADER = function() {
  var e = this.consumeLine();
  if (e !== void 0) {
    var t = this.info;
    if (e)
      this.parseHeader(e, t.headers);
    else {
      for (var n = t.headers, r = !1, o, c = !1, i = 0; i < n.length; i += 2)
        switch (n[i].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = n[i + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (o = +n[i + 1], r) {
              if (o !== this.body_bytes)
                throw z("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              r = !0, this.body_bytes = o;
            break;
          case "connection":
            this.connection += n[i + 1].toLowerCase();
            break;
          case "upgrade":
            c = !0;
            break;
        }
      this.isChunked && r && (r = !1, this.body_bytes = null), c && this.connection.indexOf("upgrade") != -1 ? t.upgrade = this.type === f.REQUEST || t.statusCode === 101 : t.upgrade = t.method === Ve, this.isChunked && t.upgrade && (this.isChunked = !1), t.shouldKeepAlive = this.shouldKeepAlive();
      var d;
      if (Ue ? d = this.userCall()(this[te](t)) : d = this.userCall()(this[te](
        t.versionMajor,
        t.versionMinor,
        t.headers,
        t.method,
        t.url,
        t.statusCode,
        t.statusMessage,
        t.upgrade,
        t.shouldKeepAlive
      )), d === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !d)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (d || this.body_bytes === 0)
          return this.nextRequest(), t.upgrade;
        this.body_bytes === null ? this.state = "BODY_RAW" : this.state = "BODY_SIZED";
      }
    }
  }
};
f.prototype.BODY_CHUNKHEAD = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.body_bytes = parseInt(e, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
f.prototype.BODY_CHUNK = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[K](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
f.prototype.BODY_CHUNKEMPTYLINE = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
f.prototype.BODY_CHUNKTRAILERS = function() {
  var e = this.consumeLine();
  e !== void 0 && (e ? this.parseHeader(e, this.trailers) : (this.trailers.length && this.userCall()(this[Fe](this.trailers, "")), this.nextRequest()));
};
f.prototype.BODY_RAW = function() {
  var e = this.end - this.offset;
  this.userCall()(this[K](this.chunk, this.offset, e)), this.offset = this.end;
};
f.prototype.BODY_SIZED = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[K](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(e) {
  var t = f["kOn" + e];
  Object.defineProperty(f.prototype, "on" + e, {
    get: function() {
      return this[t];
    },
    set: function(n) {
      return this._compatMode0_11 = !0, Ve = "CONNECT", this[t] = n;
    }
  });
});
function z(e) {
  var t = new Error("Parse Error");
  return t.code = e, t;
}
function Ke(e) {
  const t = new f(f.RESPONSE);
  let n = !1, r = 0, o, c, i = [], d = [];
  if (t[f.kOnHeadersComplete] = function(a) {
    a.shouldKeepAlive, a.upgrade, r = a.statusCode, a.statusMessage, o = a.versionMajor, c = a.versionMinor, i = a.headers;
  }, t[f.kOnBody] = function(a, h, g) {
    d.push(a.slice(h, h + g));
  }, t[f.kOnHeaders] = function(a) {
  }, t[f.kOnMessageComplete] = function() {
    n = !0;
  }, t.execute(e), t.finish(), !n)
    throw new Error("Could not parse");
  let l = d.join("");
  const u = [];
  for (let a = 0; a < i.length - 1; a++)
    a % 2 === 0 && u.push([i[a], i[a + 1]]);
  return {
    headers: u,
    statusCode: r,
    httpVersion: `${o}.${c}`,
    body: l
  };
}
const Ts = /* @__PURE__ */ p.forwardRef((e, t) => /* @__PURE__ */ p.createElement(Te.span, D({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), Rs = Ts, [W, ar] = It("Tooltip", [
  je
]), G = je(), Ps = "TooltipProvider", Os = 700, se = "tooltip.open", [ks, re] = W(Ps), _s = (e) => {
  const { __scopeTooltip: t, delayDuration: n = Os, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: c } = e, [i, d] = p.useState(!0), l = p.useRef(!1), u = p.useRef(0);
  return p.useEffect(() => {
    const a = u.current;
    return () => window.clearTimeout(a);
  }, []), /* @__PURE__ */ p.createElement(ks, {
    scope: t,
    isOpenDelayed: i,
    delayDuration: n,
    onOpen: p.useCallback(() => {
      window.clearTimeout(u.current), d(!1);
    }, []),
    onClose: p.useCallback(() => {
      window.clearTimeout(u.current), u.current = window.setTimeout(
        () => d(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: l,
    onPointerInTransitChange: p.useCallback((a) => {
      l.current = a;
    }, []),
    disableHoverableContent: o
  }, c);
}, oe = "Tooltip", [As, I] = W(oe), Ds = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: c, disableHoverableContent: i, delayDuration: d } = e, l = re(oe, e.__scopeTooltip), u = G(t), [a, h] = p.useState(null), g = $t(), y = p.useRef(0), m = i ?? l.disableHoverableContent, C = d ?? l.delayDuration, $ = p.useRef(!1), [j = !1, b] = Bt({
    prop: r,
    defaultProp: o,
    onChange: (S) => {
      S ? (l.onOpen(), document.dispatchEvent(new CustomEvent(se))) : l.onClose(), c == null || c(S);
    }
  }), w = p.useMemo(() => j ? $.current ? "delayed-open" : "instant-open" : "closed", [
    j
  ]), E = p.useCallback(() => {
    window.clearTimeout(y.current), $.current = !1, b(!0);
  }, [
    b
  ]), T = p.useCallback(() => {
    window.clearTimeout(y.current), b(!1);
  }, [
    b
  ]), R = p.useCallback(() => {
    window.clearTimeout(y.current), y.current = window.setTimeout(() => {
      $.current = !0, b(!0);
    }, C);
  }, [
    C,
    b
  ]);
  return p.useEffect(() => () => window.clearTimeout(y.current), []), /* @__PURE__ */ p.createElement(Ct, u, /* @__PURE__ */ p.createElement(As, {
    scope: t,
    contentId: g,
    open: j,
    stateAttribute: w,
    trigger: a,
    onTriggerChange: h,
    onTriggerEnter: p.useCallback(() => {
      l.isOpenDelayed ? R() : E();
    }, [
      l.isOpenDelayed,
      R,
      E
    ]),
    onTriggerLeave: p.useCallback(() => {
      m ? T() : window.clearTimeout(y.current);
    }, [
      T,
      m
    ]),
    onOpen: E,
    onClose: T,
    disableHoverableContent: m
  }, n));
}, xe = "TooltipTrigger", Hs = /* @__PURE__ */ p.forwardRef((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = I(xe, n), c = re(xe, n), i = G(n), d = p.useRef(null), l = Pe(t, d, o.onTriggerChange), u = p.useRef(!1), a = p.useRef(!1), h = p.useCallback(
    () => u.current = !1,
    []
  );
  return p.useEffect(() => () => document.removeEventListener("pointerup", h), [
    h
  ]), /* @__PURE__ */ p.createElement(jt, D({
    asChild: !0
  }, i), /* @__PURE__ */ p.createElement(Te.button, D({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: l,
    onPointerMove: N(e.onPointerMove, (g) => {
      g.pointerType !== "touch" && !a.current && !c.isPointerInTransitRef.current && (o.onTriggerEnter(), a.current = !0);
    }),
    onPointerLeave: N(e.onPointerLeave, () => {
      o.onTriggerLeave(), a.current = !1;
    }),
    onPointerDown: N(e.onPointerDown, () => {
      u.current = !0, document.addEventListener("pointerup", h, {
        once: !0
      });
    }),
    onFocus: N(e.onFocus, () => {
      u.current || o.onOpen();
    }),
    onBlur: N(e.onBlur, o.onClose),
    onClick: N(e.onClick, o.onClose)
  })));
}), ze = "TooltipPortal", [Ns, Ms] = W(ze, {
  forceMount: void 0
}), Ls = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, c = I(ze, t);
  return /* @__PURE__ */ p.createElement(Ns, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ p.createElement(Re, {
    present: n || c.open
  }, /* @__PURE__ */ p.createElement(wt, {
    asChild: !0,
    container: o
  }, r)));
}, L = "TooltipContent", Is = /* @__PURE__ */ p.forwardRef((e, t) => {
  const n = Ms(L, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...c } = e, i = I(L, e.__scopeTooltip);
  return /* @__PURE__ */ p.createElement(Re, {
    present: r || i.open
  }, i.disableHoverableContent ? /* @__PURE__ */ p.createElement(We, D({
    side: o
  }, c, {
    ref: t
  })) : /* @__PURE__ */ p.createElement(qs, D({
    side: o
  }, c, {
    ref: t
  })));
}), qs = /* @__PURE__ */ p.forwardRef((e, t) => {
  const n = I(L, e.__scopeTooltip), r = re(L, e.__scopeTooltip), o = p.useRef(null), c = Pe(t, o), [i, d] = p.useState(null), { trigger: l, onClose: u } = n, a = o.current, { onPointerInTransitChange: h } = r, g = p.useCallback(() => {
    d(null), h(!1);
  }, [
    h
  ]), y = p.useCallback((m, C) => {
    const $ = m.currentTarget, j = {
      x: m.clientX,
      y: m.clientY
    }, b = Vs(j, $.getBoundingClientRect()), w = b === "right" || b === "bottom" ? -5 : 5, T = b === "right" || b === "left" ? {
      x: m.clientX + w,
      y: m.clientY
    } : {
      x: m.clientX,
      y: m.clientY + w
    }, R = Ks(C.getBoundingClientRect()), S = Ws([
      T,
      ...R
    ]);
    d(S), h(!0);
  }, [
    h
  ]);
  return p.useEffect(() => () => g(), [
    g
  ]), p.useEffect(() => {
    if (l && a) {
      const m = ($) => y($, a), C = ($) => y($, l);
      return l.addEventListener("pointerleave", m), a.addEventListener("pointerleave", C), () => {
        l.removeEventListener("pointerleave", m), a.removeEventListener("pointerleave", C);
      };
    }
  }, [
    l,
    a,
    y,
    g
  ]), p.useEffect(() => {
    if (i) {
      const m = (C) => {
        const $ = C.target, j = {
          x: C.clientX,
          y: C.clientY
        }, b = (l == null ? void 0 : l.contains($)) || (a == null ? void 0 : a.contains($)), w = !zs(j, i);
        b ? g() : w && (g(), u());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [
    l,
    a,
    i,
    u,
    g
  ]), /* @__PURE__ */ p.createElement(We, D({}, e, {
    ref: c
  }));
}), [Bs, Fs] = W(oe, {
  isInside: !1
}), We = /* @__PURE__ */ p.forwardRef((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: c, onPointerDownOutside: i, ...d } = e, l = I(L, n), u = G(n), { onClose: a } = l;
  return p.useEffect(() => (document.addEventListener(se, a), () => document.removeEventListener(se, a)), [
    a
  ]), p.useEffect(() => {
    if (l.trigger) {
      const h = (g) => {
        const y = g.target;
        y != null && y.contains(l.trigger) && a();
      };
      return window.addEventListener("scroll", h, {
        capture: !0
      }), () => window.removeEventListener("scroll", h, {
        capture: !0
      });
    }
  }, [
    l.trigger,
    a
  ]), /* @__PURE__ */ p.createElement(mt, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: c,
    onPointerDownOutside: i,
    onFocusOutside: (h) => h.preventDefault(),
    onDismiss: a
  }, /* @__PURE__ */ p.createElement(yt, D({
    "data-state": l.stateAttribute
  }, u, d, {
    ref: t,
    style: {
      ...d.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ p.createElement(qt, null, r), /* @__PURE__ */ p.createElement(Bs, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ p.createElement(Rs, {
    id: l.contentId,
    role: "tooltip"
  }, o || r))));
}), Us = "TooltipArrow", Ys = /* @__PURE__ */ p.forwardRef((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = G(n);
  return Fs(Us, n).isInside ? null : /* @__PURE__ */ p.createElement(bt, D({}, o, r, {
    ref: t
  }));
});
function Vs(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), c = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, c)) {
    case c:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      return null;
  }
}
function Ks(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    {
      x: o,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: r
    },
    {
      x: o,
      y: r
    }
  ];
}
function zs(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let c = 0, i = t.length - 1; c < t.length; i = c++) {
    const d = t[c].x, l = t[c].y, u = t[i].x, a = t[i].y;
    l > r != a > r && n < (u - d) * (r - l) / (a - l) + d && (o = !o);
  }
  return o;
}
function Ws(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Gs(t);
}
function Gs(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const c = t[t.length - 1], i = t[t.length - 2];
      if ((c.x - i.x) * (o.y - i.y) >= (c.y - i.y) * (o.x - i.x))
        t.pop();
      else
        break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const c = n[n.length - 1], i = n[n.length - 2];
      if ((c.x - i.x) * (o.y - i.y) >= (c.y - i.y) * (o.x - i.x))
        n.pop();
      else
        break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const Xs = _s, Js = Ds, Qs = Hs, Zs = Ls, en = Is, tn = Ys;
function Ge({
  curl: e,
  id: t,
  waiting: n
}) {
  const r = V(), o = A((h) => h.scan.defaultValues), {
    docker: { replaceLocalhost: c },
    scanRuntime: i,
    platform: d
  } = A((h) => h.config.data), l = o == null ? void 0 : o.security[o.securityIndex], u = e.replace(/{{([\w-]+)\/([\w-]+)}}/gm, (h, g, y) => l !== void 0 && typeof l[g] == "string" ? l[g] : h), a = cn(u, t, i, c, d);
  return /* @__PURE__ */ s.jsxs(sn, { children: [
    /* @__PURE__ */ s.jsxs(nn, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
      /* @__PURE__ */ s.jsx(Xs, { children: /* @__PURE__ */ s.jsxs(Js, { children: [
        /* @__PURE__ */ s.jsx(Qs, { asChild: !0, children: /* @__PURE__ */ s.jsx("span", { children: /* @__PURE__ */ s.jsx(
          gs,
          {
            onClick: (h) => {
              h.preventDefault(), h.stopPropagation(), r(
                Ne(
                  ee(
                    u,
                    i,
                    c,
                    d
                  )
                )
              );
            }
          }
        ) }) }),
        /* @__PURE__ */ s.jsx(Zs, { children: /* @__PURE__ */ s.jsxs(rn, { sideOffset: 5, children: [
          "Copy cURL command to the clipboard",
          /* @__PURE__ */ s.jsx(on, {})
        ] }) })
      ] }) }),
      ee(e, i, c, d)
    ] }),
    /* @__PURE__ */ s.jsx(an, { children: /* @__PURE__ */ s.jsx(
      Ft,
      {
        label: "Resend",
        waiting: n,
        onClick: (h) => {
          h.preventDefault(), h.stopPropagation(), r(He(a));
        }
      }
    ) })
  ] });
}
const sn = v.div``, nn = v.div`
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
`, rn = v(en)`
  color: var(${x.notificationsForeground});
  background-color: var(${x.notificationsBackground});
  border: 1px solid var(${x.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, on = v(tn)`
  fill: var(${x.notificationsForeground});
`, an = v.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  > button {
    width: 80px;
    height: 22px;
  }
`;
function cn(e, t, n, r, o) {
  const c = dn(e).slice(1), i = {
    id: t,
    url: c.pop(),
    headers: {},
    method: "get",
    config: {
      https: {
        rejectUnauthorized: !1
      }
    }
  };
  for (let d = 0; d < c.length; d++) {
    const l = c[d], u = c[d + 1];
    if (l === "-d")
      i.body = u;
    else if (l == "-X")
      i.method = u.toLowerCase();
    else if (l === "-H") {
      const [a, h] = u.split(": ", 2);
      i.headers[a] = h;
    }
  }
  return i.url = ee(i.url, n, r, o), i;
}
function dn(e) {
  return ln(e).map((t) => t.value);
}
function ln(e) {
  const t = /[^\s"']+|(?:"|'){2,}|"(?!")([^"]*)"|'(?!')([^']*)'|"|'/g, n = [];
  let r;
  for (; r = t.exec(e); )
    r[2] ? n.push({ type: "single", value: r[2] }) : r[1] ? n.push({ type: "double", value: r[1] }) : n.push({ type: "plain", value: r[0] });
  return n;
}
function pn({
  issue: e,
  responses: t,
  errors: n,
  waitings: r
}) {
  var m;
  const { request: o, response: c, outcome: i, happyPath: d } = e, l = (i == null ? void 0 : i.status) !== "expected" || !(i != null && i.conformant);
  let u = "N/A";
  const a = d === null || (d == null ? void 0 : d.key) !== "happy.path.success" ? "No" : "Yes";
  a === "Yes" && (u = i != null && i.conformant ? "Yes" : "No");
  const h = t["happy-path"], g = n["happy-path"], y = r["happy-path"];
  return /* @__PURE__ */ s.jsxs(un, { children: [
    /* @__PURE__ */ s.jsx(_, { children: /* @__PURE__ */ s.jsx("div", { style: { opacity: 1 }, children: /* @__PURE__ */ s.jsx("b", { children: "Happy Path Testing results" }) }) }),
    /* @__PURE__ */ s.jsxs(_, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Test Status" }),
      /* @__PURE__ */ s.jsx("div", { children: l ? "Failed" : "Passed" })
    ] }),
    /* @__PURE__ */ s.jsxs(_, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        c == null ? void 0 : c.httpStatusCode,
        " (Expected: ",
        (m = d == null ? void 0 : d.httpStatusExpected) == null ? void 0 : m.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs(_, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ s.jsx("div", { children: a })
    ] }),
    /* @__PURE__ */ s.jsxs(_, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ s.jsx("div", { children: u })
    ] }),
    (o == null ? void 0 : o.curl) && /* @__PURE__ */ s.jsxs(_, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Request" }),
      /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(Ge, { curl: o == null ? void 0 : o.curl, id: "happy-path", waiting: y }) })
    ] }),
    ((c == null ? void 0 : c.http) || h) && /* @__PURE__ */ s.jsxs(_, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Response" }),
      /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(
        we,
        {
          accented: !0,
          response: h || Ke(Ee.Buffer.from(c.http, "base64"))
        }
      ) })
    ] }),
    ((i == null ? void 0 : i.error) || g) && /* @__PURE__ */ s.jsxs(_, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Error" }),
      /* @__PURE__ */ s.jsx("div", { children: g ? g.message : i == null ? void 0 : i.error })
    ] })
  ] });
}
const un = v.div`
  margin: 8px;
  border: 1px solid var(${x.border});
`, _ = v.div`
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
function hn({
  global: e,
  operation: t
}) {
  const n = t.issues.critical ?? 0, r = t.issues.high ?? 0;
  return /* @__PURE__ */ s.jsxs(fn, { children: [
    /* @__PURE__ */ s.jsxs(gn, { children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ s.jsx("b", { children: e.state }),
        " (Exit code: ",
        e.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ s.jsx("div", { children: U.fromISO(e.endDate).toLocaleString(U.DATETIME_MED) }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        "Execution time:",
        " ",
        U.fromISO(e.endDate).diff(U.fromISO(e.startDate)).toFormat("mm:ss.SSS")
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs(xn, { children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("div", { children: t.conformanceTestRequests.executed }),
        /* @__PURE__ */ s.jsx("div", { children: "Executed" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("div", { children: t.issues.total ?? 0 }),
        /* @__PURE__ */ s.jsx("div", { children: "Issues Found" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("div", { children: n + r }),
        /* @__PURE__ */ s.jsx("div", { children: "Critical/High" })
      ] })
    ] })
  ] });
}
const fn = v.div`
  margin: 8px;
`, xn = v.div`
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
    border: 1px solid var(${x.border});
  }
`, gn = v.div`
  display: flex;
  border: 1px solid var(${x.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${x.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function vn({
  issue: e,
  httpResponse: t,
  error: n,
  id: r,
  waiting: o
}) {
  var j, b, w, E, T, R, S, O, q, B, M, F, H, ie, ae, ce, de, le, pe;
  const c = V(), [i, d] = p.useState(!0), { response: l, test: u, outcome: a } = e, h = !((a == null ? void 0 : a.status) === "expected" && (a == null ? void 0 : a.conformant) === !0), g = (a == null ? void 0 : a.status) === "expected", y = a == null ? void 0 : a.conformant;
  let m = "N/A", C = "N/A";
  const $ = ((b = (j = a == null ? void 0 : a.apiResponseAnalysis) == null ? void 0 : j[0]) == null ? void 0 : b.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  return $ === "Yes" && (m = ((E = (w = a == null ? void 0 : a.apiResponseAnalysis) == null ? void 0 : w[0]) == null ? void 0 : E.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), m === "Yes" && (C = ((R = (T = a == null ? void 0 : a.apiResponseAnalysis) == null ? void 0 : T[0]) == null ? void 0 : R.responseKey) === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ s.jsxs(mn, { children: [
    /* @__PURE__ */ s.jsxs(yn, { collapsed: i, onClick: () => d(!i), children: [
      /* @__PURE__ */ s.jsx("div", { children: i ? /* @__PURE__ */ s.jsx(Xt, {}) : /* @__PURE__ */ s.jsx(Gt, {}) }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx(bn, { children: (S = e.test) == null ? void 0 : S.description }),
        /* @__PURE__ */ s.jsxs($n, { children: [
          h ? /* @__PURE__ */ s.jsxs(Y, { children: [
            /* @__PURE__ */ s.jsx(Z, {}),
            " Failed",
            e.outcome.criticality > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              "/",
              /* @__PURE__ */ s.jsxs("span", { style: { fontWeight: wn[a.criticality] }, children: [
                " ",
                jn[a.criticality]
              ] })
            ] })
          ] }) : /* @__PURE__ */ s.jsxs(Y, { children: [
            /* @__PURE__ */ s.jsx(Q, {}),
            " Passed"
          ] }),
          h && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(Y, { children: g ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(Q, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(Z, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ s.jsx(Y, { children: y ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(Q, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(Z, {}),
              " Conforms to Contract: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !i && /* @__PURE__ */ s.jsxs(Cn, { children: [
      /* @__PURE__ */ s.jsxs(P, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "HTTP code received" }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          (O = e.response) == null ? void 0 : O.httpStatusCode,
          " (Expected:",
          " ",
          (B = (q = e.test) == null ? void 0 : q.httpStatusExpected) == null ? void 0 : B.join(", "),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs(P, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Response code found in API Contract" }),
        /* @__PURE__ */ s.jsx("div", { children: $ })
      ] }),
      /* @__PURE__ */ s.jsxs(P, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Content-Type found in API Contract" }),
        /* @__PURE__ */ s.jsx("div", { children: m })
      ] }),
      /* @__PURE__ */ s.jsxs(P, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Response matches API Contract" }),
        /* @__PURE__ */ s.jsx("div", { children: C })
      ] }),
      ((F = (M = a == null ? void 0 : a.apiResponseAnalysis) == null ? void 0 : M[0]) == null ? void 0 : F.responseDescription) && /* @__PURE__ */ s.jsxs(P, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Response analysis" }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          " ",
          (ie = (H = a == null ? void 0 : a.apiResponseAnalysis) == null ? void 0 : H[0]) == null ? void 0 : ie.responseDescription
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs(P, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "JSON Pointer" }),
        /* @__PURE__ */ s.jsx("div", { children: (ae = e.test) != null && ae.jsonPointer ? /* @__PURE__ */ s.jsx(
          "a",
          {
            href: "#",
            onClick: (ue) => {
              var he;
              ue.preventDefault(), ue.stopPropagation(), c(
                Me(((he = e.test) == null ? void 0 : he.jsonPointer) + "")
                // FIXME support indexed reports
              );
            },
            children: (ce = e.test) == null ? void 0 : ce.jsonPointer
          }
        ) : "N/A" })
      ] }),
      ((de = e.request) == null ? void 0 : de.curl) && /* @__PURE__ */ s.jsxs(P, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Request" }),
        /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(Ge, { waiting: o, curl: e.request.curl, id: r }) })
      ] }),
      n === void 0 && (t !== void 0 || ((le = e.response) == null ? void 0 : le.http) !== void 0) && /* @__PURE__ */ s.jsxs(P, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Response" }),
        /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(
          we,
          {
            accented: !0,
            response: t || Ke(Ee.Buffer.from((pe = e.response) == null ? void 0 : pe.http, "base64"))
          }
        ) })
      ] }),
      n && /* @__PURE__ */ s.jsxs(P, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Error" }),
        /* @__PURE__ */ s.jsx("div", { children: n == null ? void 0 : n.message })
      ] })
    ] })
  ] });
}
const mn = v.div`
  margin: 8px;
  border: 1px solid var(${x.border});
`, yn = v.div`
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
  ${({ collapsed: e }) => !e && `border-bottom: 1px solid var(${x.border});
    border-left: 5px solid var(${x.badgeBackground});`}
`, bn = v.div`
  font-weight: 600;
`, $n = v.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, Y = v.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${x.foreground});
  }
`, Cn = v.div`
  background-color: var(${x.computedOne});
`, P = v.div`
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
`, jn = {
  0: "None",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Critical"
}, wn = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700
};
function En({
  issues: e,
  responses: t,
  errors: n,
  waitings: r
}) {
  var i, d;
  const o = {};
  for (const l of e) {
    const u = (i = l.test) == null ? void 0 : i.key;
    u !== void 0 && (o[u] === void 0 && (o[u] = [], (d = l.test) == null || d.description), o[u].push(l));
  }
  const c = Object.keys(o);
  for (const l of c)
    o[l].sort((u, a) => {
      var h, g, y, m, C, $, j, b, w, E;
      if (((h = u.outcome) == null ? void 0 : h.status) !== ((g = a.outcome) == null ? void 0 : g.status)) {
        if (((y = u.outcome) == null ? void 0 : y.status) === "incorrect")
          return -1;
        if (((m = a.outcome) == null ? void 0 : m.status) === "incorrect")
          return 1;
        if (((C = u.outcome) == null ? void 0 : C.status) === "unexpected")
          return -1;
        if ((($ = a.outcome) == null ? void 0 : $.status) === "unexpected")
          return 1;
      }
      return ((j = u.outcome) == null ? void 0 : j.criticality) !== ((b = a.outcome) == null ? void 0 : b.criticality) ? ((w = u.outcome) == null ? void 0 : w.criticality) - ((E = a.outcome) == null ? void 0 : E.criticality) : 0;
    });
  return e.length === 0 ? /* @__PURE__ */ s.jsx(ge, { children: /* @__PURE__ */ s.jsx(Sn, { children: "No test results available" }) }) : /* @__PURE__ */ s.jsx(ge, { children: c.map((l) => /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsx(Tn, { children: Rn[l] ?? "Unknown test type" }),
    o[l].map((u, a) => {
      const h = `${l}-${a}`;
      return /* @__PURE__ */ s.jsx(
        vn,
        {
          issue: u,
          httpResponse: t[h],
          error: n[h],
          waiting: r[h],
          id: h
        },
        h
      );
    })
  ] }, l)) });
}
const ge = v.div`
  margin-top: 8px;
`, Sn = v.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${x.border});
`, Tn = v.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, Rn = {
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
function Pn() {
  var h, g, y, m, C, $, j, b, w;
  const { scanReport: e, path: t, method: n, responses: r, errors: o, waitings: c } = A(
    (E) => E.scan
  ), [i, d] = p.useState("summary");
  if (e === void 0)
    return /* @__PURE__ */ s.jsx(ve, { children: /* @__PURE__ */ s.jsx(On, { children: "Report is not yet available" }) });
  const l = (m = (y = (g = (h = e.paths) == null ? void 0 : h[t]) == null ? void 0 : g[n]) == null ? void 0 : y.happyPaths) == null ? void 0 : m[0], u = ($ = (C = e.paths) == null ? void 0 : C[t]) == null ? void 0 : $.summary, a = [];
  for (const E of Jt) {
    const T = (w = (b = (j = e == null ? void 0 : e.paths) == null ? void 0 : j[t]) == null ? void 0 : b[E]) == null ? void 0 : w.conformanceRequestIssues;
    T !== void 0 && a.push(...T);
  }
  return /* @__PURE__ */ s.jsx(ve, { children: /* @__PURE__ */ s.jsxs(Ht, { value: i, onValueChange: d, children: [
    /* @__PURE__ */ s.jsxs(Nt, { children: [
      /* @__PURE__ */ s.jsx(X, { value: "summary", children: "Summary" }),
      /* @__PURE__ */ s.jsx(X, { value: "tests", children: "Tests" }),
      /* @__PURE__ */ s.jsx(X, { value: "logs", children: "Logs" })
    ] }),
    /* @__PURE__ */ s.jsxs(J, { value: "summary", children: [
      /* @__PURE__ */ s.jsx(hn, { global: e.summary, operation: u }),
      l && /* @__PURE__ */ s.jsx(
        pn,
        {
          issue: l,
          responses: r,
          errors: o,
          waitings: c
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(J, { value: "tests", children: /* @__PURE__ */ s.jsx(En, { issues: a, responses: r, errors: o, waitings: c }) }),
    /* @__PURE__ */ s.jsx(J, { value: "logs", children: /* @__PURE__ */ s.jsx(vs, {}) })
  ] }) });
}
const ve = v.div``, On = v.div`
  margin: 1em;
  padding: 10px;
`;
function kn() {
  const e = A((t) => t.scan.error);
  return e ? /* @__PURE__ */ s.jsx(An, { children: /* @__PURE__ */ s.jsxs(_n, { children: [
    /* @__PURE__ */ s.jsx("div", { children: e.message }),
    e.details && /* @__PURE__ */ s.jsx("div", { children: e.details })
  ] }) }) : null;
}
const _n = v.div`
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
`, An = v.div`
  padding: 8px;
`;
function Dn() {
  const t = qe((i) => i.logging.messages).filter((i) => i.level == "info"), n = p.useRef(null), [r, o] = p.useState(!1);
  if (p.useEffect(() => {
    n.current && !r && (n.current.scrollTop = n.current.scrollHeight);
  }, [t, r]), t.length === 0)
    return null;
  const c = () => {
    const i = n.current;
    if (i) {
      const d = i.scrollTop, l = i.scrollHeight, u = i.clientHeight;
      l - (d + u) < 10 ? o(!1) : o(!0);
    }
  };
  return /* @__PURE__ */ s.jsx(Ln, { children: /* @__PURE__ */ s.jsx(Nn, { ref: n, onScroll: c, children: t.map((i, d, l) => /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsx(Hn, { first: d === 0, last: d === l.length - 1 }),
    /* @__PURE__ */ s.jsx("div", { children: i.message })
  ] }, d)) }) });
}
function Hn({ first: e, last: t }) {
  return /* @__PURE__ */ s.jsxs(Mn, { first: e, last: t, children: [
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx("div", {})
  ] });
}
const Nn = v.div`
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
`, Mn = v.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ first: e }) => !e && `background-color: var(${x.border});`}
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
    ${({ last: e }) => !e && `background-color: var(${x.border});`}
  }
`, Ln = v.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${x.border});
`;
function In() {
  const e = V(), { path: t, method: n, oas: r, rawOas: o, defaultValues: c, scanConfigRaw: i, scanReport: d, waiting: l, error: u } = A((S) => S.scan), a = A((S) => S.prefs), {
    docker: { replaceLocalhost: h },
    scanRuntime: g,
    platform: y
  } = A((S) => S.config.data), m = Bn(r, a.scanServer, c.server), C = {
    ...c,
    server: m,
    security: qn(c.security, a.security)
  }, $ = async (S) => {
    const O = Pt(S), [q, B] = Zt(
      i,
      t,
      n,
      g,
      h,
      y,
      O
    );
    e($e(O.server));
    const M = O.security[O.securityIndex];
    if (M)
      for (const [F, H] of Object.entries(M))
        typeof H == "string" && H.startsWith("{{") && H.endsWith("}}") && e(Ce({ scheme: F, secret: H }));
    e(ps()), e(
      De({
        defaultValues: O,
        scanConfigRaw: q,
        env: B,
        rawOas: o
      })
    );
  }, [j, b] = p.useState(!1);
  p.useEffect(() => {
    b(d !== void 0);
  }, [d]);
  const w = Kt({
    reValidateMode: "onChange",
    values: Et(C)
  }), { handleSubmit: E, formState: T } = w, R = Object.keys(T.errors || {}).length > 0;
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(zt, { ...w, children: /* @__PURE__ */ s.jsxs(
      St,
      {
        collapsed: j,
        title: "Scan Configuration",
        onExpand: () => b(!1),
        children: [
          /* @__PURE__ */ s.jsx(
            Tt,
            {
              method: n,
              path: t,
              servers: Se(r),
              onSubmit: E($),
              buttonText: "Scan",
              submitDisabled: R,
              waiting: l
            }
          ),
          /* @__PURE__ */ s.jsx(Rt, { oas: r, path: t, method: n })
        ]
      }
    ) }),
    d && /* @__PURE__ */ s.jsx(Pn, {}),
    /* @__PURE__ */ s.jsx(kn, {}),
    (l || u) && /* @__PURE__ */ s.jsx(Dn, {})
  ] });
}
function qn(e, t) {
  const n = [];
  for (const r of e) {
    const o = {};
    for (const [c, i] of Object.entries(r))
      t[c] && typeof i == "string" ? o[c] = t[c] : o[c] = i;
    n.push(o);
  }
  return n;
}
function Bn(e, t, n) {
  const r = Se(e), o = r.some((i) => i === t);
  if (t !== void 0 && t !== "" && o)
    return t;
  const c = r.some((i) => i === t);
  return n !== void 0 && n !== "" && c ? n : r.length > 0 ? r[0] : "";
}
function Fn() {
  const e = V(), { error: t } = A((n) => n.scan);
  return /* @__PURE__ */ s.jsxs(Un, { children: [
    t && /* @__PURE__ */ s.jsxs(Yn, { children: [
      /* @__PURE__ */ s.jsx(Ut, {}),
      /* @__PURE__ */ s.jsx("div", { children: t.message }),
      t.code === "audit-error" && /* @__PURE__ */ s.jsx(
        Vn,
        {
          onClick: (n) => {
            e(Le()), n.preventDefault(), n.stopPropagation();
          },
          children: "View report"
        }
      )
    ] }),
    !t && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(Kn, {}),
      /* @__PURE__ */ s.jsx(zn, {})
    ] })
  ] });
}
const Un = v.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`, Yn = v.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border: 1px solid var(${x.border});
  height: 58px;
  color: var(${x.errorForeground});
  background-color: var(${x.errorBackground});
  font-size: 14px;
  gap: 8px;
  > svg {
    fill: var(${x.errorForeground});
    width: 20px;
    height: 20px;
  }
  > div {
    flex: 1;
  }
`, Vn = v.button`
  cursor: pointer;
  background-color: var(${x.buttonBackground});
  color: var(${x.buttonForeground});
  border: none;
  padding: 6px 16px;
`, Xe = Wt`
  0% {
    background-color: var(${x.computedOne});
  }
  100% {
    background-color: var(${x.computedTwo});
  }
`, Kn = v.div`
  border: 1px solid var(${x.border});
  height: 2.1rem;
  animation: ${Xe} 1s linear infinite alternate;
`, zn = v.div`
  border: 1px solid var(${x.border});
  height: 15rem;
  animation: ${Xe} 1s linear infinite alternate;
`, me = [
  {
    id: "start-scan",
    title: "Scan is starting",
    element: /* @__PURE__ */ s.jsx(Fn, {}),
    when: _e
  },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ s.jsx(In, {}),
    when: Ae
  }
], Wn = {
  changeTheme: ct,
  startScan: _e,
  scanOperation: Ae,
  showGeneralError: os,
  showHttpError: is,
  showHttpResponse: as,
  showScanReport: rs,
  loadEnv: Mt,
  loadPrefs: _t,
  loadConfig: Yt,
  showLogMessage: ls
};
function Gn() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(at, {}),
    /* @__PURE__ */ s.jsx(kt, {})
  ] });
}
function Xn(e, t) {
  const n = fs(xs(e, me), t);
  nt(document.getElementById("root")).render(
    /* @__PURE__ */ s.jsx(rt.StrictMode, { children: /* @__PURE__ */ s.jsx(ot, { store: n, children: /* @__PURE__ */ s.jsx(Ot.Provider, { value: me, children: /* @__PURE__ */ s.jsx(Gn, {}) }) }) })
  ), window.addEventListener("message", it(n, Wn));
}
window.renderWebView = Xn;
