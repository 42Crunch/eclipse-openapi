var tb = Object.defineProperty;
var Bf = (t) => {
  throw TypeError(t);
};
var rb = (t, e, r) => e in t ? tb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var b = (t, e, r) => rb(t, typeof e != "symbol" ? e + "" : e, r), Uf = (t, e, r) => e.has(t) || Bf("Cannot " + r);
var Va = (t, e, r) => (Uf(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Hf = (t, e, r) => e.has(t) ? Bf("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ba = (t, e, r, n) => (Uf(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import { o as Eo, N as Yt } from "./TriangleExclamation.Bx9Cjic4.js";
const wd = "application/json, application/yaml", ri = "https://swagger.io", Ed = Object.freeze({
  url: "/"
}), {
  fetch: nb,
  Response: sb,
  Headers: ib,
  Request: ob,
  FormData: ab,
  File: cb,
  Blob: lb
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = nb);
typeof globalThis.Headers > "u" && (globalThis.Headers = ib);
typeof globalThis.Request > "u" && (globalThis.Request = ob);
typeof globalThis.Response > "u" && (globalThis.Response = sb);
typeof globalThis.FormData > "u" && (globalThis.FormData = ab);
typeof globalThis.File > "u" && (globalThis.File = cb);
typeof globalThis.Blob > "u" && (globalThis.Blob = lb);
function Zl(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function $d(t, e) {
  return Array.isArray(t) && t.some((r) => Zl(r, e));
}
class _c extends File {
  constructor(e, r = "", n = {}) {
    super([e], r, n), this.data = e;
  }
  valueOf() {
    return this.data;
  }
  toString() {
    return this.valueOf();
  }
}
const ub = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, fb = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function Od(t, e = "reserved") {
  return [...t].map((r) => {
    if (fb(r) || ub(r) && e === "unsafe")
      return r;
    const n = new TextEncoder();
    return Array.from(n.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function eu(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? pb(t) : typeof e == "object" ? hb(t) : db(t);
}
function je(t, e = !1) {
  var r;
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && typeof t == "string" && t.length > 0 ? Od(t, e) : (r = t) !== null && r !== void 0 ? r : "";
}
function pb({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  if (r === "simple")
    return e.map((i) => je(i, s)).join(",");
  if (r === "label")
    return `.${e.map((i) => je(i, s)).join(".")}`;
  if (r === "matrix")
    return e.map((i) => je(i, s)).reduce((i, o) => !i || n ? `${i || ""};${t}=${o}` : `${i},${o}`, "");
  if (r === "form") {
    const i = n ? `&${t}=` : ",";
    return e.map((o) => je(o, s)).join(i);
  }
  if (r === "spaceDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => je(o, s)).join(` ${i}`);
  }
  if (r === "pipeDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => je(o, s)).join(`|${i}`);
  }
}
function hb({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  const i = Object.keys(e);
  if (r === "simple")
    return i.reduce((o, a) => {
      const c = je(e[a], s), l = n ? "=" : ",";
      return `${o ? `${o},` : ""}${a}${l}${c}`;
    }, "");
  if (r === "label")
    return i.reduce((o, a) => {
      const c = je(e[a], s), l = n ? "=" : ".";
      return `${o ? `${o}.` : "."}${a}${l}${c}`;
    }, "");
  if (r === "matrix" && n)
    return i.reduce((o, a) => {
      const c = je(e[a], s);
      return `${o ? `${o};` : ";"}${a}=${c}`;
    }, "");
  if (r === "matrix")
    return i.reduce((o, a) => {
      const c = je(e[a], s);
      return `${o ? `${o},` : `;${t}=`}${a},${c}`;
    }, "");
  if (r === "form")
    return i.reduce((o, a) => {
      const c = je(e[a], s);
      return `${o ? `${o}${n ? "&" : ","}` : ""}${a}${n ? "=" : ","}${c}`;
    }, "");
}
function db({
  key: t,
  value: e,
  style: r,
  escape: n
}) {
  if (r === "simple")
    return je(e, n);
  if (r === "label")
    return `.${je(e, n)}`;
  if (r === "matrix")
    return `;${t}=${je(e, n)}`;
  if (r === "form" || r === "deepObject")
    return je(e, n);
}
const mb = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, vb = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function Sd(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (p) => p.toString() : (p) => encodeURIComponent(p), l = c(t);
  if (typeof a > "u" && s)
    return [[l, ""]];
  if (Zl(a) || $d(a))
    return [[l, a]];
  if (i)
    return qf(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((p) => p !== "undefined")) {
      const {
        style: p,
        explode: f,
        allowReserved: d
      } = o;
      return qf(t, a, r, {
        style: p,
        explode: f,
        allowReserved: d
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const d = typeof a == "string" ? a : JSON.stringify(a), u = c(d), m = new _c(u, "blob", {
          type: o.contentType
        });
        return [[l, m]];
      }
      const p = c(String(a)), f = new _c(p, "blob", {
        type: o.contentType
      });
      return [[l, f]];
    }
    return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) && a.every((p) => typeof p != "object") ? [[l, a.map(c).join(",")]] : [[l, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) ? n === "multi" ? [[l, a.map(c)]] : [[l, a.map(c).join(vb[n || "csv"])]] : [[l, ""]];
}
function qf(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (l) => je(l, o), c = r ? (l) => l : (l) => a(l);
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(mb[s])]] : s === "deepObject" ? Object.keys(e).map((l) => [c(`${t}[${l}]`), a(e[l])]) : i ? Object.keys(e).map((l) => [c(l), a(e[l])]) : [[c(t), Object.keys(e).map((l) => [`${c(l)},${a(e[l])}`]).join(",")]];
}
function yb(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of Sd(r, n, !0))
      if (Array.isArray(i))
        for (const o of i)
          if (ArrayBuffer.isView(o)) {
            const a = new Blob([o]);
            e.append(s, a);
          } else
            e.append(s, o);
      else if (ArrayBuffer.isView(i)) {
        const o = new Blob([i]);
        e.append(s, o);
      } else
        e.append(s, i);
    return e;
  }, new FormData());
}
const gb = (t, {
  encode: e = !0
} = {}) => {
  const r = (i, o, a) => (Array.isArray(a) ? a.reduce((c, l) => r(i, o, l), i) : a instanceof Date ? i.append(o, a.toISOString()) : typeof a == "object" ? Object.entries(a).reduce((c, [l, p]) => r(i, `${o}[${l}]`, p), i) : i.append(o, a), i), n = Object.entries(t).reduce((i, [o, a]) => r(i, o, a), new URLSearchParams()), s = String(n);
  return e ? s : decodeURIComponent(s);
};
function zf(t) {
  const e = Object.keys(t).reduce((r, n) => {
    for (const [s, i] of Sd(n, t[n]))
      i instanceof _c ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return gb(e, {
    encode: !1
  });
}
function tu(t = {}) {
  const {
    url: e = "",
    query: r,
    form: n
  } = t, s = (...i) => {
    const o = i.filter((a) => a).join("&");
    return o ? `?${o}` : "";
  };
  if (n) {
    const i = Object.keys(n).some((a) => {
      const {
        value: c
      } = n[a];
      return Zl(c) || $d(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = yb(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = zf(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const l = new URLSearchParams(o);
      Object.keys(r).forEach((f) => l.delete(f)), a = String(l);
    }
    const c = s(a, zf(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Ad(t) {
  return typeof t > "u" || t === null;
}
function bb(t) {
  return typeof t == "object" && t !== null;
}
function xb(t) {
  return Array.isArray(t) ? t : Ad(t) ? [] : [t];
}
function wb(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function Eb(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function $b(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var Ob = Ad, Sb = bb, Ab = xb, Pb = Eb, jb = $b, Tb = wb, $e = {
  isNothing: Ob,
  isObject: Sb,
  toArray: Ab,
  repeat: Pb,
  isNegativeZero: jb,
  extend: Tb
};
function Pd(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function In(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Pd(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
In.prototype = Object.create(Error.prototype);
In.prototype.constructor = In;
In.prototype.toString = function(e) {
  return this.name + ": " + Pd(this, e);
};
var De = In;
function Ua(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function Ha(t, e) {
  return $e.repeat(" ", e - t.length) + t;
}
function _b(t, e) {
  if (e = Object.create(e || null), !t.buffer) return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, l, p = Math.min(t.line + e.linesAfter, s.length).toString().length, f = e.maxLength - (e.indent + p + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    l = Ua(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      f
    ), a = $e.repeat(" ", e.indent) + Ha((t.line - c + 1).toString(), p) + " | " + l.str + `
` + a;
  for (l = Ua(t.buffer, n[o], s[o], t.position, f), a += $e.repeat(" ", e.indent) + Ha((t.line + 1).toString(), p) + " | " + l.str + `
`, a += $e.repeat("-", e.indent + p + 3 + l.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    l = Ua(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      f
    ), a += $e.repeat(" ", e.indent) + Ha((t.line + c + 1).toString(), p) + " | " + l.str + `
`;
  return a.replace(/\n$/, "");
}
var Cb = _b, Rb = [
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
], Ib = [
  "scalar",
  "sequence",
  "mapping"
];
function Mb(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(n) {
      e[String(n)] = r;
    });
  }), e;
}
function Fb(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (Rb.indexOf(r) === -1)
      throw new De('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = Mb(e.styleAliases || null), Ib.indexOf(this.kind) === -1)
    throw new De('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Te = Fb;
function Gf(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function kb() {
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
  function n(s) {
    s.multi ? (t.multi[s.kind].push(s), t.multi.fallback.push(s)) : t[s.kind][s.tag] = t.fallback[s.tag] = s;
  }
  for (e = 0, r = arguments.length; e < r; e += 1)
    arguments[e].forEach(n);
  return t;
}
function Cc(t) {
  return this.extend(t);
}
Cc.prototype.extend = function(e) {
  var r = [], n = [];
  if (e instanceof Te)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  else
    throw new De("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof Te))
      throw new De("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new De("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new De("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(i) {
    if (!(i instanceof Te))
      throw new De("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(Cc.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = Gf(s, "implicit"), s.compiledExplicit = Gf(s, "explicit"), s.compiledTypeMap = kb(s.compiledImplicit, s.compiledExplicit), s;
};
var jd = Cc, Td = new Te("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), _d = new Te("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), Cd = new Te("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), Rd = new jd({
  explicit: [
    Td,
    _d,
    Cd
  ]
});
function Db(t) {
  if (t === null) return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function Nb() {
  return null;
}
function Lb(t) {
  return t === null;
}
var Id = new Te("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Db,
  construct: Nb,
  predicate: Lb,
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
function Vb(t) {
  if (t === null) return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function Bb(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function Ub(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var Md = new Te("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Vb,
  construct: Bb,
  predicate: Ub,
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
function Hb(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function qb(t) {
  return 48 <= t && t <= 55;
}
function zb(t) {
  return 48 <= t && t <= 57;
}
function Gb(t) {
  if (t === null) return !1;
  var e = t.length, r = 0, n = !1, s;
  if (!e) return !1;
  if (s = t[r], (s === "-" || s === "+") && (s = t[++r]), s === "0") {
    if (r + 1 === e) return !0;
    if (s = t[++r], s === "b") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (s !== "0" && s !== "1") return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "x") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!Hb(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!qb(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < e; r++)
    if (s = t[r], s !== "_") {
      if (!zb(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function Kb(t) {
  var e = t, r = 1, n;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), n = e[0], (n === "-" || n === "+") && (n === "-" && (r = -1), e = e.slice(1), n = e[0]), e === "0") return 0;
  if (n === "0") {
    if (e[1] === "b") return r * parseInt(e.slice(2), 2);
    if (e[1] === "x") return r * parseInt(e.slice(2), 16);
    if (e[1] === "o") return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function Jb(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !$e.isNegativeZero(t);
}
var Fd = new Te("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Gb,
  construct: Kb,
  predicate: Jb,
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
}), Wb = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Yb(t) {
  return !(t === null || !Wb.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function Xb(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var Qb = /^[-+]?[0-9]+e/;
function Zb(t, e) {
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
  else if ($e.isNegativeZero(t))
    return "-0.0";
  return r = t.toString(10), Qb.test(r) ? r.replace("e", ".e") : r;
}
function ex(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || $e.isNegativeZero(t));
}
var kd = new Te("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Yb,
  construct: Xb,
  predicate: ex,
  represent: Zb,
  defaultStyle: "lowercase"
}), Dd = Rd.extend({
  implicit: [
    Id,
    Md,
    Fd,
    kd
  ]
}), Nd = Dd, Ld = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Vd = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function tx(t) {
  return t === null ? !1 : Ld.exec(t) !== null || Vd.exec(t) !== null;
}
function rx(t) {
  var e, r, n, s, i, o, a, c = 0, l = null, p, f, d;
  if (e = Ld.exec(t), e === null && (e = Vd.exec(t)), e === null) throw new Error("Date resolve error");
  if (r = +e[1], n = +e[2] - 1, s = +e[3], !e[4])
    return new Date(Date.UTC(r, n, s));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (p = +e[10], f = +(e[11] || 0), l = (p * 60 + f) * 6e4, e[9] === "-" && (l = -l)), d = new Date(Date.UTC(r, n, s, i, o, a, c)), l && d.setTime(d.getTime() - l), d;
}
function nx(t) {
  return t.toISOString();
}
var Bd = new Te("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: tx,
  construct: rx,
  instanceOf: Date,
  represent: nx
});
function sx(t) {
  return t === "<<" || t === null;
}
var Ud = new Te("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: sx
}), ru = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function ix(t) {
  if (t === null) return !1;
  var e, r, n = 0, s = t.length, i = ru;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0) return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function ox(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = ru, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function ax(t) {
  var e = "", r = 0, n, s, i = t.length, o = ru;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function cx(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Hd = new Te("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: ix,
  construct: ox,
  predicate: cx,
  represent: ax
}), lx = Object.prototype.hasOwnProperty, ux = Object.prototype.toString;
function fx(t) {
  if (t === null) return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, ux.call(s) !== "[object Object]") return !1;
    for (i in s)
      if (lx.call(s, i))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (e.indexOf(i) === -1) e.push(i);
    else return !1;
  }
  return !0;
}
function px(t) {
  return t !== null ? t : [];
}
var qd = new Te("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: fx,
  construct: px
}), hx = Object.prototype.toString;
function dx(t) {
  if (t === null) return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], hx.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1)) return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function mx(t) {
  if (t === null) return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var zd = new Te("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: dx,
  construct: mx
}), vx = Object.prototype.hasOwnProperty;
function yx(t) {
  if (t === null) return !0;
  var e, r = t;
  for (e in r)
    if (vx.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function gx(t) {
  return t !== null ? t : {};
}
var Gd = new Te("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: yx,
  construct: gx
}), nu = Nd.extend({
  implicit: [
    Bd,
    Ud
  ],
  explicit: [
    Hd,
    qd,
    zd,
    Gd
  ]
}), Qt = Object.prototype.hasOwnProperty, ni = 1, Kd = 2, Jd = 3, si = 4, qa = 1, bx = 2, Kf = 3, xx = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, wx = /[\x85\u2028\u2029]/, Ex = /[,\[\]\{\}]/, Wd = /^(?:!|!!|![a-z\-]+!)$/i, Yd = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Jf(t) {
  return Object.prototype.toString.call(t);
}
function mt(t) {
  return t === 10 || t === 13;
}
function hr(t) {
  return t === 9 || t === 32;
}
function Ue(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Lr(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function $x(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function Ox(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function Sx(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function Wf(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function Ax(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var Xd = new Array(256), Qd = new Array(256);
for (var Ir = 0; Ir < 256; Ir++)
  Xd[Ir] = Wf(Ir) ? 1 : 0, Qd[Ir] = Wf(Ir);
function Px(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || nu, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Zd(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = Cb(r), new De(e, r);
}
function L(t, e) {
  throw Zd(t, e);
}
function ii(t, e) {
  t.onWarning && t.onWarning.call(null, Zd(t, e));
}
var Yf = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && L(e, "duplication of %YAML directive"), n.length !== 1 && L(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && L(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && L(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && ii(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && L(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], Wd.test(s) || L(e, "ill-formed tag handle (first argument) of the TAG directive"), Qt.call(e.tagMap, s) && L(e, 'there is a previously declared suffix for "' + s + '" tag handle'), Yd.test(i) || L(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      L(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function Xt(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || L(t, "expected valid JSON character");
    else xx.test(a) && L(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function Xf(t, e, r, n) {
  var s, i, o, a;
  for ($e.isObject(r) || L(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], Qt.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function Vr(t, e, r, n, s, i, o, a, c) {
  var l, p;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), l = 0, p = s.length; l < p; l += 1)
      Array.isArray(s[l]) && L(t, "nested arrays are not supported inside keys"), typeof s == "object" && Jf(s[l]) === "[object Object]" && (s[l] = "[object Object]");
  if (typeof s == "object" && Jf(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (l = 0, p = i.length; l < p; l += 1)
        Xf(t, e, i[l], r);
    else
      Xf(t, e, i, r);
  else
    !t.json && !Qt.call(r, s) && Qt.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, L(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function su(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : L(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function xe(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; hr(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (mt(s))
      for (su(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && ii(t, "deficient indentation"), n;
}
function $o(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || Ue(r)));
}
function iu(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += $e.repeat(`
`, e - 1));
}
function jx(t, e, r) {
  var n, s, i, o, a, c, l, p, f = t.kind, d = t.result, u;
  if (u = t.input.charCodeAt(t.position), Ue(u) || Lr(u) || u === 35 || u === 38 || u === 42 || u === 33 || u === 124 || u === 62 || u === 39 || u === 34 || u === 37 || u === 64 || u === 96 || (u === 63 || u === 45) && (s = t.input.charCodeAt(t.position + 1), Ue(s) || r && Lr(s)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; u !== 0; ) {
    if (u === 58) {
      if (s = t.input.charCodeAt(t.position + 1), Ue(s) || r && Lr(s))
        break;
    } else if (u === 35) {
      if (n = t.input.charCodeAt(t.position - 1), Ue(n))
        break;
    } else {
      if (t.position === t.lineStart && $o(t) || r && Lr(u))
        break;
      if (mt(u))
        if (c = t.line, l = t.lineStart, p = t.lineIndent, xe(t, !1, -1), t.lineIndent >= e) {
          a = !0, u = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = l, t.lineIndent = p;
          break;
        }
    }
    a && (Xt(t, i, o, !1), iu(t, t.line - c), i = o = t.position, a = !1), hr(u) || (o = t.position + 1), u = t.input.charCodeAt(++t.position);
  }
  return Xt(t, i, o, !1), t.result ? !0 : (t.kind = f, t.result = d, !1);
}
function Tx(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (Xt(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else mt(r) ? (Xt(t, n, s, !0), iu(t, xe(t, !1, e)), n = s = t.position) : t.position === t.lineStart && $o(t) ? L(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  L(t, "unexpected end of the stream within a single quoted scalar");
}
function _x(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return Xt(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (Xt(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), mt(a))
        xe(t, !1, e);
      else if (a < 256 && Xd[a])
        t.result += Qd[a], t.position++;
      else if ((o = Ox(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = $x(a)) >= 0 ? i = (i << 4) + o : L(t, "expected hexadecimal character");
        t.result += Ax(i), t.position++;
      } else
        L(t, "unknown escape sequence");
      r = n = t.position;
    } else mt(a) ? (Xt(t, r, n, !0), iu(t, xe(t, !1, e)), r = n = t.position) : t.position === t.lineStart && $o(t) ? L(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  L(t, "unexpected end of the stream within a double quoted scalar");
}
function Cx(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, l, p, f, d, u, m = /* @__PURE__ */ Object.create(null), h, y, g, v;
  if (v = t.input.charCodeAt(t.position), v === 91)
    p = 93, u = !1, a = [];
  else if (v === 123)
    p = 125, u = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), v = t.input.charCodeAt(++t.position); v !== 0; ) {
    if (xe(t, !0, e), v = t.input.charCodeAt(t.position), v === p)
      return t.position++, t.tag = o, t.anchor = c, t.kind = u ? "mapping" : "sequence", t.result = a, !0;
    r ? v === 44 && L(t, "expected the node content, but found ','") : L(t, "missed comma between flow collection entries"), y = h = g = null, f = d = !1, v === 63 && (l = t.input.charCodeAt(t.position + 1), Ue(l) && (f = d = !0, t.position++, xe(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, Jr(t, e, ni, !1, !0), y = t.tag, h = t.result, xe(t, !0, e), v = t.input.charCodeAt(t.position), (d || t.line === n) && v === 58 && (f = !0, v = t.input.charCodeAt(++t.position), xe(t, !0, e), Jr(t, e, ni, !1, !0), g = t.result), u ? Vr(t, a, m, y, h, g, n, s, i) : f ? a.push(Vr(t, null, m, y, h, g, n, s, i)) : a.push(h), xe(t, !0, e), v = t.input.charCodeAt(t.position), v === 44 ? (r = !0, v = t.input.charCodeAt(++t.position)) : r = !1;
  }
  L(t, "unexpected end of the stream within a flow collection");
}
function Rx(t, e) {
  var r, n, s = qa, i = !1, o = !1, a = e, c = 0, l = !1, p, f;
  if (f = t.input.charCodeAt(t.position), f === 124)
    n = !1;
  else if (f === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; f !== 0; )
    if (f = t.input.charCodeAt(++t.position), f === 43 || f === 45)
      qa === s ? s = f === 43 ? Kf : bx : L(t, "repeat of a chomping mode identifier");
    else if ((p = Sx(f)) >= 0)
      p === 0 ? L(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? L(t, "repeat of an indentation width identifier") : (a = e + p - 1, o = !0);
    else
      break;
  if (hr(f)) {
    do
      f = t.input.charCodeAt(++t.position);
    while (hr(f));
    if (f === 35)
      do
        f = t.input.charCodeAt(++t.position);
      while (!mt(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (su(t), t.lineIndent = 0, f = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && f === 32; )
      t.lineIndent++, f = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), mt(f)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === Kf ? t.result += $e.repeat(`
`, i ? 1 + c : c) : s === qa && i && (t.result += `
`);
      break;
    }
    for (n ? hr(f) ? (l = !0, t.result += $e.repeat(`
`, i ? 1 + c : c)) : l ? (l = !1, t.result += $e.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += $e.repeat(`
`, c) : t.result += $e.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !mt(f) && f !== 0; )
      f = t.input.charCodeAt(++t.position);
    Xt(t, r, t.position, !1);
  }
  return !0;
}
function Qf(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, L(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !Ue(o)))); ) {
    if (a = !0, t.position++, xe(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, Jr(t, e, Jd, !1, !0), i.push(t.result), xe(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      L(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function Ix(t, e, r) {
  var n, s, i, o, a, c, l = t.tag, p = t.anchor, f = {}, d = /* @__PURE__ */ Object.create(null), u = null, m = null, h = null, y = !1, g = !1, v;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = f), v = t.input.charCodeAt(t.position); v !== 0; ) {
    if (!y && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, L(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, (v === 63 || v === 58) && Ue(n))
      v === 63 ? (y && (Vr(t, f, d, u, m, null, o, a, c), u = m = h = null), g = !0, y = !0, s = !0) : y ? (y = !1, s = !0) : L(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, v = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !Jr(t, r, Kd, !1, !0))
        break;
      if (t.line === i) {
        for (v = t.input.charCodeAt(t.position); hr(v); )
          v = t.input.charCodeAt(++t.position);
        if (v === 58)
          v = t.input.charCodeAt(++t.position), Ue(v) || L(t, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Vr(t, f, d, u, m, null, o, a, c), u = m = h = null), g = !0, y = !1, s = !1, u = t.tag, m = t.result;
        else if (g)
          L(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = l, t.anchor = p, !0;
      } else if (g)
        L(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = l, t.anchor = p, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (y && (o = t.line, a = t.lineStart, c = t.position), Jr(t, e, si, !0, s) && (y ? m = t.result : h = t.result), y || (Vr(t, f, d, u, m, h, o, a, c), u = m = h = null), xe(t, !0, -1), v = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && v !== 0)
      L(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return y && Vr(t, f, d, u, m, null, o, a, c), g && (t.tag = l, t.anchor = p, t.kind = "mapping", t.result = f), g;
}
function Mx(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33) return !1;
  if (t.tag !== null && L(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : L(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Ue(o); )
      o === 33 && (n ? L(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), Wd.test(s) || L(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), Ex.test(i) && L(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !Yd.test(i) && L(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    L(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : Qt.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : L(t, 'undeclared tag handle "' + s + '"'), !0;
}
function Fx(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38) return !1;
  for (t.anchor !== null && L(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !Ue(r) && !Lr(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && L(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function kx(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42) return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !Ue(n) && !Lr(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && L(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), Qt.call(t.anchorMap, r) || L(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], xe(t, !0, -1), !0;
}
function Jr(t, e, r, n, s) {
  var i, o, a, c = 1, l = !1, p = !1, f, d, u, m, h, y;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = si === r || Jd === r, n && xe(t, !0, -1) && (l = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; Mx(t) || Fx(t); )
      xe(t, !0, -1) ? (l = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = l || s), (c === 1 || si === r) && (ni === r || Kd === r ? h = e : h = e + 1, y = t.position - t.lineStart, c === 1 ? a && (Qf(t, y) || Ix(t, y, h)) || Cx(t, h) ? p = !0 : (o && Rx(t, h) || Tx(t, h) || _x(t, h) ? p = !0 : kx(t) ? (p = !0, (t.tag !== null || t.anchor !== null) && L(t, "alias node should not have any properties")) : jx(t, h, ni === r) && (p = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (p = a && Qf(t, y))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && L(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), f = 0, d = t.implicitTypes.length; f < d; f += 1)
      if (m = t.implicitTypes[f], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (Qt.call(t.typeMap[t.kind || "fallback"], t.tag))
      m = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (m = null, u = t.typeMap.multi[t.kind || "fallback"], f = 0, d = u.length; f < d; f += 1)
        if (t.tag.slice(0, u[f].tag.length) === u[f].tag) {
          m = u[f];
          break;
        }
    m || L(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && L(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : L(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || p;
}
function Dx(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (xe(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !Ue(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && L(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; hr(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !mt(o));
        break;
      }
      if (mt(o)) break;
      for (r = t.position; o !== 0 && !Ue(o); )
        o = t.input.charCodeAt(++t.position);
      s.push(t.input.slice(r, t.position));
    }
    o !== 0 && su(t), Qt.call(Yf, n) ? Yf[n](t, n, s) : ii(t, 'unknown document directive "' + n + '"');
  }
  if (xe(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, xe(t, !0, -1)) : i && L(t, "directives end mark is expected"), Jr(t, t.lineIndent - 1, si, !1, !0), xe(t, !0, -1), t.checkLineBreaks && wx.test(t.input.slice(e, t.position)) && ii(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && $o(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, xe(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    L(t, "end of the stream or a document separator is expected");
  else
    return;
}
function em(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new Px(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, L(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    Dx(r);
  return r.documents;
}
function Nx(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = em(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function Lx(t, e) {
  var r = em(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new De("expected a single document in the stream, but found more");
  }
}
var Vx = Nx, Bx = Lx, tm = {
  loadAll: Vx,
  load: Bx
}, rm = Object.prototype.toString, nm = Object.prototype.hasOwnProperty, ou = 65279, Ux = 9, Mn = 10, Hx = 13, qx = 32, zx = 33, Gx = 34, Rc = 35, Kx = 37, Jx = 38, Wx = 39, Yx = 42, sm = 44, Xx = 45, oi = 58, Qx = 61, Zx = 62, ew = 63, tw = 64, im = 91, om = 93, rw = 96, am = 123, nw = 124, cm = 125, Re = {};
Re[0] = "\\0";
Re[7] = "\\a";
Re[8] = "\\b";
Re[9] = "\\t";
Re[10] = "\\n";
Re[11] = "\\v";
Re[12] = "\\f";
Re[13] = "\\r";
Re[27] = "\\e";
Re[34] = '\\"';
Re[92] = "\\\\";
Re[133] = "\\N";
Re[160] = "\\_";
Re[8232] = "\\L";
Re[8233] = "\\P";
var sw = [
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
], iw = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function ow(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null) return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && nm.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function aw(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new De("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + $e.repeat("0", n - e.length) + e;
}
var cw = 1, Fn = 2;
function lw(t) {
  this.schema = t.schema || nu, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = $e.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = ow(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? Fn : cw, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Zf(t, e) {
  for (var r = $e.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function Ic(t, e) {
  return `
` + $e.repeat(" ", t.indent * e);
}
function uw(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function ai(t) {
  return t === qx || t === Ux;
}
function kn(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== ou || 65536 <= t && t <= 1114111;
}
function ep(t) {
  return kn(t) && t !== ou && t !== Hx && t !== Mn;
}
function tp(t, e, r) {
  var n = ep(t), s = n && !ai(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== sm && t !== im && t !== om && t !== am && t !== cm) && t !== Rc && !(e === oi && !s) || ep(e) && !ai(e) && t === Rc || e === oi && s
  );
}
function fw(t) {
  return kn(t) && t !== ou && !ai(t) && t !== Xx && t !== ew && t !== oi && t !== sm && t !== im && t !== om && t !== am && t !== cm && t !== Rc && t !== Jx && t !== Yx && t !== zx && t !== nw && t !== Qx && t !== Zx && t !== Wx && t !== Gx && t !== Kx && t !== tw && t !== rw;
}
function pw(t) {
  return !ai(t) && t !== oi;
}
function Pn(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function lm(t) {
  var e = /^\n* /;
  return e.test(t);
}
var um = 1, Mc = 2, fm = 3, pm = 4, Nr = 5;
function hw(t, e, r, n, s, i, o, a) {
  var c, l = 0, p = null, f = !1, d = !1, u = n !== -1, m = -1, h = fw(Pn(t, 0)) && pw(Pn(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; l >= 65536 ? c += 2 : c++) {
      if (l = Pn(t, c), !kn(l))
        return Nr;
      h = h && tp(l, p, a), p = l;
    }
  else {
    for (c = 0; c < t.length; l >= 65536 ? c += 2 : c++) {
      if (l = Pn(t, c), l === Mn)
        f = !0, u && (d = d || // Foldable line = too long, and not more-indented.
        c - m - 1 > n && t[m + 1] !== " ", m = c);
      else if (!kn(l))
        return Nr;
      h = h && tp(l, p, a), p = l;
    }
    d = d || u && c - m - 1 > n && t[m + 1] !== " ";
  }
  return !f && !d ? h && !o && !s(t) ? um : i === Fn ? Nr : Mc : r > 9 && lm(t) ? Nr : o ? i === Fn ? Nr : Mc : d ? pm : fm;
}
function dw(t, e, r, n, s) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === Fn ? '""' : "''";
    if (!t.noCompatMode && (sw.indexOf(e) !== -1 || iw.test(e)))
      return t.quotingType === Fn ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(l) {
      return uw(t, l);
    }
    switch (hw(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !n,
      s
    )) {
      case um:
        return e;
      case Mc:
        return "'" + e.replace(/'/g, "''") + "'";
      case fm:
        return "|" + rp(e, t.indent) + np(Zf(e, i));
      case pm:
        return ">" + rp(e, t.indent) + np(Zf(mw(e, o), i));
      case Nr:
        return '"' + vw(e) + '"';
      default:
        throw new De("impossible error: invalid scalar style");
    }
  }();
}
function rp(t, e) {
  var r = lm(t) ? String(e) : "", n = t[t.length - 1] === `
`, s = n && (t[t.length - 2] === `
` || t === `
`), i = s ? "+" : n ? "" : "-";
  return r + i + `
`;
}
function np(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function mw(t, e) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var l = t.indexOf(`
`);
    return l = l !== -1 ? l : t.length, r.lastIndex = l, sp(t.slice(0, l), e);
  }(), s = t[0] === `
` || t[0] === " ", i, o; o = r.exec(t); ) {
    var a = o[1], c = o[2];
    i = c[0] === " ", n += a + (!s && !i && c !== "" ? `
` : "") + sp(c, e), s = i;
  }
  return n;
}
function sp(t, e) {
  if (t === "" || t[0] === " ") return t;
  for (var r = / [^ ]/g, n, s = 0, i, o = 0, a = 0, c = ""; n = r.exec(t); )
    a = n.index, a - s > e && (i = o > s ? o : a, c += `
` + t.slice(s, i), s = i + 1), o = a;
  return c += `
`, t.length - s > e && o > s ? c += t.slice(s, o) + `
` + t.slice(o + 1) : c += t.slice(s), c.slice(1);
}
function vw(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = Pn(t, s), n = Re[r], !n && kn(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || aw(r);
  return e;
}
function yw(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (Tt(t, e, a, !1, !1) || typeof a > "u" && Tt(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function ip(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (Tt(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Tt(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += Ic(t, e)), t.dump && Mn === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function gw(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, l, p;
  for (o = 0, a = i.length; o < a; o += 1)
    p = "", n !== "" && (p += ", "), t.condenseFlow && (p += '"'), c = i[o], l = r[c], t.replacer && (l = t.replacer.call(r, c, l)), Tt(t, e, c, !1, !1) && (t.dump.length > 1024 && (p += "? "), p += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Tt(t, e, l, !1, !1) && (p += t.dump, n += p));
  t.tag = s, t.dump = "{" + n + "}";
}
function bw(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, l, p, f, d;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new De("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    d = "", (!n || s !== "") && (d += Ic(t, e)), l = o[a], p = r[l], t.replacer && (p = t.replacer.call(r, l, p)), Tt(t, e + 1, l, !0, !0, !0) && (f = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, f && (t.dump && Mn === t.dump.charCodeAt(0) ? d += "?" : d += "? "), d += t.dump, f && (d += Ic(t, e)), Tt(t, e + 1, p, !0, f) && (t.dump && Mn === t.dump.charCodeAt(0) ? d += ":" : d += ": ", d += t.dump, s += d));
  t.tag = i, t.dump = s || "{}";
}
function op(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, rm.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (nm.call(a.represent, c))
          n = a.represent[c](e, c);
        else
          throw new De("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = n;
      }
      return !0;
    }
  return !1;
}
function Tt(t, e, r, n, s, i, o) {
  t.tag = null, t.dump = r, op(t, r, !1) || op(t, r, !0);
  var a = rm.call(t.dump), c = n, l;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var p = a === "[object Object]" || a === "[object Array]", f, d;
  if (p && (f = t.duplicates.indexOf(r), d = f !== -1), (t.tag !== null && t.tag !== "?" || d || t.indent !== 2 && e > 0) && (s = !1), d && t.usedDuplicates[f])
    t.dump = "*ref_" + f;
  else {
    if (p && d && !t.usedDuplicates[f] && (t.usedDuplicates[f] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (bw(t, e, t.dump, s), d && (t.dump = "&ref_" + f + t.dump)) : (gw(t, e, t.dump), d && (t.dump = "&ref_" + f + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? ip(t, e - 1, t.dump, s) : ip(t, e, t.dump, s), d && (t.dump = "&ref_" + f + t.dump)) : (yw(t, e, t.dump), d && (t.dump = "&ref_" + f + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && dw(t, t.dump, e, i, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (t.skipInvalid) return !1;
      throw new De("unacceptable kind of an object to dump " + a);
    }
    t.tag !== null && t.tag !== "?" && (l = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? l = "!" + l : l.slice(0, 18) === "tag:yaml.org,2002:" ? l = "!!" + l.slice(18) : l = "!<" + l + ">", t.dump = l + " " + t.dump);
  }
  return !0;
}
function xw(t, e) {
  var r = [], n = [], s, i;
  for (Fc(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function Fc(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        Fc(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        Fc(t[n[s]], e, r);
}
function ww(t, e) {
  e = e || {};
  var r = new lw(e);
  r.noRefs || xw(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), Tt(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var Ew = ww, $w = {
  dump: Ew
};
function au(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var Ow = Te, Sw = jd, Aw = Rd, ci = Dd, Pw = Nd, jw = nu, Tw = tm.load, _w = tm.loadAll, Cw = $w.dump, Rw = De, Iw = {
  binary: Hd,
  float: kd,
  map: Cd,
  null: Id,
  pairs: zd,
  set: Gd,
  timestamp: Bd,
  bool: Md,
  int: Fd,
  merge: Ud,
  omap: qd,
  seq: _d,
  str: Td
}, Mw = au("safeLoad", "load"), Fw = au("safeLoadAll", "loadAll"), kw = au("safeDump", "dump"), Wr = {
  Type: Ow,
  Schema: Sw,
  FAILSAFE_SCHEMA: Aw,
  JSON_SCHEMA: ci,
  CORE_SCHEMA: Pw,
  DEFAULT_SCHEMA: jw,
  load: Tw,
  loadAll: _w,
  dump: Cw,
  YAMLException: Rw,
  types: Iw,
  safeLoad: Mw,
  safeLoadAll: Fw,
  safeDump: kw
};
const Dw = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function Nw(t, e) {
  return e && (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0) ? JSON.parse(t) : Wr.load(t);
}
function Lw(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function hm(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = Lw(n), e), {});
}
function dm(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: hm(t.headers)
  }, s = n.headers["content-type"], i = r || Dw(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = Nw(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
async function Yr(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, e = tu(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await dm(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
  } catch (s) {
    if (!n)
      throw s;
    const i = new Error(n.statusText || `response status is ${n.status}`);
    throw i.status = n.status, i.statusCode = n.status, i.responseError = s, i;
  }
  if (!n.ok) {
    const s = new Error(n.statusText || `response status is ${n.status}`);
    throw s.status = n.status, s.statusCode = n.status, s.response = n, s;
  }
  return n;
}
function Vw(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), n = tu(n), n = e(n), r(t(n)));
}
function mm(t, e = {}) {
  const {
    requestInterceptor: r,
    responseInterceptor: n
  } = e, s = t.withCredentials ? "include" : "same-origin";
  return (i) => t({
    url: i,
    loadSpec: !0,
    requestInterceptor: r,
    responseInterceptor: n,
    headers: {
      Accept: wd
    },
    credentials: s
  }).then((o) => o.body);
}
const cu = (t) => {
  var e, r;
  const {
    baseDoc: n,
    url: s
  } = t, i = (e = n ?? s) !== null && e !== void 0 ? e : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(i, globalThis.document.baseURI)) : i;
}, vm = (t) => {
  const {
    fetch: e,
    http: r
  } = t;
  return e || r || Yr;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var Bw = /* @__PURE__ */ function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
      n.__proto__ = s;
    } || function(n, s) {
      for (var i in s) s.hasOwnProperty(i) && (n[i] = s[i]);
    }, t(e, r);
  };
  return function(e, r) {
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Uw = Object.prototype.hasOwnProperty;
function kc(t, e) {
  return Uw.call(t, e);
}
function Dc(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var n = [];
  for (var s in t)
    kc(t, s) && n.push(s);
  return n;
}
function ze(t) {
  switch (typeof t) {
    case "object":
      return JSON.parse(JSON.stringify(t));
    case "undefined":
      return null;
    default:
      return t;
  }
}
function Nc(t) {
  for (var e = 0, r = t.length, n; e < r; ) {
    if (n = t.charCodeAt(e), n >= 48 && n <= 57) {
      e++;
      continue;
    }
    return !1;
  }
  return !0;
}
function cr(t) {
  return t.indexOf("/") === -1 && t.indexOf("~") === -1 ? t : t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function ym(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Lc(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (Lc(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = Dc(t), s = n.length, i = 0; i < s; i++)
        if (Lc(t[n[i]]))
          return !0;
    }
  }
  return !1;
}
function ap(t, e) {
  var r = [t];
  for (var n in e) {
    var s = typeof e[n] == "object" ? JSON.stringify(e[n], null, 2) : e[n];
    typeof s < "u" && r.push(n + ": " + s);
  }
  return r.join(`
`);
}
var gm = (
  /** @class */
  function(t) {
    Bw(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, ap(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = ap(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  }(Error)
), me = gm, Hw = ze, Br = {
  add: function(t, e, r) {
    return t[e] = this.value, { newDocument: r };
  },
  remove: function(t, e, r) {
    var n = t[e];
    return delete t[e], { newDocument: r, removed: n };
  },
  replace: function(t, e, r) {
    var n = t[e];
    return t[e] = this.value, { newDocument: r, removed: n };
  },
  move: function(t, e, r) {
    var n = Dn(r, this.path);
    n && (n = ze(n));
    var s = dr(r, { op: "remove", path: this.from }).removed;
    return dr(r, { op: "add", path: this.path, value: s }), { newDocument: r, removed: n };
  },
  copy: function(t, e, r) {
    var n = Dn(r, this.from);
    return dr(r, { op: "add", path: this.path, value: ze(n) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: Nn(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, qw = {
  add: function(t, e, r) {
    return Nc(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
  },
  remove: function(t, e, r) {
    var n = t.splice(e, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(t, e, r) {
    var n = t[e];
    return t[e] = this.value, { newDocument: r, removed: n };
  },
  move: Br.move,
  copy: Br.copy,
  test: Br.test,
  _get: Br._get
};
function Dn(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return dr(t, r), r.value;
}
function dr(t, e, r, n, s, i) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : li(e, 0)), e.path === "") {
    var o = { newDocument: t };
    if (e.op === "add")
      return o.newDocument = e.value, o;
    if (e.op === "replace")
      return o.newDocument = e.value, o.removed = t, o;
    if (e.op === "move" || e.op === "copy")
      return o.newDocument = Dn(t, e.from), e.op === "move" && (o.removed = t), o;
    if (e.op === "test") {
      if (o.test = Nn(t, e.value), o.test === !1)
        throw new me("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
      return o.newDocument = t, o;
    } else {
      if (e.op === "remove")
        return o.removed = t, o.newDocument = null, o;
      if (e.op === "_get")
        return e.value = t, o;
      if (r)
        throw new me("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", i, e, t);
      return o;
    }
  } else {
    n || (t = ze(t));
    var a = e.path || "", c = a.split("/"), l = t, p = 1, f = c.length, d = void 0, u = void 0, m = void 0;
    for (typeof r == "function" ? m = r : m = li; ; ) {
      if (u = c[p], u && u.indexOf("~") != -1 && (u = ym(u)), s && (u == "__proto__" || u == "prototype" && p > 0 && c[p - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && d === void 0 && (l[u] === void 0 ? d = c.slice(0, p).join("/") : p == f - 1 && (d = e.path), d !== void 0 && m(e, 0, t, d)), p++, Array.isArray(l)) {
        if (u === "-")
          u = l.length;
        else {
          if (r && !Nc(u))
            throw new me("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          Nc(u) && (u = ~~u);
        }
        if (p >= f) {
          if (r && e.op === "add" && u > l.length)
            throw new me("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = qw[e.op].call(e, l, u, t);
          if (o.test === !1)
            throw new me("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (p >= f) {
        var o = Br[e.op].call(e, l, u, t);
        if (o.test === !1)
          throw new me("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (l = l[u], r && p < f && (!l || typeof l != "object"))
        throw new me("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function Wt(t, e, r, n, s) {
  if (n === void 0 && (n = !0), s === void 0 && (s = !0), r && !Array.isArray(e))
    throw new me("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (t = ze(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = dr(t, e[o], r, !0, s, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function zw(t, e, r) {
  var n = dr(t, e);
  if (n.test === !1)
    throw new me("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function li(t, e, r, n) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new me("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (Br[t.op]) {
    if (typeof t.path != "string")
      throw new me("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new me('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new me("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new me("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && Lc(t.value))
      throw new me("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", e, t, r);
    if (r) {
      if (t.op == "add") {
        var s = t.path.split("/").length, i = n.split("/").length;
        if (s !== i + 1 && s !== i)
          throw new me("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", e, t, r);
      } else if (t.op === "replace" || t.op === "remove" || t.op === "_get") {
        if (t.path !== n)
          throw new me("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", e, t, r);
      } else if (t.op === "move" || t.op === "copy") {
        var o = { op: "_get", path: t.from, value: void 0 }, a = bm([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new me("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else throw new me("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function bm(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new me("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      Wt(ze(e), ze(t), r || !0);
    else {
      r = r || li;
      for (var n = 0; n < t.length; n++)
        r(t[n], n, e, void 0);
    }
  } catch (s) {
    if (s instanceof me)
      return s;
    throw s;
  }
}
function Nn(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    var r = Array.isArray(t), n = Array.isArray(e), s, i, o;
    if (r && n) {
      if (i = t.length, i != e.length)
        return !1;
      for (s = i; s-- !== 0; )
        if (!Nn(t[s], e[s]))
          return !1;
      return !0;
    }
    if (r != n)
      return !1;
    var a = Object.keys(t);
    if (i = a.length, i !== Object.keys(e).length)
      return !1;
    for (s = i; s-- !== 0; )
      if (!e.hasOwnProperty(a[s]))
        return !1;
    for (s = i; s-- !== 0; )
      if (o = a[s], !Nn(t[o], e[o]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
const Gw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: me,
  _areEquals: Nn,
  applyOperation: dr,
  applyPatch: Wt,
  applyReducer: zw,
  deepClone: Hw,
  getValueByPointer: Dn,
  validate: bm,
  validator: li
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var lu = /* @__PURE__ */ new WeakMap(), Kw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  }()
), Jw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  }()
);
function Ww(t) {
  return lu.get(t);
}
function Yw(t, e) {
  return t.observers.get(e);
}
function Xw(t, e) {
  t.observers.delete(e.callback);
}
function Qw(t, e) {
  e.unobserve();
}
function Zw(t, e) {
  var r = [], n, s = Ww(t);
  if (!s)
    s = new Kw(t), lu.set(t, s);
  else {
    var i = Yw(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = ze(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      Vc(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    Vc(n), clearTimeout(n.next), Xw(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new Jw(e, n)), n;
}
function Vc(t, e) {
  e === void 0 && (e = !1);
  var r = lu.get(t.object);
  uu(r.value, t.object, t.patches, "", e), t.patches.length && Wt(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function uu(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = Dc(e), o = Dc(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var l = o[c], p = t[l];
      if (kc(e, l) && !(e[l] === void 0 && p !== void 0 && Array.isArray(e) === !1)) {
        var f = e[l];
        typeof p == "object" && p != null && typeof f == "object" && f != null && Array.isArray(p) === Array.isArray(f) ? uu(p, f, r, n + "/" + cr(l), s) : p !== f && (s && r.push({ op: "test", path: n + "/" + cr(l), value: ze(p) }), r.push({ op: "replace", path: n + "/" + cr(l), value: ze(f) }));
      } else Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + cr(l), value: ze(p) }), r.push({ op: "remove", path: n + "/" + cr(l) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var l = i[c];
        !kc(t, l) && e[l] !== void 0 && r.push({ op: "add", path: n + "/" + cr(l), value: ze(e[l]) });
      }
  }
}
function e0(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return uu(t, e, n, "", r), n;
}
const t0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: e0,
  generate: Vc,
  observe: Zw,
  unobserve: Qw
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, Gw, t0, {
  JsonPatchError: gm,
  deepClone: ze,
  escapePathComponent: cr,
  unescapePathComponent: ym
});
var r0 = function(e) {
  return n0(e) && !s0(e);
};
function n0(t) {
  return !!t && typeof t == "object";
}
function s0(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || a0(t);
}
var i0 = typeof Symbol == "function" && Symbol.for, o0 = i0 ? Symbol.for("react.element") : 60103;
function a0(t) {
  return t.$$typeof === o0;
}
function c0(t) {
  return Array.isArray(t) ? [] : {};
}
function Ln(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Xr(c0(t), t, e) : t;
}
function l0(t, e, r) {
  return t.concat(e).map(function(n) {
    return Ln(n, r);
  });
}
function u0(t, e) {
  if (!e.customMerge)
    return Xr;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : Xr;
}
function f0(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function cp(t) {
  return Object.keys(t).concat(f0(t));
}
function xm(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function p0(t, e) {
  return xm(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function h0(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && cp(t).forEach(function(s) {
    n[s] = Ln(t[s], r);
  }), cp(e).forEach(function(s) {
    p0(t, s) || (xm(t, s) && r.isMergeableObject(e[s]) ? n[s] = u0(s, r)(t[s], e[s], r) : n[s] = Ln(e[s], r));
  }), n;
}
function Xr(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || l0, r.isMergeableObject = r.isMergeableObject || r0, r.cloneUnlessOtherwiseSpecified = Ln;
  var n = Array.isArray(e), s = Array.isArray(t), i = n === s;
  return i ? n ? r.arrayMerge(t, e, r) : h0(t, e, r) : Ln(e, r);
}
Xr.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, s) {
    return Xr(n, s, r);
  }, {});
};
var d0 = Xr, m0 = d0;
const v0 = /* @__PURE__ */ Eo(m0), te = {
  add: g0,
  replace: Ks,
  remove: b0,
  merge: x0,
  mergeDeep: w0,
  context: E0,
  getIn: A0,
  applyPatch: y0,
  parentPathMatch: S0,
  flatten: Kn,
  fullyNormalizeArray: P0,
  normalizeArray: Em,
  isPromise: j0,
  forEachNew: $0,
  forEachNewPrimitive: O0,
  isJsonPatch: Sm,
  isContextPatch: C0,
  isPatch: Oo,
  isMutation: Am,
  isAdditiveMutation: ui,
  isGenerator: _0,
  isFunction: Om,
  isObject: mr,
  isError: T0
};
function y0(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && lp(e.path)
  }, e.op === "merge") {
    const n = za(t, e.path);
    Object.assign(n, e.value), Wt(t, [Ks(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = za(t, e.path), s = v0(n, e.value);
    t = Wt(t, [Ks(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && mr(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${lp(i)}`,
      value: e.value[i]
    }), s), []);
    Wt(t, n);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: n
    } = e;
    r.allowMetaPatches && e.meta && ui(e) && (Array.isArray(e.value) || mr(e.value)) && (n = {
      ...n,
      ...e.meta
    }), t = n;
  } else if (Wt(t, [e]), r.allowMetaPatches && e.meta && ui(e) && (Array.isArray(e.value) || mr(e.value))) {
    const s = {
      ...za(t, e.path),
      ...e.meta
    };
    Wt(t, [Ks(e.path, s)]);
  }
  return t;
}
function lp(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function g0(t, e) {
  return {
    op: "add",
    path: t,
    value: e
  };
}
function Ks(t, e, r) {
  return {
    op: "replace",
    path: t,
    value: e,
    meta: r
  };
}
function b0(t) {
  return {
    op: "remove",
    path: t
  };
}
function x0(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function w0(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function E0(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function $0(t, e) {
  try {
    return wm(t, Uc, e);
  } catch (r) {
    return r;
  }
}
function O0(t, e) {
  try {
    return wm(t, Bc, e);
  } catch (r) {
    return r;
  }
}
function wm(t, e, r) {
  const n = t.filter(ui).map((o) => e(o.value, r, o.path)) || [], s = Kn(n);
  return $m(s);
}
function Bc(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => Bc(n, e, r.concat(s))) : mr(t) ? Object.keys(t).map((n) => Bc(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function Uc(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => Uc(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (mr(t)) {
    const s = Object.keys(t).map((i) => Uc(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = Kn(n), n;
}
function S0(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, n = e.length; r < n; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function A0(t, e) {
  return e.reduce((r, n) => typeof n < "u" && r ? r[n] : r, t);
}
function P0(t) {
  return $m(Kn(Em(t)));
}
function Em(t) {
  return Array.isArray(t) ? t : [t];
}
function Kn(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? Kn(e) : e));
}
function $m(t) {
  return t.filter((e) => typeof e < "u");
}
function mr(t) {
  return t && typeof t == "object";
}
function j0(t) {
  return mr(t) && Om(t.then);
}
function Om(t) {
  return t && typeof t == "function";
}
function T0(t) {
  return t instanceof Error;
}
function Sm(t) {
  if (Oo(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function _0(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function Am(t) {
  return Sm(t) || Oo(t) && t.type === "mutation";
}
function ui(t) {
  return Am(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function C0(t) {
  return Oo(t) && t.type === "context";
}
function Oo(t) {
  return t && typeof t == "object";
}
function za(t, e) {
  try {
    return Dn(t, e);
  } catch (r) {
    return console.error(r), {};
  }
}
var $n = function(t) {
  return t && t.Math === Math && t;
}, Ke = (
  // eslint-disable-next-line es/no-global-this -- safe
  $n(typeof globalThis == "object" && globalThis) || $n(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  $n(typeof self == "object" && self) || $n(typeof Yt == "object" && Yt) || $n(typeof Yt == "object" && Yt) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), ct = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, R0 = ct, So = !R0(function() {
  var t = (function() {
  }).bind();
  return typeof t != "function" || t.hasOwnProperty("prototype");
}), I0 = So, Pm = Function.prototype, up = Pm.apply, fp = Pm.call, fu = typeof Reflect == "object" && Reflect.apply || (I0 ? fp.bind(up) : function() {
  return fp.apply(up, arguments);
}), jm = So, Tm = Function.prototype, Hc = Tm.call, M0 = jm && Tm.bind.bind(Hc, Hc), lt = jm ? M0 : function(t) {
  return function() {
    return Hc.apply(t, arguments);
  };
}, _m = lt, F0 = _m({}.toString), k0 = _m("".slice), pu = function(t) {
  return k0(F0(t), 8, -1);
}, D0 = pu, N0 = lt, Cm = function(t) {
  if (D0(t) === "Function") return N0(t);
}, Ga = typeof document == "object" && document.all, Ze = typeof Ga > "u" && Ga !== void 0 ? function(t) {
  return typeof t == "function" || t === Ga;
} : function(t) {
  return typeof t == "function";
}, hu = {}, L0 = ct, er = !L0(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), V0 = So, Ds = Function.prototype.call, wr = V0 ? Ds.bind(Ds) : function() {
  return Ds.apply(Ds, arguments);
}, Rm = {}, Im = {}.propertyIsEnumerable, Mm = Object.getOwnPropertyDescriptor, B0 = Mm && !Im.call({ 1: 2 }, 1);
Rm.f = B0 ? function(e) {
  var r = Mm(this, e);
  return !!r && r.enumerable;
} : Im;
var Jn = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, U0 = lt, H0 = ct, q0 = pu, Ka = Object, z0 = U0("".split), G0 = H0(function() {
  return !Ka("z").propertyIsEnumerable(0);
}) ? function(t) {
  return q0(t) === "String" ? z0(t, "") : Ka(t);
} : Ka, du = function(t) {
  return t == null;
}, K0 = du, J0 = TypeError, Ao = function(t) {
  if (K0(t)) throw new J0("Can't call method on " + t);
  return t;
}, W0 = G0, Y0 = Ao, Wn = function(t) {
  return W0(Y0(t));
}, X0 = Ze, xt = function(t) {
  return typeof t == "object" ? t !== null : X0(t);
}, mu = {}, Ja = mu, Wa = Ke, Q0 = Ze, pp = function(t) {
  return Q0(t) ? t : void 0;
}, Yn = function(t, e) {
  return arguments.length < 2 ? pp(Ja[t]) || pp(Wa[t]) : Ja[t] && Ja[t][e] || Wa[t] && Wa[t][e];
}, Z0 = lt, Po = Z0({}.isPrototypeOf), eE = Ke, hp = eE.navigator, dp = hp && hp.userAgent, tE = dp ? String(dp) : "", Fm = Ke, Ya = tE, mp = Fm.process, vp = Fm.Deno, yp = mp && mp.versions || vp && vp.version, gp = yp && yp.v8, rt, fi;
gp && (rt = gp.split("."), fi = rt[0] > 0 && rt[0] < 4 ? 1 : +(rt[0] + rt[1]));
!fi && Ya && (rt = Ya.match(/Edge\/(\d+)/), (!rt || rt[1] >= 74) && (rt = Ya.match(/Chrome\/(\d+)/), rt && (fi = +rt[1])));
var rE = fi, bp = rE, nE = ct, sE = Ke, iE = sE.String, km = !!Object.getOwnPropertySymbols && !nE(function() {
  var t = Symbol("symbol detection");
  return !iE(t) || !(Object(t) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && bp && bp < 41;
}), oE = km, Dm = oE && !Symbol.sham && typeof Symbol.iterator == "symbol", aE = Yn, cE = Ze, lE = Po, uE = Dm, fE = Object, Nm = uE ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  var e = aE("Symbol");
  return cE(e) && lE(e.prototype, fE(t));
}, pE = String, vu = function(t) {
  try {
    return pE(t);
  } catch {
    return "Object";
  }
}, hE = Ze, dE = vu, mE = TypeError, jo = function(t) {
  if (hE(t)) return t;
  throw new mE(dE(t) + " is not a function");
}, vE = jo, yE = du, yu = function(t, e) {
  var r = t[e];
  return yE(r) ? void 0 : vE(r);
}, Xa = wr, Qa = Ze, Za = xt, gE = TypeError, bE = function(t, e) {
  var r, n;
  if (e === "string" && Qa(r = t.toString) && !Za(n = Xa(r, t)) || Qa(r = t.valueOf) && !Za(n = Xa(r, t)) || e !== "string" && Qa(r = t.toString) && !Za(n = Xa(r, t))) return n;
  throw new gE("Can't convert object to primitive value");
}, Lm = { exports: {} }, xp = Ke, xE = Object.defineProperty, wE = function(t, e) {
  try {
    xE(xp, t, { value: e, configurable: !0, writable: !0 });
  } catch {
    xp[t] = e;
  }
  return e;
}, EE = Ke, $E = wE, wp = "__core-js_shared__", Ep = Lm.exports = EE[wp] || $E(wp, {});
(Ep.versions || (Ep.versions = [])).push({
  version: "3.39.0",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Vm = Lm.exports, $p = Vm, Bm = function(t, e) {
  return $p[t] || ($p[t] = e || {});
}, OE = Ao, SE = Object, Um = function(t) {
  return SE(OE(t));
}, AE = lt, PE = Um, jE = AE({}.hasOwnProperty), Mt = Object.hasOwn || function(e, r) {
  return jE(PE(e), r);
}, TE = lt, _E = 0, CE = Math.random(), RE = TE(1 .toString), Hm = function(t) {
  return "Symbol(" + (t === void 0 ? "" : t) + ")_" + RE(++_E + CE, 36);
}, IE = Ke, ME = Bm, Op = Mt, FE = Hm, kE = km, DE = Dm, Ur = IE.Symbol, ec = ME("wks"), NE = DE ? Ur.for || Ur : Ur && Ur.withoutSetter || FE, Ft = function(t) {
  return Op(ec, t) || (ec[t] = kE && Op(Ur, t) ? Ur[t] : NE("Symbol." + t)), ec[t];
}, LE = wr, Sp = xt, Ap = Nm, VE = yu, BE = bE, UE = Ft, HE = TypeError, qE = UE("toPrimitive"), zE = function(t, e) {
  if (!Sp(t) || Ap(t)) return t;
  var r = VE(t, qE), n;
  if (r) {
    if (e === void 0 && (e = "default"), n = LE(r, t, e), !Sp(n) || Ap(n)) return n;
    throw new HE("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), BE(t, e);
}, GE = zE, KE = Nm, qm = function(t) {
  var e = GE(t, "string");
  return KE(e) ? e : e + "";
}, JE = Ke, Pp = xt, qc = JE.document, WE = Pp(qc) && Pp(qc.createElement), zm = function(t) {
  return WE ? qc.createElement(t) : {};
}, YE = er, XE = ct, QE = zm, Gm = !YE && !XE(function() {
  return Object.defineProperty(QE("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), ZE = er, e$ = wr, t$ = Rm, r$ = Jn, n$ = Wn, s$ = qm, i$ = Mt, o$ = Gm, jp = Object.getOwnPropertyDescriptor;
hu.f = ZE ? jp : function(e, r) {
  if (e = n$(e), r = s$(r), o$) try {
    return jp(e, r);
  } catch {
  }
  if (i$(e, r)) return r$(!e$(t$.f, e, r), e[r]);
};
var a$ = ct, c$ = Ze, l$ = /#|\.prototype\./, Xn = function(t, e) {
  var r = f$[u$(t)];
  return r === h$ ? !0 : r === p$ ? !1 : c$(e) ? a$(e) : !!e;
}, u$ = Xn.normalize = function(t) {
  return String(t).replace(l$, ".").toLowerCase();
}, f$ = Xn.data = {}, p$ = Xn.NATIVE = "N", h$ = Xn.POLYFILL = "P", d$ = Xn, Tp = Cm, m$ = jo, v$ = So, y$ = Tp(Tp.bind), Km = function(t, e) {
  return m$(t), e === void 0 ? t : v$ ? y$(t, e) : function() {
    return t.apply(e, arguments);
  };
}, Er = {}, g$ = er, b$ = ct, Jm = g$ && b$(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), x$ = xt, w$ = String, E$ = TypeError, $r = function(t) {
  if (x$(t)) return t;
  throw new E$(w$(t) + " is not an object");
}, $$ = er, O$ = Gm, S$ = Jm, Ns = $r, _p = qm, A$ = TypeError, tc = Object.defineProperty, P$ = Object.getOwnPropertyDescriptor, rc = "enumerable", nc = "configurable", sc = "writable";
Er.f = $$ ? S$ ? function(e, r, n) {
  if (Ns(e), r = _p(r), Ns(n), typeof e == "function" && r === "prototype" && "value" in n && sc in n && !n[sc]) {
    var s = P$(e, r);
    s && s[sc] && (e[r] = n.value, n = {
      configurable: nc in n ? n[nc] : s[nc],
      enumerable: rc in n ? n[rc] : s[rc],
      writable: !1
    });
  }
  return tc(e, r, n);
} : tc : function(e, r, n) {
  if (Ns(e), r = _p(r), Ns(n), O$) try {
    return tc(e, r, n);
  } catch {
  }
  if ("get" in n || "set" in n) throw new A$("Accessors not supported");
  return "value" in n && (e[r] = n.value), e;
};
var j$ = er, T$ = Er, _$ = Jn, tr = j$ ? function(t, e, r) {
  return T$.f(t, e, _$(1, r));
} : function(t, e, r) {
  return t[e] = r, t;
}, On = Ke, C$ = fu, R$ = Cm, I$ = Ze, M$ = hu.f, F$ = d$, Mr = mu, k$ = Km, Fr = tr, Cp = Mt, D$ = function(t) {
  var e = function(r, n, s) {
    if (this instanceof e) {
      switch (arguments.length) {
        case 0:
          return new t();
        case 1:
          return new t(r);
        case 2:
          return new t(r, n);
      }
      return new t(r, n, s);
    }
    return C$(t, this, arguments);
  };
  return e.prototype = t.prototype, e;
}, To = function(t, e) {
  var r = t.target, n = t.global, s = t.stat, i = t.proto, o = n ? On : s ? On[r] : On[r] && On[r].prototype, a = n ? Mr : Mr[r] || Fr(Mr, r, {})[r], c = a.prototype, l, p, f, d, u, m, h, y, g;
  for (d in e)
    l = F$(n ? d : r + (s ? "." : "#") + d, t.forced), p = !l && o && Cp(o, d), m = a[d], p && (t.dontCallGetSet ? (g = M$(o, d), h = g && g.value) : h = o[d]), u = p && h ? h : e[d], !(!l && !i && typeof m == typeof u) && (t.bind && p ? y = k$(u, On) : t.wrap && p ? y = D$(u) : i && I$(u) ? y = R$(u) : y = u, (t.sham || u && u.sham || m && m.sham) && Fr(y, "sham", !0), Fr(a, d, y), i && (f = r + "Prototype", Cp(Mr, f) || Fr(Mr, f, {}), Fr(Mr[f], d, u), t.real && c && (l || !c[d]) && Fr(c, d, u)));
}, N$ = Bm, L$ = Hm, Rp = N$("keys"), gu = function(t) {
  return Rp[t] || (Rp[t] = L$(t));
}, V$ = ct, B$ = !V$(function() {
  function t() {
  }
  return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
}), U$ = Mt, H$ = Ze, q$ = Um, z$ = gu, G$ = B$, Ip = z$("IE_PROTO"), zc = Object, K$ = zc.prototype, bu = G$ ? zc.getPrototypeOf : function(t) {
  var e = q$(t);
  if (U$(e, Ip)) return e[Ip];
  var r = e.constructor;
  return H$(r) && e instanceof r ? r.prototype : e instanceof zc ? K$ : null;
}, J$ = lt, W$ = jo, Y$ = function(t, e, r) {
  try {
    return J$(W$(Object.getOwnPropertyDescriptor(t, e)[r]));
  } catch {
  }
}, X$ = xt, Q$ = function(t) {
  return X$(t) || t === null;
}, Z$ = Q$, eO = String, tO = TypeError, rO = function(t) {
  if (Z$(t)) return t;
  throw new tO("Can't set " + eO(t) + " as a prototype");
}, nO = Y$, sO = xt, iO = Ao, oO = rO, xu = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t = !1, e = {}, r;
  try {
    r = nO(Object.prototype, "__proto__", "set"), r(e, []), t = e instanceof Array;
  } catch {
  }
  return function(s, i) {
    return iO(s), oO(i), sO(s) && (t ? r(s, i) : s.__proto__ = i), s;
  };
}() : void 0), Wm = {}, aO = Math.ceil, cO = Math.floor, lO = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? cO : aO)(r);
}, uO = lO, wu = function(t) {
  var e = +t;
  return e !== e || e === 0 ? 0 : uO(e);
}, fO = wu, pO = Math.max, hO = Math.min, dO = function(t, e) {
  var r = fO(t);
  return r < 0 ? pO(r + e, 0) : hO(r, e);
}, mO = wu, vO = Math.min, yO = function(t) {
  var e = mO(t);
  return e > 0 ? vO(e, 9007199254740991) : 0;
}, gO = yO, Ym = function(t) {
  return gO(t.length);
}, bO = Wn, xO = dO, wO = Ym, Mp = function(t) {
  return function(e, r, n) {
    var s = bO(e), i = wO(s);
    if (i === 0) return !t && -1;
    var o = xO(n, i), a;
    if (t && r !== r) {
      for (; i > o; )
        if (a = s[o++], a !== a) return !0;
    } else for (; i > o; o++)
      if ((t || o in s) && s[o] === r) return t || o || 0;
    return !t && -1;
  };
}, EO = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Mp(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Mp(!1)
}, Eu = {}, $O = lt, ic = Mt, OO = Wn, SO = EO.indexOf, AO = Eu, Fp = $O([].push), Xm = function(t, e) {
  var r = OO(t), n = 0, s = [], i;
  for (i in r) !ic(AO, i) && ic(r, i) && Fp(s, i);
  for (; e.length > n; ) ic(r, i = e[n++]) && (~SO(s, i) || Fp(s, i));
  return s;
}, $u = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], PO = Xm, jO = $u, TO = jO.concat("length", "prototype");
Wm.f = Object.getOwnPropertyNames || function(e) {
  return PO(e, TO);
};
var Qm = {};
Qm.f = Object.getOwnPropertySymbols;
var _O = Yn, CO = lt, RO = Wm, IO = Qm, MO = $r, FO = CO([].concat), kO = _O("Reflect", "ownKeys") || function(e) {
  var r = RO.f(MO(e)), n = IO.f;
  return n ? FO(r, n(e)) : r;
}, kp = Mt, DO = kO, NO = hu, LO = Er, Zm = function(t, e, r) {
  for (var n = DO(e), s = LO.f, i = NO.f, o = 0; o < n.length; o++) {
    var a = n[o];
    !kp(t, a) && !(r && kp(r, a)) && s(t, a, i(e, a));
  }
}, ev = {}, VO = Xm, BO = $u, UO = Object.keys || function(e) {
  return VO(e, BO);
}, HO = er, qO = Jm, zO = Er, GO = $r, KO = Wn, JO = UO;
ev.f = HO && !qO ? Object.defineProperties : function(e, r) {
  GO(e);
  for (var n = KO(r), s = JO(r), i = s.length, o = 0, a; i > o; ) zO.f(e, a = s[o++], n[a]);
  return e;
};
var WO = Yn, YO = WO("document", "documentElement"), XO = $r, QO = ev, Dp = $u, ZO = Eu, eS = YO, tS = zm, rS = gu, Np = ">", Lp = "<", Gc = "prototype", Kc = "script", tv = rS("IE_PROTO"), oc = function() {
}, rv = function(t) {
  return Lp + Kc + Np + t + Lp + "/" + Kc + Np;
}, Vp = function(t) {
  t.write(rv("")), t.close();
  var e = t.parentWindow.Object;
  return t = null, e;
}, nS = function() {
  var t = tS("iframe"), e = "java" + Kc + ":", r;
  return t.style.display = "none", eS.appendChild(t), t.src = String(e), r = t.contentWindow.document, r.open(), r.write(rv("document.F=Object")), r.close(), r.F;
}, Ls, Js = function() {
  try {
    Ls = new ActiveXObject("htmlfile");
  } catch {
  }
  Js = typeof document < "u" ? document.domain && Ls ? Vp(Ls) : nS() : Vp(Ls);
  for (var t = Dp.length; t--; ) delete Js[Gc][Dp[t]];
  return Js();
};
ZO[tv] = !0;
var Ou = Object.create || function(e, r) {
  var n;
  return e !== null ? (oc[Gc] = XO(e), n = new oc(), oc[Gc] = null, n[tv] = e) : n = Js(), r === void 0 ? n : QO.f(n, r);
}, sS = xt, iS = tr, nv = function(t, e) {
  sS(e) && "cause" in e && iS(t, "cause", e.cause);
}, oS = lt, sv = Error, aS = oS("".replace), cS = function(t) {
  return String(new sv(t).stack);
}("zxcasd"), iv = /\n\s*at [^:]*:[^\n]*/, lS = iv.test(cS), uS = function(t, e) {
  if (lS && typeof t == "string" && !sv.prepareStackTrace)
    for (; e--; ) t = aS(t, iv, "");
  return t;
}, fS = ct, pS = Jn, hS = !fS(function() {
  var t = new Error("a");
  return "stack" in t ? (Object.defineProperty(t, "stack", pS(1, 7)), t.stack !== 7) : !0;
}), dS = tr, mS = uS, vS = hS, Bp = Error.captureStackTrace, ov = function(t, e, r, n) {
  vS && (Bp ? Bp(t, e) : dS(t, "stack", mS(r, n)));
}, cn = {}, yS = Ft, gS = cn, bS = yS("iterator"), xS = Array.prototype, wS = function(t) {
  return t !== void 0 && (gS.Array === t || xS[bS] === t);
}, ES = Ft, $S = ES("toStringTag"), av = {};
av[$S] = "z";
var Su = String(av) === "[object z]", OS = Su, SS = Ze, Ws = pu, AS = Ft, PS = AS("toStringTag"), jS = Object, TS = Ws(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", _S = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, Au = OS ? Ws : function(t) {
  var e, r, n;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (r = _S(e = jS(t), PS)) == "string" ? r : TS ? Ws(e) : (n = Ws(e)) === "Object" && SS(e.callee) ? "Arguments" : n;
}, CS = Au, Up = yu, RS = du, IS = cn, MS = Ft, FS = MS("iterator"), cv = function(t) {
  if (!RS(t)) return Up(t, FS) || Up(t, "@@iterator") || IS[CS(t)];
}, kS = wr, DS = jo, NS = $r, LS = vu, VS = cv, BS = TypeError, US = function(t, e) {
  var r = arguments.length < 2 ? VS(t) : e;
  if (DS(r)) return NS(kS(r, t));
  throw new BS(LS(t) + " is not iterable");
}, HS = wr, Hp = $r, qS = yu, zS = function(t, e, r) {
  var n, s;
  Hp(t);
  try {
    if (n = qS(t, "return"), !n) {
      if (e === "throw") throw r;
      return r;
    }
    n = HS(n, t);
  } catch (i) {
    s = !0, n = i;
  }
  if (e === "throw") throw r;
  if (s) throw n;
  return Hp(n), r;
}, GS = Km, KS = wr, JS = $r, WS = vu, YS = wS, XS = Ym, qp = Po, QS = US, ZS = cv, zp = zS, e1 = TypeError, Ys = function(t, e) {
  this.stopped = t, this.result = e;
}, Gp = Ys.prototype, t1 = function(t, e, r) {
  var n = r && r.that, s = !!(r && r.AS_ENTRIES), i = !!(r && r.IS_RECORD), o = !!(r && r.IS_ITERATOR), a = !!(r && r.INTERRUPTED), c = GS(e, n), l, p, f, d, u, m, h, y = function(v) {
    return l && zp(l, "normal", v), new Ys(!0, v);
  }, g = function(v) {
    return s ? (JS(v), a ? c(v[0], v[1], y) : c(v[0], v[1])) : a ? c(v, y) : c(v);
  };
  if (i)
    l = t.iterator;
  else if (o)
    l = t;
  else {
    if (p = ZS(t), !p) throw new e1(WS(t) + " is not iterable");
    if (YS(p)) {
      for (f = 0, d = XS(t); d > f; f++)
        if (u = g(t[f]), u && qp(Gp, u)) return u;
      return new Ys(!1);
    }
    l = QS(t, p);
  }
  for (m = i ? t.next : l.next; !(h = KS(m, l)).done; ) {
    try {
      u = g(h.value);
    } catch (v) {
      zp(l, "throw", v);
    }
    if (typeof u == "object" && u && qp(Gp, u)) return u;
  }
  return new Ys(!1);
}, r1 = Au, n1 = String, Pu = function(t) {
  if (r1(t) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return n1(t);
}, s1 = Pu, lv = function(t, e) {
  return t === void 0 ? arguments.length < 2 ? "" : e : s1(t);
}, i1 = To, o1 = Po, a1 = bu, pi = xu, c1 = Zm, uv = Ou, ac = tr, cc = Jn, l1 = nv, u1 = ov, f1 = t1, p1 = lv, h1 = Ft, d1 = h1("toStringTag"), hi = Error, m1 = [].push, Qr = function(e, r) {
  var n = o1(lc, this), s;
  pi ? s = pi(new hi(), n ? a1(this) : lc) : (s = n ? this : uv(lc), ac(s, d1, "Error")), r !== void 0 && ac(s, "message", p1(r)), u1(s, Qr, s.stack, 1), arguments.length > 2 && l1(s, arguments[2]);
  var i = [];
  return f1(e, m1, { that: i }), ac(s, "errors", i), s;
};
pi ? pi(Qr, hi) : c1(Qr, hi, { name: !0 });
var lc = Qr.prototype = uv(hi.prototype, {
  constructor: cc(1, Qr),
  message: cc(1, ""),
  name: cc(1, "AggregateError")
});
i1({ global: !0, constructor: !0, arity: 2 }, {
  AggregateError: Qr
});
var v1 = Er.f, y1 = function(t, e, r) {
  r in t || v1(t, r, {
    configurable: !0,
    get: function() {
      return e[r];
    },
    set: function(n) {
      e[r] = n;
    }
  });
}, g1 = Ze, b1 = xt, Kp = xu, x1 = function(t, e, r) {
  var n, s;
  return (
    // it can work only with native `setPrototypeOf`
    Kp && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    g1(n = e.constructor) && n !== r && b1(s = n.prototype) && s !== r.prototype && Kp(t, s), t
  );
}, Jp = Yn, w1 = tr, E1 = Po, Wp = xu, Yp = Zm, Xp = y1, $1 = x1, O1 = lv, S1 = nv, A1 = ov, P1 = er, fv = function(t, e, r, n) {
  var s = "stackTraceLimit", i = n ? 2 : 1, o = t.split("."), a = o[o.length - 1], c = Jp.apply(null, o);
  if (c) {
    var l = c.prototype;
    if (!r) return c;
    var p = Jp("Error"), f = e(function(d, u) {
      var m = O1(n ? u : d, void 0), h = n ? new c(d) : new c();
      return m !== void 0 && w1(h, "message", m), A1(h, f, h.stack, 2), this && E1(l, this) && $1(h, this, f), arguments.length > i && S1(h, arguments[i]), h;
    });
    return f.prototype = l, a !== "Error" ? Wp ? Wp(f, p) : Yp(f, p, { name: !0 }) : P1 && s in c && (Xp(f, c, s), Xp(f, c, "prepareStackTrace")), Yp(f, c), f;
  }
}, pv = To, j1 = Ke, wt = fu, hv = fv, Jc = "WebAssembly", Qp = j1[Jc], di = new Error("e", { cause: 7 }).cause !== 7, Or = function(t, e) {
  var r = {};
  r[t] = hv(t, e, di), pv({ global: !0, constructor: !0, arity: 1, forced: di }, r);
}, ju = function(t, e) {
  if (Qp && Qp[t]) {
    var r = {};
    r[t] = hv(Jc + "." + t, e, di), pv({ target: Jc, stat: !0, constructor: !0, arity: 1, forced: di }, r);
  }
};
Or("Error", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Or("EvalError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Or("RangeError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Or("ReferenceError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Or("SyntaxError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Or("TypeError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Or("URIError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
ju("CompileError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
ju("LinkError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
ju("RuntimeError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
var T1 = To, _1 = Yn, C1 = fu, Zp = ct, R1 = fv, Tu = "AggregateError", eh = _1(Tu), th = !Zp(function() {
  return eh([1]).errors[0] !== 1;
}) && Zp(function() {
  return eh([1], Tu, { cause: 7 }).cause !== 7;
});
T1({ global: !0, constructor: !0, arity: 2, forced: th }, {
  AggregateError: R1(Tu, function(t) {
    return function(r, n) {
      return C1(t, this, arguments);
    };
  }, th, !0)
});
var I1 = Ke, M1 = Ze, rh = I1.WeakMap, F1 = M1(rh) && /native code/.test(String(rh)), k1 = F1, dv = Ke, D1 = xt, N1 = tr, uc = Mt, fc = Vm, L1 = gu, V1 = Eu, nh = "Object already initialized", Wc = dv.TypeError, B1 = dv.WeakMap, mi, Vn, vi, U1 = function(t) {
  return vi(t) ? Vn(t) : mi(t, {});
}, H1 = function(t) {
  return function(e) {
    var r;
    if (!D1(e) || (r = Vn(e)).type !== t)
      throw new Wc("Incompatible receiver, " + t + " required");
    return r;
  };
};
if (k1 || fc.state) {
  var ft = fc.state || (fc.state = new B1());
  ft.get = ft.get, ft.has = ft.has, ft.set = ft.set, mi = function(t, e) {
    if (ft.has(t)) throw new Wc(nh);
    return e.facade = t, ft.set(t, e), e;
  }, Vn = function(t) {
    return ft.get(t) || {};
  }, vi = function(t) {
    return ft.has(t);
  };
} else {
  var kr = L1("state");
  V1[kr] = !0, mi = function(t, e) {
    if (uc(t, kr)) throw new Wc(nh);
    return e.facade = t, N1(t, kr, e), e;
  }, Vn = function(t) {
    return uc(t, kr) ? t[kr] : {};
  }, vi = function(t) {
    return uc(t, kr);
  };
}
var mv = {
  set: mi,
  get: Vn,
  has: vi,
  enforce: U1,
  getterFor: H1
}, Yc = er, q1 = Mt, vv = Function.prototype, z1 = Yc && Object.getOwnPropertyDescriptor, _u = q1(vv, "name"), G1 = _u && (function() {
}).name === "something", K1 = _u && (!Yc || Yc && z1(vv, "name").configurable), J1 = {
  EXISTS: _u,
  PROPER: G1,
  CONFIGURABLE: K1
}, W1 = tr, yv = function(t, e, r, n) {
  return n && n.enumerable ? t[e] = r : W1(t, e, r), t;
}, Y1 = ct, X1 = Ze, Q1 = xt, Z1 = Ou, sh = bu, eA = yv, tA = Ft, Xc = tA("iterator"), gv = !1, At, pc, hc;
[].keys && (hc = [].keys(), "next" in hc ? (pc = sh(sh(hc)), pc !== Object.prototype && (At = pc)) : gv = !0);
var rA = !Q1(At) || Y1(function() {
  var t = {};
  return At[Xc].call(t) !== t;
});
rA ? At = {} : At = Z1(At);
X1(At[Xc]) || eA(At, Xc, function() {
  return this;
});
var bv = {
  IteratorPrototype: At,
  BUGGY_SAFARI_ITERATORS: gv
}, nA = Su, sA = Au, iA = nA ? {}.toString : function() {
  return "[object " + sA(this) + "]";
}, oA = Su, aA = Er.f, cA = tr, lA = Mt, uA = iA, fA = Ft, ih = fA("toStringTag"), Cu = function(t, e, r, n) {
  var s = r ? t : t && t.prototype;
  s && (lA(s, ih) || aA(s, ih, { configurable: !0, value: e }), n && !oA && cA(s, "toString", uA));
}, pA = bv.IteratorPrototype, hA = Ou, dA = Jn, mA = Cu, vA = cn, yA = function() {
  return this;
}, gA = function(t, e, r, n) {
  var s = e + " Iterator";
  return t.prototype = hA(pA, { next: dA(+!n, r) }), mA(t, s, !1, !0), vA[s] = yA, t;
}, bA = To, xA = wr, xv = J1, wA = gA, EA = bu, $A = Cu, oh = yv, OA = Ft, ah = cn, wv = bv, SA = xv.PROPER;
xv.CONFIGURABLE;
wv.IteratorPrototype;
var Vs = wv.BUGGY_SAFARI_ITERATORS, dc = OA("iterator"), ch = "keys", Bs = "values", lh = "entries", AA = function() {
  return this;
}, Ev = function(t, e, r, n, s, i, o) {
  wA(r, e, n);
  var a = function(g) {
    if (g === s && d) return d;
    if (!Vs && g && g in p) return p[g];
    switch (g) {
      case ch:
        return function() {
          return new r(this, g);
        };
      case Bs:
        return function() {
          return new r(this, g);
        };
      case lh:
        return function() {
          return new r(this, g);
        };
    }
    return function() {
      return new r(this);
    };
  }, c = e + " Iterator", l = !1, p = t.prototype, f = p[dc] || p["@@iterator"] || s && p[s], d = !Vs && f || a(s), u = e === "Array" && p.entries || f, m, h, y;
  if (u && (m = EA(u.call(new t())), m !== Object.prototype && m.next && ($A(m, c, !0, !0), ah[c] = AA)), SA && s === Bs && f && f.name !== Bs && (l = !0, d = function() {
    return xA(f, this);
  }), s)
    if (h = {
      values: a(Bs),
      keys: i ? d : a(ch),
      entries: a(lh)
    }, o) for (y in h)
      (Vs || l || !(y in p)) && oh(p, y, h[y]);
    else bA({ target: e, proto: !0, forced: Vs || l }, h);
  return o && p[dc] !== d && oh(p, dc, d, { name: s }), ah[e] = d, h;
}, $v = function(t, e) {
  return { value: t, done: e };
}, PA = Wn, uh = cn, Ov = mv;
Er.f;
var jA = Ev, Us = $v, Sv = "Array Iterator", TA = Ov.set, _A = Ov.getterFor(Sv);
jA(Array, "Array", function(t, e) {
  TA(this, {
    type: Sv,
    target: PA(t),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var t = _A(this), e = t.target, r = t.index++;
  if (!e || r >= e.length)
    return t.target = null, Us(void 0, !0);
  switch (t.kind) {
    case "keys":
      return Us(r, !1);
    case "values":
      return Us(e[r], !1);
  }
  return Us([r, e[r]], !1);
}, "values");
uh.Arguments = uh.Array;
var Ru = lt, CA = wu, RA = Pu, IA = Ao, MA = Ru("".charAt), fh = Ru("".charCodeAt), FA = Ru("".slice), ph = function(t) {
  return function(e, r) {
    var n = RA(IA(e)), s = CA(r), i = n.length, o, a;
    return s < 0 || s >= i ? t ? "" : void 0 : (o = fh(n, s), o < 55296 || o > 56319 || s + 1 === i || (a = fh(n, s + 1)) < 56320 || a > 57343 ? t ? MA(n, s) : o : t ? FA(n, s, s + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
  };
}, kA = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: ph(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: ph(!0)
}, DA = kA.charAt, NA = Pu, Av = mv, LA = Ev, hh = $v, Pv = "String Iterator", VA = Av.set, BA = Av.getterFor(Pv);
LA(String, "String", function(t) {
  VA(this, {
    type: Pv,
    string: NA(t),
    index: 0
  });
}, function() {
  var e = BA(this), r = e.string, n = e.index, s;
  return n >= r.length ? hh(void 0, !0) : (s = DA(r, n), e.index += s.length, hh(s, !1));
});
var UA = mu, HA = UA.AggregateError, qA = {
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
}, zA = qA, GA = Ke, KA = Cu, dh = cn;
for (var mc in zA)
  KA(GA[mc], mc), dh[mc] = dh.Array;
var JA = HA, WA = JA, YA = WA, XA = YA, QA = XA, ZA = QA, eP = ZA, tP = eP;
const rP = /* @__PURE__ */ Eo(tP);
class nP extends rP {
  constructor(e, r, n) {
    if (super(e, r, n), this.name = this.constructor.name, typeof r == "string" && (this.message = r), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(r).stack, n != null && typeof n == "object" && Object.hasOwn(n, "cause") && !("cause" in this)) {
      const {
        cause: s
      } = n;
      this.cause = s, s instanceof Error && "stack" in s && (this.stack = `${this.stack}
CAUSE: ${s.stack}`);
    }
  }
}
class he extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(nP, e);
  }
  constructor(e, r) {
    if (super(e, r), this.name = this.constructor.name, typeof e == "string" && (this.message = e), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(e).stack, r != null && typeof r == "object" && Object.hasOwn(r, "cause") && !("cause" in this)) {
      const {
        cause: n
      } = r;
      this.cause = n, n instanceof Error && "stack" in n && (this.stack = `${this.stack}
CAUSE: ${n.stack}`);
    }
  }
}
class ot extends he {
  constructor(e, r) {
    if (super(e, r), r != null && typeof r == "object") {
      const {
        cause: n,
        ...s
      } = r;
      Object.assign(this, s);
    }
  }
}
class Pe extends he {
}
class vc extends Pe {
}
var Iu = function() {
  return !1;
}, kt = function() {
  return !0;
};
function fe(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function ne(t) {
  return function e(r) {
    return arguments.length === 0 || fe(r) ? e : t.apply(this, arguments);
  };
}
function q(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return fe(r) ? e : ne(function(s) {
          return t(r, s);
        });
      default:
        return fe(r) && fe(n) ? e : fe(r) ? ne(function(s) {
          return t(s, n);
        }) : fe(n) ? ne(function(s) {
          return t(r, s);
        }) : t(r, n);
    }
  };
}
function sP(t, e) {
  t = t || [], e = e || [];
  var r, n = t.length, s = e.length, i = [];
  for (r = 0; r < n; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < s; )
    i[i.length] = e[r], r += 1;
  return i;
}
function _o(t, e) {
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
      return function(r, n) {
        return e.apply(this, arguments);
      };
    case 3:
      return function(r, n, s) {
        return e.apply(this, arguments);
      };
    case 4:
      return function(r, n, s, i) {
        return e.apply(this, arguments);
      };
    case 5:
      return function(r, n, s, i, o) {
        return e.apply(this, arguments);
      };
    case 6:
      return function(r, n, s, i, o, a) {
        return e.apply(this, arguments);
      };
    case 7:
      return function(r, n, s, i, o, a, c) {
        return e.apply(this, arguments);
      };
    case 8:
      return function(r, n, s, i, o, a, c, l) {
        return e.apply(this, arguments);
      };
    case 9:
      return function(r, n, s, i, o, a, c, l, p) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(r, n, s, i, o, a, c, l, p, f) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function Mu(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!fe(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, fe(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : _o(Math.max(0, i), Mu(t, n, r));
  };
}
var le = /* @__PURE__ */ q(function(e, r) {
  return e === 1 ? ne(r) : _o(e, Mu(e, [], r));
});
function qe(t) {
  return function e(r, n, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return fe(r) ? e : q(function(i, o) {
          return t(r, i, o);
        });
      case 2:
        return fe(r) && fe(n) ? e : fe(r) ? q(function(i, o) {
          return t(i, n, o);
        }) : fe(n) ? q(function(i, o) {
          return t(r, i, o);
        }) : ne(function(i) {
          return t(r, n, i);
        });
      default:
        return fe(r) && fe(n) && fe(s) ? e : fe(r) && fe(n) ? q(function(i, o) {
          return t(i, o, s);
        }) : fe(r) && fe(s) ? q(function(i, o) {
          return t(i, n, o);
        }) : fe(n) && fe(s) ? q(function(i, o) {
          return t(r, i, o);
        }) : fe(r) ? ne(function(i) {
          return t(i, n, s);
        }) : fe(n) ? ne(function(i) {
          return t(r, i, s);
        }) : fe(s) ? ne(function(i) {
          return t(r, n, i);
        }) : t(r, n, s);
    }
  };
}
const Qn = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function iP(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function rr(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!Qn(n)) {
      for (var s = 0; s < t.length; ) {
        if (typeof n[t[s]] == "function")
          return n[t[s]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        s += 1;
      }
      if (iP(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function Co(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const Ge = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
var oP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = Co(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
}();
function aP(t) {
  return function(e) {
    return new oP(t, e);
  };
}
var Fu = /* @__PURE__ */ q(/* @__PURE__ */ rr(["all"], aP, function(e, r) {
  for (var n = 0; n < r.length; ) {
    if (!e(r[n]))
      return !1;
    n += 1;
  }
  return !0;
}));
function mh(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function yi(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function cP(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function Xe(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function lP(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const Tn = typeof Object.is == "function" ? Object.is : lP;
var vh = Object.prototype.toString, jv = /* @__PURE__ */ function() {
  return vh.call(arguments) === "[object Arguments]" ? function(e) {
    return vh.call(e) === "[object Arguments]";
  } : function(e) {
    return Xe("callee", e);
  };
}(), uP = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), yh = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], gh = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), fP = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, yr = /* @__PURE__ */ ne(typeof Object.keys == "function" && !gh ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, s = [], i = gh && jv(e);
  for (r in e)
    Xe(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (uP)
    for (n = yh.length - 1; n >= 0; )
      r = yh[n], Xe(r, e) && !fP(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), Qe = /* @__PURE__ */ ne(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function bh(t, e, r, n) {
  var s = mh(t), i = mh(e);
  function o(a, c) {
    return ku(a, c, r.slice(), n.slice());
  }
  return !yi(function(a, c) {
    return !yi(o, c, a);
  }, i, s);
}
function ku(t, e, r, n) {
  if (Tn(t, e))
    return !0;
  var s = Qe(t);
  if (s !== Qe(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (s) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && cP(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && Tn(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!Tn(t.valueOf(), e.valueOf()))
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
      return n[i] === e;
    i -= 1;
  }
  switch (s) {
    case "Map":
      return t.size !== e.size ? !1 : bh(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : bh(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var o = yr(t);
  if (o.length !== yr(e).length)
    return !1;
  var a = r.concat([t]), c = n.concat([e]);
  for (i = o.length - 1; i >= 0; ) {
    var l = o[i];
    if (!(Xe(l, e) && ku(e[l], t[l], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Dt = /* @__PURE__ */ q(function(e, r) {
  return ku(e, r, [], []);
});
function pP(t, e, r) {
  var n, s;
  if (typeof t.indexOf == "function")
    switch (typeof e) {
      case "number":
        if (e === 0) {
          for (n = 1 / e; r < t.length; ) {
            if (s = t[r], s === 0 && 1 / s === n)
              return r;
            r += 1;
          }
          return -1;
        } else if (e !== e) {
          for (; r < t.length; ) {
            if (s = t[r], typeof s == "number" && s !== s)
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
    if (Dt(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function gi(t, e) {
  return pP(e, t, 0) >= 0;
}
function _n(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function yc(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var Sn = function(e) {
  return (e < 10 ? "0" : "") + e;
}, hP = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + Sn(e.getUTCMonth() + 1) + "-" + Sn(e.getUTCDate()) + "T" + Sn(e.getUTCHours()) + ":" + Sn(e.getUTCMinutes()) + ":" + Sn(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function Tv(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function Zn(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function dP(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function bi(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var mP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = Ge.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function vP(t) {
  return function(e) {
    return new mP(t, e);
  };
}
var yP = /* @__PURE__ */ q(/* @__PURE__ */ rr(["fantasy-land/filter", "filter"], vP, function(t, e) {
  return bi(e) ? Zn(function(r, n) {
    return t(e[n]) && (r[n] = e[n]), r;
  }, {}, yr(e)) : (
    // else
    dP(t, e)
  );
})), gP = /* @__PURE__ */ q(function(e, r) {
  return yP(Tv(e), r);
});
function _v(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return gi(o, a) ? "<Circular>" : _v(o, a);
  }, n = function(i, o) {
    return _n(function(a) {
      return yc(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + _n(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + _n(r, t).concat(n(t, gP(function(i) {
        return /^\d+$/.test(i);
      }, yr(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : yc(hP(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : yc(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var s = t.toString();
        if (s !== "[object Object]")
          return s;
      }
      return "{" + n(t, yr(t)).join(", ") + "}";
  }
}
var Zr = /* @__PURE__ */ ne(function(e) {
  return _v(e, []);
}), Du = /* @__PURE__ */ q(function(e, r) {
  if (e === r)
    return r;
  function n(c, l) {
    if (c > l != l > c)
      return l > c ? l : c;
  }
  var s = n(e, r);
  if (s !== void 0)
    return s;
  var i = n(typeof e, typeof r);
  if (i !== void 0)
    return i === typeof e ? e : r;
  var o = Zr(e), a = n(o, Zr(r));
  return a !== void 0 && a === o ? e : r;
}), bP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = Ge.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), xP = function(e) {
  return function(r) {
    return new bP(e, r);
  };
}, es = /* @__PURE__ */ q(/* @__PURE__ */ rr(["fantasy-land/map", "map"], xP, function(e, r) {
  switch (Object.prototype.toString.call(r)) {
    case "[object Function]":
      return le(r.length, function() {
        return e.call(this, r.apply(this, arguments));
      });
    case "[object Object]":
      return Zn(function(n, s) {
        return n[s] = e(r[s]), n;
      }, {}, yr(r));
    default:
      return _n(e, r);
  }
}));
const Ro = Number.isInteger || function(e) {
  return e << 0 === e;
};
function Nu(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function Io(t, e) {
  var r = t < 0 ? e.length + t : t;
  return Nu(e) ? e.charAt(r) : e[r];
}
var ts = /* @__PURE__ */ q(function(e, r) {
  if (r != null)
    return Ro(e) ? Io(e, r) : r[e];
}), Lu = /* @__PURE__ */ q(function(e, r) {
  return es(ts(e), r);
}), wP = /* @__PURE__ */ ne(function(e) {
  return Qn(e) ? !0 : !e || typeof e != "object" || Nu(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), xh = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function Cv(t, e, r) {
  return function(s, i, o) {
    if (wP(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[xh] != null)
      return r(s, i, o[xh]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function EP(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var Mo = /* @__PURE__ */ q(function(e, r) {
  return _o(e.length, function() {
    return e.apply(r, arguments);
  });
});
function $P(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function OP(t, e, r, n) {
  return t["@@transducer/result"](r[n](Mo(t["@@transducer/step"], t), e));
}
var Vu = /* @__PURE__ */ Cv(EP, OP, $P), SP = /* @__PURE__ */ function() {
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
function Rv(t) {
  return new SP(t);
}
var Sr = /* @__PURE__ */ qe(function(t, e, r) {
  return Vu(typeof t == "function" ? Rv(t) : t, e, r);
}), AP = /* @__PURE__ */ ne(function(e) {
  return le(Sr(Du, 0, Lu("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (!e[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
}), B = /* @__PURE__ */ ne(function(e) {
  return function() {
    return e;
  };
}), PP = /* @__PURE__ */ q(function(e, r) {
  return e && r;
}), jP = /* @__PURE__ */ ne(function(e) {
  return le(Sr(Du, 0, Lu("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function TP(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function _P(t, e, r, n) {
  return r[n](t, e);
}
var CP = /* @__PURE__ */ Cv(Zn, _P, TP), RP = /* @__PURE__ */ q(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : CP(function(n, s) {
    return sP(n, es(s, r));
  }, [], e);
}), IP = /* @__PURE__ */ q(function(e, r) {
  return e.apply(this, r);
}), Bu = /* @__PURE__ */ ne(function(e) {
  return le(e.length, e);
});
function MP(t, e, r) {
  if (Ro(t) && Qn(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var xi = /* @__PURE__ */ ne(function(e) {
  return e == null;
}), FP = /* @__PURE__ */ qe(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !xi(n) && Xe(s, n) && typeof n[s] == "object" ? n[s] : Ro(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return MP(s, r, n);
});
function Uu(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var kP = /* @__PURE__ */ q(function(e, r) {
  var n = le(e, r);
  return le(e, function() {
    return Zn(RP, es(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), Hu = /* @__PURE__ */ ne(function(e) {
  return kP(e.length, e);
}), Ar = /* @__PURE__ */ q(function(e, r) {
  return Uu(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : Hu(PP)(e, r);
});
function Iv(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function Mv(t, e, r) {
  if (r || (r = new NP()), DP(t))
    return t;
  var n = function(i) {
    var o = r.get(t);
    if (o)
      return o;
    r.set(t, i);
    for (var a in t)
      Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a]);
    return i;
  };
  switch (Qe(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n(Array(t.length));
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return Iv(t);
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
function DP(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var NP = /* @__PURE__ */ function() {
  function t() {
    this.map = {}, this.length = 0;
  }
  return t.prototype.set = function(e, r) {
    var n = this.hash(e), s = this.map[n];
    s || (this.map[n] = s = []), s.push([e, r]), this.length += 1;
  }, t.prototype.hash = function(e) {
    var r = [];
    for (var n in e)
      r.push(Object.prototype.toString.call(e[n]));
    return r.join();
  }, t.prototype.get = function(e) {
    if (this.length <= 180) {
      for (var r in this.map)
        for (var o = this.map[r], n = 0; n < o.length; n += 1) {
          var s = o[n];
          if (s[0] === e)
            return s[1];
        }
      return;
    }
    var i = this.hash(e), o = this.map[i];
    if (o)
      for (var n = 0; n < o.length; n += 1) {
        var s = o[n];
        if (s[0] === e)
          return s[1];
      }
  }, t;
}(), LP = /* @__PURE__ */ ne(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), VP = /* @__PURE__ */ ne(function(e) {
  return !e;
}), rs = /* @__PURE__ */ Hu(VP);
function BP(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function qu(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return Qn(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var ns = /* @__PURE__ */ qe(/* @__PURE__ */ qu("slice", function(e, r, n) {
  return Array.prototype.slice.call(n, e, r);
})), Fv = /* @__PURE__ */ ne(/* @__PURE__ */ qu("tail", /* @__PURE__ */ ns(1, 1 / 0)));
function _e() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return _o(arguments[0].length, Sr(BP, arguments[0], Fv(arguments)));
}
var UP = /* @__PURE__ */ ne(function(t) {
  return Io(0, t);
});
function HP(t) {
  return t;
}
var zu = /* @__PURE__ */ ne(HP), qP = /* @__PURE__ */ q(function(e, r) {
  return le(Sr(Du, 0, Lu("length", r)), function() {
    var n = arguments, s = this;
    return e.apply(s, _n(function(i) {
      return i.apply(s, n);
    }, r));
  });
}), zP = /* @__PURE__ */ function() {
  function t(e, r, n, s) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = s, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (Xe(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, Mv(this.valueAcc)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function GP(t, e, r) {
  return function(n) {
    return new zP(t, e, r, n);
  };
}
var KP = /* @__PURE__ */ Mu(4, [], /* @__PURE__ */ rr([], GP, function(e, r, n, s) {
  var i = Rv(function(o, a) {
    var c = n(a), l = e(Xe(c, o) ? o[c] : Mv(r), a);
    return l && l["@@transducer/reduced"] ? Co(o) : (o[c] = l, o);
  });
  return Vu(i, {}, s);
})), en = /* @__PURE__ */ q(function(e, r) {
  return r == null || r !== r ? e : r;
}), JP = /* @__PURE__ */ function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !wh(e, !0, this);
  }, t.prototype.has = function(e) {
    return wh(e, !1, this);
  }, t;
}();
function wh(t, e, r) {
  var n = typeof t, s, i;
  switch (n) {
    case "string":
    case "number":
      return t === 0 && 1 / t === -1 / 0 ? r._items["-0"] ? !0 : (e && (r._items["-0"] = !0), !1) : r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? t in r._items[n] ? !0 : (e && (r._items[n][t] = !0), !1) : (e && (r._items[n] = {}, r._items[n][t] = !0), !1);
    case "boolean":
      if (n in r._items) {
        var o = t ? 1 : 0;
        return r._items[n][o] ? !0 : (e && (r._items[n][o] = !0), !1);
      } else
        return e && (r._items[n] = t ? [!1, !0] : [!0, !1]), !1;
    case "function":
      return r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? gi(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
    case "undefined":
      return r._items[n] ? !0 : (e && (r._items[n] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    default:
      return n = Object.prototype.toString.call(t), n in r._items ? gi(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
  }
}
var WP = /* @__PURE__ */ q(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new JP(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), YP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = Ge.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? Co(n) : n;
  }, t;
}();
function XP(t) {
  return function(e) {
    return new YP(t, e);
  };
}
var QP = /* @__PURE__ */ q(/* @__PURE__ */ rr(["take"], XP, function(e, r) {
  return ns(0, e < 0 ? 1 / 0 : e, r);
}));
function ZP(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return ns(0, r + 1, e);
}
var ej = /* @__PURE__ */ function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = Vu(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
}();
function tj(t) {
  return function(e) {
    return new ej(t, e);
  };
}
var rj = /* @__PURE__ */ q(/* @__PURE__ */ rr([], tj, ZP)), Fo = /* @__PURE__ */ ne(function(t) {
  return Io(-1, t);
}), nj = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = Ge.result, t.prototype["@@transducer/step"] = function(e, r) {
    if (this.f) {
      if (this.f(r))
        return e;
      this.f = null;
    }
    return this.xf["@@transducer/step"](e, r);
  }, t;
}();
function sj(t) {
  return function(e) {
    return new nj(t, e);
  };
}
var ij = /* @__PURE__ */ q(/* @__PURE__ */ rr(["dropWhile"], sj, function(e, r) {
  for (var n = 0, s = r.length; n < s && e(r[n]); )
    n += 1;
  return ns(n, 1 / 0, r);
})), oj = /* @__PURE__ */ q(function(e, r) {
  return e || r;
}), aj = /* @__PURE__ */ q(function(e, r) {
  return Uu(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : Hu(oj)(e, r);
});
function cj(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var lj = /* @__PURE__ */ ne(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : Qn(e) ? [] : Nu(e) ? "" : bi(e) ? {} : jv(e) ? /* @__PURE__ */ function() {
    return arguments;
  }() : cj(e) ? e.constructor.from("") : void 0;
}), uj = /* @__PURE__ */ ne(function(e) {
  return le(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), fj = /* @__PURE__ */ q(/* @__PURE__ */ qu("groupBy", /* @__PURE__ */ KP(function(t, e) {
  return t.push(e), t;
}, []))), pj = /* @__PURE__ */ q(function(e, r) {
  if (e.length === 0 || xi(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!xi(n) && Xe(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), kv = /* @__PURE__ */ q(function(e, r) {
  return pj([e], r);
}), Nt = function(t, e) {
  switch (arguments.length) {
    case 0:
      return Nt;
    case 1:
      return /* @__PURE__ */ function() {
        return function r(n) {
          switch (arguments.length) {
            case 0:
              return r;
            default:
              return Tn(t, n);
          }
        };
      }();
    default:
      return Tn(t, e);
  }
}, Gu = /* @__PURE__ */ qe(function(e, r, n) {
  return le(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), hj = /* @__PURE__ */ q(gi), dj = /* @__PURE__ */ ns(0, -1), Ku = /* @__PURE__ */ q(function(e, r) {
  return le(e + 1, function() {
    var n = arguments[e];
    if (n != null && Uu(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(Zr(n) + ' does not have a method named "' + r + '"');
  });
}), ss = /* @__PURE__ */ ne(function(e) {
  return e != null && Dt(e, lj(e));
}), Dv = /* @__PURE__ */ ne(function(e) {
  return !ss(e);
}), Nv = /* @__PURE__ */ Ku(1, "join");
function Eh(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var mj = /* @__PURE__ */ q(function(e, r) {
  return function(n) {
    return function(s) {
      return es(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
function Ju(t, e) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    var s = t[n];
    Ro(s) ? r = Io(s, r) : r = r[s];
  }
  return r;
}
var vj = /* @__PURE__ */ q(function(e, r) {
  return Zn(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, yr(r));
}), yj = /* @__PURE__ */ qe(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    Xe(i, r) && (s[i] = Xe(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    Xe(i, n) && !Xe(i, s) && (s[i] = n[i]);
  return s;
}), gj = /* @__PURE__ */ qe(function t(e, r, n) {
  return yj(function(s, i, o) {
    return bi(i) && bi(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), Wu = /* @__PURE__ */ q(function(e, r) {
  return gj(function(n, s, i) {
    return i;
  }, e, r);
}), bj = /* @__PURE__ */ q(function(e, r) {
  return Fu(Tv(e), r);
}), Lv = function(t) {
  return {
    value: t,
    map: function(e) {
      return Lv(e(t));
    }
  };
}, xj = /* @__PURE__ */ qe(function(e, r, n) {
  return e(function(s) {
    return Lv(r(s));
  })(n).value;
}), He = /* @__PURE__ */ q(Ju), Vv = /* @__PURE__ */ qe(function(e, r, n) {
  return en(e, Ju(r, n));
}), ko = /* @__PURE__ */ qe(function(e, r, n) {
  return e(Ju(r, n));
}), Bv = /* @__PURE__ */ q(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), Uv = /* @__PURE__ */ qe(function(e, r, n) {
  return Dt(e, ts(r, n));
}), wi = /* @__PURE__ */ qe(function(e, r, n) {
  return en(e, ts(r, n));
}), wj = /* @__PURE__ */ qe(function(e, r, n) {
  return e(ts(r, n));
}), Ej = /* @__PURE__ */ q(function(e, r) {
  if (!(Eh(e) && Eh(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = Array(e < r ? r - e : 0), s = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < s; )
    n[i] = i + e, i += 1;
  return n;
}), $j = /* @__PURE__ */ ne(Co), tn = /* @__PURE__ */ qe(function(e, r, n) {
  return n.replace(e, r);
}), Oj = /* @__PURE__ */ q(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), Yu = /* @__PURE__ */ Ku(1, "split"), Hv = /* @__PURE__ */ q(function(t, e) {
  return Dt(QP(t.length, e), t);
});
function Sj(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var Aj = /* @__PURE__ */ q(function(e, r) {
  if (!Sj(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + Zr(e));
  return Iv(e).test(r);
}), Pj = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = Ge.result, t.prototype["@@transducer/step"] = function(e, r) {
    return yi(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
}();
function jj(t) {
  return function(e) {
    return new Pj(t, e);
  };
}
var Tj = /* @__PURE__ */ q(/* @__PURE__ */ rr([], jj, function(t, e) {
  for (var r = 0, n = e.length, s = [], i; r < n; )
    i = e[r], yi(t, i, s) || (s[s.length] = i), r += 1;
  return s;
})), _j = /* @__PURE__ */ qe(function(e, r, n) {
  return e(n) ? r(n) : n;
}), Do = B(void 0), nr = Dt(Do()), qv = rs(nr), zv = Dt(null), Gv = rs(zv), Cj = rs(xi), Rj = le(1, _e(Qe, Nt("GeneratorFunction"))), Ij = le(1, _e(Qe, Nt("AsyncFunction"))), Lt = jP([_e(Qe, Nt("Function")), Rj, Ij]), Kv = le(1, Lt(Array.isArray) ? Array.isArray : _e(Qe, Nt("Array"))), Mj = Ar(Kv, ss), Fj = Ar(Kv, Dv), Pr = le(1, _e(Qe, Nt("String"))), Jv = Dt("");
function Qc(t) {
  "@babel/helpers - typeof";
  return Qc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Qc(t);
}
var Wv = function(e) {
  return Qc(e) === "object";
}, kj = le(1, Ar(Gv, aj(Wv, Lt))), Dj = rs(kj), Xu = AP([Pr, Dj, Dv]), Nj = rs(Lt), Lj = le(1, Ar(Gv, Wv)), Vj = _e(Qe, Nt("Object")), Bj = _e(Zr, Dt(Zr(Object))), Uj = ko(Ar(Lt, Bj), ["constructor"]), gr = le(1, function(t) {
  if (!Lj(t) || !Vj(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return zv(e) ? !0 : Uj(e);
}), Hj = le(1, _e(Qe, Nt("Number"))), qj = Ar(Hj, isFinite), zj = le(1, qj), Gj = Lt(Number.isFinite) ? le(1, Mo(Number.isFinite, Number)) : zj, Kj = Ar(Gj, qP(Dt, [Math.floor, zu])), Jj = le(1, Kj), Wj = Lt(Number.isInteger) ? le(1, Mo(Number.isInteger, Number)) : Jj, Yj = le(1, _e(Qe, Nt("RegExp")));
function Xj(t) {
  return tT(t) || eT(t) || Zj(t) || Qj();
}
function Qj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zj(t, e) {
  if (t) {
    if (typeof t == "string") return Zc(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Zc(t, e) : void 0;
  }
}
function eT(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function tT(t) {
  if (Array.isArray(t)) return Zc(t);
}
function Zc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var rT = LP(function(t, e) {
  return t.length > e.length;
}), nT = _e(Oj(rT), UP, ts("length")), sT = Bu(function(t, e, r) {
  var n = r.apply(void 0, Xj(t));
  return Cj(n) ? $j(n) : e;
}), iT = function(e) {
  var r = nT(e);
  return le(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return Sr(sT(s), void 0, e);
  });
}, Yv = Gu(Fj, iT, Do), No = uj(hj), Bn = le(3, function(t, e, r) {
  var n = He(t, r), s = He(dj(t), r);
  if (!Nj(n) && !Mj(t)) {
    var i = Mo(n, s);
    return IP(i, e);
  }
}), oT = _j(Pr, tn(/[.*+?^${}()|[\]\\-]/g, "\\$&")), aT = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, $h = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, cT = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, lT = function(e, r, n) {
  aT(e, r, n), $h(n, "str"), $h(r, "replaceValue"), cT(e);
  var s = new RegExp(Yj(e) ? e : oT(e), "g");
  return tn(s, r, n);
}, uT = le(3, lT), fT = Ku(2, "replaceAll"), pT = Lt(String.prototype.replaceAll) ? fT : uT, hT = Bu(function(t, e) {
  return _e(Yu(""), rj(No(t)), Nv(""))(e);
}), Qu = Bu(function(t, e) {
  return _e(Yu(""), ij(No(t)), Nv(""))(e);
}), Xv = { exports: {} }, ye = Xv.exports = {}, ht, dt;
function el() {
  throw new Error("setTimeout has not been defined");
}
function tl() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? ht = setTimeout : ht = el;
  } catch {
    ht = el;
  }
  try {
    typeof clearTimeout == "function" ? dt = clearTimeout : dt = tl;
  } catch {
    dt = tl;
  }
})();
function Qv(t) {
  if (ht === setTimeout)
    return setTimeout(t, 0);
  if ((ht === el || !ht) && setTimeout)
    return ht = setTimeout, setTimeout(t, 0);
  try {
    return ht(t, 0);
  } catch {
    try {
      return ht.call(null, t, 0);
    } catch {
      return ht.call(this, t, 0);
    }
  }
}
function dT(t) {
  if (dt === clearTimeout)
    return clearTimeout(t);
  if ((dt === tl || !dt) && clearTimeout)
    return dt = clearTimeout, clearTimeout(t);
  try {
    return dt(t);
  } catch {
    try {
      return dt.call(null, t);
    } catch {
      return dt.call(this, t);
    }
  }
}
var Ot = [], Hr = !1, fr, Xs = -1;
function mT() {
  !Hr || !fr || (Hr = !1, fr.length ? Ot = fr.concat(Ot) : Xs = -1, Ot.length && Zv());
}
function Zv() {
  if (!Hr) {
    var t = Qv(mT);
    Hr = !0;
    for (var e = Ot.length; e; ) {
      for (fr = Ot, Ot = []; ++Xs < e; )
        fr && fr[Xs].run();
      Xs = -1, e = Ot.length;
    }
    fr = null, Hr = !1, dT(t);
  }
}
ye.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  Ot.push(new ey(t, e)), Ot.length === 1 && !Hr && Qv(Zv);
};
function ey(t, e) {
  this.fun = t, this.array = e;
}
ey.prototype.run = function() {
  this.fun.apply(null, this.array);
};
ye.title = "browser";
ye.browser = !0;
ye.env = {};
ye.argv = [];
ye.version = "";
ye.versions = {};
function Vt() {
}
ye.on = Vt;
ye.addListener = Vt;
ye.once = Vt;
ye.off = Vt;
ye.removeListener = Vt;
ye.removeAllListeners = Vt;
ye.emit = Vt;
ye.prependListener = Vt;
ye.prependOnceListener = Vt;
ye.listeners = function(t) {
  return [];
};
ye.binding = function(t) {
  throw new Error("process.binding is not supported");
};
ye.cwd = function() {
  return "/";
};
ye.chdir = function(t) {
  throw new Error("process.chdir is not supported");
};
ye.umask = function() {
  return 0;
};
var vT = Xv.exports;
const Ei = /* @__PURE__ */ Eo(vT), Zu = () => ko(Aj(/^win/), ["platform"], Ei), Lo = (t) => {
  try {
    const e = new URL(t);
    return hT(":", e.protocol);
  } catch {
    return;
  }
}, yT = _e(Lo, qv), ty = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, ef = (t) => {
  if (Ei.browser)
    return !1;
  const e = Lo(t);
  return nr(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, Vo = (t) => {
  const e = Lo(t);
  return e === "http" || e === "https";
}, gT = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, tf = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = wi(!1, "keepFileProtocol", e), s = wi(Zu, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = pT("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, ry = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  Zu() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < e.length; n += 2)
    r = r.replace(e[n], e[n + 1]);
  return r;
}, rf = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, ie = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, $i = () => {
  if (Ei.browser)
    return ie(globalThis.location.href);
  const t = Ei.cwd(), e = Fo(t);
  return ["/", "\\"].includes(e) ? t : t + (Zu() ? "\\" : "/");
}, Oe = (t, e) => {
  const r = new URL(e, new URL(t, "resolve://"));
  if (r.protocol === "resolve:") {
    const {
      pathname: n,
      search: s,
      hash: i
    } = r;
    return n + s + i;
  }
  return r.toString();
}, is = (t) => {
  if (ef(t))
    return ry(tf(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, nt = (t) => ef(t) ? tf(t) : decodeURI(t), bT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: $i,
  fromFileSystemPath: ry,
  getExtension: ty,
  getHash: rf,
  getProtocol: Lo,
  hasProtocol: yT,
  isFileSystemPath: ef,
  isHttpUrl: Vo,
  isURI: gT,
  resolve: Oe,
  sanitize: is,
  stripHash: ie,
  toFileSystemPath: tf,
  unsanitize: nt
}, Symbol.toStringTag, { value: "Module" }));
let Un = class {
  constructor({
    uri: e,
    mediaType: r = "text/plain",
    data: n,
    parseResult: s
  }) {
    b(this, "uri");
    b(this, "mediaType");
    b(this, "data");
    b(this, "parseResult");
    this.uri = e, this.mediaType = r, this.data = n, this.parseResult = s;
  }
  get extension() {
    return Pr(this.uri) ? ty(this.uri) : "";
  }
  toString() {
    return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(Qe(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
  }
};
class rn {
  constructor({
    refs: e = [],
    circular: r = !1
  } = {}) {
    b(this, "rootRef");
    b(this, "refs");
    b(this, "circular");
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
    const r = Pr(e) ? e : e.uri;
    return qv(this.find((n) => n.uri === r));
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
const ny = {
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
    circularReplacer: zu,
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
}, xT = mj(He(["resolve", "baseURI"]), FP(["resolve", "baseURI"])), wT = (t) => Jv(t) ? $i() : t, sy = (t, e) => {
  const r = Wu(t, e);
  return xj(xT, wT, r);
};
class ET extends he {
  constructor(r, n) {
    super(r, {
      cause: n.cause
    });
    b(this, "plugin");
    this.plugin = n.plugin;
  }
}
const nf = async (t, e, r) => {
  const n = await Promise.all(r.map(Bn([t], e)));
  return r.filter((s, i) => n[i]);
}, sf = async (t, e, r) => {
  let n;
  for (const s of r)
    try {
      const i = await s[t].call(s, ...e);
      return {
        plugin: s,
        result: i
      };
    } catch (i) {
      n = new ET("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class rl extends he {
}
class of extends he {
}
class iy extends of {
}
class oy extends iy {
}
const $T = async (t, e) => {
  const r = e.resolve.resolvers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.resolve.resolverOpts);
  }), n = await nf("canRead", [t, e], r);
  if (ss(n))
    throw new oy(t.uri);
  try {
    const {
      result: s
    } = await sf("read", [t], n);
    return s;
  } catch (s) {
    throw new of(`Error while reading file "${t.uri}"`, {
      cause: s
    });
  }
}, OT = async (t, e) => {
  const r = e.parse.parsers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.parse.parserOpts);
  }), n = await nf("canParse", [t, e], r);
  if (ss(n))
    throw new oy(t.uri);
  try {
    const {
      plugin: s,
      result: i
    } = await sf("parse", [t, e], n);
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new rl(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new rl(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, ST = async (t, e) => {
  const r = new Un({
    uri: is(ie(t)),
    mediaType: e.parse.mediaType
  }), n = await $T(r, e);
  return OT(new Un({
    ...r,
    data: n
  }), e);
};
function AT(t) {
  return t === null;
}
var PT = AT, jT = typeof Yt == "object" && Yt && Yt.Object === Object && Yt, ay = jT, TT = ay, _T = typeof self == "object" && self && self.Object === Object && self, CT = TT || _T || Function("return this")(), Bt = CT, RT = Bt, IT = RT.Symbol, af = IT, Oh = af, cy = Object.prototype, MT = cy.hasOwnProperty, FT = cy.toString, An = Oh ? Oh.toStringTag : void 0;
function kT(t) {
  var e = MT.call(t, An), r = t[An];
  try {
    t[An] = void 0;
    var n = !0;
  } catch {
  }
  var s = FT.call(t);
  return n && (e ? t[An] = r : delete t[An]), s;
}
var DT = kT, NT = Object.prototype, LT = NT.toString;
function VT(t) {
  return LT.call(t);
}
var BT = VT, Sh = af, UT = DT, HT = BT, qT = "[object Null]", zT = "[object Undefined]", Ah = Sh ? Sh.toStringTag : void 0;
function GT(t) {
  return t == null ? t === void 0 ? zT : qT : Ah && Ah in Object(t) ? UT(t) : HT(t);
}
var jr = GT, KT = Array.isArray, Bo = KT;
function JT(t) {
  return t != null && typeof t == "object";
}
var Tr = JT, WT = jr, YT = Bo, XT = Tr, QT = "[object String]";
function ZT(t) {
  return typeof t == "string" || !YT(t) && XT(t) && WT(t) == QT;
}
var e_ = ZT, t_ = jr, r_ = Tr, n_ = "[object Number]";
function s_(t) {
  return typeof t == "number" || r_(t) && t_(t) == n_;
}
var i_ = s_, o_ = jr, a_ = Tr, c_ = "[object Boolean]";
function l_(t) {
  return t === !0 || t === !1 || a_(t) && o_(t) == c_;
}
var u_ = l_;
function f_(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Uo = f_;
let p_ = class {
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
    const n = this.serialiseContent(e.content);
    return n !== void 0 && (r.content = n), r;
  }
  /**
   * @param {object} value
   * @returns {Element}
   */
  deserialise(e) {
    if (!e.element)
      throw new Error("Given value is not an object containing an element name");
    const r = this.namespace.getElementClass(e.element), n = new r();
    n.element !== e.element && (n.element = e.element), e.meta && this.deserialiseObject(e.meta, n.meta), e.attributes && this.deserialiseObject(e.attributes, n.attributes);
    const s = this.deserialiseContent(e.content);
    return (s !== void 0 || n.content === null) && (n.content = s), n;
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
    if (e.forEach((n, s) => {
      n && (r[s.toValue()] = this.serialise(n));
    }), Object.keys(r).length !== 0)
      return r;
  }
  deserialiseObject(e, r) {
    Object.keys(e).forEach((n) => {
      r.set(n, this.deserialise(e[n]));
    });
  }
};
var h_ = p_;
function d_() {
  this.__data__ = [], this.size = 0;
}
var m_ = d_;
function v_(t, e) {
  return t === e || t !== t && e !== e;
}
var ly = v_, y_ = ly;
function g_(t, e) {
  for (var r = t.length; r--; )
    if (y_(t[r][0], e))
      return r;
  return -1;
}
var Ho = g_, b_ = Ho, x_ = Array.prototype, w_ = x_.splice;
function E_(t) {
  var e = this.__data__, r = b_(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : w_.call(e, r, 1), --this.size, !0;
}
var $_ = E_, O_ = Ho;
function S_(t) {
  var e = this.__data__, r = O_(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var A_ = S_, P_ = Ho;
function j_(t) {
  return P_(this.__data__, t) > -1;
}
var T_ = j_, __ = Ho;
function C_(t, e) {
  var r = this.__data__, n = __(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
var R_ = C_, I_ = m_, M_ = $_, F_ = A_, k_ = T_, D_ = R_;
function ln(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
ln.prototype.clear = I_;
ln.prototype.delete = M_;
ln.prototype.get = F_;
ln.prototype.has = k_;
ln.prototype.set = D_;
var qo = ln, N_ = qo;
function L_() {
  this.__data__ = new N_(), this.size = 0;
}
var V_ = L_;
function B_(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
var U_ = B_;
function H_(t) {
  return this.__data__.get(t);
}
var q_ = H_;
function z_(t) {
  return this.__data__.has(t);
}
var G_ = z_, K_ = jr, J_ = Uo, W_ = "[object AsyncFunction]", Y_ = "[object Function]", X_ = "[object GeneratorFunction]", Q_ = "[object Proxy]";
function Z_(t) {
  if (!J_(t))
    return !1;
  var e = K_(t);
  return e == Y_ || e == X_ || e == W_ || e == Q_;
}
var uy = Z_, eC = Bt, tC = eC["__core-js_shared__"], rC = tC, gc = rC, Ph = function() {
  var t = /[^.]+$/.exec(gc && gc.keys && gc.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function nC(t) {
  return !!Ph && Ph in t;
}
var sC = nC, iC = Function.prototype, oC = iC.toString;
function aC(t) {
  if (t != null) {
    try {
      return oC.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var fy = aC, cC = uy, lC = sC, uC = Uo, fC = fy, pC = /[\\^$.*+?()[\]{}|]/g, hC = /^\[object .+?Constructor\]$/, dC = Function.prototype, mC = Object.prototype, vC = dC.toString, yC = mC.hasOwnProperty, gC = RegExp(
  "^" + vC.call(yC).replace(pC, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bC(t) {
  if (!uC(t) || lC(t))
    return !1;
  var e = cC(t) ? gC : hC;
  return e.test(fC(t));
}
var xC = bC;
function wC(t, e) {
  return t == null ? void 0 : t[e];
}
var EC = wC, $C = xC, OC = EC;
function SC(t, e) {
  var r = OC(t, e);
  return $C(r) ? r : void 0;
}
var un = SC, AC = un, PC = Bt, jC = AC(PC, "Map"), cf = jC, TC = un, _C = TC(Object, "create"), zo = _C, jh = zo;
function CC() {
  this.__data__ = jh ? jh(null) : {}, this.size = 0;
}
var RC = CC;
function IC(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var MC = IC, FC = zo, kC = "__lodash_hash_undefined__", DC = Object.prototype, NC = DC.hasOwnProperty;
function LC(t) {
  var e = this.__data__;
  if (FC) {
    var r = e[t];
    return r === kC ? void 0 : r;
  }
  return NC.call(e, t) ? e[t] : void 0;
}
var VC = LC, BC = zo, UC = Object.prototype, HC = UC.hasOwnProperty;
function qC(t) {
  var e = this.__data__;
  return BC ? e[t] !== void 0 : HC.call(e, t);
}
var zC = qC, GC = zo, KC = "__lodash_hash_undefined__";
function JC(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = GC && e === void 0 ? KC : e, this;
}
var WC = JC, YC = RC, XC = MC, QC = VC, ZC = zC, eR = WC;
function fn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
fn.prototype.clear = YC;
fn.prototype.delete = XC;
fn.prototype.get = QC;
fn.prototype.has = ZC;
fn.prototype.set = eR;
var tR = fn, Th = tR, rR = qo, nR = cf;
function sR() {
  this.size = 0, this.__data__ = {
    hash: new Th(),
    map: new (nR || rR)(),
    string: new Th()
  };
}
var iR = sR;
function oR(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var aR = oR, cR = aR;
function lR(t, e) {
  var r = t.__data__;
  return cR(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var Go = lR, uR = Go;
function fR(t) {
  var e = uR(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var pR = fR, hR = Go;
function dR(t) {
  return hR(this, t).get(t);
}
var mR = dR, vR = Go;
function yR(t) {
  return vR(this, t).has(t);
}
var gR = yR, bR = Go;
function xR(t, e) {
  var r = bR(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
var wR = xR, ER = iR, $R = pR, OR = mR, SR = gR, AR = wR;
function pn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
pn.prototype.clear = ER;
pn.prototype.delete = $R;
pn.prototype.get = OR;
pn.prototype.has = SR;
pn.prototype.set = AR;
var py = pn, PR = qo, jR = cf, TR = py, _R = 200;
function CR(t, e) {
  var r = this.__data__;
  if (r instanceof PR) {
    var n = r.__data__;
    if (!jR || n.length < _R - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new TR(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
var RR = CR, IR = qo, MR = V_, FR = U_, kR = q_, DR = G_, NR = RR;
function hn(t) {
  var e = this.__data__ = new IR(t);
  this.size = e.size;
}
hn.prototype.clear = MR;
hn.prototype.delete = FR;
hn.prototype.get = kR;
hn.prototype.has = DR;
hn.prototype.set = NR;
var LR = hn, VR = "__lodash_hash_undefined__";
function BR(t) {
  return this.__data__.set(t, VR), this;
}
var UR = BR;
function HR(t) {
  return this.__data__.has(t);
}
var qR = HR, zR = py, GR = UR, KR = qR;
function Oi(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new zR(); ++e < r; )
    this.add(t[e]);
}
Oi.prototype.add = Oi.prototype.push = GR;
Oi.prototype.has = KR;
var JR = Oi;
function WR(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
var YR = WR;
function XR(t, e) {
  return t.has(e);
}
var QR = XR, ZR = JR, eI = YR, tI = QR, rI = 1, nI = 2;
function sI(t, e, r, n, s, i) {
  var o = r & rI, a = t.length, c = e.length;
  if (a != c && !(o && c > a))
    return !1;
  var l = i.get(t), p = i.get(e);
  if (l && p)
    return l == e && p == t;
  var f = -1, d = !0, u = r & nI ? new ZR() : void 0;
  for (i.set(t, e), i.set(e, t); ++f < a; ) {
    var m = t[f], h = e[f];
    if (n)
      var y = o ? n(h, m, f, e, t, i) : n(m, h, f, t, e, i);
    if (y !== void 0) {
      if (y)
        continue;
      d = !1;
      break;
    }
    if (u) {
      if (!eI(e, function(g, v) {
        if (!tI(u, v) && (m === g || s(m, g, r, n, i)))
          return u.push(v);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === h || s(m, h, r, n, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(t), i.delete(e), d;
}
var hy = sI, iI = Bt, oI = iI.Uint8Array, aI = oI;
function cI(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n, s) {
    r[++e] = [s, n];
  }), r;
}
var lI = cI;
function uI(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n) {
    r[++e] = n;
  }), r;
}
var fI = uI, _h = af, Ch = aI, pI = ly, hI = hy, dI = lI, mI = fI, vI = 1, yI = 2, gI = "[object Boolean]", bI = "[object Date]", xI = "[object Error]", wI = "[object Map]", EI = "[object Number]", $I = "[object RegExp]", OI = "[object Set]", SI = "[object String]", AI = "[object Symbol]", PI = "[object ArrayBuffer]", jI = "[object DataView]", Rh = _h ? _h.prototype : void 0, bc = Rh ? Rh.valueOf : void 0;
function TI(t, e, r, n, s, i, o) {
  switch (r) {
    case jI:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case PI:
      return !(t.byteLength != e.byteLength || !i(new Ch(t), new Ch(e)));
    case gI:
    case bI:
    case EI:
      return pI(+t, +e);
    case xI:
      return t.name == e.name && t.message == e.message;
    case $I:
    case SI:
      return t == e + "";
    case wI:
      var a = dI;
    case OI:
      var c = n & vI;
      if (a || (a = mI), t.size != e.size && !c)
        return !1;
      var l = o.get(t);
      if (l)
        return l == e;
      n |= yI, o.set(t, e);
      var p = hI(a(t), a(e), n, s, i, o);
      return o.delete(t), p;
    case AI:
      if (bc)
        return bc.call(t) == bc.call(e);
  }
  return !1;
}
var _I = TI;
function CI(t, e) {
  for (var r = -1, n = e.length, s = t.length; ++r < n; )
    t[s + r] = e[r];
  return t;
}
var RI = CI, II = RI, MI = Bo;
function FI(t, e, r) {
  var n = e(t);
  return MI(t) ? n : II(n, r(t));
}
var kI = FI;
function DI(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, s = 0, i = []; ++r < n; ) {
    var o = t[r];
    e(o, r, t) && (i[s++] = o);
  }
  return i;
}
var NI = DI;
function LI() {
  return [];
}
var VI = LI, BI = NI, UI = VI, HI = Object.prototype, qI = HI.propertyIsEnumerable, Ih = Object.getOwnPropertySymbols, zI = Ih ? function(t) {
  return t == null ? [] : (t = Object(t), BI(Ih(t), function(e) {
    return qI.call(t, e);
  }));
} : UI, GI = zI;
function KI(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var JI = KI, WI = jr, YI = Tr, XI = "[object Arguments]";
function QI(t) {
  return YI(t) && WI(t) == XI;
}
var ZI = QI, Mh = ZI, eM = Tr, dy = Object.prototype, tM = dy.hasOwnProperty, rM = dy.propertyIsEnumerable, nM = Mh(/* @__PURE__ */ function() {
  return arguments;
}()) ? Mh : function(t) {
  return eM(t) && tM.call(t, "callee") && !rM.call(t, "callee");
}, sM = nM, Si = { exports: {} };
function iM() {
  return !1;
}
var oM = iM;
Si.exports;
(function(t, e) {
  var r = Bt, n = oM, s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, l = c || n;
  t.exports = l;
})(Si, Si.exports);
var my = Si.exports, aM = 9007199254740991, cM = /^(?:0|[1-9]\d*)$/;
function lM(t, e) {
  var r = typeof t;
  return e = e ?? aM, !!e && (r == "number" || r != "symbol" && cM.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var uM = lM, fM = 9007199254740991;
function pM(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= fM;
}
var vy = pM, hM = jr, dM = vy, mM = Tr, vM = "[object Arguments]", yM = "[object Array]", gM = "[object Boolean]", bM = "[object Date]", xM = "[object Error]", wM = "[object Function]", EM = "[object Map]", $M = "[object Number]", OM = "[object Object]", SM = "[object RegExp]", AM = "[object Set]", PM = "[object String]", jM = "[object WeakMap]", TM = "[object ArrayBuffer]", _M = "[object DataView]", CM = "[object Float32Array]", RM = "[object Float64Array]", IM = "[object Int8Array]", MM = "[object Int16Array]", FM = "[object Int32Array]", kM = "[object Uint8Array]", DM = "[object Uint8ClampedArray]", NM = "[object Uint16Array]", LM = "[object Uint32Array]", pe = {};
pe[CM] = pe[RM] = pe[IM] = pe[MM] = pe[FM] = pe[kM] = pe[DM] = pe[NM] = pe[LM] = !0;
pe[vM] = pe[yM] = pe[TM] = pe[gM] = pe[_M] = pe[bM] = pe[xM] = pe[wM] = pe[EM] = pe[$M] = pe[OM] = pe[SM] = pe[AM] = pe[PM] = pe[jM] = !1;
function VM(t) {
  return mM(t) && dM(t.length) && !!pe[hM(t)];
}
var BM = VM;
function UM(t) {
  return function(e) {
    return t(e);
  };
}
var HM = UM, Ai = { exports: {} };
Ai.exports;
(function(t, e) {
  var r = ay, n = e && !e.nodeType && e, s = n && !0 && t && !t.nodeType && t, i = s && s.exports === n, o = i && r.process, a = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  t.exports = a;
})(Ai, Ai.exports);
var qM = Ai.exports, zM = BM, GM = HM, Fh = qM, kh = Fh && Fh.isTypedArray, KM = kh ? GM(kh) : zM, yy = KM, JM = JI, WM = sM, YM = Bo, XM = my, QM = uM, ZM = yy, eF = Object.prototype, tF = eF.hasOwnProperty;
function rF(t, e) {
  var r = YM(t), n = !r && WM(t), s = !r && !n && XM(t), i = !r && !n && !s && ZM(t), o = r || n || s || i, a = o ? JM(t.length, String) : [], c = a.length;
  for (var l in t)
    (e || tF.call(t, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    QM(l, c))) && a.push(l);
  return a;
}
var nF = rF, sF = Object.prototype;
function iF(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || sF;
  return t === r;
}
var oF = iF;
function aF(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var cF = aF, lF = cF, uF = lF(Object.keys, Object), fF = uF, pF = oF, hF = fF, dF = Object.prototype, mF = dF.hasOwnProperty;
function vF(t) {
  if (!pF(t))
    return hF(t);
  var e = [];
  for (var r in Object(t))
    mF.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var yF = vF, gF = uy, bF = vy;
function xF(t) {
  return t != null && bF(t.length) && !gF(t);
}
var wF = xF, EF = nF, $F = yF, OF = wF;
function SF(t) {
  return OF(t) ? EF(t) : $F(t);
}
var AF = SF, PF = kI, jF = GI, TF = AF;
function _F(t) {
  return PF(t, TF, jF);
}
var CF = _F, Dh = CF, RF = 1, IF = Object.prototype, MF = IF.hasOwnProperty;
function FF(t, e, r, n, s, i) {
  var o = r & RF, a = Dh(t), c = a.length, l = Dh(e), p = l.length;
  if (c != p && !o)
    return !1;
  for (var f = c; f--; ) {
    var d = a[f];
    if (!(o ? d in e : MF.call(e, d)))
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
    if (n)
      var E = o ? n(v, g, d, e, t, i) : n(g, v, d, t, e, i);
    if (!(E === void 0 ? g === v || s(g, v, r, n, i) : E)) {
      h = !1;
      break;
    }
    y || (y = d == "constructor");
  }
  if (h && !y) {
    var w = t.constructor, R = e.constructor;
    w != R && "constructor" in t && "constructor" in e && !(typeof w == "function" && w instanceof w && typeof R == "function" && R instanceof R) && (h = !1);
  }
  return i.delete(t), i.delete(e), h;
}
var kF = FF, DF = un, NF = Bt, LF = DF(NF, "DataView"), VF = LF, BF = un, UF = Bt, HF = BF(UF, "Promise"), qF = HF, zF = un, GF = Bt, KF = zF(GF, "Set"), JF = KF, WF = un, YF = Bt, XF = WF(YF, "WeakMap"), QF = XF, nl = VF, sl = cf, il = qF, ol = JF, al = QF, gy = jr, dn = fy, Nh = "[object Map]", ZF = "[object Object]", Lh = "[object Promise]", Vh = "[object Set]", Bh = "[object WeakMap]", Uh = "[object DataView]", ek = dn(nl), tk = dn(sl), rk = dn(il), nk = dn(ol), sk = dn(al), lr = gy;
(nl && lr(new nl(new ArrayBuffer(1))) != Uh || sl && lr(new sl()) != Nh || il && lr(il.resolve()) != Lh || ol && lr(new ol()) != Vh || al && lr(new al()) != Bh) && (lr = function(t) {
  var e = gy(t), r = e == ZF ? t.constructor : void 0, n = r ? dn(r) : "";
  if (n)
    switch (n) {
      case ek:
        return Uh;
      case tk:
        return Nh;
      case rk:
        return Lh;
      case nk:
        return Vh;
      case sk:
        return Bh;
    }
  return e;
});
var ik = lr, xc = LR, ok = hy, ak = _I, ck = kF, Hh = ik, qh = Bo, zh = my, lk = yy, uk = 1, Gh = "[object Arguments]", Kh = "[object Array]", Hs = "[object Object]", fk = Object.prototype, Jh = fk.hasOwnProperty;
function pk(t, e, r, n, s, i) {
  var o = qh(t), a = qh(e), c = o ? Kh : Hh(t), l = a ? Kh : Hh(e);
  c = c == Gh ? Hs : c, l = l == Gh ? Hs : l;
  var p = c == Hs, f = l == Hs, d = c == l;
  if (d && zh(t)) {
    if (!zh(e))
      return !1;
    o = !0, p = !1;
  }
  if (d && !p)
    return i || (i = new xc()), o || lk(t) ? ok(t, e, r, n, s, i) : ak(t, e, c, r, n, s, i);
  if (!(r & uk)) {
    var u = p && Jh.call(t, "__wrapped__"), m = f && Jh.call(e, "__wrapped__");
    if (u || m) {
      var h = u ? t.value() : t, y = m ? e.value() : e;
      return i || (i = new xc()), s(h, y, r, n, i);
    }
  }
  return d ? (i || (i = new xc()), ck(t, e, r, n, s, i)) : !1;
}
var hk = pk, dk = hk, Wh = Tr;
function by(t, e, r, n, s) {
  return t === e ? !0 : t == null || e == null || !Wh(t) && !Wh(e) ? t !== t && e !== e : dk(t, e, r, n, by, s);
}
var mk = by, vk = mk;
function yk(t, e) {
  return vk(t, e);
}
var gk = yk;
let bk = class xy {
  constructor(e, r) {
    this.key = e, this.value = r;
  }
  /**
   * @returns {KeyValuePair}
   */
  clone() {
    const e = new xy();
    return this.key && (e.key = this.key.clone()), this.value && (e.value = this.value.clone()), e;
  }
};
var Ko = bk, xk = "Expected a function";
function wk(t) {
  if (typeof t != "function")
    throw new TypeError(xk);
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
var Jo = wk;
const Ek = Jo;
function wc(t) {
  return typeof t == "string" ? (e) => e.element === t : t.constructor && t.extend ? (e) => e instanceof t : t;
}
let wy = class cl {
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
    return this.map(e, r).reduce((n, s) => n.concat(s), []);
  }
  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts an element of this array as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArraySlice.prototype
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(e, r) {
    const n = [];
    return this.forEach((s) => {
      const i = e.bind(r)(s);
      i && n.push(i);
    }), n;
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  filter(e, r) {
    return e = wc(e), new cl(this.elements.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(e, r) {
    return e = wc(e), new cl(this.elements.filter(Ek(e), r));
  }
  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(e, r) {
    return e = wc(e), this.elements.find(e, r);
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
typeof Symbol < "u" && (wy.prototype[Symbol.iterator] = function() {
  return this.elements[Symbol.iterator]();
});
var Wo = wy;
const $k = gk, qs = Ko, Gt = Wo;
let Ok = class Qs {
  constructor(e, r, n) {
    r && (this.meta = r), n && (this.attributes = n), this.content = e;
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
    return this.content instanceof Qs ? this.content.toValue() : this.content instanceof qs ? {
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
    let n = new Gt();
    const s = (o, a) => (o.push(a), o), i = (o, a) => {
      a.element === r && o.push(a);
      const c = a.findRecursive(r);
      return c && c.reduce(s, o), a.content instanceof qs && (a.content.key && i(o, a.content.key), a.content.value && i(o, a.content.value)), o;
    };
    return this.content && (this.content.element && i(n, this.content), Array.isArray(this.content) && this.content.reduce(i, n)), e.isEmpty || (n = n.filter((o) => {
      let a = o.parents.map((c) => c.element);
      for (const c in e) {
        const l = e[c], p = a.indexOf(l);
        if (p !== -1)
          a = a.splice(0, p);
        else
          return !1;
      }
      return !0;
    })), n;
  }
  set(e) {
    return this.content = e, this;
  }
  equals(e) {
    return $k(this.toValue(), e);
  }
  getMetaProperty(e, r) {
    if (!this.meta.hasKey(e)) {
      if (this.isFrozen) {
        const n = this.refract(r);
        return n.freeze(), n;
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
    if (e instanceof Qs)
      this._content = e;
    else if (e instanceof Gt)
      this.content = e.elements;
    else if (typeof e == "string" || typeof e == "number" || typeof e == "boolean" || e === "null" || e == null)
      this._content = e;
    else if (e instanceof qs)
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
    const r = new Gt();
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
      return new Gt(this.content);
    if (this.content instanceof qs) {
      const e = new Gt([this.content.key]);
      return this.content.value && e.push(this.content.value), e;
    }
    return this.content instanceof Qs ? new Gt([this.content]) : new Gt();
  }
  /**
  * Returns all of the children elements found within the element recursively.
  * @type ArraySlice
  * @see children
  */
  get recursiveChildren() {
    const e = new Gt();
    return this.children.forEach((r) => {
      e.push(r), r.recursiveChildren.forEach((n) => {
        e.push(n);
      });
    }), e;
  }
};
var Ut = Ok;
const Sk = Ut;
let Ak = class extends Sk {
  constructor(e, r, n) {
    super(e || null, r, n), this.element = "null";
  }
  primitive() {
    return "null";
  }
  set() {
    return new Error("Cannot set the value of null");
  }
};
var Pk = Ak;
const jk = Ut;
var Tk = class extends jk {
  constructor(e, r, n) {
    super(e, r, n), this.element = "string";
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
const _k = Ut;
var Ck = class extends _k {
  constructor(e, r, n) {
    super(e, r, n), this.element = "number";
  }
  primitive() {
    return "number";
  }
};
const Rk = Ut;
var Ik = class extends Rk {
  constructor(e, r, n) {
    super(e, r, n), this.element = "boolean";
  }
  primitive() {
    return "boolean";
  }
};
const Mk = Jo, Fk = Ut, Yh = Wo;
let Hn = class extends Fk {
  constructor(e, r, n) {
    super(e || [], r, n), this.element = "array";
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
    return this.map(e, r).reduce((n, s) => n.concat(s), []);
  }
  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts an element of this array as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArrayElement.prototype
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(e, r) {
    const n = [];
    return this.forEach((s) => {
      const i = e.bind(r)(s);
      i && n.push(i);
    }), n;
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  filter(e, r) {
    return new Yh(this.content.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  reject(e, r) {
    return this.filter(Mk(e), r);
  }
  /**
   * This is a reduce function specifically for Minim arrays and objects. It
   * allows for returning normal values or Minim instances, so it converts any
   * primitives on each step.
   */
  reduce(e, r) {
    let n, s;
    r !== void 0 ? (n = 0, s = this.refract(r)) : (n = 1, s = this.primitive() === "object" ? this.first.value : this.first);
    for (let i = n; i < this.length; i += 1) {
      const o = this.content[i];
      this.primitive() === "object" ? s = this.refract(e(s, o.value, o.key, o, this)) : s = this.refract(e(s, o, i, this));
    }
    return s;
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
    this.content.forEach((n, s) => {
      e.bind(r)(n, this.refract(s));
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
    const n = r || {}, s = !!n.recursive, i = n.results === void 0 ? [] : n.results;
    return this.forEach((o, a, c) => {
      s && o.findElements !== void 0 && o.findElements(e, {
        results: i,
        recursive: s
      }), e(o, a, c) && i.push(o);
    }), i;
  }
  /**
   * Recusively search all descendents using a condition function.
   * @param condition
   * @returns {ArraySlice}
   */
  find(e) {
    return new Yh(this.findElements(e, { recursive: !0 }));
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
    return this.map((r) => e(r), this).reduce((r, n) => r.concat(n), this.empty());
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
Hn.empty = function() {
  return new this();
};
Hn["fantasy-land/empty"] = Hn.empty;
typeof Symbol < "u" && (Hn.prototype[Symbol.iterator] = function() {
  return this.content[Symbol.iterator]();
});
var Ey = Hn;
const kk = Ko, Dk = Ut;
var $y = class extends Dk {
  constructor(e, r, n, s) {
    super(new kk(), n, s), this.element = "member", this.key = e, this.value = r;
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
const Nk = Jo, Lk = Wo;
let Vk = class Oy extends Lk {
  map(e, r) {
    return this.elements.map((n) => e.bind(r)(n.value, n.key, n));
  }
  filter(e, r) {
    return new Oy(this.elements.filter((n) => e.bind(r)(n.value, n.key, n)));
  }
  reject(e, r) {
    return this.filter(Nk(e.bind(r)));
  }
  forEach(e, r) {
    return this.elements.forEach((n, s) => {
      e.bind(r)(n.value, n.key, n, s);
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
var Sy = Vk;
const Bk = Jo, Uk = Uo, Hk = Ey, qk = $y, zk = Sy;
let Gk = class extends Hk {
  constructor(e, r, n) {
    super(e || [], r, n), this.element = "object";
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
    return this.content = this.content.filter((n) => n.key.toValue() === e ? (r = n, !1) : !0), r;
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
    if (Uk(e))
      return Object.keys(e).forEach((i) => {
        this.set(i, e[i]);
      }), this;
    const n = e, s = this.getMember(n);
    return s ? s.value = r : this.content.push(new qk(n, r)), this;
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
    return this.content.map((n) => e.bind(r)(n.value, n.key, n));
  }
  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts the value, key and member element of this object as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(e, r) {
    const n = [];
    return this.forEach((s, i, o) => {
      const a = e.bind(r)(s, i, o);
      a && n.push(a);
    }), n;
  }
  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @returns {ObjectSlice}
   */
  filter(e, r) {
    return new zk(this.content).filter(e, r);
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
    return this.filter(Bk(e), r);
  }
  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @memberof ObjectElement.prototype
   */
  forEach(e, r) {
    return this.content.forEach((n) => e.bind(r)(n.value, n.key, n));
  }
};
var Kk = Gk;
const Jk = Ut;
var Wk = class extends Jk {
  constructor(e, r, n) {
    super(e || [], r, n), this.element = "link";
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
const Yk = Ut;
var Xk = class extends Yk {
  constructor(e, r, n) {
    super(e || [], r, n), this.element = "ref", this.path || (this.path = "element");
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
const mn = Ut, Ay = Pk, Py = Tk, jy = Ck, Ty = Ik, _y = Ey, Cy = $y, lf = Kk, Qk = Wk, Ry = Xk, Iy = Wo, Zk = Sy, eD = Ko;
function Yo(t) {
  return t instanceof mn ? t : typeof t == "string" ? new Py(t) : typeof t == "number" ? new jy(t) : typeof t == "boolean" ? new Ty(t) : t === null ? new Ay() : Array.isArray(t) ? new _y(t.map(Yo)) : typeof t == "object" ? new lf(t) : t;
}
mn.prototype.ObjectElement = lf;
mn.prototype.RefElement = Ry;
mn.prototype.MemberElement = Cy;
mn.prototype.refract = Yo;
Iy.prototype.refract = Yo;
var My = {
  Element: mn,
  NullElement: Ay,
  StringElement: Py,
  NumberElement: jy,
  BooleanElement: Ty,
  ArrayElement: _y,
  MemberElement: Cy,
  ObjectElement: lf,
  LinkElement: Qk,
  RefElement: Ry,
  refract: Yo,
  ArraySlice: Iy,
  ObjectSlice: Zk,
  KeyValuePair: eD
};
const tD = PT, rD = e_, nD = i_, sD = u_, iD = Uo, Fy = h_, Se = My;
let ky = class {
  constructor(e) {
    this.elementMap = {}, this.elementDetection = [], this.Element = Se.Element, this.KeyValuePair = Se.KeyValuePair, (!e || !e.noDefault) && this.useDefault(), this._attributeElementKeys = [], this._attributeElementArrayKeys = [];
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
    return this.register("null", Se.NullElement).register("string", Se.StringElement).register("number", Se.NumberElement).register("boolean", Se.BooleanElement).register("array", Se.ArrayElement).register("object", Se.ObjectElement).register("member", Se.MemberElement).register("ref", Se.RefElement).register("link", Se.LinkElement), this.detect(tD, Se.NullElement, !1).detect(rD, Se.StringElement, !1).detect(nD, Se.NumberElement, !1).detect(sD, Se.BooleanElement, !1).detect(Array.isArray, Se.ArrayElement, !1).detect(iD, Se.ObjectElement, !1), this;
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
  detect(e, r, n) {
    return (n === void 0 ? !0 : n) ? this.elementDetection.unshift([e, r]) : this.elementDetection.push([e, r]), this;
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
    for (let n = 0; n < this.elementDetection.length; n += 1) {
      const s = this.elementDetection[n][0], i = this.elementDetection[n][1];
      if (s(e)) {
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
    return new Fy(this);
  }
};
Fy.prototype.Namespace = ky;
var oD = ky;
const aD = oD, Je = My;
var cD = aD, qr = Ko, qn = Je.ArraySlice, Pi = Je.ObjectSlice, lD = Je.Element, _t = Je.StringElement, ll = Je.NumberElement, Ct = Je.BooleanElement, ul = Je.NullElement, oe = Je.ArrayElement, I = Je.ObjectElement, os = Je.MemberElement, Pt = Je.RefElement, fl = Je.LinkElement, uf = Je.refract;
class ji extends _t {
  // classes: warning | error
  constructor(e, r, n) {
    super(e, r, n), this.element = "annotation";
  }
  get code() {
    return this.attributes.get("code");
  }
  set code(e) {
    this.attributes.set("code", e);
  }
}
class Ti extends _t {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}
class at extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.element = "parseResult";
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
    if (nr(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
}
class _i extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.element = "sourceMap";
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
    const r = new oe([e.start.row, e.start.column, e.start.char]), n = new oe([e.end.row, e.end.column, e.end.char]);
    r.classes.push("position"), n.classes.push("position"), this.push(r).push(n);
  }
}
const uD = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", fD = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, pD = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, hD = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof oe) && e.classes.includes(t), Kt = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, F = (t) => t({
  hasMethod: uD,
  hasBasicElementProps: fD,
  primitiveEq: pD,
  isElementType: Kt,
  hasClass: hD
}), ve = F(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof lD || t(r) && e(void 0, r)), W = F(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof _t || t(r) && e("string", r)), ff = F(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof ll || t(r) && e("number", r)), pf = F(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof ul || t(r) && e("null", r)), as = F(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Ct || t(r) && e("boolean", r)), X = F(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof I || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Ne = F(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof oe && !(n instanceof I) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), ut = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof os || t(n) && e("member", n) && r(void 0, n)), Dy = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fl || t(n) && e("link", n) && r(void 0, n)), Ny = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Pt || t(n) && e("ref", n) && r(void 0, n)), dD = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ji || t(n) && e("annotation", n) && r("array", n)), mD = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ti || t(n) && e("comment", n) && r("string", n)), Ly = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof at || t(n) && e("parseResult", n) && r("array", n)), Vy = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof _i || t(n) && e("sourceMap", n) && r("array", n)), vr = (t) => Kt("object", t) || Kt("array", t) || Kt("boolean", t) || Kt("number", t) || Kt("string", t) || Kt("null", t) || Kt("member", t), cs = (t) => Vy(t.meta.get("sourceMap")), vD = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Ne(r) ? Fu(No(r.toValue()), t) : !1;
}, Xo = (t, e) => t.length === 0 ? !0 : Fu(No(e.classes.toValue()), t), yD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: cs,
  includesClasses: Xo,
  includesSymbols: vD,
  isAnnotationElement: dD,
  isArrayElement: Ne,
  isBooleanElement: as,
  isCommentElement: mD,
  isElement: ve,
  isLinkElement: Dy,
  isMemberElement: ut,
  isNullElement: pf,
  isNumberElement: ff,
  isObjectElement: X,
  isParseResultElement: Ly,
  isPrimitiveElement: vr,
  isRefElement: Ny,
  isSourceMapElement: Vy,
  isStringElement: W
}, Symbol.toStringTag, { value: "Module" }));
class By extends cD {
  constructor() {
    super(), this.register("annotation", ji), this.register("comment", Ti), this.register("parseResult", at), this.register("sourceMap", _i);
  }
}
const Uy = new By(), ls = (t) => {
  const e = new By();
  return gr(t) && e.use(t), e;
}, Hy = () => ({
  predicates: {
    ...yD
  },
  namespace: Uy
}), Qo = (t, e, r) => {
  const n = t[e];
  if (n != null) {
    if (!r && typeof n == "function")
      return n;
    const s = r ? n.leave : n.enter;
    if (typeof s == "function")
      return s;
  } else {
    const s = r ? t.leave : t.enter;
    if (s != null) {
      if (typeof s == "function")
        return s;
      const i = s[e];
      if (typeof i == "function")
        return i;
    }
  }
  return null;
}, Q = {}, us = (t) => t == null ? void 0 : t.type, qy = (t) => typeof us(t) == "string", hf = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), Zo = (t, {
  visitFnGetter: e = Qo,
  nodeTypeGetter: r = us,
  breakSymbol: n = Q,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    enter(l, p, f, d, u, m) {
      let h = l, y = !1;
      const g = {
        ...m,
        replaceWith(v, E) {
          m.replaceWith(v, E), h = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const E = e(t[v], r(h), !1);
          if (typeof E == "function") {
            const w = E.call(t[v], h, p, f, d, u, g);
            if (typeof (w == null ? void 0 : w.then) == "function")
              throw new ot("Async visitor not supported in sync mode", {
                visitor: t[v],
                visitFn: E
              });
            if (w === i)
              c[v] = h;
            else if (w === n)
              c[v] = n;
            else {
              if (w === s)
                return w;
              if (w !== void 0)
                if (o)
                  h = w, y = !0;
                else
                  return w;
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
            const E = v.call(t[g], h, p, f, d, u, y);
            if (typeof (E == null ? void 0 : E.then) == "function")
              throw new ot("Async visitor not supported in sync mode", {
                visitor: t[g],
                visitFn: v
              });
            if (E === n)
              c[g] = n;
            else if (E !== void 0 && E !== i)
              return E;
          }
        } else c[g] === h && (c[g] = a);
    }
  };
}, gD = (t, {
  visitFnGetter: e = Qo,
  nodeTypeGetter: r = us,
  breakSymbol: n = Q,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    async enter(l, p, f, d, u, m) {
      let h = l, y = !1;
      const g = {
        ...m,
        replaceWith(v, E) {
          m.replaceWith(v, E), h = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const E = e(t[v], r(h), !1);
          if (typeof E == "function") {
            const w = await E.call(t[v], h, p, f, d, u, g);
            if (w === i)
              c[v] = h;
            else if (w === n)
              c[v] = n;
            else {
              if (w === s)
                return w;
              if (w !== void 0)
                if (o)
                  h = w, y = !0;
                else
                  return w;
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
            const E = await v.call(t[g], h, p, f, d, u, y);
            if (E === n)
              c[g] = n;
            else if (E !== void 0 && E !== i)
              return E;
          }
        } else c[g] === h && (c[g] = a);
    }
  };
};
Zo[Symbol.for("nodejs.util.promisify.custom")] = gD;
const df = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = Q,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Qo,
  nodeTypeGetter: c = us,
  nodePredicate: l = qy,
  nodeCloneFn: p = hf,
  detectCycles: f = !0
} = {}) => {
  const d = r || {};
  let u, m = Array.isArray(t), h = [t], y = -1, g, v = [], E = t;
  const w = [], R = [];
  do {
    y += 1;
    const k = y === h.length;
    let A;
    const U = k && v.length !== 0;
    if (k) {
      if (A = R.length === 0 ? void 0 : w.pop(), E = g, g = R.pop(), U)
        if (m) {
          E = E.slice();
          let $ = 0;
          for (const [D, N] of v) {
            const se = D - $;
            N === i ? (E.splice(se, 1), $ += 1) : E[se] = N;
          }
        } else {
          E = p(E);
          for (const [$, D] of v)
            E[$] = D;
        }
      y = u.index, h = u.keys, v = u.edits, m = u.inArray, u = u.prev;
    } else if (g !== i && g !== void 0) {
      if (A = m ? y : h[y], E = g[A], E === i || E === void 0)
        continue;
      w.push(A);
    }
    let P;
    if (!Array.isArray(E)) {
      var S;
      if (!l(E))
        throw new ot(`Invalid AST Node:  ${String(E)}`, {
          node: E
        });
      if (f && R.includes(E)) {
        w.pop();
        continue;
      }
      const $ = a(e, c(E), k);
      if ($) {
        for (const [N, se] of Object.entries(n))
          e[N] = se;
        const D = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(N, se) {
            typeof se == "function" ? se(N, E, A, g, w, R) : g && (g[A] = N), k || (E = N);
          }
        };
        P = $.call(e, E, A, g, w, R, D);
      }
      if (typeof ((S = P) === null || S === void 0 ? void 0 : S.then) == "function")
        throw new ot("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: $
        });
      if (P === s)
        break;
      if (P === o) {
        if (!k) {
          w.pop();
          continue;
        }
      } else if (P !== void 0 && (v.push([A, P]), !k))
        if (l(P))
          E = P;
        else {
          w.pop();
          continue;
        }
    }
    if (P === void 0 && U && v.push([A, E]), !k) {
      var C;
      u = {
        inArray: m,
        index: y,
        keys: h,
        edits: v,
        prev: u
      }, m = Array.isArray(E), h = m ? E : (C = d[c(E)]) !== null && C !== void 0 ? C : [], y = -1, v = [], g !== i && g !== void 0 && R.push(g), g = E;
    }
  } while (u !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
df[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = Q,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Qo,
  nodeTypeGetter: c = us,
  nodePredicate: l = qy,
  nodeCloneFn: p = hf,
  detectCycles: f = !0
} = {}) => {
  const d = r || {};
  let u, m = Array.isArray(t), h = [t], y = -1, g, v = [], E = t;
  const w = [], R = [];
  do {
    y += 1;
    const C = y === h.length;
    let k;
    const A = C && v.length !== 0;
    if (C) {
      if (k = R.length === 0 ? void 0 : w.pop(), E = g, g = R.pop(), A)
        if (m) {
          E = E.slice();
          let P = 0;
          for (const [$, D] of v) {
            const N = $ - P;
            D === i ? (E.splice(N, 1), P += 1) : E[N] = D;
          }
        } else {
          E = p(E);
          for (const [P, $] of v)
            E[P] = $;
        }
      y = u.index, h = u.keys, v = u.edits, m = u.inArray, u = u.prev;
    } else if (g !== i && g !== void 0) {
      if (k = m ? y : h[y], E = g[k], E === i || E === void 0)
        continue;
      w.push(k);
    }
    let U;
    if (!Array.isArray(E)) {
      if (!l(E))
        throw new ot(`Invalid AST Node: ${String(E)}`, {
          node: E
        });
      if (f && R.includes(E)) {
        w.pop();
        continue;
      }
      const P = a(e, c(E), C);
      if (P) {
        for (const [D, N] of Object.entries(n))
          e[D] = N;
        const $ = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(D, N) {
            typeof N == "function" ? N(D, E, k, g, w, R) : g && (g[k] = D), C || (E = D);
          }
        };
        U = await P.call(e, E, k, g, w, R, $);
      }
      if (U === s)
        break;
      if (U === o) {
        if (!C) {
          w.pop();
          continue;
        }
      } else if (U !== void 0 && (v.push([k, U]), !C))
        if (l(U))
          E = U;
        else {
          w.pop();
          continue;
        }
    }
    if (U === void 0 && A && v.push([k, E]), !C) {
      var S;
      u = {
        inArray: m,
        index: y,
        keys: h,
        edits: v,
        prev: u
      }, m = Array.isArray(E), h = m ? E : (S = d[c(E)]) !== null && S !== void 0 ? S : [], y = -1, v = [], g !== i && g !== void 0 && R.push(g), g = E;
    }
  } while (u !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
class zy extends ot {
  constructor(r, n) {
    super(r, n);
    b(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class bD extends zy {
}
class xD extends zy {
}
const M = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof qr) {
    const {
      key: s,
      value: i
    } = t, o = ve(s) ? M(s, n) : s, a = ve(i) ? M(i, n) : i, c = new qr(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof Pi) {
    const s = (a) => M(a, n), i = [...t].map(s), o = new Pi(i);
    return r.set(t, o), o;
  }
  if (t instanceof qn) {
    const s = (a) => M(a, n), i = [...t].map(s), o = new qn(i);
    return r.set(t, o), o;
  }
  if (ve(t)) {
    const s = ke(t);
    if (r.set(t, s), t.content)
      if (ve(t.content))
        s.content = M(t.content, n);
      else if (t.content instanceof qr)
        s.content = M(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => M(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new bD("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
M.safe = (t) => {
  try {
    return M(t);
  } catch {
    return t;
  }
};
const Gy = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new qr(e, r);
}, wD = (t) => {
  const e = [...t];
  return new qn(e);
}, ED = (t) => {
  const e = [...t];
  return new Pi(e);
}, Ky = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = M(t.meta)), t.attributes.length > 0 && (e._attributes = M(t.attributes)), ve(t.content)) {
    const r = t.content;
    e.content = Ky(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof qr ? e.content = Gy(t.content) : e.content = t.content;
  return e;
}, ke = (t) => {
  if (t instanceof qr)
    return Gy(t);
  if (t instanceof Pi)
    return ED(t);
  if (t instanceof qn)
    return wD(t);
  if (ve(t))
    return Ky(t);
  throw new xD("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
ke.safe = (t) => {
  try {
    return ke(t);
  } catch {
    return t;
  }
};
const vn = (t) => X(t) ? "ObjectElement" : Ne(t) ? "ArrayElement" : ut(t) ? "MemberElement" : W(t) ? "StringElement" : as(t) ? "BooleanElement" : ff(t) ? "NumberElement" : pf(t) ? "NullElement" : Dy(t) ? "LinkElement" : Ny(t) ? "RefElement" : void 0, Jy = (t) => ve(t) ? ke(t) : hf(t), Wy = _e(vn, Pr), yn = {
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
class Yy {
  constructor({
    predicate: e = Iu,
    returnOnTrue: r,
    returnOnFalse: n
  } = {}) {
    b(this, "result");
    b(this, "predicate");
    b(this, "returnOnTrue");
    b(this, "returnOnFalse");
    this.result = [], this.predicate = e, this.returnOnTrue = r, this.returnOnFalse = n;
  }
  enter(e) {
    return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
  }
}
const Ie = (t, e, {
  keyMap: r = yn,
  ...n
} = {}) => df(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: vn,
  nodePredicate: Wy,
  nodeCloneFn: Jy,
  ...n
});
Ie[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = yn,
  ...n
} = {}) => df[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: vn,
  nodePredicate: Wy,
  nodeCloneFn: Jy,
  ...n
});
const Xy = {
  toolboxCreator: Hy,
  visitorOptions: {
    nodeTypeGetter: vn,
    exposeEdits: !0
  }
}, gn = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Wu(Xy, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((p) => p(o)), c = Zo(a.map(wi({}, "visitor")), {
    ...i
  });
  a.forEach(Bn(["pre"], []));
  const l = Ie(t, c, i);
  return a.forEach(Bn(["post"], [])), l;
}, $D = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Wu(Xy, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = Zo[Symbol.for("nodejs.util.promisify.custom")], l = Ie[Symbol.for("nodejs.util.promisify.custom")], p = c(a.map(wi({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(Bn(["pre"], [])));
  const f = await l(t, p, i);
  return await Promise.allSettled(a.map(Bn(["post"], []))), f;
};
gn[Symbol.for("nodejs.util.promisify.custom")] = $D;
var Qy = { exports: {} };
(function(t) {
  var e = (() => {
    var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (w, R, S) => R in w ? r(w, R, { enumerable: !0, configurable: !0, writable: !0, value: S }) : w[R] = S, l = (w, R) => {
      for (var S in R || (R = {}))
        o.call(R, S) && c(w, S, R[S]);
      if (i)
        for (var S of i(R))
          a.call(R, S) && c(w, S, R[S]);
      return w;
    }, p = (w, R) => {
      for (var S in R)
        r(w, S, { get: R[S], enumerable: !0 });
    }, f = (w, R, S, C) => {
      if (R && typeof R == "object" || typeof R == "function")
        for (let k of s(R))
          !o.call(w, k) && k !== S && r(w, k, { get: () => R[k], enumerable: !(C = n(R, k)) || C.enumerable });
      return w;
    }, d = (w) => f(r({}, "__esModule", { value: !0 }), w), u = (w, R, S) => (c(w, typeof R != "symbol" ? R + "" : R, S), S), m = {};
    p(m, {
      DEFAULT_OPTIONS: () => g,
      DEFAULT_UUID_LENGTH: () => y,
      default: () => E
    });
    var h = "5.2.0", y = 6, g = {
      dictionary: "alphanum",
      shuffle: !0,
      debug: !1,
      length: y,
      counter: 0
    }, v = class {
      constructor(R = {}) {
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
        }), u(this, "log", (...P) => {
          const $ = [...P];
          if ($[0] = `[short-unique-id] ${P[0]}`, this.debug === !0 && typeof console < "u" && console !== null)
            return console.log(...$);
        }), u(this, "_normalizeDictionary", (P, $) => {
          let D;
          if (P && Array.isArray(P) && P.length > 1)
            D = P;
          else {
            D = [];
            let N;
            this.dictIndex = N = 0;
            const se = `_${P}_dict_ranges`, ge = this._dict_ranges[se];
            Object.keys(ge).forEach((be) => {
              const V = be;
              for (this.dictRange = ge[V], this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1], this.dictIndex = N = this.lowerBound; this.lowerBound <= this.upperBound ? N < this.upperBound : N > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? N += 1 : N -= 1)
                D.push(String.fromCharCode(this.dictIndex));
            });
          }
          return $ && (D = D.sort(() => Math.random() - 0.5)), D;
        }), u(this, "setDictionary", (P, $) => {
          this.dict = this._normalizeDictionary(P, $), this.dictLength = this.dict.length, this.setCounter(0);
        }), u(this, "seq", () => this.sequentialUUID()), u(this, "sequentialUUID", () => {
          let P, $, D = "";
          P = this.counter;
          do
            $ = P % this.dictLength, P = Math.trunc(P / this.dictLength), D += this.dict[$];
          while (P !== 0);
          return this.counter += 1, D;
        }), u(this, "rnd", (P = this.uuidLength || y) => this.randomUUID(P)), u(this, "randomUUID", (P = this.uuidLength || y) => {
          let $, D, N;
          if (P === null || typeof P > "u" || P < 1)
            throw new Error("Invalid UUID Length Provided");
          for ($ = "", N = 0; N < P; N += 1)
            D = parseInt(
              (Math.random() * this.dictLength).toFixed(0),
              10
            ) % this.dictLength, $ += this.dict[D];
          return $;
        }), u(this, "fmt", (P, $) => this.formattedUUID(P, $)), u(this, "formattedUUID", (P, $) => {
          const D = {
            $r: this.randomUUID,
            $s: this.sequentialUUID,
            $t: this.stamp
          };
          return P.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (se) => {
              const ge = se.slice(0, 2), be = parseInt(se.slice(2), 10);
              return ge === "$s" ? D[ge]().padStart(be, "0") : ge === "$t" && $ ? D[ge](be, $) : D[ge](be);
            }
          );
        }), u(this, "availableUUIDs", (P = this.uuidLength) => parseFloat(
          Math.pow([...new Set(this.dict)].length, P).toFixed(0)
        )), u(this, "approxMaxBeforeCollision", (P = this.availableUUIDs(this.uuidLength)) => parseFloat(
          Math.sqrt(Math.PI / 2 * P).toFixed(20)
        )), u(this, "collisionProbability", (P = this.availableUUIDs(this.uuidLength), $ = this.uuidLength) => parseFloat(
          (this.approxMaxBeforeCollision(P) / this.availableUUIDs($)).toFixed(20)
        )), u(this, "uniqueness", (P = this.availableUUIDs(this.uuidLength)) => {
          const $ = parseFloat(
            (1 - this.approxMaxBeforeCollision(P) / P).toFixed(20)
          );
          return $ > 1 ? 1 : $ < 0 ? 0 : $;
        }), u(this, "getVersion", () => this.version), u(this, "stamp", (P, $) => {
          const D = Math.floor(+($ || /* @__PURE__ */ new Date()) / 1e3).toString(16);
          if (typeof P == "number" && P === 0)
            return D;
          if (typeof P != "number" || P < 10)
            throw new Error(
              [
                "Param finalLength must be a number greater than or equal to 10,",
                "or 0 if you want the raw hexadecimal timestamp"
              ].join(`
`)
            );
          const N = P - 9, se = Math.round(Math.random() * (N > 15 ? 15 : N)), ge = this.randomUUID(N);
          return `${ge.substring(0, se)}${D}${ge.substring(se)}${se.toString(16)}`;
        }), u(this, "parseStamp", (P, $) => {
          if ($ && !/t0|t[1-9]\d{1,}/.test($))
            throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
          const D = $ ? $.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (se) => {
              const ge = {
                $r: (j) => [...Array(j)].map(() => "r").join(""),
                $s: (j) => [...Array(j)].map(() => "s").join(""),
                $t: (j) => [...Array(j)].map(() => "t").join("")
              }, be = se.slice(0, 2), V = parseInt(se.slice(2), 10);
              return ge[be](V);
            }
          ).replace(
            /^(.*?)(t{8,})(.*)$/g,
            (se, ge, be) => P.substring(ge.length, ge.length + be.length)
          ) : P;
          if (D.length === 8)
            return new Date(parseInt(D, 16) * 1e3);
          if (D.length < 10)
            throw new Error("Stamp length invalid");
          const N = parseInt(D.substring(D.length - 1), 16);
          return new Date(parseInt(D.substring(N, N + 8), 16) * 1e3);
        }), u(this, "setCounter", (P) => {
          this.counter = P;
        }), u(this, "validate", (P, $) => {
          const D = $ ? this._normalizeDictionary($) : this.dict;
          return P.split("").every((N) => D.includes(N));
        });
        const S = l(l({}, g), R);
        this.counter = 0, this.debug = !1, this.dict = [], this.version = h;
        const {
          dictionary: C,
          shuffle: k,
          length: A,
          counter: U
        } = S;
        return this.uuidLength = A, this.setDictionary(C, k), this.setCounter(U), this.debug = S.debug, this.log(this.dict), this.log(
          `Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`
        ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this), this;
      }
    };
    u(v, "default", v);
    var E = v;
    return d(m);
  })();
  t.exports = e.default, typeof window < "u" && (e = e.default);
})(Qy);
var OD = Qy.exports;
const SD = /* @__PURE__ */ Eo(OD);
class AD extends ot {
  constructor(r, n) {
    super(r, n);
    b(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class mf {
  constructor({
    length: e = 6
  } = {}) {
    b(this, "uuid");
    b(this, "identityMap");
    this.uuid = new SD({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  }
  identify(e) {
    if (!ve(e))
      throw new AD("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
        value: e
      });
    if (e.meta.hasKey("id") && W(e.meta.get("id")) && !e.meta.get("id").equals(""))
      return e.id;
    if (this.identityMap.has(e))
      return this.identityMap.get(e);
    const r = new _t(this.generateId());
    return this.identityMap.set(e, r), r;
  }
  forget(e) {
    return this.identityMap.has(e) ? (this.identityMap.delete(e), !0) : !1;
  }
  generateId() {
    return this.uuid.randomUUID();
  }
}
new mf();
class PD extends Array {
  constructor() {
    super(...arguments);
    b(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new vc("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new vc("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new vc("latest method in MediaTypes class is not yet implemented.");
  }
}
const jD = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return ve(t) && (t.meta.length > 0 && (n.meta = M(t.meta)), t.attributes.length > 0 && (n.attributes = M(t.attributes))), gn(n, r, {
    toolboxCreator: Hy,
    visitorOptions: {
      nodeTypeGetter: vn
    }
  });
}, et = (t) => (e, r = {}) => jD(e, {
  ...r,
  Type: t
});
I.refract = et(I);
oe.refract = et(oe);
_t.refract = et(_t);
Ct.refract = et(Ct);
ul.refract = et(ul);
ll.refract = et(ll);
fl.refract = et(fl);
Pt.refract = et(Pt);
ji.refract = et(ji);
Ti.refract = et(Ti);
at.refract = et(at);
_i.refract = et(_i);
const TD = (t, e) => {
  const r = new Yy({
    predicate: t
  });
  return Ie(e, r), new qn(r.result);
}, Zy = (t, e) => {
  const r = new Yy({
    predicate: t,
    returnOnTrue: Q
  });
  return Ie(e, r), Vv(void 0, [0], r.result);
}, eg = (t) => typeof (t == null ? void 0 : t.type) == "string" ? t.type : vn(t), tg = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...yn
}, rg = (t, e, {
  keyMap: r = tg,
  ...n
} = {}) => Ie(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: eg,
  nodePredicate: kt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
rg[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = tg,
  ...r
} = {}) => Ie[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: eg,
  nodePredicate: kt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class _D {
  constructor(e) {
    b(this, "type", "EphemeralArray");
    b(this, "content", []);
    b(this, "reference");
    this.content = e, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}
class CD {
  constructor(e) {
    b(this, "type", "EphemeralObject");
    b(this, "content", []);
    b(this, "reference");
    this.content = e, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
let RD = class {
  constructor() {
    b(this, "ObjectElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new CD(e.content);
        return this.references.set(e, r), r;
      }
    });
    b(this, "EphemeralObject", {
      leave: (e) => e.toObject()
    });
    b(this, "MemberElement", {
      enter: (e) => [e.key, e.value]
    });
    b(this, "ArrayElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new _D(e.content);
        return this.references.set(e, r), r;
      }
    });
    b(this, "EphemeralArray", {
      leave: (e) => e.toArray()
    });
    b(this, "references", /* @__PURE__ */ new WeakMap());
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
    var n;
    const s = r[3];
    return ((n = s[s.length - 1]) === null || n === void 0 ? void 0 : n.type) === "EphemeralObject" ? Symbol.for("delete-node") : String(e.toValue());
  }
  LinkElement(e) {
    return W(e.href) ? e.href.toValue() : "";
  }
};
const O = (t) => ve(t) ? W(t) || ff(t) || as(t) || pf(t) ? t.toValue() : rg(t, new RD()) : t, Zs = (t, e = /* @__PURE__ */ new WeakMap()) => (ut(t) ? (e.set(t.key, t), Zs(t.key, e), e.set(t.value, t), Zs(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), Zs(r, e);
}), e), ID = (t, e, r) => {
  const n = r.get(t);
  ut(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, MD = (t, e, r) => {
  const n = r.get(t);
  X(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, FD = (t, e, r) => {
  const n = r.get(t);
  Ne(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class kD {
  constructor({
    element: e
  }) {
    b(this, "element");
    b(this, "edges");
    this.element = e;
  }
  transclude(e, r) {
    var n;
    if (e === this.element) return r;
    if (e === r) return this.element;
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : Zs(this.element);
    const s = this.edges.get(e);
    if (!nr(s))
      return X(s) ? MD(e, r, this.edges) : Ne(s) ? FD(e, r, this.edges) : ut(s) && ID(e, r, this.edges), this.element;
  }
}
const DD = (t, e, r) => new kD({
  element: r
}).transclude(t, e), ea = (t, e) => {
  const r = en(t, e);
  return vj((n) => {
    if (gr(n) && kv("$ref", n) && wj(Pr, "$ref", n)) {
      const s = He(["$ref"], n), i = Qu("#/", s);
      return He(i.split("/"), r);
    }
    return gr(n) ? ea(n, r) : n;
  }, t);
}, ng = (t, e = Uy) => {
  if (Pr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return gr(t) && kv("element", t) ? e.fromRefract(t) : e.toElement(t);
}, Ci = (t) => {
  const e = t.meta.length > 0 ? M(t.meta) : void 0, r = t.attributes.length > 0 ? M(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, Ri = (t, e) => e.clone && e.isMergeableElement(t) ? yt(Ci(t), t, e) : t, ND = (t, e) => {
  if (typeof e.customMerge != "function")
    return yt;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : yt;
}, LD = (t) => typeof t.customMetaMerge != "function" ? (e) => M(e) : t.customMetaMerge, VD = (t) => typeof t.customAttributesMerge != "function" ? (e) => M(e) : t.customAttributesMerge, BD = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => Ri(n, r)), UD = (t, e, r) => {
  const n = X(t) ? Ci(t) : Ci(e);
  return X(t) && t.forEach((s, i, o) => {
    const a = ke(o);
    a.value = Ri(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = O(i);
    let c;
    if (X(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const l = t.get(a);
      c = ke(o), c.value = ND(i, r)(l, s);
    } else
      c = ke(o), c.value = Ri(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, zs = {
  clone: !0,
  isMergeableElement: (t) => X(t) || Ne(t),
  arrayElementMerge: BD,
  objectElementMerge: UD,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
}, yt = (t, e, r) => {
  var n, s, i;
  const o = {
    ...zs,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : zs.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : zs.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : zs.objectElementMerge;
  const a = Ne(e), c = Ne(t);
  if (!(a === c))
    return Ri(e, o);
  const p = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return p.meta = LD(o)(t.meta, e.meta), p.attributes = VD(o)(t.attributes, e.attributes), p;
};
yt.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new I() : t.reduce((r, n) => yt(r, n, e), Ci(t[0]));
};
class vf extends he {
}
class sg extends vf {
}
const HD = async (t, e) => {
  let r = t, n = !1;
  if (!Ly(t)) {
    const o = ke(t);
    o.classes.push("result"), r = new at([o]), n = !0;
  }
  const s = new Un({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await nf("canDereference", [s, e], e.dereference.strategies);
  if (ss(i))
    throw new sg(s.uri);
  try {
    const {
      result: o
    } = await sf("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new vf(`Error while dereferencing file "${s.uri}"`, {
      cause: o
    });
  }
};
let fs = class {
  constructor({
    name: e,
    allowEmpty: r = !0,
    sourceMap: n = !1,
    fileExtensions: s = [],
    mediaTypes: i = []
  }) {
    b(this, "name");
    /**
     * Whether to allow "empty" files. This includes zero-byte files.
     */
    b(this, "allowEmpty");
    /**
     * Whether to generate source map during parsing.
     */
    b(this, "sourceMap");
    /**
     * List of supported file extensions.
     */
    b(this, "fileExtensions");
    /**
     * List of supported media types.
     */
    b(this, "mediaTypes");
    this.name = e, this.allowEmpty = r, this.sourceMap = n, this.fileExtensions = s, this.mediaTypes = i;
  }
};
class qD {
  constructor({
    name: e
  }) {
    b(this, "name");
    this.name = e;
  }
}
class zD extends qD {
  constructor(r) {
    const {
      name: n = "http-resolver",
      timeout: s = 5e3,
      redirects: i = 5,
      withCredentials: o = !1
    } = r ?? {};
    super({
      name: n
    });
    b(this, "timeout");
    b(this, "redirects");
    b(this, "withCredentials");
    this.timeout = s, this.redirects = i, this.withCredentials = o;
  }
  // eslint-disable-next-line class-methods-use-this
  canRead(r) {
    return Vo(r.uri);
  }
}
class GD {
  constructor({
    name: e
  }) {
    b(this, "name");
    this.name = e;
  }
}
class KD {
  constructor({
    name: e
  }) {
    b(this, "name");
    this.name = e;
  }
}
class Ec extends Array {
  includesCycle(e) {
    return this.filter((r) => r.has(e)).length > 1;
  }
  includes(e, r) {
    return e instanceof Set ? super.includes(e, r) : this.some((n) => n.has(e));
  }
  findItem(e) {
    for (const r of this)
      for (const n of r)
        if (ve(n) && e(n))
          return n;
  }
}
let jt = class {
  constructor({
    uri: e,
    depth: r = 0,
    refSet: n,
    value: s
  }) {
    b(this, "uri");
    b(this, "depth");
    b(this, "value");
    b(this, "refSet");
    b(this, "errors");
    this.uri = e, this.value = s, this.depth = r, this.refSet = n, this.errors = [];
  }
};
class ig extends he {
}
class JD extends ig {
}
class WD extends he {
}
class yf extends WD {
}
class YD extends ig {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
class zr extends vf {
}
class XD extends of {
}
class Rt extends rl {
}
const QD = async (t, e = {}) => {
  const r = sy(ny, e);
  return HD(t, r);
};
function Xh(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function ZD(t) {
  if (Array.isArray(t)) return t;
}
function eN(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function tN(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function rN(t, e, r) {
  return e && tN(t.prototype, e), t;
}
function og(t, e) {
  return e != null && typeof Symbol < "u" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
}
function nN(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], s = !0, i = !1, o, a;
    try {
      for (r = r.call(t); !(s = (o = r.next()).done) && (n.push(o.value), !(e && n.length === e)); s = !0)
        ;
    } catch (c) {
      i = !0, a = c;
    } finally {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (i) throw a;
      }
    }
    return n;
  }
}
function sN() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function iN(t, e) {
  return ZD(t) || nN(t, e) || oN(t, e) || sN();
}
function Gr(t) {
  "@swc/helpers - typeof";
  return t && typeof Symbol < "u" && t.constructor === Symbol ? "symbol" : typeof t;
}
function oN(t, e) {
  if (t) {
    if (typeof t == "string") return Xh(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xh(t, e);
  }
}
var ag = function(t) {
  throw TypeError(t);
}, cg = function(t, e, r) {
  return e.has(t) || ag("Cannot " + r);
}, Fe = function(t, e, r) {
  return cg(t, e, "read from private field"), e.get(t);
}, Qh = function(t, e, r) {
  return e.has(t) ? ag("Cannot add the same private member more than once") : og(e, WeakSet) ? e.add(t) : e.set(t, r);
}, $c = function(t, e, r, n) {
  return cg(t, e, "write to private field"), e.set(t, r), r;
}, bn = function(t) {
  return Object.prototype.toString.call(t);
}, lg = function(t) {
  return ArrayBuffer.isView(t) && !og(t, DataView);
}, aN = function(t) {
  return bn(t) === "[object Date]";
}, cN = function(t) {
  return bn(t) === "[object RegExp]";
}, lN = function(t) {
  return bn(t) === "[object Error]";
}, uN = function(t) {
  return bn(t) === "[object Boolean]";
}, fN = function(t) {
  return bn(t) === "[object Number]";
}, pN = function(t) {
  return bn(t) === "[object String]";
}, ug = Array.isArray, hN = Object.getOwnPropertyDescriptor, dN = Object.prototype.propertyIsEnumerable, mN = Object.getOwnPropertySymbols, ei = Object.prototype.hasOwnProperty;
function gf(t) {
  for (var e = Object.keys(t), r = mN(t), n = 0; n < r.length; n++)
    dN.call(t, r[n]) && e.push(r[n]);
  return e;
}
function vN(t, e) {
  var r;
  return !(!((r = hN(t, e)) === null || r === void 0) && r.writable);
}
function fg(t, e) {
  if ((typeof t > "u" ? "undefined" : Gr(t)) === "object" && t !== null) {
    var r;
    if (ug(t))
      r = [];
    else if (aN(t))
      r = new Date(t.getTime ? t.getTime() : t);
    else if (cN(t))
      r = new RegExp(t);
    else if (lN(t))
      r = {
        message: t.message
      };
    else if (uN(t) || fN(t) || pN(t))
      r = Object(t);
    else {
      if (lg(t))
        return t.slice();
      r = Object.create(Object.getPrototypeOf(t));
    }
    var n = e.includeSymbols ? gf : Object.keys, s = !0, i = !1, o = void 0;
    try {
      for (var a = n(t)[Symbol.iterator](), c; !(s = (c = a.next()).done); s = !0) {
        var l = c.value;
        r[l] = t[l];
      }
    } catch (p) {
      i = !0, o = p;
    } finally {
      try {
        !s && a.return != null && a.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return r;
  }
  return t;
}
var pg = {
  includeSymbols: !1,
  immutable: !1
};
function Zh(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : pg, n = [], s = [], i = !0, o = r.includeSymbols ? gf : Object.keys, a = !!r.immutable;
  return function c(l) {
    var p = a ? fg(l, r) : l, f = {}, d = !0, u = {
      node: p,
      node_: l,
      path: [].concat(n),
      parent: s[s.length - 1],
      parents: s,
      key: n[n.length - 1],
      isRoot: n.length === 0,
      level: n.length,
      circular: void 0,
      isLeaf: !1,
      notLeaf: !0,
      notRoot: !0,
      isFirst: !1,
      isLast: !1,
      update: function($) {
        var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        u.isRoot || (u.parent.node[u.key] = $), u.node = $, D && (d = !1);
      },
      delete: function($) {
        delete u.parent.node[u.key], $ && (d = !1);
      },
      remove: function($) {
        ug(u.parent.node) ? u.parent.node.splice(u.key, 1) : delete u.parent.node[u.key], $ && (d = !1);
      },
      keys: null,
      before: function($) {
        f.before = $;
      },
      after: function($) {
        f.after = $;
      },
      pre: function($) {
        f.pre = $;
      },
      post: function($) {
        f.post = $;
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
      if (Gr(u.node) === "object" && u.node !== null) {
        (!u.keys || u.node_ !== u.node) && (u.keys = o(u.node)), u.isLeaf = u.keys.length === 0;
        for (var P = 0; P < s.length; P++)
          if (s[P].node_ === l) {
            u.circular = s[P];
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
    if (Gr(u.node) === "object" && u.node !== null && !u.circular) {
      s.push(u), m();
      var y, g = !0, v = !1, E = void 0;
      try {
        for (var w = Object.entries((y = u.keys) !== null && y !== void 0 ? y : [])[Symbol.iterator](), R; !(g = (R = w.next()).done); g = !0) {
          var S = iN(R.value, 2), C = S[0], k = S[1], A;
          n.push(k), f.pre && f.pre.call(u, u.node[k], k);
          var U = c(u.node[k]);
          a && ei.call(u.node, k) && !vN(u.node, k) && (u.node[k] = U.node), U.isLast = !((A = u.keys) === null || A === void 0) && A.length ? +C === u.keys.length - 1 : !1, U.isFirst = +C == 0, f.post && f.post.call(u, U), n.pop();
        }
      } catch (P) {
        v = !0, E = P;
      } finally {
        try {
          !g && w.return != null && w.return();
        } finally {
          if (v)
            throw E;
        }
      }
      s.pop();
    }
    return f.after && f.after.call(u, u.node), u;
  }(t).node;
}
var Be, Jt, Et = /* @__PURE__ */ function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pg;
    eN(this, t), Qh(this, Be), Qh(this, Jt), $c(this, Be, e), $c(this, Jt, r);
  }
  return rN(t, [
    {
      /**
      * Get the element at the array `path`.
      */
      key: "get",
      value: function(r) {
        for (var n = Fe(this, Be), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!ei.call(n, i) || !Fe(this, Jt).includeSymbols && (typeof i > "u" ? "undefined" : Gr(i)) === "symbol")
            return;
          n = n[i];
        }
        return n;
      }
    },
    {
      /**
      * Return whether the element at the array `path` exists.
      */
      key: "has",
      value: function(r) {
        for (var n = Fe(this, Be), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!ei.call(n, i) || !Fe(this, Jt).includeSymbols && (typeof i > "u" ? "undefined" : Gr(i)) === "symbol")
            return !1;
          n = n[i];
        }
        return !0;
      }
    },
    {
      /**
      * Set the element at the array `path` to `value`.
      */
      key: "set",
      value: function(r, n) {
        var s = Fe(this, Be), i = 0;
        for (i = 0; i < r.length - 1; i++) {
          var o = r[i];
          ei.call(s, o) || (s[o] = {}), s = s[o];
        }
        return s[r[i]] = n, n;
      }
    },
    {
      /**
      * Execute `fn` for each node in the object and return a new object with the results of the walk. To update nodes in the result use `this.update(value)`.
      */
      key: "map",
      value: function(r) {
        return Zh(Fe(this, Be), r, {
          immutable: !0,
          includeSymbols: !!Fe(this, Jt).includeSymbols
        });
      }
    },
    {
      /**
      * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
      */
      key: "forEach",
      value: function(r) {
        return $c(this, Be, Zh(Fe(this, Be), r, Fe(this, Jt))), Fe(this, Be);
      }
    },
    {
      /**
      * For each node in the object, perform a [left-fold](http://en.wikipedia.org/wiki/Fold_(higher-order_function)) with the return value of `fn(acc, node)`.
      *
      * If `init` isn't specified, `init` is set to the root object for the first step and the root element is skipped.
      */
      key: "reduce",
      value: function(r, n) {
        var s = arguments.length === 1, i = s ? Fe(this, Be) : n;
        return this.forEach(function(o) {
          (!this.isRoot || !s) && (i = r.call(this, i, o));
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
        var r = [], n = [], s = Fe(this, Jt);
        return lg(Fe(this, Be)) ? Fe(this, Be).slice() : function i(o) {
          for (var a = 0; a < r.length; a++)
            if (r[a] === o)
              return n[a];
          if ((typeof o > "u" ? "undefined" : Gr(o)) === "object" && o !== null) {
            var c = fg(o, s);
            r.push(o), n.push(c);
            var l = s.includeSymbols ? gf : Object.keys, p = !0, f = !1, d = void 0;
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
            return r.pop(), n.pop(), c;
          }
          return o;
        }(Fe(this, Be));
      }
    }
  ]), t;
}();
Be = /* @__PURE__ */ new WeakMap();
Jt = /* @__PURE__ */ new WeakMap();
var $t = function(t, e) {
  return new Et(t, e);
};
$t.get = function(t, e, r) {
  return new Et(t, r).get(e);
};
$t.set = function(t, e, r, n) {
  return new Et(t, n).set(e, r);
};
$t.has = function(t, e, r) {
  return new Et(t, r).has(e);
};
$t.map = function(t, e, r) {
  return new Et(t, r).map(e);
};
$t.forEach = function(t, e, r) {
  return new Et(t, r).forEach(e);
};
$t.reduce = function(t, e, r, n) {
  return new Et(t, n).reduce(e, r);
};
$t.paths = function(t, e) {
  return new Et(t, e).paths();
};
$t.nodes = function(t, e) {
  return new Et(t, e).nodes();
};
$t.clone = function(t, e) {
  return new Et(t, e).clone();
};
var yN = $t;
const gN = ["properties"], bN = ["properties"], xN = [
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
], wN = ["schema/example", "items/example"];
function hg(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    gN.indexOf(e) > -1 && bN.indexOf(r) === -1 || xN.indexOf(n) > -1 || wN.some((s) => n.indexOf(s) > -1)
  );
}
function EN(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return yN(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), l = pl(this.node, n(a));
      i.push(r.replace(c, l));
    }
  }), i;
}
function pl(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if (Vo(s))
    o = Oe(s, i);
  else {
    const a = Oe(ri, s), l = Oe(a, i).replace(ri, "");
    o = i.startsWith("/") ? l : l.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const $N = /^([a-z]+:\/\/|\/\/)/i;
class nn extends ot {
}
const St = {}, ed = /* @__PURE__ */ new WeakMap(), ON = [
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
], SN = (t) => ON.some((e) => e(t)), AN = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (hg(i) || SN(i))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof t != "string")
      return new nn("$ref: must be a string (JSON-Ref)", {
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    const a = mg(t), c = a[0], l = a[1] || "";
    let p;
    try {
      p = o || c ? dg(c, o) : null;
    } catch (h) {
      return hl(h, {
        pointer: l,
        $ref: t,
        basePath: p,
        fullPath: r
      });
    }
    let f, d;
    if (CN(l, p, i, n) && !s.useCircularStructures) {
      const h = pl(t, p);
      return t === h ? null : te.replace(r, h);
    }
    if (p == null ? (d = xf(l), f = n.get(d), typeof f > "u" && (f = new nn(`Could not resolve reference: ${t}`, {
      pointer: l,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (f = vg(p, l), f.__value != null ? f = f.__value : f = f.catch((h) => {
      throw hl(h, {
        pointer: l,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), f instanceof Error)
      return [te.remove(r), f];
    const u = pl(t, p), m = te.replace(i, f, {
      $$ref: u
    });
    if (p && p !== o)
      return [m, te.context(i, {
        baseDoc: p
      })];
    try {
      if (!RN(n.state, m) || s.useCircularStructures)
        return m;
    } catch {
      return null;
    }
  }
}, bf = Object.assign(AN, {
  docCache: St,
  absoluteify: dg,
  clearCache: PN,
  JSONRefError: nn,
  wrapError: hl,
  getDoc: yg,
  split: mg,
  extractFromDoc: vg,
  fetchJSON: jN,
  extract: dl,
  jsonPointerToArray: xf,
  unescapeJsonPointerToken: gg
});
function dg(t, e) {
  if (!$N.test(t)) {
    if (!e)
      throw new nn(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return Oe(e, t);
  }
  return t;
}
function hl(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new nn(`Could not resolve reference: ${r}`, {
    ...e,
    cause: t
  });
}
function mg(t) {
  return (t + "").split("#");
}
function vg(t, e) {
  const r = St[t];
  if (r && !te.isPromise(r))
    try {
      const n = dl(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return yg(t).then((n) => dl(e, n));
}
function PN(t) {
  typeof t < "u" ? delete St[t] : Object.keys(St).forEach((e) => {
    delete St[e];
  });
}
function yg(t) {
  const e = St[t];
  return e ? te.isPromise(e) ? e : Promise.resolve(e) : (St[t] = bf.fetchJSON(t).then((r) => (St[t] = r, r)), St[t]);
}
function jN(t) {
  return fetch(t, {
    headers: {
      Accept: wd
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => Wr.load(e));
}
function dl(t, e) {
  const r = xf(t);
  if (r.length < 1)
    return e;
  const n = te.getIn(e, r);
  if (typeof n > "u")
    throw new nn(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function xf(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(gg);
}
function gg(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function bg(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function TN(t) {
  return t.length === 0 ? "" : `/${t.map(bg).join("/")}`;
}
const _N = (t) => !t || t === "/" || t === "#";
function Oc(t, e) {
  if (_N(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function CN(t, e, r, n) {
  let s = ed.get(n);
  s || (s = {}, ed.set(n, s));
  const i = TN(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && Oc(a, t))
    return !0;
  let l = "";
  if (r.some((f) => (l = `${l}/${bg(f)}`, s[l] && s[l].some((d) => Oc(d, o) || Oc(o, d)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function RN(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return te.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const IN = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (hg(i))
      return;
    if (!Array.isArray(t)) {
      const l = new TypeError("allOf must be an array");
      return l.fullPath = r, l;
    }
    let o = !1, a = s.value;
    if (i.forEach((l) => {
      a && (a = a[l]);
    }), a = {
      ...a
    }, Object.keys(a).length === 0)
      return;
    delete a.allOf;
    const c = [];
    return c.push(n.replace(i, {})), t.forEach((l, p) => {
      if (!n.isObject(l)) {
        if (o)
          return null;
        o = !0;
        const u = new TypeError("Elements in allOf must be objects");
        return u.fullPath = r, c.push(u);
      }
      c.push(n.mergeDeep(i, l));
      const f = r.slice(0, -1), d = EN(l, f, {
        getBaseUrlForNodePath: (u) => n.getContext([...r, p, ...u]).baseDoc,
        specmap: n
      });
      c.push(...d);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, MN = {
  key: "parameters",
  plugin: (t, e, r, n) => {
    if (Array.isArray(t) && t.length) {
      const s = Object.assign([], t), i = r.slice(0, -1), o = {
        ...te.getIn(n.spec, i)
      };
      for (let a = 0; a < t.length; a += 1) {
        const c = t[a];
        try {
          s[a].default = n.parameterMacro(o, c);
        } catch (l) {
          const p = new Error(l);
          return p.fullPath = r, p;
        }
      }
      return te.replace(r, s);
    }
    return te.replace(r, t);
  }
}, FN = {
  key: "properties",
  plugin: (t, e, r, n) => {
    const s = {
      ...t
    };
    for (const o in t)
      try {
        s[o].default = n.modelPropertyMacro(s[o]);
      } catch (a) {
        const c = new Error(a);
        return c.fullPath = r, c;
      }
    return te.replace(r, s);
  }
};
class kN {
  constructor(e) {
    this.root = Sc(e || {});
  }
  set(e, r) {
    const n = this.getParent(e, !0);
    if (!n) {
      Ii(this.root, r, null);
      return;
    }
    const s = e[e.length - 1], {
      children: i
    } = n;
    if (i[s]) {
      Ii(i[s], r, n);
      return;
    }
    i[s] = Sc(r, n);
  }
  // Get the "best" node (node or nearest parent) and return its value.
  get(e) {
    if (e = e || [], e.length < 1)
      return this.root.value;
    let r = this.root, n, s;
    for (let i = 0; i < e.length && (s = e[i], n = r.children, !!n[s]); i += 1)
      r = n[s];
    return r && r.protoValue;
  }
  getParent(e, r) {
    return !e || e.length < 1 ? null : e.length < 2 ? this.root : e.slice(0, -1).reduce((n, s) => {
      if (!n)
        return n;
      const {
        children: i
      } = n;
      return !i[s] && r && (i[s] = Sc(null, n)), i[s];
    }, this.root);
  }
}
function Sc(t, e) {
  return Ii({
    children: {}
  }, t, e);
}
function Ii(t, e, r) {
  return t.value = e || {}, t.protoValue = r ? {
    ...r.protoValue,
    ...t.value
  } : t.value, Object.keys(t.children).forEach((n) => {
    const s = t.children[n];
    t.children[n] = Ii(s, s.value, t);
  }), t;
}
const td = 100, DN = 3e3, rd = () => {
};
class NN {
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
      contextTree: new kN(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), te, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, e), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(te.isFunction), this.patches.push(te.add([], this.spec)), this.patches.push(te.context([], this.context)), this.updatePatches(this.patches);
  }
  debug(e, ...r) {
    this.debugLevel === e && console.log(...r);
  }
  verbose(e, ...r) {
    this.debugLevel === "verbose" && console.log(`[${e}]   `, ...r);
  }
  wrapPlugin(e, r) {
    const {
      pathDiscriminator: n
    } = this;
    let s = null, i;
    return e[this.pluginProp] ? (s = e, i = e[this.pluginProp]) : te.isFunction(e) ? i = e : te.isObject(e) && (i = o(e)), Object.assign(i.bind(s), {
      pluginName: e.name || r,
      isGenerator: te.isGenerator(i)
    });
    function o(a) {
      const c = (l, p) => Array.isArray(l) ? l.every((f, d) => f === p[d]) : !0;
      return function* (p, f) {
        const d = {};
        for (const [m, h] of p.filter(te.isAdditiveMutation).entries())
          if (m < DN)
            yield* u(h.value, h.path, h);
          else
            return;
        function* u(m, h, y) {
          if (!te.isObject(m))
            a.key === h[h.length - 1] && (yield a.plugin(m, a.key, h, f));
          else {
            const g = h.length - 1, v = h[g], E = h.indexOf("properties"), w = v === "properties" && g === E, R = f.allowMetaPatches && d[m.$$ref];
            for (const S of Object.keys(m)) {
              const C = m[S], k = h.concat(S), A = te.isObject(C), U = m.$$ref;
              if (R || A && (f.allowMetaPatches && U && (d[U] = !0), yield* u(C, k, y)), !w && S === a.key) {
                const P = c(n, h);
                (!n || P) && (yield a.plugin(C, S, k, f, y));
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
    const n = this.constructor.getPluginName(e);
    this.pluginHistory[n] = this.pluginHistory[n] || [], this.pluginHistory[n].push(r);
  }
  updatePatches(e) {
    te.normalizeArray(e).forEach((r) => {
      if (r instanceof Error) {
        this.errors.push(r);
        return;
      }
      try {
        if (!te.isObject(r)) {
          this.debug("updatePatches", "Got a non-object patch", r);
          return;
        }
        if (this.showDebug && this.allPatches.push(r), te.isPromise(r.value)) {
          this.promisedPatches.push(r), this.promisedPatchThen(r);
          return;
        }
        if (te.isContextPatch(r)) {
          this.setContext(r.path, r.value);
          return;
        }
        te.isMutation(r) && this.updateMutations(r);
      } catch (n) {
        console.error(n), this.errors.push(n);
      }
    });
  }
  updateMutations(e) {
    typeof e.value == "object" && !Array.isArray(e.value) && this.allowMetaPatches && (e.value = {
      ...e.value
    });
    const r = te.applyPatch(this.state, e, {
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
      const n = {
        ...e,
        value: r
      };
      this.removePromisedPatch(e), this.updatePatches(n);
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
    return te.getIn(this.state, e);
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
    if (e.pluginCount = e.pluginCount || /* @__PURE__ */ new WeakMap(), e.pluginCount.set(r, (e.pluginCount.get(r) || 0) + 1), e.pluginCount[r] > td)
      return Promise.resolve({
        spec: e.state,
        errors: e.errors.concat(new Error(`We've reached a hard limit of ${td} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const i = this.promisedPatches.map((o) => o.value);
      return Promise.all(i.map((o) => o.then(rd, rd))).then(() => this.dispatch());
    }
    return n();
    function n() {
      e.currentPlugin = r;
      const i = e.getCurrentMutations(), o = e.mutations.length - 1;
      try {
        if (r.isGenerator)
          for (const a of r(i, e.getLib()))
            s(a);
        else {
          const a = r(i, e.getLib());
          s(a);
        }
      } catch (a) {
        console.error(a), s([Object.assign(Object.create(a), {
          plugin: r
        })]);
      } finally {
        e.updatePluginHistory(r, {
          mutationIndex: o
        });
      }
      return e.dispatch();
    }
    function s(i) {
      i && (i = te.fullyNormalizeArray(i), e.updatePatches(i, r));
    }
  }
}
function LN(t) {
  return new NN(t).dispatch();
}
const ur = {
  refs: bf,
  allOf: IN,
  parameters: MN,
  properties: FN
};
async function wf(t) {
  const {
    spec: e,
    mode: r,
    allowMetaPatches: n = !0,
    pathDiscriminator: s,
    modelPropertyMacro: i,
    parameterMacro: o,
    requestInterceptor: a,
    responseInterceptor: c,
    skipNormalization: l = !1,
    useCircularStructures: p,
    strategies: f
  } = t, d = cu(t), u = vm(t), m = f.find((y) => y.match(e));
  return h(e);
  async function h(y) {
    d && (ur.refs.docCache[d] = y), ur.refs.fetchJSON = mm(u, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const g = [ur.refs];
    typeof o == "function" && g.push(ur.parameters), typeof i == "function" && g.push(ur.properties), r !== "strict" && g.push(ur.allOf);
    const v = await LN({
      spec: y,
      context: {
        baseDoc: d
      },
      plugins: g,
      allowMetaPatches: n,
      // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator: s,
      // for lazy resolution
      parameterMacro: o,
      modelPropertyMacro: i,
      useCircularStructures: p
    });
    return l || (v.spec = m.normalize(v.spec)), v;
  }
}
const xg = (t) => t.replace(/\W/gi, "_");
function VN(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${xg(t)}`;
}
function ps(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? xg(t.operationId) : VN(e, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function Ef(t) {
  const {
    spec: e
  } = t, {
    paths: r
  } = e, n = {};
  if (!r || e.$$normalized)
    return t;
  for (const s in r) {
    const i = r[s];
    if (i == null || !["object", "function"].includes(typeof i))
      continue;
    const o = i.parameters;
    for (const a in i) {
      const c = i[a];
      if (c == null || !["object", "function"].includes(typeof c))
        continue;
      const l = ps(c, s, a);
      if (l) {
        n[l] ? n[l].push(c) : n[l] = [c];
        const p = n[l];
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
function BN() {
  ur.refs.clearCache();
}
const wg = {
  name: "generic",
  match() {
    return !0;
  },
  normalize(t) {
    const {
      spec: e
    } = Ef({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return wf(t);
  }
};
async function UN(t) {
  return wf(t);
}
const Eg = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, $g = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.([0123])(?:-rc[012])?$/.test(e);
  } catch {
    return !1;
  }
}, $f = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Of = (t) => $g(t) || $f(t), Og = {
  name: "openapi-2",
  match(t) {
    return Eg(t);
  },
  normalize(t) {
    const {
      spec: e
    } = Ef({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return UN(t);
  }
};
async function HN(t) {
  return wf(t);
}
const Sg = {
  name: "openapi-3-0",
  match(t) {
    return $g(t);
  },
  normalize(t) {
    const {
      spec: e
    } = Ef({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return HN(t);
  }
}, qN = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = cu(t), i = vm(t), o = e || await mm(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((l) => l.match(o)).resolve(a);
}, Ag = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return qN(r);
}, zN = Ag({
  strategies: [Sg, Og, wg]
}), GN = async (t, e, r = {}) => {
  const {
    returnEntireTree: n,
    baseDoc: s,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: l,
    strategies: p
  } = r, f = {
    spec: t,
    pathDiscriminator: e,
    baseDoc: s,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: l,
    strategies: p
  }, u = p.find((h) => h.match(t)).normalize(t), m = await zN({
    spec: u,
    ...f,
    allowMetaPatches: !0,
    skipNormalization: !$f(t)
  });
  return !n && Array.isArray(e) && e.length && (m.spec = e.reduce((h, y) => h == null ? void 0 : h[y], m.spec) || null), m;
}, KN = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return GN(e, r, s);
};
class Sf extends ot {
}
class ml extends Sf {
  constructor(r, n) {
    super(r, n);
    b(this, "pointer");
    typeof n < "u" && (this.pointer = n.pointer);
  }
}
class JN extends Sf {
  constructor(r, n) {
    super(r, n);
    b(this, "tokens");
    typeof n < "u" && (this.tokens = [...n.tokens]);
  }
}
class jn extends Sf {
  constructor(r, n) {
    super(r, n);
    b(this, "pointer");
    b(this, "tokens");
    b(this, "failedToken");
    b(this, "failedTokenPosition");
    b(this, "element");
    typeof n < "u" && (this.pointer = n.pointer, Array.isArray(n.tokens) && (this.tokens = [...n.tokens]), this.failedToken = n.failedToken, this.failedTokenPosition = n.failedTokenPosition, this.element = n.element);
  }
}
const WN = _e(tn(/~/g, "~0"), tn(/\//g, "~1"), encodeURIComponent), YN = (t) => {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, XN = _e(tn(/~1/g, "/"), tn(/~0/g, "~"), YN), QN = (t) => {
  if (Jv(t))
    return [];
  if (!Hv("/", t))
    throw new ml(`Invalid JSON Pointer "${t}". JSON Pointers must begin with "/"`, {
      pointer: t
    });
  try {
    const e = _e(Yu("/"), es(XN))(t);
    return Fv(e);
  } catch (e) {
    throw new ml(`JSON Pointer parsing of "${t}" encountered an error.`, {
      pointer: t,
      cause: e
    });
  }
}, ZN = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, Ye = (t) => {
  const e = ZN(t);
  return Qu("#", e);
}, Pg = (t) => {
  try {
    return t.length === 0 ? "" : `/${t.map(WN).join("/")}`;
  } catch (e) {
    throw new JN("JSON Pointer compilation of tokens encountered an error.", {
      tokens: t,
      cause: e
    });
  }
}, st = (t, e) => {
  let r;
  try {
    r = QN(t);
  } catch (n) {
    throw new jn(`JSON Pointer evaluation failed while parsing the pointer "${t}".`, {
      pointer: t,
      element: M(e),
      cause: n
    });
  }
  return r.reduce((n, s, i) => {
    if (X(n)) {
      if (!n.hasKey(s))
        throw new jn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ObjectElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: M(n)
        });
      return n.get(s);
    }
    if (Ne(n)) {
      if (!(s in n.content) || !Wj(Number(s)))
        throw new jn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ArrayElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: M(n)
        });
      return n.get(Number(s));
    }
    throw new jn(`JSON Pointer evaluation failed while evaluating token "${s}" against an unexpected Element`, {
      pointer: t,
      tokens: r,
      failedToken: s,
      failedTokenPosition: i,
      element: M(n)
    });
  }, e);
};
class Af extends PD {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return Fo(this.filterByFormat(e));
  }
}
const sn = new Af("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
let hs = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "callback";
  }
}, ds = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "components";
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
}, ms = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "contact";
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
}, ta = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "discriminator";
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
}, ra = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "encoding";
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
}, vs = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "example";
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
}, ys = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "externalDocumentation";
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
}, xn = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "header";
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new Ct(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Ct(!1);
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
Object.defineProperty(xn.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let gs = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "info", this.classes.push("info");
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
}, bs = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "license";
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
}, xs = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "link";
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
    if (W(this.operationRef)) {
      var e;
      return (e = this.operationRef) === null || e === void 0 ? void 0 : e.meta.get("operation");
    }
    if (W(this.operationId)) {
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
}, ws = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "mediaType";
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
}, na = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "oAuthFlow";
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
}, sa = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "oAuthFlows";
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
}, Es = class extends _t {
  constructor(e, r, n) {
    super(e, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
class ia extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "openApi3_0", this.classes.push("api");
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
let $s = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "operation";
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
    return this.hasKey("deprecated") ? this.get("deprecated") : new Ct(!1);
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
}, wn = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "parameter";
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
    return this.hasKey("required") ? this.get("required") : new Ct(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Ct(!1);
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
Object.defineProperty(wn.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Os = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "pathItem";
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
}, Ss = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "paths";
  }
}, As = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "reference", this.classes.push("openapi-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}, Ps = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "requestBody";
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
    return this.hasKey("required") ? this.get("required") : new Ct(!1);
  }
  set required(e) {
    this.set("required", e);
  }
}, js = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "response";
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
}, Ts = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "responses";
  }
  get default() {
    return this.get("default");
  }
  set default(e) {
    this.set("default", e);
  }
};
class _s extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "JSONSchemaDraft4";
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
}
class oa extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "JSONReference", this.classes.push("json-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}
class aa extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "media";
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
class ca extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "linkDescription";
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
}
const eL = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", _s), e.register("jSONReference", oa), e.register("media", aa), e.register("linkDescription", ca), e;
  }
}, tL = (t) => {
  if (ve(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, rL = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...yn
};
let jg = class {
  constructor(e) {
    b(this, "element");
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = yt(r.meta, e.meta), cs(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = yt(r.attributes, e.attributes));
  }
}, we = class extends jg {
  enter(e) {
    return this.element = M(e), Q;
  }
};
const Tg = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, zn = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : zn(r, [...e, r]);
}, nL = (...t) => {
  if (t.length === 0)
    return;
  let e;
  const r = t.map((n) => zn(n));
  for (; r.every((n) => n.length > 0); ) {
    const n = r.map((i) => i.pop()), s = n[0];
    if (n.every((i) => i === s))
      e = s;
    else
      break;
  }
  return e;
}, nd = (t, e, r = []) => {
  var n;
  const s = (n = nL(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = zn(s);
  for (let a of t) {
    let c = zn(a);
    for (let l = c.length - 1; l >= 0; l--) {
      let p = c[l];
      o.indexOf(p) === -1 && (Tg(i, p, ["constructor", ...r]), o.push(p));
    }
  }
  return i.constructor = e, i;
}, vl = (t) => t.filter((e, r) => t.indexOf(e) == r), _g = /* @__PURE__ */ new WeakMap(), sL = (t) => _g.get(t), iL = (t, e) => _g.set(t, e), sd = (t, e) => {
  var r, n;
  const s = vl([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = vl([...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, id = (t, e) => {
  var r, n, s, i;
  return {
    property: sd((r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}, (n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}),
    method: sd((s = t == null ? void 0 : t.method) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, oL = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: vl([...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : []]),
    static: id((s = t == null ? void 0 : t.static) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: id((o = t == null ? void 0 : t.instance) !== null && o !== void 0 ? o : {}, (a = e == null ? void 0 : e.instance) !== null && a !== void 0 ? a : {})
  };
}, aL = /* @__PURE__ */ new Map(), cL = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = zn(s.prototype).map((l) => l.constructor), o = (e = sL(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((l) => !r.has(l));
      for (let l of c)
        n.add(l);
      r.add(s), n.delete(s);
    }
  return [...r];
}, lL = (...t) => {
  const e = cL(...t).map((r) => aL.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => oL(r, n));
};
function _(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      Tg(this, new c(...a));
  }
  i.prototype = nd(s, i), Object.setPrototypeOf(
    i,
    nd(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = lL(...t);
    for (let c of (e = a == null ? void 0 : a.class) !== null && e !== void 0 ? e : []) {
      const l = c(o);
      l && (o = l);
    }
    od((r = a == null ? void 0 : a.static) !== null && r !== void 0 ? r : {}, o), od((n = a == null ? void 0 : a.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return iL(o, t), o;
}
const od = (t, e) => {
  const r = t.property, n = t.method;
  if (r)
    for (let s in r)
      for (let i of r[s])
        i(e, s);
  if (n)
    for (let s in n)
      for (let i of n[s])
        i(e, s, Object.getOwnPropertyDescriptor(e, s));
};
let sr = class extends jg {
  constructor({
    specObj: r,
    ...n
  }) {
    super({
      ...n
    });
    b(this, "specObj");
    b(this, "passingOptionsNames", ["specObj"]);
    this.specObj = r;
  }
  retrievePassingOptions() {
    return Bv(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = He(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return ko(Lt, ["visitors", ...r], this.specObj) ? He(["visitors", ...r], this.specObj) : He(["visitors", ...r, "$visitor"], this.specObj);
  }
  retrieveVisitorInstance(r, n = {}) {
    const s = this.retrievePassingOptions(), i = this.retrieveVisitor(r), o = {
      ...s,
      ...n
    };
    return new i(o);
  }
  toRefractedElement(r, n, s = {}) {
    const i = this.retrieveVisitorInstance(r, s);
    return i instanceof we && (i == null ? void 0 : i.constructor) === we ? M(n) : (Ie(n, i, s), i.element);
  }
}, Gn = class extends sr {
  constructor({
    specPath: r,
    ignoredFields: n,
    ...s
  }) {
    super({
      ...s
    });
    b(this, "specPath");
    b(this, "ignoredFields");
    this.specPath = r, this.ignoredFields = n || [];
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (W(o) && s.includes(O(o)) && !this.ignoredFields.includes(O(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", O(o)], i), l = new os(M(o), c);
        this.copyMetaAndAttributes(a, l), l.classes.push("fixed-field"), this.element.content.push(l);
      } else this.ignoredFields.includes(O(o)) || this.element.content.push(M(a));
    }), this.copyMetaAndAttributes(r, this.element), Q;
  }
};
class uL extends _(Gn, we) {
  constructor(e) {
    super(e), this.element = new _s(), this.specPath = B(["document", "objects", "JSONSchema"]);
  }
}
let Ht = class {
  constructor({
    parent: e
  }) {
    b(this, "parent");
    this.parent = e;
  }
};
const gt = (t) => X(t) && t.hasKey("$ref");
let fL = class extends _(sr, Ht, we) {
  ObjectElement(e) {
    const r = gt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), Q;
  }
  ArrayElement(e) {
    return this.element = new oe(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
};
class pL extends we {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
let hL = class extends sr {
  constructor({
    specPath: r,
    ignoredFields: n,
    fieldPatternPredicate: s,
    ...i
  }) {
    super({
      ...i
    });
    b(this, "specPath");
    b(this, "ignoredFields");
    b(this, "fieldPatternPredicate", Iu);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (!this.ignoredFields.includes(O(s)) && this.fieldPatternPredicate(O(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new os(M(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(O(s)) || this.element.content.push(M(i));
    }), this.copyMetaAndAttributes(r, this.element), Q;
  }
}, la = class extends hL {
  constructor(e) {
    super(e), this.fieldPatternPredicate = Xu;
  }
}, dL = class extends _(la, Ht, we) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}, mL = class extends _(la, Ht, we) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
class vL extends _(la, Ht, we) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let yL = class extends we {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}, gL = class extends we {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}, bL = class extends _(sr, Ht, we) {
  constructor(e) {
    super(e), this.element = new oe(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}, xL = class extends _(sr, Ht, we) {
  constructor(e) {
    super(e), this.element = new oe(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}, wL = class extends _(sr, Ht, we) {
  constructor(e) {
    super(e), this.element = new oe(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
};
class EL extends _(la, Ht, we) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let $L = class extends _(sr, Ht, we) {
  constructor(e) {
    super(e), this.element = new oe(), this.element.classes.push("json-schema-links");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "LinkDescription"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
};
class OL extends _(Gn, we) {
  constructor(e) {
    super(e), this.element = new oa(), this.specPath = B(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = Gn.prototype.ObjectElement.call(this, e);
    return W(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
let SL = class extends we {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, AL = class extends sr {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    b(this, "alternator");
    this.alternator = r;
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => Gu(i, B(o), Do)), s = Yv(n)(r);
    return this.element = this.toRefractedElement(s, r), Q;
  }
}, Dr = class extends AL {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: gt,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: kt,
      specPath: ["document", "objects", "JSONSchema"]
    }];
  }
};
class PL extends _(Gn, we) {
  constructor(e) {
    super(e), this.element = new aa(), this.specPath = B(["document", "objects", "Media"]);
  }
}
class jL extends _(Gn, we) {
  constructor(e) {
    super(e), this.element = new ca(), this.specPath = B(["document", "objects", "LinkDescription"]);
  }
}
const qt = {
  visitors: {
    value: we,
    JSONSchemaOrJSONReferenceVisitor: Dr,
    document: {
      objects: {
        JSONSchema: {
          $visitor: uL,
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
            additionalItems: Dr,
            items: fL,
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
            required: pL,
            properties: dL,
            additionalProperties: Dr,
            patternProperties: mL,
            dependencies: vL,
            // validation keywords for any instance type
            enum: yL,
            type: gL,
            allOf: bL,
            anyOf: xL,
            oneOf: wL,
            not: Dr,
            definitions: EL,
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
            links: $L,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: OL,
          fixedFields: {
            $ref: SL
          }
        },
        Media: {
          $visitor: PL,
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
          $visitor: jL,
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
            targetSchema: Dr,
            mediaType: {
              $ref: "#/visitors/value"
            },
            method: {
              $ref: "#/visitors/value"
            },
            encType: {
              $ref: "#/visitors/value"
            },
            schema: Dr
          }
        }
      }
    }
  }
}, TL = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof _s || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), _L = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof oa || t(n) && e("JSONReference", n) && r("object", n)), CL = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof aa || t(n) && e("media", n) && r("object", n)), RL = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ca || t(n) && e("linkDescription", n) && r("object", n)), IL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: _L,
  isJSONSchemaElement: TL,
  isLinkDescriptionElement: RL,
  isMediaElement: CL
}, Symbol.toStringTag, { value: "Module" })), ML = () => {
  const t = ls(eL);
  return {
    predicates: {
      ...IL,
      isStringElement: W
    },
    namespace: t
  };
}, FL = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = qt
} = {}) => {
  const s = uf(t), i = ea(n), o = He(e, i), a = new o({
    specObj: i
  });
  return Ie(s, a), gn(a.element, r, {
    toolboxCreator: ML,
    visitorOptions: {
      keyMap: rL,
      nodeTypeGetter: tL
    }
  });
}, ua = (t) => (e, r = {}) => FL(e, {
  specPath: t,
  ...r
});
_s.refract = ua(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
oa.refract = ua(["visitors", "document", "objects", "JSONReference", "$visitor"]);
aa.refract = ua(["visitors", "document", "objects", "Media", "$visitor"]);
ca.refract = ua(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let fa = class extends _s {
  constructor(e, r, n) {
    super(e, r, n), this.element = "schema", this.classes.push("json-schema-draft-4");
  }
  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    throw new Pe("idProp getter in Schema class is not not supported.");
  }
  set idProp(e) {
    throw new Pe("idProp setter in Schema class is not not supported.");
  }
  get $schema() {
    throw new Pe("$schema getter in Schema class is not not supported.");
  }
  set $schema(e) {
    throw new Pe("$schema setter in Schema class is not not supported.");
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
    throw new Pe("patternProperties getter in Schema class is not not supported.");
  }
  set patternProperties(e) {
    throw new Pe("patternProperties setter in Schema class is not not supported.");
  }
  get dependencies() {
    throw new Pe("dependencies getter in Schema class is not not supported.");
  }
  set dependencies(e) {
    throw new Pe("dependencies setter in Schema class is not not supported.");
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
    throw new Pe("definitions getter in Schema class is not not supported.");
  }
  set definitions(e) {
    throw new Pe("definitions setter in Schema class is not not supported.");
  }
  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */
  get base() {
    throw new Pe("base getter in Schema class is not not supported.");
  }
  set base(e) {
    throw new Pe("base setter in Schema class is not not supported.");
  }
  get links() {
    throw new Pe("links getter in Schema class is not not supported.");
  }
  set links(e) {
    throw new Pe("links setter in Schema class is not not supported.");
  }
  get media() {
    throw new Pe("media getter in Schema class is not not supported.");
  }
  set media(e) {
    throw new Pe("media setter in Schema class is not not supported.");
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
}, Cs = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "securityRequirement";
  }
}, Rs = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "securityScheme";
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
}, Is = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "server";
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
}, Ms = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "serverVariable";
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
}, pa = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "tag";
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
}, ha = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "xml";
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
const kL = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", hs), e.register("components", ds), e.register("contact", ms), e.register("discriminator", ta), e.register("encoding", ra), e.register("example", vs), e.register("externalDocumentation", ys), e.register("header", xn), e.register("info", gs), e.register("license", bs), e.register("link", xs), e.register("mediaType", ws), e.register("oAuthFlow", na), e.register("oAuthFlows", sa), e.register("openapi", Es), e.register("openApi3_0", ia), e.register("operation", $s), e.register("parameter", wn), e.register("pathItem", Os), e.register("paths", Ss), e.register("reference", As), e.register("requestBody", Ps), e.register("response", js), e.register("responses", Ts), e.register("schema", fa), e.register("securityRequirement", Cs), e.register("securityScheme", Rs), e.register("server", Is), e.register("serverVariable", Ms), e.register("tag", pa), e.register("xml", ha), e;
  }
}, Ni = class Ni extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ni.primaryClass);
  }
};
b(Ni, "primaryClass", "servers");
let Mi = Ni;
const Li = class Li extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Li.primaryClass);
  }
};
b(Li, "primaryClass", "security");
let yl = Li;
const Vi = class Vi extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Vi.primaryClass);
  }
};
b(Vi, "primaryClass", "tags");
let gl = Vi;
const Bi = class Bi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Bi.primaryClass);
  }
};
b(Bi, "primaryClass", "server-variables");
let bl = Bi;
const Ui = class Ui extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ui.primaryClass);
  }
};
b(Ui, "primaryClass", "components-schemas");
let Fi = Ui;
const Hi = class Hi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Hi.primaryClass);
  }
};
b(Hi, "primaryClass", "components-responses");
let xl = Hi;
const qi = class qi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(qi.primaryClass), this.classes.push("parameters");
  }
};
b(qi, "primaryClass", "components-parameters");
let wl = qi;
const zi = class zi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(zi.primaryClass), this.classes.push("examples");
  }
};
b(zi, "primaryClass", "components-examples");
let El = zi;
const Gi = class Gi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Gi.primaryClass);
  }
};
b(Gi, "primaryClass", "components-request-bodies");
let $l = Gi;
const Ki = class Ki extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ki.primaryClass);
  }
};
b(Ki, "primaryClass", "components-headers");
let Ol = Ki;
const Ji = class Ji extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ji.primaryClass);
  }
};
b(Ji, "primaryClass", "components-security-schemes");
let Sl = Ji;
const Wi = class Wi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Wi.primaryClass);
  }
};
b(Wi, "primaryClass", "components-links");
let Al = Wi;
const Yi = class Yi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Yi.primaryClass);
  }
};
b(Yi, "primaryClass", "components-callbacks");
let Pl = Yi;
const Xi = class Xi extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Xi.primaryClass), this.classes.push("servers");
  }
};
b(Xi, "primaryClass", "path-item-servers");
let jl = Xi;
const Qi = class Qi extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Qi.primaryClass), this.classes.push("parameters");
  }
};
b(Qi, "primaryClass", "path-item-parameters");
let Tl = Qi;
const Zi = class Zi extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Zi.primaryClass), this.classes.push("parameters");
  }
};
b(Zi, "primaryClass", "operation-parameters");
let ki = Zi;
const eo = class eo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(eo.primaryClass), this.classes.push("examples");
  }
};
b(eo, "primaryClass", "parameter-examples");
let _l = eo;
const to = class to extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(to.primaryClass), this.classes.push("content");
  }
};
b(to, "primaryClass", "parameter-content");
let Cl = to;
const ro = class ro extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ro.primaryClass);
  }
};
b(ro, "primaryClass", "operation-tags");
let Rl = ro;
const no = class no extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(no.primaryClass);
  }
};
b(no, "primaryClass", "operation-callbacks");
let Il = no;
const so = class so extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(so.primaryClass), this.classes.push("security");
  }
};
b(so, "primaryClass", "operation-security");
let Di = so;
const io = class io extends oe {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(io.primaryClass), this.classes.push("servers");
  }
};
b(io, "primaryClass", "operation-servers");
let Ml = io;
const oo = class oo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(oo.primaryClass), this.classes.push("content");
  }
};
b(oo, "primaryClass", "request-body-content");
let Fl = oo;
const ao = class ao extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ao.primaryClass), this.classes.push("examples");
  }
};
b(ao, "primaryClass", "media-type-examples");
let kl = ao;
const co = class co extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(co.primaryClass);
  }
};
b(co, "primaryClass", "media-type-encoding");
let Dl = co;
const lo = class lo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(lo.primaryClass);
  }
};
b(lo, "primaryClass", "encoding-headers");
let Nl = lo;
const uo = class uo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(uo.primaryClass);
  }
};
b(uo, "primaryClass", "response-headers");
let Ll = uo;
const fo = class fo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(fo.primaryClass), this.classes.push("content");
  }
};
b(fo, "primaryClass", "response-content");
let Vl = fo;
const po = class po extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(po.primaryClass);
  }
};
b(po, "primaryClass", "response-links");
let Bl = po;
const ho = class ho extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ho.primaryClass);
  }
};
b(ho, "primaryClass", "discriminator-mapping");
let Ul = ho;
const mo = class mo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(mo.primaryClass);
  }
};
b(mo, "primaryClass", "oauth-flow-scopes");
let Hl = mo;
const vo = class vo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(vo.primaryClass);
  }
};
b(vo, "primaryClass", "link-parameters");
let ql = vo;
const yo = class yo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(yo.primaryClass), this.classes.push("examples");
  }
};
b(yo, "primaryClass", "header-examples");
let zl = yo;
const go = class go extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(go.primaryClass), this.classes.push("content");
  }
};
b(go, "primaryClass", "header-content");
let Gl = go;
const DL = (t) => {
  if (ve(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, NL = {
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
  ...yn
};
class Cg {
  constructor(e = {}) {
    b(this, "element");
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = yt(r.meta, e.meta), cs(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = yt(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
class T extends Cg {
  enter(e) {
    return this.element = M(e), Q;
  }
}
class Le extends Cg {
  constructor({
    specObj: r,
    passingOptionsNames: n,
    openApiGenericElement: s,
    openApiSemanticElement: i,
    ...o
  }) {
    super({
      ...o
    });
    b(this, "specObj");
    b(this, "passingOptionsNames", ["specObj", "openApiGenericElement", "openApiSemanticElement"]);
    b(this, "openApiGenericElement");
    b(this, "openApiSemanticElement");
    this.specObj = r, this.openApiGenericElement = s, this.openApiSemanticElement = i, Array.isArray(n) && (this.passingOptionsNames = n);
  }
  retrievePassingOptions() {
    return Bv(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = He(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return ko(Lt, ["visitors", ...r], this.specObj) ? He(["visitors", ...r], this.specObj) : He(["visitors", ...r, "$visitor"], this.specObj);
  }
  retrieveVisitorInstance(r, n = {}) {
    const s = this.retrievePassingOptions(), i = this.retrieveVisitor(r), o = {
      ...s,
      ...n
    };
    return new i(o);
  }
  toRefractedElement(r, n, s = {}) {
    const i = this.retrieveVisitorInstance(r, s);
    return i instanceof T && (i == null ? void 0 : i.constructor) === T ? M(n) : (Ie(n, i, s), i.element);
  }
}
const ue = (t) => X(t) && t.hasKey("$ref"), LL = X, VL = X, Rg = (t) => W(t.key) && Hv("x-", O(t.key));
class Y extends Le {
  constructor({
    specPath: r,
    ignoredFields: n,
    canSupportSpecificationExtensions: s,
    specificationExtensionPredicate: i,
    ...o
  }) {
    super({
      ...o
    });
    b(this, "specPath");
    b(this, "ignoredFields");
    b(this, "canSupportSpecificationExtensions", !0);
    b(this, "specificationExtensionPredicate", Rg);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "boolean" && (this.canSupportSpecificationExtensions = s), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (W(o) && s.includes(O(o)) && !this.ignoredFields.includes(O(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", O(o)], i), l = new os(M(o), c);
        this.copyMetaAndAttributes(a, l), l.classes.push("fixed-field"), this.element.content.push(l);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(a)) {
        const c = this.toRefractedElement(["document", "extension"], a);
        this.element.content.push(c);
      } else this.ignoredFields.includes(O(o)) || this.element.content.push(M(a));
    }), this.copyMetaAndAttributes(r, this.element), Q;
  }
}
class BL extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ia(), this.specPath = B(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return Y.prototype.ObjectElement.call(this, e);
  }
}
class UL extends _(Le, T) {
  StringElement(e) {
    const r = new Es(O(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, Q;
  }
}
class HL extends Le {
  MemberElement(e) {
    return this.element = M(e), this.element.classes.push("specification-extension"), Q;
  }
}
let qL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new gs(), this.specPath = B(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
class zL extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
let GL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ms(), this.specPath = B(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
}, KL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new bs(), this.specPath = B(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
}, JL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new xs(), this.specPath = B(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return (W(this.element.operationId) || W(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
class WL extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class YL extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class on extends Le {
  constructor({
    specPath: r,
    ignoredFields: n,
    fieldPatternPredicate: s,
    canSupportSpecificationExtensions: i,
    specificationExtensionPredicate: o,
    ...a
  }) {
    super({
      ...a
    });
    b(this, "specPath");
    b(this, "ignoredFields");
    b(this, "fieldPatternPredicate", Iu);
    b(this, "canSupportSpecificationExtensions", !1);
    b(this, "specificationExtensionPredicate", Rg);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s), typeof i == "boolean" && (this.canSupportSpecificationExtensions = i), typeof o == "function" && (this.specificationExtensionPredicate = o);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
        const o = this.toRefractedElement(["document", "extension"], i);
        this.element.content.push(o);
      } else if (!this.ignoredFields.includes(O(s)) && this.fieldPatternPredicate(O(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new os(M(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(O(s)) || this.element.content.push(M(i));
    }), this.copyMetaAndAttributes(r, this.element), Q;
  }
}
class z extends on {
  constructor(e) {
    super(e), this.fieldPatternPredicate = Xu;
  }
}
let XL = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new ql(), this.specPath = B(["value"]);
  }
}, QL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Is(), this.specPath = B(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
class ZL extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
let Pf = class extends _(Le, T) {
  constructor(e) {
    super(e), this.element = new Mi();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = LL(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}, e2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ms(), this.specPath = B(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
class t2 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new bl(), this.specPath = B(["document", "objects", "ServerVariable"]);
  }
}
let r2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ws(), this.specPath = B(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
class bt extends Le {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    b(this, "alternator");
    this.alternator = r || [];
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => Gu(i, B(o), Do)), s = Yv(n)(r);
    return this.element = this.toRefractedElement(s, r), Q;
  }
}
const n2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hs || t(n) && e("callback", n) && r("object", n)), s2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ds || t(n) && e("components", n) && r("object", n)), i2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ms || t(n) && e("contact", n) && r("object", n)), o2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vs || t(n) && e("example", n) && r("object", n)), a2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ys || t(n) && e("externalDocumentation", n) && r("object", n)), En = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xn || t(n) && e("header", n) && r("object", n)), c2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gs || t(n) && e("info", n) && r("object", n)), l2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof bs || t(n) && e("license", n) && r("object", n)), u2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xs || t(n) && e("link", n) && r("object", n)), f2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Es || t(n) && e("openapi", n) && r("string", n)), p2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof ia || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), Ig = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof $s || t(n) && e("operation", n) && r("object", n)), h2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof wn || t(n) && e("parameter", n) && r("object", n)), jf = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Os || t(n) && e("pathItem", n) && r("object", n)), d2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ss || t(n) && e("paths", n) && r("object", n)), ae = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof As || t(n) && e("reference", n) && r("object", n)), m2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ps || t(n) && e("requestBody", n) && r("object", n)), da = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof js || t(n) && e("response", n) && r("object", n)), v2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ts || t(n) && e("responses", n) && r("object", n)), y2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fa || t(n) && e("schema", n) && r("object", n)), g2 = (t) => as(t) && t.classes.includes("boolean-json-schema"), b2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Cs || t(n) && e("securityRequirement", n) && r("object", n)), x2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Rs || t(n) && e("securityScheme", n) && r("object", n)), w2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Is || t(n) && e("server", n) && r("object", n)), E2 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ms || t(n) && e("serverVariable", n) && r("object", n)), ma = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ws || t(n) && e("mediaType", n) && r("object", n)), Mg = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Mi || t(s) && e("array", s) && r("array", s) && n("servers", s)), $2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: g2,
  isCallbackElement: n2,
  isComponentsElement: s2,
  isContactElement: i2,
  isExampleElement: o2,
  isExternalDocumentationElement: a2,
  isHeaderElement: En,
  isInfoElement: c2,
  isLicenseElement: l2,
  isLinkElement: u2,
  isMediaTypeElement: ma,
  isOpenApi3_0Element: p2,
  isOpenapiElement: f2,
  isOperationElement: Ig,
  isParameterElement: h2,
  isPathItemElement: jf,
  isPathsElement: d2,
  isReferenceElement: ae,
  isRequestBodyElement: m2,
  isResponseElement: da,
  isResponsesElement: v2,
  isSchemaElement: y2,
  isSecurityRequirementElement: b2,
  isSecuritySchemeElement: x2,
  isServerElement: w2,
  isServerVariableElement: E2,
  isServersElement: Mg
}, Symbol.toStringTag, { value: "Module" }));
let O2 = class extends _(bt, T) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: kt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = bt.prototype.enter.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, Tf = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("examples"), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, S2 = class extends Tf {
  constructor(e) {
    super(e), this.element = new kl();
  }
}, A2 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Dl(), this.specPath = B(["document", "objects", "Encoding"]);
  }
}, P2 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Cs(), this.specPath = B(["value"]);
  }
}, j2 = class extends _(Le, T) {
  constructor(e) {
    super(e), this.element = new yl();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (X(r)) {
        const n = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(n);
      } else
        this.element.push(M(r));
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}, T2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ds(), this.specPath = B(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
}, _2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new pa(), this.specPath = B(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
}, C2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new As(), this.specPath = B(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return W(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}, R2 = class extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, I2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new wn(), this.specPath = B(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return X(this.element.contentProp) && this.element.contentProp.filter(ma).forEach((n, s) => {
      n.setMetaProperty("media-type", O(s));
    }), r;
  }
}, M2 = class extends _(bt, T) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: kt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = bt.prototype.enter.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, F2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new xn(), this.specPath = B(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
}, k2 = class extends _(bt, T) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: kt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = bt.prototype.enter.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, D2 = class extends Tf {
  constructor(e) {
    super(e), this.element = new zl();
  }
}, va = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("content"), this.specPath = B(["document", "objects", "MediaType"]);
  }
}, N2 = class extends va {
  constructor(e) {
    super(e), this.element = new Gl();
  }
}, L2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new fa(), this.specPath = B(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const ad = qt.visitors.document.objects.JSONSchema.fixedFields.allOf;
let V2 = class extends ad {
  ArrayElement(e) {
    const r = ad.prototype.ArrayElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const cd = qt.visitors.document.objects.JSONSchema.fixedFields.anyOf;
let B2 = class extends cd {
  ArrayElement(e) {
    const r = cd.prototype.ArrayElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const ld = qt.visitors.document.objects.JSONSchema.fixedFields.oneOf;
let U2 = class extends ld {
  ArrayElement(e) {
    const r = ld.prototype.ArrayElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const ud = qt.visitors.document.objects.JSONSchema.fixedFields.items;
class H2 extends ud {
  ObjectElement(e) {
    const r = ud.prototype.ObjectElement.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
}
const fd = qt.visitors.document.objects.JSONSchema.fixedFields.properties;
let q2 = class extends fd {
  ObjectElement(e) {
    const r = fd.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const z2 = qt.visitors.document.objects.JSONSchema.fixedFields.type;
let G2 = class extends z2 {
  ArrayElement(e) {
    return this.enter(e);
  }
};
const pd = qt.visitors.JSONSchemaOrJSONReferenceVisitor;
class hd extends pd {
  ObjectElement(e) {
    const r = pd.prototype.enter.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
let K2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ta(), this.specPath = B(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
class J2 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Ul(), this.specPath = B(["value"]);
  }
}
let W2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ha(), this.specPath = B(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
}, Y2 = class extends Tf {
  constructor(e) {
    super(e), this.element = new _l();
  }
}, X2 = class extends va {
  constructor(e) {
    super(e), this.element = new Cl();
  }
}, Q2 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Fi(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
}, Z2 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new xl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(da).forEach((n, s) => {
      n.setMetaProperty("http-status-code", O(s));
    }), r;
  }
}, eV = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new wl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
}, tV = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new El(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
class rV extends _(z, T) {
  constructor(e) {
    super(e), this.element = new $l(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
let nV = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Ol(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.filter(En).forEach((n, s) => {
      n.setMetaProperty("header-name", O(s));
    }), r;
  }
};
class sV extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Sl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
let iV = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Al(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}, oV = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Pl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}, aV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new vs(), this.specPath = B(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return W(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
class cV extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let lV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ys(), this.specPath = B(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
}, uV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ra(), this.specPath = B(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return X(this.element.headers) && this.element.headers.filter(En).forEach((n, s) => {
      n.setMetaProperty("header-name", O(s));
    }), r;
  }
}, fV = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Nl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!En(n)) return;
      const i = O(s);
      n.setMetaProperty("headerName", i);
    }), r;
  }
}, pV = class extends _(on, T) {
  constructor(e) {
    super(e), this.element = new Ss(), this.specPath = B(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = kt;
  }
  ObjectElement(e) {
    const r = on.prototype.ObjectElement.call(this, e);
    return this.element.filter(jf).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", M(s));
    }), r;
  }
}, hV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ps(), this.specPath = B(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return X(this.element.contentProp) && this.element.contentProp.filter(ma).forEach((n, s) => {
      n.setMetaProperty("media-type", O(s));
    }), r;
  }
}, dV = class extends va {
  constructor(e) {
    super(e), this.element = new Fl();
  }
}, mV = class extends _(on, T) {
  constructor(e) {
    super(e), this.element = new hs(), this.specPath = B(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(jf).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", O(s));
    }), r;
  }
}, vV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new js(), this.specPath = B(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return X(this.element.contentProp) && this.element.contentProp.filter(ma).forEach((n, s) => {
      n.setMetaProperty("media-type", O(s));
    }), X(this.element.headers) && this.element.headers.filter(En).forEach((n, s) => {
      n.setMetaProperty("header-name", O(s));
    }), r;
  }
};
class yV extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Ll(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!En(n)) return;
      const i = O(s);
      n.setMetaProperty("header-name", i);
    }), r;
  }
}
class gV extends va {
  constructor(e) {
    super(e), this.element = new Vl();
  }
}
class bV extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Bl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
class dd extends _(Y, on) {
  constructor({
    specPathFixedFields: r,
    specPathPatternedFields: n,
    ...s
  }) {
    super({
      ...s
    });
    b(this, "specPathFixedFields");
    b(this, "specPathPatternedFields");
    this.specPathFixedFields = r, this.specPathPatternedFields = n;
  }
  ObjectElement(r) {
    const {
      specPath: n,
      ignoredFields: s
    } = this;
    try {
      this.specPath = this.specPathFixedFields;
      const i = this.retrieveFixedFields(this.specPath(r));
      this.ignoredFields = [...s, ...WP(r.keys(), i)], Y.prototype.ObjectElement.call(this, r), this.specPath = this.specPathPatternedFields, this.ignoredFields = i, on.prototype.ObjectElement.call(this, r);
    } catch (i) {
      throw this.specPath = n, i;
    }
    return Q;
  }
}
let xV = class extends _(dd, T) {
  constructor(e) {
    super(e), this.element = new Ts(), this.specPathFixedFields = B(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${Ej(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = dd.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(da).forEach((n, s) => {
      const i = M(s);
      this.fieldPatternPredicate(O(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
class wV extends _(bt, T) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: kt,
      specPath: ["document", "objects", "Response"]
    }];
  }
  ObjectElement(e) {
    const r = bt.prototype.enter.call(this, e);
    return ae(this.element) ? this.element.setMetaProperty("referenced-element", "response") : da(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
let EV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new $s(), this.specPath = B(["document", "objects", "Operation"]);
  }
}, $V = class extends T {
  constructor(e) {
    super(e), this.element = new Rl();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(M(e)), Q;
  }
}, Fg = class extends _(Le, T) {
  constructor(e) {
    super(e), this.element = new oe(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      ae(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}, OV = class extends Fg {
  constructor(e) {
    super(e), this.element = new ki();
  }
}, SV = class extends bt {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: kt,
      specPath: ["document", "objects", "RequestBody"]
    }];
  }
  ObjectElement(e) {
    const r = bt.prototype.enter.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
class AV extends _(z, T) {
  constructor(r) {
    super(r);
    b(this, "specPath");
    this.element = new Il(), this.specPath = (n) => ue(n) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(r) {
    const n = z.prototype.ObjectElement.call(this, r);
    return this.element.filter(ae).forEach((s) => {
      s.setMetaProperty("referenced-element", "callback");
    }), n;
  }
}
class PV extends _(Le, T) {
  constructor(e) {
    super(e), this.element = new Di();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = X(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}
let jV = class extends Pf {
  constructor(e) {
    super(e), this.element = new Ml();
  }
}, TV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Os(), this.specPath = B(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(Ig).forEach((n, s) => {
      const i = M(s);
      i.content = O(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), W(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
class _V extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class CV extends Pf {
  constructor(e) {
    super(e), this.element = new jl();
  }
}
class RV extends Fg {
  constructor(e) {
    super(e), this.element = new Tl();
  }
}
let IV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Rs(), this.specPath = B(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
}, MV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new sa(), this.specPath = B(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
}, FV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new na(), this.specPath = B(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
class kV extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Hl(), this.specPath = B(["value"]);
  }
}
class DV extends _(Le, T) {
  constructor(e) {
    super(e), this.element = new gl();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = VL(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}
const {
  fixedFields: Ee
} = qt.visitors.document.objects.JSONSchema, x = {
  visitors: {
    value: T,
    document: {
      objects: {
        OpenApi: {
          $visitor: BL,
          fixedFields: {
            openapi: UL,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: Pf,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: j2,
            tags: DV,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: qL,
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
            version: zL
          }
        },
        Contact: {
          $visitor: GL,
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
          $visitor: KL,
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
          $visitor: QL,
          fixedFields: {
            url: ZL,
            description: {
              $ref: "#/visitors/value"
            },
            variables: t2
          }
        },
        ServerVariable: {
          $visitor: e2,
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
          $visitor: T2,
          fixedFields: {
            schemas: Q2,
            responses: Z2,
            parameters: eV,
            examples: tV,
            requestBodies: rV,
            headers: nV,
            securitySchemes: sV,
            links: iV,
            callbacks: oV
          }
        },
        Paths: {
          $visitor: pV
        },
        PathItem: {
          $visitor: TV,
          fixedFields: {
            $ref: _V,
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
            servers: CV,
            parameters: RV
          }
        },
        Operation: {
          $visitor: EV,
          fixedFields: {
            tags: $V,
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
            parameters: OV,
            requestBody: SV,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: AV,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: PV,
            servers: jV
          }
        },
        ExternalDocumentation: {
          $visitor: lV,
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
          $visitor: I2,
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
            schema: M2,
            example: {
              $ref: "#/visitors/value"
            },
            examples: Y2,
            content: X2
          }
        },
        RequestBody: {
          $visitor: hV,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: dV,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: r2,
          fixedFields: {
            schema: O2,
            example: {
              $ref: "#/visitors/value"
            },
            examples: S2,
            encoding: A2
          }
        },
        Encoding: {
          $visitor: uV,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: fV,
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
          $visitor: xV,
          fixedFields: {
            default: wV
          }
        },
        Response: {
          $visitor: vV,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: yV,
            content: gV,
            links: bV
          }
        },
        Callback: {
          $visitor: mV
        },
        Example: {
          $visitor: aV,
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
            externalValue: cV
          }
        },
        Link: {
          $visitor: JL,
          fixedFields: {
            operationRef: WL,
            operationId: YL,
            parameters: XL,
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
          $visitor: F2,
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
            schema: k2,
            example: {
              $ref: "#/visitors/value"
            },
            examples: D2,
            content: N2
          }
        },
        Tag: {
          $visitor: _2,
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
          $visitor: C2,
          fixedFields: {
            $ref: R2
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: L2,
          fixedFields: {
            // the following properties are taken directly from the JSON Schema definition and follow the same specifications
            title: Ee.title,
            multipleOf: Ee.multipleOf,
            maximum: Ee.maximum,
            exclusiveMaximum: Ee.exclusiveMaximum,
            minimum: Ee.minimum,
            exclusiveMinimum: Ee.exclusiveMinimum,
            maxLength: Ee.maxLength,
            minLength: Ee.minLength,
            pattern: Ee.pattern,
            maxItems: Ee.maxItems,
            minItems: Ee.minItems,
            uniqueItems: Ee.uniqueItems,
            maxProperties: Ee.maxProperties,
            minProperties: Ee.minProperties,
            required: Ee.required,
            enum: Ee.enum,
            // the following properties are taken from the JSON Schema definition but their definitions were adjusted to the OpenAPI Specification
            type: G2,
            allOf: V2,
            anyOf: B2,
            oneOf: U2,
            not: hd,
            items: H2,
            properties: q2,
            additionalProperties: hd,
            description: Ee.description,
            format: Ee.format,
            default: Ee.default,
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
          $visitor: K2,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: J2
          }
        },
        XML: {
          $visitor: W2,
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
          $visitor: IV,
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
          $visitor: MV,
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
          $visitor: FV,
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
            scopes: kV
          }
        },
        SecurityRequirement: {
          $visitor: P2
        }
      },
      extension: {
        $visitor: HL
      }
    }
  }
}, NV = () => {
  const t = ls(kL);
  return {
    predicates: {
      ...$2,
      isElement: ve,
      isStringElement: W,
      isArrayElement: Ne,
      isObjectElement: X,
      isMemberElement: ut,
      includesClasses: Xo,
      hasElementSourceMap: cs
    },
    namespace: t
  };
}, LV = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = uf(t), s = ea(x), i = He(e, s), o = new i({
    specObj: s
  });
  return Ie(n, o), gn(o.element, r, {
    toolboxCreator: NV,
    visitorOptions: {
      keyMap: NL,
      nodeTypeGetter: DL
    }
  });
}, ee = (t) => (e, r = {}) => LV(e, {
  specPath: t,
  ...r
});
hs.refract = ee(["visitors", "document", "objects", "Callback", "$visitor"]);
ds.refract = ee(["visitors", "document", "objects", "Components", "$visitor"]);
ms.refract = ee(["visitors", "document", "objects", "Contact", "$visitor"]);
vs.refract = ee(["visitors", "document", "objects", "Example", "$visitor"]);
ta.refract = ee(["visitors", "document", "objects", "Discriminator", "$visitor"]);
ra.refract = ee(["visitors", "document", "objects", "Encoding", "$visitor"]);
ys.refract = ee(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
xn.refract = ee(["visitors", "document", "objects", "Header", "$visitor"]);
gs.refract = ee(["visitors", "document", "objects", "Info", "$visitor"]);
bs.refract = ee(["visitors", "document", "objects", "License", "$visitor"]);
xs.refract = ee(["visitors", "document", "objects", "Link", "$visitor"]);
ws.refract = ee(["visitors", "document", "objects", "MediaType", "$visitor"]);
na.refract = ee(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
sa.refract = ee(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Es.refract = ee(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
ia.refract = ee(["visitors", "document", "objects", "OpenApi", "$visitor"]);
$s.refract = ee(["visitors", "document", "objects", "Operation", "$visitor"]);
wn.refract = ee(["visitors", "document", "objects", "Parameter", "$visitor"]);
Os.refract = ee(["visitors", "document", "objects", "PathItem", "$visitor"]);
Ss.refract = ee(["visitors", "document", "objects", "Paths", "$visitor"]);
As.refract = ee(["visitors", "document", "objects", "Reference", "$visitor"]);
Ps.refract = ee(["visitors", "document", "objects", "RequestBody", "$visitor"]);
js.refract = ee(["visitors", "document", "objects", "Response", "$visitor"]);
Ts.refract = ee(["visitors", "document", "objects", "Responses", "$visitor"]);
fa.refract = ee(["visitors", "document", "objects", "Schema", "$visitor"]);
Cs.refract = ee(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Rs.refract = ee(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
Is.refract = ee(["visitors", "document", "objects", "Server", "$visitor"]);
Ms.refract = ee(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
pa.refract = ee(["visitors", "document", "objects", "Tag", "$visitor"]);
ha.refract = ee(["visitors", "document", "objects", "XML", "$visitor"]);
class ya extends hs {
}
class ga extends ds {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class ba extends ms {
}
class _f extends ta {
}
class Cf extends ra {
}
class xa extends vs {
}
class wa extends ys {
}
class Ea extends xn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class $a extends gs {
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
const bo = class bo extends _t {
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
};
b(bo, "default", new bo("https://spec.openapis.org/oas/3.1/dialect/base"));
let br = bo;
class Oa extends bs {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class Sa extends xs {
}
class Aa extends ws {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Rf extends na {
}
class If extends sa {
}
class Mf extends Es {
}
class ir extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "openApi3_1", this.classes.push("api");
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
class Fs extends $s {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(e) {
    this.set("requestBody", e);
  }
}
class Pa extends wn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Zt extends Os {
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
class ja extends Ss {
}
class or extends As {
}
Object.defineProperty(or.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
Object.defineProperty(or.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(t) {
    this.set("summary", t);
  },
  enumerable: !0
});
class Ta extends Ps {
}
let _a = class extends js {
};
class Ca extends Ts {
}
class _r extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "schema";
  }
  /**
   * Core vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/core
   */
  get $schema() {
    return this.get("$schema");
  }
  set $schema(e) {
    this.set("$schema", e);
  }
  get $vocabulary() {
    return this.get("$vocabulary");
  }
  set $vocabulary(e) {
    this.set("$vocabulary", e);
  }
  get $id() {
    return this.get("$id");
  }
  set $id(e) {
    this.set("$id", e);
  }
  get $anchor() {
    return this.get("$anchor");
  }
  set $anchor(e) {
    this.set("$anchor", e);
  }
  get $dynamicAnchor() {
    return this.get("$dynamicAnchor");
  }
  set $dynamicAnchor(e) {
    this.set("$dynamicAnchor", e);
  }
  get $dynamicRef() {
    return this.get("$dynamicRef");
  }
  set $dynamicRef(e) {
    this.set("$dynamicRef", e);
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
  get $comment() {
    return this.get("$comment");
  }
  set $comment(e) {
    this.set("$comment", e);
  }
  /**
   * Applicator vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/applicator
   */
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
  get prefixItems() {
    return this.get("prefixItems");
  }
  set prefixItems(e) {
    this.set("prefixItems", e);
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
  get properties() {
    return this.get("properties");
  }
  set properties(e) {
    this.set("properties", e);
  }
  get patternProperties() {
    return this.get("patternProperties");
  }
  set patternProperties(e) {
    this.set("patternProperties", e);
  }
  get additionalProperties() {
    return this.get("additionalProperties");
  }
  set additionalProperties(e) {
    this.set("additionalProperties", e);
  }
  get propertyNames() {
    return this.get("propertyNames");
  }
  set propertyNames(e) {
    this.set("propertyNames", e);
  }
  /**
   * Unevaluated Locations vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/unevaluated
   */
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
   * URI: https://json-schema.org/draft/2020-12/vocab/validation
   */
  /**
   *  Validation Keywords for Any Instance Type
   *
   *  URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.1
   */
  get type() {
    return this.get("type");
  }
  set type(e) {
    this.set("type", e);
  }
  get enum() {
    return this.get("enum");
  }
  set enum(e) {
    this.set("enum", e);
  }
  get const() {
    return this.get("const");
  }
  set const(e) {
    this.set("const", e);
  }
  /**
   * Validation Keywords for Numeric Instances (number and integer)
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#numeric
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
   * Validation Keywords for Strings
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#string
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
   * Validation Keywords for Arrays
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.4
   */
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
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.5
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
  get dependentRequired() {
    return this.get("dependentRequired");
  }
  set dependentRequired(e) {
    this.set("dependentRequired", e);
  }
  /**
   * Vocabulary for Basic Meta-Data Annotations
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/meta-data
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
  get deprecated() {
    return this.get("deprecated");
  }
  set deprecated(e) {
    this.set("deprecated", e);
  }
  get readOnly() {
    return this.get("readOnly");
  }
  set readOnly(e) {
    this.set("readOnly", e);
  }
  get writeOnly() {
    return this.get("writeOnly");
  }
  set writeOnly(e) {
    this.set("writeOnly", e);
  }
  get examples() {
    return this.get("examples");
  }
  set examples(e) {
    this.set("examples", e);
  }
  /**
   * Vocabularies for Semantic Content With "format"
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/format-annotation
   */
  get format() {
    return this.get("format");
  }
  set format(e) {
    this.set("format", e);
  }
  /**
   * Vocabulary for the Contents of String-Encoded Data
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/content
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
  get contentSchema() {
    return this.get("contentSchema");
  }
  set contentSchema(e) {
    this.set("contentSchema", e);
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
class Ra extends Cs {
}
class Ia extends Rs {
}
class Ma extends Is {
}
class Fa extends Ms {
}
class Ff extends pa {
}
class kf extends ha {
}
const Df = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", ya), e.register("components", ga), e.register("contact", ba), e.register("discriminator", _f), e.register("encoding", Cf), e.register("example", xa), e.register("externalDocumentation", wa), e.register("header", Ea), e.register("info", $a), e.register("jsonSchemaDialect", br), e.register("license", Oa), e.register("link", Sa), e.register("mediaType", Aa), e.register("oAuthFlow", Rf), e.register("oAuthFlows", If), e.register("openapi", Mf), e.register("openApi3_1", ir), e.register("operation", Fs), e.register("parameter", Pa), e.register("pathItem", Zt), e.register("paths", ja), e.register("reference", or), e.register("requestBody", Ta), e.register("response", _a), e.register("responses", Ca), e.register("schema", _r), e.register("securityRequirement", Ra), e.register("securityScheme", Ia), e.register("server", Ma), e.register("serverVariable", Fa), e.register("tag", Ff), e.register("xml", kf), e;
  }
}, xo = class xo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(xo.primaryClass);
  }
};
b(xo, "primaryClass", "components-path-items");
let Kl = xo;
const wo = class wo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(wo.primaryClass);
  }
};
b(wo, "primaryClass", "webhooks");
let Jl = wo;
const it = (t) => {
  if (ve(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, vt = {
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
  ...yn
};
class ks {
  constructor(e, r, n) {
    b(this, "internalStore");
    this.storageElement = e, this.storageField = r, this.storageSubField = n;
  }
  get store() {
    if (!this.internalStore) {
      let e = this.storageElement.get(this.storageField);
      X(e) || (e = new I(), this.storageElement.set(this.storageField, e));
      let r = e.get(this.storageSubField);
      Ne(r) || (r = new oe(), e.set(this.storageSubField, r)), this.internalStore = r;
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
const VV = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: n
  } = e, s = (a, c) => !r.isParameterElement(a) || !r.isParameterElement(c) || !r.isStringElement(a.name) || !r.isStringElement(a.in) || !r.isStringElement(c.name) || !r.isStringElement(c.in) ? !1 : O(a.name) === O(c.name) && O(a.in) === O(c.in), i = [];
  let o;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(a) {
          o = new ks(a, t, "parameters");
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
          const d = Fo(i);
          if (!Array.isArray(d) || d.length === 0)
            return;
          const u = n([...f, l, a]);
          if (o.includes(u))
            return;
          const m = Vv([], ["parameters", "content"], a), h = Tj(s, [...m, ...d]);
          a.parameters = new ki(h), o.append(u);
        }
      }
    }
  };
}, BV = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: n
  } = e;
  let s, i;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(o) {
          i = new ks(o, t, "security-requirements"), r.isArrayElement(o.security) && (s = o.security);
        },
        leave() {
          i = void 0, s = void 0;
        }
      },
      OperationElement: {
        leave(o, a, c, l, p) {
          if (p.some(r.isComponentsElement))
            return;
          const f = n([...p, c, o]);
          if (i.includes(f))
            return;
          if (typeof o.security > "u" && typeof s < "u") {
            var m;
            o.security = new Di((m = s) === null || m === void 0 ? void 0 : m.content), i.append(f);
          }
        }
      }
    }
  };
}, Wl = (t) => t.replace(/\s/g, ""), Yl = (t) => t.replace(/\W/gi, "_"), UV = (t, e) => {
  const r = Yl(Wl(e.toLowerCase())), n = Yl(Wl(t));
  return `${r}${n}`;
}, HV = (t, e, r) => {
  const n = Wl(t);
  return n.length > 0 ? Yl(n) : UV(e, r);
}, qV = ({
  storageField: t = "x-normalized",
  operationIdNormalizer: e = HV
} = {}) => (r) => {
  const {
    predicates: n,
    ancestorLineageToJSONPointer: s,
    namespace: i
  } = r, o = [], a = [], c = [];
  let l;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(p) {
          l = new ks(p, t, "operation-ids");
        },
        leave() {
          const p = fj((f) => O(f.operationId), a);
          Object.entries(p).forEach(([f, d]) => {
            Array.isArray(d) && (d.length <= 1 || d.forEach((u, m) => {
              const h = `${f}${m + 1}`;
              u.operationId = new i.elements.String(h);
            }));
          }), c.forEach((f) => {
            if (typeof f.operationId > "u") return;
            const d = String(O(f.operationId)), u = a.find((m) => O(m.meta.get("originalOperationId")) === d);
            typeof u > "u" || (f.operationId = M.safe(u.operationId), f.meta.set("originalOperationId", d), f.set("__originalOperationId", d));
          }), a.length = 0, c.length = 0, l = void 0;
        }
      },
      PathItemElement: {
        enter(p) {
          const f = en("path", O(p.meta.get("path")));
          o.push(f);
        },
        leave() {
          o.pop();
        }
      },
      OperationElement: {
        enter(p, f, d, u, m) {
          if (typeof p.operationId > "u") return;
          const h = s([...m, d, p]);
          if (l.includes(h))
            return;
          const y = String(O(p.operationId)), g = Fo(o), v = en("method", O(p.meta.get("http-method"))), E = e(y, g, v);
          y !== E && (p.operationId = new i.elements.String(E), p.set("__originalOperationId", y), p.meta.set("originalOperationId", y), a.push(p), l.append(h));
        }
      },
      LinkElement: {
        leave(p) {
          n.isLinkElement(p) && (typeof p.operationId > "u" || c.push(p));
        }
      }
    }
  };
}, zV = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: n
  } = e;
  let s;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(i) {
          s = new ks(i, t, "parameter-examples");
        },
        leave() {
          s = void 0;
        }
      },
      ParameterElement: {
        leave(i, o, a, c, l) {
          var p, f;
          if (l.some(r.isComponentsElement) || typeof i.schema > "u" || !r.isSchemaElement(i.schema) || typeof ((p = i.schema) === null || p === void 0 ? void 0 : p.example) > "u" && typeof ((f = i.schema) === null || f === void 0 ? void 0 : f.examples) > "u")
            return;
          const d = n([...l, a, i]);
          if (!s.includes(d)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const u = i.examples.map((m) => M.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", u), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", u[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [M(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", M(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, GV = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: n
  } = e;
  let s;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(i) {
          s = new ks(i, t, "header-examples");
        },
        leave() {
          s = void 0;
        }
      },
      HeaderElement: {
        leave(i, o, a, c, l) {
          var p, f;
          if (l.some(r.isComponentsElement) || typeof i.schema > "u" || !r.isSchemaElement(i.schema) || typeof ((p = i.schema) === null || p === void 0 ? void 0 : p.example) > "u" && typeof ((f = i.schema) === null || f === void 0 ? void 0 : f.examples) > "u")
            return;
          const d = n([...l, a, i]);
          if (!s.includes(d)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const u = i.examples.map((m) => M.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", u), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", u[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [M(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", M(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, KV = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ya || t(n) && e("callback", n) && r("object", n)), JV = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ga || t(n) && e("components", n) && r("object", n)), WV = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ba || t(n) && e("contact", n) && r("object", n)), YV = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xa || t(n) && e("example", n) && r("object", n)), XV = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof wa || t(n) && e("externalDocumentation", n) && r("object", n)), QV = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ea || t(n) && e("header", n) && r("object", n)), ZV = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof $a || t(n) && e("info", n) && r("object", n)), kg = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof br || t(n) && e("jsonSchemaDialect", n) && r("string", n)), e3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Oa || t(n) && e("license", n) && r("object", n)), t3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Sa || t(n) && e("link", n) && r("object", n)), r3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Mf || t(n) && e("openapi", n) && r("string", n)), Dg = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof ir || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), Ng = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Fs || t(n) && e("operation", n) && r("object", n)), n3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Pa || t(n) && e("parameter", n) && r("object", n)), xr = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zt || t(n) && e("pathItem", n) && r("object", n)), s3 = (t) => {
  if (!xr(t) || !W(t.$ref))
    return !1;
  const e = O(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, i3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ja || t(n) && e("paths", n) && r("object", n)), Cr = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof or || t(n) && e("reference", n) && r("object", n)), o3 = (t) => {
  if (!Cr(t) || !W(t.$ref))
    return !1;
  const e = O(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, a3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ta || t(n) && e("requestBody", n) && r("object", n)), c3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof _a || t(n) && e("response", n) && r("object", n)), l3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ca || t(n) && e("responses", n) && r("object", n)), It = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof _r || t(n) && e("schema", n) && r("object", n)), Nf = (t) => as(t) && t.classes.includes("boolean-json-schema"), u3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ra || t(n) && e("securityRequirement", n) && r("object", n)), f3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ia || t(n) && e("securityScheme", n) && r("object", n)), p3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ma || t(n) && e("server", n) && r("object", n)), h3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Fa || t(n) && e("serverVariable", n) && r("object", n)), d3 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Aa || t(n) && e("mediaType", n) && r("object", n)), m3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: Nf,
  isCallbackElement: KV,
  isComponentsElement: JV,
  isContactElement: WV,
  isExampleElement: YV,
  isExternalDocumentationElement: XV,
  isHeaderElement: QV,
  isInfoElement: ZV,
  isJsonSchemaDialectElement: kg,
  isLicenseElement: e3,
  isLinkElement: t3,
  isMediaTypeElement: d3,
  isOpenApi3_1Element: Dg,
  isOpenapiElement: r3,
  isOperationElement: Ng,
  isParameterElement: n3,
  isPathItemElement: xr,
  isPathItemElementExternal: s3,
  isPathsElement: i3,
  isReferenceElement: Cr,
  isReferenceElementExternal: o3,
  isRequestBodyElement: a3,
  isResponseElement: c3,
  isResponsesElement: l3,
  isSchemaElement: It,
  isSecurityRequirementElement: u3,
  isSecuritySchemeElement: f3,
  isServerElement: p3,
  isServerVariableElement: h3
}, Symbol.toStringTag, { value: "Module" })), v3 = (t) => {
  const e = t.reduce((r, n, s) => {
    if (ut(n)) {
      const i = String(O(n.key));
      r.push(i);
    } else if (Ne(t[s - 2])) {
      const i = String(t[s - 2].content.indexOf(n));
      r.push(i);
    }
    return r;
  }, []);
  return Pg(e);
}, Lg = () => {
  const t = ls(Df);
  return {
    predicates: {
      ...m3,
      isElement: ve,
      isStringElement: W,
      isArrayElement: Ne,
      isObjectElement: X,
      isMemberElement: ut,
      isServersElement: Mg,
      includesClasses: Xo,
      hasElementSourceMap: cs
    },
    ancestorLineageToJSONPointer: v3,
    namespace: t
  };
};
class y3 extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ir(), this.specPath = B(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, Y.prototype.ObjectElement.call(this, e);
  }
}
const g3 = x.visitors.document.objects.Info.$visitor;
class b3 extends g3 {
  constructor(e) {
    super(e), this.element = new $a();
  }
}
const x3 = x.visitors.document.objects.Contact.$visitor;
class w3 extends x3 {
  constructor(e) {
    super(e), this.element = new ba();
  }
}
const E3 = x.visitors.document.objects.License.$visitor;
class $3 extends E3 {
  constructor(e) {
    super(e), this.element = new Oa();
  }
}
const O3 = x.visitors.document.objects.Link.$visitor;
class S3 extends O3 {
  constructor(e) {
    super(e), this.element = new Sa();
  }
}
class A3 extends _(Le, T) {
  StringElement(e) {
    const r = new br(O(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, Q;
  }
}
const P3 = x.visitors.document.objects.Server.$visitor;
class j3 extends P3 {
  constructor(e) {
    super(e), this.element = new Ma();
  }
}
const T3 = x.visitors.document.objects.ServerVariable.$visitor;
class _3 extends T3 {
  constructor(e) {
    super(e), this.element = new Fa();
  }
}
const C3 = x.visitors.document.objects.MediaType.$visitor;
class R3 extends C3 {
  constructor(e) {
    super(e), this.element = new Aa();
  }
}
const I3 = x.visitors.document.objects.SecurityRequirement.$visitor;
class M3 extends I3 {
  constructor(e) {
    super(e), this.element = new Ra();
  }
}
const F3 = x.visitors.document.objects.Components.$visitor;
class k3 extends F3 {
  constructor(e) {
    super(e), this.element = new ga();
  }
}
const D3 = x.visitors.document.objects.Tag.$visitor;
class N3 extends D3 {
  constructor(e) {
    super(e), this.element = new Ff();
  }
}
const L3 = x.visitors.document.objects.Reference.$visitor;
class V3 extends L3 {
  constructor(e) {
    super(e), this.element = new or();
  }
}
const B3 = x.visitors.document.objects.Parameter.$visitor;
class U3 extends B3 {
  constructor(e) {
    super(e), this.element = new Pa();
  }
}
const H3 = x.visitors.document.objects.Header.$visitor;
class q3 extends H3 {
  constructor(e) {
    super(e), this.element = new Ea();
  }
}
class zt {
  constructor({
    parent: e
  }) {
    b(this, "parent");
    this.parent = e;
  }
}
class z3 extends _(Y, zt, T) {
  constructor(e) {
    super(e), this.element = new _r(), this.specPath = B(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = br.default, this.passingOptionsNames.push("parent");
  }
  ObjectElement(e) {
    this.handle$schema(e), this.handle$id(e), this.parent = this.element;
    const r = Y.prototype.ObjectElement.call(this, e);
    return W(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
  BooleanElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("boolean-json-schema"), r;
  }
  /**
   * This function depends on some external context, so we need to make sure this function
   * works even when no context is provided like when directly refracting generic Object Element
   * into Schema Element: `SchemaElement.refract(new ObjectElement({ type: 'object' });`
   */
  getJsonSchemaDialect() {
    let e;
    return this.openApiSemanticElement !== void 0 && // @ts-ignore
    kg(this.openApiSemanticElement.jsonSchemaDialect) ? e = O(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && W(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = O(this.openApiGenericElement.get("jsonSchemaDialect")) : e = O(this.jsonSchemaDefaultDialect), e;
  }
  handle$schema(e) {
    if (nr(this.parent) && !W(e.get("$schema")))
      this.element.setMetaProperty("inherited$schema", this.getJsonSchemaDialect());
    else if (It(this.parent) && !W(e.get("$schema"))) {
      const r = en(O(this.parent.meta.get("inherited$schema")), O(this.parent.$schema));
      this.element.setMetaProperty("inherited$schema", r);
    }
  }
  handle$id(e) {
    const r = this.parent !== void 0 ? M(this.parent.getMetaProperty("inherited$id", [])) : new oe(), n = O(e.get("$id"));
    Xu(n) && r.push(n), this.element.setMetaProperty("inherited$id", r);
  }
}
class G3 extends T {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
class K3 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class J3 extends _(z, zt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-$defs"), this.specPath = B(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
let W3 = class extends _(Le, zt, T) {
  constructor(e) {
    super(e), this.element = new oe(), this.element.classes.push("json-schema-allOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (X(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = M(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
};
class Y3 extends _(Le, zt, T) {
  constructor(e) {
    super(e), this.element = new oe(), this.element.classes.push("json-schema-anyOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (X(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = M(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}
class X3 extends _(Le, zt, T) {
  constructor(e) {
    super(e), this.element = new oe(), this.element.classes.push("json-schema-oneOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (X(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = M(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}
class Q3 extends _(z, zt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = B(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
class Z3 extends _(Le, zt, T) {
  constructor(e) {
    super(e), this.element = new oe(), this.element.classes.push("json-schema-prefixItems"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (X(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = M(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}
class eB extends _(z, zt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-properties"), this.specPath = B(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
class tB extends _(z, zt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-patternProperties"), this.specPath = B(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
class rB extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}
class nB extends T {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
class sB extends T {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
class iB extends T {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
const oB = x.visitors.document.objects.Discriminator.$visitor;
class aB extends oB {
  constructor(e) {
    super(e), this.element = new _f(), this.canSupportSpecificationExtensions = !0;
  }
}
const cB = x.visitors.document.objects.XML.$visitor;
class lB extends cB {
  constructor(e) {
    super(e), this.element = new kf();
  }
}
class uB extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Fi(), this.specPath = B(["document", "objects", "Schema"]);
  }
}
class fB extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Kl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(Cr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const pB = x.visitors.document.objects.Example.$visitor;
class hB extends pB {
  constructor(e) {
    super(e), this.element = new xa();
  }
}
const dB = x.visitors.document.objects.ExternalDocumentation.$visitor;
class mB extends dB {
  constructor(e) {
    super(e), this.element = new wa();
  }
}
const vB = x.visitors.document.objects.Encoding.$visitor;
class yB extends vB {
  constructor(e) {
    super(e), this.element = new Cf();
  }
}
const gB = x.visitors.document.objects.Paths.$visitor;
class bB extends gB {
  constructor(e) {
    super(e), this.element = new ja();
  }
}
const xB = x.visitors.document.objects.RequestBody.$visitor;
class wB extends xB {
  constructor(e) {
    super(e), this.element = new Ta();
  }
}
const md = x.visitors.document.objects.Callback.$visitor;
class EB extends md {
  constructor(e) {
    super(e), this.element = new ya(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = md.prototype.ObjectElement.call(this, e);
    return this.element.filter(Cr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const $B = x.visitors.document.objects.Response.$visitor;
class OB extends $B {
  constructor(e) {
    super(e), this.element = new _a();
  }
}
const SB = x.visitors.document.objects.Responses.$visitor;
class AB extends SB {
  constructor(e) {
    super(e), this.element = new Ca();
  }
}
const PB = x.visitors.document.objects.Operation.$visitor;
class jB extends PB {
  constructor(e) {
    super(e), this.element = new Fs();
  }
}
const TB = x.visitors.document.objects.PathItem.$visitor;
class _B extends TB {
  constructor(e) {
    super(e), this.element = new Zt();
  }
}
const CB = x.visitors.document.objects.SecurityScheme.$visitor;
class RB extends CB {
  constructor(e) {
    super(e), this.element = new Ia();
  }
}
const IB = x.visitors.document.objects.OAuthFlows.$visitor;
class MB extends IB {
  constructor(e) {
    super(e), this.element = new If();
  }
}
const FB = x.visitors.document.objects.OAuthFlow.$visitor;
class kB extends FB {
  constructor(e) {
    super(e), this.element = new Rf();
  }
}
class DB extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Jl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(Cr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter(xr).forEach((n, s) => {
      n.setMetaProperty("webhook-name", O(s));
    }), r;
  }
}
const NB = {
  visitors: {
    value: x.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: y3,
          fixedFields: {
            openapi: x.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: A3,
            servers: x.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: DB,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: x.visitors.document.objects.OpenApi.fixedFields.security,
            tags: x.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: b3,
          fixedFields: {
            title: x.visitors.document.objects.Info.fixedFields.title,
            description: x.visitors.document.objects.Info.fixedFields.description,
            summary: {
              $ref: "#/visitors/value"
            },
            termsOfService: x.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: x.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: w3,
          fixedFields: {
            name: x.visitors.document.objects.Contact.fixedFields.name,
            url: x.visitors.document.objects.Contact.fixedFields.url,
            email: x.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: $3,
          fixedFields: {
            name: x.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: x.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: j3,
          fixedFields: {
            url: x.visitors.document.objects.Server.fixedFields.url,
            description: x.visitors.document.objects.Server.fixedFields.description,
            variables: x.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: _3,
          fixedFields: {
            enum: x.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: x.visitors.document.objects.ServerVariable.fixedFields.default,
            description: x.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: k3,
          fixedFields: {
            schemas: uB,
            responses: x.visitors.document.objects.Components.fixedFields.responses,
            parameters: x.visitors.document.objects.Components.fixedFields.parameters,
            examples: x.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: x.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: x.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: x.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: x.visitors.document.objects.Components.fixedFields.links,
            callbacks: x.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: fB
          }
        },
        Paths: {
          $visitor: bB
        },
        PathItem: {
          $visitor: _B,
          fixedFields: {
            $ref: x.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: x.visitors.document.objects.PathItem.fixedFields.summary,
            description: x.visitors.document.objects.PathItem.fixedFields.description,
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
            servers: x.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: x.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: jB,
          fixedFields: {
            tags: x.visitors.document.objects.Operation.fixedFields.tags,
            summary: x.visitors.document.objects.Operation.fixedFields.summary,
            description: x.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: x.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: x.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: x.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: x.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: x.visitors.document.objects.Operation.fixedFields.deprecated,
            security: x.visitors.document.objects.Operation.fixedFields.security,
            servers: x.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: mB,
          fixedFields: {
            description: x.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: x.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: U3,
          fixedFields: {
            name: x.visitors.document.objects.Parameter.fixedFields.name,
            in: x.visitors.document.objects.Parameter.fixedFields.in,
            description: x.visitors.document.objects.Parameter.fixedFields.description,
            required: x.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: x.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: x.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: x.visitors.document.objects.Parameter.fixedFields.style,
            explode: x.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: x.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: x.visitors.document.objects.Parameter.fixedFields.example,
            examples: x.visitors.document.objects.Parameter.fixedFields.examples,
            content: x.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: wB,
          fixedFields: {
            description: x.visitors.document.objects.RequestBody.fixedFields.description,
            content: x.visitors.document.objects.RequestBody.fixedFields.content,
            required: x.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: R3,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: x.visitors.document.objects.MediaType.fixedFields.example,
            examples: x.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: x.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: yB,
          fixedFields: {
            contentType: x.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: x.visitors.document.objects.Encoding.fixedFields.headers,
            style: x.visitors.document.objects.Encoding.fixedFields.style,
            explode: x.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: x.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: AB,
          fixedFields: {
            default: x.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: OB,
          fixedFields: {
            description: x.visitors.document.objects.Response.fixedFields.description,
            headers: x.visitors.document.objects.Response.fixedFields.headers,
            content: x.visitors.document.objects.Response.fixedFields.content,
            links: x.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: EB
        },
        Example: {
          $visitor: hB,
          fixedFields: {
            summary: x.visitors.document.objects.Example.fixedFields.summary,
            description: x.visitors.document.objects.Example.fixedFields.description,
            value: x.visitors.document.objects.Example.fixedFields.value,
            externalValue: x.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: S3,
          fixedFields: {
            operationRef: x.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: x.visitors.document.objects.Link.fixedFields.operationId,
            parameters: x.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: x.visitors.document.objects.Link.fixedFields.requestBody,
            description: x.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: q3,
          fixedFields: {
            description: x.visitors.document.objects.Header.fixedFields.description,
            required: x.visitors.document.objects.Header.fixedFields.required,
            deprecated: x.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: x.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: x.visitors.document.objects.Header.fixedFields.style,
            explode: x.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: x.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: x.visitors.document.objects.Header.fixedFields.example,
            examples: x.visitors.document.objects.Header.fixedFields.examples,
            content: x.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: N3,
          fixedFields: {
            name: x.visitors.document.objects.Tag.fixedFields.name,
            description: x.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: V3,
          fixedFields: {
            $ref: x.visitors.document.objects.Reference.fixedFields.$ref,
            summary: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            }
          }
        },
        Schema: {
          $visitor: z3,
          fixedFields: {
            // core vocabulary
            $schema: {
              $ref: "#/visitors/value"
            },
            $vocabulary: G3,
            $id: {
              $ref: "#/visitors/value"
            },
            $anchor: {
              $ref: "#/visitors/value"
            },
            $dynamicAnchor: {
              $ref: "#/visitors/value"
            },
            $dynamicRef: {
              $ref: "#/visitors/value"
            },
            $ref: K3,
            $defs: J3,
            $comment: {
              $ref: "#/visitors/value"
            },
            // applicator vocabulary
            allOf: W3,
            anyOf: Y3,
            oneOf: X3,
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
            dependentSchemas: Q3,
            prefixItems: Z3,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: eB,
            patternProperties: tB,
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
            // validation Keywords for Any Instance Type
            type: rB,
            enum: nB,
            const: {
              $ref: "#/visitors/value"
            },
            // validation Keywords for Numeric Instances (number and integer)
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
            // validation Keywords for Strings
            maxLength: {
              $ref: "#/visitors/value"
            },
            minLength: {
              $ref: "#/visitors/value"
            },
            pattern: {
              $ref: "#/visitors/value"
            },
            // validation Keywords for Arrays
            maxItems: {
              $ref: "#/visitors/value"
            },
            minItems: {
              $ref: "#/visitors/value"
            },
            uniqueItems: {
              $ref: "#/visitors/value"
            },
            maxContains: {
              $ref: "#/visitors/value"
            },
            minContains: {
              $ref: "#/visitors/value"
            },
            // validation Keywords for Objects
            maxProperties: {
              $ref: "#/visitors/value"
            },
            minProperties: {
              $ref: "#/visitors/value"
            },
            required: {
              $ref: "#/visitors/value"
            },
            dependentRequired: sB,
            // basic Meta-Data Annotations vocabulary
            title: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            },
            default: {
              $ref: "#/visitors/value"
            },
            deprecated: {
              $ref: "#/visitors/value"
            },
            readOnly: {
              $ref: "#/visitors/value"
            },
            writeOnly: {
              $ref: "#/visitors/value"
            },
            examples: iB,
            // semantic Content With "format" vocabulary
            format: {
              $ref: "#/visitors/value"
            },
            // contents of String-Encoded Data vocabulary
            contentEncoding: {
              $ref: "#/visitors/value"
            },
            contentMediaType: {
              $ref: "#/visitors/value"
            },
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
          $visitor: aB,
          fixedFields: {
            propertyName: x.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: x.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: lB,
          fixedFields: {
            name: x.visitors.document.objects.XML.fixedFields.name,
            namespace: x.visitors.document.objects.XML.fixedFields.namespace,
            prefix: x.visitors.document.objects.XML.fixedFields.prefix,
            attribute: x.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: x.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: RB,
          fixedFields: {
            type: x.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: x.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: x.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: x.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: x.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: x.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: x.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: MB,
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
          $visitor: kB,
          fixedFields: {
            authorizationUrl: x.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: x.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: x.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: x.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: M3
        }
      },
      extension: {
        $visitor: x.visitors.document.extension.$visitor
      }
    }
  }
}, LB = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = uf(t), s = ea(NB), i = He(e, s), o = new i({
    specObj: s
  });
  return Ie(n, o), gn(o.element, r, {
    toolboxCreator: Lg,
    visitorOptions: {
      keyMap: vt,
      nodeTypeGetter: it
    }
  });
}, Z = (t) => (e, r = {}) => LB(e, {
  specPath: t,
  ...r
});
ya.refract = Z(["visitors", "document", "objects", "Callback", "$visitor"]);
ga.refract = Z(["visitors", "document", "objects", "Components", "$visitor"]);
ba.refract = Z(["visitors", "document", "objects", "Contact", "$visitor"]);
xa.refract = Z(["visitors", "document", "objects", "Example", "$visitor"]);
_f.refract = Z(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Cf.refract = Z(["visitors", "document", "objects", "Encoding", "$visitor"]);
wa.refract = Z(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Ea.refract = Z(["visitors", "document", "objects", "Header", "$visitor"]);
$a.refract = Z(["visitors", "document", "objects", "Info", "$visitor"]);
br.refract = Z(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
Oa.refract = Z(["visitors", "document", "objects", "License", "$visitor"]);
Sa.refract = Z(["visitors", "document", "objects", "Link", "$visitor"]);
Aa.refract = Z(["visitors", "document", "objects", "MediaType", "$visitor"]);
Rf.refract = Z(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
If.refract = Z(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Mf.refract = Z(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
ir.refract = Z(["visitors", "document", "objects", "OpenApi", "$visitor"]);
Fs.refract = Z(["visitors", "document", "objects", "Operation", "$visitor"]);
Pa.refract = Z(["visitors", "document", "objects", "Parameter", "$visitor"]);
Zt.refract = Z(["visitors", "document", "objects", "PathItem", "$visitor"]);
ja.refract = Z(["visitors", "document", "objects", "Paths", "$visitor"]);
or.refract = Z(["visitors", "document", "objects", "Reference", "$visitor"]);
Ta.refract = Z(["visitors", "document", "objects", "RequestBody", "$visitor"]);
_a.refract = Z(["visitors", "document", "objects", "Response", "$visitor"]);
Ca.refract = Z(["visitors", "document", "objects", "Responses", "$visitor"]);
_r.refract = Z(["visitors", "document", "objects", "Schema", "$visitor"]);
Ra.refract = Z(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Ia.refract = Z(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
Ma.refract = Z(["visitors", "document", "objects", "Server", "$visitor"]);
Fa.refract = Z(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Ff.refract = Z(["visitors", "document", "objects", "Tag", "$visitor"]);
kf.refract = Z(["visitors", "document", "objects", "XML", "$visitor"]);
class VB extends fs {
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
      const r = unescape(encodeURIComponent(e.toString())), n = btoa(r), s = new at();
      if (n.length !== 0) {
        const i = new _t(n);
        i.classes.push("result"), s.push(i);
      }
      return s;
    } catch (r) {
      throw new Rt(`Error parsing "${e.uri}"`, {
        cause: r
      });
    }
  }
}
class BB extends GD {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canResolve(e, r) {
    const n = r.dereference.strategies.find((s) => s.name === "openapi-3-1");
    return n === void 0 ? !1 : n.canDereference(e, r);
  }
  async resolve(e, r) {
    const n = r.dereference.strategies.find((o) => o.name === "openapi-3-1");
    if (n === void 0)
      throw new sg('"openapi-3-1" dereference strategy is not available.');
    const s = new rn(), i = sy(r, {
      resolve: {
        internal: !1
      },
      dereference: {
        refSet: s
      }
    });
    return await n.dereference(e, i), s;
  }
}
const {
  AbortController: UB,
  AbortSignal: HB
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = UB);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = HB);
class Vg extends zD {
  constructor({
    swaggerHTTPClient: r = Yr,
    swaggerHTTPClientConfig: n = {},
    ...s
  } = {}) {
    super({
      ...s,
      name: "http-swagger-client"
    });
    b(this, "swaggerHTTPClient", Yr);
    b(this, "swaggerHTTPClientConfig");
    this.swaggerHTTPClient = r, this.swaggerHTTPClientConfig = n;
  }
  getHttpClient() {
    return this.swaggerHTTPClient;
  }
  async read(r) {
    const n = this.getHttpClient(), s = new AbortController(), {
      signal: i
    } = s, o = setTimeout(() => {
      s.abort();
    }, this.timeout), a = this.getHttpClient().withCredentials || this.withCredentials ? "include" : "same-origin", c = this.redirects === 0 ? "error" : "follow", l = this.redirects > 0 ? this.redirects : void 0;
    try {
      return (await n({
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
      throw new iy(`Error downloading "${r.uri}"`, {
        cause: p
      });
    } finally {
      clearTimeout(o);
    }
  }
}
class Bg extends fs {
  constructor(e = {}) {
    super({
      name: "json-swagger-client",
      mediaTypes: ["application/json"],
      ...e
    });
  }
  async canParse(e) {
    const r = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), n = this.mediaTypes.includes(e.mediaType);
    if (!r) return !1;
    if (n) return !0;
    if (!n)
      try {
        return JSON.parse(e.toString()), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new Rt("json-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new at(), n = e.toString();
    if (this.allowEmpty && n.trim() === "")
      return r;
    try {
      const s = ng(JSON.parse(n));
      return s.classes.push("result"), r.push(s), r;
    } catch (s) {
      throw new Rt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class Ug extends fs {
  constructor(e = {}) {
    super({
      name: "yaml-1-2-swagger-client",
      mediaTypes: ["text/yaml", "application/yaml"],
      ...e
    });
  }
  async canParse(e) {
    const r = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), n = this.mediaTypes.includes(e.mediaType);
    if (!r) return !1;
    if (n) return !0;
    if (!n)
      try {
        return Wr.load(e.toString(), {
          schema: ci
        }), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new Rt("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new at(), n = e.toString();
    try {
      const s = Wr.load(n, {
        schema: ci
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = ng(s);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new Rt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class Hg extends fs {
  constructor(r = {}) {
    super({
      name: "openapi-json-3-1-swagger-client",
      mediaTypes: new Af(...sn.filterByFormat("generic"), ...sn.filterByFormat("json")),
      ...r
    });
    b(this, "detectionRegExp", /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/);
  }
  async canParse(r) {
    const n = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(r.extension), s = this.mediaTypes.includes(r.mediaType);
    if (!n) return !1;
    if (s) return !0;
    if (!s)
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
      throw new Rt("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new at(), s = r.toString();
    if (this.allowEmpty && s.trim() === "")
      return n;
    try {
      const i = JSON.parse(s), o = ir.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new Rt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
class qg extends fs {
  constructor(r = {}) {
    super({
      name: "openapi-yaml-3-1-swagger-client",
      mediaTypes: new Af(...sn.filterByFormat("generic"), ...sn.filterByFormat("yaml")),
      ...r
    });
    b(this, "detectionRegExp", /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m);
  }
  async canParse(r) {
    const n = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(r.extension), s = this.mediaTypes.includes(r.mediaType);
    if (!n) return !1;
    if (s) return !0;
    if (!s)
      try {
        const i = r.toString();
        return Wr.load(i), this.detectionRegExp.test(i);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(r) {
    if (this.sourceMap)
      throw new Rt("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new at(), s = r.toString();
    try {
      const i = Wr.load(s, {
        schema: ci
      });
      if (this.allowEmpty && typeof i > "u")
        return n;
      const o = ir.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new Rt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
const ka = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), an = (t) => {
  const e = rf(t);
  return Qu("#", e);
}, qB = (t) => {
  if (!ka(t))
    throw new YD(t);
  return t;
}, Lf = (t, e) => {
  const r = qB(t), n = Zy((s) => It(s) && O(s.$anchor) === r, e);
  if (nr(n))
    throw new JD(`Evaluation failed on token: "${r}"`);
  return n;
}, zg = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = rf(O(e.$ref)), n = O(e.meta.get("inherited$id"));
  return `${Sr((i, o) => Oe(i, is(ie(o))), t, [...n, O(e.$ref)])}${r === "#" ? "" : r}`;
}, zB = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = O(e.meta.get("inherited$id"));
  return Sr((n, s) => Oe(n, is(ie(s))), t, [...r, O(e.$id)]);
}, Cn = (t) => {
  if (Cn.cache.has(t))
    return Cn.cache.get(t);
  const e = _r.refract(t);
  return Cn.cache.set(t, e), e;
};
Cn.cache = /* @__PURE__ */ new WeakMap();
const Ce = (t) => vr(t) ? Cn(t) : t, Da = (t, e) => {
  const {
    cache: r
  } = Da, n = ie(t), s = (c) => It(c) && typeof c.$id < "u";
  if (!r.has(e)) {
    const c = TD(s, e);
    r.set(e, Array.from(c));
  }
  const i = r.get(e).find((c) => zB(n, c) === n);
  if (nr(i))
    throw new yf(`Evaluation failed on URI: "${t}"`);
  let o, a;
  return ka(an(t)) ? (o = Lf, a = an(t)) : (o = st, a = Ye(t)), o(a, i);
};
Da.cache = /* @__PURE__ */ new WeakMap();
const Ac = Ie[Symbol.for("nodejs.util.promisify.custom")], Ae = new mf(), pt = (t, e, r, n) => {
  ut(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class Kr {
  constructor({
    reference: e,
    namespace: r,
    options: n,
    indirections: s = [],
    ancestors: i = new Ec(),
    refractCache: o = /* @__PURE__ */ new Map()
  }) {
    b(this, "indirections");
    b(this, "namespace");
    b(this, "reference");
    b(this, "options");
    b(this, "ancestors");
    b(this, "refractCache");
    this.indirections = s, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new Ec(...i), this.refractCache = o;
  }
  toBaseURI(e) {
    return Oe(this.reference.uri, is(ie(e)));
  }
  async toReference(e) {
    if (this.reference.depth >= this.options.resolve.maxDepth)
      throw new XD(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    const r = this.toBaseURI(e), {
      refSet: n
    } = this.reference;
    if (n.has(r))
      return n.find(Uv(r, "uri"));
    const s = await ST(nt(r), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: "text/plain"
      }
    }), i = new jt({
      uri: r,
      value: M(s),
      depth: this.reference.depth + 1
    });
    if (n.add(i), this.options.dereference.immutable) {
      const o = new jt({
        uri: `immutable://${r}`,
        value: s,
        depth: this.reference.depth + 1
      });
      n.add(o);
    }
    return i;
  }
  toAncestorLineage(e) {
    const r = new Set(e.filter(ve));
    return [new Ec(...this.ancestors, r), r];
  }
  async ReferenceElement(e, r, n, s, i, o) {
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), l = this.toBaseURI(O(e.$ref)), p = ie(this.reference.uri) === l, f = !p;
    if (!this.options.resolve.internal && p || !this.options.resolve.external && f)
      return !1;
    const d = await this.toReference(O(e.$ref)), u = Oe(l, O(e.$ref));
    this.indirections.push(e);
    const m = Ye(u);
    let h = st(m, d.value.result);
    if (h.id = Ae.identify(h), vr(h)) {
      const R = O(e.meta.get("referenced-element")), S = `${R}-${O(Ae.identify(h))}`;
      this.refractCache.has(S) ? h = this.refractCache.get(S) : ue(h) ? (h = or.refract(h), h.setMetaProperty("referenced-element", R), this.refractCache.set(S, h)) : (h = this.namespace.getElementClass(R).refract(h), this.refractCache.set(S, h));
    }
    if (e === h)
      throw new he("Recursive Reference Object detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new zr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(h)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new he("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var y, g;
        const R = new Pt(h.id, {
          type: "reference",
          uri: d.uri,
          $ref: O(e.$ref)
        }), C = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)(R);
        return o.replaceWith(C, pt), n ? !1 : C;
      }
    }
    const v = ie(d.refSet.rootRef.uri) !== d.uri, E = ["error", "replace"].includes(this.options.dereference.circular);
    if ((f || v || Cr(h) || E) && !a.includesCycle(h)) {
      c.add(e);
      const R = new Kr({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      h = await Ac(h, R, {
        keyMap: vt,
        nodeTypeGetter: it
      }), c.delete(e);
    }
    this.indirections.pop();
    const w = ke(h);
    return w.setMetaProperty("id", Ae.generateId()), w.setMetaProperty("ref-fields", {
      $ref: O(e.$ref),
      // @ts-ignore
      description: O(e.description),
      // @ts-ignore
      summary: O(e.summary)
    }), w.setMetaProperty("ref-origin", d.uri), w.setMetaProperty("ref-referencing-element-id", M(Ae.identify(e))), X(h) && X(w) && (e.hasKey("description") && "description" in h && (w.remove("description"), w.set("description", e.get("description"))), e.hasKey("summary") && "summary" in h && (w.remove("summary"), w.set("summary", e.get("summary")))), o.replaceWith(w, pt), n ? !1 : w;
  }
  async PathItemElement(e, r, n, s, i, o) {
    if (!W(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), l = this.toBaseURI(O(e.$ref)), p = ie(this.reference.uri) === l, f = !p;
    if (!this.options.resolve.internal && p || !this.options.resolve.external && f)
      return;
    const d = await this.toReference(O(e.$ref)), u = Oe(l, O(e.$ref));
    this.indirections.push(e);
    const m = Ye(u);
    let h = st(m, d.value.result);
    if (h.id = Ae.identify(h), vr(h)) {
      const w = `path-item-${O(Ae.identify(h))}`;
      this.refractCache.has(w) ? h = this.refractCache.get(w) : (h = Zt.refract(h), this.refractCache.set(w, h));
    }
    if (e === h)
      throw new he("Recursive Path Item Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new zr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(h)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new he("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var y, g;
        const w = new Pt(h.id, {
          type: "path-item",
          uri: d.uri,
          $ref: O(e.$ref)
        }), S = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)(w);
        return o.replaceWith(S, pt), n ? !1 : S;
      }
    }
    const v = ie(d.refSet.rootRef.uri) !== d.uri, E = ["error", "replace"].includes(this.options.dereference.circular);
    if ((f || v || xr(h) && W(h.$ref) || E) && !a.includesCycle(h)) {
      c.add(e);
      const w = new Kr({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      h = await Ac(h, w, {
        keyMap: vt,
        nodeTypeGetter: it
      }), c.delete(e);
    }
    if (this.indirections.pop(), xr(h)) {
      const w = new Zt([...h.content], M(h.meta), M(h.attributes));
      w.setMetaProperty("id", Ae.generateId()), e.forEach((R, S, C) => {
        w.remove(O(S)), w.content.push(C);
      }), w.remove("$ref"), w.setMetaProperty("ref-fields", {
        $ref: O(e.$ref)
      }), w.setMetaProperty("ref-origin", d.uri), w.setMetaProperty("ref-referencing-element-id", M(Ae.identify(e))), h = w;
    }
    return o.replaceWith(h, pt), n ? void 0 : h;
  }
  async LinkElement(e, r, n, s, i, o) {
    if (!W(e.operationRef) && !W(e.operationId))
      return;
    if (W(e.operationRef) && W(e.operationId))
      throw new he("LinkElement operationRef and operationId fields are mutually exclusive.");
    let a;
    if (W(e.operationRef)) {
      var c;
      const p = Ye(O(e.operationRef)), f = this.toBaseURI(O(e.operationRef)), d = ie(this.reference.uri) === f, u = !d;
      if (!this.options.resolve.internal && d || !this.options.resolve.external && u)
        return;
      const m = await this.toReference(O(e.operationRef));
      if (a = st(p, m.value.result), vr(a)) {
        const y = `operation-${O(Ae.identify(a))}`;
        this.refractCache.has(y) ? a = this.refractCache.get(y) : (a = Fs.refract(a), this.refractCache.set(y, a));
      }
      a = ke(a), a.setMetaProperty("ref-origin", m.uri);
      const h = ke(e);
      return (c = h.operationRef) === null || c === void 0 || c.meta.set("operation", a), o.replaceWith(h, pt), n ? void 0 : h;
    }
    if (W(e.operationId)) {
      var l;
      const p = O(e.operationId), f = await this.toReference(nt(this.reference.uri));
      if (a = Zy((u) => Ng(u) && ve(u.operationId) && u.operationId.equals(p), f.value.result), nr(a))
        throw new he(`OperationElement(operationId=${p}) not found.`);
      const d = ke(e);
      return (l = d.operationId) === null || l === void 0 || l.meta.set("operation", a), o.replaceWith(d, pt), n ? void 0 : d;
    }
  }
  async ExampleElement(e, r, n, s, i, o) {
    if (!W(e.externalValue))
      return;
    if (e.hasKey("value") && W(e.externalValue))
      throw new he("ExampleElement value and externalValue fields are mutually exclusive.");
    const a = this.toBaseURI(O(e.externalValue)), c = ie(this.reference.uri) === a, l = !c;
    if (!this.options.resolve.internal && c || !this.options.resolve.external && l)
      return;
    const p = await this.toReference(O(e.externalValue)), f = ke(p.value.result);
    f.setMetaProperty("ref-origin", p.uri);
    const d = ke(e);
    return d.value = f, o.replaceWith(d, pt), n ? void 0 : d;
  }
  async SchemaElement(e, r, n, s, i, o) {
    if (!W(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]);
    let l = await this.toReference(nt(this.reference.uri)), {
      uri: p
    } = l;
    const f = zg(p, e), d = ie(f), u = new Un({
      uri: d
    }), m = bj((C) => C.canRead(u), this.options.resolve.resolvers), h = !m;
    let y = ie(this.reference.uri) === f, g = !y;
    this.indirections.push(e);
    let v;
    try {
      if (m || h) {
        p = this.toBaseURI(f);
        const C = f, k = Ce(l.value.result);
        if (v = Da(C, k), v = Ce(v), v.id = Ae.identify(v), !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
      } else {
        if (p = this.toBaseURI(f), y = ie(this.reference.uri) === p, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
        l = await this.toReference(nt(f));
        const C = Ye(f), k = Ce(l.value.result);
        v = st(C, k), v = Ce(v), v.id = Ae.identify(v);
      }
    } catch (C) {
      if (h && C instanceof yf)
        if (ka(an(f))) {
          if (y = ie(this.reference.uri) === p, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          l = await this.toReference(nt(f));
          const k = an(f), A = Ce(l.value.result);
          v = Lf(k, A), v = Ce(v), v.id = Ae.identify(v);
        } else {
          if (p = this.toBaseURI(f), y = ie(this.reference.uri) === p, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          l = await this.toReference(nt(f));
          const k = Ye(f), A = Ce(l.value.result);
          v = st(k, A), v = Ce(v), v.id = Ae.identify(v);
        }
      else
        throw C;
    }
    if (e === v)
      throw new he("Recursive Schema Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new zr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(v)) {
      if (l.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new he("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var E, w;
        const C = new Pt(v.id, {
          type: "json-schema",
          uri: l.uri,
          $ref: O(e.$ref)
        }), A = ((E = (w = this.options.dereference.strategyOpts["openapi-3-1"]) === null || w === void 0 ? void 0 : w.circularReplacer) !== null && E !== void 0 ? E : this.options.dereference.circularReplacer)(C);
        return o.replaceWith(A, pt), n ? !1 : A;
      }
    }
    const R = ie(l.refSet.rootRef.uri) !== l.uri, S = ["error", "replace"].includes(this.options.dereference.circular);
    if ((g || R || It(v) && W(v.$ref) || S) && !a.includesCycle(v)) {
      c.add(e);
      const C = new Kr({
        reference: l,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      v = await Ac(v, C, {
        keyMap: vt,
        nodeTypeGetter: it
      }), c.delete(e);
    }
    if (this.indirections.pop(), Nf(v)) {
      const C = M(v);
      return C.setMetaProperty("id", Ae.generateId()), C.setMetaProperty("ref-fields", {
        $ref: O(e.$ref)
      }), C.setMetaProperty("ref-origin", l.uri), C.setMetaProperty("ref-referencing-element-id", M(Ae.identify(e))), o.replaceWith(C, pt), n ? !1 : C;
    }
    if (It(v)) {
      const C = new _r([...v.content], M(v.meta), M(v.attributes));
      C.setMetaProperty("id", Ae.generateId()), e.forEach((k, A, U) => {
        C.remove(O(A)), C.content.push(U);
      }), C.remove("$ref"), C.setMetaProperty("ref-fields", {
        $ref: O(e.$ref)
      }), C.setMetaProperty("ref-origin", l.uri), C.setMetaProperty("ref-referencing-element-id", M(Ae.identify(e))), v = C;
    }
    return o.replaceWith(v, pt), n ? void 0 : v;
  }
}
const GB = Ie[Symbol.for("nodejs.util.promisify.custom")];
class KB extends KD {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canDereference(e) {
    var r;
    return e.mediaType !== "text/plain" ? sn.includes(e.mediaType) : Dg((r = e.parseResult) === null || r === void 0 ? void 0 : r.result);
  }
  async dereference(e, r) {
    var n;
    const s = ls(Df), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new rn(), o = new rn();
    let a = i, c;
    i.has(e.uri) ? c = i.find(Uv(e.uri, "uri")) : (c = new jt({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((f) => new jt({
      ...f,
      value: M(f.value)
    })).forEach((f) => o.add(f)), c = o.find((f) => f.uri === e.uri), a = o);
    const l = new Kr({
      reference: c,
      namespace: s,
      options: r
    }), p = await GB(a.rootRef.value, l, {
      keyMap: vt,
      nodeTypeGetter: it
    });
    return r.dereference.immutable && o.refs.filter((f) => f.uri.startsWith("immutable://")).map((f) => new jt({
      ...f,
      uri: f.uri.replace(/^immutable:\/\//, "")
    })).forEach((f) => i.add(f)), r.dereference.refSet === null && i.clean(), o.clean(), p;
  }
}
const JB = (t) => t.slice(2), tt = (t) => {
  const e = JB(t);
  return e.reduce((r, n, s) => {
    if (ut(n)) {
      const i = String(O(n.key));
      r.push(i);
    } else if (Ne(e[s - 2])) {
      const i = e[s - 2].content.indexOf(n);
      r.push(i);
    }
    return r;
  }, []);
};
class WB {
  constructor({
    modelPropertyMacro: e,
    options: r
  }) {
    b(this, "modelPropertyMacro");
    b(this, "options");
    b(this, "SchemaElement", {
      leave: (e, r, n, s, i) => {
        typeof e.properties > "u" || X(e.properties) && e.properties.forEach((o) => {
          if (X(o))
            try {
              const l = this.modelPropertyMacro(O(o));
              o.set("default", l);
            } catch (l) {
              var a, c;
              const p = new Error(l, {
                cause: l
              });
              p.fullPath = [...tt([...i, n, e]), "properties"], (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, p);
            }
        });
      }
    });
    this.modelPropertyMacro = e, this.options = r;
  }
}
class YB {
  constructor({
    options: e
  }) {
    b(this, "options");
    b(this, "SchemaElement", {
      leave(e, r, n, s, i) {
        if (typeof e.allOf > "u") return;
        if (!Ne(e.allOf)) {
          var o, a;
          const f = new TypeError("allOf must be an array");
          f.fullPath = [...tt([...i, n, e]), "allOf"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, f);
          return;
        }
        if (e.allOf.isEmpty) {
          e.remove("allOf");
          return;
        }
        if (!e.allOf.content.every(It)) {
          var l, p;
          const f = new TypeError("Elements in allOf must be objects");
          f.fullPath = [...tt([...i, n, e]), "allOf"], (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (p = l.push) === null || p === void 0 || p.call(l, f);
          return;
        }
        for (; e.hasKey("allOf"); ) {
          const {
            allOf: f
          } = e;
          e.remove("allOf");
          const d = yt.all([...f.content, e]);
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
var pr;
class XB {
  constructor({
    parameterMacro: e,
    options: r
  }) {
    b(this, "parameterMacro");
    b(this, "options");
    Hf(this, pr);
    b(this, "OperationElement", {
      enter: (e) => {
        Ba(this, pr, e);
      },
      leave: () => {
        Ba(this, pr, void 0);
      }
    });
    b(this, "ParameterElement", {
      leave: (e, r, n, s, i) => {
        const o = Va(this, pr) ? O(Va(this, pr)) : null, a = O(e);
        try {
          const p = this.parameterMacro(o, a);
          e.set("default", p);
        } catch (p) {
          var c, l;
          const f = new Error(p, {
            cause: p
          });
          f.fullPath = tt([...i, n]), (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (l = c.push) === null || l === void 0 || l.call(c, f);
        }
      }
    });
    this.parameterMacro = e, this.options = r;
  }
}
pr = new WeakMap();
const Gs = (t) => {
  if (t.cause == null) return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
};
class QB extends ot {
}
const {
  wrapError: Pc
} = bf, jc = Ie[Symbol.for("nodejs.util.promisify.custom")], We = new mf(), ar = (t, e, r, n) => {
  ut(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class Rn extends Kr {
  constructor({
    allowMetaPatches: r = !0,
    useCircularStructures: n = !1,
    basePath: s = null,
    ...i
  }) {
    super(i);
    b(this, "useCircularStructures");
    b(this, "allowMetaPatches");
    b(this, "basePath");
    this.allowMetaPatches = r, this.useCircularStructures = n, this.basePath = s;
  }
  async ReferenceElement(r, n, s, i, o, a) {
    try {
      if (this.indirections.includes(r))
        return !1;
      const [m, h] = this.toAncestorLineage([...o, s]), y = this.toBaseURI(O(r.$ref)), g = ie(this.reference.uri) === y, v = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && v)
        return !1;
      const E = await this.toReference(O(r.$ref)), w = Oe(y, O(r.$ref));
      this.indirections.push(r);
      const R = Ye(w);
      let S = st(R, E.value.result);
      if (S.id = We.identify(S), vr(S)) {
        const U = O(r.meta.get("referenced-element")), P = `${U}-${O(We.identify(S))}`;
        this.refractCache.has(P) ? S = this.refractCache.get(P) : ue(S) ? (S = or.refract(S), S.setMetaProperty("referenced-element", U), this.refractCache.set(P, S)) : (S = this.namespace.getElementClass(U).refract(S), this.refractCache.set(P, S));
      }
      if (r === S)
        throw new he("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new zr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(S)) {
        if (E.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new he("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const U = new Pt(S.id, {
            type: "reference",
            uri: E.uri,
            $ref: O(r.$ref),
            baseURI: w,
            referencingElement: r
          }), $ = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(U);
          return a.replaceWith(U, ar), s ? !1 : $;
        }
      }
      const C = ie(E.refSet.rootRef.uri) !== E.uri, k = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || C || Cr(S) || k) && !m.includesCycle(S)) {
        var p;
        h.add(r);
        const U = new Rn({
          reference: E,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (p = this.basePath) !== null && p !== void 0 ? p : [...tt([...o, s, r]), "$ref"]
        });
        S = await jc(S, U, {
          keyMap: vt,
          nodeTypeGetter: it
        }), h.delete(r);
      }
      this.indirections.pop();
      const A = ke(S);
      if (A.setMetaProperty("ref-fields", {
        $ref: O(r.$ref),
        description: O(r.description),
        summary: O(r.summary)
      }), A.setMetaProperty("ref-origin", E.uri), A.setMetaProperty("ref-referencing-element-id", M(We.identify(r))), X(S) && (r.hasKey("description") && "description" in S && (A.remove("description"), A.set("description", r.get("description"))), r.hasKey("summary") && "summary" in S && (A.remove("summary"), A.set("summary", r.get("summary")))), this.allowMetaPatches && X(A) && !A.hasKey("$$ref")) {
        const U = Oe(y, w);
        A.set("$$ref", U);
      }
      return a.replaceWith(A, ar), s ? !1 : A;
    } catch (m) {
      var f, d, u;
      const h = Gs(m), y = Pc(h, {
        baseDoc: this.reference.uri,
        $ref: O(r.$ref),
        pointer: Ye(O(r.$ref)),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...tt([...o, s, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (u = d.push) === null || u === void 0 || u.call(d, y);
      return;
    }
  }
  async PathItemElement(r, n, s, i, o, a) {
    try {
      if (!W(r.$ref))
        return;
      if (this.indirections.includes(r) || Xo(["cycle"], r.$ref))
        return !1;
      const [m, h] = this.toAncestorLineage([...o, s]), y = this.toBaseURI(O(r.$ref)), g = ie(this.reference.uri) === y, v = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && v)
        return;
      const E = await this.toReference(O(r.$ref)), w = Oe(y, O(r.$ref));
      this.indirections.push(r);
      const R = Ye(w);
      let S = st(R, E.value.result);
      if (S.id = We.identify(S), vr(S)) {
        const A = `path-item-${O(We.identify(S))}`;
        this.refractCache.has(A) ? S = this.refractCache.get(A) : (S = Zt.refract(S), this.refractCache.set(A, S));
      }
      if (r === S)
        throw new he("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new zr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(S)) {
        if (E.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new he("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const A = new Pt(S.id, {
            type: "path-item",
            uri: E.uri,
            $ref: O(r.$ref),
            baseURI: w,
            referencingElement: r
          }), P = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(A);
          return a.replaceWith(A, ar), s ? !1 : P;
        }
      }
      const C = ie(E.refSet.rootRef.uri) !== E.uri, k = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || C || xr(S) && W(S.$ref) || k) && !m.includesCycle(S)) {
        var p;
        h.add(r);
        const A = new Rn({
          reference: E,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (p = this.basePath) !== null && p !== void 0 ? p : [...tt([...o, s, r]), "$ref"]
        });
        S = await jc(S, A, {
          keyMap: vt,
          nodeTypeGetter: it
        }), h.delete(r);
      }
      if (this.indirections.pop(), xr(S)) {
        const A = new Zt([...S.content], M(S.meta), M(S.attributes));
        if (r.forEach((U, P, $) => {
          A.remove(O(P)), A.content.push($);
        }), A.remove("$ref"), A.setMetaProperty("ref-fields", {
          $ref: O(r.$ref)
        }), A.setMetaProperty("ref-origin", E.uri), A.setMetaProperty("ref-referencing-element-id", M(We.identify(r))), this.allowMetaPatches && typeof A.get("$$ref") > "u") {
          const U = Oe(y, w);
          A.set("$$ref", U);
        }
        S = A;
      }
      return a.replaceWith(S, ar), s ? void 0 : S;
    } catch (m) {
      var f, d, u;
      const h = Gs(m), y = Pc(h, {
        baseDoc: this.reference.uri,
        $ref: O(r.$ref),
        pointer: Ye(O(r.$ref)),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...tt([...o, s, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (u = d.push) === null || u === void 0 || u.call(d, y);
      return;
    }
  }
  async SchemaElement(r, n, s, i, o, a) {
    try {
      if (!W(r.$ref))
        return;
      if (this.indirections.includes(r))
        return !1;
      const [m, h] = this.toAncestorLineage([...o, s]);
      let y = await this.toReference(nt(this.reference.uri)), {
        uri: g
      } = y;
      const v = zg(g, r), E = ie(v), w = new Un({
        uri: E
      }), R = !this.options.resolve.resolvers.some(($) => $.canRead(w)), S = !R;
      let C = ie(this.reference.uri) === v, k = !C;
      this.indirections.push(r);
      let A;
      try {
        if (R || S) {
          g = this.toBaseURI(v);
          const $ = v, D = Ce(y.value.result);
          if (A = Da($, D), A = Ce(A), A.id = We.identify(A), !this.options.resolve.internal && C || !this.options.resolve.external && k)
            return;
        } else {
          if (g = this.toBaseURI(v), C = ie(this.reference.uri) === g, k = !C, !this.options.resolve.internal && C || !this.options.resolve.external && k)
            return;
          y = await this.toReference(nt(v));
          const $ = Ye(v), D = Ce(y.value.result);
          A = st($, D), A = Ce(A), A.id = We.identify(A);
        }
      } catch ($) {
        if (S && $ instanceof yf)
          if (ka(an(v))) {
            if (C = ie(this.reference.uri) === g, k = !C, !this.options.resolve.internal && C || !this.options.resolve.external && k)
              return;
            y = await this.toReference(nt(v));
            const D = an(v), N = Ce(y.value.result);
            A = Lf(D, N), A = Ce(A), A.id = We.identify(A);
          } else {
            if (g = this.toBaseURI(O(v)), C = ie(this.reference.uri) === g, k = !C, !this.options.resolve.internal && C || !this.options.resolve.external && k)
              return;
            y = await this.toReference(nt(v));
            const D = Ye(v), N = Ce(y.value.result);
            A = st(D, N), A = Ce(A), A.id = We.identify(A);
          }
        else
          throw $;
      }
      if (r === A)
        throw new he("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new zr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(A)) {
        if (y.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new he("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const $ = new Pt(A.id, {
            type: "json-schema",
            uri: y.uri,
            $ref: O(r.$ref),
            baseURI: Oe(g, v),
            referencingElement: r
          }), N = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)($);
          return a.replaceWith(N, ar), s ? !1 : N;
        }
      }
      const U = ie(y.refSet.rootRef.uri) !== y.uri, P = ["error", "replace"].includes(this.options.dereference.circular);
      if ((k || U || It(A) && W(A.$ref) || P) && !m.includesCycle(A)) {
        var p;
        h.add(r);
        const $ = new Rn({
          reference: y,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: m,
          basePath: (p = this.basePath) !== null && p !== void 0 ? p : [...tt([...o, s, r]), "$ref"]
        });
        A = await jc(A, $, {
          keyMap: vt,
          nodeTypeGetter: it
        }), h.delete(r);
      }
      if (this.indirections.pop(), Nf(A)) {
        const $ = M(A);
        return $.setMetaProperty("ref-fields", {
          $ref: O(r.$ref)
        }), $.setMetaProperty("ref-origin", y.uri), $.setMetaProperty("ref-referencing-element-id", M(We.identify(r))), a.replaceWith($, ar), s ? !1 : $;
      }
      if (It(A)) {
        const $ = new _r([...A.content], M(A.meta), M(A.attributes));
        if (r.forEach((D, N, se) => {
          $.remove(O(N)), $.content.push(se);
        }), $.remove("$ref"), $.setMetaProperty("ref-fields", {
          $ref: O(r.$ref)
        }), $.setMetaProperty("ref-origin", y.uri), $.setMetaProperty("ref-referencing-element-id", M(We.identify(r))), this.allowMetaPatches && typeof $.get("$$ref") > "u") {
          const D = Oe(g, v);
          $.set("$$ref", D);
        }
        A = $;
      }
      return a.replaceWith(A, ar), s ? void 0 : A;
    } catch (m) {
      var f, d, u;
      const h = Gs(m), y = new QB(`Could not resolve reference: ${h.message}`, {
        baseDoc: this.reference.uri,
        $ref: O(r.$ref),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...tt([...o, s, r]), "$ref"],
        cause: h
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (u = d.push) === null || u === void 0 || u.call(d, y);
      return;
    }
  }
  // eslint-disable-next-line class-methods-use-this
  async LinkElement() {
  }
  async ExampleElement(r, n, s, i, o, a) {
    try {
      return await super.ExampleElement(r, n, s, i, o, a);
    } catch (f) {
      var c, l, p;
      const d = Gs(f), u = Pc(d, {
        baseDoc: this.reference.uri,
        externalValue: O(r.externalValue),
        fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...tt([...o, s, r]), "externalValue"]
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (p = l.push) === null || p === void 0 || p.call(l, u);
      return;
    }
  }
}
const ZB = Zo[Symbol.for("nodejs.util.promisify.custom")];
class eU {
  constructor({
    parameterMacro: e,
    modelPropertyMacro: r,
    mode: n,
    options: s,
    ...i
  }) {
    const o = [];
    o.push(new Rn({
      ...i,
      options: s
    })), typeof r == "function" && o.push(new WB({
      modelPropertyMacro: r,
      options: s
    })), n !== "strict" && o.push(new YB({
      options: s
    })), typeof e == "function" && o.push(new XB({
      parameterMacro: e,
      options: s
    }));
    const a = ZB(o, {
      nodeTypeGetter: it
    });
    Object.assign(this, a);
  }
}
const tU = Ie[Symbol.for("nodejs.util.promisify.custom")];
class Gg extends KB {
  constructor({
    allowMetaPatches: r = !1,
    parameterMacro: n = null,
    modelPropertyMacro: s = null,
    mode: i = "non-strict",
    ancestors: o = [],
    ...a
  } = {}) {
    super({
      ...a
    });
    b(this, "allowMetaPatches");
    b(this, "parameterMacro");
    b(this, "modelPropertyMacro");
    b(this, "mode");
    b(this, "ancestors");
    this.name = "openapi-3-1-swagger-client", this.allowMetaPatches = r, this.parameterMacro = n, this.modelPropertyMacro = s, this.mode = i, this.ancestors = [...o];
  }
  async dereference(r, n) {
    var s;
    const i = ls(Df), o = (s = n.dereference.refSet) !== null && s !== void 0 ? s : new rn(), a = new rn();
    let c = o, l;
    o.has(r.uri) ? l = o.find((d) => d.uri === r.uri) : (l = new jt({
      uri: r.uri,
      value: r.parseResult
    }), o.add(l)), n.dereference.immutable && (o.refs.map((d) => new jt({
      ...d,
      value: M(d.value)
    })).forEach((d) => a.add(d)), l = a.find((d) => d.uri === r.uri), c = a);
    const p = new eU({
      reference: l,
      namespace: i,
      options: n,
      allowMetaPatches: this.allowMetaPatches,
      ancestors: this.ancestors,
      modelPropertyMacro: this.modelPropertyMacro,
      mode: this.mode,
      parameterMacro: this.parameterMacro
    }), f = await tU(c.rootRef.value, p, {
      keyMap: vt,
      nodeTypeGetter: it
    });
    return n.dereference.immutable && a.refs.filter((d) => d.uri.startsWith("immutable://")).map((d) => new jt({
      ...d,
      uri: d.uri.replace(/^immutable:\/\//, "")
    })).forEach((d) => o.add(d)), n.dereference.refSet === null && o.clean(), a.clean(), f;
  }
}
const rU = (t) => {
  const e = O(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
  return new I({
    $ref: e
  }, M(r.meta), M(r.attributes));
}, Na = async (t) => {
  const {
    spec: e,
    timeout: r,
    redirects: n,
    requestInterceptor: s,
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
    } = Na, h = u.find((se) => se.match(e)), y = Vo($i()) ? $i() : ri, g = cu(t), v = Oe(y, g);
    let E;
    m.has(e) ? E = m.get(e) : (E = ir.refract(e), E.classes.push("result"), m.set(e, E));
    const w = new at([E]), R = Pg(o), S = R === "" ? "" : `#${R}`, C = st(R, E), k = new jt({
      uri: v,
      value: w
    }), A = new rn({
      refs: [k]
    });
    R !== "" && (A.rootRef = void 0);
    const U = [/* @__PURE__ */ new Set([C])], P = [], $ = await QD(C, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${v}${S}`,
        resolvers: [new Vg({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [new BB()]
      },
      parse: {
        mediaType: sn.latest(),
        parsers: [new Hg({
          allowEmpty: !1,
          sourceMap: !1
        }), new qg({
          allowEmpty: !1,
          sourceMap: !1
        }), new Bg({
          allowEmpty: !1,
          sourceMap: !1
        }), new Ug({
          allowEmpty: !1,
          sourceMap: !1
        }), new VB({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [new Gg({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: p,
          modelPropertyMacro: f,
          mode: d,
          ancestors: U
        })],
        refSet: A,
        dereferenceOpts: {
          errors: P
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? ny.dereference.circularReplacer : rU
      }
    }), D = DD(C, $, E), N = l ? D : h.normalize(D);
    return {
      spec: O(N),
      errors: P
    };
  } catch (m) {
    if (m instanceof ml || m instanceof jn)
      return {
        spec: null,
        errors: []
      };
    throw m;
  }
};
Na.cache = /* @__PURE__ */ new WeakMap();
const vd = (t) => {
  if (!X(t)) return t;
  const e = [qV({
    operationIdNormalizer: (n, s, i) => ps({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), VV(), BV(), zV(), GV()];
  return gn(t, e, {
    toolboxCreator: Lg,
    visitorOptions: {
      keyMap: vt,
      nodeTypeGetter: it
    }
  });
}, nU = (t) => (e) => {
  const r = ir.refract(e);
  r.classes.push("result");
  const n = t(r), s = O(n);
  return Na.cache.set(s, n), O(n);
}, sU = {
  name: "openapi-3-1-apidom",
  match(t) {
    return $f(t);
  },
  normalize(t) {
    if (!ve(t) && gr(t) && !t.$$normalized) {
      const e = nU(vd)(t);
      return e.$$normalized = !0, e;
    }
    return ve(t) ? vd(t) : t;
  },
  async resolve(t) {
    return Na(t);
  }
};
function Kg(t, e, r) {
  if (!t || typeof t != "object" || !t.paths || typeof t.paths != "object")
    return null;
  const {
    paths: n
  } = t;
  for (const s in n)
    for (const i in n[s]) {
      if (i.toUpperCase() === "PARAMETERS")
        continue;
      const o = n[s][i];
      if (!o || typeof o != "object")
        continue;
      const a = {
        spec: t,
        pathName: s,
        method: i.toUpperCase(),
        operation: o
      }, c = e(a);
      if (r && c)
        return a;
    }
}
function iU(t, e) {
  return Kg(t, e, !0) || null;
}
function Jg(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function oU(t, e) {
  return !t || !t.paths ? null : iU(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = ps(s, r, n), a = Jg(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: aU
} = bT, cU = () => null, lU = (t) => Array.isArray(t) ? t : [t], yd = {
  mapTagOperations: pU,
  makeExecute: uU
};
function uU(t = {}) {
  return ({
    pathName: e,
    method: r,
    operationId: n
  }) => (s, i = {}) => {
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
      parameters: s,
      operationId: n,
      ...i
    });
  };
}
function fU(t = {}) {
  const e = yd.makeExecute(t);
  return {
    apis: yd.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function pU({
  spec: t,
  cb: e = cU,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return Kg(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? lU(c.tags) : [r]).forEach((p) => {
      if (typeof p != "string")
        return;
      i[p] = i[p] || {};
      const f = i[p], d = ps(c, o, a, {
        v2OperationIdCompatibilityMode: n
      }), u = e({
        spec: t,
        pathName: o,
        method: a,
        operation: c,
        operationId: d
      });
      if (s[d])
        s[d] += 1, f[`${d}${s[d]}`] = u;
      else if (typeof f[d] < "u") {
        const m = s[d] || 1;
        s[d] = m + 1, f[`${d}${s[d]}`] = u;
        const h = f[d];
        delete f[d], f[`${d}${m}`] = h;
      } else
        f[d] = u;
    });
  }), i;
}
var Vf = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
Vf.parse = bU;
Vf.serialize = xU;
var hU = Object.prototype.toString, dU = Object.prototype.hasOwnProperty, mU = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/, vU = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/, yU = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, gU = /^[\u0020-\u003A\u003D-\u007E]*$/;
function bU(t, e) {
  if (typeof t != "string")
    throw new TypeError("argument str must be a string");
  var r = {}, n = t.length;
  if (n < 2) return r;
  var s = e && e.decode || wU, i = 0, o = 0, a = 0;
  do {
    if (o = t.indexOf("=", i), o === -1) break;
    if (a = t.indexOf(";", i), a === -1)
      a = n;
    else if (o > a) {
      i = t.lastIndexOf(";", o - 1) + 1;
      continue;
    }
    var c = gd(t, i, o), l = bd(t, o, c), p = t.slice(c, l);
    if (!dU.call(r, p)) {
      var f = gd(t, o + 1, a), d = bd(t, a, f);
      t.charCodeAt(f) === 34 && t.charCodeAt(d - 1) === 34 && (f++, d--);
      var u = t.slice(f, d);
      r[p] = $U(u, s);
    }
    i = a + 1;
  } while (i < n);
  return r;
}
function gd(t, e, r) {
  do {
    var n = t.charCodeAt(e);
    if (n !== 32 && n !== 9) return e;
  } while (++e < r);
  return r;
}
function bd(t, e, r) {
  for (; e > r; ) {
    var n = t.charCodeAt(--e);
    if (n !== 32 && n !== 9) return e + 1;
  }
  return r;
}
function xU(t, e, r) {
  var n = r && r.encode || encodeURIComponent;
  if (typeof n != "function")
    throw new TypeError("option encode is invalid");
  if (!mU.test(t))
    throw new TypeError("argument name is invalid");
  var s = n(e);
  if (!vU.test(s))
    throw new TypeError("argument val is invalid");
  var i = t + "=" + s;
  if (!r) return i;
  if (r.maxAge != null) {
    var o = Math.floor(r.maxAge);
    if (!isFinite(o))
      throw new TypeError("option maxAge is invalid");
    i += "; Max-Age=" + o;
  }
  if (r.domain) {
    if (!yU.test(r.domain))
      throw new TypeError("option domain is invalid");
    i += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!gU.test(r.path))
      throw new TypeError("option path is invalid");
    i += "; Path=" + r.path;
  }
  if (r.expires) {
    var a = r.expires;
    if (!EU(a) || isNaN(a.valueOf()))
      throw new TypeError("option expires is invalid");
    i += "; Expires=" + a.toUTCString();
  }
  if (r.httpOnly && (i += "; HttpOnly"), r.secure && (i += "; Secure"), r.partitioned && (i += "; Partitioned"), r.priority) {
    var c = typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority;
    switch (c) {
      case "low":
        i += "; Priority=Low";
        break;
      case "medium":
        i += "; Priority=Medium";
        break;
      case "high":
        i += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (r.sameSite) {
    var l = typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
    switch (l) {
      case !0:
        i += "; SameSite=Strict";
        break;
      case "lax":
        i += "; SameSite=Lax";
        break;
      case "strict":
        i += "; SameSite=Strict";
        break;
      case "none":
        i += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return i;
}
function wU(t) {
  return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
}
function EU(t) {
  return hU.call(t) === "[object Date]";
}
function $U(t, e) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
function OU() {
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
    name: "ALPHA",
    lower: "alpha",
    index: 4,
    isBkr: !1
  }, this.rules[5] = {
    name: "DIGIT",
    lower: "digit",
    index: 5,
    isBkr: !1
  }, this.rules[6] = {
    name: "HEXDIG",
    lower: "hexdig",
    index: 6,
    isBkr: !1
  }, this.rules[7] = {
    name: "pct-encoded",
    lower: "pct-encoded",
    index: 7,
    isBkr: !1
  }, this.rules[8] = {
    name: "unreserved",
    lower: "unreserved",
    index: 8,
    isBkr: !1
  }, this.rules[9] = {
    name: "sub-delims",
    lower: "sub-delims",
    index: 9,
    isBkr: !1
  }, this.rules[10] = {
    name: "ucschar",
    lower: "ucschar",
    index: 10,
    isBkr: !1
  }, this.rules[11] = {
    name: "iprivate",
    lower: "iprivate",
    index: 11,
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
    children: [2, 3, 4, 5, 6]
  }, this.rules[2].opcodes[2] = {
    type: 4,
    index: 8
  }, this.rules[2].opcodes[3] = {
    type: 4,
    index: 7
  }, this.rules[2].opcodes[4] = {
    type: 4,
    index: 9
  }, this.rules[2].opcodes[5] = {
    type: 7,
    string: [58]
  }, this.rules[2].opcodes[6] = {
    type: 7,
    string: [64]
  }, this.rules[3].opcodes = [], this.rules[3].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[3].opcodes[1] = {
    type: 1,
    children: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  }, this.rules[3].opcodes[2] = {
    type: 6,
    string: [33]
  }, this.rules[3].opcodes[3] = {
    type: 5,
    min: 35,
    max: 36
  }, this.rules[3].opcodes[4] = {
    type: 6,
    string: [38]
  }, this.rules[3].opcodes[5] = {
    type: 5,
    min: 40,
    max: 59
  }, this.rules[3].opcodes[6] = {
    type: 6,
    string: [61]
  }, this.rules[3].opcodes[7] = {
    type: 5,
    min: 63,
    max: 91
  }, this.rules[3].opcodes[8] = {
    type: 6,
    string: [93]
  }, this.rules[3].opcodes[9] = {
    type: 6,
    string: [95]
  }, this.rules[3].opcodes[10] = {
    type: 5,
    min: 97,
    max: 122
  }, this.rules[3].opcodes[11] = {
    type: 6,
    string: [126]
  }, this.rules[3].opcodes[12] = {
    type: 4,
    index: 10
  }, this.rules[3].opcodes[13] = {
    type: 4,
    index: 11
  }, this.rules[3].opcodes[14] = {
    type: 4,
    index: 7
  }, this.rules[4].opcodes = [], this.rules[4].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }, this.rules[4].opcodes[1] = {
    type: 5,
    min: 65,
    max: 90
  }, this.rules[4].opcodes[2] = {
    type: 5,
    min: 97,
    max: 122
  }, this.rules[5].opcodes = [], this.rules[5].opcodes[0] = {
    type: 5,
    min: 48,
    max: 57
  }, this.rules[6].opcodes = [], this.rules[6].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7]
  }, this.rules[6].opcodes[1] = {
    type: 4,
    index: 5
  }, this.rules[6].opcodes[2] = {
    type: 7,
    string: [97]
  }, this.rules[6].opcodes[3] = {
    type: 7,
    string: [98]
  }, this.rules[6].opcodes[4] = {
    type: 7,
    string: [99]
  }, this.rules[6].opcodes[5] = {
    type: 7,
    string: [100]
  }, this.rules[6].opcodes[6] = {
    type: 7,
    string: [101]
  }, this.rules[6].opcodes[7] = {
    type: 7,
    string: [102]
  }, this.rules[7].opcodes = [], this.rules[7].opcodes[0] = {
    type: 2,
    children: [1, 2, 3]
  }, this.rules[7].opcodes[1] = {
    type: 7,
    string: [37]
  }, this.rules[7].opcodes[2] = {
    type: 4,
    index: 6
  }, this.rules[7].opcodes[3] = {
    type: 4,
    index: 6
  }, this.rules[8].opcodes = [], this.rules[8].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6]
  }, this.rules[8].opcodes[1] = {
    type: 4,
    index: 4
  }, this.rules[8].opcodes[2] = {
    type: 4,
    index: 5
  }, this.rules[8].opcodes[3] = {
    type: 7,
    string: [45]
  }, this.rules[8].opcodes[4] = {
    type: 7,
    string: [46]
  }, this.rules[8].opcodes[5] = {
    type: 7,
    string: [95]
  }, this.rules[8].opcodes[6] = {
    type: 7,
    string: [126]
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
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  }, this.rules[10].opcodes[1] = {
    type: 5,
    min: 160,
    max: 55295
  }, this.rules[10].opcodes[2] = {
    type: 5,
    min: 63744,
    max: 64975
  }, this.rules[10].opcodes[3] = {
    type: 5,
    min: 65008,
    max: 65519
  }, this.rules[10].opcodes[4] = {
    type: 5,
    min: 65536,
    max: 131069
  }, this.rules[10].opcodes[5] = {
    type: 5,
    min: 131072,
    max: 196605
  }, this.rules[10].opcodes[6] = {
    type: 5,
    min: 196608,
    max: 262141
  }, this.rules[10].opcodes[7] = {
    type: 5,
    min: 262144,
    max: 327677
  }, this.rules[10].opcodes[8] = {
    type: 5,
    min: 327680,
    max: 393213
  }, this.rules[10].opcodes[9] = {
    type: 5,
    min: 393216,
    max: 458749
  }, this.rules[10].opcodes[10] = {
    type: 5,
    min: 458752,
    max: 524285
  }, this.rules[10].opcodes[11] = {
    type: 5,
    min: 524288,
    max: 589821
  }, this.rules[10].opcodes[12] = {
    type: 5,
    min: 589824,
    max: 655357
  }, this.rules[10].opcodes[13] = {
    type: 5,
    min: 655360,
    max: 720893
  }, this.rules[10].opcodes[14] = {
    type: 5,
    min: 720896,
    max: 786429
  }, this.rules[10].opcodes[15] = {
    type: 5,
    min: 786432,
    max: 851965
  }, this.rules[10].opcodes[16] = {
    type: 5,
    min: 851968,
    max: 917501
  }, this.rules[10].opcodes[17] = {
    type: 5,
    min: 921600,
    max: 983037
  }, this.rules[11].opcodes = [], this.rules[11].opcodes[0] = {
    type: 1,
    children: [1, 2, 3]
  }, this.rules[11].opcodes[1] = {
    type: 5,
    min: 57344,
    max: 63743
  }, this.rules[11].opcodes[2] = {
    type: 5,
    min: 983040,
    max: 1048573
  }, this.rules[11].opcodes[3] = {
    type: 5,
    min: 1048576,
    max: 1114109
  }, this.toString = function() {
    let e = "";
    return e += `; OpenAPI Server URL templating ABNF syntax
`, e += `server-url-template    = 1*( literals / server-variable )
`, e += `server-variable        = "{" server-variable-name "}"
`, e += `server-variable-name   = 1*( unreserved / pct-encoded / sub-delims / ":" / "@" )
`, e += `literals               = 1*( %x21 / %x23-24 / %x26 / %x28-3B / %x3D / %x3F-5B
`, e += `                       / %x5D / %x5F / %x61-7A / %x7E / ucschar / iprivate
`, e += `                       / pct-encoded)
`, e += `                           ; any Unicode character except: CTL, SP,
`, e += `                           ;  DQUOTE, "'", "%" (aside from pct-encoded),
`, e += '                           ;  "<", ">", "\\", "^", "`", "{", "|", "}"\n', e += `
`, e += `; Characters definitions (from RFC 6570)
`, e += `ALPHA          =  %x41-5A / %x61-7A   ; A-Z / a-z
`, e += `DIGIT          =  %x30-39             ; 0-9
`, e += `HEXDIG         =  DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
`, e += `                 ; case-insensitive
`, e += `
`, e += `pct-encoded    =  "%" HEXDIG HEXDIG
`, e += `unreserved     =  ALPHA / DIGIT / "-" / "." / "_" / "~"
`, e += `sub-delims     =  "!" / "$" / "&" / "'" / "(" / ")"
`, e += `               /  "*" / "+" / "," / ";" / "="
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
const Wg = function() {
  const e = H, r = Me, n = this, s = "parser.js: Parser(): ", i = function() {
    this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
      this.state = e.ACTIVE, this.phraseLength = 0;
    };
  };
  n.ast = void 0, n.stats = void 0, n.trace = void 0, n.callbacks = [];
  let o = 0, a = 0, c = 0, l = 0, p = 0, f, d, u, m, h = new i(), y, g, v;
  const E = () => {
    o = 0, a = 0, c = 0, l = 0, p = 0, f = void 0, d = void 0, u = void 0, m = void 0, h.refresh(), y = void 0, g = void 0, v = void 0;
  }, w = () => {
    const V = `${s}initializeCallbacks(): `;
    let j;
    for (y = [], g = [], j = 0; j < f.length; j += 1)
      y[j] = void 0;
    for (j = 0; j < d.length; j += 1)
      g[j] = void 0;
    let G;
    const K = [];
    for (j = 0; j < f.length; j += 1)
      K.push(f[j].lower);
    for (j = 0; j < d.length; j += 1)
      K.push(d[j].lower);
    for (const J in n.callbacks)
      if (n.callbacks.hasOwnProperty(J)) {
        if (j = K.indexOf(J.toLowerCase()), j < 0)
          throw new Error(`${V}syntax callback '${J}' not a rule or udt name`);
        if (G = n.callbacks[J] ? n.callbacks[J] : void 0, typeof G == "function" || G === void 0)
          j < f.length ? y[j] = G : g[j - f.length] = G;
        else
          throw new Error(`${V}syntax callback[${J}] must be function reference or falsy)`);
      }
  };
  n.parse = (V, j, G, K) => {
    const J = `${s}parse(): `;
    E(), m = r.stringToChars(G), f = V.rules, d = V.udts;
    const ce = j.toLowerCase();
    let de;
    for (const Rr in f)
      if (f.hasOwnProperty(Rr) && ce === f[Rr].lower) {
        de = f[Rr].index;
        break;
      }
    if (de === void 0)
      throw new Error(`${J}start rule name '${startRule}' not recognized`);
    w(), n.trace && n.trace.init(f, d, m), n.stats && n.stats.init(f, d), n.ast && n.ast.init(f, d, m), v = K, u = [
      {
        type: e.RNM,
        index: de
      }
    ], be(0, 0), u = void 0;
    let Ve = !1;
    switch (h.state) {
      case e.ACTIVE:
        throw new Error(`${J}final state should never be 'ACTIVE'`);
      case e.NOMATCH:
        Ve = !1;
        break;
      case e.EMPTY:
      case e.MATCH:
        h.phraseLength === m.length ? Ve = !0 : Ve = !1;
        break;
      default:
        throw new Error("unrecognized state");
    }
    return {
      success: Ve,
      state: h.state,
      stateName: e.idName(h.state),
      length: m.length,
      matched: h.phraseLength,
      maxMatched: p,
      maxTreeDepth: c,
      nodeHits: l
    };
  };
  const R = (V, j) => {
    const G = u[V];
    for (let K = 0; K < G.children.length && (be(G.children[K], j), h.state === e.NOMATCH); K += 1)
      ;
  }, S = (V, j) => {
    let G, K, J, ce;
    const de = u[V];
    n.ast && (K = n.ast.getLength()), G = !0, J = j, ce = 0;
    for (let Ve = 0; Ve < de.children.length; Ve += 1)
      if (be(de.children[Ve], J), h.state === e.NOMATCH) {
        G = !1;
        break;
      } else
        J += h.phraseLength, ce += h.phraseLength;
    G ? (h.state = ce === 0 ? e.EMPTY : e.MATCH, h.phraseLength = ce) : (h.state = e.NOMATCH, h.phraseLength = 0, n.ast && n.ast.setLength(K));
  }, C = (V, j) => {
    let G, K, J, ce;
    const de = u[V];
    if (de.max === 0) {
      h.state = e.EMPTY, h.phraseLength = 0;
      return;
    }
    for (K = j, J = 0, ce = 0, n.ast && (G = n.ast.getLength()); !(K >= m.length || (be(V + 1, K), h.state === e.NOMATCH) || h.state === e.EMPTY || (ce += 1, J += h.phraseLength, K += h.phraseLength, ce === de.max)); )
      ;
    h.state === e.EMPTY || ce >= de.min ? (h.state = J === 0 ? e.EMPTY : e.MATCH, h.phraseLength = J) : (h.state = e.NOMATCH, h.phraseLength = 0, n.ast && n.ast.setLength(G));
  }, k = (V, j, G, K) => {
    if (j.phraseLength > G) {
      let J = `${s}opRNM(${V.name}): callback function error: `;
      throw J += `sysData.phraseLength: ${j.phraseLength}`, J += ` must be <= remaining chars: ${G}`, new Error(J);
    }
    switch (j.state) {
      case e.ACTIVE:
        if (!K)
          throw new Error(
            `${s}opRNM(${V.name}): callback function return error. ACTIVE state not allowed.`
          );
        break;
      case e.EMPTY:
        j.phraseLength = 0;
        break;
      case e.MATCH:
        j.phraseLength === 0 && (j.state = e.EMPTY);
        break;
      case e.NOMATCH:
        j.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opRNM(${V.name}): callback function return error. Unrecognized return state: ${j.state}`
        );
    }
  }, A = (V, j) => {
    let G, K, J;
    const ce = u[V], de = f[ce.index], Ve = y[de.index];
    if (o || (K = n.ast && n.ast.ruleDefined(ce.index), K && (G = n.ast.getLength(), n.ast.down(ce.index, f[ce.index].name))), Ve) {
      const Rr = m.length - j;
      Ve(h, m, j, v), k(de, h, Rr, !0), h.state === e.ACTIVE && (J = u, u = de.opcodes, be(0, j), u = J, Ve(h, m, j, v), k(de, h, Rr, !1));
    } else
      J = u, u = de.opcodes, be(0, j), u = J;
    o || K && (h.state === e.NOMATCH ? n.ast.setLength(G) : n.ast.up(ce.index, de.name, j, h.phraseLength));
  }, U = (V, j) => {
    const G = u[V];
    h.state = e.NOMATCH, j < m.length && G.min <= m[j] && m[j] <= G.max && (h.state = e.MATCH, h.phraseLength = 1);
  }, P = (V, j) => {
    const G = u[V], K = G.string.length;
    if (h.state = e.NOMATCH, j + K <= m.length) {
      for (let J = 0; J < K; J += 1)
        if (m[j + J] !== G.string[J])
          return;
      h.state = e.MATCH, h.phraseLength = K;
    }
  }, $ = (V, j) => {
    let G;
    const K = u[V];
    h.state = e.NOMATCH;
    const J = K.string.length;
    if (J === 0) {
      h.state = e.EMPTY;
      return;
    }
    if (j + J <= m.length) {
      for (let ce = 0; ce < J; ce += 1)
        if (G = m[j + ce], G >= 65 && G <= 90 && (G += 32), G !== K.string[ce])
          return;
      h.state = e.MATCH, h.phraseLength = J;
    }
  }, D = (V, j, G) => {
    if (j.phraseLength > G) {
      let K = `${s}opUDT(${V.name}): callback function error: `;
      throw K += `sysData.phraseLength: ${j.phraseLength}`, K += ` must be <= remaining chars: ${G}`, new Error(K);
    }
    switch (j.state) {
      case e.ACTIVE:
        throw new Error(`${s}opUDT(${V.name}) ACTIVE state return not allowed.`);
      case e.EMPTY:
        if (V.empty)
          j.phraseLength = 0;
        else
          throw new Error(`${s}opUDT(${V.name}) may not return EMPTY.`);
        break;
      case e.MATCH:
        if (j.phraseLength === 0)
          if (V.empty)
            j.state = e.EMPTY;
          else
            throw new Error(`${s}opUDT(${V.name}) may not return EMPTY.`);
        break;
      case e.NOMATCH:
        j.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opUDT(${V.name}): callback function return error. Unrecognized return state: ${j.state}`
        );
    }
  }, N = (V, j) => {
    let G, K, J;
    const ce = u[V], de = d[ce.index];
    h.UdtIndex = de.index, o || (J = n.ast && n.ast.udtDefined(ce.index), J && (K = f.length + ce.index, G = n.ast.getLength(), n.ast.down(K, de.name)));
    const Ve = m.length - j;
    g[ce.index](h, m, j, v), D(de, h, Ve), o || J && (h.state === e.NOMATCH ? n.ast.setLength(G) : n.ast.up(K, de.name, j, h.phraseLength));
  }, se = (V, j) => {
    switch (o += 1, be(V + 1, j), o -= 1, h.phraseLength = 0, h.state) {
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
  }, ge = (V, j) => {
    switch (o += 1, be(V + 1, j), o -= 1, h.phraseLength = 0, h.state) {
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
  }, be = (V, j) => {
    const G = `${s}opExecute(): `, K = u[V];
    switch (l += 1, a > c && (c = a), a += 1, h.refresh(), n.trace && n.trace.down(K, j), K.type) {
      case e.ALT:
        R(V, j);
        break;
      case e.CAT:
        S(V, j);
        break;
      case e.REP:
        C(V, j);
        break;
      case e.RNM:
        A(V, j);
        break;
      case e.TRG:
        U(V, j);
        break;
      case e.TBS:
        P(V, j);
        break;
      case e.TLS:
        $(V, j);
        break;
      case e.UDT:
        N(V, j);
        break;
      case e.AND:
        se(V, j);
        break;
      case e.NOT:
        ge(V, j);
        break;
      default:
        throw new Error(`${G}unrecognized operator`);
    }
    o || j + h.phraseLength > p && (p = j + h.phraseLength), n.stats && n.stats.collect(K, h), n.trace && n.trace.up(K, h.state, j, h.phraseLength), a -= 1;
  };
}, Yg = function() {
  const e = "parser.js: Ast()): ", r = H, n = Me, s = this;
  let i, o, a, c = 0;
  const l = [], p = [], f = [];
  s.callbacks = [], s.init = (u, m, h) => {
    p.length = 0, f.length = 0, c = 0, i = u, o = m, a = h;
    let y;
    const g = [];
    for (y = 0; y < i.length; y += 1)
      g.push(i[y].lower);
    for (y = 0; y < o.length; y += 1)
      g.push(o[y].lower);
    for (c = i.length + o.length, y = 0; y < c; y += 1)
      l[y] = void 0;
    for (const v in s.callbacks)
      if (s.callbacks.hasOwnProperty(v)) {
        const E = v.toLowerCase();
        if (y = g.indexOf(E), y < 0)
          throw new Error(`${e}init: node '${v}' not a rule or udt name`);
        l[y] = s.callbacks[v];
      }
  }, s.ruleDefined = (u) => !!l[u], s.udtDefined = (u) => !!l[i.length + u], s.down = (u, m) => {
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
  }, s.up = (u, m, h, y) => {
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
  }, s.translate = (u) => {
    let m, h;
    for (let y = 0; y < f.length; y += 1)
      h = f[y], m = l[h.callbackIndex], m && (h.state === r.SEM_PRE ? m(r.SEM_PRE, a, h.phraseIndex, h.phraseLength, u) : m && m(r.SEM_POST, a, h.phraseIndex, h.phraseLength, u));
  }, s.setLength = (u) => {
    f.length = u, u > 0 ? p.length = f[u - 1].stack : p.length = 0;
  }, s.getLength = () => f.length;
  function d(u) {
    let m = "";
    for (; u-- > 0; )
      m += " ";
    return m;
  }
  s.toXml = () => {
    let u = "", m = 0;
    return u += `<?xml version="1.0" encoding="utf-8"?>
`, u += `<root nodes="${f.length / 2}" characters="${a.length}">
`, u += `<!-- input string -->
`, u += d(m + 2), u += n.charsToString(a), u += `
`, f.forEach((h) => {
      h.state === r.SEM_PRE ? (m += 1, u += d(m), u += `<node name="${h.name}" index="${h.phraseIndex}" length="${h.phraseLength}">
`, u += d(m + 2), u += n.charsToString(a, h.phraseIndex, h.phraseLength), u += `
`) : (u += d(m), u += `</node><!-- name="${h.name}" -->
`, m -= 1);
    }), u += `</root>
`, u;
  };
}, Me = {
  // utility functions
  stringToChars: (t) => [...t].map((e) => e.codePointAt(0)),
  charsToString: (t, e, r) => {
    let n = t;
    for (; !(e === void 0 || e < 0); ) {
      if (r === void 0) {
        n = t.slice(e);
        break;
      }
      if (r <= 0)
        return "";
      n = t.slice(e, e + r);
      break;
    }
    return String.fromCodePoint(...n);
  }
}, H = {
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
      case H.ALT:
        return "ALT";
      case H.CAT:
        return "CAT";
      case H.REP:
        return "REP";
      case H.RNM:
        return "RNM";
      case H.TRG:
        return "TRG";
      case H.TBS:
        return "TBS";
      case H.TLS:
        return "TLS";
      case H.UDT:
        return "UDT";
      case H.AND:
        return "AND";
      case H.NOT:
        return "NOT";
      case H.ACTIVE:
        return "ACTIVE";
      case H.EMPTY:
        return "EMPTY";
      case H.MATCH:
        return "MATCH";
      case H.NOMATCH:
        return "NOMATCH";
      case H.SEM_PRE:
        return "SEM_PRE";
      case H.SEM_POST:
        return "SEM_POST";
      case H.SEM_OK:
        return "SEM_OK";
      default:
        return "UNRECOGNIZED STATE";
    }
  }
}, SU = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-url-template", Me.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, AU = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable", Me.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, PU = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable-name", Me.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, jU = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["literals", Me.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, TU = new OU(), Xg = (t) => {
  const e = new Wg();
  return e.ast = new Yg(), e.ast.callbacks["server-url-template"] = SU, e.ast.callbacks["server-variable"] = AU, e.ast.callbacks["server-variable-name"] = PU, e.ast.callbacks.literals = jU, {
    result: e.parse(TU, "server-url-template", t),
    ast: e.ast
  };
}, _U = (t, {
  strict: e = !1
} = {}) => {
  try {
    const r = Xg(t);
    if (!r.result.success) return !1;
    const n = [];
    r.ast.translate(n);
    const s = n.some(([i]) => i === "server-variable");
    if (!e && !s)
      try {
        return new URL(t, "https://vladimirgorej.com"), !0;
      } catch {
        return !1;
      }
    return e ? s : !0;
  } catch {
    return !1;
  }
}, CU = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, RU = (t) => CU(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), IU = ["literals", "server-variable-name"], MU = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: RU
    },
    ...r
  }, i = Xg(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => IU.includes(c)).map(([c, l]) => c === "server-variable-name" ? Object.hasOwn(e, l) ? s.encoder(e[l], l) : `{${l}}` : l).join("");
};
function FU() {
  this.grammarObject = "grammarObject", this.rules = [], this.rules[0] = {
    name: "path-template",
    lower: "path-template",
    index: 0,
    isBkr: !1
  }, this.rules[1] = {
    name: "path",
    lower: "path",
    index: 1,
    isBkr: !1
  }, this.rules[2] = {
    name: "path-segment",
    lower: "path-segment",
    index: 2,
    isBkr: !1
  }, this.rules[3] = {
    name: "query",
    lower: "query",
    index: 3,
    isBkr: !1
  }, this.rules[4] = {
    name: "query-literal",
    lower: "query-literal",
    index: 4,
    isBkr: !1
  }, this.rules[5] = {
    name: "query-marker",
    lower: "query-marker",
    index: 5,
    isBkr: !1
  }, this.rules[6] = {
    name: "fragment",
    lower: "fragment",
    index: 6,
    isBkr: !1
  }, this.rules[7] = {
    name: "fragment-literal",
    lower: "fragment-literal",
    index: 7,
    isBkr: !1
  }, this.rules[8] = {
    name: "fragment-marker",
    lower: "fragment-marker",
    index: 8,
    isBkr: !1
  }, this.rules[9] = {
    name: "slash",
    lower: "slash",
    index: 9,
    isBkr: !1
  }, this.rules[10] = {
    name: "path-literal",
    lower: "path-literal",
    index: 10,
    isBkr: !1
  }, this.rules[11] = {
    name: "template-expression",
    lower: "template-expression",
    index: 11,
    isBkr: !1
  }, this.rules[12] = {
    name: "template-expression-param-name",
    lower: "template-expression-param-name",
    index: 12,
    isBkr: !1
  }, this.rules[13] = {
    name: "unreserved",
    lower: "unreserved",
    index: 13,
    isBkr: !1
  }, this.rules[14] = {
    name: "pct-encoded",
    lower: "pct-encoded",
    index: 14,
    isBkr: !1
  }, this.rules[15] = {
    name: "sub-delims",
    lower: "sub-delims",
    index: 15,
    isBkr: !1
  }, this.rules[16] = {
    name: "ALPHA",
    lower: "alpha",
    index: 16,
    isBkr: !1
  }, this.rules[17] = {
    name: "DIGIT",
    lower: "digit",
    index: 17,
    isBkr: !1
  }, this.rules[18] = {
    name: "HEXDIG",
    lower: "hexdig",
    index: 18,
    isBkr: !1
  }, this.udts = [], this.rules[0].opcodes = [], this.rules[0].opcodes[0] = {
    type: 2,
    children: [1, 2, 6]
  }, this.rules[0].opcodes[1] = {
    type: 4,
    index: 1
  }, this.rules[0].opcodes[2] = {
    type: 3,
    min: 0,
    max: 1
  }, this.rules[0].opcodes[3] = {
    type: 2,
    children: [4, 5]
  }, this.rules[0].opcodes[4] = {
    type: 4,
    index: 5
  }, this.rules[0].opcodes[5] = {
    type: 4,
    index: 3
  }, this.rules[0].opcodes[6] = {
    type: 3,
    min: 0,
    max: 1
  }, this.rules[0].opcodes[7] = {
    type: 2,
    children: [8, 9]
  }, this.rules[0].opcodes[8] = {
    type: 4,
    index: 8
  }, this.rules[0].opcodes[9] = {
    type: 4,
    index: 6
  }, this.rules[1].opcodes = [], this.rules[1].opcodes[0] = {
    type: 2,
    children: [1, 2, 6]
  }, this.rules[1].opcodes[1] = {
    type: 4,
    index: 9
  }, this.rules[1].opcodes[2] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[1].opcodes[3] = {
    type: 2,
    children: [4, 5]
  }, this.rules[1].opcodes[4] = {
    type: 4,
    index: 2
  }, this.rules[1].opcodes[5] = {
    type: 4,
    index: 9
  }, this.rules[1].opcodes[6] = {
    type: 3,
    min: 0,
    max: 1
  }, this.rules[1].opcodes[7] = {
    type: 4,
    index: 2
  }, this.rules[2].opcodes = [], this.rules[2].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[2].opcodes[1] = {
    type: 1,
    children: [2, 3]
  }, this.rules[2].opcodes[2] = {
    type: 4,
    index: 10
  }, this.rules[2].opcodes[3] = {
    type: 4,
    index: 11
  }, this.rules[3].opcodes = [], this.rules[3].opcodes[0] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[3].opcodes[1] = {
    type: 4,
    index: 4
  }, this.rules[4].opcodes = [], this.rules[4].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[4].opcodes[1] = {
    type: 1,
    children: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  }, this.rules[4].opcodes[2] = {
    type: 4,
    index: 13
  }, this.rules[4].opcodes[3] = {
    type: 4,
    index: 14
  }, this.rules[4].opcodes[4] = {
    type: 4,
    index: 15
  }, this.rules[4].opcodes[5] = {
    type: 7,
    string: [58]
  }, this.rules[4].opcodes[6] = {
    type: 7,
    string: [64]
  }, this.rules[4].opcodes[7] = {
    type: 7,
    string: [47]
  }, this.rules[4].opcodes[8] = {
    type: 7,
    string: [63]
  }, this.rules[4].opcodes[9] = {
    type: 7,
    string: [38]
  }, this.rules[4].opcodes[10] = {
    type: 7,
    string: [61]
  }, this.rules[5].opcodes = [], this.rules[5].opcodes[0] = {
    type: 7,
    string: [63]
  }, this.rules[6].opcodes = [], this.rules[6].opcodes[0] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[6].opcodes[1] = {
    type: 4,
    index: 7
  }, this.rules[7].opcodes = [], this.rules[7].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[7].opcodes[1] = {
    type: 1,
    children: [2, 3, 4, 5, 6, 7, 8]
  }, this.rules[7].opcodes[2] = {
    type: 4,
    index: 13
  }, this.rules[7].opcodes[3] = {
    type: 4,
    index: 14
  }, this.rules[7].opcodes[4] = {
    type: 4,
    index: 15
  }, this.rules[7].opcodes[5] = {
    type: 7,
    string: [58]
  }, this.rules[7].opcodes[6] = {
    type: 7,
    string: [64]
  }, this.rules[7].opcodes[7] = {
    type: 7,
    string: [47]
  }, this.rules[7].opcodes[8] = {
    type: 7,
    string: [63]
  }, this.rules[8].opcodes = [], this.rules[8].opcodes[0] = {
    type: 7,
    string: [35]
  }, this.rules[9].opcodes = [], this.rules[9].opcodes[0] = {
    type: 7,
    string: [47]
  }, this.rules[10].opcodes = [], this.rules[10].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[10].opcodes[1] = {
    type: 1,
    children: [2, 3, 4, 5, 6]
  }, this.rules[10].opcodes[2] = {
    type: 4,
    index: 13
  }, this.rules[10].opcodes[3] = {
    type: 4,
    index: 14
  }, this.rules[10].opcodes[4] = {
    type: 4,
    index: 15
  }, this.rules[10].opcodes[5] = {
    type: 7,
    string: [58]
  }, this.rules[10].opcodes[6] = {
    type: 7,
    string: [64]
  }, this.rules[11].opcodes = [], this.rules[11].opcodes[0] = {
    type: 2,
    children: [1, 2, 3]
  }, this.rules[11].opcodes[1] = {
    type: 7,
    string: [123]
  }, this.rules[11].opcodes[2] = {
    type: 4,
    index: 12
  }, this.rules[11].opcodes[3] = {
    type: 7,
    string: [125]
  }, this.rules[12].opcodes = [], this.rules[12].opcodes[0] = {
    type: 3,
    min: 1,
    max: 1 / 0
  }, this.rules[12].opcodes[1] = {
    type: 1,
    children: [2, 3, 4, 5, 6]
  }, this.rules[12].opcodes[2] = {
    type: 4,
    index: 13
  }, this.rules[12].opcodes[3] = {
    type: 4,
    index: 14
  }, this.rules[12].opcodes[4] = {
    type: 4,
    index: 15
  }, this.rules[12].opcodes[5] = {
    type: 7,
    string: [58]
  }, this.rules[12].opcodes[6] = {
    type: 7,
    string: [64]
  }, this.rules[13].opcodes = [], this.rules[13].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6]
  }, this.rules[13].opcodes[1] = {
    type: 4,
    index: 16
  }, this.rules[13].opcodes[2] = {
    type: 4,
    index: 17
  }, this.rules[13].opcodes[3] = {
    type: 7,
    string: [45]
  }, this.rules[13].opcodes[4] = {
    type: 7,
    string: [46]
  }, this.rules[13].opcodes[5] = {
    type: 7,
    string: [95]
  }, this.rules[13].opcodes[6] = {
    type: 7,
    string: [126]
  }, this.rules[14].opcodes = [], this.rules[14].opcodes[0] = {
    type: 2,
    children: [1, 2, 3]
  }, this.rules[14].opcodes[1] = {
    type: 7,
    string: [37]
  }, this.rules[14].opcodes[2] = {
    type: 4,
    index: 18
  }, this.rules[14].opcodes[3] = {
    type: 4,
    index: 18
  }, this.rules[15].opcodes = [], this.rules[15].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  }, this.rules[15].opcodes[1] = {
    type: 7,
    string: [33]
  }, this.rules[15].opcodes[2] = {
    type: 7,
    string: [36]
  }, this.rules[15].opcodes[3] = {
    type: 7,
    string: [38]
  }, this.rules[15].opcodes[4] = {
    type: 7,
    string: [39]
  }, this.rules[15].opcodes[5] = {
    type: 7,
    string: [40]
  }, this.rules[15].opcodes[6] = {
    type: 7,
    string: [41]
  }, this.rules[15].opcodes[7] = {
    type: 7,
    string: [42]
  }, this.rules[15].opcodes[8] = {
    type: 7,
    string: [43]
  }, this.rules[15].opcodes[9] = {
    type: 7,
    string: [44]
  }, this.rules[15].opcodes[10] = {
    type: 7,
    string: [59]
  }, this.rules[15].opcodes[11] = {
    type: 7,
    string: [61]
  }, this.rules[16].opcodes = [], this.rules[16].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }, this.rules[16].opcodes[1] = {
    type: 5,
    min: 65,
    max: 90
  }, this.rules[16].opcodes[2] = {
    type: 5,
    min: 97,
    max: 122
  }, this.rules[17].opcodes = [], this.rules[17].opcodes[0] = {
    type: 5,
    min: 48,
    max: 57
  }, this.rules[18].opcodes = [], this.rules[18].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7]
  }, this.rules[18].opcodes[1] = {
    type: 4,
    index: 17
  }, this.rules[18].opcodes[2] = {
    type: 7,
    string: [97]
  }, this.rules[18].opcodes[3] = {
    type: 7,
    string: [98]
  }, this.rules[18].opcodes[4] = {
    type: 7,
    string: [99]
  }, this.rules[18].opcodes[5] = {
    type: 7,
    string: [100]
  }, this.rules[18].opcodes[6] = {
    type: 7,
    string: [101]
  }, this.rules[18].opcodes[7] = {
    type: 7,
    string: [102]
  }, this.toString = function() {
    let e = "";
    return e += `; OpenAPI Path Templating ABNF syntax
`, e += `path-template                  = path [ query-marker query ] [ fragment-marker fragment ]
`, e += `path                           = slash *( path-segment slash ) [ path-segment ]
`, e += `path-segment                   = 1*( path-literal / template-expression )
`, e += `query                          = *( query-literal )
`, e += `query-literal                  = 1*( unreserved / pct-encoded / sub-delims / ":" / "@" / "/" / "?" / "&" / "=" )
`, e += `query-marker                   = "?"
`, e += `fragment                       = *( fragment-literal )
`, e += `fragment-literal               = 1*( unreserved / pct-encoded / sub-delims / ":" / "@" / "/" / "?" )
`, e += `fragment-marker                = "#"
`, e += `slash                          = "/"
`, e += `path-literal                   = 1*( unreserved / pct-encoded / sub-delims / ":" / "@" )
`, e += `template-expression            = "{" template-expression-param-name "}"
`, e += `template-expression-param-name = 1*( unreserved / pct-encoded / sub-delims / ":" / "@" )
`, e += `
`, e += `; Characters definitions (from RFC 3986)
`, e += `unreserved          = ALPHA / DIGIT / "-" / "." / "_" / "~"
`, e += `pct-encoded         = "%" HEXDIG HEXDIG
`, e += `sub-delims          = "!" / "$" / "&" / "'" / "(" / ")"
`, e += `                    / "*" / "+" / "," / ";" / "="
`, e += `ALPHA               = %x41-5A / %x61-7A   ; A-Z / a-z
`, e += `DIGIT               = %x30-39            ; 0-9
`, e += `HEXDIG              = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
`, e;
  };
}
const kU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["slash", Me.charsToString(e, r, n)]), H.SEM_OK), DU = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["path-template", Me.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, NU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["path", Me.charsToString(e, r, n)]), H.SEM_OK), LU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["path-literal", Me.charsToString(e, r, n)]), H.SEM_OK), VU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["query", Me.charsToString(e, r, n)]), H.SEM_OK), BU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["query-marker", Me.charsToString(e, r, n)]), H.SEM_OK), UU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["fragment", Me.charsToString(e, r, n)]), H.SEM_OK), HU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["fragment-marker", Me.charsToString(e, r, n)]), H.SEM_OK), qU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["template-expression", Me.charsToString(e, r, n)]), H.SEM_OK), zU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["template-expression-param-name", Me.charsToString(e, r, n)]), H.SEM_OK), GU = new FU(), KU = (t) => {
  const e = new Wg();
  return e.ast = new Yg(), e.ast.callbacks["path-template"] = DU, e.ast.callbacks.path = NU, e.ast.callbacks.query = VU, e.ast.callbacks["query-marker"] = BU, e.ast.callbacks.fragment = UU, e.ast.callbacks["fragment-marker"] = HU, e.ast.callbacks.slash = kU, e.ast.callbacks["path-literal"] = LU, e.ast.callbacks["template-expression"] = qU, e.ast.callbacks["template-expression-param-name"] = zU, {
    result: e.parse(GU, "path-template", t),
    ast: e.ast
  };
}, JU = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, WU = (t) => JU(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), YU = ["slash", "path-literal", "query-marker", "query-literal", "template-expression-param-name"], Xl = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: WU
    },
    ...r
  }, i = KU(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => YU.includes(c)).map(([c, l]) => c === "template-expression-param-name" ? Object.hasOwn(e, l) ? s.encoder(e[l], l) : `{${l}}` : l).join("");
}, XU = {
  body: QU,
  header: e4,
  query: r4,
  path: t4,
  formData: ZU
};
function QU({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function ZU({
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
    const n = r.name;
    t.form[n] = t.form[n] || {}, t.form[n].allowEmptyValue = !0;
  }
}
function e4({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function t4({
  req: t,
  value: e,
  parameter: r,
  baseURL: n
}) {
  if (e !== void 0) {
    const s = t.url.replace(n, ""), i = Xl(s, {
      [r.name]: e
    });
    t.url = n + i;
  }
}
function r4({
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
    const n = r.name;
    t.query[n] = t.query[n] || {}, t.query[n].allowEmptyValue = !0;
  }
}
function La(t, e) {
  return e.includes("application/json") ? typeof t == "string" ? t : (Array.isArray(t) && (t = t.map((r) => {
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  })), JSON.stringify(t)) : String(t);
}
function n4({
  req: t,
  value: e,
  parameter: r,
  baseURL: n
}) {
  const {
    name: s,
    style: i,
    explode: o,
    content: a
  } = r;
  if (e === void 0) return;
  const c = t.url.replace(n, "");
  let l;
  if (a) {
    const p = Object.keys(a)[0];
    l = Xl(c, {
      [s]: e
    }, {
      encoder: (f) => Od(La(f, p))
    });
  } else
    l = Xl(c, {
      [s]: e
    }, {
      encoder: (p) => eu({
        key: r.name,
        value: p,
        style: i || "simple",
        explode: o || !1,
        escape: "reserved"
      })
    });
  t.url = n + l;
}
function s4({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const n = Object.keys(r.content)[0], s = La(e, n);
    if (s)
      t.query[r.name] = s;
    else if (r.allowEmptyValue) {
      const i = r.name;
      t.query[i] = t.query[i] || {}, t.query[i].allowEmptyValue = !0;
    }
    return;
  }
  if (e === !1 && (e = "false"), e === 0 && (e = "0"), e) {
    const {
      style: n,
      explode: s,
      allowReserved: i
    } = r;
    t.query[r.name] = {
      value: e,
      serializationOption: {
        style: n,
        explode: s,
        allowReserved: i
      }
    };
  } else if (r.allowEmptyValue && e !== void 0) {
    const n = r.name;
    t.query[n] = t.query[n] || {}, t.query[n].allowEmptyValue = !0;
  }
}
const i4 = ["accept", "authorization", "content-type"];
function o4({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(i4.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = La(r, n);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = eu({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function a4({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {};
  const n = typeof r;
  if (r !== void 0 && e.content) {
    const s = Object.keys(e.content)[0];
    t.headers.Cookie = `${e.name}=${La(r, s)}`;
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    const s = n === "object" && !Array.isArray(r) && e.explode ? "" : `${e.name}=`;
    t.headers.Cookie = s + eu({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: typeof e.explode > "u" ? !1 : e.explode
    });
  }
}
const c4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: a4,
  header: o4,
  path: n4,
  query: s4
}, Symbol.toStringTag, { value: "Module" })), l4 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: Qg
} = l4;
function u4(t, e) {
  const {
    operation: r,
    requestBody: n,
    securities: s,
    spec: i,
    attachContentTypeForEmptyPayload: o
  } = t;
  let {
    requestContentType: a
  } = t;
  e = f4({
    request: e,
    securities: s,
    operation: r,
    spec: i
  });
  const c = r.requestBody || {}, l = Object.keys(c.content || {}), p = a && l.indexOf(a) > -1;
  if (n || o) {
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
      return v >= 200 && v < 300 && gr(g.content);
    }).reduce((y, [, g]) => y.concat(Object.keys(g.content)), []);
    h.length > 0 && (e.headers.accept = h.join(", "));
  }
  if (n)
    if (a) {
      if (l.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof n == "object") {
            var f, d;
            const h = (f = (d = c.content[a]) === null || d === void 0 ? void 0 : d.encoding) !== null && f !== void 0 ? f : {};
            e.form = {}, Object.keys(n).forEach((y) => {
              let g;
              try {
                g = JSON.parse(n[y]);
              } catch {
                g = n[y];
              }
              e.form[y] = {
                value: g,
                encoding: h[y] || {}
              };
            });
          } else if (typeof n == "string") {
            var u, m;
            const h = (u = (m = c.content[a]) === null || m === void 0 ? void 0 : m.encoding) !== null && u !== void 0 ? u : {};
            try {
              e.form = {};
              const y = JSON.parse(n);
              Object.entries(y).forEach(([g, v]) => {
                e.form[g] = {
                  value: v,
                  encoding: h[g] || {}
                };
              });
            } catch {
              e.form = n;
            }
          } else
            e.form = n;
        else
          e.body = n;
    } else
      e.body = n;
  return e;
}
function f4({
  request: t,
  securities: e = {},
  operation: r = {},
  spec: n
}) {
  var s;
  const i = {
    ...t
  }, {
    authorized: o = {}
  } = e, a = r.security || n.security || [], c = o && !!Object.keys(o).length, l = (n == null || (s = n.components) === null || s === void 0 ? void 0 : s.securitySchemes) || {};
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
            const y = m.username || "", g = m.password || "", v = Qg(`${y}:${g}`);
            i.headers.Authorization = `Basic ${v}`;
          }
          /^bearer$/i.test(u.scheme) && (i.headers.Authorization = `Bearer ${m}`);
        } else if (h === "oauth2" || h === "openIdConnect") {
          const y = d.token || {}, g = u["x-tokenName"] || "access_token", v = y[g];
          let E = y.token_type;
          (!E || E.toLowerCase() === "bearer") && (E = "Bearer"), i.headers.Authorization = `${E} ${v}`;
        }
      }
    });
  }), i);
}
function p4(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = h4({
    request: e,
    securities: s,
    operation: n,
    spec: r
  }), e.body || e.form || a)
    i ? e.headers["Content-Type"] = i : Array.isArray(n.consumes) ? [e.headers["Content-Type"]] = n.consumes : Array.isArray(r.consumes) ? [e.headers["Content-Type"]] = r.consumes : n.parameters && n.parameters.filter((c) => c.type === "file").length ? e.headers["Content-Type"] = "multipart/form-data" : n.parameters && n.parameters.filter((c) => c.in === "formData").length && (e.headers["Content-Type"] = "application/x-www-form-urlencoded");
  else if (i) {
    const c = n.parameters && n.parameters.filter((p) => p.in === "body").length > 0, l = n.parameters && n.parameters.filter((p) => p.in === "formData").length > 0;
    (c || l) && (e.headers["Content-Type"] = i);
  }
  return !o && Array.isArray(n.produces) && n.produces.length > 0 && (e.headers.accept = n.produces.join(", ")), e;
}
function h4({
  request: t,
  securities: e = {},
  operation: r = {},
  spec: n
}) {
  const s = {
    ...t
  }, {
    authorized: i = {},
    specSecurity: o = []
  } = e, a = r.security || o, c = i && !!Object.keys(i).length, l = n.securityDefinitions;
  return s.headers = s.headers || {}, s.query = s.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((p) => {
    Object.keys(p).forEach((f) => {
      const d = i[f];
      if (!d)
        return;
      const {
        token: u
      } = d, m = d.value || d, h = l[f], {
        type: y
      } = h, g = h["x-tokenName"] || "access_token", v = u && u[g];
      let E = u && u.token_type;
      if (d)
        if (y === "apiKey") {
          const w = h.in === "query" ? "query" : "headers";
          s[w] = s[w] || {}, s[w][h.name] = m;
        } else if (y === "basic")
          if (m.header)
            s.headers.authorization = m.header;
          else {
            const w = m.username || "", R = m.password || "";
            m.base64 = Qg(`${w}:${R}`), s.headers.authorization = `Basic ${m.base64}`;
          }
        else y === "oauth2" && v && (E = !E || E.toLowerCase() === "bearer" ? "Bearer" : E, s.headers.authorization = `${E} ${v}`);
    });
  }), s);
}
const xd = (t) => Array.isArray(t) ? t : [], ti = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, ri), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
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
class d4 extends ot {
}
const m4 = (t, e) => e.filter((r) => r.name === t), v4 = (t) => {
  const e = {};
  t.forEach((n) => {
    e[n.in] || (e[n.in] = {}), e[n.in][n.name] = n;
  });
  const r = [];
  return Object.keys(e).forEach((n) => {
    Object.keys(e[n]).forEach((s) => {
      r.push(e[n][s]);
    });
  }), r;
}, y4 = {
  buildRequest: Zg
};
function g4({
  http: t,
  fetch: e,
  // This is legacy
  spec: r,
  operationId: n,
  pathName: s,
  method: i,
  parameters: o,
  securities: a,
  ...c
}) {
  const l = t || e || Yr;
  s && i && !n && (n = Jg(s, i));
  const p = y4.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: l,
    ...c
  });
  return p.body && (gr(p.body) || Array.isArray(p.body)) && (p.body = JSON.stringify(p.body)), l(p);
}
function Zg(t) {
  var e;
  const {
    spec: r,
    operationId: n,
    responseContentType: s,
    scheme: i,
    requestInterceptor: o,
    responseInterceptor: a,
    contextUrl: c,
    userFetch: l,
    server: p,
    serverVariables: f,
    http: d,
    signal: u,
    serverVariableEncoder: m
  } = t;
  let {
    parameters: h,
    parameterBuilders: y,
    baseURL: g
  } = t;
  const v = Of(r);
  y || (v ? y = c4 : y = XU);
  let w = {
    url: "",
    credentials: d && d.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  u && (w.signal = u), o && (w.requestInterceptor = o), a && (w.responseInterceptor = a), l && (w.userFetch = l);
  const R = oU(r, n);
  if (!R)
    throw new d4(`Operation ${n} not found`);
  const {
    operation: S = {},
    method: C,
    pathName: k
  } = R;
  if (g = (e = g) !== null && e !== void 0 ? e : eb({
    spec: r,
    scheme: i,
    contextUrl: c,
    server: p,
    serverVariables: f,
    pathName: k,
    method: C,
    serverVariableEncoder: m
  }), w.url += g, !n)
    return delete w.cookies, w;
  w.url += k, w.method = `${C}`.toUpperCase(), h = h || {};
  const A = r.paths[k] || {};
  s && (w.headers.accept = s);
  const U = v4([].concat(xd(S.parameters)).concat(xd(A.parameters)));
  U.forEach(($) => {
    const D = y[$.in];
    let N;
    if ($.in === "body" && $.schema && $.schema.properties && (N = h), N = $ && $.name && h[$.name], typeof N > "u" ? N = $ && $.name && h[`${$.in}.${$.name}`] : m4($.name, U).length > 1 && console.warn(`Parameter '${$.name}' is ambiguous because the defined spec has more than one parameter with the name: '${$.name}' and the passed-in parameter values did not define an 'in' value.`), N !== null) {
      if (typeof $.default < "u" && typeof N > "u" && (N = $.default), typeof N > "u" && $.required && !$.allowEmptyValue)
        throw new Error(`Required parameter ${$.name} is not provided`);
      if (v && $.schema && $.schema.type === "object" && typeof N == "string")
        try {
          N = JSON.parse(N);
        } catch {
          throw new Error("Could not parse object parameter value string as JSON");
        }
      D && D({
        req: w,
        parameter: $,
        value: N,
        operation: S,
        spec: r,
        baseURL: g
      });
    }
  });
  const P = {
    ...t,
    operation: S
  };
  if (v ? w = u4(P, w) : w = p4(P, w), w.cookies && Object.keys(w.cookies).length) {
    const $ = Object.keys(w.cookies).reduce((D, N) => {
      const se = w.cookies[N], ge = D ? "&" : "", be = Vf.serialize(N, se);
      return D + ge + be;
    }, "");
    w.headers.Cookie = $;
  }
  return w.cookies && delete w.cookies, tu(w);
}
const Ql = (t) => t ? t.replace(/\W/g, "") : null;
function eb(t) {
  return Of(t.spec) ? b4(t) : w4(t);
}
const Tc = (t) => Array.isArray(t) && t.length > 0;
function b4({
  spec: t,
  pathName: e,
  method: r,
  server: n,
  contextUrl: s,
  serverVariables: i = {},
  serverVariableEncoder: o
}) {
  var a, c;
  let l = [], p = "", f;
  const d = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 || (a = a[(r || "").toLowerCase()]) === null || a === void 0 ? void 0 : a.servers, u = t == null || (c = t.paths) === null || c === void 0 || (c = c[e]) === null || c === void 0 ? void 0 : c.servers, m = t == null ? void 0 : t.servers;
  if (l = Tc(d) ? d : Tc(u) ? u : Tc(m) ? m : [Ed], n && (f = l.find((h) => h.url === n), f && (p = n)), p || ([f] = l, p = f.url), _U(p, {
    strict: !0
  })) {
    const h = Object.entries({
      ...f.variables
    }).reduce((y, [g, v]) => (y[g] = v.default, y), {});
    p = MU(p, {
      ...h,
      ...i
    }, {
      encoder: typeof o == "function" ? o : zu
    });
  }
  return x4(p, s);
}
function x4(t = "", e = "") {
  const r = ti(t && e ? Oe(e, t) : t), n = ti(e), s = Ql(r.protocol) || Ql(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function w4({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = ti(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || Ql(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return i && o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
re.http = Yr;
re.makeHttp = Vw.bind(null, re.http);
re.resolveStrategies = {
  "openapi-3-1-apidom": sU,
  "openapi-3-0": Sg,
  "openapi-2-0": Og,
  generic: wg
};
re.resolve = Ag({
  strategies: [re.resolveStrategies["openapi-3-1-apidom"], re.resolveStrategies["openapi-3-0"], re.resolveStrategies["openapi-2-0"], re.resolveStrategies.generic]
});
re.resolveSubtree = KN({
  strategies: [re.resolveStrategies["openapi-3-1-apidom"], re.resolveStrategies["openapi-3-0"], re.resolveStrategies["openapi-2-0"], re.resolveStrategies.generic]
});
re.execute = g4;
re.serializeRes = dm;
re.serializeHeaders = hm;
re.clearCache = BN;
re.makeApisTagOperation = fU;
re.buildRequest = Zg;
re.helpers = {
  opId: ps
};
re.getBaseUrl = eb;
re.apidom = {
  resolve: {
    resolvers: {
      HTTPResolverSwaggerClient: Vg
    }
  },
  parse: {
    parsers: {
      JsonParser: Bg,
      YamlParser: Ug,
      OpenApiJson3_1Parser: Hg,
      OpenApiYaml3_1Parser: qg
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: Gg
    }
  }
};
function re(t, e = {}) {
  if (typeof t == "string" ? e.url = t : e = t, !(this instanceof re))
    return new re(e);
  Object.assign(this, e);
  const r = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, re.makeApisTagOperation(this)), this));
  return r.client = this, r;
}
re.prototype = {
  http: Yr,
  execute(t) {
    return this.applyDefaults(), re.execute({
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
    return re.resolve({
      spec: this.spec,
      url: this.url,
      http: this.http || this.fetch,
      allowMetaPatches: this.allowMetaPatches,
      useCircularStructures: this.useCircularStructures,
      requestInterceptor: this.requestInterceptor || null,
      responseInterceptor: this.responseInterceptor || null,
      skipNormalization: this.skipNormalization || !1,
      ...t
    }).then((e) => (this.originalSpec = this.spec, this.spec = e.spec, this.errors = e.errors, this));
  }
};
re.prototype.applyDefaults = function() {
  const {
    spec: e
  } = this, r = this.url;
  if (Eg(e) && aU(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (Of(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [Ed]);
  }
};
export {
  re as S
};
