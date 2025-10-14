import { v as Zs, q as Pr } from "./TriangleExclamation.BpqlFGl9.js";
const Ng = "application/json, application/yaml", Cs = "https://swagger.io", Dg = Object.freeze({
  url: "/"
}), qg = 3e3, {
  fetch: iw,
  Response: ow,
  Headers: aw,
  Request: cw,
  FormData: uw,
  File: lw,
  Blob: fw
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = iw);
typeof globalThis.Headers > "u" && (globalThis.Headers = aw);
typeof globalThis.Request > "u" && (globalThis.Request = cw);
typeof globalThis.Response > "u" && (globalThis.Response = ow);
typeof globalThis.FormData > "u" && (globalThis.FormData = uw);
typeof globalThis.File > "u" && (globalThis.File = lw);
typeof globalThis.Blob > "u" && (globalThis.Blob = fw);
function lf(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function Lg(t, e) {
  return Array.isArray(t) && t.some((r) => lf(r, e));
}
class Dl extends File {
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
const hw = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, pw = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function Vg(t, e = "reserved") {
  return [...t].map((r) => {
    if (pw(r) || hw(r) && e === "unsafe")
      return r;
    const n = new TextEncoder();
    return Array.from(n.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function ff(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? dw(t) : typeof e == "object" ? mw(t) : yw(t);
}
function Me(t, e = !1) {
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && typeof t == "string" && t.length > 0 ? Vg(t, e) : t ?? "";
}
function dw({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  if (r === "simple")
    return e.map((i) => Me(i, s)).join(",");
  if (r === "label")
    return `.${e.map((i) => Me(i, s)).join(".")}`;
  if (r === "matrix")
    return e.map((i) => Me(i, s)).reduce((i, o) => !i || n ? `${i || ""};${t}=${o}` : `${i},${o}`, "");
  if (r === "form") {
    const i = n ? `&${t}=` : ",";
    return e.map((o) => Me(o, s)).join(i);
  }
  if (r === "spaceDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => Me(o, s)).join(` ${i}`);
  }
  if (r === "pipeDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => Me(o, s)).join(`|${i}`);
  }
}
function mw({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  const i = Object.keys(e);
  if (r === "simple")
    return i.reduce((o, a) => {
      const c = Me(e[a], s), u = n ? "=" : ",";
      return `${o ? `${o},` : ""}${a}${u}${c}`;
    }, "");
  if (r === "label")
    return i.reduce((o, a) => {
      const c = Me(e[a], s), u = n ? "=" : ".";
      return `${o ? `${o}.` : "."}${a}${u}${c}`;
    }, "");
  if (r === "matrix" && n)
    return i.reduce((o, a) => {
      const c = Me(e[a], s);
      return `${o ? `${o};` : ";"}${a}=${c}`;
    }, "");
  if (r === "matrix")
    return i.reduce((o, a) => {
      const c = Me(e[a], s);
      return `${o ? `${o},` : `;${t}=`}${a},${c}`;
    }, "");
  if (r === "form")
    return i.reduce((o, a) => {
      const c = Me(e[a], s);
      return `${o ? `${o}${n ? "&" : ","}` : ""}${a}${n ? "=" : ","}${c}`;
    }, "");
}
function yw({
  key: t,
  value: e,
  style: r,
  escape: n
}) {
  if (r === "simple")
    return Me(e, n);
  if (r === "label")
    return `.${Me(e, n)}`;
  if (r === "matrix")
    return `;${t}=${Me(e, n)}`;
  if (r === "form" || r === "deepObject")
    return Me(e, n);
}
const vw = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, gw = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function Bg(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (f) => f.toString() : (f) => encodeURIComponent(f), u = c(t);
  if (typeof a > "u" && s)
    return [[u, ""]];
  if (lf(a) || Lg(a))
    return [[u, a]];
  if (i)
    return yp(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((f) => f !== "undefined")) {
      const {
        style: f,
        explode: l,
        allowReserved: d
      } = o;
      return yp(t, a, r, {
        style: f,
        explode: l,
        allowReserved: d
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const d = typeof a == "string" ? a : JSON.stringify(a), h = c(d), m = new Dl(h, "blob", {
          type: o.contentType
        });
        return [[u, m]];
      }
      const f = c(String(a)), l = new Dl(f, "blob", {
        type: o.contentType
      });
      return [[u, l]];
    }
    return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) && a.every((f) => typeof f != "object") ? [[u, a.map(c).join(",")]] : [[u, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) ? n === "multi" ? [[u, a.map(c)]] : [[u, a.map(c).join(gw[n || "csv"])]] : [[u, ""]];
}
function yp(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (u) => Me(u, o), c = r ? (u) => u : (u) => a(u);
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(vw[s])]] : s === "deepObject" ? Object.keys(e).map((u) => [c(`${t}[${u}]`), a(e[u])]) : i ? Object.keys(e).map((u) => [c(u), a(e[u])]) : [[c(t), Object.keys(e).map((u) => [`${c(u)},${a(e[u])}`]).join(",")]];
}
function bw(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of Bg(r, n, !0))
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
const xw = (t, {
  encode: e = !0
} = {}) => {
  const r = (i, o, a) => (Array.isArray(a) ? a.reduce((c, u) => r(i, o, u), i) : a instanceof Date ? i.append(o, a.toISOString()) : typeof a == "object" ? Object.entries(a).reduce((c, [u, f]) => r(i, `${o}[${u}]`, f), i) : i.append(o, a), i), n = Object.entries(t).reduce((i, [o, a]) => r(i, o, a), new URLSearchParams()), s = String(n);
  return e ? s : decodeURIComponent(s);
};
function vp(t) {
  const e = Object.keys(t).reduce((r, n) => {
    for (const [s, i] of Bg(n, t[n]))
      i instanceof Dl ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return xw(e, {
    encode: !1
  });
}
function hf(t = {}) {
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
      return lf(c) || Lg(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = bw(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = vp(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const u = new URLSearchParams(o);
      Object.keys(r).forEach((l) => u.delete(l)), a = String(u);
    }
    const c = s(a, vp(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Ug(t) {
  return typeof t > "u" || t === null;
}
function Sw(t) {
  return typeof t == "object" && t !== null;
}
function Ow(t) {
  return Array.isArray(t) ? t : Ug(t) ? [] : [t];
}
function ww(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function Ew(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function Aw(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var jw = Ug, Pw = Sw, Rw = Ow, _w = Ew, Tw = Aw, Cw = ww, Ae = {
  isNothing: jw,
  isObject: Pw,
  toArray: Rw,
  repeat: _w,
  isNegativeZero: Tw,
  extend: Cw
};
function Jg(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function dn(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Jg(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
dn.prototype = Object.create(Error.prototype);
dn.prototype.constructor = dn;
dn.prototype.toString = function(e) {
  return this.name + ": " + Jg(this, e);
};
var Be = dn;
function go(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function bo(t, e) {
  return Ae.repeat(" ", e - t.length) + t;
}
function $w(t, e) {
  if (e = Object.create(e || null), !t.buffer) return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, u, f = Math.min(t.line + e.linesAfter, s.length).toString().length, l = e.maxLength - (e.indent + f + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    u = go(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      l
    ), a = Ae.repeat(" ", e.indent) + bo((t.line - c + 1).toString(), f) + " | " + u.str + `
` + a;
  for (u = go(t.buffer, n[o], s[o], t.position, l), a += Ae.repeat(" ", e.indent) + bo((t.line + 1).toString(), f) + " | " + u.str + `
`, a += Ae.repeat("-", e.indent + f + 3 + u.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    u = go(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      l
    ), a += Ae.repeat(" ", e.indent) + bo((t.line + c + 1).toString(), f) + " | " + u.str + `
`;
  return a.replace(/\n$/, "");
}
var Iw = $w, Mw = [
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
], Fw = [
  "scalar",
  "sequence",
  "mapping"
];
function kw(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(n) {
      e[String(n)] = r;
    });
  }), e;
}
function Nw(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (Mw.indexOf(r) === -1)
      throw new Be('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = kw(e.styleAliases || null), Fw.indexOf(this.kind) === -1)
    throw new Be('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Fe = Nw;
function gp(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function Dw() {
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
function ql(t) {
  return this.extend(t);
}
ql.prototype.extend = function(e) {
  var r = [], n = [];
  if (e instanceof Fe)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  else
    throw new Be("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof Fe))
      throw new Be("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new Be("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new Be("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(i) {
    if (!(i instanceof Fe))
      throw new Be("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(ql.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = gp(s, "implicit"), s.compiledExplicit = gp(s, "explicit"), s.compiledTypeMap = Dw(s.compiledImplicit, s.compiledExplicit), s;
};
var Hg = ql, Gg = new Fe("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), Kg = new Fe("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), zg = new Fe("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), Wg = new Hg({
  explicit: [
    Gg,
    Kg,
    zg
  ]
});
function qw(t) {
  if (t === null) return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function Lw() {
  return null;
}
function Vw(t) {
  return t === null;
}
var Yg = new Fe("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: qw,
  construct: Lw,
  predicate: Vw,
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
function Bw(t) {
  if (t === null) return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function Uw(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function Jw(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var Xg = new Fe("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Bw,
  construct: Uw,
  predicate: Jw,
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
function Hw(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function Gw(t) {
  return 48 <= t && t <= 55;
}
function Kw(t) {
  return 48 <= t && t <= 57;
}
function zw(t) {
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
          if (!Hw(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!Gw(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < e; r++)
    if (s = t[r], s !== "_") {
      if (!Kw(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function Ww(t) {
  var e = t, r = 1, n;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), n = e[0], (n === "-" || n === "+") && (n === "-" && (r = -1), e = e.slice(1), n = e[0]), e === "0") return 0;
  if (n === "0") {
    if (e[1] === "b") return r * parseInt(e.slice(2), 2);
    if (e[1] === "x") return r * parseInt(e.slice(2), 16);
    if (e[1] === "o") return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function Yw(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Ae.isNegativeZero(t);
}
var Qg = new Fe("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: zw,
  construct: Ww,
  predicate: Yw,
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
}), Xw = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Qw(t) {
  return !(t === null || !Xw.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function Zw(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var eE = /^[-+]?[0-9]+e/;
function tE(t, e) {
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
  else if (Ae.isNegativeZero(t))
    return "-0.0";
  return r = t.toString(10), eE.test(r) ? r.replace("e", ".e") : r;
}
function rE(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Ae.isNegativeZero(t));
}
var Zg = new Fe("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Qw,
  construct: Zw,
  predicate: rE,
  represent: tE,
  defaultStyle: "lowercase"
}), eb = Wg.extend({
  implicit: [
    Yg,
    Xg,
    Qg,
    Zg
  ]
}), tb = eb, rb = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), nb = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function nE(t) {
  return t === null ? !1 : rb.exec(t) !== null || nb.exec(t) !== null;
}
function sE(t) {
  var e, r, n, s, i, o, a, c = 0, u = null, f, l, d;
  if (e = rb.exec(t), e === null && (e = nb.exec(t)), e === null) throw new Error("Date resolve error");
  if (r = +e[1], n = +e[2] - 1, s = +e[3], !e[4])
    return new Date(Date.UTC(r, n, s));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (f = +e[10], l = +(e[11] || 0), u = (f * 60 + l) * 6e4, e[9] === "-" && (u = -u)), d = new Date(Date.UTC(r, n, s, i, o, a, c)), u && d.setTime(d.getTime() - u), d;
}
function iE(t) {
  return t.toISOString();
}
var sb = new Fe("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: nE,
  construct: sE,
  instanceOf: Date,
  represent: iE
});
function oE(t) {
  return t === "<<" || t === null;
}
var ib = new Fe("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: oE
}), pf = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function aE(t) {
  if (t === null) return !1;
  var e, r, n = 0, s = t.length, i = pf;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0) return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function cE(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = pf, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function uE(t) {
  var e = "", r = 0, n, s, i = t.length, o = pf;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function lE(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var ob = new Fe("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: aE,
  construct: cE,
  predicate: lE,
  represent: uE
}), fE = Object.prototype.hasOwnProperty, hE = Object.prototype.toString;
function pE(t) {
  if (t === null) return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, hE.call(s) !== "[object Object]") return !1;
    for (i in s)
      if (fE.call(s, i))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (e.indexOf(i) === -1) e.push(i);
    else return !1;
  }
  return !0;
}
function dE(t) {
  return t !== null ? t : [];
}
var ab = new Fe("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: pE,
  construct: dE
}), mE = Object.prototype.toString;
function yE(t) {
  if (t === null) return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], mE.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1)) return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function vE(t) {
  if (t === null) return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var cb = new Fe("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: yE,
  construct: vE
}), gE = Object.prototype.hasOwnProperty;
function bE(t) {
  if (t === null) return !0;
  var e, r = t;
  for (e in r)
    if (gE.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function xE(t) {
  return t !== null ? t : {};
}
var ub = new Fe("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: bE,
  construct: xE
}), df = tb.extend({
  implicit: [
    sb,
    ib
  ],
  explicit: [
    ob,
    ab,
    cb,
    ub
  ]
}), Ht = Object.prototype.hasOwnProperty, $s = 1, lb = 2, fb = 3, Is = 4, xo = 1, SE = 2, bp = 3, OE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, wE = /[\x85\u2028\u2029]/, EE = /[,\[\]\{\}]/, hb = /^(?:!|!!|![a-z\-]+!)$/i, pb = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function xp(t) {
  return Object.prototype.toString.call(t);
}
function gt(t) {
  return t === 10 || t === 13;
}
function or(t) {
  return t === 9 || t === 32;
}
function Je(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Rr(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function AE(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function jE(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function PE(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function Sp(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function RE(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var db = new Array(256), mb = new Array(256);
for (var Er = 0; Er < 256; Er++)
  db[Er] = Sp(Er) ? 1 : 0, mb[Er] = Sp(Er);
function _E(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || df, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function yb(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = Iw(r), new Be(e, r);
}
function U(t, e) {
  throw yb(t, e);
}
function Ms(t, e) {
  t.onWarning && t.onWarning.call(null, yb(t, e));
}
var Op = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && U(e, "duplication of %YAML directive"), n.length !== 1 && U(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && U(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && U(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Ms(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && U(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], hb.test(s) || U(e, "ill-formed tag handle (first argument) of the TAG directive"), Ht.call(e.tagMap, s) && U(e, 'there is a previously declared suffix for "' + s + '" tag handle'), pb.test(i) || U(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      U(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function Jt(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || U(t, "expected valid JSON character");
    else OE.test(a) && U(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function wp(t, e, r, n) {
  var s, i, o, a;
  for (Ae.isObject(r) || U(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], Ht.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function _r(t, e, r, n, s, i, o, a, c) {
  var u, f;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), u = 0, f = s.length; u < f; u += 1)
      Array.isArray(s[u]) && U(t, "nested arrays are not supported inside keys"), typeof s == "object" && xp(s[u]) === "[object Object]" && (s[u] = "[object Object]");
  if (typeof s == "object" && xp(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (u = 0, f = i.length; u < f; u += 1)
        wp(t, e, i[u], r);
    else
      wp(t, e, i, r);
  else
    !t.json && !Ht.call(r, s) && Ht.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, U(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function mf(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : U(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function be(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; or(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (gt(s))
      for (mf(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && Ms(t, "deficient indentation"), n;
}
function ei(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || Je(r)));
}
function yf(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Ae.repeat(`
`, e - 1));
}
function TE(t, e, r) {
  var n, s, i, o, a, c, u, f, l = t.kind, d = t.result, h;
  if (h = t.input.charCodeAt(t.position), Je(h) || Rr(h) || h === 35 || h === 38 || h === 42 || h === 33 || h === 124 || h === 62 || h === 39 || h === 34 || h === 37 || h === 64 || h === 96 || (h === 63 || h === 45) && (s = t.input.charCodeAt(t.position + 1), Je(s) || r && Rr(s)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; h !== 0; ) {
    if (h === 58) {
      if (s = t.input.charCodeAt(t.position + 1), Je(s) || r && Rr(s))
        break;
    } else if (h === 35) {
      if (n = t.input.charCodeAt(t.position - 1), Je(n))
        break;
    } else {
      if (t.position === t.lineStart && ei(t) || r && Rr(h))
        break;
      if (gt(h))
        if (c = t.line, u = t.lineStart, f = t.lineIndent, be(t, !1, -1), t.lineIndent >= e) {
          a = !0, h = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = u, t.lineIndent = f;
          break;
        }
    }
    a && (Jt(t, i, o, !1), yf(t, t.line - c), i = o = t.position, a = !1), or(h) || (o = t.position + 1), h = t.input.charCodeAt(++t.position);
  }
  return Jt(t, i, o, !1), t.result ? !0 : (t.kind = l, t.result = d, !1);
}
function CE(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (Jt(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else gt(r) ? (Jt(t, n, s, !0), yf(t, be(t, !1, e)), n = s = t.position) : t.position === t.lineStart && ei(t) ? U(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  U(t, "unexpected end of the stream within a single quoted scalar");
}
function $E(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return Jt(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (Jt(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), gt(a))
        be(t, !1, e);
      else if (a < 256 && db[a])
        t.result += mb[a], t.position++;
      else if ((o = jE(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = AE(a)) >= 0 ? i = (i << 4) + o : U(t, "expected hexadecimal character");
        t.result += RE(i), t.position++;
      } else
        U(t, "unknown escape sequence");
      r = n = t.position;
    } else gt(a) ? (Jt(t, r, n, !0), yf(t, be(t, !1, e)), r = n = t.position) : t.position === t.lineStart && ei(t) ? U(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  U(t, "unexpected end of the stream within a double quoted scalar");
}
function IE(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, u, f, l, d, h, m = /* @__PURE__ */ Object.create(null), p, v, g, y;
  if (y = t.input.charCodeAt(t.position), y === 91)
    f = 93, h = !1, a = [];
  else if (y === 123)
    f = 125, h = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), y = t.input.charCodeAt(++t.position); y !== 0; ) {
    if (be(t, !0, e), y = t.input.charCodeAt(t.position), y === f)
      return t.position++, t.tag = o, t.anchor = c, t.kind = h ? "mapping" : "sequence", t.result = a, !0;
    r ? y === 44 && U(t, "expected the node content, but found ','") : U(t, "missed comma between flow collection entries"), v = p = g = null, l = d = !1, y === 63 && (u = t.input.charCodeAt(t.position + 1), Je(u) && (l = d = !0, t.position++, be(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, Mr(t, e, $s, !1, !0), v = t.tag, p = t.result, be(t, !0, e), y = t.input.charCodeAt(t.position), (d || t.line === n) && y === 58 && (l = !0, y = t.input.charCodeAt(++t.position), be(t, !0, e), Mr(t, e, $s, !1, !0), g = t.result), h ? _r(t, a, m, v, p, g, n, s, i) : l ? a.push(_r(t, null, m, v, p, g, n, s, i)) : a.push(p), be(t, !0, e), y = t.input.charCodeAt(t.position), y === 44 ? (r = !0, y = t.input.charCodeAt(++t.position)) : r = !1;
  }
  U(t, "unexpected end of the stream within a flow collection");
}
function ME(t, e) {
  var r, n, s = xo, i = !1, o = !1, a = e, c = 0, u = !1, f, l;
  if (l = t.input.charCodeAt(t.position), l === 124)
    n = !1;
  else if (l === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; l !== 0; )
    if (l = t.input.charCodeAt(++t.position), l === 43 || l === 45)
      xo === s ? s = l === 43 ? bp : SE : U(t, "repeat of a chomping mode identifier");
    else if ((f = PE(l)) >= 0)
      f === 0 ? U(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? U(t, "repeat of an indentation width identifier") : (a = e + f - 1, o = !0);
    else
      break;
  if (or(l)) {
    do
      l = t.input.charCodeAt(++t.position);
    while (or(l));
    if (l === 35)
      do
        l = t.input.charCodeAt(++t.position);
      while (!gt(l) && l !== 0);
  }
  for (; l !== 0; ) {
    for (mf(t), t.lineIndent = 0, l = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && l === 32; )
      t.lineIndent++, l = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), gt(l)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === bp ? t.result += Ae.repeat(`
`, i ? 1 + c : c) : s === xo && i && (t.result += `
`);
      break;
    }
    for (n ? or(l) ? (u = !0, t.result += Ae.repeat(`
`, i ? 1 + c : c)) : u ? (u = !1, t.result += Ae.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += Ae.repeat(`
`, c) : t.result += Ae.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !gt(l) && l !== 0; )
      l = t.input.charCodeAt(++t.position);
    Jt(t, r, t.position, !1);
  }
  return !0;
}
function Ep(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, U(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !Je(o)))); ) {
    if (a = !0, t.position++, be(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, Mr(t, e, fb, !1, !0), i.push(t.result), be(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      U(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function FE(t, e, r) {
  var n, s, i, o, a, c, u = t.tag, f = t.anchor, l = {}, d = /* @__PURE__ */ Object.create(null), h = null, m = null, p = null, v = !1, g = !1, y;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = l), y = t.input.charCodeAt(t.position); y !== 0; ) {
    if (!v && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, U(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, (y === 63 || y === 58) && Je(n))
      y === 63 ? (v && (_r(t, l, d, h, m, null, o, a, c), h = m = p = null), g = !0, v = !0, s = !0) : v ? (v = !1, s = !0) : U(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, y = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !Mr(t, r, lb, !1, !0))
        break;
      if (t.line === i) {
        for (y = t.input.charCodeAt(t.position); or(y); )
          y = t.input.charCodeAt(++t.position);
        if (y === 58)
          y = t.input.charCodeAt(++t.position), Je(y) || U(t, "a whitespace character is expected after the key-value separator within a block mapping"), v && (_r(t, l, d, h, m, null, o, a, c), h = m = p = null), g = !0, v = !1, s = !1, h = t.tag, m = t.result;
        else if (g)
          U(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = u, t.anchor = f, !0;
      } else if (g)
        U(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = u, t.anchor = f, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (v && (o = t.line, a = t.lineStart, c = t.position), Mr(t, e, Is, !0, s) && (v ? m = t.result : p = t.result), v || (_r(t, l, d, h, m, p, o, a, c), h = m = p = null), be(t, !0, -1), y = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && y !== 0)
      U(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return v && _r(t, l, d, h, m, null, o, a, c), g && (t.tag = u, t.anchor = f, t.kind = "mapping", t.result = l), g;
}
function kE(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33) return !1;
  if (t.tag !== null && U(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : U(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Je(o); )
      o === 33 && (n ? U(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), hb.test(s) || U(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), EE.test(i) && U(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !pb.test(i) && U(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    U(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : Ht.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : U(t, 'undeclared tag handle "' + s + '"'), !0;
}
function NE(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38) return !1;
  for (t.anchor !== null && U(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !Je(r) && !Rr(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && U(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function DE(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42) return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !Je(n) && !Rr(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && U(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), Ht.call(t.anchorMap, r) || U(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], be(t, !0, -1), !0;
}
function Mr(t, e, r, n, s) {
  var i, o, a, c = 1, u = !1, f = !1, l, d, h, m, p, v;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = Is === r || fb === r, n && be(t, !0, -1) && (u = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; kE(t) || NE(t); )
      be(t, !0, -1) ? (u = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = u || s), (c === 1 || Is === r) && ($s === r || lb === r ? p = e : p = e + 1, v = t.position - t.lineStart, c === 1 ? a && (Ep(t, v) || FE(t, v, p)) || IE(t, p) ? f = !0 : (o && ME(t, p) || CE(t, p) || $E(t, p) ? f = !0 : DE(t) ? (f = !0, (t.tag !== null || t.anchor !== null) && U(t, "alias node should not have any properties")) : TE(t, p, $s === r) && (f = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (f = a && Ep(t, v))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && U(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), l = 0, d = t.implicitTypes.length; l < d; l += 1)
      if (m = t.implicitTypes[l], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (Ht.call(t.typeMap[t.kind || "fallback"], t.tag))
      m = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (m = null, h = t.typeMap.multi[t.kind || "fallback"], l = 0, d = h.length; l < d; l += 1)
        if (t.tag.slice(0, h[l].tag.length) === h[l].tag) {
          m = h[l];
          break;
        }
    m || U(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && U(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : U(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || f;
}
function qE(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (be(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !Je(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && U(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; or(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !gt(o));
        break;
      }
      if (gt(o)) break;
      for (r = t.position; o !== 0 && !Je(o); )
        o = t.input.charCodeAt(++t.position);
      s.push(t.input.slice(r, t.position));
    }
    o !== 0 && mf(t), Ht.call(Op, n) ? Op[n](t, n, s) : Ms(t, 'unknown document directive "' + n + '"');
  }
  if (be(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, be(t, !0, -1)) : i && U(t, "directives end mark is expected"), Mr(t, t.lineIndent - 1, Is, !1, !0), be(t, !0, -1), t.checkLineBreaks && wE.test(t.input.slice(e, t.position)) && Ms(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && ei(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, be(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    U(t, "end of the stream or a document separator is expected");
  else
    return;
}
function vb(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new _E(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, U(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    qE(r);
  return r.documents;
}
function LE(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = vb(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function VE(t, e) {
  var r = vb(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Be("expected a single document in the stream, but found more");
  }
}
var BE = LE, UE = VE, gb = {
  loadAll: BE,
  load: UE
}, bb = Object.prototype.toString, xb = Object.prototype.hasOwnProperty, vf = 65279, JE = 9, mn = 10, HE = 13, GE = 32, KE = 33, zE = 34, Ll = 35, WE = 37, YE = 38, XE = 39, QE = 42, Sb = 44, ZE = 45, Fs = 58, e0 = 61, t0 = 62, r0 = 63, n0 = 64, Ob = 91, wb = 93, s0 = 96, Eb = 123, i0 = 124, Ab = 125, qe = {};
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
var o0 = [
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
], a0 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function c0(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null) return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && xb.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function u0(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new Be("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Ae.repeat("0", n - e.length) + e;
}
var l0 = 1, yn = 2;
function f0(t) {
  this.schema = t.schema || df, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Ae.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = c0(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? yn : l0, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Ap(t, e) {
  for (var r = Ae.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function Vl(t, e) {
  return `
` + Ae.repeat(" ", t.indent * e);
}
function h0(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function ks(t) {
  return t === GE || t === JE;
}
function vn(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== vf || 65536 <= t && t <= 1114111;
}
function jp(t) {
  return vn(t) && t !== vf && t !== HE && t !== mn;
}
function Pp(t, e, r) {
  var n = jp(t), s = n && !ks(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== Sb && t !== Ob && t !== wb && t !== Eb && t !== Ab) && t !== Ll && !(e === Fs && !s) || jp(e) && !ks(e) && t === Ll || e === Fs && s
  );
}
function p0(t) {
  return vn(t) && t !== vf && !ks(t) && t !== ZE && t !== r0 && t !== Fs && t !== Sb && t !== Ob && t !== wb && t !== Eb && t !== Ab && t !== Ll && t !== YE && t !== QE && t !== KE && t !== i0 && t !== e0 && t !== t0 && t !== XE && t !== zE && t !== WE && t !== n0 && t !== s0;
}
function d0(t) {
  return !ks(t) && t !== Fs;
}
function on(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function jb(t) {
  var e = /^\n* /;
  return e.test(t);
}
var Pb = 1, Bl = 2, Rb = 3, _b = 4, jr = 5;
function m0(t, e, r, n, s, i, o, a) {
  var c, u = 0, f = null, l = !1, d = !1, h = n !== -1, m = -1, p = p0(on(t, 0)) && d0(on(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = on(t, c), !vn(u))
        return jr;
      p = p && Pp(u, f, a), f = u;
    }
  else {
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = on(t, c), u === mn)
        l = !0, h && (d = d || // Foldable line = too long, and not more-indented.
        c - m - 1 > n && t[m + 1] !== " ", m = c);
      else if (!vn(u))
        return jr;
      p = p && Pp(u, f, a), f = u;
    }
    d = d || h && c - m - 1 > n && t[m + 1] !== " ";
  }
  return !l && !d ? p && !o && !s(t) ? Pb : i === yn ? jr : Bl : r > 9 && jb(t) ? jr : o ? i === yn ? jr : Bl : d ? _b : Rb;
}
function y0(t, e, r, n, s) {
  t.dump = (function() {
    if (e.length === 0)
      return t.quotingType === yn ? '""' : "''";
    if (!t.noCompatMode && (o0.indexOf(e) !== -1 || a0.test(e)))
      return t.quotingType === yn ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(u) {
      return h0(t, u);
    }
    switch (m0(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !n,
      s
    )) {
      case Pb:
        return e;
      case Bl:
        return "'" + e.replace(/'/g, "''") + "'";
      case Rb:
        return "|" + Rp(e, t.indent) + _p(Ap(e, i));
      case _b:
        return ">" + Rp(e, t.indent) + _p(Ap(v0(e, o), i));
      case jr:
        return '"' + g0(e) + '"';
      default:
        throw new Be("impossible error: invalid scalar style");
    }
  })();
}
function Rp(t, e) {
  var r = jb(t) ? String(e) : "", n = t[t.length - 1] === `
`, s = n && (t[t.length - 2] === `
` || t === `
`), i = s ? "+" : n ? "" : "-";
  return r + i + `
`;
}
function _p(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function v0(t, e) {
  for (var r = /(\n+)([^\n]*)/g, n = (function() {
    var u = t.indexOf(`
`);
    return u = u !== -1 ? u : t.length, r.lastIndex = u, Tp(t.slice(0, u), e);
  })(), s = t[0] === `
` || t[0] === " ", i, o; o = r.exec(t); ) {
    var a = o[1], c = o[2];
    i = c[0] === " ", n += a + (!s && !i && c !== "" ? `
` : "") + Tp(c, e), s = i;
  }
  return n;
}
function Tp(t, e) {
  if (t === "" || t[0] === " ") return t;
  for (var r = / [^ ]/g, n, s = 0, i, o = 0, a = 0, c = ""; n = r.exec(t); )
    a = n.index, a - s > e && (i = o > s ? o : a, c += `
` + t.slice(s, i), s = i + 1), o = a;
  return c += `
`, t.length - s > e && o > s ? c += t.slice(s, o) + `
` + t.slice(o + 1) : c += t.slice(s), c.slice(1);
}
function g0(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = on(t, s), n = qe[r], !n && vn(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || u0(r);
  return e;
}
function b0(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (Tt(t, e, a, !1, !1) || typeof a > "u" && Tt(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function Cp(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (Tt(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Tt(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += Vl(t, e)), t.dump && mn === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function x0(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, u, f;
  for (o = 0, a = i.length; o < a; o += 1)
    f = "", n !== "" && (f += ", "), t.condenseFlow && (f += '"'), c = i[o], u = r[c], t.replacer && (u = t.replacer.call(r, c, u)), Tt(t, e, c, !1, !1) && (t.dump.length > 1024 && (f += "? "), f += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Tt(t, e, u, !1, !1) && (f += t.dump, n += f));
  t.tag = s, t.dump = "{" + n + "}";
}
function S0(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, u, f, l, d;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new Be("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    d = "", (!n || s !== "") && (d += Vl(t, e)), u = o[a], f = r[u], t.replacer && (f = t.replacer.call(r, u, f)), Tt(t, e + 1, u, !0, !0, !0) && (l = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, l && (t.dump && mn === t.dump.charCodeAt(0) ? d += "?" : d += "? "), d += t.dump, l && (d += Vl(t, e)), Tt(t, e + 1, f, !0, l) && (t.dump && mn === t.dump.charCodeAt(0) ? d += ":" : d += ": ", d += t.dump, s += d));
  t.tag = i, t.dump = s || "{}";
}
function $p(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, bb.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (xb.call(a.represent, c))
          n = a.represent[c](e, c);
        else
          throw new Be("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = n;
      }
      return !0;
    }
  return !1;
}
function Tt(t, e, r, n, s, i, o) {
  t.tag = null, t.dump = r, $p(t, r, !1) || $p(t, r, !0);
  var a = bb.call(t.dump), c = n, u;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var f = a === "[object Object]" || a === "[object Array]", l, d;
  if (f && (l = t.duplicates.indexOf(r), d = l !== -1), (t.tag !== null && t.tag !== "?" || d || t.indent !== 2 && e > 0) && (s = !1), d && t.usedDuplicates[l])
    t.dump = "*ref_" + l;
  else {
    if (f && d && !t.usedDuplicates[l] && (t.usedDuplicates[l] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (S0(t, e, t.dump, s), d && (t.dump = "&ref_" + l + t.dump)) : (x0(t, e, t.dump), d && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Cp(t, e - 1, t.dump, s) : Cp(t, e, t.dump, s), d && (t.dump = "&ref_" + l + t.dump)) : (b0(t, e, t.dump), d && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && y0(t, t.dump, e, i, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (t.skipInvalid) return !1;
      throw new Be("unacceptable kind of an object to dump " + a);
    }
    t.tag !== null && t.tag !== "?" && (u = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? u = "!" + u : u.slice(0, 18) === "tag:yaml.org,2002:" ? u = "!!" + u.slice(18) : u = "!<" + u + ">", t.dump = u + " " + t.dump);
  }
  return !0;
}
function O0(t, e) {
  var r = [], n = [], s, i;
  for (Ul(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function Ul(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        Ul(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        Ul(t[n[s]], e, r);
}
function w0(t, e) {
  e = e || {};
  var r = new f0(e);
  r.noRefs || O0(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), Tt(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var E0 = w0, A0 = {
  dump: E0
};
function gf(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var j0 = Fe, P0 = Hg, R0 = Wg, Ns = eb, _0 = tb, T0 = df, C0 = gb.load, $0 = gb.loadAll, I0 = A0.dump, M0 = Be, F0 = {
  binary: ob,
  float: Zg,
  map: zg,
  null: Yg,
  pairs: cb,
  set: ub,
  timestamp: sb,
  bool: Xg,
  int: Qg,
  merge: ib,
  omap: ab,
  seq: Kg,
  str: Gg
}, k0 = gf("safeLoad", "load"), N0 = gf("safeLoadAll", "loadAll"), D0 = gf("safeDump", "dump"), Fr = {
  Type: j0,
  Schema: P0,
  FAILSAFE_SCHEMA: R0,
  JSON_SCHEMA: Ns,
  CORE_SCHEMA: _0,
  DEFAULT_SCHEMA: T0,
  load: C0,
  loadAll: $0,
  dump: I0,
  YAMLException: M0,
  types: F0,
  safeLoad: k0,
  safeLoadAll: N0,
  safeDump: D0
};
const q0 = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function L0(t, e) {
  if (e) {
    if (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0)
      return JSON.parse(t);
    if (e.indexOf("application/xml") === 0 || e.indexOf("+xml") > 0)
      return t;
  }
  return Fr.load(t);
}
function V0(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function Tb(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = V0(n), e), {});
}
function Cb(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: Tb(t.headers)
  }, s = n.headers["content-type"], i = r || q0(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = L0(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
async function kr(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, e = hf(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await Cb(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
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
function B0(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), n = hf(n), n = e(n), r(t(n)));
}
function $b(t, e = {}) {
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
      Accept: Ng
    },
    credentials: s
  }).then((o) => o.body);
}
const bf = (t) => {
  var e, r;
  const {
    baseDoc: n,
    url: s
  } = t, i = (e = n ?? s) !== null && e !== void 0 ? e : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(i, globalThis.document.baseURI)) : i;
}, Ib = (t) => {
  const {
    fetch: e,
    http: r
  } = t;
  return e || r || kr;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var U0 = /* @__PURE__ */ (function() {
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
})(), J0 = Object.prototype.hasOwnProperty;
function Jl(t, e) {
  return J0.call(t, e);
}
function Hl(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var n = [];
  for (var s in t)
    Jl(t, s) && n.push(s);
  return n;
}
function He(t) {
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
function Gl(t) {
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
function Mb(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Kl(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (Kl(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = Hl(t), s = n.length, i = 0; i < s; i++)
        if (Kl(t[n[i]]))
          return !0;
    }
  }
  return !1;
}
function Ip(t, e) {
  var r = [t];
  for (var n in e) {
    var s = typeof e[n] == "object" ? JSON.stringify(e[n], null, 2) : e[n];
    typeof s < "u" && r.push(n + ": " + s);
  }
  return r.join(`
`);
}
var Fb = (
  /** @class */
  (function(t) {
    U0(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, Ip(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = Ip(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  })(Error)
), ye = Fb, H0 = He, Tr = {
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
    var n = gn(r, this.path);
    n && (n = He(n));
    var s = ar(r, { op: "remove", path: this.from }).removed;
    return ar(r, { op: "add", path: this.path, value: s }), { newDocument: r, removed: n };
  },
  copy: function(t, e, r) {
    var n = gn(r, this.from);
    return ar(r, { op: "add", path: this.path, value: He(n) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: bn(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, G0 = {
  add: function(t, e, r) {
    return Gl(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
  },
  remove: function(t, e, r) {
    var n = t.splice(e, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(t, e, r) {
    var n = t[e];
    return t[e] = this.value, { newDocument: r, removed: n };
  },
  move: Tr.move,
  copy: Tr.copy,
  test: Tr.test,
  _get: Tr._get
};
function gn(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return ar(t, r), r.value;
}
function ar(t, e, r, n, s, i) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : Ds(e, 0)), e.path === "") {
    var o = { newDocument: t };
    if (e.op === "add")
      return o.newDocument = e.value, o;
    if (e.op === "replace")
      return o.newDocument = e.value, o.removed = t, o;
    if (e.op === "move" || e.op === "copy")
      return o.newDocument = gn(t, e.from), e.op === "move" && (o.removed = t), o;
    if (e.op === "test") {
      if (o.test = bn(t, e.value), o.test === !1)
        throw new ye("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
      return o.newDocument = t, o;
    } else {
      if (e.op === "remove")
        return o.removed = t, o.newDocument = null, o;
      if (e.op === "_get")
        return e.value = t, o;
      if (r)
        throw new ye("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", i, e, t);
      return o;
    }
  } else {
    n || (t = He(t));
    var a = e.path || "", c = a.split("/"), u = t, f = 1, l = c.length, d = void 0, h = void 0, m = void 0;
    for (typeof r == "function" ? m = r : m = Ds; ; ) {
      if (h = c[f], h && h.indexOf("~") != -1 && (h = Mb(h)), s && (h == "__proto__" || h == "prototype" && f > 0 && c[f - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && d === void 0 && (u[h] === void 0 ? d = c.slice(0, f).join("/") : f == l - 1 && (d = e.path), d !== void 0 && m(e, 0, t, d)), f++, Array.isArray(u)) {
        if (h === "-")
          h = u.length;
        else {
          if (r && !Gl(h))
            throw new ye("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          Gl(h) && (h = ~~h);
        }
        if (f >= l) {
          if (r && e.op === "add" && h > u.length)
            throw new ye("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = G0[e.op].call(e, u, h, t);
          if (o.test === !1)
            throw new ye("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (f >= l) {
        var o = Tr[e.op].call(e, u, h, t);
        if (o.test === !1)
          throw new ye("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (u = u[h], r && f < l && (!u || typeof u != "object"))
        throw new ye("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function Bt(t, e, r, n, s) {
  if (n === void 0 && (n = !0), s === void 0 && (s = !0), r && !Array.isArray(e))
    throw new ye("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (t = He(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = ar(t, e[o], r, !0, s, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function K0(t, e, r) {
  var n = ar(t, e);
  if (n.test === !1)
    throw new ye("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function Ds(t, e, r, n) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new ye("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (Tr[t.op]) {
    if (typeof t.path != "string")
      throw new ye("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new ye('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new ye("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new ye("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && Kl(t.value))
      throw new ye("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", e, t, r);
    if (r) {
      if (t.op == "add") {
        var s = t.path.split("/").length, i = n.split("/").length;
        if (s !== i + 1 && s !== i)
          throw new ye("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", e, t, r);
      } else if (t.op === "replace" || t.op === "remove" || t.op === "_get") {
        if (t.path !== n)
          throw new ye("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", e, t, r);
      } else if (t.op === "move" || t.op === "copy") {
        var o = { op: "_get", path: t.from, value: void 0 }, a = kb([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new ye("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else throw new ye("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function kb(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new ye("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      Bt(He(e), He(t), r || !0);
    else {
      r = r || Ds;
      for (var n = 0; n < t.length; n++)
        r(t[n], n, e, void 0);
    }
  } catch (s) {
    if (s instanceof ye)
      return s;
    throw s;
  }
}
function bn(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    var r = Array.isArray(t), n = Array.isArray(e), s, i, o;
    if (r && n) {
      if (i = t.length, i != e.length)
        return !1;
      for (s = i; s-- !== 0; )
        if (!bn(t[s], e[s]))
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
      if (o = a[s], !bn(t[o], e[o]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
const z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: ye,
  _areEquals: bn,
  applyOperation: ar,
  applyPatch: Bt,
  applyReducer: K0,
  deepClone: H0,
  getValueByPointer: gn,
  validate: kb,
  validator: Ds
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var xf = /* @__PURE__ */ new WeakMap(), W0 = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  })()
), Y0 = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  })()
);
function X0(t) {
  return xf.get(t);
}
function Q0(t, e) {
  return t.observers.get(e);
}
function Z0(t, e) {
  t.observers.delete(e.callback);
}
function e1(t, e) {
  e.unobserve();
}
function t1(t, e) {
  var r = [], n, s = X0(t);
  if (!s)
    s = new W0(t), xf.set(t, s);
  else {
    var i = Q0(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = He(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      zl(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    zl(n), clearTimeout(n.next), Z0(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new Y0(e, n)), n;
}
function zl(t, e) {
  e === void 0 && (e = !1);
  var r = xf.get(t.object);
  Sf(r.value, t.object, t.patches, "", e), t.patches.length && Bt(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function Sf(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = Hl(e), o = Hl(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var u = o[c], f = t[u];
      if (Jl(e, u) && !(e[u] === void 0 && f !== void 0 && Array.isArray(e) === !1)) {
        var l = e[u];
        typeof f == "object" && f != null && typeof l == "object" && l != null && Array.isArray(f) === Array.isArray(l) ? Sf(f, l, r, n + "/" + nr(u), s) : f !== l && (s && r.push({ op: "test", path: n + "/" + nr(u), value: He(f) }), r.push({ op: "replace", path: n + "/" + nr(u), value: He(l) }));
      } else Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + nr(u), value: He(f) }), r.push({ op: "remove", path: n + "/" + nr(u) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var u = i[c];
        !Jl(t, u) && e[u] !== void 0 && r.push({ op: "add", path: n + "/" + nr(u), value: He(e[u]) });
      }
  }
}
function r1(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return Sf(t, e, n, "", r), n;
}
const n1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: r1,
  generate: zl,
  observe: t1,
  unobserve: e1
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, z0, n1, {
  JsonPatchError: Fb,
  deepClone: He,
  escapePathComponent: nr,
  unescapePathComponent: Mb
});
var So, Mp;
function s1() {
  if (Mp) return So;
  Mp = 1;
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
    return x.isMergeableObject(g) && l(g).forEach(function(O) {
      b[O] = a(g[O], x);
    }), l(y).forEach(function(O) {
      h(g, O) || (d(g, O) && x.isMergeableObject(y[O]) ? b[O] = u(O, x)(g[O], y[O], x) : b[O] = a(y[O], x));
    }), b;
  }
  function p(g, y, x) {
    x = x || {}, x.arrayMerge = x.arrayMerge || c, x.isMergeableObject = x.isMergeableObject || t, x.cloneUnlessOtherwiseSpecified = a;
    var b = Array.isArray(y), O = Array.isArray(g), A = b === O;
    return A ? b ? x.arrayMerge(g, y, x) : m(g, y, x) : a(y, x);
  }
  p.all = function(y, x) {
    if (!Array.isArray(y))
      throw new Error("first argument should be an array");
    return y.reduce(function(b, O) {
      return p(b, O, x);
    }, {});
  };
  var v = p;
  return So = v, So;
}
var i1 = s1();
const Fp = /* @__PURE__ */ Zs(i1), ue = {
  add: a1,
  replace: As,
  remove: c1,
  merge: u1,
  mergeDeep: l1,
  context: f1,
  getIn: m1,
  applyPatch: o1,
  parentPathMatch: d1,
  flatten: wn,
  fullyNormalizeArray: y1,
  normalizeArray: Db,
  isPromise: v1,
  forEachNew: h1,
  forEachNewPrimitive: p1,
  isJsonPatch: Vb,
  isContextPatch: x1,
  isPatch: ti,
  isMutation: Bb,
  isAdditiveMutation: qs,
  isGenerator: b1,
  isFunction: Lb,
  isObject: cr,
  isError: g1
};
function o1(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && kp(e.path)
  }, e.op === "merge") {
    const n = Oo(t, e.path);
    Object.assign(n, e.value), Bt(t, [As(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = Oo(t, e.path), s = Fp(n, e.value, {
      customMerge: (i) => {
        if (i === "enum")
          return (o, a) => Array.isArray(o) && Array.isArray(a) ? [.../* @__PURE__ */ new Set([...o, ...a])] : Fp(o, a);
      }
    });
    t = Bt(t, [As(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && cr(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${kp(i)}`,
      value: e.value[i]
    }), s), []);
    Bt(t, n);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: n
    } = e;
    r.allowMetaPatches && e.meta && qs(e) && (Array.isArray(e.value) || cr(e.value)) && (n = {
      ...n,
      ...e.meta
    }), t = n;
  } else if (Bt(t, [e]), r.allowMetaPatches && e.meta && qs(e) && (Array.isArray(e.value) || cr(e.value))) {
    const s = {
      ...Oo(t, e.path),
      ...e.meta
    };
    Bt(t, [As(e.path, s)]);
  }
  return t;
}
function kp(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function a1(t, e) {
  return {
    op: "add",
    path: t,
    value: e
  };
}
function As(t, e, r) {
  return {
    op: "replace",
    path: t,
    value: e,
    meta: r
  };
}
function c1(t) {
  return {
    op: "remove",
    path: t
  };
}
function u1(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function l1(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function f1(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function h1(t, e) {
  try {
    return Nb(t, Yl, e);
  } catch (r) {
    return r;
  }
}
function p1(t, e) {
  try {
    return Nb(t, Wl, e);
  } catch (r) {
    return r;
  }
}
function Nb(t, e, r) {
  const n = t.filter(qs).map((o) => e(o.value, r, o.path)) || [], s = wn(n);
  return qb(s);
}
function Wl(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => Wl(n, e, r.concat(s))) : cr(t) ? Object.keys(t).map((n) => Wl(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function Yl(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => Yl(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (cr(t)) {
    const s = Object.keys(t).map((i) => Yl(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = wn(n), n;
}
function d1(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, n = e.length; r < n; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function m1(t, e) {
  return e.reduce((r, n) => typeof n < "u" && r ? r[n] : r, t);
}
function y1(t) {
  return qb(wn(Db(t)));
}
function Db(t) {
  return Array.isArray(t) ? t : [t];
}
function wn(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? wn(e) : e));
}
function qb(t) {
  return t.filter((e) => typeof e < "u");
}
function cr(t) {
  return t && typeof t == "object";
}
function v1(t) {
  return cr(t) && Lb(t.then);
}
function Lb(t) {
  return t && typeof t == "function";
}
function g1(t) {
  return t instanceof Error;
}
function Vb(t) {
  if (ti(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function b1(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function Bb(t) {
  return Vb(t) || ti(t) && t.type === "mutation";
}
function qs(t) {
  return Bb(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function x1(t) {
  return ti(t) && t.type === "context";
}
function ti(t) {
  return t && typeof t == "object";
}
function Oo(t, e) {
  try {
    return gn(t, e);
  } catch (r) {
    return console.error(r), {};
  }
}
var Np = {}, Dp = {}, qp = {}, nn, Lp;
function ze() {
  if (Lp) return nn;
  Lp = 1;
  var t = function(e) {
    return e && e.Math === Math && e;
  };
  return nn = // eslint-disable-next-line es/no-global-this -- safe
  t(typeof globalThis == "object" && globalThis) || t(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  t(typeof self == "object" && self) || t(typeof Pr == "object" && Pr) || t(typeof nn == "object" && nn) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ (function() {
    return this;
  })() || Function("return this")(), nn;
}
var wo, Vp;
function dt() {
  return Vp || (Vp = 1, wo = function(t) {
    try {
      return !!t();
    } catch {
      return !0;
    }
  }), wo;
}
var Eo, Bp;
function ri() {
  if (Bp) return Eo;
  Bp = 1;
  var t = /* @__PURE__ */ dt();
  return Eo = !t(function() {
    var e = (function() {
    }).bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  }), Eo;
}
var Ao, Up;
function Of() {
  if (Up) return Ao;
  Up = 1;
  var t = /* @__PURE__ */ ri(), e = Function.prototype, r = e.apply, n = e.call;
  return Ao = typeof Reflect == "object" && Reflect.apply || (t ? n.bind(r) : function() {
    return n.apply(r, arguments);
  }), Ao;
}
var jo, Jp;
function mt() {
  if (Jp) return jo;
  Jp = 1;
  var t = /* @__PURE__ */ ri(), e = Function.prototype, r = e.call, n = t && e.bind.bind(r, r);
  return jo = t ? n : function(s) {
    return function() {
      return r.apply(s, arguments);
    };
  }, jo;
}
var Po, Hp;
function wf() {
  if (Hp) return Po;
  Hp = 1;
  var t = /* @__PURE__ */ mt(), e = t({}.toString), r = t("".slice);
  return Po = function(n) {
    return r(e(n), 8, -1);
  }, Po;
}
var Ro, Gp;
function Ub() {
  if (Gp) return Ro;
  Gp = 1;
  var t = /* @__PURE__ */ wf(), e = /* @__PURE__ */ mt();
  return Ro = function(r) {
    if (t(r) === "Function") return e(r);
  }, Ro;
}
var _o, Kp;
function We() {
  if (Kp) return _o;
  Kp = 1;
  var t = typeof document == "object" && document.all;
  return _o = typeof t > "u" && t !== void 0 ? function(e) {
    return typeof e == "function" || e === t;
  } : function(e) {
    return typeof e == "function";
  }, _o;
}
var To = {}, Co, zp;
function $t() {
  if (zp) return Co;
  zp = 1;
  var t = /* @__PURE__ */ dt();
  return Co = !t(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  }), Co;
}
var $o, Wp;
function dr() {
  if (Wp) return $o;
  Wp = 1;
  var t = /* @__PURE__ */ ri(), e = Function.prototype.call;
  return $o = t ? e.bind(e) : function() {
    return e.apply(e, arguments);
  }, $o;
}
var Io = {}, Yp;
function S1() {
  if (Yp) return Io;
  Yp = 1;
  var t = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, r = e && !t.call({ 1: 2 }, 1);
  return Io.f = r ? function(s) {
    var i = e(this, s);
    return !!i && i.enumerable;
  } : t, Io;
}
var Mo, Xp;
function En() {
  return Xp || (Xp = 1, Mo = function(t, e) {
    return {
      enumerable: !(t & 1),
      configurable: !(t & 2),
      writable: !(t & 4),
      value: e
    };
  }), Mo;
}
var Fo, Qp;
function O1() {
  if (Qp) return Fo;
  Qp = 1;
  var t = /* @__PURE__ */ mt(), e = /* @__PURE__ */ dt(), r = /* @__PURE__ */ wf(), n = Object, s = t("".split);
  return Fo = e(function() {
    return !n("z").propertyIsEnumerable(0);
  }) ? function(i) {
    return r(i) === "String" ? s(i, "") : n(i);
  } : n, Fo;
}
var ko, Zp;
function Ef() {
  return Zp || (Zp = 1, ko = function(t) {
    return t == null;
  }), ko;
}
var No, ed;
function ni() {
  if (ed) return No;
  ed = 1;
  var t = /* @__PURE__ */ Ef(), e = TypeError;
  return No = function(r) {
    if (t(r)) throw new e("Can't call method on " + r);
    return r;
  }, No;
}
var Do, td;
function An() {
  if (td) return Do;
  td = 1;
  var t = /* @__PURE__ */ O1(), e = /* @__PURE__ */ ni();
  return Do = function(r) {
    return t(e(r));
  }, Do;
}
var qo, rd;
function Ot() {
  if (rd) return qo;
  rd = 1;
  var t = /* @__PURE__ */ We();
  return qo = function(e) {
    return typeof e == "object" ? e !== null : t(e);
  }, qo;
}
var Lo, nd;
function Af() {
  return nd || (nd = 1, Lo = {}), Lo;
}
var Vo, sd;
function jn() {
  if (sd) return Vo;
  sd = 1;
  var t = /* @__PURE__ */ Af(), e = /* @__PURE__ */ ze(), r = /* @__PURE__ */ We(), n = function(s) {
    return r(s) ? s : void 0;
  };
  return Vo = function(s, i) {
    return arguments.length < 2 ? n(t[s]) || n(e[s]) : t[s] && t[s][i] || e[s] && e[s][i];
  }, Vo;
}
var Bo, id;
function si() {
  if (id) return Bo;
  id = 1;
  var t = /* @__PURE__ */ mt();
  return Bo = t({}.isPrototypeOf), Bo;
}
var Uo, od;
function w1() {
  if (od) return Uo;
  od = 1;
  var t = /* @__PURE__ */ ze(), e = t.navigator, r = e && e.userAgent;
  return Uo = r ? String(r) : "", Uo;
}
var Jo, ad;
function E1() {
  if (ad) return Jo;
  ad = 1;
  var t = /* @__PURE__ */ ze(), e = /* @__PURE__ */ w1(), r = t.process, n = t.Deno, s = r && r.versions || n && n.version, i = s && s.v8, o, a;
  return i && (o = i.split("."), a = o[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !a && e && (o = e.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = e.match(/Chrome\/(\d+)/), o && (a = +o[1]))), Jo = a, Jo;
}
var Ho, cd;
function Jb() {
  if (cd) return Ho;
  cd = 1;
  var t = /* @__PURE__ */ E1(), e = /* @__PURE__ */ dt(), r = /* @__PURE__ */ ze(), n = r.String;
  return Ho = !!Object.getOwnPropertySymbols && !e(function() {
    var s = Symbol("symbol detection");
    return !n(s) || !(Object(s) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && t && t < 41;
  }), Ho;
}
var Go, ud;
function Hb() {
  if (ud) return Go;
  ud = 1;
  var t = /* @__PURE__ */ Jb();
  return Go = t && !Symbol.sham && typeof Symbol.iterator == "symbol", Go;
}
var Ko, ld;
function Gb() {
  if (ld) return Ko;
  ld = 1;
  var t = /* @__PURE__ */ jn(), e = /* @__PURE__ */ We(), r = /* @__PURE__ */ si(), n = /* @__PURE__ */ Hb(), s = Object;
  return Ko = n ? function(i) {
    return typeof i == "symbol";
  } : function(i) {
    var o = t("Symbol");
    return e(o) && r(o.prototype, s(i));
  }, Ko;
}
var zo, fd;
function jf() {
  if (fd) return zo;
  fd = 1;
  var t = String;
  return zo = function(e) {
    try {
      return t(e);
    } catch {
      return "Object";
    }
  }, zo;
}
var Wo, hd;
function ii() {
  if (hd) return Wo;
  hd = 1;
  var t = /* @__PURE__ */ We(), e = /* @__PURE__ */ jf(), r = TypeError;
  return Wo = function(n) {
    if (t(n)) return n;
    throw new r(e(n) + " is not a function");
  }, Wo;
}
var Yo, pd;
function Pf() {
  if (pd) return Yo;
  pd = 1;
  var t = /* @__PURE__ */ ii(), e = /* @__PURE__ */ Ef();
  return Yo = function(r, n) {
    var s = r[n];
    return e(s) ? void 0 : t(s);
  }, Yo;
}
var Xo, dd;
function A1() {
  if (dd) return Xo;
  dd = 1;
  var t = /* @__PURE__ */ dr(), e = /* @__PURE__ */ We(), r = /* @__PURE__ */ Ot(), n = TypeError;
  return Xo = function(s, i) {
    var o, a;
    if (i === "string" && e(o = s.toString) && !r(a = t(o, s)) || e(o = s.valueOf) && !r(a = t(o, s)) || i !== "string" && e(o = s.toString) && !r(a = t(o, s))) return a;
    throw new n("Can't convert object to primitive value");
  }, Xo;
}
var Qo = { exports: {} }, Zo, md;
function Pn() {
  return md || (md = 1, Zo = !0), Zo;
}
var ea, yd;
function j1() {
  if (yd) return ea;
  yd = 1;
  var t = /* @__PURE__ */ ze(), e = Object.defineProperty;
  return ea = function(r, n) {
    try {
      e(t, r, { value: n, configurable: !0, writable: !0 });
    } catch {
      t[r] = n;
    }
    return n;
  }, ea;
}
var vd;
function Kb() {
  if (vd) return Qo.exports;
  vd = 1;
  var t = /* @__PURE__ */ Pn(), e = /* @__PURE__ */ ze(), r = /* @__PURE__ */ j1(), n = "__core-js_shared__", s = Qo.exports = e[n] || r(n, {});
  return (s.versions || (s.versions = [])).push({
    version: "3.45.1",
    mode: t ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), Qo.exports;
}
var ta, gd;
function zb() {
  if (gd) return ta;
  gd = 1;
  var t = /* @__PURE__ */ Kb();
  return ta = function(e, r) {
    return t[e] || (t[e] = r || {});
  }, ta;
}
var ra, bd;
function Wb() {
  if (bd) return ra;
  bd = 1;
  var t = /* @__PURE__ */ ni(), e = Object;
  return ra = function(r) {
    return e(t(r));
  }, ra;
}
var na, xd;
function wt() {
  if (xd) return na;
  xd = 1;
  var t = /* @__PURE__ */ mt(), e = /* @__PURE__ */ Wb(), r = t({}.hasOwnProperty);
  return na = Object.hasOwn || function(s, i) {
    return r(e(s), i);
  }, na;
}
var sa, Sd;
function Yb() {
  if (Sd) return sa;
  Sd = 1;
  var t = /* @__PURE__ */ mt(), e = 0, r = Math.random(), n = t(1.1.toString);
  return sa = function(s) {
    return "Symbol(" + (s === void 0 ? "" : s) + ")_" + n(++e + r, 36);
  }, sa;
}
var ia, Od;
function It() {
  if (Od) return ia;
  Od = 1;
  var t = /* @__PURE__ */ ze(), e = /* @__PURE__ */ zb(), r = /* @__PURE__ */ wt(), n = /* @__PURE__ */ Yb(), s = /* @__PURE__ */ Jb(), i = /* @__PURE__ */ Hb(), o = t.Symbol, a = e("wks"), c = i ? o.for || o : o && o.withoutSetter || n;
  return ia = function(u) {
    return r(a, u) || (a[u] = s && r(o, u) ? o[u] : c("Symbol." + u)), a[u];
  }, ia;
}
var oa, wd;
function P1() {
  if (wd) return oa;
  wd = 1;
  var t = /* @__PURE__ */ dr(), e = /* @__PURE__ */ Ot(), r = /* @__PURE__ */ Gb(), n = /* @__PURE__ */ Pf(), s = /* @__PURE__ */ A1(), i = /* @__PURE__ */ It(), o = TypeError, a = i("toPrimitive");
  return oa = function(c, u) {
    if (!e(c) || r(c)) return c;
    var f = n(c, a), l;
    if (f) {
      if (u === void 0 && (u = "default"), l = t(f, c, u), !e(l) || r(l)) return l;
      throw new o("Can't convert object to primitive value");
    }
    return u === void 0 && (u = "number"), s(c, u);
  }, oa;
}
var aa, Ed;
function Xb() {
  if (Ed) return aa;
  Ed = 1;
  var t = /* @__PURE__ */ P1(), e = /* @__PURE__ */ Gb();
  return aa = function(r) {
    var n = t(r, "string");
    return e(n) ? n : n + "";
  }, aa;
}
var ca, Ad;
function Qb() {
  if (Ad) return ca;
  Ad = 1;
  var t = /* @__PURE__ */ ze(), e = /* @__PURE__ */ Ot(), r = t.document, n = e(r) && e(r.createElement);
  return ca = function(s) {
    return n ? r.createElement(s) : {};
  }, ca;
}
var ua, jd;
function Zb() {
  if (jd) return ua;
  jd = 1;
  var t = /* @__PURE__ */ $t(), e = /* @__PURE__ */ dt(), r = /* @__PURE__ */ Qb();
  return ua = !t && !e(function() {
    return Object.defineProperty(r("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), ua;
}
var Pd;
function ex() {
  if (Pd) return To;
  Pd = 1;
  var t = /* @__PURE__ */ $t(), e = /* @__PURE__ */ dr(), r = /* @__PURE__ */ S1(), n = /* @__PURE__ */ En(), s = /* @__PURE__ */ An(), i = /* @__PURE__ */ Xb(), o = /* @__PURE__ */ wt(), a = /* @__PURE__ */ Zb(), c = Object.getOwnPropertyDescriptor;
  return To.f = t ? c : function(f, l) {
    if (f = s(f), l = i(l), a) try {
      return c(f, l);
    } catch {
    }
    if (o(f, l)) return n(!e(r.f, f, l), f[l]);
  }, To;
}
var la, Rd;
function R1() {
  if (Rd) return la;
  Rd = 1;
  var t = /* @__PURE__ */ dt(), e = /* @__PURE__ */ We(), r = /#|\.prototype\./, n = function(c, u) {
    var f = i[s(c)];
    return f === a ? !0 : f === o ? !1 : e(u) ? t(u) : !!u;
  }, s = n.normalize = function(c) {
    return String(c).replace(r, ".").toLowerCase();
  }, i = n.data = {}, o = n.NATIVE = "N", a = n.POLYFILL = "P";
  return la = n, la;
}
var fa, _d;
function tx() {
  if (_d) return fa;
  _d = 1;
  var t = /* @__PURE__ */ Ub(), e = /* @__PURE__ */ ii(), r = /* @__PURE__ */ ri(), n = t(t.bind);
  return fa = function(s, i) {
    return e(s), i === void 0 ? s : r ? n(s, i) : function() {
      return s.apply(i, arguments);
    };
  }, fa;
}
var ha = {}, pa, Td;
function rx() {
  if (Td) return pa;
  Td = 1;
  var t = /* @__PURE__ */ $t(), e = /* @__PURE__ */ dt();
  return pa = t && e(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), pa;
}
var da, Cd;
function mr() {
  if (Cd) return da;
  Cd = 1;
  var t = /* @__PURE__ */ Ot(), e = String, r = TypeError;
  return da = function(n) {
    if (t(n)) return n;
    throw new r(e(n) + " is not an object");
  }, da;
}
var $d;
function Hr() {
  if ($d) return ha;
  $d = 1;
  var t = /* @__PURE__ */ $t(), e = /* @__PURE__ */ Zb(), r = /* @__PURE__ */ rx(), n = /* @__PURE__ */ mr(), s = /* @__PURE__ */ Xb(), i = TypeError, o = Object.defineProperty, a = Object.getOwnPropertyDescriptor, c = "enumerable", u = "configurable", f = "writable";
  return ha.f = t ? r ? function(d, h, m) {
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
  }, ha;
}
var ma, Id;
function Mt() {
  if (Id) return ma;
  Id = 1;
  var t = /* @__PURE__ */ $t(), e = /* @__PURE__ */ Hr(), r = /* @__PURE__ */ En();
  return ma = t ? function(n, s, i) {
    return e.f(n, s, r(1, i));
  } : function(n, s, i) {
    return n[s] = i, n;
  }, ma;
}
var ya, Md;
function oi() {
  if (Md) return ya;
  Md = 1;
  var t = /* @__PURE__ */ ze(), e = /* @__PURE__ */ Of(), r = /* @__PURE__ */ Ub(), n = /* @__PURE__ */ We(), s = ex().f, i = /* @__PURE__ */ R1(), o = /* @__PURE__ */ Af(), a = /* @__PURE__ */ tx(), c = /* @__PURE__ */ Mt(), u = /* @__PURE__ */ wt(), f = function(l) {
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
  return ya = function(l, d) {
    var h = l.target, m = l.global, p = l.stat, v = l.proto, g = m ? t : p ? t[h] : t[h] && t[h].prototype, y = m ? o : o[h] || c(o, h, {})[h], x = y.prototype, b, O, A, _, E, I, C, S, P;
    for (_ in d)
      b = i(m ? _ : h + (p ? "." : "#") + _, l.forced), O = !b && g && u(g, _), I = y[_], O && (l.dontCallGetSet ? (P = s(g, _), C = P && P.value) : C = g[_]), E = O && C ? C : d[_], !(!b && !v && typeof I == typeof E) && (l.bind && O ? S = a(E, t) : l.wrap && O ? S = f(E) : v && n(E) ? S = r(E) : S = E, (l.sham || E && E.sham || I && I.sham) && c(S, "sham", !0), c(y, _, S), v && (A = h + "Prototype", u(o, A) || c(o, A, {}), c(o[A], _, E), l.real && x && (b || !x[_]) && c(x, _, E)));
  }, ya;
}
var va, Fd;
function Rf() {
  if (Fd) return va;
  Fd = 1;
  var t = /* @__PURE__ */ zb(), e = /* @__PURE__ */ Yb(), r = t("keys");
  return va = function(n) {
    return r[n] || (r[n] = e(n));
  }, va;
}
var ga, kd;
function _1() {
  if (kd) return ga;
  kd = 1;
  var t = /* @__PURE__ */ dt();
  return ga = !t(function() {
    function e() {
    }
    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
  }), ga;
}
var ba, Nd;
function _f() {
  if (Nd) return ba;
  Nd = 1;
  var t = /* @__PURE__ */ wt(), e = /* @__PURE__ */ We(), r = /* @__PURE__ */ Wb(), n = /* @__PURE__ */ Rf(), s = /* @__PURE__ */ _1(), i = n("IE_PROTO"), o = Object, a = o.prototype;
  return ba = s ? o.getPrototypeOf : function(c) {
    var u = r(c);
    if (t(u, i)) return u[i];
    var f = u.constructor;
    return e(f) && u instanceof f ? f.prototype : u instanceof o ? a : null;
  }, ba;
}
var xa, Dd;
function T1() {
  if (Dd) return xa;
  Dd = 1;
  var t = /* @__PURE__ */ mt(), e = /* @__PURE__ */ ii();
  return xa = function(r, n, s) {
    try {
      return t(e(Object.getOwnPropertyDescriptor(r, n)[s]));
    } catch {
    }
  }, xa;
}
var Sa, qd;
function C1() {
  if (qd) return Sa;
  qd = 1;
  var t = /* @__PURE__ */ Ot();
  return Sa = function(e) {
    return t(e) || e === null;
  }, Sa;
}
var Oa, Ld;
function $1() {
  if (Ld) return Oa;
  Ld = 1;
  var t = /* @__PURE__ */ C1(), e = String, r = TypeError;
  return Oa = function(n) {
    if (t(n)) return n;
    throw new r("Can't set " + e(n) + " as a prototype");
  }, Oa;
}
var wa, Vd;
function ai() {
  if (Vd) return wa;
  Vd = 1;
  var t = /* @__PURE__ */ T1(), e = /* @__PURE__ */ Ot(), r = /* @__PURE__ */ ni(), n = /* @__PURE__ */ $1();
  return wa = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
    var s = !1, i = {}, o;
    try {
      o = t(Object.prototype, "__proto__", "set"), o(i, []), s = i instanceof Array;
    } catch {
    }
    return function(c, u) {
      return r(c), n(u), e(c) && (s ? o(c, u) : c.__proto__ = u), c;
    };
  })() : void 0), wa;
}
var Ea = {}, Aa, Bd;
function I1() {
  if (Bd) return Aa;
  Bd = 1;
  var t = Math.ceil, e = Math.floor;
  return Aa = Math.trunc || function(n) {
    var s = +n;
    return (s > 0 ? e : t)(s);
  }, Aa;
}
var ja, Ud;
function Tf() {
  if (Ud) return ja;
  Ud = 1;
  var t = /* @__PURE__ */ I1();
  return ja = function(e) {
    var r = +e;
    return r !== r || r === 0 ? 0 : t(r);
  }, ja;
}
var Pa, Jd;
function M1() {
  if (Jd) return Pa;
  Jd = 1;
  var t = /* @__PURE__ */ Tf(), e = Math.max, r = Math.min;
  return Pa = function(n, s) {
    var i = t(n);
    return i < 0 ? e(i + s, 0) : r(i, s);
  }, Pa;
}
var Ra, Hd;
function F1() {
  if (Hd) return Ra;
  Hd = 1;
  var t = /* @__PURE__ */ Tf(), e = Math.min;
  return Ra = function(r) {
    var n = t(r);
    return n > 0 ? e(n, 9007199254740991) : 0;
  }, Ra;
}
var _a, Gd;
function nx() {
  if (Gd) return _a;
  Gd = 1;
  var t = /* @__PURE__ */ F1();
  return _a = function(e) {
    return t(e.length);
  }, _a;
}
var Ta, Kd;
function k1() {
  if (Kd) return Ta;
  Kd = 1;
  var t = /* @__PURE__ */ An(), e = /* @__PURE__ */ M1(), r = /* @__PURE__ */ nx(), n = function(s) {
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
  return Ta = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: n(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: n(!1)
  }, Ta;
}
var Ca, zd;
function Cf() {
  return zd || (zd = 1, Ca = {}), Ca;
}
var $a, Wd;
function sx() {
  if (Wd) return $a;
  Wd = 1;
  var t = /* @__PURE__ */ mt(), e = /* @__PURE__ */ wt(), r = /* @__PURE__ */ An(), n = k1().indexOf, s = /* @__PURE__ */ Cf(), i = t([].push);
  return $a = function(o, a) {
    var c = r(o), u = 0, f = [], l;
    for (l in c) !e(s, l) && e(c, l) && i(f, l);
    for (; a.length > u; ) e(c, l = a[u++]) && (~n(f, l) || i(f, l));
    return f;
  }, $a;
}
var Ia, Yd;
function $f() {
  return Yd || (Yd = 1, Ia = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ]), Ia;
}
var Xd;
function N1() {
  if (Xd) return Ea;
  Xd = 1;
  var t = /* @__PURE__ */ sx(), e = /* @__PURE__ */ $f(), r = e.concat("length", "prototype");
  return Ea.f = Object.getOwnPropertyNames || function(s) {
    return t(s, r);
  }, Ea;
}
var Ma = {}, Qd;
function D1() {
  return Qd || (Qd = 1, Ma.f = Object.getOwnPropertySymbols), Ma;
}
var Fa, Zd;
function q1() {
  if (Zd) return Fa;
  Zd = 1;
  var t = /* @__PURE__ */ jn(), e = /* @__PURE__ */ mt(), r = /* @__PURE__ */ N1(), n = /* @__PURE__ */ D1(), s = /* @__PURE__ */ mr(), i = e([].concat);
  return Fa = t("Reflect", "ownKeys") || function(a) {
    var c = r.f(s(a)), u = n.f;
    return u ? i(c, u(a)) : c;
  }, Fa;
}
var ka, em;
function ix() {
  if (em) return ka;
  em = 1;
  var t = /* @__PURE__ */ wt(), e = /* @__PURE__ */ q1(), r = /* @__PURE__ */ ex(), n = /* @__PURE__ */ Hr();
  return ka = function(s, i, o) {
    for (var a = e(i), c = n.f, u = r.f, f = 0; f < a.length; f++) {
      var l = a[f];
      !t(s, l) && !(o && t(o, l)) && c(s, l, u(i, l));
    }
  }, ka;
}
var Na = {}, Da, tm;
function L1() {
  if (tm) return Da;
  tm = 1;
  var t = /* @__PURE__ */ sx(), e = /* @__PURE__ */ $f();
  return Da = Object.keys || function(n) {
    return t(n, e);
  }, Da;
}
var rm;
function V1() {
  if (rm) return Na;
  rm = 1;
  var t = /* @__PURE__ */ $t(), e = /* @__PURE__ */ rx(), r = /* @__PURE__ */ Hr(), n = /* @__PURE__ */ mr(), s = /* @__PURE__ */ An(), i = /* @__PURE__ */ L1();
  return Na.f = t && !e ? Object.defineProperties : function(a, c) {
    n(a);
    for (var u = s(c), f = i(c), l = f.length, d = 0, h; l > d; ) r.f(a, h = f[d++], u[h]);
    return a;
  }, Na;
}
var qa, nm;
function B1() {
  if (nm) return qa;
  nm = 1;
  var t = /* @__PURE__ */ jn();
  return qa = t("document", "documentElement"), qa;
}
var La, sm;
function If() {
  if (sm) return La;
  sm = 1;
  var t = /* @__PURE__ */ mr(), e = /* @__PURE__ */ V1(), r = /* @__PURE__ */ $f(), n = /* @__PURE__ */ Cf(), s = /* @__PURE__ */ B1(), i = /* @__PURE__ */ Qb(), o = /* @__PURE__ */ Rf(), a = ">", c = "<", u = "prototype", f = "script", l = o("IE_PROTO"), d = function() {
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
  return n[l] = !0, La = Object.create || function(x, b) {
    var O;
    return x !== null ? (d[u] = t(x), O = new d(), d[u] = null, O[l] = x) : O = g(), b === void 0 ? O : e.f(O, b);
  }, La;
}
var Va, im;
function ox() {
  if (im) return Va;
  im = 1;
  var t = /* @__PURE__ */ Ot(), e = /* @__PURE__ */ Mt();
  return Va = function(r, n) {
    t(n) && "cause" in n && e(r, "cause", n.cause);
  }, Va;
}
var Ba, om;
function U1() {
  if (om) return Ba;
  om = 1;
  var t = /* @__PURE__ */ mt(), e = Error, r = t("".replace), n = (function(o) {
    return String(new e(o).stack);
  })("zxcasd"), s = /\n\s*at [^:]*:[^\n]*/, i = s.test(n);
  return Ba = function(o, a) {
    if (i && typeof o == "string" && !e.prepareStackTrace)
      for (; a--; ) o = r(o, s, "");
    return o;
  }, Ba;
}
var Ua, am;
function J1() {
  if (am) return Ua;
  am = 1;
  var t = /* @__PURE__ */ dt(), e = /* @__PURE__ */ En();
  return Ua = !t(function() {
    var r = new Error("a");
    return "stack" in r ? (Object.defineProperty(r, "stack", e(1, 7)), r.stack !== 7) : !0;
  }), Ua;
}
var Ja, cm;
function ax() {
  if (cm) return Ja;
  cm = 1;
  var t = /* @__PURE__ */ Mt(), e = /* @__PURE__ */ U1(), r = /* @__PURE__ */ J1(), n = Error.captureStackTrace;
  return Ja = function(s, i, o, a) {
    r && (n ? n(s, i) : t(s, "stack", e(o, a)));
  }, Ja;
}
var Ha, um;
function Gr() {
  return um || (um = 1, Ha = {}), Ha;
}
var Ga, lm;
function H1() {
  if (lm) return Ga;
  lm = 1;
  var t = /* @__PURE__ */ It(), e = /* @__PURE__ */ Gr(), r = t("iterator"), n = Array.prototype;
  return Ga = function(s) {
    return s !== void 0 && (e.Array === s || n[r] === s);
  }, Ga;
}
var Ka, fm;
function Mf() {
  if (fm) return Ka;
  fm = 1;
  var t = /* @__PURE__ */ It(), e = t("toStringTag"), r = {};
  return r[e] = "z", Ka = String(r) === "[object z]", Ka;
}
var za, hm;
function Ff() {
  if (hm) return za;
  hm = 1;
  var t = /* @__PURE__ */ Mf(), e = /* @__PURE__ */ We(), r = /* @__PURE__ */ wf(), n = /* @__PURE__ */ It(), s = n("toStringTag"), i = Object, o = r(/* @__PURE__ */ (function() {
    return arguments;
  })()) === "Arguments", a = function(c, u) {
    try {
      return c[u];
    } catch {
    }
  };
  return za = t ? r : function(c) {
    var u, f, l;
    return c === void 0 ? "Undefined" : c === null ? "Null" : typeof (f = a(u = i(c), s)) == "string" ? f : o ? r(u) : (l = r(u)) === "Object" && e(u.callee) ? "Arguments" : l;
  }, za;
}
var Wa, pm;
function cx() {
  if (pm) return Wa;
  pm = 1;
  var t = /* @__PURE__ */ Ff(), e = /* @__PURE__ */ Pf(), r = /* @__PURE__ */ Ef(), n = /* @__PURE__ */ Gr(), s = /* @__PURE__ */ It(), i = s("iterator");
  return Wa = function(o) {
    if (!r(o)) return e(o, i) || e(o, "@@iterator") || n[t(o)];
  }, Wa;
}
var Ya, dm;
function G1() {
  if (dm) return Ya;
  dm = 1;
  var t = /* @__PURE__ */ dr(), e = /* @__PURE__ */ ii(), r = /* @__PURE__ */ mr(), n = /* @__PURE__ */ jf(), s = /* @__PURE__ */ cx(), i = TypeError;
  return Ya = function(o, a) {
    var c = arguments.length < 2 ? s(o) : a;
    if (e(c)) return r(t(c, o));
    throw new i(n(o) + " is not iterable");
  }, Ya;
}
var Xa, mm;
function K1() {
  if (mm) return Xa;
  mm = 1;
  var t = /* @__PURE__ */ dr(), e = /* @__PURE__ */ mr(), r = /* @__PURE__ */ Pf();
  return Xa = function(n, s, i) {
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
  }, Xa;
}
var Qa, ym;
function z1() {
  if (ym) return Qa;
  ym = 1;
  var t = /* @__PURE__ */ tx(), e = /* @__PURE__ */ dr(), r = /* @__PURE__ */ mr(), n = /* @__PURE__ */ jf(), s = /* @__PURE__ */ H1(), i = /* @__PURE__ */ nx(), o = /* @__PURE__ */ si(), a = /* @__PURE__ */ G1(), c = /* @__PURE__ */ cx(), u = /* @__PURE__ */ K1(), f = TypeError, l = function(h, m) {
    this.stopped = h, this.result = m;
  }, d = l.prototype;
  return Qa = function(h, m, p) {
    var v = p && p.that, g = !!(p && p.AS_ENTRIES), y = !!(p && p.IS_RECORD), x = !!(p && p.IS_ITERATOR), b = !!(p && p.INTERRUPTED), O = t(m, v), A, _, E, I, C, S, P, T = function(D) {
      return A && u(A, "normal"), new l(!0, D);
    }, B = function(D) {
      return g ? (r(D), b ? O(D[0], D[1], T) : O(D[0], D[1])) : b ? O(D, T) : O(D);
    };
    if (y)
      A = h.iterator;
    else if (x)
      A = h;
    else {
      if (_ = c(h), !_) throw new f(n(h) + " is not iterable");
      if (s(_)) {
        for (E = 0, I = i(h); I > E; E++)
          if (C = B(h[E]), C && o(d, C)) return C;
        return new l(!1);
      }
      A = a(h, _);
    }
    for (S = y ? h.next : A.next; !(P = e(S, A)).done; ) {
      try {
        C = B(P.value);
      } catch (D) {
        u(A, "throw", D);
      }
      if (typeof C == "object" && C && o(d, C)) return C;
    }
    return new l(!1);
  }, Qa;
}
var Za, vm;
function kf() {
  if (vm) return Za;
  vm = 1;
  var t = /* @__PURE__ */ Ff(), e = String;
  return Za = function(r) {
    if (t(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return e(r);
  }, Za;
}
var ec, gm;
function ux() {
  if (gm) return ec;
  gm = 1;
  var t = /* @__PURE__ */ kf();
  return ec = function(e, r) {
    return e === void 0 ? arguments.length < 2 ? "" : r : t(e);
  }, ec;
}
var bm;
function W1() {
  if (bm) return qp;
  bm = 1;
  var t = /* @__PURE__ */ oi(), e = /* @__PURE__ */ si(), r = /* @__PURE__ */ _f(), n = /* @__PURE__ */ ai(), s = /* @__PURE__ */ ix(), i = /* @__PURE__ */ If(), o = /* @__PURE__ */ Mt(), a = /* @__PURE__ */ En(), c = /* @__PURE__ */ ox(), u = /* @__PURE__ */ ax(), f = /* @__PURE__ */ z1(), l = /* @__PURE__ */ ux(), d = /* @__PURE__ */ It(), h = d("toStringTag"), m = Error, p = [].push, v = function(x, b) {
    var O = e(g, this), A;
    n ? A = n(new m(), O ? r(this) : g) : (A = O ? this : i(g), o(A, h, "Error")), b !== void 0 && o(A, "message", l(b)), u(A, v, A.stack, 1), arguments.length > 2 && c(A, arguments[2]);
    var _ = [];
    return f(x, p, { that: _ }), o(A, "errors", _), A;
  };
  n ? n(v, m) : s(v, m, { name: !0 });
  var g = v.prototype = i(m.prototype, {
    constructor: a(1, v),
    message: a(1, ""),
    name: a(1, "AggregateError")
  });
  return t({ global: !0, constructor: !0, arity: 2 }, {
    AggregateError: v
  }), qp;
}
var xm;
function lx() {
  return xm || (xm = 1, W1()), Dp;
}
var Sm;
function fx() {
  return Sm || (Sm = 1, lx()), Np;
}
var Om = {}, tc, wm;
function Y1() {
  if (wm) return tc;
  wm = 1;
  var t = Hr().f;
  return tc = function(e, r, n) {
    n in e || t(e, n, {
      configurable: !0,
      get: function() {
        return r[n];
      },
      set: function(s) {
        r[n] = s;
      }
    });
  }, tc;
}
var rc, Em;
function X1() {
  if (Em) return rc;
  Em = 1;
  var t = /* @__PURE__ */ We(), e = /* @__PURE__ */ Ot(), r = /* @__PURE__ */ ai();
  return rc = function(n, s, i) {
    var o, a;
    return (
      // it can work only with native `setPrototypeOf`
      r && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      t(o = s.constructor) && o !== i && e(a = o.prototype) && a !== i.prototype && r(n, a), n
    );
  }, rc;
}
var nc, Am;
function hx() {
  if (Am) return nc;
  Am = 1;
  var t = /* @__PURE__ */ jn(), e = /* @__PURE__ */ wt(), r = /* @__PURE__ */ Mt(), n = /* @__PURE__ */ si(), s = /* @__PURE__ */ ai(), i = /* @__PURE__ */ ix(), o = /* @__PURE__ */ Y1(), a = /* @__PURE__ */ X1(), c = /* @__PURE__ */ ux(), u = /* @__PURE__ */ ox(), f = /* @__PURE__ */ ax(), l = /* @__PURE__ */ $t(), d = /* @__PURE__ */ Pn();
  return nc = function(h, m, p, v) {
    var g = "stackTraceLimit", y = v ? 2 : 1, x = h.split("."), b = x[x.length - 1], O = t.apply(null, x);
    if (O) {
      var A = O.prototype;
      if (!d && e(A, "cause") && delete A.cause, !p) return O;
      var _ = t("Error"), E = m(function(I, C) {
        var S = c(v ? C : I, void 0), P = v ? new O(I) : new O();
        return S !== void 0 && r(P, "message", S), f(P, E, P.stack, 2), this && n(A, this) && a(P, this, E), arguments.length > y && u(P, arguments[y]), P;
      });
      if (E.prototype = A, b !== "Error" ? s ? s(E, _) : i(E, _, { name: !0 }) : l && g in O && (o(E, O, g), o(E, O, "prepareStackTrace")), i(E, O), !d) try {
        A.name !== b && r(A, "name", b), A.constructor = E;
      } catch {
      }
      return E;
    }
  }, nc;
}
var jm;
function Q1() {
  if (jm) return Om;
  jm = 1;
  var t = /* @__PURE__ */ oi(), e = /* @__PURE__ */ ze(), r = /* @__PURE__ */ Of(), n = /* @__PURE__ */ hx(), s = "WebAssembly", i = e[s], o = new Error("e", { cause: 7 }).cause !== 7, a = function(u, f) {
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
  }), Om;
}
var Pm = {}, Rm;
function Z1() {
  if (Rm) return Pm;
  Rm = 1;
  var t = /* @__PURE__ */ oi(), e = /* @__PURE__ */ jn(), r = /* @__PURE__ */ Of(), n = /* @__PURE__ */ dt(), s = /* @__PURE__ */ hx(), i = "AggregateError", o = e(i), a = !n(function() {
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
  }), Pm;
}
var sc, _m;
function eA() {
  return _m || (_m = 1, sc = function() {
  }), sc;
}
var ic, Tm;
function tA() {
  if (Tm) return ic;
  Tm = 1;
  var t = /* @__PURE__ */ ze(), e = /* @__PURE__ */ We(), r = t.WeakMap;
  return ic = e(r) && /native code/.test(String(r)), ic;
}
var oc, Cm;
function px() {
  if (Cm) return oc;
  Cm = 1;
  var t = /* @__PURE__ */ tA(), e = /* @__PURE__ */ ze(), r = /* @__PURE__ */ Ot(), n = /* @__PURE__ */ Mt(), s = /* @__PURE__ */ wt(), i = /* @__PURE__ */ Kb(), o = /* @__PURE__ */ Rf(), a = /* @__PURE__ */ Cf(), c = "Object already initialized", u = e.TypeError, f = e.WeakMap, l, d, h, m = function(y) {
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
  return oc = {
    set: l,
    get: d,
    has: h,
    enforce: m,
    getterFor: p
  }, oc;
}
var ac, $m;
function rA() {
  if ($m) return ac;
  $m = 1;
  var t = /* @__PURE__ */ $t(), e = /* @__PURE__ */ wt(), r = Function.prototype, n = t && Object.getOwnPropertyDescriptor, s = e(r, "name"), i = s && (function() {
  }).name === "something", o = s && (!t || t && n(r, "name").configurable);
  return ac = {
    EXISTS: s,
    PROPER: i,
    CONFIGURABLE: o
  }, ac;
}
var cc, Im;
function dx() {
  if (Im) return cc;
  Im = 1;
  var t = /* @__PURE__ */ Mt();
  return cc = function(e, r, n, s) {
    return s && s.enumerable ? e[r] = n : t(e, r, n), e;
  }, cc;
}
var uc, Mm;
function mx() {
  if (Mm) return uc;
  Mm = 1;
  var t = /* @__PURE__ */ dt(), e = /* @__PURE__ */ We(), r = /* @__PURE__ */ Ot(), n = /* @__PURE__ */ If(), s = /* @__PURE__ */ _f(), i = /* @__PURE__ */ dx(), o = /* @__PURE__ */ It(), a = /* @__PURE__ */ Pn(), c = o("iterator"), u = !1, f, l, d;
  [].keys && (d = [].keys(), "next" in d ? (l = s(s(d)), l !== Object.prototype && (f = l)) : u = !0);
  var h = !r(f) || t(function() {
    var m = {};
    return f[c].call(m) !== m;
  });
  return h ? f = {} : a && (f = n(f)), e(f[c]) || i(f, c, function() {
    return this;
  }), uc = {
    IteratorPrototype: f,
    BUGGY_SAFARI_ITERATORS: u
  }, uc;
}
var lc, Fm;
function nA() {
  if (Fm) return lc;
  Fm = 1;
  var t = /* @__PURE__ */ Mf(), e = /* @__PURE__ */ Ff();
  return lc = t ? {}.toString : function() {
    return "[object " + e(this) + "]";
  }, lc;
}
var fc, km;
function Nf() {
  if (km) return fc;
  km = 1;
  var t = /* @__PURE__ */ Mf(), e = Hr().f, r = /* @__PURE__ */ Mt(), n = /* @__PURE__ */ wt(), s = /* @__PURE__ */ nA(), i = /* @__PURE__ */ It(), o = i("toStringTag");
  return fc = function(a, c, u, f) {
    var l = u ? a : a && a.prototype;
    l && (n(l, o) || e(l, o, { configurable: !0, value: c }), f && !t && r(l, "toString", s));
  }, fc;
}
var hc, Nm;
function sA() {
  if (Nm) return hc;
  Nm = 1;
  var t = mx().IteratorPrototype, e = /* @__PURE__ */ If(), r = /* @__PURE__ */ En(), n = /* @__PURE__ */ Nf(), s = /* @__PURE__ */ Gr(), i = function() {
    return this;
  };
  return hc = function(o, a, c, u) {
    var f = a + " Iterator";
    return o.prototype = e(t, { next: r(+!u, c) }), n(o, f, !1, !0), s[f] = i, o;
  }, hc;
}
var pc, Dm;
function yx() {
  if (Dm) return pc;
  Dm = 1;
  var t = /* @__PURE__ */ oi(), e = /* @__PURE__ */ dr(), r = /* @__PURE__ */ Pn(), n = /* @__PURE__ */ rA(), s = /* @__PURE__ */ We(), i = /* @__PURE__ */ sA(), o = /* @__PURE__ */ _f(), a = /* @__PURE__ */ ai(), c = /* @__PURE__ */ Nf(), u = /* @__PURE__ */ Mt(), f = /* @__PURE__ */ dx(), l = /* @__PURE__ */ It(), d = /* @__PURE__ */ Gr(), h = /* @__PURE__ */ mx(), m = n.PROPER, p = n.CONFIGURABLE, v = h.IteratorPrototype, g = h.BUGGY_SAFARI_ITERATORS, y = l("iterator"), x = "keys", b = "values", O = "entries", A = function() {
    return this;
  };
  return pc = function(_, E, I, C, S, P, T) {
    i(I, E, C);
    var B = function(ie) {
      if (ie === S && $) return $;
      if (!g && ie && ie in ne) return ne[ie];
      switch (ie) {
        case x:
          return function() {
            return new I(this, ie);
          };
        case b:
          return function() {
            return new I(this, ie);
          };
        case O:
          return function() {
            return new I(this, ie);
          };
      }
      return function() {
        return new I(this);
      };
    }, D = E + " Iterator", Q = !1, ne = _.prototype, L = ne[y] || ne["@@iterator"] || S && ne[S], $ = !g && L || B(S), H = E === "Array" && ne.entries || L, J, V, se;
    if (H && (J = o(H.call(new _())), J !== Object.prototype && J.next && (!r && o(J) !== v && (a ? a(J, v) : s(J[y]) || f(J, y, A)), c(J, D, !0, !0), r && (d[D] = A))), m && S === b && L && L.name !== b && (!r && p ? u(ne, "name", b) : (Q = !0, $ = function() {
      return e(L, this);
    })), S)
      if (V = {
        values: B(b),
        keys: P ? $ : B(x),
        entries: B(O)
      }, T) for (se in V)
        (g || Q || !(se in ne)) && f(ne, se, V[se]);
      else t({ target: E, proto: !0, forced: g || Q }, V);
    return (!r || T) && ne[y] !== $ && f(ne, y, $, { name: S }), d[E] = $, V;
  }, pc;
}
var dc, qm;
function vx() {
  return qm || (qm = 1, dc = function(t, e) {
    return { value: t, done: e };
  }), dc;
}
var mc, Lm;
function gx() {
  if (Lm) return mc;
  Lm = 1;
  var t = /* @__PURE__ */ An(), e = /* @__PURE__ */ eA(), r = /* @__PURE__ */ Gr(), n = /* @__PURE__ */ px(), s = Hr().f, i = /* @__PURE__ */ yx(), o = /* @__PURE__ */ vx(), a = /* @__PURE__ */ Pn(), c = /* @__PURE__ */ $t(), u = "Array Iterator", f = n.set, l = n.getterFor(u);
  mc = i(Array, "Array", function(h, m) {
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
  return mc;
}
var Vm = {}, yc, Bm;
function iA() {
  if (Bm) return yc;
  Bm = 1;
  var t = /* @__PURE__ */ mt(), e = /* @__PURE__ */ Tf(), r = /* @__PURE__ */ kf(), n = /* @__PURE__ */ ni(), s = t("".charAt), i = t("".charCodeAt), o = t("".slice), a = function(c) {
    return function(u, f) {
      var l = r(n(u)), d = e(f), h = l.length, m, p;
      return d < 0 || d >= h ? c ? "" : void 0 : (m = i(l, d), m < 55296 || m > 56319 || d + 1 === h || (p = i(l, d + 1)) < 56320 || p > 57343 ? c ? s(l, d) : m : c ? o(l, d, d + 2) : (m - 55296 << 10) + (p - 56320) + 65536);
    };
  };
  return yc = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: a(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: a(!0)
  }, yc;
}
var Um;
function oA() {
  if (Um) return Vm;
  Um = 1;
  var t = iA().charAt, e = /* @__PURE__ */ kf(), r = /* @__PURE__ */ px(), n = /* @__PURE__ */ yx(), s = /* @__PURE__ */ vx(), i = "String Iterator", o = r.set, a = r.getterFor(i);
  return n(String, "String", function(c) {
    o(this, {
      type: i,
      string: e(c),
      index: 0
    });
  }, function() {
    var u = a(this), f = u.string, l = u.index, d;
    return l >= f.length ? s(void 0, !0) : (d = t(f, l), u.index += d.length, s(d, !1));
  }), Vm;
}
var vc, Jm;
function aA() {
  if (Jm) return vc;
  Jm = 1, Q1(), lx(), Z1(), gx(), oA();
  var t = /* @__PURE__ */ Af();
  return vc = t.AggregateError, vc;
}
var Hm = {}, gc, Gm;
function cA() {
  return Gm || (Gm = 1, gc = {
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
  }), gc;
}
var Km;
function uA() {
  if (Km) return Hm;
  Km = 1, gx();
  var t = /* @__PURE__ */ cA(), e = /* @__PURE__ */ ze(), r = /* @__PURE__ */ Nf(), n = /* @__PURE__ */ Gr();
  for (var s in t)
    r(e[s], s), n[s] = n.Array;
  return Hm;
}
var bc, zm;
function lA() {
  if (zm) return bc;
  zm = 1, fx();
  var t = /* @__PURE__ */ aA();
  return uA(), bc = t, bc;
}
var xc, Wm;
function fA() {
  if (Wm) return xc;
  Wm = 1;
  var t = /* @__PURE__ */ lA();
  return xc = t, xc;
}
var Sc, Ym;
function hA() {
  if (Ym) return Sc;
  Ym = 1, fx();
  var t = /* @__PURE__ */ fA();
  return Sc = t, Sc;
}
var Oc, Xm;
function pA() {
  return Xm || (Xm = 1, Oc = /* @__PURE__ */ hA()), Oc;
}
var wc, Qm;
function dA() {
  return Qm || (Qm = 1, wc = /* @__PURE__ */ pA()), wc;
}
var mA = dA();
const yA = /* @__PURE__ */ Zs(mA);
class vA extends yA {
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
class me extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(vA, e);
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
class bt extends me {
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
class Z extends me {
}
class Ec extends Z {
}
var Df = function() {
  return !1;
}, Ft = function() {
  return !0;
};
function de(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function le(t) {
  return function e(r) {
    return arguments.length === 0 || de(r) ? e : t.apply(this, arguments);
  };
}
function z(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return de(r) ? e : le(function(s) {
          return t(r, s);
        });
      default:
        return de(r) && de(n) ? e : de(r) ? le(function(s) {
          return t(s, n);
        }) : de(n) ? le(function(s) {
          return t(r, s);
        }) : t(r, n);
    }
  };
}
function gA(t, e) {
  t = t || [], e = e || [];
  var r, n = t.length, s = e.length, i = [];
  for (r = 0; r < n; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < s; )
    i[i.length] = e[r], r += 1;
  return i;
}
function ci(t, e) {
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
function qf(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!de(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, de(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : ci(Math.max(0, i), qf(t, n, r));
  };
}
var xe = /* @__PURE__ */ z(function(e, r) {
  return e === 1 ? le(r) : ci(e, qf(e, [], r));
});
function Le(t) {
  return function e(r, n, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return de(r) ? e : z(function(i, o) {
          return t(r, i, o);
        });
      case 2:
        return de(r) && de(n) ? e : de(r) ? z(function(i, o) {
          return t(i, n, o);
        }) : de(n) ? z(function(i, o) {
          return t(r, i, o);
        }) : le(function(i) {
          return t(r, n, i);
        });
      default:
        return de(r) && de(n) && de(s) ? e : de(r) && de(n) ? z(function(i, o) {
          return t(i, o, s);
        }) : de(r) && de(s) ? z(function(i, o) {
          return t(i, n, o);
        }) : de(n) && de(s) ? z(function(i, o) {
          return t(r, i, o);
        }) : de(r) ? le(function(i) {
          return t(i, n, s);
        }) : de(n) ? le(function(i) {
          return t(r, i, s);
        }) : de(s) ? le(function(i) {
          return t(r, n, i);
        }) : t(r, n, s);
    }
  };
}
const yr = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function bA(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function zt(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!yr(n)) {
      for (var s = 0; s < t.length; ) {
        if (typeof n[t[s]] == "function")
          return n[t[s]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        s += 1;
      }
      if (bA(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function ui(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const Ke = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
var xA = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = Ke.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = ui(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
})();
function SA(t) {
  return function(e) {
    return new xA(t, e);
  };
}
var Lf = /* @__PURE__ */ z(/* @__PURE__ */ zt(["all"], SA, function(e, r) {
  for (var n = 0; n < r.length; ) {
    if (!e(r[n]))
      return !1;
    n += 1;
  }
  return !0;
}));
function Zm(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function Ls(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function OA(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function tt(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function wA(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const un = typeof Object.is == "function" ? Object.is : wA;
var ey = Object.prototype.toString, bx = /* @__PURE__ */ (function() {
  return ey.call(arguments) === "[object Arguments]" ? function(e) {
    return ey.call(e) === "[object Arguments]";
  } : function(e) {
    return tt("callee", e);
  };
})(), EA = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), ty = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], ry = /* @__PURE__ */ (function() {
  return arguments.propertyIsEnumerable("length");
})(), AA = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, fr = /* @__PURE__ */ le(typeof Object.keys == "function" && !ry ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, s = [], i = ry && bx(e);
  for (r in e)
    tt(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (EA)
    for (n = ty.length - 1; n >= 0; )
      r = ty[n], tt(r, e) && !AA(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), ft = /* @__PURE__ */ le(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function ny(t, e, r, n) {
  var s = Zm(t), i = Zm(e);
  function o(a, c) {
    return Vf(a, c, r.slice(), n.slice());
  }
  return !Ls(function(a, c) {
    return !Ls(o, c, a);
  }, i, s);
}
function Vf(t, e, r, n) {
  if (un(t, e))
    return !0;
  var s = ft(t);
  if (s !== ft(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (s) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && OA(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && un(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!un(t.valueOf(), e.valueOf()))
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
      return t.size !== e.size ? !1 : ny(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : ny(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var o = fr(t);
  if (o.length !== fr(e).length)
    return !1;
  var a = r.concat([t]), c = n.concat([e]);
  for (i = o.length - 1; i >= 0; ) {
    var u = o[i];
    if (!(tt(u, e) && Vf(e[u], t[u], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Wt = /* @__PURE__ */ z(function(e, r) {
  return Vf(e, r, [], []);
});
function jA(t, e, r) {
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
function Vs(t, e) {
  return jA(e, t, 0) >= 0;
}
function js(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function Ac(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var sn = function(e) {
  return (e < 10 ? "0" : "") + e;
}, PA = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + sn(e.getUTCMonth() + 1) + "-" + sn(e.getUTCDate()) + "T" + sn(e.getUTCHours()) + ":" + sn(e.getUTCMinutes()) + ":" + sn(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function xx(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function Rn(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function RA(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function Bs(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var _A = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ke.init, t.prototype["@@transducer/result"] = Ke.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
})();
function TA(t) {
  return function(e) {
    return new _A(t, e);
  };
}
var CA = /* @__PURE__ */ z(/* @__PURE__ */ zt(["fantasy-land/filter", "filter"], TA, function(t, e) {
  return Bs(e) ? Rn(function(r, n) {
    return t(e[n]) && (r[n] = e[n]), r;
  }, {}, fr(e)) : (
    // else
    RA(t, e)
  );
})), $A = /* @__PURE__ */ z(function(e, r) {
  return CA(xx(e), r);
});
function Sx(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return Vs(o, a) ? "<Circular>" : Sx(o, a);
  }, n = function(i, o) {
    return js(function(a) {
      return Ac(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + js(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + js(r, t).concat(n(t, $A(function(i) {
        return /^\d+$/.test(i);
      }, fr(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : Ac(PA(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : Ac(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var s = t.toString();
        if (s !== "[object Object]")
          return s;
      }
      return "{" + n(t, fr(t)).join(", ") + "}";
  }
}
var Nr = /* @__PURE__ */ le(function(e) {
  return Sx(e, []);
}), Ox = /* @__PURE__ */ z(function(e, r) {
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
  var o = Nr(e), a = n(o, Nr(r));
  return a !== void 0 && a === o ? e : r;
}), IA = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ke.init, t.prototype["@@transducer/result"] = Ke.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
})(), MA = function(e) {
  return function(r) {
    return new IA(e, r);
  };
}, li = /* @__PURE__ */ z(/* @__PURE__ */ zt(["fantasy-land/map", "map"], MA, function(e, r) {
  switch (Object.prototype.toString.call(r)) {
    case "[object Function]":
      return xe(r.length, function() {
        return e.call(this, r.apply(this, arguments));
      });
    case "[object Object]":
      return Rn(function(n, s) {
        return n[s] = e(r[s]), n;
      }, {}, fr(r));
    default:
      return js(e, r);
  }
}));
const Kr = Number.isInteger || function(e) {
  return e << 0 === e;
};
function Bf(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function fi(t, e) {
  var r = t < 0 ? e.length + t : t;
  return Bf(e) ? e.charAt(r) : e[r];
}
var _n = /* @__PURE__ */ z(function(e, r) {
  if (r != null)
    return Kr(e) ? fi(e, r) : r[e];
}), wx = /* @__PURE__ */ z(function(e, r) {
  return li(_n(e), r);
}), FA = /* @__PURE__ */ le(function(e) {
  return yr(e) ? !0 : !e || typeof e != "object" || Bf(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), sy = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function Ex(t, e, r) {
  return function(s, i, o) {
    if (FA(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[sy] != null)
      return r(s, i, o[sy]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function kA(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var Ax = /* @__PURE__ */ z(function(e, r) {
  return ci(e.length, function() {
    return e.apply(r, arguments);
  });
});
function NA(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function DA(t, e, r, n) {
  return t["@@transducer/result"](r[n](Ax(t["@@transducer/step"], t), e));
}
var Uf = /* @__PURE__ */ Ex(kA, DA, NA), qA = /* @__PURE__ */ (function() {
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
function jx(t) {
  return new qA(t);
}
var zr = /* @__PURE__ */ Le(function(t, e, r) {
  return Uf(typeof t == "function" ? jx(t) : t, e, r);
}), LA = /* @__PURE__ */ le(function(e) {
  return xe(zr(Ox, 0, wx("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (!e[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
}), G = /* @__PURE__ */ le(function(e) {
  return function() {
    return e;
  };
}), VA = /* @__PURE__ */ z(function(e, r) {
  return e && r;
}), BA = /* @__PURE__ */ le(function(e) {
  return xe(zr(Ox, 0, wx("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function UA(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function JA(t, e, r, n) {
  return r[n](t, e);
}
var HA = /* @__PURE__ */ Ex(Rn, JA, UA), GA = /* @__PURE__ */ z(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : HA(function(n, s) {
    return gA(n, li(s, r));
  }, [], e);
}), KA = /* @__PURE__ */ z(function(e, r) {
  return e.apply(this, r);
}), Jf = /* @__PURE__ */ le(function(e) {
  return xe(e.length, e);
});
function zA(t, e, r) {
  if (Kr(t) && yr(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var Us = /* @__PURE__ */ le(function(e) {
  return e == null;
}), F = /* @__PURE__ */ Le(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !Us(n) && tt(s, n) && typeof n[s] == "object" ? n[s] : Kr(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return zA(s, r, n);
}), WA = /* @__PURE__ */ Le(function(e, r, n) {
  return F([e], r, n);
});
function Hf(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var YA = /* @__PURE__ */ z(function(e, r) {
  var n = xe(e, r);
  return xe(e, function() {
    return Rn(GA, li(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), Gf = /* @__PURE__ */ le(function(e) {
  return YA(e.length, e);
}), Tn = /* @__PURE__ */ z(function(e, r) {
  return Hf(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : Gf(VA)(e, r);
});
function Px(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function Rx(t, e, r) {
  if (r || (r = new QA()), XA(t))
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
  switch (ft(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n(Array(t.length));
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return Px(t);
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
function XA(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var QA = /* @__PURE__ */ (function() {
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
})(), ZA = /* @__PURE__ */ le(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), ej = /* @__PURE__ */ le(function(e) {
  return !e;
}), Cn = /* @__PURE__ */ Gf(ej);
function tj(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function Kf(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return yr(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var $n = /* @__PURE__ */ Le(/* @__PURE__ */ Kf("slice", function(e, r, n) {
  return Array.prototype.slice.call(n, e, r);
})), rj = /* @__PURE__ */ le(/* @__PURE__ */ Kf("tail", /* @__PURE__ */ $n(1, 1 / 0)));
function Ne() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return ci(arguments[0].length, zr(tj, arguments[0], rj(arguments)));
}
var nj = /* @__PURE__ */ le(function(t) {
  return fi(0, t);
});
function sj(t) {
  return t;
}
var _x = /* @__PURE__ */ le(sj), ij = /* @__PURE__ */ (function() {
  function t(e, r, n, s) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = s, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = Ke.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (tt(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, Rx(this.valueAcc)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
})();
function oj(t, e, r) {
  return function(n) {
    return new ij(t, e, r, n);
  };
}
var aj = /* @__PURE__ */ qf(4, [], /* @__PURE__ */ zt([], oj, function(e, r, n, s) {
  var i = jx(function(o, a) {
    var c = n(a), u = e(tt(c, o) ? o[c] : Rx(r), a);
    return u && u["@@transducer/reduced"] ? ui(o) : (o[c] = u, o);
  });
  return Uf(i, {}, s);
})), Dr = /* @__PURE__ */ z(function(e, r) {
  return r == null || r !== r ? e : r;
}), cj = /* @__PURE__ */ (function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !iy(e, !0, this);
  }, t.prototype.has = function(e) {
    return iy(e, !1, this);
  }, t;
})();
function iy(t, e, r) {
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
      return r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? Vs(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
    case "undefined":
      return r._items[n] ? !0 : (e && (r._items[n] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    /* falls through */
    default:
      return n = Object.prototype.toString.call(t), n in r._items ? Vs(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
  }
}
var uj = /* @__PURE__ */ z(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new cj(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), lj = /* @__PURE__ */ Le(function(e, r, n) {
  var s = Array.prototype.slice.call(n, 0);
  return s.splice(e, r), s;
});
function fj(t, e) {
  if (e == null)
    return e;
  if (Kr(t) && yr(e))
    return lj(t, 1, e);
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return delete r[t], r;
}
function hj(t, e) {
  if (Kr(t) && yr(e))
    return [].concat(e);
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return r;
}
var Ge = /* @__PURE__ */ z(function t(e, r) {
  if (r == null)
    return r;
  switch (e.length) {
    case 0:
      return r;
    case 1:
      return fj(e[0], r);
    default:
      var n = e[0], s = Array.prototype.slice.call(e, 1);
      return r[n] == null ? hj(n, r) : WA(n, t(s, r[n]), r);
  }
}), pj = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = Ke.init, t.prototype["@@transducer/result"] = Ke.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? ui(n) : n;
  }, t;
})();
function dj(t) {
  return function(e) {
    return new pj(t, e);
  };
}
var mj = /* @__PURE__ */ z(/* @__PURE__ */ zt(["take"], dj, function(e, r) {
  return $n(0, e < 0 ? 1 / 0 : e, r);
}));
function yj(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return $n(0, r + 1, e);
}
var vj = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = Ke.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = Uf(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
})();
function gj(t) {
  return function(e) {
    return new vj(t, e);
  };
}
var bj = /* @__PURE__ */ z(/* @__PURE__ */ zt([], gj, yj)), hi = /* @__PURE__ */ le(function(t) {
  return fi(-1, t);
}), xj = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ke.init, t.prototype["@@transducer/result"] = Ke.result, t.prototype["@@transducer/step"] = function(e, r) {
    if (this.f) {
      if (this.f(r))
        return e;
      this.f = null;
    }
    return this.xf["@@transducer/step"](e, r);
  }, t;
})();
function Sj(t) {
  return function(e) {
    return new xj(t, e);
  };
}
var Oj = /* @__PURE__ */ z(/* @__PURE__ */ zt(["dropWhile"], Sj, function(e, r) {
  for (var n = 0, s = r.length; n < s && e(r[n]); )
    n += 1;
  return $n(n, 1 / 0, r);
})), wj = /* @__PURE__ */ z(function(e, r) {
  return e || r;
}), Ej = /* @__PURE__ */ z(function(e, r) {
  return Hf(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : Gf(wj)(e, r);
});
function Aj(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var jj = /* @__PURE__ */ le(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : yr(e) ? [] : Bf(e) ? "" : Bs(e) ? {} : bx(e) ? /* @__PURE__ */ (function() {
    return arguments;
  })() : Aj(e) ? e.constructor.from("") : void 0;
}), Pj = /* @__PURE__ */ le(function(e) {
  return xe(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), Rj = /* @__PURE__ */ z(/* @__PURE__ */ Kf("groupBy", /* @__PURE__ */ aj(function(t, e) {
  return t.push(e), t;
}, []))), _j = /* @__PURE__ */ z(function(e, r) {
  if (e.length === 0 || Us(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!Us(n) && tt(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), ln = /* @__PURE__ */ z(function(e, r) {
  return _j([e], r);
}), Yt = function(t, e) {
  switch (arguments.length) {
    case 0:
      return Yt;
    case 1:
      return /* @__PURE__ */ (function() {
        return function r(n) {
          switch (arguments.length) {
            case 0:
              return r;
            default:
              return un(t, n);
          }
        };
      })();
    default:
      return un(t, e);
  }
}, zf = /* @__PURE__ */ Le(function(e, r, n) {
  return xe(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), Tj = /* @__PURE__ */ z(Vs), Cj = /* @__PURE__ */ $n(0, -1), Wf = /* @__PURE__ */ z(function(e, r) {
  return xe(e + 1, function() {
    var n = arguments[e];
    if (n != null && Hf(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(Nr(n) + ' does not have a method named "' + r + '"');
  });
}), In = /* @__PURE__ */ le(function(e) {
  return e != null && Wt(e, jj(e));
}), Tx = /* @__PURE__ */ le(function(e) {
  return !In(e);
}), Cx = /* @__PURE__ */ Wf(1, "join");
function oy(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var $j = /* @__PURE__ */ z(function(e, r) {
  return function(n) {
    return function(s) {
      return li(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
function Yf(t, e) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    var s = t[n];
    Kr(s) ? r = fi(s, r) : r = r[s];
  }
  return r;
}
var Ij = /* @__PURE__ */ z(function(e, r) {
  return Rn(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, fr(r));
}), Mj = /* @__PURE__ */ Le(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    tt(i, r) && (s[i] = tt(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    tt(i, n) && !tt(i, s) && (s[i] = n[i]);
  return s;
}), Fj = /* @__PURE__ */ Le(function t(e, r, n) {
  return Mj(function(s, i, o) {
    return Bs(i) && Bs(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), pi = /* @__PURE__ */ z(function(e, r) {
  return Fj(function(n, s, i) {
    return i;
  }, e, r);
}), kj = /* @__PURE__ */ z(function(e, r) {
  return Lf(xx(e), r);
}), $x = function(t) {
  return {
    value: t,
    map: function(e) {
      return $x(e(t));
    }
  };
}, Nj = /* @__PURE__ */ Le(function(e, r, n) {
  return e(function(s) {
    return $x(r(s));
  })(n).value;
}), Re = /* @__PURE__ */ z(Yf), Ix = /* @__PURE__ */ Le(function(e, r, n) {
  return Dr(e, Yf(r, n));
}), di = /* @__PURE__ */ Le(function(e, r, n) {
  return e(Yf(r, n));
}), Mx = /* @__PURE__ */ z(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), Fx = /* @__PURE__ */ Le(function(e, r, n) {
  return Wt(e, _n(r, n));
}), Js = /* @__PURE__ */ Le(function(e, r, n) {
  return Dr(e, _n(r, n));
}), Dj = /* @__PURE__ */ Le(function(e, r, n) {
  return e(_n(r, n));
}), qj = /* @__PURE__ */ z(function(e, r) {
  if (!(oy(e) && oy(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = Array(e < r ? r - e : 0), s = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < s; )
    n[i] = i + e, i += 1;
  return n;
}), Lj = /* @__PURE__ */ le(ui), kx = /* @__PURE__ */ Le(function(e, r, n) {
  return n.replace(e, r);
}), Vj = /* @__PURE__ */ z(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), Nx = /* @__PURE__ */ Wf(1, "split"), Bj = /* @__PURE__ */ z(function(t, e) {
  return Wt(mj(t.length, e), t);
});
function Uj(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var Jj = /* @__PURE__ */ z(function(e, r) {
  if (!Uj(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + Nr(e));
  return Px(e).test(r);
}), Hj = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = Ke.init, t.prototype["@@transducer/result"] = Ke.result, t.prototype["@@transducer/step"] = function(e, r) {
    return Ls(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
})();
function Gj(t) {
  return function(e) {
    return new Hj(t, e);
  };
}
var Dx = /* @__PURE__ */ z(/* @__PURE__ */ zt([], Gj, function(t, e) {
  for (var r = 0, n = e.length, s = [], i; r < n; )
    i = e[r], Ls(t, i, s) || (s[s.length] = i), r += 1;
  return s;
})), Kj = /* @__PURE__ */ Le(function(e, r, n) {
  return e(n) ? r(n) : n;
}), mi = G(void 0), Xt = Wt(mi()), qx = Cn(Xt), Lx = Wt(null), Vx = Cn(Lx), zj = Cn(Us), Wj = xe(1, Ne(ft, Yt("GeneratorFunction"))), Yj = xe(1, Ne(ft, Yt("AsyncFunction"))), vr = BA([Ne(ft, Yt("Function")), Wj, Yj]), Bx = xe(1, vr(Array.isArray) ? Array.isArray : Ne(ft, Yt("Array"))), Xj = Tn(Bx, In), Qj = Tn(Bx, Tx), gr = xe(1, Ne(ft, Yt("String"))), Zj = Wt("");
function Xl(t) {
  "@babel/helpers - typeof";
  return Xl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Xl(t);
}
var Ux = function(e) {
  return Xl(e) === "object";
}, eP = xe(1, Tn(Vx, Ej(Ux, vr))), tP = Cn(eP), yi = LA([gr, tP, Tx]), rP = Cn(vr), nP = xe(1, Tn(Vx, Ux)), sP = Ne(ft, Yt("Object")), iP = Ne(Nr, Wt(Nr(Object))), oP = di(Tn(vr, iP), ["constructor"]), ht = xe(1, function(t) {
  if (!nP(t) || !sP(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return Lx(e) ? !0 : oP(e);
}), aP = xe(1, Ne(ft, Yt("RegExp")));
function cP(t) {
  return hP(t) || fP(t) || lP(t) || uP();
}
function uP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lP(t, e) {
  if (t) {
    if (typeof t == "string") return Ql(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ql(t, e) : void 0;
  }
}
function fP(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function hP(t) {
  if (Array.isArray(t)) return Ql(t);
}
function Ql(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var pP = ZA(function(t, e) {
  return t.length > e.length;
}), dP = Ne(Vj(pP), nj, _n("length")), mP = Jf(function(t, e, r) {
  var n = r.apply(void 0, cP(t));
  return zj(n) ? Lj(n) : e;
}), yP = function(e) {
  var r = dP(e);
  return xe(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return zr(mP(s), void 0, e);
  });
}, Jx = zf(Qj, yP, mi), vi = Pj(Tj), xn = xe(3, function(t, e, r) {
  var n = Re(t, r), s = Re(Cj(t), r);
  if (!rP(n) && !Xj(t)) {
    var i = Ax(n, s);
    return KA(i, e);
  }
}), vP = Kj(gr, kx(/[.*+?^${}()|[\]\\-]/g, "\\$&")), gP = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, ay = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, bP = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, xP = function(e, r, n) {
  gP(e, r, n), ay(n, "str"), ay(r, "replaceValue"), bP(e);
  var s = new RegExp(aP(e) ? e : vP(e), "g");
  return kx(s, r, n);
}, SP = xe(3, xP), OP = Wf(2, "replaceAll"), wP = vr(String.prototype.replaceAll) ? OP : SP, EP = Jf(function(t, e) {
  return Ne(Nx(""), bj(vi(t)), Cx(""))(e);
}), Hx = Jf(function(t, e) {
  return Ne(Nx(""), Oj(vi(t)), Cx(""))(e);
}), jc = { exports: {} }, cy;
function AP() {
  if (cy) return jc.exports;
  cy = 1;
  var t = jc.exports = {}, e, r;
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
  }, jc.exports;
}
var jP = AP();
const Hs = /* @__PURE__ */ Zs(jP), Xf = () => di(Jj(/^win/), ["platform"], Hs), gi = (t) => {
  try {
    const e = new URL(t);
    return EP(":", e.protocol);
  } catch {
    return;
  }
}, PP = Ne(gi, qx), Gx = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, Qf = (t) => {
  if (Hs.browser)
    return !1;
  const e = gi(t);
  return Xt(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, bi = (t) => {
  const e = gi(t);
  return e === "http" || e === "https";
}, RP = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, Zf = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Js(!1, "keepFileProtocol", e), s = Js(Xf, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = wP("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, Kx = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  Xf() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < e.length; n += 2)
    r = r.replace(e[n], e[n + 1]);
  return r;
}, eh = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, fe = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, Gs = () => {
  if (Hs.browser)
    return fe(globalThis.location.href);
  const t = Hs.cwd(), e = hi(t);
  return ["/", "\\"].includes(e) ? t : t + (Xf() ? "\\" : "/");
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
}, Mn = (t) => {
  if (Qf(t))
    return Kx(Zf(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, at = (t) => Qf(t) ? Zf(t) : decodeURI(t), _P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: Gs,
  fromFileSystemPath: Kx,
  getExtension: Gx,
  getHash: eh,
  getProtocol: gi,
  hasProtocol: PP,
  isFileSystemPath: Qf,
  isHttpUrl: bi,
  isURI: RP,
  resolve: Pe,
  sanitize: Mn,
  stripHash: fe,
  toFileSystemPath: Zf,
  unsanitize: at
}, Symbol.toStringTag, { value: "Module" }));
let Sn = class {
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
    return gr(this.uri) ? Gx(this.uri) : "";
  }
  toString() {
    return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(ft(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
  }
};
class qr {
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
    const r = gr(e) ? e : e.uri;
    return qx(this.find((n) => n.uri === r));
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
const zx = {
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
    circularReplacer: _x,
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
}, TP = $j(Re(["resolve", "baseURI"]), F(["resolve", "baseURI"])), CP = (t) => Zj(t) ? Gs() : t, Wx = (t, e) => {
  const r = pi(t, e);
  return Nj(TP, CP, r);
};
class $P extends me {
  plugin;
  constructor(e, r) {
    super(e, {
      cause: r.cause
    }), this.plugin = r.plugin;
  }
}
const th = async (t, e, r) => {
  const n = await Promise.all(r.map(xn([t], e)));
  return r.filter((s, i) => n[i]);
}, rh = async (t, e, r) => {
  let n;
  for (const s of r)
    try {
      const i = await s[t].call(s, ...e);
      return {
        plugin: s,
        result: i
      };
    } catch (i) {
      n = new $P("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class Zl extends me {
}
class nh extends me {
}
class Yx extends nh {
}
class Xx extends Yx {
}
const IP = async (t, e) => {
  const r = e.resolve.resolvers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.resolve.resolverOpts);
  }), n = await th("canRead", [t, e], r);
  if (In(n))
    throw new Xx(t.uri);
  try {
    const {
      result: s
    } = await rh("read", [t], n);
    return s;
  } catch (s) {
    throw new nh(`Error while reading file "${t.uri}"`, {
      cause: s
    });
  }
}, MP = async (t, e) => {
  const r = e.parse.parsers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.parse.parserOpts);
  }), n = await th("canParse", [t, e], r);
  if (In(n))
    throw new Xx(t.uri);
  try {
    const {
      plugin: s,
      result: i
    } = await rh("parse", [t, e], n);
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new Zl(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new Zl(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, FP = async (t, e) => {
  const r = new Sn({
    uri: Mn(fe(t)),
    mediaType: e.parse.mediaType
  }), n = await IP(r, e);
  return MP(new Sn({
    ...r,
    data: n
  }), e);
};
var ge = {}, Pc, uy;
function kP() {
  if (uy) return Pc;
  uy = 1;
  function t(e) {
    return e === null;
  }
  return Pc = t, Pc;
}
var Rc, ly;
function Qx() {
  if (ly) return Rc;
  ly = 1;
  var t = typeof Pr == "object" && Pr && Pr.Object === Object && Pr;
  return Rc = t, Rc;
}
var _c, fy;
function kt() {
  if (fy) return _c;
  fy = 1;
  var t = Qx(), e = typeof self == "object" && self && self.Object === Object && self, r = t || e || Function("return this")();
  return _c = r, _c;
}
var Tc, hy;
function sh() {
  if (hy) return Tc;
  hy = 1;
  var t = kt(), e = t.Symbol;
  return Tc = e, Tc;
}
var Cc, py;
function NP() {
  if (py) return Cc;
  py = 1;
  var t = sh(), e = Object.prototype, r = e.hasOwnProperty, n = e.toString, s = t ? t.toStringTag : void 0;
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
  return Cc = i, Cc;
}
var $c, dy;
function DP() {
  if (dy) return $c;
  dy = 1;
  var t = Object.prototype, e = t.toString;
  function r(n) {
    return e.call(n);
  }
  return $c = r, $c;
}
var Ic, my;
function br() {
  if (my) return Ic;
  my = 1;
  var t = sh(), e = NP(), r = DP(), n = "[object Null]", s = "[object Undefined]", i = t ? t.toStringTag : void 0;
  function o(a) {
    return a == null ? a === void 0 ? s : n : i && i in Object(a) ? e(a) : r(a);
  }
  return Ic = o, Ic;
}
var Mc, yy;
function xi() {
  if (yy) return Mc;
  yy = 1;
  var t = Array.isArray;
  return Mc = t, Mc;
}
var Fc, vy;
function xr() {
  if (vy) return Fc;
  vy = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return Fc = t, Fc;
}
var kc, gy;
function qP() {
  if (gy) return kc;
  gy = 1;
  var t = br(), e = xi(), r = xr(), n = "[object String]";
  function s(i) {
    return typeof i == "string" || !e(i) && r(i) && t(i) == n;
  }
  return kc = s, kc;
}
var Nc, by;
function LP() {
  if (by) return Nc;
  by = 1;
  var t = br(), e = xr(), r = "[object Number]";
  function n(s) {
    return typeof s == "number" || e(s) && t(s) == r;
  }
  return Nc = n, Nc;
}
var Dc, xy;
function VP() {
  if (xy) return Dc;
  xy = 1;
  var t = br(), e = xr(), r = "[object Boolean]";
  function n(s) {
    return s === !0 || s === !1 || e(s) && t(s) == r;
  }
  return Dc = n, Dc;
}
var qc, Sy;
function Si() {
  if (Sy) return qc;
  Sy = 1;
  function t(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  return qc = t, qc;
}
var Lc, Oy;
function ih() {
  if (Oy) return Lc;
  Oy = 1;
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
  return Lc = t, Lc;
}
var Vc, wy;
function BP() {
  if (wy) return Vc;
  wy = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return Vc = t, Vc;
}
var Bc, Ey;
function Zx() {
  if (Ey) return Bc;
  Ey = 1;
  function t(e, r) {
    return e === r || e !== e && r !== r;
  }
  return Bc = t, Bc;
}
var Uc, Ay;
function Oi() {
  if (Ay) return Uc;
  Ay = 1;
  var t = Zx();
  function e(r, n) {
    for (var s = r.length; s--; )
      if (t(r[s][0], n))
        return s;
    return -1;
  }
  return Uc = e, Uc;
}
var Jc, jy;
function UP() {
  if (jy) return Jc;
  jy = 1;
  var t = Oi(), e = Array.prototype, r = e.splice;
  function n(s) {
    var i = this.__data__, o = t(i, s);
    if (o < 0)
      return !1;
    var a = i.length - 1;
    return o == a ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return Jc = n, Jc;
}
var Hc, Py;
function JP() {
  if (Py) return Hc;
  Py = 1;
  var t = Oi();
  function e(r) {
    var n = this.__data__, s = t(n, r);
    return s < 0 ? void 0 : n[s][1];
  }
  return Hc = e, Hc;
}
var Gc, Ry;
function HP() {
  if (Ry) return Gc;
  Ry = 1;
  var t = Oi();
  function e(r) {
    return t(this.__data__, r) > -1;
  }
  return Gc = e, Gc;
}
var Kc, _y;
function GP() {
  if (_y) return Kc;
  _y = 1;
  var t = Oi();
  function e(r, n) {
    var s = this.__data__, i = t(s, r);
    return i < 0 ? (++this.size, s.push([r, n])) : s[i][1] = n, this;
  }
  return Kc = e, Kc;
}
var zc, Ty;
function wi() {
  if (Ty) return zc;
  Ty = 1;
  var t = BP(), e = UP(), r = JP(), n = HP(), s = GP();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, zc = i, zc;
}
var Wc, Cy;
function KP() {
  if (Cy) return Wc;
  Cy = 1;
  var t = wi();
  function e() {
    this.__data__ = new t(), this.size = 0;
  }
  return Wc = e, Wc;
}
var Yc, $y;
function zP() {
  if ($y) return Yc;
  $y = 1;
  function t(e) {
    var r = this.__data__, n = r.delete(e);
    return this.size = r.size, n;
  }
  return Yc = t, Yc;
}
var Xc, Iy;
function WP() {
  if (Iy) return Xc;
  Iy = 1;
  function t(e) {
    return this.__data__.get(e);
  }
  return Xc = t, Xc;
}
var Qc, My;
function YP() {
  if (My) return Qc;
  My = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Qc = t, Qc;
}
var Zc, Fy;
function eS() {
  if (Fy) return Zc;
  Fy = 1;
  var t = br(), e = Si(), r = "[object AsyncFunction]", n = "[object Function]", s = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(a) {
    if (!e(a))
      return !1;
    var c = t(a);
    return c == n || c == s || c == r || c == i;
  }
  return Zc = o, Zc;
}
var eu, ky;
function XP() {
  if (ky) return eu;
  ky = 1;
  var t = kt(), e = t["__core-js_shared__"];
  return eu = e, eu;
}
var tu, Ny;
function QP() {
  if (Ny) return tu;
  Ny = 1;
  var t = XP(), e = (function() {
    var n = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!e && e in n;
  }
  return tu = r, tu;
}
var ru, Dy;
function tS() {
  if (Dy) return ru;
  Dy = 1;
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
  return ru = r, ru;
}
var nu, qy;
function ZP() {
  if (qy) return nu;
  qy = 1;
  var t = eS(), e = QP(), r = Si(), n = tS(), s = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, a = Object.prototype, c = o.toString, u = a.hasOwnProperty, f = RegExp(
    "^" + c.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!r(d) || e(d))
      return !1;
    var h = t(d) ? f : i;
    return h.test(n(d));
  }
  return nu = l, nu;
}
var su, Ly;
function eR() {
  if (Ly) return su;
  Ly = 1;
  function t(e, r) {
    return e?.[r];
  }
  return su = t, su;
}
var iu, Vy;
function Wr() {
  if (Vy) return iu;
  Vy = 1;
  var t = ZP(), e = eR();
  function r(n, s) {
    var i = e(n, s);
    return t(i) ? i : void 0;
  }
  return iu = r, iu;
}
var ou, By;
function oh() {
  if (By) return ou;
  By = 1;
  var t = Wr(), e = kt(), r = t(e, "Map");
  return ou = r, ou;
}
var au, Uy;
function Ei() {
  if (Uy) return au;
  Uy = 1;
  var t = Wr(), e = t(Object, "create");
  return au = e, au;
}
var cu, Jy;
function tR() {
  if (Jy) return cu;
  Jy = 1;
  var t = Ei();
  function e() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return cu = e, cu;
}
var uu, Hy;
function rR() {
  if (Hy) return uu;
  Hy = 1;
  function t(e) {
    var r = this.has(e) && delete this.__data__[e];
    return this.size -= r ? 1 : 0, r;
  }
  return uu = t, uu;
}
var lu, Gy;
function nR() {
  if (Gy) return lu;
  Gy = 1;
  var t = Ei(), e = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function s(i) {
    var o = this.__data__;
    if (t) {
      var a = o[i];
      return a === e ? void 0 : a;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return lu = s, lu;
}
var fu, Ky;
function sR() {
  if (Ky) return fu;
  Ky = 1;
  var t = Ei(), e = Object.prototype, r = e.hasOwnProperty;
  function n(s) {
    var i = this.__data__;
    return t ? i[s] !== void 0 : r.call(i, s);
  }
  return fu = n, fu;
}
var hu, zy;
function iR() {
  if (zy) return hu;
  zy = 1;
  var t = Ei(), e = "__lodash_hash_undefined__";
  function r(n, s) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = t && s === void 0 ? e : s, this;
  }
  return hu = r, hu;
}
var pu, Wy;
function oR() {
  if (Wy) return pu;
  Wy = 1;
  var t = tR(), e = rR(), r = nR(), n = sR(), s = iR();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, pu = i, pu;
}
var du, Yy;
function aR() {
  if (Yy) return du;
  Yy = 1;
  var t = oR(), e = wi(), r = oh();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (r || e)(),
      string: new t()
    };
  }
  return du = n, du;
}
var mu, Xy;
function cR() {
  if (Xy) return mu;
  Xy = 1;
  function t(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
  }
  return mu = t, mu;
}
var yu, Qy;
function Ai() {
  if (Qy) return yu;
  Qy = 1;
  var t = cR();
  function e(r, n) {
    var s = r.__data__;
    return t(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
  }
  return yu = e, yu;
}
var vu, Zy;
function uR() {
  if (Zy) return vu;
  Zy = 1;
  var t = Ai();
  function e(r) {
    var n = t(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return vu = e, vu;
}
var gu, ev;
function lR() {
  if (ev) return gu;
  ev = 1;
  var t = Ai();
  function e(r) {
    return t(this, r).get(r);
  }
  return gu = e, gu;
}
var bu, tv;
function fR() {
  if (tv) return bu;
  tv = 1;
  var t = Ai();
  function e(r) {
    return t(this, r).has(r);
  }
  return bu = e, bu;
}
var xu, rv;
function hR() {
  if (rv) return xu;
  rv = 1;
  var t = Ai();
  function e(r, n) {
    var s = t(this, r), i = s.size;
    return s.set(r, n), this.size += s.size == i ? 0 : 1, this;
  }
  return xu = e, xu;
}
var Su, nv;
function rS() {
  if (nv) return Su;
  nv = 1;
  var t = aR(), e = uR(), r = lR(), n = fR(), s = hR();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, Su = i, Su;
}
var Ou, sv;
function pR() {
  if (sv) return Ou;
  sv = 1;
  var t = wi(), e = oh(), r = rS(), n = 200;
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
  return Ou = s, Ou;
}
var wu, iv;
function dR() {
  if (iv) return wu;
  iv = 1;
  var t = wi(), e = KP(), r = zP(), n = WP(), s = YP(), i = pR();
  function o(a) {
    var c = this.__data__ = new t(a);
    this.size = c.size;
  }
  return o.prototype.clear = e, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = s, o.prototype.set = i, wu = o, wu;
}
var Eu, ov;
function mR() {
  if (ov) return Eu;
  ov = 1;
  var t = "__lodash_hash_undefined__";
  function e(r) {
    return this.__data__.set(r, t), this;
  }
  return Eu = e, Eu;
}
var Au, av;
function yR() {
  if (av) return Au;
  av = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Au = t, Au;
}
var ju, cv;
function vR() {
  if (cv) return ju;
  cv = 1;
  var t = rS(), e = mR(), r = yR();
  function n(s) {
    var i = -1, o = s == null ? 0 : s.length;
    for (this.__data__ = new t(); ++i < o; )
      this.add(s[i]);
  }
  return n.prototype.add = n.prototype.push = e, n.prototype.has = r, ju = n, ju;
}
var Pu, uv;
function gR() {
  if (uv) return Pu;
  uv = 1;
  function t(e, r) {
    for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
      if (r(e[n], n, e))
        return !0;
    return !1;
  }
  return Pu = t, Pu;
}
var Ru, lv;
function bR() {
  if (lv) return Ru;
  lv = 1;
  function t(e, r) {
    return e.has(r);
  }
  return Ru = t, Ru;
}
var _u, fv;
function nS() {
  if (fv) return _u;
  fv = 1;
  var t = vR(), e = gR(), r = bR(), n = 1, s = 2;
  function i(o, a, c, u, f, l) {
    var d = c & n, h = o.length, m = a.length;
    if (h != m && !(d && m > h))
      return !1;
    var p = l.get(o), v = l.get(a);
    if (p && v)
      return p == a && v == o;
    var g = -1, y = !0, x = c & s ? new t() : void 0;
    for (l.set(o, a), l.set(a, o); ++g < h; ) {
      var b = o[g], O = a[g];
      if (u)
        var A = d ? u(O, b, g, a, o, l) : u(b, O, g, o, a, l);
      if (A !== void 0) {
        if (A)
          continue;
        y = !1;
        break;
      }
      if (x) {
        if (!e(a, function(_, E) {
          if (!r(x, E) && (b === _ || f(b, _, c, u, l)))
            return x.push(E);
        })) {
          y = !1;
          break;
        }
      } else if (!(b === O || f(b, O, c, u, l))) {
        y = !1;
        break;
      }
    }
    return l.delete(o), l.delete(a), y;
  }
  return _u = i, _u;
}
var Tu, hv;
function xR() {
  if (hv) return Tu;
  hv = 1;
  var t = kt(), e = t.Uint8Array;
  return Tu = e, Tu;
}
var Cu, pv;
function SR() {
  if (pv) return Cu;
  pv = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(s, i) {
      n[++r] = [i, s];
    }), n;
  }
  return Cu = t, Cu;
}
var $u, dv;
function OR() {
  if (dv) return $u;
  dv = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(s) {
      n[++r] = s;
    }), n;
  }
  return $u = t, $u;
}
var Iu, mv;
function wR() {
  if (mv) return Iu;
  mv = 1;
  var t = sh(), e = xR(), r = Zx(), n = nS(), s = SR(), i = OR(), o = 1, a = 2, c = "[object Boolean]", u = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", h = "[object RegExp]", m = "[object Set]", p = "[object String]", v = "[object Symbol]", g = "[object ArrayBuffer]", y = "[object DataView]", x = t ? t.prototype : void 0, b = x ? x.valueOf : void 0;
  function O(A, _, E, I, C, S, P) {
    switch (E) {
      case y:
        if (A.byteLength != _.byteLength || A.byteOffset != _.byteOffset)
          return !1;
        A = A.buffer, _ = _.buffer;
      case g:
        return !(A.byteLength != _.byteLength || !S(new e(A), new e(_)));
      case c:
      case u:
      case d:
        return r(+A, +_);
      case f:
        return A.name == _.name && A.message == _.message;
      case h:
      case p:
        return A == _ + "";
      case l:
        var T = s;
      case m:
        var B = I & o;
        if (T || (T = i), A.size != _.size && !B)
          return !1;
        var D = P.get(A);
        if (D)
          return D == _;
        I |= a, P.set(A, _);
        var Q = n(T(A), T(_), I, C, S, P);
        return P.delete(A), Q;
      case v:
        if (b)
          return b.call(A) == b.call(_);
    }
    return !1;
  }
  return Iu = O, Iu;
}
var Mu, yv;
function ER() {
  if (yv) return Mu;
  yv = 1;
  function t(e, r) {
    for (var n = -1, s = r.length, i = e.length; ++n < s; )
      e[i + n] = r[n];
    return e;
  }
  return Mu = t, Mu;
}
var Fu, vv;
function AR() {
  if (vv) return Fu;
  vv = 1;
  var t = ER(), e = xi();
  function r(n, s, i) {
    var o = s(n);
    return e(n) ? o : t(o, i(n));
  }
  return Fu = r, Fu;
}
var ku, gv;
function jR() {
  if (gv) return ku;
  gv = 1;
  function t(e, r) {
    for (var n = -1, s = e == null ? 0 : e.length, i = 0, o = []; ++n < s; ) {
      var a = e[n];
      r(a, n, e) && (o[i++] = a);
    }
    return o;
  }
  return ku = t, ku;
}
var Nu, bv;
function PR() {
  if (bv) return Nu;
  bv = 1;
  function t() {
    return [];
  }
  return Nu = t, Nu;
}
var Du, xv;
function RR() {
  if (xv) return Du;
  xv = 1;
  var t = jR(), e = PR(), r = Object.prototype, n = r.propertyIsEnumerable, s = Object.getOwnPropertySymbols, i = s ? function(o) {
    return o == null ? [] : (o = Object(o), t(s(o), function(a) {
      return n.call(o, a);
    }));
  } : e;
  return Du = i, Du;
}
var qu, Sv;
function _R() {
  if (Sv) return qu;
  Sv = 1;
  function t(e, r) {
    for (var n = -1, s = Array(e); ++n < e; )
      s[n] = r(n);
    return s;
  }
  return qu = t, qu;
}
var Lu, Ov;
function TR() {
  if (Ov) return Lu;
  Ov = 1;
  var t = br(), e = xr(), r = "[object Arguments]";
  function n(s) {
    return e(s) && t(s) == r;
  }
  return Lu = n, Lu;
}
var Vu, wv;
function CR() {
  if (wv) return Vu;
  wv = 1;
  var t = TR(), e = xr(), r = Object.prototype, n = r.hasOwnProperty, s = r.propertyIsEnumerable, i = t(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? t : function(o) {
    return e(o) && n.call(o, "callee") && !s.call(o, "callee");
  };
  return Vu = i, Vu;
}
var an = { exports: {} }, Bu, Ev;
function $R() {
  if (Ev) return Bu;
  Ev = 1;
  function t() {
    return !1;
  }
  return Bu = t, Bu;
}
an.exports;
var Av;
function sS() {
  return Av || (Av = 1, (function(t, e) {
    var r = kt(), n = $R(), s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, u = c || n;
    t.exports = u;
  })(an, an.exports)), an.exports;
}
var Uu, jv;
function IR() {
  if (jv) return Uu;
  jv = 1;
  var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function r(n, s) {
    var i = typeof n;
    return s = s ?? t, !!s && (i == "number" || i != "symbol" && e.test(n)) && n > -1 && n % 1 == 0 && n < s;
  }
  return Uu = r, Uu;
}
var Ju, Pv;
function iS() {
  if (Pv) return Ju;
  Pv = 1;
  var t = 9007199254740991;
  function e(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= t;
  }
  return Ju = e, Ju;
}
var Hu, Rv;
function MR() {
  if (Rv) return Hu;
  Rv = 1;
  var t = br(), e = iS(), r = xr(), n = "[object Arguments]", s = "[object Array]", i = "[object Boolean]", o = "[object Date]", a = "[object Error]", c = "[object Function]", u = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", h = "[object Set]", m = "[object String]", p = "[object WeakMap]", v = "[object ArrayBuffer]", g = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", b = "[object Int8Array]", O = "[object Int16Array]", A = "[object Int32Array]", _ = "[object Uint8Array]", E = "[object Uint8ClampedArray]", I = "[object Uint16Array]", C = "[object Uint32Array]", S = {};
  S[y] = S[x] = S[b] = S[O] = S[A] = S[_] = S[E] = S[I] = S[C] = !0, S[n] = S[s] = S[v] = S[i] = S[g] = S[o] = S[a] = S[c] = S[u] = S[f] = S[l] = S[d] = S[h] = S[m] = S[p] = !1;
  function P(T) {
    return r(T) && e(T.length) && !!S[t(T)];
  }
  return Hu = P, Hu;
}
var Gu, _v;
function FR() {
  if (_v) return Gu;
  _v = 1;
  function t(e) {
    return function(r) {
      return e(r);
    };
  }
  return Gu = t, Gu;
}
var cn = { exports: {} };
cn.exports;
var Tv;
function kR() {
  return Tv || (Tv = 1, (function(t, e) {
    var r = Qx(), n = e && !e.nodeType && e, s = n && !0 && t && !t.nodeType && t, i = s && s.exports === n, o = i && r.process, a = (function() {
      try {
        var c = s && s.require && s.require("util").types;
        return c || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    t.exports = a;
  })(cn, cn.exports)), cn.exports;
}
var Ku, Cv;
function oS() {
  if (Cv) return Ku;
  Cv = 1;
  var t = MR(), e = FR(), r = kR(), n = r && r.isTypedArray, s = n ? e(n) : t;
  return Ku = s, Ku;
}
var zu, $v;
function NR() {
  if ($v) return zu;
  $v = 1;
  var t = _R(), e = CR(), r = xi(), n = sS(), s = IR(), i = oS(), o = Object.prototype, a = o.hasOwnProperty;
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
  return zu = c, zu;
}
var Wu, Iv;
function DR() {
  if (Iv) return Wu;
  Iv = 1;
  var t = Object.prototype;
  function e(r) {
    var n = r && r.constructor, s = typeof n == "function" && n.prototype || t;
    return r === s;
  }
  return Wu = e, Wu;
}
var Yu, Mv;
function qR() {
  if (Mv) return Yu;
  Mv = 1;
  function t(e, r) {
    return function(n) {
      return e(r(n));
    };
  }
  return Yu = t, Yu;
}
var Xu, Fv;
function LR() {
  if (Fv) return Xu;
  Fv = 1;
  var t = qR(), e = t(Object.keys, Object);
  return Xu = e, Xu;
}
var Qu, kv;
function VR() {
  if (kv) return Qu;
  kv = 1;
  var t = DR(), e = LR(), r = Object.prototype, n = r.hasOwnProperty;
  function s(i) {
    if (!t(i))
      return e(i);
    var o = [];
    for (var a in Object(i))
      n.call(i, a) && a != "constructor" && o.push(a);
    return o;
  }
  return Qu = s, Qu;
}
var Zu, Nv;
function BR() {
  if (Nv) return Zu;
  Nv = 1;
  var t = eS(), e = iS();
  function r(n) {
    return n != null && e(n.length) && !t(n);
  }
  return Zu = r, Zu;
}
var el, Dv;
function UR() {
  if (Dv) return el;
  Dv = 1;
  var t = NR(), e = VR(), r = BR();
  function n(s) {
    return r(s) ? t(s) : e(s);
  }
  return el = n, el;
}
var tl, qv;
function JR() {
  if (qv) return tl;
  qv = 1;
  var t = AR(), e = RR(), r = UR();
  function n(s) {
    return t(s, r, e);
  }
  return tl = n, tl;
}
var rl, Lv;
function HR() {
  if (Lv) return rl;
  Lv = 1;
  var t = JR(), e = 1, r = Object.prototype, n = r.hasOwnProperty;
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
    for (var O = l; ++v < h; ) {
      g = d[v];
      var A = i[g], _ = o[g];
      if (c)
        var E = l ? c(_, A, g, o, i, f) : c(A, _, g, i, o, f);
      if (!(E === void 0 ? A === _ || u(A, _, a, c, f) : E)) {
        b = !1;
        break;
      }
      O || (O = g == "constructor");
    }
    if (b && !O) {
      var I = i.constructor, C = o.constructor;
      I != C && "constructor" in i && "constructor" in o && !(typeof I == "function" && I instanceof I && typeof C == "function" && C instanceof C) && (b = !1);
    }
    return f.delete(i), f.delete(o), b;
  }
  return rl = s, rl;
}
var nl, Vv;
function GR() {
  if (Vv) return nl;
  Vv = 1;
  var t = Wr(), e = kt(), r = t(e, "DataView");
  return nl = r, nl;
}
var sl, Bv;
function KR() {
  if (Bv) return sl;
  Bv = 1;
  var t = Wr(), e = kt(), r = t(e, "Promise");
  return sl = r, sl;
}
var il, Uv;
function zR() {
  if (Uv) return il;
  Uv = 1;
  var t = Wr(), e = kt(), r = t(e, "Set");
  return il = r, il;
}
var ol, Jv;
function WR() {
  if (Jv) return ol;
  Jv = 1;
  var t = Wr(), e = kt(), r = t(e, "WeakMap");
  return ol = r, ol;
}
var al, Hv;
function YR() {
  if (Hv) return al;
  Hv = 1;
  var t = GR(), e = oh(), r = KR(), n = zR(), s = WR(), i = br(), o = tS(), a = "[object Map]", c = "[object Object]", u = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", h = o(t), m = o(e), p = o(r), v = o(n), g = o(s), y = i;
  return (t && y(new t(new ArrayBuffer(1))) != d || e && y(new e()) != a || r && y(r.resolve()) != u || n && y(new n()) != f || s && y(new s()) != l) && (y = function(x) {
    var b = i(x), O = b == c ? x.constructor : void 0, A = O ? o(O) : "";
    if (A)
      switch (A) {
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
  }), al = y, al;
}
var cl, Gv;
function XR() {
  if (Gv) return cl;
  Gv = 1;
  var t = dR(), e = nS(), r = wR(), n = HR(), s = YR(), i = xi(), o = sS(), a = oS(), c = 1, u = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, h = d.hasOwnProperty;
  function m(p, v, g, y, x, b) {
    var O = i(p), A = i(v), _ = O ? f : s(p), E = A ? f : s(v);
    _ = _ == u ? l : _, E = E == u ? l : E;
    var I = _ == l, C = E == l, S = _ == E;
    if (S && o(p)) {
      if (!o(v))
        return !1;
      O = !0, I = !1;
    }
    if (S && !I)
      return b || (b = new t()), O || a(p) ? e(p, v, g, y, x, b) : r(p, v, _, g, y, x, b);
    if (!(g & c)) {
      var P = I && h.call(p, "__wrapped__"), T = C && h.call(v, "__wrapped__");
      if (P || T) {
        var B = P ? p.value() : p, D = T ? v.value() : v;
        return b || (b = new t()), x(B, D, g, y, b);
      }
    }
    return S ? (b || (b = new t()), n(p, v, g, y, x, b)) : !1;
  }
  return cl = m, cl;
}
var ul, Kv;
function QR() {
  if (Kv) return ul;
  Kv = 1;
  var t = XR(), e = xr();
  function r(n, s, i, o, a) {
    return n === s ? !0 : n == null || s == null || !e(n) && !e(s) ? n !== n && s !== s : t(n, s, i, o, r, a);
  }
  return ul = r, ul;
}
var ll, zv;
function ZR() {
  if (zv) return ll;
  zv = 1;
  var t = QR();
  function e(r, n) {
    return t(r, n);
  }
  return ll = e, ll;
}
var fl, Wv;
function ji() {
  if (Wv) return fl;
  Wv = 1;
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
  return fl = t, fl;
}
var hl, Yv;
function Pi() {
  if (Yv) return hl;
  Yv = 1;
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
  return hl = e, hl;
}
var pl, Xv;
function Ri() {
  if (Xv) return pl;
  Xv = 1;
  const t = Pi();
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
  }), pl = r, pl;
}
var dl, Qv;
function Nt() {
  if (Qv) return dl;
  Qv = 1;
  const t = ZR(), e = ji(), r = Ri();
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
  return dl = n, dl;
}
var ml, Zv;
function e_() {
  if (Zv) return ml;
  Zv = 1;
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
  return ml = e, ml;
}
var yl, eg;
function t_() {
  if (eg) return yl;
  eg = 1;
  const t = Nt();
  return yl = class extends t {
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
  }, yl;
}
var vl, tg;
function r_() {
  if (tg) return vl;
  tg = 1;
  const t = Nt();
  return vl = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "number";
    }
    primitive() {
      return "number";
    }
  }, vl;
}
var gl, rg;
function n_() {
  if (rg) return gl;
  rg = 1;
  const t = Nt();
  return gl = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "boolean";
    }
    primitive() {
      return "boolean";
    }
  }, gl;
}
var bl, ng;
function aS() {
  if (ng) return bl;
  ng = 1;
  const t = Pi(), e = Nt(), r = Ri();
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
  }), bl = n, bl;
}
var xl, sg;
function cS() {
  if (sg) return xl;
  sg = 1;
  const t = ji(), e = Nt();
  return xl = class extends e {
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
  }, xl;
}
var Sl, ig;
function uS() {
  if (ig) return Sl;
  ig = 1;
  const t = Pi(), e = Ri();
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
  return Sl = r, Sl;
}
var Ol, og;
function s_() {
  if (og) return Ol;
  og = 1;
  const t = Pi(), e = Si(), r = aS(), n = cS(), s = uS();
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
  return Ol = i, Ol;
}
var wl, ag;
function i_() {
  if (ag) return wl;
  ag = 1;
  const t = Nt();
  return wl = class extends t {
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
  }, wl;
}
var El, cg;
function o_() {
  if (cg) return El;
  cg = 1;
  const t = Nt();
  return El = class extends t {
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
  }, El;
}
var Al, ug;
function lS() {
  if (ug) return Al;
  ug = 1;
  const t = Nt(), e = e_(), r = t_(), n = r_(), s = n_(), i = aS(), o = cS(), a = s_(), c = i_(), u = o_(), f = Ri(), l = uS(), d = ji();
  function h(m) {
    return m instanceof t ? m : typeof m == "string" ? new r(m) : typeof m == "number" ? new n(m) : typeof m == "boolean" ? new s(m) : m === null ? new e() : Array.isArray(m) ? new i(m.map(h)) : typeof m == "object" ? new a(m) : m;
  }
  return t.prototype.ObjectElement = a, t.prototype.RefElement = u, t.prototype.MemberElement = o, t.prototype.refract = h, f.prototype.refract = h, Al = {
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
  }, Al;
}
var jl, lg;
function a_() {
  if (lg) return jl;
  lg = 1;
  const t = kP(), e = qP(), r = LP(), n = VP(), s = Si(), i = ih(), o = lS();
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
  return i.prototype.Namespace = a, jl = a, jl;
}
var Pl, fg;
function c_() {
  if (fg) return Pl;
  fg = 1;
  const t = ih();
  return Pl = class extends t {
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
  }, Pl;
}
var hg;
function u_() {
  if (hg) return ge;
  hg = 1;
  const t = a_(), e = lS();
  return ge.Namespace = t, ge.namespace = function(n) {
    return new t(n);
  }, ge.KeyValuePair = ji(), ge.ArraySlice = e.ArraySlice, ge.ObjectSlice = e.ObjectSlice, ge.Element = e.Element, ge.StringElement = e.StringElement, ge.NumberElement = e.NumberElement, ge.BooleanElement = e.BooleanElement, ge.NullElement = e.NullElement, ge.ArrayElement = e.ArrayElement, ge.ObjectElement = e.ObjectElement, ge.MemberElement = e.MemberElement, ge.RefElement = e.RefElement, ge.LinkElement = e.LinkElement, ge.refract = e.refract, ge.JSONSerialiser = ih(), ge.JSON06Serialiser = c_(), ge;
}
var w = u_();
class Ks extends w.StringElement {
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
class zs extends w.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}
class pt extends w.ArrayElement {
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
class Ws extends w.ArrayElement {
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
const l_ = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", f_ = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, h_ = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, p_ = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof w.ArrayElement) && e.classes.includes(t), qt = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, k = (t) => t({
  hasMethod: l_,
  hasBasicElementProps: f_,
  primitiveEq: h_,
  isElementType: qt,
  hasClass: p_
}), ve = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.Element || t(r) && e(void 0, r)), K = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.StringElement || t(r) && e("string", r)), ah = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.NumberElement || t(r) && e("number", r)), ch = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.NullElement || t(r) && e("null", r)), Fn = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof w.BooleanElement || t(r) && e("boolean", r)), te = k(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof w.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), ke = k(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof w.ArrayElement && !(n instanceof w.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), yt = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof w.MemberElement || t(n) && e("member", n) && r(void 0, n)), fS = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof w.LinkElement || t(n) && e("link", n) && r(void 0, n)), hS = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof w.RefElement || t(n) && e("ref", n) && r(void 0, n)), d_ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ks || t(n) && e("annotation", n) && r("array", n)), m_ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zs || t(n) && e("comment", n) && r("string", n)), pS = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof pt || t(n) && e("parseResult", n) && r("array", n)), dS = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ws || t(n) && e("sourceMap", n) && r("array", n)), ur = (t) => qt("object", t) || qt("array", t) || qt("boolean", t) || qt("number", t) || qt("string", t) || qt("null", t) || qt("member", t), kn = (t) => dS(t.meta.get("sourceMap")), y_ = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return ke(r) ? Lf(vi(r.toValue()), t) : !1;
}, Lr = (t, e) => t.length === 0 ? !0 : Lf(vi(e.classes.toValue()), t), v_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: kn,
  includesClasses: Lr,
  includesSymbols: y_,
  isAnnotationElement: d_,
  isArrayElement: ke,
  isBooleanElement: Fn,
  isCommentElement: m_,
  isElement: ve,
  isLinkElement: fS,
  isMemberElement: yt,
  isNullElement: ch,
  isNumberElement: ah,
  isObjectElement: te,
  isParseResultElement: pS,
  isPrimitiveElement: ur,
  isRefElement: hS,
  isSourceMapElement: dS,
  isStringElement: K
}, Symbol.toStringTag, { value: "Module" }));
class mS extends w.Namespace {
  constructor() {
    super(), this.register("annotation", Ks), this.register("comment", zs), this.register("parseResult", pt), this.register("sourceMap", Ws);
  }
}
const yS = new mS(), Dt = (t) => {
  const e = new mS();
  return ht(t) && e.use(t), e;
}, vS = () => ({
  predicates: {
    ...v_
  },
  namespace: yS
}), _i = (t, e, r) => {
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
}, ee = {}, Nn = (t) => t?.type, gS = (t) => typeof Nn(t) == "string", uh = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), Ti = (t, {
  visitFnGetter: e = _i,
  nodeTypeGetter: r = Nn,
  breakSymbol: n = ee,
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
            if (typeof b?.then == "function")
              throw new bt("Async visitor not supported in sync mode", {
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
            if (typeof x?.then == "function")
              throw new bt("Async visitor not supported in sync mode", {
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
}, g_ = (t, {
  visitFnGetter: e = _i,
  nodeTypeGetter: r = Nn,
  breakSymbol: n = ee,
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
Ti[Symbol.for("nodejs.util.promisify.custom")] = g_;
const lh = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = ee,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = _i,
  nodeTypeGetter: c = Nn,
  nodePredicate: u = gS,
  nodeCloneFn: f = uh,
  detectCycles: l = !0,
  detectCyclesCallback: d = null
} = {}) => {
  const h = r || {};
  let m, p = Array.isArray(t), v = [t], g = -1, y, x = [], b = t;
  const O = [], A = [];
  do {
    g += 1;
    const I = g === v.length;
    let C;
    const S = I && x.length !== 0;
    if (I) {
      if (C = A.length === 0 ? void 0 : O.pop(), b = y, y = A.pop(), S)
        if (p) {
          b = b.slice();
          let T = 0;
          for (const [B, D] of x) {
            const Q = B - T;
            D === i ? (b.splice(Q, 1), T += 1) : b[Q] = D;
          }
        } else {
          b = f(b);
          for (const [T, B] of x)
            b[T] = B;
        }
      g = m.index, v = m.keys, x = m.edits, p = m.inArray, m = m.prev;
    } else if (y !== i && y !== void 0) {
      if (C = p ? g : v[g], b = y[C], b === i || b === void 0)
        continue;
      O.push(C);
    }
    let P;
    if (!Array.isArray(b)) {
      var _;
      if (!u(b))
        throw new bt(`Invalid AST Node:  ${String(b)}`, {
          node: b
        });
      if (l && A.includes(b)) {
        typeof d == "function" && d(b, C, y, O, A), O.pop();
        continue;
      }
      const T = a(e, c(b), I);
      if (T) {
        for (const [D, Q] of Object.entries(n))
          e[D] = Q;
        const B = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(D, Q) {
            typeof Q == "function" ? Q(D, b, C, y, O, A) : y && (y[C] = D), I || (b = D);
          }
        };
        P = T.call(e, b, C, y, O, A, B);
      }
      if (typeof ((_ = P) === null || _ === void 0 ? void 0 : _.then) == "function")
        throw new bt("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: T
        });
      if (P === s)
        break;
      if (P === o) {
        if (!I) {
          O.pop();
          continue;
        }
      } else if (P !== void 0 && (x.push([C, P]), !I))
        if (u(P))
          b = P;
        else {
          O.pop();
          continue;
        }
    }
    if (P === void 0 && S && x.push([C, b]), !I) {
      var E;
      m = {
        inArray: p,
        index: g,
        keys: v,
        edits: x,
        prev: m
      }, p = Array.isArray(b), v = p ? b : (E = h[c(b)]) !== null && E !== void 0 ? E : [], g = -1, x = [], y !== i && y !== void 0 && A.push(y), y = b;
    }
  } while (m !== void 0);
  return x.length !== 0 ? x[x.length - 1][1] : t;
};
lh[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = ee,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = _i,
  nodeTypeGetter: c = Nn,
  nodePredicate: u = gS,
  nodeCloneFn: f = uh,
  detectCycles: l = !0,
  detectCyclesCallback: d = null
} = {}) => {
  const h = r || {};
  let m, p = Array.isArray(t), v = [t], g = -1, y, x = [], b = t;
  const O = [], A = [];
  do {
    g += 1;
    const E = g === v.length;
    let I;
    const C = E && x.length !== 0;
    if (E) {
      if (I = A.length === 0 ? void 0 : O.pop(), b = y, y = A.pop(), C)
        if (p) {
          b = b.slice();
          let P = 0;
          for (const [T, B] of x) {
            const D = T - P;
            B === i ? (b.splice(D, 1), P += 1) : b[D] = B;
          }
        } else {
          b = f(b);
          for (const [P, T] of x)
            b[P] = T;
        }
      g = m.index, v = m.keys, x = m.edits, p = m.inArray, m = m.prev;
    } else if (y !== i && y !== void 0) {
      if (I = p ? g : v[g], b = y[I], b === i || b === void 0)
        continue;
      O.push(I);
    }
    let S;
    if (!Array.isArray(b)) {
      if (!u(b))
        throw new bt(`Invalid AST Node: ${String(b)}`, {
          node: b
        });
      if (l && A.includes(b)) {
        typeof d == "function" && d(b, I, y, O, A), O.pop();
        continue;
      }
      const P = a(e, c(b), E);
      if (P) {
        for (const [B, D] of Object.entries(n))
          e[B] = D;
        const T = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(B, D) {
            typeof D == "function" ? D(B, b, I, y, O, A) : y && (y[I] = B), E || (b = B);
          }
        };
        S = await P.call(e, b, I, y, O, A, T);
      }
      if (S === s)
        break;
      if (S === o) {
        if (!E) {
          O.pop();
          continue;
        }
      } else if (S !== void 0 && (x.push([I, S]), !E))
        if (u(S))
          b = S;
        else {
          O.pop();
          continue;
        }
    }
    if (S === void 0 && C && x.push([I, b]), !E) {
      var _;
      m = {
        inArray: p,
        index: g,
        keys: v,
        edits: x,
        prev: m
      }, p = Array.isArray(b), v = p ? b : (_ = h[c(b)]) !== null && _ !== void 0 ? _ : [], g = -1, x = [], y !== i && y !== void 0 && A.push(y), y = b;
    }
  } while (m !== void 0);
  return x.length !== 0 ? x[x.length - 1][1] : t;
};
class bS extends bt {
  value;
  constructor(e, r) {
    super(e, r), typeof r < "u" && (this.value = r.value);
  }
}
class b_ extends bS {
}
class x_ extends bS {
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
    } = t, o = ve(s) ? q(s, n) : s, a = ve(i) ? q(i, n) : i, c = new w.KeyValuePair(o, a);
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
  if (ve(t)) {
    const s = je(t);
    if (r.set(t, s), t.content)
      if (ve(t.content))
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
  throw new b_("Value provided to cloneDeep function couldn't be cloned", {
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
const xS = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new w.KeyValuePair(e, r);
}, S_ = (t) => {
  const e = [...t];
  return new w.ArraySlice(e);
}, O_ = (t) => {
  const e = [...t];
  return new w.ObjectSlice(e);
}, SS = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = q(t.meta)), t.attributes.length > 0 && (e._attributes = q(t.attributes)), ve(t.content)) {
    const r = t.content;
    e.content = SS(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof w.KeyValuePair ? e.content = xS(t.content) : e.content = t.content;
  return e;
}, je = (t) => {
  if (t instanceof w.KeyValuePair)
    return xS(t);
  if (t instanceof w.ObjectSlice)
    return O_(t);
  if (t instanceof w.ArraySlice)
    return S_(t);
  if (ve(t))
    return SS(t);
  throw new x_("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
je.safe = (t) => {
  try {
    return je(t);
  } catch {
    return t;
  }
};
const Yr = (t) => te(t) ? "ObjectElement" : ke(t) ? "ArrayElement" : yt(t) ? "MemberElement" : K(t) ? "StringElement" : Fn(t) ? "BooleanElement" : ah(t) ? "NumberElement" : ch(t) ? "NullElement" : fS(t) ? "LinkElement" : hS(t) ? "RefElement" : void 0, OS = (t) => ve(t) ? je(t) : uh(t), wS = Ne(Yr, gr), Et = {
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
class ES {
  result;
  predicate;
  returnOnTrue;
  returnOnFalse;
  constructor({
    predicate: e = Df,
    returnOnTrue: r,
    returnOnFalse: n
  } = {}) {
    this.result = [], this.predicate = e, this.returnOnTrue = r, this.returnOnFalse = n;
  }
  enter(e) {
    return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
  }
}
const Se = (t, e, {
  keyMap: r = Et,
  ...n
} = {}) => lh(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Yr,
  nodePredicate: wS,
  nodeCloneFn: OS,
  ...n
});
Se[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Et,
  ...n
} = {}) => lh[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Yr,
  nodePredicate: wS,
  nodeCloneFn: OS,
  ...n
});
const AS = {
  toolboxCreator: vS,
  visitorOptions: {
    nodeTypeGetter: Yr,
    exposeEdits: !0
  }
}, At = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = pi(AS, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Ti(a.map(Js({}, "visitor")), {
    ...i
  });
  a.forEach(xn(["pre"], []));
  const u = Se(t, c, i);
  return a.forEach(xn(["post"], [])), u;
}, w_ = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = pi(AS, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = Ti[Symbol.for("nodejs.util.promisify.custom")], u = Se[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(Js({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(xn(["pre"], [])));
  const l = await u(t, f, i);
  return await Promise.allSettled(a.map(xn(["post"], []))), l;
};
At[Symbol.for("nodejs.util.promisify.custom")] = w_;
var Rl = { exports: {} }, pg;
function E_() {
  return pg || (pg = 1, (function(t) {
    var e = (() => {
      var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (b, O, A) => O in b ? r(b, O, { enumerable: !0, configurable: !0, writable: !0, value: A }) : b[O] = A, u = (b, O) => {
        for (var A in O || (O = {}))
          o.call(O, A) && c(b, A, O[A]);
        if (i)
          for (var A of i(O))
            a.call(O, A) && c(b, A, O[A]);
        return b;
      }, f = (b, O) => {
        for (var A in O)
          r(b, A, { get: O[A], enumerable: !0 });
      }, l = (b, O, A, _) => {
        if (O && typeof O == "object" || typeof O == "function")
          for (let E of s(O))
            !o.call(b, E) && E !== A && r(b, E, { get: () => O[E], enumerable: !(_ = n(O, E)) || _.enumerable });
        return b;
      }, d = (b) => l(r({}, "__esModule", { value: !0 }), b), h = (b, O, A) => c(b, typeof O != "symbol" ? O + "" : O, A), m = {};
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
        constructor(O = {}) {
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
            const P = [...S];
            if (P[0] = "[short-unique-id] ".concat(S[0]), this.debug === !0 && typeof console < "u" && console !== null) {
              console.log(...P);
              return;
            }
          }), h(this, "_normalizeDictionary", (S, P) => {
            let T;
            if (S && Array.isArray(S) && S.length > 1)
              T = S;
            else {
              T = [], this.dictIndex = 0;
              const B = "_".concat(S, "_dict_ranges"), D = this._dict_ranges[B];
              let Q = 0;
              for (const [, L] of Object.entries(D)) {
                const [$, H] = L;
                Q += Math.abs(H - $);
              }
              T = new Array(Q);
              let ne = 0;
              for (const [, L] of Object.entries(D)) {
                this.dictRange = L, this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1];
                const $ = this.lowerBound <= this.upperBound, H = this.lowerBound, J = this.upperBound;
                if ($)
                  for (let V = H; V < J; V++)
                    T[ne++] = String.fromCharCode(V), this.dictIndex = V;
                else
                  for (let V = H; V > J; V--)
                    T[ne++] = String.fromCharCode(V), this.dictIndex = V;
              }
              T.length = ne;
            }
            if (P) {
              const B = T.length;
              for (let D = B - 1; D > 0; D--) {
                const Q = Math.floor(Math.random() * (D + 1));
                [T[D], T[Q]] = [T[Q], T[D]];
              }
            }
            return T;
          }), h(this, "setDictionary", (S, P) => {
            this.dict = this._normalizeDictionary(S, P), this.dictLength = this.dict.length, this.setCounter(0);
          }), h(this, "seq", () => this.sequentialUUID()), h(this, "sequentialUUID", () => {
            const S = this.dictLength, P = this.dict;
            let T = this.counter;
            const B = [];
            do {
              const Q = T % S;
              T = Math.trunc(T / S), B.push(P[Q]);
            } while (T !== 0);
            const D = B.join("");
            return this.counter += 1, D;
          }), h(this, "rnd", (S = this.uuidLength || v) => this.randomUUID(S)), h(this, "randomUUID", (S = this.uuidLength || v) => {
            if (S === null || typeof S > "u" || S < 1)
              throw new Error("Invalid UUID Length Provided");
            const P = new Array(S), T = this.dictLength, B = this.dict;
            for (let D = 0; D < S; D++) {
              const Q = Math.floor(Math.random() * T);
              P[D] = B[Q];
            }
            return P.join("");
          }), h(this, "fmt", (S, P) => this.formattedUUID(S, P)), h(this, "formattedUUID", (S, P) => {
            const T = {
              $r: this.randomUUID,
              $s: this.sequentialUUID,
              $t: this.stamp
            };
            return S.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (D) => {
              const Q = D.slice(0, 2), ne = Number.parseInt(D.slice(2), 10);
              return Q === "$s" ? T[Q]().padStart(ne, "0") : Q === "$t" && P ? T[Q](ne, P) : T[Q](ne);
            });
          }), h(this, "availableUUIDs", (S = this.uuidLength) => Number.parseFloat(([...new Set(this.dict)].length ** S).toFixed(0))), h(this, "_collisionCache", /* @__PURE__ */ new Map()), h(this, "approxMaxBeforeCollision", (S = this.availableUUIDs(this.uuidLength)) => {
            const P = S, T = this._collisionCache.get(P);
            if (T !== void 0)
              return T;
            const B = Number.parseFloat(Math.sqrt(Math.PI / 2 * S).toFixed(20));
            return this._collisionCache.set(P, B), B;
          }), h(this, "collisionProbability", (S = this.availableUUIDs(this.uuidLength), P = this.uuidLength) => Number.parseFloat(
            (this.approxMaxBeforeCollision(S) / this.availableUUIDs(P)).toFixed(20)
          )), h(this, "uniqueness", (S = this.availableUUIDs(this.uuidLength)) => {
            const P = Number.parseFloat(
              (1 - this.approxMaxBeforeCollision(S) / S).toFixed(20)
            );
            return P > 1 ? 1 : P < 0 ? 0 : P;
          }), h(this, "getVersion", () => this.version), h(this, "stamp", (S, P) => {
            const T = Math.floor(+(P || /* @__PURE__ */ new Date()) / 1e3).toString(16);
            if (typeof S == "number" && S === 0)
              return T;
            if (typeof S != "number" || S < 10)
              throw new Error(
                [
                  "Param finalLength must be a number greater than or equal to 10,",
                  "or 0 if you want the raw hexadecimal timestamp"
                ].join(`
`)
              );
            const B = S - 9, D = Math.round(Math.random() * (B > 15 ? 15 : B)), Q = this.randomUUID(B);
            return "".concat(Q.substring(0, D)).concat(T).concat(Q.substring(D)).concat(D.toString(16));
          }), h(this, "parseStamp", (S, P) => {
            if (P && !/t0|t[1-9]\d{1,}/.test(P))
              throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
            const T = P ? P.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (D) => {
              const Q = {
                $r: ($) => [...Array($)].map(() => "r").join(""),
                $s: ($) => [...Array($)].map(() => "s").join(""),
                $t: ($) => [...Array($)].map(() => "t").join("")
              }, ne = D.slice(0, 2), L = Number.parseInt(D.slice(2), 10);
              return Q[ne](L);
            }).replace(/^(.*?)(t{8,})(.*)$/g, (D, Q, ne) => S.substring(Q.length, Q.length + ne.length)) : S;
            if (T.length === 8)
              return new Date(Number.parseInt(T, 16) * 1e3);
            if (T.length < 10)
              throw new Error("Stamp length invalid");
            const B = Number.parseInt(T.substring(T.length - 1), 16);
            return new Date(Number.parseInt(T.substring(B, B + 8), 16) * 1e3);
          }), h(this, "setCounter", (S) => {
            this.counter = S;
          }), h(this, "validate", (S, P) => {
            const T = P ? this._normalizeDictionary(P) : this.dict;
            return S.split("").every((B) => T.includes(B));
          });
          const A = u(u({}, g), O);
          this.counter = 0, this.debug = !1, this.dict = [], this.version = p;
          const { dictionary: _, shuffle: E, length: I, counter: C } = A;
          this.uuidLength = I, this.setDictionary(_, E), this.setCounter(C), this.debug = A.debug, this.log(this.dict), this.log(
            "Generator instantiated with Dictionary Size ".concat(this.dictLength, " and counter set to ").concat(this.counter)
          ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this);
        }
      };
      h(y, "default", y);
      var x = y;
      return d(m);
    })();
    t.exports = e.default, typeof window < "u" && (e = e.default);
  })(Rl)), Rl.exports;
}
var A_ = E_();
const j_ = /* @__PURE__ */ Zs(A_);
class P_ extends bt {
  value;
  constructor(e, r) {
    super(e, r), typeof r < "u" && (this.value = r.value);
  }
}
class fh {
  uuid;
  identityMap;
  constructor({
    length: e = 6
  } = {}) {
    this.uuid = new j_({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  }
  identify(e) {
    if (!ve(e))
      throw new P_("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
        value: e
      });
    if (e.meta.hasKey("id") && K(e.meta.get("id")) && !e.meta.get("id").equals(""))
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
new fh();
class R_ extends Array {
  unknownMediaType = "application/octet-stream";
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new Ec("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new Ec("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new Ec("latest method in MediaTypes class is not yet implemented.");
  }
}
const __ = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return ve(t) && (t.meta.length > 0 && (n.meta = q(t.meta)), t.attributes.length > 0 && (n.attributes = q(t.attributes))), At(n, r, {
    toolboxCreator: vS,
    visitorOptions: {
      nodeTypeGetter: Yr
    }
  });
}, st = (t) => (e, r = {}) => __(e, {
  ...r,
  Type: t
});
w.ObjectElement.refract = st(w.ObjectElement);
w.ArrayElement.refract = st(w.ArrayElement);
w.StringElement.refract = st(w.StringElement);
w.BooleanElement.refract = st(w.BooleanElement);
w.NullElement.refract = st(w.NullElement);
w.NumberElement.refract = st(w.NumberElement);
w.LinkElement.refract = st(w.LinkElement);
w.RefElement.refract = st(w.RefElement);
Ks.refract = st(Ks);
zs.refract = st(zs);
pt.refract = st(pt);
Ws.refract = st(Ws);
const T_ = (t, e) => {
  const r = new ES({
    predicate: t
  });
  return Se(e, r), new w.ArraySlice(r.result);
}, jS = (t, e) => {
  const r = new ES({
    predicate: t,
    returnOnTrue: ee
  });
  return Se(e, r), Ix(void 0, [0], r.result);
}, PS = (t) => typeof t?.type == "string" ? t.type : Yr(t), RS = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...Et
}, _S = (t, e, {
  keyMap: r = RS,
  ...n
} = {}) => Se(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: PS,
  nodePredicate: Ft,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
_S[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = RS,
  ...r
} = {}) => Se[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: PS,
  nodePredicate: Ft,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class C_ {
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
class $_ {
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
let I_ = class {
  ObjectElement = {
    enter: (e) => {
      if (this.references.has(e))
        return this.references.get(e).toReference();
      const r = new $_(e.content);
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
      const r = new C_(e.content);
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
    return K(e.href) ? e.href.toValue() : "";
  }
};
const R = (t) => ve(t) ? K(t) || ah(t) || Fn(t) || ch(t) ? t.toValue() : _S(t, new I_()) : t, Ps = (t, e = /* @__PURE__ */ new WeakMap()) => (yt(t) ? (e.set(t.key, t), Ps(t.key, e), e.set(t.value, t), Ps(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), Ps(r, e);
}), e), M_ = (t, e, r) => {
  const n = r.get(t);
  yt(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, F_ = (t, e, r) => {
  const n = r.get(t);
  te(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, k_ = (t, e, r) => {
  const n = r.get(t);
  ke(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class N_ {
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
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : Ps(this.element);
    const s = this.edges.get(e);
    if (!Xt(s))
      return te(s) ? F_(e, r, this.edges) : ke(s) ? k_(e, r, this.edges) : yt(s) && M_(e, r, this.edges), this.element;
  }
}
const D_ = (t, e, r) => new N_({
  element: r
}).transclude(t, e), Qt = (t, e) => {
  const r = Dr(t, e);
  return Ij((n) => {
    if (ht(n) && ln("$ref", n) && Dj(gr, "$ref", n)) {
      const s = Re(["$ref"], n), i = Hx("#/", s);
      return Re(i.split("/"), r);
    }
    return ht(n) ? Qt(n, r) : n;
  }, t);
}, TS = (t, e = yS) => {
  if (gr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return ht(t) && ln("element", t) ? e.fromRefract(t) : e.toElement(t);
}, Ys = (t) => {
  const e = t.meta.length > 0 ? q(t.meta) : void 0, r = t.attributes.length > 0 ? q(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, Xs = (t, e) => e.clone && e.isMergeableElement(t) ? nt(Ys(t), t, e) : t, q_ = (t, e) => {
  if (typeof e.customMerge != "function")
    return nt;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : nt;
}, L_ = (t) => typeof t.customMetaMerge != "function" ? (e) => q(e) : t.customMetaMerge, V_ = (t) => typeof t.customAttributesMerge != "function" ? (e) => q(e) : t.customAttributesMerge, B_ = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => Xs(n, r)), U_ = (t, e, r) => {
  const n = te(t) ? Ys(t) : Ys(e);
  return te(t) && t.forEach((s, i, o) => {
    const a = je(o);
    a.value = Xs(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = R(i);
    let c;
    if (te(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const u = t.get(a);
      c = je(o), c.value = q_(i, r)(u, s, r);
    } else
      c = je(o), c.value = Xs(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, Os = {
  clone: !0,
  isMergeableElement: (t) => te(t) || ke(t),
  arrayElementMerge: B_,
  objectElementMerge: U_,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
}, nt = (t, e, r) => {
  var n, s, i;
  const o = {
    ...Os,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : Os.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : Os.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : Os.objectElementMerge;
  const a = ke(e), c = ke(t);
  if (!(a === c))
    return Xs(e, o);
  const f = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return f.meta = L_(o)(t.meta, e.meta), f.attributes = V_(o)(t.attributes, e.attributes), f;
};
nt.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new w.ObjectElement() : t.reduce((r, n) => nt(r, n, e), Ys(t[0]));
};
class hh extends me {
}
class CS extends hh {
}
const J_ = async (t, e) => {
  let r = t, n = !1;
  if (!pS(t)) {
    const o = je(t);
    o.classes.push("result"), r = new pt([o]), n = !0;
  }
  const s = new Sn({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await th("canDereference", [s, e], e.dereference.strategies);
  if (In(i))
    throw new CS(s.uri);
  try {
    const {
      result: o
    } = await rh("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new hh(`Error while dereferencing file "${s.uri}"`, {
      cause: o
    });
  }
};
let Dn = class {
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
class H_ {
  name;
  constructor({
    name: e
  }) {
    this.name = e;
  }
}
class G_ extends H_ {
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
    return bi(e.uri);
  }
}
class K_ {
  name;
  constructor({
    name: e
  }) {
    this.name = e;
  }
}
class z_ {
  name;
  constructor({
    name: e
  }) {
    this.name = e;
  }
}
class _l extends Array {
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
let _t = class {
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
class $S extends me {
}
class W_ extends $S {
}
class Y_ extends me {
}
class ph extends Y_ {
}
class X_ extends $S {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
class $r extends hh {
}
class Q_ extends nh {
}
class Ct extends Zl {
}
const Z_ = async (t, e = {}) => {
  const r = Wx(zx, e);
  return J_(t, r);
};
function dg(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function eT(t) {
  if (Array.isArray(t)) return t;
}
function tT(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function rT(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function nT(t, e, r) {
  return e && rT(t.prototype, e), t;
}
function IS(t, e) {
  return e != null && typeof Symbol < "u" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
}
function sT(t, e) {
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
function iT() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function oT(t, e) {
  return eT(t) || sT(t, e) || aT(t, e) || iT();
}
function Ir(t) {
  "@swc/helpers - typeof";
  return t && typeof Symbol < "u" && t.constructor === Symbol ? "symbol" : typeof t;
}
function aT(t, e) {
  if (t) {
    if (typeof t == "string") return dg(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dg(t, e);
  }
}
var MS = function(t) {
  throw TypeError(t);
}, FS = function(t, e, r) {
  return e.has(t) || MS("Cannot " + r);
}, Ve = function(t, e, r) {
  return FS(t, e, "read from private field"), r ? r.call(t) : e.get(t);
}, mg = function(t, e, r) {
  return e.has(t) ? MS("Cannot add the same private member more than once") : IS(e, WeakSet) ? e.add(t) : e.set(t, r);
}, Tl = function(t, e, r, n) {
  return FS(t, e, "write to private field"), e.set(t, r), r;
}, Xr = function(t) {
  return Object.prototype.toString.call(t);
}, kS = function(t) {
  return ArrayBuffer.isView(t) && !IS(t, DataView);
}, cT = function(t) {
  return Xr(t) === "[object Date]";
}, uT = function(t) {
  return Xr(t) === "[object RegExp]";
}, lT = function(t) {
  return Xr(t) === "[object Error]";
}, fT = function(t) {
  return Xr(t) === "[object Boolean]";
}, hT = function(t) {
  return Xr(t) === "[object Number]";
}, pT = function(t) {
  return Xr(t) === "[object String]";
}, NS = Array.isArray, dT = Object.getOwnPropertyDescriptor, mT = Object.prototype.propertyIsEnumerable, yT = Object.getOwnPropertySymbols, Rs = Object.prototype.hasOwnProperty;
function dh(t) {
  for (var e = Object.keys(t), r = yT(t), n = 0; n < r.length; n++)
    mT.call(t, r[n]) && e.push(r[n]);
  return e;
}
function vT(t, e) {
  var r;
  return !(!((r = dT(t, e)) === null || r === void 0) && r.writable);
}
function DS(t, e) {
  if ((typeof t > "u" ? "undefined" : Ir(t)) === "object" && t !== null) {
    var r;
    if (NS(t))
      r = [];
    else if (cT(t))
      r = new Date(t.getTime ? t.getTime() : t);
    else if (uT(t))
      r = new RegExp(t);
    else if (lT(t))
      r = {
        message: t.message
      };
    else if (fT(t) || hT(t) || pT(t))
      r = Object(t);
    else {
      if (kS(t))
        return t.slice();
      r = Object.create(Object.getPrototypeOf(t));
    }
    var n = e.includeSymbols ? dh : Object.keys, s = !0, i = !1, o = void 0;
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
var qS = {
  includeSymbols: !1,
  immutable: !1
};
function yg(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qS, n = [], s = [], i = !0, o = r.includeSymbols ? dh : Object.keys, a = !!r.immutable;
  return (function c(u) {
    var f = a ? DS(u, r) : u, l = {}, d = !0, h = {
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
        var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        h.isRoot || (h.parent.node[h.key] = P), h.node = P, T && (d = !1);
      },
      delete: function(P) {
        delete h.parent.node[h.key], P && (d = !1);
      },
      remove: function(P) {
        NS(h.parent.node) ? h.parent.node.splice(h.key, 1) : delete h.parent.node[h.key], P && (d = !1);
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
      return h;
    function m() {
      if (Ir(h.node) === "object" && h.node !== null) {
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
    if (Ir(h.node) === "object" && h.node !== null && !h.circular) {
      s.push(h), m();
      var v, g = !0, y = !1, x = void 0;
      try {
        for (var b = Object.entries((v = h.keys) !== null && v !== void 0 ? v : [])[Symbol.iterator](), O; !(g = (O = b.next()).done); g = !0) {
          var A = oT(O.value, 2), _ = A[0], E = A[1], I;
          n.push(E), l.pre && l.pre.call(h, h.node[E], E);
          var C = c(h.node[E]);
          a && Rs.call(h.node, E) && !vT(h.node, E) && (h.node[E] = C.node), C.isLast = !((I = h.keys) === null || I === void 0) && I.length ? +_ === h.keys.length - 1 : !1, C.isFirst = +_ == 0, l.post && l.post.call(h, C), n.pop();
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
  })(t).node;
}
var Ue, Lt, jt = /* @__PURE__ */ (function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qS;
    tT(this, t), mg(this, Ue), mg(this, Lt), Tl(this, Ue, e), Tl(this, Lt, r);
  }
  return nT(t, [
    {
      /**
      * Get the element at the array `path`.
      */
      key: "get",
      value: function(r) {
        for (var n = Ve(this, Ue), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!Rs.call(n, i) || !Ve(this, Lt).includeSymbols && (typeof i > "u" ? "undefined" : Ir(i)) === "symbol")
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
        for (var n = Ve(this, Ue), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!Rs.call(n, i) || !Ve(this, Lt).includeSymbols && (typeof i > "u" ? "undefined" : Ir(i)) === "symbol")
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
        var s = Ve(this, Ue), i = 0;
        for (i = 0; i < r.length - 1; i++) {
          var o = r[i];
          Rs.call(s, o) || (s[o] = {}), s = s[o];
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
        return yg(Ve(this, Ue), r, {
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
        return Tl(this, Ue, yg(Ve(this, Ue), r, Ve(this, Lt))), Ve(this, Ue);
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
        var s = arguments.length === 1, i = s ? Ve(this, Ue) : n;
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
        return kS(Ve(this, Ue)) ? Ve(this, Ue).slice() : (function i(o) {
          for (var a = 0; a < r.length; a++)
            if (r[a] === o)
              return n[a];
          if ((typeof o > "u" ? "undefined" : Ir(o)) === "object" && o !== null) {
            var c = DS(o, s);
            r.push(o), n.push(c);
            var u = s.includeSymbols ? dh : Object.keys, f = !0, l = !1, d = void 0;
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
        })(Ve(this, Ue));
      }
    }
  ]), t;
})();
Ue = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
var Pt = function(t, e) {
  return new jt(t, e);
};
Pt.get = function(t, e, r) {
  return new jt(t, r).get(e);
};
Pt.set = function(t, e, r, n) {
  return new jt(t, n).set(e, r);
};
Pt.has = function(t, e, r) {
  return new jt(t, r).has(e);
};
Pt.map = function(t, e, r) {
  return new jt(t, r).map(e);
};
Pt.forEach = function(t, e, r) {
  return new jt(t, r).forEach(e);
};
Pt.reduce = function(t, e, r, n) {
  return new jt(t, n).reduce(e, r);
};
Pt.paths = function(t, e) {
  return new jt(t, e).paths();
};
Pt.nodes = function(t, e) {
  return new jt(t, e).nodes();
};
Pt.clone = function(t, e) {
  return new jt(t, e).clone();
};
var gT = Pt;
const bT = ["properties"], xT = ["properties"], ST = [
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
], OT = ["schema/example", "items/example"];
function LS(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    bT.indexOf(e) > -1 && xT.indexOf(r) === -1 || ST.indexOf(n) > -1 || OT.some((s) => n.indexOf(s) > -1)
  );
}
function wT(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return gT(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), u = ef(this.node, n(a));
      i.push(r.replace(c, u));
    }
  }), i;
}
function ef(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if (bi(s))
    o = Pe(s, i);
  else {
    const a = Pe(Cs, s), u = Pe(a, i).replace(Cs, "");
    o = i.startsWith("/") ? u : u.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const ET = /^([a-z]+:\/\/|\/\/)/i;
class Vr extends bt {
}
const Rt = {}, vg = /* @__PURE__ */ new WeakMap(), AT = [
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
], jT = (t) => AT.some((e) => e(t)), PT = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (LS(i) || jT(i))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof t != "string")
      return new Vr("$ref: must be a string (JSON-Ref)", {
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    const a = BS(t), c = a[0], u = a[1] || "";
    let f;
    try {
      f = o || c ? VS(c, o) : null;
    } catch (p) {
      return tf(p, {
        pointer: u,
        $ref: t,
        basePath: f,
        fullPath: r
      });
    }
    let l, d;
    if ($T(u, f, i, n) && !s.useCircularStructures) {
      const p = ef(t, f);
      return t === p ? null : ue.replace(r, p);
    }
    if (f == null ? (d = yh(u), l = n.get(d), typeof l > "u" && (l = new Vr(`Could not resolve reference: ${t}`, {
      pointer: u,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (l = US(f, u), l.__value != null ? l = l.__value : l = l.catch((p) => {
      throw tf(p, {
        pointer: u,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), l instanceof Error)
      return [ue.remove(r), l];
    const h = ef(t, f), m = ue.replace(i, l, {
      $$ref: h
    });
    if (f && f !== o)
      return [m, ue.context(i, {
        baseDoc: f
      })];
    try {
      if (!IT(n.state, m) || s.useCircularStructures)
        return m;
    } catch {
      return null;
    }
  }
}, mh = Object.assign(PT, {
  docCache: Rt,
  absoluteify: VS,
  clearCache: RT,
  JSONRefError: Vr,
  wrapError: tf,
  getDoc: JS,
  split: BS,
  extractFromDoc: US,
  fetchJSON: _T,
  extract: rf,
  jsonPointerToArray: yh,
  unescapeJsonPointerToken: HS
});
function VS(t, e) {
  if (!ET.test(t)) {
    if (!e)
      throw new Vr(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return Pe(e, t);
  }
  return t;
}
function tf(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new Vr(`Could not resolve reference: ${r}`, {
    ...e,
    cause: t
  });
}
function BS(t) {
  return (t + "").split("#");
}
function US(t, e) {
  const r = Rt[t];
  if (r && !ue.isPromise(r))
    try {
      const n = rf(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return JS(t).then((n) => rf(e, n));
}
function RT(t) {
  typeof t < "u" ? delete Rt[t] : Object.keys(Rt).forEach((e) => {
    delete Rt[e];
  });
}
function JS(t) {
  const e = Rt[t];
  return e ? ue.isPromise(e) ? e : Promise.resolve(e) : (Rt[t] = mh.fetchJSON(t).then((r) => (Rt[t] = r, r)), Rt[t]);
}
function _T(t) {
  return fetch(t, {
    headers: {
      Accept: Ng
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => Fr.load(e));
}
function rf(t, e) {
  const r = yh(t);
  if (r.length < 1)
    return e;
  const n = ue.getIn(e, r);
  if (typeof n > "u")
    throw new Vr(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function yh(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(HS);
}
function HS(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function GS(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function TT(t) {
  return t.length === 0 ? "" : `/${t.map(GS).join("/")}`;
}
const CT = (t) => !t || t === "/" || t === "#";
function Cl(t, e) {
  if (CT(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function $T(t, e, r, n) {
  let s = vg.get(n);
  s || (s = {}, vg.set(n, s));
  const i = TT(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && Cl(a, t))
    return !0;
  let u = "";
  if (r.some((l) => (u = `${u}/${GS(l)}`, s[u] && s[u].some((d) => Cl(d, o) || Cl(o, d)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function IT(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return ue.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const MT = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (LS(i))
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
      const l = r.slice(0, -1), d = wT(u, l, {
        getBaseUrlForNodePath: (h) => n.getContext([...r, f, ...h]).baseDoc,
        specmap: n
      });
      c.push(...d);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, FT = {
  key: "parameters",
  plugin: (t, e, r, n) => {
    if (Array.isArray(t) && t.length) {
      const s = Object.assign([], t), i = r.slice(0, -1), o = {
        ...ue.getIn(n.spec, i)
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
      return ue.replace(r, s);
    }
    return ue.replace(r, t);
  }
}, kT = {
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
    return ue.replace(r, s);
  }
};
class NT {
  constructor(e) {
    this.root = $l(e || {});
  }
  set(e, r) {
    const n = this.getParent(e, !0);
    if (!n) {
      Qs(this.root, r, null);
      return;
    }
    const s = e[e.length - 1], {
      children: i
    } = n;
    if (i[s]) {
      Qs(i[s], r, n);
      return;
    }
    i[s] = $l(r, n);
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
      return !i[s] && r && (i[s] = $l(null, n)), i[s];
    }, this.root);
  }
}
function $l(t, e) {
  return Qs({
    children: {}
  }, t, e);
}
function Qs(t, e, r) {
  return t.value = e || {}, t.protoValue = r ? {
    ...r.protoValue,
    ...t.value
  } : t.value, Object.keys(t.children).forEach((n) => {
    const s = t.children[n];
    t.children[n] = Qs(s, s.value, t);
  }), t;
}
const gg = 100, bg = () => {
};
class DT {
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
      contextTree: new NT(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), ue, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, e), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(ue.isFunction), this.patches.push(ue.add([], this.spec)), this.patches.push(ue.context([], this.context)), this.updatePatches(this.patches);
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
    return e[this.pluginProp] ? (s = e, i = e[this.pluginProp]) : ue.isFunction(e) ? i = e : ue.isObject(e) && (i = o(e)), Object.assign(i.bind(s), {
      pluginName: e.name || r,
      isGenerator: ue.isGenerator(i)
    });
    function o(a) {
      const c = (u, f) => Array.isArray(u) ? u.every((l, d) => l === f[d]) : !0;
      return function* (f, l) {
        const d = {};
        for (const [m, p] of f.filter(ue.isAdditiveMutation).entries())
          if (m < qg)
            yield* h(p.value, p.path, p);
          else
            return;
        function* h(m, p, v) {
          if (!ue.isObject(m))
            a.key === p[p.length - 1] && (yield a.plugin(m, a.key, p, l));
          else {
            const g = p.length - 1, y = p[g], x = p.indexOf("properties"), b = y === "properties" && g === x, O = l.allowMetaPatches && d[m.$$ref];
            for (const A of Object.keys(m)) {
              const _ = m[A], E = p.concat(A), I = ue.isObject(_), C = m.$$ref;
              if (O || I && (l.allowMetaPatches && C && c(n, E) && (d[C] = !0), yield* h(_, E, v)), !b && A === a.key) {
                const S = c(n, p);
                (!n || S) && (yield a.plugin(_, A, E, l, v));
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
    ue.normalizeArray(e).forEach((r) => {
      if (r instanceof Error) {
        this.errors.push(r);
        return;
      }
      try {
        if (!ue.isObject(r)) {
          this.debug("updatePatches", "Got a non-object patch", r);
          return;
        }
        if (this.showDebug && this.allPatches.push(r), ue.isPromise(r.value)) {
          this.promisedPatches.push(r), this.promisedPatchThen(r);
          return;
        }
        if (ue.isContextPatch(r)) {
          this.setContext(r.path, r.value);
          return;
        }
        ue.isMutation(r) && this.updateMutations(r);
      } catch (n) {
        console.error(n), this.errors.push(n);
      }
    });
  }
  updateMutations(e) {
    typeof e.value == "object" && !Array.isArray(e.value) && this.allowMetaPatches && (e.value = {
      ...e.value
    });
    const r = ue.applyPatch(this.state, e, {
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
    return ue.getIn(this.state, e);
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
    if (e.pluginCount = e.pluginCount || /* @__PURE__ */ new WeakMap(), e.pluginCount.set(r, (e.pluginCount.get(r) || 0) + 1), e.pluginCount[r] > gg)
      return Promise.resolve({
        spec: e.state,
        errors: e.errors.concat(new Error(`We've reached a hard limit of ${gg} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const i = this.promisedPatches.map((o) => o.value);
      return Promise.all(i.map((o) => o.then(bg, bg))).then(() => this.dispatch());
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
      i && (i = ue.fullyNormalizeArray(i), e.updatePatches(i, r));
    }
  }
}
function qT(t) {
  return new DT(t).dispatch();
}
const sr = {
  refs: mh,
  allOf: MT,
  parameters: FT,
  properties: kT
};
async function vh(t) {
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
  } = t, d = bf(t), h = Ib(t), m = l.find((v) => v.match(e));
  return p(e);
  async function p(v) {
    d && (sr.refs.docCache[d] = v), sr.refs.fetchJSON = $b(h, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const g = [sr.refs];
    typeof o == "function" && g.push(sr.parameters), typeof i == "function" && g.push(sr.properties), r !== "strict" && g.push(sr.allOf);
    const y = await qT({
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
const KS = (t) => t.replace(/\W/gi, "_");
function LT(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${KS(t)}`;
}
function qn(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? KS(t.operationId) : LT(e, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function gh(t) {
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
      const u = qn(c, s, a);
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
                  c[h].some((v) => !ht(v) && !ht(m) ? !1 : v === m ? !0 : ["name", "$ref", "$$ref"].some((g) => typeof v[g] == "string" && typeof m[g] == "string" && v[g] === m[g])) || c[h].push(m);
        }
      }
    }
  }
  return e.$$normalized = !0, t;
}
function VT() {
  sr.refs.clearCache();
}
const zS = {
  name: "generic",
  match() {
    return !0;
  },
  normalize(t) {
    const {
      spec: e
    } = gh({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return vh(t);
  }
};
async function BT(t) {
  return vh(t);
}
const WS = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, YS = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, bh = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, xh = (t) => YS(t) || bh(t), XS = {
  name: "openapi-2",
  match(t) {
    return WS(t);
  },
  normalize(t) {
    const {
      spec: e
    } = gh({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return BT(t);
  }
};
async function UT(t) {
  return vh(t);
}
const QS = {
  name: "openapi-3-0",
  match(t) {
    return YS(t);
  },
  normalize(t) {
    const {
      spec: e
    } = gh({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return UT(t);
  }
}, JT = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = bf(t), i = Ib(t), o = e || await $b(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((u) => u.match(o)).resolve(a);
}, ZS = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return JT(r);
}, HT = ZS({
  strategies: [QS, XS, zS]
}), GT = async (t, e, r = {}) => {
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
  }, h = f.find((p) => p.match(t)).normalize(t), m = await HT({
    spec: h,
    ...l,
    allowMetaPatches: !0,
    skipNormalization: !bh(t)
  });
  return !n && Array.isArray(e) && e.length && (m.spec = e.reduce((p, v) => p?.[v], m.spec) || null), m;
}, KT = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return GT(e, r, s);
}, zT = (t) => {
  try {
    const e = t.startsWith("#") ? t.slice(1) : t;
    return decodeURIComponent(e);
  } catch {
    return t;
  }
}, et = (t) => {
  const e = t.indexOf("#"), r = e === -1 ? "#" : t.substring(e);
  return zT(r);
};
function Ln() {
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
const it = function() {
  const e = Y, r = Ye, n = this, s = "parser.js: Parser(): ", i = function() {
    this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
      this.state = e.ACTIVE, this.phraseLength = 0;
    };
  };
  n.ast = void 0, n.stats = void 0, n.trace = void 0, n.callbacks = [];
  let o = 0, a = 0, c = 0, u = 0, f = 0, l, d, h, m, p = new i(), v, g, y;
  const x = () => {
    o = 0, a = 0, c = 0, u = 0, f = 0, l = void 0, d = void 0, h = void 0, m = void 0, p.refresh(), v = void 0, g = void 0, y = void 0;
  }, b = () => {
    const L = `${s}initializeCallbacks(): `;
    let $;
    for (v = [], g = [], $ = 0; $ < l.length; $ += 1)
      v[$] = void 0;
    for ($ = 0; $ < d.length; $ += 1)
      g[$] = void 0;
    let H;
    const J = [];
    for ($ = 0; $ < l.length; $ += 1)
      J.push(l[$].lower);
    for ($ = 0; $ < d.length; $ += 1)
      J.push(d[$].lower);
    for (const V in n.callbacks)
      if (n.callbacks.hasOwnProperty(V)) {
        if ($ = J.indexOf(V.toLowerCase()), $ < 0)
          throw new Error(`${L}syntax callback '${V}' not a rule or udt name`);
        if (H = n.callbacks[V] ? n.callbacks[V] : void 0, typeof H == "function" || H === void 0)
          $ < l.length ? v[$] = H : g[$ - l.length] = H;
        else
          throw new Error(`${L}syntax callback[${V}] must be function reference or falsy)`);
      }
  };
  n.parse = (L, $, H, J) => {
    const V = `${s}parse(): `;
    x(), m = r.stringToChars(H), l = L.rules, d = L.udts;
    const se = $.toLowerCase();
    let ie;
    for (const wr in l)
      if (l.hasOwnProperty(wr) && se === l[wr].lower) {
        ie = l[wr].index;
        break;
      }
    if (ie === void 0)
      throw new Error(`${V}start rule name '${startRule}' not recognized`);
    b(), n.trace && n.trace.init(l, d, m), n.stats && n.stats.init(l, d), n.ast && n.ast.init(l, d, m), y = J, h = [
      {
        type: e.RNM,
        index: ie
      }
    ], ne(0, 0), h = void 0;
    let _e = !1;
    switch (p.state) {
      case e.ACTIVE:
        throw new Error(`${V}final state should never be 'ACTIVE'`);
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
  const O = (L, $) => {
    const H = h[L];
    for (let J = 0; J < H.children.length && (ne(H.children[J], $), p.state === e.NOMATCH); J += 1)
      ;
  }, A = (L, $) => {
    let H, J, V, se;
    const ie = h[L];
    n.ast && (J = n.ast.getLength()), H = !0, V = $, se = 0;
    for (let _e = 0; _e < ie.children.length; _e += 1)
      if (ne(ie.children[_e], V), p.state === e.NOMATCH) {
        H = !1;
        break;
      } else
        V += p.phraseLength, se += p.phraseLength;
    H ? (p.state = se === 0 ? e.EMPTY : e.MATCH, p.phraseLength = se) : (p.state = e.NOMATCH, p.phraseLength = 0, n.ast && n.ast.setLength(J));
  }, _ = (L, $) => {
    let H, J, V, se;
    const ie = h[L];
    if (ie.max === 0) {
      p.state = e.EMPTY, p.phraseLength = 0;
      return;
    }
    for (J = $, V = 0, se = 0, n.ast && (H = n.ast.getLength()); !(J >= m.length || (ne(L + 1, J), p.state === e.NOMATCH) || p.state === e.EMPTY || (se += 1, V += p.phraseLength, J += p.phraseLength, se === ie.max)); )
      ;
    p.state === e.EMPTY || se >= ie.min ? (p.state = V === 0 ? e.EMPTY : e.MATCH, p.phraseLength = V) : (p.state = e.NOMATCH, p.phraseLength = 0, n.ast && n.ast.setLength(H));
  }, E = (L, $, H, J) => {
    if ($.phraseLength > H) {
      let V = `${s}opRNM(${L.name}): callback function error: `;
      throw V += `sysData.phraseLength: ${$.phraseLength}`, V += ` must be <= remaining chars: ${H}`, new Error(V);
    }
    switch ($.state) {
      case e.ACTIVE:
        if (!J)
          throw new Error(
            `${s}opRNM(${L.name}): callback function return error. ACTIVE state not allowed.`
          );
        break;
      case e.EMPTY:
        $.phraseLength = 0;
        break;
      case e.MATCH:
        $.phraseLength === 0 && ($.state = e.EMPTY);
        break;
      case e.NOMATCH:
        $.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opRNM(${L.name}): callback function return error. Unrecognized return state: ${$.state}`
        );
    }
  }, I = (L, $) => {
    let H, J, V;
    const se = h[L], ie = l[se.index], _e = v[ie.index];
    if (o || (J = n.ast && n.ast.ruleDefined(se.index), J && (H = n.ast.getLength(), n.ast.down(se.index, l[se.index].name))), _e) {
      const wr = m.length - $;
      _e(p, m, $, y), E(ie, p, wr, !0), p.state === e.ACTIVE && (V = h, h = ie.opcodes, ne(0, $), h = V, _e(p, m, $, y), E(ie, p, wr, !1));
    } else
      V = h, h = ie.opcodes, ne(0, $), h = V;
    o || J && (p.state === e.NOMATCH ? n.ast.setLength(H) : n.ast.up(se.index, ie.name, $, p.phraseLength));
  }, C = (L, $) => {
    const H = h[L];
    p.state = e.NOMATCH, $ < m.length && H.min <= m[$] && m[$] <= H.max && (p.state = e.MATCH, p.phraseLength = 1);
  }, S = (L, $) => {
    const H = h[L], J = H.string.length;
    if (p.state = e.NOMATCH, $ + J <= m.length) {
      for (let V = 0; V < J; V += 1)
        if (m[$ + V] !== H.string[V])
          return;
      p.state = e.MATCH, p.phraseLength = J;
    }
  }, P = (L, $) => {
    let H;
    const J = h[L];
    p.state = e.NOMATCH;
    const V = J.string.length;
    if (V === 0) {
      p.state = e.EMPTY;
      return;
    }
    if ($ + V <= m.length) {
      for (let se = 0; se < V; se += 1)
        if (H = m[$ + se], H >= 65 && H <= 90 && (H += 32), H !== J.string[se])
          return;
      p.state = e.MATCH, p.phraseLength = V;
    }
  }, T = (L, $, H) => {
    if ($.phraseLength > H) {
      let J = `${s}opUDT(${L.name}): callback function error: `;
      throw J += `sysData.phraseLength: ${$.phraseLength}`, J += ` must be <= remaining chars: ${H}`, new Error(J);
    }
    switch ($.state) {
      case e.ACTIVE:
        throw new Error(`${s}opUDT(${L.name}) ACTIVE state return not allowed.`);
      case e.EMPTY:
        if (L.empty)
          $.phraseLength = 0;
        else
          throw new Error(`${s}opUDT(${L.name}) may not return EMPTY.`);
        break;
      case e.MATCH:
        if ($.phraseLength === 0)
          if (L.empty)
            $.state = e.EMPTY;
          else
            throw new Error(`${s}opUDT(${L.name}) may not return EMPTY.`);
        break;
      case e.NOMATCH:
        $.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opUDT(${L.name}): callback function return error. Unrecognized return state: ${$.state}`
        );
    }
  }, B = (L, $) => {
    let H, J, V;
    const se = h[L], ie = d[se.index];
    p.UdtIndex = ie.index, o || (V = n.ast && n.ast.udtDefined(se.index), V && (J = l.length + se.index, H = n.ast.getLength(), n.ast.down(J, ie.name)));
    const _e = m.length - $;
    g[se.index](p, m, $, y), T(ie, p, _e), o || V && (p.state === e.NOMATCH ? n.ast.setLength(H) : n.ast.up(J, ie.name, $, p.phraseLength));
  }, D = (L, $) => {
    switch (o += 1, ne(L + 1, $), o -= 1, p.phraseLength = 0, p.state) {
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
  }, Q = (L, $) => {
    switch (o += 1, ne(L + 1, $), o -= 1, p.phraseLength = 0, p.state) {
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
  }, ne = (L, $) => {
    const H = `${s}opExecute(): `, J = h[L];
    switch (u += 1, a > c && (c = a), a += 1, p.refresh(), n.trace && n.trace.down(J, $), J.type) {
      case e.ALT:
        O(L, $);
        break;
      case e.CAT:
        A(L, $);
        break;
      case e.REP:
        _(L, $);
        break;
      case e.RNM:
        I(L, $);
        break;
      case e.TRG:
        C(L, $);
        break;
      case e.TBS:
        S(L, $);
        break;
      case e.TLS:
        P(L, $);
        break;
      case e.UDT:
        B(L, $);
        break;
      case e.AND:
        D(L, $);
        break;
      case e.NOT:
        Q(L, $);
        break;
      default:
        throw new Error(`${H}unrecognized operator`);
    }
    o || $ + p.phraseLength > f && (f = $ + p.phraseLength), n.stats && n.stats.collect(J, p), n.trace && n.trace.up(J, p.state, $, p.phraseLength), a -= 1;
  };
}, Sh = function() {
  const e = "parser.js: Ast()): ", r = Y, n = Ye, s = this;
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
}, WT = function() {
  const e = Y, r = Ye, n = "parser.js: Trace(): ";
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
    let x, b, O;
    switch (m) {
      case e.EMPTY:
        O = "|E|", b = "''";
        break;
      case e.MATCH:
        O = "|M|", x = Math.min(u, v), x < v ? b = `'${r.charsToString(s, p, x)}...'` : b = `'${r.charsToString(s, p, x)}'`;
        break;
      case e.NOMATCH:
        O = "|N|", b = "";
        break;
      default:
        throw new Error(`${g} unrecognized state`);
    }
    b = `${y}${O}[${d(h)}]${b}
`, a += b;
  }, f.displayTrace = () => a;
}, YT = function() {
  const e = Y, r = "parser.js: Stats(): ";
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
    }, y = (x, b, O, A, _) => {
      g.match += b, g.empty += O, g.nomatch += A, g.total += _;
      const E = u(b), I = u(O), C = u(A), S = u(_);
      return `${x} | ${E} | ${I} | ${C} | ${S} |
`;
    };
    return v += `          OPERATOR STATS
`, v += `      |   MATCH |   EMPTY | NOMATCH |   TOTAL |
`, v += y("  ALT", o[e.ALT].match, o[e.ALT].empty, o[e.ALT].nomatch, o[e.ALT].total), v += y("  CAT", o[e.CAT].match, o[e.CAT].empty, o[e.CAT].nomatch, o[e.CAT].total), v += y("  REP", o[e.REP].match, o[e.REP].empty, o[e.REP].nomatch, o[e.REP].total), v += y("  RNM", o[e.RNM].match, o[e.RNM].empty, o[e.RNM].nomatch, o[e.RNM].total), v += y("  TRG", o[e.TRG].match, o[e.TRG].empty, o[e.TRG].nomatch, o[e.TRG].total), v += y("  TBS", o[e.TBS].match, o[e.TBS].empty, o[e.TBS].nomatch, o[e.TBS].total), v += y("  TLS", o[e.TLS].match, o[e.TLS].empty, o[e.TLS].nomatch, o[e.TLS].total), v += y("  UDT", o[e.UDT].match, o[e.UDT].empty, o[e.UDT].nomatch, o[e.UDT].total), v += y("  AND", o[e.AND].match, o[e.AND].empty, o[e.AND].nomatch, o[e.AND].total), v += y("  NOT", o[e.NOT].match, o[e.NOT].empty, o[e.NOT].nomatch, o[e.NOT].total), v += y("TOTAL", g.match, g.empty, g.nomatch, g.total), v;
  }, this.displayHits = (v) => {
    let g = "";
    const y = (x, b, O, A, _) => {
      i.match += x, i.empty += b, i.nomatch += O, i.total += A;
      const E = u(x), I = u(b), C = u(O), S = u(A);
      return `| ${E} | ${I} | ${C} | ${S} | ${_}
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
}, Ye = {
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
class eO extends Ut {
}
const Il = (t) => (e, r, n, s, i) => {
  if (!(typeof i == "object" && i !== null && !Array.isArray(i)))
    throw new eO("parser's user data must be an object");
  if (e === Y.SEM_PRE) {
    const o = {
      type: t,
      text: Ye.charsToString(r, n, s),
      start: n,
      length: s,
      children: []
    };
    i.stack.length > 0 ? i.stack[i.stack.length - 1].children.push(o) : i.root = o, i.stack.push(o);
  }
  e === Y.SEM_POST && i.stack.pop();
};
class XT extends Sh {
  constructor() {
    super(), this.callbacks["json-pointer"] = Il("json-pointer"), this.callbacks["reference-token"] = Il("reference-token"), this.callbacks.slash = Il("text");
  }
  getTree() {
    const e = {
      stack: [],
      root: null
    };
    return this.translate(e), delete e.stack, e;
  }
}
const QT = (t) => {
  if (typeof t != "string")
    throw new TypeError("Reference token must be a string");
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
};
class ZT extends XT {
  getTree() {
    const {
      root: e
    } = super.getTree();
    return e.children.filter(({
      type: r
    }) => r === "reference-token").map(({
      text: r
    }) => QT(r));
  }
}
class eC extends Array {
  toString() {
    return this.map((e) => `"${String(e)}"`).join(", ");
  }
}
class tC extends WT {
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
    return new eC(...r);
  }
}
const rC = new Ln(), nC = (t, {
  translator: e = new ZT(),
  stats: r = !1,
  trace: n = !1
} = {}) => {
  if (typeof t != "string")
    throw new TypeError("JSON Pointer must be a string");
  try {
    const s = new it();
    e && (s.ast = e), r && (s.stats = new YT()), n && (s.trace = new tC());
    const i = s.parse(rC, "json-pointer", t);
    return {
      result: i,
      tree: i.success && e ? s.ast.getTree() : void 0,
      stats: s.stats,
      trace: s.trace
    };
  } catch (s) {
    throw new eO("Unexpected error during JSON Pointer parsing", {
      cause: s,
      jsonPointer: t
    });
  }
};
new Ln();
new it();
new Ln();
new it();
const sC = new Ln(), iC = new it(), oC = (t) => {
  if (typeof t != "string") return !1;
  try {
    return iC.parse(sC, "array-index", t).success;
  } catch {
    return !1;
  }
}, aC = new Ln(), cC = new it(), uC = (t) => {
  if (typeof t != "string") return !1;
  try {
    return cC.parse(aC, "array-dash", t).success;
  } catch {
    return !1;
  }
}, lC = (t) => {
  if (typeof t != "string" && typeof t != "number")
    throw new TypeError("Reference token must be a string or number");
  return String(t).replace(/~/g, "~0").replace(/\//g, "~1");
};
class fC extends Ut {
}
const tO = (t) => {
  if (!Array.isArray(t))
    throw new TypeError("Reference tokens must be a list of strings or numbers");
  try {
    return t.length === 0 ? "" : `/${t.map((e) => {
      if (typeof e != "string" && typeof e != "number")
        throw new TypeError("Reference token must be a string or number");
      return lC(String(e));
    }).join("/")}`;
  } catch (e) {
    throw new fC("Unexpected error during JSON Pointer compilation", {
      cause: e,
      referenceTokens: t
    });
  }
};
class hC {
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
class rO {
  name = "";
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
class lr extends Ut {
}
class Cr extends lr {
}
class pC extends rO {
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
        throw new Cr(`Invalid array index "${r}": index must be an unsinged 32-bit integer`, {
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
class dC extends lr {
}
class nO extends lr {
}
const mC = (t, e, {
  strictArrays: r = !0,
  strictObjects: n = !0,
  realm: s = new pC(),
  trace: i = !0
} = {}) => {
  const {
    result: o,
    tree: a,
    trace: c
  } = nC(e, {
    trace: !!i
  }), u = typeof i == "object" && i !== null ? new hC(i, {
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
      throw l += c ? `, expected ${c.inferExpectations()}` : "", new lr(l, {
        jsonPointer: e,
        currentValue: t,
        realm: s.name
      });
    }
    return a.reduce((l, d, h) => {
      if (s.isArray(l)) {
        if (uC(d)) {
          if (r)
            throw new Cr(`Invalid array index "-" at position ${h} in "${e}". The "-" token always refers to a nonexistent element during evaluation`, {
              jsonPointer: e,
              referenceTokens: a,
              referenceToken: d,
              referenceTokenPosition: h,
              currentValue: l,
              realm: s.name
            });
          return f = s.evaluate(l, String(s.sizeOf(l))), u?.step({
            referenceToken: d,
            input: l,
            output: f
          }), f;
        }
        if (!oC(d))
          throw new Cr(`Invalid array index "${d}" at position ${h} in "${e}": index MUST be "0", or digits without a leading "0"`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: h,
            currentValue: l,
            realm: s.name
          });
        const m = Number(d);
        if (!Number.isSafeInteger(m))
          throw new Cr(`Invalid array index "${d}" at position ${h} in "${e}": index must be a safe integer`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: h,
            currentValue: l,
            realm: s.name
          });
        if (!s.has(l, d) && r)
          throw new Cr(`Invalid array index "${d}" at position ${h} in "${e}": index not found in array`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: h,
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
          throw new nO(`Invalid object key "${d}" at position ${h} in "${e}": key not found in object`, {
            jsonPointer: e,
            referenceTokens: a,
            referenceToken: d,
            referenceTokenPosition: h,
            currentValue: l,
            realm: s.name
          });
        return f = s.evaluate(l, d), u?.step({
          referenceToken: d,
          input: l,
          output: f
        }), f;
      }
      throw new dC(`Invalid reference token "${d}" at position ${h} in "${e}": cannot be applied to a non-object/non-array value`, {
        jsonPointer: e,
        referenceTokens: a,
        referenceToken: d,
        referenceTokenPosition: h,
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
    }), f instanceof lr ? f : new lr("Unexpected error during JSON Pointer evaluation", {
      cause: f,
      jsonPointer: e,
      referenceTokens: a
    });
  }
};
class yC extends rO {
  name = "apidom";
  isArray(e) {
    return ke(e);
  }
  isObject(e) {
    return te(e);
  }
  sizeOf(e) {
    return this.isArray(e) || this.isObject(e) ? e.length : 0;
  }
  has(e, r) {
    if (this.isArray(e)) {
      const n = Number(r), s = n >>> 0;
      if (n !== s)
        throw new Cr(`Invalid array index "${r}": index must be an unsinged 32-bit integer`, {
          referenceToken: r,
          currentValue: e,
          realm: this.name
        });
      return s < this.sizeOf(e);
    }
    if (this.isObject(e)) {
      const n = e.keys(), s = new Set(n);
      if (n.length !== s.size)
        throw new nO(`Object key "${r}" is not unique — JSON Pointer requires unique member names`, {
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
const ct = (t, e, r = {}) => mC(t, e, {
  ...r,
  realm: new yC()
});
class Oh extends R_ {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return hi(this.filterByFormat(e));
  }
}
const Br = new Oh("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
let Vn = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "callback";
  }
}, Bn = class extends w.ObjectElement {
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
}, Un = class extends w.ObjectElement {
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
}, Jn = class extends w.ObjectElement {
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
}, Ci = class extends w.ObjectElement {
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
}, Hn = class extends w.ObjectElement {
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
}, Gn = class extends w.ObjectElement {
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
}, Qr = class extends w.ObjectElement {
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
Object.defineProperty(Qr.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Kn = class extends w.ObjectElement {
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
}, zn = class extends w.ObjectElement {
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
}, Wn = class extends w.ObjectElement {
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
    if (K(this.operationRef)) {
      var e;
      return (e = this.operationRef) === null || e === void 0 ? void 0 : e.meta.get("operation");
    }
    if (K(this.operationId)) {
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
}, Yn = class extends w.ObjectElement {
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
}, $i = class extends w.ObjectElement {
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
}, Ii = class extends w.ObjectElement {
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
}, Xn = class extends w.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
class Mi extends w.ObjectElement {
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
let Qn = class extends w.ObjectElement {
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
}, Zr = class extends w.ObjectElement {
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
Object.defineProperty(Zr.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Zn = class extends w.ObjectElement {
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
}, es = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "paths";
  }
}, ts = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "reference", this.classes.push("openapi-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}, rs = class extends w.ObjectElement {
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
}, ns = class extends w.ObjectElement {
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
}, ss = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "responses";
  }
  get default() {
    return this.get("default");
  }
  set default(e) {
    this.set("default", e);
  }
}, en = class extends w.ObjectElement {
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
class tn extends w.ObjectElement {
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
class is extends w.ObjectElement {
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
let os = class extends w.ObjectElement {
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
const vC = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", en), e.register("jSONReference", tn), e.register("media", is), e.register("linkDescription", os), e;
  }
}, as = (t) => {
  if (ve(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, gC = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Et
};
let sO = class {
  element;
  constructor(e) {
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = nt(r.meta, e.meta), kn(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = nt(r.attributes, e.attributes));
  }
}, re = class extends sO {
  enter(e) {
    return this.element = q(e), ee;
  }
};
const iO = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, On = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : On(r, [...e, r]);
}, bC = (...t) => {
  if (t.length === 0)
    return;
  let e;
  const r = t.map((n) => On(n));
  for (; r.every((n) => n.length > 0); ) {
    const n = r.map((i) => i.pop()), s = n[0];
    if (n.every((i) => i === s))
      e = s;
    else
      break;
  }
  return e;
}, xg = (t, e, r = []) => {
  var n;
  const s = (n = bC(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = On(s);
  for (let a of t) {
    let c = On(a);
    for (let u = c.length - 1; u >= 0; u--) {
      let f = c[u];
      o.indexOf(f) === -1 && (iO(i, f, ["constructor", ...r]), o.push(f));
    }
  }
  return i.constructor = e, i;
}, nf = (t) => t.filter((e, r) => t.indexOf(e) == r), oO = /* @__PURE__ */ new WeakMap(), xC = (t) => oO.get(t), SC = (t, e) => oO.set(t, e), Sg = (t, e) => {
  var r, n;
  const s = nf([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = nf([...(r = t?.[o]) !== null && r !== void 0 ? r : [], ...(n = e?.[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, Og = (t, e) => {
  var r, n, s, i;
  return {
    property: Sg((r = t?.property) !== null && r !== void 0 ? r : {}, (n = e?.property) !== null && n !== void 0 ? n : {}),
    method: Sg((s = t?.method) !== null && s !== void 0 ? s : {}, (i = e?.method) !== null && i !== void 0 ? i : {})
  };
}, OC = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: nf([...(r = t?.class) !== null && r !== void 0 ? r : [], ...(n = e?.class) !== null && n !== void 0 ? n : []]),
    static: Og((s = t?.static) !== null && s !== void 0 ? s : {}, (i = e?.static) !== null && i !== void 0 ? i : {}),
    instance: Og((o = t?.instance) !== null && o !== void 0 ? o : {}, (a = e?.instance) !== null && a !== void 0 ? a : {})
  };
}, wC = /* @__PURE__ */ new Map(), EC = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = On(s.prototype).map((u) => u.constructor), o = (e = xC(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((u) => !r.has(u));
      for (let u of c)
        n.add(u);
      r.add(s), n.delete(s);
    }
  return [...r];
}, AC = (...t) => {
  const e = EC(...t).map((r) => wC.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => OC(r, n));
};
function M(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      iO(this, new c(...a));
  }
  i.prototype = xg(s, i), Object.setPrototypeOf(
    i,
    xg(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = AC(...t);
    for (let c of (e = a?.class) !== null && e !== void 0 ? e : []) {
      const u = c(o);
      u && (o = u);
    }
    wg((r = a?.static) !== null && r !== void 0 ? r : {}, o), wg((n = a?.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return SC(o, t), o;
}
const wg = (t, e) => {
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
let Xe = class extends sO {
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
    return Mx(this.passingOptionsNames, this);
  }
  retrieveFixedFields(e) {
    const r = Re(["visitors", ...e, "fixedFields"], this.specObj);
    return typeof r == "object" && r !== null ? Object.keys(r) : [];
  }
  retrieveVisitor(e) {
    return di(vr, ["visitors", ...e], this.specObj) ? Re(["visitors", ...e], this.specObj) : Re(["visitors", ...e, "$visitor"], this.specObj);
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
    return s instanceof re && s?.constructor === re ? q(r) : (Se(r, s, n), s.element);
  }
}, hr = class extends Xe {
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
      if (K(i) && n.includes(R(i)) && !this.ignoredFields.includes(R(i))) {
        const a = this.toRefractedElement([...r, "fixedFields", R(i)], s), c = new w.MemberElement(q(i), a);
        this.copyMetaAndAttributes(o, c), c.classes.push("fixed-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(R(i)) || this.element.content.push(q(o));
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class Oe {
  parent;
  constructor({
    parent: e
  }) {
    this.parent = e;
  }
}
const aO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof en || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), wh = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof tn || t(n) && e("JSONReference", n) && r("object", n)), cO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof is || t(n) && e("media", n) && r("object", n)), jC = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof os || t(n) && e("linkDescription", n) && r("object", n)), PC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: wh,
  isJSONSchemaElement: aO,
  isLinkDescriptionElement: jC,
  isMediaElement: cO
}, Symbol.toStringTag, { value: "Module" }));
let uO = class extends M(hr, Oe, re) {
  constructor(e) {
    super(e), this.element = new en(), this.specPath = G(["document", "objects", "JSONSchema"]);
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-04/schema#";
  }
  ObjectElement(e) {
    return this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element, hr.prototype.ObjectElement.call(this, e);
  }
  handleDialectIdentifier(e) {
    if (Xt(this.parent) && !K(e.get("$schema")))
      this.element.setMetaProperty("inheritedDialectIdentifier", this.defaultDialectIdentifier);
    else if (aO(this.parent) && !K(e.get("$schema"))) {
      const r = Dr(R(this.parent.meta.get("inheritedDialectIdentifier")), R(this.parent.$schema));
      this.element.setMetaProperty("inheritedDialectIdentifier", r);
    }
  }
  handleSchemaIdentifier(e, r = "id") {
    const n = this.parent !== void 0 ? q(this.parent.getMetaProperty("ancestorsSchemaIdentifiers", [])) : new w.ArrayElement(), s = R(e.get(r));
    yi(s) && n.push(s), this.element.setMetaProperty("ancestorsSchemaIdentifiers", n);
  }
};
const xt = (t) => te(t) && t.hasKey("$ref");
let lO = class extends M(Xe, Oe, re) {
  ObjectElement(e) {
    const r = xt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), ee;
  }
  ArrayElement(e) {
    return this.element = new w.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = xt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class RC extends re {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
let _C = class extends Xe {
  specPath;
  ignoredFields;
  fieldPatternPredicate = Df;
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
      if (!this.ignoredFields.includes(R(n)) && this.fieldPatternPredicate(R(n))) {
        const i = this.specPath(r), o = this.toRefractedElement(i, r), a = new w.MemberElement(q(n), o);
        this.copyMetaAndAttributes(s, a), a.classes.push("patterned-field"), this.element.content.push(a);
      } else this.ignoredFields.includes(R(n)) || this.element.content.push(q(s));
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, Zt = class extends _C {
  constructor(e) {
    super(e), this.fieldPatternPredicate = yi;
  }
}, TC = class extends M(Zt, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => xt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}, CC = class extends M(Zt, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => xt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
class $C extends M(Zt, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => xt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
class IC extends re {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
let MC = class extends re {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}, FC = class extends M(Xe, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = xt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, kC = class extends M(Xe, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = xt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, NC = class extends M(Xe, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = xt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class DC extends M(Zt, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => xt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let qC = class extends M(Xe, Oe, re) {
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
class LC extends M(hr, re) {
  constructor(e) {
    super(e), this.element = new tn(), this.specPath = G(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = hr.prototype.ObjectElement.call(this, e);
    return K(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
let VC = class extends re {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, BC = class extends Xe {
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
    }) => zf(s, G(i), mi)), n = Jx(r)(e);
    return this.element = this.toRefractedElement(n, e), ee;
  }
}, Ar = class extends BC {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: xt,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "JSONSchema"]
    }];
  }
};
class UC extends M(hr, re) {
  constructor(e) {
    super(e), this.element = new is(), this.specPath = G(["document", "objects", "Media"]);
  }
}
let fO = class extends M(hr, re) {
  constructor(e) {
    super(e), this.element = new os(), this.specPath = G(["document", "objects", "LinkDescription"]);
  }
};
const Ie = {
  visitors: {
    value: re,
    JSONSchemaOrJSONReferenceVisitor: Ar,
    document: {
      objects: {
        JSONSchema: {
          $visitor: uO,
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
            additionalItems: Ar,
            items: lO,
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
            required: RC,
            properties: TC,
            additionalProperties: Ar,
            patternProperties: CC,
            dependencies: $C,
            // validation keywords for any instance type
            enum: IC,
            type: MC,
            allOf: FC,
            anyOf: kC,
            oneOf: NC,
            not: Ar,
            definitions: DC,
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
            links: qC,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: LC,
          fixedFields: {
            $ref: VC
          }
        },
        Media: {
          $visitor: UC,
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
          $visitor: fO,
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
            targetSchema: Ar,
            mediaType: {
              $ref: "#/visitors/value"
            },
            method: {
              $ref: "#/visitors/value"
            },
            encType: {
              $ref: "#/visitors/value"
            },
            schema: Ar
          }
        }
      }
    }
  }
}, JC = () => {
  const t = Dt(vC);
  return {
    predicates: {
      ...PC,
      isStringElement: K
    },
    namespace: t
  };
}, HC = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Ie
} = {}) => {
  const s = w.refract(t), i = Qt(n), o = Re(e, i), a = new o({
    specObj: i
  });
  return Se(s, a), At(a.element, r, {
    toolboxCreator: JC,
    visitorOptions: {
      keyMap: gC,
      nodeTypeGetter: as
    }
  });
}, Fi = (t) => (e, r = {}) => HC(e, {
  specPath: t,
  ...r
});
en.refract = Fi(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
tn.refract = Fi(["visitors", "document", "objects", "JSONReference", "$visitor"]);
is.refract = Fi(["visitors", "document", "objects", "Media", "$visitor"]);
os.refract = Fi(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let ki = class extends en {
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
}, cs = class extends w.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "securityRequirement";
  }
}, us = class extends w.ObjectElement {
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
}, ls = class extends w.ObjectElement {
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
}, fs = class extends w.ObjectElement {
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
}, Ni = class extends w.ObjectElement {
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
}, Di = class extends w.ObjectElement {
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
const GC = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Vn), e.register("components", Bn), e.register("contact", Un), e.register("discriminator", Jn), e.register("encoding", Ci), e.register("example", Hn), e.register("externalDocumentation", Gn), e.register("header", Qr), e.register("info", Kn), e.register("license", zn), e.register("link", Wn), e.register("mediaType", Yn), e.register("oAuthFlow", $i), e.register("oAuthFlows", Ii), e.register("openapi", Xn), e.register("openApi3_0", Mi), e.register("operation", Qn), e.register("parameter", Zr), e.register("pathItem", Zn), e.register("paths", es), e.register("reference", ts), e.register("requestBody", rs), e.register("response", ns), e.register("responses", ss), e.register("schema", ki), e.register("securityRequirement", cs), e.register("securityScheme", us), e.register("server", ls), e.register("serverVariable", fs), e.register("tag", Ni), e.register("xml", Di), e;
  }
};
class qi extends w.ArrayElement {
  static primaryClass = "servers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(qi.primaryClass);
  }
}
class Eh extends w.ArrayElement {
  static primaryClass = "security";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Eh.primaryClass);
  }
}
class Ah extends w.ArrayElement {
  static primaryClass = "tags";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ah.primaryClass);
  }
}
class jh extends w.ObjectElement {
  static primaryClass = "server-variables";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(jh.primaryClass);
  }
}
class Li extends w.ObjectElement {
  static primaryClass = "components-schemas";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Li.primaryClass);
  }
}
class Ph extends w.ObjectElement {
  static primaryClass = "components-responses";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ph.primaryClass);
  }
}
class Rh extends w.ObjectElement {
  static primaryClass = "components-parameters";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Rh.primaryClass), this.classes.push("parameters");
  }
}
class _h extends w.ObjectElement {
  static primaryClass = "components-examples";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(_h.primaryClass), this.classes.push("examples");
  }
}
class Th extends w.ObjectElement {
  static primaryClass = "components-request-bodies";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Th.primaryClass);
  }
}
class Ch extends w.ObjectElement {
  static primaryClass = "components-headers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ch.primaryClass);
  }
}
class $h extends w.ObjectElement {
  static primaryClass = "components-security-schemes";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push($h.primaryClass);
  }
}
class Ih extends w.ObjectElement {
  static primaryClass = "components-links";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ih.primaryClass);
  }
}
class Mh extends w.ObjectElement {
  static primaryClass = "components-callbacks";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Mh.primaryClass);
  }
}
class Fh extends w.ArrayElement {
  static primaryClass = "path-item-servers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Fh.primaryClass), this.classes.push("servers");
  }
}
class kh extends w.ArrayElement {
  static primaryClass = "path-item-parameters";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(kh.primaryClass), this.classes.push("parameters");
  }
}
class Vi extends w.ArrayElement {
  static primaryClass = "operation-parameters";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Vi.primaryClass), this.classes.push("parameters");
  }
}
class Nh extends w.ObjectElement {
  static primaryClass = "parameter-examples";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Nh.primaryClass), this.classes.push("examples");
  }
}
class Dh extends w.ObjectElement {
  static primaryClass = "parameter-content";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Dh.primaryClass), this.classes.push("content");
  }
}
class qh extends w.ArrayElement {
  static primaryClass = "operation-tags";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(qh.primaryClass);
  }
}
class Lh extends w.ObjectElement {
  static primaryClass = "operation-callbacks";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Lh.primaryClass);
  }
}
class Bi extends w.ArrayElement {
  static primaryClass = "operation-security";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Bi.primaryClass), this.classes.push("security");
  }
}
class Vh extends w.ArrayElement {
  static primaryClass = "operation-servers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Vh.primaryClass), this.classes.push("servers");
  }
}
class Bh extends w.ObjectElement {
  static primaryClass = "request-body-content";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Bh.primaryClass), this.classes.push("content");
  }
}
class Uh extends w.ObjectElement {
  static primaryClass = "media-type-examples";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Uh.primaryClass), this.classes.push("examples");
  }
}
class Jh extends w.ObjectElement {
  static primaryClass = "media-type-encoding";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Jh.primaryClass);
  }
}
class Hh extends w.ObjectElement {
  static primaryClass = "encoding-headers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Hh.primaryClass);
  }
}
class Gh extends w.ObjectElement {
  static primaryClass = "response-headers";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Gh.primaryClass);
  }
}
class Kh extends w.ObjectElement {
  static primaryClass = "response-content";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Kh.primaryClass), this.classes.push("content");
  }
}
class zh extends w.ObjectElement {
  static primaryClass = "response-links";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(zh.primaryClass);
  }
}
class Wh extends w.ObjectElement {
  static primaryClass = "discriminator-mapping";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Wh.primaryClass);
  }
}
class Yh extends w.ObjectElement {
  static primaryClass = "oauth-flow-scopes";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Yh.primaryClass);
  }
}
class Xh extends w.ObjectElement {
  static primaryClass = "link-parameters";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Xh.primaryClass);
  }
}
class Qh extends w.ObjectElement {
  static primaryClass = "header-examples";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Qh.primaryClass), this.classes.push("examples");
  }
}
class Zh extends w.ObjectElement {
  static primaryClass = "header-content";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Zh.primaryClass), this.classes.push("content");
  }
}
const KC = (t) => {
  if (ve(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, zC = {
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
  ...Et
};
class hO {
  element;
  constructor(e = {}) {
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = nt(r.meta, e.meta), kn(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = nt(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
class N extends hO {
  enter(e) {
    return this.element = q(e), ee;
  }
}
class vt extends hO {
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
    return Mx(this.passingOptionsNames, this);
  }
  retrieveFixedFields(e) {
    const r = Re(["visitors", ...e, "fixedFields"], this.specObj);
    return typeof r == "object" && r !== null ? Object.keys(r) : [];
  }
  retrieveVisitor(e) {
    return di(vr, ["visitors", ...e], this.specObj) ? Re(["visitors", ...e], this.specObj) : Re(["visitors", ...e, "$visitor"], this.specObj);
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
    return s instanceof N && s?.constructor === N ? q(r) : (Se(r, s, n), s.element);
  }
}
const pe = (t) => te(t) && t.hasKey("$ref"), WC = te, YC = te, pO = (t) => K(t.key) && Bj("x-", R(t.key));
class X extends vt {
  specPath;
  ignoredFields;
  canSupportSpecificationExtensions = !0;
  specificationExtensionPredicate = pO;
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
      if (K(i) && n.includes(R(i)) && !this.ignoredFields.includes(R(i))) {
        const a = this.toRefractedElement([...r, "fixedFields", R(i)], s), c = new w.MemberElement(q(i), a);
        this.copyMetaAndAttributes(o, c), c.classes.push("fixed-field"), this.element.content.push(c);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(o)) {
        const a = this.toRefractedElement(["document", "extension"], o);
        this.element.content.push(a);
      } else this.ignoredFields.includes(R(i)) || this.element.content.push(q(o));
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
class XC extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Mi(), this.specPath = G(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return X.prototype.ObjectElement.call(this, e);
  }
}
class QC extends M(vt, N) {
  StringElement(e) {
    const r = new Xn(R(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, ee;
  }
}
class ZC extends vt {
  MemberElement(e) {
    return this.element = q(e), this.element.classes.push("specification-extension"), ee;
  }
}
let e$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Kn(), this.specPath = G(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
class t$ extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
let r$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Un(), this.specPath = G(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
}, n$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new zn(), this.specPath = G(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
}, s$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Wn(), this.specPath = G(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return (K(this.element.operationId) || K(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
class i$ extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class o$ extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class Ur extends vt {
  specPath;
  ignoredFields;
  fieldPatternPredicate = Df;
  canSupportSpecificationExtensions = !1;
  specificationExtensionPredicate = pO;
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
      } else if (!this.ignoredFields.includes(R(n)) && this.fieldPatternPredicate(R(n))) {
        const i = this.specPath(r), o = this.toRefractedElement(i, r), a = new w.MemberElement(q(n), o);
        this.copyMetaAndAttributes(s, a), a.classes.push("patterned-field"), this.element.content.push(a);
      } else this.ignoredFields.includes(R(n)) || this.element.content.push(q(s));
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
class W extends Ur {
  constructor(e) {
    super(e), this.fieldPatternPredicate = yi;
  }
}
let a$ = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Xh(), this.specPath = G(["value"]);
  }
}, c$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new ls(), this.specPath = G(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
class u$ extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
let ep = class extends M(vt, N) {
  constructor(e) {
    super(e), this.element = new qi();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = WC(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, l$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new fs(), this.specPath = G(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
class f$ extends M(W, N) {
  constructor(e) {
    super(e), this.element = new jh(), this.specPath = G(["document", "objects", "ServerVariable"]);
  }
}
let h$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Yn(), this.specPath = G(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
class St extends vt {
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
    }) => zf(s, G(i), mi)), n = Jx(r)(e);
    return this.element = this.toRefractedElement(n, e), ee;
  }
}
const p$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Vn || t(n) && e("callback", n) && r("object", n)), d$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bn || t(n) && e("components", n) && r("object", n)), m$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Un || t(n) && e("contact", n) && r("object", n)), y$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Hn || t(n) && e("example", n) && r("object", n)), v$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gn || t(n) && e("externalDocumentation", n) && r("object", n)), rn = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qr || t(n) && e("header", n) && r("object", n)), g$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Kn || t(n) && e("info", n) && r("object", n)), b$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zn || t(n) && e("license", n) && r("object", n)), x$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wn || t(n) && e("link", n) && r("object", n)), S$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xn || t(n) && e("openapi", n) && r("string", n)), O$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Mi || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), dO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qn || t(n) && e("operation", n) && r("object", n)), w$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zr || t(n) && e("parameter", n) && r("object", n)), tp = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zn || t(n) && e("pathItem", n) && r("object", n)), E$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof es || t(n) && e("paths", n) && r("object", n)), he = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ts || t(n) && e("reference", n) && r("object", n)), A$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof rs || t(n) && e("requestBody", n) && r("object", n)), Ui = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ns || t(n) && e("response", n) && r("object", n)), j$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ss || t(n) && e("responses", n) && r("object", n)), P$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ki || t(n) && e("schema", n) && r("object", n)), R$ = (t) => Fn(t) && t.classes.includes("boolean-json-schema"), _$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof cs || t(n) && e("securityRequirement", n) && r("object", n)), T$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof us || t(n) && e("securityScheme", n) && r("object", n)), C$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ls || t(n) && e("server", n) && r("object", n)), $$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fs || t(n) && e("serverVariable", n) && r("object", n)), Ji = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Yn || t(n) && e("mediaType", n) && r("object", n)), mO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof qi || t(s) && e("array", s) && r("array", s) && n("servers", s)), I$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Jn || t(n) && e("discriminator", n) && r("object", n)), M$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: R$,
  isCallbackElement: p$,
  isComponentsElement: d$,
  isContactElement: m$,
  isDiscriminatorElement: I$,
  isExampleElement: y$,
  isExternalDocumentationElement: v$,
  isHeaderElement: rn,
  isInfoElement: g$,
  isLicenseElement: b$,
  isLinkElement: x$,
  isMediaTypeElement: Ji,
  isOpenApi3_0Element: O$,
  isOpenapiElement: S$,
  isOperationElement: dO,
  isParameterElement: w$,
  isPathItemElement: tp,
  isPathsElement: E$,
  isReferenceElement: he,
  isRequestBodyElement: A$,
  isResponseElement: Ui,
  isResponsesElement: j$,
  isSchemaElement: P$,
  isSecurityRequirementElement: _$,
  isSecuritySchemeElement: T$,
  isServerElement: C$,
  isServerVariableElement: $$,
  isServersElement: mO
}, Symbol.toStringTag, { value: "Module" }));
let F$ = class extends M(St, N) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: pe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = St.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, rp = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("examples"), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, k$ = class extends rp {
  constructor(e) {
    super(e), this.element = new Uh();
  }
}, N$ = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Jh(), this.specPath = G(["document", "objects", "Encoding"]);
  }
}, D$ = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new cs(), this.specPath = G(["value"]);
  }
}, q$ = class extends M(vt, N) {
  constructor(e) {
    super(e), this.element = new Eh();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (te(r)) {
        const n = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(n);
      } else
        this.element.push(q(r));
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, L$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Bn(), this.specPath = G(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
}, V$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Ni(), this.specPath = G(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
}, B$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new ts(), this.specPath = G(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return K(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}, U$ = class extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, J$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Zr(), this.specPath = G(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return te(this.element.contentProp) && this.element.contentProp.filter(Ji).forEach((n, s) => {
      n.setMetaProperty("media-type", R(s));
    }), r;
  }
}, H$ = class extends M(St, N) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: pe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = St.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, G$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Qr(), this.specPath = G(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
}, K$ = class extends M(St, N) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: pe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = St.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, z$ = class extends rp {
  constructor(e) {
    super(e), this.element = new Qh();
  }
}, Hi = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("content"), this.specPath = G(["document", "objects", "MediaType"]);
  }
}, W$ = class extends Hi {
  constructor(e) {
    super(e), this.element = new Zh();
  }
}, Y$ = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new ki(), this.specPath = G(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Eg = Ie.visitors.document.objects.JSONSchema.fixedFields.allOf;
let X$ = class extends Eg {
  ArrayElement(e) {
    const r = Eg.prototype.ArrayElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const Ag = Ie.visitors.document.objects.JSONSchema.fixedFields.anyOf;
let Q$ = class extends Ag {
  ArrayElement(e) {
    const r = Ag.prototype.ArrayElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const jg = Ie.visitors.document.objects.JSONSchema.fixedFields.oneOf;
let Z$ = class extends jg {
  ArrayElement(e) {
    const r = jg.prototype.ArrayElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const Pg = Ie.visitors.document.objects.JSONSchema.fixedFields.items;
let eI = class extends Pg {
  ObjectElement(e) {
    const r = Pg.prototype.ObjectElement.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
};
const Rg = Ie.visitors.document.objects.JSONSchema.fixedFields.properties;
let tI = class extends Rg {
  ObjectElement(e) {
    const r = Rg.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const rI = Ie.visitors.document.objects.JSONSchema.fixedFields.type;
class nI extends rI {
  ArrayElement(e) {
    return this.enter(e);
  }
}
const _g = Ie.visitors.JSONSchemaOrJSONReferenceVisitor;
class Tg extends _g {
  ObjectElement(e) {
    const r = _g.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
let sI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Jn(), this.specPath = G(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
class iI extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Wh(), this.specPath = G(["value"]);
  }
}
let oI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Di(), this.specPath = G(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
}, aI = class extends rp {
  constructor(e) {
    super(e), this.element = new Nh();
  }
}, cI = class extends Hi {
  constructor(e) {
    super(e), this.element = new Dh();
  }
}, uI = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Li(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
}, lI = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Ph(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Ui).forEach((n, s) => {
      n.setMetaProperty("http-status-code", R(s));
    }), r;
  }
}, fI = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Rh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
}, hI = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new _h(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
class pI extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Th(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
let dI = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Ch(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.filter(rn).forEach((n, s) => {
      n.setMetaProperty("header-name", R(s));
    }), r;
  }
};
class mI extends M(W, N) {
  constructor(e) {
    super(e), this.element = new $h(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
let yI = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Ih(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}, vI = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Mh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}, gI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Hn(), this.specPath = G(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return K(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
class bI extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let xI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Gn(), this.specPath = G(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
}, SI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Ci(), this.specPath = G(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return te(this.element.headers) && this.element.headers.filter(rn).forEach((n, s) => {
      n.setMetaProperty("header-name", R(s));
    }), r;
  }
}, OI = class extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Hh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!rn(n)) return;
      const i = R(s);
      n.setMetaProperty("headerName", i);
    }), r;
  }
}, wI = class extends M(Ur, N) {
  constructor(e) {
    super(e), this.element = new es(), this.specPath = G(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = Ft;
  }
  ObjectElement(e) {
    const r = Ur.prototype.ObjectElement.call(this, e);
    return this.element.filter(tp).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", q(s));
    }), r;
  }
}, EI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new rs(), this.specPath = G(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return te(this.element.contentProp) && this.element.contentProp.filter(Ji).forEach((n, s) => {
      n.setMetaProperty("media-type", R(s));
    }), r;
  }
}, AI = class extends Hi {
  constructor(e) {
    super(e), this.element = new Bh();
  }
}, jI = class extends M(Ur, N) {
  constructor(e) {
    super(e), this.element = new Vn(), this.specPath = G(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(tp).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", R(s));
    }), r;
  }
}, PI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new ns(), this.specPath = G(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return te(this.element.contentProp) && this.element.contentProp.filter(Ji).forEach((n, s) => {
      n.setMetaProperty("media-type", R(s));
    }), te(this.element.headers) && this.element.headers.filter(rn).forEach((n, s) => {
      n.setMetaProperty("header-name", R(s));
    }), r;
  }
};
class RI extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Gh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!rn(n)) return;
      const i = R(s);
      n.setMetaProperty("header-name", i);
    }), r;
  }
}
class _I extends Hi {
  constructor(e) {
    super(e), this.element = new Kh();
  }
}
class TI extends M(W, N) {
  constructor(e) {
    super(e), this.element = new zh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
class Cg extends M(X, Ur) {
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
      this.ignoredFields = [...n, ...uj(e.keys(), s)], X.prototype.ObjectElement.call(this, e), this.specPath = this.specPathPatternedFields, this.ignoredFields = s, Ur.prototype.ObjectElement.call(this, e);
    } catch (s) {
      throw this.specPath = r, s;
    }
    return ee;
  }
}
let CI = class extends M(Cg, N) {
  constructor(e) {
    super(e), this.element = new ss(), this.specPathFixedFields = G(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${qj(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = Cg.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Ui).forEach((n, s) => {
      const i = q(s);
      this.fieldPatternPredicate(R(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
class $I extends M(St, N) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: pe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "Response"]
    }];
  }
  ObjectElement(e) {
    const r = St.prototype.enter.call(this, e);
    return he(this.element) ? this.element.setMetaProperty("referenced-element", "response") : Ui(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
let II = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Qn(), this.specPath = G(["document", "objects", "Operation"]);
  }
}, MI = class extends N {
  constructor(e) {
    super(e), this.element = new qh();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(q(e)), ee;
  }
}, yO = class extends M(vt, N) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      he(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, FI = class extends yO {
  constructor(e) {
    super(e), this.element = new Vi();
  }
}, kI = class extends St {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: pe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "RequestBody"]
    }];
  }
  ObjectElement(e) {
    const r = St.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
class NI extends M(W, N) {
  specPath;
  constructor(e) {
    super(e), this.element = new Lh(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}
class DI extends M(vt, N) {
  constructor(e) {
    super(e), this.element = new Bi();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = te(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
let qI = class extends ep {
  constructor(e) {
    super(e), this.element = new Vh();
  }
}, LI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Zn(), this.specPath = G(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(dO).forEach((n, s) => {
      const i = q(s);
      i.content = R(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), K(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
class VI extends N {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class BI extends ep {
  constructor(e) {
    super(e), this.element = new Fh();
  }
}
class UI extends yO {
  constructor(e) {
    super(e), this.element = new kh();
  }
}
let JI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new us(), this.specPath = G(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
}, HI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new Ii(), this.specPath = G(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
}, GI = class extends M(X, N) {
  constructor(e) {
    super(e), this.element = new $i(), this.specPath = G(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
class KI extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Yh(), this.specPath = G(["value"]);
  }
}
class zI extends M(vt, N) {
  constructor(e) {
    super(e), this.element = new Ah();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = YC(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
const {
  fixedFields: we
} = Ie.visitors.document.objects.JSONSchema, j = {
  visitors: {
    value: N,
    document: {
      objects: {
        OpenApi: {
          $visitor: XC,
          fixedFields: {
            openapi: QC,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: ep,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: q$,
            tags: zI,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: e$,
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
            version: t$
          }
        },
        Contact: {
          $visitor: r$,
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
          $visitor: n$,
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
          $visitor: c$,
          fixedFields: {
            url: u$,
            description: {
              $ref: "#/visitors/value"
            },
            variables: f$
          }
        },
        ServerVariable: {
          $visitor: l$,
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
          $visitor: L$,
          fixedFields: {
            schemas: uI,
            responses: lI,
            parameters: fI,
            examples: hI,
            requestBodies: pI,
            headers: dI,
            securitySchemes: mI,
            links: yI,
            callbacks: vI
          }
        },
        Paths: {
          $visitor: wI
        },
        PathItem: {
          $visitor: LI,
          fixedFields: {
            $ref: VI,
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
            servers: BI,
            parameters: UI
          }
        },
        Operation: {
          $visitor: II,
          fixedFields: {
            tags: MI,
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
            parameters: FI,
            requestBody: kI,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: NI,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: DI,
            servers: qI
          }
        },
        ExternalDocumentation: {
          $visitor: xI,
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
          $visitor: J$,
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
            schema: H$,
            example: {
              $ref: "#/visitors/value"
            },
            examples: aI,
            content: cI
          }
        },
        RequestBody: {
          $visitor: EI,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: AI,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: h$,
          fixedFields: {
            schema: F$,
            example: {
              $ref: "#/visitors/value"
            },
            examples: k$,
            encoding: N$
          }
        },
        Encoding: {
          $visitor: SI,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: OI,
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
          $visitor: CI,
          fixedFields: {
            default: $I
          }
        },
        Response: {
          $visitor: PI,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: RI,
            content: _I,
            links: TI
          }
        },
        Callback: {
          $visitor: jI
        },
        Example: {
          $visitor: gI,
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
            externalValue: bI
          }
        },
        Link: {
          $visitor: s$,
          fixedFields: {
            operationRef: i$,
            operationId: o$,
            parameters: a$,
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
          $visitor: G$,
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
            schema: K$,
            example: {
              $ref: "#/visitors/value"
            },
            examples: z$,
            content: W$
          }
        },
        Tag: {
          $visitor: V$,
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
          $visitor: B$,
          fixedFields: {
            $ref: U$
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: Y$,
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
            type: nI,
            allOf: X$,
            anyOf: Q$,
            oneOf: Z$,
            not: Tg,
            items: eI,
            properties: tI,
            additionalProperties: Tg,
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
          $visitor: sI,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: iI
          }
        },
        XML: {
          $visitor: oI,
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
          $visitor: JI,
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
          $visitor: HI,
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
          $visitor: GI,
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
            scopes: KI
          }
        },
        SecurityRequirement: {
          $visitor: D$
        }
      },
      extension: {
        $visitor: ZC
      }
    }
  }
}, WI = () => {
  const t = Dt(GC);
  return {
    predicates: {
      ...M$,
      isElement: ve,
      isStringElement: K,
      isArrayElement: ke,
      isObjectElement: te,
      isMemberElement: yt,
      includesClasses: Lr,
      hasElementSourceMap: kn
    },
    namespace: t
  };
}, YI = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = w.refract(t), s = Qt(j), i = Re(e, s), o = new i({
    specObj: s
  });
  return Se(n, o), At(o.element, r, {
    toolboxCreator: WI,
    visitorOptions: {
      keyMap: zC,
      nodeTypeGetter: KC
    }
  });
}, ce = (t) => (e, r = {}) => YI(e, {
  specPath: t,
  ...r
});
Vn.refract = ce(["visitors", "document", "objects", "Callback", "$visitor"]);
Bn.refract = ce(["visitors", "document", "objects", "Components", "$visitor"]);
Un.refract = ce(["visitors", "document", "objects", "Contact", "$visitor"]);
Hn.refract = ce(["visitors", "document", "objects", "Example", "$visitor"]);
Jn.refract = ce(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Ci.refract = ce(["visitors", "document", "objects", "Encoding", "$visitor"]);
Gn.refract = ce(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Qr.refract = ce(["visitors", "document", "objects", "Header", "$visitor"]);
Kn.refract = ce(["visitors", "document", "objects", "Info", "$visitor"]);
zn.refract = ce(["visitors", "document", "objects", "License", "$visitor"]);
Wn.refract = ce(["visitors", "document", "objects", "Link", "$visitor"]);
Yn.refract = ce(["visitors", "document", "objects", "MediaType", "$visitor"]);
$i.refract = ce(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Ii.refract = ce(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Xn.refract = ce(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
Mi.refract = ce(["visitors", "document", "objects", "OpenApi", "$visitor"]);
Qn.refract = ce(["visitors", "document", "objects", "Operation", "$visitor"]);
Zr.refract = ce(["visitors", "document", "objects", "Parameter", "$visitor"]);
Zn.refract = ce(["visitors", "document", "objects", "PathItem", "$visitor"]);
es.refract = ce(["visitors", "document", "objects", "Paths", "$visitor"]);
ts.refract = ce(["visitors", "document", "objects", "Reference", "$visitor"]);
rs.refract = ce(["visitors", "document", "objects", "RequestBody", "$visitor"]);
ns.refract = ce(["visitors", "document", "objects", "Response", "$visitor"]);
ss.refract = ce(["visitors", "document", "objects", "Responses", "$visitor"]);
ki.refract = ce(["visitors", "document", "objects", "Schema", "$visitor"]);
cs.refract = ce(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
us.refract = ce(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
ls.refract = ce(["visitors", "document", "objects", "Server", "$visitor"]);
fs.refract = ce(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Ni.refract = ce(["visitors", "document", "objects", "Tag", "$visitor"]);
Di.refract = ce(["visitors", "document", "objects", "XML", "$visitor"]);
class Gi extends Vn {
}
class Ki extends Bn {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class zi extends Un {
}
class np extends Jn {
}
class sp extends Ci {
}
class Wi extends Hn {
}
class Yi extends Gn {
}
class Xi extends Qr {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Qi extends Kn {
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
class Sr extends w.StringElement {
  static default = new Sr("https://spec.openapis.org/oas/3.1/dialect/base");
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
}
class Zi extends zn {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class eo extends Wn {
}
class to extends Yn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class ip extends $i {
}
class op extends Ii {
}
class ap extends Xn {
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
class hs extends Qn {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(e) {
    this.set("requestBody", e);
  }
}
class ro extends Zr {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Gt extends Zn {
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
class no extends es {
}
class tr extends ts {
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
class so extends rs {
}
let io = class extends ns {
};
class oo extends ss {
}
let ps = class extends en {
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
}, ds = class extends os {
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
const XI = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft6", ps), e.register("jSONReference", tn), e.register("media", is), e.register("linkDescription", ds), e;
  }
}, QI = {
  JSONSchemaDraft6Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Et
};
let vO = class extends uO {
  constructor(e) {
    super(e), this.element = new ps();
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
}, ZI = class extends lO {
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), ee;
  }
};
class eM extends re {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
let gO = class extends fO {
  constructor(e) {
    super(e), this.element = new ds();
  }
};
const Ce = Ne(
  // JSON Schema object modifications
  F(["visitors", "document", "objects", "JSONSchema", "$visitor"], vO),
  Ge(["visitors", "document", "objects", "JSONSchema", "fixedFields", "id"]),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$id"], Ie.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Ie.visitors.JSONSchemaOrJSONReferenceVisitor),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], ZI),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Ie.visitors.JSONSchemaOrJSONReferenceVisitor),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "const"], Ie.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "examples"], eM),
  // Link Description object modifications
  F(["visitors", "document", "objects", "LinkDescription", "$visitor"], gO),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Ie.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ge(["visitors", "document", "objects", "LinkDescription", "fixedFields", "schema"]),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Ie.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ge(["visitors", "document", "objects", "LinkDescription", "fixedFields", "method"]),
  Ge(["visitors", "document", "objects", "LinkDescription", "fixedFields", "encType"]),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"], Ie.visitors.value)
)(Ie), tM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ps || t(n) && e("JSONSchemaDraft6", n) && r("object", n)), rM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ds || t(n) && e("linkDescription", n) && r("object", n)), nM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: wh,
  isJSONSchemaElement: tM,
  isLinkDescriptionElement: rM,
  isMediaElement: cO
}, Symbol.toStringTag, { value: "Module" })), sM = () => {
  const t = Dt(XI);
  return {
    predicates: {
      ...nM,
      isStringElement: K
    },
    namespace: t
  };
}, iM = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Ce
} = {}) => {
  const s = w.refract(t), i = Qt(n), o = Re(e, i), a = new o({
    specObj: i
  });
  return Se(s, a), At(a.element, r, {
    toolboxCreator: sM,
    visitorOptions: {
      keyMap: QI,
      nodeTypeGetter: as
    }
  });
}, bO = (t) => (e, r = {}) => iM(e, {
  specPath: t,
  ...r
});
ps.refract = bO(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
ds.refract = bO(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let ms = class extends ps {
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
}, ys = class extends ds {
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
const oM = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft7", ms), e.register("jSONReference", tn), e.register("linkDescription", ys), e;
  }
}, aM = {
  JSONSchemaDraft7Element: ["content"],
  JSONReferenceElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Et
};
let xO = class extends vO {
  constructor(e) {
    super(e), this.element = new ms();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-07/schema#";
  }
}, SO = class extends gO {
  constructor(e) {
    super(e), this.element = new ys();
  }
};
const Vt = Ne(
  // JSON Schema object modifications
  F(["visitors", "document", "objects", "JSONSchema", "$visitor"], xO),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$comment"], Ce.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Ce.visitors.JSONSchemaOrJSONReferenceVisitor),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Ce.visitors.JSONSchemaOrJSONReferenceVisitor),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Ce.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ge(["visitors", "document", "objects", "JSONSchema", "fixedFields", "media"]),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentEncoding"], Ce.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentMediaType"], Ce.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "writeOnly"], Ce.visitors.value),
  // Link Description object modifications
  F(["visitors", "document", "objects", "LinkDescription", "$visitor"], SO),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchor"], Ce.visitors.value),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchorPointer"], Ce.visitors.value),
  Ge(["visitors", "document", "objects", "LinkDescription", "fixedFields", "mediaType"]),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetMediaType"], Ce.visitors.value),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetHints"], Ce.visitors.value),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "description"], Ce.visitors.value),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "$comment"], Ce.visitors.value),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Ce.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ge(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"]),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionMediaType"], Ce.visitors.value)
)(Ce), cM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ms || t(n) && e("JSONSchemaDraft7", n) && r("object", n)), uM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ys || t(n) && e("linkDescription", n) && r("object", n)), lM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: wh,
  isJSONSchemaElement: cM,
  isLinkDescriptionElement: uM
}, Symbol.toStringTag, { value: "Module" })), fM = () => {
  const t = Dt(oM);
  return {
    predicates: {
      ...lM,
      isStringElement: K
    },
    namespace: t
  };
}, hM = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Vt
} = {}) => {
  const s = w.refract(t), i = Qt(n), o = Re(e, i), a = new o({
    specObj: i
  });
  return Se(s, a), At(a.element, r, {
    toolboxCreator: fM,
    visitorOptions: {
      keyMap: aM,
      nodeTypeGetter: as
    }
  });
}, OO = (t) => (e, r = {}) => hM(e, {
  specPath: t,
  ...r
});
ms.refract = OO(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
ys.refract = OO(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let vs = class extends ms {
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
}, gs = class extends ys {
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
const pM = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema201909", vs), e.register("linkDescription", gs), e;
  }
}, dM = {
  JSONSchema201909Element: ["content"],
  LinkDescriptionElement: ["content"],
  ...Et
};
let $e = class extends xO {
  constructor(e) {
    super(e), this.element = new vs();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2019-09/schema";
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = hr.prototype.ObjectElement.call(this, e);
    return K(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
};
class mM extends re {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
class yM extends re {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let wO = class extends M(Zt, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-$defs"), this.specPath = G(["document", "objects", "JSONSchema"]);
  }
}, EO = class extends M(Xe, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, AO = class extends M(Xe, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, jO = class extends M(Xe, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, PO = class extends M(Zt, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = G(["document", "objects", "JSONSchema"]);
  }
};
class vM extends M(Xe, Oe, re) {
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
let RO = class extends M(Zt, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = G(["document", "objects", "JSONSchema"]);
  }
}, _O = class extends M(Zt, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = G(["document", "objects", "JSONSchema"]);
  }
};
class gM extends re {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
let TO = class extends SO {
  constructor(e) {
    super(e), this.element = new gs();
  }
};
const _s = Ne(
  // JSON Schema object modifications
  F(["visitors", "document", "objects", "JSONSchema", "$visitor"], $e),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$vocabulary"], mM),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$anchor"], Vt.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"], Vt.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"], Vt.visitors.value),
  Ge(["visitors", "document", "objects", "JSONReference", "$visitor"]),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$ref"], yM),
  Ge(["visitors", "document", "objects", "JSONSchema", "fixedFields", "definitions"]),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$defs"], wO),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "allOf"], EO),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "anyOf"], AO),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "oneOf"], jO),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], $e),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], $e),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], $e),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], $e),
  Ge(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependencies"]),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentSchemas"], PO),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], vM),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], $e),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "properties"], RO),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "patternProperties"], _O),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], $e),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"], $e),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], $e),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], $e),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], $e),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "maxContains"], Vt.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "minContains"], Vt.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentRequired"], gM),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "deprecated"], Vt.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], $e),
  // Link Description object modifications
  F(["visitors", "document", "objects", "LinkDescription", "$visitor"], TO),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], $e),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], $e),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], $e),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], $e)
)(Vt), bM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vs || t(n) && e("JSONSchema201909", n) && r("object", n)), xM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gs || t(n) && e("linkDescription", n) && r("object", n)), SM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: bM,
  isLinkDescriptionElement: xM
}, Symbol.toStringTag, { value: "Module" })), OM = () => {
  const t = Dt(pM);
  return {
    predicates: {
      ...SM,
      isStringElement: K
    },
    namespace: t
  };
}, wM = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = _s
} = {}) => {
  const s = w.refract(t), i = Qt(n), o = Re(e, i), a = new o({
    specObj: i
  });
  return Se(s, a), At(a.element, r, {
    toolboxCreator: OM,
    visitorOptions: {
      keyMap: dM,
      nodeTypeGetter: as
    }
  });
}, CO = (t) => (e, r = {}) => wM(e, {
  specPath: t,
  ...r
});
vs.refract = CO(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
gs.refract = CO(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class bs extends vs {
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
class ao extends gs {
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
const EM = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema202012", bs), e.register("linkDescription", ao), e;
  }
}, AM = {
  JSONSchema202012Element: ["content"],
  LinkDescriptionElement: ["content"],
  ...Et
};
let Ee = class extends $e {
  constructor(e) {
    super(e), this.element = new bs();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2020-12/schema";
  }
}, $O = class extends M(Xe, Oe, re) {
  constructor(e) {
    super(e), this.element = new w.ArrayElement(), this.element.classes.push("json-schema-prefixItems");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, jM = class extends TO {
  constructor(e) {
    super(e), this.element = new ao();
  }
};
const IO = Ne(
  // JSON Schema object modifications
  F(["visitors", "document", "objects", "JSONSchema", "$visitor"], Ee),
  Ge(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"]),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicAnchor"], _s.visitors.value),
  Ge(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"]),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicRef"], _s.visitors.value),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], Ee),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Ee),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Ee),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Ee),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "prefixItems"], $O),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], Ee),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Ee),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], Ee),
  Ge(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"]),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Ee),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], Ee),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], Ee),
  F(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], Ee),
  // Link Description object modifications
  F(["visitors", "document", "objects", "LinkDescription", "$visitor"], jM),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], Ee),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Ee),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Ee),
  F(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Ee)
)(_s), PM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof bs || t(n) && e("JSONSchema202012", n) && r("object", n)), RM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ao || t(n) && e("linkDescription", n) && r("object", n)), _M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: PM,
  isLinkDescriptionElement: RM
}, Symbol.toStringTag, { value: "Module" })), TM = () => {
  const t = Dt(EM);
  return {
    predicates: {
      ..._M,
      isStringElement: K
    },
    namespace: t
  };
}, CM = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = IO
} = {}) => {
  const s = w.refract(t), i = Qt(n), o = Re(e, i), a = new o({
    specObj: i
  });
  return Se(s, a), At(a.element, r, {
    toolboxCreator: TM,
    visitorOptions: {
      keyMap: AM,
      nodeTypeGetter: as
    }
  });
}, MO = (t) => (e, r = {}) => CM(e, {
  specPath: t,
  ...r
});
bs.refract = MO(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
ao.refract = MO(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class Kt extends bs {
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
class co extends cs {
}
class uo extends us {
}
class lo extends ls {
}
class fo extends fs {
}
class cp extends Ni {
}
class up extends Di {
}
const lp = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Gi), e.register("components", Ki), e.register("contact", zi), e.register("discriminator", np), e.register("encoding", sp), e.register("example", Wi), e.register("externalDocumentation", Yi), e.register("header", Xi), e.register("info", Qi), e.register("jsonSchemaDialect", Sr), e.register("license", Zi), e.register("link", eo), e.register("mediaType", to), e.register("oAuthFlow", ip), e.register("oAuthFlows", op), e.register("openapi", ap), e.register("openApi3_1", er), e.register("operation", hs), e.register("parameter", ro), e.register("pathItem", Gt), e.register("paths", no), e.register("reference", tr), e.register("requestBody", so), e.register("response", io), e.register("responses", oo), e.register("schema", Kt), e.register("securityRequirement", co), e.register("securityScheme", uo), e.register("server", lo), e.register("serverVariable", fo), e.register("tag", cp), e.register("xml", up), e;
  }
};
class fp extends w.ObjectElement {
  static primaryClass = "components-path-items";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(fp.primaryClass);
  }
}
class hp extends w.ObjectElement {
  static primaryClass = "webhooks";
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(hp.primaryClass);
  }
}
const rt = (t) => {
  if (ve(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, ut = {
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
  ...Et
};
class xs {
  internalStore;
  constructor(e, r, n) {
    this.storageElement = e, this.storageField = r, this.storageSubField = n;
  }
  get store() {
    if (!this.internalStore) {
      let e = this.storageElement.get(this.storageField);
      te(e) || (e = new w.ObjectElement(), this.storageElement.set(this.storageField, e));
      let r = e.get(this.storageSubField);
      ke(r) || (r = new w.ArrayElement(), e.set(this.storageSubField, r)), this.internalStore = r;
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
const $M = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: n
  } = e, s = (a, c) => !r.isParameterElement(a) || !r.isParameterElement(c) || !r.isStringElement(a.name) || !r.isStringElement(a.in) || !r.isStringElement(c.name) || !r.isStringElement(c.in) ? !1 : R(a.name) === R(c.name) && R(a.in) === R(c.in), i = [];
  let o;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(a) {
          o = new xs(a, t, "parameters");
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
          const d = hi(i);
          if (!Array.isArray(d) || d.length === 0)
            return;
          const h = n([...l, u, a]);
          if (o.includes(h))
            return;
          const m = Ix([], ["parameters", "content"], a), p = Dx(s, [...m, ...d]);
          a.parameters = new Vi(p), o.append(h);
        }
      }
    }
  };
}, IM = ({
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
          i = new xs(o, t, "security-requirements"), r.isArrayElement(o.security) && (s = o.security);
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
            o.security = new Bi((m = s) === null || m === void 0 ? void 0 : m.content), i.append(l);
          }
        }
      }
    }
  };
}, sf = (t) => t.replace(/\s/g, ""), of = (t) => t.replace(/\W/gi, "_"), MM = (t, e) => {
  const r = of(sf(e.toLowerCase())), n = of(sf(t));
  return `${r}${n}`;
}, FM = (t, e, r) => {
  const n = sf(t);
  return n.length > 0 ? of(n) : MM(e, r);
}, kM = ({
  storageField: t = "x-normalized",
  operationIdNormalizer: e = FM
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
          u = new xs(f, t, "operation-ids");
        },
        leave() {
          const f = Rj((l) => R(l.operationId), a);
          Object.entries(f).forEach(([l, d]) => {
            Array.isArray(d) && (d.length <= 1 || d.forEach((h, m) => {
              const p = `${l}${m + 1}`;
              h.operationId = new i.elements.String(p);
            }));
          }), c.forEach((l) => {
            if (typeof l.operationId > "u") return;
            const d = String(R(l.operationId)), h = a.find((m) => R(m.meta.get("originalOperationId")) === d);
            typeof h > "u" || (l.operationId = q.safe(h.operationId), l.meta.set("originalOperationId", d), l.set("__originalOperationId", d));
          }), a.length = 0, c.length = 0, u = void 0;
        }
      },
      PathItemElement: {
        enter(f) {
          const l = Dr("path", R(f.meta.get("path")));
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
          const v = String(R(f.operationId)), g = hi(o), y = Dr("method", R(f.meta.get("http-method"))), x = e(v, g, y);
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
}, NM = ({
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
          s = new xs(i, t, "parameter-examples");
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
              const h = i.examples.map((m) => q.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", h), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", h[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [q(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", q(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, DM = ({
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
          s = new xs(i, t, "header-examples");
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
              const h = i.examples.map((m) => q.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", h), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", h[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [q(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", q(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, qM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gi || t(n) && e("callback", n) && r("object", n)), LM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ki || t(n) && e("components", n) && r("object", n)), VM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zi || t(n) && e("contact", n) && r("object", n)), BM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wi || t(n) && e("example", n) && r("object", n)), UM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Yi || t(n) && e("externalDocumentation", n) && r("object", n)), JM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xi || t(n) && e("header", n) && r("object", n)), HM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qi || t(n) && e("info", n) && r("object", n)), FO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Sr || t(n) && e("jsonSchemaDialect", n) && r("string", n)), GM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zi || t(n) && e("license", n) && r("object", n)), KM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof eo || t(n) && e("link", n) && r("object", n)), zM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ap || t(n) && e("openapi", n) && r("string", n)), kO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof er || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), NO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hs || t(n) && e("operation", n) && r("object", n)), WM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ro || t(n) && e("parameter", n) && r("object", n)), pr = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gt || t(n) && e("pathItem", n) && r("object", n)), YM = (t) => {
  if (!pr(t) || !K(t.$ref))
    return !1;
  const e = R(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, XM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof no || t(n) && e("paths", n) && r("object", n)), Or = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof tr || t(n) && e("reference", n) && r("object", n)), QM = (t) => {
  if (!Or(t) || !K(t.$ref))
    return !1;
  const e = R(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, ZM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof so || t(n) && e("requestBody", n) && r("object", n)), eF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof io || t(n) && e("response", n) && r("object", n)), tF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof oo || t(n) && e("responses", n) && r("object", n)), lt = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Kt || t(n) && e("schema", n) && r("object", n)), pp = (t) => Fn(t) && t.classes.includes("boolean-json-schema"), rF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof co || t(n) && e("securityRequirement", n) && r("object", n)), nF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof uo || t(n) && e("securityScheme", n) && r("object", n)), sF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof lo || t(n) && e("server", n) && r("object", n)), iF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fo || t(n) && e("serverVariable", n) && r("object", n)), oF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof to || t(n) && e("mediaType", n) && r("object", n)), aF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: pp,
  isCallbackElement: qM,
  isComponentsElement: LM,
  isContactElement: VM,
  isExampleElement: BM,
  isExternalDocumentationElement: UM,
  isHeaderElement: JM,
  isInfoElement: HM,
  isJsonSchemaDialectElement: FO,
  isLicenseElement: GM,
  isLinkElement: KM,
  isMediaTypeElement: oF,
  isOpenApi3_1Element: kO,
  isOpenapiElement: zM,
  isOperationElement: NO,
  isParameterElement: WM,
  isPathItemElement: pr,
  isPathItemElementExternal: YM,
  isPathsElement: XM,
  isReferenceElement: Or,
  isReferenceElementExternal: QM,
  isRequestBodyElement: ZM,
  isResponseElement: eF,
  isResponsesElement: tF,
  isSchemaElement: lt,
  isSecurityRequirementElement: rF,
  isSecuritySchemeElement: nF,
  isServerElement: sF,
  isServerVariableElement: iF
}, Symbol.toStringTag, { value: "Module" })), cF = (t) => {
  const e = t.reduce((r, n, s) => {
    if (yt(n)) {
      const i = String(R(n.key));
      r.push(i);
    } else if (ke(t[s - 2])) {
      const i = String(t[s - 2].content.indexOf(n));
      r.push(i);
    }
    return r;
  }, []);
  return tO(e);
}, DO = () => {
  const t = Dt(lp);
  return {
    predicates: {
      ...aF,
      isElement: ve,
      isStringElement: K,
      isArrayElement: ke,
      isObjectElement: te,
      isMemberElement: yt,
      isServersElement: mO,
      includesClasses: Lr,
      hasElementSourceMap: kn
    },
    ancestorLineageToJSONPointer: cF,
    namespace: t
  };
};
class uF extends M(X, N) {
  constructor(e) {
    super(e), this.element = new er(), this.specPath = G(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, X.prototype.ObjectElement.call(this, e);
  }
}
const lF = j.visitors.document.objects.Info.$visitor;
class fF extends lF {
  constructor(e) {
    super(e), this.element = new Qi();
  }
}
const hF = j.visitors.document.objects.Contact.$visitor;
class pF extends hF {
  constructor(e) {
    super(e), this.element = new zi();
  }
}
const dF = j.visitors.document.objects.License.$visitor;
class mF extends dF {
  constructor(e) {
    super(e), this.element = new Zi();
  }
}
const yF = j.visitors.document.objects.Link.$visitor;
class vF extends yF {
  constructor(e) {
    super(e), this.element = new eo();
  }
}
class gF extends M(vt, N) {
  StringElement(e) {
    const r = new Sr(R(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, ee;
  }
}
const bF = j.visitors.document.objects.Server.$visitor;
class xF extends bF {
  constructor(e) {
    super(e), this.element = new lo();
  }
}
const SF = j.visitors.document.objects.ServerVariable.$visitor;
class OF extends SF {
  constructor(e) {
    super(e), this.element = new fo();
  }
}
const wF = j.visitors.document.objects.MediaType.$visitor;
class EF extends wF {
  constructor(e) {
    super(e), this.element = new to();
  }
}
const AF = j.visitors.document.objects.SecurityRequirement.$visitor;
class jF extends AF {
  constructor(e) {
    super(e), this.element = new co();
  }
}
const PF = j.visitors.document.objects.Components.$visitor;
class RF extends PF {
  constructor(e) {
    super(e), this.element = new Ki();
  }
}
const _F = j.visitors.document.objects.Tag.$visitor;
class TF extends _F {
  constructor(e) {
    super(e), this.element = new cp();
  }
}
const CF = j.visitors.document.objects.Reference.$visitor;
class $F extends CF {
  constructor(e) {
    super(e), this.element = new tr();
  }
}
const IF = j.visitors.document.objects.Parameter.$visitor;
class MF extends IF {
  constructor(e) {
    super(e), this.element = new ro();
  }
}
const FF = j.visitors.document.objects.Header.$visitor;
class kF extends FF {
  constructor(e) {
    super(e), this.element = new Xi();
  }
}
class NF extends M(X, Oe, N) {
  constructor(e) {
    super(e), this.element = new Kt(), this.specPath = G(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = Sr.default, this.passingOptionsNames.push("parent");
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = X.prototype.ObjectElement.call(this, e);
    return K(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
  BooleanElement(e) {
    return Ee.prototype.BooleanElement.call(this, e);
  }
  /**
   * This function depends on some external context, so we need to make sure this function
   * works even when no context is provided like when directly refracting generic Object Element
   * into Schema Element: `SchemaElement.refract(new ObjectElement({ type: 'object' });`
   */
  get defaultDialectIdentifier() {
    let e;
    return this.openApiSemanticElement !== void 0 && // @ts-ignore
    FO(this.openApiSemanticElement.jsonSchemaDialect) ? e = R(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && K(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = R(this.openApiGenericElement.get("jsonSchemaDialect")) : e = R(this.jsonSchemaDefaultDialect), e;
  }
  handleDialectIdentifier(e) {
    return Ee.prototype.handleDialectIdentifier.call(this, e);
  }
  handleSchemaIdentifier(e) {
    return Ee.prototype.handleSchemaIdentifier.call(this, e);
  }
}
class DF extends wO {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
let qF = class extends EO {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
};
class LF extends AO {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class VF extends jO {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class BF extends PO {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class UF extends $O {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class JF extends RO {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class HF extends _O {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
const GF = j.visitors.document.objects.Discriminator.$visitor;
class KF extends GF {
  constructor(e) {
    super(e), this.element = new np(), this.canSupportSpecificationExtensions = !0;
  }
}
const zF = j.visitors.document.objects.XML.$visitor;
class WF extends zF {
  constructor(e) {
    super(e), this.element = new up();
  }
}
class YF extends M(W, N) {
  constructor(e) {
    super(e), this.element = new Li(), this.specPath = G(["document", "objects", "Schema"]);
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(lt).forEach((n, s) => {
      n.setMetaProperty("schemaName", R(s));
    }), r;
  }
}
class XF extends M(W, N) {
  constructor(e) {
    super(e), this.element = new fp(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(Or).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const QF = j.visitors.document.objects.Example.$visitor;
class ZF extends QF {
  constructor(e) {
    super(e), this.element = new Wi();
  }
}
const ek = j.visitors.document.objects.ExternalDocumentation.$visitor;
class tk extends ek {
  constructor(e) {
    super(e), this.element = new Yi();
  }
}
const rk = j.visitors.document.objects.Encoding.$visitor;
class nk extends rk {
  constructor(e) {
    super(e), this.element = new sp();
  }
}
const sk = j.visitors.document.objects.Paths.$visitor;
class ik extends sk {
  constructor(e) {
    super(e), this.element = new no();
  }
}
const ok = j.visitors.document.objects.RequestBody.$visitor;
class ak extends ok {
  constructor(e) {
    super(e), this.element = new so();
  }
}
const $g = j.visitors.document.objects.Callback.$visitor;
class ck extends $g {
  constructor(e) {
    super(e), this.element = new Gi(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = $g.prototype.ObjectElement.call(this, e);
    return this.element.filter(Or).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const uk = j.visitors.document.objects.Response.$visitor;
class lk extends uk {
  constructor(e) {
    super(e), this.element = new io();
  }
}
const fk = j.visitors.document.objects.Responses.$visitor;
class hk extends fk {
  constructor(e) {
    super(e), this.element = new oo();
  }
}
const pk = j.visitors.document.objects.Operation.$visitor;
class dk extends pk {
  constructor(e) {
    super(e), this.element = new hs();
  }
}
const mk = j.visitors.document.objects.PathItem.$visitor;
class yk extends mk {
  constructor(e) {
    super(e), this.element = new Gt();
  }
}
const vk = j.visitors.document.objects.SecurityScheme.$visitor;
class gk extends vk {
  constructor(e) {
    super(e), this.element = new uo();
  }
}
const bk = j.visitors.document.objects.OAuthFlows.$visitor;
class xk extends bk {
  constructor(e) {
    super(e), this.element = new op();
  }
}
const Sk = j.visitors.document.objects.OAuthFlow.$visitor;
class Ok extends Sk {
  constructor(e) {
    super(e), this.element = new ip();
  }
}
class wk extends M(W, N) {
  constructor(e) {
    super(e), this.element = new hp(), this.specPath = (r) => pe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = W.prototype.ObjectElement.call(this, e);
    return this.element.filter(Or).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter(pr).forEach((n, s) => {
      n.setMetaProperty("webhook-name", R(s));
    }), r;
  }
}
const {
  JSONSchema: Ek,
  LinkDescription: Ak
} = IO.visitors.document.objects, jk = {
  visitors: {
    value: j.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: uF,
          fixedFields: {
            openapi: j.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: gF,
            servers: j.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: wk,
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
          $visitor: fF,
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
          $visitor: pF,
          fixedFields: {
            name: j.visitors.document.objects.Contact.fixedFields.name,
            url: j.visitors.document.objects.Contact.fixedFields.url,
            email: j.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: mF,
          fixedFields: {
            name: j.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: j.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: xF,
          fixedFields: {
            url: j.visitors.document.objects.Server.fixedFields.url,
            description: j.visitors.document.objects.Server.fixedFields.description,
            variables: j.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: OF,
          fixedFields: {
            enum: j.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: j.visitors.document.objects.ServerVariable.fixedFields.default,
            description: j.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: RF,
          fixedFields: {
            schemas: YF,
            responses: j.visitors.document.objects.Components.fixedFields.responses,
            parameters: j.visitors.document.objects.Components.fixedFields.parameters,
            examples: j.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: j.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: j.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: j.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: j.visitors.document.objects.Components.fixedFields.links,
            callbacks: j.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: XF
          }
        },
        Paths: {
          $visitor: ik
        },
        PathItem: {
          $visitor: yk,
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
          $visitor: dk,
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
          $visitor: tk,
          fixedFields: {
            description: j.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: j.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: MF,
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
          $visitor: ak,
          fixedFields: {
            description: j.visitors.document.objects.RequestBody.fixedFields.description,
            content: j.visitors.document.objects.RequestBody.fixedFields.content,
            required: j.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: EF,
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
          $visitor: nk,
          fixedFields: {
            contentType: j.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: j.visitors.document.objects.Encoding.fixedFields.headers,
            style: j.visitors.document.objects.Encoding.fixedFields.style,
            explode: j.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: j.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: hk,
          fixedFields: {
            default: j.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: lk,
          fixedFields: {
            description: j.visitors.document.objects.Response.fixedFields.description,
            headers: j.visitors.document.objects.Response.fixedFields.headers,
            content: j.visitors.document.objects.Response.fixedFields.content,
            links: j.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: ck
        },
        Example: {
          $visitor: ZF,
          fixedFields: {
            summary: j.visitors.document.objects.Example.fixedFields.summary,
            description: j.visitors.document.objects.Example.fixedFields.description,
            value: j.visitors.document.objects.Example.fixedFields.value,
            externalValue: j.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: vF,
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
          $visitor: kF,
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
          $visitor: TF,
          fixedFields: {
            name: j.visitors.document.objects.Tag.fixedFields.name,
            description: j.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: $F,
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
          ...Ak
        },
        Schema: {
          $visitor: NF,
          fixedFields: {
            ...Ek.fixedFields,
            // core vocabulary
            $defs: DF,
            // applicator vocabulary
            allOf: qF,
            anyOf: LF,
            oneOf: VF,
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
            dependentSchemas: BF,
            prefixItems: UF,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: JF,
            patternProperties: HF,
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
          $visitor: KF,
          fixedFields: {
            propertyName: j.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: j.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: WF,
          fixedFields: {
            name: j.visitors.document.objects.XML.fixedFields.name,
            namespace: j.visitors.document.objects.XML.fixedFields.namespace,
            prefix: j.visitors.document.objects.XML.fixedFields.prefix,
            attribute: j.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: j.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: gk,
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
          $visitor: xk,
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
          $visitor: Ok,
          fixedFields: {
            authorizationUrl: j.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: j.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: j.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: j.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: jF
        }
      },
      extension: {
        $visitor: j.visitors.document.extension.$visitor
      }
    }
  }
}, Pk = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = w.refract(t), s = Qt(jk), i = Re(e, s), o = new i({
    specObj: s
  });
  return Se(n, o), At(o.element, r, {
    toolboxCreator: DO,
    visitorOptions: {
      keyMap: ut,
      nodeTypeGetter: rt
    }
  });
}, oe = (t) => (e, r = {}) => Pk(e, {
  specPath: t,
  ...r
});
Gi.refract = oe(["visitors", "document", "objects", "Callback", "$visitor"]);
Ki.refract = oe(["visitors", "document", "objects", "Components", "$visitor"]);
zi.refract = oe(["visitors", "document", "objects", "Contact", "$visitor"]);
Wi.refract = oe(["visitors", "document", "objects", "Example", "$visitor"]);
np.refract = oe(["visitors", "document", "objects", "Discriminator", "$visitor"]);
sp.refract = oe(["visitors", "document", "objects", "Encoding", "$visitor"]);
Yi.refract = oe(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Xi.refract = oe(["visitors", "document", "objects", "Header", "$visitor"]);
Qi.refract = oe(["visitors", "document", "objects", "Info", "$visitor"]);
Sr.refract = oe(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
Zi.refract = oe(["visitors", "document", "objects", "License", "$visitor"]);
eo.refract = oe(["visitors", "document", "objects", "Link", "$visitor"]);
to.refract = oe(["visitors", "document", "objects", "MediaType", "$visitor"]);
ip.refract = oe(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
op.refract = oe(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
ap.refract = oe(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
er.refract = oe(["visitors", "document", "objects", "OpenApi", "$visitor"]);
hs.refract = oe(["visitors", "document", "objects", "Operation", "$visitor"]);
ro.refract = oe(["visitors", "document", "objects", "Parameter", "$visitor"]);
Gt.refract = oe(["visitors", "document", "objects", "PathItem", "$visitor"]);
no.refract = oe(["visitors", "document", "objects", "Paths", "$visitor"]);
tr.refract = oe(["visitors", "document", "objects", "Reference", "$visitor"]);
so.refract = oe(["visitors", "document", "objects", "RequestBody", "$visitor"]);
io.refract = oe(["visitors", "document", "objects", "Response", "$visitor"]);
oo.refract = oe(["visitors", "document", "objects", "Responses", "$visitor"]);
Kt.refract = oe(["visitors", "document", "objects", "Schema", "$visitor"]);
co.refract = oe(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
uo.refract = oe(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
lo.refract = oe(["visitors", "document", "objects", "Server", "$visitor"]);
fo.refract = oe(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
cp.refract = oe(["visitors", "document", "objects", "Tag", "$visitor"]);
up.refract = oe(["visitors", "document", "objects", "XML", "$visitor"]);
class Rk extends Dn {
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
      const r = unescape(encodeURIComponent(e.toString())), n = btoa(r), s = new pt();
      if (n.length !== 0) {
        const i = new w.StringElement(n);
        i.classes.push("result"), s.push(i);
      }
      return s;
    } catch (r) {
      throw new Ct(`Error parsing "${e.uri}"`, {
        cause: r
      });
    }
  }
}
class _k extends K_ {
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
      throw new CS('"openapi-3-1" dereference strategy is not available.');
    const s = new qr(), i = Wx(r, {
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
  AbortController: Tk,
  AbortSignal: Ck
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = Tk);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = Ck);
class qO extends G_ {
  swaggerHTTPClient = kr;
  swaggerHTTPClientConfig;
  constructor({
    swaggerHTTPClient: e = kr,
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
      throw new Yx(`Error downloading "${e.uri}"`, {
        cause: u
      });
    } finally {
      clearTimeout(i);
    }
  }
}
class LO extends Dn {
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
      throw new Ct("json-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new pt(), n = e.toString();
    if (this.allowEmpty && n.trim() === "")
      return r;
    try {
      const s = TS(JSON.parse(n));
      return s.classes.push("result"), r.push(s), r;
    } catch (s) {
      throw new Ct(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class VO extends Dn {
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
        return Fr.load(e.toString(), {
          schema: Ns
        }), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new Ct("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new pt(), n = e.toString();
    try {
      const s = Fr.load(n, {
        schema: Ns
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = TS(s);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new Ct(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class BO extends Dn {
  detectionRegExp = /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/;
  constructor(e = {}) {
    super({
      name: "openapi-json-3-1-swagger-client",
      mediaTypes: new Oh(...Br.filterByFormat("generic"), ...Br.filterByFormat("json")),
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
      throw new Ct("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new pt(), n = e.toString();
    if (this.allowEmpty && n.trim() === "")
      return r;
    try {
      const s = JSON.parse(n), i = er.refract(s, this.refractorOpts);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new Ct(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class UO extends Dn {
  detectionRegExp = /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m;
  constructor(e = {}) {
    super({
      name: "openapi-yaml-3-1-swagger-client",
      mediaTypes: new Oh(...Br.filterByFormat("generic"), ...Br.filterByFormat("yaml")),
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
        return Fr.load(s), this.detectionRegExp.test(s);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new Ct("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new pt(), n = e.toString();
    try {
      const s = Fr.load(n, {
        schema: Ns
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = er.refract(s, this.refractorOpts);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new Ct(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
const ho = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), Jr = (t) => {
  const e = eh(t);
  return Hx("#", e);
}, $k = (t) => {
  if (!ho(t))
    throw new X_(t);
  return t;
}, dp = (t, e) => {
  const r = $k(t), n = jS((s) => lt(s) && R(s.$anchor) === r, e);
  if (Xt(n))
    throw new W_(`Evaluation failed on token: "${r}"`);
  return n;
}, JO = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = eh(R(e.$ref)), n = R(e.meta.get("ancestorsSchemaIdentifiers"));
  return `${zr((i, o) => Pe(i, Mn(fe(o))), t, [...n, R(e.$ref)])}${r === "#" ? "" : r}`;
}, Ik = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = R(e.meta.get("ancestorsSchemaIdentifiers"));
  return zr((n, s) => Pe(n, Mn(fe(s))), t, r);
}, fn = (t) => {
  if (fn.cache.has(t))
    return fn.cache.get(t);
  const e = Kt.refract(t);
  return fn.cache.set(t, e), e;
};
fn.cache = /* @__PURE__ */ new WeakMap();
const De = (t) => ur(t) ? fn(t) : t, po = (t, e) => {
  const {
    cache: r
  } = po, n = fe(t), s = (o) => lt(o) && typeof o.$id < "u";
  if (!r.has(e)) {
    const o = T_(s, e);
    r.set(e, Array.from(o));
  }
  const i = r.get(e).find((o) => Ik(n, o) === n);
  if (Xt(i))
    throw new ph(`Evaluation failed on URI: "${t}"`);
  return ho(Jr(t)) ? dp(Jr(t), i) : ct(i, et(t));
};
po.cache = /* @__PURE__ */ new WeakMap();
const ws = Se[Symbol.for("nodejs.util.promisify.custom")], Te = new fh(), Qe = (t, e, r, n) => {
  yt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class ir {
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
    ancestors: i = new _l(),
    refractCache: o = /* @__PURE__ */ new Map(),
    allOfDiscriminatorMapping: a = /* @__PURE__ */ new Map()
  }) {
    this.indirections = s, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new _l(...i), this.refractCache = o, this.allOfDiscriminatorMapping = a;
  }
  toBaseURI(e) {
    return Pe(this.reference.uri, Mn(fe(e)));
  }
  async toReference(e) {
    if (this.reference.depth >= this.options.resolve.maxDepth)
      throw new Q_(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    const r = this.toBaseURI(e), {
      refSet: n
    } = this.reference;
    if (n.has(r))
      return n.find(Fx(r, "uri"));
    const s = await FP(at(r), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: "text/plain"
      }
    }), i = new _t({
      uri: r,
      value: q(s),
      depth: this.reference.depth + 1
    });
    if (n.add(i), this.options.dereference.immutable) {
      const o = new _t({
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
    return [new _l(...this.ancestors, r), r];
  }
  OpenApi3_1Element = {
    leave: (e, r, n, s, i, o) => {
      var a;
      if (!((a = this.options.dereference.strategyOpts["openapi-3-1"]) !== null && a !== void 0 && a.dereferenceDiscriminatorMapping))
        return;
      const c = je(e);
      return c.setMetaProperty("allOfDiscriminatorMapping", Object.fromEntries(this.allOfDiscriminatorMapping)), o.replaceWith(c, Qe), n ? void 0 : c;
    }
  };
  async ReferenceElement(e, r, n, s, i, o) {
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), u = this.toBaseURI(R(e.$ref)), f = fe(this.reference.uri) === u, l = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && l)
      return !1;
    const d = await this.toReference(R(e.$ref)), h = Pe(u, R(e.$ref));
    this.indirections.push(e);
    const m = et(h);
    let p = ct(d.value.result, m);
    if (p.id = Te.identify(p), ur(p)) {
      const O = R(e.meta.get("referenced-element")), A = `${O}-${R(Te.identify(p))}`;
      this.refractCache.has(A) ? p = this.refractCache.get(A) : pe(p) ? (p = tr.refract(p), p.setMetaProperty("referenced-element", O), this.refractCache.set(A, p)) : (p = this.namespace.getElementClass(O).refract(p), this.refractCache.set(A, p));
    }
    if (e === p)
      throw new me("Recursive Reference Object detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(p)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new me("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var v, g;
        const O = new w.RefElement(p.id, {
          type: "reference",
          uri: d.uri,
          $ref: R(e.$ref)
        }), _ = ((v = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && v !== void 0 ? v : this.options.dereference.circularReplacer)(O);
        return o.replaceWith(_, Qe), n ? !1 : _;
      }
    }
    const y = fe(d.refSet.rootRef.uri) !== d.uri, x = ["error", "replace"].includes(this.options.dereference.circular);
    if ((l || y || Or(p) || x) && !a.includesCycle(p)) {
      c.add(e);
      const O = new ir({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a,
        allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
      });
      p = await ws(p, O, {
        keyMap: ut,
        nodeTypeGetter: rt
      }), c.delete(e);
    }
    this.indirections.pop();
    const b = je(p);
    return b.setMetaProperty("id", Te.generateId()), b.setMetaProperty("ref-fields", {
      $ref: R(e.$ref),
      // @ts-ignore
      description: R(e.description),
      // @ts-ignore
      summary: R(e.summary)
    }), b.setMetaProperty("ref-origin", d.uri), b.setMetaProperty("ref-referencing-element-id", q(Te.identify(e))), te(p) && te(b) && (e.hasKey("description") && "description" in p && (b.remove("description"), b.set("description", e.get("description"))), e.hasKey("summary") && "summary" in p && (b.remove("summary"), b.set("summary", e.get("summary")))), o.replaceWith(b, Qe), n ? !1 : b;
  }
  async PathItemElement(e, r, n, s, i, o) {
    if (!K(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), u = this.toBaseURI(R(e.$ref)), f = fe(this.reference.uri) === u, l = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && l)
      return;
    const d = await this.toReference(R(e.$ref)), h = Pe(u, R(e.$ref));
    this.indirections.push(e);
    const m = et(h);
    let p = ct(d.value.result, m);
    if (p.id = Te.identify(p), ur(p)) {
      const b = `path-item-${R(Te.identify(p))}`;
      this.refractCache.has(b) ? p = this.refractCache.get(b) : (p = Gt.refract(p), this.refractCache.set(b, p));
    }
    if (e === p)
      throw new me("Recursive Path Item Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(p)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new me("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var v, g;
        const b = new w.RefElement(p.id, {
          type: "path-item",
          uri: d.uri,
          $ref: R(e.$ref)
        }), A = ((v = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && v !== void 0 ? v : this.options.dereference.circularReplacer)(b);
        return o.replaceWith(A, Qe), n ? !1 : A;
      }
    }
    const y = fe(d.refSet.rootRef.uri) !== d.uri, x = ["error", "replace"].includes(this.options.dereference.circular);
    if ((l || y || pr(p) && K(p.$ref) || x) && !a.includesCycle(p)) {
      c.add(e);
      const b = new ir({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a,
        allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
      });
      p = await ws(p, b, {
        keyMap: ut,
        nodeTypeGetter: rt
      }), c.delete(e);
    }
    if (this.indirections.pop(), pr(p)) {
      const b = new Gt([...p.content], q(p.meta), q(p.attributes));
      b.setMetaProperty("id", Te.generateId()), e.forEach((O, A, _) => {
        b.remove(R(A)), b.content.push(_);
      }), b.remove("$ref"), b.setMetaProperty("ref-fields", {
        $ref: R(e.$ref)
      }), b.setMetaProperty("ref-origin", d.uri), b.setMetaProperty("ref-referencing-element-id", q(Te.identify(e))), p = b;
    }
    return o.replaceWith(p, Qe), n ? void 0 : p;
  }
  async LinkElement(e, r, n, s, i, o) {
    if (!K(e.operationRef) && !K(e.operationId))
      return;
    if (K(e.operationRef) && K(e.operationId))
      throw new me("LinkElement operationRef and operationId fields are mutually exclusive.");
    let a;
    if (K(e.operationRef)) {
      var c;
      const f = et(R(e.operationRef)), l = this.toBaseURI(R(e.operationRef)), d = fe(this.reference.uri) === l, h = !d;
      if (!this.options.resolve.internal && d || !this.options.resolve.external && h)
        return;
      const m = await this.toReference(R(e.operationRef));
      if (a = ct(m.value.result, f), ur(a)) {
        const v = `operation-${R(Te.identify(a))}`;
        this.refractCache.has(v) ? a = this.refractCache.get(v) : (a = hs.refract(a), this.refractCache.set(v, a));
      }
      a = je(a), a.setMetaProperty("ref-origin", m.uri);
      const p = je(e);
      return (c = p.operationRef) === null || c === void 0 || c.meta.set("operation", a), o.replaceWith(p, Qe), n ? void 0 : p;
    }
    if (K(e.operationId)) {
      var u;
      const f = R(e.operationId), l = await this.toReference(at(this.reference.uri));
      if (a = jS((h) => NO(h) && ve(h.operationId) && h.operationId.equals(f), l.value.result), Xt(a))
        throw new me(`OperationElement(operationId=${f}) not found.`);
      const d = je(e);
      return (u = d.operationId) === null || u === void 0 || u.meta.set("operation", a), o.replaceWith(d, Qe), n ? void 0 : d;
    }
  }
  async ExampleElement(e, r, n, s, i, o) {
    if (!K(e.externalValue))
      return;
    if (e.hasKey("value") && K(e.externalValue))
      throw new me("ExampleElement value and externalValue fields are mutually exclusive.");
    const a = this.toBaseURI(R(e.externalValue)), c = fe(this.reference.uri) === a, u = !c;
    if (!this.options.resolve.internal && c || !this.options.resolve.external && u)
      return;
    const f = await this.toReference(R(e.externalValue)), l = je(f.value.result);
    l.setMetaProperty("ref-origin", f.uri);
    const d = je(e);
    return d.value = l, o.replaceWith(d, Qe), n ? void 0 : d;
  }
  async MemberElement(e, r, n, s, i, o) {
    var a;
    const c = i[i.length - 1];
    if (!te(c) || !c.classes.contains("discriminator-mapping"))
      return;
    if (!((a = this.options.dereference.strategyOpts["openapi-3-1"]) !== null && a !== void 0 && a.dereferenceDiscriminatorMapping) || !K(e.key) || !K(e.value) || this.indirections.includes(e))
      return !1;
    this.indirections.push(e);
    const [u, f] = this.toAncestorLineage([...i, n]), l = [...f].findLast(lt), d = q(l.getMetaProperty("ancestorsSchemaIdentifiers")), h = R(e.value), p = /^[a-zA-Z0-9\\.\\-_]+$/.test(h) ? `#/components/schemas/${h}` : h, v = new Kt({
      $ref: p
    });
    v.setMetaProperty("ancestorsSchemaIdentifiers", d), f.add(v);
    const g = new ir({
      reference: this.reference,
      namespace: this.namespace,
      indirections: [...this.indirections],
      options: this.options,
      refractCache: this.refractCache,
      ancestors: u,
      allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
    }), y = await ws(v, g, {
      keyMap: ut,
      nodeTypeGetter: rt
    });
    f.delete(v), this.indirections.pop();
    const x = je(e);
    return x.value.setMetaProperty("ref-schema", y), o.replaceWith(x, Qe), n ? void 0 : x;
  }
  async SchemaElement(e, r, n, s, i, o) {
    if (!K(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]);
    let u = await this.toReference(at(this.reference.uri)), {
      uri: f
    } = u;
    const l = JO(f, e), d = fe(l), h = new Sn({
      uri: d
    }), m = kj((C) => C.canRead(h), this.options.resolve.resolvers), p = !m;
    let v = fe(this.reference.uri) === l, g = !v;
    this.indirections.push(e);
    let y;
    try {
      if (m || p) {
        f = this.toBaseURI(l);
        const C = l, S = De(u.value.result);
        if (y = po(C, S), y = De(y), y.id = Te.identify(y), !this.options.resolve.internal && v || !this.options.resolve.external && g)
          return;
      } else {
        if (f = this.toBaseURI(l), v = fe(this.reference.uri) === f, g = !v, !this.options.resolve.internal && v || !this.options.resolve.external && g)
          return;
        u = await this.toReference(at(l));
        const C = et(l), S = De(u.value.result);
        y = ct(S, C), y = De(y), y.id = Te.identify(y);
      }
    } catch (C) {
      if (p && C instanceof ph)
        if (ho(Jr(l))) {
          if (v = fe(this.reference.uri) === f, g = !v, !this.options.resolve.internal && v || !this.options.resolve.external && g)
            return;
          u = await this.toReference(at(l));
          const S = Jr(l), P = De(u.value.result);
          y = dp(S, P), y = De(y), y.id = Te.identify(y);
        } else {
          if (f = this.toBaseURI(l), v = fe(this.reference.uri) === f, g = !v, !this.options.resolve.internal && v || !this.options.resolve.external && g)
            return;
          u = await this.toReference(at(l));
          const S = et(l), P = De(u.value.result);
          y = ct(P, S), y = De(y), y.id = Te.identify(y);
        }
      else
        throw C;
    }
    if (e === y)
      throw new me("Recursive Schema Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(y)) {
      if (u.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new me("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var x, b;
        const C = new w.RefElement(y.id, {
          type: "json-schema",
          uri: u.uri,
          $ref: R(e.$ref)
        }), P = ((x = (b = this.options.dereference.strategyOpts["openapi-3-1"]) === null || b === void 0 ? void 0 : b.circularReplacer) !== null && x !== void 0 ? x : this.options.dereference.circularReplacer)(C);
        return o.replaceWith(P, Qe), n ? !1 : P;
      }
    }
    const O = fe(u.refSet.rootRef.uri) !== u.uri, A = ["error", "replace"].includes(this.options.dereference.circular);
    if ((g || O || lt(y) && K(y.$ref) || A) && !a.includesCycle(y)) {
      c.add(e);
      const C = new ir({
        reference: u,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a,
        allOfDiscriminatorMapping: this.allOfDiscriminatorMapping
      });
      y = await ws(y, C, {
        keyMap: ut,
        nodeTypeGetter: rt
      }), c.delete(e);
    }
    if (this.indirections.pop(), pp(y)) {
      const C = q(y);
      return C.setMetaProperty("id", Te.generateId()), C.setMetaProperty("ref-fields", {
        $ref: R(e.$ref),
        $refBaseURI: l
      }), C.setMetaProperty("ref-origin", u.uri), C.setMetaProperty("ref-referencing-element-id", q(Te.identify(e))), o.replaceWith(C, Qe), n ? !1 : C;
    }
    if (lt(y)) {
      var _;
      const C = new Kt([...y.content], q(y.meta), q(y.attributes));
      if (C.setMetaProperty("id", Te.generateId()), e.forEach((S, P, T) => {
        C.remove(R(P)), C.content.push(T);
      }), C.remove("$ref"), C.setMetaProperty("ref-fields", {
        $ref: R(e.$ref),
        $refBaseURI: l
      }), C.setMetaProperty("ref-origin", u.uri), C.setMetaProperty("ref-referencing-element-id", q(Te.identify(e))), (_ = this.options.dereference.strategyOpts["openapi-3-1"]) !== null && _ !== void 0 && _.dereferenceDiscriminatorMapping) {
        var E;
        const S = i[i.length - 1], P = [...c].findLast(lt), T = P?.getMetaProperty("schemaName"), B = R(C.getMetaProperty("schemaName"));
        if (B && T && // @ts-ignore
        S !== null && S !== void 0 && (E = S.classes) !== null && E !== void 0 && E.contains("json-schema-allOf")) {
          var I;
          const D = (I = this.allOfDiscriminatorMapping.get(B)) !== null && I !== void 0 ? I : [];
          D.push(P), this.allOfDiscriminatorMapping.set(B, D);
        }
      }
      y = C;
    }
    return o.replaceWith(y, Qe), n ? void 0 : y;
  }
}
const Mk = Se[Symbol.for("nodejs.util.promisify.custom")];
class Fk extends z_ {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canDereference(e) {
    var r;
    return e.mediaType !== "text/plain" ? Br.includes(e.mediaType) : kO((r = e.parseResult) === null || r === void 0 ? void 0 : r.result);
  }
  async dereference(e, r) {
    var n;
    const s = Dt(lp), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new qr(), o = new qr();
    let a = i, c;
    i.has(e.uri) ? c = i.find(Fx(e.uri, "uri")) : (c = new _t({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((l) => new _t({
      ...l,
      value: q(l.value)
    })).forEach((l) => o.add(l)), c = o.find((l) => l.uri === e.uri), a = o);
    const u = new ir({
      reference: c,
      namespace: s,
      options: r
    }), f = await Mk(a.rootRef.value, u, {
      keyMap: ut,
      nodeTypeGetter: rt
    });
    return r.dereference.immutable && o.refs.filter((l) => l.uri.startsWith("immutable://")).map((l) => new _t({
      ...l,
      uri: l.uri.replace(/^immutable:\/\//, "")
    })).forEach((l) => i.add(l)), r.dereference.refSet === null && i.clean(), o.clean(), f;
  }
}
const kk = (t) => t.slice(2), ot = (t) => {
  const e = kk(t);
  return e.reduce((r, n, s) => {
    if (yt(n)) {
      const i = String(R(n.key));
      r.push(i);
    } else if (ke(e[s - 2])) {
      const i = e[s - 2].content.indexOf(n);
      r.push(i);
    }
    return r;
  }, []);
};
class Nk {
  modelPropertyMacro;
  options;
  SchemaElement = {
    leave: (e, r, n, s, i) => {
      typeof e.properties > "u" || te(e.properties) && e.properties.forEach((o) => {
        if (te(o))
          try {
            const u = this.modelPropertyMacro(R(o));
            o.set("default", u);
          } catch (u) {
            var a, c;
            const f = new Error(u, {
              cause: u
            });
            f.fullPath = [...ot([...i, n, e]), "properties"], (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, f);
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
class Dk {
  options;
  SchemaElement = {
    leave(e, r, n, s, i) {
      if (typeof e.allOf > "u") return;
      if (!ke(e.allOf)) {
        var o, a;
        const l = new TypeError("allOf must be an array");
        l.fullPath = [...ot([...i, n, e]), "allOf"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, l);
        return;
      }
      if (e.allOf.isEmpty) {
        e.remove("allOf");
        return;
      }
      if (!e.allOf.content.every(lt)) {
        var u, f;
        const l = new TypeError("Elements in allOf must be objects");
        l.fullPath = [...ot([...i, n, e]), "allOf"], (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (f = u.push) === null || f === void 0 || f.call(u, l);
        return;
      }
      for (; e.hasKey("allOf"); ) {
        const {
          allOf: l
        } = e;
        e.remove("allOf");
        const d = nt.all([...l.content, e], {
          customMerge: (h) => R(h) === "enum" ? (m, p) => {
            if (Lr(["json-schema-enum"], m) && Lr(["json-schema-enum"], p)) {
              const v = (y, x) => ke(y) || ke(x) || te(y) || te(x) ? !1 : y.equals(R(x)), g = je(m);
              return g.content = Dx(v)([...m.content, ...p.content]), g;
            }
            return nt(m, p);
          } : nt
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
  };
  constructor({
    options: e
  }) {
    this.options = e;
  }
}
class qk {
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
      const o = this.#e ? R(this.#e) : null, a = R(e);
      try {
        const f = this.parameterMacro(o, a);
        e.set("default", f);
      } catch (f) {
        var c, u;
        const l = new Error(f, {
          cause: f
        });
        l.fullPath = ot([...i, n]), (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, l);
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
const Es = (t) => {
  if (t.cause == null) return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
};
class Lk extends bt {
}
const {
  wrapError: Ml
} = mh, Fl = Se[Symbol.for("nodejs.util.promisify.custom")], Ze = new fh(), rr = (t, e, r, n) => {
  yt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class hn extends ir {
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
      const [h, m] = this.toAncestorLineage([...i, n]), p = this.toBaseURI(R(e.$ref)), v = fe(this.reference.uri) === p, g = !v;
      if (!this.options.resolve.internal && v || !this.options.resolve.external && g)
        return !1;
      const y = await this.toReference(R(e.$ref)), x = Pe(p, R(e.$ref));
      this.indirections.push(e);
      const b = et(x);
      let O = ct(y.value.result, b);
      if (O.id = Ze.identify(O), ur(O)) {
        const I = R(e.meta.get("referenced-element")), C = `${I}-${R(Ze.identify(O))}`;
        this.refractCache.has(C) ? O = this.refractCache.get(C) : pe(O) ? (O = tr.refract(O), O.setMetaProperty("referenced-element", I), this.refractCache.set(C, O)) : (O = this.namespace.getElementClass(I).refract(O), this.refractCache.set(C, O));
      }
      if (e === O)
        throw new me("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (h.includes(O)) {
        if (y.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var a, c;
          const I = new w.RefElement(O.id, {
            type: "reference",
            uri: y.uri,
            $ref: R(e.$ref),
            baseURI: x,
            referencingElement: e
          }), S = ((a = (c = this.options.dereference.strategyOpts["openapi-3-1"]) === null || c === void 0 ? void 0 : c.circularReplacer) !== null && a !== void 0 ? a : this.options.dereference.circularReplacer)(I);
          return o.replaceWith(I, rr), n ? !1 : S;
        }
      }
      const A = fe(y.refSet.rootRef.uri) !== y.uri, _ = ["error", "replace"].includes(this.options.dereference.circular);
      if ((g || A || Or(O) || _) && !h.includesCycle(O)) {
        var u;
        m.add(e);
        const I = new hn({
          reference: y,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: h,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (u = this.basePath) !== null && u !== void 0 ? u : [...ot([...i, n, e]), "$ref"]
        });
        O = await Fl(O, I, {
          keyMap: ut,
          nodeTypeGetter: rt
        }), m.delete(e);
      }
      this.indirections.pop();
      const E = je(O);
      if (E.setMetaProperty("ref-fields", {
        $ref: R(e.$ref),
        description: R(e.description),
        summary: R(e.summary)
      }), E.setMetaProperty("ref-origin", y.uri), E.setMetaProperty("ref-referencing-element-id", q(Ze.identify(e))), te(O) && (e.hasKey("description") && "description" in O && (E.remove("description"), E.set("description", e.get("description"))), e.hasKey("summary") && "summary" in O && (E.remove("summary"), E.set("summary", e.get("summary")))), this.allowMetaPatches && te(E) && !E.hasKey("$$ref")) {
        const I = Pe(p, x);
        E.set("$$ref", I);
      }
      return o.replaceWith(E, rr), n ? !1 : E;
    } catch (h) {
      var f, l, d;
      const m = Es(h), p = Ml(m, {
        baseDoc: this.reference.uri,
        $ref: R(e.$ref),
        pointer: et(R(e.$ref)),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...ot([...i, n, e]), "$ref"]
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (d = l.push) === null || d === void 0 || d.call(l, p);
      return;
    }
  }
  async PathItemElement(e, r, n, s, i, o) {
    try {
      if (!K(e.$ref))
        return;
      if (this.indirections.includes(e) || Lr(["cycle"], e.$ref))
        return !1;
      const [h, m] = this.toAncestorLineage([...i, n]), p = this.toBaseURI(R(e.$ref)), v = fe(this.reference.uri) === p, g = !v;
      if (!this.options.resolve.internal && v || !this.options.resolve.external && g)
        return;
      const y = await this.toReference(R(e.$ref)), x = Pe(p, R(e.$ref));
      this.indirections.push(e);
      const b = et(x);
      let O = ct(y.value.result, b);
      if (O.id = Ze.identify(O), ur(O)) {
        const E = `path-item-${R(Ze.identify(O))}`;
        this.refractCache.has(E) ? O = this.refractCache.get(E) : (O = Gt.refract(O), this.refractCache.set(E, O));
      }
      if (e === O)
        throw new me("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (h.includes(O)) {
        if (y.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var a, c;
          const E = new w.RefElement(O.id, {
            type: "path-item",
            uri: y.uri,
            $ref: R(e.$ref),
            baseURI: x,
            referencingElement: e
          }), C = ((a = (c = this.options.dereference.strategyOpts["openapi-3-1"]) === null || c === void 0 ? void 0 : c.circularReplacer) !== null && a !== void 0 ? a : this.options.dereference.circularReplacer)(E);
          return o.replaceWith(E, rr), n ? !1 : C;
        }
      }
      const A = fe(y.refSet.rootRef.uri) !== y.uri, _ = ["error", "replace"].includes(this.options.dereference.circular);
      if ((g || A || pr(O) && K(O.$ref) || _) && !h.includesCycle(O)) {
        var u;
        m.add(e);
        const E = new hn({
          reference: y,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: h,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (u = this.basePath) !== null && u !== void 0 ? u : [...ot([...i, n, e]), "$ref"]
        });
        O = await Fl(O, E, {
          keyMap: ut,
          nodeTypeGetter: rt
        }), m.delete(e);
      }
      if (this.indirections.pop(), pr(O)) {
        const E = new Gt([...O.content], q(O.meta), q(O.attributes));
        if (e.forEach((I, C, S) => {
          E.remove(R(C)), E.content.push(S);
        }), E.remove("$ref"), E.setMetaProperty("ref-fields", {
          $ref: R(e.$ref)
        }), E.setMetaProperty("ref-origin", y.uri), E.setMetaProperty("ref-referencing-element-id", q(Ze.identify(e))), this.allowMetaPatches && typeof E.get("$$ref") > "u") {
          const I = Pe(p, x);
          E.set("$$ref", I);
        }
        O = E;
      }
      return o.replaceWith(O, rr), n ? void 0 : O;
    } catch (h) {
      var f, l, d;
      const m = Es(h), p = Ml(m, {
        baseDoc: this.reference.uri,
        $ref: R(e.$ref),
        pointer: et(R(e.$ref)),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...ot([...i, n, e]), "$ref"]
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (d = l.push) === null || d === void 0 || d.call(l, p);
      return;
    }
  }
  async SchemaElement(e, r, n, s, i, o) {
    try {
      if (!K(e.$ref))
        return;
      if (this.indirections.includes(e))
        return !1;
      const [h, m] = this.toAncestorLineage([...i, n]);
      let p = await this.toReference(at(this.reference.uri)), {
        uri: v
      } = p;
      const g = JO(v, e), y = fe(g), x = new Sn({
        uri: y
      }), b = !this.options.resolve.resolvers.some((S) => S.canRead(x)), O = !b;
      let A = fe(this.reference.uri) === g, _ = !A;
      this.indirections.push(e);
      let E;
      try {
        if (b || O) {
          v = this.toBaseURI(g);
          const S = g, P = De(p.value.result);
          if (E = po(S, P), E = De(E), E.id = Ze.identify(E), !this.options.resolve.internal && A || !this.options.resolve.external && _)
            return;
        } else {
          if (v = this.toBaseURI(g), A = fe(this.reference.uri) === v, _ = !A, !this.options.resolve.internal && A || !this.options.resolve.external && _)
            return;
          p = await this.toReference(at(g));
          const S = et(g), P = De(p.value.result);
          E = ct(P, S), E = De(E), E.id = Ze.identify(E);
        }
      } catch (S) {
        if (O && S instanceof ph)
          if (ho(Jr(g))) {
            if (A = fe(this.reference.uri) === v, _ = !A, !this.options.resolve.internal && A || !this.options.resolve.external && _)
              return;
            p = await this.toReference(at(g));
            const P = Jr(g), T = De(p.value.result);
            E = dp(P, T), E = De(E), E.id = Ze.identify(E);
          } else {
            if (v = this.toBaseURI(R(g)), A = fe(this.reference.uri) === v, _ = !A, !this.options.resolve.internal && A || !this.options.resolve.external && _)
              return;
            p = await this.toReference(at(g));
            const P = et(g), T = De(p.value.result);
            E = ct(T, P), E = De(E), E.id = Ze.identify(E);
          }
        else
          throw S;
      }
      if (e === E)
        throw new me("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (h.includes(E)) {
        if (p.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var a, c;
          const S = new w.RefElement(E.id, {
            type: "json-schema",
            uri: p.uri,
            $ref: R(e.$ref),
            baseURI: Pe(v, g),
            referencingElement: e
          }), T = ((a = (c = this.options.dereference.strategyOpts["openapi-3-1"]) === null || c === void 0 ? void 0 : c.circularReplacer) !== null && a !== void 0 ? a : this.options.dereference.circularReplacer)(S);
          return o.replaceWith(T, rr), n ? !1 : T;
        }
      }
      const I = fe(p.refSet.rootRef.uri) !== p.uri, C = ["error", "replace"].includes(this.options.dereference.circular);
      if ((_ || I || lt(E) && K(E.$ref) || C) && !h.includesCycle(E)) {
        var u;
        m.add(e);
        const S = new hn({
          reference: p,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: h,
          basePath: (u = this.basePath) !== null && u !== void 0 ? u : [...ot([...i, n, e]), "$ref"]
        });
        E = await Fl(E, S, {
          keyMap: ut,
          nodeTypeGetter: rt
        }), m.delete(e);
      }
      if (this.indirections.pop(), pp(E)) {
        const S = q(E);
        return S.setMetaProperty("ref-fields", {
          $ref: R(e.$ref)
        }), S.setMetaProperty("ref-origin", p.uri), S.setMetaProperty("ref-referencing-element-id", q(Ze.identify(e))), o.replaceWith(S, rr), n ? !1 : S;
      }
      if (lt(E)) {
        const S = new Kt([...E.content], q(E.meta), q(E.attributes));
        if (e.forEach((P, T, B) => {
          S.remove(R(T)), S.content.push(B);
        }), S.remove("$ref"), S.setMetaProperty("ref-fields", {
          $ref: R(e.$ref)
        }), S.setMetaProperty("ref-origin", p.uri), S.setMetaProperty("ref-referencing-element-id", q(Ze.identify(e))), this.allowMetaPatches && typeof S.get("$$ref") > "u") {
          const P = Pe(v, g);
          S.set("$$ref", P);
        }
        E = S;
      }
      return o.replaceWith(E, rr), n ? void 0 : E;
    } catch (h) {
      var f, l, d;
      const m = Es(h), p = new Lk(`Could not resolve reference: ${m.message}`, {
        baseDoc: this.reference.uri,
        $ref: R(e.$ref),
        fullPath: (f = this.basePath) !== null && f !== void 0 ? f : [...ot([...i, n, e]), "$ref"],
        cause: m
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (d = l.push) === null || d === void 0 || d.call(l, p);
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
      const l = Es(f), d = Ml(l, {
        baseDoc: this.reference.uri,
        externalValue: R(e.externalValue),
        fullPath: (a = this.basePath) !== null && a !== void 0 ? a : [...ot([...i, n, e]), "externalValue"]
      });
      (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, d);
      return;
    }
  }
}
const Vk = Ti[Symbol.for("nodejs.util.promisify.custom")];
class Bk {
  constructor({
    parameterMacro: e,
    modelPropertyMacro: r,
    mode: n,
    options: s,
    ...i
  }) {
    const o = [];
    o.push(new hn({
      ...i,
      options: s
    })), typeof r == "function" && o.push(new Nk({
      modelPropertyMacro: r,
      options: s
    })), n !== "strict" && o.push(new Dk({
      options: s
    })), typeof e == "function" && o.push(new qk({
      parameterMacro: e,
      options: s
    }));
    const a = Vk(o, {
      nodeTypeGetter: rt
    });
    Object.assign(this, a);
  }
}
const Uk = Se[Symbol.for("nodejs.util.promisify.custom")];
class HO extends Fk {
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
    const s = Dt(lp), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new qr(), o = new qr();
    let a = i, c;
    i.has(e.uri) ? c = i.find((l) => l.uri === e.uri) : (c = new _t({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((l) => new _t({
      ...l,
      value: q(l.value)
    })).forEach((l) => o.add(l)), c = o.find((l) => l.uri === e.uri), a = o);
    const u = new Bk({
      reference: c,
      namespace: s,
      options: r,
      allowMetaPatches: this.allowMetaPatches,
      ancestors: this.ancestors,
      modelPropertyMacro: this.modelPropertyMacro,
      mode: this.mode,
      parameterMacro: this.parameterMacro
    }), f = await Uk(a.rootRef.value, u, {
      keyMap: ut,
      nodeTypeGetter: rt
    });
    return r.dereference.immutable && o.refs.filter((l) => l.uri.startsWith("immutable://")).map((l) => new _t({
      ...l,
      uri: l.uri.replace(/^immutable:\/\//, "")
    })).forEach((l) => i.add(l)), r.dereference.refSet === null && i.clean(), o.clean(), f;
  }
}
const Jk = (t) => {
  const e = R(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
  return new w.ObjectElement({
    $ref: e
  }, q(r.meta), q(r.attributes));
}, mo = async (t) => {
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
    } = mo, p = h.find((D) => D.match(e)), v = bi(Gs()) ? Gs() : Cs, g = bf(t), y = Pe(v, g);
    let x;
    m.has(e) ? x = m.get(e) : (x = er.refract(e), x.classes.push("result"), m.set(e, x));
    const b = new pt([x]), O = tO(o), A = O === "" ? "" : `#${O}`, _ = ct(x, O), E = new _t({
      uri: y,
      value: b
    }), I = new qr({
      refs: [E]
    });
    O !== "" && (I.rootRef = void 0);
    const C = [/* @__PURE__ */ new Set([_])], S = [], P = await Z_(_, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${y}${A}`,
        resolvers: [new qO({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [new _k()]
      },
      parse: {
        mediaType: Br.latest(),
        parsers: [new BO({
          allowEmpty: !1,
          sourceMap: !1
        }), new UO({
          allowEmpty: !1,
          sourceMap: !1
        }), new LO({
          allowEmpty: !1,
          sourceMap: !1
        }), new VO({
          allowEmpty: !1,
          sourceMap: !1
        }), new Rk({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [new HO({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: f,
          modelPropertyMacro: l,
          mode: d,
          ancestors: C
        })],
        refSet: I,
        dereferenceOpts: {
          errors: S
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? zx.dereference.circularReplacer : Jk
      }
    }), T = D_(_, P, x), B = u ? T : p.normalize(T);
    return {
      spec: R(B),
      errors: S
    };
  } catch (m) {
    if (m instanceof lr)
      return {
        spec: e,
        errors: []
      };
    throw m;
  }
};
mo.cache = /* @__PURE__ */ new WeakMap();
const Ig = (t) => {
  if (!te(t)) return t;
  const e = [kM({
    operationIdNormalizer: (n, s, i) => qn({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), $M(), IM(), NM(), DM()];
  return At(t, e, {
    toolboxCreator: DO,
    visitorOptions: {
      keyMap: ut,
      nodeTypeGetter: rt
    }
  });
}, Hk = (t) => (e) => {
  const r = er.refract(e);
  r.classes.push("result");
  const n = t(r), s = R(n);
  return mo.cache.set(s, n), R(n);
}, Gk = {
  name: "openapi-3-1-apidom",
  match(t) {
    return bh(t);
  },
  normalize(t) {
    if (!ve(t) && ht(t) && !t.$$normalized) {
      const e = Hk(Ig)(t);
      return e.$$normalized = !0, e;
    }
    return ve(t) ? Ig(t) : t;
  },
  async resolve(t) {
    return mo(t);
  }
};
function GO(t, e, r) {
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
function Kk(t, e) {
  return GO(t, e, !0) || null;
}
function KO(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function zk(t, e) {
  return !t || !t.paths ? null : Kk(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = qn(s, r, n), a = KO(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: Wk
} = _P, Yk = () => null, Xk = (t) => Array.isArray(t) ? t : [t], Mg = {
  mapTagOperations: eN,
  makeExecute: Qk
};
function Qk(t = {}) {
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
function Zk(t = {}) {
  const e = Mg.makeExecute(t);
  return {
    apis: Mg.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function eN({
  spec: t,
  cb: e = Yk,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return GO(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? Xk(c.tags) : [r]).forEach((f) => {
      if (typeof f != "string")
        return;
      i[f] = i[f] || {};
      const l = i[f], d = qn(c, o, a, {
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
function tN() {
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
const rN = (t, e, r, n, s) => {
  if (t === Y.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-url-template", Ye.charsToString(e, r, n)]);
  }
  return Y.SEM_OK;
}, nN = (t, e, r, n, s) => {
  if (t === Y.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable", Ye.charsToString(e, r, n)]);
  }
  return Y.SEM_OK;
}, sN = (t, e, r, n, s) => {
  if (t === Y.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable-name", Ye.charsToString(e, r, n)]);
  }
  return Y.SEM_OK;
}, iN = (t, e, r, n, s) => {
  if (t === Y.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["literals", Ye.charsToString(e, r, n)]);
  }
  return Y.SEM_OK;
}, oN = new tN(), zO = (t) => {
  const e = new it();
  return e.ast = new Sh(), e.ast.callbacks["server-url-template"] = rN, e.ast.callbacks["server-variable"] = nN, e.ast.callbacks["server-variable-name"] = sN, e.ast.callbacks.literals = iN, {
    result: e.parse(oN, "server-url-template", t),
    ast: e.ast
  };
}, aN = (t, {
  strict: e = !1
} = {}) => {
  try {
    const r = zO(t);
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
}, cN = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, uN = (t) => cN(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), lN = ["literals", "server-variable-name"], fN = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: uN
    },
    ...r
  }, i = zO(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => lN.includes(c)).map(([c, u]) => c === "server-variable-name" ? Object.hasOwn(e, u) ? s.encoder(e[u], u) : `{${u}}` : u).join("");
};
function WO() {
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
const hN = (t, e, r, n, s) => (t === Y.SEM_PRE && s.push(["slash", Ye.charsToString(e, r, n)]), Y.SEM_OK), pN = (t, e, r, n, s) => {
  if (t === Y.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["path-template", Ye.charsToString(e, r, n)]);
  }
  return Y.SEM_OK;
}, dN = (t, e, r, n, s) => (t === Y.SEM_PRE && s.push(["path-literal", Ye.charsToString(e, r, n)]), Y.SEM_OK), mN = (t, e, r, n, s) => (t === Y.SEM_PRE && s.push(["template-expression", Ye.charsToString(e, r, n)]), Y.SEM_OK), yN = (t, e, r, n, s) => (t === Y.SEM_PRE && s.push(["template-expression-param-name", Ye.charsToString(e, r, n)]), Y.SEM_OK), vN = new WO(), gN = (t) => {
  const e = new it();
  return e.ast = new Sh(), e.ast.callbacks["path-template"] = pN, e.ast.callbacks.slash = hN, e.ast.callbacks["path-literal"] = dN, e.ast.callbacks["template-expression"] = mN, e.ast.callbacks["template-expression-param-name"] = yN, {
    result: e.parse(vN, "path-template", t),
    ast: e.ast
  };
}, bN = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, xN = (t) => bN(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), SN = ["slash", "path-literal", "template-expression-param-name"], af = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: xN
    },
    ...r
  }, i = gN(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => SN.includes(c)).map(([c, u]) => c === "template-expression-param-name" ? Object.prototype.hasOwnProperty.call(e, u) ? s.encoder(e[u], u) : `{${u}}` : u).join("");
};
new WO();
new it();
const ON = {
  body: wN,
  header: AN,
  query: PN,
  path: jN,
  formData: EN
};
function wN({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function EN({
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
function AN({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function jN({
  req: t,
  value: e,
  parameter: r,
  baseURL: n
}) {
  if (e !== void 0) {
    const s = t.url.replace(n, ""), i = af(s, {
      [r.name]: e
    });
    t.url = n + i;
  }
}
function PN({
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
function yo(t, e) {
  return e.includes("application/json") ? typeof t == "string" ? t : (Array.isArray(t) && (t = t.map((r) => {
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  })), JSON.stringify(t)) : String(t);
}
function Ss() {
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
new Ss();
const RN = (t) => {
  if (typeof t != "string" || [...t].length !== 1)
    throw new TypeError("Input must be a single character string.");
  const e = t.codePointAt(0);
  return e <= 127 ? `%${e.toString(16).toUpperCase().padStart(2, "0")}` : encodeURIComponent(t);
}, _N = (t) => t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, ""), vo = (t) => t.length >= 2 && t.startsWith('"') && t.endsWith('"'), YO = (t) => vo(t) ? t.slice(1, -1) : t, XO = (t) => `"${t}"`, QO = (t) => t, TN = new it(), CN = new Ss(), mp = (t, {
  strict: e = !0,
  quoted: r = null
} = {}) => {
  try {
    const n = e ? "cookie-value" : "lenient-cookie-value", s = TN.parse(CN, n, t);
    return typeof r == "boolean" ? s.success && r === vo(t) : s.success;
  } catch {
    return !1;
  }
}, ZO = (t) => {
  const r = new TextEncoder().encode(t).reduce((n, s) => n + String.fromCharCode(s), "");
  return btoa(r);
}, $N = (t, e = ZO) => {
  const r = String(t);
  if (mp(r)) return r;
  const n = vo(r), s = n ? YO(r) : r, i = e(s);
  return n ? XO(i) : i;
}, IN = (t) => _N(ZO(t)), MN = (t) => $N(t, IN), FN = new it(), kN = new Ss(), ew = (t, {
  strict: e = !0
} = {}) => {
  try {
    const r = e ? "cookie-name" : "lenient-cookie-name";
    return FN.parse(kN, r, t).success;
  } catch {
    return !1;
  }
}, NN = (t) => {
  if (!ew(t))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, tw = (t) => {
  if (!mp(t))
    throw new TypeError(`Invalid cookie value: ${t}`);
}, Fg = {
  encoders: {
    name: QO,
    value: MN
  },
  validators: {
    name: NN,
    value: tw
  }
}, DN = (t, e, r = {}) => {
  const n = {
    ...r,
    encoders: {
      ...Fg.encoders,
      ...r.encoders
    },
    validators: {
      ...Fg.validators,
      ...r.validators
    }
  }, s = n.encoders.name(t), i = n.encoders.value(e);
  return n.validators.name(s), n.validators.value(i), `${s}=${i}`;
}, qN = (t, e = {}) => (Array.isArray(t) ? t : typeof t == "object" && t !== null ? Object.entries(t) : []).map(([n, s]) => DN(n, s, e)).join("; "), LN = new it(), VN = new Ss(), BN = (t) => {
  const e = String(t);
  if (mp(e)) return e;
  const r = vo(e), n = r ? YO(e) : e;
  let s = "";
  for (const i of n)
    s += LN.parse(VN, "cookie-octet", i).success ? i : RN(i);
  return r ? XO(s) : s;
};
new it();
new Ss();
const UN = (t) => {
  if (!ew(t, {
    strict: !1
  }))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, JN = "%3D", HN = "%26", GN = (t) => BN(t).replace(/[=&]/gu, (e) => e === "=" ? JN : HN), cf = (t, e = {}) => qN(t, pi({
  encoders: {
    name: QO,
    value: GN
  },
  validators: {
    name: UN,
    value: tw
  }
}, e));
function KN({
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
    u = af(c, {
      [s]: e
    }, {
      encoder: (l) => Vg(yo(l, f))
    });
  } else
    u = af(c, {
      [s]: e
    }, {
      encoder: (f) => ff({
        key: r.name,
        value: f,
        style: i || "simple",
        explode: o ?? !1,
        escape: "reserved"
      })
    });
  t.url = n + u;
}
function zN({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const n = Object.keys(r.content)[0], s = yo(e, n);
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
const WN = ["accept", "authorization", "content-type"];
function YN({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(WN.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = yo(r, n);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = ff({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function XN({
  req: t,
  parameter: e,
  value: r
}) {
  const {
    name: n
  } = e;
  if (t.headers = t.headers || {}, r !== void 0 && e.content) {
    const i = Object.keys(e.content)[0], o = yo(r, i);
    t.headers.Cookie = cf({
      [n]: o
    });
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    var s;
    const i = ff({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: (s = e.explode) !== null && s !== void 0 ? s : !1
    }), o = Array.isArray(r) && e.explode ? `${n}=${i}` : i;
    t.headers.Cookie = cf({
      [n]: o
    });
  }
}
const QN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: XN,
  header: YN,
  path: KN,
  query: zN
}, Symbol.toStringTag, { value: "Module" })), ZN = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: rw
} = ZN;
function eD(t, e) {
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
  e = tD({
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
      return y >= 200 && y < 300 && ht(g.content);
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
function tD({
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
            const v = m.username || "", g = m.password || "", y = rw(`${v}:${g}`);
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
function rD(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = nD({
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
function nD({
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
            const b = m.username || "", O = m.password || "";
            m.base64 = rw(`${b}:${O}`), s.headers.authorization = `Basic ${m.base64}`;
          }
        else v === "oauth2" && y && (x = !x || x.toLowerCase() === "bearer" ? "Bearer" : x, s.headers.authorization = `${x} ${y}`);
    });
  }), s);
}
const kg = (t) => Array.isArray(t) ? t : [], pn = (t, {
  recurse: e = !0,
  depth: r = 1
} = {}) => {
  if (ht(t)) {
    if (t.type === "object" || t.type === "array" || Array.isArray(t.type) && (t.type.includes("object") || t.type.includes("array")))
      return t;
    if (!(r > qg) && e) {
      const n = Array.isArray(t.oneOf) ? t.oneOf.find((i) => pn(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (n) return n;
      const s = Array.isArray(t.anyOf) ? t.anyOf.find((i) => pn(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (s) return s;
    }
  }
}, kl = ({
  value: t,
  silentFail: e = !1
}) => {
  try {
    const r = JSON.parse(t);
    if (ht(r) || Array.isArray(r))
      return r;
    if (!e)
      throw new Error("Expected JSON serialized object or array");
  } catch {
    if (!e)
      throw new Error("Could not parse parameter value string as JSON Object or JSON Array");
  }
  return t;
}, Ts = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, Cs), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
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
class sD extends bt {
}
const iD = (t, e) => e.filter((r) => r.name === t), oD = (t) => {
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
}, aD = {
  buildRequest: nw
};
function cD({
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
  const u = t || e || kr;
  s && i && !n && (n = KO(s, i));
  const f = aD.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: u,
    ...c
  });
  return f.body && (ht(f.body) || Array.isArray(f.body)) && (f.body = JSON.stringify(f.body)), u(f);
}
function nw(t) {
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
  const g = xh(e);
  p || (g ? p = QN : p = ON);
  let x = {
    url: "",
    credentials: l && l.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  d && (x.signal = d), i && (x.requestInterceptor = i), o && (x.responseInterceptor = o), c && (x.userFetch = c);
  const b = zk(e, r);
  if (!b)
    throw new sD(`Operation ${r} not found`);
  const {
    operation: O = {},
    method: A,
    pathName: _
  } = b;
  if (v = v ?? sw({
    spec: e,
    scheme: s,
    contextUrl: a,
    server: u,
    serverVariables: f,
    pathName: _,
    method: A,
    serverVariableEncoder: h
  }), x.url += v, !r)
    return delete x.cookies, x;
  x.url += _, x.method = `${A}`.toUpperCase(), m = m || {};
  const E = e.paths[_] || {};
  n && (x.headers.accept = n);
  const I = oD([].concat(kg(O.parameters)).concat(kg(E.parameters)));
  I.forEach((S) => {
    const P = p[S.in];
    let T;
    if (S.in === "body" && S.schema && S.schema.properties && (T = m), T = S && S.name && m[S.name], typeof T > "u" ? T = S && S.name && m[`${S.in}.${S.name}`] : iD(S.name, I).length > 1 && console.warn(`Parameter '${S.name}' is ambiguous because the defined spec has more than one parameter with the name: '${S.name}' and the passed-in parameter values did not define an 'in' value.`), T !== null) {
      if (typeof S.default < "u" && typeof T > "u" && (T = S.default), typeof T > "u" && S.required && !S.allowEmptyValue)
        throw new Error(`Required parameter ${S.name} is not provided`);
      g && typeof T == "string" && (ln("type", S.schema) && typeof S.schema.type == "string" && pn(S.schema, {
        recurse: !1
      }) ? T = kl({
        value: T,
        silentFail: !1
      }) : ln("type", S.schema) && Array.isArray(S.schema.type) && pn(S.schema, {
        recurse: !1
      }) ? T = kl({
        value: T,
        silentFail: !0
      }) : !ln("type", S.schema) && pn(S.schema, {
        recurse: !0
      }) && (T = kl({
        value: T,
        silentFail: !0
      }))), P && P({
        req: x,
        parameter: S,
        value: T,
        operation: O,
        spec: e,
        baseURL: v
      });
    }
  });
  const C = {
    ...t,
    operation: O
  };
  if (g ? x = eD(C, x) : x = rD(C, x), x.cookies && Object.keys(x.cookies).length > 0) {
    const S = cf(x.cookies);
    yi(x.headers.Cookie) ? x.headers.Cookie += `; ${S}` : x.headers.Cookie = S;
  }
  return x.cookies && delete x.cookies, hf(x);
}
const uf = (t) => t ? t.replace(/\W/g, "") : null;
function sw(t) {
  return xh(t.spec) ? uD(t) : fD(t);
}
const Nl = (t) => Array.isArray(t) && t.length > 0;
function uD({
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
  const d = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 || (a = a[(r || "").toLowerCase()]) === null || a === void 0 ? void 0 : a.servers, h = t == null || (c = t.paths) === null || c === void 0 || (c = c[e]) === null || c === void 0 ? void 0 : c.servers, m = t?.servers;
  if (u = Nl(d) ? d : Nl(h) ? h : Nl(m) ? m : [Dg], n && (l = u.find((p) => p.url === n), l && (f = n)), f || ([l] = u, f = l.url), aN(f, {
    strict: !0
  })) {
    const p = Object.entries({
      ...l.variables
    }).reduce((v, [g, y]) => (v[g] = y.default, v), {});
    f = fN(f, {
      ...p,
      ...i
    }, {
      encoder: typeof o == "function" ? o : _x
    });
  }
  return lD(f, s);
}
function lD(t = "", e = "") {
  const r = Ts(t && e ? Pe(e, t) : t), n = Ts(e), s = uf(r.protocol) || uf(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function fD({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = Ts(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || uf(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
ae.http = kr;
ae.makeHttp = B0.bind(null, ae.http);
ae.resolveStrategies = {
  "openapi-3-1-apidom": Gk,
  "openapi-3-0": QS,
  "openapi-2-0": XS,
  generic: zS
};
ae.resolve = ZS({
  strategies: [ae.resolveStrategies["openapi-3-1-apidom"], ae.resolveStrategies["openapi-3-0"], ae.resolveStrategies["openapi-2-0"], ae.resolveStrategies.generic]
});
ae.resolveSubtree = KT({
  strategies: [ae.resolveStrategies["openapi-3-1-apidom"], ae.resolveStrategies["openapi-3-0"], ae.resolveStrategies["openapi-2-0"], ae.resolveStrategies.generic]
});
ae.execute = cD;
ae.serializeRes = Cb;
ae.serializeHeaders = Tb;
ae.clearCache = VT;
ae.makeApisTagOperation = Zk;
ae.buildRequest = nw;
ae.helpers = {
  opId: qn
};
ae.getBaseUrl = sw;
ae.apidom = {
  resolve: {
    resolvers: {
      HTTPResolverSwaggerClient: qO
    }
  },
  parse: {
    parsers: {
      JsonParser: LO,
      YamlParser: VO,
      OpenApiJson3_1Parser: BO,
      OpenApiYaml3_1Parser: UO
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: HO
    }
  }
};
function ae(t, e = {}) {
  if (typeof t == "string" ? e.url = t : e = t, !(this instanceof ae))
    return new ae(e);
  Object.assign(this, e);
  const r = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, ae.makeApisTagOperation(this)), this));
  return r.client = this, r;
}
ae.prototype = {
  http: kr,
  execute(t) {
    return this.applyDefaults(), ae.execute({
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
    return ae.resolve({
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
ae.prototype.applyDefaults = function() {
  const {
    spec: e
  } = this, r = this.url;
  if (WS(e) && Wk(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (xh(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [Dg]);
  }
};
const {
  helpers: r2
} = ae;
export {
  ae as S
};
