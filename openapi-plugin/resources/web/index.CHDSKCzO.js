import { c as Mr, u as Pr, b as Lr } from "./webapp.dStGtxDE.js";
const hr = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace"
];
function Nr(f) {
  const c = /~/, s = /~[01]/g;
  function a(l) {
    switch (l) {
      case "~1":
        return "/";
      case "~0":
        return "~";
    }
    throw new Error("Invalid tilde escape: " + l);
  }
  function p(l) {
    return c.test(l) ? l.replace(s, a) : l;
  }
  return f.split("/").slice(1).map(p).map(decodeURIComponent);
}
function fr(f, c) {
  let s = f;
  for (const a of c)
    if (typeof s == "object" && s !== null)
      if (Array.isArray(s)) {
        const p = parseInt(a, 10);
        if (isNaN(p))
          return;
        s = s[p];
      } else if (s.hasOwnProperty(a))
        s = s[a];
      else
        return;
    else
      return;
  return s;
}
function br(f, c) {
  return Array.isArray(c) ? fr(f, c) : fr(f, Nr(c));
}
function R(f, c) {
  if (c != null)
    return typeof c == "object" && "$ref" in c ? br(f, c.$ref) : c;
}
function Dr(f, c, s) {
  var a;
  return (a = R(f, f.paths[c])) == null ? void 0 : a[s];
}
function et(f, c) {
  return (c.parameters ?? []).map((a) => R(f, a));
}
function nt(f, c) {
  return ((c == null ? void 0 : c.parameters) ?? []).map((a) => R(f, a));
}
function it(f, c, s) {
  const a = { query: {}, header: {}, path: {}, cookie: {} };
  for (const p of c) {
    const l = R(f, p.schema);
    a[p.in][p.name] = { ...p, schema: l };
  }
  for (const p of s) {
    const l = R(f, p.schema);
    a[p.in][p.name] = { ...p, schema: l };
  }
  return a;
}
function Or(f) {
  const c = [];
  for (const s of Object.keys(f.paths))
    for (const a of Object.keys(f.paths[s]))
      if (hr.includes(a)) {
        const p = Dr(f, s, a);
        c.push([s, a, p]);
      }
  return c;
}
function jr(f) {
  const c = (f.servers ?? []).filter((s) => s.url !== void 0 && s.url !== "").map((s) => s.url);
  return c.length > 0 ? c : ["http://localhost/"];
}
function Gr(f, c, s) {
  var a;
  if (s !== "trace")
    return (a = R(f, f.paths[c])) == null ? void 0 : a[s];
}
function Wr(f) {
  const c = [];
  for (const s of Object.keys(f.paths))
    for (const a of Object.keys(f.paths[s]))
      if (hr.includes(a)) {
        const p = Gr(f, s, a);
        c.push([s, a, p]);
      }
  return c;
}
function ot(f, c) {
  return (c.parameters ?? []).map((a) => R(f, a));
}
function ut(f, c) {
  return ((c == null ? void 0 : c.parameters) ?? []).map((a) => R(f, a));
}
function ct(f, c, s) {
  const a = {
    query: {},
    header: {},
    path: {},
    formData: {},
    body: {}
  };
  for (const p of c) {
    const l = R(f, p.schema);
    a[p.in][p.name] = { ...p, schema: l };
  }
  for (const p of s) {
    const l = R(f, p.schema);
    a[p.in][p.name] = { ...p, schema: l };
  }
  return a;
}
function qr(f) {
  const c = f.schemes ?? ["http"], s = f.basePath ?? "", a = f.host ?? "localhost";
  return c.map((p) => `${p}://${a}${s}`);
}
function ft(f, c) {
  return c != null && c.consumes && c.consumes.length > 0 ? c.consumes : f != null && f.consumes && f.consumes.length > 0 ? f.consumes : [];
}
function V(f) {
  return "openapi" in f;
}
function ht(f, c, s) {
  var a, p;
  return s === "trace" ? V(f) ? (a = R(f, f.paths[c])) == null ? void 0 : a[s] : void 0 : (p = R(f, f.paths[c])) == null ? void 0 : p[s];
}
function Yr(f, c) {
  return `${f}:${c}`;
}
function st(f, c) {
  const s = V(f) ? Or(f) : Wr(f);
  for (const [a, p, l] of s)
    if (l.operationId === c || l.operationId === void 0 && Yr(a, p) === c)
      return { path: a, method: p, operation: l };
}
function at(f) {
  return V(f) ? jr(f) : qr(f);
}
const Hr = {
  ready: !1,
  data: { default: {}, secrets: {} }
}, sr = Mr({
  name: "env",
  initialState: Hr,
  reducers: {
    loadEnv: (f, c) => {
      c.payload.default && (f.data.default = c.payload.default), c.payload.secrets && (f.data.secrets = c.payload.secrets), f.ready = !0;
    },
    saveEnv: (f, c) => {
      f.data[c.payload.name] = c.payload.environment;
    },
    showEnvWindow: (f, c) => {
    }
  }
}), { loadEnv: pt, saveEnv: lt, showEnvWindow: yt } = sr.actions, wt = Pr, xt = Lr, dt = sr.reducer;
var Jr = {}, G = {};
G.byteLength = zr;
G.toByteArray = Zr;
G.fromByteArray = rt;
var _ = [], T = [], Vr = typeof Uint8Array < "u" ? Uint8Array : Array, J = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var N = 0, Xr = J.length; N < Xr; ++N)
  _[N] = J[N], T[J.charCodeAt(N)] = N;
T[45] = 62;
T[95] = 63;
function ar(f) {
  var c = f.length;
  if (c % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var s = f.indexOf("=");
  s === -1 && (s = c);
  var a = s === c ? 0 : 4 - s % 4;
  return [s, a];
}
function zr(f) {
  var c = ar(f), s = c[0], a = c[1];
  return (s + a) * 3 / 4 - a;
}
function Kr(f, c, s) {
  return (c + s) * 3 / 4 - s;
}
function Zr(f) {
  var c, s = ar(f), a = s[0], p = s[1], l = new Vr(Kr(f, a, p)), y = 0, o = p > 0 ? a - 4 : a, d;
  for (d = 0; d < o; d += 4)
    c = T[f.charCodeAt(d)] << 18 | T[f.charCodeAt(d + 1)] << 12 | T[f.charCodeAt(d + 2)] << 6 | T[f.charCodeAt(d + 3)], l[y++] = c >> 16 & 255, l[y++] = c >> 8 & 255, l[y++] = c & 255;
  return p === 2 && (c = T[f.charCodeAt(d)] << 2 | T[f.charCodeAt(d + 1)] >> 4, l[y++] = c & 255), p === 1 && (c = T[f.charCodeAt(d)] << 10 | T[f.charCodeAt(d + 1)] << 4 | T[f.charCodeAt(d + 2)] >> 2, l[y++] = c >> 8 & 255, l[y++] = c & 255), l;
}
function Qr(f) {
  return _[f >> 18 & 63] + _[f >> 12 & 63] + _[f >> 6 & 63] + _[f & 63];
}
function vr(f, c, s) {
  for (var a, p = [], l = c; l < s; l += 3)
    a = (f[l] << 16 & 16711680) + (f[l + 1] << 8 & 65280) + (f[l + 2] & 255), p.push(Qr(a));
  return p.join("");
}
function rt(f) {
  for (var c, s = f.length, a = s % 3, p = [], l = 16383, y = 0, o = s - a; y < o; y += l)
    p.push(vr(f, y, y + l > o ? o : y + l));
  return a === 1 ? (c = f[s - 1], p.push(
    _[c >> 2] + _[c << 4 & 63] + "=="
  )) : a === 2 && (c = (f[s - 2] << 8) + f[s - 1], p.push(
    _[c >> 10] + _[c >> 4 & 63] + _[c << 2 & 63] + "="
  )), p.join("");
}
var X = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
X.read = function(f, c, s, a, p) {
  var l, y, o = p * 8 - a - 1, d = (1 << o) - 1, C = d >> 1, I = -7, F = s ? p - 1 : 0, $ = s ? -1 : 1, A = f[c + F];
  for (F += $, l = A & (1 << -I) - 1, A >>= -I, I += o; I > 0; l = l * 256 + f[c + F], F += $, I -= 8)
    ;
  for (y = l & (1 << -I) - 1, l >>= -I, I += a; I > 0; y = y * 256 + f[c + F], F += $, I -= 8)
    ;
  if (l === 0)
    l = 1 - C;
  else {
    if (l === d)
      return y ? NaN : (A ? -1 : 1) * (1 / 0);
    y = y + Math.pow(2, a), l = l - C;
  }
  return (A ? -1 : 1) * y * Math.pow(2, l - a);
};
X.write = function(f, c, s, a, p, l) {
  var y, o, d, C = l * 8 - p - 1, I = (1 << C) - 1, F = I >> 1, $ = p === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A = a ? 0 : l - 1, b = a ? 1 : -1, D = c < 0 || c === 0 && 1 / c < 0 ? 1 : 0;
  for (c = Math.abs(c), isNaN(c) || c === 1 / 0 ? (o = isNaN(c) ? 1 : 0, y = I) : (y = Math.floor(Math.log(c) / Math.LN2), c * (d = Math.pow(2, -y)) < 1 && (y--, d *= 2), y + F >= 1 ? c += $ / d : c += $ * Math.pow(2, 1 - F), c * d >= 2 && (y++, d /= 2), y + F >= I ? (o = 0, y = I) : y + F >= 1 ? (o = (c * d - 1) * Math.pow(2, p), y = y + F) : (o = c * Math.pow(2, F - 1) * Math.pow(2, p), y = 0)); p >= 8; f[s + A] = o & 255, A += b, o /= 256, p -= 8)
    ;
  for (y = y << p | o, C += p; C > 0; f[s + A] = y & 255, A += b, y /= 256, C -= 8)
    ;
  f[s + A - b] |= D * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(f) {
  const c = G, s = X, a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  f.Buffer = o, f.SlowBuffer = lr, f.INSPECT_MAX_BYTES = 50;
  const p = 2147483647;
  f.kMaxLength = p, o.TYPED_ARRAY_SUPPORT = l(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function l() {
    try {
      const e = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(e, r), e.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(o.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.byteOffset;
    }
  });
  function y(e) {
    if (e > p)
      throw new RangeError('The value "' + e + '" is invalid for option "size"');
    const r = new Uint8Array(e);
    return Object.setPrototypeOf(r, o.prototype), r;
  }
  function o(e, r, t) {
    if (typeof e == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return F(e);
    }
    return d(e, r, t);
  }
  o.poolSize = 8192;
  function d(e, r, t) {
    if (typeof e == "string")
      return $(e, r);
    if (ArrayBuffer.isView(e))
      return b(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
      );
    if (S(e, ArrayBuffer) || e && S(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (S(e, SharedArrayBuffer) || e && S(e.buffer, SharedArrayBuffer)))
      return D(e, r, t);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const n = e.valueOf && e.valueOf();
    if (n != null && n !== e)
      return o.from(n, r, t);
    const i = pr(e);
    if (i)
      return i;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
      return o.from(e[Symbol.toPrimitive]("string"), r, t);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
    );
  }
  o.from = function(e, r, t) {
    return d(e, r, t);
  }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
  function C(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError('The value "' + e + '" is invalid for option "size"');
  }
  function I(e, r, t) {
    return C(e), e <= 0 ? y(e) : r !== void 0 ? typeof t == "string" ? y(e).fill(r, t) : y(e).fill(r) : y(e);
  }
  o.alloc = function(e, r, t) {
    return I(e, r, t);
  };
  function F(e) {
    return C(e), y(e < 0 ? 0 : W(e) | 0);
  }
  o.allocUnsafe = function(e) {
    return F(e);
  }, o.allocUnsafeSlow = function(e) {
    return F(e);
  };
  function $(e, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !o.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const t = z(e, r) | 0;
    let n = y(t);
    const i = n.write(e, r);
    return i !== t && (n = n.slice(0, i)), n;
  }
  function A(e) {
    const r = e.length < 0 ? 0 : W(e.length) | 0, t = y(r);
    for (let n = 0; n < r; n += 1)
      t[n] = e[n] & 255;
    return t;
  }
  function b(e) {
    if (S(e, Uint8Array)) {
      const r = new Uint8Array(e);
      return D(r.buffer, r.byteOffset, r.byteLength);
    }
    return A(e);
  }
  function D(e, r, t) {
    if (r < 0 || e.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < r + (t || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return r === void 0 && t === void 0 ? n = new Uint8Array(e) : t === void 0 ? n = new Uint8Array(e, r) : n = new Uint8Array(e, r, t), Object.setPrototypeOf(n, o.prototype), n;
  }
  function pr(e) {
    if (o.isBuffer(e)) {
      const r = W(e.length) | 0, t = y(r);
      return t.length === 0 || e.copy(t, 0, 0, r), t;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || H(e.length) ? y(0) : A(e);
    if (e.type === "Buffer" && Array.isArray(e.data))
      return A(e.data);
  }
  function W(e) {
    if (e >= p)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + p.toString(16) + " bytes");
    return e | 0;
  }
  function lr(e) {
    return +e != e && (e = 0), o.alloc(+e);
  }
  o.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== o.prototype;
  }, o.compare = function(r, t) {
    if (S(r, Uint8Array) && (r = o.from(r, r.offset, r.byteLength)), S(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(r) || !o.isBuffer(t))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === t)
      return 0;
    let n = r.length, i = t.length;
    for (let u = 0, h = Math.min(n, i); u < h; ++u)
      if (r[u] !== t[u]) {
        n = r[u], i = t[u];
        break;
      }
    return n < i ? -1 : i < n ? 1 : 0;
  }, o.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, o.concat = function(r, t) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return o.alloc(0);
    let n;
    if (t === void 0)
      for (t = 0, n = 0; n < r.length; ++n)
        t += r[n].length;
    const i = o.allocUnsafe(t);
    let u = 0;
    for (n = 0; n < r.length; ++n) {
      let h = r[n];
      if (S(h, Uint8Array))
        u + h.length > i.length ? (o.isBuffer(h) || (h = o.from(h)), h.copy(i, u)) : Uint8Array.prototype.set.call(
          i,
          h,
          u
        );
      else if (o.isBuffer(h))
        h.copy(i, u);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      u += h.length;
    }
    return i;
  };
  function z(e, r) {
    if (o.isBuffer(e))
      return e.length;
    if (ArrayBuffer.isView(e) || S(e, ArrayBuffer))
      return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e
      );
    const t = e.length, n = arguments.length > 2 && arguments[2] === !0;
    if (!n && t === 0)
      return 0;
    let i = !1;
    for (; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return Y(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return cr(e).length;
        default:
          if (i)
            return n ? -1 : Y(e).length;
          r = ("" + r).toLowerCase(), i = !0;
      }
  }
  o.byteLength = z;
  function yr(e, r, t) {
    let n = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return Ar(this, r, t);
        case "utf8":
        case "utf-8":
          return Q(this, r, t);
        case "ascii":
          return Ir(this, r, t);
        case "latin1":
        case "binary":
          return Fr(this, r, t);
        case "base64":
          return Er(this, r, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ur(this, r, t);
        default:
          if (n)
            throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), n = !0;
      }
  }
  o.prototype._isBuffer = !0;
  function M(e, r, t) {
    const n = e[r];
    e[r] = e[t], e[t] = n;
  }
  o.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < r; t += 2)
      M(this, t, t + 1);
    return this;
  }, o.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < r; t += 4)
      M(this, t, t + 3), M(this, t + 1, t + 2);
    return this;
  }, o.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < r; t += 8)
      M(this, t, t + 7), M(this, t + 1, t + 6), M(this, t + 2, t + 5), M(this, t + 3, t + 4);
    return this;
  }, o.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? Q(this, 0, r) : yr.apply(this, arguments);
  }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(r) {
    if (!o.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : o.compare(this, r) === 0;
  }, o.prototype.inspect = function() {
    let r = "";
    const t = f.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
  }, a && (o.prototype[a] = o.prototype.inspect), o.prototype.compare = function(r, t, n, i, u) {
    if (S(r, Uint8Array) && (r = o.from(r, r.offset, r.byteLength)), !o.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (t === void 0 && (t = 0), n === void 0 && (n = r ? r.length : 0), i === void 0 && (i = 0), u === void 0 && (u = this.length), t < 0 || n > r.length || i < 0 || u > this.length)
      throw new RangeError("out of range index");
    if (i >= u && t >= n)
      return 0;
    if (i >= u)
      return -1;
    if (t >= n)
      return 1;
    if (t >>>= 0, n >>>= 0, i >>>= 0, u >>>= 0, this === r)
      return 0;
    let h = u - i, w = n - t;
    const m = Math.min(h, w), B = this.slice(i, u), E = r.slice(t, n);
    for (let x = 0; x < m; ++x)
      if (B[x] !== E[x]) {
        h = B[x], w = E[x];
        break;
      }
    return h < w ? -1 : w < h ? 1 : 0;
  };
  function K(e, r, t, n, i) {
    if (e.length === 0)
      return -1;
    if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, H(t) && (t = i ? 0 : e.length - 1), t < 0 && (t = e.length + t), t >= e.length) {
      if (i)
        return -1;
      t = e.length - 1;
    } else if (t < 0)
      if (i)
        t = 0;
      else
        return -1;
    if (typeof r == "string" && (r = o.from(r, n)), o.isBuffer(r))
      return r.length === 0 ? -1 : Z(e, r, t, n, i);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, r, t) : Uint8Array.prototype.lastIndexOf.call(e, r, t) : Z(e, [r], t, n, i);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Z(e, r, t, n, i) {
    let u = 1, h = e.length, w = r.length;
    if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
      if (e.length < 2 || r.length < 2)
        return -1;
      u = 2, h /= 2, w /= 2, t /= 2;
    }
    function m(E, x) {
      return u === 1 ? E[x] : E.readUInt16BE(x * u);
    }
    let B;
    if (i) {
      let E = -1;
      for (B = t; B < h; B++)
        if (m(e, B) === m(r, E === -1 ? 0 : B - E)) {
          if (E === -1 && (E = B), B - E + 1 === w)
            return E * u;
        } else
          E !== -1 && (B -= B - E), E = -1;
    } else
      for (t + w > h && (t = h - w), B = t; B >= 0; B--) {
        let E = !0;
        for (let x = 0; x < w; x++)
          if (m(e, B + x) !== m(r, x)) {
            E = !1;
            break;
          }
        if (E)
          return B;
      }
    return -1;
  }
  o.prototype.includes = function(r, t, n) {
    return this.indexOf(r, t, n) !== -1;
  }, o.prototype.indexOf = function(r, t, n) {
    return K(this, r, t, n, !0);
  }, o.prototype.lastIndexOf = function(r, t, n) {
    return K(this, r, t, n, !1);
  };
  function wr(e, r, t, n) {
    t = Number(t) || 0;
    const i = e.length - t;
    n ? (n = Number(n), n > i && (n = i)) : n = i;
    const u = r.length;
    n > u / 2 && (n = u / 2);
    let h;
    for (h = 0; h < n; ++h) {
      const w = parseInt(r.substr(h * 2, 2), 16);
      if (H(w))
        return h;
      e[t + h] = w;
    }
    return h;
  }
  function xr(e, r, t, n) {
    return j(Y(r, e.length - t), e, t, n);
  }
  function dr(e, r, t, n) {
    return j(Sr(r), e, t, n);
  }
  function Br(e, r, t, n) {
    return j(cr(r), e, t, n);
  }
  function mr(e, r, t, n) {
    return j(_r(r, e.length - t), e, t, n);
  }
  o.prototype.write = function(r, t, n, i) {
    if (t === void 0)
      i = "utf8", n = this.length, t = 0;
    else if (n === void 0 && typeof t == "string")
      i = t, n = this.length, t = 0;
    else if (isFinite(t))
      t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const u = this.length - t;
    if ((n === void 0 || n > u) && (n = u), r.length > 0 && (n < 0 || t < 0) || t > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    let h = !1;
    for (; ; )
      switch (i) {
        case "hex":
          return wr(this, r, t, n);
        case "utf8":
        case "utf-8":
          return xr(this, r, t, n);
        case "ascii":
        case "latin1":
        case "binary":
          return dr(this, r, t, n);
        case "base64":
          return Br(this, r, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return mr(this, r, t, n);
        default:
          if (h)
            throw new TypeError("Unknown encoding: " + i);
          i = ("" + i).toLowerCase(), h = !0;
      }
  }, o.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Er(e, r, t) {
    return r === 0 && t === e.length ? c.fromByteArray(e) : c.fromByteArray(e.slice(r, t));
  }
  function Q(e, r, t) {
    t = Math.min(e.length, t);
    const n = [];
    let i = r;
    for (; i < t; ) {
      const u = e[i];
      let h = null, w = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
      if (i + w <= t) {
        let m, B, E, x;
        switch (w) {
          case 1:
            u < 128 && (h = u);
            break;
          case 2:
            m = e[i + 1], (m & 192) === 128 && (x = (u & 31) << 6 | m & 63, x > 127 && (h = x));
            break;
          case 3:
            m = e[i + 1], B = e[i + 2], (m & 192) === 128 && (B & 192) === 128 && (x = (u & 15) << 12 | (m & 63) << 6 | B & 63, x > 2047 && (x < 55296 || x > 57343) && (h = x));
            break;
          case 4:
            m = e[i + 1], B = e[i + 2], E = e[i + 3], (m & 192) === 128 && (B & 192) === 128 && (E & 192) === 128 && (x = (u & 15) << 18 | (m & 63) << 12 | (B & 63) << 6 | E & 63, x > 65535 && x < 1114112 && (h = x));
        }
      }
      h === null ? (h = 65533, w = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | h & 1023), n.push(h), i += w;
    }
    return gr(n);
  }
  const v = 4096;
  function gr(e) {
    const r = e.length;
    if (r <= v)
      return String.fromCharCode.apply(String, e);
    let t = "", n = 0;
    for (; n < r; )
      t += String.fromCharCode.apply(
        String,
        e.slice(n, n += v)
      );
    return t;
  }
  function Ir(e, r, t) {
    let n = "";
    t = Math.min(e.length, t);
    for (let i = r; i < t; ++i)
      n += String.fromCharCode(e[i] & 127);
    return n;
  }
  function Fr(e, r, t) {
    let n = "";
    t = Math.min(e.length, t);
    for (let i = r; i < t; ++i)
      n += String.fromCharCode(e[i]);
    return n;
  }
  function Ar(e, r, t) {
    const n = e.length;
    (!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
    let i = "";
    for (let u = r; u < t; ++u)
      i += $r[e[u]];
    return i;
  }
  function Ur(e, r, t) {
    const n = e.slice(r, t);
    let i = "";
    for (let u = 0; u < n.length - 1; u += 2)
      i += String.fromCharCode(n[u] + n[u + 1] * 256);
    return i;
  }
  o.prototype.slice = function(r, t) {
    const n = this.length;
    r = ~~r, t = t === void 0 ? n : ~~t, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < r && (t = r);
    const i = this.subarray(r, t);
    return Object.setPrototypeOf(i, o.prototype), i;
  };
  function g(e, r, t) {
    if (e % 1 !== 0 || e < 0)
      throw new RangeError("offset is not uint");
    if (e + r > t)
      throw new RangeError("Trying to access beyond buffer length");
  }
  o.prototype.readUintLE = o.prototype.readUIntLE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || g(r, t, this.length);
    let i = this[r], u = 1, h = 0;
    for (; ++h < t && (u *= 256); )
      i += this[r + h] * u;
    return i;
  }, o.prototype.readUintBE = o.prototype.readUIntBE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || g(r, t, this.length);
    let i = this[r + --t], u = 1;
    for (; t > 0 && (u *= 256); )
      i += this[r + --t] * u;
    return i;
  }, o.prototype.readUint8 = o.prototype.readUInt8 = function(r, t) {
    return r = r >>> 0, t || g(r, 1, this.length), this[r];
  }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(r, t) {
    return r = r >>> 0, t || g(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(r, t) {
    return r = r >>> 0, t || g(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(r, t) {
    return r = r >>> 0, t || g(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(r, t) {
    return r = r >>> 0, t || g(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, o.prototype.readBigUInt64LE = k(function(r) {
    r = r >>> 0, L(r, "offset");
    const t = this[r], n = this[r + 7];
    (t === void 0 || n === void 0) && O(r, this.length - 8);
    const i = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, u = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + n * 2 ** 24;
    return BigInt(i) + (BigInt(u) << BigInt(32));
  }), o.prototype.readBigUInt64BE = k(function(r) {
    r = r >>> 0, L(r, "offset");
    const t = this[r], n = this[r + 7];
    (t === void 0 || n === void 0) && O(r, this.length - 8);
    const i = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], u = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n;
    return (BigInt(i) << BigInt(32)) + BigInt(u);
  }), o.prototype.readIntLE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || g(r, t, this.length);
    let i = this[r], u = 1, h = 0;
    for (; ++h < t && (u *= 256); )
      i += this[r + h] * u;
    return u *= 128, i >= u && (i -= Math.pow(2, 8 * t)), i;
  }, o.prototype.readIntBE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || g(r, t, this.length);
    let i = t, u = 1, h = this[r + --i];
    for (; i > 0 && (u *= 256); )
      h += this[r + --i] * u;
    return u *= 128, h >= u && (h -= Math.pow(2, 8 * t)), h;
  }, o.prototype.readInt8 = function(r, t) {
    return r = r >>> 0, t || g(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, o.prototype.readInt16LE = function(r, t) {
    r = r >>> 0, t || g(r, 2, this.length);
    const n = this[r] | this[r + 1] << 8;
    return n & 32768 ? n | 4294901760 : n;
  }, o.prototype.readInt16BE = function(r, t) {
    r = r >>> 0, t || g(r, 2, this.length);
    const n = this[r + 1] | this[r] << 8;
    return n & 32768 ? n | 4294901760 : n;
  }, o.prototype.readInt32LE = function(r, t) {
    return r = r >>> 0, t || g(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, o.prototype.readInt32BE = function(r, t) {
    return r = r >>> 0, t || g(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, o.prototype.readBigInt64LE = k(function(r) {
    r = r >>> 0, L(r, "offset");
    const t = this[r], n = this[r + 7];
    (t === void 0 || n === void 0) && O(r, this.length - 8);
    const i = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (n << 24);
    return (BigInt(i) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), o.prototype.readBigInt64BE = k(function(r) {
    r = r >>> 0, L(r, "offset");
    const t = this[r], n = this[r + 7];
    (t === void 0 || n === void 0) && O(r, this.length - 8);
    const i = (t << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(i) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n);
  }), o.prototype.readFloatLE = function(r, t) {
    return r = r >>> 0, t || g(r, 4, this.length), s.read(this, r, !0, 23, 4);
  }, o.prototype.readFloatBE = function(r, t) {
    return r = r >>> 0, t || g(r, 4, this.length), s.read(this, r, !1, 23, 4);
  }, o.prototype.readDoubleLE = function(r, t) {
    return r = r >>> 0, t || g(r, 8, this.length), s.read(this, r, !0, 52, 8);
  }, o.prototype.readDoubleBE = function(r, t) {
    return r = r >>> 0, t || g(r, 8, this.length), s.read(this, r, !1, 52, 8);
  };
  function U(e, r, t, n, i, u) {
    if (!o.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > i || r < u)
      throw new RangeError('"value" argument is out of bounds');
    if (t + n > e.length)
      throw new RangeError("Index out of range");
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function(r, t, n, i) {
    if (r = +r, t = t >>> 0, n = n >>> 0, !i) {
      const w = Math.pow(2, 8 * n) - 1;
      U(this, r, t, n, w, 0);
    }
    let u = 1, h = 0;
    for (this[t] = r & 255; ++h < n && (u *= 256); )
      this[t + h] = r / u & 255;
    return t + n;
  }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(r, t, n, i) {
    if (r = +r, t = t >>> 0, n = n >>> 0, !i) {
      const w = Math.pow(2, 8 * n) - 1;
      U(this, r, t, n, w, 0);
    }
    let u = n - 1, h = 1;
    for (this[t + u] = r & 255; --u >= 0 && (h *= 256); )
      this[t + u] = r / h & 255;
    return t + n;
  }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(r, t, n) {
    return r = +r, t = t >>> 0, n || U(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
  }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || U(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || U(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || U(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
  }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || U(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  };
  function rr(e, r, t, n, i) {
    ur(r, n, i, e, t, 7);
    let u = Number(r & BigInt(4294967295));
    e[t++] = u, u = u >> 8, e[t++] = u, u = u >> 8, e[t++] = u, u = u >> 8, e[t++] = u;
    let h = Number(r >> BigInt(32) & BigInt(4294967295));
    return e[t++] = h, h = h >> 8, e[t++] = h, h = h >> 8, e[t++] = h, h = h >> 8, e[t++] = h, t;
  }
  function tr(e, r, t, n, i) {
    ur(r, n, i, e, t, 7);
    let u = Number(r & BigInt(4294967295));
    e[t + 7] = u, u = u >> 8, e[t + 6] = u, u = u >> 8, e[t + 5] = u, u = u >> 8, e[t + 4] = u;
    let h = Number(r >> BigInt(32) & BigInt(4294967295));
    return e[t + 3] = h, h = h >> 8, e[t + 2] = h, h = h >> 8, e[t + 1] = h, h = h >> 8, e[t] = h, t + 8;
  }
  o.prototype.writeBigUInt64LE = k(function(r, t = 0) {
    return rr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), o.prototype.writeBigUInt64BE = k(function(r, t = 0) {
    return tr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), o.prototype.writeIntLE = function(r, t, n, i) {
    if (r = +r, t = t >>> 0, !i) {
      const m = Math.pow(2, 8 * n - 1);
      U(this, r, t, n, m - 1, -m);
    }
    let u = 0, h = 1, w = 0;
    for (this[t] = r & 255; ++u < n && (h *= 256); )
      r < 0 && w === 0 && this[t + u - 1] !== 0 && (w = 1), this[t + u] = (r / h >> 0) - w & 255;
    return t + n;
  }, o.prototype.writeIntBE = function(r, t, n, i) {
    if (r = +r, t = t >>> 0, !i) {
      const m = Math.pow(2, 8 * n - 1);
      U(this, r, t, n, m - 1, -m);
    }
    let u = n - 1, h = 1, w = 0;
    for (this[t + u] = r & 255; --u >= 0 && (h *= 256); )
      r < 0 && w === 0 && this[t + u + 1] !== 0 && (w = 1), this[t + u] = (r / h >> 0) - w & 255;
    return t + n;
  }, o.prototype.writeInt8 = function(r, t, n) {
    return r = +r, t = t >>> 0, n || U(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
  }, o.prototype.writeInt16LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || U(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  }, o.prototype.writeInt16BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || U(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  }, o.prototype.writeInt32LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || U(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
  }, o.prototype.writeInt32BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || U(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  }, o.prototype.writeBigInt64LE = k(function(r, t = 0) {
    return rr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), o.prototype.writeBigInt64BE = k(function(r, t = 0) {
    return tr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function er(e, r, t, n, i, u) {
    if (t + n > e.length)
      throw new RangeError("Index out of range");
    if (t < 0)
      throw new RangeError("Index out of range");
  }
  function nr(e, r, t, n, i) {
    return r = +r, t = t >>> 0, i || er(e, r, t, 4), s.write(e, r, t, n, 23, 4), t + 4;
  }
  o.prototype.writeFloatLE = function(r, t, n) {
    return nr(this, r, t, !0, n);
  }, o.prototype.writeFloatBE = function(r, t, n) {
    return nr(this, r, t, !1, n);
  };
  function ir(e, r, t, n, i) {
    return r = +r, t = t >>> 0, i || er(e, r, t, 8), s.write(e, r, t, n, 52, 8), t + 8;
  }
  o.prototype.writeDoubleLE = function(r, t, n) {
    return ir(this, r, t, !0, n);
  }, o.prototype.writeDoubleBE = function(r, t, n) {
    return ir(this, r, t, !1, n);
  }, o.prototype.copy = function(r, t, n, i) {
    if (!o.isBuffer(r))
      throw new TypeError("argument should be a Buffer");
    if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= r.length && (t = r.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || r.length === 0 || this.length === 0)
      return 0;
    if (t < 0)
      throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length)
      throw new RangeError("Index out of range");
    if (i < 0)
      throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length), r.length - t < i - n && (i = r.length - t + n);
    const u = i - n;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(
      r,
      this.subarray(n, i),
      t
    ), u;
  }, o.prototype.fill = function(r, t, n, i) {
    if (typeof r == "string") {
      if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string")
        throw new TypeError("encoding must be a string");
      if (typeof i == "string" && !o.isEncoding(i))
        throw new TypeError("Unknown encoding: " + i);
      if (r.length === 1) {
        const h = r.charCodeAt(0);
        (i === "utf8" && h < 128 || i === "latin1") && (r = h);
      }
    } else
      typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (t < 0 || this.length < t || this.length < n)
      throw new RangeError("Out of range index");
    if (n <= t)
      return this;
    t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, r || (r = 0);
    let u;
    if (typeof r == "number")
      for (u = t; u < n; ++u)
        this[u] = r;
    else {
      const h = o.isBuffer(r) ? r : o.from(r, i), w = h.length;
      if (w === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (u = 0; u < n - t; ++u)
        this[u + t] = h[u % w];
    }
    return this;
  };
  const P = {};
  function q(e, r, t) {
    P[e] = class extends t {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
      }
      get code() {
        return e;
      }
      set code(i) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  q(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), q(
    "ERR_INVALID_ARG_TYPE",
    function(e, r) {
      return `The "${e}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  ), q(
    "ERR_OUT_OF_RANGE",
    function(e, r, t) {
      let n = `The value of "${e}" is out of range.`, i = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? i = or(String(t)) : typeof t == "bigint" && (i = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (i = or(i)), i += "n"), n += ` It must be ${r}. Received ${i}`, n;
    },
    RangeError
  );
  function or(e) {
    let r = "", t = e.length;
    const n = e[0] === "-" ? 1 : 0;
    for (; t >= n + 4; t -= 3)
      r = `_${e.slice(t - 3, t)}${r}`;
    return `${e.slice(0, t)}${r}`;
  }
  function Tr(e, r, t) {
    L(r, "offset"), (e[r] === void 0 || e[r + t] === void 0) && O(r, e.length - (t + 1));
  }
  function ur(e, r, t, n, i, u) {
    if (e > t || e < r) {
      const h = typeof r == "bigint" ? "n" : "";
      let w;
      throw u > 3 ? r === 0 || r === BigInt(0) ? w = `>= 0${h} and < 2${h} ** ${(u + 1) * 8}${h}` : w = `>= -(2${h} ** ${(u + 1) * 8 - 1}${h}) and < 2 ** ${(u + 1) * 8 - 1}${h}` : w = `>= ${r}${h} and <= ${t}${h}`, new P.ERR_OUT_OF_RANGE("value", w, e);
    }
    Tr(n, i, u);
  }
  function L(e, r) {
    if (typeof e != "number")
      throw new P.ERR_INVALID_ARG_TYPE(r, "number", e);
  }
  function O(e, r, t) {
    throw Math.floor(e) !== e ? (L(e, t), new P.ERR_OUT_OF_RANGE(t || "offset", "an integer", e)) : r < 0 ? new P.ERR_BUFFER_OUT_OF_BOUNDS() : new P.ERR_OUT_OF_RANGE(
      t || "offset",
      `>= ${t ? 1 : 0} and <= ${r}`,
      e
    );
  }
  const Rr = /[^+/0-9A-Za-z-_]/g;
  function Cr(e) {
    if (e = e.split("=")[0], e = e.trim().replace(Rr, ""), e.length < 2)
      return "";
    for (; e.length % 4 !== 0; )
      e = e + "=";
    return e;
  }
  function Y(e, r) {
    r = r || 1 / 0;
    let t;
    const n = e.length;
    let i = null;
    const u = [];
    for (let h = 0; h < n; ++h) {
      if (t = e.charCodeAt(h), t > 55295 && t < 57344) {
        if (!i) {
          if (t > 56319) {
            (r -= 3) > -1 && u.push(239, 191, 189);
            continue;
          } else if (h + 1 === n) {
            (r -= 3) > -1 && u.push(239, 191, 189);
            continue;
          }
          i = t;
          continue;
        }
        if (t < 56320) {
          (r -= 3) > -1 && u.push(239, 191, 189), i = t;
          continue;
        }
        t = (i - 55296 << 10 | t - 56320) + 65536;
      } else
        i && (r -= 3) > -1 && u.push(239, 191, 189);
      if (i = null, t < 128) {
        if ((r -= 1) < 0)
          break;
        u.push(t);
      } else if (t < 2048) {
        if ((r -= 2) < 0)
          break;
        u.push(
          t >> 6 | 192,
          t & 63 | 128
        );
      } else if (t < 65536) {
        if ((r -= 3) < 0)
          break;
        u.push(
          t >> 12 | 224,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else if (t < 1114112) {
        if ((r -= 4) < 0)
          break;
        u.push(
          t >> 18 | 240,
          t >> 12 & 63 | 128,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return u;
  }
  function Sr(e) {
    const r = [];
    for (let t = 0; t < e.length; ++t)
      r.push(e.charCodeAt(t) & 255);
    return r;
  }
  function _r(e, r) {
    let t, n, i;
    const u = [];
    for (let h = 0; h < e.length && !((r -= 2) < 0); ++h)
      t = e.charCodeAt(h), n = t >> 8, i = t % 256, u.push(i), u.push(n);
    return u;
  }
  function cr(e) {
    return c.toByteArray(Cr(e));
  }
  function j(e, r, t, n) {
    let i;
    for (i = 0; i < n && !(i + t >= r.length || i >= e.length); ++i)
      r[i + t] = e[i];
    return i;
  }
  function S(e, r) {
    return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
  }
  function H(e) {
    return e !== e;
  }
  const $r = function() {
    const e = "0123456789abcdef", r = new Array(256);
    for (let t = 0; t < 16; ++t) {
      const n = t * 16;
      for (let i = 0; i < 16; ++i)
        r[n + i] = e[t] + e[i];
    }
    return r;
  }();
  function k(e) {
    return typeof BigInt > "u" ? kr : e;
  }
  function kr() {
    throw new Error("BigInt not supported");
  }
})(Jr);
export {
  hr as H,
  Dr as a,
  Jr as b,
  at as c,
  R as d,
  dt as e,
  lt as f,
  ht as g,
  xt as h,
  V as i,
  st as j,
  et as k,
  pt as l,
  Yr as m,
  nt as n,
  it as o,
  Nr as p,
  ot as q,
  Gr as r,
  yt as s,
  ut as t,
  wt as u,
  ct as v,
  br as w,
  jr as x,
  ft as y,
  qr as z
};
