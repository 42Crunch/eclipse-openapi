var HE = Object.defineProperty;
var ad = (t) => {
  throw TypeError(t);
};
var GE = (t, e, r) => e in t ? HE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var A = (t, e, r) => GE(t, typeof e != "symbol" ? e + "" : e, r), cd = (t, e, r) => e.has(t) || ad("Cannot " + r);
var ta = (t, e, r) => (cd(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ud = (t, e, r) => e.has(t) ? ad("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ra = (t, e, r, n) => (cd(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import { q as Di, W as _r } from "./TriangleExclamation.D70Relru.js";
const Tb = "application/json, application/yaml", Rs = "https://swagger.io", Cb = Object.freeze({
  url: "/"
}), $b = 3e3, {
  fetch: KE,
  Response: zE,
  Headers: WE,
  Request: YE,
  FormData: XE,
  File: QE,
  Blob: ZE
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = KE);
typeof globalThis.Headers > "u" && (globalThis.Headers = WE);
typeof globalThis.Request > "u" && (globalThis.Request = YE);
typeof globalThis.Response > "u" && (globalThis.Response = zE);
typeof globalThis.FormData > "u" && (globalThis.FormData = XE);
typeof globalThis.File > "u" && (globalThis.File = QE);
typeof globalThis.Blob > "u" && (globalThis.Blob = ZE);
function _h(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function Ib(t, e) {
  return Array.isArray(t) && t.some((r) => _h(r, e));
}
class wf extends File {
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
const ew = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, tw = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function Fb(t, e = "reserved") {
  return [...t].map((r) => {
    if (tw(r) || ew(r) && e === "unsafe")
      return r;
    const n = new TextEncoder();
    return Array.from(n.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function Rh(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? rw(t) : typeof e == "object" ? nw(t) : sw(t);
}
function Me(t, e = !1) {
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && typeof t == "string" && t.length > 0 ? Fb(t, e) : t ?? "";
}
function rw({
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
function nw({
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
function sw({
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
const iw = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, ow = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function Mb(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (f) => f.toString() : (f) => encodeURIComponent(f), u = c(t);
  if (typeof a > "u" && s)
    return [[u, ""]];
  if (_h(a) || Ib(a))
    return [[u, a]];
  if (i)
    return ld(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((f) => f !== "undefined")) {
      const {
        style: f,
        explode: l,
        allowReserved: d
      } = o;
      return ld(t, a, r, {
        style: f,
        explode: l,
        allowReserved: d
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const d = typeof a == "string" ? a : JSON.stringify(a), h = c(d), v = new wf(h, "blob", {
          type: o.contentType
        });
        return [[u, v]];
      }
      const f = c(String(a)), l = new wf(f, "blob", {
        type: o.contentType
      });
      return [[u, l]];
    }
    return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) && a.every((f) => typeof f != "object") ? [[u, a.map(c).join(",")]] : [[u, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) ? n === "multi" ? [[u, a.map(c)]] : [[u, a.map(c).join(ow[n || "csv"])]] : [[u, ""]];
}
function ld(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (u) => Me(u, o), c = r ? (u) => u : (u) => a(u);
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(iw[s])]] : s === "deepObject" ? Object.keys(e).map((u) => [c(`${t}[${u}]`), a(e[u])]) : i ? Object.keys(e).map((u) => [c(u), a(e[u])]) : [[c(t), Object.keys(e).map((u) => [`${c(u)},${a(e[u])}`]).join(",")]];
}
function aw(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of Mb(r, n, !0))
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
const cw = (t, {
  encode: e = !0
} = {}) => {
  const r = (i, o, a) => (Array.isArray(a) ? a.reduce((c, u) => r(i, o, u), i) : a instanceof Date ? i.append(o, a.toISOString()) : typeof a == "object" ? Object.entries(a).reduce((c, [u, f]) => r(i, `${o}[${u}]`, f), i) : i.append(o, a), i), n = Object.entries(t).reduce((i, [o, a]) => r(i, o, a), new URLSearchParams()), s = String(n);
  return e ? s : decodeURIComponent(s);
};
function fd(t) {
  const e = Object.keys(t).reduce((r, n) => {
    for (const [s, i] of Mb(n, t[n]))
      i instanceof wf ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return cw(e, {
    encode: !1
  });
}
function Th(t = {}) {
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
      return _h(c) || Ib(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = aw(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = fd(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const u = new URLSearchParams(o);
      Object.keys(r).forEach((l) => u.delete(l)), a = String(u);
    }
    const c = s(a, fd(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function kb(t) {
  return typeof t > "u" || t === null;
}
function uw(t) {
  return typeof t == "object" && t !== null;
}
function lw(t) {
  return Array.isArray(t) ? t : kb(t) ? [] : [t];
}
function fw(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function hw(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function pw(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var dw = kb, mw = uw, vw = lw, yw = hw, gw = pw, bw = fw, Pe = {
  isNothing: dw,
  isObject: mw,
  toArray: vw,
  repeat: yw,
  isNegativeZero: gw,
  extend: bw
};
function Nb(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function vn(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Nb(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
vn.prototype = Object.create(Error.prototype);
vn.prototype.constructor = vn;
vn.prototype.toString = function(e) {
  return this.name + ": " + Nb(this, e);
};
var Be = vn;
function na(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function sa(t, e) {
  return Pe.repeat(" ", e - t.length) + t;
}
function xw(t, e) {
  if (e = Object.create(e || null), !t.buffer) return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, u, f = Math.min(t.line + e.linesAfter, s.length).toString().length, l = e.maxLength - (e.indent + f + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    u = na(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      l
    ), a = Pe.repeat(" ", e.indent) + sa((t.line - c + 1).toString(), f) + " | " + u.str + `
` + a;
  for (u = na(t.buffer, n[o], s[o], t.position, l), a += Pe.repeat(" ", e.indent) + sa((t.line + 1).toString(), f) + " | " + u.str + `
`, a += Pe.repeat("-", e.indent + f + 3 + u.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    u = na(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      l
    ), a += Pe.repeat(" ", e.indent) + sa((t.line + c + 1).toString(), f) + " | " + u.str + `
`;
  return a.replace(/\n$/, "");
}
var Sw = xw, Ow = [
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
], Ew = [
  "scalar",
  "sequence",
  "mapping"
];
function ww(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(n) {
      e[String(n)] = r;
    });
  }), e;
}
function Aw(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (Ow.indexOf(r) === -1)
      throw new Be('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = ww(e.styleAliases || null), Ew.indexOf(this.kind) === -1)
    throw new Be('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var ke = Aw;
function hd(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function jw() {
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
function Af(t) {
  return this.extend(t);
}
Af.prototype.extend = function(e) {
  var r = [], n = [];
  if (e instanceof ke)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  else
    throw new Be("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof ke))
      throw new Be("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new Be("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new Be("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(i) {
    if (!(i instanceof ke))
      throw new Be("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(Af.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = hd(s, "implicit"), s.compiledExplicit = hd(s, "explicit"), s.compiledTypeMap = jw(s.compiledImplicit, s.compiledExplicit), s;
};
var Db = Af, qb = new ke("tag:yaml.org,2002:str", {
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
function Pw(t) {
  if (t === null) return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function _w() {
  return null;
}
function Rw(t) {
  return t === null;
}
var Ub = new ke("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Pw,
  construct: _w,
  predicate: Rw,
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
function Tw(t) {
  if (t === null) return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function Cw(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function $w(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var Jb = new ke("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Tw,
  construct: Cw,
  predicate: $w,
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
function Iw(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function Fw(t) {
  return 48 <= t && t <= 55;
}
function Mw(t) {
  return 48 <= t && t <= 57;
}
function kw(t) {
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
          if (!Iw(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!Fw(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < e; r++)
    if (s = t[r], s !== "_") {
      if (!Mw(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function Nw(t) {
  var e = t, r = 1, n;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), n = e[0], (n === "-" || n === "+") && (n === "-" && (r = -1), e = e.slice(1), n = e[0]), e === "0") return 0;
  if (n === "0") {
    if (e[1] === "b") return r * parseInt(e.slice(2), 2);
    if (e[1] === "x") return r * parseInt(e.slice(2), 16);
    if (e[1] === "o") return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function Dw(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Pe.isNegativeZero(t);
}
var Hb = new ke("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: kw,
  construct: Nw,
  predicate: Dw,
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
}), qw = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Lw(t) {
  return !(t === null || !qw.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function Vw(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var Bw = /^[-+]?[0-9]+e/;
function Uw(t, e) {
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
  else if (Pe.isNegativeZero(t))
    return "-0.0";
  return r = t.toString(10), Bw.test(r) ? r.replace("e", ".e") : r;
}
function Jw(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Pe.isNegativeZero(t));
}
var Gb = new ke("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Lw,
  construct: Vw,
  predicate: Jw,
  represent: Uw,
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
function Hw(t) {
  return t === null ? !1 : Wb.exec(t) !== null || Yb.exec(t) !== null;
}
function Gw(t) {
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
function Kw(t) {
  return t.toISOString();
}
var Xb = new ke("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Hw,
  construct: Gw,
  instanceOf: Date,
  represent: Kw
});
function zw(t) {
  return t === "<<" || t === null;
}
var Qb = new ke("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: zw
}), Ch = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Ww(t) {
  if (t === null) return !1;
  var e, r, n = 0, s = t.length, i = Ch;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0) return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function Yw(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = Ch, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function Xw(t) {
  var e = "", r = 0, n, s, i = t.length, o = Ch;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function Qw(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Zb = new ke("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Ww,
  construct: Yw,
  predicate: Qw,
  represent: Xw
}), Zw = Object.prototype.hasOwnProperty, e0 = Object.prototype.toString;
function t0(t) {
  if (t === null) return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, e0.call(s) !== "[object Object]") return !1;
    for (i in s)
      if (Zw.call(s, i))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (e.indexOf(i) === -1) e.push(i);
    else return !1;
  }
  return !0;
}
function r0(t) {
  return t !== null ? t : [];
}
var ex = new ke("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: t0,
  construct: r0
}), n0 = Object.prototype.toString;
function s0(t) {
  if (t === null) return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], n0.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1)) return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function i0(t) {
  if (t === null) return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var tx = new ke("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: s0,
  construct: i0
}), o0 = Object.prototype.hasOwnProperty;
function a0(t) {
  if (t === null) return !0;
  var e, r = t;
  for (e in r)
    if (o0.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function c0(t) {
  return t !== null ? t : {};
}
var rx = new ke("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: a0,
  construct: c0
}), $h = zb.extend({
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
}), Gt = Object.prototype.hasOwnProperty, Ts = 1, nx = 2, sx = 3, Cs = 4, ia = 1, u0 = 2, pd = 3, l0 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, f0 = /[\x85\u2028\u2029]/, h0 = /[,\[\]\{\}]/, ix = /^(?:!|!!|![a-z\-]+!)$/i, ox = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function dd(t) {
  return Object.prototype.toString.call(t);
}
function mt(t) {
  return t === 10 || t === 13;
}
function ir(t) {
  return t === 9 || t === 32;
}
function He(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Rr(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function p0(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function d0(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function m0(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function md(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function v0(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var ax = new Array(256), cx = new Array(256);
for (var Ar = 0; Ar < 256; Ar++)
  ax[Ar] = md(Ar) ? 1 : 0, cx[Ar] = md(Ar);
function y0(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || $h, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
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
  return r.snippet = Sw(r), new Be(e, r);
}
function B(t, e) {
  throw ux(t, e);
}
function $s(t, e) {
  t.onWarning && t.onWarning.call(null, ux(t, e));
}
var vd = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && B(e, "duplication of %YAML directive"), n.length !== 1 && B(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && B(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && B(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && $s(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && B(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], ix.test(s) || B(e, "ill-formed tag handle (first argument) of the TAG directive"), Gt.call(e.tagMap, s) && B(e, 'there is a previously declared suffix for "' + s + '" tag handle'), ox.test(i) || B(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      B(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function Ht(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || B(t, "expected valid JSON character");
    else l0.test(a) && B(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function yd(t, e, r, n) {
  var s, i, o, a;
  for (Pe.isObject(r) || B(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], Gt.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function Tr(t, e, r, n, s, i, o, a, c) {
  var u, f;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), u = 0, f = s.length; u < f; u += 1)
      Array.isArray(s[u]) && B(t, "nested arrays are not supported inside keys"), typeof s == "object" && dd(s[u]) === "[object Object]" && (s[u] = "[object Object]");
  if (typeof s == "object" && dd(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (u = 0, f = i.length; u < f; u += 1)
        yd(t, e, i[u], r);
    else
      yd(t, e, i, r);
  else
    !t.json && !Gt.call(r, s) && Gt.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, B(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function Ih(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : B(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function Oe(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; ir(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (mt(s))
      for (Ih(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && $s(t, "deficient indentation"), n;
}
function qi(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || He(r)));
}
function Fh(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Pe.repeat(`
`, e - 1));
}
function g0(t, e, r) {
  var n, s, i, o, a, c, u, f, l = t.kind, d = t.result, h;
  if (h = t.input.charCodeAt(t.position), He(h) || Rr(h) || h === 35 || h === 38 || h === 42 || h === 33 || h === 124 || h === 62 || h === 39 || h === 34 || h === 37 || h === 64 || h === 96 || (h === 63 || h === 45) && (s = t.input.charCodeAt(t.position + 1), He(s) || r && Rr(s)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; h !== 0; ) {
    if (h === 58) {
      if (s = t.input.charCodeAt(t.position + 1), He(s) || r && Rr(s))
        break;
    } else if (h === 35) {
      if (n = t.input.charCodeAt(t.position - 1), He(n))
        break;
    } else {
      if (t.position === t.lineStart && qi(t) || r && Rr(h))
        break;
      if (mt(h))
        if (c = t.line, u = t.lineStart, f = t.lineIndent, Oe(t, !1, -1), t.lineIndent >= e) {
          a = !0, h = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = u, t.lineIndent = f;
          break;
        }
    }
    a && (Ht(t, i, o, !1), Fh(t, t.line - c), i = o = t.position, a = !1), ir(h) || (o = t.position + 1), h = t.input.charCodeAt(++t.position);
  }
  return Ht(t, i, o, !1), t.result ? !0 : (t.kind = l, t.result = d, !1);
}
function b0(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (Ht(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else mt(r) ? (Ht(t, n, s, !0), Fh(t, Oe(t, !1, e)), n = s = t.position) : t.position === t.lineStart && qi(t) ? B(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  B(t, "unexpected end of the stream within a single quoted scalar");
}
function x0(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return Ht(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (Ht(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), mt(a))
        Oe(t, !1, e);
      else if (a < 256 && ax[a])
        t.result += cx[a], t.position++;
      else if ((o = d0(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = p0(a)) >= 0 ? i = (i << 4) + o : B(t, "expected hexadecimal character");
        t.result += v0(i), t.position++;
      } else
        B(t, "unknown escape sequence");
      r = n = t.position;
    } else mt(a) ? (Ht(t, r, n, !0), Fh(t, Oe(t, !1, e)), r = n = t.position) : t.position === t.lineStart && qi(t) ? B(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  B(t, "unexpected end of the stream within a double quoted scalar");
}
function S0(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, u, f, l, d, h, v = /* @__PURE__ */ Object.create(null), p, y, g, m;
  if (m = t.input.charCodeAt(t.position), m === 91)
    f = 93, h = !1, a = [];
  else if (m === 123)
    f = 125, h = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), m = t.input.charCodeAt(++t.position); m !== 0; ) {
    if (Oe(t, !0, e), m = t.input.charCodeAt(t.position), m === f)
      return t.position++, t.tag = o, t.anchor = c, t.kind = h ? "mapping" : "sequence", t.result = a, !0;
    r ? m === 44 && B(t, "expected the node content, but found ','") : B(t, "missed comma between flow collection entries"), y = p = g = null, l = d = !1, m === 63 && (u = t.input.charCodeAt(t.position + 1), He(u) && (l = d = !0, t.position++, Oe(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, Mr(t, e, Ts, !1, !0), y = t.tag, p = t.result, Oe(t, !0, e), m = t.input.charCodeAt(t.position), (d || t.line === n) && m === 58 && (l = !0, m = t.input.charCodeAt(++t.position), Oe(t, !0, e), Mr(t, e, Ts, !1, !0), g = t.result), h ? Tr(t, a, v, y, p, g, n, s, i) : l ? a.push(Tr(t, null, v, y, p, g, n, s, i)) : a.push(p), Oe(t, !0, e), m = t.input.charCodeAt(t.position), m === 44 ? (r = !0, m = t.input.charCodeAt(++t.position)) : r = !1;
  }
  B(t, "unexpected end of the stream within a flow collection");
}
function O0(t, e) {
  var r, n, s = ia, i = !1, o = !1, a = e, c = 0, u = !1, f, l;
  if (l = t.input.charCodeAt(t.position), l === 124)
    n = !1;
  else if (l === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; l !== 0; )
    if (l = t.input.charCodeAt(++t.position), l === 43 || l === 45)
      ia === s ? s = l === 43 ? pd : u0 : B(t, "repeat of a chomping mode identifier");
    else if ((f = m0(l)) >= 0)
      f === 0 ? B(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? B(t, "repeat of an indentation width identifier") : (a = e + f - 1, o = !0);
    else
      break;
  if (ir(l)) {
    do
      l = t.input.charCodeAt(++t.position);
    while (ir(l));
    if (l === 35)
      do
        l = t.input.charCodeAt(++t.position);
      while (!mt(l) && l !== 0);
  }
  for (; l !== 0; ) {
    for (Ih(t), t.lineIndent = 0, l = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && l === 32; )
      t.lineIndent++, l = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), mt(l)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === pd ? t.result += Pe.repeat(`
`, i ? 1 + c : c) : s === ia && i && (t.result += `
`);
      break;
    }
    for (n ? ir(l) ? (u = !0, t.result += Pe.repeat(`
`, i ? 1 + c : c)) : u ? (u = !1, t.result += Pe.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += Pe.repeat(`
`, c) : t.result += Pe.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !mt(l) && l !== 0; )
      l = t.input.charCodeAt(++t.position);
    Ht(t, r, t.position, !1);
  }
  return !0;
}
function gd(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, B(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !He(o)))); ) {
    if (a = !0, t.position++, Oe(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, Mr(t, e, sx, !1, !0), i.push(t.result), Oe(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      B(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function E0(t, e, r) {
  var n, s, i, o, a, c, u = t.tag, f = t.anchor, l = {}, d = /* @__PURE__ */ Object.create(null), h = null, v = null, p = null, y = !1, g = !1, m;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = l), m = t.input.charCodeAt(t.position); m !== 0; ) {
    if (!y && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, B(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, (m === 63 || m === 58) && He(n))
      m === 63 ? (y && (Tr(t, l, d, h, v, null, o, a, c), h = v = p = null), g = !0, y = !0, s = !0) : y ? (y = !1, s = !0) : B(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, m = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !Mr(t, r, nx, !1, !0))
        break;
      if (t.line === i) {
        for (m = t.input.charCodeAt(t.position); ir(m); )
          m = t.input.charCodeAt(++t.position);
        if (m === 58)
          m = t.input.charCodeAt(++t.position), He(m) || B(t, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Tr(t, l, d, h, v, null, o, a, c), h = v = p = null), g = !0, y = !1, s = !1, h = t.tag, v = t.result;
        else if (g)
          B(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = u, t.anchor = f, !0;
      } else if (g)
        B(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = u, t.anchor = f, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (y && (o = t.line, a = t.lineStart, c = t.position), Mr(t, e, Cs, !0, s) && (y ? v = t.result : p = t.result), y || (Tr(t, l, d, h, v, p, o, a, c), h = v = p = null), Oe(t, !0, -1), m = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && m !== 0)
      B(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return y && Tr(t, l, d, h, v, null, o, a, c), g && (t.tag = u, t.anchor = f, t.kind = "mapping", t.result = l), g;
}
function w0(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33) return !1;
  if (t.tag !== null && B(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : B(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !He(o); )
      o === 33 && (n ? B(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), ix.test(s) || B(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), h0.test(i) && B(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !ox.test(i) && B(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    B(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : Gt.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : B(t, 'undeclared tag handle "' + s + '"'), !0;
}
function A0(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38) return !1;
  for (t.anchor !== null && B(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !He(r) && !Rr(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && B(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function j0(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42) return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !He(n) && !Rr(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && B(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), Gt.call(t.anchorMap, r) || B(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], Oe(t, !0, -1), !0;
}
function Mr(t, e, r, n, s) {
  var i, o, a, c = 1, u = !1, f = !1, l, d, h, v, p, y;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = Cs === r || sx === r, n && Oe(t, !0, -1) && (u = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; w0(t) || A0(t); )
      Oe(t, !0, -1) ? (u = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = u || s), (c === 1 || Cs === r) && (Ts === r || nx === r ? p = e : p = e + 1, y = t.position - t.lineStart, c === 1 ? a && (gd(t, y) || E0(t, y, p)) || S0(t, p) ? f = !0 : (o && O0(t, p) || b0(t, p) || x0(t, p) ? f = !0 : j0(t) ? (f = !0, (t.tag !== null || t.anchor !== null) && B(t, "alias node should not have any properties")) : g0(t, p, Ts === r) && (f = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (f = a && gd(t, y))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && B(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), l = 0, d = t.implicitTypes.length; l < d; l += 1)
      if (v = t.implicitTypes[l], v.resolve(t.result)) {
        t.result = v.construct(t.result), t.tag = v.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (Gt.call(t.typeMap[t.kind || "fallback"], t.tag))
      v = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (v = null, h = t.typeMap.multi[t.kind || "fallback"], l = 0, d = h.length; l < d; l += 1)
        if (t.tag.slice(0, h[l].tag.length) === h[l].tag) {
          v = h[l];
          break;
        }
    v || B(t, "unknown tag !<" + t.tag + ">"), t.result !== null && v.kind !== t.kind && B(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + v.kind + '", not "' + t.kind + '"'), v.resolve(t.result, t.tag) ? (t.result = v.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : B(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || f;
}
function P0(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (Oe(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !He(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && B(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; ir(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !mt(o));
        break;
      }
      if (mt(o)) break;
      for (r = t.position; o !== 0 && !He(o); )
        o = t.input.charCodeAt(++t.position);
      s.push(t.input.slice(r, t.position));
    }
    o !== 0 && Ih(t), Gt.call(vd, n) ? vd[n](t, n, s) : $s(t, 'unknown document directive "' + n + '"');
  }
  if (Oe(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, Oe(t, !0, -1)) : i && B(t, "directives end mark is expected"), Mr(t, t.lineIndent - 1, Cs, !1, !0), Oe(t, !0, -1), t.checkLineBreaks && f0.test(t.input.slice(e, t.position)) && $s(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && qi(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, Oe(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    B(t, "end of the stream or a document separator is expected");
  else
    return;
}
function lx(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new y0(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, B(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    P0(r);
  return r.documents;
}
function _0(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = lx(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function R0(t, e) {
  var r = lx(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Be("expected a single document in the stream, but found more");
  }
}
var T0 = _0, C0 = R0, fx = {
  loadAll: T0,
  load: C0
}, hx = Object.prototype.toString, px = Object.prototype.hasOwnProperty, Mh = 65279, $0 = 9, yn = 10, I0 = 13, F0 = 32, M0 = 33, k0 = 34, jf = 35, N0 = 37, D0 = 38, q0 = 39, L0 = 42, dx = 44, V0 = 45, Is = 58, B0 = 61, U0 = 62, J0 = 63, H0 = 64, mx = 91, vx = 93, G0 = 96, yx = 123, K0 = 124, gx = 125, De = {};
De[0] = "\\0";
De[7] = "\\a";
De[8] = "\\b";
De[9] = "\\t";
De[10] = "\\n";
De[11] = "\\v";
De[12] = "\\f";
De[13] = "\\r";
De[27] = "\\e";
De[34] = '\\"';
De[92] = "\\\\";
De[133] = "\\N";
De[160] = "\\_";
De[8232] = "\\L";
De[8233] = "\\P";
var z0 = [
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
], W0 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function Y0(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null) return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && px.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function X0(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new Be("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Pe.repeat("0", n - e.length) + e;
}
var Q0 = 1, gn = 2;
function Z0(t) {
  this.schema = t.schema || $h, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Pe.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = Y0(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? gn : Q0, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function bd(t, e) {
  for (var r = Pe.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function Pf(t, e) {
  return `
` + Pe.repeat(" ", t.indent * e);
}
function e1(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function Fs(t) {
  return t === F0 || t === $0;
}
function bn(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== Mh || 65536 <= t && t <= 1114111;
}
function xd(t) {
  return bn(t) && t !== Mh && t !== I0 && t !== yn;
}
function Sd(t, e, r) {
  var n = xd(t), s = n && !Fs(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== dx && t !== mx && t !== vx && t !== yx && t !== gx) && t !== jf && !(e === Is && !s) || xd(e) && !Fs(e) && t === jf || e === Is && s
  );
}
function t1(t) {
  return bn(t) && t !== Mh && !Fs(t) && t !== V0 && t !== J0 && t !== Is && t !== dx && t !== mx && t !== vx && t !== yx && t !== gx && t !== jf && t !== D0 && t !== L0 && t !== M0 && t !== K0 && t !== B0 && t !== U0 && t !== q0 && t !== k0 && t !== N0 && t !== H0 && t !== G0;
}
function r1(t) {
  return !Fs(t) && t !== Is;
}
function on(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function bx(t) {
  var e = /^\n* /;
  return e.test(t);
}
var xx = 1, _f = 2, Sx = 3, Ox = 4, Pr = 5;
function n1(t, e, r, n, s, i, o, a) {
  var c, u = 0, f = null, l = !1, d = !1, h = n !== -1, v = -1, p = t1(on(t, 0)) && r1(on(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = on(t, c), !bn(u))
        return Pr;
      p = p && Sd(u, f, a), f = u;
    }
  else {
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = on(t, c), u === yn)
        l = !0, h && (d = d || // Foldable line = too long, and not more-indented.
        c - v - 1 > n && t[v + 1] !== " ", v = c);
      else if (!bn(u))
        return Pr;
      p = p && Sd(u, f, a), f = u;
    }
    d = d || h && c - v - 1 > n && t[v + 1] !== " ";
  }
  return !l && !d ? p && !o && !s(t) ? xx : i === gn ? Pr : _f : r > 9 && bx(t) ? Pr : o ? i === gn ? Pr : _f : d ? Ox : Sx;
}
function s1(t, e, r, n, s) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === gn ? '""' : "''";
    if (!t.noCompatMode && (z0.indexOf(e) !== -1 || W0.test(e)))
      return t.quotingType === gn ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(u) {
      return e1(t, u);
    }
    switch (n1(
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
      case _f:
        return "'" + e.replace(/'/g, "''") + "'";
      case Sx:
        return "|" + Od(e, t.indent) + Ed(bd(e, i));
      case Ox:
        return ">" + Od(e, t.indent) + Ed(bd(i1(e, o), i));
      case Pr:
        return '"' + o1(e) + '"';
      default:
        throw new Be("impossible error: invalid scalar style");
    }
  }();
}
function Od(t, e) {
  var r = bx(t) ? String(e) : "", n = t[t.length - 1] === `
`, s = n && (t[t.length - 2] === `
` || t === `
`), i = s ? "+" : n ? "" : "-";
  return r + i + `
`;
}
function Ed(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function i1(t, e) {
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
function o1(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = on(t, s), n = De[r], !n && bn(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || X0(r);
  return e;
}
function a1(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (_t(t, e, a, !1, !1) || typeof a > "u" && _t(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function Ad(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (_t(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && _t(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += Pf(t, e)), t.dump && yn === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function c1(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, u, f;
  for (o = 0, a = i.length; o < a; o += 1)
    f = "", n !== "" && (f += ", "), t.condenseFlow && (f += '"'), c = i[o], u = r[c], t.replacer && (u = t.replacer.call(r, c, u)), _t(t, e, c, !1, !1) && (t.dump.length > 1024 && (f += "? "), f += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), _t(t, e, u, !1, !1) && (f += t.dump, n += f));
  t.tag = s, t.dump = "{" + n + "}";
}
function u1(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, u, f, l, d;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new Be("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    d = "", (!n || s !== "") && (d += Pf(t, e)), u = o[a], f = r[u], t.replacer && (f = t.replacer.call(r, u, f)), _t(t, e + 1, u, !0, !0, !0) && (l = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, l && (t.dump && yn === t.dump.charCodeAt(0) ? d += "?" : d += "? "), d += t.dump, l && (d += Pf(t, e)), _t(t, e + 1, f, !0, l) && (t.dump && yn === t.dump.charCodeAt(0) ? d += ":" : d += ": ", d += t.dump, s += d));
  t.tag = i, t.dump = s || "{}";
}
function jd(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, hx.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (px.call(a.represent, c))
          n = a.represent[c](e, c);
        else
          throw new Be("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = n;
      }
      return !0;
    }
  return !1;
}
function _t(t, e, r, n, s, i, o) {
  t.tag = null, t.dump = r, jd(t, r, !1) || jd(t, r, !0);
  var a = hx.call(t.dump), c = n, u;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var f = a === "[object Object]" || a === "[object Array]", l, d;
  if (f && (l = t.duplicates.indexOf(r), d = l !== -1), (t.tag !== null && t.tag !== "?" || d || t.indent !== 2 && e > 0) && (s = !1), d && t.usedDuplicates[l])
    t.dump = "*ref_" + l;
  else {
    if (f && d && !t.usedDuplicates[l] && (t.usedDuplicates[l] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (u1(t, e, t.dump, s), d && (t.dump = "&ref_" + l + t.dump)) : (c1(t, e, t.dump), d && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Ad(t, e - 1, t.dump, s) : Ad(t, e, t.dump, s), d && (t.dump = "&ref_" + l + t.dump)) : (a1(t, e, t.dump), d && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && s1(t, t.dump, e, i, c);
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
function l1(t, e) {
  var r = [], n = [], s, i;
  for (Rf(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function Rf(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        Rf(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        Rf(t[n[s]], e, r);
}
function f1(t, e) {
  e = e || {};
  var r = new Z0(e);
  r.noRefs || l1(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), _t(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var h1 = f1, p1 = {
  dump: h1
};
function kh(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var d1 = ke, m1 = Db, v1 = Bb, Ms = Kb, y1 = zb, g1 = $h, b1 = fx.load, x1 = fx.loadAll, S1 = p1.dump, O1 = Be, E1 = {
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
}, w1 = kh("safeLoad", "load"), A1 = kh("safeLoadAll", "loadAll"), j1 = kh("safeDump", "dump"), kr = {
  Type: d1,
  Schema: m1,
  FAILSAFE_SCHEMA: v1,
  JSON_SCHEMA: Ms,
  CORE_SCHEMA: y1,
  DEFAULT_SCHEMA: g1,
  load: b1,
  loadAll: x1,
  dump: S1,
  YAMLException: O1,
  types: E1,
  safeLoad: w1,
  safeLoadAll: A1,
  safeDump: j1
};
const P1 = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function _1(t, e) {
  return e && (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0) ? JSON.parse(t) : kr.load(t);
}
function R1(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function Ex(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = R1(n), e), {});
}
function wx(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: Ex(t.headers)
  }, s = n.headers["content-type"], i = r || P1(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = _1(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
async function Nr(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, e = Th(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await wx(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
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
function T1(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), n = Th(n), n = e(n), r(t(n)));
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
      Accept: Tb
    },
    credentials: s
  }).then((o) => o.body);
}
const Nh = (t) => {
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
  return e || r || Nr;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var C1 = /* @__PURE__ */ function() {
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
}(), $1 = Object.prototype.hasOwnProperty;
function Tf(t, e) {
  return $1.call(t, e);
}
function Cf(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var n = [];
  for (var s in t)
    Tf(t, s) && n.push(s);
  return n;
}
function Ge(t) {
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
function $f(t) {
  for (var e = 0, r = t.length, n; e < r; ) {
    if (n = t.charCodeAt(e), n >= 48 && n <= 57) {
      e++;
      continue;
    }
    return !1;
  }
  return !0;
}
function rr(t) {
  return t.indexOf("/") === -1 && t.indexOf("~") === -1 ? t : t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Px(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function If(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (If(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = Cf(t), s = n.length, i = 0; i < s; i++)
        if (If(t[n[i]]))
          return !0;
    }
  }
  return !1;
}
function Pd(t, e) {
  var r = [t];
  for (var n in e) {
    var s = typeof e[n] == "object" ? JSON.stringify(e[n], null, 2) : e[n];
    typeof s < "u" && r.push(n + ": " + s);
  }
  return r.join(`
`);
}
var _x = (
  /** @class */
  function(t) {
    C1(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, Pd(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = Pd(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  }(Error)
), ge = _x, I1 = Ge, Cr = {
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
    var n = xn(r, this.path);
    n && (n = Ge(n));
    var s = or(r, { op: "remove", path: this.from }).removed;
    return or(r, { op: "add", path: this.path, value: s }), { newDocument: r, removed: n };
  },
  copy: function(t, e, r) {
    var n = xn(r, this.from);
    return or(r, { op: "add", path: this.path, value: Ge(n) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: Sn(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, F1 = {
  add: function(t, e, r) {
    return $f(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
  },
  remove: function(t, e, r) {
    var n = t.splice(e, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(t, e, r) {
    var n = t[e];
    return t[e] = this.value, { newDocument: r, removed: n };
  },
  move: Cr.move,
  copy: Cr.copy,
  test: Cr.test,
  _get: Cr._get
};
function xn(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return or(t, r), r.value;
}
function or(t, e, r, n, s, i) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : ks(e, 0)), e.path === "") {
    var o = { newDocument: t };
    if (e.op === "add")
      return o.newDocument = e.value, o;
    if (e.op === "replace")
      return o.newDocument = e.value, o.removed = t, o;
    if (e.op === "move" || e.op === "copy")
      return o.newDocument = xn(t, e.from), e.op === "move" && (o.removed = t), o;
    if (e.op === "test") {
      if (o.test = Sn(t, e.value), o.test === !1)
        throw new ge("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
      return o.newDocument = t, o;
    } else {
      if (e.op === "remove")
        return o.removed = t, o.newDocument = null, o;
      if (e.op === "_get")
        return e.value = t, o;
      if (r)
        throw new ge("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", i, e, t);
      return o;
    }
  } else {
    n || (t = Ge(t));
    var a = e.path || "", c = a.split("/"), u = t, f = 1, l = c.length, d = void 0, h = void 0, v = void 0;
    for (typeof r == "function" ? v = r : v = ks; ; ) {
      if (h = c[f], h && h.indexOf("~") != -1 && (h = Px(h)), s && (h == "__proto__" || h == "prototype" && f > 0 && c[f - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && d === void 0 && (u[h] === void 0 ? d = c.slice(0, f).join("/") : f == l - 1 && (d = e.path), d !== void 0 && v(e, 0, t, d)), f++, Array.isArray(u)) {
        if (h === "-")
          h = u.length;
        else {
          if (r && !$f(h))
            throw new ge("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          $f(h) && (h = ~~h);
        }
        if (f >= l) {
          if (r && e.op === "add" && h > u.length)
            throw new ge("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = F1[e.op].call(e, u, h, t);
          if (o.test === !1)
            throw new ge("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (f >= l) {
        var o = Cr[e.op].call(e, u, h, t);
        if (o.test === !1)
          throw new ge("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (u = u[h], r && f < l && (!u || typeof u != "object"))
        throw new ge("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function Jt(t, e, r, n, s) {
  if (n === void 0 && (n = !0), s === void 0 && (s = !0), r && !Array.isArray(e))
    throw new ge("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (t = Ge(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = or(t, e[o], r, !0, s, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function M1(t, e, r) {
  var n = or(t, e);
  if (n.test === !1)
    throw new ge("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function ks(t, e, r, n) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new ge("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (Cr[t.op]) {
    if (typeof t.path != "string")
      throw new ge("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new ge('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new ge("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new ge("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && If(t.value))
      throw new ge("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", e, t, r);
    if (r) {
      if (t.op == "add") {
        var s = t.path.split("/").length, i = n.split("/").length;
        if (s !== i + 1 && s !== i)
          throw new ge("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", e, t, r);
      } else if (t.op === "replace" || t.op === "remove" || t.op === "_get") {
        if (t.path !== n)
          throw new ge("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", e, t, r);
      } else if (t.op === "move" || t.op === "copy") {
        var o = { op: "_get", path: t.from, value: void 0 }, a = Rx([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new ge("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else throw new ge("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function Rx(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new ge("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      Jt(Ge(e), Ge(t), r || !0);
    else {
      r = r || ks;
      for (var n = 0; n < t.length; n++)
        r(t[n], n, e, void 0);
    }
  } catch (s) {
    if (s instanceof ge)
      return s;
    throw s;
  }
}
function Sn(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    var r = Array.isArray(t), n = Array.isArray(e), s, i, o;
    if (r && n) {
      if (i = t.length, i != e.length)
        return !1;
      for (s = i; s-- !== 0; )
        if (!Sn(t[s], e[s]))
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
      if (o = a[s], !Sn(t[o], e[o]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
const k1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: ge,
  _areEquals: Sn,
  applyOperation: or,
  applyPatch: Jt,
  applyReducer: M1,
  deepClone: I1,
  getValueByPointer: xn,
  validate: Rx,
  validator: ks
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var Dh = /* @__PURE__ */ new WeakMap(), N1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  }()
), D1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  }()
);
function q1(t) {
  return Dh.get(t);
}
function L1(t, e) {
  return t.observers.get(e);
}
function V1(t, e) {
  t.observers.delete(e.callback);
}
function B1(t, e) {
  e.unobserve();
}
function U1(t, e) {
  var r = [], n, s = q1(t);
  if (!s)
    s = new N1(t), Dh.set(t, s);
  else {
    var i = L1(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = Ge(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      Ff(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    Ff(n), clearTimeout(n.next), V1(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new D1(e, n)), n;
}
function Ff(t, e) {
  e === void 0 && (e = !1);
  var r = Dh.get(t.object);
  qh(r.value, t.object, t.patches, "", e), t.patches.length && Jt(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function qh(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = Cf(e), o = Cf(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var u = o[c], f = t[u];
      if (Tf(e, u) && !(e[u] === void 0 && f !== void 0 && Array.isArray(e) === !1)) {
        var l = e[u];
        typeof f == "object" && f != null && typeof l == "object" && l != null && Array.isArray(f) === Array.isArray(l) ? qh(f, l, r, n + "/" + rr(u), s) : f !== l && (s && r.push({ op: "test", path: n + "/" + rr(u), value: Ge(f) }), r.push({ op: "replace", path: n + "/" + rr(u), value: Ge(l) }));
      } else Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + rr(u), value: Ge(f) }), r.push({ op: "remove", path: n + "/" + rr(u) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var u = i[c];
        !Tf(t, u) && e[u] !== void 0 && r.push({ op: "add", path: n + "/" + rr(u), value: Ge(e[u]) });
      }
  }
}
function J1(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return qh(t, e, n, "", r), n;
}
const H1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: J1,
  generate: Ff,
  observe: U1,
  unobserve: B1
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, k1, H1, {
  JsonPatchError: _x,
  deepClone: Ge,
  escapePathComponent: rr,
  unescapePathComponent: Px
});
var oa, _d;
function G1() {
  if (_d) return oa;
  _d = 1;
  var t = function(m) {
    return e(m) && !r(m);
  };
  function e(g) {
    return !!g && typeof g == "object";
  }
  function r(g) {
    var m = Object.prototype.toString.call(g);
    return m === "[object RegExp]" || m === "[object Date]" || i(g);
  }
  var n = typeof Symbol == "function" && Symbol.for, s = n ? Symbol.for("react.element") : 60103;
  function i(g) {
    return g.$$typeof === s;
  }
  function o(g) {
    return Array.isArray(g) ? [] : {};
  }
  function a(g, m) {
    return m.clone !== !1 && m.isMergeableObject(g) ? p(o(g), g, m) : g;
  }
  function c(g, m, b) {
    return g.concat(m).map(function(x) {
      return a(x, b);
    });
  }
  function u(g, m) {
    if (!m.customMerge)
      return p;
    var b = m.customMerge(g);
    return typeof b == "function" ? b : p;
  }
  function f(g) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(g).filter(function(m) {
      return Object.propertyIsEnumerable.call(g, m);
    }) : [];
  }
  function l(g) {
    return Object.keys(g).concat(f(g));
  }
  function d(g, m) {
    try {
      return m in g;
    } catch {
      return !1;
    }
  }
  function h(g, m) {
    return d(g, m) && !(Object.hasOwnProperty.call(g, m) && Object.propertyIsEnumerable.call(g, m));
  }
  function v(g, m, b) {
    var x = {};
    return b.isMergeableObject(g) && l(g).forEach(function(w) {
      x[w] = a(g[w], b);
    }), l(m).forEach(function(w) {
      h(g, w) || (d(g, w) && b.isMergeableObject(m[w]) ? x[w] = u(w, b)(g[w], m[w], b) : x[w] = a(m[w], b));
    }), x;
  }
  function p(g, m, b) {
    b = b || {}, b.arrayMerge = b.arrayMerge || c, b.isMergeableObject = b.isMergeableObject || t, b.cloneUnlessOtherwiseSpecified = a;
    var x = Array.isArray(m), w = Array.isArray(g), O = x === w;
    return O ? x ? b.arrayMerge(g, m, b) : v(g, m, b) : a(m, b);
  }
  p.all = function(m, b) {
    if (!Array.isArray(m))
      throw new Error("first argument should be an array");
    return m.reduce(function(x, w) {
      return p(x, w, b);
    }, {});
  };
  var y = p;
  return oa = y, oa;
}
var K1 = G1();
const z1 = /* @__PURE__ */ Di(K1), ce = {
  add: Y1,
  replace: ws,
  remove: X1,
  merge: Q1,
  mergeDeep: Z1,
  context: eA,
  getIn: sA,
  applyPatch: W1,
  parentPathMatch: nA,
  flatten: An,
  fullyNormalizeArray: iA,
  normalizeArray: Cx,
  isPromise: oA,
  forEachNew: tA,
  forEachNewPrimitive: rA,
  isJsonPatch: Fx,
  isContextPatch: uA,
  isPatch: Li,
  isMutation: Mx,
  isAdditiveMutation: Ns,
  isGenerator: cA,
  isFunction: Ix,
  isObject: ar,
  isError: aA
};
function W1(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && Rd(e.path)
  }, e.op === "merge") {
    const n = aa(t, e.path);
    Object.assign(n, e.value), Jt(t, [ws(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = aa(t, e.path), s = z1(n, e.value);
    t = Jt(t, [ws(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && ar(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${Rd(i)}`,
      value: e.value[i]
    }), s), []);
    Jt(t, n);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: n
    } = e;
    r.allowMetaPatches && e.meta && Ns(e) && (Array.isArray(e.value) || ar(e.value)) && (n = {
      ...n,
      ...e.meta
    }), t = n;
  } else if (Jt(t, [e]), r.allowMetaPatches && e.meta && Ns(e) && (Array.isArray(e.value) || ar(e.value))) {
    const s = {
      ...aa(t, e.path),
      ...e.meta
    };
    Jt(t, [ws(e.path, s)]);
  }
  return t;
}
function Rd(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function Y1(t, e) {
  return {
    op: "add",
    path: t,
    value: e
  };
}
function ws(t, e, r) {
  return {
    op: "replace",
    path: t,
    value: e,
    meta: r
  };
}
function X1(t) {
  return {
    op: "remove",
    path: t
  };
}
function Q1(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function Z1(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function eA(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function tA(t, e) {
  try {
    return Tx(t, kf, e);
  } catch (r) {
    return r;
  }
}
function rA(t, e) {
  try {
    return Tx(t, Mf, e);
  } catch (r) {
    return r;
  }
}
function Tx(t, e, r) {
  const n = t.filter(Ns).map((o) => e(o.value, r, o.path)) || [], s = An(n);
  return $x(s);
}
function Mf(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => Mf(n, e, r.concat(s))) : ar(t) ? Object.keys(t).map((n) => Mf(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function kf(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => kf(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (ar(t)) {
    const s = Object.keys(t).map((i) => kf(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = An(n), n;
}
function nA(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, n = e.length; r < n; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function sA(t, e) {
  return e.reduce((r, n) => typeof n < "u" && r ? r[n] : r, t);
}
function iA(t) {
  return $x(An(Cx(t)));
}
function Cx(t) {
  return Array.isArray(t) ? t : [t];
}
function An(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? An(e) : e));
}
function $x(t) {
  return t.filter((e) => typeof e < "u");
}
function ar(t) {
  return t && typeof t == "object";
}
function oA(t) {
  return ar(t) && Ix(t.then);
}
function Ix(t) {
  return t && typeof t == "function";
}
function aA(t) {
  return t instanceof Error;
}
function Fx(t) {
  if (Li(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function cA(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function Mx(t) {
  return Fx(t) || Li(t) && t.type === "mutation";
}
function Ns(t) {
  return Mx(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function uA(t) {
  return Li(t) && t.type === "context";
}
function Li(t) {
  return t && typeof t == "object";
}
function aa(t, e) {
  try {
    return xn(t, e);
  } catch (r) {
    return console.error(r), {};
  }
}
var Td = {}, Cd = {}, $d = {}, nn, Id;
function We() {
  if (Id) return nn;
  Id = 1;
  var t = function(e) {
    return e && e.Math === Math && e;
  };
  return nn = // eslint-disable-next-line es/no-global-this -- safe
  t(typeof globalThis == "object" && globalThis) || t(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  t(typeof self == "object" && self) || t(typeof _r == "object" && _r) || t(typeof nn == "object" && nn) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")(), nn;
}
var ca, Fd;
function ut() {
  return Fd || (Fd = 1, ca = function(t) {
    try {
      return !!t();
    } catch {
      return !0;
    }
  }), ca;
}
var ua, Md;
function Vi() {
  if (Md) return ua;
  Md = 1;
  var t = /* @__PURE__ */ ut();
  return ua = !t(function() {
    var e = (function() {
    }).bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  }), ua;
}
var la, kd;
function Lh() {
  if (kd) return la;
  kd = 1;
  var t = /* @__PURE__ */ Vi(), e = Function.prototype, r = e.apply, n = e.call;
  return la = typeof Reflect == "object" && Reflect.apply || (t ? n.bind(r) : function() {
    return n.apply(r, arguments);
  }), la;
}
var fa, Nd;
function lt() {
  if (Nd) return fa;
  Nd = 1;
  var t = /* @__PURE__ */ Vi(), e = Function.prototype, r = e.call, n = t && e.bind.bind(r, r);
  return fa = t ? n : function(s) {
    return function() {
      return r.apply(s, arguments);
    };
  }, fa;
}
var ha, Dd;
function Vh() {
  if (Dd) return ha;
  Dd = 1;
  var t = /* @__PURE__ */ lt(), e = t({}.toString), r = t("".slice);
  return ha = function(n) {
    return r(e(n), 8, -1);
  }, ha;
}
var pa, qd;
function kx() {
  if (qd) return pa;
  qd = 1;
  var t = /* @__PURE__ */ Vh(), e = /* @__PURE__ */ lt();
  return pa = function(r) {
    if (t(r) === "Function") return e(r);
  }, pa;
}
var da, Ld;
function Ye() {
  if (Ld) return da;
  Ld = 1;
  var t = typeof document == "object" && document.all;
  return da = typeof t > "u" && t !== void 0 ? function(e) {
    return typeof e == "function" || e === t;
  } : function(e) {
    return typeof e == "function";
  }, da;
}
var ma = {}, va, Vd;
function Ct() {
  if (Vd) return va;
  Vd = 1;
  var t = /* @__PURE__ */ ut();
  return va = !t(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  }), va;
}
var ya, Bd;
function pr() {
  if (Bd) return ya;
  Bd = 1;
  var t = /* @__PURE__ */ Vi(), e = Function.prototype.call;
  return ya = t ? e.bind(e) : function() {
    return e.apply(e, arguments);
  }, ya;
}
var ga = {}, Ud;
function lA() {
  if (Ud) return ga;
  Ud = 1;
  var t = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, r = e && !t.call({ 1: 2 }, 1);
  return ga.f = r ? function(s) {
    var i = e(this, s);
    return !!i && i.enumerable;
  } : t, ga;
}
var ba, Jd;
function jn() {
  return Jd || (Jd = 1, ba = function(t, e) {
    return {
      enumerable: !(t & 1),
      configurable: !(t & 2),
      writable: !(t & 4),
      value: e
    };
  }), ba;
}
var xa, Hd;
function fA() {
  if (Hd) return xa;
  Hd = 1;
  var t = /* @__PURE__ */ lt(), e = /* @__PURE__ */ ut(), r = /* @__PURE__ */ Vh(), n = Object, s = t("".split);
  return xa = e(function() {
    return !n("z").propertyIsEnumerable(0);
  }) ? function(i) {
    return r(i) === "String" ? s(i, "") : n(i);
  } : n, xa;
}
var Sa, Gd;
function Bh() {
  return Gd || (Gd = 1, Sa = function(t) {
    return t == null;
  }), Sa;
}
var Oa, Kd;
function Bi() {
  if (Kd) return Oa;
  Kd = 1;
  var t = /* @__PURE__ */ Bh(), e = TypeError;
  return Oa = function(r) {
    if (t(r)) throw new e("Can't call method on " + r);
    return r;
  }, Oa;
}
var Ea, zd;
function Pn() {
  if (zd) return Ea;
  zd = 1;
  var t = /* @__PURE__ */ fA(), e = /* @__PURE__ */ Bi();
  return Ea = function(r) {
    return t(e(r));
  }, Ea;
}
var wa, Wd;
function xt() {
  if (Wd) return wa;
  Wd = 1;
  var t = /* @__PURE__ */ Ye();
  return wa = function(e) {
    return typeof e == "object" ? e !== null : t(e);
  }, wa;
}
var Aa, Yd;
function Uh() {
  return Yd || (Yd = 1, Aa = {}), Aa;
}
var ja, Xd;
function _n() {
  if (Xd) return ja;
  Xd = 1;
  var t = /* @__PURE__ */ Uh(), e = /* @__PURE__ */ We(), r = /* @__PURE__ */ Ye(), n = function(s) {
    return r(s) ? s : void 0;
  };
  return ja = function(s, i) {
    return arguments.length < 2 ? n(t[s]) || n(e[s]) : t[s] && t[s][i] || e[s] && e[s][i];
  }, ja;
}
var Pa, Qd;
function Ui() {
  if (Qd) return Pa;
  Qd = 1;
  var t = /* @__PURE__ */ lt();
  return Pa = t({}.isPrototypeOf), Pa;
}
var _a, Zd;
function hA() {
  if (Zd) return _a;
  Zd = 1;
  var t = /* @__PURE__ */ We(), e = t.navigator, r = e && e.userAgent;
  return _a = r ? String(r) : "", _a;
}
var Ra, em;
function pA() {
  if (em) return Ra;
  em = 1;
  var t = /* @__PURE__ */ We(), e = /* @__PURE__ */ hA(), r = t.process, n = t.Deno, s = r && r.versions || n && n.version, i = s && s.v8, o, a;
  return i && (o = i.split("."), a = o[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !a && e && (o = e.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = e.match(/Chrome\/(\d+)/), o && (a = +o[1]))), Ra = a, Ra;
}
var Ta, tm;
function Nx() {
  if (tm) return Ta;
  tm = 1;
  var t = /* @__PURE__ */ pA(), e = /* @__PURE__ */ ut(), r = /* @__PURE__ */ We(), n = r.String;
  return Ta = !!Object.getOwnPropertySymbols && !e(function() {
    var s = Symbol("symbol detection");
    return !n(s) || !(Object(s) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && t && t < 41;
  }), Ta;
}
var Ca, rm;
function Dx() {
  if (rm) return Ca;
  rm = 1;
  var t = /* @__PURE__ */ Nx();
  return Ca = t && !Symbol.sham && typeof Symbol.iterator == "symbol", Ca;
}
var $a, nm;
function qx() {
  if (nm) return $a;
  nm = 1;
  var t = /* @__PURE__ */ _n(), e = /* @__PURE__ */ Ye(), r = /* @__PURE__ */ Ui(), n = /* @__PURE__ */ Dx(), s = Object;
  return $a = n ? function(i) {
    return typeof i == "symbol";
  } : function(i) {
    var o = t("Symbol");
    return e(o) && r(o.prototype, s(i));
  }, $a;
}
var Ia, sm;
function Jh() {
  if (sm) return Ia;
  sm = 1;
  var t = String;
  return Ia = function(e) {
    try {
      return t(e);
    } catch {
      return "Object";
    }
  }, Ia;
}
var Fa, im;
function Ji() {
  if (im) return Fa;
  im = 1;
  var t = /* @__PURE__ */ Ye(), e = /* @__PURE__ */ Jh(), r = TypeError;
  return Fa = function(n) {
    if (t(n)) return n;
    throw new r(e(n) + " is not a function");
  }, Fa;
}
var Ma, om;
function Hh() {
  if (om) return Ma;
  om = 1;
  var t = /* @__PURE__ */ Ji(), e = /* @__PURE__ */ Bh();
  return Ma = function(r, n) {
    var s = r[n];
    return e(s) ? void 0 : t(s);
  }, Ma;
}
var ka, am;
function dA() {
  if (am) return ka;
  am = 1;
  var t = /* @__PURE__ */ pr(), e = /* @__PURE__ */ Ye(), r = /* @__PURE__ */ xt(), n = TypeError;
  return ka = function(s, i) {
    var o, a;
    if (i === "string" && e(o = s.toString) && !r(a = t(o, s)) || e(o = s.valueOf) && !r(a = t(o, s)) || i !== "string" && e(o = s.toString) && !r(a = t(o, s))) return a;
    throw new n("Can't convert object to primitive value");
  }, ka;
}
var Na = { exports: {} }, Da, cm;
function Rn() {
  return cm || (cm = 1, Da = !0), Da;
}
var qa, um;
function mA() {
  if (um) return qa;
  um = 1;
  var t = /* @__PURE__ */ We(), e = Object.defineProperty;
  return qa = function(r, n) {
    try {
      e(t, r, { value: n, configurable: !0, writable: !0 });
    } catch {
      t[r] = n;
    }
    return n;
  }, qa;
}
var lm;
function Lx() {
  if (lm) return Na.exports;
  lm = 1;
  var t = /* @__PURE__ */ Rn(), e = /* @__PURE__ */ We(), r = /* @__PURE__ */ mA(), n = "__core-js_shared__", s = Na.exports = e[n] || r(n, {});
  return (s.versions || (s.versions = [])).push({
    version: "3.41.0",
    mode: t ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), Na.exports;
}
var La, fm;
function Vx() {
  if (fm) return La;
  fm = 1;
  var t = /* @__PURE__ */ Lx();
  return La = function(e, r) {
    return t[e] || (t[e] = r || {});
  }, La;
}
var Va, hm;
function Bx() {
  if (hm) return Va;
  hm = 1;
  var t = /* @__PURE__ */ Bi(), e = Object;
  return Va = function(r) {
    return e(t(r));
  }, Va;
}
var Ba, pm;
function St() {
  if (pm) return Ba;
  pm = 1;
  var t = /* @__PURE__ */ lt(), e = /* @__PURE__ */ Bx(), r = t({}.hasOwnProperty);
  return Ba = Object.hasOwn || function(s, i) {
    return r(e(s), i);
  }, Ba;
}
var Ua, dm;
function Ux() {
  if (dm) return Ua;
  dm = 1;
  var t = /* @__PURE__ */ lt(), e = 0, r = Math.random(), n = t(1 .toString);
  return Ua = function(s) {
    return "Symbol(" + (s === void 0 ? "" : s) + ")_" + n(++e + r, 36);
  }, Ua;
}
var Ja, mm;
function $t() {
  if (mm) return Ja;
  mm = 1;
  var t = /* @__PURE__ */ We(), e = /* @__PURE__ */ Vx(), r = /* @__PURE__ */ St(), n = /* @__PURE__ */ Ux(), s = /* @__PURE__ */ Nx(), i = /* @__PURE__ */ Dx(), o = t.Symbol, a = e("wks"), c = i ? o.for || o : o && o.withoutSetter || n;
  return Ja = function(u) {
    return r(a, u) || (a[u] = s && r(o, u) ? o[u] : c("Symbol." + u)), a[u];
  }, Ja;
}
var Ha, vm;
function vA() {
  if (vm) return Ha;
  vm = 1;
  var t = /* @__PURE__ */ pr(), e = /* @__PURE__ */ xt(), r = /* @__PURE__ */ qx(), n = /* @__PURE__ */ Hh(), s = /* @__PURE__ */ dA(), i = /* @__PURE__ */ $t(), o = TypeError, a = i("toPrimitive");
  return Ha = function(c, u) {
    if (!e(c) || r(c)) return c;
    var f = n(c, a), l;
    if (f) {
      if (u === void 0 && (u = "default"), l = t(f, c, u), !e(l) || r(l)) return l;
      throw new o("Can't convert object to primitive value");
    }
    return u === void 0 && (u = "number"), s(c, u);
  }, Ha;
}
var Ga, ym;
function Jx() {
  if (ym) return Ga;
  ym = 1;
  var t = /* @__PURE__ */ vA(), e = /* @__PURE__ */ qx();
  return Ga = function(r) {
    var n = t(r, "string");
    return e(n) ? n : n + "";
  }, Ga;
}
var Ka, gm;
function Hx() {
  if (gm) return Ka;
  gm = 1;
  var t = /* @__PURE__ */ We(), e = /* @__PURE__ */ xt(), r = t.document, n = e(r) && e(r.createElement);
  return Ka = function(s) {
    return n ? r.createElement(s) : {};
  }, Ka;
}
var za, bm;
function Gx() {
  if (bm) return za;
  bm = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ ut(), r = /* @__PURE__ */ Hx();
  return za = !t && !e(function() {
    return Object.defineProperty(r("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), za;
}
var xm;
function Kx() {
  if (xm) return ma;
  xm = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ pr(), r = /* @__PURE__ */ lA(), n = /* @__PURE__ */ jn(), s = /* @__PURE__ */ Pn(), i = /* @__PURE__ */ Jx(), o = /* @__PURE__ */ St(), a = /* @__PURE__ */ Gx(), c = Object.getOwnPropertyDescriptor;
  return ma.f = t ? c : function(f, l) {
    if (f = s(f), l = i(l), a) try {
      return c(f, l);
    } catch {
    }
    if (o(f, l)) return n(!e(r.f, f, l), f[l]);
  }, ma;
}
var Wa, Sm;
function yA() {
  if (Sm) return Wa;
  Sm = 1;
  var t = /* @__PURE__ */ ut(), e = /* @__PURE__ */ Ye(), r = /#|\.prototype\./, n = function(c, u) {
    var f = i[s(c)];
    return f === a ? !0 : f === o ? !1 : e(u) ? t(u) : !!u;
  }, s = n.normalize = function(c) {
    return String(c).replace(r, ".").toLowerCase();
  }, i = n.data = {}, o = n.NATIVE = "N", a = n.POLYFILL = "P";
  return Wa = n, Wa;
}
var Ya, Om;
function zx() {
  if (Om) return Ya;
  Om = 1;
  var t = /* @__PURE__ */ kx(), e = /* @__PURE__ */ Ji(), r = /* @__PURE__ */ Vi(), n = t(t.bind);
  return Ya = function(s, i) {
    return e(s), i === void 0 ? s : r ? n(s, i) : function() {
      return s.apply(i, arguments);
    };
  }, Ya;
}
var Xa = {}, Qa, Em;
function Wx() {
  if (Em) return Qa;
  Em = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ ut();
  return Qa = t && e(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), Qa;
}
var Za, wm;
function dr() {
  if (wm) return Za;
  wm = 1;
  var t = /* @__PURE__ */ xt(), e = String, r = TypeError;
  return Za = function(n) {
    if (t(n)) return n;
    throw new r(e(n) + " is not an object");
  }, Za;
}
var Am;
function Gr() {
  if (Am) return Xa;
  Am = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ Gx(), r = /* @__PURE__ */ Wx(), n = /* @__PURE__ */ dr(), s = /* @__PURE__ */ Jx(), i = TypeError, o = Object.defineProperty, a = Object.getOwnPropertyDescriptor, c = "enumerable", u = "configurable", f = "writable";
  return Xa.f = t ? r ? function(d, h, v) {
    if (n(d), h = s(h), n(v), typeof d == "function" && h === "prototype" && "value" in v && f in v && !v[f]) {
      var p = a(d, h);
      p && p[f] && (d[h] = v.value, v = {
        configurable: u in v ? v[u] : p[u],
        enumerable: c in v ? v[c] : p[c],
        writable: !1
      });
    }
    return o(d, h, v);
  } : o : function(d, h, v) {
    if (n(d), h = s(h), n(v), e) try {
      return o(d, h, v);
    } catch {
    }
    if ("get" in v || "set" in v) throw new i("Accessors not supported");
    return "value" in v && (d[h] = v.value), d;
  }, Xa;
}
var ec, jm;
function It() {
  if (jm) return ec;
  jm = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ Gr(), r = /* @__PURE__ */ jn();
  return ec = t ? function(n, s, i) {
    return e.f(n, s, r(1, i));
  } : function(n, s, i) {
    return n[s] = i, n;
  }, ec;
}
var tc, Pm;
function Hi() {
  if (Pm) return tc;
  Pm = 1;
  var t = /* @__PURE__ */ We(), e = /* @__PURE__ */ Lh(), r = /* @__PURE__ */ kx(), n = /* @__PURE__ */ Ye(), s = Kx().f, i = /* @__PURE__ */ yA(), o = /* @__PURE__ */ Uh(), a = /* @__PURE__ */ zx(), c = /* @__PURE__ */ It(), u = /* @__PURE__ */ St(), f = function(l) {
    var d = function(h, v, p) {
      if (this instanceof d) {
        switch (arguments.length) {
          case 0:
            return new l();
          case 1:
            return new l(h);
          case 2:
            return new l(h, v);
        }
        return new l(h, v, p);
      }
      return e(l, this, arguments);
    };
    return d.prototype = l.prototype, d;
  };
  return tc = function(l, d) {
    var h = l.target, v = l.global, p = l.stat, y = l.proto, g = v ? t : p ? t[h] : t[h] && t[h].prototype, m = v ? o : o[h] || c(o, h, {})[h], b = m.prototype, x, w, O, j, C, _, N, S, R;
    for (j in d)
      x = i(v ? j : h + (p ? "." : "#") + j, l.forced), w = !x && g && u(g, j), _ = m[j], w && (l.dontCallGetSet ? (R = s(g, j), N = R && R.value) : N = g[j]), C = w && N ? N : d[j], !(!x && !y && typeof _ == typeof C) && (l.bind && w ? S = a(C, t) : l.wrap && w ? S = f(C) : y && n(C) ? S = r(C) : S = C, (l.sham || C && C.sham || _ && _.sham) && c(S, "sham", !0), c(m, j, S), y && (O = h + "Prototype", u(o, O) || c(o, O, {}), c(o[O], j, C), l.real && b && (x || !b[j]) && c(b, j, C)));
  }, tc;
}
var rc, _m;
function Gh() {
  if (_m) return rc;
  _m = 1;
  var t = /* @__PURE__ */ Vx(), e = /* @__PURE__ */ Ux(), r = t("keys");
  return rc = function(n) {
    return r[n] || (r[n] = e(n));
  }, rc;
}
var nc, Rm;
function gA() {
  if (Rm) return nc;
  Rm = 1;
  var t = /* @__PURE__ */ ut();
  return nc = !t(function() {
    function e() {
    }
    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
  }), nc;
}
var sc, Tm;
function Kh() {
  if (Tm) return sc;
  Tm = 1;
  var t = /* @__PURE__ */ St(), e = /* @__PURE__ */ Ye(), r = /* @__PURE__ */ Bx(), n = /* @__PURE__ */ Gh(), s = /* @__PURE__ */ gA(), i = n("IE_PROTO"), o = Object, a = o.prototype;
  return sc = s ? o.getPrototypeOf : function(c) {
    var u = r(c);
    if (t(u, i)) return u[i];
    var f = u.constructor;
    return e(f) && u instanceof f ? f.prototype : u instanceof o ? a : null;
  }, sc;
}
var ic, Cm;
function bA() {
  if (Cm) return ic;
  Cm = 1;
  var t = /* @__PURE__ */ lt(), e = /* @__PURE__ */ Ji();
  return ic = function(r, n, s) {
    try {
      return t(e(Object.getOwnPropertyDescriptor(r, n)[s]));
    } catch {
    }
  }, ic;
}
var oc, $m;
function xA() {
  if ($m) return oc;
  $m = 1;
  var t = /* @__PURE__ */ xt();
  return oc = function(e) {
    return t(e) || e === null;
  }, oc;
}
var ac, Im;
function SA() {
  if (Im) return ac;
  Im = 1;
  var t = /* @__PURE__ */ xA(), e = String, r = TypeError;
  return ac = function(n) {
    if (t(n)) return n;
    throw new r("Can't set " + e(n) + " as a prototype");
  }, ac;
}
var cc, Fm;
function Gi() {
  if (Fm) return cc;
  Fm = 1;
  var t = /* @__PURE__ */ bA(), e = /* @__PURE__ */ xt(), r = /* @__PURE__ */ Bi(), n = /* @__PURE__ */ SA();
  return cc = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var s = !1, i = {}, o;
    try {
      o = t(Object.prototype, "__proto__", "set"), o(i, []), s = i instanceof Array;
    } catch {
    }
    return function(c, u) {
      return r(c), n(u), e(c) && (s ? o(c, u) : c.__proto__ = u), c;
    };
  }() : void 0), cc;
}
var uc = {}, lc, Mm;
function OA() {
  if (Mm) return lc;
  Mm = 1;
  var t = Math.ceil, e = Math.floor;
  return lc = Math.trunc || function(n) {
    var s = +n;
    return (s > 0 ? e : t)(s);
  }, lc;
}
var fc, km;
function zh() {
  if (km) return fc;
  km = 1;
  var t = /* @__PURE__ */ OA();
  return fc = function(e) {
    var r = +e;
    return r !== r || r === 0 ? 0 : t(r);
  }, fc;
}
var hc, Nm;
function EA() {
  if (Nm) return hc;
  Nm = 1;
  var t = /* @__PURE__ */ zh(), e = Math.max, r = Math.min;
  return hc = function(n, s) {
    var i = t(n);
    return i < 0 ? e(i + s, 0) : r(i, s);
  }, hc;
}
var pc, Dm;
function wA() {
  if (Dm) return pc;
  Dm = 1;
  var t = /* @__PURE__ */ zh(), e = Math.min;
  return pc = function(r) {
    var n = t(r);
    return n > 0 ? e(n, 9007199254740991) : 0;
  }, pc;
}
var dc, qm;
function Yx() {
  if (qm) return dc;
  qm = 1;
  var t = /* @__PURE__ */ wA();
  return dc = function(e) {
    return t(e.length);
  }, dc;
}
var mc, Lm;
function AA() {
  if (Lm) return mc;
  Lm = 1;
  var t = /* @__PURE__ */ Pn(), e = /* @__PURE__ */ EA(), r = /* @__PURE__ */ Yx(), n = function(s) {
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
  return mc = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: n(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: n(!1)
  }, mc;
}
var vc, Vm;
function Wh() {
  return Vm || (Vm = 1, vc = {}), vc;
}
var yc, Bm;
function Xx() {
  if (Bm) return yc;
  Bm = 1;
  var t = /* @__PURE__ */ lt(), e = /* @__PURE__ */ St(), r = /* @__PURE__ */ Pn(), n = AA().indexOf, s = /* @__PURE__ */ Wh(), i = t([].push);
  return yc = function(o, a) {
    var c = r(o), u = 0, f = [], l;
    for (l in c) !e(s, l) && e(c, l) && i(f, l);
    for (; a.length > u; ) e(c, l = a[u++]) && (~n(f, l) || i(f, l));
    return f;
  }, yc;
}
var gc, Um;
function Yh() {
  return Um || (Um = 1, gc = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ]), gc;
}
var Jm;
function jA() {
  if (Jm) return uc;
  Jm = 1;
  var t = /* @__PURE__ */ Xx(), e = /* @__PURE__ */ Yh(), r = e.concat("length", "prototype");
  return uc.f = Object.getOwnPropertyNames || function(s) {
    return t(s, r);
  }, uc;
}
var bc = {}, Hm;
function PA() {
  return Hm || (Hm = 1, bc.f = Object.getOwnPropertySymbols), bc;
}
var xc, Gm;
function _A() {
  if (Gm) return xc;
  Gm = 1;
  var t = /* @__PURE__ */ _n(), e = /* @__PURE__ */ lt(), r = /* @__PURE__ */ jA(), n = /* @__PURE__ */ PA(), s = /* @__PURE__ */ dr(), i = e([].concat);
  return xc = t("Reflect", "ownKeys") || function(a) {
    var c = r.f(s(a)), u = n.f;
    return u ? i(c, u(a)) : c;
  }, xc;
}
var Sc, Km;
function Qx() {
  if (Km) return Sc;
  Km = 1;
  var t = /* @__PURE__ */ St(), e = /* @__PURE__ */ _A(), r = /* @__PURE__ */ Kx(), n = /* @__PURE__ */ Gr();
  return Sc = function(s, i, o) {
    for (var a = e(i), c = n.f, u = r.f, f = 0; f < a.length; f++) {
      var l = a[f];
      !t(s, l) && !(o && t(o, l)) && c(s, l, u(i, l));
    }
  }, Sc;
}
var Oc = {}, Ec, zm;
function RA() {
  if (zm) return Ec;
  zm = 1;
  var t = /* @__PURE__ */ Xx(), e = /* @__PURE__ */ Yh();
  return Ec = Object.keys || function(n) {
    return t(n, e);
  }, Ec;
}
var Wm;
function TA() {
  if (Wm) return Oc;
  Wm = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ Wx(), r = /* @__PURE__ */ Gr(), n = /* @__PURE__ */ dr(), s = /* @__PURE__ */ Pn(), i = /* @__PURE__ */ RA();
  return Oc.f = t && !e ? Object.defineProperties : function(a, c) {
    n(a);
    for (var u = s(c), f = i(c), l = f.length, d = 0, h; l > d; ) r.f(a, h = f[d++], u[h]);
    return a;
  }, Oc;
}
var wc, Ym;
function CA() {
  if (Ym) return wc;
  Ym = 1;
  var t = /* @__PURE__ */ _n();
  return wc = t("document", "documentElement"), wc;
}
var Ac, Xm;
function Xh() {
  if (Xm) return Ac;
  Xm = 1;
  var t = /* @__PURE__ */ dr(), e = /* @__PURE__ */ TA(), r = /* @__PURE__ */ Yh(), n = /* @__PURE__ */ Wh(), s = /* @__PURE__ */ CA(), i = /* @__PURE__ */ Hx(), o = /* @__PURE__ */ Gh(), a = ">", c = "<", u = "prototype", f = "script", l = o("IE_PROTO"), d = function() {
  }, h = function(m) {
    return c + f + a + m + c + "/" + f + a;
  }, v = function(m) {
    m.write(h("")), m.close();
    var b = m.parentWindow.Object;
    return m = null, b;
  }, p = function() {
    var m = i("iframe"), b = "java" + f + ":", x;
    return m.style.display = "none", s.appendChild(m), m.src = String(b), x = m.contentWindow.document, x.open(), x.write(h("document.F=Object")), x.close(), x.F;
  }, y, g = function() {
    try {
      y = new ActiveXObject("htmlfile");
    } catch {
    }
    g = typeof document < "u" ? document.domain && y ? v(y) : p() : v(y);
    for (var m = r.length; m--; ) delete g[u][r[m]];
    return g();
  };
  return n[l] = !0, Ac = Object.create || function(b, x) {
    var w;
    return b !== null ? (d[u] = t(b), w = new d(), d[u] = null, w[l] = b) : w = g(), x === void 0 ? w : e.f(w, x);
  }, Ac;
}
var jc, Qm;
function Zx() {
  if (Qm) return jc;
  Qm = 1;
  var t = /* @__PURE__ */ xt(), e = /* @__PURE__ */ It();
  return jc = function(r, n) {
    t(n) && "cause" in n && e(r, "cause", n.cause);
  }, jc;
}
var Pc, Zm;
function $A() {
  if (Zm) return Pc;
  Zm = 1;
  var t = /* @__PURE__ */ lt(), e = Error, r = t("".replace), n = function(o) {
    return String(new e(o).stack);
  }("zxcasd"), s = /\n\s*at [^:]*:[^\n]*/, i = s.test(n);
  return Pc = function(o, a) {
    if (i && typeof o == "string" && !e.prepareStackTrace)
      for (; a--; ) o = r(o, s, "");
    return o;
  }, Pc;
}
var _c, ev;
function IA() {
  if (ev) return _c;
  ev = 1;
  var t = /* @__PURE__ */ ut(), e = /* @__PURE__ */ jn();
  return _c = !t(function() {
    var r = new Error("a");
    return "stack" in r ? (Object.defineProperty(r, "stack", e(1, 7)), r.stack !== 7) : !0;
  }), _c;
}
var Rc, tv;
function eS() {
  if (tv) return Rc;
  tv = 1;
  var t = /* @__PURE__ */ It(), e = /* @__PURE__ */ $A(), r = /* @__PURE__ */ IA(), n = Error.captureStackTrace;
  return Rc = function(s, i, o, a) {
    r && (n ? n(s, i) : t(s, "stack", e(o, a)));
  }, Rc;
}
var Tc, rv;
function Kr() {
  return rv || (rv = 1, Tc = {}), Tc;
}
var Cc, nv;
function FA() {
  if (nv) return Cc;
  nv = 1;
  var t = /* @__PURE__ */ $t(), e = /* @__PURE__ */ Kr(), r = t("iterator"), n = Array.prototype;
  return Cc = function(s) {
    return s !== void 0 && (e.Array === s || n[r] === s);
  }, Cc;
}
var $c, sv;
function Qh() {
  if (sv) return $c;
  sv = 1;
  var t = /* @__PURE__ */ $t(), e = t("toStringTag"), r = {};
  return r[e] = "z", $c = String(r) === "[object z]", $c;
}
var Ic, iv;
function Zh() {
  if (iv) return Ic;
  iv = 1;
  var t = /* @__PURE__ */ Qh(), e = /* @__PURE__ */ Ye(), r = /* @__PURE__ */ Vh(), n = /* @__PURE__ */ $t(), s = n("toStringTag"), i = Object, o = r(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", a = function(c, u) {
    try {
      return c[u];
    } catch {
    }
  };
  return Ic = t ? r : function(c) {
    var u, f, l;
    return c === void 0 ? "Undefined" : c === null ? "Null" : typeof (f = a(u = i(c), s)) == "string" ? f : o ? r(u) : (l = r(u)) === "Object" && e(u.callee) ? "Arguments" : l;
  }, Ic;
}
var Fc, ov;
function tS() {
  if (ov) return Fc;
  ov = 1;
  var t = /* @__PURE__ */ Zh(), e = /* @__PURE__ */ Hh(), r = /* @__PURE__ */ Bh(), n = /* @__PURE__ */ Kr(), s = /* @__PURE__ */ $t(), i = s("iterator");
  return Fc = function(o) {
    if (!r(o)) return e(o, i) || e(o, "@@iterator") || n[t(o)];
  }, Fc;
}
var Mc, av;
function MA() {
  if (av) return Mc;
  av = 1;
  var t = /* @__PURE__ */ pr(), e = /* @__PURE__ */ Ji(), r = /* @__PURE__ */ dr(), n = /* @__PURE__ */ Jh(), s = /* @__PURE__ */ tS(), i = TypeError;
  return Mc = function(o, a) {
    var c = arguments.length < 2 ? s(o) : a;
    if (e(c)) return r(t(c, o));
    throw new i(n(o) + " is not iterable");
  }, Mc;
}
var kc, cv;
function kA() {
  if (cv) return kc;
  cv = 1;
  var t = /* @__PURE__ */ pr(), e = /* @__PURE__ */ dr(), r = /* @__PURE__ */ Hh();
  return kc = function(n, s, i) {
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
  }, kc;
}
var Nc, uv;
function NA() {
  if (uv) return Nc;
  uv = 1;
  var t = /* @__PURE__ */ zx(), e = /* @__PURE__ */ pr(), r = /* @__PURE__ */ dr(), n = /* @__PURE__ */ Jh(), s = /* @__PURE__ */ FA(), i = /* @__PURE__ */ Yx(), o = /* @__PURE__ */ Ui(), a = /* @__PURE__ */ MA(), c = /* @__PURE__ */ tS(), u = /* @__PURE__ */ kA(), f = TypeError, l = function(h, v) {
    this.stopped = h, this.result = v;
  }, d = l.prototype;
  return Nc = function(h, v, p) {
    var y = p && p.that, g = !!(p && p.AS_ENTRIES), m = !!(p && p.IS_RECORD), b = !!(p && p.IS_ITERATOR), x = !!(p && p.INTERRUPTED), w = t(v, y), O, j, C, _, N, S, R, I = function(G) {
      return O && u(O, "normal", G), new l(!0, G);
    }, L = function(G) {
      return g ? (r(G), x ? w(G[0], G[1], I) : w(G[0], G[1])) : x ? w(G, I) : w(G);
    };
    if (m)
      O = h.iterator;
    else if (b)
      O = h;
    else {
      if (j = c(h), !j) throw new f(n(h) + " is not iterable");
      if (s(j)) {
        for (C = 0, _ = i(h); _ > C; C++)
          if (N = L(h[C]), N && o(d, N)) return N;
        return new l(!1);
      }
      O = a(h, j);
    }
    for (S = m ? h.next : O.next; !(R = e(S, O)).done; ) {
      try {
        N = L(R.value);
      } catch (G) {
        u(O, "throw", G);
      }
      if (typeof N == "object" && N && o(d, N)) return N;
    }
    return new l(!1);
  }, Nc;
}
var Dc, lv;
function ep() {
  if (lv) return Dc;
  lv = 1;
  var t = /* @__PURE__ */ Zh(), e = String;
  return Dc = function(r) {
    if (t(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return e(r);
  }, Dc;
}
var qc, fv;
function rS() {
  if (fv) return qc;
  fv = 1;
  var t = /* @__PURE__ */ ep();
  return qc = function(e, r) {
    return e === void 0 ? arguments.length < 2 ? "" : r : t(e);
  }, qc;
}
var hv;
function DA() {
  if (hv) return $d;
  hv = 1;
  var t = /* @__PURE__ */ Hi(), e = /* @__PURE__ */ Ui(), r = /* @__PURE__ */ Kh(), n = /* @__PURE__ */ Gi(), s = /* @__PURE__ */ Qx(), i = /* @__PURE__ */ Xh(), o = /* @__PURE__ */ It(), a = /* @__PURE__ */ jn(), c = /* @__PURE__ */ Zx(), u = /* @__PURE__ */ eS(), f = /* @__PURE__ */ NA(), l = /* @__PURE__ */ rS(), d = /* @__PURE__ */ $t(), h = d("toStringTag"), v = Error, p = [].push, y = function(b, x) {
    var w = e(g, this), O;
    n ? O = n(new v(), w ? r(this) : g) : (O = w ? this : i(g), o(O, h, "Error")), x !== void 0 && o(O, "message", l(x)), u(O, y, O.stack, 1), arguments.length > 2 && c(O, arguments[2]);
    var j = [];
    return f(b, p, { that: j }), o(O, "errors", j), O;
  };
  n ? n(y, v) : s(y, v, { name: !0 });
  var g = y.prototype = i(v.prototype, {
    constructor: a(1, y),
    message: a(1, ""),
    name: a(1, "AggregateError")
  });
  return t({ global: !0, constructor: !0, arity: 2 }, {
    AggregateError: y
  }), $d;
}
var pv;
function nS() {
  return pv || (pv = 1, DA()), Cd;
}
var dv;
function sS() {
  return dv || (dv = 1, nS()), Td;
}
var mv = {}, Lc, vv;
function qA() {
  if (vv) return Lc;
  vv = 1;
  var t = Gr().f;
  return Lc = function(e, r, n) {
    n in e || t(e, n, {
      configurable: !0,
      get: function() {
        return r[n];
      },
      set: function(s) {
        r[n] = s;
      }
    });
  }, Lc;
}
var Vc, yv;
function LA() {
  if (yv) return Vc;
  yv = 1;
  var t = /* @__PURE__ */ Ye(), e = /* @__PURE__ */ xt(), r = /* @__PURE__ */ Gi();
  return Vc = function(n, s, i) {
    var o, a;
    return (
      // it can work only with native `setPrototypeOf`
      r && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      t(o = s.constructor) && o !== i && e(a = o.prototype) && a !== i.prototype && r(n, a), n
    );
  }, Vc;
}
var Bc, gv;
function iS() {
  if (gv) return Bc;
  gv = 1;
  var t = /* @__PURE__ */ _n(), e = /* @__PURE__ */ St(), r = /* @__PURE__ */ It(), n = /* @__PURE__ */ Ui(), s = /* @__PURE__ */ Gi(), i = /* @__PURE__ */ Qx(), o = /* @__PURE__ */ qA(), a = /* @__PURE__ */ LA(), c = /* @__PURE__ */ rS(), u = /* @__PURE__ */ Zx(), f = /* @__PURE__ */ eS(), l = /* @__PURE__ */ Ct(), d = /* @__PURE__ */ Rn();
  return Bc = function(h, v, p, y) {
    var g = "stackTraceLimit", m = y ? 2 : 1, b = h.split("."), x = b[b.length - 1], w = t.apply(null, b);
    if (w) {
      var O = w.prototype;
      if (!d && e(O, "cause") && delete O.cause, !p) return w;
      var j = t("Error"), C = v(function(_, N) {
        var S = c(y ? N : _, void 0), R = y ? new w(_) : new w();
        return S !== void 0 && r(R, "message", S), f(R, C, R.stack, 2), this && n(O, this) && a(R, this, C), arguments.length > m && u(R, arguments[m]), R;
      });
      if (C.prototype = O, x !== "Error" ? s ? s(C, j) : i(C, j, { name: !0 }) : l && g in w && (o(C, w, g), o(C, w, "prepareStackTrace")), i(C, w), !d) try {
        O.name !== x && r(O, "name", x), O.constructor = C;
      } catch {
      }
      return C;
    }
  }, Bc;
}
var bv;
function VA() {
  if (bv) return mv;
  bv = 1;
  var t = /* @__PURE__ */ Hi(), e = /* @__PURE__ */ We(), r = /* @__PURE__ */ Lh(), n = /* @__PURE__ */ iS(), s = "WebAssembly", i = e[s], o = new Error("e", { cause: 7 }).cause !== 7, a = function(u, f) {
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
  }), mv;
}
var xv = {}, Sv;
function BA() {
  if (Sv) return xv;
  Sv = 1;
  var t = /* @__PURE__ */ Hi(), e = /* @__PURE__ */ _n(), r = /* @__PURE__ */ Lh(), n = /* @__PURE__ */ ut(), s = /* @__PURE__ */ iS(), i = "AggregateError", o = e(i), a = !n(function() {
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
  }), xv;
}
var Uc, Ov;
function UA() {
  return Ov || (Ov = 1, Uc = function() {
  }), Uc;
}
var Jc, Ev;
function JA() {
  if (Ev) return Jc;
  Ev = 1;
  var t = /* @__PURE__ */ We(), e = /* @__PURE__ */ Ye(), r = t.WeakMap;
  return Jc = e(r) && /native code/.test(String(r)), Jc;
}
var Hc, wv;
function oS() {
  if (wv) return Hc;
  wv = 1;
  var t = /* @__PURE__ */ JA(), e = /* @__PURE__ */ We(), r = /* @__PURE__ */ xt(), n = /* @__PURE__ */ It(), s = /* @__PURE__ */ St(), i = /* @__PURE__ */ Lx(), o = /* @__PURE__ */ Gh(), a = /* @__PURE__ */ Wh(), c = "Object already initialized", u = e.TypeError, f = e.WeakMap, l, d, h, v = function(m) {
    return h(m) ? d(m) : l(m, {});
  }, p = function(m) {
    return function(b) {
      var x;
      if (!r(b) || (x = d(b)).type !== m)
        throw new u("Incompatible receiver, " + m + " required");
      return x;
    };
  };
  if (t || i.state) {
    var y = i.state || (i.state = new f());
    y.get = y.get, y.has = y.has, y.set = y.set, l = function(m, b) {
      if (y.has(m)) throw new u(c);
      return b.facade = m, y.set(m, b), b;
    }, d = function(m) {
      return y.get(m) || {};
    }, h = function(m) {
      return y.has(m);
    };
  } else {
    var g = o("state");
    a[g] = !0, l = function(m, b) {
      if (s(m, g)) throw new u(c);
      return b.facade = m, n(m, g, b), b;
    }, d = function(m) {
      return s(m, g) ? m[g] : {};
    }, h = function(m) {
      return s(m, g);
    };
  }
  return Hc = {
    set: l,
    get: d,
    has: h,
    enforce: v,
    getterFor: p
  }, Hc;
}
var Gc, Av;
function HA() {
  if (Av) return Gc;
  Av = 1;
  var t = /* @__PURE__ */ Ct(), e = /* @__PURE__ */ St(), r = Function.prototype, n = t && Object.getOwnPropertyDescriptor, s = e(r, "name"), i = s && (function() {
  }).name === "something", o = s && (!t || t && n(r, "name").configurable);
  return Gc = {
    EXISTS: s,
    PROPER: i,
    CONFIGURABLE: o
  }, Gc;
}
var Kc, jv;
function aS() {
  if (jv) return Kc;
  jv = 1;
  var t = /* @__PURE__ */ It();
  return Kc = function(e, r, n, s) {
    return s && s.enumerable ? e[r] = n : t(e, r, n), e;
  }, Kc;
}
var zc, Pv;
function cS() {
  if (Pv) return zc;
  Pv = 1;
  var t = /* @__PURE__ */ ut(), e = /* @__PURE__ */ Ye(), r = /* @__PURE__ */ xt(), n = /* @__PURE__ */ Xh(), s = /* @__PURE__ */ Kh(), i = /* @__PURE__ */ aS(), o = /* @__PURE__ */ $t(), a = /* @__PURE__ */ Rn(), c = o("iterator"), u = !1, f, l, d;
  [].keys && (d = [].keys(), "next" in d ? (l = s(s(d)), l !== Object.prototype && (f = l)) : u = !0);
  var h = !r(f) || t(function() {
    var v = {};
    return f[c].call(v) !== v;
  });
  return h ? f = {} : a && (f = n(f)), e(f[c]) || i(f, c, function() {
    return this;
  }), zc = {
    IteratorPrototype: f,
    BUGGY_SAFARI_ITERATORS: u
  }, zc;
}
var Wc, _v;
function GA() {
  if (_v) return Wc;
  _v = 1;
  var t = /* @__PURE__ */ Qh(), e = /* @__PURE__ */ Zh();
  return Wc = t ? {}.toString : function() {
    return "[object " + e(this) + "]";
  }, Wc;
}
var Yc, Rv;
function tp() {
  if (Rv) return Yc;
  Rv = 1;
  var t = /* @__PURE__ */ Qh(), e = Gr().f, r = /* @__PURE__ */ It(), n = /* @__PURE__ */ St(), s = /* @__PURE__ */ GA(), i = /* @__PURE__ */ $t(), o = i("toStringTag");
  return Yc = function(a, c, u, f) {
    var l = u ? a : a && a.prototype;
    l && (n(l, o) || e(l, o, { configurable: !0, value: c }), f && !t && r(l, "toString", s));
  }, Yc;
}
var Xc, Tv;
function KA() {
  if (Tv) return Xc;
  Tv = 1;
  var t = cS().IteratorPrototype, e = /* @__PURE__ */ Xh(), r = /* @__PURE__ */ jn(), n = /* @__PURE__ */ tp(), s = /* @__PURE__ */ Kr(), i = function() {
    return this;
  };
  return Xc = function(o, a, c, u) {
    var f = a + " Iterator";
    return o.prototype = e(t, { next: r(+!u, c) }), n(o, f, !1, !0), s[f] = i, o;
  }, Xc;
}
var Qc, Cv;
function uS() {
  if (Cv) return Qc;
  Cv = 1;
  var t = /* @__PURE__ */ Hi(), e = /* @__PURE__ */ pr(), r = /* @__PURE__ */ Rn(), n = /* @__PURE__ */ HA(), s = /* @__PURE__ */ Ye(), i = /* @__PURE__ */ KA(), o = /* @__PURE__ */ Kh(), a = /* @__PURE__ */ Gi(), c = /* @__PURE__ */ tp(), u = /* @__PURE__ */ It(), f = /* @__PURE__ */ aS(), l = /* @__PURE__ */ $t(), d = /* @__PURE__ */ Kr(), h = /* @__PURE__ */ cS(), v = n.PROPER, p = n.CONFIGURABLE, y = h.IteratorPrototype, g = h.BUGGY_SAFARI_ITERATORS, m = l("iterator"), b = "keys", x = "values", w = "entries", O = function() {
    return this;
  };
  return Qc = function(j, C, _, N, S, R, I) {
    i(_, C, N);
    var L = function(ne) {
      if (ne === S && $) return $;
      if (!g && ne && ne in ae) return ae[ne];
      switch (ne) {
        case b:
          return function() {
            return new _(this, ne);
          };
        case x:
          return function() {
            return new _(this, ne);
          };
        case w:
          return function() {
            return new _(this, ne);
          };
      }
      return function() {
        return new _(this);
      };
    }, G = C + " Iterator", ve = !1, ae = j.prototype, V = ae[m] || ae["@@iterator"] || S && ae[S], $ = !g && V || L(S), K = C === "Array" && ae.entries || V, U, H, re;
    if (K && (U = o(K.call(new j())), U !== Object.prototype && U.next && (!r && o(U) !== y && (a ? a(U, y) : s(U[m]) || f(U, m, O)), c(U, G, !0, !0), r && (d[G] = O))), v && S === x && V && V.name !== x && (!r && p ? u(ae, "name", x) : (ve = !0, $ = function() {
      return e(V, this);
    })), S)
      if (H = {
        values: L(x),
        keys: R ? $ : L(b),
        entries: L(w)
      }, I) for (re in H)
        (g || ve || !(re in ae)) && f(ae, re, H[re]);
      else t({ target: C, proto: !0, forced: g || ve }, H);
    return (!r || I) && ae[m] !== $ && f(ae, m, $, { name: S }), d[C] = $, H;
  }, Qc;
}
var Zc, $v;
function lS() {
  return $v || ($v = 1, Zc = function(t, e) {
    return { value: t, done: e };
  }), Zc;
}
var eu, Iv;
function fS() {
  if (Iv) return eu;
  Iv = 1;
  var t = /* @__PURE__ */ Pn(), e = /* @__PURE__ */ UA(), r = /* @__PURE__ */ Kr(), n = /* @__PURE__ */ oS(), s = Gr().f, i = /* @__PURE__ */ uS(), o = /* @__PURE__ */ lS(), a = /* @__PURE__ */ Rn(), c = /* @__PURE__ */ Ct(), u = "Array Iterator", f = n.set, l = n.getterFor(u);
  eu = i(Array, "Array", function(h, v) {
    f(this, {
      type: u,
      target: t(h),
      // target
      index: 0,
      // next index
      kind: v
      // kind
    });
  }, function() {
    var h = l(this), v = h.target, p = h.index++;
    if (!v || p >= v.length)
      return h.target = null, o(void 0, !0);
    switch (h.kind) {
      case "keys":
        return o(p, !1);
      case "values":
        return o(v[p], !1);
    }
    return o([p, v[p]], !1);
  }, "values");
  var d = r.Arguments = r.Array;
  if (e("keys"), e("values"), e("entries"), !a && c && d.name !== "values") try {
    s(d, "name", { value: "values" });
  } catch {
  }
  return eu;
}
var Fv = {}, tu, Mv;
function zA() {
  if (Mv) return tu;
  Mv = 1;
  var t = /* @__PURE__ */ lt(), e = /* @__PURE__ */ zh(), r = /* @__PURE__ */ ep(), n = /* @__PURE__ */ Bi(), s = t("".charAt), i = t("".charCodeAt), o = t("".slice), a = function(c) {
    return function(u, f) {
      var l = r(n(u)), d = e(f), h = l.length, v, p;
      return d < 0 || d >= h ? c ? "" : void 0 : (v = i(l, d), v < 55296 || v > 56319 || d + 1 === h || (p = i(l, d + 1)) < 56320 || p > 57343 ? c ? s(l, d) : v : c ? o(l, d, d + 2) : (v - 55296 << 10) + (p - 56320) + 65536);
    };
  };
  return tu = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: a(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: a(!0)
  }, tu;
}
var kv;
function WA() {
  if (kv) return Fv;
  kv = 1;
  var t = zA().charAt, e = /* @__PURE__ */ ep(), r = /* @__PURE__ */ oS(), n = /* @__PURE__ */ uS(), s = /* @__PURE__ */ lS(), i = "String Iterator", o = r.set, a = r.getterFor(i);
  return n(String, "String", function(c) {
    o(this, {
      type: i,
      string: e(c),
      index: 0
    });
  }, function() {
    var u = a(this), f = u.string, l = u.index, d;
    return l >= f.length ? s(void 0, !0) : (d = t(f, l), u.index += d.length, s(d, !1));
  }), Fv;
}
var ru, Nv;
function YA() {
  if (Nv) return ru;
  Nv = 1, VA(), nS(), BA(), fS(), WA();
  var t = /* @__PURE__ */ Uh();
  return ru = t.AggregateError, ru;
}
var Dv = {}, nu, qv;
function XA() {
  return qv || (qv = 1, nu = {
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
  }), nu;
}
var Lv;
function QA() {
  if (Lv) return Dv;
  Lv = 1, fS();
  var t = /* @__PURE__ */ XA(), e = /* @__PURE__ */ We(), r = /* @__PURE__ */ tp(), n = /* @__PURE__ */ Kr();
  for (var s in t)
    r(e[s], s), n[s] = n.Array;
  return Dv;
}
var su, Vv;
function ZA() {
  if (Vv) return su;
  Vv = 1, sS();
  var t = /* @__PURE__ */ YA();
  return QA(), su = t, su;
}
var iu, Bv;
function ej() {
  if (Bv) return iu;
  Bv = 1;
  var t = /* @__PURE__ */ ZA();
  return iu = t, iu;
}
var ou, Uv;
function tj() {
  if (Uv) return ou;
  Uv = 1, sS();
  var t = /* @__PURE__ */ ej();
  return ou = t, ou;
}
var au, Jv;
function rj() {
  return Jv || (Jv = 1, au = /* @__PURE__ */ tj()), au;
}
var cu, Hv;
function nj() {
  return Hv || (Hv = 1, cu = /* @__PURE__ */ rj()), cu;
}
var sj = nj();
const ij = /* @__PURE__ */ Di(sj);
class oj extends ij {
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
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(oj, e);
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
class at extends ye {
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
class Q extends ye {
}
class uu extends Q {
}
var rp = function() {
  return !1;
}, Ft = function() {
  return !0;
};
function me(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function ue(t) {
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
        return me(r) ? e : ue(function(s) {
          return t(r, s);
        });
      default:
        return me(r) && me(n) ? e : me(r) ? ue(function(s) {
          return t(s, n);
        }) : me(n) ? ue(function(s) {
          return t(r, s);
        }) : t(r, n);
    }
  };
}
function aj(t, e) {
  t = t || [], e = e || [];
  var r, n = t.length, s = e.length, i = [];
  for (r = 0; r < n; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < s; )
    i[i.length] = e[r], r += 1;
  return i;
}
function Ki(t, e) {
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
function np(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!me(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, me(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : Ki(Math.max(0, i), np(t, n, r));
  };
}
var pe = /* @__PURE__ */ W(function(e, r) {
  return e === 1 ? ue(r) : Ki(e, np(e, [], r));
});
function qe(t) {
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
        }) : ue(function(i) {
          return t(r, n, i);
        });
      default:
        return me(r) && me(n) && me(s) ? e : me(r) && me(n) ? W(function(i, o) {
          return t(i, o, s);
        }) : me(r) && me(s) ? W(function(i, o) {
          return t(i, n, o);
        }) : me(n) && me(s) ? W(function(i, o) {
          return t(r, i, o);
        }) : me(r) ? ue(function(i) {
          return t(i, n, s);
        }) : me(n) ? ue(function(i) {
          return t(r, i, s);
        }) : me(s) ? ue(function(i) {
          return t(r, n, i);
        }) : t(r, n, s);
    }
  };
}
const mr = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function cj(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function Wt(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!mr(n)) {
      for (var s = 0; s < t.length; ) {
        if (typeof n[t[s]] == "function")
          return n[t[s]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        s += 1;
      }
      if (cj(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function zi(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const ze = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
var uj = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = ze.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = zi(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
}();
function lj(t) {
  return function(e) {
    return new uj(t, e);
  };
}
var sp = /* @__PURE__ */ W(/* @__PURE__ */ Wt(["all"], lj, function(e, r) {
  for (var n = 0; n < r.length; ) {
    if (!e(r[n]))
      return !1;
    n += 1;
  }
  return !0;
}));
function Gv(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function Ds(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function fj(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function et(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function hj(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const ln = typeof Object.is == "function" ? Object.is : hj;
var Kv = Object.prototype.toString, hS = /* @__PURE__ */ function() {
  return Kv.call(arguments) === "[object Arguments]" ? function(e) {
    return Kv.call(e) === "[object Arguments]";
  } : function(e) {
    return et("callee", e);
  };
}(), pj = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), zv = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Wv = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), dj = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, ur = /* @__PURE__ */ ue(typeof Object.keys == "function" && !Wv ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, s = [], i = Wv && hS(e);
  for (r in e)
    et(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (pj)
    for (n = zv.length - 1; n >= 0; )
      r = zv[n], et(r, e) && !dj(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), tt = /* @__PURE__ */ ue(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function Yv(t, e, r, n) {
  var s = Gv(t), i = Gv(e);
  function o(a, c) {
    return ip(a, c, r.slice(), n.slice());
  }
  return !Ds(function(a, c) {
    return !Ds(o, c, a);
  }, i, s);
}
function ip(t, e, r, n) {
  if (ln(t, e))
    return !0;
  var s = tt(t);
  if (s !== tt(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (s) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && fj(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && ln(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!ln(t.valueOf(), e.valueOf()))
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
      return t.size !== e.size ? !1 : Yv(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : Yv(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var o = ur(t);
  if (o.length !== ur(e).length)
    return !1;
  var a = r.concat([t]), c = n.concat([e]);
  for (i = o.length - 1; i >= 0; ) {
    var u = o[i];
    if (!(et(u, e) && ip(e[u], t[u], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Mt = /* @__PURE__ */ W(function(e, r) {
  return ip(e, r, [], []);
});
function mj(t, e, r) {
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
    if (Mt(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function qs(t, e) {
  return mj(e, t, 0) >= 0;
}
function fn(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function lu(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var sn = function(e) {
  return (e < 10 ? "0" : "") + e;
}, vj = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + sn(e.getUTCMonth() + 1) + "-" + sn(e.getUTCDate()) + "T" + sn(e.getUTCHours()) + ":" + sn(e.getUTCMinutes()) + ":" + sn(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function pS(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function Tn(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function yj(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function Ls(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var gj = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = ze.init, t.prototype["@@transducer/result"] = ze.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function bj(t) {
  return function(e) {
    return new gj(t, e);
  };
}
var xj = /* @__PURE__ */ W(/* @__PURE__ */ Wt(["fantasy-land/filter", "filter"], bj, function(t, e) {
  return Ls(e) ? Tn(function(r, n) {
    return t(e[n]) && (r[n] = e[n]), r;
  }, {}, ur(e)) : (
    // else
    yj(t, e)
  );
})), Sj = /* @__PURE__ */ W(function(e, r) {
  return xj(pS(e), r);
});
function dS(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return qs(o, a) ? "<Circular>" : dS(o, a);
  }, n = function(i, o) {
    return fn(function(a) {
      return lu(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + fn(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + fn(r, t).concat(n(t, Sj(function(i) {
        return /^\d+$/.test(i);
      }, ur(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : lu(vj(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : lu(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var s = t.toString();
        if (s !== "[object Object]")
          return s;
      }
      return "{" + n(t, ur(t)).join(", ") + "}";
  }
}
var Dr = /* @__PURE__ */ ue(function(e) {
  return dS(e, []);
}), op = /* @__PURE__ */ W(function(e, r) {
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
  var o = Dr(e), a = n(o, Dr(r));
  return a !== void 0 && a === o ? e : r;
}), Oj = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = ze.init, t.prototype["@@transducer/result"] = ze.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), Ej = function(e) {
  return function(r) {
    return new Oj(e, r);
  };
}, Cn = /* @__PURE__ */ W(/* @__PURE__ */ Wt(["fantasy-land/map", "map"], Ej, function(e, r) {
  switch (Object.prototype.toString.call(r)) {
    case "[object Function]":
      return pe(r.length, function() {
        return e.call(this, r.apply(this, arguments));
      });
    case "[object Object]":
      return Tn(function(n, s) {
        return n[s] = e(r[s]), n;
      }, {}, ur(r));
    default:
      return fn(e, r);
  }
}));
const zr = Number.isInteger || function(e) {
  return e << 0 === e;
};
function ap(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function Wi(t, e) {
  var r = t < 0 ? e.length + t : t;
  return ap(e) ? e.charAt(r) : e[r];
}
var $n = /* @__PURE__ */ W(function(e, r) {
  if (r != null)
    return zr(e) ? Wi(e, r) : r[e];
}), cp = /* @__PURE__ */ W(function(e, r) {
  return Cn($n(e), r);
}), wj = /* @__PURE__ */ ue(function(e) {
  return mr(e) ? !0 : !e || typeof e != "object" || ap(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), Xv = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function mS(t, e, r) {
  return function(s, i, o) {
    if (wj(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[Xv] != null)
      return r(s, i, o[Xv]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function Aj(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var Yi = /* @__PURE__ */ W(function(e, r) {
  return Ki(e.length, function() {
    return e.apply(r, arguments);
  });
});
function jj(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function Pj(t, e, r, n) {
  return t["@@transducer/result"](r[n](Yi(t["@@transducer/step"], t), e));
}
var up = /* @__PURE__ */ mS(Aj, Pj, jj), _j = /* @__PURE__ */ function() {
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
function vS(t) {
  return new _j(t);
}
var vr = /* @__PURE__ */ qe(function(t, e, r) {
  return up(typeof t == "function" ? vS(t) : t, e, r);
}), Rj = /* @__PURE__ */ ue(function(e) {
  return pe(vr(op, 0, cp("length", e)), function() {
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
}), Tj = /* @__PURE__ */ W(function(e, r) {
  return e && r;
}), Cj = /* @__PURE__ */ ue(function(e) {
  return pe(vr(op, 0, cp("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function $j(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function Ij(t, e, r, n) {
  return r[n](t, e);
}
var Fj = /* @__PURE__ */ mS(Tn, Ij, $j), Mj = /* @__PURE__ */ W(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : Fj(function(n, s) {
    return aj(n, Cn(s, r));
  }, [], e);
}), kj = /* @__PURE__ */ W(function(e, r) {
  return e.apply(this, r);
}), lp = /* @__PURE__ */ ue(function(e) {
  return pe(e.length, e);
});
function Nj(t, e, r) {
  if (zr(t) && mr(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var Vs = /* @__PURE__ */ ue(function(e) {
  return e == null;
}), M = /* @__PURE__ */ qe(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !Vs(n) && et(s, n) && typeof n[s] == "object" ? n[s] : zr(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return Nj(s, r, n);
}), Dj = /* @__PURE__ */ qe(function(e, r, n) {
  return M([e], r, n);
});
function fp(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var qj = /* @__PURE__ */ W(function(e, r) {
  var n = pe(e, r);
  return pe(e, function() {
    return Tn(Mj, Cn(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), hp = /* @__PURE__ */ ue(function(e) {
  return qj(e.length, e);
}), yr = /* @__PURE__ */ W(function(e, r) {
  return fp(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : hp(Tj)(e, r);
});
function yS(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function gS(t, e, r) {
  if (r || (r = new Vj()), Lj(t))
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
  switch (tt(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n(Array(t.length));
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return yS(t);
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
function Lj(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var Vj = /* @__PURE__ */ function() {
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
}(), Bj = /* @__PURE__ */ ue(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), Uj = /* @__PURE__ */ ue(function(e) {
  return !e;
}), In = /* @__PURE__ */ hp(Uj);
function Jj(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function pp(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return mr(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Fn = /* @__PURE__ */ qe(/* @__PURE__ */ pp("slice", function(e, r, n) {
  return Array.prototype.slice.call(n, e, r);
})), bS = /* @__PURE__ */ ue(/* @__PURE__ */ pp("tail", /* @__PURE__ */ Fn(1, 1 / 0)));
function xe() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return Ki(arguments[0].length, vr(Jj, arguments[0], bS(arguments)));
}
var Hj = /* @__PURE__ */ ue(function(t) {
  return Wi(0, t);
});
function Gj(t) {
  return t;
}
var dp = /* @__PURE__ */ ue(Gj), Kj = /* @__PURE__ */ W(function(e, r) {
  return pe(vr(op, 0, cp("length", r)), function() {
    var n = arguments, s = this;
    return e.apply(s, fn(function(i) {
      return i.apply(s, n);
    }, r));
  });
}), zj = /* @__PURE__ */ function() {
  function t(e, r, n, s) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = s, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = ze.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (et(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, gS(this.valueAcc)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function Wj(t, e, r) {
  return function(n) {
    return new zj(t, e, r, n);
  };
}
var Yj = /* @__PURE__ */ np(4, [], /* @__PURE__ */ Wt([], Wj, function(e, r, n, s) {
  var i = vS(function(o, a) {
    var c = n(a), u = e(et(c, o) ? o[c] : gS(r), a);
    return u && u["@@transducer/reduced"] ? zi(o) : (o[c] = u, o);
  });
  return up(i, {}, s);
})), qr = /* @__PURE__ */ W(function(e, r) {
  return r == null || r !== r ? e : r;
}), Xj = /* @__PURE__ */ function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !Qv(e, !0, this);
  }, t.prototype.has = function(e) {
    return Qv(e, !1, this);
  }, t;
}();
function Qv(t, e, r) {
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
      return r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? qs(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
    case "undefined":
      return r._items[n] ? !0 : (e && (r._items[n] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    /* falls through */
    default:
      return n = Object.prototype.toString.call(t), n in r._items ? qs(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
  }
}
var Qj = /* @__PURE__ */ W(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new Xj(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), Zj = /* @__PURE__ */ qe(function(e, r, n) {
  var s = Array.prototype.slice.call(n, 0);
  return s.splice(e, r), s;
});
function eP(t, e) {
  if (e == null)
    return e;
  if (zr(t) && mr(e))
    return Zj(t, 1, e);
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return delete r[t], r;
}
function tP(t, e) {
  if (zr(t) && mr(e))
    return [].concat(e);
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return r;
}
var Ke = /* @__PURE__ */ W(function t(e, r) {
  if (r == null)
    return r;
  switch (e.length) {
    case 0:
      return r;
    case 1:
      return eP(e[0], r);
    default:
      var n = e[0], s = Array.prototype.slice.call(e, 1);
      return r[n] == null ? tP(n, r) : Dj(n, t(s, r[n]), r);
  }
}), rP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = ze.init, t.prototype["@@transducer/result"] = ze.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? zi(n) : n;
  }, t;
}();
function nP(t) {
  return function(e) {
    return new rP(t, e);
  };
}
var sP = /* @__PURE__ */ W(/* @__PURE__ */ Wt(["take"], nP, function(e, r) {
  return Fn(0, e < 0 ? 1 / 0 : e, r);
}));
function iP(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return Fn(0, r + 1, e);
}
var oP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = ze.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = up(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
}();
function aP(t) {
  return function(e) {
    return new oP(t, e);
  };
}
var cP = /* @__PURE__ */ W(/* @__PURE__ */ Wt([], aP, iP)), Xi = /* @__PURE__ */ ue(function(t) {
  return Wi(-1, t);
}), uP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = ze.init, t.prototype["@@transducer/result"] = ze.result, t.prototype["@@transducer/step"] = function(e, r) {
    if (this.f) {
      if (this.f(r))
        return e;
      this.f = null;
    }
    return this.xf["@@transducer/step"](e, r);
  }, t;
}();
function lP(t) {
  return function(e) {
    return new uP(t, e);
  };
}
var fP = /* @__PURE__ */ W(/* @__PURE__ */ Wt(["dropWhile"], lP, function(e, r) {
  for (var n = 0, s = r.length; n < s && e(r[n]); )
    n += 1;
  return Fn(n, 1 / 0, r);
})), hP = /* @__PURE__ */ W(function(e, r) {
  return e || r;
}), pP = /* @__PURE__ */ W(function(e, r) {
  return fp(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : hp(hP)(e, r);
});
function dP(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var mP = /* @__PURE__ */ ue(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : mr(e) ? [] : ap(e) ? "" : Ls(e) ? {} : hS(e) ? /* @__PURE__ */ function() {
    return arguments;
  }() : dP(e) ? e.constructor.from("") : void 0;
}), vP = /* @__PURE__ */ ue(function(e) {
  return pe(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), yP = /* @__PURE__ */ W(/* @__PURE__ */ pp("groupBy", /* @__PURE__ */ Yj(function(t, e) {
  return t.push(e), t;
}, []))), gP = /* @__PURE__ */ W(function(e, r) {
  if (e.length === 0 || Vs(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!Vs(n) && et(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), hn = /* @__PURE__ */ W(function(e, r) {
  return gP([e], r);
}), kt = function(t, e) {
  switch (arguments.length) {
    case 0:
      return kt;
    case 1:
      return /* @__PURE__ */ function() {
        return function r(n) {
          switch (arguments.length) {
            case 0:
              return r;
            default:
              return ln(t, n);
          }
        };
      }();
    default:
      return ln(t, e);
  }
}, mp = /* @__PURE__ */ qe(function(e, r, n) {
  return pe(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), bP = /* @__PURE__ */ W(qs), xP = /* @__PURE__ */ Fn(0, -1), vp = /* @__PURE__ */ W(function(e, r) {
  return pe(e + 1, function() {
    var n = arguments[e];
    if (n != null && fp(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(Dr(n) + ' does not have a method named "' + r + '"');
  });
}), Mn = /* @__PURE__ */ ue(function(e) {
  return e != null && Mt(e, mP(e));
}), xS = /* @__PURE__ */ ue(function(e) {
  return !Mn(e);
}), SS = /* @__PURE__ */ vp(1, "join");
function Zv(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var SP = /* @__PURE__ */ W(function(e, r) {
  return function(n) {
    return function(s) {
      return Cn(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
function yp(t, e) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    var s = t[n];
    zr(s) ? r = Wi(s, r) : r = r[s];
  }
  return r;
}
var OP = /* @__PURE__ */ W(function(e, r) {
  return Tn(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, ur(r));
}), EP = /* @__PURE__ */ qe(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    et(i, r) && (s[i] = et(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    et(i, n) && !et(i, s) && (s[i] = n[i]);
  return s;
}), wP = /* @__PURE__ */ qe(function t(e, r, n) {
  return EP(function(s, i, o) {
    return Ls(i) && Ls(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), Qi = /* @__PURE__ */ W(function(e, r) {
  return wP(function(n, s, i) {
    return i;
  }, e, r);
}), AP = /* @__PURE__ */ W(function(e, r) {
  return sp(pS(e), r);
}), OS = function(t) {
  return {
    value: t,
    map: function(e) {
      return OS(e(t));
    }
  };
}, jP = /* @__PURE__ */ qe(function(e, r, n) {
  return e(function(s) {
    return OS(r(s));
  })(n).value;
}), Re = /* @__PURE__ */ W(yp), ES = /* @__PURE__ */ qe(function(e, r, n) {
  return qr(e, yp(r, n));
}), Zi = /* @__PURE__ */ qe(function(e, r, n) {
  return e(yp(r, n));
}), wS = /* @__PURE__ */ W(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), AS = /* @__PURE__ */ qe(function(e, r, n) {
  return Mt(e, $n(r, n));
}), Bs = /* @__PURE__ */ qe(function(e, r, n) {
  return qr(e, $n(r, n));
}), PP = /* @__PURE__ */ qe(function(e, r, n) {
  return e($n(r, n));
}), _P = /* @__PURE__ */ W(function(e, r) {
  if (!(Zv(e) && Zv(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = Array(e < r ? r - e : 0), s = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < s; )
    n[i] = i + e, i += 1;
  return n;
}), RP = /* @__PURE__ */ ue(zi), Lr = /* @__PURE__ */ qe(function(e, r, n) {
  return n.replace(e, r);
}), TP = /* @__PURE__ */ W(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), gp = /* @__PURE__ */ vp(1, "split"), jS = /* @__PURE__ */ W(function(t, e) {
  return Mt(sP(t.length, e), t);
});
function CP(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var $P = /* @__PURE__ */ W(function(e, r) {
  if (!CP(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + Dr(e));
  return yS(e).test(r);
}), IP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = ze.init, t.prototype["@@transducer/result"] = ze.result, t.prototype["@@transducer/step"] = function(e, r) {
    return Ds(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
}();
function FP(t) {
  return function(e) {
    return new IP(t, e);
  };
}
var MP = /* @__PURE__ */ W(/* @__PURE__ */ Wt([], FP, function(t, e) {
  for (var r = 0, n = e.length, s = [], i; r < n; )
    i = e[r], Ds(t, i, s) || (s[s.length] = i), r += 1;
  return s;
})), kP = /* @__PURE__ */ qe(function(e, r, n) {
  return e(n) ? r(n) : n;
}), eo = J(void 0), Yt = Mt(eo()), PS = In(Yt), _S = Mt(null), RS = In(_S), NP = In(Vs), DP = pe(1, xe(tt, kt("GeneratorFunction"))), qP = pe(1, xe(tt, kt("AsyncFunction"))), Nt = Cj([xe(tt, kt("Function")), DP, qP]), TS = pe(1, Nt(Array.isArray) ? Array.isArray : xe(tt, kt("Array"))), LP = yr(TS, Mn), VP = yr(TS, xS), gr = pe(1, xe(tt, kt("String"))), CS = Mt("");
function Nf(t) {
  "@babel/helpers - typeof";
  return Nf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Nf(t);
}
var $S = function(e) {
  return Nf(e) === "object";
}, BP = pe(1, yr(RS, pP($S, Nt))), UP = In(BP), to = Rj([gr, UP, xS]), JP = In(Nt), HP = pe(1, yr(RS, $S)), GP = xe(tt, kt("Object")), KP = xe(Dr, Mt(Dr(Object))), zP = Zi(yr(Nt, KP), ["constructor"]), Rt = pe(1, function(t) {
  if (!HP(t) || !GP(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return _S(e) ? !0 : zP(e);
}), WP = pe(1, xe(tt, kt("Number"))), YP = yr(WP, isFinite), XP = pe(1, YP), QP = Nt(Number.isFinite) ? pe(1, Yi(Number.isFinite, Number)) : XP, ZP = yr(QP, Kj(Mt, [Math.floor, dp])), e_ = pe(1, ZP), t_ = Nt(Number.isInteger) ? pe(1, Yi(Number.isInteger, Number)) : e_, r_ = pe(1, xe(tt, kt("RegExp")));
function n_(t) {
  return a_(t) || o_(t) || i_(t) || s_();
}
function s_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i_(t, e) {
  if (t) {
    if (typeof t == "string") return Df(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Df(t, e) : void 0;
  }
}
function o_(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function a_(t) {
  if (Array.isArray(t)) return Df(t);
}
function Df(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var c_ = Bj(function(t, e) {
  return t.length > e.length;
}), u_ = xe(TP(c_), Hj, $n("length")), l_ = lp(function(t, e, r) {
  var n = r.apply(void 0, n_(t));
  return NP(n) ? RP(n) : e;
}), f_ = function(e) {
  var r = u_(e);
  return pe(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return vr(l_(s), void 0, e);
  });
}, IS = mp(VP, f_, eo), ro = vP(bP), On = pe(3, function(t, e, r) {
  var n = Re(t, r), s = Re(xP(t), r);
  if (!JP(n) && !LP(t)) {
    var i = Yi(n, s);
    return kj(i, e);
  }
}), h_ = kP(gr, Lr(/[.*+?^${}()|[\]\\-]/g, "\\$&")), p_ = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, ey = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, d_ = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, m_ = function(e, r, n) {
  p_(e, r, n), ey(n, "str"), ey(r, "replaceValue"), d_(e);
  var s = new RegExp(r_(e) ? e : h_(e), "g");
  return Lr(s, r, n);
}, v_ = pe(3, m_), y_ = vp(2, "replaceAll"), g_ = Nt(String.prototype.replaceAll) ? y_ : v_, b_ = lp(function(t, e) {
  return xe(gp(""), cP(ro(t)), SS(""))(e);
}), bp = lp(function(t, e) {
  return xe(gp(""), fP(ro(t)), SS(""))(e);
}), fu = { exports: {} }, ty;
function x_() {
  if (ty) return fu.exports;
  ty = 1;
  var t = fu.exports = {}, e, r;
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
      for (var y = a.length; y; ) {
        for (u = a, a = []; ++f < y; )
          u && u[f].run();
        f = -1, y = a.length;
      }
      u = null, c = !1, o(p);
    }
  }
  t.nextTick = function(p) {
    var y = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var g = 1; g < arguments.length; g++)
        y[g - 1] = arguments[g];
    a.push(new h(p, y)), a.length === 1 && !c && i(d);
  };
  function h(p, y) {
    this.fun = p, this.array = y;
  }
  h.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {};
  function v() {
  }
  return t.on = v, t.addListener = v, t.once = v, t.off = v, t.removeListener = v, t.removeAllListeners = v, t.emit = v, t.prependListener = v, t.prependOnceListener = v, t.listeners = function(p) {
    return [];
  }, t.binding = function(p) {
    throw new Error("process.binding is not supported");
  }, t.cwd = function() {
    return "/";
  }, t.chdir = function(p) {
    throw new Error("process.chdir is not supported");
  }, t.umask = function() {
    return 0;
  }, fu.exports;
}
var S_ = x_();
const Us = /* @__PURE__ */ Di(S_), xp = () => Zi($P(/^win/), ["platform"], Us), no = (t) => {
  try {
    const e = new URL(t);
    return b_(":", e.protocol);
  } catch {
    return;
  }
}, O_ = xe(no, PS), FS = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, Sp = (t) => {
  if (Us.browser)
    return !1;
  const e = no(t);
  return Yt(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, so = (t) => {
  const e = no(t);
  return e === "http" || e === "https";
}, E_ = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, Op = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Bs(!1, "keepFileProtocol", e), s = Bs(xp, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = g_("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, MS = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  xp() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < e.length; n += 2)
    r = r.replace(e[n], e[n + 1]);
  return r;
}, Ep = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, fe = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, Js = () => {
  if (Us.browser)
    return fe(globalThis.location.href);
  const t = Us.cwd(), e = Xi(t);
  return ["/", "\\"].includes(e) ? t : t + (xp() ? "\\" : "/");
}, _e = (t, e) => {
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
}, kn = (t) => {
  if (Sp(t))
    return MS(Op(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, st = (t) => Sp(t) ? Op(t) : decodeURI(t), w_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: Js,
  fromFileSystemPath: MS,
  getExtension: FS,
  getHash: Ep,
  getProtocol: no,
  hasProtocol: O_,
  isFileSystemPath: Sp,
  isHttpUrl: so,
  isURI: E_,
  resolve: _e,
  sanitize: kn,
  stripHash: fe,
  toFileSystemPath: Op,
  unsanitize: st
}, Symbol.toStringTag, { value: "Module" }));
let En = class {
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
    return gr(this.uri) ? FS(this.uri) : "";
  }
  toString() {
    return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(tt(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
  }
};
class Vr {
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
    const r = gr(e) ? e : e.uri;
    return PS(this.find((n) => n.uri === r));
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
const kS = {
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
    circularReplacer: dp,
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
}, A_ = SP(Re(["resolve", "baseURI"]), M(["resolve", "baseURI"])), j_ = (t) => CS(t) ? Js() : t, NS = (t, e) => {
  const r = Qi(t, e);
  return jP(A_, j_, r);
};
class P_ extends ye {
  constructor(r, n) {
    super(r, {
      cause: n.cause
    });
    A(this, "plugin");
    this.plugin = n.plugin;
  }
}
const wp = async (t, e, r) => {
  const n = await Promise.all(r.map(On([t], e)));
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
      n = new P_("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class qf extends ye {
}
class jp extends ye {
}
class DS extends jp {
}
class qS extends DS {
}
const __ = async (t, e) => {
  const r = e.resolve.resolvers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.resolve.resolverOpts);
  }), n = await wp("canRead", [t, e], r);
  if (Mn(n))
    throw new qS(t.uri);
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
}, R_ = async (t, e) => {
  const r = e.parse.parsers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.parse.parserOpts);
  }), n = await wp("canParse", [t, e], r);
  if (Mn(n))
    throw new qS(t.uri);
  try {
    const {
      plugin: s,
      result: i
    } = await Ap("parse", [t, e], n);
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new qf(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new qf(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, T_ = async (t, e) => {
  const r = new En({
    uri: kn(fe(t)),
    mediaType: e.parse.mediaType
  }), n = await __(r, e);
  return R_(new En({
    ...r,
    data: n
  }), e);
};
var Se = {}, hu, ry;
function C_() {
  if (ry) return hu;
  ry = 1;
  function t(e) {
    return e === null;
  }
  return hu = t, hu;
}
var pu, ny;
function LS() {
  if (ny) return pu;
  ny = 1;
  var t = typeof _r == "object" && _r && _r.Object === Object && _r;
  return pu = t, pu;
}
var du, sy;
function Dt() {
  if (sy) return du;
  sy = 1;
  var t = LS(), e = typeof self == "object" && self && self.Object === Object && self, r = t || e || Function("return this")();
  return du = r, du;
}
var mu, iy;
function Pp() {
  if (iy) return mu;
  iy = 1;
  var t = Dt(), e = t.Symbol;
  return mu = e, mu;
}
var vu, oy;
function $_() {
  if (oy) return vu;
  oy = 1;
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
  return vu = i, vu;
}
var yu, ay;
function I_() {
  if (ay) return yu;
  ay = 1;
  var t = Object.prototype, e = t.toString;
  function r(n) {
    return e.call(n);
  }
  return yu = r, yu;
}
var gu, cy;
function br() {
  if (cy) return gu;
  cy = 1;
  var t = Pp(), e = $_(), r = I_(), n = "[object Null]", s = "[object Undefined]", i = t ? t.toStringTag : void 0;
  function o(a) {
    return a == null ? a === void 0 ? s : n : i && i in Object(a) ? e(a) : r(a);
  }
  return gu = o, gu;
}
var bu, uy;
function io() {
  if (uy) return bu;
  uy = 1;
  var t = Array.isArray;
  return bu = t, bu;
}
var xu, ly;
function xr() {
  if (ly) return xu;
  ly = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return xu = t, xu;
}
var Su, fy;
function F_() {
  if (fy) return Su;
  fy = 1;
  var t = br(), e = io(), r = xr(), n = "[object String]";
  function s(i) {
    return typeof i == "string" || !e(i) && r(i) && t(i) == n;
  }
  return Su = s, Su;
}
var Ou, hy;
function M_() {
  if (hy) return Ou;
  hy = 1;
  var t = br(), e = xr(), r = "[object Number]";
  function n(s) {
    return typeof s == "number" || e(s) && t(s) == r;
  }
  return Ou = n, Ou;
}
var Eu, py;
function k_() {
  if (py) return Eu;
  py = 1;
  var t = br(), e = xr(), r = "[object Boolean]";
  function n(s) {
    return s === !0 || s === !1 || e(s) && t(s) == r;
  }
  return Eu = n, Eu;
}
var wu, dy;
function oo() {
  if (dy) return wu;
  dy = 1;
  function t(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  return wu = t, wu;
}
var Au, my;
function _p() {
  if (my) return Au;
  my = 1;
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
  return Au = t, Au;
}
var ju, vy;
function N_() {
  if (vy) return ju;
  vy = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return ju = t, ju;
}
var Pu, yy;
function VS() {
  if (yy) return Pu;
  yy = 1;
  function t(e, r) {
    return e === r || e !== e && r !== r;
  }
  return Pu = t, Pu;
}
var _u, gy;
function ao() {
  if (gy) return _u;
  gy = 1;
  var t = VS();
  function e(r, n) {
    for (var s = r.length; s--; )
      if (t(r[s][0], n))
        return s;
    return -1;
  }
  return _u = e, _u;
}
var Ru, by;
function D_() {
  if (by) return Ru;
  by = 1;
  var t = ao(), e = Array.prototype, r = e.splice;
  function n(s) {
    var i = this.__data__, o = t(i, s);
    if (o < 0)
      return !1;
    var a = i.length - 1;
    return o == a ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return Ru = n, Ru;
}
var Tu, xy;
function q_() {
  if (xy) return Tu;
  xy = 1;
  var t = ao();
  function e(r) {
    var n = this.__data__, s = t(n, r);
    return s < 0 ? void 0 : n[s][1];
  }
  return Tu = e, Tu;
}
var Cu, Sy;
function L_() {
  if (Sy) return Cu;
  Sy = 1;
  var t = ao();
  function e(r) {
    return t(this.__data__, r) > -1;
  }
  return Cu = e, Cu;
}
var $u, Oy;
function V_() {
  if (Oy) return $u;
  Oy = 1;
  var t = ao();
  function e(r, n) {
    var s = this.__data__, i = t(s, r);
    return i < 0 ? (++this.size, s.push([r, n])) : s[i][1] = n, this;
  }
  return $u = e, $u;
}
var Iu, Ey;
function co() {
  if (Ey) return Iu;
  Ey = 1;
  var t = N_(), e = D_(), r = q_(), n = L_(), s = V_();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, Iu = i, Iu;
}
var Fu, wy;
function B_() {
  if (wy) return Fu;
  wy = 1;
  var t = co();
  function e() {
    this.__data__ = new t(), this.size = 0;
  }
  return Fu = e, Fu;
}
var Mu, Ay;
function U_() {
  if (Ay) return Mu;
  Ay = 1;
  function t(e) {
    var r = this.__data__, n = r.delete(e);
    return this.size = r.size, n;
  }
  return Mu = t, Mu;
}
var ku, jy;
function J_() {
  if (jy) return ku;
  jy = 1;
  function t(e) {
    return this.__data__.get(e);
  }
  return ku = t, ku;
}
var Nu, Py;
function H_() {
  if (Py) return Nu;
  Py = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Nu = t, Nu;
}
var Du, _y;
function BS() {
  if (_y) return Du;
  _y = 1;
  var t = br(), e = oo(), r = "[object AsyncFunction]", n = "[object Function]", s = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(a) {
    if (!e(a))
      return !1;
    var c = t(a);
    return c == n || c == s || c == r || c == i;
  }
  return Du = o, Du;
}
var qu, Ry;
function G_() {
  if (Ry) return qu;
  Ry = 1;
  var t = Dt(), e = t["__core-js_shared__"];
  return qu = e, qu;
}
var Lu, Ty;
function K_() {
  if (Ty) return Lu;
  Ty = 1;
  var t = G_(), e = function() {
    var n = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!e && e in n;
  }
  return Lu = r, Lu;
}
var Vu, Cy;
function US() {
  if (Cy) return Vu;
  Cy = 1;
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
  return Vu = r, Vu;
}
var Bu, $y;
function z_() {
  if ($y) return Bu;
  $y = 1;
  var t = BS(), e = K_(), r = oo(), n = US(), s = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, a = Object.prototype, c = o.toString, u = a.hasOwnProperty, f = RegExp(
    "^" + c.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!r(d) || e(d))
      return !1;
    var h = t(d) ? f : i;
    return h.test(n(d));
  }
  return Bu = l, Bu;
}
var Uu, Iy;
function W_() {
  if (Iy) return Uu;
  Iy = 1;
  function t(e, r) {
    return e == null ? void 0 : e[r];
  }
  return Uu = t, Uu;
}
var Ju, Fy;
function Wr() {
  if (Fy) return Ju;
  Fy = 1;
  var t = z_(), e = W_();
  function r(n, s) {
    var i = e(n, s);
    return t(i) ? i : void 0;
  }
  return Ju = r, Ju;
}
var Hu, My;
function Rp() {
  if (My) return Hu;
  My = 1;
  var t = Wr(), e = Dt(), r = t(e, "Map");
  return Hu = r, Hu;
}
var Gu, ky;
function uo() {
  if (ky) return Gu;
  ky = 1;
  var t = Wr(), e = t(Object, "create");
  return Gu = e, Gu;
}
var Ku, Ny;
function Y_() {
  if (Ny) return Ku;
  Ny = 1;
  var t = uo();
  function e() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return Ku = e, Ku;
}
var zu, Dy;
function X_() {
  if (Dy) return zu;
  Dy = 1;
  function t(e) {
    var r = this.has(e) && delete this.__data__[e];
    return this.size -= r ? 1 : 0, r;
  }
  return zu = t, zu;
}
var Wu, qy;
function Q_() {
  if (qy) return Wu;
  qy = 1;
  var t = uo(), e = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function s(i) {
    var o = this.__data__;
    if (t) {
      var a = o[i];
      return a === e ? void 0 : a;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return Wu = s, Wu;
}
var Yu, Ly;
function Z_() {
  if (Ly) return Yu;
  Ly = 1;
  var t = uo(), e = Object.prototype, r = e.hasOwnProperty;
  function n(s) {
    var i = this.__data__;
    return t ? i[s] !== void 0 : r.call(i, s);
  }
  return Yu = n, Yu;
}
var Xu, Vy;
function eR() {
  if (Vy) return Xu;
  Vy = 1;
  var t = uo(), e = "__lodash_hash_undefined__";
  function r(n, s) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = t && s === void 0 ? e : s, this;
  }
  return Xu = r, Xu;
}
var Qu, By;
function tR() {
  if (By) return Qu;
  By = 1;
  var t = Y_(), e = X_(), r = Q_(), n = Z_(), s = eR();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, Qu = i, Qu;
}
var Zu, Uy;
function rR() {
  if (Uy) return Zu;
  Uy = 1;
  var t = tR(), e = co(), r = Rp();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (r || e)(),
      string: new t()
    };
  }
  return Zu = n, Zu;
}
var el, Jy;
function nR() {
  if (Jy) return el;
  Jy = 1;
  function t(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
  }
  return el = t, el;
}
var tl, Hy;
function lo() {
  if (Hy) return tl;
  Hy = 1;
  var t = nR();
  function e(r, n) {
    var s = r.__data__;
    return t(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
  }
  return tl = e, tl;
}
var rl, Gy;
function sR() {
  if (Gy) return rl;
  Gy = 1;
  var t = lo();
  function e(r) {
    var n = t(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return rl = e, rl;
}
var nl, Ky;
function iR() {
  if (Ky) return nl;
  Ky = 1;
  var t = lo();
  function e(r) {
    return t(this, r).get(r);
  }
  return nl = e, nl;
}
var sl, zy;
function oR() {
  if (zy) return sl;
  zy = 1;
  var t = lo();
  function e(r) {
    return t(this, r).has(r);
  }
  return sl = e, sl;
}
var il, Wy;
function aR() {
  if (Wy) return il;
  Wy = 1;
  var t = lo();
  function e(r, n) {
    var s = t(this, r), i = s.size;
    return s.set(r, n), this.size += s.size == i ? 0 : 1, this;
  }
  return il = e, il;
}
var ol, Yy;
function JS() {
  if (Yy) return ol;
  Yy = 1;
  var t = rR(), e = sR(), r = iR(), n = oR(), s = aR();
  function i(o) {
    var a = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = s, ol = i, ol;
}
var al, Xy;
function cR() {
  if (Xy) return al;
  Xy = 1;
  var t = co(), e = Rp(), r = JS(), n = 200;
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
  return al = s, al;
}
var cl, Qy;
function uR() {
  if (Qy) return cl;
  Qy = 1;
  var t = co(), e = B_(), r = U_(), n = J_(), s = H_(), i = cR();
  function o(a) {
    var c = this.__data__ = new t(a);
    this.size = c.size;
  }
  return o.prototype.clear = e, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = s, o.prototype.set = i, cl = o, cl;
}
var ul, Zy;
function lR() {
  if (Zy) return ul;
  Zy = 1;
  var t = "__lodash_hash_undefined__";
  function e(r) {
    return this.__data__.set(r, t), this;
  }
  return ul = e, ul;
}
var ll, eg;
function fR() {
  if (eg) return ll;
  eg = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return ll = t, ll;
}
var fl, tg;
function hR() {
  if (tg) return fl;
  tg = 1;
  var t = JS(), e = lR(), r = fR();
  function n(s) {
    var i = -1, o = s == null ? 0 : s.length;
    for (this.__data__ = new t(); ++i < o; )
      this.add(s[i]);
  }
  return n.prototype.add = n.prototype.push = e, n.prototype.has = r, fl = n, fl;
}
var hl, rg;
function pR() {
  if (rg) return hl;
  rg = 1;
  function t(e, r) {
    for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
      if (r(e[n], n, e))
        return !0;
    return !1;
  }
  return hl = t, hl;
}
var pl, ng;
function dR() {
  if (ng) return pl;
  ng = 1;
  function t(e, r) {
    return e.has(r);
  }
  return pl = t, pl;
}
var dl, sg;
function HS() {
  if (sg) return dl;
  sg = 1;
  var t = hR(), e = pR(), r = dR(), n = 1, s = 2;
  function i(o, a, c, u, f, l) {
    var d = c & n, h = o.length, v = a.length;
    if (h != v && !(d && v > h))
      return !1;
    var p = l.get(o), y = l.get(a);
    if (p && y)
      return p == a && y == o;
    var g = -1, m = !0, b = c & s ? new t() : void 0;
    for (l.set(o, a), l.set(a, o); ++g < h; ) {
      var x = o[g], w = a[g];
      if (u)
        var O = d ? u(w, x, g, a, o, l) : u(x, w, g, o, a, l);
      if (O !== void 0) {
        if (O)
          continue;
        m = !1;
        break;
      }
      if (b) {
        if (!e(a, function(j, C) {
          if (!r(b, C) && (x === j || f(x, j, c, u, l)))
            return b.push(C);
        })) {
          m = !1;
          break;
        }
      } else if (!(x === w || f(x, w, c, u, l))) {
        m = !1;
        break;
      }
    }
    return l.delete(o), l.delete(a), m;
  }
  return dl = i, dl;
}
var ml, ig;
function mR() {
  if (ig) return ml;
  ig = 1;
  var t = Dt(), e = t.Uint8Array;
  return ml = e, ml;
}
var vl, og;
function vR() {
  if (og) return vl;
  og = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(s, i) {
      n[++r] = [i, s];
    }), n;
  }
  return vl = t, vl;
}
var yl, ag;
function yR() {
  if (ag) return yl;
  ag = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(s) {
      n[++r] = s;
    }), n;
  }
  return yl = t, yl;
}
var gl, cg;
function gR() {
  if (cg) return gl;
  cg = 1;
  var t = Pp(), e = mR(), r = VS(), n = HS(), s = vR(), i = yR(), o = 1, a = 2, c = "[object Boolean]", u = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", h = "[object RegExp]", v = "[object Set]", p = "[object String]", y = "[object Symbol]", g = "[object ArrayBuffer]", m = "[object DataView]", b = t ? t.prototype : void 0, x = b ? b.valueOf : void 0;
  function w(O, j, C, _, N, S, R) {
    switch (C) {
      case m:
        if (O.byteLength != j.byteLength || O.byteOffset != j.byteOffset)
          return !1;
        O = O.buffer, j = j.buffer;
      case g:
        return !(O.byteLength != j.byteLength || !S(new e(O), new e(j)));
      case c:
      case u:
      case d:
        return r(+O, +j);
      case f:
        return O.name == j.name && O.message == j.message;
      case h:
      case p:
        return O == j + "";
      case l:
        var I = s;
      case v:
        var L = _ & o;
        if (I || (I = i), O.size != j.size && !L)
          return !1;
        var G = R.get(O);
        if (G)
          return G == j;
        _ |= a, R.set(O, j);
        var ve = n(I(O), I(j), _, N, S, R);
        return R.delete(O), ve;
      case y:
        if (x)
          return x.call(O) == x.call(j);
    }
    return !1;
  }
  return gl = w, gl;
}
var bl, ug;
function bR() {
  if (ug) return bl;
  ug = 1;
  function t(e, r) {
    for (var n = -1, s = r.length, i = e.length; ++n < s; )
      e[i + n] = r[n];
    return e;
  }
  return bl = t, bl;
}
var xl, lg;
function xR() {
  if (lg) return xl;
  lg = 1;
  var t = bR(), e = io();
  function r(n, s, i) {
    var o = s(n);
    return e(n) ? o : t(o, i(n));
  }
  return xl = r, xl;
}
var Sl, fg;
function SR() {
  if (fg) return Sl;
  fg = 1;
  function t(e, r) {
    for (var n = -1, s = e == null ? 0 : e.length, i = 0, o = []; ++n < s; ) {
      var a = e[n];
      r(a, n, e) && (o[i++] = a);
    }
    return o;
  }
  return Sl = t, Sl;
}
var Ol, hg;
function OR() {
  if (hg) return Ol;
  hg = 1;
  function t() {
    return [];
  }
  return Ol = t, Ol;
}
var El, pg;
function ER() {
  if (pg) return El;
  pg = 1;
  var t = SR(), e = OR(), r = Object.prototype, n = r.propertyIsEnumerable, s = Object.getOwnPropertySymbols, i = s ? function(o) {
    return o == null ? [] : (o = Object(o), t(s(o), function(a) {
      return n.call(o, a);
    }));
  } : e;
  return El = i, El;
}
var wl, dg;
function wR() {
  if (dg) return wl;
  dg = 1;
  function t(e, r) {
    for (var n = -1, s = Array(e); ++n < e; )
      s[n] = r(n);
    return s;
  }
  return wl = t, wl;
}
var Al, mg;
function AR() {
  if (mg) return Al;
  mg = 1;
  var t = br(), e = xr(), r = "[object Arguments]";
  function n(s) {
    return e(s) && t(s) == r;
  }
  return Al = n, Al;
}
var jl, vg;
function jR() {
  if (vg) return jl;
  vg = 1;
  var t = AR(), e = xr(), r = Object.prototype, n = r.hasOwnProperty, s = r.propertyIsEnumerable, i = t(/* @__PURE__ */ function() {
    return arguments;
  }()) ? t : function(o) {
    return e(o) && n.call(o, "callee") && !s.call(o, "callee");
  };
  return jl = i, jl;
}
var an = { exports: {} }, Pl, yg;
function PR() {
  if (yg) return Pl;
  yg = 1;
  function t() {
    return !1;
  }
  return Pl = t, Pl;
}
an.exports;
var gg;
function GS() {
  return gg || (gg = 1, function(t, e) {
    var r = Dt(), n = PR(), s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, u = c || n;
    t.exports = u;
  }(an, an.exports)), an.exports;
}
var _l, bg;
function _R() {
  if (bg) return _l;
  bg = 1;
  var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function r(n, s) {
    var i = typeof n;
    return s = s ?? t, !!s && (i == "number" || i != "symbol" && e.test(n)) && n > -1 && n % 1 == 0 && n < s;
  }
  return _l = r, _l;
}
var Rl, xg;
function KS() {
  if (xg) return Rl;
  xg = 1;
  var t = 9007199254740991;
  function e(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= t;
  }
  return Rl = e, Rl;
}
var Tl, Sg;
function RR() {
  if (Sg) return Tl;
  Sg = 1;
  var t = br(), e = KS(), r = xr(), n = "[object Arguments]", s = "[object Array]", i = "[object Boolean]", o = "[object Date]", a = "[object Error]", c = "[object Function]", u = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", h = "[object Set]", v = "[object String]", p = "[object WeakMap]", y = "[object ArrayBuffer]", g = "[object DataView]", m = "[object Float32Array]", b = "[object Float64Array]", x = "[object Int8Array]", w = "[object Int16Array]", O = "[object Int32Array]", j = "[object Uint8Array]", C = "[object Uint8ClampedArray]", _ = "[object Uint16Array]", N = "[object Uint32Array]", S = {};
  S[m] = S[b] = S[x] = S[w] = S[O] = S[j] = S[C] = S[_] = S[N] = !0, S[n] = S[s] = S[y] = S[i] = S[g] = S[o] = S[a] = S[c] = S[u] = S[f] = S[l] = S[d] = S[h] = S[v] = S[p] = !1;
  function R(I) {
    return r(I) && e(I.length) && !!S[t(I)];
  }
  return Tl = R, Tl;
}
var Cl, Og;
function TR() {
  if (Og) return Cl;
  Og = 1;
  function t(e) {
    return function(r) {
      return e(r);
    };
  }
  return Cl = t, Cl;
}
var cn = { exports: {} };
cn.exports;
var Eg;
function CR() {
  return Eg || (Eg = 1, function(t, e) {
    var r = LS(), n = e && !e.nodeType && e, s = n && !0 && t && !t.nodeType && t, i = s && s.exports === n, o = i && r.process, a = function() {
      try {
        var c = s && s.require && s.require("util").types;
        return c || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    t.exports = a;
  }(cn, cn.exports)), cn.exports;
}
var $l, wg;
function zS() {
  if (wg) return $l;
  wg = 1;
  var t = RR(), e = TR(), r = CR(), n = r && r.isTypedArray, s = n ? e(n) : t;
  return $l = s, $l;
}
var Il, Ag;
function $R() {
  if (Ag) return Il;
  Ag = 1;
  var t = wR(), e = jR(), r = io(), n = GS(), s = _R(), i = zS(), o = Object.prototype, a = o.hasOwnProperty;
  function c(u, f) {
    var l = r(u), d = !l && e(u), h = !l && !d && n(u), v = !l && !d && !h && i(u), p = l || d || h || v, y = p ? t(u.length, String) : [], g = y.length;
    for (var m in u)
      (f || a.call(u, m)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
      (m == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      h && (m == "offset" || m == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      v && (m == "buffer" || m == "byteLength" || m == "byteOffset") || // Skip index properties.
      s(m, g))) && y.push(m);
    return y;
  }
  return Il = c, Il;
}
var Fl, jg;
function IR() {
  if (jg) return Fl;
  jg = 1;
  var t = Object.prototype;
  function e(r) {
    var n = r && r.constructor, s = typeof n == "function" && n.prototype || t;
    return r === s;
  }
  return Fl = e, Fl;
}
var Ml, Pg;
function FR() {
  if (Pg) return Ml;
  Pg = 1;
  function t(e, r) {
    return function(n) {
      return e(r(n));
    };
  }
  return Ml = t, Ml;
}
var kl, _g;
function MR() {
  if (_g) return kl;
  _g = 1;
  var t = FR(), e = t(Object.keys, Object);
  return kl = e, kl;
}
var Nl, Rg;
function kR() {
  if (Rg) return Nl;
  Rg = 1;
  var t = IR(), e = MR(), r = Object.prototype, n = r.hasOwnProperty;
  function s(i) {
    if (!t(i))
      return e(i);
    var o = [];
    for (var a in Object(i))
      n.call(i, a) && a != "constructor" && o.push(a);
    return o;
  }
  return Nl = s, Nl;
}
var Dl, Tg;
function NR() {
  if (Tg) return Dl;
  Tg = 1;
  var t = BS(), e = KS();
  function r(n) {
    return n != null && e(n.length) && !t(n);
  }
  return Dl = r, Dl;
}
var ql, Cg;
function DR() {
  if (Cg) return ql;
  Cg = 1;
  var t = $R(), e = kR(), r = NR();
  function n(s) {
    return r(s) ? t(s) : e(s);
  }
  return ql = n, ql;
}
var Ll, $g;
function qR() {
  if ($g) return Ll;
  $g = 1;
  var t = xR(), e = ER(), r = DR();
  function n(s) {
    return t(s, r, e);
  }
  return Ll = n, Ll;
}
var Vl, Ig;
function LR() {
  if (Ig) return Vl;
  Ig = 1;
  var t = qR(), e = 1, r = Object.prototype, n = r.hasOwnProperty;
  function s(i, o, a, c, u, f) {
    var l = a & e, d = t(i), h = d.length, v = t(o), p = v.length;
    if (h != p && !l)
      return !1;
    for (var y = h; y--; ) {
      var g = d[y];
      if (!(l ? g in o : n.call(o, g)))
        return !1;
    }
    var m = f.get(i), b = f.get(o);
    if (m && b)
      return m == o && b == i;
    var x = !0;
    f.set(i, o), f.set(o, i);
    for (var w = l; ++y < h; ) {
      g = d[y];
      var O = i[g], j = o[g];
      if (c)
        var C = l ? c(j, O, g, o, i, f) : c(O, j, g, i, o, f);
      if (!(C === void 0 ? O === j || u(O, j, a, c, f) : C)) {
        x = !1;
        break;
      }
      w || (w = g == "constructor");
    }
    if (x && !w) {
      var _ = i.constructor, N = o.constructor;
      _ != N && "constructor" in i && "constructor" in o && !(typeof _ == "function" && _ instanceof _ && typeof N == "function" && N instanceof N) && (x = !1);
    }
    return f.delete(i), f.delete(o), x;
  }
  return Vl = s, Vl;
}
var Bl, Fg;
function VR() {
  if (Fg) return Bl;
  Fg = 1;
  var t = Wr(), e = Dt(), r = t(e, "DataView");
  return Bl = r, Bl;
}
var Ul, Mg;
function BR() {
  if (Mg) return Ul;
  Mg = 1;
  var t = Wr(), e = Dt(), r = t(e, "Promise");
  return Ul = r, Ul;
}
var Jl, kg;
function UR() {
  if (kg) return Jl;
  kg = 1;
  var t = Wr(), e = Dt(), r = t(e, "Set");
  return Jl = r, Jl;
}
var Hl, Ng;
function JR() {
  if (Ng) return Hl;
  Ng = 1;
  var t = Wr(), e = Dt(), r = t(e, "WeakMap");
  return Hl = r, Hl;
}
var Gl, Dg;
function HR() {
  if (Dg) return Gl;
  Dg = 1;
  var t = VR(), e = Rp(), r = BR(), n = UR(), s = JR(), i = br(), o = US(), a = "[object Map]", c = "[object Object]", u = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", h = o(t), v = o(e), p = o(r), y = o(n), g = o(s), m = i;
  return (t && m(new t(new ArrayBuffer(1))) != d || e && m(new e()) != a || r && m(r.resolve()) != u || n && m(new n()) != f || s && m(new s()) != l) && (m = function(b) {
    var x = i(b), w = x == c ? b.constructor : void 0, O = w ? o(w) : "";
    if (O)
      switch (O) {
        case h:
          return d;
        case v:
          return a;
        case p:
          return u;
        case y:
          return f;
        case g:
          return l;
      }
    return x;
  }), Gl = m, Gl;
}
var Kl, qg;
function GR() {
  if (qg) return Kl;
  qg = 1;
  var t = uR(), e = HS(), r = gR(), n = LR(), s = HR(), i = io(), o = GS(), a = zS(), c = 1, u = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, h = d.hasOwnProperty;
  function v(p, y, g, m, b, x) {
    var w = i(p), O = i(y), j = w ? f : s(p), C = O ? f : s(y);
    j = j == u ? l : j, C = C == u ? l : C;
    var _ = j == l, N = C == l, S = j == C;
    if (S && o(p)) {
      if (!o(y))
        return !1;
      w = !0, _ = !1;
    }
    if (S && !_)
      return x || (x = new t()), w || a(p) ? e(p, y, g, m, b, x) : r(p, y, j, g, m, b, x);
    if (!(g & c)) {
      var R = _ && h.call(p, "__wrapped__"), I = N && h.call(y, "__wrapped__");
      if (R || I) {
        var L = R ? p.value() : p, G = I ? y.value() : y;
        return x || (x = new t()), b(L, G, g, m, x);
      }
    }
    return S ? (x || (x = new t()), n(p, y, g, m, b, x)) : !1;
  }
  return Kl = v, Kl;
}
var zl, Lg;
function KR() {
  if (Lg) return zl;
  Lg = 1;
  var t = GR(), e = xr();
  function r(n, s, i, o, a) {
    return n === s ? !0 : n == null || s == null || !e(n) && !e(s) ? n !== n && s !== s : t(n, s, i, o, r, a);
  }
  return zl = r, zl;
}
var Wl, Vg;
function zR() {
  if (Vg) return Wl;
  Vg = 1;
  var t = KR();
  function e(r, n) {
    return t(r, n);
  }
  return Wl = e, Wl;
}
var Yl, Bg;
function fo() {
  if (Bg) return Yl;
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
  return Yl = t, Yl;
}
var Xl, Ug;
function ho() {
  if (Ug) return Xl;
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
  return Xl = e, Xl;
}
var Ql, Jg;
function po() {
  if (Jg) return Ql;
  Jg = 1;
  const t = ho();
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
  }), Ql = r, Ql;
}
var Zl, Hg;
function qt() {
  if (Hg) return Zl;
  Hg = 1;
  const t = zR(), e = fo(), r = po();
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
          const h = i[d], v = l.indexOf(h);
          if (v !== -1)
            l = l.splice(0, v);
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
  return Zl = n, Zl;
}
var ef, Gg;
function WR() {
  if (Gg) return ef;
  Gg = 1;
  const t = qt();
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
  return ef = e, ef;
}
var tf, Kg;
function YR() {
  if (Kg) return tf;
  Kg = 1;
  const t = qt();
  return tf = class extends t {
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
  }, tf;
}
var rf, zg;
function XR() {
  if (zg) return rf;
  zg = 1;
  const t = qt();
  return rf = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "number";
    }
    primitive() {
      return "number";
    }
  }, rf;
}
var nf, Wg;
function QR() {
  if (Wg) return nf;
  Wg = 1;
  const t = qt();
  return nf = class extends t {
    constructor(r, n, s) {
      super(r, n, s), this.element = "boolean";
    }
    primitive() {
      return "boolean";
    }
  }, nf;
}
var sf, Yg;
function WS() {
  if (Yg) return sf;
  Yg = 1;
  const t = ho(), e = qt(), r = po();
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
  }), sf = n, sf;
}
var of, Xg;
function YS() {
  if (Xg) return of;
  Xg = 1;
  const t = fo(), e = qt();
  return of = class extends e {
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
  }, of;
}
var af, Qg;
function XS() {
  if (Qg) return af;
  Qg = 1;
  const t = ho(), e = po();
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
  return af = r, af;
}
var cf, Zg;
function ZR() {
  if (Zg) return cf;
  Zg = 1;
  const t = ho(), e = oo(), r = WS(), n = YS(), s = XS();
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
  return cf = i, cf;
}
var uf, eb;
function eT() {
  if (eb) return uf;
  eb = 1;
  const t = qt();
  return uf = class extends t {
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
  }, uf;
}
var lf, tb;
function tT() {
  if (tb) return lf;
  tb = 1;
  const t = qt();
  return lf = class extends t {
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
  }, lf;
}
var ff, rb;
function QS() {
  if (rb) return ff;
  rb = 1;
  const t = qt(), e = WR(), r = YR(), n = XR(), s = QR(), i = WS(), o = YS(), a = ZR(), c = eT(), u = tT(), f = po(), l = XS(), d = fo();
  function h(v) {
    return v instanceof t ? v : typeof v == "string" ? new r(v) : typeof v == "number" ? new n(v) : typeof v == "boolean" ? new s(v) : v === null ? new e() : Array.isArray(v) ? new i(v.map(h)) : typeof v == "object" ? new a(v) : v;
  }
  return t.prototype.ObjectElement = a, t.prototype.RefElement = u, t.prototype.MemberElement = o, t.prototype.refract = h, f.prototype.refract = h, ff = {
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
  }, ff;
}
var hf, nb;
function rT() {
  if (nb) return hf;
  nb = 1;
  const t = C_(), e = F_(), r = M_(), n = k_(), s = oo(), i = _p(), o = QS();
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
  return i.prototype.Namespace = a, hf = a, hf;
}
var pf, sb;
function nT() {
  if (sb) return pf;
  sb = 1;
  const t = _p();
  return pf = class extends t {
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
  }, pf;
}
var ib;
function sT() {
  if (ib) return Se;
  ib = 1;
  const t = rT(), e = QS();
  return Se.Namespace = t, Se.namespace = function(n) {
    return new t(n);
  }, Se.KeyValuePair = fo(), Se.ArraySlice = e.ArraySlice, Se.ObjectSlice = e.ObjectSlice, Se.Element = e.Element, Se.StringElement = e.StringElement, Se.NumberElement = e.NumberElement, Se.BooleanElement = e.BooleanElement, Se.NullElement = e.NullElement, Se.ArrayElement = e.ArrayElement, Se.ObjectElement = e.ObjectElement, Se.MemberElement = e.MemberElement, Se.RefElement = e.RefElement, Se.LinkElement = e.LinkElement, Se.refract = e.refract, Se.JSONSerialiser = _p(), Se.JSON06Serialiser = nT(), Se;
}
var E = sT();
class Hs extends E.StringElement {
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
class Gs extends E.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}
class ct extends E.ArrayElement {
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
    if (Yt(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
}
class Ks extends E.ArrayElement {
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
    const r = new E.ArrayElement([e.start.row, e.start.column, e.start.char]), n = new E.ArrayElement([e.end.row, e.end.column, e.end.char]);
    r.classes.push("position"), n.classes.push("position"), this.push(r).push(n);
  }
}
const iT = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", oT = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, aT = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, cT = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof E.ArrayElement) && e.classes.includes(t), Vt = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, k = (t) => t({
  hasMethod: iT,
  hasBasicElementProps: oT,
  primitiveEq: aT,
  isElementType: Vt,
  hasClass: cT
}), be = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof E.Element || t(r) && e(void 0, r)), z = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof E.StringElement || t(r) && e("string", r)), Tp = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof E.NumberElement || t(r) && e("number", r)), Cp = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof E.NullElement || t(r) && e("null", r)), Nn = k(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof E.BooleanElement || t(r) && e("boolean", r)), le = k(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof E.ObjectElement || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Ue = k(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof E.ArrayElement && !(n instanceof E.ObjectElement) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), ft = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof E.MemberElement || t(n) && e("member", n) && r(void 0, n)), ZS = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof E.LinkElement || t(n) && e("link", n) && r(void 0, n)), eO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof E.RefElement || t(n) && e("ref", n) && r(void 0, n)), uT = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Hs || t(n) && e("annotation", n) && r("array", n)), lT = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gs || t(n) && e("comment", n) && r("string", n)), tO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ct || t(n) && e("parseResult", n) && r("array", n)), rO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ks || t(n) && e("sourceMap", n) && r("array", n)), cr = (t) => Vt("object", t) || Vt("array", t) || Vt("boolean", t) || Vt("number", t) || Vt("string", t) || Vt("null", t) || Vt("member", t), Dn = (t) => rO(t.meta.get("sourceMap")), fT = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Ue(r) ? sp(ro(r.toValue()), t) : !1;
}, mo = (t, e) => t.length === 0 ? !0 : sp(ro(e.classes.toValue()), t), hT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Dn,
  includesClasses: mo,
  includesSymbols: fT,
  isAnnotationElement: uT,
  isArrayElement: Ue,
  isBooleanElement: Nn,
  isCommentElement: lT,
  isElement: be,
  isLinkElement: ZS,
  isMemberElement: ft,
  isNullElement: Cp,
  isNumberElement: Tp,
  isObjectElement: le,
  isParseResultElement: tO,
  isPrimitiveElement: cr,
  isRefElement: eO,
  isSourceMapElement: rO,
  isStringElement: z
}, Symbol.toStringTag, { value: "Module" }));
class nO extends E.Namespace {
  constructor() {
    super(), this.register("annotation", Hs), this.register("comment", Gs), this.register("parseResult", ct), this.register("sourceMap", Ks);
  }
}
const sO = new nO(), Lt = (t) => {
  const e = new nO();
  return Rt(t) && e.use(t), e;
}, iO = () => ({
  predicates: {
    ...hT
  },
  namespace: sO
}), vo = (t, e, r) => {
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
}, ee = {}, qn = (t) => t == null ? void 0 : t.type, oO = (t) => typeof qn(t) == "string", $p = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), yo = (t, {
  visitFnGetter: e = vo,
  nodeTypeGetter: r = qn,
  breakSymbol: n = ee,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    enter(u, f, l, d, h, v) {
      let p = u, y = !1;
      const g = {
        ...v,
        replaceWith(m, b) {
          v.replaceWith(m, b), p = m;
        }
      };
      for (let m = 0; m < t.length; m += 1)
        if (c[m] === a) {
          const b = e(t[m], r(p), !1);
          if (typeof b == "function") {
            const x = b.call(t[m], p, f, l, d, h, g);
            if (typeof (x == null ? void 0 : x.then) == "function")
              throw new at("Async visitor not supported in sync mode", {
                visitor: t[m],
                visitFn: b
              });
            if (x === i)
              c[m] = p;
            else if (x === n)
              c[m] = n;
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
    leave(u, f, l, d, h, v) {
      let p = u;
      const y = {
        ...v,
        replaceWith(g, m) {
          v.replaceWith(g, m), p = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const m = e(t[g], r(p), !0);
          if (typeof m == "function") {
            const b = m.call(t[g], p, f, l, d, h, y);
            if (typeof (b == null ? void 0 : b.then) == "function")
              throw new at("Async visitor not supported in sync mode", {
                visitor: t[g],
                visitFn: m
              });
            if (b === n)
              c[g] = n;
            else if (b !== void 0 && b !== i)
              return b;
          }
        } else c[g] === p && (c[g] = a);
    }
  };
}, pT = (t, {
  visitFnGetter: e = vo,
  nodeTypeGetter: r = qn,
  breakSymbol: n = ee,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    async enter(u, f, l, d, h, v) {
      let p = u, y = !1;
      const g = {
        ...v,
        replaceWith(m, b) {
          v.replaceWith(m, b), p = m;
        }
      };
      for (let m = 0; m < t.length; m += 1)
        if (c[m] === a) {
          const b = e(t[m], r(p), !1);
          if (typeof b == "function") {
            const x = await b.call(t[m], p, f, l, d, h, g);
            if (x === i)
              c[m] = p;
            else if (x === n)
              c[m] = n;
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
    async leave(u, f, l, d, h, v) {
      let p = u;
      const y = {
        ...v,
        replaceWith(g, m) {
          v.replaceWith(g, m), p = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const m = e(t[g], r(p), !0);
          if (typeof m == "function") {
            const b = await m.call(t[g], p, f, l, d, h, y);
            if (b === n)
              c[g] = n;
            else if (b !== void 0 && b !== i)
              return b;
          }
        } else c[g] === p && (c[g] = a);
    }
  };
};
yo[Symbol.for("nodejs.util.promisify.custom")] = pT;
const Ip = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = ee,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = vo,
  nodeTypeGetter: c = qn,
  nodePredicate: u = oO,
  nodeCloneFn: f = $p,
  detectCycles: l = !0
} = {}) => {
  const d = r || {};
  let h, v = Array.isArray(t), p = [t], y = -1, g, m = [], b = t;
  const x = [], w = [];
  do {
    y += 1;
    const C = y === p.length;
    let _;
    const N = C && m.length !== 0;
    if (C) {
      if (_ = w.length === 0 ? void 0 : x.pop(), b = g, g = w.pop(), N)
        if (v) {
          b = b.slice();
          let R = 0;
          for (const [I, L] of m) {
            const G = I - R;
            L === i ? (b.splice(G, 1), R += 1) : b[G] = L;
          }
        } else {
          b = f(b);
          for (const [R, I] of m)
            b[R] = I;
        }
      y = h.index, p = h.keys, m = h.edits, v = h.inArray, h = h.prev;
    } else if (g !== i && g !== void 0) {
      if (_ = v ? y : p[y], b = g[_], b === i || b === void 0)
        continue;
      x.push(_);
    }
    let S;
    if (!Array.isArray(b)) {
      var O;
      if (!u(b))
        throw new at(`Invalid AST Node:  ${String(b)}`, {
          node: b
        });
      if (l && w.includes(b)) {
        x.pop();
        continue;
      }
      const R = a(e, c(b), C);
      if (R) {
        for (const [L, G] of Object.entries(n))
          e[L] = G;
        const I = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(L, G) {
            typeof G == "function" ? G(L, b, _, g, x, w) : g && (g[_] = L), C || (b = L);
          }
        };
        S = R.call(e, b, _, g, x, w, I);
      }
      if (typeof ((O = S) === null || O === void 0 ? void 0 : O.then) == "function")
        throw new at("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: R
        });
      if (S === s)
        break;
      if (S === o) {
        if (!C) {
          x.pop();
          continue;
        }
      } else if (S !== void 0 && (m.push([_, S]), !C))
        if (u(S))
          b = S;
        else {
          x.pop();
          continue;
        }
    }
    if (S === void 0 && N && m.push([_, b]), !C) {
      var j;
      h = {
        inArray: v,
        index: y,
        keys: p,
        edits: m,
        prev: h
      }, v = Array.isArray(b), p = v ? b : (j = d[c(b)]) !== null && j !== void 0 ? j : [], y = -1, m = [], g !== i && g !== void 0 && w.push(g), g = b;
    }
  } while (h !== void 0);
  return m.length !== 0 ? m[m.length - 1][1] : t;
};
Ip[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = ee,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = vo,
  nodeTypeGetter: c = qn,
  nodePredicate: u = oO,
  nodeCloneFn: f = $p,
  detectCycles: l = !0
} = {}) => {
  const d = r || {};
  let h, v = Array.isArray(t), p = [t], y = -1, g, m = [], b = t;
  const x = [], w = [];
  do {
    y += 1;
    const j = y === p.length;
    let C;
    const _ = j && m.length !== 0;
    if (j) {
      if (C = w.length === 0 ? void 0 : x.pop(), b = g, g = w.pop(), _)
        if (v) {
          b = b.slice();
          let S = 0;
          for (const [R, I] of m) {
            const L = R - S;
            I === i ? (b.splice(L, 1), S += 1) : b[L] = I;
          }
        } else {
          b = f(b);
          for (const [S, R] of m)
            b[S] = R;
        }
      y = h.index, p = h.keys, m = h.edits, v = h.inArray, h = h.prev;
    } else if (g !== i && g !== void 0) {
      if (C = v ? y : p[y], b = g[C], b === i || b === void 0)
        continue;
      x.push(C);
    }
    let N;
    if (!Array.isArray(b)) {
      if (!u(b))
        throw new at(`Invalid AST Node: ${String(b)}`, {
          node: b
        });
      if (l && w.includes(b)) {
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
            typeof L == "function" ? L(I, b, C, g, x, w) : g && (g[C] = I), j || (b = I);
          }
        };
        N = await S.call(e, b, C, g, x, w, R);
      }
      if (N === s)
        break;
      if (N === o) {
        if (!j) {
          x.pop();
          continue;
        }
      } else if (N !== void 0 && (m.push([C, N]), !j))
        if (u(N))
          b = N;
        else {
          x.pop();
          continue;
        }
    }
    if (N === void 0 && _ && m.push([C, b]), !j) {
      var O;
      h = {
        inArray: v,
        index: y,
        keys: p,
        edits: m,
        prev: h
      }, v = Array.isArray(b), p = v ? b : (O = d[c(b)]) !== null && O !== void 0 ? O : [], y = -1, m = [], g !== i && g !== void 0 && w.push(g), g = b;
    }
  } while (h !== void 0);
  return m.length !== 0 ? m[m.length - 1][1] : t;
};
class aO extends at {
  constructor(r, n) {
    super(r, n);
    A(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class dT extends aO {
}
class mT extends aO {
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
  if (t instanceof E.KeyValuePair) {
    const {
      key: s,
      value: i
    } = t, o = be(s) ? q(s, n) : s, a = be(i) ? q(i, n) : i, c = new E.KeyValuePair(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof E.ObjectSlice) {
    const s = (a) => q(a, n), i = [...t].map(s), o = new E.ObjectSlice(i);
    return r.set(t, o), o;
  }
  if (t instanceof E.ArraySlice) {
    const s = (a) => q(a, n), i = [...t].map(s), o = new E.ArraySlice(i);
    return r.set(t, o), o;
  }
  if (be(t)) {
    const s = Ve(t);
    if (r.set(t, s), t.content)
      if (be(t.content))
        s.content = q(t.content, n);
      else if (t.content instanceof E.KeyValuePair)
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
  throw new dT("Value provided to cloneDeep function couldn't be cloned", {
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
const cO = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new E.KeyValuePair(e, r);
}, vT = (t) => {
  const e = [...t];
  return new E.ArraySlice(e);
}, yT = (t) => {
  const e = [...t];
  return new E.ObjectSlice(e);
}, uO = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = q(t.meta)), t.attributes.length > 0 && (e._attributes = q(t.attributes)), be(t.content)) {
    const r = t.content;
    e.content = uO(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof E.KeyValuePair ? e.content = cO(t.content) : e.content = t.content;
  return e;
}, Ve = (t) => {
  if (t instanceof E.KeyValuePair)
    return cO(t);
  if (t instanceof E.ObjectSlice)
    return yT(t);
  if (t instanceof E.ArraySlice)
    return vT(t);
  if (be(t))
    return uO(t);
  throw new mT("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
Ve.safe = (t) => {
  try {
    return Ve(t);
  } catch {
    return t;
  }
};
const Yr = (t) => le(t) ? "ObjectElement" : Ue(t) ? "ArrayElement" : ft(t) ? "MemberElement" : z(t) ? "StringElement" : Nn(t) ? "BooleanElement" : Tp(t) ? "NumberElement" : Cp(t) ? "NullElement" : ZS(t) ? "LinkElement" : eO(t) ? "RefElement" : void 0, lO = (t) => be(t) ? Ve(t) : $p(t), fO = xe(Yr, gr), Ot = {
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
class hO {
  constructor({
    predicate: e = rp,
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
const Ee = (t, e, {
  keyMap: r = Ot,
  ...n
} = {}) => Ip(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Yr,
  nodePredicate: fO,
  nodeCloneFn: lO,
  ...n
});
Ee[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Ot,
  ...n
} = {}) => Ip[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Yr,
  nodePredicate: fO,
  nodeCloneFn: lO,
  ...n
});
const pO = {
  toolboxCreator: iO,
  visitorOptions: {
    nodeTypeGetter: Yr,
    exposeEdits: !0
  }
}, Et = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Qi(pO, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = yo(a.map(Bs({}, "visitor")), {
    ...i
  });
  a.forEach(On(["pre"], []));
  const u = Ee(t, c, i);
  return a.forEach(On(["post"], [])), u;
}, gT = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = Qi(pO, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = yo[Symbol.for("nodejs.util.promisify.custom")], u = Ee[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(Bs({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(On(["pre"], [])));
  const l = await u(t, f, i);
  return await Promise.allSettled(a.map(On(["post"], []))), l;
};
Et[Symbol.for("nodejs.util.promisify.custom")] = gT;
var df = { exports: {} }, ob;
function bT() {
  return ob || (ob = 1, function(t) {
    var e = (() => {
      var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (x, w, O) => w in x ? r(x, w, { enumerable: !0, configurable: !0, writable: !0, value: O }) : x[w] = O, u = (x, w) => {
        for (var O in w || (w = {}))
          o.call(w, O) && c(x, O, w[O]);
        if (i)
          for (var O of i(w))
            a.call(w, O) && c(x, O, w[O]);
        return x;
      }, f = (x, w) => {
        for (var O in w)
          r(x, O, { get: w[O], enumerable: !0 });
      }, l = (x, w, O, j) => {
        if (w && typeof w == "object" || typeof w == "function")
          for (let C of s(w))
            !o.call(x, C) && C !== O && r(x, C, { get: () => w[C], enumerable: !(j = n(w, C)) || j.enumerable });
        return x;
      }, d = (x) => l(r({}, "__esModule", { value: !0 }), x), h = (x, w, O) => (c(x, typeof w != "symbol" ? w + "" : w, O), O), v = {};
      f(v, {
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
      }, m = class {
        constructor(w = {}) {
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
            const R = [...S];
            if (R[0] = `[short-unique-id] ${S[0]}`, this.debug === !0 && typeof console < "u" && console !== null)
              return console.log(...R);
          }), h(this, "_normalizeDictionary", (S, R) => {
            let I;
            if (S && Array.isArray(S) && S.length > 1)
              I = S;
            else {
              I = [];
              let L;
              this.dictIndex = L = 0;
              const G = `_${S}_dict_ranges`, ve = this._dict_ranges[G];
              Object.keys(ve).forEach((ae) => {
                const V = ae;
                for (this.dictRange = ve[V], this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1], this.dictIndex = L = this.lowerBound; this.lowerBound <= this.upperBound ? L < this.upperBound : L > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? L += 1 : L -= 1)
                  I.push(String.fromCharCode(this.dictIndex));
              });
            }
            return R && (I = I.sort(() => Math.random() - 0.5)), I;
          }), h(this, "setDictionary", (S, R) => {
            this.dict = this._normalizeDictionary(S, R), this.dictLength = this.dict.length, this.setCounter(0);
          }), h(this, "seq", () => this.sequentialUUID()), h(this, "sequentialUUID", () => {
            let S, R, I = "";
            S = this.counter;
            do
              R = S % this.dictLength, S = Math.trunc(S / this.dictLength), I += this.dict[R];
            while (S !== 0);
            return this.counter += 1, I;
          }), h(this, "rnd", (S = this.uuidLength || y) => this.randomUUID(S)), h(this, "randomUUID", (S = this.uuidLength || y) => {
            let R, I, L;
            if (S === null || typeof S > "u" || S < 1)
              throw new Error("Invalid UUID Length Provided");
            for (R = "", L = 0; L < S; L += 1)
              I = parseInt(
                (Math.random() * this.dictLength).toFixed(0),
                10
              ) % this.dictLength, R += this.dict[I];
            return R;
          }), h(this, "fmt", (S, R) => this.formattedUUID(S, R)), h(this, "formattedUUID", (S, R) => {
            const I = {
              $r: this.randomUUID,
              $s: this.sequentialUUID,
              $t: this.stamp
            };
            return S.replace(
              /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
              (G) => {
                const ve = G.slice(0, 2), ae = parseInt(G.slice(2), 10);
                return ve === "$s" ? I[ve]().padStart(ae, "0") : ve === "$t" && R ? I[ve](ae, R) : I[ve](ae);
              }
            );
          }), h(this, "availableUUIDs", (S = this.uuidLength) => parseFloat(
            Math.pow([...new Set(this.dict)].length, S).toFixed(0)
          )), h(this, "approxMaxBeforeCollision", (S = this.availableUUIDs(this.uuidLength)) => parseFloat(
            Math.sqrt(Math.PI / 2 * S).toFixed(20)
          )), h(this, "collisionProbability", (S = this.availableUUIDs(this.uuidLength), R = this.uuidLength) => parseFloat(
            (this.approxMaxBeforeCollision(S) / this.availableUUIDs(R)).toFixed(20)
          )), h(this, "uniqueness", (S = this.availableUUIDs(this.uuidLength)) => {
            const R = parseFloat(
              (1 - this.approxMaxBeforeCollision(S) / S).toFixed(20)
            );
            return R > 1 ? 1 : R < 0 ? 0 : R;
          }), h(this, "getVersion", () => this.version), h(this, "stamp", (S, R) => {
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
            const L = S - 9, G = Math.round(Math.random() * (L > 15 ? 15 : L)), ve = this.randomUUID(L);
            return `${ve.substring(0, G)}${I}${ve.substring(G)}${G.toString(16)}`;
          }), h(this, "parseStamp", (S, R) => {
            if (R && !/t0|t[1-9]\d{1,}/.test(R))
              throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
            const I = R ? R.replace(
              /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
              (G) => {
                const ve = {
                  $r: ($) => [...Array($)].map(() => "r").join(""),
                  $s: ($) => [...Array($)].map(() => "s").join(""),
                  $t: ($) => [...Array($)].map(() => "t").join("")
                }, ae = G.slice(0, 2), V = parseInt(G.slice(2), 10);
                return ve[ae](V);
              }
            ).replace(
              /^(.*?)(t{8,})(.*)$/g,
              (G, ve, ae) => S.substring(ve.length, ve.length + ae.length)
            ) : S;
            if (I.length === 8)
              return new Date(parseInt(I, 16) * 1e3);
            if (I.length < 10)
              throw new Error("Stamp length invalid");
            const L = parseInt(I.substring(I.length - 1), 16);
            return new Date(parseInt(I.substring(L, L + 8), 16) * 1e3);
          }), h(this, "setCounter", (S) => {
            this.counter = S;
          }), h(this, "validate", (S, R) => {
            const I = R ? this._normalizeDictionary(R) : this.dict;
            return S.split("").every((L) => I.includes(L));
          });
          const O = u(u({}, g), w);
          this.counter = 0, this.debug = !1, this.dict = [], this.version = p;
          const {
            dictionary: j,
            shuffle: C,
            length: _,
            counter: N
          } = O;
          return this.uuidLength = _, this.setDictionary(j, C), this.setCounter(N), this.debug = O.debug, this.log(this.dict), this.log(
            `Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`
          ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this), this;
        }
      };
      h(m, "default", m);
      var b = m;
      return d(v);
    })();
    t.exports = e.default, typeof window < "u" && (e = e.default);
  }(df)), df.exports;
}
var xT = bT();
const ST = /* @__PURE__ */ Di(xT);
class OT extends at {
  constructor(r, n) {
    super(r, n);
    A(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class Fp {
  constructor({
    length: e = 6
  } = {}) {
    A(this, "uuid");
    A(this, "identityMap");
    this.uuid = new ST({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  }
  identify(e) {
    if (!be(e))
      throw new OT("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
        value: e
      });
    if (e.meta.hasKey("id") && z(e.meta.get("id")) && !e.meta.get("id").equals(""))
      return e.id;
    if (this.identityMap.has(e))
      return this.identityMap.get(e);
    const r = new E.StringElement(this.generateId());
    return this.identityMap.set(e, r), r;
  }
  forget(e) {
    return this.identityMap.has(e) ? (this.identityMap.delete(e), !0) : !1;
  }
  generateId() {
    return this.uuid.randomUUID();
  }
}
new Fp();
class ET extends Array {
  constructor() {
    super(...arguments);
    A(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new uu("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new uu("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new uu("latest method in MediaTypes class is not yet implemented.");
  }
}
const wT = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return be(t) && (t.meta.length > 0 && (n.meta = q(t.meta)), t.attributes.length > 0 && (n.attributes = q(t.attributes))), Et(n, r, {
    toolboxCreator: iO,
    visitorOptions: {
      nodeTypeGetter: Yr
    }
  });
}, rt = (t) => (e, r = {}) => wT(e, {
  ...r,
  Type: t
});
E.ObjectElement.refract = rt(E.ObjectElement);
E.ArrayElement.refract = rt(E.ArrayElement);
E.StringElement.refract = rt(E.StringElement);
E.BooleanElement.refract = rt(E.BooleanElement);
E.NullElement.refract = rt(E.NullElement);
E.NumberElement.refract = rt(E.NumberElement);
E.LinkElement.refract = rt(E.LinkElement);
E.RefElement.refract = rt(E.RefElement);
Hs.refract = rt(Hs);
Gs.refract = rt(Gs);
ct.refract = rt(ct);
Ks.refract = rt(Ks);
const AT = (t, e) => {
  const r = new hO({
    predicate: t
  });
  return Ee(e, r), new E.ArraySlice(r.result);
}, dO = (t, e) => {
  const r = new hO({
    predicate: t,
    returnOnTrue: ee
  });
  return Ee(e, r), ES(void 0, [0], r.result);
}, mO = (t) => typeof (t == null ? void 0 : t.type) == "string" ? t.type : Yr(t), vO = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...Ot
}, yO = (t, e, {
  keyMap: r = vO,
  ...n
} = {}) => Ee(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: mO,
  nodePredicate: Ft,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
yO[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = vO,
  ...r
} = {}) => Ee[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: mO,
  nodePredicate: Ft,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class jT {
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
class PT {
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
let _T = class {
  constructor() {
    A(this, "ObjectElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new PT(e.content);
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
        const r = new jT(e.content);
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
const T = (t) => be(t) ? z(t) || Tp(t) || Nn(t) || Cp(t) ? t.toValue() : yO(t, new _T()) : t, As = (t, e = /* @__PURE__ */ new WeakMap()) => (ft(t) ? (e.set(t.key, t), As(t.key, e), e.set(t.value, t), As(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), As(r, e);
}), e), RT = (t, e, r) => {
  const n = r.get(t);
  ft(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, TT = (t, e, r) => {
  const n = r.get(t);
  le(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, CT = (t, e, r) => {
  const n = r.get(t);
  Ue(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class $T {
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
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : As(this.element);
    const s = this.edges.get(e);
    if (!Yt(s))
      return le(s) ? TT(e, r, this.edges) : Ue(s) ? CT(e, r, this.edges) : ft(s) && RT(e, r, this.edges), this.element;
  }
}
const IT = (t, e, r) => new $T({
  element: r
}).transclude(t, e), Xt = (t, e) => {
  const r = qr(t, e);
  return OP((n) => {
    if (Rt(n) && hn("$ref", n) && PP(gr, "$ref", n)) {
      const s = Re(["$ref"], n), i = bp("#/", s);
      return Re(i.split("/"), r);
    }
    return Rt(n) ? Xt(n, r) : n;
  }, t);
}, gO = (t, e = sO) => {
  if (gr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return Rt(t) && hn("element", t) ? e.fromRefract(t) : e.toElement(t);
}, zs = (t) => {
  const e = t.meta.length > 0 ? q(t.meta) : void 0, r = t.attributes.length > 0 ? q(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, Ws = (t, e) => e.clone && e.isMergeableElement(t) ? yt(zs(t), t, e) : t, FT = (t, e) => {
  if (typeof e.customMerge != "function")
    return yt;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : yt;
}, MT = (t) => typeof t.customMetaMerge != "function" ? (e) => q(e) : t.customMetaMerge, kT = (t) => typeof t.customAttributesMerge != "function" ? (e) => q(e) : t.customAttributesMerge, NT = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => Ws(n, r)), DT = (t, e, r) => {
  const n = le(t) ? zs(t) : zs(e);
  return le(t) && t.forEach((s, i, o) => {
    const a = Ve(o);
    a.value = Ws(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = T(i);
    let c;
    if (le(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const u = t.get(a);
      c = Ve(o), c.value = FT(i, r)(u, s);
    } else
      c = Ve(o), c.value = Ws(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, Os = {
  clone: !0,
  isMergeableElement: (t) => le(t) || Ue(t),
  arrayElementMerge: NT,
  objectElementMerge: DT,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
}, yt = (t, e, r) => {
  var n, s, i;
  const o = {
    ...Os,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : Os.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : Os.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : Os.objectElementMerge;
  const a = Ue(e), c = Ue(t);
  if (!(a === c))
    return Ws(e, o);
  const f = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return f.meta = MT(o)(t.meta, e.meta), f.attributes = kT(o)(t.attributes, e.attributes), f;
};
yt.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new E.ObjectElement() : t.reduce((r, n) => yt(r, n, e), zs(t[0]));
};
class Mp extends ye {
}
class bO extends Mp {
}
const qT = async (t, e) => {
  let r = t, n = !1;
  if (!tO(t)) {
    const o = Ve(t);
    o.classes.push("result"), r = new ct([o]), n = !0;
  }
  const s = new En({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await wp("canDereference", [s, e], e.dereference.strategies);
  if (Mn(i))
    throw new bO(s.uri);
  try {
    const {
      result: o
    } = await Ap("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new Mp(`Error while dereferencing file "${s.uri}"`, {
      cause: o
    });
  }
};
let Ln = class {
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
class LT {
  constructor({
    name: e
  }) {
    A(this, "name");
    this.name = e;
  }
}
class VT extends LT {
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
    return so(r.uri);
  }
}
class BT {
  constructor({
    name: e
  }) {
    A(this, "name");
    this.name = e;
  }
}
class UT {
  constructor({
    name: e
  }) {
    A(this, "name");
    this.name = e;
  }
}
class mf extends Array {
  includesCycle(e) {
    return this.filter((r) => r.has(e)).length > 1;
  }
  includes(e, r) {
    return e instanceof Set ? super.includes(e, r) : this.some((n) => n.has(e));
  }
  findItem(e) {
    for (const r of this)
      for (const n of r)
        if (be(n) && e(n))
          return n;
  }
}
let Pt = class {
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
class xO extends ye {
}
class JT extends xO {
}
class HT extends ye {
}
class kp extends HT {
}
class GT extends xO {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
class $r extends Mp {
}
class KT extends jp {
}
class Tt extends qf {
}
const zT = async (t, e = {}) => {
  const r = NS(kS, e);
  return qT(t, r);
};
function ab(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function WT(t) {
  if (Array.isArray(t)) return t;
}
function YT(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function XT(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function QT(t, e, r) {
  return e && XT(t.prototype, e), t;
}
function SO(t, e) {
  return e != null && typeof Symbol < "u" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
}
function ZT(t, e) {
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
function eC() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function tC(t, e) {
  return WT(t) || ZT(t, e) || rC(t, e) || eC();
}
function Ir(t) {
  "@swc/helpers - typeof";
  return t && typeof Symbol < "u" && t.constructor === Symbol ? "symbol" : typeof t;
}
function rC(t, e) {
  if (t) {
    if (typeof t == "string") return ab(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ab(t, e);
  }
}
var OO = function(t) {
  throw TypeError(t);
}, EO = function(t, e, r) {
  return e.has(t) || OO("Cannot " + r);
}, Le = function(t, e, r) {
  return EO(t, e, "read from private field"), r ? r.call(t) : e.get(t);
}, cb = function(t, e, r) {
  return e.has(t) ? OO("Cannot add the same private member more than once") : SO(e, WeakSet) ? e.add(t) : e.set(t, r);
}, vf = function(t, e, r, n) {
  return EO(t, e, "write to private field"), e.set(t, r), r;
}, Xr = function(t) {
  return Object.prototype.toString.call(t);
}, wO = function(t) {
  return ArrayBuffer.isView(t) && !SO(t, DataView);
}, nC = function(t) {
  return Xr(t) === "[object Date]";
}, sC = function(t) {
  return Xr(t) === "[object RegExp]";
}, iC = function(t) {
  return Xr(t) === "[object Error]";
}, oC = function(t) {
  return Xr(t) === "[object Boolean]";
}, aC = function(t) {
  return Xr(t) === "[object Number]";
}, cC = function(t) {
  return Xr(t) === "[object String]";
}, AO = Array.isArray, uC = Object.getOwnPropertyDescriptor, lC = Object.prototype.propertyIsEnumerable, fC = Object.getOwnPropertySymbols, js = Object.prototype.hasOwnProperty;
function Np(t) {
  for (var e = Object.keys(t), r = fC(t), n = 0; n < r.length; n++)
    lC.call(t, r[n]) && e.push(r[n]);
  return e;
}
function hC(t, e) {
  var r;
  return !(!((r = uC(t, e)) === null || r === void 0) && r.writable);
}
function jO(t, e) {
  if ((typeof t > "u" ? "undefined" : Ir(t)) === "object" && t !== null) {
    var r;
    if (AO(t))
      r = [];
    else if (nC(t))
      r = new Date(t.getTime ? t.getTime() : t);
    else if (sC(t))
      r = new RegExp(t);
    else if (iC(t))
      r = {
        message: t.message
      };
    else if (oC(t) || aC(t) || cC(t))
      r = Object(t);
    else {
      if (wO(t))
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
var PO = {
  includeSymbols: !1,
  immutable: !1
};
function ub(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : PO, n = [], s = [], i = !0, o = r.includeSymbols ? Np : Object.keys, a = !!r.immutable;
  return function c(u) {
    var f = a ? jO(u, r) : u, l = {}, d = !0, h = {
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
      update: function(R) {
        var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        h.isRoot || (h.parent.node[h.key] = R), h.node = R, I && (d = !1);
      },
      delete: function(R) {
        delete h.parent.node[h.key], R && (d = !1);
      },
      remove: function(R) {
        AO(h.parent.node) ? h.parent.node.splice(h.key, 1) : delete h.parent.node[h.key], R && (d = !1);
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
      return h;
    function v() {
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
    v();
    var p = e.call(h, h.node);
    if (p !== void 0 && h.update && h.update(p), l.before && l.before.call(h, h.node), !d)
      return h;
    if (Ir(h.node) === "object" && h.node !== null && !h.circular) {
      s.push(h), v();
      var y, g = !0, m = !1, b = void 0;
      try {
        for (var x = Object.entries((y = h.keys) !== null && y !== void 0 ? y : [])[Symbol.iterator](), w; !(g = (w = x.next()).done); g = !0) {
          var O = tC(w.value, 2), j = O[0], C = O[1], _;
          n.push(C), l.pre && l.pre.call(h, h.node[C], C);
          var N = c(h.node[C]);
          a && js.call(h.node, C) && !hC(h.node, C) && (h.node[C] = N.node), N.isLast = !((_ = h.keys) === null || _ === void 0) && _.length ? +j === h.keys.length - 1 : !1, N.isFirst = +j == 0, l.post && l.post.call(h, N), n.pop();
        }
      } catch (S) {
        m = !0, b = S;
      } finally {
        try {
          !g && x.return != null && x.return();
        } finally {
          if (m)
            throw b;
        }
      }
      s.pop();
    }
    return l.after && l.after.call(h, h.node), h;
  }(t).node;
}
var Je, Bt, wt = /* @__PURE__ */ function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PO;
    YT(this, t), cb(this, Je), cb(this, Bt), vf(this, Je, e), vf(this, Bt, r);
  }
  return QT(t, [
    {
      /**
      * Get the element at the array `path`.
      */
      key: "get",
      value: function(r) {
        for (var n = Le(this, Je), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!js.call(n, i) || !Le(this, Bt).includeSymbols && (typeof i > "u" ? "undefined" : Ir(i)) === "symbol")
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
        for (var n = Le(this, Je), s = 0; n && s < r.length; s++) {
          var i = r[s];
          if (!js.call(n, i) || !Le(this, Bt).includeSymbols && (typeof i > "u" ? "undefined" : Ir(i)) === "symbol")
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
        var s = Le(this, Je), i = 0;
        for (i = 0; i < r.length - 1; i++) {
          var o = r[i];
          js.call(s, o) || (s[o] = {}), s = s[o];
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
        return ub(Le(this, Je), r, {
          immutable: !0,
          includeSymbols: !!Le(this, Bt).includeSymbols
        });
      }
    },
    {
      /**
      * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
      */
      key: "forEach",
      value: function(r) {
        return vf(this, Je, ub(Le(this, Je), r, Le(this, Bt))), Le(this, Je);
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
        var s = arguments.length === 1, i = s ? Le(this, Je) : n;
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
        var r = [], n = [], s = Le(this, Bt);
        return wO(Le(this, Je)) ? Le(this, Je).slice() : function i(o) {
          for (var a = 0; a < r.length; a++)
            if (r[a] === o)
              return n[a];
          if ((typeof o > "u" ? "undefined" : Ir(o)) === "object" && o !== null) {
            var c = jO(o, s);
            r.push(o), n.push(c);
            var u = s.includeSymbols ? Np : Object.keys, f = !0, l = !1, d = void 0;
            try {
              for (var h = u(o)[Symbol.iterator](), v; !(f = (v = h.next()).done); f = !0) {
                var p = v.value;
                c[p] = i(o[p]);
              }
            } catch (y) {
              l = !0, d = y;
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
        }(Le(this, Je));
      }
    }
  ]), t;
}();
Je = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
var At = function(t, e) {
  return new wt(t, e);
};
At.get = function(t, e, r) {
  return new wt(t, r).get(e);
};
At.set = function(t, e, r, n) {
  return new wt(t, n).set(e, r);
};
At.has = function(t, e, r) {
  return new wt(t, r).has(e);
};
At.map = function(t, e, r) {
  return new wt(t, r).map(e);
};
At.forEach = function(t, e, r) {
  return new wt(t, r).forEach(e);
};
At.reduce = function(t, e, r, n) {
  return new wt(t, n).reduce(e, r);
};
At.paths = function(t, e) {
  return new wt(t, e).paths();
};
At.nodes = function(t, e) {
  return new wt(t, e).nodes();
};
At.clone = function(t, e) {
  return new wt(t, e).clone();
};
var pC = At;
const dC = ["properties"], mC = ["properties"], vC = [
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
], yC = ["schema/example", "items/example"];
function _O(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    dC.indexOf(e) > -1 && mC.indexOf(r) === -1 || vC.indexOf(n) > -1 || yC.some((s) => n.indexOf(s) > -1)
  );
}
function gC(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return pC(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), u = Lf(this.node, n(a));
      i.push(r.replace(c, u));
    }
  }), i;
}
function Lf(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if (so(s))
    o = _e(s, i);
  else {
    const a = _e(Rs, s), u = _e(a, i).replace(Rs, "");
    o = i.startsWith("/") ? u : u.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const bC = /^([a-z]+:\/\/|\/\/)/i;
class Br extends at {
}
const jt = {}, lb = /* @__PURE__ */ new WeakMap(), xC = [
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
], SC = (t) => xC.some((e) => e(t)), OC = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (_O(i) || SC(i))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof t != "string")
      return new Br("$ref: must be a string (JSON-Ref)", {
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    const a = TO(t), c = a[0], u = a[1] || "";
    let f;
    try {
      f = o || c ? RO(c, o) : null;
    } catch (p) {
      return Vf(p, {
        pointer: u,
        $ref: t,
        basePath: f,
        fullPath: r
      });
    }
    let l, d;
    if (PC(u, f, i, n) && !s.useCircularStructures) {
      const p = Lf(t, f);
      return t === p ? null : ce.replace(r, p);
    }
    if (f == null ? (d = qp(u), l = n.get(d), typeof l > "u" && (l = new Br(`Could not resolve reference: ${t}`, {
      pointer: u,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (l = CO(f, u), l.__value != null ? l = l.__value : l = l.catch((p) => {
      throw Vf(p, {
        pointer: u,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), l instanceof Error)
      return [ce.remove(r), l];
    const h = Lf(t, f), v = ce.replace(i, l, {
      $$ref: h
    });
    if (f && f !== o)
      return [v, ce.context(i, {
        baseDoc: f
      })];
    try {
      if (!_C(n.state, v) || s.useCircularStructures)
        return v;
    } catch {
      return null;
    }
  }
}, Dp = Object.assign(OC, {
  docCache: jt,
  absoluteify: RO,
  clearCache: EC,
  JSONRefError: Br,
  wrapError: Vf,
  getDoc: $O,
  split: TO,
  extractFromDoc: CO,
  fetchJSON: wC,
  extract: Bf,
  jsonPointerToArray: qp,
  unescapeJsonPointerToken: IO
});
function RO(t, e) {
  if (!bC.test(t)) {
    if (!e)
      throw new Br(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return _e(e, t);
  }
  return t;
}
function Vf(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new Br(`Could not resolve reference: ${r}`, {
    ...e,
    cause: t
  });
}
function TO(t) {
  return (t + "").split("#");
}
function CO(t, e) {
  const r = jt[t];
  if (r && !ce.isPromise(r))
    try {
      const n = Bf(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return $O(t).then((n) => Bf(e, n));
}
function EC(t) {
  typeof t < "u" ? delete jt[t] : Object.keys(jt).forEach((e) => {
    delete jt[e];
  });
}
function $O(t) {
  const e = jt[t];
  return e ? ce.isPromise(e) ? e : Promise.resolve(e) : (jt[t] = Dp.fetchJSON(t).then((r) => (jt[t] = r, r)), jt[t]);
}
function wC(t) {
  return fetch(t, {
    headers: {
      Accept: Tb
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => kr.load(e));
}
function Bf(t, e) {
  const r = qp(t);
  if (r.length < 1)
    return e;
  const n = ce.getIn(e, r);
  if (typeof n > "u")
    throw new Br(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function qp(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(IO);
}
function IO(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function FO(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function AC(t) {
  return t.length === 0 ? "" : `/${t.map(FO).join("/")}`;
}
const jC = (t) => !t || t === "/" || t === "#";
function yf(t, e) {
  if (jC(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function PC(t, e, r, n) {
  let s = lb.get(n);
  s || (s = {}, lb.set(n, s));
  const i = AC(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && yf(a, t))
    return !0;
  let u = "";
  if (r.some((l) => (u = `${u}/${FO(l)}`, s[u] && s[u].some((d) => yf(d, o) || yf(o, d)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function _C(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return ce.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const RC = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (_O(i))
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
      const l = r.slice(0, -1), d = gC(u, l, {
        getBaseUrlForNodePath: (h) => n.getContext([...r, f, ...h]).baseDoc,
        specmap: n
      });
      c.push(...d);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, TC = {
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
          const f = new Error(u);
          return f.fullPath = r, f;
        }
      }
      return ce.replace(r, s);
    }
    return ce.replace(r, t);
  }
}, CC = {
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
class $C {
  constructor(e) {
    this.root = gf(e || {});
  }
  set(e, r) {
    const n = this.getParent(e, !0);
    if (!n) {
      Ys(this.root, r, null);
      return;
    }
    const s = e[e.length - 1], {
      children: i
    } = n;
    if (i[s]) {
      Ys(i[s], r, n);
      return;
    }
    i[s] = gf(r, n);
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
      return !i[s] && r && (i[s] = gf(null, n)), i[s];
    }, this.root);
  }
}
function gf(t, e) {
  return Ys({
    children: {}
  }, t, e);
}
function Ys(t, e, r) {
  return t.value = e || {}, t.protoValue = r ? {
    ...r.protoValue,
    ...t.value
  } : t.value, Object.keys(t.children).forEach((n) => {
    const s = t.children[n];
    t.children[n] = Ys(s, s.value, t);
  }), t;
}
const fb = 100, hb = () => {
};
class IC {
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
      contextTree: new $C(),
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
      const c = (u, f) => Array.isArray(u) ? u.every((l, d) => l === f[d]) : !0;
      return function* (f, l) {
        const d = {};
        for (const [v, p] of f.filter(ce.isAdditiveMutation).entries())
          if (v < $b)
            yield* h(p.value, p.path, p);
          else
            return;
        function* h(v, p, y) {
          if (!ce.isObject(v))
            a.key === p[p.length - 1] && (yield a.plugin(v, a.key, p, l));
          else {
            const g = p.length - 1, m = p[g], b = p.indexOf("properties"), x = m === "properties" && g === b, w = l.allowMetaPatches && d[v.$$ref];
            for (const O of Object.keys(v)) {
              const j = v[O], C = p.concat(O), _ = ce.isObject(j), N = v.$$ref;
              if (w || _ && (l.allowMetaPatches && N && c(n, C) && (d[N] = !0), yield* h(j, C, y)), !x && O === a.key) {
                const S = c(n, p);
                (!n || S) && (yield a.plugin(j, O, C, l, y));
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
      i && (i = ce.fullyNormalizeArray(i), e.updatePatches(i, r));
    }
  }
}
function FC(t) {
  return new IC(t).dispatch();
}
const nr = {
  refs: Dp,
  allOf: RC,
  parameters: TC,
  properties: CC
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
  } = t, d = Nh(t), h = jx(t), v = l.find((y) => y.match(e));
  return p(e);
  async function p(y) {
    d && (nr.refs.docCache[d] = y), nr.refs.fetchJSON = Ax(h, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const g = [nr.refs];
    typeof o == "function" && g.push(nr.parameters), typeof i == "function" && g.push(nr.properties), r !== "strict" && g.push(nr.allOf);
    const m = await FC({
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
      useCircularStructures: f
    });
    return u || (m.spec = v.normalize(m.spec)), m;
  }
}
const MO = (t) => t.replace(/\W/gi, "_");
function MC(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${MO(t)}`;
}
function Vn(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? MO(t.operationId) : MC(e, r, {
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
      const u = Vn(c, s, a);
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
              if (!c[h])
                c[h] = d[h];
              else if (h === "parameters")
                for (const v of d[h])
                  c[h].some((y) => y.name && y.name === v.name || y.$ref && y.$ref === v.$ref || y.$$ref && y.$$ref === v.$$ref || y === v) || c[h].push(v);
        }
      }
    }
  }
  return e.$$normalized = !0, t;
}
function kC() {
  nr.refs.clearCache();
}
const kO = {
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
async function NC(t) {
  return Lp(t);
}
const NO = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, DO = (t) => {
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
}, Up = (t) => DO(t) || Bp(t), qO = {
  name: "openapi-2",
  match(t) {
    return NO(t);
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
    return NC(t);
  }
};
async function DC(t) {
  return Lp(t);
}
const LO = {
  name: "openapi-3-0",
  match(t) {
    return DO(t);
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
    return DC(t);
  }
}, qC = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = Nh(t), i = jx(t), o = e || await Ax(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((u) => u.match(o)).resolve(a);
}, VO = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return qC(r);
}, LC = VO({
  strategies: [LO, qO, kO]
}), VC = async (t, e, r = {}) => {
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
  }, h = f.find((p) => p.match(t)).normalize(t), v = await LC({
    spec: h,
    ...l,
    allowMetaPatches: !0,
    skipNormalization: !Bp(t)
  });
  return !n && Array.isArray(e) && e.length && (v.spec = e.reduce((p, y) => p == null ? void 0 : p[y], v.spec) || null), v;
}, BC = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return VC(e, r, s);
};
class Jp extends at {
}
class Uf extends Jp {
  constructor(r, n) {
    super(r, n);
    A(this, "pointer");
    typeof n < "u" && (this.pointer = n.pointer);
  }
}
class UC extends Jp {
  constructor(r, n) {
    super(r, n);
    A(this, "tokens");
    typeof n < "u" && (this.tokens = [...n.tokens]);
  }
}
class un extends Jp {
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
const JC = xe(Lr(/~/g, "~0"), Lr(/\//g, "~1"), encodeURIComponent), HC = (t) => {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, GC = xe(Lr(/~1/g, "/"), Lr(/~0/g, "~"), HC), KC = (t) => {
  if (CS(t))
    return [];
  if (!jS("/", t))
    throw new Uf(`Invalid JSON Pointer "${t}". JSON Pointers must begin with "/"`, {
      pointer: t
    });
  try {
    const e = xe(gp("/"), Cn(GC))(t);
    return bS(e);
  } catch (e) {
    throw new Uf(`JSON Pointer parsing of "${t}" encountered an error.`, {
      pointer: t,
      cause: e
    });
  }
}, zC = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, Ze = (t) => {
  const e = zC(t);
  return bp("#", e);
}, BO = (t) => {
  try {
    return t.length === 0 ? "" : `/${t.map(JC).join("/")}`;
  } catch (e) {
    throw new UC("JSON Pointer compilation of tokens encountered an error.", {
      tokens: t,
      cause: e
    });
  }
}, it = (t, e) => {
  let r;
  try {
    r = KC(t);
  } catch (n) {
    throw new un(`JSON Pointer evaluation failed while parsing the pointer "${t}".`, {
      pointer: t,
      element: q(e),
      cause: n
    });
  }
  return r.reduce((n, s, i) => {
    if (le(n)) {
      if (!n.hasKey(s))
        throw new un(`JSON Pointer evaluation failed while evaluating token "${s}" against an ObjectElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: q(n)
        });
      return n.get(s);
    }
    if (Ue(n)) {
      if (!(s in n.content) || !t_(Number(s)))
        throw new un(`JSON Pointer evaluation failed while evaluating token "${s}" against an ArrayElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: q(n)
        });
      return n.get(Number(s));
    }
    throw new un(`JSON Pointer evaluation failed while evaluating token "${s}" against an unexpected Element`, {
      pointer: t,
      tokens: r,
      failedToken: s,
      failedTokenPosition: i,
      element: q(n)
    });
  }, e);
};
class Hp extends ET {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return Xi(this.filterByFormat(e));
  }
}
const Ur = new Hp("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
let Bn = class extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "callback";
  }
}, Un = class extends E.ObjectElement {
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
}, Jn = class extends E.ObjectElement {
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
}, go = class extends E.ObjectElement {
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
}, bo = class extends E.ObjectElement {
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
}, Hn = class extends E.ObjectElement {
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
}, Gn = class extends E.ObjectElement {
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
}, Qr = class extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "header";
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new E.BooleanElement(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new E.BooleanElement(!1);
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
let Kn = class extends E.ObjectElement {
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
}, zn = class extends E.ObjectElement {
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
}, Wn = class extends E.ObjectElement {
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
}, Yn = class extends E.ObjectElement {
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
}, xo = class extends E.ObjectElement {
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
}, So = class extends E.ObjectElement {
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
}, Xn = class extends E.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
class Oo extends E.ObjectElement {
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
let Qn = class extends E.ObjectElement {
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
    return this.hasKey("deprecated") ? this.get("deprecated") : new E.BooleanElement(!1);
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
}, Zr = class extends E.ObjectElement {
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
    return this.hasKey("required") ? this.get("required") : new E.BooleanElement(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new E.BooleanElement(!1);
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
let Zn = class extends E.ObjectElement {
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
}, es = class extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "paths";
  }
}, ts = class extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "reference", this.classes.push("openapi-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}, rs = class extends E.ObjectElement {
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
    return this.hasKey("required") ? this.get("required") : new E.BooleanElement(!1);
  }
  set required(e) {
    this.set("required", e);
  }
}, ns = class extends E.ObjectElement {
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
}, ss = class extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "responses";
  }
  get default() {
    return this.get("default");
  }
  set default(e) {
    this.set("default", e);
  }
}, en = class extends E.ObjectElement {
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
class tn extends E.ObjectElement {
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
class is extends E.ObjectElement {
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
let os = class extends E.ObjectElement {
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
const WC = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", en), e.register("jSONReference", tn), e.register("media", is), e.register("linkDescription", os), e;
  }
}, as = (t) => {
  if (be(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, YC = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Ot
};
let UO = class {
  constructor(e) {
    A(this, "element");
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = yt(r.meta, e.meta), Dn(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = yt(r.attributes, e.attributes));
  }
}, te = class extends UO {
  enter(e) {
    return this.element = q(e), ee;
  }
};
const JO = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, wn = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : wn(r, [...e, r]);
}, XC = (...t) => {
  if (t.length === 0)
    return;
  let e;
  const r = t.map((n) => wn(n));
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
  const s = (n = XC(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = wn(s);
  for (let a of t) {
    let c = wn(a);
    for (let u = c.length - 1; u >= 0; u--) {
      let f = c[u];
      o.indexOf(f) === -1 && (JO(i, f, ["constructor", ...r]), o.push(f));
    }
  }
  return i.constructor = e, i;
}, Jf = (t) => t.filter((e, r) => t.indexOf(e) == r), HO = /* @__PURE__ */ new WeakMap(), QC = (t) => HO.get(t), ZC = (t, e) => HO.set(t, e), db = (t, e) => {
  var r, n;
  const s = Jf([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = Jf([...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, mb = (t, e) => {
  var r, n, s, i;
  return {
    property: db((r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}, (n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}),
    method: db((s = t == null ? void 0 : t.method) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, e$ = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: Jf([...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : []]),
    static: mb((s = t == null ? void 0 : t.static) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: mb((o = t == null ? void 0 : t.instance) !== null && o !== void 0 ? o : {}, (a = e == null ? void 0 : e.instance) !== null && a !== void 0 ? a : {})
  };
}, t$ = /* @__PURE__ */ new Map(), r$ = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = wn(s.prototype).map((u) => u.constructor), o = (e = QC(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((u) => !r.has(u));
      for (let u of c)
        n.add(u);
      r.add(s), n.delete(s);
    }
  return [...r];
}, n$ = (...t) => {
  const e = r$(...t).map((r) => t$.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => e$(r, n));
};
function F(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      JO(this, new c(...a));
  }
  i.prototype = pb(s, i), Object.setPrototypeOf(
    i,
    pb(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = n$(...t);
    for (let c of (e = a == null ? void 0 : a.class) !== null && e !== void 0 ? e : []) {
      const u = c(o);
      u && (o = u);
    }
    vb((r = a == null ? void 0 : a.static) !== null && r !== void 0 ? r : {}, o), vb((n = a == null ? void 0 : a.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return ZC(o, t), o;
}
const vb = (t, e) => {
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
let Xe = class extends UO {
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
    return wS(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = Re(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return Zi(Nt, ["visitors", ...r], this.specObj) ? Re(["visitors", ...r], this.specObj) : Re(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof te && (i == null ? void 0 : i.constructor) === te ? q(n) : (Ee(n, i, s), i.element);
  }
}, lr = class extends Xe {
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
      if (z(o) && s.includes(T(o)) && !this.ignoredFields.includes(T(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", T(o)], i), u = new E.MemberElement(q(o), c);
        this.copyMetaAndAttributes(a, u), u.classes.push("fixed-field"), this.element.content.push(u);
      } else this.ignoredFields.includes(T(o)) || this.element.content.push(q(a));
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
const GO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof en || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), Gp = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof tn || t(n) && e("JSONReference", n) && r("object", n)), KO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof is || t(n) && e("media", n) && r("object", n)), s$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof os || t(n) && e("linkDescription", n) && r("object", n)), i$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Gp,
  isJSONSchemaElement: GO,
  isLinkDescriptionElement: s$,
  isMediaElement: KO
}, Symbol.toStringTag, { value: "Module" }));
let zO = class extends F(lr, we, te) {
  constructor(e) {
    super(e), this.element = new en(), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-04/schema#";
  }
  ObjectElement(e) {
    return this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element, lr.prototype.ObjectElement.call(this, e);
  }
  handleDialectIdentifier(e) {
    if (Yt(this.parent) && !z(e.get("$schema")))
      this.element.setMetaProperty("inheritedDialectIdentifier", this.defaultDialectIdentifier);
    else if (GO(this.parent) && !z(e.get("$schema"))) {
      const r = qr(T(this.parent.meta.get("inheritedDialectIdentifier")), T(this.parent.$schema));
      this.element.setMetaProperty("inheritedDialectIdentifier", r);
    }
  }
  handleSchemaIdentifier(e, r = "id") {
    const n = this.parent !== void 0 ? q(this.parent.getMetaProperty("ancestorsSchemaIdentifiers", [])) : new E.ArrayElement(), s = T(e.get(r));
    to(s) && n.push(s), this.element.setMetaProperty("ancestorsSchemaIdentifiers", n);
  }
};
const gt = (t) => le(t) && t.hasKey("$ref");
let WO = class extends F(Xe, we, te) {
  ObjectElement(e) {
    const r = gt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), ee;
  }
  ArrayElement(e) {
    return this.element = new E.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class o$ extends te {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
let a$ = class extends Xe {
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
    A(this, "fieldPatternPredicate", rp);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (!this.ignoredFields.includes(T(s)) && this.fieldPatternPredicate(T(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new E.MemberElement(q(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(T(s)) || this.element.content.push(q(i));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}, Qt = class extends a$ {
  constructor(e) {
    super(e), this.fieldPatternPredicate = to;
  }
}, c$ = class extends F(Qt, we, te) {
  constructor(e) {
    super(e), this.element = new E.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}, u$ = class extends F(Qt, we, te) {
  constructor(e) {
    super(e), this.element = new E.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
class l$ extends F(Qt, we, te) {
  constructor(e) {
    super(e), this.element = new E.ObjectElement(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
class f$ extends te {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
let h$ = class extends te {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}, p$ = class extends F(Xe, we, te) {
  constructor(e) {
    super(e), this.element = new E.ArrayElement(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, d$ = class extends F(Xe, we, te) {
  constructor(e) {
    super(e), this.element = new E.ArrayElement(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, m$ = class extends F(Xe, we, te) {
  constructor(e) {
    super(e), this.element = new E.ArrayElement(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class v$ extends F(Qt, we, te) {
  constructor(e) {
    super(e), this.element = new E.ObjectElement(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => gt(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let y$ = class extends F(Xe, we, te) {
  constructor(e) {
    super(e), this.element = new E.ArrayElement(), this.element.classes.push("json-schema-links");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "LinkDescription"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class g$ extends F(lr, te) {
  constructor(e) {
    super(e), this.element = new tn(), this.specPath = J(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = lr.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
let b$ = class extends te {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, x$ = class extends Xe {
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
    }) => mp(i, J(o), eo)), s = IS(n)(r);
    return this.element = this.toRefractedElement(s, r), ee;
  }
}, jr = class extends x$ {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: gt,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "JSONSchema"]
    }];
  }
};
class S$ extends F(lr, te) {
  constructor(e) {
    super(e), this.element = new is(), this.specPath = J(["document", "objects", "Media"]);
  }
}
let YO = class extends F(lr, te) {
  constructor(e) {
    super(e), this.element = new os(), this.specPath = J(["document", "objects", "LinkDescription"]);
  }
};
const Fe = {
  visitors: {
    value: te,
    JSONSchemaOrJSONReferenceVisitor: jr,
    document: {
      objects: {
        JSONSchema: {
          $visitor: zO,
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
            additionalItems: jr,
            items: WO,
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
            required: o$,
            properties: c$,
            additionalProperties: jr,
            patternProperties: u$,
            dependencies: l$,
            // validation keywords for any instance type
            enum: f$,
            type: h$,
            allOf: p$,
            anyOf: d$,
            oneOf: m$,
            not: jr,
            definitions: v$,
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
            links: y$,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: g$,
          fixedFields: {
            $ref: b$
          }
        },
        Media: {
          $visitor: S$,
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
          $visitor: YO,
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
            targetSchema: jr,
            mediaType: {
              $ref: "#/visitors/value"
            },
            method: {
              $ref: "#/visitors/value"
            },
            encType: {
              $ref: "#/visitors/value"
            },
            schema: jr
          }
        }
      }
    }
  }
}, O$ = () => {
  const t = Lt(WC);
  return {
    predicates: {
      ...i$,
      isStringElement: z
    },
    namespace: t
  };
}, E$ = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Fe
} = {}) => {
  const s = E.refract(t), i = Xt(n), o = Re(e, i), a = new o({
    specObj: i
  });
  return Ee(s, a), Et(a.element, r, {
    toolboxCreator: O$,
    visitorOptions: {
      keyMap: YC,
      nodeTypeGetter: as
    }
  });
}, Eo = (t) => (e, r = {}) => E$(e, {
  specPath: t,
  ...r
});
en.refract = Eo(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
tn.refract = Eo(["visitors", "document", "objects", "JSONReference", "$visitor"]);
is.refract = Eo(["visitors", "document", "objects", "Media", "$visitor"]);
os.refract = Eo(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let wo = class extends en {
  constructor(e, r, n) {
    super(e, r, n), this.element = "schema", this.classes.push("json-schema-draft-4");
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
}, cs = class extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "securityRequirement";
  }
}, us = class extends E.ObjectElement {
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
}, ls = class extends E.ObjectElement {
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
}, fs = class extends E.ObjectElement {
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
}, Ao = class extends E.ObjectElement {
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
}, jo = class extends E.ObjectElement {
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
const w$ = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Bn), e.register("components", Un), e.register("contact", Jn), e.register("discriminator", go), e.register("encoding", bo), e.register("example", Hn), e.register("externalDocumentation", Gn), e.register("header", Qr), e.register("info", Kn), e.register("license", zn), e.register("link", Wn), e.register("mediaType", Yn), e.register("oAuthFlow", xo), e.register("oAuthFlows", So), e.register("openapi", Xn), e.register("openApi3_0", Oo), e.register("operation", Qn), e.register("parameter", Zr), e.register("pathItem", Zn), e.register("paths", es), e.register("reference", ts), e.register("requestBody", rs), e.register("response", ns), e.register("responses", ss), e.register("schema", wo), e.register("securityRequirement", cs), e.register("securityScheme", us), e.register("server", ls), e.register("serverVariable", fs), e.register("tag", Ao), e.register("xml", jo), e;
  }
}, ti = class ti extends E.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ti.primaryClass);
  }
};
A(ti, "primaryClass", "servers");
let Xs = ti;
const ri = class ri extends E.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ri.primaryClass);
  }
};
A(ri, "primaryClass", "security");
let Hf = ri;
const ni = class ni extends E.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ni.primaryClass);
  }
};
A(ni, "primaryClass", "tags");
let Gf = ni;
const si = class si extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(si.primaryClass);
  }
};
A(si, "primaryClass", "server-variables");
let Kf = si;
const ii = class ii extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ii.primaryClass);
  }
};
A(ii, "primaryClass", "components-schemas");
let Qs = ii;
const oi = class oi extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(oi.primaryClass);
  }
};
A(oi, "primaryClass", "components-responses");
let zf = oi;
const ai = class ai extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ai.primaryClass), this.classes.push("parameters");
  }
};
A(ai, "primaryClass", "components-parameters");
let Wf = ai;
const ci = class ci extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ci.primaryClass), this.classes.push("examples");
  }
};
A(ci, "primaryClass", "components-examples");
let Yf = ci;
const ui = class ui extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ui.primaryClass);
  }
};
A(ui, "primaryClass", "components-request-bodies");
let Xf = ui;
const li = class li extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(li.primaryClass);
  }
};
A(li, "primaryClass", "components-headers");
let Qf = li;
const fi = class fi extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(fi.primaryClass);
  }
};
A(fi, "primaryClass", "components-security-schemes");
let Zf = fi;
const hi = class hi extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(hi.primaryClass);
  }
};
A(hi, "primaryClass", "components-links");
let eh = hi;
const pi = class pi extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(pi.primaryClass);
  }
};
A(pi, "primaryClass", "components-callbacks");
let th = pi;
const di = class di extends E.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(di.primaryClass), this.classes.push("servers");
  }
};
A(di, "primaryClass", "path-item-servers");
let rh = di;
const mi = class mi extends E.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(mi.primaryClass), this.classes.push("parameters");
  }
};
A(mi, "primaryClass", "path-item-parameters");
let nh = mi;
const vi = class vi extends E.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(vi.primaryClass), this.classes.push("parameters");
  }
};
A(vi, "primaryClass", "operation-parameters");
let Zs = vi;
const yi = class yi extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(yi.primaryClass), this.classes.push("examples");
  }
};
A(yi, "primaryClass", "parameter-examples");
let sh = yi;
const gi = class gi extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(gi.primaryClass), this.classes.push("content");
  }
};
A(gi, "primaryClass", "parameter-content");
let ih = gi;
const bi = class bi extends E.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(bi.primaryClass);
  }
};
A(bi, "primaryClass", "operation-tags");
let oh = bi;
const xi = class xi extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(xi.primaryClass);
  }
};
A(xi, "primaryClass", "operation-callbacks");
let ah = xi;
const Si = class Si extends E.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Si.primaryClass), this.classes.push("security");
  }
};
A(Si, "primaryClass", "operation-security");
let ei = Si;
const Oi = class Oi extends E.ArrayElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Oi.primaryClass), this.classes.push("servers");
  }
};
A(Oi, "primaryClass", "operation-servers");
let ch = Oi;
const Ei = class Ei extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ei.primaryClass), this.classes.push("content");
  }
};
A(Ei, "primaryClass", "request-body-content");
let uh = Ei;
const wi = class wi extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(wi.primaryClass), this.classes.push("examples");
  }
};
A(wi, "primaryClass", "media-type-examples");
let lh = wi;
const Ai = class Ai extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ai.primaryClass);
  }
};
A(Ai, "primaryClass", "media-type-encoding");
let fh = Ai;
const ji = class ji extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ji.primaryClass);
  }
};
A(ji, "primaryClass", "encoding-headers");
let hh = ji;
const Pi = class Pi extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Pi.primaryClass);
  }
};
A(Pi, "primaryClass", "response-headers");
let ph = Pi;
const _i = class _i extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(_i.primaryClass), this.classes.push("content");
  }
};
A(_i, "primaryClass", "response-content");
let dh = _i;
const Ri = class Ri extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ri.primaryClass);
  }
};
A(Ri, "primaryClass", "response-links");
let mh = Ri;
const Ti = class Ti extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ti.primaryClass);
  }
};
A(Ti, "primaryClass", "discriminator-mapping");
let vh = Ti;
const Ci = class Ci extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ci.primaryClass);
  }
};
A(Ci, "primaryClass", "oauth-flow-scopes");
let yh = Ci;
const $i = class $i extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push($i.primaryClass);
  }
};
A($i, "primaryClass", "link-parameters");
let gh = $i;
const Ii = class Ii extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ii.primaryClass), this.classes.push("examples");
  }
};
A(Ii, "primaryClass", "header-examples");
let bh = Ii;
const Fi = class Fi extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Fi.primaryClass), this.classes.push("content");
  }
};
A(Fi, "primaryClass", "header-content");
let xh = Fi;
const A$ = (t) => {
  if (be(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, j$ = {
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
  ...Ot
};
class XO {
  constructor(e = {}) {
    A(this, "element");
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = yt(r.meta, e.meta), Dn(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = yt(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
class D extends XO {
  enter(e) {
    return this.element = q(e), ee;
  }
}
class ht extends XO {
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
    return wS(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = Re(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return Zi(Nt, ["visitors", ...r], this.specObj) ? Re(["visitors", ...r], this.specObj) : Re(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof D && (i == null ? void 0 : i.constructor) === D ? q(n) : (Ee(n, i, s), i.element);
  }
}
const de = (t) => le(t) && t.hasKey("$ref"), P$ = le, _$ = le, QO = (t) => z(t.key) && jS("x-", T(t.key));
class Y extends ht {
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
    A(this, "specificationExtensionPredicate", QO);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "boolean" && (this.canSupportSpecificationExtensions = s), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (z(o) && s.includes(T(o)) && !this.ignoredFields.includes(T(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", T(o)], i), u = new E.MemberElement(q(o), c);
        this.copyMetaAndAttributes(a, u), u.classes.push("fixed-field"), this.element.content.push(u);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(a)) {
        const c = this.toRefractedElement(["document", "extension"], a);
        this.element.content.push(c);
      } else this.ignoredFields.includes(T(o)) || this.element.content.push(q(a));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}
class R$ extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Oo(), this.specPath = J(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return Y.prototype.ObjectElement.call(this, e);
  }
}
class T$ extends F(ht, D) {
  StringElement(e) {
    const r = new Xn(T(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, ee;
  }
}
class C$ extends ht {
  MemberElement(e) {
    return this.element = q(e), this.element.classes.push("specification-extension"), ee;
  }
}
let $$ = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Kn(), this.specPath = J(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
class I$ extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
let F$ = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Jn(), this.specPath = J(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
}, M$ = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new zn(), this.specPath = J(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
}, k$ = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Wn(), this.specPath = J(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return (z(this.element.operationId) || z(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
class N$ extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class D$ extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class Jr extends ht {
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
    A(this, "fieldPatternPredicate", rp);
    A(this, "canSupportSpecificationExtensions", !1);
    A(this, "specificationExtensionPredicate", QO);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s), typeof i == "boolean" && (this.canSupportSpecificationExtensions = i), typeof o == "function" && (this.specificationExtensionPredicate = o);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
        const o = this.toRefractedElement(["document", "extension"], i);
        this.element.content.push(o);
      } else if (!this.ignoredFields.includes(T(s)) && this.fieldPatternPredicate(T(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new E.MemberElement(q(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(T(s)) || this.element.content.push(q(i));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}
class X extends Jr {
  constructor(e) {
    super(e), this.fieldPatternPredicate = to;
  }
}
let q$ = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new gh(), this.specPath = J(["value"]);
  }
}, L$ = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new ls(), this.specPath = J(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
class V$ extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
let Kp = class extends F(ht, D) {
  constructor(e) {
    super(e), this.element = new Xs();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = P$(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, B$ = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new fs(), this.specPath = J(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
class U$ extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Kf(), this.specPath = J(["document", "objects", "ServerVariable"]);
  }
}
let J$ = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Yn(), this.specPath = J(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
class bt extends ht {
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
    }) => mp(i, J(o), eo)), s = IS(n)(r);
    return this.element = this.toRefractedElement(s, r), ee;
  }
}
const H$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bn || t(n) && e("callback", n) && r("object", n)), G$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Un || t(n) && e("components", n) && r("object", n)), K$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Jn || t(n) && e("contact", n) && r("object", n)), z$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Hn || t(n) && e("example", n) && r("object", n)), W$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gn || t(n) && e("externalDocumentation", n) && r("object", n)), rn = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qr || t(n) && e("header", n) && r("object", n)), Y$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Kn || t(n) && e("info", n) && r("object", n)), X$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zn || t(n) && e("license", n) && r("object", n)), Q$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wn || t(n) && e("link", n) && r("object", n)), Z$ = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xn || t(n) && e("openapi", n) && r("string", n)), eI = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Oo || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), ZO = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qn || t(n) && e("operation", n) && r("object", n)), tI = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zr || t(n) && e("parameter", n) && r("object", n)), zp = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zn || t(n) && e("pathItem", n) && r("object", n)), rI = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof es || t(n) && e("paths", n) && r("object", n)), he = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ts || t(n) && e("reference", n) && r("object", n)), nI = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof rs || t(n) && e("requestBody", n) && r("object", n)), Po = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ns || t(n) && e("response", n) && r("object", n)), sI = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ss || t(n) && e("responses", n) && r("object", n)), iI = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof wo || t(n) && e("schema", n) && r("object", n)), oI = (t) => Nn(t) && t.classes.includes("boolean-json-schema"), aI = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof cs || t(n) && e("securityRequirement", n) && r("object", n)), cI = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof us || t(n) && e("securityScheme", n) && r("object", n)), uI = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ls || t(n) && e("server", n) && r("object", n)), lI = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fs || t(n) && e("serverVariable", n) && r("object", n)), _o = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Yn || t(n) && e("mediaType", n) && r("object", n)), eE = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Xs || t(s) && e("array", s) && r("array", s) && n("servers", s)), fI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: oI,
  isCallbackElement: H$,
  isComponentsElement: G$,
  isContactElement: K$,
  isExampleElement: z$,
  isExternalDocumentationElement: W$,
  isHeaderElement: rn,
  isInfoElement: Y$,
  isLicenseElement: X$,
  isLinkElement: Q$,
  isMediaTypeElement: _o,
  isOpenApi3_0Element: eI,
  isOpenapiElement: Z$,
  isOperationElement: ZO,
  isParameterElement: tI,
  isPathItemElement: zp,
  isPathsElement: rI,
  isReferenceElement: he,
  isRequestBodyElement: nI,
  isResponseElement: Po,
  isResponsesElement: sI,
  isSchemaElement: iI,
  isSecurityRequirementElement: aI,
  isSecuritySchemeElement: cI,
  isServerElement: uI,
  isServerVariableElement: lI,
  isServersElement: eE
}, Symbol.toStringTag, { value: "Module" }));
let hI = class extends F(bt, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: de,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = bt.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, Wp = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new E.ObjectElement(), this.element.classes.push("examples"), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, pI = class extends Wp {
  constructor(e) {
    super(e), this.element = new lh();
  }
}, dI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new fh(), this.specPath = J(["document", "objects", "Encoding"]);
  }
}, mI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new cs(), this.specPath = J(["value"]);
  }
}, vI = class extends F(ht, D) {
  constructor(e) {
    super(e), this.element = new Hf();
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
}, yI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Un(), this.specPath = J(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
}, gI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Ao(), this.specPath = J(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
}, bI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new ts(), this.specPath = J(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}, xI = class extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, SI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Zr(), this.specPath = J(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return le(this.element.contentProp) && this.element.contentProp.filter(_o).forEach((n, s) => {
      n.setMetaProperty("media-type", T(s));
    }), r;
  }
}, OI = class extends F(bt, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: de,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = bt.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, EI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Qr(), this.specPath = J(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
}, wI = class extends F(bt, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: de,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = bt.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, AI = class extends Wp {
  constructor(e) {
    super(e), this.element = new bh();
  }
}, Ro = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new E.ObjectElement(), this.element.classes.push("content"), this.specPath = J(["document", "objects", "MediaType"]);
  }
}, jI = class extends Ro {
  constructor(e) {
    super(e), this.element = new xh();
  }
}, PI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new wo(), this.specPath = J(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const yb = Fe.visitors.document.objects.JSONSchema.fixedFields.allOf;
let _I = class extends yb {
  ArrayElement(e) {
    const r = yb.prototype.ArrayElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const gb = Fe.visitors.document.objects.JSONSchema.fixedFields.anyOf;
let RI = class extends gb {
  ArrayElement(e) {
    const r = gb.prototype.ArrayElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const bb = Fe.visitors.document.objects.JSONSchema.fixedFields.oneOf;
let TI = class extends bb {
  ArrayElement(e) {
    const r = bb.prototype.ArrayElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const xb = Fe.visitors.document.objects.JSONSchema.fixedFields.items;
let CI = class extends xb {
  ObjectElement(e) {
    const r = xb.prototype.ObjectElement.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
};
const Sb = Fe.visitors.document.objects.JSONSchema.fixedFields.properties;
let $I = class extends Sb {
  ObjectElement(e) {
    const r = Sb.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const II = Fe.visitors.document.objects.JSONSchema.fixedFields.type;
class FI extends II {
  ArrayElement(e) {
    return this.enter(e);
  }
}
const Ob = Fe.visitors.JSONSchemaOrJSONReferenceVisitor;
class Eb extends Ob {
  ObjectElement(e) {
    const r = Ob.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
let MI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new go(), this.specPath = J(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
class kI extends F(X, D) {
  constructor(e) {
    super(e), this.element = new vh(), this.specPath = J(["value"]);
  }
}
let NI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new jo(), this.specPath = J(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
}, DI = class extends Wp {
  constructor(e) {
    super(e), this.element = new sh();
  }
}, qI = class extends Ro {
  constructor(e) {
    super(e), this.element = new ih();
  }
}, LI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Qs(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
}, VI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new zf(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Po).forEach((n, s) => {
      n.setMetaProperty("http-status-code", T(s));
    }), r;
  }
}, BI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Wf(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
}, UI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Yf(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
class JI extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Xf(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
let HI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Qf(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.filter(rn).forEach((n, s) => {
      n.setMetaProperty("header-name", T(s));
    }), r;
  }
};
class GI extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Zf(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
let KI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new eh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}, zI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new th(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}, WI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Hn(), this.specPath = J(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return z(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
class YI extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let XI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Gn(), this.specPath = J(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
}, QI = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new bo(), this.specPath = J(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return le(this.element.headers) && this.element.headers.filter(rn).forEach((n, s) => {
      n.setMetaProperty("header-name", T(s));
    }), r;
  }
}, ZI = class extends F(X, D) {
  constructor(e) {
    super(e), this.element = new hh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!rn(n)) return;
      const i = T(s);
      n.setMetaProperty("headerName", i);
    }), r;
  }
}, eF = class extends F(Jr, D) {
  constructor(e) {
    super(e), this.element = new es(), this.specPath = J(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = Ft;
  }
  ObjectElement(e) {
    const r = Jr.prototype.ObjectElement.call(this, e);
    return this.element.filter(zp).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", q(s));
    }), r;
  }
}, tF = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new rs(), this.specPath = J(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return le(this.element.contentProp) && this.element.contentProp.filter(_o).forEach((n, s) => {
      n.setMetaProperty("media-type", T(s));
    }), r;
  }
}, rF = class extends Ro {
  constructor(e) {
    super(e), this.element = new uh();
  }
}, nF = class extends F(Jr, D) {
  constructor(e) {
    super(e), this.element = new Bn(), this.specPath = J(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(zp).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", T(s));
    }), r;
  }
}, sF = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new ns(), this.specPath = J(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return le(this.element.contentProp) && this.element.contentProp.filter(_o).forEach((n, s) => {
      n.setMetaProperty("media-type", T(s));
    }), le(this.element.headers) && this.element.headers.filter(rn).forEach((n, s) => {
      n.setMetaProperty("header-name", T(s));
    }), r;
  }
};
class iF extends F(X, D) {
  constructor(e) {
    super(e), this.element = new ph(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!rn(n)) return;
      const i = T(s);
      n.setMetaProperty("header-name", i);
    }), r;
  }
}
class oF extends Ro {
  constructor(e) {
    super(e), this.element = new dh();
  }
}
class aF extends F(X, D) {
  constructor(e) {
    super(e), this.element = new mh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
class wb extends F(Y, Jr) {
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
      this.ignoredFields = [...s, ...Qj(r.keys(), i)], Y.prototype.ObjectElement.call(this, r), this.specPath = this.specPathPatternedFields, this.ignoredFields = i, Jr.prototype.ObjectElement.call(this, r);
    } catch (i) {
      throw this.specPath = n, i;
    }
    return ee;
  }
}
let cF = class extends F(wb, D) {
  constructor(e) {
    super(e), this.element = new ss(), this.specPathFixedFields = J(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${_P(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = wb.prototype.ObjectElement.call(this, e);
    return this.element.filter(he).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Po).forEach((n, s) => {
      const i = q(s);
      this.fieldPatternPredicate(T(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
class uF extends F(bt, D) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: de,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "Response"]
    }];
  }
  ObjectElement(e) {
    const r = bt.prototype.enter.call(this, e);
    return he(this.element) ? this.element.setMetaProperty("referenced-element", "response") : Po(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
let lF = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Qn(), this.specPath = J(["document", "objects", "Operation"]);
  }
}, fF = class extends D {
  constructor(e) {
    super(e), this.element = new oh();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(q(e)), ee;
  }
}, tE = class extends F(ht, D) {
  constructor(e) {
    super(e), this.element = new E.ArrayElement(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      he(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, hF = class extends tE {
  constructor(e) {
    super(e), this.element = new Zs();
  }
}, pF = class extends bt {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: de,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ft,
      specPath: ["document", "objects", "RequestBody"]
    }];
  }
  ObjectElement(e) {
    const r = bt.prototype.enter.call(this, e);
    return he(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
class dF extends F(X, D) {
  constructor(r) {
    super(r);
    A(this, "specPath");
    this.element = new ah(), this.specPath = (n) => de(n) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(r) {
    const n = X.prototype.ObjectElement.call(this, r);
    return this.element.filter(he).forEach((s) => {
      s.setMetaProperty("referenced-element", "callback");
    }), n;
  }
}
class mF extends F(ht, D) {
  constructor(e) {
    super(e), this.element = new ei();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = le(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
let vF = class extends Kp {
  constructor(e) {
    super(e), this.element = new ch();
  }
}, yF = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Zn(), this.specPath = J(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(ZO).forEach((n, s) => {
      const i = q(s);
      i.content = T(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), z(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
class gF extends D {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class bF extends Kp {
  constructor(e) {
    super(e), this.element = new rh();
  }
}
class xF extends tE {
  constructor(e) {
    super(e), this.element = new nh();
  }
}
let SF = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new us(), this.specPath = J(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
}, OF = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new So(), this.specPath = J(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
}, EF = class extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new xo(), this.specPath = J(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
class wF extends F(X, D) {
  constructor(e) {
    super(e), this.element = new yh(), this.specPath = J(["value"]);
  }
}
class AF extends F(ht, D) {
  constructor(e) {
    super(e), this.element = new Gf();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = _$(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
const {
  fixedFields: Ae
} = Fe.visitors.document.objects.JSONSchema, P = {
  visitors: {
    value: D,
    document: {
      objects: {
        OpenApi: {
          $visitor: R$,
          fixedFields: {
            openapi: T$,
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
            security: vI,
            tags: AF,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: $$,
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
            version: I$
          }
        },
        Contact: {
          $visitor: F$,
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
          $visitor: M$,
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
          $visitor: L$,
          fixedFields: {
            url: V$,
            description: {
              $ref: "#/visitors/value"
            },
            variables: U$
          }
        },
        ServerVariable: {
          $visitor: B$,
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
          $visitor: yI,
          fixedFields: {
            schemas: LI,
            responses: VI,
            parameters: BI,
            examples: UI,
            requestBodies: JI,
            headers: HI,
            securitySchemes: GI,
            links: KI,
            callbacks: zI
          }
        },
        Paths: {
          $visitor: eF
        },
        PathItem: {
          $visitor: yF,
          fixedFields: {
            $ref: gF,
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
            servers: bF,
            parameters: xF
          }
        },
        Operation: {
          $visitor: lF,
          fixedFields: {
            tags: fF,
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
            parameters: hF,
            requestBody: pF,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: dF,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: mF,
            servers: vF
          }
        },
        ExternalDocumentation: {
          $visitor: XI,
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
          $visitor: SI,
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
            schema: OI,
            example: {
              $ref: "#/visitors/value"
            },
            examples: DI,
            content: qI
          }
        },
        RequestBody: {
          $visitor: tF,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: rF,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: J$,
          fixedFields: {
            schema: hI,
            example: {
              $ref: "#/visitors/value"
            },
            examples: pI,
            encoding: dI
          }
        },
        Encoding: {
          $visitor: QI,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: ZI,
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
          $visitor: cF,
          fixedFields: {
            default: uF
          }
        },
        Response: {
          $visitor: sF,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: iF,
            content: oF,
            links: aF
          }
        },
        Callback: {
          $visitor: nF
        },
        Example: {
          $visitor: WI,
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
            externalValue: YI
          }
        },
        Link: {
          $visitor: k$,
          fixedFields: {
            operationRef: N$,
            operationId: D$,
            parameters: q$,
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
          $visitor: EI,
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
            schema: wI,
            example: {
              $ref: "#/visitors/value"
            },
            examples: AI,
            content: jI
          }
        },
        Tag: {
          $visitor: gI,
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
          $visitor: bI,
          fixedFields: {
            $ref: xI
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: PI,
          fixedFields: {
            // the following properties are taken directly from the JSON Schema definition and follow the same specifications
            title: Ae.title,
            multipleOf: Ae.multipleOf,
            maximum: Ae.maximum,
            exclusiveMaximum: Ae.exclusiveMaximum,
            minimum: Ae.minimum,
            exclusiveMinimum: Ae.exclusiveMinimum,
            maxLength: Ae.maxLength,
            minLength: Ae.minLength,
            pattern: Ae.pattern,
            maxItems: Ae.maxItems,
            minItems: Ae.minItems,
            uniqueItems: Ae.uniqueItems,
            maxProperties: Ae.maxProperties,
            minProperties: Ae.minProperties,
            required: Ae.required,
            enum: Ae.enum,
            // the following properties are taken from the JSON Schema definition but their definitions were adjusted to the OpenAPI Specification
            type: FI,
            allOf: _I,
            anyOf: RI,
            oneOf: TI,
            not: Eb,
            items: CI,
            properties: $I,
            additionalProperties: Eb,
            description: Ae.description,
            format: Ae.format,
            default: Ae.default,
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
          $visitor: MI,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: kI
          }
        },
        XML: {
          $visitor: NI,
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
          $visitor: SF,
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
          $visitor: OF,
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
          $visitor: EF,
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
            scopes: wF
          }
        },
        SecurityRequirement: {
          $visitor: mI
        }
      },
      extension: {
        $visitor: C$
      }
    }
  }
}, jF = () => {
  const t = Lt(w$);
  return {
    predicates: {
      ...fI,
      isElement: be,
      isStringElement: z,
      isArrayElement: Ue,
      isObjectElement: le,
      isMemberElement: ft,
      includesClasses: mo,
      hasElementSourceMap: Dn
    },
    namespace: t
  };
}, PF = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = E.refract(t), s = Xt(P), i = Re(e, s), o = new i({
    specObj: s
  });
  return Ee(n, o), Et(o.element, r, {
    toolboxCreator: jF,
    visitorOptions: {
      keyMap: j$,
      nodeTypeGetter: A$
    }
  });
}, oe = (t) => (e, r = {}) => PF(e, {
  specPath: t,
  ...r
});
Bn.refract = oe(["visitors", "document", "objects", "Callback", "$visitor"]);
Un.refract = oe(["visitors", "document", "objects", "Components", "$visitor"]);
Jn.refract = oe(["visitors", "document", "objects", "Contact", "$visitor"]);
Hn.refract = oe(["visitors", "document", "objects", "Example", "$visitor"]);
go.refract = oe(["visitors", "document", "objects", "Discriminator", "$visitor"]);
bo.refract = oe(["visitors", "document", "objects", "Encoding", "$visitor"]);
Gn.refract = oe(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Qr.refract = oe(["visitors", "document", "objects", "Header", "$visitor"]);
Kn.refract = oe(["visitors", "document", "objects", "Info", "$visitor"]);
zn.refract = oe(["visitors", "document", "objects", "License", "$visitor"]);
Wn.refract = oe(["visitors", "document", "objects", "Link", "$visitor"]);
Yn.refract = oe(["visitors", "document", "objects", "MediaType", "$visitor"]);
xo.refract = oe(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
So.refract = oe(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Xn.refract = oe(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
Oo.refract = oe(["visitors", "document", "objects", "OpenApi", "$visitor"]);
Qn.refract = oe(["visitors", "document", "objects", "Operation", "$visitor"]);
Zr.refract = oe(["visitors", "document", "objects", "Parameter", "$visitor"]);
Zn.refract = oe(["visitors", "document", "objects", "PathItem", "$visitor"]);
es.refract = oe(["visitors", "document", "objects", "Paths", "$visitor"]);
ts.refract = oe(["visitors", "document", "objects", "Reference", "$visitor"]);
rs.refract = oe(["visitors", "document", "objects", "RequestBody", "$visitor"]);
ns.refract = oe(["visitors", "document", "objects", "Response", "$visitor"]);
ss.refract = oe(["visitors", "document", "objects", "Responses", "$visitor"]);
wo.refract = oe(["visitors", "document", "objects", "Schema", "$visitor"]);
cs.refract = oe(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
us.refract = oe(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
ls.refract = oe(["visitors", "document", "objects", "Server", "$visitor"]);
fs.refract = oe(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Ao.refract = oe(["visitors", "document", "objects", "Tag", "$visitor"]);
jo.refract = oe(["visitors", "document", "objects", "XML", "$visitor"]);
class To extends Bn {
}
class Co extends Un {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class $o extends Jn {
}
class Yp extends go {
}
class Xp extends bo {
}
class Io extends Hn {
}
class Fo extends Gn {
}
class Mo extends Qr {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class ko extends Kn {
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
const Mi = class Mi extends E.StringElement {
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
};
A(Mi, "default", new Mi("https://spec.openapis.org/oas/3.1/dialect/base"));
let fr = Mi;
class No extends zn {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class Do extends Wn {
}
class qo extends Yn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Qp extends xo {
}
class Zp extends So {
}
class ed extends Xn {
}
class Zt extends E.ObjectElement {
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
class Lo extends Zr {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Kt extends Zn {
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
class Vo extends es {
}
class er extends ts {
}
Object.defineProperty(er.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
Object.defineProperty(er.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(t) {
    this.set("summary", t);
  },
  enumerable: !0
});
class Bo extends rs {
}
let Uo = class extends ns {
};
class Jo extends ss {
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
const _F = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft6", ps), e.register("jSONReference", tn), e.register("media", is), e.register("linkDescription", ds), e;
  }
}, RF = {
  JSONSchemaDraft6Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Ot
};
let rE = class extends zO {
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
}, TF = class extends WO {
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), ee;
  }
};
class CF extends te {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
let nE = class extends YO {
  constructor(e) {
    super(e), this.element = new ds();
  }
};
const $e = xe(
  // JSON Schema object modifications
  M(["visitors", "document", "objects", "JSONSchema", "$visitor"], rE),
  Ke(["visitors", "document", "objects", "JSONSchema", "fixedFields", "id"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$id"], Fe.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], TF),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "const"], Fe.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "examples"], CF),
  // Link Description object modifications
  M(["visitors", "document", "objects", "LinkDescription", "$visitor"], nE),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ke(["visitors", "document", "objects", "LinkDescription", "fixedFields", "schema"]),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Fe.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ke(["visitors", "document", "objects", "LinkDescription", "fixedFields", "method"]),
  Ke(["visitors", "document", "objects", "LinkDescription", "fixedFields", "encType"]),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"], Fe.visitors.value)
)(Fe), $F = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ps || t(n) && e("JSONSchemaDraft6", n) && r("object", n)), IF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ds || t(n) && e("linkDescription", n) && r("object", n)), FF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Gp,
  isJSONSchemaElement: $F,
  isLinkDescriptionElement: IF,
  isMediaElement: KO
}, Symbol.toStringTag, { value: "Module" })), MF = () => {
  const t = Lt(_F);
  return {
    predicates: {
      ...FF,
      isStringElement: z
    },
    namespace: t
  };
}, kF = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = $e
} = {}) => {
  const s = E.refract(t), i = Xt(n), o = Re(e, i), a = new o({
    specObj: i
  });
  return Ee(s, a), Et(a.element, r, {
    toolboxCreator: MF,
    visitorOptions: {
      keyMap: RF,
      nodeTypeGetter: as
    }
  });
}, sE = (t) => (e, r = {}) => kF(e, {
  specPath: t,
  ...r
});
ps.refract = sE(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
ds.refract = sE(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
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
}, vs = class extends ds {
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
const NF = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft7", ms), e.register("jSONReference", tn), e.register("linkDescription", vs), e;
  }
}, DF = {
  JSONSchemaDraft7Element: ["content"],
  JSONReferenceElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Ot
};
let iE = class extends rE {
  constructor(e) {
    super(e), this.element = new ms();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "http://json-schema.org/draft-07/schema#";
  }
}, oE = class extends nE {
  constructor(e) {
    super(e), this.element = new vs();
  }
};
const Ut = xe(
  // JSON Schema object modifications
  M(["visitors", "document", "objects", "JSONSchema", "$visitor"], iE),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$comment"], $e.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], $e.visitors.JSONSchemaOrJSONReferenceVisitor),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], $e.visitors.JSONSchemaOrJSONReferenceVisitor),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], $e.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ke(["visitors", "document", "objects", "JSONSchema", "fixedFields", "media"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentEncoding"], $e.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentMediaType"], $e.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "writeOnly"], $e.visitors.value),
  // Link Description object modifications
  M(["visitors", "document", "objects", "LinkDescription", "$visitor"], oE),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchor"], $e.visitors.value),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "anchorPointer"], $e.visitors.value),
  Ke(["visitors", "document", "objects", "LinkDescription", "fixedFields", "mediaType"]),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetMediaType"], $e.visitors.value),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetHints"], $e.visitors.value),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "description"], $e.visitors.value),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "$comment"], $e.visitors.value),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], $e.visitors.JSONSchemaOrJSONReferenceVisitor),
  Ke(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionEncType"]),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionMediaType"], $e.visitors.value)
)($e), qF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ms || t(n) && e("JSONSchemaDraft7", n) && r("object", n)), LF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vs || t(n) && e("linkDescription", n) && r("object", n)), VF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: Gp,
  isJSONSchemaElement: qF,
  isLinkDescriptionElement: LF
}, Symbol.toStringTag, { value: "Module" })), BF = () => {
  const t = Lt(NF);
  return {
    predicates: {
      ...VF,
      isStringElement: z
    },
    namespace: t
  };
}, UF = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Ut
} = {}) => {
  const s = E.refract(t), i = Xt(n), o = Re(e, i), a = new o({
    specObj: i
  });
  return Ee(s, a), Et(a.element, r, {
    toolboxCreator: BF,
    visitorOptions: {
      keyMap: DF,
      nodeTypeGetter: as
    }
  });
}, aE = (t) => (e, r = {}) => UF(e, {
  specPath: t,
  ...r
});
ms.refract = aE(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
vs.refract = aE(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let ys = class extends ms {
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
}, gs = class extends vs {
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
const JF = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema201909", ys), e.register("linkDescription", gs), e;
  }
}, HF = {
  JSONSchema201909Element: ["content"],
  LinkDescriptionElement: ["content"],
  ...Ot
};
let Ie = class extends iE {
  constructor(e) {
    super(e), this.element = new ys();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2019-09/schema";
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = lr.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
};
class GF extends te {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
class KF extends te {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let cE = class extends F(Qt, we, te) {
  constructor(e) {
    super(e), this.element = new E.ObjectElement(), this.element.classes.push("json-schema-$defs"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
}, uE = class extends F(Xe, we, te) {
  constructor(e) {
    super(e), this.element = new E.ArrayElement(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, lE = class extends F(Xe, we, te) {
  constructor(e) {
    super(e), this.element = new E.ArrayElement(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, fE = class extends F(Xe, we, te) {
  constructor(e) {
    super(e), this.element = new E.ArrayElement(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, hE = class extends F(Qt, we, te) {
  constructor(e) {
    super(e), this.element = new E.ObjectElement(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
};
class zF extends F(Xe, we, te) {
  ObjectElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), ee;
  }
  ArrayElement(e) {
    return this.element = new E.ArrayElement(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
  BooleanElement(e) {
    return this.element = this.toRefractedElement(["document", "objects", "JSONSchema"], e), ee;
  }
}
let pE = class extends F(Qt, we, te) {
  constructor(e) {
    super(e), this.element = new E.ObjectElement(), this.element.classes.push("json-schema-properties"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
}, dE = class extends F(Qt, we, te) {
  constructor(e) {
    super(e), this.element = new E.ObjectElement(), this.element.classes.push("json-schema-patternProperties"), this.specPath = J(["document", "objects", "JSONSchema"]);
  }
};
class WF extends te {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
let mE = class extends oE {
  constructor(e) {
    super(e), this.element = new gs();
  }
};
const Ps = xe(
  // JSON Schema object modifications
  M(["visitors", "document", "objects", "JSONSchema", "$visitor"], Ie),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$vocabulary"], GF),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$anchor"], Ut.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"], Ut.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"], Ut.visitors.value),
  Ke(["visitors", "document", "objects", "JSONReference", "$visitor"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$ref"], KF),
  Ke(["visitors", "document", "objects", "JSONSchema", "fixedFields", "definitions"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$defs"], cE),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "allOf"], uE),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "anyOf"], lE),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "oneOf"], fE),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], Ie),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], Ie),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], Ie),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], Ie),
  Ke(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependencies"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentSchemas"], hE),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], zF),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], Ie),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "properties"], pE),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "patternProperties"], dE),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], Ie),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"], Ie),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], Ie),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], Ie),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], Ie),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "maxContains"], Ut.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "minContains"], Ut.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "dependentRequired"], WF),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "deprecated"], Ut.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], Ie),
  // Link Description object modifications
  M(["visitors", "document", "objects", "LinkDescription", "$visitor"], mE),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], Ie),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], Ie),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], Ie),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], Ie)
)(Ut), YF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ys || t(n) && e("JSONSchema201909", n) && r("object", n)), XF = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gs || t(n) && e("linkDescription", n) && r("object", n)), QF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: YF,
  isLinkDescriptionElement: XF
}, Symbol.toStringTag, { value: "Module" })), ZF = () => {
  const t = Lt(JF);
  return {
    predicates: {
      ...QF,
      isStringElement: z
    },
    namespace: t
  };
}, eM = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Ps
} = {}) => {
  const s = E.refract(t), i = Xt(n), o = Re(e, i), a = new o({
    specObj: i
  });
  return Ee(s, a), Et(a.element, r, {
    toolboxCreator: ZF,
    visitorOptions: {
      keyMap: HF,
      nodeTypeGetter: as
    }
  });
}, vE = (t) => (e, r = {}) => eM(e, {
  specPath: t,
  ...r
});
ys.refract = vE(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
gs.refract = vE(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class bs extends ys {
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
class Ho extends gs {
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
const tM = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchema202012", bs), e.register("linkDescription", Ho), e;
  }
}, rM = {
  JSONSchema202012Element: ["content"],
  LinkDescriptionElement: ["content"],
  ...Ot
};
let je = class extends Ie {
  constructor(e) {
    super(e), this.element = new bs();
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultDialectIdentifier() {
    return "https://json-schema.org/draft/2020-12/schema";
  }
}, yE = class extends F(Xe, we, te) {
  constructor(e) {
    super(e), this.element = new E.ArrayElement(), this.element.classes.push("json-schema-prefixItems");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "JSONSchema"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, nM = class extends mE {
  constructor(e) {
    super(e), this.element = new Ho();
  }
};
const gE = xe(
  // JSON Schema object modifications
  M(["visitors", "document", "objects", "JSONSchema", "$visitor"], je),
  Ke(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveAnchor"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicAnchor"], Ps.visitors.value),
  Ke(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$recursiveRef"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "$dynamicRef"], Ps.visitors.value),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "not"], je),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "if"], je),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "then"], je),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "else"], je),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "prefixItems"], yE),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "items"], je),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contains"], je),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalProperties"], je),
  Ke(["visitors", "document", "objects", "JSONSchema", "fixedFields", "additionalItems"]),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "propertyNames"], je),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedItems"], je),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "unevaluatedProperties"], je),
  M(["visitors", "document", "objects", "JSONSchema", "fixedFields", "contentSchema"], je),
  // Link Description object modifications
  M(["visitors", "document", "objects", "LinkDescription", "$visitor"], nM),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "targetSchema"], je),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "hrefSchema"], je),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "headerSchema"], je),
  M(["visitors", "document", "objects", "LinkDescription", "fixedFields", "submissionSchema"], je)
)(Ps), sM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof bs || t(n) && e("JSONSchema202012", n) && r("object", n)), iM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ho || t(n) && e("linkDescription", n) && r("object", n)), oM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONSchemaElement: sM,
  isLinkDescriptionElement: iM
}, Symbol.toStringTag, { value: "Module" })), aM = () => {
  const t = Lt(tM);
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
  specificationObj: n = gE
} = {}) => {
  const s = E.refract(t), i = Xt(n), o = Re(e, i), a = new o({
    specObj: i
  });
  return Ee(s, a), Et(a.element, r, {
    toolboxCreator: aM,
    visitorOptions: {
      keyMap: rM,
      nodeTypeGetter: as
    }
  });
}, bE = (t) => (e, r = {}) => cM(e, {
  specPath: t,
  ...r
});
bs.refract = bE(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Ho.refract = bE(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
class Sr extends bs {
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
class Go extends cs {
}
class Ko extends us {
}
class zo extends ls {
}
class Wo extends fs {
}
class td extends Ao {
}
class rd extends jo {
}
const nd = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", To), e.register("components", Co), e.register("contact", $o), e.register("discriminator", Yp), e.register("encoding", Xp), e.register("example", Io), e.register("externalDocumentation", Fo), e.register("header", Mo), e.register("info", ko), e.register("jsonSchemaDialect", fr), e.register("license", No), e.register("link", Do), e.register("mediaType", qo), e.register("oAuthFlow", Qp), e.register("oAuthFlows", Zp), e.register("openapi", ed), e.register("openApi3_1", Zt), e.register("operation", hs), e.register("parameter", Lo), e.register("pathItem", Kt), e.register("paths", Vo), e.register("reference", er), e.register("requestBody", Bo), e.register("response", Uo), e.register("responses", Jo), e.register("schema", Sr), e.register("securityRequirement", Go), e.register("securityScheme", Ko), e.register("server", zo), e.register("serverVariable", Wo), e.register("tag", td), e.register("xml", rd), e;
  }
}, ki = class ki extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ki.primaryClass);
  }
};
A(ki, "primaryClass", "components-path-items");
let Sh = ki;
const Ni = class Ni extends E.ObjectElement {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ni.primaryClass);
  }
};
A(Ni, "primaryClass", "webhooks");
let Oh = Ni;
const ot = (t) => {
  if (be(t))
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
  ...Ot
};
class xs {
  constructor(e, r, n) {
    A(this, "internalStore");
    this.storageElement = e, this.storageField = r, this.storageSubField = n;
  }
  get store() {
    if (!this.internalStore) {
      let e = this.storageElement.get(this.storageField);
      le(e) || (e = new E.ObjectElement(), this.storageElement.set(this.storageField, e));
      let r = e.get(this.storageSubField);
      Ue(r) || (r = new E.ArrayElement(), e.set(this.storageSubField, r)), this.internalStore = r;
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
const uM = ({
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
          const d = Xi(i);
          if (!Array.isArray(d) || d.length === 0)
            return;
          const h = n([...l, u, a]);
          if (o.includes(h))
            return;
          const v = ES([], ["parameters", "content"], a), p = MP(s, [...v, ...d]);
          a.parameters = new Zs(p), o.append(h);
        }
      }
    }
  };
}, lM = ({
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
            var v;
            o.security = new ei((v = s) === null || v === void 0 ? void 0 : v.content), i.append(l);
          }
        }
      }
    }
  };
}, Eh = (t) => t.replace(/\s/g, ""), wh = (t) => t.replace(/\W/gi, "_"), fM = (t, e) => {
  const r = wh(Eh(e.toLowerCase())), n = wh(Eh(t));
  return `${r}${n}`;
}, hM = (t, e, r) => {
  const n = Eh(t);
  return n.length > 0 ? wh(n) : fM(e, r);
}, pM = ({
  storageField: t = "x-normalized",
  operationIdNormalizer: e = hM
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
          const f = yP((l) => T(l.operationId), a);
          Object.entries(f).forEach(([l, d]) => {
            Array.isArray(d) && (d.length <= 1 || d.forEach((h, v) => {
              const p = `${l}${v + 1}`;
              h.operationId = new i.elements.String(p);
            }));
          }), c.forEach((l) => {
            if (typeof l.operationId > "u") return;
            const d = String(T(l.operationId)), h = a.find((v) => T(v.meta.get("originalOperationId")) === d);
            typeof h > "u" || (l.operationId = q.safe(h.operationId), l.meta.set("originalOperationId", d), l.set("__originalOperationId", d));
          }), a.length = 0, c.length = 0, u = void 0;
        }
      },
      PathItemElement: {
        enter(f) {
          const l = qr("path", T(f.meta.get("path")));
          o.push(l);
        },
        leave() {
          o.pop();
        }
      },
      OperationElement: {
        enter(f, l, d, h, v) {
          if (typeof f.operationId > "u") return;
          const p = s([...v, d, f]);
          if (u.includes(p))
            return;
          const y = String(T(f.operationId)), g = Xi(o), m = qr("method", T(f.meta.get("http-method"))), b = e(y, g, m);
          y !== b && (f.operationId = new i.elements.String(b), f.set("__originalOperationId", y), f.meta.set("originalOperationId", y), a.push(f), u.append(p));
        }
      },
      LinkElement: {
        leave(f) {
          n.isLinkElement(f) && (typeof f.operationId > "u" || c.push(f));
        }
      }
    }
  };
}, dM = ({
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
              const h = i.examples.map((v) => q.safe(v.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", h), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", h[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [q(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", q(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, mM = ({
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
              const h = i.examples.map((v) => q.safe(v.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", h), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", h[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [q(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", q(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, vM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof To || t(n) && e("callback", n) && r("object", n)), yM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Co || t(n) && e("components", n) && r("object", n)), gM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof $o || t(n) && e("contact", n) && r("object", n)), bM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Io || t(n) && e("example", n) && r("object", n)), xM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Fo || t(n) && e("externalDocumentation", n) && r("object", n)), SM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Mo || t(n) && e("header", n) && r("object", n)), OM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ko || t(n) && e("info", n) && r("object", n)), xE = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fr || t(n) && e("jsonSchemaDialect", n) && r("string", n)), EM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof No || t(n) && e("license", n) && r("object", n)), wM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Do || t(n) && e("link", n) && r("object", n)), AM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ed || t(n) && e("openapi", n) && r("string", n)), SE = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Zt || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), OE = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hs || t(n) && e("operation", n) && r("object", n)), jM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Lo || t(n) && e("parameter", n) && r("object", n)), hr = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Kt || t(n) && e("pathItem", n) && r("object", n)), PM = (t) => {
  if (!hr(t) || !z(t.$ref))
    return !1;
  const e = T(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, _M = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Vo || t(n) && e("paths", n) && r("object", n)), Or = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof er || t(n) && e("reference", n) && r("object", n)), RM = (t) => {
  if (!Or(t) || !z(t.$ref))
    return !1;
  const e = T(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, TM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bo || t(n) && e("requestBody", n) && r("object", n)), CM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Uo || t(n) && e("response", n) && r("object", n)), $M = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Jo || t(n) && e("responses", n) && r("object", n)), zt = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Sr || t(n) && e("schema", n) && r("object", n)), sd = (t) => Nn(t) && t.classes.includes("boolean-json-schema"), IM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Go || t(n) && e("securityRequirement", n) && r("object", n)), FM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ko || t(n) && e("securityScheme", n) && r("object", n)), MM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zo || t(n) && e("server", n) && r("object", n)), kM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wo || t(n) && e("serverVariable", n) && r("object", n)), NM = k(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof qo || t(n) && e("mediaType", n) && r("object", n)), DM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: sd,
  isCallbackElement: vM,
  isComponentsElement: yM,
  isContactElement: gM,
  isExampleElement: bM,
  isExternalDocumentationElement: xM,
  isHeaderElement: SM,
  isInfoElement: OM,
  isJsonSchemaDialectElement: xE,
  isLicenseElement: EM,
  isLinkElement: wM,
  isMediaTypeElement: NM,
  isOpenApi3_1Element: SE,
  isOpenapiElement: AM,
  isOperationElement: OE,
  isParameterElement: jM,
  isPathItemElement: hr,
  isPathItemElementExternal: PM,
  isPathsElement: _M,
  isReferenceElement: Or,
  isReferenceElementExternal: RM,
  isRequestBodyElement: TM,
  isResponseElement: CM,
  isResponsesElement: $M,
  isSchemaElement: zt,
  isSecurityRequirementElement: IM,
  isSecuritySchemeElement: FM,
  isServerElement: MM,
  isServerVariableElement: kM
}, Symbol.toStringTag, { value: "Module" })), qM = (t) => {
  const e = t.reduce((r, n, s) => {
    if (ft(n)) {
      const i = String(T(n.key));
      r.push(i);
    } else if (Ue(t[s - 2])) {
      const i = String(t[s - 2].content.indexOf(n));
      r.push(i);
    }
    return r;
  }, []);
  return BO(e);
}, EE = () => {
  const t = Lt(nd);
  return {
    predicates: {
      ...DM,
      isElement: be,
      isStringElement: z,
      isArrayElement: Ue,
      isObjectElement: le,
      isMemberElement: ft,
      isServersElement: eE,
      includesClasses: mo,
      hasElementSourceMap: Dn
    },
    ancestorLineageToJSONPointer: qM,
    namespace: t
  };
};
class LM extends F(Y, D) {
  constructor(e) {
    super(e), this.element = new Zt(), this.specPath = J(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, Y.prototype.ObjectElement.call(this, e);
  }
}
const VM = P.visitors.document.objects.Info.$visitor;
class BM extends VM {
  constructor(e) {
    super(e), this.element = new ko();
  }
}
const UM = P.visitors.document.objects.Contact.$visitor;
class JM extends UM {
  constructor(e) {
    super(e), this.element = new $o();
  }
}
const HM = P.visitors.document.objects.License.$visitor;
class GM extends HM {
  constructor(e) {
    super(e), this.element = new No();
  }
}
const KM = P.visitors.document.objects.Link.$visitor;
class zM extends KM {
  constructor(e) {
    super(e), this.element = new Do();
  }
}
class WM extends F(ht, D) {
  StringElement(e) {
    const r = new fr(T(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, ee;
  }
}
const YM = P.visitors.document.objects.Server.$visitor;
class XM extends YM {
  constructor(e) {
    super(e), this.element = new zo();
  }
}
const QM = P.visitors.document.objects.ServerVariable.$visitor;
class ZM extends QM {
  constructor(e) {
    super(e), this.element = new Wo();
  }
}
const ek = P.visitors.document.objects.MediaType.$visitor;
class tk extends ek {
  constructor(e) {
    super(e), this.element = new qo();
  }
}
const rk = P.visitors.document.objects.SecurityRequirement.$visitor;
class nk extends rk {
  constructor(e) {
    super(e), this.element = new Go();
  }
}
const sk = P.visitors.document.objects.Components.$visitor;
class ik extends sk {
  constructor(e) {
    super(e), this.element = new Co();
  }
}
const ok = P.visitors.document.objects.Tag.$visitor;
class ak extends ok {
  constructor(e) {
    super(e), this.element = new td();
  }
}
const ck = P.visitors.document.objects.Reference.$visitor;
class uk extends ck {
  constructor(e) {
    super(e), this.element = new er();
  }
}
const lk = P.visitors.document.objects.Parameter.$visitor;
class fk extends lk {
  constructor(e) {
    super(e), this.element = new Lo();
  }
}
const hk = P.visitors.document.objects.Header.$visitor;
class pk extends hk {
  constructor(e) {
    super(e), this.element = new Mo();
  }
}
class dk extends F(Y, we, D) {
  constructor(e) {
    super(e), this.element = new Sr(), this.specPath = J(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = fr.default, this.passingOptionsNames.push("parent");
  }
  ObjectElement(e) {
    this.handleDialectIdentifier(e), this.handleSchemaIdentifier(e), this.parent = this.element;
    const r = Y.prototype.ObjectElement.call(this, e);
    return z(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
  }
  BooleanElement(e) {
    return je.prototype.BooleanElement.call(this, e);
  }
  /**
   * This function depends on some external context, so we need to make sure this function
   * works even when no context is provided like when directly refracting generic Object Element
   * into Schema Element: `SchemaElement.refract(new ObjectElement({ type: 'object' });`
   */
  get defaultDialectIdentifier() {
    let e;
    return this.openApiSemanticElement !== void 0 && // @ts-ignore
    xE(this.openApiSemanticElement.jsonSchemaDialect) ? e = T(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && z(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = T(this.openApiGenericElement.get("jsonSchemaDialect")) : e = T(this.jsonSchemaDefaultDialect), e;
  }
  handleDialectIdentifier(e) {
    return je.prototype.handleDialectIdentifier.call(this, e);
  }
  handleSchemaIdentifier(e) {
    return je.prototype.handleSchemaIdentifier.call(this, e);
  }
}
class mk extends cE {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
let vk = class extends uE {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
};
class yk extends lE {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class gk extends fE {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class bk extends hE {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class xk extends yE {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class Sk extends pE {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
class Ok extends dE {
  constructor(e) {
    super(e), this.passingOptionsNames.push("parent");
  }
}
const Ek = P.visitors.document.objects.Discriminator.$visitor;
class wk extends Ek {
  constructor(e) {
    super(e), this.element = new Yp(), this.canSupportSpecificationExtensions = !0;
  }
}
const Ak = P.visitors.document.objects.XML.$visitor;
class jk extends Ak {
  constructor(e) {
    super(e), this.element = new rd();
  }
}
class Pk extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Qs(), this.specPath = J(["document", "objects", "Schema"]);
  }
}
class _k extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Sh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(Or).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const Rk = P.visitors.document.objects.Example.$visitor;
class Tk extends Rk {
  constructor(e) {
    super(e), this.element = new Io();
  }
}
const Ck = P.visitors.document.objects.ExternalDocumentation.$visitor;
class $k extends Ck {
  constructor(e) {
    super(e), this.element = new Fo();
  }
}
const Ik = P.visitors.document.objects.Encoding.$visitor;
class Fk extends Ik {
  constructor(e) {
    super(e), this.element = new Xp();
  }
}
const Mk = P.visitors.document.objects.Paths.$visitor;
class kk extends Mk {
  constructor(e) {
    super(e), this.element = new Vo();
  }
}
const Nk = P.visitors.document.objects.RequestBody.$visitor;
class Dk extends Nk {
  constructor(e) {
    super(e), this.element = new Bo();
  }
}
const Ab = P.visitors.document.objects.Callback.$visitor;
class qk extends Ab {
  constructor(e) {
    super(e), this.element = new To(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Ab.prototype.ObjectElement.call(this, e);
    return this.element.filter(Or).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const Lk = P.visitors.document.objects.Response.$visitor;
class Vk extends Lk {
  constructor(e) {
    super(e), this.element = new Uo();
  }
}
const Bk = P.visitors.document.objects.Responses.$visitor;
class Uk extends Bk {
  constructor(e) {
    super(e), this.element = new Jo();
  }
}
const Jk = P.visitors.document.objects.Operation.$visitor;
class Hk extends Jk {
  constructor(e) {
    super(e), this.element = new hs();
  }
}
const Gk = P.visitors.document.objects.PathItem.$visitor;
class Kk extends Gk {
  constructor(e) {
    super(e), this.element = new Kt();
  }
}
const zk = P.visitors.document.objects.SecurityScheme.$visitor;
class Wk extends zk {
  constructor(e) {
    super(e), this.element = new Ko();
  }
}
const Yk = P.visitors.document.objects.OAuthFlows.$visitor;
class Xk extends Yk {
  constructor(e) {
    super(e), this.element = new Zp();
  }
}
const Qk = P.visitors.document.objects.OAuthFlow.$visitor;
class Zk extends Qk {
  constructor(e) {
    super(e), this.element = new Qp();
  }
}
class eN extends F(X, D) {
  constructor(e) {
    super(e), this.element = new Oh(), this.specPath = (r) => de(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = X.prototype.ObjectElement.call(this, e);
    return this.element.filter(Or).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter(hr).forEach((n, s) => {
      n.setMetaProperty("webhook-name", T(s));
    }), r;
  }
}
const {
  JSONSchema: tN,
  LinkDescription: rN
} = gE.visitors.document.objects, nN = {
  visitors: {
    value: P.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: LM,
          fixedFields: {
            openapi: P.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: WM,
            servers: P.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: eN,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: P.visitors.document.objects.OpenApi.fixedFields.security,
            tags: P.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: BM,
          fixedFields: {
            title: P.visitors.document.objects.Info.fixedFields.title,
            description: P.visitors.document.objects.Info.fixedFields.description,
            summary: {
              $ref: "#/visitors/value"
            },
            termsOfService: P.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: P.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: JM,
          fixedFields: {
            name: P.visitors.document.objects.Contact.fixedFields.name,
            url: P.visitors.document.objects.Contact.fixedFields.url,
            email: P.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: GM,
          fixedFields: {
            name: P.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: P.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: XM,
          fixedFields: {
            url: P.visitors.document.objects.Server.fixedFields.url,
            description: P.visitors.document.objects.Server.fixedFields.description,
            variables: P.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: ZM,
          fixedFields: {
            enum: P.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: P.visitors.document.objects.ServerVariable.fixedFields.default,
            description: P.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: ik,
          fixedFields: {
            schemas: Pk,
            responses: P.visitors.document.objects.Components.fixedFields.responses,
            parameters: P.visitors.document.objects.Components.fixedFields.parameters,
            examples: P.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: P.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: P.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: P.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: P.visitors.document.objects.Components.fixedFields.links,
            callbacks: P.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: _k
          }
        },
        Paths: {
          $visitor: kk
        },
        PathItem: {
          $visitor: Kk,
          fixedFields: {
            $ref: P.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: P.visitors.document.objects.PathItem.fixedFields.summary,
            description: P.visitors.document.objects.PathItem.fixedFields.description,
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
            servers: P.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: P.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: Hk,
          fixedFields: {
            tags: P.visitors.document.objects.Operation.fixedFields.tags,
            summary: P.visitors.document.objects.Operation.fixedFields.summary,
            description: P.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: P.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: P.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: P.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: P.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: P.visitors.document.objects.Operation.fixedFields.deprecated,
            security: P.visitors.document.objects.Operation.fixedFields.security,
            servers: P.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: $k,
          fixedFields: {
            description: P.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: P.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: fk,
          fixedFields: {
            name: P.visitors.document.objects.Parameter.fixedFields.name,
            in: P.visitors.document.objects.Parameter.fixedFields.in,
            description: P.visitors.document.objects.Parameter.fixedFields.description,
            required: P.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: P.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: P.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: P.visitors.document.objects.Parameter.fixedFields.style,
            explode: P.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: P.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: P.visitors.document.objects.Parameter.fixedFields.example,
            examples: P.visitors.document.objects.Parameter.fixedFields.examples,
            content: P.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: Dk,
          fixedFields: {
            description: P.visitors.document.objects.RequestBody.fixedFields.description,
            content: P.visitors.document.objects.RequestBody.fixedFields.content,
            required: P.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: tk,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: P.visitors.document.objects.MediaType.fixedFields.example,
            examples: P.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: P.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: Fk,
          fixedFields: {
            contentType: P.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: P.visitors.document.objects.Encoding.fixedFields.headers,
            style: P.visitors.document.objects.Encoding.fixedFields.style,
            explode: P.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: P.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: Uk,
          fixedFields: {
            default: P.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: Vk,
          fixedFields: {
            description: P.visitors.document.objects.Response.fixedFields.description,
            headers: P.visitors.document.objects.Response.fixedFields.headers,
            content: P.visitors.document.objects.Response.fixedFields.content,
            links: P.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: qk
        },
        Example: {
          $visitor: Tk,
          fixedFields: {
            summary: P.visitors.document.objects.Example.fixedFields.summary,
            description: P.visitors.document.objects.Example.fixedFields.description,
            value: P.visitors.document.objects.Example.fixedFields.value,
            externalValue: P.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: zM,
          fixedFields: {
            operationRef: P.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: P.visitors.document.objects.Link.fixedFields.operationId,
            parameters: P.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: P.visitors.document.objects.Link.fixedFields.requestBody,
            description: P.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: pk,
          fixedFields: {
            description: P.visitors.document.objects.Header.fixedFields.description,
            required: P.visitors.document.objects.Header.fixedFields.required,
            deprecated: P.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: P.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: P.visitors.document.objects.Header.fixedFields.style,
            explode: P.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: P.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: P.visitors.document.objects.Header.fixedFields.example,
            examples: P.visitors.document.objects.Header.fixedFields.examples,
            content: P.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: ak,
          fixedFields: {
            name: P.visitors.document.objects.Tag.fixedFields.name,
            description: P.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: uk,
          fixedFields: {
            $ref: P.visitors.document.objects.Reference.fixedFields.$ref,
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
          ...rN
        },
        Schema: {
          $visitor: dk,
          fixedFields: {
            ...tN.fixedFields,
            // core vocabulary
            $defs: mk,
            // applicator vocabulary
            allOf: vk,
            anyOf: yk,
            oneOf: gk,
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
            dependentSchemas: bk,
            prefixItems: xk,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: Sk,
            patternProperties: Ok,
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
          $visitor: wk,
          fixedFields: {
            propertyName: P.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: P.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: jk,
          fixedFields: {
            name: P.visitors.document.objects.XML.fixedFields.name,
            namespace: P.visitors.document.objects.XML.fixedFields.namespace,
            prefix: P.visitors.document.objects.XML.fixedFields.prefix,
            attribute: P.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: P.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: Wk,
          fixedFields: {
            type: P.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: P.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: P.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: P.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: P.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: P.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: P.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: Xk,
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
          $visitor: Zk,
          fixedFields: {
            authorizationUrl: P.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: P.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: P.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: P.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: nk
        }
      },
      extension: {
        $visitor: P.visitors.document.extension.$visitor
      }
    }
  }
}, sN = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = E.refract(t), s = Xt(nN), i = Re(e, s), o = new i({
    specObj: s
  });
  return Ee(n, o), Et(o.element, r, {
    toolboxCreator: EE,
    visitorOptions: {
      keyMap: vt,
      nodeTypeGetter: ot
    }
  });
}, se = (t) => (e, r = {}) => sN(e, {
  specPath: t,
  ...r
});
To.refract = se(["visitors", "document", "objects", "Callback", "$visitor"]);
Co.refract = se(["visitors", "document", "objects", "Components", "$visitor"]);
$o.refract = se(["visitors", "document", "objects", "Contact", "$visitor"]);
Io.refract = se(["visitors", "document", "objects", "Example", "$visitor"]);
Yp.refract = se(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Xp.refract = se(["visitors", "document", "objects", "Encoding", "$visitor"]);
Fo.refract = se(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Mo.refract = se(["visitors", "document", "objects", "Header", "$visitor"]);
ko.refract = se(["visitors", "document", "objects", "Info", "$visitor"]);
fr.refract = se(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
No.refract = se(["visitors", "document", "objects", "License", "$visitor"]);
Do.refract = se(["visitors", "document", "objects", "Link", "$visitor"]);
qo.refract = se(["visitors", "document", "objects", "MediaType", "$visitor"]);
Qp.refract = se(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Zp.refract = se(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
ed.refract = se(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
Zt.refract = se(["visitors", "document", "objects", "OpenApi", "$visitor"]);
hs.refract = se(["visitors", "document", "objects", "Operation", "$visitor"]);
Lo.refract = se(["visitors", "document", "objects", "Parameter", "$visitor"]);
Kt.refract = se(["visitors", "document", "objects", "PathItem", "$visitor"]);
Vo.refract = se(["visitors", "document", "objects", "Paths", "$visitor"]);
er.refract = se(["visitors", "document", "objects", "Reference", "$visitor"]);
Bo.refract = se(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Uo.refract = se(["visitors", "document", "objects", "Response", "$visitor"]);
Jo.refract = se(["visitors", "document", "objects", "Responses", "$visitor"]);
Sr.refract = se(["visitors", "document", "objects", "Schema", "$visitor"]);
Go.refract = se(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Ko.refract = se(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
zo.refract = se(["visitors", "document", "objects", "Server", "$visitor"]);
Wo.refract = se(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
td.refract = se(["visitors", "document", "objects", "Tag", "$visitor"]);
rd.refract = se(["visitors", "document", "objects", "XML", "$visitor"]);
class iN extends Ln {
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
      const r = unescape(encodeURIComponent(e.toString())), n = btoa(r), s = new ct();
      if (n.length !== 0) {
        const i = new E.StringElement(n);
        i.classes.push("result"), s.push(i);
      }
      return s;
    } catch (r) {
      throw new Tt(`Error parsing "${e.uri}"`, {
        cause: r
      });
    }
  }
}
class oN extends BT {
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
      throw new bO('"openapi-3-1" dereference strategy is not available.');
    const s = new Vr(), i = NS(r, {
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
  AbortController: aN,
  AbortSignal: cN
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = aN);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = cN);
class wE extends VT {
  constructor({
    swaggerHTTPClient: r = Nr,
    swaggerHTTPClientConfig: n = {},
    ...s
  } = {}) {
    super({
      ...s,
      name: "http-swagger-client"
    });
    A(this, "swaggerHTTPClient", Nr);
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
      throw new DS(`Error downloading "${r.uri}"`, {
        cause: f
      });
    } finally {
      clearTimeout(o);
    }
  }
}
class AE extends Ln {
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
      throw new Tt("json-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new ct(), n = e.toString();
    if (this.allowEmpty && n.trim() === "")
      return r;
    try {
      const s = gO(JSON.parse(n));
      return s.classes.push("result"), r.push(s), r;
    } catch (s) {
      throw new Tt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class jE extends Ln {
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
        return kr.load(e.toString(), {
          schema: Ms
        }), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new Tt("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new ct(), n = e.toString();
    try {
      const s = kr.load(n, {
        schema: Ms
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = gO(s);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new Tt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class PE extends Ln {
  constructor(r = {}) {
    super({
      name: "openapi-json-3-1-swagger-client",
      mediaTypes: new Hp(...Ur.filterByFormat("generic"), ...Ur.filterByFormat("json")),
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
      throw new Tt("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new ct(), s = r.toString();
    if (this.allowEmpty && s.trim() === "")
      return n;
    try {
      const i = JSON.parse(s), o = Zt.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new Tt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
class _E extends Ln {
  constructor(r = {}) {
    super({
      name: "openapi-yaml-3-1-swagger-client",
      mediaTypes: new Hp(...Ur.filterByFormat("generic"), ...Ur.filterByFormat("yaml")),
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
        return kr.load(i), this.detectionRegExp.test(i);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(r) {
    if (this.sourceMap)
      throw new Tt("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new ct(), s = r.toString();
    try {
      const i = kr.load(s, {
        schema: Ms
      });
      if (this.allowEmpty && typeof i > "u")
        return n;
      const o = Zt.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new Tt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
const Yo = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), Hr = (t) => {
  const e = Ep(t);
  return bp("#", e);
}, uN = (t) => {
  if (!Yo(t))
    throw new GT(t);
  return t;
}, id = (t, e) => {
  const r = uN(t), n = dO((s) => zt(s) && T(s.$anchor) === r, e);
  if (Yt(n))
    throw new JT(`Evaluation failed on token: "${r}"`);
  return n;
}, RE = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = Ep(T(e.$ref)), n = T(e.meta.get("ancestorsSchemaIdentifiers"));
  return `${vr((i, o) => _e(i, kn(fe(o))), t, [...n, T(e.$ref)])}${r === "#" ? "" : r}`;
}, lN = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = T(e.meta.get("ancestorsSchemaIdentifiers"));
  return vr((n, s) => _e(n, kn(fe(s))), t, [...r, T(e.$id)]);
}, pn = (t) => {
  if (pn.cache.has(t))
    return pn.cache.get(t);
  const e = Sr.refract(t);
  return pn.cache.set(t, e), e;
};
pn.cache = /* @__PURE__ */ new WeakMap();
const Ne = (t) => cr(t) ? pn(t) : t, Xo = (t, e) => {
  const {
    cache: r
  } = Xo, n = fe(t), s = (c) => zt(c) && typeof c.$id < "u";
  if (!r.has(e)) {
    const c = AT(s, e);
    r.set(e, Array.from(c));
  }
  const i = r.get(e).find((c) => lN(n, c) === n);
  if (Yt(i))
    throw new kp(`Evaluation failed on URI: "${t}"`);
  let o, a;
  return Yo(Hr(t)) ? (o = id, a = Hr(t)) : (o = it, a = Ze(t)), o(a, i);
};
Xo.cache = /* @__PURE__ */ new WeakMap();
const bf = Ee[Symbol.for("nodejs.util.promisify.custom")], Ce = new Fp(), dt = (t, e, r, n) => {
  ft(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class Fr {
  constructor({
    reference: e,
    namespace: r,
    options: n,
    indirections: s = [],
    ancestors: i = new mf(),
    refractCache: o = /* @__PURE__ */ new Map()
  }) {
    A(this, "indirections");
    A(this, "namespace");
    A(this, "reference");
    A(this, "options");
    A(this, "ancestors");
    A(this, "refractCache");
    this.indirections = s, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new mf(...i), this.refractCache = o;
  }
  toBaseURI(e) {
    return _e(this.reference.uri, kn(fe(e)));
  }
  async toReference(e) {
    if (this.reference.depth >= this.options.resolve.maxDepth)
      throw new KT(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    const r = this.toBaseURI(e), {
      refSet: n
    } = this.reference;
    if (n.has(r))
      return n.find(AS(r, "uri"));
    const s = await T_(st(r), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: "text/plain"
      }
    }), i = new Pt({
      uri: r,
      value: q(s),
      depth: this.reference.depth + 1
    });
    if (n.add(i), this.options.dereference.immutable) {
      const o = new Pt({
        uri: `immutable://${r}`,
        value: s,
        depth: this.reference.depth + 1
      });
      n.add(o);
    }
    return i;
  }
  toAncestorLineage(e) {
    const r = new Set(e.filter(be));
    return [new mf(...this.ancestors, r), r];
  }
  async ReferenceElement(e, r, n, s, i, o) {
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), u = this.toBaseURI(T(e.$ref)), f = fe(this.reference.uri) === u, l = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && l)
      return !1;
    const d = await this.toReference(T(e.$ref)), h = _e(u, T(e.$ref));
    this.indirections.push(e);
    const v = Ze(h);
    let p = it(v, d.value.result);
    if (p.id = Ce.identify(p), cr(p)) {
      const w = T(e.meta.get("referenced-element")), O = `${w}-${T(Ce.identify(p))}`;
      this.refractCache.has(O) ? p = this.refractCache.get(O) : de(p) ? (p = er.refract(p), p.setMetaProperty("referenced-element", w), this.refractCache.set(O, p)) : (p = this.namespace.getElementClass(w).refract(p), this.refractCache.set(O, p));
    }
    if (e === p)
      throw new ye("Recursive Reference Object detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(p)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var y, g;
        const w = new E.RefElement(p.id, {
          type: "reference",
          uri: d.uri,
          $ref: T(e.$ref)
        }), j = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)(w);
        return o.replaceWith(j, dt), n ? !1 : j;
      }
    }
    const m = fe(d.refSet.rootRef.uri) !== d.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
    if ((l || m || Or(p) || b) && !a.includesCycle(p)) {
      c.add(e);
      const w = new Fr({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      p = await bf(p, w, {
        keyMap: vt,
        nodeTypeGetter: ot
      }), c.delete(e);
    }
    this.indirections.pop();
    const x = Ve(p);
    return x.setMetaProperty("id", Ce.generateId()), x.setMetaProperty("ref-fields", {
      $ref: T(e.$ref),
      // @ts-ignore
      description: T(e.description),
      // @ts-ignore
      summary: T(e.summary)
    }), x.setMetaProperty("ref-origin", d.uri), x.setMetaProperty("ref-referencing-element-id", q(Ce.identify(e))), le(p) && le(x) && (e.hasKey("description") && "description" in p && (x.remove("description"), x.set("description", e.get("description"))), e.hasKey("summary") && "summary" in p && (x.remove("summary"), x.set("summary", e.get("summary")))), o.replaceWith(x, dt), n ? !1 : x;
  }
  async PathItemElement(e, r, n, s, i, o) {
    if (!z(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), u = this.toBaseURI(T(e.$ref)), f = fe(this.reference.uri) === u, l = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && l)
      return;
    const d = await this.toReference(T(e.$ref)), h = _e(u, T(e.$ref));
    this.indirections.push(e);
    const v = Ze(h);
    let p = it(v, d.value.result);
    if (p.id = Ce.identify(p), cr(p)) {
      const x = `path-item-${T(Ce.identify(p))}`;
      this.refractCache.has(x) ? p = this.refractCache.get(x) : (p = Kt.refract(p), this.refractCache.set(x, p));
    }
    if (e === p)
      throw new ye("Recursive Path Item Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(p)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var y, g;
        const x = new E.RefElement(p.id, {
          type: "path-item",
          uri: d.uri,
          $ref: T(e.$ref)
        }), O = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)(x);
        return o.replaceWith(O, dt), n ? !1 : O;
      }
    }
    const m = fe(d.refSet.rootRef.uri) !== d.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
    if ((l || m || hr(p) && z(p.$ref) || b) && !a.includesCycle(p)) {
      c.add(e);
      const x = new Fr({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      p = await bf(p, x, {
        keyMap: vt,
        nodeTypeGetter: ot
      }), c.delete(e);
    }
    if (this.indirections.pop(), hr(p)) {
      const x = new Kt([...p.content], q(p.meta), q(p.attributes));
      x.setMetaProperty("id", Ce.generateId()), e.forEach((w, O, j) => {
        x.remove(T(O)), x.content.push(j);
      }), x.remove("$ref"), x.setMetaProperty("ref-fields", {
        $ref: T(e.$ref)
      }), x.setMetaProperty("ref-origin", d.uri), x.setMetaProperty("ref-referencing-element-id", q(Ce.identify(e))), p = x;
    }
    return o.replaceWith(p, dt), n ? void 0 : p;
  }
  async LinkElement(e, r, n, s, i, o) {
    if (!z(e.operationRef) && !z(e.operationId))
      return;
    if (z(e.operationRef) && z(e.operationId))
      throw new ye("LinkElement operationRef and operationId fields are mutually exclusive.");
    let a;
    if (z(e.operationRef)) {
      var c;
      const f = Ze(T(e.operationRef)), l = this.toBaseURI(T(e.operationRef)), d = fe(this.reference.uri) === l, h = !d;
      if (!this.options.resolve.internal && d || !this.options.resolve.external && h)
        return;
      const v = await this.toReference(T(e.operationRef));
      if (a = it(f, v.value.result), cr(a)) {
        const y = `operation-${T(Ce.identify(a))}`;
        this.refractCache.has(y) ? a = this.refractCache.get(y) : (a = hs.refract(a), this.refractCache.set(y, a));
      }
      a = Ve(a), a.setMetaProperty("ref-origin", v.uri);
      const p = Ve(e);
      return (c = p.operationRef) === null || c === void 0 || c.meta.set("operation", a), o.replaceWith(p, dt), n ? void 0 : p;
    }
    if (z(e.operationId)) {
      var u;
      const f = T(e.operationId), l = await this.toReference(st(this.reference.uri));
      if (a = dO((h) => OE(h) && be(h.operationId) && h.operationId.equals(f), l.value.result), Yt(a))
        throw new ye(`OperationElement(operationId=${f}) not found.`);
      const d = Ve(e);
      return (u = d.operationId) === null || u === void 0 || u.meta.set("operation", a), o.replaceWith(d, dt), n ? void 0 : d;
    }
  }
  async ExampleElement(e, r, n, s, i, o) {
    if (!z(e.externalValue))
      return;
    if (e.hasKey("value") && z(e.externalValue))
      throw new ye("ExampleElement value and externalValue fields are mutually exclusive.");
    const a = this.toBaseURI(T(e.externalValue)), c = fe(this.reference.uri) === a, u = !c;
    if (!this.options.resolve.internal && c || !this.options.resolve.external && u)
      return;
    const f = await this.toReference(T(e.externalValue)), l = Ve(f.value.result);
    l.setMetaProperty("ref-origin", f.uri);
    const d = Ve(e);
    return d.value = l, o.replaceWith(d, dt), n ? void 0 : d;
  }
  async SchemaElement(e, r, n, s, i, o) {
    if (!z(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]);
    let u = await this.toReference(st(this.reference.uri)), {
      uri: f
    } = u;
    const l = RE(f, e), d = fe(l), h = new En({
      uri: d
    }), v = AP((j) => j.canRead(h), this.options.resolve.resolvers), p = !v;
    let y = fe(this.reference.uri) === l, g = !y;
    this.indirections.push(e);
    let m;
    try {
      if (v || p) {
        f = this.toBaseURI(l);
        const j = l, C = Ne(u.value.result);
        if (m = Xo(j, C), m = Ne(m), m.id = Ce.identify(m), !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
      } else {
        if (f = this.toBaseURI(l), y = fe(this.reference.uri) === f, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
        u = await this.toReference(st(l));
        const j = Ze(l), C = Ne(u.value.result);
        m = it(j, C), m = Ne(m), m.id = Ce.identify(m);
      }
    } catch (j) {
      if (p && j instanceof kp)
        if (Yo(Hr(l))) {
          if (y = fe(this.reference.uri) === f, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          u = await this.toReference(st(l));
          const C = Hr(l), _ = Ne(u.value.result);
          m = id(C, _), m = Ne(m), m.id = Ce.identify(m);
        } else {
          if (f = this.toBaseURI(l), y = fe(this.reference.uri) === f, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          u = await this.toReference(st(l));
          const C = Ze(l), _ = Ne(u.value.result);
          m = it(C, _), m = Ne(m), m.id = Ce.identify(m);
        }
      else
        throw j;
    }
    if (e === m)
      throw new ye("Recursive Schema Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(m)) {
      if (u.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new ye("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var b, x;
        const j = new E.RefElement(m.id, {
          type: "json-schema",
          uri: u.uri,
          $ref: T(e.$ref)
        }), _ = ((b = (x = this.options.dereference.strategyOpts["openapi-3-1"]) === null || x === void 0 ? void 0 : x.circularReplacer) !== null && b !== void 0 ? b : this.options.dereference.circularReplacer)(j);
        return o.replaceWith(_, dt), n ? !1 : _;
      }
    }
    const w = fe(u.refSet.rootRef.uri) !== u.uri, O = ["error", "replace"].includes(this.options.dereference.circular);
    if ((g || w || zt(m) && z(m.$ref) || O) && !a.includesCycle(m)) {
      c.add(e);
      const j = new Fr({
        reference: u,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      m = await bf(m, j, {
        keyMap: vt,
        nodeTypeGetter: ot
      }), c.delete(e);
    }
    if (this.indirections.pop(), sd(m)) {
      const j = q(m);
      return j.setMetaProperty("id", Ce.generateId()), j.setMetaProperty("ref-fields", {
        $ref: T(e.$ref)
      }), j.setMetaProperty("ref-origin", u.uri), j.setMetaProperty("ref-referencing-element-id", q(Ce.identify(e))), o.replaceWith(j, dt), n ? !1 : j;
    }
    if (zt(m)) {
      const j = new Sr([...m.content], q(m.meta), q(m.attributes));
      j.setMetaProperty("id", Ce.generateId()), e.forEach((C, _, N) => {
        j.remove(T(_)), j.content.push(N);
      }), j.remove("$ref"), j.setMetaProperty("ref-fields", {
        $ref: T(e.$ref)
      }), j.setMetaProperty("ref-origin", u.uri), j.setMetaProperty("ref-referencing-element-id", q(Ce.identify(e))), m = j;
    }
    return o.replaceWith(m, dt), n ? void 0 : m;
  }
}
const fN = Ee[Symbol.for("nodejs.util.promisify.custom")];
class hN extends UT {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canDereference(e) {
    var r;
    return e.mediaType !== "text/plain" ? Ur.includes(e.mediaType) : SE((r = e.parseResult) === null || r === void 0 ? void 0 : r.result);
  }
  async dereference(e, r) {
    var n;
    const s = Lt(nd), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new Vr(), o = new Vr();
    let a = i, c;
    i.has(e.uri) ? c = i.find(AS(e.uri, "uri")) : (c = new Pt({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((l) => new Pt({
      ...l,
      value: q(l.value)
    })).forEach((l) => o.add(l)), c = o.find((l) => l.uri === e.uri), a = o);
    const u = new Fr({
      reference: c,
      namespace: s,
      options: r
    }), f = await fN(a.rootRef.value, u, {
      keyMap: vt,
      nodeTypeGetter: ot
    });
    return r.dereference.immutable && o.refs.filter((l) => l.uri.startsWith("immutable://")).map((l) => new Pt({
      ...l,
      uri: l.uri.replace(/^immutable:\/\//, "")
    })).forEach((l) => i.add(l)), r.dereference.refSet === null && i.clean(), o.clean(), f;
  }
}
const pN = (t) => t.slice(2), nt = (t) => {
  const e = pN(t);
  return e.reduce((r, n, s) => {
    if (ft(n)) {
      const i = String(T(n.key));
      r.push(i);
    } else if (Ue(e[s - 2])) {
      const i = e[s - 2].content.indexOf(n);
      r.push(i);
    }
    return r;
  }, []);
};
class dN {
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
              const u = this.modelPropertyMacro(T(o));
              o.set("default", u);
            } catch (u) {
              var a, c;
              const f = new Error(u, {
                cause: u
              });
              f.fullPath = [...nt([...i, n, e]), "properties"], (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, f);
            }
        });
      }
    });
    this.modelPropertyMacro = e, this.options = r;
  }
}
class mN {
  constructor({
    options: e
  }) {
    A(this, "options");
    A(this, "SchemaElement", {
      leave(e, r, n, s, i) {
        if (typeof e.allOf > "u") return;
        if (!Ue(e.allOf)) {
          var o, a;
          const l = new TypeError("allOf must be an array");
          l.fullPath = [...nt([...i, n, e]), "allOf"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, l);
          return;
        }
        if (e.allOf.isEmpty) {
          e.remove("allOf");
          return;
        }
        if (!e.allOf.content.every(zt)) {
          var u, f;
          const l = new TypeError("Elements in allOf must be objects");
          l.fullPath = [...nt([...i, n, e]), "allOf"], (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (f = u.push) === null || f === void 0 || f.call(u, l);
          return;
        }
        for (; e.hasKey("allOf"); ) {
          const {
            allOf: l
          } = e;
          e.remove("allOf");
          const d = yt.all([...l.content, e]);
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
var sr;
class vN {
  constructor({
    parameterMacro: e,
    options: r
  }) {
    A(this, "parameterMacro");
    A(this, "options");
    ud(this, sr);
    A(this, "OperationElement", {
      enter: (e) => {
        ra(this, sr, e);
      },
      leave: () => {
        ra(this, sr, void 0);
      }
    });
    A(this, "ParameterElement", {
      leave: (e, r, n, s, i) => {
        const o = ta(this, sr) ? T(ta(this, sr)) : null, a = T(e);
        try {
          const f = this.parameterMacro(o, a);
          e.set("default", f);
        } catch (f) {
          var c, u;
          const l = new Error(f, {
            cause: f
          });
          l.fullPath = nt([...i, n]), (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, l);
        }
      }
    });
    this.parameterMacro = e, this.options = r;
  }
}
sr = new WeakMap();
const Es = (t) => {
  if (t.cause == null) return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
};
class yN extends at {
}
const {
  wrapError: xf
} = Dp, Sf = Ee[Symbol.for("nodejs.util.promisify.custom")], Qe = new Fp(), tr = (t, e, r, n) => {
  ft(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class dn extends Fr {
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
      const [v, p] = this.toAncestorLineage([...o, s]), y = this.toBaseURI(T(r.$ref)), g = fe(this.reference.uri) === y, m = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && m)
        return !1;
      const b = await this.toReference(T(r.$ref)), x = _e(y, T(r.$ref));
      this.indirections.push(r);
      const w = Ze(x);
      let O = it(w, b.value.result);
      if (O.id = Qe.identify(O), cr(O)) {
        const N = T(r.meta.get("referenced-element")), S = `${N}-${T(Qe.identify(O))}`;
        this.refractCache.has(S) ? O = this.refractCache.get(S) : de(O) ? (O = er.refract(O), O.setMetaProperty("referenced-element", N), this.refractCache.set(S, O)) : (O = this.namespace.getElementClass(N).refract(O), this.refractCache.set(S, O));
      }
      if (r === O)
        throw new ye("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (v.includes(O)) {
        if (b.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, u;
          const N = new E.RefElement(O.id, {
            type: "reference",
            uri: b.uri,
            $ref: T(r.$ref),
            baseURI: x,
            referencingElement: r
          }), R = ((c = (u = this.options.dereference.strategyOpts["openapi-3-1"]) === null || u === void 0 ? void 0 : u.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(N);
          return a.replaceWith(N, tr), s ? !1 : R;
        }
      }
      const j = fe(b.refSet.rootRef.uri) !== b.uri, C = ["error", "replace"].includes(this.options.dereference.circular);
      if ((m || j || Or(O) || C) && !v.includesCycle(O)) {
        var f;
        p.add(r);
        const N = new dn({
          reference: b,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: v,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...nt([...o, s, r]), "$ref"]
        });
        O = await Sf(O, N, {
          keyMap: vt,
          nodeTypeGetter: ot
        }), p.delete(r);
      }
      this.indirections.pop();
      const _ = Ve(O);
      if (_.setMetaProperty("ref-fields", {
        $ref: T(r.$ref),
        description: T(r.description),
        summary: T(r.summary)
      }), _.setMetaProperty("ref-origin", b.uri), _.setMetaProperty("ref-referencing-element-id", q(Qe.identify(r))), le(O) && (r.hasKey("description") && "description" in O && (_.remove("description"), _.set("description", r.get("description"))), r.hasKey("summary") && "summary" in O && (_.remove("summary"), _.set("summary", r.get("summary")))), this.allowMetaPatches && le(_) && !_.hasKey("$$ref")) {
        const N = _e(y, x);
        _.set("$$ref", N);
      }
      return a.replaceWith(_, tr), s ? !1 : _;
    } catch (v) {
      var l, d, h;
      const p = Es(v), y = xf(p, {
        baseDoc: this.reference.uri,
        $ref: T(r.$ref),
        pointer: Ze(T(r.$ref)),
        fullPath: (l = this.basePath) !== null && l !== void 0 ? l : [...nt([...o, s, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (h = d.push) === null || h === void 0 || h.call(d, y);
      return;
    }
  }
  async PathItemElement(r, n, s, i, o, a) {
    try {
      if (!z(r.$ref))
        return;
      if (this.indirections.includes(r) || mo(["cycle"], r.$ref))
        return !1;
      const [v, p] = this.toAncestorLineage([...o, s]), y = this.toBaseURI(T(r.$ref)), g = fe(this.reference.uri) === y, m = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && m)
        return;
      const b = await this.toReference(T(r.$ref)), x = _e(y, T(r.$ref));
      this.indirections.push(r);
      const w = Ze(x);
      let O = it(w, b.value.result);
      if (O.id = Qe.identify(O), cr(O)) {
        const _ = `path-item-${T(Qe.identify(O))}`;
        this.refractCache.has(_) ? O = this.refractCache.get(_) : (O = Kt.refract(O), this.refractCache.set(_, O));
      }
      if (r === O)
        throw new ye("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (v.includes(O)) {
        if (b.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, u;
          const _ = new E.RefElement(O.id, {
            type: "path-item",
            uri: b.uri,
            $ref: T(r.$ref),
            baseURI: x,
            referencingElement: r
          }), S = ((c = (u = this.options.dereference.strategyOpts["openapi-3-1"]) === null || u === void 0 ? void 0 : u.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(_);
          return a.replaceWith(_, tr), s ? !1 : S;
        }
      }
      const j = fe(b.refSet.rootRef.uri) !== b.uri, C = ["error", "replace"].includes(this.options.dereference.circular);
      if ((m || j || hr(O) && z(O.$ref) || C) && !v.includesCycle(O)) {
        var f;
        p.add(r);
        const _ = new dn({
          reference: b,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: v,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...nt([...o, s, r]), "$ref"]
        });
        O = await Sf(O, _, {
          keyMap: vt,
          nodeTypeGetter: ot
        }), p.delete(r);
      }
      if (this.indirections.pop(), hr(O)) {
        const _ = new Kt([...O.content], q(O.meta), q(O.attributes));
        if (r.forEach((N, S, R) => {
          _.remove(T(S)), _.content.push(R);
        }), _.remove("$ref"), _.setMetaProperty("ref-fields", {
          $ref: T(r.$ref)
        }), _.setMetaProperty("ref-origin", b.uri), _.setMetaProperty("ref-referencing-element-id", q(Qe.identify(r))), this.allowMetaPatches && typeof _.get("$$ref") > "u") {
          const N = _e(y, x);
          _.set("$$ref", N);
        }
        O = _;
      }
      return a.replaceWith(O, tr), s ? void 0 : O;
    } catch (v) {
      var l, d, h;
      const p = Es(v), y = xf(p, {
        baseDoc: this.reference.uri,
        $ref: T(r.$ref),
        pointer: Ze(T(r.$ref)),
        fullPath: (l = this.basePath) !== null && l !== void 0 ? l : [...nt([...o, s, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (h = d.push) === null || h === void 0 || h.call(d, y);
      return;
    }
  }
  async SchemaElement(r, n, s, i, o, a) {
    try {
      if (!z(r.$ref))
        return;
      if (this.indirections.includes(r))
        return !1;
      const [v, p] = this.toAncestorLineage([...o, s]);
      let y = await this.toReference(st(this.reference.uri)), {
        uri: g
      } = y;
      const m = RE(g, r), b = fe(m), x = new En({
        uri: b
      }), w = !this.options.resolve.resolvers.some((R) => R.canRead(x)), O = !w;
      let j = fe(this.reference.uri) === m, C = !j;
      this.indirections.push(r);
      let _;
      try {
        if (w || O) {
          g = this.toBaseURI(m);
          const R = m, I = Ne(y.value.result);
          if (_ = Xo(R, I), _ = Ne(_), _.id = Qe.identify(_), !this.options.resolve.internal && j || !this.options.resolve.external && C)
            return;
        } else {
          if (g = this.toBaseURI(m), j = fe(this.reference.uri) === g, C = !j, !this.options.resolve.internal && j || !this.options.resolve.external && C)
            return;
          y = await this.toReference(st(m));
          const R = Ze(m), I = Ne(y.value.result);
          _ = it(R, I), _ = Ne(_), _.id = Qe.identify(_);
        }
      } catch (R) {
        if (O && R instanceof kp)
          if (Yo(Hr(m))) {
            if (j = fe(this.reference.uri) === g, C = !j, !this.options.resolve.internal && j || !this.options.resolve.external && C)
              return;
            y = await this.toReference(st(m));
            const I = Hr(m), L = Ne(y.value.result);
            _ = id(I, L), _ = Ne(_), _.id = Qe.identify(_);
          } else {
            if (g = this.toBaseURI(T(m)), j = fe(this.reference.uri) === g, C = !j, !this.options.resolve.internal && j || !this.options.resolve.external && C)
              return;
            y = await this.toReference(st(m));
            const I = Ze(m), L = Ne(y.value.result);
            _ = it(I, L), _ = Ne(_), _.id = Qe.identify(_);
          }
        else
          throw R;
      }
      if (r === _)
        throw new ye("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new $r(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (v.includes(_)) {
        if (y.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new ye("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, u;
          const R = new E.RefElement(_.id, {
            type: "json-schema",
            uri: y.uri,
            $ref: T(r.$ref),
            baseURI: _e(g, m),
            referencingElement: r
          }), L = ((c = (u = this.options.dereference.strategyOpts["openapi-3-1"]) === null || u === void 0 ? void 0 : u.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(R);
          return a.replaceWith(L, tr), s ? !1 : L;
        }
      }
      const N = fe(y.refSet.rootRef.uri) !== y.uri, S = ["error", "replace"].includes(this.options.dereference.circular);
      if ((C || N || zt(_) && z(_.$ref) || S) && !v.includesCycle(_)) {
        var f;
        p.add(r);
        const R = new dn({
          reference: y,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: v,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...nt([...o, s, r]), "$ref"]
        });
        _ = await Sf(_, R, {
          keyMap: vt,
          nodeTypeGetter: ot
        }), p.delete(r);
      }
      if (this.indirections.pop(), sd(_)) {
        const R = q(_);
        return R.setMetaProperty("ref-fields", {
          $ref: T(r.$ref)
        }), R.setMetaProperty("ref-origin", y.uri), R.setMetaProperty("ref-referencing-element-id", q(Qe.identify(r))), a.replaceWith(R, tr), s ? !1 : R;
      }
      if (zt(_)) {
        const R = new Sr([..._.content], q(_.meta), q(_.attributes));
        if (r.forEach((I, L, G) => {
          R.remove(T(L)), R.content.push(G);
        }), R.remove("$ref"), R.setMetaProperty("ref-fields", {
          $ref: T(r.$ref)
        }), R.setMetaProperty("ref-origin", y.uri), R.setMetaProperty("ref-referencing-element-id", q(Qe.identify(r))), this.allowMetaPatches && typeof R.get("$$ref") > "u") {
          const I = _e(g, m);
          R.set("$$ref", I);
        }
        _ = R;
      }
      return a.replaceWith(_, tr), s ? void 0 : _;
    } catch (v) {
      var l, d, h;
      const p = Es(v), y = new yN(`Could not resolve reference: ${p.message}`, {
        baseDoc: this.reference.uri,
        $ref: T(r.$ref),
        fullPath: (l = this.basePath) !== null && l !== void 0 ? l : [...nt([...o, s, r]), "$ref"],
        cause: p
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (h = d.push) === null || h === void 0 || h.call(d, y);
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
      const d = Es(l), h = xf(d, {
        baseDoc: this.reference.uri,
        externalValue: T(r.externalValue),
        fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...nt([...o, s, r]), "externalValue"]
      });
      (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (f = u.push) === null || f === void 0 || f.call(u, h);
      return;
    }
  }
}
const gN = yo[Symbol.for("nodejs.util.promisify.custom")];
class bN {
  constructor({
    parameterMacro: e,
    modelPropertyMacro: r,
    mode: n,
    options: s,
    ...i
  }) {
    const o = [];
    o.push(new dn({
      ...i,
      options: s
    })), typeof r == "function" && o.push(new dN({
      modelPropertyMacro: r,
      options: s
    })), n !== "strict" && o.push(new mN({
      options: s
    })), typeof e == "function" && o.push(new vN({
      parameterMacro: e,
      options: s
    }));
    const a = gN(o, {
      nodeTypeGetter: ot
    });
    Object.assign(this, a);
  }
}
const xN = Ee[Symbol.for("nodejs.util.promisify.custom")];
class TE extends hN {
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
    const i = Lt(nd), o = (s = n.dereference.refSet) !== null && s !== void 0 ? s : new Vr(), a = new Vr();
    let c = o, u;
    o.has(r.uri) ? u = o.find((d) => d.uri === r.uri) : (u = new Pt({
      uri: r.uri,
      value: r.parseResult
    }), o.add(u)), n.dereference.immutable && (o.refs.map((d) => new Pt({
      ...d,
      value: q(d.value)
    })).forEach((d) => a.add(d)), u = a.find((d) => d.uri === r.uri), c = a);
    const f = new bN({
      reference: u,
      namespace: i,
      options: n,
      allowMetaPatches: this.allowMetaPatches,
      ancestors: this.ancestors,
      modelPropertyMacro: this.modelPropertyMacro,
      mode: this.mode,
      parameterMacro: this.parameterMacro
    }), l = await xN(c.rootRef.value, f, {
      keyMap: vt,
      nodeTypeGetter: ot
    });
    return n.dereference.immutable && a.refs.filter((d) => d.uri.startsWith("immutable://")).map((d) => new Pt({
      ...d,
      uri: d.uri.replace(/^immutable:\/\//, "")
    })).forEach((d) => o.add(d)), n.dereference.refSet === null && o.clean(), a.clean(), l;
  }
}
const SN = (t) => {
  const e = T(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
  return new E.ObjectElement({
    $ref: e
  }, q(r.meta), q(r.attributes));
}, Qo = async (t) => {
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
      cache: v
    } = Qo, p = h.find((G) => G.match(e)), y = so(Js()) ? Js() : Rs, g = Nh(t), m = _e(y, g);
    let b;
    v.has(e) ? b = v.get(e) : (b = Zt.refract(e), b.classes.push("result"), v.set(e, b));
    const x = new ct([b]), w = BO(o), O = w === "" ? "" : `#${w}`, j = it(w, b), C = new Pt({
      uri: m,
      value: x
    }), _ = new Vr({
      refs: [C]
    });
    w !== "" && (_.rootRef = void 0);
    const N = [/* @__PURE__ */ new Set([j])], S = [], R = await zT(j, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${m}${O}`,
        resolvers: [new wE({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [new oN()]
      },
      parse: {
        mediaType: Ur.latest(),
        parsers: [new PE({
          allowEmpty: !1,
          sourceMap: !1
        }), new _E({
          allowEmpty: !1,
          sourceMap: !1
        }), new AE({
          allowEmpty: !1,
          sourceMap: !1
        }), new jE({
          allowEmpty: !1,
          sourceMap: !1
        }), new iN({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [new TE({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: f,
          modelPropertyMacro: l,
          mode: d,
          ancestors: N
        })],
        refSet: _,
        dereferenceOpts: {
          errors: S
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? kS.dereference.circularReplacer : SN
      }
    }), I = IT(j, R, b), L = u ? I : p.normalize(I);
    return {
      spec: T(L),
      errors: S
    };
  } catch (v) {
    if (v instanceof Uf || v instanceof un)
      return {
        spec: e,
        errors: []
      };
    throw v;
  }
};
Qo.cache = /* @__PURE__ */ new WeakMap();
const jb = (t) => {
  if (!le(t)) return t;
  const e = [pM({
    operationIdNormalizer: (n, s, i) => Vn({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), uM(), lM(), dM(), mM()];
  return Et(t, e, {
    toolboxCreator: EE,
    visitorOptions: {
      keyMap: vt,
      nodeTypeGetter: ot
    }
  });
}, ON = (t) => (e) => {
  const r = Zt.refract(e);
  r.classes.push("result");
  const n = t(r), s = T(n);
  return Qo.cache.set(s, n), T(n);
}, EN = {
  name: "openapi-3-1-apidom",
  match(t) {
    return Bp(t);
  },
  normalize(t) {
    if (!be(t) && Rt(t) && !t.$$normalized) {
      const e = ON(jb)(t);
      return e.$$normalized = !0, e;
    }
    return be(t) ? jb(t) : t;
  },
  async resolve(t) {
    return Qo(t);
  }
};
function CE(t, e, r) {
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
function wN(t, e) {
  return CE(t, e, !0) || null;
}
function $E(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function AN(t, e) {
  return !t || !t.paths ? null : wN(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = Vn(s, r, n), a = $E(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: jN
} = w_, PN = () => null, _N = (t) => Array.isArray(t) ? t : [t], Pb = {
  mapTagOperations: CN,
  makeExecute: RN
};
function RN(t = {}) {
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
function TN(t = {}) {
  const e = Pb.makeExecute(t);
  return {
    apis: Pb.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function CN({
  spec: t,
  cb: e = PN,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return CE(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? _N(c.tags) : [r]).forEach((f) => {
      if (typeof f != "string")
        return;
      i[f] = i[f] || {};
      const l = i[f], d = Vn(c, o, a, {
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
        const v = s[d] || 1;
        s[d] = v + 1, l[`${d}${s[d]}`] = h;
        const p = l[d];
        delete l[d], l[`${d}${v}`] = p;
      } else
        l[d] = h;
    });
  }), i;
}
function $N() {
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
const Er = function() {
  const e = Z, r = pt, n = this, s = "parser.js: Parser(): ", i = function() {
    this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
      this.state = e.ACTIVE, this.phraseLength = 0;
    };
  };
  n.ast = void 0, n.stats = void 0, n.trace = void 0, n.callbacks = [];
  let o = 0, a = 0, c = 0, u = 0, f = 0, l, d, h, v, p = new i(), y, g, m;
  const b = () => {
    o = 0, a = 0, c = 0, u = 0, f = 0, l = void 0, d = void 0, h = void 0, v = void 0, p.refresh(), y = void 0, g = void 0, m = void 0;
  }, x = () => {
    const V = `${s}initializeCallbacks(): `;
    let $;
    for (y = [], g = [], $ = 0; $ < l.length; $ += 1)
      y[$] = void 0;
    for ($ = 0; $ < d.length; $ += 1)
      g[$] = void 0;
    let K;
    const U = [];
    for ($ = 0; $ < l.length; $ += 1)
      U.push(l[$].lower);
    for ($ = 0; $ < d.length; $ += 1)
      U.push(d[$].lower);
    for (const H in n.callbacks)
      if (n.callbacks.hasOwnProperty(H)) {
        if ($ = U.indexOf(H.toLowerCase()), $ < 0)
          throw new Error(`${V}syntax callback '${H}' not a rule or udt name`);
        if (K = n.callbacks[H] ? n.callbacks[H] : void 0, typeof K == "function" || K === void 0)
          $ < l.length ? y[$] = K : g[$ - l.length] = K;
        else
          throw new Error(`${V}syntax callback[${H}] must be function reference or falsy)`);
      }
  };
  n.parse = (V, $, K, U) => {
    const H = `${s}parse(): `;
    b(), v = r.stringToChars(K), l = V.rules, d = V.udts;
    const re = $.toLowerCase();
    let ne;
    for (const wr in l)
      if (l.hasOwnProperty(wr) && re === l[wr].lower) {
        ne = l[wr].index;
        break;
      }
    if (ne === void 0)
      throw new Error(`${H}start rule name '${startRule}' not recognized`);
    x(), n.trace && n.trace.init(l, d, v), n.stats && n.stats.init(l, d), n.ast && n.ast.init(l, d, v), m = U, h = [
      {
        type: e.RNM,
        index: ne
      }
    ], ae(0, 0), h = void 0;
    let Te = !1;
    switch (p.state) {
      case e.ACTIVE:
        throw new Error(`${H}final state should never be 'ACTIVE'`);
      case e.NOMATCH:
        Te = !1;
        break;
      case e.EMPTY:
      case e.MATCH:
        p.phraseLength === v.length ? Te = !0 : Te = !1;
        break;
      default:
        throw new Error("unrecognized state");
    }
    return {
      success: Te,
      state: p.state,
      stateName: e.idName(p.state),
      length: v.length,
      matched: p.phraseLength,
      maxMatched: f,
      maxTreeDepth: c,
      nodeHits: u
    };
  };
  const w = (V, $) => {
    const K = h[V];
    for (let U = 0; U < K.children.length && (ae(K.children[U], $), p.state === e.NOMATCH); U += 1)
      ;
  }, O = (V, $) => {
    let K, U, H, re;
    const ne = h[V];
    n.ast && (U = n.ast.getLength()), K = !0, H = $, re = 0;
    for (let Te = 0; Te < ne.children.length; Te += 1)
      if (ae(ne.children[Te], H), p.state === e.NOMATCH) {
        K = !1;
        break;
      } else
        H += p.phraseLength, re += p.phraseLength;
    K ? (p.state = re === 0 ? e.EMPTY : e.MATCH, p.phraseLength = re) : (p.state = e.NOMATCH, p.phraseLength = 0, n.ast && n.ast.setLength(U));
  }, j = (V, $) => {
    let K, U, H, re;
    const ne = h[V];
    if (ne.max === 0) {
      p.state = e.EMPTY, p.phraseLength = 0;
      return;
    }
    for (U = $, H = 0, re = 0, n.ast && (K = n.ast.getLength()); !(U >= v.length || (ae(V + 1, U), p.state === e.NOMATCH) || p.state === e.EMPTY || (re += 1, H += p.phraseLength, U += p.phraseLength, re === ne.max)); )
      ;
    p.state === e.EMPTY || re >= ne.min ? (p.state = H === 0 ? e.EMPTY : e.MATCH, p.phraseLength = H) : (p.state = e.NOMATCH, p.phraseLength = 0, n.ast && n.ast.setLength(K));
  }, C = (V, $, K, U) => {
    if ($.phraseLength > K) {
      let H = `${s}opRNM(${V.name}): callback function error: `;
      throw H += `sysData.phraseLength: ${$.phraseLength}`, H += ` must be <= remaining chars: ${K}`, new Error(H);
    }
    switch ($.state) {
      case e.ACTIVE:
        if (!U)
          throw new Error(
            `${s}opRNM(${V.name}): callback function return error. ACTIVE state not allowed.`
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
          `${s}opRNM(${V.name}): callback function return error. Unrecognized return state: ${$.state}`
        );
    }
  }, _ = (V, $) => {
    let K, U, H;
    const re = h[V], ne = l[re.index], Te = y[ne.index];
    if (o || (U = n.ast && n.ast.ruleDefined(re.index), U && (K = n.ast.getLength(), n.ast.down(re.index, l[re.index].name))), Te) {
      const wr = v.length - $;
      Te(p, v, $, m), C(ne, p, wr, !0), p.state === e.ACTIVE && (H = h, h = ne.opcodes, ae(0, $), h = H, Te(p, v, $, m), C(ne, p, wr, !1));
    } else
      H = h, h = ne.opcodes, ae(0, $), h = H;
    o || U && (p.state === e.NOMATCH ? n.ast.setLength(K) : n.ast.up(re.index, ne.name, $, p.phraseLength));
  }, N = (V, $) => {
    const K = h[V];
    p.state = e.NOMATCH, $ < v.length && K.min <= v[$] && v[$] <= K.max && (p.state = e.MATCH, p.phraseLength = 1);
  }, S = (V, $) => {
    const K = h[V], U = K.string.length;
    if (p.state = e.NOMATCH, $ + U <= v.length) {
      for (let H = 0; H < U; H += 1)
        if (v[$ + H] !== K.string[H])
          return;
      p.state = e.MATCH, p.phraseLength = U;
    }
  }, R = (V, $) => {
    let K;
    const U = h[V];
    p.state = e.NOMATCH;
    const H = U.string.length;
    if (H === 0) {
      p.state = e.EMPTY;
      return;
    }
    if ($ + H <= v.length) {
      for (let re = 0; re < H; re += 1)
        if (K = v[$ + re], K >= 65 && K <= 90 && (K += 32), K !== U.string[re])
          return;
      p.state = e.MATCH, p.phraseLength = H;
    }
  }, I = (V, $, K) => {
    if ($.phraseLength > K) {
      let U = `${s}opUDT(${V.name}): callback function error: `;
      throw U += `sysData.phraseLength: ${$.phraseLength}`, U += ` must be <= remaining chars: ${K}`, new Error(U);
    }
    switch ($.state) {
      case e.ACTIVE:
        throw new Error(`${s}opUDT(${V.name}) ACTIVE state return not allowed.`);
      case e.EMPTY:
        if (V.empty)
          $.phraseLength = 0;
        else
          throw new Error(`${s}opUDT(${V.name}) may not return EMPTY.`);
        break;
      case e.MATCH:
        if ($.phraseLength === 0)
          if (V.empty)
            $.state = e.EMPTY;
          else
            throw new Error(`${s}opUDT(${V.name}) may not return EMPTY.`);
        break;
      case e.NOMATCH:
        $.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opUDT(${V.name}): callback function return error. Unrecognized return state: ${$.state}`
        );
    }
  }, L = (V, $) => {
    let K, U, H;
    const re = h[V], ne = d[re.index];
    p.UdtIndex = ne.index, o || (H = n.ast && n.ast.udtDefined(re.index), H && (U = l.length + re.index, K = n.ast.getLength(), n.ast.down(U, ne.name)));
    const Te = v.length - $;
    g[re.index](p, v, $, m), I(ne, p, Te), o || H && (p.state === e.NOMATCH ? n.ast.setLength(K) : n.ast.up(U, ne.name, $, p.phraseLength));
  }, G = (V, $) => {
    switch (o += 1, ae(V + 1, $), o -= 1, p.phraseLength = 0, p.state) {
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
  }, ve = (V, $) => {
    switch (o += 1, ae(V + 1, $), o -= 1, p.phraseLength = 0, p.state) {
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
  }, ae = (V, $) => {
    const K = `${s}opExecute(): `, U = h[V];
    switch (u += 1, a > c && (c = a), a += 1, p.refresh(), n.trace && n.trace.down(U, $), U.type) {
      case e.ALT:
        w(V, $);
        break;
      case e.CAT:
        O(V, $);
        break;
      case e.REP:
        j(V, $);
        break;
      case e.RNM:
        _(V, $);
        break;
      case e.TRG:
        N(V, $);
        break;
      case e.TBS:
        S(V, $);
        break;
      case e.TLS:
        R(V, $);
        break;
      case e.UDT:
        L(V, $);
        break;
      case e.AND:
        G(V, $);
        break;
      case e.NOT:
        ve(V, $);
        break;
      default:
        throw new Error(`${K}unrecognized operator`);
    }
    o || $ + p.phraseLength > f && (f = $ + p.phraseLength), n.stats && n.stats.collect(U, p), n.trace && n.trace.up(U, p.state, $, p.phraseLength), a -= 1;
  };
}, IE = function() {
  const e = "parser.js: Ast()): ", r = Z, n = pt, s = this;
  let i, o, a, c = 0;
  const u = [], f = [], l = [];
  s.callbacks = [], s.init = (h, v, p) => {
    f.length = 0, l.length = 0, c = 0, i = h, o = v, a = p;
    let y;
    const g = [];
    for (y = 0; y < i.length; y += 1)
      g.push(i[y].lower);
    for (y = 0; y < o.length; y += 1)
      g.push(o[y].lower);
    for (c = i.length + o.length, y = 0; y < c; y += 1)
      u[y] = void 0;
    for (const m in s.callbacks)
      if (s.callbacks.hasOwnProperty(m)) {
        const b = m.toLowerCase();
        if (y = g.indexOf(b), y < 0)
          throw new Error(`${e}init: node '${m}' not a rule or udt name`);
        u[y] = s.callbacks[m];
      }
  }, s.ruleDefined = (h) => !!u[h], s.udtDefined = (h) => !!u[i.length + h], s.down = (h, v) => {
    const p = l.length;
    return f.push(p), l.push({
      name: v,
      thisIndex: p,
      thatIndex: void 0,
      state: r.SEM_PRE,
      callbackIndex: h,
      phraseIndex: void 0,
      phraseLength: void 0,
      stack: f.length
    }), p;
  }, s.up = (h, v, p, y) => {
    const g = l.length, m = f.pop();
    return l.push({
      name: v,
      thisIndex: g,
      thatIndex: m,
      state: r.SEM_POST,
      callbackIndex: h,
      phraseIndex: p,
      phraseLength: y,
      stack: f.length
    }), l[m].thatIndex = g, l[m].phraseIndex = p, l[m].phraseLength = y, g;
  }, s.translate = (h) => {
    let v, p;
    for (let y = 0; y < l.length; y += 1)
      p = l[y], v = u[p.callbackIndex], v && (p.state === r.SEM_PRE ? v(r.SEM_PRE, a, p.phraseIndex, p.phraseLength, h) : v && v(r.SEM_POST, a, p.phraseIndex, p.phraseLength, h));
  }, s.setLength = (h) => {
    l.length = h, h > 0 ? f.length = l[h - 1].stack : f.length = 0;
  }, s.getLength = () => l.length;
  function d(h) {
    let v = "";
    for (; h-- > 0; )
      v += " ";
    return v;
  }
  s.toXml = () => {
    let h = "", v = 0;
    return h += `<?xml version="1.0" encoding="utf-8"?>
`, h += `<root nodes="${l.length / 2}" characters="${a.length}">
`, h += `<!-- input string -->
`, h += d(v + 2), h += n.charsToString(a), h += `
`, l.forEach((p) => {
      p.state === r.SEM_PRE ? (v += 1, h += d(v), h += `<node name="${p.name}" index="${p.phraseIndex}" length="${p.phraseLength}">
`, h += d(v + 2), h += n.charsToString(a, p.phraseIndex, p.phraseLength), h += `
`) : (h += d(v), h += `</node><!-- name="${p.name}" -->
`, v -= 1);
    }), h += `</root>
`, h;
  };
}, pt = {
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
}, IN = (t, e, r, n, s) => {
  if (t === Z.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-url-template", pt.charsToString(e, r, n)]);
  }
  return Z.SEM_OK;
}, FN = (t, e, r, n, s) => {
  if (t === Z.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable", pt.charsToString(e, r, n)]);
  }
  return Z.SEM_OK;
}, MN = (t, e, r, n, s) => {
  if (t === Z.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable-name", pt.charsToString(e, r, n)]);
  }
  return Z.SEM_OK;
}, kN = (t, e, r, n, s) => {
  if (t === Z.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["literals", pt.charsToString(e, r, n)]);
  }
  return Z.SEM_OK;
}, NN = new $N(), FE = (t) => {
  const e = new Er();
  return e.ast = new IE(), e.ast.callbacks["server-url-template"] = IN, e.ast.callbacks["server-variable"] = FN, e.ast.callbacks["server-variable-name"] = MN, e.ast.callbacks.literals = kN, {
    result: e.parse(NN, "server-url-template", t),
    ast: e.ast
  };
}, DN = (t, {
  strict: e = !1
} = {}) => {
  try {
    const r = FE(t);
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
}, qN = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, LN = (t) => qN(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), VN = ["literals", "server-variable-name"], BN = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: LN
    },
    ...r
  }, i = FE(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => VN.includes(c)).map(([c, u]) => c === "server-variable-name" ? Object.hasOwn(e, u) ? s.encoder(e[u], u) : `{${u}}` : u).join("");
};
function ME() {
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
const UN = (t, e, r, n, s) => (t === Z.SEM_PRE && s.push(["slash", pt.charsToString(e, r, n)]), Z.SEM_OK), JN = (t, e, r, n, s) => {
  if (t === Z.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["path-template", pt.charsToString(e, r, n)]);
  }
  return Z.SEM_OK;
}, HN = (t, e, r, n, s) => (t === Z.SEM_PRE && s.push(["path-literal", pt.charsToString(e, r, n)]), Z.SEM_OK), GN = (t, e, r, n, s) => (t === Z.SEM_PRE && s.push(["template-expression", pt.charsToString(e, r, n)]), Z.SEM_OK), KN = (t, e, r, n, s) => (t === Z.SEM_PRE && s.push(["template-expression-param-name", pt.charsToString(e, r, n)]), Z.SEM_OK), zN = new ME(), WN = (t) => {
  const e = new Er();
  return e.ast = new IE(), e.ast.callbacks["path-template"] = JN, e.ast.callbacks.slash = UN, e.ast.callbacks["path-literal"] = HN, e.ast.callbacks["template-expression"] = GN, e.ast.callbacks["template-expression-param-name"] = KN, {
    result: e.parse(zN, "path-template", t),
    ast: e.ast
  };
}, YN = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, XN = (t) => YN(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), QN = ["slash", "path-literal", "template-expression-param-name"], Ah = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: XN
    },
    ...r
  }, i = WN(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => QN.includes(c)).map(([c, u]) => c === "template-expression-param-name" ? Object.prototype.hasOwnProperty.call(e, u) ? s.encoder(e[u], u) : `{${u}}` : u).join("");
};
new ME();
new Er();
const ZN = {
  body: eD,
  header: rD,
  query: sD,
  path: nD,
  formData: tD
};
function eD({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function tD({
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
function rD({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function nD({
  req: t,
  value: e,
  parameter: r,
  baseURL: n
}) {
  if (e !== void 0) {
    const s = t.url.replace(n, ""), i = Ah(s, {
      [r.name]: e
    });
    t.url = n + i;
  }
}
function sD({
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
function Zo(t, e) {
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
const iD = (t) => {
  if (typeof t != "string" || [...t].length !== 1)
    throw new TypeError("Input must be a single character string.");
  const e = t.codePointAt(0);
  return e <= 127 ? `%${e.toString(16).toUpperCase().padStart(2, "0")}` : encodeURIComponent(t);
}, oD = (t) => t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, ""), ea = (t) => t.length >= 2 && t.startsWith('"') && t.endsWith('"'), kE = (t) => ea(t) ? t.slice(1, -1) : t, NE = (t) => `"${t}"`, DE = (t) => t, aD = new Er(), cD = new Ss(), od = (t, {
  strict: e = !0,
  quoted: r = null
} = {}) => {
  try {
    const n = e ? "cookie-value" : "lenient-cookie-value", s = aD.parse(cD, n, t);
    return typeof r == "boolean" ? s.success && r === ea(t) : s.success;
  } catch {
    return !1;
  }
}, qE = (t) => {
  const r = new TextEncoder().encode(t).reduce((n, s) => n + String.fromCharCode(s), "");
  return btoa(r);
}, uD = (t, e = qE) => {
  const r = String(t);
  if (od(r)) return r;
  const n = ea(r), s = n ? kE(r) : r, i = e(s);
  return n ? NE(i) : i;
}, lD = (t) => oD(qE(t)), fD = (t) => uD(t, lD), hD = new Er(), pD = new Ss(), LE = (t, {
  strict: e = !0
} = {}) => {
  try {
    const r = e ? "cookie-name" : "lenient-cookie-name";
    return hD.parse(pD, r, t).success;
  } catch {
    return !1;
  }
}, dD = (t) => {
  if (!LE(t))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, VE = (t) => {
  if (!od(t))
    throw new TypeError(`Invalid cookie value: ${t}`);
}, _b = {
  encoders: {
    name: DE,
    value: fD
  },
  validators: {
    name: dD,
    value: VE
  }
}, mD = (t, e, r = {}) => {
  const n = {
    ...r,
    encoders: {
      ..._b.encoders,
      ...r.encoders
    },
    validators: {
      ..._b.validators,
      ...r.validators
    }
  }, s = n.encoders.name(t), i = n.encoders.value(e);
  return n.validators.name(s), n.validators.value(i), `${s}=${i}`;
}, vD = (t, e = {}) => (Array.isArray(t) ? t : typeof t == "object" && t !== null ? Object.entries(t) : []).map(([n, s]) => mD(n, s, e)).join("; "), yD = new Er(), gD = new Ss(), bD = (t) => {
  const e = String(t);
  if (od(e)) return e;
  const r = ea(e), n = r ? kE(e) : e;
  let s = "";
  for (const i of n)
    s += yD.parse(gD, "cookie-octet", i).success ? i : iD(i);
  return r ? NE(s) : s;
};
new Er();
new Ss();
const xD = (t) => {
  if (!LE(t, {
    strict: !1
  }))
    throw new TypeError(`Invalid cookie name: ${t}`);
}, SD = "%3D", OD = "%26", ED = (t) => bD(t).replace(/[=&]/gu, (e) => e === "=" ? SD : OD), jh = (t, e = {}) => vD(t, Qi({
  encoders: {
    name: DE,
    value: ED
  },
  validators: {
    name: xD,
    value: VE
  }
}, e));
function wD({
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
    u = Ah(c, {
      [s]: e
    }, {
      encoder: (l) => Fb(Zo(l, f))
    });
  } else
    u = Ah(c, {
      [s]: e
    }, {
      encoder: (f) => Rh({
        key: r.name,
        value: f,
        style: i || "simple",
        explode: o ?? !1,
        escape: "reserved"
      })
    });
  t.url = n + u;
}
function AD({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const n = Object.keys(r.content)[0], s = Zo(e, n);
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
const jD = ["accept", "authorization", "content-type"];
function PD({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(jD.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = Zo(r, n);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = Rh({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function _D({
  req: t,
  parameter: e,
  value: r
}) {
  const {
    name: n
  } = e;
  if (t.headers = t.headers || {}, r !== void 0 && e.content) {
    const i = Object.keys(e.content)[0], o = Zo(r, i);
    t.headers.Cookie = jh({
      [n]: o
    });
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    var s;
    const i = Rh({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: (s = e.explode) !== null && s !== void 0 ? s : !1
    }), o = Array.isArray(r) && e.explode ? `${n}=${i}` : i;
    t.headers.Cookie = jh({
      [n]: o
    });
  }
}
const RD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: _D,
  header: PD,
  path: wD,
  query: AD
}, Symbol.toStringTag, { value: "Module" })), TD = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: BE
} = TD;
function CD(t, e) {
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
  e = $D({
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
    const p = Object.entries(r.responses).filter(([y, g]) => {
      const m = parseInt(y, 10);
      return m >= 200 && m < 300 && Rt(g.content);
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
            var h, v;
            const p = (h = (v = c.content[a]) === null || v === void 0 ? void 0 : v.encoding) !== null && h !== void 0 ? h : {};
            try {
              e.form = {};
              const y = JSON.parse(n);
              Object.entries(y).forEach(([g, m]) => {
                e.form[g] = {
                  value: m,
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
function $D({
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
      const v = d.value || d, {
        type: p
      } = h;
      if (d) {
        if (p === "apiKey")
          h.in === "query" && (i.query[h.name] = v), h.in === "header" && (i.headers[h.name] = v), h.in === "cookie" && (i.cookies[h.name] = v);
        else if (p === "http") {
          if (/^basic$/i.test(h.scheme)) {
            const y = v.username || "", g = v.password || "", m = BE(`${y}:${g}`);
            i.headers.Authorization = `Basic ${m}`;
          }
          /^bearer$/i.test(h.scheme) && (i.headers.Authorization = `Bearer ${v}`);
        } else if (p === "oauth2" || p === "openIdConnect") {
          const y = d.token || {}, g = h["x-tokenName"] || "access_token", m = y[g];
          let b = y.token_type;
          (!b || b.toLowerCase() === "bearer") && (b = "Bearer"), i.headers.Authorization = `${b} ${m}`;
        }
      }
    });
  }), i);
}
function ID(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = FD({
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
function FD({
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
      } = d, v = d.value || d, p = u[l], {
        type: y
      } = p, g = p["x-tokenName"] || "access_token", m = h && h[g];
      let b = h && h.token_type;
      if (d)
        if (y === "apiKey") {
          const x = p.in === "query" ? "query" : "headers";
          s[x] = s[x] || {}, s[x][p.name] = v;
        } else if (y === "basic")
          if (v.header)
            s.headers.authorization = v.header;
          else {
            const x = v.username || "", w = v.password || "";
            v.base64 = BE(`${x}:${w}`), s.headers.authorization = `Basic ${v.base64}`;
          }
        else y === "oauth2" && m && (b = !b || b.toLowerCase() === "bearer" ? "Bearer" : b, s.headers.authorization = `${b} ${m}`);
    });
  }), s);
}
const Rb = (t) => Array.isArray(t) ? t : [], mn = (t, {
  recurse: e = !0,
  depth: r = 1
} = {}) => {
  if (Rt(t)) {
    if (t.type === "object" || t.type === "array" || Array.isArray(t.type) && (t.type.includes("object") || t.type.includes("array")))
      return t;
    if (!(r > $b) && e) {
      const n = Array.isArray(t.oneOf) ? t.oneOf.find((i) => mn(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (n) return n;
      const s = Array.isArray(t.anyOf) ? t.anyOf.find((i) => mn(i, {
        recurse: e,
        depth: r + 1
      })) : void 0;
      if (s) return s;
    }
  }
}, Of = ({
  value: t,
  silentFail: e = !1
}) => {
  try {
    const r = JSON.parse(t);
    if (Rt(r) || Array.isArray(r))
      return r;
    if (!e)
      throw new Error("Expected JSON serialized object or array");
  } catch {
    if (!e)
      throw new Error("Could not parse parameter value string as JSON Object or JSON Array");
  }
  return t;
}, _s = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, Rs), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
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
class MD extends at {
}
const kD = (t, e) => e.filter((r) => r.name === t), ND = (t) => {
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
}, DD = {
  buildRequest: UE
};
function qD({
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
  const u = t || e || Nr;
  s && i && !n && (n = $E(s, i));
  const f = DD.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: u,
    ...c
  });
  return f.body && (Rt(f.body) || Array.isArray(f.body)) && (f.body = JSON.stringify(f.body)), u(f);
}
function UE(t) {
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
    parameters: v,
    parameterBuilders: p,
    baseURL: y
  } = t;
  const g = Up(e);
  p || (g ? p = RD : p = ZN);
  let b = {
    url: "",
    credentials: l && l.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  d && (b.signal = d), i && (b.requestInterceptor = i), o && (b.responseInterceptor = o), c && (b.userFetch = c);
  const x = AN(e, r);
  if (!x)
    throw new MD(`Operation ${r} not found`);
  const {
    operation: w = {},
    method: O,
    pathName: j
  } = x;
  if (y = y ?? JE({
    spec: e,
    scheme: s,
    contextUrl: a,
    server: u,
    serverVariables: f,
    pathName: j,
    method: O,
    serverVariableEncoder: h
  }), b.url += y, !r)
    return delete b.cookies, b;
  b.url += j, b.method = `${O}`.toUpperCase(), v = v || {};
  const C = e.paths[j] || {};
  n && (b.headers.accept = n);
  const _ = ND([].concat(Rb(w.parameters)).concat(Rb(C.parameters)));
  _.forEach((S) => {
    const R = p[S.in];
    let I;
    if (S.in === "body" && S.schema && S.schema.properties && (I = v), I = S && S.name && v[S.name], typeof I > "u" ? I = S && S.name && v[`${S.in}.${S.name}`] : kD(S.name, _).length > 1 && console.warn(`Parameter '${S.name}' is ambiguous because the defined spec has more than one parameter with the name: '${S.name}' and the passed-in parameter values did not define an 'in' value.`), I !== null) {
      if (typeof S.default < "u" && typeof I > "u" && (I = S.default), typeof I > "u" && S.required && !S.allowEmptyValue)
        throw new Error(`Required parameter ${S.name} is not provided`);
      g && typeof I == "string" && (hn("type", S.schema) && typeof S.schema.type == "string" && mn(S.schema, {
        recurse: !1
      }) ? I = Of({
        value: I,
        silentFail: !1
      }) : hn("type", S.schema) && Array.isArray(S.schema.type) && mn(S.schema, {
        recurse: !1
      }) ? I = Of({
        value: I,
        silentFail: !0
      }) : !hn("type", S.schema) && mn(S.schema, {
        recurse: !0
      }) && (I = Of({
        value: I,
        silentFail: !0
      }))), R && R({
        req: b,
        parameter: S,
        value: I,
        operation: w,
        spec: e,
        baseURL: y
      });
    }
  });
  const N = {
    ...t,
    operation: w
  };
  if (g ? b = CD(N, b) : b = ID(N, b), b.cookies && Object.keys(b.cookies).length > 0) {
    const S = jh(b.cookies);
    to(b.headers.Cookie) ? b.headers.Cookie += `; ${S}` : b.headers.Cookie = S;
  }
  return b.cookies && delete b.cookies, Th(b);
}
const Ph = (t) => t ? t.replace(/\W/g, "") : null;
function JE(t) {
  return Up(t.spec) ? LD(t) : BD(t);
}
const Ef = (t) => Array.isArray(t) && t.length > 0;
function LD({
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
  const d = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 || (a = a[(r || "").toLowerCase()]) === null || a === void 0 ? void 0 : a.servers, h = t == null || (c = t.paths) === null || c === void 0 || (c = c[e]) === null || c === void 0 ? void 0 : c.servers, v = t == null ? void 0 : t.servers;
  if (u = Ef(d) ? d : Ef(h) ? h : Ef(v) ? v : [Cb], n && (l = u.find((p) => p.url === n), l && (f = n)), f || ([l] = u, f = l.url), DN(f, {
    strict: !0
  })) {
    const p = Object.entries({
      ...l.variables
    }).reduce((y, [g, m]) => (y[g] = m.default, y), {});
    f = BN(f, {
      ...p,
      ...i
    }, {
      encoder: typeof o == "function" ? o : dp
    });
  }
  return VD(f, s);
}
function VD(t = "", e = "") {
  const r = _s(t && e ? _e(e, t) : t), n = _s(e), s = Ph(r.protocol) || Ph(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function BD({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = _s(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || Ph(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
ie.http = Nr;
ie.makeHttp = T1.bind(null, ie.http);
ie.resolveStrategies = {
  "openapi-3-1-apidom": EN,
  "openapi-3-0": LO,
  "openapi-2-0": qO,
  generic: kO
};
ie.resolve = VO({
  strategies: [ie.resolveStrategies["openapi-3-1-apidom"], ie.resolveStrategies["openapi-3-0"], ie.resolveStrategies["openapi-2-0"], ie.resolveStrategies.generic]
});
ie.resolveSubtree = BC({
  strategies: [ie.resolveStrategies["openapi-3-1-apidom"], ie.resolveStrategies["openapi-3-0"], ie.resolveStrategies["openapi-2-0"], ie.resolveStrategies.generic]
});
ie.execute = qD;
ie.serializeRes = wx;
ie.serializeHeaders = Ex;
ie.clearCache = kC;
ie.makeApisTagOperation = TN;
ie.buildRequest = UE;
ie.helpers = {
  opId: Vn
};
ie.getBaseUrl = JE;
ie.apidom = {
  resolve: {
    resolvers: {
      HTTPResolverSwaggerClient: wE
    }
  },
  parse: {
    parsers: {
      JsonParser: AE,
      YamlParser: jE,
      OpenApiJson3_1Parser: PE,
      OpenApiYaml3_1Parser: _E
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: TE
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
  http: Nr,
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
  if (NO(e) && jN(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (Up(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [Cb]);
  }
};
const {
  helpers: FL
} = ie;
export {
  ie as S
};
