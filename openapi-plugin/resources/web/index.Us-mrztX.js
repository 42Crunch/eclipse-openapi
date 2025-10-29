import { v as so, q as Sn } from "./TriangleExclamation.DrtDYmuA.js";
const gE = "application/json, application/yaml", Ri = "https://swagger.io", vE = Object.freeze({
  url: "/"
}), bE = 3e3, {
  fetch: tj,
  Response: rj,
  Headers: nj,
  Request: sj,
  FormData: ij,
  File: oj,
  Blob: aj
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = tj);
typeof globalThis.Headers > "u" && (globalThis.Headers = nj);
typeof globalThis.Request > "u" && (globalThis.Request = sj);
typeof globalThis.Response > "u" && (globalThis.Response = rj);
typeof globalThis.FormData > "u" && (globalThis.FormData = ij);
typeof globalThis.File > "u" && (globalThis.File = oj);
typeof globalThis.Blob > "u" && (globalThis.Blob = aj);
function $p(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function EE(t, e) {
  return Array.isArray(t) && t.some((r) => $p(r, e));
}
class np extends File {
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
const cj = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, uj = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function SE(t, e = "reserved") {
  return [...t].map((r) => {
    if (uj(r) || cj(r) && e === "unsafe")
      return r;
    const n = new TextEncoder();
    return Array.from(n.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function Rp(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? lj(t) : typeof e == "object" ? fj(t) : pj(t);
}
function qe(t, e = !1) {
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && typeof t == "string" && t.length > 0 ? SE(t, e) : t ?? "";
}
function lj({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  if (r === "simple")
    return e.map((i) => qe(i, s)).join(",");
  if (r === "label")
    return `.${e.map((i) => qe(i, s)).join(".")}`;
  if (r === "matrix")
    return e.map((i) => qe(i, s)).reduce((i, o) => !i || n ? `${i || ""};${t}=${o}` : `${i},${o}`, "");
  if (r === "form") {
    const i = n ? `&${t}=` : ",";
    return e.map((o) => qe(o, s)).join(i);
  }
  if (r === "spaceDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => qe(o, s)).join(` ${i}`);
  }
  if (r === "pipeDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => qe(o, s)).join(`|${i}`);
  }
}
function fj({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  const i = Object.keys(e);
  if (r === "simple")
    return i.reduce((o, a) => {
      const c = qe(e[a], s), u = n ? "=" : ",";
      return `${o ? `${o},` : ""}${a}${u}${c}`;
    }, "");
  if (r === "label")
    return i.reduce((o, a) => {
      const c = qe(e[a], s), u = n ? "=" : ".";
      return `${o ? `${o}.` : "."}${a}${u}${c}`;
    }, "");
  if (r === "matrix" && n)
    return i.reduce((o, a) => {
      const c = qe(e[a], s);
      return `${o ? `${o};` : ";"}${a}=${c}`;
    }, "");
  if (r === "matrix")
    return i.reduce((o, a) => {
      const c = qe(e[a], s);
      return `${o ? `${o},` : `;${t}=`}${a},${c}`;
    }, "");
  if (r === "form")
    return i.reduce((o, a) => {
      const c = qe(e[a], s);
      return `${o ? `${o}${n ? "&" : ","}` : ""}${a}${n ? "=" : ","}${c}`;
    }, "");
}
function pj({
  key: t,
  value: e,
  style: r,
  escape: n
}) {
  if (r === "simple")
    return qe(e, n);
  if (r === "label")
    return `.${qe(e, n)}`;
  if (r === "matrix")
    return `;${t}=${qe(e, n)}`;
  if (r === "form" || r === "deepObject")
    return qe(e, n);
}
const hj = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, dj = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function xE(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (f) => f.toString() : (f) => encodeURIComponent(f), u = c(t);
  if (typeof a > "u" && s)
    return [[u, ""]];
  if ($p(a) || EE(a))
    return [[u, a]];
  if (i)
    return Yd(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((f) => f !== "undefined")) {
      const {
        style: f,
        explode: l,
        allowReserved: d
      } = o;
      return Yd(t, a, r, {
        style: f,
        explode: l,
        allowReserved: d
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const d = typeof a == "string" ? a : JSON.stringify(a), p = c(d), m = new np(p, "blob", {
          type: o.contentType
        });
        return [[u, m]];
      }
      const f = c(String(a)), l = new np(f, "blob", {
        type: o.contentType
      });
      return [[u, l]];
    }
    return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) && a.every((f) => typeof f != "object") ? [[u, a.map(c).join(",")]] : [[u, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) ? n === "multi" ? [[u, a.map(c)]] : [[u, a.map(c).join(dj[n || "csv"])]] : [[u, ""]];
}
function Yd(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (u) => qe(u, o), c = r ? (u) => u : (u) => a(u);
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(hj[s])]] : s === "deepObject" ? Object.keys(e).map((u) => [c(`${t}[${u}]`), a(e[u])]) : i ? Object.keys(e).map((u) => [c(u), a(e[u])]) : [[c(t), Object.keys(e).map((u) => [`${c(u)},${a(e[u])}`]).join(",")]];
}
function mj(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of xE(r, n, !0))
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
const yj = (t, {
  encode: e = !0
} = {}) => {
  const r = (i, o, a) => (Array.isArray(a) ? a.reduce((c, u) => r(i, o, u), i) : a instanceof Date ? i.append(o, a.toISOString()) : typeof a == "object" ? Object.entries(a).reduce((c, [u, f]) => r(i, `${o}[${u}]`, f), i) : i.append(o, a), i), n = Object.entries(t).reduce((i, [o, a]) => r(i, o, a), new URLSearchParams()), s = String(n);
  return e ? s : decodeURIComponent(s);
};
function Xd(t) {
  const e = Object.keys(t).reduce((r, n) => {
    for (const [s, i] of xE(n, t[n]))
      i instanceof np ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return yj(e, {
    encode: !1
  });
}
function Tp(t = {}) {
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
      return $p(c) || EE(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = mj(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = Xd(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const u = new URLSearchParams(o);
      Object.keys(r).forEach((l) => u.delete(l)), a = String(u);
    }
    const c = s(a, Xd(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function OE(t) {
  return typeof t > "u" || t === null;
}
function gj(t) {
  return typeof t == "object" && t !== null;
}
function vj(t) {
  return Array.isArray(t) ? t : OE(t) ? [] : [t];
}
function bj(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function Ej(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function Sj(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var xj = OE, Oj = gj, wj = vj, Aj = Ej, jj = Sj, Pj = bj, Te = {
  isNothing: xj,
  isObject: Oj,
  toArray: wj,
  repeat: Aj,
  isNegativeZero: jj,
  extend: Pj
};
function wE(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function os(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = wE(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
os.prototype = Object.create(Error.prototype);
os.prototype.constructor = os;
os.prototype.toString = function(e) {
  return this.name + ": " + wE(this, e);
};
var et = os;
function Na(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function Fa(t, e) {
  return Te.repeat(" ", e - t.length) + t;
}
function $j(t, e) {
  if (e = Object.create(e || null), !t.buffer) return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, u, f = Math.min(t.line + e.linesAfter, s.length).toString().length, l = e.maxLength - (e.indent + f + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    u = Na(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      l
    ), a = Te.repeat(" ", e.indent) + Fa((t.line - c + 1).toString(), f) + " | " + u.str + `
` + a;
  for (u = Na(t.buffer, n[o], s[o], t.position, l), a += Te.repeat(" ", e.indent) + Fa((t.line + 1).toString(), f) + " | " + u.str + `
`, a += Te.repeat("-", e.indent + f + 3 + u.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    u = Na(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      l
    ), a += Te.repeat(" ", e.indent) + Fa((t.line + c + 1).toString(), f) + " | " + u.str + `
`;
  return a.replace(/\n$/, "");
}
var Rj = $j, Tj = [
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
], _j = [
  "scalar",
  "sequence",
  "mapping"
];
function Cj(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(n) {
      e[String(n)] = r;
    });
  }), e;
}
function Ij(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (Tj.indexOf(r) === -1)
      throw new et('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = Cj(e.styleAliases || null), _j.indexOf(this.kind) === -1)
    throw new et('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Ve = Ij;
function Qd(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function Mj() {
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
function sp(t) {
  return this.extend(t);
}
sp.prototype.extend = function(e) {
  var r = [], n = [];
  if (e instanceof Ve)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  else
    throw new et("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof Ve))
      throw new et("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new et("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new et("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(i) {
    if (!(i instanceof Ve))
      throw new et("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(sp.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = Qd(s, "implicit"), s.compiledExplicit = Qd(s, "explicit"), s.compiledTypeMap = Mj(s.compiledImplicit, s.compiledExplicit), s;
};
var AE = sp, jE = new Ve("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), PE = new Ve("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), $E = new Ve("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), RE = new AE({
  explicit: [
    jE,
    PE,
    $E
  ]
});
function kj(t) {
  if (t === null) return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function Nj() {
  return null;
}
function Fj(t) {
  return t === null;
}
var TE = new Ve("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: kj,
  construct: Nj,
  predicate: Fj,
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
function Dj(t) {
  if (t === null) return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function Lj(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function qj(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var _E = new Ve("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Dj,
  construct: Lj,
  predicate: qj,
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
function Vj(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function Bj(t) {
  return 48 <= t && t <= 55;
}
function Uj(t) {
  return 48 <= t && t <= 57;
}
function Jj(t) {
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
          if (!Vj(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!Bj(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < e; r++)
    if (s = t[r], s !== "_") {
      if (!Uj(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function Hj(t) {
  var e = t, r = 1, n;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), n = e[0], (n === "-" || n === "+") && (n === "-" && (r = -1), e = e.slice(1), n = e[0]), e === "0") return 0;
  if (n === "0") {
    if (e[1] === "b") return r * parseInt(e.slice(2), 2);
    if (e[1] === "x") return r * parseInt(e.slice(2), 16);
    if (e[1] === "o") return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function Gj(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Te.isNegativeZero(t);
}
var CE = new Ve("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Jj,
  construct: Hj,
  predicate: Gj,
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
}), Kj = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function zj(t) {
  return !(t === null || !Kj.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function Wj(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var Yj = /^[-+]?[0-9]+e/;
function Xj(t, e) {
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
  return r = t.toString(10), Yj.test(r) ? r.replace("e", ".e") : r;
}
function Qj(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Te.isNegativeZero(t));
}
var IE = new Ve("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: zj,
  construct: Wj,
  predicate: Qj,
  represent: Xj,
  defaultStyle: "lowercase"
}), ME = RE.extend({
  implicit: [
    TE,
    _E,
    CE,
    IE
  ]
}), kE = ME, NE = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), FE = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function Zj(t) {
  return t === null ? !1 : NE.exec(t) !== null || FE.exec(t) !== null;
}
function e1(t) {
  var e, r, n, s, i, o, a, c = 0, u = null, f, l, d;
  if (e = NE.exec(t), e === null && (e = FE.exec(t)), e === null) throw new Error("Date resolve error");
  if (r = +e[1], n = +e[2] - 1, s = +e[3], !e[4])
    return new Date(Date.UTC(r, n, s));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (f = +e[10], l = +(e[11] || 0), u = (f * 60 + l) * 6e4, e[9] === "-" && (u = -u)), d = new Date(Date.UTC(r, n, s, i, o, a, c)), u && d.setTime(d.getTime() - u), d;
}
function t1(t) {
  return t.toISOString();
}
var DE = new Ve("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Zj,
  construct: e1,
  instanceOf: Date,
  represent: t1
});
function r1(t) {
  return t === "<<" || t === null;
}
var LE = new Ve("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: r1
}), _p = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function n1(t) {
  if (t === null) return !1;
  var e, r, n = 0, s = t.length, i = _p;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0) return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function s1(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = _p, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function i1(t) {
  var e = "", r = 0, n, s, i = t.length, o = _p;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function o1(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var qE = new Ve("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: n1,
  construct: s1,
  predicate: o1,
  represent: i1
}), a1 = Object.prototype.hasOwnProperty, c1 = Object.prototype.toString;
function u1(t) {
  if (t === null) return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, c1.call(s) !== "[object Object]") return !1;
    for (i in s)
      if (a1.call(s, i))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (e.indexOf(i) === -1) e.push(i);
    else return !1;
  }
  return !0;
}
function l1(t) {
  return t !== null ? t : [];
}
var VE = new Ve("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: u1,
  construct: l1
}), f1 = Object.prototype.toString;
function p1(t) {
  if (t === null) return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], f1.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1)) return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function h1(t) {
  if (t === null) return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var BE = new Ve("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: p1,
  construct: h1
}), d1 = Object.prototype.hasOwnProperty;
function m1(t) {
  if (t === null) return !0;
  var e, r = t;
  for (e in r)
    if (d1.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function y1(t) {
  return t !== null ? t : {};
}
var UE = new Ve("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: m1,
  construct: y1
}), Cp = kE.extend({
  implicit: [
    DE,
    LE
  ],
  explicit: [
    qE,
    VE,
    BE,
    UE
  ]
}), Rr = Object.prototype.hasOwnProperty, Ti = 1, JE = 2, HE = 3, _i = 4, Da = 1, g1 = 2, Zd = 3, v1 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, b1 = /[\x85\u2028\u2029]/, E1 = /[,\[\]\{\}]/, GE = /^(?:!|!!|![a-z\-]+!)$/i, KE = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function em(t) {
  return Object.prototype.toString.call(t);
}
function Gt(t) {
  return t === 10 || t === 13;
}
function Jr(t) {
  return t === 9 || t === 32;
}
function ct(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function xn(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function S1(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function x1(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function O1(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function tm(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function w1(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var zE = new Array(256), WE = new Array(256);
for (var vn = 0; vn < 256; vn++)
  zE[vn] = tm(vn) ? 1 : 0, WE[vn] = tm(vn);
function A1(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || Cp, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function YE(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = Rj(r), new et(e, r);
}
function V(t, e) {
  throw YE(t, e);
}
function Ci(t, e) {
  t.onWarning && t.onWarning.call(null, YE(t, e));
}
var rm = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && V(e, "duplication of %YAML directive"), n.length !== 1 && V(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && V(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && V(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Ci(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && V(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], GE.test(s) || V(e, "ill-formed tag handle (first argument) of the TAG directive"), Rr.call(e.tagMap, s) && V(e, 'there is a previously declared suffix for "' + s + '" tag handle'), KE.test(i) || V(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      V(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function Pr(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || V(t, "expected valid JSON character");
    else v1.test(a) && V(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function nm(t, e, r, n) {
  var s, i, o, a;
  for (Te.isObject(r) || V(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], Rr.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function On(t, e, r, n, s, i, o, a, c) {
  var u, f;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), u = 0, f = s.length; u < f; u += 1)
      Array.isArray(s[u]) && V(t, "nested arrays are not supported inside keys"), typeof s == "object" && em(s[u]) === "[object Object]" && (s[u] = "[object Object]");
  if (typeof s == "object" && em(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (u = 0, f = i.length; u < f; u += 1)
        nm(t, e, i[u], r);
    else
      nm(t, e, i, r);
  else
    !t.json && !Rr.call(r, s) && Rr.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, V(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function Ip(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : V(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function Ae(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; Jr(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (Gt(s))
      for (Ip(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && Ci(t, "deficient indentation"), n;
}
function io(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || ct(r)));
}
function Mp(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Te.repeat(`
`, e - 1));
}
function j1(t, e, r) {
  var n, s, i, o, a, c, u, f, l = t.kind, d = t.result, p;
  if (p = t.input.charCodeAt(t.position), ct(p) || xn(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (s = t.input.charCodeAt(t.position + 1), ct(s) || r && xn(s)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; p !== 0; ) {
    if (p === 58) {
      if (s = t.input.charCodeAt(t.position + 1), ct(s) || r && xn(s))
        break;
    } else if (p === 35) {
      if (n = t.input.charCodeAt(t.position - 1), ct(n))
        break;
    } else {
      if (t.position === t.lineStart && io(t) || r && xn(p))
        break;
      if (Gt(p))
        if (c = t.line, u = t.lineStart, f = t.lineIndent, Ae(t, !1, -1), t.lineIndent >= e) {
          a = !0, p = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = u, t.lineIndent = f;
          break;
        }
    }
    a && (Pr(t, i, o, !1), Mp(t, t.line - c), i = o = t.position, a = !1), Jr(p) || (o = t.position + 1), p = t.input.charCodeAt(++t.position);
  }
  return Pr(t, i, o, !1), t.result ? !0 : (t.kind = l, t.result = d, !1);
}
function P1(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (Pr(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else Gt(r) ? (Pr(t, n, s, !0), Mp(t, Ae(t, !1, e)), n = s = t.position) : t.position === t.lineStart && io(t) ? V(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  V(t, "unexpected end of the stream within a single quoted scalar");
}
function $1(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return Pr(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (Pr(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), Gt(a))
        Ae(t, !1, e);
      else if (a < 256 && zE[a])
        t.result += WE[a], t.position++;
      else if ((o = x1(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = S1(a)) >= 0 ? i = (i << 4) + o : V(t, "expected hexadecimal character");
        t.result += w1(i), t.position++;
      } else
        V(t, "unknown escape sequence");
      r = n = t.position;
    } else Gt(a) ? (Pr(t, r, n, !0), Mp(t, Ae(t, !1, e)), r = n = t.position) : t.position === t.lineStart && io(t) ? V(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  V(t, "unexpected end of the stream within a double quoted scalar");
}
function R1(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, u, f, l, d, p, m = /* @__PURE__ */ Object.create(null), h, v, b, g;
  if (g = t.input.charCodeAt(t.position), g === 91)
    f = 93, p = !1, a = [];
  else if (g === 123)
    f = 125, p = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), g = t.input.charCodeAt(++t.position); g !== 0; ) {
    if (Ae(t, !0, e), g = t.input.charCodeAt(t.position), g === f)
      return t.position++, t.tag = o, t.anchor = c, t.kind = p ? "mapping" : "sequence", t.result = a, !0;
    r ? g === 44 && V(t, "expected the node content, but found ','") : V(t, "missed comma between flow collection entries"), v = h = b = null, l = d = !1, g === 63 && (u = t.input.charCodeAt(t.position + 1), ct(u) && (l = d = !0, t.position++, Ae(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, Rn(t, e, Ti, !1, !0), v = t.tag, h = t.result, Ae(t, !0, e), g = t.input.charCodeAt(t.position), (d || t.line === n) && g === 58 && (l = !0, g = t.input.charCodeAt(++t.position), Ae(t, !0, e), Rn(t, e, Ti, !1, !0), b = t.result), p ? On(t, a, m, v, h, b, n, s, i) : l ? a.push(On(t, null, m, v, h, b, n, s, i)) : a.push(h), Ae(t, !0, e), g = t.input.charCodeAt(t.position), g === 44 ? (r = !0, g = t.input.charCodeAt(++t.position)) : r = !1;
  }
  V(t, "unexpected end of the stream within a flow collection");
}
function T1(t, e) {
  var r, n, s = Da, i = !1, o = !1, a = e, c = 0, u = !1, f, l;
  if (l = t.input.charCodeAt(t.position), l === 124)
    n = !1;
  else if (l === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; l !== 0; )
    if (l = t.input.charCodeAt(++t.position), l === 43 || l === 45)
      Da === s ? s = l === 43 ? Zd : g1 : V(t, "repeat of a chomping mode identifier");
    else if ((f = O1(l)) >= 0)
      f === 0 ? V(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? V(t, "repeat of an indentation width identifier") : (a = e + f - 1, o = !0);
    else
      break;
  if (Jr(l)) {
    do
      l = t.input.charCodeAt(++t.position);
    while (Jr(l));
    if (l === 35)
      do
        l = t.input.charCodeAt(++t.position);
      while (!Gt(l) && l !== 0);
  }
  for (; l !== 0; ) {
    for (Ip(t), t.lineIndent = 0, l = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && l === 32; )
      t.lineIndent++, l = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), Gt(l)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === Zd ? t.result += Te.repeat(`
`, i ? 1 + c : c) : s === Da && i && (t.result += `
`);
      break;
    }
    for (n ? Jr(l) ? (u = !0, t.result += Te.repeat(`
`, i ? 1 + c : c)) : u ? (u = !1, t.result += Te.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += Te.repeat(`
`, c) : t.result += Te.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !Gt(l) && l !== 0; )
      l = t.input.charCodeAt(++t.position);
    Pr(t, r, t.position, !1);
  }
  return !0;
}
function sm(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, V(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !ct(o)))); ) {
    if (a = !0, t.position++, Ae(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, Rn(t, e, HE, !1, !0), i.push(t.result), Ae(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      V(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function _1(t, e, r) {
  var n, s, i, o, a, c, u = t.tag, f = t.anchor, l = {}, d = /* @__PURE__ */ Object.create(null), p = null, m = null, h = null, v = !1, b = !1, g;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = l), g = t.input.charCodeAt(t.position); g !== 0; ) {
    if (!v && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, V(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, (g === 63 || g === 58) && ct(n))
      g === 63 ? (v && (On(t, l, d, p, m, null, o, a, c), p = m = h = null), b = !0, v = !0, s = !0) : v ? (v = !1, s = !0) : V(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, g = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !Rn(t, r, JE, !1, !0))
        break;
      if (t.line === i) {
        for (g = t.input.charCodeAt(t.position); Jr(g); )
          g = t.input.charCodeAt(++t.position);
        if (g === 58)
          g = t.input.charCodeAt(++t.position), ct(g) || V(t, "a whitespace character is expected after the key-value separator within a block mapping"), v && (On(t, l, d, p, m, null, o, a, c), p = m = h = null), b = !0, v = !1, s = !1, p = t.tag, m = t.result;
        else if (b)
          V(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = u, t.anchor = f, !0;
      } else if (b)
        V(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = u, t.anchor = f, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (v && (o = t.line, a = t.lineStart, c = t.position), Rn(t, e, _i, !0, s) && (v ? m = t.result : h = t.result), v || (On(t, l, d, p, m, h, o, a, c), p = m = h = null), Ae(t, !0, -1), g = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && g !== 0)
      V(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return v && On(t, l, d, p, m, null, o, a, c), b && (t.tag = u, t.anchor = f, t.kind = "mapping", t.result = l), b;
}
function C1(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33) return !1;
  if (t.tag !== null && V(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : V(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !ct(o); )
      o === 33 && (n ? V(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), GE.test(s) || V(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), E1.test(i) && V(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !KE.test(i) && V(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    V(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : Rr.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : V(t, 'undeclared tag handle "' + s + '"'), !0;
}
function I1(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38) return !1;
  for (t.anchor !== null && V(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !ct(r) && !xn(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && V(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function M1(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42) return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !ct(n) && !xn(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && V(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), Rr.call(t.anchorMap, r) || V(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], Ae(t, !0, -1), !0;
}
function Rn(t, e, r, n, s) {
  var i, o, a, c = 1, u = !1, f = !1, l, d, p, m, h, v;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = _i === r || HE === r, n && Ae(t, !0, -1) && (u = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; C1(t) || I1(t); )
      Ae(t, !0, -1) ? (u = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = u || s), (c === 1 || _i === r) && (Ti === r || JE === r ? h = e : h = e + 1, v = t.position - t.lineStart, c === 1 ? a && (sm(t, v) || _1(t, v, h)) || R1(t, h) ? f = !0 : (o && T1(t, h) || P1(t, h) || $1(t, h) ? f = !0 : M1(t) ? (f = !0, (t.tag !== null || t.anchor !== null) && V(t, "alias node should not have any properties")) : j1(t, h, Ti === r) && (f = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (f = a && sm(t, v))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && V(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), l = 0, d = t.implicitTypes.length; l < d; l += 1)
      if (m = t.implicitTypes[l], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (Rr.call(t.typeMap[t.kind || "fallback"], t.tag))
      m = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (m = null, p = t.typeMap.multi[t.kind || "fallback"], l = 0, d = p.length; l < d; l += 1)
        if (t.tag.slice(0, p[l].tag.length) === p[l].tag) {
          m = p[l];
          break;
        }
    m || V(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && V(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : V(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || f;
}
function k1(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (Ae(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !ct(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && V(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; Jr(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !Gt(o));
        break;
      }
      if (Gt(o)) break;
      for (r = t.position; o !== 0 && !ct(o); )
        o = t.input.charCodeAt(++t.position);
      s.push(t.input.slice(r, t.position));
    }
    o !== 0 && Ip(t), Rr.call(rm, n) ? rm[n](t, n, s) : Ci(t, 'unknown document directive "' + n + '"');
  }
  if (Ae(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, Ae(t, !0, -1)) : i && V(t, "directives end mark is expected"), Rn(t, t.lineIndent - 1, _i, !1, !0), Ae(t, !0, -1), t.checkLineBreaks && b1.test(t.input.slice(e, t.position)) && Ci(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && io(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, Ae(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    V(t, "end of the stream or a document separator is expected");
  else
    return;
}
function XE(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new A1(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, V(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    k1(r);
  return r.documents;
}
function N1(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = XE(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function F1(t, e) {
  var r = XE(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new et("expected a single document in the stream, but found more");
  }
}
var D1 = N1, L1 = F1, QE = {
  loadAll: D1,
  load: L1
}, ZE = Object.prototype.toString, eS = Object.prototype.hasOwnProperty, kp = 65279, q1 = 9, as = 10, V1 = 13, B1 = 32, U1 = 33, J1 = 34, ip = 35, H1 = 37, G1 = 38, K1 = 39, z1 = 42, tS = 44, W1 = 45, Ii = 58, Y1 = 61, X1 = 62, Q1 = 63, Z1 = 64, rS = 91, nS = 93, eP = 96, sS = 123, tP = 124, iS = 125, ze = {};
ze[0] = "\\0";
ze[7] = "\\a";
ze[8] = "\\b";
ze[9] = "\\t";
ze[10] = "\\n";
ze[11] = "\\v";
ze[12] = "\\f";
ze[13] = "\\r";
ze[27] = "\\e";
ze[34] = '\\"';
ze[92] = "\\\\";
ze[133] = "\\N";
ze[160] = "\\_";
ze[8232] = "\\L";
ze[8233] = "\\P";
var rP = [
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
], nP = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function sP(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null) return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && eS.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function iP(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new et("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Te.repeat("0", n - e.length) + e;
}
var oP = 1, cs = 2;
function aP(t) {
  this.schema = t.schema || Cp, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Te.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = sP(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? cs : oP, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function im(t, e) {
  for (var r = Te.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function op(t, e) {
  return `
` + Te.repeat(" ", t.indent * e);
}
function cP(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function Mi(t) {
  return t === B1 || t === q1;
}
function us(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== kp || 65536 <= t && t <= 1114111;
}
function om(t) {
  return us(t) && t !== kp && t !== V1 && t !== as;
}
function am(t, e, r) {
  var n = om(t), s = n && !Mi(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== tS && t !== rS && t !== nS && t !== sS && t !== iS) && t !== ip && !(e === Ii && !s) || om(e) && !Mi(e) && t === ip || e === Ii && s
  );
}
function uP(t) {
  return us(t) && t !== kp && !Mi(t) && t !== W1 && t !== Q1 && t !== Ii && t !== tS && t !== rS && t !== nS && t !== sS && t !== iS && t !== ip && t !== G1 && t !== z1 && t !== U1 && t !== tP && t !== Y1 && t !== X1 && t !== K1 && t !== J1 && t !== H1 && t !== Z1 && t !== eP;
}
function lP(t) {
  return !Mi(t) && t !== Ii;
}
function Zn(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function oS(t) {
  var e = /^\n* /;
  return e.test(t);
}
var aS = 1, ap = 2, cS = 3, uS = 4, En = 5;
function fP(t, e, r, n, s, i, o, a) {
  var c, u = 0, f = null, l = !1, d = !1, p = n !== -1, m = -1, h = uP(Zn(t, 0)) && lP(Zn(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = Zn(t, c), !us(u))
        return En;
      h = h && am(u, f, a), f = u;
    }
  else {
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = Zn(t, c), u === as)
        l = !0, p && (d = d || // Foldable line = too long, and not more-indented.
        c - m - 1 > n && t[m + 1] !== " ", m = c);
      else if (!us(u))
        return En;
      h = h && am(u, f, a), f = u;
    }
    d = d || p && c - m - 1 > n && t[m + 1] !== " ";
  }
  return !l && !d ? h && !o && !s(t) ? aS : i === cs ? En : ap : r > 9 && oS(t) ? En : o ? i === cs ? En : ap : d ? uS : cS;
}
function pP(t, e, r, n, s) {
  t.dump = (function() {
    if (e.length === 0)
      return t.quotingType === cs ? '""' : "''";
    if (!t.noCompatMode && (rP.indexOf(e) !== -1 || nP.test(e)))
      return t.quotingType === cs ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(u) {
      return cP(t, u);
    }
    switch (fP(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !n,
      s
    )) {
      case aS:
        return e;
      case ap:
        return "'" + e.replace(/'/g, "''") + "'";
      case cS:
        return "|" + cm(e, t.indent) + um(im(e, i));
      case uS:
        return ">" + cm(e, t.indent) + um(im(hP(e, o), i));
      case En:
        return '"' + dP(e) + '"';
      default:
        throw new et("impossible error: invalid scalar style");
    }
  })();
}
function cm(t, e) {
  var r = oS(t) ? String(e) : "", n = t[t.length - 1] === `
`, s = n && (t[t.length - 2] === `
` || t === `
`), i = s ? "+" : n ? "" : "-";
  return r + i + `
`;
}
function um(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function hP(t, e) {
  for (var r = /(\n+)([^\n]*)/g, n = (function() {
    var u = t.indexOf(`
`);
    return u = u !== -1 ? u : t.length, r.lastIndex = u, lm(t.slice(0, u), e);
  })(), s = t[0] === `
` || t[0] === " ", i, o; o = r.exec(t); ) {
    var a = o[1], c = o[2];
    i = c[0] === " ", n += a + (!s && !i && c !== "" ? `
` : "") + lm(c, e), s = i;
  }
  return n;
}
function lm(t, e) {
  if (t === "" || t[0] === " ") return t;
  for (var r = / [^ ]/g, n, s = 0, i, o = 0, a = 0, c = ""; n = r.exec(t); )
    a = n.index, a - s > e && (i = o > s ? o : a, c += `
` + t.slice(s, i), s = i + 1), o = a;
  return c += `
`, t.length - s > e && o > s ? c += t.slice(s, o) + `
` + t.slice(o + 1) : c += t.slice(s), c.slice(1);
}
function dP(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = Zn(t, s), n = ze[r], !n && us(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || iP(r);
  return e;
}
function mP(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (or(t, e, a, !1, !1) || typeof a > "u" && or(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function fm(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (or(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && or(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += op(t, e)), t.dump && as === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function yP(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, u, f;
  for (o = 0, a = i.length; o < a; o += 1)
    f = "", n !== "" && (f += ", "), t.condenseFlow && (f += '"'), c = i[o], u = r[c], t.replacer && (u = t.replacer.call(r, c, u)), or(t, e, c, !1, !1) && (t.dump.length > 1024 && (f += "? "), f += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), or(t, e, u, !1, !1) && (f += t.dump, n += f));
  t.tag = s, t.dump = "{" + n + "}";
}
function gP(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, u, f, l, d;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new et("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    d = "", (!n || s !== "") && (d += op(t, e)), u = o[a], f = r[u], t.replacer && (f = t.replacer.call(r, u, f)), or(t, e + 1, u, !0, !0, !0) && (l = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, l && (t.dump && as === t.dump.charCodeAt(0) ? d += "?" : d += "? "), d += t.dump, l && (d += op(t, e)), or(t, e + 1, f, !0, l) && (t.dump && as === t.dump.charCodeAt(0) ? d += ":" : d += ": ", d += t.dump, s += d));
  t.tag = i, t.dump = s || "{}";
}
function pm(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, ZE.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (eS.call(a.represent, c))
          n = a.represent[c](e, c);
        else
          throw new et("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = n;
      }
      return !0;
    }
  return !1;
}
function or(t, e, r, n, s, i, o) {
  t.tag = null, t.dump = r, pm(t, r, !1) || pm(t, r, !0);
  var a = ZE.call(t.dump), c = n, u;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var f = a === "[object Object]" || a === "[object Array]", l, d;
  if (f && (l = t.duplicates.indexOf(r), d = l !== -1), (t.tag !== null && t.tag !== "?" || d || t.indent !== 2 && e > 0) && (s = !1), d && t.usedDuplicates[l])
    t.dump = "*ref_" + l;
  else {
    if (f && d && !t.usedDuplicates[l] && (t.usedDuplicates[l] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (gP(t, e, t.dump, s), d && (t.dump = "&ref_" + l + t.dump)) : (yP(t, e, t.dump), d && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? fm(t, e - 1, t.dump, s) : fm(t, e, t.dump, s), d && (t.dump = "&ref_" + l + t.dump)) : (mP(t, e, t.dump), d && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && pP(t, t.dump, e, i, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (t.skipInvalid) return !1;
      throw new et("unacceptable kind of an object to dump " + a);
    }
    t.tag !== null && t.tag !== "?" && (u = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? u = "!" + u : u.slice(0, 18) === "tag:yaml.org,2002:" ? u = "!!" + u.slice(18) : u = "!<" + u + ">", t.dump = u + " " + t.dump);
  }
  return !0;
}
function vP(t, e) {
  var r = [], n = [], s, i;
  for (cp(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function cp(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        cp(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        cp(t[n[s]], e, r);
}
function bP(t, e) {
  e = e || {};
  var r = new aP(e);
  r.noRefs || vP(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), or(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var EP = bP, SP = {
  dump: EP
};
function Np(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var xP = Ve, OP = AE, wP = RE, ki = ME, AP = kE, jP = Cp, PP = QE.load, $P = QE.loadAll, RP = SP.dump, TP = et, _P = {
  binary: qE,
  float: IE,
  map: $E,
  null: TE,
  pairs: BE,
  set: UE,
  timestamp: DE,
  bool: _E,
  int: CE,
  merge: LE,
  omap: VE,
  seq: PE,
  str: jE
}, CP = Np("safeLoad", "load"), IP = Np("safeLoadAll", "loadAll"), MP = Np("safeDump", "dump"), Tn = {
  Type: xP,
  Schema: OP,
  FAILSAFE_SCHEMA: wP,
  JSON_SCHEMA: ki,
  CORE_SCHEMA: AP,
  DEFAULT_SCHEMA: jP,
  load: PP,
  loadAll: $P,
  dump: RP,
  YAMLException: TP,
  types: _P,
  safeLoad: CP,
  safeLoadAll: IP,
  safeDump: MP
};
const kP = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function NP(t, e) {
  if (e) {
    if (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0)
      return JSON.parse(t);
    if (e.indexOf("application/xml") === 0 || e.indexOf("+xml") > 0)
      return t;
  }
  return Tn.load(t);
}
function FP(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function lS(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = FP(n), e), {});
}
function fS(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: lS(t.headers)
  }, s = n.headers["content-type"], i = r || kP(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = NP(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
async function _n(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, e = Tp(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await fS(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
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
function DP(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), n = Tp(n), n = e(n), r(t(n)));
}
function pS(t, e = {}) {
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
      Accept: gE
    },
    credentials: s
  }).then((o) => o.body);
}
const Fp = (t) => {
  var e, r;
  const {
    baseDoc: n,
    url: s
  } = t, i = (e = n ?? s) !== null && e !== void 0 ? e : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(i, globalThis.document.baseURI)) : i;
}, hS = (t) => {
  const {
    fetch: e,
    http: r
  } = t;
  return e || r || _n;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var LP = /* @__PURE__ */ (function() {
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
})(), qP = Object.prototype.hasOwnProperty;
function up(t, e) {
  return qP.call(t, e);
}
function lp(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var n = [];
  for (var s in t)
    up(t, s) && n.push(s);
  return n;
}
function ft(t) {
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
function fp(t) {
  for (var e = 0, r = t.length, n; e < r; ) {
    if (n = t.charCodeAt(e), n >= 48 && n <= 57) {
      e++;
      continue;
    }
    return !1;
  }
  return !0;
}
function Vr(t) {
  return t.indexOf("/") === -1 && t.indexOf("~") === -1 ? t : t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function dS(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function pp(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (pp(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = lp(t), s = n.length, i = 0; i < s; i++)
        if (pp(t[n[i]]))
          return !0;
    }
  }
  return !1;
}
function hm(t, e) {
  var r = [t];
  for (var n in e) {
    var s = typeof e[n] == "object" ? JSON.stringify(e[n], null, 2) : e[n];
    typeof s < "u" && r.push(n + ": " + s);
  }
  return r.join(`
`);
}
var mS = (
  /** @class */
  (function(t) {
    LP(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, hm(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = hm(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  })(Error)
), Ee = mS, VP = ft, wn = {
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
    var n = ls(r, this.path);
    n && (n = ft(n));
    var s = Hr(r, { op: "remove", path: this.from }).removed;
    return Hr(r, { op: "add", path: this.path, value: s }), { newDocument: r, removed: n };
  },
  copy: function(t, e, r) {
    var n = ls(r, this.from);
    return Hr(r, { op: "add", path: this.path, value: ft(n) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: fs(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, BP = {
  add: function(t, e, r) {
    return fp(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
  },
  remove: function(t, e, r) {
    var n = t.splice(e, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(t, e, r) {
    var n = t[e];
    return t[e] = this.value, { newDocument: r, removed: n };
  },
  move: wn.move,
  copy: wn.copy,
  test: wn.test,
  _get: wn._get
};
function ls(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return Hr(t, r), r.value;
}
function Hr(t, e, r, n, s, i) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : Ni(e, 0)), e.path === "") {
    var o = { newDocument: t };
    if (e.op === "add")
      return o.newDocument = e.value, o;
    if (e.op === "replace")
      return o.newDocument = e.value, o.removed = t, o;
    if (e.op === "move" || e.op === "copy")
      return o.newDocument = ls(t, e.from), e.op === "move" && (o.removed = t), o;
    if (e.op === "test") {
      if (o.test = fs(t, e.value), o.test === !1)
        throw new Ee("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
      return o.newDocument = t, o;
    } else {
      if (e.op === "remove")
        return o.removed = t, o.newDocument = null, o;
      if (e.op === "_get")
        return e.value = t, o;
      if (r)
        throw new Ee("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", i, e, t);
      return o;
    }
  } else {
    n || (t = ft(t));
    var a = e.path || "", c = a.split("/"), u = t, f = 1, l = c.length, d = void 0, p = void 0, m = void 0;
    for (typeof r == "function" ? m = r : m = Ni; ; ) {
      if (p = c[f], p && p.indexOf("~") != -1 && (p = dS(p)), s && (p == "__proto__" || p == "prototype" && f > 0 && c[f - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && d === void 0 && (u[p] === void 0 ? d = c.slice(0, f).join("/") : f == l - 1 && (d = e.path), d !== void 0 && m(e, 0, t, d)), f++, Array.isArray(u)) {
        if (p === "-")
          p = u.length;
        else {
          if (r && !fp(p))
            throw new Ee("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          fp(p) && (p = ~~p);
        }
        if (f >= l) {
          if (r && e.op === "add" && p > u.length)
            throw new Ee("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = BP[e.op].call(e, u, p, t);
          if (o.test === !1)
            throw new Ee("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (f >= l) {
        var o = wn[e.op].call(e, u, p, t);
        if (o.test === !1)
          throw new Ee("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (u = u[p], r && f < l && (!u || typeof u != "object"))
        throw new Ee("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function Ar(t, e, r, n, s) {
  if (n === void 0 && (n = !0), s === void 0 && (s = !0), r && !Array.isArray(e))
    throw new Ee("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (t = ft(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = Hr(t, e[o], r, !0, s, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function UP(t, e, r) {
  var n = Hr(t, e);
  if (n.test === !1)
    throw new Ee("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function Ni(t, e, r, n) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new Ee("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (wn[t.op]) {
    if (typeof t.path != "string")
      throw new Ee("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new Ee('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new Ee("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new Ee("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && pp(t.value))
      throw new Ee("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", e, t, r);
    if (r) {
      if (t.op == "add") {
        var s = t.path.split("/").length, i = n.split("/").length;
        if (s !== i + 1 && s !== i)
          throw new Ee("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", e, t, r);
      } else if (t.op === "replace" || t.op === "remove" || t.op === "_get") {
        if (t.path !== n)
          throw new Ee("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", e, t, r);
      } else if (t.op === "move" || t.op === "copy") {
        var o = { op: "_get", path: t.from, value: void 0 }, a = yS([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new Ee("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else throw new Ee("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function yS(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new Ee("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      Ar(ft(e), ft(t), r || !0);
    else {
      r = r || Ni;
      for (var n = 0; n < t.length; n++)
        r(t[n], n, e, void 0);
    }
  } catch (s) {
    if (s instanceof Ee)
      return s;
    throw s;
  }
}
function fs(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    var r = Array.isArray(t), n = Array.isArray(e), s, i, o;
    if (r && n) {
      if (i = t.length, i != e.length)
        return !1;
      for (s = i; s-- !== 0; )
        if (!fs(t[s], e[s]))
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
      if (o = a[s], !fs(t[o], e[o]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
const JP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: Ee,
  _areEquals: fs,
  applyOperation: Hr,
  applyPatch: Ar,
  applyReducer: UP,
  deepClone: VP,
  getValueByPointer: ls,
  validate: yS,
  validator: Ni
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var Dp = /* @__PURE__ */ new WeakMap(), HP = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  })()
), GP = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  })()
);
function KP(t) {
  return Dp.get(t);
}
function zP(t, e) {
  return t.observers.get(e);
}
function WP(t, e) {
  t.observers.delete(e.callback);
}
function YP(t, e) {
  e.unobserve();
}
function XP(t, e) {
  var r = [], n, s = KP(t);
  if (!s)
    s = new HP(t), Dp.set(t, s);
  else {
    var i = zP(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = ft(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      hp(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    hp(n), clearTimeout(n.next), WP(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new GP(e, n)), n;
}
function hp(t, e) {
  e === void 0 && (e = !1);
  var r = Dp.get(t.object);
  Lp(r.value, t.object, t.patches, "", e), t.patches.length && Ar(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function Lp(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = lp(e), o = lp(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var u = o[c], f = t[u];
      if (up(e, u) && !(e[u] === void 0 && f !== void 0 && Array.isArray(e) === !1)) {
        var l = e[u];
        typeof f == "object" && f != null && typeof l == "object" && l != null && Array.isArray(f) === Array.isArray(l) ? Lp(f, l, r, n + "/" + Vr(u), s) : f !== l && (s && r.push({ op: "test", path: n + "/" + Vr(u), value: ft(f) }), r.push({ op: "replace", path: n + "/" + Vr(u), value: ft(l) }));
      } else Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + Vr(u), value: ft(f) }), r.push({ op: "remove", path: n + "/" + Vr(u) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var u = i[c];
        !up(t, u) && e[u] !== void 0 && r.push({ op: "add", path: n + "/" + Vr(u), value: ft(e[u]) });
      }
  }
}
function QP(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return Lp(t, e, n, "", r), n;
}
const ZP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: QP,
  generate: hp,
  observe: XP,
  unobserve: YP
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, JP, ZP, {
  JsonPatchError: mS,
  deepClone: ft,
  escapePathComponent: Vr,
  unescapePathComponent: dS
});
var La, dm;
function e$() {
  if (dm) return La;
  dm = 1;
  var t = function(g) {
    return e(g) && !r(g);
  };
  function e(b) {
    return !!b && typeof b == "object";
  }
  function r(b) {
    var g = Object.prototype.toString.call(b);
    return g === "[object RegExp]" || g === "[object Date]" || i(b);
  }
  var n = typeof Symbol == "function" && Symbol.for, s = n ? Symbol.for("react.element") : 60103;
  function i(b) {
    return b.$$typeof === s;
  }
  function o(b) {
    return Array.isArray(b) ? [] : {};
  }
  function a(b, g) {
    return g.clone !== !1 && g.isMergeableObject(b) ? h(o(b), b, g) : b;
  }
  function c(b, g, S) {
    return b.concat(g).map(function(E) {
      return a(E, S);
    });
  }
  function u(b, g) {
    if (!g.customMerge)
      return h;
    var S = g.customMerge(b);
    return typeof S == "function" ? S : h;
  }
  function f(b) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(b).filter(function(g) {
      return Object.propertyIsEnumerable.call(b, g);
    }) : [];
  }
  function l(b) {
    return Object.keys(b).concat(f(b));
  }
  function d(b, g) {
    try {
      return g in b;
    } catch {
      return !1;
    }
  }
  function p(b, g) {
    return d(b, g) && !(Object.hasOwnProperty.call(b, g) && Object.propertyIsEnumerable.call(b, g));
  }
  function m(b, g, S) {
    var E = {};
    return S.isMergeableObject(b) && l(b).forEach(function(O) {
      E[O] = a(b[O], S);
    }), l(g).forEach(function(O) {
      p(b, O) || (d(b, O) && S.isMergeableObject(g[O]) ? E[O] = u(O, S)(b[O], g[O], S) : E[O] = a(g[O], S));
    }), E;
  }
  function h(b, g, S) {
    S = S || {}, S.arrayMerge = S.arrayMerge || c, S.isMergeableObject = S.isMergeableObject || t, S.cloneUnlessOtherwiseSpecified = a;
    var E = Array.isArray(g), O = Array.isArray(b), A = E === O;
    return A ? E ? S.arrayMerge(b, g, S) : m(b, g, S) : a(g, S);
  }
  h.all = function(g, S) {
    if (!Array.isArray(g))
      throw new Error("first argument should be an array");
    return g.reduce(function(E, O) {
      return h(E, O, S);
    }, {});
  };
  var v = h;
  return La = v, La;
}
var t$ = e$();
const mm = /* @__PURE__ */ so(t$), ae = {
  add: n$,
  replace: Oi,
  remove: s$,
  merge: i$,
  mergeDeep: o$,
  context: a$,
  getIn: f$,
  applyPatch: r$,
  parentPathMatch: l$,
  flatten: ys,
  fullyNormalizeArray: p$,
  normalizeArray: vS,
  isPromise: h$,
  forEachNew: c$,
  forEachNewPrimitive: u$,
  isJsonPatch: SS,
  isContextPatch: y$,
  isPatch: oo,
  isMutation: xS,
  isAdditiveMutation: Fi,
  isGenerator: m$,
  isFunction: ES,
  isObject: Gr,
  isError: d$
};
function r$(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && ym(e.path)
  }, e.op === "merge") {
    const n = qa(t, e.path);
    Object.assign(n, e.value), Ar(t, [Oi(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = qa(t, e.path), s = mm(n, e.value, {
      customMerge: (i) => {
        if (i === "enum")
          return (o, a) => Array.isArray(o) && Array.isArray(a) ? [.../* @__PURE__ */ new Set([...o, ...a])] : mm(o, a);
      }
    });
    t = Ar(t, [Oi(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && Gr(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${ym(i)}`,
      value: e.value[i]
    }), s), []);
    Ar(t, n);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: n
    } = e;
    r.allowMetaPatches && e.meta && Fi(e) && (Array.isArray(e.value) || Gr(e.value)) && (n = {
      ...n,
      ...e.meta
    }), t = n;
  } else if (Ar(t, [e]), r.allowMetaPatches && e.meta && Fi(e) && (Array.isArray(e.value) || Gr(e.value))) {
    const s = {
      ...qa(t, e.path),
      ...e.meta
    };
    Ar(t, [Oi(e.path, s)]);
  }
  return t;
}
function ym(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function n$(t, e) {
  return {
    op: "add",
    path: t,
    value: e
  };
}
function Oi(t, e, r) {
  return {
    op: "replace",
    path: t,
    value: e,
    meta: r
  };
}
function s$(t) {
  return {
    op: "remove",
    path: t
  };
}
function i$(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function o$(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function a$(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function c$(t, e) {
  try {
    return gS(t, mp, e);
  } catch (r) {
    return r;
  }
}
function u$(t, e) {
  try {
    return gS(t, dp, e);
  } catch (r) {
    return r;
  }
}
function gS(t, e, r) {
  const n = t.filter(Fi).map((o) => e(o.value, r, o.path)) || [], s = ys(n);
  return bS(s);
}
function dp(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => dp(n, e, r.concat(s))) : Gr(t) ? Object.keys(t).map((n) => dp(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function mp(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => mp(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (Gr(t)) {
    const s = Object.keys(t).map((i) => mp(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = ys(n), n;
}
function l$(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, n = e.length; r < n; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function f$(t, e) {
  return e.reduce((r, n) => typeof n < "u" && r ? r[n] : r, t);
}
function p$(t) {
  return bS(ys(vS(t)));
}
function vS(t) {
  return Array.isArray(t) ? t : [t];
}
function ys(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? ys(e) : e));
}
function bS(t) {
  return t.filter((e) => typeof e < "u");
}
function Gr(t) {
  return t && typeof t == "object";
}
function h$(t) {
  return Gr(t) && ES(t.then);
}
function ES(t) {
  return t && typeof t == "function";
}
function d$(t) {
  return t instanceof Error;
}
function SS(t) {
  if (oo(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function m$(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function xS(t) {
  return SS(t) || oo(t) && t.type === "mutation";
}
function Fi(t) {
  return xS(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function y$(t) {
  return oo(t) && t.type === "context";
}
function oo(t) {
  return t && typeof t == "object";
}
function qa(t, e) {
  try {
    return ls(t, e);
  } catch (r) {
    return console.error(r), {};
  }
}
var gm = {}, vm = {}, bm = {}, Xn, Em;
function dt() {
  if (Em) return Xn;
  Em = 1;
  var t = function(e) {
    return e && e.Math === Math && e;
  };
  return Xn = // eslint-disable-next-line es/no-global-this -- safe
  t(typeof globalThis == "object" && globalThis) || t(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  t(typeof self == "object" && self) || t(typeof Sn == "object" && Sn) || t(typeof Xn == "object" && Xn) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ (function() {
    return this;
  })() || Function("return this")(), Xn;
}
var Va, Sm;
function Ut() {
  return Sm || (Sm = 1, Va = function(t) {
    try {
      return !!t();
    } catch {
      return !0;
    }
  }), Va;
}
var Ba, xm;
function ao() {
  if (xm) return Ba;
  xm = 1;
  var t = /* @__PURE__ */ Ut();
  return Ba = !t(function() {
    var e = (function() {
    }).bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  }), Ba;
}
var Ua, Om;
function qp() {
  if (Om) return Ua;
  Om = 1;
  var t = /* @__PURE__ */ ao(), e = Function.prototype, r = e.apply, n = e.call;
  return Ua = typeof Reflect == "object" && Reflect.apply || (t ? n.bind(r) : function() {
    return n.apply(r, arguments);
  }), Ua;
}
var Ja, wm;
function Jt() {
  if (wm) return Ja;
  wm = 1;
  var t = /* @__PURE__ */ ao(), e = Function.prototype, r = e.call, n = t && e.bind.bind(r, r);
  return Ja = t ? n : function(s) {
    return function() {
      return r.apply(s, arguments);
    };
  }, Ja;
}
var Ha, Am;
function Vp() {
  if (Am) return Ha;
  Am = 1;
  var t = /* @__PURE__ */ Jt(), e = t({}.toString), r = t("".slice);
  return Ha = function(n) {
    return r(e(n), 8, -1);
  }, Ha;
}
var Ga, jm;
function OS() {
  if (jm) return Ga;
  jm = 1;
  var t = /* @__PURE__ */ Vp(), e = /* @__PURE__ */ Jt();
  return Ga = function(r) {
    if (t(r) === "Function") return e(r);
  }, Ga;
}
var Ka, Pm;
function mt() {
  if (Pm) return Ka;
  Pm = 1;
  var t = typeof document == "object" && document.all;
  return Ka = typeof t > "u" && t !== void 0 ? function(e) {
    return typeof e == "function" || e === t;
  } : function(e) {
    return typeof e == "function";
  }, Ka;
}
var za = {}, Wa, $m;
function ur() {
  if ($m) return Wa;
  $m = 1;
  var t = /* @__PURE__ */ Ut();
  return Wa = !t(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  }), Wa;
}
var Ya, Rm;
function sn() {
  if (Rm) return Ya;
  Rm = 1;
  var t = /* @__PURE__ */ ao(), e = Function.prototype.call;
  return Ya = t ? e.bind(e) : function() {
    return e.apply(e, arguments);
  }, Ya;
}
var Xa = {}, Tm;
function g$() {
  if (Tm) return Xa;
  Tm = 1;
  var t = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, r = e && !t.call({ 1: 2 }, 1);
  return Xa.f = r ? function(s) {
    var i = e(this, s);
    return !!i && i.enumerable;
  } : t, Xa;
}
var Qa, _m;
function gs() {
  return _m || (_m = 1, Qa = function(t, e) {
    return {
      enumerable: !(t & 1),
      configurable: !(t & 2),
      writable: !(t & 4),
      value: e
    };
  }), Qa;
}
var Za, Cm;
function v$() {
  if (Cm) return Za;
  Cm = 1;
  var t = /* @__PURE__ */ Jt(), e = /* @__PURE__ */ Ut(), r = /* @__PURE__ */ Vp(), n = Object, s = t("".split);
  return Za = e(function() {
    return !n("z").propertyIsEnumerable(0);
  }) ? function(i) {
    return r(i) === "String" ? s(i, "") : n(i);
  } : n, Za;
}
var ec, Im;
function Bp() {
  return Im || (Im = 1, ec = function(t) {
    return t == null;
  }), ec;
}
var tc, Mm;
function co() {
  if (Mm) return tc;
  Mm = 1;
  var t = /* @__PURE__ */ Bp(), e = TypeError;
  return tc = function(r) {
    if (t(r)) throw new e("Can't call method on " + r);
    return r;
  }, tc;
}
var rc, km;
function vs() {
  if (km) return rc;
  km = 1;
  var t = /* @__PURE__ */ v$(), e = /* @__PURE__ */ co();
  return rc = function(r) {
    return t(e(r));
  }, rc;
}
var nc, Nm;
function Wt() {
  if (Nm) return nc;
  Nm = 1;
  var t = /* @__PURE__ */ mt();
  return nc = function(e) {
    return typeof e == "object" ? e !== null : t(e);
  }, nc;
}
var sc, Fm;
function Up() {
  return Fm || (Fm = 1, sc = {}), sc;
}
var ic, Dm;
function bs() {
  if (Dm) return ic;
  Dm = 1;
  var t = /* @__PURE__ */ Up(), e = /* @__PURE__ */ dt(), r = /* @__PURE__ */ mt(), n = function(s) {
    return r(s) ? s : void 0;
  };
  return ic = function(s, i) {
    return arguments.length < 2 ? n(t[s]) || n(e[s]) : t[s] && t[s][i] || e[s] && e[s][i];
  }, ic;
}
var oc, Lm;
function uo() {
  if (Lm) return oc;
  Lm = 1;
  var t = /* @__PURE__ */ Jt();
  return oc = t({}.isPrototypeOf), oc;
}
var ac, qm;
function b$() {
  if (qm) return ac;
  qm = 1;
  var t = /* @__PURE__ */ dt(), e = t.navigator, r = e && e.userAgent;
  return ac = r ? String(r) : "", ac;
}
var cc, Vm;
function E$() {
  if (Vm) return cc;
  Vm = 1;
  var t = /* @__PURE__ */ dt(), e = /* @__PURE__ */ b$(), r = t.process, n = t.Deno, s = r && r.versions || n && n.version, i = s && s.v8, o, a;
  return i && (o = i.split("."), a = o[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !a && e && (o = e.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = e.match(/Chrome\/(\d+)/), o && (a = +o[1]))), cc = a, cc;
}
var uc, Bm;
function wS() {
  if (Bm) return uc;
  Bm = 1;
  var t = /* @__PURE__ */ E$(), e = /* @__PURE__ */ Ut(), r = /* @__PURE__ */ dt(), n = r.String;
  return uc = !!Object.getOwnPropertySymbols && !e(function() {
    var s = Symbol("symbol detection");
    return !n(s) || !(Object(s) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && t && t < 41;
  }), uc;
}
var lc, Um;
function AS() {
  if (Um) return lc;
  Um = 1;
  var t = /* @__PURE__ */ wS();
  return lc = t && !Symbol.sham && typeof Symbol.iterator == "symbol", lc;
}
var fc, Jm;
function jS() {
  if (Jm) return fc;
  Jm = 1;
  var t = /* @__PURE__ */ bs(), e = /* @__PURE__ */ mt(), r = /* @__PURE__ */ uo(), n = /* @__PURE__ */ AS(), s = Object;
  return fc = n ? function(i) {
    return typeof i == "symbol";
  } : function(i) {
    var o = t("Symbol");
    return e(o) && r(o.prototype, s(i));
  }, fc;
}
var pc, Hm;
function Jp() {
  if (Hm) return pc;
  Hm = 1;
  var t = String;
  return pc = function(e) {
    try {
      return t(e);
    } catch {
      return "Object";
    }
  }, pc;
}
var hc, Gm;
function lo() {
  if (Gm) return hc;
  Gm = 1;
  var t = /* @__PURE__ */ mt(), e = /* @__PURE__ */ Jp(), r = TypeError;
  return hc = function(n) {
    if (t(n)) return n;
    throw new r(e(n) + " is not a function");
  }, hc;
}
var dc, Km;
function Hp() {
  if (Km) return dc;
  Km = 1;
  var t = /* @__PURE__ */ lo(), e = /* @__PURE__ */ Bp();
  return dc = function(r, n) {
    var s = r[n];
    return e(s) ? void 0 : t(s);
  }, dc;
}
var mc, zm;
function S$() {
  if (zm) return mc;
  zm = 1;
  var t = /* @__PURE__ */ sn(), e = /* @__PURE__ */ mt(), r = /* @__PURE__ */ Wt(), n = TypeError;
  return mc = function(s, i) {
    var o, a;
    if (i === "string" && e(o = s.toString) && !r(a = t(o, s)) || e(o = s.valueOf) && !r(a = t(o, s)) || i !== "string" && e(o = s.toString) && !r(a = t(o, s))) return a;
    throw new n("Can't convert object to primitive value");
  }, mc;
}
var yc = { exports: {} }, gc, Wm;
function Es() {
  return Wm || (Wm = 1, gc = !0), gc;
}
var vc, Ym;
function x$() {
  if (Ym) return vc;
  Ym = 1;
  var t = /* @__PURE__ */ dt(), e = Object.defineProperty;
  return vc = function(r, n) {
    try {
      e(t, r, { value: n, configurable: !0, writable: !0 });
    } catch {
      t[r] = n;
    }
    return n;
  }, vc;
}
var Xm;
function PS() {
  if (Xm) return yc.exports;
  Xm = 1;
  var t = /* @__PURE__ */ Es(), e = /* @__PURE__ */ dt(), r = /* @__PURE__ */ x$(), n = "__core-js_shared__", s = yc.exports = e[n] || r(n, {});
  return (s.versions || (s.versions = [])).push({
    version: "3.46.0",
    mode: t ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
    license: "https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), yc.exports;
}
var bc, Qm;
function $S() {
  if (Qm) return bc;
  Qm = 1;
  var t = /* @__PURE__ */ PS();
  return bc = function(e, r) {
    return t[e] || (t[e] = r || {});
  }, bc;
}
var Ec, Zm;
function RS() {
  if (Zm) return Ec;
  Zm = 1;
  var t = /* @__PURE__ */ co(), e = Object;
  return Ec = function(r) {
    return e(t(r));
  }, Ec;
}
var Sc, ey;
function Yt() {
  if (ey) return Sc;
  ey = 1;
  var t = /* @__PURE__ */ Jt(), e = /* @__PURE__ */ RS(), r = t({}.hasOwnProperty);
  return Sc = Object.hasOwn || function(s, i) {
    return r(e(s), i);
  }, Sc;
}
var xc, ty;
function TS() {
  if (ty) return xc;
  ty = 1;
  var t = /* @__PURE__ */ Jt(), e = 0, r = Math.random(), n = t(1.1.toString);
  return xc = function(s) {
    return "Symbol(" + (s === void 0 ? "" : s) + ")_" + n(++e + r, 36);
  }, xc;
}
var Oc, ry;
function lr() {
  if (ry) return Oc;
  ry = 1;
  var t = /* @__PURE__ */ dt(), e = /* @__PURE__ */ $S(), r = /* @__PURE__ */ Yt(), n = /* @__PURE__ */ TS(), s = /* @__PURE__ */ wS(), i = /* @__PURE__ */ AS(), o = t.Symbol, a = e("wks"), c = i ? o.for || o : o && o.withoutSetter || n;
  return Oc = function(u) {
    return r(a, u) || (a[u] = s && r(o, u) ? o[u] : c("Symbol." + u)), a[u];
  }, Oc;
}
var wc, ny;
function O$() {
  if (ny) return wc;
  ny = 1;
  var t = /* @__PURE__ */ sn(), e = /* @__PURE__ */ Wt(), r = /* @__PURE__ */ jS(), n = /* @__PURE__ */ Hp(), s = /* @__PURE__ */ S$(), i = /* @__PURE__ */ lr(), o = TypeError, a = i("toPrimitive");
  return wc = function(c, u) {
    if (!e(c) || r(c)) return c;
    var f = n(c, a), l;
    if (f) {
      if (u === void 0 && (u = "default"), l = t(f, c, u), !e(l) || r(l)) return l;
      throw new o("Can't convert object to primitive value");
    }
    return u === void 0 && (u = "number"), s(c, u);
  }, wc;
}
var Ac, sy;
function _S() {
  if (sy) return Ac;
  sy = 1;
  var t = /* @__PURE__ */ O$(), e = /* @__PURE__ */ jS();
  return Ac = function(r) {
    var n = t(r, "string");
    return e(n) ? n : n + "";
  }, Ac;
}
var jc, iy;
function CS() {
  if (iy) return jc;
  iy = 1;
  var t = /* @__PURE__ */ dt(), e = /* @__PURE__ */ Wt(), r = t.document, n = e(r) && e(r.createElement);
  return jc = function(s) {
    return n ? r.createElement(s) : {};
  }, jc;
}
var Pc, oy;
function IS() {
  if (oy) return Pc;
  oy = 1;
  var t = /* @__PURE__ */ ur(), e = /* @__PURE__ */ Ut(), r = /* @__PURE__ */ CS();
  return Pc = !t && !e(function() {
    return Object.defineProperty(r("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), Pc;
}
var ay;
function MS() {
  if (ay) return za;
  ay = 1;
  var t = /* @__PURE__ */ ur(), e = /* @__PURE__ */ sn(), r = /* @__PURE__ */ g$(), n = /* @__PURE__ */ gs(), s = /* @__PURE__ */ vs(), i = /* @__PURE__ */ _S(), o = /* @__PURE__ */ Yt(), a = /* @__PURE__ */ IS(), c = Object.getOwnPropertyDescriptor;
  return za.f = t ? c : function(f, l) {
    if (f = s(f), l = i(l), a) try {
      return c(f, l);
    } catch {
    }
    if (o(f, l)) return n(!e(r.f, f, l), f[l]);
  }, za;
}
var $c, cy;
function w$() {
  if (cy) return $c;
  cy = 1;
  var t = /* @__PURE__ */ Ut(), e = /* @__PURE__ */ mt(), r = /#|\.prototype\./, n = function(c, u) {
    var f = i[s(c)];
    return f === a ? !0 : f === o ? !1 : e(u) ? t(u) : !!u;
  }, s = n.normalize = function(c) {
    return String(c).replace(r, ".").toLowerCase();
  }, i = n.data = {}, o = n.NATIVE = "N", a = n.POLYFILL = "P";
  return $c = n, $c;
}
var Rc, uy;
function kS() {
  if (uy) return Rc;
  uy = 1;
  var t = /* @__PURE__ */ OS(), e = /* @__PURE__ */ lo(), r = /* @__PURE__ */ ao(), n = t(t.bind);
  return Rc = function(s, i) {
    return e(s), i === void 0 ? s : r ? n(s, i) : function() {
      return s.apply(i, arguments);
    };
  }, Rc;
}
var Tc = {}, _c, ly;
function NS() {
  if (ly) return _c;
  ly = 1;
  var t = /* @__PURE__ */ ur(), e = /* @__PURE__ */ Ut();
  return _c = t && e(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), _c;
}
var Cc, fy;
function on() {
  if (fy) return Cc;
  fy = 1;
  var t = /* @__PURE__ */ Wt(), e = String, r = TypeError;
  return Cc = function(n) {
    if (t(n)) return n;
    throw new r(e(n) + " is not an object");
  }, Cc;
}
var py;
function Ln() {
  if (py) return Tc;
  py = 1;
  var t = /* @__PURE__ */ ur(), e = /* @__PURE__ */ IS(), r = /* @__PURE__ */ NS(), n = /* @__PURE__ */ on(), s = /* @__PURE__ */ _S(), i = TypeError, o = Object.defineProperty, a = Object.getOwnPropertyDescriptor, c = "enumerable", u = "configurable", f = "writable";
  return Tc.f = t ? r ? function(d, p, m) {
    if (n(d), p = s(p), n(m), typeof d == "function" && p === "prototype" && "value" in m && f in m && !m[f]) {
      var h = a(d, p);
      h && h[f] && (d[p] = m.value, m = {
        configurable: u in m ? m[u] : h[u],
        enumerable: c in m ? m[c] : h[c],
        writable: !1
      });
    }
    return o(d, p, m);
  } : o : function(d, p, m) {
    if (n(d), p = s(p), n(m), e) try {
      return o(d, p, m);
    } catch {
    }
    if ("get" in m || "set" in m) throw new i("Accessors not supported");
    return "value" in m && (d[p] = m.value), d;
  }, Tc;
}
var Ic, hy;
function fr() {
  if (hy) return Ic;
  hy = 1;
  var t = /* @__PURE__ */ ur(), e = /* @__PURE__ */ Ln(), r = /* @__PURE__ */ gs();
  return Ic = t ? function(n, s, i) {
    return e.f(n, s, r(1, i));
  } : function(n, s, i) {
    return n[s] = i, n;
  }, Ic;
}
var Mc, dy;
function fo() {
  if (dy) return Mc;
  dy = 1;
  var t = /* @__PURE__ */ dt(), e = /* @__PURE__ */ qp(), r = /* @__PURE__ */ OS(), n = /* @__PURE__ */ mt(), s = MS().f, i = /* @__PURE__ */ w$(), o = /* @__PURE__ */ Up(), a = /* @__PURE__ */ kS(), c = /* @__PURE__ */ fr(), u = /* @__PURE__ */ Yt(), f = function(l) {
    var d = function(p, m, h) {
      if (this instanceof d) {
        switch (arguments.length) {
          case 0:
            return new l();
          case 1:
            return new l(p);
          case 2:
            return new l(p, m);
        }
        return new l(p, m, h);
      }
      return e(l, this, arguments);
    };
    return d.prototype = l.prototype, d;
  };
  return Mc = function(l, d) {
    var p = l.target, m = l.global, h = l.stat, v = l.proto, b = m ? t : h ? t[p] : t[p] && t[p].prototype, g = m ? o : o[p] || c(o, p, {})[p], S = g.prototype, E, O, A, $, w, C, T, x, P;
    for ($ in d)
      E = i(m ? $ : p + (h ? "." : "#") + $, l.forced), O = !E && b && u(b, $), C = g[$], O && (l.dontCallGetSet ? (P = s(b, $), T = P && P.value) : T = b[$]), w = O && T ? T : d[$], !(!E && !v && typeof C == typeof w) && (l.bind && O ? x = a(w, t) : l.wrap && O ? x = f(w) : v && n(w) ? x = r(w) : x = w, (l.sham || w && w.sham || C && C.sham) && c(x, "sham", !0), c(g, $, x), v && (A = p + "Prototype", u(o, A) || c(o, A, {}), c(o[A], $, w), l.real && S && (E || !S[$]) && c(S, $, w)));
  }, Mc;
}
var kc, my;
function Gp() {
  if (my) return kc;
  my = 1;
  var t = /* @__PURE__ */ $S(), e = /* @__PURE__ */ TS(), r = t("keys");
  return kc = function(n) {
    return r[n] || (r[n] = e(n));
  }, kc;
}
var Nc, yy;
function A$() {
  if (yy) return Nc;
  yy = 1;
  var t = /* @__PURE__ */ Ut();
  return Nc = !t(function() {
    function e() {
    }
    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
  }), Nc;
}
var Fc, gy;
function Kp() {
  if (gy) return Fc;
  gy = 1;
  var t = /* @__PURE__ */ Yt(), e = /* @__PURE__ */ mt(), r = /* @__PURE__ */ RS(), n = /* @__PURE__ */ Gp(), s = /* @__PURE__ */ A$(), i = n("IE_PROTO"), o = Object, a = o.prototype;
  return Fc = s ? o.getPrototypeOf : function(c) {
    var u = r(c);
    if (t(u, i)) return u[i];
    var f = u.constructor;
    return e(f) && u instanceof f ? f.prototype : u instanceof o ? a : null;
  }, Fc;
}
var Dc, vy;
function j$() {
  if (vy) return Dc;
  vy = 1;
  var t = /* @__PURE__ */ Jt(), e = /* @__PURE__ */ lo();
  return Dc = function(r, n, s) {
    try {
      return t(e(Object.getOwnPropertyDescriptor(r, n)[s]));
    } catch {
    }
  }, Dc;
}
var Lc, by;
function P$() {
  if (by) return Lc;
  by = 1;
  var t = /* @__PURE__ */ Wt();
  return Lc = function(e) {
    return t(e) || e === null;
  }, Lc;
}
var qc, Ey;
function $$() {
  if (Ey) return qc;
  Ey = 1;
  var t = /* @__PURE__ */ P$(), e = String, r = TypeError;
  return qc = function(n) {
    if (t(n)) return n;
    throw new r("Can't set " + e(n) + " as a prototype");
  }, qc;
}
var Vc, Sy;
function po() {
  if (Sy) return Vc;
  Sy = 1;
  var t = /* @__PURE__ */ j$(), e = /* @__PURE__ */ Wt(), r = /* @__PURE__ */ co(), n = /* @__PURE__ */ $$();
  return Vc = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
    var s = !1, i = {}, o;
    try {
      o = t(Object.prototype, "__proto__", "set"), o(i, []), s = i instanceof Array;
    } catch {
    }
    return function(c, u) {
      return r(c), n(u), e(c) && (s ? o(c, u) : c.__proto__ = u), c;
    };
  })() : void 0), Vc;
}
var Bc = {}, Uc, xy;
function R$() {
  if (xy) return Uc;
  xy = 1;
  var t = Math.ceil, e = Math.floor;
  return Uc = Math.trunc || function(n) {
    var s = +n;
    return (s > 0 ? e : t)(s);
  }, Uc;
}
var Jc, Oy;
function zp() {
  if (Oy) return Jc;
  Oy = 1;
  var t = /* @__PURE__ */ R$();
  return Jc = function(e) {
    var r = +e;
    return r !== r || r === 0 ? 0 : t(r);
  }, Jc;
}
var Hc, wy;
function T$() {
  if (wy) return Hc;
  wy = 1;
  var t = /* @__PURE__ */ zp(), e = Math.max, r = Math.min;
  return Hc = function(n, s) {
    var i = t(n);
    return i < 0 ? e(i + s, 0) : r(i, s);
  }, Hc;
}
var Gc, Ay;
function _$() {
  if (Ay) return Gc;
  Ay = 1;
  var t = /* @__PURE__ */ zp(), e = Math.min;
  return Gc = function(r) {
    var n = t(r);
    return n > 0 ? e(n, 9007199254740991) : 0;
  }, Gc;
}
var Kc, jy;
function FS() {
  if (jy) return Kc;
  jy = 1;
  var t = /* @__PURE__ */ _$();
  return Kc = function(e) {
    return t(e.length);
  }, Kc;
}
var zc, Py;
function C$() {
  if (Py) return zc;
  Py = 1;
  var t = /* @__PURE__ */ vs(), e = /* @__PURE__ */ T$(), r = /* @__PURE__ */ FS(), n = function(s) {
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
  return zc = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: n(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: n(!1)
  }, zc;
}
var Wc, $y;
function Wp() {
  return $y || ($y = 1, Wc = {}), Wc;
}
var Yc, Ry;
function DS() {
  if (Ry) return Yc;
  Ry = 1;
  var t = /* @__PURE__ */ Jt(), e = /* @__PURE__ */ Yt(), r = /* @__PURE__ */ vs(), n = C$().indexOf, s = /* @__PURE__ */ Wp(), i = t([].push);
  return Yc = function(o, a) {
    var c = r(o), u = 0, f = [], l;
    for (l in c) !e(s, l) && e(c, l) && i(f, l);
    for (; a.length > u; ) e(c, l = a[u++]) && (~n(f, l) || i(f, l));
    return f;
  }, Yc;
}
var Xc, Ty;
function Yp() {
  return Ty || (Ty = 1, Xc = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ]), Xc;
}
var _y;
function I$() {
  if (_y) return Bc;
  _y = 1;
  var t = /* @__PURE__ */ DS(), e = /* @__PURE__ */ Yp(), r = e.concat("length", "prototype");
  return Bc.f = Object.getOwnPropertyNames || function(s) {
    return t(s, r);
  }, Bc;
}
var Qc = {}, Cy;
function M$() {
  return Cy || (Cy = 1, Qc.f = Object.getOwnPropertySymbols), Qc;
}
var Zc, Iy;
function k$() {
  if (Iy) return Zc;
  Iy = 1;
  var t = /* @__PURE__ */ bs(), e = /* @__PURE__ */ Jt(), r = /* @__PURE__ */ I$(), n = /* @__PURE__ */ M$(), s = /* @__PURE__ */ on(), i = e([].concat);
  return Zc = t("Reflect", "ownKeys") || function(a) {
    var c = r.f(s(a)), u = n.f;
    return u ? i(c, u(a)) : c;
  }, Zc;
}
var eu, My;
function LS() {
  if (My) return eu;
  My = 1;
  var t = /* @__PURE__ */ Yt(), e = /* @__PURE__ */ k$(), r = /* @__PURE__ */ MS(), n = /* @__PURE__ */ Ln();
  return eu = function(s, i, o) {
    for (var a = e(i), c = n.f, u = r.f, f = 0; f < a.length; f++) {
      var l = a[f];
      !t(s, l) && !(o && t(o, l)) && c(s, l, u(i, l));
    }
  }, eu;
}
var tu = {}, ru, ky;
function N$() {
  if (ky) return ru;
  ky = 1;
  var t = /* @__PURE__ */ DS(), e = /* @__PURE__ */ Yp();
  return ru = Object.keys || function(n) {
    return t(n, e);
  }, ru;
}
var Ny;
function F$() {
  if (Ny) return tu;
  Ny = 1;
  var t = /* @__PURE__ */ ur(), e = /* @__PURE__ */ NS(), r = /* @__PURE__ */ Ln(), n = /* @__PURE__ */ on(), s = /* @__PURE__ */ vs(), i = /* @__PURE__ */ N$();
  return tu.f = t && !e ? Object.defineProperties : function(a, c) {
    n(a);
    for (var u = s(c), f = i(c), l = f.length, d = 0, p; l > d; ) r.f(a, p = f[d++], u[p]);
    return a;
  }, tu;
}
var nu, Fy;
function D$() {
  if (Fy) return nu;
  Fy = 1;
  var t = /* @__PURE__ */ bs();
  return nu = t("document", "documentElement"), nu;
}
var su, Dy;
function Xp() {
  if (Dy) return su;
  Dy = 1;
  var t = /* @__PURE__ */ on(), e = /* @__PURE__ */ F$(), r = /* @__PURE__ */ Yp(), n = /* @__PURE__ */ Wp(), s = /* @__PURE__ */ D$(), i = /* @__PURE__ */ CS(), o = /* @__PURE__ */ Gp(), a = ">", c = "<", u = "prototype", f = "script", l = o("IE_PROTO"), d = function() {
  }, p = function(g) {
    return c + f + a + g + c + "/" + f + a;
  }, m = function(g) {
    g.write(p("")), g.close();
    var S = g.parentWindow.Object;
    return g = null, S;
  }, h = function() {
    var g = i("iframe"), S = "java" + f + ":", E;
    return g.style.display = "none", s.appendChild(g), g.src = String(S), E = g.contentWindow.document, E.open(), E.write(p("document.F=Object")), E.close(), E.F;
  }, v, b = function() {
    try {
      v = new ActiveXObject("htmlfile");
    } catch {
    }
    b = typeof document < "u" ? document.domain && v ? m(v) : h() : m(v);
    for (var g = r.length; g--; ) delete b[u][r[g]];
    return b();
  };
  return n[l] = !0, su = Object.create || function(S, E) {
    var O;
    return S !== null ? (d[u] = t(S), O = new d(), d[u] = null, O[l] = S) : O = b(), E === void 0 ? O : e.f(O, E);
  }, su;
}
var iu, Ly;
function qS() {
  if (Ly) return iu;
  Ly = 1;
  var t = /* @__PURE__ */ Wt(), e = /* @__PURE__ */ fr();
  return iu = function(r, n) {
    t(n) && "cause" in n && e(r, "cause", n.cause);
  }, iu;
}
var ou, qy;
function L$() {
  if (qy) return ou;
  qy = 1;
  var t = /* @__PURE__ */ Jt(), e = Error, r = t("".replace), n = (function(o) {
    return String(new e(o).stack);
  })("zxcasd"), s = /\n\s*at [^:]*:[^\n]*/, i = s.test(n);
  return ou = function(o, a) {
    if (i && typeof o == "string" && !e.prepareStackTrace)
      for (; a--; ) o = r(o, s, "");
    return o;
  }, ou;
}
var au, Vy;
function q$() {
  if (Vy) return au;
  Vy = 1;
  var t = /* @__PURE__ */ Ut(), e = /* @__PURE__ */ gs();
  return au = !t(function() {
    var r = new Error("a");
    return "stack" in r ? (Object.defineProperty(r, "stack", e(1, 7)), r.stack !== 7) : !0;
  }), au;
}
var cu, By;
function VS() {
  if (By) return cu;
  By = 1;
  var t = /* @__PURE__ */ fr(), e = /* @__PURE__ */ L$(), r = /* @__PURE__ */ q$(), n = Error.captureStackTrace;
  return cu = function(s, i, o, a) {
    r && (n ? n(s, i) : t(s, "stack", e(o, a)));
  }, cu;
}
var uu, Uy;
function qn() {
  return Uy || (Uy = 1, uu = {}), uu;
}
var lu, Jy;
function V$() {
  if (Jy) return lu;
  Jy = 1;
  var t = /* @__PURE__ */ lr(), e = /* @__PURE__ */ qn(), r = t("iterator"), n = Array.prototype;
  return lu = function(s) {
    return s !== void 0 && (e.Array === s || n[r] === s);
  }, lu;
}
var fu, Hy;
function Qp() {
  if (Hy) return fu;
  Hy = 1;
  var t = /* @__PURE__ */ lr(), e = t("toStringTag"), r = {};
  return r[e] = "z", fu = String(r) === "[object z]", fu;
}
var pu, Gy;
function Zp() {
  if (Gy) return pu;
  Gy = 1;
  var t = /* @__PURE__ */ Qp(), e = /* @__PURE__ */ mt(), r = /* @__PURE__ */ Vp(), n = /* @__PURE__ */ lr(), s = n("toStringTag"), i = Object, o = r(/* @__PURE__ */ (function() {
    return arguments;
  })()) === "Arguments", a = function(c, u) {
    try {
      return c[u];
    } catch {
    }
  };
  return pu = t ? r : function(c) {
    var u, f, l;
    return c === void 0 ? "Undefined" : c === null ? "Null" : typeof (f = a(u = i(c), s)) == "string" ? f : o ? r(u) : (l = r(u)) === "Object" && e(u.callee) ? "Arguments" : l;
  }, pu;
}
var hu, Ky;
function BS() {
  if (Ky) return hu;
  Ky = 1;
  var t = /* @__PURE__ */ Zp(), e = /* @__PURE__ */ Hp(), r = /* @__PURE__ */ Bp(), n = /* @__PURE__ */ qn(), s = /* @__PURE__ */ lr(), i = s("iterator");
  return hu = function(o) {
    if (!r(o)) return e(o, i) || e(o, "@@iterator") || n[t(o)];
  }, hu;
}
var du, zy;
function B$() {
  if (zy) return du;
  zy = 1;
  var t = /* @__PURE__ */ sn(), e = /* @__PURE__ */ lo(), r = /* @__PURE__ */ on(), n = /* @__PURE__ */ Jp(), s = /* @__PURE__ */ BS(), i = TypeError;
  return du = function(o, a) {
    var c = arguments.length < 2 ? s(o) : a;
    if (e(c)) return r(t(c, o));
    throw new i(n(o) + " is not iterable");
  }, du;
}
var mu, Wy;
function U$() {
  if (Wy) return mu;
  Wy = 1;
  var t = /* @__PURE__ */ sn(), e = /* @__PURE__ */ on(), r = /* @__PURE__ */ Hp();
  return mu = function(n, s, i) {
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
  }, mu;
}
var yu, Yy;
function J$() {
  if (Yy) return yu;
  Yy = 1;
  var t = /* @__PURE__ */ kS(), e = /* @__PURE__ */ sn(), r = /* @__PURE__ */ on(), n = /* @__PURE__ */ Jp(), s = /* @__PURE__ */ V$(), i = /* @__PURE__ */ FS(), o = /* @__PURE__ */ uo(), a = /* @__PURE__ */ B$(), c = /* @__PURE__ */ BS(), u = /* @__PURE__ */ U$(), f = TypeError, l = function(p, m) {
    this.stopped = p, this.result = m;
  }, d = l.prototype;
  return yu = function(p, m, h) {
    var v = h && h.that, b = !!(h && h.AS_ENTRIES), g = !!(h && h.IS_RECORD), S = !!(h && h.IS_ITERATOR), E = !!(h && h.INTERRUPTED), O = t(m, v), A, $, w, C, T, x, P, R = function(F) {
      return A && u(A, "normal"), new l(!0, F);
    }, q = function(F) {
      return b ? (r(F), E ? O(F[0], F[1], R) : O(F[0], F[1])) : E ? O(F, R) : O(F);
    };
    if (g)
      A = p.iterator;
    else if (S)
      A = p;
    else {
      if ($ = c(p), !$) throw new f(n(p) + " is not iterable");
      if (s($)) {
        for (w = 0, C = i(p); C > w; w++)
          if (T = q(p[w]), T && o(d, T)) return T;
        return new l(!1);
      }
      A = a(p, $);
    }
    for (x = g ? p.next : A.next; !(P = e(x, A)).done; ) {
      try {
        T = q(P.value);
      } catch (F) {
        u(A, "throw", F);
      }
      if (typeof T == "object" && T && o(d, T)) return T;
    }
    return new l(!1);
  }, yu;
}
var gu, Xy;
function eh() {
  if (Xy) return gu;
  Xy = 1;
  var t = /* @__PURE__ */ Zp(), e = String;
  return gu = function(r) {
    if (t(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return e(r);
  }, gu;
}
var vu, Qy;
function US() {
  if (Qy) return vu;
  Qy = 1;
  var t = /* @__PURE__ */ eh();
  return vu = function(e, r) {
    return e === void 0 ? arguments.length < 2 ? "" : r : t(e);
  }, vu;
}
var Zy;
function H$() {
  if (Zy) return bm;
  Zy = 1;
  var t = /* @__PURE__ */ fo(), e = /* @__PURE__ */ uo(), r = /* @__PURE__ */ Kp(), n = /* @__PURE__ */ po(), s = /* @__PURE__ */ LS(), i = /* @__PURE__ */ Xp(), o = /* @__PURE__ */ fr(), a = /* @__PURE__ */ gs(), c = /* @__PURE__ */ qS(), u = /* @__PURE__ */ VS(), f = /* @__PURE__ */ J$(), l = /* @__PURE__ */ US(), d = /* @__PURE__ */ lr(), p = d("toStringTag"), m = Error, h = [].push, v = function(S, E) {
    var O = e(b, this), A;
    n ? A = n(new m(), O ? r(this) : b) : (A = O ? this : i(b), o(A, p, "Error")), E !== void 0 && o(A, "message", l(E)), u(A, v, A.stack, 1), arguments.length > 2 && c(A, arguments[2]);
    var $ = [];
    return f(S, h, { that: $ }), o(A, "errors", $), A;
  };
  n ? n(v, m) : s(v, m, { name: !0 });
  var b = v.prototype = i(m.prototype, {
    constructor: a(1, v),
    message: a(1, ""),
    name: a(1, "AggregateError")
  });
  return t({ global: !0, constructor: !0, arity: 2 }, {
    AggregateError: v
  }), bm;
}
var eg;
function JS() {
  return eg || (eg = 1, H$()), vm;
}
var tg;
function HS() {
  return tg || (tg = 1, JS()), gm;
}
var rg = {}, bu, ng;
function G$() {
  if (ng) return bu;
  ng = 1;
  var t = Ln().f;
  return bu = function(e, r, n) {
    n in e || t(e, n, {
      configurable: !0,
      get: function() {
        return r[n];
      },
      set: function(s) {
        r[n] = s;
      }
    });
  }, bu;
}
var Eu, sg;
function K$() {
  if (sg) return Eu;
  sg = 1;
  var t = /* @__PURE__ */ mt(), e = /* @__PURE__ */ Wt(), r = /* @__PURE__ */ po();
  return Eu = function(n, s, i) {
    var o, a;
    return (
      // it can work only with native `setPrototypeOf`
      r && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      t(o = s.constructor) && o !== i && e(a = o.prototype) && a !== i.prototype && r(n, a), n
    );
  }, Eu;
}
var Su, ig;
function GS() {
  if (ig) return Su;
  ig = 1;
  var t = /* @__PURE__ */ bs(), e = /* @__PURE__ */ Yt(), r = /* @__PURE__ */ fr(), n = /* @__PURE__ */ uo(), s = /* @__PURE__ */ po(), i = /* @__PURE__ */ LS(), o = /* @__PURE__ */ G$(), a = /* @__PURE__ */ K$(), c = /* @__PURE__ */ US(), u = /* @__PURE__ */ qS(), f = /* @__PURE__ */ VS(), l = /* @__PURE__ */ ur(), d = /* @__PURE__ */ Es();
  return Su = function(p, m, h, v) {
    var b = "stackTraceLimit", g = v ? 2 : 1, S = p.split("."), E = S[S.length - 1], O = t.apply(null, S);
    if (O) {
      var A = O.prototype;
      if (!d && e(A, "cause") && delete A.cause, !h) return O;
      var $ = t("Error"), w = m(function(C, T) {
        var x = c(v ? T : C, void 0), P = v ? new O(C) : new O();
        return x !== void 0 && r(P, "message", x), f(P, w, P.stack, 2), this && n(A, this) && a(P, this, w), arguments.length > g && u(P, arguments[g]), P;
      });
      if (w.prototype = A, E !== "Error" ? s ? s(w, $) : i(w, $, { name: !0 }) : l && b in O && (o(w, O, b), o(w, O, "prepareStackTrace")), i(w, O), !d) try {
        A.name !== E && r(A, "name", E), A.constructor = w;
      } catch {
      }
      return w;
    }
  }, Su;
}
var og;
function z$() {
  if (og) return rg;
  og = 1;
  var t = /* @__PURE__ */ fo(), e = /* @__PURE__ */ dt(), r = /* @__PURE__ */ qp(), n = /* @__PURE__ */ GS(), s = "WebAssembly", i = e[s], o = new Error("e", { cause: 7 }).cause !== 7, a = function(u, f) {
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
  }), rg;
}
var ag = {}, cg;
function W$() {
  if (cg) return ag;
  cg = 1;
  var t = /* @__PURE__ */ fo(), e = /* @__PURE__ */ bs(), r = /* @__PURE__ */ qp(), n = /* @__PURE__ */ Ut(), s = /* @__PURE__ */ GS(), i = "AggregateError", o = e(i), a = !n(function() {
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
  }), ag;
}
var xu, ug;
function Y$() {
  return ug || (ug = 1, xu = function() {
  }), xu;
}
var Ou, lg;
function X$() {
  if (lg) return Ou;
  lg = 1;
  var t = /* @__PURE__ */ dt(), e = /* @__PURE__ */ mt(), r = t.WeakMap;
  return Ou = e(r) && /native code/.test(String(r)), Ou;
}
var wu, fg;
function KS() {
  if (fg) return wu;
  fg = 1;
  var t = /* @__PURE__ */ X$(), e = /* @__PURE__ */ dt(), r = /* @__PURE__ */ Wt(), n = /* @__PURE__ */ fr(), s = /* @__PURE__ */ Yt(), i = /* @__PURE__ */ PS(), o = /* @__PURE__ */ Gp(), a = /* @__PURE__ */ Wp(), c = "Object already initialized", u = e.TypeError, f = e.WeakMap, l, d, p, m = function(g) {
    return p(g) ? d(g) : l(g, {});
  }, h = function(g) {
    return function(S) {
      var E;
      if (!r(S) || (E = d(S)).type !== g)
        throw new u("Incompatible receiver, " + g + " required");
      return E;
    };
  };
  if (t || i.state) {
    var v = i.state || (i.state = new f());
    v.get = v.get, v.has = v.has, v.set = v.set, l = function(g, S) {
      if (v.has(g)) throw new u(c);
      return S.facade = g, v.set(g, S), S;
    }, d = function(g) {
      return v.get(g) || {};
    }, p = function(g) {
      return v.has(g);
    };
  } else {
    var b = o("state");
    a[b] = !0, l = function(g, S) {
      if (s(g, b)) throw new u(c);
      return S.facade = g, n(g, b, S), S;
    }, d = function(g) {
      return s(g, b) ? g[b] : {};
    }, p = function(g) {
      return s(g, b);
    };
  }
  return wu = {
    set: l,
    get: d,
    has: p,
    enforce: m,
    getterFor: h
  }, wu;
}
var Au, pg;
function Q$() {
  if (pg) return Au;
  pg = 1;
  var t = /* @__PURE__ */ ur(), e = /* @__PURE__ */ Yt(), r = Function.prototype, n = t && Object.getOwnPropertyDescriptor, s = e(r, "name"), i = s && (function() {
  }).name === "something", o = s && (!t || t && n(r, "name").configurable);
  return Au = {
    EXISTS: s,
    PROPER: i,
    CONFIGURABLE: o
  }, Au;
}
var ju, hg;
function zS() {
  if (hg) return ju;
  hg = 1;
  var t = /* @__PURE__ */ fr();
  return ju = function(e, r, n, s) {
    return s && s.enumerable ? e[r] = n : t(e, r, n), e;
  }, ju;
}
var Pu, dg;
function WS() {
  if (dg) return Pu;
  dg = 1;
  var t = /* @__PURE__ */ Ut(), e = /* @__PURE__ */ mt(), r = /* @__PURE__ */ Wt(), n = /* @__PURE__ */ Xp(), s = /* @__PURE__ */ Kp(), i = /* @__PURE__ */ zS(), o = /* @__PURE__ */ lr(), a = /* @__PURE__ */ Es(), c = o("iterator"), u = !1, f, l, d;
  [].keys && (d = [].keys(), "next" in d ? (l = s(s(d)), l !== Object.prototype && (f = l)) : u = !0);
  var p = !r(f) || t(function() {
    var m = {};
    return f[c].call(m) !== m;
  });
  return p ? f = {} : a && (f = n(f)), e(f[c]) || i(f, c, function() {
    return this;
  }), Pu = {
    IteratorPrototype: f,
    BUGGY_SAFARI_ITERATORS: u
  }, Pu;
}
var $u, mg;
function Z$() {
  if (mg) return $u;
  mg = 1;
  var t = /* @__PURE__ */ Qp(), e = /* @__PURE__ */ Zp();
  return $u = t ? {}.toString : function() {
    return "[object " + e(this) + "]";
  }, $u;
}
var Ru, yg;
function th() {
  if (yg) return Ru;
  yg = 1;
  var t = /* @__PURE__ */ Qp(), e = Ln().f, r = /* @__PURE__ */ fr(), n = /* @__PURE__ */ Yt(), s = /* @__PURE__ */ Z$(), i = /* @__PURE__ */ lr(), o = i("toStringTag");
  return Ru = function(a, c, u, f) {
    var l = u ? a : a && a.prototype;
    l && (n(l, o) || e(l, o, { configurable: !0, value: c }), f && !t && r(l, "toString", s));
  }, Ru;
}
var Tu, gg;
function eR() {
  if (gg) return Tu;
  gg = 1;
  var t = WS().IteratorPrototype, e = /* @__PURE__ */ Xp(), r = /* @__PURE__ */ gs(), n = /* @__PURE__ */ th(), s = /* @__PURE__ */ qn(), i = function() {
    return this;
  };
  return Tu = function(o, a, c, u) {
    var f = a + " Iterator";
    return o.prototype = e(t, { next: r(+!u, c) }), n(o, f, !1, !0), s[f] = i, o;
  }, Tu;
}
var _u, vg;
function YS() {
  if (vg) return _u;
  vg = 1;
  var t = /* @__PURE__ */ fo(), e = /* @__PURE__ */ sn(), r = /* @__PURE__ */ Es(), n = /* @__PURE__ */ Q$(), s = /* @__PURE__ */ mt(), i = /* @__PURE__ */ eR(), o = /* @__PURE__ */ Kp(), a = /* @__PURE__ */ po(), c = /* @__PURE__ */ th(), u = /* @__PURE__ */ fr(), f = /* @__PURE__ */ zS(), l = /* @__PURE__ */ lr(), d = /* @__PURE__ */ qn(), p = /* @__PURE__ */ WS(), m = n.PROPER, h = n.CONFIGURABLE, v = p.IteratorPrototype, b = p.BUGGY_SAFARI_ITERATORS, g = l("iterator"), S = "keys", E = "values", O = "entries", A = function() {
    return this;
  };
  return _u = function($, w, C, T, x, P, R) {
    i(C, w, T);
    var q = function(ne) {
      if (ne === x && _) return _;
      if (!b && ne && ne in te) return te[ne];
      switch (ne) {
        case S:
          return function() {
            return new C(this, ne);
          };
        case E:
          return function() {
            return new C(this, ne);
          };
        case O:
          return function() {
            return new C(this, ne);
          };
      }
      return function() {
        return new C(this);
      };
    }, F = w + " Iterator", Q = !1, te = $.prototype, D = te[g] || te["@@iterator"] || x && te[x], _ = !b && D || q(x), U = w === "Array" && te.entries || D, B, L, re;
    if (U && (B = o(U.call(new $())), B !== Object.prototype && B.next && (!r && o(B) !== v && (a ? a(B, v) : s(B[g]) || f(B, g, A)), c(B, F, !0, !0), r && (d[F] = A))), m && x === E && D && D.name !== E && (!r && h ? u(te, "name", E) : (Q = !0, _ = function() {
      return e(D, this);
    })), x)
      if (L = {
        values: q(E),
        keys: P ? _ : q(S),
        entries: q(O)
      }, R) for (re in L)
        (b || Q || !(re in te)) && f(te, re, L[re]);
      else t({ target: w, proto: !0, forced: b || Q }, L);
    return (!r || R) && te[g] !== _ && f(te, g, _, { name: x }), d[w] = _, L;
  }, _u;
}
var Cu, bg;
function XS() {
  return bg || (bg = 1, Cu = function(t, e) {
    return { value: t, done: e };
  }), Cu;
}
var Iu, Eg;
function QS() {
  if (Eg) return Iu;
  Eg = 1;
  var t = /* @__PURE__ */ vs(), e = /* @__PURE__ */ Y$(), r = /* @__PURE__ */ qn(), n = /* @__PURE__ */ KS(), s = Ln().f, i = /* @__PURE__ */ YS(), o = /* @__PURE__ */ XS(), a = /* @__PURE__ */ Es(), c = /* @__PURE__ */ ur(), u = "Array Iterator", f = n.set, l = n.getterFor(u);
  Iu = i(Array, "Array", function(p, m) {
    f(this, {
      type: u,
      target: t(p),
      // target
      index: 0,
      // next index
      kind: m
      // kind
    });
  }, function() {
    var p = l(this), m = p.target, h = p.index++;
    if (!m || h >= m.length)
      return p.target = null, o(void 0, !0);
    switch (p.kind) {
      case "keys":
        return o(h, !1);
      case "values":
        return o(m[h], !1);
    }
    return o([h, m[h]], !1);
  }, "values");
  var d = r.Arguments = r.Array;
  if (e("keys"), e("values"), e("entries"), !a && c && d.name !== "values") try {
    s(d, "name", { value: "values" });
  } catch {
  }
  return Iu;
}
var Sg = {}, Mu, xg;
function tR() {
  if (xg) return Mu;
  xg = 1;
  var t = /* @__PURE__ */ Jt(), e = /* @__PURE__ */ zp(), r = /* @__PURE__ */ eh(), n = /* @__PURE__ */ co(), s = t("".charAt), i = t("".charCodeAt), o = t("".slice), a = function(c) {
    return function(u, f) {
      var l = r(n(u)), d = e(f), p = l.length, m, h;
      return d < 0 || d >= p ? c ? "" : void 0 : (m = i(l, d), m < 55296 || m > 56319 || d + 1 === p || (h = i(l, d + 1)) < 56320 || h > 57343 ? c ? s(l, d) : m : c ? o(l, d, d + 2) : (m - 55296 << 10) + (h - 56320) + 65536);
    };
  };
  return Mu = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: a(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: a(!0)
  }, Mu;
}
var Og;
function rR() {
  if (Og) return Sg;
  Og = 1;
  var t = tR().charAt, e = /* @__PURE__ */ eh(), r = /* @__PURE__ */ KS(), n = /* @__PURE__ */ YS(), s = /* @__PURE__ */ XS(), i = "String Iterator", o = r.set, a = r.getterFor(i);
  return n(String, "String", function(c) {
    o(this, {
      type: i,
      string: e(c),
      index: 0
    });
  }, function() {
    var u = a(this), f = u.string, l = u.index, d;
    return l >= f.length ? s(void 0, !0) : (d = t(f, l), u.index += d.length, s(d, !1));
  }), Sg;
}
var ku, wg;
function nR() {
  if (wg) return ku;
  wg = 1, z$(), JS(), W$(), QS(), rR();
  var t = /* @__PURE__ */ Up();
  return ku = t.AggregateError, ku;
}
var Ag = {}, Nu, jg;
function sR() {
  return jg || (jg = 1, Nu = {
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
  }), Nu;
}
var Pg;
function iR() {
  if (Pg) return Ag;
  Pg = 1, QS();
  var t = /* @__PURE__ */ sR(), e = /* @__PURE__ */ dt(), r = /* @__PURE__ */ th(), n = /* @__PURE__ */ qn();
  for (var s in t)
    r(e[s], s), n[s] = n.Array;
  return Ag;
}
var Fu, $g;
function oR() {
  if ($g) return Fu;
  $g = 1, HS();
  var t = /* @__PURE__ */ nR();
  return iR(), Fu = t, Fu;
}
var Du, Rg;
function aR() {
  if (Rg) return Du;
  Rg = 1;
  var t = /* @__PURE__ */ oR();
  return Du = t, Du;
}
var Lu, Tg;
function cR() {
  if (Tg) return Lu;
  Tg = 1, HS();
  var t = /* @__PURE__ */ aR();
  return Lu = t, Lu;
}
var qu, _g;
function uR() {
  return _g || (_g = 1, qu = /* @__PURE__ */ cR()), qu;
}
var Vu, Cg;
function lR() {
  return Cg || (Cg = 1, Vu = /* @__PURE__ */ uR()), Vu;
}
var fR = lR();
const Cr = /* @__PURE__ */ so(fR);
let pR = class extends Cr {
  constructor(e, r, n) {
    if (super(e, r, n), this.name = this.constructor.name, typeof r == "string" && (this.message = r), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(r).stack, n != null && typeof n == "object" && Object.hasOwn(n, "cause") && !("cause" in this)) {
      const {
        cause: s
      } = n;
      this.cause = s, s instanceof Error && "stack" in s && (this.stack = `${this.stack}
CAUSE: ${s.stack}`);
    }
  }
}, ve = class extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(pR, e);
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
}, Ss = class extends ve {
  constructor(e, r) {
    if (super(e, r), r != null && typeof r == "object") {
      const {
        cause: n,
        ...s
      } = r;
      Object.assign(this, s);
    }
  }
}, hR = class extends ve {
};
class Bu extends hR {
}
var rh = function() {
  return !1;
}, yt = function() {
  return !0;
};
function ge(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function ce(t) {
  return function e(r) {
    return arguments.length === 0 || ge(r) ? e : t.apply(this, arguments);
  };
}
function G(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return ge(r) ? e : ce(function(s) {
          return t(r, s);
        });
      default:
        return ge(r) && ge(n) ? e : ge(r) ? ce(function(s) {
          return t(s, n);
        }) : ge(n) ? ce(function(s) {
          return t(r, s);
        }) : t(r, n);
    }
  };
}
function dR(t, e) {
  t = t || [], e = e || [];
  var r, n = t.length, s = e.length, i = [];
  for (r = 0; r < n; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < s; )
    i[i.length] = e[r], r += 1;
  return i;
}
function ho(t, e) {
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
function nh(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!ge(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, ge(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : ho(Math.max(0, i), nh(t, n, r));
  };
}
var je = /* @__PURE__ */ G(function(e, r) {
  return e === 1 ? ce(r) : ho(e, nh(e, [], r));
});
function We(t) {
  return function e(r, n, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return ge(r) ? e : G(function(i, o) {
          return t(r, i, o);
        });
      case 2:
        return ge(r) && ge(n) ? e : ge(r) ? G(function(i, o) {
          return t(i, n, o);
        }) : ge(n) ? G(function(i, o) {
          return t(r, i, o);
        }) : ce(function(i) {
          return t(r, n, i);
        });
      default:
        return ge(r) && ge(n) && ge(s) ? e : ge(r) && ge(n) ? G(function(i, o) {
          return t(i, o, s);
        }) : ge(r) && ge(s) ? G(function(i, o) {
          return t(i, n, o);
        }) : ge(n) && ge(s) ? G(function(i, o) {
          return t(r, i, o);
        }) : ge(r) ? ce(function(i) {
          return t(i, n, s);
        }) : ge(n) ? ce(function(i) {
          return t(r, i, s);
        }) : ge(s) ? ce(function(i) {
          return t(r, n, i);
        }) : t(r, n, s);
    }
  };
}
const an = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function mR(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function Ir(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!an(n)) {
      for (var s = 0; s < t.length; ) {
        if (typeof n[t[s]] == "function")
          return n[t[s]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        s += 1;
      }
      if (mR(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function mo(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const ht = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
var yR = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = ht.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = mo(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
})();
function gR(t) {
  return function(e) {
    return new yR(t, e);
  };
}
var tt = /* @__PURE__ */ G(/* @__PURE__ */ Ir(["all"], gR, function(e, r) {
  for (var n = 0; n < r.length; ) {
    if (!e(r[n]))
      return !1;
    n += 1;
  }
  return !0;
}));
function Ig(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function Di(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function vR(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function xt(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function bR(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const rs = typeof Object.is == "function" ? Object.is : bR;
var Mg = Object.prototype.toString, ZS = /* @__PURE__ */ (function() {
  return Mg.call(arguments) === "[object Arguments]" ? function(e) {
    return Mg.call(e) === "[object Arguments]";
  } : function(e) {
    return xt("callee", e);
  };
})(), ER = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), kg = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Ng = /* @__PURE__ */ (function() {
  return arguments.propertyIsEnumerable("length");
})(), SR = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, Qr = /* @__PURE__ */ ce(typeof Object.keys == "function" && !Ng ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, s = [], i = Ng && ZS(e);
  for (r in e)
    xt(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (ER)
    for (n = kg.length - 1; n >= 0; )
      r = kg[n], xt(r, e) && !SR(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), Vt = /* @__PURE__ */ ce(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function Fg(t, e, r, n) {
  var s = Ig(t), i = Ig(e);
  function o(a, c) {
    return sh(a, c, r.slice(), n.slice());
  }
  return !Di(function(a, c) {
    return !Di(o, c, a);
  }, i, s);
}
function sh(t, e, r, n) {
  if (rs(t, e))
    return !0;
  var s = Vt(t);
  if (s !== Vt(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (s) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && vR(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && rs(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!rs(t.valueOf(), e.valueOf()))
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
      return t.size !== e.size ? !1 : Fg(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : Fg(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var o = Qr(t);
  if (o.length !== Qr(e).length)
    return !1;
  var a = r.concat([t]), c = n.concat([e]);
  for (i = o.length - 1; i >= 0; ) {
    var u = o[i];
    if (!(xt(u, e) && sh(e[u], t[u], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Mr = /* @__PURE__ */ G(function(e, r) {
  return sh(e, r, [], []);
});
function xR(t, e, r) {
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
    if (Mr(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function Li(t, e) {
  return xR(e, t, 0) >= 0;
}
function wi(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function Uu(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var Qn = function(e) {
  return (e < 10 ? "0" : "") + e;
}, OR = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + Qn(e.getUTCMonth() + 1) + "-" + Qn(e.getUTCDate()) + "T" + Qn(e.getUTCHours()) + ":" + Qn(e.getUTCMinutes()) + ":" + Qn(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function ex(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function xs(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function wR(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function qi(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var AR = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = ht.init, t.prototype["@@transducer/result"] = ht.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
})();
function jR(t) {
  return function(e) {
    return new AR(t, e);
  };
}
var PR = /* @__PURE__ */ G(/* @__PURE__ */ Ir(["fantasy-land/filter", "filter"], jR, function(t, e) {
  return qi(e) ? xs(function(r, n) {
    return t(e[n]) && (r[n] = e[n]), r;
  }, {}, Qr(e)) : (
    // else
    wR(t, e)
  );
})), $R = /* @__PURE__ */ G(function(e, r) {
  return PR(ex(e), r);
});
function tx(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return Li(o, a) ? "<Circular>" : tx(o, a);
  }, n = function(i, o) {
    return wi(function(a) {
      return Uu(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + wi(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + wi(r, t).concat(n(t, $R(function(i) {
        return /^\d+$/.test(i);
      }, Qr(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : Uu(OR(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : Uu(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var s = t.toString();
        if (s !== "[object Object]")
          return s;
      }
      return "{" + n(t, Qr(t)).join(", ") + "}";
  }
}
var Cn = /* @__PURE__ */ ce(function(e) {
  return tx(e, []);
}), rx = /* @__PURE__ */ G(function(e, r) {
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
  var o = Cn(e), a = n(o, Cn(r));
  return a !== void 0 && a === o ? e : r;
}), RR = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = ht.init, t.prototype["@@transducer/result"] = ht.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
})(), TR = function(e) {
  return function(r) {
    return new RR(e, r);
  };
}, yo = /* @__PURE__ */ G(/* @__PURE__ */ Ir(["fantasy-land/map", "map"], TR, function(e, r) {
  switch (Object.prototype.toString.call(r)) {
    case "[object Function]":
      return je(r.length, function() {
        return e.call(this, r.apply(this, arguments));
      });
    case "[object Object]":
      return xs(function(n, s) {
        return n[s] = e(r[s]), n;
      }, {}, Qr(r));
    default:
      return wi(e, r);
  }
}));
const Vn = Number.isInteger || function(e) {
  return e << 0 === e;
};
function ih(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function go(t, e) {
  var r = t < 0 ? e.length + t : t;
  return ih(e) ? e.charAt(r) : e[r];
}
var Os = /* @__PURE__ */ G(function(e, r) {
  if (r != null)
    return Vn(e) ? go(e, r) : r[e];
}), nx = /* @__PURE__ */ G(function(e, r) {
  return yo(Os(e), r);
}), _R = /* @__PURE__ */ ce(function(e) {
  return an(e) ? !0 : !e || typeof e != "object" || ih(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), Dg = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function sx(t, e, r) {
  return function(s, i, o) {
    if (_R(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[Dg] != null)
      return r(s, i, o[Dg]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function CR(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var ix = /* @__PURE__ */ G(function(e, r) {
  return ho(e.length, function() {
    return e.apply(r, arguments);
  });
});
function IR(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function MR(t, e, r, n) {
  return t["@@transducer/result"](r[n](ix(t["@@transducer/step"], t), e));
}
var oh = /* @__PURE__ */ sx(CR, MR, IR), kR = /* @__PURE__ */ (function() {
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
})();
function ox(t) {
  return new kR(t);
}
var Bn = /* @__PURE__ */ We(function(t, e, r) {
  return oh(typeof t == "function" ? ox(t) : t, e, r);
}), NR = /* @__PURE__ */ ce(function(e) {
  return je(Bn(rx, 0, nx("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (!e[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
}), J = /* @__PURE__ */ ce(function(e) {
  return function() {
    return e;
  };
}), FR = /* @__PURE__ */ G(function(e, r) {
  return e && r;
}), DR = /* @__PURE__ */ ce(function(e) {
  return je(Bn(rx, 0, nx("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function LR(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function qR(t, e, r, n) {
  return r[n](t, e);
}
var VR = /* @__PURE__ */ sx(xs, qR, LR), BR = /* @__PURE__ */ G(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : VR(function(n, s) {
    return dR(n, yo(s, r));
  }, [], e);
}), UR = /* @__PURE__ */ G(function(e, r) {
  return e.apply(this, r);
}), ah = /* @__PURE__ */ ce(function(e) {
  return je(e.length, e);
});
function JR(t, e, r) {
  if (Vn(t) && an(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var Vi = /* @__PURE__ */ ce(function(e) {
  return e == null;
}), k = /* @__PURE__ */ We(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !Vi(n) && xt(s, n) && typeof n[s] == "object" ? n[s] : Vn(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return JR(s, r, n);
}), HR = /* @__PURE__ */ We(function(e, r, n) {
  return k([e], r, n);
});
function ch(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var GR = /* @__PURE__ */ G(function(e, r) {
  var n = je(e, r);
  return je(e, function() {
    return xs(BR, yo(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), uh = /* @__PURE__ */ ce(function(e) {
  return GR(e.length, e);
}), ws = /* @__PURE__ */ G(function(e, r) {
  return ch(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : uh(FR)(e, r);
});
function ax(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function cx(t, e, r) {
  if (r || (r = new zR()), KR(t))
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
  switch (Vt(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n(Array(t.length));
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return ax(t);
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
function KR(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var zR = /* @__PURE__ */ (function() {
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
})(), WR = /* @__PURE__ */ ce(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), YR = /* @__PURE__ */ ce(function(e) {
  return !e;
}), As = /* @__PURE__ */ uh(YR);
function XR(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function lh(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return an(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var js = /* @__PURE__ */ We(/* @__PURE__ */ lh("slice", function(e, r, n) {
  return Array.prototype.slice.call(n, e, r);
})), QR = /* @__PURE__ */ ce(/* @__PURE__ */ lh("tail", /* @__PURE__ */ js(1, 1 / 0)));
function be() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return ho(arguments[0].length, Bn(XR, arguments[0], QR(arguments)));
}
var ZR = /* @__PURE__ */ ce(function(t) {
  return go(0, t);
});
function eT(t) {
  return t;
}
var ux = /* @__PURE__ */ ce(eT), tT = /* @__PURE__ */ (function() {
  function t(e, r, n, s) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = s, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = ht.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (xt(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, cx(this.valueAcc)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
})();
function rT(t, e, r) {
  return function(n) {
    return new tT(t, e, r, n);
  };
}
var nT = /* @__PURE__ */ nh(4, [], /* @__PURE__ */ Ir([], rT, function(e, r, n, s) {
  var i = ox(function(o, a) {
    var c = n(a), u = e(xt(c, o) ? o[c] : cx(r), a);
    return u && u["@@transducer/reduced"] ? mo(o) : (o[c] = u, o);
  });
  return oh(i, {}, s);
})), At = /* @__PURE__ */ G(function(e, r) {
  return r == null || r !== r ? e : r;
}), sT = /* @__PURE__ */ (function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !Lg(e, !0, this);
  }, t.prototype.has = function(e) {
    return Lg(e, !1, this);
  }, t;
})();
function Lg(t, e, r) {
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
      return r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? Li(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
    case "undefined":
      return r._items[n] ? !0 : (e && (r._items[n] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    /* falls through */
    default:
      return n = Object.prototype.toString.call(t), n in r._items ? Li(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
  }
}
var iT = /* @__PURE__ */ G(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new sT(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), oT = /* @__PURE__ */ We(function(e, r, n) {
  var s = Array.prototype.slice.call(n, 0);
  return s.splice(e, r), s;
});
function aT(t, e) {
  if (e == null)
    return e;
  if (Vn(t) && an(e))
    return oT(t, 1, e);
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return delete r[t], r;
}
function cT(t, e) {
  if (Vn(t) && an(e))
    return [].concat(e);
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return r;
}
var pt = /* @__PURE__ */ G(function t(e, r) {
  if (r == null)
    return r;
  switch (e.length) {
    case 0:
      return r;
    case 1:
      return aT(e[0], r);
    default:
      var n = e[0], s = Array.prototype.slice.call(e, 1);
      return r[n] == null ? cT(n, r) : HR(n, t(s, r[n]), r);
  }
}), uT = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = ht.init, t.prototype["@@transducer/result"] = ht.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? mo(n) : n;
  }, t;
})();
function lT(t) {
  return function(e) {
    return new uT(t, e);
  };
}
var fT = /* @__PURE__ */ G(/* @__PURE__ */ Ir(["take"], lT, function(e, r) {
  return js(0, e < 0 ? 1 / 0 : e, r);
}));
function pT(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return js(0, r + 1, e);
}
var hT = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = ht.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = oh(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
})();
function dT(t) {
  return function(e) {
    return new hT(t, e);
  };
}
var mT = /* @__PURE__ */ G(/* @__PURE__ */ Ir([], dT, pT)), vo = /* @__PURE__ */ ce(function(t) {
  return go(-1, t);
}), yT = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = ht.init, t.prototype["@@transducer/result"] = ht.result, t.prototype["@@transducer/step"] = function(e, r) {
    if (this.f) {
      if (this.f(r))
        return e;
      this.f = null;
    }
    return this.xf["@@transducer/step"](e, r);
  }, t;
})();
function gT(t) {
  return function(e) {
    return new yT(t, e);
  };
}
var vT = /* @__PURE__ */ G(/* @__PURE__ */ Ir(["dropWhile"], gT, function(e, r) {
  for (var n = 0, s = r.length; n < s && e(r[n]); )
    n += 1;
  return js(n, 1 / 0, r);
})), bT = /* @__PURE__ */ G(function(e, r) {
  return e || r;
}), ET = /* @__PURE__ */ G(function(e, r) {
  return ch(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : uh(bT)(e, r);
});
function ST(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var xT = /* @__PURE__ */ ce(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : an(e) ? [] : ih(e) ? "" : qi(e) ? {} : ZS(e) ? /* @__PURE__ */ (function() {
    return arguments;
  })() : ST(e) ? e.constructor.from("") : void 0;
}), OT = /* @__PURE__ */ ce(function(e) {
  return je(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), wT = /* @__PURE__ */ G(/* @__PURE__ */ lh("groupBy", /* @__PURE__ */ nT(function(t, e) {
  return t.push(e), t;
}, []))), AT = /* @__PURE__ */ G(function(e, r) {
  if (e.length === 0 || Vi(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!Vi(n) && xt(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), qt = /* @__PURE__ */ G(function(e, r) {
  return AT([e], r);
}), kr = function(t, e) {
  switch (arguments.length) {
    case 0:
      return kr;
    case 1:
      return /* @__PURE__ */ (function() {
        return function r(n) {
          switch (arguments.length) {
            case 0:
              return r;
            default:
              return rs(t, n);
          }
        };
      })();
    default:
      return rs(t, e);
  }
}, fh = /* @__PURE__ */ We(function(e, r, n) {
  return je(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), jT = /* @__PURE__ */ G(Li), PT = /* @__PURE__ */ js(0, -1), ph = /* @__PURE__ */ G(function(e, r) {
  return je(e + 1, function() {
    var n = arguments[e];
    if (n != null && ch(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(Cn(n) + ' does not have a method named "' + r + '"');
  });
}), Ps = /* @__PURE__ */ ce(function(e) {
  return e != null && Mr(e, xT(e));
}), lx = /* @__PURE__ */ ce(function(e) {
  return !Ps(e);
}), fx = /* @__PURE__ */ ph(1, "join");
function qg(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var $T = /* @__PURE__ */ G(function(e, r) {
  return function(n) {
    return function(s) {
      return yo(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
function hh(t, e) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    var s = t[n];
    Vn(s) ? r = go(s, r) : r = r[s];
  }
  return r;
}
var cn = /* @__PURE__ */ G(function(e, r) {
  return xs(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, Qr(r));
}), RT = /* @__PURE__ */ We(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    xt(i, r) && (s[i] = xt(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    xt(i, n) && !xt(i, s) && (s[i] = n[i]);
  return s;
}), TT = /* @__PURE__ */ We(function t(e, r, n) {
  return RT(function(s, i, o) {
    return qi(i) && qi(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), Ye = /* @__PURE__ */ G(function(e, r) {
  return TT(function(n, s, i) {
    return i;
  }, e, r);
}), _T = /* @__PURE__ */ G(function(e, r) {
  return tt(ex(e), r);
}), px = function(t) {
  return {
    value: t,
    map: function(e) {
      return px(e(t));
    }
  };
}, CT = /* @__PURE__ */ We(function(e, r, n) {
  return e(function(s) {
    return px(r(s));
  })(n).value;
}), ue = /* @__PURE__ */ G(hh), hx = /* @__PURE__ */ We(function(e, r, n) {
  return At(e, hh(r, n));
}), bo = /* @__PURE__ */ We(function(e, r, n) {
  return e(hh(r, n));
}), dx = /* @__PURE__ */ G(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), mx = /* @__PURE__ */ We(function(e, r, n) {
  return Mr(e, Os(r, n));
}), Ke = /* @__PURE__ */ We(function(e, r, n) {
  return At(e, Os(r, n));
}), un = /* @__PURE__ */ We(function(e, r, n) {
  return e(Os(r, n));
}), IT = /* @__PURE__ */ G(function(e, r) {
  if (!(qg(e) && qg(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = Array(e < r ? r - e : 0), s = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < s; )
    n[i] = i + e, i += 1;
  return n;
}), MT = /* @__PURE__ */ ce(mo), yx = /* @__PURE__ */ We(function(e, r, n) {
  return n.replace(e, r);
}), kT = /* @__PURE__ */ G(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), gx = /* @__PURE__ */ ph(1, "split"), NT = /* @__PURE__ */ G(function(t, e) {
  return Mr(fT(t.length, e), t);
});
function FT(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var DT = /* @__PURE__ */ G(function(e, r) {
  if (!FT(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + Cn(e));
  return ax(e).test(r);
}), LT = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = ht.init, t.prototype["@@transducer/result"] = ht.result, t.prototype["@@transducer/step"] = function(e, r) {
    return Di(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
})();
function qT(t) {
  return function(e) {
    return new LT(t, e);
  };
}
var vx = /* @__PURE__ */ G(/* @__PURE__ */ Ir([], qT, function(t, e) {
  for (var r = 0, n = e.length, s = [], i; r < n; )
    i = e[r], Di(t, i, s) || (s[s.length] = i), r += 1;
  return s;
})), VT = /* @__PURE__ */ We(function(e, r, n) {
  return e(n) ? r(n) : n;
}), Eo = J(void 0), lt = Mr(Eo()), bx = As(lt), Ex = Mr(null), Sx = As(Ex), BT = As(Vi), UT = je(1, be(Vt, kr("GeneratorFunction"))), JT = je(1, be(Vt, kr("AsyncFunction"))), ln = DR([be(Vt, kr("Function")), UT, JT]), xx = je(1, ln(Array.isArray) ? Array.isArray : be(Vt, kr("Array"))), HT = ws(xx, Ps), GT = ws(xx, lx), _e = je(1, be(Vt, kr("String"))), KT = Mr("");
function yp(t) {
  "@babel/helpers - typeof";
  return yp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, yp(t);
}
var Ox = function(e) {
  return yp(e) === "object";
}, zT = je(1, ws(Sx, ET(Ox, ln))), WT = As(zT), So = NR([_e, WT, lx]), YT = As(ln), XT = je(1, ws(Sx, Ox)), QT = be(Vt, kr("Object")), ZT = be(Cn, Mr(Cn(Object))), e_ = bo(ws(ln, ZT), ["constructor"]), fe = je(1, function(t) {
  if (!XT(t) || !QT(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return Ex(e) ? !0 : e_(e);
}), t_ = je(1, be(Vt, kr("RegExp")));
function r_(t) {
  return o_(t) || i_(t) || s_(t) || n_();
}
function n_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s_(t, e) {
  if (t) {
    if (typeof t == "string") return gp(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? gp(t, e) : void 0;
  }
}
function i_(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function o_(t) {
  if (Array.isArray(t)) return gp(t);
}
function gp(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var a_ = WR(function(t, e) {
  return t.length > e.length;
}), c_ = be(kT(a_), ZR, Os("length")), u_ = ah(function(t, e, r) {
  var n = r.apply(void 0, r_(t));
  return BT(n) ? MT(n) : e;
}), l_ = function(e) {
  var r = c_(e);
  return je(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return Bn(u_(s), void 0, e);
  });
}, wx = fh(GT, l_, Eo), Xe = OT(jT), pe = je(3, function(t, e, r) {
  var n = ue(t, r), s = ue(PT(t), r);
  if (!YT(n) && !HT(t)) {
    var i = ix(n, s);
    return UR(i, e);
  }
}), f_ = VT(_e, yx(/[.*+?^${}()|[\]\\-]/g, "\\$&")), p_ = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, Vg = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, h_ = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, d_ = function(e, r, n) {
  p_(e, r, n), Vg(n, "str"), Vg(r, "replaceValue"), h_(e);
  var s = new RegExp(t_(e) ? e : f_(e), "g");
  return yx(s, r, n);
}, m_ = je(3, d_), y_ = ph(2, "replaceAll"), g_ = ln(String.prototype.replaceAll) ? y_ : m_, v_ = ah(function(t, e) {
  return be(gx(""), mT(Xe(t)), fx(""))(e);
}), Nr = ah(function(t, e) {
  return be(gx(""), vT(Xe(t)), fx(""))(e);
}), Ju = { exports: {} }, Bg;
function b_() {
  if (Bg) return Ju.exports;
  Bg = 1;
  var t = Ju.exports = {}, e, r;
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
  function i(h) {
    if (e === setTimeout)
      return setTimeout(h, 0);
    if ((e === n || !e) && setTimeout)
      return e = setTimeout, setTimeout(h, 0);
    try {
      return e(h, 0);
    } catch {
      try {
        return e.call(null, h, 0);
      } catch {
        return e.call(this, h, 0);
      }
    }
  }
  function o(h) {
    if (r === clearTimeout)
      return clearTimeout(h);
    if ((r === s || !r) && clearTimeout)
      return r = clearTimeout, clearTimeout(h);
    try {
      return r(h);
    } catch {
      try {
        return r.call(null, h);
      } catch {
        return r.call(this, h);
      }
    }
  }
  var a = [], c = !1, u, f = -1;
  function l() {
    !c || !u || (c = !1, u.length ? a = u.concat(a) : f = -1, a.length && d());
  }
  function d() {
    if (!c) {
      var h = i(l);
      c = !0;
      for (var v = a.length; v; ) {
        for (u = a, a = []; ++f < v; )
          u && u[f].run();
        f = -1, v = a.length;
      }
      u = null, c = !1, o(h);
    }
  }
  t.nextTick = function(h) {
    var v = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var b = 1; b < arguments.length; b++)
        v[b - 1] = arguments[b];
    a.push(new p(h, v)), a.length === 1 && !c && i(d);
  };
  function p(h, v) {
    this.fun = h, this.array = v;
  }
  p.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {};
  function m() {
  }
  return t.on = m, t.addListener = m, t.once = m, t.off = m, t.removeListener = m, t.removeAllListeners = m, t.emit = m, t.prependListener = m, t.prependOnceListener = m, t.listeners = function(h) {
    return [];
  }, t.binding = function(h) {
    throw new Error("process.binding is not supported");
  }, t.cwd = function() {
    return "/";
  }, t.chdir = function(h) {
    throw new Error("process.chdir is not supported");
  }, t.umask = function() {
    return 0;
  }, Ju.exports;
}
var E_ = b_();
const Bi = /* @__PURE__ */ so(E_), dh = () => bo(DT(/^win/), ["platform"], Bi), xo = (t) => {
  try {
    const e = new URL(t);
    return v_(":", e.protocol);
  } catch {
    return;
  }
}, S_ = be(xo, bx), Ax = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, mh = (t) => {
  if (Bi.browser)
    return !1;
  const e = xo(t);
  return lt(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, Oo = (t) => {
  const e = xo(t);
  return e === "http" || e === "https";
}, x_ = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, yh = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Ke(!1, "keepFileProtocol", e), s = Ke(dh, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = g_("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, jx = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  dh() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < e.length; n += 2)
    r = r.replace(e[n], e[n + 1]);
  return r;
}, gh = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, le = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, Ui = () => {
  if (Bi.browser)
    return le(globalThis.location.href);
  const t = Bi.cwd(), e = vo(t);
  return ["/", "\\"].includes(e) ? t : t + (dh() ? "\\" : "/");
}, Ie = (t, e) => {
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
}, $s = (t) => {
  if (mh(t))
    return jx(yh(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, Mt = (t) => mh(t) ? yh(t) : decodeURI(t), O_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: Ui,
  fromFileSystemPath: jx,
  getExtension: Ax,
  getHash: gh,
  getProtocol: xo,
  hasProtocol: S_,
  isFileSystemPath: mh,
  isHttpUrl: Oo,
  isURI: x_,
  resolve: Ie,
  sanitize: $s,
  stripHash: le,
  toFileSystemPath: yh,
  unsanitize: Mt
}, Symbol.toStringTag, { value: "Module" }));
let ps = class {
  uri;
  mediaType;
  data;
  parseResult;
  constructor({
    uri: e,
    mediaType: r = "text/plain",
    data: n,
    parseResult: s
  }) {
    this.uri = e, this.mediaType = r, this.data = n, this.parseResult = s;
  }
  get extension() {
    return _e(this.uri) ? Ax(this.uri) : "";
  }
  toString() {
    return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(Vt(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
  }
};
class In {
  rootRef;
  refs;
  circular;
  constructor({
    refs: e = [],
    circular: r = !1
  } = {}) {
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
    const r = _e(e) ? e : e.uri;
    return bx(this.find((n) => n.uri === r));
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
const Px = {
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
    circularReplacer: ux,
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
}, w_ = $T(ue(["resolve", "baseURI"]), k(["resolve", "baseURI"])), A_ = (t) => KT(t) ? Ui() : t, $x = (t, e) => {
  const r = Ye(t, e);
  return CT(w_, A_, r);
};
class j_ extends ve {
  plugin;
  constructor(e, r) {
    super(e, {
      cause: r.cause
    }), this.plugin = r.plugin;
  }
}
const vh = async (t, e, r) => {
  const n = await Promise.all(r.map(pe([t], e)));
  return r.filter((s, i) => n[i]);
}, bh = async (t, e, r) => {
  let n;
  for (const s of r)
    try {
      const i = await s[t].call(s, ...e);
      return {
        plugin: s,
        result: i
      };
    } catch (i) {
      n = new j_("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class vp extends ve {
}
class Eh extends ve {
}
class Rx extends Eh {
}
class Tx extends Rx {
}
const P_ = async (t, e) => {
  const r = e.resolve.resolvers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.resolve.resolverOpts);
  }), n = await vh("canRead", [t, e], r);
  if (Ps(n))
    throw new Tx(t.uri);
  try {
    const {
      result: s
    } = await bh("read", [t], n);
    return s;
  } catch (s) {
    throw new Eh(`Error while reading file "${t.uri}"`, {
      cause: s
    });
  }
}, $_ = async (t, e) => {
  const r = e.parse.parsers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.parse.parserOpts);
  }), n = await vh("canParse", [t, e], r);
  if (Ps(n))
    throw new Tx(t.uri);
  try {
    const {
      plugin: s,
      result: i
    } = await bh("parse", [t, e], n);
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new vp(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new vp(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, R_ = async (t, e) => {
  const r = new ps({
    uri: $s(le(t)),
    mediaType: e.parse.mediaType
  }), n = await P_(r, e);
  return $_(new ps({
    ...r,
    data: n
  }), e);
};
var we = {}, Hu, Ug;
function T_() {
  if (Ug) return Hu;
  Ug = 1;
  function t(e) {
    return e === null;
  }
  return Hu = t, Hu;
}
var Gu, Jg;
function _x() {
  if (Jg) return Gu;
  Jg = 1;
  var t = typeof Sn == "object" && Sn && Sn.Object === Object && Sn;
  return Gu = t, Gu;
}
var Ku, Hg;
function pr() {
  if (Hg) return Ku;
  Hg = 1;
  var t = _x(), e = typeof self == "object" && self && self.Object === Object && self, r = t || e || Function("return this")();
  return Ku = r, Ku;
}
var zu, Gg;
function Sh() {
  if (Gg) return zu;
  Gg = 1;
  var t = pr(), e = t.Symbol;
  return zu = e, zu;
}
var Wu, Kg;
function __() {
  if (Kg) return Wu;
  Kg = 1;
  var t = Sh(), e = Object.prototype, r = e.hasOwnProperty, n = e.toString, s = t ? t.toStringTag : void 0;
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
  return Wu = i, Wu;
}
var Yu, zg;
function C_() {
  if (zg) return Yu;
  zg = 1;
  var t = Object.prototype, e = t.toString;
  function r(n) {
    return e.call(n);
  }
  return Yu = r, Yu;
}
var Xu, Wg;
function fn() {
  if (Wg) return Xu;
  Wg = 1;
  var t = Sh(), e = __(), r = C_(), n = "[object Null]", s = "[object Undefined]", i = t ? t.toStringTag : void 0;
  function o(a) {
    return a == null ? a === void 0 ? s : n : i && i in Object(a) ? e(a) : r(a);
  }
  return Xu = o, Xu;
}
var Qu, Yg;
function wo() {
  if (Yg) return Qu;
  Yg = 1;
  var t = Array.isArray;
  return Qu = t, Qu;
}
var Zu, Xg;
function pn() {
  if (Xg) return Zu;
  Xg = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return Zu = t, Zu;
}
var el, Qg;
function I_() {
  if (Qg) return el;
  Qg = 1;
  var t = fn(), e = wo(), r = pn(), n = "[object String]";
  function s(i) {
    return typeof i == "string" || !e(i) && r(i) && t(i) == n;
  }
  return el = s, el;
}
var tl, Zg;
function M_() {
  if (Zg) return tl;
  Zg = 1;
  var t = fn(), e = pn(), r = "[object Number]";
  function n(s) {
    return typeof s == "number" || e(s) && t(s) == r;
  }
  return tl = n, tl;
}
var rl, ev;
function k_() {
  if (ev) return rl;
  ev = 1;
  var t = fn(), e = pn(), r = "[object Boolean]";
  function n(s) {
    return s === !0 || s === !1 || e(s) && t(s) == r;
  }
  return rl = n, rl;
}
var nl, tv;
function Ao() {
  if (tv) return nl;
  tv = 1;
  function t(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  return nl = t, nl;
}
var sl, rv;
function xh() {
  if (rv) return sl;
  rv = 1;
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
  return sl = t, sl;
}
var il, nv;
function N_() {
  if (nv) return il;
  nv = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return il = t, il;
}
var ol, sv;
function Cx() {
  if (sv) return ol;
  sv = 1;
  function t(e, r) {
    return e === r || e !== e && r !== r;
  }
  return ol = t, ol;
}
var al, iv;
function jo() {
  if (iv) return al;
  iv = 1;
  var t = Cx();
  function e(r, n) {
    for (var s = r.length; s--; )
      if (t(r[s][0], n))
        return s;
    return -1;
  }
  return al = e, al;
}
var cl, ov;
function F_() {
  if (ov) return cl;
  ov = 1;
  var t = jo(), e = Array.prototype, r = e.splice;
  function n(s) {
    var i = this.__data__, o = t(i, s);
    if (o < 0)
      return !1;
    var a = i.length - 1;
    return o == a ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return cl = n, cl;
}
var ul, av;
function D_() {
  if (av) return ul;
  av = 1;
  var t = jo();
  function e(r) {
    var n = this.__data__, s = t(n, r);
    return s < 0 ? void 0 : n[s][1];
  }
  return ul = e, ul;
}
var ll, cv;
function L_() {
  if (cv) return ll;
  cv = 1;
  var t = jo();
  function e(r) {
    return t(this.__data__, r) > -1;
  }
  return ll = e, ll;
}
var fl, uv;
function q_() {
  if (uv) return fl;
  uv = 1;
  var t = jo();
  function e(r, n) {
    var s = this.__data__, i = t(s, r);
    return i < 0 ? (++this.size, s.push([r, n])) : s[i][1] = n, this;
  }
  return fl = e, fl;
}
var pl, lv;
function Po() {
  if (lv) return pl;
  lv = 1;
  var t = N_(), e = F_(), r = D_(), n = L_(), s = q_();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, pl = i, pl;
}
var hl, fv;
function V_() {
  if (fv) return hl;
  fv = 1;
  var t = Po();
  function e() {
    this.__data__ = new t(), this.size = 0;
  }
  return hl = e, hl;
}
var dl, pv;
function B_() {
  if (pv) return dl;
  pv = 1;
  function t(e) {
    var r = this.__data__, n = r.delete(e);
    return this.size = r.size, n;
  }
  return dl = t, dl;
}
var ml, hv;
function U_() {
  if (hv) return ml;
  hv = 1;
  function t(e) {
    return this.__data__.get(e);
  }
  return ml = t, ml;
}
var yl, dv;
function J_() {
  if (dv) return yl;
  dv = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return yl = t, yl;
}
var gl, mv;
function Ix() {
  if (mv) return gl;
  mv = 1;
  var t = fn(), e = Ao(), r = "[object AsyncFunction]", n = "[object Function]", s = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(a) {
    if (!e(a))
      return !1;
    var c = t(a);
    return c == n || c == s || c == r || c == i;
  }
  return gl = o, gl;
}
var vl, yv;
function H_() {
  if (yv) return vl;
  yv = 1;
  var t = pr(), e = t["__core-js_shared__"];
  return vl = e, vl;
}
var bl, gv;
function G_() {
  if (gv) return bl;
  gv = 1;
  var t = H_(), e = (function() {
    var n = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!e && e in n;
  }
  return bl = r, bl;
}
var El, vv;
function Mx() {
  if (vv) return El;
  vv = 1;
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
  return El = r, El;
}
var Sl, bv;
function K_() {
  if (bv) return Sl;
  bv = 1;
  var t = Ix(), e = G_(), r = Ao(), n = Mx(), s = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, a = Object.prototype, c = o.toString, u = a.hasOwnProperty, f = RegExp(
    "^" + c.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!r(d) || e(d))
      return !1;
    var p = t(d) ? f : i;
    return p.test(n(d));
  }
  return Sl = l, Sl;
}
var xl, Ev;
function z_() {
  if (Ev) return xl;
  Ev = 1;
  function t(e, r) {
    return e?.[r];
  }
  return xl = t, xl;
}
var Ol, Sv;
function Un() {
  if (Sv) return Ol;
  Sv = 1;
  var t = K_(), e = z_();
  function r(n, s) {
    var i = e(n, s);
    return t(i) ? i : void 0;
  }
  return Ol = r, Ol;
}
var wl, xv;
function Oh() {
  if (xv) return wl;
  xv = 1;
  var t = Un(), e = pr(), r = t(e, "Map");
  return wl = r, wl;
}
var Al, Ov;
function $o() {
  if (Ov) return Al;
  Ov = 1;
  var t = Un(), e = t(Object, "create");
  return Al = e, Al;
}
var jl, wv;
function W_() {
  if (wv) return jl;
  wv = 1;
  var t = $o();
  function e() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return jl = e, jl;
}
var Pl, Av;
function Y_() {
  if (Av) return Pl;
  Av = 1;
  function t(e) {
    var r = this.has(e) && delete this.__data__[e];
    return this.size -= r ? 1 : 0, r;
  }
  return Pl = t, Pl;
}
var $l, jv;
function X_() {
  if (jv) return $l;
  jv = 1;
  var t = $o(), e = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function s(i) {
    var o = this.__data__;
    if (t) {
      var a = o[i];
      return a === e ? void 0 : a;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return $l = s, $l;
}
var Rl, Pv;
function Q_() {
  if (Pv) return Rl;
  Pv = 1;
  var t = $o(), e = Object.prototype, r = e.hasOwnProperty;
  function n(s) {
    var i = this.__data__;
    return t ? i[s] !== void 0 : r.call(i, s);
  }
  return Rl = n, Rl;
}
var Tl, $v;
function Z_() {
  if ($v) return Tl;
  $v = 1;
  var t = $o(), e = "__lodash_hash_undefined__";
  function r(n, s) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = t && s === void 0 ? e : s, this;
  }
  return Tl = r, Tl;
}
var _l, Rv;
function eC() {
  if (Rv) return _l;
  Rv = 1;
  var t = W_(), e = Y_(), r = X_(), n = Q_(), s = Z_();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, _l = i, _l;
}
var Cl, Tv;
function tC() {
  if (Tv) return Cl;
  Tv = 1;
  var t = eC(), e = Po(), r = Oh();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (r || e)(),
      string: new t()
    };
  }
  return Cl = n, Cl;
}
var Il, _v;
function rC() {
  if (_v) return Il;
  _v = 1;
  function t(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
  }
  return Il = t, Il;
}
var Ml, Cv;
function Ro() {
  if (Cv) return Ml;
  Cv = 1;
  var t = rC();
  function e(r, n) {
    var s = r.__data__;
    return t(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
  }
  return Ml = e, Ml;
}
var kl, Iv;
function nC() {
  if (Iv) return kl;
  Iv = 1;
  var t = Ro();
  function e(r) {
    var n = t(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return kl = e, kl;
}
var Nl, Mv;
function sC() {
  if (Mv) return Nl;
  Mv = 1;
  var t = Ro();
  function e(r) {
    return t(this, r).get(r);
  }
  return Nl = e, Nl;
}
var Fl, kv;
function iC() {
  if (kv) return Fl;
  kv = 1;
  var t = Ro();
  function e(r) {
    return t(this, r).has(r);
  }
  return Fl = e, Fl;
}
var Dl, Nv;
function oC() {
  if (Nv) return Dl;
  Nv = 1;
  var t = Ro();
  function e(r, n) {
    var s = t(this, r), i = s.size;
    return s.set(r, n), this.size += s.size == i ? 0 : 1, this;
  }
  return Dl = e, Dl;
}
var Ll, Fv;
function kx() {
  if (Fv) return Ll;
  Fv = 1;
  var t = tC(), e = nC(), r = sC(), n = iC(), s = oC();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, Ll = i, Ll;
}
var ql, Dv;
function aC() {
  if (Dv) return ql;
  Dv = 1;
  var t = Po(), e = Oh(), r = kx(), n = 200;
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
  return ql = s, ql;
}
var Vl, Lv;
function cC() {
  if (Lv) return Vl;
  Lv = 1;
  var t = Po(), e = V_(), r = B_(), n = U_(), s = J_(), i = aC();
  function o(a) {
    var c = this.__data__ = new t(a);
    this.size = c.size;
  }
  return o.prototype.clear = e, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = s, o.prototype.set = i, Vl = o, Vl;
}
var Bl, qv;
function uC() {
  if (qv) return Bl;
  qv = 1;
  var t = "__lodash_hash_undefined__";
  function e(r) {
    return this.__data__.set(r, t), this;
  }
  return Bl = e, Bl;
}
var Ul, Vv;
function lC() {
  if (Vv) return Ul;
  Vv = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Ul = t, Ul;
}
var Jl, Bv;
function fC() {
  if (Bv) return Jl;
  Bv = 1;
  var t = kx(), e = uC(), r = lC();
  function n(s) {
    var i = -1, o = s == null ? 0 : s.length;
    for (this.__data__ = new t(); ++i < o; )
      this.add(s[i]);
  }
  return n.prototype.add = n.prototype.push = e, n.prototype.has = r, Jl = n, Jl;
}
var Hl, Uv;
function pC() {
  if (Uv) return Hl;
  Uv = 1;
  function t(e, r) {
    for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
      if (r(e[n], n, e))
        return !0;
    return !1;
  }
  return Hl = t, Hl;
}
var Gl, Jv;
function hC() {
  if (Jv) return Gl;
  Jv = 1;
  function t(e, r) {
    return e.has(r);
  }
  return Gl = t, Gl;
}
var Kl, Hv;
function Nx() {
  if (Hv) return Kl;
  Hv = 1;
  var t = fC(), e = pC(), r = hC(), n = 1, s = 2;
  function i(o, a, c, u, f, l) {
    var d = c & n, p = o.length, m = a.length;
    if (p != m && !(d && m > p))
      return !1;
    var h = l.get(o), v = l.get(a);
    if (h && v)
      return h == a && v == o;
    var b = -1, g = !0, S = c & s ? new t() : void 0;
    for (l.set(o, a), l.set(a, o); ++b < p; ) {
      var E = o[b], O = a[b];
      if (u)
        var A = d ? u(O, E, b, a, o, l) : u(E, O, b, o, a, l);
      if (A !== void 0) {
        if (A)
          continue;
        g = !1;
        break;
      }
      if (S) {
        if (!e(a, function($, w) {
          if (!r(S, w) && (E === $ || f(E, $, c, u, l)))
            return S.push(w);
        })) {
          g = !1;
          break;
        }
      } else if (!(E === O || f(E, O, c, u, l))) {
        g = !1;
        break;
      }
    }
    return l.delete(o), l.delete(a), g;
  }
  return Kl = i, Kl;
}
var zl, Gv;
function dC() {
  if (Gv) return zl;
  Gv = 1;
  var t = pr(), e = t.Uint8Array;
  return zl = e, zl;
}
var Wl, Kv;
function mC() {
  if (Kv) return Wl;
  Kv = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(s, i) {
      n[++r] = [i, s];
    }), n;
  }
  return Wl = t, Wl;
}
var Yl, zv;
function yC() {
  if (zv) return Yl;
  zv = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(s) {
      n[++r] = s;
    }), n;
  }
  return Yl = t, Yl;
}
var Xl, Wv;
function gC() {
  if (Wv) return Xl;
  Wv = 1;
  var t = Sh(), e = dC(), r = Cx(), n = Nx(), s = mC(), i = yC(), o = 1, a = 2, c = "[object Boolean]", u = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", p = "[object RegExp]", m = "[object Set]", h = "[object String]", v = "[object Symbol]", b = "[object ArrayBuffer]", g = "[object DataView]", S = t ? t.prototype : void 0, E = S ? S.valueOf : void 0;
  function O(A, $, w, C, T, x, P) {
    switch (w) {
      case g:
        if (A.byteLength != $.byteLength || A.byteOffset != $.byteOffset)
          return !1;
        A = A.buffer, $ = $.buffer;
      case b:
        return !(A.byteLength != $.byteLength || !x(new e(A), new e($)));
      case c:
      case u:
      case d:
        return r(+A, +$);
      case f:
        return A.name == $.name && A.message == $.message;
      case p:
      case h:
        return A == $ + "";
      case l:
        var R = s;
      case m:
        var q = C & o;
        if (R || (R = i), A.size != $.size && !q)
          return !1;
        var F = P.get(A);
        if (F)
          return F == $;
        C |= a, P.set(A, $);
        var Q = n(R(A), R($), C, T, x, P);
        return P.delete(A), Q;
      case v:
        if (E)
          return E.call(A) == E.call($);
    }
    return !1;
  }
  return Xl = O, Xl;
}
var Ql, Yv;
function vC() {
  if (Yv) return Ql;
  Yv = 1;
  function t(e, r) {
    for (var n = -1, s = r.length, i = e.length; ++n < s; )
      e[i + n] = r[n];
    return e;
  }
  return Ql = t, Ql;
}
var Zl, Xv;
function bC() {
  if (Xv) return Zl;
  Xv = 1;
  var t = vC(), e = wo();
  function r(n, s, i) {
    var o = s(n);
    return e(n) ? o : t(o, i(n));
  }
  return Zl = r, Zl;
}
var ef, Qv;
function EC() {
  if (Qv) return ef;
  Qv = 1;
  function t(e, r) {
    for (var n = -1, s = e == null ? 0 : e.length, i = 0, o = []; ++n < s; ) {
      var a = e[n];
      r(a, n, e) && (o[i++] = a);
    }
    return o;
  }
  return ef = t, ef;
}
var tf, Zv;
function SC() {
  if (Zv) return tf;
  Zv = 1;
  function t() {
    return [];
  }
  return tf = t, tf;
}
var rf, eb;
function xC() {
  if (eb) return rf;
  eb = 1;
  var t = EC(), e = SC(), r = Object.prototype, n = r.propertyIsEnumerable, s = Object.getOwnPropertySymbols, i = s ? function(o) {
    return o == null ? [] : (o = Object(o), t(s(o), function(a) {
      return n.call(o, a);
    }));
  } : e;
  return rf = i, rf;
}
var nf, tb;
function OC() {
  if (tb) return nf;
  tb = 1;
  function t(e, r) {
    for (var n = -1, s = Array(e); ++n < e; )
      s[n] = r(n);
    return s;
  }
  return nf = t, nf;
}
var sf, rb;
function wC() {
  if (rb) return sf;
  rb = 1;
  var t = fn(), e = pn(), r = "[object Arguments]";
  function n(s) {
    return e(s) && t(s) == r;
  }
  return sf = n, sf;
}
var of, nb;
function AC() {
  if (nb) return of;
  nb = 1;
  var t = wC(), e = pn(), r = Object.prototype, n = r.hasOwnProperty, s = r.propertyIsEnumerable, i = t(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? t : function(o) {
    return e(o) && n.call(o, "callee") && !s.call(o, "callee");
  };
  return of = i, of;
}
var es = { exports: {} }, af, sb;
function jC() {
  if (sb) return af;
  sb = 1;
  function t() {
    return !1;
  }
  return af = t, af;
}
es.exports;
var ib;
function Fx() {
  return ib || (ib = 1, (function(t, e) {
    var r = pr(), n = jC(), s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, u = c || n;
    t.exports = u;
  })(es, es.exports)), es.exports;
}
var cf, ob;
function PC() {
  if (ob) return cf;
  ob = 1;
  var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function r(n, s) {
    var i = typeof n;
    return s = s ?? t, !!s && (i == "number" || i != "symbol" && e.test(n)) && n > -1 && n % 1 == 0 && n < s;
  }
  return cf = r, cf;
}
var uf, ab;
function Dx() {
  if (ab) return uf;
  ab = 1;
  var t = 9007199254740991;
  function e(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= t;
  }
  return uf = e, uf;
}
var lf, cb;
function $C() {
  if (cb) return lf;
  cb = 1;
  var t = fn(), e = Dx(), r = pn(), n = "[object Arguments]", s = "[object Array]", i = "[object Boolean]", o = "[object Date]", a = "[object Error]", c = "[object Function]", u = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", p = "[object Set]", m = "[object String]", h = "[object WeakMap]", v = "[object ArrayBuffer]", b = "[object DataView]", g = "[object Float32Array]", S = "[object Float64Array]", E = "[object Int8Array]", O = "[object Int16Array]", A = "[object Int32Array]", $ = "[object Uint8Array]", w = "[object Uint8ClampedArray]", C = "[object Uint16Array]", T = "[object Uint32Array]", x = {};
  x[g] = x[S] = x[E] = x[O] = x[A] = x[$] = x[w] = x[C] = x[T] = !0, x[n] = x[s] = x[v] = x[i] = x[b] = x[o] = x[a] = x[c] = x[u] = x[f] = x[l] = x[d] = x[p] = x[m] = x[h] = !1;
  function P(R) {
    return r(R) && e(R.length) && !!x[t(R)];
  }
  return lf = P, lf;
}
var ff, ub;
function RC() {
  if (ub) return ff;
  ub = 1;
  function t(e) {
    return function(r) {
      return e(r);
    };
  }
  return ff = t, ff;
}
var ts = { exports: {} };
ts.exports;
var lb;
function TC() {
  return lb || (lb = 1, (function(t, e) {
    var r = _x(), n = e && !e.nodeType && e, s = n && !0 && t && !t.nodeType && t, i = s && s.exports === n, o = i && r.process, a = (function() {
      try {
        var c = s && s.require && s.require("util").types;
        return c || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    t.exports = a;
  })(ts, ts.exports)), ts.exports;
}
var pf, fb;
function Lx() {
  if (fb) return pf;
  fb = 1;
  var t = $C(), e = RC(), r = TC(), n = r && r.isTypedArray, s = n ? e(n) : t;
  return pf = s, pf;
}
var hf, pb;
function _C() {
  if (pb) return hf;
  pb = 1;
  var t = OC(), e = AC(), r = wo(), n = Fx(), s = PC(), i = Lx(), o = Object.prototype, a = o.hasOwnProperty;
  function c(u, f) {
    var l = r(u), d = !l && e(u), p = !l && !d && n(u), m = !l && !d && !p && i(u), h = l || d || p || m, v = h ? t(u.length, String) : [], b = v.length;
    for (var g in u)
      (f || a.call(u, g)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
      (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      p && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      m && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
      s(g, b))) && v.push(g);
    return v;
  }
  return hf = c, hf;
}
var df, hb;
function CC() {
  if (hb) return df;
  hb = 1;
  var t = Object.prototype;
  function e(r) {
    var n = r && r.constructor, s = typeof n == "function" && n.prototype || t;
    return r === s;
  }
  return df = e, df;
}
var mf, db;
function IC() {
  if (db) return mf;
  db = 1;
  function t(e, r) {
    return function(n) {
      return e(r(n));
    };
  }
  return mf = t, mf;
}
var yf, mb;
function MC() {
  if (mb) return yf;
  mb = 1;
  var t = IC(), e = t(Object.keys, Object);
  return yf = e, yf;
}
var gf, yb;
function kC() {
  if (yb) return gf;
  yb = 1;
  var t = CC(), e = MC(), r = Object.prototype, n = r.hasOwnProperty;
  function s(i) {
    if (!t(i))
      return e(i);
    var o = [];
    for (var a in Object(i))
      n.call(i, a) && a != "constructor" && o.push(a);
    return o;
  }
  return gf = s, gf;
}
var vf, gb;
function NC() {
  if (gb) return vf;
  gb = 1;
  var t = Ix(), e = Dx();
  function r(n) {
    return n != null && e(n.length) && !t(n);
  }
  return vf = r, vf;
}
var bf, vb;
function FC() {
  if (vb) return bf;
  vb = 1;
  var t = _C(), e = kC(), r = NC();
  function n(s) {
    return r(s) ? t(s) : e(s);
  }
  return bf = n, bf;
}
var Ef, bb;
function DC() {
  if (bb) return Ef;
  bb = 1;
  var t = bC(), e = xC(), r = FC();
  function n(s) {
    return t(s, r, e);
  }
  return Ef = n, Ef;
}
var Sf, Eb;
function LC() {
  if (Eb) return Sf;
  Eb = 1;
  var t = DC(), e = 1, r = Object.prototype, n = r.hasOwnProperty;
  function s(i, o, a, c, u, f) {
    var l = a & e, d = t(i), p = d.length, m = t(o), h = m.length;
    if (p != h && !l)
      return !1;
    for (var v = p; v--; ) {
      var b = d[v];
      if (!(l ? b in o : n.call(o, b)))
        return !1;
    }
    var g = f.get(i), S = f.get(o);
    if (g && S)
      return g == o && S == i;
    var E = !0;
    f.set(i, o), f.set(o, i);
    for (var O = l; ++v < p; ) {
      b = d[v];
      var A = i[b], $ = o[b];
      if (c)
        var w = l ? c($, A, b, o, i, f) : c(A, $, b, i, o, f);
      if (!(w === void 0 ? A === $ || u(A, $, a, c, f) : w)) {
        E = !1;
        break;
      }
      O || (O = b == "constructor");
    }
    if (E && !O) {
      var C = i.constructor, T = o.constructor;
      C != T && "constructor" in i && "constructor" in o && !(typeof C == "function" && C instanceof C && typeof T == "function" && T instanceof T) && (E = !1);
    }
    return f.delete(i), f.delete(o), E;
  }
  return Sf = s, Sf;
}
var xf, Sb;
function qC() {
  if (Sb) return xf;
  Sb = 1;
  var t = Un(), e = pr(), r = t(e, "DataView");
  return xf = r, xf;
}
var Of, xb;
function VC() {
  if (xb) return Of;
  xb = 1;
  var t = Un(), e = pr(), r = t(e, "Promise");
  return Of = r, Of;
}
var wf, Ob;
function BC() {
  if (Ob) return wf;
  Ob = 1;
  var t = Un(), e = pr(), r = t(e, "Set");
  return wf = r, wf;
}
var Af, wb;
function UC() {
  if (wb) return Af;
  wb = 1;
  var t = Un(), e = pr(), r = t(e, "WeakMap");
  return Af = r, Af;
}
var jf, Ab;
function JC() {
  if (Ab) return jf;
  Ab = 1;
  var t = qC(), e = Oh(), r = VC(), n = BC(), s = UC(), i = fn(), o = Mx(), a = "[object Map]", c = "[object Object]", u = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", p = o(t), m = o(e), h = o(r), v = o(n), b = o(s), g = i;
  return (t && g(new t(new ArrayBuffer(1))) != d || e && g(new e()) != a || r && g(r.resolve()) != u || n && g(new n()) != f || s && g(new s()) != l) && (g = function(S) {
    var E = i(S), O = E == c ? S.constructor : void 0, A = O ? o(O) : "";
    if (A)
      switch (A) {
        case p:
          return d;
        case m:
          return a;
        case h:
          return u;
        case v:
          return f;
        case b:
          return l;
      }
    return E;
  }), jf = g, jf;
}
var Pf, jb;
function HC() {
  if (jb) return Pf;
  jb = 1;
  var t = cC(), e = Nx(), r = gC(), n = LC(), s = JC(), i = wo(), o = Fx(), a = Lx(), c = 1, u = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, p = d.hasOwnProperty;
  function m(h, v, b, g, S, E) {
    var O = i(h), A = i(v), $ = O ? f : s(h), w = A ? f : s(v);
    $ = $ == u ? l : $, w = w == u ? l : w;
    var C = $ == l, T = w == l, x = $ == w;
    if (x && o(h)) {
      if (!o(v))
        return !1;
      O = !0, C = !1;
    }
    if (x && !C)
      return E || (E = new t()), O || a(h) ? e(h, v, b, g, S, E) : r(h, v, $, b, g, S, E);
    if (!(b & c)) {
      var P = C && p.call(h, "__wrapped__"), R = T && p.call(v, "__wrapped__");
      if (P || R) {
        var q = P ? h.value() : h, F = R ? v.value() : v;
        return E || (E = new t()), S(q, F, b, g, E);
      }
    }
    return x ? (E || (E = new t()), n(h, v, b, g, S, E)) : !1;
  }
  return Pf = m, Pf;
}
var $f, Pb;
function GC() {
  if (Pb) return $f;
  Pb = 1;
  var t = HC(), e = pn();
  function r(n, s, i, o, a) {
    return n === s ? !0 : n == null || s == null || !e(n) && !e(s) ? n !== n && s !== s : t(n, s, i, o, r, a);
  }
  return $f = r, $f;
}
var Rf, $b;
function KC() {
  if ($b) return Rf;
  $b = 1;
  var t = GC();
  function e(r, n) {
    return t(r, n);
  }
  return Rf = e, Rf;
}
var Tf, Rb;
function To() {
  if (Rb) return Tf;
  Rb = 1;
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
  return Tf = t, Tf;
}
var _f, Tb;
function _o() {
  if (Tb) return _f;
  Tb = 1;
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
  return _f = e, _f;
}
var Cf, _b;
function Co() {
  if (_b) return Cf;
  _b = 1;
  const t = _o();
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
  }), Cf = r, Cf;
}
var If, Cb;
function hr() {
  if (Cb) return If;
  Cb = 1;
  const t = KC(), e = To(), r = Co();
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
          const p = i[d], m = l.indexOf(p);
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
  return If = n, If;
}
var Mf, Ib;
function zC() {
  if (Ib) return Mf;
  Ib = 1;
  const t = hr();
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
  return Mf = e, Mf;
}
var kf, Mb;
function WC() {
  if (Mb) return kf;
  Mb = 1;
  const t = hr();
  return kf = class extends t {
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
  }, kf;
}
var Nf, kb;
function YC() {
  if (kb) return Nf;
  kb = 1;
  const t = hr();
  return Nf = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "number";
    }
    primitive() {
      return "number";
    }
  }, Nf;
}
var Ff, Nb;
function XC() {
  if (Nb) return Ff;
  Nb = 1;
  const t = hr();
  return Ff = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "boolean";
    }
    primitive() {
      return "boolean";
    }
  }, Ff;
}
var Df, Fb;
function qx() {
  if (Fb) return Df;
  Fb = 1;
  const t = _o(), e = hr(), r = Co();
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
  }), Df = n, Df;
}
var Lf, Db;
function Vx() {
  if (Db) return Lf;
  Db = 1;
  const t = To(), e = hr();
  return Lf = class extends e {
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
  }, Lf;
}
var qf, Lb;
function Bx() {
  if (Lb) return qf;
  Lb = 1;
  const t = _o(), e = Co();
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
  return qf = r, qf;
}
var Vf, qb;
function QC() {
  if (qb) return Vf;
  qb = 1;
  const t = _o(), e = Ao(), r = qx(), n = Vx(), s = Bx();
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
        const p = a.bind(c)(f, l, d);
        p && u.push(p);
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
  return Vf = i, Vf;
}
var Bf, Vb;
function ZC() {
  if (Vb) return Bf;
  Vb = 1;
  const t = hr();
  return Bf = class extends t {
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
  }, Bf;
}
var Uf, Bb;
function eI() {
  if (Bb) return Uf;
  Bb = 1;
  const t = hr();
  return Uf = class extends t {
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
  }, Uf;
}
var Jf, Ub;
function Ux() {
  if (Ub) return Jf;
  Ub = 1;
  const t = hr(), e = zC(), r = WC(), n = YC(), s = XC(), i = qx(), o = Vx(), a = QC(), c = ZC(), u = eI(), f = Co(), l = Bx(), d = To();
  function p(m) {
    return m instanceof t ? m : typeof m == "string" ? new r(m) : typeof m == "number" ? new n(m) : typeof m == "boolean" ? new s(m) : m === null ? new e() : Array.isArray(m) ? new i(m.map(p)) : typeof m == "object" ? new a(m) : m;
  }
  return t.prototype.ObjectElement = a, t.prototype.RefElement = u, t.prototype.MemberElement = o, t.prototype.refract = p, f.prototype.refract = p, Jf = {
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
    refract: p,
    ArraySlice: f,
    ObjectSlice: l,
    KeyValuePair: d
  }, Jf;
}
var Hf, Jb;
function tI() {
  if (Jb) return Hf;
  Jb = 1;
  const t = T_(), e = I_(), r = M_(), n = k_(), s = Ao(), i = xh(), o = Ux();
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
        const d = this.elementDetection[l][0], p = this.elementDetection[l][1];
        if (d(u)) {
          f = new p(u);
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
  return i.prototype.Namespace = a, Hf = a, Hf;
}
var Gf, Hb;
function rI() {
  if (Hb) return Gf;
  Hb = 1;
  const t = xh();
  return Gf = class extends t {
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
  }, Gf;
}
var Gb;
function nI() {
  if (Gb) return we;
  Gb = 1;
  const t = tI(), e = Ux();
  return we.Namespace = t, we.namespace = function(n) {
    return new t(n);
  }, we.KeyValuePair = To(), we.ArraySlice = e.ArraySlice, we.ObjectSlice = e.ObjectSlice, we.Element = e.Element, we.StringElement = e.StringElement, we.NumberElement = e.NumberElement, we.BooleanElement = e.BooleanElement, we.NullElement = e.NullElement, we.ArrayElement = e.ArrayElement, we.ObjectElement = e.ObjectElement, we.MemberElement = e.MemberElement, we.RefElement = e.RefElement, we.LinkElement = e.LinkElement, we.refract = e.refract, we.JSONSerialiser = xh(), we.JSON06Serialiser = rI(), we;
}
var y = nI();
let Ji = class extends y.StringElement {
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
}, Hi = class extends y.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}, Bt = class extends y.ArrayElement {
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
    if (lt(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
};
class Gi extends y.ArrayElement {
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
    const r = new y.ArrayElement([e.start.row, e.start.column, e.start.char]), n = new y.ArrayElement([e.end.row, e.end.column, e.end.char]);
    r.classes.push("position"), n.classes.push("position"), this.push(r).push(n);
  }
}
const sI = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", iI = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, oI = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, aI = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof y.ArrayElement) && e.classes.includes(t), mr = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, Y = (t) => t({
  hasMethod: sI,
  hasBasicElementProps: iI,
  primitiveEq: oI,
  isElementType: mr,
  hasClass: aI
}), Me = Y(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.Element || t(r) && e(void 0, r)), he = Y(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.StringElement || t(r) && e("string", r)), wh = Y(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NumberElement || t(r) && e("number", r)), Ah = Y(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NullElement || t(r) && e("null", r)), Io = Y(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.BooleanElement || t(r) && e("boolean", r)), Oe = Y(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Ge = Y(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ArrayElement && !(n instanceof y.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), Xt = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.MemberElement || t(n) && e("member", n) && r(void 0, n)), Jx = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.LinkElement || t(n) && e("link", n) && r(void 0, n)), Hx = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.RefElement || t(n) && e("ref", n) && r(void 0, n)), cI = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ji || t(n) && e("annotation", n) && r("array", n)), uI = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Hi || t(n) && e("comment", n) && r("string", n)), Gx = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bt || t(n) && e("parseResult", n) && r("array", n)), Kx = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gi || t(n) && e("sourceMap", n) && r("array", n)), Kr = (t) => mr("object", t) || mr("array", t) || mr("boolean", t) || mr("number", t) || mr("string", t) || mr("null", t) || mr("member", t), zx = (t) => Kx(t.meta.get("sourceMap")), lI = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Ge(r) ? tt(Xe(r.toValue()), t) : !1;
}, hs = (t, e) => t.length === 0 ? !0 : tt(Xe(e.classes.toValue()), t), fI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: zx,
  includesClasses: hs,
  includesSymbols: lI,
  isAnnotationElement: cI,
  isArrayElement: Ge,
  isBooleanElement: Io,
  isCommentElement: uI,
  isElement: Me,
  isLinkElement: Jx,
  isMemberElement: Xt,
  isNullElement: Ah,
  isNumberElement: wh,
  isObjectElement: Oe,
  isParseResultElement: Gx,
  isPrimitiveElement: Kr,
  isRefElement: Hx,
  isSourceMapElement: Kx,
  isStringElement: he
}, Symbol.toStringTag, { value: "Module" }));
let Wx = class extends y.Namespace {
  constructor() {
    super(), this.register("annotation", Ji), this.register("comment", Hi), this.register("parseResult", Bt), this.register("sourceMap", Gi);
  }
};
const Yx = new Wx(), jh = (t) => {
  const e = new Wx();
  return fe(t) && e.use(t), e;
}, Xx = () => ({
  predicates: {
    ...fI
  },
  namespace: Yx
});
let pI = class extends Cr {
  constructor(e, r, n) {
    if (super(e, r, n), this.name = this.constructor.name, typeof r == "string" && (this.message = r), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(r).stack, n != null && typeof n == "object" && Object.hasOwn(n, "cause") && !("cause" in this)) {
      const {
        cause: s
      } = n;
      this.cause = s, s instanceof Error && "stack" in s && (this.stack = `${this.stack}
CAUSE: ${s.stack}`);
    }
  }
}, hI = class extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(pI, e);
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
}, ds = class extends hI {
  constructor(e, r) {
    if (super(e, r), r != null && typeof r == "object") {
      const {
        cause: n,
        ...s
      } = r;
      Object.assign(this, s);
    }
  }
};
const Mo = (t, e, r) => {
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
}, Z = {}, Rs = (t) => t?.type, Qx = (t) => typeof Rs(t) == "string", dr = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), Qe = (t, {
  visitFnGetter: e = Mo,
  nodeTypeGetter: r = Rs,
  breakSymbol: n = Z,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    enter(u, f, l, d, p, m) {
      let h = u, v = !1;
      const b = {
        ...m,
        replaceWith(g, S) {
          m.replaceWith(g, S), h = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const S = e(t[g], r(h), !1);
          if (typeof S == "function") {
            const E = S.call(t[g], h, f, l, d, p, b);
            if (typeof E?.then == "function")
              throw new ds("Async visitor not supported in sync mode", {
                visitor: t[g],
                visitFn: S
              });
            if (E === i)
              c[g] = h;
            else if (E === n)
              c[g] = n;
            else {
              if (E === s)
                return E;
              if (E !== void 0)
                if (o)
                  h = E, v = !0;
                else
                  return E;
            }
          }
        }
      return v ? h : void 0;
    },
    leave(u, f, l, d, p, m) {
      let h = u;
      const v = {
        ...m,
        replaceWith(b, g) {
          m.replaceWith(b, g), h = b;
        }
      };
      for (let b = 0; b < t.length; b += 1)
        if (c[b] === a) {
          const g = e(t[b], r(h), !0);
          if (typeof g == "function") {
            const S = g.call(t[b], h, f, l, d, p, v);
            if (typeof S?.then == "function")
              throw new ds("Async visitor not supported in sync mode", {
                visitor: t[b],
                visitFn: g
              });
            if (S === n)
              c[b] = n;
            else if (S !== void 0 && S !== i)
              return S;
          }
        } else c[b] === h && (c[b] = a);
    }
  };
}, dI = (t, {
  visitFnGetter: e = Mo,
  nodeTypeGetter: r = Rs,
  breakSymbol: n = Z,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    async enter(u, f, l, d, p, m) {
      let h = u, v = !1;
      const b = {
        ...m,
        replaceWith(g, S) {
          m.replaceWith(g, S), h = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const S = e(t[g], r(h), !1);
          if (typeof S == "function") {
            const E = await S.call(t[g], h, f, l, d, p, b);
            if (E === i)
              c[g] = h;
            else if (E === n)
              c[g] = n;
            else {
              if (E === s)
                return E;
              if (E !== void 0)
                if (o)
                  h = E, v = !0;
                else
                  return E;
            }
          }
        }
      return v ? h : void 0;
    },
    async leave(u, f, l, d, p, m) {
      let h = u;
      const v = {
        ...m,
        replaceWith(b, g) {
          m.replaceWith(b, g), h = b;
        }
      };
      for (let b = 0; b < t.length; b += 1)
        if (c[b] === a) {
          const g = e(t[b], r(h), !0);
          if (typeof g == "function") {
            const S = await g.call(t[b], h, f, l, d, p, v);
            if (S === n)
              c[b] = n;
            else if (S !== void 0 && S !== i)
              return S;
          }
        } else c[b] === h && (c[b] = a);
    }
  };
};
Qe[Symbol.for("nodejs.util.promisify.custom")] = dI;
const rt = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = Z,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Mo,
  nodeTypeGetter: c = Rs,
  nodePredicate: u = Qx,
  nodeCloneFn: f = dr,
  detectCycles: l = !0,
  detectCyclesCallback: d = null
} = {}) => {
  const p = r || {};
  let m, h = Array.isArray(t), v = [t], b = -1, g, S = [], E = t;
  const O = [], A = [];
  do {
    b += 1;
    const C = b === v.length;
    let T;
    const x = C && S.length !== 0;
    if (C) {
      if (T = A.length === 0 ? void 0 : O.pop(), E = g, g = A.pop(), x)
        if (h) {
          E = E.slice();
          let R = 0;
          for (const [q, F] of S) {
            const Q = q - R;
            F === i ? (E.splice(Q, 1), R += 1) : E[Q] = F;
          }
        } else {
          E = f(E);
          for (const [R, q] of S)
            E[R] = q;
        }
      b = m.index, v = m.keys, S = m.edits, h = m.inArray, m = m.prev;
    } else if (g !== i && g !== void 0) {
      if (T = h ? b : v[b], E = g[T], E === i || E === void 0)
        continue;
      O.push(T);
    }
    let P;
    if (!Array.isArray(E)) {
      var $;
      if (!u(E))
        throw new ds(`Invalid AST Node:  ${String(E)}`, {
          node: E
        });
      if (l && A.includes(E)) {
        typeof d == "function" && d(E, T, g, O, A), O.pop();
        continue;
      }
      const R = a(e, c(E), C);
      if (R) {
        for (const [F, Q] of Object.entries(n))
          e[F] = Q;
        const q = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(F, Q) {
            typeof Q == "function" ? Q(F, E, T, g, O, A) : g && (g[T] = F), C || (E = F);
          }
        };
        P = R.call(e, E, T, g, O, A, q);
      }
      if (typeof (($ = P) === null || $ === void 0 ? void 0 : $.then) == "function")
        throw new ds("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: R
        });
      if (P === s)
        break;
      if (P === o) {
        if (!C) {
          O.pop();
          continue;
        }
      } else if (P !== void 0 && (S.push([T, P]), !C))
        if (u(P))
          E = P;
        else {
          O.pop();
          continue;
        }
    }
    if (P === void 0 && x && S.push([T, E]), !C) {
      var w;
      m = {
        inArray: h,
        index: b,
        keys: v,
        edits: S,
        prev: m
      }, h = Array.isArray(E), v = h ? E : (w = p[c(E)]) !== null && w !== void 0 ? w : [], b = -1, S = [], g !== i && g !== void 0 && A.push(g), g = E;
    }
  } while (m !== void 0);
  return S.length !== 0 ? S[S.length - 1][1] : t;
};
rt[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = Z,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Mo,
  nodeTypeGetter: c = Rs,
  nodePredicate: u = Qx,
  nodeCloneFn: f = dr,
  detectCycles: l = !0,
  detectCyclesCallback: d = null
} = {}) => {
  const p = r || {};
  let m, h = Array.isArray(t), v = [t], b = -1, g, S = [], E = t;
  const O = [], A = [];
  do {
    b += 1;
    const w = b === v.length;
    let C;
    const T = w && S.length !== 0;
    if (w) {
      if (C = A.length === 0 ? void 0 : O.pop(), E = g, g = A.pop(), T)
        if (h) {
          E = E.slice();
          let P = 0;
          for (const [R, q] of S) {
            const F = R - P;
            q === i ? (E.splice(F, 1), P += 1) : E[F] = q;
          }
        } else {
          E = f(E);
          for (const [P, R] of S)
            E[P] = R;
        }
      b = m.index, v = m.keys, S = m.edits, h = m.inArray, m = m.prev;
    } else if (g !== i && g !== void 0) {
      if (C = h ? b : v[b], E = g[C], E === i || E === void 0)
        continue;
      O.push(C);
    }
    let x;
    if (!Array.isArray(E)) {
      if (!u(E))
        throw new ds(`Invalid AST Node: ${String(E)}`, {
          node: E
        });
      if (l && A.includes(E)) {
        typeof d == "function" && d(E, C, g, O, A), O.pop();
        continue;
      }
      const P = a(e, c(E), w);
      if (P) {
        for (const [q, F] of Object.entries(n))
          e[q] = F;
        const R = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(q, F) {
            typeof F == "function" ? F(q, E, C, g, O, A) : g && (g[C] = q), w || (E = q);
          }
        };
        x = await P.call(e, E, C, g, O, A, R);
      }
      if (x === s)
        break;
      if (x === o) {
        if (!w) {
          O.pop();
          continue;
        }
      } else if (x !== void 0 && (S.push([C, x]), !w))
        if (u(x))
          E = x;
        else {
          O.pop();
          continue;
        }
    }
    if (x === void 0 && T && S.push([C, E]), !w) {
      var $;
      m = {
        inArray: h,
        index: b,
        keys: v,
        edits: S,
        prev: m
      }, h = Array.isArray(E), v = h ? E : ($ = p[c(E)]) !== null && $ !== void 0 ? $ : [], b = -1, S = [], g !== i && g !== void 0 && A.push(g), g = E;
    }
  } while (m !== void 0);
  return S.length !== 0 ? S[S.length - 1][1] : t;
};
let Zx = class extends Ss {
  value;
  constructor(e, r) {
    super(e, r), typeof r < "u" && (this.value = r.value);
  }
}, mI = class extends Zx {
}, yI = class extends Zx {
};
const H = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof y.KeyValuePair) {
    const {
      key: s,
      value: i
    } = t, o = Me(s) ? H(s, n) : s, a = Me(i) ? H(i, n) : i, c = new y.KeyValuePair(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof y.ObjectSlice) {
    const s = (a) => H(a, n), i = [...t].map(s), o = new y.ObjectSlice(i);
    return r.set(t, o), o;
  }
  if (t instanceof y.ArraySlice) {
    const s = (a) => H(a, n), i = [...t].map(s), o = new y.ArraySlice(i);
    return r.set(t, o), o;
  }
  if (Me(t)) {
    const s = Ce(t);
    if (r.set(t, s), t.content)
      if (Me(t.content))
        s.content = H(t.content, n);
      else if (t.content instanceof y.KeyValuePair)
        s.content = H(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => H(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new mI("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
H.safe = (t) => {
  try {
    return H(t);
  } catch {
    return t;
  }
};
const eO = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new y.KeyValuePair(e, r);
}, gI = (t) => {
  const e = [...t];
  return new y.ArraySlice(e);
}, vI = (t) => {
  const e = [...t];
  return new y.ObjectSlice(e);
}, tO = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = H(t.meta)), t.attributes.length > 0 && (e._attributes = H(t.attributes)), Me(t.content)) {
    const r = t.content;
    e.content = tO(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof y.KeyValuePair ? e.content = eO(t.content) : e.content = t.content;
  return e;
}, Ce = (t) => {
  if (t instanceof y.KeyValuePair)
    return eO(t);
  if (t instanceof y.ObjectSlice)
    return vI(t);
  if (t instanceof y.ArraySlice)
    return gI(t);
  if (Me(t))
    return tO(t);
  throw new yI("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
Ce.safe = (t) => {
  try {
    return Ce(t);
  } catch {
    return t;
  }
};
const Jn = (t) => Oe(t) ? "ObjectElement" : Ge(t) ? "ArrayElement" : Xt(t) ? "MemberElement" : he(t) ? "StringElement" : Io(t) ? "BooleanElement" : wh(t) ? "NumberElement" : Ah(t) ? "NullElement" : Jx(t) ? "LinkElement" : Hx(t) ? "RefElement" : void 0, rO = (t) => Me(t) ? Ce(t) : dr(t), nO = be(Jn, _e), ko = {
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
class sO {
  result;
  predicate;
  returnOnTrue;
  returnOnFalse;
  constructor({
    predicate: e = rh,
    returnOnTrue: r,
    returnOnFalse: n
  } = {}) {
    this.result = [], this.predicate = e, this.returnOnTrue = r, this.returnOnFalse = n;
  }
  enter(e) {
    return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
  }
}
const jt = (t, e, {
  keyMap: r = ko,
  ...n
} = {}) => rt(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Jn,
  nodePredicate: nO,
  nodeCloneFn: rO,
  ...n
});
jt[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = ko,
  ...n
} = {}) => rt[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Jn,
  nodePredicate: nO,
  nodeCloneFn: rO,
  ...n
});
const iO = {
  toolboxCreator: Xx,
  visitorOptions: {
    nodeTypeGetter: Jn,
    exposeEdits: !0
  }
}, No = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(iO, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Qe(a.map(Ke({}, "visitor")), {
    ...i
  });
  a.forEach(pe(["pre"], []));
  const u = jt(t, c, i);
  return a.forEach(pe(["post"], [])), u;
}, bI = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(iO, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = Qe[Symbol.for("nodejs.util.promisify.custom")], u = jt[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(Ke({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(pe(["pre"], [])));
  const l = await u(t, f, i);
  return await Promise.allSettled(a.map(pe(["post"], []))), l;
};
No[Symbol.for("nodejs.util.promisify.custom")] = bI;
var Kf = { exports: {} }, Kb;
function EI() {
  return Kb || (Kb = 1, (function(t) {
    var e = (() => {
      var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (E, O, A) => O in E ? r(E, O, { enumerable: !0, configurable: !0, writable: !0, value: A }) : E[O] = A, u = (E, O) => {
        for (var A in O || (O = {}))
          o.call(O, A) && c(E, A, O[A]);
        if (i)
          for (var A of i(O))
            a.call(O, A) && c(E, A, O[A]);
        return E;
      }, f = (E, O) => {
        for (var A in O)
          r(E, A, { get: O[A], enumerable: !0 });
      }, l = (E, O, A, $) => {
        if (O && typeof O == "object" || typeof O == "function")
          for (let w of s(O))
            !o.call(E, w) && w !== A && r(E, w, { get: () => O[w], enumerable: !($ = n(O, w)) || $.enumerable });
        return E;
      }, d = (E) => l(r({}, "__esModule", { value: !0 }), E), p = (E, O, A) => c(E, typeof O != "symbol" ? O + "" : O, A), m = {};
      f(m, {
        DEFAULT_OPTIONS: () => b,
        DEFAULT_UUID_LENGTH: () => v,
        default: () => S
      });
      var h = "5.3.2", v = 6, b = {
        dictionary: "alphanum",
        shuffle: !0,
        debug: !1,
        length: v,
        counter: 0
      }, g = class {
        constructor(O = {}) {
          p(this, "counter"), p(this, "debug"), p(this, "dict"), p(this, "version"), p(this, "dictIndex", 0), p(this, "dictRange", []), p(this, "lowerBound", 0), p(this, "upperBound", 0), p(this, "dictLength", 0), p(this, "uuidLength"), p(this, "_digit_first_ascii", 48), p(this, "_digit_last_ascii", 58), p(this, "_alpha_lower_first_ascii", 97), p(this, "_alpha_lower_last_ascii", 123), p(this, "_hex_last_ascii", 103), p(this, "_alpha_upper_first_ascii", 65), p(this, "_alpha_upper_last_ascii", 91), p(this, "_number_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii]
          }), p(this, "_alpha_dict_ranges", {
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), p(this, "_alpha_lower_dict_ranges", {
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
          }), p(this, "_alpha_upper_dict_ranges", {
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), p(this, "_alphanum_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), p(this, "_alphanum_lower_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
          }), p(this, "_alphanum_upper_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          }), p(this, "_hex_dict_ranges", {
            decDigits: [this._digit_first_ascii, this._digit_last_ascii],
            alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
          }), p(this, "_dict_ranges", {
            _number_dict_ranges: this._number_dict_ranges,
            _alpha_dict_ranges: this._alpha_dict_ranges,
            _alpha_lower_dict_ranges: this._alpha_lower_dict_ranges,
            _alpha_upper_dict_ranges: this._alpha_upper_dict_ranges,
            _alphanum_dict_ranges: this._alphanum_dict_ranges,
            _alphanum_lower_dict_ranges: this._alphanum_lower_dict_ranges,
            _alphanum_upper_dict_ranges: this._alphanum_upper_dict_ranges,
            _hex_dict_ranges: this._hex_dict_ranges
          }), p(this, "log", (...x) => {
            const P = [...x];
            if (P[0] = "[short-unique-id] ".concat(x[0]), this.debug === !0 && typeof console < "u" && console !== null) {
              console.log(...P);
              return;
            }
          }), p(this, "_normalizeDictionary", (x, P) => {
            let R;
            if (x && Array.isArray(x) && x.length > 1)
              R = x;
            else {
              R = [], this.dictIndex = 0;
              const q = "_".concat(x, "_dict_ranges"), F = this._dict_ranges[q];
              let Q = 0;
              for (const [, D] of Object.entries(F)) {
                const [_, U] = D;
                Q += Math.abs(U - _);
              }
              R = new Array(Q);
              let te = 0;
              for (const [, D] of Object.entries(F)) {
                this.dictRange = D, this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1];
                const _ = this.lowerBound <= this.upperBound, U = this.lowerBound, B = this.upperBound;
                if (_)
                  for (let L = U; L < B; L++)
                    R[te++] = String.fromCharCode(L), this.dictIndex = L;
                else
                  for (let L = U; L > B; L--)
                    R[te++] = String.fromCharCode(L), this.dictIndex = L;
              }
              R.length = te;
            }
            if (P) {
              const q = R.length;
              for (let F = q - 1; F > 0; F--) {
                const Q = Math.floor(Math.random() * (F + 1));
                [R[F], R[Q]] = [R[Q], R[F]];
              }
            }
            return R;
          }), p(this, "setDictionary", (x, P) => {
            this.dict = this._normalizeDictionary(x, P), this.dictLength = this.dict.length, this.setCounter(0);
          }), p(this, "seq", () => this.sequentialUUID()), p(this, "sequentialUUID", () => {
            const x = this.dictLength, P = this.dict;
            let R = this.counter;
            const q = [];
            do {
              const Q = R % x;
              R = Math.trunc(R / x), q.push(P[Q]);
            } while (R !== 0);
            const F = q.join("");
            return this.counter += 1, F;
          }), p(this, "rnd", (x = this.uuidLength || v) => this.randomUUID(x)), p(this, "randomUUID", (x = this.uuidLength || v) => {
            if (x === null || typeof x > "u" || x < 1)
              throw new Error("Invalid UUID Length Provided");
            const P = new Array(x), R = this.dictLength, q = this.dict;
            for (let F = 0; F < x; F++) {
              const Q = Math.floor(Math.random() * R);
              P[F] = q[Q];
            }
            return P.join("");
          }), p(this, "fmt", (x, P) => this.formattedUUID(x, P)), p(this, "formattedUUID", (x, P) => {
            const R = {
              $r: this.randomUUID,
              $s: this.sequentialUUID,
              $t: this.stamp
            };
            return x.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (F) => {
              const Q = F.slice(0, 2), te = Number.parseInt(F.slice(2), 10);
              return Q === "$s" ? R[Q]().padStart(te, "0") : Q === "$t" && P ? R[Q](te, P) : R[Q](te);
            });
          }), p(this, "availableUUIDs", (x = this.uuidLength) => Number.parseFloat(([...new Set(this.dict)].length ** x).toFixed(0))), p(this, "_collisionCache", /* @__PURE__ */ new Map()), p(this, "approxMaxBeforeCollision", (x = this.availableUUIDs(this.uuidLength)) => {
            const P = x, R = this._collisionCache.get(P);
            if (R !== void 0)
              return R;
            const q = Number.parseFloat(Math.sqrt(Math.PI / 2 * x).toFixed(20));
            return this._collisionCache.set(P, q), q;
          }), p(this, "collisionProbability", (x = this.availableUUIDs(this.uuidLength), P = this.uuidLength) => Number.parseFloat(
            (this.approxMaxBeforeCollision(x) / this.availableUUIDs(P)).toFixed(20)
          )), p(this, "uniqueness", (x = this.availableUUIDs(this.uuidLength)) => {
            const P = Number.parseFloat(
              (1 - this.approxMaxBeforeCollision(x) / x).toFixed(20)
            );
            return P > 1 ? 1 : P < 0 ? 0 : P;
          }), p(this, "getVersion", () => this.version), p(this, "stamp", (x, P) => {
            const R = Math.floor(+(P || /* @__PURE__ */ new Date()) / 1e3).toString(16);
            if (typeof x == "number" && x === 0)
              return R;
            if (typeof x != "number" || x < 10)
              throw new Error(
                [
                  "Param finalLength must be a number greater than or equal to 10,",
                  "or 0 if you want the raw hexadecimal timestamp"
                ].join(`
`)
              );
            const q = x - 9, F = Math.round(Math.random() * (q > 15 ? 15 : q)), Q = this.randomUUID(q);
            return "".concat(Q.substring(0, F)).concat(R).concat(Q.substring(F)).concat(F.toString(16));
          }), p(this, "parseStamp", (x, P) => {
            if (P && !/t0|t[1-9]\d{1,}/.test(P))
              throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
            const R = P ? P.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (F) => {
              const Q = {
                $r: (_) => [...Array(_)].map(() => "r").join(""),
                $s: (_) => [...Array(_)].map(() => "s").join(""),
                $t: (_) => [...Array(_)].map(() => "t").join("")
              }, te = F.slice(0, 2), D = Number.parseInt(F.slice(2), 10);
              return Q[te](D);
            }).replace(/^(.*?)(t{8,})(.*)$/g, (F, Q, te) => x.substring(Q.length, Q.length + te.length)) : x;
            if (R.length === 8)
              return new Date(Number.parseInt(R, 16) * 1e3);
            if (R.length < 10)
              throw new Error("Stamp length invalid");
            const q = Number.parseInt(R.substring(R.length - 1), 16);
            return new Date(Number.parseInt(R.substring(q, q + 8), 16) * 1e3);
          }), p(this, "setCounter", (x) => {
            this.counter = x;
          }), p(this, "validate", (x, P) => {
            const R = P ? this._normalizeDictionary(P) : this.dict;
            return x.split("").every((q) => R.includes(q));
          });
          const A = u(u({}, b), O);
          this.counter = 0, this.debug = !1, this.dict = [], this.version = h;
          const { dictionary: $, shuffle: w, length: C, counter: T } = A;
          this.uuidLength = C, this.setDictionary($, w), this.setCounter(T), this.debug = A.debug, this.log(this.dict), this.log(
            "Generator instantiated with Dictionary Size ".concat(this.dictLength, " and counter set to ").concat(this.counter)
          ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this);
        }
      };
      p(g, "default", g);
      var S = g;
      return d(m);
    })();
    t.exports = e.default, typeof window < "u" && (e = e.default);
  })(Kf)), Kf.exports;
}
var SI = EI();
const xI = /* @__PURE__ */ so(SI);
class OI extends Ss {
  value;
  constructor(e, r) {
    super(e, r), typeof r < "u" && (this.value = r.value);
  }
}
class Ph {
  uuid;
  identityMap;
  constructor({
    length: e = 6
  } = {}) {
    this.uuid = new xI({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  }
  identify(e) {
    if (!Me(e))
      throw new OI("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
        value: e
      });
    if (e.meta.hasKey("id") && he(e.meta.get("id")) && !e.meta.get("id").equals(""))
      return e.id;
    if (this.identityMap.has(e))
      return this.identityMap.get(e);
    const r = new y.StringElement(this.generateId());
    return this.identityMap.set(e, r), r;
  }
  forget(e) {
    return this.identityMap.has(e) ? (this.identityMap.delete(e), !0) : !1;
  }
  generateId() {
    return this.uuid.randomUUID();
  }
}
new Ph();
class wI extends Array {
  unknownMediaType = "application/octet-stream";
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new Bu("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new Bu("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new Bu("latest method in MediaTypes class is not yet implemented.");
  }
}
const AI = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return Me(t) && (t.meta.length > 0 && (n.meta = H(t.meta)), t.attributes.length > 0 && (n.attributes = H(t.attributes))), No(n, r, {
    toolboxCreator: Xx,
    visitorOptions: {
      nodeTypeGetter: Jn
    }
  });
}, Pt = (t) => (e, r = {}) => AI(e, {
  ...r,
  Type: t
});
y.ObjectElement.refract = Pt(y.ObjectElement);
y.ArrayElement.refract = Pt(y.ArrayElement);
y.StringElement.refract = Pt(y.StringElement);
y.BooleanElement.refract = Pt(y.BooleanElement);
y.NullElement.refract = Pt(y.NullElement);
y.NumberElement.refract = Pt(y.NumberElement);
y.LinkElement.refract = Pt(y.LinkElement);
y.RefElement.refract = Pt(y.RefElement);
Ji.refract = Pt(Ji);
Hi.refract = Pt(Hi);
Bt.refract = Pt(Bt);
Gi.refract = Pt(Gi);
const jI = (t, e) => {
  const r = new sO({
    predicate: t
  });
  return jt(e, r), new y.ArraySlice(r.result);
}, oO = (t, e) => {
  const r = new sO({
    predicate: t,
    returnOnTrue: Z
  });
  return jt(e, r), hx(void 0, [0], r.result);
}, aO = (t) => typeof t?.type == "string" ? t.type : Jn(t), cO = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...ko
}, uO = (t, e, {
  keyMap: r = cO,
  ...n
} = {}) => jt(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: aO,
  nodePredicate: yt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
uO[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = cO,
  ...r
} = {}) => jt[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: aO,
  nodePredicate: yt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
let PI = class {
  type = "EphemeralArray";
  content = [];
  reference = void 0;
  constructor(e) {
    this.content = e, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}, $I = class {
  type = "EphemeralObject";
  content = [];
  reference = void 0;
  constructor(e) {
    this.content = e, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}, RI = class {
  ObjectElement = {
    enter: (e) => {
      if (this.references.has(e))
        return this.references.get(e).toReference();
      const r = new $I(e.content);
      return this.references.set(e, r), r;
    }
  };
  EphemeralObject = {
    leave: (e) => e.toObject()
  };
  MemberElement = {
    enter: (e) => [e.key, e.value]
  };
  ArrayElement = {
    enter: (e) => {
      if (this.references.has(e))
        return this.references.get(e).toReference();
      const r = new PI(e.content);
      return this.references.set(e, r), r;
    }
  };
  EphemeralArray = {
    leave: (e) => e.toArray()
  };
  references = /* @__PURE__ */ new WeakMap();
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
    return he(e.href) ? e.href.toValue() : "";
  }
};
const I = (t) => Me(t) ? he(t) || wh(t) || Io(t) || Ah(t) ? t.toValue() : uO(t, new RI()) : t, Ai = (t, e = /* @__PURE__ */ new WeakMap()) => (Xt(t) ? (e.set(t.key, t), Ai(t.key, e), e.set(t.value, t), Ai(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), Ai(r, e);
}), e), TI = (t, e, r) => {
  const n = r.get(t);
  Xt(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, _I = (t, e, r) => {
  const n = r.get(t);
  Oe(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, CI = (t, e, r) => {
  const n = r.get(t);
  Ge(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class II {
  element;
  edges;
  constructor({
    element: e
  }) {
    this.element = e;
  }
  transclude(e, r) {
    var n;
    if (e === this.element) return r;
    if (e === r) return this.element;
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : Ai(this.element);
    const s = this.edges.get(e);
    if (!lt(s))
      return Oe(s) ? _I(e, r, this.edges) : Ge(s) ? CI(e, r, this.edges) : Xt(s) && TI(e, r, this.edges), this.element;
  }
}
const MI = (t, e, r) => new II({
  element: r
}).transclude(t, e), lO = (t, e) => {
  const r = At(t, e);
  return cn((n) => {
    if (fe(n) && qt("$ref", n) && un(_e, "$ref", n)) {
      const s = ue(["$ref"], n), i = Nr("#/", s);
      return ue(i.split("/"), r);
    }
    return fe(n) ? lO(n, r) : n;
  }, t);
}, fO = (t, e = Yx) => {
  if (_e(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return fe(t) && qt("element", t) ? e.fromRefract(t) : e.toElement(t);
}, Ki = (t) => {
  const e = t.meta.length > 0 ? H(t.meta) : void 0, r = t.attributes.length > 0 ? H(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, zi = (t, e) => e.clone && e.isMergeableElement(t) ? $r(Ki(t), t, e) : t, kI = (t, e) => {
  if (typeof e.customMerge != "function")
    return $r;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : $r;
}, NI = (t) => typeof t.customMetaMerge != "function" ? (e) => H(e) : t.customMetaMerge, FI = (t) => typeof t.customAttributesMerge != "function" ? (e) => H(e) : t.customAttributesMerge, DI = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => zi(n, r)), LI = (t, e, r) => {
  const n = Oe(t) ? Ki(t) : Ki(e);
  return Oe(t) && t.forEach((s, i, o) => {
    const a = Ce(o);
    a.value = zi(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = I(i);
    let c;
    if (Oe(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const u = t.get(a);
      c = Ce(o), c.value = kI(i, r)(u, s, r);
    } else
      c = Ce(o), c.value = zi(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, yi = {
  clone: !0,
  isMergeableElement: (t) => Oe(t) || Ge(t),
  arrayElementMerge: DI,
  objectElementMerge: LI,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
}, $r = (t, e, r) => {
  var n, s, i;
  const o = {
    ...yi,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : yi.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : yi.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : yi.objectElementMerge;
  const a = Ge(e), c = Ge(t);
  if (!(a === c))
    return zi(e, o);
  const f = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return f.meta = NI(o)(t.meta, e.meta), f.attributes = FI(o)(t.attributes, e.attributes), f;
};
$r.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new y.ObjectElement() : t.reduce((r, n) => $r(r, n, e), Ki(t[0]));
};
class $h extends ve {
}
class pO extends $h {
}
const qI = async (t, e) => {
  let r = t, n = !1;
  if (!Gx(t)) {
    const o = Ce(t);
    o.classes.push("result"), r = new Bt([o]), n = !0;
  }
  const s = new ps({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await vh("canDereference", [s, e], e.dereference.strategies);
  if (Ps(i))
    throw new pO(s.uri);
  try {
    const {
      result: o
    } = await bh("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new $h(`Error while dereferencing file "${s.uri}"`, {
      cause: o
    });
  }
};
let Ts = class {
  name;
  /**
   * Whether to allow "empty" files. This includes zero-byte files.
   */
  allowEmpty;
  /**
   * Whether to generate source map during parsing.
   */
  sourceMap;
  /**
   * List of supported file extensions.
   */
  fileExtensions;
  /**
   * List of supported media types.
   */
  mediaTypes;
  constructor({
    name: e,
    allowEmpty: r = !0,
    sourceMap: n = !1,
    fileExtensions: s = [],
    mediaTypes: i = []
  }) {
    this.name = e, this.allowEmpty = r, this.sourceMap = n, this.fileExtensions = s, this.mediaTypes = i;
  }
};
class VI {
  name;
  constructor({
    name: e
  }) {
    this.name = e;
  }
}
class BI extends VI {
  timeout;
  redirects;
  withCredentials;
  constructor(e) {
    const {
      name: r = "http-resolver",
      timeout: n = 5e3,
      redirects: s = 5,
      withCredentials: i = !1
    } = e ?? {};
    super({
      name: r
    }), this.timeout = n, this.redirects = s, this.withCredentials = i;
  }
  // eslint-disable-next-line class-methods-use-this
  canRead(e) {
    return Oo(e.uri);
  }
}
class UI {
  name;
  constructor({
    name: e
  }) {
    this.name = e;
  }
}
class JI {
  name;
  constructor({
    name: e
  }) {
    this.name = e;
  }
}
class zf extends Array {
  includesCycle(e) {
    return this.filter((r) => r.has(e)).length > 1;
  }
  includes(e, r) {
    return e instanceof Set ? super.includes(e, r) : this.some((n) => n.has(e));
  }
  findItem(e) {
    for (const r of this)
      for (const n of r)
        if (Me(n) && e(n))
          return n;
  }
}
let ir = class {
  uri;
  depth;
  value;
  refSet;
  errors;
  constructor({
    uri: e,
    depth: r = 0,
    refSet: n,
    value: s
  }) {
    this.uri = e, this.value = s, this.depth = r, this.refSet = n, this.errors = [];
  }
};
class hO extends ve {
}
class HI extends hO {
}
class GI extends ve {
}
class Rh extends GI {
}
class KI extends hO {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
class Pn extends $h {
}
class zI extends Eh {
}
class ar extends vp {
}
const WI = async (t, e = {}) => {
  const r = $x(Px, e);
  return qI(t, r);
};
function zb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function YI(t) {
  if (Array.isArray(t)) return t;
}
function XI(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function QI(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function ZI(t, e, r) {
  return e && QI(t.prototype, e), t;
}
function dO(t, e) {
  return e != null && typeof Symbol < "u" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
}
function eM(t, e) {
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
function tM() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function rM(t, e) {
  return YI(t) || eM(t, e) || nM(t, e) || tM();
}
function $n(t) {
  "@swc/helpers - typeof";
  return t && typeof Symbol < "u" && t.constructor === Symbol ? "symbol" : typeof t;
}
function nM(t, e) {
  if (t) {
    if (typeof t == "string") return zb(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zb(t, e);
  }
}
var mO = function(t) {
  throw TypeError(t);
}, yO = function(t, e, r) {
  return e.has(t) || mO("Cannot " + r);
}, Ze = function(t, e, r) {
  return yO(t, e, "read from private field"), r ? r.call(t) : e.get(t);
}, Wb = function(t, e, r) {
  return e.has(t) ? mO("Cannot add the same private member more than once") : dO(e, WeakSet) ? e.add(t) : e.set(t, r);
}, Wf = function(t, e, r, n) {
  return yO(t, e, "write to private field"), e.set(t, r), r;
}, Hn = function(t) {
  return Object.prototype.toString.call(t);
}, gO = function(t) {
  return ArrayBuffer.isView(t) && !dO(t, DataView);
}, sM = function(t) {
  return Hn(t) === "[object Date]";
}, iM = function(t) {
  return Hn(t) === "[object RegExp]";
}, oM = function(t) {
  return Hn(t) === "[object Error]";
}, aM = function(t) {
  return Hn(t) === "[object Boolean]";
}, cM = function(t) {
  return Hn(t) === "[object Number]";
}, uM = function(t) {
  return Hn(t) === "[object String]";
}, vO = Array.isArray, lM = Object.getOwnPropertyDescriptor, fM = Object.prototype.propertyIsEnumerable, pM = Object.getOwnPropertySymbols, ji = Object.prototype.hasOwnProperty;
function Th(t) {
  for (var e = Object.keys(t), r = pM(t), n = 0; n < r.length; n++)
    fM.call(t, r[n]) && e.push(r[n]);
  return e;
}
function hM(t, e) {
  var r;
  return !(!((r = lM(t, e)) === null || r === void 0) && r.writable);
}
function bO(t, e) {
  if ((typeof t > "u" ? "undefined" : $n(t)) === "object" && t !== null) {
    var r;
    if (vO(t))
      r = [];
    else if (sM(t))
      r = new Date(t.getTime ? t.getTime() : t);
    else if (iM(t))
      r = new RegExp(t);
    else if (oM(t))
      r = {
        message: t.message
      };
    else if (aM(t) || cM(t) || uM(t))
      r = Object(t);
    else {
      if (gO(t))
        return t.slice();
      r = Object.create(Object.getPrototypeOf(t));
    }
    var n = e.includeSymbols ? Th : Object.keys, s = !0, i = !1, o = void 0;
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
var EO = {
  includeSymbols: !1,
  immutable: !1
};
function Yb(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EO, n = [], s = [], i = !0, o = r.includeSymbols ? Th : Object.keys, a = !!r.immutable;
  return (function c(u) {
    var f = a ? bO(u, r) : u, l = {}, d = !0, p = {
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
      update: function(P) {
        var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        p.isRoot || (p.parent.node[p.key] = P), p.node = P, R && (d = !1);
      },
      delete: function(P) {
        delete p.parent.node[p.key], P && (d = !1);
      },
      remove: function(P) {
        vO(p.parent.node) ? p.parent.node.splice(p.key, 1) : delete p.parent.node[p.key], P && (d = !1);
      },
      keys: null,
      before: function(P) {
        l.before = P;
      },
      after: function(P) {
        l.after = P;
      },
      pre: function(P) {
        l.pre = P;
      },
      post: function(P) {
        l.post = P;
      },
      stop: function() {
        i = !1;
      },
      block: function() {
        d = !1;
      }
    };
    if (!i)
      return p;
    function m() {
      if ($n(p.node) === "object" && p.node !== null) {
        (!p.keys || p.node_ !== p.node) && (p.keys = o(p.node)), p.isLeaf = p.keys.length === 0;
        for (var x = 0; x < s.length; x++)
          if (s[x].node_ === u) {
            p.circular = s[x];
            break;
          }
      } else
        p.isLeaf = !0, p.keys = null;
      p.notLeaf = !p.isLeaf, p.notRoot = !p.isRoot;
    }
    m();
    var h = e.call(p, p.node);
    if (h !== void 0 && p.update && p.update(h), l.before && l.before.call(p, p.node), !d)
      return p;
    if ($n(p.node) === "object" && p.node !== null && !p.circular) {
      s.push(p), m();
      var v, b = !0, g = !1, S = void 0;
      try {
        for (var E = Object.entries((v = p.keys) !== null && v !== void 0 ? v : [])[Symbol.iterator](), O; !(b = (O = E.next()).done); b = !0) {
          var A = rM(O.value, 2), $ = A[0], w = A[1], C;
          n.push(w), l.pre && l.pre.call(p, p.node[w], w);
          var T = c(p.node[w]);
          a && ji.call(p.node, w) && !hM(p.node, w) && (p.node[w] = T.node), T.isLast = !((C = p.keys) === null || C === void 0) && C.length ? +$ === p.keys.length - 1 : !1, T.isFirst = +$ == 0, l.post && l.post.call(p, T), n.pop();
        }
      } catch (x) {
        g = !0, S = x;
      } finally {
        try {
          !b && E.return != null && E.return();
        } finally {
          if (g)
            throw S;
        }
      }
      s.pop();
    }
    return l.after && l.after.call(p, p.node), p;
  })(t).node;
}
var at, yr, Qt = /* @__PURE__ */ (function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : EO;
    XI(this, t), Wb(this, at), Wb(this, yr), Wf(this, at, e), Wf(this, yr, r);
  }
  return ZI(t, [
    {
      /**
      * Get the element at the array `path`.
      */
      key: "get",
      value: function(r) {
        for (var n = Ze(this, at), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!ji.call(n, i) || !Ze(this, yr).includeSymbols && (typeof i > "u" ? "undefined" : $n(i)) === "symbol")
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
        for (var n = Ze(this, at), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!ji.call(n, i) || !Ze(this, yr).includeSymbols && (typeof i > "u" ? "undefined" : $n(i)) === "symbol")
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
        var s = Ze(this, at), i = 0;
        for (i = 0; i < r.length - 1; i++) {
          var o = r[i];
          ji.call(s, o) || (s[o] = {}), s = s[o];
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
        return Yb(Ze(this, at), r, {
          immutable: !0,
          includeSymbols: !!Ze(this, yr).includeSymbols
        });
      }
    },
    {
      /**
      * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
      */
      key: "forEach",
      value: function(r) {
        return Wf(this, at, Yb(Ze(this, at), r, Ze(this, yr))), Ze(this, at);
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
        var s = arguments.length === 1, i = s ? Ze(this, at) : n;
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
        var r = [], n = [], s = Ze(this, yr);
        return gO(Ze(this, at)) ? Ze(this, at).slice() : (function i(o) {
          for (var a = 0; a < r.length; a++)
            if (r[a] === o)
              return n[a];
          if ((typeof o > "u" ? "undefined" : $n(o)) === "object" && o !== null) {
            var c = bO(o, s);
            r.push(o), n.push(c);
            var u = s.includeSymbols ? Th : Object.keys, f = !0, l = !1, d = void 0;
            try {
              for (var p = u(o)[Symbol.iterator](), m; !(f = (m = p.next()).done); f = !0) {
                var h = m.value;
                c[h] = i(o[h]);
              }
            } catch (v) {
              l = !0, d = v;
            } finally {
              try {
                !f && p.return != null && p.return();
              } finally {
                if (l)
                  throw d;
              }
            }
            return r.pop(), n.pop(), c;
          }
          return o;
        })(Ze(this, at));
      }
    }
  ]), t;
})();
at = /* @__PURE__ */ new WeakMap();
yr = /* @__PURE__ */ new WeakMap();
var Zt = function(t, e) {
  return new Qt(t, e);
};
Zt.get = function(t, e, r) {
  return new Qt(t, r).get(e);
};
Zt.set = function(t, e, r, n) {
  return new Qt(t, n).set(e, r);
};
Zt.has = function(t, e, r) {
  return new Qt(t, r).has(e);
};
Zt.map = function(t, e, r) {
  return new Qt(t, r).map(e);
};
Zt.forEach = function(t, e, r) {
  return new Qt(t, r).forEach(e);
};
Zt.reduce = function(t, e, r, n) {
  return new Qt(t, n).reduce(e, r);
};
Zt.paths = function(t, e) {
  return new Qt(t, e).paths();
};
Zt.nodes = function(t, e) {
  return new Qt(t, e).nodes();
};
Zt.clone = function(t, e) {
  return new Qt(t, e).clone();
};
var dM = Zt;
const mM = ["properties"], yM = ["properties"], gM = [
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
], vM = ["schema/example", "items/example"];
function SO(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    mM.indexOf(e) > -1 && yM.indexOf(r) === -1 || gM.indexOf(n) > -1 || vM.some((s) => n.indexOf(s) > -1)
  );
}
function bM(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return dM(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), u = bp(this.node, n(a));
      i.push(r.replace(c, u));
    }
  }), i;
}
function bp(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if (Oo(s))
    o = Ie(s, i);
  else {
    const a = Ie(Ri, s), u = Ie(a, i).replace(Ri, "");
    o = i.startsWith("/") ? u : u.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const EM = /^([a-z]+:\/\/|\/\/)/i;
class Mn extends Ss {
}
const er = {}, Xb = /* @__PURE__ */ new WeakMap(), SM = [
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
], xM = (t) => SM.some((e) => e(t)), OM = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (SO(i) || xM(i))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof t != "string")
      return new Mn("$ref: must be a string (JSON-Ref)", {
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    const a = OO(t), c = a[0], u = a[1] || "";
    let f;
    try {
      f = o || c ? xO(c, o) : null;
    } catch (h) {
      return Ep(h, {
        pointer: u,
        $ref: t,
        basePath: f,
        fullPath: r
      });
    }
    let l, d;
    if ($M(u, f, i, n) && !s.useCircularStructures) {
      const h = bp(t, f);
      return t === h ? null : ae.replace(r, h);
    }
    if (f == null ? (d = Ch(u), l = n.get(d), typeof l > "u" && (l = new Mn(`Could not resolve reference: ${t}`, {
      pointer: u,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (l = wO(f, u), l.__value != null ? l = l.__value : l = l.catch((h) => {
      throw Ep(h, {
        pointer: u,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), l instanceof Error)
      return [ae.remove(r), l];
    const p = bp(t, f), m = ae.replace(i, l, {
      $$ref: p
    });
    if (f && f !== o)
      return [m, ae.context(i, {
        baseDoc: f
      })];
    try {
      if (!RM(n.state, m) || s.useCircularStructures)
        return m;
    } catch {
      return null;
    }
  }
}, _h = Object.assign(OM, {
  docCache: er,
  absoluteify: xO,
  clearCache: wM,
  JSONRefError: Mn,
  wrapError: Ep,
  getDoc: AO,
  split: OO,
  extractFromDoc: wO,
  fetchJSON: AM,
  extract: Sp,
  jsonPointerToArray: Ch,
  unescapeJsonPointerToken: jO
});
function xO(t, e) {
  if (!EM.test(t)) {
    if (!e)
      throw new Mn(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return Ie(e, t);
  }
  return t;
}
function Ep(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new Mn(`Could not resolve reference: ${r}`, {
    ...e,
    cause: t
  });
}
function OO(t) {
  return (t + "").split("#");
}
function wO(t, e) {
  const r = er[t];
  if (r && !ae.isPromise(r))
    try {
      const n = Sp(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return AO(t).then((n) => Sp(e, n));
}
function wM(t) {
  typeof t < "u" ? delete er[t] : Object.keys(er).forEach((e) => {
    delete er[e];
  });
}
function AO(t) {
  const e = er[t];
  return e ? ae.isPromise(e) ? e : Promise.resolve(e) : (er[t] = _h.fetchJSON(t).then((r) => (er[t] = r, r)), er[t]);
}
function AM(t) {
  return fetch(t, {
    headers: {
      Accept: gE
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => Tn.load(e));
}
function Sp(t, e) {
  const r = Ch(t);
  if (r.length < 1)
    return e;
  const n = ae.getIn(e, r);
  if (typeof n > "u")
    throw new Mn(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function Ch(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(jO);
}
function jO(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function PO(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function jM(t) {
  return t.length === 0 ? "" : `/${t.map(PO).join("/")}`;
}
const PM = (t) => !t || t === "/" || t === "#";
function Yf(t, e) {
  if (PM(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function $M(t, e, r, n) {
  let s = Xb.get(n);
  s || (s = {}, Xb.set(n, s));
  const i = jM(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && Yf(a, t))
    return !0;
  let u = "";
  if (r.some((l) => (u = `${u}/${PO(l)}`, s[u] && s[u].some((d) => Yf(d, o) || Yf(o, d)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function RM(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return ae.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const TM = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (SO(i))
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
        const p = new TypeError("Elements in allOf must be objects");
        return p.fullPath = r, c.push(p);
      }
      c.push(n.mergeDeep(i, u));
      const l = r.slice(0, -1), d = bM(u, l, {
        getBaseUrlForNodePath: (p) => n.getContext([...r, f, ...p]).baseDoc,
        specmap: n
      });
      c.push(...d);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, _M = {
  key: "parameters",
  plugin: (t, e, r, n) => {
    if (Array.isArray(t) && t.length) {
      const s = Object.assign([], t), i = r.slice(0, -1), o = {
        ...ae.getIn(n.spec, i)
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
      return ae.replace(r, s);
    }
    return ae.replace(r, t);
  }
}, CM = {
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
    return ae.replace(r, s);
  }
};
class IM {
  constructor(e) {
    this.root = Xf(e || {});
  }
  set(e, r) {
    const n = this.getParent(e, !0);
    if (!n) {
      Wi(this.root, r, null);
      return;
    }
    const s = e[e.length - 1], {
      children: i
    } = n;
    if (i[s]) {
      Wi(i[s], r, n);
      return;
    }
    i[s] = Xf(r, n);
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
      return !i[s] && r && (i[s] = Xf(null, n)), i[s];
    }, this.root);
  }
}
function Xf(t, e) {
  return Wi({
    children: {}
  }, t, e);
}
function Wi(t, e, r) {
  return t.value = e || {}, t.protoValue = r ? {
    ...r.protoValue,
    ...t.value
  } : t.value, Object.keys(t.children).forEach((n) => {
    const s = t.children[n];
    t.children[n] = Wi(s, s.value, t);
  }), t;
}
const Qb = 100, Zb = () => {
};
class MM {
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
      contextTree: new IM(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), ae, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, e), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(ae.isFunction), this.patches.push(ae.add([], this.spec)), this.patches.push(ae.context([], this.context)), this.updatePatches(this.patches);
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
    return e[this.pluginProp] ? (s = e, i = e[this.pluginProp]) : ae.isFunction(e) ? i = e : ae.isObject(e) && (i = o(e)), Object.assign(i.bind(s), {
      pluginName: e.name || r,
      isGenerator: ae.isGenerator(i)
    });
    function o(a) {
      const c = (u, f) => Array.isArray(u) ? u.every((l, d) => l === f[d]) : !0;
      return function* (f, l) {
        const d = {};
        for (const [m, h] of f.filter(ae.isAdditiveMutation).entries())
          if (m < bE)
            yield* p(h.value, h.path, h);
          else
            return;
        function* p(m, h, v) {
          if (!ae.isObject(m))
            a.key === h[h.length - 1] && (yield a.plugin(m, a.key, h, l));
          else {
            const b = h.length - 1, g = h[b], S = h.indexOf("properties"), E = g === "properties" && b === S, O = l.allowMetaPatches && d[m.$$ref];
            for (const A of Object.keys(m)) {
              const $ = m[A], w = h.concat(A), C = ae.isObject($), T = m.$$ref;
              if (O || C && (l.allowMetaPatches && T && c(n, w) && (d[T] = !0), yield* p($, w, v)), !E && A === a.key) {
                const x = c(n, h);
                (!n || x) && (yield a.plugin($, A, w, l, v));
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
    ae.normalizeArray(e).forEach((r) => {
      if (r instanceof Error) {
        this.errors.push(r);
        return;
      }
      try {
        if (!ae.isObject(r)) {
          this.debug("updatePatches", "Got a non-object patch", r);
          return;
        }
        if (this.showDebug && this.allPatches.push(r), ae.isPromise(r.value)) {
          this.promisedPatches.push(r), this.promisedPatchThen(r);
          return;
        }
        if (ae.isContextPatch(r)) {
          this.setContext(r.path, r.value);
          return;
        }
        ae.isMutation(r) && this.updateMutations(r);
      } catch (n) {
        console.error(n), this.errors.push(n);
      }
    });
  }
  updateMutations(e) {
    typeof e.value == "object" && !Array.isArray(e.value) && this.allowMetaPatches && (e.value = {
      ...e.value
    });
    const r = ae.applyPatch(this.state, e, {
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
    return ae.getIn(this.state, e);
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
    if (e.pluginCount = e.pluginCount || /* @__PURE__ */ new WeakMap(), e.pluginCount.set(r, (e.pluginCount.get(r) || 0) + 1), e.pluginCount[r] > Qb)
      return Promise.resolve({
        spec: e.state,
        errors: e.errors.concat(new Error(`We've reached a hard limit of ${Qb} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const i = this.promisedPatches.map((o) => o.value);
      return Promise.all(i.map((o) => o.then(Zb, Zb))).then(() => this.dispatch());
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
      i && (i = ae.fullyNormalizeArray(i), e.updatePatches(i, r));
    }
  }
}
function kM(t) {
  return new MM(t).dispatch();
}
const Br = {
  refs: _h,
  allOf: TM,
  parameters: _M,
  properties: CM
};
async function Ih(t) {
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
  } = t, d = Fp(t), p = hS(t), m = l.find((v) => v.match(e));
  return h(e);
  async function h(v) {
    d && (Br.refs.docCache[d] = v), Br.refs.fetchJSON = pS(p, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const b = [Br.refs];
    typeof o == "function" && b.push(Br.parameters), typeof i == "function" && b.push(Br.properties), r !== "strict" && b.push(Br.allOf);
    const g = await kM({
      spec: v,
      context: {
        baseDoc: d
      },
      plugins: b,
      allowMetaPatches: n,
      // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator: s,
      // for lazy resolution
      parameterMacro: o,
      modelPropertyMacro: i,
      useCircularStructures: f
    });
    return u || (g.spec = m.normalize(g.spec)), g;
  }
}
const $O = (t) => t.replace(/\W/gi, "_");
function NM(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${$O(t)}`;
}
function _s(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? $O(t.operationId) : NM(e, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function Mh(t) {
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
      const u = _s(c, s, a);
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
            for (const p in d)
              if (!Array.isArray(c[p]))
                c[p] = d[p];
              else if (p === "parameters")
                for (const m of d[p])
                  c[p].some((v) => !fe(v) && !fe(m) ? !1 : v === m ? !0 : ["name", "$ref", "$$ref"].some((b) => typeof v[b] == "string" && typeof m[b] == "string" && v[b] === m[b])) || c[p].push(m);
        }
      }
    }
  }
  return e.$$normalized = !0, t;
}
function FM() {
  Br.refs.clearCache();
}
const RO = {
  name: "generic",
  match() {
    return !0;
  },
  normalize(t) {
    const {
      spec: e
    } = Mh({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return Ih(t);
  }
};
async function DM(t) {
  return Ih(t);
}
const TO = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, _O = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, kh = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Nh = (t) => _O(t) || kh(t), CO = {
  name: "openapi-2",
  match(t) {
    return TO(t);
  },
  normalize(t) {
    const {
      spec: e
    } = Mh({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return DM(t);
  }
};
async function LM(t) {
  return Ih(t);
}
const IO = {
  name: "openapi-3-0",
  match(t) {
    return _O(t);
  },
  normalize(t) {
    const {
      spec: e
    } = Mh({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return LM(t);
  }
}, qM = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = Fp(t), i = hS(t), o = e || await pS(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((u) => u.match(o)).resolve(a);
}, MO = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return qM(r);
}, VM = MO({
  strategies: [IO, CO, RO]
}), BM = async (t, e, r = {}) => {
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
  }, p = f.find((h) => h.match(t)).normalize(t), m = await VM({
    spec: p,
    ...l,
    allowMetaPatches: !0,
    skipNormalization: !kh(t)
  });
  return !n && Array.isArray(e) && e.length && (m.spec = e.reduce((h, v) => h?.[v], m.spec) || null), m;
}, UM = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return BM(e, r, s);
}, JM = (t) => {
  try {
    const e = t.startsWith("#") ? t.slice(1) : t;
    return decodeURIComponent(e);
  } catch {
    return t;
  }
}, St = (t) => {
  const e = t.indexOf("#"), r = e === -1 ? "#" : t.substring(e);
  return JM(r);
};
function Cs() {
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
const $t = function() {
  const e = z, r = gt, n = this, s = "parser.js: Parser(): ", i = function() {
    this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
      this.state = e.ACTIVE, this.phraseLength = 0;
    };
  };
  n.ast = void 0, n.stats = void 0, n.trace = void 0, n.callbacks = [];
  let o = 0, a = 0, c = 0, u = 0, f = 0, l, d, p, m, h = new i(), v, b, g;
  const S = () => {
    o = 0, a = 0, c = 0, u = 0, f = 0, l = void 0, d = void 0, p = void 0, m = void 0, h.refresh(), v = void 0, b = void 0, g = void 0;
  }, E = () => {
    const D = `${s}initializeCallbacks(): `;
    let _;
    for (v = [], b = [], _ = 0; _ < l.length; _ += 1)
      v[_] = void 0;
    for (_ = 0; _ < d.length; _ += 1)
      b[_] = void 0;
    let U;
    const B = [];
    for (_ = 0; _ < l.length; _ += 1)
      B.push(l[_].lower);
    for (_ = 0; _ < d.length; _ += 1)
      B.push(d[_].lower);
    for (const L in n.callbacks)
      if (n.callbacks.hasOwnProperty(L)) {
        if (_ = B.indexOf(L.toLowerCase()), _ < 0)
          throw new Error(`${D}syntax callback '${L}' not a rule or udt name`);
        if (U = n.callbacks[L] ? n.callbacks[L] : void 0, typeof U == "function" || U === void 0)
          _ < l.length ? v[_] = U : b[_ - l.length] = U;
        else
          throw new Error(`${D}syntax callback[${L}] must be function reference or falsy)`);
      }
  };
  n.parse = (D, _, U, B) => {
    const L = `${s}parse(): `;
    S(), m = r.stringToChars(U), l = D.rules, d = D.udts;
    const re = _.toLowerCase();
    let ne;
    for (const gn in l)
      if (l.hasOwnProperty(gn) && re === l[gn].lower) {
        ne = l[gn].index;
        break;
      }
    if (ne === void 0)
      throw new Error(`${L}start rule name '${startRule}' not recognized`);
    E(), n.trace && n.trace.init(l, d, m), n.stats && n.stats.init(l, d), n.ast && n.ast.init(l, d, m), g = B, p = [
      {
        type: e.RNM,
        index: ne
      }
    ], te(0, 0), p = void 0;
    let ke = !1;
    switch (h.state) {
      case e.ACTIVE:
        throw new Error(`${L}final state should never be 'ACTIVE'`);
      case e.NOMATCH:
        ke = !1;
        break;
      case e.EMPTY:
      case e.MATCH:
        h.phraseLength === m.length ? ke = !0 : ke = !1;
        break;
      default:
        throw new Error("unrecognized state");
    }
    return {
      success: ke,
      state: h.state,
      stateName: e.idName(h.state),
      length: m.length,
      matched: h.phraseLength,
      maxMatched: f,
      maxTreeDepth: c,
      nodeHits: u
    };
  };
  const O = (D, _) => {
    const U = p[D];
    for (let B = 0; B < U.children.length && (te(U.children[B], _), h.state === e.NOMATCH); B += 1)
      ;
  }, A = (D, _) => {
    let U, B, L, re;
    const ne = p[D];
    n.ast && (B = n.ast.getLength()), U = !0, L = _, re = 0;
    for (let ke = 0; ke < ne.children.length; ke += 1)
      if (te(ne.children[ke], L), h.state === e.NOMATCH) {
        U = !1;
        break;
      } else
        L += h.phraseLength, re += h.phraseLength;
    U ? (h.state = re === 0 ? e.EMPTY : e.MATCH, h.phraseLength = re) : (h.state = e.NOMATCH, h.phraseLength = 0, n.ast && n.ast.setLength(B));
  }, $ = (D, _) => {
    let U, B, L, re;
    const ne = p[D];
    if (ne.max === 0) {
      h.state = e.EMPTY, h.phraseLength = 0;
      return;
    }
    for (B = _, L = 0, re = 0, n.ast && (U = n.ast.getLength()); !(B >= m.length || (te(D + 1, B), h.state === e.NOMATCH) || h.state === e.EMPTY || (re += 1, L += h.phraseLength, B += h.phraseLength, re === ne.max)); )
      ;
    h.state === e.EMPTY || re >= ne.min ? (h.state = L === 0 ? e.EMPTY : e.MATCH, h.phraseLength = L) : (h.state = e.NOMATCH, h.phraseLength = 0, n.ast && n.ast.setLength(U));
  }, w = (D, _, U, B) => {
    if (_.phraseLength > U) {
      let L = `${s}opRNM(${D.name}): callback function error: `;
      throw L += `sysData.phraseLength: ${_.phraseLength}`, L += ` must be <= remaining chars: ${U}`, new Error(L);
    }
    switch (_.state) {
      case e.ACTIVE:
        if (!B)
          throw new Error(
            `${s}opRNM(${D.name}): callback function return error. ACTIVE state not allowed.`
          );
        break;
      case e.EMPTY:
        _.phraseLength = 0;
        break;
      case e.MATCH:
        _.phraseLength === 0 && (_.state = e.EMPTY);
        break;
      case e.NOMATCH:
        _.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opRNM(${D.name}): callback function return error. Unrecognized return state: ${_.state}`
        );
    }
  }, C = (D, _) => {
    let U, B, L;
    const re = p[D], ne = l[re.index], ke = v[ne.index];
    if (o || (B = n.ast && n.ast.ruleDefined(re.index), B && (U = n.ast.getLength(), n.ast.down(re.index, l[re.index].name))), ke) {
      const gn = m.length - _;
      ke(h, m, _, g), w(ne, h, gn, !0), h.state === e.ACTIVE && (L = p, p = ne.opcodes, te(0, _), p = L, ke(h, m, _, g), w(ne, h, gn, !1));
    } else
      L = p, p = ne.opcodes, te(0, _), p = L;
    o || B && (h.state === e.NOMATCH ? n.ast.setLength(U) : n.ast.up(re.index, ne.name, _, h.phraseLength));
  }, T = (D, _) => {
    const U = p[D];
    h.state = e.NOMATCH, _ < m.length && U.min <= m[_] && m[_] <= U.max && (h.state = e.MATCH, h.phraseLength = 1);
  }, x = (D, _) => {
    const U = p[D], B = U.string.length;
    if (h.state = e.NOMATCH, _ + B <= m.length) {
      for (let L = 0; L < B; L += 1)
        if (m[_ + L] !== U.string[L])
          return;
      h.state = e.MATCH, h.phraseLength = B;
    }
  }, P = (D, _) => {
    let U;
    const B = p[D];
    h.state = e.NOMATCH;
    const L = B.string.length;
    if (L === 0) {
      h.state = e.EMPTY;
      return;
    }
    if (_ + L <= m.length) {
      for (let re = 0; re < L; re += 1)
        if (U = m[_ + re], U >= 65 && U <= 90 && (U += 32), U !== B.string[re])
          return;
      h.state = e.MATCH, h.phraseLength = L;
    }
  }, R = (D, _, U) => {
    if (_.phraseLength > U) {
      let B = `${s}opUDT(${D.name}): callback function error: `;
      throw B += `sysData.phraseLength: ${_.phraseLength}`, B += ` must be <= remaining chars: ${U}`, new Error(B);
    }
    switch (_.state) {
      case e.ACTIVE:
        throw new Error(`${s}opUDT(${D.name}) ACTIVE state return not allowed.`);
      case e.EMPTY:
        if (D.empty)
          _.phraseLength = 0;
        else
          throw new Error(`${s}opUDT(${D.name}) may not return EMPTY.`);
        break;
      case e.MATCH:
        if (_.phraseLength === 0)
          if (D.empty)
            _.state = e.EMPTY;
          else
            throw new Error(`${s}opUDT(${D.name}) may not return EMPTY.`);
        break;
      case e.NOMATCH:
        _.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opUDT(${D.name}): callback function return error. Unrecognized return state: ${_.state}`
        );
    }
  }, q = (D, _) => {
    let U, B, L;
    const re = p[D], ne = d[re.index];
    h.UdtIndex = ne.index, o || (L = n.ast && n.ast.udtDefined(re.index), L && (B = l.length + re.index, U = n.ast.getLength(), n.ast.down(B, ne.name)));
    const ke = m.length - _;
    b[re.index](h, m, _, g), R(ne, h, ke), o || L && (h.state === e.NOMATCH ? n.ast.setLength(U) : n.ast.up(B, ne.name, _, h.phraseLength));
  }, F = (D, _) => {
    switch (o += 1, te(D + 1, _), o -= 1, h.phraseLength = 0, h.state) {
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
  }, Q = (D, _) => {
    switch (o += 1, te(D + 1, _), o -= 1, h.phraseLength = 0, h.state) {
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
  }, te = (D, _) => {
    const U = `${s}opExecute(): `, B = p[D];
    switch (u += 1, a > c && (c = a), a += 1, h.refresh(), n.trace && n.trace.down(B, _), B.type) {
      case e.ALT:
        O(D, _);
        break;
      case e.CAT:
        A(D, _);
        break;
      case e.REP:
        $(D, _);
        break;
      case e.RNM:
        C(D, _);
        break;
      case e.TRG:
        T(D, _);
        break;
      case e.TBS:
        x(D, _);
        break;
      case e.TLS:
        P(D, _);
        break;
      case e.UDT:
        q(D, _);
        break;
      case e.AND:
        F(D, _);
        break;
      case e.NOT:
        Q(D, _);
        break;
      default:
        throw new Error(`${U}unrecognized operator`);
    }
    o || _ + h.phraseLength > f && (f = _ + h.phraseLength), n.stats && n.stats.collect(B, h), n.trace && n.trace.up(B, h.state, _, h.phraseLength), a -= 1;
  };
}, Fh = function() {
  const e = "parser.js: Ast()): ", r = z, n = gt, s = this;
  let i, o, a, c = 0;
  const u = [], f = [], l = [];
  s.callbacks = [], s.init = (p, m, h) => {
    f.length = 0, l.length = 0, c = 0, i = p, o = m, a = h;
    let v;
    const b = [];
    for (v = 0; v < i.length; v += 1)
      b.push(i[v].lower);
    for (v = 0; v < o.length; v += 1)
      b.push(o[v].lower);
    for (c = i.length + o.length, v = 0; v < c; v += 1)
      u[v] = void 0;
    for (const g in s.callbacks)
      if (s.callbacks.hasOwnProperty(g)) {
        const S = g.toLowerCase();
        if (v = b.indexOf(S), v < 0)
          throw new Error(`${e}init: node '${g}' not a rule or udt name`);
        u[v] = s.callbacks[g];
      }
  }, s.ruleDefined = (p) => !!u[p], s.udtDefined = (p) => !!u[i.length + p], s.down = (p, m) => {
    const h = l.length;
    return f.push(h), l.push({
      name: m,
      thisIndex: h,
      thatIndex: void 0,
      state: r.SEM_PRE,
      callbackIndex: p,
      phraseIndex: void 0,
      phraseLength: void 0,
      stack: f.length
    }), h;
  }, s.up = (p, m, h, v) => {
    const b = l.length, g = f.pop();
    return l.push({
      name: m,
      thisIndex: b,
      thatIndex: g,
      state: r.SEM_POST,
      callbackIndex: p,
      phraseIndex: h,
      phraseLength: v,
      stack: f.length
    }), l[g].thatIndex = b, l[g].phraseIndex = h, l[g].phraseLength = v, b;
  }, s.translate = (p) => {
    let m, h;
    for (let v = 0; v < l.length; v += 1)
      h = l[v], m = u[h.callbackIndex], m && (h.state === r.SEM_PRE ? m(r.SEM_PRE, a, h.phraseIndex, h.phraseLength, p) : m && m(r.SEM_POST, a, h.phraseIndex, h.phraseLength, p));
  }, s.setLength = (p) => {
    l.length = p, p > 0 ? f.length = l[p - 1].stack : f.length = 0;
  }, s.getLength = () => l.length;
  function d(p) {
    let m = "";
    for (; p-- > 0; )
      m += " ";
    return m;
  }
  s.toXml = () => {
    let p = "", m = 0;
    return p += `<?xml version="1.0" encoding="utf-8"?>
`, p += `<root nodes="${l.length / 2}" characters="${a.length}">
`, p += `<!-- input string -->
`, p += d(m + 2), p += n.charsToString(a), p += `
`, l.forEach((h) => {
      h.state === r.SEM_PRE ? (m += 1, p += d(m), p += `<node name="${h.name}" index="${h.phraseIndex}" length="${h.phraseLength}">
`, p += d(m + 2), p += n.charsToString(a, h.phraseIndex, h.phraseLength), p += `
`) : (p += d(m), p += `</node><!-- name="${h.name}" -->
`, m -= 1);
    }), p += `</root>
`, p;
  };
}, HM = function() {
  const e = z, r = gt, n = "parser.js: Trace(): ";
  let s, i, o, a = "", c = 0;
  const u = 100, f = this, l = (p) => {
    let m = "", h = 0;
    if (p >= 0)
      for (; p--; )
        h += 1, h === 5 ? (m += "|", h = 0) : m += ".";
    return m;
  };
  f.init = (p, m, h) => {
    i = p, o = m, s = h;
  };
  const d = (p) => {
    let m;
    switch (p.type) {
      case e.ALT:
        m = "ALT";
        break;
      case e.CAT:
        m = "CAT";
        break;
      case e.REP:
        p.max === 1 / 0 ? m = `REP(${p.min},inf)` : m = `REP(${p.min},${p.max})`;
        break;
      case e.RNM:
        m = `RNM(${i[p.index].name})`;
        break;
      case e.TRG:
        m = `TRG(${p.min},${p.max})`;
        break;
      case e.TBS:
        p.string.length > 6 ? m = `TBS(${r.charsToString(p.string, 0, 3)}...)` : m = `TBS(${r.charsToString(p.string, 0, 6)})`;
        break;
      case e.TLS:
        p.string.length > 6 ? m = `TLS(${r.charsToString(p.string, 0, 3)}...)` : m = `TLS(${r.charsToString(p.string, 0, 6)})`;
        break;
      case e.UDT:
        m = `UDT(${o[p.index].name})`;
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
  f.down = (p, m) => {
    const h = l(c), v = Math.min(u, s.length - m);
    let b = r.charsToString(s, m, v);
    v < s.length - m && (b += "..."), b = `${h}|-|[${d(p)}]${b}
`, a += b, c += 1;
  }, f.up = (p, m, h, v) => {
    const b = `${n}trace.up: `;
    c -= 1;
    const g = l(c);
    let S, E, O;
    switch (m) {
      case e.EMPTY:
        O = "|E|", E = "''";
        break;
      case e.MATCH:
        O = "|M|", S = Math.min(u, v), S < v ? E = `'${r.charsToString(s, h, S)}...'` : E = `'${r.charsToString(s, h, S)}'`;
        break;
      case e.NOMATCH:
        O = "|N|", E = "";
        break;
      default:
        throw new Error(`${b} unrecognized state`);
    }
    E = `${g}${O}[${d(p)}]${E}
`, a += E;
  }, f.displayTrace = () => a;
}, GM = function() {
  const e = z, r = "parser.js: Stats(): ";
  let n, s, i;
  const o = [], a = [], c = [];
  this.init = (v, b) => {
    n = v, s = b, m();
  }, this.collect = (v, b) => {
    h(i, b.state, b.phraseLength), h(o[v.type], b.state, b.phraseLength), v.type === e.RNM && h(a[v.index], b.state, b.phraseLength), v.type === e.UDT && h(c[v.index], b.state, b.phraseLength);
  }, this.displayStats = () => {
    let v = "";
    const b = {
      match: 0,
      empty: 0,
      nomatch: 0,
      total: 0
    }, g = (S, E, O, A, $) => {
      b.match += E, b.empty += O, b.nomatch += A, b.total += $;
      const w = u(E), C = u(O), T = u(A), x = u($);
      return `${S} | ${w} | ${C} | ${T} | ${x} |
`;
    };
    return v += `          OPERATOR STATS
`, v += `      |   MATCH |   EMPTY | NOMATCH |   TOTAL |
`, v += g("  ALT", o[e.ALT].match, o[e.ALT].empty, o[e.ALT].nomatch, o[e.ALT].total), v += g("  CAT", o[e.CAT].match, o[e.CAT].empty, o[e.CAT].nomatch, o[e.CAT].total), v += g("  REP", o[e.REP].match, o[e.REP].empty, o[e.REP].nomatch, o[e.REP].total), v += g("  RNM", o[e.RNM].match, o[e.RNM].empty, o[e.RNM].nomatch, o[e.RNM].total), v += g("  TRG", o[e.TRG].match, o[e.TRG].empty, o[e.TRG].nomatch, o[e.TRG].total), v += g("  TBS", o[e.TBS].match, o[e.TBS].empty, o[e.TBS].nomatch, o[e.TBS].total), v += g("  TLS", o[e.TLS].match, o[e.TLS].empty, o[e.TLS].nomatch, o[e.TLS].total), v += g("  UDT", o[e.UDT].match, o[e.UDT].empty, o[e.UDT].nomatch, o[e.UDT].total), v += g("  AND", o[e.AND].match, o[e.AND].empty, o[e.AND].nomatch, o[e.AND].total), v += g("  NOT", o[e.NOT].match, o[e.NOT].empty, o[e.NOT].nomatch, o[e.NOT].total), v += g("TOTAL", b.match, b.empty, b.nomatch, b.total), v;
  }, this.displayHits = (v) => {
    let b = "";
    const g = (S, E, O, A, $) => {
      i.match += S, i.empty += E, i.nomatch += O, i.total += A;
      const w = u(S), C = u(E), T = u(O), x = u(A);
      return `| ${w} | ${C} | ${T} | ${x} | ${$}
`;
    };
    typeof v == "string" && v.toLowerCase()[0] === "a" ? (a.sort(f), c.sort(f), b += `    RULES/UDTS ALPHABETICALLY
`) : typeof v == "string" && v.toLowerCase()[0] === "i" ? (a.sort(d), c.sort(d), b += `    RULES/UDTS BY INDEX
`) : (a.sort(l), c.sort(l), b += `    RULES/UDTS BY HIT COUNT
`), b += `|   MATCH |   EMPTY | NOMATCH |   TOTAL | NAME
`;
    for (let S = 0; S < a.length; S += 1) {
      let E = a[S];
      E.total && (b += g(E.match, E.empty, E.nomatch, E.total, E.name));
    }
    for (let S = 0; S < c.length; S += 1) {
      let E = c[S];
      E.total && (b += g(E.match, E.empty, E.nomatch, E.total, E.name));
    }
    return b;
  };
  const u = (v) => v < 10 ? `      ${v}` : v < 100 ? `     ${v}` : v < 1e3 ? `    ${v}` : v < 1e4 ? `   ${v}` : v < 1e5 ? `  ${v}` : v < 1e6 ? ` ${v}` : `${v}`, f = (v, b) => v.lower < b.lower ? -1 : v.lower > b.lower ? 1 : 0, l = (v, b) => v.total < b.total ? 1 : v.total > b.total ? -1 : f(v, b), d = (v, b) => v.index < b.index ? -1 : v.index > b.index ? 1 : 0, p = function() {
    this.empty = 0, this.match = 0, this.nomatch = 0, this.total = 0;
  }, m = () => {
    o.length = 0, i = new p(), o[e.ALT] = new p(), o[e.CAT] = new p(), o[e.REP] = new p(), o[e.RNM] = new p(), o[e.TRG] = new p(), o[e.TBS] = new p(), o[e.TLS] = new p(), o[e.UDT] = new p(), o[e.AND] = new p(), o[e.NOT] = new p(), a.length = 0;
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
  }, h = (v, b) => {
    switch (v.total += 1, b) {
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
        throw new Error(`${r}collect(): incStat(): unrecognized state: ${b}`);
    }
  };
}, gt = {
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
}, z = {
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
      case z.ALT:
        return "ALT";
      case z.CAT:
        return "CAT";
      case z.REP:
        return "REP";
      case z.RNM:
        return "RNM";
      case z.TRG:
        return "TRG";
      case z.TBS:
        return "TBS";
      case z.TLS:
        return "TLS";
      case z.UDT:
        return "UDT";
      case z.AND:
        return "AND";
      case z.NOT:
        return "NOT";
      case z.ACTIVE:
        return "ACTIVE";
      case z.EMPTY:
        return "EMPTY";
      case z.MATCH:
        return "MATCH";
      case z.NOMATCH:
        return "NOMATCH";
      case z.SEM_PRE:
        return "SEM_PRE";
      case z.SEM_POST:
        return "SEM_POST";
      case z.SEM_OK:
        return "SEM_OK";
      default:
        return "UNRECOGNIZED STATE";
    }
  }
};
class jr extends Error {
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
class kO extends jr {
}
const Qf = (t) => (e, r, n, s, i) => {
  if (!(typeof i == "object" && i !== null && !Array.isArray(i)))
    throw new kO("parser's user data must be an object");
  if (e === z.SEM_PRE) {
    const o = {
      type: t,
      text: gt.charsToString(r, n, s),
      start: n,
      length: s,
      children: []
    };
    i.stack.length > 0 ? i.stack[i.stack.length - 1].children.push(o) : i.root = o, i.stack.push(o);
  }
  e === z.SEM_POST && i.stack.pop();
};
class KM extends Fh {
  constructor() {
    super(), this.callbacks["json-pointer"] = Qf("json-pointer"), this.callbacks["reference-token"] = Qf("reference-token"), this.callbacks.slash = Qf("text");
  }
  getTree() {
    const e = {
      stack: [],
      root: null
    };
    return this.translate(e), delete e.stack, e;
  }
}
const zM = (t) => {
  if (typeof t != "string")
    throw new TypeError("Reference token must be a string");
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
};
class WM extends KM {
  getTree() {
    const {
      root: e
    } = super.getTree();
    return e.children.filter(({
      type: r
    }) => r === "reference-token").map(({
      text: r
    }) => zM(r));
  }
}
class YM extends Array {
  toString() {
    return this.map((e) => `"${String(e)}"`).join(", ");
  }
}
class XM extends HM {
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
    return new YM(...r);
  }
}
const QM = new Cs(), ZM = (t, {
  translator: e = new WM(),
  stats: r = !1,
  trace: n = !1
} = {}) => {
  if (typeof t != "string")
    throw new TypeError("JSON Pointer must be a string");
  try {
    const s = new $t();
    e && (s.ast = e), r && (s.stats = new GM()), n && (s.trace = new XM());
    const i = s.parse(QM, "json-pointer", t);
    return {
      result: i,
      tree: i.success && e ? s.ast.getTree() : void 0,
      stats: s.stats,
      trace: s.trace
    };
  } catch (s) {
    throw new kO("Unexpected error during JSON Pointer parsing", {
      cause: s,
      jsonPointer: t
    });
  }
};
new Cs();
new $t();
new Cs();
new $t();
const ek = new Cs(), tk = new $t(), rk = (t) => {
  if (typeof t != "string") return !1;
  try {
    return tk.parse(ek, "array-index", t).success;
  } catch {
    return !1;
  }
}, nk = new Cs(), sk = new $t(), ik = (t) => {
  if (typeof t != "string") return !1;
  try {
    return sk.parse(nk, "array-dash", t).success;
  } catch {
    return !1;
  }
}, ok = (t) => {
  if (typeof t != "string" && typeof t != "number")
    throw new TypeError("Reference token must be a string or number");
  return String(t).replace(/~/g, "~0").replace(/\//g, "~1");
};
class ak extends jr {
}
const NO = (t) => {
  if (!Array.isArray(t))
    throw new TypeError("Reference tokens must be a list of strings or numbers");
  try {
    return t.length === 0 ? "" : `/${t.map((e) => {
      if (typeof e != "string" && typeof e != "number")
        throw new TypeError("Reference token must be a string or number");
      return ok(String(e));
    }).join("/")}`;
  } catch (e) {
    throw new ak("Unexpected error during JSON Pointer compilation", {
      cause: e,
      referenceTokens: t
    });
  }
};
class ck {
  #e;
  #t;
  #r;
  constructor(e, r = {}) {
    this.#e = e, this.#e.steps = [], this.#e.failed = !1, this.#e.failedAt = -1, this.#e.message = `JSON Pointer "${r.jsonPointer}" was successfully evaluated against the provided value`, this.#e.context = {
      ...r,
      realm: r.realm.name
    }, this.#t = [], this.#r = r.realm;
  }
  step({
    referenceToken: e,
    input: r,
    output: n,
    success: s = !0,
    reason: i
  }) {
    const o = this.#t.length;
    this.#t.push(e);
    const a = {
      referenceToken: e,
      referenceTokenPosition: o,
      input: r,
      inputType: this.#r.isObject(r) ? "object" : this.#r.isArray(r) ? "array" : "unrecognized",
      output: n,
      success: s
    };
    i && (a.reason = i), this.#e.steps.push(a), s || (this.#e.failed = !0, this.#e.failedAt = o, this.#e.message = i);
  }
}
class FO {
  name = "";
  isArray(e) {
    throw new jr("Realm.isArray(node) must be implemented in a subclass");
  }
  isObject(e) {
    throw new jr("Realm.isObject(node) must be implemented in a subclass");
  }
  sizeOf(e) {
    throw new jr("Realm.sizeOf(node) must be implemented in a subclass");
  }
  has(e, r) {
    throw new jr("Realm.has(node) must be implemented in a subclass");
  }
  evaluate(e, r) {
    throw new jr("Realm.evaluate(node) must be implemented in a subclass");
  }
}
class zr extends jr {
}
class An extends zr {
}
class uk extends FO {
  name = "json";
  isArray(e) {
    return Array.isArray(e);
  }
  isObject(e) {
    return typeof e == "object" && e !== null && !this.isArray(e);
  }
  sizeOf(e) {
    return this.isArray(e) ? e.length : this.isObject(e) ? Object.keys(e).length : 0;
  }
  has(e, r) {
    if (this.isArray(e)) {
      const n = Number(r), s = n >>> 0;
      if (n !== s)
        throw new An(`Invalid array index "${r}": index must be an unsinged 32-bit integer`, {
          referenceToken: r,
          currentValue: e,
          realm: this.name
        });
      return s < this.sizeOf(e) && Object.prototype.hasOwnProperty.call(e, n);
    }
    return this.isObject(e) ? Object.prototype.hasOwnProperty.call(e, r) : !1;
  }
  evaluate(e, r) {
    return this.isArray(e) ? e[Number(r)] : e[r];
  }
}
class lk extends zr {
}
class DO extends zr {
}
const fk = (t, e, {
  strictArrays: r = !0,
  strictObjects: n = !0,
  realm: s = new uk(),
  trace: i = !0
} = {}) => {
  const {
    result: o,
    tree: a,
    trace: c
  } = ZM(e, {
    trace: !!i
  }), u = typeof i == "object" && i !== null ? new ck(i, {
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
      throw l += c ? `, expected ${c.inferExpectations()}` : "", new zr(l, {
        jsonPointer: e,
        currentValue: t,
        realm: s.name
      });
    }
    return a.reduce((l, d, p) => {
      if (s.isArray(l)) {
        if (ik(d)) {
          if (r)
            throw new An(`Invalid array index "-" at position ${p} in "${e}". The "-" token always refers to a nonexistent element during evaluation`, {
              jsonPointer: e,
              referenceTokens: a,
              referenceToken: d,
              referenceTokenPosition: p,
              currentValue: l,
              realm: s.name
            });
          return f = s.evaluate(l, String(s.sizeOf(l))), u?.step({
            referenceToken: d,
            input: l,
            output: f
          }), f;
        }
        if (!rk(d))
          throw new An(`Invalid array index "${d}" at position ${p} in "${e}": index MUST be "0", or digits without a leading "0"`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: p,
            currentValue: l,
            realm: s.name
          });
        const m = Number(d);
        if (!Number.isSafeInteger(m))
          throw new An(`Invalid array index "${d}" at position ${p} in "${e}": index must be a safe integer`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: p,
            currentValue: l,
            realm: s.name
          });
        if (!s.has(l, d) && r)
          throw new An(`Invalid array index "${d}" at position ${p} in "${e}": index not found in array`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: p,
            currentValue: l,
            realm: s.name
          });
        return f = s.evaluate(l, d), u?.step({
          referenceToken: d,
          input: l,
          output: f
        }), f;
      }
      if (s.isObject(l)) {
        if (!s.has(l, d) && n)
          throw new DO(`Invalid object key "${d}" at position ${p} in "${e}": key not found in object`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: p,
            currentValue: l,
            realm: s.name
          });
        return f = s.evaluate(l, d), u?.step({
          referenceToken: d,
          input: l,
          output: f
        }), f;
      }
      throw new lk(`Invalid reference token "${d}" at position ${p} in "${e}": cannot be applied to a non-object/non-array value`, {
        jsonPointer: e,
        referenceTokens: a,
        referenceToken: d,
        referenceTokenPosition: p,
        currentValue: l,
        realm: s.name
      });
    }, t);
  } catch (f) {
    throw u?.step({
      referenceToken: f.referenceToken,
      input: f.currentValue,
      success: !1,
      reason: f.message
    }), f instanceof zr ? f : new zr("Unexpected error during JSON Pointer evaluation", {
      cause: f,
      jsonPointer: e,
      referenceTokens: a
    });
  }
};
class pk extends FO {
  name = "apidom";
  isArray(e) {
    return Ge(e);
  }
  isObject(e) {
    return Oe(e);
  }
  sizeOf(e) {
    return this.isArray(e) || this.isObject(e) ? e.length : 0;
  }
  has(e, r) {
    if (this.isArray(e)) {
      const n = Number(r), s = n >>> 0;
      if (n !== s)
        throw new An(`Invalid array index "${r}": index must be an unsinged 32-bit integer`, {
          referenceToken: r,
          currentValue: e,
          realm: this.name
        });
      return s < this.sizeOf(e);
    }
    if (this.isObject(e)) {
      const n = e.keys(), s = new Set(n);
      if (n.length !== s.size)
        throw new DO(`Object key "${r}" is not unique — JSON Pointer requires unique member names`, {
          referenceToken: r,
          currentValue: e,
          realm: this.name
        });
      return e.hasKey(r);
    }
    return !1;
  }
  evaluate(e, r) {
    return this.isArray(e) ? e.get(Number(r)) : e.get(r);
  }
}
const kt = (t, e, r = {}) => fk(t, e, {
  ...r,
  realm: new pk()
});
class Dh extends wI {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return vo(this.filterByFormat(e));
  }
}
const kn = new Dh("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
let LO = class extends y.StringElement {
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
}, qO = class extends y.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}, VO = class extends y.ArrayElement {
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
    if (lt(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
};
const hk = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", dk = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, mk = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, yk = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof y.ArrayElement) && e.classes.includes(t), gr = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, X = (t) => t({
  hasMethod: hk,
  hasBasicElementProps: dk,
  primitiveEq: mk,
  isElementType: gr,
  hasClass: yk
}), Ot = X(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.Element || t(r) && e(void 0, r)), ut = X(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.StringElement || t(r) && e("string", r)), Lh = X(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NumberElement || t(r) && e("number", r)), qh = X(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NullElement || t(r) && e("null", r)), Fo = X(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.BooleanElement || t(r) && e("boolean", r)), Be = X(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Zr = X(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ArrayElement && !(n instanceof y.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), Vh = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.MemberElement || t(n) && e("member", n) && r(void 0, n)), BO = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.LinkElement || t(n) && e("link", n) && r(void 0, n)), UO = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.RefElement || t(n) && e("ref", n) && r(void 0, n)), gk = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof LO || t(n) && e("annotation", n) && r("array", n)), vk = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof qO || t(n) && e("comment", n) && r("string", n)), bk = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof VO || t(n) && e("parseResult", n) && r("array", n)), Ek = (t) => gr("object", t) || gr("array", t) || gr("boolean", t) || gr("number", t) || gr("string", t) || gr("null", t) || gr("member", t), Do = (t) => Ot(t) ? Number.isInteger(t.startPositionRow) && Number.isInteger(t.startPositionColumn) && Number.isInteger(t.startIndex) && Number.isInteger(t.endPositionRow) && Number.isInteger(t.endPositionColumn) && Number.isInteger(t.endIndex) : !1, Sk = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Zr(r) ? tt(Xe(r.toValue()), t) : !1;
}, JO = (t, e) => t.length === 0 ? !0 : tt(Xe(e.classes.toValue()), t), xk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Do,
  includesClasses: JO,
  includesSymbols: Sk,
  isAnnotationElement: gk,
  isArrayElement: Zr,
  isBooleanElement: Fo,
  isCommentElement: vk,
  isElement: Ot,
  isLinkElement: BO,
  isMemberElement: Vh,
  isNullElement: qh,
  isNumberElement: Lh,
  isObjectElement: Be,
  isParseResultElement: bk,
  isPrimitiveElement: Ek,
  isRefElement: UO,
  isStringElement: ut
}, Symbol.toStringTag, { value: "Module" }));
let HO = class extends y.Namespace {
  constructor() {
    super(), this.register("annotation", LO), this.register("comment", qO), this.register("parseResult", VO);
  }
};
const Ok = new HO(), wk = (t) => {
  const e = new HO();
  return fe(t) && e.use(t), e;
}, Ak = () => ({
  predicates: {
    ...xk
  },
  namespace: Ok
});
let jk = class extends Cr {
  constructor(e, r, n) {
    if (super(e, r, n), this.name = this.constructor.name, typeof r == "string" && (this.message = r), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(r).stack, n != null && typeof n == "object" && Object.hasOwn(n, "cause") && !("cause" in this)) {
      const {
        cause: s
      } = n;
      this.cause = s, s instanceof Error && "stack" in s && (this.stack = `${this.stack}
CAUSE: ${s.stack}`);
    }
  }
}, GO = class extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(jk, e);
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
}, Pk = class extends GO {
  constructor(e, r) {
    if (super(e, r), r != null && typeof r == "object") {
      const {
        cause: n,
        ...s
      } = r;
      Object.assign(this, s);
    }
  }
}, Je = class extends GO {
}, KO = class extends Pk {
  value;
  constructor(e, r) {
    super(e, r), typeof r < "u" && (this.value = r.value);
  }
}, $k = class extends KO {
}, Rk = class extends KO {
};
const zO = (t, e) => {
  const r = At(t, e);
  return cn((n) => {
    if (fe(n) && qt("$ref", n) && un(_e, "$ref", n)) {
      const s = ue(["$ref"], n), i = Nr("#/", s);
      return ue(i.split("/"), r);
    }
    return fe(n) ? zO(n, r) : n;
  }, t);
}, WO = (t, e) => (t.startPositionRow = e?.startPositionRow, t.startPositionColumn = e?.startPositionColumn, t.startIndex = e?.startIndex, t.endPositionRow = e?.endPositionRow, t.endPositionColumn = e?.endPositionColumn, t.endIndex = e?.endIndex, t), me = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof y.KeyValuePair) {
    const {
      key: s,
      value: i
    } = t, o = Ot(s) ? me(s, n) : s, a = Ot(i) ? me(i, n) : i, c = new y.KeyValuePair(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof y.ObjectSlice) {
    const s = (a) => me(a, n), i = [...t].map(s), o = new y.ObjectSlice(i);
    return r.set(t, o), o;
  }
  if (t instanceof y.ArraySlice) {
    const s = (a) => me(a, n), i = [...t].map(s), o = new y.ArraySlice(i);
    return r.set(t, o), o;
  }
  if (Ot(t)) {
    const s = Wr(t);
    if (r.set(t, s), t.content)
      if (Ot(t.content))
        s.content = me(t.content, n);
      else if (t.content instanceof y.KeyValuePair)
        s.content = me(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => me(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new $k("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
me.safe = (t) => {
  try {
    return me(t);
  } catch {
    return t;
  }
};
const YO = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new y.KeyValuePair(e, r);
}, Tk = (t) => {
  const e = [...t];
  return new y.ArraySlice(e);
}, _k = (t) => {
  const e = [...t];
  return new y.ObjectSlice(e);
}, XO = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, Do(t) && WO(e, t), t.meta.length > 0 && (e._meta = me(t.meta)), t.attributes.length > 0 && (e._attributes = me(t.attributes)), Ot(t.content)) {
    const r = t.content;
    e.content = XO(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof y.KeyValuePair ? e.content = YO(t.content) : e.content = t.content;
  return e;
}, Wr = (t) => {
  if (t instanceof y.KeyValuePair)
    return YO(t);
  if (t instanceof y.ObjectSlice)
    return _k(t);
  if (t instanceof y.ArraySlice)
    return Tk(t);
  if (Ot(t))
    return XO(t);
  throw new Rk("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
Wr.safe = (t) => {
  try {
    return Wr(t);
  } catch {
    return t;
  }
};
const Is = (t) => Be(t) ? "ObjectElement" : Zr(t) ? "ArrayElement" : Vh(t) ? "MemberElement" : ut(t) ? "StringElement" : Fo(t) ? "BooleanElement" : Lh(t) ? "NumberElement" : qh(t) ? "NullElement" : BO(t) ? "LinkElement" : UO(t) ? "RefElement" : void 0, QO = (t) => Ot(t) ? Wr(t) : dr(t), ZO = be(Is, _e), Lo = {
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
  ParseResultElement: ["content"]
}, hn = (t, e, {
  keyMap: r = Lo,
  ...n
} = {}) => rt(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Is,
  nodePredicate: ZO,
  nodeCloneFn: QO,
  ...n
});
hn[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Lo,
  ...n
} = {}) => rt[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Is,
  nodePredicate: ZO,
  nodeCloneFn: QO,
  ...n
});
const ew = {
  toolboxCreator: Ak,
  visitorOptions: {
    nodeTypeGetter: Is,
    exposeEdits: !0
  }
}, tw = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(ew, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Qe(a.map(Ke({}, "visitor")), {
    ...i
  });
  a.forEach(pe(["pre"], []));
  const u = hn(t, c, i);
  return a.forEach(pe(["post"], [])), u;
}, Ck = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(ew, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = Qe[Symbol.for("nodejs.util.promisify.custom")], u = hn[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(Ke({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(pe(["pre"], [])));
  const l = await u(t, f, i);
  return await Promise.allSettled(a.map(pe(["post"], []))), l;
};
tw[Symbol.for("nodejs.util.promisify.custom")] = Ck;
const rw = (t) => typeof t?.type == "string" ? t.type : Is(t), nw = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...Lo
}, sw = (t, e, {
  keyMap: r = nw,
  ...n
} = {}) => hn(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: rw,
  nodePredicate: yt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
sw[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = nw,
  ...r
} = {}) => hn[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: rw,
  nodePredicate: yt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
let Ik = class {
  type = "EphemeralArray";
  content = [];
  reference = void 0;
  constructor(e) {
    this.content = e, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}, Mk = class {
  type = "EphemeralObject";
  content = [];
  reference = void 0;
  constructor(e) {
    this.content = e, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}, kk = class {
  ObjectElement = {
    enter: (e) => {
      if (this.references.has(e))
        return this.references.get(e).toReference();
      const r = new Mk(e.content);
      return this.references.set(e, r), r;
    }
  };
  EphemeralObject = {
    leave: (e) => e.toObject()
  };
  MemberElement = {
    enter: (e) => [e.key, e.value]
  };
  ArrayElement = {
    enter: (e) => {
      if (this.references.has(e))
        return this.references.get(e).toReference();
      const r = new Ik(e.content);
      return this.references.set(e, r), r;
    }
  };
  EphemeralArray = {
    leave: (e) => e.toArray()
  };
  references = /* @__PURE__ */ new WeakMap();
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
    return ut(e.href) ? e.href.toValue() : "";
  }
};
const xe = (t) => Ot(t) ? ut(t) || Lh(t) || Fo(t) || qh(t) ? t.toValue() : sw(t, new kk()) : t, Yi = (t) => {
  const e = t.meta.length > 0 ? me(t.meta) : void 0, r = t.attributes.length > 0 ? me(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, Xi = (t, e) => e.clone && e.isMergeableElement(t) ? en(Yi(t), t, e) : t, Nk = (t, e) => {
  if (typeof e.customMerge != "function")
    return en;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : en;
}, Fk = (t) => typeof t.customMetaMerge != "function" ? (e) => me(e) : t.customMetaMerge, Dk = (t) => typeof t.customAttributesMerge != "function" ? (e) => me(e) : t.customAttributesMerge, Lk = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => Xi(n, r)), qk = (t, e, r) => {
  const n = Be(t) ? Yi(t) : Yi(e);
  return Be(t) && t.forEach((s, i, o) => {
    const a = Wr(o);
    a.value = Xi(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = xe(i);
    let c;
    if (Be(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const u = t.get(a);
      c = Wr(o), c.value = Nk(i, r)(u, s, r);
    } else
      c = Wr(o), c.value = Xi(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, gi = {
  clone: !0,
  isMergeableElement: (t) => Be(t) || Zr(t),
  arrayElementMerge: Lk,
  objectElementMerge: qk,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
}, en = (t, e, r) => {
  var n, s, i;
  const o = {
    ...gi,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : gi.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : gi.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : gi.objectElementMerge;
  const a = Zr(e), c = Zr(t);
  if (!(a === c))
    return Xi(e, o);
  const f = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return f.meta = Fk(o)(t.meta, e.meta), f.attributes = Dk(o)(t.attributes, e.attributes), f;
};
en.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new y.ObjectElement() : t.reduce((r, n) => en(r, n, e), Yi(t[0]));
};
let Ms = class extends y.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "callback";
  }
}, ks = class extends y.ObjectElement {
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
}, Ns = class extends y.ObjectElement {
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
}, Fs = class extends y.ObjectElement {
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
}, qo = class extends y.ObjectElement {
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
}, Ds = class extends y.ObjectElement {
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
}, Ls = class extends y.ObjectElement {
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
}, Gn = class extends y.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "header";
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new y.BooleanElement(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new y.BooleanElement(!1);
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
Object.defineProperty(Gn.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let qs = class extends y.ObjectElement {
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
}, Vs = class extends y.ObjectElement {
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
}, Bs = class extends y.ObjectElement {
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
    if (ut(this.operationRef)) {
      var e;
      return (e = this.operationRef) === null || e === void 0 ? void 0 : e.meta.get("operation");
    }
    if (ut(this.operationId)) {
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
}, Us = class extends y.ObjectElement {
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
}, Vo = class extends y.ObjectElement {
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
}, Bo = class extends y.ObjectElement {
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
}, Js = class extends y.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
class Uo extends y.ObjectElement {
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
let Hs = class extends y.ObjectElement {
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
    return this.hasKey("deprecated") ? this.get("deprecated") : new y.BooleanElement(!1);
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
}, Kn = class extends y.ObjectElement {
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
    return this.hasKey("required") ? this.get("required") : new y.BooleanElement(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new y.BooleanElement(!1);
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
Object.defineProperty(Kn.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Gs = class extends y.ObjectElement {
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
}, Ks = class extends y.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "paths";
  }
}, zs = class extends y.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "reference", this.classes.push("openapi-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}, Ws = class extends y.ObjectElement {
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
    return this.hasKey("required") ? this.get("required") : new y.BooleanElement(!1);
  }
  set required(e) {
    this.set("required", e);
  }
}, Ys = class extends y.ObjectElement {
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
}, Xs = class extends y.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "responses";
  }
  get default() {
    return this.get("default");
  }
  set default(e) {
    this.set("default", e);
  }
}, iw = class extends y.StringElement {
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
}, ow = class extends y.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}, aw = class extends y.ArrayElement {
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
    if (lt(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
};
const Vk = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", Bk = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, Uk = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, Jk = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof y.ArrayElement) && e.classes.includes(t), vr = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, Ue = (t) => t({
  hasMethod: Vk,
  hasBasicElementProps: Bk,
  primitiveEq: Uk,
  isElementType: vr,
  hasClass: Jk
}), Nt = Ue(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.Element || t(r) && e(void 0, r)), cr = Ue(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.StringElement || t(r) && e("string", r)), Bh = Ue(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NumberElement || t(r) && e("number", r)), Uh = Ue(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NullElement || t(r) && e("null", r)), Jh = Ue(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.BooleanElement || t(r) && e("boolean", r)), Yr = Ue(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Nn = Ue(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ArrayElement && !(n instanceof y.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), cw = Ue(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.MemberElement || t(n) && e("member", n) && r(void 0, n)), uw = Ue(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.LinkElement || t(n) && e("link", n) && r(void 0, n)), lw = Ue(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.RefElement || t(n) && e("ref", n) && r(void 0, n)), Hk = Ue(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof iw || t(n) && e("annotation", n) && r("array", n)), Gk = Ue(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ow || t(n) && e("comment", n) && r("string", n)), Kk = Ue(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof aw || t(n) && e("parseResult", n) && r("array", n)), zk = (t) => vr("object", t) || vr("array", t) || vr("boolean", t) || vr("number", t) || vr("string", t) || vr("null", t) || vr("member", t), Hh = (t) => Nt(t) ? Number.isInteger(t.startPositionRow) && Number.isInteger(t.startPositionColumn) && Number.isInteger(t.startIndex) && Number.isInteger(t.endPositionRow) && Number.isInteger(t.endPositionColumn) && Number.isInteger(t.endIndex) : !1, Wk = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Nn(r) ? tt(Xe(r.toValue()), t) : !1;
}, Yk = (t, e) => t.length === 0 ? !0 : tt(Xe(e.classes.toValue()), t), Xk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Hh,
  includesClasses: Yk,
  includesSymbols: Wk,
  isAnnotationElement: Hk,
  isArrayElement: Nn,
  isBooleanElement: Jh,
  isCommentElement: Gk,
  isElement: Nt,
  isLinkElement: uw,
  isMemberElement: cw,
  isNullElement: Uh,
  isNumberElement: Bh,
  isObjectElement: Yr,
  isParseResultElement: Kk,
  isPrimitiveElement: zk,
  isRefElement: lw,
  isStringElement: cr
}, Symbol.toStringTag, { value: "Module" }));
let fw = class extends y.Namespace {
  constructor() {
    super(), this.register("annotation", iw), this.register("comment", ow), this.register("parseResult", aw);
  }
};
const Qk = new fw(), Zk = (t) => {
  const e = new fw();
  return fe(t) && e.use(t), e;
}, eN = () => ({
  predicates: {
    ...Xk
  },
  namespace: Qk
});
let tN = class extends Cr {
  constructor(e, r, n) {
    if (super(e, r, n), this.name = this.constructor.name, typeof r == "string" && (this.message = r), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(r).stack, n != null && typeof n == "object" && Object.hasOwn(n, "cause") && !("cause" in this)) {
      const {
        cause: s
      } = n;
      this.cause = s, s instanceof Error && "stack" in s && (this.stack = `${this.stack}
CAUSE: ${s.stack}`);
    }
  }
}, rN = class extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(tN, e);
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
}, nN = class extends rN {
  constructor(e, r) {
    if (super(e, r), r != null && typeof r == "object") {
      const {
        cause: n,
        ...s
      } = r;
      Object.assign(this, s);
    }
  }
}, pw = class extends nN {
  value;
  constructor(e, r) {
    super(e, r), typeof r < "u" && (this.value = r.value);
  }
}, sN = class extends pw {
}, iN = class extends pw {
};
const hw = (t, e) => {
  const r = At(t, e);
  return cn((n) => {
    if (fe(n) && qt("$ref", n) && un(_e, "$ref", n)) {
      const s = ue(["$ref"], n), i = Nr("#/", s);
      return ue(i.split("/"), r);
    }
    return fe(n) ? hw(n, r) : n;
  }, t);
}, dw = (t, e) => (t.startPositionRow = e?.startPositionRow, t.startPositionColumn = e?.startPositionColumn, t.startIndex = e?.startIndex, t.endPositionRow = e?.endPositionRow, t.endPositionColumn = e?.endPositionColumn, t.endIndex = e?.endIndex, t), Se = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof y.KeyValuePair) {
    const {
      key: s,
      value: i
    } = t, o = Nt(s) ? Se(s, n) : s, a = Nt(i) ? Se(i, n) : i, c = new y.KeyValuePair(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof y.ObjectSlice) {
    const s = (a) => Se(a, n), i = [...t].map(s), o = new y.ObjectSlice(i);
    return r.set(t, o), o;
  }
  if (t instanceof y.ArraySlice) {
    const s = (a) => Se(a, n), i = [...t].map(s), o = new y.ArraySlice(i);
    return r.set(t, o), o;
  }
  if (Nt(t)) {
    const s = Xr(t);
    if (r.set(t, s), t.content)
      if (Nt(t.content))
        s.content = Se(t.content, n);
      else if (t.content instanceof y.KeyValuePair)
        s.content = Se(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => Se(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new sN("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
Se.safe = (t) => {
  try {
    return Se(t);
  } catch {
    return t;
  }
};
const mw = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new y.KeyValuePair(e, r);
}, oN = (t) => {
  const e = [...t];
  return new y.ArraySlice(e);
}, aN = (t) => {
  const e = [...t];
  return new y.ObjectSlice(e);
}, yw = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, Hh(t) && dw(e, t), t.meta.length > 0 && (e._meta = Se(t.meta)), t.attributes.length > 0 && (e._attributes = Se(t.attributes)), Nt(t.content)) {
    const r = t.content;
    e.content = yw(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof y.KeyValuePair ? e.content = mw(t.content) : e.content = t.content;
  return e;
}, Xr = (t) => {
  if (t instanceof y.KeyValuePair)
    return mw(t);
  if (t instanceof y.ObjectSlice)
    return aN(t);
  if (t instanceof y.ArraySlice)
    return oN(t);
  if (Nt(t))
    return yw(t);
  throw new iN("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
Xr.safe = (t) => {
  try {
    return Xr(t);
  } catch {
    return t;
  }
};
const Qs = (t) => Yr(t) ? "ObjectElement" : Nn(t) ? "ArrayElement" : cw(t) ? "MemberElement" : cr(t) ? "StringElement" : Jh(t) ? "BooleanElement" : Bh(t) ? "NumberElement" : Uh(t) ? "NullElement" : uw(t) ? "LinkElement" : lw(t) ? "RefElement" : void 0, gw = (t) => Nt(t) ? Xr(t) : dr(t), vw = be(Qs, _e), Jo = {
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
  ParseResultElement: ["content"]
}, dn = (t, e, {
  keyMap: r = Jo,
  ...n
} = {}) => rt(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Qs,
  nodePredicate: vw,
  nodeCloneFn: gw,
  ...n
});
dn[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Jo,
  ...n
} = {}) => rt[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Qs,
  nodePredicate: vw,
  nodeCloneFn: gw,
  ...n
});
const bw = {
  toolboxCreator: eN,
  visitorOptions: {
    nodeTypeGetter: Qs,
    exposeEdits: !0
  }
}, Ew = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(bw, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Qe(a.map(Ke({}, "visitor")), {
    ...i
  });
  a.forEach(pe(["pre"], []));
  const u = dn(t, c, i);
  return a.forEach(pe(["post"], [])), u;
}, cN = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(bw, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = Qe[Symbol.for("nodejs.util.promisify.custom")], u = dn[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(Ke({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(pe(["pre"], [])));
  const l = await u(t, f, i);
  return await Promise.allSettled(a.map(pe(["post"], []))), l;
};
Ew[Symbol.for("nodejs.util.promisify.custom")] = cN;
const Sw = (t) => typeof t?.type == "string" ? t.type : Qs(t), xw = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...Jo
}, Ow = (t, e, {
  keyMap: r = xw,
  ...n
} = {}) => dn(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Sw,
  nodePredicate: yt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
Ow[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = xw,
  ...r
} = {}) => dn[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: Sw,
  nodePredicate: yt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class uN {
  type = "EphemeralArray";
  content = [];
  reference = void 0;
  constructor(e) {
    this.content = e, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}
class lN {
  type = "EphemeralObject";
  content = [];
  reference = void 0;
  constructor(e) {
    this.content = e, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
let fN = class {
  ObjectElement = {
    enter: (e) => {
      if (this.references.has(e))
        return this.references.get(e).toReference();
      const r = new lN(e.content);
      return this.references.set(e, r), r;
    }
  };
  EphemeralObject = {
    leave: (e) => e.toObject()
  };
  MemberElement = {
    enter: (e) => [e.key, e.value]
  };
  ArrayElement = {
    enter: (e) => {
      if (this.references.has(e))
        return this.references.get(e).toReference();
      const r = new uN(e.content);
      return this.references.set(e, r), r;
    }
  };
  EphemeralArray = {
    leave: (e) => e.toArray()
  };
  references = /* @__PURE__ */ new WeakMap();
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
    return cr(e.href) ? e.href.toValue() : "";
  }
};
const Ft = (t) => Nt(t) ? cr(t) || Bh(t) || Jh(t) || Uh(t) ? t.toValue() : Ow(t, new fN()) : t, Qi = (t) => {
  const e = t.meta.length > 0 ? Se(t.meta) : void 0, r = t.attributes.length > 0 ? Se(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, Zi = (t, e) => e.clone && e.isMergeableElement(t) ? tn(Qi(t), t, e) : t, pN = (t, e) => {
  if (typeof e.customMerge != "function")
    return tn;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : tn;
}, hN = (t) => typeof t.customMetaMerge != "function" ? (e) => Se(e) : t.customMetaMerge, dN = (t) => typeof t.customAttributesMerge != "function" ? (e) => Se(e) : t.customAttributesMerge, mN = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => Zi(n, r)), yN = (t, e, r) => {
  const n = Yr(t) ? Qi(t) : Qi(e);
  return Yr(t) && t.forEach((s, i, o) => {
    const a = Xr(o);
    a.value = Zi(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = Ft(i);
    let c;
    if (Yr(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const u = t.get(a);
      c = Xr(o), c.value = pN(i, r)(u, s, r);
    } else
      c = Xr(o), c.value = Zi(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, vi = {
  clone: !0,
  isMergeableElement: (t) => Yr(t) || Nn(t),
  arrayElementMerge: mN,
  objectElementMerge: yN,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
}, tn = (t, e, r) => {
  var n, s, i;
  const o = {
    ...vi,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : vi.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : vi.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : vi.objectElementMerge;
  const a = Nn(e), c = Nn(t);
  if (!(a === c))
    return Zi(e, o);
  const f = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return f.meta = hN(o)(t.meta, e.meta), f.attributes = dN(o)(t.attributes, e.attributes), f;
};
tn.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new y.ObjectElement() : t.reduce((r, n) => tn(r, n, e), Qi(t[0]));
};
let zn = class extends y.ObjectElement {
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
class Wn extends y.ObjectElement {
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
class Zs extends y.ObjectElement {
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
let ei = class extends y.ObjectElement {
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
const gN = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", zn), e.register("jSONReference", Wn), e.register("media", Zs), e.register("linkDescription", ei), e;
  }
}, ti = (t) => {
  if (Nt(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, vN = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Jo
};
let ww = class {
  element;
  constructor(e) {
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = tn(r.meta, e.meta)), Hh(e) && dw(r, e), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = tn(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}, ee = class extends ww {
  enter(e) {
    return this.element = Se(e), Z;
  }
};
const Aw = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, ms = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : ms(r, [...e, r]);
}, bN = (...t) => {
  if (t.length === 0)
    return;
  let e;
  const r = t.map((n) => ms(n));
  for (; r.every((n) => n.length > 0); ) {
    const n = r.map((i) => i.pop()), s = n[0];
    if (n.every((i) => i === s))
      e = s;
    else
      break;
  }
  return e;
}, eE = (t, e, r = []) => {
  var n;
  const s = (n = bN(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = ms(s);
  for (let a of t) {
    let c = ms(a);
    for (let u = c.length - 1; u >= 0; u--) {
      let f = c[u];
      o.indexOf(f) === -1 && (Aw(i, f, ["constructor", ...r]), o.push(f));
    }
  }
  return i.constructor = e, i;
}, xp = (t) => t.filter((e, r) => t.indexOf(e) == r), jw = /* @__PURE__ */ new WeakMap(), EN = (t) => jw.get(t), SN = (t, e) => jw.set(t, e), tE = (t, e) => {
  var r, n;
  const s = xp([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = xp([...(r = t?.[o]) !== null && r !== void 0 ? r : [], ...(n = e?.[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, rE = (t, e) => {
  var r, n, s, i;
  return {
    property: tE((r = t?.property) !== null && r !== void 0 ? r : {}, (n = e?.property) !== null && n !== void 0 ? n : {}),
    method: tE((s = t?.method) !== null && s !== void 0 ? s : {}, (i = e?.method) !== null && i !== void 0 ? i : {})
  };
}, xN = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: xp([...(r = t?.class) !== null && r !== void 0 ? r : [], ...(n = e?.class) !== null && n !== void 0 ? n : []]),
    static: rE((s = t?.static) !== null && s !== void 0 ? s : {}, (i = e?.static) !== null && i !== void 0 ? i : {}),
    instance: rE((o = t?.instance) !== null && o !== void 0 ? o : {}, (a = e?.instance) !== null && a !== void 0 ? a : {})
  };
}, ON = /* @__PURE__ */ new Map(), wN = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = ms(s.prototype).map((u) => u.constructor), o = (e = EN(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((u) => !r.has(u));
      for (let u of c)
        n.add(u);
      r.add(s), n.delete(s);
    }
  return [...r];
}, AN = (...t) => {
  const e = wN(...t).map((r) => ON.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => xN(r, n));
};
function M(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      Aw(this, new c(...a));
  }
  i.prototype = eE(s, i), Object.setPrototypeOf(
    i,
    eE(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = AN(...t);
    for (let c of (e = a?.class) !== null && e !== void 0 ? e : []) {
      const u = c(o);
      u && (o = u);
    }
    nE((r = a?.static) !== null && r !== void 0 ? r : {}, o), nE((n = a?.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return SN(o, t), o;
}
const nE = (t, e) => {
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
let vt = class extends ww {
  specObj;
  passingOptionsNames = ["specObj", "parent"];
  constructor({
    specObj: e,
    ...r
  }) {
    super({
      ...r
    }), this.specObj = e;
  }
  retrievePassingOptions() {
    return dx(this.passingOptionsNames, this);
  }
  retrieveFixedFields(e) {
    const r = ue(["visitors", ...e, "fixedFields"], this.specObj);
    return typeof r == "object" && r !== null ? Object.keys(r) : [];
  }
  retrieveVisitor(e) {
    return bo(ln, ["visitors", ...e], this.specObj) ? ue(["visitors", ...e], this.specObj) : ue(["visitors", ...e, "$visitor"], this.specObj);
  }
  retrieveVisitorInstance(e, r = {}) {
    const n = this.retrievePassingOptions(), s = this.retrieveVisitor(e), i = {
      ...n,
      ...r
    };
    return new s(i);
  }
  toRefractedElement(e, r, n = {}) {
    const s = this.retrieveVisitorInstance(e, n);
    return s instanceof ee && s?.constructor === ee ? Se(r) : (dn(r, s, n), s.element);
  }
}, rn = class extends vt {
  specPath;
  ignoredFields;
  constructor({
    specPath: e,
    ignoredFields: r,
    ...n
  }) {
    super({
      ...n
    }), this.specPath = e, this.ignoredFields = r || [];
  }
  ObjectElement(e) {
    const r = this.specPath(e), n = this.retrieveFixedFields(r);
    return e.forEach((s, i, o) => {
      if (cr(i) && n.includes(Ft(i)) && !this.ignoredFields.includes(Ft(i))) {
        const a = this.toRefractedElement([...r, "fixedFields", Ft(i)], s), c = new y.MemberElement(Se(i), a);
        this.copyMetaAndAttributes(o, c), c.classes.push("fixed-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(Ft(i)) || this.element.content.push(Se(o));
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
class Pe {
  parent;
  constructor({
    parent: e
  }) {
    this.parent = e;
  }
}
const Pw = Ue(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zn || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), Gh = Ue(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wn || t(n) && e("JSONReference", n) && r("object", n)), $w = Ue(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zs || t(n) && e("media", n) && r("object", n)), jN = Ue(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ei || t(n) && e("linkDescription", n) && r("object", n)), PN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Gh,
  isJSONSchemaElement: Pw,
  isLinkDescriptionElement: jN,
  isMediaElement: $w
}, Symbol.toStringTag, { value: "Module" }));
let Rw = class extends M(rn, Pe, ee) {
  constructor(e) {
    super(e), this.element = new zn(), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-04/schema#";
  }
  ObjectElement(e) {
    return this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element, rn.prototype.ObjectElement.call(this, e);
  }
  handleDialectIdentifier(e) {
    if (lt(this.parent) && !cr(e.get("$schema")))
      this.element.setMetaProperty("inheritedDialectIdentifier", this.defaultDialectIdentifier);
    else if (Pw(this.parent) && !cr(e.get("$schema"))) {
      const r = At(Ft(this.parent.meta.get("inheritedDialectIdentifier")), Ft(this.parent.$schema));
      this.element.setMetaProperty("inheritedDialectIdentifier", r);
    }
  }
  handleSchemaIdentifier(e, r = "id") {
    const n = this.parent !== void 0 ? Se(this.parent.getMetaProperty("ancestorsSchemaIdentifiers", [])) : new y.ArrayElement(), s = Ft(e.get(r));
    So(s) && n.push(s), this.element.setMetaProperty("ancestorsSchemaIdentifiers", n);
  }
};
const Kt = (t) => Yr(t) && t.hasKey("$ref");
let Tw = class extends M(vt, Pe, ee) {
  ObjectElement(e) {
    const r = Kt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), Z;
  }
  ArrayElement(e) {
    return this.element = new y.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = Kt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
class $N extends ee {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
let RN = class extends vt {
  specPath;
  ignoredFields;
  fieldPatternPredicate = rh;
  constructor({
    specPath: e,
    ignoredFields: r,
    fieldPatternPredicate: n,
    ...s
  }) {
    super({
      ...s
    }), this.specPath = e, this.ignoredFields = r || [], typeof n == "function" && (this.fieldPatternPredicate = n);
  }
  ObjectElement(e) {
    return e.forEach((r, n, s) => {
      if (!this.ignoredFields.includes(Ft(n)) && this.fieldPatternPredicate(Ft(n))) {
        const i = this.specPath(r), o = this.toRefractedElement(i, r), a = new y.MemberElement(Se(n), o);
        this.copyMetaAndAttributes(s, a), a.classes.push("patterned-field"), this.element.content.push(a);
      } else this.ignoredFields.includes(Ft(n)) || this.element.content.push(Se(s));
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, Fr = class extends RN {
  constructor(e) {
    super(e), this.fieldPatternPredicate = So;
  }
}, TN = class extends M(Fr, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => Kt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}, _N = class extends M(Fr, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => Kt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
class CN extends M(Fr, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ObjectElement(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => Kt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
class IN extends ee {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
let MN = class extends ee {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}, kN = class extends M(vt, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ArrayElement(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = Kt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, NN = class extends M(vt, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ArrayElement(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = Kt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, FN = class extends M(vt, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ArrayElement(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = Kt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
class DN extends M(Fr, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ObjectElement(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => Kt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let LN = class extends M(vt, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ArrayElement(), this.element.classes.push("json-schema-links");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "LinkDescription"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
class qN extends M(rn, ee) {
  constructor(e) {
    super(e), this.element = new Wn(), this.specPath = J(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = rn.prototype.ObjectElement.call(this, e);
    return cr(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
let VN = class extends ee {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, BN = class extends vt {
  alternator;
  constructor({
    alternator: e,
    ...r
  }) {
    super({
      ...r
    }), this.alternator = e;
  }
  enter(e) {
    const r = this.alternator.map(({
      predicate: s,
      specPath: i
    }) => fh(s, J(i), Eo)), n = wx(r)(e);
    return this.element = this.toRefractedElement(n, e), Z;
  }
}, bn = class extends BN {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: Kt,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: yt,
      specPath: ["document", "objects", "JSONSchema"]
    }];
  }
};
class UN extends M(rn, ee) {
  constructor(e) {
    super(e), this.element = new Zs(), this.specPath = J(["document", "objects", "Media"]);
  }
}
let _w = class extends M(rn, ee) {
  constructor(e) {
    super(e), this.element = new ei(), this.specPath = J(["document", "objects", "LinkDescription"]);
  }
};
const Le = {
  visitors: {
    value: ee,
    JSONSchemaOrJSONReferenceVisitor: bn,
    document: {
      objects: {
        JSONSchema: {
          $visitor: Rw,
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
            additionalItems: bn,
            items: Tw,
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
            required: $N,
            properties: TN,
            additionalProperties: bn,
            patternProperties: _N,
            dependencies: CN,
            // validation keywords for any instance type
            enum: IN,
            type: MN,
            allOf: kN,
            anyOf: NN,
            oneOf: FN,
            not: bn,
            definitions: DN,
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
            links: LN,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: qN,
          fixedFields: {
            $ref: VN
          }
        },
        Media: {
          $visitor: UN,
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
          $visitor: _w,
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
            targetSchema: bn,
            mediaType: {
              $ref: "#/visitors/value"
            },
            method: {
              $ref: "#/visitors/value"
            },
            encType: {
              $ref: "#/visitors/value"
            },
            schema: bn
          }
        }
      }
    }
  }
}, JN = () => {
  const t = Zk(gN);
  return {
    predicates: {
      ...PN,
      isStringElement: cr
    },
    namespace: t
  };
}, HN = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Le
} = {}) => {
  const s = y.refract(t), i = hw(n), o = ue(e, i), a = new o({
    specObj: i
  });
  return dn(s, a), Ew(a.element, r, {
    toolboxCreator: JN,
    visitorOptions: {
      keyMap: vN,
      nodeTypeGetter: ti
    }
  });
}, Ho = (t) => (e, r = {}) => HN(e, {
  specPath: t,
  ...r
});
zn.refract = Ho(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Wn.refract = Ho(["visitors", "document", "objects", "JSONReference", "$visitor"]);
Zs.refract = Ho(["visitors", "document", "objects", "Media", "$visitor"]);
ei.refract = Ho(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let Go = class extends zn {
  constructor(e, r, n) {
    super(e, r, n), this.element = "schema", this.classes.push("json-schema-draft-4");
  }
  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    throw new Je("idProp getter in Schema class is not not supported.");
  }
  set idProp(e) {
    throw new Je("idProp setter in Schema class is not not supported.");
  }
  get $schema() {
    throw new Je("$schema getter in Schema class is not not supported.");
  }
  set $schema(e) {
    throw new Je("$schema setter in Schema class is not not supported.");
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
    throw new Je("patternProperties getter in Schema class is not not supported.");
  }
  set patternProperties(e) {
    throw new Je("patternProperties setter in Schema class is not not supported.");
  }
  get dependencies() {
    throw new Je("dependencies getter in Schema class is not not supported.");
  }
  set dependencies(e) {
    throw new Je("dependencies setter in Schema class is not not supported.");
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
    throw new Je("definitions getter in Schema class is not not supported.");
  }
  set definitions(e) {
    throw new Je("definitions setter in Schema class is not not supported.");
  }
  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */
  get base() {
    throw new Je("base getter in Schema class is not not supported.");
  }
  set base(e) {
    throw new Je("base setter in Schema class is not not supported.");
  }
  get links() {
    throw new Je("links getter in Schema class is not not supported.");
  }
  set links(e) {
    throw new Je("links setter in Schema class is not not supported.");
  }
  get media() {
    throw new Je("media getter in Schema class is not not supported.");
  }
  set media(e) {
    throw new Je("media setter in Schema class is not not supported.");
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
}, ri = class extends y.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "securityRequirement";
  }
}, ni = class extends y.ObjectElement {
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
}, si = class extends y.ObjectElement {
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
}, ii = class extends y.ObjectElement {
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
}, Ko = class extends y.ObjectElement {
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
}, zo = class extends y.ObjectElement {
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
const GN = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Ms), e.register("components", ks), e.register("contact", Ns), e.register("discriminator", Fs), e.register("encoding", qo), e.register("example", Ds), e.register("externalDocumentation", Ls), e.register("header", Gn), e.register("info", qs), e.register("license", Vs), e.register("link", Bs), e.register("mediaType", Us), e.register("oAuthFlow", Vo), e.register("oAuthFlows", Bo), e.register("openapi", Js), e.register("openApi3_0", Uo), e.register("operation", Hs), e.register("parameter", Kn), e.register("pathItem", Gs), e.register("paths", Ks), e.register("reference", zs), e.register("requestBody", Ws), e.register("response", Ys), e.register("responses", Xs), e.register("schema", Go), e.register("securityRequirement", ri), e.register("securityScheme", ni), e.register("server", si), e.register("serverVariable", ii), e.register("tag", Ko), e.register("xml", zo), e;
  }
};
class Wo extends y.ArrayElement {
  static primaryClass = "servers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Wo.primaryClass);
  }
}
class Kh extends y.ArrayElement {
  static primaryClass = "security";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Kh.primaryClass);
  }
}
class zh extends y.ArrayElement {
  static primaryClass = "tags";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(zh.primaryClass);
  }
}
class Wh extends y.ObjectElement {
  static primaryClass = "server-variables";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Wh.primaryClass);
  }
}
class Yo extends y.ObjectElement {
  static primaryClass = "components-schemas";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Yo.primaryClass);
  }
}
class Yh extends y.ObjectElement {
  static primaryClass = "components-responses";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Yh.primaryClass);
  }
}
class Xh extends y.ObjectElement {
  static primaryClass = "components-parameters";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Xh.primaryClass), this.classes.push("parameters");
  }
}
class Qh extends y.ObjectElement {
  static primaryClass = "components-examples";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Qh.primaryClass), this.classes.push("examples");
  }
}
class Zh extends y.ObjectElement {
  static primaryClass = "components-request-bodies";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Zh.primaryClass);
  }
}
class ed extends y.ObjectElement {
  static primaryClass = "components-headers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ed.primaryClass);
  }
}
class td extends y.ObjectElement {
  static primaryClass = "components-security-schemes";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(td.primaryClass);
  }
}
class rd extends y.ObjectElement {
  static primaryClass = "components-links";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(rd.primaryClass);
  }
}
class nd extends y.ObjectElement {
  static primaryClass = "components-callbacks";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(nd.primaryClass);
  }
}
class sd extends y.ArrayElement {
  static primaryClass = "path-item-servers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(sd.primaryClass), this.classes.push("servers");
  }
}
class id extends y.ArrayElement {
  static primaryClass = "path-item-parameters";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(id.primaryClass), this.classes.push("parameters");
  }
}
class Xo extends y.ArrayElement {
  static primaryClass = "operation-parameters";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Xo.primaryClass), this.classes.push("parameters");
  }
}
class od extends y.ObjectElement {
  static primaryClass = "parameter-examples";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(od.primaryClass), this.classes.push("examples");
  }
}
class ad extends y.ObjectElement {
  static primaryClass = "parameter-content";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ad.primaryClass), this.classes.push("content");
  }
}
class cd extends y.ArrayElement {
  static primaryClass = "operation-tags";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(cd.primaryClass);
  }
}
class ud extends y.ObjectElement {
  static primaryClass = "operation-callbacks";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ud.primaryClass);
  }
}
class Qo extends y.ArrayElement {
  static primaryClass = "operation-security";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Qo.primaryClass), this.classes.push("security");
  }
}
class ld extends y.ArrayElement {
  static primaryClass = "operation-servers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ld.primaryClass), this.classes.push("servers");
  }
}
class fd extends y.ObjectElement {
  static primaryClass = "request-body-content";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(fd.primaryClass), this.classes.push("content");
  }
}
class pd extends y.ObjectElement {
  static primaryClass = "media-type-examples";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(pd.primaryClass), this.classes.push("examples");
  }
}
class hd extends y.ObjectElement {
  static primaryClass = "media-type-encoding";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(hd.primaryClass);
  }
}
class dd extends y.ObjectElement {
  static primaryClass = "encoding-headers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(dd.primaryClass);
  }
}
class md extends y.ObjectElement {
  static primaryClass = "response-headers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(md.primaryClass);
  }
}
class yd extends y.ObjectElement {
  static primaryClass = "response-content";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(yd.primaryClass), this.classes.push("content");
  }
}
class gd extends y.ObjectElement {
  static primaryClass = "response-links";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(gd.primaryClass);
  }
}
class vd extends y.ObjectElement {
  static primaryClass = "discriminator-mapping";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(vd.primaryClass);
  }
}
class bd extends y.ObjectElement {
  static primaryClass = "oauth-flow-scopes";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(bd.primaryClass);
  }
}
class Ed extends y.ObjectElement {
  static primaryClass = "link-parameters";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ed.primaryClass);
  }
}
class Sd extends y.ObjectElement {
  static primaryClass = "header-examples";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Sd.primaryClass), this.classes.push("examples");
  }
}
class xd extends y.ObjectElement {
  static primaryClass = "header-content";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(xd.primaryClass), this.classes.push("content");
  }
}
const KN = (t) => {
  if (Ot(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, zN = {
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
  ...Lo
};
class Cw {
  element;
  constructor(e = {}) {
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = en(r.meta, e.meta)), Do(e) && WO(r, e), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = en(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
class N extends Cw {
  enter(e) {
    return this.element = me(e), Z;
  }
}
class Ht extends Cw {
  specObj;
  passingOptionsNames = ["specObj", "openApiGenericElement", "openApiSemanticElement"];
  openApiGenericElement;
  openApiSemanticElement;
  constructor({
    specObj: e,
    passingOptionsNames: r,
    openApiGenericElement: n,
    openApiSemanticElement: s,
    ...i
  }) {
    super({
      ...i
    }), this.specObj = e, this.openApiGenericElement = n, this.openApiSemanticElement = s, Array.isArray(r) && (this.passingOptionsNames = r);
  }
  retrievePassingOptions() {
    return dx(this.passingOptionsNames, this);
  }
  retrieveFixedFields(e) {
    const r = ue(["visitors", ...e, "fixedFields"], this.specObj);
    return typeof r == "object" && r !== null ? Object.keys(r) : [];
  }
  retrieveVisitor(e) {
    return bo(ln, ["visitors", ...e], this.specObj) ? ue(["visitors", ...e], this.specObj) : ue(["visitors", ...e, "$visitor"], this.specObj);
  }
  retrieveVisitorInstance(e, r = {}) {
    const n = this.retrievePassingOptions(), s = this.retrieveVisitor(e), i = {
      ...n,
      ...r
    };
    return new s(i);
  }
  toRefractedElement(e, r, n = {}) {
    const s = this.retrieveVisitorInstance(e, n);
    return s instanceof N && s?.constructor === N ? me(r) : (hn(r, s, n), s.element);
  }
}
const ye = (t) => Be(t) && t.hasKey("$ref"), WN = Be, YN = Be, Iw = (t) => ut(t.key) && NT("x-", xe(t.key));
class W extends Ht {
  specPath;
  ignoredFields;
  canSupportSpecificationExtensions = !0;
  specificationExtensionPredicate = Iw;
  constructor({
    specPath: e,
    ignoredFields: r,
    canSupportSpecificationExtensions: n,
    specificationExtensionPredicate: s,
    ...i
  }) {
    super({
      ...i
    }), this.specPath = e, this.ignoredFields = r || [], typeof n == "boolean" && (this.canSupportSpecificationExtensions = n), typeof s == "function" && (this.specificationExtensionPredicate = s);
  }
  ObjectElement(e) {
    const r = this.specPath(e), n = this.retrieveFixedFields(r);
    return e.forEach((s, i, o) => {
      if (ut(i) && n.includes(xe(i)) && !this.ignoredFields.includes(xe(i))) {
        const a = this.toRefractedElement([...r, "fixedFields", xe(i)], s), c = new y.MemberElement(me(i), a);
        this.copyMetaAndAttributes(o, c), c.classes.push("fixed-field"), this.element.content.push(c);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(o)) {
        const a = this.toRefractedElement(["document", "extension"], o);
        this.element.content.push(a);
      } else this.ignoredFields.includes(xe(i)) || this.element.content.push(me(o));
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}
class XN extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Uo(), this.specPath = J(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return W.prototype.ObjectElement.call(this, e);
  }
}
class QN extends M(Ht, N) {
  StringElement(e) {
    const r = new Js(xe(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, Z;
  }
}
class ZN extends Ht {
  MemberElement(e) {
    return this.element = me(e), this.element.classes.push("specification-extension"), Z;
  }
}
let eF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new qs(), this.specPath = J(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
class tF extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
let rF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Ns(), this.specPath = J(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
}, nF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Vs(), this.specPath = J(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
}, sF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Bs(), this.specPath = J(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return (ut(this.element.operationId) || ut(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
class iF extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class oF extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class Fn extends Ht {
  specPath;
  ignoredFields;
  fieldPatternPredicate = rh;
  canSupportSpecificationExtensions = !1;
  specificationExtensionPredicate = Iw;
  constructor({
    specPath: e,
    ignoredFields: r,
    fieldPatternPredicate: n,
    canSupportSpecificationExtensions: s,
    specificationExtensionPredicate: i,
    ...o
  }) {
    super({
      ...o
    }), this.specPath = e, this.ignoredFields = r || [], typeof n == "function" && (this.fieldPatternPredicate = n), typeof s == "boolean" && (this.canSupportSpecificationExtensions = s), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(e) {
    return e.forEach((r, n, s) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(s)) {
        const i = this.toRefractedElement(["document", "extension"], s);
        this.element.content.push(i);
      } else if (!this.ignoredFields.includes(xe(n)) && this.fieldPatternPredicate(xe(n))) {
        const i = this.specPath(r), o = this.toRefractedElement(i, r), a = new y.MemberElement(me(n), o);
        this.copyMetaAndAttributes(s, a), a.classes.push("patterned-field"), this.element.content.push(a);
      } else this.ignoredFields.includes(xe(n)) || this.element.content.push(me(s));
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}
class K extends Fn {
  constructor(e) {
    super(e), this.fieldPatternPredicate = So;
  }
}
let aF = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new Ed(), this.specPath = J(["value"]);
  }
}, cF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new si(), this.specPath = J(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
class uF extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
let Od = class extends M(Ht, N) {
  constructor(e) {
    super(e), this.element = new Wo();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = WN(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, lF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new ii(), this.specPath = J(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
class fF extends M(K, N) {
  constructor(e) {
    super(e), this.element = new Wh(), this.specPath = J(["document", "objects", "ServerVariable"]);
  }
}
let pF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Us(), this.specPath = J(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
class zt extends Ht {
  alternator;
  constructor({
    alternator: e,
    ...r
  }) {
    super({
      ...r
    }), this.alternator = e || [];
  }
  enter(e) {
    const r = this.alternator.map(({
      predicate: s,
      specPath: i
    }) => fh(s, J(i), Eo)), n = wx(r)(e);
    return this.element = this.toRefractedElement(n, e), Z;
  }
}
const hF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ms || t(n) && e("callback", n) && r("object", n)), dF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ks || t(n) && e("components", n) && r("object", n)), mF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ns || t(n) && e("contact", n) && r("object", n)), yF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ds || t(n) && e("example", n) && r("object", n)), gF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ls || t(n) && e("externalDocumentation", n) && r("object", n)), Yn = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gn || t(n) && e("header", n) && r("object", n)), vF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof qs || t(n) && e("info", n) && r("object", n)), bF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Vs || t(n) && e("license", n) && r("object", n)), EF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bs || t(n) && e("link", n) && r("object", n)), SF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Js || t(n) && e("openapi", n) && r("string", n)), xF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Uo || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), Mw = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Hs || t(n) && e("operation", n) && r("object", n)), OF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Kn || t(n) && e("parameter", n) && r("object", n)), wd = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gs || t(n) && e("pathItem", n) && r("object", n)), wF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ks || t(n) && e("paths", n) && r("object", n)), de = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zs || t(n) && e("reference", n) && r("object", n)), AF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ws || t(n) && e("requestBody", n) && r("object", n)), Zo = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ys || t(n) && e("response", n) && r("object", n)), jF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xs || t(n) && e("responses", n) && r("object", n)), PF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Go || t(n) && e("schema", n) && r("object", n)), $F = (t) => Fo(t) && t.classes.includes("boolean-json-schema"), RF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ri || t(n) && e("securityRequirement", n) && r("object", n)), TF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ni || t(n) && e("securityScheme", n) && r("object", n)), _F = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof si || t(n) && e("server", n) && r("object", n)), CF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ii || t(n) && e("serverVariable", n) && r("object", n)), ea = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Us || t(n) && e("mediaType", n) && r("object", n)), kw = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Wo || t(s) && e("array", s) && r("array", s) && n("servers", s)), IF = X(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Fs || t(n) && e("discriminator", n) && r("object", n)), MF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: $F,
  isCallbackElement: hF,
  isComponentsElement: dF,
  isContactElement: mF,
  isDiscriminatorElement: IF,
  isExampleElement: yF,
  isExternalDocumentationElement: gF,
  isHeaderElement: Yn,
  isInfoElement: vF,
  isLicenseElement: bF,
  isLinkElement: EF,
  isMediaTypeElement: ea,
  isOpenApi3_0Element: xF,
  isOpenapiElement: SF,
  isOperationElement: Mw,
  isParameterElement: OF,
  isPathItemElement: wd,
  isPathsElement: wF,
  isReferenceElement: de,
  isRequestBodyElement: AF,
  isResponseElement: Zo,
  isResponsesElement: jF,
  isSchemaElement: PF,
  isSecurityRequirementElement: RF,
  isSecuritySchemeElement: TF,
  isServerElement: _F,
  isServerVariableElement: CF,
  isServersElement: kw
}, Symbol.toStringTag, { value: "Module" }));
let kF = class extends M(zt, N) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ye,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: yt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = zt.prototype.enter.call(this, e);
    return de(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, Ad = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new y.ObjectElement(), this.element.classes.push("examples"), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, NF = class extends Ad {
  constructor(e) {
    super(e), this.element = new pd();
  }
}, FF = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new hd(), this.specPath = J(["document", "objects", "Encoding"]);
  }
}, DF = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new ri(), this.specPath = J(["value"]);
  }
}, LF = class extends M(Ht, N) {
  constructor(e) {
    super(e), this.element = new Kh();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Be(r)) {
        const n = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(n);
      } else
        this.element.push(me(r));
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, qF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new ks(), this.specPath = J(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
}, VF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Ko(), this.specPath = J(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
}, BF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new zs(), this.specPath = J(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return ut(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}, UF = class extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, JF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Kn(), this.specPath = J(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return Be(this.element.contentProp) && this.element.contentProp.filter(ea).forEach((n, s) => {
      n.setMetaProperty("media-type", xe(s));
    }), r;
  }
}, HF = class extends M(zt, N) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ye,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: yt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = zt.prototype.enter.call(this, e);
    return de(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, GF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Gn(), this.specPath = J(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
}, KF = class extends M(zt, N) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ye,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: yt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = zt.prototype.enter.call(this, e);
    return de(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, zF = class extends Ad {
  constructor(e) {
    super(e), this.element = new Sd();
  }
}, ta = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new y.ObjectElement(), this.element.classes.push("content"), this.specPath = J(["document", "objects", "MediaType"]);
  }
}, WF = class extends ta {
  constructor(e) {
    super(e), this.element = new xd();
  }
}, YF = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Go(), this.specPath = J(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const sE = Le.visitors.document.objects.JSONSchema.fixedFields.allOf;
let XF = class extends sE {
  ArrayElement(e) {
    const r = sE.prototype.ArrayElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const iE = Le.visitors.document.objects.JSONSchema.fixedFields.anyOf;
let QF = class extends iE {
  ArrayElement(e) {
    const r = iE.prototype.ArrayElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const oE = Le.visitors.document.objects.JSONSchema.fixedFields.oneOf;
let ZF = class extends oE {
  ArrayElement(e) {
    const r = oE.prototype.ArrayElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const aE = Le.visitors.document.objects.JSONSchema.fixedFields.items;
let eD = class extends aE {
  ObjectElement(e) {
    const r = aE.prototype.ObjectElement.call(this, e);
    return de(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
};
const cE = Le.visitors.document.objects.JSONSchema.fixedFields.properties;
let tD = class extends cE {
  ObjectElement(e) {
    const r = cE.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const rD = Le.visitors.document.objects.JSONSchema.fixedFields.type;
class nD extends rD {
  ArrayElement(e) {
    return this.enter(e);
  }
}
const uE = Le.visitors.JSONSchemaOrJSONReferenceVisitor;
class lE extends uE {
  ObjectElement(e) {
    const r = uE.prototype.enter.call(this, e);
    return de(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
let sD = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Fs(), this.specPath = J(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
class iD extends M(K, N) {
  constructor(e) {
    super(e), this.element = new vd(), this.specPath = J(["value"]);
  }
}
let oD = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new zo(), this.specPath = J(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
}, aD = class extends Ad {
  constructor(e) {
    super(e), this.element = new od();
  }
}, cD = class extends ta {
  constructor(e) {
    super(e), this.element = new ad();
  }
}, uD = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new Yo(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
}, lD = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new Yh(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Zo).forEach((n, s) => {
      n.setMetaProperty("http-status-code", xe(s));
    }), r;
  }
}, fD = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new Xh(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
}, pD = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new Qh(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
class hD extends M(K, N) {
  constructor(e) {
    super(e), this.element = new Zh(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
let dD = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new ed(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.filter(Yn).forEach((n, s) => {
      n.setMetaProperty("header-name", xe(s));
    }), r;
  }
};
class mD extends M(K, N) {
  constructor(e) {
    super(e), this.element = new td(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
let yD = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new rd(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}, gD = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new nd(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}, vD = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Ds(), this.specPath = J(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return ut(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
class bD extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let ED = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Ls(), this.specPath = J(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
}, SD = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new qo(), this.specPath = J(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return Be(this.element.headers) && this.element.headers.filter(Yn).forEach((n, s) => {
      n.setMetaProperty("header-name", xe(s));
    }), r;
  }
}, xD = class extends M(K, N) {
  constructor(e) {
    super(e), this.element = new dd(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!Yn(n)) return;
      const i = xe(s);
      n.setMetaProperty("headerName", i);
    }), r;
  }
}, OD = class extends M(Fn, N) {
  constructor(e) {
    super(e), this.element = new Ks(), this.specPath = J(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = yt;
  }
  ObjectElement(e) {
    const r = Fn.prototype.ObjectElement.call(this, e);
    return this.element.filter(wd).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", me(s));
    }), r;
  }
}, wD = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Ws(), this.specPath = J(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return Be(this.element.contentProp) && this.element.contentProp.filter(ea).forEach((n, s) => {
      n.setMetaProperty("media-type", xe(s));
    }), r;
  }
}, AD = class extends ta {
  constructor(e) {
    super(e), this.element = new fd();
  }
}, jD = class extends M(Fn, N) {
  constructor(e) {
    super(e), this.element = new Ms(), this.specPath = J(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(wd).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", xe(s));
    }), r;
  }
}, PD = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Ys(), this.specPath = J(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return Be(this.element.contentProp) && this.element.contentProp.filter(ea).forEach((n, s) => {
      n.setMetaProperty("media-type", xe(s));
    }), Be(this.element.headers) && this.element.headers.filter(Yn).forEach((n, s) => {
      n.setMetaProperty("header-name", xe(s));
    }), r;
  }
};
class $D extends M(K, N) {
  constructor(e) {
    super(e), this.element = new md(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!Yn(n)) return;
      const i = xe(s);
      n.setMetaProperty("header-name", i);
    }), r;
  }
}
class RD extends ta {
  constructor(e) {
    super(e), this.element = new yd();
  }
}
class TD extends M(K, N) {
  constructor(e) {
    super(e), this.element = new gd(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
class fE extends M(W, Fn) {
  specPathFixedFields;
  specPathPatternedFields;
  constructor({
    specPathFixedFields: e,
    specPathPatternedFields: r,
    ...n
  }) {
    super({
      ...n
    }), this.specPathFixedFields = e, this.specPathPatternedFields = r;
  }
  ObjectElement(e) {
    const {
      specPath: r,
      ignoredFields: n
    } = this;
    try {
      this.specPath = this.specPathFixedFields;
      const s = this.retrieveFixedFields(this.specPath(e));
      this.ignoredFields = [...n, ...iT(e.keys(), s)], W.prototype.ObjectElement.call(this, e), this.specPath = this.specPathPatternedFields, this.ignoredFields = s, Fn.prototype.ObjectElement.call(this, e);
    } catch (s) {
      throw this.specPath = r, s;
    }
    return Z;
  }
}
let _D = class extends M(fE, N) {
  constructor(e) {
    super(e), this.element = new Xs(), this.specPathFixedFields = J(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${IT(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = fE.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Zo).forEach((n, s) => {
      const i = me(s);
      this.fieldPatternPredicate(xe(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
class CD extends M(zt, N) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ye,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: yt,
      specPath: ["document", "objects", "Response"]
    }];
  }
  ObjectElement(e) {
    const r = zt.prototype.enter.call(this, e);
    return de(this.element) ? this.element.setMetaProperty("referenced-element", "response") : Zo(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
let ID = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Hs(), this.specPath = J(["document", "objects", "Operation"]);
  }
}, MD = class extends N {
  constructor(e) {
    super(e), this.element = new cd();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(me(e)), Z;
  }
}, Nw = class extends M(Ht, N) {
  constructor(e) {
    super(e), this.element = new y.ArrayElement(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      de(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, kD = class extends Nw {
  constructor(e) {
    super(e), this.element = new Xo();
  }
}, ND = class extends zt {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ye,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: yt,
      specPath: ["document", "objects", "RequestBody"]
    }];
  }
  ObjectElement(e) {
    const r = zt.prototype.enter.call(this, e);
    return de(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
class FD extends M(K, N) {
  specPath;
  constructor(e) {
    super(e), this.element = new ud(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(de).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}
class DD extends M(Ht, N) {
  constructor(e) {
    super(e), this.element = new Qo();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = Be(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}
let LD = class extends Od {
  constructor(e) {
    super(e), this.element = new ld();
  }
}, qD = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Gs(), this.specPath = J(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(Mw).forEach((n, s) => {
      const i = me(s);
      i.content = xe(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), ut(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
class VD extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class BD extends Od {
  constructor(e) {
    super(e), this.element = new sd();
  }
}
class UD extends Nw {
  constructor(e) {
    super(e), this.element = new id();
  }
}
let JD = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new ni(), this.specPath = J(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
}, HD = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Bo(), this.specPath = J(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
}, GD = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Vo(), this.specPath = J(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
class KD extends M(K, N) {
  constructor(e) {
    super(e), this.element = new bd(), this.specPath = J(["value"]);
  }
}
class zD extends M(Ht, N) {
  constructor(e) {
    super(e), this.element = new zh();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = YN(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}
const {
  fixedFields: $e
} = Le.visitors.document.objects.JSONSchema, j = {
  visitors: {
    value: N,
    document: {
      objects: {
        OpenApi: {
          $visitor: XN,
          fixedFields: {
            openapi: QN,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: Od,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: LF,
            tags: zD,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: eF,
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
            version: tF
          }
        },
        Contact: {
          $visitor: rF,
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
          $visitor: nF,
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
          $visitor: cF,
          fixedFields: {
            url: uF,
            description: {
              $ref: "#/visitors/value"
            },
            variables: fF
          }
        },
        ServerVariable: {
          $visitor: lF,
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
          $visitor: qF,
          fixedFields: {
            schemas: uD,
            responses: lD,
            parameters: fD,
            examples: pD,
            requestBodies: hD,
            headers: dD,
            securitySchemes: mD,
            links: yD,
            callbacks: gD
          }
        },
        Paths: {
          $visitor: OD
        },
        PathItem: {
          $visitor: qD,
          fixedFields: {
            $ref: VD,
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
            servers: BD,
            parameters: UD
          }
        },
        Operation: {
          $visitor: ID,
          fixedFields: {
            tags: MD,
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
            parameters: kD,
            requestBody: ND,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: FD,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: DD,
            servers: LD
          }
        },
        ExternalDocumentation: {
          $visitor: ED,
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
          $visitor: JF,
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
            schema: HF,
            example: {
              $ref: "#/visitors/value"
            },
            examples: aD,
            content: cD
          }
        },
        RequestBody: {
          $visitor: wD,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: AD,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: pF,
          fixedFields: {
            schema: kF,
            example: {
              $ref: "#/visitors/value"
            },
            examples: NF,
            encoding: FF
          }
        },
        Encoding: {
          $visitor: SD,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: xD,
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
          $visitor: _D,
          fixedFields: {
            default: CD
          }
        },
        Response: {
          $visitor: PD,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: $D,
            content: RD,
            links: TD
          }
        },
        Callback: {
          $visitor: jD
        },
        Example: {
          $visitor: vD,
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
            externalValue: bD
          }
        },
        Link: {
          $visitor: sF,
          fixedFields: {
            operationRef: iF,
            operationId: oF,
            parameters: aF,
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
          $visitor: GF,
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
            schema: KF,
            example: {
              $ref: "#/visitors/value"
            },
            examples: zF,
            content: WF
          }
        },
        Tag: {
          $visitor: VF,
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
          $visitor: BF,
          fixedFields: {
            $ref: UF
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: YF,
          fixedFields: {
            // the following properties are taken directly from the JSON Schema definition and follow the same specifications
            title: $e.title,
            multipleOf: $e.multipleOf,
            maximum: $e.maximum,
            exclusiveMaximum: $e.exclusiveMaximum,
            minimum: $e.minimum,
            exclusiveMinimum: $e.exclusiveMinimum,
            maxLength: $e.maxLength,
            minLength: $e.minLength,
            pattern: $e.pattern,
            maxItems: $e.maxItems,
            minItems: $e.minItems,
            uniqueItems: $e.uniqueItems,
            maxProperties: $e.maxProperties,
            minProperties: $e.minProperties,
            required: $e.required,
            enum: $e.enum,
            // the following properties are taken from the JSON Schema definition but their definitions were adjusted to the OpenAPI Specification
            type: nD,
            allOf: XF,
            anyOf: QF,
            oneOf: ZF,
            not: lE,
            items: eD,
            properties: tD,
            additionalProperties: lE,
            description: $e.description,
            format: $e.format,
            default: $e.default,
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
          $visitor: sD,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: iD
          }
        },
        XML: {
          $visitor: oD,
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
          $visitor: JD,
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
          $visitor: HD,
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
          $visitor: GD,
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
            scopes: KD
          }
        },
        SecurityRequirement: {
          $visitor: DF
        }
      },
      extension: {
        $visitor: ZN
      }
    }
  }
}, WD = () => {
  const t = wk(GN);
  return {
    predicates: {
      ...MF,
      isElement: Ot,
      isStringElement: ut,
      isArrayElement: Zr,
      isObjectElement: Be,
      isMemberElement: Vh,
      includesClasses: JO,
      hasElementSourceMap: Do
    },
    namespace: t
  };
}, YD = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = y.refract(t), s = zO(j), i = ue(e, s), o = new i({
    specObj: s
  });
  return hn(n, o), tw(o.element, r, {
    toolboxCreator: WD,
    visitorOptions: {
      keyMap: zN,
      nodeTypeGetter: KN
    }
  });
}, oe = (t) => (e, r = {}) => YD(e, {
  specPath: t,
  ...r
});
Ms.refract = oe(["visitors", "document", "objects", "Callback", "$visitor"]);
ks.refract = oe(["visitors", "document", "objects", "Components", "$visitor"]);
Ns.refract = oe(["visitors", "document", "objects", "Contact", "$visitor"]);
Ds.refract = oe(["visitors", "document", "objects", "Example", "$visitor"]);
Fs.refract = oe(["visitors", "document", "objects", "Discriminator", "$visitor"]);
qo.refract = oe(["visitors", "document", "objects", "Encoding", "$visitor"]);
Ls.refract = oe(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Gn.refract = oe(["visitors", "document", "objects", "Header", "$visitor"]);
qs.refract = oe(["visitors", "document", "objects", "Info", "$visitor"]);
Vs.refract = oe(["visitors", "document", "objects", "License", "$visitor"]);
Bs.refract = oe(["visitors", "document", "objects", "Link", "$visitor"]);
Us.refract = oe(["visitors", "document", "objects", "MediaType", "$visitor"]);
Vo.refract = oe(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Bo.refract = oe(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Js.refract = oe(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
Uo.refract = oe(["visitors", "document", "objects", "OpenApi", "$visitor"]);
Hs.refract = oe(["visitors", "document", "objects", "Operation", "$visitor"]);
Kn.refract = oe(["visitors", "document", "objects", "Parameter", "$visitor"]);
Gs.refract = oe(["visitors", "document", "objects", "PathItem", "$visitor"]);
Ks.refract = oe(["visitors", "document", "objects", "Paths", "$visitor"]);
zs.refract = oe(["visitors", "document", "objects", "Reference", "$visitor"]);
Ws.refract = oe(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Ys.refract = oe(["visitors", "document", "objects", "Response", "$visitor"]);
Xs.refract = oe(["visitors", "document", "objects", "Responses", "$visitor"]);
Go.refract = oe(["visitors", "document", "objects", "Schema", "$visitor"]);
ri.refract = oe(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
ni.refract = oe(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
si.refract = oe(["visitors", "document", "objects", "Server", "$visitor"]);
ii.refract = oe(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Ko.refract = oe(["visitors", "document", "objects", "Tag", "$visitor"]);
zo.refract = oe(["visitors", "document", "objects", "XML", "$visitor"]);
class ra extends Ms {
}
class na extends ks {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class sa extends Ns {
}
class jd extends Fs {
}
class Pd extends qo {
}
class ia extends Ds {
}
class oa extends Ls {
}
class aa extends Gn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class ca extends qs {
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
class mn extends y.StringElement {
  static default = new mn("https://spec.openapis.org/oas/3.1/dialect/base");
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
}
class ua extends Vs {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class la extends Bs {
}
class fa extends Us {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class $d extends Vo {
}
class Rd extends Bo {
}
class Td extends Js {
}
class Dr extends y.ObjectElement {
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
class oi extends Hs {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(e) {
    this.set("requestBody", e);
  }
}
class pa extends Kn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Tr extends Gs {
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
class ha extends Ks {
}
class Lr extends zs {
}
Object.defineProperty(Lr.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
Object.defineProperty(Lr.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(t) {
    this.set("summary", t);
  },
  enumerable: !0
});
class da extends Ws {
}
let ma = class extends Ys {
};
class ya extends Xs {
}
let Fw = class extends y.StringElement {
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
}, Dw = class extends y.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}, Lw = class extends y.ArrayElement {
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
    if (lt(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
};
const XD = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", QD = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, ZD = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, e2 = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof y.ArrayElement) && e.classes.includes(t), br = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, nt = (t) => t({
  hasMethod: XD,
  hasBasicElementProps: QD,
  primitiveEq: ZD,
  isElementType: br,
  hasClass: e2
}), tr = nt(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.Element || t(r) && e(void 0, r)), _d = nt(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.StringElement || t(r) && e("string", r)), qw = nt(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NumberElement || t(r) && e("number", r)), Vw = nt(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NullElement || t(r) && e("null", r)), Bw = nt(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.BooleanElement || t(r) && e("boolean", r)), Uw = nt(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Cd = nt(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ArrayElement && !(n instanceof y.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), Jw = nt(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.MemberElement || t(n) && e("member", n) && r(void 0, n)), Hw = nt(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.LinkElement || t(n) && e("link", n) && r(void 0, n)), Gw = nt(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.RefElement || t(n) && e("ref", n) && r(void 0, n)), t2 = nt(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Fw || t(n) && e("annotation", n) && r("array", n)), r2 = nt(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Dw || t(n) && e("comment", n) && r("string", n)), n2 = nt(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Lw || t(n) && e("parseResult", n) && r("array", n)), s2 = (t) => br("object", t) || br("array", t) || br("boolean", t) || br("number", t) || br("string", t) || br("null", t) || br("member", t), Kw = (t) => tr(t) ? Number.isInteger(t.startPositionRow) && Number.isInteger(t.startPositionColumn) && Number.isInteger(t.startIndex) && Number.isInteger(t.endPositionRow) && Number.isInteger(t.endPositionColumn) && Number.isInteger(t.endIndex) : !1, i2 = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Cd(r) ? tt(Xe(r.toValue()), t) : !1;
}, o2 = (t, e) => t.length === 0 ? !0 : tt(Xe(e.classes.toValue()), t), a2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Kw,
  includesClasses: o2,
  includesSymbols: i2,
  isAnnotationElement: t2,
  isArrayElement: Cd,
  isBooleanElement: Bw,
  isCommentElement: r2,
  isElement: tr,
  isLinkElement: Hw,
  isMemberElement: Jw,
  isNullElement: Vw,
  isNumberElement: qw,
  isObjectElement: Uw,
  isParseResultElement: n2,
  isPrimitiveElement: s2,
  isRefElement: Gw,
  isStringElement: _d
}, Symbol.toStringTag, { value: "Module" }));
let zw = class extends y.Namespace {
  constructor() {
    super(), this.register("annotation", Fw), this.register("comment", Dw), this.register("parseResult", Lw);
  }
};
const c2 = new zw(), u2 = (t) => {
  const e = new zw();
  return fe(t) && e.use(t), e;
}, l2 = () => ({
  predicates: {
    ...a2
  },
  namespace: c2
});
let f2 = class extends Cr {
  constructor(e, r, n) {
    if (super(e, r, n), this.name = this.constructor.name, typeof r == "string" && (this.message = r), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(r).stack, n != null && typeof n == "object" && Object.hasOwn(n, "cause") && !("cause" in this)) {
      const {
        cause: s
      } = n;
      this.cause = s, s instanceof Error && "stack" in s && (this.stack = `${this.stack}
CAUSE: ${s.stack}`);
    }
  }
}, Ww = class extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(f2, e);
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
}, p2 = class extends Ww {
  constructor(e, r) {
    if (super(e, r), r != null && typeof r == "object") {
      const {
        cause: n,
        ...s
      } = r;
      Object.assign(this, s);
    }
  }
}, bi = class extends Ww {
}, Yw = class extends p2 {
  value;
  constructor(e, r) {
    super(e, r), typeof r < "u" && (this.value = r.value);
  }
}, h2 = class extends Yw {
}, d2 = class extends Yw {
};
const Xw = (t, e) => {
  const r = At(t, e);
  return cn((n) => {
    if (fe(n) && qt("$ref", n) && un(_e, "$ref", n)) {
      const s = ue(["$ref"], n), i = Nr("#/", s);
      return ue(i.split("/"), r);
    }
    return fe(n) ? Xw(n, r) : n;
  }, t);
}, m2 = (t, e) => (t.startPositionRow = e?.startPositionRow, t.startPositionColumn = e?.startPositionColumn, t.startIndex = e?.startIndex, t.endPositionRow = e?.endPositionRow, t.endPositionColumn = e?.endPositionColumn, t.endIndex = e?.endIndex, t), Rt = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof y.KeyValuePair) {
    const {
      key: s,
      value: i
    } = t, o = tr(s) ? Rt(s, n) : s, a = tr(i) ? Rt(i, n) : i, c = new y.KeyValuePair(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof y.ObjectSlice) {
    const s = (a) => Rt(a, n), i = [...t].map(s), o = new y.ObjectSlice(i);
    return r.set(t, o), o;
  }
  if (t instanceof y.ArraySlice) {
    const s = (a) => Rt(a, n), i = [...t].map(s), o = new y.ArraySlice(i);
    return r.set(t, o), o;
  }
  if (tr(t)) {
    const s = eo(t);
    if (r.set(t, s), t.content)
      if (tr(t.content))
        s.content = Rt(t.content, n);
      else if (t.content instanceof y.KeyValuePair)
        s.content = Rt(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => Rt(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new h2("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
Rt.safe = (t) => {
  try {
    return Rt(t);
  } catch {
    return t;
  }
};
const Qw = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new y.KeyValuePair(e, r);
}, y2 = (t) => {
  const e = [...t];
  return new y.ArraySlice(e);
}, g2 = (t) => {
  const e = [...t];
  return new y.ObjectSlice(e);
}, Zw = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, Kw(t) && m2(e, t), t.meta.length > 0 && (e._meta = Rt(t.meta)), t.attributes.length > 0 && (e._attributes = Rt(t.attributes)), tr(t.content)) {
    const r = t.content;
    e.content = Zw(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof y.KeyValuePair ? e.content = Qw(t.content) : e.content = t.content;
  return e;
}, eo = (t) => {
  if (t instanceof y.KeyValuePair)
    return Qw(t);
  if (t instanceof y.ObjectSlice)
    return g2(t);
  if (t instanceof y.ArraySlice)
    return y2(t);
  if (tr(t))
    return Zw(t);
  throw new d2("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
eo.safe = (t) => {
  try {
    return eo(t);
  } catch {
    return t;
  }
};
const ga = (t) => Uw(t) ? "ObjectElement" : Cd(t) ? "ArrayElement" : Jw(t) ? "MemberElement" : _d(t) ? "StringElement" : Bw(t) ? "BooleanElement" : qw(t) ? "NumberElement" : Vw(t) ? "NullElement" : Hw(t) ? "LinkElement" : Gw(t) ? "RefElement" : void 0, e0 = (t) => tr(t) ? eo(t) : dr(t), t0 = be(ga, _e), Id = {
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
  ParseResultElement: ["content"]
}, va = (t, e, {
  keyMap: r = Id,
  ...n
} = {}) => rt(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: ga,
  nodePredicate: t0,
  nodeCloneFn: e0,
  ...n
});
va[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Id,
  ...n
} = {}) => rt[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: ga,
  nodePredicate: t0,
  nodeCloneFn: e0,
  ...n
});
const r0 = {
  toolboxCreator: l2,
  visitorOptions: {
    nodeTypeGetter: ga,
    exposeEdits: !0
  }
}, n0 = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(r0, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Qe(a.map(Ke({}, "visitor")), {
    ...i
  });
  a.forEach(pe(["pre"], []));
  const u = va(t, c, i);
  return a.forEach(pe(["post"], [])), u;
}, v2 = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(r0, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = Qe[Symbol.for("nodejs.util.promisify.custom")], u = va[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(Ke({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(pe(["pre"], [])));
  const l = await u(t, f, i);
  return await Promise.allSettled(a.map(pe(["post"], []))), l;
};
n0[Symbol.for("nodejs.util.promisify.custom")] = v2;
let s0 = class extends y.StringElement {
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
}, i0 = class extends y.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}, o0 = class extends y.ArrayElement {
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
    if (lt(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
};
const b2 = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", E2 = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, S2 = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, x2 = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof y.ArrayElement) && e.classes.includes(t), Er = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, st = (t) => t({
  hasMethod: b2,
  hasBasicElementProps: E2,
  primitiveEq: S2,
  isElementType: Er,
  hasClass: x2
}), rr = st(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.Element || t(r) && e(void 0, r)), ba = st(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.StringElement || t(r) && e("string", r)), a0 = st(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NumberElement || t(r) && e("number", r)), c0 = st(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NullElement || t(r) && e("null", r)), u0 = st(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.BooleanElement || t(r) && e("boolean", r)), l0 = st(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Md = st(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ArrayElement && !(n instanceof y.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), f0 = st(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.MemberElement || t(n) && e("member", n) && r(void 0, n)), p0 = st(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.LinkElement || t(n) && e("link", n) && r(void 0, n)), h0 = st(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.RefElement || t(n) && e("ref", n) && r(void 0, n)), O2 = st(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof s0 || t(n) && e("annotation", n) && r("array", n)), w2 = st(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof i0 || t(n) && e("comment", n) && r("string", n)), A2 = st(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof o0 || t(n) && e("parseResult", n) && r("array", n)), j2 = (t) => Er("object", t) || Er("array", t) || Er("boolean", t) || Er("number", t) || Er("string", t) || Er("null", t) || Er("member", t), d0 = (t) => rr(t) ? Number.isInteger(t.startPositionRow) && Number.isInteger(t.startPositionColumn) && Number.isInteger(t.startIndex) && Number.isInteger(t.endPositionRow) && Number.isInteger(t.endPositionColumn) && Number.isInteger(t.endIndex) : !1, P2 = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Md(r) ? tt(Xe(r.toValue()), t) : !1;
}, $2 = (t, e) => t.length === 0 ? !0 : tt(Xe(e.classes.toValue()), t), R2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: d0,
  includesClasses: $2,
  includesSymbols: P2,
  isAnnotationElement: O2,
  isArrayElement: Md,
  isBooleanElement: u0,
  isCommentElement: w2,
  isElement: rr,
  isLinkElement: p0,
  isMemberElement: f0,
  isNullElement: c0,
  isNumberElement: a0,
  isObjectElement: l0,
  isParseResultElement: A2,
  isPrimitiveElement: j2,
  isRefElement: h0,
  isStringElement: ba
}, Symbol.toStringTag, { value: "Module" }));
let m0 = class extends y.Namespace {
  constructor() {
    super(), this.register("annotation", s0), this.register("comment", i0), this.register("parseResult", o0);
  }
};
const T2 = new m0(), _2 = (t) => {
  const e = new m0();
  return fe(t) && e.use(t), e;
}, C2 = () => ({
  predicates: {
    ...R2
  },
  namespace: T2
});
let I2 = class extends Cr {
  constructor(e, r, n) {
    if (super(e, r, n), this.name = this.constructor.name, typeof r == "string" && (this.message = r), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(r).stack, n != null && typeof n == "object" && Object.hasOwn(n, "cause") && !("cause" in this)) {
      const {
        cause: s
      } = n;
      this.cause = s, s instanceof Error && "stack" in s && (this.stack = `${this.stack}
CAUSE: ${s.stack}`);
    }
  }
}, y0 = class extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(I2, e);
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
}, M2 = class extends y0 {
  constructor(e, r) {
    if (super(e, r), r != null && typeof r == "object") {
      const {
        cause: n,
        ...s
      } = r;
      Object.assign(this, s);
    }
  }
}, Ei = class extends y0 {
}, g0 = class extends M2 {
  value;
  constructor(e, r) {
    super(e, r), typeof r < "u" && (this.value = r.value);
  }
}, k2 = class extends g0 {
}, N2 = class extends g0 {
};
const v0 = (t, e) => {
  const r = At(t, e);
  return cn((n) => {
    if (fe(n) && qt("$ref", n) && un(_e, "$ref", n)) {
      const s = ue(["$ref"], n), i = Nr("#/", s);
      return ue(i.split("/"), r);
    }
    return fe(n) ? v0(n, r) : n;
  }, t);
}, F2 = (t, e) => (t.startPositionRow = e?.startPositionRow, t.startPositionColumn = e?.startPositionColumn, t.startIndex = e?.startIndex, t.endPositionRow = e?.endPositionRow, t.endPositionColumn = e?.endPositionColumn, t.endIndex = e?.endIndex, t), Tt = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof y.KeyValuePair) {
    const {
      key: s,
      value: i
    } = t, o = rr(s) ? Tt(s, n) : s, a = rr(i) ? Tt(i, n) : i, c = new y.KeyValuePair(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof y.ObjectSlice) {
    const s = (a) => Tt(a, n), i = [...t].map(s), o = new y.ObjectSlice(i);
    return r.set(t, o), o;
  }
  if (t instanceof y.ArraySlice) {
    const s = (a) => Tt(a, n), i = [...t].map(s), o = new y.ArraySlice(i);
    return r.set(t, o), o;
  }
  if (rr(t)) {
    const s = to(t);
    if (r.set(t, s), t.content)
      if (rr(t.content))
        s.content = Tt(t.content, n);
      else if (t.content instanceof y.KeyValuePair)
        s.content = Tt(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => Tt(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new k2("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
Tt.safe = (t) => {
  try {
    return Tt(t);
  } catch {
    return t;
  }
};
const b0 = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new y.KeyValuePair(e, r);
}, D2 = (t) => {
  const e = [...t];
  return new y.ArraySlice(e);
}, L2 = (t) => {
  const e = [...t];
  return new y.ObjectSlice(e);
}, E0 = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, d0(t) && F2(e, t), t.meta.length > 0 && (e._meta = Tt(t.meta)), t.attributes.length > 0 && (e._attributes = Tt(t.attributes)), rr(t.content)) {
    const r = t.content;
    e.content = E0(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof y.KeyValuePair ? e.content = b0(t.content) : e.content = t.content;
  return e;
}, to = (t) => {
  if (t instanceof y.KeyValuePair)
    return b0(t);
  if (t instanceof y.ObjectSlice)
    return L2(t);
  if (t instanceof y.ArraySlice)
    return D2(t);
  if (rr(t))
    return E0(t);
  throw new N2("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
to.safe = (t) => {
  try {
    return to(t);
  } catch {
    return t;
  }
};
const Ea = (t) => l0(t) ? "ObjectElement" : Md(t) ? "ArrayElement" : f0(t) ? "MemberElement" : ba(t) ? "StringElement" : u0(t) ? "BooleanElement" : a0(t) ? "NumberElement" : c0(t) ? "NullElement" : p0(t) ? "LinkElement" : h0(t) ? "RefElement" : void 0, S0 = (t) => rr(t) ? to(t) : dr(t), x0 = be(Ea, _e), kd = {
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
  ParseResultElement: ["content"]
}, Sa = (t, e, {
  keyMap: r = kd,
  ...n
} = {}) => rt(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Ea,
  nodePredicate: x0,
  nodeCloneFn: S0,
  ...n
});
Sa[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = kd,
  ...n
} = {}) => rt[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Ea,
  nodePredicate: x0,
  nodeCloneFn: S0,
  ...n
});
const O0 = {
  toolboxCreator: C2,
  visitorOptions: {
    nodeTypeGetter: Ea,
    exposeEdits: !0
  }
}, w0 = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(O0, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Qe(a.map(Ke({}, "visitor")), {
    ...i
  });
  a.forEach(pe(["pre"], []));
  const u = Sa(t, c, i);
  return a.forEach(pe(["post"], [])), u;
}, q2 = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(O0, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = Qe[Symbol.for("nodejs.util.promisify.custom")], u = Sa[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(Ke({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(pe(["pre"], [])));
  const l = await u(t, f, i);
  return await Promise.allSettled(a.map(pe(["post"], []))), l;
};
w0[Symbol.for("nodejs.util.promisify.custom")] = q2;
let A0 = class extends y.StringElement {
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
}, j0 = class extends y.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}, P0 = class extends y.ArrayElement {
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
    if (lt(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
};
const V2 = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", B2 = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, U2 = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, J2 = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof y.ArrayElement) && e.classes.includes(t), Sr = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, it = (t) => t({
  hasMethod: V2,
  hasBasicElementProps: B2,
  primitiveEq: U2,
  isElementType: Sr,
  hasClass: J2
}), nr = it(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.Element || t(r) && e(void 0, r)), Nd = it(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.StringElement || t(r) && e("string", r)), $0 = it(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NumberElement || t(r) && e("number", r)), R0 = it(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NullElement || t(r) && e("null", r)), T0 = it(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.BooleanElement || t(r) && e("boolean", r)), _0 = it(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Fd = it(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ArrayElement && !(n instanceof y.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), C0 = it(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.MemberElement || t(n) && e("member", n) && r(void 0, n)), I0 = it(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.LinkElement || t(n) && e("link", n) && r(void 0, n)), M0 = it(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.RefElement || t(n) && e("ref", n) && r(void 0, n)), H2 = it(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof A0 || t(n) && e("annotation", n) && r("array", n)), G2 = it(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof j0 || t(n) && e("comment", n) && r("string", n)), K2 = it(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof P0 || t(n) && e("parseResult", n) && r("array", n)), z2 = (t) => Sr("object", t) || Sr("array", t) || Sr("boolean", t) || Sr("number", t) || Sr("string", t) || Sr("null", t) || Sr("member", t), k0 = (t) => nr(t) ? Number.isInteger(t.startPositionRow) && Number.isInteger(t.startPositionColumn) && Number.isInteger(t.startIndex) && Number.isInteger(t.endPositionRow) && Number.isInteger(t.endPositionColumn) && Number.isInteger(t.endIndex) : !1, W2 = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Fd(r) ? tt(Xe(r.toValue()), t) : !1;
}, Y2 = (t, e) => t.length === 0 ? !0 : tt(Xe(e.classes.toValue()), t), X2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: k0,
  includesClasses: Y2,
  includesSymbols: W2,
  isAnnotationElement: H2,
  isArrayElement: Fd,
  isBooleanElement: T0,
  isCommentElement: G2,
  isElement: nr,
  isLinkElement: I0,
  isMemberElement: C0,
  isNullElement: R0,
  isNumberElement: $0,
  isObjectElement: _0,
  isParseResultElement: K2,
  isPrimitiveElement: z2,
  isRefElement: M0,
  isStringElement: Nd
}, Symbol.toStringTag, { value: "Module" }));
let N0 = class extends y.Namespace {
  constructor() {
    super(), this.register("annotation", A0), this.register("comment", j0), this.register("parseResult", P0);
  }
};
const Q2 = new N0(), Z2 = (t) => {
  const e = new N0();
  return fe(t) && e.use(t), e;
}, eL = () => ({
  predicates: {
    ...X2
  },
  namespace: Q2
});
let tL = class extends Cr {
  constructor(e, r, n) {
    if (super(e, r, n), this.name = this.constructor.name, typeof r == "string" && (this.message = r), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(r).stack, n != null && typeof n == "object" && Object.hasOwn(n, "cause") && !("cause" in this)) {
      const {
        cause: s
      } = n;
      this.cause = s, s instanceof Error && "stack" in s && (this.stack = `${this.stack}
CAUSE: ${s.stack}`);
    }
  }
}, F0 = class extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(tL, e);
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
}, rL = class extends F0 {
  constructor(e, r) {
    if (super(e, r), r != null && typeof r == "object") {
      const {
        cause: n,
        ...s
      } = r;
      Object.assign(this, s);
    }
  }
}, jn = class extends F0 {
}, D0 = class extends rL {
  value;
  constructor(e, r) {
    super(e, r), typeof r < "u" && (this.value = r.value);
  }
}, nL = class extends D0 {
}, sL = class extends D0 {
};
const L0 = (t, e) => {
  const r = At(t, e);
  return cn((n) => {
    if (fe(n) && qt("$ref", n) && un(_e, "$ref", n)) {
      const s = ue(["$ref"], n), i = Nr("#/", s);
      return ue(i.split("/"), r);
    }
    return fe(n) ? L0(n, r) : n;
  }, t);
}, iL = (t, e) => (t.startPositionRow = e?.startPositionRow, t.startPositionColumn = e?.startPositionColumn, t.startIndex = e?.startIndex, t.endPositionRow = e?.endPositionRow, t.endPositionColumn = e?.endPositionColumn, t.endIndex = e?.endIndex, t), _t = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof y.KeyValuePair) {
    const {
      key: s,
      value: i
    } = t, o = nr(s) ? _t(s, n) : s, a = nr(i) ? _t(i, n) : i, c = new y.KeyValuePair(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof y.ObjectSlice) {
    const s = (a) => _t(a, n), i = [...t].map(s), o = new y.ObjectSlice(i);
    return r.set(t, o), o;
  }
  if (t instanceof y.ArraySlice) {
    const s = (a) => _t(a, n), i = [...t].map(s), o = new y.ArraySlice(i);
    return r.set(t, o), o;
  }
  if (nr(t)) {
    const s = ro(t);
    if (r.set(t, s), t.content)
      if (nr(t.content))
        s.content = _t(t.content, n);
      else if (t.content instanceof y.KeyValuePair)
        s.content = _t(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => _t(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new nL("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
_t.safe = (t) => {
  try {
    return _t(t);
  } catch {
    return t;
  }
};
const q0 = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new y.KeyValuePair(e, r);
}, oL = (t) => {
  const e = [...t];
  return new y.ArraySlice(e);
}, aL = (t) => {
  const e = [...t];
  return new y.ObjectSlice(e);
}, V0 = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, k0(t) && iL(e, t), t.meta.length > 0 && (e._meta = _t(t.meta)), t.attributes.length > 0 && (e._attributes = _t(t.attributes)), nr(t.content)) {
    const r = t.content;
    e.content = V0(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof y.KeyValuePair ? e.content = q0(t.content) : e.content = t.content;
  return e;
}, ro = (t) => {
  if (t instanceof y.KeyValuePair)
    return q0(t);
  if (t instanceof y.ObjectSlice)
    return aL(t);
  if (t instanceof y.ArraySlice)
    return oL(t);
  if (nr(t))
    return V0(t);
  throw new sL("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
ro.safe = (t) => {
  try {
    return ro(t);
  } catch {
    return t;
  }
};
const xa = (t) => _0(t) ? "ObjectElement" : Fd(t) ? "ArrayElement" : C0(t) ? "MemberElement" : Nd(t) ? "StringElement" : T0(t) ? "BooleanElement" : $0(t) ? "NumberElement" : R0(t) ? "NullElement" : I0(t) ? "LinkElement" : M0(t) ? "RefElement" : void 0, B0 = (t) => nr(t) ? ro(t) : dr(t), U0 = be(xa, _e), Dd = {
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
  ParseResultElement: ["content"]
}, Oa = (t, e, {
  keyMap: r = Dd,
  ...n
} = {}) => rt(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: xa,
  nodePredicate: U0,
  nodeCloneFn: B0,
  ...n
});
Oa[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Dd,
  ...n
} = {}) => rt[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: xa,
  nodePredicate: U0,
  nodeCloneFn: B0,
  ...n
});
const J0 = {
  toolboxCreator: eL,
  visitorOptions: {
    nodeTypeGetter: xa,
    exposeEdits: !0
  }
}, H0 = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(J0, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Qe(a.map(Ke({}, "visitor")), {
    ...i
  });
  a.forEach(pe(["pre"], []));
  const u = Oa(t, c, i);
  return a.forEach(pe(["post"], [])), u;
}, cL = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(J0, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = Qe[Symbol.for("nodejs.util.promisify.custom")], u = Oa[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(Ke({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(pe(["pre"], [])));
  const l = await u(t, f, i);
  return await Promise.allSettled(a.map(pe(["post"], []))), l;
};
H0[Symbol.for("nodejs.util.promisify.custom")] = cL;
class G0 extends y.StringElement {
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
class K0 extends y.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}
class z0 extends y.ArrayElement {
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
    if (lt(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
}
const uL = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", lL = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, fL = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, pL = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof y.ArrayElement) && e.classes.includes(t), xr = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, ot = (t) => t({
  hasMethod: uL,
  hasBasicElementProps: lL,
  primitiveEq: fL,
  isElementType: xr,
  hasClass: pL
}), sr = ot(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.Element || t(r) && e(void 0, r)), Ld = ot(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.StringElement || t(r) && e("string", r)), W0 = ot(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NumberElement || t(r) && e("number", r)), Y0 = ot(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.NullElement || t(r) && e("null", r)), X0 = ot(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof y.BooleanElement || t(r) && e("boolean", r)), Q0 = ot(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), qd = ot(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof y.ArrayElement && !(n instanceof y.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), Z0 = ot(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.MemberElement || t(n) && e("member", n) && r(void 0, n)), eA = ot(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.LinkElement || t(n) && e("link", n) && r(void 0, n)), tA = ot(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof y.RefElement || t(n) && e("ref", n) && r(void 0, n)), hL = ot(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof G0 || t(n) && e("annotation", n) && r("array", n)), dL = ot(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof K0 || t(n) && e("comment", n) && r("string", n)), mL = ot(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof z0 || t(n) && e("parseResult", n) && r("array", n)), yL = (t) => xr("object", t) || xr("array", t) || xr("boolean", t) || xr("number", t) || xr("string", t) || xr("null", t) || xr("member", t), rA = (t) => sr(t) ? Number.isInteger(t.startPositionRow) && Number.isInteger(t.startPositionColumn) && Number.isInteger(t.startIndex) && Number.isInteger(t.endPositionRow) && Number.isInteger(t.endPositionColumn) && Number.isInteger(t.endIndex) : !1, gL = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return qd(r) ? tt(Xe(r.toValue()), t) : !1;
}, vL = (t, e) => t.length === 0 ? !0 : tt(Xe(e.classes.toValue()), t), bL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: rA,
  includesClasses: vL,
  includesSymbols: gL,
  isAnnotationElement: hL,
  isArrayElement: qd,
  isBooleanElement: X0,
  isCommentElement: dL,
  isElement: sr,
  isLinkElement: eA,
  isMemberElement: Z0,
  isNullElement: Y0,
  isNumberElement: W0,
  isObjectElement: Q0,
  isParseResultElement: mL,
  isPrimitiveElement: yL,
  isRefElement: tA,
  isStringElement: Ld
}, Symbol.toStringTag, { value: "Module" }));
class nA extends y.Namespace {
  constructor() {
    super(), this.register("annotation", G0), this.register("comment", K0), this.register("parseResult", z0);
  }
}
const EL = new nA(), SL = (t) => {
  const e = new nA();
  return fe(t) && e.use(t), e;
}, xL = () => ({
  predicates: {
    ...bL
  },
  namespace: EL
});
class OL extends Cr {
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
class sA extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(OL, e);
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
class wL extends sA {
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
class wr extends sA {
}
class iA extends wL {
  value;
  constructor(e, r) {
    super(e, r), typeof r < "u" && (this.value = r.value);
  }
}
class AL extends iA {
}
class jL extends iA {
}
const oA = (t, e) => {
  const r = At(t, e);
  return cn((n) => {
    if (fe(n) && qt("$ref", n) && un(_e, "$ref", n)) {
      const s = ue(["$ref"], n), i = Nr("#/", s);
      return ue(i.split("/"), r);
    }
    return fe(n) ? oA(n, r) : n;
  }, t);
}, PL = (t, e) => (t.startPositionRow = e?.startPositionRow, t.startPositionColumn = e?.startPositionColumn, t.startIndex = e?.startIndex, t.endPositionRow = e?.endPositionRow, t.endPositionColumn = e?.endPositionColumn, t.endIndex = e?.endIndex, t), Ct = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof y.KeyValuePair) {
    const {
      key: s,
      value: i
    } = t, o = sr(s) ? Ct(s, n) : s, a = sr(i) ? Ct(i, n) : i, c = new y.KeyValuePair(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof y.ObjectSlice) {
    const s = (a) => Ct(a, n), i = [...t].map(s), o = new y.ObjectSlice(i);
    return r.set(t, o), o;
  }
  if (t instanceof y.ArraySlice) {
    const s = (a) => Ct(a, n), i = [...t].map(s), o = new y.ArraySlice(i);
    return r.set(t, o), o;
  }
  if (sr(t)) {
    const s = no(t);
    if (r.set(t, s), t.content)
      if (sr(t.content))
        s.content = Ct(t.content, n);
      else if (t.content instanceof y.KeyValuePair)
        s.content = Ct(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => Ct(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new AL("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
Ct.safe = (t) => {
  try {
    return Ct(t);
  } catch {
    return t;
  }
};
const aA = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new y.KeyValuePair(e, r);
}, $L = (t) => {
  const e = [...t];
  return new y.ArraySlice(e);
}, RL = (t) => {
  const e = [...t];
  return new y.ObjectSlice(e);
}, cA = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, rA(t) && PL(e, t), t.meta.length > 0 && (e._meta = Ct(t.meta)), t.attributes.length > 0 && (e._attributes = Ct(t.attributes)), sr(t.content)) {
    const r = t.content;
    e.content = cA(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof y.KeyValuePair ? e.content = aA(t.content) : e.content = t.content;
  return e;
}, no = (t) => {
  if (t instanceof y.KeyValuePair)
    return aA(t);
  if (t instanceof y.ObjectSlice)
    return RL(t);
  if (t instanceof y.ArraySlice)
    return $L(t);
  if (sr(t))
    return cA(t);
  throw new jL("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
no.safe = (t) => {
  try {
    return no(t);
  } catch {
    return t;
  }
};
const wa = (t) => Q0(t) ? "ObjectElement" : qd(t) ? "ArrayElement" : Z0(t) ? "MemberElement" : Ld(t) ? "StringElement" : X0(t) ? "BooleanElement" : W0(t) ? "NumberElement" : Y0(t) ? "NullElement" : eA(t) ? "LinkElement" : tA(t) ? "RefElement" : void 0, uA = (t) => sr(t) ? no(t) : dr(t), lA = be(wa, _e), Vd = {
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
  ParseResultElement: ["content"]
}, Aa = (t, e, {
  keyMap: r = Vd,
  ...n
} = {}) => rt(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: wa,
  nodePredicate: lA,
  nodeCloneFn: uA,
  ...n
});
Aa[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Vd,
  ...n
} = {}) => rt[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: wa,
  nodePredicate: lA,
  nodeCloneFn: uA,
  ...n
});
const fA = {
  toolboxCreator: xL,
  visitorOptions: {
    nodeTypeGetter: wa,
    exposeEdits: !0
  }
}, pA = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(fA, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Qe(a.map(Ke({}, "visitor")), {
    ...i
  });
  a.forEach(pe(["pre"], []));
  const u = Aa(t, c, i);
  return a.forEach(pe(["post"], [])), u;
}, TL = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Ye(fA, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = Qe[Symbol.for("nodejs.util.promisify.custom")], u = Aa[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(Ke({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(pe(["pre"], [])));
  const l = await u(t, f, i);
  return await Promise.allSettled(a.map(pe(["post"], []))), l;
};
pA[Symbol.for("nodejs.util.promisify.custom")] = TL;
let ai = class extends zn {
  constructor(e, r, n) {
    super(e, r, n), this.element = "JSONSchemaDraft6";
  }
  /**
   * Core vocabulary
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-01
   */
  get idProp() {
    throw new wr("id keyword from Core vocabulary has been renamed to $id.");
  }
  set idProp(e) {
    throw new wr("id keyword from Core vocabulary has been renamed to $id.");
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
}, ci = class extends ei {
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
    throw new wr("schema keyword from Hyper-Schema vocabulary has been renamed to submissionSchema.");
  }
  set schema(e) {
    throw new wr("schema keyword from Hyper-Schema vocabulary has been renamed to submissionSchema.");
  }
  get submissionSchema() {
    return this.get("submissionSchema");
  }
  set submissionSchema(e) {
    this.set("submissionSchema", e);
  }
  get method() {
    throw new wr("method keyword from Hyper-Schema vocabulary has been removed.");
  }
  set method(e) {
    throw new wr("method keyword from Hyper-Schema vocabulary has been removed.");
  }
  get encType() {
    throw new wr("encType keyword from Hyper-Schema vocabulary has been renamed to submissionEncType.");
  }
  set encType(e) {
    throw new wr("encType keyword from Hyper-Schema vocabulary has been renamed to submissionEncType.");
  }
  get submissionEncType() {
    return this.get("submissionEncType");
  }
  set submissionEncType(e) {
    this.set("submissionEncType", e);
  }
};
const _L = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft6", ai), e.register("jSONReference", Wn), e.register("media", Zs), e.register("linkDescription", ci), e;
  }
}, CL = {
  JSONSchemaDraft6Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Vd
};
let hA = class extends Rw {
  constructor(e) {
    super(e), this.element = new ai();
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
}, IL = class extends Tw {
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), Z;
  }
};
class ML extends ee {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
let dA = class extends _w {
  constructor(e) {
    super(e), this.element = new ci();
  }
};
const Fe = be(
  // JSON Schema object modifications
  k(["visitors", "document", "objects", "JSONSchema", "$visitor"], hA),
  pt(["visitors", "document", "objects", "JSONSchema", "fixedFields", "id"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$id"], Le.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Le.visitors.JSONSchemaOrJSONReferenceVisitor),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], IL),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Le.visitors.JSONSchemaOrJSONReferenceVisitor),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "const"], Le.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "examples"], ML),
  // Link Description object modifications
  k(["visitors", "document", "objects", "LinkDescription", "$visitor"], dA),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Le.visitors.JSONSchemaOrJSONReferenceVisitor),
  pt(["visitors", "document", "objects", "LinkDescription", "fixedFields", "schema"]),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Le.visitors.JSONSchemaOrJSONReferenceVisitor),
  pt(["visitors", "document", "objects", "LinkDescription", "fixedFields", "method"]),
  pt(["visitors", "document", "objects", "LinkDescription", "fixedFields", "encType"]),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"], Le.visitors.value)
)(Le), kL = ot(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ai || t(n) && e("JSONSchemaDraft6", n) && r("object", n)), NL = ot(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ci || t(n) && e("linkDescription", n) && r("object", n)), FL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Gh,
  isJSONSchemaElement: kL,
  isLinkDescriptionElement: NL,
  isMediaElement: $w
}, Symbol.toStringTag, { value: "Module" })), DL = () => {
  const t = SL(_L);
  return {
    predicates: {
      ...FL,
      isStringElement: Ld
    },
    namespace: t
  };
}, LL = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Fe
} = {}) => {
  const s = y.refract(t), i = oA(n), o = ue(e, i), a = new o({
    specObj: i
  });
  return Aa(s, a), pA(a.element, r, {
    toolboxCreator: DL,
    visitorOptions: {
      keyMap: CL,
      nodeTypeGetter: ti
    }
  });
}, mA = (t) => (e, r = {}) => LL(e, {
  specPath: t,
  ...r
});
ai.refract = mA(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
ci.refract = mA(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let ui = class extends ai {
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
    throw new jn('media keyword from Hyper-Schema vocabulary has been moved to validation vocabulary as "contentMediaType" / "contentEncoding"');
  }
  set media(e) {
    throw new jn('media keyword from Hyper-Schema vocabulary has been moved to validation vocabulary as "contentMediaType" / "contentEncoding"');
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
}, li = class extends ci {
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
    throw new jn("mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.");
  }
  set mediaType(e) {
    throw new jn("mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.");
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
    throw new jn("submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.");
  }
  set submissionEncType(e) {
    throw new jn("submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.");
  }
  get submissionMediaType() {
    return this.get("submissionMediaType");
  }
  set submissionMediaType(e) {
    this.set("submissionMediaType", e);
  }
};
const qL = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft7", ui), e.register("jSONReference", Wn), e.register("linkDescription", li), e;
  }
}, VL = {
  JSONSchemaDraft7Element: ["content"],
  JSONReferenceElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Dd
};
let yA = class extends hA {
  constructor(e) {
    super(e), this.element = new ui();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-07/schema#";
  }
}, gA = class extends dA {
  constructor(e) {
    super(e), this.element = new li();
  }
};
const Or = be(
  // JSON Schema object modifications
  k(["visitors", "document", "objects", "JSONSchema", "$visitor"], yA),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$comment"], Fe.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  pt(["visitors", "document", "objects", "JSONSchema", "fixedFields", "media"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentEncoding"], Fe.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentMediaType"], Fe.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "writeOnly"], Fe.visitors.value),
  // Link Description object modifications
  k(["visitors", "document", "objects", "LinkDescription", "$visitor"], gA),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchor"], Fe.visitors.value),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchorPointer"], Fe.visitors.value),
  pt(["visitors", "document", "objects", "LinkDescription", "fixedFields", "mediaType"]),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetMediaType"], Fe.visitors.value),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetHints"], Fe.visitors.value),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "description"], Fe.visitors.value),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "$comment"], Fe.visitors.value),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  pt(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"]),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionMediaType"], Fe.visitors.value)
)(Fe), BL = it(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ui || t(n) && e("JSONSchemaDraft7", n) && r("object", n)), UL = it(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof li || t(n) && e("linkDescription", n) && r("object", n)), JL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Gh,
  isJSONSchemaElement: BL,
  isLinkDescriptionElement: UL
}, Symbol.toStringTag, { value: "Module" })), HL = () => {
  const t = Z2(qL);
  return {
    predicates: {
      ...JL,
      isStringElement: Nd
    },
    namespace: t
  };
}, GL = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Or
} = {}) => {
  const s = y.refract(t), i = L0(n), o = ue(e, i), a = new o({
    specObj: i
  });
  return Oa(s, a), H0(a.element, r, {
    toolboxCreator: HL,
    visitorOptions: {
      keyMap: VL,
      nodeTypeGetter: ti
    }
  });
}, vA = (t) => (e, r = {}) => GL(e, {
  specPath: t,
  ...r
});
ui.refract = vA(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
li.refract = vA(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let fi = class extends ui {
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
    throw new Ei("definitions keyword from Validation vocabulary has been renamed to $defs.");
  }
  set definitions(e) {
    throw new Ei("definitions keyword from Validation vocabulary has been renamed to $defs.");
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
    throw new Ei("dependencies keyword from Validation vocabulary has been renamed to dependentSchemas.");
  }
  set dependencies(e) {
    throw new Ei("dependencies keyword from Validation vocabulary has been renamed to dependentSchemas.");
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
}, pi = class extends li {
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
const KL = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema201909", fi), e.register("linkDescription", pi), e;
  }
}, zL = {
  JSONSchema201909Element: ["content"],
  LinkDescriptionElement: ["content"],
  ...kd
};
let De = class extends yA {
  constructor(e) {
    super(e), this.element = new fi();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2019-09/schema";
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = rn.prototype.ObjectElement.call(this, e);
    return ba(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
};
class WL extends ee {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
class YL extends ee {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let bA = class extends M(Fr, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ObjectElement(), this.element.classes.push("json-schema-$defs"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
}, EA = class extends M(vt, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ArrayElement(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, SA = class extends M(vt, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ArrayElement(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, xA = class extends M(vt, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ArrayElement(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, OA = class extends M(Fr, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ObjectElement(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
};
class XL extends M(vt, Pe, ee) {
  ObjectElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), Z;
  }
  ArrayElement(e) {
    return this.element = new y.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), Z;
  }
}
let wA = class extends M(Fr, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
}, AA = class extends M(Fr, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
};
class QL extends ee {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
let jA = class extends gA {
  constructor(e) {
    super(e), this.element = new pi();
  }
};
const Pi = be(
  // JSON Schema object modifications
  k(["visitors", "document", "objects", "JSONSchema", "$visitor"], De),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$vocabulary"], WL),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$anchor"], Or.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"], Or.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"], Or.visitors.value),
  pt(["visitors", "document", "objects", "JSONReference", "$visitor"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$ref"], YL),
  pt(["visitors", "document", "objects", "JSONSchema", "fixedFields", "definitions"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$defs"], bA),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "allOf"], EA),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "anyOf"], SA),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "oneOf"], xA),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], De),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], De),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], De),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], De),
  pt(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependencies"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentSchemas"], OA),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], XL),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], De),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "properties"], wA),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "patternProperties"], AA),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], De),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"], De),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], De),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], De),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], De),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "maxContains"], Or.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "minContains"], Or.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentRequired"], QL),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "deprecated"], Or.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], De),
  // Link Description object modifications
  k(["visitors", "document", "objects", "LinkDescription", "$visitor"], jA),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], De),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], De),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], De),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], De)
)(Or), ZL = st(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fi || t(n) && e("JSONSchema201909", n) && r("object", n)), eq = st(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof pi || t(n) && e("linkDescription", n) && r("object", n)), tq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: ZL,
  isLinkDescriptionElement: eq
}, Symbol.toStringTag, { value: "Module" })), rq = () => {
  const t = _2(KL);
  return {
    predicates: {
      ...tq,
      isStringElement: ba
    },
    namespace: t
  };
}, nq = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Pi
} = {}) => {
  const s = y.refract(t), i = v0(n), o = ue(e, i), a = new o({
    specObj: i
  });
  return Sa(s, a), w0(a.element, r, {
    toolboxCreator: rq,
    visitorOptions: {
      keyMap: zL,
      nodeTypeGetter: ti
    }
  });
}, PA = (t) => (e, r = {}) => nq(e, {
  specPath: t,
  ...r
});
fi.refract = PA(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
pi.refract = PA(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class hi extends fi {
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
    throw new bi("$recursiveAnchor keyword from Core vocabulary has been renamed to $dynamicAnchor.");
  }
  set $recursiveAnchor(e) {
    throw new bi("$recursiveAnchor keyword from Core vocabulary has been renamed to $dynamicAnchor.");
  }
  get $dynamicRef() {
    return this.get("$dynamicRef");
  }
  set $dynamicRef(e) {
    this.set("$dynamicRef", e);
  }
  get $recursiveRef() {
    throw new bi("$recursiveRef keyword from Core vocabulary has been renamed to $dynamicRef.");
  }
  set $recursiveRef(e) {
    throw new bi("$recursiveRef keyword from Core vocabulary has been renamed to $dynamicRef.");
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
class ja extends pi {
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
const sq = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema202012", hi), e.register("linkDescription", ja), e;
  }
}, iq = {
  JSONSchema202012Element: ["content"],
  LinkDescriptionElement: ["content"],
  ...Id
};
let Re = class extends De {
  constructor(e) {
    super(e), this.element = new hi();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2020-12/schema";
  }
}, $A = class extends M(vt, Pe, ee) {
  constructor(e) {
    super(e), this.element = new y.ArrayElement(), this.element.classes.push("json-schema-prefixItems");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, oq = class extends jA {
  constructor(e) {
    super(e), this.element = new ja();
  }
};
const RA = be(
  // JSON Schema object modifications
  k(["visitors", "document", "objects", "JSONSchema", "$visitor"], Re),
  pt(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicAnchor"], Pi.visitors.value),
  pt(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicRef"], Pi.visitors.value),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], Re),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Re),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Re),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Re),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "prefixItems"], $A),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], Re),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Re),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], Re),
  pt(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"]),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Re),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], Re),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], Re),
  k(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], Re),
  // Link Description object modifications
  k(["visitors", "document", "objects", "LinkDescription", "$visitor"], oq),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], Re),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Re),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Re),
  k(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Re)
)(Pi), aq = nt(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hi || t(n) && e("JSONSchema202012", n) && r("object", n)), cq = nt(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ja || t(n) && e("linkDescription", n) && r("object", n)), uq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: aq,
  isLinkDescriptionElement: cq
}, Symbol.toStringTag, { value: "Module" })), lq = () => {
  const t = u2(sq);
  return {
    predicates: {
      ...uq,
      isStringElement: _d
    },
    namespace: t
  };
}, fq = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = RA
} = {}) => {
  const s = y.refract(t), i = Xw(n), o = ue(e, i), a = new o({
    specObj: i
  });
  return va(s, a), n0(a.element, r, {
    toolboxCreator: lq,
    visitorOptions: {
      keyMap: iq,
      nodeTypeGetter: ti
    }
  });
}, TA = (t) => (e, r = {}) => fq(e, {
  specPath: t,
  ...r
});
hi.refract = TA(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
ja.refract = TA(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class _r extends hi {
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
class Pa extends ri {
}
class $a extends ni {
}
class Ra extends si {
}
class Ta extends ii {
}
class Bd extends Ko {
}
class Ud extends zo {
}
const Jd = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", ra), e.register("components", na), e.register("contact", sa), e.register("discriminator", jd), e.register("encoding", Pd), e.register("example", ia), e.register("externalDocumentation", oa), e.register("header", aa), e.register("info", ca), e.register("jsonSchemaDialect", mn), e.register("license", ua), e.register("link", la), e.register("mediaType", fa), e.register("oAuthFlow", $d), e.register("oAuthFlows", Rd), e.register("openapi", Td), e.register("openApi3_1", Dr), e.register("operation", oi), e.register("parameter", pa), e.register("pathItem", Tr), e.register("paths", ha), e.register("reference", Lr), e.register("requestBody", da), e.register("response", ma), e.register("responses", ya), e.register("schema", _r), e.register("securityRequirement", Pa), e.register("securityScheme", $a), e.register("server", Ra), e.register("serverVariable", Ta), e.register("tag", Bd), e.register("xml", Ud), e;
  }
};
class Hd extends y.ObjectElement {
  static primaryClass = "components-path-items";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Hd.primaryClass);
  }
}
class Gd extends y.ObjectElement {
  static primaryClass = "webhooks";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Gd.primaryClass);
  }
}
const wt = (t) => {
  if (Me(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, Dt = {
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
  ...ko
};
class di {
  internalStore;
  constructor(e, r, n) {
    this.storageElement = e, this.storageField = r, this.storageSubField = n;
  }
  get store() {
    if (!this.internalStore) {
      let e = this.storageElement.get(this.storageField);
      Oe(e) || (e = new y.ObjectElement(), this.storageElement.set(this.storageField, e));
      let r = e.get(this.storageSubField);
      Ge(r) || (r = new y.ArrayElement(), e.set(this.storageSubField, r)), this.internalStore = r;
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
const pq = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: n
  } = e, s = (a, c) => !r.isParameterElement(a) || !r.isParameterElement(c) || !r.isStringElement(a.name) || !r.isStringElement(a.in) || !r.isStringElement(c.name) || !r.isStringElement(c.in) ? !1 : I(a.name) === I(c.name) && I(a.in) === I(c.in), i = [];
  let o;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(a) {
          o = new di(a, t, "parameters");
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
          const d = vo(i);
          if (!Array.isArray(d) || d.length === 0)
            return;
          const p = n([...l, u, a]);
          if (o.includes(p))
            return;
          const m = hx([], ["parameters", "content"], a), h = vx(s, [...m, ...d]);
          a.parameters = new Xo(h), o.append(p);
        }
      }
    }
  };
}, hq = ({
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
          i = new di(o, t, "security-requirements"), r.isArrayElement(o.security) && (s = o.security);
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
            o.security = new Qo((m = s) === null || m === void 0 ? void 0 : m.content), i.append(l);
          }
        }
      }
    }
  };
}, Op = (t) => t.replace(/\s/g, ""), wp = (t) => t.replace(/\W/gi, "_"), dq = (t, e) => {
  const r = wp(Op(e.toLowerCase())), n = wp(Op(t));
  return `${r}${n}`;
}, mq = (t, e, r) => {
  const n = Op(t);
  return n.length > 0 ? wp(n) : dq(e, r);
}, yq = ({
  storageField: t = "x-normalized",
  operationIdNormalizer: e = mq
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
          u = new di(f, t, "operation-ids");
        },
        leave() {
          const f = wT((l) => I(l.operationId), a);
          Object.entries(f).forEach(([l, d]) => {
            Array.isArray(d) && (d.length <= 1 || d.forEach((p, m) => {
              const h = `${l}${m + 1}`;
              p.operationId = new i.elements.String(h);
            }));
          }), c.forEach((l) => {
            if (typeof l.operationId > "u") return;
            const d = String(I(l.operationId)), p = a.find((m) => I(m.meta.get("originalOperationId")) === d);
            typeof p > "u" || (l.operationId = H.safe(p.operationId), l.meta.set("originalOperationId", d), l.set("__originalOperationId", d));
          }), a.length = 0, c.length = 0, u = void 0;
        }
      },
      PathItemElement: {
        enter(f) {
          const l = At("path", I(f.meta.get("path")));
          o.push(l);
        },
        leave() {
          o.pop();
        }
      },
      OperationElement: {
        enter(f, l, d, p, m) {
          if (typeof f.operationId > "u") return;
          const h = s([...m, d, f]);
          if (u.includes(h))
            return;
          const v = String(I(f.operationId)), b = vo(o), g = At("method", I(f.meta.get("http-method"))), S = e(v, b, g);
          v !== S && (f.operationId = new i.elements.String(S), f.set("__originalOperationId", v), f.meta.set("originalOperationId", v), a.push(f), u.append(h));
        }
      },
      LinkElement: {
        leave(f) {
          n.isLinkElement(f) && (typeof f.operationId > "u" || c.push(f));
        }
      }
    }
  };
}, gq = ({
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
          s = new di(i, t, "parameter-examples");
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
              const p = i.examples.map((m) => H.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", p), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", p[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [H(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", H(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, vq = ({
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
          s = new di(i, t, "header-examples");
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
              const p = i.examples.map((m) => H.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", p), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", p[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [H(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", H(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, bq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ra || t(n) && e("callback", n) && r("object", n)), Eq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof na || t(n) && e("components", n) && r("object", n)), Sq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof sa || t(n) && e("contact", n) && r("object", n)), xq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ia || t(n) && e("example", n) && r("object", n)), Oq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof oa || t(n) && e("externalDocumentation", n) && r("object", n)), wq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof aa || t(n) && e("header", n) && r("object", n)), Aq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ca || t(n) && e("info", n) && r("object", n)), _A = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof mn || t(n) && e("jsonSchemaDialect", n) && r("string", n)), jq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ua || t(n) && e("license", n) && r("object", n)), Pq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof la || t(n) && e("link", n) && r("object", n)), $q = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Td || t(n) && e("openapi", n) && r("string", n)), CA = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Dr || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), IA = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof oi || t(n) && e("operation", n) && r("object", n)), Rq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof pa || t(n) && e("parameter", n) && r("object", n)), nn = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Tr || t(n) && e("pathItem", n) && r("object", n)), Tq = (t) => {
  if (!nn(t) || !he(t.$ref))
    return !1;
  const e = I(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, _q = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ha || t(n) && e("paths", n) && r("object", n)), yn = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Lr || t(n) && e("reference", n) && r("object", n)), Cq = (t) => {
  if (!yn(t) || !he(t.$ref))
    return !1;
  const e = I(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, Iq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof da || t(n) && e("requestBody", n) && r("object", n)), Mq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ma || t(n) && e("response", n) && r("object", n)), kq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ya || t(n) && e("responses", n) && r("object", n)), Lt = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof _r || t(n) && e("schema", n) && r("object", n)), Kd = (t) => Io(t) && t.classes.includes("boolean-json-schema"), Nq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Pa || t(n) && e("securityRequirement", n) && r("object", n)), Fq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof $a || t(n) && e("securityScheme", n) && r("object", n)), Dq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ra || t(n) && e("server", n) && r("object", n)), Lq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ta || t(n) && e("serverVariable", n) && r("object", n)), qq = Y(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fa || t(n) && e("mediaType", n) && r("object", n)), Vq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: Kd,
  isCallbackElement: bq,
  isComponentsElement: Eq,
  isContactElement: Sq,
  isExampleElement: xq,
  isExternalDocumentationElement: Oq,
  isHeaderElement: wq,
  isInfoElement: Aq,
  isJsonSchemaDialectElement: _A,
  isLicenseElement: jq,
  isLinkElement: Pq,
  isMediaTypeElement: qq,
  isOpenApi3_1Element: CA,
  isOpenapiElement: $q,
  isOperationElement: IA,
  isParameterElement: Rq,
  isPathItemElement: nn,
  isPathItemElementExternal: Tq,
  isPathsElement: _q,
  isReferenceElement: yn,
  isReferenceElementExternal: Cq,
  isRequestBodyElement: Iq,
  isResponseElement: Mq,
  isResponsesElement: kq,
  isSchemaElement: Lt,
  isSecurityRequirementElement: Nq,
  isSecuritySchemeElement: Fq,
  isServerElement: Dq,
  isServerVariableElement: Lq
}, Symbol.toStringTag, { value: "Module" })), Bq = (t) => {
  const e = t.reduce((r, n, s) => {
    if (Xt(n)) {
      const i = String(I(n.key));
      r.push(i);
    } else if (Ge(t[s - 2])) {
      const i = String(t[s - 2].content.indexOf(n));
      r.push(i);
    }
    return r;
  }, []);
  return NO(e);
}, MA = () => {
  const t = jh(Jd);
  return {
    predicates: {
      ...Vq,
      isElement: Me,
      isStringElement: he,
      isArrayElement: Ge,
      isObjectElement: Oe,
      isMemberElement: Xt,
      isServersElement: kw,
      includesClasses: hs,
      hasElementSourceMap: zx
    },
    ancestorLineageToJSONPointer: Bq,
    namespace: t
  };
};
class Uq extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Dr(), this.specPath = J(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, W.prototype.ObjectElement.call(this, e);
  }
}
const Jq = j.visitors.document.objects.Info.$visitor;
class Hq extends Jq {
  constructor(e) {
    super(e), this.element = new ca();
  }
}
const Gq = j.visitors.document.objects.Contact.$visitor;
class Kq extends Gq {
  constructor(e) {
    super(e), this.element = new sa();
  }
}
const zq = j.visitors.document.objects.License.$visitor;
class Wq extends zq {
  constructor(e) {
    super(e), this.element = new ua();
  }
}
const Yq = j.visitors.document.objects.Link.$visitor;
class Xq extends Yq {
  constructor(e) {
    super(e), this.element = new la();
  }
}
class Qq extends M(Ht, N) {
  StringElement(e) {
    const r = new mn(I(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, Z;
  }
}
const Zq = j.visitors.document.objects.Server.$visitor;
class eV extends Zq {
  constructor(e) {
    super(e), this.element = new Ra();
  }
}
const tV = j.visitors.document.objects.ServerVariable.$visitor;
class rV extends tV {
  constructor(e) {
    super(e), this.element = new Ta();
  }
}
const nV = j.visitors.document.objects.MediaType.$visitor;
class sV extends nV {
  constructor(e) {
    super(e), this.element = new fa();
  }
}
const iV = j.visitors.document.objects.SecurityRequirement.$visitor;
class oV extends iV {
  constructor(e) {
    super(e), this.element = new Pa();
  }
}
const aV = j.visitors.document.objects.Components.$visitor;
class cV extends aV {
  constructor(e) {
    super(e), this.element = new na();
  }
}
const uV = j.visitors.document.objects.Tag.$visitor;
class lV extends uV {
  constructor(e) {
    super(e), this.element = new Bd();
  }
}
const fV = j.visitors.document.objects.Reference.$visitor;
class pV extends fV {
  constructor(e) {
    super(e), this.element = new Lr();
  }
}
const hV = j.visitors.document.objects.Parameter.$visitor;
class dV extends hV {
  constructor(e) {
    super(e), this.element = new pa();
  }
}
const mV = j.visitors.document.objects.Header.$visitor;
class yV extends mV {
  constructor(e) {
    super(e), this.element = new aa();
  }
}
class gV extends M(W, Pe, N) {
  constructor(e) {
    super(e), this.element = new _r(), this.specPath = J(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = mn.default, this.passingOptionsNames.push("parent");
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = W.prototype.ObjectElement.call(this, e);
    return he(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
  BooleanElement(e) {
    return Re.prototype.BooleanElement.call(this, e);
  }
  /**
   * This function depends on some external context, so we need to make sure this function
   * works even when no context is provided like when directly refracting generic Object Element
   * into Schema Element: `SchemaElement.refract(new ObjectElement({ type: 'object' });`
   */
  get defaultDialectIdentifier() {
    let e;
    return this.openApiSemanticElement !== void 0 && // @ts-ignore
    _A(this.openApiSemanticElement.jsonSchemaDialect) ? e = I(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && he(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = I(this.openApiGenericElement.get("jsonSchemaDialect")) : e = I(this.jsonSchemaDefaultDialect), e;
  }
  handleDialectIdentifier(e) {
    return Re.prototype.handleDialectIdentifier.call(this, e);
  }
  handleSchemaIdentifier(e) {
    return Re.prototype.handleSchemaIdentifier.call(this, e);
  }
}
class vV extends bA {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
let bV = class extends EA {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
};
class EV extends SA {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class SV extends xA {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class xV extends OA {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class OV extends $A {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class wV extends wA {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class AV extends AA {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
const jV = j.visitors.document.objects.Discriminator.$visitor;
class PV extends jV {
  constructor(e) {
    super(e), this.element = new jd(), this.canSupportSpecificationExtensions = !0;
  }
}
const $V = j.visitors.document.objects.XML.$visitor;
class RV extends $V {
  constructor(e) {
    super(e), this.element = new Ud();
  }
}
class TV extends M(K, N) {
  constructor(e) {
    super(e), this.element = new Yo(), this.specPath = J(["document", "objects", "Schema"]);
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(Lt).forEach((n, s) => {
      n.setMetaProperty("schemaName", I(s));
    }), r;
  }
}
class _V extends M(K, N) {
  constructor(e) {
    super(e), this.element = new Hd(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(yn).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const CV = j.visitors.document.objects.Example.$visitor;
class IV extends CV {
  constructor(e) {
    super(e), this.element = new ia();
  }
}
const MV = j.visitors.document.objects.ExternalDocumentation.$visitor;
class kV extends MV {
  constructor(e) {
    super(e), this.element = new oa();
  }
}
const NV = j.visitors.document.objects.Encoding.$visitor;
class FV extends NV {
  constructor(e) {
    super(e), this.element = new Pd();
  }
}
const DV = j.visitors.document.objects.Paths.$visitor;
class LV extends DV {
  constructor(e) {
    super(e), this.element = new ha();
  }
}
const qV = j.visitors.document.objects.RequestBody.$visitor;
class VV extends qV {
  constructor(e) {
    super(e), this.element = new da();
  }
}
const pE = j.visitors.document.objects.Callback.$visitor;
class BV extends pE {
  constructor(e) {
    super(e), this.element = new ra(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = pE.prototype.ObjectElement.call(this, e);
    return this.element.filter(yn).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const UV = j.visitors.document.objects.Response.$visitor;
class JV extends UV {
  constructor(e) {
    super(e), this.element = new ma();
  }
}
const HV = j.visitors.document.objects.Responses.$visitor;
class GV extends HV {
  constructor(e) {
    super(e), this.element = new ya();
  }
}
const KV = j.visitors.document.objects.Operation.$visitor;
class zV extends KV {
  constructor(e) {
    super(e), this.element = new oi();
  }
}
const WV = j.visitors.document.objects.PathItem.$visitor;
class YV extends WV {
  constructor(e) {
    super(e), this.element = new Tr();
  }
}
const XV = j.visitors.document.objects.SecurityScheme.$visitor;
class QV extends XV {
  constructor(e) {
    super(e), this.element = new $a();
  }
}
const ZV = j.visitors.document.objects.OAuthFlows.$visitor;
class e3 extends ZV {
  constructor(e) {
    super(e), this.element = new Rd();
  }
}
const t3 = j.visitors.document.objects.OAuthFlow.$visitor;
class r3 extends t3 {
  constructor(e) {
    super(e), this.element = new $d();
  }
}
class n3 extends M(K, N) {
  constructor(e) {
    super(e), this.element = new Gd(), this.specPath = (r) => ye(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = K.prototype.ObjectElement.call(this, e);
    return this.element.filter(yn).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter(nn).forEach((n, s) => {
      n.setMetaProperty("webhook-name", I(s));
    }), r;
  }
}
const {
  JSONSchema: s3,
  LinkDescription: i3
} = RA.visitors.document.objects, o3 = {
  visitors: {
    value: j.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: Uq,
          fixedFields: {
            openapi: j.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: Qq,
            servers: j.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: n3,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: j.visitors.document.objects.OpenApi.fixedFields.security,
            tags: j.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: Hq,
          fixedFields: {
            title: j.visitors.document.objects.Info.fixedFields.title,
            description: j.visitors.document.objects.Info.fixedFields.description,
            summary: {
              $ref: "#/visitors/value"
            },
            termsOfService: j.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: j.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: Kq,
          fixedFields: {
            name: j.visitors.document.objects.Contact.fixedFields.name,
            url: j.visitors.document.objects.Contact.fixedFields.url,
            email: j.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: Wq,
          fixedFields: {
            name: j.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: j.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: eV,
          fixedFields: {
            url: j.visitors.document.objects.Server.fixedFields.url,
            description: j.visitors.document.objects.Server.fixedFields.description,
            variables: j.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: rV,
          fixedFields: {
            enum: j.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: j.visitors.document.objects.ServerVariable.fixedFields.default,
            description: j.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: cV,
          fixedFields: {
            schemas: TV,
            responses: j.visitors.document.objects.Components.fixedFields.responses,
            parameters: j.visitors.document.objects.Components.fixedFields.parameters,
            examples: j.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: j.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: j.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: j.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: j.visitors.document.objects.Components.fixedFields.links,
            callbacks: j.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: _V
          }
        },
        Paths: {
          $visitor: LV
        },
        PathItem: {
          $visitor: YV,
          fixedFields: {
            $ref: j.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: j.visitors.document.objects.PathItem.fixedFields.summary,
            description: j.visitors.document.objects.PathItem.fixedFields.description,
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
            servers: j.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: j.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: zV,
          fixedFields: {
            tags: j.visitors.document.objects.Operation.fixedFields.tags,
            summary: j.visitors.document.objects.Operation.fixedFields.summary,
            description: j.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: j.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: j.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: j.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: j.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: j.visitors.document.objects.Operation.fixedFields.deprecated,
            security: j.visitors.document.objects.Operation.fixedFields.security,
            servers: j.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: kV,
          fixedFields: {
            description: j.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: j.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: dV,
          fixedFields: {
            name: j.visitors.document.objects.Parameter.fixedFields.name,
            in: j.visitors.document.objects.Parameter.fixedFields.in,
            description: j.visitors.document.objects.Parameter.fixedFields.description,
            required: j.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: j.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: j.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: j.visitors.document.objects.Parameter.fixedFields.style,
            explode: j.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: j.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: j.visitors.document.objects.Parameter.fixedFields.example,
            examples: j.visitors.document.objects.Parameter.fixedFields.examples,
            content: j.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: VV,
          fixedFields: {
            description: j.visitors.document.objects.RequestBody.fixedFields.description,
            content: j.visitors.document.objects.RequestBody.fixedFields.content,
            required: j.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: sV,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: j.visitors.document.objects.MediaType.fixedFields.example,
            examples: j.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: j.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: FV,
          fixedFields: {
            contentType: j.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: j.visitors.document.objects.Encoding.fixedFields.headers,
            style: j.visitors.document.objects.Encoding.fixedFields.style,
            explode: j.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: j.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: GV,
          fixedFields: {
            default: j.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: JV,
          fixedFields: {
            description: j.visitors.document.objects.Response.fixedFields.description,
            headers: j.visitors.document.objects.Response.fixedFields.headers,
            content: j.visitors.document.objects.Response.fixedFields.content,
            links: j.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: BV
        },
        Example: {
          $visitor: IV,
          fixedFields: {
            summary: j.visitors.document.objects.Example.fixedFields.summary,
            description: j.visitors.document.objects.Example.fixedFields.description,
            value: j.visitors.document.objects.Example.fixedFields.value,
            externalValue: j.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: Xq,
          fixedFields: {
            operationRef: j.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: j.visitors.document.objects.Link.fixedFields.operationId,
            parameters: j.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: j.visitors.document.objects.Link.fixedFields.requestBody,
            description: j.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: yV,
          fixedFields: {
            description: j.visitors.document.objects.Header.fixedFields.description,
            required: j.visitors.document.objects.Header.fixedFields.required,
            deprecated: j.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: j.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: j.visitors.document.objects.Header.fixedFields.style,
            explode: j.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: j.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: j.visitors.document.objects.Header.fixedFields.example,
            examples: j.visitors.document.objects.Header.fixedFields.examples,
            content: j.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: lV,
          fixedFields: {
            name: j.visitors.document.objects.Tag.fixedFields.name,
            description: j.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: pV,
          fixedFields: {
            $ref: j.visitors.document.objects.Reference.fixedFields.$ref,
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
          ...i3
        },
        Schema: {
          $visitor: gV,
          fixedFields: {
            ...s3.fixedFields,
            // core vocabulary
            $defs: vV,
            // applicator vocabulary
            allOf: bV,
            anyOf: EV,
            oneOf: SV,
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
            dependentSchemas: xV,
            prefixItems: OV,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: wV,
            patternProperties: AV,
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
          $visitor: PV,
          fixedFields: {
            propertyName: j.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: j.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: RV,
          fixedFields: {
            name: j.visitors.document.objects.XML.fixedFields.name,
            namespace: j.visitors.document.objects.XML.fixedFields.namespace,
            prefix: j.visitors.document.objects.XML.fixedFields.prefix,
            attribute: j.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: j.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: QV,
          fixedFields: {
            type: j.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: j.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: j.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: j.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: j.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: j.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: j.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: e3,
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
          $visitor: r3,
          fixedFields: {
            authorizationUrl: j.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: j.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: j.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: j.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: oV
        }
      },
      extension: {
        $visitor: j.visitors.document.extension.$visitor
      }
    }
  }
}, a3 = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = y.refract(t), s = lO(o3), i = ue(e, s), o = new i({
    specObj: s
  });
  return jt(n, o), No(o.element, r, {
    toolboxCreator: MA,
    visitorOptions: {
      keyMap: Dt,
      nodeTypeGetter: wt
    }
  });
}, se = (t) => (e, r = {}) => a3(e, {
  specPath: t,
  ...r
});
ra.refract = se(["visitors", "document", "objects", "Callback", "$visitor"]);
na.refract = se(["visitors", "document", "objects", "Components", "$visitor"]);
sa.refract = se(["visitors", "document", "objects", "Contact", "$visitor"]);
ia.refract = se(["visitors", "document", "objects", "Example", "$visitor"]);
jd.refract = se(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Pd.refract = se(["visitors", "document", "objects", "Encoding", "$visitor"]);
oa.refract = se(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
aa.refract = se(["visitors", "document", "objects", "Header", "$visitor"]);
ca.refract = se(["visitors", "document", "objects", "Info", "$visitor"]);
mn.refract = se(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
ua.refract = se(["visitors", "document", "objects", "License", "$visitor"]);
la.refract = se(["visitors", "document", "objects", "Link", "$visitor"]);
fa.refract = se(["visitors", "document", "objects", "MediaType", "$visitor"]);
$d.refract = se(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Rd.refract = se(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Td.refract = se(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
Dr.refract = se(["visitors", "document", "objects", "OpenApi", "$visitor"]);
oi.refract = se(["visitors", "document", "objects", "Operation", "$visitor"]);
pa.refract = se(["visitors", "document", "objects", "Parameter", "$visitor"]);
Tr.refract = se(["visitors", "document", "objects", "PathItem", "$visitor"]);
ha.refract = se(["visitors", "document", "objects", "Paths", "$visitor"]);
Lr.refract = se(["visitors", "document", "objects", "Reference", "$visitor"]);
da.refract = se(["visitors", "document", "objects", "RequestBody", "$visitor"]);
ma.refract = se(["visitors", "document", "objects", "Response", "$visitor"]);
ya.refract = se(["visitors", "document", "objects", "Responses", "$visitor"]);
_r.refract = se(["visitors", "document", "objects", "Schema", "$visitor"]);
Pa.refract = se(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
$a.refract = se(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
Ra.refract = se(["visitors", "document", "objects", "Server", "$visitor"]);
Ta.refract = se(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Bd.refract = se(["visitors", "document", "objects", "Tag", "$visitor"]);
Ud.refract = se(["visitors", "document", "objects", "XML", "$visitor"]);
class c3 extends Ts {
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
      const r = unescape(encodeURIComponent(e.toString())), n = btoa(r), s = new Bt();
      if (n.length !== 0) {
        const i = new y.StringElement(n);
        i.classes.push("result"), s.push(i);
      }
      return s;
    } catch (r) {
      throw new ar(`Error parsing "${e.uri}"`, {
        cause: r
      });
    }
  }
}
class u3 extends UI {
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
      throw new pO('"openapi-3-1" dereference strategy is not available.');
    const s = new In(), i = $x(r, {
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
  AbortController: l3,
  AbortSignal: f3
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = l3);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = f3);
class kA extends BI {
  swaggerHTTPClient = _n;
  swaggerHTTPClientConfig;
  constructor({
    swaggerHTTPClient: e = _n,
    swaggerHTTPClientConfig: r = {},
    ...n
  } = {}) {
    super({
      ...n,
      name: "http-swagger-client"
    }), this.swaggerHTTPClient = e, this.swaggerHTTPClientConfig = r;
  }
  getHttpClient() {
    return this.swaggerHTTPClient;
  }
  async read(e) {
    const r = this.getHttpClient(), n = new AbortController(), {
      signal: s
    } = n, i = setTimeout(() => {
      n.abort();
    }, this.timeout), o = this.getHttpClient().withCredentials || this.withCredentials ? "include" : "same-origin", a = this.redirects === 0 ? "error" : "follow", c = this.redirects > 0 ? this.redirects : void 0;
    try {
      return (await r({
        url: e.uri,
        signal: s,
        userFetch: async (f, l) => {
          let d = await fetch(f, l);
          try {
            d.headers.delete("Content-Type");
          } catch {
            d = new Response(d.body, {
              ...d,
              headers: new Headers(d.headers)
            }), d.headers.delete("Content-Type");
          }
          return d;
        },
        credentials: o,
        redirect: a,
        follow: c,
        ...this.swaggerHTTPClientConfig
      })).text.arrayBuffer();
    } catch (u) {
      throw new Rx(`Error downloading "${e.uri}"`, {
        cause: u
      });
    } finally {
      clearTimeout(i);
    }
  }
}
class NA extends Ts {
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
      throw new ar("json-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new Bt(), n = e.toString();
    if (this.allowEmpty && n.trim() === "")
      return r;
    try {
      const s = fO(JSON.parse(n));
      return s.classes.push("result"), r.push(s), r;
    } catch (s) {
      throw new ar(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class FA extends Ts {
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
        return Tn.load(e.toString(), {
          schema: ki
        }), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new ar("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new Bt(), n = e.toString();
    try {
      const s = Tn.load(n, {
        schema: ki
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = fO(s);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new ar(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class DA extends Ts {
  detectionRegExp = /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/;
  constructor(e = {}) {
    super({
      name: "openapi-json-3-1-swagger-client",
      mediaTypes: new Dh(...kn.filterByFormat("generic"), ...kn.filterByFormat("json")),
      ...e
    });
  }
  async canParse(e) {
    const r = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), n = this.mediaTypes.includes(e.mediaType);
    if (!r) return !1;
    if (n) return !0;
    if (!n)
      try {
        const s = e.toString();
        return JSON.parse(s), this.detectionRegExp.test(s);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new ar("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new Bt(), n = e.toString();
    if (this.allowEmpty && n.trim() === "")
      return r;
    try {
      const s = JSON.parse(n), i = Dr.refract(s, this.refractorOpts);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new ar(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class LA extends Ts {
  detectionRegExp = /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m;
  constructor(e = {}) {
    super({
      name: "openapi-yaml-3-1-swagger-client",
      mediaTypes: new Dh(...kn.filterByFormat("generic"), ...kn.filterByFormat("yaml")),
      ...e
    });
  }
  async canParse(e) {
    const r = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), n = this.mediaTypes.includes(e.mediaType);
    if (!r) return !1;
    if (n) return !0;
    if (!n)
      try {
        const s = e.toString();
        return Tn.load(s), this.detectionRegExp.test(s);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new ar("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new Bt(), n = e.toString();
    try {
      const s = Tn.load(n, {
        schema: ki
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = Dr.refract(s, this.refractorOpts);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new ar(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
const _a = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), Dn = (t) => {
  const e = gh(t);
  return Nr("#", e);
}, p3 = (t) => {
  if (!_a(t))
    throw new KI(t);
  return t;
}, zd = (t, e) => {
  const r = p3(t), n = oO((s) => Lt(s) && I(s.$anchor) === r, e);
  if (lt(n))
    throw new HI(`Evaluation failed on token: "${r}"`);
  return n;
}, qA = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = gh(I(e.$ref)), n = I(e.meta.get("ancestorsSchemaIdentifiers"));
  return `${Bn((i, o) => Ie(i, $s(le(o))), t, [...n, I(e.$ref)])}${r === "#" ? "" : r}`;
}, h3 = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = I(e.meta.get("ancestorsSchemaIdentifiers"));
  return Bn((n, s) => Ie(n, $s(le(s))), t, r);
}, ns = (t) => {
  if (ns.cache.has(t))
    return ns.cache.get(t);
  const e = _r.refract(t);
  return ns.cache.set(t, e), e;
};
ns.cache = /* @__PURE__ */ new WeakMap();
const He = (t) => Kr(t) ? ns(t) : t, Ca = (t, e) => {
  const {
    cache: r
  } = Ca, n = le(t), s = (o) => Lt(o) && typeof o.$id < "u";
  if (!r.has(e)) {
    const o = jI(s, e);
    r.set(e, Array.from(o));
  }
  const i = r.get(e).find((o) => h3(n, o) === n);
  if (lt(i))
    throw new Rh(`Evaluation failed on URI: "${t}"`);
  return _a(Dn(t)) ? zd(Dn(t), i) : kt(i, St(t));
};
Ca.cache = /* @__PURE__ */ new WeakMap();
const Si = jt[Symbol.for("nodejs.util.promisify.custom")], Ne = new Ph(), bt = (t, e, r, n) => {
  Xt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class Ur {
  indirections;
  namespace;
  reference;
  options;
  ancestors;
  refractCache;
  allOfDiscriminatorMapping;
  constructor({
    reference: e,
    namespace: r,
    options: n,
    indirections: s = [],
    ancestors: i = new zf(),
    refractCache: o = /* @__PURE__ */ new Map(),
    allOfDiscriminatorMapping: a = /* @__PURE__ */ new Map()
  }) {
    this.indirections = s, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new zf(...i), this.refractCache = o, this.allOfDiscriminatorMapping = a;
  }
  toBaseURI(e) {
    return Ie(this.reference.uri, $s(le(e)));
  }
  async toReference(e) {
    if (this.reference.depth >= this.options.resolve.maxDepth)
      throw new zI(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    const r = this.toBaseURI(e), {
      refSet: n
    } = this.reference;
    if (n.has(r))
      return n.find(mx(r, "uri"));
    const s = await R_(Mt(r), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: "text/plain"
      }
    }), i = new ir({
      uri: r,
      value: H(s),
      depth: this.reference.depth + 1
    });
    if (n.add(i), this.options.dereference.immutable) {
      const o = new ir({
        uri: `immutable://${r}`,
        value: s,
        depth: this.reference.depth + 1
      });
      n.add(o);
    }
    return i;
  }
  toAncestorLineage(e) {
    const r = new Set(e.filter(Me));
    return [new zf(...this.ancestors, r), r];
  }
  OpenApi3_1Element = {
    leave: (e, r, n, s, i, o) => {
      var a;
      if (!((a = this.options.dereference.strategyOpts["openapi-3-1"]) !== null && a !== void 0 && a.dereferenceDiscriminatorMapping))
        return;
      const c = Ce(e);
      return c.setMetaProperty("allOfDiscriminatorMapping", Object.fromEntries(this.allOfDiscriminatorMapping)), o.replaceWith(c, bt), n ? void 0 : c;
    }
  };
  async ReferenceElement(e, r, n, s, i, o) {
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), u = this.toBaseURI(I(e.$ref)), f = le(this.reference.uri) === u, l = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && l)
      return !1;
    const d = await this.toReference(I(e.$ref)), p = Ie(u, I(e.$ref));
    this.indirections.push(e);
    const m = St(p);
    let h = kt(d.value.result, m);
    if (h.id = Ne.identify(h), Kr(h)) {
      const O = I(e.meta.get("referenced-element")), A = `${O}-${I(Ne.identify(h))}`;
      this.refractCache.has(A) ? h = this.refractCache.get(A) : ye(h) ? (h = Lr.refract(h), h.setMetaProperty("referenced-element", O), this.refractCache.set(A, h)) : (h = this.namespace.getElementClass(O).refract(h), this.refractCache.set(A, h));
    }
    if (e === h)
      throw new ve("Recursive Reference Object detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new Pn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(h)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ve("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var v, b;
        const O = new y.RefElement(h.id, {
          type: "reference",
          uri: d.uri,
          $ref: I(e.$ref)
        }), $ = ((v = (b = this.options.dereference.strategyOpts["openapi-3-1"]) === null || b === void 0 ? void 0 : b.circularReplacer) !== null && v !== void 0 ? v : this.options.dereference.circularReplacer)(O);
        return o.replaceWith($, bt), n ? !1 : $;
      }
    }
    const g = le(d.refSet.rootRef.uri) !== d.uri, S = ["error", "replace"].includes(this.options.dereference.circular);
    if ((l || g || yn(h) || S) && !a.includesCycle(h)) {
      c.add(e);
      const O = new Ur({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a,
        allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
      });
      h = await Si(h, O, {
        keyMap: Dt,
        nodeTypeGetter: wt
      }), c.delete(e);
    }
    this.indirections.pop();
    const E = Ce(h);
    return E.setMetaProperty("id", Ne.generateId()), E.setMetaProperty("ref-fields", {
      $ref: I(e.$ref),
      // @ts-ignore
      description: I(e.description),
      // @ts-ignore
      summary: I(e.summary)
    }), E.setMetaProperty("ref-origin", d.uri), E.setMetaProperty("ref-referencing-element-id", H(Ne.identify(e))), Oe(h) && Oe(E) && (e.hasKey("description") && "description" in h && (E.remove("description"), E.set("description", e.get("description"))), e.hasKey("summary") && "summary" in h && (E.remove("summary"), E.set("summary", e.get("summary")))), o.replaceWith(E, bt), n ? !1 : E;
  }
  async PathItemElement(e, r, n, s, i, o) {
    if (!he(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), u = this.toBaseURI(I(e.$ref)), f = le(this.reference.uri) === u, l = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && l)
      return;
    const d = await this.toReference(I(e.$ref)), p = Ie(u, I(e.$ref));
    this.indirections.push(e);
    const m = St(p);
    let h = kt(d.value.result, m);
    if (h.id = Ne.identify(h), Kr(h)) {
      const E = `path-item-${I(Ne.identify(h))}`;
      this.refractCache.has(E) ? h = this.refractCache.get(E) : (h = Tr.refract(h), this.refractCache.set(E, h));
    }
    if (e === h)
      throw new ve("Recursive Path Item Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new Pn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(h)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ve("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var v, b;
        const E = new y.RefElement(h.id, {
          type: "path-item",
          uri: d.uri,
          $ref: I(e.$ref)
        }), A = ((v = (b = this.options.dereference.strategyOpts["openapi-3-1"]) === null || b === void 0 ? void 0 : b.circularReplacer) !== null && v !== void 0 ? v : this.options.dereference.circularReplacer)(E);
        return o.replaceWith(A, bt), n ? !1 : A;
      }
    }
    const g = le(d.refSet.rootRef.uri) !== d.uri, S = ["error", "replace"].includes(this.options.dereference.circular);
    if ((l || g || nn(h) && he(h.$ref) || S) && !a.includesCycle(h)) {
      c.add(e);
      const E = new Ur({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a,
        allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
      });
      h = await Si(h, E, {
        keyMap: Dt,
        nodeTypeGetter: wt
      }), c.delete(e);
    }
    if (this.indirections.pop(), nn(h)) {
      const E = new Tr([...h.content], H(h.meta), H(h.attributes));
      E.setMetaProperty("id", Ne.generateId()), e.forEach((O, A, $) => {
        E.remove(I(A)), E.content.push($);
      }), E.remove("$ref"), E.setMetaProperty("ref-fields", {
        $ref: I(e.$ref)
      }), E.setMetaProperty("ref-origin", d.uri), E.setMetaProperty("ref-referencing-element-id", H(Ne.identify(e))), h = E;
    }
    return o.replaceWith(h, bt), n ? void 0 : h;
  }
  async LinkElement(e, r, n, s, i, o) {
    if (!he(e.operationRef) && !he(e.operationId))
      return;
    if (he(e.operationRef) && he(e.operationId))
      throw new ve("LinkElement operationRef and operationId fields are mutually exclusive.");
    let a;
    if (he(e.operationRef)) {
      var c;
      const f = St(I(e.operationRef)), l = this.toBaseURI(I(e.operationRef)), d = le(this.reference.uri) === l, p = !d;
      if (!this.options.resolve.internal && d || !this.options.resolve.external && p)
        return;
      const m = await this.toReference(I(e.operationRef));
      if (a = kt(m.value.result, f), Kr(a)) {
        const v = `operation-${I(Ne.identify(a))}`;
        this.refractCache.has(v) ? a = this.refractCache.get(v) : (a = oi.refract(a), this.refractCache.set(v, a));
      }
      a = Ce(a), a.setMetaProperty("ref-origin", m.uri);
      const h = Ce(e);
      return (c = h.operationRef) === null || c === void 0 || c.meta.set("operation", a), o.replaceWith(h, bt), n ? void 0 : h;
    }
    if (he(e.operationId)) {
      var u;
      const f = I(e.operationId), l = await this.toReference(Mt(this.reference.uri));
      if (a = oO((p) => IA(p) && Me(p.operationId) && p.operationId.equals(f), l.value.result), lt(a))
        throw new ve(`OperationElement(operationId=${f}) not found.`);
      const d = Ce(e);
      return (u = d.operationId) === null || u === void 0 || u.meta.set("operation", a), o.replaceWith(d, bt), n ? void 0 : d;
    }
  }
  async ExampleElement(e, r, n, s, i, o) {
    if (!he(e.externalValue))
      return;
    if (e.hasKey("value") && he(e.externalValue))
      throw new ve("ExampleElement value and externalValue fields are mutually exclusive.");
    const a = this.toBaseURI(I(e.externalValue)), c = le(this.reference.uri) === a, u = !c;
    if (!this.options.resolve.internal && c || !this.options.resolve.external && u)
      return;
    const f = await this.toReference(I(e.externalValue)), l = Ce(f.value.result);
    l.setMetaProperty("ref-origin", f.uri);
    const d = Ce(e);
    return d.value = l, o.replaceWith(d, bt), n ? void 0 : d;
  }
  async MemberElement(e, r, n, s, i, o) {
    var a;
    const c = i[i.length - 1];
    if (!Oe(c) || !c.classes.contains("discriminator-mapping"))
      return;
    if (!((a = this.options.dereference.strategyOpts["openapi-3-1"]) !== null && a !== void 0 && a.dereferenceDiscriminatorMapping) || !he(e.key) || !he(e.value) || this.indirections.includes(e))
      return !1;
    this.indirections.push(e);
    const [u, f] = this.toAncestorLineage([...i, n]), l = [...f].findLast(Lt), d = H(l.getMetaProperty("ancestorsSchemaIdentifiers")), p = I(e.value), h = /^[a-zA-Z0-9\\.\\-_]+$/.test(p) ? `#/components/schemas/${p}` : p, v = new _r({
      $ref: h
    });
    v.setMetaProperty("ancestorsSchemaIdentifiers", d), f.add(v);
    const b = new Ur({
      reference: this.reference,
      namespace: this.namespace,
      indirections: [...this.indirections],
      options: this.options,
      refractCache: this.refractCache,
      ancestors: u,
      allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
    }), g = await Si(v, b, {
      keyMap: Dt,
      nodeTypeGetter: wt
    });
    f.delete(v), this.indirections.pop();
    const S = Ce(e);
    return S.value.setMetaProperty("ref-schema", g), o.replaceWith(S, bt), n ? void 0 : S;
  }
  async SchemaElement(e, r, n, s, i, o) {
    if (!he(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]);
    let u = await this.toReference(Mt(this.reference.uri)), {
      uri: f
    } = u;
    const l = qA(f, e), d = le(l), p = new ps({
      uri: d
    }), m = _T((T) => T.canRead(p), this.options.resolve.resolvers), h = !m;
    let v = le(this.reference.uri) === l, b = !v;
    this.indirections.push(e);
    let g;
    try {
      if (m || h) {
        f = this.toBaseURI(l);
        const T = l, x = He(u.value.result);
        if (g = Ca(T, x), g = He(g), g.id = Ne.identify(g), !this.options.resolve.internal && v || !this.options.resolve.external && b)
          return;
      } else {
        if (f = this.toBaseURI(l), v = le(this.reference.uri) === f, b = !v, !this.options.resolve.internal && v || !this.options.resolve.external && b)
          return;
        u = await this.toReference(Mt(l));
        const T = St(l), x = He(u.value.result);
        g = kt(x, T), g = He(g), g.id = Ne.identify(g);
      }
    } catch (T) {
      if (h && T instanceof Rh)
        if (_a(Dn(l))) {
          if (v = le(this.reference.uri) === f, b = !v, !this.options.resolve.internal && v || !this.options.resolve.external && b)
            return;
          u = await this.toReference(Mt(l));
          const x = Dn(l), P = He(u.value.result);
          g = zd(x, P), g = He(g), g.id = Ne.identify(g);
        } else {
          if (f = this.toBaseURI(l), v = le(this.reference.uri) === f, b = !v, !this.options.resolve.internal && v || !this.options.resolve.external && b)
            return;
          u = await this.toReference(Mt(l));
          const x = St(l), P = He(u.value.result);
          g = kt(P, x), g = He(g), g.id = Ne.identify(g);
        }
      else
        throw T;
    }
    if (e === g)
      throw new ve("Recursive Schema Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new Pn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(g)) {
      if (u.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ve("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var S, E;
        const T = new y.RefElement(g.id, {
          type: "json-schema",
          uri: u.uri,
          $ref: I(e.$ref)
        }), P = ((S = (E = this.options.dereference.strategyOpts["openapi-3-1"]) === null || E === void 0 ? void 0 : E.circularReplacer) !== null && S !== void 0 ? S : this.options.dereference.circularReplacer)(T);
        return o.replaceWith(P, bt), n ? !1 : P;
      }
    }
    const O = le(u.refSet.rootRef.uri) !== u.uri, A = ["error", "replace"].includes(this.options.dereference.circular);
    if ((b || O || Lt(g) && he(g.$ref) || A) && !a.includesCycle(g)) {
      c.add(e);
      const T = new Ur({
        reference: u,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a,
        allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
      });
      g = await Si(g, T, {
        keyMap: Dt,
        nodeTypeGetter: wt
      }), c.delete(e);
    }
    if (this.indirections.pop(), Kd(g)) {
      const T = H(g);
      return T.setMetaProperty("id", Ne.generateId()), T.setMetaProperty("ref-fields", {
        $ref: I(e.$ref),
        $refBaseURI: l
      }), T.setMetaProperty("ref-origin", u.uri), T.setMetaProperty("ref-referencing-element-id", H(Ne.identify(e))), o.replaceWith(T, bt), n ? !1 : T;
    }
    if (Lt(g)) {
      var $;
      const T = new _r([...g.content], H(g.meta), H(g.attributes));
      if (T.setMetaProperty("id", Ne.generateId()), e.forEach((x, P, R) => {
        T.remove(I(P)), T.content.push(R);
      }), T.remove("$ref"), T.setMetaProperty("ref-fields", {
        $ref: I(e.$ref),
        $refBaseURI: l
      }), T.setMetaProperty("ref-origin", u.uri), T.setMetaProperty("ref-referencing-element-id", H(Ne.identify(e))), ($ = this.options.dereference.strategyOpts["openapi-3-1"]) !== null && $ !== void 0 && $.dereferenceDiscriminatorMapping) {
        var w;
        const x = i[i.length - 1], P = [...c].findLast(Lt), R = P?.getMetaProperty("schemaName"), q = I(T.getMetaProperty("schemaName"));
        if (q && R && // @ts-ignore
        x !== null && x !== void 0 && (w = x.classes) !== null && w !== void 0 && w.contains("json-schema-allOf")) {
          var C;
          const F = (C = this.allOfDiscriminatorMapping.get(q)) !== null && C !== void 0 ? C : [];
          F.push(P), this.allOfDiscriminatorMapping.set(q, F);
        }
      }
      g = T;
    }
    return o.replaceWith(g, bt), n ? void 0 : g;
  }
}
const d3 = jt[Symbol.for("nodejs.util.promisify.custom")];
class m3 extends JI {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canDereference(e) {
    var r;
    return e.mediaType !== "text/plain" ? kn.includes(e.mediaType) : CA((r = e.parseResult) === null || r === void 0 ? void 0 : r.result);
  }
  async dereference(e, r) {
    var n;
    const s = jh(Jd), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new In(), o = new In();
    let a = i, c;
    i.has(e.uri) ? c = i.find(mx(e.uri, "uri")) : (c = new ir({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((l) => new ir({
      ...l,
      value: H(l.value)
    })).forEach((l) => o.add(l)), c = o.find((l) => l.uri === e.uri), a = o);
    const u = new Ur({
      reference: c,
      namespace: s,
      options: r
    }), f = await d3(a.rootRef.value, u, {
      keyMap: Dt,
      nodeTypeGetter: wt
    });
    return r.dereference.immutable && o.refs.filter((l) => l.uri.startsWith("immutable://")).map((l) => new ir({
      ...l,
      uri: l.uri.replace(/^immutable:\/\//, "")
    })).forEach((l) => i.add(l)), r.dereference.refSet === null && i.clean(), o.clean(), f;
  }
}
const y3 = (t) => t.slice(2), It = (t) => {
  const e = y3(t);
  return e.reduce((r, n, s) => {
    if (Xt(n)) {
      const i = String(I(n.key));
      r.push(i);
    } else if (Ge(e[s - 2])) {
      const i = e[s - 2].content.indexOf(n);
      r.push(i);
    }
    return r;
  }, []);
};
class g3 {
  modelPropertyMacro;
  options;
  SchemaElement = {
    leave: (e, r, n, s, i) => {
      typeof e.properties > "u" || Oe(e.properties) && e.properties.forEach((o) => {
        if (Oe(o))
          try {
            const u = this.modelPropertyMacro(I(o));
            o.set("default", u);
          } catch (u) {
            var a, c;
            const f = new Error(u, {
              cause: u
            });
            f.fullPath = [...It([...i, n, e]), "properties"], (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, f);
          }
      });
    }
  };
  constructor({
    modelPropertyMacro: e,
    options: r
  }) {
    this.modelPropertyMacro = e, this.options = r;
  }
}
class v3 {
  options;
  SchemaElement = {
    leave(e, r, n, s, i) {
      if (typeof e.allOf > "u") return;
      if (!Ge(e.allOf)) {
        var o, a;
        const l = new TypeError("allOf must be an array");
        l.fullPath = [...It([...i, n, e]), "allOf"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, l);
        return;
      }
      if (e.allOf.isEmpty) {
        e.remove("allOf");
        return;
      }
      if (!e.allOf.content.every(Lt)) {
        var u, f;
        const l = new TypeError("Elements in allOf must be objects");
        l.fullPath = [...It([...i, n, e]), "allOf"], (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (f = u.push) === null || f === void 0 || f.call(u, l);
        return;
      }
      for (; e.hasKey("allOf"); ) {
        const {
          allOf: l
        } = e;
        e.remove("allOf");
        const d = $r.all([...l.content, e], {
          customMerge: (p) => I(p) === "enum" ? (m, h) => {
            if (hs(["json-schema-enum"], m) && hs(["json-schema-enum"], h)) {
              const v = (g, S) => Ge(g) || Ge(S) || Oe(g) || Oe(S) ? !1 : g.equals(I(S)), b = Ce(m);
              return b.content = vx(v)([...m.content, ...h.content]), b;
            }
            return $r(m, h);
          } : $r
        });
        if (e.hasKey("$$ref") || d.remove("$$ref"), e.hasKey("example")) {
          const p = d.getMember("example");
          p && (p.value = e.get("example"));
        }
        if (e.hasKey("examples")) {
          const p = d.getMember("examples");
          p && (p.value = e.get("examples"));
        }
        e.content = d.content;
      }
    }
  };
  constructor({
    options: e
  }) {
    this.options = e;
  }
}
class b3 {
  parameterMacro;
  options;
  #e;
  OperationElement = {
    enter: (e) => {
      this.#e = e;
    },
    leave: () => {
      this.#e = void 0;
    }
  };
  ParameterElement = {
    leave: (e, r, n, s, i) => {
      const o = this.#e ? I(this.#e) : null, a = I(e);
      try {
        const f = this.parameterMacro(o, a);
        e.set("default", f);
      } catch (f) {
        var c, u;
        const l = new Error(f, {
          cause: f
        });
        l.fullPath = It([...i, n]), (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, l);
      }
    }
  };
  constructor({
    parameterMacro: e,
    options: r
  }) {
    this.parameterMacro = e, this.options = r;
  }
}
const xi = (t) => {
  if (t.cause == null) return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
};
class E3 extends Ss {
}
const {
  wrapError: Zf
} = _h, ep = jt[Symbol.for("nodejs.util.promisify.custom")], Et = new Ph(), qr = (t, e, r, n) => {
  Xt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class ss extends Ur {
  useCircularStructures;
  allowMetaPatches;
  basePath;
  constructor({
    allowMetaPatches: e = !0,
    useCircularStructures: r = !1,
    basePath: n = null,
    ...s
  }) {
    super(s), this.allowMetaPatches = e, this.useCircularStructures = r, this.basePath = n;
  }
  async ReferenceElement(e, r, n, s, i, o) {
    try {
      if (this.indirections.includes(e))
        return !1;
      const [p, m] = this.toAncestorLineage([...i, n]), h = this.toBaseURI(I(e.$ref)), v = le(this.reference.uri) === h, b = !v;
      if (!this.options.resolve.internal && v || !this.options.resolve.external && b)
        return !1;
      const g = await this.toReference(I(e.$ref)), S = Ie(h, I(e.$ref));
      this.indirections.push(e);
      const E = St(S);
      let O = kt(g.value.result, E);
      if (O.id = Et.identify(O), Kr(O)) {
        const C = I(e.meta.get("referenced-element")), T = `${C}-${I(Et.identify(O))}`;
        this.refractCache.has(T) ? O = this.refractCache.get(T) : ye(O) ? (O = Lr.refract(O), O.setMetaProperty("referenced-element", C), this.refractCache.set(T, O)) : (O = this.namespace.getElementClass(C).refract(O), this.refractCache.set(T, O));
      }
      if (e === O)
        throw new ve("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Pn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (p.includes(O)) {
        if (g.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ve("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var a, c;
          const C = new y.RefElement(O.id, {
            type: "reference",
            uri: g.uri,
            $ref: I(e.$ref),
            baseURI: S,
            referencingElement: e
          }), x = ((a = (c = this.options.dereference.strategyOpts["openapi-3-1"]) === null || c === void 0 ? void 0 : c.circularReplacer) !== null && a !== void 0 ? a : this.options.dereference.circularReplacer)(C);
          return o.replaceWith(C, qr), n ? !1 : x;
        }
      }
      const A = le(g.refSet.rootRef.uri) !== g.uri, $ = ["error", "replace"].includes(this.options.dereference.circular);
      if ((b || A || yn(O) || $) && !p.includesCycle(O)) {
        var u;
        m.add(e);
        const C = new ss({
          reference: g,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: p,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (u = this.basePath) !== null && u !== void 0 ? u : [...It([...i, n, e]), "$ref"]
        });
        O = await ep(O, C, {
          keyMap: Dt,
          nodeTypeGetter: wt
        }), m.delete(e);
      }
      this.indirections.pop();
      const w = Ce(O);
      if (w.setMetaProperty("ref-fields", {
        $ref: I(e.$ref),
        description: I(e.description),
        summary: I(e.summary)
      }), w.setMetaProperty("ref-origin", g.uri), w.setMetaProperty("ref-referencing-element-id", H(Et.identify(e))), Oe(O) && (e.hasKey("description") && "description" in O && (w.remove("description"), w.set("description", e.get("description"))), e.hasKey("summary") && "summary" in O && (w.remove("summary"), w.set("summary", e.get("summary")))), this.allowMetaPatches && Oe(w) && !w.hasKey("$$ref")) {
        const C = Ie(h, S);
        w.set("$$ref", C);
      }
      return o.replaceWith(w, qr), n ? !1 : w;
    } catch (p) {
      var f, l, d;
      const m = xi(p), h = Zf(m, {
        baseDoc: this.reference.uri,
        $ref: I(e.$ref),
        pointer: St(I(e.$ref)),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...It([...i, n, e]), "$ref"]
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (d = l.push) === null || d === void 0 || d.call(l, h);
      return;
    }
  }
  async PathItemElement(e, r, n, s, i, o) {
    try {
      if (!he(e.$ref))
        return;
      if (this.indirections.includes(e) || hs(["cycle"], e.$ref))
        return !1;
      const [p, m] = this.toAncestorLineage([...i, n]), h = this.toBaseURI(I(e.$ref)), v = le(this.reference.uri) === h, b = !v;
      if (!this.options.resolve.internal && v || !this.options.resolve.external && b)
        return;
      const g = await this.toReference(I(e.$ref)), S = Ie(h, I(e.$ref));
      this.indirections.push(e);
      const E = St(S);
      let O = kt(g.value.result, E);
      if (O.id = Et.identify(O), Kr(O)) {
        const w = `path-item-${I(Et.identify(O))}`;
        this.refractCache.has(w) ? O = this.refractCache.get(w) : (O = Tr.refract(O), this.refractCache.set(w, O));
      }
      if (e === O)
        throw new ve("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Pn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (p.includes(O)) {
        if (g.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ve("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var a, c;
          const w = new y.RefElement(O.id, {
            type: "path-item",
            uri: g.uri,
            $ref: I(e.$ref),
            baseURI: S,
            referencingElement: e
          }), T = ((a = (c = this.options.dereference.strategyOpts["openapi-3-1"]) === null || c === void 0 ? void 0 : c.circularReplacer) !== null && a !== void 0 ? a : this.options.dereference.circularReplacer)(w);
          return o.replaceWith(w, qr), n ? !1 : T;
        }
      }
      const A = le(g.refSet.rootRef.uri) !== g.uri, $ = ["error", "replace"].includes(this.options.dereference.circular);
      if ((b || A || nn(O) && he(O.$ref) || $) && !p.includesCycle(O)) {
        var u;
        m.add(e);
        const w = new ss({
          reference: g,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: p,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (u = this.basePath) !== null && u !== void 0 ? u : [...It([...i, n, e]), "$ref"]
        });
        O = await ep(O, w, {
          keyMap: Dt,
          nodeTypeGetter: wt
        }), m.delete(e);
      }
      if (this.indirections.pop(), nn(O)) {
        const w = new Tr([...O.content], H(O.meta), H(O.attributes));
        if (e.forEach((C, T, x) => {
          w.remove(I(T)), w.content.push(x);
        }), w.remove("$ref"), w.setMetaProperty("ref-fields", {
          $ref: I(e.$ref)
        }), w.setMetaProperty("ref-origin", g.uri), w.setMetaProperty("ref-referencing-element-id", H(Et.identify(e))), this.allowMetaPatches && typeof w.get("$$ref") > "u") {
          const C = Ie(h, S);
          w.set("$$ref", C);
        }
        O = w;
      }
      return o.replaceWith(O, qr), n ? void 0 : O;
    } catch (p) {
      var f, l, d;
      const m = xi(p), h = Zf(m, {
        baseDoc: this.reference.uri,
        $ref: I(e.$ref),
        pointer: St(I(e.$ref)),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...It([...i, n, e]), "$ref"]
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (d = l.push) === null || d === void 0 || d.call(l, h);
      return;
    }
  }
  async SchemaElement(e, r, n, s, i, o) {
    try {
      if (!he(e.$ref))
        return;
      if (this.indirections.includes(e))
        return !1;
      const [p, m] = this.toAncestorLineage([...i, n]);
      let h = await this.toReference(Mt(this.reference.uri)), {
        uri: v
      } = h;
      const b = qA(v, e), g = le(b), S = new ps({
        uri: g
      }), E = !this.options.resolve.resolvers.some((x) => x.canRead(S)), O = !E;
      let A = le(this.reference.uri) === b, $ = !A;
      this.indirections.push(e);
      let w;
      try {
        if (E || O) {
          v = this.toBaseURI(b);
          const x = b, P = He(h.value.result);
          if (w = Ca(x, P), w = He(w), w.id = Et.identify(w), !this.options.resolve.internal && A || !this.options.resolve.external && $)
            return;
        } else {
          if (v = this.toBaseURI(b), A = le(this.reference.uri) === v, $ = !A, !this.options.resolve.internal && A || !this.options.resolve.external && $)
            return;
          h = await this.toReference(Mt(b));
          const x = St(b), P = He(h.value.result);
          w = kt(P, x), w = He(w), w.id = Et.identify(w);
        }
      } catch (x) {
        if (O && x instanceof Rh)
          if (_a(Dn(b))) {
            if (A = le(this.reference.uri) === v, $ = !A, !this.options.resolve.internal && A || !this.options.resolve.external && $)
              return;
            h = await this.toReference(Mt(b));
            const P = Dn(b), R = He(h.value.result);
            w = zd(P, R), w = He(w), w.id = Et.identify(w);
          } else {
            if (v = this.toBaseURI(I(b)), A = le(this.reference.uri) === v, $ = !A, !this.options.resolve.internal && A || !this.options.resolve.external && $)
              return;
            h = await this.toReference(Mt(b));
            const P = St(b), R = He(h.value.result);
            w = kt(R, P), w = He(w), w.id = Et.identify(w);
          }
        else
          throw x;
      }
      if (e === w)
        throw new ve("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Pn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (p.includes(w)) {
        if (h.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ve("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var a, c;
          const x = new y.RefElement(w.id, {
            type: "json-schema",
            uri: h.uri,
            $ref: I(e.$ref),
            baseURI: Ie(v, b),
            referencingElement: e
          }), R = ((a = (c = this.options.dereference.strategyOpts["openapi-3-1"]) === null || c === void 0 ? void 0 : c.circularReplacer) !== null && a !== void 0 ? a : this.options.dereference.circularReplacer)(x);
          return o.replaceWith(R, qr), n ? !1 : R;
        }
      }
      const C = le(h.refSet.rootRef.uri) !== h.uri, T = ["error", "replace"].includes(this.options.dereference.circular);
      if (($ || C || Lt(w) && he(w.$ref) || T) && !p.includesCycle(w)) {
        var u;
        m.add(e);
        const x = new ss({
          reference: h,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: p,
          basePath: (u = this.basePath) !== null && u !== void 0 ? u : [...It([...i, n, e]), "$ref"]
        });
        w = await ep(w, x, {
          keyMap: Dt,
          nodeTypeGetter: wt
        }), m.delete(e);
      }
      if (this.indirections.pop(), Kd(w)) {
        const x = H(w);
        return x.setMetaProperty("ref-fields", {
          $ref: I(e.$ref)
        }), x.setMetaProperty("ref-origin", h.uri), x.setMetaProperty("ref-referencing-element-id", H(Et.identify(e))), o.replaceWith(x, qr), n ? !1 : x;
      }
      if (Lt(w)) {
        const x = new _r([...w.content], H(w.meta), H(w.attributes));
        if (e.forEach((P, R, q) => {
          x.remove(I(R)), x.content.push(q);
        }), x.remove("$ref"), x.setMetaProperty("ref-fields", {
          $ref: I(e.$ref)
        }), x.setMetaProperty("ref-origin", h.uri), x.setMetaProperty("ref-referencing-element-id", H(Et.identify(e))), this.allowMetaPatches && typeof x.get("$$ref") > "u") {
          const P = Ie(v, b);
          x.set("$$ref", P);
        }
        w = x;
      }
      return o.replaceWith(w, qr), n ? void 0 : w;
    } catch (p) {
      var f, l, d;
      const m = xi(p), h = new E3(`Could not resolve reference: ${m.message}`, {
        baseDoc: this.reference.uri,
        $ref: I(e.$ref),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...It([...i, n, e]), "$ref"],
        cause: m
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (d = l.push) === null || d === void 0 || d.call(l, h);
      return;
    }
  }
  // eslint-disable-next-line class-methods-use-this
  async LinkElement() {
  }
  async ExampleElement(e, r, n, s, i, o) {
    try {
      return await super.ExampleElement(e, r, n, s, i, o);
    } catch (f) {
      var a, c, u;
      const l = xi(f), d = Zf(l, {
        baseDoc: this.reference.uri,
        externalValue: I(e.externalValue),
        fullPath: (a = this.basePath) !== null && a !== void 0 ? a : [...It([...i, n, e]), "externalValue"]
      });
      (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, d);
      return;
    }
  }
}
const S3 = Qe[Symbol.for("nodejs.util.promisify.custom")];
class x3 {
  constructor({
    parameterMacro: e,
    modelPropertyMacro: r,
    mode: n,
    options: s,
    ...i
  }) {
    const o = [];
    o.push(new ss({
      ...i,
      options: s
    })), typeof r == "function" && o.push(new g3({
      modelPropertyMacro: r,
      options: s
    })), n !== "strict" && o.push(new v3({
      options: s
    })), typeof e == "function" && o.push(new b3({
      parameterMacro: e,
      options: s
    }));
    const a = S3(o, {
      nodeTypeGetter: wt
    });
    Object.assign(this, a);
  }
}
const O3 = jt[Symbol.for("nodejs.util.promisify.custom")];
class VA extends m3 {
  allowMetaPatches;
  parameterMacro;
  modelPropertyMacro;
  mode;
  ancestors;
  constructor({
    allowMetaPatches: e = !1,
    parameterMacro: r = null,
    modelPropertyMacro: n = null,
    mode: s = "non-strict",
    ancestors: i = [],
    ...o
  } = {}) {
    super({
      ...o
    }), this.name = "openapi-3-1-swagger-client", this.allowMetaPatches = e, this.parameterMacro = r, this.modelPropertyMacro = n, this.mode = s, this.ancestors = [...i];
  }
  async dereference(e, r) {
    var n;
    const s = jh(Jd), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new In(), o = new In();
    let a = i, c;
    i.has(e.uri) ? c = i.find((l) => l.uri === e.uri) : (c = new ir({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((l) => new ir({
      ...l,
      value: H(l.value)
    })).forEach((l) => o.add(l)), c = o.find((l) => l.uri === e.uri), a = o);
    const u = new x3({
      reference: c,
      namespace: s,
      options: r,
      allowMetaPatches: this.allowMetaPatches,
      ancestors: this.ancestors,
      modelPropertyMacro: this.modelPropertyMacro,
      mode: this.mode,
      parameterMacro: this.parameterMacro
    }), f = await O3(a.rootRef.value, u, {
      keyMap: Dt,
      nodeTypeGetter: wt
    });
    return r.dereference.immutable && o.refs.filter((l) => l.uri.startsWith("immutable://")).map((l) => new ir({
      ...l,
      uri: l.uri.replace(/^immutable:\/\//, "")
    })).forEach((l) => i.add(l)), r.dereference.refSet === null && i.clean(), o.clean(), f;
  }
}
const w3 = (t) => {
  const e = I(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
  return new y.ObjectElement({
    $ref: e
  }, H(r.meta), H(r.attributes));
}, Ia = async (t) => {
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
    strategies: p
  } = t;
  try {
    const {
      cache: m
    } = Ia, h = p.find((F) => F.match(e)), v = Oo(Ui()) ? Ui() : Ri, b = Fp(t), g = Ie(v, b);
    let S;
    m.has(e) ? S = m.get(e) : (S = Dr.refract(e), S.classes.push("result"), m.set(e, S));
    const E = new Bt([S]), O = NO(o), A = O === "" ? "" : `#${O}`, $ = kt(S, O), w = new ir({
      uri: g,
      value: E
    }), C = new In({
      refs: [w]
    });
    O !== "" && (C.rootRef = void 0);
    const T = [/* @__PURE__ */ new Set([$])], x = [], P = await WI($, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${g}${A}`,
        resolvers: [new kA({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [new u3()]
      },
      parse: {
        mediaType: kn.latest(),
        parsers: [new DA({
          allowEmpty: !1,
          sourceMap: !1
        }), new LA({
          allowEmpty: !1,
          sourceMap: !1
        }), new NA({
          allowEmpty: !1,
          sourceMap: !1
        }), new FA({
          allowEmpty: !1,
          sourceMap: !1
        }), new c3({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [new VA({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: f,
          modelPropertyMacro: l,
          mode: d,
          ancestors: T
        })],
        refSet: C,
        dereferenceOpts: {
          errors: x
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? Px.dereference.circularReplacer : w3
      }
    }), R = MI($, P, S), q = u ? R : h.normalize(R);
    return {
      spec: I(q),
      errors: x
    };
  } catch (m) {
    if (m instanceof zr)
      return {
        spec: e,
        errors: []
      };
    throw m;
  }
};
Ia.cache = /* @__PURE__ */ new WeakMap();
const hE = (t) => {
  if (!Oe(t)) return t;
  const e = [yq({
    operationIdNormalizer: (n, s, i) => _s({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), pq(), hq(), gq(), vq()];
  return No(t, e, {
    toolboxCreator: MA,
    visitorOptions: {
      keyMap: Dt,
      nodeTypeGetter: wt
    }
  });
}, A3 = (t) => (e) => {
  const r = Dr.refract(e);
  r.classes.push("result");
  const n = t(r), s = I(n);
  return Ia.cache.set(s, n), I(n);
}, j3 = {
  name: "openapi-3-1-apidom",
  match(t) {
    return kh(t);
  },
  normalize(t) {
    if (!Me(t) && fe(t) && !t.$$normalized) {
      const e = A3(hE)(t);
      return e.$$normalized = !0, e;
    }
    return Me(t) ? hE(t) : t;
  },
  async resolve(t) {
    return Ia(t);
  }
};
function BA(t, e, r) {
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
function P3(t, e) {
  return BA(t, e, !0) || null;
}
function UA(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function $3(t, e) {
  return !t || !t.paths ? null : P3(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = _s(s, r, n), a = UA(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: R3
} = O_, T3 = () => null, _3 = (t) => Array.isArray(t) ? t : [t], dE = {
  mapTagOperations: M3,
  makeExecute: C3
};
function C3(t = {}) {
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
function I3(t = {}) {
  const e = dE.makeExecute(t);
  return {
    apis: dE.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function M3({
  spec: t,
  cb: e = T3,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return BA(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? _3(c.tags) : [r]).forEach((f) => {
      if (typeof f != "string")
        return;
      i[f] = i[f] || {};
      const l = i[f], d = _s(c, o, a, {
        v2OperationIdCompatibilityMode: n
      }), p = e({
        spec: t,
        pathName: o,
        method: a,
        operation: c,
        operationId: d
      });
      if (s[d])
        s[d] += 1, l[`${d}${s[d]}`] = p;
      else if (typeof l[d] < "u") {
        const m = s[d] || 1;
        s[d] = m + 1, l[`${d}${s[d]}`] = p;
        const h = l[d];
        delete l[d], l[`${d}${m}`] = h;
      } else
        l[d] = p;
    });
  }), i;
}
function k3() {
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
const N3 = (t, e, r, n, s) => {
  if (t === z.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-url-template", gt.charsToString(e, r, n)]);
  }
  return z.SEM_OK;
}, F3 = (t, e, r, n, s) => {
  if (t === z.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable", gt.charsToString(e, r, n)]);
  }
  return z.SEM_OK;
}, D3 = (t, e, r, n, s) => {
  if (t === z.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable-name", gt.charsToString(e, r, n)]);
  }
  return z.SEM_OK;
}, L3 = (t, e, r, n, s) => {
  if (t === z.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["literals", gt.charsToString(e, r, n)]);
  }
  return z.SEM_OK;
}, q3 = new k3(), JA = (t) => {
  const e = new $t();
  return e.ast = new Fh(), e.ast.callbacks["server-url-template"] = N3, e.ast.callbacks["server-variable"] = F3, e.ast.callbacks["server-variable-name"] = D3, e.ast.callbacks.literals = L3, {
    result: e.parse(q3, "server-url-template", t),
    ast: e.ast
  };
}, V3 = (t, {
  strict: e = !1
} = {}) => {
  try {
    const r = JA(t);
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
}, B3 = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, U3 = (t) => B3(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), J3 = ["literals", "server-variable-name"], H3 = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: U3
    },
    ...r
  }, i = JA(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => J3.includes(c)).map(([c, u]) => c === "server-variable-name" ? Object.hasOwn(e, u) ? s.encoder(e[u], u) : `{${u}}` : u).join("");
};
function HA() {
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
const G3 = (t, e, r, n, s) => (t === z.SEM_PRE && s.push(["slash", gt.charsToString(e, r, n)]), z.SEM_OK), K3 = (t, e, r, n, s) => {
  if (t === z.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["path-template", gt.charsToString(e, r, n)]);
  }
  return z.SEM_OK;
}, z3 = (t, e, r, n, s) => (t === z.SEM_PRE && s.push(["path-literal", gt.charsToString(e, r, n)]), z.SEM_OK), W3 = (t, e, r, n, s) => (t === z.SEM_PRE && s.push(["template-expression", gt.charsToString(e, r, n)]), z.SEM_OK), Y3 = (t, e, r, n, s) => (t === z.SEM_PRE && s.push(["template-expression-param-name", gt.charsToString(e, r, n)]), z.SEM_OK), X3 = new HA(), Q3 = (t) => {
  const e = new $t();
  return e.ast = new Fh(), e.ast.callbacks["path-template"] = K3, e.ast.callbacks.slash = G3, e.ast.callbacks["path-literal"] = z3, e.ast.callbacks["template-expression"] = W3, e.ast.callbacks["template-expression-param-name"] = Y3, {
    result: e.parse(X3, "path-template", t),
    ast: e.ast
  };
}, Z3 = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, eB = (t) => Z3(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), tB = ["slash", "path-literal", "template-expression-param-name"], Ap = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: eB
    },
    ...r
  }, i = Q3(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => tB.includes(c)).map(([c, u]) => c === "template-expression-param-name" ? Object.prototype.hasOwnProperty.call(e, u) ? s.encoder(e[u], u) : `{${u}}` : u).join("");
};
new HA();
new $t();
const rB = {
  body: nB,
  header: iB,
  query: aB,
  path: oB,
  formData: sB
};
function nB({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function sB({
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
function iB({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function oB({
  req: t,
  value: e,
  parameter: r,
  baseURL: n
}) {
  if (e !== void 0) {
    const s = t.url.replace(n, ""), i = Ap(s, {
      [r.name]: e
    });
    t.url = n + i;
  }
}
function aB({
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
function Ma(t, e) {
  return e.includes("application/json") ? typeof t == "string" ? t : (Array.isArray(t) && (t = t.map((r) => {
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  })), JSON.stringify(t)) : String(t);
}
function mi() {
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
new mi();
const cB = (t) => {
  if (typeof t != "string" || [...t].length !== 1)
    throw new TypeError("Input must be a single character string.");
  const e = t.codePointAt(0);
  return e <= 127 ? `%${e.toString(16).toUpperCase().padStart(2, "0")}` : encodeURIComponent(t);
}, uB = (t) => t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, ""), ka = (t) => t.length >= 2 && t.startsWith('"') && t.endsWith('"'), GA = (t) => ka(t) ? t.slice(1, -1) : t, KA = (t) => `"${t}"`, zA = (t) => t, lB = new $t(), fB = new mi(), Wd = (t, {
  strict: e = !0,
  quoted: r = null
} = {}) => {
  try {
    const n = e ? "cookie-value" : "lenient-cookie-value", s = lB.parse(fB, n, t);
    return typeof r == "boolean" ? s.success && r === ka(t) : s.success;
  } catch {
    return !1;
  }
}, WA = (t) => {
  const r = new TextEncoder().encode(t).reduce((n, s) => n + String.fromCharCode(s), "");
  return btoa(r);
}, pB = (t, e = WA) => {
  const r = String(t);
  if (Wd(r)) return r;
  const n = ka(r), s = n ? GA(r) : r, i = e(s);
  return n ? KA(i) : i;
}, hB = (t) => uB(WA(t)), dB = (t) => pB(t, hB), mB = new $t(), yB = new mi(), YA = (t, {
  strict: e = !0
} = {}) => {
  try {
    const r = e ? "cookie-name" : "lenient-cookie-name";
    return mB.parse(yB, r, t).success;
  } catch {
    return !1;
  }
}, gB = (t) => {
  if (!YA(t))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, XA = (t) => {
  if (!Wd(t))
    throw new TypeError(`Invalid cookie value: ${t}`);
}, mE = {
  encoders: {
    name: zA,
    value: dB
  },
  validators: {
    name: gB,
    value: XA
  }
}, vB = (t, e, r = {}) => {
  const n = {
    ...r,
    encoders: {
      ...mE.encoders,
      ...r.encoders
    },
    validators: {
      ...mE.validators,
      ...r.validators
    }
  }, s = n.encoders.name(t), i = n.encoders.value(e);
  return n.validators.name(s), n.validators.value(i), `${s}=${i}`;
}, bB = (t, e = {}) => (Array.isArray(t) ? t : typeof t == "object" && t !== null ? Object.entries(t) : []).map(([n, s]) => vB(n, s, e)).join("; "), EB = new $t(), SB = new mi(), xB = (t) => {
  const e = String(t);
  if (Wd(e)) return e;
  const r = ka(e), n = r ? GA(e) : e;
  let s = "";
  for (const i of n)
    s += EB.parse(SB, "cookie-octet", i).success ? i : cB(i);
  return r ? KA(s) : s;
};
new $t();
new mi();
const OB = (t) => {
  if (!YA(t, {
    strict: !1
  }))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, wB = "%3D", AB = "%26", jB = (t) => xB(t).replace(/[=&]/gu, (e) => e === "=" ? wB : AB), jp = (t, e = {}) => bB(t, Ye({
  encoders: {
    name: zA,
    value: jB
  },
  validators: {
    name: OB,
    value: XA
  }
}, e));
function PB({
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
    u = Ap(c, {
      [s]: e
    }, {
      encoder: (l) => SE(Ma(l, f))
    });
  } else
    u = Ap(c, {
      [s]: e
    }, {
      encoder: (f) => Rp({
        key: r.name,
        value: f,
        style: i || "simple",
        explode: o ?? !1,
        escape: "reserved"
      })
    });
  t.url = n + u;
}
function $B({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const n = Object.keys(r.content)[0], s = Ma(e, n);
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
const RB = ["accept", "authorization", "content-type"];
function TB({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(RB.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = Ma(r, n);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = Rp({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function _B({
  req: t,
  parameter: e,
  value: r
}) {
  const {
    name: n
  } = e;
  if (t.headers = t.headers || {}, r !== void 0 && e.content) {
    const i = Object.keys(e.content)[0], o = Ma(r, i);
    t.headers.Cookie = jp({
      [n]: o
    });
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    var s;
    const i = Rp({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: (s = e.explode) !== null && s !== void 0 ? s : !1
    }), o = Array.isArray(r) && e.explode ? `${n}=${i}` : i;
    t.headers.Cookie = jp({
      [n]: o
    });
  }
}
const CB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: _B,
  header: TB,
  path: PB,
  query: $B
}, Symbol.toStringTag, { value: "Module" })), IB = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: QA
} = IB;
function MB(t, e) {
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
  e = kB({
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
      const h = u[0];
      h && (e.headers["Content-Type"] = h, a = h);
    }
  } else a && f && (e.headers["Content-Type"] = a);
  if (!t.responseContentType && r.responses) {
    const h = Object.entries(r.responses).filter(([v, b]) => {
      const g = parseInt(v, 10);
      return g >= 200 && g < 300 && fe(b.content);
    }).reduce((v, [, b]) => v.concat(Object.keys(b.content)), []);
    h.length > 0 && (e.headers.accept = h.join(", "));
  }
  if (n)
    if (a) {
      if (u.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof n == "object") {
            var l, d;
            const h = (l = (d = c.content[a]) === null || d === void 0 ? void 0 : d.encoding) !== null && l !== void 0 ? l : {};
            e.form = {}, Object.keys(n).forEach((v) => {
              let b;
              try {
                b = JSON.parse(n[v]);
              } catch {
                b = n[v];
              }
              e.form[v] = {
                value: b,
                encoding: h[v] || {}
              };
            });
          } else if (typeof n == "string") {
            var p, m;
            const h = (p = (m = c.content[a]) === null || m === void 0 ? void 0 : m.encoding) !== null && p !== void 0 ? p : {};
            try {
              e.form = {};
              const v = JSON.parse(n);
              Object.entries(v).forEach(([b, g]) => {
                e.form[b] = {
                  value: g,
                  encoding: h[b] || {}
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
function kB({
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
      const d = o[l], p = u[l];
      if (!d)
        return;
      const m = d.value || d, {
        type: h
      } = p;
      if (d) {
        if (h === "apiKey")
          p.in === "query" && (i.query[p.name] = m), p.in === "header" && (i.headers[p.name] = m), p.in === "cookie" && (i.cookies[p.name] = m);
        else if (h === "http") {
          if (/^basic$/i.test(p.scheme)) {
            const v = m.username || "", b = m.password || "", g = QA(`${v}:${b}`);
            i.headers.Authorization = `Basic ${g}`;
          }
          /^bearer$/i.test(p.scheme) && (i.headers.Authorization = `Bearer ${m}`);
        } else if (h === "oauth2" || h === "openIdConnect") {
          const v = d.token || {}, b = p["x-tokenName"] || "access_token", g = v[b];
          let S = v.token_type;
          (!S || S.toLowerCase() === "bearer") && (S = "Bearer"), i.headers.Authorization = `${S} ${g}`;
        }
      }
    });
  }), i);
}
function NB(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = FB({
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
function FB({
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
        token: p
      } = d, m = d.value || d, h = u[l], {
        type: v
      } = h, b = h["x-tokenName"] || "access_token", g = p && p[b];
      let S = p && p.token_type;
      if (d)
        if (v === "apiKey") {
          const E = h.in === "query" ? "query" : "headers";
          s[E] = s[E] || {}, s[E][h.name] = m;
        } else if (v === "basic")
          if (m.header)
            s.headers.authorization = m.header;
          else {
            const E = m.username || "", O = m.password || "";
            m.base64 = QA(`${E}:${O}`), s.headers.authorization = `Basic ${m.base64}`;
          }
        else v === "oauth2" && g && (S = !S || S.toLowerCase() === "bearer" ? "Bearer" : S, s.headers.authorization = `${S} ${g}`);
    });
  }), s);
}
const yE = (t) => Array.isArray(t) ? t : [], is = (t, {
  recurse: e = !0,
  depth: r = 1
} = {}) => {
  if (fe(t)) {
    if (t.type === "object" || t.type === "array" || Array.isArray(t.type) && (t.type.includes("object") || t.type.includes("array")))
      return t;
    if (!(r > bE) && e) {
      const n = Array.isArray(t.oneOf) ? t.oneOf.find((i) => is(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (n) return n;
      const s = Array.isArray(t.anyOf) ? t.anyOf.find((i) => is(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (s) return s;
    }
  }
}, tp = ({
  value: t,
  silentFail: e = !1
}) => {
  try {
    const r = JSON.parse(t);
    if (fe(r) || Array.isArray(r))
      return r;
    if (!e)
      throw new Error("Expected JSON serialized object or array");
  } catch {
    if (!e)
      throw new Error("Could not parse parameter value string as JSON Object or JSON Array");
  }
  return t;
}, $i = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, Ri), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
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
class DB extends Ss {
}
const LB = (t, e) => e.filter((r) => r.name === t), qB = (t) => {
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
}, VB = {
  buildRequest: ZA
};
function BB({
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
  const u = t || e || _n;
  s && i && !n && (n = UA(s, i));
  const f = VB.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: u,
    ...c
  });
  return f.body && (fe(f.body) || Array.isArray(f.body)) && (f.body = JSON.stringify(f.body)), u(f);
}
function ZA(t) {
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
    serverVariableEncoder: p
  } = t;
  let {
    parameters: m,
    parameterBuilders: h,
    baseURL: v
  } = t;
  const b = Nh(e);
  h || (b ? h = CB : h = rB);
  let S = {
    url: "",
    credentials: l && l.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  d && (S.signal = d), i && (S.requestInterceptor = i), o && (S.responseInterceptor = o), c && (S.userFetch = c);
  const E = $3(e, r);
  if (!E)
    throw new DB(`Operation ${r} not found`);
  const {
    operation: O = {},
    method: A,
    pathName: $
  } = E;
  if (v = v ?? ej({
    spec: e,
    scheme: s,
    contextUrl: a,
    server: u,
    serverVariables: f,
    pathName: $,
    method: A,
    serverVariableEncoder: p
  }), S.url += v, !r)
    return delete S.cookies, S;
  S.url += $, S.method = `${A}`.toUpperCase(), m = m || {};
  const w = e.paths[$] || {};
  n && (S.headers.accept = n);
  const C = qB([].concat(yE(O.parameters)).concat(yE(w.parameters)));
  C.forEach((x) => {
    const P = h[x.in];
    let R;
    if (x.in === "body" && x.schema && x.schema.properties && (R = m), R = x && x.name && m[x.name], typeof R > "u" ? R = x && x.name && m[`${x.in}.${x.name}`] : LB(x.name, C).length > 1 && console.warn(`Parameter '${x.name}' is ambiguous because the defined spec has more than one parameter with the name: '${x.name}' and the passed-in parameter values did not define an 'in' value.`), R !== null) {
      if (typeof x.default < "u" && typeof R > "u" && (R = x.default), typeof R > "u" && x.required && !x.allowEmptyValue)
        throw new Error(`Required parameter ${x.name} is not provided`);
      b && typeof R == "string" && (qt("type", x.schema) && typeof x.schema.type == "string" && is(x.schema, {
        recurse: !1
      }) ? R = tp({
        value: R,
        silentFail: !1
      }) : qt("type", x.schema) && Array.isArray(x.schema.type) && is(x.schema, {
        recurse: !1
      }) ? R = tp({
        value: R,
        silentFail: !0
      }) : !qt("type", x.schema) && is(x.schema, {
        recurse: !0
      }) && (R = tp({
        value: R,
        silentFail: !0
      }))), P && P({
        req: S,
        parameter: x,
        value: R,
        operation: O,
        spec: e,
        baseURL: v
      });
    }
  });
  const T = {
    ...t,
    operation: O
  };
  if (b ? S = MB(T, S) : S = NB(T, S), S.cookies && Object.keys(S.cookies).length > 0) {
    const x = jp(S.cookies);
    So(S.headers.Cookie) ? S.headers.Cookie += `; ${x}` : S.headers.Cookie = x;
  }
  return S.cookies && delete S.cookies, Tp(S);
}
const Pp = (t) => t ? t.replace(/\W/g, "") : null;
function ej(t) {
  return Nh(t.spec) ? UB(t) : HB(t);
}
const rp = (t) => Array.isArray(t) && t.length > 0;
function UB({
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
  const d = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 || (a = a[(r || "").toLowerCase()]) === null || a === void 0 ? void 0 : a.servers, p = t == null || (c = t.paths) === null || c === void 0 || (c = c[e]) === null || c === void 0 ? void 0 : c.servers, m = t?.servers;
  if (u = rp(d) ? d : rp(p) ? p : rp(m) ? m : [vE], n && (l = u.find((h) => h.url === n), l && (f = n)), f || ([l] = u, f = l.url), V3(f, {
    strict: !0
  })) {
    const h = Object.entries({
      ...l.variables
    }).reduce((v, [b, g]) => (v[b] = g.default, v), {});
    f = H3(f, {
      ...h,
      ...i
    }, {
      encoder: typeof o == "function" ? o : ux
    });
  }
  return JB(f, s);
}
function JB(t = "", e = "") {
  const r = $i(t && e ? Ie(e, t) : t), n = $i(e), s = Pp(r.protocol) || Pp(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function HB({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = $i(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || Pp(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
ie.http = _n;
ie.makeHttp = DP.bind(null, ie.http);
ie.resolveStrategies = {
  "openapi-3-1-apidom": j3,
  "openapi-3-0": IO,
  "openapi-2-0": CO,
  generic: RO
};
ie.resolve = MO({
  strategies: [ie.resolveStrategies["openapi-3-1-apidom"], ie.resolveStrategies["openapi-3-0"], ie.resolveStrategies["openapi-2-0"], ie.resolveStrategies.generic]
});
ie.resolveSubtree = UM({
  strategies: [ie.resolveStrategies["openapi-3-1-apidom"], ie.resolveStrategies["openapi-3-0"], ie.resolveStrategies["openapi-2-0"], ie.resolveStrategies.generic]
});
ie.execute = BB;
ie.serializeRes = fS;
ie.serializeHeaders = lS;
ie.clearCache = FM;
ie.makeApisTagOperation = I3;
ie.buildRequest = ZA;
ie.helpers = {
  opId: _s
};
ie.getBaseUrl = ej;
ie.apidom = {
  resolve: {
    resolvers: {
      HTTPResolverSwaggerClient: kA
    }
  },
  parse: {
    parsers: {
      JsonParser: NA,
      YamlParser: FA,
      OpenApiJson3_1Parser: DA,
      OpenApiYaml3_1Parser: LA
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: VA
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
  http: _n,
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
  if (TO(e) && R3(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (Nh(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [vE]);
  }
};
const {
  helpers: rJ
} = ie;
export {
  ie as S
};
