import { c as Re, u as Pe, a as is, l as as, t as os, b as cs, s as ds, i as ls, d as u, T as h, j as e, r as L, U as ps, e as hs, R as us, P as fs, m as xs, f as gs, g as ms } from "./styled-components.browser.esm.b4077a0f.js";
import { r as vs, s as ys, R as js, a as bs } from "./Router.bc058529.js";
import { f as Ss, g as ws, i as Cs, a as $s, b as Es, c as qs, d as ks, p as Rs, s as Oe, e as Te, R as ae, h as oe, S as z, w as Ps, j as Os, O as Ts, k as Ne, l as Ns, u as As, m as Is } from "./Response.9823a1f2.js";
import { S as Ae, c as Ds, d as Hs, e as Ms } from "./Xmark.97e9c535.js";
import { e as Ls, s as Bs, l as _s } from "./slice.9806eb76.js";
import { c as Fs, P as Us, S as W, l as Ys } from "./ProgressButton.26aa5f1e.js";
import { u as Vs, a as Ks, F as zs } from "./index.esm.2e24c5a3.js";
import { $ as Ie, T as De, a as J, b as G } from "./Tabs.d6340d43.js";
import { $ as Ws, a as Js, b as Gs, c as Qs, d as Xs, e as Zs } from "./index.module.be22a077.js";
import { D as M } from "./datetime.eb6ea7e1.js";
import { S as He, a as et } from "./TriangleExclamation.3c1770d3.js";
import { S as Me } from "./AngleUp.51e58661.js";
import { S as Q } from "./ExclamationCircle.20b20ea3.js";
import { P as Le } from "./Select.aaac1f78.js";
import "./downshift.esm.c45abd85.js";
import "./index.module.827db8cc.js";
const Be = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace"
];
function ye(s) {
  return {
    query: s.parameters.query,
    header: s.parameters.header,
    path: s.parameters.path,
    cookie: s.parameters.cookie
  };
}
function st(s, t, n) {
  var c;
  const r = _e(
    s,
    s.playbook.paths[t][n].happyPaths[0].requests[0]
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
    requestBody: (c = r == null ? void 0 : r.requestBody) == null ? void 0 : c.json,
    host: r.host
  };
}
function tt(s, t, n, r, c, o, i) {
  var l, g, m;
  const a = JSON.parse(JSON.stringify(s)), p = _e(
    a,
    a.playbook.paths[t][n].happyPaths[0].requests[0]
  ), x = it(i.server, r, c, o);
  p.host = x.endsWith("/") ? x.slice(0, -1) : x, p.path = t, p.method = n, p.requestBody && ((l = i.body) == null ? void 0 : l.value) !== void 0 && (p.requestBody.json = (g = i.body) == null ? void 0 : g.value), p.headerParameters = i.parameters.header, p.queryParameters = i.parameters.query, p.cookieParameters = i.parameters.cookie, p.pathParameters = i.parameters.path, a.playbook.paths[t] = {
    [n]: a.playbook.paths[t][n]
  }, ((m = a == null ? void 0 : a.environment) == null ? void 0 : m.host) !== void 0 && (a.environment.host = x);
  const d = nt(
    i.security,
    i.securityIndex,
    a == null ? void 0 : a.environment
  );
  return [a, d];
}
function _e(s, t) {
  return t.$ref ? Ss(s, t.$ref).request.requestDetails : t.request.requestDetails;
}
function nt(s, t, n) {
  const r = {}, c = s[t];
  if (c)
    for (const [o, i] of Object.entries(c)) {
      const a = rt(n, o);
      a !== void 0 && (typeof i == "string" ? r[a] = i : r[a] = `${i.username}:${i.password}`);
    }
  return r;
}
function rt(s, t) {
  const n = s == null ? void 0 : s[t], r = n == null ? void 0 : n.match(/env\('(.+)'\)/);
  if (Array.isArray(r))
    return r[1];
  const c = n == null ? void 0 : n.match(/env_with_default\('(.+)',.+\)/);
  if (Array.isArray(c))
    return c[1];
}
function it(s, t, n, r) {
  return t == "docker" && n && (r === "darwin" || r === "win32") && (s.toLowerCase().startsWith("https://localhost") || s.toLowerCase().startsWith("http://localhost")) ? s.replace(/localhost/i, "host.docker.internal") : s;
}
function fe(s, t, n, r) {
  return t == "docker" && n && (r === "darwin" || r === "win32") && (s.toLowerCase().includes("https://host.docker.internal") || s.toLowerCase().includes("http://host.docker.internal")) ? s.replace("host.docker.internal", "localhost") : s;
}
function je(s) {
  return {
    query: s.parameters.query,
    header: s.parameters.header,
    path: s.parameters.path,
    cookie: s.parameters.cookie
  };
}
function at(s, t) {
  var c;
  const n = function(o) {
    const i = {};
    if (o === void 0)
      return i;
    for (const { key: a, value: p } of o)
      i[a] = p;
    return i;
  }, r = s.operations[t].request.request.details;
  return {
    parameters: {
      query: n(r.queries),
      path: n(r.paths),
      header: n(r.headers),
      cookie: n(r.cookies),
      body: {},
      formData: {}
    },
    requestBody: (c = r == null ? void 0 : r.requestBody) == null ? void 0 : c.json,
    host: r.url
  };
}
function ot(s, t, n, r, c, o) {
  var l, g, m, v, y, j, b;
  const i = function(S) {
    const w = [];
    for (const [R, P] of Object.entries(S))
      w.push({ key: R, value: P });
    return w;
  }, a = JSON.parse(JSON.stringify(s)), p = a.operations[t].request.request.details, x = lt(o.server, n, r, c);
  p.requestBody && ((l = o.body) == null ? void 0 : l.value) !== void 0 && (p.requestBody.json = (g = o.body) == null ? void 0 : g.value), p.headers = i(o.parameters.header), p.querys = i(o.parameters.query), p.cookies = i(o.parameters.cookie), p.paths = i(o.parameters.path), a.operations = {
    [t]: a.operations[t]
  }, ((j = (y = (v = (m = a == null ? void 0 : a.environments) == null ? void 0 : m.default) == null ? void 0 : v.variables) == null ? void 0 : y.host) == null ? void 0 : j.default) !== void 0 && (a.environments.default.variables.host.default = x);
  const d = ct(
    o.security,
    o.securityIndex,
    (b = a == null ? void 0 : a.environments) == null ? void 0 : b.default
  );
  return [a, d];
}
function ct(s, t, n) {
  const r = {}, c = s[t];
  if (c)
    for (const [o, i] of Object.entries(c)) {
      const a = dt(n, o);
      a !== void 0 && (typeof i == "string" ? r[a] = i : r[a] = `${i.username}:${i.password}`);
    }
  return r;
}
function dt(s, t) {
  var r;
  const n = (r = s == null ? void 0 : s.variables) == null ? void 0 : r[t];
  if (n.from === "environment")
    return n.name;
}
function lt(s, t, n, r) {
  return t == "docker" && n && (r === "darwin" || r === "win32") && (s.toLowerCase().startsWith("https://localhost") || s.toLowerCase().startsWith("http://localhost")) ? s.replace(/localhost/i, "host.docker.internal") : s;
}
const pt = {
  oas: {
    openapi: "3.0.0",
    info: { title: "", version: "0.0" },
    paths: {}
  },
  rawOas: "",
  scanReport: void 0,
  isNewScanConfig: !1,
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
}, Fe = Re({
  name: "scan",
  initialState: pt,
  reducers: {
    startScan: (s, t) => {
      s.error = void 0;
    },
    scanOperation: (s, t) => {
      const { oas: n, rawOas: r, path: c, method: o, config: i } = t.payload, a = ws(n, c, o), p = (a == null ? void 0 : a.operationId) === void 0 ? `${c}:${o}` : a.operationId, x = i.playbook === void 0, d = x ? at(i, p) : st(i, c, o);
      if (Cs(n)) {
        const l = $s(n, c, o), g = Es(l), m = x ? je(d) : ye(d);
        s.defaultValues = {
          server: d.host,
          parameters: m,
          security: g,
          securityIndex: 0,
          body: { mediaType: "application/json", value: d.requestBody }
        };
      } else {
        const l = qs(n, c, o), g = ks(l), m = x ? je(d) : ye(d);
        s.defaultValues = {
          server: d.host,
          parameters: m,
          security: g,
          securityIndex: 0,
          body: { mediaType: "application/json", value: d.requestBody }
        };
      }
      s.oas = n, s.rawOas = r, s.path = c, s.method = o, s.operationId = p, s.scanConfigRaw = i, s.scanConfig = d, s.isNewScanConfig = x, s.scanReport = void 0, s.error = void 0;
    },
    runScan: (s, t) => {
      s.defaultValues = t.payload.defaultValues, s.scanReport = void 0, s.error = void 0, s.waiting = !0, s.response = void 0, s.responses = {};
    },
    showScanReport: (s, t) => {
      if (s.isNewScanConfig) {
        const n = mt(
          t.payload.report,
          s.path,
          s.operationId
        ), r = Se(n, s.filter), { titles: c } = ue(n), { grouped: o } = ue(r);
        s.issues = n, s.titles = c, s.grouped = o;
      } else {
        const n = gt(t.payload.report, s.path, s.method), r = be(n, s.filter), { titles: c } = he(n), { grouped: o } = he(r);
        s.issues = n, s.titles = c, s.grouped = o;
      }
      s.scanReport = t.payload.report, s.waiting = !1;
    },
    changeFilter: (s, t) => {
      if (s.filter = t.payload, s.isNewScanConfig) {
        const n = Se(s.issues, s.filter), { grouped: r } = ue(n);
        s.grouped = r;
      } else {
        const n = be(s.issues, s.filter), { grouped: r } = he(n);
        s.grouped = r;
      }
    },
    changeTab: (s, t) => {
      s.tab = t.payload;
    },
    showGeneralError: (s, t) => {
      s.error = t.payload, s.waiting = !1;
    },
    showHttpResponse: (s, t) => {
      const n = t.payload;
      s.responses[n.id] = n, s.waitings[n.id] = !1, delete s.errors[n.id];
    },
    showHttpError: (s, t) => {
      const n = t.payload;
      s.errors[n.id] = n, s.waitings[n.id] = !1, delete s.responses[n.id];
    },
    sendHttpRequest: (s, t) => {
      s.waitings[t.payload.id] = !0;
    },
    sendCurlRequest: (s, t) => {
    },
    showJsonPointer: (s, t) => {
    },
    showAuditReport: (s, t) => {
    }
  }
}), {
  startScan: Ue,
  scanOperation: Ye,
  runScan: Ve,
  showScanReport: ht,
  showGeneralError: ut,
  showHttpError: ft,
  sendHttpRequest: Ke,
  sendCurlRequest: ze,
  showHttpResponse: xt,
  showJsonPointer: ge,
  showAuditReport: We,
  changeTab: B,
  changeFilter: k
} = Fe.actions;
function be(s, t) {
  const n = (o) => {
    var i;
    return (t == null ? void 0 : t.title) === void 0 || ((i = o.test) == null ? void 0 : i.key) === t.title;
  }, r = t.severity !== void 0 ? Ae.indexOf(t.severity) + 1 : 0, c = (o) => {
    var i, a;
    return t.severity === void 0 || ((i = o.outcome) == null ? void 0 : i.criticality) === void 0 || ((a = o.outcome) == null ? void 0 : a.criticality) >= r;
  };
  return s.filter((o) => n(o) && c(o));
}
function gt(s, t, n) {
  var c, o, i;
  const r = [];
  for (const a of Be) {
    const p = (i = (o = (c = s == null ? void 0 : s.paths) == null ? void 0 : c[t]) == null ? void 0 : o[a]) == null ? void 0 : i.conformanceRequestIssues;
    p !== void 0 && r.push(...p);
  }
  return r;
}
function he(s) {
  var c, o;
  const t = {}, n = {};
  for (const i of s) {
    const a = (c = i.test) == null ? void 0 : c.key;
    a !== void 0 && (t[a] === void 0 && (t[a] = [], n[a] = (o = i.test) == null ? void 0 : o.description), t[a].push(i));
  }
  const r = Object.keys(t);
  for (const i of r)
    t[i].sort((a, p) => {
      var x, d, l, g, m, v, y, j, b, S;
      if (((x = a.outcome) == null ? void 0 : x.status) !== ((d = p.outcome) == null ? void 0 : d.status)) {
        if (((l = a.outcome) == null ? void 0 : l.status) === "incorrect")
          return -1;
        if (((g = p.outcome) == null ? void 0 : g.status) === "incorrect")
          return 1;
        if (((m = a.outcome) == null ? void 0 : m.status) === "unexpected")
          return -1;
        if (((v = p.outcome) == null ? void 0 : v.status) === "unexpected")
          return 1;
      }
      return ((y = a.outcome) == null ? void 0 : y.criticality) !== ((j = p.outcome) == null ? void 0 : j.criticality) ? ((b = a.outcome) == null ? void 0 : b.criticality) - ((S = p.outcome) == null ? void 0 : S.criticality) : 0;
    });
  return { grouped: t, titles: Object.keys(n) };
}
function mt(s, t, n) {
  var i, a, p, x;
  const r = [], c = (a = (i = s == null ? void 0 : s.operations) == null ? void 0 : i[n]) == null ? void 0 : a.conformanceRequestsResults;
  c !== void 0 && r.push(...c);
  const o = s == null ? void 0 : s.methodNotAllowed;
  for (const d of Be) {
    const l = (x = (p = o == null ? void 0 : o[t]) == null ? void 0 : p[d]) == null ? void 0 : x.conformanceRequestsResults;
    l !== void 0 && r.push(...l);
  }
  return r;
}
function Se(s, t) {
  const n = (o) => {
    var i;
    return (t == null ? void 0 : t.title) === void 0 || ((i = o.test) == null ? void 0 : i.key) === t.title;
  }, r = t.severity !== void 0 ? Ae.indexOf(t.severity) + 1 : 0, c = (o) => {
    var i, a;
    return t.severity === void 0 || ((i = o.outcome) == null ? void 0 : i.criticality) === void 0 || ((a = o.outcome) == null ? void 0 : a.criticality) >= r;
  };
  return s.filter((o) => n(o) && c(o));
}
function ue(s) {
  var c, o;
  const t = {}, n = {};
  for (const i of s) {
    const a = (c = i.test) == null ? void 0 : c.key;
    a !== void 0 && (t[a] === void 0 && (t[a] = [], n[a] = (o = i.test) == null ? void 0 : o.description), t[a].push(i));
  }
  const r = Object.keys(t);
  for (const i of r)
    t[i].sort((a, p) => {
      var x, d, l, g, m, v, y, j, b, S;
      if (((x = a.outcome) == null ? void 0 : x.status) !== ((d = p.outcome) == null ? void 0 : d.status)) {
        if (((l = a.outcome) == null ? void 0 : l.status) === "error")
          return -1;
        if (((g = p.outcome) == null ? void 0 : g.status) === "error")
          return 1;
        if (((m = a.outcome) == null ? void 0 : m.status) === "defective")
          return -1;
        if (((v = p.outcome) == null ? void 0 : v.status) === "defective")
          return 1;
      }
      return ((y = a.outcome) == null ? void 0 : y.criticality) !== ((j = p.outcome) == null ? void 0 : j.criticality) ? ((b = a.outcome) == null ? void 0 : b.criticality) - ((S = p.outcome) == null ? void 0 : S.criticality) : 0;
    });
  return { grouped: t, titles: Object.keys(n) };
}
const vt = Fe.reducer, yt = {
  messages: []
}, Je = Re({
  name: "logging",
  initialState: yt,
  reducers: {
    showLogMessage: (s, t) => {
      s.messages.push(t.payload);
    },
    clearLogs: (s) => {
      s.messages = [];
    }
  }
}), { showLogMessage: jt, clearLogs: bt } = Je.actions, Ge = Pe, St = Je.reducer, wt = {
  theme: os,
  scan: vt,
  router: vs,
  env: Ls,
  prefs: Rs,
  config: Fs,
  logging: St
}, Ct = (s, t) => is({
  reducer: wt,
  middleware: (n) => n().prepend(s.middleware).concat(as),
  preloadedState: {
    theme: t
  }
}), q = () => Vs(), E = Pe, Qe = cs(), I = Qe.startListening;
function $t(s, t) {
  const n = {
    runScan: () => I({
      actionCreator: Ve,
      effect: async (r, c) => {
        s.postMessage({
          command: "runScan",
          payload: {
            config: r.payload.scanConfigRaw,
            env: r.payload.env,
            rawOas: r.payload.rawOas
          }
        });
      }
    }),
    savePrefs: () => I({
      matcher: ls(Oe, Te),
      effect: async (r, c) => {
        const { prefs: o } = c.getState();
        s.postMessage({
          command: "savePrefs",
          payload: o
        });
      }
    }),
    sendHttpRequest: () => I({
      actionCreator: Ke,
      effect: async (r, c) => {
        s.postMessage({
          command: "sendHttpRequest",
          payload: r.payload
        });
      }
    }),
    sendCurlRequest: () => I({
      actionCreator: ze,
      effect: async (r, c) => {
        s.postMessage({
          command: "sendCurlRequest",
          payload: r.payload
        });
      }
    }),
    showJsonPointer: () => I({
      actionCreator: ge,
      effect: async (r, c) => {
        s.postMessage({
          command: "showJsonPointer",
          payload: r.payload
        });
      }
    }),
    showAuditReport: () => I({
      actionCreator: We,
      effect: async (r, c) => {
        s.postMessage({
          command: "showAuditReport",
          payload: void 0
        });
      }
    }),
    showEnvWindow: () => I({
      actionCreator: Bs,
      effect: async (r, c) => {
        s.postMessage({ command: "showEnvWindow", payload: void 0 });
      }
    })
  };
  return ys(I, t), ds(n), Qe;
}
function Xe() {
  const t = Ge((n) => n.logging.messages).filter((n) => n.level == "info");
  return t.length === 0 ? null : /* @__PURE__ */ e.jsx(qt, { children: t.map((n, r, c) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(Et, { first: r === 0, last: r === c.length - 1 }),
    /* @__PURE__ */ e.jsx("div", { children: n.message })
  ] }, r)) });
}
function Et({ first: s, last: t }) {
  return /* @__PURE__ */ e.jsxs(kt, { first: s, last: t, children: [
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {})
  ] });
}
const qt = u.div`
  color: var(${h.foreground});
  background-color: var(${h.background});
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
`, kt = u.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ first: s }) => !s && `background-color: var(${h.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${h.border});
    border: 1px solid var(${h.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ last: s }) => !s && `background-color: var(${h.border});`}
  }
`;
function f(s) {
  s === void 0 || this.initialize(s), this.maxHeaderSize = f.maxHeaderSize;
}
f.prototype.initialize = function(s, t) {
  this.type = s, this.state = s + "_LINE", this.info = {
    headers: [],
    upgrade: !1
  }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
};
f.encoding = "ascii";
f.maxHeaderSize = 80 * 1024;
f.REQUEST = "REQUEST";
f.RESPONSE = "RESPONSE";
var Ze = f.kOnHeaders = 1, xe = f.kOnHeadersComplete = 2, ce = f.kOnBody = 3, me = f.kOnMessageComplete = 4;
f.prototype[Ze] = f.prototype[xe] = f.prototype[ce] = f.prototype[me] = function() {
};
var es = !0;
Object.defineProperty(f, "kOnExecute", {
  get: function() {
    return es = !1, 99;
  }
});
var ss = f.methods = [
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
], ts = ss.indexOf("CONNECT");
f.prototype.reinitialize = f;
f.prototype.close = f.prototype.pause = f.prototype.resume = f.prototype.free = function() {
};
f.prototype._compatMode0_11 = !1;
f.prototype.getAsyncId = function() {
  return 0;
};
var Rt = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  HEADER: !0
};
f.prototype.execute = function(s, t, n) {
  if (!(this instanceof f))
    throw new TypeError("not a HTTPParser");
  t = t || 0, n = typeof n == "number" ? n : s.length, this.chunk = s, this.offset = t;
  var r = this.end = t + n;
  try {
    for (; this.offset < r && !this[this.state](); )
      ;
  } catch (c) {
    if (this.isUserCall)
      throw c;
    return this.hadError = !0, c;
  }
  return this.chunk = null, n = this.offset - t, Rt[this.state] && (this.headerSize += n, this.headerSize > (this.maxHeaderSize || f.maxHeaderSize)) ? new Error("max header size exceeded") : n;
};
var Pt = {
  REQUEST_LINE: !0,
  RESPONSE_LINE: !0,
  BODY_RAW: !0
};
f.prototype.finish = function() {
  if (!this.hadError) {
    if (!Pt[this.state])
      return new Error("invalid state for EOF");
    this.state === "BODY_RAW" && this.userCall()(this[me]());
  }
};
f.prototype.consume = f.prototype.unconsume = f.prototype.getCurrentBuffer = function() {
};
f.prototype.userCall = function() {
  this.isUserCall = !0;
  var s = this;
  return function(t) {
    return s.isUserCall = !1, t;
  };
};
f.prototype.nextRequest = function() {
  this.userCall()(this[me]()), this.reinitialize(this.type);
};
f.prototype.consumeLine = function() {
  for (var s = this.end, t = this.chunk, n = this.offset; n < s; n++)
    if (t[n] === 10) {
      var r = this.line + t.toString(f.encoding, this.offset, n);
      return r.charAt(r.length - 1) === "\r" && (r = r.substr(0, r.length - 1)), this.line = "", this.offset = n + 1, r;
    }
  this.line += t.toString(f.encoding, this.offset, this.end), this.offset = this.end;
};
var Ot = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, Tt = /^[ \t]+(.*[^ \t])/;
f.prototype.parseHeader = function(s, t) {
  if (s.indexOf("\r") !== -1)
    throw de("HPE_LF_EXPECTED");
  var n = Ot.exec(s), r = n && n[1];
  if (r)
    t.push(r), t.push(n[2]);
  else {
    var c = Tt.exec(s);
    c && t.length && (t[t.length - 1] && (t[t.length - 1] += " "), t[t.length - 1] += c[1]);
  }
};
var Nt = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
f.prototype.REQUEST_LINE = function() {
  var s = this.consumeLine();
  if (s) {
    var t = Nt.exec(s);
    if (t === null)
      throw de("HPE_INVALID_CONSTANT");
    if (this.info.method = this._compatMode0_11 ? t[1] : ss.indexOf(t[1]), this.info.method === -1)
      throw new Error("invalid request method");
    this.info.url = t[2], this.info.versionMajor = +t[3], this.info.versionMinor = +t[4], this.body_bytes = 0, this.state = "HEADER";
  }
};
var At = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
f.prototype.RESPONSE_LINE = function() {
  var s = this.consumeLine();
  if (s) {
    var t = At.exec(s);
    if (t === null)
      throw de("HPE_INVALID_CONSTANT");
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
  var s = this.consumeLine();
  if (s !== void 0) {
    var t = this.info;
    if (s)
      this.parseHeader(s, t.headers);
    else {
      for (var n = t.headers, r = !1, c, o = !1, i = 0; i < n.length; i += 2)
        switch (n[i].toLowerCase()) {
          case "transfer-encoding":
            this.isChunked = n[i + 1].toLowerCase() === "chunked";
            break;
          case "content-length":
            if (c = +n[i + 1], r) {
              if (c !== this.body_bytes)
                throw de("HPE_UNEXPECTED_CONTENT_LENGTH");
            } else
              r = !0, this.body_bytes = c;
            break;
          case "connection":
            this.connection += n[i + 1].toLowerCase();
            break;
          case "upgrade":
            o = !0;
            break;
        }
      this.isChunked && r && (r = !1, this.body_bytes = null), o && this.connection.indexOf("upgrade") != -1 ? t.upgrade = this.type === f.REQUEST || t.statusCode === 101 : t.upgrade = t.method === ts, this.isChunked && t.upgrade && (this.isChunked = !1), t.shouldKeepAlive = this.shouldKeepAlive();
      var a;
      if (es ? a = this.userCall()(this[xe](t)) : a = this.userCall()(this[xe](
        t.versionMajor,
        t.versionMinor,
        t.headers,
        t.method,
        t.url,
        t.statusCode,
        t.statusMessage,
        t.upgrade,
        t.shouldKeepAlive
      )), a === 2)
        return this.nextRequest(), !0;
      if (this.isChunked && !a)
        this.state = "BODY_CHUNKHEAD";
      else {
        if (a || this.body_bytes === 0)
          return this.nextRequest(), t.upgrade;
        this.body_bytes === null ? this.state = "BODY_RAW" : this.state = "BODY_SIZED";
      }
    }
  }
};
f.prototype.BODY_CHUNKHEAD = function() {
  var s = this.consumeLine();
  s !== void 0 && (this.body_bytes = parseInt(s, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
};
f.prototype.BODY_CHUNK = function() {
  var s = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[ce](this.chunk, this.offset, s)), this.offset += s, this.body_bytes -= s, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
};
f.prototype.BODY_CHUNKEMPTYLINE = function() {
  var s = this.consumeLine();
  s !== void 0 && (this.state = "BODY_CHUNKHEAD");
};
f.prototype.BODY_CHUNKTRAILERS = function() {
  var s = this.consumeLine();
  s !== void 0 && (s ? this.parseHeader(s, this.trailers) : (this.trailers.length && this.userCall()(this[Ze](this.trailers, "")), this.nextRequest()));
};
f.prototype.BODY_RAW = function() {
  var s = this.end - this.offset;
  this.userCall()(this[ce](this.chunk, this.offset, s)), this.offset = this.end;
};
f.prototype.BODY_SIZED = function() {
  var s = Math.min(this.end - this.offset, this.body_bytes);
  this.userCall()(this[ce](this.chunk, this.offset, s)), this.offset += s, this.body_bytes -= s, this.body_bytes || this.nextRequest();
};
["Headers", "HeadersComplete", "Body", "MessageComplete"].forEach(function(s) {
  var t = f["kOn" + s];
  Object.defineProperty(f.prototype, "on" + s, {
    get: function() {
      return this[t];
    },
    set: function(n) {
      return this._compatMode0_11 = !0, ts = "CONNECT", this[t] = n;
    }
  });
});
function de(s) {
  var t = new Error("Parse Error");
  return t.code = s, t;
}
function le(s) {
  const t = new f(f.RESPONSE);
  let n = !1, r = 0, c, o, i = [], a = [];
  if (t[f.kOnHeadersComplete] = function(d) {
    d.shouldKeepAlive, d.upgrade, r = d.statusCode, d.statusMessage, c = d.versionMajor, o = d.versionMinor, i = d.headers;
  }, t[f.kOnBody] = function(d, l, g) {
    a.push(d.slice(l, l + g));
  }, t[f.kOnHeaders] = function(d) {
  }, t[f.kOnMessageComplete] = function() {
    n = !0;
  }, t.execute(s), t.finish(), !n)
    throw new Error("Could not parse");
  let p = a.join("");
  const x = [];
  for (let d = 0; d < i.length - 1; d++)
    d % 2 === 0 && x.push([i[d], i[d + 1]]);
  return {
    headers: x,
    statusCode: r,
    httpVersion: `${c}.${o}`,
    body: p
  };
}
function pe({
  curl: s,
  id: t,
  waiting: n
}) {
  const r = q(), c = E((l) => l.scan.defaultValues), {
    docker: { replaceLocalhost: o },
    scanRuntime: i,
    platform: a
  } = E((l) => l.config.data), p = c == null ? void 0 : c.security[c.securityIndex], x = s.replace(/{{([\w-]+)\/([\w-]+)}}/gm, (l, g, m) => p !== void 0 && typeof p[g] == "string" ? p[g] : l), d = Bt(x, t, i, o, a);
  return /* @__PURE__ */ e.jsxs(It, { children: [
    /* @__PURE__ */ e.jsxs(Dt, { style: { lineBreak: "anywhere", whiteSpace: "pre-line" }, children: [
      /* @__PURE__ */ e.jsx(Gs, { children: /* @__PURE__ */ e.jsxs(Qs, { children: [
        /* @__PURE__ */ e.jsx(Xs, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { children: /* @__PURE__ */ e.jsx(
          Ds,
          {
            onClick: (l) => {
              l.preventDefault(), l.stopPropagation(), r(
                ze(
                  fe(
                    x,
                    i,
                    o,
                    a
                  )
                )
              );
            }
          }
        ) }) }),
        /* @__PURE__ */ e.jsx(Zs, { children: /* @__PURE__ */ e.jsxs(Ht, { sideOffset: 5, children: [
          "Copy cURL command to the clipboard",
          /* @__PURE__ */ e.jsx(Mt, {})
        ] }) })
      ] }) }),
      fe(s, i, o, a)
    ] }),
    /* @__PURE__ */ e.jsx(Lt, { children: /* @__PURE__ */ e.jsx(
      Us,
      {
        label: "Resend",
        waiting: n,
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), r(Ke(d));
        }
      }
    ) })
  ] });
}
const It = u.div``, Dt = u.div`
  & > span {
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 6px;
    & > svg {
      fill: var(${h.foreground});
    }
  }
  padding: 4px;
  padding-right: 24px;
  position: relative;
  font-family: monospace;
  background-color: var(${h.computedOne});
`, Ht = u(Ws)`
  color: var(${h.notificationsForeground});
  background-color: var(${h.notificationsBackground});
  border: 1px solid var(${h.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`, Mt = u(Js)`
  fill: var(${h.notificationsForeground});
`, Lt = u.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  > button {
    width: 80px;
    height: 22px;
  }
`;
function Bt(s, t, n, r, c) {
  const o = _t(s).slice(1), i = {
    id: t,
    url: o.pop(),
    headers: {},
    method: "get",
    config: {
      https: {
        rejectUnauthorized: !1
      }
    }
  };
  for (let a = 0; a < o.length; a++) {
    const p = o[a], x = o[a + 1];
    if (p === "-d")
      i.body = x;
    else if (p == "-X")
      i.method = x.toLowerCase();
    else if (p === "-H") {
      const [d, l] = x.split(": ", 2);
      i.headers[d] = l;
    }
  }
  return i.url = fe(i.url, n, r, c), i;
}
function _t(s) {
  return Ft(s).map((t) => t.value);
}
function Ft(s) {
  const t = /[^\s"']+|(?:"|'){2,}|"(?!")([^"]*)"|'(?!')([^']*)'|"|'/g, n = [];
  let r;
  for (; r = t.exec(s); )
    r[2] ? n.push({ type: "single", value: r[2] }) : r[1] ? n.push({ type: "double", value: r[1] }) : n.push({ type: "plain", value: r[0] });
  return n;
}
function Ut({
  issue: s,
  responses: t,
  errors: n,
  waitings: r
}) {
  var v;
  const { request: c, response: o, outcome: i, happyPath: a } = s, p = (i == null ? void 0 : i.status) !== "expected" || !(i != null && i.conformant);
  let x = "N/A";
  const d = a === null || (a == null ? void 0 : a.key) !== "happy.path.success" ? "No" : "Yes";
  d === "Yes" && (x = i != null && i.conformant ? "Yes" : "No");
  const l = t["happy-path"], g = n["happy-path"], m = r["happy-path"];
  return /* @__PURE__ */ e.jsxs(Yt, { children: [
    /* @__PURE__ */ e.jsx(D, { children: /* @__PURE__ */ e.jsx("div", { style: { opacity: 1 }, children: /* @__PURE__ */ e.jsx("b", { children: "Happy Path Testing results" }) }) }),
    /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Test Status" }),
      /* @__PURE__ */ e.jsx("div", { children: p ? "Failed" : "Passed" })
    ] }),
    /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        o == null ? void 0 : o.httpStatusCode,
        " (Expected: ",
        (v = a == null ? void 0 : a.httpStatusExpected) == null ? void 0 : v.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ e.jsx("div", { children: d })
    ] }),
    /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ e.jsx("div", { children: x })
    ] }),
    (c == null ? void 0 : c.curl) && /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Request" }),
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(pe, { curl: c == null ? void 0 : c.curl, id: "happy-path", waiting: m }) })
    ] }),
    ((o == null ? void 0 : o.http) || l) && /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response" }),
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
        ae,
        {
          accented: !0,
          response: l || le(oe.Buffer.from(o.http, "base64"))
        }
      ) })
    ] }),
    ((i == null ? void 0 : i.error) || g) && /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Error" }),
      /* @__PURE__ */ e.jsx("div", { children: g ? g.message : i == null ? void 0 : i.error })
    ] })
  ] });
}
const Yt = u.div`
  margin: 8px;
  border: 1px solid var(${h.border});
`, D = u.div`
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
function Vt({
  global: s,
  operation: t
}) {
  const n = q(), r = t.issues.critical ?? 0, c = t.issues.high ?? 0;
  return /* @__PURE__ */ e.jsxs(Kt, { children: [
    /* @__PURE__ */ e.jsxs(Wt, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ e.jsx("b", { children: s.state }),
        " (Exit code: ",
        s.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ e.jsx("div", { children: M.fromISO(s.endDate).toLocaleString(M.DATETIME_MED) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Execution time:",
        " ",
        M.fromISO(s.endDate).diff(M.fromISO(s.startDate)).toFormat("mm:ss.SSS")
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(zt, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), n(B("tests")), n(k({}));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              t.conformanceTestRequests.executed,
              " ",
              /* @__PURE__ */ e.jsx(z, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), n(B("tests")), n(k({}));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              t.issues.total ?? 0,
              " ",
              /* @__PURE__ */ e.jsx(z, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), n(B("tests")), n(k({ severity: "high" }));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              r + c,
              " ",
              /* @__PURE__ */ e.jsx(z, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const Kt = u.div`
  margin: 8px;
`, zt = u.div`
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
    border: 1px solid var(${h.border});
  }
`, Wt = u.div`
  display: flex;
  border: 1px solid var(${h.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${h.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function Jt({
  issue: s,
  httpResponse: t,
  error: n,
  id: r,
  waiting: c
}) {
  var b, S, w, R, P, _, F, U, C, $, Y, V, A, K, O, X, Z, ee, se;
  const o = q(), [i, a] = L.useState(!0), { response: p, test: x, outcome: d } = s, l = !((d == null ? void 0 : d.status) === "expected" && (d == null ? void 0 : d.conformant) === !0), g = (d == null ? void 0 : d.status) === "expected", m = d == null ? void 0 : d.conformant;
  let v = "N/A", y = "N/A";
  const j = ((S = (b = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : b[0]) == null ? void 0 : S.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  return j === "Yes" && (v = ((R = (w = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : w[0]) == null ? void 0 : R.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), v === "Yes" && (y = ((_ = (P = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : P[0]) == null ? void 0 : _.responseKey) === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ e.jsxs(Gt, { children: [
    /* @__PURE__ */ e.jsxs(Qt, { collapsed: i, onClick: () => a(!i), children: [
      /* @__PURE__ */ e.jsx("div", { children: i ? /* @__PURE__ */ e.jsx(He, {}) : /* @__PURE__ */ e.jsx(Me, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(Xt, { children: (F = s.test) == null ? void 0 : F.description }),
        /* @__PURE__ */ e.jsxs(Zt, { children: [
          l ? /* @__PURE__ */ e.jsxs(re, { children: [
            /* @__PURE__ */ e.jsx(Q, {}),
            " Failed",
            s.outcome.criticality > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              "/",
              /* @__PURE__ */ e.jsxs("span", { style: { fontWeight: tn[d.criticality] }, children: [
                " ",
                sn[d.criticality]
              ] })
            ] })
          ] }) : /* @__PURE__ */ e.jsxs(re, { children: [
            /* @__PURE__ */ e.jsx(W, {}),
            " Passed"
          ] }),
          l && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(re, { children: g ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(W, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(Q, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ e.jsx(re, { children: m ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(W, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(Q, {}),
              " Conforms to Contract: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !i && /* @__PURE__ */ e.jsxs(en, { children: [
      /* @__PURE__ */ e.jsxs(T, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "HTTP code received" }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          (U = s.response) == null ? void 0 : U.httpStatusCode,
          " (Expected:",
          " ",
          ($ = (C = s.test) == null ? void 0 : C.httpStatusExpected) == null ? void 0 : $.join(", "),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(T, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Response code found in API Contract" }),
        /* @__PURE__ */ e.jsx("div", { children: j })
      ] }),
      /* @__PURE__ */ e.jsxs(T, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Content-Type found in API Contract" }),
        /* @__PURE__ */ e.jsx("div", { children: v })
      ] }),
      /* @__PURE__ */ e.jsxs(T, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Response matches API Contract" }),
        /* @__PURE__ */ e.jsx("div", { children: y })
      ] }),
      ((V = (Y = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : Y[0]) == null ? void 0 : V.responseDescription) && /* @__PURE__ */ e.jsxs(T, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Response analysis" }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          " ",
          (K = (A = d == null ? void 0 : d.apiResponseAnalysis) == null ? void 0 : A[0]) == null ? void 0 : K.responseDescription
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(T, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "JSON Pointer" }),
        /* @__PURE__ */ e.jsx("div", { children: (O = s.test) != null && O.jsonPointer ? /* @__PURE__ */ e.jsx(
          "a",
          {
            href: "#",
            onClick: (te) => {
              var ne;
              te.preventDefault(), te.stopPropagation(), o(
                ge(((ne = s.test) == null ? void 0 : ne.jsonPointer) + "")
                // FIXME support indexed reports
              );
            },
            children: (X = s.test) == null ? void 0 : X.jsonPointer
          }
        ) : "N/A" })
      ] }),
      ((Z = s.request) == null ? void 0 : Z.curl) && /* @__PURE__ */ e.jsxs(T, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Request" }),
        /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(pe, { waiting: c, curl: s.request.curl, id: r }) })
      ] }),
      n === void 0 && (t !== void 0 || ((ee = s.response) == null ? void 0 : ee.http) !== void 0) && /* @__PURE__ */ e.jsxs(T, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Response" }),
        /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
          ae,
          {
            accented: !0,
            response: t || le(oe.Buffer.from((se = s.response) == null ? void 0 : se.http, "base64"))
          }
        ) })
      ] }),
      n && /* @__PURE__ */ e.jsxs(T, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Error" }),
        /* @__PURE__ */ e.jsx("div", { children: n == null ? void 0 : n.message })
      ] })
    ] })
  ] });
}
const Gt = u.div`
  margin: 8px;
  border: 1px solid var(${h.border});
`, Qt = u.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${h.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${h.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ collapsed: s }) => !s && `border-bottom: 1px solid var(${h.border});
    border-left: 5px solid var(${h.badgeBackground});`}
`, Xt = u.div`
  font-weight: 600;
`, Zt = u.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, re = u.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${h.foreground});
  }
`, en = u.div`
  background-color: var(${h.computedOne});
`, T = u.div`
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
`, sn = {
  0: "None",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Critical"
}, tn = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700
};
function nn({
  filters: s,
  onClick: t
}) {
  return /* @__PURE__ */ e.jsx(
    rn,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t();
      },
      children: /* @__PURE__ */ e.jsxs(on, { children: [
        /* @__PURE__ */ e.jsx(Hs, {}),
        s !== 0 && /* @__PURE__ */ e.jsx(an, { children: s })
      ] })
    }
  );
}
const rn = u.div`
  width: 34px;
  height: 26px;
  position: relative;
`, an = u.div`
  position: absolute;
  left: 18px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 16px;
  height: 16px;
  color: var(${h.buttonForeground});
  background-color: var(${h.buttonBackground});
  font-size: 12px;
`, on = u.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: var(${h.buttonForeground});
  border: none;
  ${({ waiting: s }) => s && "gap: 8px;"}

  > span {
    flex: 1;
  }
  > svg {
    height: 16px;
    width: 16px;
    fill: var(${h.foreground});
  }
`;
function cn() {
  const s = q();
  return /* @__PURE__ */ e.jsxs(
    dn,
    {
      onClick: (t) => {
        s(k({})), t.preventDefault(), t.stopPropagation();
      },
      children: [
        /* @__PURE__ */ e.jsx(Ms, {}),
        " ",
        /* @__PURE__ */ e.jsx("span", { children: "Reset filters" })
      ]
    }
  );
}
const dn = u.div`
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
function ln() {
  const s = E((r) => r.scan.filter), t = q(), n = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
    { label: "Info", value: "info" }
  ];
  return /* @__PURE__ */ e.jsx(pn, { children: /* @__PURE__ */ e.jsx(
    Le,
    {
      label: "Severity",
      options: n,
      placeholder: "All",
      onSelectedItemChange: (r) => {
        r && r.value !== "all" ? t(k({ ...s, severity: r == null ? void 0 : r.value })) : t(k({ ...s, severity: void 0 }));
      },
      selected: (s == null ? void 0 : s.severity) || "all"
    }
  ) });
}
const pn = u.div`
  width: 264px;
`;
function hn() {
  const { filter: s, titles: t } = E((c) => c.scan), n = q(), r = [];
  for (const c of t)
    we[c] && r.push({ label: we[c], value: c });
  return /* @__PURE__ */ e.jsx(un, { children: /* @__PURE__ */ e.jsx(
    Le,
    {
      label: "Type",
      options: r,
      placeholder: "All",
      onSelectedItemChange: (c) => {
        c && c.value !== "all" ? n(k({ ...s, title: c.value })) : n(k({ ...s, title: void 0 }));
      },
      selected: s.title || "all"
    }
  ) });
}
const un = u.div`
  width: 264px;
`, we = {
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
function ns() {
  const { filter: s, grouped: t } = E((a) => a.scan), [n, r] = L.useState(!0), o = ["severity", "title"].filter((a) => s && s[a] !== void 0).length, i = Object.keys(t).map((a) => t[a].length).reduce((a, p) => a + p, 0);
  return /* @__PURE__ */ e.jsxs(fn, { children: [
    /* @__PURE__ */ e.jsxs(xn, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        i,
        " issues"
      ] }),
      /* @__PURE__ */ e.jsx(nn, { filters: o, onClick: () => r(!n) })
    ] }),
    !n && /* @__PURE__ */ e.jsxs(gn, { children: [
      /* @__PURE__ */ e.jsx(ln, {}),
      /* @__PURE__ */ e.jsx(hn, {}),
      /* @__PURE__ */ e.jsx(cn, {})
    ] })
  ] });
}
const fn = u.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`, xn = u.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    font-weight: 700;
  }
`, gn = u.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  > div {
    width: 264px;
  }
`;
function mn({
  issues: s,
  responses: t,
  errors: n,
  waitings: r,
  grouped: c
}) {
  return s.length === 0 ? /* @__PURE__ */ e.jsx(Ce, { children: /* @__PURE__ */ e.jsx(vn, { children: "No test results available" }) }) : /* @__PURE__ */ e.jsxs(Ce, { children: [
    /* @__PURE__ */ e.jsx(ns, {}),
    Object.keys(c).map((o) => /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx(yn, { children: jn[o] ?? "Unknown test type" }),
      c[o].map((i, a) => {
        const p = `${o}-${a}`;
        return /* @__PURE__ */ e.jsx(
          Jt,
          {
            issue: i,
            httpResponse: t[p],
            error: n[p],
            waiting: r[p],
            id: p
          },
          p
        );
      })
    ] }, o))
  ] });
}
const Ce = u.div`
  margin-top: 8px;
`, vn = u.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${h.border});
`, yn = u.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, jn = {
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
function bn() {
  var m, v, y, j, b, S;
  const { scanReport: s, path: t, method: n, responses: r, errors: c, waitings: o, tab: i, issues: a, grouped: p } = E((w) => w.scan), x = q(), d = (w) => {
    x(B(w));
  };
  if (s === void 0)
    return /* @__PURE__ */ e.jsx($e, { children: /* @__PURE__ */ e.jsx(Sn, { children: "Report is not yet available" }) });
  const l = (j = (y = (v = (m = s.paths) == null ? void 0 : m[t]) == null ? void 0 : v[n]) == null ? void 0 : y.happyPaths) == null ? void 0 : j[0], g = (S = (b = s.paths) == null ? void 0 : b[t]) == null ? void 0 : S.summary;
  return /* @__PURE__ */ e.jsx($e, { children: /* @__PURE__ */ e.jsxs(Ie, { value: i, onValueChange: d, children: [
    /* @__PURE__ */ e.jsxs(De, { children: [
      /* @__PURE__ */ e.jsx(J, { value: "summary", children: "Summary" }),
      /* @__PURE__ */ e.jsx(J, { value: "tests", children: "Tests" }),
      /* @__PURE__ */ e.jsx(J, { value: "logs", children: "Logs" })
    ] }),
    /* @__PURE__ */ e.jsxs(G, { value: "summary", children: [
      /* @__PURE__ */ e.jsx(Vt, { global: s.summary, operation: g }),
      l && /* @__PURE__ */ e.jsx(
        Ut,
        {
          issue: l,
          responses: r,
          errors: c,
          waitings: o
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(G, { value: "tests", children: /* @__PURE__ */ e.jsx(
      mn,
      {
        issues: a,
        grouped: p,
        responses: r,
        errors: c,
        waitings: o
      }
    ) }),
    /* @__PURE__ */ e.jsx(G, { value: "logs", children: /* @__PURE__ */ e.jsx(Xe, {}) })
  ] }) });
}
const $e = u.div``, Sn = u.div`
  margin: 1em;
  padding: 10px;
`;
function wn() {
  const s = E((t) => t.scan.error);
  return s ? /* @__PURE__ */ e.jsx($n, { children: /* @__PURE__ */ e.jsxs(Cn, { children: [
    /* @__PURE__ */ e.jsx("div", { children: s.message }),
    s.details && /* @__PURE__ */ e.jsx("div", { children: s.details })
  ] }) }) : null;
}
const Cn = u.div`
  border: 1px solid var(${h.errorBorder});
  color: var(${h.errorForeground});
  background-color: var(${h.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
  > div {
    font-family: monospace;
  }
`, $n = u.div`
  padding: 8px;
`;
function En() {
  const t = Ge((i) => i.logging.messages).filter((i) => i.level == "info"), n = L.useRef(null), [r, c] = L.useState(!1);
  if (L.useEffect(() => {
    n.current && !r && (n.current.scrollTop = n.current.scrollHeight);
  }, [t, r]), t.length === 0)
    return null;
  const o = () => {
    const i = n.current;
    if (i) {
      const a = i.scrollTop, p = i.scrollHeight, x = i.clientHeight;
      p - (a + x) < 10 ? c(!1) : c(!0);
    }
  };
  return /* @__PURE__ */ e.jsx(Pn, { children: /* @__PURE__ */ e.jsx(kn, { ref: n, onScroll: o, children: t.map((i, a, p) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(qn, { first: a === 0, last: a === p.length - 1 }),
    /* @__PURE__ */ e.jsx("div", { children: i.message })
  ] }, a)) }) });
}
function qn({ first: s, last: t }) {
  return /* @__PURE__ */ e.jsxs(Rn, { first: s, last: t, children: [
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {}),
    /* @__PURE__ */ e.jsx("div", {})
  ] });
}
const kn = u.div`
  color: var(${h.foreground});
  background-color: var(${h.background});
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
`, Rn = u.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: stretch;
  > div:first-child {
    width: 1px;
    height: 8px;
    ${({ first: s }) => !s && `background-color: var(${h.border});`}
  }
  > div:nth-child(2) {
    background-color: var(${h.border});
    border: 1px solid var(${h.border});
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > div:last-child {
    flex: 1;
    width: 1px;
    ${({ last: s }) => !s && `background-color: var(${h.border});`}
  }
`, Pn = u.div`
  padding: 8px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid var(${h.border});
`;
function On({
  operation: s,
  issue: t,
  responses: n,
  errors: r,
  waitings: c
}) {
  var y, j;
  const { request: o, response: i, outcome: a, happyPath: p } = t, x = !s.fuzzed;
  let d = "N/A";
  const l = ((y = t == null ? void 0 : t.outcome) == null ? void 0 : y.status) === "correct" ? "Yes" : "No";
  l === "Yes" && (d = a != null && a.conformant ? "Yes" : "No");
  const g = n["happy-path"], m = r["happy-path"], v = c["happy-path"];
  return /* @__PURE__ */ e.jsxs(Tn, { children: [
    /* @__PURE__ */ e.jsx(H, { children: /* @__PURE__ */ e.jsx("div", { style: { opacity: 1 }, children: /* @__PURE__ */ e.jsx("b", { children: "Happy Path Testing results" }) }) }),
    /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Test Status" }),
      /* @__PURE__ */ e.jsx("div", { children: x ? "Failed" : "Passed" })
    ] }),
    /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "HTTP code received" }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        i == null ? void 0 : i.httpStatusCode,
        " (Expected: ",
        (j = p == null ? void 0 : p.httpStatusExpected) == null ? void 0 : j.join(", "),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response code found in API Contract" }),
      /* @__PURE__ */ e.jsx("div", { children: l })
    ] }),
    /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response matches API Contract" }),
      /* @__PURE__ */ e.jsx("div", { children: d })
    ] }),
    (o == null ? void 0 : o.curl) && /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Request" }),
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(pe, { curl: o == null ? void 0 : o.curl, id: "happy-path", waiting: v }) })
    ] }),
    ((i == null ? void 0 : i.rawPayload) || g) && /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Response" }),
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
        ae,
        {
          accented: !0,
          response: g || le(oe.Buffer.from(i.rawPayload, "base64"))
        }
      ) })
    ] }),
    ((a == null ? void 0 : a.error) || m) && /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx("div", { children: "Error" }),
      /* @__PURE__ */ e.jsx("div", { children: m ? m.message : a == null ? void 0 : a.error })
    ] })
  ] });
}
const Tn = u.div`
  margin: 8px;
  border: 1px solid var(${h.border});
`, H = u.div`
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
function Nn({
  global: s,
  operation: t
}) {
  var i;
  const n = q(), r = s.issues.critical ?? 0, c = s.issues.high ?? 0, o = (s.conformanceTestRequests.executed.total ?? 0) + (((i = s.methodNotAllowedTestRequests) == null ? void 0 : i.executed.total) ?? 0);
  return /* @__PURE__ */ e.jsxs(An, { children: [
    /* @__PURE__ */ e.jsxs(Dn, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Status: ",
        /* @__PURE__ */ e.jsx("b", { children: s.state }),
        " (Exit code: ",
        s.exitCode,
        ")"
      ] }),
      /* @__PURE__ */ e.jsx("div", { children: M.fromISO(s.endDate).toLocaleString(M.DATETIME_MED) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Execution time:",
        " ",
        M.fromISO(s.endDate).diff(M.fromISO(s.startDate)).toFormat("mm:ss.SSS")
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(In, { children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), n(B("tests")), n(k({}));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              o,
              " ",
              /* @__PURE__ */ e.jsx(z, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Executed" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), n(B("tests")), n(k({}));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              s.issues.total ?? 0,
              " ",
              /* @__PURE__ */ e.jsx(z, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Issues Found" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: (a) => {
            a.preventDefault(), a.stopPropagation(), n(B("tests")), n(k({ severity: "high" }));
          },
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              r + c,
              " ",
              /* @__PURE__ */ e.jsx(z, {})
            ] }),
            /* @__PURE__ */ e.jsx("div", { children: "Critical/High" })
          ]
        }
      )
    ] })
  ] });
}
const An = u.div`
  margin: 8px;
`, In = u.div`
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
    border: 1px solid var(${h.border});
  }
`, Dn = u.div`
  display: flex;
  border: 1px solid var(${h.border});
  padding: 4px;
  & > div + div {
    border-left: 2px solid var(${h.border});
    padding-left: 4px;
    margin-left: 4px;
  }
`;
function Hn({
  operation: s,
  issue: t,
  httpResponse: n,
  error: r,
  id: c,
  waiting: o
}) {
  var S, w, R, P, _, F, U, C, $, Y, V, A, K, O, X, Z, ee, se, te;
  const i = q(), [a, p] = L.useState(!0), { response: x, test: d, outcome: l } = t, g = (l == null ? void 0 : l.status) === "correct", m = l == null ? void 0 : l.conformant, v = !(g && m);
  let y = "N/A", j = "N/A";
  const b = ((w = (S = l == null ? void 0 : l.apiResponseAnalysis) == null ? void 0 : S[0]) == null ? void 0 : w.responseKey) === "response-http-status-scan" ? "No" : "Yes";
  return b === "Yes" && (y = ((P = (R = l == null ? void 0 : l.apiResponseAnalysis) == null ? void 0 : R[0]) == null ? void 0 : P.responseKey) === "response-body-contenttype-scan" ? "No" : "Yes"), y === "Yes" && (j = ((F = (_ = l == null ? void 0 : l.apiResponseAnalysis) == null ? void 0 : _[0]) == null ? void 0 : F.responseKey) === "response-body-badformat-scan" ? "No" : "Yes"), /* @__PURE__ */ e.jsxs(Mn, { children: [
    /* @__PURE__ */ e.jsxs(Ln, { collapsed: a, onClick: () => p(!a), children: [
      /* @__PURE__ */ e.jsx("div", { children: a ? /* @__PURE__ */ e.jsx(He, {}) : /* @__PURE__ */ e.jsx(Me, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(Bn, { children: (U = t.test) == null ? void 0 : U.description }),
        /* @__PURE__ */ e.jsxs(_n, { children: [
          v ? /* @__PURE__ */ e.jsxs(ie, { children: [
            /* @__PURE__ */ e.jsx(Q, {}),
            " Failed",
            t.outcome.criticality > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              "/",
              /* @__PURE__ */ e.jsxs("span", { style: { fontWeight: Yn[l.criticality] }, children: [
                " ",
                Un[l.criticality]
              ] })
            ] })
          ] }) : /* @__PURE__ */ e.jsxs(ie, { children: [
            /* @__PURE__ */ e.jsx(W, {}),
            " Passed"
          ] }),
          v && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(ie, { children: g ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(W, {}),
              " Response code: Expected"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(Q, {}),
              " Response code: Unexpected"
            ] }) }),
            /* @__PURE__ */ e.jsx(ie, { children: m ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(W, {}),
              " Conforms to Contract: Yes"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(Q, {}),
              " Conforms to Contract: No"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    !a && /* @__PURE__ */ e.jsxs(Fn, { children: [
      /* @__PURE__ */ e.jsxs(N, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "HTTP code received" }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          (C = t.response) == null ? void 0 : C.httpStatusCode,
          " (Expected:",
          " ",
          (Y = ($ = t.test) == null ? void 0 : $.httpStatusExpected) == null ? void 0 : Y.join(", "),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(N, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Response code found in API Contract" }),
        /* @__PURE__ */ e.jsx("div", { children: b })
      ] }),
      /* @__PURE__ */ e.jsxs(N, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Content-Type found in API Contract" }),
        /* @__PURE__ */ e.jsx("div", { children: y })
      ] }),
      /* @__PURE__ */ e.jsxs(N, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Response matches API Contract" }),
        /* @__PURE__ */ e.jsx("div", { children: j })
      ] }),
      ((A = (V = l == null ? void 0 : l.apiResponseAnalysis) == null ? void 0 : V[0]) == null ? void 0 : A.responseDescription) && /* @__PURE__ */ e.jsxs(N, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Response analysis" }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          " ",
          (O = (K = l == null ? void 0 : l.apiResponseAnalysis) == null ? void 0 : K[0]) == null ? void 0 : O.responseDescription
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(N, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "JSON Pointer" }),
        /* @__PURE__ */ e.jsx("div", { children: (X = t.test) != null && X.jsonPointer ? /* @__PURE__ */ e.jsx(
          "a",
          {
            href: "#",
            onClick: (ne) => {
              var ve;
              ne.preventDefault(), ne.stopPropagation(), i(
                ge(((ve = t.test) == null ? void 0 : ve.jsonPointer) + "")
                // FIXME support indexed reports
              );
            },
            children: (Z = t.test) == null ? void 0 : Z.jsonPointer
          }
        ) : "N/A" })
      ] }),
      ((ee = t.request) == null ? void 0 : ee.curl) && /* @__PURE__ */ e.jsxs(N, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Request" }),
        /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(pe, { waiting: o, curl: t.request.curl, id: c }) })
      ] }),
      r === void 0 && (n !== void 0 || ((se = t.response) == null ? void 0 : se.rawPayload) !== void 0) && /* @__PURE__ */ e.jsxs(N, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Response" }),
        /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
          ae,
          {
            accented: !0,
            response: n || le(oe.Buffer.from((te = t.response) == null ? void 0 : te.rawPayload, "base64"))
          }
        ) })
      ] }),
      r && /* @__PURE__ */ e.jsxs(N, { children: [
        /* @__PURE__ */ e.jsx("div", { children: "Error" }),
        /* @__PURE__ */ e.jsx("div", { children: r == null ? void 0 : r.message })
      ] })
    ] })
  ] });
}
const Mn = u.div`
  margin: 8px;
  border: 1px solid var(${h.border});
`, Ln = u.div`
  display: flex;
  cursor: pointer;
  padding: 10px 10px 10px 0px;
  background-color: var(${h.computedOne});
  & > div:first-child {
    padding-left: 4px;
    padding-right: 8px;
    > svg {
      fill: var(${h.foreground});
    }
  }
  border-left: 5px solid transparent;
  ${({ collapsed: s }) => !s && `border-bottom: 1px solid var(${h.border});
    border-left: 5px solid var(${h.badgeBackground});`}
`, Bn = u.div`
  font-weight: 600;
`, _n = u.div`
  margin-top: 8px;
  display: flex;
  font-size: 90%;
  align-items: center;
  gap: 16px;
`, ie = u.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  & > svg {
    margin-right: 4px;
    fill: var(${h.foreground});
  }
`, Fn = u.div`
  background-color: var(${h.computedOne});
`, N = u.div`
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
`, Un = {
  0: "None",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Critical"
}, Yn = {
  0: 500,
  1: 500,
  2: 500,
  3: 700,
  4: 700
};
function Vn({
  operation: s,
  issues: t,
  responses: n,
  errors: r,
  waitings: c,
  grouped: o
}) {
  return t.length === 0 ? /* @__PURE__ */ e.jsx(Ee, { children: /* @__PURE__ */ e.jsx(Kn, { children: "No test results available" }) }) : /* @__PURE__ */ e.jsxs(Ee, { children: [
    /* @__PURE__ */ e.jsx(ns, {}),
    Object.keys(o).map((i) => /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx(zn, { children: Wn[i] ?? "Unknown test type" }),
      o[i].map((a, p) => {
        const x = `${i}-${p}`;
        return /* @__PURE__ */ e.jsx(
          Hn,
          {
            operation: s,
            issue: a,
            httpResponse: n[x],
            error: r[x],
            waiting: c[x],
            id: x
          },
          x
        );
      })
    ] }, i))
  ] });
}
const Ee = u.div`
  margin-top: 8px;
`, Kn = u.div`
  margin: 8px;
  padding: 4px;
  border: 1px solid var(${h.border});
`, zn = u.div`
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
`, Wn = {
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
function Jn() {
  var g, m, v;
  const { scanReport: s, operationId: t, responses: n, errors: r, waitings: c, tab: o, issues: i, grouped: a } = E((y) => y.scan), p = q(), x = (y) => {
    p(B(y));
  };
  if (s === void 0)
    return /* @__PURE__ */ e.jsx(qe, { children: /* @__PURE__ */ e.jsx(Gn, { children: "Report is not yet available" }) });
  const d = (m = (g = s.operations) == null ? void 0 : g[t].scenarios) == null ? void 0 : m[0], l = (v = s.operations) == null ? void 0 : v[t];
  return /* @__PURE__ */ e.jsx(qe, { children: /* @__PURE__ */ e.jsxs(Ie, { value: o, onValueChange: x, children: [
    /* @__PURE__ */ e.jsxs(De, { children: [
      /* @__PURE__ */ e.jsx(J, { value: "summary", children: "Summary" }),
      /* @__PURE__ */ e.jsx(J, { value: "tests", children: "Tests" }),
      /* @__PURE__ */ e.jsx(J, { value: "logs", children: "Logs" })
    ] }),
    /* @__PURE__ */ e.jsxs(G, { value: "summary", children: [
      /* @__PURE__ */ e.jsx(
        Nn,
        {
          global: s.summary,
          operation: l == null ? void 0 : l.summary
        }
      ),
      d && /* @__PURE__ */ e.jsx(
        On,
        {
          operation: l,
          issue: d,
          responses: n,
          errors: r,
          waitings: c
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(G, { value: "tests", children: /* @__PURE__ */ e.jsx(
      Vn,
      {
        operation: l,
        issues: i,
        grouped: a,
        responses: n,
        errors: r,
        waitings: c
      }
    ) }),
    /* @__PURE__ */ e.jsx(G, { value: "logs", children: /* @__PURE__ */ e.jsx(Xe, {}) })
  ] }) });
}
const qe = u.div``, Gn = u.div`
  margin: 1em;
  padding: 10px;
`;
function Qn() {
  const s = q(), {
    path: t,
    method: n,
    operationId: r,
    oas: c,
    rawOas: o,
    defaultValues: i,
    scanConfigRaw: a,
    scanReport: p,
    waiting: x,
    error: d,
    isNewScanConfig: l
  } = E((C) => C.scan), g = E((C) => C.prefs), {
    docker: { replaceLocalhost: m },
    scanRuntime: v,
    platform: y
  } = E((C) => C.config.data), j = Zn(c, g.scanServer, i.server), b = {
    ...i,
    server: j,
    security: Xn(i.security, g.security)
  }, S = async (C) => {
    const $ = As(C), [Y, V] = l ? ot(
      a,
      r,
      v,
      m,
      y,
      $
    ) : tt(
      a,
      t,
      n,
      v,
      m,
      y,
      $
    );
    s(Oe($.server));
    const A = $.security[$.securityIndex];
    if (A)
      for (const [K, O] of Object.entries(A))
        typeof O == "string" && O.startsWith("{{") && O.endsWith("}}") && s(Te({ scheme: K, secret: O }));
    s(bt()), s(
      Ve({
        defaultValues: $,
        scanConfigRaw: Y,
        env: V,
        rawOas: o
      })
    );
  }, [w, R] = L.useState(!1);
  L.useEffect(() => {
    R(p !== void 0);
  }, [p]);
  const P = Ks({
    reValidateMode: "onChange",
    values: Ps(b)
  }), { handleSubmit: _, formState: F } = P, U = Object.keys(F.errors || {}).length > 0;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(zs, { ...P, children: /* @__PURE__ */ e.jsxs(
      Os,
      {
        collapsed: w,
        title: "Scan Configuration",
        onExpand: () => R(!1),
        children: [
          /* @__PURE__ */ e.jsx(
            Ts,
            {
              method: n,
              path: t,
              servers: Ne(c),
              onSubmit: _(S),
              buttonText: "Scan",
              submitDisabled: U,
              waiting: x
            }
          ),
          /* @__PURE__ */ e.jsx(Ns, { oas: c, path: t, method: n })
        ]
      }
    ) }),
    p && !l && /* @__PURE__ */ e.jsx(bn, {}),
    p && l && /* @__PURE__ */ e.jsx(Jn, {}),
    /* @__PURE__ */ e.jsx(wn, {}),
    (x || d) && /* @__PURE__ */ e.jsx(En, {})
  ] });
}
function Xn(s, t) {
  const n = [];
  for (const r of s) {
    const c = {};
    for (const [o, i] of Object.entries(r))
      t[o] && typeof i == "string" ? c[o] = t[o] : c[o] = i;
    n.push(c);
  }
  return n;
}
function Zn(s, t, n) {
  const r = Ne(s), c = r.some((i) => i === t);
  if (t !== void 0 && t !== "" && c)
    return t;
  const o = r.some((i) => i === t);
  return n !== void 0 && n !== "" && o ? n : r.length > 0 ? r[0] : "";
}
function er() {
  const s = q(), { error: t } = E((n) => n.scan);
  return /* @__PURE__ */ e.jsxs(sr, { children: [
    t && /* @__PURE__ */ e.jsxs(tr, { children: [
      /* @__PURE__ */ e.jsx(et, {}),
      /* @__PURE__ */ e.jsx("div", { children: t.message }),
      t.code === "audit-error" && /* @__PURE__ */ e.jsx(
        nr,
        {
          onClick: (n) => {
            s(We()), n.preventDefault(), n.stopPropagation();
          },
          children: "View report"
        }
      )
    ] }),
    !t && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(rr, {}),
      /* @__PURE__ */ e.jsx(ir, {})
    ] })
  ] });
}
const sr = u.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`, tr = u.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border: 1px solid var(${h.border});
  height: 58px;
  color: var(${h.errorForeground});
  background-color: var(${h.errorBackground});
  font-size: 14px;
  gap: 8px;
  > svg {
    fill: var(${h.errorForeground});
    width: 20px;
    height: 20px;
  }
  > div {
    flex: 1;
  }
`, nr = u.button`
  cursor: pointer;
  background-color: var(${h.buttonBackground});
  color: var(${h.buttonForeground});
  border: none;
  padding: 6px 16px;
`, rs = ps`
  0% {
    background-color: var(${h.computedOne});
  }
  100% {
    background-color: var(${h.computedTwo});
  }
`, rr = u.div`
  border: 1px solid var(${h.border});
  height: 2.1rem;
  animation: ${rs} 1s linear infinite alternate;
`, ir = u.div`
  border: 1px solid var(${h.border});
  height: 15rem;
  animation: ${rs} 1s linear infinite alternate;
`, ke = [
  {
    id: "start-scan",
    title: "Scan is starting",
    element: /* @__PURE__ */ e.jsx(er, {}),
    when: Ue
  },
  {
    id: "scan",
    title: "Scan",
    element: /* @__PURE__ */ e.jsx(Qn, {}),
    when: Ye
  }
], ar = {
  changeTheme: ms,
  startScan: Ue,
  scanOperation: Ye,
  showGeneralError: ut,
  showHttpError: ft,
  showHttpResponse: xt,
  showScanReport: ht,
  loadEnv: _s,
  loadPrefs: Is,
  loadConfig: Ys,
  showLogMessage: jt
};
function or() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(gs, {}),
    /* @__PURE__ */ e.jsx(bs, {})
  ] });
}
function cr(s, t) {
  const n = Ct($t(s, ke), t);
  hs(document.getElementById("root")).render(
    /* @__PURE__ */ e.jsx(us.StrictMode, { children: /* @__PURE__ */ e.jsx(fs, { store: n, children: /* @__PURE__ */ e.jsx(js.Provider, { value: ke, children: /* @__PURE__ */ e.jsx(or, {}) }) }) })
  ), window.addEventListener("message", xs(n, ar));
}
window.renderWebView = cr;
