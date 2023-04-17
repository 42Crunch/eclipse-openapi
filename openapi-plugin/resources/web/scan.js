import { c as Ke, a as We, u as ze, l as Ge, t as Xe, b as Je, s as Qe, i as Ze, j as i, r as u, T, d as v, F as A, e as et, R as tt, P as nt, m as rt, f as st, g as ot } from "./ThemeStyles.913963d7.js";
import { f as it, i as at, g as ct, a as dt, b as lt, c as pt, r as ut, p as ht, s as ft, d as $e, e as Ce, $ as Ee, h as vt, j as we, k as Se, l as Te, m as mt, n as yt, o as gt, q as xt, t as bt, u as $t, v as Ct, w as Et, x as I, y as wt, O as St, R as Re, z as Pe, S as G, A as Tt, B as Rt, C as Pt, D as Oe, E as Ot, F as _t, G as Dt, H as At, I as kt } from "./Response.cd82ec9f.js";
import { e as Ht, s as Nt, $ as It, T as Mt, a as fe, b as ve, u as qt, F as Lt, l as Bt } from "./TrashCan.1f959ccc.js";
import { u as Ut } from "./useDispatch.091a853c.js";
import { _ as k, s as C } from "./styled-components.browser.esm.f0e51c1d.js";
import { D as j, S as jt } from "./datetime.c159a92a.js";
import { S as Yt } from "./index.17036a89.js";
import { S as X } from "./ExclamationCircle.3bd1d8d7.js";
const Vt = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace"
];
function me(e) {
  return {
    query: e.parameters.query,
    header: e.parameters.header,
    path: e.parameters.path,
    cookie: e.parameters.cookie
  };
}
function Ft(e, t, n) {
  var s;
  const r = _e(
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
    requestBody: (s = r == null ? void 0 : r.requestBody) == null ? void 0 : s.json,
    host: r.host
  };
}
function Kt(e, t, n, r) {
  var c, f, l;
  const s = JSON.parse(JSON.stringify(e)), a = _e(
    s,
    s.playbook.paths[t][n].happyPaths[0].requests[0]
  ), o = r.server.toLowerCase().startsWith("https://localhost") || r.server.toLowerCase().startsWith("http://localhost") ? r.server.replace(/localhost/i, "host.docker.internal") : r.server;
  a.host = o.endsWith("/") ? o.slice(0, -1) : o, a.path = t, a.method = n, a.requestBody && ((c = r.body) == null ? void 0 : c.value) !== void 0 && (a.requestBody.json = (f = r.body) == null ? void 0 : f.value), a.headerParameters = r.parameters.header, a.queryParameters = r.parameters.query, a.cookieParameters = r.parameters.cookie, a.pathParameters = r.parameters.path, s.playbook.paths[t] = {
    [n]: s.playbook.paths[t][n]
  }, ((l = s == null ? void 0 : s.environment) == null ? void 0 : l.host) !== void 0 && (s.environment.host = o);
  const p = Wt(
    r.security,
    r.securityIndex,
    s == null ? void 0 : s.environment
  );
  return [s, p];
}
function _e(e, t) {
  return t.$ref ? it(e, t.$ref).request.requestDetails : t.request.requestDetails;
}
function Wt(e, t, n) {
  const r = {}, s = e[t];
  if (s)
    for (const [a, o] of Object.entries(s)) {
      const p = zt(n, a);
      p !== void 0 && (typeof o == "string" ? r[p] = o : r[p] = `${o.username}:${o.password}`);
    }
  return r;
}
function zt(e, t) {
  const n = e == null ? void 0 : e[t], r = n == null ? void 0 : n.match(/env\('(.+)'\)/);
  if (Array.isArray(r))
    return r[1];
  const s = n == null ? void 0 : n.match(/env_with_default\('(.+)',.+\)/);
  if (Array.isArray(s))
    return s[1];
}
const Gt = {
  oas: {
    openapi: "3.0.0",
    info: { title: "", version: "0.0" },
    paths: {}
  },
  rawOas: "",
  document: "",
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
}, De = Ke({
  name: "scan",
  initialState: Gt,
  reducers: {
    scanOperation: (e, t) => {
      const { oas: n, rawOas: r, path: s, method: a, config: o, documentUrl: p } = t.payload, c = Ft(o, s, a);
      if (at(n)) {
        const f = ct(n, s, a), l = dt(f), d = me(c);
        e.defaultValues = {
          server: c.host,
          parameters: d,
          security: l,
          securityIndex: 0,
          body: { mediaType: "application/json", value: c.requestBody }
        };
      } else {
        const f = lt(n, s, a), l = pt(f), d = me(c);
        e.defaultValues = {
          server: c.host,
          parameters: d,
          security: l,
          securityIndex: 0
        };
      }
      e.document = p, e.oas = n, e.rawOas = r, e.path = s, e.method = a, e.scanConfigRaw = o, e.scanConfig = c, e.scanReport = void 0, e.error = void 0;
    },
    runScan: (e, t) => {
      e.defaultValues = t.payload.defaultValues, e.scanReport = void 0, e.waiting = !0;
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
    }
  }
}), {
  scanOperation: Ae,
  runScan: ke,
  showScanReport: Xt,
  showGeneralError: Jt,
  showHttpError: Qt,
  sendHttpRequest: He,
  sendCurlRequest: Ne,
  showHttpResponse: Zt,
  showJsonPointer: Ie
} = De.actions, en = De.reducer, tn = {
  theme: Xe,
  scan: en,
  router: ut,
  env: Ht,
  prefs: ht
}, nn = (e, t) => We({
  reducer: tn,
  middleware: (n) => n().prepend(e.middleware).concat(Ge),
  preloadedState: {
    theme: t
  }
}), V = () => Ut(), M = ze, Me = Je(), N = Me.startListening;
function rn(e, t) {
  const n = {
    runScan: () => N({
      actionCreator: ke,
      effect: async (r, s) => {
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
    savePrefs: () => N({
      matcher: Ze($e, Ce),
      effect: async (r, s) => {
        const { prefs: a } = s.getState();
        e.postMessage({
          command: "savePrefs",
          payload: a
        });
      }
    }),
    sendHttpRequest: () => N({
      actionCreator: He,
      effect: async (r, s) => {
        e.postMessage({
          command: "sendHttpRequest",
          payload: r.payload
        });
      }
    }),
    sendCurlRequest: () => N({
      actionCreator: Ne,
      effect: async (r, s) => {
        e.postMessage({
          command: "sendCurlRequest",
          payload: r.payload
        });
      }
    }),
    showJsonPointer: () => N({
      actionCreator: Ie,
      effect: async (r, s) => {
        e.postMessage({
          command: "showJsonPointer",
          payload: r.payload
        });
      }
    }),
    showEnvWindow: () => N({
      actionCreator: Nt,
      effect: async (r, s) => {
        e.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return ft(N, t), Qe(n), Me;
}
const sn = (e) => /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ i("path", { d: "M64 464h224c8.8 0 16-7.2 16-16v-64h48v64c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h64v48H64c-8.84 0-16 7.2-16 16v224c0 8.8 7.16 16 16 16zm96-400c0-35.35 28.7-64 64-64h224c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V64zm64 240h224c8.8 0 16-7.2 16-16V64c0-8.84-7.2-16-16-16H224c-8.8 0-16 7.16-16 16v224c0 8.8 7.2 16 16 16z" }) });
function h(e) {
  e === void 0 || this.initialize(e), this.maxHeaderSize = h.maxHeaderSize;
}
h.prototype.initialize = function(e, t) {
  this.type = e, this.state = e + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
h.encoding = "ascii";
h.maxHeaderSize = 80 * 1024;
h.REQUEST = "REQUEST";
h.RESPONSE = "RESPONSE";
var qe = h.kOnHeaders = 1, J = h.kOnHeadersComplete = 2, F = h.kOnBody = 3, Z = h.kOnMessageComplete = 4;
h.prototype[qe] = h.prototype[J] = h.prototype[F] = h.prototype[Z] = function() {
};
var Le = !0;
Object.defineProperty(h, "kOnExecute", {
  get: function() {
    return Le = !1, 99;
  }
});
var Be = h.methods = [
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
], Ue = Be.indexOf("CONNECT");
h.prototype.reinitialize = h;
h.prototype.close = h.prototype.pause = h.prototype.resume = h.prototype.free = function() {
};
h.prototype._compatMode0_11 = !1;
h.prototype.getAsyncId = function() {
  return 0;
};
var on = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
h.prototype.execute = function(e, t, n) {
  if (!(this instanceof h))
    throw new TypeError("not a HTTPParser");
  t = t || 0, n = typeof n == "number" ? n : e.length, this.chunk = e, this.offset = t;
  var r = this.end = t + n;
  try {
    for (; this.offset < r && !this[this.state](); )
      ;
  } catch (s) {
    if (this.isUserCall)
      throw s;
    return this.hadError = !0, s;
  }
  return this.chunk = null, n = this.offset - t, on[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || h.maxHeaderSize)) ? new Error("max header size exceeded") : n;
};
var an = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
h.prototype.finish = function() {
  if (!this.hadError) {
    if (!an[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[Z]());
  }
};
h.prototype.consume = h.prototype.unconsume = h.prototype.getCurrentBuffer = function() {
};
h.prototype.userCall = function() {
  this.isUserCall = !0;
  var e = this;
  return function(t) {
    return e.isUserCall = !1, t;
  };
};
h.prototype.nextRequest = function() {
  this.userCall()(this[Z]()), this.reinitialize(this.type);
};
h.prototype.consumeLine = function() {
  for (var e = this.end, t = this.chunk, n = this.offset; n < e; n++)
    if (t[n] === 10) {
      var r = this.line + t.toString(h.encoding, this.offset, n);
      return r.charAt(r.length - 1) === "\r" && (r = r.substr(0, r.length - 1)), this.line = "", this.offset = n + 1, r;
    }
  this.line += t.toString(h.encoding, this.offset, this.end), this.offset = this.end;
};
var cn = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, dn = /^[ \t]+(.*[^ \t])/;
h.prototype.parseHeader = function(e, t) {
  if (e.indexOf("\r") !== -1)
    throw K("HPE_LF_EXPECTED");
  var n = cn.exec(e), r = n && n[1];
  if (r)
    t.push(r), t.push(n[2]);
  else {
    var s = dn.exec(e);
    s && t.length && (t[t.length - 1] && (t[t.length - 1] += " "), t[t.length - 1] += s[1]);
  }
};
var ln = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
h.prototype.REQUEST_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var t = ln.exec(e);
    if (t === null)
      throw K("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? t[1] : Be.indexOf(t[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = t[2], this.info.versionMajor = +t[3], this.info.versionMinor = +t[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var pn = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
h.prototype.RESPONSE_LINE = function() {
  var e = this.consumeLine();
  if (e) {
    var t = pn.exec(e);
    if (t === null)
      throw K("HPE_INVALID_CONSTANT");
    this.info.versionMajor = +t[1], this.info.versionMinor = +t[2];
    var n = this.info.statusCode = +t[3];
    this.info.statusMessage = t[4], ((n / 100 | 0) === 1 || n === 204 || n === 304) && (this.body_bytes = 0), this.state = "HEADER";
  }
};
h.prototype.shouldKeepAlive = function() {
  if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {
    if (this.connection.indexOf("close") !== -1)
      return !1;
  } else if (this.connection.indexOf("keep-alive") === -1)
    return !1;
  return !!(this.body_bytes !== null || this.isChunked);
};
h.prototype.HEADER = function() {
  var e = this.consumeLine();
  if (e !== void 0) {
    var t = this.info;
    if (e)
      this.parseHeader(e, t.headers);
    else {
      for (var n = t.headers, r = !1, s, a = !1, o = 0; o < n.length; o += 2)
        switch (n[o].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = n[o + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (s = +n[o + 1], r) {
              if (s !== this.body_bytes)
                throw K("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              r = !0, this.body_bytes = s;
            break;
          case "connection":
            this.connection += n[o + 1].toLowerCase();
            break;
          case "upgrade":
            a = !0;
            break;
        }
      this.isChunked && r && (r = !1, this.body_bytes = null), a && this.connection.indexOf("upgrade") != -1 ? t.upgrade = this.type === h.REQUEST || t.statusCode === 101 : t.upgrade = t.method === Ue, this.isChunked && t.upgrade && (this.isChunked = !1), t.shouldKeepAlive = this.shouldKeepAlive();
      var p;
      if (Le ? p = this.userCall()(this[J](t)) : p = this.userCall()(this[J](
        t.versionMajor,
        t.versionMinor,
        t.headers,
        t.method,
        t.url,
        t.statusCode,
        t.statusMessage,
        t.upgrade,
        t.shouldKeepAlive
      )), p === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !p)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (p || this.body_bytes === 0)
          return this.nextRequest(), t.upgrade;
        this.body_bytes === null ? this.state = "BODY_RAW" : this.state = "BODY_SIZED";
      }
    }
  }
};
h.prototype.BODY_CHUNKHEAD = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.body_bytes = parseInt(e, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
h.prototype.BODY_CHUNK = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[F](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
h.prototype.BODY_CHUNKEMPTYLINE = function() {
  var e = this.consumeLine();
  e !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
h.prototype.BODY_CHUNKTRAILERS = function() {
  var e = this.consumeLine();
  e !== void 0 && (e ? this.parseHeader(e, this.trailers) : (this.trailers.length && this.userCall()(this[qe](this.trailers, "")), this.nextRequest()));
};
h.prototype.BODY_RAW = function() {
  var e = this.end - this.offset;
  this.userCall()(this[F](this.chunk, this.offset, e)), this.offset = this.end;
};
h.prototype.BODY_SIZED = function() {
  var e = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[F](this.chunk, this.offset, e)), this.offset += e, this.body_bytes -= e, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(e) {
  var t = h["kOn" + e];
  Object.defineProperty(h.prototype, "on" + e, {
    get: function() {
      return this[t];
    },
    set: function(n) {
      return this._compatMode0_11 = !0, Ue = "CONNECT", this[t] = n;
    }
  });
});
function K(e) {
  var t = new Error("Parse Error");
  return t.code = e, t;
}
function je(e) {
  const t = new h(h.RESPONSE);
  let n = !1, r = 0, s, a, o = [], p = [];
  if (t[h.kOnHeadersComplete] = function(l) {
    l.shouldKeepAlive, l.upgrade, r = l.statusCode, l.statusMessage, s = l.versionMajor, a = l.versionMinor, o = l.headers;
  }, t[h.kOnBody] = function(l, d, y) {
    p.push(l.slice(d, d + y));
  }, t[h.kOnHeaders] = function(l) {
  }, t[h.kOnMessageComplete] = function() {
    n = !0;
  }, t.execute(e), t.finish(), !n)
    throw new Error("Could not parse");
  let c = p.join("");
  const f = [];
  for (let l = 0; l < o.length - 1; l++)
    l % 2 === 0 && f.push([o[l], o[l + 1]]);
  return {
    headers: f,
    statusCode: r,
    httpVersion: `${s}.${a}`,
    body: c
  };
}
const un = /* @__PURE__ */ u.forwardRef((e, t) => /* @__PURE__ */ u.createElement(Ee.span, k({}, e, {
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
}))), hn = un, [W, Or] = vt("Tooltip", [
  we
]), z = we(), fn = "TooltipProvider", vn = 700, Q = "tooltip.open", [mn, ee] = W(fn), yn = (e) => {
  const { __scopeTooltip: t, delayDuration: n = vn, skipDelayDuration: r = 300, disableHoverableContent: s = !1, children: a } = e, [o, p] = u.useState(!0), c = u.useRef(!1), f = u.useRef(0);
  return u.useEffect(() => {
    const l = f.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ u.createElement(mn, {
    scope: t,
    isOpenDelayed: o,
    delayDuration: n,
    onOpen: u.useCallback(() => {
      window.clearTimeout(f.current), p(!1);
    }, []),
    onClose: u.useCallback(() => {
      window.clearTimeout(f.current), f.current = window.setTimeout(
        () => p(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: u.useCallback((l) => {
      c.current = l;
    }, []),
    disableHoverableContent: s
  }, a);
}, te = "Tooltip", [gn, L] = W(te), xn = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: s = !1, onOpenChange: a, disableHoverableContent: o, delayDuration: p } = e, c = ee(te, e.__scopeTooltip), f = z(t), [l, d] = u.useState(null), y = bt(), g = u.useRef(0), m = o ?? c.disableHoverableContent, x = p ?? c.delayDuration, $ = u.useRef(!1), [S = !1, b] = $t({
    prop: r,
    defaultProp: s,
    onChange: (O) => {
      O ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Q))) : c.onClose(), a == null || a(O);
    }
  }), E = u.useMemo(() => S ? $.current ? "delayed-open" : "instant-open" : "closed", [
    S
  ]), w = u.useCallback(() => {
    window.clearTimeout(g.current), $.current = !1, b(!0);
  }, [
    b
  ]), R = u.useCallback(() => {
    window.clearTimeout(g.current), b(!1);
  }, [
    b
  ]), P = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      $.current = !0, b(!0);
    }, x);
  }, [
    x,
    b
  ]);
  return u.useEffect(() => () => window.clearTimeout(g.current), []), /* @__PURE__ */ u.createElement(Ct, f, /* @__PURE__ */ u.createElement(gn, {
    scope: t,
    contentId: y,
    open: S,
    stateAttribute: E,
    trigger: l,
    onTriggerChange: d,
    onTriggerEnter: u.useCallback(() => {
      c.isOpenDelayed ? P() : w();
    }, [
      c.isOpenDelayed,
      P,
      w
    ]),
    onTriggerLeave: u.useCallback(() => {
      m ? R() : window.clearTimeout(g.current);
    }, [
      R,
      m
    ]),
    onOpen: w,
    onClose: R,
    disableHoverableContent: m
  }, n));
}, ye = "TooltipTrigger", bn = /* @__PURE__ */ u.forwardRef((e, t) => {
  const { __scopeTooltip: n, ...r } = e, s = L(ye, n), a = ee(ye, n), o = z(n), p = u.useRef(null), c = Te(t, p, s.onTriggerChange), f = u.useRef(!1), l = u.useRef(!1), d = u.useCallback(
    () => f.current = !1,
    []
  );
  return u.useEffect(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ u.createElement(Et, k({
    asChild: !0
  }, o), /* @__PURE__ */ u.createElement(Ee.button, k({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": s.open ? s.contentId : void 0,
    "data-state": s.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: I(e.onPointerMove, (y) => {
      y.pointerType !== "touch" && !l.current && !a.isPointerInTransitRef.current && (s.onTriggerEnter(), l.current = !0);
    }),
    onPointerLeave: I(e.onPointerLeave, () => {
      s.onTriggerLeave(), l.current = !1;
    }),
    onPointerDown: I(e.onPointerDown, () => {
      f.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: I(e.onFocus, () => {
      f.current || s.onOpen();
    }),
    onBlur: I(e.onBlur, s.onClose),
    onClick: I(e.onClick, s.onClose)
  })));
}), Ye = "TooltipPortal", [$n, Cn] = W(Ye, {
  forceMount: void 0
}), En = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: s } = e, a = L(Ye, t);
  return /* @__PURE__ */ u.createElement($n, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ u.createElement(Se, {
    present: n || a.open
  }, /* @__PURE__ */ u.createElement(wt, {
    asChild: !0,
    container: s
  }, r)));
}, q = "TooltipContent", wn = /* @__PURE__ */ u.forwardRef((e, t) => {
  const n = Cn(q, e.__scopeTooltip), { forceMount: r = n.forceMount, side: s = "top", ...a } = e, o = L(q, e.__scopeTooltip);
  return /* @__PURE__ */ u.createElement(Se, {
    present: r || o.open
  }, o.disableHoverableContent ? /* @__PURE__ */ u.createElement(Ve, k({
    side: s
  }, a, {
    ref: t
  })) : /* @__PURE__ */ u.createElement(Sn, k({
    side: s
  }, a, {
    ref: t
  })));
}), Sn = /* @__PURE__ */ u.forwardRef((e, t) => {
  const n = L(q, e.__scopeTooltip), r = ee(q, e.__scopeTooltip), s = u.useRef(null), a = Te(t, s), [o, p] = u.useState(null), { trigger: c, onClose: f } = n, l = s.current, { onPointerInTransitChange: d } = r, y = u.useCallback(() => {
    p(null), d(!1);
  }, [
    d
  ]), g = u.useCallback((m, x) => {
    const $ = m.currentTarget, S = {
      x: m.clientX,
      y: m.clientY
    }, b = _n(S, $.getBoundingClientRect()), E = b === "right" || b === "bottom" ? -5 : 5, R = b === "right" || b === "left" ? {
      x: m.clientX + E,
      y: m.clientY
    } : {
      x: m.clientX,
      y: m.clientY + E
    }, P = Dn(x.getBoundingClientRect()), O = kn([
      R,
      ...P
    ]);
    p(O), d(!0);
  }, [
    d
  ]);
  return u.useEffect(() => () => y(), [
    y
  ]), u.useEffect(() => {
    if (c && l) {
      const m = ($) => g($, l), x = ($) => g($, c);
      return c.addEventListener("pointerleave", m), l.addEventListener("pointerleave", x), () => {
        c.removeEventListener("pointerleave", m), l.removeEventListener("pointerleave", x);
      };
    }
  }, [
    c,
    l,
    g,
    y
  ]), u.useEffect(() => {
    if (o) {
      const m = (x) => {
        const $ = x.target, S = {
          x: x.clientX,
          y: x.clientY
        }, b = (c == null ? void 0 : c.contains($)) || (l == null ? void 0 : l.contains($)), E = !An(S, o);
        b ? y() : E && (y(), f());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [
    c,
    l,
    o,
    f,
    y
  ]), /* @__PURE__ */ u.createElement(Ve, k({}, e, {
    ref: a
  }));
}), [Tn, Rn] = W(te, {
  isInside: !1
}), Ve = /* @__PURE__ */ u.forwardRef((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": s, onEscapeKeyDown: a, onPointerDownOutside: o, ...p } = e, c = L(q, n), f = z(n), { onClose: l } = c;
  return u.useEffect(() => (document.addEventListener(Q, l), () => document.removeEventListener(Q, l)), [
    l
  ]), u.useEffect(() => {
    if (c.trigger) {
      const d = (y) => {
        const g = y.target;
        g != null && g.contains(c.trigger) && l();
      };
      return window.addEventListener("scroll", d, {
        capture: !0
      }), () => window.removeEventListener("scroll", d, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    l
  ]), /* @__PURE__ */ u.createElement(mt, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: o,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: l
  }, /* @__PURE__ */ u.createElement(yt, k({
    "data-state": c.stateAttribute
  }, f, p, {
    ref: t,
    style: {
      ...p.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ u.createElement(gt, null, r), /* @__PURE__ */ u.createElement(Tn, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ u.createElement(hn, {
    id: c.contentId,
    role: "tooltip"
  }, s || r))));
}), Pn = "TooltipArrow", On = /* @__PURE__ */ u.forwardRef((e, t) => {
  const { __scopeTooltip: n, ...r } = e, s = z(n);
  return Rn(Pn, n).isInside ? null : /* @__PURE__ */ u.createElement(xt, k({}, s, r, {
    ref: t
  }));
});
function _n(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), s = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, s, a)) {
    case a:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      return null;
  }
}
function Dn(e) {
  const { top: t, right: n, bottom: r, left: s } = e;
  return [
    {
      x: s,
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
      x: s,
      y: r
    }
  ];
}
function An(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let a = 0, o = t.length - 1; a < t.length; o = a++) {
    const p = t[a].x, c = t[a].y, f = t[o].x, l = t[o].y;
    c > r != l > r && n < (f - p) * (r - c) / (l - c) + p && (s = !s);
  }
  return s;
}
function kn(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Hn(t);
}
function Hn(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], o = t[t.length - 2];
      if ((a.x - o.x) * (s.y - o.y) >= (a.y - o.y) * (s.x - o.x))
        t.pop();
      else
        break;
    }
    t.push(s);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const s = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], o = n[n.length - 2];
      if ((a.x - o.x) * (s.y - o.y) >= (a.y - o.y) * (s.x - o.x))
        n.pop();
      else
        break;
    }
    n.push(s);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const Nn = yn, In = xn, Mn = bn, qn = En, Ln = wn, Bn = On;
function Fe({
  curl: e,
  id: t,
  waiting: n
}) {
  const r = V();
  M((c) => c.env.data);
  const s = M((c) => c.scan.defaultValues), a = s == null ? void 0 : s.security[s.securityIndex], o = e.replace(/{{([\w-]+)\/([\w-]+)}}/gm, (c, f, l) => a !== void 0 && typeof a[f] == "string" ? a[f] : c), p = Kn(o, t);
  return /* @__PURE__ */ v(Un, { children: [
    /* @__PURE__ */ v(jn, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
      /* @__PURE__ */ i(Nn, { children: /* @__PURE__ */ v(In, { children: [
        /* @__PURE__ */ i(Mn, { asChild: !0, children: /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(
          sn,
          {
            onClick: (c) => {
              c.preventDefault(), c.stopPropagation(), r(
                Ne(o.replace("host.docker.internal", "localhost"))
              );
            }
          }
        ) }) }),
        /* @__PURE__ */ i(qn, { children: /* @__PURE__ */ v(Yn, { sideOffset: 5, children: [
          "Copy cURL command to the clipboard",
          /* @__PURE__ */ i(Vn, {})
        ] }) })
      ] }) }),
      e.replace("host.docker.internal", "localhost")
    ] }),
    /* @__PURE__ */ i(Fn, { children: /* @__PURE__ */ i(
      St,
      {
        label: "Resend",
        waiting: n,
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), r(He(p));
        }
      }
    ) })
  ] });
}
const Un = C.div``, jn = C.div`
  & > span {
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 6px;
    & > svg {
      fill: var(${T.foreground});
    }
  }
  padding: 4px;
  padding-right: 24px;
  position: relative;
  font-family: monospace;
  background-color: var(${T.computedOne});
`, Yn = C(Ln)`
  color: var(${T.notificationsForeground});
  background-color: var(${T.notificationsBackground});
  border: 1px solid var(${T.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, Vn = C(Bn)`
  fill: var(${T.notificationsForeground});
`, Fn = C.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  > button {
    width: 80px;
    height: 22px;
  }
`;
function Kn(e, t) {
  const n = Wn(e).slice(1), r = {
    id: t,
    url: n.pop(),
    headers: {},
    method: "get",
    config: {
      https: {
        rejectUnauthorized: !1
      }
    }
  };
  for (let s = 0; s < n.length; s++) {
    const a = n[s], o = n[s + 1];
    if (a === "-d")
      r.body = o;
    else if (a == "-X")
      r.method = o.toLowerCase();
    else if (a === "-H") {
      const [p, c] = o.split(": ", 2);
      r.headers[p] = c;
    }
  }
  return (r.url.startsWith("http://host.docker.internal") || r.url.startsWith("https://host.docker.internal")) && (r.url = r.url.replace("host.docker.internal", "localhost")), r;
}
function Wn(e) {
  return zn(e).map((t) => t.value);
}
function zn(e) {
  const t = /[^\s"']+|(?:"|'){2,}|"(?!")([^"]*)"|'(?!')([^']*)'|"|'/g, n = [];
  let r;
  for (; r = t.exec(e); )
    r[2] ? n.push({ type: "single", value: r[2] }) : r[1] ? n.push({ type: "double", value: r[1] }) : n.push({ type: "plain", value: r[0] });
  return n;
}
function Gn({
  issue: e,
  responses: t,
  errors: n,
  waitings: r
}) {
  var m;
  const { request: s, response: a, outcome: o, happyPath: p } = e, c = (o == null ? void 0 : o.status) !== "expected" || !(o != null && o.conformant);
  let f = "N/A";
  const l = p === null || (p == null ? void 0 : p.key) !== "happy.path.success" ? "No" : "Yes";
  l === "Yes" && (f = o != null && o.conformant ? "Yes" : "No");
  const d = t["happy-path"], y = n["happy-path"], g = r["happy-path"];
  return /* @__PURE__ */ v(Xn, { children: [
    /* @__PURE__ */ i(D, { children: /* @__PURE__ */ i("div", { style: { opacity: 1 }, children: /* @__PURE__ */ i("b", { children: "Happy Path Testing results" }) }) }),
    /* @__PURE__ */ v(D, { children: [
      /* @__PURE__ */ i("div", { children: "Test Status" }),
      /* @__PURE__ */ i("div", { children: c ? "Failed" : "Passed" })
    ] }),
    /* @__PURE__ */ v(D, { children: [
      /* @__PURE__ */ i("div", { children: "HTTP code received" }),
      /* @__PURE__ */ v("div", { children: [
        a == null ? void 0 : a.httpStatusCode,
        " (Expected: ",
        (m = p == null ? void 0 : p.httpStatusExpected) == null ? void 0 : m.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ v(D, { children: [
      /* @__PURE__ */ i("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ i("div", { children: l })
    ] }),
    /* @__PURE__ */ v(D, { children: [
      /* @__PURE__ */ i("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ i("div", { children: f })
    ] }),
    (s == null ? void 0 : s.curl) && /* @__PURE__ */ v(D, { children: [
      /* @__PURE__ */ i("div", { children: "Request" }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Fe, { curl: s == null ? void 0 : s.curl, id: "happy-path", waiting: g }) })
    ] }),
    ((a == null ? void 0 : a.http) || d) && /* @__PURE__ */ v(D, { children: [
      /* @__PURE__ */ i("div", { children: "Response" }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        Re,
        {
          accented: !0,
          response: d || je(Pe.Buffer.from(a.http, "base64"))
        }
      ) })
    ] }),
    ((o == null ? void 0 : o.error) || y) && /* @__PURE__ */ v(D, { children: [
      /* @__PURE__ */ i("div", { children: "Error" }),
      /* @__PURE__ */ i("div", { children: y ? y.message : o == null ? void 0 : o.error })
    ] })
  ] });
}
const Xn = C.div`
  margin: 8px;
  border: 1px solid var(${T.border});
`, D = C.div`
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
function Jn({
  global: e,
  operation: t
}) {
  const n = t.issues.critical ?? 0, r = t.issues.high ?? 0;
  return /* @__PURE__ */ v(Qn, { children: [
    /* @__PURE__ */ v(er, { children: [
      /* @__PURE__ */ v("div", { children: [
        "Status: ",
        /* @__PURE__ */ i("b", { children: e.state }),
        " (Exit code: ",
        e.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ i("div", { children: j.fromISO(e.endDate).toLocaleString(j.DATETIME_MED) }),
      /* @__PURE__ */ v("div", { children: [
        "Execution time:",
        " ",
        j.fromISO(e.endDate).diff(j.fromISO(e.startDate)).toFormat("mm:ss.SSS")
      ] })
    ] }),
    /* @__PURE__ */ v(Zn, { children: [
      /* @__PURE__ */ v("div", { children: [
        /* @__PURE__ */ i("div", { children: t.conformanceTestRequests.executed }),
        /* @__PURE__ */ i("div", { children: "Executed" })
      ] }),
      /* @__PURE__ */ v("div", { children: [
        /* @__PURE__ */ i("div", { children: t.issues.total ?? 0 }),
        /* @__PURE__ */ i("div", { children: "Issues Found" })
      ] }),
      /* @__PURE__ */ v("div", { children: [
        /* @__PURE__ */ i("div", { children: n + r }),
        /* @__PURE__ */ i("div", { children: "Critical/High" })
      ] })
    ] })
  ] });
}
const Qn = C.div`
  margin: 8px;
`, Zn = C.div`
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
    border: 1px solid var(${T.border});
  }
`, er = C.div`
  display: flex;
  border: 1px solid var(${T.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${T.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function tr({
  issue: e,
  httpResponse: t,
  error: n,
  id: r,
  waiting: s
}) {
  var b, E, w, R, P, O, B, H, ne, re, se, oe, ie, ae, ce, de, le, pe, ue;
  const a = V(), o = M((U) => U.scan.document), [p, c] = u.useState(!0), { response: f, test: l, outcome: d } = e, y = !((d == null ? void 0 : d.status) === "expected" && (d == null ? void 0 : d.conformant) === !0), g = (d == null ? void 0 : d.status) === "expected", m = d == null ? void 0 : d.conformant;
  let x = "N/A", $ = "N/A";
  const S = ((E = (b = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : b[0]) == null ? void 0 : E.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  return S === "Yes" && (x = ((R = (w = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : w[0]) == null ? void 0 : R.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), x === "Yes" && ($ = ((O = (P = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : P[0]) == null ? void 0 : O.responseKey) === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ v(nr, { children: [
    /* @__PURE__ */ v(rr, { collapsed: p, onClick: () => c(!p), children: [
      /* @__PURE__ */ i("div", { children: p ? /* @__PURE__ */ i(Yt, {}) : /* @__PURE__ */ i(jt, {}) }),
      /* @__PURE__ */ v("div", { children: [
        /* @__PURE__ */ i(sr, { children: (B = e.test) == null ? void 0 : B.description }),
        /* @__PURE__ */ v(or, { children: [
          y ? /* @__PURE__ */ v(Y, { children: [
            /* @__PURE__ */ i(X, {}),
            " Failed",
            e.outcome.criticality > 0 && /* @__PURE__ */ v(A, { children: [
              "/",
              /* @__PURE__ */ v("span", { style: { fontWeight: cr[d.criticality] }, children: [
                " ",
                ar[d.criticality]
              ] })
            ] })
          ] }) : /* @__PURE__ */ v(Y, { children: [
            /* @__PURE__ */ i(G, {}),
            " Passed"
          ] }),
          y && /* @__PURE__ */ v(A, { children: [
            /* @__PURE__ */ i(Y, { children: g ? /* @__PURE__ */ v(A, { children: [
              /* @__PURE__ */ i(G, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ v(A, { children: [
              /* @__PURE__ */ i(X, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ i(Y, { children: m ? /* @__PURE__ */ v(A, { children: [
              /* @__PURE__ */ i(G, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ v(A, { children: [
              /* @__PURE__ */ i(X, {}),
              " Conforms to Contract: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !p && /* @__PURE__ */ v(ir, { children: [
      /* @__PURE__ */ v(_, { children: [
        /* @__PURE__ */ i("div", { children: "HTTP code received" }),
        /* @__PURE__ */ v("div", { children: [
          (H = e.response) == null ? void 0 : H.httpStatusCode,
          " (Expected:",
          " ",
          (re = (ne = e.test) == null ? void 0 : ne.httpStatusExpected) == null ? void 0 : re.join(", "),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ v(_, { children: [
        /* @__PURE__ */ i("div", { children: "Response code found in API Contract" }),
        /* @__PURE__ */ i("div", { children: S })
      ] }),
      /* @__PURE__ */ v(_, { children: [
        /* @__PURE__ */ i("div", { children: "Content-Type found in API Contract" }),
        /* @__PURE__ */ i("div", { children: x })
      ] }),
      /* @__PURE__ */ v(_, { children: [
        /* @__PURE__ */ i("div", { children: "Response matches API Contract" }),
        /* @__PURE__ */ i("div", { children: $ })
      ] }),
      ((oe = (se = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : se[0]) == null ? void 0 : oe.responseDescription) && /* @__PURE__ */ v(_, { children: [
        /* @__PURE__ */ i("div", { children: "Response analysis" }),
        /* @__PURE__ */ v("div", { children: [
          " ",
          (ae = (ie = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : ie[0]) == null ? void 0 : ae.responseDescription
        ] })
      ] }),
      /* @__PURE__ */ v(_, { children: [
        /* @__PURE__ */ i("div", { children: "JSON Pointer" }),
        /* @__PURE__ */ i("div", { children: (ce = e.test) != null && ce.jsonPointer ? /* @__PURE__ */ i(
          "a",
          {
            href: "#",
            onClick: (U) => {
              var he;
              U.preventDefault(), U.stopPropagation(), a(
                Ie({ document: o, jsonPointer: ((he = e.test) == null ? void 0 : he.jsonPointer) + "" })
                // FIXME support indexed reports
              );
            },
            children: (de = e.test) == null ? void 0 : de.jsonPointer
          }
        ) : "N/A" })
      ] }),
      ((le = e.request) == null ? void 0 : le.curl) && /* @__PURE__ */ v(_, { children: [
        /* @__PURE__ */ i("div", { children: "Request" }),
        /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Fe, { waiting: s, curl: e.request.curl, id: r }) })
      ] }),
      n === void 0 && (t !== void 0 || ((pe = e.response) == null ? void 0 : pe.http) !== void 0) && /* @__PURE__ */ v(_, { children: [
        /* @__PURE__ */ i("div", { children: "Response" }),
        /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
          Re,
          {
            accented: !0,
            response: t || je(Pe.Buffer.from((ue = e.response) == null ? void 0 : ue.http, "base64"))
          }
        ) })
      ] }),
      n && /* @__PURE__ */ v(_, { children: [
        /* @__PURE__ */ i("div", { children: "Error" }),
        /* @__PURE__ */ i("div", { children: n == null ? void 0 : n.message })
      ] })
    ] })
  ] });
}
const nr = C.div`
  margin: 8px;
  border: 1px solid var(${T.border});
`, rr = C.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${T.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${T.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ collapsed: e }) => !e && `border-bottom: 1px solid var(${T.border});
    border-left: 5px solid var(${T.badgeBackground});`}
`, sr = C.div`
  font-weight: 600;
`, or = C.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, Y = C.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${T.foreground});
  }
`, ir = C.div`
  background-color: var(${T.computedOne});
`, _ = C.div`
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
`, ar = {
  0: "None",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Critical"
}, cr = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700
};
function dr({
  issues: e,
  responses: t,
  errors: n,
  waitings: r
}) {
  var o, p;
  const s = {};
  for (const c of e) {
    const f = (o = c.test) == null ? void 0 : o.key;
    f !== void 0 && (s[f] === void 0 && (s[f] = [], (p = c.test) == null || p.description), s[f].push(c));
  }
  const a = Object.keys(s);
  for (const c of a)
    s[c].sort((f, l) => {
      var d, y, g, m, x, $, S, b, E, w;
      if (((d = f.outcome) == null ? void 0 : d.status) !== ((y = l.outcome) == null ? void 0 : y.status)) {
        if (((g = f.outcome) == null ? void 0 : g.status) === "incorrect")
          return -1;
        if (((m = l.outcome) == null ? void 0 : m.status) === "incorrect")
          return 1;
        if (((x = f.outcome) == null ? void 0 : x.status) === "unexpected")
          return -1;
        if ((($ = l.outcome) == null ? void 0 : $.status) === "unexpected")
          return 1;
      }
      return ((S = f.outcome) == null ? void 0 : S.criticality) !== ((b = l.outcome) == null ? void 0 : b.criticality) ? ((E = f.outcome) == null ? void 0 : E.criticality) - ((w = l.outcome) == null ? void 0 : w.criticality) : 0;
    });
  return e.length === 0 ? /* @__PURE__ */ i(ge, { children: /* @__PURE__ */ i(lr, { children: "No test results available" }) }) : /* @__PURE__ */ i(ge, { children: a.map((c) => /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ i(pr, { children: ur[c] ?? "Unknown test type" }),
    s[c].map((f, l) => {
      const d = `${c}-${l}`;
      return /* @__PURE__ */ i(
        tr,
        {
          issue: f,
          httpResponse: t[d],
          error: n[d],
          waiting: r[d],
          id: d
        },
        d
      );
    })
  ] }, c)) });
}
const ge = C.div`
  margin-top: 8px;
`, lr = C.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${T.border});
`, pr = C.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, ur = {
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
function hr() {
  var y, g, m, x, $, S, b, E, w;
  const { scanReport: e, path: t, method: n, defaultValues: r, responses: s, errors: a, waitings: o } = M(
    (R) => R.scan
  );
  V();
  const [p, c] = u.useState("summary");
  if (e === void 0)
    return /* @__PURE__ */ i(xe, { children: /* @__PURE__ */ i(fr, { children: "Report is not yet available" }) });
  const f = (x = (m = (g = (y = e.paths) == null ? void 0 : y[t]) == null ? void 0 : g[n]) == null ? void 0 : m.happyPaths) == null ? void 0 : x[0], l = (S = ($ = e.paths) == null ? void 0 : $[t]) == null ? void 0 : S.summary, d = [];
  for (const R of Vt) {
    const P = (w = (E = (b = e == null ? void 0 : e.paths) == null ? void 0 : b[t]) == null ? void 0 : E[R]) == null ? void 0 : w.conformanceRequestIssues;
    P !== void 0 && d.push(...P);
  }
  return /* @__PURE__ */ i(xe, { children: /* @__PURE__ */ v(It, { value: p, onValueChange: c, children: [
    /* @__PURE__ */ v(Mt, { children: [
      /* @__PURE__ */ i(fe, { value: "summary", children: "Summary" }),
      /* @__PURE__ */ i(fe, { value: "tests", children: "Tests" })
    ] }),
    /* @__PURE__ */ v(ve, { value: "summary", children: [
      /* @__PURE__ */ i(Jn, { global: e.summary, operation: l }),
      f && /* @__PURE__ */ i(
        Gn,
        {
          issue: f,
          responses: s,
          errors: a,
          waitings: o
        }
      )
    ] }),
    /* @__PURE__ */ i(ve, { value: "tests", children: /* @__PURE__ */ i(dr, { issues: d, responses: s, errors: a, waitings: o }) })
  ] }) });
}
const xe = C.div``, fr = C.div`
  margin: 1em;
  padding: 10px;
`;
function vr() {
  const e = V(), { path: t, method: n, oas: r, rawOas: s, defaultValues: a, scanConfigRaw: o, scanReport: p, waiting: c } = M((E) => E.scan), f = M((E) => E.prefs), l = yr(r, f.scanServer, a.server), d = {
    ...a,
    server: l,
    security: mr(a.security, f.security)
  }, y = async (E) => {
    const w = _t(E), [R, P] = Kt(o, t, n, w);
    e($e(w.server));
    const O = w.security[w.securityIndex];
    if (O)
      for (const [B, H] of Object.entries(O))
        typeof H == "string" && H.startsWith("{{") && H.endsWith("}}") && e(Ce({ scheme: B, secret: H }));
    e(
      ke({
        defaultValues: w,
        scanConfigRaw: R,
        env: P,
        rawOas: s
      })
    );
  }, [g, m] = u.useState(!1);
  u.useEffect(() => {
    m(p !== void 0);
  }, [p]);
  const x = qt({
    reValidateMode: "onChange",
    values: Tt(d)
  }), { handleSubmit: $, formState: S } = x, b = Object.keys(S.errors || {}).length > 0;
  return /* @__PURE__ */ v(A, { children: [
    /* @__PURE__ */ i(Lt, { ...x, children: /* @__PURE__ */ v(
      Rt,
      {
        collapsed: g,
        title: "Scan Configuration",
        onExpand: () => m(!1),
        children: [
          /* @__PURE__ */ i(
            Pt,
            {
              method: n,
              path: t,
              servers: Oe(r),
              onSubmit: $(y),
              buttonText: "Scan",
              submitDisabled: b,
              waiting: c
            }
          ),
          /* @__PURE__ */ i(Ot, { oas: r, path: t, method: n })
        ]
      }
    ) }),
    p && /* @__PURE__ */ i(hr, {})
  ] });
}
function mr(e, t) {
  const n = [];
  for (const r of e) {
    const s = {};
    for (const [a, o] of Object.entries(r))
      t[a] && typeof o == "string" ? s[a] = t[a] : s[a] = o;
    n.push(s);
  }
  return n;
}
function yr(e, t, n) {
  const r = Oe(e), s = r.some((o) => o === t);
  if (t !== void 0 && t !== "" && s)
    return t;
  const a = r.some((o) => o === t);
  return n !== void 0 && n !== "" && a ? n : r.length > 0 ? r[0] : "";
}
const be = [
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ i(vr, {}),
    when: Ae
  }
], gr = {
  changeTheme: ot,
  scanOperation: Ae,
  showGeneralError: Jt,
  showHttpError: Qt,
  showHttpResponse: Zt,
  showScanReport: Xt,
  loadEnv: Bt,
  loadPrefs: kt
};
function xr() {
  return /* @__PURE__ */ v(A, { children: [
    /* @__PURE__ */ i(st, {}),
    /* @__PURE__ */ i(At, {})
  ] });
}
function br(e, t) {
  const n = nn(rn(e, be), t);
  et(document.getElementById("root")).render(
    /* @__PURE__ */ i(tt.StrictMode, { children: /* @__PURE__ */ i(nt, { store: n, children: /* @__PURE__ */ i(Dt.Provider, { value: be, children: /* @__PURE__ */ i(xr, {}) }) }) })
  ), window.addEventListener("message", rt(n, gr));
}
window.renderWebView = br;
