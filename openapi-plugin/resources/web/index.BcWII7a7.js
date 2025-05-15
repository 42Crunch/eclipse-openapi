var rE = Object.defineProperty;
var hd = (t) => {
  throw TypeError(t);
};
var nE = (t, e, r) => e in t ? rE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var A = (t, e, r) => nE(t, typeof e != "symbol" ? e + "" : e, r), pd = (t, e, r) => e.has(t) || hd("Cannot " + r);
var Ne = (t, e, r) => (pd(t, e, "read from private field"), r ? r.call(t) : e.get(t)), fn = (t, e, r) => e.has(t) ? hd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), jr = (t, e, r, n) => (pd(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import { q as Ki, W as Cr } from "./TriangleExclamation.Lif_Buog.js";
const Fb = "application/json, application/yaml", Ds = "https://swagger.io", Mb = Object.freeze({
  url: "/"
}), kb = 3e3, {
  fetch: sE,
  Response: iE,
  Headers: oE,
  Request: aE,
  FormData: cE,
  File: uE,
  Blob: lE
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = sE);
typeof globalThis.Headers > "u" && (globalThis.Headers = oE);
typeof globalThis.Request > "u" && (globalThis.Request = aE);
typeof globalThis.Response > "u" && (globalThis.Response = iE);
typeof globalThis.FormData > "u" && (globalThis.FormData = cE);
typeof globalThis.File > "u" && (globalThis.File = uE);
typeof globalThis.Blob > "u" && (globalThis.Blob = lE);
function kh(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function Nb(t, e) {
  return Array.isArray(t) && t.some((r) => kh(r, e));
}
class Cf extends File {
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
const fE = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, hE = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function Db(t, e = "reserved") {
  return [...t].map((r) => {
    if (hE(r) || fE(r) && e === "unsafe")
      return r;
    const n = new TextEncoder();
    return Array.from(n.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function Nh(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? pE(t) : typeof e == "object" ? dE(t) : mE(t);
}
function Fe(t, e = !1) {
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && typeof t == "string" && t.length > 0 ? Db(t, e) : t ?? "";
}
function pE({
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
function dE({
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
function mE({
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
const yE = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, vE = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function qb(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (h) => h.toString() : (h) => encodeURIComponent(h), u = c(t);
  if (typeof a > "u" && s)
    return [[u, ""]];
  if (kh(a) || Nb(a))
    return [[u, a]];
  if (i)
    return dd(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((h) => h !== "undefined")) {
      const {
        style: h,
        explode: l,
        allowReserved: d
      } = o;
      return dd(t, a, r, {
        style: h,
        explode: l,
        allowReserved: d
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const d = typeof a == "string" ? a : JSON.stringify(a), f = c(d), m = new Cf(f, "blob", {
          type: o.contentType
        });
        return [[u, m]];
      }
      const h = c(String(a)), l = new Cf(h, "blob", {
        type: o.contentType
      });
      return [[u, l]];
    }
    return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) && a.every((h) => typeof h != "object") ? [[u, a.map(c).join(",")]] : [[u, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) ? n === "multi" ? [[u, a.map(c)]] : [[u, a.map(c).join(vE[n || "csv"])]] : [[u, ""]];
}
function dd(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (u) => Fe(u, o), c = r ? (u) => u : (u) => a(u);
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(yE[s])]] : s === "deepObject" ? Object.keys(e).map((u) => [c(`${t}[${u}]`), a(e[u])]) : i ? Object.keys(e).map((u) => [c(u), a(e[u])]) : [[c(t), Object.keys(e).map((u) => [`${c(u)},${a(e[u])}`]).join(",")]];
}
function gE(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of qb(r, n, !0))
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
const bE = (t, {
  encode: e = !0
} = {}) => {
  const r = (i, o, a) => (Array.isArray(a) ? a.reduce((c, u) => r(i, o, u), i) : a instanceof Date ? i.append(o, a.toISOString()) : typeof a == "object" ? Object.entries(a).reduce((c, [u, h]) => r(i, `${o}[${u}]`, h), i) : i.append(o, a), i), n = Object.entries(t).reduce((i, [o, a]) => r(i, o, a), new URLSearchParams()), s = String(n);
  return e ? s : decodeURIComponent(s);
};
function md(t) {
  const e = Object.keys(t).reduce((r, n) => {
    for (const [s, i] of qb(n, t[n]))
      i instanceof Cf ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return bE(e, {
    encode: !1
  });
}
function Dh(t = {}) {
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
      return kh(c) || Nb(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = gE(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = md(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const u = new URLSearchParams(o);
      Object.keys(r).forEach((l) => u.delete(l)), a = String(u);
    }
    const c = s(a, md(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Lb(t) {
  return typeof t > "u" || t === null;
}
function xE(t) {
  return typeof t == "object" && t !== null;
}
function SE(t) {
  return Array.isArray(t) ? t : Lb(t) ? [] : [t];
}
function OE(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function wE(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function EE(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var AE = Lb, jE = xE, PE = SE, TE = wE, RE = EE, _E = OE, je = {
  isNothing: AE,
  isObject: jE,
  toArray: PE,
  repeat: TE,
  isNegativeZero: RE,
  extend: _E
};
function Vb(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function wn(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Vb(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
wn.prototype = Object.create(Error.prototype);
wn.prototype.constructor = wn;
wn.prototype.toString = function(e) {
  return this.name + ": " + Vb(this, e);
};
var Ue = wn;
function la(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function fa(t, e) {
  return je.repeat(" ", e - t.length) + t;
}
function $E(t, e) {
  if (e = Object.create(e || null), !t.buffer) return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, u, h = Math.min(t.line + e.linesAfter, s.length).toString().length, l = e.maxLength - (e.indent + h + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    u = la(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      l
    ), a = je.repeat(" ", e.indent) + fa((t.line - c + 1).toString(), h) + " | " + u.str + `
` + a;
  for (u = la(t.buffer, n[o], s[o], t.position, l), a += je.repeat(" ", e.indent) + fa((t.line + 1).toString(), h) + " | " + u.str + `
`, a += je.repeat("-", e.indent + h + 3 + u.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    u = la(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      l
    ), a += je.repeat(" ", e.indent) + fa((t.line + c + 1).toString(), h) + " | " + u.str + `
`;
  return a.replace(/\n$/, "");
}
var CE = $E, IE = [
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
], FE = [
  "scalar",
  "sequence",
  "mapping"
];
function ME(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(n) {
      e[String(n)] = r;
    });
  }), e;
}
function kE(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (IE.indexOf(r) === -1)
      throw new Ue('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = ME(e.styleAliases || null), FE.indexOf(this.kind) === -1)
    throw new Ue('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Me = kE;
function yd(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function NE() {
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
function If(t) {
  return this.extend(t);
}
If.prototype.extend = function(e) {
  var r = [], n = [];
  if (e instanceof Me)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  else
    throw new Ue("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof Me))
      throw new Ue("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new Ue("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new Ue("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(i) {
    if (!(i instanceof Me))
      throw new Ue("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(If.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = yd(s, "implicit"), s.compiledExplicit = yd(s, "explicit"), s.compiledTypeMap = NE(s.compiledImplicit, s.compiledExplicit), s;
};
var Bb = If, Ub = new Me("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), Jb = new Me("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), Hb = new Me("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), Gb = new Bb({
  explicit: [
    Ub,
    Jb,
    Hb
  ]
});
function DE(t) {
  if (t === null) return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function qE() {
  return null;
}
function LE(t) {
  return t === null;
}
var Kb = new Me("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: DE,
  construct: qE,
  predicate: LE,
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
function VE(t) {
  if (t === null) return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function BE(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function UE(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var zb = new Me("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: VE,
  construct: BE,
  predicate: UE,
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
function JE(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function HE(t) {
  return 48 <= t && t <= 55;
}
function GE(t) {
  return 48 <= t && t <= 57;
}
function KE(t) {
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
          if (!JE(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!HE(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < e; r++)
    if (s = t[r], s !== "_") {
      if (!GE(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function zE(t) {
  var e = t, r = 1, n;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), n = e[0], (n === "-" || n === "+") && (n === "-" && (r = -1), e = e.slice(1), n = e[0]), e === "0") return 0;
  if (n === "0") {
    if (e[1] === "b") return r * parseInt(e.slice(2), 2);
    if (e[1] === "x") return r * parseInt(e.slice(2), 16);
    if (e[1] === "o") return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function WE(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !je.isNegativeZero(t);
}
var Wb = new Me("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: KE,
  construct: zE,
  predicate: WE,
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
}), YE = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function XE(t) {
  return !(t === null || !YE.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function QE(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var ZE = /^[-+]?[0-9]+e/;
function e0(t, e) {
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
  return r = t.toString(10), ZE.test(r) ? r.replace("e", ".e") : r;
}
function t0(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || je.isNegativeZero(t));
}
var Yb = new Me("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: XE,
  construct: QE,
  predicate: t0,
  represent: e0,
  defaultStyle: "lowercase"
}), Xb = Gb.extend({
  implicit: [
    Kb,
    zb,
    Wb,
    Yb
  ]
}), Qb = Xb, Zb = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), ex = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function r0(t) {
  return t === null ? !1 : Zb.exec(t) !== null || ex.exec(t) !== null;
}
function n0(t) {
  var e, r, n, s, i, o, a, c = 0, u = null, h, l, d;
  if (e = Zb.exec(t), e === null && (e = ex.exec(t)), e === null) throw new Error("Date resolve error");
  if (r = +e[1], n = +e[2] - 1, s = +e[3], !e[4])
    return new Date(Date.UTC(r, n, s));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (h = +e[10], l = +(e[11] || 0), u = (h * 60 + l) * 6e4, e[9] === "-" && (u = -u)), d = new Date(Date.UTC(r, n, s, i, o, a, c)), u && d.setTime(d.getTime() - u), d;
}
function s0(t) {
  return t.toISOString();
}
var tx = new Me("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: r0,
  construct: n0,
  instanceOf: Date,
  represent: s0
});
function i0(t) {
  return t === "<<" || t === null;
}
var rx = new Me("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: i0
}), qh = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function o0(t) {
  if (t === null) return !1;
  var e, r, n = 0, s = t.length, i = qh;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0) return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function a0(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = qh, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function c0(t) {
  var e = "", r = 0, n, s, i = t.length, o = qh;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function u0(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var nx = new Me("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: o0,
  construct: a0,
  predicate: u0,
  represent: c0
}), l0 = Object.prototype.hasOwnProperty, f0 = Object.prototype.toString;
function h0(t) {
  if (t === null) return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, f0.call(s) !== "[object Object]") return !1;
    for (i in s)
      if (l0.call(s, i))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (e.indexOf(i) === -1) e.push(i);
    else return !1;
  }
  return !0;
}
function p0(t) {
  return t !== null ? t : [];
}
var sx = new Me("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: h0,
  construct: p0
}), d0 = Object.prototype.toString;
function m0(t) {
  if (t === null) return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], d0.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1)) return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function y0(t) {
  if (t === null) return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var ix = new Me("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: m0,
  construct: y0
}), v0 = Object.prototype.hasOwnProperty;
function g0(t) {
  if (t === null) return !0;
  var e, r = t;
  for (e in r)
    if (v0.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function b0(t) {
  return t !== null ? t : {};
}
var ox = new Me("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: g0,
  construct: b0
}), Lh = Qb.extend({
  implicit: [
    tx,
    rx
  ],
  explicit: [
    nx,
    sx,
    ix,
    ox
  ]
}), Ht = Object.prototype.hasOwnProperty, qs = 1, ax = 2, cx = 3, Ls = 4, ha = 1, x0 = 2, vd = 3, S0 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, O0 = /[\x85\u2028\u2029]/, w0 = /[,\[\]\{\}]/, ux = /^(?:!|!!|![a-z\-]+!)$/i, lx = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function gd(t) {
  return Object.prototype.toString.call(t);
}
function yt(t) {
  return t === 10 || t === 13;
}
function ar(t) {
  return t === 9 || t === 32;
}
function Ge(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Ir(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function E0(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function A0(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function j0(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function bd(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function P0(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var fx = new Array(256), hx = new Array(256);
for (var Pr = 0; Pr < 256; Pr++)
  fx[Pr] = bd(Pr) ? 1 : 0, hx[Pr] = bd(Pr);
function T0(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || Lh, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function px(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = CE(r), new Ue(e, r);
}
function B(t, e) {
  throw px(t, e);
}
function Vs(t, e) {
  t.onWarning && t.onWarning.call(null, px(t, e));
}
var xd = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && B(e, "duplication of %YAML directive"), n.length !== 1 && B(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && B(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && B(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Vs(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && B(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], ux.test(s) || B(e, "ill-formed tag handle (first argument) of the TAG directive"), Ht.call(e.tagMap, s) && B(e, 'there is a previously declared suffix for "' + s + '" tag handle'), lx.test(i) || B(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      B(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function Jt(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || B(t, "expected valid JSON character");
    else S0.test(a) && B(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function Sd(t, e, r, n) {
  var s, i, o, a;
  for (je.isObject(r) || B(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], Ht.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function Fr(t, e, r, n, s, i, o, a, c) {
  var u, h;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), u = 0, h = s.length; u < h; u += 1)
      Array.isArray(s[u]) && B(t, "nested arrays are not supported inside keys"), typeof s == "object" && gd(s[u]) === "[object Object]" && (s[u] = "[object Object]");
  if (typeof s == "object" && gd(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (u = 0, h = i.length; u < h; u += 1)
        Sd(t, e, i[u], r);
    else
      Sd(t, e, i, r);
  else
    !t.json && !Ht.call(r, s) && Ht.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, B(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function Vh(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : B(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function xe(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; ar(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (yt(s))
      for (Vh(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && Vs(t, "deficient indentation"), n;
}
function zi(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || Ge(r)));
}
function Bh(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += je.repeat(`
`, e - 1));
}
function R0(t, e, r) {
  var n, s, i, o, a, c, u, h, l = t.kind, d = t.result, f;
  if (f = t.input.charCodeAt(t.position), Ge(f) || Ir(f) || f === 35 || f === 38 || f === 42 || f === 33 || f === 124 || f === 62 || f === 39 || f === 34 || f === 37 || f === 64 || f === 96 || (f === 63 || f === 45) && (s = t.input.charCodeAt(t.position + 1), Ge(s) || r && Ir(s)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; f !== 0; ) {
    if (f === 58) {
      if (s = t.input.charCodeAt(t.position + 1), Ge(s) || r && Ir(s))
        break;
    } else if (f === 35) {
      if (n = t.input.charCodeAt(t.position - 1), Ge(n))
        break;
    } else {
      if (t.position === t.lineStart && zi(t) || r && Ir(f))
        break;
      if (yt(f))
        if (c = t.line, u = t.lineStart, h = t.lineIndent, xe(t, !1, -1), t.lineIndent >= e) {
          a = !0, f = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = u, t.lineIndent = h;
          break;
        }
    }
    a && (Jt(t, i, o, !1), Bh(t, t.line - c), i = o = t.position, a = !1), ar(f) || (o = t.position + 1), f = t.input.charCodeAt(++t.position);
  }
  return Jt(t, i, o, !1), t.result ? !0 : (t.kind = l, t.result = d, !1);
}
function _0(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (Jt(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else yt(r) ? (Jt(t, n, s, !0), Bh(t, xe(t, !1, e)), n = s = t.position) : t.position === t.lineStart && zi(t) ? B(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  B(t, "unexpected end of the stream within a single quoted scalar");
}
function $0(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return Jt(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (Jt(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), yt(a))
        xe(t, !1, e);
      else if (a < 256 && fx[a])
        t.result += hx[a], t.position++;
      else if ((o = A0(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = E0(a)) >= 0 ? i = (i << 4) + o : B(t, "expected hexadecimal character");
        t.result += P0(i), t.position++;
      } else
        B(t, "unknown escape sequence");
      r = n = t.position;
    } else yt(a) ? (Jt(t, r, n, !0), Bh(t, xe(t, !1, e)), r = n = t.position) : t.position === t.lineStart && zi(t) ? B(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  B(t, "unexpected end of the stream within a double quoted scalar");
}
function C0(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, u, h, l, d, f, m = /* @__PURE__ */ Object.create(null), p, y, g, v;
  if (v = t.input.charCodeAt(t.position), v === 91)
    h = 93, f = !1, a = [];
  else if (v === 123)
    h = 125, f = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), v = t.input.charCodeAt(++t.position); v !== 0; ) {
    if (xe(t, !0, e), v = t.input.charCodeAt(t.position), v === h)
      return t.position++, t.tag = o, t.anchor = c, t.kind = f ? "mapping" : "sequence", t.result = a, !0;
    r ? v === 44 && B(t, "expected the node content, but found ','") : B(t, "missed comma between flow collection entries"), y = p = g = null, l = d = !1, v === 63 && (u = t.input.charCodeAt(t.position + 1), Ge(u) && (l = d = !0, t.position++, xe(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, Br(t, e, qs, !1, !0), y = t.tag, p = t.result, xe(t, !0, e), v = t.input.charCodeAt(t.position), (d || t.line === n) && v === 58 && (l = !0, v = t.input.charCodeAt(++t.position), xe(t, !0, e), Br(t, e, qs, !1, !0), g = t.result), f ? Fr(t, a, m, y, p, g, n, s, i) : l ? a.push(Fr(t, null, m, y, p, g, n, s, i)) : a.push(p), xe(t, !0, e), v = t.input.charCodeAt(t.position), v === 44 ? (r = !0, v = t.input.charCodeAt(++t.position)) : r = !1;
  }
  B(t, "unexpected end of the stream within a flow collection");
}
function I0(t, e) {
  var r, n, s = ha, i = !1, o = !1, a = e, c = 0, u = !1, h, l;
  if (l = t.input.charCodeAt(t.position), l === 124)
    n = !1;
  else if (l === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; l !== 0; )
    if (l = t.input.charCodeAt(++t.position), l === 43 || l === 45)
      ha === s ? s = l === 43 ? vd : x0 : B(t, "repeat of a chomping mode identifier");
    else if ((h = j0(l)) >= 0)
      h === 0 ? B(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? B(t, "repeat of an indentation width identifier") : (a = e + h - 1, o = !0);
    else
      break;
  if (ar(l)) {
    do
      l = t.input.charCodeAt(++t.position);
    while (ar(l));
    if (l === 35)
      do
        l = t.input.charCodeAt(++t.position);
      while (!yt(l) && l !== 0);
  }
  for (; l !== 0; ) {
    for (Vh(t), t.lineIndent = 0, l = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && l === 32; )
      t.lineIndent++, l = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), yt(l)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === vd ? t.result += je.repeat(`
`, i ? 1 + c : c) : s === ha && i && (t.result += `
`);
      break;
    }
    for (n ? ar(l) ? (u = !0, t.result += je.repeat(`
`, i ? 1 + c : c)) : u ? (u = !1, t.result += je.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += je.repeat(`
`, c) : t.result += je.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !yt(l) && l !== 0; )
      l = t.input.charCodeAt(++t.position);
    Jt(t, r, t.position, !1);
  }
  return !0;
}
function Od(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, B(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !Ge(o)))); ) {
    if (a = !0, t.position++, xe(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, Br(t, e, cx, !1, !0), i.push(t.result), xe(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      B(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function F0(t, e, r) {
  var n, s, i, o, a, c, u = t.tag, h = t.anchor, l = {}, d = /* @__PURE__ */ Object.create(null), f = null, m = null, p = null, y = !1, g = !1, v;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = l), v = t.input.charCodeAt(t.position); v !== 0; ) {
    if (!y && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, B(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, (v === 63 || v === 58) && Ge(n))
      v === 63 ? (y && (Fr(t, l, d, f, m, null, o, a, c), f = m = p = null), g = !0, y = !0, s = !0) : y ? (y = !1, s = !0) : B(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, v = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !Br(t, r, ax, !1, !0))
        break;
      if (t.line === i) {
        for (v = t.input.charCodeAt(t.position); ar(v); )
          v = t.input.charCodeAt(++t.position);
        if (v === 58)
          v = t.input.charCodeAt(++t.position), Ge(v) || B(t, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Fr(t, l, d, f, m, null, o, a, c), f = m = p = null), g = !0, y = !1, s = !1, f = t.tag, m = t.result;
        else if (g)
          B(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = u, t.anchor = h, !0;
      } else if (g)
        B(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = u, t.anchor = h, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (y && (o = t.line, a = t.lineStart, c = t.position), Br(t, e, Ls, !0, s) && (y ? m = t.result : p = t.result), y || (Fr(t, l, d, f, m, p, o, a, c), f = m = p = null), xe(t, !0, -1), v = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && v !== 0)
      B(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return y && Fr(t, l, d, f, m, null, o, a, c), g && (t.tag = u, t.anchor = h, t.kind = "mapping", t.result = l), g;
}
function M0(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33) return !1;
  if (t.tag !== null && B(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : B(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Ge(o); )
      o === 33 && (n ? B(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), ux.test(s) || B(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), w0.test(i) && B(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !lx.test(i) && B(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    B(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : Ht.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : B(t, 'undeclared tag handle "' + s + '"'), !0;
}
function k0(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38) return !1;
  for (t.anchor !== null && B(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !Ge(r) && !Ir(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && B(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function N0(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42) return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !Ge(n) && !Ir(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && B(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), Ht.call(t.anchorMap, r) || B(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], xe(t, !0, -1), !0;
}
function Br(t, e, r, n, s) {
  var i, o, a, c = 1, u = !1, h = !1, l, d, f, m, p, y;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = Ls === r || cx === r, n && xe(t, !0, -1) && (u = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; M0(t) || k0(t); )
      xe(t, !0, -1) ? (u = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = u || s), (c === 1 || Ls === r) && (qs === r || ax === r ? p = e : p = e + 1, y = t.position - t.lineStart, c === 1 ? a && (Od(t, y) || F0(t, y, p)) || C0(t, p) ? h = !0 : (o && I0(t, p) || _0(t, p) || $0(t, p) ? h = !0 : N0(t) ? (h = !0, (t.tag !== null || t.anchor !== null) && B(t, "alias node should not have any properties")) : R0(t, p, qs === r) && (h = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (h = a && Od(t, y))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && B(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), l = 0, d = t.implicitTypes.length; l < d; l += 1)
      if (m = t.implicitTypes[l], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (Ht.call(t.typeMap[t.kind || "fallback"], t.tag))
      m = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (m = null, f = t.typeMap.multi[t.kind || "fallback"], l = 0, d = f.length; l < d; l += 1)
        if (t.tag.slice(0, f[l].tag.length) === f[l].tag) {
          m = f[l];
          break;
        }
    m || B(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && B(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : B(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || h;
}
function D0(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (xe(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !Ge(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && B(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; ar(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !yt(o));
        break;
      }
      if (yt(o)) break;
      for (r = t.position; o !== 0 && !Ge(o); )
        o = t.input.charCodeAt(++t.position);
      s.push(t.input.slice(r, t.position));
    }
    o !== 0 && Vh(t), Ht.call(xd, n) ? xd[n](t, n, s) : Vs(t, 'unknown document directive "' + n + '"');
  }
  if (xe(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, xe(t, !0, -1)) : i && B(t, "directives end mark is expected"), Br(t, t.lineIndent - 1, Ls, !1, !0), xe(t, !0, -1), t.checkLineBreaks && O0.test(t.input.slice(e, t.position)) && Vs(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && zi(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, xe(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    B(t, "end of the stream or a document separator is expected");
  else
    return;
}
function dx(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new T0(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, B(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    D0(r);
  return r.documents;
}
function q0(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = dx(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function L0(t, e) {
  var r = dx(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Ue("expected a single document in the stream, but found more");
  }
}
var V0 = q0, B0 = L0, mx = {
  loadAll: V0,
  load: B0
}, yx = Object.prototype.toString, vx = Object.prototype.hasOwnProperty, Uh = 65279, U0 = 9, En = 10, J0 = 13, H0 = 32, G0 = 33, K0 = 34, Ff = 35, z0 = 37, W0 = 38, Y0 = 39, X0 = 42, gx = 44, Q0 = 45, Bs = 58, Z0 = 61, e1 = 62, t1 = 63, r1 = 64, bx = 91, xx = 93, n1 = 96, Sx = 123, s1 = 124, Ox = 125, qe = {};
qe[0] = "\\0";
qe[7] = "\\a";
qe[8] = "\\b";
qe[9] = "\\t";
qe[10] = "\\n";
qe[11] = "\\v";
qe[12] = "\\f";
qe[13] = "\\r";
qe[27] = "\\e";
qe[34] = '\\"';
qe[92] = "\\\\";
qe[133] = "\\N";
qe[160] = "\\_";
qe[8232] = "\\L";
qe[8233] = "\\P";
var i1 = [
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
], o1 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function a1(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null) return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && vx.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function c1(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new Ue("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + je.repeat("0", n - e.length) + e;
}
var u1 = 1, An = 2;
function l1(t) {
  this.schema = t.schema || Lh, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = je.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = a1(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? An : u1, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function wd(t, e) {
  for (var r = je.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function Mf(t, e) {
  return `
` + je.repeat(" ", t.indent * e);
}
function f1(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function Us(t) {
  return t === H0 || t === U0;
}
function jn(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== Uh || 65536 <= t && t <= 1114111;
}
function Ed(t) {
  return jn(t) && t !== Uh && t !== J0 && t !== En;
}
function Ad(t, e, r) {
  var n = Ed(t), s = n && !Us(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== gx && t !== bx && t !== xx && t !== Sx && t !== Ox) && t !== Ff && !(e === Bs && !s) || Ed(e) && !Us(e) && t === Ff || e === Bs && s
  );
}
function h1(t) {
  return jn(t) && t !== Uh && !Us(t) && t !== Q0 && t !== t1 && t !== Bs && t !== gx && t !== bx && t !== xx && t !== Sx && t !== Ox && t !== Ff && t !== W0 && t !== X0 && t !== G0 && t !== s1 && t !== Z0 && t !== e1 && t !== Y0 && t !== K0 && t !== z0 && t !== r1 && t !== n1;
}
function p1(t) {
  return !Us(t) && t !== Bs;
}
function dn(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function wx(t) {
  var e = /^\n* /;
  return e.test(t);
}
var Ex = 1, kf = 2, Ax = 3, jx = 4, _r = 5;
function d1(t, e, r, n, s, i, o, a) {
  var c, u = 0, h = null, l = !1, d = !1, f = n !== -1, m = -1, p = h1(dn(t, 0)) && p1(dn(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = dn(t, c), !jn(u))
        return _r;
      p = p && Ad(u, h, a), h = u;
    }
  else {
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = dn(t, c), u === En)
        l = !0, f && (d = d || // Foldable line = too long, and not more-indented.
        c - m - 1 > n && t[m + 1] !== " ", m = c);
      else if (!jn(u))
        return _r;
      p = p && Ad(u, h, a), h = u;
    }
    d = d || f && c - m - 1 > n && t[m + 1] !== " ";
  }
  return !l && !d ? p && !o && !s(t) ? Ex : i === An ? _r : kf : r > 9 && wx(t) ? _r : o ? i === An ? _r : kf : d ? jx : Ax;
}
function m1(t, e, r, n, s) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === An ? '""' : "''";
    if (!t.noCompatMode && (i1.indexOf(e) !== -1 || o1.test(e)))
      return t.quotingType === An ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(u) {
      return f1(t, u);
    }
    switch (d1(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !n,
      s
    )) {
      case Ex:
        return e;
      case kf:
        return "'" + e.replace(/'/g, "''") + "'";
      case Ax:
        return "|" + jd(e, t.indent) + Pd(wd(e, i));
      case jx:
        return ">" + jd(e, t.indent) + Pd(wd(y1(e, o), i));
      case _r:
        return '"' + v1(e) + '"';
      default:
        throw new Ue("impossible error: invalid scalar style");
    }
  }();
}
function jd(t, e) {
  var r = wx(t) ? String(e) : "", n = t[t.length - 1] === `
`, s = n && (t[t.length - 2] === `
` || t === `
`), i = s ? "+" : n ? "" : "-";
  return r + i + `
`;
}
function Pd(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function y1(t, e) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var u = t.indexOf(`
`);
    return u = u !== -1 ? u : t.length, r.lastIndex = u, Td(t.slice(0, u), e);
  }(), s = t[0] === `
` || t[0] === " ", i, o; o = r.exec(t); ) {
    var a = o[1], c = o[2];
    i = c[0] === " ", n += a + (!s && !i && c !== "" ? `
` : "") + Td(c, e), s = i;
  }
  return n;
}
function Td(t, e) {
  if (t === "" || t[0] === " ") return t;
  for (var r = / [^ ]/g, n, s = 0, i, o = 0, a = 0, c = ""; n = r.exec(t); )
    a = n.index, a - s > e && (i = o > s ? o : a, c += `
` + t.slice(s, i), s = i + 1), o = a;
  return c += `
`, t.length - s > e && o > s ? c += t.slice(s, o) + `
` + t.slice(o + 1) : c += t.slice(s), c.slice(1);
}
function v1(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = dn(t, s), n = qe[r], !n && jn(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || c1(r);
  return e;
}
function g1(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (Rt(t, e, a, !1, !1) || typeof a > "u" && Rt(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function Rd(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (Rt(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Rt(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += Mf(t, e)), t.dump && En === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function b1(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, u, h;
  for (o = 0, a = i.length; o < a; o += 1)
    h = "", n !== "" && (h += ", "), t.condenseFlow && (h += '"'), c = i[o], u = r[c], t.replacer && (u = t.replacer.call(r, c, u)), Rt(t, e, c, !1, !1) && (t.dump.length > 1024 && (h += "? "), h += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Rt(t, e, u, !1, !1) && (h += t.dump, n += h));
  t.tag = s, t.dump = "{" + n + "}";
}
function x1(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, u, h, l, d;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new Ue("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    d = "", (!n || s !== "") && (d += Mf(t, e)), u = o[a], h = r[u], t.replacer && (h = t.replacer.call(r, u, h)), Rt(t, e + 1, u, !0, !0, !0) && (l = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, l && (t.dump && En === t.dump.charCodeAt(0) ? d += "?" : d += "? "), d += t.dump, l && (d += Mf(t, e)), Rt(t, e + 1, h, !0, l) && (t.dump && En === t.dump.charCodeAt(0) ? d += ":" : d += ": ", d += t.dump, s += d));
  t.tag = i, t.dump = s || "{}";
}
function _d(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, yx.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (vx.call(a.represent, c))
          n = a.represent[c](e, c);
        else
          throw new Ue("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = n;
      }
      return !0;
    }
  return !1;
}
function Rt(t, e, r, n, s, i, o) {
  t.tag = null, t.dump = r, _d(t, r, !1) || _d(t, r, !0);
  var a = yx.call(t.dump), c = n, u;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var h = a === "[object Object]" || a === "[object Array]", l, d;
  if (h && (l = t.duplicates.indexOf(r), d = l !== -1), (t.tag !== null && t.tag !== "?" || d || t.indent !== 2 && e > 0) && (s = !1), d && t.usedDuplicates[l])
    t.dump = "*ref_" + l;
  else {
    if (h && d && !t.usedDuplicates[l] && (t.usedDuplicates[l] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (x1(t, e, t.dump, s), d && (t.dump = "&ref_" + l + t.dump)) : (b1(t, e, t.dump), d && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Rd(t, e - 1, t.dump, s) : Rd(t, e, t.dump, s), d && (t.dump = "&ref_" + l + t.dump)) : (g1(t, e, t.dump), d && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && m1(t, t.dump, e, i, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (t.skipInvalid) return !1;
      throw new Ue("unacceptable kind of an object to dump " + a);
    }
    t.tag !== null && t.tag !== "?" && (u = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? u = "!" + u : u.slice(0, 18) === "tag:yaml.org,2002:" ? u = "!!" + u.slice(18) : u = "!<" + u + ">", t.dump = u + " " + t.dump);
  }
  return !0;
}
function S1(t, e) {
  var r = [], n = [], s, i;
  for (Nf(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function Nf(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        Nf(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        Nf(t[n[s]], e, r);
}
function O1(t, e) {
  e = e || {};
  var r = new l1(e);
  r.noRefs || S1(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), Rt(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var w1 = O1, E1 = {
  dump: w1
};
function Jh(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var A1 = Me, j1 = Bb, P1 = Gb, Js = Xb, T1 = Qb, R1 = Lh, _1 = mx.load, $1 = mx.loadAll, C1 = E1.dump, I1 = Ue, F1 = {
  binary: nx,
  float: Yb,
  map: Hb,
  null: Kb,
  pairs: ix,
  set: ox,
  timestamp: tx,
  bool: zb,
  int: Wb,
  merge: rx,
  omap: sx,
  seq: Jb,
  str: Ub
}, M1 = Jh("safeLoad", "load"), k1 = Jh("safeLoadAll", "loadAll"), N1 = Jh("safeDump", "dump"), Ur = {
  Type: A1,
  Schema: j1,
  FAILSAFE_SCHEMA: P1,
  JSON_SCHEMA: Js,
  CORE_SCHEMA: T1,
  DEFAULT_SCHEMA: R1,
  load: _1,
  loadAll: $1,
  dump: C1,
  YAMLException: I1,
  types: F1,
  safeLoad: M1,
  safeLoadAll: k1,
  safeDump: N1
};
const D1 = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function q1(t, e) {
  return e && (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0) ? JSON.parse(t) : Ur.load(t);
}
function L1(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function Px(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = L1(n), e), {});
}
function Tx(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: Px(t.headers)
  }, s = n.headers["content-type"], i = r || D1(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = q1(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
async function Jr(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, e = Dh(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await Tx(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
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
function V1(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), n = Dh(n), n = e(n), r(t(n)));
}
function Rx(t, e = {}) {
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
      Accept: Fb
    },
    credentials: s
  }).then((o) => o.body);
}
const Hh = (t) => {
  var e, r;
  const {
    baseDoc: n,
    url: s
  } = t, i = (e = n ?? s) !== null && e !== void 0 ? e : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(i, globalThis.document.baseURI)) : i;
}, _x = (t) => {
  const {
    fetch: e,
    http: r
  } = t;
  return e || r || Jr;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var B1 = /* @__PURE__ */ function() {
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
}(), U1 = Object.prototype.hasOwnProperty;
function Df(t, e) {
  return U1.call(t, e);
}
function qf(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var n = [];
  for (var s in t)
    Df(t, s) && n.push(s);
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
function Lf(t) {
  for (var e = 0, r = t.length, n; e < r; ) {
    if (n = t.charCodeAt(e), n >= 48 && n <= 57) {
      e++;
      continue;
    }
    return !1;
  }
  return !0;
}
function nr(t) {
  return t.indexOf("/") === -1 && t.indexOf("~") === -1 ? t : t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function $x(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Vf(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (Vf(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = qf(t), s = n.length, i = 0; i < s; i++)
        if (Vf(t[n[i]]))
          return !0;
    }
  }
  return !1;
}
function $d(t, e) {
  var r = [t];
  for (var n in e) {
    var s = typeof e[n] == "object" ? JSON.stringify(e[n], null, 2) : e[n];
    typeof s < "u" && r.push(n + ": " + s);
  }
  return r.join(`
`);
}
var Cx = (
  /** @class */
  function(t) {
    B1(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, $d(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = $d(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  }(Error)
), ve = Cx, J1 = ze, Mr = {
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
    var n = Pn(r, this.path);
    n && (n = ze(n));
    var s = cr(r, { op: "remove", path: this.from }).removed;
    return cr(r, { op: "add", path: this.path, value: s }), { newDocument: r, removed: n };
  },
  copy: function(t, e, r) {
    var n = Pn(r, this.from);
    return cr(r, { op: "add", path: this.path, value: ze(n) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: Tn(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, H1 = {
  add: function(t, e, r) {
    return Lf(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
  },
  remove: function(t, e, r) {
    var n = t.splice(e, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(t, e, r) {
    var n = t[e];
    return t[e] = this.value, { newDocument: r, removed: n };
  },
  move: Mr.move,
  copy: Mr.copy,
  test: Mr.test,
  _get: Mr._get
};
function Pn(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return cr(t, r), r.value;
}
function cr(t, e, r, n, s, i) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : Hs(e, 0)), e.path === "") {
    var o = { newDocument: t };
    if (e.op === "add")
      return o.newDocument = e.value, o;
    if (e.op === "replace")
      return o.newDocument = e.value, o.removed = t, o;
    if (e.op === "move" || e.op === "copy")
      return o.newDocument = Pn(t, e.from), e.op === "move" && (o.removed = t), o;
    if (e.op === "test") {
      if (o.test = Tn(t, e.value), o.test === !1)
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
    var a = e.path || "", c = a.split("/"), u = t, h = 1, l = c.length, d = void 0, f = void 0, m = void 0;
    for (typeof r == "function" ? m = r : m = Hs; ; ) {
      if (f = c[h], f && f.indexOf("~") != -1 && (f = $x(f)), s && (f == "__proto__" || f == "prototype" && h > 0 && c[h - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && d === void 0 && (u[f] === void 0 ? d = c.slice(0, h).join("/") : h == l - 1 && (d = e.path), d !== void 0 && m(e, 0, t, d)), h++, Array.isArray(u)) {
        if (f === "-")
          f = u.length;
        else {
          if (r && !Lf(f))
            throw new ve("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          Lf(f) && (f = ~~f);
        }
        if (h >= l) {
          if (r && e.op === "add" && f > u.length)
            throw new ve("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = H1[e.op].call(e, u, f, t);
          if (o.test === !1)
            throw new ve("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (h >= l) {
        var o = Mr[e.op].call(e, u, f, t);
        if (o.test === !1)
          throw new ve("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (u = u[f], r && h < l && (!u || typeof u != "object"))
        throw new ve("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function Bt(t, e, r, n, s) {
  if (n === void 0 && (n = !0), s === void 0 && (s = !0), r && !Array.isArray(e))
    throw new ve("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (t = ze(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = cr(t, e[o], r, !0, s, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function G1(t, e, r) {
  var n = cr(t, e);
  if (n.test === !1)
    throw new ve("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function Hs(t, e, r, n) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new ve("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (Mr[t.op]) {
    if (typeof t.path != "string")
      throw new ve("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new ve('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new ve("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new ve("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && Vf(t.value))
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
        var o = { op: "_get", path: t.from, value: void 0 }, a = Ix([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new ve("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else throw new ve("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function Ix(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new ve("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      Bt(ze(e), ze(t), r || !0);
    else {
      r = r || Hs;
      for (var n = 0; n < t.length; n++)
        r(t[n], n, e, void 0);
    }
  } catch (s) {
    if (s instanceof ve)
      return s;
    throw s;
  }
}
function Tn(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    var r = Array.isArray(t), n = Array.isArray(e), s, i, o;
    if (r && n) {
      if (i = t.length, i != e.length)
        return !1;
      for (s = i; s-- !== 0; )
        if (!Tn(t[s], e[s]))
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
      if (o = a[s], !Tn(t[o], e[o]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
const K1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: ve,
  _areEquals: Tn,
  applyOperation: cr,
  applyPatch: Bt,
  applyReducer: G1,
  deepClone: J1,
  getValueByPointer: Pn,
  validate: Ix,
  validator: Hs
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var Gh = /* @__PURE__ */ new WeakMap(), z1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  }()
), W1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  }()
);
function Y1(t) {
  return Gh.get(t);
}
function X1(t, e) {
  return t.observers.get(e);
}
function Q1(t, e) {
  t.observers.delete(e.callback);
}
function Z1(t, e) {
  e.unobserve();
}
function eA(t, e) {
  var r = [], n, s = Y1(t);
  if (!s)
    s = new z1(t), Gh.set(t, s);
  else {
    var i = X1(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = ze(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      Bf(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    Bf(n), clearTimeout(n.next), Q1(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new W1(e, n)), n;
}
function Bf(t, e) {
  e === void 0 && (e = !1);
  var r = Gh.get(t.object);
  Kh(r.value, t.object, t.patches, "", e), t.patches.length && Bt(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function Kh(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = qf(e), o = qf(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var u = o[c], h = t[u];
      if (Df(e, u) && !(e[u] === void 0 && h !== void 0 && Array.isArray(e) === !1)) {
        var l = e[u];
        typeof h == "object" && h != null && typeof l == "object" && l != null && Array.isArray(h) === Array.isArray(l) ? Kh(h, l, r, n + "/" + nr(u), s) : h !== l && (s && r.push({ op: "test", path: n + "/" + nr(u), value: ze(h) }), r.push({ op: "replace", path: n + "/" + nr(u), value: ze(l) }));
      } else Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + nr(u), value: ze(h) }), r.push({ op: "remove", path: n + "/" + nr(u) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var u = i[c];
        !Df(t, u) && e[u] !== void 0 && r.push({ op: "add", path: n + "/" + nr(u), value: ze(e[u]) });
      }
  }
}
function tA(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return Kh(t, e, n, "", r), n;
}
const rA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: tA,
  generate: Bf,
  observe: eA,
  unobserve: Z1
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, K1, rA, {
  JsonPatchError: Cx,
  deepClone: ze,
  escapePathComponent: nr,
  unescapePathComponent: $x
});
var pa, Cd;
function nA() {
  if (Cd) return pa;
  Cd = 1;
  var t = function(v) {
    return e(v) && !r(v);
  };
  function e(g) {
    return !!g && typeof g == "object";
  }
  function r(g) {
    var v = Object.prototype.toString.call(g);
    return v === "[object RegExp]" || v === "[object Date]" || i(g);
  }
  var n = typeof Symbol == "function" && Symbol.for, s = n ? Symbol.for("react.element") : 60103;
  function i(g) {
    return g.$$typeof === s;
  }
  function o(g) {
    return Array.isArray(g) ? [] : {};
  }
  function a(g, v) {
    return v.clone !== !1 && v.isMergeableObject(g) ? p(o(g), g, v) : g;
  }
  function c(g, v, b) {
    return g.concat(v).map(function(x) {
      return a(x, b);
    });
  }
  function u(g, v) {
    if (!v.customMerge)
      return p;
    var b = v.customMerge(g);
    return typeof b == "function" ? b : p;
  }
  function h(g) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(g).filter(function(v) {
      return Object.propertyIsEnumerable.call(g, v);
    }) : [];
  }
  function l(g) {
    return Object.keys(g).concat(h(g));
  }
  function d(g, v) {
    try {
      return v in g;
    } catch {
      return !1;
    }
  }
  function f(g, v) {
    return d(g, v) && !(Object.hasOwnProperty.call(g, v) && Object.propertyIsEnumerable.call(g, v));
  }
  function m(g, v, b) {
    var x = {};
    return b.isMergeableObject(g) && l(g).forEach(function(E) {
      x[E] = a(g[E], b);
    }), l(v).forEach(function(E) {
      f(g, E) || (d(g, E) && b.isMergeableObject(v[E]) ? x[E] = u(E, b)(g[E], v[E], b) : x[E] = a(v[E], b));
    }), x;
  }
  function p(g, v, b) {
    b = b || {}, b.arrayMerge = b.arrayMerge || c, b.isMergeableObject = b.isMergeableObject || t, b.cloneUnlessOtherwiseSpecified = a;
    var x = Array.isArray(v), E = Array.isArray(g), O = x === E;
    return O ? x ? b.arrayMerge(g, v, b) : m(g, v, b) : a(v, b);
  }
  p.all = function(v, b) {
    if (!Array.isArray(v))
      throw new Error("first argument should be an array");
    return v.reduce(function(x, E) {
      return p(x, E, b);
    }, {});
  };
  var y = p;
  return pa = y, pa;
}
var sA = nA();
const iA = /* @__PURE__ */ Ki(sA), ce = {
  add: aA,
  replace: Cs,
  remove: cA,
  merge: uA,
  mergeDeep: lA,
  context: fA,
  getIn: mA,
  applyPatch: oA,
  parentPathMatch: dA,
  flatten: Cn,
  fullyNormalizeArray: yA,
  normalizeArray: Mx,
  isPromise: vA,
  forEachNew: hA,
  forEachNewPrimitive: pA,
  isJsonPatch: Dx,
  isContextPatch: xA,
  isPatch: Wi,
  isMutation: qx,
  isAdditiveMutation: Gs,
  isGenerator: bA,
  isFunction: Nx,
  isObject: ur,
  isError: gA
};
function oA(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && Id(e.path)
  }, e.op === "merge") {
    const n = da(t, e.path);
    Object.assign(n, e.value), Bt(t, [Cs(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = da(t, e.path), s = iA(n, e.value);
    t = Bt(t, [Cs(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && ur(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${Id(i)}`,
      value: e.value[i]
    }), s), []);
    Bt(t, n);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: n
    } = e;
    r.allowMetaPatches && e.meta && Gs(e) && (Array.isArray(e.value) || ur(e.value)) && (n = {
      ...n,
      ...e.meta
    }), t = n;
  } else if (Bt(t, [e]), r.allowMetaPatches && e.meta && Gs(e) && (Array.isArray(e.value) || ur(e.value))) {
    const s = {
      ...da(t, e.path),
      ...e.meta
    };
    Bt(t, [Cs(e.path, s)]);
  }
  return t;
}
function Id(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function aA(t, e) {
  return {
    op: "add",
    path: t,
    value: e
  };
}
function Cs(t, e, r) {
  return {
    op: "replace",
    path: t,
    value: e,
    meta: r
  };
}
function cA(t) {
  return {
    op: "remove",
    path: t
  };
}
function uA(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function lA(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function fA(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function hA(t, e) {
  try {
    return Fx(t, Jf, e);
  } catch (r) {
    return r;
  }
}
function pA(t, e) {
  try {
    return Fx(t, Uf, e);
  } catch (r) {
    return r;
  }
}
function Fx(t, e, r) {
  const n = t.filter(Gs).map((o) => e(o.value, r, o.path)) || [], s = Cn(n);
  return kx(s);
}
function Uf(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => Uf(n, e, r.concat(s))) : ur(t) ? Object.keys(t).map((n) => Uf(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function Jf(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => Jf(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (ur(t)) {
    const s = Object.keys(t).map((i) => Jf(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = Cn(n), n;
}
function dA(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, n = e.length; r < n; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function mA(t, e) {
  return e.reduce((r, n) => typeof n < "u" && r ? r[n] : r, t);
}
function yA(t) {
  return kx(Cn(Mx(t)));
}
function Mx(t) {
  return Array.isArray(t) ? t : [t];
}
function Cn(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? Cn(e) : e));
}
function kx(t) {
  return t.filter((e) => typeof e < "u");
}
function ur(t) {
  return t && typeof t == "object";
}
function vA(t) {
  return ur(t) && Nx(t.then);
}
function Nx(t) {
  return t && typeof t == "function";
}
function gA(t) {
  return t instanceof Error;
}
function Dx(t) {
  if (Wi(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function bA(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function qx(t) {
  return Dx(t) || Wi(t) && t.type === "mutation";
}
function Gs(t) {
  return qx(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function xA(t) {
  return Wi(t) && t.type === "context";
}
function Wi(t) {
  return t && typeof t == "object";
}
function da(t, e) {
  try {
    return Pn(t, e);
  } catch (r) {
    return console.error(r), {};
  }
}
var Fd = {}, Md = {}, kd = {}, hn, Nd;
function Xe() {
  if (Nd) return hn;
  Nd = 1;
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
var ma, Dd;
function ft() {
  return Dd || (Dd = 1, ma = function(t) {
    try {
      return !!t();
    } catch {
      return !0;
    }
  }), ma;
}
var ya, qd;
function Yi() {
  if (qd) return ya;
  qd = 1;
  var t = /* @__PURE__ */ ft();
  return ya = !t(function() {
    var e = (function() {
    }).bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  }), ya;
}
var va, Ld;
function zh() {
  if (Ld) return va;
  Ld = 1;
  var t = /* @__PURE__ */ Yi(), e = Function.prototype, r = e.apply, n = e.call;
  return va = typeof Reflect == "object" && Reflect.apply || (t ? n.bind(r) : function() {
    return n.apply(r, arguments);
  }), va;
}
var ga, Vd;
function ht() {
  if (Vd) return ga;
  Vd = 1;
  var t = /* @__PURE__ */ Yi(), e = Function.prototype, r = e.call, n = t && e.bind.bind(r, r);
  return ga = t ? n : function(s) {
    return function() {
      return r.apply(s, arguments);
    };
  }, ga;
}
var ba, Bd;
function Wh() {
  if (Bd) return ba;
  Bd = 1;
  var t = /* @__PURE__ */ ht(), e = t({}.toString), r = t("".slice);
  return ba = function(n) {
    return r(e(n), 8, -1);
  }, ba;
}
var xa, Ud;
function Lx() {
  if (Ud) return xa;
  Ud = 1;
  var t = /* @__PURE__ */ Wh(), e = /* @__PURE__ */ ht();
  return xa = function(r) {
    if (t(r) === "Function") return e(r);
  }, xa;
}
var Sa, Jd;
function Qe() {
  if (Jd) return Sa;
  Jd = 1;
  var t = typeof document == "object" && document.all;
  return Sa = typeof t > "u" && t !== void 0 ? function(e) {
    return typeof e == "function" || e === t;
  } : function(e) {
    return typeof e == "function";
  }, Sa;
}
var Oa = {}, wa, Hd;
function Ct() {
  if (Hd) return wa;
  Hd = 1;
  var t = /* @__PURE__ */ ft();
  return wa = !t(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  }), wa;
}
var Ea, Gd;
function yr() {
  if (Gd) return Ea;
  Gd = 1;
  var t = /* @__PURE__ */ Yi(), e = Function.prototype.call;
  return Ea = t ? e.bind(e) : function() {
    return e.apply(e, arguments);
  }, Ea;
}
var Aa = {}, Kd;
function SA() {
  if (Kd) return Aa;
  Kd = 1;
  var t = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, r = e && !t.call({ 1: 2 }, 1);
  return Aa.f = r ? function(s) {
    var i = e(this, s);
    return !!i && i.enumerable;
  } : t, Aa;
}
var ja, zd;
function In() {
  return zd || (zd = 1, ja = function(t, e) {
    return {
      enumerable: !(t & 1),
      configurable: !(t & 2),
      writable: !(t & 4),
      value: e
    };
  }), ja;
}
var Pa, Wd;
function OA() {
  if (Wd) return Pa;
  Wd = 1;
  var t = /* @__PURE__ */ ht(), e = /* @__PURE__ */ ft(), r = /* @__PURE__ */ Wh(), n = Object, s = t("".split);
  return Pa = e(function() {
    return !n("z").propertyIsEnumerable(0);
  }) ? function(i) {
    return r(i) === "String" ? s(i, "") : n(i);
  } : n, Pa;
}
var Ta, Yd;
function Yh() {
  return Yd || (Yd = 1, Ta = function(t) {
    return t == null;
  }), Ta;
}
var Ra, Xd;
function Xi() {
  if (Xd) return Ra;
  Xd = 1;
  var t = /* @__PURE__ */ Yh(), e = TypeError;
  return Ra = function(r) {
    if (t(r)) throw new e("Can't call method on " + r);
    return r;
  }, Ra;
}
var _a, Qd;
function Fn() {
  if (Qd) return _a;
  Qd = 1;
  var t = /* @__PURE__ */ OA(), e = /* @__PURE__ */ Xi();
  return _a = function(r) {
    return t(e(r));
  }, _a;
}
var $a, Zd;
function St() {
  if (Zd) return $a;
  Zd = 1;
  var t = /* @__PURE__ */ Qe();
  return $a = function(e) {
    return typeof e == "object" ? e !== null : t(e);
  }, $a;
}
var Ca, em;
function Xh() {
  return em || (em = 1, Ca = {}), Ca;
}
var Ia, tm;
function Mn() {
  if (tm) return Ia;
  tm = 1;
  var t = /* @__PURE__ */ Xh(), e = /* @__PURE__ */ Xe(), r = /* @__PURE__ */ Qe(), n = function(s) {
    return r(s) ? s : void 0;
  };
  return Ia = function(s, i) {
    return arguments.length < 2 ? n(t[s]) || n(e[s]) : t[s] && t[s][i] || e[s] && e[s][i];
  }, Ia;
}
var Fa, rm;
function Qi() {
  if (rm) return Fa;
  rm = 1;
  var t = /* @__PURE__ */ ht();
  return Fa = t({}.isPrototypeOf), Fa;
}
var Ma, nm;
function wA() {
  if (nm) return Ma;
  nm = 1;
  var t = /* @__PURE__ */ Xe(), e = t.navigator, r = e && e.userAgent;
  return Ma = r ? String(r) : "", Ma;
}
var ka, sm;
function EA() {
  if (sm) return ka;
  sm = 1;
  var t = /* @__PURE__ */ Xe(), e = /* @__PURE__ */ wA(), r = t.process, n = t.Deno, s = r && r.versions || n && n.version, i = s && s.v8, o, a;
  return i && (o = i.split("."), a = o[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !a && e && (o = e.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = e.match(/Chrome\/(\d+)/), o && (a = +o[1]))), ka = a, ka;
}
var Na, im;
function Vx() {
  if (im) return Na;
  im = 1;
  var t = /* @__PURE__ */ EA(), e = /* @__PURE__ */ ft(), r = /* @__PURE__ */ Xe(), n = r.String;
  return Na = !!Object.getOwnPropertySymbols && !e(function() {
    var s = Symbol("symbol detection");
    return !n(s) || !(Object(s) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && t && t < 41;
  }), Na;
}
var Da, om;
function Bx() {
  if (om) return Da;
  om = 1;
  var t = /* @__PURE__ */ Vx();
  return Da = t && !Symbol.sham && typeof Symbol.iterator == "symbol", Da;
}
var qa, am;
function Ux() {
  if (am) return qa;
  am = 1;
  var t = /* @__PURE__ */ Mn(), e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ Qi(), n = /* @__PURE__ */ Bx(), s = Object;
  return qa = n ? function(i) {
    return typeof i == "symbol";
  } : function(i) {
    var o = t("Symbol");
    return e(o) && r(o.prototype, s(i));
  }, qa;
}
var La, cm;
function Qh() {
  if (cm) return La;
  cm = 1;
  var t = String;
  return La = function(e) {
    try {
      return t(e);
    } catch {
      return "Object";
    }
  }, La;
}
var Va, um;
function Zi() {
  if (um) return Va;
  um = 1;
  var t = /* @__PURE__ */ Qe(), e = /* @__PURE__ */ Qh(), r = TypeError;
  return Va = function(n) {
    if (t(n)) return n;
    throw new r(e(n) + " is not a function");
  }, Va;
}
var Ba, lm;
function Zh() {
  if (lm) return Ba;
  lm = 1;
  var t = /* @__PURE__ */ Zi(), e = /* @__PURE__ */ Yh();
  return Ba = function(r, n) {
    var s = r[n];
    return e(s) ? void 0 : t(s);
  }, Ba;
}
var Ua, fm;
function AA() {
  if (fm) return Ua;
  fm = 1;
  var t = /* @__PURE__ */ yr(), e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ St(), n = TypeError;
  return Ua = function(s, i) {
    var o, a;
    if (i === "string" && e(o = s.toString) && !r(a = t(o, s)) || e(o = s.valueOf) && !r(a = t(o, s)) || i !== "string" && e(o = s.toString) && !r(a = t(o, s))) return a;
    throw new n("Can't convert object to primitive value");
  }, Ua;
}
var Ja = { exports: {} }, Ha, hm;
function kn() {
  return hm || (hm = 1, Ha = !0), Ha;
}
var Ga, pm;
function jA() {
  if (pm) return Ga;
  pm = 1;
  var t = /* @__PURE__ */ Xe(), e = Object.defineProperty;
  return Ga = function(r, n) {
    try {
      e(t, r, { value: n, configurable: !0, writable: !0 });
    } catch {
      t[r] = n;
    }
    return n;
  }, Ga;
}
var dm;
function Jx() {
  if (dm) return Ja.exports;
  dm = 1;
  var t = /* @__PURE__ */ kn(), e = /* @__PURE__ */ Xe(), r = /* @__PURE__ */ jA(), n = "__core-js_shared__", s = Ja.exports = e[n] || r(n, {});
  return (s.versions || (s.versions = [])).push({
    version: "3.42.0",
    mode: t ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), Ja.exports;
}
var Ka, mm;
function Hx() {
  if (mm) return Ka;
  mm = 1;
  var t = /* @__PURE__ */ Jx();
  return Ka = function(e, r) {
    return t[e] || (t[e] = r || {});
  }, Ka;
}
var za, ym;
function Gx() {
  if (ym) return za;
  ym = 1;
  var t = /* @__PURE__ */ Xi(), e = Object;
  return za = function(r) {
    return e(t(r));
  }, za;
}
var Wa, vm;
function Ot() {
  if (vm) return Wa;
  vm = 1;
  var t = /* @__PURE__ */ ht(), e = /* @__PURE__ */ Gx(), r = t({}.hasOwnProperty);
  return Wa = Object.hasOwn || function(s, i) {
    return r(e(s), i);
  }, Wa;
}
var Ya, gm;
function Kx() {
  if (gm) return Ya;
  gm = 1;
  var t = /* @__PURE__ */ ht(), e = 0, r = Math.random(), n = t(1 .toString);
  return Ya = function(s) {
    return "Symbol(" + (s === void 0 ? "" : s) + ")_" + n(++e + r, 36);
  }, Ya;
}
var Xa, bm;
function It() {
  if (bm) return Xa;
  bm = 1;
  var t = /* @__PURE__ */ Xe(), e = /* @__PURE__ */ Hx(), r = /* @__PURE__ */ Ot(), n = /* @__PURE__ */ Kx(), s = /* @__PURE__ */ Vx(), i = /* @__PURE__ */ Bx(), o = t.Symbol, a = e("wks"), c = i ? o.for || o : o && o.withoutSetter || n;
  return Xa = function(u) {
    return r(a, u) || (a[u] = s && r(o, u) ? o[u] : c("Symbol." + u)), a[u];
  }, Xa;
}
var Qa, xm;
function PA() {
  if (xm) return Qa;
  xm = 1;
  var t = /* @__PURE__ */ yr(), e = /* @__PURE__ */ St(), r = /* @__PURE__ */ Ux(), n = /* @__PURE__ */ Zh(), s = /* @__PURE__ */ AA(), i = /* @__PURE__ */ It(), o = TypeError, a = i("toPrimitive");
  return Qa = function(c, u) {
    if (!e(c) || r(c)) return c;
    var h = n(c, a), l;
    if (h) {
      if (u === void 0 && (u = "default"), l = t(h, c, u), !e(l) || r(l)) return l;
      throw new o("Can't convert object to primitive value");
    }
    return u === void 0 && (u = "number"), s(c, u);
  }, Qa;
}
var Za, Sm;
function zx() {
  if (Sm) return Za;
  Sm = 1;
  var t = /* @__PURE__ */ PA(), e = /* @__PURE__ */ Ux();
  return Za = function(r) {
    var n = t(r, "string");
    return e(n) ? n : n + "";
  }, Za;
}
var ec, Om;
function Wx() {
  if (Om) return ec;
  Om = 1;
  var t = /* @__PURE__ */ Xe(), e = /* @__PURE__ */ St(), r = t.document, n = e(r) && e(r.createElement);
  return ec = function(s) {
    return n ? r.createElement(s) : {};
  }, ec;
}
var tc, wm;
function Yx() {
  if (wm) return tc;
  wm = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ ft(), r = /* @__PURE__ */ Wx();
  return tc = !t && !e(function() {
    return Object.defineProperty(r("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), tc;
}
var Em;
function Xx() {
  if (Em) return Oa;
  Em = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ yr(), r = /* @__PURE__ */ SA(), n = /* @__PURE__ */ In(), s = /* @__PURE__ */ Fn(), i = /* @__PURE__ */ zx(), o = /* @__PURE__ */ Ot(), a = /* @__PURE__ */ Yx(), c = Object.getOwnPropertyDescriptor;
  return Oa.f = t ? c : function(h, l) {
    if (h = s(h), l = i(l), a) try {
      return c(h, l);
    } catch {
    }
    if (o(h, l)) return n(!e(r.f, h, l), h[l]);
  }, Oa;
}
var rc, Am;
function TA() {
  if (Am) return rc;
  Am = 1;
  var t = /* @__PURE__ */ ft(), e = /* @__PURE__ */ Qe(), r = /#|\.prototype\./, n = function(c, u) {
    var h = i[s(c)];
    return h === a ? !0 : h === o ? !1 : e(u) ? t(u) : !!u;
  }, s = n.normalize = function(c) {
    return String(c).replace(r, ".").toLowerCase();
  }, i = n.data = {}, o = n.NATIVE = "N", a = n.POLYFILL = "P";
  return rc = n, rc;
}
var nc, jm;
function Qx() {
  if (jm) return nc;
  jm = 1;
  var t = /* @__PURE__ */ Lx(), e = /* @__PURE__ */ Zi(), r = /* @__PURE__ */ Yi(), n = t(t.bind);
  return nc = function(s, i) {
    return e(s), i === void 0 ? s : r ? n(s, i) : function() {
      return s.apply(i, arguments);
    };
  }, nc;
}
var sc = {}, ic, Pm;
function Zx() {
  if (Pm) return ic;
  Pm = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ ft();
  return ic = t && e(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), ic;
}
var oc, Tm;
function vr() {
  if (Tm) return oc;
  Tm = 1;
  var t = /* @__PURE__ */ St(), e = String, r = TypeError;
  return oc = function(n) {
    if (t(n)) return n;
    throw new r(e(n) + " is not an object");
  }, oc;
}
var Rm;
function Qr() {
  if (Rm) return sc;
  Rm = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ Yx(), r = /* @__PURE__ */ Zx(), n = /* @__PURE__ */ vr(), s = /* @__PURE__ */ zx(), i = TypeError, o = Object.defineProperty, a = Object.getOwnPropertyDescriptor, c = "enumerable", u = "configurable", h = "writable";
  return sc.f = t ? r ? function(d, f, m) {
    if (n(d), f = s(f), n(m), typeof d == "function" && f === "prototype" && "value" in m && h in m && !m[h]) {
      var p = a(d, f);
      p && p[h] && (d[f] = m.value, m = {
        configurable: u in m ? m[u] : p[u],
        enumerable: c in m ? m[c] : p[c],
        writable: !1
      });
    }
    return o(d, f, m);
  } : o : function(d, f, m) {
    if (n(d), f = s(f), n(m), e) try {
      return o(d, f, m);
    } catch {
    }
    if ("get" in m || "set" in m) throw new i("Accessors not supported");
    return "value" in m && (d[f] = m.value), d;
  }, sc;
}
var ac, _m;
function Ft() {
  if (_m) return ac;
  _m = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ Qr(), r = /* @__PURE__ */ In();
  return ac = t ? function(n, s, i) {
    return e.f(n, s, r(1, i));
  } : function(n, s, i) {
    return n[s] = i, n;
  }, ac;
}
var cc, $m;
function eo() {
  if ($m) return cc;
  $m = 1;
  var t = /* @__PURE__ */ Xe(), e = /* @__PURE__ */ zh(), r = /* @__PURE__ */ Lx(), n = /* @__PURE__ */ Qe(), s = Xx().f, i = /* @__PURE__ */ TA(), o = /* @__PURE__ */ Xh(), a = /* @__PURE__ */ Qx(), c = /* @__PURE__ */ Ft(), u = /* @__PURE__ */ Ot(), h = function(l) {
    var d = function(f, m, p) {
      if (this instanceof d) {
        switch (arguments.length) {
          case 0:
            return new l();
          case 1:
            return new l(f);
          case 2:
            return new l(f, m);
        }
        return new l(f, m, p);
      }
      return e(l, this, arguments);
    };
    return d.prototype = l.prototype, d;
  };
  return cc = function(l, d) {
    var f = l.target, m = l.global, p = l.stat, y = l.proto, g = m ? t : p ? t[f] : t[f] && t[f].prototype, v = m ? o : o[f] || c(o, f, {})[f], b = v.prototype, x, E, O, j, _, P, k, S, R;
    for (j in d)
      x = i(m ? j : f + (p ? "." : "#") + j, l.forced), E = !x && g && u(g, j), P = v[j], E && (l.dontCallGetSet ? (R = s(g, j), k = R && R.value) : k = g[j]), _ = E && k ? k : d[j], !(!x && !y && typeof P == typeof _) && (l.bind && E ? S = a(_, t) : l.wrap && E ? S = h(_) : y && n(_) ? S = r(_) : S = _, (l.sham || _ && _.sham || P && P.sham) && c(S, "sham", !0), c(v, j, S), y && (O = f + "Prototype", u(o, O) || c(o, O, {}), c(o[O], j, _), l.real && b && (x || !b[j]) && c(b, j, _)));
  }, cc;
}
var uc, Cm;
function ep() {
  if (Cm) return uc;
  Cm = 1;
  var t = /* @__PURE__ */ Hx(), e = /* @__PURE__ */ Kx(), r = t("keys");
  return uc = function(n) {
    return r[n] || (r[n] = e(n));
  }, uc;
}
var lc, Im;
function RA() {
  if (Im) return lc;
  Im = 1;
  var t = /* @__PURE__ */ ft();
  return lc = !t(function() {
    function e() {
    }
    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
  }), lc;
}
var fc, Fm;
function tp() {
  if (Fm) return fc;
  Fm = 1;
  var t = /* @__PURE__ */ Ot(), e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ Gx(), n = /* @__PURE__ */ ep(), s = /* @__PURE__ */ RA(), i = n("IE_PROTO"), o = Object, a = o.prototype;
  return fc = s ? o.getPrototypeOf : function(c) {
    var u = r(c);
    if (t(u, i)) return u[i];
    var h = u.constructor;
    return e(h) && u instanceof h ? h.prototype : u instanceof o ? a : null;
  }, fc;
}
var hc, Mm;
function _A() {
  if (Mm) return hc;
  Mm = 1;
  var t = /* @__PURE__ */ ht(), e = /* @__PURE__ */ Zi();
  return hc = function(r, n, s) {
    try {
      return t(e(Object.getOwnPropertyDescriptor(r, n)[s]));
    } catch {
    }
  }, hc;
}
var pc, km;
function $A() {
  if (km) return pc;
  km = 1;
  var t = /* @__PURE__ */ St();
  return pc = function(e) {
    return t(e) || e === null;
  }, pc;
}
var dc, Nm;
function CA() {
  if (Nm) return dc;
  Nm = 1;
  var t = /* @__PURE__ */ $A(), e = String, r = TypeError;
  return dc = function(n) {
    if (t(n)) return n;
    throw new r("Can't set " + e(n) + " as a prototype");
  }, dc;
}
var mc, Dm;
function to() {
  if (Dm) return mc;
  Dm = 1;
  var t = /* @__PURE__ */ _A(), e = /* @__PURE__ */ St(), r = /* @__PURE__ */ Xi(), n = /* @__PURE__ */ CA();
  return mc = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var s = !1, i = {}, o;
    try {
      o = t(Object.prototype, "__proto__", "set"), o(i, []), s = i instanceof Array;
    } catch {
    }
    return function(c, u) {
      return r(c), n(u), e(c) && (s ? o(c, u) : c.__proto__ = u), c;
    };
  }() : void 0), mc;
}
var yc = {}, vc, qm;
function IA() {
  if (qm) return vc;
  qm = 1;
  var t = Math.ceil, e = Math.floor;
  return vc = Math.trunc || function(n) {
    var s = +n;
    return (s > 0 ? e : t)(s);
  }, vc;
}
var gc, Lm;
function rp() {
  if (Lm) return gc;
  Lm = 1;
  var t = /* @__PURE__ */ IA();
  return gc = function(e) {
    var r = +e;
    return r !== r || r === 0 ? 0 : t(r);
  }, gc;
}
var bc, Vm;
function FA() {
  if (Vm) return bc;
  Vm = 1;
  var t = /* @__PURE__ */ rp(), e = Math.max, r = Math.min;
  return bc = function(n, s) {
    var i = t(n);
    return i < 0 ? e(i + s, 0) : r(i, s);
  }, bc;
}
var xc, Bm;
function MA() {
  if (Bm) return xc;
  Bm = 1;
  var t = /* @__PURE__ */ rp(), e = Math.min;
  return xc = function(r) {
    var n = t(r);
    return n > 0 ? e(n, 9007199254740991) : 0;
  }, xc;
}
var Sc, Um;
function eS() {
  if (Um) return Sc;
  Um = 1;
  var t = /* @__PURE__ */ MA();
  return Sc = function(e) {
    return t(e.length);
  }, Sc;
}
var Oc, Jm;
function kA() {
  if (Jm) return Oc;
  Jm = 1;
  var t = /* @__PURE__ */ Fn(), e = /* @__PURE__ */ FA(), r = /* @__PURE__ */ eS(), n = function(s) {
    return function(i, o, a) {
      var c = t(i), u = r(c);
      if (u === 0) return !s && -1;
      var h = e(a, u), l;
      if (s && o !== o) {
        for (; u > h; )
          if (l = c[h++], l !== l) return !0;
      } else for (; u > h; h++)
        if ((s || h in c) && c[h] === o) return s || h || 0;
      return !s && -1;
    };
  };
  return Oc = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: n(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: n(!1)
  }, Oc;
}
var wc, Hm;
function np() {
  return Hm || (Hm = 1, wc = {}), wc;
}
var Ec, Gm;
function tS() {
  if (Gm) return Ec;
  Gm = 1;
  var t = /* @__PURE__ */ ht(), e = /* @__PURE__ */ Ot(), r = /* @__PURE__ */ Fn(), n = kA().indexOf, s = /* @__PURE__ */ np(), i = t([].push);
  return Ec = function(o, a) {
    var c = r(o), u = 0, h = [], l;
    for (l in c) !e(s, l) && e(c, l) && i(h, l);
    for (; a.length > u; ) e(c, l = a[u++]) && (~n(h, l) || i(h, l));
    return h;
  }, Ec;
}
var Ac, Km;
function sp() {
  return Km || (Km = 1, Ac = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ]), Ac;
}
var zm;
function NA() {
  if (zm) return yc;
  zm = 1;
  var t = /* @__PURE__ */ tS(), e = /* @__PURE__ */ sp(), r = e.concat("length", "prototype");
  return yc.f = Object.getOwnPropertyNames || function(s) {
    return t(s, r);
  }, yc;
}
var jc = {}, Wm;
function DA() {
  return Wm || (Wm = 1, jc.f = Object.getOwnPropertySymbols), jc;
}
var Pc, Ym;
function qA() {
  if (Ym) return Pc;
  Ym = 1;
  var t = /* @__PURE__ */ Mn(), e = /* @__PURE__ */ ht(), r = /* @__PURE__ */ NA(), n = /* @__PURE__ */ DA(), s = /* @__PURE__ */ vr(), i = e([].concat);
  return Pc = t("Reflect", "ownKeys") || function(a) {
    var c = r.f(s(a)), u = n.f;
    return u ? i(c, u(a)) : c;
  }, Pc;
}
var Tc, Xm;
function rS() {
  if (Xm) return Tc;
  Xm = 1;
  var t = /* @__PURE__ */ Ot(), e = /* @__PURE__ */ qA(), r = /* @__PURE__ */ Xx(), n = /* @__PURE__ */ Qr();
  return Tc = function(s, i, o) {
    for (var a = e(i), c = n.f, u = r.f, h = 0; h < a.length; h++) {
      var l = a[h];
      !t(s, l) && !(o && t(o, l)) && c(s, l, u(i, l));
    }
  }, Tc;
}
var Rc = {}, _c, Qm;
function LA() {
  if (Qm) return _c;
  Qm = 1;
  var t = /* @__PURE__ */ tS(), e = /* @__PURE__ */ sp();
  return _c = Object.keys || function(n) {
    return t(n, e);
  }, _c;
}
var Zm;
function VA() {
  if (Zm) return Rc;
  Zm = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ Zx(), r = /* @__PURE__ */ Qr(), n = /* @__PURE__ */ vr(), s = /* @__PURE__ */ Fn(), i = /* @__PURE__ */ LA();
  return Rc.f = t && !e ? Object.defineProperties : function(a, c) {
    n(a);
    for (var u = s(c), h = i(c), l = h.length, d = 0, f; l > d; ) r.f(a, f = h[d++], u[f]);
    return a;
  }, Rc;
}
var $c, ey;
function BA() {
  if (ey) return $c;
  ey = 1;
  var t = /* @__PURE__ */ Mn();
  return $c = t("document", "documentElement"), $c;
}
var Cc, ty;
function ip() {
  if (ty) return Cc;
  ty = 1;
  var t = /* @__PURE__ */ vr(), e = /* @__PURE__ */ VA(), r = /* @__PURE__ */ sp(), n = /* @__PURE__ */ np(), s = /* @__PURE__ */ BA(), i = /* @__PURE__ */ Wx(), o = /* @__PURE__ */ ep(), a = ">", c = "<", u = "prototype", h = "script", l = o("IE_PROTO"), d = function() {
  }, f = function(v) {
    return c + h + a + v + c + "/" + h + a;
  }, m = function(v) {
    v.write(f("")), v.close();
    var b = v.parentWindow.Object;
    return v = null, b;
  }, p = function() {
    var v = i("iframe"), b = "java" + h + ":", x;
    return v.style.display = "none", s.appendChild(v), v.src = String(b), x = v.contentWindow.document, x.open(), x.write(f("document.F=Object")), x.close(), x.F;
  }, y, g = function() {
    try {
      y = new ActiveXObject("htmlfile");
    } catch {
    }
    g = typeof document < "u" ? document.domain && y ? m(y) : p() : m(y);
    for (var v = r.length; v--; ) delete g[u][r[v]];
    return g();
  };
  return n[l] = !0, Cc = Object.create || function(b, x) {
    var E;
    return b !== null ? (d[u] = t(b), E = new d(), d[u] = null, E[l] = b) : E = g(), x === void 0 ? E : e.f(E, x);
  }, Cc;
}
var Ic, ry;
function nS() {
  if (ry) return Ic;
  ry = 1;
  var t = /* @__PURE__ */ St(), e = /* @__PURE__ */ Ft();
  return Ic = function(r, n) {
    t(n) && "cause" in n && e(r, "cause", n.cause);
  }, Ic;
}
var Fc, ny;
function UA() {
  if (ny) return Fc;
  ny = 1;
  var t = /* @__PURE__ */ ht(), e = Error, r = t("".replace), n = function(o) {
    return String(new e(o).stack);
  }("zxcasd"), s = /\n\s*at [^:]*:[^\n]*/, i = s.test(n);
  return Fc = function(o, a) {
    if (i && typeof o == "string" && !e.prepareStackTrace)
      for (; a--; ) o = r(o, s, "");
    return o;
  }, Fc;
}
var Mc, sy;
function JA() {
  if (sy) return Mc;
  sy = 1;
  var t = /* @__PURE__ */ ft(), e = /* @__PURE__ */ In();
  return Mc = !t(function() {
    var r = new Error("a");
    return "stack" in r ? (Object.defineProperty(r, "stack", e(1, 7)), r.stack !== 7) : !0;
  }), Mc;
}
var kc, iy;
function sS() {
  if (iy) return kc;
  iy = 1;
  var t = /* @__PURE__ */ Ft(), e = /* @__PURE__ */ UA(), r = /* @__PURE__ */ JA(), n = Error.captureStackTrace;
  return kc = function(s, i, o, a) {
    r && (n ? n(s, i) : t(s, "stack", e(o, a)));
  }, kc;
}
var Nc, oy;
function Zr() {
  return oy || (oy = 1, Nc = {}), Nc;
}
var Dc, ay;
function HA() {
  if (ay) return Dc;
  ay = 1;
  var t = /* @__PURE__ */ It(), e = /* @__PURE__ */ Zr(), r = t("iterator"), n = Array.prototype;
  return Dc = function(s) {
    return s !== void 0 && (e.Array === s || n[r] === s);
  }, Dc;
}
var qc, cy;
function op() {
  if (cy) return qc;
  cy = 1;
  var t = /* @__PURE__ */ It(), e = t("toStringTag"), r = {};
  return r[e] = "z", qc = String(r) === "[object z]", qc;
}
var Lc, uy;
function ap() {
  if (uy) return Lc;
  uy = 1;
  var t = /* @__PURE__ */ op(), e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ Wh(), n = /* @__PURE__ */ It(), s = n("toStringTag"), i = Object, o = r(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", a = function(c, u) {
    try {
      return c[u];
    } catch {
    }
  };
  return Lc = t ? r : function(c) {
    var u, h, l;
    return c === void 0 ? "Undefined" : c === null ? "Null" : typeof (h = a(u = i(c), s)) == "string" ? h : o ? r(u) : (l = r(u)) === "Object" && e(u.callee) ? "Arguments" : l;
  }, Lc;
}
var Vc, ly;
function iS() {
  if (ly) return Vc;
  ly = 1;
  var t = /* @__PURE__ */ ap(), e = /* @__PURE__ */ Zh(), r = /* @__PURE__ */ Yh(), n = /* @__PURE__ */ Zr(), s = /* @__PURE__ */ It(), i = s("iterator");
  return Vc = function(o) {
    if (!r(o)) return e(o, i) || e(o, "@@iterator") || n[t(o)];
  }, Vc;
}
var Bc, fy;
function GA() {
  if (fy) return Bc;
  fy = 1;
  var t = /* @__PURE__ */ yr(), e = /* @__PURE__ */ Zi(), r = /* @__PURE__ */ vr(), n = /* @__PURE__ */ Qh(), s = /* @__PURE__ */ iS(), i = TypeError;
  return Bc = function(o, a) {
    var c = arguments.length < 2 ? s(o) : a;
    if (e(c)) return r(t(c, o));
    throw new i(n(o) + " is not iterable");
  }, Bc;
}
var Uc, hy;
function KA() {
  if (hy) return Uc;
  hy = 1;
  var t = /* @__PURE__ */ yr(), e = /* @__PURE__ */ vr(), r = /* @__PURE__ */ Zh();
  return Uc = function(n, s, i) {
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
  }, Uc;
}
var Jc, py;
function zA() {
  if (py) return Jc;
  py = 1;
  var t = /* @__PURE__ */ Qx(), e = /* @__PURE__ */ yr(), r = /* @__PURE__ */ vr(), n = /* @__PURE__ */ Qh(), s = /* @__PURE__ */ HA(), i = /* @__PURE__ */ eS(), o = /* @__PURE__ */ Qi(), a = /* @__PURE__ */ GA(), c = /* @__PURE__ */ iS(), u = /* @__PURE__ */ KA(), h = TypeError, l = function(f, m) {
    this.stopped = f, this.result = m;
  }, d = l.prototype;
  return Jc = function(f, m, p) {
    var y = p && p.that, g = !!(p && p.AS_ENTRIES), v = !!(p && p.IS_RECORD), b = !!(p && p.IS_ITERATOR), x = !!(p && p.INTERRUPTED), E = t(m, y), O, j, _, P, k, S, R, I = function(G) {
      return O && u(O, "normal", G), new l(!0, G);
    }, L = function(G) {
      return g ? (r(G), x ? E(G[0], G[1], I) : E(G[0], G[1])) : x ? E(G, I) : E(G);
    };
    if (v)
      O = f.iterator;
    else if (b)
      O = f;
    else {
      if (j = c(f), !j) throw new h(n(f) + " is not iterable");
      if (s(j)) {
        for (_ = 0, P = i(f); P > _; _++)
          if (k = L(f[_]), k && o(d, k)) return k;
        return new l(!1);
      }
      O = a(f, j);
    }
    for (S = v ? f.next : O.next; !(R = e(S, O)).done; ) {
      try {
        k = L(R.value);
      } catch (G) {
        u(O, "throw", G);
      }
      if (typeof k == "object" && k && o(d, k)) return k;
    }
    return new l(!1);
  }, Jc;
}
var Hc, dy;
function cp() {
  if (dy) return Hc;
  dy = 1;
  var t = /* @__PURE__ */ ap(), e = String;
  return Hc = function(r) {
    if (t(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return e(r);
  }, Hc;
}
var Gc, my;
function oS() {
  if (my) return Gc;
  my = 1;
  var t = /* @__PURE__ */ cp();
  return Gc = function(e, r) {
    return e === void 0 ? arguments.length < 2 ? "" : r : t(e);
  }, Gc;
}
var yy;
function WA() {
  if (yy) return kd;
  yy = 1;
  var t = /* @__PURE__ */ eo(), e = /* @__PURE__ */ Qi(), r = /* @__PURE__ */ tp(), n = /* @__PURE__ */ to(), s = /* @__PURE__ */ rS(), i = /* @__PURE__ */ ip(), o = /* @__PURE__ */ Ft(), a = /* @__PURE__ */ In(), c = /* @__PURE__ */ nS(), u = /* @__PURE__ */ sS(), h = /* @__PURE__ */ zA(), l = /* @__PURE__ */ oS(), d = /* @__PURE__ */ It(), f = d("toStringTag"), m = Error, p = [].push, y = function(b, x) {
    var E = e(g, this), O;
    n ? O = n(new m(), E ? r(this) : g) : (O = E ? this : i(g), o(O, f, "Error")), x !== void 0 && o(O, "message", l(x)), u(O, y, O.stack, 1), arguments.length > 2 && c(O, arguments[2]);
    var j = [];
    return h(b, p, { that: j }), o(O, "errors", j), O;
  };
  n ? n(y, m) : s(y, m, { name: !0 });
  var g = y.prototype = i(m.prototype, {
    constructor: a(1, y),
    message: a(1, ""),
    name: a(1, "AggregateError")
  });
  return t({ global: !0, constructor: !0, arity: 2 }, {
    AggregateError: y
  }), kd;
}
var vy;
function aS() {
  return vy || (vy = 1, WA()), Md;
}
var gy;
function cS() {
  return gy || (gy = 1, aS()), Fd;
}
var by = {}, Kc, xy;
function YA() {
  if (xy) return Kc;
  xy = 1;
  var t = Qr().f;
  return Kc = function(e, r, n) {
    n in e || t(e, n, {
      configurable: !0,
      get: function() {
        return r[n];
      },
      set: function(s) {
        r[n] = s;
      }
    });
  }, Kc;
}
var zc, Sy;
function XA() {
  if (Sy) return zc;
  Sy = 1;
  var t = /* @__PURE__ */ Qe(), e = /* @__PURE__ */ St(), r = /* @__PURE__ */ to();
  return zc = function(n, s, i) {
    var o, a;
    return (
      // it can work only with native `setPrototypeOf`
      r && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      t(o = s.constructor) && o !== i && e(a = o.prototype) && a !== i.prototype && r(n, a), n
    );
  }, zc;
}
var Wc, Oy;
function uS() {
  if (Oy) return Wc;
  Oy = 1;
  var t = /* @__PURE__ */ Mn(), e = /* @__PURE__ */ Ot(), r = /* @__PURE__ */ Ft(), n = /* @__PURE__ */ Qi(), s = /* @__PURE__ */ to(), i = /* @__PURE__ */ rS(), o = /* @__PURE__ */ YA(), a = /* @__PURE__ */ XA(), c = /* @__PURE__ */ oS(), u = /* @__PURE__ */ nS(), h = /* @__PURE__ */ sS(), l = /* @__PURE__ */ Ct(), d = /* @__PURE__ */ kn();
  return Wc = function(f, m, p, y) {
    var g = "stackTraceLimit", v = y ? 2 : 1, b = f.split("."), x = b[b.length - 1], E = t.apply(null, b);
    if (E) {
      var O = E.prototype;
      if (!d && e(O, "cause") && delete O.cause, !p) return E;
      var j = t("Error"), _ = m(function(P, k) {
        var S = c(y ? k : P, void 0), R = y ? new E(P) : new E();
        return S !== void 0 && r(R, "message", S), h(R, _, R.stack, 2), this && n(O, this) && a(R, this, _), arguments.length > v && u(R, arguments[v]), R;
      });
      if (_.prototype = O, x !== "Error" ? s ? s(_, j) : i(_, j, { name: !0 }) : l && g in E && (o(_, E, g), o(_, E, "prepareStackTrace")), i(_, E), !d) try {
        O.name !== x && r(O, "name", x), O.constructor = _;
      } catch {
      }
      return _;
    }
  }, Wc;
}
var wy;
function QA() {
  if (wy) return by;
  wy = 1;
  var t = /* @__PURE__ */ eo(), e = /* @__PURE__ */ Xe(), r = /* @__PURE__ */ zh(), n = /* @__PURE__ */ uS(), s = "WebAssembly", i = e[s], o = new Error("e", { cause: 7 }).cause !== 7, a = function(u, h) {
    var l = {};
    l[u] = n(u, h, o), t({ global: !0, constructor: !0, arity: 1, forced: o }, l);
  }, c = function(u, h) {
    if (i && i[u]) {
      var l = {};
      l[u] = n(s + "." + u, h, o), t({ target: s, stat: !0, constructor: !0, arity: 1, forced: o }, l);
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
  }), by;
}
var Ey = {}, Ay;
function ZA() {
  if (Ay) return Ey;
  Ay = 1;
  var t = /* @__PURE__ */ eo(), e = /* @__PURE__ */ Mn(), r = /* @__PURE__ */ zh(), n = /* @__PURE__ */ ft(), s = /* @__PURE__ */ uS(), i = "AggregateError", o = e(i), a = !n(function() {
    return o([1]).errors[0] !== 1;
  }) && n(function() {
    return o([1], i, { cause: 7 }).cause !== 7;
  });
  return t({ global: !0, constructor: !0, arity: 2, forced: a }, {
    AggregateError: s(i, function(c) {
      return function(h, l) {
        return r(c, this, arguments);
      };
    }, a, !0)
  }), Ey;
}
var Yc, jy;
function ej() {
  return jy || (jy = 1, Yc = function() {
  }), Yc;
}
var Xc, Py;
function tj() {
  if (Py) return Xc;
  Py = 1;
  var t = /* @__PURE__ */ Xe(), e = /* @__PURE__ */ Qe(), r = t.WeakMap;
  return Xc = e(r) && /native code/.test(String(r)), Xc;
}
var Qc, Ty;
function lS() {
  if (Ty) return Qc;
  Ty = 1;
  var t = /* @__PURE__ */ tj(), e = /* @__PURE__ */ Xe(), r = /* @__PURE__ */ St(), n = /* @__PURE__ */ Ft(), s = /* @__PURE__ */ Ot(), i = /* @__PURE__ */ Jx(), o = /* @__PURE__ */ ep(), a = /* @__PURE__ */ np(), c = "Object already initialized", u = e.TypeError, h = e.WeakMap, l, d, f, m = function(v) {
    return f(v) ? d(v) : l(v, {});
  }, p = function(v) {
    return function(b) {
      var x;
      if (!r(b) || (x = d(b)).type !== v)
        throw new u("Incompatible receiver, " + v + " required");
      return x;
    };
  };
  if (t || i.state) {
    var y = i.state || (i.state = new h());
    y.get = y.get, y.has = y.has, y.set = y.set, l = function(v, b) {
      if (y.has(v)) throw new u(c);
      return b.facade = v, y.set(v, b), b;
    }, d = function(v) {
      return y.get(v) || {};
    }, f = function(v) {
      return y.has(v);
    };
  } else {
    var g = o("state");
    a[g] = !0, l = function(v, b) {
      if (s(v, g)) throw new u(c);
      return b.facade = v, n(v, g, b), b;
    }, d = function(v) {
      return s(v, g) ? v[g] : {};
    }, f = function(v) {
      return s(v, g);
    };
  }
  return Qc = {
    set: l,
    get: d,
    has: f,
    enforce: m,
    getterFor: p
  }, Qc;
}
var Zc, Ry;
function rj() {
  if (Ry) return Zc;
  Ry = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ Ot(), r = Function.prototype, n = t && Object.getOwnPropertyDescriptor, s = e(r, "name"), i = s && (function() {
  }).name === "something", o = s && (!t || t && n(r, "name").configurable);
  return Zc = {
    EXISTS: s,
    PROPER: i,
    CONFIGURABLE: o
  }, Zc;
}
var eu, _y;
function fS() {
  if (_y) return eu;
  _y = 1;
  var t = /* @__PURE__ */ Ft();
  return eu = function(e, r, n, s) {
    return s && s.enumerable ? e[r] = n : t(e, r, n), e;
  }, eu;
}
var tu, $y;
function hS() {
  if ($y) return tu;
  $y = 1;
  var t = /* @__PURE__ */ ft(), e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ St(), n = /* @__PURE__ */ ip(), s = /* @__PURE__ */ tp(), i = /* @__PURE__ */ fS(), o = /* @__PURE__ */ It(), a = /* @__PURE__ */ kn(), c = o("iterator"), u = !1, h, l, d;
  [].keys && (d = [].keys(), "next" in d ? (l = s(s(d)), l !== Object.prototype && (h = l)) : u = !0);
  var f = !r(h) || t(function() {
    var m = {};
    return h[c].call(m) !== m;
  });
  return f ? h = {} : a && (h = n(h)), e(h[c]) || i(h, c, function() {
    return this;
  }), tu = {
    IteratorPrototype: h,
    BUGGY_SAFARI_ITERATORS: u
  }, tu;
}
var ru, Cy;
function nj() {
  if (Cy) return ru;
  Cy = 1;
  var t = /* @__PURE__ */ op(), e = /* @__PURE__ */ ap();
  return ru = t ? {}.toString : function() {
    return "[object " + e(this) + "]";
  }, ru;
}
var nu, Iy;
function up() {
  if (Iy) return nu;
  Iy = 1;
  var t = /* @__PURE__ */ op(), e = Qr().f, r = /* @__PURE__ */ Ft(), n = /* @__PURE__ */ Ot(), s = /* @__PURE__ */ nj(), i = /* @__PURE__ */ It(), o = i("toStringTag");
  return nu = function(a, c, u, h) {
    var l = u ? a : a && a.prototype;
    l && (n(l, o) || e(l, o, { configurable: !0, value: c }), h && !t && r(l, "toString", s));
  }, nu;
}
var su, Fy;
function sj() {
  if (Fy) return su;
  Fy = 1;
  var t = hS().IteratorPrototype, e = /* @__PURE__ */ ip(), r = /* @__PURE__ */ In(), n = /* @__PURE__ */ up(), s = /* @__PURE__ */ Zr(), i = function() {
    return this;
  };
  return su = function(o, a, c, u) {
    var h = a + " Iterator";
    return o.prototype = e(t, { next: r(+!u, c) }), n(o, h, !1, !0), s[h] = i, o;
  }, su;
}
var iu, My;
function pS() {
  if (My) return iu;
  My = 1;
  var t = /* @__PURE__ */ eo(), e = /* @__PURE__ */ yr(), r = /* @__PURE__ */ kn(), n = /* @__PURE__ */ rj(), s = /* @__PURE__ */ Qe(), i = /* @__PURE__ */ sj(), o = /* @__PURE__ */ tp(), a = /* @__PURE__ */ to(), c = /* @__PURE__ */ up(), u = /* @__PURE__ */ Ft(), h = /* @__PURE__ */ fS(), l = /* @__PURE__ */ It(), d = /* @__PURE__ */ Zr(), f = /* @__PURE__ */ hS(), m = n.PROPER, p = n.CONFIGURABLE, y = f.IteratorPrototype, g = f.BUGGY_SAFARI_ITERATORS, v = l("iterator"), b = "keys", x = "values", E = "entries", O = function() {
    return this;
  };
  return iu = function(j, _, P, k, S, R, I) {
    i(P, _, k);
    var L = function(ne) {
      if (ne === S && C) return C;
      if (!g && ne && ne in ae) return ae[ne];
      switch (ne) {
        case b:
          return function() {
            return new P(this, ne);
          };
        case x:
          return function() {
            return new P(this, ne);
          };
        case E:
          return function() {
            return new P(this, ne);
          };
      }
      return function() {
        return new P(this);
      };
    }, G = _ + " Iterator", me = !1, ae = j.prototype, V = ae[v] || ae["@@iterator"] || S && ae[S], C = !g && V || L(S), K = _ === "Array" && ae.entries || V, U, H, re;
    if (K && (U = o(K.call(new j())), U !== Object.prototype && U.next && (!r && o(U) !== y && (a ? a(U, y) : s(U[v]) || h(U, v, O)), c(U, G, !0, !0), r && (d[G] = O))), m && S === x && V && V.name !== x && (!r && p ? u(ae, "name", x) : (me = !0, C = function() {
      return e(V, this);
    })), S)
      if (H = {
        values: L(x),
        keys: R ? C : L(b),
        entries: L(E)
      }, I) for (re in H)
        (g || me || !(re in ae)) && h(ae, re, H[re]);
      else t({ target: _, proto: !0, forced: g || me }, H);
    return (!r || I) && ae[v] !== C && h(ae, v, C, { name: S }), d[_] = C, H;
  }, iu;
}
var ou, ky;
function dS() {
  return ky || (ky = 1, ou = function(t, e) {
    return { value: t, done: e };
  }), ou;
}
var au, Ny;
function mS() {
  if (Ny) return au;
  Ny = 1;
  var t = /* @__PURE__ */ Fn(), e = /* @__PURE__ */ ej(), r = /* @__PURE__ */ Zr(), n = /* @__PURE__ */ lS(), s = Qr().f, i = /* @__PURE__ */ pS(), o = /* @__PURE__ */ dS(), a = /* @__PURE__ */ kn(), c = /* @__PURE__ */ Ct(), u = "Array Iterator", h = n.set, l = n.getterFor(u);
  au = i(Array, "Array", function(f, m) {
    h(this, {
      type: u,
      target: t(f),
      // target
      index: 0,
      // next index
      kind: m
      // kind
    });
  }, function() {
    var f = l(this), m = f.target, p = f.index++;
    if (!m || p >= m.length)
      return f.target = null, o(void 0, !0);
    switch (f.kind) {
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
  return au;
}
var Dy = {}, cu, qy;
function ij() {
  if (qy) return cu;
  qy = 1;
  var t = /* @__PURE__ */ ht(), e = /* @__PURE__ */ rp(), r = /* @__PURE__ */ cp(), n = /* @__PURE__ */ Xi(), s = t("".charAt), i = t("".charCodeAt), o = t("".slice), a = function(c) {
    return function(u, h) {
      var l = r(n(u)), d = e(h), f = l.length, m, p;
      return d < 0 || d >= f ? c ? "" : void 0 : (m = i(l, d), m < 55296 || m > 56319 || d + 1 === f || (p = i(l, d + 1)) < 56320 || p > 57343 ? c ? s(l, d) : m : c ? o(l, d, d + 2) : (m - 55296 << 10) + (p - 56320) + 65536);
    };
  };
  return cu = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: a(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: a(!0)
  }, cu;
}
var Ly;
function oj() {
  if (Ly) return Dy;
  Ly = 1;
  var t = ij().charAt, e = /* @__PURE__ */ cp(), r = /* @__PURE__ */ lS(), n = /* @__PURE__ */ pS(), s = /* @__PURE__ */ dS(), i = "String Iterator", o = r.set, a = r.getterFor(i);
  return n(String, "String", function(c) {
    o(this, {
      type: i,
      string: e(c),
      index: 0
    });
  }, function() {
    var u = a(this), h = u.string, l = u.index, d;
    return l >= h.length ? s(void 0, !0) : (d = t(h, l), u.index += d.length, s(d, !1));
  }), Dy;
}
var uu, Vy;
function aj() {
  if (Vy) return uu;
  Vy = 1, QA(), aS(), ZA(), mS(), oj();
  var t = /* @__PURE__ */ Xh();
  return uu = t.AggregateError, uu;
}
var By = {}, lu, Uy;
function cj() {
  return Uy || (Uy = 1, lu = {
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
  }), lu;
}
var Jy;
function uj() {
  if (Jy) return By;
  Jy = 1, mS();
  var t = /* @__PURE__ */ cj(), e = /* @__PURE__ */ Xe(), r = /* @__PURE__ */ up(), n = /* @__PURE__ */ Zr();
  for (var s in t)
    r(e[s], s), n[s] = n.Array;
  return By;
}
var fu, Hy;
function lj() {
  if (Hy) return fu;
  Hy = 1, cS();
  var t = /* @__PURE__ */ aj();
  return uj(), fu = t, fu;
}
var hu, Gy;
function fj() {
  if (Gy) return hu;
  Gy = 1;
  var t = /* @__PURE__ */ lj();
  return hu = t, hu;
}
var pu, Ky;
function hj() {
  if (Ky) return pu;
  Ky = 1, cS();
  var t = /* @__PURE__ */ fj();
  return pu = t, pu;
}
var du, zy;
function pj() {
  return zy || (zy = 1, du = /* @__PURE__ */ hj()), du;
}
var mu, Wy;
function dj() {
  return Wy || (Wy = 1, mu = /* @__PURE__ */ pj()), mu;
}
var mj = dj();
const yj = /* @__PURE__ */ Ki(mj);
class vj extends yj {
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
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(vj, e);
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
class ct extends ye {
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
class Z extends ye {
}
class yu extends Z {
}
var lp = function() {
  return !1;
}, Mt = function() {
  return !0;
};
function de(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function ue(t) {
  return function e(r) {
    return arguments.length === 0 || de(r) ? e : t.apply(this, arguments);
  };
}
function W(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return de(r) ? e : ue(function(s) {
          return t(r, s);
        });
      default:
        return de(r) && de(n) ? e : de(r) ? ue(function(s) {
          return t(s, n);
        }) : de(n) ? ue(function(s) {
          return t(r, s);
        }) : t(r, n);
    }
  };
}
function gj(t, e) {
  t = t || [], e = e || [];
  var r, n = t.length, s = e.length, i = [];
  for (r = 0; r < n; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < s; )
    i[i.length] = e[r], r += 1;
  return i;
}
function ro(t, e) {
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
      return function(r, n, s, i, o, a, c, u, h) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(r, n, s, i, o, a, c, u, h, l) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function fp(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!de(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, de(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : ro(Math.max(0, i), fp(t, n, r));
  };
}
var Se = /* @__PURE__ */ W(function(e, r) {
  return e === 1 ? ue(r) : ro(e, fp(e, [], r));
});
function Le(t) {
  return function e(r, n, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return de(r) ? e : W(function(i, o) {
          return t(r, i, o);
        });
      case 2:
        return de(r) && de(n) ? e : de(r) ? W(function(i, o) {
          return t(i, n, o);
        }) : de(n) ? W(function(i, o) {
          return t(r, i, o);
        }) : ue(function(i) {
          return t(r, n, i);
        });
      default:
        return de(r) && de(n) && de(s) ? e : de(r) && de(n) ? W(function(i, o) {
          return t(i, o, s);
        }) : de(r) && de(s) ? W(function(i, o) {
          return t(i, n, o);
        }) : de(n) && de(s) ? W(function(i, o) {
          return t(r, i, o);
        }) : de(r) ? ue(function(i) {
          return t(i, n, s);
        }) : de(n) ? ue(function(i) {
          return t(r, i, s);
        }) : de(s) ? ue(function(i) {
          return t(r, n, i);
        }) : t(r, n, s);
    }
  };
}
const gr = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function bj(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function zt(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!gr(n)) {
      for (var s = 0; s < t.length; ) {
        if (typeof n[t[s]] == "function")
          return n[t[s]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        s += 1;
      }
      if (bj(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function no(t) {
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
var xj = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = no(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
}();
function Sj(t) {
  return function(e) {
    return new xj(t, e);
  };
}
var hp = /* @__PURE__ */ W(/* @__PURE__ */ zt(["all"], Sj, function(e, r) {
  for (var n = 0; n < r.length; ) {
    if (!e(r[n]))
      return !1;
    n += 1;
  }
  return !0;
}));
function Yy(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function Ks(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function Oj(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function rt(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function wj(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const gn = typeof Object.is == "function" ? Object.is : wj;
var Xy = Object.prototype.toString, yS = /* @__PURE__ */ function() {
  return Xy.call(arguments) === "[object Arguments]" ? function(e) {
    return Xy.call(e) === "[object Arguments]";
  } : function(e) {
    return rt("callee", e);
  };
}(), Ej = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), Qy = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Zy = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), Aj = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, hr = /* @__PURE__ */ ue(typeof Object.keys == "function" && !Zy ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, s = [], i = Zy && yS(e);
  for (r in e)
    rt(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (Ej)
    for (n = Qy.length - 1; n >= 0; )
      r = Qy[n], rt(r, e) && !Aj(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), ut = /* @__PURE__ */ ue(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function ev(t, e, r, n) {
  var s = Yy(t), i = Yy(e);
  function o(a, c) {
    return pp(a, c, r.slice(), n.slice());
  }
  return !Ks(function(a, c) {
    return !Ks(o, c, a);
  }, i, s);
}
function pp(t, e, r, n) {
  if (gn(t, e))
    return !0;
  var s = ut(t);
  if (s !== ut(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (s) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && Oj(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && gn(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!gn(t.valueOf(), e.valueOf()))
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
      return t.size !== e.size ? !1 : ev(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : ev(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var o = hr(t);
  if (o.length !== hr(e).length)
    return !1;
  var a = r.concat([t]), c = n.concat([e]);
  for (i = o.length - 1; i >= 0; ) {
    var u = o[i];
    if (!(rt(u, e) && pp(e[u], t[u], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Wt = /* @__PURE__ */ W(function(e, r) {
  return pp(e, r, [], []);
});
function jj(t, e, r) {
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
    if (Wt(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function zs(t, e) {
  return jj(e, t, 0) >= 0;
}
function Is(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function vu(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var pn = function(e) {
  return (e < 10 ? "0" : "") + e;
}, Pj = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + pn(e.getUTCMonth() + 1) + "-" + pn(e.getUTCDate()) + "T" + pn(e.getUTCHours()) + ":" + pn(e.getUTCMinutes()) + ":" + pn(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function vS(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function Nn(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function Tj(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function Ws(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var Rj = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function _j(t) {
  return function(e) {
    return new Rj(t, e);
  };
}
var $j = /* @__PURE__ */ W(/* @__PURE__ */ zt(["fantasy-land/filter", "filter"], _j, function(t, e) {
  return Ws(e) ? Nn(function(r, n) {
    return t(e[n]) && (r[n] = e[n]), r;
  }, {}, hr(e)) : (
    // else
    Tj(t, e)
  );
})), Cj = /* @__PURE__ */ W(function(e, r) {
  return $j(vS(e), r);
});
function gS(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return zs(o, a) ? "<Circular>" : gS(o, a);
  }, n = function(i, o) {
    return Is(function(a) {
      return vu(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + Is(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + Is(r, t).concat(n(t, Cj(function(i) {
        return /^\d+$/.test(i);
      }, hr(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : vu(Pj(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : vu(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var s = t.toString();
        if (s !== "[object Object]")
          return s;
      }
      return "{" + n(t, hr(t)).join(", ") + "}";
  }
}
var Hr = /* @__PURE__ */ ue(function(e) {
  return gS(e, []);
}), bS = /* @__PURE__ */ W(function(e, r) {
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
  var o = Hr(e), a = n(o, Hr(r));
  return a !== void 0 && a === o ? e : r;
}), Ij = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), Fj = function(e) {
  return function(r) {
    return new Ij(e, r);
  };
}, so = /* @__PURE__ */ W(/* @__PURE__ */ zt(["fantasy-land/map", "map"], Fj, function(e, r) {
  switch (Object.prototype.toString.call(r)) {
    case "[object Function]":
      return Se(r.length, function() {
        return e.call(this, r.apply(this, arguments));
      });
    case "[object Object]":
      return Nn(function(n, s) {
        return n[s] = e(r[s]), n;
      }, {}, hr(r));
    default:
      return Is(e, r);
  }
}));
const en = Number.isInteger || function(e) {
  return e << 0 === e;
};
function dp(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function io(t, e) {
  var r = t < 0 ? e.length + t : t;
  return dp(e) ? e.charAt(r) : e[r];
}
var Dn = /* @__PURE__ */ W(function(e, r) {
  if (r != null)
    return en(e) ? io(e, r) : r[e];
}), xS = /* @__PURE__ */ W(function(e, r) {
  return so(Dn(e), r);
}), Mj = /* @__PURE__ */ ue(function(e) {
  return gr(e) ? !0 : !e || typeof e != "object" || dp(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), tv = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function SS(t, e, r) {
  return function(s, i, o) {
    if (Mj(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[tv] != null)
      return r(s, i, o[tv]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function kj(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var OS = /* @__PURE__ */ W(function(e, r) {
  return ro(e.length, function() {
    return e.apply(r, arguments);
  });
});
function Nj(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function Dj(t, e, r, n) {
  return t["@@transducer/result"](r[n](OS(t["@@transducer/step"], t), e));
}
var mp = /* @__PURE__ */ SS(kj, Dj, Nj), qj = /* @__PURE__ */ function() {
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
function wS(t) {
  return new qj(t);
}
var tn = /* @__PURE__ */ Le(function(t, e, r) {
  return mp(typeof t == "function" ? wS(t) : t, e, r);
}), Lj = /* @__PURE__ */ ue(function(e) {
  return Se(tn(bS, 0, xS("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (!e[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
}), J = /* @__PURE__ */ ue(function(e) {
  return function() {
    return e;
  };
}), Vj = /* @__PURE__ */ W(function(e, r) {
  return e && r;
}), Bj = /* @__PURE__ */ ue(function(e) {
  return Se(tn(bS, 0, xS("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function Uj(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function Jj(t, e, r, n) {
  return r[n](t, e);
}
var Hj = /* @__PURE__ */ SS(Nn, Jj, Uj), Gj = /* @__PURE__ */ W(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : Hj(function(n, s) {
    return gj(n, so(s, r));
  }, [], e);
}), Kj = /* @__PURE__ */ W(function(e, r) {
  return e.apply(this, r);
}), yp = /* @__PURE__ */ ue(function(e) {
  return Se(e.length, e);
});
function zj(t, e, r) {
  if (en(t) && gr(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var Ys = /* @__PURE__ */ ue(function(e) {
  return e == null;
}), M = /* @__PURE__ */ Le(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !Ys(n) && rt(s, n) && typeof n[s] == "object" ? n[s] : en(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return zj(s, r, n);
}), Wj = /* @__PURE__ */ Le(function(e, r, n) {
  return M([e], r, n);
});
function vp(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var Yj = /* @__PURE__ */ W(function(e, r) {
  var n = Se(e, r);
  return Se(e, function() {
    return Nn(Gj, so(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), gp = /* @__PURE__ */ ue(function(e) {
  return Yj(e.length, e);
}), qn = /* @__PURE__ */ W(function(e, r) {
  return vp(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : gp(Vj)(e, r);
});
function ES(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function AS(t, e, r) {
  if (r || (r = new Qj()), Xj(t))
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
  switch (ut(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n(Array(t.length));
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return ES(t);
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
function Xj(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var Qj = /* @__PURE__ */ function() {
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
}(), Zj = /* @__PURE__ */ ue(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), eP = /* @__PURE__ */ ue(function(e) {
  return !e;
}), Ln = /* @__PURE__ */ gp(eP);
function tP(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function bp(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return gr(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Vn = /* @__PURE__ */ Le(/* @__PURE__ */ bp("slice", function(e, r, n) {
  return Array.prototype.slice.call(n, e, r);
})), rP = /* @__PURE__ */ ue(/* @__PURE__ */ bp("tail", /* @__PURE__ */ Vn(1, 1 / 0)));
function ke() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return ro(arguments[0].length, tn(tP, arguments[0], rP(arguments)));
}
var nP = /* @__PURE__ */ ue(function(t) {
  return io(0, t);
});
function sP(t) {
  return t;
}
var jS = /* @__PURE__ */ ue(sP), iP = /* @__PURE__ */ function() {
  function t(e, r, n, s) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = s, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (rt(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, AS(this.valueAcc)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function oP(t, e, r) {
  return function(n) {
    return new iP(t, e, r, n);
  };
}
var aP = /* @__PURE__ */ fp(4, [], /* @__PURE__ */ zt([], oP, function(e, r, n, s) {
  var i = wS(function(o, a) {
    var c = n(a), u = e(rt(c, o) ? o[c] : AS(r), a);
    return u && u["@@transducer/reduced"] ? no(o) : (o[c] = u, o);
  });
  return mp(i, {}, s);
})), Gr = /* @__PURE__ */ W(function(e, r) {
  return r == null || r !== r ? e : r;
}), cP = /* @__PURE__ */ function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !rv(e, !0, this);
  }, t.prototype.has = function(e) {
    return rv(e, !1, this);
  }, t;
}();
function rv(t, e, r) {
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
      return r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? zs(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
    case "undefined":
      return r._items[n] ? !0 : (e && (r._items[n] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    /* falls through */
    default:
      return n = Object.prototype.toString.call(t), n in r._items ? zs(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
  }
}
var uP = /* @__PURE__ */ W(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new cP(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), lP = /* @__PURE__ */ Le(function(e, r, n) {
  var s = Array.prototype.slice.call(n, 0);
  return s.splice(e, r), s;
});
function fP(t, e) {
  if (e == null)
    return e;
  if (en(t) && gr(e))
    return lP(t, 1, e);
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return delete r[t], r;
}
function hP(t, e) {
  if (en(t) && gr(e))
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
      return fP(e[0], r);
    default:
      var n = e[0], s = Array.prototype.slice.call(e, 1);
      return r[n] == null ? hP(n, r) : Wj(n, t(s, r[n]), r);
  }
}), pP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? no(n) : n;
  }, t;
}();
function dP(t) {
  return function(e) {
    return new pP(t, e);
  };
}
var mP = /* @__PURE__ */ W(/* @__PURE__ */ zt(["take"], dP, function(e, r) {
  return Vn(0, e < 0 ? 1 / 0 : e, r);
}));
function yP(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return Vn(0, r + 1, e);
}
var vP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = mp(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
}();
function gP(t) {
  return function(e) {
    return new vP(t, e);
  };
}
var bP = /* @__PURE__ */ W(/* @__PURE__ */ zt([], gP, yP)), oo = /* @__PURE__ */ ue(function(t) {
  return io(-1, t);
}), xP = /* @__PURE__ */ function() {
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
function SP(t) {
  return function(e) {
    return new xP(t, e);
  };
}
var OP = /* @__PURE__ */ W(/* @__PURE__ */ zt(["dropWhile"], SP, function(e, r) {
  for (var n = 0, s = r.length; n < s && e(r[n]); )
    n += 1;
  return Vn(n, 1 / 0, r);
})), wP = /* @__PURE__ */ W(function(e, r) {
  return e || r;
}), EP = /* @__PURE__ */ W(function(e, r) {
  return vp(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : gp(wP)(e, r);
});
function AP(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var jP = /* @__PURE__ */ ue(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : gr(e) ? [] : dp(e) ? "" : Ws(e) ? {} : yS(e) ? /* @__PURE__ */ function() {
    return arguments;
  }() : AP(e) ? e.constructor.from("") : void 0;
}), PP = /* @__PURE__ */ ue(function(e) {
  return Se(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), TP = /* @__PURE__ */ W(/* @__PURE__ */ bp("groupBy", /* @__PURE__ */ aP(function(t, e) {
  return t.push(e), t;
}, []))), RP = /* @__PURE__ */ W(function(e, r) {
  if (e.length === 0 || Ys(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!Ys(n) && rt(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), bn = /* @__PURE__ */ W(function(e, r) {
  return RP([e], r);
}), Yt = function(t, e) {
  switch (arguments.length) {
    case 0:
      return Yt;
    case 1:
      return /* @__PURE__ */ function() {
        return function r(n) {
          switch (arguments.length) {
            case 0:
              return r;
            default:
              return gn(t, n);
          }
        };
      }();
    default:
      return gn(t, e);
  }
}, xp = /* @__PURE__ */ Le(function(e, r, n) {
  return Se(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), _P = /* @__PURE__ */ W(zs), $P = /* @__PURE__ */ Vn(0, -1), Sp = /* @__PURE__ */ W(function(e, r) {
  return Se(e + 1, function() {
    var n = arguments[e];
    if (n != null && vp(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(Hr(n) + ' does not have a method named "' + r + '"');
  });
}), Bn = /* @__PURE__ */ ue(function(e) {
  return e != null && Wt(e, jP(e));
}), PS = /* @__PURE__ */ ue(function(e) {
  return !Bn(e);
}), TS = /* @__PURE__ */ Sp(1, "join");
function nv(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var CP = /* @__PURE__ */ W(function(e, r) {
  return function(n) {
    return function(s) {
      return so(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
function Op(t, e) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    var s = t[n];
    en(s) ? r = io(s, r) : r = r[s];
  }
  return r;
}
var IP = /* @__PURE__ */ W(function(e, r) {
  return Nn(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, hr(r));
}), FP = /* @__PURE__ */ Le(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    rt(i, r) && (s[i] = rt(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    rt(i, n) && !rt(i, s) && (s[i] = n[i]);
  return s;
}), MP = /* @__PURE__ */ Le(function t(e, r, n) {
  return FP(function(s, i, o) {
    return Ws(i) && Ws(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), ao = /* @__PURE__ */ W(function(e, r) {
  return MP(function(n, s, i) {
    return i;
  }, e, r);
}), kP = /* @__PURE__ */ W(function(e, r) {
  return hp(vS(e), r);
}), RS = function(t) {
  return {
    value: t,
    map: function(e) {
      return RS(e(t));
    }
  };
}, NP = /* @__PURE__ */ Le(function(e, r, n) {
  return e(function(s) {
    return RS(r(s));
  })(n).value;
}), Te = /* @__PURE__ */ W(Op), _S = /* @__PURE__ */ Le(function(e, r, n) {
  return Gr(e, Op(r, n));
}), co = /* @__PURE__ */ Le(function(e, r, n) {
  return e(Op(r, n));
}), $S = /* @__PURE__ */ W(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), CS = /* @__PURE__ */ Le(function(e, r, n) {
  return Wt(e, Dn(r, n));
}), Xs = /* @__PURE__ */ Le(function(e, r, n) {
  return Gr(e, Dn(r, n));
}), DP = /* @__PURE__ */ Le(function(e, r, n) {
  return e(Dn(r, n));
}), qP = /* @__PURE__ */ W(function(e, r) {
  if (!(nv(e) && nv(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = Array(e < r ? r - e : 0), s = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < s; )
    n[i] = i + e, i += 1;
  return n;
}), LP = /* @__PURE__ */ ue(no), IS = /* @__PURE__ */ Le(function(e, r, n) {
  return n.replace(e, r);
}), VP = /* @__PURE__ */ W(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), FS = /* @__PURE__ */ Sp(1, "split"), BP = /* @__PURE__ */ W(function(t, e) {
  return Wt(mP(t.length, e), t);
});
function UP(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var JP = /* @__PURE__ */ W(function(e, r) {
  if (!UP(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + Hr(e));
  return ES(e).test(r);
}), HP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    return Ks(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
}();
function GP(t) {
  return function(e) {
    return new HP(t, e);
  };
}
var KP = /* @__PURE__ */ W(/* @__PURE__ */ zt([], GP, function(t, e) {
  for (var r = 0, n = e.length, s = [], i; r < n; )
    i = e[r], Ks(t, i, s) || (s[s.length] = i), r += 1;
  return s;
})), zP = /* @__PURE__ */ Le(function(e, r, n) {
  return e(n) ? r(n) : n;
}), uo = J(void 0), Xt = Wt(uo()), MS = Ln(Xt), kS = Wt(null), NS = Ln(kS), WP = Ln(Ys), YP = Se(1, ke(ut, Yt("GeneratorFunction"))), XP = Se(1, ke(ut, Yt("AsyncFunction"))), br = Bj([ke(ut, Yt("Function")), YP, XP]), DS = Se(1, br(Array.isArray) ? Array.isArray : ke(ut, Yt("Array"))), QP = qn(DS, Bn), ZP = qn(DS, PS), xr = Se(1, ke(ut, Yt("String"))), eT = Wt("");
function Hf(t) {
  "@babel/helpers - typeof";
  return Hf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Hf(t);
}
var qS = function(e) {
  return Hf(e) === "object";
}, tT = Se(1, qn(NS, EP(qS, br))), rT = Ln(tT), lo = Lj([xr, rT, PS]), nT = Ln(br), sT = Se(1, qn(NS, qS)), iT = ke(ut, Yt("Object")), oT = ke(Hr, Wt(Hr(Object))), aT = co(qn(br, oT), ["constructor"]), _t = Se(1, function(t) {
  if (!sT(t) || !iT(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return kS(e) ? !0 : aT(e);
}), cT = Se(1, ke(ut, Yt("RegExp")));
function uT(t) {
  return pT(t) || hT(t) || fT(t) || lT();
}
function lT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fT(t, e) {
  if (t) {
    if (typeof t == "string") return Gf(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Gf(t, e) : void 0;
  }
}
function hT(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function pT(t) {
  if (Array.isArray(t)) return Gf(t);
}
function Gf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var dT = Zj(function(t, e) {
  return t.length > e.length;
}), mT = ke(VP(dT), nP, Dn("length")), yT = yp(function(t, e, r) {
  var n = r.apply(void 0, uT(t));
  return WP(n) ? LP(n) : e;
}), vT = function(e) {
  var r = mT(e);
  return Se(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return tn(yT(s), void 0, e);
  });
}, LS = xp(ZP, vT, uo), fo = PP(_P), Rn = Se(3, function(t, e, r) {
  var n = Te(t, r), s = Te($P(t), r);
  if (!nT(n) && !QP(t)) {
    var i = OS(n, s);
    return Kj(i, e);
  }
}), gT = zP(xr, IS(/[.*+?^${}()|[\]\\-]/g, "\\$&")), bT = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, sv = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, xT = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, ST = function(e, r, n) {
  bT(e, r, n), sv(n, "str"), sv(r, "replaceValue"), xT(e);
  var s = new RegExp(cT(e) ? e : gT(e), "g");
  return IS(s, r, n);
}, OT = Se(3, ST), wT = Sp(2, "replaceAll"), ET = br(String.prototype.replaceAll) ? wT : OT, AT = yp(function(t, e) {
  return ke(FS(""), bP(fo(t)), TS(""))(e);
}), VS = yp(function(t, e) {
  return ke(FS(""), OP(fo(t)), TS(""))(e);
}), gu = { exports: {} }, iv;
function jT() {
  if (iv) return gu.exports;
  iv = 1;
  var t = gu.exports = {}, e, r;
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
  var a = [], c = !1, u, h = -1;
  function l() {
    !c || !u || (c = !1, u.length ? a = u.concat(a) : h = -1, a.length && d());
  }
  function d() {
    if (!c) {
      var p = i(l);
      c = !0;
      for (var y = a.length; y; ) {
        for (u = a, a = []; ++h < y; )
          u && u[h].run();
        h = -1, y = a.length;
      }
      u = null, c = !1, o(p);
    }
  }
  t.nextTick = function(p) {
    var y = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var g = 1; g < arguments.length; g++)
        y[g - 1] = arguments[g];
    a.push(new f(p, y)), a.length === 1 && !c && i(d);
  };
  function f(p, y) {
    this.fun = p, this.array = y;
  }
  f.prototype.run = function() {
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
  }, gu.exports;
}
var PT = jT();
const Qs = /* @__PURE__ */ Ki(PT), wp = () => co(JP(/^win/), ["platform"], Qs), ho = (t) => {
  try {
    const e = new URL(t);
    return AT(":", e.protocol);
  } catch {
    return;
  }
}, TT = ke(ho, MS), BS = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, Ep = (t) => {
  if (Qs.browser)
    return !1;
  const e = ho(t);
  return Xt(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, po = (t) => {
  const e = ho(t);
  return e === "http" || e === "https";
}, RT = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, Ap = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Xs(!1, "keepFileProtocol", e), s = Xs(wp, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = ET("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, US = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  wp() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < e.length; n += 2)
    r = r.replace(e[n], e[n + 1]);
  return r;
}, jp = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, fe = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, Zs = () => {
  if (Qs.browser)
    return fe(globalThis.location.href);
  const t = Qs.cwd(), e = oo(t);
  return ["/", "\\"].includes(e) ? t : t + (wp() ? "\\" : "/");
}, Pe = (t, e) => {
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
}, Un = (t) => {
  if (Ep(t))
    return US(Ap(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, ot = (t) => Ep(t) ? Ap(t) : decodeURI(t), _T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: Zs,
  fromFileSystemPath: US,
  getExtension: BS,
  getHash: jp,
  getProtocol: ho,
  hasProtocol: TT,
  isFileSystemPath: Ep,
  isHttpUrl: po,
  isURI: RT,
  resolve: Pe,
  sanitize: Un,
  stripHash: fe,
  toFileSystemPath: Ap,
  unsanitize: ot
}, Symbol.toStringTag, { value: "Module" }));
let _n = class {
  constructor({
    uri: e,
    mediaType: r = "text/plain",
    data: n,
    parseResult: s
  }) {
    A(this, "uri");
    A(this, "mediaType");
    A(this, "data");
    A(this, "parseResult");
    this.uri = e, this.mediaType = r, this.data = n, this.parseResult = s;
  }
  get extension() {
    return xr(this.uri) ? BS(this.uri) : "";
  }
  toString() {
    return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(ut(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
  }
};
class Kr {
  constructor({
    refs: e = [],
    circular: r = !1
  } = {}) {
    A(this, "rootRef");
    A(this, "refs");
    A(this, "circular");
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
    const r = xr(e) ? e : e.uri;
    return MS(this.find((n) => n.uri === r));
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
const JS = {
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
    circularReplacer: jS,
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
}, $T = CP(Te(["resolve", "baseURI"]), M(["resolve", "baseURI"])), CT = (t) => eT(t) ? Zs() : t, HS = (t, e) => {
  const r = ao(t, e);
  return NP($T, CT, r);
};
class IT extends ye {
  constructor(r, n) {
    super(r, {
      cause: n.cause
    });
    A(this, "plugin");
    this.plugin = n.plugin;
  }
}
const Pp = async (t, e, r) => {
  const n = await Promise.all(r.map(Rn([t], e)));
  return r.filter((s, i) => n[i]);
}, Tp = async (t, e, r) => {
  let n;
  for (const s of r)
    try {
      const i = await s[t].call(s, ...e);
      return {
        plugin: s,
        result: i
      };
    } catch (i) {
      n = new IT("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class Kf extends ye {
}
class Rp extends ye {
}
class GS extends Rp {
}
class KS extends GS {
}
const FT = async (t, e) => {
  const r = e.resolve.resolvers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.resolve.resolverOpts);
  }), n = await Pp("canRead", [t, e], r);
  if (Bn(n))
    throw new KS(t.uri);
  try {
    const {
      result: s
    } = await Tp("read", [t], n);
    return s;
  } catch (s) {
    throw new Rp(`Error while reading file "${t.uri}"`, {
      cause: s
    });
  }
}, MT = async (t, e) => {
  const r = e.parse.parsers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.parse.parserOpts);
  }), n = await Pp("canParse", [t, e], r);
  if (Bn(n))
    throw new KS(t.uri);
  try {
    const {
      plugin: s,
      result: i
    } = await Tp("parse", [t, e], n);
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new Kf(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new Kf(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, kT = async (t, e) => {
  const r = new _n({
    uri: Un(fe(t)),
    mediaType: e.parse.mediaType
  }), n = await FT(r, e);
  return MT(new _n({
    ...r,
    data: n
  }), e);
};
var be = {}, bu, ov;
function NT() {
  if (ov) return bu;
  ov = 1;
  function t(e) {
    return e === null;
  }
  return bu = t, bu;
}
var xu, av;
function zS() {
  if (av) return xu;
  av = 1;
  var t = typeof Cr == "object" && Cr && Cr.Object === Object && Cr;
  return xu = t, xu;
}
var Su, cv;
function kt() {
  if (cv) return Su;
  cv = 1;
  var t = zS(), e = typeof self == "object" && self && self.Object === Object && self, r = t || e || Function("return this")();
  return Su = r, Su;
}
var Ou, uv;
function _p() {
  if (uv) return Ou;
  uv = 1;
  var t = kt(), e = t.Symbol;
  return Ou = e, Ou;
}
var wu, lv;
function DT() {
  if (lv) return wu;
  lv = 1;
  var t = _p(), e = Object.prototype, r = e.hasOwnProperty, n = e.toString, s = t ? t.toStringTag : void 0;
  function i(o) {
    var a = r.call(o, s), c = o[s];
    try {
      o[s] = void 0;
      var u = !0;
    } catch {
    }
    var h = n.call(o);
    return u && (a ? o[s] = c : delete o[s]), h;
  }
  return wu = i, wu;
}
var Eu, fv;
function qT() {
  if (fv) return Eu;
  fv = 1;
  var t = Object.prototype, e = t.toString;
  function r(n) {
    return e.call(n);
  }
  return Eu = r, Eu;
}
var Au, hv;
function Sr() {
  if (hv) return Au;
  hv = 1;
  var t = _p(), e = DT(), r = qT(), n = "[object Null]", s = "[object Undefined]", i = t ? t.toStringTag : void 0;
  function o(a) {
    return a == null ? a === void 0 ? s : n : i && i in Object(a) ? e(a) : r(a);
  }
  return Au = o, Au;
}
var ju, pv;
function mo() {
  if (pv) return ju;
  pv = 1;
  var t = Array.isArray;
  return ju = t, ju;
}
var Pu, dv;
function Or() {
  if (dv) return Pu;
  dv = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return Pu = t, Pu;
}
var Tu, mv;
function LT() {
  if (mv) return Tu;
  mv = 1;
  var t = Sr(), e = mo(), r = Or(), n = "[object String]";
  function s(i) {
    return typeof i == "string" || !e(i) && r(i) && t(i) == n;
  }
  return Tu = s, Tu;
}
var Ru, yv;
function VT() {
  if (yv) return Ru;
  yv = 1;
  var t = Sr(), e = Or(), r = "[object Number]";
  function n(s) {
    return typeof s == "number" || e(s) && t(s) == r;
  }
  return Ru = n, Ru;
}
var _u, vv;
function BT() {
  if (vv) return _u;
  vv = 1;
  var t = Sr(), e = Or(), r = "[object Boolean]";
  function n(s) {
    return s === !0 || s === !1 || e(s) && t(s) == r;
  }
  return _u = n, _u;
}
var $u, gv;
function yo() {
  if (gv) return $u;
  gv = 1;
  function t(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  return $u = t, $u;
}
var Cu, bv;
function $p() {
  if (bv) return Cu;
  bv = 1;
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
  return Cu = t, Cu;
}
var Iu, xv;
function UT() {
  if (xv) return Iu;
  xv = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return Iu = t, Iu;
}
var Fu, Sv;
function WS() {
  if (Sv) return Fu;
  Sv = 1;
  function t(e, r) {
    return e === r || e !== e && r !== r;
  }
  return Fu = t, Fu;
}
var Mu, Ov;
function vo() {
  if (Ov) return Mu;
  Ov = 1;
  var t = WS();
  function e(r, n) {
    for (var s = r.length; s--; )
      if (t(r[s][0], n))
        return s;
    return -1;
  }
  return Mu = e, Mu;
}
var ku, wv;
function JT() {
  if (wv) return ku;
  wv = 1;
  var t = vo(), e = Array.prototype, r = e.splice;
  function n(s) {
    var i = this.__data__, o = t(i, s);
    if (o < 0)
      return !1;
    var a = i.length - 1;
    return o == a ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return ku = n, ku;
}
var Nu, Ev;
function HT() {
  if (Ev) return Nu;
  Ev = 1;
  var t = vo();
  function e(r) {
    var n = this.__data__, s = t(n, r);
    return s < 0 ? void 0 : n[s][1];
  }
  return Nu = e, Nu;
}
var Du, Av;
function GT() {
  if (Av) return Du;
  Av = 1;
  var t = vo();
  function e(r) {
    return t(this.__data__, r) > -1;
  }
  return Du = e, Du;
}
var qu, jv;
function KT() {
  if (jv) return qu;
  jv = 1;
  var t = vo();
  function e(r, n) {
    var s = this.__data__, i = t(s, r);
    return i < 0 ? (++this.size, s.push([r, n])) : s[i][1] = n, this;
  }
  return qu = e, qu;
}
var Lu, Pv;
function go() {
  if (Pv) return Lu;
  Pv = 1;
  var t = UT(), e = JT(), r = HT(), n = GT(), s = KT();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, Lu = i, Lu;
}
var Vu, Tv;
function zT() {
  if (Tv) return Vu;
  Tv = 1;
  var t = go();
  function e() {
    this.__data__ = new t(), this.size = 0;
  }
  return Vu = e, Vu;
}
var Bu, Rv;
function WT() {
  if (Rv) return Bu;
  Rv = 1;
  function t(e) {
    var r = this.__data__, n = r.delete(e);
    return this.size = r.size, n;
  }
  return Bu = t, Bu;
}
var Uu, _v;
function YT() {
  if (_v) return Uu;
  _v = 1;
  function t(e) {
    return this.__data__.get(e);
  }
  return Uu = t, Uu;
}
var Ju, $v;
function XT() {
  if ($v) return Ju;
  $v = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Ju = t, Ju;
}
var Hu, Cv;
function YS() {
  if (Cv) return Hu;
  Cv = 1;
  var t = Sr(), e = yo(), r = "[object AsyncFunction]", n = "[object Function]", s = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(a) {
    if (!e(a))
      return !1;
    var c = t(a);
    return c == n || c == s || c == r || c == i;
  }
  return Hu = o, Hu;
}
var Gu, Iv;
function QT() {
  if (Iv) return Gu;
  Iv = 1;
  var t = kt(), e = t["__core-js_shared__"];
  return Gu = e, Gu;
}
var Ku, Fv;
function ZT() {
  if (Fv) return Ku;
  Fv = 1;
  var t = QT(), e = function() {
    var n = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!e && e in n;
  }
  return Ku = r, Ku;
}
var zu, Mv;
function XS() {
  if (Mv) return zu;
  Mv = 1;
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
  return zu = r, zu;
}
var Wu, kv;
function eR() {
  if (kv) return Wu;
  kv = 1;
  var t = YS(), e = ZT(), r = yo(), n = XS(), s = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, a = Object.prototype, c = o.toString, u = a.hasOwnProperty, h = RegExp(
    "^" + c.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!r(d) || e(d))
      return !1;
    var f = t(d) ? h : i;
    return f.test(n(d));
  }
  return Wu = l, Wu;
}
var Yu, Nv;
function tR() {
  if (Nv) return Yu;
  Nv = 1;
  function t(e, r) {
    return e == null ? void 0 : e[r];
  }
  return Yu = t, Yu;
}
var Xu, Dv;
function rn() {
  if (Dv) return Xu;
  Dv = 1;
  var t = eR(), e = tR();
  function r(n, s) {
    var i = e(n, s);
    return t(i) ? i : void 0;
  }
  return Xu = r, Xu;
}
var Qu, qv;
function Cp() {
  if (qv) return Qu;
  qv = 1;
  var t = rn(), e = kt(), r = t(e, "Map");
  return Qu = r, Qu;
}
var Zu, Lv;
function bo() {
  if (Lv) return Zu;
  Lv = 1;
  var t = rn(), e = t(Object, "create");
  return Zu = e, Zu;
}
var el, Vv;
function rR() {
  if (Vv) return el;
  Vv = 1;
  var t = bo();
  function e() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return el = e, el;
}
var tl, Bv;
function nR() {
  if (Bv) return tl;
  Bv = 1;
  function t(e) {
    var r = this.has(e) && delete this.__data__[e];
    return this.size -= r ? 1 : 0, r;
  }
  return tl = t, tl;
}
var rl, Uv;
function sR() {
  if (Uv) return rl;
  Uv = 1;
  var t = bo(), e = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function s(i) {
    var o = this.__data__;
    if (t) {
      var a = o[i];
      return a === e ? void 0 : a;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return rl = s, rl;
}
var nl, Jv;
function iR() {
  if (Jv) return nl;
  Jv = 1;
  var t = bo(), e = Object.prototype, r = e.hasOwnProperty;
  function n(s) {
    var i = this.__data__;
    return t ? i[s] !== void 0 : r.call(i, s);
  }
  return nl = n, nl;
}
var sl, Hv;
function oR() {
  if (Hv) return sl;
  Hv = 1;
  var t = bo(), e = "__lodash_hash_undefined__";
  function r(n, s) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = t && s === void 0 ? e : s, this;
  }
  return sl = r, sl;
}
var il, Gv;
function aR() {
  if (Gv) return il;
  Gv = 1;
  var t = rR(), e = nR(), r = sR(), n = iR(), s = oR();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, il = i, il;
}
var ol, Kv;
function cR() {
  if (Kv) return ol;
  Kv = 1;
  var t = aR(), e = go(), r = Cp();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (r || e)(),
      string: new t()
    };
  }
  return ol = n, ol;
}
var al, zv;
function uR() {
  if (zv) return al;
  zv = 1;
  function t(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
  }
  return al = t, al;
}
var cl, Wv;
function xo() {
  if (Wv) return cl;
  Wv = 1;
  var t = uR();
  function e(r, n) {
    var s = r.__data__;
    return t(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
  }
  return cl = e, cl;
}
var ul, Yv;
function lR() {
  if (Yv) return ul;
  Yv = 1;
  var t = xo();
  function e(r) {
    var n = t(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return ul = e, ul;
}
var ll, Xv;
function fR() {
  if (Xv) return ll;
  Xv = 1;
  var t = xo();
  function e(r) {
    return t(this, r).get(r);
  }
  return ll = e, ll;
}
var fl, Qv;
function hR() {
  if (Qv) return fl;
  Qv = 1;
  var t = xo();
  function e(r) {
    return t(this, r).has(r);
  }
  return fl = e, fl;
}
var hl, Zv;
function pR() {
  if (Zv) return hl;
  Zv = 1;
  var t = xo();
  function e(r, n) {
    var s = t(this, r), i = s.size;
    return s.set(r, n), this.size += s.size == i ? 0 : 1, this;
  }
  return hl = e, hl;
}
var pl, eg;
function QS() {
  if (eg) return pl;
  eg = 1;
  var t = cR(), e = lR(), r = fR(), n = hR(), s = pR();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, pl = i, pl;
}
var dl, tg;
function dR() {
  if (tg) return dl;
  tg = 1;
  var t = go(), e = Cp(), r = QS(), n = 200;
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
  return dl = s, dl;
}
var ml, rg;
function mR() {
  if (rg) return ml;
  rg = 1;
  var t = go(), e = zT(), r = WT(), n = YT(), s = XT(), i = dR();
  function o(a) {
    var c = this.__data__ = new t(a);
    this.size = c.size;
  }
  return o.prototype.clear = e, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = s, o.prototype.set = i, ml = o, ml;
}
var yl, ng;
function yR() {
  if (ng) return yl;
  ng = 1;
  var t = "__lodash_hash_undefined__";
  function e(r) {
    return this.__data__.set(r, t), this;
  }
  return yl = e, yl;
}
var vl, sg;
function vR() {
  if (sg) return vl;
  sg = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return vl = t, vl;
}
var gl, ig;
function gR() {
  if (ig) return gl;
  ig = 1;
  var t = QS(), e = yR(), r = vR();
  function n(s) {
    var i = -1, o = s == null ? 0 : s.length;
    for (this.__data__ = new t(); ++i < o; )
      this.add(s[i]);
  }
  return n.prototype.add = n.prototype.push = e, n.prototype.has = r, gl = n, gl;
}
var bl, og;
function bR() {
  if (og) return bl;
  og = 1;
  function t(e, r) {
    for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
      if (r(e[n], n, e))
        return !0;
    return !1;
  }
  return bl = t, bl;
}
var xl, ag;
function xR() {
  if (ag) return xl;
  ag = 1;
  function t(e, r) {
    return e.has(r);
  }
  return xl = t, xl;
}
var Sl, cg;
function ZS() {
  if (cg) return Sl;
  cg = 1;
  var t = gR(), e = bR(), r = xR(), n = 1, s = 2;
  function i(o, a, c, u, h, l) {
    var d = c & n, f = o.length, m = a.length;
    if (f != m && !(d && m > f))
      return !1;
    var p = l.get(o), y = l.get(a);
    if (p && y)
      return p == a && y == o;
    var g = -1, v = !0, b = c & s ? new t() : void 0;
    for (l.set(o, a), l.set(a, o); ++g < f; ) {
      var x = o[g], E = a[g];
      if (u)
        var O = d ? u(E, x, g, a, o, l) : u(x, E, g, o, a, l);
      if (O !== void 0) {
        if (O)
          continue;
        v = !1;
        break;
      }
      if (b) {
        if (!e(a, function(j, _) {
          if (!r(b, _) && (x === j || h(x, j, c, u, l)))
            return b.push(_);
        })) {
          v = !1;
          break;
        }
      } else if (!(x === E || h(x, E, c, u, l))) {
        v = !1;
        break;
      }
    }
    return l.delete(o), l.delete(a), v;
  }
  return Sl = i, Sl;
}
var Ol, ug;
function SR() {
  if (ug) return Ol;
  ug = 1;
  var t = kt(), e = t.Uint8Array;
  return Ol = e, Ol;
}
var wl, lg;
function OR() {
  if (lg) return wl;
  lg = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(s, i) {
      n[++r] = [i, s];
    }), n;
  }
  return wl = t, wl;
}
var El, fg;
function wR() {
  if (fg) return El;
  fg = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(s) {
      n[++r] = s;
    }), n;
  }
  return El = t, El;
}
var Al, hg;
function ER() {
  if (hg) return Al;
  hg = 1;
  var t = _p(), e = SR(), r = WS(), n = ZS(), s = OR(), i = wR(), o = 1, a = 2, c = "[object Boolean]", u = "[object Date]", h = "[object Error]", l = "[object Map]", d = "[object Number]", f = "[object RegExp]", m = "[object Set]", p = "[object String]", y = "[object Symbol]", g = "[object ArrayBuffer]", v = "[object DataView]", b = t ? t.prototype : void 0, x = b ? b.valueOf : void 0;
  function E(O, j, _, P, k, S, R) {
    switch (_) {
      case v:
        if (O.byteLength != j.byteLength || O.byteOffset != j.byteOffset)
          return !1;
        O = O.buffer, j = j.buffer;
      case g:
        return !(O.byteLength != j.byteLength || !S(new e(O), new e(j)));
      case c:
      case u:
      case d:
        return r(+O, +j);
      case h:
        return O.name == j.name && O.message == j.message;
      case f:
      case p:
        return O == j + "";
      case l:
        var I = s;
      case m:
        var L = P & o;
        if (I || (I = i), O.size != j.size && !L)
          return !1;
        var G = R.get(O);
        if (G)
          return G == j;
        P |= a, R.set(O, j);
        var me = n(I(O), I(j), P, k, S, R);
        return R.delete(O), me;
      case y:
        if (x)
          return x.call(O) == x.call(j);
    }
    return !1;
  }
  return Al = E, Al;
}
var jl, pg;
function AR() {
  if (pg) return jl;
  pg = 1;
  function t(e, r) {
    for (var n = -1, s = r.length, i = e.length; ++n < s; )
      e[i + n] = r[n];
    return e;
  }
  return jl = t, jl;
}
var Pl, dg;
function jR() {
  if (dg) return Pl;
  dg = 1;
  var t = AR(), e = mo();
  function r(n, s, i) {
    var o = s(n);
    return e(n) ? o : t(o, i(n));
  }
  return Pl = r, Pl;
}
var Tl, mg;
function PR() {
  if (mg) return Tl;
  mg = 1;
  function t(e, r) {
    for (var n = -1, s = e == null ? 0 : e.length, i = 0, o = []; ++n < s; ) {
      var a = e[n];
      r(a, n, e) && (o[i++] = a);
    }
    return o;
  }
  return Tl = t, Tl;
}
var Rl, yg;
function TR() {
  if (yg) return Rl;
  yg = 1;
  function t() {
    return [];
  }
  return Rl = t, Rl;
}
var _l, vg;
function RR() {
  if (vg) return _l;
  vg = 1;
  var t = PR(), e = TR(), r = Object.prototype, n = r.propertyIsEnumerable, s = Object.getOwnPropertySymbols, i = s ? function(o) {
    return o == null ? [] : (o = Object(o), t(s(o), function(a) {
      return n.call(o, a);
    }));
  } : e;
  return _l = i, _l;
}
var $l, gg;
function _R() {
  if (gg) return $l;
  gg = 1;
  function t(e, r) {
    for (var n = -1, s = Array(e); ++n < e; )
      s[n] = r(n);
    return s;
  }
  return $l = t, $l;
}
var Cl, bg;
function $R() {
  if (bg) return Cl;
  bg = 1;
  var t = Sr(), e = Or(), r = "[object Arguments]";
  function n(s) {
    return e(s) && t(s) == r;
  }
  return Cl = n, Cl;
}
var Il, xg;
function CR() {
  if (xg) return Il;
  xg = 1;
  var t = $R(), e = Or(), r = Object.prototype, n = r.hasOwnProperty, s = r.propertyIsEnumerable, i = t(/* @__PURE__ */ function() {
    return arguments;
  }()) ? t : function(o) {
    return e(o) && n.call(o, "callee") && !s.call(o, "callee");
  };
  return Il = i, Il;
}
var mn = { exports: {} }, Fl, Sg;
function IR() {
  if (Sg) return Fl;
  Sg = 1;
  function t() {
    return !1;
  }
  return Fl = t, Fl;
}
mn.exports;
var Og;
function eO() {
  return Og || (Og = 1, function(t, e) {
    var r = kt(), n = IR(), s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, u = c || n;
    t.exports = u;
  }(mn, mn.exports)), mn.exports;
}
var Ml, wg;
function FR() {
  if (wg) return Ml;
  wg = 1;
  var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function r(n, s) {
    var i = typeof n;
    return s = s ?? t, !!s && (i == "number" || i != "symbol" && e.test(n)) && n > -1 && n % 1 == 0 && n < s;
  }
  return Ml = r, Ml;
}
var kl, Eg;
function tO() {
  if (Eg) return kl;
  Eg = 1;
  var t = 9007199254740991;
  function e(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= t;
  }
  return kl = e, kl;
}
var Nl, Ag;
function MR() {
  if (Ag) return Nl;
  Ag = 1;
  var t = Sr(), e = tO(), r = Or(), n = "[object Arguments]", s = "[object Array]", i = "[object Boolean]", o = "[object Date]", a = "[object Error]", c = "[object Function]", u = "[object Map]", h = "[object Number]", l = "[object Object]", d = "[object RegExp]", f = "[object Set]", m = "[object String]", p = "[object WeakMap]", y = "[object ArrayBuffer]", g = "[object DataView]", v = "[object Float32Array]", b = "[object Float64Array]", x = "[object Int8Array]", E = "[object Int16Array]", O = "[object Int32Array]", j = "[object Uint8Array]", _ = "[object Uint8ClampedArray]", P = "[object Uint16Array]", k = "[object Uint32Array]", S = {};
  S[v] = S[b] = S[x] = S[E] = S[O] = S[j] = S[_] = S[P] = S[k] = !0, S[n] = S[s] = S[y] = S[i] = S[g] = S[o] = S[a] = S[c] = S[u] = S[h] = S[l] = S[d] = S[f] = S[m] = S[p] = !1;
  function R(I) {
    return r(I) && e(I.length) && !!S[t(I)];
  }
  return Nl = R, Nl;
}
var Dl, jg;
function kR() {
  if (jg) return Dl;
  jg = 1;
  function t(e) {
    return function(r) {
      return e(r);
    };
  }
  return Dl = t, Dl;
}
var yn = { exports: {} };
yn.exports;
var Pg;
function NR() {
  return Pg || (Pg = 1, function(t, e) {
    var r = zS(), n = e && !e.nodeType && e, s = n && !0 && t && !t.nodeType && t, i = s && s.exports === n, o = i && r.process, a = function() {
      try {
        var c = s && s.require && s.require("util").types;
        return c || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    t.exports = a;
  }(yn, yn.exports)), yn.exports;
}
var ql, Tg;
function rO() {
  if (Tg) return ql;
  Tg = 1;
  var t = MR(), e = kR(), r = NR(), n = r && r.isTypedArray, s = n ? e(n) : t;
  return ql = s, ql;
}
var Ll, Rg;
function DR() {
  if (Rg) return Ll;
  Rg = 1;
  var t = _R(), e = CR(), r = mo(), n = eO(), s = FR(), i = rO(), o = Object.prototype, a = o.hasOwnProperty;
  function c(u, h) {
    var l = r(u), d = !l && e(u), f = !l && !d && n(u), m = !l && !d && !f && i(u), p = l || d || f || m, y = p ? t(u.length, String) : [], g = y.length;
    for (var v in u)
      (h || a.call(u, v)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
      (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      f && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      m && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
      s(v, g))) && y.push(v);
    return y;
  }
  return Ll = c, Ll;
}
var Vl, _g;
function qR() {
  if (_g) return Vl;
  _g = 1;
  var t = Object.prototype;
  function e(r) {
    var n = r && r.constructor, s = typeof n == "function" && n.prototype || t;
    return r === s;
  }
  return Vl = e, Vl;
}
var Bl, $g;
function LR() {
  if ($g) return Bl;
  $g = 1;
  function t(e, r) {
    return function(n) {
      return e(r(n));
    };
  }
  return Bl = t, Bl;
}
var Ul, Cg;
function VR() {
  if (Cg) return Ul;
  Cg = 1;
  var t = LR(), e = t(Object.keys, Object);
  return Ul = e, Ul;
}
var Jl, Ig;
function BR() {
  if (Ig) return Jl;
  Ig = 1;
  var t = qR(), e = VR(), r = Object.prototype, n = r.hasOwnProperty;
  function s(i) {
    if (!t(i))
      return e(i);
    var o = [];
    for (var a in Object(i))
      n.call(i, a) && a != "constructor" && o.push(a);
    return o;
  }
  return Jl = s, Jl;
}
var Hl, Fg;
function UR() {
  if (Fg) return Hl;
  Fg = 1;
  var t = YS(), e = tO();
  function r(n) {
    return n != null && e(n.length) && !t(n);
  }
  return Hl = r, Hl;
}
var Gl, Mg;
function JR() {
  if (Mg) return Gl;
  Mg = 1;
  var t = DR(), e = BR(), r = UR();
  function n(s) {
    return r(s) ? t(s) : e(s);
  }
  return Gl = n, Gl;
}
var Kl, kg;
function HR() {
  if (kg) return Kl;
  kg = 1;
  var t = jR(), e = RR(), r = JR();
  function n(s) {
    return t(s, r, e);
  }
  return Kl = n, Kl;
}
var zl, Ng;
function GR() {
  if (Ng) return zl;
  Ng = 1;
  var t = HR(), e = 1, r = Object.prototype, n = r.hasOwnProperty;
  function s(i, o, a, c, u, h) {
    var l = a & e, d = t(i), f = d.length, m = t(o), p = m.length;
    if (f != p && !l)
      return !1;
    for (var y = f; y--; ) {
      var g = d[y];
      if (!(l ? g in o : n.call(o, g)))
        return !1;
    }
    var v = h.get(i), b = h.get(o);
    if (v && b)
      return v == o && b == i;
    var x = !0;
    h.set(i, o), h.set(o, i);
    for (var E = l; ++y < f; ) {
      g = d[y];
      var O = i[g], j = o[g];
      if (c)
        var _ = l ? c(j, O, g, o, i, h) : c(O, j, g, i, o, h);
      if (!(_ === void 0 ? O === j || u(O, j, a, c, h) : _)) {
        x = !1;
        break;
      }
      E || (E = g == "constructor");
    }
    if (x && !E) {
      var P = i.constructor, k = o.constructor;
      P != k && "constructor" in i && "constructor" in o && !(typeof P == "function" && P instanceof P && typeof k == "function" && k instanceof k) && (x = !1);
    }
    return h.delete(i), h.delete(o), x;
  }
  return zl = s, zl;
}
var Wl, Dg;
function KR() {
  if (Dg) return Wl;
  Dg = 1;
  var t = rn(), e = kt(), r = t(e, "DataView");
  return Wl = r, Wl;
}
var Yl, qg;
function zR() {
  if (qg) return Yl;
  qg = 1;
  var t = rn(), e = kt(), r = t(e, "Promise");
  return Yl = r, Yl;
}
var Xl, Lg;
function WR() {
  if (Lg) return Xl;
  Lg = 1;
  var t = rn(), e = kt(), r = t(e, "Set");
  return Xl = r, Xl;
}
var Ql, Vg;
function YR() {
  if (Vg) return Ql;
  Vg = 1;
  var t = rn(), e = kt(), r = t(e, "WeakMap");
  return Ql = r, Ql;
}
var Zl, Bg;
function XR() {
  if (Bg) return Zl;
  Bg = 1;
  var t = KR(), e = Cp(), r = zR(), n = WR(), s = YR(), i = Sr(), o = XS(), a = "[object Map]", c = "[object Object]", u = "[object Promise]", h = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", f = o(t), m = o(e), p = o(r), y = o(n), g = o(s), v = i;
  return (t && v(new t(new ArrayBuffer(1))) != d || e && v(new e()) != a || r && v(r.resolve()) != u || n && v(new n()) != h || s && v(new s()) != l) && (v = function(b) {
    var x = i(b), E = x == c ? b.constructor : void 0, O = E ? o(E) : "";
    if (O)
      switch (O) {
        case f:
          return d;
        case m:
          return a;
        case p:
          return u;
        case y:
          return h;
        case g:
          return l;
      }
    return x;
  }), Zl = v, Zl;
}
var ef, Ug;
function QR() {
  if (Ug) return ef;
  Ug = 1;
  var t = mR(), e = ZS(), r = ER(), n = GR(), s = XR(), i = mo(), o = eO(), a = rO(), c = 1, u = "[object Arguments]", h = "[object Array]", l = "[object Object]", d = Object.prototype, f = d.hasOwnProperty;
  function m(p, y, g, v, b, x) {
    var E = i(p), O = i(y), j = E ? h : s(p), _ = O ? h : s(y);
    j = j == u ? l : j, _ = _ == u ? l : _;
    var P = j == l, k = _ == l, S = j == _;
    if (S && o(p)) {
      if (!o(y))
        return !1;
      E = !0, P = !1;
    }
    if (S && !P)
      return x || (x = new t()), E || a(p) ? e(p, y, g, v, b, x) : r(p, y, j, g, v, b, x);
    if (!(g & c)) {
      var R = P && f.call(p, "__wrapped__"), I = k && f.call(y, "__wrapped__");
      if (R || I) {
        var L = R ? p.value() : p, G = I ? y.value() : y;
        return x || (x = new t()), b(L, G, g, v, x);
      }
    }
    return S ? (x || (x = new t()), n(p, y, g, v, b, x)) : !1;
  }
  return ef = m, ef;
}
var tf, Jg;
function ZR() {
  if (Jg) return tf;
  Jg = 1;
  var t = QR(), e = Or();
  function r(n, s, i, o, a) {
    return n === s ? !0 : n == null || s == null || !e(n) && !e(s) ? n !== n && s !== s : t(n, s, i, o, r, a);
  }
  return tf = r, tf;
}
var rf, Hg;
function e_() {
  if (Hg) return rf;
  Hg = 1;
  var t = ZR();
  function e(r, n) {
    return t(r, n);
  }
  return rf = e, rf;
}
var nf, Gg;
function So() {
  if (Gg) return nf;
  Gg = 1;
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
  return nf = t, nf;
}
var sf, Kg;
function Oo() {
  if (Kg) return sf;
  Kg = 1;
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
  return sf = e, sf;
}
var of, zg;
function wo() {
  if (zg) return of;
  zg = 1;
  const t = Oo();
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
  }), of = r, of;
}
var af, Wg;
function Nt() {
  if (Wg) return af;
  Wg = 1;
  const t = e_(), e = So(), r = wo();
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
      const c = (h, l) => (h.push(l), h), u = (h, l) => {
        l.element === o && h.push(l);
        const d = l.findRecursive(o);
        return d && d.reduce(c, h), l.content instanceof e && (l.content.key && u(h, l.content.key), l.content.value && u(h, l.content.value)), h;
      };
      return this.content && (this.content.element && u(a, this.content), Array.isArray(this.content) && this.content.reduce(u, a)), i.isEmpty || (a = a.filter((h) => {
        let l = h.parents.map((d) => d.element);
        for (const d in i) {
          const f = i[d], m = l.indexOf(f);
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
  return af = n, af;
}
var cf, Yg;
function t_() {
  if (Yg) return cf;
  Yg = 1;
  const t = Nt();
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
  return cf = e, cf;
}
var uf, Xg;
function r_() {
  if (Xg) return uf;
  Xg = 1;
  const t = Nt();
  return uf = class extends t {
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
  }, uf;
}
var lf, Qg;
function n_() {
  if (Qg) return lf;
  Qg = 1;
  const t = Nt();
  return lf = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "number";
    }
    primitive() {
      return "number";
    }
  }, lf;
}
var ff, Zg;
function s_() {
  if (Zg) return ff;
  Zg = 1;
  const t = Nt();
  return ff = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "boolean";
    }
    primitive() {
      return "boolean";
    }
  }, ff;
}
var hf, eb;
function nO() {
  if (eb) return hf;
  eb = 1;
  const t = Oo(), e = Nt(), r = wo();
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
        const h = this.content[u];
        this.primitive() === "object" ? c = this.refract(i(c, h.value, h.key, h, this)) : c = this.refract(i(c, h, u, this));
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
      return this.forEach((h, l, d) => {
        c && h.findElements !== void 0 && h.findElements(i, {
          results: u,
          recursive: c
        }), i(h, l, d) && u.push(h);
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
  }), hf = n, hf;
}
var pf, tb;
function sO() {
  if (tb) return pf;
  tb = 1;
  const t = So(), e = Nt();
  return pf = class extends e {
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
  }, pf;
}
var df, rb;
function iO() {
  if (rb) return df;
  rb = 1;
  const t = Oo(), e = wo();
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
  return df = r, df;
}
var mf, nb;
function i_() {
  if (nb) return mf;
  nb = 1;
  const t = Oo(), e = yo(), r = nO(), n = sO(), s = iO();
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
      const u = a, h = this.getMember(u);
      return h ? h.value = c : this.content.push(new n(u, c)), this;
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
      return this.forEach((h, l, d) => {
        const f = a.bind(c)(h, l, d);
        f && u.push(f);
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
  return mf = i, mf;
}
var yf, sb;
function o_() {
  if (sb) return yf;
  sb = 1;
  const t = Nt();
  return yf = class extends t {
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
  }, yf;
}
var vf, ib;
function a_() {
  if (ib) return vf;
  ib = 1;
  const t = Nt();
  return vf = class extends t {
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
  }, vf;
}
var gf, ob;
function oO() {
  if (ob) return gf;
  ob = 1;
  const t = Nt(), e = t_(), r = r_(), n = n_(), s = s_(), i = nO(), o = sO(), a = i_(), c = o_(), u = a_(), h = wo(), l = iO(), d = So();
  function f(m) {
    return m instanceof t ? m : typeof m == "string" ? new r(m) : typeof m == "number" ? new n(m) : typeof m == "boolean" ? new s(m) : m === null ? new e() : Array.isArray(m) ? new i(m.map(f)) : typeof m == "object" ? new a(m) : m;
  }
  return t.prototype.ObjectElement = a, t.prototype.RefElement = u, t.prototype.MemberElement = o, t.prototype.refract = f, h.prototype.refract = f, gf = {
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
    refract: f,
    ArraySlice: h,
    ObjectSlice: l,
    KeyValuePair: d
  }, gf;
}
var bf, ab;
function c_() {
  if (ab) return bf;
  ab = 1;
  const t = NT(), e = LT(), r = VT(), n = BT(), s = yo(), i = $p(), o = oO();
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
    register(u, h) {
      return this._elements = void 0, this.elementMap[u] = h, this;
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
    detect(u, h, l) {
      return (l === void 0 ? !0 : l) ? this.elementDetection.unshift([u, h]) : this.elementDetection.push([u, h]), this;
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
      let h;
      for (let l = 0; l < this.elementDetection.length; l += 1) {
        const d = this.elementDetection[l][0], f = this.elementDetection[l][1];
        if (d(u)) {
          h = new f(u);
          break;
        }
      }
      return h;
    }
    /*
     * Get an element class given an element name.
     */
    getElementClass(u) {
      const h = this.elementMap[u];
      return h === void 0 ? this.Element : h;
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
        const h = u[0].toUpperCase() + u.substr(1);
        this._elements[h] = this.elementMap[u];
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
  return i.prototype.Namespace = a, bf = a, bf;
}
var xf, cb;
function u_() {
  if (cb) return xf;
  cb = 1;
  const t = $p();
  return xf = class extends t {
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
          o = new this.namespace.elements.Array(), c.forEach((h) => {
            h.forEach((l) => {
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
  }, xf;
}
var ub;
function l_() {
  if (ub) return be;
  ub = 1;
  const t = c_(), e = oO();
  return be.Namespace = t, be.namespace = function(n) {
    return new t(n);
  }, be.KeyValuePair = So(), be.ArraySlice = e.ArraySlice, be.ObjectSlice = e.ObjectSlice, be.Element = e.Element, be.StringElement = e.StringElement, be.NumberElement = e.NumberElement, be.BooleanElement = e.BooleanElement, be.NullElement = e.NullElement, be.ArrayElement = e.ArrayElement, be.ObjectElement = e.ObjectElement, be.MemberElement = e.MemberElement, be.RefElement = e.RefElement, be.LinkElement = e.LinkElement, be.refract = e.refract, be.JSONSerialiser = $p(), be.JSON06Serialiser = u_(), be;
}
var w = l_();
class ei extends w.StringElement {
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
class ti extends w.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}
class lt extends w.ArrayElement {
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
    if (Xt(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
}
class ri extends w.ArrayElement {
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
const f_ = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", h_ = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, p_ = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, d_ = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof w.ArrayElement) && e.classes.includes(t), qt = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, N = (t) => t({
  hasMethod: f_,
  hasBasicElementProps: h_,
  primitiveEq: p_,
  isElementType: qt,
  hasClass: d_
}), ge = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.Element || t(r) && e(void 0, r)), z = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.StringElement || t(r) && e("string", r)), Ip = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.NumberElement || t(r) && e("number", r)), Fp = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.NullElement || t(r) && e("null", r)), Jn = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.BooleanElement || t(r) && e("boolean", r)), le = N(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof w.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Je = N(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof w.ArrayElement && !(n instanceof w.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), pt = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof w.MemberElement || t(n) && e("member", n) && r(void 0, n)), aO = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof w.LinkElement || t(n) && e("link", n) && r(void 0, n)), cO = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof w.RefElement || t(n) && e("ref", n) && r(void 0, n)), m_ = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ei || t(n) && e("annotation", n) && r("array", n)), y_ = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ti || t(n) && e("comment", n) && r("string", n)), uO = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof lt || t(n) && e("parseResult", n) && r("array", n)), lO = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ri || t(n) && e("sourceMap", n) && r("array", n)), lr = (t) => qt("object", t) || qt("array", t) || qt("boolean", t) || qt("number", t) || qt("string", t) || qt("null", t) || qt("member", t), Hn = (t) => lO(t.meta.get("sourceMap")), v_ = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Je(r) ? hp(fo(r.toValue()), t) : !1;
}, Eo = (t, e) => t.length === 0 ? !0 : hp(fo(e.classes.toValue()), t), g_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Hn,
  includesClasses: Eo,
  includesSymbols: v_,
  isAnnotationElement: m_,
  isArrayElement: Je,
  isBooleanElement: Jn,
  isCommentElement: y_,
  isElement: ge,
  isLinkElement: aO,
  isMemberElement: pt,
  isNullElement: Fp,
  isNumberElement: Ip,
  isObjectElement: le,
  isParseResultElement: uO,
  isPrimitiveElement: lr,
  isRefElement: cO,
  isSourceMapElement: lO,
  isStringElement: z
}, Symbol.toStringTag, { value: "Module" }));
class fO extends w.Namespace {
  constructor() {
    super(), this.register("annotation", ei), this.register("comment", ti), this.register("parseResult", lt), this.register("sourceMap", ri);
  }
}
const hO = new fO(), Dt = (t) => {
  const e = new fO();
  return _t(t) && e.use(t), e;
}, pO = () => ({
  predicates: {
    ...g_
  },
  namespace: hO
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
}, ee = {}, Gn = (t) => t == null ? void 0 : t.type, dO = (t) => typeof Gn(t) == "string", Mp = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), jo = (t, {
  visitFnGetter: e = Ao,
  nodeTypeGetter: r = Gn,
  breakSymbol: n = ee,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    enter(u, h, l, d, f, m) {
      let p = u, y = !1;
      const g = {
        ...m,
        replaceWith(v, b) {
          m.replaceWith(v, b), p = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const b = e(t[v], r(p), !1);
          if (typeof b == "function") {
            const x = b.call(t[v], p, h, l, d, f, g);
            if (typeof (x == null ? void 0 : x.then) == "function")
              throw new ct("Async visitor not supported in sync mode", {
                visitor: t[v],
                visitFn: b
              });
            if (x === i)
              c[v] = p;
            else if (x === n)
              c[v] = n;
            else {
              if (x === s)
                return x;
              if (x !== void 0)
                if (o)
                  p = x, y = !0;
                else
                  return x;
            }
          }
        }
      return y ? p : void 0;
    },
    leave(u, h, l, d, f, m) {
      let p = u;
      const y = {
        ...m,
        replaceWith(g, v) {
          m.replaceWith(g, v), p = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const v = e(t[g], r(p), !0);
          if (typeof v == "function") {
            const b = v.call(t[g], p, h, l, d, f, y);
            if (typeof (b == null ? void 0 : b.then) == "function")
              throw new ct("Async visitor not supported in sync mode", {
                visitor: t[g],
                visitFn: v
              });
            if (b === n)
              c[g] = n;
            else if (b !== void 0 && b !== i)
              return b;
          }
        } else c[g] === p && (c[g] = a);
    }
  };
}, b_ = (t, {
  visitFnGetter: e = Ao,
  nodeTypeGetter: r = Gn,
  breakSymbol: n = ee,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    async enter(u, h, l, d, f, m) {
      let p = u, y = !1;
      const g = {
        ...m,
        replaceWith(v, b) {
          m.replaceWith(v, b), p = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const b = e(t[v], r(p), !1);
          if (typeof b == "function") {
            const x = await b.call(t[v], p, h, l, d, f, g);
            if (x === i)
              c[v] = p;
            else if (x === n)
              c[v] = n;
            else {
              if (x === s)
                return x;
              if (x !== void 0)
                if (o)
                  p = x, y = !0;
                else
                  return x;
            }
          }
        }
      return y ? p : void 0;
    },
    async leave(u, h, l, d, f, m) {
      let p = u;
      const y = {
        ...m,
        replaceWith(g, v) {
          m.replaceWith(g, v), p = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const v = e(t[g], r(p), !0);
          if (typeof v == "function") {
            const b = await v.call(t[g], p, h, l, d, f, y);
            if (b === n)
              c[g] = n;
            else if (b !== void 0 && b !== i)
              return b;
          }
        } else c[g] === p && (c[g] = a);
    }
  };
};
jo[Symbol.for("nodejs.util.promisify.custom")] = b_;
const kp = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = ee,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ao,
  nodeTypeGetter: c = Gn,
  nodePredicate: u = dO,
  nodeCloneFn: h = Mp,
  detectCycles: l = !0
} = {}) => {
  const d = r || {};
  let f, m = Array.isArray(t), p = [t], y = -1, g, v = [], b = t;
  const x = [], E = [];
  do {
    y += 1;
    const _ = y === p.length;
    let P;
    const k = _ && v.length !== 0;
    if (_) {
      if (P = E.length === 0 ? void 0 : x.pop(), b = g, g = E.pop(), k)
        if (m) {
          b = b.slice();
          let R = 0;
          for (const [I, L] of v) {
            const G = I - R;
            L === i ? (b.splice(G, 1), R += 1) : b[G] = L;
          }
        } else {
          b = h(b);
          for (const [R, I] of v)
            b[R] = I;
        }
      y = f.index, p = f.keys, v = f.edits, m = f.inArray, f = f.prev;
    } else if (g !== i && g !== void 0) {
      if (P = m ? y : p[y], b = g[P], b === i || b === void 0)
        continue;
      x.push(P);
    }
    let S;
    if (!Array.isArray(b)) {
      var O;
      if (!u(b))
        throw new ct(`Invalid AST Node:  ${String(b)}`, {
          node: b
        });
      if (l && E.includes(b)) {
        x.pop();
        continue;
      }
      const R = a(e, c(b), _);
      if (R) {
        for (const [L, G] of Object.entries(n))
          e[L] = G;
        const I = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(L, G) {
            typeof G == "function" ? G(L, b, P, g, x, E) : g && (g[P] = L), _ || (b = L);
          }
        };
        S = R.call(e, b, P, g, x, E, I);
      }
      if (typeof ((O = S) === null || O === void 0 ? void 0 : O.then) == "function")
        throw new ct("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: R
        });
      if (S === s)
        break;
      if (S === o) {
        if (!_) {
          x.pop();
          continue;
        }
      } else if (S !== void 0 && (v.push([P, S]), !_))
        if (u(S))
          b = S;
        else {
          x.pop();
          continue;
        }
    }
    if (S === void 0 && k && v.push([P, b]), !_) {
      var j;
      f = {
        inArray: m,
        index: y,
        keys: p,
        edits: v,
        prev: f
      }, m = Array.isArray(b), p = m ? b : (j = d[c(b)]) !== null && j !== void 0 ? j : [], y = -1, v = [], g !== i && g !== void 0 && E.push(g), g = b;
    }
  } while (f !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
kp[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = ee,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ao,
  nodeTypeGetter: c = Gn,
  nodePredicate: u = dO,
  nodeCloneFn: h = Mp,
  detectCycles: l = !0
} = {}) => {
  const d = r || {};
  let f, m = Array.isArray(t), p = [t], y = -1, g, v = [], b = t;
  const x = [], E = [];
  do {
    y += 1;
    const j = y === p.length;
    let _;
    const P = j && v.length !== 0;
    if (j) {
      if (_ = E.length === 0 ? void 0 : x.pop(), b = g, g = E.pop(), P)
        if (m) {
          b = b.slice();
          let S = 0;
          for (const [R, I] of v) {
            const L = R - S;
            I === i ? (b.splice(L, 1), S += 1) : b[L] = I;
          }
        } else {
          b = h(b);
          for (const [S, R] of v)
            b[S] = R;
        }
      y = f.index, p = f.keys, v = f.edits, m = f.inArray, f = f.prev;
    } else if (g !== i && g !== void 0) {
      if (_ = m ? y : p[y], b = g[_], b === i || b === void 0)
        continue;
      x.push(_);
    }
    let k;
    if (!Array.isArray(b)) {
      if (!u(b))
        throw new ct(`Invalid AST Node: ${String(b)}`, {
          node: b
        });
      if (l && E.includes(b)) {
        x.pop();
        continue;
      }
      const S = a(e, c(b), j);
      if (S) {
        for (const [I, L] of Object.entries(n))
          e[I] = L;
        const R = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(I, L) {
            typeof L == "function" ? L(I, b, _, g, x, E) : g && (g[_] = I), j || (b = I);
          }
        };
        k = await S.call(e, b, _, g, x, E, R);
      }
      if (k === s)
        break;
      if (k === o) {
        if (!j) {
          x.pop();
          continue;
        }
      } else if (k !== void 0 && (v.push([_, k]), !j))
        if (u(k))
          b = k;
        else {
          x.pop();
          continue;
        }
    }
    if (k === void 0 && P && v.push([_, b]), !j) {
      var O;
      f = {
        inArray: m,
        index: y,
        keys: p,
        edits: v,
        prev: f
      }, m = Array.isArray(b), p = m ? b : (O = d[c(b)]) !== null && O !== void 0 ? O : [], y = -1, v = [], g !== i && g !== void 0 && E.push(g), g = b;
    }
  } while (f !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
class mO extends ct {
  constructor(r, n) {
    super(r, n);
    A(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class x_ extends mO {
}
class S_ extends mO {
}
const q = (t, e = {}) => {
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
    } = t, o = ge(s) ? q(s, n) : s, a = ge(i) ? q(i, n) : i, c = new w.KeyValuePair(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof w.ObjectSlice) {
    const s = (a) => q(a, n), i = [...t].map(s), o = new w.ObjectSlice(i);
    return r.set(t, o), o;
  }
  if (t instanceof w.ArraySlice) {
    const s = (a) => q(a, n), i = [...t].map(s), o = new w.ArraySlice(i);
    return r.set(t, o), o;
  }
  if (ge(t)) {
    const s = Be(t);
    if (r.set(t, s), t.content)
      if (ge(t.content))
        s.content = q(t.content, n);
      else if (t.content instanceof w.KeyValuePair)
        s.content = q(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => q(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new x_("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
q.safe = (t) => {
  try {
    return q(t);
  } catch {
    return t;
  }
};
const yO = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new w.KeyValuePair(e, r);
}, O_ = (t) => {
  const e = [...t];
  return new w.ArraySlice(e);
}, w_ = (t) => {
  const e = [...t];
  return new w.ObjectSlice(e);
}, vO = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = q(t.meta)), t.attributes.length > 0 && (e._attributes = q(t.attributes)), ge(t.content)) {
    const r = t.content;
    e.content = vO(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof w.KeyValuePair ? e.content = yO(t.content) : e.content = t.content;
  return e;
}, Be = (t) => {
  if (t instanceof w.KeyValuePair)
    return yO(t);
  if (t instanceof w.ObjectSlice)
    return w_(t);
  if (t instanceof w.ArraySlice)
    return O_(t);
  if (ge(t))
    return vO(t);
  throw new S_("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
Be.safe = (t) => {
  try {
    return Be(t);
  } catch {
    return t;
  }
};
const nn = (t) => le(t) ? "ObjectElement" : Je(t) ? "ArrayElement" : pt(t) ? "MemberElement" : z(t) ? "StringElement" : Jn(t) ? "BooleanElement" : Ip(t) ? "NumberElement" : Fp(t) ? "NullElement" : aO(t) ? "LinkElement" : cO(t) ? "RefElement" : void 0, gO = (t) => ge(t) ? Be(t) : Mp(t), bO = ke(nn, xr), wt = {
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
class xO {
  constructor({
    predicate: e = lp,
    returnOnTrue: r,
    returnOnFalse: n
  } = {}) {
    A(this, "result");
    A(this, "predicate");
    A(this, "returnOnTrue");
    A(this, "returnOnFalse");
    this.result = [], this.predicate = e, this.returnOnTrue = r, this.returnOnFalse = n;
  }
  enter(e) {
    return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
  }
}
const Oe = (t, e, {
  keyMap: r = wt,
  ...n
} = {}) => kp(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: nn,
  nodePredicate: bO,
  nodeCloneFn: gO,
  ...n
});
Oe[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = wt,
  ...n
} = {}) => kp[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: nn,
  nodePredicate: bO,
  nodeCloneFn: gO,
  ...n
});
const SO = {
  toolboxCreator: pO,
  visitorOptions: {
    nodeTypeGetter: nn,
    exposeEdits: !0
  }
}, Et = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = ao(SO, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((h) => h(o)), c = jo(a.map(Xs({}, "visitor")), {
    ...i
  });
  a.forEach(Rn(["pre"], []));
  const u = Oe(t, c, i);
  return a.forEach(Rn(["post"], [])), u;
}, E_ = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = ao(SO, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = jo[Symbol.for("nodejs.util.promisify.custom")], u = Oe[Symbol.for("nodejs.util.promisify.custom")], h = c(a.map(Xs({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(Rn(["pre"], [])));
  const l = await u(t, h, i);
  return await Promise.allSettled(a.map(Rn(["post"], []))), l;
};
Et[Symbol.for("nodejs.util.promisify.custom")] = E_;
var Sf = { exports: {} }, lb;
function A_() {
  return lb || (lb = 1, function(t) {
    var e = (() => {
      var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (x, E, O) => E in x ? r(x, E, { enumerable: !0, configurable: !0, writable: !0, value: O }) : x[E] = O, u = (x, E) => {
        for (var O in E || (E = {}))
          o.call(E, O) && c(x, O, E[O]);
        if (i)
          for (var O of i(E))
            a.call(E, O) && c(x, O, E[O]);
        return x;
      }, h = (x, E) => {
        for (var O in E)
          r(x, O, { get: E[O], enumerable: !0 });
      }, l = (x, E, O, j) => {
        if (E && typeof E == "object" || typeof E == "function")
          for (let _ of s(E))
            !o.call(x, _) && _ !== O && r(x, _, { get: () => E[_], enumerable: !(j = n(E, _)) || j.enumerable });
        return x;
      }, d = (x) => l(r({}, "__esModule", { value: !0 }), x), f = (x, E, O) => (c(x, typeof E != "symbol" ? E + "" : E, O), O), m = {};
      h(m, {
        DEFAULT_OPTIONS: () => g,
        DEFAULT_UUID_LENGTH: () => y,
        default: () => b
      });
      var p = "5.2.0", y = 6, g = {
        dictionary: "alphanum",
        shuffle: !0,
        debug: !1,
        length: y,
        counter: 0
      }, v = class {
        constructor(E = {}) {
          f(this, "counter"), f(this, "debug"), f(this, "dict"), f(this, "version"), f(this, "dictIndex", 0), f(this, "dictRange", []), f(this, "lowerBound", 0), f(this, "upperBound", 0), f(this, "dictLength", 0), f(this, "uuidLength"), f(this, "_digit_first_ascii", 48), f(this, "_digit_last_ascii", 58), f(this, "_alpha_lower_first_ascii", 97), f(this, "_alpha_lower_last_ascii", 123), f(this, "_hex_last_ascii", 103), f(this, "_alpha_upper_first_ascii", 65), f(this, "_alpha_upper_last_ascii", 91), f(this, "_number_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii]
          }), f(this, "_alpha_dict_ranges", {
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), f(this, "_alpha_lower_dict_ranges", {
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
          }), f(this, "_alpha_upper_dict_ranges", {
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), f(this, "_alphanum_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), f(this, "_alphanum_lower_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
          }), f(this, "_alphanum_upper_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), f(this, "_hex_dict_ranges", {
            decDigits: [this._digit_first_ascii, this._digit_last_ascii],
            alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
          }), f(this, "_dict_ranges", {
            _number_dict_ranges: this._number_dict_ranges,
            _alpha_dict_ranges: this._alpha_dict_ranges,
            _alpha_lower_dict_ranges: this._alpha_lower_dict_ranges,
            _alpha_upper_dict_ranges: this._alpha_upper_dict_ranges,
            _alphanum_dict_ranges: this._alphanum_dict_ranges,
            _alphanum_lower_dict_ranges: this._alphanum_lower_dict_ranges,
            _alphanum_upper_dict_ranges: this._alphanum_upper_dict_ranges,
            _hex_dict_ranges: this._hex_dict_ranges
          }), f(this, "log", (...S) => {
            const R = [...S];
            if (R[0] = `[short-unique-id] ${S[0]}`, this.debug === !0 && typeof console < "u" && console !== null)
              return console.log(...R);
          }), f(this, "_normalizeDictionary", (S, R) => {
            let I;
            if (S && Array.isArray(S) && S.length > 1)
              I = S;
            else {
              I = [];
              let L;
              this.dictIndex = L = 0;
              const G = `_${S}_dict_ranges`, me = this._dict_ranges[G];
              Object.keys(me).forEach((ae) => {
                const V = ae;
                for (this.dictRange = me[V], this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1], this.dictIndex = L = this.lowerBound; this.lowerBound <= this.upperBound ? L < this.upperBound : L > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? L += 1 : L -= 1)
                  I.push(String.fromCharCode(this.dictIndex));
              });
            }
            return R && (I = I.sort(() => Math.random() - 0.5)), I;
          }), f(this, "setDictionary", (S, R) => {
            this.dict = this._normalizeDictionary(S, R), this.dictLength = this.dict.length, this.setCounter(0);
          }), f(this, "seq", () => this.sequentialUUID()), f(this, "sequentialUUID", () => {
            let S, R, I = "";
            S = this.counter;
            do
              R = S % this.dictLength, S = Math.trunc(S / this.dictLength), I += this.dict[R];
            while (S !== 0);
            return this.counter += 1, I;
          }), f(this, "rnd", (S = this.uuidLength || y) => this.randomUUID(S)), f(this, "randomUUID", (S = this.uuidLength || y) => {
            let R, I, L;
            if (S === null || typeof S > "u" || S < 1)
              throw new Error("Invalid UUID Length Provided");
            for (R = "", L = 0; L < S; L += 1)
              I = parseInt(
                (Math.random() * this.dictLength).toFixed(0),
                10
              ) % this.dictLength, R += this.dict[I];
            return R;
          }), f(this, "fmt", (S, R) => this.formattedUUID(S, R)), f(this, "formattedUUID", (S, R) => {
            const I = {
              $r: this.randomUUID,
              $s: this.sequentialUUID,
              $t: this.stamp
            };
            return S.replace(
              /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
              (G) => {
                const me = G.slice(0, 2), ae = parseInt(G.slice(2), 10);
                return me === "$s" ? I[me]().padStart(ae, "0") : me === "$t" && R ? I[me](ae, R) : I[me](ae);
              }
            );
          }), f(this, "availableUUIDs", (S = this.uuidLength) => parseFloat(
            Math.pow([...new Set(this.dict)].length, S).toFixed(0)
          )), f(this, "approxMaxBeforeCollision", (S = this.availableUUIDs(this.uuidLength)) => parseFloat(
            Math.sqrt(Math.PI / 2 * S).toFixed(20)
          )), f(this, "collisionProbability", (S = this.availableUUIDs(this.uuidLength), R = this.uuidLength) => parseFloat(
            (this.approxMaxBeforeCollision(S) / this.availableUUIDs(R)).toFixed(20)
          )), f(this, "uniqueness", (S = this.availableUUIDs(this.uuidLength)) => {
            const R = parseFloat(
              (1 - this.approxMaxBeforeCollision(S) / S).toFixed(20)
            );
            return R > 1 ? 1 : R < 0 ? 0 : R;
          }), f(this, "getVersion", () => this.version), f(this, "stamp", (S, R) => {
            const I = Math.floor(+(R || /* @__PURE__ */ new Date()) / 1e3).toString(16);
            if (typeof S == "number" && S === 0)
              return I;
            if (typeof S != "number" || S < 10)
              throw new Error(
                [
                  "Param finalLength must be a number greater than or equal to 10,",
                  "or 0 if you want the raw hexadecimal timestamp"
                ].join(`
`)
              );
            const L = S - 9, G = Math.round(Math.random() * (L > 15 ? 15 : L)), me = this.randomUUID(L);
            return `${me.substring(0, G)}${I}${me.substring(G)}${G.toString(16)}`;
          }), f(this, "parseStamp", (S, R) => {
            if (R && !/t0|t[1-9]\d{1,}/.test(R))
              throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
            const I = R ? R.replace(
              /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
              (G) => {
                const me = {
                  $r: (C) => [...Array(C)].map(() => "r").join(""),
                  $s: (C) => [...Array(C)].map(() => "s").join(""),
                  $t: (C) => [...Array(C)].map(() => "t").join("")
                }, ae = G.slice(0, 2), V = parseInt(G.slice(2), 10);
                return me[ae](V);
              }
            ).replace(
              /^(.*?)(t{8,})(.*)$/g,
              (G, me, ae) => S.substring(me.length, me.length + ae.length)
            ) : S;
            if (I.length === 8)
              return new Date(parseInt(I, 16) * 1e3);
            if (I.length < 10)
              throw new Error("Stamp length invalid");
            const L = parseInt(I.substring(I.length - 1), 16);
            return new Date(parseInt(I.substring(L, L + 8), 16) * 1e3);
          }), f(this, "setCounter", (S) => {
            this.counter = S;
          }), f(this, "validate", (S, R) => {
            const I = R ? this._normalizeDictionary(R) : this.dict;
            return S.split("").every((L) => I.includes(L));
          });
          const O = u(u({}, g), E);
          this.counter = 0, this.debug = !1, this.dict = [], this.version = p;
          const {
            dictionary: j,
            shuffle: _,
            length: P,
            counter: k
          } = O;
          return this.uuidLength = P, this.setDictionary(j, _), this.setCounter(k), this.debug = O.debug, this.log(this.dict), this.log(
            `Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`
          ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this), this;
        }
      };
      f(v, "default", v);
      var b = v;
      return d(m);
    })();
    t.exports = e.default, typeof window < "u" && (e = e.default);
  }(Sf)), Sf.exports;
}
var j_ = A_();
const P_ = /* @__PURE__ */ Ki(j_);
class T_ extends ct {
  constructor(r, n) {
    super(r, n);
    A(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class Np {
  constructor({
    length: e = 6
  } = {}) {
    A(this, "uuid");
    A(this, "identityMap");
    this.uuid = new P_({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  }
  identify(e) {
    if (!ge(e))
      throw new T_("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
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
new Np();
class R_ extends Array {
  constructor() {
    super(...arguments);
    A(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new yu("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new yu("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new yu("latest method in MediaTypes class is not yet implemented.");
  }
}
const __ = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return ge(t) && (t.meta.length > 0 && (n.meta = q(t.meta)), t.attributes.length > 0 && (n.attributes = q(t.attributes))), Et(n, r, {
    toolboxCreator: pO,
    visitorOptions: {
      nodeTypeGetter: nn
    }
  });
}, nt = (t) => (e, r = {}) => __(e, {
  ...r,
  Type: t
});
w.ObjectElement.refract = nt(w.ObjectElement);
w.ArrayElement.refract = nt(w.ArrayElement);
w.StringElement.refract = nt(w.StringElement);
w.BooleanElement.refract = nt(w.BooleanElement);
w.NullElement.refract = nt(w.NullElement);
w.NumberElement.refract = nt(w.NumberElement);
w.LinkElement.refract = nt(w.LinkElement);
w.RefElement.refract = nt(w.RefElement);
ei.refract = nt(ei);
ti.refract = nt(ti);
lt.refract = nt(lt);
ri.refract = nt(ri);
const $_ = (t, e) => {
  const r = new xO({
    predicate: t
  });
  return Oe(e, r), new w.ArraySlice(r.result);
}, OO = (t, e) => {
  const r = new xO({
    predicate: t,
    returnOnTrue: ee
  });
  return Oe(e, r), _S(void 0, [0], r.result);
}, wO = (t) => typeof (t == null ? void 0 : t.type) == "string" ? t.type : nn(t), EO = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...wt
}, AO = (t, e, {
  keyMap: r = EO,
  ...n
} = {}) => Oe(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: wO,
  nodePredicate: Mt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
AO[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = EO,
  ...r
} = {}) => Oe[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: wO,
  nodePredicate: Mt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class C_ {
  constructor(e) {
    A(this, "type", "EphemeralArray");
    A(this, "content", []);
    A(this, "reference");
    this.content = e, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}
class I_ {
  constructor(e) {
    A(this, "type", "EphemeralObject");
    A(this, "content", []);
    A(this, "reference");
    this.content = e, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
let F_ = class {
  constructor() {
    A(this, "ObjectElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new I_(e.content);
        return this.references.set(e, r), r;
      }
    });
    A(this, "EphemeralObject", {
      leave: (e) => e.toObject()
    });
    A(this, "MemberElement", {
      enter: (e) => [e.key, e.value]
    });
    A(this, "ArrayElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new C_(e.content);
        return this.references.set(e, r), r;
      }
    });
    A(this, "EphemeralArray", {
      leave: (e) => e.toArray()
    });
    A(this, "references", /* @__PURE__ */ new WeakMap());
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
const $ = (t) => ge(t) ? z(t) || Ip(t) || Jn(t) || Fp(t) ? t.toValue() : AO(t, new F_()) : t, Fs = (t, e = /* @__PURE__ */ new WeakMap()) => (pt(t) ? (e.set(t.key, t), Fs(t.key, e), e.set(t.value, t), Fs(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), Fs(r, e);
}), e), M_ = (t, e, r) => {
  const n = r.get(t);
  pt(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, k_ = (t, e, r) => {
  const n = r.get(t);
  le(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, N_ = (t, e, r) => {
  const n = r.get(t);
  Je(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class D_ {
  constructor({
    element: e
  }) {
    A(this, "element");
    A(this, "edges");
    this.element = e;
  }
  transclude(e, r) {
    var n;
    if (e === this.element) return r;
    if (e === r) return this.element;
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : Fs(this.element);
    const s = this.edges.get(e);
    if (!Xt(s))
      return le(s) ? k_(e, r, this.edges) : Je(s) ? N_(e, r, this.edges) : pt(s) && M_(e, r, this.edges), this.element;
  }
}
const q_ = (t, e, r) => new D_({
  element: r
}).transclude(t, e), Qt = (t, e) => {
  const r = Gr(t, e);
  return IP((n) => {
    if (_t(n) && bn("$ref", n) && DP(xr, "$ref", n)) {
      const s = Te(["$ref"], n), i = VS("#/", s);
      return Te(i.split("/"), r);
    }
    return _t(n) ? Qt(n, r) : n;
  }, t);
}, jO = (t, e = hO) => {
  if (xr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return _t(t) && bn("element", t) ? e.fromRefract(t) : e.toElement(t);
}, ni = (t) => {
  const e = t.meta.length > 0 ? q(t.meta) : void 0, r = t.attributes.length > 0 ? q(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, si = (t, e) => e.clone && e.isMergeableElement(t) ? gt(ni(t), t, e) : t, L_ = (t, e) => {
  if (typeof e.customMerge != "function")
    return gt;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : gt;
}, V_ = (t) => typeof t.customMetaMerge != "function" ? (e) => q(e) : t.customMetaMerge, B_ = (t) => typeof t.customAttributesMerge != "function" ? (e) => q(e) : t.customAttributesMerge, U_ = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => si(n, r)), J_ = (t, e, r) => {
  const n = le(t) ? ni(t) : ni(e);
  return le(t) && t.forEach((s, i, o) => {
    const a = Be(o);
    a.value = si(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = $(i);
    let c;
    if (le(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const u = t.get(a);
      c = Be(o), c.value = L_(i, r)(u, s);
    } else
      c = Be(o), c.value = si(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, _s = {
  clone: !0,
  isMergeableElement: (t) => le(t) || Je(t),
  arrayElementMerge: U_,
  objectElementMerge: J_,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
}, gt = (t, e, r) => {
  var n, s, i;
  const o = {
    ..._s,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : _s.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : _s.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : _s.objectElementMerge;
  const a = Je(e), c = Je(t);
  if (!(a === c))
    return si(e, o);
  const h = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return h.meta = V_(o)(t.meta, e.meta), h.attributes = B_(o)(t.attributes, e.attributes), h;
};
gt.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new w.ObjectElement() : t.reduce((r, n) => gt(r, n, e), ni(t[0]));
};
class Dp extends ye {
}
class PO extends Dp {
}
const H_ = async (t, e) => {
  let r = t, n = !1;
  if (!uO(t)) {
    const o = Be(t);
    o.classes.push("result"), r = new lt([o]), n = !0;
  }
  const s = new _n({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await Pp("canDereference", [s, e], e.dereference.strategies);
  if (Bn(i))
    throw new PO(s.uri);
  try {
    const {
      result: o
    } = await Tp("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new Dp(`Error while dereferencing file "${s.uri}"`, {
      cause: o
    });
  }
};
let Kn = class {
  constructor({
    name: e,
    allowEmpty: r = !0,
    sourceMap: n = !1,
    fileExtensions: s = [],
    mediaTypes: i = []
  }) {
    A(this, "name");
    /**
     * Whether to allow "empty" files. This includes zero-byte files.
     */
    A(this, "allowEmpty");
    /**
     * Whether to generate source map during parsing.
     */
    A(this, "sourceMap");
    /**
     * List of supported file extensions.
     */
    A(this, "fileExtensions");
    /**
     * List of supported media types.
     */
    A(this, "mediaTypes");
    this.name = e, this.allowEmpty = r, this.sourceMap = n, this.fileExtensions = s, this.mediaTypes = i;
  }
};
class G_ {
  constructor({
    name: e
  }) {
    A(this, "name");
    this.name = e;
  }
}
class K_ extends G_ {
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
    A(this, "timeout");
    A(this, "redirects");
    A(this, "withCredentials");
    this.timeout = s, this.redirects = i, this.withCredentials = o;
  }
  // eslint-disable-next-line class-methods-use-this
  canRead(r) {
    return po(r.uri);
  }
}
class z_ {
  constructor({
    name: e
  }) {
    A(this, "name");
    this.name = e;
  }
}
class W_ {
  constructor({
    name: e
  }) {
    A(this, "name");
    this.name = e;
  }
}
class Of extends Array {
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
let Tt = class {
  constructor({
    uri: e,
    depth: r = 0,
    refSet: n,
    value: s
  }) {
    A(this, "uri");
    A(this, "depth");
    A(this, "value");
    A(this, "refSet");
    A(this, "errors");
    this.uri = e, this.value = s, this.depth = r, this.refSet = n, this.errors = [];
  }
};
class TO extends ye {
}
class Y_ extends TO {
}
class X_ extends ye {
}
class qp extends X_ {
}
class Q_ extends TO {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
class Nr extends Dp {
}
class Z_ extends Rp {
}
class $t extends Kf {
}
const e$ = async (t, e = {}) => {
  const r = HS(JS, e);
  return H_(t, r);
};
function fb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function t$(t) {
  if (Array.isArray(t)) return t;
}
function r$(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function n$(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function s$(t, e, r) {
  return e && n$(t.prototype, e), t;
}
function RO(t, e) {
  return e != null && typeof Symbol < "u" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
}
function i$(t, e) {
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
function o$() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function a$(t, e) {
  return t$(t) || i$(t, e) || c$(t, e) || o$();
}
function Dr(t) {
  "@swc/helpers - typeof";
  return t && typeof Symbol < "u" && t.constructor === Symbol ? "symbol" : typeof t;
}
function c$(t, e) {
  if (t) {
    if (typeof t == "string") return fb(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fb(t, e);
  }
}
var _O = function(t) {
  throw TypeError(t);
}, $O = function(t, e, r) {
  return e.has(t) || _O("Cannot " + r);
}, Ve = function(t, e, r) {
  return $O(t, e, "read from private field"), r ? r.call(t) : e.get(t);
}, hb = function(t, e, r) {
  return e.has(t) ? _O("Cannot add the same private member more than once") : RO(e, WeakSet) ? e.add(t) : e.set(t, r);
}, wf = function(t, e, r, n) {
  return $O(t, e, "write to private field"), e.set(t, r), r;
}, sn = function(t) {
  return Object.prototype.toString.call(t);
}, CO = function(t) {
  return ArrayBuffer.isView(t) && !RO(t, DataView);
}, u$ = function(t) {
  return sn(t) === "[object Date]";
}, l$ = function(t) {
  return sn(t) === "[object RegExp]";
}, f$ = function(t) {
  return sn(t) === "[object Error]";
}, h$ = function(t) {
  return sn(t) === "[object Boolean]";
}, p$ = function(t) {
  return sn(t) === "[object Number]";
}, d$ = function(t) {
  return sn(t) === "[object String]";
}, IO = Array.isArray, m$ = Object.getOwnPropertyDescriptor, y$ = Object.prototype.propertyIsEnumerable, v$ = Object.getOwnPropertySymbols, Ms = Object.prototype.hasOwnProperty;
function Lp(t) {
  for (var e = Object.keys(t), r = v$(t), n = 0; n < r.length; n++)
    y$.call(t, r[n]) && e.push(r[n]);
  return e;
}
function g$(t, e) {
  var r;
  return !(!((r = m$(t, e)) === null || r === void 0) && r.writable);
}
function FO(t, e) {
  if ((typeof t > "u" ? "undefined" : Dr(t)) === "object" && t !== null) {
    var r;
    if (IO(t))
      r = [];
    else if (u$(t))
      r = new Date(t.getTime ? t.getTime() : t);
    else if (l$(t))
      r = new RegExp(t);
    else if (f$(t))
      r = {
        message: t.message
      };
    else if (h$(t) || p$(t) || d$(t))
      r = Object(t);
    else {
      if (CO(t))
        return t.slice();
      r = Object.create(Object.getPrototypeOf(t));
    }
    var n = e.includeSymbols ? Lp : Object.keys, s = !0, i = !1, o = void 0;
    try {
      for (var a = n(t)[Symbol.iterator](), c; !(s = (c = a.next()).done); s = !0) {
        var u = c.value;
        r[u] = t[u];
      }
    } catch (h) {
      i = !0, o = h;
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
var MO = {
  includeSymbols: !1,
  immutable: !1
};
function pb(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : MO, n = [], s = [], i = !0, o = r.includeSymbols ? Lp : Object.keys, a = !!r.immutable;
  return function c(u) {
    var h = a ? FO(u, r) : u, l = {}, d = !0, f = {
      node: h,
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
      update: function(R) {
        var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        f.isRoot || (f.parent.node[f.key] = R), f.node = R, I && (d = !1);
      },
      delete: function(R) {
        delete f.parent.node[f.key], R && (d = !1);
      },
      remove: function(R) {
        IO(f.parent.node) ? f.parent.node.splice(f.key, 1) : delete f.parent.node[f.key], R && (d = !1);
      },
      keys: null,
      before: function(R) {
        l.before = R;
      },
      after: function(R) {
        l.after = R;
      },
      pre: function(R) {
        l.pre = R;
      },
      post: function(R) {
        l.post = R;
      },
      stop: function() {
        i = !1;
      },
      block: function() {
        d = !1;
      }
    };
    if (!i)
      return f;
    function m() {
      if (Dr(f.node) === "object" && f.node !== null) {
        (!f.keys || f.node_ !== f.node) && (f.keys = o(f.node)), f.isLeaf = f.keys.length === 0;
        for (var S = 0; S < s.length; S++)
          if (s[S].node_ === u) {
            f.circular = s[S];
            break;
          }
      } else
        f.isLeaf = !0, f.keys = null;
      f.notLeaf = !f.isLeaf, f.notRoot = !f.isRoot;
    }
    m();
    var p = e.call(f, f.node);
    if (p !== void 0 && f.update && f.update(p), l.before && l.before.call(f, f.node), !d)
      return f;
    if (Dr(f.node) === "object" && f.node !== null && !f.circular) {
      s.push(f), m();
      var y, g = !0, v = !1, b = void 0;
      try {
        for (var x = Object.entries((y = f.keys) !== null && y !== void 0 ? y : [])[Symbol.iterator](), E; !(g = (E = x.next()).done); g = !0) {
          var O = a$(E.value, 2), j = O[0], _ = O[1], P;
          n.push(_), l.pre && l.pre.call(f, f.node[_], _);
          var k = c(f.node[_]);
          a && Ms.call(f.node, _) && !g$(f.node, _) && (f.node[_] = k.node), k.isLast = !((P = f.keys) === null || P === void 0) && P.length ? +j === f.keys.length - 1 : !1, k.isFirst = +j == 0, l.post && l.post.call(f, k), n.pop();
        }
      } catch (S) {
        v = !0, b = S;
      } finally {
        try {
          !g && x.return != null && x.return();
        } finally {
          if (v)
            throw b;
        }
      }
      s.pop();
    }
    return l.after && l.after.call(f, f.node), f;
  }(t).node;
}
var He, Lt, At = /* @__PURE__ */ function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : MO;
    r$(this, t), hb(this, He), hb(this, Lt), wf(this, He, e), wf(this, Lt, r);
  }
  return s$(t, [
    {
      /**
      * Get the element at the array `path`.
      */
      key: "get",
      value: function(r) {
        for (var n = Ve(this, He), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!Ms.call(n, i) || !Ve(this, Lt).includeSymbols && (typeof i > "u" ? "undefined" : Dr(i)) === "symbol")
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
        for (var n = Ve(this, He), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!Ms.call(n, i) || !Ve(this, Lt).includeSymbols && (typeof i > "u" ? "undefined" : Dr(i)) === "symbol")
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
        var s = Ve(this, He), i = 0;
        for (i = 0; i < r.length - 1; i++) {
          var o = r[i];
          Ms.call(s, o) || (s[o] = {}), s = s[o];
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
        return pb(Ve(this, He), r, {
          immutable: !0,
          includeSymbols: !!Ve(this, Lt).includeSymbols
        });
      }
    },
    {
      /**
      * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
      */
      key: "forEach",
      value: function(r) {
        return wf(this, He, pb(Ve(this, He), r, Ve(this, Lt))), Ve(this, He);
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
        var s = arguments.length === 1, i = s ? Ve(this, He) : n;
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
        var r = [], n = [], s = Ve(this, Lt);
        return CO(Ve(this, He)) ? Ve(this, He).slice() : function i(o) {
          for (var a = 0; a < r.length; a++)
            if (r[a] === o)
              return n[a];
          if ((typeof o > "u" ? "undefined" : Dr(o)) === "object" && o !== null) {
            var c = FO(o, s);
            r.push(o), n.push(c);
            var u = s.includeSymbols ? Lp : Object.keys, h = !0, l = !1, d = void 0;
            try {
              for (var f = u(o)[Symbol.iterator](), m; !(h = (m = f.next()).done); h = !0) {
                var p = m.value;
                c[p] = i(o[p]);
              }
            } catch (y) {
              l = !0, d = y;
            } finally {
              try {
                !h && f.return != null && f.return();
              } finally {
                if (l)
                  throw d;
              }
            }
            return r.pop(), n.pop(), c;
          }
          return o;
        }(Ve(this, He));
      }
    }
  ]), t;
}();
He = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
var jt = function(t, e) {
  return new At(t, e);
};
jt.get = function(t, e, r) {
  return new At(t, r).get(e);
};
jt.set = function(t, e, r, n) {
  return new At(t, n).set(e, r);
};
jt.has = function(t, e, r) {
  return new At(t, r).has(e);
};
jt.map = function(t, e, r) {
  return new At(t, r).map(e);
};
jt.forEach = function(t, e, r) {
  return new At(t, r).forEach(e);
};
jt.reduce = function(t, e, r, n) {
  return new At(t, n).reduce(e, r);
};
jt.paths = function(t, e) {
  return new At(t, e).paths();
};
jt.nodes = function(t, e) {
  return new At(t, e).nodes();
};
jt.clone = function(t, e) {
  return new At(t, e).clone();
};
var b$ = jt;
const x$ = ["properties"], S$ = ["properties"], O$ = [
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
], w$ = ["schema/example", "items/example"];
function kO(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    x$.indexOf(e) > -1 && S$.indexOf(r) === -1 || O$.indexOf(n) > -1 || w$.some((s) => n.indexOf(s) > -1)
  );
}
function E$(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return b$(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), u = zf(this.node, n(a));
      i.push(r.replace(c, u));
    }
  }), i;
}
function zf(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if (po(s))
    o = Pe(s, i);
  else {
    const a = Pe(Ds, s), u = Pe(a, i).replace(Ds, "");
    o = i.startsWith("/") ? u : u.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const A$ = /^([a-z]+:\/\/|\/\/)/i;
class zr extends ct {
}
const Pt = {}, db = /* @__PURE__ */ new WeakMap(), j$ = [
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
], P$ = (t) => j$.some((e) => e(t)), T$ = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (kO(i) || P$(i))
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
    const a = DO(t), c = a[0], u = a[1] || "";
    let h;
    try {
      h = o || c ? NO(c, o) : null;
    } catch (p) {
      return Wf(p, {
        pointer: u,
        $ref: t,
        basePath: h,
        fullPath: r
      });
    }
    let l, d;
    if (I$(u, h, i, n) && !s.useCircularStructures) {
      const p = zf(t, h);
      return t === p ? null : ce.replace(r, p);
    }
    if (h == null ? (d = Bp(u), l = n.get(d), typeof l > "u" && (l = new zr(`Could not resolve reference: ${t}`, {
      pointer: u,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (l = qO(h, u), l.__value != null ? l = l.__value : l = l.catch((p) => {
      throw Wf(p, {
        pointer: u,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), l instanceof Error)
      return [ce.remove(r), l];
    const f = zf(t, h), m = ce.replace(i, l, {
      $$ref: f
    });
    if (h && h !== o)
      return [m, ce.context(i, {
        baseDoc: h
      })];
    try {
      if (!F$(n.state, m) || s.useCircularStructures)
        return m;
    } catch {
      return null;
    }
  }
}, Vp = Object.assign(T$, {
  docCache: Pt,
  absoluteify: NO,
  clearCache: R$,
  JSONRefError: zr,
  wrapError: Wf,
  getDoc: LO,
  split: DO,
  extractFromDoc: qO,
  fetchJSON: _$,
  extract: Yf,
  jsonPointerToArray: Bp,
  unescapeJsonPointerToken: VO
});
function NO(t, e) {
  if (!A$.test(t)) {
    if (!e)
      throw new zr(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return Pe(e, t);
  }
  return t;
}
function Wf(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new zr(`Could not resolve reference: ${r}`, {
    ...e,
    cause: t
  });
}
function DO(t) {
  return (t + "").split("#");
}
function qO(t, e) {
  const r = Pt[t];
  if (r && !ce.isPromise(r))
    try {
      const n = Yf(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return LO(t).then((n) => Yf(e, n));
}
function R$(t) {
  typeof t < "u" ? delete Pt[t] : Object.keys(Pt).forEach((e) => {
    delete Pt[e];
  });
}
function LO(t) {
  const e = Pt[t];
  return e ? ce.isPromise(e) ? e : Promise.resolve(e) : (Pt[t] = Vp.fetchJSON(t).then((r) => (Pt[t] = r, r)), Pt[t]);
}
function _$(t) {
  return fetch(t, {
    headers: {
      Accept: Fb
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => Ur.load(e));
}
function Yf(t, e) {
  const r = Bp(t);
  if (r.length < 1)
    return e;
  const n = ce.getIn(e, r);
  if (typeof n > "u")
    throw new zr(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function Bp(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(VO);
}
function VO(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function BO(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function $$(t) {
  return t.length === 0 ? "" : `/${t.map(BO).join("/")}`;
}
const C$ = (t) => !t || t === "/" || t === "#";
function Ef(t, e) {
  if (C$(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function I$(t, e, r, n) {
  let s = db.get(n);
  s || (s = {}, db.set(n, s));
  const i = $$(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && Ef(a, t))
    return !0;
  let u = "";
  if (r.some((l) => (u = `${u}/${BO(l)}`, s[u] && s[u].some((d) => Ef(d, o) || Ef(o, d)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function F$(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return ce.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const M$ = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (kO(i))
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
    return c.push(n.replace(i, {})), t.forEach((u, h) => {
      if (!n.isObject(u)) {
        if (o)
          return null;
        o = !0;
        const f = new TypeError("Elements in allOf must be objects");
        return f.fullPath = r, c.push(f);
      }
      c.push(n.mergeDeep(i, u));
      const l = r.slice(0, -1), d = E$(u, l, {
        getBaseUrlForNodePath: (f) => n.getContext([...r, h, ...f]).baseDoc,
        specmap: n
      });
      c.push(...d);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, k$ = {
  key: "parameters",
  plugin: (t, e, r, n) => {
    if (Array.isArray(t) && t.length) {
      const s = Object.assign([], t), i = r.slice(0, -1), o = {
        ...ce.getIn(n.spec, i)
      };
      for (let a = 0; a < t.length; a += 1) {
        const c = t[a];
        try {
          s[a].default = n.parameterMacro(o, c);
        } catch (u) {
          const h = new Error(u);
          return h.fullPath = r, h;
        }
      }
      return ce.replace(r, s);
    }
    return ce.replace(r, t);
  }
}, N$ = {
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
    return ce.replace(r, s);
  }
};
class D$ {
  constructor(e) {
    this.root = Af(e || {});
  }
  set(e, r) {
    const n = this.getParent(e, !0);
    if (!n) {
      ii(this.root, r, null);
      return;
    }
    const s = e[e.length - 1], {
      children: i
    } = n;
    if (i[s]) {
      ii(i[s], r, n);
      return;
    }
    i[s] = Af(r, n);
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
      return !i[s] && r && (i[s] = Af(null, n)), i[s];
    }, this.root);
  }
}
function Af(t, e) {
  return ii({
    children: {}
  }, t, e);
}
function ii(t, e, r) {
  return t.value = e || {}, t.protoValue = r ? {
    ...r.protoValue,
    ...t.value
  } : t.value, Object.keys(t.children).forEach((n) => {
    const s = t.children[n];
    t.children[n] = ii(s, s.value, t);
  }), t;
}
const mb = 100, yb = () => {
};
class q$ {
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
      contextTree: new D$(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), ce, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, e), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(ce.isFunction), this.patches.push(ce.add([], this.spec)), this.patches.push(ce.context([], this.context)), this.updatePatches(this.patches);
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
    return e[this.pluginProp] ? (s = e, i = e[this.pluginProp]) : ce.isFunction(e) ? i = e : ce.isObject(e) && (i = o(e)), Object.assign(i.bind(s), {
      pluginName: e.name || r,
      isGenerator: ce.isGenerator(i)
    });
    function o(a) {
      const c = (u, h) => Array.isArray(u) ? u.every((l, d) => l === h[d]) : !0;
      return function* (h, l) {
        const d = {};
        for (const [m, p] of h.filter(ce.isAdditiveMutation).entries())
          if (m < kb)
            yield* f(p.value, p.path, p);
          else
            return;
        function* f(m, p, y) {
          if (!ce.isObject(m))
            a.key === p[p.length - 1] && (yield a.plugin(m, a.key, p, l));
          else {
            const g = p.length - 1, v = p[g], b = p.indexOf("properties"), x = v === "properties" && g === b, E = l.allowMetaPatches && d[m.$$ref];
            for (const O of Object.keys(m)) {
              const j = m[O], _ = p.concat(O), P = ce.isObject(j), k = m.$$ref;
              if (E || P && (l.allowMetaPatches && k && c(n, _) && (d[k] = !0), yield* f(j, _, y)), !x && O === a.key) {
                const S = c(n, p);
                (!n || S) && (yield a.plugin(j, O, _, l, y));
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
    ce.normalizeArray(e).forEach((r) => {
      if (r instanceof Error) {
        this.errors.push(r);
        return;
      }
      try {
        if (!ce.isObject(r)) {
          this.debug("updatePatches", "Got a non-object patch", r);
          return;
        }
        if (this.showDebug && this.allPatches.push(r), ce.isPromise(r.value)) {
          this.promisedPatches.push(r), this.promisedPatchThen(r);
          return;
        }
        if (ce.isContextPatch(r)) {
          this.setContext(r.path, r.value);
          return;
        }
        ce.isMutation(r) && this.updateMutations(r);
      } catch (n) {
        console.error(n), this.errors.push(n);
      }
    });
  }
  updateMutations(e) {
    typeof e.value == "object" && !Array.isArray(e.value) && this.allowMetaPatches && (e.value = {
      ...e.value
    });
    const r = ce.applyPatch(this.state, e, {
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
    return ce.getIn(this.state, e);
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
    if (e.pluginCount = e.pluginCount || /* @__PURE__ */ new WeakMap(), e.pluginCount.set(r, (e.pluginCount.get(r) || 0) + 1), e.pluginCount[r] > mb)
      return Promise.resolve({
        spec: e.state,
        errors: e.errors.concat(new Error(`We've reached a hard limit of ${mb} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const i = this.promisedPatches.map((o) => o.value);
      return Promise.all(i.map((o) => o.then(yb, yb))).then(() => this.dispatch());
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
      i && (i = ce.fullyNormalizeArray(i), e.updatePatches(i, r));
    }
  }
}
function L$(t) {
  return new q$(t).dispatch();
}
const sr = {
  refs: Vp,
  allOf: M$,
  parameters: k$,
  properties: N$
};
async function Up(t) {
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
    useCircularStructures: h,
    strategies: l
  } = t, d = Hh(t), f = _x(t), m = l.find((y) => y.match(e));
  return p(e);
  async function p(y) {
    d && (sr.refs.docCache[d] = y), sr.refs.fetchJSON = Rx(f, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const g = [sr.refs];
    typeof o == "function" && g.push(sr.parameters), typeof i == "function" && g.push(sr.properties), r !== "strict" && g.push(sr.allOf);
    const v = await L$({
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
      useCircularStructures: h
    });
    return u || (v.spec = m.normalize(v.spec)), v;
  }
}
const UO = (t) => t.replace(/\W/gi, "_");
function V$(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${UO(t)}`;
}
function zn(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? UO(t.operationId) : V$(e, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function Jp(t) {
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
      const u = zn(c, s, a);
      if (u) {
        n[u] ? n[u].push(c) : n[u] = [c];
        const h = n[u];
        if (h.length > 1)
          h.forEach((l, d) => {
            l.__originalOperationId = l.__originalOperationId || l.operationId, l.operationId = `${u}${d + 1}`;
          });
        else if (typeof c.operationId < "u") {
          const l = h[0];
          l.__originalOperationId = l.__originalOperationId || c.operationId, l.operationId = u;
        }
      }
      if (a !== "parameters") {
        const h = [], l = {};
        for (const d in e)
          (d === "produces" || d === "consumes" || d === "security") && (l[d] = e[d], h.push(l));
        if (o && (l.parameters = o, h.push(l)), h.length) {
          for (const d of h)
            for (const f in d)
              if (!c[f])
                c[f] = d[f];
              else if (f === "parameters")
                for (const m of d[f])
                  c[f].some((y) => y.name && y.name === m.name || y.$ref && y.$ref === m.$ref || y.$$ref && y.$$ref === m.$$ref || y === m) || c[f].push(m);
        }
      }
    }
  }
  return e.$$normalized = !0, t;
}
function B$() {
  sr.refs.clearCache();
}
const JO = {
  name: "generic",
  match() {
    return !0;
  },
  normalize(t) {
    const {
      spec: e
    } = Jp({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return Up(t);
  }
};
async function U$(t) {
  return Up(t);
}
const HO = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, GO = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Hp = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Gp = (t) => GO(t) || Hp(t), KO = {
  name: "openapi-2",
  match(t) {
    return HO(t);
  },
  normalize(t) {
    const {
      spec: e
    } = Jp({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return U$(t);
  }
};
async function J$(t) {
  return Up(t);
}
const zO = {
  name: "openapi-3-0",
  match(t) {
    return GO(t);
  },
  normalize(t) {
    const {
      spec: e
    } = Jp({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return J$(t);
  }
}, H$ = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = Hh(t), i = _x(t), o = e || await Rx(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((u) => u.match(o)).resolve(a);
}, WO = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return H$(r);
}, G$ = WO({
  strategies: [zO, KO, JO]
}), K$ = async (t, e, r = {}) => {
  const {
    returnEntireTree: n,
    baseDoc: s,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: u,
    strategies: h
  } = r, l = {
    spec: t,
    pathDiscriminator: e,
    baseDoc: s,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: u,
    strategies: h
  }, f = h.find((p) => p.match(t)).normalize(t), m = await G$({
    spec: f,
    ...l,
    allowMetaPatches: !0,
    skipNormalization: !Hp(t)
  });
  return !n && Array.isArray(e) && e.length && (m.spec = e.reduce((p, y) => p == null ? void 0 : p[y], m.spec) || null), m;
}, z$ = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return K$(e, r, s);
};
class Kp extends ct {
}
class W$ extends Kp {
  constructor(r, n) {
    super(r, n);
    A(this, "pointer");
    typeof n < "u" && (this.pointer = n.pointer);
  }
}
class Y$ extends Kp {
  constructor(r, n) {
    super(r, n);
    A(this, "tokens");
    typeof n < "u" && (this.tokens = [...n.tokens]);
  }
}
class Xf extends Kp {
  constructor(r, n) {
    super(r, n);
    A(this, "pointer");
    A(this, "tokens");
    A(this, "failedToken");
    A(this, "failedTokenPosition");
    A(this, "element");
    typeof n < "u" && (this.pointer = n.pointer, Array.isArray(n.tokens) && (this.tokens = [...n.tokens]), this.failedToken = n.failedToken, this.failedTokenPosition = n.failedTokenPosition, this.element = n.element);
  }
}
const X$ = (t) => `#${[...t].map((r) => /^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/.test(r) ? r : encodeURIComponent(r)).join("")}`, zp = (t) => {
  try {
    const e = t.startsWith("#") ? t.slice(1) : t;
    return decodeURIComponent(e);
  } catch {
    return t;
  }
}, $r = (t) => {
  const e = t.indexOf("#"), r = e === -1 ? "#" : t.substring(e);
  return zp(r);
};
function Wn() {
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
const st = function() {
  const e = Y, r = Ze, n = this, s = "parser.js: Parser(): ", i = function() {
    this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
      this.state = e.ACTIVE, this.phraseLength = 0;
    };
  };
  n.ast = void 0, n.stats = void 0, n.trace = void 0, n.callbacks = [];
  let o = 0, a = 0, c = 0, u = 0, h = 0, l, d, f, m, p = new i(), y, g, v;
  const b = () => {
    o = 0, a = 0, c = 0, u = 0, h = 0, l = void 0, d = void 0, f = void 0, m = void 0, p.refresh(), y = void 0, g = void 0, v = void 0;
  }, x = () => {
    const V = `${s}initializeCallbacks(): `;
    let C;
    for (y = [], g = [], C = 0; C < l.length; C += 1)
      y[C] = void 0;
    for (C = 0; C < d.length; C += 1)
      g[C] = void 0;
    let K;
    const U = [];
    for (C = 0; C < l.length; C += 1)
      U.push(l[C].lower);
    for (C = 0; C < d.length; C += 1)
      U.push(d[C].lower);
    for (const H in n.callbacks)
      if (n.callbacks.hasOwnProperty(H)) {
        if (C = U.indexOf(H.toLowerCase()), C < 0)
          throw new Error(`${V}syntax callback '${H}' not a rule or udt name`);
        if (K = n.callbacks[H] ? n.callbacks[H] : void 0, typeof K == "function" || K === void 0)
          C < l.length ? y[C] = K : g[C - l.length] = K;
        else
          throw new Error(`${V}syntax callback[${H}] must be function reference or falsy)`);
      }
  };
  n.parse = (V, C, K, U) => {
    const H = `${s}parse(): `;
    b(), m = r.stringToChars(K), l = V.rules, d = V.udts;
    const re = C.toLowerCase();
    let ne;
    for (const Ar in l)
      if (l.hasOwnProperty(Ar) && re === l[Ar].lower) {
        ne = l[Ar].index;
        break;
      }
    if (ne === void 0)
      throw new Error(`${H}start rule name '${startRule}' not recognized`);
    x(), n.trace && n.trace.init(l, d, m), n.stats && n.stats.init(l, d), n.ast && n.ast.init(l, d, m), v = U, f = [
      {
        type: e.RNM,
        index: ne
      }
    ], ae(0, 0), f = void 0;
    let Re = !1;
    switch (p.state) {
      case e.ACTIVE:
        throw new Error(`${H}final state should never be 'ACTIVE'`);
      case e.NOMATCH:
        Re = !1;
        break;
      case e.EMPTY:
      case e.MATCH:
        p.phraseLength === m.length ? Re = !0 : Re = !1;
        break;
      default:
        throw new Error("unrecognized state");
    }
    return {
      success: Re,
      state: p.state,
      stateName: e.idName(p.state),
      length: m.length,
      matched: p.phraseLength,
      maxMatched: h,
      maxTreeDepth: c,
      nodeHits: u
    };
  };
  const E = (V, C) => {
    const K = f[V];
    for (let U = 0; U < K.children.length && (ae(K.children[U], C), p.state === e.NOMATCH); U += 1)
      ;
  }, O = (V, C) => {
    let K, U, H, re;
    const ne = f[V];
    n.ast && (U = n.ast.getLength()), K = !0, H = C, re = 0;
    for (let Re = 0; Re < ne.children.length; Re += 1)
      if (ae(ne.children[Re], H), p.state === e.NOMATCH) {
        K = !1;
        break;
      } else
        H += p.phraseLength, re += p.phraseLength;
    K ? (p.state = re === 0 ? e.EMPTY : e.MATCH, p.phraseLength = re) : (p.state = e.NOMATCH, p.phraseLength = 0, n.ast && n.ast.setLength(U));
  }, j = (V, C) => {
    let K, U, H, re;
    const ne = f[V];
    if (ne.max === 0) {
      p.state = e.EMPTY, p.phraseLength = 0;
      return;
    }
    for (U = C, H = 0, re = 0, n.ast && (K = n.ast.getLength()); !(U >= m.length || (ae(V + 1, U), p.state === e.NOMATCH) || p.state === e.EMPTY || (re += 1, H += p.phraseLength, U += p.phraseLength, re === ne.max)); )
      ;
    p.state === e.EMPTY || re >= ne.min ? (p.state = H === 0 ? e.EMPTY : e.MATCH, p.phraseLength = H) : (p.state = e.NOMATCH, p.phraseLength = 0, n.ast && n.ast.setLength(K));
  }, _ = (V, C, K, U) => {
    if (C.phraseLength > K) {
      let H = `${s}opRNM(${V.name}): callback function error: `;
      throw H += `sysData.phraseLength: ${C.phraseLength}`, H += ` must be <= remaining chars: ${K}`, new Error(H);
    }
    switch (C.state) {
      case e.ACTIVE:
        if (!U)
          throw new Error(
            `${s}opRNM(${V.name}): callback function return error. ACTIVE state not allowed.`
          );
        break;
      case e.EMPTY:
        C.phraseLength = 0;
        break;
      case e.MATCH:
        C.phraseLength === 0 && (C.state = e.EMPTY);
        break;
      case e.NOMATCH:
        C.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opRNM(${V.name}): callback function return error. Unrecognized return state: ${C.state}`
        );
    }
  }, P = (V, C) => {
    let K, U, H;
    const re = f[V], ne = l[re.index], Re = y[ne.index];
    if (o || (U = n.ast && n.ast.ruleDefined(re.index), U && (K = n.ast.getLength(), n.ast.down(re.index, l[re.index].name))), Re) {
      const Ar = m.length - C;
      Re(p, m, C, v), _(ne, p, Ar, !0), p.state === e.ACTIVE && (H = f, f = ne.opcodes, ae(0, C), f = H, Re(p, m, C, v), _(ne, p, Ar, !1));
    } else
      H = f, f = ne.opcodes, ae(0, C), f = H;
    o || U && (p.state === e.NOMATCH ? n.ast.setLength(K) : n.ast.up(re.index, ne.name, C, p.phraseLength));
  }, k = (V, C) => {
    const K = f[V];
    p.state = e.NOMATCH, C < m.length && K.min <= m[C] && m[C] <= K.max && (p.state = e.MATCH, p.phraseLength = 1);
  }, S = (V, C) => {
    const K = f[V], U = K.string.length;
    if (p.state = e.NOMATCH, C + U <= m.length) {
      for (let H = 0; H < U; H += 1)
        if (m[C + H] !== K.string[H])
          return;
      p.state = e.MATCH, p.phraseLength = U;
    }
  }, R = (V, C) => {
    let K;
    const U = f[V];
    p.state = e.NOMATCH;
    const H = U.string.length;
    if (H === 0) {
      p.state = e.EMPTY;
      return;
    }
    if (C + H <= m.length) {
      for (let re = 0; re < H; re += 1)
        if (K = m[C + re], K >= 65 && K <= 90 && (K += 32), K !== U.string[re])
          return;
      p.state = e.MATCH, p.phraseLength = H;
    }
  }, I = (V, C, K) => {
    if (C.phraseLength > K) {
      let U = `${s}opUDT(${V.name}): callback function error: `;
      throw U += `sysData.phraseLength: ${C.phraseLength}`, U += ` must be <= remaining chars: ${K}`, new Error(U);
    }
    switch (C.state) {
      case e.ACTIVE:
        throw new Error(`${s}opUDT(${V.name}) ACTIVE state return not allowed.`);
      case e.EMPTY:
        if (V.empty)
          C.phraseLength = 0;
        else
          throw new Error(`${s}opUDT(${V.name}) may not return EMPTY.`);
        break;
      case e.MATCH:
        if (C.phraseLength === 0)
          if (V.empty)
            C.state = e.EMPTY;
          else
            throw new Error(`${s}opUDT(${V.name}) may not return EMPTY.`);
        break;
      case e.NOMATCH:
        C.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opUDT(${V.name}): callback function return error. Unrecognized return state: ${C.state}`
        );
    }
  }, L = (V, C) => {
    let K, U, H;
    const re = f[V], ne = d[re.index];
    p.UdtIndex = ne.index, o || (H = n.ast && n.ast.udtDefined(re.index), H && (U = l.length + re.index, K = n.ast.getLength(), n.ast.down(U, ne.name)));
    const Re = m.length - C;
    g[re.index](p, m, C, v), I(ne, p, Re), o || H && (p.state === e.NOMATCH ? n.ast.setLength(K) : n.ast.up(U, ne.name, C, p.phraseLength));
  }, G = (V, C) => {
    switch (o += 1, ae(V + 1, C), o -= 1, p.phraseLength = 0, p.state) {
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
  }, me = (V, C) => {
    switch (o += 1, ae(V + 1, C), o -= 1, p.phraseLength = 0, p.state) {
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
  }, ae = (V, C) => {
    const K = `${s}opExecute(): `, U = f[V];
    switch (u += 1, a > c && (c = a), a += 1, p.refresh(), n.trace && n.trace.down(U, C), U.type) {
      case e.ALT:
        E(V, C);
        break;
      case e.CAT:
        O(V, C);
        break;
      case e.REP:
        j(V, C);
        break;
      case e.RNM:
        P(V, C);
        break;
      case e.TRG:
        k(V, C);
        break;
      case e.TBS:
        S(V, C);
        break;
      case e.TLS:
        R(V, C);
        break;
      case e.UDT:
        L(V, C);
        break;
      case e.AND:
        G(V, C);
        break;
      case e.NOT:
        me(V, C);
        break;
      default:
        throw new Error(`${K}unrecognized operator`);
    }
    o || C + p.phraseLength > h && (h = C + p.phraseLength), n.stats && n.stats.collect(U, p), n.trace && n.trace.up(U, p.state, C, p.phraseLength), a -= 1;
  };
}, Wp = function() {
  const e = "parser.js: Ast()): ", r = Y, n = Ze, s = this;
  let i, o, a, c = 0;
  const u = [], h = [], l = [];
  s.callbacks = [], s.init = (f, m, p) => {
    h.length = 0, l.length = 0, c = 0, i = f, o = m, a = p;
    let y;
    const g = [];
    for (y = 0; y < i.length; y += 1)
      g.push(i[y].lower);
    for (y = 0; y < o.length; y += 1)
      g.push(o[y].lower);
    for (c = i.length + o.length, y = 0; y < c; y += 1)
      u[y] = void 0;
    for (const v in s.callbacks)
      if (s.callbacks.hasOwnProperty(v)) {
        const b = v.toLowerCase();
        if (y = g.indexOf(b), y < 0)
          throw new Error(`${e}init: node '${v}' not a rule or udt name`);
        u[y] = s.callbacks[v];
      }
  }, s.ruleDefined = (f) => !!u[f], s.udtDefined = (f) => !!u[i.length + f], s.down = (f, m) => {
    const p = l.length;
    return h.push(p), l.push({
      name: m,
      thisIndex: p,
      thatIndex: void 0,
      state: r.SEM_PRE,
      callbackIndex: f,
      phraseIndex: void 0,
      phraseLength: void 0,
      stack: h.length
    }), p;
  }, s.up = (f, m, p, y) => {
    const g = l.length, v = h.pop();
    return l.push({
      name: m,
      thisIndex: g,
      thatIndex: v,
      state: r.SEM_POST,
      callbackIndex: f,
      phraseIndex: p,
      phraseLength: y,
      stack: h.length
    }), l[v].thatIndex = g, l[v].phraseIndex = p, l[v].phraseLength = y, g;
  }, s.translate = (f) => {
    let m, p;
    for (let y = 0; y < l.length; y += 1)
      p = l[y], m = u[p.callbackIndex], m && (p.state === r.SEM_PRE ? m(r.SEM_PRE, a, p.phraseIndex, p.phraseLength, f) : m && m(r.SEM_POST, a, p.phraseIndex, p.phraseLength, f));
  }, s.setLength = (f) => {
    l.length = f, f > 0 ? h.length = l[f - 1].stack : h.length = 0;
  }, s.getLength = () => l.length;
  function d(f) {
    let m = "";
    for (; f-- > 0; )
      m += " ";
    return m;
  }
  s.toXml = () => {
    let f = "", m = 0;
    return f += `<?xml version="1.0" encoding="utf-8"?>
`, f += `<root nodes="${l.length / 2}" characters="${a.length}">
`, f += `<!-- input string -->
`, f += d(m + 2), f += n.charsToString(a), f += `
`, l.forEach((p) => {
      p.state === r.SEM_PRE ? (m += 1, f += d(m), f += `<node name="${p.name}" index="${p.phraseIndex}" length="${p.phraseLength}">
`, f += d(m + 2), f += n.charsToString(a, p.phraseIndex, p.phraseLength), f += `
`) : (f += d(m), f += `</node><!-- name="${p.name}" -->
`, m -= 1);
    }), f += `</root>
`, f;
  };
}, Q$ = function() {
  const e = Y, r = Ze, n = "parser.js: Trace(): ";
  let s, i, o, a = "", c = 0;
  const u = 100, h = this, l = (f) => {
    let m = "", p = 0;
    if (f >= 0)
      for (; f--; )
        p += 1, p === 5 ? (m += "|", p = 0) : m += ".";
    return m;
  };
  h.init = (f, m, p) => {
    i = f, o = m, s = p;
  };
  const d = (f) => {
    let m;
    switch (f.type) {
      case e.ALT:
        m = "ALT";
        break;
      case e.CAT:
        m = "CAT";
        break;
      case e.REP:
        f.max === 1 / 0 ? m = `REP(${f.min},inf)` : m = `REP(${f.min},${f.max})`;
        break;
      case e.RNM:
        m = `RNM(${i[f.index].name})`;
        break;
      case e.TRG:
        m = `TRG(${f.min},${f.max})`;
        break;
      case e.TBS:
        f.string.length > 6 ? m = `TBS(${r.charsToString(f.string, 0, 3)}...)` : m = `TBS(${r.charsToString(f.string, 0, 6)})`;
        break;
      case e.TLS:
        f.string.length > 6 ? m = `TLS(${r.charsToString(f.string, 0, 3)}...)` : m = `TLS(${r.charsToString(f.string, 0, 6)})`;
        break;
      case e.UDT:
        m = `UDT(${o[f.index].name})`;
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
  h.down = (f, m) => {
    const p = l(c), y = Math.min(u, s.length - m);
    let g = r.charsToString(s, m, y);
    y < s.length - m && (g += "..."), g = `${p}|-|[${d(f)}]${g}
`, a += g, c += 1;
  }, h.up = (f, m, p, y) => {
    const g = `${n}trace.up: `;
    c -= 1;
    const v = l(c);
    let b, x, E;
    switch (m) {
      case e.EMPTY:
        E = "|E|", x = "''";
        break;
      case e.MATCH:
        E = "|M|", b = Math.min(u, y), b < y ? x = `'${r.charsToString(s, p, b)}...'` : x = `'${r.charsToString(s, p, b)}'`;
        break;
      case e.NOMATCH:
        E = "|N|", x = "";
        break;
      default:
        throw new Error(`${g} unrecognized state`);
    }
    x = `${v}${E}[${d(f)}]${x}
`, a += x;
  }, h.displayTrace = () => a;
}, Z$ = function() {
  const e = Y, r = "parser.js: Stats(): ";
  let n, s, i;
  const o = [], a = [], c = [];
  this.init = (y, g) => {
    n = y, s = g, m();
  }, this.collect = (y, g) => {
    p(i, g.state, g.phraseLength), p(o[y.type], g.state, g.phraseLength), y.type === e.RNM && p(a[y.index], g.state, g.phraseLength), y.type === e.UDT && p(c[y.index], g.state, g.phraseLength);
  }, this.displayStats = () => {
    let y = "";
    const g = {
      match: 0,
      empty: 0,
      nomatch: 0,
      total: 0
    }, v = (b, x, E, O, j) => {
      g.match += x, g.empty += E, g.nomatch += O, g.total += j;
      const _ = u(x), P = u(E), k = u(O), S = u(j);
      return `${b} | ${_} | ${P} | ${k} | ${S} |
`;
    };
    return y += `          OPERATOR STATS
`, y += `      |   MATCH |   EMPTY | NOMATCH |   TOTAL |
`, y += v("  ALT", o[e.ALT].match, o[e.ALT].empty, o[e.ALT].nomatch, o[e.ALT].total), y += v("  CAT", o[e.CAT].match, o[e.CAT].empty, o[e.CAT].nomatch, o[e.CAT].total), y += v("  REP", o[e.REP].match, o[e.REP].empty, o[e.REP].nomatch, o[e.REP].total), y += v("  RNM", o[e.RNM].match, o[e.RNM].empty, o[e.RNM].nomatch, o[e.RNM].total), y += v("  TRG", o[e.TRG].match, o[e.TRG].empty, o[e.TRG].nomatch, o[e.TRG].total), y += v("  TBS", o[e.TBS].match, o[e.TBS].empty, o[e.TBS].nomatch, o[e.TBS].total), y += v("  TLS", o[e.TLS].match, o[e.TLS].empty, o[e.TLS].nomatch, o[e.TLS].total), y += v("  UDT", o[e.UDT].match, o[e.UDT].empty, o[e.UDT].nomatch, o[e.UDT].total), y += v("  AND", o[e.AND].match, o[e.AND].empty, o[e.AND].nomatch, o[e.AND].total), y += v("  NOT", o[e.NOT].match, o[e.NOT].empty, o[e.NOT].nomatch, o[e.NOT].total), y += v("TOTAL", g.match, g.empty, g.nomatch, g.total), y;
  }, this.displayHits = (y) => {
    let g = "";
    const v = (b, x, E, O, j) => {
      i.match += b, i.empty += x, i.nomatch += E, i.total += O;
      const _ = u(b), P = u(x), k = u(E), S = u(O);
      return `| ${_} | ${P} | ${k} | ${S} | ${j}
`;
    };
    typeof y == "string" && y.toLowerCase()[0] === "a" ? (a.sort(h), c.sort(h), g += `    RULES/UDTS ALPHABETICALLY
`) : typeof y == "string" && y.toLowerCase()[0] === "i" ? (a.sort(d), c.sort(d), g += `    RULES/UDTS BY INDEX
`) : (a.sort(l), c.sort(l), g += `    RULES/UDTS BY HIT COUNT
`), g += `|   MATCH |   EMPTY | NOMATCH |   TOTAL | NAME
`;
    for (let b = 0; b < a.length; b += 1) {
      let x = a[b];
      x.total && (g += v(x.match, x.empty, x.nomatch, x.total, x.name));
    }
    for (let b = 0; b < c.length; b += 1) {
      let x = c[b];
      x.total && (g += v(x.match, x.empty, x.nomatch, x.total, x.name));
    }
    return g;
  };
  const u = (y) => y < 10 ? `      ${y}` : y < 100 ? `     ${y}` : y < 1e3 ? `    ${y}` : y < 1e4 ? `   ${y}` : y < 1e5 ? `  ${y}` : y < 1e6 ? ` ${y}` : `${y}`, h = (y, g) => y.lower < g.lower ? -1 : y.lower > g.lower ? 1 : 0, l = (y, g) => y.total < g.total ? 1 : y.total > g.total ? -1 : h(y, g), d = (y, g) => y.index < g.index ? -1 : y.index > g.index ? 1 : 0, f = function() {
    this.empty = 0, this.match = 0, this.nomatch = 0, this.total = 0;
  }, m = () => {
    o.length = 0, i = new f(), o[e.ALT] = new f(), o[e.CAT] = new f(), o[e.REP] = new f(), o[e.RNM] = new f(), o[e.TRG] = new f(), o[e.TBS] = new f(), o[e.TLS] = new f(), o[e.UDT] = new f(), o[e.AND] = new f(), o[e.NOT] = new f(), a.length = 0;
    for (let y = 0; y < n.length; y += 1)
      a.push({
        empty: 0,
        match: 0,
        nomatch: 0,
        total: 0,
        name: n[y].name,
        lower: n[y].lower,
        index: n[y].index
      });
    if (s.length > 0) {
      c.length = 0;
      for (let y = 0; y < s.length; y += 1)
        c.push({
          empty: 0,
          match: 0,
          nomatch: 0,
          total: 0,
          name: s[y].name,
          lower: s[y].lower,
          index: s[y].index
        });
    }
  }, p = (y, g) => {
    switch (y.total += 1, g) {
      case e.EMPTY:
        y.empty += 1;
        break;
      case e.MATCH:
        y.match += 1;
        break;
      case e.NOMATCH:
        y.nomatch += 1;
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
}, Y = {
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
      case Y.ALT:
        return "ALT";
      case Y.CAT:
        return "CAT";
      case Y.REP:
        return "REP";
      case Y.RNM:
        return "RNM";
      case Y.TRG:
        return "TRG";
      case Y.TBS:
        return "TBS";
      case Y.TLS:
        return "TLS";
      case Y.UDT:
        return "UDT";
      case Y.AND:
        return "AND";
      case Y.NOT:
        return "NOT";
      case Y.ACTIVE:
        return "ACTIVE";
      case Y.EMPTY:
        return "EMPTY";
      case Y.MATCH:
        return "MATCH";
      case Y.NOMATCH:
        return "NOMATCH";
      case Y.SEM_PRE:
        return "SEM_PRE";
      case Y.SEM_POST:
        return "SEM_POST";
      case Y.SEM_OK:
        return "SEM_OK";
      default:
        return "UNRECOGNIZED STATE";
    }
  }
};
class Ut extends Error {
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
class YO extends Ut {
}
const jf = (t) => (e, r, n, s, i) => {
  if (!(typeof i == "object" && i !== null && !Array.isArray(i)))
    throw new YO("parser's user data must be an object");
  if (e === Y.SEM_PRE) {
    const o = {
      type: t,
      text: Ze.charsToString(r, n, s),
      start: n,
      length: s,
      children: []
    };
    i.stack.length > 0 ? i.stack[i.stack.length - 1].children.push(o) : i.root = o, i.stack.push(o);
  }
  e === Y.SEM_POST && i.stack.pop();
};
class eC extends Wp {
  constructor() {
    super(), this.callbacks["json-pointer"] = jf("json-pointer"), this.callbacks["reference-token"] = jf("reference-token"), this.callbacks.slash = jf("text");
  }
  getTree() {
    const e = {
      stack: [],
      root: null
    };
    return this.translate(e), delete e.stack, e;
  }
}
const tC = (t) => {
  if (typeof t != "string")
    throw new TypeError("Reference token must be a string");
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
};
class rC extends eC {
  getTree() {
    const {
      root: e
    } = super.getTree();
    return e.children.filter(({
      type: r
    }) => r === "reference-token").map(({
      text: r
    }) => tC(r));
  }
}
class nC extends Array {
  toString() {
    return this.map((e) => `"${String(e)}"`).join(", ");
  }
}
class sC extends Q$ {
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
    return new nC(...r);
  }
}
const iC = new Wn(), oC = (t, {
  translator: e = new rC(),
  stats: r = !1,
  trace: n = !1
} = {}) => {
  if (typeof t != "string")
    throw new TypeError("JSON Pointer must be a string");
  try {
    const s = new st();
    e && (s.ast = e), r && (s.stats = new Z$()), n && (s.trace = new sC());
    const i = s.parse(iC, "json-pointer", t);
    return {
      result: i,
      tree: i.success && e ? s.ast.getTree() : void 0,
      stats: s.stats,
      trace: s.trace
    };
  } catch (s) {
    throw new YO("Unexpected error during JSON Pointer parsing", {
      cause: s,
      jsonPointer: t
    });
  }
};
new Wn();
new st();
new Wn();
new st();
const aC = new Wn(), cC = new st(), uC = (t) => {
  if (typeof t != "string") return !1;
  try {
    return cC.parse(aC, "array-index", t).success;
  } catch {
    return !1;
  }
}, lC = new Wn(), fC = new st(), hC = (t) => {
  if (typeof t != "string") return !1;
  try {
    return fC.parse(lC, "array-dash", t).success;
  } catch {
    return !1;
  }
}, pC = (t) => {
  if (typeof t != "string" && typeof t != "number")
    throw new TypeError("Reference token must be a string or number");
  return String(t).replace(/~/g, "~0").replace(/\//g, "~1");
};
class XO extends Ut {
}
const QO = (t) => {
  if (!Array.isArray(t))
    throw new TypeError("Reference tokens must be a list of strings or numbers");
  try {
    return t.length === 0 ? "" : `/${t.map((e) => {
      if (typeof e != "string" && typeof e != "number")
        throw new TypeError("Reference token must be a string or number");
      return pC(String(e));
    }).join("/")}`;
  } catch (e) {
    throw new XO("Unexpected error during JSON Pointer compilation", {
      cause: e,
      referenceTokens: t
    });
  }
};
var Ke, Lr, Vr;
class dC {
  constructor(e, r = {}) {
    fn(this, Ke);
    fn(this, Lr);
    fn(this, Vr);
    jr(this, Ke, e), Ne(this, Ke).steps = [], Ne(this, Ke).failed = !1, Ne(this, Ke).failedAt = -1, Ne(this, Ke).message = `JSON Pointer "${r.jsonPointer}" was successfully evaluated against the provided value`, Ne(this, Ke).context = {
      ...r,
      realm: r.realm.name
    }, jr(this, Lr, []), jr(this, Vr, r.realm);
  }
  step({
    referenceToken: e,
    input: r,
    output: n,
    success: s = !0,
    reason: i
  }) {
    const o = Ne(this, Lr).length;
    Ne(this, Lr).push(e);
    const a = {
      referenceToken: e,
      referenceTokenPosition: o,
      input: r,
      inputType: Ne(this, Vr).isObject(r) ? "object" : Ne(this, Vr).isArray(r) ? "array" : "unrecognized",
      output: n,
      success: s
    };
    i && (a.reason = i), Ne(this, Ke).steps.push(a), s || (Ne(this, Ke).failed = !0, Ne(this, Ke).failedAt = o, Ne(this, Ke).message = i);
  }
}
Ke = new WeakMap(), Lr = new WeakMap(), Vr = new WeakMap();
class ZO {
  constructor() {
    A(this, "name", "");
  }
  isArray(e) {
    throw new Ut("Realm.isArray(node) must be implemented in a subclass");
  }
  isObject(e) {
    throw new Ut("Realm.isObject(node) must be implemented in a subclass");
  }
  sizeOf(e) {
    throw new Ut("Realm.sizeOf(node) must be implemented in a subclass");
  }
  has(e, r) {
    throw new Ut("Realm.has(node) must be implemented in a subclass");
  }
  evaluate(e, r) {
    throw new Ut("Realm.evaluate(node) must be implemented in a subclass");
  }
}
class fr extends Ut {
}
class kr extends fr {
}
class mC extends ZO {
  constructor() {
    super(...arguments);
    A(this, "name", "json");
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
class yC extends fr {
}
class ew extends fr {
}
const vC = (t, e, {
  strictArrays: r = !0,
  strictObjects: n = !0,
  realm: s = new mC(),
  trace: i = !0
} = {}) => {
  const {
    result: o,
    tree: a,
    trace: c
  } = oC(e, {
    trace: !!i
  }), u = typeof i == "object" && i !== null ? new dC(i, {
    jsonPointer: e,
    referenceTokens: a,
    strictArrays: r,
    strictObjects: n,
    realm: s,
    value: t
  }) : null;
  try {
    let h;
    if (!o.success) {
      let l = `Invalid JSON Pointer: "${e}". Syntax error at position ${o.maxMatched}`;
      throw l += c ? `, expected ${c.inferExpectations()}` : "", new fr(l, {
        jsonPointer: e,
        currentValue: t,
        realm: s.name
      });
    }
    return a.reduce((l, d, f) => {
      if (s.isArray(l)) {
        if (hC(d)) {
          if (r)
            throw new kr(`Invalid array index "-" at position ${f} in "${e}". The "-" token always refers to a nonexistent element during evaluation`, {
              jsonPointer: e,
              referenceTokens: a,
              referenceToken: d,
              referenceTokenPosition: f,
              currentValue: l,
              realm: s.name
            });
          return h = s.evaluate(l, String(s.sizeOf(l))), u == null || u.step({
            referenceToken: d,
            input: l,
            output: h
          }), h;
        }
        if (!uC(d))
          throw new kr(`Invalid array index "${d}" at position ${f} in "${e}": index MUST be "0", or digits without a leading "0"`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: f,
            currentValue: l,
            realm: s.name
          });
        const m = Number(d);
        if (!Number.isSafeInteger(m))
          throw new kr(`Invalid array index "${d}" at position ${f} in "${e}": index must be a safe integer`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: f,
            currentValue: l,
            realm: s.name
          });
        if (!s.has(l, d) && r)
          throw new kr(`Invalid array index "${d}" at position ${f} in "${e}": index not found in array`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: f,
            currentValue: l,
            realm: s.name
          });
        return h = s.evaluate(l, d), u == null || u.step({
          referenceToken: d,
          input: l,
          output: h
        }), h;
      }
      if (s.isObject(l)) {
        if (!s.has(l, d) && n)
          throw new ew(`Invalid object key "${d}" at position ${f} in "${e}": key not found in object`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: f,
            currentValue: l,
            realm: s.name
          });
        return h = s.evaluate(l, d), u == null || u.step({
          referenceToken: d,
          input: l,
          output: h
        }), h;
      }
      throw new yC(`Invalid reference token "${d}" at position ${f} in "${e}": cannot be applied to a non-object/non-array value`, {
        jsonPointer: e,
        referenceTokens: a,
        referenceToken: d,
        referenceTokenPosition: f,
        currentValue: l,
        realm: s.name
      });
    }, t);
  } catch (h) {
    throw u == null || u.step({
      referenceToken: h.referenceToken,
      input: h.currentValue,
      success: !1,
      reason: h.message
    }), h instanceof fr ? h : new fr("Unexpected error during JSON Pointer evaluation", {
      cause: h,
      jsonPointer: e,
      referenceTokens: a
    });
  }
}, gC = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, Tr = (t) => {
  const e = gC(t);
  return zp(e);
};
class bC extends ZO {
  constructor() {
    super(...arguments);
    A(this, "name", "apidom");
  }
  isArray(r) {
    return Je(r);
  }
  isObject(r) {
    return le(r);
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
        throw new ew(`Object key "${n}" is not unique — JSON Pointer requires unique member names`, {
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
const ir = (t, e, r = {}) => vC(t, e, {
  ...r,
  realm: new bC()
}), vn = (t, e) => {
  try {
    return ir(e, zp(t));
  } catch (r) {
    throw r instanceof fr ? new Xf(r.message, {
      pointer: t,
      tokens: r.referenceTokens,
      failedToken: r.referenceToken,
      failedTokenPosition: r.referenceTokenPosition,
      element: q(e),
      cause: r
    }) : new Xf(r.message, {
      pointer: t,
      element: q(e),
      cause: r
    });
  }
}, xC = (t) => {
  try {
    return X$(QO(t)).slice(1);
  } catch (e) {
    throw e instanceof XO ? new Y$(e.message, {
      tokens: t,
      cause: e
    }) : e;
  }
};
class Yp extends R_ {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return oo(this.filterByFormat(e));
  }
}
const Wr = new Yp("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
let Yn = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "callback";
  }
}, Xn = class extends w.ObjectElement {
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
}, Qn = class extends w.ObjectElement {
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
}, Po = class extends w.ObjectElement {
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
}, To = class extends w.ObjectElement {
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
}, _o = class extends w.ObjectElement {
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
class $o extends w.ObjectElement {
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
const SC = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", cn), e.register("jSONReference", un), e.register("media", ps), e.register("linkDescription", ds), e;
  }
}, ms = (t) => {
  if (ge(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, OC = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...wt
};
let tw = class {
  constructor(e) {
    A(this, "element");
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = gt(r.meta, e.meta), Hn(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = gt(r.attributes, e.attributes));
  }
}, te = class extends tw {
  enter(e) {
    return this.element = q(e), ee;
  }
};
const rw = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, $n = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : $n(r, [...e, r]);
}, wC = (...t) => {
  if (t.length === 0)
    return;
  let e;
  const r = t.map((n) => $n(n));
  for (; r.every((n) => n.length > 0); ) {
    const n = r.map((i) => i.pop()), s = n[0];
    if (n.every((i) => i === s))
      e = s;
    else
      break;
  }
  return e;
}, vb = (t, e, r = []) => {
  var n;
  const s = (n = wC(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = $n(s);
  for (let a of t) {
    let c = $n(a);
    for (let u = c.length - 1; u >= 0; u--) {
      let h = c[u];
      o.indexOf(h) === -1 && (rw(i, h, ["constructor", ...r]), o.push(h));
    }
  }
  return i.constructor = e, i;
}, Qf = (t) => t.filter((e, r) => t.indexOf(e) == r), nw = /* @__PURE__ */ new WeakMap(), EC = (t) => nw.get(t), AC = (t, e) => nw.set(t, e), gb = (t, e) => {
  var r, n;
  const s = Qf([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = Qf([...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, bb = (t, e) => {
  var r, n, s, i;
  return {
    property: gb((r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}, (n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}),
    method: gb((s = t == null ? void 0 : t.method) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, jC = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: Qf([...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : []]),
    static: bb((s = t == null ? void 0 : t.static) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: bb((o = t == null ? void 0 : t.instance) !== null && o !== void 0 ? o : {}, (a = e == null ? void 0 : e.instance) !== null && a !== void 0 ? a : {})
  };
}, PC = /* @__PURE__ */ new Map(), TC = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = $n(s.prototype).map((u) => u.constructor), o = (e = EC(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((u) => !r.has(u));
      for (let u of c)
        n.add(u);
      r.add(s), n.delete(s);
    }
  return [...r];
}, RC = (...t) => {
  const e = TC(...t).map((r) => PC.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => jC(r, n));
};
function F(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      rw(this, new c(...a));
  }
  i.prototype = vb(s, i), Object.setPrototypeOf(
    i,
    vb(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = RC(...t);
    for (let c of (e = a == null ? void 0 : a.class) !== null && e !== void 0 ? e : []) {
      const u = c(o);
      u && (o = u);
    }
    xb((r = a == null ? void 0 : a.static) !== null && r !== void 0 ? r : {}, o), xb((n = a == null ? void 0 : a.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return AC(o, t), o;
}
const xb = (t, e) => {
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
let et = class extends tw {
  constructor({
    specObj: r,
    ...n
  }) {
    super({
      ...n
    });
    A(this, "specObj");
    A(this, "passingOptionsNames", ["specObj", "parent"]);
    this.specObj = r;
  }
  retrievePassingOptions() {
    return $S(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = Te(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return co(br, ["visitors", ...r], this.specObj) ? Te(["visitors", ...r], this.specObj) : Te(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof te && (i == null ? void 0 : i.constructor) === te ? q(n) : (Oe(n, i, s), i.element);
  }
}, pr = class extends et {
  constructor({
    specPath: r,
    ignoredFields: n,
    ...s
  }) {
    super({
      ...s
    });
    A(this, "specPath");
    A(this, "ignoredFields");
    this.specPath = r, this.ignoredFields = n || [];
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (z(o) && s.includes($(o)) && !this.ignoredFields.includes($(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", $(o)], i), u = new w.MemberElement(q(o), c);
        this.copyMetaAndAttributes(a, u), u.classes.push("fixed-field"), this.element.content.push(u);
      } else this.ignoredFields.includes($(o)) || this.element.content.push(q(a));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
};
class we {
  constructor({
    parent: e
  }) {
    A(this, "parent");
    this.parent = e;
  }
}
const sw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof cn || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), Xp = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof un || t(n) && e("JSONReference", n) && r("object", n)), iw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ps || t(n) && e("media", n) && r("object", n)), _C = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ds || t(n) && e("linkDescription", n) && r("object", n)), $C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Xp,
  isJSONSchemaElement: sw,
  isLinkDescriptionElement: _C,
  isMediaElement: iw
}, Symbol.toStringTag, { value: "Module" }));
let ow = class extends F(pr, we, te) {
  constructor(e) {
    super(e), this.element = new cn(), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-04/schema#";
  }
  ObjectElement(e) {
    return this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element, pr.prototype.ObjectElement.call(this, e);
  }
  handleDialectIdentifier(e) {
    if (Xt(this.parent) && !z(e.get("$schema")))
      this.element.setMetaProperty("inheritedDialectIdentifier", this.defaultDialectIdentifier);
    else if (sw(this.parent) && !z(e.get("$schema"))) {
      const r = Gr($(this.parent.meta.get("inheritedDialectIdentifier")), $(this.parent.$schema));
      this.element.setMetaProperty("inheritedDialectIdentifier", r);
    }
  }
  handleSchemaIdentifier(e, r = "id") {
    const n = this.parent !== void 0 ? q(this.parent.getMetaProperty("ancestorsSchemaIdentifiers", [])) : new w.ArrayElement(), s = $(e.get(r));
    lo(s) && n.push(s), this.element.setMetaProperty("ancestorsSchemaIdentifiers", n);
  }
};
const bt = (t) => le(t) && t.hasKey("$ref");
let aw = class extends F(et, we, te) {
  ObjectElement(e) {
    const r = bt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), ee;
  }
  ArrayElement(e) {
    return this.element = new w.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = bt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class CC extends te {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
let IC = class extends et {
  constructor({
    specPath: r,
    ignoredFields: n,
    fieldPatternPredicate: s,
    ...i
  }) {
    super({
      ...i
    });
    A(this, "specPath");
    A(this, "ignoredFields");
    A(this, "fieldPatternPredicate", lp);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (!this.ignoredFields.includes($(s)) && this.fieldPatternPredicate($(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new w.MemberElement(q(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes($(s)) || this.element.content.push(q(i));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}, Zt = class extends IC {
  constructor(e) {
    super(e), this.fieldPatternPredicate = lo;
  }
}, FC = class extends F(Zt, we, te) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => bt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}, MC = class extends F(Zt, we, te) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => bt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
class kC extends F(Zt, we, te) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => bt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
class NC extends te {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
let DC = class extends te {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}, qC = class extends F(et, we, te) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = bt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, LC = class extends F(et, we, te) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = bt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, VC = class extends F(et, we, te) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = bt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class BC extends F(Zt, we, te) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => bt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let UC = class extends F(et, we, te) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-links");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "LinkDescription"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class JC extends F(pr, te) {
  constructor(e) {
    super(e), this.element = new un(), this.specPath = J(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = pr.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
let HC = class extends te {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, GC = class extends et {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    A(this, "alternator");
    this.alternator = r;
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => xp(i, J(o), uo)), s = LS(n)(r);
    return this.element = this.toRefractedElement(s, r), ee;
  }
}, Rr = class extends GC {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: bt,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: Mt,
      specPath: ["document", "objects", "JSONSchema"]
    }];
  }
};
class KC extends F(pr, te) {
  constructor(e) {
    super(e), this.element = new ps(), this.specPath = J(["document", "objects", "Media"]);
  }
}
let cw = class extends F(pr, te) {
  constructor(e) {
    super(e), this.element = new ds(), this.specPath = J(["document", "objects", "LinkDescription"]);
  }
};
const Ie = {
  visitors: {
    value: te,
    JSONSchemaOrJSONReferenceVisitor: Rr,
    document: {
      objects: {
        JSONSchema: {
          $visitor: ow,
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
            additionalItems: Rr,
            items: aw,
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
            required: CC,
            properties: FC,
            additionalProperties: Rr,
            patternProperties: MC,
            dependencies: kC,
            // validation keywords for any instance type
            enum: NC,
            type: DC,
            allOf: qC,
            anyOf: LC,
            oneOf: VC,
            not: Rr,
            definitions: BC,
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
            links: UC,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: JC,
          fixedFields: {
            $ref: HC
          }
        },
        Media: {
          $visitor: KC,
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
          $visitor: cw,
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
            targetSchema: Rr,
            mediaType: {
              $ref: "#/visitors/value"
            },
            method: {
              $ref: "#/visitors/value"
            },
            encType: {
              $ref: "#/visitors/value"
            },
            schema: Rr
          }
        }
      }
    }
  }
}, zC = () => {
  const t = Dt(SC);
  return {
    predicates: {
      ...$C,
      isStringElement: z
    },
    namespace: t
  };
}, WC = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Ie
} = {}) => {
  const s = w.refract(t), i = Qt(n), o = Te(e, i), a = new o({
    specObj: i
  });
  return Oe(s, a), Et(a.element, r, {
    toolboxCreator: zC,
    visitorOptions: {
      keyMap: OC,
      nodeTypeGetter: ms
    }
  });
}, Co = (t) => (e, r = {}) => WC(e, {
  specPath: t,
  ...r
});
cn.refract = Co(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
un.refract = Co(["visitors", "document", "objects", "JSONReference", "$visitor"]);
ps.refract = Co(["visitors", "document", "objects", "Media", "$visitor"]);
ds.refract = Co(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let Io = class extends cn {
  constructor(e, r, n) {
    super(e, r, n), this.element = "schema", this.classes.push("json-schema-draft-4");
  }
  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    throw new Z("idProp getter in Schema class is not not supported.");
  }
  set idProp(e) {
    throw new Z("idProp setter in Schema class is not not supported.");
  }
  get $schema() {
    throw new Z("$schema getter in Schema class is not not supported.");
  }
  set $schema(e) {
    throw new Z("$schema setter in Schema class is not not supported.");
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
    throw new Z("patternProperties getter in Schema class is not not supported.");
  }
  set patternProperties(e) {
    throw new Z("patternProperties setter in Schema class is not not supported.");
  }
  get dependencies() {
    throw new Z("dependencies getter in Schema class is not not supported.");
  }
  set dependencies(e) {
    throw new Z("dependencies setter in Schema class is not not supported.");
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
    throw new Z("definitions getter in Schema class is not not supported.");
  }
  set definitions(e) {
    throw new Z("definitions setter in Schema class is not not supported.");
  }
  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */
  get base() {
    throw new Z("base getter in Schema class is not not supported.");
  }
  set base(e) {
    throw new Z("base setter in Schema class is not not supported.");
  }
  get links() {
    throw new Z("links getter in Schema class is not not supported.");
  }
  set links(e) {
    throw new Z("links setter in Schema class is not not supported.");
  }
  get media() {
    throw new Z("media getter in Schema class is not not supported.");
  }
  set media(e) {
    throw new Z("media setter in Schema class is not not supported.");
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
}, Fo = class extends w.ObjectElement {
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
const YC = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Yn), e.register("components", Xn), e.register("contact", Qn), e.register("discriminator", Po), e.register("encoding", To), e.register("example", Zn), e.register("externalDocumentation", es), e.register("header", on), e.register("info", ts), e.register("license", rs), e.register("link", ns), e.register("mediaType", ss), e.register("oAuthFlow", Ro), e.register("oAuthFlows", _o), e.register("openapi", is), e.register("openApi3_0", $o), e.register("operation", os), e.register("parameter", an), e.register("pathItem", as), e.register("paths", cs), e.register("reference", us), e.register("requestBody", ls), e.register("response", fs), e.register("responses", hs), e.register("schema", Io), e.register("securityRequirement", ys), e.register("securityScheme", vs), e.register("server", gs), e.register("serverVariable", bs), e.register("tag", Fo), e.register("xml", Mo), e;
  }
}, li = class li extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(li.primaryClass);
  }
};
A(li, "primaryClass", "servers");
let oi = li;
const fi = class fi extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(fi.primaryClass);
  }
};
A(fi, "primaryClass", "security");
let Zf = fi;
const hi = class hi extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(hi.primaryClass);
  }
};
A(hi, "primaryClass", "tags");
let eh = hi;
const pi = class pi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(pi.primaryClass);
  }
};
A(pi, "primaryClass", "server-variables");
let th = pi;
const di = class di extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(di.primaryClass);
  }
};
A(di, "primaryClass", "components-schemas");
let ai = di;
const mi = class mi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(mi.primaryClass);
  }
};
A(mi, "primaryClass", "components-responses");
let rh = mi;
const yi = class yi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(yi.primaryClass), this.classes.push("parameters");
  }
};
A(yi, "primaryClass", "components-parameters");
let nh = yi;
const vi = class vi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(vi.primaryClass), this.classes.push("examples");
  }
};
A(vi, "primaryClass", "components-examples");
let sh = vi;
const gi = class gi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(gi.primaryClass);
  }
};
A(gi, "primaryClass", "components-request-bodies");
let ih = gi;
const bi = class bi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(bi.primaryClass);
  }
};
A(bi, "primaryClass", "components-headers");
let oh = bi;
const xi = class xi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(xi.primaryClass);
  }
};
A(xi, "primaryClass", "components-security-schemes");
let ah = xi;
const Si = class Si extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Si.primaryClass);
  }
};
A(Si, "primaryClass", "components-links");
let ch = Si;
const Oi = class Oi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Oi.primaryClass);
  }
};
A(Oi, "primaryClass", "components-callbacks");
let uh = Oi;
const wi = class wi extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(wi.primaryClass), this.classes.push("servers");
  }
};
A(wi, "primaryClass", "path-item-servers");
let lh = wi;
const Ei = class Ei extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ei.primaryClass), this.classes.push("parameters");
  }
};
A(Ei, "primaryClass", "path-item-parameters");
let fh = Ei;
const Ai = class Ai extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ai.primaryClass), this.classes.push("parameters");
  }
};
A(Ai, "primaryClass", "operation-parameters");
let ci = Ai;
const ji = class ji extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ji.primaryClass), this.classes.push("examples");
  }
};
A(ji, "primaryClass", "parameter-examples");
let hh = ji;
const Pi = class Pi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Pi.primaryClass), this.classes.push("content");
  }
};
A(Pi, "primaryClass", "parameter-content");
let ph = Pi;
const Ti = class Ti extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ti.primaryClass);
  }
};
A(Ti, "primaryClass", "operation-tags");
let dh = Ti;
const Ri = class Ri extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ri.primaryClass);
  }
};
A(Ri, "primaryClass", "operation-callbacks");
let mh = Ri;
const _i = class _i extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(_i.primaryClass), this.classes.push("security");
  }
};
A(_i, "primaryClass", "operation-security");
let ui = _i;
const $i = class $i extends w.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push($i.primaryClass), this.classes.push("servers");
  }
};
A($i, "primaryClass", "operation-servers");
let yh = $i;
const Ci = class Ci extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ci.primaryClass), this.classes.push("content");
  }
};
A(Ci, "primaryClass", "request-body-content");
let vh = Ci;
const Ii = class Ii extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ii.primaryClass), this.classes.push("examples");
  }
};
A(Ii, "primaryClass", "media-type-examples");
let gh = Ii;
const Fi = class Fi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Fi.primaryClass);
  }
};
A(Fi, "primaryClass", "media-type-encoding");
let bh = Fi;
const Mi = class Mi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Mi.primaryClass);
  }
};
A(Mi, "primaryClass", "encoding-headers");
let xh = Mi;
const ki = class ki extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ki.primaryClass);
  }
};
A(ki, "primaryClass", "response-headers");
let Sh = ki;
const Ni = class Ni extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ni.primaryClass), this.classes.push("content");
  }
};
A(Ni, "primaryClass", "response-content");
let Oh = Ni;
const Di = class Di extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Di.primaryClass);
  }
};
A(Di, "primaryClass", "response-links");
let wh = Di;
const qi = class qi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(qi.primaryClass);
  }
};
A(qi, "primaryClass", "discriminator-mapping");
let Eh = qi;
const Li = class Li extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Li.primaryClass);
  }
};
A(Li, "primaryClass", "oauth-flow-scopes");
let Ah = Li;
const Vi = class Vi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Vi.primaryClass);
  }
};
A(Vi, "primaryClass", "link-parameters");
let jh = Vi;
const Bi = class Bi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Bi.primaryClass), this.classes.push("examples");
  }
};
A(Bi, "primaryClass", "header-examples");
let Ph = Bi;
const Ui = class Ui extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ui.primaryClass), this.classes.push("content");
  }
};
A(Ui, "primaryClass", "header-content");
let Th = Ui;
const XC = (t) => {
  if (ge(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, QC = {
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
  ...wt
};
class uw {
  constructor(e = {}) {
    A(this, "element");
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = gt(r.meta, e.meta), Hn(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = gt(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
class D extends uw {
  enter(e) {
    return this.element = q(e), ee;
  }
}
class dt extends uw {
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
    A(this, "specObj");
    A(this, "passingOptionsNames", ["specObj", "openApiGenericElement", "openApiSemanticElement"]);
    A(this, "openApiGenericElement");
    A(this, "openApiSemanticElement");
    this.specObj = r, this.openApiGenericElement = s, this.openApiSemanticElement = i, Array.isArray(n) && (this.passingOptionsNames = n);
  }
  retrievePassingOptions() {
    return $S(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = Te(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return co(br, ["visitors", ...r], this.specObj) ? Te(["visitors", ...r], this.specObj) : Te(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof D && (i == null ? void 0 : i.constructor) === D ? q(n) : (Oe(n, i, s), i.element);
  }
}
const pe = (t) => le(t) && t.hasKey("$ref"), ZC = le, eI = le, lw = (t) => z(t.key) && BP("x-", $(t.key));
class X extends dt {
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
    A(this, "specPath");
    A(this, "ignoredFields");
    A(this, "canSupportSpecificationExtensions", !0);
    A(this, "specificationExtensionPredicate", lw);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "boolean" && (this.canSupportSpecificationExtensions = s), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (z(o) && s.includes($(o)) && !this.ignoredFields.includes($(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", $(o)], i), u = new w.MemberElement(q(o), c);
        this.copyMetaAndAttributes(a, u), u.classes.push("fixed-field"), this.element.content.push(u);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(a)) {
        const c = this.toRefractedElement(["document", "extension"], a);
        this.element.content.push(c);
      } else this.ignoredFields.includes($(o)) || this.element.content.push(q(a));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}
class tI extends F(X, D) {
  constructor(e) {
    super(e), this.element = new $o(), this.specPath = J(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return X.prototype.ObjectElement.call(this, e);
  }
}
class rI extends F(dt, D) {
  StringElement(e) {
    const r = new is($(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, ee;
  }
}
class nI extends dt {
  MemberElement(e) {
    return this.element = q(e), this.element.classes.push("specification-extension"), ee;
  }
}
let sI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new ts(), this.specPath = J(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
class iI extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
let oI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Qn(), this.specPath = J(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
}, aI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new rs(), this.specPath = J(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
}, cI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new ns(), this.specPath = J(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return (z(this.element.operationId) || z(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
class uI extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class lI extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class Yr extends dt {
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
    A(this, "specPath");
    A(this, "ignoredFields");
    A(this, "fieldPatternPredicate", lp);
    A(this, "canSupportSpecificationExtensions", !1);
    A(this, "specificationExtensionPredicate", lw);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s), typeof i == "boolean" && (this.canSupportSpecificationExtensions = i), typeof o == "function" && (this.specificationExtensionPredicate = o);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
        const o = this.toRefractedElement(["document", "extension"], i);
        this.element.content.push(o);
      } else if (!this.ignoredFields.includes($(s)) && this.fieldPatternPredicate($(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new w.MemberElement(q(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes($(s)) || this.element.content.push(q(i));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}
class Q extends Yr {
  constructor(e) {
    super(e), this.fieldPatternPredicate = lo;
  }
}
let fI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new jh(), this.specPath = J(["value"]);
  }
}, hI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new gs(), this.specPath = J(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
class pI extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
let Qp = class extends F(dt, D) {
  constructor(e) {
    super(e), this.element = new oi();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = ZC(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, dI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new bs(), this.specPath = J(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
class mI extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new th(), this.specPath = J(["document", "objects", "ServerVariable"]);
  }
}
let yI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new ss(), this.specPath = J(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
class xt extends dt {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    A(this, "alternator");
    this.alternator = r || [];
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => xp(i, J(o), uo)), s = LS(n)(r);
    return this.element = this.toRefractedElement(s, r), ee;
  }
}
const vI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Yn || t(n) && e("callback", n) && r("object", n)), gI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xn || t(n) && e("components", n) && r("object", n)), bI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qn || t(n) && e("contact", n) && r("object", n)), xI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zn || t(n) && e("example", n) && r("object", n)), SI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof es || t(n) && e("externalDocumentation", n) && r("object", n)), ln = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof on || t(n) && e("header", n) && r("object", n)), OI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ts || t(n) && e("info", n) && r("object", n)), wI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof rs || t(n) && e("license", n) && r("object", n)), EI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ns || t(n) && e("link", n) && r("object", n)), AI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof is || t(n) && e("openapi", n) && r("string", n)), jI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof $o || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), fw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof os || t(n) && e("operation", n) && r("object", n)), PI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof an || t(n) && e("parameter", n) && r("object", n)), Zp = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof as || t(n) && e("pathItem", n) && r("object", n)), TI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof cs || t(n) && e("paths", n) && r("object", n)), he = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof us || t(n) && e("reference", n) && r("object", n)), RI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ls || t(n) && e("requestBody", n) && r("object", n)), ko = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fs || t(n) && e("response", n) && r("object", n)), _I = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hs || t(n) && e("responses", n) && r("object", n)), $I = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Io || t(n) && e("schema", n) && r("object", n)), CI = (t) => Jn(t) && t.classes.includes("boolean-json-schema"), II = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ys || t(n) && e("securityRequirement", n) && r("object", n)), FI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vs || t(n) && e("securityScheme", n) && r("object", n)), MI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gs || t(n) && e("server", n) && r("object", n)), kI = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof bs || t(n) && e("serverVariable", n) && r("object", n)), No = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ss || t(n) && e("mediaType", n) && r("object", n)), hw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof oi || t(s) && e("array", s) && r("array", s) && n("servers", s)), NI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: CI,
  isCallbackElement: vI,
  isComponentsElement: gI,
  isContactElement: bI,
  isExampleElement: xI,
  isExternalDocumentationElement: SI,
  isHeaderElement: ln,
  isInfoElement: OI,
  isLicenseElement: wI,
  isLinkElement: EI,
  isMediaTypeElement: No,
  isOpenApi3_0Element: jI,
  isOpenapiElement: AI,
  isOperationElement: fw,
  isParameterElement: PI,
  isPathItemElement: Zp,
  isPathsElement: TI,
  isReferenceElement: he,
  isRequestBodyElement: RI,
  isResponseElement: ko,
  isResponsesElement: _I,
  isSchemaElement: $I,
  isSecurityRequirementElement: II,
  isSecuritySchemeElement: FI,
  isServerElement: MI,
  isServerVariableElement: kI,
  isServersElement: hw
}, Symbol.toStringTag, { value: "Module" }));
let DI = class extends F(xt, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: pe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Mt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = xt.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, ed = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("examples"), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, qI = class extends ed {
  constructor(e) {
    super(e), this.element = new gh();
  }
}, LI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new bh(), this.specPath = J(["document", "objects", "Encoding"]);
  }
}, VI = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new ys(), this.specPath = J(["value"]);
  }
}, BI = class extends F(dt, D) {
  constructor(e) {
    super(e), this.element = new Zf();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (le(r)) {
        const n = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(n);
      } else
        this.element.push(q(r));
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, UI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Xn(), this.specPath = J(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
}, JI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Fo(), this.specPath = J(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
}, HI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new us(), this.specPath = J(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}, GI = class extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, KI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new an(), this.specPath = J(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return le(this.element.contentProp) && this.element.contentProp.filter(No).forEach((n, s) => {
      n.setMetaProperty("media-type", $(s));
    }), r;
  }
}, zI = class extends F(xt, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: pe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Mt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = xt.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, WI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new on(), this.specPath = J(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
}, YI = class extends F(xt, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: pe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Mt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = xt.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, XI = class extends ed {
  constructor(e) {
    super(e), this.element = new Ph();
  }
}, Do = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("content"), this.specPath = J(["document", "objects", "MediaType"]);
  }
}, QI = class extends Do {
  constructor(e) {
    super(e), this.element = new Th();
  }
}, ZI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Io(), this.specPath = J(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Sb = Ie.visitors.document.objects.JSONSchema.fixedFields.allOf;
let eF = class extends Sb {
  ArrayElement(e) {
    const r = Sb.prototype.ArrayElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const Ob = Ie.visitors.document.objects.JSONSchema.fixedFields.anyOf;
let tF = class extends Ob {
  ArrayElement(e) {
    const r = Ob.prototype.ArrayElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const wb = Ie.visitors.document.objects.JSONSchema.fixedFields.oneOf;
let rF = class extends wb {
  ArrayElement(e) {
    const r = wb.prototype.ArrayElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const Eb = Ie.visitors.document.objects.JSONSchema.fixedFields.items;
let nF = class extends Eb {
  ObjectElement(e) {
    const r = Eb.prototype.ObjectElement.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
};
const Ab = Ie.visitors.document.objects.JSONSchema.fixedFields.properties;
let sF = class extends Ab {
  ObjectElement(e) {
    const r = Ab.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const iF = Ie.visitors.document.objects.JSONSchema.fixedFields.type;
class oF extends iF {
  ArrayElement(e) {
    return this.enter(e);
  }
}
const jb = Ie.visitors.JSONSchemaOrJSONReferenceVisitor;
class Pb extends jb {
  ObjectElement(e) {
    const r = jb.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
let aF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Po(), this.specPath = J(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
class cF extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Eh(), this.specPath = J(["value"]);
  }
}
let uF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Mo(), this.specPath = J(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
}, lF = class extends ed {
  constructor(e) {
    super(e), this.element = new hh();
  }
}, fF = class extends Do {
  constructor(e) {
    super(e), this.element = new ph();
  }
}, hF = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new ai(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
}, pF = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new rh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(ko).forEach((n, s) => {
      n.setMetaProperty("http-status-code", $(s));
    }), r;
  }
}, dF = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new nh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
}, mF = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new sh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
class yF extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new ih(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
let vF = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new oh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.filter(ln).forEach((n, s) => {
      n.setMetaProperty("header-name", $(s));
    }), r;
  }
};
class gF extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new ah(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
let bF = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new ch(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}, xF = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new uh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}, SF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Zn(), this.specPath = J(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return z(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
class OF extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let wF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new es(), this.specPath = J(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
}, EF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new To(), this.specPath = J(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return le(this.element.headers) && this.element.headers.filter(ln).forEach((n, s) => {
      n.setMetaProperty("header-name", $(s));
    }), r;
  }
}, AF = class extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new xh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!ln(n)) return;
      const i = $(s);
      n.setMetaProperty("headerName", i);
    }), r;
  }
}, jF = class extends F(Yr, D) {
  constructor(e) {
    super(e), this.element = new cs(), this.specPath = J(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = Mt;
  }
  ObjectElement(e) {
    const r = Yr.prototype.ObjectElement.call(this, e);
    return this.element.filter(Zp).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", q(s));
    }), r;
  }
}, PF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new ls(), this.specPath = J(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return le(this.element.contentProp) && this.element.contentProp.filter(No).forEach((n, s) => {
      n.setMetaProperty("media-type", $(s));
    }), r;
  }
}, TF = class extends Do {
  constructor(e) {
    super(e), this.element = new vh();
  }
}, RF = class extends F(Yr, D) {
  constructor(e) {
    super(e), this.element = new Yn(), this.specPath = J(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(Zp).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", $(s));
    }), r;
  }
}, _F = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new fs(), this.specPath = J(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return le(this.element.contentProp) && this.element.contentProp.filter(No).forEach((n, s) => {
      n.setMetaProperty("media-type", $(s));
    }), le(this.element.headers) && this.element.headers.filter(ln).forEach((n, s) => {
      n.setMetaProperty("header-name", $(s));
    }), r;
  }
};
class $F extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Sh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!ln(n)) return;
      const i = $(s);
      n.setMetaProperty("header-name", i);
    }), r;
  }
}
class CF extends Do {
  constructor(e) {
    super(e), this.element = new Oh();
  }
}
class IF extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new wh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
class Tb extends F(X, Yr) {
  constructor({
    specPathFixedFields: r,
    specPathPatternedFields: n,
    ...s
  }) {
    super({
      ...s
    });
    A(this, "specPathFixedFields");
    A(this, "specPathPatternedFields");
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
      this.ignoredFields = [...s, ...uP(r.keys(), i)], X.prototype.ObjectElement.call(this, r), this.specPath = this.specPathPatternedFields, this.ignoredFields = i, Yr.prototype.ObjectElement.call(this, r);
    } catch (i) {
      throw this.specPath = n, i;
    }
    return ee;
  }
}
let FF = class extends F(Tb, D) {
  constructor(e) {
    super(e), this.element = new hs(), this.specPathFixedFields = J(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${qP(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = Tb.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(ko).forEach((n, s) => {
      const i = q(s);
      this.fieldPatternPredicate($(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
class MF extends F(xt, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: pe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Mt,
      specPath: ["document", "objects", "Response"]
    }];
  }
  ObjectElement(e) {
    const r = xt.prototype.enter.call(this, e);
    return he(this.element) ? this.element.setMetaProperty("referenced-element", "response") : ko(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
let kF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new os(), this.specPath = J(["document", "objects", "Operation"]);
  }
}, NF = class extends D {
  constructor(e) {
    super(e), this.element = new dh();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(q(e)), ee;
  }
}, pw = class extends F(dt, D) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      he(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, DF = class extends pw {
  constructor(e) {
    super(e), this.element = new ci();
  }
}, qF = class extends xt {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: pe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Mt,
      specPath: ["document", "objects", "RequestBody"]
    }];
  }
  ObjectElement(e) {
    const r = xt.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
class LF extends F(Q, D) {
  constructor(r) {
    super(r);
    A(this, "specPath");
    this.element = new mh(), this.specPath = (n) => pe(n) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(r) {
    const n = Q.prototype.ObjectElement.call(this, r);
    return this.element.filter(he).forEach((s) => {
      s.setMetaProperty("referenced-element", "callback");
    }), n;
  }
}
class VF extends F(dt, D) {
  constructor(e) {
    super(e), this.element = new ui();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = le(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
let BF = class extends Qp {
  constructor(e) {
    super(e), this.element = new yh();
  }
}, UF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new as(), this.specPath = J(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(fw).forEach((n, s) => {
      const i = q(s);
      i.content = $(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), z(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
class JF extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class HF extends Qp {
  constructor(e) {
    super(e), this.element = new lh();
  }
}
class GF extends pw {
  constructor(e) {
    super(e), this.element = new fh();
  }
}
let KF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new vs(), this.specPath = J(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
}, zF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new _o(), this.specPath = J(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
}, WF = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Ro(), this.specPath = J(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
class YF extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Ah(), this.specPath = J(["value"]);
  }
}
class XF extends F(dt, D) {
  constructor(e) {
    super(e), this.element = new eh();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = eI(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
const {
  fixedFields: Ee
} = Ie.visitors.document.objects.JSONSchema, T = {
  visitors: {
    value: D,
    document: {
      objects: {
        OpenApi: {
          $visitor: tI,
          fixedFields: {
            openapi: rI,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: Qp,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: BI,
            tags: XF,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: sI,
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
            version: iI
          }
        },
        Contact: {
          $visitor: oI,
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
          $visitor: aI,
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
          $visitor: hI,
          fixedFields: {
            url: pI,
            description: {
              $ref: "#/visitors/value"
            },
            variables: mI
          }
        },
        ServerVariable: {
          $visitor: dI,
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
          $visitor: UI,
          fixedFields: {
            schemas: hF,
            responses: pF,
            parameters: dF,
            examples: mF,
            requestBodies: yF,
            headers: vF,
            securitySchemes: gF,
            links: bF,
            callbacks: xF
          }
        },
        Paths: {
          $visitor: jF
        },
        PathItem: {
          $visitor: UF,
          fixedFields: {
            $ref: JF,
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
            servers: HF,
            parameters: GF
          }
        },
        Operation: {
          $visitor: kF,
          fixedFields: {
            tags: NF,
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
            parameters: DF,
            requestBody: qF,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: LF,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: VF,
            servers: BF
          }
        },
        ExternalDocumentation: {
          $visitor: wF,
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
          $visitor: KI,
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
            schema: zI,
            example: {
              $ref: "#/visitors/value"
            },
            examples: lF,
            content: fF
          }
        },
        RequestBody: {
          $visitor: PF,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: TF,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: yI,
          fixedFields: {
            schema: DI,
            example: {
              $ref: "#/visitors/value"
            },
            examples: qI,
            encoding: LI
          }
        },
        Encoding: {
          $visitor: EF,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: AF,
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
          $visitor: FF,
          fixedFields: {
            default: MF
          }
        },
        Response: {
          $visitor: _F,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: $F,
            content: CF,
            links: IF
          }
        },
        Callback: {
          $visitor: RF
        },
        Example: {
          $visitor: SF,
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
            externalValue: OF
          }
        },
        Link: {
          $visitor: cI,
          fixedFields: {
            operationRef: uI,
            operationId: lI,
            parameters: fI,
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
          $visitor: WI,
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
            schema: YI,
            example: {
              $ref: "#/visitors/value"
            },
            examples: XI,
            content: QI
          }
        },
        Tag: {
          $visitor: JI,
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
          $visitor: HI,
          fixedFields: {
            $ref: GI
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: ZI,
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
            type: oF,
            allOf: eF,
            anyOf: tF,
            oneOf: rF,
            not: Pb,
            items: nF,
            properties: sF,
            additionalProperties: Pb,
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
          $visitor: aF,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: cF
          }
        },
        XML: {
          $visitor: uF,
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
          $visitor: KF,
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
          $visitor: zF,
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
          $visitor: WF,
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
            scopes: YF
          }
        },
        SecurityRequirement: {
          $visitor: VI
        }
      },
      extension: {
        $visitor: nI
      }
    }
  }
}, QF = () => {
  const t = Dt(YC);
  return {
    predicates: {
      ...NI,
      isElement: ge,
      isStringElement: z,
      isArrayElement: Je,
      isObjectElement: le,
      isMemberElement: pt,
      includesClasses: Eo,
      hasElementSourceMap: Hn
    },
    namespace: t
  };
}, ZF = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = w.refract(t), s = Qt(T), i = Te(e, s), o = new i({
    specObj: s
  });
  return Oe(n, o), Et(o.element, r, {
    toolboxCreator: QF,
    visitorOptions: {
      keyMap: QC,
      nodeTypeGetter: XC
    }
  });
}, oe = (t) => (e, r = {}) => ZF(e, {
  specPath: t,
  ...r
});
Yn.refract = oe(["visitors", "document", "objects", "Callback", "$visitor"]);
Xn.refract = oe(["visitors", "document", "objects", "Components", "$visitor"]);
Qn.refract = oe(["visitors", "document", "objects", "Contact", "$visitor"]);
Zn.refract = oe(["visitors", "document", "objects", "Example", "$visitor"]);
Po.refract = oe(["visitors", "document", "objects", "Discriminator", "$visitor"]);
To.refract = oe(["visitors", "document", "objects", "Encoding", "$visitor"]);
es.refract = oe(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
on.refract = oe(["visitors", "document", "objects", "Header", "$visitor"]);
ts.refract = oe(["visitors", "document", "objects", "Info", "$visitor"]);
rs.refract = oe(["visitors", "document", "objects", "License", "$visitor"]);
ns.refract = oe(["visitors", "document", "objects", "Link", "$visitor"]);
ss.refract = oe(["visitors", "document", "objects", "MediaType", "$visitor"]);
Ro.refract = oe(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
_o.refract = oe(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
is.refract = oe(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
$o.refract = oe(["visitors", "document", "objects", "OpenApi", "$visitor"]);
os.refract = oe(["visitors", "document", "objects", "Operation", "$visitor"]);
an.refract = oe(["visitors", "document", "objects", "Parameter", "$visitor"]);
as.refract = oe(["visitors", "document", "objects", "PathItem", "$visitor"]);
cs.refract = oe(["visitors", "document", "objects", "Paths", "$visitor"]);
us.refract = oe(["visitors", "document", "objects", "Reference", "$visitor"]);
ls.refract = oe(["visitors", "document", "objects", "RequestBody", "$visitor"]);
fs.refract = oe(["visitors", "document", "objects", "Response", "$visitor"]);
hs.refract = oe(["visitors", "document", "objects", "Responses", "$visitor"]);
Io.refract = oe(["visitors", "document", "objects", "Schema", "$visitor"]);
ys.refract = oe(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
vs.refract = oe(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
gs.refract = oe(["visitors", "document", "objects", "Server", "$visitor"]);
bs.refract = oe(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Fo.refract = oe(["visitors", "document", "objects", "Tag", "$visitor"]);
Mo.refract = oe(["visitors", "document", "objects", "XML", "$visitor"]);
class qo extends Yn {
}
class Lo extends Xn {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class Vo extends Qn {
}
class td extends Po {
}
class rd extends To {
}
class Bo extends Zn {
}
class Uo extends es {
}
class Jo extends on {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Ho extends ts {
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
const Ji = class Ji extends w.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
};
A(Ji, "default", new Ji("https://spec.openapis.org/oas/3.1/dialect/base"));
let dr = Ji;
class Go extends rs {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class Ko extends ns {
}
class zo extends ss {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class nd extends Ro {
}
class sd extends _o {
}
class id extends is {
}
class er extends w.ObjectElement {
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
class Wo extends an {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Gt extends as {
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
class Yo extends cs {
}
class tr extends us {
}
Object.defineProperty(tr.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
Object.defineProperty(tr.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(t) {
    this.set("summary", t);
  },
  enumerable: !0
});
class Xo extends ls {
}
let Qo = class extends fs {
};
class Zo extends hs {
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
    throw new Z("id keyword from Core vocabulary has been renamed to $id.");
  }
  set idProp(e) {
    throw new Z("id keyword from Core vocabulary has been renamed to $id.");
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
    throw new Z("schema keyword from Hyper-Schema vocabulary has been renamed to submissionSchema.");
  }
  set schema(e) {
    throw new Z("schema keyword from Hyper-Schema vocabulary has been renamed to submissionSchema.");
  }
  get submissionSchema() {
    return this.get("submissionSchema");
  }
  set submissionSchema(e) {
    this.set("submissionSchema", e);
  }
  get method() {
    throw new Z("method keyword from Hyper-Schema vocabulary has been removed.");
  }
  set method(e) {
    throw new Z("method keyword from Hyper-Schema vocabulary has been removed.");
  }
  get encType() {
    throw new Z("encType keyword from Hyper-Schema vocabulary has been renamed to submissionEncType.");
  }
  set encType(e) {
    throw new Z("encType keyword from Hyper-Schema vocabulary has been renamed to submissionEncType.");
  }
  get submissionEncType() {
    return this.get("submissionEncType");
  }
  set submissionEncType(e) {
    this.set("submissionEncType", e);
  }
};
const eM = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft6", Ss), e.register("jSONReference", un), e.register("media", ps), e.register("linkDescription", Os), e;
  }
}, tM = {
  JSONSchemaDraft6Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...wt
};
let dw = class extends ow {
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
}, rM = class extends aw {
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), ee;
  }
};
class nM extends te {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
let mw = class extends cw {
  constructor(e) {
    super(e), this.element = new Os();
  }
};
const $e = ke(
  // JSON Schema object modifications
  M(["visitors", "document", "objects", "JSONSchema", "$visitor"], dw),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "id"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$id"], Ie.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Ie.visitors.JSONSchemaOrJSONReferenceVisitor),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], rM),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Ie.visitors.JSONSchemaOrJSONReferenceVisitor),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "const"], Ie.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "examples"], nM),
  // Link Description object modifications
  M(["visitors", "document", "objects", "LinkDescription", "$visitor"], mw),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Ie.visitors.JSONSchemaOrJSONReferenceVisitor),
  We(["visitors", "document", "objects", "LinkDescription", "fixedFields", "schema"]),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Ie.visitors.JSONSchemaOrJSONReferenceVisitor),
  We(["visitors", "document", "objects", "LinkDescription", "fixedFields", "method"]),
  We(["visitors", "document", "objects", "LinkDescription", "fixedFields", "encType"]),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"], Ie.visitors.value)
)(Ie), sM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ss || t(n) && e("JSONSchemaDraft6", n) && r("object", n)), iM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Os || t(n) && e("linkDescription", n) && r("object", n)), oM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Xp,
  isJSONSchemaElement: sM,
  isLinkDescriptionElement: iM,
  isMediaElement: iw
}, Symbol.toStringTag, { value: "Module" })), aM = () => {
  const t = Dt(eM);
  return {
    predicates: {
      ...oM,
      isStringElement: z
    },
    namespace: t
  };
}, cM = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = $e
} = {}) => {
  const s = w.refract(t), i = Qt(n), o = Te(e, i), a = new o({
    specObj: i
  });
  return Oe(s, a), Et(a.element, r, {
    toolboxCreator: aM,
    visitorOptions: {
      keyMap: tM,
      nodeTypeGetter: ms
    }
  });
}, yw = (t) => (e, r = {}) => cM(e, {
  specPath: t,
  ...r
});
Ss.refract = yw(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Os.refract = yw(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
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
    throw new Z('media keyword from Hyper-Schema vocabulary has been moved to validation vocabulary as "contentMediaType" / "contentEncoding"');
  }
  set media(e) {
    throw new Z('media keyword from Hyper-Schema vocabulary has been moved to validation vocabulary as "contentMediaType" / "contentEncoding"');
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
    throw new Z("mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.");
  }
  set mediaType(e) {
    throw new Z("mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.");
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
    throw new Z("submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.");
  }
  set submissionEncType(e) {
    throw new Z("submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.");
  }
  get submissionMediaType() {
    return this.get("submissionMediaType");
  }
  set submissionMediaType(e) {
    this.set("submissionMediaType", e);
  }
};
const uM = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft7", ws), e.register("jSONReference", un), e.register("linkDescription", Es), e;
  }
}, lM = {
  JSONSchemaDraft7Element: ["content"],
  JSONReferenceElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...wt
};
let vw = class extends dw {
  constructor(e) {
    super(e), this.element = new ws();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-07/schema#";
  }
}, gw = class extends mw {
  constructor(e) {
    super(e), this.element = new Es();
  }
};
const Vt = ke(
  // JSON Schema object modifications
  M(["visitors", "document", "objects", "JSONSchema", "$visitor"], vw),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$comment"], $e.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], $e.visitors.JSONSchemaOrJSONReferenceVisitor),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], $e.visitors.JSONSchemaOrJSONReferenceVisitor),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], $e.visitors.JSONSchemaOrJSONReferenceVisitor),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "media"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentEncoding"], $e.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentMediaType"], $e.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "writeOnly"], $e.visitors.value),
  // Link Description object modifications
  M(["visitors", "document", "objects", "LinkDescription", "$visitor"], gw),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchor"], $e.visitors.value),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchorPointer"], $e.visitors.value),
  We(["visitors", "document", "objects", "LinkDescription", "fixedFields", "mediaType"]),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetMediaType"], $e.visitors.value),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetHints"], $e.visitors.value),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "description"], $e.visitors.value),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "$comment"], $e.visitors.value),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], $e.visitors.JSONSchemaOrJSONReferenceVisitor),
  We(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"]),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionMediaType"], $e.visitors.value)
)($e), fM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ws || t(n) && e("JSONSchemaDraft7", n) && r("object", n)), hM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Es || t(n) && e("linkDescription", n) && r("object", n)), pM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Xp,
  isJSONSchemaElement: fM,
  isLinkDescriptionElement: hM
}, Symbol.toStringTag, { value: "Module" })), dM = () => {
  const t = Dt(uM);
  return {
    predicates: {
      ...pM,
      isStringElement: z
    },
    namespace: t
  };
}, mM = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Vt
} = {}) => {
  const s = w.refract(t), i = Qt(n), o = Te(e, i), a = new o({
    specObj: i
  });
  return Oe(s, a), Et(a.element, r, {
    toolboxCreator: dM,
    visitorOptions: {
      keyMap: lM,
      nodeTypeGetter: ms
    }
  });
}, bw = (t) => (e, r = {}) => mM(e, {
  specPath: t,
  ...r
});
ws.refract = bw(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Es.refract = bw(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
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
    throw new Z("definitions keyword from Validation vocabulary has been renamed to $defs.");
  }
  set definitions(e) {
    throw new Z("definitions keyword from Validation vocabulary has been renamed to $defs.");
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
    throw new Z("dependencies keyword from Validation vocabulary has been renamed to dependentSchemas.");
  }
  set dependencies(e) {
    throw new Z("dependencies keyword from Validation vocabulary has been renamed to dependentSchemas.");
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
const yM = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema201909", As), e.register("linkDescription", js), e;
  }
}, vM = {
  JSONSchema201909Element: ["content"],
  LinkDescriptionElement: ["content"],
  ...wt
};
let Ce = class extends vw {
  constructor(e) {
    super(e), this.element = new As();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2019-09/schema";
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = pr.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
};
class gM extends te {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
class bM extends te {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let xw = class extends F(Zt, we, te) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-$defs"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
}, Sw = class extends F(et, we, te) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, Ow = class extends F(et, we, te) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, ww = class extends F(et, we, te) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, Ew = class extends F(Zt, we, te) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
};
class xM extends F(et, we, te) {
  ObjectElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), ee;
  }
  ArrayElement(e) {
    return this.element = new w.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), ee;
  }
}
let Aw = class extends F(Zt, we, te) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
}, jw = class extends F(Zt, we, te) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
};
class SM extends te {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
let Pw = class extends gw {
  constructor(e) {
    super(e), this.element = new js();
  }
};
const ks = ke(
  // JSON Schema object modifications
  M(["visitors", "document", "objects", "JSONSchema", "$visitor"], Ce),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$vocabulary"], gM),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$anchor"], Vt.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"], Vt.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"], Vt.visitors.value),
  We(["visitors", "document", "objects", "JSONReference", "$visitor"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$ref"], bM),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "definitions"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$defs"], xw),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "allOf"], Sw),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "anyOf"], Ow),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "oneOf"], ww),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], Ce),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Ce),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Ce),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Ce),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependencies"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentSchemas"], Ew),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], xM),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Ce),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "properties"], Aw),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "patternProperties"], jw),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], Ce),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"], Ce),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Ce),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], Ce),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], Ce),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "maxContains"], Vt.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "minContains"], Vt.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentRequired"], SM),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "deprecated"], Vt.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], Ce),
  // Link Description object modifications
  M(["visitors", "document", "objects", "LinkDescription", "$visitor"], Pw),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], Ce),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Ce),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Ce),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Ce)
)(Vt), OM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof As || t(n) && e("JSONSchema201909", n) && r("object", n)), wM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof js || t(n) && e("linkDescription", n) && r("object", n)), EM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: OM,
  isLinkDescriptionElement: wM
}, Symbol.toStringTag, { value: "Module" })), AM = () => {
  const t = Dt(yM);
  return {
    predicates: {
      ...EM,
      isStringElement: z
    },
    namespace: t
  };
}, jM = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = ks
} = {}) => {
  const s = w.refract(t), i = Qt(n), o = Te(e, i), a = new o({
    specObj: i
  });
  return Oe(s, a), Et(a.element, r, {
    toolboxCreator: AM,
    visitorOptions: {
      keyMap: vM,
      nodeTypeGetter: ms
    }
  });
}, Tw = (t) => (e, r = {}) => jM(e, {
  specPath: t,
  ...r
});
As.refract = Tw(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
js.refract = Tw(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
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
    throw new Z("$recursiveAnchor keyword from Core vocabulary has been renamed to $dynamicAnchor.");
  }
  set $recursiveAnchor(e) {
    throw new Z("$recursiveAnchor keyword from Core vocabulary has been renamed to $dynamicAnchor.");
  }
  get $dynamicRef() {
    return this.get("$dynamicRef");
  }
  set $dynamicRef(e) {
    this.set("$dynamicRef", e);
  }
  get $recursiveRef() {
    throw new Z("$recursiveRef keyword from Core vocabulary has been renamed to $dynamicRef.");
  }
  set $recursiveRef(e) {
    throw new Z("$recursiveRef keyword from Core vocabulary has been renamed to $dynamicRef.");
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
class ea extends js {
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
const PM = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema202012", Ps), e.register("linkDescription", ea), e;
  }
}, TM = {
  JSONSchema202012Element: ["content"],
  LinkDescriptionElement: ["content"],
  ...wt
};
let Ae = class extends Ce {
  constructor(e) {
    super(e), this.element = new Ps();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2020-12/schema";
  }
}, Rw = class extends F(et, we, te) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-prefixItems");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, RM = class extends Pw {
  constructor(e) {
    super(e), this.element = new ea();
  }
};
const _w = ke(
  // JSON Schema object modifications
  M(["visitors", "document", "objects", "JSONSchema", "$visitor"], Ae),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicAnchor"], ks.visitors.value),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicRef"], ks.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], Ae),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Ae),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Ae),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Ae),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "prefixItems"], Rw),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], Ae),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Ae),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], Ae),
  We(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Ae),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], Ae),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], Ae),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], Ae),
  // Link Description object modifications
  M(["visitors", "document", "objects", "LinkDescription", "$visitor"], RM),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], Ae),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Ae),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Ae),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Ae)
)(ks), _M = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ps || t(n) && e("JSONSchema202012", n) && r("object", n)), $M = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ea || t(n) && e("linkDescription", n) && r("object", n)), CM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: _M,
  isLinkDescriptionElement: $M
}, Symbol.toStringTag, { value: "Module" })), IM = () => {
  const t = Dt(PM);
  return {
    predicates: {
      ...CM,
      isStringElement: z
    },
    namespace: t
  };
}, FM = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = _w
} = {}) => {
  const s = w.refract(t), i = Qt(n), o = Te(e, i), a = new o({
    specObj: i
  });
  return Oe(s, a), Et(a.element, r, {
    toolboxCreator: IM,
    visitorOptions: {
      keyMap: TM,
      nodeTypeGetter: ms
    }
  });
}, $w = (t) => (e, r = {}) => FM(e, {
  specPath: t,
  ...r
});
Ps.refract = $w(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
ea.refract = $w(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class wr extends Ps {
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
class ta extends ys {
}
class ra extends vs {
}
class na extends gs {
}
class sa extends bs {
}
class od extends Fo {
}
class ad extends Mo {
}
const cd = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", qo), e.register("components", Lo), e.register("contact", Vo), e.register("discriminator", td), e.register("encoding", rd), e.register("example", Bo), e.register("externalDocumentation", Uo), e.register("header", Jo), e.register("info", Ho), e.register("jsonSchemaDialect", dr), e.register("license", Go), e.register("link", Ko), e.register("mediaType", zo), e.register("oAuthFlow", nd), e.register("oAuthFlows", sd), e.register("openapi", id), e.register("openApi3_1", er), e.register("operation", xs), e.register("parameter", Wo), e.register("pathItem", Gt), e.register("paths", Yo), e.register("reference", tr), e.register("requestBody", Xo), e.register("response", Qo), e.register("responses", Zo), e.register("schema", wr), e.register("securityRequirement", ta), e.register("securityScheme", ra), e.register("server", na), e.register("serverVariable", sa), e.register("tag", od), e.register("xml", ad), e;
  }
}, Hi = class Hi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Hi.primaryClass);
  }
};
A(Hi, "primaryClass", "components-path-items");
let Rh = Hi;
const Gi = class Gi extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Gi.primaryClass);
  }
};
A(Gi, "primaryClass", "webhooks");
let _h = Gi;
const at = (t) => {
  if (ge(t))
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
  ...wt
};
class Ts {
  constructor(e, r, n) {
    A(this, "internalStore");
    this.storageElement = e, this.storageField = r, this.storageSubField = n;
  }
  get store() {
    if (!this.internalStore) {
      let e = this.storageElement.get(this.storageField);
      le(e) || (e = new w.ObjectElement(), this.storageElement.set(this.storageField, e));
      let r = e.get(this.storageSubField);
      Je(r) || (r = new w.ArrayElement(), e.set(this.storageSubField, r)), this.internalStore = r;
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
const MM = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: n
  } = e, s = (a, c) => !r.isParameterElement(a) || !r.isParameterElement(c) || !r.isStringElement(a.name) || !r.isStringElement(a.in) || !r.isStringElement(c.name) || !r.isStringElement(c.in) ? !1 : $(a.name) === $(c.name) && $(a.in) === $(c.in), i = [];
  let o;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(a) {
          o = new Ts(a, t, "parameters");
        },
        leave() {
          o = void 0;
        }
      },
      PathItemElement: {
        enter(a, c, u, h, l) {
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
        leave(a, c, u, h, l) {
          const d = oo(i);
          if (!Array.isArray(d) || d.length === 0)
            return;
          const f = n([...l, u, a]);
          if (o.includes(f))
            return;
          const m = _S([], ["parameters", "content"], a), p = KP(s, [...m, ...d]);
          a.parameters = new ci(p), o.append(f);
        }
      }
    }
  };
}, kM = ({
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
          i = new Ts(o, t, "security-requirements"), r.isArrayElement(o.security) && (s = o.security);
        },
        leave() {
          i = void 0, s = void 0;
        }
      },
      OperationElement: {
        leave(o, a, c, u, h) {
          if (h.some(r.isComponentsElement))
            return;
          const l = n([...h, c, o]);
          if (i.includes(l))
            return;
          if (typeof o.security > "u" && typeof s < "u") {
            var m;
            o.security = new ui((m = s) === null || m === void 0 ? void 0 : m.content), i.append(l);
          }
        }
      }
    }
  };
}, $h = (t) => t.replace(/\s/g, ""), Ch = (t) => t.replace(/\W/gi, "_"), NM = (t, e) => {
  const r = Ch($h(e.toLowerCase())), n = Ch($h(t));
  return `${r}${n}`;
}, DM = (t, e, r) => {
  const n = $h(t);
  return n.length > 0 ? Ch(n) : NM(e, r);
}, qM = ({
  storageField: t = "x-normalized",
  operationIdNormalizer: e = DM
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
        enter(h) {
          u = new Ts(h, t, "operation-ids");
        },
        leave() {
          const h = TP((l) => $(l.operationId), a);
          Object.entries(h).forEach(([l, d]) => {
            Array.isArray(d) && (d.length <= 1 || d.forEach((f, m) => {
              const p = `${l}${m + 1}`;
              f.operationId = new i.elements.String(p);
            }));
          }), c.forEach((l) => {
            if (typeof l.operationId > "u") return;
            const d = String($(l.operationId)), f = a.find((m) => $(m.meta.get("originalOperationId")) === d);
            typeof f > "u" || (l.operationId = q.safe(f.operationId), l.meta.set("originalOperationId", d), l.set("__originalOperationId", d));
          }), a.length = 0, c.length = 0, u = void 0;
        }
      },
      PathItemElement: {
        enter(h) {
          const l = Gr("path", $(h.meta.get("path")));
          o.push(l);
        },
        leave() {
          o.pop();
        }
      },
      OperationElement: {
        enter(h, l, d, f, m) {
          if (typeof h.operationId > "u") return;
          const p = s([...m, d, h]);
          if (u.includes(p))
            return;
          const y = String($(h.operationId)), g = oo(o), v = Gr("method", $(h.meta.get("http-method"))), b = e(y, g, v);
          y !== b && (h.operationId = new i.elements.String(b), h.set("__originalOperationId", y), h.meta.set("originalOperationId", y), a.push(h), u.append(p));
        }
      },
      LinkElement: {
        leave(h) {
          n.isLinkElement(h) && (typeof h.operationId > "u" || c.push(h));
        }
      }
    }
  };
}, LM = ({
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
          s = new Ts(i, t, "parameter-examples");
        },
        leave() {
          s = void 0;
        }
      },
      ParameterElement: {
        leave(i, o, a, c, u) {
          var h, l;
          if (u.some(r.isComponentsElement) || typeof i.schema > "u" || !r.isSchemaElement(i.schema) || typeof ((h = i.schema) === null || h === void 0 ? void 0 : h.example) > "u" && typeof ((l = i.schema) === null || l === void 0 ? void 0 : l.examples) > "u")
            return;
          const d = n([...u, a, i]);
          if (!s.includes(d)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const f = i.examples.map((m) => q.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", f), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", f[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [q(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", q(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, VM = ({
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
          s = new Ts(i, t, "header-examples");
        },
        leave() {
          s = void 0;
        }
      },
      HeaderElement: {
        leave(i, o, a, c, u) {
          var h, l;
          if (u.some(r.isComponentsElement) || typeof i.schema > "u" || !r.isSchemaElement(i.schema) || typeof ((h = i.schema) === null || h === void 0 ? void 0 : h.example) > "u" && typeof ((l = i.schema) === null || l === void 0 ? void 0 : l.examples) > "u")
            return;
          const d = n([...u, a, i]);
          if (!s.includes(d)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const f = i.examples.map((m) => q.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", f), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", f[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [q(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", q(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, BM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof qo || t(n) && e("callback", n) && r("object", n)), UM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Lo || t(n) && e("components", n) && r("object", n)), JM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Vo || t(n) && e("contact", n) && r("object", n)), HM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bo || t(n) && e("example", n) && r("object", n)), GM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Uo || t(n) && e("externalDocumentation", n) && r("object", n)), KM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Jo || t(n) && e("header", n) && r("object", n)), zM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ho || t(n) && e("info", n) && r("object", n)), Cw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof dr || t(n) && e("jsonSchemaDialect", n) && r("string", n)), WM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Go || t(n) && e("license", n) && r("object", n)), YM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ko || t(n) && e("link", n) && r("object", n)), XM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof id || t(n) && e("openapi", n) && r("string", n)), Iw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof er || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), Fw = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xs || t(n) && e("operation", n) && r("object", n)), QM = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wo || t(n) && e("parameter", n) && r("object", n)), mr = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gt || t(n) && e("pathItem", n) && r("object", n)), ZM = (t) => {
  if (!mr(t) || !z(t.$ref))
    return !1;
  const e = $(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, ek = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Yo || t(n) && e("paths", n) && r("object", n)), Er = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof tr || t(n) && e("reference", n) && r("object", n)), tk = (t) => {
  if (!Er(t) || !z(t.$ref))
    return !1;
  const e = $(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, rk = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xo || t(n) && e("requestBody", n) && r("object", n)), nk = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qo || t(n) && e("response", n) && r("object", n)), sk = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zo || t(n) && e("responses", n) && r("object", n)), Kt = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof wr || t(n) && e("schema", n) && r("object", n)), ud = (t) => Jn(t) && t.classes.includes("boolean-json-schema"), ik = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ta || t(n) && e("securityRequirement", n) && r("object", n)), ok = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ra || t(n) && e("securityScheme", n) && r("object", n)), ak = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof na || t(n) && e("server", n) && r("object", n)), ck = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof sa || t(n) && e("serverVariable", n) && r("object", n)), uk = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zo || t(n) && e("mediaType", n) && r("object", n)), lk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: ud,
  isCallbackElement: BM,
  isComponentsElement: UM,
  isContactElement: JM,
  isExampleElement: HM,
  isExternalDocumentationElement: GM,
  isHeaderElement: KM,
  isInfoElement: zM,
  isJsonSchemaDialectElement: Cw,
  isLicenseElement: WM,
  isLinkElement: YM,
  isMediaTypeElement: uk,
  isOpenApi3_1Element: Iw,
  isOpenapiElement: XM,
  isOperationElement: Fw,
  isParameterElement: QM,
  isPathItemElement: mr,
  isPathItemElementExternal: ZM,
  isPathsElement: ek,
  isReferenceElement: Er,
  isReferenceElementExternal: tk,
  isRequestBodyElement: rk,
  isResponseElement: nk,
  isResponsesElement: sk,
  isSchemaElement: Kt,
  isSecurityRequirementElement: ik,
  isSecuritySchemeElement: ok,
  isServerElement: ak,
  isServerVariableElement: ck
}, Symbol.toStringTag, { value: "Module" })), fk = (t) => {
  const e = t.reduce((r, n, s) => {
    if (pt(n)) {
      const i = String($(n.key));
      r.push(i);
    } else if (Je(t[s - 2])) {
      const i = String(t[s - 2].content.indexOf(n));
      r.push(i);
    }
    return r;
  }, []);
  return QO(e);
}, Mw = () => {
  const t = Dt(cd);
  return {
    predicates: {
      ...lk,
      isElement: ge,
      isStringElement: z,
      isArrayElement: Je,
      isObjectElement: le,
      isMemberElement: pt,
      isServersElement: hw,
      includesClasses: Eo,
      hasElementSourceMap: Hn
    },
    ancestorLineageToJSONPointer: fk,
    namespace: t
  };
};
class hk extends F(X, D) {
  constructor(e) {
    super(e), this.element = new er(), this.specPath = J(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, X.prototype.ObjectElement.call(this, e);
  }
}
const pk = T.visitors.document.objects.Info.$visitor;
class dk extends pk {
  constructor(e) {
    super(e), this.element = new Ho();
  }
}
const mk = T.visitors.document.objects.Contact.$visitor;
class yk extends mk {
  constructor(e) {
    super(e), this.element = new Vo();
  }
}
const vk = T.visitors.document.objects.License.$visitor;
class gk extends vk {
  constructor(e) {
    super(e), this.element = new Go();
  }
}
const bk = T.visitors.document.objects.Link.$visitor;
class xk extends bk {
  constructor(e) {
    super(e), this.element = new Ko();
  }
}
class Sk extends F(dt, D) {
  StringElement(e) {
    const r = new dr($(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, ee;
  }
}
const Ok = T.visitors.document.objects.Server.$visitor;
class wk extends Ok {
  constructor(e) {
    super(e), this.element = new na();
  }
}
const Ek = T.visitors.document.objects.ServerVariable.$visitor;
class Ak extends Ek {
  constructor(e) {
    super(e), this.element = new sa();
  }
}
const jk = T.visitors.document.objects.MediaType.$visitor;
class Pk extends jk {
  constructor(e) {
    super(e), this.element = new zo();
  }
}
const Tk = T.visitors.document.objects.SecurityRequirement.$visitor;
class Rk extends Tk {
  constructor(e) {
    super(e), this.element = new ta();
  }
}
const _k = T.visitors.document.objects.Components.$visitor;
class $k extends _k {
  constructor(e) {
    super(e), this.element = new Lo();
  }
}
const Ck = T.visitors.document.objects.Tag.$visitor;
class Ik extends Ck {
  constructor(e) {
    super(e), this.element = new od();
  }
}
const Fk = T.visitors.document.objects.Reference.$visitor;
class Mk extends Fk {
  constructor(e) {
    super(e), this.element = new tr();
  }
}
const kk = T.visitors.document.objects.Parameter.$visitor;
class Nk extends kk {
  constructor(e) {
    super(e), this.element = new Wo();
  }
}
const Dk = T.visitors.document.objects.Header.$visitor;
class qk extends Dk {
  constructor(e) {
    super(e), this.element = new Jo();
  }
}
class Lk extends F(X, we, D) {
  constructor(e) {
    super(e), this.element = new wr(), this.specPath = J(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = dr.default, this.passingOptionsNames.push("parent");
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = X.prototype.ObjectElement.call(this, e);
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
    Cw(this.openApiSemanticElement.jsonSchemaDialect) ? e = $(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && z(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = $(this.openApiGenericElement.get("jsonSchemaDialect")) : e = $(this.jsonSchemaDefaultDialect), e;
  }
  handleDialectIdentifier(e) {
    return Ae.prototype.handleDialectIdentifier.call(this, e);
  }
  handleSchemaIdentifier(e) {
    return Ae.prototype.handleSchemaIdentifier.call(this, e);
  }
}
class Vk extends xw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
let Bk = class extends Sw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
};
class Uk extends Ow {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class Jk extends ww {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class Hk extends Ew {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class Gk extends Rw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class Kk extends Aw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class zk extends jw {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
const Wk = T.visitors.document.objects.Discriminator.$visitor;
class Yk extends Wk {
  constructor(e) {
    super(e), this.element = new td(), this.canSupportSpecificationExtensions = !0;
  }
}
const Xk = T.visitors.document.objects.XML.$visitor;
class Qk extends Xk {
  constructor(e) {
    super(e), this.element = new ad();
  }
}
class Zk extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new ai(), this.specPath = J(["document", "objects", "Schema"]);
  }
}
class eN extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new Rh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(Er).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const tN = T.visitors.document.objects.Example.$visitor;
class rN extends tN {
  constructor(e) {
    super(e), this.element = new Bo();
  }
}
const nN = T.visitors.document.objects.ExternalDocumentation.$visitor;
class sN extends nN {
  constructor(e) {
    super(e), this.element = new Uo();
  }
}
const iN = T.visitors.document.objects.Encoding.$visitor;
class oN extends iN {
  constructor(e) {
    super(e), this.element = new rd();
  }
}
const aN = T.visitors.document.objects.Paths.$visitor;
class cN extends aN {
  constructor(e) {
    super(e), this.element = new Yo();
  }
}
const uN = T.visitors.document.objects.RequestBody.$visitor;
class lN extends uN {
  constructor(e) {
    super(e), this.element = new Xo();
  }
}
const Rb = T.visitors.document.objects.Callback.$visitor;
class fN extends Rb {
  constructor(e) {
    super(e), this.element = new qo(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Rb.prototype.ObjectElement.call(this, e);
    return this.element.filter(Er).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const hN = T.visitors.document.objects.Response.$visitor;
class pN extends hN {
  constructor(e) {
    super(e), this.element = new Qo();
  }
}
const dN = T.visitors.document.objects.Responses.$visitor;
class mN extends dN {
  constructor(e) {
    super(e), this.element = new Zo();
  }
}
const yN = T.visitors.document.objects.Operation.$visitor;
class vN extends yN {
  constructor(e) {
    super(e), this.element = new xs();
  }
}
const gN = T.visitors.document.objects.PathItem.$visitor;
class bN extends gN {
  constructor(e) {
    super(e), this.element = new Gt();
  }
}
const xN = T.visitors.document.objects.SecurityScheme.$visitor;
class SN extends xN {
  constructor(e) {
    super(e), this.element = new ra();
  }
}
const ON = T.visitors.document.objects.OAuthFlows.$visitor;
class wN extends ON {
  constructor(e) {
    super(e), this.element = new sd();
  }
}
const EN = T.visitors.document.objects.OAuthFlow.$visitor;
class AN extends EN {
  constructor(e) {
    super(e), this.element = new nd();
  }
}
class jN extends F(Q, D) {
  constructor(e) {
    super(e), this.element = new _h(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Q.prototype.ObjectElement.call(this, e);
    return this.element.filter(Er).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter(mr).forEach((n, s) => {
      n.setMetaProperty("webhook-name", $(s));
    }), r;
  }
}
const {
  JSONSchema: PN,
  LinkDescription: TN
} = _w.visitors.document.objects, RN = {
  visitors: {
    value: T.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: hk,
          fixedFields: {
            openapi: T.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: Sk,
            servers: T.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: jN,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: T.visitors.document.objects.OpenApi.fixedFields.security,
            tags: T.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: dk,
          fixedFields: {
            title: T.visitors.document.objects.Info.fixedFields.title,
            description: T.visitors.document.objects.Info.fixedFields.description,
            summary: {
              $ref: "#/visitors/value"
            },
            termsOfService: T.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: T.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: yk,
          fixedFields: {
            name: T.visitors.document.objects.Contact.fixedFields.name,
            url: T.visitors.document.objects.Contact.fixedFields.url,
            email: T.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: gk,
          fixedFields: {
            name: T.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: T.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: wk,
          fixedFields: {
            url: T.visitors.document.objects.Server.fixedFields.url,
            description: T.visitors.document.objects.Server.fixedFields.description,
            variables: T.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: Ak,
          fixedFields: {
            enum: T.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: T.visitors.document.objects.ServerVariable.fixedFields.default,
            description: T.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: $k,
          fixedFields: {
            schemas: Zk,
            responses: T.visitors.document.objects.Components.fixedFields.responses,
            parameters: T.visitors.document.objects.Components.fixedFields.parameters,
            examples: T.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: T.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: T.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: T.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: T.visitors.document.objects.Components.fixedFields.links,
            callbacks: T.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: eN
          }
        },
        Paths: {
          $visitor: cN
        },
        PathItem: {
          $visitor: bN,
          fixedFields: {
            $ref: T.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: T.visitors.document.objects.PathItem.fixedFields.summary,
            description: T.visitors.document.objects.PathItem.fixedFields.description,
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
            servers: T.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: T.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: vN,
          fixedFields: {
            tags: T.visitors.document.objects.Operation.fixedFields.tags,
            summary: T.visitors.document.objects.Operation.fixedFields.summary,
            description: T.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: T.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: T.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: T.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: T.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: T.visitors.document.objects.Operation.fixedFields.deprecated,
            security: T.visitors.document.objects.Operation.fixedFields.security,
            servers: T.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: sN,
          fixedFields: {
            description: T.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: T.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: Nk,
          fixedFields: {
            name: T.visitors.document.objects.Parameter.fixedFields.name,
            in: T.visitors.document.objects.Parameter.fixedFields.in,
            description: T.visitors.document.objects.Parameter.fixedFields.description,
            required: T.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: T.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: T.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: T.visitors.document.objects.Parameter.fixedFields.style,
            explode: T.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: T.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: T.visitors.document.objects.Parameter.fixedFields.example,
            examples: T.visitors.document.objects.Parameter.fixedFields.examples,
            content: T.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: lN,
          fixedFields: {
            description: T.visitors.document.objects.RequestBody.fixedFields.description,
            content: T.visitors.document.objects.RequestBody.fixedFields.content,
            required: T.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: Pk,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: T.visitors.document.objects.MediaType.fixedFields.example,
            examples: T.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: T.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: oN,
          fixedFields: {
            contentType: T.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: T.visitors.document.objects.Encoding.fixedFields.headers,
            style: T.visitors.document.objects.Encoding.fixedFields.style,
            explode: T.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: T.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: mN,
          fixedFields: {
            default: T.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: pN,
          fixedFields: {
            description: T.visitors.document.objects.Response.fixedFields.description,
            headers: T.visitors.document.objects.Response.fixedFields.headers,
            content: T.visitors.document.objects.Response.fixedFields.content,
            links: T.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: fN
        },
        Example: {
          $visitor: rN,
          fixedFields: {
            summary: T.visitors.document.objects.Example.fixedFields.summary,
            description: T.visitors.document.objects.Example.fixedFields.description,
            value: T.visitors.document.objects.Example.fixedFields.value,
            externalValue: T.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: xk,
          fixedFields: {
            operationRef: T.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: T.visitors.document.objects.Link.fixedFields.operationId,
            parameters: T.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: T.visitors.document.objects.Link.fixedFields.requestBody,
            description: T.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: qk,
          fixedFields: {
            description: T.visitors.document.objects.Header.fixedFields.description,
            required: T.visitors.document.objects.Header.fixedFields.required,
            deprecated: T.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: T.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: T.visitors.document.objects.Header.fixedFields.style,
            explode: T.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: T.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: T.visitors.document.objects.Header.fixedFields.example,
            examples: T.visitors.document.objects.Header.fixedFields.examples,
            content: T.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: Ik,
          fixedFields: {
            name: T.visitors.document.objects.Tag.fixedFields.name,
            description: T.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: Mk,
          fixedFields: {
            $ref: T.visitors.document.objects.Reference.fixedFields.$ref,
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
          ...TN
        },
        Schema: {
          $visitor: Lk,
          fixedFields: {
            ...PN.fixedFields,
            // core vocabulary
            $defs: Vk,
            // applicator vocabulary
            allOf: Bk,
            anyOf: Uk,
            oneOf: Jk,
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
            dependentSchemas: Hk,
            prefixItems: Gk,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: Kk,
            patternProperties: zk,
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
          $visitor: Yk,
          fixedFields: {
            propertyName: T.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: T.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: Qk,
          fixedFields: {
            name: T.visitors.document.objects.XML.fixedFields.name,
            namespace: T.visitors.document.objects.XML.fixedFields.namespace,
            prefix: T.visitors.document.objects.XML.fixedFields.prefix,
            attribute: T.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: T.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: SN,
          fixedFields: {
            type: T.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: T.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: T.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: T.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: T.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: T.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: T.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: wN,
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
          $visitor: AN,
          fixedFields: {
            authorizationUrl: T.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: T.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: T.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: T.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: Rk
        }
      },
      extension: {
        $visitor: T.visitors.document.extension.$visitor
      }
    }
  }
}, _N = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = w.refract(t), s = Qt(RN), i = Te(e, s), o = new i({
    specObj: s
  });
  return Oe(n, o), Et(o.element, r, {
    toolboxCreator: Mw,
    visitorOptions: {
      keyMap: vt,
      nodeTypeGetter: at
    }
  });
}, se = (t) => (e, r = {}) => _N(e, {
  specPath: t,
  ...r
});
qo.refract = se(["visitors", "document", "objects", "Callback", "$visitor"]);
Lo.refract = se(["visitors", "document", "objects", "Components", "$visitor"]);
Vo.refract = se(["visitors", "document", "objects", "Contact", "$visitor"]);
Bo.refract = se(["visitors", "document", "objects", "Example", "$visitor"]);
td.refract = se(["visitors", "document", "objects", "Discriminator", "$visitor"]);
rd.refract = se(["visitors", "document", "objects", "Encoding", "$visitor"]);
Uo.refract = se(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Jo.refract = se(["visitors", "document", "objects", "Header", "$visitor"]);
Ho.refract = se(["visitors", "document", "objects", "Info", "$visitor"]);
dr.refract = se(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
Go.refract = se(["visitors", "document", "objects", "License", "$visitor"]);
Ko.refract = se(["visitors", "document", "objects", "Link", "$visitor"]);
zo.refract = se(["visitors", "document", "objects", "MediaType", "$visitor"]);
nd.refract = se(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
sd.refract = se(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
id.refract = se(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
er.refract = se(["visitors", "document", "objects", "OpenApi", "$visitor"]);
xs.refract = se(["visitors", "document", "objects", "Operation", "$visitor"]);
Wo.refract = se(["visitors", "document", "objects", "Parameter", "$visitor"]);
Gt.refract = se(["visitors", "document", "objects", "PathItem", "$visitor"]);
Yo.refract = se(["visitors", "document", "objects", "Paths", "$visitor"]);
tr.refract = se(["visitors", "document", "objects", "Reference", "$visitor"]);
Xo.refract = se(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Qo.refract = se(["visitors", "document", "objects", "Response", "$visitor"]);
Zo.refract = se(["visitors", "document", "objects", "Responses", "$visitor"]);
wr.refract = se(["visitors", "document", "objects", "Schema", "$visitor"]);
ta.refract = se(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
ra.refract = se(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
na.refract = se(["visitors", "document", "objects", "Server", "$visitor"]);
sa.refract = se(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
od.refract = se(["visitors", "document", "objects", "Tag", "$visitor"]);
ad.refract = se(["visitors", "document", "objects", "XML", "$visitor"]);
class $N extends Kn {
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
      const r = unescape(encodeURIComponent(e.toString())), n = btoa(r), s = new lt();
      if (n.length !== 0) {
        const i = new w.StringElement(n);
        i.classes.push("result"), s.push(i);
      }
      return s;
    } catch (r) {
      throw new $t(`Error parsing "${e.uri}"`, {
        cause: r
      });
    }
  }
}
class CN extends z_ {
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
      throw new PO('"openapi-3-1" dereference strategy is not available.');
    const s = new Kr(), i = HS(r, {
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
  AbortController: IN,
  AbortSignal: FN
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = IN);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = FN);
class kw extends K_ {
  constructor({
    swaggerHTTPClient: r = Jr,
    swaggerHTTPClientConfig: n = {},
    ...s
  } = {}) {
    super({
      ...s,
      name: "http-swagger-client"
    });
    A(this, "swaggerHTTPClient", Jr);
    A(this, "swaggerHTTPClientConfig");
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
          let f = await fetch(l, d);
          try {
            f.headers.delete("Content-Type");
          } catch {
            f = new Response(f.body, {
              ...f,
              headers: new Headers(f.headers)
            }), f.headers.delete("Content-Type");
          }
          return f;
        },
        credentials: a,
        redirect: c,
        follow: u,
        ...this.swaggerHTTPClientConfig
      })).text.arrayBuffer();
    } catch (h) {
      throw new GS(`Error downloading "${r.uri}"`, {
        cause: h
      });
    } finally {
      clearTimeout(o);
    }
  }
}
class Nw extends Kn {
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
      throw new $t("json-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new lt(), n = e.toString();
    if (this.allowEmpty && n.trim() === "")
      return r;
    try {
      const s = jO(JSON.parse(n));
      return s.classes.push("result"), r.push(s), r;
    } catch (s) {
      throw new $t(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class Dw extends Kn {
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
        return Ur.load(e.toString(), {
          schema: Js
        }), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new $t("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new lt(), n = e.toString();
    try {
      const s = Ur.load(n, {
        schema: Js
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = jO(s);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new $t(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class qw extends Kn {
  constructor(r = {}) {
    super({
      name: "openapi-json-3-1-swagger-client",
      mediaTypes: new Yp(...Wr.filterByFormat("generic"), ...Wr.filterByFormat("json")),
      ...r
    });
    A(this, "detectionRegExp", /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/);
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
      throw new $t("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new lt(), s = r.toString();
    if (this.allowEmpty && s.trim() === "")
      return n;
    try {
      const i = JSON.parse(s), o = er.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new $t(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
class Lw extends Kn {
  constructor(r = {}) {
    super({
      name: "openapi-yaml-3-1-swagger-client",
      mediaTypes: new Yp(...Wr.filterByFormat("generic"), ...Wr.filterByFormat("yaml")),
      ...r
    });
    A(this, "detectionRegExp", /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m);
  }
  async canParse(r) {
    const n = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(r.extension), s = this.mediaTypes.includes(r.mediaType);
    if (!n) return !1;
    if (s) return !0;
    if (!s)
      try {
        const i = r.toString();
        return Ur.load(i), this.detectionRegExp.test(i);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(r) {
    if (this.sourceMap)
      throw new $t("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new lt(), s = r.toString();
    try {
      const i = Ur.load(s, {
        schema: Js
      });
      if (this.allowEmpty && typeof i > "u")
        return n;
      const o = er.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new $t(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
const ia = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), Xr = (t) => {
  const e = jp(t);
  return VS("#", e);
}, MN = (t) => {
  if (!ia(t))
    throw new Q_(t);
  return t;
}, ld = (t, e) => {
  const r = MN(t), n = OO((s) => Kt(s) && $(s.$anchor) === r, e);
  if (Xt(n))
    throw new Y_(`Evaluation failed on token: "${r}"`);
  return n;
}, Vw = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = jp($(e.$ref)), n = $(e.meta.get("ancestorsSchemaIdentifiers"));
  return `${tn((i, o) => Pe(i, Un(fe(o))), t, [...n, $(e.$ref)])}${r === "#" ? "" : r}`;
}, kN = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = $(e.meta.get("ancestorsSchemaIdentifiers"));
  return tn((n, s) => Pe(n, Un(fe(s))), t, [...r, $(e.$id)]);
}, xn = (t) => {
  if (xn.cache.has(t))
    return xn.cache.get(t);
  const e = wr.refract(t);
  return xn.cache.set(t, e), e;
};
xn.cache = /* @__PURE__ */ new WeakMap();
const De = (t) => lr(t) ? xn(t) : t, oa = (t, e) => {
  const {
    cache: r
  } = oa, n = fe(t), s = (o) => Kt(o) && typeof o.$id < "u";
  if (!r.has(e)) {
    const o = $_(s, e);
    r.set(e, Array.from(o));
  }
  const i = r.get(e).find((o) => kN(n, o) === n);
  if (Xt(i))
    throw new qp(`Evaluation failed on URI: "${t}"`);
  return ia(Xr(t)) ? ld(Xr(t), i) : ir(i, $r(t));
};
oa.cache = /* @__PURE__ */ new WeakMap();
const Pf = Oe[Symbol.for("nodejs.util.promisify.custom")], _e = new Np(), mt = (t, e, r, n) => {
  pt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class qr {
  constructor({
    reference: e,
    namespace: r,
    options: n,
    indirections: s = [],
    ancestors: i = new Of(),
    refractCache: o = /* @__PURE__ */ new Map()
  }) {
    A(this, "indirections");
    A(this, "namespace");
    A(this, "reference");
    A(this, "options");
    A(this, "ancestors");
    A(this, "refractCache");
    this.indirections = s, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new Of(...i), this.refractCache = o;
  }
  toBaseURI(e) {
    return Pe(this.reference.uri, Un(fe(e)));
  }
  async toReference(e) {
    if (this.reference.depth >= this.options.resolve.maxDepth)
      throw new Z_(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    const r = this.toBaseURI(e), {
      refSet: n
    } = this.reference;
    if (n.has(r))
      return n.find(CS(r, "uri"));
    const s = await kT(ot(r), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: "text/plain"
      }
    }), i = new Tt({
      uri: r,
      value: q(s),
      depth: this.reference.depth + 1
    });
    if (n.add(i), this.options.dereference.immutable) {
      const o = new Tt({
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
    return [new Of(...this.ancestors, r), r];
  }
  async ReferenceElement(e, r, n, s, i, o) {
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), u = this.toBaseURI($(e.$ref)), h = fe(this.reference.uri) === u, l = !h;
    if (!this.options.resolve.internal && h || !this.options.resolve.external && l)
      return !1;
    const d = await this.toReference($(e.$ref)), f = Pe(u, $(e.$ref));
    this.indirections.push(e);
    const m = $r(f);
    let p = ir(d.value.result, m);
    if (p.id = _e.identify(p), lr(p)) {
      const E = $(e.meta.get("referenced-element")), O = `${E}-${$(_e.identify(p))}`;
      this.refractCache.has(O) ? p = this.refractCache.get(O) : pe(p) ? (p = tr.refract(p), p.setMetaProperty("referenced-element", E), this.refractCache.set(O, p)) : (p = this.namespace.getElementClass(E).refract(p), this.refractCache.set(O, p));
    }
    if (e === p)
      throw new ye("Recursive Reference Object detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(p)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var y, g;
        const E = new w.RefElement(p.id, {
          type: "reference",
          uri: d.uri,
          $ref: $(e.$ref)
        }), j = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)(E);
        return o.replaceWith(j, mt), n ? !1 : j;
      }
    }
    const v = fe(d.refSet.rootRef.uri) !== d.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
    if ((l || v || Er(p) || b) && !a.includesCycle(p)) {
      c.add(e);
      const E = new qr({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      p = await Pf(p, E, {
        keyMap: vt,
        nodeTypeGetter: at
      }), c.delete(e);
    }
    this.indirections.pop();
    const x = Be(p);
    return x.setMetaProperty("id", _e.generateId()), x.setMetaProperty("ref-fields", {
      $ref: $(e.$ref),
      // @ts-ignore
      description: $(e.description),
      // @ts-ignore
      summary: $(e.summary)
    }), x.setMetaProperty("ref-origin", d.uri), x.setMetaProperty("ref-referencing-element-id", q(_e.identify(e))), le(p) && le(x) && (e.hasKey("description") && "description" in p && (x.remove("description"), x.set("description", e.get("description"))), e.hasKey("summary") && "summary" in p && (x.remove("summary"), x.set("summary", e.get("summary")))), o.replaceWith(x, mt), n ? !1 : x;
  }
  async PathItemElement(e, r, n, s, i, o) {
    if (!z(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), u = this.toBaseURI($(e.$ref)), h = fe(this.reference.uri) === u, l = !h;
    if (!this.options.resolve.internal && h || !this.options.resolve.external && l)
      return;
    const d = await this.toReference($(e.$ref)), f = Pe(u, $(e.$ref));
    this.indirections.push(e);
    const m = $r(f);
    let p = ir(d.value.result, m);
    if (p.id = _e.identify(p), lr(p)) {
      const x = `path-item-${$(_e.identify(p))}`;
      this.refractCache.has(x) ? p = this.refractCache.get(x) : (p = Gt.refract(p), this.refractCache.set(x, p));
    }
    if (e === p)
      throw new ye("Recursive Path Item Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(p)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var y, g;
        const x = new w.RefElement(p.id, {
          type: "path-item",
          uri: d.uri,
          $ref: $(e.$ref)
        }), O = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)(x);
        return o.replaceWith(O, mt), n ? !1 : O;
      }
    }
    const v = fe(d.refSet.rootRef.uri) !== d.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
    if ((l || v || mr(p) && z(p.$ref) || b) && !a.includesCycle(p)) {
      c.add(e);
      const x = new qr({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      p = await Pf(p, x, {
        keyMap: vt,
        nodeTypeGetter: at
      }), c.delete(e);
    }
    if (this.indirections.pop(), mr(p)) {
      const x = new Gt([...p.content], q(p.meta), q(p.attributes));
      x.setMetaProperty("id", _e.generateId()), e.forEach((E, O, j) => {
        x.remove($(O)), x.content.push(j);
      }), x.remove("$ref"), x.setMetaProperty("ref-fields", {
        $ref: $(e.$ref)
      }), x.setMetaProperty("ref-origin", d.uri), x.setMetaProperty("ref-referencing-element-id", q(_e.identify(e))), p = x;
    }
    return o.replaceWith(p, mt), n ? void 0 : p;
  }
  async LinkElement(e, r, n, s, i, o) {
    if (!z(e.operationRef) && !z(e.operationId))
      return;
    if (z(e.operationRef) && z(e.operationId))
      throw new ye("LinkElement operationRef and operationId fields are mutually exclusive.");
    let a;
    if (z(e.operationRef)) {
      var c;
      const h = $r($(e.operationRef)), l = this.toBaseURI($(e.operationRef)), d = fe(this.reference.uri) === l, f = !d;
      if (!this.options.resolve.internal && d || !this.options.resolve.external && f)
        return;
      const m = await this.toReference($(e.operationRef));
      if (a = ir(m.value.result, h), lr(a)) {
        const y = `operation-${$(_e.identify(a))}`;
        this.refractCache.has(y) ? a = this.refractCache.get(y) : (a = xs.refract(a), this.refractCache.set(y, a));
      }
      a = Be(a), a.setMetaProperty("ref-origin", m.uri);
      const p = Be(e);
      return (c = p.operationRef) === null || c === void 0 || c.meta.set("operation", a), o.replaceWith(p, mt), n ? void 0 : p;
    }
    if (z(e.operationId)) {
      var u;
      const h = $(e.operationId), l = await this.toReference(ot(this.reference.uri));
      if (a = OO((f) => Fw(f) && ge(f.operationId) && f.operationId.equals(h), l.value.result), Xt(a))
        throw new ye(`OperationElement(operationId=${h}) not found.`);
      const d = Be(e);
      return (u = d.operationId) === null || u === void 0 || u.meta.set("operation", a), o.replaceWith(d, mt), n ? void 0 : d;
    }
  }
  async ExampleElement(e, r, n, s, i, o) {
    if (!z(e.externalValue))
      return;
    if (e.hasKey("value") && z(e.externalValue))
      throw new ye("ExampleElement value and externalValue fields are mutually exclusive.");
    const a = this.toBaseURI($(e.externalValue)), c = fe(this.reference.uri) === a, u = !c;
    if (!this.options.resolve.internal && c || !this.options.resolve.external && u)
      return;
    const h = await this.toReference($(e.externalValue)), l = Be(h.value.result);
    l.setMetaProperty("ref-origin", h.uri);
    const d = Be(e);
    return d.value = l, o.replaceWith(d, mt), n ? void 0 : d;
  }
  async SchemaElement(e, r, n, s, i, o) {
    if (!z(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]);
    let u = await this.toReference(ot(this.reference.uri)), {
      uri: h
    } = u;
    const l = Vw(h, e), d = fe(l), f = new _n({
      uri: d
    }), m = kP((j) => j.canRead(f), this.options.resolve.resolvers), p = !m;
    let y = fe(this.reference.uri) === l, g = !y;
    this.indirections.push(e);
    let v;
    try {
      if (m || p) {
        h = this.toBaseURI(l);
        const j = l, _ = De(u.value.result);
        if (v = oa(j, _), v = De(v), v.id = _e.identify(v), !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
      } else {
        if (h = this.toBaseURI(l), y = fe(this.reference.uri) === h, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
        u = await this.toReference(ot(l));
        const j = $r(l), _ = De(u.value.result);
        v = ir(_, j), v = De(v), v.id = _e.identify(v);
      }
    } catch (j) {
      if (p && j instanceof qp)
        if (ia(Xr(l))) {
          if (y = fe(this.reference.uri) === h, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          u = await this.toReference(ot(l));
          const _ = Xr(l), P = De(u.value.result);
          v = ld(_, P), v = De(v), v.id = _e.identify(v);
        } else {
          if (h = this.toBaseURI(l), y = fe(this.reference.uri) === h, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          u = await this.toReference(ot(l));
          const _ = $r(l), P = De(u.value.result);
          v = ir(P, _), v = De(v), v.id = _e.identify(v);
        }
      else
        throw j;
    }
    if (e === v)
      throw new ye("Recursive Schema Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(v)) {
      if (u.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var b, x;
        const j = new w.RefElement(v.id, {
          type: "json-schema",
          uri: u.uri,
          $ref: $(e.$ref)
        }), P = ((b = (x = this.options.dereference.strategyOpts["openapi-3-1"]) === null || x === void 0 ? void 0 : x.circularReplacer) !== null && b !== void 0 ? b : this.options.dereference.circularReplacer)(j);
        return o.replaceWith(P, mt), n ? !1 : P;
      }
    }
    const E = fe(u.refSet.rootRef.uri) !== u.uri, O = ["error", "replace"].includes(this.options.dereference.circular);
    if ((g || E || Kt(v) && z(v.$ref) || O) && !a.includesCycle(v)) {
      c.add(e);
      const j = new qr({
        reference: u,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      v = await Pf(v, j, {
        keyMap: vt,
        nodeTypeGetter: at
      }), c.delete(e);
    }
    if (this.indirections.pop(), ud(v)) {
      const j = q(v);
      return j.setMetaProperty("id", _e.generateId()), j.setMetaProperty("ref-fields", {
        $ref: $(e.$ref)
      }), j.setMetaProperty("ref-origin", u.uri), j.setMetaProperty("ref-referencing-element-id", q(_e.identify(e))), o.replaceWith(j, mt), n ? !1 : j;
    }
    if (Kt(v)) {
      const j = new wr([...v.content], q(v.meta), q(v.attributes));
      j.setMetaProperty("id", _e.generateId()), e.forEach((_, P, k) => {
        j.remove($(P)), j.content.push(k);
      }), j.remove("$ref"), j.setMetaProperty("ref-fields", {
        $ref: $(e.$ref)
      }), j.setMetaProperty("ref-origin", u.uri), j.setMetaProperty("ref-referencing-element-id", q(_e.identify(e))), v = j;
    }
    return o.replaceWith(v, mt), n ? void 0 : v;
  }
}
const NN = Oe[Symbol.for("nodejs.util.promisify.custom")];
class DN extends W_ {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canDereference(e) {
    var r;
    return e.mediaType !== "text/plain" ? Wr.includes(e.mediaType) : Iw((r = e.parseResult) === null || r === void 0 ? void 0 : r.result);
  }
  async dereference(e, r) {
    var n;
    const s = Dt(cd), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new Kr(), o = new Kr();
    let a = i, c;
    i.has(e.uri) ? c = i.find(CS(e.uri, "uri")) : (c = new Tt({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((l) => new Tt({
      ...l,
      value: q(l.value)
    })).forEach((l) => o.add(l)), c = o.find((l) => l.uri === e.uri), a = o);
    const u = new qr({
      reference: c,
      namespace: s,
      options: r
    }), h = await NN(a.rootRef.value, u, {
      keyMap: vt,
      nodeTypeGetter: at
    });
    return r.dereference.immutable && o.refs.filter((l) => l.uri.startsWith("immutable://")).map((l) => new Tt({
      ...l,
      uri: l.uri.replace(/^immutable:\/\//, "")
    })).forEach((l) => i.add(l)), r.dereference.refSet === null && i.clean(), o.clean(), h;
  }
}
const qN = (t) => t.slice(2), it = (t) => {
  const e = qN(t);
  return e.reduce((r, n, s) => {
    if (pt(n)) {
      const i = String($(n.key));
      r.push(i);
    } else if (Je(e[s - 2])) {
      const i = e[s - 2].content.indexOf(n);
      r.push(i);
    }
    return r;
  }, []);
};
class LN {
  constructor({
    modelPropertyMacro: e,
    options: r
  }) {
    A(this, "modelPropertyMacro");
    A(this, "options");
    A(this, "SchemaElement", {
      leave: (e, r, n, s, i) => {
        typeof e.properties > "u" || le(e.properties) && e.properties.forEach((o) => {
          if (le(o))
            try {
              const u = this.modelPropertyMacro($(o));
              o.set("default", u);
            } catch (u) {
              var a, c;
              const h = new Error(u, {
                cause: u
              });
              h.fullPath = [...it([...i, n, e]), "properties"], (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, h);
            }
        });
      }
    });
    this.modelPropertyMacro = e, this.options = r;
  }
}
class VN {
  constructor({
    options: e
  }) {
    A(this, "options");
    A(this, "SchemaElement", {
      leave(e, r, n, s, i) {
        if (typeof e.allOf > "u") return;
        if (!Je(e.allOf)) {
          var o, a;
          const l = new TypeError("allOf must be an array");
          l.fullPath = [...it([...i, n, e]), "allOf"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, l);
          return;
        }
        if (e.allOf.isEmpty) {
          e.remove("allOf");
          return;
        }
        if (!e.allOf.content.every(Kt)) {
          var u, h;
          const l = new TypeError("Elements in allOf must be objects");
          l.fullPath = [...it([...i, n, e]), "allOf"], (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (h = u.push) === null || h === void 0 || h.call(u, l);
          return;
        }
        for (; e.hasKey("allOf"); ) {
          const {
            allOf: l
          } = e;
          e.remove("allOf");
          const d = gt.all([...l.content, e]);
          if (e.hasKey("$$ref") || d.remove("$$ref"), e.hasKey("example")) {
            const f = d.getMember("example");
            f && (f.value = e.get("example"));
          }
          if (e.hasKey("examples")) {
            const f = d.getMember("examples");
            f && (f.value = e.get("examples"));
          }
          e.content = d.content;
        }
      }
    });
    this.options = e;
  }
}
var or;
class BN {
  constructor({
    parameterMacro: e,
    options: r
  }) {
    A(this, "parameterMacro");
    A(this, "options");
    fn(this, or);
    A(this, "OperationElement", {
      enter: (e) => {
        jr(this, or, e);
      },
      leave: () => {
        jr(this, or, void 0);
      }
    });
    A(this, "ParameterElement", {
      leave: (e, r, n, s, i) => {
        const o = Ne(this, or) ? $(Ne(this, or)) : null, a = $(e);
        try {
          const h = this.parameterMacro(o, a);
          e.set("default", h);
        } catch (h) {
          var c, u;
          const l = new Error(h, {
            cause: h
          });
          l.fullPath = it([...i, n]), (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, l);
        }
      }
    });
    this.parameterMacro = e, this.options = r;
  }
}
or = new WeakMap();
const $s = (t) => {
  if (t.cause == null) return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
};
class UN extends ct {
}
const {
  wrapError: Tf
} = Vp, Rf = Oe[Symbol.for("nodejs.util.promisify.custom")], tt = new Np(), rr = (t, e, r, n) => {
  pt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class Sn extends qr {
  constructor({
    allowMetaPatches: r = !0,
    useCircularStructures: n = !1,
    basePath: s = null,
    ...i
  }) {
    super(i);
    A(this, "useCircularStructures");
    A(this, "allowMetaPatches");
    A(this, "basePath");
    this.allowMetaPatches = r, this.useCircularStructures = n, this.basePath = s;
  }
  async ReferenceElement(r, n, s, i, o, a) {
    try {
      if (this.indirections.includes(r))
        return !1;
      const [m, p] = this.toAncestorLineage([...o, s]), y = this.toBaseURI($(r.$ref)), g = fe(this.reference.uri) === y, v = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && v)
        return !1;
      const b = await this.toReference($(r.$ref)), x = Pe(y, $(r.$ref));
      this.indirections.push(r);
      const E = Tr(x);
      let O = vn(E, b.value.result);
      if (O.id = tt.identify(O), lr(O)) {
        const k = $(r.meta.get("referenced-element")), S = `${k}-${$(tt.identify(O))}`;
        this.refractCache.has(S) ? O = this.refractCache.get(S) : pe(O) ? (O = tr.refract(O), O.setMetaProperty("referenced-element", k), this.refractCache.set(S, O)) : (O = this.namespace.getElementClass(k).refract(O), this.refractCache.set(S, O));
      }
      if (r === O)
        throw new ye("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(O)) {
        if (b.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, u;
          const k = new w.RefElement(O.id, {
            type: "reference",
            uri: b.uri,
            $ref: $(r.$ref),
            baseURI: x,
            referencingElement: r
          }), R = ((c = (u = this.options.dereference.strategyOpts["openapi-3-1"]) === null || u === void 0 ? void 0 : u.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(k);
          return a.replaceWith(k, rr), s ? !1 : R;
        }
      }
      const j = fe(b.refSet.rootRef.uri) !== b.uri, _ = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || j || Er(O) || _) && !m.includesCycle(O)) {
        var h;
        p.add(r);
        const k = new Sn({
          reference: b,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (h = this.basePath) !== null && h !== void 0 ? h : [...it([...o, s, r]), "$ref"]
        });
        O = await Rf(O, k, {
          keyMap: vt,
          nodeTypeGetter: at
        }), p.delete(r);
      }
      this.indirections.pop();
      const P = Be(O);
      if (P.setMetaProperty("ref-fields", {
        $ref: $(r.$ref),
        description: $(r.description),
        summary: $(r.summary)
      }), P.setMetaProperty("ref-origin", b.uri), P.setMetaProperty("ref-referencing-element-id", q(tt.identify(r))), le(O) && (r.hasKey("description") && "description" in O && (P.remove("description"), P.set("description", r.get("description"))), r.hasKey("summary") && "summary" in O && (P.remove("summary"), P.set("summary", r.get("summary")))), this.allowMetaPatches && le(P) && !P.hasKey("$$ref")) {
        const k = Pe(y, x);
        P.set("$$ref", k);
      }
      return a.replaceWith(P, rr), s ? !1 : P;
    } catch (m) {
      var l, d, f;
      const p = $s(m), y = Tf(p, {
        baseDoc: this.reference.uri,
        $ref: $(r.$ref),
        pointer: Tr($(r.$ref)),
        fullPath: (l = this.basePath) !== null && l !== void 0 ? l : [...it([...o, s, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (f = d.push) === null || f === void 0 || f.call(d, y);
      return;
    }
  }
  async PathItemElement(r, n, s, i, o, a) {
    try {
      if (!z(r.$ref))
        return;
      if (this.indirections.includes(r) || Eo(["cycle"], r.$ref))
        return !1;
      const [m, p] = this.toAncestorLineage([...o, s]), y = this.toBaseURI($(r.$ref)), g = fe(this.reference.uri) === y, v = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && v)
        return;
      const b = await this.toReference($(r.$ref)), x = Pe(y, $(r.$ref));
      this.indirections.push(r);
      const E = Tr(x);
      let O = vn(E, b.value.result);
      if (O.id = tt.identify(O), lr(O)) {
        const P = `path-item-${$(tt.identify(O))}`;
        this.refractCache.has(P) ? O = this.refractCache.get(P) : (O = Gt.refract(O), this.refractCache.set(P, O));
      }
      if (r === O)
        throw new ye("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(O)) {
        if (b.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, u;
          const P = new w.RefElement(O.id, {
            type: "path-item",
            uri: b.uri,
            $ref: $(r.$ref),
            baseURI: x,
            referencingElement: r
          }), S = ((c = (u = this.options.dereference.strategyOpts["openapi-3-1"]) === null || u === void 0 ? void 0 : u.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(P);
          return a.replaceWith(P, rr), s ? !1 : S;
        }
      }
      const j = fe(b.refSet.rootRef.uri) !== b.uri, _ = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || j || mr(O) && z(O.$ref) || _) && !m.includesCycle(O)) {
        var h;
        p.add(r);
        const P = new Sn({
          reference: b,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (h = this.basePath) !== null && h !== void 0 ? h : [...it([...o, s, r]), "$ref"]
        });
        O = await Rf(O, P, {
          keyMap: vt,
          nodeTypeGetter: at
        }), p.delete(r);
      }
      if (this.indirections.pop(), mr(O)) {
        const P = new Gt([...O.content], q(O.meta), q(O.attributes));
        if (r.forEach((k, S, R) => {
          P.remove($(S)), P.content.push(R);
        }), P.remove("$ref"), P.setMetaProperty("ref-fields", {
          $ref: $(r.$ref)
        }), P.setMetaProperty("ref-origin", b.uri), P.setMetaProperty("ref-referencing-element-id", q(tt.identify(r))), this.allowMetaPatches && typeof P.get("$$ref") > "u") {
          const k = Pe(y, x);
          P.set("$$ref", k);
        }
        O = P;
      }
      return a.replaceWith(O, rr), s ? void 0 : O;
    } catch (m) {
      var l, d, f;
      const p = $s(m), y = Tf(p, {
        baseDoc: this.reference.uri,
        $ref: $(r.$ref),
        pointer: Tr($(r.$ref)),
        fullPath: (l = this.basePath) !== null && l !== void 0 ? l : [...it([...o, s, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (f = d.push) === null || f === void 0 || f.call(d, y);
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
      let y = await this.toReference(ot(this.reference.uri)), {
        uri: g
      } = y;
      const v = Vw(g, r), b = fe(v), x = new _n({
        uri: b
      }), E = !this.options.resolve.resolvers.some((R) => R.canRead(x)), O = !E;
      let j = fe(this.reference.uri) === v, _ = !j;
      this.indirections.push(r);
      let P;
      try {
        if (E || O) {
          g = this.toBaseURI(v);
          const R = v, I = De(y.value.result);
          if (P = oa(R, I), P = De(P), P.id = tt.identify(P), !this.options.resolve.internal && j || !this.options.resolve.external && _)
            return;
        } else {
          if (g = this.toBaseURI(v), j = fe(this.reference.uri) === g, _ = !j, !this.options.resolve.internal && j || !this.options.resolve.external && _)
            return;
          y = await this.toReference(ot(v));
          const R = Tr(v), I = De(y.value.result);
          P = vn(R, I), P = De(P), P.id = tt.identify(P);
        }
      } catch (R) {
        if (O && R instanceof qp)
          if (ia(Xr(v))) {
            if (j = fe(this.reference.uri) === g, _ = !j, !this.options.resolve.internal && j || !this.options.resolve.external && _)
              return;
            y = await this.toReference(ot(v));
            const I = Xr(v), L = De(y.value.result);
            P = ld(I, L), P = De(P), P.id = tt.identify(P);
          } else {
            if (g = this.toBaseURI($(v)), j = fe(this.reference.uri) === g, _ = !j, !this.options.resolve.internal && j || !this.options.resolve.external && _)
              return;
            y = await this.toReference(ot(v));
            const I = Tr(v), L = De(y.value.result);
            P = vn(I, L), P = De(P), P.id = tt.identify(P);
          }
        else
          throw R;
      }
      if (r === P)
        throw new ye("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Nr(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(P)) {
        if (y.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, u;
          const R = new w.RefElement(P.id, {
            type: "json-schema",
            uri: y.uri,
            $ref: $(r.$ref),
            baseURI: Pe(g, v),
            referencingElement: r
          }), L = ((c = (u = this.options.dereference.strategyOpts["openapi-3-1"]) === null || u === void 0 ? void 0 : u.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(R);
          return a.replaceWith(L, rr), s ? !1 : L;
        }
      }
      const k = fe(y.refSet.rootRef.uri) !== y.uri, S = ["error", "replace"].includes(this.options.dereference.circular);
      if ((_ || k || Kt(P) && z(P.$ref) || S) && !m.includesCycle(P)) {
        var h;
        p.add(r);
        const R = new Sn({
          reference: y,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: m,
          basePath: (h = this.basePath) !== null && h !== void 0 ? h : [...it([...o, s, r]), "$ref"]
        });
        P = await Rf(P, R, {
          keyMap: vt,
          nodeTypeGetter: at
        }), p.delete(r);
      }
      if (this.indirections.pop(), ud(P)) {
        const R = q(P);
        return R.setMetaProperty("ref-fields", {
          $ref: $(r.$ref)
        }), R.setMetaProperty("ref-origin", y.uri), R.setMetaProperty("ref-referencing-element-id", q(tt.identify(r))), a.replaceWith(R, rr), s ? !1 : R;
      }
      if (Kt(P)) {
        const R = new wr([...P.content], q(P.meta), q(P.attributes));
        if (r.forEach((I, L, G) => {
          R.remove($(L)), R.content.push(G);
        }), R.remove("$ref"), R.setMetaProperty("ref-fields", {
          $ref: $(r.$ref)
        }), R.setMetaProperty("ref-origin", y.uri), R.setMetaProperty("ref-referencing-element-id", q(tt.identify(r))), this.allowMetaPatches && typeof R.get("$$ref") > "u") {
          const I = Pe(g, v);
          R.set("$$ref", I);
        }
        P = R;
      }
      return a.replaceWith(P, rr), s ? void 0 : P;
    } catch (m) {
      var l, d, f;
      const p = $s(m), y = new UN(`Could not resolve reference: ${p.message}`, {
        baseDoc: this.reference.uri,
        $ref: $(r.$ref),
        fullPath: (l = this.basePath) !== null && l !== void 0 ? l : [...it([...o, s, r]), "$ref"],
        cause: p
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (f = d.push) === null || f === void 0 || f.call(d, y);
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
      var c, u, h;
      const d = $s(l), f = Tf(d, {
        baseDoc: this.reference.uri,
        externalValue: $(r.externalValue),
        fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...it([...o, s, r]), "externalValue"]
      });
      (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (h = u.push) === null || h === void 0 || h.call(u, f);
      return;
    }
  }
}
const JN = jo[Symbol.for("nodejs.util.promisify.custom")];
class HN {
  constructor({
    parameterMacro: e,
    modelPropertyMacro: r,
    mode: n,
    options: s,
    ...i
  }) {
    const o = [];
    o.push(new Sn({
      ...i,
      options: s
    })), typeof r == "function" && o.push(new LN({
      modelPropertyMacro: r,
      options: s
    })), n !== "strict" && o.push(new VN({
      options: s
    })), typeof e == "function" && o.push(new BN({
      parameterMacro: e,
      options: s
    }));
    const a = JN(o, {
      nodeTypeGetter: at
    });
    Object.assign(this, a);
  }
}
const GN = Oe[Symbol.for("nodejs.util.promisify.custom")];
class Bw extends DN {
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
    A(this, "allowMetaPatches");
    A(this, "parameterMacro");
    A(this, "modelPropertyMacro");
    A(this, "mode");
    A(this, "ancestors");
    this.name = "openapi-3-1-swagger-client", this.allowMetaPatches = r, this.parameterMacro = n, this.modelPropertyMacro = s, this.mode = i, this.ancestors = [...o];
  }
  async dereference(r, n) {
    var s;
    const i = Dt(cd), o = (s = n.dereference.refSet) !== null && s !== void 0 ? s : new Kr(), a = new Kr();
    let c = o, u;
    o.has(r.uri) ? u = o.find((d) => d.uri === r.uri) : (u = new Tt({
      uri: r.uri,
      value: r.parseResult
    }), o.add(u)), n.dereference.immutable && (o.refs.map((d) => new Tt({
      ...d,
      value: q(d.value)
    })).forEach((d) => a.add(d)), u = a.find((d) => d.uri === r.uri), c = a);
    const h = new HN({
      reference: u,
      namespace: i,
      options: n,
      allowMetaPatches: this.allowMetaPatches,
      ancestors: this.ancestors,
      modelPropertyMacro: this.modelPropertyMacro,
      mode: this.mode,
      parameterMacro: this.parameterMacro
    }), l = await GN(c.rootRef.value, h, {
      keyMap: vt,
      nodeTypeGetter: at
    });
    return n.dereference.immutable && a.refs.filter((d) => d.uri.startsWith("immutable://")).map((d) => new Tt({
      ...d,
      uri: d.uri.replace(/^immutable:\/\//, "")
    })).forEach((d) => o.add(d)), n.dereference.refSet === null && o.clean(), a.clean(), l;
  }
}
const KN = (t) => {
  const e = $(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
  return new w.ObjectElement({
    $ref: e
  }, q(r.meta), q(r.attributes));
}, aa = async (t) => {
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
    parameterMacro: h = null,
    modelPropertyMacro: l = null,
    mode: d = "non-strict",
    strategies: f
  } = t;
  try {
    const {
      cache: m
    } = aa, p = f.find((G) => G.match(e)), y = po(Zs()) ? Zs() : Ds, g = Hh(t), v = Pe(y, g);
    let b;
    m.has(e) ? b = m.get(e) : (b = er.refract(e), b.classes.push("result"), m.set(e, b));
    const x = new lt([b]), E = xC(o), O = E === "" ? "" : `#${E}`, j = vn(E, b), _ = new Tt({
      uri: v,
      value: x
    }), P = new Kr({
      refs: [_]
    });
    E !== "" && (P.rootRef = void 0);
    const k = [/* @__PURE__ */ new Set([j])], S = [], R = await e$(j, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${v}${O}`,
        resolvers: [new kw({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [new CN()]
      },
      parse: {
        mediaType: Wr.latest(),
        parsers: [new qw({
          allowEmpty: !1,
          sourceMap: !1
        }), new Lw({
          allowEmpty: !1,
          sourceMap: !1
        }), new Nw({
          allowEmpty: !1,
          sourceMap: !1
        }), new Dw({
          allowEmpty: !1,
          sourceMap: !1
        }), new $N({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [new Bw({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: h,
          modelPropertyMacro: l,
          mode: d,
          ancestors: k
        })],
        refSet: P,
        dereferenceOpts: {
          errors: S
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? JS.dereference.circularReplacer : KN
      }
    }), I = q_(j, R, b), L = u ? I : p.normalize(I);
    return {
      spec: $(L),
      errors: S
    };
  } catch (m) {
    if (m instanceof W$ || m instanceof Xf)
      return {
        spec: e,
        errors: []
      };
    throw m;
  }
};
aa.cache = /* @__PURE__ */ new WeakMap();
const _b = (t) => {
  if (!le(t)) return t;
  const e = [qM({
    operationIdNormalizer: (n, s, i) => zn({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), MM(), kM(), LM(), VM()];
  return Et(t, e, {
    toolboxCreator: Mw,
    visitorOptions: {
      keyMap: vt,
      nodeTypeGetter: at
    }
  });
}, zN = (t) => (e) => {
  const r = er.refract(e);
  r.classes.push("result");
  const n = t(r), s = $(n);
  return aa.cache.set(s, n), $(n);
}, WN = {
  name: "openapi-3-1-apidom",
  match(t) {
    return Hp(t);
  },
  normalize(t) {
    if (!ge(t) && _t(t) && !t.$$normalized) {
      const e = zN(_b)(t);
      return e.$$normalized = !0, e;
    }
    return ge(t) ? _b(t) : t;
  },
  async resolve(t) {
    return aa(t);
  }
};
function Uw(t, e, r) {
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
function YN(t, e) {
  return Uw(t, e, !0) || null;
}
function Jw(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function XN(t, e) {
  return !t || !t.paths ? null : YN(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = zn(s, r, n), a = Jw(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: QN
} = _T, ZN = () => null, eD = (t) => Array.isArray(t) ? t : [t], $b = {
  mapTagOperations: nD,
  makeExecute: tD
};
function tD(t = {}) {
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
function rD(t = {}) {
  const e = $b.makeExecute(t);
  return {
    apis: $b.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function nD({
  spec: t,
  cb: e = ZN,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return Uw(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? eD(c.tags) : [r]).forEach((h) => {
      if (typeof h != "string")
        return;
      i[h] = i[h] || {};
      const l = i[h], d = zn(c, o, a, {
        v2OperationIdCompatibilityMode: n
      }), f = e({
        spec: t,
        pathName: o,
        method: a,
        operation: c,
        operationId: d
      });
      if (s[d])
        s[d] += 1, l[`${d}${s[d]}`] = f;
      else if (typeof l[d] < "u") {
        const m = s[d] || 1;
        s[d] = m + 1, l[`${d}${s[d]}`] = f;
        const p = l[d];
        delete l[d], l[`${d}${m}`] = p;
      } else
        l[d] = f;
    });
  }), i;
}
function sD() {
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
const iD = (t, e, r, n, s) => {
  if (t === Y.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-url-template", Ze.charsToString(e, r, n)]);
  }
  return Y.SEM_OK;
}, oD = (t, e, r, n, s) => {
  if (t === Y.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable", Ze.charsToString(e, r, n)]);
  }
  return Y.SEM_OK;
}, aD = (t, e, r, n, s) => {
  if (t === Y.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable-name", Ze.charsToString(e, r, n)]);
  }
  return Y.SEM_OK;
}, cD = (t, e, r, n, s) => {
  if (t === Y.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["literals", Ze.charsToString(e, r, n)]);
  }
  return Y.SEM_OK;
}, uD = new sD(), Hw = (t) => {
  const e = new st();
  return e.ast = new Wp(), e.ast.callbacks["server-url-template"] = iD, e.ast.callbacks["server-variable"] = oD, e.ast.callbacks["server-variable-name"] = aD, e.ast.callbacks.literals = cD, {
    result: e.parse(uD, "server-url-template", t),
    ast: e.ast
  };
}, lD = (t, {
  strict: e = !1
} = {}) => {
  try {
    const r = Hw(t);
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
}, fD = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, hD = (t) => fD(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), pD = ["literals", "server-variable-name"], dD = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: hD
    },
    ...r
  }, i = Hw(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => pD.includes(c)).map(([c, u]) => c === "server-variable-name" ? Object.hasOwn(e, u) ? s.encoder(e[u], u) : `{${u}}` : u).join("");
};
function Gw() {
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
const mD = (t, e, r, n, s) => (t === Y.SEM_PRE && s.push(["slash", Ze.charsToString(e, r, n)]), Y.SEM_OK), yD = (t, e, r, n, s) => {
  if (t === Y.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["path-template", Ze.charsToString(e, r, n)]);
  }
  return Y.SEM_OK;
}, vD = (t, e, r, n, s) => (t === Y.SEM_PRE && s.push(["path-literal", Ze.charsToString(e, r, n)]), Y.SEM_OK), gD = (t, e, r, n, s) => (t === Y.SEM_PRE && s.push(["template-expression", Ze.charsToString(e, r, n)]), Y.SEM_OK), bD = (t, e, r, n, s) => (t === Y.SEM_PRE && s.push(["template-expression-param-name", Ze.charsToString(e, r, n)]), Y.SEM_OK), xD = new Gw(), SD = (t) => {
  const e = new st();
  return e.ast = new Wp(), e.ast.callbacks["path-template"] = yD, e.ast.callbacks.slash = mD, e.ast.callbacks["path-literal"] = vD, e.ast.callbacks["template-expression"] = gD, e.ast.callbacks["template-expression-param-name"] = bD, {
    result: e.parse(xD, "path-template", t),
    ast: e.ast
  };
}, OD = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, wD = (t) => OD(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), ED = ["slash", "path-literal", "template-expression-param-name"], Ih = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: wD
    },
    ...r
  }, i = SD(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => ED.includes(c)).map(([c, u]) => c === "template-expression-param-name" ? Object.prototype.hasOwnProperty.call(e, u) ? s.encoder(e[u], u) : `{${u}}` : u).join("");
};
new Gw();
new st();
const AD = {
  body: jD,
  header: TD,
  query: _D,
  path: RD,
  formData: PD
};
function jD({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function PD({
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
function TD({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function RD({
  req: t,
  value: e,
  parameter: r,
  baseURL: n
}) {
  if (e !== void 0) {
    const s = t.url.replace(n, ""), i = Ih(s, {
      [r.name]: e
    });
    t.url = n + i;
  }
}
function _D({
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
function ca(t, e) {
  return e.includes("application/json") ? typeof t == "string" ? t : (Array.isArray(t) && (t = t.map((r) => {
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  })), JSON.stringify(t)) : String(t);
}
function Rs() {
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
new Rs();
const $D = (t) => {
  if (typeof t != "string" || [...t].length !== 1)
    throw new TypeError("Input must be a single character string.");
  const e = t.codePointAt(0);
  return e <= 127 ? `%${e.toString(16).toUpperCase().padStart(2, "0")}` : encodeURIComponent(t);
}, CD = (t) => t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, ""), ua = (t) => t.length >= 2 && t.startsWith('"') && t.endsWith('"'), Kw = (t) => ua(t) ? t.slice(1, -1) : t, zw = (t) => `"${t}"`, Ww = (t) => t, ID = new st(), FD = new Rs(), fd = (t, {
  strict: e = !0,
  quoted: r = null
} = {}) => {
  try {
    const n = e ? "cookie-value" : "lenient-cookie-value", s = ID.parse(FD, n, t);
    return typeof r == "boolean" ? s.success && r === ua(t) : s.success;
  } catch {
    return !1;
  }
}, Yw = (t) => {
  const r = new TextEncoder().encode(t).reduce((n, s) => n + String.fromCharCode(s), "");
  return btoa(r);
}, MD = (t, e = Yw) => {
  const r = String(t);
  if (fd(r)) return r;
  const n = ua(r), s = n ? Kw(r) : r, i = e(s);
  return n ? zw(i) : i;
}, kD = (t) => CD(Yw(t)), ND = (t) => MD(t, kD), DD = new st(), qD = new Rs(), Xw = (t, {
  strict: e = !0
} = {}) => {
  try {
    const r = e ? "cookie-name" : "lenient-cookie-name";
    return DD.parse(qD, r, t).success;
  } catch {
    return !1;
  }
}, LD = (t) => {
  if (!Xw(t))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, Qw = (t) => {
  if (!fd(t))
    throw new TypeError(`Invalid cookie value: ${t}`);
}, Cb = {
  encoders: {
    name: Ww,
    value: ND
  },
  validators: {
    name: LD,
    value: Qw
  }
}, VD = (t, e, r = {}) => {
  const n = {
    ...r,
    encoders: {
      ...Cb.encoders,
      ...r.encoders
    },
    validators: {
      ...Cb.validators,
      ...r.validators
    }
  }, s = n.encoders.name(t), i = n.encoders.value(e);
  return n.validators.name(s), n.validators.value(i), `${s}=${i}`;
}, BD = (t, e = {}) => (Array.isArray(t) ? t : typeof t == "object" && t !== null ? Object.entries(t) : []).map(([n, s]) => VD(n, s, e)).join("; "), UD = new st(), JD = new Rs(), HD = (t) => {
  const e = String(t);
  if (fd(e)) return e;
  const r = ua(e), n = r ? Kw(e) : e;
  let s = "";
  for (const i of n)
    s += UD.parse(JD, "cookie-octet", i).success ? i : $D(i);
  return r ? zw(s) : s;
};
new st();
new Rs();
const GD = (t) => {
  if (!Xw(t, {
    strict: !1
  }))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, KD = "%3D", zD = "%26", WD = (t) => HD(t).replace(/[=&]/gu, (e) => e === "=" ? KD : zD), Fh = (t, e = {}) => BD(t, ao({
  encoders: {
    name: Ww,
    value: WD
  },
  validators: {
    name: GD,
    value: Qw
  }
}, e));
function YD({
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
    const h = Object.keys(a)[0];
    u = Ih(c, {
      [s]: e
    }, {
      encoder: (l) => Db(ca(l, h))
    });
  } else
    u = Ih(c, {
      [s]: e
    }, {
      encoder: (h) => Nh({
        key: r.name,
        value: h,
        style: i || "simple",
        explode: o ?? !1,
        escape: "reserved"
      })
    });
  t.url = n + u;
}
function XD({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const n = Object.keys(r.content)[0], s = ca(e, n);
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
const QD = ["accept", "authorization", "content-type"];
function ZD({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(QD.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = ca(r, n);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = Nh({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function eq({
  req: t,
  parameter: e,
  value: r
}) {
  const {
    name: n
  } = e;
  if (t.headers = t.headers || {}, r !== void 0 && e.content) {
    const i = Object.keys(e.content)[0], o = ca(r, i);
    t.headers.Cookie = Fh({
      [n]: o
    });
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    var s;
    const i = Nh({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: (s = e.explode) !== null && s !== void 0 ? s : !1
    }), o = Array.isArray(r) && e.explode ? `${n}=${i}` : i;
    t.headers.Cookie = Fh({
      [n]: o
    });
  }
}
const tq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: eq,
  header: ZD,
  path: YD,
  query: XD
}, Symbol.toStringTag, { value: "Module" })), rq = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: Zw
} = rq;
function nq(t, e) {
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
  e = sq({
    request: e,
    securities: s,
    operation: r,
    spec: i
  });
  const c = r.requestBody || {}, u = Object.keys(c.content || {}), h = a && u.indexOf(a) > -1;
  if (n || o) {
    if (a && h)
      e.headers["Content-Type"] = a;
    else if (!a) {
      const p = u[0];
      p && (e.headers["Content-Type"] = p, a = p);
    }
  } else a && h && (e.headers["Content-Type"] = a);
  if (!t.responseContentType && r.responses) {
    const p = Object.entries(r.responses).filter(([y, g]) => {
      const v = parseInt(y, 10);
      return v >= 200 && v < 300 && _t(g.content);
    }).reduce((y, [, g]) => y.concat(Object.keys(g.content)), []);
    p.length > 0 && (e.headers.accept = p.join(", "));
  }
  if (n)
    if (a) {
      if (u.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof n == "object") {
            var l, d;
            const p = (l = (d = c.content[a]) === null || d === void 0 ? void 0 : d.encoding) !== null && l !== void 0 ? l : {};
            e.form = {}, Object.keys(n).forEach((y) => {
              let g;
              try {
                g = JSON.parse(n[y]);
              } catch {
                g = n[y];
              }
              e.form[y] = {
                value: g,
                encoding: p[y] || {}
              };
            });
          } else if (typeof n == "string") {
            var f, m;
            const p = (f = (m = c.content[a]) === null || m === void 0 ? void 0 : m.encoding) !== null && f !== void 0 ? f : {};
            try {
              e.form = {};
              const y = JSON.parse(n);
              Object.entries(y).forEach(([g, v]) => {
                e.form[g] = {
                  value: v,
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
function sq({
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
  return i.headers = i.headers || {}, i.query = i.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((h) => {
    Object.keys(h).forEach((l) => {
      const d = o[l], f = u[l];
      if (!d)
        return;
      const m = d.value || d, {
        type: p
      } = f;
      if (d) {
        if (p === "apiKey")
          f.in === "query" && (i.query[f.name] = m), f.in === "header" && (i.headers[f.name] = m), f.in === "cookie" && (i.cookies[f.name] = m);
        else if (p === "http") {
          if (/^basic$/i.test(f.scheme)) {
            const y = m.username || "", g = m.password || "", v = Zw(`${y}:${g}`);
            i.headers.Authorization = `Basic ${v}`;
          }
          /^bearer$/i.test(f.scheme) && (i.headers.Authorization = `Bearer ${m}`);
        } else if (p === "oauth2" || p === "openIdConnect") {
          const y = d.token || {}, g = f["x-tokenName"] || "access_token", v = y[g];
          let b = y.token_type;
          (!b || b.toLowerCase() === "bearer") && (b = "Bearer"), i.headers.Authorization = `${b} ${v}`;
        }
      }
    });
  }), i);
}
function iq(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = oq({
    request: e,
    securities: s,
    operation: n,
    spec: r
  }), e.body || e.form || a)
    i ? e.headers["Content-Type"] = i : Array.isArray(n.consumes) ? [e.headers["Content-Type"]] = n.consumes : Array.isArray(r.consumes) ? [e.headers["Content-Type"]] = r.consumes : n.parameters && n.parameters.filter((c) => c.type === "file").length ? e.headers["Content-Type"] = "multipart/form-data" : n.parameters && n.parameters.filter((c) => c.in === "formData").length && (e.headers["Content-Type"] = "application/x-www-form-urlencoded");
  else if (i) {
    const c = n.parameters && n.parameters.filter((h) => h.in === "body").length > 0, u = n.parameters && n.parameters.filter((h) => h.in === "formData").length > 0;
    (c || u) && (e.headers["Content-Type"] = i);
  }
  return !o && Array.isArray(n.produces) && n.produces.length > 0 && (e.headers.accept = n.produces.join(", ")), e;
}
function oq({
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
  return s.headers = s.headers || {}, s.query = s.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((h) => {
    Object.keys(h).forEach((l) => {
      const d = i[l];
      if (!d)
        return;
      const {
        token: f
      } = d, m = d.value || d, p = u[l], {
        type: y
      } = p, g = p["x-tokenName"] || "access_token", v = f && f[g];
      let b = f && f.token_type;
      if (d)
        if (y === "apiKey") {
          const x = p.in === "query" ? "query" : "headers";
          s[x] = s[x] || {}, s[x][p.name] = m;
        } else if (y === "basic")
          if (m.header)
            s.headers.authorization = m.header;
          else {
            const x = m.username || "", E = m.password || "";
            m.base64 = Zw(`${x}:${E}`), s.headers.authorization = `Basic ${m.base64}`;
          }
        else y === "oauth2" && v && (b = !b || b.toLowerCase() === "bearer" ? "Bearer" : b, s.headers.authorization = `${b} ${v}`);
    });
  }), s);
}
const Ib = (t) => Array.isArray(t) ? t : [], On = (t, {
  recurse: e = !0,
  depth: r = 1
} = {}) => {
  if (_t(t)) {
    if (t.type === "object" || t.type === "array" || Array.isArray(t.type) && (t.type.includes("object") || t.type.includes("array")))
      return t;
    if (!(r > kb) && e) {
      const n = Array.isArray(t.oneOf) ? t.oneOf.find((i) => On(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (n) return n;
      const s = Array.isArray(t.anyOf) ? t.anyOf.find((i) => On(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (s) return s;
    }
  }
}, _f = ({
  value: t,
  silentFail: e = !1
}) => {
  try {
    const r = JSON.parse(t);
    if (_t(r) || Array.isArray(r))
      return r;
    if (!e)
      throw new Error("Expected JSON serialized object or array");
  } catch {
    if (!e)
      throw new Error("Could not parse parameter value string as JSON Object or JSON Array");
  }
  return t;
}, Ns = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, Ds), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
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
class aq extends ct {
}
const cq = (t, e) => e.filter((r) => r.name === t), uq = (t) => {
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
}, lq = {
  buildRequest: eE
};
function fq({
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
  const u = t || e || Jr;
  s && i && !n && (n = Jw(s, i));
  const h = lq.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: u,
    ...c
  });
  return h.body && (_t(h.body) || Array.isArray(h.body)) && (h.body = JSON.stringify(h.body)), u(h);
}
function eE(t) {
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
    serverVariables: h,
    http: l,
    signal: d,
    serverVariableEncoder: f
  } = t;
  let {
    parameters: m,
    parameterBuilders: p,
    baseURL: y
  } = t;
  const g = Gp(e);
  p || (g ? p = tq : p = AD);
  let b = {
    url: "",
    credentials: l && l.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  d && (b.signal = d), i && (b.requestInterceptor = i), o && (b.responseInterceptor = o), c && (b.userFetch = c);
  const x = XN(e, r);
  if (!x)
    throw new aq(`Operation ${r} not found`);
  const {
    operation: E = {},
    method: O,
    pathName: j
  } = x;
  if (y = y ?? tE({
    spec: e,
    scheme: s,
    contextUrl: a,
    server: u,
    serverVariables: h,
    pathName: j,
    method: O,
    serverVariableEncoder: f
  }), b.url += y, !r)
    return delete b.cookies, b;
  b.url += j, b.method = `${O}`.toUpperCase(), m = m || {};
  const _ = e.paths[j] || {};
  n && (b.headers.accept = n);
  const P = uq([].concat(Ib(E.parameters)).concat(Ib(_.parameters)));
  P.forEach((S) => {
    const R = p[S.in];
    let I;
    if (S.in === "body" && S.schema && S.schema.properties && (I = m), I = S && S.name && m[S.name], typeof I > "u" ? I = S && S.name && m[`${S.in}.${S.name}`] : cq(S.name, P).length > 1 && console.warn(`Parameter '${S.name}' is ambiguous because the defined spec has more than one parameter with the name: '${S.name}' and the passed-in parameter values did not define an 'in' value.`), I !== null) {
      if (typeof S.default < "u" && typeof I > "u" && (I = S.default), typeof I > "u" && S.required && !S.allowEmptyValue)
        throw new Error(`Required parameter ${S.name} is not provided`);
      g && typeof I == "string" && (bn("type", S.schema) && typeof S.schema.type == "string" && On(S.schema, {
        recurse: !1
      }) ? I = _f({
        value: I,
        silentFail: !1
      }) : bn("type", S.schema) && Array.isArray(S.schema.type) && On(S.schema, {
        recurse: !1
      }) ? I = _f({
        value: I,
        silentFail: !0
      }) : !bn("type", S.schema) && On(S.schema, {
        recurse: !0
      }) && (I = _f({
        value: I,
        silentFail: !0
      }))), R && R({
        req: b,
        parameter: S,
        value: I,
        operation: E,
        spec: e,
        baseURL: y
      });
    }
  });
  const k = {
    ...t,
    operation: E
  };
  if (g ? b = nq(k, b) : b = iq(k, b), b.cookies && Object.keys(b.cookies).length > 0) {
    const S = Fh(b.cookies);
    lo(b.headers.Cookie) ? b.headers.Cookie += `; ${S}` : b.headers.Cookie = S;
  }
  return b.cookies && delete b.cookies, Dh(b);
}
const Mh = (t) => t ? t.replace(/\W/g, "") : null;
function tE(t) {
  return Gp(t.spec) ? hq(t) : dq(t);
}
const $f = (t) => Array.isArray(t) && t.length > 0;
function hq({
  spec: t,
  pathName: e,
  method: r,
  server: n,
  contextUrl: s,
  serverVariables: i = {},
  serverVariableEncoder: o
}) {
  var a, c;
  let u = [], h = "", l;
  const d = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 || (a = a[(r || "").toLowerCase()]) === null || a === void 0 ? void 0 : a.servers, f = t == null || (c = t.paths) === null || c === void 0 || (c = c[e]) === null || c === void 0 ? void 0 : c.servers, m = t == null ? void 0 : t.servers;
  if (u = $f(d) ? d : $f(f) ? f : $f(m) ? m : [Mb], n && (l = u.find((p) => p.url === n), l && (h = n)), h || ([l] = u, h = l.url), lD(h, {
    strict: !0
  })) {
    const p = Object.entries({
      ...l.variables
    }).reduce((y, [g, v]) => (y[g] = v.default, y), {});
    h = dD(h, {
      ...p,
      ...i
    }, {
      encoder: typeof o == "function" ? o : jS
    });
  }
  return pq(h, s);
}
function pq(t = "", e = "") {
  const r = Ns(t && e ? Pe(e, t) : t), n = Ns(e), s = Mh(r.protocol) || Mh(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function dq({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = Ns(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || Mh(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
ie.http = Jr;
ie.makeHttp = V1.bind(null, ie.http);
ie.resolveStrategies = {
  "openapi-3-1-apidom": WN,
  "openapi-3-0": zO,
  "openapi-2-0": KO,
  generic: JO
};
ie.resolve = WO({
  strategies: [ie.resolveStrategies["openapi-3-1-apidom"], ie.resolveStrategies["openapi-3-0"], ie.resolveStrategies["openapi-2-0"], ie.resolveStrategies.generic]
});
ie.resolveSubtree = z$({
  strategies: [ie.resolveStrategies["openapi-3-1-apidom"], ie.resolveStrategies["openapi-3-0"], ie.resolveStrategies["openapi-2-0"], ie.resolveStrategies.generic]
});
ie.execute = fq;
ie.serializeRes = Tx;
ie.serializeHeaders = Px;
ie.clearCache = B$;
ie.makeApisTagOperation = rD;
ie.buildRequest = eE;
ie.helpers = {
  opId: zn
};
ie.getBaseUrl = tE;
ie.apidom = {
  resolve: {
    resolvers: {
      HTTPResolverSwaggerClient: kw
    }
  },
  parse: {
    parsers: {
      JsonParser: Nw,
      YamlParser: Dw,
      OpenApiJson3_1Parser: qw,
      OpenApiYaml3_1Parser: Lw
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: Bw
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
  http: Jr,
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
  if (HO(e) && QN(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (Gp(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [Mb]);
  }
};
const {
  helpers: oV
} = ie;
export {
  ie as S
};
