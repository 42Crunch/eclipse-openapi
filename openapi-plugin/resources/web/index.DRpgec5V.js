var Qw = Object.defineProperty;
var ad = (t) => {
  throw TypeError(t);
};
var Zw = (t, e, r) => e in t ? Qw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var j = (t, e, r) => Zw(t, typeof e != "symbol" ? e + "" : e, r), cd = (t, e, r) => e.has(t) || ad("Cannot " + r);
var qe = (t, e, r) => (cd(t, e, "read from private field"), r ? r.call(t) : e.get(t)), fn = (t, e, r) => e.has(t) ? ad("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Rr = (t, e, r, n) => (cd(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import { v as zi, q as Cr } from "./TriangleExclamation.D0e1MsJn.js";
const _b = "application/json, application/yaml", qs = "https://swagger.io", $b = Object.freeze({
  url: "/"
}), Cb = 3e3, {
  fetch: eE,
  Response: tE,
  Headers: rE,
  Request: nE,
  FormData: sE,
  File: iE,
  Blob: oE
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = eE);
typeof globalThis.Headers > "u" && (globalThis.Headers = rE);
typeof globalThis.Request > "u" && (globalThis.Request = nE);
typeof globalThis.Response > "u" && (globalThis.Response = tE);
typeof globalThis.FormData > "u" && (globalThis.FormData = sE);
typeof globalThis.File > "u" && (globalThis.File = iE);
typeof globalThis.Blob > "u" && (globalThis.Blob = oE);
function Ih(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function Ib(t, e) {
  return Array.isArray(t) && t.some((r) => Ih(r, e));
}
class _f extends File {
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
const aE = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, cE = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function Mb(t, e = "reserved") {
  return [...t].map((r) => {
    if (cE(r) || aE(r) && e === "unsafe")
      return r;
    const n = new TextEncoder();
    return Array.from(n.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function Mh(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? uE(t) : typeof e == "object" ? lE(t) : fE(t);
}
function Fe(t, e = !1) {
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && typeof t == "string" && t.length > 0 ? Mb(t, e) : t ?? "";
}
function uE({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  if (r === "simple")
    return e.map((i) => Fe(i, s)).join(",");
  if (r === "label")
    return `.${e.map((i) => Fe(i, s)).join(".")}`;
  if (r === "matrix")
    return e.map((i) => Fe(i, s)).reduce((i, o) => !i || n ? `${i || ""};${t}=${o}` : `${i},${o}`, "");
  if (r === "form") {
    const i = n ? `&${t}=` : ",";
    return e.map((o) => Fe(o, s)).join(i);
  }
  if (r === "spaceDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => Fe(o, s)).join(` ${i}`);
  }
  if (r === "pipeDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => Fe(o, s)).join(`|${i}`);
  }
}
function lE({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  const i = Object.keys(e);
  if (r === "simple")
    return i.reduce((o, a) => {
      const c = Fe(e[a], s), u = n ? "=" : ",";
      return `${o ? `${o},` : ""}${a}${u}${c}`;
    }, "");
  if (r === "label")
    return i.reduce((o, a) => {
      const c = Fe(e[a], s), u = n ? "=" : ".";
      return `${o ? `${o}.` : "."}${a}${u}${c}`;
    }, "");
  if (r === "matrix" && n)
    return i.reduce((o, a) => {
      const c = Fe(e[a], s);
      return `${o ? `${o};` : ";"}${a}=${c}`;
    }, "");
  if (r === "matrix")
    return i.reduce((o, a) => {
      const c = Fe(e[a], s);
      return `${o ? `${o},` : `;${t}=`}${a},${c}`;
    }, "");
  if (r === "form")
    return i.reduce((o, a) => {
      const c = Fe(e[a], s);
      return `${o ? `${o}${n ? "&" : ","}` : ""}${a}${n ? "=" : ","}${c}`;
    }, "");
}
function fE({
  key: t,
  value: e,
  style: r,
  escape: n
}) {
  if (r === "simple")
    return Fe(e, n);
  if (r === "label")
    return `.${Fe(e, n)}`;
  if (r === "matrix")
    return `;${t}=${Fe(e, n)}`;
  if (r === "form" || r === "deepObject")
    return Fe(e, n);
}
const hE = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, pE = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function Fb(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (f) => f.toString() : (f) => encodeURIComponent(f), u = c(t);
  if (typeof a > "u" && s)
    return [[u, ""]];
  if (Ih(a) || Ib(a))
    return [[u, a]];
  if (i)
    return ud(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((f) => f !== "undefined")) {
      const {
        style: f,
        explode: l,
        allowReserved: d
      } = o;
      return ud(t, a, r, {
        style: f,
        explode: l,
        allowReserved: d
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const d = typeof a == "string" ? a : JSON.stringify(a), h = c(d), m = new _f(h, "blob", {
          type: o.contentType
        });
        return [[u, m]];
      }
      const f = c(String(a)), l = new _f(f, "blob", {
        type: o.contentType
      });
      return [[u, l]];
    }
    return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) && a.every((f) => typeof f != "object") ? [[u, a.map(c).join(",")]] : [[u, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) ? n === "multi" ? [[u, a.map(c)]] : [[u, a.map(c).join(pE[n || "csv"])]] : [[u, ""]];
}
function ud(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (u) => Fe(u, o), c = r ? (u) => u : (u) => a(u);
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(hE[s])]] : s === "deepObject" ? Object.keys(e).map((u) => [c(`${t}[${u}]`), a(e[u])]) : i ? Object.keys(e).map((u) => [c(u), a(e[u])]) : [[c(t), Object.keys(e).map((u) => [`${c(u)},${a(e[u])}`]).join(",")]];
}
function dE(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of Fb(r, n, !0))
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
const mE = (t, {
  encode: e = !0
} = {}) => {
  const r = (i, o, a) => (Array.isArray(a) ? a.reduce((c, u) => r(i, o, u), i) : a instanceof Date ? i.append(o, a.toISOString()) : typeof a == "object" ? Object.entries(a).reduce((c, [u, f]) => r(i, `${o}[${u}]`, f), i) : i.append(o, a), i), n = Object.entries(t).reduce((i, [o, a]) => r(i, o, a), new URLSearchParams()), s = String(n);
  return e ? s : decodeURIComponent(s);
};
function ld(t) {
  const e = Object.keys(t).reduce((r, n) => {
    for (const [s, i] of Fb(n, t[n]))
      i instanceof _f ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return mE(e, {
    encode: !1
  });
}
function Fh(t = {}) {
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
      return Ih(c) || Ib(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = dE(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = ld(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const u = new URLSearchParams(o);
      Object.keys(r).forEach((l) => u.delete(l)), a = String(u);
    }
    const c = s(a, ld(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function kb(t) {
  return typeof t > "u" || t === null;
}
function yE(t) {
  return typeof t == "object" && t !== null;
}
function vE(t) {
  return Array.isArray(t) ? t : kb(t) ? [] : [t];
}
function gE(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function bE(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function xE(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var SE = kb, OE = yE, wE = vE, EE = bE, AE = xE, jE = gE, je = {
  isNothing: SE,
  isObject: OE,
  toArray: wE,
  repeat: EE,
  isNegativeZero: AE,
  extend: jE
};
function Nb(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function On(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Nb(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
On.prototype = Object.create(Error.prototype);
On.prototype.constructor = On;
On.prototype.toString = function(e) {
  return this.name + ": " + Nb(this, e);
};
var Je = On;
function ua(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function la(t, e) {
  return je.repeat(" ", e - t.length) + t;
}
function PE(t, e) {
  if (e = Object.create(e || null), !t.buffer) return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, u, f = Math.min(t.line + e.linesAfter, s.length).toString().length, l = e.maxLength - (e.indent + f + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    u = ua(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      l
    ), a = je.repeat(" ", e.indent) + la((t.line - c + 1).toString(), f) + " | " + u.str + `
` + a;
  for (u = ua(t.buffer, n[o], s[o], t.position, l), a += je.repeat(" ", e.indent) + la((t.line + 1).toString(), f) + " | " + u.str + `
`, a += je.repeat("-", e.indent + f + 3 + u.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    u = ua(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      l
    ), a += je.repeat(" ", e.indent) + la((t.line + c + 1).toString(), f) + " | " + u.str + `
`;
  return a.replace(/\n$/, "");
}
var RE = PE, TE = [
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
], _E = [
  "scalar",
  "sequence",
  "mapping"
];
function $E(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(n) {
      e[String(n)] = r;
    });
  }), e;
}
function CE(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (TE.indexOf(r) === -1)
      throw new Je('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = $E(e.styleAliases || null), _E.indexOf(this.kind) === -1)
    throw new Je('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var ke = CE;
function fd(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function IE() {
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
function $f(t) {
  return this.extend(t);
}
$f.prototype.extend = function(e) {
  var r = [], n = [];
  if (e instanceof ke)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  else
    throw new Je("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof ke))
      throw new Je("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new Je("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new Je("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(i) {
    if (!(i instanceof ke))
      throw new Je("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create($f.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = fd(s, "implicit"), s.compiledExplicit = fd(s, "explicit"), s.compiledTypeMap = IE(s.compiledImplicit, s.compiledExplicit), s;
};
var Db = $f, qb = new ke("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), Lb = new ke("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), Vb = new ke("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), Bb = new Db({
  explicit: [
    qb,
    Lb,
    Vb
  ]
});
function ME(t) {
  if (t === null) return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function FE() {
  return null;
}
function kE(t) {
  return t === null;
}
var Ub = new ke("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: ME,
  construct: FE,
  predicate: kE,
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
function NE(t) {
  if (t === null) return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function DE(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function qE(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var Jb = new ke("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: NE,
  construct: DE,
  predicate: qE,
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
function LE(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function VE(t) {
  return 48 <= t && t <= 55;
}
function BE(t) {
  return 48 <= t && t <= 57;
}
function UE(t) {
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
          if (!LE(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!VE(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < e; r++)
    if (s = t[r], s !== "_") {
      if (!BE(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function JE(t) {
  var e = t, r = 1, n;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), n = e[0], (n === "-" || n === "+") && (n === "-" && (r = -1), e = e.slice(1), n = e[0]), e === "0") return 0;
  if (n === "0") {
    if (e[1] === "b") return r * parseInt(e.slice(2), 2);
    if (e[1] === "x") return r * parseInt(e.slice(2), 16);
    if (e[1] === "o") return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function HE(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !je.isNegativeZero(t);
}
var Hb = new ke("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: UE,
  construct: JE,
  predicate: HE,
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
}), GE = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function KE(t) {
  return !(t === null || !GE.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function zE(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var WE = /^[-+]?[0-9]+e/;
function YE(t, e) {
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
  else if (je.isNegativeZero(t))
    return "-0.0";
  return r = t.toString(10), WE.test(r) ? r.replace("e", ".e") : r;
}
function XE(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || je.isNegativeZero(t));
}
var Gb = new ke("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: KE,
  construct: zE,
  predicate: XE,
  represent: YE,
  defaultStyle: "lowercase"
}), Kb = Bb.extend({
  implicit: [
    Ub,
    Jb,
    Hb,
    Gb
  ]
}), zb = Kb, Wb = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Yb = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function QE(t) {
  return t === null ? !1 : Wb.exec(t) !== null || Yb.exec(t) !== null;
}
function ZE(t) {
  var e, r, n, s, i, o, a, c = 0, u = null, f, l, d;
  if (e = Wb.exec(t), e === null && (e = Yb.exec(t)), e === null) throw new Error("Date resolve error");
  if (r = +e[1], n = +e[2] - 1, s = +e[3], !e[4])
    return new Date(Date.UTC(r, n, s));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (f = +e[10], l = +(e[11] || 0), u = (f * 60 + l) * 6e4, e[9] === "-" && (u = -u)), d = new Date(Date.UTC(r, n, s, i, o, a, c)), u && d.setTime(d.getTime() - u), d;
}
function e0(t) {
  return t.toISOString();
}
var Xb = new ke("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: QE,
  construct: ZE,
  instanceOf: Date,
  represent: e0
});
function t0(t) {
  return t === "<<" || t === null;
}
var Qb = new ke("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: t0
}), kh = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function r0(t) {
  if (t === null) return !1;
  var e, r, n = 0, s = t.length, i = kh;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0) return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function n0(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = kh, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function s0(t) {
  var e = "", r = 0, n, s, i = t.length, o = kh;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function i0(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Zb = new ke("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: r0,
  construct: n0,
  predicate: i0,
  represent: s0
}), o0 = Object.prototype.hasOwnProperty, a0 = Object.prototype.toString;
function c0(t) {
  if (t === null) return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, a0.call(s) !== "[object Object]") return !1;
    for (i in s)
      if (o0.call(s, i))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (e.indexOf(i) === -1) e.push(i);
    else return !1;
  }
  return !0;
}
function u0(t) {
  return t !== null ? t : [];
}
var ex = new ke("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: c0,
  construct: u0
}), l0 = Object.prototype.toString;
function f0(t) {
  if (t === null) return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], l0.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1)) return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function h0(t) {
  if (t === null) return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var tx = new ke("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: f0,
  construct: h0
}), p0 = Object.prototype.hasOwnProperty;
function d0(t) {
  if (t === null) return !0;
  var e, r = t;
  for (e in r)
    if (p0.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function m0(t) {
  return t !== null ? t : {};
}
var rx = new ke("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: d0,
  construct: m0
}), Nh = zb.extend({
  implicit: [
    Xb,
    Qb
  ],
  explicit: [
    Zb,
    ex,
    tx,
    rx
  ]
}), zt = Object.prototype.hasOwnProperty, Ls = 1, nx = 2, sx = 3, Vs = 4, fa = 1, y0 = 2, hd = 3, v0 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, g0 = /[\x85\u2028\u2029]/, b0 = /[,\[\]\{\}]/, ix = /^(?:!|!!|![a-z\-]+!)$/i, ox = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function pd(t) {
  return Object.prototype.toString.call(t);
}
function St(t) {
  return t === 10 || t === 13;
}
function lr(t) {
  return t === 9 || t === 32;
}
function Ge(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Ir(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function x0(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function S0(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function O0(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function dd(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function w0(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var ax = new Array(256), cx = new Array(256);
for (var Tr = 0; Tr < 256; Tr++)
  ax[Tr] = dd(Tr) ? 1 : 0, cx[Tr] = dd(Tr);
function E0(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || Nh, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function ux(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = RE(r), new Je(e, r);
}
function J(t, e) {
  throw ux(t, e);
}
function Bs(t, e) {
  t.onWarning && t.onWarning.call(null, ux(t, e));
}
var md = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && J(e, "duplication of %YAML directive"), n.length !== 1 && J(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && J(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && J(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Bs(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && J(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], ix.test(s) || J(e, "ill-formed tag handle (first argument) of the TAG directive"), zt.call(e.tagMap, s) && J(e, 'there is a previously declared suffix for "' + s + '" tag handle'), ox.test(i) || J(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      J(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function Kt(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || J(t, "expected valid JSON character");
    else v0.test(a) && J(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function yd(t, e, r, n) {
  var s, i, o, a;
  for (je.isObject(r) || J(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], zt.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function Mr(t, e, r, n, s, i, o, a, c) {
  var u, f;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), u = 0, f = s.length; u < f; u += 1)
      Array.isArray(s[u]) && J(t, "nested arrays are not supported inside keys"), typeof s == "object" && pd(s[u]) === "[object Object]" && (s[u] = "[object Object]");
  if (typeof s == "object" && pd(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (u = 0, f = i.length; u < f; u += 1)
        yd(t, e, i[u], r);
    else
      yd(t, e, i, r);
  else
    !t.json && !zt.call(r, s) && zt.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, J(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function Dh(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : J(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function xe(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; lr(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (St(s))
      for (Dh(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && Bs(t, "deficient indentation"), n;
}
function Wi(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || Ge(r)));
}
function qh(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += je.repeat(`
`, e - 1));
}
function A0(t, e, r) {
  var n, s, i, o, a, c, u, f, l = t.kind, d = t.result, h;
  if (h = t.input.charCodeAt(t.position), Ge(h) || Ir(h) || h === 35 || h === 38 || h === 42 || h === 33 || h === 124 || h === 62 || h === 39 || h === 34 || h === 37 || h === 64 || h === 96 || (h === 63 || h === 45) && (s = t.input.charCodeAt(t.position + 1), Ge(s) || r && Ir(s)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; h !== 0; ) {
    if (h === 58) {
      if (s = t.input.charCodeAt(t.position + 1), Ge(s) || r && Ir(s))
        break;
    } else if (h === 35) {
      if (n = t.input.charCodeAt(t.position - 1), Ge(n))
        break;
    } else {
      if (t.position === t.lineStart && Wi(t) || r && Ir(h))
        break;
      if (St(h))
        if (c = t.line, u = t.lineStart, f = t.lineIndent, xe(t, !1, -1), t.lineIndent >= e) {
          a = !0, h = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = u, t.lineIndent = f;
          break;
        }
    }
    a && (Kt(t, i, o, !1), qh(t, t.line - c), i = o = t.position, a = !1), lr(h) || (o = t.position + 1), h = t.input.charCodeAt(++t.position);
  }
  return Kt(t, i, o, !1), t.result ? !0 : (t.kind = l, t.result = d, !1);
}
function j0(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (Kt(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else St(r) ? (Kt(t, n, s, !0), qh(t, xe(t, !1, e)), n = s = t.position) : t.position === t.lineStart && Wi(t) ? J(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  J(t, "unexpected end of the stream within a single quoted scalar");
}
function P0(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return Kt(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (Kt(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), St(a))
        xe(t, !1, e);
      else if (a < 256 && ax[a])
        t.result += cx[a], t.position++;
      else if ((o = S0(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = x0(a)) >= 0 ? i = (i << 4) + o : J(t, "expected hexadecimal character");
        t.result += w0(i), t.position++;
      } else
        J(t, "unknown escape sequence");
      r = n = t.position;
    } else St(a) ? (Kt(t, r, n, !0), qh(t, xe(t, !1, e)), r = n = t.position) : t.position === t.lineStart && Wi(t) ? J(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  J(t, "unexpected end of the stream within a double quoted scalar");
}
function R0(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, u, f, l, d, h, m = /* @__PURE__ */ Object.create(null), p, v, g, y;
  if (y = t.input.charCodeAt(t.position), y === 91)
    f = 93, h = !1, a = [];
  else if (y === 123)
    f = 125, h = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), y = t.input.charCodeAt(++t.position); y !== 0; ) {
    if (xe(t, !0, e), y = t.input.charCodeAt(t.position), y === f)
      return t.position++, t.tag = o, t.anchor = c, t.kind = h ? "mapping" : "sequence", t.result = a, !0;
    r ? y === 44 && J(t, "expected the node content, but found ','") : J(t, "missed comma between flow collection entries"), v = p = g = null, l = d = !1, y === 63 && (u = t.input.charCodeAt(t.position + 1), Ge(u) && (l = d = !0, t.position++, xe(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, Vr(t, e, Ls, !1, !0), v = t.tag, p = t.result, xe(t, !0, e), y = t.input.charCodeAt(t.position), (d || t.line === n) && y === 58 && (l = !0, y = t.input.charCodeAt(++t.position), xe(t, !0, e), Vr(t, e, Ls, !1, !0), g = t.result), h ? Mr(t, a, m, v, p, g, n, s, i) : l ? a.push(Mr(t, null, m, v, p, g, n, s, i)) : a.push(p), xe(t, !0, e), y = t.input.charCodeAt(t.position), y === 44 ? (r = !0, y = t.input.charCodeAt(++t.position)) : r = !1;
  }
  J(t, "unexpected end of the stream within a flow collection");
}
function T0(t, e) {
  var r, n, s = fa, i = !1, o = !1, a = e, c = 0, u = !1, f, l;
  if (l = t.input.charCodeAt(t.position), l === 124)
    n = !1;
  else if (l === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; l !== 0; )
    if (l = t.input.charCodeAt(++t.position), l === 43 || l === 45)
      fa === s ? s = l === 43 ? hd : y0 : J(t, "repeat of a chomping mode identifier");
    else if ((f = O0(l)) >= 0)
      f === 0 ? J(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? J(t, "repeat of an indentation width identifier") : (a = e + f - 1, o = !0);
    else
      break;
  if (lr(l)) {
    do
      l = t.input.charCodeAt(++t.position);
    while (lr(l));
    if (l === 35)
      do
        l = t.input.charCodeAt(++t.position);
      while (!St(l) && l !== 0);
  }
  for (; l !== 0; ) {
    for (Dh(t), t.lineIndent = 0, l = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && l === 32; )
      t.lineIndent++, l = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), St(l)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === hd ? t.result += je.repeat(`
`, i ? 1 + c : c) : s === fa && i && (t.result += `
`);
      break;
    }
    for (n ? lr(l) ? (u = !0, t.result += je.repeat(`
`, i ? 1 + c : c)) : u ? (u = !1, t.result += je.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += je.repeat(`
`, c) : t.result += je.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !St(l) && l !== 0; )
      l = t.input.charCodeAt(++t.position);
    Kt(t, r, t.position, !1);
  }
  return !0;
}
function vd(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, J(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !Ge(o)))); ) {
    if (a = !0, t.position++, xe(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, Vr(t, e, sx, !1, !0), i.push(t.result), xe(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      J(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function _0(t, e, r) {
  var n, s, i, o, a, c, u = t.tag, f = t.anchor, l = {}, d = /* @__PURE__ */ Object.create(null), h = null, m = null, p = null, v = !1, g = !1, y;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = l), y = t.input.charCodeAt(t.position); y !== 0; ) {
    if (!v && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, J(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, (y === 63 || y === 58) && Ge(n))
      y === 63 ? (v && (Mr(t, l, d, h, m, null, o, a, c), h = m = p = null), g = !0, v = !0, s = !0) : v ? (v = !1, s = !0) : J(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, y = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !Vr(t, r, nx, !1, !0))
        break;
      if (t.line === i) {
        for (y = t.input.charCodeAt(t.position); lr(y); )
          y = t.input.charCodeAt(++t.position);
        if (y === 58)
          y = t.input.charCodeAt(++t.position), Ge(y) || J(t, "a whitespace character is expected after the key-value separator within a block mapping"), v && (Mr(t, l, d, h, m, null, o, a, c), h = m = p = null), g = !0, v = !1, s = !1, h = t.tag, m = t.result;
        else if (g)
          J(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = u, t.anchor = f, !0;
      } else if (g)
        J(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = u, t.anchor = f, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (v && (o = t.line, a = t.lineStart, c = t.position), Vr(t, e, Vs, !0, s) && (v ? m = t.result : p = t.result), v || (Mr(t, l, d, h, m, p, o, a, c), h = m = p = null), xe(t, !0, -1), y = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && y !== 0)
      J(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return v && Mr(t, l, d, h, m, null, o, a, c), g && (t.tag = u, t.anchor = f, t.kind = "mapping", t.result = l), g;
}
function $0(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33) return !1;
  if (t.tag !== null && J(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : J(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Ge(o); )
      o === 33 && (n ? J(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), ix.test(s) || J(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), b0.test(i) && J(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !ox.test(i) && J(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    J(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : zt.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : J(t, 'undeclared tag handle "' + s + '"'), !0;
}
function C0(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38) return !1;
  for (t.anchor !== null && J(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !Ge(r) && !Ir(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && J(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function I0(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42) return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !Ge(n) && !Ir(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && J(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), zt.call(t.anchorMap, r) || J(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], xe(t, !0, -1), !0;
}
function Vr(t, e, r, n, s) {
  var i, o, a, c = 1, u = !1, f = !1, l, d, h, m, p, v;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = Vs === r || sx === r, n && xe(t, !0, -1) && (u = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; $0(t) || C0(t); )
      xe(t, !0, -1) ? (u = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = u || s), (c === 1 || Vs === r) && (Ls === r || nx === r ? p = e : p = e + 1, v = t.position - t.lineStart, c === 1 ? a && (vd(t, v) || _0(t, v, p)) || R0(t, p) ? f = !0 : (o && T0(t, p) || j0(t, p) || P0(t, p) ? f = !0 : I0(t) ? (f = !0, (t.tag !== null || t.anchor !== null) && J(t, "alias node should not have any properties")) : A0(t, p, Ls === r) && (f = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (f = a && vd(t, v))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && J(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), l = 0, d = t.implicitTypes.length; l < d; l += 1)
      if (m = t.implicitTypes[l], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (zt.call(t.typeMap[t.kind || "fallback"], t.tag))
      m = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (m = null, h = t.typeMap.multi[t.kind || "fallback"], l = 0, d = h.length; l < d; l += 1)
        if (t.tag.slice(0, h[l].tag.length) === h[l].tag) {
          m = h[l];
          break;
        }
    m || J(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && J(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : J(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || f;
}
function M0(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (xe(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !Ge(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && J(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; lr(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !St(o));
        break;
      }
      if (St(o)) break;
      for (r = t.position; o !== 0 && !Ge(o); )
        o = t.input.charCodeAt(++t.position);
      s.push(t.input.slice(r, t.position));
    }
    o !== 0 && Dh(t), zt.call(md, n) ? md[n](t, n, s) : Bs(t, 'unknown document directive "' + n + '"');
  }
  if (xe(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, xe(t, !0, -1)) : i && J(t, "directives end mark is expected"), Vr(t, t.lineIndent - 1, Vs, !1, !0), xe(t, !0, -1), t.checkLineBreaks && g0.test(t.input.slice(e, t.position)) && Bs(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && Wi(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, xe(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    J(t, "end of the stream or a document separator is expected");
  else
    return;
}
function lx(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new E0(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, J(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    M0(r);
  return r.documents;
}
function F0(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = lx(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function k0(t, e) {
  var r = lx(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Je("expected a single document in the stream, but found more");
  }
}
var N0 = F0, D0 = k0, fx = {
  loadAll: N0,
  load: D0
}, hx = Object.prototype.toString, px = Object.prototype.hasOwnProperty, Lh = 65279, q0 = 9, wn = 10, L0 = 13, V0 = 32, B0 = 33, U0 = 34, Cf = 35, J0 = 37, H0 = 38, G0 = 39, K0 = 42, dx = 44, z0 = 45, Us = 58, W0 = 61, Y0 = 62, X0 = 63, Q0 = 64, mx = 91, yx = 93, Z0 = 96, vx = 123, e1 = 124, gx = 125, Ve = {};
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
var t1 = [
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
], r1 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function n1(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null) return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && px.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function s1(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new Je("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + je.repeat("0", n - e.length) + e;
}
var i1 = 1, En = 2;
function o1(t) {
  this.schema = t.schema || Nh, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = je.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = n1(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? En : i1, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function gd(t, e) {
  for (var r = je.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function If(t, e) {
  return `
` + je.repeat(" ", t.indent * e);
}
function a1(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function Js(t) {
  return t === V0 || t === q0;
}
function An(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== Lh || 65536 <= t && t <= 1114111;
}
function bd(t) {
  return An(t) && t !== Lh && t !== L0 && t !== wn;
}
function xd(t, e, r) {
  var n = bd(t), s = n && !Js(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== dx && t !== mx && t !== yx && t !== vx && t !== gx) && t !== Cf && !(e === Us && !s) || bd(e) && !Js(e) && t === Cf || e === Us && s
  );
}
function c1(t) {
  return An(t) && t !== Lh && !Js(t) && t !== z0 && t !== X0 && t !== Us && t !== dx && t !== mx && t !== yx && t !== vx && t !== gx && t !== Cf && t !== H0 && t !== K0 && t !== B0 && t !== e1 && t !== W0 && t !== Y0 && t !== G0 && t !== U0 && t !== J0 && t !== Q0 && t !== Z0;
}
function u1(t) {
  return !Js(t) && t !== Us;
}
function dn(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function bx(t) {
  var e = /^\n* /;
  return e.test(t);
}
var xx = 1, Mf = 2, Sx = 3, Ox = 4, $r = 5;
function l1(t, e, r, n, s, i, o, a) {
  var c, u = 0, f = null, l = !1, d = !1, h = n !== -1, m = -1, p = c1(dn(t, 0)) && u1(dn(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = dn(t, c), !An(u))
        return $r;
      p = p && xd(u, f, a), f = u;
    }
  else {
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = dn(t, c), u === wn)
        l = !0, h && (d = d || // Foldable line = too long, and not more-indented.
        c - m - 1 > n && t[m + 1] !== " ", m = c);
      else if (!An(u))
        return $r;
      p = p && xd(u, f, a), f = u;
    }
    d = d || h && c - m - 1 > n && t[m + 1] !== " ";
  }
  return !l && !d ? p && !o && !s(t) ? xx : i === En ? $r : Mf : r > 9 && bx(t) ? $r : o ? i === En ? $r : Mf : d ? Ox : Sx;
}
function f1(t, e, r, n, s) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === En ? '""' : "''";
    if (!t.noCompatMode && (t1.indexOf(e) !== -1 || r1.test(e)))
      return t.quotingType === En ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(u) {
      return a1(t, u);
    }
    switch (l1(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !n,
      s
    )) {
      case xx:
        return e;
      case Mf:
        return "'" + e.replace(/'/g, "''") + "'";
      case Sx:
        return "|" + Sd(e, t.indent) + Od(gd(e, i));
      case Ox:
        return ">" + Sd(e, t.indent) + Od(gd(h1(e, o), i));
      case $r:
        return '"' + p1(e) + '"';
      default:
        throw new Je("impossible error: invalid scalar style");
    }
  }();
}
function Sd(t, e) {
  var r = bx(t) ? String(e) : "", n = t[t.length - 1] === `
`, s = n && (t[t.length - 2] === `
` || t === `
`), i = s ? "+" : n ? "" : "-";
  return r + i + `
`;
}
function Od(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function h1(t, e) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var u = t.indexOf(`
`);
    return u = u !== -1 ? u : t.length, r.lastIndex = u, wd(t.slice(0, u), e);
  }(), s = t[0] === `
` || t[0] === " ", i, o; o = r.exec(t); ) {
    var a = o[1], c = o[2];
    i = c[0] === " ", n += a + (!s && !i && c !== "" ? `
` : "") + wd(c, e), s = i;
  }
  return n;
}
function wd(t, e) {
  if (t === "" || t[0] === " ") return t;
  for (var r = / [^ ]/g, n, s = 0, i, o = 0, a = 0, c = ""; n = r.exec(t); )
    a = n.index, a - s > e && (i = o > s ? o : a, c += `
` + t.slice(s, i), s = i + 1), o = a;
  return c += `
`, t.length - s > e && o > s ? c += t.slice(s, o) + `
` + t.slice(o + 1) : c += t.slice(s), c.slice(1);
}
function p1(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = dn(t, s), n = Ve[r], !n && An(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || s1(r);
  return e;
}
function d1(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (It(t, e, a, !1, !1) || typeof a > "u" && It(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function Ed(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (It(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && It(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += If(t, e)), t.dump && wn === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function m1(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, u, f;
  for (o = 0, a = i.length; o < a; o += 1)
    f = "", n !== "" && (f += ", "), t.condenseFlow && (f += '"'), c = i[o], u = r[c], t.replacer && (u = t.replacer.call(r, c, u)), It(t, e, c, !1, !1) && (t.dump.length > 1024 && (f += "? "), f += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), It(t, e, u, !1, !1) && (f += t.dump, n += f));
  t.tag = s, t.dump = "{" + n + "}";
}
function y1(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, u, f, l, d;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new Je("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    d = "", (!n || s !== "") && (d += If(t, e)), u = o[a], f = r[u], t.replacer && (f = t.replacer.call(r, u, f)), It(t, e + 1, u, !0, !0, !0) && (l = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, l && (t.dump && wn === t.dump.charCodeAt(0) ? d += "?" : d += "? "), d += t.dump, l && (d += If(t, e)), It(t, e + 1, f, !0, l) && (t.dump && wn === t.dump.charCodeAt(0) ? d += ":" : d += ": ", d += t.dump, s += d));
  t.tag = i, t.dump = s || "{}";
}
function Ad(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, hx.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (px.call(a.represent, c))
          n = a.represent[c](e, c);
        else
          throw new Je("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = n;
      }
      return !0;
    }
  return !1;
}
function It(t, e, r, n, s, i, o) {
  t.tag = null, t.dump = r, Ad(t, r, !1) || Ad(t, r, !0);
  var a = hx.call(t.dump), c = n, u;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var f = a === "[object Object]" || a === "[object Array]", l, d;
  if (f && (l = t.duplicates.indexOf(r), d = l !== -1), (t.tag !== null && t.tag !== "?" || d || t.indent !== 2 && e > 0) && (s = !1), d && t.usedDuplicates[l])
    t.dump = "*ref_" + l;
  else {
    if (f && d && !t.usedDuplicates[l] && (t.usedDuplicates[l] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (y1(t, e, t.dump, s), d && (t.dump = "&ref_" + l + t.dump)) : (m1(t, e, t.dump), d && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Ed(t, e - 1, t.dump, s) : Ed(t, e, t.dump, s), d && (t.dump = "&ref_" + l + t.dump)) : (d1(t, e, t.dump), d && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && f1(t, t.dump, e, i, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (t.skipInvalid) return !1;
      throw new Je("unacceptable kind of an object to dump " + a);
    }
    t.tag !== null && t.tag !== "?" && (u = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? u = "!" + u : u.slice(0, 18) === "tag:yaml.org,2002:" ? u = "!!" + u.slice(18) : u = "!<" + u + ">", t.dump = u + " " + t.dump);
  }
  return !0;
}
function v1(t, e) {
  var r = [], n = [], s, i;
  for (Ff(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function Ff(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        Ff(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        Ff(t[n[s]], e, r);
}
function g1(t, e) {
  e = e || {};
  var r = new o1(e);
  r.noRefs || v1(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), It(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var b1 = g1, x1 = {
  dump: b1
};
function Vh(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var S1 = ke, O1 = Db, w1 = Bb, Hs = Kb, E1 = zb, A1 = Nh, j1 = fx.load, P1 = fx.loadAll, R1 = x1.dump, T1 = Je, _1 = {
  binary: Zb,
  float: Gb,
  map: Vb,
  null: Ub,
  pairs: tx,
  set: rx,
  timestamp: Xb,
  bool: Jb,
  int: Hb,
  merge: Qb,
  omap: ex,
  seq: Lb,
  str: qb
}, $1 = Vh("safeLoad", "load"), C1 = Vh("safeLoadAll", "loadAll"), I1 = Vh("safeDump", "dump"), Br = {
  Type: S1,
  Schema: O1,
  FAILSAFE_SCHEMA: w1,
  JSON_SCHEMA: Hs,
  CORE_SCHEMA: E1,
  DEFAULT_SCHEMA: A1,
  load: j1,
  loadAll: P1,
  dump: R1,
  YAMLException: T1,
  types: _1,
  safeLoad: $1,
  safeLoadAll: C1,
  safeDump: I1
};
const M1 = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function F1(t, e) {
  if (e) {
    if (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0)
      return JSON.parse(t);
    if (e.indexOf("application/xml") === 0 || e.indexOf("+xml") > 0)
      return t;
  }
  return Br.load(t);
}
function k1(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function wx(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = k1(n), e), {});
}
function Ex(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: wx(t.headers)
  }, s = n.headers["content-type"], i = r || M1(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = F1(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
async function Ur(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, e = Fh(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await Ex(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
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
function N1(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), n = Fh(n), n = e(n), r(t(n)));
}
function Ax(t, e = {}) {
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
      Accept: _b
    },
    credentials: s
  }).then((o) => o.body);
}
const Bh = (t) => {
  var e, r;
  const {
    baseDoc: n,
    url: s
  } = t, i = (e = n ?? s) !== null && e !== void 0 ? e : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(i, globalThis.document.baseURI)) : i;
}, jx = (t) => {
  const {
    fetch: e,
    http: r
  } = t;
  return e || r || Ur;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var D1 = /* @__PURE__ */ function() {
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
}(), q1 = Object.prototype.hasOwnProperty;
function kf(t, e) {
  return q1.call(t, e);
}
function Nf(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var n = [];
  for (var s in t)
    kf(t, s) && n.push(s);
  return n;
}
function ze(t) {
  switch (typeof t) {
    case "object":
      return JSON.parse(JSON.stringify(t));
    //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
    case "undefined":
      return null;
    //this is how JSON.stringify behaves for array items
    default:
      return t;
  }
}
function Df(t) {
  for (var e = 0, r = t.length, n; e < r; ) {
    if (n = t.charCodeAt(e), n >= 48 && n <= 57) {
      e++;
      continue;
    }
    return !1;
  }
  return !0;
}
function or(t) {
  return t.indexOf("/") === -1 && t.indexOf("~") === -1 ? t : t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Px(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function qf(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (qf(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = Nf(t), s = n.length, i = 0; i < s; i++)
        if (qf(t[n[i]]))
          return !0;
    }
  }
  return !1;
}
function jd(t, e) {
  var r = [t];
  for (var n in e) {
    var s = typeof e[n] == "object" ? JSON.stringify(e[n], null, 2) : e[n];
    typeof s < "u" && r.push(n + ": " + s);
  }
  return r.join(`
`);
}
var Rx = (
  /** @class */
  function(t) {
    D1(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, jd(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = jd(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  }(Error)
), ve = Rx, L1 = ze, Fr = {
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
    var n = jn(r, this.path);
    n && (n = ze(n));
    var s = fr(r, { op: "remove", path: this.from }).removed;
    return fr(r, { op: "add", path: this.path, value: s }), { newDocument: r, removed: n };
  },
  copy: function(t, e, r) {
    var n = jn(r, this.from);
    return fr(r, { op: "add", path: this.path, value: ze(n) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: Pn(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, V1 = {
  add: function(t, e, r) {
    return Df(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
  },
  remove: function(t, e, r) {
    var n = t.splice(e, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(t, e, r) {
    var n = t[e];
    return t[e] = this.value, { newDocument: r, removed: n };
  },
  move: Fr.move,
  copy: Fr.copy,
  test: Fr.test,
  _get: Fr._get
};
function jn(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return fr(t, r), r.value;
}
function fr(t, e, r, n, s, i) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : Gs(e, 0)), e.path === "") {
    var o = { newDocument: t };
    if (e.op === "add")
      return o.newDocument = e.value, o;
    if (e.op === "replace")
      return o.newDocument = e.value, o.removed = t, o;
    if (e.op === "move" || e.op === "copy")
      return o.newDocument = jn(t, e.from), e.op === "move" && (o.removed = t), o;
    if (e.op === "test") {
      if (o.test = Pn(t, e.value), o.test === !1)
        throw new ve("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
      return o.newDocument = t, o;
    } else {
      if (e.op === "remove")
        return o.removed = t, o.newDocument = null, o;
      if (e.op === "_get")
        return e.value = t, o;
      if (r)
        throw new ve("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", i, e, t);
      return o;
    }
  } else {
    n || (t = ze(t));
    var a = e.path || "", c = a.split("/"), u = t, f = 1, l = c.length, d = void 0, h = void 0, m = void 0;
    for (typeof r == "function" ? m = r : m = Gs; ; ) {
      if (h = c[f], h && h.indexOf("~") != -1 && (h = Px(h)), s && (h == "__proto__" || h == "prototype" && f > 0 && c[f - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && d === void 0 && (u[h] === void 0 ? d = c.slice(0, f).join("/") : f == l - 1 && (d = e.path), d !== void 0 && m(e, 0, t, d)), f++, Array.isArray(u)) {
        if (h === "-")
          h = u.length;
        else {
          if (r && !Df(h))
            throw new ve("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          Df(h) && (h = ~~h);
        }
        if (f >= l) {
          if (r && e.op === "add" && h > u.length)
            throw new ve("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = V1[e.op].call(e, u, h, t);
          if (o.test === !1)
            throw new ve("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (f >= l) {
        var o = Fr[e.op].call(e, u, h, t);
        if (o.test === !1)
          throw new ve("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (u = u[h], r && f < l && (!u || typeof u != "object"))
        throw new ve("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function Ht(t, e, r, n, s) {
  if (n === void 0 && (n = !0), s === void 0 && (s = !0), r && !Array.isArray(e))
    throw new ve("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (t = ze(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = fr(t, e[o], r, !0, s, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function B1(t, e, r) {
  var n = fr(t, e);
  if (n.test === !1)
    throw new ve("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function Gs(t, e, r, n) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new ve("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (Fr[t.op]) {
    if (typeof t.path != "string")
      throw new ve("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new ve('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new ve("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new ve("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && qf(t.value))
      throw new ve("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", e, t, r);
    if (r) {
      if (t.op == "add") {
        var s = t.path.split("/").length, i = n.split("/").length;
        if (s !== i + 1 && s !== i)
          throw new ve("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", e, t, r);
      } else if (t.op === "replace" || t.op === "remove" || t.op === "_get") {
        if (t.path !== n)
          throw new ve("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", e, t, r);
      } else if (t.op === "move" || t.op === "copy") {
        var o = { op: "_get", path: t.from, value: void 0 }, a = Tx([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new ve("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else throw new ve("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function Tx(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new ve("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      Ht(ze(e), ze(t), r || !0);
    else {
      r = r || Gs;
      for (var n = 0; n < t.length; n++)
        r(t[n], n, e, void 0);
    }
  } catch (s) {
    if (s instanceof ve)
      return s;
    throw s;
  }
}
function Pn(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    var r = Array.isArray(t), n = Array.isArray(e), s, i, o;
    if (r && n) {
      if (i = t.length, i != e.length)
        return !1;
      for (s = i; s-- !== 0; )
        if (!Pn(t[s], e[s]))
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
      if (o = a[s], !Pn(t[o], e[o]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
const U1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: ve,
  _areEquals: Pn,
  applyOperation: fr,
  applyPatch: Ht,
  applyReducer: B1,
  deepClone: L1,
  getValueByPointer: jn,
  validate: Tx,
  validator: Gs
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var Uh = /* @__PURE__ */ new WeakMap(), J1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  }()
), H1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  }()
);
function G1(t) {
  return Uh.get(t);
}
function K1(t, e) {
  return t.observers.get(e);
}
function z1(t, e) {
  t.observers.delete(e.callback);
}
function W1(t, e) {
  e.unobserve();
}
function Y1(t, e) {
  var r = [], n, s = G1(t);
  if (!s)
    s = new J1(t), Uh.set(t, s);
  else {
    var i = K1(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = ze(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      Lf(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    Lf(n), clearTimeout(n.next), z1(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new H1(e, n)), n;
}
function Lf(t, e) {
  e === void 0 && (e = !1);
  var r = Uh.get(t.object);
  Jh(r.value, t.object, t.patches, "", e), t.patches.length && Ht(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function Jh(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = Nf(e), o = Nf(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var u = o[c], f = t[u];
      if (kf(e, u) && !(e[u] === void 0 && f !== void 0 && Array.isArray(e) === !1)) {
        var l = e[u];
        typeof f == "object" && f != null && typeof l == "object" && l != null && Array.isArray(f) === Array.isArray(l) ? Jh(f, l, r, n + "/" + or(u), s) : f !== l && (s && r.push({ op: "test", path: n + "/" + or(u), value: ze(f) }), r.push({ op: "replace", path: n + "/" + or(u), value: ze(l) }));
      } else Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + or(u), value: ze(f) }), r.push({ op: "remove", path: n + "/" + or(u) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var u = i[c];
        !kf(t, u) && e[u] !== void 0 && r.push({ op: "add", path: n + "/" + or(u), value: ze(e[u]) });
      }
  }
}
function X1(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return Jh(t, e, n, "", r), n;
}
const Q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: X1,
  generate: Lf,
  observe: Y1,
  unobserve: W1
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, U1, Q1, {
  JsonPatchError: Rx,
  deepClone: ze,
  escapePathComponent: or,
  unescapePathComponent: Px
});
var ha, Pd;
function Z1() {
  if (Pd) return ha;
  Pd = 1;
  var t = function(y) {
    return e(y) && !r(y);
  };
  function e(g) {
    return !!g && typeof g == "object";
  }
  function r(g) {
    var y = Object.prototype.toString.call(g);
    return y === "[object RegExp]" || y === "[object Date]" || i(g);
  }
  var n = typeof Symbol == "function" && Symbol.for, s = n ? Symbol.for("react.element") : 60103;
  function i(g) {
    return g.$$typeof === s;
  }
  function o(g) {
    return Array.isArray(g) ? [] : {};
  }
  function a(g, y) {
    return y.clone !== !1 && y.isMergeableObject(g) ? p(o(g), g, y) : g;
  }
  function c(g, y, x) {
    return g.concat(y).map(function(b) {
      return a(b, x);
    });
  }
  function u(g, y) {
    if (!y.customMerge)
      return p;
    var x = y.customMerge(g);
    return typeof x == "function" ? x : p;
  }
  function f(g) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(g).filter(function(y) {
      return Object.propertyIsEnumerable.call(g, y);
    }) : [];
  }
  function l(g) {
    return Object.keys(g).concat(f(g));
  }
  function d(g, y) {
    try {
      return y in g;
    } catch {
      return !1;
    }
  }
  function h(g, y) {
    return d(g, y) && !(Object.hasOwnProperty.call(g, y) && Object.propertyIsEnumerable.call(g, y));
  }
  function m(g, y, x) {
    var b = {};
    return x.isMergeableObject(g) && l(g).forEach(function(E) {
      b[E] = a(g[E], x);
    }), l(y).forEach(function(E) {
      h(g, E) || (d(g, E) && x.isMergeableObject(y[E]) ? b[E] = u(E, x)(g[E], y[E], x) : b[E] = a(y[E], x));
    }), b;
  }
  function p(g, y, x) {
    x = x || {}, x.arrayMerge = x.arrayMerge || c, x.isMergeableObject = x.isMergeableObject || t, x.cloneUnlessOtherwiseSpecified = a;
    var b = Array.isArray(y), E = Array.isArray(g), O = b === E;
    return O ? b ? x.arrayMerge(g, y, x) : m(g, y, x) : a(y, x);
  }
  p.all = function(y, x) {
    if (!Array.isArray(y))
      throw new Error("first argument should be an array");
    return y.reduce(function(b, E) {
      return p(b, E, x);
    }, {});
  };
  var v = p;
  return ha = v, ha;
}
var eA = Z1();
const Rd = /* @__PURE__ */ zi(eA), le = {
  add: rA,
  replace: Is,
  remove: nA,
  merge: sA,
  mergeDeep: iA,
  context: oA,
  getIn: lA,
  applyPatch: tA,
  parentPathMatch: uA,
  flatten: $n,
  fullyNormalizeArray: fA,
  normalizeArray: $x,
  isPromise: hA,
  forEachNew: aA,
  forEachNewPrimitive: cA,
  isJsonPatch: Mx,
  isContextPatch: mA,
  isPatch: Yi,
  isMutation: Fx,
  isAdditiveMutation: Ks,
  isGenerator: dA,
  isFunction: Ix,
  isObject: hr,
  isError: pA
};
function tA(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && Td(e.path)
  }, e.op === "merge") {
    const n = pa(t, e.path);
    Object.assign(n, e.value), Ht(t, [Is(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = pa(t, e.path), s = Rd(n, e.value, {
      customMerge: (i) => {
        if (i === "enum")
          return (o, a) => Array.isArray(o) && Array.isArray(a) ? [.../* @__PURE__ */ new Set([...o, ...a])] : Rd(o, a);
      }
    });
    t = Ht(t, [Is(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && hr(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${Td(i)}`,
      value: e.value[i]
    }), s), []);
    Ht(t, n);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: n
    } = e;
    r.allowMetaPatches && e.meta && Ks(e) && (Array.isArray(e.value) || hr(e.value)) && (n = {
      ...n,
      ...e.meta
    }), t = n;
  } else if (Ht(t, [e]), r.allowMetaPatches && e.meta && Ks(e) && (Array.isArray(e.value) || hr(e.value))) {
    const s = {
      ...pa(t, e.path),
      ...e.meta
    };
    Ht(t, [Is(e.path, s)]);
  }
  return t;
}
function Td(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function rA(t, e) {
  return {
    op: "add",
    path: t,
    value: e
  };
}
function Is(t, e, r) {
  return {
    op: "replace",
    path: t,
    value: e,
    meta: r
  };
}
function nA(t) {
  return {
    op: "remove",
    path: t
  };
}
function sA(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function iA(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function oA(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function aA(t, e) {
  try {
    return _x(t, Bf, e);
  } catch (r) {
    return r;
  }
}
function cA(t, e) {
  try {
    return _x(t, Vf, e);
  } catch (r) {
    return r;
  }
}
function _x(t, e, r) {
  const n = t.filter(Ks).map((o) => e(o.value, r, o.path)) || [], s = $n(n);
  return Cx(s);
}
function Vf(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => Vf(n, e, r.concat(s))) : hr(t) ? Object.keys(t).map((n) => Vf(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function Bf(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => Bf(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (hr(t)) {
    const s = Object.keys(t).map((i) => Bf(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = $n(n), n;
}
function uA(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, n = e.length; r < n; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function lA(t, e) {
  return e.reduce((r, n) => typeof n < "u" && r ? r[n] : r, t);
}
function fA(t) {
  return Cx($n($x(t)));
}
function $x(t) {
  return Array.isArray(t) ? t : [t];
}
function $n(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? $n(e) : e));
}
function Cx(t) {
  return t.filter((e) => typeof e < "u");
}
function hr(t) {
  return t && typeof t == "object";
}
function hA(t) {
  return hr(t) && Ix(t.then);
}
function Ix(t) {
  return t && typeof t == "function";
}
function pA(t) {
  return t instanceof Error;
}
function Mx(t) {
  if (Yi(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function dA(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function Fx(t) {
  return Mx(t) || Yi(t) && t.type === "mutation";
}
function Ks(t) {
  return Fx(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function mA(t) {
  return Yi(t) && t.type === "context";
}
function Yi(t) {
  return t && typeof t == "object";
}
function pa(t, e) {
  try {
    return jn(t, e);
  } catch (r) {
    return console.error(r), {};
  }
}
var _d = {}, $d = {}, Cd = {}, hn, Id;
function Xe() {
  if (Id) return hn;
  Id = 1;
  var t = function(e) {
    return e && e.Math === Math && e;
  };
  return hn = // eslint-disable-next-line es/no-global-this -- safe
  t(typeof globalThis == "object" && globalThis) || t(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  t(typeof self == "object" && self) || t(typeof Cr == "object" && Cr) || t(typeof hn == "object" && hn) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")(), hn;
}
var da, Md;
function vt() {
  return Md || (Md = 1, da = function(t) {
    try {
      return !!t();
    } catch {
      return !0;
    }
  }), da;
}
var ma, Fd;
function Xi() {
  if (Fd) return ma;
  Fd = 1;
  var t = /* @__PURE__ */ vt();
  return ma = !t(function() {
    var e = (function() {
    }).bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  }), ma;
}
var ya, kd;
function Hh() {
  if (kd) return ya;
  kd = 1;
  var t = /* @__PURE__ */ Xi(), e = Function.prototype, r = e.apply, n = e.call;
  return ya = typeof Reflect == "object" && Reflect.apply || (t ? n.bind(r) : function() {
    return n.apply(r, arguments);
  }), ya;
}
var va, Nd;
function gt() {
  if (Nd) return va;
  Nd = 1;
  var t = /* @__PURE__ */ Xi(), e = Function.prototype, r = e.call, n = t && e.bind.bind(r, r);
  return va = t ? n : function(s) {
    return function() {
      return r.apply(s, arguments);
    };
  }, va;
}
var ga, Dd;
function Gh() {
  if (Dd) return ga;
  Dd = 1;
  var t = /* @__PURE__ */ gt(), e = t({}.toString), r = t("".slice);
  return ga = function(n) {
    return r(e(n), 8, -1);
  }, ga;
}
var ba, qd;
function kx() {
  if (qd) return ba;
  qd = 1;
  var t = /* @__PURE__ */ Gh(), e = /* @__PURE__ */ gt();
  return ba = function(r) {
    if (t(r) === "Function") return e(r);
  }, ba;
}
var xa, Ld;
function Qe() {
  if (Ld) return xa;
  Ld = 1;
  var t = typeof document == "object" && document.all;
  return xa = typeof t > "u" && t !== void 0 ? function(e) {
    return typeof e == "function" || e === t;
  } : function(e) {
    return typeof e == "function";
  }, xa;
}
var Sa = {}, Oa, Vd;
function Ft() {
  if (Vd) return Oa;
  Vd = 1;
  var t = /* @__PURE__ */ vt();
  return Oa = !t(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  }), Oa;
}
var wa, Bd;
function br() {
  if (Bd) return wa;
  Bd = 1;
  var t = /* @__PURE__ */ Xi(), e = Function.prototype.call;
  return wa = t ? e.bind(e) : function() {
    return e.apply(e, arguments);
  }, wa;
}
var Ea = {}, Ud;
function yA() {
  if (Ud) return Ea;
  Ud = 1;
  var t = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, r = e && !t.call({ 1: 2 }, 1);
  return Ea.f = r ? function(s) {
    var i = e(this, s);
    return !!i && i.enumerable;
  } : t, Ea;
}
var Aa, Jd;
function Cn() {
  return Jd || (Jd = 1, Aa = function(t, e) {
    return {
      enumerable: !(t & 1),
      configurable: !(t & 2),
      writable: !(t & 4),
      value: e
    };
  }), Aa;
}
var ja, Hd;
function vA() {
  if (Hd) return ja;
  Hd = 1;
  var t = /* @__PURE__ */ gt(), e = /* @__PURE__ */ vt(), r = /* @__PURE__ */ Gh(), n = Object, s = t("".split);
  return ja = e(function() {
    return !n("z").propertyIsEnumerable(0);
  }) ? function(i) {
    return r(i) === "String" ? s(i, "") : n(i);
  } : n, ja;
}
var Pa, Gd;
function Kh() {
  return Gd || (Gd = 1, Pa = function(t) {
    return t == null;
  }), Pa;
}
var Ra, Kd;
function Qi() {
  if (Kd) return Ra;
  Kd = 1;
  var t = /* @__PURE__ */ Kh(), e = TypeError;
  return Ra = function(r) {
    if (t(r)) throw new e("Can't call method on " + r);
    return r;
  }, Ra;
}
var Ta, zd;
function In() {
  if (zd) return Ta;
  zd = 1;
  var t = /* @__PURE__ */ vA(), e = /* @__PURE__ */ Qi();
  return Ta = function(r) {
    return t(e(r));
  }, Ta;
}
var _a, Wd;
function At() {
  if (Wd) return _a;
  Wd = 1;
  var t = /* @__PURE__ */ Qe();
  return _a = function(e) {
    return typeof e == "object" ? e !== null : t(e);
  }, _a;
}
var $a, Yd;
function zh() {
  return Yd || (Yd = 1, $a = {}), $a;
}
var Ca, Xd;
function Mn() {
  if (Xd) return Ca;
  Xd = 1;
  var t = /* @__PURE__ */ zh(), e = /* @__PURE__ */ Xe(), r = /* @__PURE__ */ Qe(), n = function(s) {
    return r(s) ? s : void 0;
  };
  return Ca = function(s, i) {
    return arguments.length < 2 ? n(t[s]) || n(e[s]) : t[s] && t[s][i] || e[s] && e[s][i];
  }, Ca;
}
var Ia, Qd;
function Zi() {
  if (Qd) return Ia;
  Qd = 1;
  var t = /* @__PURE__ */ gt();
  return Ia = t({}.isPrototypeOf), Ia;
}
var Ma, Zd;
function gA() {
  if (Zd) return Ma;
  Zd = 1;
  var t = /* @__PURE__ */ Xe(), e = t.navigator, r = e && e.userAgent;
  return Ma = r ? String(r) : "", Ma;
}
var Fa, em;
function bA() {
  if (em) return Fa;
  em = 1;
  var t = /* @__PURE__ */ Xe(), e = /* @__PURE__ */ gA(), r = t.process, n = t.Deno, s = r && r.versions || n && n.version, i = s && s.v8, o, a;
  return i && (o = i.split("."), a = o[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !a && e && (o = e.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = e.match(/Chrome\/(\d+)/), o && (a = +o[1]))), Fa = a, Fa;
}
var ka, tm;
function Nx() {
  if (tm) return ka;
  tm = 1;
  var t = /* @__PURE__ */ bA(), e = /* @__PURE__ */ vt(), r = /* @__PURE__ */ Xe(), n = r.String;
  return ka = !!Object.getOwnPropertySymbols && !e(function() {
    var s = Symbol("symbol detection");
    return !n(s) || !(Object(s) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && t && t < 41;
  }), ka;
}
var Na, rm;
function Dx() {
  if (rm) return Na;
  rm = 1;
  var t = /* @__PURE__ */ Nx();
  return Na = t && !Symbol.sham && typeof Symbol.iterator == "symbol", Na;
}
var Da, nm;
function qx() {
  if (nm) return Da;
  nm = 1;
  var t = /* @__PURE__ */ Mn(), e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ Zi(), n = /* @__PURE__ */ Dx(), s = Object;
  return Da = n ? function(i) {
    return typeof i == "symbol";
  } : function(i) {
    var o = t("Symbol");
    return e(o) && r(o.prototype, s(i));
  }, Da;
}
var qa, sm;
function Wh() {
  if (sm) return qa;
  sm = 1;
  var t = String;
  return qa = function(e) {
    try {
      return t(e);
    } catch {
      return "Object";
    }
  }, qa;
}
var La, im;
function eo() {
  if (im) return La;
  im = 1;
  var t = /* @__PURE__ */ Qe(), e = /* @__PURE__ */ Wh(), r = TypeError;
  return La = function(n) {
    if (t(n)) return n;
    throw new r(e(n) + " is not a function");
  }, La;
}
var Va, om;
function Yh() {
  if (om) return Va;
  om = 1;
  var t = /* @__PURE__ */ eo(), e = /* @__PURE__ */ Kh();
  return Va = function(r, n) {
    var s = r[n];
    return e(s) ? void 0 : t(s);
  }, Va;
}
var Ba, am;
function xA() {
  if (am) return Ba;
  am = 1;
  var t = /* @__PURE__ */ br(), e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ At(), n = TypeError;
  return Ba = function(s, i) {
    var o, a;
    if (i === "string" && e(o = s.toString) && !r(a = t(o, s)) || e(o = s.valueOf) && !r(a = t(o, s)) || i !== "string" && e(o = s.toString) && !r(a = t(o, s))) return a;
    throw new n("Can't convert object to primitive value");
  }, Ba;
}
var Ua = { exports: {} }, Ja, cm;
function Fn() {
  return cm || (cm = 1, Ja = !0), Ja;
}
var Ha, um;
function SA() {
  if (um) return Ha;
  um = 1;
  var t = /* @__PURE__ */ Xe(), e = Object.defineProperty;
  return Ha = function(r, n) {
    try {
      e(t, r, { value: n, configurable: !0, writable: !0 });
    } catch {
      t[r] = n;
    }
    return n;
  }, Ha;
}
var lm;
function Lx() {
  if (lm) return Ua.exports;
  lm = 1;
  var t = /* @__PURE__ */ Fn(), e = /* @__PURE__ */ Xe(), r = /* @__PURE__ */ SA(), n = "__core-js_shared__", s = Ua.exports = e[n] || r(n, {});
  return (s.versions || (s.versions = [])).push({
    version: "3.44.0",
    mode: t ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), Ua.exports;
}
var Ga, fm;
function Vx() {
  if (fm) return Ga;
  fm = 1;
  var t = /* @__PURE__ */ Lx();
  return Ga = function(e, r) {
    return t[e] || (t[e] = r || {});
  }, Ga;
}
var Ka, hm;
function Bx() {
  if (hm) return Ka;
  hm = 1;
  var t = /* @__PURE__ */ Qi(), e = Object;
  return Ka = function(r) {
    return e(t(r));
  }, Ka;
}
var za, pm;
function jt() {
  if (pm) return za;
  pm = 1;
  var t = /* @__PURE__ */ gt(), e = /* @__PURE__ */ Bx(), r = t({}.hasOwnProperty);
  return za = Object.hasOwn || function(s, i) {
    return r(e(s), i);
  }, za;
}
var Wa, dm;
function Ux() {
  if (dm) return Wa;
  dm = 1;
  var t = /* @__PURE__ */ gt(), e = 0, r = Math.random(), n = t(1.1.toString);
  return Wa = function(s) {
    return "Symbol(" + (s === void 0 ? "" : s) + ")_" + n(++e + r, 36);
  }, Wa;
}
var Ya, mm;
function kt() {
  if (mm) return Ya;
  mm = 1;
  var t = /* @__PURE__ */ Xe(), e = /* @__PURE__ */ Vx(), r = /* @__PURE__ */ jt(), n = /* @__PURE__ */ Ux(), s = /* @__PURE__ */ Nx(), i = /* @__PURE__ */ Dx(), o = t.Symbol, a = e("wks"), c = i ? o.for || o : o && o.withoutSetter || n;
  return Ya = function(u) {
    return r(a, u) || (a[u] = s && r(o, u) ? o[u] : c("Symbol." + u)), a[u];
  }, Ya;
}
var Xa, ym;
function OA() {
  if (ym) return Xa;
  ym = 1;
  var t = /* @__PURE__ */ br(), e = /* @__PURE__ */ At(), r = /* @__PURE__ */ qx(), n = /* @__PURE__ */ Yh(), s = /* @__PURE__ */ xA(), i = /* @__PURE__ */ kt(), o = TypeError, a = i("toPrimitive");
  return Xa = function(c, u) {
    if (!e(c) || r(c)) return c;
    var f = n(c, a), l;
    if (f) {
      if (u === void 0 && (u = "default"), l = t(f, c, u), !e(l) || r(l)) return l;
      throw new o("Can't convert object to primitive value");
    }
    return u === void 0 && (u = "number"), s(c, u);
  }, Xa;
}
var Qa, vm;
function Jx() {
  if (vm) return Qa;
  vm = 1;
  var t = /* @__PURE__ */ OA(), e = /* @__PURE__ */ qx();
  return Qa = function(r) {
    var n = t(r, "string");
    return e(n) ? n : n + "";
  }, Qa;
}
var Za, gm;
function Hx() {
  if (gm) return Za;
  gm = 1;
  var t = /* @__PURE__ */ Xe(), e = /* @__PURE__ */ At(), r = t.document, n = e(r) && e(r.createElement);
  return Za = function(s) {
    return n ? r.createElement(s) : {};
  }, Za;
}
var ec, bm;
function Gx() {
  if (bm) return ec;
  bm = 1;
  var t = /* @__PURE__ */ Ft(), e = /* @__PURE__ */ vt(), r = /* @__PURE__ */ Hx();
  return ec = !t && !e(function() {
    return Object.defineProperty(r("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), ec;
}
var xm;
function Kx() {
  if (xm) return Sa;
  xm = 1;
  var t = /* @__PURE__ */ Ft(), e = /* @__PURE__ */ br(), r = /* @__PURE__ */ yA(), n = /* @__PURE__ */ Cn(), s = /* @__PURE__ */ In(), i = /* @__PURE__ */ Jx(), o = /* @__PURE__ */ jt(), a = /* @__PURE__ */ Gx(), c = Object.getOwnPropertyDescriptor;
  return Sa.f = t ? c : function(f, l) {
    if (f = s(f), l = i(l), a) try {
      return c(f, l);
    } catch {
    }
    if (o(f, l)) return n(!e(r.f, f, l), f[l]);
  }, Sa;
}
var tc, Sm;
function wA() {
  if (Sm) return tc;
  Sm = 1;
  var t = /* @__PURE__ */ vt(), e = /* @__PURE__ */ Qe(), r = /#|\.prototype\./, n = function(c, u) {
    var f = i[s(c)];
    return f === a ? !0 : f === o ? !1 : e(u) ? t(u) : !!u;
  }, s = n.normalize = function(c) {
    return String(c).replace(r, ".").toLowerCase();
  }, i = n.data = {}, o = n.NATIVE = "N", a = n.POLYFILL = "P";
  return tc = n, tc;
}
var rc, Om;
function zx() {
  if (Om) return rc;
  Om = 1;
  var t = /* @__PURE__ */ kx(), e = /* @__PURE__ */ eo(), r = /* @__PURE__ */ Xi(), n = t(t.bind);
  return rc = function(s, i) {
    return e(s), i === void 0 ? s : r ? n(s, i) : function() {
      return s.apply(i, arguments);
    };
  }, rc;
}
var nc = {}, sc, wm;
function Wx() {
  if (wm) return sc;
  wm = 1;
  var t = /* @__PURE__ */ Ft(), e = /* @__PURE__ */ vt();
  return sc = t && e(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), sc;
}
var ic, Em;
function xr() {
  if (Em) return ic;
  Em = 1;
  var t = /* @__PURE__ */ At(), e = String, r = TypeError;
  return ic = function(n) {
    if (t(n)) return n;
    throw new r(e(n) + " is not an object");
  }, ic;
}
var Am;
function Qr() {
  if (Am) return nc;
  Am = 1;
  var t = /* @__PURE__ */ Ft(), e = /* @__PURE__ */ Gx(), r = /* @__PURE__ */ Wx(), n = /* @__PURE__ */ xr(), s = /* @__PURE__ */ Jx(), i = TypeError, o = Object.defineProperty, a = Object.getOwnPropertyDescriptor, c = "enumerable", u = "configurable", f = "writable";
  return nc.f = t ? r ? function(d, h, m) {
    if (n(d), h = s(h), n(m), typeof d == "function" && h === "prototype" && "value" in m && f in m && !m[f]) {
      var p = a(d, h);
      p && p[f] && (d[h] = m.value, m = {
        configurable: u in m ? m[u] : p[u],
        enumerable: c in m ? m[c] : p[c],
        writable: !1
      });
    }
    return o(d, h, m);
  } : o : function(d, h, m) {
    if (n(d), h = s(h), n(m), e) try {
      return o(d, h, m);
    } catch {
    }
    if ("get" in m || "set" in m) throw new i("Accessors not supported");
    return "value" in m && (d[h] = m.value), d;
  }, nc;
}
var oc, jm;
function Nt() {
  if (jm) return oc;
  jm = 1;
  var t = /* @__PURE__ */ Ft(), e = /* @__PURE__ */ Qr(), r = /* @__PURE__ */ Cn();
  return oc = t ? function(n, s, i) {
    return e.f(n, s, r(1, i));
  } : function(n, s, i) {
    return n[s] = i, n;
  }, oc;
}
var ac, Pm;
function to() {
  if (Pm) return ac;
  Pm = 1;
  var t = /* @__PURE__ */ Xe(), e = /* @__PURE__ */ Hh(), r = /* @__PURE__ */ kx(), n = /* @__PURE__ */ Qe(), s = Kx().f, i = /* @__PURE__ */ wA(), o = /* @__PURE__ */ zh(), a = /* @__PURE__ */ zx(), c = /* @__PURE__ */ Nt(), u = /* @__PURE__ */ jt(), f = function(l) {
    var d = function(h, m, p) {
      if (this instanceof d) {
        switch (arguments.length) {
          case 0:
            return new l();
          case 1:
            return new l(h);
          case 2:
            return new l(h, m);
        }
        return new l(h, m, p);
      }
      return e(l, this, arguments);
    };
    return d.prototype = l.prototype, d;
  };
  return ac = function(l, d) {
    var h = l.target, m = l.global, p = l.stat, v = l.proto, g = m ? t : p ? t[h] : t[h] && t[h].prototype, y = m ? o : o[h] || c(o, h, {})[h], x = y.prototype, b, E, O, _, I, P, $, S, A;
    for (_ in d)
      b = i(m ? _ : h + (p ? "." : "#") + _, l.forced), E = !b && g && u(g, _), P = y[_], E && (l.dontCallGetSet ? (A = s(g, _), $ = A && A.value) : $ = g[_]), I = E && $ ? $ : d[_], !(!b && !v && typeof P == typeof I) && (l.bind && E ? S = a(I, t) : l.wrap && E ? S = f(I) : v && n(I) ? S = r(I) : S = I, (l.sham || I && I.sham || P && P.sham) && c(S, "sham", !0), c(y, _, S), v && (O = h + "Prototype", u(o, O) || c(o, O, {}), c(o[O], _, I), l.real && x && (b || !x[_]) && c(x, _, I)));
  }, ac;
}
var cc, Rm;
function Xh() {
  if (Rm) return cc;
  Rm = 1;
  var t = /* @__PURE__ */ Vx(), e = /* @__PURE__ */ Ux(), r = t("keys");
  return cc = function(n) {
    return r[n] || (r[n] = e(n));
  }, cc;
}
var uc, Tm;
function EA() {
  if (Tm) return uc;
  Tm = 1;
  var t = /* @__PURE__ */ vt();
  return uc = !t(function() {
    function e() {
    }
    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
  }), uc;
}
var lc, _m;
function Qh() {
  if (_m) return lc;
  _m = 1;
  var t = /* @__PURE__ */ jt(), e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ Bx(), n = /* @__PURE__ */ Xh(), s = /* @__PURE__ */ EA(), i = n("IE_PROTO"), o = Object, a = o.prototype;
  return lc = s ? o.getPrototypeOf : function(c) {
    var u = r(c);
    if (t(u, i)) return u[i];
    var f = u.constructor;
    return e(f) && u instanceof f ? f.prototype : u instanceof o ? a : null;
  }, lc;
}
var fc, $m;
function AA() {
  if ($m) return fc;
  $m = 1;
  var t = /* @__PURE__ */ gt(), e = /* @__PURE__ */ eo();
  return fc = function(r, n, s) {
    try {
      return t(e(Object.getOwnPropertyDescriptor(r, n)[s]));
    } catch {
    }
  }, fc;
}
var hc, Cm;
function jA() {
  if (Cm) return hc;
  Cm = 1;
  var t = /* @__PURE__ */ At();
  return hc = function(e) {
    return t(e) || e === null;
  }, hc;
}
var pc, Im;
function PA() {
  if (Im) return pc;
  Im = 1;
  var t = /* @__PURE__ */ jA(), e = String, r = TypeError;
  return pc = function(n) {
    if (t(n)) return n;
    throw new r("Can't set " + e(n) + " as a prototype");
  }, pc;
}
var dc, Mm;
function ro() {
  if (Mm) return dc;
  Mm = 1;
  var t = /* @__PURE__ */ AA(), e = /* @__PURE__ */ At(), r = /* @__PURE__ */ Qi(), n = /* @__PURE__ */ PA();
  return dc = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var s = !1, i = {}, o;
    try {
      o = t(Object.prototype, "__proto__", "set"), o(i, []), s = i instanceof Array;
    } catch {
    }
    return function(c, u) {
      return r(c), n(u), e(c) && (s ? o(c, u) : c.__proto__ = u), c;
    };
  }() : void 0), dc;
}
var mc = {}, yc, Fm;
function RA() {
  if (Fm) return yc;
  Fm = 1;
  var t = Math.ceil, e = Math.floor;
  return yc = Math.trunc || function(n) {
    var s = +n;
    return (s > 0 ? e : t)(s);
  }, yc;
}
var vc, km;
function Zh() {
  if (km) return vc;
  km = 1;
  var t = /* @__PURE__ */ RA();
  return vc = function(e) {
    var r = +e;
    return r !== r || r === 0 ? 0 : t(r);
  }, vc;
}
var gc, Nm;
function TA() {
  if (Nm) return gc;
  Nm = 1;
  var t = /* @__PURE__ */ Zh(), e = Math.max, r = Math.min;
  return gc = function(n, s) {
    var i = t(n);
    return i < 0 ? e(i + s, 0) : r(i, s);
  }, gc;
}
var bc, Dm;
function _A() {
  if (Dm) return bc;
  Dm = 1;
  var t = /* @__PURE__ */ Zh(), e = Math.min;
  return bc = function(r) {
    var n = t(r);
    return n > 0 ? e(n, 9007199254740991) : 0;
  }, bc;
}
var xc, qm;
function Yx() {
  if (qm) return xc;
  qm = 1;
  var t = /* @__PURE__ */ _A();
  return xc = function(e) {
    return t(e.length);
  }, xc;
}
var Sc, Lm;
function $A() {
  if (Lm) return Sc;
  Lm = 1;
  var t = /* @__PURE__ */ In(), e = /* @__PURE__ */ TA(), r = /* @__PURE__ */ Yx(), n = function(s) {
    return function(i, o, a) {
      var c = t(i), u = r(c);
      if (u === 0) return !s && -1;
      var f = e(a, u), l;
      if (s && o !== o) {
        for (; u > f; )
          if (l = c[f++], l !== l) return !0;
      } else for (; u > f; f++)
        if ((s || f in c) && c[f] === o) return s || f || 0;
      return !s && -1;
    };
  };
  return Sc = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: n(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: n(!1)
  }, Sc;
}
var Oc, Vm;
function ep() {
  return Vm || (Vm = 1, Oc = {}), Oc;
}
var wc, Bm;
function Xx() {
  if (Bm) return wc;
  Bm = 1;
  var t = /* @__PURE__ */ gt(), e = /* @__PURE__ */ jt(), r = /* @__PURE__ */ In(), n = $A().indexOf, s = /* @__PURE__ */ ep(), i = t([].push);
  return wc = function(o, a) {
    var c = r(o), u = 0, f = [], l;
    for (l in c) !e(s, l) && e(c, l) && i(f, l);
    for (; a.length > u; ) e(c, l = a[u++]) && (~n(f, l) || i(f, l));
    return f;
  }, wc;
}
var Ec, Um;
function tp() {
  return Um || (Um = 1, Ec = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ]), Ec;
}
var Jm;
function CA() {
  if (Jm) return mc;
  Jm = 1;
  var t = /* @__PURE__ */ Xx(), e = /* @__PURE__ */ tp(), r = e.concat("length", "prototype");
  return mc.f = Object.getOwnPropertyNames || function(s) {
    return t(s, r);
  }, mc;
}
var Ac = {}, Hm;
function IA() {
  return Hm || (Hm = 1, Ac.f = Object.getOwnPropertySymbols), Ac;
}
var jc, Gm;
function MA() {
  if (Gm) return jc;
  Gm = 1;
  var t = /* @__PURE__ */ Mn(), e = /* @__PURE__ */ gt(), r = /* @__PURE__ */ CA(), n = /* @__PURE__ */ IA(), s = /* @__PURE__ */ xr(), i = e([].concat);
  return jc = t("Reflect", "ownKeys") || function(a) {
    var c = r.f(s(a)), u = n.f;
    return u ? i(c, u(a)) : c;
  }, jc;
}
var Pc, Km;
function Qx() {
  if (Km) return Pc;
  Km = 1;
  var t = /* @__PURE__ */ jt(), e = /* @__PURE__ */ MA(), r = /* @__PURE__ */ Kx(), n = /* @__PURE__ */ Qr();
  return Pc = function(s, i, o) {
    for (var a = e(i), c = n.f, u = r.f, f = 0; f < a.length; f++) {
      var l = a[f];
      !t(s, l) && !(o && t(o, l)) && c(s, l, u(i, l));
    }
  }, Pc;
}
var Rc = {}, Tc, zm;
function FA() {
  if (zm) return Tc;
  zm = 1;
  var t = /* @__PURE__ */ Xx(), e = /* @__PURE__ */ tp();
  return Tc = Object.keys || function(n) {
    return t(n, e);
  }, Tc;
}
var Wm;
function kA() {
  if (Wm) return Rc;
  Wm = 1;
  var t = /* @__PURE__ */ Ft(), e = /* @__PURE__ */ Wx(), r = /* @__PURE__ */ Qr(), n = /* @__PURE__ */ xr(), s = /* @__PURE__ */ In(), i = /* @__PURE__ */ FA();
  return Rc.f = t && !e ? Object.defineProperties : function(a, c) {
    n(a);
    for (var u = s(c), f = i(c), l = f.length, d = 0, h; l > d; ) r.f(a, h = f[d++], u[h]);
    return a;
  }, Rc;
}
var _c, Ym;
function NA() {
  if (Ym) return _c;
  Ym = 1;
  var t = /* @__PURE__ */ Mn();
  return _c = t("document", "documentElement"), _c;
}
var $c, Xm;
function rp() {
  if (Xm) return $c;
  Xm = 1;
  var t = /* @__PURE__ */ xr(), e = /* @__PURE__ */ kA(), r = /* @__PURE__ */ tp(), n = /* @__PURE__ */ ep(), s = /* @__PURE__ */ NA(), i = /* @__PURE__ */ Hx(), o = /* @__PURE__ */ Xh(), a = ">", c = "<", u = "prototype", f = "script", l = o("IE_PROTO"), d = function() {
  }, h = function(y) {
    return c + f + a + y + c + "/" + f + a;
  }, m = function(y) {
    y.write(h("")), y.close();
    var x = y.parentWindow.Object;
    return y = null, x;
  }, p = function() {
    var y = i("iframe"), x = "java" + f + ":", b;
    return y.style.display = "none", s.appendChild(y), y.src = String(x), b = y.contentWindow.document, b.open(), b.write(h("document.F=Object")), b.close(), b.F;
  }, v, g = function() {
    try {
      v = new ActiveXObject("htmlfile");
    } catch {
    }
    g = typeof document < "u" ? document.domain && v ? m(v) : p() : m(v);
    for (var y = r.length; y--; ) delete g[u][r[y]];
    return g();
  };
  return n[l] = !0, $c = Object.create || function(x, b) {
    var E;
    return x !== null ? (d[u] = t(x), E = new d(), d[u] = null, E[l] = x) : E = g(), b === void 0 ? E : e.f(E, b);
  }, $c;
}
var Cc, Qm;
function Zx() {
  if (Qm) return Cc;
  Qm = 1;
  var t = /* @__PURE__ */ At(), e = /* @__PURE__ */ Nt();
  return Cc = function(r, n) {
    t(n) && "cause" in n && e(r, "cause", n.cause);
  }, Cc;
}
var Ic, Zm;
function DA() {
  if (Zm) return Ic;
  Zm = 1;
  var t = /* @__PURE__ */ gt(), e = Error, r = t("".replace), n = function(o) {
    return String(new e(o).stack);
  }("zxcasd"), s = /\n\s*at [^:]*:[^\n]*/, i = s.test(n);
  return Ic = function(o, a) {
    if (i && typeof o == "string" && !e.prepareStackTrace)
      for (; a--; ) o = r(o, s, "");
    return o;
  }, Ic;
}
var Mc, ey;
function qA() {
  if (ey) return Mc;
  ey = 1;
  var t = /* @__PURE__ */ vt(), e = /* @__PURE__ */ Cn();
  return Mc = !t(function() {
    var r = new Error("a");
    return "stack" in r ? (Object.defineProperty(r, "stack", e(1, 7)), r.stack !== 7) : !0;
  }), Mc;
}
var Fc, ty;
function eS() {
  if (ty) return Fc;
  ty = 1;
  var t = /* @__PURE__ */ Nt(), e = /* @__PURE__ */ DA(), r = /* @__PURE__ */ qA(), n = Error.captureStackTrace;
  return Fc = function(s, i, o, a) {
    r && (n ? n(s, i) : t(s, "stack", e(o, a)));
  }, Fc;
}
var kc, ry;
function Zr() {
  return ry || (ry = 1, kc = {}), kc;
}
var Nc, ny;
function LA() {
  if (ny) return Nc;
  ny = 1;
  var t = /* @__PURE__ */ kt(), e = /* @__PURE__ */ Zr(), r = t("iterator"), n = Array.prototype;
  return Nc = function(s) {
    return s !== void 0 && (e.Array === s || n[r] === s);
  }, Nc;
}
var Dc, sy;
function np() {
  if (sy) return Dc;
  sy = 1;
  var t = /* @__PURE__ */ kt(), e = t("toStringTag"), r = {};
  return r[e] = "z", Dc = String(r) === "[object z]", Dc;
}
var qc, iy;
function sp() {
  if (iy) return qc;
  iy = 1;
  var t = /* @__PURE__ */ np(), e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ Gh(), n = /* @__PURE__ */ kt(), s = n("toStringTag"), i = Object, o = r(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", a = function(c, u) {
    try {
      return c[u];
    } catch {
    }
  };
  return qc = t ? r : function(c) {
    var u, f, l;
    return c === void 0 ? "Undefined" : c === null ? "Null" : typeof (f = a(u = i(c), s)) == "string" ? f : o ? r(u) : (l = r(u)) === "Object" && e(u.callee) ? "Arguments" : l;
  }, qc;
}
var Lc, oy;
function tS() {
  if (oy) return Lc;
  oy = 1;
  var t = /* @__PURE__ */ sp(), e = /* @__PURE__ */ Yh(), r = /* @__PURE__ */ Kh(), n = /* @__PURE__ */ Zr(), s = /* @__PURE__ */ kt(), i = s("iterator");
  return Lc = function(o) {
    if (!r(o)) return e(o, i) || e(o, "@@iterator") || n[t(o)];
  }, Lc;
}
var Vc, ay;
function VA() {
  if (ay) return Vc;
  ay = 1;
  var t = /* @__PURE__ */ br(), e = /* @__PURE__ */ eo(), r = /* @__PURE__ */ xr(), n = /* @__PURE__ */ Wh(), s = /* @__PURE__ */ tS(), i = TypeError;
  return Vc = function(o, a) {
    var c = arguments.length < 2 ? s(o) : a;
    if (e(c)) return r(t(c, o));
    throw new i(n(o) + " is not iterable");
  }, Vc;
}
var Bc, cy;
function BA() {
  if (cy) return Bc;
  cy = 1;
  var t = /* @__PURE__ */ br(), e = /* @__PURE__ */ xr(), r = /* @__PURE__ */ Yh();
  return Bc = function(n, s, i) {
    var o, a;
    e(n);
    try {
      if (o = r(n, "return"), !o) {
        if (s === "throw") throw i;
        return i;
      }
      o = t(o, n);
    } catch (c) {
      a = !0, o = c;
    }
    if (s === "throw") throw i;
    if (a) throw o;
    return e(o), i;
  }, Bc;
}
var Uc, uy;
function UA() {
  if (uy) return Uc;
  uy = 1;
  var t = /* @__PURE__ */ zx(), e = /* @__PURE__ */ br(), r = /* @__PURE__ */ xr(), n = /* @__PURE__ */ Wh(), s = /* @__PURE__ */ LA(), i = /* @__PURE__ */ Yx(), o = /* @__PURE__ */ Zi(), a = /* @__PURE__ */ VA(), c = /* @__PURE__ */ tS(), u = /* @__PURE__ */ BA(), f = TypeError, l = function(h, m) {
    this.stopped = h, this.result = m;
  }, d = l.prototype;
  return Uc = function(h, m, p) {
    var v = p && p.that, g = !!(p && p.AS_ENTRIES), y = !!(p && p.IS_RECORD), x = !!(p && p.IS_ITERATOR), b = !!(p && p.INTERRUPTED), E = t(m, v), O, _, I, P, $, S, A, C = function(q) {
      return O && u(O, "normal"), new l(!0, q);
    }, V = function(q) {
      return g ? (r(q), b ? E(q[0], q[1], C) : E(q[0], q[1])) : b ? E(q, C) : E(q);
    };
    if (y)
      O = h.iterator;
    else if (x)
      O = h;
    else {
      if (_ = c(h), !_) throw new f(n(h) + " is not iterable");
      if (s(_)) {
        for (I = 0, P = i(h); P > I; I++)
          if ($ = V(h[I]), $ && o(d, $)) return $;
        return new l(!1);
      }
      O = a(h, _);
    }
    for (S = y ? h.next : O.next; !(A = e(S, O)).done; ) {
      try {
        $ = V(A.value);
      } catch (q) {
        u(O, "throw", q);
      }
      if (typeof $ == "object" && $ && o(d, $)) return $;
    }
    return new l(!1);
  }, Uc;
}
var Jc, ly;
function ip() {
  if (ly) return Jc;
  ly = 1;
  var t = /* @__PURE__ */ sp(), e = String;
  return Jc = function(r) {
    if (t(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return e(r);
  }, Jc;
}
var Hc, fy;
function rS() {
  if (fy) return Hc;
  fy = 1;
  var t = /* @__PURE__ */ ip();
  return Hc = function(e, r) {
    return e === void 0 ? arguments.length < 2 ? "" : r : t(e);
  }, Hc;
}
var hy;
function JA() {
  if (hy) return Cd;
  hy = 1;
  var t = /* @__PURE__ */ to(), e = /* @__PURE__ */ Zi(), r = /* @__PURE__ */ Qh(), n = /* @__PURE__ */ ro(), s = /* @__PURE__ */ Qx(), i = /* @__PURE__ */ rp(), o = /* @__PURE__ */ Nt(), a = /* @__PURE__ */ Cn(), c = /* @__PURE__ */ Zx(), u = /* @__PURE__ */ eS(), f = /* @__PURE__ */ UA(), l = /* @__PURE__ */ rS(), d = /* @__PURE__ */ kt(), h = d("toStringTag"), m = Error, p = [].push, v = function(x, b) {
    var E = e(g, this), O;
    n ? O = n(new m(), E ? r(this) : g) : (O = E ? this : i(g), o(O, h, "Error")), b !== void 0 && o(O, "message", l(b)), u(O, v, O.stack, 1), arguments.length > 2 && c(O, arguments[2]);
    var _ = [];
    return f(x, p, { that: _ }), o(O, "errors", _), O;
  };
  n ? n(v, m) : s(v, m, { name: !0 });
  var g = v.prototype = i(m.prototype, {
    constructor: a(1, v),
    message: a(1, ""),
    name: a(1, "AggregateError")
  });
  return t({ global: !0, constructor: !0, arity: 2 }, {
    AggregateError: v
  }), Cd;
}
var py;
function nS() {
  return py || (py = 1, JA()), $d;
}
var dy;
function sS() {
  return dy || (dy = 1, nS()), _d;
}
var my = {}, Gc, yy;
function HA() {
  if (yy) return Gc;
  yy = 1;
  var t = Qr().f;
  return Gc = function(e, r, n) {
    n in e || t(e, n, {
      configurable: !0,
      get: function() {
        return r[n];
      },
      set: function(s) {
        r[n] = s;
      }
    });
  }, Gc;
}
var Kc, vy;
function GA() {
  if (vy) return Kc;
  vy = 1;
  var t = /* @__PURE__ */ Qe(), e = /* @__PURE__ */ At(), r = /* @__PURE__ */ ro();
  return Kc = function(n, s, i) {
    var o, a;
    return (
      // it can work only with native `setPrototypeOf`
      r && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      t(o = s.constructor) && o !== i && e(a = o.prototype) && a !== i.prototype && r(n, a), n
    );
  }, Kc;
}
var zc, gy;
function iS() {
  if (gy) return zc;
  gy = 1;
  var t = /* @__PURE__ */ Mn(), e = /* @__PURE__ */ jt(), r = /* @__PURE__ */ Nt(), n = /* @__PURE__ */ Zi(), s = /* @__PURE__ */ ro(), i = /* @__PURE__ */ Qx(), o = /* @__PURE__ */ HA(), a = /* @__PURE__ */ GA(), c = /* @__PURE__ */ rS(), u = /* @__PURE__ */ Zx(), f = /* @__PURE__ */ eS(), l = /* @__PURE__ */ Ft(), d = /* @__PURE__ */ Fn();
  return zc = function(h, m, p, v) {
    var g = "stackTraceLimit", y = v ? 2 : 1, x = h.split("."), b = x[x.length - 1], E = t.apply(null, x);
    if (E) {
      var O = E.prototype;
      if (!d && e(O, "cause") && delete O.cause, !p) return E;
      var _ = t("Error"), I = m(function(P, $) {
        var S = c(v ? $ : P, void 0), A = v ? new E(P) : new E();
        return S !== void 0 && r(A, "message", S), f(A, I, A.stack, 2), this && n(O, this) && a(A, this, I), arguments.length > y && u(A, arguments[y]), A;
      });
      if (I.prototype = O, b !== "Error" ? s ? s(I, _) : i(I, _, { name: !0 }) : l && g in E && (o(I, E, g), o(I, E, "prepareStackTrace")), i(I, E), !d) try {
        O.name !== b && r(O, "name", b), O.constructor = I;
      } catch {
      }
      return I;
    }
  }, zc;
}
var by;
function KA() {
  if (by) return my;
  by = 1;
  var t = /* @__PURE__ */ to(), e = /* @__PURE__ */ Xe(), r = /* @__PURE__ */ Hh(), n = /* @__PURE__ */ iS(), s = "WebAssembly", i = e[s], o = new Error("e", { cause: 7 }).cause !== 7, a = function(u, f) {
    var l = {};
    l[u] = n(u, f, o), t({ global: !0, constructor: !0, arity: 1, forced: o }, l);
  }, c = function(u, f) {
    if (i && i[u]) {
      var l = {};
      l[u] = n(s + "." + u, f, o), t({ target: s, stat: !0, constructor: !0, arity: 1, forced: o }, l);
    }
  };
  return a("Error", function(u) {
    return function(l) {
      return r(u, this, arguments);
    };
  }), a("EvalError", function(u) {
    return function(l) {
      return r(u, this, arguments);
    };
  }), a("RangeError", function(u) {
    return function(l) {
      return r(u, this, arguments);
    };
  }), a("ReferenceError", function(u) {
    return function(l) {
      return r(u, this, arguments);
    };
  }), a("SyntaxError", function(u) {
    return function(l) {
      return r(u, this, arguments);
    };
  }), a("TypeError", function(u) {
    return function(l) {
      return r(u, this, arguments);
    };
  }), a("URIError", function(u) {
    return function(l) {
      return r(u, this, arguments);
    };
  }), c("CompileError", function(u) {
    return function(l) {
      return r(u, this, arguments);
    };
  }), c("LinkError", function(u) {
    return function(l) {
      return r(u, this, arguments);
    };
  }), c("RuntimeError", function(u) {
    return function(l) {
      return r(u, this, arguments);
    };
  }), my;
}
var xy = {}, Sy;
function zA() {
  if (Sy) return xy;
  Sy = 1;
  var t = /* @__PURE__ */ to(), e = /* @__PURE__ */ Mn(), r = /* @__PURE__ */ Hh(), n = /* @__PURE__ */ vt(), s = /* @__PURE__ */ iS(), i = "AggregateError", o = e(i), a = !n(function() {
    return o([1]).errors[0] !== 1;
  }) && n(function() {
    return o([1], i, { cause: 7 }).cause !== 7;
  });
  return t({ global: !0, constructor: !0, arity: 2, forced: a }, {
    AggregateError: s(i, function(c) {
      return function(f, l) {
        return r(c, this, arguments);
      };
    }, a, !0)
  }), xy;
}
var Wc, Oy;
function WA() {
  return Oy || (Oy = 1, Wc = function() {
  }), Wc;
}
var Yc, wy;
function YA() {
  if (wy) return Yc;
  wy = 1;
  var t = /* @__PURE__ */ Xe(), e = /* @__PURE__ */ Qe(), r = t.WeakMap;
  return Yc = e(r) && /native code/.test(String(r)), Yc;
}
var Xc, Ey;
function oS() {
  if (Ey) return Xc;
  Ey = 1;
  var t = /* @__PURE__ */ YA(), e = /* @__PURE__ */ Xe(), r = /* @__PURE__ */ At(), n = /* @__PURE__ */ Nt(), s = /* @__PURE__ */ jt(), i = /* @__PURE__ */ Lx(), o = /* @__PURE__ */ Xh(), a = /* @__PURE__ */ ep(), c = "Object already initialized", u = e.TypeError, f = e.WeakMap, l, d, h, m = function(y) {
    return h(y) ? d(y) : l(y, {});
  }, p = function(y) {
    return function(x) {
      var b;
      if (!r(x) || (b = d(x)).type !== y)
        throw new u("Incompatible receiver, " + y + " required");
      return b;
    };
  };
  if (t || i.state) {
    var v = i.state || (i.state = new f());
    v.get = v.get, v.has = v.has, v.set = v.set, l = function(y, x) {
      if (v.has(y)) throw new u(c);
      return x.facade = y, v.set(y, x), x;
    }, d = function(y) {
      return v.get(y) || {};
    }, h = function(y) {
      return v.has(y);
    };
  } else {
    var g = o("state");
    a[g] = !0, l = function(y, x) {
      if (s(y, g)) throw new u(c);
      return x.facade = y, n(y, g, x), x;
    }, d = function(y) {
      return s(y, g) ? y[g] : {};
    }, h = function(y) {
      return s(y, g);
    };
  }
  return Xc = {
    set: l,
    get: d,
    has: h,
    enforce: m,
    getterFor: p
  }, Xc;
}
var Qc, Ay;
function XA() {
  if (Ay) return Qc;
  Ay = 1;
  var t = /* @__PURE__ */ Ft(), e = /* @__PURE__ */ jt(), r = Function.prototype, n = t && Object.getOwnPropertyDescriptor, s = e(r, "name"), i = s && (function() {
  }).name === "something", o = s && (!t || t && n(r, "name").configurable);
  return Qc = {
    EXISTS: s,
    PROPER: i,
    CONFIGURABLE: o
  }, Qc;
}
var Zc, jy;
function aS() {
  if (jy) return Zc;
  jy = 1;
  var t = /* @__PURE__ */ Nt();
  return Zc = function(e, r, n, s) {
    return s && s.enumerable ? e[r] = n : t(e, r, n), e;
  }, Zc;
}
var eu, Py;
function cS() {
  if (Py) return eu;
  Py = 1;
  var t = /* @__PURE__ */ vt(), e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ At(), n = /* @__PURE__ */ rp(), s = /* @__PURE__ */ Qh(), i = /* @__PURE__ */ aS(), o = /* @__PURE__ */ kt(), a = /* @__PURE__ */ Fn(), c = o("iterator"), u = !1, f, l, d;
  [].keys && (d = [].keys(), "next" in d ? (l = s(s(d)), l !== Object.prototype && (f = l)) : u = !0);
  var h = !r(f) || t(function() {
    var m = {};
    return f[c].call(m) !== m;
  });
  return h ? f = {} : a && (f = n(f)), e(f[c]) || i(f, c, function() {
    return this;
  }), eu = {
    IteratorPrototype: f,
    BUGGY_SAFARI_ITERATORS: u
  }, eu;
}
var tu, Ry;
function QA() {
  if (Ry) return tu;
  Ry = 1;
  var t = /* @__PURE__ */ np(), e = /* @__PURE__ */ sp();
  return tu = t ? {}.toString : function() {
    return "[object " + e(this) + "]";
  }, tu;
}
var ru, Ty;
function op() {
  if (Ty) return ru;
  Ty = 1;
  var t = /* @__PURE__ */ np(), e = Qr().f, r = /* @__PURE__ */ Nt(), n = /* @__PURE__ */ jt(), s = /* @__PURE__ */ QA(), i = /* @__PURE__ */ kt(), o = i("toStringTag");
  return ru = function(a, c, u, f) {
    var l = u ? a : a && a.prototype;
    l && (n(l, o) || e(l, o, { configurable: !0, value: c }), f && !t && r(l, "toString", s));
  }, ru;
}
var nu, _y;
function ZA() {
  if (_y) return nu;
  _y = 1;
  var t = cS().IteratorPrototype, e = /* @__PURE__ */ rp(), r = /* @__PURE__ */ Cn(), n = /* @__PURE__ */ op(), s = /* @__PURE__ */ Zr(), i = function() {
    return this;
  };
  return nu = function(o, a, c, u) {
    var f = a + " Iterator";
    return o.prototype = e(t, { next: r(+!u, c) }), n(o, f, !1, !0), s[f] = i, o;
  }, nu;
}
var su, $y;
function uS() {
  if ($y) return su;
  $y = 1;
  var t = /* @__PURE__ */ to(), e = /* @__PURE__ */ br(), r = /* @__PURE__ */ Fn(), n = /* @__PURE__ */ XA(), s = /* @__PURE__ */ Qe(), i = /* @__PURE__ */ ZA(), o = /* @__PURE__ */ Qh(), a = /* @__PURE__ */ ro(), c = /* @__PURE__ */ op(), u = /* @__PURE__ */ Nt(), f = /* @__PURE__ */ aS(), l = /* @__PURE__ */ kt(), d = /* @__PURE__ */ Zr(), h = /* @__PURE__ */ cS(), m = n.PROPER, p = n.CONFIGURABLE, v = h.IteratorPrototype, g = h.BUGGY_SAFARI_ITERATORS, y = l("iterator"), x = "keys", b = "values", E = "entries", O = function() {
    return this;
  };
  return su = function(_, I, P, $, S, A, C) {
    i(P, I, $);
    var V = function(oe) {
      if (oe === S && M) return M;
      if (!g && oe && oe in se) return se[oe];
      switch (oe) {
        case x:
          return function() {
            return new P(this, oe);
          };
        case b:
          return function() {
            return new P(this, oe);
          };
        case E:
          return function() {
            return new P(this, oe);
          };
      }
      return function() {
        return new P(this);
      };
    }, q = I + " Iterator", Z = !1, se = _.prototype, B = se[y] || se["@@iterator"] || S && se[S], M = !g && B || V(S), G = I === "Array" && se.entries || B, H, U, ie;
    if (G && (H = o(G.call(new _())), H !== Object.prototype && H.next && (!r && o(H) !== v && (a ? a(H, v) : s(H[y]) || f(H, y, O)), c(H, q, !0, !0), r && (d[q] = O))), m && S === b && B && B.name !== b && (!r && p ? u(se, "name", b) : (Z = !0, M = function() {
      return e(B, this);
    })), S)
      if (U = {
        values: V(b),
        keys: A ? M : V(x),
        entries: V(E)
      }, C) for (ie in U)
        (g || Z || !(ie in se)) && f(se, ie, U[ie]);
      else t({ target: I, proto: !0, forced: g || Z }, U);
    return (!r || C) && se[y] !== M && f(se, y, M, { name: S }), d[I] = M, U;
  }, su;
}
var iu, Cy;
function lS() {
  return Cy || (Cy = 1, iu = function(t, e) {
    return { value: t, done: e };
  }), iu;
}
var ou, Iy;
function fS() {
  if (Iy) return ou;
  Iy = 1;
  var t = /* @__PURE__ */ In(), e = /* @__PURE__ */ WA(), r = /* @__PURE__ */ Zr(), n = /* @__PURE__ */ oS(), s = Qr().f, i = /* @__PURE__ */ uS(), o = /* @__PURE__ */ lS(), a = /* @__PURE__ */ Fn(), c = /* @__PURE__ */ Ft(), u = "Array Iterator", f = n.set, l = n.getterFor(u);
  ou = i(Array, "Array", function(h, m) {
    f(this, {
      type: u,
      target: t(h),
      // target
      index: 0,
      // next index
      kind: m
      // kind
    });
  }, function() {
    var h = l(this), m = h.target, p = h.index++;
    if (!m || p >= m.length)
      return h.target = null, o(void 0, !0);
    switch (h.kind) {
      case "keys":
        return o(p, !1);
      case "values":
        return o(m[p], !1);
    }
    return o([p, m[p]], !1);
  }, "values");
  var d = r.Arguments = r.Array;
  if (e("keys"), e("values"), e("entries"), !a && c && d.name !== "values") try {
    s(d, "name", { value: "values" });
  } catch {
  }
  return ou;
}
var My = {}, au, Fy;
function ej() {
  if (Fy) return au;
  Fy = 1;
  var t = /* @__PURE__ */ gt(), e = /* @__PURE__ */ Zh(), r = /* @__PURE__ */ ip(), n = /* @__PURE__ */ Qi(), s = t("".charAt), i = t("".charCodeAt), o = t("".slice), a = function(c) {
    return function(u, f) {
      var l = r(n(u)), d = e(f), h = l.length, m, p;
      return d < 0 || d >= h ? c ? "" : void 0 : (m = i(l, d), m < 55296 || m > 56319 || d + 1 === h || (p = i(l, d + 1)) < 56320 || p > 57343 ? c ? s(l, d) : m : c ? o(l, d, d + 2) : (m - 55296 << 10) + (p - 56320) + 65536);
    };
  };
  return au = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: a(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: a(!0)
  }, au;
}
var ky;
function tj() {
  if (ky) return My;
  ky = 1;
  var t = ej().charAt, e = /* @__PURE__ */ ip(), r = /* @__PURE__ */ oS(), n = /* @__PURE__ */ uS(), s = /* @__PURE__ */ lS(), i = "String Iterator", o = r.set, a = r.getterFor(i);
  return n(String, "String", function(c) {
    o(this, {
      type: i,
      string: e(c),
      index: 0
    });
  }, function() {
    var u = a(this), f = u.string, l = u.index, d;
    return l >= f.length ? s(void 0, !0) : (d = t(f, l), u.index += d.length, s(d, !1));
  }), My;
}
var cu, Ny;
function rj() {
  if (Ny) return cu;
  Ny = 1, KA(), nS(), zA(), fS(), tj();
  var t = /* @__PURE__ */ zh();
  return cu = t.AggregateError, cu;
}
var Dy = {}, uu, qy;
function nj() {
  return qy || (qy = 1, uu = {
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
  }), uu;
}
var Ly;
function sj() {
  if (Ly) return Dy;
  Ly = 1, fS();
  var t = /* @__PURE__ */ nj(), e = /* @__PURE__ */ Xe(), r = /* @__PURE__ */ op(), n = /* @__PURE__ */ Zr();
  for (var s in t)
    r(e[s], s), n[s] = n.Array;
  return Dy;
}
var lu, Vy;
function ij() {
  if (Vy) return lu;
  Vy = 1, sS();
  var t = /* @__PURE__ */ rj();
  return sj(), lu = t, lu;
}
var fu, By;
function oj() {
  if (By) return fu;
  By = 1;
  var t = /* @__PURE__ */ ij();
  return fu = t, fu;
}
var hu, Uy;
function aj() {
  if (Uy) return hu;
  Uy = 1, sS();
  var t = /* @__PURE__ */ oj();
  return hu = t, hu;
}
var pu, Jy;
function cj() {
  return Jy || (Jy = 1, pu = /* @__PURE__ */ aj()), pu;
}
var du, Hy;
function uj() {
  return Hy || (Hy = 1, du = /* @__PURE__ */ cj()), du;
}
var lj = uj();
const fj = /* @__PURE__ */ zi(lj);
class hj extends fj {
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
class ye extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(hj, e);
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
class Ot extends ye {
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
class ee extends ye {
}
class mu extends ee {
}
var ap = function() {
  return !1;
}, Dt = function() {
  return !0;
};
function me(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function fe(t) {
  return function e(r) {
    return arguments.length === 0 || me(r) ? e : t.apply(this, arguments);
  };
}
function W(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return me(r) ? e : fe(function(s) {
          return t(r, s);
        });
      default:
        return me(r) && me(n) ? e : me(r) ? fe(function(s) {
          return t(s, n);
        }) : me(n) ? fe(function(s) {
          return t(r, s);
        }) : t(r, n);
    }
  };
}
function pj(t, e) {
  t = t || [], e = e || [];
  var r, n = t.length, s = e.length, i = [];
  for (r = 0; r < n; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < s; )
    i[i.length] = e[r], r += 1;
  return i;
}
function no(t, e) {
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
      return function(r, n, s, i, o, a, c, u) {
        return e.apply(this, arguments);
      };
    case 9:
      return function(r, n, s, i, o, a, c, u, f) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(r, n, s, i, o, a, c, u, f, l) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function cp(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!me(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, me(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : no(Math.max(0, i), cp(t, n, r));
  };
}
var Se = /* @__PURE__ */ W(function(e, r) {
  return e === 1 ? fe(r) : no(e, cp(e, [], r));
});
function Be(t) {
  return function e(r, n, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return me(r) ? e : W(function(i, o) {
          return t(r, i, o);
        });
      case 2:
        return me(r) && me(n) ? e : me(r) ? W(function(i, o) {
          return t(i, n, o);
        }) : me(n) ? W(function(i, o) {
          return t(r, i, o);
        }) : fe(function(i) {
          return t(r, n, i);
        });
      default:
        return me(r) && me(n) && me(s) ? e : me(r) && me(n) ? W(function(i, o) {
          return t(i, o, s);
        }) : me(r) && me(s) ? W(function(i, o) {
          return t(i, n, o);
        }) : me(n) && me(s) ? W(function(i, o) {
          return t(r, i, o);
        }) : me(r) ? fe(function(i) {
          return t(i, n, s);
        }) : me(n) ? fe(function(i) {
          return t(r, i, s);
        }) : me(s) ? fe(function(i) {
          return t(r, n, i);
        }) : t(r, n, s);
    }
  };
}
const Sr = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function dj(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function Xt(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!Sr(n)) {
      for (var s = 0; s < t.length; ) {
        if (typeof n[t[s]] == "function")
          return n[t[s]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        s += 1;
      }
      if (dj(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function so(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const Ye = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
var mj = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = so(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
}();
function yj(t) {
  return function(e) {
    return new mj(t, e);
  };
}
var up = /* @__PURE__ */ W(/* @__PURE__ */ Xt(["all"], yj, function(e, r) {
  for (var n = 0; n < r.length; ) {
    if (!e(r[n]))
      return !1;
    n += 1;
  }
  return !0;
}));
function Gy(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function zs(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function vj(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function st(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function gj(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const vn = typeof Object.is == "function" ? Object.is : gj;
var Ky = Object.prototype.toString, hS = /* @__PURE__ */ function() {
  return Ky.call(arguments) === "[object Arguments]" ? function(e) {
    return Ky.call(e) === "[object Arguments]";
  } : function(e) {
    return st("callee", e);
  };
}(), bj = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), zy = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Wy = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), xj = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, mr = /* @__PURE__ */ fe(typeof Object.keys == "function" && !Wy ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, s = [], i = Wy && hS(e);
  for (r in e)
    st(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (bj)
    for (n = zy.length - 1; n >= 0; )
      r = zy[n], st(r, e) && !xj(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), dt = /* @__PURE__ */ fe(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function Yy(t, e, r, n) {
  var s = Gy(t), i = Gy(e);
  function o(a, c) {
    return lp(a, c, r.slice(), n.slice());
  }
  return !zs(function(a, c) {
    return !zs(o, c, a);
  }, i, s);
}
function lp(t, e, r, n) {
  if (vn(t, e))
    return !0;
  var s = dt(t);
  if (s !== dt(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (s) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && vj(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && vn(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!vn(t.valueOf(), e.valueOf()))
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
      return t.size !== e.size ? !1 : Yy(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : Yy(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var o = mr(t);
  if (o.length !== mr(e).length)
    return !1;
  var a = r.concat([t]), c = n.concat([e]);
  for (i = o.length - 1; i >= 0; ) {
    var u = o[i];
    if (!(st(u, e) && lp(e[u], t[u], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Qt = /* @__PURE__ */ W(function(e, r) {
  return lp(e, r, [], []);
});
function Sj(t, e, r) {
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
      // all these types can utilise Set
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
    if (Qt(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function Ws(t, e) {
  return Sj(e, t, 0) >= 0;
}
function Ms(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function yu(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var pn = function(e) {
  return (e < 10 ? "0" : "") + e;
}, Oj = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + pn(e.getUTCMonth() + 1) + "-" + pn(e.getUTCDate()) + "T" + pn(e.getUTCHours()) + ":" + pn(e.getUTCMinutes()) + ":" + pn(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function pS(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function kn(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function wj(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function Ys(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var Ej = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function Aj(t) {
  return function(e) {
    return new Ej(t, e);
  };
}
var jj = /* @__PURE__ */ W(/* @__PURE__ */ Xt(["fantasy-land/filter", "filter"], Aj, function(t, e) {
  return Ys(e) ? kn(function(r, n) {
    return t(e[n]) && (r[n] = e[n]), r;
  }, {}, mr(e)) : (
    // else
    wj(t, e)
  );
})), Pj = /* @__PURE__ */ W(function(e, r) {
  return jj(pS(e), r);
});
function dS(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return Ws(o, a) ? "<Circular>" : dS(o, a);
  }, n = function(i, o) {
    return Ms(function(a) {
      return yu(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + Ms(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + Ms(r, t).concat(n(t, Pj(function(i) {
        return /^\d+$/.test(i);
      }, mr(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : yu(Oj(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : yu(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var s = t.toString();
        if (s !== "[object Object]")
          return s;
      }
      return "{" + n(t, mr(t)).join(", ") + "}";
  }
}
var Jr = /* @__PURE__ */ fe(function(e) {
  return dS(e, []);
}), mS = /* @__PURE__ */ W(function(e, r) {
  if (e === r)
    return r;
  function n(c, u) {
    if (c > u != u > c)
      return u > c ? u : c;
  }
  var s = n(e, r);
  if (s !== void 0)
    return s;
  var i = n(typeof e, typeof r);
  if (i !== void 0)
    return i === typeof e ? e : r;
  var o = Jr(e), a = n(o, Jr(r));
  return a !== void 0 && a === o ? e : r;
}), Rj = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), Tj = function(e) {
  return function(r) {
    return new Rj(e, r);
  };
}, io = /* @__PURE__ */ W(/* @__PURE__ */ Xt(["fantasy-land/map", "map"], Tj, function(e, r) {
  switch (Object.prototype.toString.call(r)) {
    case "[object Function]":
      return Se(r.length, function() {
        return e.call(this, r.apply(this, arguments));
      });
    case "[object Object]":
      return kn(function(n, s) {
        return n[s] = e(r[s]), n;
      }, {}, mr(r));
    default:
      return Ms(e, r);
  }
}));
const en = Number.isInteger || function(e) {
  return e << 0 === e;
};
function fp(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function oo(t, e) {
  var r = t < 0 ? e.length + t : t;
  return fp(e) ? e.charAt(r) : e[r];
}
var Nn = /* @__PURE__ */ W(function(e, r) {
  if (r != null)
    return en(e) ? oo(e, r) : r[e];
}), yS = /* @__PURE__ */ W(function(e, r) {
  return io(Nn(e), r);
}), _j = /* @__PURE__ */ fe(function(e) {
  return Sr(e) ? !0 : !e || typeof e != "object" || fp(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), Xy = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function vS(t, e, r) {
  return function(s, i, o) {
    if (_j(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[Xy] != null)
      return r(s, i, o[Xy]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function $j(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var gS = /* @__PURE__ */ W(function(e, r) {
  return no(e.length, function() {
    return e.apply(r, arguments);
  });
});
function Cj(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function Ij(t, e, r, n) {
  return t["@@transducer/result"](r[n](gS(t["@@transducer/step"], t), e));
}
var hp = /* @__PURE__ */ vS($j, Ij, Cj), Mj = /* @__PURE__ */ function() {
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
function bS(t) {
  return new Mj(t);
}
var tn = /* @__PURE__ */ Be(function(t, e, r) {
  return hp(typeof t == "function" ? bS(t) : t, e, r);
}), Fj = /* @__PURE__ */ fe(function(e) {
  return Se(tn(mS, 0, yS("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (!e[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
}), K = /* @__PURE__ */ fe(function(e) {
  return function() {
    return e;
  };
}), kj = /* @__PURE__ */ W(function(e, r) {
  return e && r;
}), Nj = /* @__PURE__ */ fe(function(e) {
  return Se(tn(mS, 0, yS("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function Dj(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function qj(t, e, r, n) {
  return r[n](t, e);
}
var Lj = /* @__PURE__ */ vS(kn, qj, Dj), Vj = /* @__PURE__ */ W(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : Lj(function(n, s) {
    return pj(n, io(s, r));
  }, [], e);
}), Bj = /* @__PURE__ */ W(function(e, r) {
  return e.apply(this, r);
}), pp = /* @__PURE__ */ fe(function(e) {
  return Se(e.length, e);
});
function Uj(t, e, r) {
  if (en(t) && Sr(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var Xs = /* @__PURE__ */ fe(function(e) {
  return e == null;
}), k = /* @__PURE__ */ Be(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !Xs(n) && st(s, n) && typeof n[s] == "object" ? n[s] : en(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return Uj(s, r, n);
}), Jj = /* @__PURE__ */ Be(function(e, r, n) {
  return k([e], r, n);
});
function dp(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var Hj = /* @__PURE__ */ W(function(e, r) {
  var n = Se(e, r);
  return Se(e, function() {
    return kn(Vj, io(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), mp = /* @__PURE__ */ fe(function(e) {
  return Hj(e.length, e);
}), Dn = /* @__PURE__ */ W(function(e, r) {
  return dp(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : mp(kj)(e, r);
});
function xS(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function SS(t, e, r) {
  if (r || (r = new Kj()), Gj(t))
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
  switch (dt(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n(Array(t.length));
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return xS(t);
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
function Gj(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var Kj = /* @__PURE__ */ function() {
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
}(), zj = /* @__PURE__ */ fe(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), Wj = /* @__PURE__ */ fe(function(e) {
  return !e;
}), qn = /* @__PURE__ */ mp(Wj);
function Yj(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function yp(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return Sr(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Ln = /* @__PURE__ */ Be(/* @__PURE__ */ yp("slice", function(e, r, n) {
  return Array.prototype.slice.call(n, e, r);
})), Xj = /* @__PURE__ */ fe(/* @__PURE__ */ yp("tail", /* @__PURE__ */ Ln(1, 1 / 0)));
function De() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return no(arguments[0].length, tn(Yj, arguments[0], Xj(arguments)));
}
var Qj = /* @__PURE__ */ fe(function(t) {
  return oo(0, t);
});
function Zj(t) {
  return t;
}
var OS = /* @__PURE__ */ fe(Zj), eP = /* @__PURE__ */ function() {
  function t(e, r, n, s) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = s, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (st(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, SS(this.valueAcc)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function tP(t, e, r) {
  return function(n) {
    return new eP(t, e, r, n);
  };
}
var rP = /* @__PURE__ */ cp(4, [], /* @__PURE__ */ Xt([], tP, function(e, r, n, s) {
  var i = bS(function(o, a) {
    var c = n(a), u = e(st(c, o) ? o[c] : SS(r), a);
    return u && u["@@transducer/reduced"] ? so(o) : (o[c] = u, o);
  });
  return hp(i, {}, s);
})), Hr = /* @__PURE__ */ W(function(e, r) {
  return r == null || r !== r ? e : r;
}), nP = /* @__PURE__ */ function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !Qy(e, !0, this);
  }, t.prototype.has = function(e) {
    return Qy(e, !1, this);
  }, t;
}();
function Qy(t, e, r) {
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
      return r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? Ws(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
    case "undefined":
      return r._items[n] ? !0 : (e && (r._items[n] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    /* falls through */
    default:
      return n = Object.prototype.toString.call(t), n in r._items ? Ws(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
  }
}
var sP = /* @__PURE__ */ W(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new nP(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), iP = /* @__PURE__ */ Be(function(e, r, n) {
  var s = Array.prototype.slice.call(n, 0);
  return s.splice(e, r), s;
});
function oP(t, e) {
  if (e == null)
    return e;
  if (en(t) && Sr(e))
    return iP(t, 1, e);
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return delete r[t], r;
}
function aP(t, e) {
  if (en(t) && Sr(e))
    return [].concat(e);
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return r;
}
var We = /* @__PURE__ */ W(function t(e, r) {
  if (r == null)
    return r;
  switch (e.length) {
    case 0:
      return r;
    case 1:
      return oP(e[0], r);
    default:
      var n = e[0], s = Array.prototype.slice.call(e, 1);
      return r[n] == null ? aP(n, r) : Jj(n, t(s, r[n]), r);
  }
}), cP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? so(n) : n;
  }, t;
}();
function uP(t) {
  return function(e) {
    return new cP(t, e);
  };
}
var lP = /* @__PURE__ */ W(/* @__PURE__ */ Xt(["take"], uP, function(e, r) {
  return Ln(0, e < 0 ? 1 / 0 : e, r);
}));
function fP(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return Ln(0, r + 1, e);
}
var hP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = hp(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
}();
function pP(t) {
  return function(e) {
    return new hP(t, e);
  };
}
var dP = /* @__PURE__ */ W(/* @__PURE__ */ Xt([], pP, fP)), ao = /* @__PURE__ */ fe(function(t) {
  return oo(-1, t);
}), mP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    if (this.f) {
      if (this.f(r))
        return e;
      this.f = null;
    }
    return this.xf["@@transducer/step"](e, r);
  }, t;
}();
function yP(t) {
  return function(e) {
    return new mP(t, e);
  };
}
var vP = /* @__PURE__ */ W(/* @__PURE__ */ Xt(["dropWhile"], yP, function(e, r) {
  for (var n = 0, s = r.length; n < s && e(r[n]); )
    n += 1;
  return Ln(n, 1 / 0, r);
})), gP = /* @__PURE__ */ W(function(e, r) {
  return e || r;
}), bP = /* @__PURE__ */ W(function(e, r) {
  return dp(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : mp(gP)(e, r);
});
function xP(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var SP = /* @__PURE__ */ fe(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : Sr(e) ? [] : fp(e) ? "" : Ys(e) ? {} : hS(e) ? /* @__PURE__ */ function() {
    return arguments;
  }() : xP(e) ? e.constructor.from("") : void 0;
}), OP = /* @__PURE__ */ fe(function(e) {
  return Se(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), wP = /* @__PURE__ */ W(/* @__PURE__ */ yp("groupBy", /* @__PURE__ */ rP(function(t, e) {
  return t.push(e), t;
}, []))), EP = /* @__PURE__ */ W(function(e, r) {
  if (e.length === 0 || Xs(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!Xs(n) && st(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), gn = /* @__PURE__ */ W(function(e, r) {
  return EP([e], r);
}), Zt = function(t, e) {
  switch (arguments.length) {
    case 0:
      return Zt;
    case 1:
      return /* @__PURE__ */ function() {
        return function r(n) {
          switch (arguments.length) {
            case 0:
              return r;
            default:
              return vn(t, n);
          }
        };
      }();
    default:
      return vn(t, e);
  }
}, vp = /* @__PURE__ */ Be(function(e, r, n) {
  return Se(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), AP = /* @__PURE__ */ W(Ws), jP = /* @__PURE__ */ Ln(0, -1), gp = /* @__PURE__ */ W(function(e, r) {
  return Se(e + 1, function() {
    var n = arguments[e];
    if (n != null && dp(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(Jr(n) + ' does not have a method named "' + r + '"');
  });
}), Vn = /* @__PURE__ */ fe(function(e) {
  return e != null && Qt(e, SP(e));
}), wS = /* @__PURE__ */ fe(function(e) {
  return !Vn(e);
}), ES = /* @__PURE__ */ gp(1, "join");
function Zy(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var PP = /* @__PURE__ */ W(function(e, r) {
  return function(n) {
    return function(s) {
      return io(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
function bp(t, e) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    var s = t[n];
    en(s) ? r = oo(s, r) : r = r[s];
  }
  return r;
}
var RP = /* @__PURE__ */ W(function(e, r) {
  return kn(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, mr(r));
}), TP = /* @__PURE__ */ Be(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    st(i, r) && (s[i] = st(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    st(i, n) && !st(i, s) && (s[i] = n[i]);
  return s;
}), _P = /* @__PURE__ */ Be(function t(e, r, n) {
  return TP(function(s, i, o) {
    return Ys(i) && Ys(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), co = /* @__PURE__ */ W(function(e, r) {
  return _P(function(n, s, i) {
    return i;
  }, e, r);
}), $P = /* @__PURE__ */ W(function(e, r) {
  return up(pS(e), r);
}), AS = function(t) {
  return {
    value: t,
    map: function(e) {
      return AS(e(t));
    }
  };
}, CP = /* @__PURE__ */ Be(function(e, r, n) {
  return e(function(s) {
    return AS(r(s));
  })(n).value;
}), Te = /* @__PURE__ */ W(bp), jS = /* @__PURE__ */ Be(function(e, r, n) {
  return Hr(e, bp(r, n));
}), uo = /* @__PURE__ */ Be(function(e, r, n) {
  return e(bp(r, n));
}), PS = /* @__PURE__ */ W(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), RS = /* @__PURE__ */ Be(function(e, r, n) {
  return Qt(e, Nn(r, n));
}), Qs = /* @__PURE__ */ Be(function(e, r, n) {
  return Hr(e, Nn(r, n));
}), IP = /* @__PURE__ */ Be(function(e, r, n) {
  return e(Nn(r, n));
}), MP = /* @__PURE__ */ W(function(e, r) {
  if (!(Zy(e) && Zy(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = Array(e < r ? r - e : 0), s = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < s; )
    n[i] = i + e, i += 1;
  return n;
}), FP = /* @__PURE__ */ fe(so), TS = /* @__PURE__ */ Be(function(e, r, n) {
  return n.replace(e, r);
}), kP = /* @__PURE__ */ W(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), _S = /* @__PURE__ */ gp(1, "split"), NP = /* @__PURE__ */ W(function(t, e) {
  return Qt(lP(t.length, e), t);
});
function DP(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var qP = /* @__PURE__ */ W(function(e, r) {
  if (!DP(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + Jr(e));
  return xS(e).test(r);
}), LP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    return zs(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
}();
function VP(t) {
  return function(e) {
    return new LP(t, e);
  };
}
var $S = /* @__PURE__ */ W(/* @__PURE__ */ Xt([], VP, function(t, e) {
  for (var r = 0, n = e.length, s = [], i; r < n; )
    i = e[r], zs(t, i, s) || (s[s.length] = i), r += 1;
  return s;
})), BP = /* @__PURE__ */ Be(function(e, r, n) {
  return e(n) ? r(n) : n;
}), lo = K(void 0), er = Qt(lo()), CS = qn(er), IS = Qt(null), MS = qn(IS), UP = qn(Xs), JP = Se(1, De(dt, Zt("GeneratorFunction"))), HP = Se(1, De(dt, Zt("AsyncFunction"))), Or = Nj([De(dt, Zt("Function")), JP, HP]), FS = Se(1, Or(Array.isArray) ? Array.isArray : De(dt, Zt("Array"))), GP = Dn(FS, Vn), KP = Dn(FS, wS), wr = Se(1, De(dt, Zt("String"))), zP = Qt("");
function Uf(t) {
  "@babel/helpers - typeof";
  return Uf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Uf(t);
}
var kS = function(e) {
  return Uf(e) === "object";
}, WP = Se(1, Dn(MS, bP(kS, Or))), YP = qn(WP), fo = Fj([wr, YP, wS]), XP = qn(Or), QP = Se(1, Dn(MS, kS)), ZP = De(dt, Zt("Object")), eR = De(Jr, Qt(Jr(Object))), tR = uo(Dn(Or, eR), ["constructor"]), mt = Se(1, function(t) {
  if (!QP(t) || !ZP(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return IS(e) ? !0 : tR(e);
}), rR = Se(1, De(dt, Zt("RegExp")));
function nR(t) {
  return aR(t) || oR(t) || iR(t) || sR();
}
function sR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iR(t, e) {
  if (t) {
    if (typeof t == "string") return Jf(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Jf(t, e) : void 0;
  }
}
function oR(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function aR(t) {
  if (Array.isArray(t)) return Jf(t);
}
function Jf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var cR = zj(function(t, e) {
  return t.length > e.length;
}), uR = De(kP(cR), Qj, Nn("length")), lR = pp(function(t, e, r) {
  var n = r.apply(void 0, nR(t));
  return UP(n) ? FP(n) : e;
}), fR = function(e) {
  var r = uR(e);
  return Se(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return tn(lR(s), void 0, e);
  });
}, NS = vp(KP, fR, lo), ho = OP(AP), Rn = Se(3, function(t, e, r) {
  var n = Te(t, r), s = Te(jP(t), r);
  if (!XP(n) && !GP(t)) {
    var i = gS(n, s);
    return Bj(i, e);
  }
}), hR = BP(wr, TS(/[.*+?^${}()|[\]\\-]/g, "\\$&")), pR = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, ev = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, dR = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, mR = function(e, r, n) {
  pR(e, r, n), ev(n, "str"), ev(r, "replaceValue"), dR(e);
  var s = new RegExp(rR(e) ? e : hR(e), "g");
  return TS(s, r, n);
}, yR = Se(3, mR), vR = gp(2, "replaceAll"), gR = Or(String.prototype.replaceAll) ? vR : yR, bR = pp(function(t, e) {
  return De(_S(""), dP(ho(t)), ES(""))(e);
}), DS = pp(function(t, e) {
  return De(_S(""), vP(ho(t)), ES(""))(e);
}), vu = { exports: {} }, tv;
function xR() {
  if (tv) return vu.exports;
  tv = 1;
  var t = vu.exports = {}, e, r;
  function n() {
    throw new Error("setTimeout has not been defined");
  }
  function s() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? e = setTimeout : e = n;
    } catch {
      e = n;
    }
    try {
      typeof clearTimeout == "function" ? r = clearTimeout : r = s;
    } catch {
      r = s;
    }
  })();
  function i(p) {
    if (e === setTimeout)
      return setTimeout(p, 0);
    if ((e === n || !e) && setTimeout)
      return e = setTimeout, setTimeout(p, 0);
    try {
      return e(p, 0);
    } catch {
      try {
        return e.call(null, p, 0);
      } catch {
        return e.call(this, p, 0);
      }
    }
  }
  function o(p) {
    if (r === clearTimeout)
      return clearTimeout(p);
    if ((r === s || !r) && clearTimeout)
      return r = clearTimeout, clearTimeout(p);
    try {
      return r(p);
    } catch {
      try {
        return r.call(null, p);
      } catch {
        return r.call(this, p);
      }
    }
  }
  var a = [], c = !1, u, f = -1;
  function l() {
    !c || !u || (c = !1, u.length ? a = u.concat(a) : f = -1, a.length && d());
  }
  function d() {
    if (!c) {
      var p = i(l);
      c = !0;
      for (var v = a.length; v; ) {
        for (u = a, a = []; ++f < v; )
          u && u[f].run();
        f = -1, v = a.length;
      }
      u = null, c = !1, o(p);
    }
  }
  t.nextTick = function(p) {
    var v = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var g = 1; g < arguments.length; g++)
        v[g - 1] = arguments[g];
    a.push(new h(p, v)), a.length === 1 && !c && i(d);
  };
  function h(p, v) {
    this.fun = p, this.array = v;
  }
  h.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {};
  function m() {
  }
  return t.on = m, t.addListener = m, t.once = m, t.off = m, t.removeListener = m, t.removeAllListeners = m, t.emit = m, t.prependListener = m, t.prependOnceListener = m, t.listeners = function(p) {
    return [];
  }, t.binding = function(p) {
    throw new Error("process.binding is not supported");
  }, t.cwd = function() {
    return "/";
  }, t.chdir = function(p) {
    throw new Error("process.chdir is not supported");
  }, t.umask = function() {
    return 0;
  }, vu.exports;
}
var SR = xR();
const Zs = /* @__PURE__ */ zi(SR), xp = () => uo(qP(/^win/), ["platform"], Zs), po = (t) => {
  try {
    const e = new URL(t);
    return bR(":", e.protocol);
  } catch {
    return;
  }
}, OR = De(po, CS), qS = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, Sp = (t) => {
  if (Zs.browser)
    return !1;
  const e = po(t);
  return er(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, mo = (t) => {
  const e = po(t);
  return e === "http" || e === "https";
}, wR = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, Op = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Qs(!1, "keepFileProtocol", e), s = Qs(xp, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = gR("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, LS = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  xp() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < e.length; n += 2)
    r = r.replace(e[n], e[n + 1]);
  return r;
}, wp = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, he = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, ei = () => {
  if (Zs.browser)
    return he(globalThis.location.href);
  const t = Zs.cwd(), e = ao(t);
  return ["/", "\\"].includes(e) ? t : t + (xp() ? "\\" : "/");
}, Re = (t, e) => {
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
}, Bn = (t) => {
  if (Sp(t))
    return LS(Op(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, lt = (t) => Sp(t) ? Op(t) : decodeURI(t), ER = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: ei,
  fromFileSystemPath: LS,
  getExtension: qS,
  getHash: wp,
  getProtocol: po,
  hasProtocol: OR,
  isFileSystemPath: Sp,
  isHttpUrl: mo,
  isURI: wR,
  resolve: Re,
  sanitize: Bn,
  stripHash: he,
  toFileSystemPath: Op,
  unsanitize: lt
}, Symbol.toStringTag, { value: "Module" }));
let Tn = class {
  constructor({
    uri: e,
    mediaType: r = "text/plain",
    data: n,
    parseResult: s
  }) {
    j(this, "uri");
    j(this, "mediaType");
    j(this, "data");
    j(this, "parseResult");
    this.uri = e, this.mediaType = r, this.data = n, this.parseResult = s;
  }
  get extension() {
    return wr(this.uri) ? qS(this.uri) : "";
  }
  toString() {
    return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(dt(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
  }
};
class Gr {
  constructor({
    refs: e = [],
    circular: r = !1
  } = {}) {
    j(this, "rootRef");
    j(this, "refs");
    j(this, "circular");
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
    const r = wr(e) ? e : e.uri;
    return CS(this.find((n) => n.uri === r));
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
const VS = {
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
    circularReplacer: OS,
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
}, AR = PP(Te(["resolve", "baseURI"]), k(["resolve", "baseURI"])), jR = (t) => zP(t) ? ei() : t, BS = (t, e) => {
  const r = co(t, e);
  return CP(AR, jR, r);
};
class PR extends ye {
  constructor(r, n) {
    super(r, {
      cause: n.cause
    });
    j(this, "plugin");
    this.plugin = n.plugin;
  }
}
const Ep = async (t, e, r) => {
  const n = await Promise.all(r.map(Rn([t], e)));
  return r.filter((s, i) => n[i]);
}, Ap = async (t, e, r) => {
  let n;
  for (const s of r)
    try {
      const i = await s[t].call(s, ...e);
      return {
        plugin: s,
        result: i
      };
    } catch (i) {
      n = new PR("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class Hf extends ye {
}
class jp extends ye {
}
class US extends jp {
}
class JS extends US {
}
const RR = async (t, e) => {
  const r = e.resolve.resolvers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.resolve.resolverOpts);
  }), n = await Ep("canRead", [t, e], r);
  if (Vn(n))
    throw new JS(t.uri);
  try {
    const {
      result: s
    } = await Ap("read", [t], n);
    return s;
  } catch (s) {
    throw new jp(`Error while reading file "${t.uri}"`, {
      cause: s
    });
  }
}, TR = async (t, e) => {
  const r = e.parse.parsers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.parse.parserOpts);
  }), n = await Ep("canParse", [t, e], r);
  if (Vn(n))
    throw new JS(t.uri);
  try {
    const {
      plugin: s,
      result: i
    } = await Ap("parse", [t, e], n);
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new Hf(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new Hf(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, _R = async (t, e) => {
  const r = new Tn({
    uri: Bn(he(t)),
    mediaType: e.parse.mediaType
  }), n = await RR(r, e);
  return TR(new Tn({
    ...r,
    data: n
  }), e);
};
var be = {}, gu, rv;
function $R() {
  if (rv) return gu;
  rv = 1;
  function t(e) {
    return e === null;
  }
  return gu = t, gu;
}
var bu, nv;
function HS() {
  if (nv) return bu;
  nv = 1;
  var t = typeof Cr == "object" && Cr && Cr.Object === Object && Cr;
  return bu = t, bu;
}
var xu, sv;
function qt() {
  if (sv) return xu;
  sv = 1;
  var t = HS(), e = typeof self == "object" && self && self.Object === Object && self, r = t || e || Function("return this")();
  return xu = r, xu;
}
var Su, iv;
function Pp() {
  if (iv) return Su;
  iv = 1;
  var t = qt(), e = t.Symbol;
  return Su = e, Su;
}
var Ou, ov;
function CR() {
  if (ov) return Ou;
  ov = 1;
  var t = Pp(), e = Object.prototype, r = e.hasOwnProperty, n = e.toString, s = t ? t.toStringTag : void 0;
  function i(o) {
    var a = r.call(o, s), c = o[s];
    try {
      o[s] = void 0;
      var u = !0;
    } catch {
    }
    var f = n.call(o);
    return u && (a ? o[s] = c : delete o[s]), f;
  }
  return Ou = i, Ou;
}
var wu, av;
function IR() {
  if (av) return wu;
  av = 1;
  var t = Object.prototype, e = t.toString;
  function r(n) {
    return e.call(n);
  }
  return wu = r, wu;
}
var Eu, cv;
function Er() {
  if (cv) return Eu;
  cv = 1;
  var t = Pp(), e = CR(), r = IR(), n = "[object Null]", s = "[object Undefined]", i = t ? t.toStringTag : void 0;
  function o(a) {
    return a == null ? a === void 0 ? s : n : i && i in Object(a) ? e(a) : r(a);
  }
  return Eu = o, Eu;
}
var Au, uv;
function yo() {
  if (uv) return Au;
  uv = 1;
  var t = Array.isArray;
  return Au = t, Au;
}
var ju, lv;
function Ar() {
  if (lv) return ju;
  lv = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return ju = t, ju;
}
var Pu, fv;
function MR() {
  if (fv) return Pu;
  fv = 1;
  var t = Er(), e = yo(), r = Ar(), n = "[object String]";
  function s(i) {
    return typeof i == "string" || !e(i) && r(i) && t(i) == n;
  }
  return Pu = s, Pu;
}
var Ru, hv;
function FR() {
  if (hv) return Ru;
  hv = 1;
  var t = Er(), e = Ar(), r = "[object Number]";
  function n(s) {
    return typeof s == "number" || e(s) && t(s) == r;
  }
  return Ru = n, Ru;
}
var Tu, pv;
function kR() {
  if (pv) return Tu;
  pv = 1;
  var t = Er(), e = Ar(), r = "[object Boolean]";
  function n(s) {
    return s === !0 || s === !1 || e(s) && t(s) == r;
  }
  return Tu = n, Tu;
}
var _u, dv;
function vo() {
  if (dv) return _u;
  dv = 1;
  function t(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  return _u = t, _u;
}
var $u, mv;
function Rp() {
  if (mv) return $u;
  mv = 1;
  class t {
    constructor(r) {
      this.namespace = r || new this.Namespace();
    }
    /**
     * @param {Element} element
     * @returns {object}
     */
    serialise(r) {
      if (!(r instanceof this.namespace.elements.Element))
        throw new TypeError(`Given element \`${r}\` is not an Element instance`);
      const n = {
        element: r.element
      };
      r._meta && r._meta.length > 0 && (n.meta = this.serialiseObject(r.meta)), r._attributes && r._attributes.length > 0 && (n.attributes = this.serialiseObject(r.attributes));
      const s = this.serialiseContent(r.content);
      return s !== void 0 && (n.content = s), n;
    }
    /**
     * @param {object} value
     * @returns {Element}
     */
    deserialise(r) {
      if (!r.element)
        throw new Error("Given value is not an object containing an element name");
      const n = this.namespace.getElementClass(r.element), s = new n();
      s.element !== r.element && (s.element = r.element), r.meta && this.deserialiseObject(r.meta, s.meta), r.attributes && this.deserialiseObject(r.attributes, s.attributes);
      const i = this.deserialiseContent(r.content);
      return (i !== void 0 || s.content === null) && (s.content = i), s;
    }
    // Private API
    serialiseContent(r) {
      if (r instanceof this.namespace.elements.Element)
        return this.serialise(r);
      if (r instanceof this.namespace.KeyValuePair) {
        const n = {
          key: this.serialise(r.key)
        };
        return r.value && (n.value = this.serialise(r.value)), n;
      }
      return r && r.map ? r.length === 0 ? void 0 : r.map(this.serialise, this) : r;
    }
    deserialiseContent(r) {
      if (r) {
        if (r.element)
          return this.deserialise(r);
        if (r.key) {
          const n = new this.namespace.KeyValuePair(this.deserialise(r.key));
          return r.value && (n.value = this.deserialise(r.value)), n;
        }
        if (r.map)
          return r.map(this.deserialise, this);
      }
      return r;
    }
    serialiseObject(r) {
      const n = {};
      if (r.forEach((s, i) => {
        s && (n[i.toValue()] = this.serialise(s));
      }), Object.keys(n).length !== 0)
        return n;
    }
    deserialiseObject(r, n) {
      Object.keys(r).forEach((s) => {
        n.set(s, this.deserialise(r[s]));
      });
    }
  }
  return $u = t, $u;
}
var Cu, yv;
function NR() {
  if (yv) return Cu;
  yv = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return Cu = t, Cu;
}
var Iu, vv;
function GS() {
  if (vv) return Iu;
  vv = 1;
  function t(e, r) {
    return e === r || e !== e && r !== r;
  }
  return Iu = t, Iu;
}
var Mu, gv;
function go() {
  if (gv) return Mu;
  gv = 1;
  var t = GS();
  function e(r, n) {
    for (var s = r.length; s--; )
      if (t(r[s][0], n))
        return s;
    return -1;
  }
  return Mu = e, Mu;
}
var Fu, bv;
function DR() {
  if (bv) return Fu;
  bv = 1;
  var t = go(), e = Array.prototype, r = e.splice;
  function n(s) {
    var i = this.__data__, o = t(i, s);
    if (o < 0)
      return !1;
    var a = i.length - 1;
    return o == a ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return Fu = n, Fu;
}
var ku, xv;
function qR() {
  if (xv) return ku;
  xv = 1;
  var t = go();
  function e(r) {
    var n = this.__data__, s = t(n, r);
    return s < 0 ? void 0 : n[s][1];
  }
  return ku = e, ku;
}
var Nu, Sv;
function LR() {
  if (Sv) return Nu;
  Sv = 1;
  var t = go();
  function e(r) {
    return t(this.__data__, r) > -1;
  }
  return Nu = e, Nu;
}
var Du, Ov;
function VR() {
  if (Ov) return Du;
  Ov = 1;
  var t = go();
  function e(r, n) {
    var s = this.__data__, i = t(s, r);
    return i < 0 ? (++this.size, s.push([r, n])) : s[i][1] = n, this;
  }
  return Du = e, Du;
}
var qu, wv;
function bo() {
  if (wv) return qu;
  wv = 1;
  var t = NR(), e = DR(), r = qR(), n = LR(), s = VR();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, qu = i, qu;
}
var Lu, Ev;
function BR() {
  if (Ev) return Lu;
  Ev = 1;
  var t = bo();
  function e() {
    this.__data__ = new t(), this.size = 0;
  }
  return Lu = e, Lu;
}
var Vu, Av;
function UR() {
  if (Av) return Vu;
  Av = 1;
  function t(e) {
    var r = this.__data__, n = r.delete(e);
    return this.size = r.size, n;
  }
  return Vu = t, Vu;
}
var Bu, jv;
function JR() {
  if (jv) return Bu;
  jv = 1;
  function t(e) {
    return this.__data__.get(e);
  }
  return Bu = t, Bu;
}
var Uu, Pv;
function HR() {
  if (Pv) return Uu;
  Pv = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Uu = t, Uu;
}
var Ju, Rv;
function KS() {
  if (Rv) return Ju;
  Rv = 1;
  var t = Er(), e = vo(), r = "[object AsyncFunction]", n = "[object Function]", s = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(a) {
    if (!e(a))
      return !1;
    var c = t(a);
    return c == n || c == s || c == r || c == i;
  }
  return Ju = o, Ju;
}
var Hu, Tv;
function GR() {
  if (Tv) return Hu;
  Tv = 1;
  var t = qt(), e = t["__core-js_shared__"];
  return Hu = e, Hu;
}
var Gu, _v;
function KR() {
  if (_v) return Gu;
  _v = 1;
  var t = GR(), e = function() {
    var n = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!e && e in n;
  }
  return Gu = r, Gu;
}
var Ku, $v;
function zS() {
  if ($v) return Ku;
  $v = 1;
  var t = Function.prototype, e = t.toString;
  function r(n) {
    if (n != null) {
      try {
        return e.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Ku = r, Ku;
}
var zu, Cv;
function zR() {
  if (Cv) return zu;
  Cv = 1;
  var t = KS(), e = KR(), r = vo(), n = zS(), s = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, a = Object.prototype, c = o.toString, u = a.hasOwnProperty, f = RegExp(
    "^" + c.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!r(d) || e(d))
      return !1;
    var h = t(d) ? f : i;
    return h.test(n(d));
  }
  return zu = l, zu;
}
var Wu, Iv;
function WR() {
  if (Iv) return Wu;
  Iv = 1;
  function t(e, r) {
    return e == null ? void 0 : e[r];
  }
  return Wu = t, Wu;
}
var Yu, Mv;
function rn() {
  if (Mv) return Yu;
  Mv = 1;
  var t = zR(), e = WR();
  function r(n, s) {
    var i = e(n, s);
    return t(i) ? i : void 0;
  }
  return Yu = r, Yu;
}
var Xu, Fv;
function Tp() {
  if (Fv) return Xu;
  Fv = 1;
  var t = rn(), e = qt(), r = t(e, "Map");
  return Xu = r, Xu;
}
var Qu, kv;
function xo() {
  if (kv) return Qu;
  kv = 1;
  var t = rn(), e = t(Object, "create");
  return Qu = e, Qu;
}
var Zu, Nv;
function YR() {
  if (Nv) return Zu;
  Nv = 1;
  var t = xo();
  function e() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return Zu = e, Zu;
}
var el, Dv;
function XR() {
  if (Dv) return el;
  Dv = 1;
  function t(e) {
    var r = this.has(e) && delete this.__data__[e];
    return this.size -= r ? 1 : 0, r;
  }
  return el = t, el;
}
var tl, qv;
function QR() {
  if (qv) return tl;
  qv = 1;
  var t = xo(), e = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function s(i) {
    var o = this.__data__;
    if (t) {
      var a = o[i];
      return a === e ? void 0 : a;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return tl = s, tl;
}
var rl, Lv;
function ZR() {
  if (Lv) return rl;
  Lv = 1;
  var t = xo(), e = Object.prototype, r = e.hasOwnProperty;
  function n(s) {
    var i = this.__data__;
    return t ? i[s] !== void 0 : r.call(i, s);
  }
  return rl = n, rl;
}
var nl, Vv;
function eT() {
  if (Vv) return nl;
  Vv = 1;
  var t = xo(), e = "__lodash_hash_undefined__";
  function r(n, s) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = t && s === void 0 ? e : s, this;
  }
  return nl = r, nl;
}
var sl, Bv;
function tT() {
  if (Bv) return sl;
  Bv = 1;
  var t = YR(), e = XR(), r = QR(), n = ZR(), s = eT();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, sl = i, sl;
}
var il, Uv;
function rT() {
  if (Uv) return il;
  Uv = 1;
  var t = tT(), e = bo(), r = Tp();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (r || e)(),
      string: new t()
    };
  }
  return il = n, il;
}
var ol, Jv;
function nT() {
  if (Jv) return ol;
  Jv = 1;
  function t(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
  }
  return ol = t, ol;
}
var al, Hv;
function So() {
  if (Hv) return al;
  Hv = 1;
  var t = nT();
  function e(r, n) {
    var s = r.__data__;
    return t(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
  }
  return al = e, al;
}
var cl, Gv;
function sT() {
  if (Gv) return cl;
  Gv = 1;
  var t = So();
  function e(r) {
    var n = t(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return cl = e, cl;
}
var ul, Kv;
function iT() {
  if (Kv) return ul;
  Kv = 1;
  var t = So();
  function e(r) {
    return t(this, r).get(r);
  }
  return ul = e, ul;
}
var ll, zv;
function oT() {
  if (zv) return ll;
  zv = 1;
  var t = So();
  function e(r) {
    return t(this, r).has(r);
  }
  return ll = e, ll;
}
var fl, Wv;
function aT() {
  if (Wv) return fl;
  Wv = 1;
  var t = So();
  function e(r, n) {
    var s = t(this, r), i = s.size;
    return s.set(r, n), this.size += s.size == i ? 0 : 1, this;
  }
  return fl = e, fl;
}
var hl, Yv;
function WS() {
  if (Yv) return hl;
  Yv = 1;
  var t = rT(), e = sT(), r = iT(), n = oT(), s = aT();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, hl = i, hl;
}
var pl, Xv;
function cT() {
  if (Xv) return pl;
  Xv = 1;
  var t = bo(), e = Tp(), r = WS(), n = 200;
  function s(i, o) {
    var a = this.__data__;
    if (a instanceof t) {
      var c = a.__data__;
      if (!e || c.length < n - 1)
        return c.push([i, o]), this.size = ++a.size, this;
      a = this.__data__ = new r(c);
    }
    return a.set(i, o), this.size = a.size, this;
  }
  return pl = s, pl;
}
var dl, Qv;
function uT() {
  if (Qv) return dl;
  Qv = 1;
  var t = bo(), e = BR(), r = UR(), n = JR(), s = HR(), i = cT();
  function o(a) {
    var c = this.__data__ = new t(a);
    this.size = c.size;
  }
  return o.prototype.clear = e, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = s, o.prototype.set = i, dl = o, dl;
}
var ml, Zv;
function lT() {
  if (Zv) return ml;
  Zv = 1;
  var t = "__lodash_hash_undefined__";
  function e(r) {
    return this.__data__.set(r, t), this;
  }
  return ml = e, ml;
}
var yl, eg;
function fT() {
  if (eg) return yl;
  eg = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return yl = t, yl;
}
var vl, tg;
function hT() {
  if (tg) return vl;
  tg = 1;
  var t = WS(), e = lT(), r = fT();
  function n(s) {
    var i = -1, o = s == null ? 0 : s.length;
    for (this.__data__ = new t(); ++i < o; )
      this.add(s[i]);
  }
  return n.prototype.add = n.prototype.push = e, n.prototype.has = r, vl = n, vl;
}
var gl, rg;
function pT() {
  if (rg) return gl;
  rg = 1;
  function t(e, r) {
    for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
      if (r(e[n], n, e))
        return !0;
    return !1;
  }
  return gl = t, gl;
}
var bl, ng;
function dT() {
  if (ng) return bl;
  ng = 1;
  function t(e, r) {
    return e.has(r);
  }
  return bl = t, bl;
}
var xl, sg;
function YS() {
  if (sg) return xl;
  sg = 1;
  var t = hT(), e = pT(), r = dT(), n = 1, s = 2;
  function i(o, a, c, u, f, l) {
    var d = c & n, h = o.length, m = a.length;
    if (h != m && !(d && m > h))
      return !1;
    var p = l.get(o), v = l.get(a);
    if (p && v)
      return p == a && v == o;
    var g = -1, y = !0, x = c & s ? new t() : void 0;
    for (l.set(o, a), l.set(a, o); ++g < h; ) {
      var b = o[g], E = a[g];
      if (u)
        var O = d ? u(E, b, g, a, o, l) : u(b, E, g, o, a, l);
      if (O !== void 0) {
        if (O)
          continue;
        y = !1;
        break;
      }
      if (x) {
        if (!e(a, function(_, I) {
          if (!r(x, I) && (b === _ || f(b, _, c, u, l)))
            return x.push(I);
        })) {
          y = !1;
          break;
        }
      } else if (!(b === E || f(b, E, c, u, l))) {
        y = !1;
        break;
      }
    }
    return l.delete(o), l.delete(a), y;
  }
  return xl = i, xl;
}
var Sl, ig;
function mT() {
  if (ig) return Sl;
  ig = 1;
  var t = qt(), e = t.Uint8Array;
  return Sl = e, Sl;
}
var Ol, og;
function yT() {
  if (og) return Ol;
  og = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(s, i) {
      n[++r] = [i, s];
    }), n;
  }
  return Ol = t, Ol;
}
var wl, ag;
function vT() {
  if (ag) return wl;
  ag = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(s) {
      n[++r] = s;
    }), n;
  }
  return wl = t, wl;
}
var El, cg;
function gT() {
  if (cg) return El;
  cg = 1;
  var t = Pp(), e = mT(), r = GS(), n = YS(), s = yT(), i = vT(), o = 1, a = 2, c = "[object Boolean]", u = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", h = "[object RegExp]", m = "[object Set]", p = "[object String]", v = "[object Symbol]", g = "[object ArrayBuffer]", y = "[object DataView]", x = t ? t.prototype : void 0, b = x ? x.valueOf : void 0;
  function E(O, _, I, P, $, S, A) {
    switch (I) {
      case y:
        if (O.byteLength != _.byteLength || O.byteOffset != _.byteOffset)
          return !1;
        O = O.buffer, _ = _.buffer;
      case g:
        return !(O.byteLength != _.byteLength || !S(new e(O), new e(_)));
      case c:
      case u:
      case d:
        return r(+O, +_);
      case f:
        return O.name == _.name && O.message == _.message;
      case h:
      case p:
        return O == _ + "";
      case l:
        var C = s;
      case m:
        var V = P & o;
        if (C || (C = i), O.size != _.size && !V)
          return !1;
        var q = A.get(O);
        if (q)
          return q == _;
        P |= a, A.set(O, _);
        var Z = n(C(O), C(_), P, $, S, A);
        return A.delete(O), Z;
      case v:
        if (b)
          return b.call(O) == b.call(_);
    }
    return !1;
  }
  return El = E, El;
}
var Al, ug;
function bT() {
  if (ug) return Al;
  ug = 1;
  function t(e, r) {
    for (var n = -1, s = r.length, i = e.length; ++n < s; )
      e[i + n] = r[n];
    return e;
  }
  return Al = t, Al;
}
var jl, lg;
function xT() {
  if (lg) return jl;
  lg = 1;
  var t = bT(), e = yo();
  function r(n, s, i) {
    var o = s(n);
    return e(n) ? o : t(o, i(n));
  }
  return jl = r, jl;
}
var Pl, fg;
function ST() {
  if (fg) return Pl;
  fg = 1;
  function t(e, r) {
    for (var n = -1, s = e == null ? 0 : e.length, i = 0, o = []; ++n < s; ) {
      var a = e[n];
      r(a, n, e) && (o[i++] = a);
    }
    return o;
  }
  return Pl = t, Pl;
}
var Rl, hg;
function OT() {
  if (hg) return Rl;
  hg = 1;
  function t() {
    return [];
  }
  return Rl = t, Rl;
}
var Tl, pg;
function wT() {
  if (pg) return Tl;
  pg = 1;
  var t = ST(), e = OT(), r = Object.prototype, n = r.propertyIsEnumerable, s = Object.getOwnPropertySymbols, i = s ? function(o) {
    return o == null ? [] : (o = Object(o), t(s(o), function(a) {
      return n.call(o, a);
    }));
  } : e;
  return Tl = i, Tl;
}
var _l, dg;
function ET() {
  if (dg) return _l;
  dg = 1;
  function t(e, r) {
    for (var n = -1, s = Array(e); ++n < e; )
      s[n] = r(n);
    return s;
  }
  return _l = t, _l;
}
var $l, mg;
function AT() {
  if (mg) return $l;
  mg = 1;
  var t = Er(), e = Ar(), r = "[object Arguments]";
  function n(s) {
    return e(s) && t(s) == r;
  }
  return $l = n, $l;
}
var Cl, yg;
function jT() {
  if (yg) return Cl;
  yg = 1;
  var t = AT(), e = Ar(), r = Object.prototype, n = r.hasOwnProperty, s = r.propertyIsEnumerable, i = t(/* @__PURE__ */ function() {
    return arguments;
  }()) ? t : function(o) {
    return e(o) && n.call(o, "callee") && !s.call(o, "callee");
  };
  return Cl = i, Cl;
}
var mn = { exports: {} }, Il, vg;
function PT() {
  if (vg) return Il;
  vg = 1;
  function t() {
    return !1;
  }
  return Il = t, Il;
}
mn.exports;
var gg;
function XS() {
  return gg || (gg = 1, function(t, e) {
    var r = qt(), n = PT(), s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, u = c || n;
    t.exports = u;
  }(mn, mn.exports)), mn.exports;
}
var Ml, bg;
function RT() {
  if (bg) return Ml;
  bg = 1;
  var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function r(n, s) {
    var i = typeof n;
    return s = s ?? t, !!s && (i == "number" || i != "symbol" && e.test(n)) && n > -1 && n % 1 == 0 && n < s;
  }
  return Ml = r, Ml;
}
var Fl, xg;
function QS() {
  if (xg) return Fl;
  xg = 1;
  var t = 9007199254740991;
  function e(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= t;
  }
  return Fl = e, Fl;
}
var kl, Sg;
function TT() {
  if (Sg) return kl;
  Sg = 1;
  var t = Er(), e = QS(), r = Ar(), n = "[object Arguments]", s = "[object Array]", i = "[object Boolean]", o = "[object Date]", a = "[object Error]", c = "[object Function]", u = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", h = "[object Set]", m = "[object String]", p = "[object WeakMap]", v = "[object ArrayBuffer]", g = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", b = "[object Int8Array]", E = "[object Int16Array]", O = "[object Int32Array]", _ = "[object Uint8Array]", I = "[object Uint8ClampedArray]", P = "[object Uint16Array]", $ = "[object Uint32Array]", S = {};
  S[y] = S[x] = S[b] = S[E] = S[O] = S[_] = S[I] = S[P] = S[$] = !0, S[n] = S[s] = S[v] = S[i] = S[g] = S[o] = S[a] = S[c] = S[u] = S[f] = S[l] = S[d] = S[h] = S[m] = S[p] = !1;
  function A(C) {
    return r(C) && e(C.length) && !!S[t(C)];
  }
  return kl = A, kl;
}
var Nl, Og;
function _T() {
  if (Og) return Nl;
  Og = 1;
  function t(e) {
    return function(r) {
      return e(r);
    };
  }
  return Nl = t, Nl;
}
var yn = { exports: {} };
yn.exports;
var wg;
function $T() {
  return wg || (wg = 1, function(t, e) {
    var r = HS(), n = e && !e.nodeType && e, s = n && !0 && t && !t.nodeType && t, i = s && s.exports === n, o = i && r.process, a = function() {
      try {
        var c = s && s.require && s.require("util").types;
        return c || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    t.exports = a;
  }(yn, yn.exports)), yn.exports;
}
var Dl, Eg;
function ZS() {
  if (Eg) return Dl;
  Eg = 1;
  var t = TT(), e = _T(), r = $T(), n = r && r.isTypedArray, s = n ? e(n) : t;
  return Dl = s, Dl;
}
var ql, Ag;
function CT() {
  if (Ag) return ql;
  Ag = 1;
  var t = ET(), e = jT(), r = yo(), n = XS(), s = RT(), i = ZS(), o = Object.prototype, a = o.hasOwnProperty;
  function c(u, f) {
    var l = r(u), d = !l && e(u), h = !l && !d && n(u), m = !l && !d && !h && i(u), p = l || d || h || m, v = p ? t(u.length, String) : [], g = v.length;
    for (var y in u)
      (f || a.call(u, y)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      h && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      m && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      s(y, g))) && v.push(y);
    return v;
  }
  return ql = c, ql;
}
var Ll, jg;
function IT() {
  if (jg) return Ll;
  jg = 1;
  var t = Object.prototype;
  function e(r) {
    var n = r && r.constructor, s = typeof n == "function" && n.prototype || t;
    return r === s;
  }
  return Ll = e, Ll;
}
var Vl, Pg;
function MT() {
  if (Pg) return Vl;
  Pg = 1;
  function t(e, r) {
    return function(n) {
      return e(r(n));
    };
  }
  return Vl = t, Vl;
}
var Bl, Rg;
function FT() {
  if (Rg) return Bl;
  Rg = 1;
  var t = MT(), e = t(Object.keys, Object);
  return Bl = e, Bl;
}
var Ul, Tg;
function kT() {
  if (Tg) return Ul;
  Tg = 1;
  var t = IT(), e = FT(), r = Object.prototype, n = r.hasOwnProperty;
  function s(i) {
    if (!t(i))
      return e(i);
    var o = [];
    for (var a in Object(i))
      n.call(i, a) && a != "constructor" && o.push(a);
    return o;
  }
  return Ul = s, Ul;
}
var Jl, _g;
function NT() {
  if (_g) return Jl;
  _g = 1;
  var t = KS(), e = QS();
  function r(n) {
    return n != null && e(n.length) && !t(n);
  }
  return Jl = r, Jl;
}
var Hl, $g;
function DT() {
  if ($g) return Hl;
  $g = 1;
  var t = CT(), e = kT(), r = NT();
  function n(s) {
    return r(s) ? t(s) : e(s);
  }
  return Hl = n, Hl;
}
var Gl, Cg;
function qT() {
  if (Cg) return Gl;
  Cg = 1;
  var t = xT(), e = wT(), r = DT();
  function n(s) {
    return t(s, r, e);
  }
  return Gl = n, Gl;
}
var Kl, Ig;
function LT() {
  if (Ig) return Kl;
  Ig = 1;
  var t = qT(), e = 1, r = Object.prototype, n = r.hasOwnProperty;
  function s(i, o, a, c, u, f) {
    var l = a & e, d = t(i), h = d.length, m = t(o), p = m.length;
    if (h != p && !l)
      return !1;
    for (var v = h; v--; ) {
      var g = d[v];
      if (!(l ? g in o : n.call(o, g)))
        return !1;
    }
    var y = f.get(i), x = f.get(o);
    if (y && x)
      return y == o && x == i;
    var b = !0;
    f.set(i, o), f.set(o, i);
    for (var E = l; ++v < h; ) {
      g = d[v];
      var O = i[g], _ = o[g];
      if (c)
        var I = l ? c(_, O, g, o, i, f) : c(O, _, g, i, o, f);
      if (!(I === void 0 ? O === _ || u(O, _, a, c, f) : I)) {
        b = !1;
        break;
      }
      E || (E = g == "constructor");
    }
    if (b && !E) {
      var P = i.constructor, $ = o.constructor;
      P != $ && "constructor" in i && "constructor" in o && !(typeof P == "function" && P instanceof P && typeof $ == "function" && $ instanceof $) && (b = !1);
    }
    return f.delete(i), f.delete(o), b;
  }
  return Kl = s, Kl;
}
var zl, Mg;
function VT() {
  if (Mg) return zl;
  Mg = 1;
  var t = rn(), e = qt(), r = t(e, "DataView");
  return zl = r, zl;
}
var Wl, Fg;
function BT() {
  if (Fg) return Wl;
  Fg = 1;
  var t = rn(), e = qt(), r = t(e, "Promise");
  return Wl = r, Wl;
}
var Yl, kg;
function UT() {
  if (kg) return Yl;
  kg = 1;
  var t = rn(), e = qt(), r = t(e, "Set");
  return Yl = r, Yl;
}
var Xl, Ng;
function JT() {
  if (Ng) return Xl;
  Ng = 1;
  var t = rn(), e = qt(), r = t(e, "WeakMap");
  return Xl = r, Xl;
}
var Ql, Dg;
function HT() {
  if (Dg) return Ql;
  Dg = 1;
  var t = VT(), e = Tp(), r = BT(), n = UT(), s = JT(), i = Er(), o = zS(), a = "[object Map]", c = "[object Object]", u = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", h = o(t), m = o(e), p = o(r), v = o(n), g = o(s), y = i;
  return (t && y(new t(new ArrayBuffer(1))) != d || e && y(new e()) != a || r && y(r.resolve()) != u || n && y(new n()) != f || s && y(new s()) != l) && (y = function(x) {
    var b = i(x), E = b == c ? x.constructor : void 0, O = E ? o(E) : "";
    if (O)
      switch (O) {
        case h:
          return d;
        case m:
          return a;
        case p:
          return u;
        case v:
          return f;
        case g:
          return l;
      }
    return b;
  }), Ql = y, Ql;
}
var Zl, qg;
function GT() {
  if (qg) return Zl;
  qg = 1;
  var t = uT(), e = YS(), r = gT(), n = LT(), s = HT(), i = yo(), o = XS(), a = ZS(), c = 1, u = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, h = d.hasOwnProperty;
  function m(p, v, g, y, x, b) {
    var E = i(p), O = i(v), _ = E ? f : s(p), I = O ? f : s(v);
    _ = _ == u ? l : _, I = I == u ? l : I;
    var P = _ == l, $ = I == l, S = _ == I;
    if (S && o(p)) {
      if (!o(v))
        return !1;
      E = !0, P = !1;
    }
    if (S && !P)
      return b || (b = new t()), E || a(p) ? e(p, v, g, y, x, b) : r(p, v, _, g, y, x, b);
    if (!(g & c)) {
      var A = P && h.call(p, "__wrapped__"), C = $ && h.call(v, "__wrapped__");
      if (A || C) {
        var V = A ? p.value() : p, q = C ? v.value() : v;
        return b || (b = new t()), x(V, q, g, y, b);
      }
    }
    return S ? (b || (b = new t()), n(p, v, g, y, x, b)) : !1;
  }
  return Zl = m, Zl;
}
var ef, Lg;
function KT() {
  if (Lg) return ef;
  Lg = 1;
  var t = GT(), e = Ar();
  function r(n, s, i, o, a) {
    return n === s ? !0 : n == null || s == null || !e(n) && !e(s) ? n !== n && s !== s : t(n, s, i, o, r, a);
  }
  return ef = r, ef;
}
var tf, Vg;
function zT() {
  if (Vg) return tf;
  Vg = 1;
  var t = KT();
  function e(r, n) {
    return t(r, n);
  }
  return tf = e, tf;
}
var rf, Bg;
function Oo() {
  if (Bg) return rf;
  Bg = 1;
  class t {
    constructor(r, n) {
      this.key = r, this.value = n;
    }
    /**
     * @returns {KeyValuePair}
     */
    clone() {
      const r = new t();
      return this.key && (r.key = this.key.clone()), this.value && (r.value = this.value.clone()), r;
    }
  }
  return rf = t, rf;
}
var nf, Ug;
function wo() {
  if (Ug) return nf;
  Ug = 1;
  var t = "Expected a function";
  function e(r) {
    if (typeof r != "function")
      throw new TypeError(t);
    return function() {
      var n = arguments;
      switch (n.length) {
        case 0:
          return !r.call(this);
        case 1:
          return !r.call(this, n[0]);
        case 2:
          return !r.call(this, n[0], n[1]);
        case 3:
          return !r.call(this, n[0], n[1], n[2]);
      }
      return !r.apply(this, n);
    };
  }
  return nf = e, nf;
}
var sf, Jg;
function Eo() {
  if (Jg) return sf;
  Jg = 1;
  const t = wo();
  function e(n) {
    return typeof n == "string" ? (s) => s.element === n : n.constructor && n.extend ? (s) => s instanceof n : n;
  }
  class r {
    constructor(s) {
      this.elements = s || [];
    }
    /**
     * @returns {Array}
     */
    toValue() {
      return this.elements.map((s) => s.toValue());
    }
    // High Order Functions
    /**
     * @param callback - Function to execute for each element
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @returns {array} A new array with each element being the result of the callback function
     */
    map(s, i) {
      return this.elements.map(s, i);
    }
    /**
     * Maps and then flattens the results.
     * @param callback - Function to execute for each element.
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @returns {array}
     */
    flatMap(s, i) {
      return this.map(s, i).reduce((o, a) => o.concat(a), []);
    }
    /**
     * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
     * @param transform - A closure that accepts an element of this array as its argument and returns an optional value.
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @memberof ArraySlice.prototype
     * @returns An array of the non-undefined results of calling transform with each element of the array
     */
    compactMap(s, i) {
      const o = [];
      return this.forEach((a) => {
        const c = s.bind(i)(a);
        c && o.push(c);
      }), o;
    }
    /**
     * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @returns {ArraySlice}
     * @memberof ArraySlice.prototype
     */
    filter(s, i) {
      return s = e(s), new r(this.elements.filter(s, i));
    }
    /**
     * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @returns {ArraySlice}
     * @memberof ArraySlice.prototype
     */
    reject(s, i) {
      return s = e(s), new r(this.elements.filter(t(s), i));
    }
    /**
     * Returns the first element in the array that satisfies the given value
     * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @returns {Element}
     * @memberof ArraySlice.prototype
     */
    find(s, i) {
      return s = e(s), this.elements.find(s, i);
    }
    /**
     * @param callback - Function to execute for each element
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @memberof ArraySlice.prototype
     */
    forEach(s, i) {
      this.elements.forEach(s, i);
    }
    /**
     * @param callback - Function to execute for each element
     * @param initialValue
     * @memberof ArraySlice.prototype
     */
    reduce(s, i) {
      return this.elements.reduce(s, i);
    }
    /**
     * @param value
     * @returns {boolean}
     * @memberof ArraySlice.prototype
     */
    includes(s) {
      return this.elements.some((i) => i.equals(s));
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
    unshift(s) {
      this.elements.unshift(this.refract(s));
    }
    /**
     * Adds the given element to the end of the slice
     * @parameter {Element} value
     * @memberof ArraySlice.prototype
     */
    push(s) {
      return this.elements.push(this.refract(s)), this;
    }
    /**
     * @parameter {Element} value
     * @memberof ArraySlice.prototype
     */
    add(s) {
      this.push(s);
    }
    // Accessors
    /**
     * @parameter {number} index
     * @returns {Element}
     * @memberof ArraySlice.prototype
     */
    get(s) {
      return this.elements[s];
    }
    /**
     * @parameter {number} index
     * @memberof ArraySlice.prototype
     */
    getValue(s) {
      const i = this.elements[s];
      if (i)
        return i.toValue();
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
  }
  return typeof Symbol < "u" && (r.prototype[Symbol.iterator] = function() {
    return this.elements[Symbol.iterator]();
  }), sf = r, sf;
}
var of, Hg;
function Lt() {
  if (Hg) return of;
  Hg = 1;
  const t = zT(), e = Oo(), r = Eo();
  class n {
    constructor(i, o, a) {
      o && (this.meta = o), a && (this.attributes = a), this.content = i;
    }
    /**
     * Freezes the element to prevent any mutation.
     * A frozen element will add `parent` property to every child element
     * to allow traversing up the element tree.
     */
    freeze() {
      Object.isFrozen(this) || (this._meta && (this.meta.parent = this, this.meta.freeze()), this._attributes && (this.attributes.parent = this, this.attributes.freeze()), this.children.forEach((i) => {
        i.parent = this, i.freeze();
      }, this), this.content && Array.isArray(this.content) && Object.freeze(this.content), Object.freeze(this));
    }
    primitive() {
    }
    /**
     * Creates a deep clone of the instance
     */
    clone() {
      const i = new this.constructor();
      return i.element = this.element, this.meta.length && (i._meta = this.meta.clone()), this.attributes.length && (i._attributes = this.attributes.clone()), this.content ? this.content.clone ? i.content = this.content.clone() : Array.isArray(this.content) ? i.content = this.content.map((o) => o.clone()) : i.content = this.content : i.content = this.content, i;
    }
    /**
     */
    toValue() {
      return this.content instanceof n ? this.content.toValue() : this.content instanceof e ? {
        key: this.content.key.toValue(),
        value: this.content.value ? this.content.value.toValue() : void 0
      } : this.content && this.content.map ? this.content.map((i) => i.toValue(), this) : this.content;
    }
    /**
     * Creates a reference pointing at the Element
     * @returns {RefElement}
     * @memberof Element.prototype
     */
    toRef(i) {
      if (this.id.toValue() === "")
        throw Error("Cannot create reference to an element that does not contain an ID");
      const o = new this.RefElement(this.id.toValue());
      return i && (o.path = i), o;
    }
    /**
     * Finds the given elements in the element tree.
     * When providing multiple element names, you must first freeze the element.
     *
     * @param names {...elementNames}
     * @returns {ArraySlice}
     */
    findRecursive(...i) {
      if (arguments.length > 1 && !this.isFrozen)
        throw new Error("Cannot find recursive with multiple element names without first freezing the element. Call `element.freeze()`");
      const o = i.pop();
      let a = new r();
      const c = (f, l) => (f.push(l), f), u = (f, l) => {
        l.element === o && f.push(l);
        const d = l.findRecursive(o);
        return d && d.reduce(c, f), l.content instanceof e && (l.content.key && u(f, l.content.key), l.content.value && u(f, l.content.value)), f;
      };
      return this.content && (this.content.element && u(a, this.content), Array.isArray(this.content) && this.content.reduce(u, a)), i.isEmpty || (a = a.filter((f) => {
        let l = f.parents.map((d) => d.element);
        for (const d in i) {
          const h = i[d], m = l.indexOf(h);
          if (m !== -1)
            l = l.splice(0, m);
          else
            return !1;
        }
        return !0;
      })), a;
    }
    set(i) {
      return this.content = i, this;
    }
    equals(i) {
      return t(this.toValue(), i);
    }
    getMetaProperty(i, o) {
      if (!this.meta.hasKey(i)) {
        if (this.isFrozen) {
          const a = this.refract(o);
          return a.freeze(), a;
        }
        this.meta.set(i, o);
      }
      return this.meta.get(i);
    }
    setMetaProperty(i, o) {
      this.meta.set(i, o);
    }
    /**
     * @type String
     */
    get element() {
      return this._storedElement || "element";
    }
    set element(i) {
      this._storedElement = i;
    }
    get content() {
      return this._content;
    }
    set content(i) {
      if (i instanceof n)
        this._content = i;
      else if (i instanceof r)
        this.content = i.elements;
      else if (typeof i == "string" || typeof i == "number" || typeof i == "boolean" || i === "null" || i == null)
        this._content = i;
      else if (i instanceof e)
        this._content = i;
      else if (Array.isArray(i))
        this._content = i.map(this.refract);
      else if (typeof i == "object")
        this._content = Object.keys(i).map((o) => new this.MemberElement(o, i[o]));
      else
        throw new Error("Cannot set content to given value");
    }
    /**
     * @type ObjectElement
     */
    get meta() {
      if (!this._meta) {
        if (this.isFrozen) {
          const i = new this.ObjectElement();
          return i.freeze(), i;
        }
        this._meta = new this.ObjectElement();
      }
      return this._meta;
    }
    set meta(i) {
      i instanceof this.ObjectElement ? this._meta = i : this.meta.set(i || {});
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
          const i = new this.ObjectElement();
          return i.freeze(), i;
        }
        this._attributes = new this.ObjectElement();
      }
      return this._attributes;
    }
    set attributes(i) {
      i instanceof this.ObjectElement ? this._attributes = i : this.attributes.set(i || {});
    }
    /**
     * Unique Identifier, MUST be unique throughout an entire element tree.
     * @type StringElement
     */
    get id() {
      return this.getMetaProperty("id", "");
    }
    set id(i) {
      this.setMetaProperty("id", i);
    }
    /**
     * @type ArrayElement
     */
    get classes() {
      return this.getMetaProperty("classes", []);
    }
    set classes(i) {
      this.setMetaProperty("classes", i);
    }
    /**
     * Human-readable title of element
     * @type StringElement
     */
    get title() {
      return this.getMetaProperty("title", "");
    }
    set title(i) {
      this.setMetaProperty("title", i);
    }
    /**
     * Human-readable description of element
     * @type StringElement
     */
    get description() {
      return this.getMetaProperty("description", "");
    }
    set description(i) {
      this.setMetaProperty("description", i);
    }
    /**
     * @type ArrayElement
     */
    get links() {
      return this.getMetaProperty("links", []);
    }
    set links(i) {
      this.setMetaProperty("links", i);
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
      let { parent: i } = this;
      const o = new r();
      for (; i; )
        o.push(i), i = i.parent;
      return o;
    }
    /**
     * Returns all of the children elements found within the element.
     * @type ArraySlice
     * @see recursiveChildren
     */
    get children() {
      if (Array.isArray(this.content))
        return new r(this.content);
      if (this.content instanceof e) {
        const i = new r([this.content.key]);
        return this.content.value && i.push(this.content.value), i;
      }
      return this.content instanceof n ? new r([this.content]) : new r();
    }
    /**
    * Returns all of the children elements found within the element recursively.
    * @type ArraySlice
    * @see children
    */
    get recursiveChildren() {
      const i = new r();
      return this.children.forEach((o) => {
        i.push(o), o.recursiveChildren.forEach((a) => {
          i.push(a);
        });
      }), i;
    }
  }
  return of = n, of;
}
var af, Gg;
function WT() {
  if (Gg) return af;
  Gg = 1;
  const t = Lt();
  class e extends t {
    constructor(n, s, i) {
      super(n || null, s, i), this.element = "null";
    }
    primitive() {
      return "null";
    }
    set() {
      return new Error("Cannot set the value of null");
    }
  }
  return af = e, af;
}
var cf, Kg;
function YT() {
  if (Kg) return cf;
  Kg = 1;
  const t = Lt();
  return cf = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "string";
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
  }, cf;
}
var uf, zg;
function XT() {
  if (zg) return uf;
  zg = 1;
  const t = Lt();
  return uf = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "number";
    }
    primitive() {
      return "number";
    }
  }, uf;
}
var lf, Wg;
function QT() {
  if (Wg) return lf;
  Wg = 1;
  const t = Lt();
  return lf = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "boolean";
    }
    primitive() {
      return "boolean";
    }
  }, lf;
}
var ff, Yg;
function eO() {
  if (Yg) return ff;
  Yg = 1;
  const t = wo(), e = Lt(), r = Eo();
  class n extends e {
    constructor(i, o, a) {
      super(i || [], o, a), this.element = "array";
    }
    primitive() {
      return "array";
    }
    /**
     * @returns {Element}
     */
    get(i) {
      return this.content[i];
    }
    /**
     * Helper for returning the value of an item
     * This works for both ArrayElement and ObjectElement instances
     */
    getValue(i) {
      const o = this.get(i);
      if (o)
        return o.toValue();
    }
    /**
     * @returns {Element}
     */
    getIndex(i) {
      return this.content[i];
    }
    set(i, o) {
      return this.content[i] = this.refract(o), this;
    }
    remove(i) {
      const o = this.content.splice(i, 1);
      return o.length ? o[0] : null;
    }
    /**
     * @param callback - Function to execute for each element
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     */
    map(i, o) {
      return this.content.map(i, o);
    }
    /**
     * Maps and then flattens the results.
     * @param callback - Function to execute for each element.
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @returns {array}
     */
    flatMap(i, o) {
      return this.map(i, o).reduce((a, c) => a.concat(c), []);
    }
    /**
     * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
     * @param transform - A closure that accepts an element of this array as its argument and returns an optional value.
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @memberof ArrayElement.prototype
     * @returns An array of the non-undefined results of calling transform with each element of the array
     */
    compactMap(i, o) {
      const a = [];
      return this.forEach((c) => {
        const u = i.bind(o)(c);
        u && a.push(u);
      }), a;
    }
    /**
     * @param callback - Function to execute for each element
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @returns {ArraySlice}
     */
    filter(i, o) {
      return new r(this.content.filter(i, o));
    }
    /**
     * @param callback - Function to execute for each element
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @returns {ArraySlice}
     */
    reject(i, o) {
      return this.filter(t(i), o);
    }
    /**
     * This is a reduce function specifically for Minim arrays and objects. It
     * allows for returning normal values or Minim instances, so it converts any
     * primitives on each step.
     */
    reduce(i, o) {
      let a, c;
      o !== void 0 ? (a = 0, c = this.refract(o)) : (a = 1, c = this.primitive() === "object" ? this.first.value : this.first);
      for (let u = a; u < this.length; u += 1) {
        const f = this.content[u];
        this.primitive() === "object" ? c = this.refract(i(c, f.value, f.key, f, this)) : c = this.refract(i(c, f, u, this));
      }
      return c;
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
    forEach(i, o) {
      this.content.forEach((a, c) => {
        i.bind(o)(a, this.refract(c));
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
    unshift(i) {
      this.content.unshift(this.refract(i));
    }
    /**
     * @param value
     */
    push(i) {
      return this.content.push(this.refract(i)), this;
    }
    /**
     * @param value
     */
    add(i) {
      this.push(i);
    }
    /**
     * Recusively search all descendents using a condition function.
     * @returns {Element[]}
     */
    findElements(i, o) {
      const a = o || {}, c = !!a.recursive, u = a.results === void 0 ? [] : a.results;
      return this.forEach((f, l, d) => {
        c && f.findElements !== void 0 && f.findElements(i, {
          results: u,
          recursive: c
        }), i(f, l, d) && u.push(f);
      }), u;
    }
    /**
     * Recusively search all descendents using a condition function.
     * @param condition
     * @returns {ArraySlice}
     */
    find(i) {
      return new r(this.findElements(i, { recursive: !0 }));
    }
    /**
     * @param {string} element
     * @returns {ArraySlice}
     */
    findByElement(i) {
      return this.find((o) => o.element === i);
    }
    /**
     * @param {string} className
     * @returns {ArraySlice}
     * @memberof ArrayElement.prototype
     */
    findByClass(i) {
      return this.find((o) => o.classes.includes(i));
    }
    /**
     * Search the tree recursively and find the element with the matching ID
     * @param {string} id
     * @returns {Element}
     * @memberof ArrayElement.prototype
     */
    getById(i) {
      return this.find((o) => o.id.toValue() === i).first;
    }
    /**
     * Looks for matching children using deep equality
     * @param value
     * @returns {boolean}
     */
    includes(i) {
      return this.content.some((o) => o.equals(i));
    }
    /**
     * Looks for matching children using deep equality
     * @param value
     * @returns {boolean}
     * @see includes
     * @deprecated method was replaced by includes
     */
    contains(i) {
      return this.includes(i);
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
    concat(i) {
      return new this.constructor(this.content.concat(i.content));
    }
    "fantasy-land/concat"(i) {
      return this.concat(i);
    }
    "fantasy-land/map"(i) {
      return new this.constructor(this.map(i));
    }
    "fantasy-land/chain"(i) {
      return this.map((o) => i(o), this).reduce((o, a) => o.concat(a), this.empty());
    }
    "fantasy-land/filter"(i) {
      return new this.constructor(this.content.filter(i));
    }
    "fantasy-land/reduce"(i, o) {
      return this.content.reduce(i, o);
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
  }
  return n.empty = function() {
    return new this();
  }, n["fantasy-land/empty"] = n.empty, typeof Symbol < "u" && (n.prototype[Symbol.iterator] = function() {
    return this.content[Symbol.iterator]();
  }), ff = n, ff;
}
var hf, Xg;
function tO() {
  if (Xg) return hf;
  Xg = 1;
  const t = Oo(), e = Lt();
  return hf = class extends e {
    constructor(n, s, i, o) {
      super(new t(), i, o), this.element = "member", this.key = n, this.value = s;
    }
    /**
     * @type Element
     */
    get key() {
      return this.content.key;
    }
    set key(n) {
      this.content.key = this.refract(n);
    }
    /**
     * @type Element
     */
    get value() {
      return this.content.value;
    }
    set value(n) {
      this.content.value = this.refract(n);
    }
  }, hf;
}
var pf, Qg;
function rO() {
  if (Qg) return pf;
  Qg = 1;
  const t = wo(), e = Eo();
  class r extends e {
    map(s, i) {
      return this.elements.map((o) => s.bind(i)(o.value, o.key, o));
    }
    filter(s, i) {
      return new r(this.elements.filter((o) => s.bind(i)(o.value, o.key, o)));
    }
    reject(s, i) {
      return this.filter(t(s.bind(i)));
    }
    forEach(s, i) {
      return this.elements.forEach((o, a) => {
        s.bind(i)(o.value, o.key, o, a);
      });
    }
    /**
     * @returns {array}
     */
    keys() {
      return this.map((s, i) => i.toValue());
    }
    /**
     * @returns {array}
     */
    values() {
      return this.map((s) => s.toValue());
    }
  }
  return pf = r, pf;
}
var df, Zg;
function ZT() {
  if (Zg) return df;
  Zg = 1;
  const t = wo(), e = vo(), r = eO(), n = tO(), s = rO();
  class i extends r {
    constructor(a, c, u) {
      super(a || [], c, u), this.element = "object";
    }
    primitive() {
      return "object";
    }
    toValue() {
      return this.content.reduce((a, c) => (a[c.key.toValue()] = c.value ? c.value.toValue() : void 0, a), {});
    }
    /**
     * @param key
     * @returns {Element}
     */
    get(a) {
      const c = this.getMember(a);
      if (c)
        return c.value;
    }
    /**
     * @param key
     * @returns {MemberElement}
     */
    getMember(a) {
      if (a !== void 0)
        return this.content.find((c) => c.key.toValue() === a);
    }
    /**
     * @param key
     */
    remove(a) {
      let c = null;
      return this.content = this.content.filter((u) => u.key.toValue() === a ? (c = u, !1) : !0), c;
    }
    /**
     * @param key
     * @returns {Element}
     */
    getKey(a) {
      const c = this.getMember(a);
      if (c)
        return c.key;
    }
    /**
     * Set allows either a key/value pair to be given or an object
     * If an object is given, each key is set to its respective value
     */
    set(a, c) {
      if (e(a))
        return Object.keys(a).forEach((l) => {
          this.set(l, a[l]);
        }), this;
      const u = a, f = this.getMember(u);
      return f ? f.value = c : this.content.push(new n(u, c)), this;
    }
    /**
     */
    keys() {
      return this.content.map((a) => a.key.toValue());
    }
    /**
     */
    values() {
      return this.content.map((a) => a.value.toValue());
    }
    /**
     * @returns {boolean}
     */
    hasKey(a) {
      return this.content.some((c) => c.key.equals(a));
    }
    /**
     * @returns {array}
     */
    items() {
      return this.content.map((a) => [a.key.toValue(), a.value.toValue()]);
    }
    /**
     * @param callback
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     */
    map(a, c) {
      return this.content.map((u) => a.bind(c)(u.value, u.key, u));
    }
    /**
     * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
     * @param transform - A closure that accepts the value, key and member element of this object as its argument and returns an optional value.
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     * @returns An array of the non-undefined results of calling transform with each element of the array
     */
    compactMap(a, c) {
      const u = [];
      return this.forEach((f, l, d) => {
        const h = a.bind(c)(f, l, d);
        h && u.push(h);
      }), u;
    }
    /**
     * @param callback
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     *
     * @returns {ObjectSlice}
     */
    filter(a, c) {
      return new s(this.content).filter(a, c);
    }
    /**
     * @param callback
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     *
     * @returns {ObjectSlice}
     *
     * @memberof ObjectElement.prototype
     */
    reject(a, c) {
      return this.filter(t(a), c);
    }
    /**
     * @param callback
     * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
     *
     * @memberof ObjectElement.prototype
     */
    forEach(a, c) {
      return this.content.forEach((u) => a.bind(c)(u.value, u.key, u));
    }
  }
  return df = i, df;
}
var mf, eb;
function e_() {
  if (eb) return mf;
  eb = 1;
  const t = Lt();
  return mf = class extends t {
    constructor(r, n, s) {
      super(r || [], n, s), this.element = "link";
    }
    /**
     * The relation identifier for the link, as defined in RFC 5988.
     * @type StringElement
     */
    get relation() {
      return this.attributes.get("relation");
    }
    set relation(r) {
      this.attributes.set("relation", r);
    }
    /**
     * The URI for the given link.
     * @type StringElement
     */
    get href() {
      return this.attributes.get("href");
    }
    set href(r) {
      this.attributes.set("href", r);
    }
  }, mf;
}
var yf, tb;
function t_() {
  if (tb) return yf;
  tb = 1;
  const t = Lt();
  return yf = class extends t {
    constructor(r, n, s) {
      super(r || [], n, s), this.element = "ref", this.path || (this.path = "element");
    }
    /**
     * Path of referenced element to transclude instead of element itself.
     * @type StringElement
     * @default element
     */
    get path() {
      return this.attributes.get("path");
    }
    set path(r) {
      this.attributes.set("path", r);
    }
  }, yf;
}
var vf, rb;
function nO() {
  if (rb) return vf;
  rb = 1;
  const t = Lt(), e = WT(), r = YT(), n = XT(), s = QT(), i = eO(), o = tO(), a = ZT(), c = e_(), u = t_(), f = Eo(), l = rO(), d = Oo();
  function h(m) {
    return m instanceof t ? m : typeof m == "string" ? new r(m) : typeof m == "number" ? new n(m) : typeof m == "boolean" ? new s(m) : m === null ? new e() : Array.isArray(m) ? new i(m.map(h)) : typeof m == "object" ? new a(m) : m;
  }
  return t.prototype.ObjectElement = a, t.prototype.RefElement = u, t.prototype.MemberElement = o, t.prototype.refract = h, f.prototype.refract = h, vf = {
    Element: t,
    NullElement: e,
    StringElement: r,
    NumberElement: n,
    BooleanElement: s,
    ArrayElement: i,
    MemberElement: o,
    ObjectElement: a,
    LinkElement: c,
    RefElement: u,
    refract: h,
    ArraySlice: f,
    ObjectSlice: l,
    KeyValuePair: d
  }, vf;
}
var gf, nb;
function r_() {
  if (nb) return gf;
  nb = 1;
  const t = $R(), e = MR(), r = FR(), n = kR(), s = vo(), i = Rp(), o = nO();
  class a {
    constructor(u) {
      this.elementMap = {}, this.elementDetection = [], this.Element = o.Element, this.KeyValuePair = o.KeyValuePair, (!u || !u.noDefault) && this.useDefault(), this._attributeElementKeys = [], this._attributeElementArrayKeys = [];
    }
    /**
     * Use a namespace plugin or load a generic plugin.
     *
     * @param plugin
     */
    use(u) {
      return u.namespace && u.namespace({ base: this }), u.load && u.load({ base: this }), this;
    }
    /*
     * Use the default namespace. This preloads all the default elements
     * into this registry instance.
     */
    useDefault() {
      return this.register("null", o.NullElement).register("string", o.StringElement).register("number", o.NumberElement).register("boolean", o.BooleanElement).register("array", o.ArrayElement).register("object", o.ObjectElement).register("member", o.MemberElement).register("ref", o.RefElement).register("link", o.LinkElement), this.detect(t, o.NullElement, !1).detect(e, o.StringElement, !1).detect(r, o.NumberElement, !1).detect(n, o.BooleanElement, !1).detect(Array.isArray, o.ArrayElement, !1).detect(s, o.ObjectElement, !1), this;
    }
    /**
     * Register a new element class for an element.
     *
     * @param {string} name
     * @param elementClass
     */
    register(u, f) {
      return this._elements = void 0, this.elementMap[u] = f, this;
    }
    /**
     * Unregister a previously registered class for an element.
     *
     * @param {string} name
     */
    unregister(u) {
      return this._elements = void 0, delete this.elementMap[u], this;
    }
    /*
     * Add a new detection function to determine which element
     * class to use when converting existing js instances into
     * refract element.
     */
    detect(u, f, l) {
      return (l === void 0 ? !0 : l) ? this.elementDetection.unshift([u, f]) : this.elementDetection.push([u, f]), this;
    }
    /*
     * Convert an existing Javascript object into refract element instances, which
     * can be further processed or serialized into refract.
     * If the item passed in is already refracted, then it is returned
     * unmodified.
     */
    toElement(u) {
      if (u instanceof this.Element)
        return u;
      let f;
      for (let l = 0; l < this.elementDetection.length; l += 1) {
        const d = this.elementDetection[l][0], h = this.elementDetection[l][1];
        if (d(u)) {
          f = new h(u);
          break;
        }
      }
      return f;
    }
    /*
     * Get an element class given an element name.
     */
    getElementClass(u) {
      const f = this.elementMap[u];
      return f === void 0 ? this.Element : f;
    }
    /*
     * Convert a refract document into refract element instances.
     */
    fromRefract(u) {
      return this.serialiser.deserialise(u);
    }
    /*
     * Convert an element to a Refracted JSON object.
     */
    toRefract(u) {
      return this.serialiser.serialise(u);
    }
    /*
     * Get an object that contains all registered element classes, where
     * the key is the PascalCased element name and the value is the class.
     */
    get elements() {
      return this._elements === void 0 && (this._elements = {
        Element: this.Element
      }, Object.keys(this.elementMap).forEach((u) => {
        const f = u[0].toUpperCase() + u.substr(1);
        this._elements[f] = this.elementMap[u];
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
      return new i(this);
    }
  }
  return i.prototype.Namespace = a, gf = a, gf;
}
var bf, sb;
function n_() {
  if (sb) return bf;
  sb = 1;
  const t = Rp();
  return bf = class extends t {
    serialise(r) {
      if (!(r instanceof this.namespace.elements.Element))
        throw new TypeError(`Given element \`${r}\` is not an Element instance`);
      let n;
      r._attributes && r.attributes.get("variable") && (n = r.attributes.get("variable"));
      const s = {
        element: r.element
      };
      r._meta && r._meta.length > 0 && (s.meta = this.serialiseObject(r.meta));
      const i = r.element === "enum" || r.attributes.keys().indexOf("enumerations") !== -1;
      if (i) {
        const o = this.enumSerialiseAttributes(r);
        o && (s.attributes = o);
      } else if (r._attributes && r._attributes.length > 0) {
        let { attributes: o } = r;
        o.get("metadata") && (o = o.clone(), o.set("meta", o.get("metadata")), o.remove("metadata")), r.element === "member" && n && (o = o.clone(), o.remove("variable")), o.length > 0 && (s.attributes = this.serialiseObject(o));
      }
      if (i)
        s.content = this.enumSerialiseContent(r, s);
      else if (this[`${r.element}SerialiseContent`])
        s.content = this[`${r.element}SerialiseContent`](r, s);
      else if (r.content !== void 0) {
        let o;
        n && r.content.key ? (o = r.content.clone(), o.key.attributes.set("variable", n), o = this.serialiseContent(o)) : o = this.serialiseContent(r.content), this.shouldSerialiseContent(r, o) && (s.content = o);
      } else this.shouldSerialiseContent(r, r.content) && r instanceof this.namespace.elements.Array && (s.content = []);
      return s;
    }
    shouldSerialiseContent(r, n) {
      return r.element === "parseResult" || r.element === "httpRequest" || r.element === "httpResponse" || r.element === "category" || r.element === "link" ? !0 : !(n === void 0 || Array.isArray(n) && n.length === 0);
    }
    refSerialiseContent(r, n) {
      return delete n.attributes, {
        href: r.toValue(),
        path: r.path.toValue()
      };
    }
    sourceMapSerialiseContent(r) {
      return r.toValue();
    }
    dataStructureSerialiseContent(r) {
      return [this.serialiseContent(r.content)];
    }
    enumSerialiseAttributes(r) {
      const n = r.attributes.clone(), s = n.remove("enumerations") || new this.namespace.elements.Array([]), i = n.get("default");
      let o = n.get("samples") || new this.namespace.elements.Array([]);
      if (i && i.content && (i.content.attributes && i.content.attributes.remove("typeAttributes"), n.set("default", new this.namespace.elements.Array([i.content]))), o.forEach((a) => {
        a.content && a.content.element && a.content.attributes.remove("typeAttributes");
      }), r.content && s.length !== 0 && o.unshift(r.content), o = o.map((a) => a instanceof this.namespace.elements.Array ? [a] : new this.namespace.elements.Array([a.content])), o.length && n.set("samples", o), n.length > 0)
        return this.serialiseObject(n);
    }
    enumSerialiseContent(r) {
      if (r._attributes) {
        const n = r.attributes.get("enumerations");
        if (n && n.length > 0)
          return n.content.map((s) => {
            const i = s.clone();
            return i.attributes.remove("typeAttributes"), this.serialise(i);
          });
      }
      if (r.content) {
        const n = r.content.clone();
        return n.attributes.remove("typeAttributes"), [this.serialise(n)];
      }
      return [];
    }
    deserialise(r) {
      if (typeof r == "string")
        return new this.namespace.elements.String(r);
      if (typeof r == "number")
        return new this.namespace.elements.Number(r);
      if (typeof r == "boolean")
        return new this.namespace.elements.Boolean(r);
      if (r === null)
        return new this.namespace.elements.Null();
      if (Array.isArray(r))
        return new this.namespace.elements.Array(r.map(this.deserialise, this));
      const n = this.namespace.getElementClass(r.element), s = new n();
      s.element !== r.element && (s.element = r.element), r.meta && this.deserialiseObject(r.meta, s.meta), r.attributes && this.deserialiseObject(r.attributes, s.attributes);
      const i = this.deserialiseContent(r.content);
      if ((i !== void 0 || s.content === null) && (s.content = i), s.element === "enum") {
        s.content && s.attributes.set("enumerations", s.content);
        let o = s.attributes.get("samples");
        if (s.attributes.remove("samples"), o) {
          const c = o;
          o = new this.namespace.elements.Array(), c.forEach((f) => {
            f.forEach((l) => {
              const d = new n(l);
              d.element = s.element, o.push(d);
            });
          });
          const u = o.shift();
          u ? s.content = u.content : s.content = void 0, s.attributes.set("samples", o);
        } else
          s.content = void 0;
        let a = s.attributes.get("default");
        if (a && a.length > 0) {
          a = a.get(0);
          const c = new n(a);
          c.element = s.element, s.attributes.set("default", c);
        }
      } else if (s.element === "dataStructure" && Array.isArray(s.content))
        [s.content] = s.content;
      else if (s.element === "category") {
        const o = s.attributes.get("meta");
        o && (s.attributes.set("metadata", o), s.attributes.remove("meta"));
      } else s.element === "member" && s.key && s.key._attributes && s.key._attributes.getValue("variable") && (s.attributes.set("variable", s.key.attributes.get("variable")), s.key.attributes.remove("variable"));
      return s;
    }
    // Private API
    serialiseContent(r) {
      if (r instanceof this.namespace.elements.Element)
        return this.serialise(r);
      if (r instanceof this.namespace.KeyValuePair) {
        const n = {
          key: this.serialise(r.key)
        };
        return r.value && (n.value = this.serialise(r.value)), n;
      }
      return r && r.map ? r.map(this.serialise, this) : r;
    }
    deserialiseContent(r) {
      if (r) {
        if (r.element)
          return this.deserialise(r);
        if (r.key) {
          const n = new this.namespace.KeyValuePair(this.deserialise(r.key));
          return r.value && (n.value = this.deserialise(r.value)), n;
        }
        if (r.map)
          return r.map(this.deserialise, this);
      }
      return r;
    }
    shouldRefract(r) {
      return r._attributes && r.attributes.keys().length || r._meta && r.meta.keys().length ? !0 : r.element === "enum" ? !1 : r.element !== r.primitive() || r.element === "member";
    }
    convertKeyToRefract(r, n) {
      return this.shouldRefract(n) ? this.serialise(n) : n.element === "enum" ? this.serialiseEnum(n) : n.element === "array" ? n.map((s) => this.shouldRefract(s) || r === "default" ? this.serialise(s) : s.element === "array" || s.element === "object" || s.element === "enum" ? s.children.map((i) => this.serialise(i)) : s.toValue()) : n.element === "object" ? (n.content || []).map(this.serialise, this) : n.toValue();
    }
    serialiseEnum(r) {
      return r.children.map((n) => this.serialise(n));
    }
    serialiseObject(r) {
      const n = {};
      return r.forEach((s, i) => {
        if (s) {
          const o = i.toValue();
          n[o] = this.convertKeyToRefract(o, s);
        }
      }), n;
    }
    deserialiseObject(r, n) {
      Object.keys(r).forEach((s) => {
        n.set(s, this.deserialise(r[s]));
      });
    }
  }, bf;
}
var ib;
function s_() {
  if (ib) return be;
  ib = 1;
  const t = r_(), e = nO();
  return be.Namespace = t, be.namespace = function(n) {
    return new t(n);
  }, be.KeyValuePair = Oo(), be.ArraySlice = e.ArraySlice, be.ObjectSlice = e.ObjectSlice, be.Element = e.Element, be.StringElement = e.StringElement, be.NumberElement = e.NumberElement, be.BooleanElement = e.BooleanElement, be.NullElement = e.NullElement, be.ArrayElement = e.ArrayElement, be.ObjectElement = e.ObjectElement, be.MemberElement = e.MemberElement, be.RefElement = e.RefElement, be.LinkElement = e.LinkElement, be.refract = e.refract, be.JSONSerialiser = Rp(), be.JSON06Serialiser = n_(), be;
}
var w = s_();
class ti extends w.StringElement {
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
class ri extends w.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}
class yt extends w.ArrayElement {
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
    if (er(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
}
class ni extends w.ArrayElement {
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
    const r = new w.ArrayElement([e.start.row, e.start.column, e.start.char]), n = new w.ArrayElement([e.end.row, e.end.column, e.end.char]);
    r.classes.push("position"), n.classes.push("position"), this.push(r).push(n);
  }
}
const i_ = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", o_ = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, a_ = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, c_ = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof w.ArrayElement) && e.classes.includes(t), Bt = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, N = (t) => t({
  hasMethod: i_,
  hasBasicElementProps: o_,
  primitiveEq: a_,
  isElementType: Bt,
  hasClass: c_
}), ge = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.Element || t(r) && e(void 0, r)), z = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.StringElement || t(r) && e("string", r)), _p = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.NumberElement || t(r) && e("number", r)), $p = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.NullElement || t(r) && e("null", r)), Un = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.BooleanElement || t(r) && e("boolean", r)), re = N(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof w.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Ne = N(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof w.ArrayElement && !(n instanceof w.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), bt = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof w.MemberElement || t(n) && e("member", n) && r(void 0, n)), sO = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof w.LinkElement || t(n) && e("link", n) && r(void 0, n)), iO = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof w.RefElement || t(n) && e("ref", n) && r(void 0, n)), u_ = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ti || t(n) && e("annotation", n) && r("array", n)), l_ = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ri || t(n) && e("comment", n) && r("string", n)), oO = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof yt || t(n) && e("parseResult", n) && r("array", n)), aO = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ni || t(n) && e("sourceMap", n) && r("array", n)), pr = (t) => Bt("object", t) || Bt("array", t) || Bt("boolean", t) || Bt("number", t) || Bt("string", t) || Bt("null", t) || Bt("member", t), Jn = (t) => aO(t.meta.get("sourceMap")), f_ = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Ne(r) ? up(ho(r.toValue()), t) : !1;
}, Kr = (t, e) => t.length === 0 ? !0 : up(ho(e.classes.toValue()), t), h_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Jn,
  includesClasses: Kr,
  includesSymbols: f_,
  isAnnotationElement: u_,
  isArrayElement: Ne,
  isBooleanElement: Un,
  isCommentElement: l_,
  isElement: ge,
  isLinkElement: sO,
  isMemberElement: bt,
  isNullElement: $p,
  isNumberElement: _p,
  isObjectElement: re,
  isParseResultElement: oO,
  isPrimitiveElement: pr,
  isRefElement: iO,
  isSourceMapElement: aO,
  isStringElement: z
}, Symbol.toStringTag, { value: "Module" }));
class cO extends w.Namespace {
  constructor() {
    super(), this.register("annotation", ti), this.register("comment", ri), this.register("parseResult", yt), this.register("sourceMap", ni);
  }
}
const uO = new cO(), Vt = (t) => {
  const e = new cO();
  return mt(t) && e.use(t), e;
}, lO = () => ({
  predicates: {
    ...h_
  },
  namespace: uO
}), Ao = (t, e, r) => {
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
}, te = {}, Hn = (t) => t == null ? void 0 : t.type, fO = (t) => typeof Hn(t) == "string", Cp = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), jo = (t, {
  visitFnGetter: e = Ao,
  nodeTypeGetter: r = Hn,
  breakSymbol: n = te,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    enter(u, f, l, d, h, m) {
      let p = u, v = !1;
      const g = {
        ...m,
        replaceWith(y, x) {
          m.replaceWith(y, x), p = y;
        }
      };
      for (let y = 0; y < t.length; y += 1)
        if (c[y] === a) {
          const x = e(t[y], r(p), !1);
          if (typeof x == "function") {
            const b = x.call(t[y], p, f, l, d, h, g);
            if (typeof (b == null ? void 0 : b.then) == "function")
              throw new Ot("Async visitor not supported in sync mode", {
                visitor: t[y],
                visitFn: x
              });
            if (b === i)
              c[y] = p;
            else if (b === n)
              c[y] = n;
            else {
              if (b === s)
                return b;
              if (b !== void 0)
                if (o)
                  p = b, v = !0;
                else
                  return b;
            }
          }
        }
      return v ? p : void 0;
    },
    leave(u, f, l, d, h, m) {
      let p = u;
      const v = {
        ...m,
        replaceWith(g, y) {
          m.replaceWith(g, y), p = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const y = e(t[g], r(p), !0);
          if (typeof y == "function") {
            const x = y.call(t[g], p, f, l, d, h, v);
            if (typeof (x == null ? void 0 : x.then) == "function")
              throw new Ot("Async visitor not supported in sync mode", {
                visitor: t[g],
                visitFn: y
              });
            if (x === n)
              c[g] = n;
            else if (x !== void 0 && x !== i)
              return x;
          }
        } else c[g] === p && (c[g] = a);
    }
  };
}, p_ = (t, {
  visitFnGetter: e = Ao,
  nodeTypeGetter: r = Hn,
  breakSymbol: n = te,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    async enter(u, f, l, d, h, m) {
      let p = u, v = !1;
      const g = {
        ...m,
        replaceWith(y, x) {
          m.replaceWith(y, x), p = y;
        }
      };
      for (let y = 0; y < t.length; y += 1)
        if (c[y] === a) {
          const x = e(t[y], r(p), !1);
          if (typeof x == "function") {
            const b = await x.call(t[y], p, f, l, d, h, g);
            if (b === i)
              c[y] = p;
            else if (b === n)
              c[y] = n;
            else {
              if (b === s)
                return b;
              if (b !== void 0)
                if (o)
                  p = b, v = !0;
                else
                  return b;
            }
          }
        }
      return v ? p : void 0;
    },
    async leave(u, f, l, d, h, m) {
      let p = u;
      const v = {
        ...m,
        replaceWith(g, y) {
          m.replaceWith(g, y), p = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const y = e(t[g], r(p), !0);
          if (typeof y == "function") {
            const x = await y.call(t[g], p, f, l, d, h, v);
            if (x === n)
              c[g] = n;
            else if (x !== void 0 && x !== i)
              return x;
          }
        } else c[g] === p && (c[g] = a);
    }
  };
};
jo[Symbol.for("nodejs.util.promisify.custom")] = p_;
const Ip = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = te,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ao,
  nodeTypeGetter: c = Hn,
  nodePredicate: u = fO,
  nodeCloneFn: f = Cp,
  detectCycles: l = !0,
  detectCyclesCallback: d = null
} = {}) => {
  const h = r || {};
  let m, p = Array.isArray(t), v = [t], g = -1, y, x = [], b = t;
  const E = [], O = [];
  do {
    g += 1;
    const P = g === v.length;
    let $;
    const S = P && x.length !== 0;
    if (P) {
      if ($ = O.length === 0 ? void 0 : E.pop(), b = y, y = O.pop(), S)
        if (p) {
          b = b.slice();
          let C = 0;
          for (const [V, q] of x) {
            const Z = V - C;
            q === i ? (b.splice(Z, 1), C += 1) : b[Z] = q;
          }
        } else {
          b = f(b);
          for (const [C, V] of x)
            b[C] = V;
        }
      g = m.index, v = m.keys, x = m.edits, p = m.inArray, m = m.prev;
    } else if (y !== i && y !== void 0) {
      if ($ = p ? g : v[g], b = y[$], b === i || b === void 0)
        continue;
      E.push($);
    }
    let A;
    if (!Array.isArray(b)) {
      var _;
      if (!u(b))
        throw new Ot(`Invalid AST Node:  ${String(b)}`, {
          node: b
        });
      if (l && O.includes(b)) {
        typeof d == "function" && d(b, $, y, E, O), E.pop();
        continue;
      }
      const C = a(e, c(b), P);
      if (C) {
        for (const [q, Z] of Object.entries(n))
          e[q] = Z;
        const V = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(q, Z) {
            typeof Z == "function" ? Z(q, b, $, y, E, O) : y && (y[$] = q), P || (b = q);
          }
        };
        A = C.call(e, b, $, y, E, O, V);
      }
      if (typeof ((_ = A) === null || _ === void 0 ? void 0 : _.then) == "function")
        throw new Ot("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: C
        });
      if (A === s)
        break;
      if (A === o) {
        if (!P) {
          E.pop();
          continue;
        }
      } else if (A !== void 0 && (x.push([$, A]), !P))
        if (u(A))
          b = A;
        else {
          E.pop();
          continue;
        }
    }
    if (A === void 0 && S && x.push([$, b]), !P) {
      var I;
      m = {
        inArray: p,
        index: g,
        keys: v,
        edits: x,
        prev: m
      }, p = Array.isArray(b), v = p ? b : (I = h[c(b)]) !== null && I !== void 0 ? I : [], g = -1, x = [], y !== i && y !== void 0 && O.push(y), y = b;
    }
  } while (m !== void 0);
  return x.length !== 0 ? x[x.length - 1][1] : t;
};
Ip[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = te,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ao,
  nodeTypeGetter: c = Hn,
  nodePredicate: u = fO,
  nodeCloneFn: f = Cp,
  detectCycles: l = !0,
  detectCyclesCallback: d = null
} = {}) => {
  const h = r || {};
  let m, p = Array.isArray(t), v = [t], g = -1, y, x = [], b = t;
  const E = [], O = [];
  do {
    g += 1;
    const I = g === v.length;
    let P;
    const $ = I && x.length !== 0;
    if (I) {
      if (P = O.length === 0 ? void 0 : E.pop(), b = y, y = O.pop(), $)
        if (p) {
          b = b.slice();
          let A = 0;
          for (const [C, V] of x) {
            const q = C - A;
            V === i ? (b.splice(q, 1), A += 1) : b[q] = V;
          }
        } else {
          b = f(b);
          for (const [A, C] of x)
            b[A] = C;
        }
      g = m.index, v = m.keys, x = m.edits, p = m.inArray, m = m.prev;
    } else if (y !== i && y !== void 0) {
      if (P = p ? g : v[g], b = y[P], b === i || b === void 0)
        continue;
      E.push(P);
    }
    let S;
    if (!Array.isArray(b)) {
      if (!u(b))
        throw new Ot(`Invalid AST Node: ${String(b)}`, {
          node: b
        });
      if (l && O.includes(b)) {
        typeof d == "function" && d(b, P, y, E, O), E.pop();
        continue;
      }
      const A = a(e, c(b), I);
      if (A) {
        for (const [V, q] of Object.entries(n))
          e[V] = q;
        const C = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(V, q) {
            typeof q == "function" ? q(V, b, P, y, E, O) : y && (y[P] = V), I || (b = V);
          }
        };
        S = await A.call(e, b, P, y, E, O, C);
      }
      if (S === s)
        break;
      if (S === o) {
        if (!I) {
          E.pop();
          continue;
        }
      } else if (S !== void 0 && (x.push([P, S]), !I))
        if (u(S))
          b = S;
        else {
          E.pop();
          continue;
        }
    }
    if (S === void 0 && $ && x.push([P, b]), !I) {
      var _;
      m = {
        inArray: p,
        index: g,
        keys: v,
        edits: x,
        prev: m
      }, p = Array.isArray(b), v = p ? b : (_ = h[c(b)]) !== null && _ !== void 0 ? _ : [], g = -1, x = [], y !== i && y !== void 0 && O.push(y), y = b;
    }
  } while (m !== void 0);
  return x.length !== 0 ? x[x.length - 1][1] : t;
};
class hO extends Ot {
  constructor(r, n) {
    super(r, n);
    j(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class d_ extends hO {
}
class m_ extends hO {
}
const L = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof w.KeyValuePair) {
    const {
      key: s,
      value: i
    } = t, o = ge(s) ? L(s, n) : s, a = ge(i) ? L(i, n) : i, c = new w.KeyValuePair(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof w.ObjectSlice) {
    const s = (a) => L(a, n), i = [...t].map(s), o = new w.ObjectSlice(i);
    return r.set(t, o), o;
  }
  if (t instanceof w.ArraySlice) {
    const s = (a) => L(a, n), i = [...t].map(s), o = new w.ArraySlice(i);
    return r.set(t, o), o;
  }
  if (ge(t)) {
    const s = Pe(t);
    if (r.set(t, s), t.content)
      if (ge(t.content))
        s.content = L(t.content, n);
      else if (t.content instanceof w.KeyValuePair)
        s.content = L(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => L(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new d_("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
L.safe = (t) => {
  try {
    return L(t);
  } catch {
    return t;
  }
};
const pO = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new w.KeyValuePair(e, r);
}, y_ = (t) => {
  const e = [...t];
  return new w.ArraySlice(e);
}, v_ = (t) => {
  const e = [...t];
  return new w.ObjectSlice(e);
}, dO = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = L(t.meta)), t.attributes.length > 0 && (e._attributes = L(t.attributes)), ge(t.content)) {
    const r = t.content;
    e.content = dO(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof w.KeyValuePair ? e.content = pO(t.content) : e.content = t.content;
  return e;
}, Pe = (t) => {
  if (t instanceof w.KeyValuePair)
    return pO(t);
  if (t instanceof w.ObjectSlice)
    return v_(t);
  if (t instanceof w.ArraySlice)
    return y_(t);
  if (ge(t))
    return dO(t);
  throw new m_("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
Pe.safe = (t) => {
  try {
    return Pe(t);
  } catch {
    return t;
  }
};
const nn = (t) => re(t) ? "ObjectElement" : Ne(t) ? "ArrayElement" : bt(t) ? "MemberElement" : z(t) ? "StringElement" : Un(t) ? "BooleanElement" : _p(t) ? "NumberElement" : $p(t) ? "NullElement" : sO(t) ? "LinkElement" : iO(t) ? "RefElement" : void 0, mO = (t) => ge(t) ? Pe(t) : Cp(t), yO = De(nn, wr), Pt = {
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
class vO {
  constructor({
    predicate: e = ap,
    returnOnTrue: r,
    returnOnFalse: n
  } = {}) {
    j(this, "result");
    j(this, "predicate");
    j(this, "returnOnTrue");
    j(this, "returnOnFalse");
    this.result = [], this.predicate = e, this.returnOnTrue = r, this.returnOnFalse = n;
  }
  enter(e) {
    return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
  }
}
const Oe = (t, e, {
  keyMap: r = Pt,
  ...n
} = {}) => Ip(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: nn,
  nodePredicate: yO,
  nodeCloneFn: mO,
  ...n
});
Oe[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Pt,
  ...n
} = {}) => Ip[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: nn,
  nodePredicate: yO,
  nodeCloneFn: mO,
  ...n
});
const gO = {
  toolboxCreator: lO,
  visitorOptions: {
    nodeTypeGetter: nn,
    exposeEdits: !0
  }
}, Rt = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = co(gO, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = jo(a.map(Qs({}, "visitor")), {
    ...i
  });
  a.forEach(Rn(["pre"], []));
  const u = Oe(t, c, i);
  return a.forEach(Rn(["post"], [])), u;
}, g_ = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = co(gO, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = jo[Symbol.for("nodejs.util.promisify.custom")], u = Oe[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(Qs({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(Rn(["pre"], [])));
  const l = await u(t, f, i);
  return await Promise.allSettled(a.map(Rn(["post"], []))), l;
};
Rt[Symbol.for("nodejs.util.promisify.custom")] = g_;
var xf = { exports: {} }, ob;
function b_() {
  return ob || (ob = 1, function(t) {
    var e = (() => {
      var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (b, E, O) => E in b ? r(b, E, { enumerable: !0, configurable: !0, writable: !0, value: O }) : b[E] = O, u = (b, E) => {
        for (var O in E || (E = {}))
          o.call(E, O) && c(b, O, E[O]);
        if (i)
          for (var O of i(E))
            a.call(E, O) && c(b, O, E[O]);
        return b;
      }, f = (b, E) => {
        for (var O in E)
          r(b, O, { get: E[O], enumerable: !0 });
      }, l = (b, E, O, _) => {
        if (E && typeof E == "object" || typeof E == "function")
          for (let I of s(E))
            !o.call(b, I) && I !== O && r(b, I, { get: () => E[I], enumerable: !(_ = n(E, I)) || _.enumerable });
        return b;
      }, d = (b) => l(r({}, "__esModule", { value: !0 }), b), h = (b, E, O) => c(b, typeof E != "symbol" ? E + "" : E, O), m = {};
      f(m, {
        DEFAULT_OPTIONS: () => g,
        DEFAULT_UUID_LENGTH: () => v,
        default: () => x
      });
      var p = "5.3.2", v = 6, g = {
        dictionary: "alphanum",
        shuffle: !0,
        debug: !1,
        length: v,
        counter: 0
      }, y = class {
        constructor(E = {}) {
          h(this, "counter"), h(this, "debug"), h(this, "dict"), h(this, "version"), h(this, "dictIndex", 0), h(this, "dictRange", []), h(this, "lowerBound", 0), h(this, "upperBound", 0), h(this, "dictLength", 0), h(this, "uuidLength"), h(this, "_digit_first_ascii", 48), h(this, "_digit_last_ascii", 58), h(this, "_alpha_lower_first_ascii", 97), h(this, "_alpha_lower_last_ascii", 123), h(this, "_hex_last_ascii", 103), h(this, "_alpha_upper_first_ascii", 65), h(this, "_alpha_upper_last_ascii", 91), h(this, "_number_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii]
          }), h(this, "_alpha_dict_ranges", {
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), h(this, "_alpha_lower_dict_ranges", {
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
          }), h(this, "_alpha_upper_dict_ranges", {
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), h(this, "_alphanum_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), h(this, "_alphanum_lower_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
          }), h(this, "_alphanum_upper_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), h(this, "_hex_dict_ranges", {
            decDigits: [this._digit_first_ascii, this._digit_last_ascii],
            alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
          }), h(this, "_dict_ranges", {
            _number_dict_ranges: this._number_dict_ranges,
            _alpha_dict_ranges: this._alpha_dict_ranges,
            _alpha_lower_dict_ranges: this._alpha_lower_dict_ranges,
            _alpha_upper_dict_ranges: this._alpha_upper_dict_ranges,
            _alphanum_dict_ranges: this._alphanum_dict_ranges,
            _alphanum_lower_dict_ranges: this._alphanum_lower_dict_ranges,
            _alphanum_upper_dict_ranges: this._alphanum_upper_dict_ranges,
            _hex_dict_ranges: this._hex_dict_ranges
          }), h(this, "log", (...S) => {
            const A = [...S];
            if (A[0] = "[short-unique-id] ".concat(S[0]), this.debug === !0 && typeof console < "u" && console !== null) {
              console.log(...A);
              return;
            }
          }), h(this, "_normalizeDictionary", (S, A) => {
            let C;
            if (S && Array.isArray(S) && S.length > 1)
              C = S;
            else {
              C = [], this.dictIndex = 0;
              const V = "_".concat(S, "_dict_ranges"), q = this._dict_ranges[V];
              let Z = 0;
              for (const [, B] of Object.entries(q)) {
                const [M, G] = B;
                Z += Math.abs(G - M);
              }
              C = new Array(Z);
              let se = 0;
              for (const [, B] of Object.entries(q)) {
                this.dictRange = B, this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1];
                const M = this.lowerBound <= this.upperBound, G = this.lowerBound, H = this.upperBound;
                if (M)
                  for (let U = G; U < H; U++)
                    C[se++] = String.fromCharCode(U), this.dictIndex = U;
                else
                  for (let U = G; U > H; U--)
                    C[se++] = String.fromCharCode(U), this.dictIndex = U;
              }
              C.length = se;
            }
            if (A) {
              const V = C.length;
              for (let q = V - 1; q > 0; q--) {
                const Z = Math.floor(Math.random() * (q + 1));
                [C[q], C[Z]] = [C[Z], C[q]];
              }
            }
            return C;
          }), h(this, "setDictionary", (S, A) => {
            this.dict = this._normalizeDictionary(S, A), this.dictLength = this.dict.length, this.setCounter(0);
          }), h(this, "seq", () => this.sequentialUUID()), h(this, "sequentialUUID", () => {
            const S = this.dictLength, A = this.dict;
            let C = this.counter;
            const V = [];
            do {
              const Z = C % S;
              C = Math.trunc(C / S), V.push(A[Z]);
            } while (C !== 0);
            const q = V.join("");
            return this.counter += 1, q;
          }), h(this, "rnd", (S = this.uuidLength || v) => this.randomUUID(S)), h(this, "randomUUID", (S = this.uuidLength || v) => {
            if (S === null || typeof S > "u" || S < 1)
              throw new Error("Invalid UUID Length Provided");
            const A = new Array(S), C = this.dictLength, V = this.dict;
            for (let q = 0; q < S; q++) {
              const Z = Math.floor(Math.random() * C);
              A[q] = V[Z];
            }
            return A.join("");
          }), h(this, "fmt", (S, A) => this.formattedUUID(S, A)), h(this, "formattedUUID", (S, A) => {
            const C = {
              $r: this.randomUUID,
              $s: this.sequentialUUID,
              $t: this.stamp
            };
            return S.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (q) => {
              const Z = q.slice(0, 2), se = Number.parseInt(q.slice(2), 10);
              return Z === "$s" ? C[Z]().padStart(se, "0") : Z === "$t" && A ? C[Z](se, A) : C[Z](se);
            });
          }), h(this, "availableUUIDs", (S = this.uuidLength) => Number.parseFloat(([...new Set(this.dict)].length ** S).toFixed(0))), h(this, "_collisionCache", /* @__PURE__ */ new Map()), h(this, "approxMaxBeforeCollision", (S = this.availableUUIDs(this.uuidLength)) => {
            const A = S, C = this._collisionCache.get(A);
            if (C !== void 0)
              return C;
            const V = Number.parseFloat(Math.sqrt(Math.PI / 2 * S).toFixed(20));
            return this._collisionCache.set(A, V), V;
          }), h(this, "collisionProbability", (S = this.availableUUIDs(this.uuidLength), A = this.uuidLength) => Number.parseFloat(
            (this.approxMaxBeforeCollision(S) / this.availableUUIDs(A)).toFixed(20)
          )), h(this, "uniqueness", (S = this.availableUUIDs(this.uuidLength)) => {
            const A = Number.parseFloat(
              (1 - this.approxMaxBeforeCollision(S) / S).toFixed(20)
            );
            return A > 1 ? 1 : A < 0 ? 0 : A;
          }), h(this, "getVersion", () => this.version), h(this, "stamp", (S, A) => {
            const C = Math.floor(+(A || /* @__PURE__ */ new Date()) / 1e3).toString(16);
            if (typeof S == "number" && S === 0)
              return C;
            if (typeof S != "number" || S < 10)
              throw new Error(
                [
                  "Param finalLength must be a number greater than or equal to 10,",
                  "or 0 if you want the raw hexadecimal timestamp"
                ].join(`
`)
              );
            const V = S - 9, q = Math.round(Math.random() * (V > 15 ? 15 : V)), Z = this.randomUUID(V);
            return "".concat(Z.substring(0, q)).concat(C).concat(Z.substring(q)).concat(q.toString(16));
          }), h(this, "parseStamp", (S, A) => {
            if (A && !/t0|t[1-9]\d{1,}/.test(A))
              throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
            const C = A ? A.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (q) => {
              const Z = {
                $r: (M) => [...Array(M)].map(() => "r").join(""),
                $s: (M) => [...Array(M)].map(() => "s").join(""),
                $t: (M) => [...Array(M)].map(() => "t").join("")
              }, se = q.slice(0, 2), B = Number.parseInt(q.slice(2), 10);
              return Z[se](B);
            }).replace(/^(.*?)(t{8,})(.*)$/g, (q, Z, se) => S.substring(Z.length, Z.length + se.length)) : S;
            if (C.length === 8)
              return new Date(Number.parseInt(C, 16) * 1e3);
            if (C.length < 10)
              throw new Error("Stamp length invalid");
            const V = Number.parseInt(C.substring(C.length - 1), 16);
            return new Date(Number.parseInt(C.substring(V, V + 8), 16) * 1e3);
          }), h(this, "setCounter", (S) => {
            this.counter = S;
          }), h(this, "validate", (S, A) => {
            const C = A ? this._normalizeDictionary(A) : this.dict;
            return S.split("").every((V) => C.includes(V));
          });
          const O = u(u({}, g), E);
          this.counter = 0, this.debug = !1, this.dict = [], this.version = p;
          const { dictionary: _, shuffle: I, length: P, counter: $ } = O;
          this.uuidLength = P, this.setDictionary(_, I), this.setCounter($), this.debug = O.debug, this.log(this.dict), this.log(
            "Generator instantiated with Dictionary Size ".concat(this.dictLength, " and counter set to ").concat(this.counter)
          ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this);
        }
      };
      h(y, "default", y);
      var x = y;
      return d(m);
    })();
    t.exports = e.default, typeof window < "u" && (e = e.default);
  }(xf)), xf.exports;
}
var x_ = b_();
const S_ = /* @__PURE__ */ zi(x_);
class O_ extends Ot {
  constructor(r, n) {
    super(r, n);
    j(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class Mp {
  constructor({
    length: e = 6
  } = {}) {
    j(this, "uuid");
    j(this, "identityMap");
    this.uuid = new S_({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  }
  identify(e) {
    if (!ge(e))
      throw new O_("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
        value: e
      });
    if (e.meta.hasKey("id") && z(e.meta.get("id")) && !e.meta.get("id").equals(""))
      return e.id;
    if (this.identityMap.has(e))
      return this.identityMap.get(e);
    const r = new w.StringElement(this.generateId());
    return this.identityMap.set(e, r), r;
  }
  forget(e) {
    return this.identityMap.has(e) ? (this.identityMap.delete(e), !0) : !1;
  }
  generateId() {
    return this.uuid.randomUUID();
  }
}
new Mp();
class w_ extends Array {
  constructor() {
    super(...arguments);
    j(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new mu("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new mu("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new mu("latest method in MediaTypes class is not yet implemented.");
  }
}
const E_ = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return ge(t) && (t.meta.length > 0 && (n.meta = L(t.meta)), t.attributes.length > 0 && (n.attributes = L(t.attributes))), Rt(n, r, {
    toolboxCreator: lO,
    visitorOptions: {
      nodeTypeGetter: nn
    }
  });
}, at = (t) => (e, r = {}) => E_(e, {
  ...r,
  Type: t
});
w.ObjectElement.refract = at(w.ObjectElement);
w.ArrayElement.refract = at(w.ArrayElement);
w.StringElement.refract = at(w.StringElement);
w.BooleanElement.refract = at(w.BooleanElement);
w.NullElement.refract = at(w.NullElement);
w.NumberElement.refract = at(w.NumberElement);
w.LinkElement.refract = at(w.LinkElement);
w.RefElement.refract = at(w.RefElement);
ti.refract = at(ti);
ri.refract = at(ri);
yt.refract = at(yt);
ni.refract = at(ni);
const A_ = (t, e) => {
  const r = new vO({
    predicate: t
  });
  return Oe(e, r), new w.ArraySlice(r.result);
}, bO = (t, e) => {
  const r = new vO({
    predicate: t,
    returnOnTrue: te
  });
  return Oe(e, r), jS(void 0, [0], r.result);
}, xO = (t) => typeof (t == null ? void 0 : t.type) == "string" ? t.type : nn(t), SO = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...Pt
}, OO = (t, e, {
  keyMap: r = SO,
  ...n
} = {}) => Oe(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: xO,
  nodePredicate: Dt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
OO[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = SO,
  ...r
} = {}) => Oe[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: xO,
  nodePredicate: Dt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class j_ {
  constructor(e) {
    j(this, "type", "EphemeralArray");
    j(this, "content", []);
    j(this, "reference");
    this.content = e, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}
class P_ {
  constructor(e) {
    j(this, "type", "EphemeralObject");
    j(this, "content", []);
    j(this, "reference");
    this.content = e, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
let R_ = class {
  constructor() {
    j(this, "ObjectElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new P_(e.content);
        return this.references.set(e, r), r;
      }
    });
    j(this, "EphemeralObject", {
      leave: (e) => e.toObject()
    });
    j(this, "MemberElement", {
      enter: (e) => [e.key, e.value]
    });
    j(this, "ArrayElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new j_(e.content);
        return this.references.set(e, r), r;
      }
    });
    j(this, "EphemeralArray", {
      leave: (e) => e.toArray()
    });
    j(this, "references", /* @__PURE__ */ new WeakMap());
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
    return z(e.href) ? e.href.toValue() : "";
  }
};
const T = (t) => ge(t) ? z(t) || _p(t) || Un(t) || $p(t) ? t.toValue() : OO(t, new R_()) : t, Fs = (t, e = /* @__PURE__ */ new WeakMap()) => (bt(t) ? (e.set(t.key, t), Fs(t.key, e), e.set(t.value, t), Fs(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), Fs(r, e);
}), e), T_ = (t, e, r) => {
  const n = r.get(t);
  bt(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, __ = (t, e, r) => {
  const n = r.get(t);
  re(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, $_ = (t, e, r) => {
  const n = r.get(t);
  Ne(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class C_ {
  constructor({
    element: e
  }) {
    j(this, "element");
    j(this, "edges");
    this.element = e;
  }
  transclude(e, r) {
    var n;
    if (e === this.element) return r;
    if (e === r) return this.element;
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : Fs(this.element);
    const s = this.edges.get(e);
    if (!er(s))
      return re(s) ? __(e, r, this.edges) : Ne(s) ? $_(e, r, this.edges) : bt(s) && T_(e, r, this.edges), this.element;
  }
}
const I_ = (t, e, r) => new C_({
  element: r
}).transclude(t, e), tr = (t, e) => {
  const r = Hr(t, e);
  return RP((n) => {
    if (mt(n) && gn("$ref", n) && IP(wr, "$ref", n)) {
      const s = Te(["$ref"], n), i = DS("#/", s);
      return Te(i.split("/"), r);
    }
    return mt(n) ? tr(n, r) : n;
  }, t);
}, wO = (t, e = uO) => {
  if (wr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return mt(t) && gn("element", t) ? e.fromRefract(t) : e.toElement(t);
}, si = (t) => {
  const e = t.meta.length > 0 ? L(t.meta) : void 0, r = t.attributes.length > 0 ? L(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, ii = (t, e) => e.clone && e.isMergeableElement(t) ? ot(si(t), t, e) : t, M_ = (t, e) => {
  if (typeof e.customMerge != "function")
    return ot;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : ot;
}, F_ = (t) => typeof t.customMetaMerge != "function" ? (e) => L(e) : t.customMetaMerge, k_ = (t) => typeof t.customAttributesMerge != "function" ? (e) => L(e) : t.customAttributesMerge, N_ = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => ii(n, r)), D_ = (t, e, r) => {
  const n = re(t) ? si(t) : si(e);
  return re(t) && t.forEach((s, i, o) => {
    const a = Pe(o);
    a.value = ii(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = T(i);
    let c;
    if (re(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const u = t.get(a);
      c = Pe(o), c.value = M_(i, r)(u, s, r);
    } else
      c = Pe(o), c.value = ii(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, _s = {
  clone: !0,
  isMergeableElement: (t) => re(t) || Ne(t),
  arrayElementMerge: N_,
  objectElementMerge: D_,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
}, ot = (t, e, r) => {
  var n, s, i;
  const o = {
    ..._s,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : _s.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : _s.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : _s.objectElementMerge;
  const a = Ne(e), c = Ne(t);
  if (!(a === c))
    return ii(e, o);
  const f = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return f.meta = F_(o)(t.meta, e.meta), f.attributes = k_(o)(t.attributes, e.attributes), f;
};
ot.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new w.ObjectElement() : t.reduce((r, n) => ot(r, n, e), si(t[0]));
};
class Fp extends ye {
}
class EO extends Fp {
}
const q_ = async (t, e) => {
  let r = t, n = !1;
  if (!oO(t)) {
    const o = Pe(t);
    o.classes.push("result"), r = new yt([o]), n = !0;
  }
  const s = new Tn({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await Ep("canDereference", [s, e], e.dereference.strategies);
  if (Vn(i))
    throw new EO(s.uri);
  try {
    const {
      result: o
    } = await Ap("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new Fp(`Error while dereferencing file "${s.uri}"`, {
      cause: o
    });
  }
};
let Gn = class {
  constructor({
    name: e,
    allowEmpty: r = !0,
    sourceMap: n = !1,
    fileExtensions: s = [],
    mediaTypes: i = []
  }) {
    j(this, "name");
    /**
     * Whether to allow "empty" files. This includes zero-byte files.
     */
    j(this, "allowEmpty");
    /**
     * Whether to generate source map during parsing.
     */
    j(this, "sourceMap");
    /**
     * List of supported file extensions.
     */
    j(this, "fileExtensions");
    /**
     * List of supported media types.
     */
    j(this, "mediaTypes");
    this.name = e, this.allowEmpty = r, this.sourceMap = n, this.fileExtensions = s, this.mediaTypes = i;
  }
};
class L_ {
  constructor({
    name: e
  }) {
    j(this, "name");
    this.name = e;
  }
}
class V_ extends L_ {
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
    j(this, "timeout");
    j(this, "redirects");
    j(this, "withCredentials");
    this.timeout = s, this.redirects = i, this.withCredentials = o;
  }
  // eslint-disable-next-line class-methods-use-this
  canRead(r) {
    return mo(r.uri);
  }
}
class B_ {
  constructor({
    name: e
  }) {
    j(this, "name");
    this.name = e;
  }
}
class U_ {
  constructor({
    name: e
  }) {
    j(this, "name");
    this.name = e;
  }
}
class Sf extends Array {
  includesCycle(e) {
    return this.filter((r) => r.has(e)).length > 1;
  }
  includes(e, r) {
    return e instanceof Set ? super.includes(e, r) : this.some((n) => n.has(e));
  }
  findItem(e) {
    for (const r of this)
      for (const n of r)
        if (ge(n) && e(n))
          return n;
  }
}
let Ct = class {
  constructor({
    uri: e,
    depth: r = 0,
    refSet: n,
    value: s
  }) {
    j(this, "uri");
    j(this, "depth");
    j(this, "value");
    j(this, "refSet");
    j(this, "errors");
    this.uri = e, this.value = s, this.depth = r, this.refSet = n, this.errors = [];
  }
};
class AO extends ye {
}
class J_ extends AO {
}
class H_ extends ye {
}
class kp extends H_ {
}
class G_ extends AO {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
class Nr extends Fp {
}
class K_ extends jp {
}
class Mt extends Hf {
}
const z_ = async (t, e = {}) => {
  const r = BS(VS, e);
  return q_(t, r);
};
function ab(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function W_(t) {
  if (Array.isArray(t)) return t;
}
function Y_(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function X_(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Q_(t, e, r) {
  return e && X_(t.prototype, e), t;
}
function jO(t, e) {
  return e != null && typeof Symbol < "u" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
}
function Z_(t, e) {
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
function e$() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function t$(t, e) {
  return W_(t) || Z_(t, e) || r$(t, e) || e$();
}
function Dr(t) {
  "@swc/helpers - typeof";
  return t && typeof Symbol < "u" && t.constructor === Symbol ? "symbol" : typeof t;
}
function r$(t, e) {
  if (t) {
    if (typeof t == "string") return ab(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ab(t, e);
  }
}
var PO = function(t) {
  throw TypeError(t);
}, RO = function(t, e, r) {
  return e.has(t) || PO("Cannot " + r);
}, Ue = function(t, e, r) {
  return RO(t, e, "read from private field"), r ? r.call(t) : e.get(t);
}, cb = function(t, e, r) {
  return e.has(t) ? PO("Cannot add the same private member more than once") : jO(e, WeakSet) ? e.add(t) : e.set(t, r);
}, Of = function(t, e, r, n) {
  return RO(t, e, "write to private field"), e.set(t, r), r;
}, sn = function(t) {
  return Object.prototype.toString.call(t);
}, TO = function(t) {
  return ArrayBuffer.isView(t) && !jO(t, DataView);
}, n$ = function(t) {
  return sn(t) === "[object Date]";
}, s$ = function(t) {
  return sn(t) === "[object RegExp]";
}, i$ = function(t) {
  return sn(t) === "[object Error]";
}, o$ = function(t) {
  return sn(t) === "[object Boolean]";
}, a$ = function(t) {
  return sn(t) === "[object Number]";
}, c$ = function(t) {
  return sn(t) === "[object String]";
}, _O = Array.isArray, u$ = Object.getOwnPropertyDescriptor, l$ = Object.prototype.propertyIsEnumerable, f$ = Object.getOwnPropertySymbols, ks = Object.prototype.hasOwnProperty;
function Np(t) {
  for (var e = Object.keys(t), r = f$(t), n = 0; n < r.length; n++)
    l$.call(t, r[n]) && e.push(r[n]);
  return e;
}
function h$(t, e) {
  var r;
  return !(!((r = u$(t, e)) === null || r === void 0) && r.writable);
}
function $O(t, e) {
  if ((typeof t > "u" ? "undefined" : Dr(t)) === "object" && t !== null) {
    var r;
    if (_O(t))
      r = [];
    else if (n$(t))
      r = new Date(t.getTime ? t.getTime() : t);
    else if (s$(t))
      r = new RegExp(t);
    else if (i$(t))
      r = {
        message: t.message
      };
    else if (o$(t) || a$(t) || c$(t))
      r = Object(t);
    else {
      if (TO(t))
        return t.slice();
      r = Object.create(Object.getPrototypeOf(t));
    }
    var n = e.includeSymbols ? Np : Object.keys, s = !0, i = !1, o = void 0;
    try {
      for (var a = n(t)[Symbol.iterator](), c; !(s = (c = a.next()).done); s = !0) {
        var u = c.value;
        r[u] = t[u];
      }
    } catch (f) {
      i = !0, o = f;
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
var CO = {
  includeSymbols: !1,
  immutable: !1
};
function ub(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : CO, n = [], s = [], i = !0, o = r.includeSymbols ? Np : Object.keys, a = !!r.immutable;
  return function c(u) {
    var f = a ? $O(u, r) : u, l = {}, d = !0, h = {
      node: f,
      node_: u,
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
        var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        h.isRoot || (h.parent.node[h.key] = A), h.node = A, C && (d = !1);
      },
      delete: function(A) {
        delete h.parent.node[h.key], A && (d = !1);
      },
      remove: function(A) {
        _O(h.parent.node) ? h.parent.node.splice(h.key, 1) : delete h.parent.node[h.key], A && (d = !1);
      },
      keys: null,
      before: function(A) {
        l.before = A;
      },
      after: function(A) {
        l.after = A;
      },
      pre: function(A) {
        l.pre = A;
      },
      post: function(A) {
        l.post = A;
      },
      stop: function() {
        i = !1;
      },
      block: function() {
        d = !1;
      }
    };
    if (!i)
      return h;
    function m() {
      if (Dr(h.node) === "object" && h.node !== null) {
        (!h.keys || h.node_ !== h.node) && (h.keys = o(h.node)), h.isLeaf = h.keys.length === 0;
        for (var S = 0; S < s.length; S++)
          if (s[S].node_ === u) {
            h.circular = s[S];
            break;
          }
      } else
        h.isLeaf = !0, h.keys = null;
      h.notLeaf = !h.isLeaf, h.notRoot = !h.isRoot;
    }
    m();
    var p = e.call(h, h.node);
    if (p !== void 0 && h.update && h.update(p), l.before && l.before.call(h, h.node), !d)
      return h;
    if (Dr(h.node) === "object" && h.node !== null && !h.circular) {
      s.push(h), m();
      var v, g = !0, y = !1, x = void 0;
      try {
        for (var b = Object.entries((v = h.keys) !== null && v !== void 0 ? v : [])[Symbol.iterator](), E; !(g = (E = b.next()).done); g = !0) {
          var O = t$(E.value, 2), _ = O[0], I = O[1], P;
          n.push(I), l.pre && l.pre.call(h, h.node[I], I);
          var $ = c(h.node[I]);
          a && ks.call(h.node, I) && !h$(h.node, I) && (h.node[I] = $.node), $.isLast = !((P = h.keys) === null || P === void 0) && P.length ? +_ === h.keys.length - 1 : !1, $.isFirst = +_ == 0, l.post && l.post.call(h, $), n.pop();
        }
      } catch (S) {
        y = !0, x = S;
      } finally {
        try {
          !g && b.return != null && b.return();
        } finally {
          if (y)
            throw x;
        }
      }
      s.pop();
    }
    return l.after && l.after.call(h, h.node), h;
  }(t).node;
}
var He, Ut, Tt = /* @__PURE__ */ function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CO;
    Y_(this, t), cb(this, He), cb(this, Ut), Of(this, He, e), Of(this, Ut, r);
  }
  return Q_(t, [
    {
      /**
      * Get the element at the array `path`.
      */
      key: "get",
      value: function(r) {
        for (var n = Ue(this, He), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!ks.call(n, i) || !Ue(this, Ut).includeSymbols && (typeof i > "u" ? "undefined" : Dr(i)) === "symbol")
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
        for (var n = Ue(this, He), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!ks.call(n, i) || !Ue(this, Ut).includeSymbols && (typeof i > "u" ? "undefined" : Dr(i)) === "symbol")
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
        var s = Ue(this, He), i = 0;
        for (i = 0; i < r.length - 1; i++) {
          var o = r[i];
          ks.call(s, o) || (s[o] = {}), s = s[o];
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
        return ub(Ue(this, He), r, {
          immutable: !0,
          includeSymbols: !!Ue(this, Ut).includeSymbols
        });
      }
    },
    {
      /**
      * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
      */
      key: "forEach",
      value: function(r) {
        return Of(this, He, ub(Ue(this, He), r, Ue(this, Ut))), Ue(this, He);
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
        var s = arguments.length === 1, i = s ? Ue(this, He) : n;
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
        var r = [], n = [], s = Ue(this, Ut);
        return TO(Ue(this, He)) ? Ue(this, He).slice() : function i(o) {
          for (var a = 0; a < r.length; a++)
            if (r[a] === o)
              return n[a];
          if ((typeof o > "u" ? "undefined" : Dr(o)) === "object" && o !== null) {
            var c = $O(o, s);
            r.push(o), n.push(c);
            var u = s.includeSymbols ? Np : Object.keys, f = !0, l = !1, d = void 0;
            try {
              for (var h = u(o)[Symbol.iterator](), m; !(f = (m = h.next()).done); f = !0) {
                var p = m.value;
                c[p] = i(o[p]);
              }
            } catch (v) {
              l = !0, d = v;
            } finally {
              try {
                !f && h.return != null && h.return();
              } finally {
                if (l)
                  throw d;
              }
            }
            return r.pop(), n.pop(), c;
          }
          return o;
        }(Ue(this, He));
      }
    }
  ]), t;
}();
He = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
var _t = function(t, e) {
  return new Tt(t, e);
};
_t.get = function(t, e, r) {
  return new Tt(t, r).get(e);
};
_t.set = function(t, e, r, n) {
  return new Tt(t, n).set(e, r);
};
_t.has = function(t, e, r) {
  return new Tt(t, r).has(e);
};
_t.map = function(t, e, r) {
  return new Tt(t, r).map(e);
};
_t.forEach = function(t, e, r) {
  return new Tt(t, r).forEach(e);
};
_t.reduce = function(t, e, r, n) {
  return new Tt(t, n).reduce(e, r);
};
_t.paths = function(t, e) {
  return new Tt(t, e).paths();
};
_t.nodes = function(t, e) {
  return new Tt(t, e).nodes();
};
_t.clone = function(t, e) {
  return new Tt(t, e).clone();
};
var p$ = _t;
const d$ = ["properties"], m$ = ["properties"], y$ = [
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
], v$ = ["schema/example", "items/example"];
function IO(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    d$.indexOf(e) > -1 && m$.indexOf(r) === -1 || y$.indexOf(n) > -1 || v$.some((s) => n.indexOf(s) > -1)
  );
}
function g$(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return p$(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), u = Gf(this.node, n(a));
      i.push(r.replace(c, u));
    }
  }), i;
}
function Gf(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if (mo(s))
    o = Re(s, i);
  else {
    const a = Re(qs, s), u = Re(a, i).replace(qs, "");
    o = i.startsWith("/") ? u : u.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const b$ = /^([a-z]+:\/\/|\/\/)/i;
class zr extends Ot {
}
const $t = {}, lb = /* @__PURE__ */ new WeakMap(), x$ = [
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
], S$ = (t) => x$.some((e) => e(t)), O$ = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (IO(i) || S$(i))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof t != "string")
      return new zr("$ref: must be a string (JSON-Ref)", {
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    const a = FO(t), c = a[0], u = a[1] || "";
    let f;
    try {
      f = o || c ? MO(c, o) : null;
    } catch (p) {
      return Kf(p, {
        pointer: u,
        $ref: t,
        basePath: f,
        fullPath: r
      });
    }
    let l, d;
    if (P$(u, f, i, n) && !s.useCircularStructures) {
      const p = Gf(t, f);
      return t === p ? null : le.replace(r, p);
    }
    if (f == null ? (d = qp(u), l = n.get(d), typeof l > "u" && (l = new zr(`Could not resolve reference: ${t}`, {
      pointer: u,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (l = kO(f, u), l.__value != null ? l = l.__value : l = l.catch((p) => {
      throw Kf(p, {
        pointer: u,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), l instanceof Error)
      return [le.remove(r), l];
    const h = Gf(t, f), m = le.replace(i, l, {
      $$ref: h
    });
    if (f && f !== o)
      return [m, le.context(i, {
        baseDoc: f
      })];
    try {
      if (!R$(n.state, m) || s.useCircularStructures)
        return m;
    } catch {
      return null;
    }
  }
}, Dp = Object.assign(O$, {
  docCache: $t,
  absoluteify: MO,
  clearCache: w$,
  JSONRefError: zr,
  wrapError: Kf,
  getDoc: NO,
  split: FO,
  extractFromDoc: kO,
  fetchJSON: E$,
  extract: zf,
  jsonPointerToArray: qp,
  unescapeJsonPointerToken: DO
});
function MO(t, e) {
  if (!b$.test(t)) {
    if (!e)
      throw new zr(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return Re(e, t);
  }
  return t;
}
function Kf(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new zr(`Could not resolve reference: ${r}`, {
    ...e,
    cause: t
  });
}
function FO(t) {
  return (t + "").split("#");
}
function kO(t, e) {
  const r = $t[t];
  if (r && !le.isPromise(r))
    try {
      const n = zf(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return NO(t).then((n) => zf(e, n));
}
function w$(t) {
  typeof t < "u" ? delete $t[t] : Object.keys($t).forEach((e) => {
    delete $t[e];
  });
}
function NO(t) {
  const e = $t[t];
  return e ? le.isPromise(e) ? e : Promise.resolve(e) : ($t[t] = Dp.fetchJSON(t).then((r) => ($t[t] = r, r)), $t[t]);
}
function E$(t) {
  return fetch(t, {
    headers: {
      Accept: _b
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => Br.load(e));
}
function zf(t, e) {
  const r = qp(t);
  if (r.length < 1)
    return e;
  const n = le.getIn(e, r);
  if (typeof n > "u")
    throw new zr(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function qp(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(DO);
}
function DO(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function qO(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function A$(t) {
  return t.length === 0 ? "" : `/${t.map(qO).join("/")}`;
}
const j$ = (t) => !t || t === "/" || t === "#";
function wf(t, e) {
  if (j$(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function P$(t, e, r, n) {
  let s = lb.get(n);
  s || (s = {}, lb.set(n, s));
  const i = A$(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && wf(a, t))
    return !0;
  let u = "";
  if (r.some((l) => (u = `${u}/${qO(l)}`, s[u] && s[u].some((d) => wf(d, o) || wf(o, d)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function R$(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return le.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const T$ = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (IO(i))
      return;
    if (!Array.isArray(t)) {
      const u = new TypeError("allOf must be an array");
      return u.fullPath = r, u;
    }
    let o = !1, a = s.value;
    if (i.forEach((u) => {
      a && (a = a[u]);
    }), a = {
      ...a
    }, Object.keys(a).length === 0)
      return;
    delete a.allOf;
    const c = [];
    return c.push(n.replace(i, {})), t.forEach((u, f) => {
      if (!n.isObject(u)) {
        if (o)
          return null;
        o = !0;
        const h = new TypeError("Elements in allOf must be objects");
        return h.fullPath = r, c.push(h);
      }
      c.push(n.mergeDeep(i, u));
      const l = r.slice(0, -1), d = g$(u, l, {
        getBaseUrlForNodePath: (h) => n.getContext([...r, f, ...h]).baseDoc,
        specmap: n
      });
      c.push(...d);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, _$ = {
  key: "parameters",
  plugin: (t, e, r, n) => {
    if (Array.isArray(t) && t.length) {
      const s = Object.assign([], t), i = r.slice(0, -1), o = {
        ...le.getIn(n.spec, i)
      };
      for (let a = 0; a < t.length; a += 1) {
        const c = t[a];
        try {
          s[a].default = n.parameterMacro(o, c);
        } catch (u) {
          const f = new Error(u);
          return f.fullPath = r, f;
        }
      }
      return le.replace(r, s);
    }
    return le.replace(r, t);
  }
}, $$ = {
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
    return le.replace(r, s);
  }
};
class C$ {
  constructor(e) {
    this.root = Ef(e || {});
  }
  set(e, r) {
    const n = this.getParent(e, !0);
    if (!n) {
      oi(this.root, r, null);
      return;
    }
    const s = e[e.length - 1], {
      children: i
    } = n;
    if (i[s]) {
      oi(i[s], r, n);
      return;
    }
    i[s] = Ef(r, n);
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
      return !i[s] && r && (i[s] = Ef(null, n)), i[s];
    }, this.root);
  }
}
function Ef(t, e) {
  return oi({
    children: {}
  }, t, e);
}
function oi(t, e, r) {
  return t.value = e || {}, t.protoValue = r ? {
    ...r.protoValue,
    ...t.value
  } : t.value, Object.keys(t.children).forEach((n) => {
    const s = t.children[n];
    t.children[n] = oi(s, s.value, t);
  }), t;
}
const fb = 100, hb = () => {
};
class I$ {
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
      contextTree: new C$(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), le, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, e), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(le.isFunction), this.patches.push(le.add([], this.spec)), this.patches.push(le.context([], this.context)), this.updatePatches(this.patches);
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
    return e[this.pluginProp] ? (s = e, i = e[this.pluginProp]) : le.isFunction(e) ? i = e : le.isObject(e) && (i = o(e)), Object.assign(i.bind(s), {
      pluginName: e.name || r,
      isGenerator: le.isGenerator(i)
    });
    function o(a) {
      const c = (u, f) => Array.isArray(u) ? u.every((l, d) => l === f[d]) : !0;
      return function* (f, l) {
        const d = {};
        for (const [m, p] of f.filter(le.isAdditiveMutation).entries())
          if (m < Cb)
            yield* h(p.value, p.path, p);
          else
            return;
        function* h(m, p, v) {
          if (!le.isObject(m))
            a.key === p[p.length - 1] && (yield a.plugin(m, a.key, p, l));
          else {
            const g = p.length - 1, y = p[g], x = p.indexOf("properties"), b = y === "properties" && g === x, E = l.allowMetaPatches && d[m.$$ref];
            for (const O of Object.keys(m)) {
              const _ = m[O], I = p.concat(O), P = le.isObject(_), $ = m.$$ref;
              if (E || P && (l.allowMetaPatches && $ && c(n, I) && (d[$] = !0), yield* h(_, I, v)), !b && O === a.key) {
                const S = c(n, p);
                (!n || S) && (yield a.plugin(_, O, I, l, v));
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
    le.normalizeArray(e).forEach((r) => {
      if (r instanceof Error) {
        this.errors.push(r);
        return;
      }
      try {
        if (!le.isObject(r)) {
          this.debug("updatePatches", "Got a non-object patch", r);
          return;
        }
        if (this.showDebug && this.allPatches.push(r), le.isPromise(r.value)) {
          this.promisedPatches.push(r), this.promisedPatchThen(r);
          return;
        }
        if (le.isContextPatch(r)) {
          this.setContext(r.path, r.value);
          return;
        }
        le.isMutation(r) && this.updateMutations(r);
      } catch (n) {
        console.error(n), this.errors.push(n);
      }
    });
  }
  updateMutations(e) {
    typeof e.value == "object" && !Array.isArray(e.value) && this.allowMetaPatches && (e.value = {
      ...e.value
    });
    const r = le.applyPatch(this.state, e, {
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
    return le.getIn(this.state, e);
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
    if (e.pluginCount = e.pluginCount || /* @__PURE__ */ new WeakMap(), e.pluginCount.set(r, (e.pluginCount.get(r) || 0) + 1), e.pluginCount[r] > fb)
      return Promise.resolve({
        spec: e.state,
        errors: e.errors.concat(new Error(`We've reached a hard limit of ${fb} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const i = this.promisedPatches.map((o) => o.value);
      return Promise.all(i.map((o) => o.then(hb, hb))).then(() => this.dispatch());
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
      i && (i = le.fullyNormalizeArray(i), e.updatePatches(i, r));
    }
  }
}
function M$(t) {
  return new I$(t).dispatch();
}
const ar = {
  refs: Dp,
  allOf: T$,
  parameters: _$,
  properties: $$
};
async function Lp(t) {
  const {
    spec: e,
    mode: r,
    allowMetaPatches: n = !0,
    pathDiscriminator: s,
    modelPropertyMacro: i,
    parameterMacro: o,
    requestInterceptor: a,
    responseInterceptor: c,
    skipNormalization: u = !1,
    useCircularStructures: f,
    strategies: l
  } = t, d = Bh(t), h = jx(t), m = l.find((v) => v.match(e));
  return p(e);
  async function p(v) {
    d && (ar.refs.docCache[d] = v), ar.refs.fetchJSON = Ax(h, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const g = [ar.refs];
    typeof o == "function" && g.push(ar.parameters), typeof i == "function" && g.push(ar.properties), r !== "strict" && g.push(ar.allOf);
    const y = await M$({
      spec: v,
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
      useCircularStructures: f
    });
    return u || (y.spec = m.normalize(y.spec)), y;
  }
}
const LO = (t) => t.replace(/\W/gi, "_");
function F$(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${LO(t)}`;
}
function Kn(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? LO(t.operationId) : F$(e, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function Vp(t) {
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
      const u = Kn(c, s, a);
      if (u) {
        n[u] ? n[u].push(c) : n[u] = [c];
        const f = n[u];
        if (f.length > 1)
          f.forEach((l, d) => {
            l.__originalOperationId = l.__originalOperationId || l.operationId, l.operationId = `${u}${d + 1}`;
          });
        else if (typeof c.operationId < "u") {
          const l = f[0];
          l.__originalOperationId = l.__originalOperationId || c.operationId, l.operationId = u;
        }
      }
      if (a !== "parameters") {
        const f = [], l = {};
        for (const d in e)
          (d === "produces" || d === "consumes" || d === "security") && (l[d] = e[d], f.push(l));
        if (o && (l.parameters = o, f.push(l)), f.length) {
          for (const d of f)
            for (const h in d)
              if (!Array.isArray(c[h]))
                c[h] = d[h];
              else if (h === "parameters")
                for (const m of d[h])
                  c[h].some((v) => !mt(v) && !mt(m) ? !1 : v === m ? !0 : ["name", "$ref", "$$ref"].some((g) => typeof v[g] == "string" && typeof m[g] == "string" && v[g] === m[g])) || c[h].push(m);
        }
      }
    }
  }
  return e.$$normalized = !0, t;
}
function k$() {
  ar.refs.clearCache();
}
const VO = {
  name: "generic",
  match() {
    return !0;
  },
  normalize(t) {
    const {
      spec: e
    } = Vp({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return Lp(t);
  }
};
async function N$(t) {
  return Lp(t);
}
const BO = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, UO = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Bp = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Up = (t) => UO(t) || Bp(t), JO = {
  name: "openapi-2",
  match(t) {
    return BO(t);
  },
  normalize(t) {
    const {
      spec: e
    } = Vp({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return N$(t);
  }
};
async function D$(t) {
  return Lp(t);
}
const HO = {
  name: "openapi-3-0",
  match(t) {
    return UO(t);
  },
  normalize(t) {
    const {
      spec: e
    } = Vp({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return D$(t);
  }
}, q$ = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = Bh(t), i = jx(t), o = e || await Ax(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((u) => u.match(o)).resolve(a);
}, GO = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return q$(r);
}, L$ = GO({
  strategies: [HO, JO, VO]
}), V$ = async (t, e, r = {}) => {
  const {
    returnEntireTree: n,
    baseDoc: s,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: u,
    strategies: f
  } = r, l = {
    spec: t,
    pathDiscriminator: e,
    baseDoc: s,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: u,
    strategies: f
  }, h = f.find((p) => p.match(t)).normalize(t), m = await L$({
    spec: h,
    ...l,
    allowMetaPatches: !0,
    skipNormalization: !Bp(t)
  });
  return !n && Array.isArray(e) && e.length && (m.spec = e.reduce((p, v) => p == null ? void 0 : p[v], m.spec) || null), m;
}, B$ = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return V$(e, r, s);
}, U$ = (t) => {
  try {
    const e = t.startsWith("#") ? t.slice(1) : t;
    return decodeURIComponent(e);
  } catch {
    return t;
  }
}, nt = (t) => {
  const e = t.indexOf("#"), r = e === -1 ? "#" : t.substring(e);
  return U$(r);
};
function zn() {
  this.grammarObject = "grammarObject", this.rules = [], this.rules[0] = {
    name: "json-pointer",
    lower: "json-pointer",
    index: 0,
    isBkr: !1
  }, this.rules[1] = {
    name: "reference-token",
    lower: "reference-token",
    index: 1,
    isBkr: !1
  }, this.rules[2] = {
    name: "unescaped",
    lower: "unescaped",
    index: 2,
    isBkr: !1
  }, this.rules[3] = {
    name: "escaped",
    lower: "escaped",
    index: 3,
    isBkr: !1
  }, this.rules[4] = {
    name: "array-location",
    lower: "array-location",
    index: 4,
    isBkr: !1
  }, this.rules[5] = {
    name: "array-index",
    lower: "array-index",
    index: 5,
    isBkr: !1
  }, this.rules[6] = {
    name: "array-dash",
    lower: "array-dash",
    index: 6,
    isBkr: !1
  }, this.rules[7] = {
    name: "slash",
    lower: "slash",
    index: 7,
    isBkr: !1
  }, this.udts = [], this.rules[0].opcodes = [], this.rules[0].opcodes[0] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[0].opcodes[1] = {
    type: 2,
    children: [2, 3]
  }, this.rules[0].opcodes[2] = {
    type: 4,
    index: 7
  }, this.rules[0].opcodes[3] = {
    type: 4,
    index: 1
  }, this.rules[1].opcodes = [], this.rules[1].opcodes[0] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[1].opcodes[1] = {
    type: 1,
    children: [2, 3]
  }, this.rules[1].opcodes[2] = {
    type: 4,
    index: 2
  }, this.rules[1].opcodes[3] = {
    type: 4,
    index: 3
  }, this.rules[2].opcodes = [], this.rules[2].opcodes[0] = {
    type: 1,
    children: [1, 2, 3]
  }, this.rules[2].opcodes[1] = {
    type: 5,
    min: 0,
    max: 46
  }, this.rules[2].opcodes[2] = {
    type: 5,
    min: 48,
    max: 125
  }, this.rules[2].opcodes[3] = {
    type: 5,
    min: 127,
    max: 1114111
  }, this.rules[3].opcodes = [], this.rules[3].opcodes[0] = {
    type: 2,
    children: [1, 2]
  }, this.rules[3].opcodes[1] = {
    type: 7,
    string: [126]
  }, this.rules[3].opcodes[2] = {
    type: 1,
    children: [3, 4]
  }, this.rules[3].opcodes[3] = {
    type: 7,
    string: [48]
  }, this.rules[3].opcodes[4] = {
    type: 7,
    string: [49]
  }, this.rules[4].opcodes = [], this.rules[4].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }, this.rules[4].opcodes[1] = {
    type: 4,
    index: 5
  }, this.rules[4].opcodes[2] = {
    type: 4,
    index: 6
  }, this.rules[5].opcodes = [], this.rules[5].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }, this.rules[5].opcodes[1] = {
    type: 6,
    string: [48]
  }, this.rules[5].opcodes[2] = {
    type: 2,
    children: [3, 4]
  }, this.rules[5].opcodes[3] = {
    type: 5,
    min: 49,
    max: 57
  }, this.rules[5].opcodes[4] = {
    type: 3,
    min: 0,
    max: 1 / 0
  }, this.rules[5].opcodes[5] = {
    type: 5,
    min: 48,
    max: 57
  }, this.rules[6].opcodes = [], this.rules[6].opcodes[0] = {
    type: 7,
    string: [45]
  }, this.rules[7].opcodes = [], this.rules[7].opcodes[0] = {
    type: 7,
    string: [47]
  }, this.toString = function() {
    let e = "";
    return e += `; JavaScript Object Notation (JSON) Pointer ABNF syntax
`, e += `; https://datatracker.ietf.org/doc/html/rfc6901
`, e += `json-pointer    = *( slash reference-token ) ; MODIFICATION: surrogate text rule used
`, e += `reference-token = *( unescaped / escaped )
`, e += `unescaped       = %x00-2E / %x30-7D / %x7F-10FFFF
`, e += `                ; %x2F ('/') and %x7E ('~') are excluded from 'unescaped'
`, e += `escaped         = "~" ( "0" / "1" )
`, e += `                ; representing '~' and '/', respectively
`, e += `
`, e += `; https://datatracker.ietf.org/doc/html/rfc6901#section-4
`, e += `array-location  = array-index / array-dash
`, e += `array-index     = %x30 / ( %x31-39 *(%x30-39) )
`, e += `                ; "0", or digits without a leading "0"
`, e += `array-dash      = "-"
`, e += `
`, e += `; Surrogate named rules
`, e += `slash           = "/"
`, e;
  };
}
const ct = function() {
  const e = X, r = Ze, n = this, s = "parser.js: Parser(): ", i = function() {
    this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
      this.state = e.ACTIVE, this.phraseLength = 0;
    };
  };
  n.ast = void 0, n.stats = void 0, n.trace = void 0, n.callbacks = [];
  let o = 0, a = 0, c = 0, u = 0, f = 0, l, d, h, m, p = new i(), v, g, y;
  const x = () => {
    o = 0, a = 0, c = 0, u = 0, f = 0, l = void 0, d = void 0, h = void 0, m = void 0, p.refresh(), v = void 0, g = void 0, y = void 0;
  }, b = () => {
    const B = `${s}initializeCallbacks(): `;
    let M;
    for (v = [], g = [], M = 0; M < l.length; M += 1)
      v[M] = void 0;
    for (M = 0; M < d.length; M += 1)
      g[M] = void 0;
    let G;
    const H = [];
    for (M = 0; M < l.length; M += 1)
      H.push(l[M].lower);
    for (M = 0; M < d.length; M += 1)
      H.push(d[M].lower);
    for (const U in n.callbacks)
      if (n.callbacks.hasOwnProperty(U)) {
        if (M = H.indexOf(U.toLowerCase()), M < 0)
          throw new Error(`${B}syntax callback '${U}' not a rule or udt name`);
        if (G = n.callbacks[U] ? n.callbacks[U] : void 0, typeof G == "function" || G === void 0)
          M < l.length ? v[M] = G : g[M - l.length] = G;
        else
          throw new Error(`${B}syntax callback[${U}] must be function reference or falsy)`);
      }
  };
  n.parse = (B, M, G, H) => {
    const U = `${s}parse(): `;
    x(), m = r.stringToChars(G), l = B.rules, d = B.udts;
    const ie = M.toLowerCase();
    let oe;
    for (const Pr in l)
      if (l.hasOwnProperty(Pr) && ie === l[Pr].lower) {
        oe = l[Pr].index;
        break;
      }
    if (oe === void 0)
      throw new Error(`${U}start rule name '${startRule}' not recognized`);
    b(), n.trace && n.trace.init(l, d, m), n.stats && n.stats.init(l, d), n.ast && n.ast.init(l, d, m), y = H, h = [
      {
        type: e.RNM,
        index: oe
      }
    ], se(0, 0), h = void 0;
    let _e = !1;
    switch (p.state) {
      case e.ACTIVE:
        throw new Error(`${U}final state should never be 'ACTIVE'`);
      case e.NOMATCH:
        _e = !1;
        break;
      case e.EMPTY:
      case e.MATCH:
        p.phraseLength === m.length ? _e = !0 : _e = !1;
        break;
      default:
        throw new Error("unrecognized state");
    }
    return {
      success: _e,
      state: p.state,
      stateName: e.idName(p.state),
      length: m.length,
      matched: p.phraseLength,
      maxMatched: f,
      maxTreeDepth: c,
      nodeHits: u
    };
  };
  const E = (B, M) => {
    const G = h[B];
    for (let H = 0; H < G.children.length && (se(G.children[H], M), p.state === e.NOMATCH); H += 1)
      ;
  }, O = (B, M) => {
    let G, H, U, ie;
    const oe = h[B];
    n.ast && (H = n.ast.getLength()), G = !0, U = M, ie = 0;
    for (let _e = 0; _e < oe.children.length; _e += 1)
      if (se(oe.children[_e], U), p.state === e.NOMATCH) {
        G = !1;
        break;
      } else
        U += p.phraseLength, ie += p.phraseLength;
    G ? (p.state = ie === 0 ? e.EMPTY : e.MATCH, p.phraseLength = ie) : (p.state = e.NOMATCH, p.phraseLength = 0, n.ast && n.ast.setLength(H));
  }, _ = (B, M) => {
    let G, H, U, ie;
    const oe = h[B];
    if (oe.max === 0) {
      p.state = e.EMPTY, p.phraseLength = 0;
      return;
    }
    for (H = M, U = 0, ie = 0, n.ast && (G = n.ast.getLength()); !(H >= m.length || (se(B + 1, H), p.state === e.NOMATCH) || p.state === e.EMPTY || (ie += 1, U += p.phraseLength, H += p.phraseLength, ie === oe.max)); )
      ;
    p.state === e.EMPTY || ie >= oe.min ? (p.state = U === 0 ? e.EMPTY : e.MATCH, p.phraseLength = U) : (p.state = e.NOMATCH, p.phraseLength = 0, n.ast && n.ast.setLength(G));
  }, I = (B, M, G, H) => {
    if (M.phraseLength > G) {
      let U = `${s}opRNM(${B.name}): callback function error: `;
      throw U += `sysData.phraseLength: ${M.phraseLength}`, U += ` must be <= remaining chars: ${G}`, new Error(U);
    }
    switch (M.state) {
      case e.ACTIVE:
        if (!H)
          throw new Error(
            `${s}opRNM(${B.name}): callback function return error. ACTIVE state not allowed.`
          );
        break;
      case e.EMPTY:
        M.phraseLength = 0;
        break;
      case e.MATCH:
        M.phraseLength === 0 && (M.state = e.EMPTY);
        break;
      case e.NOMATCH:
        M.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opRNM(${B.name}): callback function return error. Unrecognized return state: ${M.state}`
        );
    }
  }, P = (B, M) => {
    let G, H, U;
    const ie = h[B], oe = l[ie.index], _e = v[oe.index];
    if (o || (H = n.ast && n.ast.ruleDefined(ie.index), H && (G = n.ast.getLength(), n.ast.down(ie.index, l[ie.index].name))), _e) {
      const Pr = m.length - M;
      _e(p, m, M, y), I(oe, p, Pr, !0), p.state === e.ACTIVE && (U = h, h = oe.opcodes, se(0, M), h = U, _e(p, m, M, y), I(oe, p, Pr, !1));
    } else
      U = h, h = oe.opcodes, se(0, M), h = U;
    o || H && (p.state === e.NOMATCH ? n.ast.setLength(G) : n.ast.up(ie.index, oe.name, M, p.phraseLength));
  }, $ = (B, M) => {
    const G = h[B];
    p.state = e.NOMATCH, M < m.length && G.min <= m[M] && m[M] <= G.max && (p.state = e.MATCH, p.phraseLength = 1);
  }, S = (B, M) => {
    const G = h[B], H = G.string.length;
    if (p.state = e.NOMATCH, M + H <= m.length) {
      for (let U = 0; U < H; U += 1)
        if (m[M + U] !== G.string[U])
          return;
      p.state = e.MATCH, p.phraseLength = H;
    }
  }, A = (B, M) => {
    let G;
    const H = h[B];
    p.state = e.NOMATCH;
    const U = H.string.length;
    if (U === 0) {
      p.state = e.EMPTY;
      return;
    }
    if (M + U <= m.length) {
      for (let ie = 0; ie < U; ie += 1)
        if (G = m[M + ie], G >= 65 && G <= 90 && (G += 32), G !== H.string[ie])
          return;
      p.state = e.MATCH, p.phraseLength = U;
    }
  }, C = (B, M, G) => {
    if (M.phraseLength > G) {
      let H = `${s}opUDT(${B.name}): callback function error: `;
      throw H += `sysData.phraseLength: ${M.phraseLength}`, H += ` must be <= remaining chars: ${G}`, new Error(H);
    }
    switch (M.state) {
      case e.ACTIVE:
        throw new Error(`${s}opUDT(${B.name}) ACTIVE state return not allowed.`);
      case e.EMPTY:
        if (B.empty)
          M.phraseLength = 0;
        else
          throw new Error(`${s}opUDT(${B.name}) may not return EMPTY.`);
        break;
      case e.MATCH:
        if (M.phraseLength === 0)
          if (B.empty)
            M.state = e.EMPTY;
          else
            throw new Error(`${s}opUDT(${B.name}) may not return EMPTY.`);
        break;
      case e.NOMATCH:
        M.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opUDT(${B.name}): callback function return error. Unrecognized return state: ${M.state}`
        );
    }
  }, V = (B, M) => {
    let G, H, U;
    const ie = h[B], oe = d[ie.index];
    p.UdtIndex = oe.index, o || (U = n.ast && n.ast.udtDefined(ie.index), U && (H = l.length + ie.index, G = n.ast.getLength(), n.ast.down(H, oe.name)));
    const _e = m.length - M;
    g[ie.index](p, m, M, y), C(oe, p, _e), o || U && (p.state === e.NOMATCH ? n.ast.setLength(G) : n.ast.up(H, oe.name, M, p.phraseLength));
  }, q = (B, M) => {
    switch (o += 1, se(B + 1, M), o -= 1, p.phraseLength = 0, p.state) {
      case e.EMPTY:
        p.state = e.EMPTY;
        break;
      case e.MATCH:
        p.state = e.EMPTY;
        break;
      case e.NOMATCH:
        p.state = e.NOMATCH;
        break;
      default:
        throw new Error(`opAND: invalid state ${p.state}`);
    }
  }, Z = (B, M) => {
    switch (o += 1, se(B + 1, M), o -= 1, p.phraseLength = 0, p.state) {
      case e.EMPTY:
      case e.MATCH:
        p.state = e.NOMATCH;
        break;
      case e.NOMATCH:
        p.state = e.EMPTY;
        break;
      default:
        throw new Error(`opNOT: invalid state ${p.state}`);
    }
  }, se = (B, M) => {
    const G = `${s}opExecute(): `, H = h[B];
    switch (u += 1, a > c && (c = a), a += 1, p.refresh(), n.trace && n.trace.down(H, M), H.type) {
      case e.ALT:
        E(B, M);
        break;
      case e.CAT:
        O(B, M);
        break;
      case e.REP:
        _(B, M);
        break;
      case e.RNM:
        P(B, M);
        break;
      case e.TRG:
        $(B, M);
        break;
      case e.TBS:
        S(B, M);
        break;
      case e.TLS:
        A(B, M);
        break;
      case e.UDT:
        V(B, M);
        break;
      case e.AND:
        q(B, M);
        break;
      case e.NOT:
        Z(B, M);
        break;
      default:
        throw new Error(`${G}unrecognized operator`);
    }
    o || M + p.phraseLength > f && (f = M + p.phraseLength), n.stats && n.stats.collect(H, p), n.trace && n.trace.up(H, p.state, M, p.phraseLength), a -= 1;
  };
}, Jp = function() {
  const e = "parser.js: Ast()): ", r = X, n = Ze, s = this;
  let i, o, a, c = 0;
  const u = [], f = [], l = [];
  s.callbacks = [], s.init = (h, m, p) => {
    f.length = 0, l.length = 0, c = 0, i = h, o = m, a = p;
    let v;
    const g = [];
    for (v = 0; v < i.length; v += 1)
      g.push(i[v].lower);
    for (v = 0; v < o.length; v += 1)
      g.push(o[v].lower);
    for (c = i.length + o.length, v = 0; v < c; v += 1)
      u[v] = void 0;
    for (const y in s.callbacks)
      if (s.callbacks.hasOwnProperty(y)) {
        const x = y.toLowerCase();
        if (v = g.indexOf(x), v < 0)
          throw new Error(`${e}init: node '${y}' not a rule or udt name`);
        u[v] = s.callbacks[y];
      }
  }, s.ruleDefined = (h) => !!u[h], s.udtDefined = (h) => !!u[i.length + h], s.down = (h, m) => {
    const p = l.length;
    return f.push(p), l.push({
      name: m,
      thisIndex: p,
      thatIndex: void 0,
      state: r.SEM_PRE,
      callbackIndex: h,
      phraseIndex: void 0,
      phraseLength: void 0,
      stack: f.length
    }), p;
  }, s.up = (h, m, p, v) => {
    const g = l.length, y = f.pop();
    return l.push({
      name: m,
      thisIndex: g,
      thatIndex: y,
      state: r.SEM_POST,
      callbackIndex: h,
      phraseIndex: p,
      phraseLength: v,
      stack: f.length
    }), l[y].thatIndex = g, l[y].phraseIndex = p, l[y].phraseLength = v, g;
  }, s.translate = (h) => {
    let m, p;
    for (let v = 0; v < l.length; v += 1)
      p = l[v], m = u[p.callbackIndex], m && (p.state === r.SEM_PRE ? m(r.SEM_PRE, a, p.phraseIndex, p.phraseLength, h) : m && m(r.SEM_POST, a, p.phraseIndex, p.phraseLength, h));
  }, s.setLength = (h) => {
    l.length = h, h > 0 ? f.length = l[h - 1].stack : f.length = 0;
  }, s.getLength = () => l.length;
  function d(h) {
    let m = "";
    for (; h-- > 0; )
      m += " ";
    return m;
  }
  s.toXml = () => {
    let h = "", m = 0;
    return h += `<?xml version="1.0" encoding="utf-8"?>
`, h += `<root nodes="${l.length / 2}" characters="${a.length}">
`, h += `<!-- input string -->
`, h += d(m + 2), h += n.charsToString(a), h += `
`, l.forEach((p) => {
      p.state === r.SEM_PRE ? (m += 1, h += d(m), h += `<node name="${p.name}" index="${p.phraseIndex}" length="${p.phraseLength}">
`, h += d(m + 2), h += n.charsToString(a, p.phraseIndex, p.phraseLength), h += `
`) : (h += d(m), h += `</node><!-- name="${p.name}" -->
`, m -= 1);
    }), h += `</root>
`, h;
  };
}, J$ = function() {
  const e = X, r = Ze, n = "parser.js: Trace(): ";
  let s, i, o, a = "", c = 0;
  const u = 100, f = this, l = (h) => {
    let m = "", p = 0;
    if (h >= 0)
      for (; h--; )
        p += 1, p === 5 ? (m += "|", p = 0) : m += ".";
    return m;
  };
  f.init = (h, m, p) => {
    i = h, o = m, s = p;
  };
  const d = (h) => {
    let m;
    switch (h.type) {
      case e.ALT:
        m = "ALT";
        break;
      case e.CAT:
        m = "CAT";
        break;
      case e.REP:
        h.max === 1 / 0 ? m = `REP(${h.min},inf)` : m = `REP(${h.min},${h.max})`;
        break;
      case e.RNM:
        m = `RNM(${i[h.index].name})`;
        break;
      case e.TRG:
        m = `TRG(${h.min},${h.max})`;
        break;
      case e.TBS:
        h.string.length > 6 ? m = `TBS(${r.charsToString(h.string, 0, 3)}...)` : m = `TBS(${r.charsToString(h.string, 0, 6)})`;
        break;
      case e.TLS:
        h.string.length > 6 ? m = `TLS(${r.charsToString(h.string, 0, 3)}...)` : m = `TLS(${r.charsToString(h.string, 0, 6)})`;
        break;
      case e.UDT:
        m = `UDT(${o[h.index].name})`;
        break;
      case e.AND:
        m = "AND";
        break;
      case e.NOT:
        m = "NOT";
        break;
      default:
        throw new Error(`${n}Trace: opName: unrecognized opcode`);
    }
    return m;
  };
  f.down = (h, m) => {
    const p = l(c), v = Math.min(u, s.length - m);
    let g = r.charsToString(s, m, v);
    v < s.length - m && (g += "..."), g = `${p}|-|[${d(h)}]${g}
`, a += g, c += 1;
  }, f.up = (h, m, p, v) => {
    const g = `${n}trace.up: `;
    c -= 1;
    const y = l(c);
    let x, b, E;
    switch (m) {
      case e.EMPTY:
        E = "|E|", b = "''";
        break;
      case e.MATCH:
        E = "|M|", x = Math.min(u, v), x < v ? b = `'${r.charsToString(s, p, x)}...'` : b = `'${r.charsToString(s, p, x)}'`;
        break;
      case e.NOMATCH:
        E = "|N|", b = "";
        break;
      default:
        throw new Error(`${g} unrecognized state`);
    }
    b = `${y}${E}[${d(h)}]${b}
`, a += b;
  }, f.displayTrace = () => a;
}, H$ = function() {
  const e = X, r = "parser.js: Stats(): ";
  let n, s, i;
  const o = [], a = [], c = [];
  this.init = (v, g) => {
    n = v, s = g, m();
  }, this.collect = (v, g) => {
    p(i, g.state, g.phraseLength), p(o[v.type], g.state, g.phraseLength), v.type === e.RNM && p(a[v.index], g.state, g.phraseLength), v.type === e.UDT && p(c[v.index], g.state, g.phraseLength);
  }, this.displayStats = () => {
    let v = "";
    const g = {
      match: 0,
      empty: 0,
      nomatch: 0,
      total: 0
    }, y = (x, b, E, O, _) => {
      g.match += b, g.empty += E, g.nomatch += O, g.total += _;
      const I = u(b), P = u(E), $ = u(O), S = u(_);
      return `${x} | ${I} | ${P} | ${$} | ${S} |
`;
    };
    return v += `          OPERATOR STATS
`, v += `      |   MATCH |   EMPTY | NOMATCH |   TOTAL |
`, v += y("  ALT", o[e.ALT].match, o[e.ALT].empty, o[e.ALT].nomatch, o[e.ALT].total), v += y("  CAT", o[e.CAT].match, o[e.CAT].empty, o[e.CAT].nomatch, o[e.CAT].total), v += y("  REP", o[e.REP].match, o[e.REP].empty, o[e.REP].nomatch, o[e.REP].total), v += y("  RNM", o[e.RNM].match, o[e.RNM].empty, o[e.RNM].nomatch, o[e.RNM].total), v += y("  TRG", o[e.TRG].match, o[e.TRG].empty, o[e.TRG].nomatch, o[e.TRG].total), v += y("  TBS", o[e.TBS].match, o[e.TBS].empty, o[e.TBS].nomatch, o[e.TBS].total), v += y("  TLS", o[e.TLS].match, o[e.TLS].empty, o[e.TLS].nomatch, o[e.TLS].total), v += y("  UDT", o[e.UDT].match, o[e.UDT].empty, o[e.UDT].nomatch, o[e.UDT].total), v += y("  AND", o[e.AND].match, o[e.AND].empty, o[e.AND].nomatch, o[e.AND].total), v += y("  NOT", o[e.NOT].match, o[e.NOT].empty, o[e.NOT].nomatch, o[e.NOT].total), v += y("TOTAL", g.match, g.empty, g.nomatch, g.total), v;
  }, this.displayHits = (v) => {
    let g = "";
    const y = (x, b, E, O, _) => {
      i.match += x, i.empty += b, i.nomatch += E, i.total += O;
      const I = u(x), P = u(b), $ = u(E), S = u(O);
      return `| ${I} | ${P} | ${$} | ${S} | ${_}
`;
    };
    typeof v == "string" && v.toLowerCase()[0] === "a" ? (a.sort(f), c.sort(f), g += `    RULES/UDTS ALPHABETICALLY
`) : typeof v == "string" && v.toLowerCase()[0] === "i" ? (a.sort(d), c.sort(d), g += `    RULES/UDTS BY INDEX
`) : (a.sort(l), c.sort(l), g += `    RULES/UDTS BY HIT COUNT
`), g += `|   MATCH |   EMPTY | NOMATCH |   TOTAL | NAME
`;
    for (let x = 0; x < a.length; x += 1) {
      let b = a[x];
      b.total && (g += y(b.match, b.empty, b.nomatch, b.total, b.name));
    }
    for (let x = 0; x < c.length; x += 1) {
      let b = c[x];
      b.total && (g += y(b.match, b.empty, b.nomatch, b.total, b.name));
    }
    return g;
  };
  const u = (v) => v < 10 ? `      ${v}` : v < 100 ? `     ${v}` : v < 1e3 ? `    ${v}` : v < 1e4 ? `   ${v}` : v < 1e5 ? `  ${v}` : v < 1e6 ? ` ${v}` : `${v}`, f = (v, g) => v.lower < g.lower ? -1 : v.lower > g.lower ? 1 : 0, l = (v, g) => v.total < g.total ? 1 : v.total > g.total ? -1 : f(v, g), d = (v, g) => v.index < g.index ? -1 : v.index > g.index ? 1 : 0, h = function() {
    this.empty = 0, this.match = 0, this.nomatch = 0, this.total = 0;
  }, m = () => {
    o.length = 0, i = new h(), o[e.ALT] = new h(), o[e.CAT] = new h(), o[e.REP] = new h(), o[e.RNM] = new h(), o[e.TRG] = new h(), o[e.TBS] = new h(), o[e.TLS] = new h(), o[e.UDT] = new h(), o[e.AND] = new h(), o[e.NOT] = new h(), a.length = 0;
    for (let v = 0; v < n.length; v += 1)
      a.push({
        empty: 0,
        match: 0,
        nomatch: 0,
        total: 0,
        name: n[v].name,
        lower: n[v].lower,
        index: n[v].index
      });
    if (s.length > 0) {
      c.length = 0;
      for (let v = 0; v < s.length; v += 1)
        c.push({
          empty: 0,
          match: 0,
          nomatch: 0,
          total: 0,
          name: s[v].name,
          lower: s[v].lower,
          index: s[v].index
        });
    }
  }, p = (v, g) => {
    switch (v.total += 1, g) {
      case e.EMPTY:
        v.empty += 1;
        break;
      case e.MATCH:
        v.match += 1;
        break;
      case e.NOMATCH:
        v.nomatch += 1;
        break;
      default:
        throw new Error(`${r}collect(): incStat(): unrecognized state: ${g}`);
    }
  };
}, Ze = {
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
}, X = {
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
      case X.ALT:
        return "ALT";
      case X.CAT:
        return "CAT";
      case X.REP:
        return "REP";
      case X.RNM:
        return "RNM";
      case X.TRG:
        return "TRG";
      case X.TBS:
        return "TBS";
      case X.TLS:
        return "TLS";
      case X.UDT:
        return "UDT";
      case X.AND:
        return "AND";
      case X.NOT:
        return "NOT";
      case X.ACTIVE:
        return "ACTIVE";
      case X.EMPTY:
        return "EMPTY";
      case X.MATCH:
        return "MATCH";
      case X.NOMATCH:
        return "NOMATCH";
      case X.SEM_PRE:
        return "SEM_PRE";
      case X.SEM_POST:
        return "SEM_POST";
      case X.SEM_OK:
        return "SEM_OK";
      default:
        return "UNRECOGNIZED STATE";
    }
  }
};
class Gt extends Error {
  constructor(e, r = void 0) {
    if (super(e, r), this.name = this.constructor.name, typeof e == "string" && (this.message = e), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(e).stack, r != null && typeof r == "object" && Object.prototype.hasOwnProperty.call(r, "cause") && !("cause" in this)) {
      const {
        cause: n
      } = r;
      this.cause = n, n instanceof Error && "stack" in n && (this.stack = `${this.stack}
CAUSE: ${n.stack}`);
    }
    if (r != null && typeof r == "object") {
      const {
        cause: n,
        ...s
      } = r;
      Object.assign(this, s);
    }
  }
}
class KO extends Gt {
}
const Af = (t) => (e, r, n, s, i) => {
  if (!(typeof i == "object" && i !== null && !Array.isArray(i)))
    throw new KO("parser's user data must be an object");
  if (e === X.SEM_PRE) {
    const o = {
      type: t,
      text: Ze.charsToString(r, n, s),
      start: n,
      length: s,
      children: []
    };
    i.stack.length > 0 ? i.stack[i.stack.length - 1].children.push(o) : i.root = o, i.stack.push(o);
  }
  e === X.SEM_POST && i.stack.pop();
};
class G$ extends Jp {
  constructor() {
    super(), this.callbacks["json-pointer"] = Af("json-pointer"), this.callbacks["reference-token"] = Af("reference-token"), this.callbacks.slash = Af("text");
  }
  getTree() {
    const e = {
      stack: [],
      root: null
    };
    return this.translate(e), delete e.stack, e;
  }
}
const K$ = (t) => {
  if (typeof t != "string")
    throw new TypeError("Reference token must be a string");
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
};
class z$ extends G$ {
  getTree() {
    const {
      root: e
    } = super.getTree();
    return e.children.filter(({
      type: r
    }) => r === "reference-token").map(({
      text: r
    }) => K$(r));
  }
}
class W$ extends Array {
  toString() {
    return this.map((e) => `"${String(e)}"`).join(", ");
  }
}
class Y$ extends J$ {
  inferExpectations() {
    const e = this.displayTrace().split(`
`), r = /* @__PURE__ */ new Set();
    let n = -1;
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      if (i.includes("M|")) {
        const o = i.match(/]'(.*)'$/);
        o && o[1] && (n = s);
      }
      if (s > n) {
        const o = i.match(/N\|\[TLS\(([^)]+)\)]/);
        o && r.add(o[1]);
      }
    }
    return new W$(...r);
  }
}
const X$ = new zn(), Q$ = (t, {
  translator: e = new z$(),
  stats: r = !1,
  trace: n = !1
} = {}) => {
  if (typeof t != "string")
    throw new TypeError("JSON Pointer must be a string");
  try {
    const s = new ct();
    e && (s.ast = e), r && (s.stats = new H$()), n && (s.trace = new Y$());
    const i = s.parse(X$, "json-pointer", t);
    return {
      result: i,
      tree: i.success && e ? s.ast.getTree() : void 0,
      stats: s.stats,
      trace: s.trace
    };
  } catch (s) {
    throw new KO("Unexpected error during JSON Pointer parsing", {
      cause: s,
      jsonPointer: t
    });
  }
};
new zn();
new ct();
new zn();
new ct();
const Z$ = new zn(), eC = new ct(), tC = (t) => {
  if (typeof t != "string") return !1;
  try {
    return eC.parse(Z$, "array-index", t).success;
  } catch {
    return !1;
  }
}, rC = new zn(), nC = new ct(), sC = (t) => {
  if (typeof t != "string") return !1;
  try {
    return nC.parse(rC, "array-dash", t).success;
  } catch {
    return !1;
  }
}, iC = (t) => {
  if (typeof t != "string" && typeof t != "number")
    throw new TypeError("Reference token must be a string or number");
  return String(t).replace(/~/g, "~0").replace(/\//g, "~1");
};
class oC extends Gt {
}
const zO = (t) => {
  if (!Array.isArray(t))
    throw new TypeError("Reference tokens must be a list of strings or numbers");
  try {
    return t.length === 0 ? "" : `/${t.map((e) => {
      if (typeof e != "string" && typeof e != "number")
        throw new TypeError("Reference token must be a string or number");
      return iC(String(e));
    }).join("/")}`;
  } catch (e) {
    throw new oC("Unexpected error during JSON Pointer compilation", {
      cause: e,
      referenceTokens: t
    });
  }
};
var Ke, qr, Lr;
class aC {
  constructor(e, r = {}) {
    fn(this, Ke);
    fn(this, qr);
    fn(this, Lr);
    Rr(this, Ke, e), qe(this, Ke).steps = [], qe(this, Ke).failed = !1, qe(this, Ke).failedAt = -1, qe(this, Ke).message = `JSON Pointer "${r.jsonPointer}" was successfully evaluated against the provided value`, qe(this, Ke).context = {
      ...r,
      realm: r.realm.name
    }, Rr(this, qr, []), Rr(this, Lr, r.realm);
  }
  step({
    referenceToken: e,
    input: r,
    output: n,
    success: s = !0,
    reason: i
  }) {
    const o = qe(this, qr).length;
    qe(this, qr).push(e);
    const a = {
      referenceToken: e,
      referenceTokenPosition: o,
      input: r,
      inputType: qe(this, Lr).isObject(r) ? "object" : qe(this, Lr).isArray(r) ? "array" : "unrecognized",
      output: n,
      success: s
    };
    i && (a.reason = i), qe(this, Ke).steps.push(a), s || (qe(this, Ke).failed = !0, qe(this, Ke).failedAt = o, qe(this, Ke).message = i);
  }
}
Ke = new WeakMap(), qr = new WeakMap(), Lr = new WeakMap();
class WO {
  constructor() {
    j(this, "name", "");
  }
  isArray(e) {
    throw new Gt("Realm.isArray(node) must be implemented in a subclass");
  }
  isObject(e) {
    throw new Gt("Realm.isObject(node) must be implemented in a subclass");
  }
  sizeOf(e) {
    throw new Gt("Realm.sizeOf(node) must be implemented in a subclass");
  }
  has(e, r) {
    throw new Gt("Realm.has(node) must be implemented in a subclass");
  }
  evaluate(e, r) {
    throw new Gt("Realm.evaluate(node) must be implemented in a subclass");
  }
}
class dr extends Gt {
}
class kr extends dr {
}
class cC extends WO {
  constructor() {
    super(...arguments);
    j(this, "name", "json");
  }
  isArray(r) {
    return Array.isArray(r);
  }
  isObject(r) {
    return typeof r == "object" && r !== null && !this.isArray(r);
  }
  sizeOf(r) {
    return this.isArray(r) ? r.length : this.isObject(r) ? Object.keys(r).length : 0;
  }
  has(r, n) {
    if (this.isArray(r)) {
      const s = Number(n), i = s >>> 0;
      if (s !== i)
        throw new kr(`Invalid array index "${n}": index must be an unsinged 32-bit integer`, {
          referenceToken: n,
          currentValue: r,
          realm: this.name
        });
      return i < this.sizeOf(r) && Object.prototype.hasOwnProperty.call(r, s);
    }
    return this.isObject(r) ? Object.prototype.hasOwnProperty.call(r, n) : !1;
  }
  evaluate(r, n) {
    return this.isArray(r) ? r[Number(n)] : r[n];
  }
}
class uC extends dr {
}
class YO extends dr {
}
const lC = (t, e, {
  strictArrays: r = !0,
  strictObjects: n = !0,
  realm: s = new cC(),
  trace: i = !0
} = {}) => {
  const {
    result: o,
    tree: a,
    trace: c
  } = Q$(e, {
    trace: !!i
  }), u = typeof i == "object" && i !== null ? new aC(i, {
    jsonPointer: e,
    referenceTokens: a,
    strictArrays: r,
    strictObjects: n,
    realm: s,
    value: t
  }) : null;
  try {
    let f;
    if (!o.success) {
      let l = `Invalid JSON Pointer: "${e}". Syntax error at position ${o.maxMatched}`;
      throw l += c ? `, expected ${c.inferExpectations()}` : "", new dr(l, {
        jsonPointer: e,
        currentValue: t,
        realm: s.name
      });
    }
    return a.reduce((l, d, h) => {
      if (s.isArray(l)) {
        if (sC(d)) {
          if (r)
            throw new kr(`Invalid array index "-" at position ${h} in "${e}". The "-" token always refers to a nonexistent element during evaluation`, {
              jsonPointer: e,
              referenceTokens: a,
              referenceToken: d,
              referenceTokenPosition: h,
              currentValue: l,
              realm: s.name
            });
          return f = s.evaluate(l, String(s.sizeOf(l))), u == null || u.step({
            referenceToken: d,
            input: l,
            output: f
          }), f;
        }
        if (!tC(d))
          throw new kr(`Invalid array index "${d}" at position ${h} in "${e}": index MUST be "0", or digits without a leading "0"`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: h,
            currentValue: l,
            realm: s.name
          });
        const m = Number(d);
        if (!Number.isSafeInteger(m))
          throw new kr(`Invalid array index "${d}" at position ${h} in "${e}": index must be a safe integer`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: h,
            currentValue: l,
            realm: s.name
          });
        if (!s.has(l, d) && r)
          throw new kr(`Invalid array index "${d}" at position ${h} in "${e}": index not found in array`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: h,
            currentValue: l,
            realm: s.name
          });
        return f = s.evaluate(l, d), u == null || u.step({
          referenceToken: d,
          input: l,
          output: f
        }), f;
      }
      if (s.isObject(l)) {
        if (!s.has(l, d) && n)
          throw new YO(`Invalid object key "${d}" at position ${h} in "${e}": key not found in object`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: h,
            currentValue: l,
            realm: s.name
          });
        return f = s.evaluate(l, d), u == null || u.step({
          referenceToken: d,
          input: l,
          output: f
        }), f;
      }
      throw new uC(`Invalid reference token "${d}" at position ${h} in "${e}": cannot be applied to a non-object/non-array value`, {
        jsonPointer: e,
        referenceTokens: a,
        referenceToken: d,
        referenceTokenPosition: h,
        currentValue: l,
        realm: s.name
      });
    }, t);
  } catch (f) {
    throw u == null || u.step({
      referenceToken: f.referenceToken,
      input: f.currentValue,
      success: !1,
      reason: f.message
    }), f instanceof dr ? f : new dr("Unexpected error during JSON Pointer evaluation", {
      cause: f,
      jsonPointer: e,
      referenceTokens: a
    });
  }
};
class fC extends WO {
  constructor() {
    super(...arguments);
    j(this, "name", "apidom");
  }
  isArray(r) {
    return Ne(r);
  }
  isObject(r) {
    return re(r);
  }
  sizeOf(r) {
    return this.isArray(r) || this.isObject(r) ? r.length : 0;
  }
  has(r, n) {
    if (this.isArray(r)) {
      const s = Number(n), i = s >>> 0;
      if (s !== i)
        throw new kr(`Invalid array index "${n}": index must be an unsinged 32-bit integer`, {
          referenceToken: n,
          currentValue: r,
          realm: this.name
        });
      return i < this.sizeOf(r);
    }
    if (this.isObject(r)) {
      const s = r.keys(), i = new Set(s);
      if (s.length !== i.size)
        throw new YO(`Object key "${n}" is not unique — JSON Pointer requires unique member names`, {
          referenceToken: n,
          currentValue: r,
          realm: this.name
        });
      return r.hasKey(n);
    }
    return !1;
  }
  evaluate(r, n) {
    return this.isArray(r) ? r.get(Number(n)) : r.get(n);
  }
}
const ft = (t, e, r = {}) => lC(t, e, {
  ...r,
  realm: new fC()
});
class Hp extends w_ {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return ao(this.filterByFormat(e));
  }
}
const Wr = new Hp("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
let Wn = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "callback";
  }
}, Yn = class extends w.ObjectElement {
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
}, Xn = class extends w.ObjectElement {
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
}, Qn = class extends w.ObjectElement {
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
}, Po = class extends w.ObjectElement {
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
}, Zn = class extends w.ObjectElement {
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
}, es = class extends w.ObjectElement {
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
}, on = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "header";
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new w.BooleanElement(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new w.BooleanElement(!1);
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
Object.defineProperty(on.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let ts = class extends w.ObjectElement {
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
}, rs = class extends w.ObjectElement {
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
}, ns = class extends w.ObjectElement {
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
    if (z(this.operationRef)) {
      var e;
      return (e = this.operationRef) === null || e === void 0 ? void 0 : e.meta.get("operation");
    }
    if (z(this.operationId)) {
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
}, ss = class extends w.ObjectElement {
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
}, Ro = class extends w.ObjectElement {
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
}, To = class extends w.ObjectElement {
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
}, is = class extends w.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
class _o extends w.ObjectElement {
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
let os = class extends w.ObjectElement {
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
    return this.hasKey("deprecated") ? this.get("deprecated") : new w.BooleanElement(!1);
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
}, an = class extends w.ObjectElement {
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
    return this.hasKey("required") ? this.get("required") : new w.BooleanElement(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new w.BooleanElement(!1);
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
Object.defineProperty(an.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let as = class extends w.ObjectElement {
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
}, cs = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "paths";
  }
}, us = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "reference", this.classes.push("openapi-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}, ls = class extends w.ObjectElement {
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
    return this.hasKey("required") ? this.get("required") : new w.BooleanElement(!1);
  }
  set required(e) {
    this.set("required", e);
  }
}, fs = class extends w.ObjectElement {
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
}, hs = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "responses";
  }
  get default() {
    return this.get("default");
  }
  set default(e) {
    this.set("default", e);
  }
}, cn = class extends w.ObjectElement {
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
};
class un extends w.ObjectElement {
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
class ps extends w.ObjectElement {
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
let ds = class extends w.ObjectElement {
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
};
const hC = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", cn), e.register("jSONReference", un), e.register("media", ps), e.register("linkDescription", ds), e;
  }
}, ms = (t) => {
  if (ge(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, pC = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Pt
};
let XO = class {
  constructor(e) {
    j(this, "element");
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = ot(r.meta, e.meta), Jn(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = ot(r.attributes, e.attributes));
  }
}, ne = class extends XO {
  enter(e) {
    return this.element = L(e), te;
  }
};
const QO = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, _n = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : _n(r, [...e, r]);
}, dC = (...t) => {
  if (t.length === 0)
    return;
  let e;
  const r = t.map((n) => _n(n));
  for (; r.every((n) => n.length > 0); ) {
    const n = r.map((i) => i.pop()), s = n[0];
    if (n.every((i) => i === s))
      e = s;
    else
      break;
  }
  return e;
}, pb = (t, e, r = []) => {
  var n;
  const s = (n = dC(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = _n(s);
  for (let a of t) {
    let c = _n(a);
    for (let u = c.length - 1; u >= 0; u--) {
      let f = c[u];
      o.indexOf(f) === -1 && (QO(i, f, ["constructor", ...r]), o.push(f));
    }
  }
  return i.constructor = e, i;
}, Wf = (t) => t.filter((e, r) => t.indexOf(e) == r), ZO = /* @__PURE__ */ new WeakMap(), mC = (t) => ZO.get(t), yC = (t, e) => ZO.set(t, e), db = (t, e) => {
  var r, n;
  const s = Wf([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = Wf([...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, mb = (t, e) => {
  var r, n, s, i;
  return {
    property: db((r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}, (n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}),
    method: db((s = t == null ? void 0 : t.method) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, vC = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: Wf([...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : []]),
    static: mb((s = t == null ? void 0 : t.static) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: mb((o = t == null ? void 0 : t.instance) !== null && o !== void 0 ? o : {}, (a = e == null ? void 0 : e.instance) !== null && a !== void 0 ? a : {})
  };
}, gC = /* @__PURE__ */ new Map(), bC = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = _n(s.prototype).map((u) => u.constructor), o = (e = mC(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((u) => !r.has(u));
      for (let u of c)
        n.add(u);
      r.add(s), n.delete(s);
    }
  return [...r];
}, xC = (...t) => {
  const e = bC(...t).map((r) => gC.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => vC(r, n));
};
function F(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      QO(this, new c(...a));
  }
  i.prototype = pb(s, i), Object.setPrototypeOf(
    i,
    pb(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = xC(...t);
    for (let c of (e = a == null ? void 0 : a.class) !== null && e !== void 0 ? e : []) {
      const u = c(o);
      u && (o = u);
    }
    yb((r = a == null ? void 0 : a.static) !== null && r !== void 0 ? r : {}, o), yb((n = a == null ? void 0 : a.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return yC(o, t), o;
}
const yb = (t, e) => {
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
let et = class extends XO {
  constructor({
    specObj: r,
    ...n
  }) {
    super({
      ...n
    });
    j(this, "specObj");
    j(this, "passingOptionsNames", ["specObj", "parent"]);
    this.specObj = r;
  }
  retrievePassingOptions() {
    return PS(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = Te(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return uo(Or, ["visitors", ...r], this.specObj) ? Te(["visitors", ...r], this.specObj) : Te(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof ne && (i == null ? void 0 : i.constructor) === ne ? L(n) : (Oe(n, i, s), i.element);
  }
}, yr = class extends et {
  constructor({
    specPath: r,
    ignoredFields: n,
    ...s
  }) {
    super({
      ...s
    });
    j(this, "specPath");
    j(this, "ignoredFields");
    this.specPath = r, this.ignoredFields = n || [];
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (z(o) && s.includes(T(o)) && !this.ignoredFields.includes(T(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", T(o)], i), u = new w.MemberElement(L(o), c);
        this.copyMetaAndAttributes(a, u), u.classes.push("fixed-field"), this.element.content.push(u);
      } else this.ignoredFields.includes(T(o)) || this.element.content.push(L(a));
    }), this.copyMetaAndAttributes(r, this.element), te;
  }
};
class we {
  constructor({
    parent: e
  }) {
    j(this, "parent");
    this.parent = e;
  }
}
const ew = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof cn || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), Gp = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof un || t(n) && e("JSONReference", n) && r("object", n)), tw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ps || t(n) && e("media", n) && r("object", n)), SC = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ds || t(n) && e("linkDescription", n) && r("object", n)), OC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Gp,
  isJSONSchemaElement: ew,
  isLinkDescriptionElement: SC,
  isMediaElement: tw
}, Symbol.toStringTag, { value: "Module" }));
let rw = class extends F(yr, we, ne) {
  constructor(e) {
    super(e), this.element = new cn(), this.specPath = K(["document", "objects", "JSONSchema"]);
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-04/schema#";
  }
  ObjectElement(e) {
    return this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element, yr.prototype.ObjectElement.call(this, e);
  }
  handleDialectIdentifier(e) {
    if (er(this.parent) && !z(e.get("$schema")))
      this.element.setMetaProperty("inheritedDialectIdentifier", this.defaultDialectIdentifier);
    else if (ew(this.parent) && !z(e.get("$schema"))) {
      const r = Hr(T(this.parent.meta.get("inheritedDialectIdentifier")), T(this.parent.$schema));
      this.element.setMetaProperty("inheritedDialectIdentifier", r);
    }
  }
  handleSchemaIdentifier(e, r = "id") {
    const n = this.parent !== void 0 ? L(this.parent.getMetaProperty("ancestorsSchemaIdentifiers", [])) : new w.ArrayElement(), s = T(e.get(r));
    fo(s) && n.push(s), this.element.setMetaProperty("ancestorsSchemaIdentifiers", n);
  }
};
const wt = (t) => re(t) && t.hasKey("$ref");
let nw = class extends F(et, we, ne) {
  ObjectElement(e) {
    const r = wt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), te;
  }
  ArrayElement(e) {
    return this.element = new w.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = wt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
};
class wC extends ne {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
let EC = class extends et {
  constructor({
    specPath: r,
    ignoredFields: n,
    fieldPatternPredicate: s,
    ...i
  }) {
    super({
      ...i
    });
    j(this, "specPath");
    j(this, "ignoredFields");
    j(this, "fieldPatternPredicate", ap);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (!this.ignoredFields.includes(T(s)) && this.fieldPatternPredicate(T(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new w.MemberElement(L(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(T(s)) || this.element.content.push(L(i));
    }), this.copyMetaAndAttributes(r, this.element), te;
  }
}, rr = class extends EC {
  constructor(e) {
    super(e), this.fieldPatternPredicate = fo;
  }
}, AC = class extends F(rr, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => wt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}, jC = class extends F(rr, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => wt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
class PC extends F(rr, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => wt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
class RC extends ne {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
let TC = class extends ne {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}, _C = class extends F(et, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = wt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}, $C = class extends F(et, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = wt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}, CC = class extends F(et, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = wt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
};
class IC extends F(rr, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => wt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let MC = class extends F(et, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-links");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "LinkDescription"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
};
class FC extends F(yr, ne) {
  constructor(e) {
    super(e), this.element = new un(), this.specPath = K(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = yr.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
let kC = class extends ne {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, NC = class extends et {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    j(this, "alternator");
    this.alternator = r;
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => vp(i, K(o), lo)), s = NS(n)(r);
    return this.element = this.toRefractedElement(s, r), te;
  }
}, _r = class extends NC {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: wt,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: Dt,
      specPath: ["document", "objects", "JSONSchema"]
    }];
  }
};
class DC extends F(yr, ne) {
  constructor(e) {
    super(e), this.element = new ps(), this.specPath = K(["document", "objects", "Media"]);
  }
}
let sw = class extends F(yr, ne) {
  constructor(e) {
    super(e), this.element = new ds(), this.specPath = K(["document", "objects", "LinkDescription"]);
  }
};
const Me = {
  visitors: {
    value: ne,
    JSONSchemaOrJSONReferenceVisitor: _r,
    document: {
      objects: {
        JSONSchema: {
          $visitor: rw,
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
            additionalItems: _r,
            items: nw,
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
            required: wC,
            properties: AC,
            additionalProperties: _r,
            patternProperties: jC,
            dependencies: PC,
            // validation keywords for any instance type
            enum: RC,
            type: TC,
            allOf: _C,
            anyOf: $C,
            oneOf: CC,
            not: _r,
            definitions: IC,
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
            links: MC,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: FC,
          fixedFields: {
            $ref: kC
          }
        },
        Media: {
          $visitor: DC,
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
          $visitor: sw,
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
            targetSchema: _r,
            mediaType: {
              $ref: "#/visitors/value"
            },
            method: {
              $ref: "#/visitors/value"
            },
            encType: {
              $ref: "#/visitors/value"
            },
            schema: _r
          }
        }
      }
    }
  }
}, qC = () => {
  const t = Vt(hC);
  return {
    predicates: {
      ...OC,
      isStringElement: z
    },
    namespace: t
  };
}, LC = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Me
} = {}) => {
  const s = w.refract(t), i = tr(n), o = Te(e, i), a = new o({
    specObj: i
  });
  return Oe(s, a), Rt(a.element, r, {
    toolboxCreator: qC,
    visitorOptions: {
      keyMap: pC,
      nodeTypeGetter: ms
    }
  });
}, $o = (t) => (e, r = {}) => LC(e, {
  specPath: t,
  ...r
});
cn.refract = $o(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
un.refract = $o(["visitors", "document", "objects", "JSONReference", "$visitor"]);
ps.refract = $o(["visitors", "document", "objects", "Media", "$visitor"]);
ds.refract = $o(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let Co = class extends cn {
  constructor(e, r, n) {
    super(e, r, n), this.element = "schema", this.classes.push("json-schema-draft-4");
  }
  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    throw new ee("idProp getter in Schema class is not not supported.");
  }
  set idProp(e) {
    throw new ee("idProp setter in Schema class is not not supported.");
  }
  get $schema() {
    throw new ee("$schema getter in Schema class is not not supported.");
  }
  set $schema(e) {
    throw new ee("$schema setter in Schema class is not not supported.");
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
    throw new ee("patternProperties getter in Schema class is not not supported.");
  }
  set patternProperties(e) {
    throw new ee("patternProperties setter in Schema class is not not supported.");
  }
  get dependencies() {
    throw new ee("dependencies getter in Schema class is not not supported.");
  }
  set dependencies(e) {
    throw new ee("dependencies setter in Schema class is not not supported.");
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
    throw new ee("definitions getter in Schema class is not not supported.");
  }
  set definitions(e) {
    throw new ee("definitions setter in Schema class is not not supported.");
  }
  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */
  get base() {
    throw new ee("base getter in Schema class is not not supported.");
  }
  set base(e) {
    throw new ee("base setter in Schema class is not not supported.");
  }
  get links() {
    throw new ee("links getter in Schema class is not not supported.");
  }
  set links(e) {
    throw new ee("links setter in Schema class is not not supported.");
  }
  get media() {
    throw new ee("media getter in Schema class is not not supported.");
  }
  set media(e) {
    throw new ee("media setter in Schema class is not not supported.");
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
}, ys = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "securityRequirement";
  }
}, vs = class extends w.ObjectElement {
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
}, gs = class extends w.ObjectElement {
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
}, bs = class extends w.ObjectElement {
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
}, Io = class extends w.ObjectElement {
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
}, Mo = class extends w.ObjectElement {
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
const VC = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Wn), e.register("components", Yn), e.register("contact", Xn), e.register("discriminator", Qn), e.register("encoding", Po), e.register("example", Zn), e.register("externalDocumentation", es), e.register("header", on), e.register("info", ts), e.register("license", rs), e.register("link", ns), e.register("mediaType", ss), e.register("oAuthFlow", Ro), e.register("oAuthFlows", To), e.register("openapi", is), e.register("openApi3_0", _o), e.register("operation", os), e.register("parameter", an), e.register("pathItem", as), e.register("paths", cs), e.register("reference", us), e.register("requestBody", ls), e.register("response", fs), e.register("responses", hs), e.register("schema", Co), e.register("securityRequirement", ys), e.register("securityScheme", vs), e.register("server", gs), e.register("serverVariable", bs), e.register("tag", Io), e.register("xml", Mo), e;
  }
}, fi = class fi extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(fi.primaryClass);
  }
};
j(fi, "primaryClass", "servers");
let ai = fi;
const hi = class hi extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(hi.primaryClass);
  }
};
j(hi, "primaryClass", "security");
let Yf = hi;
const pi = class pi extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(pi.primaryClass);
  }
};
j(pi, "primaryClass", "tags");
let Xf = pi;
const di = class di extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(di.primaryClass);
  }
};
j(di, "primaryClass", "server-variables");
let Qf = di;
const mi = class mi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(mi.primaryClass);
  }
};
j(mi, "primaryClass", "components-schemas");
let ci = mi;
const yi = class yi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(yi.primaryClass);
  }
};
j(yi, "primaryClass", "components-responses");
let Zf = yi;
const vi = class vi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(vi.primaryClass), this.classes.push("parameters");
  }
};
j(vi, "primaryClass", "components-parameters");
let eh = vi;
const gi = class gi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(gi.primaryClass), this.classes.push("examples");
  }
};
j(gi, "primaryClass", "components-examples");
let th = gi;
const bi = class bi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(bi.primaryClass);
  }
};
j(bi, "primaryClass", "components-request-bodies");
let rh = bi;
const xi = class xi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(xi.primaryClass);
  }
};
j(xi, "primaryClass", "components-headers");
let nh = xi;
const Si = class Si extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Si.primaryClass);
  }
};
j(Si, "primaryClass", "components-security-schemes");
let sh = Si;
const Oi = class Oi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Oi.primaryClass);
  }
};
j(Oi, "primaryClass", "components-links");
let ih = Oi;
const wi = class wi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(wi.primaryClass);
  }
};
j(wi, "primaryClass", "components-callbacks");
let oh = wi;
const Ei = class Ei extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ei.primaryClass), this.classes.push("servers");
  }
};
j(Ei, "primaryClass", "path-item-servers");
let ah = Ei;
const Ai = class Ai extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ai.primaryClass), this.classes.push("parameters");
  }
};
j(Ai, "primaryClass", "path-item-parameters");
let ch = Ai;
const ji = class ji extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ji.primaryClass), this.classes.push("parameters");
  }
};
j(ji, "primaryClass", "operation-parameters");
let ui = ji;
const Pi = class Pi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Pi.primaryClass), this.classes.push("examples");
  }
};
j(Pi, "primaryClass", "parameter-examples");
let uh = Pi;
const Ri = class Ri extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ri.primaryClass), this.classes.push("content");
  }
};
j(Ri, "primaryClass", "parameter-content");
let lh = Ri;
const Ti = class Ti extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ti.primaryClass);
  }
};
j(Ti, "primaryClass", "operation-tags");
let fh = Ti;
const _i = class _i extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(_i.primaryClass);
  }
};
j(_i, "primaryClass", "operation-callbacks");
let hh = _i;
const $i = class $i extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push($i.primaryClass), this.classes.push("security");
  }
};
j($i, "primaryClass", "operation-security");
let li = $i;
const Ci = class Ci extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ci.primaryClass), this.classes.push("servers");
  }
};
j(Ci, "primaryClass", "operation-servers");
let ph = Ci;
const Ii = class Ii extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ii.primaryClass), this.classes.push("content");
  }
};
j(Ii, "primaryClass", "request-body-content");
let dh = Ii;
const Mi = class Mi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Mi.primaryClass), this.classes.push("examples");
  }
};
j(Mi, "primaryClass", "media-type-examples");
let mh = Mi;
const Fi = class Fi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Fi.primaryClass);
  }
};
j(Fi, "primaryClass", "media-type-encoding");
let yh = Fi;
const ki = class ki extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ki.primaryClass);
  }
};
j(ki, "primaryClass", "encoding-headers");
let vh = ki;
const Ni = class Ni extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ni.primaryClass);
  }
};
j(Ni, "primaryClass", "response-headers");
let gh = Ni;
const Di = class Di extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Di.primaryClass), this.classes.push("content");
  }
};
j(Di, "primaryClass", "response-content");
let bh = Di;
const qi = class qi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(qi.primaryClass);
  }
};
j(qi, "primaryClass", "response-links");
let xh = qi;
const Li = class Li extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Li.primaryClass);
  }
};
j(Li, "primaryClass", "discriminator-mapping");
let Sh = Li;
const Vi = class Vi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Vi.primaryClass);
  }
};
j(Vi, "primaryClass", "oauth-flow-scopes");
let Oh = Vi;
const Bi = class Bi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Bi.primaryClass);
  }
};
j(Bi, "primaryClass", "link-parameters");
let wh = Bi;
const Ui = class Ui extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ui.primaryClass), this.classes.push("examples");
  }
};
j(Ui, "primaryClass", "header-examples");
let Eh = Ui;
const Ji = class Ji extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ji.primaryClass), this.classes.push("content");
  }
};
j(Ji, "primaryClass", "header-content");
let Ah = Ji;
const BC = (t) => {
  if (ge(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, UC = {
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
  ...Pt
};
class iw {
  constructor(e = {}) {
    j(this, "element");
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = ot(r.meta, e.meta), Jn(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = ot(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
class D extends iw {
  enter(e) {
    return this.element = L(e), te;
  }
}
class xt extends iw {
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
    j(this, "specObj");
    j(this, "passingOptionsNames", ["specObj", "openApiGenericElement", "openApiSemanticElement"]);
    j(this, "openApiGenericElement");
    j(this, "openApiSemanticElement");
    this.specObj = r, this.openApiGenericElement = s, this.openApiSemanticElement = i, Array.isArray(n) && (this.passingOptionsNames = n);
  }
  retrievePassingOptions() {
    return PS(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = Te(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return uo(Or, ["visitors", ...r], this.specObj) ? Te(["visitors", ...r], this.specObj) : Te(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof D && (i == null ? void 0 : i.constructor) === D ? L(n) : (Oe(n, i, s), i.element);
  }
}
const de = (t) => re(t) && t.hasKey("$ref"), JC = re, HC = re, ow = (t) => z(t.key) && NP("x-", T(t.key));
class Q extends xt {
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
    j(this, "specPath");
    j(this, "ignoredFields");
    j(this, "canSupportSpecificationExtensions", !0);
    j(this, "specificationExtensionPredicate", ow);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "boolean" && (this.canSupportSpecificationExtensions = s), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (z(o) && s.includes(T(o)) && !this.ignoredFields.includes(T(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", T(o)], i), u = new w.MemberElement(L(o), c);
        this.copyMetaAndAttributes(a, u), u.classes.push("fixed-field"), this.element.content.push(u);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(a)) {
        const c = this.toRefractedElement(["document", "extension"], a);
        this.element.content.push(c);
      } else this.ignoredFields.includes(T(o)) || this.element.content.push(L(a));
    }), this.copyMetaAndAttributes(r, this.element), te;
  }
}
class GC extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new _o(), this.specPath = K(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return Q.prototype.ObjectElement.call(this, e);
  }
}
class KC extends F(xt, D) {
  StringElement(e) {
    const r = new is(T(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, te;
  }
}
class zC extends xt {
  MemberElement(e) {
    return this.element = L(e), this.element.classes.push("specification-extension"), te;
  }
}
let WC = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new ts(), this.specPath = K(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
class YC extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
let XC = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Xn(), this.specPath = K(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
}, QC = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new rs(), this.specPath = K(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
}, ZC = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new ns(), this.specPath = K(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return (z(this.element.operationId) || z(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
class eI extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class tI extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class Yr extends xt {
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
    j(this, "specPath");
    j(this, "ignoredFields");
    j(this, "fieldPatternPredicate", ap);
    j(this, "canSupportSpecificationExtensions", !1);
    j(this, "specificationExtensionPredicate", ow);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s), typeof i == "boolean" && (this.canSupportSpecificationExtensions = i), typeof o == "function" && (this.specificationExtensionPredicate = o);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
        const o = this.toRefractedElement(["document", "extension"], i);
        this.element.content.push(o);
      } else if (!this.ignoredFields.includes(T(s)) && this.fieldPatternPredicate(T(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new w.MemberElement(L(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(T(s)) || this.element.content.push(L(i));
    }), this.copyMetaAndAttributes(r, this.element), te;
  }
}
class Y extends Yr {
  constructor(e) {
    super(e), this.fieldPatternPredicate = fo;
  }
}
let rI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new wh(), this.specPath = K(["value"]);
  }
}, nI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new gs(), this.specPath = K(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
class sI extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
let Kp = class extends F(xt, D) {
  constructor(e) {
    super(e), this.element = new ai();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = JC(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}, iI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new bs(), this.specPath = K(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
class oI extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Qf(), this.specPath = K(["document", "objects", "ServerVariable"]);
  }
}
let aI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new ss(), this.specPath = K(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
class Et extends xt {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    j(this, "alternator");
    this.alternator = r || [];
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => vp(i, K(o), lo)), s = NS(n)(r);
    return this.element = this.toRefractedElement(s, r), te;
  }
}
const cI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wn || t(n) && e("callback", n) && r("object", n)), uI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Yn || t(n) && e("components", n) && r("object", n)), lI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xn || t(n) && e("contact", n) && r("object", n)), fI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zn || t(n) && e("example", n) && r("object", n)), hI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof es || t(n) && e("externalDocumentation", n) && r("object", n)), ln = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof on || t(n) && e("header", n) && r("object", n)), pI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ts || t(n) && e("info", n) && r("object", n)), dI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof rs || t(n) && e("license", n) && r("object", n)), mI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ns || t(n) && e("link", n) && r("object", n)), yI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof is || t(n) && e("openapi", n) && r("string", n)), vI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof _o || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), aw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof os || t(n) && e("operation", n) && r("object", n)), gI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof an || t(n) && e("parameter", n) && r("object", n)), zp = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof as || t(n) && e("pathItem", n) && r("object", n)), bI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof cs || t(n) && e("paths", n) && r("object", n)), pe = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof us || t(n) && e("reference", n) && r("object", n)), xI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ls || t(n) && e("requestBody", n) && r("object", n)), Fo = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fs || t(n) && e("response", n) && r("object", n)), SI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hs || t(n) && e("responses", n) && r("object", n)), OI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Co || t(n) && e("schema", n) && r("object", n)), wI = (t) => Un(t) && t.classes.includes("boolean-json-schema"), EI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ys || t(n) && e("securityRequirement", n) && r("object", n)), AI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vs || t(n) && e("securityScheme", n) && r("object", n)), jI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gs || t(n) && e("server", n) && r("object", n)), PI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof bs || t(n) && e("serverVariable", n) && r("object", n)), ko = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ss || t(n) && e("mediaType", n) && r("object", n)), cw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof ai || t(s) && e("array", s) && r("array", s) && n("servers", s)), RI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qn || t(n) && e("discriminator", n) && r("object", n)), TI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: wI,
  isCallbackElement: cI,
  isComponentsElement: uI,
  isContactElement: lI,
  isDiscriminatorElement: RI,
  isExampleElement: fI,
  isExternalDocumentationElement: hI,
  isHeaderElement: ln,
  isInfoElement: pI,
  isLicenseElement: dI,
  isLinkElement: mI,
  isMediaTypeElement: ko,
  isOpenApi3_0Element: vI,
  isOpenapiElement: yI,
  isOperationElement: aw,
  isParameterElement: gI,
  isPathItemElement: zp,
  isPathsElement: bI,
  isReferenceElement: pe,
  isRequestBodyElement: xI,
  isResponseElement: Fo,
  isResponsesElement: SI,
  isSchemaElement: OI,
  isSecurityRequirementElement: EI,
  isSecuritySchemeElement: AI,
  isServerElement: jI,
  isServerVariableElement: PI,
  isServersElement: cw
}, Symbol.toStringTag, { value: "Module" }));
let _I = class extends F(Et, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: de,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Dt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = Et.prototype.enter.call(this, e);
    return pe(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, Wp = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("examples"), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, $I = class extends Wp {
  constructor(e) {
    super(e), this.element = new mh();
  }
}, CI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new yh(), this.specPath = K(["document", "objects", "Encoding"]);
  }
}, II = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new ys(), this.specPath = K(["value"]);
  }
}, MI = class extends F(xt, D) {
  constructor(e) {
    super(e), this.element = new Yf();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (re(r)) {
        const n = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(n);
      } else
        this.element.push(L(r));
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}, FI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Yn(), this.specPath = K(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
}, kI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Io(), this.specPath = K(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
}, NI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new us(), this.specPath = K(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}, DI = class extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, qI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new an(), this.specPath = K(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return re(this.element.contentProp) && this.element.contentProp.filter(ko).forEach((n, s) => {
      n.setMetaProperty("media-type", T(s));
    }), r;
  }
}, LI = class extends F(Et, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: de,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Dt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = Et.prototype.enter.call(this, e);
    return pe(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, VI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new on(), this.specPath = K(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
}, BI = class extends F(Et, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: de,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Dt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = Et.prototype.enter.call(this, e);
    return pe(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, UI = class extends Wp {
  constructor(e) {
    super(e), this.element = new Eh();
  }
}, No = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("content"), this.specPath = K(["document", "objects", "MediaType"]);
  }
}, JI = class extends No {
  constructor(e) {
    super(e), this.element = new Ah();
  }
}, HI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Co(), this.specPath = K(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const vb = Me.visitors.document.objects.JSONSchema.fixedFields.allOf;
let GI = class extends vb {
  ArrayElement(e) {
    const r = vb.prototype.ArrayElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const gb = Me.visitors.document.objects.JSONSchema.fixedFields.anyOf;
let KI = class extends gb {
  ArrayElement(e) {
    const r = gb.prototype.ArrayElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const bb = Me.visitors.document.objects.JSONSchema.fixedFields.oneOf;
let zI = class extends bb {
  ArrayElement(e) {
    const r = bb.prototype.ArrayElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const xb = Me.visitors.document.objects.JSONSchema.fixedFields.items;
let WI = class extends xb {
  ObjectElement(e) {
    const r = xb.prototype.ObjectElement.call(this, e);
    return pe(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
};
const Sb = Me.visitors.document.objects.JSONSchema.fixedFields.properties;
let YI = class extends Sb {
  ObjectElement(e) {
    const r = Sb.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const XI = Me.visitors.document.objects.JSONSchema.fixedFields.type;
class QI extends XI {
  ArrayElement(e) {
    return this.enter(e);
  }
}
const Ob = Me.visitors.JSONSchemaOrJSONReferenceVisitor;
class wb extends Ob {
  ObjectElement(e) {
    const r = Ob.prototype.enter.call(this, e);
    return pe(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
let ZI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Qn(), this.specPath = K(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
class eM extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Sh(), this.specPath = K(["value"]);
  }
}
let tM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Mo(), this.specPath = K(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
}, rM = class extends Wp {
  constructor(e) {
    super(e), this.element = new uh();
  }
}, nM = class extends No {
  constructor(e) {
    super(e), this.element = new lh();
  }
}, sM = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new ci(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
}, iM = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Zf(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Fo).forEach((n, s) => {
      n.setMetaProperty("http-status-code", T(s));
    }), r;
  }
}, oM = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new eh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
}, aM = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new th(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
class cM extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new rh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
let uM = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new nh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.filter(ln).forEach((n, s) => {
      n.setMetaProperty("header-name", T(s));
    }), r;
  }
};
class lM extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new sh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
let fM = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new ih(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}, hM = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new oh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}, pM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Zn(), this.specPath = K(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return z(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
class dM extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let mM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new es(), this.specPath = K(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
}, yM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Po(), this.specPath = K(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return re(this.element.headers) && this.element.headers.filter(ln).forEach((n, s) => {
      n.setMetaProperty("header-name", T(s));
    }), r;
  }
}, vM = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new vh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!ln(n)) return;
      const i = T(s);
      n.setMetaProperty("headerName", i);
    }), r;
  }
}, gM = class extends F(Yr, D) {
  constructor(e) {
    super(e), this.element = new cs(), this.specPath = K(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = Dt;
  }
  ObjectElement(e) {
    const r = Yr.prototype.ObjectElement.call(this, e);
    return this.element.filter(zp).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", L(s));
    }), r;
  }
}, bM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new ls(), this.specPath = K(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return re(this.element.contentProp) && this.element.contentProp.filter(ko).forEach((n, s) => {
      n.setMetaProperty("media-type", T(s));
    }), r;
  }
}, xM = class extends No {
  constructor(e) {
    super(e), this.element = new dh();
  }
}, SM = class extends F(Yr, D) {
  constructor(e) {
    super(e), this.element = new Wn(), this.specPath = K(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(zp).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", T(s));
    }), r;
  }
}, OM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new fs(), this.specPath = K(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return re(this.element.contentProp) && this.element.contentProp.filter(ko).forEach((n, s) => {
      n.setMetaProperty("media-type", T(s));
    }), re(this.element.headers) && this.element.headers.filter(ln).forEach((n, s) => {
      n.setMetaProperty("header-name", T(s));
    }), r;
  }
};
class wM extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new gh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!ln(n)) return;
      const i = T(s);
      n.setMetaProperty("header-name", i);
    }), r;
  }
}
class EM extends No {
  constructor(e) {
    super(e), this.element = new bh();
  }
}
class AM extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new xh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
class Eb extends F(Q, Yr) {
  constructor({
    specPathFixedFields: r,
    specPathPatternedFields: n,
    ...s
  }) {
    super({
      ...s
    });
    j(this, "specPathFixedFields");
    j(this, "specPathPatternedFields");
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
      this.ignoredFields = [...s, ...sP(r.keys(), i)], Q.prototype.ObjectElement.call(this, r), this.specPath = this.specPathPatternedFields, this.ignoredFields = i, Yr.prototype.ObjectElement.call(this, r);
    } catch (i) {
      throw this.specPath = n, i;
    }
    return te;
  }
}
let jM = class extends F(Eb, D) {
  constructor(e) {
    super(e), this.element = new hs(), this.specPathFixedFields = K(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${MP(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = Eb.prototype.ObjectElement.call(this, e);
    return this.element.filter(pe).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Fo).forEach((n, s) => {
      const i = L(s);
      this.fieldPatternPredicate(T(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
class PM extends F(Et, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: de,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Dt,
      specPath: ["document", "objects", "Response"]
    }];
  }
  ObjectElement(e) {
    const r = Et.prototype.enter.call(this, e);
    return pe(this.element) ? this.element.setMetaProperty("referenced-element", "response") : Fo(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
let RM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new os(), this.specPath = K(["document", "objects", "Operation"]);
  }
}, TM = class extends D {
  constructor(e) {
    super(e), this.element = new fh();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(L(e)), te;
  }
}, uw = class extends F(xt, D) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      pe(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}, _M = class extends uw {
  constructor(e) {
    super(e), this.element = new ui();
  }
}, $M = class extends Et {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: de,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Dt,
      specPath: ["document", "objects", "RequestBody"]
    }];
  }
  ObjectElement(e) {
    const r = Et.prototype.enter.call(this, e);
    return pe(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
class CM extends F(Y, D) {
  constructor(r) {
    super(r);
    j(this, "specPath");
    this.element = new hh(), this.specPath = (n) => de(n) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(r) {
    const n = Y.prototype.ObjectElement.call(this, r);
    return this.element.filter(pe).forEach((s) => {
      s.setMetaProperty("referenced-element", "callback");
    }), n;
  }
}
class IM extends F(xt, D) {
  constructor(e) {
    super(e), this.element = new li();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = re(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}
let MM = class extends Kp {
  constructor(e) {
    super(e), this.element = new ph();
  }
}, FM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new as(), this.specPath = K(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(aw).forEach((n, s) => {
      const i = L(s);
      i.content = T(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), z(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
class kM extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class NM extends Kp {
  constructor(e) {
    super(e), this.element = new ah();
  }
}
class DM extends uw {
  constructor(e) {
    super(e), this.element = new ch();
  }
}
let qM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new vs(), this.specPath = K(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
}, LM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new To(), this.specPath = K(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
}, VM = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Ro(), this.specPath = K(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
class BM extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Oh(), this.specPath = K(["value"]);
  }
}
class UM extends F(xt, D) {
  constructor(e) {
    super(e), this.element = new Xf();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = HC(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}
const {
  fixedFields: Ee
} = Me.visitors.document.objects.JSONSchema, R = {
  visitors: {
    value: D,
    document: {
      objects: {
        OpenApi: {
          $visitor: GC,
          fixedFields: {
            openapi: KC,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: Kp,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: MI,
            tags: UM,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: WC,
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
            version: YC
          }
        },
        Contact: {
          $visitor: XC,
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
          $visitor: QC,
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
          $visitor: nI,
          fixedFields: {
            url: sI,
            description: {
              $ref: "#/visitors/value"
            },
            variables: oI
          }
        },
        ServerVariable: {
          $visitor: iI,
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
          $visitor: FI,
          fixedFields: {
            schemas: sM,
            responses: iM,
            parameters: oM,
            examples: aM,
            requestBodies: cM,
            headers: uM,
            securitySchemes: lM,
            links: fM,
            callbacks: hM
          }
        },
        Paths: {
          $visitor: gM
        },
        PathItem: {
          $visitor: FM,
          fixedFields: {
            $ref: kM,
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
            servers: NM,
            parameters: DM
          }
        },
        Operation: {
          $visitor: RM,
          fixedFields: {
            tags: TM,
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
            parameters: _M,
            requestBody: $M,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: CM,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: IM,
            servers: MM
          }
        },
        ExternalDocumentation: {
          $visitor: mM,
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
          $visitor: qI,
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
            schema: LI,
            example: {
              $ref: "#/visitors/value"
            },
            examples: rM,
            content: nM
          }
        },
        RequestBody: {
          $visitor: bM,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: xM,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: aI,
          fixedFields: {
            schema: _I,
            example: {
              $ref: "#/visitors/value"
            },
            examples: $I,
            encoding: CI
          }
        },
        Encoding: {
          $visitor: yM,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: vM,
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
          $visitor: jM,
          fixedFields: {
            default: PM
          }
        },
        Response: {
          $visitor: OM,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: wM,
            content: EM,
            links: AM
          }
        },
        Callback: {
          $visitor: SM
        },
        Example: {
          $visitor: pM,
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
            externalValue: dM
          }
        },
        Link: {
          $visitor: ZC,
          fixedFields: {
            operationRef: eI,
            operationId: tI,
            parameters: rI,
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
          $visitor: VI,
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
            schema: BI,
            example: {
              $ref: "#/visitors/value"
            },
            examples: UI,
            content: JI
          }
        },
        Tag: {
          $visitor: kI,
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
          $visitor: NI,
          fixedFields: {
            $ref: DI
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: HI,
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
            type: QI,
            allOf: GI,
            anyOf: KI,
            oneOf: zI,
            not: wb,
            items: WI,
            properties: YI,
            additionalProperties: wb,
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
          $visitor: ZI,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: eM
          }
        },
        XML: {
          $visitor: tM,
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
          $visitor: qM,
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
          $visitor: LM,
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
          $visitor: VM,
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
            scopes: BM
          }
        },
        SecurityRequirement: {
          $visitor: II
        }
      },
      extension: {
        $visitor: zC
      }
    }
  }
}, JM = () => {
  const t = Vt(VC);
  return {
    predicates: {
      ...TI,
      isElement: ge,
      isStringElement: z,
      isArrayElement: Ne,
      isObjectElement: re,
      isMemberElement: bt,
      includesClasses: Kr,
      hasElementSourceMap: Jn
    },
    namespace: t
  };
}, HM = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = w.refract(t), s = tr(R), i = Te(e, s), o = new i({
    specObj: s
  });
  return Oe(n, o), Rt(o.element, r, {
    toolboxCreator: JM,
    visitorOptions: {
      keyMap: UC,
      nodeTypeGetter: BC
    }
  });
}, ue = (t) => (e, r = {}) => HM(e, {
  specPath: t,
  ...r
});
Wn.refract = ue(["visitors", "document", "objects", "Callback", "$visitor"]);
Yn.refract = ue(["visitors", "document", "objects", "Components", "$visitor"]);
Xn.refract = ue(["visitors", "document", "objects", "Contact", "$visitor"]);
Zn.refract = ue(["visitors", "document", "objects", "Example", "$visitor"]);
Qn.refract = ue(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Po.refract = ue(["visitors", "document", "objects", "Encoding", "$visitor"]);
es.refract = ue(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
on.refract = ue(["visitors", "document", "objects", "Header", "$visitor"]);
ts.refract = ue(["visitors", "document", "objects", "Info", "$visitor"]);
rs.refract = ue(["visitors", "document", "objects", "License", "$visitor"]);
ns.refract = ue(["visitors", "document", "objects", "Link", "$visitor"]);
ss.refract = ue(["visitors", "document", "objects", "MediaType", "$visitor"]);
Ro.refract = ue(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
To.refract = ue(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
is.refract = ue(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
_o.refract = ue(["visitors", "document", "objects", "OpenApi", "$visitor"]);
os.refract = ue(["visitors", "document", "objects", "Operation", "$visitor"]);
an.refract = ue(["visitors", "document", "objects", "Parameter", "$visitor"]);
as.refract = ue(["visitors", "document", "objects", "PathItem", "$visitor"]);
cs.refract = ue(["visitors", "document", "objects", "Paths", "$visitor"]);
us.refract = ue(["visitors", "document", "objects", "Reference", "$visitor"]);
ls.refract = ue(["visitors", "document", "objects", "RequestBody", "$visitor"]);
fs.refract = ue(["visitors", "document", "objects", "Response", "$visitor"]);
hs.refract = ue(["visitors", "document", "objects", "Responses", "$visitor"]);
Co.refract = ue(["visitors", "document", "objects", "Schema", "$visitor"]);
ys.refract = ue(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
vs.refract = ue(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
gs.refract = ue(["visitors", "document", "objects", "Server", "$visitor"]);
bs.refract = ue(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Io.refract = ue(["visitors", "document", "objects", "Tag", "$visitor"]);
Mo.refract = ue(["visitors", "document", "objects", "XML", "$visitor"]);
class Do extends Wn {
}
class qo extends Yn {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class Lo extends Xn {
}
class Yp extends Qn {
}
class Xp extends Po {
}
class Vo extends Zn {
}
class Bo extends es {
}
class Uo extends on {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Jo extends ts {
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
const Hi = class Hi extends w.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
};
j(Hi, "default", new Hi("https://spec.openapis.org/oas/3.1/dialect/base"));
let vr = Hi;
class Ho extends rs {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class Go extends ns {
}
class Ko extends ss {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Qp extends Ro {
}
class Zp extends To {
}
class ed extends is {
}
class nr extends w.ObjectElement {
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
class xs extends os {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(e) {
    this.set("requestBody", e);
  }
}
class zo extends an {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Wt extends as {
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
class Wo extends cs {
}
class sr extends us {
}
Object.defineProperty(sr.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
Object.defineProperty(sr.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(t) {
    this.set("summary", t);
  },
  enumerable: !0
});
class Yo extends ls {
}
let Xo = class extends fs {
};
class Qo extends hs {
}
let Ss = class extends cn {
  constructor(e, r, n) {
    super(e, r, n), this.element = "JSONSchemaDraft6";
  }
  /**
   * Core vocabulary
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-01
   */
  get idProp() {
    throw new ee("id keyword from Core vocabulary has been renamed to $id.");
  }
  set idProp(e) {
    throw new ee("id keyword from Core vocabulary has been renamed to $id.");
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
}, Os = class extends ds {
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
    throw new ee("schema keyword from Hyper-Schema vocabulary has been renamed to submissionSchema.");
  }
  set schema(e) {
    throw new ee("schema keyword from Hyper-Schema vocabulary has been renamed to submissionSchema.");
  }
  get submissionSchema() {
    return this.get("submissionSchema");
  }
  set submissionSchema(e) {
    this.set("submissionSchema", e);
  }
  get method() {
    throw new ee("method keyword from Hyper-Schema vocabulary has been removed.");
  }
  set method(e) {
    throw new ee("method keyword from Hyper-Schema vocabulary has been removed.");
  }
  get encType() {
    throw new ee("encType keyword from Hyper-Schema vocabulary has been renamed to submissionEncType.");
  }
  set encType(e) {
    throw new ee("encType keyword from Hyper-Schema vocabulary has been renamed to submissionEncType.");
  }
  get submissionEncType() {
    return this.get("submissionEncType");
  }
  set submissionEncType(e) {
    this.set("submissionEncType", e);
  }
};
const GM = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft6", Ss), e.register("jSONReference", un), e.register("media", ps), e.register("linkDescription", Os), e;
  }
}, KM = {
  JSONSchemaDraft6Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Pt
};
let lw = class extends rw {
  constructor(e) {
    super(e), this.element = new Ss();
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
}, zM = class extends nw {
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), te;
  }
};
class WM extends ne {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
let fw = class extends sw {
  constructor(e) {
    super(e), this.element = new Os();
  }
};
const Ce = De(
  // JSON Schema object modifications
  k(["visitors", "document", "objects", "JSONSchema", "$visitor"], lw),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "id"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$id"], Me.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Me.visitors.JSONSchemaOrJSONReferenceVisitor),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], zM),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Me.visitors.JSONSchemaOrJSONReferenceVisitor),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "const"], Me.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "examples"], WM),
  // Link Description object modifications
  k(["visitors", "document", "objects", "LinkDescription", "$visitor"], fw),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Me.visitors.JSONSchemaOrJSONReferenceVisitor),
  We(["visitors", "document", "objects", "LinkDescription", "fixedFields", "schema"]),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Me.visitors.JSONSchemaOrJSONReferenceVisitor),
  We(["visitors", "document", "objects", "LinkDescription", "fixedFields", "method"]),
  We(["visitors", "document", "objects", "LinkDescription", "fixedFields", "encType"]),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"], Me.visitors.value)
)(Me), YM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ss || t(n) && e("JSONSchemaDraft6", n) && r("object", n)), XM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Os || t(n) && e("linkDescription", n) && r("object", n)), QM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Gp,
  isJSONSchemaElement: YM,
  isLinkDescriptionElement: XM,
  isMediaElement: tw
}, Symbol.toStringTag, { value: "Module" })), ZM = () => {
  const t = Vt(GM);
  return {
    predicates: {
      ...QM,
      isStringElement: z
    },
    namespace: t
  };
}, eF = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Ce
} = {}) => {
  const s = w.refract(t), i = tr(n), o = Te(e, i), a = new o({
    specObj: i
  });
  return Oe(s, a), Rt(a.element, r, {
    toolboxCreator: ZM,
    visitorOptions: {
      keyMap: KM,
      nodeTypeGetter: ms
    }
  });
}, hw = (t) => (e, r = {}) => eF(e, {
  specPath: t,
  ...r
});
Ss.refract = hw(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Os.refract = hw(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let ws = class extends Ss {
  constructor(e, r, n) {
    super(e, r, n), this.element = "JSONSchemaDraft7";
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
    throw new ee('media keyword from Hyper-Schema vocabulary has been moved to validation vocabulary as "contentMediaType" / "contentEncoding"');
  }
  set media(e) {
    throw new ee('media keyword from Hyper-Schema vocabulary has been moved to validation vocabulary as "contentMediaType" / "contentEncoding"');
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
}, Es = class extends Os {
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
    throw new ee("mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.");
  }
  set mediaType(e) {
    throw new ee("mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.");
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
    throw new ee("submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.");
  }
  set submissionEncType(e) {
    throw new ee("submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.");
  }
  get submissionMediaType() {
    return this.get("submissionMediaType");
  }
  set submissionMediaType(e) {
    this.set("submissionMediaType", e);
  }
};
const tF = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft7", ws), e.register("jSONReference", un), e.register("linkDescription", Es), e;
  }
}, rF = {
  JSONSchemaDraft7Element: ["content"],
  JSONReferenceElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Pt
};
let pw = class extends lw {
  constructor(e) {
    super(e), this.element = new ws();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-07/schema#";
  }
}, dw = class extends fw {
  constructor(e) {
    super(e), this.element = new Es();
  }
};
const Jt = De(
  // JSON Schema object modifications
  k(["visitors", "document", "objects", "JSONSchema", "$visitor"], pw),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$comment"], Ce.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Ce.visitors.JSONSchemaOrJSONReferenceVisitor),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Ce.visitors.JSONSchemaOrJSONReferenceVisitor),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Ce.visitors.JSONSchemaOrJSONReferenceVisitor),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "media"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentEncoding"], Ce.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentMediaType"], Ce.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "writeOnly"], Ce.visitors.value),
  // Link Description object modifications
  k(["visitors", "document", "objects", "LinkDescription", "$visitor"], dw),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchor"], Ce.visitors.value),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchorPointer"], Ce.visitors.value),
  We(["visitors", "document", "objects", "LinkDescription", "fixedFields", "mediaType"]),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetMediaType"], Ce.visitors.value),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetHints"], Ce.visitors.value),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "description"], Ce.visitors.value),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "$comment"], Ce.visitors.value),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Ce.visitors.JSONSchemaOrJSONReferenceVisitor),
  We(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"]),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionMediaType"], Ce.visitors.value)
)(Ce), nF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ws || t(n) && e("JSONSchemaDraft7", n) && r("object", n)), sF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Es || t(n) && e("linkDescription", n) && r("object", n)), iF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Gp,
  isJSONSchemaElement: nF,
  isLinkDescriptionElement: sF
}, Symbol.toStringTag, { value: "Module" })), oF = () => {
  const t = Vt(tF);
  return {
    predicates: {
      ...iF,
      isStringElement: z
    },
    namespace: t
  };
}, aF = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Jt
} = {}) => {
  const s = w.refract(t), i = tr(n), o = Te(e, i), a = new o({
    specObj: i
  });
  return Oe(s, a), Rt(a.element, r, {
    toolboxCreator: oF,
    visitorOptions: {
      keyMap: rF,
      nodeTypeGetter: ms
    }
  });
}, mw = (t) => (e, r = {}) => aF(e, {
  specPath: t,
  ...r
});
ws.refract = mw(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Es.refract = mw(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let As = class extends ws {
  constructor(e, r, n) {
    super(e, r, n), this.element = "JSONSchema201909";
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
    throw new ee("definitions keyword from Validation vocabulary has been renamed to $defs.");
  }
  set definitions(e) {
    throw new ee("definitions keyword from Validation vocabulary has been renamed to $defs.");
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
    throw new ee("dependencies keyword from Validation vocabulary has been renamed to dependentSchemas.");
  }
  set dependencies(e) {
    throw new ee("dependencies keyword from Validation vocabulary has been renamed to dependentSchemas.");
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
}, js = class extends Es {
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
const cF = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema201909", As), e.register("linkDescription", js), e;
  }
}, uF = {
  JSONSchema201909Element: ["content"],
  LinkDescriptionElement: ["content"],
  ...Pt
};
let Ie = class extends pw {
  constructor(e) {
    super(e), this.element = new As();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2019-09/schema";
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = yr.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
};
class lF extends ne {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
class fF extends ne {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let yw = class extends F(rr, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-$defs"), this.specPath = K(["document", "objects", "JSONSchema"]);
  }
}, vw = class extends F(et, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}, gw = class extends F(et, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}, bw = class extends F(et, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}, xw = class extends F(rr, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = K(["document", "objects", "JSONSchema"]);
  }
};
class hF extends F(et, we, ne) {
  ObjectElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), te;
  }
  ArrayElement(e) {
    return this.element = new w.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), te;
  }
}
let Sw = class extends F(rr, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = K(["document", "objects", "JSONSchema"]);
  }
}, Ow = class extends F(rr, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = K(["document", "objects", "JSONSchema"]);
  }
};
class pF extends ne {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
let ww = class extends dw {
  constructor(e) {
    super(e), this.element = new js();
  }
};
const Ns = De(
  // JSON Schema object modifications
  k(["visitors", "document", "objects", "JSONSchema", "$visitor"], Ie),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$vocabulary"], lF),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$anchor"], Jt.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"], Jt.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"], Jt.visitors.value),
  We(["visitors", "document", "objects", "JSONReference", "$visitor"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$ref"], fF),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "definitions"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$defs"], yw),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "allOf"], vw),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "anyOf"], gw),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "oneOf"], bw),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], Ie),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Ie),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Ie),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Ie),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependencies"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentSchemas"], xw),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], hF),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Ie),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "properties"], Sw),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "patternProperties"], Ow),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], Ie),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"], Ie),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Ie),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], Ie),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], Ie),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "maxContains"], Jt.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "minContains"], Jt.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentRequired"], pF),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "deprecated"], Jt.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], Ie),
  // Link Description object modifications
  k(["visitors", "document", "objects", "LinkDescription", "$visitor"], ww),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], Ie),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Ie),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Ie),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Ie)
)(Jt), dF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof As || t(n) && e("JSONSchema201909", n) && r("object", n)), mF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof js || t(n) && e("linkDescription", n) && r("object", n)), yF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: dF,
  isLinkDescriptionElement: mF
}, Symbol.toStringTag, { value: "Module" })), vF = () => {
  const t = Vt(cF);
  return {
    predicates: {
      ...yF,
      isStringElement: z
    },
    namespace: t
  };
}, gF = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Ns
} = {}) => {
  const s = w.refract(t), i = tr(n), o = Te(e, i), a = new o({
    specObj: i
  });
  return Oe(s, a), Rt(a.element, r, {
    toolboxCreator: vF,
    visitorOptions: {
      keyMap: uF,
      nodeTypeGetter: ms
    }
  });
}, Ew = (t) => (e, r = {}) => gF(e, {
  specPath: t,
  ...r
});
As.refract = Ew(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
js.refract = Ew(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class Ps extends As {
  constructor(e, r, n) {
    super(e, r, n), this.element = "JSONSchema202012";
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
    throw new ee("$recursiveAnchor keyword from Core vocabulary has been renamed to $dynamicAnchor.");
  }
  set $recursiveAnchor(e) {
    throw new ee("$recursiveAnchor keyword from Core vocabulary has been renamed to $dynamicAnchor.");
  }
  get $dynamicRef() {
    return this.get("$dynamicRef");
  }
  set $dynamicRef(e) {
    this.set("$dynamicRef", e);
  }
  get $recursiveRef() {
    throw new ee("$recursiveRef keyword from Core vocabulary has been renamed to $dynamicRef.");
  }
  set $recursiveRef(e) {
    throw new ee("$recursiveRef keyword from Core vocabulary has been renamed to $dynamicRef.");
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
class Zo extends js {
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
const bF = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema202012", Ps), e.register("linkDescription", Zo), e;
  }
}, xF = {
  JSONSchema202012Element: ["content"],
  LinkDescriptionElement: ["content"],
  ...Pt
};
let Ae = class extends Ie {
  constructor(e) {
    super(e), this.element = new Ps();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2020-12/schema";
  }
}, Aw = class extends F(et, we, ne) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-prefixItems");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), te;
  }
}, SF = class extends ww {
  constructor(e) {
    super(e), this.element = new Zo();
  }
};
const jw = De(
  // JSON Schema object modifications
  k(["visitors", "document", "objects", "JSONSchema", "$visitor"], Ae),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicAnchor"], Ns.visitors.value),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicRef"], Ns.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], Ae),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Ae),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Ae),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Ae),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "prefixItems"], Aw),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], Ae),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Ae),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], Ae),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Ae),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], Ae),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], Ae),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], Ae),
  // Link Description object modifications
  k(["visitors", "document", "objects", "LinkDescription", "$visitor"], SF),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], Ae),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Ae),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Ae),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Ae)
)(Ns), OF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ps || t(n) && e("JSONSchema202012", n) && r("object", n)), wF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zo || t(n) && e("linkDescription", n) && r("object", n)), EF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: OF,
  isLinkDescriptionElement: wF
}, Symbol.toStringTag, { value: "Module" })), AF = () => {
  const t = Vt(bF);
  return {
    predicates: {
      ...EF,
      isStringElement: z
    },
    namespace: t
  };
}, jF = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = jw
} = {}) => {
  const s = w.refract(t), i = tr(n), o = Te(e, i), a = new o({
    specObj: i
  });
  return Oe(s, a), Rt(a.element, r, {
    toolboxCreator: AF,
    visitorOptions: {
      keyMap: xF,
      nodeTypeGetter: ms
    }
  });
}, Pw = (t) => (e, r = {}) => jF(e, {
  specPath: t,
  ...r
});
Ps.refract = Pw(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Zo.refract = Pw(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class Yt extends Ps {
  constructor(e, r, n) {
    super(e, r, n), this.element = "schema";
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
class ea extends ys {
}
class ta extends vs {
}
class ra extends gs {
}
class na extends bs {
}
class td extends Io {
}
class rd extends Mo {
}
const nd = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Do), e.register("components", qo), e.register("contact", Lo), e.register("discriminator", Yp), e.register("encoding", Xp), e.register("example", Vo), e.register("externalDocumentation", Bo), e.register("header", Uo), e.register("info", Jo), e.register("jsonSchemaDialect", vr), e.register("license", Ho), e.register("link", Go), e.register("mediaType", Ko), e.register("oAuthFlow", Qp), e.register("oAuthFlows", Zp), e.register("openapi", ed), e.register("openApi3_1", nr), e.register("operation", xs), e.register("parameter", zo), e.register("pathItem", Wt), e.register("paths", Wo), e.register("reference", sr), e.register("requestBody", Yo), e.register("response", Xo), e.register("responses", Qo), e.register("schema", Yt), e.register("securityRequirement", ea), e.register("securityScheme", ta), e.register("server", ra), e.register("serverVariable", na), e.register("tag", td), e.register("xml", rd), e;
  }
}, Gi = class Gi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Gi.primaryClass);
  }
};
j(Gi, "primaryClass", "components-path-items");
let jh = Gi;
const Ki = class Ki extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ki.primaryClass);
  }
};
j(Ki, "primaryClass", "webhooks");
let Ph = Ki;
const it = (t) => {
  if (ge(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, ht = {
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
  ...Pt
};
class Rs {
  constructor(e, r, n) {
    j(this, "internalStore");
    this.storageElement = e, this.storageField = r, this.storageSubField = n;
  }
  get store() {
    if (!this.internalStore) {
      let e = this.storageElement.get(this.storageField);
      re(e) || (e = new w.ObjectElement(), this.storageElement.set(this.storageField, e));
      let r = e.get(this.storageSubField);
      Ne(r) || (r = new w.ArrayElement(), e.set(this.storageSubField, r)), this.internalStore = r;
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
const PF = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: n
  } = e, s = (a, c) => !r.isParameterElement(a) || !r.isParameterElement(c) || !r.isStringElement(a.name) || !r.isStringElement(a.in) || !r.isStringElement(c.name) || !r.isStringElement(c.in) ? !1 : T(a.name) === T(c.name) && T(a.in) === T(c.in), i = [];
  let o;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(a) {
          o = new Rs(a, t, "parameters");
        },
        leave() {
          o = void 0;
        }
      },
      PathItemElement: {
        enter(a, c, u, f, l) {
          if (l.some(r.isComponentsElement))
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
        leave(a, c, u, f, l) {
          const d = ao(i);
          if (!Array.isArray(d) || d.length === 0)
            return;
          const h = n([...l, u, a]);
          if (o.includes(h))
            return;
          const m = jS([], ["parameters", "content"], a), p = $S(s, [...m, ...d]);
          a.parameters = new ui(p), o.append(h);
        }
      }
    }
  };
}, RF = ({
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
          i = new Rs(o, t, "security-requirements"), r.isArrayElement(o.security) && (s = o.security);
        },
        leave() {
          i = void 0, s = void 0;
        }
      },
      OperationElement: {
        leave(o, a, c, u, f) {
          if (f.some(r.isComponentsElement))
            return;
          const l = n([...f, c, o]);
          if (i.includes(l))
            return;
          if (typeof o.security > "u" && typeof s < "u") {
            var m;
            o.security = new li((m = s) === null || m === void 0 ? void 0 : m.content), i.append(l);
          }
        }
      }
    }
  };
}, Rh = (t) => t.replace(/\s/g, ""), Th = (t) => t.replace(/\W/gi, "_"), TF = (t, e) => {
  const r = Th(Rh(e.toLowerCase())), n = Th(Rh(t));
  return `${r}${n}`;
}, _F = (t, e, r) => {
  const n = Rh(t);
  return n.length > 0 ? Th(n) : TF(e, r);
}, $F = ({
  storageField: t = "x-normalized",
  operationIdNormalizer: e = _F
} = {}) => (r) => {
  const {
    predicates: n,
    ancestorLineageToJSONPointer: s,
    namespace: i
  } = r, o = [], a = [], c = [];
  let u;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(f) {
          u = new Rs(f, t, "operation-ids");
        },
        leave() {
          const f = wP((l) => T(l.operationId), a);
          Object.entries(f).forEach(([l, d]) => {
            Array.isArray(d) && (d.length <= 1 || d.forEach((h, m) => {
              const p = `${l}${m + 1}`;
              h.operationId = new i.elements.String(p);
            }));
          }), c.forEach((l) => {
            if (typeof l.operationId > "u") return;
            const d = String(T(l.operationId)), h = a.find((m) => T(m.meta.get("originalOperationId")) === d);
            typeof h > "u" || (l.operationId = L.safe(h.operationId), l.meta.set("originalOperationId", d), l.set("__originalOperationId", d));
          }), a.length = 0, c.length = 0, u = void 0;
        }
      },
      PathItemElement: {
        enter(f) {
          const l = Hr("path", T(f.meta.get("path")));
          o.push(l);
        },
        leave() {
          o.pop();
        }
      },
      OperationElement: {
        enter(f, l, d, h, m) {
          if (typeof f.operationId > "u") return;
          const p = s([...m, d, f]);
          if (u.includes(p))
            return;
          const v = String(T(f.operationId)), g = ao(o), y = Hr("method", T(f.meta.get("http-method"))), x = e(v, g, y);
          v !== x && (f.operationId = new i.elements.String(x), f.set("__originalOperationId", v), f.meta.set("originalOperationId", v), a.push(f), u.append(p));
        }
      },
      LinkElement: {
        leave(f) {
          n.isLinkElement(f) && (typeof f.operationId > "u" || c.push(f));
        }
      }
    }
  };
}, CF = ({
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
          s = new Rs(i, t, "parameter-examples");
        },
        leave() {
          s = void 0;
        }
      },
      ParameterElement: {
        leave(i, o, a, c, u) {
          var f, l;
          if (u.some(r.isComponentsElement) || typeof i.schema > "u" || !r.isSchemaElement(i.schema) || typeof ((f = i.schema) === null || f === void 0 ? void 0 : f.example) > "u" && typeof ((l = i.schema) === null || l === void 0 ? void 0 : l.examples) > "u")
            return;
          const d = n([...u, a, i]);
          if (!s.includes(d)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const h = i.examples.map((m) => L.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", h), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", h[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [L(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", L(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, IF = ({
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
          s = new Rs(i, t, "header-examples");
        },
        leave() {
          s = void 0;
        }
      },
      HeaderElement: {
        leave(i, o, a, c, u) {
          var f, l;
          if (u.some(r.isComponentsElement) || typeof i.schema > "u" || !r.isSchemaElement(i.schema) || typeof ((f = i.schema) === null || f === void 0 ? void 0 : f.example) > "u" && typeof ((l = i.schema) === null || l === void 0 ? void 0 : l.examples) > "u")
            return;
          const d = n([...u, a, i]);
          if (!s.includes(d)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const h = i.examples.map((m) => L.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", h), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", h[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [L(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", L(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, MF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Do || t(n) && e("callback", n) && r("object", n)), FF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof qo || t(n) && e("components", n) && r("object", n)), kF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Lo || t(n) && e("contact", n) && r("object", n)), NF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Vo || t(n) && e("example", n) && r("object", n)), DF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bo || t(n) && e("externalDocumentation", n) && r("object", n)), qF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Uo || t(n) && e("header", n) && r("object", n)), LF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Jo || t(n) && e("info", n) && r("object", n)), Rw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vr || t(n) && e("jsonSchemaDialect", n) && r("string", n)), VF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ho || t(n) && e("license", n) && r("object", n)), BF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Go || t(n) && e("link", n) && r("object", n)), UF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ed || t(n) && e("openapi", n) && r("string", n)), Tw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof nr || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), _w = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xs || t(n) && e("operation", n) && r("object", n)), JF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zo || t(n) && e("parameter", n) && r("object", n)), gr = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wt || t(n) && e("pathItem", n) && r("object", n)), HF = (t) => {
  if (!gr(t) || !z(t.$ref))
    return !1;
  const e = T(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, GF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wo || t(n) && e("paths", n) && r("object", n)), jr = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof sr || t(n) && e("reference", n) && r("object", n)), KF = (t) => {
  if (!jr(t) || !z(t.$ref))
    return !1;
  const e = T(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, zF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Yo || t(n) && e("requestBody", n) && r("object", n)), WF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xo || t(n) && e("response", n) && r("object", n)), YF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qo || t(n) && e("responses", n) && r("object", n)), pt = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Yt || t(n) && e("schema", n) && r("object", n)), sd = (t) => Un(t) && t.classes.includes("boolean-json-schema"), XF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ea || t(n) && e("securityRequirement", n) && r("object", n)), QF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ta || t(n) && e("securityScheme", n) && r("object", n)), ZF = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ra || t(n) && e("server", n) && r("object", n)), ek = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof na || t(n) && e("serverVariable", n) && r("object", n)), tk = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ko || t(n) && e("mediaType", n) && r("object", n)), rk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: sd,
  isCallbackElement: MF,
  isComponentsElement: FF,
  isContactElement: kF,
  isExampleElement: NF,
  isExternalDocumentationElement: DF,
  isHeaderElement: qF,
  isInfoElement: LF,
  isJsonSchemaDialectElement: Rw,
  isLicenseElement: VF,
  isLinkElement: BF,
  isMediaTypeElement: tk,
  isOpenApi3_1Element: Tw,
  isOpenapiElement: UF,
  isOperationElement: _w,
  isParameterElement: JF,
  isPathItemElement: gr,
  isPathItemElementExternal: HF,
  isPathsElement: GF,
  isReferenceElement: jr,
  isReferenceElementExternal: KF,
  isRequestBodyElement: zF,
  isResponseElement: WF,
  isResponsesElement: YF,
  isSchemaElement: pt,
  isSecurityRequirementElement: XF,
  isSecuritySchemeElement: QF,
  isServerElement: ZF,
  isServerVariableElement: ek
}, Symbol.toStringTag, { value: "Module" })), nk = (t) => {
  const e = t.reduce((r, n, s) => {
    if (bt(n)) {
      const i = String(T(n.key));
      r.push(i);
    } else if (Ne(t[s - 2])) {
      const i = String(t[s - 2].content.indexOf(n));
      r.push(i);
    }
    return r;
  }, []);
  return zO(e);
}, $w = () => {
  const t = Vt(nd);
  return {
    predicates: {
      ...rk,
      isElement: ge,
      isStringElement: z,
      isArrayElement: Ne,
      isObjectElement: re,
      isMemberElement: bt,
      isServersElement: cw,
      includesClasses: Kr,
      hasElementSourceMap: Jn
    },
    ancestorLineageToJSONPointer: nk,
    namespace: t
  };
};
class sk extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new nr(), this.specPath = K(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, Q.prototype.ObjectElement.call(this, e);
  }
}
const ik = R.visitors.document.objects.Info.$visitor;
class ok extends ik {
  constructor(e) {
    super(e), this.element = new Jo();
  }
}
const ak = R.visitors.document.objects.Contact.$visitor;
class ck extends ak {
  constructor(e) {
    super(e), this.element = new Lo();
  }
}
const uk = R.visitors.document.objects.License.$visitor;
class lk extends uk {
  constructor(e) {
    super(e), this.element = new Ho();
  }
}
const fk = R.visitors.document.objects.Link.$visitor;
class hk extends fk {
  constructor(e) {
    super(e), this.element = new Go();
  }
}
class pk extends F(xt, D) {
  StringElement(e) {
    const r = new vr(T(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, te;
  }
}
const dk = R.visitors.document.objects.Server.$visitor;
class mk extends dk {
  constructor(e) {
    super(e), this.element = new ra();
  }
}
const yk = R.visitors.document.objects.ServerVariable.$visitor;
class vk extends yk {
  constructor(e) {
    super(e), this.element = new na();
  }
}
const gk = R.visitors.document.objects.MediaType.$visitor;
class bk extends gk {
  constructor(e) {
    super(e), this.element = new Ko();
  }
}
const xk = R.visitors.document.objects.SecurityRequirement.$visitor;
class Sk extends xk {
  constructor(e) {
    super(e), this.element = new ea();
  }
}
const Ok = R.visitors.document.objects.Components.$visitor;
class wk extends Ok {
  constructor(e) {
    super(e), this.element = new qo();
  }
}
const Ek = R.visitors.document.objects.Tag.$visitor;
class Ak extends Ek {
  constructor(e) {
    super(e), this.element = new td();
  }
}
const jk = R.visitors.document.objects.Reference.$visitor;
class Pk extends jk {
  constructor(e) {
    super(e), this.element = new sr();
  }
}
const Rk = R.visitors.document.objects.Parameter.$visitor;
class Tk extends Rk {
  constructor(e) {
    super(e), this.element = new zo();
  }
}
const _k = R.visitors.document.objects.Header.$visitor;
class $k extends _k {
  constructor(e) {
    super(e), this.element = new Uo();
  }
}
class Ck extends F(Q, we, D) {
  constructor(e) {
    super(e), this.element = new Yt(), this.specPath = K(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = vr.default, this.passingOptionsNames.push("parent");
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = Q.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
  BooleanElement(e) {
    return Ae.prototype.BooleanElement.call(this, e);
  }
  /**
   * This function depends on some external context, so we need to make sure this function
   * works even when no context is provided like when directly refracting generic Object Element
   * into Schema Element: `SchemaElement.refract(new ObjectElement({ type: 'object' });`
   */
  get defaultDialectIdentifier() {
    let e;
    return this.openApiSemanticElement !== void 0 && // @ts-ignore
    Rw(this.openApiSemanticElement.jsonSchemaDialect) ? e = T(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && z(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = T(this.openApiGenericElement.get("jsonSchemaDialect")) : e = T(this.jsonSchemaDefaultDialect), e;
  }
  handleDialectIdentifier(e) {
    return Ae.prototype.handleDialectIdentifier.call(this, e);
  }
  handleSchemaIdentifier(e) {
    return Ae.prototype.handleSchemaIdentifier.call(this, e);
  }
}
class Ik extends yw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
let Mk = class extends vw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
};
class Fk extends gw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class kk extends bw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class Nk extends xw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class Dk extends Aw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class qk extends Sw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class Lk extends Ow {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
const Vk = R.visitors.document.objects.Discriminator.$visitor;
class Bk extends Vk {
  constructor(e) {
    super(e), this.element = new Yp(), this.canSupportSpecificationExtensions = !0;
  }
}
const Uk = R.visitors.document.objects.XML.$visitor;
class Jk extends Uk {
  constructor(e) {
    super(e), this.element = new rd();
  }
}
class Hk extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new ci(), this.specPath = K(["document", "objects", "Schema"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(pt).forEach((n, s) => {
      n.setMetaProperty("schemaName", T(s));
    }), r;
  }
}
class Gk extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new jh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(jr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const Kk = R.visitors.document.objects.Example.$visitor;
class zk extends Kk {
  constructor(e) {
    super(e), this.element = new Vo();
  }
}
const Wk = R.visitors.document.objects.ExternalDocumentation.$visitor;
class Yk extends Wk {
  constructor(e) {
    super(e), this.element = new Bo();
  }
}
const Xk = R.visitors.document.objects.Encoding.$visitor;
class Qk extends Xk {
  constructor(e) {
    super(e), this.element = new Xp();
  }
}
const Zk = R.visitors.document.objects.Paths.$visitor;
class eN extends Zk {
  constructor(e) {
    super(e), this.element = new Wo();
  }
}
const tN = R.visitors.document.objects.RequestBody.$visitor;
class rN extends tN {
  constructor(e) {
    super(e), this.element = new Yo();
  }
}
const Ab = R.visitors.document.objects.Callback.$visitor;
class nN extends Ab {
  constructor(e) {
    super(e), this.element = new Do(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Ab.prototype.ObjectElement.call(this, e);
    return this.element.filter(jr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const sN = R.visitors.document.objects.Response.$visitor;
class iN extends sN {
  constructor(e) {
    super(e), this.element = new Xo();
  }
}
const oN = R.visitors.document.objects.Responses.$visitor;
class aN extends oN {
  constructor(e) {
    super(e), this.element = new Qo();
  }
}
const cN = R.visitors.document.objects.Operation.$visitor;
class uN extends cN {
  constructor(e) {
    super(e), this.element = new xs();
  }
}
const lN = R.visitors.document.objects.PathItem.$visitor;
class fN extends lN {
  constructor(e) {
    super(e), this.element = new Wt();
  }
}
const hN = R.visitors.document.objects.SecurityScheme.$visitor;
class pN extends hN {
  constructor(e) {
    super(e), this.element = new ta();
  }
}
const dN = R.visitors.document.objects.OAuthFlows.$visitor;
class mN extends dN {
  constructor(e) {
    super(e), this.element = new Zp();
  }
}
const yN = R.visitors.document.objects.OAuthFlow.$visitor;
class vN extends yN {
  constructor(e) {
    super(e), this.element = new Qp();
  }
}
class gN extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Ph(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(jr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter(gr).forEach((n, s) => {
      n.setMetaProperty("webhook-name", T(s));
    }), r;
  }
}
const {
  JSONSchema: bN,
  LinkDescription: xN
} = jw.visitors.document.objects, SN = {
  visitors: {
    value: R.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: sk,
          fixedFields: {
            openapi: R.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: pk,
            servers: R.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: gN,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: R.visitors.document.objects.OpenApi.fixedFields.security,
            tags: R.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: ok,
          fixedFields: {
            title: R.visitors.document.objects.Info.fixedFields.title,
            description: R.visitors.document.objects.Info.fixedFields.description,
            summary: {
              $ref: "#/visitors/value"
            },
            termsOfService: R.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: R.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: ck,
          fixedFields: {
            name: R.visitors.document.objects.Contact.fixedFields.name,
            url: R.visitors.document.objects.Contact.fixedFields.url,
            email: R.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: lk,
          fixedFields: {
            name: R.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: R.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: mk,
          fixedFields: {
            url: R.visitors.document.objects.Server.fixedFields.url,
            description: R.visitors.document.objects.Server.fixedFields.description,
            variables: R.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: vk,
          fixedFields: {
            enum: R.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: R.visitors.document.objects.ServerVariable.fixedFields.default,
            description: R.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: wk,
          fixedFields: {
            schemas: Hk,
            responses: R.visitors.document.objects.Components.fixedFields.responses,
            parameters: R.visitors.document.objects.Components.fixedFields.parameters,
            examples: R.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: R.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: R.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: R.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: R.visitors.document.objects.Components.fixedFields.links,
            callbacks: R.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: Gk
          }
        },
        Paths: {
          $visitor: eN
        },
        PathItem: {
          $visitor: fN,
          fixedFields: {
            $ref: R.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: R.visitors.document.objects.PathItem.fixedFields.summary,
            description: R.visitors.document.objects.PathItem.fixedFields.description,
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
            servers: R.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: R.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: uN,
          fixedFields: {
            tags: R.visitors.document.objects.Operation.fixedFields.tags,
            summary: R.visitors.document.objects.Operation.fixedFields.summary,
            description: R.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: R.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: R.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: R.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: R.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: R.visitors.document.objects.Operation.fixedFields.deprecated,
            security: R.visitors.document.objects.Operation.fixedFields.security,
            servers: R.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: Yk,
          fixedFields: {
            description: R.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: R.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: Tk,
          fixedFields: {
            name: R.visitors.document.objects.Parameter.fixedFields.name,
            in: R.visitors.document.objects.Parameter.fixedFields.in,
            description: R.visitors.document.objects.Parameter.fixedFields.description,
            required: R.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: R.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: R.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: R.visitors.document.objects.Parameter.fixedFields.style,
            explode: R.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: R.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: R.visitors.document.objects.Parameter.fixedFields.example,
            examples: R.visitors.document.objects.Parameter.fixedFields.examples,
            content: R.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: rN,
          fixedFields: {
            description: R.visitors.document.objects.RequestBody.fixedFields.description,
            content: R.visitors.document.objects.RequestBody.fixedFields.content,
            required: R.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: bk,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: R.visitors.document.objects.MediaType.fixedFields.example,
            examples: R.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: R.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: Qk,
          fixedFields: {
            contentType: R.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: R.visitors.document.objects.Encoding.fixedFields.headers,
            style: R.visitors.document.objects.Encoding.fixedFields.style,
            explode: R.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: R.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: aN,
          fixedFields: {
            default: R.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: iN,
          fixedFields: {
            description: R.visitors.document.objects.Response.fixedFields.description,
            headers: R.visitors.document.objects.Response.fixedFields.headers,
            content: R.visitors.document.objects.Response.fixedFields.content,
            links: R.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: nN
        },
        Example: {
          $visitor: zk,
          fixedFields: {
            summary: R.visitors.document.objects.Example.fixedFields.summary,
            description: R.visitors.document.objects.Example.fixedFields.description,
            value: R.visitors.document.objects.Example.fixedFields.value,
            externalValue: R.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: hk,
          fixedFields: {
            operationRef: R.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: R.visitors.document.objects.Link.fixedFields.operationId,
            parameters: R.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: R.visitors.document.objects.Link.fixedFields.requestBody,
            description: R.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: $k,
          fixedFields: {
            description: R.visitors.document.objects.Header.fixedFields.description,
            required: R.visitors.document.objects.Header.fixedFields.required,
            deprecated: R.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: R.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: R.visitors.document.objects.Header.fixedFields.style,
            explode: R.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: R.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: R.visitors.document.objects.Header.fixedFields.example,
            examples: R.visitors.document.objects.Header.fixedFields.examples,
            content: R.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: Ak,
          fixedFields: {
            name: R.visitors.document.objects.Tag.fixedFields.name,
            description: R.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: Pk,
          fixedFields: {
            $ref: R.visitors.document.objects.Reference.fixedFields.$ref,
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
          ...xN
        },
        Schema: {
          $visitor: Ck,
          fixedFields: {
            ...bN.fixedFields,
            // core vocabulary
            $defs: Ik,
            // applicator vocabulary
            allOf: Mk,
            anyOf: Fk,
            oneOf: kk,
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
            dependentSchemas: Nk,
            prefixItems: Dk,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: qk,
            patternProperties: Lk,
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
          $visitor: Bk,
          fixedFields: {
            propertyName: R.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: R.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: Jk,
          fixedFields: {
            name: R.visitors.document.objects.XML.fixedFields.name,
            namespace: R.visitors.document.objects.XML.fixedFields.namespace,
            prefix: R.visitors.document.objects.XML.fixedFields.prefix,
            attribute: R.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: R.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: pN,
          fixedFields: {
            type: R.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: R.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: R.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: R.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: R.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: R.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: R.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: mN,
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
          $visitor: vN,
          fixedFields: {
            authorizationUrl: R.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: R.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: R.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: R.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: Sk
        }
      },
      extension: {
        $visitor: R.visitors.document.extension.$visitor
      }
    }
  }
}, ON = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = w.refract(t), s = tr(SN), i = Te(e, s), o = new i({
    specObj: s
  });
  return Oe(n, o), Rt(o.element, r, {
    toolboxCreator: $w,
    visitorOptions: {
      keyMap: ht,
      nodeTypeGetter: it
    }
  });
}, ae = (t) => (e, r = {}) => ON(e, {
  specPath: t,
  ...r
});
Do.refract = ae(["visitors", "document", "objects", "Callback", "$visitor"]);
qo.refract = ae(["visitors", "document", "objects", "Components", "$visitor"]);
Lo.refract = ae(["visitors", "document", "objects", "Contact", "$visitor"]);
Vo.refract = ae(["visitors", "document", "objects", "Example", "$visitor"]);
Yp.refract = ae(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Xp.refract = ae(["visitors", "document", "objects", "Encoding", "$visitor"]);
Bo.refract = ae(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Uo.refract = ae(["visitors", "document", "objects", "Header", "$visitor"]);
Jo.refract = ae(["visitors", "document", "objects", "Info", "$visitor"]);
vr.refract = ae(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
Ho.refract = ae(["visitors", "document", "objects", "License", "$visitor"]);
Go.refract = ae(["visitors", "document", "objects", "Link", "$visitor"]);
Ko.refract = ae(["visitors", "document", "objects", "MediaType", "$visitor"]);
Qp.refract = ae(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Zp.refract = ae(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
ed.refract = ae(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
nr.refract = ae(["visitors", "document", "objects", "OpenApi", "$visitor"]);
xs.refract = ae(["visitors", "document", "objects", "Operation", "$visitor"]);
zo.refract = ae(["visitors", "document", "objects", "Parameter", "$visitor"]);
Wt.refract = ae(["visitors", "document", "objects", "PathItem", "$visitor"]);
Wo.refract = ae(["visitors", "document", "objects", "Paths", "$visitor"]);
sr.refract = ae(["visitors", "document", "objects", "Reference", "$visitor"]);
Yo.refract = ae(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Xo.refract = ae(["visitors", "document", "objects", "Response", "$visitor"]);
Qo.refract = ae(["visitors", "document", "objects", "Responses", "$visitor"]);
Yt.refract = ae(["visitors", "document", "objects", "Schema", "$visitor"]);
ea.refract = ae(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
ta.refract = ae(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
ra.refract = ae(["visitors", "document", "objects", "Server", "$visitor"]);
na.refract = ae(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
td.refract = ae(["visitors", "document", "objects", "Tag", "$visitor"]);
rd.refract = ae(["visitors", "document", "objects", "XML", "$visitor"]);
class wN extends Gn {
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
      const r = unescape(encodeURIComponent(e.toString())), n = btoa(r), s = new yt();
      if (n.length !== 0) {
        const i = new w.StringElement(n);
        i.classes.push("result"), s.push(i);
      }
      return s;
    } catch (r) {
      throw new Mt(`Error parsing "${e.uri}"`, {
        cause: r
      });
    }
  }
}
class EN extends B_ {
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
      throw new EO('"openapi-3-1" dereference strategy is not available.');
    const s = new Gr(), i = BS(r, {
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
  AbortController: AN,
  AbortSignal: jN
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = AN);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = jN);
class Cw extends V_ {
  constructor({
    swaggerHTTPClient: r = Ur,
    swaggerHTTPClientConfig: n = {},
    ...s
  } = {}) {
    super({
      ...s,
      name: "http-swagger-client"
    });
    j(this, "swaggerHTTPClient", Ur);
    j(this, "swaggerHTTPClientConfig");
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
    }, this.timeout), a = this.getHttpClient().withCredentials || this.withCredentials ? "include" : "same-origin", c = this.redirects === 0 ? "error" : "follow", u = this.redirects > 0 ? this.redirects : void 0;
    try {
      return (await n({
        url: r.uri,
        signal: i,
        userFetch: async (l, d) => {
          let h = await fetch(l, d);
          try {
            h.headers.delete("Content-Type");
          } catch {
            h = new Response(h.body, {
              ...h,
              headers: new Headers(h.headers)
            }), h.headers.delete("Content-Type");
          }
          return h;
        },
        credentials: a,
        redirect: c,
        follow: u,
        ...this.swaggerHTTPClientConfig
      })).text.arrayBuffer();
    } catch (f) {
      throw new US(`Error downloading "${r.uri}"`, {
        cause: f
      });
    } finally {
      clearTimeout(o);
    }
  }
}
class Iw extends Gn {
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
      throw new Mt("json-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new yt(), n = e.toString();
    if (this.allowEmpty && n.trim() === "")
      return r;
    try {
      const s = wO(JSON.parse(n));
      return s.classes.push("result"), r.push(s), r;
    } catch (s) {
      throw new Mt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class Mw extends Gn {
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
        return Br.load(e.toString(), {
          schema: Hs
        }), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new Mt("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new yt(), n = e.toString();
    try {
      const s = Br.load(n, {
        schema: Hs
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = wO(s);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new Mt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class Fw extends Gn {
  constructor(r = {}) {
    super({
      name: "openapi-json-3-1-swagger-client",
      mediaTypes: new Hp(...Wr.filterByFormat("generic"), ...Wr.filterByFormat("json")),
      ...r
    });
    j(this, "detectionRegExp", /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/);
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
      throw new Mt("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new yt(), s = r.toString();
    if (this.allowEmpty && s.trim() === "")
      return n;
    try {
      const i = JSON.parse(s), o = nr.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new Mt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
class kw extends Gn {
  constructor(r = {}) {
    super({
      name: "openapi-yaml-3-1-swagger-client",
      mediaTypes: new Hp(...Wr.filterByFormat("generic"), ...Wr.filterByFormat("yaml")),
      ...r
    });
    j(this, "detectionRegExp", /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m);
  }
  async canParse(r) {
    const n = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(r.extension), s = this.mediaTypes.includes(r.mediaType);
    if (!n) return !1;
    if (s) return !0;
    if (!s)
      try {
        const i = r.toString();
        return Br.load(i), this.detectionRegExp.test(i);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(r) {
    if (this.sourceMap)
      throw new Mt("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new yt(), s = r.toString();
    try {
      const i = Br.load(s, {
        schema: Hs
      });
      if (this.allowEmpty && typeof i > "u")
        return n;
      const o = nr.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new Mt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
const sa = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), Xr = (t) => {
  const e = wp(t);
  return DS("#", e);
}, PN = (t) => {
  if (!sa(t))
    throw new G_(t);
  return t;
}, id = (t, e) => {
  const r = PN(t), n = bO((s) => pt(s) && T(s.$anchor) === r, e);
  if (er(n))
    throw new J_(`Evaluation failed on token: "${r}"`);
  return n;
}, Nw = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = wp(T(e.$ref)), n = T(e.meta.get("ancestorsSchemaIdentifiers"));
  return `${tn((i, o) => Re(i, Bn(he(o))), t, [...n, T(e.$ref)])}${r === "#" ? "" : r}`;
}, RN = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = T(e.meta.get("ancestorsSchemaIdentifiers"));
  return tn((n, s) => Re(n, Bn(he(s))), t, r);
}, bn = (t) => {
  if (bn.cache.has(t))
    return bn.cache.get(t);
  const e = Yt.refract(t);
  return bn.cache.set(t, e), e;
};
bn.cache = /* @__PURE__ */ new WeakMap();
const Le = (t) => pr(t) ? bn(t) : t, ia = (t, e) => {
  const {
    cache: r
  } = ia, n = he(t), s = (o) => pt(o) && typeof o.$id < "u";
  if (!r.has(e)) {
    const o = A_(s, e);
    r.set(e, Array.from(o));
  }
  const i = r.get(e).find((o) => RN(n, o) === n);
  if (er(i))
    throw new kp(`Evaluation failed on URI: "${t}"`);
  return sa(Xr(t)) ? id(Xr(t), i) : ft(i, nt(t));
};
ia.cache = /* @__PURE__ */ new WeakMap();
const $s = Oe[Symbol.for("nodejs.util.promisify.custom")], $e = new Mp(), tt = (t, e, r, n) => {
  bt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class cr {
  constructor({
    reference: e,
    namespace: r,
    options: n,
    indirections: s = [],
    ancestors: i = new Sf(),
    refractCache: o = /* @__PURE__ */ new Map(),
    allOfDiscriminatorMapping: a = /* @__PURE__ */ new Map()
  }) {
    j(this, "indirections");
    j(this, "namespace");
    j(this, "reference");
    j(this, "options");
    j(this, "ancestors");
    j(this, "refractCache");
    j(this, "allOfDiscriminatorMapping");
    j(this, "OpenApi3_1Element", {
      leave: (e, r, n, s, i, o) => {
        var a;
        if (!((a = this.options.dereference.strategyOpts["openapi-3-1"]) !== null && a !== void 0 && a.dereferenceDiscriminatorMapping))
          return;
        const c = Pe(e);
        return c.setMetaProperty("allOfDiscriminatorMapping", Object.fromEntries(this.allOfDiscriminatorMapping)), o.replaceWith(c, tt), n ? void 0 : c;
      }
    });
    this.indirections = s, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new Sf(...i), this.refractCache = o, this.allOfDiscriminatorMapping = a;
  }
  toBaseURI(e) {
    return Re(this.reference.uri, Bn(he(e)));
  }
  async toReference(e) {
    if (this.reference.depth >= this.options.resolve.maxDepth)
      throw new K_(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    const r = this.toBaseURI(e), {
      refSet: n
    } = this.reference;
    if (n.has(r))
      return n.find(RS(r, "uri"));
    const s = await _R(lt(r), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: "text/plain"
      }
    }), i = new Ct({
      uri: r,
      value: L(s),
      depth: this.reference.depth + 1
    });
    if (n.add(i), this.options.dereference.immutable) {
      const o = new Ct({
        uri: `immutable://${r}`,
        value: s,
        depth: this.reference.depth + 1
      });
      n.add(o);
    }
    return i;
  }
  toAncestorLineage(e) {
    const r = new Set(e.filter(ge));
    return [new Sf(...this.ancestors, r), r];
  }
  async ReferenceElement(e, r, n, s, i, o) {
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), u = this.toBaseURI(T(e.$ref)), f = he(this.reference.uri) === u, l = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && l)
      return !1;
    const d = await this.toReference(T(e.$ref)), h = Re(u, T(e.$ref));
    this.indirections.push(e);
    const m = nt(h);
    let p = ft(d.value.result, m);
    if (p.id = $e.identify(p), pr(p)) {
      const E = T(e.meta.get("referenced-element")), O = `${E}-${T($e.identify(p))}`;
      this.refractCache.has(O) ? p = this.refractCache.get(O) : de(p) ? (p = sr.refract(p), p.setMetaProperty("referenced-element", E), this.refractCache.set(O, p)) : (p = this.namespace.getElementClass(E).refract(p), this.refractCache.set(O, p));
    }
    if (e === p)
      throw new ye("Recursive Reference Object detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(p)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var v, g;
        const E = new w.RefElement(p.id, {
          type: "reference",
          uri: d.uri,
          $ref: T(e.$ref)
        }), _ = ((v = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && v !== void 0 ? v : this.options.dereference.circularReplacer)(E);
        return o.replaceWith(_, tt), n ? !1 : _;
      }
    }
    const y = he(d.refSet.rootRef.uri) !== d.uri, x = ["error", "replace"].includes(this.options.dereference.circular);
    if ((l || y || jr(p) || x) && !a.includesCycle(p)) {
      c.add(e);
      const E = new cr({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a,
        allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
      });
      p = await $s(p, E, {
        keyMap: ht,
        nodeTypeGetter: it
      }), c.delete(e);
    }
    this.indirections.pop();
    const b = Pe(p);
    return b.setMetaProperty("id", $e.generateId()), b.setMetaProperty("ref-fields", {
      $ref: T(e.$ref),
      // @ts-ignore
      description: T(e.description),
      // @ts-ignore
      summary: T(e.summary)
    }), b.setMetaProperty("ref-origin", d.uri), b.setMetaProperty("ref-referencing-element-id", L($e.identify(e))), re(p) && re(b) && (e.hasKey("description") && "description" in p && (b.remove("description"), b.set("description", e.get("description"))), e.hasKey("summary") && "summary" in p && (b.remove("summary"), b.set("summary", e.get("summary")))), o.replaceWith(b, tt), n ? !1 : b;
  }
  async PathItemElement(e, r, n, s, i, o) {
    if (!z(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), u = this.toBaseURI(T(e.$ref)), f = he(this.reference.uri) === u, l = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && l)
      return;
    const d = await this.toReference(T(e.$ref)), h = Re(u, T(e.$ref));
    this.indirections.push(e);
    const m = nt(h);
    let p = ft(d.value.result, m);
    if (p.id = $e.identify(p), pr(p)) {
      const b = `path-item-${T($e.identify(p))}`;
      this.refractCache.has(b) ? p = this.refractCache.get(b) : (p = Wt.refract(p), this.refractCache.set(b, p));
    }
    if (e === p)
      throw new ye("Recursive Path Item Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(p)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var v, g;
        const b = new w.RefElement(p.id, {
          type: "path-item",
          uri: d.uri,
          $ref: T(e.$ref)
        }), O = ((v = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && v !== void 0 ? v : this.options.dereference.circularReplacer)(b);
        return o.replaceWith(O, tt), n ? !1 : O;
      }
    }
    const y = he(d.refSet.rootRef.uri) !== d.uri, x = ["error", "replace"].includes(this.options.dereference.circular);
    if ((l || y || gr(p) && z(p.$ref) || x) && !a.includesCycle(p)) {
      c.add(e);
      const b = new cr({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a,
        allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
      });
      p = await $s(p, b, {
        keyMap: ht,
        nodeTypeGetter: it
      }), c.delete(e);
    }
    if (this.indirections.pop(), gr(p)) {
      const b = new Wt([...p.content], L(p.meta), L(p.attributes));
      b.setMetaProperty("id", $e.generateId()), e.forEach((E, O, _) => {
        b.remove(T(O)), b.content.push(_);
      }), b.remove("$ref"), b.setMetaProperty("ref-fields", {
        $ref: T(e.$ref)
      }), b.setMetaProperty("ref-origin", d.uri), b.setMetaProperty("ref-referencing-element-id", L($e.identify(e))), p = b;
    }
    return o.replaceWith(p, tt), n ? void 0 : p;
  }
  async LinkElement(e, r, n, s, i, o) {
    if (!z(e.operationRef) && !z(e.operationId))
      return;
    if (z(e.operationRef) && z(e.operationId))
      throw new ye("LinkElement operationRef and operationId fields are mutually exclusive.");
    let a;
    if (z(e.operationRef)) {
      var c;
      const f = nt(T(e.operationRef)), l = this.toBaseURI(T(e.operationRef)), d = he(this.reference.uri) === l, h = !d;
      if (!this.options.resolve.internal && d || !this.options.resolve.external && h)
        return;
      const m = await this.toReference(T(e.operationRef));
      if (a = ft(m.value.result, f), pr(a)) {
        const v = `operation-${T($e.identify(a))}`;
        this.refractCache.has(v) ? a = this.refractCache.get(v) : (a = xs.refract(a), this.refractCache.set(v, a));
      }
      a = Pe(a), a.setMetaProperty("ref-origin", m.uri);
      const p = Pe(e);
      return (c = p.operationRef) === null || c === void 0 || c.meta.set("operation", a), o.replaceWith(p, tt), n ? void 0 : p;
    }
    if (z(e.operationId)) {
      var u;
      const f = T(e.operationId), l = await this.toReference(lt(this.reference.uri));
      if (a = bO((h) => _w(h) && ge(h.operationId) && h.operationId.equals(f), l.value.result), er(a))
        throw new ye(`OperationElement(operationId=${f}) not found.`);
      const d = Pe(e);
      return (u = d.operationId) === null || u === void 0 || u.meta.set("operation", a), o.replaceWith(d, tt), n ? void 0 : d;
    }
  }
  async ExampleElement(e, r, n, s, i, o) {
    if (!z(e.externalValue))
      return;
    if (e.hasKey("value") && z(e.externalValue))
      throw new ye("ExampleElement value and externalValue fields are mutually exclusive.");
    const a = this.toBaseURI(T(e.externalValue)), c = he(this.reference.uri) === a, u = !c;
    if (!this.options.resolve.internal && c || !this.options.resolve.external && u)
      return;
    const f = await this.toReference(T(e.externalValue)), l = Pe(f.value.result);
    l.setMetaProperty("ref-origin", f.uri);
    const d = Pe(e);
    return d.value = l, o.replaceWith(d, tt), n ? void 0 : d;
  }
  async MemberElement(e, r, n, s, i, o) {
    var a;
    const c = i[i.length - 1];
    if (!re(c) || !c.classes.contains("discriminator-mapping"))
      return;
    if (!((a = this.options.dereference.strategyOpts["openapi-3-1"]) !== null && a !== void 0 && a.dereferenceDiscriminatorMapping) || !z(e.key) || !z(e.value) || this.indirections.includes(e))
      return !1;
    this.indirections.push(e);
    const [u, f] = this.toAncestorLineage([...i, n]), l = [...f].findLast(pt), d = L(l.getMetaProperty("ancestorsSchemaIdentifiers")), h = T(e.value), p = /^[a-zA-Z0-9\\.\\-_]+$/.test(h) ? `#/components/schemas/${h}` : h, v = new Yt({
      $ref: p
    });
    v.setMetaProperty("ancestorsSchemaIdentifiers", d), f.add(v);
    const g = new cr({
      reference: this.reference,
      namespace: this.namespace,
      indirections: [...this.indirections],
      options: this.options,
      refractCache: this.refractCache,
      ancestors: u,
      allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
    }), y = await $s(v, g, {
      keyMap: ht,
      nodeTypeGetter: it
    });
    f.delete(v), this.indirections.pop();
    const x = Pe(e);
    return x.value.setMetaProperty("ref-schema", y), o.replaceWith(x, tt), n ? void 0 : x;
  }
  async SchemaElement(e, r, n, s, i, o) {
    if (!z(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]);
    let u = await this.toReference(lt(this.reference.uri)), {
      uri: f
    } = u;
    const l = Nw(f, e), d = he(l), h = new Tn({
      uri: d
    }), m = $P(($) => $.canRead(h), this.options.resolve.resolvers), p = !m;
    let v = he(this.reference.uri) === l, g = !v;
    this.indirections.push(e);
    let y;
    try {
      if (m || p) {
        f = this.toBaseURI(l);
        const $ = l, S = Le(u.value.result);
        if (y = ia($, S), y = Le(y), y.id = $e.identify(y), !this.options.resolve.internal && v || !this.options.resolve.external && g)
          return;
      } else {
        if (f = this.toBaseURI(l), v = he(this.reference.uri) === f, g = !v, !this.options.resolve.internal && v || !this.options.resolve.external && g)
          return;
        u = await this.toReference(lt(l));
        const $ = nt(l), S = Le(u.value.result);
        y = ft(S, $), y = Le(y), y.id = $e.identify(y);
      }
    } catch ($) {
      if (p && $ instanceof kp)
        if (sa(Xr(l))) {
          if (v = he(this.reference.uri) === f, g = !v, !this.options.resolve.internal && v || !this.options.resolve.external && g)
            return;
          u = await this.toReference(lt(l));
          const S = Xr(l), A = Le(u.value.result);
          y = id(S, A), y = Le(y), y.id = $e.identify(y);
        } else {
          if (f = this.toBaseURI(l), v = he(this.reference.uri) === f, g = !v, !this.options.resolve.internal && v || !this.options.resolve.external && g)
            return;
          u = await this.toReference(lt(l));
          const S = nt(l), A = Le(u.value.result);
          y = ft(A, S), y = Le(y), y.id = $e.identify(y);
        }
      else
        throw $;
    }
    if (e === y)
      throw new ye("Recursive Schema Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(y)) {
      if (u.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var x, b;
        const $ = new w.RefElement(y.id, {
          type: "json-schema",
          uri: u.uri,
          $ref: T(e.$ref)
        }), A = ((x = (b = this.options.dereference.strategyOpts["openapi-3-1"]) === null || b === void 0 ? void 0 : b.circularReplacer) !== null && x !== void 0 ? x : this.options.dereference.circularReplacer)($);
        return o.replaceWith(A, tt), n ? !1 : A;
      }
    }
    const E = he(u.refSet.rootRef.uri) !== u.uri, O = ["error", "replace"].includes(this.options.dereference.circular);
    if ((g || E || pt(y) && z(y.$ref) || O) && !a.includesCycle(y)) {
      c.add(e);
      const $ = new cr({
        reference: u,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a,
        allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
      });
      y = await $s(y, $, {
        keyMap: ht,
        nodeTypeGetter: it
      }), c.delete(e);
    }
    if (this.indirections.pop(), sd(y)) {
      const $ = L(y);
      return $.setMetaProperty("id", $e.generateId()), $.setMetaProperty("ref-fields", {
        $ref: T(e.$ref),
        $refBaseURI: l
      }), $.setMetaProperty("ref-origin", u.uri), $.setMetaProperty("ref-referencing-element-id", L($e.identify(e))), o.replaceWith($, tt), n ? !1 : $;
    }
    if (pt(y)) {
      var _;
      const $ = new Yt([...y.content], L(y.meta), L(y.attributes));
      if ($.setMetaProperty("id", $e.generateId()), e.forEach((S, A, C) => {
        $.remove(T(A)), $.content.push(C);
      }), $.remove("$ref"), $.setMetaProperty("ref-fields", {
        $ref: T(e.$ref),
        $refBaseURI: l
      }), $.setMetaProperty("ref-origin", u.uri), $.setMetaProperty("ref-referencing-element-id", L($e.identify(e))), (_ = this.options.dereference.strategyOpts["openapi-3-1"]) !== null && _ !== void 0 && _.dereferenceDiscriminatorMapping) {
        var I;
        const S = i[i.length - 1], A = [...c].findLast(pt), C = A == null ? void 0 : A.getMetaProperty("schemaName"), V = T($.getMetaProperty("schemaName"));
        if (V && C && // @ts-ignore
        S !== null && S !== void 0 && (I = S.classes) !== null && I !== void 0 && I.contains("json-schema-allOf")) {
          var P;
          const q = (P = this.allOfDiscriminatorMapping.get(V)) !== null && P !== void 0 ? P : [];
          q.push(A), this.allOfDiscriminatorMapping.set(V, q);
        }
      }
      y = $;
    }
    return o.replaceWith(y, tt), n ? void 0 : y;
  }
}
const TN = Oe[Symbol.for("nodejs.util.promisify.custom")];
class _N extends U_ {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canDereference(e) {
    var r;
    return e.mediaType !== "text/plain" ? Wr.includes(e.mediaType) : Tw((r = e.parseResult) === null || r === void 0 ? void 0 : r.result);
  }
  async dereference(e, r) {
    var n;
    const s = Vt(nd), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new Gr(), o = new Gr();
    let a = i, c;
    i.has(e.uri) ? c = i.find(RS(e.uri, "uri")) : (c = new Ct({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((l) => new Ct({
      ...l,
      value: L(l.value)
    })).forEach((l) => o.add(l)), c = o.find((l) => l.uri === e.uri), a = o);
    const u = new cr({
      reference: c,
      namespace: s,
      options: r
    }), f = await TN(a.rootRef.value, u, {
      keyMap: ht,
      nodeTypeGetter: it
    });
    return r.dereference.immutable && o.refs.filter((l) => l.uri.startsWith("immutable://")).map((l) => new Ct({
      ...l,
      uri: l.uri.replace(/^immutable:\/\//, "")
    })).forEach((l) => i.add(l)), r.dereference.refSet === null && i.clean(), o.clean(), f;
  }
}
const $N = (t) => t.slice(2), ut = (t) => {
  const e = $N(t);
  return e.reduce((r, n, s) => {
    if (bt(n)) {
      const i = String(T(n.key));
      r.push(i);
    } else if (Ne(e[s - 2])) {
      const i = e[s - 2].content.indexOf(n);
      r.push(i);
    }
    return r;
  }, []);
};
class CN {
  constructor({
    modelPropertyMacro: e,
    options: r
  }) {
    j(this, "modelPropertyMacro");
    j(this, "options");
    j(this, "SchemaElement", {
      leave: (e, r, n, s, i) => {
        typeof e.properties > "u" || re(e.properties) && e.properties.forEach((o) => {
          if (re(o))
            try {
              const u = this.modelPropertyMacro(T(o));
              o.set("default", u);
            } catch (u) {
              var a, c;
              const f = new Error(u, {
                cause: u
              });
              f.fullPath = [...ut([...i, n, e]), "properties"], (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, f);
            }
        });
      }
    });
    this.modelPropertyMacro = e, this.options = r;
  }
}
class IN {
  constructor({
    options: e
  }) {
    j(this, "options");
    j(this, "SchemaElement", {
      leave(e, r, n, s, i) {
        if (typeof e.allOf > "u") return;
        if (!Ne(e.allOf)) {
          var o, a;
          const l = new TypeError("allOf must be an array");
          l.fullPath = [...ut([...i, n, e]), "allOf"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, l);
          return;
        }
        if (e.allOf.isEmpty) {
          e.remove("allOf");
          return;
        }
        if (!e.allOf.content.every(pt)) {
          var u, f;
          const l = new TypeError("Elements in allOf must be objects");
          l.fullPath = [...ut([...i, n, e]), "allOf"], (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (f = u.push) === null || f === void 0 || f.call(u, l);
          return;
        }
        for (; e.hasKey("allOf"); ) {
          const {
            allOf: l
          } = e;
          e.remove("allOf");
          const d = ot.all([...l.content, e], {
            customMerge: (h) => T(h) === "enum" ? (m, p) => {
              if (Kr(["json-schema-enum"], m) && Kr(["json-schema-enum"], p)) {
                const v = (y, x) => Ne(y) || Ne(x) || re(y) || re(x) ? !1 : y.equals(T(x)), g = Pe(m);
                return g.content = $S(v)([...m.content, ...p.content]), g;
              }
              return ot(m, p);
            } : ot
          });
          if (e.hasKey("$$ref") || d.remove("$$ref"), e.hasKey("example")) {
            const h = d.getMember("example");
            h && (h.value = e.get("example"));
          }
          if (e.hasKey("examples")) {
            const h = d.getMember("examples");
            h && (h.value = e.get("examples"));
          }
          e.content = d.content;
        }
      }
    });
    this.options = e;
  }
}
var ur;
class MN {
  constructor({
    parameterMacro: e,
    options: r
  }) {
    j(this, "parameterMacro");
    j(this, "options");
    fn(this, ur);
    j(this, "OperationElement", {
      enter: (e) => {
        Rr(this, ur, e);
      },
      leave: () => {
        Rr(this, ur, void 0);
      }
    });
    j(this, "ParameterElement", {
      leave: (e, r, n, s, i) => {
        const o = qe(this, ur) ? T(qe(this, ur)) : null, a = T(e);
        try {
          const f = this.parameterMacro(o, a);
          e.set("default", f);
        } catch (f) {
          var c, u;
          const l = new Error(f, {
            cause: f
          });
          l.fullPath = ut([...i, n]), (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, l);
        }
      }
    });
    this.parameterMacro = e, this.options = r;
  }
}
ur = new WeakMap();
const Cs = (t) => {
  if (t.cause == null) return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
};
class FN extends Ot {
}
const {
  wrapError: jf
} = Dp, Pf = Oe[Symbol.for("nodejs.util.promisify.custom")], rt = new Mp(), ir = (t, e, r, n) => {
  bt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class xn extends cr {
  constructor({
    allowMetaPatches: r = !0,
    useCircularStructures: n = !1,
    basePath: s = null,
    ...i
  }) {
    super(i);
    j(this, "useCircularStructures");
    j(this, "allowMetaPatches");
    j(this, "basePath");
    this.allowMetaPatches = r, this.useCircularStructures = n, this.basePath = s;
  }
  async ReferenceElement(r, n, s, i, o, a) {
    try {
      if (this.indirections.includes(r))
        return !1;
      const [m, p] = this.toAncestorLineage([...o, s]), v = this.toBaseURI(T(r.$ref)), g = he(this.reference.uri) === v, y = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && y)
        return !1;
      const x = await this.toReference(T(r.$ref)), b = Re(v, T(r.$ref));
      this.indirections.push(r);
      const E = nt(b);
      let O = ft(x.value.result, E);
      if (O.id = rt.identify(O), pr(O)) {
        const $ = T(r.meta.get("referenced-element")), S = `${$}-${T(rt.identify(O))}`;
        this.refractCache.has(S) ? O = this.refractCache.get(S) : de(O) ? (O = sr.refract(O), O.setMetaProperty("referenced-element", $), this.refractCache.set(S, O)) : (O = this.namespace.getElementClass($).refract(O), this.refractCache.set(S, O));
      }
      if (r === O)
        throw new ye("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(O)) {
        if (x.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, u;
          const $ = new w.RefElement(O.id, {
            type: "reference",
            uri: x.uri,
            $ref: T(r.$ref),
            baseURI: b,
            referencingElement: r
          }), A = ((c = (u = this.options.dereference.strategyOpts["openapi-3-1"]) === null || u === void 0 ? void 0 : u.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)($);
          return a.replaceWith($, ir), s ? !1 : A;
        }
      }
      const _ = he(x.refSet.rootRef.uri) !== x.uri, I = ["error", "replace"].includes(this.options.dereference.circular);
      if ((y || _ || jr(O) || I) && !m.includesCycle(O)) {
        var f;
        p.add(r);
        const $ = new xn({
          reference: x,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...ut([...o, s, r]), "$ref"]
        });
        O = await Pf(O, $, {
          keyMap: ht,
          nodeTypeGetter: it
        }), p.delete(r);
      }
      this.indirections.pop();
      const P = Pe(O);
      if (P.setMetaProperty("ref-fields", {
        $ref: T(r.$ref),
        description: T(r.description),
        summary: T(r.summary)
      }), P.setMetaProperty("ref-origin", x.uri), P.setMetaProperty("ref-referencing-element-id", L(rt.identify(r))), re(O) && (r.hasKey("description") && "description" in O && (P.remove("description"), P.set("description", r.get("description"))), r.hasKey("summary") && "summary" in O && (P.remove("summary"), P.set("summary", r.get("summary")))), this.allowMetaPatches && re(P) && !P.hasKey("$$ref")) {
        const $ = Re(v, b);
        P.set("$$ref", $);
      }
      return a.replaceWith(P, ir), s ? !1 : P;
    } catch (m) {
      var l, d, h;
      const p = Cs(m), v = jf(p, {
        baseDoc: this.reference.uri,
        $ref: T(r.$ref),
        pointer: nt(T(r.$ref)),
        fullPath: (l = this.basePath) !== null && l !== void 0 ? l : [...ut([...o, s, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (h = d.push) === null || h === void 0 || h.call(d, v);
      return;
    }
  }
  async PathItemElement(r, n, s, i, o, a) {
    try {
      if (!z(r.$ref))
        return;
      if (this.indirections.includes(r) || Kr(["cycle"], r.$ref))
        return !1;
      const [m, p] = this.toAncestorLineage([...o, s]), v = this.toBaseURI(T(r.$ref)), g = he(this.reference.uri) === v, y = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && y)
        return;
      const x = await this.toReference(T(r.$ref)), b = Re(v, T(r.$ref));
      this.indirections.push(r);
      const E = nt(b);
      let O = ft(x.value.result, E);
      if (O.id = rt.identify(O), pr(O)) {
        const P = `path-item-${T(rt.identify(O))}`;
        this.refractCache.has(P) ? O = this.refractCache.get(P) : (O = Wt.refract(O), this.refractCache.set(P, O));
      }
      if (r === O)
        throw new ye("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(O)) {
        if (x.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, u;
          const P = new w.RefElement(O.id, {
            type: "path-item",
            uri: x.uri,
            $ref: T(r.$ref),
            baseURI: b,
            referencingElement: r
          }), S = ((c = (u = this.options.dereference.strategyOpts["openapi-3-1"]) === null || u === void 0 ? void 0 : u.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(P);
          return a.replaceWith(P, ir), s ? !1 : S;
        }
      }
      const _ = he(x.refSet.rootRef.uri) !== x.uri, I = ["error", "replace"].includes(this.options.dereference.circular);
      if ((y || _ || gr(O) && z(O.$ref) || I) && !m.includesCycle(O)) {
        var f;
        p.add(r);
        const P = new xn({
          reference: x,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...ut([...o, s, r]), "$ref"]
        });
        O = await Pf(O, P, {
          keyMap: ht,
          nodeTypeGetter: it
        }), p.delete(r);
      }
      if (this.indirections.pop(), gr(O)) {
        const P = new Wt([...O.content], L(O.meta), L(O.attributes));
        if (r.forEach(($, S, A) => {
          P.remove(T(S)), P.content.push(A);
        }), P.remove("$ref"), P.setMetaProperty("ref-fields", {
          $ref: T(r.$ref)
        }), P.setMetaProperty("ref-origin", x.uri), P.setMetaProperty("ref-referencing-element-id", L(rt.identify(r))), this.allowMetaPatches && typeof P.get("$$ref") > "u") {
          const $ = Re(v, b);
          P.set("$$ref", $);
        }
        O = P;
      }
      return a.replaceWith(O, ir), s ? void 0 : O;
    } catch (m) {
      var l, d, h;
      const p = Cs(m), v = jf(p, {
        baseDoc: this.reference.uri,
        $ref: T(r.$ref),
        pointer: nt(T(r.$ref)),
        fullPath: (l = this.basePath) !== null && l !== void 0 ? l : [...ut([...o, s, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (h = d.push) === null || h === void 0 || h.call(d, v);
      return;
    }
  }
  async SchemaElement(r, n, s, i, o, a) {
    try {
      if (!z(r.$ref))
        return;
      if (this.indirections.includes(r))
        return !1;
      const [m, p] = this.toAncestorLineage([...o, s]);
      let v = await this.toReference(lt(this.reference.uri)), {
        uri: g
      } = v;
      const y = Nw(g, r), x = he(y), b = new Tn({
        uri: x
      }), E = !this.options.resolve.resolvers.some((A) => A.canRead(b)), O = !E;
      let _ = he(this.reference.uri) === y, I = !_;
      this.indirections.push(r);
      let P;
      try {
        if (E || O) {
          g = this.toBaseURI(y);
          const A = y, C = Le(v.value.result);
          if (P = ia(A, C), P = Le(P), P.id = rt.identify(P), !this.options.resolve.internal && _ || !this.options.resolve.external && I)
            return;
        } else {
          if (g = this.toBaseURI(y), _ = he(this.reference.uri) === g, I = !_, !this.options.resolve.internal && _ || !this.options.resolve.external && I)
            return;
          v = await this.toReference(lt(y));
          const A = nt(y), C = Le(v.value.result);
          P = ft(C, A), P = Le(P), P.id = rt.identify(P);
        }
      } catch (A) {
        if (O && A instanceof kp)
          if (sa(Xr(y))) {
            if (_ = he(this.reference.uri) === g, I = !_, !this.options.resolve.internal && _ || !this.options.resolve.external && I)
              return;
            v = await this.toReference(lt(y));
            const C = Xr(y), V = Le(v.value.result);
            P = id(C, V), P = Le(P), P.id = rt.identify(P);
          } else {
            if (g = this.toBaseURI(T(y)), _ = he(this.reference.uri) === g, I = !_, !this.options.resolve.internal && _ || !this.options.resolve.external && I)
              return;
            v = await this.toReference(lt(y));
            const C = nt(y), V = Le(v.value.result);
            P = ft(V, C), P = Le(P), P.id = rt.identify(P);
          }
        else
          throw A;
      }
      if (r === P)
        throw new ye("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(P)) {
        if (v.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, u;
          const A = new w.RefElement(P.id, {
            type: "json-schema",
            uri: v.uri,
            $ref: T(r.$ref),
            baseURI: Re(g, y),
            referencingElement: r
          }), V = ((c = (u = this.options.dereference.strategyOpts["openapi-3-1"]) === null || u === void 0 ? void 0 : u.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(A);
          return a.replaceWith(V, ir), s ? !1 : V;
        }
      }
      const $ = he(v.refSet.rootRef.uri) !== v.uri, S = ["error", "replace"].includes(this.options.dereference.circular);
      if ((I || $ || pt(P) && z(P.$ref) || S) && !m.includesCycle(P)) {
        var f;
        p.add(r);
        const A = new xn({
          reference: v,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: m,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...ut([...o, s, r]), "$ref"]
        });
        P = await Pf(P, A, {
          keyMap: ht,
          nodeTypeGetter: it
        }), p.delete(r);
      }
      if (this.indirections.pop(), sd(P)) {
        const A = L(P);
        return A.setMetaProperty("ref-fields", {
          $ref: T(r.$ref)
        }), A.setMetaProperty("ref-origin", v.uri), A.setMetaProperty("ref-referencing-element-id", L(rt.identify(r))), a.replaceWith(A, ir), s ? !1 : A;
      }
      if (pt(P)) {
        const A = new Yt([...P.content], L(P.meta), L(P.attributes));
        if (r.forEach((C, V, q) => {
          A.remove(T(V)), A.content.push(q);
        }), A.remove("$ref"), A.setMetaProperty("ref-fields", {
          $ref: T(r.$ref)
        }), A.setMetaProperty("ref-origin", v.uri), A.setMetaProperty("ref-referencing-element-id", L(rt.identify(r))), this.allowMetaPatches && typeof A.get("$$ref") > "u") {
          const C = Re(g, y);
          A.set("$$ref", C);
        }
        P = A;
      }
      return a.replaceWith(P, ir), s ? void 0 : P;
    } catch (m) {
      var l, d, h;
      const p = Cs(m), v = new FN(`Could not resolve reference: ${p.message}`, {
        baseDoc: this.reference.uri,
        $ref: T(r.$ref),
        fullPath: (l = this.basePath) !== null && l !== void 0 ? l : [...ut([...o, s, r]), "$ref"],
        cause: p
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (h = d.push) === null || h === void 0 || h.call(d, v);
      return;
    }
  }
  // eslint-disable-next-line class-methods-use-this
  async LinkElement() {
  }
  async ExampleElement(r, n, s, i, o, a) {
    try {
      return await super.ExampleElement(r, n, s, i, o, a);
    } catch (l) {
      var c, u, f;
      const d = Cs(l), h = jf(d, {
        baseDoc: this.reference.uri,
        externalValue: T(r.externalValue),
        fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...ut([...o, s, r]), "externalValue"]
      });
      (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (f = u.push) === null || f === void 0 || f.call(u, h);
      return;
    }
  }
}
const kN = jo[Symbol.for("nodejs.util.promisify.custom")];
class NN {
  constructor({
    parameterMacro: e,
    modelPropertyMacro: r,
    mode: n,
    options: s,
    ...i
  }) {
    const o = [];
    o.push(new xn({
      ...i,
      options: s
    })), typeof r == "function" && o.push(new CN({
      modelPropertyMacro: r,
      options: s
    })), n !== "strict" && o.push(new IN({
      options: s
    })), typeof e == "function" && o.push(new MN({
      parameterMacro: e,
      options: s
    }));
    const a = kN(o, {
      nodeTypeGetter: it
    });
    Object.assign(this, a);
  }
}
const DN = Oe[Symbol.for("nodejs.util.promisify.custom")];
class Dw extends _N {
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
    j(this, "allowMetaPatches");
    j(this, "parameterMacro");
    j(this, "modelPropertyMacro");
    j(this, "mode");
    j(this, "ancestors");
    this.name = "openapi-3-1-swagger-client", this.allowMetaPatches = r, this.parameterMacro = n, this.modelPropertyMacro = s, this.mode = i, this.ancestors = [...o];
  }
  async dereference(r, n) {
    var s;
    const i = Vt(nd), o = (s = n.dereference.refSet) !== null && s !== void 0 ? s : new Gr(), a = new Gr();
    let c = o, u;
    o.has(r.uri) ? u = o.find((d) => d.uri === r.uri) : (u = new Ct({
      uri: r.uri,
      value: r.parseResult
    }), o.add(u)), n.dereference.immutable && (o.refs.map((d) => new Ct({
      ...d,
      value: L(d.value)
    })).forEach((d) => a.add(d)), u = a.find((d) => d.uri === r.uri), c = a);
    const f = new NN({
      reference: u,
      namespace: i,
      options: n,
      allowMetaPatches: this.allowMetaPatches,
      ancestors: this.ancestors,
      modelPropertyMacro: this.modelPropertyMacro,
      mode: this.mode,
      parameterMacro: this.parameterMacro
    }), l = await DN(c.rootRef.value, f, {
      keyMap: ht,
      nodeTypeGetter: it
    });
    return n.dereference.immutable && a.refs.filter((d) => d.uri.startsWith("immutable://")).map((d) => new Ct({
      ...d,
      uri: d.uri.replace(/^immutable:\/\//, "")
    })).forEach((d) => o.add(d)), n.dereference.refSet === null && o.clean(), a.clean(), l;
  }
}
const qN = (t) => {
  const e = T(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
  return new w.ObjectElement({
    $ref: e
  }, L(r.meta), L(r.attributes));
}, oa = async (t) => {
  const {
    spec: e,
    timeout: r,
    redirects: n,
    requestInterceptor: s,
    responseInterceptor: i,
    pathDiscriminator: o = [],
    allowMetaPatches: a = !1,
    useCircularStructures: c = !1,
    skipNormalization: u = !1,
    parameterMacro: f = null,
    modelPropertyMacro: l = null,
    mode: d = "non-strict",
    strategies: h
  } = t;
  try {
    const {
      cache: m
    } = oa, p = h.find((q) => q.match(e)), v = mo(ei()) ? ei() : qs, g = Bh(t), y = Re(v, g);
    let x;
    m.has(e) ? x = m.get(e) : (x = nr.refract(e), x.classes.push("result"), m.set(e, x));
    const b = new yt([x]), E = zO(o), O = E === "" ? "" : `#${E}`, _ = ft(x, E), I = new Ct({
      uri: y,
      value: b
    }), P = new Gr({
      refs: [I]
    });
    E !== "" && (P.rootRef = void 0);
    const $ = [/* @__PURE__ */ new Set([_])], S = [], A = await z_(_, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${y}${O}`,
        resolvers: [new Cw({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [new EN()]
      },
      parse: {
        mediaType: Wr.latest(),
        parsers: [new Fw({
          allowEmpty: !1,
          sourceMap: !1
        }), new kw({
          allowEmpty: !1,
          sourceMap: !1
        }), new Iw({
          allowEmpty: !1,
          sourceMap: !1
        }), new Mw({
          allowEmpty: !1,
          sourceMap: !1
        }), new wN({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [new Dw({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: f,
          modelPropertyMacro: l,
          mode: d,
          ancestors: $
        })],
        refSet: P,
        dereferenceOpts: {
          errors: S
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? VS.dereference.circularReplacer : qN
      }
    }), C = I_(_, A, x), V = u ? C : p.normalize(C);
    return {
      spec: T(V),
      errors: S
    };
  } catch (m) {
    if (m instanceof dr)
      return {
        spec: e,
        errors: []
      };
    throw m;
  }
};
oa.cache = /* @__PURE__ */ new WeakMap();
const jb = (t) => {
  if (!re(t)) return t;
  const e = [$F({
    operationIdNormalizer: (n, s, i) => Kn({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), PF(), RF(), CF(), IF()];
  return Rt(t, e, {
    toolboxCreator: $w,
    visitorOptions: {
      keyMap: ht,
      nodeTypeGetter: it
    }
  });
}, LN = (t) => (e) => {
  const r = nr.refract(e);
  r.classes.push("result");
  const n = t(r), s = T(n);
  return oa.cache.set(s, n), T(n);
}, VN = {
  name: "openapi-3-1-apidom",
  match(t) {
    return Bp(t);
  },
  normalize(t) {
    if (!ge(t) && mt(t) && !t.$$normalized) {
      const e = LN(jb)(t);
      return e.$$normalized = !0, e;
    }
    return ge(t) ? jb(t) : t;
  },
  async resolve(t) {
    return oa(t);
  }
};
function qw(t, e, r) {
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
function BN(t, e) {
  return qw(t, e, !0) || null;
}
function Lw(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function UN(t, e) {
  return !t || !t.paths ? null : BN(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = Kn(s, r, n), a = Lw(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: JN
} = ER, HN = () => null, GN = (t) => Array.isArray(t) ? t : [t], Pb = {
  mapTagOperations: WN,
  makeExecute: KN
};
function KN(t = {}) {
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
function zN(t = {}) {
  const e = Pb.makeExecute(t);
  return {
    apis: Pb.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function WN({
  spec: t,
  cb: e = HN,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return qw(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? GN(c.tags) : [r]).forEach((f) => {
      if (typeof f != "string")
        return;
      i[f] = i[f] || {};
      const l = i[f], d = Kn(c, o, a, {
        v2OperationIdCompatibilityMode: n
      }), h = e({
        spec: t,
        pathName: o,
        method: a,
        operation: c,
        operationId: d
      });
      if (s[d])
        s[d] += 1, l[`${d}${s[d]}`] = h;
      else if (typeof l[d] < "u") {
        const m = s[d] || 1;
        s[d] = m + 1, l[`${d}${s[d]}`] = h;
        const p = l[d];
        delete l[d], l[`${d}${m}`] = p;
      } else
        l[d] = h;
    });
  }), i;
}
function YN() {
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
const XN = (t, e, r, n, s) => {
  if (t === X.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-url-template", Ze.charsToString(e, r, n)]);
  }
  return X.SEM_OK;
}, QN = (t, e, r, n, s) => {
  if (t === X.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable", Ze.charsToString(e, r, n)]);
  }
  return X.SEM_OK;
}, ZN = (t, e, r, n, s) => {
  if (t === X.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable-name", Ze.charsToString(e, r, n)]);
  }
  return X.SEM_OK;
}, eD = (t, e, r, n, s) => {
  if (t === X.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["literals", Ze.charsToString(e, r, n)]);
  }
  return X.SEM_OK;
}, tD = new YN(), Vw = (t) => {
  const e = new ct();
  return e.ast = new Jp(), e.ast.callbacks["server-url-template"] = XN, e.ast.callbacks["server-variable"] = QN, e.ast.callbacks["server-variable-name"] = ZN, e.ast.callbacks.literals = eD, {
    result: e.parse(tD, "server-url-template", t),
    ast: e.ast
  };
}, rD = (t, {
  strict: e = !1
} = {}) => {
  try {
    const r = Vw(t);
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
}, nD = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, sD = (t) => nD(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), iD = ["literals", "server-variable-name"], oD = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: sD
    },
    ...r
  }, i = Vw(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => iD.includes(c)).map(([c, u]) => c === "server-variable-name" ? Object.hasOwn(e, u) ? s.encoder(e[u], u) : `{${u}}` : u).join("");
};
function Bw() {
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
const aD = (t, e, r, n, s) => (t === X.SEM_PRE && s.push(["slash", Ze.charsToString(e, r, n)]), X.SEM_OK), cD = (t, e, r, n, s) => {
  if (t === X.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["path-template", Ze.charsToString(e, r, n)]);
  }
  return X.SEM_OK;
}, uD = (t, e, r, n, s) => (t === X.SEM_PRE && s.push(["path-literal", Ze.charsToString(e, r, n)]), X.SEM_OK), lD = (t, e, r, n, s) => (t === X.SEM_PRE && s.push(["template-expression", Ze.charsToString(e, r, n)]), X.SEM_OK), fD = (t, e, r, n, s) => (t === X.SEM_PRE && s.push(["template-expression-param-name", Ze.charsToString(e, r, n)]), X.SEM_OK), hD = new Bw(), pD = (t) => {
  const e = new ct();
  return e.ast = new Jp(), e.ast.callbacks["path-template"] = cD, e.ast.callbacks.slash = aD, e.ast.callbacks["path-literal"] = uD, e.ast.callbacks["template-expression"] = lD, e.ast.callbacks["template-expression-param-name"] = fD, {
    result: e.parse(hD, "path-template", t),
    ast: e.ast
  };
}, dD = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, mD = (t) => dD(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), yD = ["slash", "path-literal", "template-expression-param-name"], _h = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: mD
    },
    ...r
  }, i = pD(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => yD.includes(c)).map(([c, u]) => c === "template-expression-param-name" ? Object.prototype.hasOwnProperty.call(e, u) ? s.encoder(e[u], u) : `{${u}}` : u).join("");
};
new Bw();
new ct();
const vD = {
  body: gD,
  header: xD,
  query: OD,
  path: SD,
  formData: bD
};
function gD({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function bD({
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
function xD({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function SD({
  req: t,
  value: e,
  parameter: r,
  baseURL: n
}) {
  if (e !== void 0) {
    const s = t.url.replace(n, ""), i = _h(s, {
      [r.name]: e
    });
    t.url = n + i;
  }
}
function OD({
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
function aa(t, e) {
  return e.includes("application/json") ? typeof t == "string" ? t : (Array.isArray(t) && (t = t.map((r) => {
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  })), JSON.stringify(t)) : String(t);
}
function Ts() {
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
new Ts();
const wD = (t) => {
  if (typeof t != "string" || [...t].length !== 1)
    throw new TypeError("Input must be a single character string.");
  const e = t.codePointAt(0);
  return e <= 127 ? `%${e.toString(16).toUpperCase().padStart(2, "0")}` : encodeURIComponent(t);
}, ED = (t) => t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, ""), ca = (t) => t.length >= 2 && t.startsWith('"') && t.endsWith('"'), Uw = (t) => ca(t) ? t.slice(1, -1) : t, Jw = (t) => `"${t}"`, Hw = (t) => t, AD = new ct(), jD = new Ts(), od = (t, {
  strict: e = !0,
  quoted: r = null
} = {}) => {
  try {
    const n = e ? "cookie-value" : "lenient-cookie-value", s = AD.parse(jD, n, t);
    return typeof r == "boolean" ? s.success && r === ca(t) : s.success;
  } catch {
    return !1;
  }
}, Gw = (t) => {
  const r = new TextEncoder().encode(t).reduce((n, s) => n + String.fromCharCode(s), "");
  return btoa(r);
}, PD = (t, e = Gw) => {
  const r = String(t);
  if (od(r)) return r;
  const n = ca(r), s = n ? Uw(r) : r, i = e(s);
  return n ? Jw(i) : i;
}, RD = (t) => ED(Gw(t)), TD = (t) => PD(t, RD), _D = new ct(), $D = new Ts(), Kw = (t, {
  strict: e = !0
} = {}) => {
  try {
    const r = e ? "cookie-name" : "lenient-cookie-name";
    return _D.parse($D, r, t).success;
  } catch {
    return !1;
  }
}, CD = (t) => {
  if (!Kw(t))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, zw = (t) => {
  if (!od(t))
    throw new TypeError(`Invalid cookie value: ${t}`);
}, Rb = {
  encoders: {
    name: Hw,
    value: TD
  },
  validators: {
    name: CD,
    value: zw
  }
}, ID = (t, e, r = {}) => {
  const n = {
    ...r,
    encoders: {
      ...Rb.encoders,
      ...r.encoders
    },
    validators: {
      ...Rb.validators,
      ...r.validators
    }
  }, s = n.encoders.name(t), i = n.encoders.value(e);
  return n.validators.name(s), n.validators.value(i), `${s}=${i}`;
}, MD = (t, e = {}) => (Array.isArray(t) ? t : typeof t == "object" && t !== null ? Object.entries(t) : []).map(([n, s]) => ID(n, s, e)).join("; "), FD = new ct(), kD = new Ts(), ND = (t) => {
  const e = String(t);
  if (od(e)) return e;
  const r = ca(e), n = r ? Uw(e) : e;
  let s = "";
  for (const i of n)
    s += FD.parse(kD, "cookie-octet", i).success ? i : wD(i);
  return r ? Jw(s) : s;
};
new ct();
new Ts();
const DD = (t) => {
  if (!Kw(t, {
    strict: !1
  }))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, qD = "%3D", LD = "%26", VD = (t) => ND(t).replace(/[=&]/gu, (e) => e === "=" ? qD : LD), $h = (t, e = {}) => MD(t, co({
  encoders: {
    name: Hw,
    value: VD
  },
  validators: {
    name: DD,
    value: zw
  }
}, e));
function BD({
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
  let u;
  if (a) {
    const f = Object.keys(a)[0];
    u = _h(c, {
      [s]: e
    }, {
      encoder: (l) => Mb(aa(l, f))
    });
  } else
    u = _h(c, {
      [s]: e
    }, {
      encoder: (f) => Mh({
        key: r.name,
        value: f,
        style: i || "simple",
        explode: o ?? !1,
        escape: "reserved"
      })
    });
  t.url = n + u;
}
function UD({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const n = Object.keys(r.content)[0], s = aa(e, n);
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
const JD = ["accept", "authorization", "content-type"];
function HD({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(JD.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = aa(r, n);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = Mh({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function GD({
  req: t,
  parameter: e,
  value: r
}) {
  const {
    name: n
  } = e;
  if (t.headers = t.headers || {}, r !== void 0 && e.content) {
    const i = Object.keys(e.content)[0], o = aa(r, i);
    t.headers.Cookie = $h({
      [n]: o
    });
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    var s;
    const i = Mh({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: (s = e.explode) !== null && s !== void 0 ? s : !1
    }), o = Array.isArray(r) && e.explode ? `${n}=${i}` : i;
    t.headers.Cookie = $h({
      [n]: o
    });
  }
}
const KD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: GD,
  header: HD,
  path: BD,
  query: UD
}, Symbol.toStringTag, { value: "Module" })), zD = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: Ww
} = zD;
function WD(t, e) {
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
  e = YD({
    request: e,
    securities: s,
    operation: r,
    spec: i
  });
  const c = r.requestBody || {}, u = Object.keys(c.content || {}), f = a && u.indexOf(a) > -1;
  if (n || o) {
    if (a && f)
      e.headers["Content-Type"] = a;
    else if (!a) {
      const p = u[0];
      p && (e.headers["Content-Type"] = p, a = p);
    }
  } else a && f && (e.headers["Content-Type"] = a);
  if (!t.responseContentType && r.responses) {
    const p = Object.entries(r.responses).filter(([v, g]) => {
      const y = parseInt(v, 10);
      return y >= 200 && y < 300 && mt(g.content);
    }).reduce((v, [, g]) => v.concat(Object.keys(g.content)), []);
    p.length > 0 && (e.headers.accept = p.join(", "));
  }
  if (n)
    if (a) {
      if (u.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof n == "object") {
            var l, d;
            const p = (l = (d = c.content[a]) === null || d === void 0 ? void 0 : d.encoding) !== null && l !== void 0 ? l : {};
            e.form = {}, Object.keys(n).forEach((v) => {
              let g;
              try {
                g = JSON.parse(n[v]);
              } catch {
                g = n[v];
              }
              e.form[v] = {
                value: g,
                encoding: p[v] || {}
              };
            });
          } else if (typeof n == "string") {
            var h, m;
            const p = (h = (m = c.content[a]) === null || m === void 0 ? void 0 : m.encoding) !== null && h !== void 0 ? h : {};
            try {
              e.form = {};
              const v = JSON.parse(n);
              Object.entries(v).forEach(([g, y]) => {
                e.form[g] = {
                  value: y,
                  encoding: p[g] || {}
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
function YD({
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
  } = e, a = r.security || n.security || [], c = o && !!Object.keys(o).length, u = (n == null || (s = n.components) === null || s === void 0 ? void 0 : s.securitySchemes) || {};
  return i.headers = i.headers || {}, i.query = i.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((f) => {
    Object.keys(f).forEach((l) => {
      const d = o[l], h = u[l];
      if (!d)
        return;
      const m = d.value || d, {
        type: p
      } = h;
      if (d) {
        if (p === "apiKey")
          h.in === "query" && (i.query[h.name] = m), h.in === "header" && (i.headers[h.name] = m), h.in === "cookie" && (i.cookies[h.name] = m);
        else if (p === "http") {
          if (/^basic$/i.test(h.scheme)) {
            const v = m.username || "", g = m.password || "", y = Ww(`${v}:${g}`);
            i.headers.Authorization = `Basic ${y}`;
          }
          /^bearer$/i.test(h.scheme) && (i.headers.Authorization = `Bearer ${m}`);
        } else if (p === "oauth2" || p === "openIdConnect") {
          const v = d.token || {}, g = h["x-tokenName"] || "access_token", y = v[g];
          let x = v.token_type;
          (!x || x.toLowerCase() === "bearer") && (x = "Bearer"), i.headers.Authorization = `${x} ${y}`;
        }
      }
    });
  }), i);
}
function XD(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = QD({
    request: e,
    securities: s,
    operation: n,
    spec: r
  }), e.body || e.form || a)
    i ? e.headers["Content-Type"] = i : Array.isArray(n.consumes) ? [e.headers["Content-Type"]] = n.consumes : Array.isArray(r.consumes) ? [e.headers["Content-Type"]] = r.consumes : n.parameters && n.parameters.filter((c) => c.type === "file").length ? e.headers["Content-Type"] = "multipart/form-data" : n.parameters && n.parameters.filter((c) => c.in === "formData").length && (e.headers["Content-Type"] = "application/x-www-form-urlencoded");
  else if (i) {
    const c = n.parameters && n.parameters.filter((f) => f.in === "body").length > 0, u = n.parameters && n.parameters.filter((f) => f.in === "formData").length > 0;
    (c || u) && (e.headers["Content-Type"] = i);
  }
  return !o && Array.isArray(n.produces) && n.produces.length > 0 && (e.headers.accept = n.produces.join(", ")), e;
}
function QD({
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
  } = e, a = r.security || o, c = i && !!Object.keys(i).length, u = n.securityDefinitions;
  return s.headers = s.headers || {}, s.query = s.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((f) => {
    Object.keys(f).forEach((l) => {
      const d = i[l];
      if (!d)
        return;
      const {
        token: h
      } = d, m = d.value || d, p = u[l], {
        type: v
      } = p, g = p["x-tokenName"] || "access_token", y = h && h[g];
      let x = h && h.token_type;
      if (d)
        if (v === "apiKey") {
          const b = p.in === "query" ? "query" : "headers";
          s[b] = s[b] || {}, s[b][p.name] = m;
        } else if (v === "basic")
          if (m.header)
            s.headers.authorization = m.header;
          else {
            const b = m.username || "", E = m.password || "";
            m.base64 = Ww(`${b}:${E}`), s.headers.authorization = `Basic ${m.base64}`;
          }
        else v === "oauth2" && y && (x = !x || x.toLowerCase() === "bearer" ? "Bearer" : x, s.headers.authorization = `${x} ${y}`);
    });
  }), s);
}
const Tb = (t) => Array.isArray(t) ? t : [], Sn = (t, {
  recurse: e = !0,
  depth: r = 1
} = {}) => {
  if (mt(t)) {
    if (t.type === "object" || t.type === "array" || Array.isArray(t.type) && (t.type.includes("object") || t.type.includes("array")))
      return t;
    if (!(r > Cb) && e) {
      const n = Array.isArray(t.oneOf) ? t.oneOf.find((i) => Sn(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (n) return n;
      const s = Array.isArray(t.anyOf) ? t.anyOf.find((i) => Sn(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (s) return s;
    }
  }
}, Rf = ({
  value: t,
  silentFail: e = !1
}) => {
  try {
    const r = JSON.parse(t);
    if (mt(r) || Array.isArray(r))
      return r;
    if (!e)
      throw new Error("Expected JSON serialized object or array");
  } catch {
    if (!e)
      throw new Error("Could not parse parameter value string as JSON Object or JSON Array");
  }
  return t;
}, Ds = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, qs), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
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
class ZD extends Ot {
}
const eq = (t, e) => e.filter((r) => r.name === t), tq = (t) => {
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
}, rq = {
  buildRequest: Yw
};
function nq({
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
  const u = t || e || Ur;
  s && i && !n && (n = Lw(s, i));
  const f = rq.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: u,
    ...c
  });
  return f.body && (mt(f.body) || Array.isArray(f.body)) && (f.body = JSON.stringify(f.body)), u(f);
}
function Yw(t) {
  const {
    spec: e,
    operationId: r,
    responseContentType: n,
    scheme: s,
    requestInterceptor: i,
    responseInterceptor: o,
    contextUrl: a,
    userFetch: c,
    server: u,
    serverVariables: f,
    http: l,
    signal: d,
    serverVariableEncoder: h
  } = t;
  let {
    parameters: m,
    parameterBuilders: p,
    baseURL: v
  } = t;
  const g = Up(e);
  p || (g ? p = KD : p = vD);
  let x = {
    url: "",
    credentials: l && l.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  d && (x.signal = d), i && (x.requestInterceptor = i), o && (x.responseInterceptor = o), c && (x.userFetch = c);
  const b = UN(e, r);
  if (!b)
    throw new ZD(`Operation ${r} not found`);
  const {
    operation: E = {},
    method: O,
    pathName: _
  } = b;
  if (v = v ?? Xw({
    spec: e,
    scheme: s,
    contextUrl: a,
    server: u,
    serverVariables: f,
    pathName: _,
    method: O,
    serverVariableEncoder: h
  }), x.url += v, !r)
    return delete x.cookies, x;
  x.url += _, x.method = `${O}`.toUpperCase(), m = m || {};
  const I = e.paths[_] || {};
  n && (x.headers.accept = n);
  const P = tq([].concat(Tb(E.parameters)).concat(Tb(I.parameters)));
  P.forEach((S) => {
    const A = p[S.in];
    let C;
    if (S.in === "body" && S.schema && S.schema.properties && (C = m), C = S && S.name && m[S.name], typeof C > "u" ? C = S && S.name && m[`${S.in}.${S.name}`] : eq(S.name, P).length > 1 && console.warn(`Parameter '${S.name}' is ambiguous because the defined spec has more than one parameter with the name: '${S.name}' and the passed-in parameter values did not define an 'in' value.`), C !== null) {
      if (typeof S.default < "u" && typeof C > "u" && (C = S.default), typeof C > "u" && S.required && !S.allowEmptyValue)
        throw new Error(`Required parameter ${S.name} is not provided`);
      g && typeof C == "string" && (gn("type", S.schema) && typeof S.schema.type == "string" && Sn(S.schema, {
        recurse: !1
      }) ? C = Rf({
        value: C,
        silentFail: !1
      }) : gn("type", S.schema) && Array.isArray(S.schema.type) && Sn(S.schema, {
        recurse: !1
      }) ? C = Rf({
        value: C,
        silentFail: !0
      }) : !gn("type", S.schema) && Sn(S.schema, {
        recurse: !0
      }) && (C = Rf({
        value: C,
        silentFail: !0
      }))), A && A({
        req: x,
        parameter: S,
        value: C,
        operation: E,
        spec: e,
        baseURL: v
      });
    }
  });
  const $ = {
    ...t,
    operation: E
  };
  if (g ? x = WD($, x) : x = XD($, x), x.cookies && Object.keys(x.cookies).length > 0) {
    const S = $h(x.cookies);
    fo(x.headers.Cookie) ? x.headers.Cookie += `; ${S}` : x.headers.Cookie = S;
  }
  return x.cookies && delete x.cookies, Fh(x);
}
const Ch = (t) => t ? t.replace(/\W/g, "") : null;
function Xw(t) {
  return Up(t.spec) ? sq(t) : oq(t);
}
const Tf = (t) => Array.isArray(t) && t.length > 0;
function sq({
  spec: t,
  pathName: e,
  method: r,
  server: n,
  contextUrl: s,
  serverVariables: i = {},
  serverVariableEncoder: o
}) {
  var a, c;
  let u = [], f = "", l;
  const d = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 || (a = a[(r || "").toLowerCase()]) === null || a === void 0 ? void 0 : a.servers, h = t == null || (c = t.paths) === null || c === void 0 || (c = c[e]) === null || c === void 0 ? void 0 : c.servers, m = t == null ? void 0 : t.servers;
  if (u = Tf(d) ? d : Tf(h) ? h : Tf(m) ? m : [$b], n && (l = u.find((p) => p.url === n), l && (f = n)), f || ([l] = u, f = l.url), rD(f, {
    strict: !0
  })) {
    const p = Object.entries({
      ...l.variables
    }).reduce((v, [g, y]) => (v[g] = y.default, v), {});
    f = oD(f, {
      ...p,
      ...i
    }, {
      encoder: typeof o == "function" ? o : OS
    });
  }
  return iq(f, s);
}
function iq(t = "", e = "") {
  const r = Ds(t && e ? Re(e, t) : t), n = Ds(e), s = Ch(r.protocol) || Ch(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function oq({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = Ds(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || Ch(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
ce.http = Ur;
ce.makeHttp = N1.bind(null, ce.http);
ce.resolveStrategies = {
  "openapi-3-1-apidom": VN,
  "openapi-3-0": HO,
  "openapi-2-0": JO,
  generic: VO
};
ce.resolve = GO({
  strategies: [ce.resolveStrategies["openapi-3-1-apidom"], ce.resolveStrategies["openapi-3-0"], ce.resolveStrategies["openapi-2-0"], ce.resolveStrategies.generic]
});
ce.resolveSubtree = B$({
  strategies: [ce.resolveStrategies["openapi-3-1-apidom"], ce.resolveStrategies["openapi-3-0"], ce.resolveStrategies["openapi-2-0"], ce.resolveStrategies.generic]
});
ce.execute = nq;
ce.serializeRes = Ex;
ce.serializeHeaders = wx;
ce.clearCache = k$;
ce.makeApisTagOperation = zN;
ce.buildRequest = Yw;
ce.helpers = {
  opId: Kn
};
ce.getBaseUrl = Xw;
ce.apidom = {
  resolve: {
    resolvers: {
      HTTPResolverSwaggerClient: Cw
    }
  },
  parse: {
    parsers: {
      JsonParser: Iw,
      YamlParser: Mw,
      OpenApiJson3_1Parser: Fw,
      OpenApiYaml3_1Parser: kw
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: Dw
    }
  }
};
function ce(t, e = {}) {
  if (typeof t == "string" ? e.url = t : e = t, !(this instanceof ce))
    return new ce(e);
  Object.assign(this, e);
  const r = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, ce.makeApisTagOperation(this)), this));
  return r.client = this, r;
}
ce.prototype = {
  http: Ur,
  execute(t) {
    return this.applyDefaults(), ce.execute({
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
    return ce.resolve({
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
ce.prototype.applyDefaults = function() {
  const {
    spec: e
  } = this, r = this.url;
  if (BO(e) && JN(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (Up(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [$b]);
  }
};
const {
  helpers: QL
} = ce;
export {
  ce as S
};
