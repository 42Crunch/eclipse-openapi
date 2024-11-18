var eb = Object.defineProperty;
var Uf = (t) => {
  throw TypeError(t);
};
var tb = (t, e, r) => e in t ? eb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var b = (t, e, r) => tb(t, typeof e != "symbol" ? e + "" : e, r), Hf = (t, e, r) => e.has(t) || Uf("Cannot " + r);
var Ba = (t, e, r) => (Hf(t, e, "read from private field"), r ? r.call(t) : e.get(t)), qf = (t, e, r) => e.has(t) ? Uf("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ua = (t, e, r, n) => (Hf(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import { o as $o, v as Yt } from "./TriangleExclamation.nXQi8F2Q.js";
const xd = "application/json, application/yaml", ni = "https://swagger.io", wd = Object.freeze({
  url: "/"
}), {
  fetch: rb,
  Response: nb,
  Headers: sb,
  Request: ib,
  FormData: ob,
  File: ab,
  Blob: cb
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = rb);
typeof globalThis.Headers > "u" && (globalThis.Headers = sb);
typeof globalThis.Request > "u" && (globalThis.Request = ib);
typeof globalThis.Response > "u" && (globalThis.Response = nb);
typeof globalThis.FormData > "u" && (globalThis.FormData = ob);
typeof globalThis.File > "u" && (globalThis.File = ab);
typeof globalThis.Blob > "u" && (globalThis.Blob = cb);
function eu(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function Ed(t, e) {
  return Array.isArray(t) && t.some((r) => eu(r, e));
}
class Cc extends File {
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
const lb = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, ub = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function $d(t, e = "reserved") {
  return [...t].map((r) => {
    if (ub(r) || lb(r) && e === "unsafe")
      return r;
    const n = new TextEncoder();
    return Array.from(n.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function tu(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? fb(t) : typeof e == "object" ? pb(t) : hb(t);
}
function je(t, e = !1) {
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && t.length > 0 ? $d(t, e) : t;
}
function fb({
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
function pb({
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
function hb({
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
const db = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, mb = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function Od(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (p) => p.toString() : (p) => encodeURIComponent(p), l = c(t);
  if (typeof a > "u" && s)
    return [[l, ""]];
  if (eu(a) || Ed(a))
    return [[l, a]];
  if (i)
    return zf(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((p) => p !== "undefined")) {
      const {
        style: p,
        explode: f,
        allowReserved: d
      } = o;
      return zf(t, a, r, {
        style: p,
        explode: f,
        allowReserved: d
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const d = typeof a == "string" ? a : JSON.stringify(a), u = c(d), m = new Cc(u, "blob", {
          type: o.contentType
        });
        return [[l, m]];
      }
      const p = c(String(a)), f = new Cc(p, "blob", {
        type: o.contentType
      });
      return [[l, f]];
    }
    return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) && a.every((p) => typeof p != "object") ? [[l, a.map(c).join(",")]] : [[l, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) ? n === "multi" ? [[l, a.map(c)]] : [[l, a.map(c).join(mb[n || "csv"])]] : [[l, ""]];
}
function zf(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (l) => je(l, o), c = r ? (l) => l : (l) => a(l);
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(db[s])]] : s === "deepObject" ? Object.keys(e).map((l) => [c(`${t}[${l}]`), a(e[l])]) : i ? Object.keys(e).map((l) => [c(l), a(e[l])]) : [[c(t), Object.keys(e).map((l) => [`${c(l)},${a(e[l])}`]).join(",")]];
}
function vb(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of Od(r, n, !0))
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
const yb = (t, {
  encode: e = !0
} = {}) => {
  const r = (i, o, a) => (a == null ? i.append(o, "") : Array.isArray(a) ? a.reduce((c, l) => r(i, o, l), i) : a instanceof Date ? i.append(o, a.toISOString()) : typeof a == "object" ? Object.entries(a).reduce((c, [l, p]) => r(i, `${o}[${l}]`, p), i) : i.append(o, a), i), n = Object.entries(t).reduce((i, [o, a]) => r(i, o, a), new URLSearchParams()), s = String(n);
  return e ? s : decodeURIComponent(s);
};
function Gf(t) {
  const e = Object.keys(t).reduce((r, n) => {
    for (const [s, i] of Od(n, t[n]))
      i instanceof Cc ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return yb(e, {
    encode: !1
  });
}
function ru(t = {}) {
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
      return eu(c) || Ed(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = vb(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = Gf(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const l = new URLSearchParams(o);
      Object.keys(r).forEach((f) => l.delete(f)), a = String(l);
    }
    const c = s(a, Gf(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Sd(t) {
  return typeof t > "u" || t === null;
}
function gb(t) {
  return typeof t == "object" && t !== null;
}
function bb(t) {
  return Array.isArray(t) ? t : Sd(t) ? [] : [t];
}
function xb(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function wb(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function Eb(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var $b = Sd, Ob = gb, Sb = bb, Ab = wb, Pb = Eb, jb = xb, Ee = {
  isNothing: $b,
  isObject: Ob,
  toArray: Sb,
  repeat: Ab,
  isNegativeZero: Pb,
  extend: jb
};
function Ad(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function In(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Ad(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
In.prototype = Object.create(Error.prototype);
In.prototype.constructor = In;
In.prototype.toString = function(e) {
  return this.name + ": " + Ad(this, e);
};
var De = In;
function Ha(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function qa(t, e) {
  return Ee.repeat(" ", e - t.length) + t;
}
function Tb(t, e) {
  if (e = Object.create(e || null), !t.buffer) return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, l, p = Math.min(t.line + e.linesAfter, s.length).toString().length, f = e.maxLength - (e.indent + p + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    l = Ha(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      f
    ), a = Ee.repeat(" ", e.indent) + qa((t.line - c + 1).toString(), p) + " | " + l.str + `
` + a;
  for (l = Ha(t.buffer, n[o], s[o], t.position, f), a += Ee.repeat(" ", e.indent) + qa((t.line + 1).toString(), p) + " | " + l.str + `
`, a += Ee.repeat("-", e.indent + p + 3 + l.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    l = Ha(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      f
    ), a += Ee.repeat(" ", e.indent) + qa((t.line + c + 1).toString(), p) + " | " + l.str + `
`;
  return a.replace(/\n$/, "");
}
var _b = Tb, Cb = [
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
], Rb = [
  "scalar",
  "sequence",
  "mapping"
];
function Ib(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(n) {
      e[String(n)] = r;
    });
  }), e;
}
function Mb(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (Cb.indexOf(r) === -1)
      throw new De('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = Ib(e.styleAliases || null), Rb.indexOf(this.kind) === -1)
    throw new De('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Te = Mb;
function Kf(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function Fb() {
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
function Rc(t) {
  return this.extend(t);
}
Rc.prototype.extend = function(e) {
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
  var s = Object.create(Rc.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = Kf(s, "implicit"), s.compiledExplicit = Kf(s, "explicit"), s.compiledTypeMap = Fb(s.compiledImplicit, s.compiledExplicit), s;
};
var Pd = Rc, jd = new Te("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), Td = new Te("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), _d = new Te("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), Cd = new Pd({
  explicit: [
    jd,
    Td,
    _d
  ]
});
function kb(t) {
  if (t === null) return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function Db() {
  return null;
}
function Nb(t) {
  return t === null;
}
var Rd = new Te("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: kb,
  construct: Db,
  predicate: Nb,
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
function Lb(t) {
  if (t === null) return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function Vb(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function Bb(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var Id = new Te("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Lb,
  construct: Vb,
  predicate: Bb,
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
function Ub(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function Hb(t) {
  return 48 <= t && t <= 55;
}
function qb(t) {
  return 48 <= t && t <= 57;
}
function zb(t) {
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
          if (!Ub(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!Hb(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < e; r++)
    if (s = t[r], s !== "_") {
      if (!qb(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function Gb(t) {
  var e = t, r = 1, n;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), n = e[0], (n === "-" || n === "+") && (n === "-" && (r = -1), e = e.slice(1), n = e[0]), e === "0") return 0;
  if (n === "0") {
    if (e[1] === "b") return r * parseInt(e.slice(2), 2);
    if (e[1] === "x") return r * parseInt(e.slice(2), 16);
    if (e[1] === "o") return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function Kb(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Ee.isNegativeZero(t);
}
var Md = new Te("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: zb,
  construct: Gb,
  predicate: Kb,
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
}), Jb = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Wb(t) {
  return !(t === null || !Jb.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function Yb(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var Xb = /^[-+]?[0-9]+e/;
function Qb(t, e) {
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
  else if (Ee.isNegativeZero(t))
    return "-0.0";
  return r = t.toString(10), Xb.test(r) ? r.replace("e", ".e") : r;
}
function Zb(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Ee.isNegativeZero(t));
}
var Fd = new Te("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Wb,
  construct: Yb,
  predicate: Zb,
  represent: Qb,
  defaultStyle: "lowercase"
}), kd = Cd.extend({
  implicit: [
    Rd,
    Id,
    Md,
    Fd
  ]
}), Dd = kd, Nd = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Ld = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function ex(t) {
  return t === null ? !1 : Nd.exec(t) !== null || Ld.exec(t) !== null;
}
function tx(t) {
  var e, r, n, s, i, o, a, c = 0, l = null, p, f, d;
  if (e = Nd.exec(t), e === null && (e = Ld.exec(t)), e === null) throw new Error("Date resolve error");
  if (r = +e[1], n = +e[2] - 1, s = +e[3], !e[4])
    return new Date(Date.UTC(r, n, s));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (p = +e[10], f = +(e[11] || 0), l = (p * 60 + f) * 6e4, e[9] === "-" && (l = -l)), d = new Date(Date.UTC(r, n, s, i, o, a, c)), l && d.setTime(d.getTime() - l), d;
}
function rx(t) {
  return t.toISOString();
}
var Vd = new Te("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: ex,
  construct: tx,
  instanceOf: Date,
  represent: rx
});
function nx(t) {
  return t === "<<" || t === null;
}
var Bd = new Te("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: nx
}), nu = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function sx(t) {
  if (t === null) return !1;
  var e, r, n = 0, s = t.length, i = nu;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0) return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function ix(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = nu, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function ox(t) {
  var e = "", r = 0, n, s, i = t.length, o = nu;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function ax(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Ud = new Te("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: sx,
  construct: ix,
  predicate: ax,
  represent: ox
}), cx = Object.prototype.hasOwnProperty, lx = Object.prototype.toString;
function ux(t) {
  if (t === null) return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, lx.call(s) !== "[object Object]") return !1;
    for (i in s)
      if (cx.call(s, i))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (e.indexOf(i) === -1) e.push(i);
    else return !1;
  }
  return !0;
}
function fx(t) {
  return t !== null ? t : [];
}
var Hd = new Te("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: ux,
  construct: fx
}), px = Object.prototype.toString;
function hx(t) {
  if (t === null) return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], px.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1)) return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function dx(t) {
  if (t === null) return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var qd = new Te("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: hx,
  construct: dx
}), mx = Object.prototype.hasOwnProperty;
function vx(t) {
  if (t === null) return !0;
  var e, r = t;
  for (e in r)
    if (mx.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function yx(t) {
  return t !== null ? t : {};
}
var zd = new Te("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: vx,
  construct: yx
}), su = Dd.extend({
  implicit: [
    Vd,
    Bd
  ],
  explicit: [
    Ud,
    Hd,
    qd,
    zd
  ]
}), Qt = Object.prototype.hasOwnProperty, si = 1, Gd = 2, Kd = 3, ii = 4, za = 1, gx = 2, Jf = 3, bx = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, xx = /[\x85\u2028\u2029]/, wx = /[,\[\]\{\}]/, Jd = /^(?:!|!!|![a-z\-]+!)$/i, Wd = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Wf(t) {
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
function Ex(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function $x(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function Ox(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function Yf(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function Sx(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var Yd = new Array(256), Xd = new Array(256);
for (var Ir = 0; Ir < 256; Ir++)
  Yd[Ir] = Yf(Ir) ? 1 : 0, Xd[Ir] = Yf(Ir);
function Ax(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || su, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Qd(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = _b(r), new De(e, r);
}
function N(t, e) {
  throw Qd(t, e);
}
function oi(t, e) {
  t.onWarning && t.onWarning.call(null, Qd(t, e));
}
var Xf = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && N(e, "duplication of %YAML directive"), n.length !== 1 && N(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && N(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && N(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && oi(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && N(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], Jd.test(s) || N(e, "ill-formed tag handle (first argument) of the TAG directive"), Qt.call(e.tagMap, s) && N(e, 'there is a previously declared suffix for "' + s + '" tag handle'), Wd.test(i) || N(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      N(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function Xt(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || N(t, "expected valid JSON character");
    else bx.test(a) && N(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function Qf(t, e, r, n) {
  var s, i, o, a;
  for (Ee.isObject(r) || N(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], Qt.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function Vr(t, e, r, n, s, i, o, a, c) {
  var l, p;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), l = 0, p = s.length; l < p; l += 1)
      Array.isArray(s[l]) && N(t, "nested arrays are not supported inside keys"), typeof s == "object" && Wf(s[l]) === "[object Object]" && (s[l] = "[object Object]");
  if (typeof s == "object" && Wf(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (l = 0, p = i.length; l < p; l += 1)
        Qf(t, e, i[l], r);
    else
      Qf(t, e, i, r);
  else
    !t.json && !Qt.call(r, s) && Qt.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, N(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function iu(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : N(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function be(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; hr(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (mt(s))
      for (iu(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && oi(t, "deficient indentation"), n;
}
function Oo(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || Ue(r)));
}
function ou(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Ee.repeat(`
`, e - 1));
}
function Px(t, e, r) {
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
      if (t.position === t.lineStart && Oo(t) || r && Lr(u))
        break;
      if (mt(u))
        if (c = t.line, l = t.lineStart, p = t.lineIndent, be(t, !1, -1), t.lineIndent >= e) {
          a = !0, u = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = l, t.lineIndent = p;
          break;
        }
    }
    a && (Xt(t, i, o, !1), ou(t, t.line - c), i = o = t.position, a = !1), hr(u) || (o = t.position + 1), u = t.input.charCodeAt(++t.position);
  }
  return Xt(t, i, o, !1), t.result ? !0 : (t.kind = f, t.result = d, !1);
}
function jx(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (Xt(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else mt(r) ? (Xt(t, n, s, !0), ou(t, be(t, !1, e)), n = s = t.position) : t.position === t.lineStart && Oo(t) ? N(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  N(t, "unexpected end of the stream within a single quoted scalar");
}
function Tx(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return Xt(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (Xt(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), mt(a))
        be(t, !1, e);
      else if (a < 256 && Yd[a])
        t.result += Xd[a], t.position++;
      else if ((o = $x(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = Ex(a)) >= 0 ? i = (i << 4) + o : N(t, "expected hexadecimal character");
        t.result += Sx(i), t.position++;
      } else
        N(t, "unknown escape sequence");
      r = n = t.position;
    } else mt(a) ? (Xt(t, r, n, !0), ou(t, be(t, !1, e)), r = n = t.position) : t.position === t.lineStart && Oo(t) ? N(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  N(t, "unexpected end of the stream within a double quoted scalar");
}
function _x(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, l, p, f, d, u, m = /* @__PURE__ */ Object.create(null), h, y, g, v;
  if (v = t.input.charCodeAt(t.position), v === 91)
    p = 93, u = !1, a = [];
  else if (v === 123)
    p = 125, u = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), v = t.input.charCodeAt(++t.position); v !== 0; ) {
    if (be(t, !0, e), v = t.input.charCodeAt(t.position), v === p)
      return t.position++, t.tag = o, t.anchor = c, t.kind = u ? "mapping" : "sequence", t.result = a, !0;
    r ? v === 44 && N(t, "expected the node content, but found ','") : N(t, "missed comma between flow collection entries"), y = h = g = null, f = d = !1, v === 63 && (l = t.input.charCodeAt(t.position + 1), Ue(l) && (f = d = !0, t.position++, be(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, Jr(t, e, si, !1, !0), y = t.tag, h = t.result, be(t, !0, e), v = t.input.charCodeAt(t.position), (d || t.line === n) && v === 58 && (f = !0, v = t.input.charCodeAt(++t.position), be(t, !0, e), Jr(t, e, si, !1, !0), g = t.result), u ? Vr(t, a, m, y, h, g, n, s, i) : f ? a.push(Vr(t, null, m, y, h, g, n, s, i)) : a.push(h), be(t, !0, e), v = t.input.charCodeAt(t.position), v === 44 ? (r = !0, v = t.input.charCodeAt(++t.position)) : r = !1;
  }
  N(t, "unexpected end of the stream within a flow collection");
}
function Cx(t, e) {
  var r, n, s = za, i = !1, o = !1, a = e, c = 0, l = !1, p, f;
  if (f = t.input.charCodeAt(t.position), f === 124)
    n = !1;
  else if (f === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; f !== 0; )
    if (f = t.input.charCodeAt(++t.position), f === 43 || f === 45)
      za === s ? s = f === 43 ? Jf : gx : N(t, "repeat of a chomping mode identifier");
    else if ((p = Ox(f)) >= 0)
      p === 0 ? N(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? N(t, "repeat of an indentation width identifier") : (a = e + p - 1, o = !0);
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
    for (iu(t), t.lineIndent = 0, f = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && f === 32; )
      t.lineIndent++, f = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), mt(f)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === Jf ? t.result += Ee.repeat(`
`, i ? 1 + c : c) : s === za && i && (t.result += `
`);
      break;
    }
    for (n ? hr(f) ? (l = !0, t.result += Ee.repeat(`
`, i ? 1 + c : c)) : l ? (l = !1, t.result += Ee.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += Ee.repeat(`
`, c) : t.result += Ee.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !mt(f) && f !== 0; )
      f = t.input.charCodeAt(++t.position);
    Xt(t, r, t.position, !1);
  }
  return !0;
}
function Zf(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, N(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !Ue(o)))); ) {
    if (a = !0, t.position++, be(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, Jr(t, e, Kd, !1, !0), i.push(t.result), be(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      N(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function Rx(t, e, r) {
  var n, s, i, o, a, c, l = t.tag, p = t.anchor, f = {}, d = /* @__PURE__ */ Object.create(null), u = null, m = null, h = null, y = !1, g = !1, v;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = f), v = t.input.charCodeAt(t.position); v !== 0; ) {
    if (!y && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, N(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, (v === 63 || v === 58) && Ue(n))
      v === 63 ? (y && (Vr(t, f, d, u, m, null, o, a, c), u = m = h = null), g = !0, y = !0, s = !0) : y ? (y = !1, s = !0) : N(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, v = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !Jr(t, r, Gd, !1, !0))
        break;
      if (t.line === i) {
        for (v = t.input.charCodeAt(t.position); hr(v); )
          v = t.input.charCodeAt(++t.position);
        if (v === 58)
          v = t.input.charCodeAt(++t.position), Ue(v) || N(t, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Vr(t, f, d, u, m, null, o, a, c), u = m = h = null), g = !0, y = !1, s = !1, u = t.tag, m = t.result;
        else if (g)
          N(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = l, t.anchor = p, !0;
      } else if (g)
        N(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = l, t.anchor = p, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (y && (o = t.line, a = t.lineStart, c = t.position), Jr(t, e, ii, !0, s) && (y ? m = t.result : h = t.result), y || (Vr(t, f, d, u, m, h, o, a, c), u = m = h = null), be(t, !0, -1), v = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && v !== 0)
      N(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return y && Vr(t, f, d, u, m, null, o, a, c), g && (t.tag = l, t.anchor = p, t.kind = "mapping", t.result = f), g;
}
function Ix(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33) return !1;
  if (t.tag !== null && N(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : N(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Ue(o); )
      o === 33 && (n ? N(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), Jd.test(s) || N(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), wx.test(i) && N(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !Wd.test(i) && N(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    N(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : Qt.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : N(t, 'undeclared tag handle "' + s + '"'), !0;
}
function Mx(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38) return !1;
  for (t.anchor !== null && N(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !Ue(r) && !Lr(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && N(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function Fx(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42) return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !Ue(n) && !Lr(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && N(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), Qt.call(t.anchorMap, r) || N(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], be(t, !0, -1), !0;
}
function Jr(t, e, r, n, s) {
  var i, o, a, c = 1, l = !1, p = !1, f, d, u, m, h, y;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = ii === r || Kd === r, n && be(t, !0, -1) && (l = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; Ix(t) || Mx(t); )
      be(t, !0, -1) ? (l = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = l || s), (c === 1 || ii === r) && (si === r || Gd === r ? h = e : h = e + 1, y = t.position - t.lineStart, c === 1 ? a && (Zf(t, y) || Rx(t, y, h)) || _x(t, h) ? p = !0 : (o && Cx(t, h) || jx(t, h) || Tx(t, h) ? p = !0 : Fx(t) ? (p = !0, (t.tag !== null || t.anchor !== null) && N(t, "alias node should not have any properties")) : Px(t, h, si === r) && (p = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (p = a && Zf(t, y))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && N(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), f = 0, d = t.implicitTypes.length; f < d; f += 1)
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
    m || N(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && N(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : N(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || p;
}
function kx(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (be(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !Ue(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && N(t, "directive name must not be less than one character in length"); o !== 0; ) {
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
    o !== 0 && iu(t), Qt.call(Xf, n) ? Xf[n](t, n, s) : oi(t, 'unknown document directive "' + n + '"');
  }
  if (be(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, be(t, !0, -1)) : i && N(t, "directives end mark is expected"), Jr(t, t.lineIndent - 1, ii, !1, !0), be(t, !0, -1), t.checkLineBreaks && xx.test(t.input.slice(e, t.position)) && oi(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && Oo(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, be(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    N(t, "end of the stream or a document separator is expected");
  else
    return;
}
function Zd(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new Ax(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, N(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    kx(r);
  return r.documents;
}
function Dx(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = Zd(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function Nx(t, e) {
  var r = Zd(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new De("expected a single document in the stream, but found more");
  }
}
var Lx = Dx, Vx = Nx, em = {
  loadAll: Lx,
  load: Vx
}, tm = Object.prototype.toString, rm = Object.prototype.hasOwnProperty, au = 65279, Bx = 9, Mn = 10, Ux = 13, Hx = 32, qx = 33, zx = 34, Ic = 35, Gx = 37, Kx = 38, Jx = 39, Wx = 42, nm = 44, Yx = 45, ai = 58, Xx = 61, Qx = 62, Zx = 63, ew = 64, sm = 91, im = 93, tw = 96, om = 123, rw = 124, am = 125, Re = {};
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
var nw = [
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
], sw = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function iw(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null) return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && rm.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function ow(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new De("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Ee.repeat("0", n - e.length) + e;
}
var aw = 1, Fn = 2;
function cw(t) {
  this.schema = t.schema || su, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Ee.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = iw(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? Fn : aw, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function ep(t, e) {
  for (var r = Ee.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function Mc(t, e) {
  return `
` + Ee.repeat(" ", t.indent * e);
}
function lw(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function ci(t) {
  return t === Hx || t === Bx;
}
function kn(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== au || 65536 <= t && t <= 1114111;
}
function tp(t) {
  return kn(t) && t !== au && t !== Ux && t !== Mn;
}
function rp(t, e, r) {
  var n = tp(t), s = n && !ci(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== nm && t !== sm && t !== im && t !== om && t !== am) && t !== Ic && !(e === ai && !s) || tp(e) && !ci(e) && t === Ic || e === ai && s
  );
}
function uw(t) {
  return kn(t) && t !== au && !ci(t) && t !== Yx && t !== Zx && t !== ai && t !== nm && t !== sm && t !== im && t !== om && t !== am && t !== Ic && t !== Kx && t !== Wx && t !== qx && t !== rw && t !== Xx && t !== Qx && t !== Jx && t !== zx && t !== Gx && t !== ew && t !== tw;
}
function fw(t) {
  return !ci(t) && t !== ai;
}
function Pn(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function cm(t) {
  var e = /^\n* /;
  return e.test(t);
}
var lm = 1, Fc = 2, um = 3, fm = 4, Nr = 5;
function pw(t, e, r, n, s, i, o, a) {
  var c, l = 0, p = null, f = !1, d = !1, u = n !== -1, m = -1, h = uw(Pn(t, 0)) && fw(Pn(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; l >= 65536 ? c += 2 : c++) {
      if (l = Pn(t, c), !kn(l))
        return Nr;
      h = h && rp(l, p, a), p = l;
    }
  else {
    for (c = 0; c < t.length; l >= 65536 ? c += 2 : c++) {
      if (l = Pn(t, c), l === Mn)
        f = !0, u && (d = d || // Foldable line = too long, and not more-indented.
        c - m - 1 > n && t[m + 1] !== " ", m = c);
      else if (!kn(l))
        return Nr;
      h = h && rp(l, p, a), p = l;
    }
    d = d || u && c - m - 1 > n && t[m + 1] !== " ";
  }
  return !f && !d ? h && !o && !s(t) ? lm : i === Fn ? Nr : Fc : r > 9 && cm(t) ? Nr : o ? i === Fn ? Nr : Fc : d ? fm : um;
}
function hw(t, e, r, n, s) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === Fn ? '""' : "''";
    if (!t.noCompatMode && (nw.indexOf(e) !== -1 || sw.test(e)))
      return t.quotingType === Fn ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(l) {
      return lw(t, l);
    }
    switch (pw(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !n,
      s
    )) {
      case lm:
        return e;
      case Fc:
        return "'" + e.replace(/'/g, "''") + "'";
      case um:
        return "|" + np(e, t.indent) + sp(ep(e, i));
      case fm:
        return ">" + np(e, t.indent) + sp(ep(dw(e, o), i));
      case Nr:
        return '"' + mw(e) + '"';
      default:
        throw new De("impossible error: invalid scalar style");
    }
  }();
}
function np(t, e) {
  var r = cm(t) ? String(e) : "", n = t[t.length - 1] === `
`, s = n && (t[t.length - 2] === `
` || t === `
`), i = s ? "+" : n ? "" : "-";
  return r + i + `
`;
}
function sp(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function dw(t, e) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var l = t.indexOf(`
`);
    return l = l !== -1 ? l : t.length, r.lastIndex = l, ip(t.slice(0, l), e);
  }(), s = t[0] === `
` || t[0] === " ", i, o; o = r.exec(t); ) {
    var a = o[1], c = o[2];
    i = c[0] === " ", n += a + (!s && !i && c !== "" ? `
` : "") + ip(c, e), s = i;
  }
  return n;
}
function ip(t, e) {
  if (t === "" || t[0] === " ") return t;
  for (var r = / [^ ]/g, n, s = 0, i, o = 0, a = 0, c = ""; n = r.exec(t); )
    a = n.index, a - s > e && (i = o > s ? o : a, c += `
` + t.slice(s, i), s = i + 1), o = a;
  return c += `
`, t.length - s > e && o > s ? c += t.slice(s, o) + `
` + t.slice(o + 1) : c += t.slice(s), c.slice(1);
}
function mw(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = Pn(t, s), n = Re[r], !n && kn(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || ow(r);
  return e;
}
function vw(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (Tt(t, e, a, !1, !1) || typeof a > "u" && Tt(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function op(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (Tt(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Tt(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += Mc(t, e)), t.dump && Mn === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function yw(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, l, p;
  for (o = 0, a = i.length; o < a; o += 1)
    p = "", n !== "" && (p += ", "), t.condenseFlow && (p += '"'), c = i[o], l = r[c], t.replacer && (l = t.replacer.call(r, c, l)), Tt(t, e, c, !1, !1) && (t.dump.length > 1024 && (p += "? "), p += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Tt(t, e, l, !1, !1) && (p += t.dump, n += p));
  t.tag = s, t.dump = "{" + n + "}";
}
function gw(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, l, p, f, d;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new De("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    d = "", (!n || s !== "") && (d += Mc(t, e)), l = o[a], p = r[l], t.replacer && (p = t.replacer.call(r, l, p)), Tt(t, e + 1, l, !0, !0, !0) && (f = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, f && (t.dump && Mn === t.dump.charCodeAt(0) ? d += "?" : d += "? "), d += t.dump, f && (d += Mc(t, e)), Tt(t, e + 1, p, !0, f) && (t.dump && Mn === t.dump.charCodeAt(0) ? d += ":" : d += ": ", d += t.dump, s += d));
  t.tag = i, t.dump = s || "{}";
}
function ap(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, tm.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (rm.call(a.represent, c))
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
  t.tag = null, t.dump = r, ap(t, r, !1) || ap(t, r, !0);
  var a = tm.call(t.dump), c = n, l;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var p = a === "[object Object]" || a === "[object Array]", f, d;
  if (p && (f = t.duplicates.indexOf(r), d = f !== -1), (t.tag !== null && t.tag !== "?" || d || t.indent !== 2 && e > 0) && (s = !1), d && t.usedDuplicates[f])
    t.dump = "*ref_" + f;
  else {
    if (p && d && !t.usedDuplicates[f] && (t.usedDuplicates[f] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (gw(t, e, t.dump, s), d && (t.dump = "&ref_" + f + t.dump)) : (yw(t, e, t.dump), d && (t.dump = "&ref_" + f + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? op(t, e - 1, t.dump, s) : op(t, e, t.dump, s), d && (t.dump = "&ref_" + f + t.dump)) : (vw(t, e, t.dump), d && (t.dump = "&ref_" + f + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && hw(t, t.dump, e, i, c);
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
function bw(t, e) {
  var r = [], n = [], s, i;
  for (kc(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function kc(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        kc(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        kc(t[n[s]], e, r);
}
function xw(t, e) {
  e = e || {};
  var r = new cw(e);
  r.noRefs || bw(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), Tt(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var ww = xw, Ew = {
  dump: ww
};
function cu(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var $w = Te, Ow = Pd, Sw = Cd, li = kd, Aw = Dd, Pw = su, jw = em.load, Tw = em.loadAll, _w = Ew.dump, Cw = De, Rw = {
  binary: Ud,
  float: Fd,
  map: _d,
  null: Rd,
  pairs: qd,
  set: zd,
  timestamp: Vd,
  bool: Id,
  int: Md,
  merge: Bd,
  omap: Hd,
  seq: Td,
  str: jd
}, Iw = cu("safeLoad", "load"), Mw = cu("safeLoadAll", "loadAll"), Fw = cu("safeDump", "dump"), Wr = {
  Type: $w,
  Schema: Ow,
  FAILSAFE_SCHEMA: Sw,
  JSON_SCHEMA: li,
  CORE_SCHEMA: Aw,
  DEFAULT_SCHEMA: Pw,
  load: jw,
  loadAll: Tw,
  dump: _w,
  YAMLException: Cw,
  types: Rw,
  safeLoad: Iw,
  safeLoadAll: Mw,
  safeDump: Fw
};
const kw = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function Dw(t, e) {
  return e && (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0) ? JSON.parse(t) : Wr.load(t);
}
function Nw(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function pm(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = Nw(n), e), {});
}
function hm(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: pm(t.headers)
  }, s = n.headers["content-type"], i = r || kw(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = Dw(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
async function Yr(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, e = ru(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await hm(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
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
function Lw(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), n = ru(n), n = e(n), r(t(n)));
}
function dm(t, e = {}) {
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
      Accept: xd
    },
    credentials: s
  }).then((o) => o.body);
}
const lu = (t) => {
  var e, r;
  const {
    baseDoc: n,
    url: s
  } = t, i = (e = n ?? s) !== null && e !== void 0 ? e : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(i, globalThis.document.baseURI)) : i;
}, mm = (t) => {
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
var Vw = /* @__PURE__ */ function() {
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
}(), Bw = Object.prototype.hasOwnProperty;
function Dc(t, e) {
  return Bw.call(t, e);
}
function Nc(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var n = [];
  for (var s in t)
    Dc(t, s) && n.push(s);
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
function Lc(t) {
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
function vm(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Vc(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (Vc(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = Nc(t), s = n.length, i = 0; i < s; i++)
        if (Vc(t[n[i]]))
          return !0;
    }
  }
  return !1;
}
function cp(t, e) {
  var r = [t];
  for (var n in e) {
    var s = typeof e[n] == "object" ? JSON.stringify(e[n], null, 2) : e[n];
    typeof s < "u" && r.push(n + ": " + s);
  }
  return r.join(`
`);
}
var ym = (
  /** @class */
  function(t) {
    Vw(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, cp(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = cp(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  }(Error)
), me = ym, Uw = ze, Br = {
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
}, Hw = {
  add: function(t, e, r) {
    return Lc(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
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
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : ui(e, 0)), e.path === "") {
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
    for (typeof r == "function" ? m = r : m = ui; ; ) {
      if (u = c[p], u && u.indexOf("~") != -1 && (u = vm(u)), s && (u == "__proto__" || u == "prototype" && p > 0 && c[p - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && d === void 0 && (l[u] === void 0 ? d = c.slice(0, p).join("/") : p == f - 1 && (d = e.path), d !== void 0 && m(e, 0, t, d)), p++, Array.isArray(l)) {
        if (u === "-")
          u = l.length;
        else {
          if (r && !Lc(u))
            throw new me("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          Lc(u) && (u = ~~u);
        }
        if (p >= f) {
          if (r && e.op === "add" && u > l.length)
            throw new me("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = Hw[e.op].call(e, l, u, t);
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
function qw(t, e, r) {
  var n = dr(t, e);
  if (n.test === !1)
    throw new me("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function ui(t, e, r, n) {
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
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && Vc(t.value))
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
        var o = { op: "_get", path: t.from, value: void 0 }, a = gm([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new me("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else throw new me("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function gm(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new me("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      Wt(ze(e), ze(t), r || !0);
    else {
      r = r || ui;
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
const zw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: me,
  _areEquals: Nn,
  applyOperation: dr,
  applyPatch: Wt,
  applyReducer: qw,
  deepClone: Uw,
  getValueByPointer: Dn,
  validate: gm,
  validator: ui
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var uu = /* @__PURE__ */ new WeakMap(), Gw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  }()
), Kw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  }()
);
function Jw(t) {
  return uu.get(t);
}
function Ww(t, e) {
  return t.observers.get(e);
}
function Yw(t, e) {
  t.observers.delete(e.callback);
}
function Xw(t, e) {
  e.unobserve();
}
function Qw(t, e) {
  var r = [], n, s = Jw(t);
  if (!s)
    s = new Gw(t), uu.set(t, s);
  else {
    var i = Ww(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = ze(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      Bc(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    Bc(n), clearTimeout(n.next), Yw(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new Kw(e, n)), n;
}
function Bc(t, e) {
  e === void 0 && (e = !1);
  var r = uu.get(t.object);
  fu(r.value, t.object, t.patches, "", e), t.patches.length && Wt(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function fu(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = Nc(e), o = Nc(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var l = o[c], p = t[l];
      if (Dc(e, l) && !(e[l] === void 0 && p !== void 0 && Array.isArray(e) === !1)) {
        var f = e[l];
        typeof p == "object" && p != null && typeof f == "object" && f != null && Array.isArray(p) === Array.isArray(f) ? fu(p, f, r, n + "/" + cr(l), s) : p !== f && (s && r.push({ op: "test", path: n + "/" + cr(l), value: ze(p) }), r.push({ op: "replace", path: n + "/" + cr(l), value: ze(f) }));
      } else Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + cr(l), value: ze(p) }), r.push({ op: "remove", path: n + "/" + cr(l) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var l = i[c];
        !Dc(t, l) && e[l] !== void 0 && r.push({ op: "add", path: n + "/" + cr(l), value: ze(e[l]) });
      }
  }
}
function Zw(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return fu(t, e, n, "", r), n;
}
const eE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: Zw,
  generate: Bc,
  observe: Qw,
  unobserve: Xw
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, zw, eE, {
  JsonPatchError: ym,
  deepClone: ze,
  escapePathComponent: cr,
  unescapePathComponent: vm
});
var tE = function(e) {
  return rE(e) && !nE(e);
};
function rE(t) {
  return !!t && typeof t == "object";
}
function nE(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || oE(t);
}
var sE = typeof Symbol == "function" && Symbol.for, iE = sE ? Symbol.for("react.element") : 60103;
function oE(t) {
  return t.$$typeof === iE;
}
function aE(t) {
  return Array.isArray(t) ? [] : {};
}
function Ln(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Xr(aE(t), t, e) : t;
}
function cE(t, e, r) {
  return t.concat(e).map(function(n) {
    return Ln(n, r);
  });
}
function lE(t, e) {
  if (!e.customMerge)
    return Xr;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : Xr;
}
function uE(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function lp(t) {
  return Object.keys(t).concat(uE(t));
}
function bm(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function fE(t, e) {
  return bm(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function pE(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && lp(t).forEach(function(s) {
    n[s] = Ln(t[s], r);
  }), lp(e).forEach(function(s) {
    fE(t, s) || (bm(t, s) && r.isMergeableObject(e[s]) ? n[s] = lE(s, r)(t[s], e[s], r) : n[s] = Ln(e[s], r));
  }), n;
}
function Xr(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || cE, r.isMergeableObject = r.isMergeableObject || tE, r.cloneUnlessOtherwiseSpecified = Ln;
  var n = Array.isArray(e), s = Array.isArray(t), i = n === s;
  return i ? n ? r.arrayMerge(t, e, r) : pE(t, e, r) : Ln(e, r);
}
Xr.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, s) {
    return Xr(n, s, r);
  }, {});
};
var hE = Xr, dE = hE;
const mE = /* @__PURE__ */ $o(dE), te = {
  add: yE,
  replace: Js,
  remove: gE,
  merge: bE,
  mergeDeep: xE,
  context: wE,
  getIn: SE,
  applyPatch: vE,
  parentPathMatch: OE,
  flatten: Kn,
  fullyNormalizeArray: AE,
  normalizeArray: wm,
  isPromise: PE,
  forEachNew: EE,
  forEachNewPrimitive: $E,
  isJsonPatch: Om,
  isContextPatch: _E,
  isPatch: So,
  isMutation: Sm,
  isAdditiveMutation: fi,
  isGenerator: TE,
  isFunction: $m,
  isObject: mr,
  isError: jE
};
function vE(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && up(e.path)
  }, e.op === "merge") {
    const n = Ga(t, e.path);
    Object.assign(n, e.value), Wt(t, [Js(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = Ga(t, e.path), s = mE(n, e.value);
    t = Wt(t, [Js(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && mr(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${up(i)}`,
      value: e.value[i]
    }), s), []);
    Wt(t, n);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: n
    } = e;
    r.allowMetaPatches && e.meta && fi(e) && (Array.isArray(e.value) || mr(e.value)) && (n = {
      ...n,
      ...e.meta
    }), t = n;
  } else if (Wt(t, [e]), r.allowMetaPatches && e.meta && fi(e) && (Array.isArray(e.value) || mr(e.value))) {
    const s = {
      ...Ga(t, e.path),
      ...e.meta
    };
    Wt(t, [Js(e.path, s)]);
  }
  return t;
}
function up(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function yE(t, e) {
  return {
    op: "add",
    path: t,
    value: e
  };
}
function Js(t, e, r) {
  return {
    op: "replace",
    path: t,
    value: e,
    meta: r
  };
}
function gE(t) {
  return {
    op: "remove",
    path: t
  };
}
function bE(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function xE(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function wE(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function EE(t, e) {
  try {
    return xm(t, Hc, e);
  } catch (r) {
    return r;
  }
}
function $E(t, e) {
  try {
    return xm(t, Uc, e);
  } catch (r) {
    return r;
  }
}
function xm(t, e, r) {
  const n = t.filter(fi).map((o) => e(o.value, r, o.path)) || [], s = Kn(n);
  return Em(s);
}
function Uc(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => Uc(n, e, r.concat(s))) : mr(t) ? Object.keys(t).map((n) => Uc(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function Hc(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => Hc(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (mr(t)) {
    const s = Object.keys(t).map((i) => Hc(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = Kn(n), n;
}
function OE(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, n = e.length; r < n; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function SE(t, e) {
  return e.reduce((r, n) => typeof n < "u" && r ? r[n] : r, t);
}
function AE(t) {
  return Em(Kn(wm(t)));
}
function wm(t) {
  return Array.isArray(t) ? t : [t];
}
function Kn(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? Kn(e) : e));
}
function Em(t) {
  return t.filter((e) => typeof e < "u");
}
function mr(t) {
  return t && typeof t == "object";
}
function PE(t) {
  return mr(t) && $m(t.then);
}
function $m(t) {
  return t && typeof t == "function";
}
function jE(t) {
  return t instanceof Error;
}
function Om(t) {
  if (So(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function TE(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function Sm(t) {
  return Om(t) || So(t) && t.type === "mutation";
}
function fi(t) {
  return Sm(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function _E(t) {
  return So(t) && t.type === "context";
}
function So(t) {
  return t && typeof t == "object";
}
function Ga(t, e) {
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
}, CE = ct, Ao = !CE(function() {
  var t = (function() {
  }).bind();
  return typeof t != "function" || t.hasOwnProperty("prototype");
}), RE = Ao, Am = Function.prototype, fp = Am.apply, pp = Am.call, pu = typeof Reflect == "object" && Reflect.apply || (RE ? pp.bind(fp) : function() {
  return pp.apply(fp, arguments);
}), Pm = Ao, jm = Function.prototype, qc = jm.call, IE = Pm && jm.bind.bind(qc, qc), lt = Pm ? IE : function(t) {
  return function() {
    return qc.apply(t, arguments);
  };
}, Tm = lt, ME = Tm({}.toString), FE = Tm("".slice), hu = function(t) {
  return FE(ME(t), 8, -1);
}, kE = hu, DE = lt, _m = function(t) {
  if (kE(t) === "Function") return DE(t);
}, Ka = typeof document == "object" && document.all, Ze = typeof Ka > "u" && Ka !== void 0 ? function(t) {
  return typeof t == "function" || t === Ka;
} : function(t) {
  return typeof t == "function";
}, du = {}, NE = ct, er = !NE(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), LE = Ao, Ds = Function.prototype.call, wr = LE ? Ds.bind(Ds) : function() {
  return Ds.apply(Ds, arguments);
}, Cm = {}, Rm = {}.propertyIsEnumerable, Im = Object.getOwnPropertyDescriptor, VE = Im && !Rm.call({ 1: 2 }, 1);
Cm.f = VE ? function(e) {
  var r = Im(this, e);
  return !!r && r.enumerable;
} : Rm;
var Jn = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, BE = lt, UE = ct, HE = hu, Ja = Object, qE = BE("".split), zE = UE(function() {
  return !Ja("z").propertyIsEnumerable(0);
}) ? function(t) {
  return HE(t) === "String" ? qE(t, "") : Ja(t);
} : Ja, mu = function(t) {
  return t == null;
}, GE = mu, KE = TypeError, Po = function(t) {
  if (GE(t)) throw new KE("Can't call method on " + t);
  return t;
}, JE = zE, WE = Po, Wn = function(t) {
  return JE(WE(t));
}, YE = Ze, xt = function(t) {
  return typeof t == "object" ? t !== null : YE(t);
}, vu = {}, Wa = vu, Ya = Ke, XE = Ze, hp = function(t) {
  return XE(t) ? t : void 0;
}, Yn = function(t, e) {
  return arguments.length < 2 ? hp(Wa[t]) || hp(Ya[t]) : Wa[t] && Wa[t][e] || Ya[t] && Ya[t][e];
}, QE = lt, jo = QE({}.isPrototypeOf), ZE = Ke, dp = ZE.navigator, mp = dp && dp.userAgent, e0 = mp ? String(mp) : "", Mm = Ke, Xa = e0, vp = Mm.process, yp = Mm.Deno, gp = vp && vp.versions || yp && yp.version, bp = gp && gp.v8, rt, pi;
bp && (rt = bp.split("."), pi = rt[0] > 0 && rt[0] < 4 ? 1 : +(rt[0] + rt[1]));
!pi && Xa && (rt = Xa.match(/Edge\/(\d+)/), (!rt || rt[1] >= 74) && (rt = Xa.match(/Chrome\/(\d+)/), rt && (pi = +rt[1])));
var t0 = pi, xp = t0, r0 = ct, n0 = Ke, s0 = n0.String, Fm = !!Object.getOwnPropertySymbols && !r0(function() {
  var t = Symbol("symbol detection");
  return !s0(t) || !(Object(t) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && xp && xp < 41;
}), i0 = Fm, km = i0 && !Symbol.sham && typeof Symbol.iterator == "symbol", o0 = Yn, a0 = Ze, c0 = jo, l0 = km, u0 = Object, Dm = l0 ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  var e = o0("Symbol");
  return a0(e) && c0(e.prototype, u0(t));
}, f0 = String, yu = function(t) {
  try {
    return f0(t);
  } catch {
    return "Object";
  }
}, p0 = Ze, h0 = yu, d0 = TypeError, To = function(t) {
  if (p0(t)) return t;
  throw new d0(h0(t) + " is not a function");
}, m0 = To, v0 = mu, gu = function(t, e) {
  var r = t[e];
  return v0(r) ? void 0 : m0(r);
}, Qa = wr, Za = Ze, ec = xt, y0 = TypeError, g0 = function(t, e) {
  var r, n;
  if (e === "string" && Za(r = t.toString) && !ec(n = Qa(r, t)) || Za(r = t.valueOf) && !ec(n = Qa(r, t)) || e !== "string" && Za(r = t.toString) && !ec(n = Qa(r, t))) return n;
  throw new y0("Can't convert object to primitive value");
}, Nm = { exports: {} }, wp = Ke, b0 = Object.defineProperty, x0 = function(t, e) {
  try {
    b0(wp, t, { value: e, configurable: !0, writable: !0 });
  } catch {
    wp[t] = e;
  }
  return e;
}, w0 = Ke, E0 = x0, Ep = "__core-js_shared__", $p = Nm.exports = w0[Ep] || E0(Ep, {});
($p.versions || ($p.versions = [])).push({
  version: "3.38.1",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Lm = Nm.exports, Op = Lm, Vm = function(t, e) {
  return Op[t] || (Op[t] = e || {});
}, $0 = Po, O0 = Object, Bm = function(t) {
  return O0($0(t));
}, S0 = lt, A0 = Bm, P0 = S0({}.hasOwnProperty), Mt = Object.hasOwn || function(e, r) {
  return P0(A0(e), r);
}, j0 = lt, T0 = 0, _0 = Math.random(), C0 = j0(1 .toString), Um = function(t) {
  return "Symbol(" + (t === void 0 ? "" : t) + ")_" + C0(++T0 + _0, 36);
}, R0 = Ke, I0 = Vm, Sp = Mt, M0 = Um, F0 = Fm, k0 = km, Ur = R0.Symbol, tc = I0("wks"), D0 = k0 ? Ur.for || Ur : Ur && Ur.withoutSetter || M0, Ft = function(t) {
  return Sp(tc, t) || (tc[t] = F0 && Sp(Ur, t) ? Ur[t] : D0("Symbol." + t)), tc[t];
}, N0 = wr, Ap = xt, Pp = Dm, L0 = gu, V0 = g0, B0 = Ft, U0 = TypeError, H0 = B0("toPrimitive"), q0 = function(t, e) {
  if (!Ap(t) || Pp(t)) return t;
  var r = L0(t, H0), n;
  if (r) {
    if (e === void 0 && (e = "default"), n = N0(r, t, e), !Ap(n) || Pp(n)) return n;
    throw new U0("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), V0(t, e);
}, z0 = q0, G0 = Dm, Hm = function(t) {
  var e = z0(t, "string");
  return G0(e) ? e : e + "";
}, K0 = Ke, jp = xt, zc = K0.document, J0 = jp(zc) && jp(zc.createElement), qm = function(t) {
  return J0 ? zc.createElement(t) : {};
}, W0 = er, Y0 = ct, X0 = qm, zm = !W0 && !Y0(function() {
  return Object.defineProperty(X0("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), Q0 = er, Z0 = wr, e$ = Cm, t$ = Jn, r$ = Wn, n$ = Hm, s$ = Mt, i$ = zm, Tp = Object.getOwnPropertyDescriptor;
du.f = Q0 ? Tp : function(e, r) {
  if (e = r$(e), r = n$(r), i$) try {
    return Tp(e, r);
  } catch {
  }
  if (s$(e, r)) return t$(!Z0(e$.f, e, r), e[r]);
};
var o$ = ct, a$ = Ze, c$ = /#|\.prototype\./, Xn = function(t, e) {
  var r = u$[l$(t)];
  return r === p$ ? !0 : r === f$ ? !1 : a$(e) ? o$(e) : !!e;
}, l$ = Xn.normalize = function(t) {
  return String(t).replace(c$, ".").toLowerCase();
}, u$ = Xn.data = {}, f$ = Xn.NATIVE = "N", p$ = Xn.POLYFILL = "P", h$ = Xn, _p = _m, d$ = To, m$ = Ao, v$ = _p(_p.bind), Gm = function(t, e) {
  return d$(t), e === void 0 ? t : m$ ? v$(t, e) : function() {
    return t.apply(e, arguments);
  };
}, Er = {}, y$ = er, g$ = ct, Km = y$ && g$(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), b$ = xt, x$ = String, w$ = TypeError, $r = function(t) {
  if (b$(t)) return t;
  throw new w$(x$(t) + " is not an object");
}, E$ = er, $$ = zm, O$ = Km, Ns = $r, Cp = Hm, S$ = TypeError, rc = Object.defineProperty, A$ = Object.getOwnPropertyDescriptor, nc = "enumerable", sc = "configurable", ic = "writable";
Er.f = E$ ? O$ ? function(e, r, n) {
  if (Ns(e), r = Cp(r), Ns(n), typeof e == "function" && r === "prototype" && "value" in n && ic in n && !n[ic]) {
    var s = A$(e, r);
    s && s[ic] && (e[r] = n.value, n = {
      configurable: sc in n ? n[sc] : s[sc],
      enumerable: nc in n ? n[nc] : s[nc],
      writable: !1
    });
  }
  return rc(e, r, n);
} : rc : function(e, r, n) {
  if (Ns(e), r = Cp(r), Ns(n), $$) try {
    return rc(e, r, n);
  } catch {
  }
  if ("get" in n || "set" in n) throw new S$("Accessors not supported");
  return "value" in n && (e[r] = n.value), e;
};
var P$ = er, j$ = Er, T$ = Jn, tr = P$ ? function(t, e, r) {
  return j$.f(t, e, T$(1, r));
} : function(t, e, r) {
  return t[e] = r, t;
}, On = Ke, _$ = pu, C$ = _m, R$ = Ze, I$ = du.f, M$ = h$, Mr = vu, F$ = Gm, Fr = tr, Rp = Mt, k$ = function(t) {
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
    return _$(t, this, arguments);
  };
  return e.prototype = t.prototype, e;
}, _o = function(t, e) {
  var r = t.target, n = t.global, s = t.stat, i = t.proto, o = n ? On : s ? On[r] : On[r] && On[r].prototype, a = n ? Mr : Mr[r] || Fr(Mr, r, {})[r], c = a.prototype, l, p, f, d, u, m, h, y, g;
  for (d in e)
    l = M$(n ? d : r + (s ? "." : "#") + d, t.forced), p = !l && o && Rp(o, d), m = a[d], p && (t.dontCallGetSet ? (g = I$(o, d), h = g && g.value) : h = o[d]), u = p && h ? h : e[d], !(!l && !i && typeof m == typeof u) && (t.bind && p ? y = F$(u, On) : t.wrap && p ? y = k$(u) : i && R$(u) ? y = C$(u) : y = u, (t.sham || u && u.sham || m && m.sham) && Fr(y, "sham", !0), Fr(a, d, y), i && (f = r + "Prototype", Rp(Mr, f) || Fr(Mr, f, {}), Fr(Mr[f], d, u), t.real && c && (l || !c[d]) && Fr(c, d, u)));
}, D$ = Vm, N$ = Um, Ip = D$("keys"), bu = function(t) {
  return Ip[t] || (Ip[t] = N$(t));
}, L$ = ct, V$ = !L$(function() {
  function t() {
  }
  return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
}), B$ = Mt, U$ = Ze, H$ = Bm, q$ = bu, z$ = V$, Mp = q$("IE_PROTO"), Gc = Object, G$ = Gc.prototype, xu = z$ ? Gc.getPrototypeOf : function(t) {
  var e = H$(t);
  if (B$(e, Mp)) return e[Mp];
  var r = e.constructor;
  return U$(r) && e instanceof r ? r.prototype : e instanceof Gc ? G$ : null;
}, K$ = lt, J$ = To, W$ = function(t, e, r) {
  try {
    return K$(J$(Object.getOwnPropertyDescriptor(t, e)[r]));
  } catch {
  }
}, Y$ = xt, X$ = function(t) {
  return Y$(t) || t === null;
}, Q$ = X$, Z$ = String, eO = TypeError, tO = function(t) {
  if (Q$(t)) return t;
  throw new eO("Can't set " + Z$(t) + " as a prototype");
}, rO = W$, nO = xt, sO = Po, iO = tO, wu = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t = !1, e = {}, r;
  try {
    r = rO(Object.prototype, "__proto__", "set"), r(e, []), t = e instanceof Array;
  } catch {
  }
  return function(s, i) {
    return sO(s), iO(i), nO(s) && (t ? r(s, i) : s.__proto__ = i), s;
  };
}() : void 0), Jm = {}, oO = Math.ceil, aO = Math.floor, cO = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? aO : oO)(r);
}, lO = cO, Eu = function(t) {
  var e = +t;
  return e !== e || e === 0 ? 0 : lO(e);
}, uO = Eu, fO = Math.max, pO = Math.min, hO = function(t, e) {
  var r = uO(t);
  return r < 0 ? fO(r + e, 0) : pO(r, e);
}, dO = Eu, mO = Math.min, vO = function(t) {
  var e = dO(t);
  return e > 0 ? mO(e, 9007199254740991) : 0;
}, yO = vO, Wm = function(t) {
  return yO(t.length);
}, gO = Wn, bO = hO, xO = Wm, Fp = function(t) {
  return function(e, r, n) {
    var s = gO(e), i = xO(s);
    if (i === 0) return !t && -1;
    var o = bO(n, i), a;
    if (t && r !== r) {
      for (; i > o; )
        if (a = s[o++], a !== a) return !0;
    } else for (; i > o; o++)
      if ((t || o in s) && s[o] === r) return t || o || 0;
    return !t && -1;
  };
}, wO = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Fp(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Fp(!1)
}, $u = {}, EO = lt, oc = Mt, $O = Wn, OO = wO.indexOf, SO = $u, kp = EO([].push), Ym = function(t, e) {
  var r = $O(t), n = 0, s = [], i;
  for (i in r) !oc(SO, i) && oc(r, i) && kp(s, i);
  for (; e.length > n; ) oc(r, i = e[n++]) && (~OO(s, i) || kp(s, i));
  return s;
}, Ou = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], AO = Ym, PO = Ou, jO = PO.concat("length", "prototype");
Jm.f = Object.getOwnPropertyNames || function(e) {
  return AO(e, jO);
};
var Xm = {};
Xm.f = Object.getOwnPropertySymbols;
var TO = Yn, _O = lt, CO = Jm, RO = Xm, IO = $r, MO = _O([].concat), FO = TO("Reflect", "ownKeys") || function(e) {
  var r = CO.f(IO(e)), n = RO.f;
  return n ? MO(r, n(e)) : r;
}, Dp = Mt, kO = FO, DO = du, NO = Er, Qm = function(t, e, r) {
  for (var n = kO(e), s = NO.f, i = DO.f, o = 0; o < n.length; o++) {
    var a = n[o];
    !Dp(t, a) && !(r && Dp(r, a)) && s(t, a, i(e, a));
  }
}, Zm = {}, LO = Ym, VO = Ou, BO = Object.keys || function(e) {
  return LO(e, VO);
}, UO = er, HO = Km, qO = Er, zO = $r, GO = Wn, KO = BO;
Zm.f = UO && !HO ? Object.defineProperties : function(e, r) {
  zO(e);
  for (var n = GO(r), s = KO(r), i = s.length, o = 0, a; i > o; ) qO.f(e, a = s[o++], n[a]);
  return e;
};
var JO = Yn, WO = JO("document", "documentElement"), YO = $r, XO = Zm, Np = Ou, QO = $u, ZO = WO, eS = qm, tS = bu, Lp = ">", Vp = "<", Kc = "prototype", Jc = "script", ev = tS("IE_PROTO"), ac = function() {
}, tv = function(t) {
  return Vp + Jc + Lp + t + Vp + "/" + Jc + Lp;
}, Bp = function(t) {
  t.write(tv("")), t.close();
  var e = t.parentWindow.Object;
  return t = null, e;
}, rS = function() {
  var t = eS("iframe"), e = "java" + Jc + ":", r;
  return t.style.display = "none", ZO.appendChild(t), t.src = String(e), r = t.contentWindow.document, r.open(), r.write(tv("document.F=Object")), r.close(), r.F;
}, Ls, Ws = function() {
  try {
    Ls = new ActiveXObject("htmlfile");
  } catch {
  }
  Ws = typeof document < "u" ? document.domain && Ls ? Bp(Ls) : rS() : Bp(Ls);
  for (var t = Np.length; t--; ) delete Ws[Kc][Np[t]];
  return Ws();
};
QO[ev] = !0;
var Su = Object.create || function(e, r) {
  var n;
  return e !== null ? (ac[Kc] = YO(e), n = new ac(), ac[Kc] = null, n[ev] = e) : n = Ws(), r === void 0 ? n : XO.f(n, r);
}, nS = xt, sS = tr, rv = function(t, e) {
  nS(e) && "cause" in e && sS(t, "cause", e.cause);
}, iS = lt, nv = Error, oS = iS("".replace), aS = function(t) {
  return String(new nv(t).stack);
}("zxcasd"), sv = /\n\s*at [^:]*:[^\n]*/, cS = sv.test(aS), lS = function(t, e) {
  if (cS && typeof t == "string" && !nv.prepareStackTrace)
    for (; e--; ) t = oS(t, sv, "");
  return t;
}, uS = ct, fS = Jn, pS = !uS(function() {
  var t = new Error("a");
  return "stack" in t ? (Object.defineProperty(t, "stack", fS(1, 7)), t.stack !== 7) : !0;
}), hS = tr, dS = lS, mS = pS, Up = Error.captureStackTrace, iv = function(t, e, r, n) {
  mS && (Up ? Up(t, e) : hS(t, "stack", dS(r, n)));
}, cn = {}, vS = Ft, yS = cn, gS = vS("iterator"), bS = Array.prototype, xS = function(t) {
  return t !== void 0 && (yS.Array === t || bS[gS] === t);
}, wS = Ft, ES = wS("toStringTag"), ov = {};
ov[ES] = "z";
var Au = String(ov) === "[object z]", $S = Au, OS = Ze, Ys = hu, SS = Ft, AS = SS("toStringTag"), PS = Object, jS = Ys(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", TS = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, Pu = $S ? Ys : function(t) {
  var e, r, n;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (r = TS(e = PS(t), AS)) == "string" ? r : jS ? Ys(e) : (n = Ys(e)) === "Object" && OS(e.callee) ? "Arguments" : n;
}, _S = Pu, Hp = gu, CS = mu, RS = cn, IS = Ft, MS = IS("iterator"), av = function(t) {
  if (!CS(t)) return Hp(t, MS) || Hp(t, "@@iterator") || RS[_S(t)];
}, FS = wr, kS = To, DS = $r, NS = yu, LS = av, VS = TypeError, BS = function(t, e) {
  var r = arguments.length < 2 ? LS(t) : e;
  if (kS(r)) return DS(FS(r, t));
  throw new VS(NS(t) + " is not iterable");
}, US = wr, qp = $r, HS = gu, qS = function(t, e, r) {
  var n, s;
  qp(t);
  try {
    if (n = HS(t, "return"), !n) {
      if (e === "throw") throw r;
      return r;
    }
    n = US(n, t);
  } catch (i) {
    s = !0, n = i;
  }
  if (e === "throw") throw r;
  if (s) throw n;
  return qp(n), r;
}, zS = Gm, GS = wr, KS = $r, JS = yu, WS = xS, YS = Wm, zp = jo, XS = BS, QS = av, Gp = qS, ZS = TypeError, Xs = function(t, e) {
  this.stopped = t, this.result = e;
}, Kp = Xs.prototype, e1 = function(t, e, r) {
  var n = r && r.that, s = !!(r && r.AS_ENTRIES), i = !!(r && r.IS_RECORD), o = !!(r && r.IS_ITERATOR), a = !!(r && r.INTERRUPTED), c = zS(e, n), l, p, f, d, u, m, h, y = function(v) {
    return l && Gp(l, "normal", v), new Xs(!0, v);
  }, g = function(v) {
    return s ? (KS(v), a ? c(v[0], v[1], y) : c(v[0], v[1])) : a ? c(v, y) : c(v);
  };
  if (i)
    l = t.iterator;
  else if (o)
    l = t;
  else {
    if (p = QS(t), !p) throw new ZS(JS(t) + " is not iterable");
    if (WS(p)) {
      for (f = 0, d = YS(t); d > f; f++)
        if (u = g(t[f]), u && zp(Kp, u)) return u;
      return new Xs(!1);
    }
    l = XS(t, p);
  }
  for (m = i ? t.next : l.next; !(h = GS(m, l)).done; ) {
    try {
      u = g(h.value);
    } catch (v) {
      Gp(l, "throw", v);
    }
    if (typeof u == "object" && u && zp(Kp, u)) return u;
  }
  return new Xs(!1);
}, t1 = Pu, r1 = String, ju = function(t) {
  if (t1(t) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return r1(t);
}, n1 = ju, cv = function(t, e) {
  return t === void 0 ? arguments.length < 2 ? "" : e : n1(t);
}, s1 = _o, i1 = jo, o1 = xu, hi = wu, a1 = Qm, lv = Su, cc = tr, lc = Jn, c1 = rv, l1 = iv, u1 = e1, f1 = cv, p1 = Ft, h1 = p1("toStringTag"), di = Error, d1 = [].push, Qr = function(e, r) {
  var n = i1(uc, this), s;
  hi ? s = hi(new di(), n ? o1(this) : uc) : (s = n ? this : lv(uc), cc(s, h1, "Error")), r !== void 0 && cc(s, "message", f1(r)), l1(s, Qr, s.stack, 1), arguments.length > 2 && c1(s, arguments[2]);
  var i = [];
  return u1(e, d1, { that: i }), cc(s, "errors", i), s;
};
hi ? hi(Qr, di) : a1(Qr, di, { name: !0 });
var uc = Qr.prototype = lv(di.prototype, {
  constructor: lc(1, Qr),
  message: lc(1, ""),
  name: lc(1, "AggregateError")
});
s1({ global: !0, constructor: !0, arity: 2 }, {
  AggregateError: Qr
});
var m1 = Er.f, v1 = function(t, e, r) {
  r in t || m1(t, r, {
    configurable: !0,
    get: function() {
      return e[r];
    },
    set: function(n) {
      e[r] = n;
    }
  });
}, y1 = Ze, g1 = xt, Jp = wu, b1 = function(t, e, r) {
  var n, s;
  return (
    // it can work only with native `setPrototypeOf`
    Jp && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    y1(n = e.constructor) && n !== r && g1(s = n.prototype) && s !== r.prototype && Jp(t, s), t
  );
}, Wp = Yn, x1 = tr, w1 = jo, Yp = wu, Xp = Qm, Qp = v1, E1 = b1, $1 = cv, O1 = rv, S1 = iv, A1 = er, uv = function(t, e, r, n) {
  var s = "stackTraceLimit", i = n ? 2 : 1, o = t.split("."), a = o[o.length - 1], c = Wp.apply(null, o);
  if (c) {
    var l = c.prototype;
    if (!r) return c;
    var p = Wp("Error"), f = e(function(d, u) {
      var m = $1(n ? u : d, void 0), h = n ? new c(d) : new c();
      return m !== void 0 && x1(h, "message", m), S1(h, f, h.stack, 2), this && w1(l, this) && E1(h, this, f), arguments.length > i && O1(h, arguments[i]), h;
    });
    return f.prototype = l, a !== "Error" ? Yp ? Yp(f, p) : Xp(f, p, { name: !0 }) : A1 && s in c && (Qp(f, c, s), Qp(f, c, "prepareStackTrace")), Xp(f, c), f;
  }
}, fv = _o, P1 = Ke, wt = pu, pv = uv, Wc = "WebAssembly", Zp = P1[Wc], mi = new Error("e", { cause: 7 }).cause !== 7, Or = function(t, e) {
  var r = {};
  r[t] = pv(t, e, mi), fv({ global: !0, constructor: !0, arity: 1, forced: mi }, r);
}, Tu = function(t, e) {
  if (Zp && Zp[t]) {
    var r = {};
    r[t] = pv(Wc + "." + t, e, mi), fv({ target: Wc, stat: !0, constructor: !0, arity: 1, forced: mi }, r);
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
Tu("CompileError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Tu("LinkError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Tu("RuntimeError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
var j1 = _o, T1 = Yn, _1 = pu, eh = ct, C1 = uv, _u = "AggregateError", th = T1(_u), rh = !eh(function() {
  return th([1]).errors[0] !== 1;
}) && eh(function() {
  return th([1], _u, { cause: 7 }).cause !== 7;
});
j1({ global: !0, constructor: !0, arity: 2, forced: rh }, {
  AggregateError: C1(_u, function(t) {
    return function(r, n) {
      return _1(t, this, arguments);
    };
  }, rh, !0)
});
var R1 = Ke, I1 = Ze, nh = R1.WeakMap, M1 = I1(nh) && /native code/.test(String(nh)), F1 = M1, hv = Ke, k1 = xt, D1 = tr, fc = Mt, pc = Lm, N1 = bu, L1 = $u, sh = "Object already initialized", Yc = hv.TypeError, V1 = hv.WeakMap, vi, Vn, yi, B1 = function(t) {
  return yi(t) ? Vn(t) : vi(t, {});
}, U1 = function(t) {
  return function(e) {
    var r;
    if (!k1(e) || (r = Vn(e)).type !== t)
      throw new Yc("Incompatible receiver, " + t + " required");
    return r;
  };
};
if (F1 || pc.state) {
  var ft = pc.state || (pc.state = new V1());
  ft.get = ft.get, ft.has = ft.has, ft.set = ft.set, vi = function(t, e) {
    if (ft.has(t)) throw new Yc(sh);
    return e.facade = t, ft.set(t, e), e;
  }, Vn = function(t) {
    return ft.get(t) || {};
  }, yi = function(t) {
    return ft.has(t);
  };
} else {
  var kr = N1("state");
  L1[kr] = !0, vi = function(t, e) {
    if (fc(t, kr)) throw new Yc(sh);
    return e.facade = t, D1(t, kr, e), e;
  }, Vn = function(t) {
    return fc(t, kr) ? t[kr] : {};
  }, yi = function(t) {
    return fc(t, kr);
  };
}
var dv = {
  set: vi,
  get: Vn,
  has: yi,
  enforce: B1,
  getterFor: U1
}, Xc = er, H1 = Mt, mv = Function.prototype, q1 = Xc && Object.getOwnPropertyDescriptor, Cu = H1(mv, "name"), z1 = Cu && (function() {
}).name === "something", G1 = Cu && (!Xc || Xc && q1(mv, "name").configurable), K1 = {
  EXISTS: Cu,
  PROPER: z1,
  CONFIGURABLE: G1
}, J1 = tr, vv = function(t, e, r, n) {
  return n && n.enumerable ? t[e] = r : J1(t, e, r), t;
}, W1 = ct, Y1 = Ze, X1 = xt, Q1 = Su, ih = xu, Z1 = vv, eA = Ft, Qc = eA("iterator"), yv = !1, At, hc, dc;
[].keys && (dc = [].keys(), "next" in dc ? (hc = ih(ih(dc)), hc !== Object.prototype && (At = hc)) : yv = !0);
var tA = !X1(At) || W1(function() {
  var t = {};
  return At[Qc].call(t) !== t;
});
tA ? At = {} : At = Q1(At);
Y1(At[Qc]) || Z1(At, Qc, function() {
  return this;
});
var gv = {
  IteratorPrototype: At,
  BUGGY_SAFARI_ITERATORS: yv
}, rA = Au, nA = Pu, sA = rA ? {}.toString : function() {
  return "[object " + nA(this) + "]";
}, iA = Au, oA = Er.f, aA = tr, cA = Mt, lA = sA, uA = Ft, oh = uA("toStringTag"), Ru = function(t, e, r, n) {
  var s = r ? t : t && t.prototype;
  s && (cA(s, oh) || oA(s, oh, { configurable: !0, value: e }), n && !iA && aA(s, "toString", lA));
}, fA = gv.IteratorPrototype, pA = Su, hA = Jn, dA = Ru, mA = cn, vA = function() {
  return this;
}, yA = function(t, e, r, n) {
  var s = e + " Iterator";
  return t.prototype = pA(fA, { next: hA(+!n, r) }), dA(t, s, !1, !0), mA[s] = vA, t;
}, gA = _o, bA = wr, bv = K1, xA = yA, wA = xu, EA = Ru, ah = vv, $A = Ft, ch = cn, xv = gv, OA = bv.PROPER;
bv.CONFIGURABLE;
xv.IteratorPrototype;
var Vs = xv.BUGGY_SAFARI_ITERATORS, mc = $A("iterator"), lh = "keys", Bs = "values", uh = "entries", SA = function() {
  return this;
}, wv = function(t, e, r, n, s, i, o) {
  xA(r, e, n);
  var a = function(g) {
    if (g === s && d) return d;
    if (!Vs && g && g in p) return p[g];
    switch (g) {
      case lh:
        return function() {
          return new r(this, g);
        };
      case Bs:
        return function() {
          return new r(this, g);
        };
      case uh:
        return function() {
          return new r(this, g);
        };
    }
    return function() {
      return new r(this);
    };
  }, c = e + " Iterator", l = !1, p = t.prototype, f = p[mc] || p["@@iterator"] || s && p[s], d = !Vs && f || a(s), u = e === "Array" && p.entries || f, m, h, y;
  if (u && (m = wA(u.call(new t())), m !== Object.prototype && m.next && (EA(m, c, !0, !0), ch[c] = SA)), OA && s === Bs && f && f.name !== Bs && (l = !0, d = function() {
    return bA(f, this);
  }), s)
    if (h = {
      values: a(Bs),
      keys: i ? d : a(lh),
      entries: a(uh)
    }, o) for (y in h)
      (Vs || l || !(y in p)) && ah(p, y, h[y]);
    else gA({ target: e, proto: !0, forced: Vs || l }, h);
  return o && p[mc] !== d && ah(p, mc, d, { name: s }), ch[e] = d, h;
}, Ev = function(t, e) {
  return { value: t, done: e };
}, AA = Wn, fh = cn, $v = dv;
Er.f;
var PA = wv, Us = Ev, Ov = "Array Iterator", jA = $v.set, TA = $v.getterFor(Ov);
PA(Array, "Array", function(t, e) {
  jA(this, {
    type: Ov,
    target: AA(t),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var t = TA(this), e = t.target, r = t.index++;
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
fh.Arguments = fh.Array;
var Iu = lt, _A = Eu, CA = ju, RA = Po, IA = Iu("".charAt), ph = Iu("".charCodeAt), MA = Iu("".slice), hh = function(t) {
  return function(e, r) {
    var n = CA(RA(e)), s = _A(r), i = n.length, o, a;
    return s < 0 || s >= i ? t ? "" : void 0 : (o = ph(n, s), o < 55296 || o > 56319 || s + 1 === i || (a = ph(n, s + 1)) < 56320 || a > 57343 ? t ? IA(n, s) : o : t ? MA(n, s, s + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
  };
}, FA = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: hh(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: hh(!0)
}, kA = FA.charAt, DA = ju, Sv = dv, NA = wv, dh = Ev, Av = "String Iterator", LA = Sv.set, VA = Sv.getterFor(Av);
NA(String, "String", function(t) {
  LA(this, {
    type: Av,
    string: DA(t),
    index: 0
  });
}, function() {
  var e = VA(this), r = e.string, n = e.index, s;
  return n >= r.length ? dh(void 0, !0) : (s = kA(r, n), e.index += s.length, dh(s, !1));
});
var BA = vu, UA = BA.AggregateError, HA = {
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
}, qA = HA, zA = Ke, GA = Ru, mh = cn;
for (var vc in qA)
  GA(zA[vc], vc), mh[vc] = mh.Array;
var KA = UA, JA = KA, WA = JA, YA = WA, XA = YA, QA = XA, ZA = QA, eP = ZA;
const tP = /* @__PURE__ */ $o(eP);
class rP extends tP {
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
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(rP, e);
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
class yc extends Pe {
}
var Mu = function() {
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
function nP(t, e) {
  t = t || [], e = e || [];
  var r, n = t.length, s = e.length, i = [];
  for (r = 0; r < n; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < s; )
    i[i.length] = e[r], r += 1;
  return i;
}
function Co(t, e) {
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
function Fu(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!fe(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, fe(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : Co(Math.max(0, i), Fu(t, n, r));
  };
}
var le = /* @__PURE__ */ q(function(e, r) {
  return e === 1 ? ne(r) : Co(e, Fu(e, [], r));
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
function sP(t) {
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
      if (sP(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function Ro(t) {
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
var iP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = Ro(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
}();
function oP(t) {
  return function(e) {
    return new iP(t, e);
  };
}
var ku = /* @__PURE__ */ q(/* @__PURE__ */ rr(["all"], oP, function(e, r) {
  for (var n = 0; n < r.length; ) {
    if (!e(r[n]))
      return !1;
    n += 1;
  }
  return !0;
}));
function vh(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function gi(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function aP(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function Xe(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function cP(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const Tn = typeof Object.is == "function" ? Object.is : cP;
var yh = Object.prototype.toString, Pv = /* @__PURE__ */ function() {
  return yh.call(arguments) === "[object Arguments]" ? function(e) {
    return yh.call(e) === "[object Arguments]";
  } : function(e) {
    return Xe("callee", e);
  };
}(), lP = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), gh = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], bh = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), uP = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, yr = /* @__PURE__ */ ne(typeof Object.keys == "function" && !bh ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, s = [], i = bh && Pv(e);
  for (r in e)
    Xe(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (lP)
    for (n = gh.length - 1; n >= 0; )
      r = gh[n], Xe(r, e) && !uP(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), Qe = /* @__PURE__ */ ne(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function xh(t, e, r, n) {
  var s = vh(t), i = vh(e);
  function o(a, c) {
    return Du(a, c, r.slice(), n.slice());
  }
  return !gi(function(a, c) {
    return !gi(o, c, a);
  }, i, s);
}
function Du(t, e, r, n) {
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
      if (typeof t.constructor == "function" && aP(t.constructor) === "Promise")
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
      return t.size !== e.size ? !1 : xh(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : xh(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
    if (!(Xe(l, e) && Du(e[l], t[l], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Dt = /* @__PURE__ */ q(function(e, r) {
  return Du(e, r, [], []);
});
function fP(t, e, r) {
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
function bi(t, e) {
  return fP(e, t, 0) >= 0;
}
function _n(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function gc(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var Sn = function(e) {
  return (e < 10 ? "0" : "") + e;
}, pP = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + Sn(e.getUTCMonth() + 1) + "-" + Sn(e.getUTCDate()) + "T" + Sn(e.getUTCHours()) + ":" + Sn(e.getUTCMinutes()) + ":" + Sn(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function jv(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function Zn(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function hP(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function xi(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var dP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = Ge.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function mP(t) {
  return function(e) {
    return new dP(t, e);
  };
}
var vP = /* @__PURE__ */ q(/* @__PURE__ */ rr(["fantasy-land/filter", "filter"], mP, function(t, e) {
  return xi(e) ? Zn(function(r, n) {
    return t(e[n]) && (r[n] = e[n]), r;
  }, {}, yr(e)) : (
    // else
    hP(t, e)
  );
})), yP = /* @__PURE__ */ q(function(e, r) {
  return vP(jv(e), r);
});
function Tv(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return bi(o, a) ? "<Circular>" : Tv(o, a);
  }, n = function(i, o) {
    return _n(function(a) {
      return gc(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + _n(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + _n(r, t).concat(n(t, yP(function(i) {
        return /^\d+$/.test(i);
      }, yr(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : gc(pP(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : gc(t);
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
  return Tv(e, []);
}), Nu = /* @__PURE__ */ q(function(e, r) {
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
}), gP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = Ge.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), bP = function(e) {
  return function(r) {
    return new gP(e, r);
  };
}, es = /* @__PURE__ */ q(/* @__PURE__ */ rr(["fantasy-land/map", "map"], bP, function(e, r) {
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
const Io = Number.isInteger || function(e) {
  return e << 0 === e;
};
function Lu(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function Mo(t, e) {
  var r = t < 0 ? e.length + t : t;
  return Lu(e) ? e.charAt(r) : e[r];
}
var ts = /* @__PURE__ */ q(function(e, r) {
  if (r != null)
    return Io(e) ? Mo(e, r) : r[e];
}), Vu = /* @__PURE__ */ q(function(e, r) {
  return es(ts(e), r);
}), xP = /* @__PURE__ */ ne(function(e) {
  return Qn(e) ? !0 : !e || typeof e != "object" || Lu(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), wh = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function _v(t, e, r) {
  return function(s, i, o) {
    if (xP(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[wh] != null)
      return r(s, i, o[wh]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function wP(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var Fo = /* @__PURE__ */ q(function(e, r) {
  return Co(e.length, function() {
    return e.apply(r, arguments);
  });
});
function EP(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function $P(t, e, r, n) {
  return t["@@transducer/result"](r[n](Fo(t["@@transducer/step"], t), e));
}
var Bu = /* @__PURE__ */ _v(wP, $P, EP), OP = /* @__PURE__ */ function() {
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
function Cv(t) {
  return new OP(t);
}
var Sr = /* @__PURE__ */ qe(function(t, e, r) {
  return Bu(typeof t == "function" ? Cv(t) : t, e, r);
}), SP = /* @__PURE__ */ ne(function(e) {
  return le(Sr(Nu, 0, Vu("length", e)), function() {
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
}), AP = /* @__PURE__ */ q(function(e, r) {
  return e && r;
}), PP = /* @__PURE__ */ ne(function(e) {
  return le(Sr(Nu, 0, Vu("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function jP(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function TP(t, e, r, n) {
  return r[n](t, e);
}
var _P = /* @__PURE__ */ _v(Zn, TP, jP), CP = /* @__PURE__ */ q(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : _P(function(n, s) {
    return nP(n, es(s, r));
  }, [], e);
}), RP = /* @__PURE__ */ q(function(e, r) {
  return e.apply(this, r);
}), Uu = /* @__PURE__ */ ne(function(e) {
  return le(e.length, e);
});
function IP(t, e, r) {
  if (Io(t) && Qn(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var wi = /* @__PURE__ */ ne(function(e) {
  return e == null;
}), MP = /* @__PURE__ */ qe(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !wi(n) && Xe(s, n) && typeof n[s] == "object" ? n[s] : Io(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return IP(s, r, n);
});
function Hu(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var FP = /* @__PURE__ */ q(function(e, r) {
  var n = le(e, r);
  return le(e, function() {
    return Zn(CP, es(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), qu = /* @__PURE__ */ ne(function(e) {
  return FP(e.length, e);
}), Ar = /* @__PURE__ */ q(function(e, r) {
  return Hu(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : qu(AP)(e, r);
});
function Rv(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function Iv(t, e, r) {
  if (r || (r = new DP()), kP(t))
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
      return Rv(t);
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
function kP(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var DP = /* @__PURE__ */ function() {
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
}(), NP = /* @__PURE__ */ ne(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), LP = /* @__PURE__ */ ne(function(e) {
  return !e;
}), rs = /* @__PURE__ */ qu(LP);
function VP(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function zu(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return Qn(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var ns = /* @__PURE__ */ qe(/* @__PURE__ */ zu("slice", function(e, r, n) {
  return Array.prototype.slice.call(n, e, r);
})), Mv = /* @__PURE__ */ ne(/* @__PURE__ */ zu("tail", /* @__PURE__ */ ns(1, 1 / 0)));
function _e() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return Co(arguments[0].length, Sr(VP, arguments[0], Mv(arguments)));
}
var BP = /* @__PURE__ */ ne(function(t) {
  return Mo(0, t);
});
function UP(t) {
  return t;
}
var Gu = /* @__PURE__ */ ne(UP), HP = /* @__PURE__ */ q(function(e, r) {
  return le(Sr(Nu, 0, Vu("length", r)), function() {
    var n = arguments, s = this;
    return e.apply(s, _n(function(i) {
      return i.apply(s, n);
    }, r));
  });
}), qP = /* @__PURE__ */ function() {
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
    return this.inputs[n] = this.inputs[n] || [n, Iv(this.valueAcc)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function zP(t, e, r) {
  return function(n) {
    return new qP(t, e, r, n);
  };
}
var GP = /* @__PURE__ */ Fu(4, [], /* @__PURE__ */ rr([], zP, function(e, r, n, s) {
  var i = Cv(function(o, a) {
    var c = n(a), l = e(Xe(c, o) ? o[c] : Iv(r), a);
    return l && l["@@transducer/reduced"] ? Ro(o) : (o[c] = l, o);
  });
  return Bu(i, {}, s);
})), en = /* @__PURE__ */ q(function(e, r) {
  return r == null || r !== r ? e : r;
}), KP = /* @__PURE__ */ function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !Eh(e, !0, this);
  }, t.prototype.has = function(e) {
    return Eh(e, !1, this);
  }, t;
}();
function Eh(t, e, r) {
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
      return r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? bi(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
    case "undefined":
      return r._items[n] ? !0 : (e && (r._items[n] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    default:
      return n = Object.prototype.toString.call(t), n in r._items ? bi(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
  }
}
var JP = /* @__PURE__ */ q(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new KP(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), WP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = Ge.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? Ro(n) : n;
  }, t;
}();
function YP(t) {
  return function(e) {
    return new WP(t, e);
  };
}
var XP = /* @__PURE__ */ q(/* @__PURE__ */ rr(["take"], YP, function(e, r) {
  return ns(0, e < 0 ? 1 / 0 : e, r);
}));
function QP(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return ns(0, r + 1, e);
}
var ZP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = Bu(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
}();
function ej(t) {
  return function(e) {
    return new ZP(t, e);
  };
}
var tj = /* @__PURE__ */ q(/* @__PURE__ */ rr([], ej, QP)), ko = /* @__PURE__ */ ne(function(t) {
  return Mo(-1, t);
}), rj = /* @__PURE__ */ function() {
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
function nj(t) {
  return function(e) {
    return new rj(t, e);
  };
}
var sj = /* @__PURE__ */ q(/* @__PURE__ */ rr(["dropWhile"], nj, function(e, r) {
  for (var n = 0, s = r.length; n < s && e(r[n]); )
    n += 1;
  return ns(n, 1 / 0, r);
})), ij = /* @__PURE__ */ q(function(e, r) {
  return e || r;
}), oj = /* @__PURE__ */ q(function(e, r) {
  return Hu(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : qu(ij)(e, r);
});
function aj(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var cj = /* @__PURE__ */ ne(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : Qn(e) ? [] : Lu(e) ? "" : xi(e) ? {} : Pv(e) ? /* @__PURE__ */ function() {
    return arguments;
  }() : aj(e) ? e.constructor.from("") : void 0;
}), lj = /* @__PURE__ */ ne(function(e) {
  return le(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), uj = /* @__PURE__ */ q(/* @__PURE__ */ zu("groupBy", /* @__PURE__ */ GP(function(t, e) {
  return t.push(e), t;
}, []))), fj = /* @__PURE__ */ q(function(e, r) {
  if (e.length === 0 || wi(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!wi(n) && Xe(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), Fv = /* @__PURE__ */ q(function(e, r) {
  return fj([e], r);
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
}, Ku = /* @__PURE__ */ qe(function(e, r, n) {
  return le(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), pj = /* @__PURE__ */ q(bi), hj = /* @__PURE__ */ ns(0, -1), Ju = /* @__PURE__ */ q(function(e, r) {
  return le(e + 1, function() {
    var n = arguments[e];
    if (n != null && Hu(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(Zr(n) + ' does not have a method named "' + r + '"');
  });
}), ss = /* @__PURE__ */ ne(function(e) {
  return e != null && Dt(e, cj(e));
}), kv = /* @__PURE__ */ ne(function(e) {
  return !ss(e);
}), Dv = /* @__PURE__ */ Ju(1, "join");
function $h(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var dj = /* @__PURE__ */ q(function(e, r) {
  return function(n) {
    return function(s) {
      return es(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
function Wu(t, e) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    var s = t[n];
    Io(s) ? r = Mo(s, r) : r = r[s];
  }
  return r;
}
var mj = /* @__PURE__ */ q(function(e, r) {
  return Zn(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, yr(r));
}), vj = /* @__PURE__ */ qe(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    Xe(i, r) && (s[i] = Xe(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    Xe(i, n) && !Xe(i, s) && (s[i] = n[i]);
  return s;
}), yj = /* @__PURE__ */ qe(function t(e, r, n) {
  return vj(function(s, i, o) {
    return xi(i) && xi(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), Yu = /* @__PURE__ */ q(function(e, r) {
  return yj(function(n, s, i) {
    return i;
  }, e, r);
}), gj = /* @__PURE__ */ q(function(e, r) {
  return ku(jv(e), r);
}), Nv = function(t) {
  return {
    value: t,
    map: function(e) {
      return Nv(e(t));
    }
  };
}, bj = /* @__PURE__ */ qe(function(e, r, n) {
  return e(function(s) {
    return Nv(r(s));
  })(n).value;
}), He = /* @__PURE__ */ q(Wu), Lv = /* @__PURE__ */ qe(function(e, r, n) {
  return en(e, Wu(r, n));
}), Do = /* @__PURE__ */ qe(function(e, r, n) {
  return e(Wu(r, n));
}), Vv = /* @__PURE__ */ q(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), Bv = /* @__PURE__ */ qe(function(e, r, n) {
  return Dt(e, ts(r, n));
}), Ei = /* @__PURE__ */ qe(function(e, r, n) {
  return en(e, ts(r, n));
}), xj = /* @__PURE__ */ qe(function(e, r, n) {
  return e(ts(r, n));
}), wj = /* @__PURE__ */ q(function(e, r) {
  if (!($h(e) && $h(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = Array(e < r ? r - e : 0), s = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < s; )
    n[i] = i + e, i += 1;
  return n;
}), Ej = /* @__PURE__ */ ne(Ro), tn = /* @__PURE__ */ qe(function(e, r, n) {
  return n.replace(e, r);
}), $j = /* @__PURE__ */ q(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), Xu = /* @__PURE__ */ Ju(1, "split"), Uv = /* @__PURE__ */ q(function(t, e) {
  return Dt(XP(t.length, e), t);
});
function Oj(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var Sj = /* @__PURE__ */ q(function(e, r) {
  if (!Oj(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + Zr(e));
  return Rv(e).test(r);
}), Aj = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = Ge.init, t.prototype["@@transducer/result"] = Ge.result, t.prototype["@@transducer/step"] = function(e, r) {
    return gi(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
}();
function Pj(t) {
  return function(e) {
    return new Aj(t, e);
  };
}
var jj = /* @__PURE__ */ q(/* @__PURE__ */ rr([], Pj, function(t, e) {
  for (var r = 0, n = e.length, s = [], i; r < n; )
    i = e[r], gi(t, i, s) || (s[s.length] = i), r += 1;
  return s;
})), Tj = /* @__PURE__ */ qe(function(e, r, n) {
  return e(n) ? r(n) : n;
}), No = B(void 0), nr = Dt(No()), Hv = rs(nr), qv = Dt(null), zv = rs(qv), _j = rs(wi), Cj = le(1, _e(Qe, Nt("GeneratorFunction"))), Rj = le(1, _e(Qe, Nt("AsyncFunction"))), Lt = PP([_e(Qe, Nt("Function")), Cj, Rj]), Gv = le(1, Lt(Array.isArray) ? Array.isArray : _e(Qe, Nt("Array"))), Ij = Ar(Gv, ss), Mj = Ar(Gv, kv), Pr = le(1, _e(Qe, Nt("String"))), Kv = Dt("");
function Zc(t) {
  "@babel/helpers - typeof";
  return Zc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Zc(t);
}
var Jv = function(e) {
  return Zc(e) === "object";
}, Fj = le(1, Ar(zv, oj(Jv, Lt))), kj = rs(Fj), Qu = SP([Pr, kj, kv]), Dj = rs(Lt), Nj = le(1, Ar(zv, Jv)), Lj = _e(Qe, Nt("Object")), Vj = _e(Zr, Dt(Zr(Object))), Bj = Do(Ar(Lt, Vj), ["constructor"]), gr = le(1, function(t) {
  if (!Nj(t) || !Lj(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return qv(e) ? !0 : Bj(e);
}), Uj = le(1, _e(Qe, Nt("Number"))), Hj = Ar(Uj, isFinite), qj = le(1, Hj), zj = Lt(Number.isFinite) ? le(1, Fo(Number.isFinite, Number)) : qj, Gj = Ar(zj, HP(Dt, [Math.floor, Gu])), Kj = le(1, Gj), Jj = Lt(Number.isInteger) ? le(1, Fo(Number.isInteger, Number)) : Kj, Wj = le(1, _e(Qe, Nt("RegExp")));
function Yj(t) {
  return eT(t) || Zj(t) || Qj(t) || Xj();
}
function Xj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qj(t, e) {
  if (t) {
    if (typeof t == "string") return el(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? el(t, e) : void 0;
  }
}
function Zj(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function eT(t) {
  if (Array.isArray(t)) return el(t);
}
function el(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var tT = NP(function(t, e) {
  return t.length > e.length;
}), rT = _e($j(tT), BP, ts("length")), nT = Uu(function(t, e, r) {
  var n = r.apply(void 0, Yj(t));
  return _j(n) ? Ej(n) : e;
}), sT = function(e) {
  var r = rT(e);
  return le(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return Sr(nT(s), void 0, e);
  });
}, Wv = Ku(Mj, sT, No), Lo = lj(pj), Bn = le(3, function(t, e, r) {
  var n = He(t, r), s = He(hj(t), r);
  if (!Dj(n) && !Ij(t)) {
    var i = Fo(n, s);
    return RP(i, e);
  }
}), iT = Tj(Pr, tn(/[.*+?^${}()|[\]\\-]/g, "\\$&")), oT = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, Oh = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, aT = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, cT = function(e, r, n) {
  oT(e, r, n), Oh(n, "str"), Oh(r, "replaceValue"), aT(e);
  var s = new RegExp(Wj(e) ? e : iT(e), "g");
  return tn(s, r, n);
}, lT = le(3, cT), uT = Ju(2, "replaceAll"), fT = Lt(String.prototype.replaceAll) ? uT : lT, pT = Uu(function(t, e) {
  return _e(Xu(""), tj(Lo(t)), Dv(""))(e);
}), Zu = Uu(function(t, e) {
  return _e(Xu(""), sj(Lo(t)), Dv(""))(e);
}), Yv = { exports: {} }, ye = Yv.exports = {}, ht, dt;
function tl() {
  throw new Error("setTimeout has not been defined");
}
function rl() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? ht = setTimeout : ht = tl;
  } catch {
    ht = tl;
  }
  try {
    typeof clearTimeout == "function" ? dt = clearTimeout : dt = rl;
  } catch {
    dt = rl;
  }
})();
function Xv(t) {
  if (ht === setTimeout)
    return setTimeout(t, 0);
  if ((ht === tl || !ht) && setTimeout)
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
function hT(t) {
  if (dt === clearTimeout)
    return clearTimeout(t);
  if ((dt === rl || !dt) && clearTimeout)
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
var Ot = [], Hr = !1, fr, Qs = -1;
function dT() {
  !Hr || !fr || (Hr = !1, fr.length ? Ot = fr.concat(Ot) : Qs = -1, Ot.length && Qv());
}
function Qv() {
  if (!Hr) {
    var t = Xv(dT);
    Hr = !0;
    for (var e = Ot.length; e; ) {
      for (fr = Ot, Ot = []; ++Qs < e; )
        fr && fr[Qs].run();
      Qs = -1, e = Ot.length;
    }
    fr = null, Hr = !1, hT(t);
  }
}
ye.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  Ot.push(new Zv(t, e)), Ot.length === 1 && !Hr && Xv(Qv);
};
function Zv(t, e) {
  this.fun = t, this.array = e;
}
Zv.prototype.run = function() {
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
var mT = Yv.exports;
const $i = /* @__PURE__ */ $o(mT), ef = () => Do(Sj(/^win/), ["platform"], $i), Vo = (t) => {
  try {
    const e = new URL(t);
    return pT(":", e.protocol);
  } catch {
    return;
  }
}, vT = _e(Vo, Hv), ey = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, tf = (t) => {
  if ($i.browser)
    return !1;
  const e = Vo(t);
  return nr(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, Bo = (t) => {
  const e = Vo(t);
  return e === "http" || e === "https";
}, yT = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, rf = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Ei(!1, "keepFileProtocol", e), s = Ei(ef, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = fT("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, ty = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  ef() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < e.length; n += 2)
    r = r.replace(e[n], e[n + 1]);
  return r;
}, nf = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, se = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, Oi = () => {
  if ($i.browser)
    return se(globalThis.location.href);
  const t = $i.cwd(), e = ko(t);
  return ["/", "\\"].includes(e) ? t : t + (ef() ? "\\" : "/");
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
  if (tf(t))
    return ty(rf(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, nt = (t) => tf(t) ? rf(t) : decodeURI(t), gT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: Oi,
  fromFileSystemPath: ty,
  getExtension: ey,
  getHash: nf,
  getProtocol: Vo,
  hasProtocol: vT,
  isFileSystemPath: tf,
  isHttpUrl: Bo,
  isURI: yT,
  resolve: Oe,
  sanitize: is,
  stripHash: se,
  toFileSystemPath: rf,
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
    return Pr(this.uri) ? ey(this.uri) : "";
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
    return Hv(this.find((n) => n.uri === r));
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
const ry = {
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
    circularReplacer: Gu,
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
}, bT = dj(He(["resolve", "baseURI"]), MP(["resolve", "baseURI"])), xT = (t) => Kv(t) ? Oi() : t, ny = (t, e) => {
  const r = Yu(t, e);
  return bj(bT, xT, r);
};
class wT extends he {
  constructor(r, n) {
    super(r, {
      cause: n.cause
    });
    b(this, "plugin");
    this.plugin = n.plugin;
  }
}
const sf = async (t, e, r) => {
  const n = await Promise.all(r.map(Bn([t], e)));
  return r.filter((s, i) => n[i]);
}, of = async (t, e, r) => {
  let n;
  for (const s of r)
    try {
      const i = await s[t].call(s, ...e);
      return {
        plugin: s,
        result: i
      };
    } catch (i) {
      n = new wT("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class nl extends he {
}
class af extends he {
}
class sy extends af {
}
class iy extends sy {
}
const ET = async (t, e) => {
  const r = e.resolve.resolvers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.resolve.resolverOpts);
  }), n = await sf("canRead", [t, e], r);
  if (ss(n))
    throw new iy(t.uri);
  try {
    const {
      result: s
    } = await of("read", [t], n);
    return s;
  } catch (s) {
    throw new af(`Error while reading file "${t.uri}"`, {
      cause: s
    });
  }
}, $T = async (t, e) => {
  const r = e.parse.parsers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.parse.parserOpts);
  }), n = await sf("canParse", [t, e], r);
  if (ss(n))
    throw new iy(t.uri);
  try {
    const {
      plugin: s,
      result: i
    } = await of("parse", [t, e], n);
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new nl(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new nl(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, OT = async (t, e) => {
  const r = new Un({
    uri: is(se(t)),
    mediaType: e.parse.mediaType
  }), n = await ET(r, e);
  return $T(new Un({
    ...r,
    data: n
  }), e);
};
function ST(t) {
  return t === null;
}
var AT = ST, PT = typeof Yt == "object" && Yt && Yt.Object === Object && Yt, oy = PT, jT = oy, TT = typeof self == "object" && self && self.Object === Object && self, _T = jT || TT || Function("return this")(), Bt = _T, CT = Bt, RT = CT.Symbol, cf = RT, Sh = cf, ay = Object.prototype, IT = ay.hasOwnProperty, MT = ay.toString, An = Sh ? Sh.toStringTag : void 0;
function FT(t) {
  var e = IT.call(t, An), r = t[An];
  try {
    t[An] = void 0;
    var n = !0;
  } catch {
  }
  var s = MT.call(t);
  return n && (e ? t[An] = r : delete t[An]), s;
}
var kT = FT, DT = Object.prototype, NT = DT.toString;
function LT(t) {
  return NT.call(t);
}
var VT = LT, Ah = cf, BT = kT, UT = VT, HT = "[object Null]", qT = "[object Undefined]", Ph = Ah ? Ah.toStringTag : void 0;
function zT(t) {
  return t == null ? t === void 0 ? qT : HT : Ph && Ph in Object(t) ? BT(t) : UT(t);
}
var jr = zT, GT = Array.isArray, Uo = GT;
function KT(t) {
  return t != null && typeof t == "object";
}
var Tr = KT, JT = jr, WT = Uo, YT = Tr, XT = "[object String]";
function QT(t) {
  return typeof t == "string" || !WT(t) && YT(t) && JT(t) == XT;
}
var ZT = QT, e_ = jr, t_ = Tr, r_ = "[object Number]";
function n_(t) {
  return typeof t == "number" || t_(t) && e_(t) == r_;
}
var s_ = n_, i_ = jr, o_ = Tr, a_ = "[object Boolean]";
function c_(t) {
  return t === !0 || t === !1 || o_(t) && i_(t) == a_;
}
var l_ = c_;
function u_(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ho = u_;
let f_ = class {
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
var p_ = f_;
function h_() {
  this.__data__ = [], this.size = 0;
}
var d_ = h_;
function m_(t, e) {
  return t === e || t !== t && e !== e;
}
var cy = m_, v_ = cy;
function y_(t, e) {
  for (var r = t.length; r--; )
    if (v_(t[r][0], e))
      return r;
  return -1;
}
var qo = y_, g_ = qo, b_ = Array.prototype, x_ = b_.splice;
function w_(t) {
  var e = this.__data__, r = g_(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : x_.call(e, r, 1), --this.size, !0;
}
var E_ = w_, $_ = qo;
function O_(t) {
  var e = this.__data__, r = $_(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var S_ = O_, A_ = qo;
function P_(t) {
  return A_(this.__data__, t) > -1;
}
var j_ = P_, T_ = qo;
function __(t, e) {
  var r = this.__data__, n = T_(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
var C_ = __, R_ = d_, I_ = E_, M_ = S_, F_ = j_, k_ = C_;
function ln(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
ln.prototype.clear = R_;
ln.prototype.delete = I_;
ln.prototype.get = M_;
ln.prototype.has = F_;
ln.prototype.set = k_;
var zo = ln, D_ = zo;
function N_() {
  this.__data__ = new D_(), this.size = 0;
}
var L_ = N_;
function V_(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
var B_ = V_;
function U_(t) {
  return this.__data__.get(t);
}
var H_ = U_;
function q_(t) {
  return this.__data__.has(t);
}
var z_ = q_, G_ = jr, K_ = Ho, J_ = "[object AsyncFunction]", W_ = "[object Function]", Y_ = "[object GeneratorFunction]", X_ = "[object Proxy]";
function Q_(t) {
  if (!K_(t))
    return !1;
  var e = G_(t);
  return e == W_ || e == Y_ || e == J_ || e == X_;
}
var ly = Q_, Z_ = Bt, eC = Z_["__core-js_shared__"], tC = eC, bc = tC, jh = function() {
  var t = /[^.]+$/.exec(bc && bc.keys && bc.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function rC(t) {
  return !!jh && jh in t;
}
var nC = rC, sC = Function.prototype, iC = sC.toString;
function oC(t) {
  if (t != null) {
    try {
      return iC.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var uy = oC, aC = ly, cC = nC, lC = Ho, uC = uy, fC = /[\\^$.*+?()[\]{}|]/g, pC = /^\[object .+?Constructor\]$/, hC = Function.prototype, dC = Object.prototype, mC = hC.toString, vC = dC.hasOwnProperty, yC = RegExp(
  "^" + mC.call(vC).replace(fC, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gC(t) {
  if (!lC(t) || cC(t))
    return !1;
  var e = aC(t) ? yC : pC;
  return e.test(uC(t));
}
var bC = gC;
function xC(t, e) {
  return t == null ? void 0 : t[e];
}
var wC = xC, EC = bC, $C = wC;
function OC(t, e) {
  var r = $C(t, e);
  return EC(r) ? r : void 0;
}
var un = OC, SC = un, AC = Bt, PC = SC(AC, "Map"), lf = PC, jC = un, TC = jC(Object, "create"), Go = TC, Th = Go;
function _C() {
  this.__data__ = Th ? Th(null) : {}, this.size = 0;
}
var CC = _C;
function RC(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var IC = RC, MC = Go, FC = "__lodash_hash_undefined__", kC = Object.prototype, DC = kC.hasOwnProperty;
function NC(t) {
  var e = this.__data__;
  if (MC) {
    var r = e[t];
    return r === FC ? void 0 : r;
  }
  return DC.call(e, t) ? e[t] : void 0;
}
var LC = NC, VC = Go, BC = Object.prototype, UC = BC.hasOwnProperty;
function HC(t) {
  var e = this.__data__;
  return VC ? e[t] !== void 0 : UC.call(e, t);
}
var qC = HC, zC = Go, GC = "__lodash_hash_undefined__";
function KC(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = zC && e === void 0 ? GC : e, this;
}
var JC = KC, WC = CC, YC = IC, XC = LC, QC = qC, ZC = JC;
function fn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
fn.prototype.clear = WC;
fn.prototype.delete = YC;
fn.prototype.get = XC;
fn.prototype.has = QC;
fn.prototype.set = ZC;
var eR = fn, _h = eR, tR = zo, rR = lf;
function nR() {
  this.size = 0, this.__data__ = {
    hash: new _h(),
    map: new (rR || tR)(),
    string: new _h()
  };
}
var sR = nR;
function iR(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var oR = iR, aR = oR;
function cR(t, e) {
  var r = t.__data__;
  return aR(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var Ko = cR, lR = Ko;
function uR(t) {
  var e = lR(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var fR = uR, pR = Ko;
function hR(t) {
  return pR(this, t).get(t);
}
var dR = hR, mR = Ko;
function vR(t) {
  return mR(this, t).has(t);
}
var yR = vR, gR = Ko;
function bR(t, e) {
  var r = gR(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
var xR = bR, wR = sR, ER = fR, $R = dR, OR = yR, SR = xR;
function pn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
pn.prototype.clear = wR;
pn.prototype.delete = ER;
pn.prototype.get = $R;
pn.prototype.has = OR;
pn.prototype.set = SR;
var fy = pn, AR = zo, PR = lf, jR = fy, TR = 200;
function _R(t, e) {
  var r = this.__data__;
  if (r instanceof AR) {
    var n = r.__data__;
    if (!PR || n.length < TR - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new jR(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
var CR = _R, RR = zo, IR = L_, MR = B_, FR = H_, kR = z_, DR = CR;
function hn(t) {
  var e = this.__data__ = new RR(t);
  this.size = e.size;
}
hn.prototype.clear = IR;
hn.prototype.delete = MR;
hn.prototype.get = FR;
hn.prototype.has = kR;
hn.prototype.set = DR;
var NR = hn, LR = "__lodash_hash_undefined__";
function VR(t) {
  return this.__data__.set(t, LR), this;
}
var BR = VR;
function UR(t) {
  return this.__data__.has(t);
}
var HR = UR, qR = fy, zR = BR, GR = HR;
function Si(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new qR(); ++e < r; )
    this.add(t[e]);
}
Si.prototype.add = Si.prototype.push = zR;
Si.prototype.has = GR;
var KR = Si;
function JR(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
var WR = JR;
function YR(t, e) {
  return t.has(e);
}
var XR = YR, QR = KR, ZR = WR, eI = XR, tI = 1, rI = 2;
function nI(t, e, r, n, s, i) {
  var o = r & tI, a = t.length, c = e.length;
  if (a != c && !(o && c > a))
    return !1;
  var l = i.get(t), p = i.get(e);
  if (l && p)
    return l == e && p == t;
  var f = -1, d = !0, u = r & rI ? new QR() : void 0;
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
      if (!ZR(e, function(g, v) {
        if (!eI(u, v) && (m === g || s(m, g, r, n, i)))
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
var py = nI, sI = Bt, iI = sI.Uint8Array, oI = iI;
function aI(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n, s) {
    r[++e] = [s, n];
  }), r;
}
var cI = aI;
function lI(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n) {
    r[++e] = n;
  }), r;
}
var uI = lI, Ch = cf, Rh = oI, fI = cy, pI = py, hI = cI, dI = uI, mI = 1, vI = 2, yI = "[object Boolean]", gI = "[object Date]", bI = "[object Error]", xI = "[object Map]", wI = "[object Number]", EI = "[object RegExp]", $I = "[object Set]", OI = "[object String]", SI = "[object Symbol]", AI = "[object ArrayBuffer]", PI = "[object DataView]", Ih = Ch ? Ch.prototype : void 0, xc = Ih ? Ih.valueOf : void 0;
function jI(t, e, r, n, s, i, o) {
  switch (r) {
    case PI:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case AI:
      return !(t.byteLength != e.byteLength || !i(new Rh(t), new Rh(e)));
    case yI:
    case gI:
    case wI:
      return fI(+t, +e);
    case bI:
      return t.name == e.name && t.message == e.message;
    case EI:
    case OI:
      return t == e + "";
    case xI:
      var a = hI;
    case $I:
      var c = n & mI;
      if (a || (a = dI), t.size != e.size && !c)
        return !1;
      var l = o.get(t);
      if (l)
        return l == e;
      n |= vI, o.set(t, e);
      var p = pI(a(t), a(e), n, s, i, o);
      return o.delete(t), p;
    case SI:
      if (xc)
        return xc.call(t) == xc.call(e);
  }
  return !1;
}
var TI = jI;
function _I(t, e) {
  for (var r = -1, n = e.length, s = t.length; ++r < n; )
    t[s + r] = e[r];
  return t;
}
var CI = _I, RI = CI, II = Uo;
function MI(t, e, r) {
  var n = e(t);
  return II(t) ? n : RI(n, r(t));
}
var FI = MI;
function kI(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, s = 0, i = []; ++r < n; ) {
    var o = t[r];
    e(o, r, t) && (i[s++] = o);
  }
  return i;
}
var DI = kI;
function NI() {
  return [];
}
var LI = NI, VI = DI, BI = LI, UI = Object.prototype, HI = UI.propertyIsEnumerable, Mh = Object.getOwnPropertySymbols, qI = Mh ? function(t) {
  return t == null ? [] : (t = Object(t), VI(Mh(t), function(e) {
    return HI.call(t, e);
  }));
} : BI, zI = qI;
function GI(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var KI = GI, JI = jr, WI = Tr, YI = "[object Arguments]";
function XI(t) {
  return WI(t) && JI(t) == YI;
}
var QI = XI, Fh = QI, ZI = Tr, hy = Object.prototype, eM = hy.hasOwnProperty, tM = hy.propertyIsEnumerable, rM = Fh(/* @__PURE__ */ function() {
  return arguments;
}()) ? Fh : function(t) {
  return ZI(t) && eM.call(t, "callee") && !tM.call(t, "callee");
}, nM = rM, Ai = { exports: {} };
function sM() {
  return !1;
}
var iM = sM;
Ai.exports;
(function(t, e) {
  var r = Bt, n = iM, s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, l = c || n;
  t.exports = l;
})(Ai, Ai.exports);
var dy = Ai.exports, oM = 9007199254740991, aM = /^(?:0|[1-9]\d*)$/;
function cM(t, e) {
  var r = typeof t;
  return e = e ?? oM, !!e && (r == "number" || r != "symbol" && aM.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var lM = cM, uM = 9007199254740991;
function fM(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= uM;
}
var my = fM, pM = jr, hM = my, dM = Tr, mM = "[object Arguments]", vM = "[object Array]", yM = "[object Boolean]", gM = "[object Date]", bM = "[object Error]", xM = "[object Function]", wM = "[object Map]", EM = "[object Number]", $M = "[object Object]", OM = "[object RegExp]", SM = "[object Set]", AM = "[object String]", PM = "[object WeakMap]", jM = "[object ArrayBuffer]", TM = "[object DataView]", _M = "[object Float32Array]", CM = "[object Float64Array]", RM = "[object Int8Array]", IM = "[object Int16Array]", MM = "[object Int32Array]", FM = "[object Uint8Array]", kM = "[object Uint8ClampedArray]", DM = "[object Uint16Array]", NM = "[object Uint32Array]", pe = {};
pe[_M] = pe[CM] = pe[RM] = pe[IM] = pe[MM] = pe[FM] = pe[kM] = pe[DM] = pe[NM] = !0;
pe[mM] = pe[vM] = pe[jM] = pe[yM] = pe[TM] = pe[gM] = pe[bM] = pe[xM] = pe[wM] = pe[EM] = pe[$M] = pe[OM] = pe[SM] = pe[AM] = pe[PM] = !1;
function LM(t) {
  return dM(t) && hM(t.length) && !!pe[pM(t)];
}
var VM = LM;
function BM(t) {
  return function(e) {
    return t(e);
  };
}
var UM = BM, Pi = { exports: {} };
Pi.exports;
(function(t, e) {
  var r = oy, n = e && !e.nodeType && e, s = n && !0 && t && !t.nodeType && t, i = s && s.exports === n, o = i && r.process, a = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  t.exports = a;
})(Pi, Pi.exports);
var HM = Pi.exports, qM = VM, zM = UM, kh = HM, Dh = kh && kh.isTypedArray, GM = Dh ? zM(Dh) : qM, vy = GM, KM = KI, JM = nM, WM = Uo, YM = dy, XM = lM, QM = vy, ZM = Object.prototype, eF = ZM.hasOwnProperty;
function tF(t, e) {
  var r = WM(t), n = !r && JM(t), s = !r && !n && YM(t), i = !r && !n && !s && QM(t), o = r || n || s || i, a = o ? KM(t.length, String) : [], c = a.length;
  for (var l in t)
    (e || eF.call(t, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    XM(l, c))) && a.push(l);
  return a;
}
var rF = tF, nF = Object.prototype;
function sF(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || nF;
  return t === r;
}
var iF = sF;
function oF(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var aF = oF, cF = aF, lF = cF(Object.keys, Object), uF = lF, fF = iF, pF = uF, hF = Object.prototype, dF = hF.hasOwnProperty;
function mF(t) {
  if (!fF(t))
    return pF(t);
  var e = [];
  for (var r in Object(t))
    dF.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var vF = mF, yF = ly, gF = my;
function bF(t) {
  return t != null && gF(t.length) && !yF(t);
}
var xF = bF, wF = rF, EF = vF, $F = xF;
function OF(t) {
  return $F(t) ? wF(t) : EF(t);
}
var SF = OF, AF = FI, PF = zI, jF = SF;
function TF(t) {
  return AF(t, jF, PF);
}
var _F = TF, Nh = _F, CF = 1, RF = Object.prototype, IF = RF.hasOwnProperty;
function MF(t, e, r, n, s, i) {
  var o = r & CF, a = Nh(t), c = a.length, l = Nh(e), p = l.length;
  if (c != p && !o)
    return !1;
  for (var f = c; f--; ) {
    var d = a[f];
    if (!(o ? d in e : IF.call(e, d)))
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
      var w = o ? n(v, g, d, e, t, i) : n(g, v, d, t, e, i);
    if (!(w === void 0 ? g === v || s(g, v, r, n, i) : w)) {
      h = !1;
      break;
    }
    y || (y = d == "constructor");
  }
  if (h && !y) {
    var $ = t.constructor, R = e.constructor;
    $ != R && "constructor" in t && "constructor" in e && !(typeof $ == "function" && $ instanceof $ && typeof R == "function" && R instanceof R) && (h = !1);
  }
  return i.delete(t), i.delete(e), h;
}
var FF = MF, kF = un, DF = Bt, NF = kF(DF, "DataView"), LF = NF, VF = un, BF = Bt, UF = VF(BF, "Promise"), HF = UF, qF = un, zF = Bt, GF = qF(zF, "Set"), KF = GF, JF = un, WF = Bt, YF = JF(WF, "WeakMap"), XF = YF, sl = LF, il = lf, ol = HF, al = KF, cl = XF, yy = jr, dn = uy, Lh = "[object Map]", QF = "[object Object]", Vh = "[object Promise]", Bh = "[object Set]", Uh = "[object WeakMap]", Hh = "[object DataView]", ZF = dn(sl), ek = dn(il), tk = dn(ol), rk = dn(al), nk = dn(cl), lr = yy;
(sl && lr(new sl(new ArrayBuffer(1))) != Hh || il && lr(new il()) != Lh || ol && lr(ol.resolve()) != Vh || al && lr(new al()) != Bh || cl && lr(new cl()) != Uh) && (lr = function(t) {
  var e = yy(t), r = e == QF ? t.constructor : void 0, n = r ? dn(r) : "";
  if (n)
    switch (n) {
      case ZF:
        return Hh;
      case ek:
        return Lh;
      case tk:
        return Vh;
      case rk:
        return Bh;
      case nk:
        return Uh;
    }
  return e;
});
var sk = lr, wc = NR, ik = py, ok = TI, ak = FF, qh = sk, zh = Uo, Gh = dy, ck = vy, lk = 1, Kh = "[object Arguments]", Jh = "[object Array]", Hs = "[object Object]", uk = Object.prototype, Wh = uk.hasOwnProperty;
function fk(t, e, r, n, s, i) {
  var o = zh(t), a = zh(e), c = o ? Jh : qh(t), l = a ? Jh : qh(e);
  c = c == Kh ? Hs : c, l = l == Kh ? Hs : l;
  var p = c == Hs, f = l == Hs, d = c == l;
  if (d && Gh(t)) {
    if (!Gh(e))
      return !1;
    o = !0, p = !1;
  }
  if (d && !p)
    return i || (i = new wc()), o || ck(t) ? ik(t, e, r, n, s, i) : ok(t, e, c, r, n, s, i);
  if (!(r & lk)) {
    var u = p && Wh.call(t, "__wrapped__"), m = f && Wh.call(e, "__wrapped__");
    if (u || m) {
      var h = u ? t.value() : t, y = m ? e.value() : e;
      return i || (i = new wc()), s(h, y, r, n, i);
    }
  }
  return d ? (i || (i = new wc()), ak(t, e, r, n, s, i)) : !1;
}
var pk = fk, hk = pk, Yh = Tr;
function gy(t, e, r, n, s) {
  return t === e ? !0 : t == null || e == null || !Yh(t) && !Yh(e) ? t !== t && e !== e : hk(t, e, r, n, gy, s);
}
var dk = gy, mk = dk;
function vk(t, e) {
  return mk(t, e);
}
var yk = vk;
let gk = class by {
  constructor(e, r) {
    this.key = e, this.value = r;
  }
  /**
   * @returns {KeyValuePair}
   */
  clone() {
    const e = new by();
    return this.key && (e.key = this.key.clone()), this.value && (e.value = this.value.clone()), e;
  }
};
var Jo = gk, bk = "Expected a function";
function xk(t) {
  if (typeof t != "function")
    throw new TypeError(bk);
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
var Wo = xk;
const wk = Wo;
function Ec(t) {
  return typeof t == "string" ? (e) => e.element === t : t.constructor && t.extend ? (e) => e instanceof t : t;
}
let xy = class ll {
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
    return e = Ec(e), new ll(this.elements.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(e, r) {
    return e = Ec(e), new ll(this.elements.filter(wk(e), r));
  }
  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(e, r) {
    return e = Ec(e), this.elements.find(e, r);
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
typeof Symbol < "u" && (xy.prototype[Symbol.iterator] = function() {
  return this.elements[Symbol.iterator]();
});
var Yo = xy;
const Ek = yk, qs = Jo, Gt = Yo;
let $k = class Zs {
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
    return this.content instanceof Zs ? this.content.toValue() : this.content instanceof qs ? {
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
    return Ek(this.toValue(), e);
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
    if (e instanceof Zs)
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
    return this.content instanceof Zs ? new Gt([this.content]) : new Gt();
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
var Ut = $k;
const Ok = Ut;
let Sk = class extends Ok {
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
var Ak = Sk;
const Pk = Ut;
var jk = class extends Pk {
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
const Tk = Ut;
var _k = class extends Tk {
  constructor(e, r, n) {
    super(e, r, n), this.element = "number";
  }
  primitive() {
    return "number";
  }
};
const Ck = Ut;
var Rk = class extends Ck {
  constructor(e, r, n) {
    super(e, r, n), this.element = "boolean";
  }
  primitive() {
    return "boolean";
  }
};
const Ik = Wo, Mk = Ut, Xh = Yo;
let Hn = class extends Mk {
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
    return new Xh(this.content.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  reject(e, r) {
    return this.filter(Ik(e), r);
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
    return new Xh(this.findElements(e, { recursive: !0 }));
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
var wy = Hn;
const Fk = Jo, kk = Ut;
var Ey = class extends kk {
  constructor(e, r, n, s) {
    super(new Fk(), n, s), this.element = "member", this.key = e, this.value = r;
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
const Dk = Wo, Nk = Yo;
let Lk = class $y extends Nk {
  map(e, r) {
    return this.elements.map((n) => e.bind(r)(n.value, n.key, n));
  }
  filter(e, r) {
    return new $y(this.elements.filter((n) => e.bind(r)(n.value, n.key, n)));
  }
  reject(e, r) {
    return this.filter(Dk(e.bind(r)));
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
var Oy = Lk;
const Vk = Wo, Bk = Ho, Uk = wy, Hk = Ey, qk = Oy;
let zk = class extends Uk {
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
    if (Bk(e))
      return Object.keys(e).forEach((i) => {
        this.set(i, e[i]);
      }), this;
    const n = e, s = this.getMember(n);
    return s ? s.value = r : this.content.push(new Hk(n, r)), this;
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
    return new qk(this.content).filter(e, r);
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
    return this.filter(Vk(e), r);
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
var Gk = zk;
const Kk = Ut;
var Jk = class extends Kk {
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
const Wk = Ut;
var Yk = class extends Wk {
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
const mn = Ut, Sy = Ak, Ay = jk, Py = _k, jy = Rk, Ty = wy, _y = Ey, uf = Gk, Xk = Jk, Cy = Yk, Ry = Yo, Qk = Oy, Zk = Jo;
function Xo(t) {
  return t instanceof mn ? t : typeof t == "string" ? new Ay(t) : typeof t == "number" ? new Py(t) : typeof t == "boolean" ? new jy(t) : t === null ? new Sy() : Array.isArray(t) ? new Ty(t.map(Xo)) : typeof t == "object" ? new uf(t) : t;
}
mn.prototype.ObjectElement = uf;
mn.prototype.RefElement = Cy;
mn.prototype.MemberElement = _y;
mn.prototype.refract = Xo;
Ry.prototype.refract = Xo;
var Iy = {
  Element: mn,
  NullElement: Sy,
  StringElement: Ay,
  NumberElement: Py,
  BooleanElement: jy,
  ArrayElement: Ty,
  MemberElement: _y,
  ObjectElement: uf,
  LinkElement: Xk,
  RefElement: Cy,
  refract: Xo,
  ArraySlice: Ry,
  ObjectSlice: Qk,
  KeyValuePair: Zk
};
const eD = AT, tD = ZT, rD = s_, nD = l_, sD = Ho, My = p_, Se = Iy;
let Fy = class {
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
    return this.register("null", Se.NullElement).register("string", Se.StringElement).register("number", Se.NumberElement).register("boolean", Se.BooleanElement).register("array", Se.ArrayElement).register("object", Se.ObjectElement).register("member", Se.MemberElement).register("ref", Se.RefElement).register("link", Se.LinkElement), this.detect(eD, Se.NullElement, !1).detect(tD, Se.StringElement, !1).detect(rD, Se.NumberElement, !1).detect(nD, Se.BooleanElement, !1).detect(Array.isArray, Se.ArrayElement, !1).detect(sD, Se.ObjectElement, !1), this;
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
    return new My(this);
  }
};
My.prototype.Namespace = Fy;
var iD = Fy;
const oD = iD, Je = Iy;
var aD = oD, qr = Jo, qn = Je.ArraySlice, ji = Je.ObjectSlice, cD = Je.Element, _t = Je.StringElement, ul = Je.NumberElement, Ct = Je.BooleanElement, fl = Je.NullElement, ie = Je.ArrayElement, I = Je.ObjectElement, os = Je.MemberElement, Pt = Je.RefElement, pl = Je.LinkElement, ff = Je.refract;
class Ti extends _t {
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
class _i extends _t {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}
class at extends ie {
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
class Ci extends ie {
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
    const r = new ie([e.start.row, e.start.column, e.start.char]), n = new ie([e.end.row, e.end.column, e.end.char]);
    r.classes.push("position"), n.classes.push("position"), this.push(r).push(n);
  }
}
const lD = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", uD = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, fD = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, pD = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof ie) && e.classes.includes(t), Kt = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, k = (t) => t({
  hasMethod: lD,
  hasBasicElementProps: uD,
  primitiveEq: fD,
  isElementType: Kt,
  hasClass: pD
}), ve = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof cD || t(r) && e(void 0, r)), W = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof _t || t(r) && e("string", r)), pf = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof ul || t(r) && e("number", r)), hf = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof fl || t(r) && e("null", r)), as = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Ct || t(r) && e("boolean", r)), X = k(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof I || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Ne = k(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof ie && !(n instanceof I) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), ut = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof os || t(n) && e("member", n) && r(void 0, n)), ky = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof pl || t(n) && e("link", n) && r(void 0, n)), Dy = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Pt || t(n) && e("ref", n) && r(void 0, n)), hD = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ti || t(n) && e("annotation", n) && r("array", n)), dD = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof _i || t(n) && e("comment", n) && r("string", n)), Ny = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof at || t(n) && e("parseResult", n) && r("array", n)), Ly = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ci || t(n) && e("sourceMap", n) && r("array", n)), vr = (t) => Kt("object", t) || Kt("array", t) || Kt("boolean", t) || Kt("number", t) || Kt("string", t) || Kt("null", t) || Kt("member", t), cs = (t) => Ly(t.meta.get("sourceMap")), mD = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Ne(r) ? ku(Lo(r.toValue()), t) : !1;
}, Qo = (t, e) => t.length === 0 ? !0 : ku(Lo(e.classes.toValue()), t), vD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: cs,
  includesClasses: Qo,
  includesSymbols: mD,
  isAnnotationElement: hD,
  isArrayElement: Ne,
  isBooleanElement: as,
  isCommentElement: dD,
  isElement: ve,
  isLinkElement: ky,
  isMemberElement: ut,
  isNullElement: hf,
  isNumberElement: pf,
  isObjectElement: X,
  isParseResultElement: Ny,
  isPrimitiveElement: vr,
  isRefElement: Dy,
  isSourceMapElement: Ly,
  isStringElement: W
}, Symbol.toStringTag, { value: "Module" }));
class Vy extends aD {
  constructor() {
    super(), this.register("annotation", Ti), this.register("comment", _i), this.register("parseResult", at), this.register("sourceMap", Ci);
  }
}
const By = new Vy(), ls = (t) => {
  const e = new Vy();
  return gr(t) && e.use(t), e;
}, Uy = () => ({
  predicates: {
    ...vD
  },
  namespace: By
}), Zo = (t, e, r) => {
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
}, Q = {}, us = (t) => t == null ? void 0 : t.type, Hy = (t) => typeof us(t) == "string", df = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), ea = (t, {
  visitFnGetter: e = Zo,
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
        replaceWith(v, w) {
          m.replaceWith(v, w), h = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const w = e(t[v], r(h), !1);
          if (typeof w == "function") {
            const $ = w.call(t[v], h, p, f, d, u, g);
            if (typeof ($ == null ? void 0 : $.then) == "function")
              throw new ot("Async visitor not supported in sync mode", {
                visitor: t[v],
                visitFn: w
              });
            if ($ === i)
              c[v] = h;
            else if ($ === n)
              c[v] = n;
            else {
              if ($ === s)
                return $;
              if ($ !== void 0)
                if (o)
                  h = $, y = !0;
                else
                  return $;
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
            const w = v.call(t[g], h, p, f, d, u, y);
            if (typeof (w == null ? void 0 : w.then) == "function")
              throw new ot("Async visitor not supported in sync mode", {
                visitor: t[g],
                visitFn: v
              });
            if (w === n)
              c[g] = n;
            else if (w !== void 0 && w !== i)
              return w;
          }
        } else c[g] === h && (c[g] = a);
    }
  };
}, yD = (t, {
  visitFnGetter: e = Zo,
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
        replaceWith(v, w) {
          m.replaceWith(v, w), h = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const w = e(t[v], r(h), !1);
          if (typeof w == "function") {
            const $ = await w.call(t[v], h, p, f, d, u, g);
            if ($ === i)
              c[v] = h;
            else if ($ === n)
              c[v] = n;
            else {
              if ($ === s)
                return $;
              if ($ !== void 0)
                if (o)
                  h = $, y = !0;
                else
                  return $;
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
            const w = await v.call(t[g], h, p, f, d, u, y);
            if (w === n)
              c[g] = n;
            else if (w !== void 0 && w !== i)
              return w;
          }
        } else c[g] === h && (c[g] = a);
    }
  };
};
ea[Symbol.for("nodejs.util.promisify.custom")] = yD;
const mf = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = Q,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Zo,
  nodeTypeGetter: c = us,
  nodePredicate: l = Hy,
  nodeCloneFn: p = df,
  detectCycles: f = !0
} = {}) => {
  const d = r || {};
  let u, m = Array.isArray(t), h = [t], y = -1, g, v = [], w = t;
  const $ = [], R = [];
  do {
    y += 1;
    const D = y === h.length;
    let P;
    const U = D && v.length !== 0;
    if (D) {
      if (P = R.length === 0 ? void 0 : $.pop(), w = g, g = R.pop(), U)
        if (m) {
          w = w.slice();
          let A = 0;
          for (const [M, V] of v) {
            const oe = M - A;
            V === i ? (w.splice(oe, 1), A += 1) : w[oe] = V;
          }
        } else {
          w = p(w);
          for (const [A, M] of v)
            w[A] = M;
        }
      y = u.index, h = u.keys, v = u.edits, m = u.inArray, u = u.prev;
    } else if (g !== i && g !== void 0) {
      if (P = m ? y : h[y], w = g[P], w === i || w === void 0)
        continue;
      $.push(P);
    }
    let E;
    if (!Array.isArray(w)) {
      var S;
      if (!l(w))
        throw new ot(`Invalid AST Node:  ${String(w)}`, {
          node: w
        });
      if (f && R.includes(w)) {
        $.pop();
        continue;
      }
      const A = a(e, c(w), D);
      if (A) {
        for (const [V, oe] of Object.entries(n))
          e[V] = oe;
        const M = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(V, oe) {
            typeof oe == "function" ? oe(V, w, P, g, $, R) : g && (g[P] = V), D || (w = V);
          }
        };
        E = A.call(e, w, P, g, $, R, M);
      }
      if (typeof ((S = E) === null || S === void 0 ? void 0 : S.then) == "function")
        throw new ot("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: A
        });
      if (E === s)
        break;
      if (E === o) {
        if (!D) {
          $.pop();
          continue;
        }
      } else if (E !== void 0 && (v.push([P, E]), !D))
        if (l(E))
          w = E;
        else {
          $.pop();
          continue;
        }
    }
    if (E === void 0 && U && v.push([P, w]), !D) {
      var C;
      u = {
        inArray: m,
        index: y,
        keys: h,
        edits: v,
        prev: u
      }, m = Array.isArray(w), h = m ? w : (C = d[c(w)]) !== null && C !== void 0 ? C : [], y = -1, v = [], g !== i && g !== void 0 && R.push(g), g = w;
    }
  } while (u !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
mf[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = Q,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Zo,
  nodeTypeGetter: c = us,
  nodePredicate: l = Hy,
  nodeCloneFn: p = df,
  detectCycles: f = !0
} = {}) => {
  const d = r || {};
  let u, m = Array.isArray(t), h = [t], y = -1, g, v = [], w = t;
  const $ = [], R = [];
  do {
    y += 1;
    const C = y === h.length;
    let D;
    const P = C && v.length !== 0;
    if (C) {
      if (D = R.length === 0 ? void 0 : $.pop(), w = g, g = R.pop(), P)
        if (m) {
          w = w.slice();
          let E = 0;
          for (const [A, M] of v) {
            const V = A - E;
            M === i ? (w.splice(V, 1), E += 1) : w[V] = M;
          }
        } else {
          w = p(w);
          for (const [E, A] of v)
            w[E] = A;
        }
      y = u.index, h = u.keys, v = u.edits, m = u.inArray, u = u.prev;
    } else if (g !== i && g !== void 0) {
      if (D = m ? y : h[y], w = g[D], w === i || w === void 0)
        continue;
      $.push(D);
    }
    let U;
    if (!Array.isArray(w)) {
      if (!l(w))
        throw new ot(`Invalid AST Node: ${String(w)}`, {
          node: w
        });
      if (f && R.includes(w)) {
        $.pop();
        continue;
      }
      const E = a(e, c(w), C);
      if (E) {
        for (const [M, V] of Object.entries(n))
          e[M] = V;
        const A = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(M, V) {
            typeof V == "function" ? V(M, w, D, g, $, R) : g && (g[D] = M), C || (w = M);
          }
        };
        U = await E.call(e, w, D, g, $, R, A);
      }
      if (U === s)
        break;
      if (U === o) {
        if (!C) {
          $.pop();
          continue;
        }
      } else if (U !== void 0 && (v.push([D, U]), !C))
        if (l(U))
          w = U;
        else {
          $.pop();
          continue;
        }
    }
    if (U === void 0 && P && v.push([D, w]), !C) {
      var S;
      u = {
        inArray: m,
        index: y,
        keys: h,
        edits: v,
        prev: u
      }, m = Array.isArray(w), h = m ? w : (S = d[c(w)]) !== null && S !== void 0 ? S : [], y = -1, v = [], g !== i && g !== void 0 && R.push(g), g = w;
    }
  } while (u !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
class qy extends ot {
  constructor(r, n) {
    super(r, n);
    b(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class gD extends qy {
}
class bD extends qy {
}
const F = (t, e = {}) => {
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
    } = t, o = ve(s) ? F(s, n) : s, a = ve(i) ? F(i, n) : i, c = new qr(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof ji) {
    const s = (a) => F(a, n), i = [...t].map(s), o = new ji(i);
    return r.set(t, o), o;
  }
  if (t instanceof qn) {
    const s = (a) => F(a, n), i = [...t].map(s), o = new qn(i);
    return r.set(t, o), o;
  }
  if (ve(t)) {
    const s = ke(t);
    if (r.set(t, s), t.content)
      if (ve(t.content))
        s.content = F(t.content, n);
      else if (t.content instanceof qr)
        s.content = F(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => F(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new gD("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
F.safe = (t) => {
  try {
    return F(t);
  } catch {
    return t;
  }
};
const zy = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new qr(e, r);
}, xD = (t) => {
  const e = [...t];
  return new qn(e);
}, wD = (t) => {
  const e = [...t];
  return new ji(e);
}, Gy = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = F(t.meta)), t.attributes.length > 0 && (e._attributes = F(t.attributes)), ve(t.content)) {
    const r = t.content;
    e.content = Gy(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof qr ? e.content = zy(t.content) : e.content = t.content;
  return e;
}, ke = (t) => {
  if (t instanceof qr)
    return zy(t);
  if (t instanceof ji)
    return wD(t);
  if (t instanceof qn)
    return xD(t);
  if (ve(t))
    return Gy(t);
  throw new bD("Value provided to cloneShallow function couldn't be cloned", {
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
const vn = (t) => X(t) ? "ObjectElement" : Ne(t) ? "ArrayElement" : ut(t) ? "MemberElement" : W(t) ? "StringElement" : as(t) ? "BooleanElement" : pf(t) ? "NumberElement" : hf(t) ? "NullElement" : ky(t) ? "LinkElement" : Dy(t) ? "RefElement" : void 0, Ky = (t) => ve(t) ? ke(t) : df(t), Jy = _e(vn, Pr), yn = {
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
class Wy {
  constructor({
    predicate: e = Mu,
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
} = {}) => mf(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: vn,
  nodePredicate: Jy,
  nodeCloneFn: Ky,
  ...n
});
Ie[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = yn,
  ...n
} = {}) => mf[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: vn,
  nodePredicate: Jy,
  nodeCloneFn: Ky,
  ...n
});
const Yy = {
  toolboxCreator: Uy,
  visitorOptions: {
    nodeTypeGetter: vn,
    exposeEdits: !0
  }
}, gn = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Yu(Yy, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((p) => p(o)), c = ea(a.map(Ei({}, "visitor")), {
    ...i
  });
  a.forEach(Bn(["pre"], []));
  const l = Ie(t, c, i);
  return a.forEach(Bn(["post"], [])), l;
}, ED = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Yu(Yy, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = ea[Symbol.for("nodejs.util.promisify.custom")], l = Ie[Symbol.for("nodejs.util.promisify.custom")], p = c(a.map(Ei({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(Bn(["pre"], [])));
  const f = await l(t, p, i);
  return await Promise.allSettled(a.map(Bn(["post"], []))), f;
};
gn[Symbol.for("nodejs.util.promisify.custom")] = ED;
var Xy = { exports: {} };
(function(t) {
  var e = (() => {
    var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = ($, R, S) => R in $ ? r($, R, { enumerable: !0, configurable: !0, writable: !0, value: S }) : $[R] = S, l = ($, R) => {
      for (var S in R || (R = {}))
        o.call(R, S) && c($, S, R[S]);
      if (i)
        for (var S of i(R))
          a.call(R, S) && c($, S, R[S]);
      return $;
    }, p = ($, R) => {
      for (var S in R)
        r($, S, { get: R[S], enumerable: !0 });
    }, f = ($, R, S, C) => {
      if (R && typeof R == "object" || typeof R == "function")
        for (let D of s(R))
          !o.call($, D) && D !== S && r($, D, { get: () => R[D], enumerable: !(C = n(R, D)) || C.enumerable });
      return $;
    }, d = ($) => f(r({}, "__esModule", { value: !0 }), $), u = ($, R, S) => (c($, typeof R != "symbol" ? R + "" : R, S), S), m = {};
    p(m, {
      DEFAULT_OPTIONS: () => g,
      DEFAULT_UUID_LENGTH: () => y,
      default: () => w
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
        }), u(this, "log", (...E) => {
          const A = [...E];
          if (A[0] = `[short-unique-id] ${E[0]}`, this.debug === !0 && typeof console < "u" && console !== null)
            return console.log(...A);
        }), u(this, "_normalizeDictionary", (E, A) => {
          let M;
          if (E && Array.isArray(E) && E.length > 1)
            M = E;
          else {
            M = [];
            let V;
            this.dictIndex = V = 0;
            const oe = `_${E}_dict_ranges`, ge = this._dict_ranges[oe];
            Object.keys(ge).forEach(($e) => {
              const L = $e;
              for (this.dictRange = ge[L], this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1], this.dictIndex = V = this.lowerBound; this.lowerBound <= this.upperBound ? V < this.upperBound : V > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? V += 1 : V -= 1)
                M.push(String.fromCharCode(this.dictIndex));
            });
          }
          return A && (M = M.sort(() => Math.random() - 0.5)), M;
        }), u(this, "setDictionary", (E, A) => {
          this.dict = this._normalizeDictionary(E, A), this.dictLength = this.dict.length, this.setCounter(0);
        }), u(this, "seq", () => this.sequentialUUID()), u(this, "sequentialUUID", () => {
          let E, A, M = "";
          E = this.counter;
          do
            A = E % this.dictLength, E = Math.trunc(E / this.dictLength), M += this.dict[A];
          while (E !== 0);
          return this.counter += 1, M;
        }), u(this, "rnd", (E = this.uuidLength || y) => this.randomUUID(E)), u(this, "randomUUID", (E = this.uuidLength || y) => {
          let A, M, V;
          if (E === null || typeof E > "u" || E < 1)
            throw new Error("Invalid UUID Length Provided");
          for (A = "", V = 0; V < E; V += 1)
            M = parseInt(
              (Math.random() * this.dictLength).toFixed(0),
              10
            ) % this.dictLength, A += this.dict[M];
          return A;
        }), u(this, "fmt", (E, A) => this.formattedUUID(E, A)), u(this, "formattedUUID", (E, A) => {
          const M = {
            $r: this.randomUUID,
            $s: this.sequentialUUID,
            $t: this.stamp
          };
          return E.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (oe) => {
              const ge = oe.slice(0, 2), $e = parseInt(oe.slice(2), 10);
              return ge === "$s" ? M[ge]().padStart($e, "0") : ge === "$t" && A ? M[ge]($e, A) : M[ge]($e);
            }
          );
        }), u(this, "availableUUIDs", (E = this.uuidLength) => parseFloat(
          Math.pow([...new Set(this.dict)].length, E).toFixed(0)
        )), u(this, "approxMaxBeforeCollision", (E = this.availableUUIDs(this.uuidLength)) => parseFloat(
          Math.sqrt(Math.PI / 2 * E).toFixed(20)
        )), u(this, "collisionProbability", (E = this.availableUUIDs(this.uuidLength), A = this.uuidLength) => parseFloat(
          (this.approxMaxBeforeCollision(E) / this.availableUUIDs(A)).toFixed(20)
        )), u(this, "uniqueness", (E = this.availableUUIDs(this.uuidLength)) => {
          const A = parseFloat(
            (1 - this.approxMaxBeforeCollision(E) / E).toFixed(20)
          );
          return A > 1 ? 1 : A < 0 ? 0 : A;
        }), u(this, "getVersion", () => this.version), u(this, "stamp", (E, A) => {
          const M = Math.floor(+(A || /* @__PURE__ */ new Date()) / 1e3).toString(16);
          if (typeof E == "number" && E === 0)
            return M;
          if (typeof E != "number" || E < 10)
            throw new Error(
              [
                "Param finalLength must be a number greater than or equal to 10,",
                "or 0 if you want the raw hexadecimal timestamp"
              ].join(`
`)
            );
          const V = E - 9, oe = Math.round(Math.random() * (V > 15 ? 15 : V)), ge = this.randomUUID(V);
          return `${ge.substring(0, oe)}${M}${ge.substring(oe)}${oe.toString(16)}`;
        }), u(this, "parseStamp", (E, A) => {
          if (A && !/t0|t[1-9]\d{1,}/.test(A))
            throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
          const M = A ? A.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (oe) => {
              const ge = {
                $r: (j) => [...Array(j)].map(() => "r").join(""),
                $s: (j) => [...Array(j)].map(() => "s").join(""),
                $t: (j) => [...Array(j)].map(() => "t").join("")
              }, $e = oe.slice(0, 2), L = parseInt(oe.slice(2), 10);
              return ge[$e](L);
            }
          ).replace(
            /^(.*?)(t{8,})(.*)$/g,
            (oe, ge, $e) => E.substring(ge.length, ge.length + $e.length)
          ) : E;
          if (M.length === 8)
            return new Date(parseInt(M, 16) * 1e3);
          if (M.length < 10)
            throw new Error("Stamp length invalid");
          const V = parseInt(M.substring(M.length - 1), 16);
          return new Date(parseInt(M.substring(V, V + 8), 16) * 1e3);
        }), u(this, "setCounter", (E) => {
          this.counter = E;
        }), u(this, "validate", (E, A) => {
          const M = A ? this._normalizeDictionary(A) : this.dict;
          return E.split("").every((V) => M.includes(V));
        });
        const S = l(l({}, g), R);
        this.counter = 0, this.debug = !1, this.dict = [], this.version = h;
        const {
          dictionary: C,
          shuffle: D,
          length: P,
          counter: U
        } = S;
        return this.uuidLength = P, this.setDictionary(C, D), this.setCounter(U), this.debug = S.debug, this.log(this.dict), this.log(
          `Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`
        ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this), this;
      }
    };
    u(v, "default", v);
    var w = v;
    return d(m);
  })();
  t.exports = e.default, typeof window < "u" && (e = e.default);
})(Xy);
var $D = Xy.exports;
const OD = /* @__PURE__ */ $o($D);
class SD extends ot {
  constructor(r, n) {
    super(r, n);
    b(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class vf {
  constructor({
    length: e = 6
  } = {}) {
    b(this, "uuid");
    b(this, "identityMap");
    this.uuid = new OD({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  }
  identify(e) {
    if (!ve(e))
      throw new SD("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
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
new vf();
class AD extends Array {
  constructor() {
    super(...arguments);
    b(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new yc("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new yc("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new yc("latest method in MediaTypes class is not yet implemented.");
  }
}
const PD = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return ve(t) && (t.meta.length > 0 && (n.meta = F(t.meta)), t.attributes.length > 0 && (n.attributes = F(t.attributes))), gn(n, r, {
    toolboxCreator: Uy,
    visitorOptions: {
      nodeTypeGetter: vn
    }
  });
}, et = (t) => (e, r = {}) => PD(e, {
  ...r,
  Type: t
});
I.refract = et(I);
ie.refract = et(ie);
_t.refract = et(_t);
Ct.refract = et(Ct);
fl.refract = et(fl);
ul.refract = et(ul);
pl.refract = et(pl);
Pt.refract = et(Pt);
Ti.refract = et(Ti);
_i.refract = et(_i);
at.refract = et(at);
Ci.refract = et(Ci);
const jD = (t, e) => {
  const r = new Wy({
    predicate: t
  });
  return Ie(e, r), new qn(r.result);
}, Qy = (t, e) => {
  const r = new Wy({
    predicate: t,
    returnOnTrue: Q
  });
  return Ie(e, r), Lv(void 0, [0], r.result);
}, Zy = (t) => typeof (t == null ? void 0 : t.type) == "string" ? t.type : vn(t), eg = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...yn
}, tg = (t, e, {
  keyMap: r = eg,
  ...n
} = {}) => Ie(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Zy,
  nodePredicate: kt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
tg[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = eg,
  ...r
} = {}) => Ie[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: Zy,
  nodePredicate: kt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class TD {
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
class _D {
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
let CD = class {
  constructor() {
    b(this, "ObjectElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new _D(e.content);
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
        const r = new TD(e.content);
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
const O = (t) => ve(t) ? W(t) || pf(t) || as(t) || hf(t) ? t.toValue() : tg(t, new CD()) : t, ei = (t, e = /* @__PURE__ */ new WeakMap()) => (ut(t) ? (e.set(t.key, t), ei(t.key, e), e.set(t.value, t), ei(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), ei(r, e);
}), e), RD = (t, e, r) => {
  const n = r.get(t);
  ut(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, ID = (t, e, r) => {
  const n = r.get(t);
  X(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, MD = (t, e, r) => {
  const n = r.get(t);
  Ne(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class FD {
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
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : ei(this.element);
    const s = this.edges.get(e);
    if (!nr(s))
      return X(s) ? ID(e, r, this.edges) : Ne(s) ? MD(e, r, this.edges) : ut(s) && RD(e, r, this.edges), this.element;
  }
}
const kD = (t, e, r) => new FD({
  element: r
}).transclude(t, e), ta = (t, e) => {
  const r = en(t, e);
  return mj((n) => {
    if (gr(n) && Fv("$ref", n) && xj(Pr, "$ref", n)) {
      const s = He(["$ref"], n), i = Zu("#/", s);
      return He(i.split("/"), r);
    }
    return gr(n) ? ta(n, r) : n;
  }, t);
}, rg = (t, e = By) => {
  if (Pr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return gr(t) && Fv("element", t) ? e.fromRefract(t) : e.toElement(t);
}, Ri = (t) => {
  const e = t.meta.length > 0 ? F(t.meta) : void 0, r = t.attributes.length > 0 ? F(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, Ii = (t, e) => e.clone && e.isMergeableElement(t) ? yt(Ri(t), t, e) : t, DD = (t, e) => {
  if (typeof e.customMerge != "function")
    return yt;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : yt;
}, ND = (t) => typeof t.customMetaMerge != "function" ? (e) => F(e) : t.customMetaMerge, LD = (t) => typeof t.customAttributesMerge != "function" ? (e) => F(e) : t.customAttributesMerge, VD = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => Ii(n, r)), BD = (t, e, r) => {
  const n = X(t) ? Ri(t) : Ri(e);
  return X(t) && t.forEach((s, i, o) => {
    const a = ke(o);
    a.value = Ii(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = O(i);
    let c;
    if (X(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const l = t.get(a);
      c = ke(o), c.value = DD(i, r)(l, s);
    } else
      c = ke(o), c.value = Ii(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, zs = {
  clone: !0,
  isMergeableElement: (t) => X(t) || Ne(t),
  arrayElementMerge: VD,
  objectElementMerge: BD,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
};
function yt(t, e, r) {
  var n, s, i;
  const o = {
    ...zs,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : zs.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : zs.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : zs.objectElementMerge;
  const a = Ne(e), c = Ne(t);
  if (!(a === c))
    return Ii(e, o);
  const p = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return p.meta = ND(o)(t.meta, e.meta), p.attributes = LD(o)(t.attributes, e.attributes), p;
}
yt.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new I() : t.reduce((r, n) => yt(r, n, e), Ri(t[0]));
};
class yf extends he {
}
class ng extends yf {
}
const UD = async (t, e) => {
  let r = t, n = !1;
  if (!Ny(t)) {
    const o = ke(t);
    o.classes.push("result"), r = new at([o]), n = !0;
  }
  const s = new Un({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await sf("canDereference", [s, e], e.dereference.strategies);
  if (ss(i))
    throw new ng(s.uri);
  try {
    const {
      result: o
    } = await of("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new yf(`Error while dereferencing file "${s.uri}"`, {
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
class HD {
  constructor({
    name: e
  }) {
    b(this, "name");
    this.name = e;
  }
}
class qD extends HD {
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
    return Bo(r.uri);
  }
}
class zD {
  constructor({
    name: e
  }) {
    b(this, "name");
    this.name = e;
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
class $c extends Array {
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
class sg extends he {
}
class KD extends sg {
}
class JD extends he {
}
class gf extends JD {
}
class WD extends sg {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
class zr extends yf {
}
class YD extends af {
}
class Rt extends nl {
}
const XD = async (t, e = {}) => {
  const r = ny(ry, e);
  return UD(t, r);
};
function Qh(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function QD(t) {
  if (Array.isArray(t)) return t;
}
function ZD(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function eN(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function tN(t, e, r) {
  return e && eN(t.prototype, e), t;
}
function ig(t, e) {
  return e != null && typeof Symbol < "u" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
}
function rN(t, e) {
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
function nN() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function sN(t, e) {
  return QD(t) || rN(t, e) || iN(t, e) || nN();
}
function Gr(t) {
  "@swc/helpers - typeof";
  return t && typeof Symbol < "u" && t.constructor === Symbol ? "symbol" : typeof t;
}
function iN(t, e) {
  if (t) {
    if (typeof t == "string") return Qh(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qh(t, e);
  }
}
var og = function(t) {
  throw TypeError(t);
}, ag = function(t, e, r) {
  return e.has(t) || og("Cannot " + r);
}, Fe = function(t, e, r) {
  return ag(t, e, "read from private field"), e.get(t);
}, Zh = function(t, e, r) {
  return e.has(t) ? og("Cannot add the same private member more than once") : ig(e, WeakSet) ? e.add(t) : e.set(t, r);
}, Oc = function(t, e, r, n) {
  return ag(t, e, "write to private field"), e.set(t, r), r;
}, bn = function(t) {
  return Object.prototype.toString.call(t);
}, cg = function(t) {
  return ArrayBuffer.isView(t) && !ig(t, DataView);
}, oN = function(t) {
  return bn(t) === "[object Date]";
}, aN = function(t) {
  return bn(t) === "[object RegExp]";
}, cN = function(t) {
  return bn(t) === "[object Error]";
}, lN = function(t) {
  return bn(t) === "[object Boolean]";
}, uN = function(t) {
  return bn(t) === "[object Number]";
}, fN = function(t) {
  return bn(t) === "[object String]";
}, lg = Array.isArray, pN = Object.getOwnPropertyDescriptor, hN = Object.prototype.propertyIsEnumerable, dN = Object.getOwnPropertySymbols, ti = Object.prototype.hasOwnProperty;
function bf(t) {
  for (var e = Object.keys(t), r = dN(t), n = 0; n < r.length; n++)
    hN.call(t, r[n]) && e.push(r[n]);
  return e;
}
function mN(t, e) {
  var r;
  return !(!((r = pN(t, e)) === null || r === void 0) && r.writable);
}
function ug(t, e) {
  if ((typeof t > "u" ? "undefined" : Gr(t)) === "object" && t !== null) {
    var r;
    if (lg(t))
      r = [];
    else if (oN(t))
      r = new Date(t.getTime ? t.getTime() : t);
    else if (aN(t))
      r = new RegExp(t);
    else if (cN(t))
      r = {
        message: t.message
      };
    else if (lN(t) || uN(t) || fN(t))
      r = Object(t);
    else {
      if (cg(t))
        return t.slice();
      r = Object.create(Object.getPrototypeOf(t));
    }
    var n = e.includeSymbols ? bf : Object.keys, s = !0, i = !1, o = void 0;
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
var fg = {
  includeSymbols: !1,
  immutable: !1
};
function ed(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fg, n = [], s = [], i = !0, o = r.includeSymbols ? bf : Object.keys, a = !!r.immutable;
  return function c(l) {
    var p = a ? ug(l, r) : l, f = {}, d = !0, u = {
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
      update: function(A) {
        var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        u.isRoot || (u.parent.node[u.key] = A), u.node = A, M && (d = !1);
      },
      delete: function(A) {
        delete u.parent.node[u.key], A && (d = !1);
      },
      remove: function(A) {
        lg(u.parent.node) ? u.parent.node.splice(u.key, 1) : delete u.parent.node[u.key], A && (d = !1);
      },
      keys: null,
      before: function(A) {
        f.before = A;
      },
      after: function(A) {
        f.after = A;
      },
      pre: function(A) {
        f.pre = A;
      },
      post: function(A) {
        f.post = A;
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
        for (var E = 0; E < s.length; E++)
          if (s[E].node_ === l) {
            u.circular = s[E];
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
      var y, g = !0, v = !1, w = void 0;
      try {
        for (var $ = Object.entries((y = u.keys) !== null && y !== void 0 ? y : [])[Symbol.iterator](), R; !(g = (R = $.next()).done); g = !0) {
          var S = sN(R.value, 2), C = S[0], D = S[1], P;
          n.push(D), f.pre && f.pre.call(u, u.node[D], D);
          var U = c(u.node[D]);
          a && ti.call(u.node, D) && !mN(u.node, D) && (u.node[D] = U.node), U.isLast = !((P = u.keys) === null || P === void 0) && P.length ? +C === u.keys.length - 1 : !1, U.isFirst = +C == 0, f.post && f.post.call(u, U), n.pop();
        }
      } catch (E) {
        v = !0, w = E;
      } finally {
        try {
          !g && $.return != null && $.return();
        } finally {
          if (v)
            throw w;
        }
      }
      s.pop();
    }
    return f.after && f.after.call(u, u.node), u;
  }(t).node;
}
var Be, Jt, Et = /* @__PURE__ */ function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fg;
    ZD(this, t), Zh(this, Be), Zh(this, Jt), Oc(this, Be, e), Oc(this, Jt, r);
  }
  return tN(t, [
    {
      /**
      * Get the element at the array `path`.
      */
      key: "get",
      value: function(r) {
        for (var n = Fe(this, Be), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!ti.call(n, i) || !Fe(this, Jt).includeSymbols && (typeof i > "u" ? "undefined" : Gr(i)) === "symbol")
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
          if (!ti.call(n, i) || !Fe(this, Jt).includeSymbols && (typeof i > "u" ? "undefined" : Gr(i)) === "symbol")
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
          ti.call(s, o) || (s[o] = {}), s = s[o];
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
        return ed(Fe(this, Be), r, {
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
        return Oc(this, Be, ed(Fe(this, Be), r, Fe(this, Jt))), Fe(this, Be);
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
        return cg(Fe(this, Be)) ? Fe(this, Be).slice() : function i(o) {
          for (var a = 0; a < r.length; a++)
            if (r[a] === o)
              return n[a];
          if ((typeof o > "u" ? "undefined" : Gr(o)) === "object" && o !== null) {
            var c = ug(o, s);
            r.push(o), n.push(c);
            var l = s.includeSymbols ? bf : Object.keys, p = !0, f = !1, d = void 0;
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
var vN = $t;
const yN = ["properties"], gN = ["properties"], bN = [
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
], xN = ["schema/example", "items/example"];
function pg(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    yN.indexOf(e) > -1 && gN.indexOf(r) === -1 || bN.indexOf(n) > -1 || xN.some((s) => n.indexOf(s) > -1)
  );
}
function wN(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return vN(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), l = hl(this.node, n(a));
      i.push(r.replace(c, l));
    }
  }), i;
}
function hl(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if (Bo(s))
    o = Oe(s, i);
  else {
    const a = Oe(ni, s), l = Oe(a, i).replace(ni, "");
    o = i.startsWith("/") ? l : l.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const EN = /^([a-z]+:\/\/|\/\/)/i;
class nn extends ot {
}
const St = {}, td = /* @__PURE__ */ new WeakMap(), $N = [
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
], ON = (t) => $N.some((e) => e(t)), SN = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (pg(i) || ON(i))
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
    const a = dg(t), c = a[0], l = a[1] || "";
    let p;
    try {
      p = o || c ? hg(c, o) : null;
    } catch (h) {
      return dl(h, {
        pointer: l,
        $ref: t,
        basePath: p,
        fullPath: r
      });
    }
    let f, d;
    if (_N(l, p, i, n) && !s.useCircularStructures) {
      const h = hl(t, p);
      return t === h ? null : te.replace(r, h);
    }
    if (p == null ? (d = wf(l), f = n.get(d), typeof f > "u" && (f = new nn(`Could not resolve reference: ${t}`, {
      pointer: l,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (f = mg(p, l), f.__value != null ? f = f.__value : f = f.catch((h) => {
      throw dl(h, {
        pointer: l,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), f instanceof Error)
      return [te.remove(r), f];
    const u = hl(t, p), m = te.replace(i, f, {
      $$ref: u
    });
    if (p && p !== o)
      return [m, te.context(i, {
        baseDoc: p
      })];
    try {
      if (!CN(n.state, m) || s.useCircularStructures)
        return m;
    } catch {
      return null;
    }
  }
}, xf = Object.assign(SN, {
  docCache: St,
  absoluteify: hg,
  clearCache: AN,
  JSONRefError: nn,
  wrapError: dl,
  getDoc: vg,
  split: dg,
  extractFromDoc: mg,
  fetchJSON: PN,
  extract: ml,
  jsonPointerToArray: wf,
  unescapeJsonPointerToken: yg
});
function hg(t, e) {
  if (!EN.test(t)) {
    if (!e)
      throw new nn(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return Oe(e, t);
  }
  return t;
}
function dl(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new nn(`Could not resolve reference: ${r}`, {
    ...e,
    cause: t
  });
}
function dg(t) {
  return (t + "").split("#");
}
function mg(t, e) {
  const r = St[t];
  if (r && !te.isPromise(r))
    try {
      const n = ml(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return vg(t).then((n) => ml(e, n));
}
function AN(t) {
  typeof t < "u" ? delete St[t] : Object.keys(St).forEach((e) => {
    delete St[e];
  });
}
function vg(t) {
  const e = St[t];
  return e ? te.isPromise(e) ? e : Promise.resolve(e) : (St[t] = xf.fetchJSON(t).then((r) => (St[t] = r, r)), St[t]);
}
function PN(t) {
  return fetch(t, {
    headers: {
      Accept: xd
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => Wr.load(e));
}
function ml(t, e) {
  const r = wf(t);
  if (r.length < 1)
    return e;
  const n = te.getIn(e, r);
  if (typeof n > "u")
    throw new nn(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function wf(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(yg);
}
function yg(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function gg(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function jN(t) {
  return t.length === 0 ? "" : `/${t.map(gg).join("/")}`;
}
const TN = (t) => !t || t === "/" || t === "#";
function Sc(t, e) {
  if (TN(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function _N(t, e, r, n) {
  let s = td.get(n);
  s || (s = {}, td.set(n, s));
  const i = jN(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && Sc(a, t))
    return !0;
  let l = "";
  if (r.some((f) => (l = `${l}/${gg(f)}`, s[l] && s[l].some((d) => Sc(d, o) || Sc(o, d)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function CN(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return te.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const RN = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (pg(i))
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
      const f = r.slice(0, -1), d = wN(l, f, {
        getBaseUrlForNodePath: (u) => n.getContext([...r, p, ...u]).baseDoc,
        specmap: n
      });
      c.push(...d);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, IN = {
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
}, MN = {
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
class FN {
  constructor(e) {
    this.root = Ac(e || {});
  }
  set(e, r) {
    const n = this.getParent(e, !0);
    if (!n) {
      Mi(this.root, r, null);
      return;
    }
    const s = e[e.length - 1], {
      children: i
    } = n;
    if (i[s]) {
      Mi(i[s], r, n);
      return;
    }
    i[s] = Ac(r, n);
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
      return !i[s] && r && (i[s] = Ac(null, n)), i[s];
    }, this.root);
  }
}
function Ac(t, e) {
  return Mi({
    children: {}
  }, t, e);
}
function Mi(t, e, r) {
  return t.value = e || {}, t.protoValue = r ? {
    ...r.protoValue,
    ...t.value
  } : t.value, Object.keys(t.children).forEach((n) => {
    const s = t.children[n];
    t.children[n] = Mi(s, s.value, t);
  }), t;
}
const rd = 100, kN = 3e3, nd = () => {
};
class DN {
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
      contextTree: new FN(),
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
          if (m < kN)
            yield* u(h.value, h.path, h);
          else
            return;
        function* u(m, h, y) {
          if (!te.isObject(m))
            a.key === h[h.length - 1] && (yield a.plugin(m, a.key, h, f));
          else {
            const g = h.length - 1, v = h[g], w = h.indexOf("properties"), $ = v === "properties" && g === w, R = f.allowMetaPatches && d[m.$$ref];
            for (const S of Object.keys(m)) {
              const C = m[S], D = h.concat(S), P = te.isObject(C), U = m.$$ref;
              if (R || P && (f.allowMetaPatches && U && (d[U] = !0), yield* u(C, D, y)), !$ && S === a.key) {
                const E = c(n, h);
                (!n || E) && (yield a.plugin(C, S, D, f, y));
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
    if (e.pluginCount = e.pluginCount || /* @__PURE__ */ new WeakMap(), e.pluginCount.set(r, (e.pluginCount.get(r) || 0) + 1), e.pluginCount[r] > rd)
      return Promise.resolve({
        spec: e.state,
        errors: e.errors.concat(new Error(`We've reached a hard limit of ${rd} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const i = this.promisedPatches.map((o) => o.value);
      return Promise.all(i.map((o) => o.then(nd, nd))).then(() => this.dispatch());
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
function NN(t) {
  return new DN(t).dispatch();
}
const ur = {
  refs: xf,
  allOf: RN,
  parameters: IN,
  properties: MN
};
async function Ef(t) {
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
  } = t, d = lu(t), u = mm(t), m = f.find((y) => y.match(e));
  return h(e);
  async function h(y) {
    d && (ur.refs.docCache[d] = y), ur.refs.fetchJSON = dm(u, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const g = [ur.refs];
    typeof o == "function" && g.push(ur.parameters), typeof i == "function" && g.push(ur.properties), r !== "strict" && g.push(ur.allOf);
    const v = await NN({
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
const bg = (t) => t.replace(/\W/gi, "_");
function LN(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${bg(t)}`;
}
function ps(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? bg(t.operationId) : LN(e, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function $f(t) {
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
function VN() {
  ur.refs.clearCache();
}
const xg = {
  name: "generic",
  match() {
    return !0;
  },
  normalize(t) {
    const {
      spec: e
    } = $f({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return Ef(t);
  }
};
async function BN(t) {
  return Ef(t);
}
const wg = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, Eg = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.([0123])(?:-rc[012])?$/.test(e);
  } catch {
    return !1;
  }
}, Of = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Sf = (t) => Eg(t) || Of(t), $g = {
  name: "openapi-2",
  match(t) {
    return wg(t);
  },
  normalize(t) {
    const {
      spec: e
    } = $f({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return BN(t);
  }
};
async function UN(t) {
  return Ef(t);
}
const Og = {
  name: "openapi-3-0",
  match(t) {
    return Eg(t);
  },
  normalize(t) {
    const {
      spec: e
    } = $f({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return UN(t);
  }
}, HN = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = lu(t), i = mm(t), o = e || await dm(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((l) => l.match(o)).resolve(a);
}, Sg = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return HN(r);
}, qN = Sg({
  strategies: [Og, $g, xg]
}), zN = async (t, e, r = {}) => {
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
  }, u = p.find((h) => h.match(t)).normalize(t), m = await qN({
    spec: u,
    ...f,
    allowMetaPatches: !0,
    skipNormalization: !Of(t)
  });
  return !n && Array.isArray(e) && e.length && (m.spec = e.reduce((h, y) => h == null ? void 0 : h[y], m.spec) || null), m;
}, GN = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return zN(e, r, s);
};
class Af extends ot {
}
class vl extends Af {
  constructor(r, n) {
    super(r, n);
    b(this, "pointer");
    typeof n < "u" && (this.pointer = n.pointer);
  }
}
class KN extends Af {
  constructor(r, n) {
    super(r, n);
    b(this, "tokens");
    typeof n < "u" && (this.tokens = [...n.tokens]);
  }
}
class jn extends Af {
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
const JN = _e(tn(/~/g, "~0"), tn(/\//g, "~1"), encodeURIComponent), WN = (t) => {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, YN = _e(tn(/~1/g, "/"), tn(/~0/g, "~"), WN), XN = (t) => {
  if (Kv(t))
    return [];
  if (!Uv("/", t))
    throw new vl(`Invalid JSON Pointer "${t}". JSON Pointers must begin with "/"`, {
      pointer: t
    });
  try {
    const e = _e(Xu("/"), es(YN))(t);
    return Mv(e);
  } catch (e) {
    throw new vl(`JSON Pointer parsing of "${t}" encountered an error.`, {
      pointer: t,
      cause: e
    });
  }
}, QN = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, Ye = (t) => {
  const e = QN(t);
  return Zu("#", e);
}, Ag = (t) => {
  try {
    return t.length === 0 ? "" : `/${t.map(JN).join("/")}`;
  } catch (e) {
    throw new KN("JSON Pointer compilation of tokens encountered an error.", {
      tokens: t,
      cause: e
    });
  }
}, st = (t, e) => {
  let r;
  try {
    r = XN(t);
  } catch (n) {
    throw new jn(`JSON Pointer evaluation failed while parsing the pointer "${t}".`, {
      pointer: t,
      element: F(e),
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
          element: F(n)
        });
      return n.get(s);
    }
    if (Ne(n)) {
      if (!(s in n.content) || !Jj(Number(s)))
        throw new jn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ArrayElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: F(n)
        });
      return n.get(Number(s));
    }
    throw new jn(`JSON Pointer evaluation failed while evaluating token "${s}" against an unexpected Element`, {
      pointer: t,
      tokens: r,
      failedToken: s,
      failedTokenPosition: i,
      element: F(n)
    });
  }, e);
};
class Pf extends AD {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return ko(this.filterByFormat(e));
  }
}
const sn = new Pf("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
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
}, ra = class extends I {
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
}, na = class extends I {
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
}, sa = class extends I {
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
}, ia = class extends I {
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
class oa extends I {
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
class aa extends I {
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
class ca extends I {
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
class la extends I {
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
const ZN = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", _s), e.register("jSONReference", aa), e.register("media", ca), e.register("linkDescription", la), e;
  }
}, eL = (t) => {
  if (ve(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, tL = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...yn
};
let Pg = class {
  constructor(e) {
    b(this, "element");
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = yt(r.meta, e.meta), cs(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = yt(r.attributes, e.attributes));
  }
}, xe = class extends Pg {
  enter(e) {
    return this.element = F(e), Q;
  }
};
const jg = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, zn = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : zn(r, [...e, r]);
}, rL = (...t) => {
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
}, sd = (t, e, r = []) => {
  var n;
  const s = (n = rL(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = zn(s);
  for (let a of t) {
    let c = zn(a);
    for (let l = c.length - 1; l >= 0; l--) {
      let p = c[l];
      o.indexOf(p) === -1 && (jg(i, p, ["constructor", ...r]), o.push(p));
    }
  }
  return i.constructor = e, i;
}, yl = (t) => t.filter((e, r) => t.indexOf(e) == r), Tg = /* @__PURE__ */ new WeakMap(), nL = (t) => Tg.get(t), sL = (t, e) => Tg.set(t, e), id = (t, e) => {
  var r, n;
  const s = yl([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = yl([...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, od = (t, e) => {
  var r, n, s, i;
  return {
    property: id((r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}, (n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}),
    method: id((s = t == null ? void 0 : t.method) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, iL = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: yl([...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : []]),
    static: od((s = t == null ? void 0 : t.static) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: od((o = t == null ? void 0 : t.instance) !== null && o !== void 0 ? o : {}, (a = e == null ? void 0 : e.instance) !== null && a !== void 0 ? a : {})
  };
}, oL = /* @__PURE__ */ new Map(), aL = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = zn(s.prototype).map((l) => l.constructor), o = (e = nL(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((l) => !r.has(l));
      for (let l of c)
        n.add(l);
      r.add(s), n.delete(s);
    }
  return [...r];
}, cL = (...t) => {
  const e = aL(...t).map((r) => oL.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => iL(r, n));
};
function _(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      jg(this, new c(...a));
  }
  i.prototype = sd(s, i), Object.setPrototypeOf(
    i,
    sd(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = cL(...t);
    for (let c of (e = a == null ? void 0 : a.class) !== null && e !== void 0 ? e : []) {
      const l = c(o);
      l && (o = l);
    }
    ad((r = a == null ? void 0 : a.static) !== null && r !== void 0 ? r : {}, o), ad((n = a == null ? void 0 : a.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return sL(o, t), o;
}
const ad = (t, e) => {
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
let sr = class extends Pg {
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
    return Vv(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = He(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return Do(Lt, ["visitors", ...r], this.specObj) ? He(["visitors", ...r], this.specObj) : He(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof xe && (i == null ? void 0 : i.constructor) === xe ? F(n) : (Ie(n, i, s), i.element);
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
        const c = this.toRefractedElement([...n, "fixedFields", O(o)], i), l = new os(F(o), c);
        this.copyMetaAndAttributes(a, l), l.classes.push("fixed-field"), this.element.content.push(l);
      } else this.ignoredFields.includes(O(o)) || this.element.content.push(F(a));
    }), this.copyMetaAndAttributes(r, this.element), Q;
  }
};
class lL extends _(Gn, xe) {
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
let uL = class extends _(sr, Ht, xe) {
  ObjectElement(e) {
    const r = gt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), Q;
  }
  ArrayElement(e) {
    return this.element = new ie(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
};
class fL extends xe {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
let pL = class extends sr {
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
    b(this, "fieldPatternPredicate", Mu);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (!this.ignoredFields.includes(O(s)) && this.fieldPatternPredicate(O(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new os(F(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(O(s)) || this.element.content.push(F(i));
    }), this.copyMetaAndAttributes(r, this.element), Q;
  }
}, ua = class extends pL {
  constructor(e) {
    super(e), this.fieldPatternPredicate = Qu;
  }
}, hL = class extends _(ua, Ht, xe) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}, dL = class extends _(ua, Ht, xe) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
class mL extends _(ua, Ht, xe) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let vL = class extends xe {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}, yL = class extends xe {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}, gL = class extends _(sr, Ht, xe) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}, bL = class extends _(sr, Ht, xe) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}, xL = class extends _(sr, Ht, xe) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
};
class wL extends _(ua, Ht, xe) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let EL = class extends _(sr, Ht, xe) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-links");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "LinkDescription"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
};
class $L extends _(Gn, xe) {
  constructor(e) {
    super(e), this.element = new aa(), this.specPath = B(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = Gn.prototype.ObjectElement.call(this, e);
    return W(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
let OL = class extends xe {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, SL = class extends sr {
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
    }) => Ku(i, B(o), No)), s = Wv(n)(r);
    return this.element = this.toRefractedElement(s, r), Q;
  }
}, Dr = class extends SL {
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
class AL extends _(Gn, xe) {
  constructor(e) {
    super(e), this.element = new ca(), this.specPath = B(["document", "objects", "Media"]);
  }
}
class PL extends _(Gn, xe) {
  constructor(e) {
    super(e), this.element = new la(), this.specPath = B(["document", "objects", "LinkDescription"]);
  }
}
const qt = {
  visitors: {
    value: xe,
    JSONSchemaOrJSONReferenceVisitor: Dr,
    document: {
      objects: {
        JSONSchema: {
          $visitor: lL,
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
            items: uL,
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
            required: fL,
            properties: hL,
            additionalProperties: Dr,
            patternProperties: dL,
            dependencies: mL,
            // validation keywords for any instance type
            enum: vL,
            type: yL,
            allOf: gL,
            anyOf: bL,
            oneOf: xL,
            not: Dr,
            definitions: wL,
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
            links: EL,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: $L,
          fixedFields: {
            $ref: OL
          }
        },
        Media: {
          $visitor: AL,
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
          $visitor: PL,
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
}, jL = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof _s || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), TL = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof aa || t(n) && e("JSONReference", n) && r("object", n)), _L = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ca || t(n) && e("media", n) && r("object", n)), CL = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof la || t(n) && e("linkDescription", n) && r("object", n)), RL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: TL,
  isJSONSchemaElement: jL,
  isLinkDescriptionElement: CL,
  isMediaElement: _L
}, Symbol.toStringTag, { value: "Module" })), IL = () => {
  const t = ls(ZN);
  return {
    predicates: {
      ...RL,
      isStringElement: W
    },
    namespace: t
  };
}, ML = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = qt
} = {}) => {
  const s = ff(t), i = ta(n), o = He(e, i), a = new o({
    specObj: i
  });
  return Ie(s, a), gn(a.element, r, {
    toolboxCreator: IL,
    visitorOptions: {
      keyMap: tL,
      nodeTypeGetter: eL
    }
  });
}, fa = (t) => (e, r = {}) => ML(e, {
  specPath: t,
  ...r
});
_s.refract = fa(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
aa.refract = fa(["visitors", "document", "objects", "JSONReference", "$visitor"]);
ca.refract = fa(["visitors", "document", "objects", "Media", "$visitor"]);
la.refract = fa(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let pa = class extends _s {
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
}, ha = class extends I {
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
}, da = class extends I {
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
const FL = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", hs), e.register("components", ds), e.register("contact", ms), e.register("discriminator", ra), e.register("encoding", na), e.register("example", vs), e.register("externalDocumentation", ys), e.register("header", xn), e.register("info", gs), e.register("license", bs), e.register("link", xs), e.register("mediaType", ws), e.register("oAuthFlow", sa), e.register("oAuthFlows", ia), e.register("openapi", Es), e.register("openApi3_0", oa), e.register("operation", $s), e.register("parameter", wn), e.register("pathItem", Os), e.register("paths", Ss), e.register("reference", As), e.register("requestBody", Ps), e.register("response", js), e.register("responses", Ts), e.register("schema", pa), e.register("securityRequirement", Cs), e.register("securityScheme", Rs), e.register("server", Is), e.register("serverVariable", Ms), e.register("tag", ha), e.register("xml", da), e;
  }
}, Li = class Li extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Li.primaryClass);
  }
};
b(Li, "primaryClass", "servers");
let Fi = Li;
const Vi = class Vi extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Vi.primaryClass);
  }
};
b(Vi, "primaryClass", "security");
let gl = Vi;
const Bi = class Bi extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Bi.primaryClass);
  }
};
b(Bi, "primaryClass", "tags");
let bl = Bi;
const Ui = class Ui extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ui.primaryClass);
  }
};
b(Ui, "primaryClass", "server-variables");
let xl = Ui;
const Hi = class Hi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Hi.primaryClass);
  }
};
b(Hi, "primaryClass", "components-schemas");
let ki = Hi;
const qi = class qi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(qi.primaryClass);
  }
};
b(qi, "primaryClass", "components-responses");
let wl = qi;
const zi = class zi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(zi.primaryClass), this.classes.push("parameters");
  }
};
b(zi, "primaryClass", "components-parameters");
let El = zi;
const Gi = class Gi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Gi.primaryClass), this.classes.push("examples");
  }
};
b(Gi, "primaryClass", "components-examples");
let $l = Gi;
const Ki = class Ki extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ki.primaryClass);
  }
};
b(Ki, "primaryClass", "components-request-bodies");
let Ol = Ki;
const Ji = class Ji extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ji.primaryClass);
  }
};
b(Ji, "primaryClass", "components-headers");
let Sl = Ji;
const Wi = class Wi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Wi.primaryClass);
  }
};
b(Wi, "primaryClass", "components-security-schemes");
let Al = Wi;
const Yi = class Yi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Yi.primaryClass);
  }
};
b(Yi, "primaryClass", "components-links");
let Pl = Yi;
const Xi = class Xi extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Xi.primaryClass);
  }
};
b(Xi, "primaryClass", "components-callbacks");
let jl = Xi;
const Qi = class Qi extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Qi.primaryClass), this.classes.push("servers");
  }
};
b(Qi, "primaryClass", "path-item-servers");
let Tl = Qi;
const Zi = class Zi extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Zi.primaryClass), this.classes.push("parameters");
  }
};
b(Zi, "primaryClass", "path-item-parameters");
let _l = Zi;
const eo = class eo extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(eo.primaryClass), this.classes.push("parameters");
  }
};
b(eo, "primaryClass", "operation-parameters");
let Di = eo;
const to = class to extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(to.primaryClass), this.classes.push("examples");
  }
};
b(to, "primaryClass", "parameter-examples");
let Cl = to;
const ro = class ro extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ro.primaryClass), this.classes.push("content");
  }
};
b(ro, "primaryClass", "parameter-content");
let Rl = ro;
const no = class no extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(no.primaryClass);
  }
};
b(no, "primaryClass", "operation-tags");
let Il = no;
const so = class so extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(so.primaryClass);
  }
};
b(so, "primaryClass", "operation-callbacks");
let Ml = so;
const io = class io extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(io.primaryClass), this.classes.push("security");
  }
};
b(io, "primaryClass", "operation-security");
let Ni = io;
const oo = class oo extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(oo.primaryClass), this.classes.push("servers");
  }
};
b(oo, "primaryClass", "operation-servers");
let Fl = oo;
const ao = class ao extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ao.primaryClass), this.classes.push("content");
  }
};
b(ao, "primaryClass", "request-body-content");
let kl = ao;
const co = class co extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(co.primaryClass), this.classes.push("examples");
  }
};
b(co, "primaryClass", "media-type-examples");
let Dl = co;
const lo = class lo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(lo.primaryClass);
  }
};
b(lo, "primaryClass", "media-type-encoding");
let Nl = lo;
const uo = class uo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(uo.primaryClass);
  }
};
b(uo, "primaryClass", "encoding-headers");
let Ll = uo;
const fo = class fo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(fo.primaryClass);
  }
};
b(fo, "primaryClass", "response-headers");
let Vl = fo;
const po = class po extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(po.primaryClass), this.classes.push("content");
  }
};
b(po, "primaryClass", "response-content");
let Bl = po;
const ho = class ho extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ho.primaryClass);
  }
};
b(ho, "primaryClass", "response-links");
let Ul = ho;
const mo = class mo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(mo.primaryClass);
  }
};
b(mo, "primaryClass", "discriminator-mapping");
let Hl = mo;
const vo = class vo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(vo.primaryClass);
  }
};
b(vo, "primaryClass", "oauth-flow-scopes");
let ql = vo;
const yo = class yo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(yo.primaryClass);
  }
};
b(yo, "primaryClass", "link-parameters");
let zl = yo;
const go = class go extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(go.primaryClass), this.classes.push("examples");
  }
};
b(go, "primaryClass", "header-examples");
let Gl = go;
const bo = class bo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(bo.primaryClass), this.classes.push("content");
  }
};
b(bo, "primaryClass", "header-content");
let Kl = bo;
const kL = (t) => {
  if (ve(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, DL = {
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
class _g {
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
class T extends _g {
  enter(e) {
    return this.element = F(e), Q;
  }
}
class Le extends _g {
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
    return Vv(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = He(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return Do(Lt, ["visitors", ...r], this.specObj) ? He(["visitors", ...r], this.specObj) : He(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof T && (i == null ? void 0 : i.constructor) === T ? F(n) : (Ie(n, i, s), i.element);
  }
}
const ue = (t) => X(t) && t.hasKey("$ref"), NL = X, LL = X, Cg = (t) => W(t.key) && Uv("x-", O(t.key));
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
    b(this, "specificationExtensionPredicate", Cg);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "boolean" && (this.canSupportSpecificationExtensions = s), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (W(o) && s.includes(O(o)) && !this.ignoredFields.includes(O(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", O(o)], i), l = new os(F(o), c);
        this.copyMetaAndAttributes(a, l), l.classes.push("fixed-field"), this.element.content.push(l);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(a)) {
        const c = this.toRefractedElement(["document", "extension"], a);
        this.element.content.push(c);
      } else this.ignoredFields.includes(O(o)) || this.element.content.push(F(a));
    }), this.copyMetaAndAttributes(r, this.element), Q;
  }
}
class VL extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new oa(), this.specPath = B(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return Y.prototype.ObjectElement.call(this, e);
  }
}
class BL extends _(Le, T) {
  StringElement(e) {
    const r = new Es(O(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, Q;
  }
}
class UL extends Le {
  MemberElement(e) {
    return this.element = F(e), this.element.classes.push("specification-extension"), Q;
  }
}
let HL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new gs(), this.specPath = B(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
class qL extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
let zL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ms(), this.specPath = B(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
}, GL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new bs(), this.specPath = B(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
}, KL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new xs(), this.specPath = B(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return (W(this.element.operationId) || W(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
class JL extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class WL extends T {
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
    b(this, "fieldPatternPredicate", Mu);
    b(this, "canSupportSpecificationExtensions", !1);
    b(this, "specificationExtensionPredicate", Cg);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s), typeof i == "boolean" && (this.canSupportSpecificationExtensions = i), typeof o == "function" && (this.specificationExtensionPredicate = o);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
        const o = this.toRefractedElement(["document", "extension"], i);
        this.element.content.push(o);
      } else if (!this.ignoredFields.includes(O(s)) && this.fieldPatternPredicate(O(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new os(F(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(O(s)) || this.element.content.push(F(i));
    }), this.copyMetaAndAttributes(r, this.element), Q;
  }
}
class z extends on {
  constructor(e) {
    super(e), this.fieldPatternPredicate = Qu;
  }
}
let YL = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new zl(), this.specPath = B(["value"]);
  }
}, XL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Is(), this.specPath = B(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
class QL extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
let jf = class extends _(Le, T) {
  constructor(e) {
    super(e), this.element = new Fi();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = NL(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}, ZL = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ms(), this.specPath = B(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
class e2 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new xl(), this.specPath = B(["document", "objects", "ServerVariable"]);
  }
}
let t2 = class extends _(Y, T) {
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
    }) => Ku(i, B(o), No)), s = Wv(n)(r);
    return this.element = this.toRefractedElement(s, r), Q;
  }
}
const r2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hs || t(n) && e("callback", n) && r("object", n)), n2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ds || t(n) && e("components", n) && r("object", n)), s2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ms || t(n) && e("contact", n) && r("object", n)), i2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vs || t(n) && e("example", n) && r("object", n)), o2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ys || t(n) && e("externalDocumentation", n) && r("object", n)), En = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xn || t(n) && e("header", n) && r("object", n)), a2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gs || t(n) && e("info", n) && r("object", n)), c2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof bs || t(n) && e("license", n) && r("object", n)), l2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xs || t(n) && e("link", n) && r("object", n)), u2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Es || t(n) && e("openapi", n) && r("string", n)), f2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof oa || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), Rg = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof $s || t(n) && e("operation", n) && r("object", n)), p2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof wn || t(n) && e("parameter", n) && r("object", n)), Tf = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Os || t(n) && e("pathItem", n) && r("object", n)), h2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ss || t(n) && e("paths", n) && r("object", n)), ae = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof As || t(n) && e("reference", n) && r("object", n)), d2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ps || t(n) && e("requestBody", n) && r("object", n)), ma = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof js || t(n) && e("response", n) && r("object", n)), m2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ts || t(n) && e("responses", n) && r("object", n)), v2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof pa || t(n) && e("schema", n) && r("object", n)), y2 = (t) => as(t) && t.classes.includes("boolean-json-schema"), g2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Cs || t(n) && e("securityRequirement", n) && r("object", n)), b2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Rs || t(n) && e("securityScheme", n) && r("object", n)), x2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Is || t(n) && e("server", n) && r("object", n)), w2 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ms || t(n) && e("serverVariable", n) && r("object", n)), va = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ws || t(n) && e("mediaType", n) && r("object", n)), Ig = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Fi || t(s) && e("array", s) && r("array", s) && n("servers", s)), E2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: y2,
  isCallbackElement: r2,
  isComponentsElement: n2,
  isContactElement: s2,
  isExampleElement: i2,
  isExternalDocumentationElement: o2,
  isHeaderElement: En,
  isInfoElement: a2,
  isLicenseElement: c2,
  isLinkElement: l2,
  isMediaTypeElement: va,
  isOpenApi3_0Element: f2,
  isOpenapiElement: u2,
  isOperationElement: Rg,
  isParameterElement: p2,
  isPathItemElement: Tf,
  isPathsElement: h2,
  isReferenceElement: ae,
  isRequestBodyElement: d2,
  isResponseElement: ma,
  isResponsesElement: m2,
  isSchemaElement: v2,
  isSecurityRequirementElement: g2,
  isSecuritySchemeElement: b2,
  isServerElement: x2,
  isServerVariableElement: w2,
  isServersElement: Ig
}, Symbol.toStringTag, { value: "Module" }));
let $2 = class extends _(bt, T) {
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
}, _f = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("examples"), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, O2 = class extends _f {
  constructor(e) {
    super(e), this.element = new Dl();
  }
}, S2 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Nl(), this.specPath = B(["document", "objects", "Encoding"]);
  }
}, A2 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Cs(), this.specPath = B(["value"]);
  }
}, P2 = class extends _(Le, T) {
  constructor(e) {
    super(e), this.element = new gl();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (X(r)) {
        const n = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(n);
      } else
        this.element.push(F(r));
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}, j2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ds(), this.specPath = B(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
}, T2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ha(), this.specPath = B(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
}, _2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new As(), this.specPath = B(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return W(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}, C2 = class extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, R2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new wn(), this.specPath = B(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return X(this.element.contentProp) && this.element.contentProp.filter(va).forEach((n, s) => {
      n.setMetaProperty("media-type", O(s));
    }), r;
  }
}, I2 = class extends _(bt, T) {
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
}, M2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new xn(), this.specPath = B(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
}, F2 = class extends _(bt, T) {
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
}, k2 = class extends _f {
  constructor(e) {
    super(e), this.element = new Gl();
  }
}, ya = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("content"), this.specPath = B(["document", "objects", "MediaType"]);
  }
}, D2 = class extends ya {
  constructor(e) {
    super(e), this.element = new Kl();
  }
}, N2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new pa(), this.specPath = B(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const {
  allOf: cd
} = qt.visitors.document.objects.JSONSchema.fixedFields;
let L2 = class extends cd {
  ArrayElement(e) {
    const r = cd.prototype.ArrayElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const {
  anyOf: ld
} = qt.visitors.document.objects.JSONSchema.fixedFields;
let V2 = class extends ld {
  ArrayElement(e) {
    const r = ld.prototype.ArrayElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const {
  oneOf: ud
} = qt.visitors.document.objects.JSONSchema.fixedFields;
let B2 = class extends ud {
  ArrayElement(e) {
    const r = ud.prototype.ArrayElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const {
  items: fd
} = qt.visitors.document.objects.JSONSchema.fixedFields;
class U2 extends fd {
  ObjectElement(e) {
    const r = fd.prototype.ObjectElement.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
}
const {
  properties: pd
} = qt.visitors.document.objects.JSONSchema.fixedFields;
let H2 = class extends pd {
  ObjectElement(e) {
    const r = pd.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const {
  type: q2
} = qt.visitors.document.objects.JSONSchema.fixedFields;
let z2 = class extends q2 {
  ArrayElement(e) {
    return this.enter(e);
  }
};
const {
  JSONSchemaOrJSONReferenceVisitor: hd
} = qt.visitors;
class dd extends hd {
  ObjectElement(e) {
    const r = hd.prototype.enter.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
let G2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ra(), this.specPath = B(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
class K2 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Hl(), this.specPath = B(["value"]);
  }
}
let J2 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new da(), this.specPath = B(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
}, W2 = class extends _f {
  constructor(e) {
    super(e), this.element = new Cl();
  }
}, Y2 = class extends ya {
  constructor(e) {
    super(e), this.element = new Rl();
  }
}, X2 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new ki(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
}, Q2 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new wl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(ma).forEach((n, s) => {
      n.setMetaProperty("http-status-code", O(s));
    }), r;
  }
}, Z2 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new El(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
}, eV = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new $l(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
class tV extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Ol(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
let rV = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Sl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
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
class nV extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Al(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
let sV = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Pl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}, iV = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new jl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}, oV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new vs(), this.specPath = B(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return W(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
class aV extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let cV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ys(), this.specPath = B(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
}, lV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new na(), this.specPath = B(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return X(this.element.headers) && this.element.headers.filter(En).forEach((n, s) => {
      n.setMetaProperty("header-name", O(s));
    }), r;
  }
}, uV = class extends _(z, T) {
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
      n.setMetaProperty("headerName", i);
    }), r;
  }
}, fV = class extends _(on, T) {
  constructor(e) {
    super(e), this.element = new Ss(), this.specPath = B(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = kt;
  }
  ObjectElement(e) {
    const r = on.prototype.ObjectElement.call(this, e);
    return this.element.filter(Tf).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", F(s));
    }), r;
  }
}, pV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ps(), this.specPath = B(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return X(this.element.contentProp) && this.element.contentProp.filter(va).forEach((n, s) => {
      n.setMetaProperty("media-type", O(s));
    }), r;
  }
}, hV = class extends ya {
  constructor(e) {
    super(e), this.element = new kl();
  }
}, dV = class extends _(on, T) {
  constructor(e) {
    super(e), this.element = new hs(), this.specPath = B(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(Tf).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", O(s));
    }), r;
  }
}, mV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new js(), this.specPath = B(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return X(this.element.contentProp) && this.element.contentProp.filter(va).forEach((n, s) => {
      n.setMetaProperty("media-type", O(s));
    }), X(this.element.headers) && this.element.headers.filter(En).forEach((n, s) => {
      n.setMetaProperty("header-name", O(s));
    }), r;
  }
};
class vV extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Vl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
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
class yV extends ya {
  constructor(e) {
    super(e), this.element = new Bl();
  }
}
class gV extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Ul(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
class md extends _(Y, on) {
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
      this.ignoredFields = [...s, ...JP(r.keys(), i)], Y.prototype.ObjectElement.call(this, r), this.specPath = this.specPathPatternedFields, this.ignoredFields = i, on.prototype.ObjectElement.call(this, r);
    } catch (i) {
      throw this.specPath = n, i;
    }
    return Q;
  }
}
let bV = class extends _(md, T) {
  constructor(e) {
    super(e), this.element = new Ts(), this.specPathFixedFields = B(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${wj(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = md.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(ma).forEach((n, s) => {
      const i = F(s);
      this.fieldPatternPredicate(O(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
class xV extends _(bt, T) {
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
    return ae(this.element) ? this.element.setMetaProperty("referenced-element", "response") : ma(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
let wV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new $s(), this.specPath = B(["document", "objects", "Operation"]);
  }
}, EV = class extends T {
  constructor(e) {
    super(e), this.element = new Il();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(F(e)), Q;
  }
}, Mg = class extends _(Le, T) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      ae(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}, $V = class extends Mg {
  constructor(e) {
    super(e), this.element = new Di();
  }
}, OV = class extends bt {
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
class SV extends _(z, T) {
  constructor(r) {
    super(r);
    b(this, "specPath");
    this.element = new Ml(), this.specPath = (n) => ue(n) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(r) {
    const n = z.prototype.ObjectElement.call(this, r);
    return this.element.filter(ae).forEach((s) => {
      s.setMetaProperty("referenced-element", "callback");
    }), n;
  }
}
class AV extends _(Le, T) {
  constructor(e) {
    super(e), this.element = new Ni();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = X(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}
let PV = class extends jf {
  constructor(e) {
    super(e), this.element = new Fl();
  }
}, jV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Os(), this.specPath = B(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(Rg).forEach((n, s) => {
      const i = F(s);
      i.content = O(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), W(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
class TV extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class _V extends jf {
  constructor(e) {
    super(e), this.element = new Tl();
  }
}
class CV extends Mg {
  constructor(e) {
    super(e), this.element = new _l();
  }
}
let RV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Rs(), this.specPath = B(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
}, IV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ia(), this.specPath = B(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
}, MV = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new sa(), this.specPath = B(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
class FV extends _(z, T) {
  constructor(e) {
    super(e), this.element = new ql(), this.specPath = B(["value"]);
  }
}
class kV extends _(Le, T) {
  constructor(e) {
    super(e), this.element = new bl();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = LL(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}
const {
  fixedFields: we
} = qt.visitors.document.objects.JSONSchema, x = {
  visitors: {
    value: T,
    document: {
      objects: {
        OpenApi: {
          $visitor: VL,
          fixedFields: {
            openapi: BL,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: jf,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: P2,
            tags: kV,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: HL,
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
            version: qL
          }
        },
        Contact: {
          $visitor: zL,
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
          $visitor: GL,
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
          $visitor: XL,
          fixedFields: {
            url: QL,
            description: {
              $ref: "#/visitors/value"
            },
            variables: e2
          }
        },
        ServerVariable: {
          $visitor: ZL,
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
          $visitor: j2,
          fixedFields: {
            schemas: X2,
            responses: Q2,
            parameters: Z2,
            examples: eV,
            requestBodies: tV,
            headers: rV,
            securitySchemes: nV,
            links: sV,
            callbacks: iV
          }
        },
        Paths: {
          $visitor: fV
        },
        PathItem: {
          $visitor: jV,
          fixedFields: {
            $ref: TV,
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
            servers: _V,
            parameters: CV
          }
        },
        Operation: {
          $visitor: wV,
          fixedFields: {
            tags: EV,
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
            parameters: $V,
            requestBody: OV,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: SV,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: AV,
            servers: PV
          }
        },
        ExternalDocumentation: {
          $visitor: cV,
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
          $visitor: R2,
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
            schema: I2,
            example: {
              $ref: "#/visitors/value"
            },
            examples: W2,
            content: Y2
          }
        },
        RequestBody: {
          $visitor: pV,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: hV,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: t2,
          fixedFields: {
            schema: $2,
            example: {
              $ref: "#/visitors/value"
            },
            examples: O2,
            encoding: S2
          }
        },
        Encoding: {
          $visitor: lV,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: uV,
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
          $visitor: bV,
          fixedFields: {
            default: xV
          }
        },
        Response: {
          $visitor: mV,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: vV,
            content: yV,
            links: gV
          }
        },
        Callback: {
          $visitor: dV
        },
        Example: {
          $visitor: oV,
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
            externalValue: aV
          }
        },
        Link: {
          $visitor: KL,
          fixedFields: {
            operationRef: JL,
            operationId: WL,
            parameters: YL,
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
          $visitor: M2,
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
            schema: F2,
            example: {
              $ref: "#/visitors/value"
            },
            examples: k2,
            content: D2
          }
        },
        Tag: {
          $visitor: T2,
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
          $visitor: _2,
          fixedFields: {
            $ref: C2
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: N2,
          fixedFields: {
            // the following properties are taken directly from the JSON Schema definition and follow the same specifications
            title: we.title,
            multipleOf: we.multipleOf,
            maximum: we.maximum,
            exclusiveMaximum: we.exclusiveMaximum,
            minimum: we.minimum,
            exclusiveMinimum: we.exclusiveMinimum,
            maxLength: we.maxLength,
            minLength: we.minLength,
            pattern: we.pattern,
            maxItems: we.maxItems,
            minItems: we.minItems,
            uniqueItems: we.uniqueItems,
            maxProperties: we.maxProperties,
            minProperties: we.minProperties,
            required: we.required,
            enum: we.enum,
            // the following properties are taken from the JSON Schema definition but their definitions were adjusted to the OpenAPI Specification
            type: z2,
            allOf: L2,
            anyOf: V2,
            oneOf: B2,
            not: dd,
            items: U2,
            properties: H2,
            additionalProperties: dd,
            description: we.description,
            format: we.format,
            default: we.default,
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
          $visitor: G2,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: K2
          }
        },
        XML: {
          $visitor: J2,
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
          $visitor: RV,
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
          $visitor: IV,
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
          $visitor: MV,
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
            scopes: FV
          }
        },
        SecurityRequirement: {
          $visitor: A2
        }
      },
      extension: {
        $visitor: UL
      }
    }
  }
}, DV = () => {
  const t = ls(FL);
  return {
    predicates: {
      ...E2,
      isElement: ve,
      isStringElement: W,
      isArrayElement: Ne,
      isObjectElement: X,
      isMemberElement: ut,
      includesClasses: Qo,
      hasElementSourceMap: cs
    },
    namespace: t
  };
}, NV = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = ff(t), s = ta(x), i = He(e, s), o = new i({
    specObj: s
  });
  return Ie(n, o), gn(o.element, r, {
    toolboxCreator: DV,
    visitorOptions: {
      keyMap: DL,
      nodeTypeGetter: kL
    }
  });
}, ee = (t) => (e, r = {}) => NV(e, {
  specPath: t,
  ...r
});
hs.refract = ee(["visitors", "document", "objects", "Callback", "$visitor"]);
ds.refract = ee(["visitors", "document", "objects", "Components", "$visitor"]);
ms.refract = ee(["visitors", "document", "objects", "Contact", "$visitor"]);
vs.refract = ee(["visitors", "document", "objects", "Example", "$visitor"]);
ra.refract = ee(["visitors", "document", "objects", "Discriminator", "$visitor"]);
na.refract = ee(["visitors", "document", "objects", "Encoding", "$visitor"]);
ys.refract = ee(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
xn.refract = ee(["visitors", "document", "objects", "Header", "$visitor"]);
gs.refract = ee(["visitors", "document", "objects", "Info", "$visitor"]);
bs.refract = ee(["visitors", "document", "objects", "License", "$visitor"]);
xs.refract = ee(["visitors", "document", "objects", "Link", "$visitor"]);
ws.refract = ee(["visitors", "document", "objects", "MediaType", "$visitor"]);
sa.refract = ee(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
ia.refract = ee(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Es.refract = ee(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
oa.refract = ee(["visitors", "document", "objects", "OpenApi", "$visitor"]);
$s.refract = ee(["visitors", "document", "objects", "Operation", "$visitor"]);
wn.refract = ee(["visitors", "document", "objects", "Parameter", "$visitor"]);
Os.refract = ee(["visitors", "document", "objects", "PathItem", "$visitor"]);
Ss.refract = ee(["visitors", "document", "objects", "Paths", "$visitor"]);
As.refract = ee(["visitors", "document", "objects", "Reference", "$visitor"]);
Ps.refract = ee(["visitors", "document", "objects", "RequestBody", "$visitor"]);
js.refract = ee(["visitors", "document", "objects", "Response", "$visitor"]);
Ts.refract = ee(["visitors", "document", "objects", "Responses", "$visitor"]);
pa.refract = ee(["visitors", "document", "objects", "Schema", "$visitor"]);
Cs.refract = ee(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Rs.refract = ee(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
Is.refract = ee(["visitors", "document", "objects", "Server", "$visitor"]);
Ms.refract = ee(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
ha.refract = ee(["visitors", "document", "objects", "Tag", "$visitor"]);
da.refract = ee(["visitors", "document", "objects", "XML", "$visitor"]);
class ga extends hs {
}
class ba extends ds {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class xa extends ms {
}
class Cf extends ra {
}
class Rf extends na {
}
class wa extends vs {
}
class Ea extends ys {
}
class $a extends xn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Oa extends gs {
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
const xo = class xo extends _t {
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
};
b(xo, "default", new xo("https://spec.openapis.org/oas/3.1/dialect/base"));
let br = xo;
class Sa extends bs {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class Aa extends xs {
}
class Pa extends ws {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class If extends sa {
}
class Mf extends ia {
}
class Ff extends Es {
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
class ja extends wn {
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
class Ta extends Ss {
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
class _a extends Ps {
}
let Ca = class extends js {
};
class Ra extends Ts {
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
  /**
   * @deprecated The example property has been deprecated in favor of the JSON Schema examples keyword. Use of example is discouraged, and later versions of this specification may remove it.
   */
  set example(e) {
    this.set("example", e);
  }
}
class Ia extends Cs {
}
class Ma extends Rs {
}
class Fa extends Is {
}
class ka extends Ms {
}
class kf extends ha {
}
class Df extends da {
}
const Nf = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", ga), e.register("components", ba), e.register("contact", xa), e.register("discriminator", Cf), e.register("encoding", Rf), e.register("example", wa), e.register("externalDocumentation", Ea), e.register("header", $a), e.register("info", Oa), e.register("jsonSchemaDialect", br), e.register("license", Sa), e.register("link", Aa), e.register("mediaType", Pa), e.register("oAuthFlow", If), e.register("oAuthFlows", Mf), e.register("openapi", Ff), e.register("openApi3_1", ir), e.register("operation", Fs), e.register("parameter", ja), e.register("pathItem", Zt), e.register("paths", Ta), e.register("reference", or), e.register("requestBody", _a), e.register("response", Ca), e.register("responses", Ra), e.register("schema", _r), e.register("securityRequirement", Ia), e.register("securityScheme", Ma), e.register("server", Fa), e.register("serverVariable", ka), e.register("tag", kf), e.register("xml", Df), e;
  }
}, wo = class wo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(wo.primaryClass);
  }
};
b(wo, "primaryClass", "components-path-items");
let Jl = wo;
const Eo = class Eo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Eo.primaryClass);
  }
};
b(Eo, "primaryClass", "webhooks");
let Wl = Eo;
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
      Ne(r) || (r = new ie(), e.set(this.storageSubField, r)), this.internalStore = r;
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
const LV = ({
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
          const d = ko(i);
          if (!Array.isArray(d) || d.length === 0)
            return;
          const u = n([...f, l, a]);
          if (o.includes(u))
            return;
          const m = Lv([], ["parameters", "content"], a), h = jj(s, [...m, ...d]);
          a.parameters = new Di(h), o.append(u);
        }
      }
    }
  };
}, VV = ({
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
            o.security = new Ni((m = s) === null || m === void 0 ? void 0 : m.content), i.append(f);
          }
        }
      }
    }
  };
}, Yl = (t) => t.replace(/\s/g, ""), Xl = (t) => t.replace(/\W/gi, "_"), BV = (t, e) => {
  const r = Xl(Yl(e.toLowerCase())), n = Xl(Yl(t));
  return `${r}${n}`;
}, UV = (t, e, r) => {
  const n = Yl(t);
  return n.length > 0 ? Xl(n) : BV(e, r);
}, HV = ({
  storageField: t = "x-normalized",
  operationIdNormalizer: e = UV
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
          const p = uj((f) => O(f.operationId), a);
          Object.entries(p).forEach(([f, d]) => {
            Array.isArray(d) && (d.length <= 1 || d.forEach((u, m) => {
              const h = `${f}${m + 1}`;
              u.operationId = new i.elements.String(h);
            }));
          }), c.forEach((f) => {
            if (typeof f.operationId > "u") return;
            const d = String(O(f.operationId)), u = a.find((m) => O(m.meta.get("originalOperationId")) === d);
            typeof u > "u" || (f.operationId = F.safe(u.operationId), f.meta.set("originalOperationId", d), f.set("__originalOperationId", d));
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
          const y = String(O(p.operationId)), g = ko(o), v = en("method", O(p.meta.get("http-method"))), w = e(y, g, v);
          y !== w && (p.operationId = new i.elements.String(w), p.set("__originalOperationId", y), p.meta.set("originalOperationId", y), a.push(p), l.append(h));
        }
      },
      LinkElement: {
        leave(p) {
          n.isLinkElement(p) && (typeof p.operationId > "u" || c.push(p));
        }
      }
    }
  };
}, qV = ({
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
              const u = i.examples.map((m) => F.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", u), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", u[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [F(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", F(i.example)), s.append(d)));
          }
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
              const u = i.examples.map((m) => F.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", u), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", u[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [F(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", F(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, GV = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ga || t(n) && e("callback", n) && r("object", n)), KV = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ba || t(n) && e("components", n) && r("object", n)), JV = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xa || t(n) && e("contact", n) && r("object", n)), WV = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof wa || t(n) && e("example", n) && r("object", n)), YV = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ea || t(n) && e("externalDocumentation", n) && r("object", n)), XV = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof $a || t(n) && e("header", n) && r("object", n)), QV = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Oa || t(n) && e("info", n) && r("object", n)), Fg = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof br || t(n) && e("jsonSchemaDialect", n) && r("string", n)), ZV = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Sa || t(n) && e("license", n) && r("object", n)), e3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Aa || t(n) && e("link", n) && r("object", n)), t3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ff || t(n) && e("openapi", n) && r("string", n)), kg = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof ir || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), Dg = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Fs || t(n) && e("operation", n) && r("object", n)), r3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ja || t(n) && e("parameter", n) && r("object", n)), xr = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zt || t(n) && e("pathItem", n) && r("object", n)), n3 = (t) => {
  if (!xr(t) || !W(t.$ref))
    return !1;
  const e = O(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, s3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ta || t(n) && e("paths", n) && r("object", n)), Cr = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof or || t(n) && e("reference", n) && r("object", n)), i3 = (t) => {
  if (!Cr(t) || !W(t.$ref))
    return !1;
  const e = O(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, o3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof _a || t(n) && e("requestBody", n) && r("object", n)), a3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ca || t(n) && e("response", n) && r("object", n)), c3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ra || t(n) && e("responses", n) && r("object", n)), It = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof _r || t(n) && e("schema", n) && r("object", n)), Lf = (t) => as(t) && t.classes.includes("boolean-json-schema"), l3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ia || t(n) && e("securityRequirement", n) && r("object", n)), u3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ma || t(n) && e("securityScheme", n) && r("object", n)), f3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Fa || t(n) && e("server", n) && r("object", n)), p3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ka || t(n) && e("serverVariable", n) && r("object", n)), h3 = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Pa || t(n) && e("mediaType", n) && r("object", n)), d3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: Lf,
  isCallbackElement: GV,
  isComponentsElement: KV,
  isContactElement: JV,
  isExampleElement: WV,
  isExternalDocumentationElement: YV,
  isHeaderElement: XV,
  isInfoElement: QV,
  isJsonSchemaDialectElement: Fg,
  isLicenseElement: ZV,
  isLinkElement: e3,
  isMediaTypeElement: h3,
  isOpenApi3_1Element: kg,
  isOpenapiElement: t3,
  isOperationElement: Dg,
  isParameterElement: r3,
  isPathItemElement: xr,
  isPathItemElementExternal: n3,
  isPathsElement: s3,
  isReferenceElement: Cr,
  isReferenceElementExternal: i3,
  isRequestBodyElement: o3,
  isResponseElement: a3,
  isResponsesElement: c3,
  isSchemaElement: It,
  isSecurityRequirementElement: l3,
  isSecuritySchemeElement: u3,
  isServerElement: f3,
  isServerVariableElement: p3
}, Symbol.toStringTag, { value: "Module" })), m3 = (t) => {
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
  return Ag(e);
}, Ng = () => {
  const t = ls(Nf);
  return {
    predicates: {
      ...d3,
      isElement: ve,
      isStringElement: W,
      isArrayElement: Ne,
      isObjectElement: X,
      isMemberElement: ut,
      isServersElement: Ig,
      includesClasses: Qo,
      hasElementSourceMap: cs
    },
    ancestorLineageToJSONPointer: m3,
    namespace: t
  };
};
class v3 extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ir(), this.specPath = B(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, Y.prototype.ObjectElement.call(this, e);
  }
}
const {
  visitors: {
    document: {
      objects: {
        Info: {
          $visitor: y3
        }
      }
    }
  }
} = x;
class g3 extends y3 {
  constructor(e) {
    super(e), this.element = new Oa();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Contact: {
          $visitor: b3
        }
      }
    }
  }
} = x;
class x3 extends b3 {
  constructor(e) {
    super(e), this.element = new xa();
  }
}
const {
  visitors: {
    document: {
      objects: {
        License: {
          $visitor: w3
        }
      }
    }
  }
} = x;
class E3 extends w3 {
  constructor(e) {
    super(e), this.element = new Sa();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Link: {
          $visitor: $3
        }
      }
    }
  }
} = x;
class O3 extends $3 {
  constructor(e) {
    super(e), this.element = new Aa();
  }
}
class S3 extends _(Le, T) {
  StringElement(e) {
    const r = new br(O(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, Q;
  }
}
const {
  visitors: {
    document: {
      objects: {
        Server: {
          $visitor: A3
        }
      }
    }
  }
} = x;
class P3 extends A3 {
  constructor(e) {
    super(e), this.element = new Fa();
  }
}
const {
  visitors: {
    document: {
      objects: {
        ServerVariable: {
          $visitor: j3
        }
      }
    }
  }
} = x;
class T3 extends j3 {
  constructor(e) {
    super(e), this.element = new ka();
  }
}
const {
  visitors: {
    document: {
      objects: {
        MediaType: {
          $visitor: _3
        }
      }
    }
  }
} = x;
class C3 extends _3 {
  constructor(e) {
    super(e), this.element = new Pa();
  }
}
const {
  visitors: {
    document: {
      objects: {
        SecurityRequirement: {
          $visitor: R3
        }
      }
    }
  }
} = x;
class I3 extends R3 {
  constructor(e) {
    super(e), this.element = new Ia();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Components: {
          $visitor: M3
        }
      }
    }
  }
} = x;
class F3 extends M3 {
  constructor(e) {
    super(e), this.element = new ba();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Tag: {
          $visitor: k3
        }
      }
    }
  }
} = x;
class D3 extends k3 {
  constructor(e) {
    super(e), this.element = new kf();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Reference: {
          $visitor: N3
        }
      }
    }
  }
} = x;
class L3 extends N3 {
  constructor(e) {
    super(e), this.element = new or();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Parameter: {
          $visitor: V3
        }
      }
    }
  }
} = x;
class B3 extends V3 {
  constructor(e) {
    super(e), this.element = new ja();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Header: {
          $visitor: U3
        }
      }
    }
  }
} = x;
class H3 extends U3 {
  constructor(e) {
    super(e), this.element = new $a();
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
class q3 extends _(Y, zt, T) {
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
   * into Schema Element: SchemaElement.refract(new ObjectElement({ type: 'object' });
   */
  getJsonSchemaDialect() {
    let e;
    return this.openApiSemanticElement !== void 0 && // @ts-ignore
    Fg(this.openApiSemanticElement.jsonSchemaDialect) ? e = O(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && W(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = O(this.openApiGenericElement.get("jsonSchemaDialect")) : e = O(this.jsonSchemaDefaultDialect), e;
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
    const r = this.parent !== void 0 ? F(this.parent.getMetaProperty("inherited$id", [])) : new ie(), n = O(e.get("$id"));
    Qu(n) && r.push(n), this.element.setMetaProperty("inherited$id", r);
  }
}
class z3 extends T {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
class G3 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class K3 extends _(z, zt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-$defs"), this.specPath = B(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
let J3 = class extends _(Le, zt, T) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-allOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (X(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
};
class W3 extends _(Le, zt, T) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-anyOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (X(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}
class Y3 extends _(Le, zt, T) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-oneOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (X(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}
class X3 extends _(z, zt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = B(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
class Q3 extends _(Le, zt, T) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-prefixItems"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (X(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Q;
  }
}
class Z3 extends _(z, zt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-properties"), this.specPath = B(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
class eB extends _(z, zt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-patternProperties"), this.specPath = B(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
class tB extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}
class rB extends T {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
class nB extends T {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
class sB extends T {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
const {
  visitors: {
    document: {
      objects: {
        Discriminator: {
          $visitor: iB
        }
      }
    }
  }
} = x;
class oB extends iB {
  constructor(e) {
    super(e), this.element = new Cf(), this.canSupportSpecificationExtensions = !0;
  }
}
const {
  visitors: {
    document: {
      objects: {
        XML: {
          $visitor: aB
        }
      }
    }
  }
} = x;
class cB extends aB {
  constructor(e) {
    super(e), this.element = new Df();
  }
}
class lB extends _(z, T) {
  constructor(e) {
    super(e), this.element = new ki(), this.specPath = B(["document", "objects", "Schema"]);
  }
}
class uB extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Jl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(Cr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const {
  visitors: {
    document: {
      objects: {
        Example: {
          $visitor: fB
        }
      }
    }
  }
} = x;
class pB extends fB {
  constructor(e) {
    super(e), this.element = new wa();
  }
}
const {
  visitors: {
    document: {
      objects: {
        ExternalDocumentation: {
          $visitor: hB
        }
      }
    }
  }
} = x;
class dB extends hB {
  constructor(e) {
    super(e), this.element = new Ea();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Encoding: {
          $visitor: mB
        }
      }
    }
  }
} = x;
class vB extends mB {
  constructor(e) {
    super(e), this.element = new Rf();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Paths: {
          $visitor: yB
        }
      }
    }
  }
} = x;
class gB extends yB {
  constructor(e) {
    super(e), this.element = new Ta();
  }
}
const {
  visitors: {
    document: {
      objects: {
        RequestBody: {
          $visitor: bB
        }
      }
    }
  }
} = x;
class xB extends bB {
  constructor(e) {
    super(e), this.element = new _a();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Callback: {
          $visitor: vd
        }
      }
    }
  }
} = x;
class wB extends vd {
  constructor(e) {
    super(e), this.element = new ga(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = vd.prototype.ObjectElement.call(this, e);
    return this.element.filter(Cr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const {
  visitors: {
    document: {
      objects: {
        Response: {
          $visitor: EB
        }
      }
    }
  }
} = x;
class $B extends EB {
  constructor(e) {
    super(e), this.element = new Ca();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Responses: {
          $visitor: OB
        }
      }
    }
  }
} = x;
class SB extends OB {
  constructor(e) {
    super(e), this.element = new Ra();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Operation: {
          $visitor: AB
        }
      }
    }
  }
} = x;
class PB extends AB {
  constructor(e) {
    super(e), this.element = new Fs();
  }
}
const {
  visitors: {
    document: {
      objects: {
        PathItem: {
          $visitor: jB
        }
      }
    }
  }
} = x;
class TB extends jB {
  constructor(e) {
    super(e), this.element = new Zt();
  }
}
const {
  visitors: {
    document: {
      objects: {
        SecurityScheme: {
          $visitor: _B
        }
      }
    }
  }
} = x;
class CB extends _B {
  constructor(e) {
    super(e), this.element = new Ma();
  }
}
const {
  visitors: {
    document: {
      objects: {
        OAuthFlows: {
          $visitor: RB
        }
      }
    }
  }
} = x;
class IB extends RB {
  constructor(e) {
    super(e), this.element = new Mf();
  }
}
const {
  visitors: {
    document: {
      objects: {
        OAuthFlow: {
          $visitor: MB
        }
      }
    }
  }
} = x;
class FB extends MB {
  constructor(e) {
    super(e), this.element = new If();
  }
}
class kB extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Wl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
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
const DB = {
  visitors: {
    value: x.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: v3,
          fixedFields: {
            openapi: x.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: S3,
            servers: x.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: kB,
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
          $visitor: g3,
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
          $visitor: x3,
          fixedFields: {
            name: x.visitors.document.objects.Contact.fixedFields.name,
            url: x.visitors.document.objects.Contact.fixedFields.url,
            email: x.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: E3,
          fixedFields: {
            name: x.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: x.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: P3,
          fixedFields: {
            url: x.visitors.document.objects.Server.fixedFields.url,
            description: x.visitors.document.objects.Server.fixedFields.description,
            variables: x.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: T3,
          fixedFields: {
            enum: x.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: x.visitors.document.objects.ServerVariable.fixedFields.default,
            description: x.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: F3,
          fixedFields: {
            schemas: lB,
            responses: x.visitors.document.objects.Components.fixedFields.responses,
            parameters: x.visitors.document.objects.Components.fixedFields.parameters,
            examples: x.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: x.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: x.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: x.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: x.visitors.document.objects.Components.fixedFields.links,
            callbacks: x.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: uB
          }
        },
        Paths: {
          $visitor: gB
        },
        PathItem: {
          $visitor: TB,
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
          $visitor: PB,
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
          $visitor: dB,
          fixedFields: {
            description: x.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: x.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: B3,
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
          $visitor: xB,
          fixedFields: {
            description: x.visitors.document.objects.RequestBody.fixedFields.description,
            content: x.visitors.document.objects.RequestBody.fixedFields.content,
            required: x.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: C3,
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
          $visitor: vB,
          fixedFields: {
            contentType: x.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: x.visitors.document.objects.Encoding.fixedFields.headers,
            style: x.visitors.document.objects.Encoding.fixedFields.style,
            explode: x.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: x.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: SB,
          fixedFields: {
            default: x.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: $B,
          fixedFields: {
            description: x.visitors.document.objects.Response.fixedFields.description,
            headers: x.visitors.document.objects.Response.fixedFields.headers,
            content: x.visitors.document.objects.Response.fixedFields.content,
            links: x.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: wB
        },
        Example: {
          $visitor: pB,
          fixedFields: {
            summary: x.visitors.document.objects.Example.fixedFields.summary,
            description: x.visitors.document.objects.Example.fixedFields.description,
            value: x.visitors.document.objects.Example.fixedFields.value,
            externalValue: x.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: O3,
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
          $visitor: H3,
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
          $visitor: D3,
          fixedFields: {
            name: x.visitors.document.objects.Tag.fixedFields.name,
            description: x.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: L3,
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
          $visitor: q3,
          fixedFields: {
            // core vocabulary
            $schema: {
              $ref: "#/visitors/value"
            },
            $vocabulary: z3,
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
            $ref: G3,
            $defs: K3,
            $comment: {
              $ref: "#/visitors/value"
            },
            // applicator vocabulary
            allOf: J3,
            anyOf: W3,
            oneOf: Y3,
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
            dependentSchemas: X3,
            prefixItems: Q3,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: Z3,
            patternProperties: eB,
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
            type: tB,
            enum: rB,
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
            dependentRequired: nB,
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
            examples: sB,
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
          $visitor: oB,
          fixedFields: {
            propertyName: x.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: x.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: cB,
          fixedFields: {
            name: x.visitors.document.objects.XML.fixedFields.name,
            namespace: x.visitors.document.objects.XML.fixedFields.namespace,
            prefix: x.visitors.document.objects.XML.fixedFields.prefix,
            attribute: x.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: x.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: CB,
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
          $visitor: IB,
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
          $visitor: FB,
          fixedFields: {
            authorizationUrl: x.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: x.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: x.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: x.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: I3
        }
      },
      extension: {
        $visitor: x.visitors.document.extension.$visitor
      }
    }
  }
}, NB = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = ff(t), s = ta(DB), i = He(e, s), o = new i({
    specObj: s
  });
  return Ie(n, o), gn(o.element, r, {
    toolboxCreator: Ng,
    visitorOptions: {
      keyMap: vt,
      nodeTypeGetter: it
    }
  });
}, Z = (t) => (e, r = {}) => NB(e, {
  specPath: t,
  ...r
});
ga.refract = Z(["visitors", "document", "objects", "Callback", "$visitor"]);
ba.refract = Z(["visitors", "document", "objects", "Components", "$visitor"]);
xa.refract = Z(["visitors", "document", "objects", "Contact", "$visitor"]);
wa.refract = Z(["visitors", "document", "objects", "Example", "$visitor"]);
Cf.refract = Z(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Rf.refract = Z(["visitors", "document", "objects", "Encoding", "$visitor"]);
Ea.refract = Z(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
$a.refract = Z(["visitors", "document", "objects", "Header", "$visitor"]);
Oa.refract = Z(["visitors", "document", "objects", "Info", "$visitor"]);
br.refract = Z(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
Sa.refract = Z(["visitors", "document", "objects", "License", "$visitor"]);
Aa.refract = Z(["visitors", "document", "objects", "Link", "$visitor"]);
Pa.refract = Z(["visitors", "document", "objects", "MediaType", "$visitor"]);
If.refract = Z(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Mf.refract = Z(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Ff.refract = Z(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
ir.refract = Z(["visitors", "document", "objects", "OpenApi", "$visitor"]);
Fs.refract = Z(["visitors", "document", "objects", "Operation", "$visitor"]);
ja.refract = Z(["visitors", "document", "objects", "Parameter", "$visitor"]);
Zt.refract = Z(["visitors", "document", "objects", "PathItem", "$visitor"]);
Ta.refract = Z(["visitors", "document", "objects", "Paths", "$visitor"]);
or.refract = Z(["visitors", "document", "objects", "Reference", "$visitor"]);
_a.refract = Z(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Ca.refract = Z(["visitors", "document", "objects", "Response", "$visitor"]);
Ra.refract = Z(["visitors", "document", "objects", "Responses", "$visitor"]);
_r.refract = Z(["visitors", "document", "objects", "Schema", "$visitor"]);
Ia.refract = Z(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Ma.refract = Z(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
Fa.refract = Z(["visitors", "document", "objects", "Server", "$visitor"]);
ka.refract = Z(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
kf.refract = Z(["visitors", "document", "objects", "Tag", "$visitor"]);
Df.refract = Z(["visitors", "document", "objects", "XML", "$visitor"]);
class LB extends fs {
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
class VB extends zD {
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
      throw new ng('"openapi-3-1" dereference strategy is not available.');
    const s = new rn(), i = ny(r, {
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
  AbortController: BB,
  AbortSignal: UB
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = BB);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = UB);
class Lg extends qD {
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
      throw new sy(`Error downloading "${r.uri}"`, {
        cause: p
      });
    } finally {
      clearTimeout(o);
    }
  }
}
class Vg extends fs {
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
      const s = rg(JSON.parse(n));
      return s.classes.push("result"), r.push(s), r;
    } catch (s) {
      throw new Rt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class Bg extends fs {
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
          schema: li
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
        schema: li
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = rg(s);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new Rt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class Ug extends fs {
  constructor(r = {}) {
    super({
      name: "openapi-json-3-1-swagger-client",
      mediaTypes: new Pf(...sn.filterByFormat("generic"), ...sn.filterByFormat("json")),
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
class Hg extends fs {
  constructor(r = {}) {
    super({
      name: "openapi-yaml-3-1-swagger-client",
      mediaTypes: new Pf(...sn.filterByFormat("generic"), ...sn.filterByFormat("yaml")),
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
        schema: li
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
const Da = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), an = (t) => {
  const e = nf(t);
  return Zu("#", e);
}, HB = (t) => {
  if (!Da(t))
    throw new WD(t);
  return t;
}, Vf = (t, e) => {
  const r = HB(t), n = Qy((s) => It(s) && O(s.$anchor) === r, e);
  if (nr(n))
    throw new KD(`Evaluation failed on token: "${r}"`);
  return n;
}, qg = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = nf(O(e.$ref)), n = O(e.meta.get("inherited$id"));
  return `${Sr((i, o) => Oe(i, is(se(o))), t, [...n, O(e.$ref)])}${r === "#" ? "" : r}`;
}, qB = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = O(e.meta.get("inherited$id"));
  return Sr((n, s) => Oe(n, is(se(s))), t, [...r, O(e.$id)]);
}, Cn = (t) => {
  if (Cn.cache.has(t))
    return Cn.cache.get(t);
  const e = _r.refract(t);
  return Cn.cache.set(t, e), e;
};
Cn.cache = /* @__PURE__ */ new WeakMap();
const Ce = (t) => vr(t) ? Cn(t) : t, Na = (t, e) => {
  const {
    cache: r
  } = Na, n = se(t), s = (c) => It(c) && typeof c.$id < "u";
  if (!r.has(e)) {
    const c = jD(s, e);
    r.set(e, Array.from(c));
  }
  const i = r.get(e).find((c) => qB(n, c) === n);
  if (nr(i))
    throw new gf(`Evaluation failed on URI: "${t}"`);
  let o, a;
  return Da(an(t)) ? (o = Vf, a = an(t)) : (o = st, a = Ye(t)), o(a, i);
};
Na.cache = /* @__PURE__ */ new WeakMap();
const Pc = Ie[Symbol.for("nodejs.util.promisify.custom")], Ae = new vf(), pt = (t, e, r, n) => {
  ut(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class Kr {
  constructor({
    reference: e,
    namespace: r,
    options: n,
    indirections: s = [],
    ancestors: i = new $c(),
    refractCache: o = /* @__PURE__ */ new Map()
  }) {
    b(this, "indirections");
    b(this, "namespace");
    b(this, "reference");
    b(this, "options");
    b(this, "ancestors");
    b(this, "refractCache");
    this.indirections = s, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new $c(...i), this.refractCache = o;
  }
  toBaseURI(e) {
    return Oe(this.reference.uri, is(se(e)));
  }
  async toReference(e) {
    if (this.reference.depth >= this.options.resolve.maxDepth)
      throw new YD(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    const r = this.toBaseURI(e), {
      refSet: n
    } = this.reference;
    if (n.has(r))
      return n.find(Bv(r, "uri"));
    const s = await OT(nt(r), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: "text/plain"
      }
    }), i = new jt({
      uri: r,
      value: F(s),
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
    return [new $c(...this.ancestors, r), r];
  }
  async ReferenceElement(e, r, n, s, i, o) {
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), l = this.toBaseURI(O(e.$ref)), p = se(this.reference.uri) === l, f = !p;
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
    const v = se(d.refSet.rootRef.uri) !== d.uri, w = ["error", "replace"].includes(this.options.dereference.circular);
    if ((f || v || Cr(h) || w) && !a.includesCycle(h)) {
      c.add(e);
      const R = new Kr({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      h = await Pc(h, R, {
        keyMap: vt,
        nodeTypeGetter: it
      }), c.delete(e);
    }
    this.indirections.pop();
    const $ = ke(h);
    return $.setMetaProperty("id", Ae.generateId()), $.setMetaProperty("ref-fields", {
      $ref: O(e.$ref),
      // @ts-ignore
      description: O(e.description),
      // @ts-ignore
      summary: O(e.summary)
    }), $.setMetaProperty("ref-origin", d.uri), $.setMetaProperty("ref-referencing-element-id", F(Ae.identify(e))), X(h) && X($) && (e.hasKey("description") && "description" in h && ($.remove("description"), $.set("description", e.get("description"))), e.hasKey("summary") && "summary" in h && ($.remove("summary"), $.set("summary", e.get("summary")))), o.replaceWith($, pt), n ? !1 : $;
  }
  async PathItemElement(e, r, n, s, i, o) {
    if (!W(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), l = this.toBaseURI(O(e.$ref)), p = se(this.reference.uri) === l, f = !p;
    if (!this.options.resolve.internal && p || !this.options.resolve.external && f)
      return;
    const d = await this.toReference(O(e.$ref)), u = Oe(l, O(e.$ref));
    this.indirections.push(e);
    const m = Ye(u);
    let h = st(m, d.value.result);
    if (h.id = Ae.identify(h), vr(h)) {
      const $ = `path-item-${O(Ae.identify(h))}`;
      this.refractCache.has($) ? h = this.refractCache.get($) : (h = Zt.refract(h), this.refractCache.set($, h));
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
        const $ = new Pt(h.id, {
          type: "path-item",
          uri: d.uri,
          $ref: O(e.$ref)
        }), S = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)($);
        return o.replaceWith(S, pt), n ? !1 : S;
      }
    }
    const v = se(d.refSet.rootRef.uri) !== d.uri, w = ["error", "replace"].includes(this.options.dereference.circular);
    if ((f || v || xr(h) && W(h.$ref) || w) && !a.includesCycle(h)) {
      c.add(e);
      const $ = new Kr({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      h = await Pc(h, $, {
        keyMap: vt,
        nodeTypeGetter: it
      }), c.delete(e);
    }
    if (this.indirections.pop(), xr(h)) {
      const $ = new Zt([...h.content], F(h.meta), F(h.attributes));
      $.setMetaProperty("id", Ae.generateId()), e.forEach((R, S, C) => {
        $.remove(O(S)), $.content.push(C);
      }), $.remove("$ref"), $.setMetaProperty("ref-fields", {
        $ref: O(e.$ref)
      }), $.setMetaProperty("ref-origin", d.uri), $.setMetaProperty("ref-referencing-element-id", F(Ae.identify(e))), h = $;
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
      const p = Ye(O(e.operationRef)), f = this.toBaseURI(O(e.operationRef)), d = se(this.reference.uri) === f, u = !d;
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
      if (a = Qy((u) => Dg(u) && ve(u.operationId) && u.operationId.equals(p), f.value.result), nr(a))
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
    const a = this.toBaseURI(O(e.externalValue)), c = se(this.reference.uri) === a, l = !c;
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
    const f = qg(p, e), d = se(f), u = new Un({
      uri: d
    }), m = gj((C) => C.canRead(u), this.options.resolve.resolvers), h = !m;
    let y = se(this.reference.uri) === f, g = !y;
    this.indirections.push(e);
    let v;
    try {
      if (m || h) {
        p = this.toBaseURI(f);
        const C = f, D = Ce(l.value.result);
        if (v = Na(C, D), v = Ce(v), v.id = Ae.identify(v), !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
      } else {
        if (p = this.toBaseURI(f), y = se(this.reference.uri) === p, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
        l = await this.toReference(nt(f));
        const C = Ye(f), D = Ce(l.value.result);
        v = st(C, D), v = Ce(v), v.id = Ae.identify(v);
      }
    } catch (C) {
      if (h && C instanceof gf)
        if (Da(an(f))) {
          if (y = se(this.reference.uri) === p, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          l = await this.toReference(nt(f));
          const D = an(f), P = Ce(l.value.result);
          v = Vf(D, P), v = Ce(v), v.id = Ae.identify(v);
        } else {
          if (p = this.toBaseURI(f), y = se(this.reference.uri) === p, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          l = await this.toReference(nt(f));
          const D = Ye(f), P = Ce(l.value.result);
          v = st(D, P), v = Ce(v), v.id = Ae.identify(v);
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
        var w, $;
        const C = new Pt(v.id, {
          type: "json-schema",
          uri: l.uri,
          $ref: O(e.$ref)
        }), P = ((w = ($ = this.options.dereference.strategyOpts["openapi-3-1"]) === null || $ === void 0 ? void 0 : $.circularReplacer) !== null && w !== void 0 ? w : this.options.dereference.circularReplacer)(C);
        return o.replaceWith(P, pt), n ? !1 : P;
      }
    }
    const R = se(l.refSet.rootRef.uri) !== l.uri, S = ["error", "replace"].includes(this.options.dereference.circular);
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
      v = await Pc(v, C, {
        keyMap: vt,
        nodeTypeGetter: it
      }), c.delete(e);
    }
    if (this.indirections.pop(), Lf(v)) {
      const C = F(v);
      return C.setMetaProperty("id", Ae.generateId()), C.setMetaProperty("ref-fields", {
        $ref: O(e.$ref)
      }), C.setMetaProperty("ref-origin", l.uri), C.setMetaProperty("ref-referencing-element-id", F(Ae.identify(e))), o.replaceWith(C, pt), n ? !1 : C;
    }
    if (It(v)) {
      const C = new _r([...v.content], F(v.meta), F(v.attributes));
      C.setMetaProperty("id", Ae.generateId()), e.forEach((D, P, U) => {
        C.remove(O(P)), C.content.push(U);
      }), C.remove("$ref"), C.setMetaProperty("ref-fields", {
        $ref: O(e.$ref)
      }), C.setMetaProperty("ref-origin", l.uri), C.setMetaProperty("ref-referencing-element-id", F(Ae.identify(e))), v = C;
    }
    return o.replaceWith(v, pt), n ? void 0 : v;
  }
}
const zB = Ie[Symbol.for("nodejs.util.promisify.custom")];
class GB extends GD {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canDereference(e) {
    var r;
    return e.mediaType !== "text/plain" ? sn.includes(e.mediaType) : kg((r = e.parseResult) === null || r === void 0 ? void 0 : r.result);
  }
  async dereference(e, r) {
    var n;
    const s = ls(Nf), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new rn(), o = new rn();
    let a = i, c;
    i.has(e.uri) ? c = i.find(Bv(e.uri, "uri")) : (c = new jt({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((f) => new jt({
      ...f,
      value: F(f.value)
    })).forEach((f) => o.add(f)), c = o.find((f) => f.uri === e.uri), a = o);
    const l = new Kr({
      reference: c,
      namespace: s,
      options: r
    }), p = await zB(a.rootRef.value, l, {
      keyMap: vt,
      nodeTypeGetter: it
    });
    return r.dereference.immutable && o.refs.filter((f) => f.uri.startsWith("immutable://")).map((f) => new jt({
      ...f,
      uri: f.uri.replace(/^immutable:\/\//, "")
    })).forEach((f) => i.add(f)), r.dereference.refSet === null && i.clean(), o.clean(), p;
  }
}
const KB = (t) => t.slice(2), tt = (t) => {
  const e = KB(t);
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
class JB {
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
class WB {
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
class YB {
  constructor({
    parameterMacro: e,
    options: r
  }) {
    b(this, "parameterMacro");
    b(this, "options");
    qf(this, pr);
    b(this, "OperationElement", {
      enter: (e) => {
        Ua(this, pr, e);
      },
      leave: () => {
        Ua(this, pr, void 0);
      }
    });
    b(this, "ParameterElement", {
      leave: (e, r, n, s, i) => {
        const o = Ba(this, pr) ? O(Ba(this, pr)) : null, a = O(e);
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
class XB extends ot {
}
const {
  wrapError: jc
} = xf, Tc = Ie[Symbol.for("nodejs.util.promisify.custom")], We = new vf(), ar = (t, e, r, n) => {
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
      const [m, h] = this.toAncestorLineage([...o, s]), y = this.toBaseURI(O(r.$ref)), g = se(this.reference.uri) === y, v = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && v)
        return !1;
      const w = await this.toReference(O(r.$ref)), $ = Oe(y, O(r.$ref));
      this.indirections.push(r);
      const R = Ye($);
      let S = st(R, w.value.result);
      if (S.id = We.identify(S), vr(S)) {
        const U = O(r.meta.get("referenced-element")), E = `${U}-${O(We.identify(S))}`;
        this.refractCache.has(E) ? S = this.refractCache.get(E) : ue(S) ? (S = or.refract(S), S.setMetaProperty("referenced-element", U), this.refractCache.set(E, S)) : (S = this.namespace.getElementClass(U).refract(S), this.refractCache.set(E, S));
      }
      if (r === S)
        throw new he("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new zr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(S)) {
        if (w.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new he("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const U = new Pt(S.id, {
            type: "reference",
            uri: w.uri,
            $ref: O(r.$ref),
            baseURI: $,
            referencingElement: r
          }), A = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(U);
          return a.replaceWith(U, ar), s ? !1 : A;
        }
      }
      const C = se(w.refSet.rootRef.uri) !== w.uri, D = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || C || Cr(S) || D) && !m.includesCycle(S)) {
        var p;
        h.add(r);
        const U = new Rn({
          reference: w,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (p = this.basePath) !== null && p !== void 0 ? p : [...tt([...o, s, r]), "$ref"]
        });
        S = await Tc(S, U, {
          keyMap: vt,
          nodeTypeGetter: it
        }), h.delete(r);
      }
      this.indirections.pop();
      const P = ke(S);
      if (P.setMetaProperty("ref-fields", {
        $ref: O(r.$ref),
        description: O(r.description),
        summary: O(r.summary)
      }), P.setMetaProperty("ref-origin", w.uri), P.setMetaProperty("ref-referencing-element-id", F(We.identify(r))), X(S) && (r.hasKey("description") && "description" in S && (P.remove("description"), P.set("description", r.get("description"))), r.hasKey("summary") && "summary" in S && (P.remove("summary"), P.set("summary", r.get("summary")))), this.allowMetaPatches && X(P) && !P.hasKey("$$ref")) {
        const U = Oe(y, $);
        P.set("$$ref", U);
      }
      return a.replaceWith(P, ar), s ? !1 : P;
    } catch (m) {
      var f, d, u;
      const h = Gs(m), y = jc(h, {
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
      if (this.indirections.includes(r) || Qo(["cycle"], r.$ref))
        return !1;
      const [m, h] = this.toAncestorLineage([...o, s]), y = this.toBaseURI(O(r.$ref)), g = se(this.reference.uri) === y, v = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && v)
        return;
      const w = await this.toReference(O(r.$ref)), $ = Oe(y, O(r.$ref));
      this.indirections.push(r);
      const R = Ye($);
      let S = st(R, w.value.result);
      if (S.id = We.identify(S), vr(S)) {
        const P = `path-item-${O(We.identify(S))}`;
        this.refractCache.has(P) ? S = this.refractCache.get(P) : (S = Zt.refract(S), this.refractCache.set(P, S));
      }
      if (r === S)
        throw new he("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new zr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(S)) {
        if (w.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new he("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const P = new Pt(S.id, {
            type: "path-item",
            uri: w.uri,
            $ref: O(r.$ref),
            baseURI: $,
            referencingElement: r
          }), E = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(P);
          return a.replaceWith(P, ar), s ? !1 : E;
        }
      }
      const C = se(w.refSet.rootRef.uri) !== w.uri, D = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || C || xr(S) && W(S.$ref) || D) && !m.includesCycle(S)) {
        var p;
        h.add(r);
        const P = new Rn({
          reference: w,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (p = this.basePath) !== null && p !== void 0 ? p : [...tt([...o, s, r]), "$ref"]
        });
        S = await Tc(S, P, {
          keyMap: vt,
          nodeTypeGetter: it
        }), h.delete(r);
      }
      if (this.indirections.pop(), xr(S)) {
        const P = new Zt([...S.content], F(S.meta), F(S.attributes));
        if (r.forEach((U, E, A) => {
          P.remove(O(E)), P.content.push(A);
        }), P.remove("$ref"), P.setMetaProperty("ref-fields", {
          $ref: O(r.$ref)
        }), P.setMetaProperty("ref-origin", w.uri), P.setMetaProperty("ref-referencing-element-id", F(We.identify(r))), this.allowMetaPatches && typeof P.get("$$ref") > "u") {
          const U = Oe(y, $);
          P.set("$$ref", U);
        }
        S = P;
      }
      return a.replaceWith(S, ar), s ? void 0 : S;
    } catch (m) {
      var f, d, u;
      const h = Gs(m), y = jc(h, {
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
      const v = qg(g, r), w = se(v), $ = new Un({
        uri: w
      }), R = !this.options.resolve.resolvers.some((A) => A.canRead($)), S = !R;
      let C = se(this.reference.uri) === v, D = !C;
      this.indirections.push(r);
      let P;
      try {
        if (R || S) {
          g = this.toBaseURI(v);
          const A = v, M = Ce(y.value.result);
          if (P = Na(A, M), P = Ce(P), P.id = We.identify(P), !this.options.resolve.internal && C || !this.options.resolve.external && D)
            return;
        } else {
          if (g = this.toBaseURI(v), C = se(this.reference.uri) === g, D = !C, !this.options.resolve.internal && C || !this.options.resolve.external && D)
            return;
          y = await this.toReference(nt(v));
          const A = Ye(v), M = Ce(y.value.result);
          P = st(A, M), P = Ce(P), P.id = We.identify(P);
        }
      } catch (A) {
        if (S && A instanceof gf)
          if (Da(an(v))) {
            if (C = se(this.reference.uri) === g, D = !C, !this.options.resolve.internal && C || !this.options.resolve.external && D)
              return;
            y = await this.toReference(nt(v));
            const M = an(v), V = Ce(y.value.result);
            P = Vf(M, V), P = Ce(P), P.id = We.identify(P);
          } else {
            if (g = this.toBaseURI(O(v)), C = se(this.reference.uri) === g, D = !C, !this.options.resolve.internal && C || !this.options.resolve.external && D)
              return;
            y = await this.toReference(nt(v));
            const M = Ye(v), V = Ce(y.value.result);
            P = st(M, V), P = Ce(P), P.id = We.identify(P);
          }
        else
          throw A;
      }
      if (r === P)
        throw new he("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new zr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(P)) {
        if (y.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new he("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const A = new Pt(P.id, {
            type: "json-schema",
            uri: y.uri,
            $ref: O(r.$ref),
            baseURI: Oe(g, v),
            referencingElement: r
          }), V = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(A);
          return a.replaceWith(V, ar), s ? !1 : V;
        }
      }
      const U = se(y.refSet.rootRef.uri) !== y.uri, E = ["error", "replace"].includes(this.options.dereference.circular);
      if ((D || U || It(P) && W(P.$ref) || E) && !m.includesCycle(P)) {
        var p;
        h.add(r);
        const A = new Rn({
          reference: y,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: m,
          basePath: (p = this.basePath) !== null && p !== void 0 ? p : [...tt([...o, s, r]), "$ref"]
        });
        P = await Tc(P, A, {
          keyMap: vt,
          nodeTypeGetter: it
        }), h.delete(r);
      }
      if (this.indirections.pop(), Lf(P)) {
        const A = F(P);
        return A.setMetaProperty("ref-fields", {
          $ref: O(r.$ref)
        }), A.setMetaProperty("ref-origin", y.uri), A.setMetaProperty("ref-referencing-element-id", F(We.identify(r))), a.replaceWith(A, ar), s ? !1 : A;
      }
      if (It(P)) {
        const A = new _r([...P.content], F(P.meta), F(P.attributes));
        if (r.forEach((M, V, oe) => {
          A.remove(O(V)), A.content.push(oe);
        }), A.remove("$ref"), A.setMetaProperty("ref-fields", {
          $ref: O(r.$ref)
        }), A.setMetaProperty("ref-origin", y.uri), A.setMetaProperty("ref-referencing-element-id", F(We.identify(r))), this.allowMetaPatches && typeof A.get("$$ref") > "u") {
          const M = Oe(g, v);
          A.set("$$ref", M);
        }
        P = A;
      }
      return a.replaceWith(P, ar), s ? void 0 : P;
    } catch (m) {
      var f, d, u;
      const h = Gs(m), y = new XB(`Could not resolve reference: ${h.message}`, {
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
      const d = Gs(f), u = jc(d, {
        baseDoc: this.reference.uri,
        externalValue: O(r.externalValue),
        fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...tt([...o, s, r]), "externalValue"]
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (p = l.push) === null || p === void 0 || p.call(l, u);
      return;
    }
  }
}
const QB = ea[Symbol.for("nodejs.util.promisify.custom")];
class ZB {
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
    })), typeof r == "function" && o.push(new JB({
      modelPropertyMacro: r,
      options: s
    })), n !== "strict" && o.push(new WB({
      options: s
    })), typeof e == "function" && o.push(new YB({
      parameterMacro: e,
      options: s
    }));
    const a = QB(o, {
      nodeTypeGetter: it
    });
    Object.assign(this, a);
  }
}
const eU = Ie[Symbol.for("nodejs.util.promisify.custom")];
class zg extends GB {
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
    const i = ls(Nf), o = (s = n.dereference.refSet) !== null && s !== void 0 ? s : new rn(), a = new rn();
    let c = o, l;
    o.has(r.uri) ? l = o.find((d) => d.uri === r.uri) : (l = new jt({
      uri: r.uri,
      value: r.parseResult
    }), o.add(l)), n.dereference.immutable && (o.refs.map((d) => new jt({
      ...d,
      value: F(d.value)
    })).forEach((d) => a.add(d)), l = a.find((d) => d.uri === r.uri), c = a);
    const p = new ZB({
      reference: l,
      namespace: i,
      options: n,
      allowMetaPatches: this.allowMetaPatches,
      ancestors: this.ancestors,
      modelPropertyMacro: this.modelPropertyMacro,
      mode: this.mode,
      parameterMacro: this.parameterMacro
    }), f = await eU(c.rootRef.value, p, {
      keyMap: vt,
      nodeTypeGetter: it
    });
    return n.dereference.immutable && a.refs.filter((d) => d.uri.startsWith("immutable://")).map((d) => new jt({
      ...d,
      uri: d.uri.replace(/^immutable:\/\//, "")
    })).forEach((d) => o.add(d)), n.dereference.refSet === null && o.clean(), a.clean(), f;
  }
}
const tU = (t) => {
  const e = O(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
  return new I({
    $ref: e
  }, F(r.meta), F(r.attributes));
}, La = async (t) => {
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
    } = La, h = u.find((oe) => oe.match(e)), y = Bo(Oi()) ? Oi() : ni, g = lu(t), v = Oe(y, g);
    let w;
    m.has(e) ? w = m.get(e) : (w = ir.refract(e), w.classes.push("result"), m.set(e, w));
    const $ = new at([w]), R = Ag(o), S = R === "" ? "" : `#${R}`, C = st(R, w), D = new jt({
      uri: v,
      value: $
    }), P = new rn({
      refs: [D]
    });
    R !== "" && (P.rootRef = void 0);
    const U = [/* @__PURE__ */ new Set([C])], E = [], A = await XD(C, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${v}${S}`,
        resolvers: [new Lg({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [new VB()]
      },
      parse: {
        mediaType: sn.latest(),
        parsers: [new Ug({
          allowEmpty: !1,
          sourceMap: !1
        }), new Hg({
          allowEmpty: !1,
          sourceMap: !1
        }), new Vg({
          allowEmpty: !1,
          sourceMap: !1
        }), new Bg({
          allowEmpty: !1,
          sourceMap: !1
        }), new LB({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [new zg({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: p,
          modelPropertyMacro: f,
          mode: d,
          ancestors: U
        })],
        refSet: P,
        dereferenceOpts: {
          errors: E
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? ry.dereference.circularReplacer : tU
      }
    }), M = kD(C, A, w), V = l ? M : h.normalize(M);
    return {
      spec: O(V),
      errors: E
    };
  } catch (m) {
    if (m instanceof vl || m instanceof jn)
      return {
        spec: null,
        errors: []
      };
    throw m;
  }
};
La.cache = /* @__PURE__ */ new WeakMap();
const yd = (t) => {
  if (!X(t)) return t;
  const e = [HV({
    operationIdNormalizer: (n, s, i) => ps({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), LV(), VV(), qV(), zV()];
  return gn(t, e, {
    toolboxCreator: Ng,
    visitorOptions: {
      keyMap: vt,
      nodeTypeGetter: it
    }
  });
}, rU = (t) => (e) => {
  const r = ir.refract(e);
  r.classes.push("result");
  const n = t(r), s = O(n);
  return La.cache.set(s, n), O(n);
}, nU = {
  name: "openapi-3-1-apidom",
  match(t) {
    return Of(t);
  },
  normalize(t) {
    if (!ve(t) && gr(t) && !t.$$normalized) {
      const e = rU(yd)(t);
      return e.$$normalized = !0, e;
    }
    return ve(t) ? yd(t) : t;
  },
  async resolve(t) {
    return La(t);
  }
};
function Gg(t, e, r) {
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
function sU(t, e) {
  return Gg(t, e, !0) || null;
}
function Kg(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function iU(t, e) {
  return !t || !t.paths ? null : sU(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = ps(s, r, n), a = Kg(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: oU
} = gT, aU = () => null, cU = (t) => Array.isArray(t) ? t : [t], gd = {
  mapTagOperations: fU,
  makeExecute: lU
};
function lU(t = {}) {
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
function uU(t = {}) {
  const e = gd.makeExecute(t);
  return {
    apis: gd.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function fU({
  spec: t,
  cb: e = aU,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return Gg(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? cU(c.tags) : [r]).forEach((p) => {
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
var Bf = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
Bf.parse = hU;
Bf.serialize = dU;
var pU = Object.prototype.toString, Ks = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function hU(t, e) {
  if (typeof t != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, n = e || {}, s = n.decode || mU, i = 0; i < t.length; ) {
    var o = t.indexOf("=", i);
    if (o === -1)
      break;
    var a = t.indexOf(";", i);
    if (a === -1)
      a = t.length;
    else if (a < o) {
      i = t.lastIndexOf(";", o - 1) + 1;
      continue;
    }
    var c = t.slice(i, o).trim();
    if (r[c] === void 0) {
      var l = t.slice(o + 1, a).trim();
      l.charCodeAt(0) === 34 && (l = l.slice(1, -1)), r[c] = gU(l, s);
    }
    i = a + 1;
  }
  return r;
}
function dU(t, e, r) {
  var n = r || {}, s = n.encode || vU;
  if (typeof s != "function")
    throw new TypeError("option encode is invalid");
  if (!Ks.test(t))
    throw new TypeError("argument name is invalid");
  var i = s(e);
  if (i && !Ks.test(i))
    throw new TypeError("argument val is invalid");
  var o = t + "=" + i;
  if (n.maxAge != null) {
    var a = n.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!Ks.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!Ks.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    var c = n.expires;
    if (!yU(c) || isNaN(c.valueOf()))
      throw new TypeError("option expires is invalid");
    o += "; Expires=" + c.toUTCString();
  }
  if (n.httpOnly && (o += "; HttpOnly"), n.secure && (o += "; Secure"), n.partitioned && (o += "; Partitioned"), n.priority) {
    var l = typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority;
    switch (l) {
      case "low":
        o += "; Priority=Low";
        break;
      case "medium":
        o += "; Priority=Medium";
        break;
      case "high":
        o += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (n.sameSite) {
    var p = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
    switch (p) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return o;
}
function mU(t) {
  return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
}
function vU(t) {
  return encodeURIComponent(t);
}
function yU(t) {
  return pU.call(t) === "[object Date]" || t instanceof Date;
}
function gU(t, e) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
function bU() {
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
const Jg = function() {
  const e = H, r = Me, n = this, s = "parser.js: Parser(): ", i = function() {
    this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
      this.state = e.ACTIVE, this.phraseLength = 0;
    };
  };
  n.ast = void 0, n.stats = void 0, n.trace = void 0, n.callbacks = [];
  let o = 0, a = 0, c = 0, l = 0, p = 0, f, d, u, m, h = new i(), y, g, v;
  const w = () => {
    o = 0, a = 0, c = 0, l = 0, p = 0, f = void 0, d = void 0, u = void 0, m = void 0, h.refresh(), y = void 0, g = void 0, v = void 0;
  }, $ = () => {
    const L = `${s}initializeCallbacks(): `;
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
          throw new Error(`${L}syntax callback '${J}' not a rule or udt name`);
        if (G = n.callbacks[J] ? n.callbacks[J] : void 0, typeof G == "function" || G === void 0)
          j < f.length ? y[j] = G : g[j - f.length] = G;
        else
          throw new Error(`${L}syntax callback[${J}] must be function reference or falsy)`);
      }
  };
  n.parse = (L, j, G, K) => {
    const J = `${s}parse(): `;
    w(), m = r.stringToChars(G), f = L.rules, d = L.udts;
    const ce = j.toLowerCase();
    let de;
    for (const Rr in f)
      if (f.hasOwnProperty(Rr) && ce === f[Rr].lower) {
        de = f[Rr].index;
        break;
      }
    if (de === void 0)
      throw new Error(`${J}start rule name '${startRule}' not recognized`);
    $(), n.trace && n.trace.init(f, d, m), n.stats && n.stats.init(f, d), n.ast && n.ast.init(f, d, m), v = K, u = [
      {
        type: e.RNM,
        index: de
      }
    ], $e(0, 0), u = void 0;
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
  const R = (L, j) => {
    const G = u[L];
    for (let K = 0; K < G.children.length && ($e(G.children[K], j), h.state === e.NOMATCH); K += 1)
      ;
  }, S = (L, j) => {
    let G, K, J, ce;
    const de = u[L];
    n.ast && (K = n.ast.getLength()), G = !0, J = j, ce = 0;
    for (let Ve = 0; Ve < de.children.length; Ve += 1)
      if ($e(de.children[Ve], J), h.state === e.NOMATCH) {
        G = !1;
        break;
      } else
        J += h.phraseLength, ce += h.phraseLength;
    G ? (h.state = ce === 0 ? e.EMPTY : e.MATCH, h.phraseLength = ce) : (h.state = e.NOMATCH, h.phraseLength = 0, n.ast && n.ast.setLength(K));
  }, C = (L, j) => {
    let G, K, J, ce;
    const de = u[L];
    if (de.max === 0) {
      h.state = e.EMPTY, h.phraseLength = 0;
      return;
    }
    for (K = j, J = 0, ce = 0, n.ast && (G = n.ast.getLength()); !(K >= m.length || ($e(L + 1, K), h.state === e.NOMATCH) || h.state === e.EMPTY || (ce += 1, J += h.phraseLength, K += h.phraseLength, ce === de.max)); )
      ;
    h.state === e.EMPTY || ce >= de.min ? (h.state = J === 0 ? e.EMPTY : e.MATCH, h.phraseLength = J) : (h.state = e.NOMATCH, h.phraseLength = 0, n.ast && n.ast.setLength(G));
  }, D = (L, j, G, K) => {
    if (j.phraseLength > G) {
      let J = `${s}opRNM(${L.name}): callback function error: `;
      throw J += `sysData.phraseLength: ${j.phraseLength}`, J += ` must be <= remaining chars: ${G}`, new Error(J);
    }
    switch (j.state) {
      case e.ACTIVE:
        if (!K)
          throw new Error(
            `${s}opRNM(${L.name}): callback function return error. ACTIVE state not allowed.`
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
          `${s}opRNM(${L.name}): callback function return error. Unrecognized return state: ${j.state}`
        );
    }
  }, P = (L, j) => {
    let G, K, J;
    const ce = u[L], de = f[ce.index], Ve = y[de.index];
    if (o || (K = n.ast && n.ast.ruleDefined(ce.index), K && (G = n.ast.getLength(), n.ast.down(ce.index, f[ce.index].name))), Ve) {
      const Rr = m.length - j;
      Ve(h, m, j, v), D(de, h, Rr, !0), h.state === e.ACTIVE && (J = u, u = de.opcodes, $e(0, j), u = J, Ve(h, m, j, v), D(de, h, Rr, !1));
    } else
      J = u, u = de.opcodes, $e(0, j), u = J;
    o || K && (h.state === e.NOMATCH ? n.ast.setLength(G) : n.ast.up(ce.index, de.name, j, h.phraseLength));
  }, U = (L, j) => {
    const G = u[L];
    h.state = e.NOMATCH, j < m.length && G.min <= m[j] && m[j] <= G.max && (h.state = e.MATCH, h.phraseLength = 1);
  }, E = (L, j) => {
    const G = u[L], K = G.string.length;
    if (h.state = e.NOMATCH, j + K <= m.length) {
      for (let J = 0; J < K; J += 1)
        if (m[j + J] !== G.string[J])
          return;
      h.state = e.MATCH, h.phraseLength = K;
    }
  }, A = (L, j) => {
    let G;
    const K = u[L];
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
  }, M = (L, j, G) => {
    if (j.phraseLength > G) {
      let K = `${s}opUDT(${L.name}): callback function error: `;
      throw K += `sysData.phraseLength: ${j.phraseLength}`, K += ` must be <= remaining chars: ${G}`, new Error(K);
    }
    switch (j.state) {
      case e.ACTIVE:
        throw new Error(`${s}opUDT(${L.name}) ACTIVE state return not allowed.`);
      case e.EMPTY:
        if (L.empty)
          j.phraseLength = 0;
        else
          throw new Error(`${s}opUDT(${L.name}) may not return EMPTY.`);
        break;
      case e.MATCH:
        if (j.phraseLength === 0)
          if (L.empty)
            j.state = e.EMPTY;
          else
            throw new Error(`${s}opUDT(${L.name}) may not return EMPTY.`);
        break;
      case e.NOMATCH:
        j.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opUDT(${L.name}): callback function return error. Unrecognized return state: ${j.state}`
        );
    }
  }, V = (L, j) => {
    let G, K, J;
    const ce = u[L], de = d[ce.index];
    h.UdtIndex = de.index, o || (J = n.ast && n.ast.udtDefined(ce.index), J && (K = f.length + ce.index, G = n.ast.getLength(), n.ast.down(K, de.name)));
    const Ve = m.length - j;
    g[ce.index](h, m, j, v), M(de, h, Ve), o || J && (h.state === e.NOMATCH ? n.ast.setLength(G) : n.ast.up(K, de.name, j, h.phraseLength));
  }, oe = (L, j) => {
    switch (o += 1, $e(L + 1, j), o -= 1, h.phraseLength = 0, h.state) {
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
  }, ge = (L, j) => {
    switch (o += 1, $e(L + 1, j), o -= 1, h.phraseLength = 0, h.state) {
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
  }, $e = (L, j) => {
    const G = `${s}opExecute(): `, K = u[L];
    switch (l += 1, a > c && (c = a), a += 1, h.refresh(), n.trace && n.trace.down(K, j), K.type) {
      case e.ALT:
        R(L, j);
        break;
      case e.CAT:
        S(L, j);
        break;
      case e.REP:
        C(L, j);
        break;
      case e.RNM:
        P(L, j);
        break;
      case e.TRG:
        U(L, j);
        break;
      case e.TBS:
        E(L, j);
        break;
      case e.TLS:
        A(L, j);
        break;
      case e.UDT:
        V(L, j);
        break;
      case e.AND:
        oe(L, j);
        break;
      case e.NOT:
        ge(L, j);
        break;
      default:
        throw new Error(`${G}unrecognized operator`);
    }
    o || j + h.phraseLength > p && (p = j + h.phraseLength), n.stats && n.stats.collect(K, h), n.trace && n.trace.up(K, h.state, j, h.phraseLength), a -= 1;
  };
}, Wg = function() {
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
        const w = v.toLowerCase();
        if (y = g.indexOf(w), y < 0)
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
}, xU = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-url-template", Me.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, wU = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable", Me.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, EU = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable-name", Me.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, $U = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["literals", Me.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, OU = new bU(), Yg = (t) => {
  const e = new Jg();
  return e.ast = new Wg(), e.ast.callbacks["server-url-template"] = xU, e.ast.callbacks["server-variable"] = wU, e.ast.callbacks["server-variable-name"] = EU, e.ast.callbacks.literals = $U, {
    result: e.parse(OU, "server-url-template", t),
    ast: e.ast
  };
}, SU = (t, {
  strict: e = !1
} = {}) => {
  try {
    const r = Yg(t);
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
}, AU = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, PU = (t) => AU(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), jU = ["literals", "server-variable-name"], TU = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: PU
    },
    ...r
  }, i = Yg(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => jU.includes(c)).map(([c, l]) => c === "server-variable-name" ? Object.hasOwn(e, l) ? s.encoder(e[l], l) : `{${l}}` : l).join("");
};
function _U() {
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
const CU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["slash", Me.charsToString(e, r, n)]), H.SEM_OK), RU = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["path-template", Me.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, IU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["path", Me.charsToString(e, r, n)]), H.SEM_OK), MU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["path-literal", Me.charsToString(e, r, n)]), H.SEM_OK), FU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["query", Me.charsToString(e, r, n)]), H.SEM_OK), kU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["query-marker", Me.charsToString(e, r, n)]), H.SEM_OK), DU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["fragment", Me.charsToString(e, r, n)]), H.SEM_OK), NU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["fragment-marker", Me.charsToString(e, r, n)]), H.SEM_OK), LU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["template-expression", Me.charsToString(e, r, n)]), H.SEM_OK), VU = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["template-expression-param-name", Me.charsToString(e, r, n)]), H.SEM_OK), BU = new _U(), UU = (t) => {
  const e = new Jg();
  return e.ast = new Wg(), e.ast.callbacks["path-template"] = RU, e.ast.callbacks.path = IU, e.ast.callbacks.query = FU, e.ast.callbacks["query-marker"] = kU, e.ast.callbacks.fragment = DU, e.ast.callbacks["fragment-marker"] = NU, e.ast.callbacks.slash = CU, e.ast.callbacks["path-literal"] = MU, e.ast.callbacks["template-expression"] = LU, e.ast.callbacks["template-expression-param-name"] = VU, {
    result: e.parse(BU, "path-template", t),
    ast: e.ast
  };
}, HU = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, qU = (t) => HU(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), zU = ["slash", "path-literal", "query-marker", "query-literal", "template-expression-param-name"], Ql = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: qU
    },
    ...r
  }, i = UU(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => zU.includes(c)).map(([c, l]) => c === "template-expression-param-name" ? Object.hasOwn(e, l) ? s.encoder(e[l], l) : `{${l}}` : l).join("");
}, GU = {
  body: KU,
  header: WU,
  query: XU,
  path: YU,
  formData: JU
};
function KU({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function JU({
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
function WU({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function YU({
  req: t,
  value: e,
  parameter: r,
  baseURL: n
}) {
  if (e !== void 0) {
    const s = t.url.replace(n, ""), i = Ql(s, {
      [r.name]: e
    });
    t.url = n + i;
  }
}
function XU({
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
function Va(t, e) {
  return e.includes("application/json") ? typeof t == "string" ? t : (Array.isArray(t) && (t = t.map((r) => {
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  })), JSON.stringify(t)) : String(t);
}
function QU({
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
    l = Ql(c, {
      [s]: e
    }, {
      encoder: (f) => $d(Va(f, p))
    });
  } else
    l = Ql(c, {
      [s]: e
    }, {
      encoder: (p) => tu({
        key: r.name,
        value: p,
        style: i || "simple",
        explode: o || !1,
        escape: "reserved"
      })
    });
  t.url = n + l;
}
function ZU({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const n = Object.keys(r.content)[0], s = Va(e, n);
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
const e4 = ["accept", "authorization", "content-type"];
function t4({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(e4.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = Va(r, n);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = tu({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function r4({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {};
  const n = typeof r;
  if (r !== void 0 && e.content) {
    const s = Object.keys(e.content)[0];
    t.headers.Cookie = `${e.name}=${Va(r, s)}`;
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    const s = n === "object" && !Array.isArray(r) && e.explode ? "" : `${e.name}=`;
    t.headers.Cookie = s + tu({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: typeof e.explode > "u" ? !1 : e.explode
    });
  }
}
const n4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: r4,
  header: t4,
  path: QU,
  query: ZU
}, Symbol.toStringTag, { value: "Module" })), s4 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: Xg
} = s4;
function i4(t, e) {
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
  e = o4({
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
function o4({
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
            const y = m.username || "", g = m.password || "", v = Xg(`${y}:${g}`);
            i.headers.Authorization = `Basic ${v}`;
          }
          /^bearer$/i.test(u.scheme) && (i.headers.Authorization = `Bearer ${m}`);
        } else if (h === "oauth2" || h === "openIdConnect") {
          const y = d.token || {}, g = u["x-tokenName"] || "access_token", v = y[g];
          let w = y.token_type;
          (!w || w.toLowerCase() === "bearer") && (w = "Bearer"), i.headers.Authorization = `${w} ${v}`;
        }
      }
    });
  }), i);
}
function a4(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = c4({
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
function c4({
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
      let w = u && u.token_type;
      if (d)
        if (y === "apiKey") {
          const $ = h.in === "query" ? "query" : "headers";
          s[$] = s[$] || {}, s[$][h.name] = m;
        } else if (y === "basic")
          if (m.header)
            s.headers.authorization = m.header;
          else {
            const $ = m.username || "", R = m.password || "";
            m.base64 = Xg(`${$}:${R}`), s.headers.authorization = `Basic ${m.base64}`;
          }
        else y === "oauth2" && v && (w = !w || w.toLowerCase() === "bearer" ? "Bearer" : w, s.headers.authorization = `${w} ${v}`);
    });
  }), s);
}
const bd = (t) => Array.isArray(t) ? t : [], ri = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, ni), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
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
class l4 extends ot {
}
const u4 = (t, e) => e.filter((r) => r.name === t), f4 = (t) => {
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
}, p4 = {
  buildRequest: Qg
};
function h4({
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
  s && i && !n && (n = Kg(s, i));
  const p = p4.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: l,
    ...c
  });
  return p.body && (gr(p.body) || Array.isArray(p.body)) && (p.body = JSON.stringify(p.body)), l(p);
}
function Qg(t) {
  const {
    spec: e,
    operationId: r,
    responseContentType: n,
    scheme: s,
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
    parameterBuilders: h
  } = t;
  const y = Sf(e);
  h || (y ? h = n4 : h = GU);
  let v = {
    url: "",
    credentials: f && f.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  d && (v.signal = d), i && (v.requestInterceptor = i), o && (v.responseInterceptor = o), c && (v.userFetch = c);
  const w = iU(e, r);
  if (!w)
    throw new l4(`Operation ${r} not found`);
  const {
    operation: $ = {},
    method: R,
    pathName: S
  } = w, C = Zg({
    spec: e,
    scheme: s,
    contextUrl: a,
    server: l,
    serverVariables: p,
    pathName: S,
    method: R,
    serverVariableEncoder: u
  });
  if (v.url += C, !r)
    return delete v.cookies, v;
  v.url += S, v.method = `${R}`.toUpperCase(), m = m || {};
  const D = e.paths[S] || {};
  n && (v.headers.accept = n);
  const P = f4([].concat(bd($.parameters)).concat(bd(D.parameters)));
  P.forEach((E) => {
    const A = h[E.in];
    let M;
    if (E.in === "body" && E.schema && E.schema.properties && (M = m), M = E && E.name && m[E.name], typeof M > "u" ? M = E && E.name && m[`${E.in}.${E.name}`] : u4(E.name, P).length > 1 && console.warn(`Parameter '${E.name}' is ambiguous because the defined spec has more than one parameter with the name: '${E.name}' and the passed-in parameter values did not define an 'in' value.`), M !== null) {
      if (typeof E.default < "u" && typeof M > "u" && (M = E.default), typeof M > "u" && E.required && !E.allowEmptyValue)
        throw new Error(`Required parameter ${E.name} is not provided`);
      if (y && E.schema && E.schema.type === "object" && typeof M == "string")
        try {
          M = JSON.parse(M);
        } catch {
          throw new Error("Could not parse object parameter value string as JSON");
        }
      A && A({
        req: v,
        parameter: E,
        value: M,
        operation: $,
        spec: e,
        baseURL: C
      });
    }
  });
  const U = {
    ...t,
    operation: $
  };
  if (y ? v = i4(U, v) : v = a4(U, v), v.cookies && Object.keys(v.cookies).length) {
    const E = Object.keys(v.cookies).reduce((A, M) => {
      const V = v.cookies[M], oe = A ? "&" : "", ge = Bf.serialize(M, V);
      return A + oe + ge;
    }, "");
    v.headers.Cookie = E;
  }
  return v.cookies && delete v.cookies, ru(v);
}
const Zl = (t) => t ? t.replace(/\W/g, "") : null;
function Zg(t) {
  return Sf(t.spec) ? d4(t) : v4(t);
}
const _c = (t) => Array.isArray(t) && t.length > 0;
function d4({
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
  if (l = _c(d) ? d : _c(u) ? u : _c(m) ? m : [wd], n && (f = l.find((h) => h.url === n), f && (p = n)), p || ([f] = l, p = f.url), SU(p, {
    strict: !0
  })) {
    const h = Object.entries({
      ...f.variables
    }).reduce((y, [g, v]) => (y[g] = v.default, y), {});
    p = TU(p, {
      ...h,
      ...i
    }, {
      encoder: typeof o == "function" ? o : Gu
    });
  }
  return m4(p, s);
}
function m4(t = "", e = "") {
  const r = ri(t && e ? Oe(e, t) : t), n = ri(e), s = Zl(r.protocol) || Zl(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function v4({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = ri(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || Zl(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return i && o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
re.http = Yr;
re.makeHttp = Lw.bind(null, re.http);
re.resolveStrategies = {
  "openapi-3-1-apidom": nU,
  "openapi-3-0": Og,
  "openapi-2-0": $g,
  generic: xg
};
re.resolve = Sg({
  strategies: [re.resolveStrategies["openapi-3-1-apidom"], re.resolveStrategies["openapi-3-0"], re.resolveStrategies["openapi-2-0"], re.resolveStrategies.generic]
});
re.resolveSubtree = GN({
  strategies: [re.resolveStrategies["openapi-3-1-apidom"], re.resolveStrategies["openapi-3-0"], re.resolveStrategies["openapi-2-0"], re.resolveStrategies.generic]
});
re.execute = h4;
re.serializeRes = hm;
re.serializeHeaders = pm;
re.clearCache = VN;
re.makeApisTagOperation = uU;
re.buildRequest = Qg;
re.helpers = {
  opId: ps
};
re.getBaseUrl = Zg;
re.apidom = {
  resolve: {
    resolvers: {
      HTTPResolverSwaggerClient: Lg
    }
  },
  parse: {
    parsers: {
      JsonParser: Vg,
      YamlParser: Bg,
      OpenApiJson3_1Parser: Ug,
      OpenApiYaml3_1Parser: Hg
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: zg
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
  if (wg(e) && oU(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (Sf(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [wd]);
  }
};
export {
  re as S
};
