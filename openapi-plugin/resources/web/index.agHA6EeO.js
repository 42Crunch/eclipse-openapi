var Qb = Object.defineProperty;
var fp = (t) => {
  throw TypeError(t);
};
var Zb = (t, e, r) => e in t ? Qb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var x = (t, e, r) => Zb(t, typeof e != "symbol" ? e + "" : e, r), pp = (t, e, r) => e.has(t) || fp("Cannot " + r);
var lc = (t, e, r) => (pp(t, e, "read from private field"), r ? r.call(t) : e.get(t)), hp = (t, e, r) => e.has(t) ? fp("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), uc = (t, e, r, s) => (pp(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r);
import { q as Go, Q as ir } from "./TriangleExclamation.pAuQxBo5.js";
const Jd = "application/json, application/yaml", ji = "https://swagger.io", Hd = Object.freeze({
  url: "/"
}), qd = 3e3, {
  fetch: ex,
  Response: tx,
  Headers: rx,
  Request: sx,
  FormData: nx,
  File: ix,
  Blob: ox
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = ex);
typeof globalThis.Headers > "u" && (globalThis.Headers = rx);
typeof globalThis.Request > "u" && (globalThis.Request = sx);
typeof globalThis.Response > "u" && (globalThis.Response = tx);
typeof globalThis.FormData > "u" && (globalThis.FormData = nx);
typeof globalThis.File > "u" && (globalThis.File = ix);
typeof globalThis.Blob > "u" && (globalThis.Blob = ox);
function $u(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function zd(t, e) {
  return Array.isArray(t) && t.some((r) => $u(r, e));
}
class tl extends File {
  constructor(e, r = "", s = {}) {
    super([e], r, s), this.data = e;
  }
  valueOf() {
    return this.data;
  }
  toString() {
    return this.valueOf();
  }
}
const ax = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, cx = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function Gd(t, e = "reserved") {
  return [...t].map((r) => {
    if (cx(r) || ax(r) && e === "unsafe")
      return r;
    const s = new TextEncoder();
    return Array.from(s.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function Au(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? lx(t) : typeof e == "object" ? ux(t) : fx(t);
}
function Ne(t, e = !1) {
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && typeof t == "string" && t.length > 0 ? Gd(t, e) : t ?? "";
}
function lx({
  key: t,
  value: e,
  style: r,
  explode: s,
  escape: n
}) {
  if (r === "simple")
    return e.map((i) => Ne(i, n)).join(",");
  if (r === "label")
    return `.${e.map((i) => Ne(i, n)).join(".")}`;
  if (r === "matrix")
    return e.map((i) => Ne(i, n)).reduce((i, o) => !i || s ? `${i || ""};${t}=${o}` : `${i},${o}`, "");
  if (r === "form") {
    const i = s ? `&${t}=` : ",";
    return e.map((o) => Ne(o, n)).join(i);
  }
  if (r === "spaceDelimited") {
    const i = s ? `${t}=` : "";
    return e.map((o) => Ne(o, n)).join(` ${i}`);
  }
  if (r === "pipeDelimited") {
    const i = s ? `${t}=` : "";
    return e.map((o) => Ne(o, n)).join(`|${i}`);
  }
}
function ux({
  key: t,
  value: e,
  style: r,
  explode: s,
  escape: n
}) {
  const i = Object.keys(e);
  if (r === "simple")
    return i.reduce((o, a) => {
      const c = Ne(e[a], n), l = s ? "=" : ",";
      return `${o ? `${o},` : ""}${a}${l}${c}`;
    }, "");
  if (r === "label")
    return i.reduce((o, a) => {
      const c = Ne(e[a], n), l = s ? "=" : ".";
      return `${o ? `${o}.` : "."}${a}${l}${c}`;
    }, "");
  if (r === "matrix" && s)
    return i.reduce((o, a) => {
      const c = Ne(e[a], n);
      return `${o ? `${o};` : ";"}${a}=${c}`;
    }, "");
  if (r === "matrix")
    return i.reduce((o, a) => {
      const c = Ne(e[a], n);
      return `${o ? `${o},` : `;${t}=`}${a},${c}`;
    }, "");
  if (r === "form")
    return i.reduce((o, a) => {
      const c = Ne(e[a], n);
      return `${o ? `${o}${s ? "&" : ","}` : ""}${a}${s ? "=" : ","}${c}`;
    }, "");
}
function fx({
  key: t,
  value: e,
  style: r,
  escape: s
}) {
  if (r === "simple")
    return Ne(e, s);
  if (r === "label")
    return `.${Ne(e, s)}`;
  if (r === "matrix")
    return `;${t}=${Ne(e, s)}`;
  if (r === "form" || r === "deepObject")
    return Ne(e, s);
}
const px = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, hx = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function Kd(t, e, r = !1) {
  const {
    collectionFormat: s,
    allowEmptyValue: n,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (p) => p.toString() : (p) => encodeURIComponent(p), l = c(t);
  if (typeof a > "u" && n)
    return [[l, ""]];
  if ($u(a) || zd(a))
    return [[l, a]];
  if (i)
    return dp(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((p) => p !== "undefined")) {
      const {
        style: p,
        explode: f,
        allowReserved: d
      } = o;
      return dp(t, a, r, {
        style: p,
        explode: f,
        allowReserved: d
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const d = typeof a == "string" ? a : JSON.stringify(a), u = c(d), m = new tl(u, "blob", {
          type: o.contentType
        });
        return [[l, m]];
      }
      const p = c(String(a)), f = new tl(p, "blob", {
        type: o.contentType
      });
      return [[l, f]];
    }
    return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) && a.every((p) => typeof p != "object") ? [[l, a.map(c).join(",")]] : [[l, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) ? s === "multi" ? [[l, a.map(c)]] : [[l, a.map(c).join(hx[s || "csv"])]] : [[l, ""]];
}
function dp(t, e, r, s) {
  const n = s.style || "form", i = typeof s.explode > "u" ? n === "form" : s.explode, o = r ? !1 : s && s.allowReserved ? "unsafe" : "reserved", a = (l) => Ne(l, o), c = r ? (l) => l : (l) => a(l);
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(px[n])]] : n === "deepObject" ? Object.keys(e).map((l) => [c(`${t}[${l}]`), a(e[l])]) : i ? Object.keys(e).map((l) => [c(l), a(e[l])]) : [[c(t), Object.keys(e).map((l) => [`${c(l)},${a(e[l])}`]).join(",")]];
}
function dx(t) {
  return Object.entries(t).reduce((e, [r, s]) => {
    for (const [n, i] of Kd(r, s, !0))
      if (Array.isArray(i))
        for (const o of i)
          if (ArrayBuffer.isView(o)) {
            const a = new Blob([o]);
            e.append(n, a);
          } else
            e.append(n, o);
      else if (ArrayBuffer.isView(i)) {
        const o = new Blob([i]);
        e.append(n, o);
      } else
        e.append(n, i);
    return e;
  }, new FormData());
}
const mx = (t, {
  encode: e = !0
} = {}) => {
  const r = (i, o, a) => (Array.isArray(a) ? a.reduce((c, l) => r(i, o, l), i) : a instanceof Date ? i.append(o, a.toISOString()) : typeof a == "object" ? Object.entries(a).reduce((c, [l, p]) => r(i, `${o}[${l}]`, p), i) : i.append(o, a), i), s = Object.entries(t).reduce((i, [o, a]) => r(i, o, a), new URLSearchParams()), n = String(s);
  return e ? n : decodeURIComponent(n);
};
function mp(t) {
  const e = Object.keys(t).reduce((r, s) => {
    for (const [n, i] of Kd(s, t[s]))
      i instanceof tl ? r[n] = i.valueOf() : r[n] = i;
    return r;
  }, {});
  return mx(e, {
    encode: !1
  });
}
function ju(t = {}) {
  const {
    url: e = "",
    query: r,
    form: s
  } = t, n = (...i) => {
    const o = i.filter((a) => a).join("&");
    return o ? `?${o}` : "";
  };
  if (s) {
    const i = Object.keys(s).some((a) => {
      const {
        value: c
      } = s[a];
      return $u(c) || zd(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = dx(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = mp(s);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const l = new URLSearchParams(o);
      Object.keys(r).forEach((f) => l.delete(f)), a = String(l);
    }
    const c = n(a, mp(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Wd(t) {
  return typeof t > "u" || t === null;
}
function vx(t) {
  return typeof t == "object" && t !== null;
}
function yx(t) {
  return Array.isArray(t) ? t : Wd(t) ? [] : [t];
}
function gx(t, e) {
  var r, s, n, i;
  if (e)
    for (i = Object.keys(e), r = 0, s = i.length; r < s; r += 1)
      n = i[r], t[n] = e[n];
  return t;
}
function bx(t, e) {
  var r = "", s;
  for (s = 0; s < e; s += 1)
    r += t;
  return r;
}
function xx(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var Sx = Wd, wx = vx, Ox = yx, Ex = bx, $x = xx, Ax = gx, Te = {
  isNothing: Sx,
  isObject: wx,
  toArray: Ox,
  repeat: Ex,
  isNegativeZero: $x,
  extend: Ax
};
function Yd(t, e) {
  var r = "", s = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), s + " " + r) : s;
}
function Ws(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Yd(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Ws.prototype = Object.create(Error.prototype);
Ws.prototype.constructor = Ws;
Ws.prototype.toString = function(e) {
  return this.name + ": " + Yd(this, e);
};
var He = Ws;
function fc(t, e, r, s, n) {
  var i = "", o = "", a = Math.floor(n / 2) - 1;
  return s - e > a && (i = " ... ", e = s - a + i.length), r - s > a && (o = " ...", r = s + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: s - e + i.length
    // relative position
  };
}
function pc(t, e) {
  return Te.repeat(" ", e - t.length) + t;
}
function jx(t, e) {
  if (e = Object.create(e || null), !t.buffer) return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, s = [0], n = [], i, o = -1; i = r.exec(t.buffer); )
    n.push(i.index), s.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = s.length - 2);
  o < 0 && (o = s.length - 1);
  var a = "", c, l, p = Math.min(t.line + e.linesAfter, n.length).toString().length, f = e.maxLength - (e.indent + p + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    l = fc(
      t.buffer,
      s[o - c],
      n[o - c],
      t.position - (s[o] - s[o - c]),
      f
    ), a = Te.repeat(" ", e.indent) + pc((t.line - c + 1).toString(), p) + " | " + l.str + `
` + a;
  for (l = fc(t.buffer, s[o], n[o], t.position, f), a += Te.repeat(" ", e.indent) + pc((t.line + 1).toString(), p) + " | " + l.str + `
`, a += Te.repeat("-", e.indent + p + 3 + l.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= n.length); c++)
    l = fc(
      t.buffer,
      s[o + c],
      n[o + c],
      t.position - (s[o] - s[o + c]),
      f
    ), a += Te.repeat(" ", e.indent) + pc((t.line + c + 1).toString(), p) + " | " + l.str + `
`;
  return a.replace(/\n$/, "");
}
var Px = jx, Tx = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], _x = [
  "scalar",
  "sequence",
  "mapping"
];
function Cx(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(s) {
      e[String(s)] = r;
    });
  }), e;
}
function Rx(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (Tx.indexOf(r) === -1)
      throw new He('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = Cx(e.styleAliases || null), _x.indexOf(this.kind) === -1)
    throw new He('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var De = Rx;
function vp(t, e) {
  var r = [];
  return t[e].forEach(function(s) {
    var n = r.length;
    r.forEach(function(i, o) {
      i.tag === s.tag && i.kind === s.kind && i.multi === s.multi && (n = o);
    }), r[n] = s;
  }), r;
}
function Ix() {
  var t = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, r;
  function s(n) {
    n.multi ? (t.multi[n.kind].push(n), t.multi.fallback.push(n)) : t[n.kind][n.tag] = t.fallback[n.tag] = n;
  }
  for (e = 0, r = arguments.length; e < r; e += 1)
    arguments[e].forEach(s);
  return t;
}
function rl(t) {
  return this.extend(t);
}
rl.prototype.extend = function(e) {
  var r = [], s = [];
  if (e instanceof De)
    s.push(e);
  else if (Array.isArray(e))
    s = s.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (s = s.concat(e.explicit));
  else
    throw new He("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof De))
      throw new He("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new He("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new He("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), s.forEach(function(i) {
    if (!(i instanceof De))
      throw new He("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(rl.prototype);
  return n.implicit = (this.implicit || []).concat(r), n.explicit = (this.explicit || []).concat(s), n.compiledImplicit = vp(n, "implicit"), n.compiledExplicit = vp(n, "explicit"), n.compiledTypeMap = Ix(n.compiledImplicit, n.compiledExplicit), n;
};
var Xd = rl, Qd = new De("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), Zd = new De("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), em = new De("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), tm = new Xd({
  explicit: [
    Qd,
    Zd,
    em
  ]
});
function Fx(t) {
  if (t === null) return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function Mx() {
  return null;
}
function kx(t) {
  return t === null;
}
var rm = new De("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Fx,
  construct: Mx,
  predicate: kx,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function Nx(t) {
  if (t === null) return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function Dx(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function Lx(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var sm = new De("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Nx,
  construct: Dx,
  predicate: Lx,
  represent: {
    lowercase: function(t) {
      return t ? "true" : "false";
    },
    uppercase: function(t) {
      return t ? "TRUE" : "FALSE";
    },
    camelcase: function(t) {
      return t ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function Vx(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function Bx(t) {
  return 48 <= t && t <= 55;
}
function Ux(t) {
  return 48 <= t && t <= 57;
}
function Jx(t) {
  if (t === null) return !1;
  var e = t.length, r = 0, s = !1, n;
  if (!e) return !1;
  if (n = t[r], (n === "-" || n === "+") && (n = t[++r]), n === "0") {
    if (r + 1 === e) return !0;
    if (n = t[++r], n === "b") {
      for (r++; r < e; r++)
        if (n = t[r], n !== "_") {
          if (n !== "0" && n !== "1") return !1;
          s = !0;
        }
      return s && n !== "_";
    }
    if (n === "x") {
      for (r++; r < e; r++)
        if (n = t[r], n !== "_") {
          if (!Vx(t.charCodeAt(r))) return !1;
          s = !0;
        }
      return s && n !== "_";
    }
    if (n === "o") {
      for (r++; r < e; r++)
        if (n = t[r], n !== "_") {
          if (!Bx(t.charCodeAt(r))) return !1;
          s = !0;
        }
      return s && n !== "_";
    }
  }
  if (n === "_") return !1;
  for (; r < e; r++)
    if (n = t[r], n !== "_") {
      if (!Ux(t.charCodeAt(r)))
        return !1;
      s = !0;
    }
  return !(!s || n === "_");
}
function Hx(t) {
  var e = t, r = 1, s;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), s = e[0], (s === "-" || s === "+") && (s === "-" && (r = -1), e = e.slice(1), s = e[0]), e === "0") return 0;
  if (s === "0") {
    if (e[1] === "b") return r * parseInt(e.slice(2), 2);
    if (e[1] === "x") return r * parseInt(e.slice(2), 16);
    if (e[1] === "o") return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function qx(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Te.isNegativeZero(t);
}
var nm = new De("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Jx,
  construct: Hx,
  predicate: qx,
  represent: {
    binary: function(t) {
      return t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1);
    },
    octal: function(t) {
      return t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1);
    },
    decimal: function(t) {
      return t.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(t) {
      return t >= 0 ? "0x" + t.toString(16).toUpperCase() : "-0x" + t.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), zx = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Gx(t) {
  return !(t === null || !zx.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function Kx(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var Wx = /^[-+]?[0-9]+e/;
function Yx(t, e) {
  var r;
  if (isNaN(t))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Te.isNegativeZero(t))
    return "-0.0";
  return r = t.toString(10), Wx.test(r) ? r.replace("e", ".e") : r;
}
function Xx(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Te.isNegativeZero(t));
}
var im = new De("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Gx,
  construct: Kx,
  predicate: Xx,
  represent: Yx,
  defaultStyle: "lowercase"
}), om = tm.extend({
  implicit: [
    rm,
    sm,
    nm,
    im
  ]
}), am = om, cm = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), lm = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function Qx(t) {
  return t === null ? !1 : cm.exec(t) !== null || lm.exec(t) !== null;
}
function Zx(t) {
  var e, r, s, n, i, o, a, c = 0, l = null, p, f, d;
  if (e = cm.exec(t), e === null && (e = lm.exec(t)), e === null) throw new Error("Date resolve error");
  if (r = +e[1], s = +e[2] - 1, n = +e[3], !e[4])
    return new Date(Date.UTC(r, s, n));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (p = +e[10], f = +(e[11] || 0), l = (p * 60 + f) * 6e4, e[9] === "-" && (l = -l)), d = new Date(Date.UTC(r, s, n, i, o, a, c)), l && d.setTime(d.getTime() - l), d;
}
function eS(t) {
  return t.toISOString();
}
var um = new De("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Qx,
  construct: Zx,
  instanceOf: Date,
  represent: eS
});
function tS(t) {
  return t === "<<" || t === null;
}
var fm = new De("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: tS
}), Pu = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function rS(t) {
  if (t === null) return !1;
  var e, r, s = 0, n = t.length, i = Pu;
  for (r = 0; r < n; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0) return !1;
      s += 6;
    }
  return s % 8 === 0;
}
function sS(t) {
  var e, r, s = t.replace(/[\r\n=]/g, ""), n = s.length, i = Pu, o = 0, a = [];
  for (e = 0; e < n; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(s.charAt(e));
  return r = n % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function nS(t) {
  var e = "", r = 0, s, n, i = t.length, o = Pu;
  for (s = 0; s < i; s++)
    s % 3 === 0 && s && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[s];
  return n = i % 3, n === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : n === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : n === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function iS(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var pm = new De("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: rS,
  construct: sS,
  predicate: iS,
  represent: nS
}), oS = Object.prototype.hasOwnProperty, aS = Object.prototype.toString;
function cS(t) {
  if (t === null) return !0;
  var e = [], r, s, n, i, o, a = t;
  for (r = 0, s = a.length; r < s; r += 1) {
    if (n = a[r], o = !1, aS.call(n) !== "[object Object]") return !1;
    for (i in n)
      if (oS.call(n, i))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (e.indexOf(i) === -1) e.push(i);
    else return !1;
  }
  return !0;
}
function lS(t) {
  return t !== null ? t : [];
}
var hm = new De("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: cS,
  construct: lS
}), uS = Object.prototype.toString;
function fS(t) {
  if (t === null) return !0;
  var e, r, s, n, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (s = o[e], uS.call(s) !== "[object Object]" || (n = Object.keys(s), n.length !== 1)) return !1;
    i[e] = [n[0], s[n[0]]];
  }
  return !0;
}
function pS(t) {
  if (t === null) return [];
  var e, r, s, n, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    s = o[e], n = Object.keys(s), i[e] = [n[0], s[n[0]]];
  return i;
}
var dm = new De("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: fS,
  construct: pS
}), hS = Object.prototype.hasOwnProperty;
function dS(t) {
  if (t === null) return !0;
  var e, r = t;
  for (e in r)
    if (hS.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function mS(t) {
  return t !== null ? t : {};
}
var mm = new De("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: dS,
  construct: mS
}), Tu = am.extend({
  implicit: [
    um,
    fm
  ],
  explicit: [
    pm,
    hm,
    dm,
    mm
  ]
}), ar = Object.prototype.hasOwnProperty, Pi = 1, vm = 2, ym = 3, Ti = 4, hc = 1, vS = 2, yp = 3, yS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, gS = /[\x85\u2028\u2029]/, bS = /[,\[\]\{\}]/, gm = /^(?:!|!!|![a-z\-]+!)$/i, bm = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function gp(t) {
  return Object.prototype.toString.call(t);
}
function Ot(t) {
  return t === 10 || t === 13;
}
function Er(t) {
  return t === 9 || t === 32;
}
function Ke(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Zr(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function xS(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function SS(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function wS(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function bp(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function OS(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var xm = new Array(256), Sm = new Array(256);
for (var Gr = 0; Gr < 256; Gr++)
  xm[Gr] = bp(Gr) ? 1 : 0, Sm[Gr] = bp(Gr);
function ES(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || Tu, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function wm(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = Px(r), new He(e, r);
}
function V(t, e) {
  throw wm(t, e);
}
function _i(t, e) {
  t.onWarning && t.onWarning.call(null, wm(t, e));
}
var xp = {
  YAML: function(e, r, s) {
    var n, i, o;
    e.version !== null && V(e, "duplication of %YAML directive"), s.length !== 1 && V(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(s[0]), n === null && V(e, "ill-formed argument of the YAML directive"), i = parseInt(n[1], 10), o = parseInt(n[2], 10), i !== 1 && V(e, "unacceptable YAML version of the document"), e.version = s[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && _i(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, s) {
    var n, i;
    s.length !== 2 && V(e, "TAG directive accepts exactly two arguments"), n = s[0], i = s[1], gm.test(n) || V(e, "ill-formed tag handle (first argument) of the TAG directive"), ar.call(e.tagMap, n) && V(e, 'there is a previously declared suffix for "' + n + '" tag handle'), bm.test(i) || V(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      V(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[n] = i;
  }
};
function or(t, e, r, s) {
  var n, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), s)
      for (n = 0, i = a.length; n < i; n += 1)
        o = a.charCodeAt(n), o === 9 || 32 <= o && o <= 1114111 || V(t, "expected valid JSON character");
    else yS.test(a) && V(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function Sp(t, e, r, s) {
  var n, i, o, a;
  for (Te.isObject(r) || V(t, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(r), o = 0, a = n.length; o < a; o += 1)
    i = n[o], ar.call(e, i) || (e[i] = r[i], s[i] = !0);
}
function es(t, e, r, s, n, i, o, a, c) {
  var l, p;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), l = 0, p = n.length; l < p; l += 1)
      Array.isArray(n[l]) && V(t, "nested arrays are not supported inside keys"), typeof n == "object" && gp(n[l]) === "[object Object]" && (n[l] = "[object Object]");
  if (typeof n == "object" && gp(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), s === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (l = 0, p = i.length; l < p; l += 1)
        Sp(t, e, i[l], r);
    else
      Sp(t, e, i, r);
  else
    !t.json && !ar.call(r, n) && ar.call(e, n) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, V(t, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[n] = i, delete r[n];
  return e;
}
function _u(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : V(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function Ee(t, e, r) {
  for (var s = 0, n = t.input.charCodeAt(t.position); n !== 0; ) {
    for (; Er(n); )
      n === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), n = t.input.charCodeAt(++t.position);
    if (e && n === 35)
      do
        n = t.input.charCodeAt(++t.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (Ot(n))
      for (_u(t), n = t.input.charCodeAt(t.position), s++, t.lineIndent = 0; n === 32; )
        t.lineIndent++, n = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && s !== 0 && t.lineIndent < r && _i(t, "deficient indentation"), s;
}
function Ko(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || Ke(r)));
}
function Cu(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Te.repeat(`
`, e - 1));
}
function $S(t, e, r) {
  var s, n, i, o, a, c, l, p, f = t.kind, d = t.result, u;
  if (u = t.input.charCodeAt(t.position), Ke(u) || Zr(u) || u === 35 || u === 38 || u === 42 || u === 33 || u === 124 || u === 62 || u === 39 || u === 34 || u === 37 || u === 64 || u === 96 || (u === 63 || u === 45) && (n = t.input.charCodeAt(t.position + 1), Ke(n) || r && Zr(n)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; u !== 0; ) {
    if (u === 58) {
      if (n = t.input.charCodeAt(t.position + 1), Ke(n) || r && Zr(n))
        break;
    } else if (u === 35) {
      if (s = t.input.charCodeAt(t.position - 1), Ke(s))
        break;
    } else {
      if (t.position === t.lineStart && Ko(t) || r && Zr(u))
        break;
      if (Ot(u))
        if (c = t.line, l = t.lineStart, p = t.lineIndent, Ee(t, !1, -1), t.lineIndent >= e) {
          a = !0, u = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = l, t.lineIndent = p;
          break;
        }
    }
    a && (or(t, i, o, !1), Cu(t, t.line - c), i = o = t.position, a = !1), Er(u) || (o = t.position + 1), u = t.input.charCodeAt(++t.position);
  }
  return or(t, i, o, !1), t.result ? !0 : (t.kind = f, t.result = d, !1);
}
function AS(t, e) {
  var r, s, n;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, s = n = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (or(t, s, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        s = t.position, t.position++, n = t.position;
      else
        return !0;
    else Ot(r) ? (or(t, s, n, !0), Cu(t, Ee(t, !1, e)), s = n = t.position) : t.position === t.lineStart && Ko(t) ? V(t, "unexpected end of the document within a single quoted scalar") : (t.position++, n = t.position);
  V(t, "unexpected end of the stream within a single quoted scalar");
}
function jS(t, e) {
  var r, s, n, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = s = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return or(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (or(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), Ot(a))
        Ee(t, !1, e);
      else if (a < 256 && xm[a])
        t.result += Sm[a], t.position++;
      else if ((o = SS(a)) > 0) {
        for (n = o, i = 0; n > 0; n--)
          a = t.input.charCodeAt(++t.position), (o = xS(a)) >= 0 ? i = (i << 4) + o : V(t, "expected hexadecimal character");
        t.result += OS(i), t.position++;
      } else
        V(t, "unknown escape sequence");
      r = s = t.position;
    } else Ot(a) ? (or(t, r, s, !0), Cu(t, Ee(t, !1, e)), r = s = t.position) : t.position === t.lineStart && Ko(t) ? V(t, "unexpected end of the document within a double quoted scalar") : (t.position++, s = t.position);
  }
  V(t, "unexpected end of the stream within a double quoted scalar");
}
function PS(t, e) {
  var r = !0, s, n, i, o = t.tag, a, c = t.anchor, l, p, f, d, u, m = /* @__PURE__ */ Object.create(null), h, y, g, v;
  if (v = t.input.charCodeAt(t.position), v === 91)
    p = 93, u = !1, a = [];
  else if (v === 123)
    p = 125, u = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), v = t.input.charCodeAt(++t.position); v !== 0; ) {
    if (Ee(t, !0, e), v = t.input.charCodeAt(t.position), v === p)
      return t.position++, t.tag = o, t.anchor = c, t.kind = u ? "mapping" : "sequence", t.result = a, !0;
    r ? v === 44 && V(t, "expected the node content, but found ','") : V(t, "missed comma between flow collection entries"), y = h = g = null, f = d = !1, v === 63 && (l = t.input.charCodeAt(t.position + 1), Ke(l) && (f = d = !0, t.position++, Ee(t, !0, e))), s = t.line, n = t.lineStart, i = t.position, cs(t, e, Pi, !1, !0), y = t.tag, h = t.result, Ee(t, !0, e), v = t.input.charCodeAt(t.position), (d || t.line === s) && v === 58 && (f = !0, v = t.input.charCodeAt(++t.position), Ee(t, !0, e), cs(t, e, Pi, !1, !0), g = t.result), u ? es(t, a, m, y, h, g, s, n, i) : f ? a.push(es(t, null, m, y, h, g, s, n, i)) : a.push(h), Ee(t, !0, e), v = t.input.charCodeAt(t.position), v === 44 ? (r = !0, v = t.input.charCodeAt(++t.position)) : r = !1;
  }
  V(t, "unexpected end of the stream within a flow collection");
}
function TS(t, e) {
  var r, s, n = hc, i = !1, o = !1, a = e, c = 0, l = !1, p, f;
  if (f = t.input.charCodeAt(t.position), f === 124)
    s = !1;
  else if (f === 62)
    s = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; f !== 0; )
    if (f = t.input.charCodeAt(++t.position), f === 43 || f === 45)
      hc === n ? n = f === 43 ? yp : vS : V(t, "repeat of a chomping mode identifier");
    else if ((p = wS(f)) >= 0)
      p === 0 ? V(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? V(t, "repeat of an indentation width identifier") : (a = e + p - 1, o = !0);
    else
      break;
  if (Er(f)) {
    do
      f = t.input.charCodeAt(++t.position);
    while (Er(f));
    if (f === 35)
      do
        f = t.input.charCodeAt(++t.position);
      while (!Ot(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (_u(t), t.lineIndent = 0, f = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && f === 32; )
      t.lineIndent++, f = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), Ot(f)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      n === yp ? t.result += Te.repeat(`
`, i ? 1 + c : c) : n === hc && i && (t.result += `
`);
      break;
    }
    for (s ? Er(f) ? (l = !0, t.result += Te.repeat(`
`, i ? 1 + c : c)) : l ? (l = !1, t.result += Te.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += Te.repeat(`
`, c) : t.result += Te.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !Ot(f) && f !== 0; )
      f = t.input.charCodeAt(++t.position);
    or(t, r, t.position, !1);
  }
  return !0;
}
function wp(t, e) {
  var r, s = t.tag, n = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, V(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !Ke(o)))); ) {
    if (a = !0, t.position++, Ee(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, cs(t, e, ym, !1, !0), i.push(t.result), Ee(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      V(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = s, t.anchor = n, t.kind = "sequence", t.result = i, !0) : !1;
}
function _S(t, e, r) {
  var s, n, i, o, a, c, l = t.tag, p = t.anchor, f = {}, d = /* @__PURE__ */ Object.create(null), u = null, m = null, h = null, y = !1, g = !1, v;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = f), v = t.input.charCodeAt(t.position); v !== 0; ) {
    if (!y && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, V(t, "tab characters must not be used in indentation")), s = t.input.charCodeAt(t.position + 1), i = t.line, (v === 63 || v === 58) && Ke(s))
      v === 63 ? (y && (es(t, f, d, u, m, null, o, a, c), u = m = h = null), g = !0, y = !0, n = !0) : y ? (y = !1, n = !0) : V(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, v = s;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !cs(t, r, vm, !1, !0))
        break;
      if (t.line === i) {
        for (v = t.input.charCodeAt(t.position); Er(v); )
          v = t.input.charCodeAt(++t.position);
        if (v === 58)
          v = t.input.charCodeAt(++t.position), Ke(v) || V(t, "a whitespace character is expected after the key-value separator within a block mapping"), y && (es(t, f, d, u, m, null, o, a, c), u = m = h = null), g = !0, y = !1, n = !1, u = t.tag, m = t.result;
        else if (g)
          V(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = l, t.anchor = p, !0;
      } else if (g)
        V(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = l, t.anchor = p, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (y && (o = t.line, a = t.lineStart, c = t.position), cs(t, e, Ti, !0, n) && (y ? m = t.result : h = t.result), y || (es(t, f, d, u, m, h, o, a, c), u = m = h = null), Ee(t, !0, -1), v = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && v !== 0)
      V(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return y && es(t, f, d, u, m, null, o, a, c), g && (t.tag = l, t.anchor = p, t.kind = "mapping", t.result = f), g;
}
function CS(t) {
  var e, r = !1, s = !1, n, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33) return !1;
  if (t.tag !== null && V(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (s = !0, n = "!!", o = t.input.charCodeAt(++t.position)) : n = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : V(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Ke(o); )
      o === 33 && (s ? V(t, "tag suffix cannot contain exclamation marks") : (n = t.input.slice(e - 1, t.position + 1), gm.test(n) || V(t, "named tag handle cannot contain such characters"), s = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), bS.test(i) && V(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !bm.test(i) && V(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    V(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : ar.call(t.tagMap, n) ? t.tag = t.tagMap[n] + i : n === "!" ? t.tag = "!" + i : n === "!!" ? t.tag = "tag:yaml.org,2002:" + i : V(t, 'undeclared tag handle "' + n + '"'), !0;
}
function RS(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38) return !1;
  for (t.anchor !== null && V(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !Ke(r) && !Zr(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && V(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function IS(t) {
  var e, r, s;
  if (s = t.input.charCodeAt(t.position), s !== 42) return !1;
  for (s = t.input.charCodeAt(++t.position), e = t.position; s !== 0 && !Ke(s) && !Zr(s); )
    s = t.input.charCodeAt(++t.position);
  return t.position === e && V(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), ar.call(t.anchorMap, r) || V(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], Ee(t, !0, -1), !0;
}
function cs(t, e, r, s, n) {
  var i, o, a, c = 1, l = !1, p = !1, f, d, u, m, h, y;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = Ti === r || ym === r, s && Ee(t, !0, -1) && (l = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; CS(t) || RS(t); )
      Ee(t, !0, -1) ? (l = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = l || n), (c === 1 || Ti === r) && (Pi === r || vm === r ? h = e : h = e + 1, y = t.position - t.lineStart, c === 1 ? a && (wp(t, y) || _S(t, y, h)) || PS(t, h) ? p = !0 : (o && TS(t, h) || AS(t, h) || jS(t, h) ? p = !0 : IS(t) ? (p = !0, (t.tag !== null || t.anchor !== null) && V(t, "alias node should not have any properties")) : $S(t, h, Pi === r) && (p = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (p = a && wp(t, y))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && V(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), f = 0, d = t.implicitTypes.length; f < d; f += 1)
      if (m = t.implicitTypes[f], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (ar.call(t.typeMap[t.kind || "fallback"], t.tag))
      m = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (m = null, u = t.typeMap.multi[t.kind || "fallback"], f = 0, d = u.length; f < d; f += 1)
        if (t.tag.slice(0, u[f].tag.length) === u[f].tag) {
          m = u[f];
          break;
        }
    m || V(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && V(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : V(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || p;
}
function FS(t) {
  var e = t.position, r, s, n, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (Ee(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !Ke(o); )
      o = t.input.charCodeAt(++t.position);
    for (s = t.input.slice(r, t.position), n = [], s.length < 1 && V(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; Er(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !Ot(o));
        break;
      }
      if (Ot(o)) break;
      for (r = t.position; o !== 0 && !Ke(o); )
        o = t.input.charCodeAt(++t.position);
      n.push(t.input.slice(r, t.position));
    }
    o !== 0 && _u(t), ar.call(xp, s) ? xp[s](t, s, n) : _i(t, 'unknown document directive "' + s + '"');
  }
  if (Ee(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, Ee(t, !0, -1)) : i && V(t, "directives end mark is expected"), cs(t, t.lineIndent - 1, Ti, !1, !0), Ee(t, !0, -1), t.checkLineBreaks && gS.test(t.input.slice(e, t.position)) && _i(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && Ko(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, Ee(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    V(t, "end of the stream or a document separator is expected");
  else
    return;
}
function Om(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new ES(t, e), s = t.indexOf("\0");
  for (s !== -1 && (r.position = s, V(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    FS(r);
  return r.documents;
}
function MS(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var s = Om(t, r);
  if (typeof e != "function")
    return s;
  for (var n = 0, i = s.length; n < i; n += 1)
    e(s[n]);
}
function kS(t, e) {
  var r = Om(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new He("expected a single document in the stream, but found more");
  }
}
var NS = MS, DS = kS, Em = {
  loadAll: NS,
  load: DS
}, $m = Object.prototype.toString, Am = Object.prototype.hasOwnProperty, Ru = 65279, LS = 9, Ys = 10, VS = 13, BS = 32, US = 33, JS = 34, sl = 35, HS = 37, qS = 38, zS = 39, GS = 42, jm = 44, KS = 45, Ci = 58, WS = 61, YS = 62, XS = 63, QS = 64, Pm = 91, Tm = 93, ZS = 96, _m = 123, ew = 124, Cm = 125, Ve = {};
Ve[0] = "\\0";
Ve[7] = "\\a";
Ve[8] = "\\b";
Ve[9] = "\\t";
Ve[10] = "\\n";
Ve[11] = "\\v";
Ve[12] = "\\f";
Ve[13] = "\\r";
Ve[27] = "\\e";
Ve[34] = '\\"';
Ve[92] = "\\\\";
Ve[133] = "\\N";
Ve[160] = "\\_";
Ve[8232] = "\\L";
Ve[8233] = "\\P";
var tw = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], rw = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function sw(t, e) {
  var r, s, n, i, o, a, c;
  if (e === null) return {};
  for (r = {}, s = Object.keys(e), n = 0, i = s.length; n < i; n += 1)
    o = s[n], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && Am.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function nw(t) {
  var e, r, s;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", s = 2;
  else if (t <= 65535)
    r = "u", s = 4;
  else if (t <= 4294967295)
    r = "U", s = 8;
  else
    throw new He("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Te.repeat("0", s - e.length) + e;
}
var iw = 1, Xs = 2;
function ow(t) {
  this.schema = t.schema || Tu, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Te.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = sw(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? Xs : iw, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Op(t, e) {
  for (var r = Te.repeat(" ", e), s = 0, n = -1, i = "", o, a = t.length; s < a; )
    n = t.indexOf(`
`, s), n === -1 ? (o = t.slice(s), s = a) : (o = t.slice(s, n + 1), s = n + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function nl(t, e) {
  return `
` + Te.repeat(" ", t.indent * e);
}
function aw(t, e) {
  var r, s, n;
  for (r = 0, s = t.implicitTypes.length; r < s; r += 1)
    if (n = t.implicitTypes[r], n.resolve(e))
      return !0;
  return !1;
}
function Ri(t) {
  return t === BS || t === LS;
}
function Qs(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== Ru || 65536 <= t && t <= 1114111;
}
function Ep(t) {
  return Qs(t) && t !== Ru && t !== VS && t !== Ys;
}
function $p(t, e, r) {
  var s = Ep(t), n = s && !Ri(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      s
    ) : s && t !== jm && t !== Pm && t !== Tm && t !== _m && t !== Cm) && t !== sl && !(e === Ci && !n) || Ep(e) && !Ri(e) && t === sl || e === Ci && n
  );
}
function cw(t) {
  return Qs(t) && t !== Ru && !Ri(t) && t !== KS && t !== XS && t !== Ci && t !== jm && t !== Pm && t !== Tm && t !== _m && t !== Cm && t !== sl && t !== qS && t !== GS && t !== US && t !== ew && t !== WS && t !== YS && t !== zS && t !== JS && t !== HS && t !== QS && t !== ZS;
}
function lw(t) {
  return !Ri(t) && t !== Ci;
}
function Bs(t, e) {
  var r = t.charCodeAt(e), s;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (s = t.charCodeAt(e + 1), s >= 56320 && s <= 57343) ? (r - 55296) * 1024 + s - 56320 + 65536 : r;
}
function Rm(t) {
  var e = /^\n* /;
  return e.test(t);
}
var Im = 1, il = 2, Fm = 3, Mm = 4, Qr = 5;
function uw(t, e, r, s, n, i, o, a) {
  var c, l = 0, p = null, f = !1, d = !1, u = s !== -1, m = -1, h = cw(Bs(t, 0)) && lw(Bs(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; l >= 65536 ? c += 2 : c++) {
      if (l = Bs(t, c), !Qs(l))
        return Qr;
      h = h && $p(l, p, a), p = l;
    }
  else {
    for (c = 0; c < t.length; l >= 65536 ? c += 2 : c++) {
      if (l = Bs(t, c), l === Ys)
        f = !0, u && (d = d || // Foldable line = too long, and not more-indented.
        c - m - 1 > s && t[m + 1] !== " ", m = c);
      else if (!Qs(l))
        return Qr;
      h = h && $p(l, p, a), p = l;
    }
    d = d || u && c - m - 1 > s && t[m + 1] !== " ";
  }
  return !f && !d ? h && !o && !n(t) ? Im : i === Xs ? Qr : il : r > 9 && Rm(t) ? Qr : o ? i === Xs ? Qr : il : d ? Mm : Fm;
}
function fw(t, e, r, s, n) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === Xs ? '""' : "''";
    if (!t.noCompatMode && (tw.indexOf(e) !== -1 || rw.test(e)))
      return t.quotingType === Xs ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = s || t.flowLevel > -1 && r >= t.flowLevel;
    function c(l) {
      return aw(t, l);
    }
    switch (uw(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !s,
      n
    )) {
      case Im:
        return e;
      case il:
        return "'" + e.replace(/'/g, "''") + "'";
      case Fm:
        return "|" + Ap(e, t.indent) + jp(Op(e, i));
      case Mm:
        return ">" + Ap(e, t.indent) + jp(Op(pw(e, o), i));
      case Qr:
        return '"' + hw(e) + '"';
      default:
        throw new He("impossible error: invalid scalar style");
    }
  }();
}
function Ap(t, e) {
  var r = Rm(t) ? String(e) : "", s = t[t.length - 1] === `
`, n = s && (t[t.length - 2] === `
` || t === `
`), i = n ? "+" : s ? "" : "-";
  return r + i + `
`;
}
function jp(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function pw(t, e) {
  for (var r = /(\n+)([^\n]*)/g, s = function() {
    var l = t.indexOf(`
`);
    return l = l !== -1 ? l : t.length, r.lastIndex = l, Pp(t.slice(0, l), e);
  }(), n = t[0] === `
` || t[0] === " ", i, o; o = r.exec(t); ) {
    var a = o[1], c = o[2];
    i = c[0] === " ", s += a + (!n && !i && c !== "" ? `
` : "") + Pp(c, e), n = i;
  }
  return s;
}
function Pp(t, e) {
  if (t === "" || t[0] === " ") return t;
  for (var r = / [^ ]/g, s, n = 0, i, o = 0, a = 0, c = ""; s = r.exec(t); )
    a = s.index, a - n > e && (i = o > n ? o : a, c += `
` + t.slice(n, i), n = i + 1), o = a;
  return c += `
`, t.length - n > e && o > n ? c += t.slice(n, o) + `
` + t.slice(o + 1) : c += t.slice(n), c.slice(1);
}
function hw(t) {
  for (var e = "", r = 0, s, n = 0; n < t.length; r >= 65536 ? n += 2 : n++)
    r = Bs(t, n), s = Ve[r], !s && Qs(r) ? (e += t[n], r >= 65536 && (e += t[n + 1])) : e += s || nw(r);
  return e;
}
function dw(t, e, r) {
  var s = "", n = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (Lt(t, e, a, !1, !1) || typeof a > "u" && Lt(t, e, null, !1, !1)) && (s !== "" && (s += "," + (t.condenseFlow ? "" : " ")), s += t.dump);
  t.tag = n, t.dump = "[" + s + "]";
}
function Tp(t, e, r, s) {
  var n = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (Lt(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Lt(t, e + 1, null, !0, !0, !1, !0)) && ((!s || n !== "") && (n += nl(t, e)), t.dump && Ys === t.dump.charCodeAt(0) ? n += "-" : n += "- ", n += t.dump);
  t.tag = i, t.dump = n || "[]";
}
function mw(t, e, r) {
  var s = "", n = t.tag, i = Object.keys(r), o, a, c, l, p;
  for (o = 0, a = i.length; o < a; o += 1)
    p = "", s !== "" && (p += ", "), t.condenseFlow && (p += '"'), c = i[o], l = r[c], t.replacer && (l = t.replacer.call(r, c, l)), Lt(t, e, c, !1, !1) && (t.dump.length > 1024 && (p += "? "), p += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Lt(t, e, l, !1, !1) && (p += t.dump, s += p));
  t.tag = n, t.dump = "{" + s + "}";
}
function vw(t, e, r, s) {
  var n = "", i = t.tag, o = Object.keys(r), a, c, l, p, f, d;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new He("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    d = "", (!s || n !== "") && (d += nl(t, e)), l = o[a], p = r[l], t.replacer && (p = t.replacer.call(r, l, p)), Lt(t, e + 1, l, !0, !0, !0) && (f = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, f && (t.dump && Ys === t.dump.charCodeAt(0) ? d += "?" : d += "? "), d += t.dump, f && (d += nl(t, e)), Lt(t, e + 1, p, !0, f) && (t.dump && Ys === t.dump.charCodeAt(0) ? d += ":" : d += ": ", d += t.dump, n += d));
  t.tag = i, t.dump = n || "{}";
}
function _p(t, e, r) {
  var s, n, i, o, a, c;
  for (n = r ? t.explicitTypes : t.implicitTypes, i = 0, o = n.length; i < o; i += 1)
    if (a = n[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, $m.call(a.represent) === "[object Function]")
          s = a.represent(e, c);
        else if (Am.call(a.represent, c))
          s = a.represent[c](e, c);
        else
          throw new He("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = s;
      }
      return !0;
    }
  return !1;
}
function Lt(t, e, r, s, n, i, o) {
  t.tag = null, t.dump = r, _p(t, r, !1) || _p(t, r, !0);
  var a = $m.call(t.dump), c = s, l;
  s && (s = t.flowLevel < 0 || t.flowLevel > e);
  var p = a === "[object Object]" || a === "[object Array]", f, d;
  if (p && (f = t.duplicates.indexOf(r), d = f !== -1), (t.tag !== null && t.tag !== "?" || d || t.indent !== 2 && e > 0) && (n = !1), d && t.usedDuplicates[f])
    t.dump = "*ref_" + f;
  else {
    if (p && d && !t.usedDuplicates[f] && (t.usedDuplicates[f] = !0), a === "[object Object]")
      s && Object.keys(t.dump).length !== 0 ? (vw(t, e, t.dump, n), d && (t.dump = "&ref_" + f + t.dump)) : (mw(t, e, t.dump), d && (t.dump = "&ref_" + f + " " + t.dump));
    else if (a === "[object Array]")
      s && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Tp(t, e - 1, t.dump, n) : Tp(t, e, t.dump, n), d && (t.dump = "&ref_" + f + t.dump)) : (dw(t, e, t.dump), d && (t.dump = "&ref_" + f + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && fw(t, t.dump, e, i, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (t.skipInvalid) return !1;
      throw new He("unacceptable kind of an object to dump " + a);
    }
    t.tag !== null && t.tag !== "?" && (l = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? l = "!" + l : l.slice(0, 18) === "tag:yaml.org,2002:" ? l = "!!" + l.slice(18) : l = "!<" + l + ">", t.dump = l + " " + t.dump);
  }
  return !0;
}
function yw(t, e) {
  var r = [], s = [], n, i;
  for (ol(t, r, s), n = 0, i = s.length; n < i; n += 1)
    e.duplicates.push(r[s[n]]);
  e.usedDuplicates = new Array(i);
}
function ol(t, e, r) {
  var s, n, i;
  if (t !== null && typeof t == "object")
    if (n = e.indexOf(t), n !== -1)
      r.indexOf(n) === -1 && r.push(n);
    else if (e.push(t), Array.isArray(t))
      for (n = 0, i = t.length; n < i; n += 1)
        ol(t[n], e, r);
    else
      for (s = Object.keys(t), n = 0, i = s.length; n < i; n += 1)
        ol(t[s[n]], e, r);
}
function gw(t, e) {
  e = e || {};
  var r = new ow(e);
  r.noRefs || yw(t, r);
  var s = t;
  return r.replacer && (s = r.replacer.call({ "": s }, "", s)), Lt(r, 0, s, !0, !0) ? r.dump + `
` : "";
}
var bw = gw, xw = {
  dump: bw
};
function Iu(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var Sw = De, ww = Xd, Ow = tm, Ii = om, Ew = am, $w = Tu, Aw = Em.load, jw = Em.loadAll, Pw = xw.dump, Tw = He, _w = {
  binary: pm,
  float: im,
  map: em,
  null: rm,
  pairs: dm,
  set: mm,
  timestamp: um,
  bool: sm,
  int: nm,
  merge: fm,
  omap: hm,
  seq: Zd,
  str: Qd
}, Cw = Iu("safeLoad", "load"), Rw = Iu("safeLoadAll", "loadAll"), Iw = Iu("safeDump", "dump"), ls = {
  Type: Sw,
  Schema: ww,
  FAILSAFE_SCHEMA: Ow,
  JSON_SCHEMA: Ii,
  CORE_SCHEMA: Ew,
  DEFAULT_SCHEMA: $w,
  load: Aw,
  loadAll: jw,
  dump: Pw,
  YAMLException: Tw,
  types: _w,
  safeLoad: Cw,
  safeLoadAll: Rw,
  safeDump: Iw
};
const Fw = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function Mw(t, e) {
  return e && (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0) ? JSON.parse(t) : ls.load(t);
}
function kw(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function km(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, s]) => (e[r] = kw(s), e), {});
}
function Nm(t, e, {
  loadSpec: r = !1
} = {}) {
  const s = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: km(t.headers)
  }, n = s.headers["content-type"], i = r || Fw(n);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (s.text = a, s.data = a, i)
      try {
        const c = Mw(a, n);
        s.body = c, s.obj = c;
      } catch (c) {
        s.parseError = c;
      }
    return s;
  });
}
async function us(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, e = ju(e), e.headers && Object.keys(e.headers).forEach((n) => {
    const i = e.headers[n];
    typeof i == "string" && (e.headers[n] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let s;
  try {
    s = await (e.userFetch || fetch)(e.url, e), s = await Nm(s, t, e), e.responseInterceptor && (s = await e.responseInterceptor(s) || s);
  } catch (n) {
    if (!s)
      throw n;
    const i = new Error(s.statusText || `response status is ${s.status}`);
    throw i.status = s.status, i.statusCode = s.status, i.responseError = n, i;
  }
  if (!s.ok) {
    const n = new Error(s.statusText || `response status is ${s.status}`);
    throw n.status = s.status, n.statusCode = s.status, n.response = s, n;
  }
  return s;
}
function Nw(t, e, r) {
  return r = r || ((s) => s), e = e || ((s) => s), (s) => (typeof s == "string" && (s = {
    url: s
  }), s = ju(s), s = e(s), r(t(s)));
}
function Dm(t, e = {}) {
  const {
    requestInterceptor: r,
    responseInterceptor: s
  } = e, n = t.withCredentials ? "include" : "same-origin";
  return (i) => t({
    url: i,
    loadSpec: !0,
    requestInterceptor: r,
    responseInterceptor: s,
    headers: {
      Accept: Jd
    },
    credentials: n
  }).then((o) => o.body);
}
const Fu = (t) => {
  var e, r;
  const {
    baseDoc: s,
    url: n
  } = t, i = (e = s ?? n) !== null && e !== void 0 ? e : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(i, globalThis.document.baseURI)) : i;
}, Lm = (t) => {
  const {
    fetch: e,
    http: r
  } = t;
  return e || r || us;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var Dw = /* @__PURE__ */ function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, n) {
      s.__proto__ = n;
    } || function(s, n) {
      for (var i in n) n.hasOwnProperty(i) && (s[i] = n[i]);
    }, t(e, r);
  };
  return function(e, r) {
    t(e, r);
    function s() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (s.prototype = r.prototype, new s());
  };
}(), Lw = Object.prototype.hasOwnProperty;
function al(t, e) {
  return Lw.call(t, e);
}
function cl(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var s = [];
  for (var n in t)
    al(t, n) && s.push(n);
  return s;
}
function We(t) {
  switch (typeof t) {
    case "object":
      return JSON.parse(JSON.stringify(t));
    case "undefined":
      return null;
    default:
      return t;
  }
}
function ll(t) {
  for (var e = 0, r = t.length, s; e < r; ) {
    if (s = t.charCodeAt(e), s >= 48 && s <= 57) {
      e++;
      continue;
    }
    return !1;
  }
  return !0;
}
function br(t) {
  return t.indexOf("/") === -1 && t.indexOf("~") === -1 ? t : t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Vm(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function ul(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (ul(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var s = cl(t), n = s.length, i = 0; i < n; i++)
        if (ul(t[s[i]]))
          return !0;
    }
  }
  return !1;
}
function Cp(t, e) {
  var r = [t];
  for (var s in e) {
    var n = typeof e[s] == "object" ? JSON.stringify(e[s], null, 2) : e[s];
    typeof n < "u" && r.push(s + ": " + n);
  }
  return r.join(`
`);
}
var Bm = (
  /** @class */
  function(t) {
    Dw(e, t);
    function e(r, s, n, i, o) {
      var a = this.constructor, c = t.call(this, Cp(r, { name: s, index: n, operation: i, tree: o })) || this;
      return c.name = s, c.index = n, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = Cp(r, { name: s, index: n, operation: i, tree: o }), c;
    }
    return e;
  }(Error)
), be = Bm, Vw = We, ts = {
  add: function(t, e, r) {
    return t[e] = this.value, { newDocument: r };
  },
  remove: function(t, e, r) {
    var s = t[e];
    return delete t[e], { newDocument: r, removed: s };
  },
  replace: function(t, e, r) {
    var s = t[e];
    return t[e] = this.value, { newDocument: r, removed: s };
  },
  move: function(t, e, r) {
    var s = Zs(r, this.path);
    s && (s = We(s));
    var n = $r(r, { op: "remove", path: this.from }).removed;
    return $r(r, { op: "add", path: this.path, value: n }), { newDocument: r, removed: s };
  },
  copy: function(t, e, r) {
    var s = Zs(r, this.from);
    return $r(r, { op: "add", path: this.path, value: We(s) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: en(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, Bw = {
  add: function(t, e, r) {
    return ll(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
  },
  remove: function(t, e, r) {
    var s = t.splice(e, 1);
    return { newDocument: r, removed: s[0] };
  },
  replace: function(t, e, r) {
    var s = t[e];
    return t[e] = this.value, { newDocument: r, removed: s };
  },
  move: ts.move,
  copy: ts.copy,
  test: ts.test,
  _get: ts._get
};
function Zs(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return $r(t, r), r.value;
}
function $r(t, e, r, s, n, i) {
  if (r === void 0 && (r = !1), s === void 0 && (s = !0), n === void 0 && (n = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : Fi(e, 0)), e.path === "") {
    var o = { newDocument: t };
    if (e.op === "add")
      return o.newDocument = e.value, o;
    if (e.op === "replace")
      return o.newDocument = e.value, o.removed = t, o;
    if (e.op === "move" || e.op === "copy")
      return o.newDocument = Zs(t, e.from), e.op === "move" && (o.removed = t), o;
    if (e.op === "test") {
      if (o.test = en(t, e.value), o.test === !1)
        throw new be("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
      return o.newDocument = t, o;
    } else {
      if (e.op === "remove")
        return o.removed = t, o.newDocument = null, o;
      if (e.op === "_get")
        return e.value = t, o;
      if (r)
        throw new be("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", i, e, t);
      return o;
    }
  } else {
    s || (t = We(t));
    var a = e.path || "", c = a.split("/"), l = t, p = 1, f = c.length, d = void 0, u = void 0, m = void 0;
    for (typeof r == "function" ? m = r : m = Fi; ; ) {
      if (u = c[p], u && u.indexOf("~") != -1 && (u = Vm(u)), n && (u == "__proto__" || u == "prototype" && p > 0 && c[p - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && d === void 0 && (l[u] === void 0 ? d = c.slice(0, p).join("/") : p == f - 1 && (d = e.path), d !== void 0 && m(e, 0, t, d)), p++, Array.isArray(l)) {
        if (u === "-")
          u = l.length;
        else {
          if (r && !ll(u))
            throw new be("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          ll(u) && (u = ~~u);
        }
        if (p >= f) {
          if (r && e.op === "add" && u > l.length)
            throw new be("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = Bw[e.op].call(e, l, u, t);
          if (o.test === !1)
            throw new be("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (p >= f) {
        var o = ts[e.op].call(e, l, u, t);
        if (o.test === !1)
          throw new be("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (l = l[u], r && p < f && (!l || typeof l != "object"))
        throw new be("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function nr(t, e, r, s, n) {
  if (s === void 0 && (s = !0), n === void 0 && (n = !0), r && !Array.isArray(e))
    throw new be("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  s || (t = We(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = $r(t, e[o], r, !0, n, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function Uw(t, e, r) {
  var s = $r(t, e);
  if (s.test === !1)
    throw new be("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return s.newDocument;
}
function Fi(t, e, r, s) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new be("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (ts[t.op]) {
    if (typeof t.path != "string")
      throw new be("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new be('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new be("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new be("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && ul(t.value))
      throw new be("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", e, t, r);
    if (r) {
      if (t.op == "add") {
        var n = t.path.split("/").length, i = s.split("/").length;
        if (n !== i + 1 && n !== i)
          throw new be("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", e, t, r);
      } else if (t.op === "replace" || t.op === "remove" || t.op === "_get") {
        if (t.path !== s)
          throw new be("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", e, t, r);
      } else if (t.op === "move" || t.op === "copy") {
        var o = { op: "_get", path: t.from, value: void 0 }, a = Um([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new be("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else throw new be("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function Um(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new be("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      nr(We(e), We(t), r || !0);
    else {
      r = r || Fi;
      for (var s = 0; s < t.length; s++)
        r(t[s], s, e, void 0);
    }
  } catch (n) {
    if (n instanceof be)
      return n;
    throw n;
  }
}
function en(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    var r = Array.isArray(t), s = Array.isArray(e), n, i, o;
    if (r && s) {
      if (i = t.length, i != e.length)
        return !1;
      for (n = i; n-- !== 0; )
        if (!en(t[n], e[n]))
          return !1;
      return !0;
    }
    if (r != s)
      return !1;
    var a = Object.keys(t);
    if (i = a.length, i !== Object.keys(e).length)
      return !1;
    for (n = i; n-- !== 0; )
      if (!e.hasOwnProperty(a[n]))
        return !1;
    for (n = i; n-- !== 0; )
      if (o = a[n], !en(t[o], e[o]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
const Jw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: be,
  _areEquals: en,
  applyOperation: $r,
  applyPatch: nr,
  applyReducer: Uw,
  deepClone: Vw,
  getValueByPointer: Zs,
  validate: Um,
  validator: Fi
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var Mu = /* @__PURE__ */ new WeakMap(), Hw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  }()
), qw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  }()
);
function zw(t) {
  return Mu.get(t);
}
function Gw(t, e) {
  return t.observers.get(e);
}
function Kw(t, e) {
  t.observers.delete(e.callback);
}
function Ww(t, e) {
  e.unobserve();
}
function Yw(t, e) {
  var r = [], s, n = zw(t);
  if (!n)
    n = new Hw(t), Mu.set(t, n);
  else {
    var i = Gw(n, e);
    s = i && i.observer;
  }
  if (s)
    return s;
  if (s = {}, n.value = We(t), e) {
    s.callback = e, s.next = null;
    var o = function() {
      fl(s);
    }, a = function() {
      clearTimeout(s.next), s.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return s.patches = r, s.object = t, s.unobserve = function() {
    fl(s), clearTimeout(s.next), Kw(n, s), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, n.observers.set(e, new qw(e, s)), s;
}
function fl(t, e) {
  e === void 0 && (e = !1);
  var r = Mu.get(t.object);
  ku(r.value, t.object, t.patches, "", e), t.patches.length && nr(r.value, t.patches);
  var s = t.patches;
  return s.length > 0 && (t.patches = [], t.callback && t.callback(s)), s;
}
function ku(t, e, r, s, n) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = cl(e), o = cl(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var l = o[c], p = t[l];
      if (al(e, l) && !(e[l] === void 0 && p !== void 0 && Array.isArray(e) === !1)) {
        var f = e[l];
        typeof p == "object" && p != null && typeof f == "object" && f != null && Array.isArray(p) === Array.isArray(f) ? ku(p, f, r, s + "/" + br(l), n) : p !== f && (n && r.push({ op: "test", path: s + "/" + br(l), value: We(p) }), r.push({ op: "replace", path: s + "/" + br(l), value: We(f) }));
      } else Array.isArray(t) === Array.isArray(e) ? (n && r.push({ op: "test", path: s + "/" + br(l), value: We(p) }), r.push({ op: "remove", path: s + "/" + br(l) }), a = !0) : (n && r.push({ op: "test", path: s, value: t }), r.push({ op: "replace", path: s, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var l = i[c];
        !al(t, l) && e[l] !== void 0 && r.push({ op: "add", path: s + "/" + br(l), value: We(e[l]) });
      }
  }
}
function Xw(t, e, r) {
  r === void 0 && (r = !1);
  var s = [];
  return ku(t, e, s, "", r), s;
}
const Qw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: Xw,
  generate: fl,
  observe: Yw,
  unobserve: Ww
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, Jw, Qw, {
  JsonPatchError: Bm,
  deepClone: We,
  escapePathComponent: br,
  unescapePathComponent: Vm
});
var Zw = function(e) {
  return eO(e) && !tO(e);
};
function eO(t) {
  return !!t && typeof t == "object";
}
function tO(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || nO(t);
}
var rO = typeof Symbol == "function" && Symbol.for, sO = rO ? Symbol.for("react.element") : 60103;
function nO(t) {
  return t.$$typeof === sO;
}
function iO(t) {
  return Array.isArray(t) ? [] : {};
}
function tn(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? fs(iO(t), t, e) : t;
}
function oO(t, e, r) {
  return t.concat(e).map(function(s) {
    return tn(s, r);
  });
}
function aO(t, e) {
  if (!e.customMerge)
    return fs;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : fs;
}
function cO(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Rp(t) {
  return Object.keys(t).concat(cO(t));
}
function Jm(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function lO(t, e) {
  return Jm(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function uO(t, e, r) {
  var s = {};
  return r.isMergeableObject(t) && Rp(t).forEach(function(n) {
    s[n] = tn(t[n], r);
  }), Rp(e).forEach(function(n) {
    lO(t, n) || (Jm(t, n) && r.isMergeableObject(e[n]) ? s[n] = aO(n, r)(t[n], e[n], r) : s[n] = tn(e[n], r));
  }), s;
}
function fs(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || oO, r.isMergeableObject = r.isMergeableObject || Zw, r.cloneUnlessOtherwiseSpecified = tn;
  var s = Array.isArray(e), n = Array.isArray(t), i = s === n;
  return i ? s ? r.arrayMerge(t, e, r) : uO(t, e, r) : tn(e, r);
}
fs.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(s, n) {
    return fs(s, n, r);
  }, {});
};
var fO = fs, pO = fO;
const hO = /* @__PURE__ */ Go(pO), ne = {
  add: mO,
  replace: yi,
  remove: vO,
  merge: yO,
  mergeDeep: gO,
  context: bO,
  getIn: OO,
  applyPatch: dO,
  parentPathMatch: wO,
  flatten: ln,
  fullyNormalizeArray: EO,
  normalizeArray: qm,
  isPromise: $O,
  forEachNew: xO,
  forEachNewPrimitive: SO,
  isJsonPatch: Km,
  isContextPatch: PO,
  isPatch: Wo,
  isMutation: Wm,
  isAdditiveMutation: Mi,
  isGenerator: jO,
  isFunction: Gm,
  isObject: Ar,
  isError: AO
};
function dO(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && Ip(e.path)
  }, e.op === "merge") {
    const s = dc(t, e.path);
    Object.assign(s, e.value), nr(t, [yi(e.path, s)]);
  } else if (e.op === "mergeDeep") {
    const s = dc(t, e.path), n = hO(s, e.value);
    t = nr(t, [yi(e.path, n)]).newDocument;
  } else if (e.op === "add" && e.path === "" && Ar(e.value)) {
    const s = Object.keys(e.value).reduce((n, i) => (n.push({
      op: "add",
      path: `/${Ip(i)}`,
      value: e.value[i]
    }), n), []);
    nr(t, s);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: s
    } = e;
    r.allowMetaPatches && e.meta && Mi(e) && (Array.isArray(e.value) || Ar(e.value)) && (s = {
      ...s,
      ...e.meta
    }), t = s;
  } else if (nr(t, [e]), r.allowMetaPatches && e.meta && Mi(e) && (Array.isArray(e.value) || Ar(e.value))) {
    const n = {
      ...dc(t, e.path),
      ...e.meta
    };
    nr(t, [yi(e.path, n)]);
  }
  return t;
}
function Ip(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function mO(t, e) {
  return {
    op: "add",
    path: t,
    value: e
  };
}
function yi(t, e, r) {
  return {
    op: "replace",
    path: t,
    value: e,
    meta: r
  };
}
function vO(t) {
  return {
    op: "remove",
    path: t
  };
}
function yO(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function gO(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function bO(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function xO(t, e) {
  try {
    return Hm(t, hl, e);
  } catch (r) {
    return r;
  }
}
function SO(t, e) {
  try {
    return Hm(t, pl, e);
  } catch (r) {
    return r;
  }
}
function Hm(t, e, r) {
  const s = t.filter(Mi).map((o) => e(o.value, r, o.path)) || [], n = ln(s);
  return zm(n);
}
function pl(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((s, n) => pl(s, e, r.concat(n))) : Ar(t) ? Object.keys(t).map((s) => pl(t[s], e, r.concat(s))) : e(t, r[r.length - 1], r);
}
function hl(t, e, r) {
  r = r || [];
  let s = [];
  if (r.length > 0) {
    const n = e(t, r[r.length - 1], r);
    n && (s = s.concat(n));
  }
  if (Array.isArray(t)) {
    const n = t.map((i, o) => hl(i, e, r.concat(o)));
    n && (s = s.concat(n));
  } else if (Ar(t)) {
    const n = Object.keys(t).map((i) => hl(t[i], e, r.concat(i)));
    n && (s = s.concat(n));
  }
  return s = ln(s), s;
}
function wO(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, s = e.length; r < s; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function OO(t, e) {
  return e.reduce((r, s) => typeof s < "u" && r ? r[s] : r, t);
}
function EO(t) {
  return zm(ln(qm(t)));
}
function qm(t) {
  return Array.isArray(t) ? t : [t];
}
function ln(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? ln(e) : e));
}
function zm(t) {
  return t.filter((e) => typeof e < "u");
}
function Ar(t) {
  return t && typeof t == "object";
}
function $O(t) {
  return Ar(t) && Gm(t.then);
}
function Gm(t) {
  return t && typeof t == "function";
}
function AO(t) {
  return t instanceof Error;
}
function Km(t) {
  if (Wo(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function jO(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function Wm(t) {
  return Km(t) || Wo(t) && t.type === "mutation";
}
function Mi(t) {
  return Wm(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function PO(t) {
  return Wo(t) && t.type === "context";
}
function Wo(t) {
  return t && typeof t == "object";
}
function dc(t, e) {
  try {
    return Zs(t, e);
  } catch (r) {
    return console.error(r), {};
  }
}
var Ns = function(t) {
  return t && t.Math === Math && t;
}, Qe = (
  // eslint-disable-next-line es/no-global-this -- safe
  Ns(typeof globalThis == "object" && globalThis) || Ns(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Ns(typeof self == "object" && self) || Ns(typeof ir == "object" && ir) || Ns(typeof ir == "object" && ir) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), dt = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, TO = dt, Yo = !TO(function() {
  var t = (function() {
  }).bind();
  return typeof t != "function" || t.hasOwnProperty("prototype");
}), _O = Yo, Ym = Function.prototype, Fp = Ym.apply, Mp = Ym.call, Nu = typeof Reflect == "object" && Reflect.apply || (_O ? Mp.bind(Fp) : function() {
  return Mp.apply(Fp, arguments);
}), Xm = Yo, Qm = Function.prototype, dl = Qm.call, CO = Xm && Qm.bind.bind(dl, dl), mt = Xm ? CO : function(t) {
  return function() {
    return dl.apply(t, arguments);
  };
}, Zm = mt, RO = Zm({}.toString), IO = Zm("".slice), Du = function(t) {
  return IO(RO(t), 8, -1);
}, FO = Du, MO = mt, ev = function(t) {
  if (FO(t) === "Function") return MO(t);
}, mc = typeof document == "object" && document.all, it = typeof mc > "u" && mc !== void 0 ? function(t) {
  return typeof t == "function" || t === mc;
} : function(t) {
  return typeof t == "function";
}, Lu = {}, kO = dt, ur = !kO(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), NO = Yo, ai = Function.prototype.call, Rr = NO ? ai.bind(ai) : function() {
  return ai.apply(ai, arguments);
}, tv = {}, rv = {}.propertyIsEnumerable, sv = Object.getOwnPropertyDescriptor, DO = sv && !rv.call({ 1: 2 }, 1);
tv.f = DO ? function(e) {
  var r = sv(this, e);
  return !!r && r.enumerable;
} : rv;
var un = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, LO = mt, VO = dt, BO = Du, vc = Object, UO = LO("".split), JO = VO(function() {
  return !vc("z").propertyIsEnumerable(0);
}) ? function(t) {
  return BO(t) === "String" ? UO(t, "") : vc(t);
} : vc, Vu = function(t) {
  return t == null;
}, HO = Vu, qO = TypeError, Xo = function(t) {
  if (HO(t)) throw new qO("Can't call method on " + t);
  return t;
}, zO = JO, GO = Xo, fn = function(t) {
  return zO(GO(t));
}, KO = it, Pt = function(t) {
  return typeof t == "object" ? t !== null : KO(t);
}, Bu = {}, yc = Bu, gc = Qe, WO = it, kp = function(t) {
  return WO(t) ? t : void 0;
}, pn = function(t, e) {
  return arguments.length < 2 ? kp(yc[t]) || kp(gc[t]) : yc[t] && yc[t][e] || gc[t] && gc[t][e];
}, YO = mt, Qo = YO({}.isPrototypeOf), XO = Qe, Np = XO.navigator, Dp = Np && Np.userAgent, QO = Dp ? String(Dp) : "", nv = Qe, bc = QO, Lp = nv.process, Vp = nv.Deno, Bp = Lp && Lp.versions || Vp && Vp.version, Up = Bp && Bp.v8, ct, ki;
Up && (ct = Up.split("."), ki = ct[0] > 0 && ct[0] < 4 ? 1 : +(ct[0] + ct[1]));
!ki && bc && (ct = bc.match(/Edge\/(\d+)/), (!ct || ct[1] >= 74) && (ct = bc.match(/Chrome\/(\d+)/), ct && (ki = +ct[1])));
var ZO = ki, Jp = ZO, e0 = dt, t0 = Qe, r0 = t0.String, iv = !!Object.getOwnPropertySymbols && !e0(function() {
  var t = Symbol("symbol detection");
  return !r0(t) || !(Object(t) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Jp && Jp < 41;
}), s0 = iv, ov = s0 && !Symbol.sham && typeof Symbol.iterator == "symbol", n0 = pn, i0 = it, o0 = Qo, a0 = ov, c0 = Object, av = a0 ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  var e = n0("Symbol");
  return i0(e) && o0(e.prototype, c0(t));
}, l0 = String, Uu = function(t) {
  try {
    return l0(t);
  } catch {
    return "Object";
  }
}, u0 = it, f0 = Uu, p0 = TypeError, Zo = function(t) {
  if (u0(t)) return t;
  throw new p0(f0(t) + " is not a function");
}, h0 = Zo, d0 = Vu, Ju = function(t, e) {
  var r = t[e];
  return d0(r) ? void 0 : h0(r);
}, xc = Rr, Sc = it, wc = Pt, m0 = TypeError, v0 = function(t, e) {
  var r, s;
  if (e === "string" && Sc(r = t.toString) && !wc(s = xc(r, t)) || Sc(r = t.valueOf) && !wc(s = xc(r, t)) || e !== "string" && Sc(r = t.toString) && !wc(s = xc(r, t))) return s;
  throw new m0("Can't convert object to primitive value");
}, cv = { exports: {} }, Hp = Qe, y0 = Object.defineProperty, g0 = function(t, e) {
  try {
    y0(Hp, t, { value: e, configurable: !0, writable: !0 });
  } catch {
    Hp[t] = e;
  }
  return e;
}, b0 = Qe, x0 = g0, qp = "__core-js_shared__", zp = cv.exports = b0[qp] || x0(qp, {});
(zp.versions || (zp.versions = [])).push({
  version: "3.41.0",
  mode: "pure",
  copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var lv = cv.exports, Gp = lv, uv = function(t, e) {
  return Gp[t] || (Gp[t] = e || {});
}, S0 = Xo, w0 = Object, fv = function(t) {
  return w0(S0(t));
}, O0 = mt, E0 = fv, $0 = O0({}.hasOwnProperty), Ht = Object.hasOwn || function(e, r) {
  return $0(E0(e), r);
}, A0 = mt, j0 = 0, P0 = Math.random(), T0 = A0(1 .toString), pv = function(t) {
  return "Symbol(" + (t === void 0 ? "" : t) + ")_" + T0(++j0 + P0, 36);
}, _0 = Qe, C0 = uv, Kp = Ht, R0 = pv, I0 = iv, F0 = ov, rs = _0.Symbol, Oc = C0("wks"), M0 = F0 ? rs.for || rs : rs && rs.withoutSetter || R0, qt = function(t) {
  return Kp(Oc, t) || (Oc[t] = I0 && Kp(rs, t) ? rs[t] : M0("Symbol." + t)), Oc[t];
}, k0 = Rr, Wp = Pt, Yp = av, N0 = Ju, D0 = v0, L0 = qt, V0 = TypeError, B0 = L0("toPrimitive"), U0 = function(t, e) {
  if (!Wp(t) || Yp(t)) return t;
  var r = N0(t, B0), s;
  if (r) {
    if (e === void 0 && (e = "default"), s = k0(r, t, e), !Wp(s) || Yp(s)) return s;
    throw new V0("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), D0(t, e);
}, J0 = U0, H0 = av, hv = function(t) {
  var e = J0(t, "string");
  return H0(e) ? e : e + "";
}, q0 = Qe, Xp = Pt, ml = q0.document, z0 = Xp(ml) && Xp(ml.createElement), dv = function(t) {
  return z0 ? ml.createElement(t) : {};
}, G0 = ur, K0 = dt, W0 = dv, mv = !G0 && !K0(function() {
  return Object.defineProperty(W0("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), Y0 = ur, X0 = Rr, Q0 = tv, Z0 = un, eE = fn, tE = hv, rE = Ht, sE = mv, Qp = Object.getOwnPropertyDescriptor;
Lu.f = Y0 ? Qp : function(e, r) {
  if (e = eE(e), r = tE(r), sE) try {
    return Qp(e, r);
  } catch {
  }
  if (rE(e, r)) return Z0(!X0(Q0.f, e, r), e[r]);
};
var nE = dt, iE = it, oE = /#|\.prototype\./, hn = function(t, e) {
  var r = cE[aE(t)];
  return r === uE ? !0 : r === lE ? !1 : iE(e) ? nE(e) : !!e;
}, aE = hn.normalize = function(t) {
  return String(t).replace(oE, ".").toLowerCase();
}, cE = hn.data = {}, lE = hn.NATIVE = "N", uE = hn.POLYFILL = "P", fE = hn, Zp = ev, pE = Zo, hE = Yo, dE = Zp(Zp.bind), vv = function(t, e) {
  return pE(t), e === void 0 ? t : hE ? dE(t, e) : function() {
    return t.apply(e, arguments);
  };
}, Ir = {}, mE = ur, vE = dt, yv = mE && vE(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), yE = Pt, gE = String, bE = TypeError, Fr = function(t) {
  if (yE(t)) return t;
  throw new bE(gE(t) + " is not an object");
}, xE = ur, SE = mv, wE = yv, ci = Fr, eh = hv, OE = TypeError, Ec = Object.defineProperty, EE = Object.getOwnPropertyDescriptor, $c = "enumerable", Ac = "configurable", jc = "writable";
Ir.f = xE ? wE ? function(e, r, s) {
  if (ci(e), r = eh(r), ci(s), typeof e == "function" && r === "prototype" && "value" in s && jc in s && !s[jc]) {
    var n = EE(e, r);
    n && n[jc] && (e[r] = s.value, s = {
      configurable: Ac in s ? s[Ac] : n[Ac],
      enumerable: $c in s ? s[$c] : n[$c],
      writable: !1
    });
  }
  return Ec(e, r, s);
} : Ec : function(e, r, s) {
  if (ci(e), r = eh(r), ci(s), SE) try {
    return Ec(e, r, s);
  } catch {
  }
  if ("get" in s || "set" in s) throw new OE("Accessors not supported");
  return "value" in s && (e[r] = s.value), e;
};
var $E = ur, AE = Ir, jE = un, fr = $E ? function(t, e, r) {
  return AE.f(t, e, jE(1, r));
} : function(t, e, r) {
  return t[e] = r, t;
}, Ds = Qe, PE = Nu, TE = ev, _E = it, CE = Lu.f, RE = fE, Kr = Bu, IE = vv, Wr = fr, th = Ht, FE = function(t) {
  var e = function(r, s, n) {
    if (this instanceof e) {
      switch (arguments.length) {
        case 0:
          return new t();
        case 1:
          return new t(r);
        case 2:
          return new t(r, s);
      }
      return new t(r, s, n);
    }
    return PE(t, this, arguments);
  };
  return e.prototype = t.prototype, e;
}, ea = function(t, e) {
  var r = t.target, s = t.global, n = t.stat, i = t.proto, o = s ? Ds : n ? Ds[r] : Ds[r] && Ds[r].prototype, a = s ? Kr : Kr[r] || Wr(Kr, r, {})[r], c = a.prototype, l, p, f, d, u, m, h, y, g;
  for (d in e)
    l = RE(s ? d : r + (n ? "." : "#") + d, t.forced), p = !l && o && th(o, d), m = a[d], p && (t.dontCallGetSet ? (g = CE(o, d), h = g && g.value) : h = o[d]), u = p && h ? h : e[d], !(!l && !i && typeof m == typeof u) && (t.bind && p ? y = IE(u, Ds) : t.wrap && p ? y = FE(u) : i && _E(u) ? y = TE(u) : y = u, (t.sham || u && u.sham || m && m.sham) && Wr(y, "sham", !0), Wr(a, d, y), i && (f = r + "Prototype", th(Kr, f) || Wr(Kr, f, {}), Wr(Kr[f], d, u), t.real && c && (l || !c[d]) && Wr(c, d, u)));
}, ME = uv, kE = pv, rh = ME("keys"), Hu = function(t) {
  return rh[t] || (rh[t] = kE(t));
}, NE = dt, DE = !NE(function() {
  function t() {
  }
  return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
}), LE = Ht, VE = it, BE = fv, UE = Hu, JE = DE, sh = UE("IE_PROTO"), vl = Object, HE = vl.prototype, qu = JE ? vl.getPrototypeOf : function(t) {
  var e = BE(t);
  if (LE(e, sh)) return e[sh];
  var r = e.constructor;
  return VE(r) && e instanceof r ? r.prototype : e instanceof vl ? HE : null;
}, qE = mt, zE = Zo, GE = function(t, e, r) {
  try {
    return qE(zE(Object.getOwnPropertyDescriptor(t, e)[r]));
  } catch {
  }
}, KE = Pt, WE = function(t) {
  return KE(t) || t === null;
}, YE = WE, XE = String, QE = TypeError, ZE = function(t) {
  if (YE(t)) return t;
  throw new QE("Can't set " + XE(t) + " as a prototype");
}, e$ = GE, t$ = Pt, r$ = Xo, s$ = ZE, zu = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t = !1, e = {}, r;
  try {
    r = e$(Object.prototype, "__proto__", "set"), r(e, []), t = e instanceof Array;
  } catch {
  }
  return function(n, i) {
    return r$(n), s$(i), t$(n) && (t ? r(n, i) : n.__proto__ = i), n;
  };
}() : void 0), gv = {}, n$ = Math.ceil, i$ = Math.floor, o$ = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? i$ : n$)(r);
}, a$ = o$, Gu = function(t) {
  var e = +t;
  return e !== e || e === 0 ? 0 : a$(e);
}, c$ = Gu, l$ = Math.max, u$ = Math.min, f$ = function(t, e) {
  var r = c$(t);
  return r < 0 ? l$(r + e, 0) : u$(r, e);
}, p$ = Gu, h$ = Math.min, d$ = function(t) {
  var e = p$(t);
  return e > 0 ? h$(e, 9007199254740991) : 0;
}, m$ = d$, bv = function(t) {
  return m$(t.length);
}, v$ = fn, y$ = f$, g$ = bv, nh = function(t) {
  return function(e, r, s) {
    var n = v$(e), i = g$(n);
    if (i === 0) return !t && -1;
    var o = y$(s, i), a;
    if (t && r !== r) {
      for (; i > o; )
        if (a = n[o++], a !== a) return !0;
    } else for (; i > o; o++)
      if ((t || o in n) && n[o] === r) return t || o || 0;
    return !t && -1;
  };
}, b$ = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: nh(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: nh(!1)
}, Ku = {}, x$ = mt, Pc = Ht, S$ = fn, w$ = b$.indexOf, O$ = Ku, ih = x$([].push), xv = function(t, e) {
  var r = S$(t), s = 0, n = [], i;
  for (i in r) !Pc(O$, i) && Pc(r, i) && ih(n, i);
  for (; e.length > s; ) Pc(r, i = e[s++]) && (~w$(n, i) || ih(n, i));
  return n;
}, Wu = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], E$ = xv, $$ = Wu, A$ = $$.concat("length", "prototype");
gv.f = Object.getOwnPropertyNames || function(e) {
  return E$(e, A$);
};
var Sv = {};
Sv.f = Object.getOwnPropertySymbols;
var j$ = pn, P$ = mt, T$ = gv, _$ = Sv, C$ = Fr, R$ = P$([].concat), I$ = j$("Reflect", "ownKeys") || function(e) {
  var r = T$.f(C$(e)), s = _$.f;
  return s ? R$(r, s(e)) : r;
}, oh = Ht, F$ = I$, M$ = Lu, k$ = Ir, wv = function(t, e, r) {
  for (var s = F$(e), n = k$.f, i = M$.f, o = 0; o < s.length; o++) {
    var a = s[o];
    !oh(t, a) && !(r && oh(r, a)) && n(t, a, i(e, a));
  }
}, Ov = {}, N$ = xv, D$ = Wu, L$ = Object.keys || function(e) {
  return N$(e, D$);
}, V$ = ur, B$ = yv, U$ = Ir, J$ = Fr, H$ = fn, q$ = L$;
Ov.f = V$ && !B$ ? Object.defineProperties : function(e, r) {
  J$(e);
  for (var s = H$(r), n = q$(r), i = n.length, o = 0, a; i > o; ) U$.f(e, a = n[o++], s[a]);
  return e;
};
var z$ = pn, G$ = z$("document", "documentElement"), K$ = Fr, W$ = Ov, ah = Wu, Y$ = Ku, X$ = G$, Q$ = dv, Z$ = Hu, ch = ">", lh = "<", yl = "prototype", gl = "script", Ev = Z$("IE_PROTO"), Tc = function() {
}, $v = function(t) {
  return lh + gl + ch + t + lh + "/" + gl + ch;
}, uh = function(t) {
  t.write($v("")), t.close();
  var e = t.parentWindow.Object;
  return t = null, e;
}, e1 = function() {
  var t = Q$("iframe"), e = "java" + gl + ":", r;
  return t.style.display = "none", X$.appendChild(t), t.src = String(e), r = t.contentWindow.document, r.open(), r.write($v("document.F=Object")), r.close(), r.F;
}, li, gi = function() {
  try {
    li = new ActiveXObject("htmlfile");
  } catch {
  }
  gi = typeof document < "u" ? document.domain && li ? uh(li) : e1() : uh(li);
  for (var t = ah.length; t--; ) delete gi[yl][ah[t]];
  return gi();
};
Y$[Ev] = !0;
var Yu = Object.create || function(e, r) {
  var s;
  return e !== null ? (Tc[yl] = K$(e), s = new Tc(), Tc[yl] = null, s[Ev] = e) : s = gi(), r === void 0 ? s : W$.f(s, r);
}, t1 = Pt, r1 = fr, Av = function(t, e) {
  t1(e) && "cause" in e && r1(t, "cause", e.cause);
}, s1 = mt, jv = Error, n1 = s1("".replace), i1 = function(t) {
  return String(new jv(t).stack);
}("zxcasd"), Pv = /\n\s*at [^:]*:[^\n]*/, o1 = Pv.test(i1), a1 = function(t, e) {
  if (o1 && typeof t == "string" && !jv.prepareStackTrace)
    for (; e--; ) t = n1(t, Pv, "");
  return t;
}, c1 = dt, l1 = un, u1 = !c1(function() {
  var t = new Error("a");
  return "stack" in t ? (Object.defineProperty(t, "stack", l1(1, 7)), t.stack !== 7) : !0;
}), f1 = fr, p1 = a1, h1 = u1, fh = Error.captureStackTrace, Tv = function(t, e, r, s) {
  h1 && (fh ? fh(t, e) : f1(t, "stack", p1(r, s)));
}, Ss = {}, d1 = qt, m1 = Ss, v1 = d1("iterator"), y1 = Array.prototype, g1 = function(t) {
  return t !== void 0 && (m1.Array === t || y1[v1] === t);
}, b1 = qt, x1 = b1("toStringTag"), _v = {};
_v[x1] = "z";
var Xu = String(_v) === "[object z]", S1 = Xu, w1 = it, bi = Du, O1 = qt, E1 = O1("toStringTag"), $1 = Object, A1 = bi(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", j1 = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, Qu = S1 ? bi : function(t) {
  var e, r, s;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (r = j1(e = $1(t), E1)) == "string" ? r : A1 ? bi(e) : (s = bi(e)) === "Object" && w1(e.callee) ? "Arguments" : s;
}, P1 = Qu, ph = Ju, T1 = Vu, _1 = Ss, C1 = qt, R1 = C1("iterator"), Cv = function(t) {
  if (!T1(t)) return ph(t, R1) || ph(t, "@@iterator") || _1[P1(t)];
}, I1 = Rr, F1 = Zo, M1 = Fr, k1 = Uu, N1 = Cv, D1 = TypeError, L1 = function(t, e) {
  var r = arguments.length < 2 ? N1(t) : e;
  if (F1(r)) return M1(I1(r, t));
  throw new D1(k1(t) + " is not iterable");
}, V1 = Rr, hh = Fr, B1 = Ju, U1 = function(t, e, r) {
  var s, n;
  hh(t);
  try {
    if (s = B1(t, "return"), !s) {
      if (e === "throw") throw r;
      return r;
    }
    s = V1(s, t);
  } catch (i) {
    n = !0, s = i;
  }
  if (e === "throw") throw r;
  if (n) throw s;
  return hh(s), r;
}, J1 = vv, H1 = Rr, q1 = Fr, z1 = Uu, G1 = g1, K1 = bv, dh = Qo, W1 = L1, Y1 = Cv, mh = U1, X1 = TypeError, xi = function(t, e) {
  this.stopped = t, this.result = e;
}, vh = xi.prototype, Q1 = function(t, e, r) {
  var s = r && r.that, n = !!(r && r.AS_ENTRIES), i = !!(r && r.IS_RECORD), o = !!(r && r.IS_ITERATOR), a = !!(r && r.INTERRUPTED), c = J1(e, s), l, p, f, d, u, m, h, y = function(v) {
    return l && mh(l, "normal", v), new xi(!0, v);
  }, g = function(v) {
    return n ? (q1(v), a ? c(v[0], v[1], y) : c(v[0], v[1])) : a ? c(v, y) : c(v);
  };
  if (i)
    l = t.iterator;
  else if (o)
    l = t;
  else {
    if (p = Y1(t), !p) throw new X1(z1(t) + " is not iterable");
    if (G1(p)) {
      for (f = 0, d = K1(t); d > f; f++)
        if (u = g(t[f]), u && dh(vh, u)) return u;
      return new xi(!1);
    }
    l = W1(t, p);
  }
  for (m = i ? t.next : l.next; !(h = H1(m, l)).done; ) {
    try {
      u = g(h.value);
    } catch (v) {
      mh(l, "throw", v);
    }
    if (typeof u == "object" && u && dh(vh, u)) return u;
  }
  return new xi(!1);
}, Z1 = Qu, eA = String, Zu = function(t) {
  if (Z1(t) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return eA(t);
}, tA = Zu, Rv = function(t, e) {
  return t === void 0 ? arguments.length < 2 ? "" : e : tA(t);
}, rA = ea, sA = Qo, nA = qu, Ni = zu, iA = wv, Iv = Yu, _c = fr, Cc = un, oA = Av, aA = Tv, cA = Q1, lA = Rv, uA = qt, fA = uA("toStringTag"), Di = Error, pA = [].push, ps = function(e, r) {
  var s = sA(Rc, this), n;
  Ni ? n = Ni(new Di(), s ? nA(this) : Rc) : (n = s ? this : Iv(Rc), _c(n, fA, "Error")), r !== void 0 && _c(n, "message", lA(r)), aA(n, ps, n.stack, 1), arguments.length > 2 && oA(n, arguments[2]);
  var i = [];
  return cA(e, pA, { that: i }), _c(n, "errors", i), n;
};
Ni ? Ni(ps, Di) : iA(ps, Di, { name: !0 });
var Rc = ps.prototype = Iv(Di.prototype, {
  constructor: Cc(1, ps),
  message: Cc(1, ""),
  name: Cc(1, "AggregateError")
});
rA({ global: !0, constructor: !0, arity: 2 }, {
  AggregateError: ps
});
var hA = Ir.f, dA = function(t, e, r) {
  r in t || hA(t, r, {
    configurable: !0,
    get: function() {
      return e[r];
    },
    set: function(s) {
      e[r] = s;
    }
  });
}, mA = it, vA = Pt, yh = zu, yA = function(t, e, r) {
  var s, n;
  return (
    // it can work only with native `setPrototypeOf`
    yh && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    mA(s = e.constructor) && s !== r && vA(n = s.prototype) && n !== r.prototype && yh(t, n), t
  );
}, gh = pn, gA = fr, bA = Qo, bh = zu, xh = wv, Sh = dA, xA = yA, SA = Rv, wA = Av, OA = Tv, EA = ur, Fv = function(t, e, r, s) {
  var n = "stackTraceLimit", i = s ? 2 : 1, o = t.split("."), a = o[o.length - 1], c = gh.apply(null, o);
  if (c) {
    var l = c.prototype;
    if (!r) return c;
    var p = gh("Error"), f = e(function(d, u) {
      var m = SA(s ? u : d, void 0), h = s ? new c(d) : new c();
      return m !== void 0 && gA(h, "message", m), OA(h, f, h.stack, 2), this && bA(l, this) && xA(h, this, f), arguments.length > i && wA(h, arguments[i]), h;
    });
    return f.prototype = l, a !== "Error" ? bh ? bh(f, p) : xh(f, p, { name: !0 }) : EA && n in c && (Sh(f, c, n), Sh(f, c, "prepareStackTrace")), xh(f, c), f;
  }
}, Mv = ea, $A = Qe, Tt = Nu, kv = Fv, bl = "WebAssembly", wh = $A[bl], Li = new Error("e", { cause: 7 }).cause !== 7, Mr = function(t, e) {
  var r = {};
  r[t] = kv(t, e, Li), Mv({ global: !0, constructor: !0, arity: 1, forced: Li }, r);
}, ef = function(t, e) {
  if (wh && wh[t]) {
    var r = {};
    r[t] = kv(bl + "." + t, e, Li), Mv({ target: bl, stat: !0, constructor: !0, arity: 1, forced: Li }, r);
  }
};
Mr("Error", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Mr("EvalError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Mr("RangeError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Mr("ReferenceError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Mr("SyntaxError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Mr("TypeError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Mr("URIError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
ef("CompileError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
ef("LinkError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
ef("RuntimeError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
var AA = ea, jA = pn, PA = Nu, Oh = dt, TA = Fv, tf = "AggregateError", Eh = jA(tf), $h = !Oh(function() {
  return Eh([1]).errors[0] !== 1;
}) && Oh(function() {
  return Eh([1], tf, { cause: 7 }).cause !== 7;
});
AA({ global: !0, constructor: !0, arity: 2, forced: $h }, {
  AggregateError: TA(tf, function(t) {
    return function(r, s) {
      return PA(t, this, arguments);
    };
  }, $h, !0)
});
var _A = Qe, CA = it, Ah = _A.WeakMap, RA = CA(Ah) && /native code/.test(String(Ah)), IA = RA, Nv = Qe, FA = Pt, MA = fr, Ic = Ht, Fc = lv, kA = Hu, NA = Ku, jh = "Object already initialized", xl = Nv.TypeError, DA = Nv.WeakMap, Vi, rn, Bi, LA = function(t) {
  return Bi(t) ? rn(t) : Vi(t, {});
}, VA = function(t) {
  return function(e) {
    var r;
    if (!FA(e) || (r = rn(e)).type !== t)
      throw new xl("Incompatible receiver, " + t + " required");
    return r;
  };
};
if (IA || Fc.state) {
  var bt = Fc.state || (Fc.state = new DA());
  bt.get = bt.get, bt.has = bt.has, bt.set = bt.set, Vi = function(t, e) {
    if (bt.has(t)) throw new xl(jh);
    return e.facade = t, bt.set(t, e), e;
  }, rn = function(t) {
    return bt.get(t) || {};
  }, Bi = function(t) {
    return bt.has(t);
  };
} else {
  var Yr = kA("state");
  NA[Yr] = !0, Vi = function(t, e) {
    if (Ic(t, Yr)) throw new xl(jh);
    return e.facade = t, MA(t, Yr, e), e;
  }, rn = function(t) {
    return Ic(t, Yr) ? t[Yr] : {};
  }, Bi = function(t) {
    return Ic(t, Yr);
  };
}
var Dv = {
  set: Vi,
  get: rn,
  has: Bi,
  enforce: LA,
  getterFor: VA
}, Sl = ur, BA = Ht, Lv = Function.prototype, UA = Sl && Object.getOwnPropertyDescriptor, rf = BA(Lv, "name"), JA = rf && (function() {
}).name === "something", HA = rf && (!Sl || Sl && UA(Lv, "name").configurable), qA = {
  EXISTS: rf,
  PROPER: JA,
  CONFIGURABLE: HA
}, zA = fr, Vv = function(t, e, r, s) {
  return s && s.enumerable ? t[e] = r : zA(t, e, r), t;
}, GA = dt, KA = it, WA = Pt, YA = Yu, Ph = qu, XA = Vv, QA = qt, wl = QA("iterator"), Bv = !1, kt, Mc, kc;
[].keys && (kc = [].keys(), "next" in kc ? (Mc = Ph(Ph(kc)), Mc !== Object.prototype && (kt = Mc)) : Bv = !0);
var ZA = !WA(kt) || GA(function() {
  var t = {};
  return kt[wl].call(t) !== t;
});
ZA ? kt = {} : kt = YA(kt);
KA(kt[wl]) || XA(kt, wl, function() {
  return this;
});
var Uv = {
  IteratorPrototype: kt,
  BUGGY_SAFARI_ITERATORS: Bv
}, ej = Xu, tj = Qu, rj = ej ? {}.toString : function() {
  return "[object " + tj(this) + "]";
}, sj = Xu, nj = Ir.f, ij = fr, oj = Ht, aj = rj, cj = qt, Th = cj("toStringTag"), sf = function(t, e, r, s) {
  var n = r ? t : t && t.prototype;
  n && (oj(n, Th) || nj(n, Th, { configurable: !0, value: e }), s && !sj && ij(n, "toString", aj));
}, lj = Uv.IteratorPrototype, uj = Yu, fj = un, pj = sf, hj = Ss, dj = function() {
  return this;
}, mj = function(t, e, r, s) {
  var n = e + " Iterator";
  return t.prototype = uj(lj, { next: fj(+!s, r) }), pj(t, n, !1, !0), hj[n] = dj, t;
}, vj = ea, yj = Rr, Jv = qA, gj = mj, bj = qu, xj = sf, _h = Vv, Sj = qt, Ch = Ss, Hv = Uv, wj = Jv.PROPER;
Jv.CONFIGURABLE;
Hv.IteratorPrototype;
var ui = Hv.BUGGY_SAFARI_ITERATORS, Nc = Sj("iterator"), Rh = "keys", fi = "values", Ih = "entries", Oj = function() {
  return this;
}, qv = function(t, e, r, s, n, i, o) {
  gj(r, e, s);
  var a = function(g) {
    if (g === n && d) return d;
    if (!ui && g && g in p) return p[g];
    switch (g) {
      case Rh:
        return function() {
          return new r(this, g);
        };
      case fi:
        return function() {
          return new r(this, g);
        };
      case Ih:
        return function() {
          return new r(this, g);
        };
    }
    return function() {
      return new r(this);
    };
  }, c = e + " Iterator", l = !1, p = t.prototype, f = p[Nc] || p["@@iterator"] || n && p[n], d = !ui && f || a(n), u = e === "Array" && p.entries || f, m, h, y;
  if (u && (m = bj(u.call(new t())), m !== Object.prototype && m.next && (xj(m, c, !0, !0), Ch[c] = Oj)), wj && n === fi && f && f.name !== fi && (l = !0, d = function() {
    return yj(f, this);
  }), n)
    if (h = {
      values: a(fi),
      keys: i ? d : a(Rh),
      entries: a(Ih)
    }, o) for (y in h)
      (ui || l || !(y in p)) && _h(p, y, h[y]);
    else vj({ target: e, proto: !0, forced: ui || l }, h);
  return o && p[Nc] !== d && _h(p, Nc, d, { name: n }), Ch[e] = d, h;
}, zv = function(t, e) {
  return { value: t, done: e };
}, Ej = fn, Fh = Ss, Gv = Dv;
Ir.f;
var $j = qv, pi = zv, Kv = "Array Iterator", Aj = Gv.set, jj = Gv.getterFor(Kv);
$j(Array, "Array", function(t, e) {
  Aj(this, {
    type: Kv,
    target: Ej(t),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var t = jj(this), e = t.target, r = t.index++;
  if (!e || r >= e.length)
    return t.target = null, pi(void 0, !0);
  switch (t.kind) {
    case "keys":
      return pi(r, !1);
    case "values":
      return pi(e[r], !1);
  }
  return pi([r, e[r]], !1);
}, "values");
Fh.Arguments = Fh.Array;
var nf = mt, Pj = Gu, Tj = Zu, _j = Xo, Cj = nf("".charAt), Mh = nf("".charCodeAt), Rj = nf("".slice), kh = function(t) {
  return function(e, r) {
    var s = Tj(_j(e)), n = Pj(r), i = s.length, o, a;
    return n < 0 || n >= i ? t ? "" : void 0 : (o = Mh(s, n), o < 55296 || o > 56319 || n + 1 === i || (a = Mh(s, n + 1)) < 56320 || a > 57343 ? t ? Cj(s, n) : o : t ? Rj(s, n, n + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
  };
}, Ij = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: kh(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: kh(!0)
}, Fj = Ij.charAt, Mj = Zu, Wv = Dv, kj = qv, Nh = zv, Yv = "String Iterator", Nj = Wv.set, Dj = Wv.getterFor(Yv);
kj(String, "String", function(t) {
  Nj(this, {
    type: Yv,
    string: Mj(t),
    index: 0
  });
}, function() {
  var e = Dj(this), r = e.string, s = e.index, n;
  return s >= r.length ? Nh(void 0, !0) : (n = Fj(r, s), e.index += n.length, Nh(n, !1));
});
var Lj = Bu, Vj = Lj.AggregateError, Bj = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, Uj = Bj, Jj = Qe, Hj = sf, Dh = Ss;
for (var Dc in Uj)
  Hj(Jj[Dc], Dc), Dh[Dc] = Dh.Array;
var qj = Vj, zj = qj, Gj = zj, Kj = Gj, Wj = Kj, Yj = Wj, Xj = Yj, Qj = Xj;
const Zj = /* @__PURE__ */ Go(Qj);
class eP extends Zj {
  constructor(e, r, s) {
    if (super(e, r, s), this.name = this.constructor.name, typeof r == "string" && (this.message = r), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(r).stack, s != null && typeof s == "object" && Object.hasOwn(s, "cause") && !("cause" in this)) {
      const {
        cause: n
      } = s;
      this.cause = n, n instanceof Error && "stack" in n && (this.stack = `${this.stack}
CAUSE: ${n.stack}`);
    }
  }
}
class ye extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(eP, e);
  }
  constructor(e, r) {
    if (super(e, r), this.name = this.constructor.name, typeof e == "string" && (this.message = e), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(e).stack, r != null && typeof r == "object" && Object.hasOwn(r, "cause") && !("cause" in this)) {
      const {
        cause: s
      } = r;
      this.cause = s, s instanceof Error && "stack" in s && (this.stack = `${this.stack}
CAUSE: ${s.stack}`);
    }
  }
}
class pt extends ye {
  constructor(e, r) {
    if (super(e, r), r != null && typeof r == "object") {
      const {
        cause: s,
        ...n
      } = r;
      Object.assign(this, n);
    }
  }
}
class Q extends ye {
}
class Lc extends Q {
}
var of = function() {
  return !1;
}, zt = function() {
  return !0;
};
function me(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function oe(t) {
  return function e(r) {
    return arguments.length === 0 || me(r) ? e : t.apply(this, arguments);
  };
}
function K(t) {
  return function e(r, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return me(r) ? e : oe(function(n) {
          return t(r, n);
        });
      default:
        return me(r) && me(s) ? e : me(r) ? oe(function(n) {
          return t(n, s);
        }) : me(s) ? oe(function(n) {
          return t(r, n);
        }) : t(r, s);
    }
  };
}
function tP(t, e) {
  t = t || [], e = e || [];
  var r, s = t.length, n = e.length, i = [];
  for (r = 0; r < s; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < n; )
    i[i.length] = e[r], r += 1;
  return i;
}
function ta(t, e) {
  switch (t) {
    case 0:
      return function() {
        return e.apply(this, arguments);
      };
    case 1:
      return function(r) {
        return e.apply(this, arguments);
      };
    case 2:
      return function(r, s) {
        return e.apply(this, arguments);
      };
    case 3:
      return function(r, s, n) {
        return e.apply(this, arguments);
      };
    case 4:
      return function(r, s, n, i) {
        return e.apply(this, arguments);
      };
    case 5:
      return function(r, s, n, i, o) {
        return e.apply(this, arguments);
      };
    case 6:
      return function(r, s, n, i, o, a) {
        return e.apply(this, arguments);
      };
    case 7:
      return function(r, s, n, i, o, a, c) {
        return e.apply(this, arguments);
      };
    case 8:
      return function(r, s, n, i, o, a, c, l) {
        return e.apply(this, arguments);
      };
    case 9:
      return function(r, s, n, i, o, a, c, l, p) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(r, s, n, i, o, a, c, l, p, f) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function af(t, e, r) {
  return function() {
    for (var s = [], n = 0, i = t, o = 0, a = !1; o < e.length || n < arguments.length; ) {
      var c;
      o < e.length && (!me(e[o]) || n >= arguments.length) ? c = e[o] : (c = arguments[n], n += 1), s[o] = c, me(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, s) : ta(Math.max(0, i), af(t, s, r));
  };
}
var pe = /* @__PURE__ */ K(function(e, r) {
  return e === 1 ? oe(r) : ta(e, af(e, [], r));
});
function Be(t) {
  return function e(r, s, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return me(r) ? e : K(function(i, o) {
          return t(r, i, o);
        });
      case 2:
        return me(r) && me(s) ? e : me(r) ? K(function(i, o) {
          return t(i, s, o);
        }) : me(s) ? K(function(i, o) {
          return t(r, i, o);
        }) : oe(function(i) {
          return t(r, s, i);
        });
      default:
        return me(r) && me(s) && me(n) ? e : me(r) && me(s) ? K(function(i, o) {
          return t(i, o, n);
        }) : me(r) && me(n) ? K(function(i, o) {
          return t(i, s, o);
        }) : me(s) && me(n) ? K(function(i, o) {
          return t(r, i, o);
        }) : me(r) ? oe(function(i) {
          return t(i, s, n);
        }) : me(s) ? oe(function(i) {
          return t(r, i, n);
        }) : me(n) ? oe(function(i) {
          return t(r, s, i);
        }) : t(r, s, n);
    }
  };
}
const kr = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function rP(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function pr(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var s = arguments[arguments.length - 1];
    if (!kr(s)) {
      for (var n = 0; n < t.length; ) {
        if (typeof s[t[n]] == "function")
          return s[t[n]].apply(s, Array.prototype.slice.call(arguments, 0, -1));
        n += 1;
      }
      if (rP(s)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(s);
      }
    }
    return r.apply(this, arguments);
  };
}
function ra(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const Xe = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
var sP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = Xe.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = ra(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
}();
function nP(t) {
  return function(e) {
    return new sP(t, e);
  };
}
var cf = /* @__PURE__ */ K(/* @__PURE__ */ pr(["all"], nP, function(e, r) {
  for (var s = 0; s < r.length; ) {
    if (!e(r[s]))
      return !1;
    s += 1;
  }
  return !0;
}));
function Lh(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function Ui(t, e, r) {
  for (var s = 0, n = r.length; s < n; ) {
    if (t(e, r[s]))
      return !0;
    s += 1;
  }
  return !1;
}
function iP(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function st(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function oP(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const Js = typeof Object.is == "function" ? Object.is : oP;
var Vh = Object.prototype.toString, Xv = /* @__PURE__ */ function() {
  return Vh.call(arguments) === "[object Arguments]" ? function(e) {
    return Vh.call(e) === "[object Arguments]";
  } : function(e) {
    return st("callee", e);
  };
}(), aP = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), Bh = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Uh = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), cP = function(e, r) {
  for (var s = 0; s < e.length; ) {
    if (e[s] === r)
      return !0;
    s += 1;
  }
  return !1;
}, Pr = /* @__PURE__ */ oe(typeof Object.keys == "function" && !Uh ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, s, n = [], i = Uh && Xv(e);
  for (r in e)
    st(r, e) && (!i || r !== "length") && (n[n.length] = r);
  if (aP)
    for (s = Bh.length - 1; s >= 0; )
      r = Bh[s], st(r, e) && !cP(n, r) && (n[n.length] = r), s -= 1;
  return n;
}), nt = /* @__PURE__ */ oe(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function Jh(t, e, r, s) {
  var n = Lh(t), i = Lh(e);
  function o(a, c) {
    return lf(a, c, r.slice(), s.slice());
  }
  return !Ui(function(a, c) {
    return !Ui(o, c, a);
  }, i, n);
}
function lf(t, e, r, s) {
  if (Js(t, e))
    return !0;
  var n = nt(t);
  if (n !== nt(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (n) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && iP(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && Js(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!Js(t.valueOf(), e.valueOf()))
        return !1;
      break;
    case "Error":
      return t.name === e.name && t.message === e.message;
    case "RegExp":
      if (!(t.source === e.source && t.global === e.global && t.ignoreCase === e.ignoreCase && t.multiline === e.multiline && t.sticky === e.sticky && t.unicode === e.unicode))
        return !1;
      break;
  }
  for (var i = r.length - 1; i >= 0; ) {
    if (r[i] === t)
      return s[i] === e;
    i -= 1;
  }
  switch (n) {
    case "Map":
      return t.size !== e.size ? !1 : Jh(t.entries(), e.entries(), r.concat([t]), s.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : Jh(t.values(), e.values(), r.concat([t]), s.concat([e]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return !1;
  }
  var o = Pr(t);
  if (o.length !== Pr(e).length)
    return !1;
  var a = r.concat([t]), c = s.concat([e]);
  for (i = o.length - 1; i >= 0; ) {
    var l = o[i];
    if (!(st(l, e) && lf(e[l], t[l], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Gt = /* @__PURE__ */ K(function(e, r) {
  return lf(e, r, [], []);
});
function lP(t, e, r) {
  var s, n;
  if (typeof t.indexOf == "function")
    switch (typeof e) {
      case "number":
        if (e === 0) {
          for (s = 1 / e; r < t.length; ) {
            if (n = t[r], n === 0 && 1 / n === s)
              return r;
            r += 1;
          }
          return -1;
        } else if (e !== e) {
          for (; r < t.length; ) {
            if (n = t[r], typeof n == "number" && n !== n)
              return r;
            r += 1;
          }
          return -1;
        }
        return t.indexOf(e, r);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return t.indexOf(e, r);
      case "object":
        if (e === null)
          return t.indexOf(e, r);
    }
  for (; r < t.length; ) {
    if (Gt(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function Ji(t, e) {
  return lP(e, t, 0) >= 0;
}
function Hs(t, e) {
  for (var r = 0, s = e.length, n = Array(s); r < s; )
    n[r] = t(e[r]), r += 1;
  return n;
}
function Vc(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var Ls = function(e) {
  return (e < 10 ? "0" : "") + e;
}, uP = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + Ls(e.getUTCMonth() + 1) + "-" + Ls(e.getUTCDate()) + "T" + Ls(e.getUTCHours()) + ":" + Ls(e.getUTCMinutes()) + ":" + Ls(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function Qv(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function dn(t, e, r) {
  for (var s = 0, n = r.length; s < n; )
    e = t(e, r[s]), s += 1;
  return e;
}
function fP(t, e) {
  for (var r = 0, s = e.length, n = []; r < s; )
    t(e[r]) && (n[n.length] = e[r]), r += 1;
  return n;
}
function Hi(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var pP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Xe.init, t.prototype["@@transducer/result"] = Xe.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function hP(t) {
  return function(e) {
    return new pP(t, e);
  };
}
var dP = /* @__PURE__ */ K(/* @__PURE__ */ pr(["fantasy-land/filter", "filter"], hP, function(t, e) {
  return Hi(e) ? dn(function(r, s) {
    return t(e[s]) && (r[s] = e[s]), r;
  }, {}, Pr(e)) : (
    // else
    fP(t, e)
  );
})), mP = /* @__PURE__ */ K(function(e, r) {
  return dP(Qv(e), r);
});
function Zv(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return Ji(o, a) ? "<Circular>" : Zv(o, a);
  }, s = function(i, o) {
    return Hs(function(a) {
      return Vc(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + Hs(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + Hs(r, t).concat(s(t, mP(function(i) {
        return /^\d+$/.test(i);
      }, Pr(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : Vc(uP(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : Vc(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var n = t.toString();
        if (n !== "[object Object]")
          return n;
      }
      return "{" + s(t, Pr(t)).join(", ") + "}";
  }
}
var hs = /* @__PURE__ */ oe(function(e) {
  return Zv(e, []);
}), uf = /* @__PURE__ */ K(function(e, r) {
  if (e === r)
    return r;
  function s(c, l) {
    if (c > l != l > c)
      return l > c ? l : c;
  }
  var n = s(e, r);
  if (n !== void 0)
    return n;
  var i = s(typeof e, typeof r);
  if (i !== void 0)
    return i === typeof e ? e : r;
  var o = hs(e), a = s(o, hs(r));
  return a !== void 0 && a === o ? e : r;
}), vP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Xe.init, t.prototype["@@transducer/result"] = Xe.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), yP = function(e) {
  return function(r) {
    return new vP(e, r);
  };
}, mn = /* @__PURE__ */ K(/* @__PURE__ */ pr(["fantasy-land/map", "map"], yP, function(e, r) {
  switch (Object.prototype.toString.call(r)) {
    case "[object Function]":
      return pe(r.length, function() {
        return e.call(this, r.apply(this, arguments));
      });
    case "[object Object]":
      return dn(function(s, n) {
        return s[n] = e(r[n]), s;
      }, {}, Pr(r));
    default:
      return Hs(e, r);
  }
}));
const ws = Number.isInteger || function(e) {
  return e << 0 === e;
};
function ff(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function sa(t, e) {
  var r = t < 0 ? e.length + t : t;
  return ff(e) ? e.charAt(r) : e[r];
}
var vn = /* @__PURE__ */ K(function(e, r) {
  if (r != null)
    return ws(e) ? sa(e, r) : r[e];
}), pf = /* @__PURE__ */ K(function(e, r) {
  return mn(vn(e), r);
}), gP = /* @__PURE__ */ oe(function(e) {
  return kr(e) ? !0 : !e || typeof e != "object" || ff(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), Hh = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function ey(t, e, r) {
  return function(n, i, o) {
    if (gP(o))
      return t(n, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(n, i, o, "fantasy-land/reduce");
    if (o[Hh] != null)
      return r(n, i, o[Hh]());
    if (typeof o.next == "function")
      return r(n, i, o);
    if (typeof o.reduce == "function")
      return e(n, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function bP(t, e, r) {
  for (var s = 0, n = r.length; s < n; ) {
    if (e = t["@@transducer/step"](e, r[s]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    s += 1;
  }
  return t["@@transducer/result"](e);
}
var na = /* @__PURE__ */ K(function(e, r) {
  return ta(e.length, function() {
    return e.apply(r, arguments);
  });
});
function xP(t, e, r) {
  for (var s = r.next(); !s.done; ) {
    if (e = t["@@transducer/step"](e, s.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    s = r.next();
  }
  return t["@@transducer/result"](e);
}
function SP(t, e, r, s) {
  return t["@@transducer/result"](r[s](na(t["@@transducer/step"], t), e));
}
var hf = /* @__PURE__ */ ey(bP, SP, xP), wP = /* @__PURE__ */ function() {
  function t(e) {
    this.f = e;
  }
  return t.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  }, t.prototype["@@transducer/result"] = function(e) {
    return e;
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(e, r);
  }, t;
}();
function ty(t) {
  return new wP(t);
}
var Nr = /* @__PURE__ */ Be(function(t, e, r) {
  return hf(typeof t == "function" ? ty(t) : t, e, r);
}), OP = /* @__PURE__ */ oe(function(e) {
  return pe(Nr(uf, 0, pf("length", e)), function() {
    for (var r = 0, s = e.length; r < s; ) {
      if (!e[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
}), J = /* @__PURE__ */ oe(function(e) {
  return function() {
    return e;
  };
}), EP = /* @__PURE__ */ K(function(e, r) {
  return e && r;
}), $P = /* @__PURE__ */ oe(function(e) {
  return pe(Nr(uf, 0, pf("length", e)), function() {
    for (var r = 0, s = e.length; r < s; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function AP(t, e, r) {
  for (var s = r.next(); !s.done; )
    e = t(e, s.value), s = r.next();
  return e;
}
function jP(t, e, r, s) {
  return r[s](t, e);
}
var PP = /* @__PURE__ */ ey(dn, jP, AP), TP = /* @__PURE__ */ K(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(s) {
    return e(s)(r(s));
  } : PP(function(s, n) {
    return tP(s, mn(n, r));
  }, [], e);
}), _P = /* @__PURE__ */ K(function(e, r) {
  return e.apply(this, r);
}), df = /* @__PURE__ */ oe(function(e) {
  return pe(e.length, e);
});
function CP(t, e, r) {
  if (ws(t) && kr(r)) {
    var s = [].concat(r);
    return s[t] = e, s;
  }
  var n = {};
  for (var i in r)
    n[i] = r[i];
  return n[t] = e, n;
}
var qi = /* @__PURE__ */ oe(function(e) {
  return e == null;
}), R = /* @__PURE__ */ Be(function t(e, r, s) {
  if (e.length === 0)
    return r;
  var n = e[0];
  if (e.length > 1) {
    var i = !qi(s) && st(n, s) && typeof s[n] == "object" ? s[n] : ws(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return CP(n, r, s);
}), RP = /* @__PURE__ */ Be(function(e, r, s) {
  return R([e], r, s);
});
function mf(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var IP = /* @__PURE__ */ K(function(e, r) {
  var s = pe(e, r);
  return pe(e, function() {
    return dn(TP, mn(s, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), vf = /* @__PURE__ */ oe(function(e) {
  return IP(e.length, e);
}), Dr = /* @__PURE__ */ K(function(e, r) {
  return mf(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : vf(EP)(e, r);
});
function ry(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function sy(t, e, r) {
  if (r || (r = new MP()), FP(t))
    return t;
  var s = function(i) {
    var o = r.get(t);
    if (o)
      return o;
    r.set(t, i);
    for (var a in t)
      Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a]);
    return i;
  };
  switch (nt(t)) {
    case "Object":
      return s(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return s(Array(t.length));
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return ry(t);
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "BigInt64Array":
    case "BigUint64Array":
      return t.slice();
    default:
      return t;
  }
}
function FP(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var MP = /* @__PURE__ */ function() {
  function t() {
    this.map = {}, this.length = 0;
  }
  return t.prototype.set = function(e, r) {
    var s = this.hash(e), n = this.map[s];
    n || (this.map[s] = n = []), n.push([e, r]), this.length += 1;
  }, t.prototype.hash = function(e) {
    var r = [];
    for (var s in e)
      r.push(Object.prototype.toString.call(e[s]));
    return r.join();
  }, t.prototype.get = function(e) {
    if (this.length <= 180) {
      for (var r in this.map)
        for (var o = this.map[r], s = 0; s < o.length; s += 1) {
          var n = o[s];
          if (n[0] === e)
            return n[1];
        }
      return;
    }
    var i = this.hash(e), o = this.map[i];
    if (o)
      for (var s = 0; s < o.length; s += 1) {
        var n = o[s];
        if (n[0] === e)
          return n[1];
      }
  }, t;
}(), kP = /* @__PURE__ */ oe(function(e) {
  return function(r, s) {
    return e(r, s) ? -1 : e(s, r) ? 1 : 0;
  };
}), NP = /* @__PURE__ */ oe(function(e) {
  return !e;
}), yn = /* @__PURE__ */ vf(NP);
function DP(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function yf(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var s = arguments[r - 1];
    return kr(s) || typeof s[t] != "function" ? e.apply(this, arguments) : s[t].apply(s, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var gn = /* @__PURE__ */ Be(/* @__PURE__ */ yf("slice", function(e, r, s) {
  return Array.prototype.slice.call(s, e, r);
})), ny = /* @__PURE__ */ oe(/* @__PURE__ */ yf("tail", /* @__PURE__ */ gn(1, 1 / 0)));
function Se() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return ta(arguments[0].length, Nr(DP, arguments[0], ny(arguments)));
}
var LP = /* @__PURE__ */ oe(function(t) {
  return sa(0, t);
});
function VP(t) {
  return t;
}
var gf = /* @__PURE__ */ oe(VP), BP = /* @__PURE__ */ K(function(e, r) {
  return pe(Nr(uf, 0, pf("length", r)), function() {
    var s = arguments, n = this;
    return e.apply(n, Hs(function(i) {
      return i.apply(n, s);
    }, r));
  });
}), UP = /* @__PURE__ */ function() {
  function t(e, r, s, n) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = s, this.xf = n, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = Xe.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (st(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var s = this.keyFn(r);
    return this.inputs[s] = this.inputs[s] || [s, sy(this.valueAcc)], this.inputs[s][1] = this.valueFn(this.inputs[s][1], r), e;
  }, t;
}();
function JP(t, e, r) {
  return function(s) {
    return new UP(t, e, r, s);
  };
}
var HP = /* @__PURE__ */ af(4, [], /* @__PURE__ */ pr([], JP, function(e, r, s, n) {
  var i = ty(function(o, a) {
    var c = s(a), l = e(st(c, o) ? o[c] : sy(r), a);
    return l && l["@@transducer/reduced"] ? ra(o) : (o[c] = l, o);
  });
  return hf(i, {}, n);
})), ds = /* @__PURE__ */ K(function(e, r) {
  return r == null || r !== r ? e : r;
}), qP = /* @__PURE__ */ function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !qh(e, !0, this);
  }, t.prototype.has = function(e) {
    return qh(e, !1, this);
  }, t;
}();
function qh(t, e, r) {
  var s = typeof t, n, i;
  switch (s) {
    case "string":
    case "number":
      return t === 0 && 1 / t === -1 / 0 ? r._items["-0"] ? !0 : (e && (r._items["-0"] = !0), !1) : r._nativeSet !== null ? e ? (n = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === n) : r._nativeSet.has(t) : s in r._items ? t in r._items[s] ? !0 : (e && (r._items[s][t] = !0), !1) : (e && (r._items[s] = {}, r._items[s][t] = !0), !1);
    case "boolean":
      if (s in r._items) {
        var o = t ? 1 : 0;
        return r._items[s][o] ? !0 : (e && (r._items[s][o] = !0), !1);
      } else
        return e && (r._items[s] = t ? [!1, !0] : [!0, !1]), !1;
    case "function":
      return r._nativeSet !== null ? e ? (n = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === n) : r._nativeSet.has(t) : s in r._items ? Ji(t, r._items[s]) ? !0 : (e && r._items[s].push(t), !1) : (e && (r._items[s] = [t]), !1);
    case "undefined":
      return r._items[s] ? !0 : (e && (r._items[s] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    default:
      return s = Object.prototype.toString.call(t), s in r._items ? Ji(t, r._items[s]) ? !0 : (e && r._items[s].push(t), !1) : (e && (r._items[s] = [t]), !1);
  }
}
var zP = /* @__PURE__ */ K(function(e, r) {
  for (var s = [], n = 0, i = e.length, o = r.length, a = new qP(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; n < i; )
    a.add(e[n]) && (s[s.length] = e[n]), n += 1;
  return s;
}), GP = /* @__PURE__ */ Be(function(e, r, s) {
  var n = Array.prototype.slice.call(s, 0);
  return n.splice(e, r), n;
});
function KP(t, e) {
  if (e == null)
    return e;
  if (ws(t) && kr(e))
    return GP(t, 1, e);
  var r = {};
  for (var s in e)
    r[s] = e[s];
  return delete r[t], r;
}
function WP(t, e) {
  if (ws(t) && kr(e))
    return [].concat(e);
  var r = {};
  for (var s in e)
    r[s] = e[s];
  return r;
}
var Ye = /* @__PURE__ */ K(function t(e, r) {
  if (r == null)
    return r;
  switch (e.length) {
    case 0:
      return r;
    case 1:
      return KP(e[0], r);
    default:
      var s = e[0], n = Array.prototype.slice.call(e, 1);
      return r[s] == null ? WP(s, r) : RP(s, t(n, r[s]), r);
  }
}), YP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = Xe.init, t.prototype["@@transducer/result"] = Xe.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var s = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? ra(s) : s;
  }, t;
}();
function XP(t) {
  return function(e) {
    return new YP(t, e);
  };
}
var QP = /* @__PURE__ */ K(/* @__PURE__ */ pr(["take"], XP, function(e, r) {
  return gn(0, e < 0 ? 1 / 0 : e, r);
}));
function ZP(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return gn(0, r + 1, e);
}
var eT = /* @__PURE__ */ function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = Xe.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = hf(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
}();
function tT(t) {
  return function(e) {
    return new eT(t, e);
  };
}
var rT = /* @__PURE__ */ K(/* @__PURE__ */ pr([], tT, ZP)), ia = /* @__PURE__ */ oe(function(t) {
  return sa(-1, t);
}), sT = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Xe.init, t.prototype["@@transducer/result"] = Xe.result, t.prototype["@@transducer/step"] = function(e, r) {
    if (this.f) {
      if (this.f(r))
        return e;
      this.f = null;
    }
    return this.xf["@@transducer/step"](e, r);
  }, t;
}();
function nT(t) {
  return function(e) {
    return new sT(t, e);
  };
}
var iT = /* @__PURE__ */ K(/* @__PURE__ */ pr(["dropWhile"], nT, function(e, r) {
  for (var s = 0, n = r.length; s < n && e(r[s]); )
    s += 1;
  return gn(s, 1 / 0, r);
})), oT = /* @__PURE__ */ K(function(e, r) {
  return e || r;
}), aT = /* @__PURE__ */ K(function(e, r) {
  return mf(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : vf(oT)(e, r);
});
function cT(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var lT = /* @__PURE__ */ oe(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : kr(e) ? [] : ff(e) ? "" : Hi(e) ? {} : Xv(e) ? /* @__PURE__ */ function() {
    return arguments;
  }() : cT(e) ? e.constructor.from("") : void 0;
}), uT = /* @__PURE__ */ oe(function(e) {
  return pe(e.length, function(r, s) {
    var n = Array.prototype.slice.call(arguments, 0);
    return n[0] = s, n[1] = r, e.apply(this, n);
  });
}), fT = /* @__PURE__ */ K(/* @__PURE__ */ yf("groupBy", /* @__PURE__ */ HP(function(t, e) {
  return t.push(e), t;
}, []))), pT = /* @__PURE__ */ K(function(e, r) {
  if (e.length === 0 || qi(r))
    return !1;
  for (var s = r, n = 0; n < e.length; )
    if (!qi(s) && st(e[n], s))
      s = s[e[n]], n += 1;
    else
      return !1;
  return !0;
}), qs = /* @__PURE__ */ K(function(e, r) {
  return pT([e], r);
}), Kt = function(t, e) {
  switch (arguments.length) {
    case 0:
      return Kt;
    case 1:
      return /* @__PURE__ */ function() {
        return function r(s) {
          switch (arguments.length) {
            case 0:
              return r;
            default:
              return Js(t, s);
          }
        };
      }();
    default:
      return Js(t, e);
  }
}, bf = /* @__PURE__ */ Be(function(e, r, s) {
  return pe(Math.max(e.length, r.length, s.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : s.apply(this, arguments);
  });
}), hT = /* @__PURE__ */ K(Ji), dT = /* @__PURE__ */ gn(0, -1), xf = /* @__PURE__ */ K(function(e, r) {
  return pe(e + 1, function() {
    var s = arguments[e];
    if (s != null && mf(s[r]))
      return s[r].apply(s, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(hs(s) + ' does not have a method named "' + r + '"');
  });
}), bn = /* @__PURE__ */ oe(function(e) {
  return e != null && Gt(e, lT(e));
}), iy = /* @__PURE__ */ oe(function(e) {
  return !bn(e);
}), oy = /* @__PURE__ */ xf(1, "join");
function zh(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var mT = /* @__PURE__ */ K(function(e, r) {
  return function(s) {
    return function(n) {
      return mn(function(i) {
        return r(i, n);
      }, s(e(n)));
    };
  };
});
function Sf(t, e) {
  for (var r = e, s = 0; s < t.length; s += 1) {
    if (r == null)
      return;
    var n = t[s];
    ws(n) ? r = sa(n, r) : r = r[n];
  }
  return r;
}
var vT = /* @__PURE__ */ K(function(e, r) {
  return dn(function(s, n) {
    return s[n] = e(r[n], n, r), s;
  }, {}, Pr(r));
}), yT = /* @__PURE__ */ Be(function(e, r, s) {
  var n = {}, i;
  r = r || {}, s = s || {};
  for (i in r)
    st(i, r) && (n[i] = st(i, s) ? e(i, r[i], s[i]) : r[i]);
  for (i in s)
    st(i, s) && !st(i, n) && (n[i] = s[i]);
  return n;
}), gT = /* @__PURE__ */ Be(function t(e, r, s) {
  return yT(function(n, i, o) {
    return Hi(i) && Hi(o) ? t(e, i, o) : e(n, i, o);
  }, r, s);
}), oa = /* @__PURE__ */ K(function(e, r) {
  return gT(function(s, n, i) {
    return i;
  }, e, r);
}), bT = /* @__PURE__ */ K(function(e, r) {
  return cf(Qv(e), r);
}), ay = function(t) {
  return {
    value: t,
    map: function(e) {
      return ay(e(t));
    }
  };
}, xT = /* @__PURE__ */ Be(function(e, r, s) {
  return e(function(n) {
    return ay(r(n));
  })(s).value;
}), Ce = /* @__PURE__ */ K(Sf), cy = /* @__PURE__ */ Be(function(e, r, s) {
  return ds(e, Sf(r, s));
}), aa = /* @__PURE__ */ Be(function(e, r, s) {
  return e(Sf(r, s));
}), ly = /* @__PURE__ */ K(function(e, r) {
  for (var s = {}, n = 0; n < e.length; )
    e[n] in r && (s[e[n]] = r[e[n]]), n += 1;
  return s;
}), uy = /* @__PURE__ */ Be(function(e, r, s) {
  return Gt(e, vn(r, s));
}), zi = /* @__PURE__ */ Be(function(e, r, s) {
  return ds(e, vn(r, s));
}), ST = /* @__PURE__ */ Be(function(e, r, s) {
  return e(vn(r, s));
}), wT = /* @__PURE__ */ K(function(e, r) {
  if (!(zh(e) && zh(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var s = Array(e < r ? r - e : 0), n = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < n; )
    s[i] = i + e, i += 1;
  return s;
}), OT = /* @__PURE__ */ oe(ra), ms = /* @__PURE__ */ Be(function(e, r, s) {
  return s.replace(e, r);
}), ET = /* @__PURE__ */ K(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), wf = /* @__PURE__ */ xf(1, "split"), fy = /* @__PURE__ */ K(function(t, e) {
  return Gt(QP(t.length, e), t);
});
function $T(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var AT = /* @__PURE__ */ K(function(e, r) {
  if (!$T(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + hs(e));
  return ry(e).test(r);
}), jT = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = Xe.init, t.prototype["@@transducer/result"] = Xe.result, t.prototype["@@transducer/step"] = function(e, r) {
    return Ui(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
}();
function PT(t) {
  return function(e) {
    return new jT(t, e);
  };
}
var TT = /* @__PURE__ */ K(/* @__PURE__ */ pr([], PT, function(t, e) {
  for (var r = 0, s = e.length, n = [], i; r < s; )
    i = e[r], Ui(t, i, n) || (n[n.length] = i), r += 1;
  return n;
})), _T = /* @__PURE__ */ Be(function(e, r, s) {
  return e(s) ? r(s) : s;
}), ca = J(void 0), hr = Gt(ca()), py = yn(hr), hy = Gt(null), dy = yn(hy), CT = yn(qi), RT = pe(1, Se(nt, Kt("GeneratorFunction"))), IT = pe(1, Se(nt, Kt("AsyncFunction"))), Wt = $P([Se(nt, Kt("Function")), RT, IT]), my = pe(1, Wt(Array.isArray) ? Array.isArray : Se(nt, Kt("Array"))), FT = Dr(my, bn), MT = Dr(my, iy), Lr = pe(1, Se(nt, Kt("String"))), vy = Gt("");
function Ol(t) {
  "@babel/helpers - typeof";
  return Ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ol(t);
}
var yy = function(e) {
  return Ol(e) === "object";
}, kT = pe(1, Dr(dy, aT(yy, Wt))), NT = yn(kT), la = OP([Lr, NT, iy]), DT = yn(Wt), LT = pe(1, Dr(dy, yy)), VT = Se(nt, Kt("Object")), BT = Se(hs, Gt(hs(Object))), UT = aa(Dr(Wt, BT), ["constructor"]), Vt = pe(1, function(t) {
  if (!LT(t) || !VT(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return hy(e) ? !0 : UT(e);
}), JT = pe(1, Se(nt, Kt("Number"))), HT = Dr(JT, isFinite), qT = pe(1, HT), zT = Wt(Number.isFinite) ? pe(1, na(Number.isFinite, Number)) : qT, GT = Dr(zT, BP(Gt, [Math.floor, gf])), KT = pe(1, GT), WT = Wt(Number.isInteger) ? pe(1, na(Number.isInteger, Number)) : KT, YT = pe(1, Se(nt, Kt("RegExp")));
function XT(t) {
  return t_(t) || e_(t) || ZT(t) || QT();
}
function QT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZT(t, e) {
  if (t) {
    if (typeof t == "string") return El(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? El(t, e) : void 0;
  }
}
function e_(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function t_(t) {
  if (Array.isArray(t)) return El(t);
}
function El(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, s = Array(e); r < e; r++) s[r] = t[r];
  return s;
}
var r_ = kP(function(t, e) {
  return t.length > e.length;
}), s_ = Se(ET(r_), LP, vn("length")), n_ = df(function(t, e, r) {
  var s = r.apply(void 0, XT(t));
  return CT(s) ? OT(s) : e;
}), i_ = function(e) {
  var r = s_(e);
  return pe(r, function() {
    for (var s = arguments.length, n = new Array(s), i = 0; i < s; i++)
      n[i] = arguments[i];
    return Nr(n_(n), void 0, e);
  });
}, gy = bf(MT, i_, ca), ua = uT(hT), sn = pe(3, function(t, e, r) {
  var s = Ce(t, r), n = Ce(dT(t), r);
  if (!DT(s) && !FT(t)) {
    var i = na(s, n);
    return _P(i, e);
  }
}), o_ = _T(Lr, ms(/[.*+?^${}()|[\]\\-]/g, "\\$&")), a_ = function(e, r, s) {
  if (s == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, Gh = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, c_ = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, l_ = function(e, r, s) {
  a_(e, r, s), Gh(s, "str"), Gh(r, "replaceValue"), c_(e);
  var n = new RegExp(YT(e) ? e : o_(e), "g");
  return ms(n, r, s);
}, u_ = pe(3, l_), f_ = xf(2, "replaceAll"), p_ = Wt(String.prototype.replaceAll) ? f_ : u_, h_ = df(function(t, e) {
  return Se(wf(""), rT(ua(t)), oy(""))(e);
}), Of = df(function(t, e) {
  return Se(wf(""), iT(ua(t)), oy(""))(e);
}), by = { exports: {} }, we = by.exports = {}, St, wt;
function $l() {
  throw new Error("setTimeout has not been defined");
}
function Al() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? St = setTimeout : St = $l;
  } catch {
    St = $l;
  }
  try {
    typeof clearTimeout == "function" ? wt = clearTimeout : wt = Al;
  } catch {
    wt = Al;
  }
})();
function xy(t) {
  if (St === setTimeout)
    return setTimeout(t, 0);
  if ((St === $l || !St) && setTimeout)
    return St = setTimeout, setTimeout(t, 0);
  try {
    return St(t, 0);
  } catch {
    try {
      return St.call(null, t, 0);
    } catch {
      return St.call(this, t, 0);
    }
  }
}
function d_(t) {
  if (wt === clearTimeout)
    return clearTimeout(t);
  if ((wt === Al || !wt) && clearTimeout)
    return wt = clearTimeout, clearTimeout(t);
  try {
    return wt(t);
  } catch {
    try {
      return wt.call(null, t);
    } catch {
      return wt.call(this, t);
    }
  }
}
var Ft = [], ss = !1, wr, Si = -1;
function m_() {
  !ss || !wr || (ss = !1, wr.length ? Ft = wr.concat(Ft) : Si = -1, Ft.length && Sy());
}
function Sy() {
  if (!ss) {
    var t = xy(m_);
    ss = !0;
    for (var e = Ft.length; e; ) {
      for (wr = Ft, Ft = []; ++Si < e; )
        wr && wr[Si].run();
      Si = -1, e = Ft.length;
    }
    wr = null, ss = !1, d_(t);
  }
}
we.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  Ft.push(new wy(t, e)), Ft.length === 1 && !ss && xy(Sy);
};
function wy(t, e) {
  this.fun = t, this.array = e;
}
wy.prototype.run = function() {
  this.fun.apply(null, this.array);
};
we.title = "browser";
we.browser = !0;
we.env = {};
we.argv = [];
we.version = "";
we.versions = {};
function Yt() {
}
we.on = Yt;
we.addListener = Yt;
we.once = Yt;
we.off = Yt;
we.removeListener = Yt;
we.removeAllListeners = Yt;
we.emit = Yt;
we.prependListener = Yt;
we.prependOnceListener = Yt;
we.listeners = function(t) {
  return [];
};
we.binding = function(t) {
  throw new Error("process.binding is not supported");
};
we.cwd = function() {
  return "/";
};
we.chdir = function(t) {
  throw new Error("process.chdir is not supported");
};
we.umask = function() {
  return 0;
};
var v_ = by.exports;
const Gi = /* @__PURE__ */ Go(v_), Ef = () => aa(AT(/^win/), ["platform"], Gi), fa = (t) => {
  try {
    const e = new URL(t);
    return h_(":", e.protocol);
  } catch {
    return;
  }
}, y_ = Se(fa, py), Oy = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, $f = (t) => {
  if (Gi.browser)
    return !1;
  const e = fa(t);
  return hr(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, pa = (t) => {
  const e = fa(t);
  return e === "http" || e === "https";
}, g_ = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, Af = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], s = zi(!1, "keepFileProtocol", e), n = zi(Ef, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), n() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), s ? i = `file:///${i}` : (o = !1, i = n() ? i : `/${i}`)), n() && !o && (i = p_("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, Ey = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  Ef() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let s = 0; s < e.length; s += 2)
    r = r.replace(e[s], e[s + 1]);
  return r;
}, jf = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, le = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, Ki = () => {
  if (Gi.browser)
    return le(globalThis.location.href);
  const t = Gi.cwd(), e = ia(t);
  return ["/", "\\"].includes(e) ? t : t + (Ef() ? "\\" : "/");
}, _e = (t, e) => {
  const r = new URL(e, new URL(t, "resolve://"));
  if (r.protocol === "resolve:") {
    const {
      pathname: s,
      search: n,
      hash: i
    } = r;
    return s + n + i;
  }
  return r.toString();
}, xn = (t) => {
  if ($f(t))
    return Ey(Af(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, lt = (t) => $f(t) ? Af(t) : decodeURI(t), b_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: Ki,
  fromFileSystemPath: Ey,
  getExtension: Oy,
  getHash: jf,
  getProtocol: fa,
  hasProtocol: y_,
  isFileSystemPath: $f,
  isHttpUrl: pa,
  isURI: g_,
  resolve: _e,
  sanitize: xn,
  stripHash: le,
  toFileSystemPath: Af,
  unsanitize: lt
}, Symbol.toStringTag, { value: "Module" }));
let nn = class {
  constructor({
    uri: e,
    mediaType: r = "text/plain",
    data: s,
    parseResult: n
  }) {
    x(this, "uri");
    x(this, "mediaType");
    x(this, "data");
    x(this, "parseResult");
    this.uri = e, this.mediaType = r, this.data = s, this.parseResult = n;
  }
  get extension() {
    return Lr(this.uri) ? Oy(this.uri) : "";
  }
  toString() {
    return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(nt(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
  }
};
class vs {
  constructor({
    refs: e = [],
    circular: r = !1
  } = {}) {
    x(this, "rootRef");
    x(this, "refs");
    x(this, "circular");
    this.refs = [], this.circular = r, e.forEach(this.add.bind(this));
  }
  get size() {
    return this.refs.length;
  }
  add(e) {
    return this.has(e) || (this.refs.push(e), this.rootRef = this.rootRef === void 0 ? e : this.rootRef, e.refSet = this), this;
  }
  merge(e) {
    for (const r of e.values())
      this.add(r);
    return this;
  }
  has(e) {
    const r = Lr(e) ? e : e.uri;
    return py(this.find((s) => s.uri === r));
  }
  find(e) {
    return this.refs.find(e);
  }
  *values() {
    yield* this.refs;
  }
  clean() {
    this.refs.forEach((e) => {
      e.refSet = void 0;
    }), this.rootRef = void 0, this.refs.length = 0;
  }
}
const $y = {
  parse: {
    /**
     * This is media type that will be used to parse the input.
     */
    mediaType: "text/plain",
    /**
     * Determines how different types of files will be parsed.
     *
     * You can add additional parsers of your own, replace an existing one with
     * your own implementation, or remove any resolver by removing it from the list.
     * It's recommended to keep the order of parser from most specific ones to most generic ones.
     */
    parsers: [],
    /**
     * These options are merged with parser plugin instance before the plugin is run.
     */
    parserOpts: {}
  },
  resolve: {
    /**
     * baseURI serves as a base for all relative URL found in ApiDOM references.
     */
    baseURI: "",
    /**
     * Determines how References will be resolved.
     *
     * You can add additional resolvers of your own, replace an existing one with
     * your own implementation, or remove any resolver by removing it from the list.
     */
    resolvers: [],
    /**
     * These options are merged with resolver plugin instance before the plugin is run.
     */
    resolverOpts: {},
    /**
     * Determines strategies how References are identified and processed by resolvers.
     * Strategy is determined by media type.
     *
     * You can add additional resolver strategies of your own, replace an existing one with
     * your own implementation, or remove any resolve strategy by removing it from the list.
     */
    strategies: [],
    /**
     * These options are available in resolver strategy `canResolve` and `resolve` methods.
     */
    strategyOpts: {},
    /**
     * Determines whether internal references will be resolved.
     * Internal references will simply be ignored.
     */
    internal: !0,
    /**
     * Determines whether external references will be resolved.
     * If this option is disabled, then none of above resolvers will be called.
     * Instead, external references will simply be ignored.
     */
    external: !0,
    /**
     * Determines the maximum depth of resolve algorithms.
     * By default, there is no limit.
     *
     * This option tracks the depth of the file tree not the depth of the dereference path.
     *
     * It can be set to any positive integer number or zero (0).
     *
     * The resolver should throw MaximumResolverDepthError if resolution depth
     * is exceeded by this option.
     */
    maxDepth: 1 / 0
  },
  dereference: {
    /**
     * Determines strategies how ApiDOM is dereferenced.
     * Strategy is determined by media type or by inspecting ApiDOM to be dereferenced.
     *
     * You can add additional dereference strategies of your own, replace an existing one with
     * your own implementation, or remove any dereference strategy by removing it from the list.
     */
    strategies: [],
    /**
     * These options are available in dereference strategy `canDereference` and `dereference` methods.
     */
    strategyOpts: {},
    /**
     * This option accepts an instance of pre-computed ReferenceSet.
     * If provided it will speed up the dereferencing significantly as the external
     * resolution doesn't need to happen anymore.
     */
    refSet: null,
    /**
     * Determines the maximum depth of dereferencing.
     * By default, there is no limit.
     *
     * The maxDepth represents a number of references that needed to be followed
     * before the eventual value was reached.
     *
     * It can be set to any positive integer number or zero (0).
     *
     * The dereferencing should throw MaximumDereferenceDepthError if dereferencing depth
     * is exceeded by this option.
     */
    maxDepth: 1 / 0,
    /**
     * Determines how circular references are handled.
     *
     * "ignore" - circular reference are allowed
     * "replace" - circular references are not allowed and are translated to RefElement
     * "error" - circular references are not allowed and will throw an error
     */
    circular: "ignore",
    /**
     * This function is used to replace circular references when `circular` option is set to "replace".
     * By default, it's an identity function. It means that circular references are replaced with RefElement.
     */
    circularReplacer: gf,
    /**
     * Determines whether the dereferencing process will be immutable.
     * By default, the dereferencing process is immutable, which means that the original
     * ApiDOM passed to the dereference process is NOT modified.
     *
     * true - the dereferencing process will be immutable (deep cloning of ApiDOM is involved)
     * false - the dereferencing process will be mutable
     */
    immutable: !0
  },
  bundle: {
    /**
     * Determines strategies how ApiDOM is bundled.
     * Strategy is determined by media type or by inspecting ApiDOM to be bundled.
     *
     * You can add additional bundle strategies of your own, replace an existing one with
     * your own implementation, or remove any bundle strategy by removing it from the list.
     */
    strategies: [],
    /**
     * This option accepts an instance of pre-computed ReferenceSet.
     * If provided it will speed up the bundling significantly as the external
     * resolution doesn't need to happen anymore.
     */
    refSet: null,
    /**
     * Determines the maximum depth of bundling.
     * By default, there is no limit.
     *
     * The maxDepth represents a number of references that needed to be followed
     * before the eventual value was reached.
     *
     * It can be set to any positive integer number or zero (0).
     *
     * The bundling should throw MaximumBundleDepthError if bundling depth
     * is exceeded by this option.
     */
    maxDepth: 1 / 0
  }
}, x_ = mT(Ce(["resolve", "baseURI"]), R(["resolve", "baseURI"])), S_ = (t) => vy(t) ? Ki() : t, Ay = (t, e) => {
  const r = oa(t, e);
  return xT(x_, S_, r);
};
class w_ extends ye {
  constructor(r, s) {
    super(r, {
      cause: s.cause
    });
    x(this, "plugin");
    this.plugin = s.plugin;
  }
}
const Pf = async (t, e, r) => {
  const s = await Promise.all(r.map(sn([t], e)));
  return r.filter((n, i) => s[i]);
}, Tf = async (t, e, r) => {
  let s;
  for (const n of r)
    try {
      const i = await n[t].call(n, ...e);
      return {
        plugin: n,
        result: i
      };
    } catch (i) {
      s = new w_("Error while running plugin", {
        cause: i,
        plugin: n
      });
    }
  return Promise.reject(s);
};
class jl extends ye {
}
class _f extends ye {
}
class jy extends _f {
}
class Py extends jy {
}
const O_ = async (t, e) => {
  const r = e.resolve.resolvers.map((n) => {
    const i = Object.create(n);
    return Object.assign(i, e.resolve.resolverOpts);
  }), s = await Pf("canRead", [t, e], r);
  if (bn(s))
    throw new Py(t.uri);
  try {
    const {
      result: n
    } = await Tf("read", [t], s);
    return n;
  } catch (n) {
    throw new _f(`Error while reading file "${t.uri}"`, {
      cause: n
    });
  }
}, E_ = async (t, e) => {
  const r = e.parse.parsers.map((n) => {
    const i = Object.create(n);
    return Object.assign(i, e.parse.parserOpts);
  }), s = await Pf("canParse", [t, e], r);
  if (bn(s))
    throw new Py(t.uri);
  try {
    const {
      plugin: n,
      result: i
    } = await Tf("parse", [t, e], s);
    return !n.allowEmpty && i.isEmpty ? Promise.reject(new jl(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (n) {
    throw new jl(`Error while parsing file "${t.uri}"`, {
      cause: n
    });
  }
}, $_ = async (t, e) => {
  const r = new nn({
    uri: xn(le(t)),
    mediaType: e.parse.mediaType
  }), s = await O_(r, e);
  return E_(new nn({
    ...r,
    data: s
  }), e);
};
function A_(t) {
  return t === null;
}
var j_ = A_, P_ = typeof ir == "object" && ir && ir.Object === Object && ir, Ty = P_, T_ = Ty, __ = typeof self == "object" && self && self.Object === Object && self, C_ = T_ || __ || Function("return this")(), Xt = C_, R_ = Xt, I_ = R_.Symbol, Cf = I_, Kh = Cf, _y = Object.prototype, F_ = _y.hasOwnProperty, M_ = _y.toString, Vs = Kh ? Kh.toStringTag : void 0;
function k_(t) {
  var e = F_.call(t, Vs), r = t[Vs];
  try {
    t[Vs] = void 0;
    var s = !0;
  } catch {
  }
  var n = M_.call(t);
  return s && (e ? t[Vs] = r : delete t[Vs]), n;
}
var N_ = k_, D_ = Object.prototype, L_ = D_.toString;
function V_(t) {
  return L_.call(t);
}
var B_ = V_, Wh = Cf, U_ = N_, J_ = B_, H_ = "[object Null]", q_ = "[object Undefined]", Yh = Wh ? Wh.toStringTag : void 0;
function z_(t) {
  return t == null ? t === void 0 ? q_ : H_ : Yh && Yh in Object(t) ? U_(t) : J_(t);
}
var Vr = z_, G_ = Array.isArray, ha = G_;
function K_(t) {
  return t != null && typeof t == "object";
}
var Br = K_, W_ = Vr, Y_ = ha, X_ = Br, Q_ = "[object String]";
function Z_(t) {
  return typeof t == "string" || !Y_(t) && X_(t) && W_(t) == Q_;
}
var eC = Z_, tC = Vr, rC = Br, sC = "[object Number]";
function nC(t) {
  return typeof t == "number" || rC(t) && tC(t) == sC;
}
var iC = nC, oC = Vr, aC = Br, cC = "[object Boolean]";
function lC(t) {
  return t === !0 || t === !1 || aC(t) && oC(t) == cC;
}
var uC = lC;
function fC(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var da = fC;
let pC = class {
  constructor(e) {
    this.namespace = e || new this.Namespace();
  }
  /**
   * @param {Element} element
   * @returns {object}
   */
  serialise(e) {
    if (!(e instanceof this.namespace.elements.Element))
      throw new TypeError(`Given element \`${e}\` is not an Element instance`);
    const r = {
      element: e.element
    };
    e._meta && e._meta.length > 0 && (r.meta = this.serialiseObject(e.meta)), e._attributes && e._attributes.length > 0 && (r.attributes = this.serialiseObject(e.attributes));
    const s = this.serialiseContent(e.content);
    return s !== void 0 && (r.content = s), r;
  }
  /**
   * @param {object} value
   * @returns {Element}
   */
  deserialise(e) {
    if (!e.element)
      throw new Error("Given value is not an object containing an element name");
    const r = this.namespace.getElementClass(e.element), s = new r();
    s.element !== e.element && (s.element = e.element), e.meta && this.deserialiseObject(e.meta, s.meta), e.attributes && this.deserialiseObject(e.attributes, s.attributes);
    const n = this.deserialiseContent(e.content);
    return (n !== void 0 || s.content === null) && (s.content = n), s;
  }
  // Private API
  serialiseContent(e) {
    if (e instanceof this.namespace.elements.Element)
      return this.serialise(e);
    if (e instanceof this.namespace.KeyValuePair) {
      const r = {
        key: this.serialise(e.key)
      };
      return e.value && (r.value = this.serialise(e.value)), r;
    }
    return e && e.map ? e.length === 0 ? void 0 : e.map(this.serialise, this) : e;
  }
  deserialiseContent(e) {
    if (e) {
      if (e.element)
        return this.deserialise(e);
      if (e.key) {
        const r = new this.namespace.KeyValuePair(this.deserialise(e.key));
        return e.value && (r.value = this.deserialise(e.value)), r;
      }
      if (e.map)
        return e.map(this.deserialise, this);
    }
    return e;
  }
  serialiseObject(e) {
    const r = {};
    if (e.forEach((s, n) => {
      s && (r[n.toValue()] = this.serialise(s));
    }), Object.keys(r).length !== 0)
      return r;
  }
  deserialiseObject(e, r) {
    Object.keys(e).forEach((s) => {
      r.set(s, this.deserialise(e[s]));
    });
  }
};
var hC = pC;
function dC() {
  this.__data__ = [], this.size = 0;
}
var mC = dC;
function vC(t, e) {
  return t === e || t !== t && e !== e;
}
var Cy = vC, yC = Cy;
function gC(t, e) {
  for (var r = t.length; r--; )
    if (yC(t[r][0], e))
      return r;
  return -1;
}
var ma = gC, bC = ma, xC = Array.prototype, SC = xC.splice;
function wC(t) {
  var e = this.__data__, r = bC(e, t);
  if (r < 0)
    return !1;
  var s = e.length - 1;
  return r == s ? e.pop() : SC.call(e, r, 1), --this.size, !0;
}
var OC = wC, EC = ma;
function $C(t) {
  var e = this.__data__, r = EC(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var AC = $C, jC = ma;
function PC(t) {
  return jC(this.__data__, t) > -1;
}
var TC = PC, _C = ma;
function CC(t, e) {
  var r = this.__data__, s = _C(r, t);
  return s < 0 ? (++this.size, r.push([t, e])) : r[s][1] = e, this;
}
var RC = CC, IC = mC, FC = OC, MC = AC, kC = TC, NC = RC;
function Os(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
Os.prototype.clear = IC;
Os.prototype.delete = FC;
Os.prototype.get = MC;
Os.prototype.has = kC;
Os.prototype.set = NC;
var va = Os, DC = va;
function LC() {
  this.__data__ = new DC(), this.size = 0;
}
var VC = LC;
function BC(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
var UC = BC;
function JC(t) {
  return this.__data__.get(t);
}
var HC = JC;
function qC(t) {
  return this.__data__.has(t);
}
var zC = qC, GC = Vr, KC = da, WC = "[object AsyncFunction]", YC = "[object Function]", XC = "[object GeneratorFunction]", QC = "[object Proxy]";
function ZC(t) {
  if (!KC(t))
    return !1;
  var e = GC(t);
  return e == YC || e == XC || e == WC || e == QC;
}
var Ry = ZC, eR = Xt, tR = eR["__core-js_shared__"], rR = tR, Bc = rR, Xh = function() {
  var t = /[^.]+$/.exec(Bc && Bc.keys && Bc.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function sR(t) {
  return !!Xh && Xh in t;
}
var nR = sR, iR = Function.prototype, oR = iR.toString;
function aR(t) {
  if (t != null) {
    try {
      return oR.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Iy = aR, cR = Ry, lR = nR, uR = da, fR = Iy, pR = /[\\^$.*+?()[\]{}|]/g, hR = /^\[object .+?Constructor\]$/, dR = Function.prototype, mR = Object.prototype, vR = dR.toString, yR = mR.hasOwnProperty, gR = RegExp(
  "^" + vR.call(yR).replace(pR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bR(t) {
  if (!uR(t) || lR(t))
    return !1;
  var e = cR(t) ? gR : hR;
  return e.test(fR(t));
}
var xR = bR;
function SR(t, e) {
  return t == null ? void 0 : t[e];
}
var wR = SR, OR = xR, ER = wR;
function $R(t, e) {
  var r = ER(t, e);
  return OR(r) ? r : void 0;
}
var Es = $R, AR = Es, jR = Xt, PR = AR(jR, "Map"), Rf = PR, TR = Es, _R = TR(Object, "create"), ya = _R, Qh = ya;
function CR() {
  this.__data__ = Qh ? Qh(null) : {}, this.size = 0;
}
var RR = CR;
function IR(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var FR = IR, MR = ya, kR = "__lodash_hash_undefined__", NR = Object.prototype, DR = NR.hasOwnProperty;
function LR(t) {
  var e = this.__data__;
  if (MR) {
    var r = e[t];
    return r === kR ? void 0 : r;
  }
  return DR.call(e, t) ? e[t] : void 0;
}
var VR = LR, BR = ya, UR = Object.prototype, JR = UR.hasOwnProperty;
function HR(t) {
  var e = this.__data__;
  return BR ? e[t] !== void 0 : JR.call(e, t);
}
var qR = HR, zR = ya, GR = "__lodash_hash_undefined__";
function KR(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = zR && e === void 0 ? GR : e, this;
}
var WR = KR, YR = RR, XR = FR, QR = VR, ZR = qR, eI = WR;
function $s(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
$s.prototype.clear = YR;
$s.prototype.delete = XR;
$s.prototype.get = QR;
$s.prototype.has = ZR;
$s.prototype.set = eI;
var tI = $s, Zh = tI, rI = va, sI = Rf;
function nI() {
  this.size = 0, this.__data__ = {
    hash: new Zh(),
    map: new (sI || rI)(),
    string: new Zh()
  };
}
var iI = nI;
function oI(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var aI = oI, cI = aI;
function lI(t, e) {
  var r = t.__data__;
  return cI(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var ga = lI, uI = ga;
function fI(t) {
  var e = uI(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var pI = fI, hI = ga;
function dI(t) {
  return hI(this, t).get(t);
}
var mI = dI, vI = ga;
function yI(t) {
  return vI(this, t).has(t);
}
var gI = yI, bI = ga;
function xI(t, e) {
  var r = bI(this, t), s = r.size;
  return r.set(t, e), this.size += r.size == s ? 0 : 1, this;
}
var SI = xI, wI = iI, OI = pI, EI = mI, $I = gI, AI = SI;
function As(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
As.prototype.clear = wI;
As.prototype.delete = OI;
As.prototype.get = EI;
As.prototype.has = $I;
As.prototype.set = AI;
var Fy = As, jI = va, PI = Rf, TI = Fy, _I = 200;
function CI(t, e) {
  var r = this.__data__;
  if (r instanceof jI) {
    var s = r.__data__;
    if (!PI || s.length < _I - 1)
      return s.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new TI(s);
  }
  return r.set(t, e), this.size = r.size, this;
}
var RI = CI, II = va, FI = VC, MI = UC, kI = HC, NI = zC, DI = RI;
function js(t) {
  var e = this.__data__ = new II(t);
  this.size = e.size;
}
js.prototype.clear = FI;
js.prototype.delete = MI;
js.prototype.get = kI;
js.prototype.has = NI;
js.prototype.set = DI;
var LI = js, VI = "__lodash_hash_undefined__";
function BI(t) {
  return this.__data__.set(t, VI), this;
}
var UI = BI;
function JI(t) {
  return this.__data__.has(t);
}
var HI = JI, qI = Fy, zI = UI, GI = HI;
function Wi(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new qI(); ++e < r; )
    this.add(t[e]);
}
Wi.prototype.add = Wi.prototype.push = zI;
Wi.prototype.has = GI;
var KI = Wi;
function WI(t, e) {
  for (var r = -1, s = t == null ? 0 : t.length; ++r < s; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
var YI = WI;
function XI(t, e) {
  return t.has(e);
}
var QI = XI, ZI = KI, eF = YI, tF = QI, rF = 1, sF = 2;
function nF(t, e, r, s, n, i) {
  var o = r & rF, a = t.length, c = e.length;
  if (a != c && !(o && c > a))
    return !1;
  var l = i.get(t), p = i.get(e);
  if (l && p)
    return l == e && p == t;
  var f = -1, d = !0, u = r & sF ? new ZI() : void 0;
  for (i.set(t, e), i.set(e, t); ++f < a; ) {
    var m = t[f], h = e[f];
    if (s)
      var y = o ? s(h, m, f, e, t, i) : s(m, h, f, t, e, i);
    if (y !== void 0) {
      if (y)
        continue;
      d = !1;
      break;
    }
    if (u) {
      if (!eF(e, function(g, v) {
        if (!tF(u, v) && (m === g || n(m, g, r, s, i)))
          return u.push(v);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === h || n(m, h, r, s, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(t), i.delete(e), d;
}
var My = nF, iF = Xt, oF = iF.Uint8Array, aF = oF;
function cF(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(s, n) {
    r[++e] = [n, s];
  }), r;
}
var lF = cF;
function uF(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(s) {
    r[++e] = s;
  }), r;
}
var fF = uF, ed = Cf, td = aF, pF = Cy, hF = My, dF = lF, mF = fF, vF = 1, yF = 2, gF = "[object Boolean]", bF = "[object Date]", xF = "[object Error]", SF = "[object Map]", wF = "[object Number]", OF = "[object RegExp]", EF = "[object Set]", $F = "[object String]", AF = "[object Symbol]", jF = "[object ArrayBuffer]", PF = "[object DataView]", rd = ed ? ed.prototype : void 0, Uc = rd ? rd.valueOf : void 0;
function TF(t, e, r, s, n, i, o) {
  switch (r) {
    case PF:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case jF:
      return !(t.byteLength != e.byteLength || !i(new td(t), new td(e)));
    case gF:
    case bF:
    case wF:
      return pF(+t, +e);
    case xF:
      return t.name == e.name && t.message == e.message;
    case OF:
    case $F:
      return t == e + "";
    case SF:
      var a = dF;
    case EF:
      var c = s & vF;
      if (a || (a = mF), t.size != e.size && !c)
        return !1;
      var l = o.get(t);
      if (l)
        return l == e;
      s |= yF, o.set(t, e);
      var p = hF(a(t), a(e), s, n, i, o);
      return o.delete(t), p;
    case AF:
      if (Uc)
        return Uc.call(t) == Uc.call(e);
  }
  return !1;
}
var _F = TF;
function CF(t, e) {
  for (var r = -1, s = e.length, n = t.length; ++r < s; )
    t[n + r] = e[r];
  return t;
}
var RF = CF, IF = RF, FF = ha;
function MF(t, e, r) {
  var s = e(t);
  return FF(t) ? s : IF(s, r(t));
}
var kF = MF;
function NF(t, e) {
  for (var r = -1, s = t == null ? 0 : t.length, n = 0, i = []; ++r < s; ) {
    var o = t[r];
    e(o, r, t) && (i[n++] = o);
  }
  return i;
}
var DF = NF;
function LF() {
  return [];
}
var VF = LF, BF = DF, UF = VF, JF = Object.prototype, HF = JF.propertyIsEnumerable, sd = Object.getOwnPropertySymbols, qF = sd ? function(t) {
  return t == null ? [] : (t = Object(t), BF(sd(t), function(e) {
    return HF.call(t, e);
  }));
} : UF, zF = qF;
function GF(t, e) {
  for (var r = -1, s = Array(t); ++r < t; )
    s[r] = e(r);
  return s;
}
var KF = GF, WF = Vr, YF = Br, XF = "[object Arguments]";
function QF(t) {
  return YF(t) && WF(t) == XF;
}
var ZF = QF, nd = ZF, eM = Br, ky = Object.prototype, tM = ky.hasOwnProperty, rM = ky.propertyIsEnumerable, sM = nd(/* @__PURE__ */ function() {
  return arguments;
}()) ? nd : function(t) {
  return eM(t) && tM.call(t, "callee") && !rM.call(t, "callee");
}, nM = sM, Yi = { exports: {} };
function iM() {
  return !1;
}
var oM = iM;
Yi.exports;
(function(t, e) {
  var r = Xt, s = oM, n = e && !e.nodeType && e, i = n && !0 && t && !t.nodeType && t, o = i && i.exports === n, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, l = c || s;
  t.exports = l;
})(Yi, Yi.exports);
var Ny = Yi.exports, aM = 9007199254740991, cM = /^(?:0|[1-9]\d*)$/;
function lM(t, e) {
  var r = typeof t;
  return e = e ?? aM, !!e && (r == "number" || r != "symbol" && cM.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var uM = lM, fM = 9007199254740991;
function pM(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= fM;
}
var Dy = pM, hM = Vr, dM = Dy, mM = Br, vM = "[object Arguments]", yM = "[object Array]", gM = "[object Boolean]", bM = "[object Date]", xM = "[object Error]", SM = "[object Function]", wM = "[object Map]", OM = "[object Number]", EM = "[object Object]", $M = "[object RegExp]", AM = "[object Set]", jM = "[object String]", PM = "[object WeakMap]", TM = "[object ArrayBuffer]", _M = "[object DataView]", CM = "[object Float32Array]", RM = "[object Float64Array]", IM = "[object Int8Array]", FM = "[object Int16Array]", MM = "[object Int32Array]", kM = "[object Uint8Array]", NM = "[object Uint8ClampedArray]", DM = "[object Uint16Array]", LM = "[object Uint32Array]", ve = {};
ve[CM] = ve[RM] = ve[IM] = ve[FM] = ve[MM] = ve[kM] = ve[NM] = ve[DM] = ve[LM] = !0;
ve[vM] = ve[yM] = ve[TM] = ve[gM] = ve[_M] = ve[bM] = ve[xM] = ve[SM] = ve[wM] = ve[OM] = ve[EM] = ve[$M] = ve[AM] = ve[jM] = ve[PM] = !1;
function VM(t) {
  return mM(t) && dM(t.length) && !!ve[hM(t)];
}
var BM = VM;
function UM(t) {
  return function(e) {
    return t(e);
  };
}
var JM = UM, Xi = { exports: {} };
Xi.exports;
(function(t, e) {
  var r = Ty, s = e && !e.nodeType && e, n = s && !0 && t && !t.nodeType && t, i = n && n.exports === s, o = i && r.process, a = function() {
    try {
      var c = n && n.require && n.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  t.exports = a;
})(Xi, Xi.exports);
var HM = Xi.exports, qM = BM, zM = JM, id = HM, od = id && id.isTypedArray, GM = od ? zM(od) : qM, Ly = GM, KM = KF, WM = nM, YM = ha, XM = Ny, QM = uM, ZM = Ly, ek = Object.prototype, tk = ek.hasOwnProperty;
function rk(t, e) {
  var r = YM(t), s = !r && WM(t), n = !r && !s && XM(t), i = !r && !s && !n && ZM(t), o = r || s || n || i, a = o ? KM(t.length, String) : [], c = a.length;
  for (var l in t)
    (e || tk.call(t, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    QM(l, c))) && a.push(l);
  return a;
}
var sk = rk, nk = Object.prototype;
function ik(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || nk;
  return t === r;
}
var ok = ik;
function ak(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var ck = ak, lk = ck, uk = lk(Object.keys, Object), fk = uk, pk = ok, hk = fk, dk = Object.prototype, mk = dk.hasOwnProperty;
function vk(t) {
  if (!pk(t))
    return hk(t);
  var e = [];
  for (var r in Object(t))
    mk.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var yk = vk, gk = Ry, bk = Dy;
function xk(t) {
  return t != null && bk(t.length) && !gk(t);
}
var Sk = xk, wk = sk, Ok = yk, Ek = Sk;
function $k(t) {
  return Ek(t) ? wk(t) : Ok(t);
}
var Ak = $k, jk = kF, Pk = zF, Tk = Ak;
function _k(t) {
  return jk(t, Tk, Pk);
}
var Ck = _k, ad = Ck, Rk = 1, Ik = Object.prototype, Fk = Ik.hasOwnProperty;
function Mk(t, e, r, s, n, i) {
  var o = r & Rk, a = ad(t), c = a.length, l = ad(e), p = l.length;
  if (c != p && !o)
    return !1;
  for (var f = c; f--; ) {
    var d = a[f];
    if (!(o ? d in e : Fk.call(e, d)))
      return !1;
  }
  var u = i.get(t), m = i.get(e);
  if (u && m)
    return u == e && m == t;
  var h = !0;
  i.set(t, e), i.set(e, t);
  for (var y = o; ++f < c; ) {
    d = a[f];
    var g = t[d], v = e[d];
    if (s)
      var b = o ? s(v, g, d, e, t, i) : s(g, v, d, t, e, i);
    if (!(b === void 0 ? g === v || n(g, v, r, s, i) : b)) {
      h = !1;
      break;
    }
    y || (y = d == "constructor");
  }
  if (h && !y) {
    var O = t.constructor, I = e.constructor;
    O != I && "constructor" in t && "constructor" in e && !(typeof O == "function" && O instanceof O && typeof I == "function" && I instanceof I) && (h = !1);
  }
  return i.delete(t), i.delete(e), h;
}
var kk = Mk, Nk = Es, Dk = Xt, Lk = Nk(Dk, "DataView"), Vk = Lk, Bk = Es, Uk = Xt, Jk = Bk(Uk, "Promise"), Hk = Jk, qk = Es, zk = Xt, Gk = qk(zk, "Set"), Kk = Gk, Wk = Es, Yk = Xt, Xk = Wk(Yk, "WeakMap"), Qk = Xk, Pl = Vk, Tl = Rf, _l = Hk, Cl = Kk, Rl = Qk, Vy = Vr, Ps = Iy, cd = "[object Map]", Zk = "[object Object]", ld = "[object Promise]", ud = "[object Set]", fd = "[object WeakMap]", pd = "[object DataView]", e2 = Ps(Pl), t2 = Ps(Tl), r2 = Ps(_l), s2 = Ps(Cl), n2 = Ps(Rl), xr = Vy;
(Pl && xr(new Pl(new ArrayBuffer(1))) != pd || Tl && xr(new Tl()) != cd || _l && xr(_l.resolve()) != ld || Cl && xr(new Cl()) != ud || Rl && xr(new Rl()) != fd) && (xr = function(t) {
  var e = Vy(t), r = e == Zk ? t.constructor : void 0, s = r ? Ps(r) : "";
  if (s)
    switch (s) {
      case e2:
        return pd;
      case t2:
        return cd;
      case r2:
        return ld;
      case s2:
        return ud;
      case n2:
        return fd;
    }
  return e;
});
var i2 = xr, Jc = LI, o2 = My, a2 = _F, c2 = kk, hd = i2, dd = ha, md = Ny, l2 = Ly, u2 = 1, vd = "[object Arguments]", yd = "[object Array]", hi = "[object Object]", f2 = Object.prototype, gd = f2.hasOwnProperty;
function p2(t, e, r, s, n, i) {
  var o = dd(t), a = dd(e), c = o ? yd : hd(t), l = a ? yd : hd(e);
  c = c == vd ? hi : c, l = l == vd ? hi : l;
  var p = c == hi, f = l == hi, d = c == l;
  if (d && md(t)) {
    if (!md(e))
      return !1;
    o = !0, p = !1;
  }
  if (d && !p)
    return i || (i = new Jc()), o || l2(t) ? o2(t, e, r, s, n, i) : a2(t, e, c, r, s, n, i);
  if (!(r & u2)) {
    var u = p && gd.call(t, "__wrapped__"), m = f && gd.call(e, "__wrapped__");
    if (u || m) {
      var h = u ? t.value() : t, y = m ? e.value() : e;
      return i || (i = new Jc()), n(h, y, r, s, i);
    }
  }
  return d ? (i || (i = new Jc()), c2(t, e, r, s, n, i)) : !1;
}
var h2 = p2, d2 = h2, bd = Br;
function By(t, e, r, s, n) {
  return t === e ? !0 : t == null || e == null || !bd(t) && !bd(e) ? t !== t && e !== e : d2(t, e, r, s, By, n);
}
var m2 = By, v2 = m2;
function y2(t, e) {
  return v2(t, e);
}
var g2 = y2;
let b2 = class Uy {
  constructor(e, r) {
    this.key = e, this.value = r;
  }
  /**
   * @returns {KeyValuePair}
   */
  clone() {
    const e = new Uy();
    return this.key && (e.key = this.key.clone()), this.value && (e.value = this.value.clone()), e;
  }
};
var ba = b2, x2 = "Expected a function";
function S2(t) {
  if (typeof t != "function")
    throw new TypeError(x2);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !t.call(this);
      case 1:
        return !t.call(this, e[0]);
      case 2:
        return !t.call(this, e[0], e[1]);
      case 3:
        return !t.call(this, e[0], e[1], e[2]);
    }
    return !t.apply(this, e);
  };
}
var xa = S2;
const w2 = xa;
function Hc(t) {
  return typeof t == "string" ? (e) => e.element === t : t.constructor && t.extend ? (e) => e instanceof t : t;
}
let Jy = class Il {
  constructor(e) {
    this.elements = e || [];
  }
  /**
   * @returns {Array}
   */
  toValue() {
    return this.elements.map((e) => e.toValue());
  }
  // High Order Functions
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {array} A new array with each element being the result of the callback function
   */
  map(e, r) {
    return this.elements.map(e, r);
  }
  /**
   * Maps and then flattens the results.
   * @param callback - Function to execute for each element.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {array}
   */
  flatMap(e, r) {
    return this.map(e, r).reduce((s, n) => s.concat(n), []);
  }
  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts an element of this array as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArraySlice.prototype
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(e, r) {
    const s = [];
    return this.forEach((n) => {
      const i = e.bind(r)(n);
      i && s.push(i);
    }), s;
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  filter(e, r) {
    return e = Hc(e), new Il(this.elements.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(e, r) {
    return e = Hc(e), new Il(this.elements.filter(w2(e), r));
  }
  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(e, r) {
    return e = Hc(e), this.elements.find(e, r);
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArraySlice.prototype
   */
  forEach(e, r) {
    this.elements.forEach(e, r);
  }
  /**
   * @param callback - Function to execute for each element
   * @param initialValue
   * @memberof ArraySlice.prototype
   */
  reduce(e, r) {
    return this.elements.reduce(e, r);
  }
  /**
   * @param value
   * @returns {boolean}
   * @memberof ArraySlice.prototype
   */
  includes(e) {
    return this.elements.some((r) => r.equals(e));
  }
  // Mutation
  /**
   * Removes the first element from the slice
   * @returns {Element} The removed element or undefined if the slice is empty
   * @memberof ArraySlice.prototype
   */
  shift() {
    return this.elements.shift();
  }
  /**
   * Adds the given element to the begining of the slice
   * @parameter {Element} value
   * @memberof ArraySlice.prototype
   */
  unshift(e) {
    this.elements.unshift(this.refract(e));
  }
  /**
   * Adds the given element to the end of the slice
   * @parameter {Element} value
   * @memberof ArraySlice.prototype
   */
  push(e) {
    return this.elements.push(this.refract(e)), this;
  }
  /**
   * @parameter {Element} value
   * @memberof ArraySlice.prototype
   */
  add(e) {
    this.push(e);
  }
  // Accessors
  /**
   * @parameter {number} index
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  get(e) {
    return this.elements[e];
  }
  /**
   * @parameter {number} index
   * @memberof ArraySlice.prototype
   */
  getValue(e) {
    const r = this.elements[e];
    if (r)
      return r.toValue();
  }
  /**
   * Returns the number of elements in the slice
   * @type number
   */
  get length() {
    return this.elements.length;
  }
  /**
   * Returns whether the slice is empty
   * @type boolean
   */
  get isEmpty() {
    return this.elements.length === 0;
  }
  /**
   * Returns the first element in the slice or undefined if the slice is empty
   * @type Element
   */
  get first() {
    return this.elements[0];
  }
};
typeof Symbol < "u" && (Jy.prototype[Symbol.iterator] = function() {
  return this.elements[Symbol.iterator]();
});
var Sa = Jy;
const O2 = g2, di = ba, er = Sa;
let E2 = class wi {
  constructor(e, r, s) {
    r && (this.meta = r), s && (this.attributes = s), this.content = e;
  }
  /**
   * Freezes the element to prevent any mutation.
   * A frozen element will add `parent` property to every child element
   * to allow traversing up the element tree.
   */
  freeze() {
    Object.isFrozen(this) || (this._meta && (this.meta.parent = this, this.meta.freeze()), this._attributes && (this.attributes.parent = this, this.attributes.freeze()), this.children.forEach((e) => {
      e.parent = this, e.freeze();
    }, this), this.content && Array.isArray(this.content) && Object.freeze(this.content), Object.freeze(this));
  }
  primitive() {
  }
  /**
   * Creates a deep clone of the instance
   */
  clone() {
    const e = new this.constructor();
    return e.element = this.element, this.meta.length && (e._meta = this.meta.clone()), this.attributes.length && (e._attributes = this.attributes.clone()), this.content ? this.content.clone ? e.content = this.content.clone() : Array.isArray(this.content) ? e.content = this.content.map((r) => r.clone()) : e.content = this.content : e.content = this.content, e;
  }
  /**
   */
  toValue() {
    return this.content instanceof wi ? this.content.toValue() : this.content instanceof di ? {
      key: this.content.key.toValue(),
      value: this.content.value ? this.content.value.toValue() : void 0
    } : this.content && this.content.map ? this.content.map((e) => e.toValue(), this) : this.content;
  }
  /**
   * Creates a reference pointing at the Element
   * @returns {RefElement}
   * @memberof Element.prototype
   */
  toRef(e) {
    if (this.id.toValue() === "")
      throw Error("Cannot create reference to an element that does not contain an ID");
    const r = new this.RefElement(this.id.toValue());
    return e && (r.path = e), r;
  }
  /**
   * Finds the given elements in the element tree.
   * When providing multiple element names, you must first freeze the element.
   *
   * @param names {...elementNames}
   * @returns {ArraySlice}
   */
  findRecursive(...e) {
    if (arguments.length > 1 && !this.isFrozen)
      throw new Error("Cannot find recursive with multiple element names without first freezing the element. Call `element.freeze()`");
    const r = e.pop();
    let s = new er();
    const n = (o, a) => (o.push(a), o), i = (o, a) => {
      a.element === r && o.push(a);
      const c = a.findRecursive(r);
      return c && c.reduce(n, o), a.content instanceof di && (a.content.key && i(o, a.content.key), a.content.value && i(o, a.content.value)), o;
    };
    return this.content && (this.content.element && i(s, this.content), Array.isArray(this.content) && this.content.reduce(i, s)), e.isEmpty || (s = s.filter((o) => {
      let a = o.parents.map((c) => c.element);
      for (const c in e) {
        const l = e[c], p = a.indexOf(l);
        if (p !== -1)
          a = a.splice(0, p);
        else
          return !1;
      }
      return !0;
    })), s;
  }
  set(e) {
    return this.content = e, this;
  }
  equals(e) {
    return O2(this.toValue(), e);
  }
  getMetaProperty(e, r) {
    if (!this.meta.hasKey(e)) {
      if (this.isFrozen) {
        const s = this.refract(r);
        return s.freeze(), s;
      }
      this.meta.set(e, r);
    }
    return this.meta.get(e);
  }
  setMetaProperty(e, r) {
    this.meta.set(e, r);
  }
  /**
   * @type String
   */
  get element() {
    return this._storedElement || "element";
  }
  set element(e) {
    this._storedElement = e;
  }
  get content() {
    return this._content;
  }
  set content(e) {
    if (e instanceof wi)
      this._content = e;
    else if (e instanceof er)
      this.content = e.elements;
    else if (typeof e == "string" || typeof e == "number" || typeof e == "boolean" || e === "null" || e == null)
      this._content = e;
    else if (e instanceof di)
      this._content = e;
    else if (Array.isArray(e))
      this._content = e.map(this.refract);
    else if (typeof e == "object")
      this._content = Object.keys(e).map((r) => new this.MemberElement(r, e[r]));
    else
      throw new Error("Cannot set content to given value");
  }
  /**
   * @type ObjectElement
   */
  get meta() {
    if (!this._meta) {
      if (this.isFrozen) {
        const e = new this.ObjectElement();
        return e.freeze(), e;
      }
      this._meta = new this.ObjectElement();
    }
    return this._meta;
  }
  set meta(e) {
    e instanceof this.ObjectElement ? this._meta = e : this.meta.set(e || {});
  }
  /**
   * The attributes property defines attributes about the given instance
   * of the element, as specified by the element property.
   *
   * @type ObjectElement
   */
  get attributes() {
    if (!this._attributes) {
      if (this.isFrozen) {
        const e = new this.ObjectElement();
        return e.freeze(), e;
      }
      this._attributes = new this.ObjectElement();
    }
    return this._attributes;
  }
  set attributes(e) {
    e instanceof this.ObjectElement ? this._attributes = e : this.attributes.set(e || {});
  }
  /**
   * Unique Identifier, MUST be unique throughout an entire element tree.
   * @type StringElement
   */
  get id() {
    return this.getMetaProperty("id", "");
  }
  set id(e) {
    this.setMetaProperty("id", e);
  }
  /**
   * @type ArrayElement
   */
  get classes() {
    return this.getMetaProperty("classes", []);
  }
  set classes(e) {
    this.setMetaProperty("classes", e);
  }
  /**
   * Human-readable title of element
   * @type StringElement
   */
  get title() {
    return this.getMetaProperty("title", "");
  }
  set title(e) {
    this.setMetaProperty("title", e);
  }
  /**
   * Human-readable description of element
   * @type StringElement
   */
  get description() {
    return this.getMetaProperty("description", "");
  }
  set description(e) {
    this.setMetaProperty("description", e);
  }
  /**
   * @type ArrayElement
   */
  get links() {
    return this.getMetaProperty("links", []);
  }
  set links(e) {
    this.setMetaProperty("links", e);
  }
  /**
   * Returns whether the element is frozen.
   * @type boolean
   * @see freeze
   */
  get isFrozen() {
    return Object.isFrozen(this);
  }
  /**
   * Returns all of the parent elements.
   * @type ArraySlice
   */
  get parents() {
    let { parent: e } = this;
    const r = new er();
    for (; e; )
      r.push(e), e = e.parent;
    return r;
  }
  /**
   * Returns all of the children elements found within the element.
   * @type ArraySlice
   * @see recursiveChildren
   */
  get children() {
    if (Array.isArray(this.content))
      return new er(this.content);
    if (this.content instanceof di) {
      const e = new er([this.content.key]);
      return this.content.value && e.push(this.content.value), e;
    }
    return this.content instanceof wi ? new er([this.content]) : new er();
  }
  /**
  * Returns all of the children elements found within the element recursively.
  * @type ArraySlice
  * @see children
  */
  get recursiveChildren() {
    const e = new er();
    return this.children.forEach((r) => {
      e.push(r), r.recursiveChildren.forEach((s) => {
        e.push(s);
      });
    }), e;
  }
};
var Qt = E2;
const $2 = Qt;
let A2 = class extends $2 {
  constructor(e, r, s) {
    super(e || null, r, s), this.element = "null";
  }
  primitive() {
    return "null";
  }
  set() {
    return new Error("Cannot set the value of null");
  }
};
var j2 = A2;
const P2 = Qt;
var T2 = class extends P2 {
  constructor(e, r, s) {
    super(e, r, s), this.element = "string";
  }
  primitive() {
    return "string";
  }
  /**
   * The length of the string.
   * @type number
   */
  get length() {
    return this.content.length;
  }
};
const _2 = Qt;
var C2 = class extends _2 {
  constructor(e, r, s) {
    super(e, r, s), this.element = "number";
  }
  primitive() {
    return "number";
  }
};
const R2 = Qt;
var I2 = class extends R2 {
  constructor(e, r, s) {
    super(e, r, s), this.element = "boolean";
  }
  primitive() {
    return "boolean";
  }
};
const F2 = xa, M2 = Qt, xd = Sa;
let on = class extends M2 {
  constructor(e, r, s) {
    super(e || [], r, s), this.element = "array";
  }
  primitive() {
    return "array";
  }
  /**
   * @returns {Element}
   */
  get(e) {
    return this.content[e];
  }
  /**
   * Helper for returning the value of an item
   * This works for both ArrayElement and ObjectElement instances
   */
  getValue(e) {
    const r = this.get(e);
    if (r)
      return r.toValue();
  }
  /**
   * @returns {Element}
   */
  getIndex(e) {
    return this.content[e];
  }
  set(e, r) {
    return this.content[e] = this.refract(r), this;
  }
  remove(e) {
    const r = this.content.splice(e, 1);
    return r.length ? r[0] : null;
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   */
  map(e, r) {
    return this.content.map(e, r);
  }
  /**
   * Maps and then flattens the results.
   * @param callback - Function to execute for each element.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {array}
   */
  flatMap(e, r) {
    return this.map(e, r).reduce((s, n) => s.concat(n), []);
  }
  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts an element of this array as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArrayElement.prototype
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(e, r) {
    const s = [];
    return this.forEach((n) => {
      const i = e.bind(r)(n);
      i && s.push(i);
    }), s;
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  filter(e, r) {
    return new xd(this.content.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  reject(e, r) {
    return this.filter(F2(e), r);
  }
  /**
   * This is a reduce function specifically for Minim arrays and objects. It
   * allows for returning normal values or Minim instances, so it converts any
   * primitives on each step.
   */
  reduce(e, r) {
    let s, n;
    r !== void 0 ? (s = 0, n = this.refract(r)) : (s = 1, n = this.primitive() === "object" ? this.first.value : this.first);
    for (let i = s; i < this.length; i += 1) {
      const o = this.content[i];
      this.primitive() === "object" ? n = this.refract(e(n, o.value, o.key, o, this)) : n = this.refract(e(n, o, i, this));
    }
    return n;
  }
  /**
   * @callback forEachCallback
   * @param {Element} currentValue
   * @param {NumberElement} index
   */
  /**
   * @param {forEachCallback} callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArrayElement.prototype
   */
  forEach(e, r) {
    this.content.forEach((s, n) => {
      e.bind(r)(s, this.refract(n));
    });
  }
  /**
   * @returns {Element}
   */
  shift() {
    return this.content.shift();
  }
  /**
   * @param value
   */
  unshift(e) {
    this.content.unshift(this.refract(e));
  }
  /**
   * @param value
   */
  push(e) {
    return this.content.push(this.refract(e)), this;
  }
  /**
   * @param value
   */
  add(e) {
    this.push(e);
  }
  /**
   * Recusively search all descendents using a condition function.
   * @returns {Element[]}
   */
  findElements(e, r) {
    const s = r || {}, n = !!s.recursive, i = s.results === void 0 ? [] : s.results;
    return this.forEach((o, a, c) => {
      n && o.findElements !== void 0 && o.findElements(e, {
        results: i,
        recursive: n
      }), e(o, a, c) && i.push(o);
    }), i;
  }
  /**
   * Recusively search all descendents using a condition function.
   * @param condition
   * @returns {ArraySlice}
   */
  find(e) {
    return new xd(this.findElements(e, { recursive: !0 }));
  }
  /**
   * @param {string} element
   * @returns {ArraySlice}
   */
  findByElement(e) {
    return this.find((r) => r.element === e);
  }
  /**
   * @param {string} className
   * @returns {ArraySlice}
   * @memberof ArrayElement.prototype
   */
  findByClass(e) {
    return this.find((r) => r.classes.includes(e));
  }
  /**
   * Search the tree recursively and find the element with the matching ID
   * @param {string} id
   * @returns {Element}
   * @memberof ArrayElement.prototype
   */
  getById(e) {
    return this.find((r) => r.id.toValue() === e).first;
  }
  /**
   * Looks for matching children using deep equality
   * @param value
   * @returns {boolean}
   */
  includes(e) {
    return this.content.some((r) => r.equals(e));
  }
  /**
   * Looks for matching children using deep equality
   * @param value
   * @returns {boolean}
   * @see includes
   * @deprecated method was replaced by includes
   */
  contains(e) {
    return this.includes(e);
  }
  // Fantasy Land
  /**
   * @returns {ArrayElement} An empty array element
   */
  empty() {
    return new this.constructor([]);
  }
  "fantasy-land/empty"() {
    return this.empty();
  }
  /**
   * @param {ArrayElement} other
   * @returns {ArrayElement}
   */
  concat(e) {
    return new this.constructor(this.content.concat(e.content));
  }
  "fantasy-land/concat"(e) {
    return this.concat(e);
  }
  "fantasy-land/map"(e) {
    return new this.constructor(this.map(e));
  }
  "fantasy-land/chain"(e) {
    return this.map((r) => e(r), this).reduce((r, s) => r.concat(s), this.empty());
  }
  "fantasy-land/filter"(e) {
    return new this.constructor(this.content.filter(e));
  }
  "fantasy-land/reduce"(e, r) {
    return this.content.reduce(e, r);
  }
  /**
   * Returns the length of the collection
   * @type number
   */
  get length() {
    return this.content.length;
  }
  /**
   * Returns whether the collection is empty
   * @type boolean
   */
  get isEmpty() {
    return this.content.length === 0;
  }
  /**
   * Return the first item in the collection
   * @type Element
   */
  get first() {
    return this.getIndex(0);
  }
  /**
   * Return the second item in the collection
   * @type Element
   */
  get second() {
    return this.getIndex(1);
  }
  /**
   * Return the last item in the collection
   * @type Element
   */
  get last() {
    return this.getIndex(this.length - 1);
  }
};
on.empty = function() {
  return new this();
};
on["fantasy-land/empty"] = on.empty;
typeof Symbol < "u" && (on.prototype[Symbol.iterator] = function() {
  return this.content[Symbol.iterator]();
});
var Hy = on;
const k2 = ba, N2 = Qt;
var qy = class extends N2 {
  constructor(e, r, s, n) {
    super(new k2(), s, n), this.element = "member", this.key = e, this.value = r;
  }
  /**
   * @type Element
   */
  get key() {
    return this.content.key;
  }
  set key(e) {
    this.content.key = this.refract(e);
  }
  /**
   * @type Element
   */
  get value() {
    return this.content.value;
  }
  set value(e) {
    this.content.value = this.refract(e);
  }
};
const D2 = xa, L2 = Sa;
let V2 = class zy extends L2 {
  map(e, r) {
    return this.elements.map((s) => e.bind(r)(s.value, s.key, s));
  }
  filter(e, r) {
    return new zy(this.elements.filter((s) => e.bind(r)(s.value, s.key, s)));
  }
  reject(e, r) {
    return this.filter(D2(e.bind(r)));
  }
  forEach(e, r) {
    return this.elements.forEach((s, n) => {
      e.bind(r)(s.value, s.key, s, n);
    });
  }
  /**
   * @returns {array}
   */
  keys() {
    return this.map((e, r) => r.toValue());
  }
  /**
   * @returns {array}
   */
  values() {
    return this.map((e) => e.toValue());
  }
};
var Gy = V2;
const B2 = xa, U2 = da, J2 = Hy, H2 = qy, q2 = Gy;
let z2 = class extends J2 {
  constructor(e, r, s) {
    super(e || [], r, s), this.element = "object";
  }
  primitive() {
    return "object";
  }
  toValue() {
    return this.content.reduce((e, r) => (e[r.key.toValue()] = r.value ? r.value.toValue() : void 0, e), {});
  }
  /**
   * @param key
   * @returns {Element}
   */
  get(e) {
    const r = this.getMember(e);
    if (r)
      return r.value;
  }
  /**
   * @param key
   * @returns {MemberElement}
   */
  getMember(e) {
    if (e !== void 0)
      return this.content.find((r) => r.key.toValue() === e);
  }
  /**
   * @param key
   */
  remove(e) {
    let r = null;
    return this.content = this.content.filter((s) => s.key.toValue() === e ? (r = s, !1) : !0), r;
  }
  /**
   * @param key
   * @returns {Element}
   */
  getKey(e) {
    const r = this.getMember(e);
    if (r)
      return r.key;
  }
  /**
   * Set allows either a key/value pair to be given or an object
   * If an object is given, each key is set to its respective value
   */
  set(e, r) {
    if (U2(e))
      return Object.keys(e).forEach((i) => {
        this.set(i, e[i]);
      }), this;
    const s = e, n = this.getMember(s);
    return n ? n.value = r : this.content.push(new H2(s, r)), this;
  }
  /**
   */
  keys() {
    return this.content.map((e) => e.key.toValue());
  }
  /**
   */
  values() {
    return this.content.map((e) => e.value.toValue());
  }
  /**
   * @returns {boolean}
   */
  hasKey(e) {
    return this.content.some((r) => r.key.equals(e));
  }
  /**
   * @returns {array}
   */
  items() {
    return this.content.map((e) => [e.key.toValue(), e.value.toValue()]);
  }
  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   */
  map(e, r) {
    return this.content.map((s) => e.bind(r)(s.value, s.key, s));
  }
  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts the value, key and member element of this object as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(e, r) {
    const s = [];
    return this.forEach((n, i, o) => {
      const a = e.bind(r)(n, i, o);
      a && s.push(a);
    }), s;
  }
  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @returns {ObjectSlice}
   */
  filter(e, r) {
    return new q2(this.content).filter(e, r);
  }
  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @returns {ObjectSlice}
   *
   * @memberof ObjectElement.prototype
   */
  reject(e, r) {
    return this.filter(B2(e), r);
  }
  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @memberof ObjectElement.prototype
   */
  forEach(e, r) {
    return this.content.forEach((s) => e.bind(r)(s.value, s.key, s));
  }
};
var G2 = z2;
const K2 = Qt;
var W2 = class extends K2 {
  constructor(e, r, s) {
    super(e || [], r, s), this.element = "link";
  }
  /**
   * The relation identifier for the link, as defined in RFC 5988.
   * @type StringElement
   */
  get relation() {
    return this.attributes.get("relation");
  }
  set relation(e) {
    this.attributes.set("relation", e);
  }
  /**
   * The URI for the given link.
   * @type StringElement
   */
  get href() {
    return this.attributes.get("href");
  }
  set href(e) {
    this.attributes.set("href", e);
  }
};
const Y2 = Qt;
var X2 = class extends Y2 {
  constructor(e, r, s) {
    super(e || [], r, s), this.element = "ref", this.path || (this.path = "element");
  }
  /**
   * Path of referenced element to transclude instead of element itself.
   * @type StringElement
   * @default element
   */
  get path() {
    return this.attributes.get("path");
  }
  set path(e) {
    this.attributes.set("path", e);
  }
};
const Ts = Qt, Ky = j2, Wy = T2, Yy = C2, Xy = I2, Qy = Hy, Zy = qy, If = G2, Q2 = W2, eg = X2, tg = Sa, Z2 = Gy, eN = ba;
function wa(t) {
  return t instanceof Ts ? t : typeof t == "string" ? new Wy(t) : typeof t == "number" ? new Yy(t) : typeof t == "boolean" ? new Xy(t) : t === null ? new Ky() : Array.isArray(t) ? new Qy(t.map(wa)) : typeof t == "object" ? new If(t) : t;
}
Ts.prototype.ObjectElement = If;
Ts.prototype.RefElement = eg;
Ts.prototype.MemberElement = Zy;
Ts.prototype.refract = wa;
tg.prototype.refract = wa;
var rg = {
  Element: Ts,
  NullElement: Ky,
  StringElement: Wy,
  NumberElement: Yy,
  BooleanElement: Xy,
  ArrayElement: Qy,
  MemberElement: Zy,
  ObjectElement: If,
  LinkElement: Q2,
  RefElement: eg,
  refract: wa,
  ArraySlice: tg,
  ObjectSlice: Z2,
  KeyValuePair: eN
};
const tN = j_, rN = eC, sN = iC, nN = uC, iN = da, sg = hC, Re = rg;
let ng = class {
  constructor(e) {
    this.elementMap = {}, this.elementDetection = [], this.Element = Re.Element, this.KeyValuePair = Re.KeyValuePair, (!e || !e.noDefault) && this.useDefault(), this._attributeElementKeys = [], this._attributeElementArrayKeys = [];
  }
  /**
   * Use a namespace plugin or load a generic plugin.
   *
   * @param plugin
   */
  use(e) {
    return e.namespace && e.namespace({ base: this }), e.load && e.load({ base: this }), this;
  }
  /*
   * Use the default namespace. This preloads all the default elements
   * into this registry instance.
   */
  useDefault() {
    return this.register("null", Re.NullElement).register("string", Re.StringElement).register("number", Re.NumberElement).register("boolean", Re.BooleanElement).register("array", Re.ArrayElement).register("object", Re.ObjectElement).register("member", Re.MemberElement).register("ref", Re.RefElement).register("link", Re.LinkElement), this.detect(tN, Re.NullElement, !1).detect(rN, Re.StringElement, !1).detect(sN, Re.NumberElement, !1).detect(nN, Re.BooleanElement, !1).detect(Array.isArray, Re.ArrayElement, !1).detect(iN, Re.ObjectElement, !1), this;
  }
  /**
   * Register a new element class for an element.
   *
   * @param {string} name
   * @param elementClass
   */
  register(e, r) {
    return this._elements = void 0, this.elementMap[e] = r, this;
  }
  /**
   * Unregister a previously registered class for an element.
   *
   * @param {string} name
   */
  unregister(e) {
    return this._elements = void 0, delete this.elementMap[e], this;
  }
  /*
   * Add a new detection function to determine which element
   * class to use when converting existing js instances into
   * refract element.
   */
  detect(e, r, s) {
    return (s === void 0 ? !0 : s) ? this.elementDetection.unshift([e, r]) : this.elementDetection.push([e, r]), this;
  }
  /*
   * Convert an existing Javascript object into refract element instances, which
   * can be further processed or serialized into refract.
   * If the item passed in is already refracted, then it is returned
   * unmodified.
   */
  toElement(e) {
    if (e instanceof this.Element)
      return e;
    let r;
    for (let s = 0; s < this.elementDetection.length; s += 1) {
      const n = this.elementDetection[s][0], i = this.elementDetection[s][1];
      if (n(e)) {
        r = new i(e);
        break;
      }
    }
    return r;
  }
  /*
   * Get an element class given an element name.
   */
  getElementClass(e) {
    const r = this.elementMap[e];
    return r === void 0 ? this.Element : r;
  }
  /*
   * Convert a refract document into refract element instances.
   */
  fromRefract(e) {
    return this.serialiser.deserialise(e);
  }
  /*
   * Convert an element to a Refracted JSON object.
   */
  toRefract(e) {
    return this.serialiser.serialise(e);
  }
  /*
   * Get an object that contains all registered element classes, where
   * the key is the PascalCased element name and the value is the class.
   */
  get elements() {
    return this._elements === void 0 && (this._elements = {
      Element: this.Element
    }, Object.keys(this.elementMap).forEach((e) => {
      const r = e[0].toUpperCase() + e.substr(1);
      this._elements[r] = this.elementMap[e];
    })), this._elements;
  }
  /**
   * Convinience method for getting a JSON Serialiser configured with the
   * current namespace
   *
   * @type JSONSerialiser
   * @readonly
   *
   * @memberof Namespace.prototype
   */
  get serialiser() {
    return new sg(this);
  }
};
sg.prototype.Namespace = ng;
var oN = ng;
const aN = oN, Ze = rg;
var cN = aN, ns = ba, an = Ze.ArraySlice, Qi = Ze.ObjectSlice, lN = Ze.Element, Bt = Ze.StringElement, Fl = Ze.NumberElement, Ut = Ze.BooleanElement, Ml = Ze.NullElement, ae = Ze.ArrayElement, F = Ze.ObjectElement, Sn = Ze.MemberElement, Nt = Ze.RefElement, kl = Ze.LinkElement, Ur = Ze.refract;
class Zi extends Bt {
  // classes: warning | error
  constructor(e, r, s) {
    super(e, r, s), this.element = "annotation";
  }
  get code() {
    return this.attributes.get("code");
  }
  set code(e) {
    this.attributes.set("code", e);
  }
}
class eo extends Bt {
  constructor(e, r, s) {
    super(e, r, s), this.element = "comment";
  }
}
class ht extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.element = "parseResult";
  }
  get api() {
    return this.children.filter((e) => e.classes.contains("api")).first;
  }
  get results() {
    return this.children.filter((e) => e.classes.contains("result"));
  }
  get result() {
    return this.results.first;
  }
  get annotations() {
    return this.children.filter((e) => e.element === "annotation");
  }
  get warnings() {
    return this.children.filter((e) => e.element === "annotation" && e.classes.contains("warning"));
  }
  get errors() {
    return this.children.filter((e) => e.element === "annotation" && e.classes.contains("error"));
  }
  get isEmpty() {
    return this.children.reject((e) => e.element === "annotation").isEmpty;
  }
  replaceResult(e) {
    const {
      result: r
    } = this;
    if (hr(r))
      return !1;
    const s = this.content.findIndex((n) => n === r);
    return s === -1 ? !1 : (this.content[s] = e, !0);
  }
}
class to extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.element = "sourceMap";
  }
  get positionStart() {
    return this.children.filter((e) => e.classes.contains("position")).get(0);
  }
  get positionEnd() {
    return this.children.filter((e) => e.classes.contains("position")).get(1);
  }
  set position(e) {
    if (typeof e > "u")
      return;
    const r = new ae([e.start.row, e.start.column, e.start.char]), s = new ae([e.end.row, e.end.column, e.end.char]);
    r.classes.push("position"), s.classes.push("position"), this.push(r).push(s);
  }
}
const uN = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", fN = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, pN = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, hN = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof ae) && e.classes.includes(t), tr = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, M = (t) => t({
  hasMethod: uN,
  hasBasicElementProps: fN,
  primitiveEq: pN,
  isElementType: tr,
  hasClass: hN
}), xe = M(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof lN || t(r) && e(void 0, r)), G = M(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Bt || t(r) && e("string", r)), Ff = M(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Fl || t(r) && e("number", r)), Mf = M(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Ml || t(r) && e("null", r)), wn = M(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Ut || t(r) && e("boolean", r)), ce = M(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (s) => s instanceof F || t(s) && e("object", s) && r("keys", s) && r("values", s) && r("items", s)), qe = M(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (s) => s instanceof ae && !(s instanceof F) || t(s) && e("array", s) && r("push", s) && r("unshift", s) && r("map", s) && r("reduce", s)), vt = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Sn || t(s) && e("member", s) && r(void 0, s)), ig = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof kl || t(s) && e("link", s) && r(void 0, s)), og = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Nt || t(s) && e("ref", s) && r(void 0, s)), dN = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Zi || t(s) && e("annotation", s) && r("array", s)), mN = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof eo || t(s) && e("comment", s) && r("string", s)), ag = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof ht || t(s) && e("parseResult", s) && r("array", s)), cg = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof to || t(s) && e("sourceMap", s) && r("array", s)), jr = (t) => tr("object", t) || tr("array", t) || tr("boolean", t) || tr("number", t) || tr("string", t) || tr("null", t) || tr("member", t), On = (t) => cg(t.meta.get("sourceMap")), vN = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return qe(r) ? cf(ua(r.toValue()), t) : !1;
}, Oa = (t, e) => t.length === 0 ? !0 : cf(ua(e.classes.toValue()), t), yN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: On,
  includesClasses: Oa,
  includesSymbols: vN,
  isAnnotationElement: dN,
  isArrayElement: qe,
  isBooleanElement: wn,
  isCommentElement: mN,
  isElement: xe,
  isLinkElement: ig,
  isMemberElement: vt,
  isNullElement: Mf,
  isNumberElement: Ff,
  isObjectElement: ce,
  isParseResultElement: ag,
  isPrimitiveElement: jr,
  isRefElement: og,
  isSourceMapElement: cg,
  isStringElement: G
}, Symbol.toStringTag, { value: "Module" }));
class lg extends cN {
  constructor() {
    super(), this.register("annotation", Zi), this.register("comment", eo), this.register("parseResult", ht), this.register("sourceMap", to);
  }
}
const ug = new lg(), Zt = (t) => {
  const e = new lg();
  return Vt(t) && e.use(t), e;
}, fg = () => ({
  predicates: {
    ...yN
  },
  namespace: ug
}), Ea = (t, e, r) => {
  const s = t[e];
  if (s != null) {
    if (!r && typeof s == "function")
      return s;
    const n = r ? s.leave : s.enter;
    if (typeof n == "function")
      return n;
  } else {
    const n = r ? t.leave : t.enter;
    if (n != null) {
      if (typeof n == "function")
        return n;
      const i = n[e];
      if (typeof i == "function")
        return i;
    }
  }
  return null;
}, ee = {}, En = (t) => t == null ? void 0 : t.type, pg = (t) => typeof En(t) == "string", kf = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), $a = (t, {
  visitFnGetter: e = Ea,
  nodeTypeGetter: r = En,
  breakSymbol: s = ee,
  deleteNodeSymbol: n = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    enter(l, p, f, d, u, m) {
      let h = l, y = !1;
      const g = {
        ...m,
        replaceWith(v, b) {
          m.replaceWith(v, b), h = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const b = e(t[v], r(h), !1);
          if (typeof b == "function") {
            const O = b.call(t[v], h, p, f, d, u, g);
            if (typeof (O == null ? void 0 : O.then) == "function")
              throw new pt("Async visitor not supported in sync mode", {
                visitor: t[v],
                visitFn: b
              });
            if (O === i)
              c[v] = h;
            else if (O === s)
              c[v] = s;
            else {
              if (O === n)
                return O;
              if (O !== void 0)
                if (o)
                  h = O, y = !0;
                else
                  return O;
            }
          }
        }
      return y ? h : void 0;
    },
    leave(l, p, f, d, u, m) {
      let h = l;
      const y = {
        ...m,
        replaceWith(g, v) {
          m.replaceWith(g, v), h = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const v = e(t[g], r(h), !0);
          if (typeof v == "function") {
            const b = v.call(t[g], h, p, f, d, u, y);
            if (typeof (b == null ? void 0 : b.then) == "function")
              throw new pt("Async visitor not supported in sync mode", {
                visitor: t[g],
                visitFn: v
              });
            if (b === s)
              c[g] = s;
            else if (b !== void 0 && b !== i)
              return b;
          }
        } else c[g] === h && (c[g] = a);
    }
  };
}, gN = (t, {
  visitFnGetter: e = Ea,
  nodeTypeGetter: r = En,
  breakSymbol: s = ee,
  deleteNodeSymbol: n = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    async enter(l, p, f, d, u, m) {
      let h = l, y = !1;
      const g = {
        ...m,
        replaceWith(v, b) {
          m.replaceWith(v, b), h = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const b = e(t[v], r(h), !1);
          if (typeof b == "function") {
            const O = await b.call(t[v], h, p, f, d, u, g);
            if (O === i)
              c[v] = h;
            else if (O === s)
              c[v] = s;
            else {
              if (O === n)
                return O;
              if (O !== void 0)
                if (o)
                  h = O, y = !0;
                else
                  return O;
            }
          }
        }
      return y ? h : void 0;
    },
    async leave(l, p, f, d, u, m) {
      let h = l;
      const y = {
        ...m,
        replaceWith(g, v) {
          m.replaceWith(g, v), h = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const v = e(t[g], r(h), !0);
          if (typeof v == "function") {
            const b = await v.call(t[g], h, p, f, d, u, y);
            if (b === s)
              c[g] = s;
            else if (b !== void 0 && b !== i)
              return b;
          }
        } else c[g] === h && (c[g] = a);
    }
  };
};
$a[Symbol.for("nodejs.util.promisify.custom")] = gN;
const Nf = (t, e, {
  keyMap: r = null,
  state: s = {},
  breakSymbol: n = ee,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ea,
  nodeTypeGetter: c = En,
  nodePredicate: l = pg,
  nodeCloneFn: p = kf,
  detectCycles: f = !0
} = {}) => {
  const d = r || {};
  let u, m = Array.isArray(t), h = [t], y = -1, g, v = [], b = t;
  const O = [], I = [];
  do {
    y += 1;
    const D = y === h.length;
    let A;
    const q = D && v.length !== 0;
    if (D) {
      if (A = I.length === 0 ? void 0 : O.pop(), b = g, g = I.pop(), q)
        if (m) {
          b = b.slice();
          let j = 0;
          for (const [T, U] of v) {
            const X = T - j;
            U === i ? (b.splice(X, 1), j += 1) : b[X] = U;
          }
        } else {
          b = p(b);
          for (const [j, T] of v)
            b[j] = T;
        }
      y = u.index, h = u.keys, v = u.edits, m = u.inArray, u = u.prev;
    } else if (g !== i && g !== void 0) {
      if (A = m ? y : h[y], b = g[A], b === i || b === void 0)
        continue;
      O.push(A);
    }
    let w;
    if (!Array.isArray(b)) {
      var $;
      if (!l(b))
        throw new pt(`Invalid AST Node:  ${String(b)}`, {
          node: b
        });
      if (f && I.includes(b)) {
        O.pop();
        continue;
      }
      const j = a(e, c(b), D);
      if (j) {
        for (const [U, X] of Object.entries(s))
          e[U] = X;
        const T = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(U, X) {
            typeof X == "function" ? X(U, b, A, g, O, I) : g && (g[A] = U), D || (b = U);
          }
        };
        w = j.call(e, b, A, g, O, I, T);
      }
      if (typeof (($ = w) === null || $ === void 0 ? void 0 : $.then) == "function")
        throw new pt("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: j
        });
      if (w === n)
        break;
      if (w === o) {
        if (!D) {
          O.pop();
          continue;
        }
      } else if (w !== void 0 && (v.push([A, w]), !D))
        if (l(w))
          b = w;
        else {
          O.pop();
          continue;
        }
    }
    if (w === void 0 && q && v.push([A, b]), !D) {
      var C;
      u = {
        inArray: m,
        index: y,
        keys: h,
        edits: v,
        prev: u
      }, m = Array.isArray(b), h = m ? b : (C = d[c(b)]) !== null && C !== void 0 ? C : [], y = -1, v = [], g !== i && g !== void 0 && I.push(g), g = b;
    }
  } while (u !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
Nf[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: s = {},
  breakSymbol: n = ee,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ea,
  nodeTypeGetter: c = En,
  nodePredicate: l = pg,
  nodeCloneFn: p = kf,
  detectCycles: f = !0
} = {}) => {
  const d = r || {};
  let u, m = Array.isArray(t), h = [t], y = -1, g, v = [], b = t;
  const O = [], I = [];
  do {
    y += 1;
    const C = y === h.length;
    let D;
    const A = C && v.length !== 0;
    if (C) {
      if (D = I.length === 0 ? void 0 : O.pop(), b = g, g = I.pop(), A)
        if (m) {
          b = b.slice();
          let w = 0;
          for (const [j, T] of v) {
            const U = j - w;
            T === i ? (b.splice(U, 1), w += 1) : b[U] = T;
          }
        } else {
          b = p(b);
          for (const [w, j] of v)
            b[w] = j;
        }
      y = u.index, h = u.keys, v = u.edits, m = u.inArray, u = u.prev;
    } else if (g !== i && g !== void 0) {
      if (D = m ? y : h[y], b = g[D], b === i || b === void 0)
        continue;
      O.push(D);
    }
    let q;
    if (!Array.isArray(b)) {
      if (!l(b))
        throw new pt(`Invalid AST Node: ${String(b)}`, {
          node: b
        });
      if (f && I.includes(b)) {
        O.pop();
        continue;
      }
      const w = a(e, c(b), C);
      if (w) {
        for (const [T, U] of Object.entries(s))
          e[T] = U;
        const j = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(T, U) {
            typeof U == "function" ? U(T, b, D, g, O, I) : g && (g[D] = T), C || (b = T);
          }
        };
        q = await w.call(e, b, D, g, O, I, j);
      }
      if (q === n)
        break;
      if (q === o) {
        if (!C) {
          O.pop();
          continue;
        }
      } else if (q !== void 0 && (v.push([D, q]), !C))
        if (l(q))
          b = q;
        else {
          O.pop();
          continue;
        }
    }
    if (q === void 0 && A && v.push([D, b]), !C) {
      var $;
      u = {
        inArray: m,
        index: y,
        keys: h,
        edits: v,
        prev: u
      }, m = Array.isArray(b), h = m ? b : ($ = d[c(b)]) !== null && $ !== void 0 ? $ : [], y = -1, v = [], g !== i && g !== void 0 && I.push(g), g = b;
    }
  } while (u !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
class hg extends pt {
  constructor(r, s) {
    super(r, s);
    x(this, "value");
    typeof s < "u" && (this.value = s.value);
  }
}
class bN extends hg {
}
class xN extends hg {
}
const N = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, s = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof ns) {
    const {
      key: n,
      value: i
    } = t, o = xe(n) ? N(n, s) : n, a = xe(i) ? N(i, s) : i, c = new ns(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof Qi) {
    const n = (a) => N(a, s), i = [...t].map(n), o = new Qi(i);
    return r.set(t, o), o;
  }
  if (t instanceof an) {
    const n = (a) => N(a, s), i = [...t].map(n), o = new an(i);
    return r.set(t, o), o;
  }
  if (xe(t)) {
    const n = Je(t);
    if (r.set(t, n), t.content)
      if (xe(t.content))
        n.content = N(t.content, s);
      else if (t.content instanceof ns)
        n.content = N(t.content, s);
      else if (Array.isArray(t.content)) {
        const i = (o) => N(o, s);
        n.content = t.content.map(i);
      } else
        n.content = t.content;
    else
      n.content = t.content;
    return n;
  }
  throw new bN("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
N.safe = (t) => {
  try {
    return N(t);
  } catch {
    return t;
  }
};
const dg = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new ns(e, r);
}, SN = (t) => {
  const e = [...t];
  return new an(e);
}, wN = (t) => {
  const e = [...t];
  return new Qi(e);
}, mg = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = N(t.meta)), t.attributes.length > 0 && (e._attributes = N(t.attributes)), xe(t.content)) {
    const r = t.content;
    e.content = mg(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof ns ? e.content = dg(t.content) : e.content = t.content;
  return e;
}, Je = (t) => {
  if (t instanceof ns)
    return dg(t);
  if (t instanceof Qi)
    return wN(t);
  if (t instanceof an)
    return SN(t);
  if (xe(t))
    return mg(t);
  throw new xN("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
Je.safe = (t) => {
  try {
    return Je(t);
  } catch {
    return t;
  }
};
const _s = (t) => ce(t) ? "ObjectElement" : qe(t) ? "ArrayElement" : vt(t) ? "MemberElement" : G(t) ? "StringElement" : wn(t) ? "BooleanElement" : Ff(t) ? "NumberElement" : Mf(t) ? "NullElement" : ig(t) ? "LinkElement" : og(t) ? "RefElement" : void 0, vg = (t) => xe(t) ? Je(t) : kf(t), yg = Se(_s, Lr), _t = {
  ObjectElement: ["content"],
  ArrayElement: ["content"],
  MemberElement: ["key", "value"],
  StringElement: [],
  BooleanElement: [],
  NumberElement: [],
  NullElement: [],
  RefElement: [],
  LinkElement: [],
  Annotation: [],
  Comment: [],
  ParseResultElement: ["content"],
  SourceMap: ["content"]
};
class gg {
  constructor({
    predicate: e = of,
    returnOnTrue: r,
    returnOnFalse: s
  } = {}) {
    x(this, "result");
    x(this, "predicate");
    x(this, "returnOnTrue");
    x(this, "returnOnFalse");
    this.result = [], this.predicate = e, this.returnOnTrue = r, this.returnOnFalse = s;
  }
  enter(e) {
    return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
  }
}
const $e = (t, e, {
  keyMap: r = _t,
  ...s
} = {}) => Nf(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: _s,
  nodePredicate: yg,
  nodeCloneFn: vg,
  ...s
});
$e[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = _t,
  ...s
} = {}) => Nf[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: _s,
  nodePredicate: yg,
  nodeCloneFn: vg,
  ...s
});
const bg = {
  toolboxCreator: fg,
  visitorOptions: {
    nodeTypeGetter: _s,
    exposeEdits: !0
  }
}, Ct = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const s = oa(bg, r), {
    toolboxCreator: n,
    visitorOptions: i
  } = s, o = n(), a = e.map((p) => p(o)), c = $a(a.map(zi({}, "visitor")), {
    ...i
  });
  a.forEach(sn(["pre"], []));
  const l = $e(t, c, i);
  return a.forEach(sn(["post"], [])), l;
}, ON = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const s = oa(bg, r), {
    toolboxCreator: n,
    visitorOptions: i
  } = s, o = n(), a = e.map((d) => d(o)), c = $a[Symbol.for("nodejs.util.promisify.custom")], l = $e[Symbol.for("nodejs.util.promisify.custom")], p = c(a.map(zi({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(sn(["pre"], [])));
  const f = await l(t, p, i);
  return await Promise.allSettled(a.map(sn(["post"], []))), f;
};
Ct[Symbol.for("nodejs.util.promisify.custom")] = ON;
var xg = { exports: {} };
(function(t) {
  var e = (() => {
    var r = Object.defineProperty, s = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (O, I, $) => I in O ? r(O, I, { enumerable: !0, configurable: !0, writable: !0, value: $ }) : O[I] = $, l = (O, I) => {
      for (var $ in I || (I = {}))
        o.call(I, $) && c(O, $, I[$]);
      if (i)
        for (var $ of i(I))
          a.call(I, $) && c(O, $, I[$]);
      return O;
    }, p = (O, I) => {
      for (var $ in I)
        r(O, $, { get: I[$], enumerable: !0 });
    }, f = (O, I, $, C) => {
      if (I && typeof I == "object" || typeof I == "function")
        for (let D of n(I))
          !o.call(O, D) && D !== $ && r(O, D, { get: () => I[D], enumerable: !(C = s(I, D)) || C.enumerable });
      return O;
    }, d = (O) => f(r({}, "__esModule", { value: !0 }), O), u = (O, I, $) => c(O, typeof I != "symbol" ? I + "" : I, $), m = {};
    p(m, {
      DEFAULT_OPTIONS: () => g,
      DEFAULT_UUID_LENGTH: () => y,
      default: () => b
    });
    var h = "5.2.2", y = 6, g = {
      dictionary: "alphanum",
      shuffle: !0,
      debug: !1,
      length: y,
      counter: 0
    }, v = class {
      constructor(I = {}) {
        u(this, "counter"), u(this, "debug"), u(this, "dict"), u(this, "version"), u(this, "dictIndex", 0), u(this, "dictRange", []), u(this, "lowerBound", 0), u(this, "upperBound", 0), u(this, "dictLength", 0), u(this, "uuidLength"), u(this, "_digit_first_ascii", 48), u(this, "_digit_last_ascii", 58), u(this, "_alpha_lower_first_ascii", 97), u(this, "_alpha_lower_last_ascii", 123), u(this, "_hex_last_ascii", 103), u(this, "_alpha_upper_first_ascii", 65), u(this, "_alpha_upper_last_ascii", 91), u(this, "_number_dict_ranges", {
          digits: [this._digit_first_ascii, this._digit_last_ascii]
        }), u(this, "_alpha_dict_ranges", {
          lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
          upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
        }), u(this, "_alpha_lower_dict_ranges", {
          lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
        }), u(this, "_alpha_upper_dict_ranges", {
          upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
        }), u(this, "_alphanum_dict_ranges", {
          digits: [this._digit_first_ascii, this._digit_last_ascii],
          lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
          upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
        }), u(this, "_alphanum_lower_dict_ranges", {
          digits: [this._digit_first_ascii, this._digit_last_ascii],
          lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
        }), u(this, "_alphanum_upper_dict_ranges", {
          digits: [this._digit_first_ascii, this._digit_last_ascii],
          upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
        }), u(this, "_hex_dict_ranges", {
          decDigits: [this._digit_first_ascii, this._digit_last_ascii],
          alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
        }), u(this, "_dict_ranges", {
          _number_dict_ranges: this._number_dict_ranges,
          _alpha_dict_ranges: this._alpha_dict_ranges,
          _alpha_lower_dict_ranges: this._alpha_lower_dict_ranges,
          _alpha_upper_dict_ranges: this._alpha_upper_dict_ranges,
          _alphanum_dict_ranges: this._alphanum_dict_ranges,
          _alphanum_lower_dict_ranges: this._alphanum_lower_dict_ranges,
          _alphanum_upper_dict_ranges: this._alphanum_upper_dict_ranges,
          _hex_dict_ranges: this._hex_dict_ranges
        }), u(this, "log", (...w) => {
          const j = [...w];
          if (j[0] = "[short-unique-id] ".concat(w[0]), this.debug === !0 && typeof console < "u" && console !== null) {
            console.log(...j);
            return;
          }
        }), u(this, "_normalizeDictionary", (w, j) => {
          let T;
          if (w && Array.isArray(w) && w.length > 1)
            T = w;
          else {
            T = [], this.dictIndex = 0;
            const U = "_".concat(w, "_dict_ranges"), X = this._dict_ranges[U];
            let de = 0;
            for (const [, L] of Object.entries(X)) {
              const [P, H] = L;
              de += Math.abs(H - P);
            }
            T = new Array(de);
            let Oe = 0;
            for (const [, L] of Object.entries(X)) {
              this.dictRange = L, this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1];
              const P = this.lowerBound <= this.upperBound, H = this.lowerBound, z = this.upperBound;
              if (P)
                for (let B = H; B < z; B++)
                  T[Oe++] = String.fromCharCode(B), this.dictIndex = B;
              else
                for (let B = H; B > z; B--)
                  T[Oe++] = String.fromCharCode(B), this.dictIndex = B;
            }
            T.length = Oe;
          }
          if (j) {
            const U = T.length;
            for (let X = U - 1; X > 0; X--) {
              const de = Math.floor(Math.random() * (X + 1));
              [T[X], T[de]] = [T[de], T[X]];
            }
          }
          return T;
        }), u(this, "setDictionary", (w, j) => {
          this.dict = this._normalizeDictionary(w, j), this.dictLength = this.dict.length, this.setCounter(0);
        }), u(this, "seq", () => this.sequentialUUID()), u(this, "sequentialUUID", () => {
          const w = this.dictLength, j = this.dict;
          let T = this.counter;
          const U = [];
          do {
            const de = T % w;
            T = Math.trunc(T / w), U.push(j[de]);
          } while (T !== 0);
          const X = U.join("");
          return this.counter += 1, X;
        }), u(this, "rnd", (w = this.uuidLength || y) => this.randomUUID(w)), u(this, "randomUUID", (w = this.uuidLength || y) => {
          if (w === null || typeof w > "u" || w < 1)
            throw new Error("Invalid UUID Length Provided");
          const j = new Array(w), T = this.dictLength, U = this.dict;
          for (let X = 0; X < w; X++) {
            const de = Math.floor(Math.random() * T);
            j[X] = U[de];
          }
          return j.join("");
        }), u(this, "fmt", (w, j) => this.formattedUUID(w, j)), u(this, "formattedUUID", (w, j) => {
          const T = {
            $r: this.randomUUID,
            $s: this.sequentialUUID,
            $t: this.stamp
          };
          return w.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (X) => {
            const de = X.slice(0, 2), Oe = Number.parseInt(X.slice(2), 10);
            return de === "$s" ? T[de]().padStart(Oe, "0") : de === "$t" && j ? T[de](Oe, j) : T[de](Oe);
          });
        }), u(this, "availableUUIDs", (w = this.uuidLength) => Number.parseFloat(([...new Set(this.dict)].length ** w).toFixed(0))), u(this, "_collisionCache", /* @__PURE__ */ new Map()), u(this, "approxMaxBeforeCollision", (w = this.availableUUIDs(this.uuidLength)) => {
          const j = w, T = this._collisionCache.get(j);
          if (T !== void 0)
            return T;
          const U = Number.parseFloat(Math.sqrt(Math.PI / 2 * w).toFixed(20));
          return this._collisionCache.set(j, U), U;
        }), u(this, "collisionProbability", (w = this.availableUUIDs(this.uuidLength), j = this.uuidLength) => Number.parseFloat(
          (this.approxMaxBeforeCollision(w) / this.availableUUIDs(j)).toFixed(20)
        )), u(this, "uniqueness", (w = this.availableUUIDs(this.uuidLength)) => {
          const j = Number.parseFloat(
            (1 - this.approxMaxBeforeCollision(w) / w).toFixed(20)
          );
          return j > 1 ? 1 : j < 0 ? 0 : j;
        }), u(this, "getVersion", () => this.version), u(this, "stamp", (w, j) => {
          const T = Math.floor(+(j || /* @__PURE__ */ new Date()) / 1e3).toString(16);
          if (typeof w == "number" && w === 0)
            return T;
          if (typeof w != "number" || w < 10)
            throw new Error(
              [
                "Param finalLength must be a number greater than or equal to 10,",
                "or 0 if you want the raw hexadecimal timestamp"
              ].join(`
`)
            );
          const U = w - 9, X = Math.round(Math.random() * (U > 15 ? 15 : U)), de = this.randomUUID(U);
          return "".concat(de.substring(0, X)).concat(T).concat(de.substring(X)).concat(X.toString(16));
        }), u(this, "parseStamp", (w, j) => {
          if (j && !/t0|t[1-9]\d{1,}/.test(j))
            throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
          const T = j ? j.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (X) => {
            const de = {
              $r: (P) => [...Array(P)].map(() => "r").join(""),
              $s: (P) => [...Array(P)].map(() => "s").join(""),
              $t: (P) => [...Array(P)].map(() => "t").join("")
            }, Oe = X.slice(0, 2), L = Number.parseInt(X.slice(2), 10);
            return de[Oe](L);
          }).replace(/^(.*?)(t{8,})(.*)$/g, (X, de, Oe) => w.substring(de.length, de.length + Oe.length)) : w;
          if (T.length === 8)
            return new Date(Number.parseInt(T, 16) * 1e3);
          if (T.length < 10)
            throw new Error("Stamp length invalid");
          const U = Number.parseInt(T.substring(T.length - 1), 16);
          return new Date(Number.parseInt(T.substring(U, U + 8), 16) * 1e3);
        }), u(this, "setCounter", (w) => {
          this.counter = w;
        }), u(this, "validate", (w, j) => {
          const T = j ? this._normalizeDictionary(j) : this.dict;
          return w.split("").every((U) => T.includes(U));
        });
        const $ = l(l({}, g), I);
        this.counter = 0, this.debug = !1, this.dict = [], this.version = h;
        const { dictionary: C, shuffle: D, length: A, counter: q } = $;
        this.uuidLength = A, this.setDictionary(C, D), this.setCounter(q), this.debug = $.debug, this.log(this.dict), this.log(
          "Generator instantiated with Dictionary Size ".concat(this.dictLength, " and counter set to ").concat(this.counter)
        ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this);
      }
    };
    u(v, "default", v);
    var b = v;
    return d(m);
  })();
  t.exports = e.default, typeof window < "u" && (e = e.default);
})(xg);
var EN = xg.exports;
const $N = /* @__PURE__ */ Go(EN);
class AN extends pt {
  constructor(r, s) {
    super(r, s);
    x(this, "value");
    typeof s < "u" && (this.value = s.value);
  }
}
class Df {
  constructor({
    length: e = 6
  } = {}) {
    x(this, "uuid");
    x(this, "identityMap");
    this.uuid = new $N({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  }
  identify(e) {
    if (!xe(e))
      throw new AN("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
        value: e
      });
    if (e.meta.hasKey("id") && G(e.meta.get("id")) && !e.meta.get("id").equals(""))
      return e.id;
    if (this.identityMap.has(e))
      return this.identityMap.get(e);
    const r = new Bt(this.generateId());
    return this.identityMap.set(e, r), r;
  }
  forget(e) {
    return this.identityMap.has(e) ? (this.identityMap.delete(e), !0) : !1;
  }
  generateId() {
    return this.uuid.randomUUID();
  }
}
new Df();
class jN extends Array {
  constructor() {
    super(...arguments);
    x(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new Lc("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new Lc("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new Lc("latest method in MediaTypes class is not yet implemented.");
  }
}
const PN = (t, {
  Type: e,
  plugins: r = []
}) => {
  const s = new e(t);
  return xe(t) && (t.meta.length > 0 && (s.meta = N(t.meta)), t.attributes.length > 0 && (s.attributes = N(t.attributes))), Ct(s, r, {
    toolboxCreator: fg,
    visitorOptions: {
      nodeTypeGetter: _s
    }
  });
}, ot = (t) => (e, r = {}) => PN(e, {
  ...r,
  Type: t
});
F.refract = ot(F);
ae.refract = ot(ae);
Bt.refract = ot(Bt);
Ut.refract = ot(Ut);
Ml.refract = ot(Ml);
Fl.refract = ot(Fl);
kl.refract = ot(kl);
Nt.refract = ot(Nt);
Zi.refract = ot(Zi);
eo.refract = ot(eo);
ht.refract = ot(ht);
to.refract = ot(to);
const TN = (t, e) => {
  const r = new gg({
    predicate: t
  });
  return $e(e, r), new an(r.result);
}, Sg = (t, e) => {
  const r = new gg({
    predicate: t,
    returnOnTrue: ee
  });
  return $e(e, r), cy(void 0, [0], r.result);
}, wg = (t) => typeof (t == null ? void 0 : t.type) == "string" ? t.type : _s(t), Og = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ..._t
}, Eg = (t, e, {
  keyMap: r = Og,
  ...s
} = {}) => $e(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: wg,
  nodePredicate: zt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...s
});
Eg[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = Og,
  ...r
} = {}) => $e[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: wg,
  nodePredicate: zt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class _N {
  constructor(e) {
    x(this, "type", "EphemeralArray");
    x(this, "content", []);
    x(this, "reference");
    this.content = e, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}
class CN {
  constructor(e) {
    x(this, "type", "EphemeralObject");
    x(this, "content", []);
    x(this, "reference");
    this.content = e, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
let RN = class {
  constructor() {
    x(this, "ObjectElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new CN(e.content);
        return this.references.set(e, r), r;
      }
    });
    x(this, "EphemeralObject", {
      leave: (e) => e.toObject()
    });
    x(this, "MemberElement", {
      enter: (e) => [e.key, e.value]
    });
    x(this, "ArrayElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new _N(e.content);
        return this.references.set(e, r), r;
      }
    });
    x(this, "EphemeralArray", {
      leave: (e) => e.toArray()
    });
    x(this, "references", /* @__PURE__ */ new WeakMap());
  }
  BooleanElement(e) {
    return e.toValue();
  }
  NumberElement(e) {
    return e.toValue();
  }
  StringElement(e) {
    return e.toValue();
  }
  NullElement() {
    return null;
  }
  RefElement(e, ...r) {
    var s;
    const n = r[3];
    return ((s = n[n.length - 1]) === null || s === void 0 ? void 0 : s.type) === "EphemeralObject" ? Symbol.for("delete-node") : String(e.toValue());
  }
  LinkElement(e) {
    return G(e.href) ? e.href.toValue() : "";
  }
};
const E = (t) => xe(t) ? G(t) || Ff(t) || wn(t) || Mf(t) ? t.toValue() : Eg(t, new RN()) : t, Oi = (t, e = /* @__PURE__ */ new WeakMap()) => (vt(t) ? (e.set(t.key, t), Oi(t.key, e), e.set(t.value, t), Oi(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), Oi(r, e);
}), e), IN = (t, e, r) => {
  const s = r.get(t);
  vt(s) && (s.key === t && (s.key = e, r.delete(t), r.set(e, s)), s.value === t && (s.value = e, r.delete(t), r.set(e, s)));
}, FN = (t, e, r) => {
  const s = r.get(t);
  ce(s) && (s.content = s.map((n, i, o) => o === t ? (r.delete(t), r.set(e, s), e) : o));
}, MN = (t, e, r) => {
  const s = r.get(t);
  qe(s) && (s.content = s.map((n) => n === t ? (r.delete(t), r.set(e, s), e) : n));
};
class kN {
  constructor({
    element: e
  }) {
    x(this, "element");
    x(this, "edges");
    this.element = e;
  }
  transclude(e, r) {
    var s;
    if (e === this.element) return r;
    if (e === r) return this.element;
    this.edges = (s = this.edges) !== null && s !== void 0 ? s : Oi(this.element);
    const n = this.edges.get(e);
    if (!hr(n))
      return ce(n) ? FN(e, r, this.edges) : qe(n) ? MN(e, r, this.edges) : vt(n) && IN(e, r, this.edges), this.element;
  }
}
const NN = (t, e, r) => new kN({
  element: r
}).transclude(t, e), dr = (t, e) => {
  const r = ds(t, e);
  return vT((s) => {
    if (Vt(s) && qs("$ref", s) && ST(Lr, "$ref", s)) {
      const n = Ce(["$ref"], s), i = Of("#/", n);
      return Ce(i.split("/"), r);
    }
    return Vt(s) ? dr(s, r) : s;
  }, t);
}, $g = (t, e = ug) => {
  if (Lr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return Vt(t) && qs("element", t) ? e.fromRefract(t) : e.toElement(t);
}, ro = (t) => {
  const e = t.meta.length > 0 ? N(t.meta) : void 0, r = t.attributes.length > 0 ? N(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, so = (t, e) => e.clone && e.isMergeableElement(t) ? $t(ro(t), t, e) : t, DN = (t, e) => {
  if (typeof e.customMerge != "function")
    return $t;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : $t;
}, LN = (t) => typeof t.customMetaMerge != "function" ? (e) => N(e) : t.customMetaMerge, VN = (t) => typeof t.customAttributesMerge != "function" ? (e) => N(e) : t.customAttributesMerge, BN = (t, e, r) => t.concat(e)["fantasy-land/map"]((s) => so(s, r)), UN = (t, e, r) => {
  const s = ce(t) ? ro(t) : ro(e);
  return ce(t) && t.forEach((n, i, o) => {
    const a = Je(o);
    a.value = so(n, r), s.content.push(a);
  }), e.forEach((n, i, o) => {
    const a = E(i);
    let c;
    if (ce(t) && t.hasKey(a) && r.isMergeableElement(n)) {
      const l = t.get(a);
      c = Je(o), c.value = DN(i, r)(l, n);
    } else
      c = Je(o), c.value = so(n, r);
    s.remove(a), s.content.push(c);
  }), s;
}, mi = {
  clone: !0,
  isMergeableElement: (t) => ce(t) || qe(t),
  arrayElementMerge: BN,
  objectElementMerge: UN,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
}, $t = (t, e, r) => {
  var s, n, i;
  const o = {
    ...mi,
    ...r
  };
  o.isMergeableElement = (s = o.isMergeableElement) !== null && s !== void 0 ? s : mi.isMergeableElement, o.arrayElementMerge = (n = o.arrayElementMerge) !== null && n !== void 0 ? n : mi.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : mi.objectElementMerge;
  const a = qe(e), c = qe(t);
  if (!(a === c))
    return so(e, o);
  const p = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return p.meta = LN(o)(t.meta, e.meta), p.attributes = VN(o)(t.attributes, e.attributes), p;
};
$t.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new F() : t.reduce((r, s) => $t(r, s, e), ro(t[0]));
};
class Lf extends ye {
}
class Ag extends Lf {
}
const JN = async (t, e) => {
  let r = t, s = !1;
  if (!ag(t)) {
    const o = Je(t);
    o.classes.push("result"), r = new ht([o]), s = !0;
  }
  const n = new nn({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await Pf("canDereference", [n, e], e.dereference.strategies);
  if (bn(i))
    throw new Ag(n.uri);
  try {
    const {
      result: o
    } = await Tf("dereference", [n, e], i);
    return s ? o.get(0) : o;
  } catch (o) {
    throw new Lf(`Error while dereferencing file "${n.uri}"`, {
      cause: o
    });
  }
};
let $n = class {
  constructor({
    name: e,
    allowEmpty: r = !0,
    sourceMap: s = !1,
    fileExtensions: n = [],
    mediaTypes: i = []
  }) {
    x(this, "name");
    /**
     * Whether to allow "empty" files. This includes zero-byte files.
     */
    x(this, "allowEmpty");
    /**
     * Whether to generate source map during parsing.
     */
    x(this, "sourceMap");
    /**
     * List of supported file extensions.
     */
    x(this, "fileExtensions");
    /**
     * List of supported media types.
     */
    x(this, "mediaTypes");
    this.name = e, this.allowEmpty = r, this.sourceMap = s, this.fileExtensions = n, this.mediaTypes = i;
  }
};
class HN {
  constructor({
    name: e
  }) {
    x(this, "name");
    this.name = e;
  }
}
class qN extends HN {
  constructor(r) {
    const {
      name: s = "http-resolver",
      timeout: n = 5e3,
      redirects: i = 5,
      withCredentials: o = !1
    } = r ?? {};
    super({
      name: s
    });
    x(this, "timeout");
    x(this, "redirects");
    x(this, "withCredentials");
    this.timeout = n, this.redirects = i, this.withCredentials = o;
  }
  // eslint-disable-next-line class-methods-use-this
  canRead(r) {
    return pa(r.uri);
  }
}
class zN {
  constructor({
    name: e
  }) {
    x(this, "name");
    this.name = e;
  }
}
class GN {
  constructor({
    name: e
  }) {
    x(this, "name");
    this.name = e;
  }
}
class qc extends Array {
  includesCycle(e) {
    return this.filter((r) => r.has(e)).length > 1;
  }
  includes(e, r) {
    return e instanceof Set ? super.includes(e, r) : this.some((s) => s.has(e));
  }
  findItem(e) {
    for (const r of this)
      for (const s of r)
        if (xe(s) && e(s))
          return s;
  }
}
let Dt = class {
  constructor({
    uri: e,
    depth: r = 0,
    refSet: s,
    value: n
  }) {
    x(this, "uri");
    x(this, "depth");
    x(this, "value");
    x(this, "refSet");
    x(this, "errors");
    this.uri = e, this.value = n, this.depth = r, this.refSet = s, this.errors = [];
  }
};
class jg extends ye {
}
class KN extends jg {
}
class WN extends ye {
}
class Vf extends WN {
}
class YN extends jg {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
class is extends Lf {
}
class XN extends _f {
}
class Jt extends jl {
}
const QN = async (t, e = {}) => {
  const r = Ay($y, e);
  return JN(t, r);
};
function Sd(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, s = new Array(e); r < e; r++) s[r] = t[r];
  return s;
}
function ZN(t) {
  if (Array.isArray(t)) return t;
}
function eD(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function tD(t, e) {
  for (var r = 0; r < e.length; r++) {
    var s = e[r];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
  }
}
function rD(t, e, r) {
  return e && tD(t.prototype, e), t;
}
function Pg(t, e) {
  return e != null && typeof Symbol < "u" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
}
function sD(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var s = [], n = !0, i = !1, o, a;
    try {
      for (r = r.call(t); !(n = (o = r.next()).done) && (s.push(o.value), !(e && s.length === e)); n = !0)
        ;
    } catch (c) {
      i = !0, a = c;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (i) throw a;
      }
    }
    return s;
  }
}
function nD() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function iD(t, e) {
  return ZN(t) || sD(t, e) || oD(t, e) || nD();
}
function os(t) {
  "@swc/helpers - typeof";
  return t && typeof Symbol < "u" && t.constructor === Symbol ? "symbol" : typeof t;
}
function oD(t, e) {
  if (t) {
    if (typeof t == "string") return Sd(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sd(t, e);
  }
}
var Tg = function(t) {
  throw TypeError(t);
}, _g = function(t, e, r) {
  return e.has(t) || Tg("Cannot " + r);
}, Ue = function(t, e, r) {
  return _g(t, e, "read from private field"), e.get(t);
}, wd = function(t, e, r) {
  return e.has(t) ? Tg("Cannot add the same private member more than once") : Pg(e, WeakSet) ? e.add(t) : e.set(t, r);
}, zc = function(t, e, r, s) {
  return _g(t, e, "write to private field"), e.set(t, r), r;
}, Cs = function(t) {
  return Object.prototype.toString.call(t);
}, Cg = function(t) {
  return ArrayBuffer.isView(t) && !Pg(t, DataView);
}, aD = function(t) {
  return Cs(t) === "[object Date]";
}, cD = function(t) {
  return Cs(t) === "[object RegExp]";
}, lD = function(t) {
  return Cs(t) === "[object Error]";
}, uD = function(t) {
  return Cs(t) === "[object Boolean]";
}, fD = function(t) {
  return Cs(t) === "[object Number]";
}, pD = function(t) {
  return Cs(t) === "[object String]";
}, Rg = Array.isArray, hD = Object.getOwnPropertyDescriptor, dD = Object.prototype.propertyIsEnumerable, mD = Object.getOwnPropertySymbols, Ei = Object.prototype.hasOwnProperty;
function Bf(t) {
  for (var e = Object.keys(t), r = mD(t), s = 0; s < r.length; s++)
    dD.call(t, r[s]) && e.push(r[s]);
  return e;
}
function vD(t, e) {
  var r;
  return !(!((r = hD(t, e)) === null || r === void 0) && r.writable);
}
function Ig(t, e) {
  if ((typeof t > "u" ? "undefined" : os(t)) === "object" && t !== null) {
    var r;
    if (Rg(t))
      r = [];
    else if (aD(t))
      r = new Date(t.getTime ? t.getTime() : t);
    else if (cD(t))
      r = new RegExp(t);
    else if (lD(t))
      r = {
        message: t.message
      };
    else if (uD(t) || fD(t) || pD(t))
      r = Object(t);
    else {
      if (Cg(t))
        return t.slice();
      r = Object.create(Object.getPrototypeOf(t));
    }
    var s = e.includeSymbols ? Bf : Object.keys, n = !0, i = !1, o = void 0;
    try {
      for (var a = s(t)[Symbol.iterator](), c; !(n = (c = a.next()).done); n = !0) {
        var l = c.value;
        r[l] = t[l];
      }
    } catch (p) {
      i = !0, o = p;
    } finally {
      try {
        !n && a.return != null && a.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return r;
  }
  return t;
}
var Fg = {
  includeSymbols: !1,
  immutable: !1
};
function Od(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fg, s = [], n = [], i = !0, o = r.includeSymbols ? Bf : Object.keys, a = !!r.immutable;
  return function c(l) {
    var p = a ? Ig(l, r) : l, f = {}, d = !0, u = {
      node: p,
      node_: l,
      path: [].concat(s),
      parent: n[n.length - 1],
      parents: n,
      key: s[s.length - 1],
      isRoot: s.length === 0,
      level: s.length,
      circular: void 0,
      isLeaf: !1,
      notLeaf: !0,
      notRoot: !0,
      isFirst: !1,
      isLast: !1,
      update: function(j) {
        var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        u.isRoot || (u.parent.node[u.key] = j), u.node = j, T && (d = !1);
      },
      delete: function(j) {
        delete u.parent.node[u.key], j && (d = !1);
      },
      remove: function(j) {
        Rg(u.parent.node) ? u.parent.node.splice(u.key, 1) : delete u.parent.node[u.key], j && (d = !1);
      },
      keys: null,
      before: function(j) {
        f.before = j;
      },
      after: function(j) {
        f.after = j;
      },
      pre: function(j) {
        f.pre = j;
      },
      post: function(j) {
        f.post = j;
      },
      stop: function() {
        i = !1;
      },
      block: function() {
        d = !1;
      }
    };
    if (!i)
      return u;
    function m() {
      if (os(u.node) === "object" && u.node !== null) {
        (!u.keys || u.node_ !== u.node) && (u.keys = o(u.node)), u.isLeaf = u.keys.length === 0;
        for (var w = 0; w < n.length; w++)
          if (n[w].node_ === l) {
            u.circular = n[w];
            break;
          }
      } else
        u.isLeaf = !0, u.keys = null;
      u.notLeaf = !u.isLeaf, u.notRoot = !u.isRoot;
    }
    m();
    var h = e.call(u, u.node);
    if (h !== void 0 && u.update && u.update(h), f.before && f.before.call(u, u.node), !d)
      return u;
    if (os(u.node) === "object" && u.node !== null && !u.circular) {
      n.push(u), m();
      var y, g = !0, v = !1, b = void 0;
      try {
        for (var O = Object.entries((y = u.keys) !== null && y !== void 0 ? y : [])[Symbol.iterator](), I; !(g = (I = O.next()).done); g = !0) {
          var $ = iD(I.value, 2), C = $[0], D = $[1], A;
          s.push(D), f.pre && f.pre.call(u, u.node[D], D);
          var q = c(u.node[D]);
          a && Ei.call(u.node, D) && !vD(u.node, D) && (u.node[D] = q.node), q.isLast = !((A = u.keys) === null || A === void 0) && A.length ? +C === u.keys.length - 1 : !1, q.isFirst = +C == 0, f.post && f.post.call(u, q), s.pop();
        }
      } catch (w) {
        v = !0, b = w;
      } finally {
        try {
          !g && O.return != null && O.return();
        } finally {
          if (v)
            throw b;
        }
      }
      n.pop();
    }
    return f.after && f.after.call(u, u.node), u;
  }(t).node;
}
var Ge, rr, Rt = /* @__PURE__ */ function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fg;
    eD(this, t), wd(this, Ge), wd(this, rr), zc(this, Ge, e), zc(this, rr, r);
  }
  return rD(t, [
    {
      /**
      * Get the element at the array `path`.
      */
      key: "get",
      value: function(r) {
        for (var s = Ue(this, Ge), n = 0; s && n < r.length; n++) {
          var i = r[n];
          if (!Ei.call(s, i) || !Ue(this, rr).includeSymbols && (typeof i > "u" ? "undefined" : os(i)) === "symbol")
            return;
          s = s[i];
        }
        return s;
      }
    },
    {
      /**
      * Return whether the element at the array `path` exists.
      */
      key: "has",
      value: function(r) {
        for (var s = Ue(this, Ge), n = 0; s && n < r.length; n++) {
          var i = r[n];
          if (!Ei.call(s, i) || !Ue(this, rr).includeSymbols && (typeof i > "u" ? "undefined" : os(i)) === "symbol")
            return !1;
          s = s[i];
        }
        return !0;
      }
    },
    {
      /**
      * Set the element at the array `path` to `value`.
      */
      key: "set",
      value: function(r, s) {
        var n = Ue(this, Ge), i = 0;
        for (i = 0; i < r.length - 1; i++) {
          var o = r[i];
          Ei.call(n, o) || (n[o] = {}), n = n[o];
        }
        return n[r[i]] = s, s;
      }
    },
    {
      /**
      * Execute `fn` for each node in the object and return a new object with the results of the walk. To update nodes in the result use `this.update(value)`.
      */
      key: "map",
      value: function(r) {
        return Od(Ue(this, Ge), r, {
          immutable: !0,
          includeSymbols: !!Ue(this, rr).includeSymbols
        });
      }
    },
    {
      /**
      * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
      */
      key: "forEach",
      value: function(r) {
        return zc(this, Ge, Od(Ue(this, Ge), r, Ue(this, rr))), Ue(this, Ge);
      }
    },
    {
      /**
      * For each node in the object, perform a [left-fold](http://en.wikipedia.org/wiki/Fold_(higher-order_function)) with the return value of `fn(acc, node)`.
      *
      * If `init` isn't specified, `init` is set to the root object for the first step and the root element is skipped.
      */
      key: "reduce",
      value: function(r, s) {
        var n = arguments.length === 1, i = n ? Ue(this, Ge) : s;
        return this.forEach(function(o) {
          (!this.isRoot || !n) && (i = r.call(this, i, o));
        }), i;
      }
    },
    {
      /**
      * Return an `Array` of every possible non-cyclic path in the object.
      * Paths are `Array`s of string keys.
      */
      key: "paths",
      value: function() {
        var r = [];
        return this.forEach(function() {
          r.push(this.path);
        }), r;
      }
    },
    {
      /**
      * Return an `Array` of every node in the object.
      */
      key: "nodes",
      value: function() {
        var r = [];
        return this.forEach(function() {
          r.push(this.node);
        }), r;
      }
    },
    {
      /**
      * Create a deep clone of the object.
      */
      key: "clone",
      value: function() {
        var r = [], s = [], n = Ue(this, rr);
        return Cg(Ue(this, Ge)) ? Ue(this, Ge).slice() : function i(o) {
          for (var a = 0; a < r.length; a++)
            if (r[a] === o)
              return s[a];
          if ((typeof o > "u" ? "undefined" : os(o)) === "object" && o !== null) {
            var c = Ig(o, n);
            r.push(o), s.push(c);
            var l = n.includeSymbols ? Bf : Object.keys, p = !0, f = !1, d = void 0;
            try {
              for (var u = l(o)[Symbol.iterator](), m; !(p = (m = u.next()).done); p = !0) {
                var h = m.value;
                c[h] = i(o[h]);
              }
            } catch (y) {
              f = !0, d = y;
            } finally {
              try {
                !p && u.return != null && u.return();
              } finally {
                if (f)
                  throw d;
              }
            }
            return r.pop(), s.pop(), c;
          }
          return o;
        }(Ue(this, Ge));
      }
    }
  ]), t;
}();
Ge = /* @__PURE__ */ new WeakMap();
rr = /* @__PURE__ */ new WeakMap();
var It = function(t, e) {
  return new Rt(t, e);
};
It.get = function(t, e, r) {
  return new Rt(t, r).get(e);
};
It.set = function(t, e, r, s) {
  return new Rt(t, s).set(e, r);
};
It.has = function(t, e, r) {
  return new Rt(t, r).has(e);
};
It.map = function(t, e, r) {
  return new Rt(t, r).map(e);
};
It.forEach = function(t, e, r) {
  return new Rt(t, r).forEach(e);
};
It.reduce = function(t, e, r, s) {
  return new Rt(t, s).reduce(e, r);
};
It.paths = function(t, e) {
  return new Rt(t, e).paths();
};
It.nodes = function(t, e) {
  return new Rt(t, e).nodes();
};
It.clone = function(t, e) {
  return new Rt(t, e).clone();
};
var yD = It;
const gD = ["properties"], bD = ["properties"], xD = [
  // Swagger 2.0
  "definitions",
  "parameters",
  "responses",
  "securityDefinitions",
  // OpenAPI 3.0
  "components/schemas",
  "components/responses",
  "components/parameters",
  "components/securitySchemes"
], SD = ["schema/example", "items/example"];
function Mg(t) {
  const e = t[t.length - 1], r = t[t.length - 2], s = t.join("/");
  return (
    // eslint-disable-next-line max-len
    gD.indexOf(e) > -1 && bD.indexOf(r) === -1 || xD.indexOf(s) > -1 || SD.some((n) => s.indexOf(n) > -1)
  );
}
function wD(t, e, {
  specmap: r,
  getBaseUrlForNodePath: s = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: n = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return yD(t).forEach(function() {
    if (n.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), l = Nl(this.node, s(a));
      i.push(r.replace(c, l));
    }
  }), i;
}
function Nl(t, e) {
  const [r, s] = t.split("#"), n = e ?? "", i = r ?? "";
  let o;
  if (pa(n))
    o = _e(n, i);
  else {
    const a = _e(ji, n), l = _e(a, i).replace(ji, "");
    o = i.startsWith("/") ? l : l.substring(1);
  }
  return s ? `${o}#${s}` : o;
}
const OD = /^([a-z]+:\/\/|\/\/)/i;
class ys extends pt {
}
const Mt = {}, Ed = /* @__PURE__ */ new WeakMap(), ED = [
  // OpenAPI 2.0 response examples
  (t) => (
    // ["paths", *, *, "responses", *, "examples"]
    t[0] === "paths" && t[3] === "responses" && t[5] === "examples"
  ),
  // OpenAPI 3.0 Response Media Type Examples
  (t) => (
    // ["paths", *, *, "responses", *, "content", *, "example"]
    t[0] === "paths" && t[3] === "responses" && t[5] === "content" && t[7] === "example"
  ),
  (t) => (
    // ["paths", *, *, "responses", *, "content", *, "examples", *, "value"]
    t[0] === "paths" && t[3] === "responses" && t[5] === "content" && t[7] === "examples" && t[9] === "value"
  ),
  // OpenAPI 3.0 Request Body Media Type Examples
  (t) => (
    // ["paths", *, *, "requestBody", "content", *, "example"]
    t[0] === "paths" && t[3] === "requestBody" && t[4] === "content" && t[6] === "example"
  ),
  (t) => (
    // ["paths", *, *, "requestBody", "content", *, "examples", *, "value"]
    t[0] === "paths" && t[3] === "requestBody" && t[4] === "content" && t[6] === "examples" && t[8] === "value"
  ),
  // OAS 3.0 Parameter Examples
  (t) => (
    // ["paths", *, "parameters", *, "example"]
    t[0] === "paths" && t[2] === "parameters" && t[4] === "example"
  ),
  (t) => (
    // ["paths", *, *, "parameters", *, "example"]
    t[0] === "paths" && t[3] === "parameters" && t[5] === "example"
  ),
  (t) => (
    // ["paths", *, "parameters", *, "examples", *, "value"]
    t[0] === "paths" && t[2] === "parameters" && t[4] === "examples" && t[6] === "value"
  ),
  (t) => (
    // ["paths", *, *, "parameters", *, "examples", *, "value"]
    t[0] === "paths" && t[3] === "parameters" && t[5] === "examples" && t[7] === "value"
  ),
  (t) => (
    // ["paths", *, "parameters", *, "content", *, "example"]
    t[0] === "paths" && t[2] === "parameters" && t[4] === "content" && t[6] === "example"
  ),
  (t) => (
    // ["paths", *, "parameters", *, "content", *, "examples", *, "value"]
    t[0] === "paths" && t[2] === "parameters" && t[4] === "content" && t[6] === "examples" && t[8] === "value"
  ),
  (t) => (
    // ["paths", *, *, "parameters", *, "content", *, "example"]
    t[0] === "paths" && t[3] === "parameters" && t[4] === "content" && t[7] === "example"
  ),
  (t) => (
    // ["paths", *, *, "parameters", *, "content", *, "examples", *, "value"]
    t[0] === "paths" && t[3] === "parameters" && t[5] === "content" && t[7] === "examples" && t[9] === "value"
  )
], $D = (t) => ED.some((e) => e(t)), AD = {
  key: "$ref",
  plugin: (t, e, r, s) => {
    const n = s.getInstance(), i = r.slice(0, -1);
    if (Mg(i) || $D(i))
      return;
    const {
      baseDoc: o
    } = s.getContext(r);
    if (typeof t != "string")
      return new ys("$ref: must be a string (JSON-Ref)", {
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    const a = Ng(t), c = a[0], l = a[1] || "";
    let p;
    try {
      p = o || c ? kg(c, o) : null;
    } catch (h) {
      return Dl(h, {
        pointer: l,
        $ref: t,
        basePath: p,
        fullPath: r
      });
    }
    let f, d;
    if (CD(l, p, i, s) && !n.useCircularStructures) {
      const h = Nl(t, p);
      return t === h ? null : ne.replace(r, h);
    }
    if (p == null ? (d = Jf(l), f = s.get(d), typeof f > "u" && (f = new ys(`Could not resolve reference: ${t}`, {
      pointer: l,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (f = Dg(p, l), f.__value != null ? f = f.__value : f = f.catch((h) => {
      throw Dl(h, {
        pointer: l,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), f instanceof Error)
      return [ne.remove(r), f];
    const u = Nl(t, p), m = ne.replace(i, f, {
      $$ref: u
    });
    if (p && p !== o)
      return [m, ne.context(i, {
        baseDoc: p
      })];
    try {
      if (!RD(s.state, m) || n.useCircularStructures)
        return m;
    } catch {
      return null;
    }
  }
}, Uf = Object.assign(AD, {
  docCache: Mt,
  absoluteify: kg,
  clearCache: jD,
  JSONRefError: ys,
  wrapError: Dl,
  getDoc: Lg,
  split: Ng,
  extractFromDoc: Dg,
  fetchJSON: PD,
  extract: Ll,
  jsonPointerToArray: Jf,
  unescapeJsonPointerToken: Vg
});
function kg(t, e) {
  if (!OD.test(t)) {
    if (!e)
      throw new ys(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return _e(e, t);
  }
  return t;
}
function Dl(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new ys(`Could not resolve reference: ${r}`, {
    ...e,
    cause: t
  });
}
function Ng(t) {
  return (t + "").split("#");
}
function Dg(t, e) {
  const r = Mt[t];
  if (r && !ne.isPromise(r))
    try {
      const s = Ll(e, r);
      return Object.assign(Promise.resolve(s), {
        __value: s
      });
    } catch (s) {
      return Promise.reject(s);
    }
  return Lg(t).then((s) => Ll(e, s));
}
function jD(t) {
  typeof t < "u" ? delete Mt[t] : Object.keys(Mt).forEach((e) => {
    delete Mt[e];
  });
}
function Lg(t) {
  const e = Mt[t];
  return e ? ne.isPromise(e) ? e : Promise.resolve(e) : (Mt[t] = Uf.fetchJSON(t).then((r) => (Mt[t] = r, r)), Mt[t]);
}
function PD(t) {
  return fetch(t, {
    headers: {
      Accept: Jd
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => ls.load(e));
}
function Ll(t, e) {
  const r = Jf(t);
  if (r.length < 1)
    return e;
  const s = ne.getIn(e, r);
  if (typeof s > "u")
    throw new ys(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return s;
}
function Jf(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(Vg);
}
function Vg(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function Bg(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function TD(t) {
  return t.length === 0 ? "" : `/${t.map(Bg).join("/")}`;
}
const _D = (t) => !t || t === "/" || t === "#";
function Gc(t, e) {
  if (_D(e))
    return !0;
  const r = t.charAt(e.length), s = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && s !== "#";
}
function CD(t, e, r, s) {
  let n = Ed.get(s);
  n || (n = {}, Ed.set(s, n));
  const i = TD(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = s.contextTree.get([]).baseDoc;
  if (e === c && Gc(a, t))
    return !0;
  let l = "";
  if (r.some((f) => (l = `${l}/${Bg(f)}`, n[l] && n[l].some((d) => Gc(d, o) || Gc(o, d)))))
    return !0;
  n[a] = (n[a] || []).concat(o);
}
function RD(t, e) {
  const r = [t];
  return e.path.reduce((n, i) => (r.push(n[i]), n[i]), t), s(e.value);
  function s(n) {
    return ne.isObject(n) && (r.indexOf(n) >= 0 || Object.keys(n).some((i) => s(n[i])));
  }
}
const ID = {
  key: "allOf",
  plugin: (t, e, r, s, n) => {
    if (n.meta && n.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (Mg(i))
      return;
    if (!Array.isArray(t)) {
      const l = new TypeError("allOf must be an array");
      return l.fullPath = r, l;
    }
    let o = !1, a = n.value;
    if (i.forEach((l) => {
      a && (a = a[l]);
    }), a = {
      ...a
    }, Object.keys(a).length === 0)
      return;
    delete a.allOf;
    const c = [];
    return c.push(s.replace(i, {})), t.forEach((l, p) => {
      if (!s.isObject(l)) {
        if (o)
          return null;
        o = !0;
        const u = new TypeError("Elements in allOf must be objects");
        return u.fullPath = r, c.push(u);
      }
      c.push(s.mergeDeep(i, l));
      const f = r.slice(0, -1), d = wD(l, f, {
        getBaseUrlForNodePath: (u) => s.getContext([...r, p, ...u]).baseDoc,
        specmap: s
      });
      c.push(...d);
    }), a.example && c.push(s.remove([].concat(i, "example"))), c.push(s.mergeDeep(i, a)), a.$$ref || c.push(s.remove([].concat(i, "$$ref"))), c;
  }
}, FD = {
  key: "parameters",
  plugin: (t, e, r, s) => {
    if (Array.isArray(t) && t.length) {
      const n = Object.assign([], t), i = r.slice(0, -1), o = {
        ...ne.getIn(s.spec, i)
      };
      for (let a = 0; a < t.length; a += 1) {
        const c = t[a];
        try {
          n[a].default = s.parameterMacro(o, c);
        } catch (l) {
          const p = new Error(l);
          return p.fullPath = r, p;
        }
      }
      return ne.replace(r, n);
    }
    return ne.replace(r, t);
  }
}, MD = {
  key: "properties",
  plugin: (t, e, r, s) => {
    const n = {
      ...t
    };
    for (const o in t)
      try {
        n[o].default = s.modelPropertyMacro(n[o]);
      } catch (a) {
        const c = new Error(a);
        return c.fullPath = r, c;
      }
    return ne.replace(r, n);
  }
};
class kD {
  constructor(e) {
    this.root = Kc(e || {});
  }
  set(e, r) {
    const s = this.getParent(e, !0);
    if (!s) {
      no(this.root, r, null);
      return;
    }
    const n = e[e.length - 1], {
      children: i
    } = s;
    if (i[n]) {
      no(i[n], r, s);
      return;
    }
    i[n] = Kc(r, s);
  }
  // Get the "best" node (node or nearest parent) and return its value.
  get(e) {
    if (e = e || [], e.length < 1)
      return this.root.value;
    let r = this.root, s, n;
    for (let i = 0; i < e.length && (n = e[i], s = r.children, !!s[n]); i += 1)
      r = s[n];
    return r && r.protoValue;
  }
  getParent(e, r) {
    return !e || e.length < 1 ? null : e.length < 2 ? this.root : e.slice(0, -1).reduce((s, n) => {
      if (!s)
        return s;
      const {
        children: i
      } = s;
      return !i[n] && r && (i[n] = Kc(null, s)), i[n];
    }, this.root);
  }
}
function Kc(t, e) {
  return no({
    children: {}
  }, t, e);
}
function no(t, e, r) {
  return t.value = e || {}, t.protoValue = r ? {
    ...r.protoValue,
    ...t.value
  } : t.value, Object.keys(t.children).forEach((s) => {
    const n = t.children[s];
    t.children[s] = no(n, n.value, t);
  }), t;
}
const $d = 100, Ad = () => {
};
class ND {
  static getPluginName(e) {
    return e.pluginName;
  }
  static getPatchesOfType(e, r) {
    return e.filter(r);
  }
  constructor(e) {
    Object.assign(this, {
      spec: "",
      debugLevel: "info",
      plugins: [],
      pluginHistory: {},
      errors: [],
      mutations: [],
      promisedPatches: [],
      state: {},
      patches: [],
      context: {},
      contextTree: new kD(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), ne, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, e), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(ne.isFunction), this.patches.push(ne.add([], this.spec)), this.patches.push(ne.context([], this.context)), this.updatePatches(this.patches);
  }
  debug(e, ...r) {
    this.debugLevel === e && console.log(...r);
  }
  verbose(e, ...r) {
    this.debugLevel === "verbose" && console.log(`[${e}]   `, ...r);
  }
  wrapPlugin(e, r) {
    const {
      pathDiscriminator: s
    } = this;
    let n = null, i;
    return e[this.pluginProp] ? (n = e, i = e[this.pluginProp]) : ne.isFunction(e) ? i = e : ne.isObject(e) && (i = o(e)), Object.assign(i.bind(n), {
      pluginName: e.name || r,
      isGenerator: ne.isGenerator(i)
    });
    function o(a) {
      const c = (l, p) => Array.isArray(l) ? l.every((f, d) => f === p[d]) : !0;
      return function* (p, f) {
        const d = {};
        for (const [m, h] of p.filter(ne.isAdditiveMutation).entries())
          if (m < qd)
            yield* u(h.value, h.path, h);
          else
            return;
        function* u(m, h, y) {
          if (!ne.isObject(m))
            a.key === h[h.length - 1] && (yield a.plugin(m, a.key, h, f));
          else {
            const g = h.length - 1, v = h[g], b = h.indexOf("properties"), O = v === "properties" && g === b, I = f.allowMetaPatches && d[m.$$ref];
            for (const $ of Object.keys(m)) {
              const C = m[$], D = h.concat($), A = ne.isObject(C), q = m.$$ref;
              if (I || A && (f.allowMetaPatches && q && (d[q] = !0), yield* u(C, D, y)), !O && $ === a.key) {
                const w = c(s, h);
                (!s || w) && (yield a.plugin(C, $, D, f, y));
              }
            }
          }
        }
      };
    }
  }
  nextPlugin() {
    return this.wrappedPlugins.find((e) => this.getMutationsForPlugin(e).length > 0);
  }
  nextPromisedPatch() {
    if (this.promisedPatches.length > 0)
      return Promise.race(this.promisedPatches.map((e) => e.value));
  }
  getPluginHistory(e) {
    const r = this.constructor.getPluginName(e);
    return this.pluginHistory[r] || [];
  }
  getPluginRunCount(e) {
    return this.getPluginHistory(e).length;
  }
  getPluginHistoryTip(e) {
    const r = this.getPluginHistory(e);
    return r && r[r.length - 1] || {};
  }
  getPluginMutationIndex(e) {
    const r = this.getPluginHistoryTip(e).mutationIndex;
    return typeof r != "number" ? -1 : r;
  }
  updatePluginHistory(e, r) {
    const s = this.constructor.getPluginName(e);
    this.pluginHistory[s] = this.pluginHistory[s] || [], this.pluginHistory[s].push(r);
  }
  updatePatches(e) {
    ne.normalizeArray(e).forEach((r) => {
      if (r instanceof Error) {
        this.errors.push(r);
        return;
      }
      try {
        if (!ne.isObject(r)) {
          this.debug("updatePatches", "Got a non-object patch", r);
          return;
        }
        if (this.showDebug && this.allPatches.push(r), ne.isPromise(r.value)) {
          this.promisedPatches.push(r), this.promisedPatchThen(r);
          return;
        }
        if (ne.isContextPatch(r)) {
          this.setContext(r.path, r.value);
          return;
        }
        ne.isMutation(r) && this.updateMutations(r);
      } catch (s) {
        console.error(s), this.errors.push(s);
      }
    });
  }
  updateMutations(e) {
    typeof e.value == "object" && !Array.isArray(e.value) && this.allowMetaPatches && (e.value = {
      ...e.value
    });
    const r = ne.applyPatch(this.state, e, {
      allowMetaPatches: this.allowMetaPatches
    });
    r && (this.mutations.push(e), this.state = r);
  }
  removePromisedPatch(e) {
    const r = this.promisedPatches.indexOf(e);
    if (r < 0) {
      this.debug("Tried to remove a promisedPatch that isn't there!");
      return;
    }
    this.promisedPatches.splice(r, 1);
  }
  promisedPatchThen(e) {
    return e.value = e.value.then((r) => {
      const s = {
        ...e,
        value: r
      };
      this.removePromisedPatch(e), this.updatePatches(s);
    }).catch((r) => {
      this.removePromisedPatch(e), this.updatePatches(r);
    }), e.value;
  }
  getMutations(e, r) {
    return e = e || 0, typeof r != "number" && (r = this.mutations.length), this.mutations.slice(e, r);
  }
  getCurrentMutations() {
    return this.getMutationsForPlugin(this.getCurrentPlugin());
  }
  getMutationsForPlugin(e) {
    const r = this.getPluginMutationIndex(e);
    return this.getMutations(r + 1);
  }
  getCurrentPlugin() {
    return this.currentPlugin;
  }
  getLib() {
    return this.libMethods;
  }
  // eslint-disable-next-line no-underscore-dangle
  _get(e) {
    return ne.getIn(this.state, e);
  }
  // eslint-disable-next-line no-underscore-dangle
  _getContext(e) {
    return this.contextTree.get(e);
  }
  setContext(e, r) {
    return this.contextTree.set(e, r);
  }
  // eslint-disable-next-line no-underscore-dangle
  _hasRun(e) {
    return this.getPluginRunCount(this.getCurrentPlugin()) > (e || 0);
  }
  dispatch() {
    const e = this, r = this.nextPlugin();
    if (!r) {
      const i = this.nextPromisedPatch();
      if (i)
        return i.then(() => this.dispatch()).catch(() => this.dispatch());
      const o = {
        spec: this.state,
        errors: this.errors
      };
      return this.showDebug && (o.patches = this.allPatches), Promise.resolve(o);
    }
    if (e.pluginCount = e.pluginCount || /* @__PURE__ */ new WeakMap(), e.pluginCount.set(r, (e.pluginCount.get(r) || 0) + 1), e.pluginCount[r] > $d)
      return Promise.resolve({
        spec: e.state,
        errors: e.errors.concat(new Error(`We've reached a hard limit of ${$d} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const i = this.promisedPatches.map((o) => o.value);
      return Promise.all(i.map((o) => o.then(Ad, Ad))).then(() => this.dispatch());
    }
    return s();
    function s() {
      e.currentPlugin = r;
      const i = e.getCurrentMutations(), o = e.mutations.length - 1;
      try {
        if (r.isGenerator)
          for (const a of r(i, e.getLib()))
            n(a);
        else {
          const a = r(i, e.getLib());
          n(a);
        }
      } catch (a) {
        console.error(a), n([Object.assign(Object.create(a), {
          plugin: r
        })]);
      } finally {
        e.updatePluginHistory(r, {
          mutationIndex: o
        });
      }
      return e.dispatch();
    }
    function n(i) {
      i && (i = ne.fullyNormalizeArray(i), e.updatePatches(i, r));
    }
  }
}
function DD(t) {
  return new ND(t).dispatch();
}
const Sr = {
  refs: Uf,
  allOf: ID,
  parameters: FD,
  properties: MD
};
async function Hf(t) {
  const {
    spec: e,
    mode: r,
    allowMetaPatches: s = !0,
    pathDiscriminator: n,
    modelPropertyMacro: i,
    parameterMacro: o,
    requestInterceptor: a,
    responseInterceptor: c,
    skipNormalization: l = !1,
    useCircularStructures: p,
    strategies: f
  } = t, d = Fu(t), u = Lm(t), m = f.find((y) => y.match(e));
  return h(e);
  async function h(y) {
    d && (Sr.refs.docCache[d] = y), Sr.refs.fetchJSON = Dm(u, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const g = [Sr.refs];
    typeof o == "function" && g.push(Sr.parameters), typeof i == "function" && g.push(Sr.properties), r !== "strict" && g.push(Sr.allOf);
    const v = await DD({
      spec: y,
      context: {
        baseDoc: d
      },
      plugins: g,
      allowMetaPatches: s,
      // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator: n,
      // for lazy resolution
      parameterMacro: o,
      modelPropertyMacro: i,
      useCircularStructures: p
    });
    return l || (v.spec = m.normalize(v.spec)), v;
  }
}
const Ug = (t) => t.replace(/\W/gi, "_");
function LD(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let s = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return s = s || `${t.substring(1)}_${e}`, s.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${Ug(t)}`;
}
function An(t, e, r = "", {
  v2OperationIdCompatibilityMode: s
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? Ug(t.operationId) : LD(e, r, {
    v2OperationIdCompatibilityMode: s
  });
}
function qf(t) {
  const {
    spec: e
  } = t, {
    paths: r
  } = e, s = {};
  if (!r || e.$$normalized)
    return t;
  for (const n in r) {
    const i = r[n];
    if (i == null || !["object", "function"].includes(typeof i))
      continue;
    const o = i.parameters;
    for (const a in i) {
      const c = i[a];
      if (c == null || !["object", "function"].includes(typeof c))
        continue;
      const l = An(c, n, a);
      if (l) {
        s[l] ? s[l].push(c) : s[l] = [c];
        const p = s[l];
        if (p.length > 1)
          p.forEach((f, d) => {
            f.__originalOperationId = f.__originalOperationId || f.operationId, f.operationId = `${l}${d + 1}`;
          });
        else if (typeof c.operationId < "u") {
          const f = p[0];
          f.__originalOperationId = f.__originalOperationId || c.operationId, f.operationId = l;
        }
      }
      if (a !== "parameters") {
        const p = [], f = {};
        for (const d in e)
          (d === "produces" || d === "consumes" || d === "security") && (f[d] = e[d], p.push(f));
        if (o && (f.parameters = o, p.push(f)), p.length) {
          for (const d of p)
            for (const u in d)
              if (!c[u])
                c[u] = d[u];
              else if (u === "parameters")
                for (const m of d[u])
                  c[u].some((y) => y.name && y.name === m.name || y.$ref && y.$ref === m.$ref || y.$$ref && y.$$ref === m.$$ref || y === m) || c[u].push(m);
        }
      }
    }
  }
  return e.$$normalized = !0, t;
}
function VD() {
  Sr.refs.clearCache();
}
const Jg = {
  name: "generic",
  match() {
    return !0;
  },
  normalize(t) {
    const {
      spec: e
    } = qf({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return Hf(t);
  }
};
async function BD(t) {
  return Hf(t);
}
const Hg = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, qg = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, zf = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Gf = (t) => qg(t) || zf(t), zg = {
  name: "openapi-2",
  match(t) {
    return Hg(t);
  },
  normalize(t) {
    const {
      spec: e
    } = qf({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return BD(t);
  }
};
async function UD(t) {
  return Hf(t);
}
const Gg = {
  name: "openapi-3-0",
  match(t) {
    return qg(t);
  },
  normalize(t) {
    const {
      spec: e
    } = qf({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return UD(t);
  }
}, JD = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: s
  } = t, n = Fu(t), i = Lm(t), o = e || await Dm(i, {
    requestInterceptor: r,
    responseInterceptor: s
  })(n), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((l) => l.match(o)).resolve(a);
}, Kg = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return JD(r);
}, HD = Kg({
  strategies: [Gg, zg, Jg]
}), qD = async (t, e, r = {}) => {
  const {
    returnEntireTree: s,
    baseDoc: n,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: l,
    strategies: p
  } = r, f = {
    spec: t,
    pathDiscriminator: e,
    baseDoc: n,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: l,
    strategies: p
  }, u = p.find((h) => h.match(t)).normalize(t), m = await HD({
    spec: u,
    ...f,
    allowMetaPatches: !0,
    skipNormalization: !zf(t)
  });
  return !s && Array.isArray(e) && e.length && (m.spec = e.reduce((h, y) => h == null ? void 0 : h[y], m.spec) || null), m;
}, zD = (t) => async (e, r, s = {}) => {
  const n = {
    ...t,
    ...s
  };
  return qD(e, r, n);
};
class Kf extends pt {
}
class Vl extends Kf {
  constructor(r, s) {
    super(r, s);
    x(this, "pointer");
    typeof s < "u" && (this.pointer = s.pointer);
  }
}
class GD extends Kf {
  constructor(r, s) {
    super(r, s);
    x(this, "tokens");
    typeof s < "u" && (this.tokens = [...s.tokens]);
  }
}
class Us extends Kf {
  constructor(r, s) {
    super(r, s);
    x(this, "pointer");
    x(this, "tokens");
    x(this, "failedToken");
    x(this, "failedTokenPosition");
    x(this, "element");
    typeof s < "u" && (this.pointer = s.pointer, Array.isArray(s.tokens) && (this.tokens = [...s.tokens]), this.failedToken = s.failedToken, this.failedTokenPosition = s.failedTokenPosition, this.element = s.element);
  }
}
const KD = Se(ms(/~/g, "~0"), ms(/\//g, "~1"), encodeURIComponent), WD = (t) => {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, YD = Se(ms(/~1/g, "/"), ms(/~0/g, "~"), WD), XD = (t) => {
  if (vy(t))
    return [];
  if (!fy("/", t))
    throw new Vl(`Invalid JSON Pointer "${t}". JSON Pointers must begin with "/"`, {
      pointer: t
    });
  try {
    const e = Se(wf("/"), mn(YD))(t);
    return ny(e);
  } catch (e) {
    throw new Vl(`JSON Pointer parsing of "${t}" encountered an error.`, {
      pointer: t,
      cause: e
    });
  }
}, QD = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, rt = (t) => {
  const e = QD(t);
  return Of("#", e);
}, Wg = (t) => {
  try {
    return t.length === 0 ? "" : `/${t.map(KD).join("/")}`;
  } catch (e) {
    throw new GD("JSON Pointer compilation of tokens encountered an error.", {
      tokens: t,
      cause: e
    });
  }
}, ut = (t, e) => {
  let r;
  try {
    r = XD(t);
  } catch (s) {
    throw new Us(`JSON Pointer evaluation failed while parsing the pointer "${t}".`, {
      pointer: t,
      element: N(e),
      cause: s
    });
  }
  return r.reduce((s, n, i) => {
    if (ce(s)) {
      if (!s.hasKey(n))
        throw new Us(`JSON Pointer evaluation failed while evaluating token "${n}" against an ObjectElement`, {
          pointer: t,
          tokens: r,
          failedToken: n,
          failedTokenPosition: i,
          element: N(s)
        });
      return s.get(n);
    }
    if (qe(s)) {
      if (!(n in s.content) || !WT(Number(n)))
        throw new Us(`JSON Pointer evaluation failed while evaluating token "${n}" against an ArrayElement`, {
          pointer: t,
          tokens: r,
          failedToken: n,
          failedTokenPosition: i,
          element: N(s)
        });
      return s.get(Number(n));
    }
    throw new Us(`JSON Pointer evaluation failed while evaluating token "${n}" against an unexpected Element`, {
      pointer: t,
      tokens: r,
      failedToken: n,
      failedTokenPosition: i,
      element: N(s)
    });
  }, e);
};
class Wf extends jN {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((s) => s.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const s = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(s)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return ia(this.filterByFormat(e));
  }
}
const gs = new Wf("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
let jn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "callback";
  }
}, Pn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "components";
  }
  get schemas() {
    return this.get("schemas");
  }
  set schemas(e) {
    this.set("schemas", e);
  }
  get responses() {
    return this.get("responses");
  }
  set responses(e) {
    this.set("responses", e);
  }
  get parameters() {
    return this.get("parameters");
  }
  set parameters(e) {
    this.set("parameters", e);
  }
  get examples() {
    return this.get("examples");
  }
  set examples(e) {
    this.set("examples", e);
  }
  get requestBodies() {
    return this.get("requestBodies");
  }
  set requestBodies(e) {
    this.set("requestBodies", e);
  }
  get headers() {
    return this.get("headers");
  }
  set headers(e) {
    this.set("headers", e);
  }
  get securitySchemes() {
    return this.get("securitySchemes");
  }
  set securitySchemes(e) {
    this.set("securitySchemes", e);
  }
  get links() {
    return this.get("links");
  }
  set links(e) {
    this.set("links", e);
  }
  get callbacks() {
    return this.get("callbacks");
  }
  set callbacks(e) {
    this.set("callbacks", e);
  }
}, Tn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "contact";
  }
  get name() {
    return this.get("name");
  }
  set name(e) {
    this.set("name", e);
  }
  get url() {
    return this.get("url");
  }
  set url(e) {
    this.set("url", e);
  }
  get email() {
    return this.get("email");
  }
  set email(e) {
    this.set("email", e);
  }
}, Aa = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "discriminator";
  }
  get propertyName() {
    return this.get("propertyName");
  }
  set propertyName(e) {
    this.set("propertyName", e);
  }
  get mapping() {
    return this.get("mapping");
  }
  set mapping(e) {
    this.set("mapping", e);
  }
}, ja = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "encoding";
  }
  get contentType() {
    return this.get("contentType");
  }
  set contentType(e) {
    this.set("contentType", e);
  }
  get headers() {
    return this.get("headers");
  }
  set headers(e) {
    this.set("headers", e);
  }
  get style() {
    return this.get("style");
  }
  set style(e) {
    this.set("style", e);
  }
  get explode() {
    return this.get("explode");
  }
  set explode(e) {
    this.set("explode", e);
  }
  get allowedReserved() {
    return this.get("allowedReserved");
  }
  set allowedReserved(e) {
    this.set("allowedReserved", e);
  }
}, _n = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "example";
  }
  get summary() {
    return this.get("summary");
  }
  set summary(e) {
    this.set("summary", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get value() {
    return this.get("value");
  }
  set value(e) {
    this.set("value", e);
  }
  get externalValue() {
    return this.get("externalValue");
  }
  set externalValue(e) {
    this.set("externalValue", e);
  }
}, Cn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "externalDocumentation";
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get url() {
    return this.get("url");
  }
  set url(e) {
    this.set("url", e);
  }
}, Rs = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "header";
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new Ut(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Ut(!1);
  }
  set deprecated(e) {
    this.set("deprecated", e);
  }
  get allowEmptyValue() {
    return this.get("allowEmptyValue");
  }
  set allowEmptyValue(e) {
    this.set("allowEmptyValue", e);
  }
  get style() {
    return this.get("style");
  }
  set style(e) {
    this.set("style", e);
  }
  get explode() {
    return this.get("explode");
  }
  set explode(e) {
    this.set("explode", e);
  }
  get allowReserved() {
    return this.get("allowReserved");
  }
  set allowReserved(e) {
    this.set("allowReserved", e);
  }
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
  get example() {
    return this.get("example");
  }
  set example(e) {
    this.set("example", e);
  }
  get examples() {
    return this.get("examples");
  }
  set examples(e) {
    this.set("examples", e);
  }
  get contentProp() {
    return this.get("content");
  }
  set contentProp(e) {
    this.set("content", e);
  }
};
Object.defineProperty(Rs.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Rn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "info", this.classes.push("info");
  }
  get title() {
    return this.get("title");
  }
  set title(e) {
    this.set("title", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get termsOfService() {
    return this.get("termsOfService");
  }
  set termsOfService(e) {
    this.set("termsOfService", e);
  }
  get contact() {
    return this.get("contact");
  }
  set contact(e) {
    this.set("contact", e);
  }
  get license() {
    return this.get("license");
  }
  set license(e) {
    this.set("license", e);
  }
  get version() {
    return this.get("version");
  }
  set version(e) {
    this.set("version", e);
  }
}, In = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "license";
  }
  get name() {
    return this.get("name");
  }
  set name(e) {
    this.set("name", e);
  }
  get url() {
    return this.get("url");
  }
  set url(e) {
    this.set("url", e);
  }
}, Fn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "link";
  }
  get operationRef() {
    return this.get("operationRef");
  }
  set operationRef(e) {
    this.set("operationRef", e);
  }
  get operationId() {
    return this.get("operationId");
  }
  set operationId(e) {
    this.set("operationId", e);
  }
  get operation() {
    if (G(this.operationRef)) {
      var e;
      return (e = this.operationRef) === null || e === void 0 ? void 0 : e.meta.get("operation");
    }
    if (G(this.operationId)) {
      var r;
      return (r = this.operationId) === null || r === void 0 ? void 0 : r.meta.get("operation");
    }
  }
  set operation(e) {
    this.set("operation", e);
  }
  get parameters() {
    return this.get("parameters");
  }
  set parameters(e) {
    this.set("parameters", e);
  }
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(e) {
    this.set("requestBody", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get server() {
    return this.get("server");
  }
  set server(e) {
    this.set("server", e);
  }
}, Mn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "mediaType";
  }
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
  get example() {
    return this.get("example");
  }
  set example(e) {
    this.set("example", e);
  }
  get examples() {
    return this.get("examples");
  }
  set examples(e) {
    this.set("examples", e);
  }
  get encoding() {
    return this.get("encoding");
  }
  set encoding(e) {
    this.set("encoding", e);
  }
}, Pa = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "oAuthFlow";
  }
  get authorizationUrl() {
    return this.get("authorizationUrl");
  }
  set authorizationUrl(e) {
    this.set("authorizationUrl", e);
  }
  get tokenUrl() {
    return this.get("tokenUrl");
  }
  set tokenUrl(e) {
    this.set("tokenUrl", e);
  }
  get refreshUrl() {
    return this.get("refreshUrl");
  }
  set refreshUrl(e) {
    this.set("refreshUrl", e);
  }
  get scopes() {
    return this.get("scopes");
  }
  set scopes(e) {
    this.set("scopes", e);
  }
}, Ta = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "oAuthFlows";
  }
  get implicit() {
    return this.get("implicit");
  }
  set implicit(e) {
    this.set("implicit", e);
  }
  get password() {
    return this.get("password");
  }
  set password(e) {
    this.set("password", e);
  }
  get clientCredentials() {
    return this.get("clientCredentials");
  }
  set clientCredentials(e) {
    this.set("clientCredentials", e);
  }
  get authorizationCode() {
    return this.get("authorizationCode");
  }
  set authorizationCode(e) {
    this.set("authorizationCode", e);
  }
}, kn = class extends Bt {
  constructor(e, r, s) {
    super(e, r, s), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
class _a extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "openApi3_0", this.classes.push("api");
  }
  get openapi() {
    return this.get("openapi");
  }
  set openapi(e) {
    this.set("openapi", e);
  }
  get info() {
    return this.get("info");
  }
  set info(e) {
    this.set("info", e);
  }
  get servers() {
    return this.get("servers");
  }
  set servers(e) {
    this.set("servers", e);
  }
  get paths() {
    return this.get("paths");
  }
  set paths(e) {
    this.set("paths", e);
  }
  get components() {
    return this.get("components");
  }
  set components(e) {
    this.set("components", e);
  }
  get security() {
    return this.get("security");
  }
  set security(e) {
    this.set("security", e);
  }
  get tags() {
    return this.get("tags");
  }
  set tags(e) {
    this.set("tags", e);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  set externalDocs(e) {
    this.set("externalDocs", e);
  }
}
let Nn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "operation";
  }
  get tags() {
    return this.get("tags");
  }
  set tags(e) {
    this.set("tags", e);
  }
  get summary() {
    return this.get("summary");
  }
  set summary(e) {
    this.set("summary", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  set externalDocs(e) {
    this.set("externalDocs", e);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  get operationId() {
    return this.get("operationId");
  }
  set operationId(e) {
    this.set("operationId", e);
  }
  get parameters() {
    return this.get("parameters");
  }
  set parameters(e) {
    this.set("parameters", e);
  }
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(e) {
    this.set("requestBody", e);
  }
  get responses() {
    return this.get("responses");
  }
  set responses(e) {
    this.set("responses", e);
  }
  get callbacks() {
    return this.get("callbacks");
  }
  set callbacks(e) {
    this.set("callbacks", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Ut(!1);
  }
  set deprecated(e) {
    this.set("deprecated", e);
  }
  get security() {
    return this.get("security");
  }
  set security(e) {
    this.set("security", e);
  }
  get servers() {
    return this.get("severs");
  }
  set servers(e) {
    this.set("servers", e);
  }
}, Is = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "parameter";
  }
  get name() {
    return this.get("name");
  }
  set name(e) {
    this.set("name", e);
  }
  get in() {
    return this.get("in");
  }
  set in(e) {
    this.set("in", e);
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new Ut(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Ut(!1);
  }
  set deprecated(e) {
    this.set("deprecated", e);
  }
  get allowEmptyValue() {
    return this.get("allowEmptyValue");
  }
  set allowEmptyValue(e) {
    this.set("allowEmptyValue", e);
  }
  get style() {
    return this.get("style");
  }
  set style(e) {
    this.set("style", e);
  }
  get explode() {
    return this.get("explode");
  }
  set explode(e) {
    this.set("explode", e);
  }
  get allowReserved() {
    return this.get("allowReserved");
  }
  set allowReserved(e) {
    this.set("allowReserved", e);
  }
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
  get example() {
    return this.get("example");
  }
  set example(e) {
    this.set("example", e);
  }
  get examples() {
    return this.get("examples");
  }
  set examples(e) {
    this.set("examples", e);
  }
  get contentProp() {
    return this.get("content");
  }
  set contentProp(e) {
    this.set("content", e);
  }
};
Object.defineProperty(Is.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Dn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "pathItem";
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
  get summary() {
    return this.get("summary");
  }
  set summary(e) {
    this.set("summary", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get GET() {
    return this.get("get");
  }
  set GET(e) {
    this.set("GET", e);
  }
  get PUT() {
    return this.get("put");
  }
  set PUT(e) {
    this.set("PUT", e);
  }
  get POST() {
    return this.get("post");
  }
  set POST(e) {
    this.set("POST", e);
  }
  get DELETE() {
    return this.get("delete");
  }
  set DELETE(e) {
    this.set("DELETE", e);
  }
  get OPTIONS() {
    return this.get("options");
  }
  set OPTIONS(e) {
    this.set("OPTIONS", e);
  }
  get HEAD() {
    return this.get("head");
  }
  set HEAD(e) {
    this.set("HEAD", e);
  }
  get PATCH() {
    return this.get("patch");
  }
  set PATCH(e) {
    this.set("PATCH", e);
  }
  get TRACE() {
    return this.get("trace");
  }
  set TRACE(e) {
    this.set("TRACE", e);
  }
  get servers() {
    return this.get("servers");
  }
  set servers(e) {
    this.set("servers", e);
  }
  get parameters() {
    return this.get("parameters");
  }
  set parameters(e) {
    this.set("parameters", e);
  }
}, Ln = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "paths";
  }
}, Vn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "reference", this.classes.push("openapi-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}, Bn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "requestBody";
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get contentProp() {
    return this.get("content");
  }
  set contentProp(e) {
    this.set("content", e);
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new Ut(!1);
  }
  set required(e) {
    this.set("required", e);
  }
}, Un = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "response";
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get headers() {
    return this.get("headers");
  }
  set headers(e) {
    this.set("headers", e);
  }
  get contentProp() {
    return this.get("content");
  }
  set contentProp(e) {
    this.set("content", e);
  }
  get links() {
    return this.get("links");
  }
  set links(e) {
    this.set("links", e);
  }
}, Jn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "responses";
  }
  get default() {
    return this.get("default");
  }
  set default(e) {
    this.set("default", e);
  }
}, Fs = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "JSONSchemaDraft4";
  }
  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    return this.get("id");
  }
  set idProp(e) {
    this.set("id", e);
  }
  get $schema() {
    return this.get("$schema");
  }
  set $schema(e) {
    this.set("$schema", e);
  }
  /**
   * Validation vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-validation-00
   */
  /**
   *  Validation keywords for numeric instances (number and integer)
   */
  get multipleOf() {
    return this.get("multipleOf");
  }
  set multipleOf(e) {
    this.set("multipleOf", e);
  }
  get maximum() {
    return this.get("maximum");
  }
  set maximum(e) {
    this.set("maximum", e);
  }
  get exclusiveMaximum() {
    return this.get("exclusiveMaximum");
  }
  set exclusiveMaximum(e) {
    this.set("exclusiveMaximum", e);
  }
  get minimum() {
    return this.get("minimum");
  }
  set minimum(e) {
    this.set("minimum", e);
  }
  get exclusiveMinimum() {
    return this.get("exclusiveMinimum");
  }
  set exclusiveMinimum(e) {
    this.set("exclusiveMinimum", e);
  }
  /**
   * Validation keywords for strings
   */
  get maxLength() {
    return this.get("maxLength");
  }
  set maxLength(e) {
    this.set("maxLength", e);
  }
  get minLength() {
    return this.get("minLength");
  }
  set minLength(e) {
    this.set("minLength", e);
  }
  get pattern() {
    return this.get("pattern");
  }
  set pattern(e) {
    this.set("pattern", e);
  }
  /**
   * Validation keywords for arrays
   */
  get additionalItems() {
    return this.get("additionalItems");
  }
  set additionalItems(e) {
    this.set("additionalItems", e);
  }
  get items() {
    return this.get("items");
  }
  set items(e) {
    this.set("items", e);
  }
  get maxItems() {
    return this.get("maxItems");
  }
  set maxItems(e) {
    this.set("maxItems", e);
  }
  get minItems() {
    return this.get("minItems");
  }
  set minItems(e) {
    this.set("minItems", e);
  }
  get uniqueItems() {
    return this.get("uniqueItems");
  }
  set uniqueItems(e) {
    this.set("uniqueItems", e);
  }
  /**
   * Validation keywords for objects
   */
  get maxProperties() {
    return this.get("maxProperties");
  }
  set maxProperties(e) {
    this.set("maxProperties", e);
  }
  get minProperties() {
    return this.get("minProperties");
  }
  set minProperties(e) {
    this.set("minProperties", e);
  }
  get required() {
    return this.get("required");
  }
  set required(e) {
    this.set("required", e);
  }
  get properties() {
    return this.get("properties");
  }
  set properties(e) {
    this.set("properties", e);
  }
  get additionalProperties() {
    return this.get("additionalProperties");
  }
  set additionalProperties(e) {
    this.set("additionalProperties", e);
  }
  get patternProperties() {
    return this.get("patternProperties");
  }
  set patternProperties(e) {
    this.set("patternProperties", e);
  }
  get dependencies() {
    return this.get("dependencies");
  }
  set dependencies(e) {
    this.set("dependencies", e);
  }
  /**
   *  Validation keywords for any instance type
   */
  get enum() {
    return this.get("enum");
  }
  set enum(e) {
    this.set("enum", e);
  }
  get type() {
    return this.get("type");
  }
  set type(e) {
    this.set("type", e);
  }
  get allOf() {
    return this.get("allOf");
  }
  set allOf(e) {
    this.set("allOf", e);
  }
  get anyOf() {
    return this.get("anyOf");
  }
  set anyOf(e) {
    this.set("anyOf", e);
  }
  get oneOf() {
    return this.get("oneOf");
  }
  set oneOf(e) {
    this.set("oneOf", e);
  }
  get not() {
    return this.get("not");
  }
  set not(e) {
    this.set("not", e);
  }
  get definitions() {
    return this.get("definitions");
  }
  set definitions(e) {
    this.set("definitions", e);
  }
  /**
   * Metadata keywords
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-6
   */
  get title() {
    return this.get("title");
  }
  set title(e) {
    this.set("title", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get default() {
    return this.get("default");
  }
  set default(e) {
    this.set("default", e);
  }
  /**
   * Semantic validation with "format"
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-7
   */
  get format() {
    return this.get("format");
  }
  set format(e) {
    this.set("format", e);
  }
  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */
  get base() {
    return this.get("base");
  }
  set base(e) {
    this.set("base", e);
  }
  get links() {
    return this.get("links");
  }
  set links(e) {
    this.set("links", e);
  }
  get media() {
    return this.get("media");
  }
  set media(e) {
    this.set("media", e);
  }
  get readOnly() {
    return this.get("readOnly");
  }
  set readOnly(e) {
    this.set("readOnly", e);
  }
};
class Ms extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "JSONReference", this.classes.push("json-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}
class Hn extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "media";
  }
  get binaryEncoding() {
    return this.get("binaryEncoding");
  }
  set binaryEncoding(e) {
    this.set("binaryEncoding", e);
  }
  get type() {
    return this.get("type");
  }
  set type(e) {
    this.set("type", e);
  }
}
let qn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "linkDescription";
  }
  get href() {
    return this.get("href");
  }
  set href(e) {
    this.set("href", e);
  }
  get rel() {
    return this.get("rel");
  }
  set rel(e) {
    this.set("rel", e);
  }
  get title() {
    return this.get("title");
  }
  set title(e) {
    this.set("title", e);
  }
  get targetSchema() {
    return this.get("targetSchema");
  }
  set targetSchema(e) {
    this.set("targetSchema", e);
  }
  get mediaType() {
    return this.get("mediaType");
  }
  set mediaType(e) {
    this.set("mediaType", e);
  }
  get method() {
    return this.get("method");
  }
  set method(e) {
    this.set("method", e);
  }
  get encType() {
    return this.get("encType");
  }
  set encType(e) {
    this.set("encType", e);
  }
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
};
const ZD = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", Fs), e.register("jSONReference", Ms), e.register("media", Hn), e.register("linkDescription", qn), e;
  }
}, zn = (t) => {
  if (xe(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, eL = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ..._t
};
let Yg = class {
  constructor(e) {
    x(this, "element");
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = $t(r.meta, e.meta), On(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = $t(r.attributes, e.attributes));
  }
}, te = class extends Yg {
  enter(e) {
    return this.element = N(e), ee;
  }
};
const Xg = (t, e, r = []) => {
  const s = Object.getOwnPropertyDescriptors(e);
  for (let n of r)
    delete s[n];
  Object.defineProperties(t, s);
}, cn = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : cn(r, [...e, r]);
}, tL = (...t) => {
  if (t.length === 0)
    return;
  let e;
  const r = t.map((s) => cn(s));
  for (; r.every((s) => s.length > 0); ) {
    const s = r.map((i) => i.pop()), n = s[0];
    if (s.every((i) => i === n))
      e = n;
    else
      break;
  }
  return e;
}, jd = (t, e, r = []) => {
  var s;
  const n = (s = tL(...t)) !== null && s !== void 0 ? s : Object.prototype, i = Object.create(n), o = cn(n);
  for (let a of t) {
    let c = cn(a);
    for (let l = c.length - 1; l >= 0; l--) {
      let p = c[l];
      o.indexOf(p) === -1 && (Xg(i, p, ["constructor", ...r]), o.push(p));
    }
  }
  return i.constructor = e, i;
}, Bl = (t) => t.filter((e, r) => t.indexOf(e) == r), Qg = /* @__PURE__ */ new WeakMap(), rL = (t) => Qg.get(t), sL = (t, e) => Qg.set(t, e), Pd = (t, e) => {
  var r, s;
  const n = Bl([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of n)
    i[o] = Bl([...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : [], ...(s = e == null ? void 0 : e[o]) !== null && s !== void 0 ? s : []]);
  return i;
}, Td = (t, e) => {
  var r, s, n, i;
  return {
    property: Pd((r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}, (s = e == null ? void 0 : e.property) !== null && s !== void 0 ? s : {}),
    method: Pd((n = t == null ? void 0 : t.method) !== null && n !== void 0 ? n : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, nL = (t, e) => {
  var r, s, n, i, o, a;
  return {
    class: Bl([...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : [], ...(s = e == null ? void 0 : e.class) !== null && s !== void 0 ? s : []]),
    static: Td((n = t == null ? void 0 : t.static) !== null && n !== void 0 ? n : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: Td((o = t == null ? void 0 : t.instance) !== null && o !== void 0 ? o : {}, (a = e == null ? void 0 : e.instance) !== null && a !== void 0 ? a : {})
  };
}, iL = /* @__PURE__ */ new Map(), oL = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set([...t]);
  for (; s.size > 0; )
    for (let n of s) {
      const i = cn(n.prototype).map((l) => l.constructor), o = (e = rL(n)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((l) => !r.has(l));
      for (let l of c)
        s.add(l);
      r.add(n), s.delete(n);
    }
  return [...r];
}, aL = (...t) => {
  const e = oL(...t).map((r) => iL.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, s) => nL(r, s));
};
function _(...t) {
  var e, r, s;
  const n = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      Xg(this, new c(...a));
  }
  i.prototype = jd(n, i), Object.setPrototypeOf(
    i,
    jd(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = aL(...t);
    for (let c of (e = a == null ? void 0 : a.class) !== null && e !== void 0 ? e : []) {
      const l = c(o);
      l && (o = l);
    }
    _d((r = a == null ? void 0 : a.static) !== null && r !== void 0 ? r : {}, o), _d((s = a == null ? void 0 : a.instance) !== null && s !== void 0 ? s : {}, o.prototype);
  }
  return sL(o, t), o;
}
const _d = (t, e) => {
  const r = t.property, s = t.method;
  if (r)
    for (let n in r)
      for (let i of r[n])
        i(e, n);
  if (s)
    for (let n in s)
      for (let i of s[n])
        i(e, n, Object.getOwnPropertyDescriptor(e, n));
};
let et = class extends Yg {
  constructor({
    specObj: r,
    ...s
  }) {
    super({
      ...s
    });
    x(this, "specObj");
    x(this, "passingOptionsNames", ["specObj", "parent"]);
    this.specObj = r;
  }
  retrievePassingOptions() {
    return ly(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const s = Ce(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof s == "object" && s !== null ? Object.keys(s) : [];
  }
  retrieveVisitor(r) {
    return aa(Wt, ["visitors", ...r], this.specObj) ? Ce(["visitors", ...r], this.specObj) : Ce(["visitors", ...r, "$visitor"], this.specObj);
  }
  retrieveVisitorInstance(r, s = {}) {
    const n = this.retrievePassingOptions(), i = this.retrieveVisitor(r), o = {
      ...n,
      ...s
    };
    return new i(o);
  }
  toRefractedElement(r, s, n = {}) {
    const i = this.retrieveVisitorInstance(r, n);
    return i instanceof te && (i == null ? void 0 : i.constructor) === te ? N(s) : ($e(s, i, n), i.element);
  }
}, Tr = class extends et {
  constructor({
    specPath: r,
    ignoredFields: s,
    ...n
  }) {
    super({
      ...n
    });
    x(this, "specPath");
    x(this, "ignoredFields");
    this.specPath = r, this.ignoredFields = s || [];
  }
  ObjectElement(r) {
    const s = this.specPath(r), n = this.retrieveFixedFields(s);
    return r.forEach((i, o, a) => {
      if (G(o) && n.includes(E(o)) && !this.ignoredFields.includes(E(o))) {
        const c = this.toRefractedElement([...s, "fixedFields", E(o)], i), l = new Sn(N(o), c);
        this.copyMetaAndAttributes(a, l), l.classes.push("fixed-field"), this.element.content.push(l);
      } else this.ignoredFields.includes(E(o)) || this.element.content.push(N(a));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
};
class Ae {
  constructor({
    parent: e
  }) {
    x(this, "parent");
    this.parent = e;
  }
}
const Zg = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Fs || t(s) && e("JSONSchemaDraft4", s) && r("object", s)), Yf = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Ms || t(s) && e("JSONReference", s) && r("object", s)), eb = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Hn || t(s) && e("media", s) && r("object", s)), cL = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof qn || t(s) && e("linkDescription", s) && r("object", s)), lL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Yf,
  isJSONSchemaElement: Zg,
  isLinkDescriptionElement: cL,
  isMediaElement: eb
}, Symbol.toStringTag, { value: "Module" }));
let tb = class extends _(Tr, Ae, te) {
  constructor(e) {
    super(e), this.element = new Fs(), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-04/schema#";
  }
  ObjectElement(e) {
    return this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element, Tr.prototype.ObjectElement.call(this, e);
  }
  handleDialectIdentifier(e) {
    if (hr(this.parent) && !G(e.get("$schema")))
      this.element.setMetaProperty("inheritedDialectIdentifier", this.defaultDialectIdentifier);
    else if (Zg(this.parent) && !G(e.get("$schema"))) {
      const r = ds(E(this.parent.meta.get("inheritedDialectIdentifier")), E(this.parent.$schema));
      this.element.setMetaProperty("inheritedDialectIdentifier", r);
    }
  }
  handleSchemaIdentifier(e, r = "id") {
    const s = this.parent !== void 0 ? N(this.parent.getMetaProperty("ancestorsSchemaIdentifiers", [])) : new ae(), n = E(e.get(r));
    la(n) && s.push(n), this.element.setMetaProperty("ancestorsSchemaIdentifiers", s);
  }
};
const At = (t) => ce(t) && t.hasKey("$ref");
let rb = class extends _(et, Ae, te) {
  ObjectElement(e) {
    const r = At(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), ee;
  }
  ArrayElement(e) {
    return this.element = new ae(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const s = At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(s, r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class uL extends te {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
let fL = class extends et {
  constructor({
    specPath: r,
    ignoredFields: s,
    fieldPatternPredicate: n,
    ...i
  }) {
    super({
      ...i
    });
    x(this, "specPath");
    x(this, "ignoredFields");
    x(this, "fieldPatternPredicate", of);
    this.specPath = r, this.ignoredFields = s || [], typeof n == "function" && (this.fieldPatternPredicate = n);
  }
  ObjectElement(r) {
    return r.forEach((s, n, i) => {
      if (!this.ignoredFields.includes(E(n)) && this.fieldPatternPredicate(E(n))) {
        const o = this.specPath(s), a = this.toRefractedElement(o, s), c = new Sn(N(n), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(E(n)) || this.element.content.push(N(i));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}, mr = class extends fL {
  constructor(e) {
    super(e), this.fieldPatternPredicate = la;
  }
}, pL = class extends _(mr, Ae, te) {
  constructor(e) {
    super(e), this.element = new F(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}, hL = class extends _(mr, Ae, te) {
  constructor(e) {
    super(e), this.element = new F(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
class dL extends _(mr, Ae, te) {
  constructor(e) {
    super(e), this.element = new F(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
class mL extends te {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
let vL = class extends te {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}, yL = class extends _(et, Ae, te) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(s, r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, gL = class extends _(et, Ae, te) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(s, r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, bL = class extends _(et, Ae, te) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(s, r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class xL extends _(mr, Ae, te) {
  constructor(e) {
    super(e), this.element = new F(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let SL = class extends _(et, Ae, te) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-links");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = this.toRefractedElement(["document", "objects", "LinkDescription"], r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class wL extends _(Tr, te) {
  constructor(e) {
    super(e), this.element = new Ms(), this.specPath = J(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = Tr.prototype.ObjectElement.call(this, e);
    return G(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
let OL = class extends te {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, EL = class extends et {
  constructor({
    alternator: r,
    ...s
  }) {
    super({
      ...s
    });
    x(this, "alternator");
    this.alternator = r;
  }
  enter(r) {
    const s = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => bf(i, J(o), ca)), n = gy(s)(r);
    return this.element = this.toRefractedElement(n, r), ee;
  }
}, Xr = class extends EL {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: At,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: zt,
      specPath: ["document", "objects", "JSONSchema"]
    }];
  }
};
class $L extends _(Tr, te) {
  constructor(e) {
    super(e), this.element = new Hn(), this.specPath = J(["document", "objects", "Media"]);
  }
}
let sb = class extends _(Tr, te) {
  constructor(e) {
    super(e), this.element = new qn(), this.specPath = J(["document", "objects", "LinkDescription"]);
  }
};
const ke = {
  visitors: {
    value: te,
    JSONSchemaOrJSONReferenceVisitor: Xr,
    document: {
      objects: {
        JSONSchema: {
          $visitor: tb,
          fixedFields: {
            // core vocabulary
            id: {
              $ref: "#/visitors/value"
            },
            $schema: {
              $ref: "#/visitors/value"
            },
            // validation vocabulary
            // validation keywords for numeric instances (number and integer)
            multipleOf: {
              $ref: "#/visitors/value"
            },
            maximum: {
              $ref: "#/visitors/value"
            },
            exclusiveMaximum: {
              $ref: "#/visitors/value"
            },
            minimum: {
              $ref: "#/visitors/value"
            },
            exclusiveMinimum: {
              $ref: "#/visitors/value"
            },
            // validation keywords for strings
            maxLength: {
              $ref: "#/visitors/value"
            },
            minLength: {
              $ref: "#/visitors/value"
            },
            pattern: {
              $ref: "#/visitors/value"
            },
            // validation keywords for arrays
            additionalItems: Xr,
            items: rb,
            maxItems: {
              $ref: "#/visitors/value"
            },
            minItems: {
              $ref: "#/visitors/value"
            },
            uniqueItems: {
              $ref: "#/visitors/value"
            },
            // validation keywords for objects
            maxProperties: {
              $ref: "#/visitors/value"
            },
            minProperties: {
              $ref: "#/visitors/value"
            },
            required: uL,
            properties: pL,
            additionalProperties: Xr,
            patternProperties: hL,
            dependencies: dL,
            // validation keywords for any instance type
            enum: mL,
            type: vL,
            allOf: yL,
            anyOf: gL,
            oneOf: bL,
            not: Xr,
            definitions: xL,
            // metadata keywords
            title: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            },
            default: {
              $ref: "#/visitors/value"
            },
            // semantic validation with "format"
            format: {
              $ref: "#/visitors/value"
            },
            // JSON Hyper-Schema
            base: {
              $ref: "#/visitors/value"
            },
            links: SL,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: wL,
          fixedFields: {
            $ref: OL
          }
        },
        Media: {
          $visitor: $L,
          fixedFields: {
            binaryEncoding: {
              $ref: "#/visitors/value"
            },
            type: {
              $ref: "#/visitors/value"
            }
          }
        },
        LinkDescription: {
          $visitor: sb,
          fixedFields: {
            href: {
              $ref: "#/visitors/value"
            },
            rel: {
              $ref: "#/visitors/value"
            },
            title: {
              $ref: "#/visitors/value"
            },
            targetSchema: Xr,
            mediaType: {
              $ref: "#/visitors/value"
            },
            method: {
              $ref: "#/visitors/value"
            },
            encType: {
              $ref: "#/visitors/value"
            },
            schema: Xr
          }
        }
      }
    }
  }
}, AL = () => {
  const t = Zt(ZD);
  return {
    predicates: {
      ...lL,
      isStringElement: G
    },
    namespace: t
  };
}, jL = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: s = ke
} = {}) => {
  const n = Ur(t), i = dr(s), o = Ce(e, i), a = new o({
    specObj: i
  });
  return $e(n, a), Ct(a.element, r, {
    toolboxCreator: AL,
    visitorOptions: {
      keyMap: eL,
      nodeTypeGetter: zn
    }
  });
}, Ca = (t) => (e, r = {}) => jL(e, {
  specPath: t,
  ...r
});
Fs.refract = Ca(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Ms.refract = Ca(["visitors", "document", "objects", "JSONReference", "$visitor"]);
Hn.refract = Ca(["visitors", "document", "objects", "Media", "$visitor"]);
qn.refract = Ca(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let Ra = class extends Fs {
  constructor(e, r, s) {
    super(e, r, s), this.element = "schema", this.classes.push("json-schema-draft-4");
  }
  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    throw new Q("idProp getter in Schema class is not not supported.");
  }
  set idProp(e) {
    throw new Q("idProp setter in Schema class is not not supported.");
  }
  get $schema() {
    throw new Q("$schema getter in Schema class is not not supported.");
  }
  set $schema(e) {
    throw new Q("$schema setter in Schema class is not not supported.");
  }
  /**
   * Validation keywords for arrays
   */
  get additionalItems() {
    return this.get("additionalItems");
  }
  set additionalItems(e) {
    this.set("additionalItems", e);
  }
  get items() {
    return this.get("items");
  }
  set items(e) {
    this.set("items", e);
  }
  /**
   * Validation keywords for objects
   */
  get additionalProperties() {
    return this.get("additionalProperties");
  }
  set additionalProperties(e) {
    this.set("additionalProperties", e);
  }
  get patternProperties() {
    throw new Q("patternProperties getter in Schema class is not not supported.");
  }
  set patternProperties(e) {
    throw new Q("patternProperties setter in Schema class is not not supported.");
  }
  get dependencies() {
    throw new Q("dependencies getter in Schema class is not not supported.");
  }
  set dependencies(e) {
    throw new Q("dependencies setter in Schema class is not not supported.");
  }
  /**
   *  Validation keywords for any instance type
   */
  get type() {
    return this.get("type");
  }
  set type(e) {
    this.set("type", e);
  }
  get not() {
    return this.get("not");
  }
  set not(e) {
    this.set("not", e);
  }
  get definitions() {
    throw new Q("definitions getter in Schema class is not not supported.");
  }
  set definitions(e) {
    throw new Q("definitions setter in Schema class is not not supported.");
  }
  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */
  get base() {
    throw new Q("base getter in Schema class is not not supported.");
  }
  set base(e) {
    throw new Q("base setter in Schema class is not not supported.");
  }
  get links() {
    throw new Q("links getter in Schema class is not not supported.");
  }
  set links(e) {
    throw new Q("links setter in Schema class is not not supported.");
  }
  get media() {
    throw new Q("media getter in Schema class is not not supported.");
  }
  set media(e) {
    throw new Q("media setter in Schema class is not not supported.");
  }
  /**
   * OpenAPI vocabulary
   */
  get nullable() {
    return this.get("nullable");
  }
  set nullable(e) {
    this.set("nullable", e);
  }
  get discriminator() {
    return this.get("discriminator");
  }
  set discriminator(e) {
    this.set("discriminator", e);
  }
  get writeOnly() {
    return this.get("writeOnly");
  }
  set writeOnly(e) {
    this.set("writeOnly", e);
  }
  get xml() {
    return this.get("xml");
  }
  set xml(e) {
    this.set("xml", e);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  set externalDocs(e) {
    this.set("externalDocs", e);
  }
  get example() {
    return this.get("example");
  }
  set example(e) {
    this.set("example", e);
  }
  get deprecated() {
    return this.get("deprecated");
  }
  set deprecated(e) {
    this.set("deprecated", e);
  }
}, Gn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "securityRequirement";
  }
}, Kn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "securityScheme";
  }
  get type() {
    return this.get("type");
  }
  set type(e) {
    this.set("type", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get name() {
    return this.get("name");
  }
  set name(e) {
    this.set("name", e);
  }
  get in() {
    return this.get("in");
  }
  set in(e) {
    this.set("in", e);
  }
  get scheme() {
    return this.get("scheme");
  }
  set scheme(e) {
    this.set("scheme", e);
  }
  get bearerFormat() {
    return this.get("bearerFormat");
  }
  set bearerFormat(e) {
    this.set("bearerFormat", e);
  }
  get flows() {
    return this.get("flows");
  }
  set flows(e) {
    this.set("flows", e);
  }
  get openIdConnectUrl() {
    return this.get("openIdConnectUrl");
  }
  set openIdConnectUrl(e) {
    this.set("openIdConnectUrl", e);
  }
}, Wn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "server";
  }
  get url() {
    return this.get("url");
  }
  set url(e) {
    this.set("url", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get variables() {
    return this.get("variables");
  }
  set variables(e) {
    this.set("variables", e);
  }
}, Yn = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "serverVariable";
  }
  get enum() {
    return this.get("enum");
  }
  set enum(e) {
    this.set("enum", e);
  }
  get default() {
    return this.get("default");
  }
  set default(e) {
    this.set("default", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
}, Ia = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "tag";
  }
  get name() {
    return this.get("name");
  }
  set name(e) {
    this.set("name", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  set externalDocs(e) {
    this.set("externalDocs", e);
  }
}, Fa = class extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "xml";
  }
  get name() {
    return this.get("name");
  }
  set name(e) {
    this.set("name", e);
  }
  get namespace() {
    return this.get("namespace");
  }
  set namespace(e) {
    this.set("namespace", e);
  }
  get prefix() {
    return this.get("prefix");
  }
  set prefix(e) {
    this.set("prefix", e);
  }
  get attribute() {
    return this.get("attribute");
  }
  set attribute(e) {
    this.set("attribute", e);
  }
  get wrapped() {
    return this.get("wrapped");
  }
  set wrapped(e) {
    this.set("wrapped", e);
  }
};
const PL = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", jn), e.register("components", Pn), e.register("contact", Tn), e.register("discriminator", Aa), e.register("encoding", ja), e.register("example", _n), e.register("externalDocumentation", Cn), e.register("header", Rs), e.register("info", Rn), e.register("license", In), e.register("link", Fn), e.register("mediaType", Mn), e.register("oAuthFlow", Pa), e.register("oAuthFlows", Ta), e.register("openapi", kn), e.register("openApi3_0", _a), e.register("operation", Nn), e.register("parameter", Is), e.register("pathItem", Dn), e.register("paths", Ln), e.register("reference", Vn), e.register("requestBody", Bn), e.register("response", Un), e.register("responses", Jn), e.register("schema", Ra), e.register("securityRequirement", Gn), e.register("securityScheme", Kn), e.register("server", Wn), e.register("serverVariable", Yn), e.register("tag", Ia), e.register("xml", Fa), e;
  }
}, lo = class lo extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(lo.primaryClass);
  }
};
x(lo, "primaryClass", "servers");
let io = lo;
const uo = class uo extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(uo.primaryClass);
  }
};
x(uo, "primaryClass", "security");
let Ul = uo;
const fo = class fo extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(fo.primaryClass);
  }
};
x(fo, "primaryClass", "tags");
let Jl = fo;
const po = class po extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(po.primaryClass);
  }
};
x(po, "primaryClass", "server-variables");
let Hl = po;
const ho = class ho extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(ho.primaryClass);
  }
};
x(ho, "primaryClass", "components-schemas");
let oo = ho;
const mo = class mo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(mo.primaryClass);
  }
};
x(mo, "primaryClass", "components-responses");
let ql = mo;
const vo = class vo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(vo.primaryClass), this.classes.push("parameters");
  }
};
x(vo, "primaryClass", "components-parameters");
let zl = vo;
const yo = class yo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(yo.primaryClass), this.classes.push("examples");
  }
};
x(yo, "primaryClass", "components-examples");
let Gl = yo;
const go = class go extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(go.primaryClass);
  }
};
x(go, "primaryClass", "components-request-bodies");
let Kl = go;
const bo = class bo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(bo.primaryClass);
  }
};
x(bo, "primaryClass", "components-headers");
let Wl = bo;
const xo = class xo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(xo.primaryClass);
  }
};
x(xo, "primaryClass", "components-security-schemes");
let Yl = xo;
const So = class So extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(So.primaryClass);
  }
};
x(So, "primaryClass", "components-links");
let Xl = So;
const wo = class wo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(wo.primaryClass);
  }
};
x(wo, "primaryClass", "components-callbacks");
let Ql = wo;
const Oo = class Oo extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Oo.primaryClass), this.classes.push("servers");
  }
};
x(Oo, "primaryClass", "path-item-servers");
let Zl = Oo;
const Eo = class Eo extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Eo.primaryClass), this.classes.push("parameters");
  }
};
x(Eo, "primaryClass", "path-item-parameters");
let eu = Eo;
const $o = class $o extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push($o.primaryClass), this.classes.push("parameters");
  }
};
x($o, "primaryClass", "operation-parameters");
let ao = $o;
const Ao = class Ao extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Ao.primaryClass), this.classes.push("examples");
  }
};
x(Ao, "primaryClass", "parameter-examples");
let tu = Ao;
const jo = class jo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(jo.primaryClass), this.classes.push("content");
  }
};
x(jo, "primaryClass", "parameter-content");
let ru = jo;
const Po = class Po extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Po.primaryClass);
  }
};
x(Po, "primaryClass", "operation-tags");
let su = Po;
const To = class To extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(To.primaryClass);
  }
};
x(To, "primaryClass", "operation-callbacks");
let nu = To;
const _o = class _o extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(_o.primaryClass), this.classes.push("security");
  }
};
x(_o, "primaryClass", "operation-security");
let co = _o;
const Co = class Co extends ae {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Co.primaryClass), this.classes.push("servers");
  }
};
x(Co, "primaryClass", "operation-servers");
let iu = Co;
const Ro = class Ro extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Ro.primaryClass), this.classes.push("content");
  }
};
x(Ro, "primaryClass", "request-body-content");
let ou = Ro;
const Io = class Io extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Io.primaryClass), this.classes.push("examples");
  }
};
x(Io, "primaryClass", "media-type-examples");
let au = Io;
const Fo = class Fo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Fo.primaryClass);
  }
};
x(Fo, "primaryClass", "media-type-encoding");
let cu = Fo;
const Mo = class Mo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Mo.primaryClass);
  }
};
x(Mo, "primaryClass", "encoding-headers");
let lu = Mo;
const ko = class ko extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(ko.primaryClass);
  }
};
x(ko, "primaryClass", "response-headers");
let uu = ko;
const No = class No extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(No.primaryClass), this.classes.push("content");
  }
};
x(No, "primaryClass", "response-content");
let fu = No;
const Do = class Do extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Do.primaryClass);
  }
};
x(Do, "primaryClass", "response-links");
let pu = Do;
const Lo = class Lo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Lo.primaryClass);
  }
};
x(Lo, "primaryClass", "discriminator-mapping");
let hu = Lo;
const Vo = class Vo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Vo.primaryClass);
  }
};
x(Vo, "primaryClass", "oauth-flow-scopes");
let du = Vo;
const Bo = class Bo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Bo.primaryClass);
  }
};
x(Bo, "primaryClass", "link-parameters");
let mu = Bo;
const Uo = class Uo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Uo.primaryClass), this.classes.push("examples");
  }
};
x(Uo, "primaryClass", "header-examples");
let vu = Uo;
const Jo = class Jo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(Jo.primaryClass), this.classes.push("content");
  }
};
x(Jo, "primaryClass", "header-content");
let yu = Jo;
const TL = (t) => {
  if (xe(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, _L = {
  CallbackElement: ["content"],
  ComponentsElement: ["content"],
  ContactElement: ["content"],
  DiscriminatorElement: ["content"],
  Encoding: ["content"],
  Example: ["content"],
  ExternalDocumentationElement: ["content"],
  HeaderElement: ["content"],
  InfoElement: ["content"],
  LicenseElement: ["content"],
  MediaTypeElement: ["content"],
  OAuthFlowElement: ["content"],
  OAuthFlowsElement: ["content"],
  OpenApi3_0Element: ["content"],
  OperationElement: ["content"],
  ParameterElement: ["content"],
  PathItemElement: ["content"],
  PathsElement: ["content"],
  ReferenceElement: ["content"],
  RequestBodyElement: ["content"],
  ResponseElement: ["content"],
  ResponsesElement: ["content"],
  SchemaElement: ["content"],
  SecurityRequirementElement: ["content"],
  SecuritySchemeElement: ["content"],
  ServerElement: ["content"],
  ServerVariableElement: ["content"],
  TagElement: ["content"],
  ..._t
};
class nb {
  constructor(e = {}) {
    x(this, "element");
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = $t(r.meta, e.meta), On(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = $t(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
class k extends nb {
  enter(e) {
    return this.element = N(e), ee;
  }
}
class yt extends nb {
  constructor({
    specObj: r,
    passingOptionsNames: s,
    openApiGenericElement: n,
    openApiSemanticElement: i,
    ...o
  }) {
    super({
      ...o
    });
    x(this, "specObj");
    x(this, "passingOptionsNames", ["specObj", "openApiGenericElement", "openApiSemanticElement"]);
    x(this, "openApiGenericElement");
    x(this, "openApiSemanticElement");
    this.specObj = r, this.openApiGenericElement = n, this.openApiSemanticElement = i, Array.isArray(s) && (this.passingOptionsNames = s);
  }
  retrievePassingOptions() {
    return ly(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const s = Ce(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof s == "object" && s !== null ? Object.keys(s) : [];
  }
  retrieveVisitor(r) {
    return aa(Wt, ["visitors", ...r], this.specObj) ? Ce(["visitors", ...r], this.specObj) : Ce(["visitors", ...r, "$visitor"], this.specObj);
  }
  retrieveVisitorInstance(r, s = {}) {
    const n = this.retrievePassingOptions(), i = this.retrieveVisitor(r), o = {
      ...n,
      ...s
    };
    return new i(o);
  }
  toRefractedElement(r, s, n = {}) {
    const i = this.retrieveVisitorInstance(r, n);
    return i instanceof k && (i == null ? void 0 : i.constructor) === k ? N(s) : ($e(s, i, n), i.element);
  }
}
const he = (t) => ce(t) && t.hasKey("$ref"), CL = ce, RL = ce, ib = (t) => G(t.key) && fy("x-", E(t.key));
class W extends yt {
  constructor({
    specPath: r,
    ignoredFields: s,
    canSupportSpecificationExtensions: n,
    specificationExtensionPredicate: i,
    ...o
  }) {
    super({
      ...o
    });
    x(this, "specPath");
    x(this, "ignoredFields");
    x(this, "canSupportSpecificationExtensions", !0);
    x(this, "specificationExtensionPredicate", ib);
    this.specPath = r, this.ignoredFields = s || [], typeof n == "boolean" && (this.canSupportSpecificationExtensions = n), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(r) {
    const s = this.specPath(r), n = this.retrieveFixedFields(s);
    return r.forEach((i, o, a) => {
      if (G(o) && n.includes(E(o)) && !this.ignoredFields.includes(E(o))) {
        const c = this.toRefractedElement([...s, "fixedFields", E(o)], i), l = new Sn(N(o), c);
        this.copyMetaAndAttributes(a, l), l.classes.push("fixed-field"), this.element.content.push(l);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(a)) {
        const c = this.toRefractedElement(["document", "extension"], a);
        this.element.content.push(c);
      } else this.ignoredFields.includes(E(o)) || this.element.content.push(N(a));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}
class IL extends _(W, k) {
  constructor(e) {
    super(e), this.element = new _a(), this.specPath = J(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return W.prototype.ObjectElement.call(this, e);
  }
}
class FL extends _(yt, k) {
  StringElement(e) {
    const r = new kn(E(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, ee;
  }
}
class ML extends yt {
  MemberElement(e) {
    return this.element = N(e), this.element.classes.push("specification-extension"), ee;
  }
}
let kL = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Rn(), this.specPath = J(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
class NL extends k {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
let DL = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Tn(), this.specPath = J(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
}, LL = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new In(), this.specPath = J(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
}, VL = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Fn(), this.specPath = J(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return (G(this.element.operationId) || G(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
class BL extends k {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class UL extends k {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class bs extends yt {
  constructor({
    specPath: r,
    ignoredFields: s,
    fieldPatternPredicate: n,
    canSupportSpecificationExtensions: i,
    specificationExtensionPredicate: o,
    ...a
  }) {
    super({
      ...a
    });
    x(this, "specPath");
    x(this, "ignoredFields");
    x(this, "fieldPatternPredicate", of);
    x(this, "canSupportSpecificationExtensions", !1);
    x(this, "specificationExtensionPredicate", ib);
    this.specPath = r, this.ignoredFields = s || [], typeof n == "function" && (this.fieldPatternPredicate = n), typeof i == "boolean" && (this.canSupportSpecificationExtensions = i), typeof o == "function" && (this.specificationExtensionPredicate = o);
  }
  ObjectElement(r) {
    return r.forEach((s, n, i) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
        const o = this.toRefractedElement(["document", "extension"], i);
        this.element.content.push(o);
      } else if (!this.ignoredFields.includes(E(n)) && this.fieldPatternPredicate(E(n))) {
        const o = this.specPath(s), a = this.toRefractedElement(o, s), c = new Sn(N(n), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(E(n)) || this.element.content.push(N(i));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}
class Y extends bs {
  constructor(e) {
    super(e), this.fieldPatternPredicate = la;
  }
}
let JL = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new mu(), this.specPath = J(["value"]);
  }
}, HL = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Wn(), this.specPath = J(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
class qL extends k {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
let Xf = class extends _(yt, k) {
  constructor(e) {
    super(e), this.element = new io();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = CL(r) ? ["document", "objects", "Server"] : ["value"], n = this.toRefractedElement(s, r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, zL = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Yn(), this.specPath = J(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
class GL extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new Hl(), this.specPath = J(["document", "objects", "ServerVariable"]);
  }
}
let KL = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Mn(), this.specPath = J(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
class jt extends yt {
  constructor({
    alternator: r,
    ...s
  }) {
    super({
      ...s
    });
    x(this, "alternator");
    this.alternator = r || [];
  }
  enter(r) {
    const s = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => bf(i, J(o), ca)), n = gy(s)(r);
    return this.element = this.toRefractedElement(n, r), ee;
  }
}
const WL = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof jn || t(s) && e("callback", s) && r("object", s)), YL = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Pn || t(s) && e("components", s) && r("object", s)), XL = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Tn || t(s) && e("contact", s) && r("object", s)), QL = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof _n || t(s) && e("example", s) && r("object", s)), ZL = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Cn || t(s) && e("externalDocumentation", s) && r("object", s)), ks = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Rs || t(s) && e("header", s) && r("object", s)), eV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Rn || t(s) && e("info", s) && r("object", s)), tV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof In || t(s) && e("license", s) && r("object", s)), rV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Fn || t(s) && e("link", s) && r("object", s)), sV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof kn || t(s) && e("openapi", s) && r("string", s)), nV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: s
}) => (n) => n instanceof _a || t(n) && e("openApi3_0", n) && r("object", n) && s("api", n)), ob = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Nn || t(s) && e("operation", s) && r("object", s)), iV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Is || t(s) && e("parameter", s) && r("object", s)), Qf = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Dn || t(s) && e("pathItem", s) && r("object", s)), oV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Ln || t(s) && e("paths", s) && r("object", s)), ue = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Vn || t(s) && e("reference", s) && r("object", s)), aV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Bn || t(s) && e("requestBody", s) && r("object", s)), Ma = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Un || t(s) && e("response", s) && r("object", s)), cV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Jn || t(s) && e("responses", s) && r("object", s)), lV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Ra || t(s) && e("schema", s) && r("object", s)), uV = (t) => wn(t) && t.classes.includes("boolean-json-schema"), fV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Gn || t(s) && e("securityRequirement", s) && r("object", s)), pV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Kn || t(s) && e("securityScheme", s) && r("object", s)), hV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Wn || t(s) && e("server", s) && r("object", s)), dV = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Yn || t(s) && e("serverVariable", s) && r("object", s)), ka = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Mn || t(s) && e("mediaType", s) && r("object", s)), ab = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: s
}) => (n) => n instanceof io || t(n) && e("array", n) && r("array", n) && s("servers", n)), mV = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: uV,
  isCallbackElement: WL,
  isComponentsElement: YL,
  isContactElement: XL,
  isExampleElement: QL,
  isExternalDocumentationElement: ZL,
  isHeaderElement: ks,
  isInfoElement: eV,
  isLicenseElement: tV,
  isLinkElement: rV,
  isMediaTypeElement: ka,
  isOpenApi3_0Element: nV,
  isOpenapiElement: sV,
  isOperationElement: ob,
  isParameterElement: iV,
  isPathItemElement: Qf,
  isPathsElement: oV,
  isReferenceElement: ue,
  isRequestBodyElement: aV,
  isResponseElement: Ma,
  isResponsesElement: cV,
  isSchemaElement: lV,
  isSecurityRequirementElement: fV,
  isSecuritySchemeElement: pV,
  isServerElement: hV,
  isServerVariableElement: dV,
  isServersElement: ab
}, Symbol.toStringTag, { value: "Module" }));
let vV = class extends _(jt, k) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: he,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: zt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = jt.prototype.enter.call(this, e);
    return ue(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, Zf = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new F(), this.element.classes.push("examples"), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, yV = class extends Zf {
  constructor(e) {
    super(e), this.element = new au();
  }
}, gV = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new cu(), this.specPath = J(["document", "objects", "Encoding"]);
  }
}, bV = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new Gn(), this.specPath = J(["value"]);
  }
}, xV = class extends _(yt, k) {
  constructor(e) {
    super(e), this.element = new Ul();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (ce(r)) {
        const s = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(s);
      } else
        this.element.push(N(r));
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, SV = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Pn(), this.specPath = J(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
}, wV = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Ia(), this.specPath = J(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
}, OV = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Vn(), this.specPath = J(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return G(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}, EV = class extends k {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, $V = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Is(), this.specPath = J(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return ce(this.element.contentProp) && this.element.contentProp.filter(ka).forEach((s, n) => {
      s.setMetaProperty("media-type", E(n));
    }), r;
  }
}, AV = class extends _(jt, k) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: he,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: zt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = jt.prototype.enter.call(this, e);
    return ue(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, jV = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Rs(), this.specPath = J(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
}, PV = class extends _(jt, k) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: he,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: zt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = jt.prototype.enter.call(this, e);
    return ue(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, TV = class extends Zf {
  constructor(e) {
    super(e), this.element = new vu();
  }
}, Na = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new F(), this.element.classes.push("content"), this.specPath = J(["document", "objects", "MediaType"]);
  }
}, _V = class extends Na {
  constructor(e) {
    super(e), this.element = new yu();
  }
}, CV = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Ra(), this.specPath = J(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Cd = ke.visitors.document.objects.JSONSchema.fixedFields.allOf;
let RV = class extends Cd {
  ArrayElement(e) {
    const r = Cd.prototype.ArrayElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const Rd = ke.visitors.document.objects.JSONSchema.fixedFields.anyOf;
let IV = class extends Rd {
  ArrayElement(e) {
    const r = Rd.prototype.ArrayElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const Id = ke.visitors.document.objects.JSONSchema.fixedFields.oneOf;
let FV = class extends Id {
  ArrayElement(e) {
    const r = Id.prototype.ArrayElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const Fd = ke.visitors.document.objects.JSONSchema.fixedFields.items;
let MV = class extends Fd {
  ObjectElement(e) {
    const r = Fd.prototype.ObjectElement.call(this, e);
    return ue(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
};
const Md = ke.visitors.document.objects.JSONSchema.fixedFields.properties;
let kV = class extends Md {
  ObjectElement(e) {
    const r = Md.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const NV = ke.visitors.document.objects.JSONSchema.fixedFields.type;
class DV extends NV {
  ArrayElement(e) {
    return this.enter(e);
  }
}
const kd = ke.visitors.JSONSchemaOrJSONReferenceVisitor;
class Nd extends kd {
  ObjectElement(e) {
    const r = kd.prototype.enter.call(this, e);
    return ue(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
let LV = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Aa(), this.specPath = J(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
class VV extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new hu(), this.specPath = J(["value"]);
  }
}
let BV = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Fa(), this.specPath = J(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
}, UV = class extends Zf {
  constructor(e) {
    super(e), this.element = new tu();
  }
}, JV = class extends Na {
  constructor(e) {
    super(e), this.element = new ru();
  }
}, HV = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new oo(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "schema");
    }), r;
  }
}, qV = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new ql(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Ma).forEach((s, n) => {
      s.setMetaProperty("http-status-code", E(n));
    }), r;
  }
}, zV = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new zl(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
}, GV = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new Gl(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
class KV extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new Kl(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
let WV = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new Wl(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "header");
    }), this.element.filter(ks).forEach((s, n) => {
      s.setMetaProperty("header-name", E(n));
    }), r;
  }
};
class YV extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new Yl(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
let XV = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new Xl(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "link");
    }), r;
  }
}, QV = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new Ql(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}, ZV = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new _n(), this.specPath = J(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return G(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
class e3 extends k {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let t3 = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Cn(), this.specPath = J(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
}, r3 = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new ja(), this.specPath = J(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return ce(this.element.headers) && this.element.headers.filter(ks).forEach((s, n) => {
      s.setMetaProperty("header-name", E(n));
    }), r;
  }
}, s3 = class extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new lu(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((s, n) => {
      if (!ks(s)) return;
      const i = E(n);
      s.setMetaProperty("headerName", i);
    }), r;
  }
}, n3 = class extends _(bs, k) {
  constructor(e) {
    super(e), this.element = new Ln(), this.specPath = J(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = zt;
  }
  ObjectElement(e) {
    const r = bs.prototype.ObjectElement.call(this, e);
    return this.element.filter(Qf).forEach((s, n) => {
      n.classes.push("openapi-path-template"), n.classes.push("path-template"), s.setMetaProperty("path", N(n));
    }), r;
  }
}, i3 = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Bn(), this.specPath = J(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return ce(this.element.contentProp) && this.element.contentProp.filter(ka).forEach((s, n) => {
      s.setMetaProperty("media-type", E(n));
    }), r;
  }
}, o3 = class extends Na {
  constructor(e) {
    super(e), this.element = new ou();
  }
}, a3 = class extends _(bs, k) {
  constructor(e) {
    super(e), this.element = new jn(), this.specPath = J(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(Qf).forEach((s, n) => {
      s.setMetaProperty("runtime-expression", E(n));
    }), r;
  }
}, c3 = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Un(), this.specPath = J(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return ce(this.element.contentProp) && this.element.contentProp.filter(ka).forEach((s, n) => {
      s.setMetaProperty("media-type", E(n));
    }), ce(this.element.headers) && this.element.headers.filter(ks).forEach((s, n) => {
      s.setMetaProperty("header-name", E(n));
    }), r;
  }
};
class l3 extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new uu(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((s, n) => {
      if (!ks(s)) return;
      const i = E(n);
      s.setMetaProperty("header-name", i);
    }), r;
  }
}
class u3 extends Na {
  constructor(e) {
    super(e), this.element = new fu();
  }
}
class f3 extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new pu(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
class Dd extends _(W, bs) {
  constructor({
    specPathFixedFields: r,
    specPathPatternedFields: s,
    ...n
  }) {
    super({
      ...n
    });
    x(this, "specPathFixedFields");
    x(this, "specPathPatternedFields");
    this.specPathFixedFields = r, this.specPathPatternedFields = s;
  }
  ObjectElement(r) {
    const {
      specPath: s,
      ignoredFields: n
    } = this;
    try {
      this.specPath = this.specPathFixedFields;
      const i = this.retrieveFixedFields(this.specPath(r));
      this.ignoredFields = [...n, ...zP(r.keys(), i)], W.prototype.ObjectElement.call(this, r), this.specPath = this.specPathPatternedFields, this.ignoredFields = i, bs.prototype.ObjectElement.call(this, r);
    } catch (i) {
      throw this.specPath = s, i;
    }
    return ee;
  }
}
let p3 = class extends _(Dd, k) {
  constructor(e) {
    super(e), this.element = new Jn(), this.specPathFixedFields = J(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${wT(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = Dd.prototype.ObjectElement.call(this, e);
    return this.element.filter(ue).forEach((s) => {
      s.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Ma).forEach((s, n) => {
      const i = N(n);
      this.fieldPatternPredicate(E(i)) && s.setMetaProperty("http-status-code", i);
    }), r;
  }
};
class h3 extends _(jt, k) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: he,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: zt,
      specPath: ["document", "objects", "Response"]
    }];
  }
  ObjectElement(e) {
    const r = jt.prototype.enter.call(this, e);
    return ue(this.element) ? this.element.setMetaProperty("referenced-element", "response") : Ma(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
let d3 = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Nn(), this.specPath = J(["document", "objects", "Operation"]);
  }
}, m3 = class extends k {
  constructor(e) {
    super(e), this.element = new su();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(N(e)), ee;
  }
}, cb = class extends _(yt, k) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], n = this.toRefractedElement(s, r);
      ue(n) && n.setMetaProperty("referenced-element", "parameter"), this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, v3 = class extends cb {
  constructor(e) {
    super(e), this.element = new ao();
  }
}, y3 = class extends jt {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: he,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: zt,
      specPath: ["document", "objects", "RequestBody"]
    }];
  }
  ObjectElement(e) {
    const r = jt.prototype.enter.call(this, e);
    return ue(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
class g3 extends _(Y, k) {
  constructor(r) {
    super(r);
    x(this, "specPath");
    this.element = new nu(), this.specPath = (s) => he(s) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(r) {
    const s = Y.prototype.ObjectElement.call(this, r);
    return this.element.filter(ue).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), s;
  }
}
class b3 extends _(yt, k) {
  constructor(e) {
    super(e), this.element = new co();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = ce(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], n = this.toRefractedElement(s, r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
let x3 = class extends Xf {
  constructor(e) {
    super(e), this.element = new iu();
  }
}, S3 = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Dn(), this.specPath = J(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(ob).forEach((s, n) => {
      const i = N(n);
      i.content = E(i).toUpperCase(), s.setMetaProperty("http-method", i);
    }), G(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
class w3 extends k {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class O3 extends Xf {
  constructor(e) {
    super(e), this.element = new Zl();
  }
}
class E3 extends cb {
  constructor(e) {
    super(e), this.element = new eu();
  }
}
let $3 = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Kn(), this.specPath = J(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
}, A3 = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Ta(), this.specPath = J(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
}, j3 = class extends _(W, k) {
  constructor(e) {
    super(e), this.element = new Pa(), this.specPath = J(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
class P3 extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new du(), this.specPath = J(["value"]);
  }
}
class T3 extends _(yt, k) {
  constructor(e) {
    super(e), this.element = new Jl();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = RL(r) ? ["document", "objects", "Tag"] : ["value"], n = this.toRefractedElement(s, r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
const {
  fixedFields: je
} = ke.visitors.document.objects.JSONSchema, S = {
  visitors: {
    value: k,
    document: {
      objects: {
        OpenApi: {
          $visitor: IL,
          fixedFields: {
            openapi: FL,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: Xf,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: xV,
            tags: T3,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: kL,
          fixedFields: {
            title: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            },
            termsOfService: {
              $ref: "#/visitors/value"
            },
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: NL
          }
        },
        Contact: {
          $visitor: DL,
          fixedFields: {
            name: {
              $ref: "#/visitors/value"
            },
            url: {
              $ref: "#/visitors/value"
            },
            email: {
              $ref: "#/visitors/value"
            }
          }
        },
        License: {
          $visitor: LL,
          fixedFields: {
            name: {
              $ref: "#/visitors/value"
            },
            url: {
              $ref: "#/visitors/value"
            }
          }
        },
        Server: {
          $visitor: HL,
          fixedFields: {
            url: qL,
            description: {
              $ref: "#/visitors/value"
            },
            variables: GL
          }
        },
        ServerVariable: {
          $visitor: zL,
          fixedFields: {
            enum: {
              $ref: "#/visitors/value"
            },
            default: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            }
          }
        },
        Components: {
          $visitor: SV,
          fixedFields: {
            schemas: HV,
            responses: qV,
            parameters: zV,
            examples: GV,
            requestBodies: KV,
            headers: WV,
            securitySchemes: YV,
            links: XV,
            callbacks: QV
          }
        },
        Paths: {
          $visitor: n3
        },
        PathItem: {
          $visitor: S3,
          fixedFields: {
            $ref: w3,
            summary: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            },
            get: {
              $ref: "#/visitors/document/objects/Operation"
            },
            put: {
              $ref: "#/visitors/document/objects/Operation"
            },
            post: {
              $ref: "#/visitors/document/objects/Operation"
            },
            delete: {
              $ref: "#/visitors/document/objects/Operation"
            },
            options: {
              $ref: "#/visitors/document/objects/Operation"
            },
            head: {
              $ref: "#/visitors/document/objects/Operation"
            },
            patch: {
              $ref: "#/visitors/document/objects/Operation"
            },
            trace: {
              $ref: "#/visitors/document/objects/Operation"
            },
            servers: O3,
            parameters: E3
          }
        },
        Operation: {
          $visitor: d3,
          fixedFields: {
            tags: m3,
            summary: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            },
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: {
              $ref: "#/visitors/value"
            },
            parameters: v3,
            requestBody: y3,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: g3,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: b3,
            servers: x3
          }
        },
        ExternalDocumentation: {
          $visitor: t3,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            url: {
              $ref: "#/visitors/value"
            }
          }
        },
        Parameter: {
          $visitor: $V,
          fixedFields: {
            name: {
              $ref: "#/visitors/value"
            },
            in: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            },
            required: {
              $ref: "#/visitors/value"
            },
            deprecated: {
              $ref: "#/visitors/value"
            },
            allowEmptyValue: {
              $ref: "#/visitors/value"
            },
            style: {
              $ref: "#/visitors/value"
            },
            explode: {
              $ref: "#/visitors/value"
            },
            allowReserved: {
              $ref: "#/visitors/value"
            },
            schema: AV,
            example: {
              $ref: "#/visitors/value"
            },
            examples: UV,
            content: JV
          }
        },
        RequestBody: {
          $visitor: i3,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: o3,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: KL,
          fixedFields: {
            schema: vV,
            example: {
              $ref: "#/visitors/value"
            },
            examples: yV,
            encoding: gV
          }
        },
        Encoding: {
          $visitor: r3,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: s3,
            style: {
              $ref: "#/visitors/value"
            },
            explode: {
              $ref: "#/visitors/value"
            },
            allowReserved: {
              $ref: "#/visitors/value"
            }
          }
        },
        Responses: {
          $visitor: p3,
          fixedFields: {
            default: h3
          }
        },
        Response: {
          $visitor: c3,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: l3,
            content: u3,
            links: f3
          }
        },
        Callback: {
          $visitor: a3
        },
        Example: {
          $visitor: ZV,
          fixedFields: {
            summary: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            },
            value: {
              $ref: "#/visitors/value"
            },
            externalValue: e3
          }
        },
        Link: {
          $visitor: VL,
          fixedFields: {
            operationRef: BL,
            operationId: UL,
            parameters: JL,
            requestBody: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            },
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: jV,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            required: {
              $ref: "#/visitors/value"
            },
            deprecated: {
              $ref: "#/visitors/value"
            },
            allowEmptyValue: {
              $ref: "#/visitors/value"
            },
            style: {
              $ref: "#/visitors/value"
            },
            explode: {
              $ref: "#/visitors/value"
            },
            allowReserved: {
              $ref: "#/visitors/value"
            },
            schema: PV,
            example: {
              $ref: "#/visitors/value"
            },
            examples: TV,
            content: _V
          }
        },
        Tag: {
          $visitor: wV,
          fixedFields: {
            name: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            },
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: OV,
          fixedFields: {
            $ref: EV
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: CV,
          fixedFields: {
            // the following properties are taken directly from the JSON Schema definition and follow the same specifications
            title: je.title,
            multipleOf: je.multipleOf,
            maximum: je.maximum,
            exclusiveMaximum: je.exclusiveMaximum,
            minimum: je.minimum,
            exclusiveMinimum: je.exclusiveMinimum,
            maxLength: je.maxLength,
            minLength: je.minLength,
            pattern: je.pattern,
            maxItems: je.maxItems,
            minItems: je.minItems,
            uniqueItems: je.uniqueItems,
            maxProperties: je.maxProperties,
            minProperties: je.minProperties,
            required: je.required,
            enum: je.enum,
            // the following properties are taken from the JSON Schema definition but their definitions were adjusted to the OpenAPI Specification
            type: DV,
            allOf: RV,
            anyOf: IV,
            oneOf: FV,
            not: Nd,
            items: MV,
            properties: kV,
            additionalProperties: Nd,
            description: je.description,
            format: je.format,
            default: je.default,
            // OpenAPI vocabulary
            nullable: {
              $ref: "#/visitors/value"
            },
            discriminator: {
              $ref: "#/visitors/document/objects/Discriminator"
            },
            writeOnly: {
              $ref: "#/visitors/value"
            },
            xml: {
              $ref: "#/visitors/document/objects/XML"
            },
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            example: {
              $ref: "#/visitors/value"
            },
            deprecated: {
              $ref: "#/visitors/value"
            }
          }
        },
        Discriminator: {
          $visitor: LV,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: VV
          }
        },
        XML: {
          $visitor: BV,
          fixedFields: {
            name: {
              $ref: "#/visitors/value"
            },
            namespace: {
              $ref: "#/visitors/value"
            },
            prefix: {
              $ref: "#/visitors/value"
            },
            attribute: {
              $ref: "#/visitors/value"
            },
            wrapped: {
              $ref: "#/visitors/value"
            }
          }
        },
        SecurityScheme: {
          $visitor: $3,
          fixedFields: {
            type: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            },
            name: {
              $ref: "#/visitors/value"
            },
            in: {
              $ref: "#/visitors/value"
            },
            scheme: {
              $ref: "#/visitors/value"
            },
            bearerFormat: {
              $ref: "#/visitors/value"
            },
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: {
              $ref: "#/visitors/value"
            }
          }
        },
        OAuthFlows: {
          $visitor: A3,
          fixedFields: {
            implicit: {
              $ref: "#/visitors/document/objects/OAuthFlow"
            },
            password: {
              $ref: "#/visitors/document/objects/OAuthFlow"
            },
            clientCredentials: {
              $ref: "#/visitors/document/objects/OAuthFlow"
            },
            authorizationCode: {
              $ref: "#/visitors/document/objects/OAuthFlow"
            }
          }
        },
        OAuthFlow: {
          $visitor: j3,
          fixedFields: {
            authorizationUrl: {
              $ref: "#/visitors/value"
            },
            tokenUrl: {
              $ref: "#/visitors/value"
            },
            refreshUrl: {
              $ref: "#/visitors/value"
            },
            scopes: P3
          }
        },
        SecurityRequirement: {
          $visitor: bV
        }
      },
      extension: {
        $visitor: ML
      }
    }
  }
}, _3 = () => {
  const t = Zt(PL);
  return {
    predicates: {
      ...mV,
      isElement: xe,
      isStringElement: G,
      isArrayElement: qe,
      isObjectElement: ce,
      isMemberElement: vt,
      includesClasses: Oa,
      hasElementSourceMap: On
    },
    namespace: t
  };
}, C3 = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const s = Ur(t), n = dr(S), i = Ce(e, n), o = new i({
    specObj: n
  });
  return $e(s, o), Ct(o.element, r, {
    toolboxCreator: _3,
    visitorOptions: {
      keyMap: _L,
      nodeTypeGetter: TL
    }
  });
}, se = (t) => (e, r = {}) => C3(e, {
  specPath: t,
  ...r
});
jn.refract = se(["visitors", "document", "objects", "Callback", "$visitor"]);
Pn.refract = se(["visitors", "document", "objects", "Components", "$visitor"]);
Tn.refract = se(["visitors", "document", "objects", "Contact", "$visitor"]);
_n.refract = se(["visitors", "document", "objects", "Example", "$visitor"]);
Aa.refract = se(["visitors", "document", "objects", "Discriminator", "$visitor"]);
ja.refract = se(["visitors", "document", "objects", "Encoding", "$visitor"]);
Cn.refract = se(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Rs.refract = se(["visitors", "document", "objects", "Header", "$visitor"]);
Rn.refract = se(["visitors", "document", "objects", "Info", "$visitor"]);
In.refract = se(["visitors", "document", "objects", "License", "$visitor"]);
Fn.refract = se(["visitors", "document", "objects", "Link", "$visitor"]);
Mn.refract = se(["visitors", "document", "objects", "MediaType", "$visitor"]);
Pa.refract = se(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Ta.refract = se(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
kn.refract = se(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
_a.refract = se(["visitors", "document", "objects", "OpenApi", "$visitor"]);
Nn.refract = se(["visitors", "document", "objects", "Operation", "$visitor"]);
Is.refract = se(["visitors", "document", "objects", "Parameter", "$visitor"]);
Dn.refract = se(["visitors", "document", "objects", "PathItem", "$visitor"]);
Ln.refract = se(["visitors", "document", "objects", "Paths", "$visitor"]);
Vn.refract = se(["visitors", "document", "objects", "Reference", "$visitor"]);
Bn.refract = se(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Un.refract = se(["visitors", "document", "objects", "Response", "$visitor"]);
Jn.refract = se(["visitors", "document", "objects", "Responses", "$visitor"]);
Ra.refract = se(["visitors", "document", "objects", "Schema", "$visitor"]);
Gn.refract = se(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Kn.refract = se(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
Wn.refract = se(["visitors", "document", "objects", "Server", "$visitor"]);
Yn.refract = se(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Ia.refract = se(["visitors", "document", "objects", "Tag", "$visitor"]);
Fa.refract = se(["visitors", "document", "objects", "XML", "$visitor"]);
class Da extends jn {
}
class La extends Pn {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class Va extends Tn {
}
class ep extends Aa {
}
class tp extends ja {
}
class Ba extends _n {
}
class Ua extends Cn {
}
class Ja extends Rs {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Ha extends Rn {
  get license() {
    return this.get("license");
  }
  set license(e) {
    this.set("license", e);
  }
  get summary() {
    return this.get("summary");
  }
  set summary(e) {
    this.set("summary", e);
  }
}
const Ho = class Ho extends Bt {
  constructor(e, r, s) {
    super(e, r, s), this.element = "jsonSchemaDialect";
  }
};
x(Ho, "default", new Ho("https://spec.openapis.org/oas/3.1/dialect/base"));
let _r = Ho;
class qa extends In {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class za extends Fn {
}
class Ga extends Mn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class rp extends Pa {
}
class sp extends Ta {
}
class np extends kn {
}
class vr extends F {
  constructor(e, r, s) {
    super(e, r, s), this.element = "openApi3_1", this.classes.push("api");
  }
  get openapi() {
    return this.get("openapi");
  }
  set openapi(e) {
    this.set("openapi", e);
  }
  get info() {
    return this.get("info");
  }
  set info(e) {
    this.set("info", e);
  }
  get jsonSchemaDialect() {
    return this.get("jsonSchemaDialect");
  }
  set jsonSchemaDialect(e) {
    this.set("jsonSchemaDialect", e);
  }
  get servers() {
    return this.get("servers");
  }
  set servers(e) {
    this.set("servers", e);
  }
  get paths() {
    return this.get("paths");
  }
  set paths(e) {
    this.set("paths", e);
  }
  get components() {
    return this.get("components");
  }
  set components(e) {
    this.set("components", e);
  }
  get security() {
    return this.get("security");
  }
  set security(e) {
    this.set("security", e);
  }
  get tags() {
    return this.get("tags");
  }
  set tags(e) {
    this.set("tags", e);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  set externalDocs(e) {
    this.set("externalDocs", e);
  }
  get webhooks() {
    return this.get("webhooks");
  }
  set webhooks(e) {
    this.set("webhooks", e);
  }
}
class Xn extends Nn {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(e) {
    this.set("requestBody", e);
  }
}
class Ka extends Is {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class cr extends Dn {
  get GET() {
    return this.get("get");
  }
  set GET(e) {
    this.set("GET", e);
  }
  get PUT() {
    return this.get("put");
  }
  set PUT(e) {
    this.set("PUT", e);
  }
  get POST() {
    return this.get("post");
  }
  set POST(e) {
    this.set("POST", e);
  }
  get DELETE() {
    return this.get("delete");
  }
  set DELETE(e) {
    this.set("DELETE", e);
  }
  get OPTIONS() {
    return this.get("options");
  }
  set OPTIONS(e) {
    this.set("OPTIONS", e);
  }
  get HEAD() {
    return this.get("head");
  }
  set HEAD(e) {
    this.set("HEAD", e);
  }
  get PATCH() {
    return this.get("patch");
  }
  set PATCH(e) {
    this.set("PATCH", e);
  }
  get TRACE() {
    return this.get("trace");
  }
  set TRACE(e) {
    this.set("TRACE", e);
  }
}
class Wa extends Ln {
}
class yr extends Vn {
}
Object.defineProperty(yr.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
Object.defineProperty(yr.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(t) {
    this.set("summary", t);
  },
  enumerable: !0
});
class Ya extends Bn {
}
let Xa = class extends Un {
};
class Qa extends Jn {
}
let Qn = class extends Fs {
  constructor(e, r, s) {
    super(e, r, s), this.element = "JSONSchemaDraft6";
  }
  /**
   * Core vocabulary
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-01
   */
  get idProp() {
    throw new Q("id keyword from Core vocabulary has been renamed to $id.");
  }
  set idProp(e) {
    throw new Q("id keyword from Core vocabulary has been renamed to $id.");
  }
  get $id() {
    return this.get("$id");
  }
  set $id(e) {
    this.set("$id", e);
  }
  /**
   * Validation vocabulary
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-01
   */
  /**
   *  Validation keywords for numeric instances (number and integer)
   */
  get exclusiveMaximum() {
    return this.get("exclusiveMaximum");
  }
  set exclusiveMaximum(e) {
    this.set("exclusiveMaximum", e);
  }
  get exclusiveMinimum() {
    return this.get("exclusiveMinimum");
  }
  set exclusiveMinimum(e) {
    this.set("exclusiveMinimum", e);
  }
  /**
   * Validation keywords for arrays
   */
  get containsProp() {
    return this.get("contains");
  }
  set containsProp(e) {
    this.set("contains", e);
  }
  get items() {
    return this.get("items");
  }
  set items(e) {
    this.set("items", e);
  }
  /**
   * Validation keywords for objects
   */
  get propertyNames() {
    return this.get("propertyNames");
  }
  set propertyNames(e) {
    this.set("propertyNames", e);
  }
  /**
   *  Validation keywords for any instance type
   */
  get const() {
    return this.get("const");
  }
  set const(e) {
    this.set("const", e);
  }
  get not() {
    return this.get("not");
  }
  set not(e) {
    this.set("not", e);
  }
  /**
   * Metadata keywords
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-01#section-7
   */
  get examples() {
    return this.get("examples");
  }
  set examples(e) {
    this.set("examples", e);
  }
}, Zn = class extends qn {
  get hrefSchema() {
    return this.get("hrefSchema");
  }
  set hrefSchema(e) {
    this.set("hrefSchema", e);
  }
  get targetSchema() {
    return this.get("targetSchema");
  }
  set targetSchema(e) {
    this.set("targetSchema", e);
  }
  get schema() {
    throw new Q("schema keyword from Hyper-Schema vocabulary has been renamed to submissionSchema.");
  }
  set schema(e) {
    throw new Q("schema keyword from Hyper-Schema vocabulary has been renamed to submissionSchema.");
  }
  get submissionSchema() {
    return this.get("submissionSchema");
  }
  set submissionSchema(e) {
    this.set("submissionSchema", e);
  }
  get method() {
    throw new Q("method keyword from Hyper-Schema vocabulary has been removed.");
  }
  set method(e) {
    throw new Q("method keyword from Hyper-Schema vocabulary has been removed.");
  }
  get encType() {
    throw new Q("encType keyword from Hyper-Schema vocabulary has been renamed to submissionEncType.");
  }
  set encType(e) {
    throw new Q("encType keyword from Hyper-Schema vocabulary has been renamed to submissionEncType.");
  }
  get submissionEncType() {
    return this.get("submissionEncType");
  }
  set submissionEncType(e) {
    this.set("submissionEncType", e);
  }
};
const R3 = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft6", Qn), e.register("jSONReference", Ms), e.register("media", Hn), e.register("linkDescription", Zn), e;
  }
}, I3 = {
  JSONSchemaDraft6Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ..._t
};
let lb = class extends tb {
  constructor(e) {
    super(e), this.element = new Qn();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-06/schema#";
  }
  BooleanElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("boolean-json-schema"), r;
  }
  handleSchemaIdentifier(e, r = "$id") {
    return super.handleSchemaIdentifier(e, r);
  }
}, F3 = class extends rb {
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), ee;
  }
};
class M3 extends te {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
let ub = class extends sb {
  constructor(e) {
    super(e), this.element = new Zn();
  }
};
const Fe = Se(
  // JSON Schema object modifications
  R(["visitors", "document", "objects", "JSONSchema", "$visitor"], lb),
  Ye(["visitors", "document", "objects", "JSONSchema", "fixedFields", "id"]),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$id"], ke.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], ke.visitors.JSONSchemaOrJSONReferenceVisitor),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], F3),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], ke.visitors.JSONSchemaOrJSONReferenceVisitor),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "const"], ke.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "examples"], M3),
  // Link Description object modifications
  R(["visitors", "document", "objects", "LinkDescription", "$visitor"], ub),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], ke.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ye(["visitors", "document", "objects", "LinkDescription", "fixedFields", "schema"]),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], ke.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ye(["visitors", "document", "objects", "LinkDescription", "fixedFields", "method"]),
  Ye(["visitors", "document", "objects", "LinkDescription", "fixedFields", "encType"]),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"], ke.visitors.value)
)(ke), k3 = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Qn || t(s) && e("JSONSchemaDraft6", s) && r("object", s)), N3 = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Zn || t(s) && e("linkDescription", s) && r("object", s)), D3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Yf,
  isJSONSchemaElement: k3,
  isLinkDescriptionElement: N3,
  isMediaElement: eb
}, Symbol.toStringTag, { value: "Module" })), L3 = () => {
  const t = Zt(R3);
  return {
    predicates: {
      ...D3,
      isStringElement: G
    },
    namespace: t
  };
}, V3 = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: s = Fe
} = {}) => {
  const n = Ur(t), i = dr(s), o = Ce(e, i), a = new o({
    specObj: i
  });
  return $e(n, a), Ct(a.element, r, {
    toolboxCreator: L3,
    visitorOptions: {
      keyMap: I3,
      nodeTypeGetter: zn
    }
  });
}, fb = (t) => (e, r = {}) => V3(e, {
  specPath: t,
  ...r
});
Qn.refract = fb(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Zn.refract = fb(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let ei = class extends Qn {
  constructor(e, r, s) {
    super(e, r, s), this.element = "JSONSchemaDraft7";
  }
  /**
   * Core vocabulary
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-01
   */
  get $comment() {
    return this.get("$comment");
  }
  set $comment(e) {
    this.set("$comment", e);
  }
  /**
   * Validation vocabulary
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01
   */
  /**
   * Validation keywords for arrays
   */
  get items() {
    return this.get("items");
  }
  set items(e) {
    this.set("items", e);
  }
  /**
   * Keywords for Applying Subschemas Conditionally
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.6
   */
  get if() {
    return this.get("if");
  }
  set if(e) {
    this.set("if", e);
  }
  get then() {
    return this.get("then");
  }
  set then(e) {
    this.set("then", e);
  }
  get else() {
    return this.get("else");
  }
  set else(e) {
    this.set("else", e);
  }
  /**
   * Keywords for Applying Subschemas With Boolean Logic
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.7
   */
  get not() {
    return this.get("not");
  }
  set not(e) {
    this.set("not", e);
  }
  /**
   * String-Encoding Non-JSON Data
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-00#section-8
   */
  get contentEncoding() {
    return this.get("contentEncoding");
  }
  set contentEncoding(e) {
    this.set("contentEncoding", e);
  }
  get contentMediaType() {
    return this.get("contentMediaType");
  }
  set contentMediaType(e) {
    this.set("contentMediaType", e);
  }
  get media() {
    throw new Q('media keyword from Hyper-Schema vocabulary has been moved to validation vocabulary as "contentMediaType" / "contentEncoding"');
  }
  set media(e) {
    throw new Q('media keyword from Hyper-Schema vocabulary has been moved to validation vocabulary as "contentMediaType" / "contentEncoding"');
  }
  /**
   * Schema annotations
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-10
   */
  get writeOnly() {
    return this.get("writeOnly");
  }
  set writeOnly(e) {
    this.set("writeOnly", e);
  }
}, ti = class extends Zn {
  /**
   * Link context.
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-hyperschema-01#section-6.1
   */
  get anchor() {
    return this.get("anchor");
  }
  set anchor(e) {
    this.set("anchor", e);
  }
  get anchorPointer() {
    return this.get("anchorPointer");
  }
  set anchorPointer(e) {
    this.set("anchorPointer", e);
  }
  /**
   * Adjusting URI Template Resolution.
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-hyperschema-01#section-6.4
   */
  get templatePointers() {
    return this.get("templatePointers");
  }
  set templatePointers(e) {
    this.set("templatePointers", e);
  }
  get templateRequired() {
    return this.get("templateRequired");
  }
  set templateRequired(e) {
    this.set("templateRequired", e);
  }
  /**
   * Link Target Attributes.
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-hyperschema-01#section-6.5
   */
  get targetSchema() {
    return this.get("targetSchema");
  }
  set targetSchema(e) {
    this.set("targetSchema", e);
  }
  get mediaType() {
    throw new Q("mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.");
  }
  set mediaType(e) {
    throw new Q("mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.");
  }
  get targetMediaType() {
    return this.get("targetMediaType");
  }
  set targetMediaType(e) {
    this.set("targetMediaType", e);
  }
  get targetHints() {
    return this.get("targetHints");
  }
  set targetHints(e) {
    this.set("targetHints", e);
  }
  get description() {
    return this.get("description");
  }
  set description(e) {
    this.set("description", e);
  }
  get $comment() {
    return this.get("$comment");
  }
  set $comment(e) {
    this.set("$comment", e);
  }
  /**
   *  Link Input.
   *
   *  URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-hyperschema-01#section-6.6
   */
  get hrefSchema() {
    return this.get("hrefSchema");
  }
  set hrefSchema(e) {
    this.set("hrefSchema", e);
  }
  get headerSchema() {
    return this.get("headerSchema");
  }
  set headerSchema(e) {
    this.set("headerSchema", e);
  }
  /**
   *  Submitting Data for Processing.
   *
   *  URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-hyperschema-01#section-6.6.4
   */
  get submissionSchema() {
    return this.get("submissionSchema");
  }
  set submissionSchema(e) {
    this.set("submissionSchema", e);
  }
  get submissionEncType() {
    throw new Q("submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.");
  }
  set submissionEncType(e) {
    throw new Q("submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.");
  }
  get submissionMediaType() {
    return this.get("submissionMediaType");
  }
  set submissionMediaType(e) {
    this.set("submissionMediaType", e);
  }
};
const B3 = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft7", ei), e.register("jSONReference", Ms), e.register("linkDescription", ti), e;
  }
}, U3 = {
  JSONSchemaDraft7Element: ["content"],
  JSONReferenceElement: ["content"],
  LinkDescriptionElement: ["content"],
  ..._t
};
let pb = class extends lb {
  constructor(e) {
    super(e), this.element = new ei();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-07/schema#";
  }
}, hb = class extends ub {
  constructor(e) {
    super(e), this.element = new ti();
  }
};
const sr = Se(
  // JSON Schema object modifications
  R(["visitors", "document", "objects", "JSONSchema", "$visitor"], pb),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$comment"], Fe.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ye(["visitors", "document", "objects", "JSONSchema", "fixedFields", "media"]),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentEncoding"], Fe.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentMediaType"], Fe.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "writeOnly"], Fe.visitors.value),
  // Link Description object modifications
  R(["visitors", "document", "objects", "LinkDescription", "$visitor"], hb),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchor"], Fe.visitors.value),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchorPointer"], Fe.visitors.value),
  Ye(["visitors", "document", "objects", "LinkDescription", "fixedFields", "mediaType"]),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetMediaType"], Fe.visitors.value),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetHints"], Fe.visitors.value),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "description"], Fe.visitors.value),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "$comment"], Fe.visitors.value),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ye(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"]),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionMediaType"], Fe.visitors.value)
)(Fe), J3 = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof ei || t(s) && e("JSONSchemaDraft7", s) && r("object", s)), H3 = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof ti || t(s) && e("linkDescription", s) && r("object", s)), q3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Yf,
  isJSONSchemaElement: J3,
  isLinkDescriptionElement: H3
}, Symbol.toStringTag, { value: "Module" })), z3 = () => {
  const t = Zt(B3);
  return {
    predicates: {
      ...q3,
      isStringElement: G
    },
    namespace: t
  };
}, G3 = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: s = sr
} = {}) => {
  const n = Ur(t), i = dr(s), o = Ce(e, i), a = new o({
    specObj: i
  });
  return $e(n, a), Ct(a.element, r, {
    toolboxCreator: z3,
    visitorOptions: {
      keyMap: U3,
      nodeTypeGetter: zn
    }
  });
}, db = (t) => (e, r = {}) => G3(e, {
  specPath: t,
  ...r
});
ei.refract = db(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
ti.refract = db(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let ri = class extends ei {
  constructor(e, r, s) {
    super(e, r, s), this.element = "JSONSchema201909";
  }
  /**
   * Core vocabulary
   *
   * URI: https://json-schema.org/draft/2019-09/vocab/core
   */
  get $vocabulary() {
    return this.get("$vocabulary");
  }
  set $vocabulary(e) {
    this.set("$vocabulary", e);
  }
  get $anchor() {
    return this.get("$anchor");
  }
  set $anchor(e) {
    this.set("$anchor", e);
  }
  get $recursiveAnchor() {
    return this.get("$recursiveAnchor");
  }
  set $recursiveAnchor(e) {
    this.set("$recursiveAnchor", e);
  }
  get $recursiveRef() {
    return this.get("$recursiveRef");
  }
  set $recursiveRef(e) {
    this.set("$recursiveRef", e);
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
  get $defs() {
    return this.get("$defs");
  }
  set $defs(e) {
    this.set("$defs", e);
  }
  get definitions() {
    throw new Q("definitions keyword from Validation vocabulary has been renamed to $defs.");
  }
  set definitions(e) {
    throw new Q("definitions keyword from Validation vocabulary has been renamed to $defs.");
  }
  /**
   * Applicator vocabulary
   *
   * URI: https://json-schema.org/draft/2019-09/vocab/applicator
   */
  get not() {
    return this.get("not");
  }
  set not(e) {
    this.set("not", e);
  }
  get if() {
    return this.get("if");
  }
  set if(e) {
    this.set("if", e);
  }
  get then() {
    return this.get("then");
  }
  set then(e) {
    this.set("then", e);
  }
  get else() {
    return this.get("else");
  }
  set else(e) {
    this.set("else", e);
  }
  get dependentSchemas() {
    return this.get("dependentSchemas");
  }
  set dependentSchemas(e) {
    this.set("dependentSchemas", e);
  }
  get dependencies() {
    throw new Q("dependencies keyword from Validation vocabulary has been renamed to dependentSchemas.");
  }
  set dependencies(e) {
    throw new Q("dependencies keyword from Validation vocabulary has been renamed to dependentSchemas.");
  }
  get items() {
    return this.get("items");
  }
  set items(e) {
    this.set("items", e);
  }
  get containsProp() {
    return this.get("contains");
  }
  set containsProp(e) {
    this.set("contains", e);
  }
  get additionalProperties() {
    return this.get("additionalProperties");
  }
  set additionalProperties(e) {
    this.set("additionalProperties", e);
  }
  get additionalItems() {
    return this.get("additionalItems");
  }
  set additionalItems(e) {
    this.set("additionalItems", e);
  }
  get propertyNames() {
    return this.get("propertyNames");
  }
  set propertyNames(e) {
    this.set("propertyNames", e);
  }
  get unevaluatedItems() {
    return this.get("unevaluatedItems");
  }
  set unevaluatedItems(e) {
    this.set("unevaluatedItems", e);
  }
  get unevaluatedProperties() {
    return this.get("unevaluatedProperties");
  }
  set unevaluatedProperties(e) {
    this.set("unevaluatedProperties", e);
  }
  /**
   * Validation vocabulary
   *
   * URI: https://json-schema.org/draft/2019-09/json-schema-validation#rfc.section.6
   */
  /**
   * Validation Keywords for Arrays
   *
   * URI: https://json-schema.org/draft/2019-09/draft-handrews-json-schema-validation-02#rfc.section.6.4
   */
  get maxContains() {
    return this.get("maxContains");
  }
  set maxContains(e) {
    this.set("maxContains", e);
  }
  get minContains() {
    return this.get("minContains");
  }
  set minContains(e) {
    this.set("minContains", e);
  }
  /**
   * Validation Keywords for Objects
   *
   * URI: https://json-schema.org/draft/2019-09/draft-handrews-json-schema-validation-02#rfc.section.6.5
   */
  get dependentRequired() {
    return this.get("dependentRequired");
  }
  set dependentRequired(e) {
    this.set("dependentRequired", e);
  }
  /**
   * Vocabulary for Basic Meta-Data Annotations
   *
   * URI: https://json-schema.org/draft/2019-09/vocab/meta-data
   */
  get deprecated() {
    return this.get("deprecated");
  }
  set deprecated(e) {
    this.set("deprecated", e);
  }
  /**
   * Vocabulary for the Contents of String-Encoded Data
   *
   * URI: https://json-schema.org/draft/2019-09/vocab/content
   */
  get contentSchema() {
    return this.get("contentSchema");
  }
  set contentSchema(e) {
    this.set("contentSchema", e);
  }
}, si = class extends ti {
  /**
   *  Link Target Attributes.
   *
   *  URI: https://json-schema.org/draft/2019-09/draft-handrews-json-schema-hyperschema-02#rfc.section.6.5
   */
  get targetSchema() {
    return this.get("targetSchema");
  }
  set targetSchema(e) {
    this.set("targetSchema", e);
  }
  /**
   *  Link Input.
   *
   *  URI: https://json-schema.org/draft/2019-09/draft-handrews-json-schema-hyperschema-02#input
   */
  get hrefSchema() {
    return this.get("hrefSchema");
  }
  set hrefSchema(e) {
    this.set("hrefSchema", e);
  }
  get headerSchema() {
    return this.get("headerSchema");
  }
  set headerSchema(e) {
    this.set("headerSchema", e);
  }
  get submissionSchema() {
    return this.get("submissionSchema");
  }
  set submissionSchema(e) {
    this.set("submissionSchema", e);
  }
};
const K3 = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema201909", ri), e.register("linkDescription", si), e;
  }
}, W3 = {
  JSONSchema201909Element: ["content"],
  LinkDescriptionElement: ["content"],
  ..._t
};
let Me = class extends pb {
  constructor(e) {
    super(e), this.element = new ri();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2019-09/schema";
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = Tr.prototype.ObjectElement.call(this, e);
    return G(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
};
class Y3 extends te {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
class X3 extends te {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let mb = class extends _(mr, Ae, te) {
  constructor(e) {
    super(e), this.element = new F(), this.element.classes.push("json-schema-$defs"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
}, vb = class extends _(et, Ae, te) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, yb = class extends _(et, Ae, te) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, gb = class extends _(et, Ae, te) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, bb = class extends _(mr, Ae, te) {
  constructor(e) {
    super(e), this.element = new F(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
};
class Q3 extends _(et, Ae, te) {
  ObjectElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), ee;
  }
  ArrayElement(e) {
    return this.element = new ae(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const s = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), ee;
  }
}
let xb = class extends _(mr, Ae, te) {
  constructor(e) {
    super(e), this.element = new F(), this.element.classes.push("json-schema-properties"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
}, Sb = class extends _(mr, Ae, te) {
  constructor(e) {
    super(e), this.element = new F(), this.element.classes.push("json-schema-patternProperties"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
};
class Z3 extends te {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
let wb = class extends hb {
  constructor(e) {
    super(e), this.element = new si();
  }
};
const $i = Se(
  // JSON Schema object modifications
  R(["visitors", "document", "objects", "JSONSchema", "$visitor"], Me),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$vocabulary"], Y3),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$anchor"], sr.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"], sr.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"], sr.visitors.value),
  Ye(["visitors", "document", "objects", "JSONReference", "$visitor"]),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$ref"], X3),
  Ye(["visitors", "document", "objects", "JSONSchema", "fixedFields", "definitions"]),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$defs"], mb),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "allOf"], vb),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "anyOf"], yb),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "oneOf"], gb),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], Me),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Me),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Me),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Me),
  Ye(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependencies"]),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentSchemas"], bb),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], Q3),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Me),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "properties"], xb),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "patternProperties"], Sb),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], Me),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"], Me),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Me),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], Me),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], Me),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "maxContains"], sr.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "minContains"], sr.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentRequired"], Z3),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "deprecated"], sr.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], Me),
  // Link Description object modifications
  R(["visitors", "document", "objects", "LinkDescription", "$visitor"], wb),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], Me),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Me),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Me),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Me)
)(sr), eB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof ri || t(s) && e("JSONSchema201909", s) && r("object", s)), tB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof si || t(s) && e("linkDescription", s) && r("object", s)), rB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: eB,
  isLinkDescriptionElement: tB
}, Symbol.toStringTag, { value: "Module" })), sB = () => {
  const t = Zt(K3);
  return {
    predicates: {
      ...rB,
      isStringElement: G
    },
    namespace: t
  };
}, nB = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: s = $i
} = {}) => {
  const n = Ur(t), i = dr(s), o = Ce(e, i), a = new o({
    specObj: i
  });
  return $e(n, a), Ct(a.element, r, {
    toolboxCreator: sB,
    visitorOptions: {
      keyMap: W3,
      nodeTypeGetter: zn
    }
  });
}, Ob = (t) => (e, r = {}) => nB(e, {
  specPath: t,
  ...r
});
ri.refract = Ob(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
si.refract = Ob(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class ni extends ri {
  constructor(e, r, s) {
    super(e, r, s), this.element = "JSONSchema202012";
  }
  /**
   * Core vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/core
   */
  get $dynamicAnchor() {
    return this.get("$dynamicAnchor");
  }
  set $dynamicAnchor(e) {
    this.set("$dynamicAnchor", e);
  }
  get $recursiveAnchor() {
    throw new Q("$recursiveAnchor keyword from Core vocabulary has been renamed to $dynamicAnchor.");
  }
  set $recursiveAnchor(e) {
    throw new Q("$recursiveAnchor keyword from Core vocabulary has been renamed to $dynamicAnchor.");
  }
  get $dynamicRef() {
    return this.get("$dynamicRef");
  }
  set $dynamicRef(e) {
    this.set("$dynamicRef", e);
  }
  get $recursiveRef() {
    throw new Q("$recursiveRef keyword from Core vocabulary has been renamed to $dynamicRef.");
  }
  set $recursiveRef(e) {
    throw new Q("$recursiveRef keyword from Core vocabulary has been renamed to $dynamicRef.");
  }
  /**
   * Applicator vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/applicator
   */
  get prefixItems() {
    return this.get("prefixItems");
  }
  set prefixItems(e) {
    this.set("prefixItems", e);
  }
}
class Za extends si {
  /**
   *  Link Target Attributes.
   *
   *  URI: https://json-schema.org/draft/2019-09/draft-handrews-json-schema-hyperschema-02#rfc.section.6.5
   */
  get targetSchema() {
    return this.get("targetSchema");
  }
  set targetSchema(e) {
    this.set("targetSchema", e);
  }
  /**
   *  Link Input.
   *
   *  URI: https://json-schema.org/draft/2019-09/draft-handrews-json-schema-hyperschema-02#input
   */
  get hrefSchema() {
    return this.get("hrefSchema");
  }
  set hrefSchema(e) {
    this.set("hrefSchema", e);
  }
  get headerSchema() {
    return this.get("headerSchema");
  }
  set headerSchema(e) {
    this.set("headerSchema", e);
  }
  get submissionSchema() {
    return this.get("submissionSchema");
  }
  set submissionSchema(e) {
    this.set("submissionSchema", e);
  }
}
const iB = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema202012", ni), e.register("linkDescription", Za), e;
  }
}, oB = {
  JSONSchema202012Element: ["content"],
  LinkDescriptionElement: ["content"],
  ..._t
};
let Pe = class extends Me {
  constructor(e) {
    super(e), this.element = new ni();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2020-12/schema";
  }
}, Eb = class extends _(et, Ae, te) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-prefixItems");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const s = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, aB = class extends wb {
  constructor(e) {
    super(e), this.element = new Za();
  }
};
const $b = Se(
  // JSON Schema object modifications
  R(["visitors", "document", "objects", "JSONSchema", "$visitor"], Pe),
  Ye(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"]),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicAnchor"], $i.visitors.value),
  Ye(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"]),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicRef"], $i.visitors.value),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], Pe),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Pe),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Pe),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Pe),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "prefixItems"], Eb),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], Pe),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Pe),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], Pe),
  Ye(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"]),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Pe),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], Pe),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], Pe),
  R(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], Pe),
  // Link Description object modifications
  R(["visitors", "document", "objects", "LinkDescription", "$visitor"], aB),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], Pe),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Pe),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Pe),
  R(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Pe)
)($i), cB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof ni || t(s) && e("JSONSchema202012", s) && r("object", s)), lB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Za || t(s) && e("linkDescription", s) && r("object", s)), uB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: cB,
  isLinkDescriptionElement: lB
}, Symbol.toStringTag, { value: "Module" })), fB = () => {
  const t = Zt(iB);
  return {
    predicates: {
      ...uB,
      isStringElement: G
    },
    namespace: t
  };
}, pB = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: s = $b
} = {}) => {
  const n = Ur(t), i = dr(s), o = Ce(e, i), a = new o({
    specObj: i
  });
  return $e(n, a), Ct(a.element, r, {
    toolboxCreator: fB,
    visitorOptions: {
      keyMap: oB,
      nodeTypeGetter: zn
    }
  });
}, Ab = (t) => (e, r = {}) => pB(e, {
  specPath: t,
  ...r
});
ni.refract = Ab(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Za.refract = Ab(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class Jr extends ni {
  constructor(e, r, s) {
    super(e, r, s), this.element = "schema";
  }
  /**
   * OAS base vocabulary
   *
   * URI: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#baseVocabulary
   */
  get discriminator() {
    return this.get("discriminator");
  }
  set discriminator(e) {
    this.set("discriminator", e);
  }
  get xml() {
    return this.get("xml");
  }
  set xml(e) {
    this.set("xml", e);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  set externalDocs(e) {
    this.set("externalDocs", e);
  }
  /**
   * @deprecated The example property has been deprecated in favor of the JSON Schema examples keyword. Use of example is discouraged, and later versions of this specification may remove it.
   */
  get example() {
    return this.get("example");
  }
  set example(e) {
    this.set("example", e);
  }
}
class ec extends Gn {
}
class tc extends Kn {
}
class rc extends Wn {
}
class sc extends Yn {
}
class ip extends Ia {
}
class op extends Fa {
}
const ap = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Da), e.register("components", La), e.register("contact", Va), e.register("discriminator", ep), e.register("encoding", tp), e.register("example", Ba), e.register("externalDocumentation", Ua), e.register("header", Ja), e.register("info", Ha), e.register("jsonSchemaDialect", _r), e.register("license", qa), e.register("link", za), e.register("mediaType", Ga), e.register("oAuthFlow", rp), e.register("oAuthFlows", sp), e.register("openapi", np), e.register("openApi3_1", vr), e.register("operation", Xn), e.register("parameter", Ka), e.register("pathItem", cr), e.register("paths", Wa), e.register("reference", yr), e.register("requestBody", Ya), e.register("response", Xa), e.register("responses", Qa), e.register("schema", Jr), e.register("securityRequirement", ec), e.register("securityScheme", tc), e.register("server", rc), e.register("serverVariable", sc), e.register("tag", ip), e.register("xml", op), e;
  }
}, qo = class qo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(qo.primaryClass);
  }
};
x(qo, "primaryClass", "components-path-items");
let gu = qo;
const zo = class zo extends F {
  constructor(e, r, s) {
    super(e, r, s), this.classes.push(zo.primaryClass);
  }
};
x(zo, "primaryClass", "webhooks");
let bu = zo;
const ft = (t) => {
  if (xe(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, Et = {
  CallbackElement: ["content"],
  ComponentsElement: ["content"],
  ContactElement: ["content"],
  DiscriminatorElement: ["content"],
  Encoding: ["content"],
  Example: ["content"],
  ExternalDocumentationElement: ["content"],
  HeaderElement: ["content"],
  InfoElement: ["content"],
  LicenseElement: ["content"],
  MediaTypeElement: ["content"],
  OAuthFlowElement: ["content"],
  OAuthFlowsElement: ["content"],
  OpenApi3_1Element: ["content"],
  OperationElement: ["content"],
  ParameterElement: ["content"],
  PathItemElement: ["content"],
  PathsElement: ["content"],
  ReferenceElement: ["content"],
  RequestBodyElement: ["content"],
  ResponseElement: ["content"],
  ResponsesElement: ["content"],
  SchemaElement: ["content"],
  SecurityRequirementElement: ["content"],
  SecuritySchemeElement: ["content"],
  ServerElement: ["content"],
  ServerVariableElement: ["content"],
  TagElement: ["content"],
  ..._t
};
class ii {
  constructor(e, r, s) {
    x(this, "internalStore");
    this.storageElement = e, this.storageField = r, this.storageSubField = s;
  }
  get store() {
    if (!this.internalStore) {
      let e = this.storageElement.get(this.storageField);
      ce(e) || (e = new F(), this.storageElement.set(this.storageField, e));
      let r = e.get(this.storageSubField);
      qe(r) || (r = new ae(), e.set(this.storageSubField, r)), this.internalStore = r;
    }
    return this.internalStore;
  }
  append(e) {
    this.includes(e) || this.store.push(e);
  }
  includes(e) {
    return this.store.includes(e);
  }
}
const hB = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: s
  } = e, n = (a, c) => !r.isParameterElement(a) || !r.isParameterElement(c) || !r.isStringElement(a.name) || !r.isStringElement(a.in) || !r.isStringElement(c.name) || !r.isStringElement(c.in) ? !1 : E(a.name) === E(c.name) && E(a.in) === E(c.in), i = [];
  let o;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(a) {
          o = new ii(a, t, "parameters");
        },
        leave() {
          o = void 0;
        }
      },
      PathItemElement: {
        enter(a, c, l, p, f) {
          if (f.some(r.isComponentsElement))
            return;
          const {
            parameters: d
          } = a;
          r.isArrayElement(d) ? i.push([...d.content]) : i.push([]);
        },
        leave() {
          i.pop();
        }
      },
      OperationElement: {
        leave(a, c, l, p, f) {
          const d = ia(i);
          if (!Array.isArray(d) || d.length === 0)
            return;
          const u = s([...f, l, a]);
          if (o.includes(u))
            return;
          const m = cy([], ["parameters", "content"], a), h = TT(n, [...m, ...d]);
          a.parameters = new ao(h), o.append(u);
        }
      }
    }
  };
}, dB = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: s
  } = e;
  let n, i;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(o) {
          i = new ii(o, t, "security-requirements"), r.isArrayElement(o.security) && (n = o.security);
        },
        leave() {
          i = void 0, n = void 0;
        }
      },
      OperationElement: {
        leave(o, a, c, l, p) {
          if (p.some(r.isComponentsElement))
            return;
          const f = s([...p, c, o]);
          if (i.includes(f))
            return;
          if (typeof o.security > "u" && typeof n < "u") {
            var m;
            o.security = new co((m = n) === null || m === void 0 ? void 0 : m.content), i.append(f);
          }
        }
      }
    }
  };
}, xu = (t) => t.replace(/\s/g, ""), Su = (t) => t.replace(/\W/gi, "_"), mB = (t, e) => {
  const r = Su(xu(e.toLowerCase())), s = Su(xu(t));
  return `${r}${s}`;
}, vB = (t, e, r) => {
  const s = xu(t);
  return s.length > 0 ? Su(s) : mB(e, r);
}, yB = ({
  storageField: t = "x-normalized",
  operationIdNormalizer: e = vB
} = {}) => (r) => {
  const {
    predicates: s,
    ancestorLineageToJSONPointer: n,
    namespace: i
  } = r, o = [], a = [], c = [];
  let l;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(p) {
          l = new ii(p, t, "operation-ids");
        },
        leave() {
          const p = fT((f) => E(f.operationId), a);
          Object.entries(p).forEach(([f, d]) => {
            Array.isArray(d) && (d.length <= 1 || d.forEach((u, m) => {
              const h = `${f}${m + 1}`;
              u.operationId = new i.elements.String(h);
            }));
          }), c.forEach((f) => {
            if (typeof f.operationId > "u") return;
            const d = String(E(f.operationId)), u = a.find((m) => E(m.meta.get("originalOperationId")) === d);
            typeof u > "u" || (f.operationId = N.safe(u.operationId), f.meta.set("originalOperationId", d), f.set("__originalOperationId", d));
          }), a.length = 0, c.length = 0, l = void 0;
        }
      },
      PathItemElement: {
        enter(p) {
          const f = ds("path", E(p.meta.get("path")));
          o.push(f);
        },
        leave() {
          o.pop();
        }
      },
      OperationElement: {
        enter(p, f, d, u, m) {
          if (typeof p.operationId > "u") return;
          const h = n([...m, d, p]);
          if (l.includes(h))
            return;
          const y = String(E(p.operationId)), g = ia(o), v = ds("method", E(p.meta.get("http-method"))), b = e(y, g, v);
          y !== b && (p.operationId = new i.elements.String(b), p.set("__originalOperationId", y), p.meta.set("originalOperationId", y), a.push(p), l.append(h));
        }
      },
      LinkElement: {
        leave(p) {
          s.isLinkElement(p) && (typeof p.operationId > "u" || c.push(p));
        }
      }
    }
  };
}, gB = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: s
  } = e;
  let n;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(i) {
          n = new ii(i, t, "parameter-examples");
        },
        leave() {
          n = void 0;
        }
      },
      ParameterElement: {
        leave(i, o, a, c, l) {
          var p, f;
          if (l.some(r.isComponentsElement) || typeof i.schema > "u" || !r.isSchemaElement(i.schema) || typeof ((p = i.schema) === null || p === void 0 ? void 0 : p.example) > "u" && typeof ((f = i.schema) === null || f === void 0 ? void 0 : f.examples) > "u")
            return;
          const d = s([...l, a, i]);
          if (!n.includes(d)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const u = i.examples.map((m) => N.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", u), n.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", u[0]), n.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [N(i.example)]), n.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", N(i.example)), n.append(d)));
          }
        }
      }
    }
  };
}, bB = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: s
  } = e;
  let n;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(i) {
          n = new ii(i, t, "header-examples");
        },
        leave() {
          n = void 0;
        }
      },
      HeaderElement: {
        leave(i, o, a, c, l) {
          var p, f;
          if (l.some(r.isComponentsElement) || typeof i.schema > "u" || !r.isSchemaElement(i.schema) || typeof ((p = i.schema) === null || p === void 0 ? void 0 : p.example) > "u" && typeof ((f = i.schema) === null || f === void 0 ? void 0 : f.examples) > "u")
            return;
          const d = s([...l, a, i]);
          if (!n.includes(d)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const u = i.examples.map((m) => N.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", u), n.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", u[0]), n.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [N(i.example)]), n.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", N(i.example)), n.append(d)));
          }
        }
      }
    }
  };
}, xB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Da || t(s) && e("callback", s) && r("object", s)), SB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof La || t(s) && e("components", s) && r("object", s)), wB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Va || t(s) && e("contact", s) && r("object", s)), OB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Ba || t(s) && e("example", s) && r("object", s)), EB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Ua || t(s) && e("externalDocumentation", s) && r("object", s)), $B = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Ja || t(s) && e("header", s) && r("object", s)), AB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Ha || t(s) && e("info", s) && r("object", s)), jb = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof _r || t(s) && e("jsonSchemaDialect", s) && r("string", s)), jB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof qa || t(s) && e("license", s) && r("object", s)), PB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof za || t(s) && e("link", s) && r("object", s)), TB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof np || t(s) && e("openapi", s) && r("string", s)), Pb = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: s
}) => (n) => n instanceof vr || t(n) && e("openApi3_1", n) && r("object", n) && s("api", n)), Tb = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Xn || t(s) && e("operation", s) && r("object", s)), _B = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Ka || t(s) && e("parameter", s) && r("object", s)), Cr = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof cr || t(s) && e("pathItem", s) && r("object", s)), CB = (t) => {
  if (!Cr(t) || !G(t.$ref))
    return !1;
  const e = E(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, RB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Wa || t(s) && e("paths", s) && r("object", s)), Hr = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof yr || t(s) && e("reference", s) && r("object", s)), IB = (t) => {
  if (!Hr(t) || !G(t.$ref))
    return !1;
  const e = E(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, FB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Ya || t(s) && e("requestBody", s) && r("object", s)), MB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Xa || t(s) && e("response", s) && r("object", s)), kB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Qa || t(s) && e("responses", s) && r("object", s)), lr = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Jr || t(s) && e("schema", s) && r("object", s)), cp = (t) => wn(t) && t.classes.includes("boolean-json-schema"), NB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof ec || t(s) && e("securityRequirement", s) && r("object", s)), DB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof tc || t(s) && e("securityScheme", s) && r("object", s)), LB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof rc || t(s) && e("server", s) && r("object", s)), VB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof sc || t(s) && e("serverVariable", s) && r("object", s)), BB = M(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (s) => s instanceof Ga || t(s) && e("mediaType", s) && r("object", s)), UB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: cp,
  isCallbackElement: xB,
  isComponentsElement: SB,
  isContactElement: wB,
  isExampleElement: OB,
  isExternalDocumentationElement: EB,
  isHeaderElement: $B,
  isInfoElement: AB,
  isJsonSchemaDialectElement: jb,
  isLicenseElement: jB,
  isLinkElement: PB,
  isMediaTypeElement: BB,
  isOpenApi3_1Element: Pb,
  isOpenapiElement: TB,
  isOperationElement: Tb,
  isParameterElement: _B,
  isPathItemElement: Cr,
  isPathItemElementExternal: CB,
  isPathsElement: RB,
  isReferenceElement: Hr,
  isReferenceElementExternal: IB,
  isRequestBodyElement: FB,
  isResponseElement: MB,
  isResponsesElement: kB,
  isSchemaElement: lr,
  isSecurityRequirementElement: NB,
  isSecuritySchemeElement: DB,
  isServerElement: LB,
  isServerVariableElement: VB
}, Symbol.toStringTag, { value: "Module" })), JB = (t) => {
  const e = t.reduce((r, s, n) => {
    if (vt(s)) {
      const i = String(E(s.key));
      r.push(i);
    } else if (qe(t[n - 2])) {
      const i = String(t[n - 2].content.indexOf(s));
      r.push(i);
    }
    return r;
  }, []);
  return Wg(e);
}, _b = () => {
  const t = Zt(ap);
  return {
    predicates: {
      ...UB,
      isElement: xe,
      isStringElement: G,
      isArrayElement: qe,
      isObjectElement: ce,
      isMemberElement: vt,
      isServersElement: ab,
      includesClasses: Oa,
      hasElementSourceMap: On
    },
    ancestorLineageToJSONPointer: JB,
    namespace: t
  };
};
class HB extends _(W, k) {
  constructor(e) {
    super(e), this.element = new vr(), this.specPath = J(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, W.prototype.ObjectElement.call(this, e);
  }
}
const qB = S.visitors.document.objects.Info.$visitor;
class zB extends qB {
  constructor(e) {
    super(e), this.element = new Ha();
  }
}
const GB = S.visitors.document.objects.Contact.$visitor;
class KB extends GB {
  constructor(e) {
    super(e), this.element = new Va();
  }
}
const WB = S.visitors.document.objects.License.$visitor;
class YB extends WB {
  constructor(e) {
    super(e), this.element = new qa();
  }
}
const XB = S.visitors.document.objects.Link.$visitor;
class QB extends XB {
  constructor(e) {
    super(e), this.element = new za();
  }
}
class ZB extends _(yt, k) {
  StringElement(e) {
    const r = new _r(E(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, ee;
  }
}
const eU = S.visitors.document.objects.Server.$visitor;
class tU extends eU {
  constructor(e) {
    super(e), this.element = new rc();
  }
}
const rU = S.visitors.document.objects.ServerVariable.$visitor;
class sU extends rU {
  constructor(e) {
    super(e), this.element = new sc();
  }
}
const nU = S.visitors.document.objects.MediaType.$visitor;
class iU extends nU {
  constructor(e) {
    super(e), this.element = new Ga();
  }
}
const oU = S.visitors.document.objects.SecurityRequirement.$visitor;
class aU extends oU {
  constructor(e) {
    super(e), this.element = new ec();
  }
}
const cU = S.visitors.document.objects.Components.$visitor;
class lU extends cU {
  constructor(e) {
    super(e), this.element = new La();
  }
}
const uU = S.visitors.document.objects.Tag.$visitor;
class fU extends uU {
  constructor(e) {
    super(e), this.element = new ip();
  }
}
const pU = S.visitors.document.objects.Reference.$visitor;
class hU extends pU {
  constructor(e) {
    super(e), this.element = new yr();
  }
}
const dU = S.visitors.document.objects.Parameter.$visitor;
class mU extends dU {
  constructor(e) {
    super(e), this.element = new Ka();
  }
}
const vU = S.visitors.document.objects.Header.$visitor;
class yU extends vU {
  constructor(e) {
    super(e), this.element = new Ja();
  }
}
class gU extends _(W, Ae, k) {
  constructor(e) {
    super(e), this.element = new Jr(), this.specPath = J(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = _r.default, this.passingOptionsNames.push("parent");
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = W.prototype.ObjectElement.call(this, e);
    return G(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
  BooleanElement(e) {
    return Pe.prototype.BooleanElement.call(this, e);
  }
  /**
   * This function depends on some external context, so we need to make sure this function
   * works even when no context is provided like when directly refracting generic Object Element
   * into Schema Element: `SchemaElement.refract(new ObjectElement({ type: 'object' });`
   */
  get defaultDialectIdentifier() {
    let e;
    return this.openApiSemanticElement !== void 0 && // @ts-ignore
    jb(this.openApiSemanticElement.jsonSchemaDialect) ? e = E(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && G(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = E(this.openApiGenericElement.get("jsonSchemaDialect")) : e = E(this.jsonSchemaDefaultDialect), e;
  }
  handleDialectIdentifier(e) {
    return Pe.prototype.handleDialectIdentifier.call(this, e);
  }
  handleSchemaIdentifier(e) {
    return Pe.prototype.handleSchemaIdentifier.call(this, e);
  }
}
class bU extends mb {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
let xU = class extends vb {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
};
class SU extends yb {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class wU extends gb {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class OU extends bb {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class EU extends Eb {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class $U extends xb {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class AU extends Sb {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
const jU = S.visitors.document.objects.Discriminator.$visitor;
class PU extends jU {
  constructor(e) {
    super(e), this.element = new ep(), this.canSupportSpecificationExtensions = !0;
  }
}
const TU = S.visitors.document.objects.XML.$visitor;
class _U extends TU {
  constructor(e) {
    super(e), this.element = new op();
  }
}
class CU extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new oo(), this.specPath = J(["document", "objects", "Schema"]);
  }
}
class RU extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new gu(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(Hr).forEach((s) => {
      s.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const IU = S.visitors.document.objects.Example.$visitor;
class FU extends IU {
  constructor(e) {
    super(e), this.element = new Ba();
  }
}
const MU = S.visitors.document.objects.ExternalDocumentation.$visitor;
class kU extends MU {
  constructor(e) {
    super(e), this.element = new Ua();
  }
}
const NU = S.visitors.document.objects.Encoding.$visitor;
class DU extends NU {
  constructor(e) {
    super(e), this.element = new tp();
  }
}
const LU = S.visitors.document.objects.Paths.$visitor;
class VU extends LU {
  constructor(e) {
    super(e), this.element = new Wa();
  }
}
const BU = S.visitors.document.objects.RequestBody.$visitor;
class UU extends BU {
  constructor(e) {
    super(e), this.element = new Ya();
  }
}
const Ld = S.visitors.document.objects.Callback.$visitor;
class JU extends Ld {
  constructor(e) {
    super(e), this.element = new Da(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Ld.prototype.ObjectElement.call(this, e);
    return this.element.filter(Hr).forEach((s) => {
      s.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const HU = S.visitors.document.objects.Response.$visitor;
class qU extends HU {
  constructor(e) {
    super(e), this.element = new Xa();
  }
}
const zU = S.visitors.document.objects.Responses.$visitor;
class GU extends zU {
  constructor(e) {
    super(e), this.element = new Qa();
  }
}
const KU = S.visitors.document.objects.Operation.$visitor;
class WU extends KU {
  constructor(e) {
    super(e), this.element = new Xn();
  }
}
const YU = S.visitors.document.objects.PathItem.$visitor;
class XU extends YU {
  constructor(e) {
    super(e), this.element = new cr();
  }
}
const QU = S.visitors.document.objects.SecurityScheme.$visitor;
class ZU extends QU {
  constructor(e) {
    super(e), this.element = new tc();
  }
}
const e4 = S.visitors.document.objects.OAuthFlows.$visitor;
class t4 extends e4 {
  constructor(e) {
    super(e), this.element = new sp();
  }
}
const r4 = S.visitors.document.objects.OAuthFlow.$visitor;
class s4 extends r4 {
  constructor(e) {
    super(e), this.element = new rp();
  }
}
class n4 extends _(Y, k) {
  constructor(e) {
    super(e), this.element = new bu(), this.specPath = (r) => he(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(Hr).forEach((s) => {
      s.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter(Cr).forEach((s, n) => {
      s.setMetaProperty("webhook-name", E(n));
    }), r;
  }
}
const {
  JSONSchema: i4,
  LinkDescription: o4
} = $b.visitors.document.objects, a4 = {
  visitors: {
    value: S.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: HB,
          fixedFields: {
            openapi: S.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: ZB,
            servers: S.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: n4,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: S.visitors.document.objects.OpenApi.fixedFields.security,
            tags: S.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: zB,
          fixedFields: {
            title: S.visitors.document.objects.Info.fixedFields.title,
            description: S.visitors.document.objects.Info.fixedFields.description,
            summary: {
              $ref: "#/visitors/value"
            },
            termsOfService: S.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: S.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: KB,
          fixedFields: {
            name: S.visitors.document.objects.Contact.fixedFields.name,
            url: S.visitors.document.objects.Contact.fixedFields.url,
            email: S.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: YB,
          fixedFields: {
            name: S.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: S.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: tU,
          fixedFields: {
            url: S.visitors.document.objects.Server.fixedFields.url,
            description: S.visitors.document.objects.Server.fixedFields.description,
            variables: S.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: sU,
          fixedFields: {
            enum: S.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: S.visitors.document.objects.ServerVariable.fixedFields.default,
            description: S.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: lU,
          fixedFields: {
            schemas: CU,
            responses: S.visitors.document.objects.Components.fixedFields.responses,
            parameters: S.visitors.document.objects.Components.fixedFields.parameters,
            examples: S.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: S.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: S.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: S.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: S.visitors.document.objects.Components.fixedFields.links,
            callbacks: S.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: RU
          }
        },
        Paths: {
          $visitor: VU
        },
        PathItem: {
          $visitor: XU,
          fixedFields: {
            $ref: S.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: S.visitors.document.objects.PathItem.fixedFields.summary,
            description: S.visitors.document.objects.PathItem.fixedFields.description,
            get: {
              $ref: "#/visitors/document/objects/Operation"
            },
            put: {
              $ref: "#/visitors/document/objects/Operation"
            },
            post: {
              $ref: "#/visitors/document/objects/Operation"
            },
            delete: {
              $ref: "#/visitors/document/objects/Operation"
            },
            options: {
              $ref: "#/visitors/document/objects/Operation"
            },
            head: {
              $ref: "#/visitors/document/objects/Operation"
            },
            patch: {
              $ref: "#/visitors/document/objects/Operation"
            },
            trace: {
              $ref: "#/visitors/document/objects/Operation"
            },
            servers: S.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: S.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: WU,
          fixedFields: {
            tags: S.visitors.document.objects.Operation.fixedFields.tags,
            summary: S.visitors.document.objects.Operation.fixedFields.summary,
            description: S.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: S.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: S.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: S.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: S.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: S.visitors.document.objects.Operation.fixedFields.deprecated,
            security: S.visitors.document.objects.Operation.fixedFields.security,
            servers: S.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: kU,
          fixedFields: {
            description: S.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: S.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: mU,
          fixedFields: {
            name: S.visitors.document.objects.Parameter.fixedFields.name,
            in: S.visitors.document.objects.Parameter.fixedFields.in,
            description: S.visitors.document.objects.Parameter.fixedFields.description,
            required: S.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: S.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: S.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: S.visitors.document.objects.Parameter.fixedFields.style,
            explode: S.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: S.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: S.visitors.document.objects.Parameter.fixedFields.example,
            examples: S.visitors.document.objects.Parameter.fixedFields.examples,
            content: S.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: UU,
          fixedFields: {
            description: S.visitors.document.objects.RequestBody.fixedFields.description,
            content: S.visitors.document.objects.RequestBody.fixedFields.content,
            required: S.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: iU,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: S.visitors.document.objects.MediaType.fixedFields.example,
            examples: S.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: S.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: DU,
          fixedFields: {
            contentType: S.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: S.visitors.document.objects.Encoding.fixedFields.headers,
            style: S.visitors.document.objects.Encoding.fixedFields.style,
            explode: S.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: S.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: GU,
          fixedFields: {
            default: S.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: qU,
          fixedFields: {
            description: S.visitors.document.objects.Response.fixedFields.description,
            headers: S.visitors.document.objects.Response.fixedFields.headers,
            content: S.visitors.document.objects.Response.fixedFields.content,
            links: S.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: JU
        },
        Example: {
          $visitor: FU,
          fixedFields: {
            summary: S.visitors.document.objects.Example.fixedFields.summary,
            description: S.visitors.document.objects.Example.fixedFields.description,
            value: S.visitors.document.objects.Example.fixedFields.value,
            externalValue: S.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: QB,
          fixedFields: {
            operationRef: S.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: S.visitors.document.objects.Link.fixedFields.operationId,
            parameters: S.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: S.visitors.document.objects.Link.fixedFields.requestBody,
            description: S.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: yU,
          fixedFields: {
            description: S.visitors.document.objects.Header.fixedFields.description,
            required: S.visitors.document.objects.Header.fixedFields.required,
            deprecated: S.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: S.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: S.visitors.document.objects.Header.fixedFields.style,
            explode: S.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: S.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: S.visitors.document.objects.Header.fixedFields.example,
            examples: S.visitors.document.objects.Header.fixedFields.examples,
            content: S.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: fU,
          fixedFields: {
            name: S.visitors.document.objects.Tag.fixedFields.name,
            description: S.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: hU,
          fixedFields: {
            $ref: S.visitors.document.objects.Reference.fixedFields.$ref,
            summary: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        LinkDescription: {
          ...o4
        },
        Schema: {
          $visitor: gU,
          fixedFields: {
            ...i4.fixedFields,
            // core vocabulary
            $defs: bU,
            // applicator vocabulary
            allOf: xU,
            anyOf: SU,
            oneOf: wU,
            not: {
              $ref: "#/visitors/document/objects/Schema"
            },
            if: {
              $ref: "#/visitors/document/objects/Schema"
            },
            then: {
              $ref: "#/visitors/document/objects/Schema"
            },
            else: {
              $ref: "#/visitors/document/objects/Schema"
            },
            dependentSchemas: OU,
            prefixItems: EU,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: $U,
            patternProperties: AU,
            additionalProperties: {
              $ref: "#/visitors/document/objects/Schema"
            },
            propertyNames: {
              $ref: "#/visitors/document/objects/Schema"
            },
            // unevaluated Locations vocabulary
            unevaluatedItems: {
              $ref: "#/visitors/document/objects/Schema"
            },
            unevaluatedProperties: {
              $ref: "#/visitors/document/objects/Schema"
            },
            // validation vocabulary
            // contents of String-Encoded Data vocabulary
            contentSchema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            // OAS base vocabulary
            discriminator: {
              $ref: "#/visitors/document/objects/Discriminator"
            },
            xml: {
              $ref: "#/visitors/document/objects/XML"
            },
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            example: {
              $ref: "#/visitors/value"
            }
          }
        },
        Discriminator: {
          $visitor: PU,
          fixedFields: {
            propertyName: S.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: S.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: _U,
          fixedFields: {
            name: S.visitors.document.objects.XML.fixedFields.name,
            namespace: S.visitors.document.objects.XML.fixedFields.namespace,
            prefix: S.visitors.document.objects.XML.fixedFields.prefix,
            attribute: S.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: S.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: ZU,
          fixedFields: {
            type: S.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: S.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: S.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: S.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: S.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: S.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: S.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: t4,
          fixedFields: {
            implicit: {
              $ref: "#/visitors/document/objects/OAuthFlow"
            },
            password: {
              $ref: "#/visitors/document/objects/OAuthFlow"
            },
            clientCredentials: {
              $ref: "#/visitors/document/objects/OAuthFlow"
            },
            authorizationCode: {
              $ref: "#/visitors/document/objects/OAuthFlow"
            }
          }
        },
        OAuthFlow: {
          $visitor: s4,
          fixedFields: {
            authorizationUrl: S.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: S.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: S.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: S.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: aU
        }
      },
      extension: {
        $visitor: S.visitors.document.extension.$visitor
      }
    }
  }
}, c4 = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const s = Ur(t), n = dr(a4), i = Ce(e, n), o = new i({
    specObj: n
  });
  return $e(s, o), Ct(o.element, r, {
    toolboxCreator: _b,
    visitorOptions: {
      keyMap: Et,
      nodeTypeGetter: ft
    }
  });
}, re = (t) => (e, r = {}) => c4(e, {
  specPath: t,
  ...r
});
Da.refract = re(["visitors", "document", "objects", "Callback", "$visitor"]);
La.refract = re(["visitors", "document", "objects", "Components", "$visitor"]);
Va.refract = re(["visitors", "document", "objects", "Contact", "$visitor"]);
Ba.refract = re(["visitors", "document", "objects", "Example", "$visitor"]);
ep.refract = re(["visitors", "document", "objects", "Discriminator", "$visitor"]);
tp.refract = re(["visitors", "document", "objects", "Encoding", "$visitor"]);
Ua.refract = re(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Ja.refract = re(["visitors", "document", "objects", "Header", "$visitor"]);
Ha.refract = re(["visitors", "document", "objects", "Info", "$visitor"]);
_r.refract = re(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
qa.refract = re(["visitors", "document", "objects", "License", "$visitor"]);
za.refract = re(["visitors", "document", "objects", "Link", "$visitor"]);
Ga.refract = re(["visitors", "document", "objects", "MediaType", "$visitor"]);
rp.refract = re(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
sp.refract = re(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
np.refract = re(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
vr.refract = re(["visitors", "document", "objects", "OpenApi", "$visitor"]);
Xn.refract = re(["visitors", "document", "objects", "Operation", "$visitor"]);
Ka.refract = re(["visitors", "document", "objects", "Parameter", "$visitor"]);
cr.refract = re(["visitors", "document", "objects", "PathItem", "$visitor"]);
Wa.refract = re(["visitors", "document", "objects", "Paths", "$visitor"]);
yr.refract = re(["visitors", "document", "objects", "Reference", "$visitor"]);
Ya.refract = re(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Xa.refract = re(["visitors", "document", "objects", "Response", "$visitor"]);
Qa.refract = re(["visitors", "document", "objects", "Responses", "$visitor"]);
Jr.refract = re(["visitors", "document", "objects", "Schema", "$visitor"]);
ec.refract = re(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
tc.refract = re(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
rc.refract = re(["visitors", "document", "objects", "Server", "$visitor"]);
sc.refract = re(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
ip.refract = re(["visitors", "document", "objects", "Tag", "$visitor"]);
op.refract = re(["visitors", "document", "objects", "XML", "$visitor"]);
class l4 extends $n {
  constructor(e) {
    super({
      ...e ?? {},
      name: "binary"
    });
  }
  canParse(e) {
    return this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension);
  }
  // eslint-disable-next-line class-methods-use-this
  parse(e) {
    try {
      const r = unescape(encodeURIComponent(e.toString())), s = btoa(r), n = new ht();
      if (s.length !== 0) {
        const i = new Bt(s);
        i.classes.push("result"), n.push(i);
      }
      return n;
    } catch (r) {
      throw new Jt(`Error parsing "${e.uri}"`, {
        cause: r
      });
    }
  }
}
class u4 extends zN {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canResolve(e, r) {
    const s = r.dereference.strategies.find((n) => n.name === "openapi-3-1");
    return s === void 0 ? !1 : s.canDereference(e, r);
  }
  async resolve(e, r) {
    const s = r.dereference.strategies.find((o) => o.name === "openapi-3-1");
    if (s === void 0)
      throw new Ag('"openapi-3-1" dereference strategy is not available.');
    const n = new vs(), i = Ay(r, {
      resolve: {
        internal: !1
      },
      dereference: {
        refSet: n
      }
    });
    return await s.dereference(e, i), n;
  }
}
const {
  AbortController: f4,
  AbortSignal: p4
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = f4);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = p4);
class Cb extends qN {
  constructor({
    swaggerHTTPClient: r = us,
    swaggerHTTPClientConfig: s = {},
    ...n
  } = {}) {
    super({
      ...n,
      name: "http-swagger-client"
    });
    x(this, "swaggerHTTPClient", us);
    x(this, "swaggerHTTPClientConfig");
    this.swaggerHTTPClient = r, this.swaggerHTTPClientConfig = s;
  }
  getHttpClient() {
    return this.swaggerHTTPClient;
  }
  async read(r) {
    const s = this.getHttpClient(), n = new AbortController(), {
      signal: i
    } = n, o = setTimeout(() => {
      n.abort();
    }, this.timeout), a = this.getHttpClient().withCredentials || this.withCredentials ? "include" : "same-origin", c = this.redirects === 0 ? "error" : "follow", l = this.redirects > 0 ? this.redirects : void 0;
    try {
      return (await s({
        url: r.uri,
        signal: i,
        userFetch: async (f, d) => {
          let u = await fetch(f, d);
          try {
            u.headers.delete("Content-Type");
          } catch {
            u = new Response(u.body, {
              ...u,
              headers: new Headers(u.headers)
            }), u.headers.delete("Content-Type");
          }
          return u;
        },
        credentials: a,
        redirect: c,
        follow: l,
        ...this.swaggerHTTPClientConfig
      })).text.arrayBuffer();
    } catch (p) {
      throw new jy(`Error downloading "${r.uri}"`, {
        cause: p
      });
    } finally {
      clearTimeout(o);
    }
  }
}
class Rb extends $n {
  constructor(e = {}) {
    super({
      name: "json-swagger-client",
      mediaTypes: ["application/json"],
      ...e
    });
  }
  async canParse(e) {
    const r = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), s = this.mediaTypes.includes(e.mediaType);
    if (!r) return !1;
    if (s) return !0;
    if (!s)
      try {
        return JSON.parse(e.toString()), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new Jt("json-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new ht(), s = e.toString();
    if (this.allowEmpty && s.trim() === "")
      return r;
    try {
      const n = $g(JSON.parse(s));
      return n.classes.push("result"), r.push(n), r;
    } catch (n) {
      throw new Jt(`Error parsing "${e.uri}"`, {
        cause: n
      });
    }
  }
}
class Ib extends $n {
  constructor(e = {}) {
    super({
      name: "yaml-1-2-swagger-client",
      mediaTypes: ["text/yaml", "application/yaml"],
      ...e
    });
  }
  async canParse(e) {
    const r = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), s = this.mediaTypes.includes(e.mediaType);
    if (!r) return !1;
    if (s) return !0;
    if (!s)
      try {
        return ls.load(e.toString(), {
          schema: Ii
        }), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new Jt("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new ht(), s = e.toString();
    try {
      const n = ls.load(s, {
        schema: Ii
      });
      if (this.allowEmpty && typeof n > "u")
        return r;
      const i = $g(n);
      return i.classes.push("result"), r.push(i), r;
    } catch (n) {
      throw new Jt(`Error parsing "${e.uri}"`, {
        cause: n
      });
    }
  }
}
class Fb extends $n {
  constructor(r = {}) {
    super({
      name: "openapi-json-3-1-swagger-client",
      mediaTypes: new Wf(...gs.filterByFormat("generic"), ...gs.filterByFormat("json")),
      ...r
    });
    x(this, "detectionRegExp", /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/);
  }
  async canParse(r) {
    const s = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(r.extension), n = this.mediaTypes.includes(r.mediaType);
    if (!s) return !1;
    if (n) return !0;
    if (!n)
      try {
        const i = r.toString();
        return JSON.parse(i), this.detectionRegExp.test(i);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(r) {
    if (this.sourceMap)
      throw new Jt("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const s = new ht(), n = r.toString();
    if (this.allowEmpty && n.trim() === "")
      return s;
    try {
      const i = JSON.parse(n), o = vr.refract(i, this.refractorOpts);
      return o.classes.push("result"), s.push(o), s;
    } catch (i) {
      throw new Jt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
class Mb extends $n {
  constructor(r = {}) {
    super({
      name: "openapi-yaml-3-1-swagger-client",
      mediaTypes: new Wf(...gs.filterByFormat("generic"), ...gs.filterByFormat("yaml")),
      ...r
    });
    x(this, "detectionRegExp", /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m);
  }
  async canParse(r) {
    const s = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(r.extension), n = this.mediaTypes.includes(r.mediaType);
    if (!s) return !1;
    if (n) return !0;
    if (!n)
      try {
        const i = r.toString();
        return ls.load(i), this.detectionRegExp.test(i);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(r) {
    if (this.sourceMap)
      throw new Jt("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const s = new ht(), n = r.toString();
    try {
      const i = ls.load(n, {
        schema: Ii
      });
      if (this.allowEmpty && typeof i > "u")
        return s;
      const o = vr.refract(i, this.refractorOpts);
      return o.classes.push("result"), s.push(o), s;
    } catch (i) {
      throw new Jt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
const nc = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), xs = (t) => {
  const e = jf(t);
  return Of("#", e);
}, h4 = (t) => {
  if (!nc(t))
    throw new YN(t);
  return t;
}, lp = (t, e) => {
  const r = h4(t), s = Sg((n) => lr(n) && E(n.$anchor) === r, e);
  if (hr(s))
    throw new KN(`Evaluation failed on token: "${r}"`);
  return s;
}, kb = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = jf(E(e.$ref)), s = E(e.meta.get("ancestorsSchemaIdentifiers"));
  return `${Nr((i, o) => _e(i, xn(le(o))), t, [...s, E(e.$ref)])}${r === "#" ? "" : r}`;
}, d4 = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = E(e.meta.get("ancestorsSchemaIdentifiers"));
  return Nr((s, n) => _e(s, xn(le(n))), t, [...r, E(e.$id)]);
}, zs = (t) => {
  if (zs.cache.has(t))
    return zs.cache.get(t);
  const e = Jr.refract(t);
  return zs.cache.set(t, e), e;
};
zs.cache = /* @__PURE__ */ new WeakMap();
const Le = (t) => jr(t) ? zs(t) : t, ic = (t, e) => {
  const {
    cache: r
  } = ic, s = le(t), n = (c) => lr(c) && typeof c.$id < "u";
  if (!r.has(e)) {
    const c = TN(n, e);
    r.set(e, Array.from(c));
  }
  const i = r.get(e).find((c) => d4(s, c) === s);
  if (hr(i))
    throw new Vf(`Evaluation failed on URI: "${t}"`);
  let o, a;
  return nc(xs(t)) ? (o = lp, a = xs(t)) : (o = ut, a = rt(t)), o(a, i);
};
ic.cache = /* @__PURE__ */ new WeakMap();
const Wc = $e[Symbol.for("nodejs.util.promisify.custom")], Ie = new Df(), xt = (t, e, r, s) => {
  vt(s) ? s.value = t : Array.isArray(s) && (s[r] = t);
};
class as {
  constructor({
    reference: e,
    namespace: r,
    options: s,
    indirections: n = [],
    ancestors: i = new qc(),
    refractCache: o = /* @__PURE__ */ new Map()
  }) {
    x(this, "indirections");
    x(this, "namespace");
    x(this, "reference");
    x(this, "options");
    x(this, "ancestors");
    x(this, "refractCache");
    this.indirections = n, this.namespace = r, this.reference = e, this.options = s, this.ancestors = new qc(...i), this.refractCache = o;
  }
  toBaseURI(e) {
    return _e(this.reference.uri, xn(le(e)));
  }
  async toReference(e) {
    if (this.reference.depth >= this.options.resolve.maxDepth)
      throw new XN(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    const r = this.toBaseURI(e), {
      refSet: s
    } = this.reference;
    if (s.has(r))
      return s.find(uy(r, "uri"));
    const n = await $_(lt(r), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: "text/plain"
      }
    }), i = new Dt({
      uri: r,
      value: N(n),
      depth: this.reference.depth + 1
    });
    if (s.add(i), this.options.dereference.immutable) {
      const o = new Dt({
        uri: `immutable://${r}`,
        value: n,
        depth: this.reference.depth + 1
      });
      s.add(o);
    }
    return i;
  }
  toAncestorLineage(e) {
    const r = new Set(e.filter(xe));
    return [new qc(...this.ancestors, r), r];
  }
  async ReferenceElement(e, r, s, n, i, o) {
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, s]), l = this.toBaseURI(E(e.$ref)), p = le(this.reference.uri) === l, f = !p;
    if (!this.options.resolve.internal && p || !this.options.resolve.external && f)
      return !1;
    const d = await this.toReference(E(e.$ref)), u = _e(l, E(e.$ref));
    this.indirections.push(e);
    const m = rt(u);
    let h = ut(m, d.value.result);
    if (h.id = Ie.identify(h), jr(h)) {
      const I = E(e.meta.get("referenced-element")), $ = `${I}-${E(Ie.identify(h))}`;
      this.refractCache.has($) ? h = this.refractCache.get($) : he(h) ? (h = yr.refract(h), h.setMetaProperty("referenced-element", I), this.refractCache.set($, h)) : (h = this.namespace.getElementClass(I).refract(h), this.refractCache.set($, h));
    }
    if (e === h)
      throw new ye("Recursive Reference Object detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new is(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(h)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var y, g;
        const I = new Nt(h.id, {
          type: "reference",
          uri: d.uri,
          $ref: E(e.$ref)
        }), C = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)(I);
        return o.replaceWith(C, xt), s ? !1 : C;
      }
    }
    const v = le(d.refSet.rootRef.uri) !== d.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
    if ((f || v || Hr(h) || b) && !a.includesCycle(h)) {
      c.add(e);
      const I = new as({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      h = await Wc(h, I, {
        keyMap: Et,
        nodeTypeGetter: ft
      }), c.delete(e);
    }
    this.indirections.pop();
    const O = Je(h);
    return O.setMetaProperty("id", Ie.generateId()), O.setMetaProperty("ref-fields", {
      $ref: E(e.$ref),
      // @ts-ignore
      description: E(e.description),
      // @ts-ignore
      summary: E(e.summary)
    }), O.setMetaProperty("ref-origin", d.uri), O.setMetaProperty("ref-referencing-element-id", N(Ie.identify(e))), ce(h) && ce(O) && (e.hasKey("description") && "description" in h && (O.remove("description"), O.set("description", e.get("description"))), e.hasKey("summary") && "summary" in h && (O.remove("summary"), O.set("summary", e.get("summary")))), o.replaceWith(O, xt), s ? !1 : O;
  }
  async PathItemElement(e, r, s, n, i, o) {
    if (!G(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, s]), l = this.toBaseURI(E(e.$ref)), p = le(this.reference.uri) === l, f = !p;
    if (!this.options.resolve.internal && p || !this.options.resolve.external && f)
      return;
    const d = await this.toReference(E(e.$ref)), u = _e(l, E(e.$ref));
    this.indirections.push(e);
    const m = rt(u);
    let h = ut(m, d.value.result);
    if (h.id = Ie.identify(h), jr(h)) {
      const O = `path-item-${E(Ie.identify(h))}`;
      this.refractCache.has(O) ? h = this.refractCache.get(O) : (h = cr.refract(h), this.refractCache.set(O, h));
    }
    if (e === h)
      throw new ye("Recursive Path Item Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new is(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(h)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var y, g;
        const O = new Nt(h.id, {
          type: "path-item",
          uri: d.uri,
          $ref: E(e.$ref)
        }), $ = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)(O);
        return o.replaceWith($, xt), s ? !1 : $;
      }
    }
    const v = le(d.refSet.rootRef.uri) !== d.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
    if ((f || v || Cr(h) && G(h.$ref) || b) && !a.includesCycle(h)) {
      c.add(e);
      const O = new as({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      h = await Wc(h, O, {
        keyMap: Et,
        nodeTypeGetter: ft
      }), c.delete(e);
    }
    if (this.indirections.pop(), Cr(h)) {
      const O = new cr([...h.content], N(h.meta), N(h.attributes));
      O.setMetaProperty("id", Ie.generateId()), e.forEach((I, $, C) => {
        O.remove(E($)), O.content.push(C);
      }), O.remove("$ref"), O.setMetaProperty("ref-fields", {
        $ref: E(e.$ref)
      }), O.setMetaProperty("ref-origin", d.uri), O.setMetaProperty("ref-referencing-element-id", N(Ie.identify(e))), h = O;
    }
    return o.replaceWith(h, xt), s ? void 0 : h;
  }
  async LinkElement(e, r, s, n, i, o) {
    if (!G(e.operationRef) && !G(e.operationId))
      return;
    if (G(e.operationRef) && G(e.operationId))
      throw new ye("LinkElement operationRef and operationId fields are mutually exclusive.");
    let a;
    if (G(e.operationRef)) {
      var c;
      const p = rt(E(e.operationRef)), f = this.toBaseURI(E(e.operationRef)), d = le(this.reference.uri) === f, u = !d;
      if (!this.options.resolve.internal && d || !this.options.resolve.external && u)
        return;
      const m = await this.toReference(E(e.operationRef));
      if (a = ut(p, m.value.result), jr(a)) {
        const y = `operation-${E(Ie.identify(a))}`;
        this.refractCache.has(y) ? a = this.refractCache.get(y) : (a = Xn.refract(a), this.refractCache.set(y, a));
      }
      a = Je(a), a.setMetaProperty("ref-origin", m.uri);
      const h = Je(e);
      return (c = h.operationRef) === null || c === void 0 || c.meta.set("operation", a), o.replaceWith(h, xt), s ? void 0 : h;
    }
    if (G(e.operationId)) {
      var l;
      const p = E(e.operationId), f = await this.toReference(lt(this.reference.uri));
      if (a = Sg((u) => Tb(u) && xe(u.operationId) && u.operationId.equals(p), f.value.result), hr(a))
        throw new ye(`OperationElement(operationId=${p}) not found.`);
      const d = Je(e);
      return (l = d.operationId) === null || l === void 0 || l.meta.set("operation", a), o.replaceWith(d, xt), s ? void 0 : d;
    }
  }
  async ExampleElement(e, r, s, n, i, o) {
    if (!G(e.externalValue))
      return;
    if (e.hasKey("value") && G(e.externalValue))
      throw new ye("ExampleElement value and externalValue fields are mutually exclusive.");
    const a = this.toBaseURI(E(e.externalValue)), c = le(this.reference.uri) === a, l = !c;
    if (!this.options.resolve.internal && c || !this.options.resolve.external && l)
      return;
    const p = await this.toReference(E(e.externalValue)), f = Je(p.value.result);
    f.setMetaProperty("ref-origin", p.uri);
    const d = Je(e);
    return d.value = f, o.replaceWith(d, xt), s ? void 0 : d;
  }
  async SchemaElement(e, r, s, n, i, o) {
    if (!G(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, s]);
    let l = await this.toReference(lt(this.reference.uri)), {
      uri: p
    } = l;
    const f = kb(p, e), d = le(f), u = new nn({
      uri: d
    }), m = bT((C) => C.canRead(u), this.options.resolve.resolvers), h = !m;
    let y = le(this.reference.uri) === f, g = !y;
    this.indirections.push(e);
    let v;
    try {
      if (m || h) {
        p = this.toBaseURI(f);
        const C = f, D = Le(l.value.result);
        if (v = ic(C, D), v = Le(v), v.id = Ie.identify(v), !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
      } else {
        if (p = this.toBaseURI(f), y = le(this.reference.uri) === p, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
        l = await this.toReference(lt(f));
        const C = rt(f), D = Le(l.value.result);
        v = ut(C, D), v = Le(v), v.id = Ie.identify(v);
      }
    } catch (C) {
      if (h && C instanceof Vf)
        if (nc(xs(f))) {
          if (y = le(this.reference.uri) === p, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          l = await this.toReference(lt(f));
          const D = xs(f), A = Le(l.value.result);
          v = lp(D, A), v = Le(v), v.id = Ie.identify(v);
        } else {
          if (p = this.toBaseURI(f), y = le(this.reference.uri) === p, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          l = await this.toReference(lt(f));
          const D = rt(f), A = Le(l.value.result);
          v = ut(D, A), v = Le(v), v.id = Ie.identify(v);
        }
      else
        throw C;
    }
    if (e === v)
      throw new ye("Recursive Schema Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new is(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(v)) {
      if (l.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var b, O;
        const C = new Nt(v.id, {
          type: "json-schema",
          uri: l.uri,
          $ref: E(e.$ref)
        }), A = ((b = (O = this.options.dereference.strategyOpts["openapi-3-1"]) === null || O === void 0 ? void 0 : O.circularReplacer) !== null && b !== void 0 ? b : this.options.dereference.circularReplacer)(C);
        return o.replaceWith(A, xt), s ? !1 : A;
      }
    }
    const I = le(l.refSet.rootRef.uri) !== l.uri, $ = ["error", "replace"].includes(this.options.dereference.circular);
    if ((g || I || lr(v) && G(v.$ref) || $) && !a.includesCycle(v)) {
      c.add(e);
      const C = new as({
        reference: l,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      v = await Wc(v, C, {
        keyMap: Et,
        nodeTypeGetter: ft
      }), c.delete(e);
    }
    if (this.indirections.pop(), cp(v)) {
      const C = N(v);
      return C.setMetaProperty("id", Ie.generateId()), C.setMetaProperty("ref-fields", {
        $ref: E(e.$ref)
      }), C.setMetaProperty("ref-origin", l.uri), C.setMetaProperty("ref-referencing-element-id", N(Ie.identify(e))), o.replaceWith(C, xt), s ? !1 : C;
    }
    if (lr(v)) {
      const C = new Jr([...v.content], N(v.meta), N(v.attributes));
      C.setMetaProperty("id", Ie.generateId()), e.forEach((D, A, q) => {
        C.remove(E(A)), C.content.push(q);
      }), C.remove("$ref"), C.setMetaProperty("ref-fields", {
        $ref: E(e.$ref)
      }), C.setMetaProperty("ref-origin", l.uri), C.setMetaProperty("ref-referencing-element-id", N(Ie.identify(e))), v = C;
    }
    return o.replaceWith(v, xt), s ? void 0 : v;
  }
}
const m4 = $e[Symbol.for("nodejs.util.promisify.custom")];
class v4 extends GN {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canDereference(e) {
    var r;
    return e.mediaType !== "text/plain" ? gs.includes(e.mediaType) : Pb((r = e.parseResult) === null || r === void 0 ? void 0 : r.result);
  }
  async dereference(e, r) {
    var s;
    const n = Zt(ap), i = (s = r.dereference.refSet) !== null && s !== void 0 ? s : new vs(), o = new vs();
    let a = i, c;
    i.has(e.uri) ? c = i.find(uy(e.uri, "uri")) : (c = new Dt({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((f) => new Dt({
      ...f,
      value: N(f.value)
    })).forEach((f) => o.add(f)), c = o.find((f) => f.uri === e.uri), a = o);
    const l = new as({
      reference: c,
      namespace: n,
      options: r
    }), p = await m4(a.rootRef.value, l, {
      keyMap: Et,
      nodeTypeGetter: ft
    });
    return r.dereference.immutable && o.refs.filter((f) => f.uri.startsWith("immutable://")).map((f) => new Dt({
      ...f,
      uri: f.uri.replace(/^immutable:\/\//, "")
    })).forEach((f) => i.add(f)), r.dereference.refSet === null && i.clean(), o.clean(), p;
  }
}
const y4 = (t) => t.slice(2), at = (t) => {
  const e = y4(t);
  return e.reduce((r, s, n) => {
    if (vt(s)) {
      const i = String(E(s.key));
      r.push(i);
    } else if (qe(e[n - 2])) {
      const i = e[n - 2].content.indexOf(s);
      r.push(i);
    }
    return r;
  }, []);
};
class g4 {
  constructor({
    modelPropertyMacro: e,
    options: r
  }) {
    x(this, "modelPropertyMacro");
    x(this, "options");
    x(this, "SchemaElement", {
      leave: (e, r, s, n, i) => {
        typeof e.properties > "u" || ce(e.properties) && e.properties.forEach((o) => {
          if (ce(o))
            try {
              const l = this.modelPropertyMacro(E(o));
              o.set("default", l);
            } catch (l) {
              var a, c;
              const p = new Error(l, {
                cause: l
              });
              p.fullPath = [...at([...i, s, e]), "properties"], (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, p);
            }
        });
      }
    });
    this.modelPropertyMacro = e, this.options = r;
  }
}
class b4 {
  constructor({
    options: e
  }) {
    x(this, "options");
    x(this, "SchemaElement", {
      leave(e, r, s, n, i) {
        if (typeof e.allOf > "u") return;
        if (!qe(e.allOf)) {
          var o, a;
          const f = new TypeError("allOf must be an array");
          f.fullPath = [...at([...i, s, e]), "allOf"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, f);
          return;
        }
        if (e.allOf.isEmpty) {
          e.remove("allOf");
          return;
        }
        if (!e.allOf.content.every(lr)) {
          var l, p;
          const f = new TypeError("Elements in allOf must be objects");
          f.fullPath = [...at([...i, s, e]), "allOf"], (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (p = l.push) === null || p === void 0 || p.call(l, f);
          return;
        }
        for (; e.hasKey("allOf"); ) {
          const {
            allOf: f
          } = e;
          e.remove("allOf");
          const d = $t.all([...f.content, e]);
          if (e.hasKey("$$ref") || d.remove("$$ref"), e.hasKey("example")) {
            const u = d.getMember("example");
            u && (u.value = e.get("example"));
          }
          if (e.hasKey("examples")) {
            const u = d.getMember("examples");
            u && (u.value = e.get("examples"));
          }
          e.content = d.content;
        }
      }
    });
    this.options = e;
  }
}
var Or;
class x4 {
  constructor({
    parameterMacro: e,
    options: r
  }) {
    x(this, "parameterMacro");
    x(this, "options");
    hp(this, Or);
    x(this, "OperationElement", {
      enter: (e) => {
        uc(this, Or, e);
      },
      leave: () => {
        uc(this, Or, void 0);
      }
    });
    x(this, "ParameterElement", {
      leave: (e, r, s, n, i) => {
        const o = lc(this, Or) ? E(lc(this, Or)) : null, a = E(e);
        try {
          const p = this.parameterMacro(o, a);
          e.set("default", p);
        } catch (p) {
          var c, l;
          const f = new Error(p, {
            cause: p
          });
          f.fullPath = at([...i, s]), (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (l = c.push) === null || l === void 0 || l.call(c, f);
        }
      }
    });
    this.parameterMacro = e, this.options = r;
  }
}
Or = new WeakMap();
const vi = (t) => {
  if (t.cause == null) return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
};
class S4 extends pt {
}
const {
  wrapError: Yc
} = Uf, Xc = $e[Symbol.for("nodejs.util.promisify.custom")], tt = new Df(), gr = (t, e, r, s) => {
  vt(s) ? s.value = t : Array.isArray(s) && (s[r] = t);
};
class Gs extends as {
  constructor({
    allowMetaPatches: r = !0,
    useCircularStructures: s = !1,
    basePath: n = null,
    ...i
  }) {
    super(i);
    x(this, "useCircularStructures");
    x(this, "allowMetaPatches");
    x(this, "basePath");
    this.allowMetaPatches = r, this.useCircularStructures = s, this.basePath = n;
  }
  async ReferenceElement(r, s, n, i, o, a) {
    try {
      if (this.indirections.includes(r))
        return !1;
      const [m, h] = this.toAncestorLineage([...o, n]), y = this.toBaseURI(E(r.$ref)), g = le(this.reference.uri) === y, v = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && v)
        return !1;
      const b = await this.toReference(E(r.$ref)), O = _e(y, E(r.$ref));
      this.indirections.push(r);
      const I = rt(O);
      let $ = ut(I, b.value.result);
      if ($.id = tt.identify($), jr($)) {
        const q = E(r.meta.get("referenced-element")), w = `${q}-${E(tt.identify($))}`;
        this.refractCache.has(w) ? $ = this.refractCache.get(w) : he($) ? ($ = yr.refract($), $.setMetaProperty("referenced-element", q), this.refractCache.set(w, $)) : ($ = this.namespace.getElementClass(q).refract($), this.refractCache.set(w, $));
      }
      if (r === $)
        throw new ye("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new is(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes($)) {
        if (b.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const q = new Nt($.id, {
            type: "reference",
            uri: b.uri,
            $ref: E(r.$ref),
            baseURI: O,
            referencingElement: r
          }), j = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(q);
          return a.replaceWith(q, gr), n ? !1 : j;
        }
      }
      const C = le(b.refSet.rootRef.uri) !== b.uri, D = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || C || Hr($) || D) && !m.includesCycle($)) {
        var p;
        h.add(r);
        const q = new Gs({
          reference: b,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (p = this.basePath) !== null && p !== void 0 ? p : [...at([...o, n, r]), "$ref"]
        });
        $ = await Xc($, q, {
          keyMap: Et,
          nodeTypeGetter: ft
        }), h.delete(r);
      }
      this.indirections.pop();
      const A = Je($);
      if (A.setMetaProperty("ref-fields", {
        $ref: E(r.$ref),
        description: E(r.description),
        summary: E(r.summary)
      }), A.setMetaProperty("ref-origin", b.uri), A.setMetaProperty("ref-referencing-element-id", N(tt.identify(r))), ce($) && (r.hasKey("description") && "description" in $ && (A.remove("description"), A.set("description", r.get("description"))), r.hasKey("summary") && "summary" in $ && (A.remove("summary"), A.set("summary", r.get("summary")))), this.allowMetaPatches && ce(A) && !A.hasKey("$$ref")) {
        const q = _e(y, O);
        A.set("$$ref", q);
      }
      return a.replaceWith(A, gr), n ? !1 : A;
    } catch (m) {
      var f, d, u;
      const h = vi(m), y = Yc(h, {
        baseDoc: this.reference.uri,
        $ref: E(r.$ref),
        pointer: rt(E(r.$ref)),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...at([...o, n, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (u = d.push) === null || u === void 0 || u.call(d, y);
      return;
    }
  }
  async PathItemElement(r, s, n, i, o, a) {
    try {
      if (!G(r.$ref))
        return;
      if (this.indirections.includes(r) || Oa(["cycle"], r.$ref))
        return !1;
      const [m, h] = this.toAncestorLineage([...o, n]), y = this.toBaseURI(E(r.$ref)), g = le(this.reference.uri) === y, v = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && v)
        return;
      const b = await this.toReference(E(r.$ref)), O = _e(y, E(r.$ref));
      this.indirections.push(r);
      const I = rt(O);
      let $ = ut(I, b.value.result);
      if ($.id = tt.identify($), jr($)) {
        const A = `path-item-${E(tt.identify($))}`;
        this.refractCache.has(A) ? $ = this.refractCache.get(A) : ($ = cr.refract($), this.refractCache.set(A, $));
      }
      if (r === $)
        throw new ye("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new is(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes($)) {
        if (b.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const A = new Nt($.id, {
            type: "path-item",
            uri: b.uri,
            $ref: E(r.$ref),
            baseURI: O,
            referencingElement: r
          }), w = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(A);
          return a.replaceWith(A, gr), n ? !1 : w;
        }
      }
      const C = le(b.refSet.rootRef.uri) !== b.uri, D = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || C || Cr($) && G($.$ref) || D) && !m.includesCycle($)) {
        var p;
        h.add(r);
        const A = new Gs({
          reference: b,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (p = this.basePath) !== null && p !== void 0 ? p : [...at([...o, n, r]), "$ref"]
        });
        $ = await Xc($, A, {
          keyMap: Et,
          nodeTypeGetter: ft
        }), h.delete(r);
      }
      if (this.indirections.pop(), Cr($)) {
        const A = new cr([...$.content], N($.meta), N($.attributes));
        if (r.forEach((q, w, j) => {
          A.remove(E(w)), A.content.push(j);
        }), A.remove("$ref"), A.setMetaProperty("ref-fields", {
          $ref: E(r.$ref)
        }), A.setMetaProperty("ref-origin", b.uri), A.setMetaProperty("ref-referencing-element-id", N(tt.identify(r))), this.allowMetaPatches && typeof A.get("$$ref") > "u") {
          const q = _e(y, O);
          A.set("$$ref", q);
        }
        $ = A;
      }
      return a.replaceWith($, gr), n ? void 0 : $;
    } catch (m) {
      var f, d, u;
      const h = vi(m), y = Yc(h, {
        baseDoc: this.reference.uri,
        $ref: E(r.$ref),
        pointer: rt(E(r.$ref)),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...at([...o, n, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (u = d.push) === null || u === void 0 || u.call(d, y);
      return;
    }
  }
  async SchemaElement(r, s, n, i, o, a) {
    try {
      if (!G(r.$ref))
        return;
      if (this.indirections.includes(r))
        return !1;
      const [m, h] = this.toAncestorLineage([...o, n]);
      let y = await this.toReference(lt(this.reference.uri)), {
        uri: g
      } = y;
      const v = kb(g, r), b = le(v), O = new nn({
        uri: b
      }), I = !this.options.resolve.resolvers.some((j) => j.canRead(O)), $ = !I;
      let C = le(this.reference.uri) === v, D = !C;
      this.indirections.push(r);
      let A;
      try {
        if (I || $) {
          g = this.toBaseURI(v);
          const j = v, T = Le(y.value.result);
          if (A = ic(j, T), A = Le(A), A.id = tt.identify(A), !this.options.resolve.internal && C || !this.options.resolve.external && D)
            return;
        } else {
          if (g = this.toBaseURI(v), C = le(this.reference.uri) === g, D = !C, !this.options.resolve.internal && C || !this.options.resolve.external && D)
            return;
          y = await this.toReference(lt(v));
          const j = rt(v), T = Le(y.value.result);
          A = ut(j, T), A = Le(A), A.id = tt.identify(A);
        }
      } catch (j) {
        if ($ && j instanceof Vf)
          if (nc(xs(v))) {
            if (C = le(this.reference.uri) === g, D = !C, !this.options.resolve.internal && C || !this.options.resolve.external && D)
              return;
            y = await this.toReference(lt(v));
            const T = xs(v), U = Le(y.value.result);
            A = lp(T, U), A = Le(A), A.id = tt.identify(A);
          } else {
            if (g = this.toBaseURI(E(v)), C = le(this.reference.uri) === g, D = !C, !this.options.resolve.internal && C || !this.options.resolve.external && D)
              return;
            y = await this.toReference(lt(v));
            const T = rt(v), U = Le(y.value.result);
            A = ut(T, U), A = Le(A), A.id = tt.identify(A);
          }
        else
          throw j;
      }
      if (r === A)
        throw new ye("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new is(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(A)) {
        if (y.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const j = new Nt(A.id, {
            type: "json-schema",
            uri: y.uri,
            $ref: E(r.$ref),
            baseURI: _e(g, v),
            referencingElement: r
          }), U = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(j);
          return a.replaceWith(U, gr), n ? !1 : U;
        }
      }
      const q = le(y.refSet.rootRef.uri) !== y.uri, w = ["error", "replace"].includes(this.options.dereference.circular);
      if ((D || q || lr(A) && G(A.$ref) || w) && !m.includesCycle(A)) {
        var p;
        h.add(r);
        const j = new Gs({
          reference: y,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: m,
          basePath: (p = this.basePath) !== null && p !== void 0 ? p : [...at([...o, n, r]), "$ref"]
        });
        A = await Xc(A, j, {
          keyMap: Et,
          nodeTypeGetter: ft
        }), h.delete(r);
      }
      if (this.indirections.pop(), cp(A)) {
        const j = N(A);
        return j.setMetaProperty("ref-fields", {
          $ref: E(r.$ref)
        }), j.setMetaProperty("ref-origin", y.uri), j.setMetaProperty("ref-referencing-element-id", N(tt.identify(r))), a.replaceWith(j, gr), n ? !1 : j;
      }
      if (lr(A)) {
        const j = new Jr([...A.content], N(A.meta), N(A.attributes));
        if (r.forEach((T, U, X) => {
          j.remove(E(U)), j.content.push(X);
        }), j.remove("$ref"), j.setMetaProperty("ref-fields", {
          $ref: E(r.$ref)
        }), j.setMetaProperty("ref-origin", y.uri), j.setMetaProperty("ref-referencing-element-id", N(tt.identify(r))), this.allowMetaPatches && typeof j.get("$$ref") > "u") {
          const T = _e(g, v);
          j.set("$$ref", T);
        }
        A = j;
      }
      return a.replaceWith(A, gr), n ? void 0 : A;
    } catch (m) {
      var f, d, u;
      const h = vi(m), y = new S4(`Could not resolve reference: ${h.message}`, {
        baseDoc: this.reference.uri,
        $ref: E(r.$ref),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...at([...o, n, r]), "$ref"],
        cause: h
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (u = d.push) === null || u === void 0 || u.call(d, y);
      return;
    }
  }
  // eslint-disable-next-line class-methods-use-this
  async LinkElement() {
  }
  async ExampleElement(r, s, n, i, o, a) {
    try {
      return await super.ExampleElement(r, s, n, i, o, a);
    } catch (f) {
      var c, l, p;
      const d = vi(f), u = Yc(d, {
        baseDoc: this.reference.uri,
        externalValue: E(r.externalValue),
        fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...at([...o, n, r]), "externalValue"]
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (p = l.push) === null || p === void 0 || p.call(l, u);
      return;
    }
  }
}
const w4 = $a[Symbol.for("nodejs.util.promisify.custom")];
class O4 {
  constructor({
    parameterMacro: e,
    modelPropertyMacro: r,
    mode: s,
    options: n,
    ...i
  }) {
    const o = [];
    o.push(new Gs({
      ...i,
      options: n
    })), typeof r == "function" && o.push(new g4({
      modelPropertyMacro: r,
      options: n
    })), s !== "strict" && o.push(new b4({
      options: n
    })), typeof e == "function" && o.push(new x4({
      parameterMacro: e,
      options: n
    }));
    const a = w4(o, {
      nodeTypeGetter: ft
    });
    Object.assign(this, a);
  }
}
const E4 = $e[Symbol.for("nodejs.util.promisify.custom")];
class Nb extends v4 {
  constructor({
    allowMetaPatches: r = !1,
    parameterMacro: s = null,
    modelPropertyMacro: n = null,
    mode: i = "non-strict",
    ancestors: o = [],
    ...a
  } = {}) {
    super({
      ...a
    });
    x(this, "allowMetaPatches");
    x(this, "parameterMacro");
    x(this, "modelPropertyMacro");
    x(this, "mode");
    x(this, "ancestors");
    this.name = "openapi-3-1-swagger-client", this.allowMetaPatches = r, this.parameterMacro = s, this.modelPropertyMacro = n, this.mode = i, this.ancestors = [...o];
  }
  async dereference(r, s) {
    var n;
    const i = Zt(ap), o = (n = s.dereference.refSet) !== null && n !== void 0 ? n : new vs(), a = new vs();
    let c = o, l;
    o.has(r.uri) ? l = o.find((d) => d.uri === r.uri) : (l = new Dt({
      uri: r.uri,
      value: r.parseResult
    }), o.add(l)), s.dereference.immutable && (o.refs.map((d) => new Dt({
      ...d,
      value: N(d.value)
    })).forEach((d) => a.add(d)), l = a.find((d) => d.uri === r.uri), c = a);
    const p = new O4({
      reference: l,
      namespace: i,
      options: s,
      allowMetaPatches: this.allowMetaPatches,
      ancestors: this.ancestors,
      modelPropertyMacro: this.modelPropertyMacro,
      mode: this.mode,
      parameterMacro: this.parameterMacro
    }), f = await E4(c.rootRef.value, p, {
      keyMap: Et,
      nodeTypeGetter: ft
    });
    return s.dereference.immutable && a.refs.filter((d) => d.uri.startsWith("immutable://")).map((d) => new Dt({
      ...d,
      uri: d.uri.replace(/^immutable:\/\//, "")
    })).forEach((d) => o.add(d)), s.dereference.refSet === null && o.clean(), a.clean(), f;
  }
}
const $4 = (t) => {
  const e = E(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
  return new F({
    $ref: e
  }, N(r.meta), N(r.attributes));
}, oc = async (t) => {
  const {
    spec: e,
    timeout: r,
    redirects: s,
    requestInterceptor: n,
    responseInterceptor: i,
    pathDiscriminator: o = [],
    allowMetaPatches: a = !1,
    useCircularStructures: c = !1,
    skipNormalization: l = !1,
    parameterMacro: p = null,
    modelPropertyMacro: f = null,
    mode: d = "non-strict",
    strategies: u
  } = t;
  try {
    const {
      cache: m
    } = oc, h = u.find((X) => X.match(e)), y = pa(Ki()) ? Ki() : ji, g = Fu(t), v = _e(y, g);
    let b;
    m.has(e) ? b = m.get(e) : (b = vr.refract(e), b.classes.push("result"), m.set(e, b));
    const O = new ht([b]), I = Wg(o), $ = I === "" ? "" : `#${I}`, C = ut(I, b), D = new Dt({
      uri: v,
      value: O
    }), A = new vs({
      refs: [D]
    });
    I !== "" && (A.rootRef = void 0);
    const q = [/* @__PURE__ */ new Set([C])], w = [], j = await QN(C, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${v}${$}`,
        resolvers: [new Cb({
          timeout: r || 1e4,
          redirects: s || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: n,
            responseInterceptor: i
          }
        },
        strategies: [new u4()]
      },
      parse: {
        mediaType: gs.latest(),
        parsers: [new Fb({
          allowEmpty: !1,
          sourceMap: !1
        }), new Mb({
          allowEmpty: !1,
          sourceMap: !1
        }), new Rb({
          allowEmpty: !1,
          sourceMap: !1
        }), new Ib({
          allowEmpty: !1,
          sourceMap: !1
        }), new l4({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [new Nb({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: p,
          modelPropertyMacro: f,
          mode: d,
          ancestors: q
        })],
        refSet: A,
        dereferenceOpts: {
          errors: w
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? $y.dereference.circularReplacer : $4
      }
    }), T = NN(C, j, b), U = l ? T : h.normalize(T);
    return {
      spec: E(U),
      errors: w
    };
  } catch (m) {
    if (m instanceof Vl || m instanceof Us)
      return {
        spec: e,
        errors: []
      };
    throw m;
  }
};
oc.cache = /* @__PURE__ */ new WeakMap();
const Vd = (t) => {
  if (!ce(t)) return t;
  const e = [yB({
    operationIdNormalizer: (s, n, i) => An({
      operationId: s
    }, n, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), hB(), dB(), gB(), bB()];
  return Ct(t, e, {
    toolboxCreator: _b,
    visitorOptions: {
      keyMap: Et,
      nodeTypeGetter: ft
    }
  });
}, A4 = (t) => (e) => {
  const r = vr.refract(e);
  r.classes.push("result");
  const s = t(r), n = E(s);
  return oc.cache.set(n, s), E(s);
}, j4 = {
  name: "openapi-3-1-apidom",
  match(t) {
    return zf(t);
  },
  normalize(t) {
    if (!xe(t) && Vt(t) && !t.$$normalized) {
      const e = A4(Vd)(t);
      return e.$$normalized = !0, e;
    }
    return xe(t) ? Vd(t) : t;
  },
  async resolve(t) {
    return oc(t);
  }
};
function Db(t, e, r) {
  if (!t || typeof t != "object" || !t.paths || typeof t.paths != "object")
    return null;
  const {
    paths: s
  } = t;
  for (const n in s)
    for (const i in s[n]) {
      if (i.toUpperCase() === "PARAMETERS")
        continue;
      const o = s[n][i];
      if (!o || typeof o != "object")
        continue;
      const a = {
        spec: t,
        pathName: n,
        method: i.toUpperCase(),
        operation: o
      }, c = e(a);
      if (r && c)
        return a;
    }
}
function P4(t, e) {
  return Db(t, e, !0) || null;
}
function Lb(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function T4(t, e) {
  return !t || !t.paths ? null : P4(t, ({
    pathName: r,
    method: s,
    operation: n
  }) => {
    if (!n || typeof n != "object")
      return !1;
    const i = n.operationId, o = An(n, r, s), a = Lb(r, s);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: _4
} = b_, C4 = () => null, R4 = (t) => Array.isArray(t) ? t : [t], Bd = {
  mapTagOperations: M4,
  makeExecute: I4
};
function I4(t = {}) {
  return ({
    pathName: e,
    method: r,
    operationId: s
  }) => (n, i = {}) => {
    const {
      requestInterceptor: o,
      responseInterceptor: a,
      userFetch: c
    } = t;
    return t.execute({
      spec: t.spec,
      requestInterceptor: o,
      responseInterceptor: a,
      userFetch: c,
      pathName: e,
      method: r,
      parameters: n,
      operationId: s,
      ...i
    });
  };
}
function F4(t = {}) {
  const e = Bd.makeExecute(t);
  return {
    apis: Bd.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function M4({
  spec: t,
  cb: e = C4,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: s
}) {
  const n = {}, i = {};
  return Db(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? R4(c.tags) : [r]).forEach((p) => {
      if (typeof p != "string")
        return;
      i[p] = i[p] || {};
      const f = i[p], d = An(c, o, a, {
        v2OperationIdCompatibilityMode: s
      }), u = e({
        spec: t,
        pathName: o,
        method: a,
        operation: c,
        operationId: d
      });
      if (n[d])
        n[d] += 1, f[`${d}${n[d]}`] = u;
      else if (typeof f[d] < "u") {
        const m = n[d] || 1;
        n[d] = m + 1, f[`${d}${n[d]}`] = u;
        const h = f[d];
        delete f[d], f[`${d}${m}`] = h;
      } else
        f[d] = u;
    });
  }), i;
}
function k4() {
  this.grammarObject = "grammarObject", this.rules = [], this.rules[0] = {
    name: "server-url-template",
    lower: "server-url-template",
    index: 0,
    isBkr: !1
  }, this.rules[1] = {
    name: "server-variable",
    lower: "server-variable",
    index: 1,
    isBkr: !1
  }, this.rules[2] = {
    name: "server-variable-name",
    lower: "server-variable-name",
    index: 2,
    isBkr: !1
  }, this.rules[3] = {
    name: "literals",
    lower: "literals",
    index: 3,
    isBkr: !1
  }, this.rules[4] = {
    name: "DIGIT",
    lower: "digit",
    index: 4,
    isBkr: !1
  }, this.rules[5] = {
    name: "HEXDIG",
    lower: "hexdig",
    index: 5,
    isBkr: !1
  }, this.rules[6] = {
    name: "pct-encoded",
    lower: "pct-encoded",
    index: 6,
    isBkr: !1
  }, this.rules[7] = {
    name: "ucschar",
    lower: "ucschar",
    index: 7,
    isBkr: !1
  }, this.rules[8] = {
    name: "iprivate",
    lower: "iprivate",
    index: 8,
    isBkr: !1
  }, this.udts = [], this.rules[0].opcodes = [], this.rules[0].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[0].opcodes[1] = {
    type: 1,
    children: [2, 3]
  }, this.rules[0].opcodes[2] = {
    type: 4,
    index: 3
  }, this.rules[0].opcodes[3] = {
    type: 4,
    index: 1
  }, this.rules[1].opcodes = [], this.rules[1].opcodes[0] = {
    type: 2,
    children: [1, 2, 3]
  }, this.rules[1].opcodes[1] = {
    type: 7,
    string: [123]
  }, this.rules[1].opcodes[2] = {
    type: 4,
    index: 2
  }, this.rules[1].opcodes[3] = {
    type: 7,
    string: [125]
  }, this.rules[2].opcodes = [], this.rules[2].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[2].opcodes[1] = {
    type: 1,
    children: [2, 3, 4]
  }, this.rules[2].opcodes[2] = {
    type: 5,
    min: 0,
    max: 122
  }, this.rules[2].opcodes[3] = {
    type: 6,
    string: [124]
  }, this.rules[2].opcodes[4] = {
    type: 5,
    min: 126,
    max: 1114111
  }, this.rules[3].opcodes = [], this.rules[3].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[3].opcodes[1] = {
    type: 1,
    children: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  }, this.rules[3].opcodes[2] = {
    type: 6,
    string: [33]
  }, this.rules[3].opcodes[3] = {
    type: 5,
    min: 35,
    max: 36
  }, this.rules[3].opcodes[4] = {
    type: 5,
    min: 38,
    max: 59
  }, this.rules[3].opcodes[5] = {
    type: 6,
    string: [61]
  }, this.rules[3].opcodes[6] = {
    type: 5,
    min: 63,
    max: 91
  }, this.rules[3].opcodes[7] = {
    type: 6,
    string: [93]
  }, this.rules[3].opcodes[8] = {
    type: 6,
    string: [95]
  }, this.rules[3].opcodes[9] = {
    type: 5,
    min: 97,
    max: 122
  }, this.rules[3].opcodes[10] = {
    type: 6,
    string: [126]
  }, this.rules[3].opcodes[11] = {
    type: 4,
    index: 7
  }, this.rules[3].opcodes[12] = {
    type: 4,
    index: 8
  }, this.rules[3].opcodes[13] = {
    type: 4,
    index: 6
  }, this.rules[4].opcodes = [], this.rules[4].opcodes[0] = {
    type: 5,
    min: 48,
    max: 57
  }, this.rules[5].opcodes = [], this.rules[5].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7]
  }, this.rules[5].opcodes[1] = {
    type: 4,
    index: 4
  }, this.rules[5].opcodes[2] = {
    type: 7,
    string: [97]
  }, this.rules[5].opcodes[3] = {
    type: 7,
    string: [98]
  }, this.rules[5].opcodes[4] = {
    type: 7,
    string: [99]
  }, this.rules[5].opcodes[5] = {
    type: 7,
    string: [100]
  }, this.rules[5].opcodes[6] = {
    type: 7,
    string: [101]
  }, this.rules[5].opcodes[7] = {
    type: 7,
    string: [102]
  }, this.rules[6].opcodes = [], this.rules[6].opcodes[0] = {
    type: 2,
    children: [1, 2, 3]
  }, this.rules[6].opcodes[1] = {
    type: 7,
    string: [37]
  }, this.rules[6].opcodes[2] = {
    type: 4,
    index: 5
  }, this.rules[6].opcodes[3] = {
    type: 4,
    index: 5
  }, this.rules[7].opcodes = [], this.rules[7].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  }, this.rules[7].opcodes[1] = {
    type: 5,
    min: 160,
    max: 55295
  }, this.rules[7].opcodes[2] = {
    type: 5,
    min: 63744,
    max: 64975
  }, this.rules[7].opcodes[3] = {
    type: 5,
    min: 65008,
    max: 65519
  }, this.rules[7].opcodes[4] = {
    type: 5,
    min: 65536,
    max: 131069
  }, this.rules[7].opcodes[5] = {
    type: 5,
    min: 131072,
    max: 196605
  }, this.rules[7].opcodes[6] = {
    type: 5,
    min: 196608,
    max: 262141
  }, this.rules[7].opcodes[7] = {
    type: 5,
    min: 262144,
    max: 327677
  }, this.rules[7].opcodes[8] = {
    type: 5,
    min: 327680,
    max: 393213
  }, this.rules[7].opcodes[9] = {
    type: 5,
    min: 393216,
    max: 458749
  }, this.rules[7].opcodes[10] = {
    type: 5,
    min: 458752,
    max: 524285
  }, this.rules[7].opcodes[11] = {
    type: 5,
    min: 524288,
    max: 589821
  }, this.rules[7].opcodes[12] = {
    type: 5,
    min: 589824,
    max: 655357
  }, this.rules[7].opcodes[13] = {
    type: 5,
    min: 655360,
    max: 720893
  }, this.rules[7].opcodes[14] = {
    type: 5,
    min: 720896,
    max: 786429
  }, this.rules[7].opcodes[15] = {
    type: 5,
    min: 786432,
    max: 851965
  }, this.rules[7].opcodes[16] = {
    type: 5,
    min: 851968,
    max: 917501
  }, this.rules[7].opcodes[17] = {
    type: 5,
    min: 921600,
    max: 983037
  }, this.rules[8].opcodes = [], this.rules[8].opcodes[0] = {
    type: 1,
    children: [1, 2, 3]
  }, this.rules[8].opcodes[1] = {
    type: 5,
    min: 57344,
    max: 63743
  }, this.rules[8].opcodes[2] = {
    type: 5,
    min: 983040,
    max: 1048573
  }, this.rules[8].opcodes[3] = {
    type: 5,
    min: 1048576,
    max: 1114109
  }, this.toString = function() {
    let e = "";
    return e += `; OpenAPI Server URL templating ABNF syntax
`, e += `server-url-template    = 1*( literals / server-variable ) ; variant of https://www.rfc-editor.org/rfc/rfc6570#section-2
`, e += `server-variable        = "{" server-variable-name "}"
`, e += `server-variable-name   = 1*( %x00-7A / %x7C / %x7E-10FFFF ) ; every UTF8 character except { and } (from OpenAPI)
`, e += `
`, e += `; https://www.rfc-editor.org/rfc/rfc6570#section-2.1
`, e += `; https://www.rfc-editor.org/errata/eid6937
`, e += `literals               = 1*( %x21 / %x23-24 / %x26-3B / %x3D / %x3F-5B
`, e += `                       / %x5D / %x5F / %x61-7A / %x7E / ucschar / iprivate
`, e += `                       / pct-encoded)
`, e += `                            ; any Unicode character except: CTL, SP,
`, e += `                            ;  DQUOTE, "%" (aside from pct-encoded),
`, e += '                            ;  "<", ">", "\\", "^", "`", "{", "|", "}"\n', e += `
`, e += `; https://www.rfc-editor.org/rfc/rfc6570#section-1.5
`, e += `DIGIT          =  %x30-39             ; 0-9
`, e += `HEXDIG         =  DIGIT / "A" / "B" / "C" / "D" / "E" / "F" ; case-insensitive
`, e += `
`, e += `pct-encoded    =  "%" HEXDIG HEXDIG
`, e += `
`, e += `ucschar        =  %xA0-D7FF / %xF900-FDCF / %xFDF0-FFEF
`, e += `               /  %x10000-1FFFD / %x20000-2FFFD / %x30000-3FFFD
`, e += `               /  %x40000-4FFFD / %x50000-5FFFD / %x60000-6FFFD
`, e += `               /  %x70000-7FFFD / %x80000-8FFFD / %x90000-9FFFD
`, e += `               /  %xA0000-AFFFD / %xB0000-BFFFD / %xC0000-CFFFD
`, e += `               /  %xD0000-DFFFD / %xE1000-EFFFD
`, e += `
`, e += `iprivate       =  %xE000-F8FF / %xF0000-FFFFD / %x100000-10FFFD
`, e;
  };
}
const qr = function() {
  const e = Z, r = gt, s = this, n = "parser.js: Parser(): ", i = function() {
    this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
      this.state = e.ACTIVE, this.phraseLength = 0;
    };
  };
  s.ast = void 0, s.stats = void 0, s.trace = void 0, s.callbacks = [];
  let o = 0, a = 0, c = 0, l = 0, p = 0, f, d, u, m, h = new i(), y, g, v;
  const b = () => {
    o = 0, a = 0, c = 0, l = 0, p = 0, f = void 0, d = void 0, u = void 0, m = void 0, h.refresh(), y = void 0, g = void 0, v = void 0;
  }, O = () => {
    const L = `${n}initializeCallbacks(): `;
    let P;
    for (y = [], g = [], P = 0; P < f.length; P += 1)
      y[P] = void 0;
    for (P = 0; P < d.length; P += 1)
      g[P] = void 0;
    let H;
    const z = [];
    for (P = 0; P < f.length; P += 1)
      z.push(f[P].lower);
    for (P = 0; P < d.length; P += 1)
      z.push(d[P].lower);
    for (const B in s.callbacks)
      if (s.callbacks.hasOwnProperty(B)) {
        if (P = z.indexOf(B.toLowerCase()), P < 0)
          throw new Error(`${L}syntax callback '${B}' not a rule or udt name`);
        if (H = s.callbacks[B] ? s.callbacks[B] : void 0, typeof H == "function" || H === void 0)
          P < f.length ? y[P] = H : g[P - f.length] = H;
        else
          throw new Error(`${L}syntax callback[${B}] must be function reference or falsy)`);
      }
  };
  s.parse = (L, P, H, z) => {
    const B = `${n}parse(): `;
    b(), m = r.stringToChars(H), f = L.rules, d = L.udts;
    const fe = P.toLowerCase();
    let ge;
    for (const zr in f)
      if (f.hasOwnProperty(zr) && fe === f[zr].lower) {
        ge = f[zr].index;
        break;
      }
    if (ge === void 0)
      throw new Error(`${B}start rule name '${startRule}' not recognized`);
    O(), s.trace && s.trace.init(f, d, m), s.stats && s.stats.init(f, d), s.ast && s.ast.init(f, d, m), v = z, u = [
      {
        type: e.RNM,
        index: ge
      }
    ], Oe(0, 0), u = void 0;
    let ze = !1;
    switch (h.state) {
      case e.ACTIVE:
        throw new Error(`${B}final state should never be 'ACTIVE'`);
      case e.NOMATCH:
        ze = !1;
        break;
      case e.EMPTY:
      case e.MATCH:
        h.phraseLength === m.length ? ze = !0 : ze = !1;
        break;
      default:
        throw new Error("unrecognized state");
    }
    return {
      success: ze,
      state: h.state,
      stateName: e.idName(h.state),
      length: m.length,
      matched: h.phraseLength,
      maxMatched: p,
      maxTreeDepth: c,
      nodeHits: l
    };
  };
  const I = (L, P) => {
    const H = u[L];
    for (let z = 0; z < H.children.length && (Oe(H.children[z], P), h.state === e.NOMATCH); z += 1)
      ;
  }, $ = (L, P) => {
    let H, z, B, fe;
    const ge = u[L];
    s.ast && (z = s.ast.getLength()), H = !0, B = P, fe = 0;
    for (let ze = 0; ze < ge.children.length; ze += 1)
      if (Oe(ge.children[ze], B), h.state === e.NOMATCH) {
        H = !1;
        break;
      } else
        B += h.phraseLength, fe += h.phraseLength;
    H ? (h.state = fe === 0 ? e.EMPTY : e.MATCH, h.phraseLength = fe) : (h.state = e.NOMATCH, h.phraseLength = 0, s.ast && s.ast.setLength(z));
  }, C = (L, P) => {
    let H, z, B, fe;
    const ge = u[L];
    if (ge.max === 0) {
      h.state = e.EMPTY, h.phraseLength = 0;
      return;
    }
    for (z = P, B = 0, fe = 0, s.ast && (H = s.ast.getLength()); !(z >= m.length || (Oe(L + 1, z), h.state === e.NOMATCH) || h.state === e.EMPTY || (fe += 1, B += h.phraseLength, z += h.phraseLength, fe === ge.max)); )
      ;
    h.state === e.EMPTY || fe >= ge.min ? (h.state = B === 0 ? e.EMPTY : e.MATCH, h.phraseLength = B) : (h.state = e.NOMATCH, h.phraseLength = 0, s.ast && s.ast.setLength(H));
  }, D = (L, P, H, z) => {
    if (P.phraseLength > H) {
      let B = `${n}opRNM(${L.name}): callback function error: `;
      throw B += `sysData.phraseLength: ${P.phraseLength}`, B += ` must be <= remaining chars: ${H}`, new Error(B);
    }
    switch (P.state) {
      case e.ACTIVE:
        if (!z)
          throw new Error(
            `${n}opRNM(${L.name}): callback function return error. ACTIVE state not allowed.`
          );
        break;
      case e.EMPTY:
        P.phraseLength = 0;
        break;
      case e.MATCH:
        P.phraseLength === 0 && (P.state = e.EMPTY);
        break;
      case e.NOMATCH:
        P.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${n}opRNM(${L.name}): callback function return error. Unrecognized return state: ${P.state}`
        );
    }
  }, A = (L, P) => {
    let H, z, B;
    const fe = u[L], ge = f[fe.index], ze = y[ge.index];
    if (o || (z = s.ast && s.ast.ruleDefined(fe.index), z && (H = s.ast.getLength(), s.ast.down(fe.index, f[fe.index].name))), ze) {
      const zr = m.length - P;
      ze(h, m, P, v), D(ge, h, zr, !0), h.state === e.ACTIVE && (B = u, u = ge.opcodes, Oe(0, P), u = B, ze(h, m, P, v), D(ge, h, zr, !1));
    } else
      B = u, u = ge.opcodes, Oe(0, P), u = B;
    o || z && (h.state === e.NOMATCH ? s.ast.setLength(H) : s.ast.up(fe.index, ge.name, P, h.phraseLength));
  }, q = (L, P) => {
    const H = u[L];
    h.state = e.NOMATCH, P < m.length && H.min <= m[P] && m[P] <= H.max && (h.state = e.MATCH, h.phraseLength = 1);
  }, w = (L, P) => {
    const H = u[L], z = H.string.length;
    if (h.state = e.NOMATCH, P + z <= m.length) {
      for (let B = 0; B < z; B += 1)
        if (m[P + B] !== H.string[B])
          return;
      h.state = e.MATCH, h.phraseLength = z;
    }
  }, j = (L, P) => {
    let H;
    const z = u[L];
    h.state = e.NOMATCH;
    const B = z.string.length;
    if (B === 0) {
      h.state = e.EMPTY;
      return;
    }
    if (P + B <= m.length) {
      for (let fe = 0; fe < B; fe += 1)
        if (H = m[P + fe], H >= 65 && H <= 90 && (H += 32), H !== z.string[fe])
          return;
      h.state = e.MATCH, h.phraseLength = B;
    }
  }, T = (L, P, H) => {
    if (P.phraseLength > H) {
      let z = `${n}opUDT(${L.name}): callback function error: `;
      throw z += `sysData.phraseLength: ${P.phraseLength}`, z += ` must be <= remaining chars: ${H}`, new Error(z);
    }
    switch (P.state) {
      case e.ACTIVE:
        throw new Error(`${n}opUDT(${L.name}) ACTIVE state return not allowed.`);
      case e.EMPTY:
        if (L.empty)
          P.phraseLength = 0;
        else
          throw new Error(`${n}opUDT(${L.name}) may not return EMPTY.`);
        break;
      case e.MATCH:
        if (P.phraseLength === 0)
          if (L.empty)
            P.state = e.EMPTY;
          else
            throw new Error(`${n}opUDT(${L.name}) may not return EMPTY.`);
        break;
      case e.NOMATCH:
        P.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${n}opUDT(${L.name}): callback function return error. Unrecognized return state: ${P.state}`
        );
    }
  }, U = (L, P) => {
    let H, z, B;
    const fe = u[L], ge = d[fe.index];
    h.UdtIndex = ge.index, o || (B = s.ast && s.ast.udtDefined(fe.index), B && (z = f.length + fe.index, H = s.ast.getLength(), s.ast.down(z, ge.name)));
    const ze = m.length - P;
    g[fe.index](h, m, P, v), T(ge, h, ze), o || B && (h.state === e.NOMATCH ? s.ast.setLength(H) : s.ast.up(z, ge.name, P, h.phraseLength));
  }, X = (L, P) => {
    switch (o += 1, Oe(L + 1, P), o -= 1, h.phraseLength = 0, h.state) {
      case e.EMPTY:
        h.state = e.EMPTY;
        break;
      case e.MATCH:
        h.state = e.EMPTY;
        break;
      case e.NOMATCH:
        h.state = e.NOMATCH;
        break;
      default:
        throw new Error(`opAND: invalid state ${h.state}`);
    }
  }, de = (L, P) => {
    switch (o += 1, Oe(L + 1, P), o -= 1, h.phraseLength = 0, h.state) {
      case e.EMPTY:
      case e.MATCH:
        h.state = e.NOMATCH;
        break;
      case e.NOMATCH:
        h.state = e.EMPTY;
        break;
      default:
        throw new Error(`opNOT: invalid state ${h.state}`);
    }
  }, Oe = (L, P) => {
    const H = `${n}opExecute(): `, z = u[L];
    switch (l += 1, a > c && (c = a), a += 1, h.refresh(), s.trace && s.trace.down(z, P), z.type) {
      case e.ALT:
        I(L, P);
        break;
      case e.CAT:
        $(L, P);
        break;
      case e.REP:
        C(L, P);
        break;
      case e.RNM:
        A(L, P);
        break;
      case e.TRG:
        q(L, P);
        break;
      case e.TBS:
        w(L, P);
        break;
      case e.TLS:
        j(L, P);
        break;
      case e.UDT:
        U(L, P);
        break;
      case e.AND:
        X(L, P);
        break;
      case e.NOT:
        de(L, P);
        break;
      default:
        throw new Error(`${H}unrecognized operator`);
    }
    o || P + h.phraseLength > p && (p = P + h.phraseLength), s.stats && s.stats.collect(z, h), s.trace && s.trace.up(z, h.state, P, h.phraseLength), a -= 1;
  };
}, Vb = function() {
  const e = "parser.js: Ast()): ", r = Z, s = gt, n = this;
  let i, o, a, c = 0;
  const l = [], p = [], f = [];
  n.callbacks = [], n.init = (u, m, h) => {
    p.length = 0, f.length = 0, c = 0, i = u, o = m, a = h;
    let y;
    const g = [];
    for (y = 0; y < i.length; y += 1)
      g.push(i[y].lower);
    for (y = 0; y < o.length; y += 1)
      g.push(o[y].lower);
    for (c = i.length + o.length, y = 0; y < c; y += 1)
      l[y] = void 0;
    for (const v in n.callbacks)
      if (n.callbacks.hasOwnProperty(v)) {
        const b = v.toLowerCase();
        if (y = g.indexOf(b), y < 0)
          throw new Error(`${e}init: node '${v}' not a rule or udt name`);
        l[y] = n.callbacks[v];
      }
  }, n.ruleDefined = (u) => !!l[u], n.udtDefined = (u) => !!l[i.length + u], n.down = (u, m) => {
    const h = f.length;
    return p.push(h), f.push({
      name: m,
      thisIndex: h,
      thatIndex: void 0,
      state: r.SEM_PRE,
      callbackIndex: u,
      phraseIndex: void 0,
      phraseLength: void 0,
      stack: p.length
    }), h;
  }, n.up = (u, m, h, y) => {
    const g = f.length, v = p.pop();
    return f.push({
      name: m,
      thisIndex: g,
      thatIndex: v,
      state: r.SEM_POST,
      callbackIndex: u,
      phraseIndex: h,
      phraseLength: y,
      stack: p.length
    }), f[v].thatIndex = g, f[v].phraseIndex = h, f[v].phraseLength = y, g;
  }, n.translate = (u) => {
    let m, h;
    for (let y = 0; y < f.length; y += 1)
      h = f[y], m = l[h.callbackIndex], m && (h.state === r.SEM_PRE ? m(r.SEM_PRE, a, h.phraseIndex, h.phraseLength, u) : m && m(r.SEM_POST, a, h.phraseIndex, h.phraseLength, u));
  }, n.setLength = (u) => {
    f.length = u, u > 0 ? p.length = f[u - 1].stack : p.length = 0;
  }, n.getLength = () => f.length;
  function d(u) {
    let m = "";
    for (; u-- > 0; )
      m += " ";
    return m;
  }
  n.toXml = () => {
    let u = "", m = 0;
    return u += `<?xml version="1.0" encoding="utf-8"?>
`, u += `<root nodes="${f.length / 2}" characters="${a.length}">
`, u += `<!-- input string -->
`, u += d(m + 2), u += s.charsToString(a), u += `
`, f.forEach((h) => {
      h.state === r.SEM_PRE ? (m += 1, u += d(m), u += `<node name="${h.name}" index="${h.phraseIndex}" length="${h.phraseLength}">
`, u += d(m + 2), u += s.charsToString(a, h.phraseIndex, h.phraseLength), u += `
`) : (u += d(m), u += `</node><!-- name="${h.name}" -->
`, m -= 1);
    }), u += `</root>
`, u;
  };
}, gt = {
  // utility functions
  stringToChars: (t) => [...t].map((e) => e.codePointAt(0)),
  charsToString: (t, e, r) => {
    let s = t;
    for (; !(e === void 0 || e < 0); ) {
      if (r === void 0) {
        s = t.slice(e);
        break;
      }
      if (r <= 0)
        return "";
      s = t.slice(e, e + r);
      break;
    }
    return String.fromCodePoint(...s);
  }
}, Z = {
  // Identifies the operator type.
  // NB: These must match the values in apg-js 4.3.0, apg-lib/identifiers.
  /* the original ABNF operators */
  ALT: 1,
  CAT: 2,
  REP: 3,
  RNM: 4,
  TRG: 5,
  TBS: 6,
  TLS: 7,
  /* the super set, SABNF operators */
  UDT: 11,
  AND: 12,
  NOT: 13,
  // Used by the parser and the user's `RNM` and `UDT` callback functions.
  // Identifies the parser state as it traverses the parse tree nodes.
  // - *ACTIVE* - indicates the downward direction through the parse tree node.
  // - *MATCH* - indicates the upward direction and a phrase, of length \> 0, has been successfully matched
  // - *EMPTY* - indicates the upward direction and a phrase, of length = 0, has been successfully matched
  // - *NOMATCH* - indicates the upward direction and the parser failed to match any phrase at all
  ACTIVE: 100,
  MATCH: 101,
  EMPTY: 102,
  NOMATCH: 103,
  // Used by [`AST` translator](./ast.html) (semantic analysis) and the user's callback functions
  // to indicate the direction of flow through the `AST` nodes.
  // - *SEM_PRE* - indicates the downward (pre-branch) direction through the `AST` node.
  // - *SEM_POST* - indicates the upward (post-branch) direction through the `AST` node.
  SEM_PRE: 200,
  SEM_POST: 201,
  // Ignored. Retained for backwords compatibility.
  SEM_OK: 300,
  idName: (t) => {
    switch (t) {
      case Z.ALT:
        return "ALT";
      case Z.CAT:
        return "CAT";
      case Z.REP:
        return "REP";
      case Z.RNM:
        return "RNM";
      case Z.TRG:
        return "TRG";
      case Z.TBS:
        return "TBS";
      case Z.TLS:
        return "TLS";
      case Z.UDT:
        return "UDT";
      case Z.AND:
        return "AND";
      case Z.NOT:
        return "NOT";
      case Z.ACTIVE:
        return "ACTIVE";
      case Z.EMPTY:
        return "EMPTY";
      case Z.MATCH:
        return "MATCH";
      case Z.NOMATCH:
        return "NOMATCH";
      case Z.SEM_PRE:
        return "SEM_PRE";
      case Z.SEM_POST:
        return "SEM_POST";
      case Z.SEM_OK:
        return "SEM_OK";
      default:
        return "UNRECOGNIZED STATE";
    }
  }
}, N4 = (t, e, r, s, n) => {
  if (t === Z.SEM_PRE) {
    if (Array.isArray(n) === !1)
      throw new Error("parser's user data must be an array");
    n.push(["server-url-template", gt.charsToString(e, r, s)]);
  }
  return Z.SEM_OK;
}, D4 = (t, e, r, s, n) => {
  if (t === Z.SEM_PRE) {
    if (Array.isArray(n) === !1)
      throw new Error("parser's user data must be an array");
    n.push(["server-variable", gt.charsToString(e, r, s)]);
  }
  return Z.SEM_OK;
}, L4 = (t, e, r, s, n) => {
  if (t === Z.SEM_PRE) {
    if (Array.isArray(n) === !1)
      throw new Error("parser's user data must be an array");
    n.push(["server-variable-name", gt.charsToString(e, r, s)]);
  }
  return Z.SEM_OK;
}, V4 = (t, e, r, s, n) => {
  if (t === Z.SEM_PRE) {
    if (Array.isArray(n) === !1)
      throw new Error("parser's user data must be an array");
    n.push(["literals", gt.charsToString(e, r, s)]);
  }
  return Z.SEM_OK;
}, B4 = new k4(), Bb = (t) => {
  const e = new qr();
  return e.ast = new Vb(), e.ast.callbacks["server-url-template"] = N4, e.ast.callbacks["server-variable"] = D4, e.ast.callbacks["server-variable-name"] = L4, e.ast.callbacks.literals = V4, {
    result: e.parse(B4, "server-url-template", t),
    ast: e.ast
  };
}, U4 = (t, {
  strict: e = !1
} = {}) => {
  try {
    const r = Bb(t);
    if (!r.result.success) return !1;
    const s = [];
    r.ast.translate(s);
    const n = s.some(([i]) => i === "server-variable");
    if (!e && !n)
      try {
        return new URL(t, "https://vladimirgorej.com"), !0;
      } catch {
        return !1;
      }
    return e ? n : !0;
  } catch {
    return !1;
  }
}, J4 = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, H4 = (t) => J4(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), q4 = ["literals", "server-variable-name"], z4 = (t, e, r = {}) => {
  const n = {
    ...{
      encoder: H4
    },
    ...r
  }, i = Bb(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => q4.includes(c)).map(([c, l]) => c === "server-variable-name" ? Object.hasOwn(e, l) ? n.encoder(e[l], l) : `{${l}}` : l).join("");
};
function Ub() {
  this.grammarObject = "grammarObject", this.rules = [], this.rules[0] = {
    name: "path-template",
    lower: "path-template",
    index: 0,
    isBkr: !1
  }, this.rules[1] = {
    name: "path-segment",
    lower: "path-segment",
    index: 1,
    isBkr: !1
  }, this.rules[2] = {
    name: "slash",
    lower: "slash",
    index: 2,
    isBkr: !1
  }, this.rules[3] = {
    name: "path-literal",
    lower: "path-literal",
    index: 3,
    isBkr: !1
  }, this.rules[4] = {
    name: "template-expression",
    lower: "template-expression",
    index: 4,
    isBkr: !1
  }, this.rules[5] = {
    name: "template-expression-param-name",
    lower: "template-expression-param-name",
    index: 5,
    isBkr: !1
  }, this.rules[6] = {
    name: "pchar",
    lower: "pchar",
    index: 6,
    isBkr: !1
  }, this.rules[7] = {
    name: "unreserved",
    lower: "unreserved",
    index: 7,
    isBkr: !1
  }, this.rules[8] = {
    name: "pct-encoded",
    lower: "pct-encoded",
    index: 8,
    isBkr: !1
  }, this.rules[9] = {
    name: "sub-delims",
    lower: "sub-delims",
    index: 9,
    isBkr: !1
  }, this.rules[10] = {
    name: "ALPHA",
    lower: "alpha",
    index: 10,
    isBkr: !1
  }, this.rules[11] = {
    name: "DIGIT",
    lower: "digit",
    index: 11,
    isBkr: !1
  }, this.rules[12] = {
    name: "HEXDIG",
    lower: "hexdig",
    index: 12,
    isBkr: !1
  }, this.udts = [], this.rules[0].opcodes = [], this.rules[0].opcodes[0] = {
    type: 2,
    children: [1, 2, 6]
  }, this.rules[0].opcodes[1] = {
    type: 4,
    index: 2
  }, this.rules[0].opcodes[2] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[0].opcodes[3] = {
    type: 2,
    children: [4, 5]
  }, this.rules[0].opcodes[4] = {
    type: 4,
    index: 1
  }, this.rules[0].opcodes[5] = {
    type: 4,
    index: 2
  }, this.rules[0].opcodes[6] = {
    type: 3,
    min: 0,
    max: 1
  }, this.rules[0].opcodes[7] = {
    type: 4,
    index: 1
  }, this.rules[1].opcodes = [], this.rules[1].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[1].opcodes[1] = {
    type: 1,
    children: [2, 3]
  }, this.rules[1].opcodes[2] = {
    type: 4,
    index: 3
  }, this.rules[1].opcodes[3] = {
    type: 4,
    index: 4
  }, this.rules[2].opcodes = [], this.rules[2].opcodes[0] = {
    type: 7,
    string: [47]
  }, this.rules[3].opcodes = [], this.rules[3].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[3].opcodes[1] = {
    type: 4,
    index: 6
  }, this.rules[4].opcodes = [], this.rules[4].opcodes[0] = {
    type: 2,
    children: [1, 2, 3]
  }, this.rules[4].opcodes[1] = {
    type: 7,
    string: [123]
  }, this.rules[4].opcodes[2] = {
    type: 4,
    index: 5
  }, this.rules[4].opcodes[3] = {
    type: 7,
    string: [125]
  }, this.rules[5].opcodes = [], this.rules[5].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[5].opcodes[1] = {
    type: 1,
    children: [2, 3, 4]
  }, this.rules[5].opcodes[2] = {
    type: 5,
    min: 0,
    max: 122
  }, this.rules[5].opcodes[3] = {
    type: 6,
    string: [124]
  }, this.rules[5].opcodes[4] = {
    type: 5,
    min: 126,
    max: 1114111
  }, this.rules[6].opcodes = [], this.rules[6].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5]
  }, this.rules[6].opcodes[1] = {
    type: 4,
    index: 7
  }, this.rules[6].opcodes[2] = {
    type: 4,
    index: 8
  }, this.rules[6].opcodes[3] = {
    type: 4,
    index: 9
  }, this.rules[6].opcodes[4] = {
    type: 7,
    string: [58]
  }, this.rules[6].opcodes[5] = {
    type: 7,
    string: [64]
  }, this.rules[7].opcodes = [], this.rules[7].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6]
  }, this.rules[7].opcodes[1] = {
    type: 4,
    index: 10
  }, this.rules[7].opcodes[2] = {
    type: 4,
    index: 11
  }, this.rules[7].opcodes[3] = {
    type: 7,
    string: [45]
  }, this.rules[7].opcodes[4] = {
    type: 7,
    string: [46]
  }, this.rules[7].opcodes[5] = {
    type: 7,
    string: [95]
  }, this.rules[7].opcodes[6] = {
    type: 7,
    string: [126]
  }, this.rules[8].opcodes = [], this.rules[8].opcodes[0] = {
    type: 2,
    children: [1, 2, 3]
  }, this.rules[8].opcodes[1] = {
    type: 7,
    string: [37]
  }, this.rules[8].opcodes[2] = {
    type: 4,
    index: 12
  }, this.rules[8].opcodes[3] = {
    type: 4,
    index: 12
  }, this.rules[9].opcodes = [], this.rules[9].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  }, this.rules[9].opcodes[1] = {
    type: 7,
    string: [33]
  }, this.rules[9].opcodes[2] = {
    type: 7,
    string: [36]
  }, this.rules[9].opcodes[3] = {
    type: 7,
    string: [38]
  }, this.rules[9].opcodes[4] = {
    type: 7,
    string: [39]
  }, this.rules[9].opcodes[5] = {
    type: 7,
    string: [40]
  }, this.rules[9].opcodes[6] = {
    type: 7,
    string: [41]
  }, this.rules[9].opcodes[7] = {
    type: 7,
    string: [42]
  }, this.rules[9].opcodes[8] = {
    type: 7,
    string: [43]
  }, this.rules[9].opcodes[9] = {
    type: 7,
    string: [44]
  }, this.rules[9].opcodes[10] = {
    type: 7,
    string: [59]
  }, this.rules[9].opcodes[11] = {
    type: 7,
    string: [61]
  }, this.rules[10].opcodes = [], this.rules[10].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }, this.rules[10].opcodes[1] = {
    type: 5,
    min: 65,
    max: 90
  }, this.rules[10].opcodes[2] = {
    type: 5,
    min: 97,
    max: 122
  }, this.rules[11].opcodes = [], this.rules[11].opcodes[0] = {
    type: 5,
    min: 48,
    max: 57
  }, this.rules[12].opcodes = [], this.rules[12].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7]
  }, this.rules[12].opcodes[1] = {
    type: 4,
    index: 11
  }, this.rules[12].opcodes[2] = {
    type: 7,
    string: [97]
  }, this.rules[12].opcodes[3] = {
    type: 7,
    string: [98]
  }, this.rules[12].opcodes[4] = {
    type: 7,
    string: [99]
  }, this.rules[12].opcodes[5] = {
    type: 7,
    string: [100]
  }, this.rules[12].opcodes[6] = {
    type: 7,
    string: [101]
  }, this.rules[12].opcodes[7] = {
    type: 7,
    string: [102]
  }, this.toString = function() {
    let e = "";
    return e += `; OpenAPI Path Templating ABNF syntax
`, e += `; variant of https://datatracker.ietf.org/doc/html/rfc3986#section-3.3
`, e += `path-template                  = slash *( path-segment slash ) [ path-segment ]
`, e += `path-segment                   = 1*( path-literal / template-expression )
`, e += `slash                          = "/"
`, e += `path-literal                   = 1*pchar
`, e += `template-expression            = "{" template-expression-param-name "}"
`, e += `template-expression-param-name = 1*( %x00-7A / %x7C / %x7E-10FFFF ) ; every UTF8 character except { and } (from OpenAPI)
`, e += `
`, e += `; https://datatracker.ietf.org/doc/html/rfc3986#section-3.3
`, e += `pchar               = unreserved / pct-encoded / sub-delims / ":" / "@"
`, e += `unreserved          = ALPHA / DIGIT / "-" / "." / "_" / "~"
`, e += `                    ; https://datatracker.ietf.org/doc/html/rfc3986#section-2.3
`, e += `pct-encoded         = "%" HEXDIG HEXDIG
`, e += `                    ; https://datatracker.ietf.org/doc/html/rfc3986#section-2.1
`, e += `sub-delims          = "!" / "$" / "&" / "'" / "(" / ")"
`, e += `                    / "*" / "+" / "," / ";" / "="
`, e += `                    ; https://datatracker.ietf.org/doc/html/rfc3986#section-2.2
`, e += `
`, e += `; https://datatracker.ietf.org/doc/html/rfc5234#appendix-B.1
`, e += `ALPHA               = %x41-5A / %x61-7A   ; A-Z / a-z
`, e += `DIGIT               = %x30-39            ; 0-9
`, e += `HEXDIG              = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
`, e;
  };
}
const G4 = (t, e, r, s, n) => (t === Z.SEM_PRE && n.push(["slash", gt.charsToString(e, r, s)]), Z.SEM_OK), K4 = (t, e, r, s, n) => {
  if (t === Z.SEM_PRE) {
    if (Array.isArray(n) === !1)
      throw new Error("parser's user data must be an array");
    n.push(["path-template", gt.charsToString(e, r, s)]);
  }
  return Z.SEM_OK;
}, W4 = (t, e, r, s, n) => (t === Z.SEM_PRE && n.push(["path-literal", gt.charsToString(e, r, s)]), Z.SEM_OK), Y4 = (t, e, r, s, n) => (t === Z.SEM_PRE && n.push(["template-expression", gt.charsToString(e, r, s)]), Z.SEM_OK), X4 = (t, e, r, s, n) => (t === Z.SEM_PRE && n.push(["template-expression-param-name", gt.charsToString(e, r, s)]), Z.SEM_OK), Q4 = new Ub(), Z4 = (t) => {
  const e = new qr();
  return e.ast = new Vb(), e.ast.callbacks["path-template"] = K4, e.ast.callbacks.slash = G4, e.ast.callbacks["path-literal"] = W4, e.ast.callbacks["template-expression"] = Y4, e.ast.callbacks["template-expression-param-name"] = X4, {
    result: e.parse(Q4, "path-template", t),
    ast: e.ast
  };
}, e6 = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, t6 = (t) => e6(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), r6 = ["slash", "path-literal", "template-expression-param-name"], wu = (t, e, r = {}) => {
  const n = {
    ...{
      encoder: t6
    },
    ...r
  }, i = Z4(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => r6.includes(c)).map(([c, l]) => c === "template-expression-param-name" ? Object.prototype.hasOwnProperty.call(e, l) ? n.encoder(e[l], l) : `{${l}}` : l).join("");
};
new Ub();
new qr();
const s6 = {
  body: n6,
  header: o6,
  query: c6,
  path: a6,
  formData: i6
};
function n6({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function i6({
  req: t,
  value: e,
  parameter: r
}) {
  if (e === !1 && r.type === "boolean" && (e = "false"), e === 0 && ["number", "integer"].indexOf(r.type) > -1 && (e = "0"), e)
    t.form = t.form || {}, t.form[r.name] = {
      collectionFormat: r.collectionFormat,
      value: e
    };
  else if (r.allowEmptyValue && e !== void 0) {
    t.form = t.form || {};
    const s = r.name;
    t.form[s] = t.form[s] || {}, t.form[s].allowEmptyValue = !0;
  }
}
function o6({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function a6({
  req: t,
  value: e,
  parameter: r,
  baseURL: s
}) {
  if (e !== void 0) {
    const n = t.url.replace(s, ""), i = wu(n, {
      [r.name]: e
    });
    t.url = s + i;
  }
}
function c6({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e === !1 && r.type === "boolean" && (e = "false"), e === 0 && ["number", "integer"].indexOf(r.type) > -1 && (e = "0"), e)
    t.query[r.name] = {
      collectionFormat: r.collectionFormat,
      value: e
    };
  else if (r.allowEmptyValue && e !== void 0) {
    const s = r.name;
    t.query[s] = t.query[s] || {}, t.query[s].allowEmptyValue = !0;
  }
}
function ac(t, e) {
  return e.includes("application/json") ? typeof t == "string" ? t : (Array.isArray(t) && (t = t.map((r) => {
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  })), JSON.stringify(t)) : String(t);
}
function oi() {
  this.grammarObject = "grammarObject", this.rules = [], this.rules[0] = {
    name: "lenient-cookie-string",
    lower: "lenient-cookie-string",
    index: 0,
    isBkr: !1
  }, this.rules[1] = {
    name: "lenient-cookie-entry",
    lower: "lenient-cookie-entry",
    index: 1,
    isBkr: !1
  }, this.rules[2] = {
    name: "lenient-cookie-pair",
    lower: "lenient-cookie-pair",
    index: 2,
    isBkr: !1
  }, this.rules[3] = {
    name: "lenient-cookie-pair-invalid",
    lower: "lenient-cookie-pair-invalid",
    index: 3,
    isBkr: !1
  }, this.rules[4] = {
    name: "lenient-cookie-name",
    lower: "lenient-cookie-name",
    index: 4,
    isBkr: !1
  }, this.rules[5] = {
    name: "lenient-cookie-value",
    lower: "lenient-cookie-value",
    index: 5,
    isBkr: !1
  }, this.rules[6] = {
    name: "lenient-quoted-value",
    lower: "lenient-quoted-value",
    index: 6,
    isBkr: !1
  }, this.rules[7] = {
    name: "lenient-quoted-char",
    lower: "lenient-quoted-char",
    index: 7,
    isBkr: !1
  }, this.rules[8] = {
    name: "lenient-cookie-octet",
    lower: "lenient-cookie-octet",
    index: 8,
    isBkr: !1
  }, this.rules[9] = {
    name: "cookie-string",
    lower: "cookie-string",
    index: 9,
    isBkr: !1
  }, this.rules[10] = {
    name: "cookie-pair",
    lower: "cookie-pair",
    index: 10,
    isBkr: !1
  }, this.rules[11] = {
    name: "cookie-name",
    lower: "cookie-name",
    index: 11,
    isBkr: !1
  }, this.rules[12] = {
    name: "cookie-value",
    lower: "cookie-value",
    index: 12,
    isBkr: !1
  }, this.rules[13] = {
    name: "cookie-octet",
    lower: "cookie-octet",
    index: 13,
    isBkr: !1
  }, this.rules[14] = {
    name: "OWS",
    lower: "ows",
    index: 14,
    isBkr: !1
  }, this.rules[15] = {
    name: "token",
    lower: "token",
    index: 15,
    isBkr: !1
  }, this.rules[16] = {
    name: "tchar",
    lower: "tchar",
    index: 16,
    isBkr: !1
  }, this.rules[17] = {
    name: "CHAR",
    lower: "char",
    index: 17,
    isBkr: !1
  }, this.rules[18] = {
    name: "CTL",
    lower: "ctl",
    index: 18,
    isBkr: !1
  }, this.rules[19] = {
    name: "separators",
    lower: "separators",
    index: 19,
    isBkr: !1
  }, this.rules[20] = {
    name: "SP",
    lower: "sp",
    index: 20,
    isBkr: !1
  }, this.rules[21] = {
    name: "HT",
    lower: "ht",
    index: 21,
    isBkr: !1
  }, this.rules[22] = {
    name: "ALPHA",
    lower: "alpha",
    index: 22,
    isBkr: !1
  }, this.rules[23] = {
    name: "DIGIT",
    lower: "digit",
    index: 23,
    isBkr: !1
  }, this.rules[24] = {
    name: "DQUOTE",
    lower: "dquote",
    index: 24,
    isBkr: !1
  }, this.rules[25] = {
    name: "WSP",
    lower: "wsp",
    index: 25,
    isBkr: !1
  }, this.rules[26] = {
    name: "HTAB",
    lower: "htab",
    index: 26,
    isBkr: !1
  }, this.rules[27] = {
    name: "CRLF",
    lower: "crlf",
    index: 27,
    isBkr: !1
  }, this.rules[28] = {
    name: "CR",
    lower: "cr",
    index: 28,
    isBkr: !1
  }, this.rules[29] = {
    name: "LF",
    lower: "lf",
    index: 29,
    isBkr: !1
  }, this.udts = [], this.rules[0].opcodes = [], this.rules[0].opcodes[0] = {
    type: 2,
    children: [1, 2]
  }, this.rules[0].opcodes[1] = {
    type: 4,
    index: 1
  }, this.rules[0].opcodes[2] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[0].opcodes[3] = {
    type: 2,
    children: [4, 5, 6]
  }, this.rules[0].opcodes[4] = {
    type: 7,
    string: [59]
  }, this.rules[0].opcodes[5] = {
    type: 4,
    index: 14
  }, this.rules[0].opcodes[6] = {
    type: 4,
    index: 1
  }, this.rules[1].opcodes = [], this.rules[1].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }, this.rules[1].opcodes[1] = {
    type: 4,
    index: 2
  }, this.rules[1].opcodes[2] = {
    type: 4,
    index: 3
  }, this.rules[2].opcodes = [], this.rules[2].opcodes[0] = {
    type: 2,
    children: [1, 2, 3, 4, 5, 6, 7]
  }, this.rules[2].opcodes[1] = {
    type: 4,
    index: 14
  }, this.rules[2].opcodes[2] = {
    type: 4,
    index: 4
  }, this.rules[2].opcodes[3] = {
    type: 4,
    index: 14
  }, this.rules[2].opcodes[4] = {
    type: 7,
    string: [61]
  }, this.rules[2].opcodes[5] = {
    type: 4,
    index: 14
  }, this.rules[2].opcodes[6] = {
    type: 4,
    index: 5
  }, this.rules[2].opcodes[7] = {
    type: 4,
    index: 14
  }, this.rules[3].opcodes = [], this.rules[3].opcodes[0] = {
    type: 2,
    children: [1, 2, 4]
  }, this.rules[3].opcodes[1] = {
    type: 4,
    index: 14
  }, this.rules[3].opcodes[2] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[3].opcodes[3] = {
    type: 4,
    index: 16
  }, this.rules[3].opcodes[4] = {
    type: 4,
    index: 14
  }, this.rules[4].opcodes = [], this.rules[4].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[4].opcodes[1] = {
    type: 1,
    children: [2, 3, 4]
  }, this.rules[4].opcodes[2] = {
    type: 5,
    min: 33,
    max: 58
  }, this.rules[4].opcodes[3] = {
    type: 6,
    string: [60]
  }, this.rules[4].opcodes[4] = {
    type: 5,
    min: 62,
    max: 126
  }, this.rules[5].opcodes = [], this.rules[5].opcodes[0] = {
    type: 1,
    children: [1, 6]
  }, this.rules[5].opcodes[1] = {
    type: 2,
    children: [2, 3]
  }, this.rules[5].opcodes[2] = {
    type: 4,
    index: 6
  }, this.rules[5].opcodes[3] = {
    type: 3,
    min: 0,
    max: 1
  }, this.rules[5].opcodes[4] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[5].opcodes[5] = {
    type: 4,
    index: 8
  }, this.rules[5].opcodes[6] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[5].opcodes[7] = {
    type: 4,
    index: 8
  }, this.rules[6].opcodes = [], this.rules[6].opcodes[0] = {
    type: 2,
    children: [1, 2, 4]
  }, this.rules[6].opcodes[1] = {
    type: 4,
    index: 24
  }, this.rules[6].opcodes[2] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[6].opcodes[3] = {
    type: 4,
    index: 7
  }, this.rules[6].opcodes[4] = {
    type: 4,
    index: 24
  }, this.rules[7].opcodes = [], this.rules[7].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }, this.rules[7].opcodes[1] = {
    type: 5,
    min: 32,
    max: 33
  }, this.rules[7].opcodes[2] = {
    type: 5,
    min: 35,
    max: 126
  }, this.rules[8].opcodes = [], this.rules[8].opcodes[0] = {
    type: 1,
    children: [1, 2, 3]
  }, this.rules[8].opcodes[1] = {
    type: 5,
    min: 33,
    max: 43
  }, this.rules[8].opcodes[2] = {
    type: 5,
    min: 45,
    max: 58
  }, this.rules[8].opcodes[3] = {
    type: 5,
    min: 60,
    max: 126
  }, this.rules[9].opcodes = [], this.rules[9].opcodes[0] = {
    type: 2,
    children: [1, 2]
  }, this.rules[9].opcodes[1] = {
    type: 4,
    index: 10
  }, this.rules[9].opcodes[2] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[9].opcodes[3] = {
    type: 2,
    children: [4, 5, 6]
  }, this.rules[9].opcodes[4] = {
    type: 7,
    string: [59]
  }, this.rules[9].opcodes[5] = {
    type: 4,
    index: 20
  }, this.rules[9].opcodes[6] = {
    type: 4,
    index: 10
  }, this.rules[10].opcodes = [], this.rules[10].opcodes[0] = {
    type: 2,
    children: [1, 2, 3]
  }, this.rules[10].opcodes[1] = {
    type: 4,
    index: 11
  }, this.rules[10].opcodes[2] = {
    type: 7,
    string: [61]
  }, this.rules[10].opcodes[3] = {
    type: 4,
    index: 12
  }, this.rules[11].opcodes = [], this.rules[11].opcodes[0] = {
    type: 4,
    index: 15
  }, this.rules[12].opcodes = [], this.rules[12].opcodes[0] = {
    type: 1,
    children: [1, 6]
  }, this.rules[12].opcodes[1] = {
    type: 2,
    children: [2, 3, 5]
  }, this.rules[12].opcodes[2] = {
    type: 4,
    index: 24
  }, this.rules[12].opcodes[3] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[12].opcodes[4] = {
    type: 4,
    index: 13
  }, this.rules[12].opcodes[5] = {
    type: 4,
    index: 24
  }, this.rules[12].opcodes[6] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[12].opcodes[7] = {
    type: 4,
    index: 13
  }, this.rules[13].opcodes = [], this.rules[13].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5]
  }, this.rules[13].opcodes[1] = {
    type: 6,
    string: [33]
  }, this.rules[13].opcodes[2] = {
    type: 5,
    min: 35,
    max: 43
  }, this.rules[13].opcodes[3] = {
    type: 5,
    min: 45,
    max: 58
  }, this.rules[13].opcodes[4] = {
    type: 5,
    min: 60,
    max: 91
  }, this.rules[13].opcodes[5] = {
    type: 5,
    min: 93,
    max: 126
  }, this.rules[14].opcodes = [], this.rules[14].opcodes[0] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[14].opcodes[1] = {
    type: 2,
    children: [2, 4]
  }, this.rules[14].opcodes[2] = {
    type: 3,
    min: 0,
    max: 1
  }, this.rules[14].opcodes[3] = {
    type: 4,
    index: 27
  }, this.rules[14].opcodes[4] = {
    type: 4,
    index: 25
  }, this.rules[15].opcodes = [], this.rules[15].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[15].opcodes[1] = {
    type: 4,
    index: 16
  }, this.rules[16].opcodes = [], this.rules[16].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  }, this.rules[16].opcodes[1] = {
    type: 7,
    string: [33]
  }, this.rules[16].opcodes[2] = {
    type: 7,
    string: [35]
  }, this.rules[16].opcodes[3] = {
    type: 7,
    string: [36]
  }, this.rules[16].opcodes[4] = {
    type: 7,
    string: [37]
  }, this.rules[16].opcodes[5] = {
    type: 7,
    string: [38]
  }, this.rules[16].opcodes[6] = {
    type: 7,
    string: [39]
  }, this.rules[16].opcodes[7] = {
    type: 7,
    string: [42]
  }, this.rules[16].opcodes[8] = {
    type: 7,
    string: [43]
  }, this.rules[16].opcodes[9] = {
    type: 7,
    string: [45]
  }, this.rules[16].opcodes[10] = {
    type: 7,
    string: [46]
  }, this.rules[16].opcodes[11] = {
    type: 7,
    string: [94]
  }, this.rules[16].opcodes[12] = {
    type: 7,
    string: [95]
  }, this.rules[16].opcodes[13] = {
    type: 7,
    string: [96]
  }, this.rules[16].opcodes[14] = {
    type: 7,
    string: [124]
  }, this.rules[16].opcodes[15] = {
    type: 7,
    string: [126]
  }, this.rules[16].opcodes[16] = {
    type: 4,
    index: 23
  }, this.rules[16].opcodes[17] = {
    type: 4,
    index: 22
  }, this.rules[17].opcodes = [], this.rules[17].opcodes[0] = {
    type: 5,
    min: 1,
    max: 127
  }, this.rules[18].opcodes = [], this.rules[18].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }, this.rules[18].opcodes[1] = {
    type: 5,
    min: 0,
    max: 31
  }, this.rules[18].opcodes[2] = {
    type: 6,
    string: [127]
  }, this.rules[19].opcodes = [], this.rules[19].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  }, this.rules[19].opcodes[1] = {
    type: 7,
    string: [40]
  }, this.rules[19].opcodes[2] = {
    type: 7,
    string: [41]
  }, this.rules[19].opcodes[3] = {
    type: 7,
    string: [60]
  }, this.rules[19].opcodes[4] = {
    type: 7,
    string: [62]
  }, this.rules[19].opcodes[5] = {
    type: 7,
    string: [64]
  }, this.rules[19].opcodes[6] = {
    type: 7,
    string: [44]
  }, this.rules[19].opcodes[7] = {
    type: 7,
    string: [59]
  }, this.rules[19].opcodes[8] = {
    type: 7,
    string: [58]
  }, this.rules[19].opcodes[9] = {
    type: 7,
    string: [92]
  }, this.rules[19].opcodes[10] = {
    type: 6,
    string: [34]
  }, this.rules[19].opcodes[11] = {
    type: 7,
    string: [47]
  }, this.rules[19].opcodes[12] = {
    type: 7,
    string: [91]
  }, this.rules[19].opcodes[13] = {
    type: 7,
    string: [93]
  }, this.rules[19].opcodes[14] = {
    type: 7,
    string: [63]
  }, this.rules[19].opcodes[15] = {
    type: 7,
    string: [61]
  }, this.rules[19].opcodes[16] = {
    type: 7,
    string: [123]
  }, this.rules[19].opcodes[17] = {
    type: 7,
    string: [125]
  }, this.rules[19].opcodes[18] = {
    type: 4,
    index: 20
  }, this.rules[19].opcodes[19] = {
    type: 4,
    index: 21
  }, this.rules[20].opcodes = [], this.rules[20].opcodes[0] = {
    type: 6,
    string: [32]
  }, this.rules[21].opcodes = [], this.rules[21].opcodes[0] = {
    type: 6,
    string: [9]
  }, this.rules[22].opcodes = [], this.rules[22].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }, this.rules[22].opcodes[1] = {
    type: 5,
    min: 65,
    max: 90
  }, this.rules[22].opcodes[2] = {
    type: 5,
    min: 97,
    max: 122
  }, this.rules[23].opcodes = [], this.rules[23].opcodes[0] = {
    type: 5,
    min: 48,
    max: 57
  }, this.rules[24].opcodes = [], this.rules[24].opcodes[0] = {
    type: 6,
    string: [34]
  }, this.rules[25].opcodes = [], this.rules[25].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }, this.rules[25].opcodes[1] = {
    type: 4,
    index: 20
  }, this.rules[25].opcodes[2] = {
    type: 4,
    index: 26
  }, this.rules[26].opcodes = [], this.rules[26].opcodes[0] = {
    type: 6,
    string: [9]
  }, this.rules[27].opcodes = [], this.rules[27].opcodes[0] = {
    type: 2,
    children: [1, 2]
  }, this.rules[27].opcodes[1] = {
    type: 4,
    index: 28
  }, this.rules[27].opcodes[2] = {
    type: 4,
    index: 29
  }, this.rules[28].opcodes = [], this.rules[28].opcodes[0] = {
    type: 6,
    string: [13]
  }, this.rules[29].opcodes = [], this.rules[29].opcodes[0] = {
    type: 6,
    string: [10]
  }, this.toString = function() {
    let e = "";
    return e += `; Lenient version of https://datatracker.ietf.org/doc/html/rfc6265#section-4.2.1
`, e += `lenient-cookie-string        = lenient-cookie-entry *( ";" OWS lenient-cookie-entry )
`, e += `lenient-cookie-entry         = lenient-cookie-pair / lenient-cookie-pair-invalid
`, e += `lenient-cookie-pair          = OWS lenient-cookie-name OWS "=" OWS lenient-cookie-value OWS
`, e += `lenient-cookie-pair-invalid  = OWS 1*tchar OWS ; Allow for standalone entries like "fizz" to be ignored
`, e += `lenient-cookie-name          = 1*( %x21-3A / %x3C / %x3E-7E ) ; Allow all printable US-ASCII except "="
`, e += `lenient-cookie-value         = lenient-quoted-value [ *lenient-cookie-octet ] / *lenient-cookie-octet
`, e += `lenient-quoted-value         = DQUOTE *( lenient-quoted-char ) DQUOTE
`, e += `lenient-quoted-char          = %x20-21 / %x23-7E ; Allow all printable US-ASCII except DQUOTE
`, e += `lenient-cookie-octet         = %x21-2B / %x2D-3A / %x3C-7E
`, e += `                             ; Allow all printable characters except CTLs, semicolon and SP
`, e += `
`, e += `; https://datatracker.ietf.org/doc/html/rfc6265#section-4.2.1
`, e += `cookie-string     = cookie-pair *( ";" SP cookie-pair )
`, e += `
`, e += `; https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
`, e += `; https://www.rfc-editor.org/errata/eid5518
`, e += `cookie-pair       = cookie-name "=" cookie-value
`, e += `cookie-name       = token
`, e += `cookie-value      = ( DQUOTE *cookie-octet DQUOTE ) / *cookie-octet
`, e += `                  ; https://www.rfc-editor.org/errata/eid8242
`, e += `cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
`, e += `                       ; US-ASCII characters excluding CTLs,
`, e += `                       ; whitespace, DQUOTE, comma, semicolon,
`, e += `                       ; and backslash
`, e += `
`, e += `; https://datatracker.ietf.org/doc/html/rfc6265#section-2.2
`, e += `OWS            = *( [ CRLF ] WSP ) ; "optional" whitespace
`, e += `
`, e += `; https://datatracker.ietf.org/doc/html/rfc9110#section-5.6.2
`, e += `token          = 1*(tchar)
`, e += `tchar          = "!" / "#" / "$" / "%" / "&" / "'" / "*"
`, e += '                 / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"\n', e += `                 / DIGIT / ALPHA
`, e += `                 ; any VCHAR, except delimiters
`, e += `
`, e += `; https://datatracker.ietf.org/doc/html/rfc2616#section-2.2
`, e += `CHAR           = %x01-7F ; any US-ASCII character (octets 0 - 127)
`, e += `CTL            = %x00-1F / %x7F ; any US-ASCII control character
`, e += `separators     = "(" / ")" / "<" / ">" / "@" / "," / ";" / ":" / "\\" / %x22 / "/" / "[" / "]" / "?" / "=" / "{" / "}" / SP / HT
`, e += `SP             = %x20 ; US-ASCII SP, space (32)
`, e += `HT             = %x09 ; US-ASCII HT, horizontal-tab (9)
`, e += `
`, e += `; https://datatracker.ietf.org/doc/html/rfc5234#appendix-B.1
`, e += `ALPHA          =  %x41-5A / %x61-7A ; A-Z / a-z
`, e += `DIGIT          =  %x30-39 ; 0-9
`, e += `DQUOTE         =  %x22 ; " (Double Quote)
`, e += `WSP            =  SP / HTAB ; white space
`, e += `HTAB           =  %x09 ; horizontal tab
`, e += `CRLF           =  CR LF ; Internet standard newline
`, e += `CR             =  %x0D ; carriage return
`, e += `LF             =  %x0A ; linefeed
`, e;
  };
}
new oi();
const l6 = (t) => {
  if (typeof t != "string" || [...t].length !== 1)
    throw new TypeError("Input must be a single character string.");
  const e = t.codePointAt(0);
  return e <= 127 ? `%${e.toString(16).toUpperCase().padStart(2, "0")}` : encodeURIComponent(t);
}, u6 = (t) => t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, ""), cc = (t) => t.length >= 2 && t.startsWith('"') && t.endsWith('"'), Jb = (t) => cc(t) ? t.slice(1, -1) : t, Hb = (t) => `"${t}"`, qb = (t) => t, f6 = new qr(), p6 = new oi(), up = (t, {
  strict: e = !0,
  quoted: r = null
} = {}) => {
  try {
    const s = e ? "cookie-value" : "lenient-cookie-value", n = f6.parse(p6, s, t);
    return typeof r == "boolean" ? n.success && r === cc(t) : n.success;
  } catch {
    return !1;
  }
}, zb = (t) => {
  const r = new TextEncoder().encode(t).reduce((s, n) => s + String.fromCharCode(n), "");
  return btoa(r);
}, h6 = (t, e = zb) => {
  const r = String(t);
  if (up(r)) return r;
  const s = cc(r), n = s ? Jb(r) : r, i = e(n);
  return s ? Hb(i) : i;
}, d6 = (t) => u6(zb(t)), m6 = (t) => h6(t, d6), v6 = new qr(), y6 = new oi(), Gb = (t, {
  strict: e = !0
} = {}) => {
  try {
    const r = e ? "cookie-name" : "lenient-cookie-name";
    return v6.parse(y6, r, t).success;
  } catch {
    return !1;
  }
}, g6 = (t) => {
  if (!Gb(t))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, Kb = (t) => {
  if (!up(t))
    throw new TypeError(`Invalid cookie value: ${t}`);
}, Qc = {
  encoders: {
    name: qb,
    value: m6
  },
  validators: {
    name: g6,
    value: Kb
  }
}, b6 = (t, e, r = {}) => {
  const s = {
    ...Qc,
    ...r,
    encoders: {
      ...Qc.encoders,
      ...r.encoders
    },
    validators: {
      ...Qc.validators,
      ...r.validators
    }
  }, n = s.encoders.name(t), i = s.encoders.value(e);
  return s.validators.name(n), s.validators.value(i), `${n}=${i}`;
}, x6 = (t, e = {}) => (Array.isArray(t) ? t : typeof t == "object" && t !== null ? Object.entries(t) : []).map(([s, n]) => b6(s, n, e)).join("; "), S6 = new qr(), w6 = new oi(), O6 = (t) => {
  const e = String(t);
  if (up(e)) return e;
  const r = cc(e), s = r ? Jb(e) : e;
  let n = "";
  for (const i of s)
    n += S6.parse(w6, "cookie-octet", i).success ? i : l6(i);
  return r ? Hb(n) : n;
};
new qr();
new oi();
const E6 = (t) => {
  if (!Gb(t, {
    strict: !1
  }))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, $6 = "%3D", A6 = "%26", j6 = (t) => O6(t).replace(/[=&]/gu, (e) => e === "=" ? $6 : A6), Ou = (t, e = {}) => x6(t, oa({
  encoders: {
    name: qb,
    value: j6
  },
  validators: {
    name: E6,
    value: Kb
  }
}, e));
function P6({
  req: t,
  value: e,
  parameter: r,
  baseURL: s
}) {
  const {
    name: n,
    style: i,
    explode: o,
    content: a
  } = r;
  if (e === void 0) return;
  const c = t.url.replace(s, "");
  let l;
  if (a) {
    const p = Object.keys(a)[0];
    l = wu(c, {
      [n]: e
    }, {
      encoder: (f) => Gd(ac(f, p))
    });
  } else
    l = wu(c, {
      [n]: e
    }, {
      encoder: (p) => Au({
        key: r.name,
        value: p,
        style: i || "simple",
        explode: o ?? !1,
        escape: "reserved"
      })
    });
  t.url = s + l;
}
function T6({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const s = Object.keys(r.content)[0], n = ac(e, s);
    if (n)
      t.query[r.name] = n;
    else if (r.allowEmptyValue) {
      const i = r.name;
      t.query[i] = t.query[i] || {}, t.query[i].allowEmptyValue = !0;
    }
    return;
  }
  if (e === !1 && (e = "false"), e === 0 && (e = "0"), e) {
    const {
      style: s,
      explode: n,
      allowReserved: i
    } = r;
    t.query[r.name] = {
      value: e,
      serializationOption: {
        style: s,
        explode: n,
        allowReserved: i
      }
    };
  } else if (r.allowEmptyValue && e !== void 0) {
    const s = r.name;
    t.query[s] = t.query[s] || {}, t.query[s].allowEmptyValue = !0;
  }
}
const _6 = ["accept", "authorization", "content-type"];
function C6({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(_6.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const s = Object.keys(e.content)[0];
      t.headers[e.name] = ac(r, s);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = Au({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function R6({
  req: t,
  parameter: e,
  value: r
}) {
  const {
    name: s
  } = e;
  if (t.headers = t.headers || {}, r !== void 0 && e.content) {
    const i = Object.keys(e.content)[0], o = ac(r, i);
    t.headers.Cookie = Ou({
      [s]: o
    });
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    var n;
    const i = Au({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: (n = e.explode) !== null && n !== void 0 ? n : !1
    }), o = Array.isArray(r) && e.explode ? `${s}=${i}` : i;
    t.headers.Cookie = Ou({
      [s]: o
    });
  }
}
const I6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: R6,
  header: C6,
  path: P6,
  query: T6
}, Symbol.toStringTag, { value: "Module" })), F6 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: Wb
} = F6;
function M6(t, e) {
  const {
    operation: r,
    requestBody: s,
    securities: n,
    spec: i,
    attachContentTypeForEmptyPayload: o
  } = t;
  let {
    requestContentType: a
  } = t;
  e = k6({
    request: e,
    securities: n,
    operation: r,
    spec: i
  });
  const c = r.requestBody || {}, l = Object.keys(c.content || {}), p = a && l.indexOf(a) > -1;
  if (s || o) {
    if (a && p)
      e.headers["Content-Type"] = a;
    else if (!a) {
      const h = l[0];
      h && (e.headers["Content-Type"] = h, a = h);
    }
  } else a && p && (e.headers["Content-Type"] = a);
  if (!t.responseContentType && r.responses) {
    const h = Object.entries(r.responses).filter(([y, g]) => {
      const v = parseInt(y, 10);
      return v >= 200 && v < 300 && Vt(g.content);
    }).reduce((y, [, g]) => y.concat(Object.keys(g.content)), []);
    h.length > 0 && (e.headers.accept = h.join(", "));
  }
  if (s)
    if (a) {
      if (l.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof s == "object") {
            var f, d;
            const h = (f = (d = c.content[a]) === null || d === void 0 ? void 0 : d.encoding) !== null && f !== void 0 ? f : {};
            e.form = {}, Object.keys(s).forEach((y) => {
              let g;
              try {
                g = JSON.parse(s[y]);
              } catch {
                g = s[y];
              }
              e.form[y] = {
                value: g,
                encoding: h[y] || {}
              };
            });
          } else if (typeof s == "string") {
            var u, m;
            const h = (u = (m = c.content[a]) === null || m === void 0 ? void 0 : m.encoding) !== null && u !== void 0 ? u : {};
            try {
              e.form = {};
              const y = JSON.parse(s);
              Object.entries(y).forEach(([g, v]) => {
                e.form[g] = {
                  value: v,
                  encoding: h[g] || {}
                };
              });
            } catch {
              e.form = s;
            }
          } else
            e.form = s;
        else
          e.body = s;
    } else
      e.body = s;
  return e;
}
function k6({
  request: t,
  securities: e = {},
  operation: r = {},
  spec: s
}) {
  var n;
  const i = {
    ...t
  }, {
    authorized: o = {}
  } = e, a = r.security || s.security || [], c = o && !!Object.keys(o).length, l = (s == null || (n = s.components) === null || n === void 0 ? void 0 : n.securitySchemes) || {};
  return i.headers = i.headers || {}, i.query = i.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((p) => {
    Object.keys(p).forEach((f) => {
      const d = o[f], u = l[f];
      if (!d)
        return;
      const m = d.value || d, {
        type: h
      } = u;
      if (d) {
        if (h === "apiKey")
          u.in === "query" && (i.query[u.name] = m), u.in === "header" && (i.headers[u.name] = m), u.in === "cookie" && (i.cookies[u.name] = m);
        else if (h === "http") {
          if (/^basic$/i.test(u.scheme)) {
            const y = m.username || "", g = m.password || "", v = Wb(`${y}:${g}`);
            i.headers.Authorization = `Basic ${v}`;
          }
          /^bearer$/i.test(u.scheme) && (i.headers.Authorization = `Bearer ${m}`);
        } else if (h === "oauth2" || h === "openIdConnect") {
          const y = d.token || {}, g = u["x-tokenName"] || "access_token", v = y[g];
          let b = y.token_type;
          (!b || b.toLowerCase() === "bearer") && (b = "Bearer"), i.headers.Authorization = `${b} ${v}`;
        }
      }
    });
  }), i);
}
function N6(t, e) {
  const {
    spec: r,
    operation: s,
    securities: n,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = D6({
    request: e,
    securities: n,
    operation: s,
    spec: r
  }), e.body || e.form || a)
    i ? e.headers["Content-Type"] = i : Array.isArray(s.consumes) ? [e.headers["Content-Type"]] = s.consumes : Array.isArray(r.consumes) ? [e.headers["Content-Type"]] = r.consumes : s.parameters && s.parameters.filter((c) => c.type === "file").length ? e.headers["Content-Type"] = "multipart/form-data" : s.parameters && s.parameters.filter((c) => c.in === "formData").length && (e.headers["Content-Type"] = "application/x-www-form-urlencoded");
  else if (i) {
    const c = s.parameters && s.parameters.filter((p) => p.in === "body").length > 0, l = s.parameters && s.parameters.filter((p) => p.in === "formData").length > 0;
    (c || l) && (e.headers["Content-Type"] = i);
  }
  return !o && Array.isArray(s.produces) && s.produces.length > 0 && (e.headers.accept = s.produces.join(", ")), e;
}
function D6({
  request: t,
  securities: e = {},
  operation: r = {},
  spec: s
}) {
  const n = {
    ...t
  }, {
    authorized: i = {},
    specSecurity: o = []
  } = e, a = r.security || o, c = i && !!Object.keys(i).length, l = s.securityDefinitions;
  return n.headers = n.headers || {}, n.query = n.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((p) => {
    Object.keys(p).forEach((f) => {
      const d = i[f];
      if (!d)
        return;
      const {
        token: u
      } = d, m = d.value || d, h = l[f], {
        type: y
      } = h, g = h["x-tokenName"] || "access_token", v = u && u[g];
      let b = u && u.token_type;
      if (d)
        if (y === "apiKey") {
          const O = h.in === "query" ? "query" : "headers";
          n[O] = n[O] || {}, n[O][h.name] = m;
        } else if (y === "basic")
          if (m.header)
            n.headers.authorization = m.header;
          else {
            const O = m.username || "", I = m.password || "";
            m.base64 = Wb(`${O}:${I}`), n.headers.authorization = `Basic ${m.base64}`;
          }
        else y === "oauth2" && v && (b = !b || b.toLowerCase() === "bearer" ? "Bearer" : b, n.headers.authorization = `${b} ${v}`);
    });
  }), n);
}
const Ud = (t) => Array.isArray(t) ? t : [], Ks = (t, {
  recurse: e = !0,
  depth: r = 1
} = {}) => {
  if (Vt(t)) {
    if (t.type === "object" || t.type === "array" || Array.isArray(t.type) && (t.type.includes("object") || t.type.includes("array")))
      return t;
    if (!(r > qd) && e) {
      const s = Array.isArray(t.oneOf) ? t.oneOf.find((i) => Ks(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (s) return s;
      const n = Array.isArray(t.anyOf) ? t.anyOf.find((i) => Ks(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (n) return n;
    }
  }
}, Zc = ({
  value: t,
  silentFail: e = !1
}) => {
  try {
    const r = JSON.parse(t);
    if (Vt(r) || Array.isArray(r))
      return r;
    if (!e)
      throw new Error("Expected JSON serialized object or array");
  } catch {
    if (!e)
      throw new Error("Could not parse parameter value string as JSON Object or JSON Array");
  }
  return t;
}, Ai = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, ji), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
    return {
      hash: e.hash,
      host: "",
      hostname: "",
      href: "",
      origin: "",
      password: "",
      pathname: r,
      port: "",
      protocol: "",
      search: e.search,
      searchParams: e.searchParams
    };
  }
};
class L6 extends pt {
}
const V6 = (t, e) => e.filter((r) => r.name === t), B6 = (t) => {
  const e = {};
  t.forEach((s) => {
    e[s.in] || (e[s.in] = {}), e[s.in][s.name] = s;
  });
  const r = [];
  return Object.keys(e).forEach((s) => {
    Object.keys(e[s]).forEach((n) => {
      r.push(e[s][n]);
    });
  }), r;
}, U6 = {
  buildRequest: Yb
};
function J6({
  http: t,
  fetch: e,
  // This is legacy
  spec: r,
  operationId: s,
  pathName: n,
  method: i,
  parameters: o,
  securities: a,
  ...c
}) {
  const l = t || e || us;
  n && i && !s && (s = Lb(n, i));
  const p = U6.buildRequest({
    spec: r,
    operationId: s,
    parameters: o,
    securities: a,
    http: l,
    ...c
  });
  return p.body && (Vt(p.body) || Array.isArray(p.body)) && (p.body = JSON.stringify(p.body)), l(p);
}
function Yb(t) {
  const {
    spec: e,
    operationId: r,
    responseContentType: s,
    scheme: n,
    requestInterceptor: i,
    responseInterceptor: o,
    contextUrl: a,
    userFetch: c,
    server: l,
    serverVariables: p,
    http: f,
    signal: d,
    serverVariableEncoder: u
  } = t;
  let {
    parameters: m,
    parameterBuilders: h,
    baseURL: y
  } = t;
  const g = Gf(e);
  h || (g ? h = I6 : h = s6);
  let b = {
    url: "",
    credentials: f && f.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  d && (b.signal = d), i && (b.requestInterceptor = i), o && (b.responseInterceptor = o), c && (b.userFetch = c);
  const O = T4(e, r);
  if (!O)
    throw new L6(`Operation ${r} not found`);
  const {
    operation: I = {},
    method: $,
    pathName: C
  } = O;
  if (y = y ?? Xb({
    spec: e,
    scheme: n,
    contextUrl: a,
    server: l,
    serverVariables: p,
    pathName: C,
    method: $,
    serverVariableEncoder: u
  }), b.url += y, !r)
    return delete b.cookies, b;
  b.url += C, b.method = `${$}`.toUpperCase(), m = m || {};
  const D = e.paths[C] || {};
  s && (b.headers.accept = s);
  const A = B6([].concat(Ud(I.parameters)).concat(Ud(D.parameters)));
  A.forEach((w) => {
    const j = h[w.in];
    let T;
    if (w.in === "body" && w.schema && w.schema.properties && (T = m), T = w && w.name && m[w.name], typeof T > "u" ? T = w && w.name && m[`${w.in}.${w.name}`] : V6(w.name, A).length > 1 && console.warn(`Parameter '${w.name}' is ambiguous because the defined spec has more than one parameter with the name: '${w.name}' and the passed-in parameter values did not define an 'in' value.`), T !== null) {
      if (typeof w.default < "u" && typeof T > "u" && (T = w.default), typeof T > "u" && w.required && !w.allowEmptyValue)
        throw new Error(`Required parameter ${w.name} is not provided`);
      g && typeof T == "string" && (qs("type", w.schema) && typeof w.schema.type == "string" && Ks(w.schema, {
        recurse: !1
      }) ? T = Zc({
        value: T,
        silentFail: !1
      }) : qs("type", w.schema) && Array.isArray(w.schema.type) && Ks(w.schema, {
        recurse: !1
      }) ? T = Zc({
        value: T,
        silentFail: !0
      }) : !qs("type", w.schema) && Ks(w.schema, {
        recurse: !0
      }) && (T = Zc({
        value: T,
        silentFail: !0
      }))), j && j({
        req: b,
        parameter: w,
        value: T,
        operation: I,
        spec: e,
        baseURL: y
      });
    }
  });
  const q = {
    ...t,
    operation: I
  };
  if (g ? b = M6(q, b) : b = N6(q, b), b.cookies && Object.keys(b.cookies).length > 0) {
    const w = Ou(b.cookies);
    la(b.headers.Cookie) ? b.headers.Cookie += `; ${w}` : b.headers.Cookie = w;
  }
  return b.cookies && delete b.cookies, ju(b);
}
const Eu = (t) => t ? t.replace(/\W/g, "") : null;
function Xb(t) {
  return Gf(t.spec) ? H6(t) : z6(t);
}
const el = (t) => Array.isArray(t) && t.length > 0;
function H6({
  spec: t,
  pathName: e,
  method: r,
  server: s,
  contextUrl: n,
  serverVariables: i = {},
  serverVariableEncoder: o
}) {
  var a, c;
  let l = [], p = "", f;
  const d = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 || (a = a[(r || "").toLowerCase()]) === null || a === void 0 ? void 0 : a.servers, u = t == null || (c = t.paths) === null || c === void 0 || (c = c[e]) === null || c === void 0 ? void 0 : c.servers, m = t == null ? void 0 : t.servers;
  if (l = el(d) ? d : el(u) ? u : el(m) ? m : [Hd], s && (f = l.find((h) => h.url === s), f && (p = s)), p || ([f] = l, p = f.url), U4(p, {
    strict: !0
  })) {
    const h = Object.entries({
      ...f.variables
    }).reduce((y, [g, v]) => (y[g] = v.default, y), {});
    p = z4(p, {
      ...h,
      ...i
    }, {
      encoder: typeof o == "function" ? o : gf
    });
  }
  return q6(p, n);
}
function q6(t = "", e = "") {
  const r = Ai(t && e ? _e(e, t) : t), s = Ai(e), n = Eu(r.protocol) || Eu(s.protocol), i = r.host || s.host, o = r.pathname;
  let a;
  return n && i ? a = `${n}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function z6({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const s = Ai(r), n = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || n || Eu(s.protocol) || "http", o = t.host || s.host || "", a = t.basePath || "";
  let c;
  return i && o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
ie.http = us;
ie.makeHttp = Nw.bind(null, ie.http);
ie.resolveStrategies = {
  "openapi-3-1-apidom": j4,
  "openapi-3-0": Gg,
  "openapi-2-0": zg,
  generic: Jg
};
ie.resolve = Kg({
  strategies: [ie.resolveStrategies["openapi-3-1-apidom"], ie.resolveStrategies["openapi-3-0"], ie.resolveStrategies["openapi-2-0"], ie.resolveStrategies.generic]
});
ie.resolveSubtree = zD({
  strategies: [ie.resolveStrategies["openapi-3-1-apidom"], ie.resolveStrategies["openapi-3-0"], ie.resolveStrategies["openapi-2-0"], ie.resolveStrategies.generic]
});
ie.execute = J6;
ie.serializeRes = Nm;
ie.serializeHeaders = km;
ie.clearCache = VD;
ie.makeApisTagOperation = F4;
ie.buildRequest = Yb;
ie.helpers = {
  opId: An
};
ie.getBaseUrl = Xb;
ie.apidom = {
  resolve: {
    resolvers: {
      HTTPResolverSwaggerClient: Cb
    }
  },
  parse: {
    parsers: {
      JsonParser: Rb,
      YamlParser: Ib,
      OpenApiJson3_1Parser: Fb,
      OpenApiYaml3_1Parser: Mb
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: Nb
    }
  }
};
function ie(t, e = {}) {
  if (typeof t == "string" ? e.url = t : e = t, !(this instanceof ie))
    return new ie(e);
  Object.assign(this, e);
  const r = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, ie.makeApisTagOperation(this)), this));
  return r.client = this, r;
}
ie.prototype = {
  http: us,
  execute(t) {
    return this.applyDefaults(), ie.execute({
      spec: this.spec,
      http: this.http,
      securities: {
        authorized: this.authorizations
      },
      contextUrl: typeof this.url == "string" ? this.url : void 0,
      requestInterceptor: this.requestInterceptor || null,
      responseInterceptor: this.responseInterceptor || null,
      ...t
    });
  },
  resolve(t = {}) {
    return ie.resolve({
      spec: this.spec,
      url: this.url,
      http: this.http || this.fetch,
      allowMetaPatches: this.allowMetaPatches,
      useCircularStructures: this.useCircularStructures,
      requestInterceptor: this.requestInterceptor || null,
      responseInterceptor: this.responseInterceptor || null,
      pathDiscriminator: this.pathDiscriminator || [],
      skipNormalization: this.skipNormalization || !1,
      ...t
    }).then((e) => (this.originalSpec = this.spec, this.spec = e.spec, this.errors = e.errors, this));
  }
};
ie.prototype.applyDefaults = function() {
  const {
    spec: e
  } = this, r = this.url;
  if (Hg(e) && _4(r)) {
    const s = new URL(r);
    e.host || (e.host = s.host), e.schemes || (e.schemes = [s.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (Gf(e)) {
    const s = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || s) && (e.servers = [Hd]);
  }
};
export {
  ie as S
};
