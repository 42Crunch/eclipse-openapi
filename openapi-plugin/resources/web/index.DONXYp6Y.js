var D$ = Object.defineProperty;
var N$ = (t, e, r) => e in t ? D$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var P = (t, e, r) => (N$(t, typeof e != "symbol" ? e + "" : e, r), r);
import { y as L$, v as jt, o as jr } from "./TriangleExclamation.DXu4kS4a.js";
const Lm = "application/json, application/yaml", Ti = "https://swagger.io", km = Object.freeze({
  url: "/"
});
var k$ = Error, U$ = EvalError, B$ = RangeError, q$ = ReferenceError, Um = SyntaxError, hs = TypeError, H$ = URIError, G$ = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var s = 42;
  e[r] = s;
  for (r in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(e);
  if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(e, r);
    if (o.value !== s || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, Hp = typeof Symbol < "u" && Symbol, z$ = G$, J$ = function() {
  return typeof Hp != "function" || typeof Symbol != "function" || typeof Hp("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : z$();
}, wc = {
  __proto__: null,
  foo: {}
}, K$ = Object, W$ = function() {
  return { __proto__: wc }.foo === wc.foo && !(wc instanceof K$);
}, Y$ = "Function.prototype.bind called on incompatible ", X$ = Object.prototype.toString, Q$ = Math.max, Z$ = "[object Function]", Gp = function(e, r) {
  for (var n = [], s = 0; s < e.length; s += 1)
    n[s] = e[s];
  for (var i = 0; i < r.length; i += 1)
    n[i + e.length] = r[i];
  return n;
}, ex = function(e, r) {
  for (var n = [], s = r || 0, i = 0; s < e.length; s += 1, i += 1)
    n[i] = e[s];
  return n;
}, tx = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, rx = function(e) {
  var r = this;
  if (typeof r != "function" || X$.apply(r) !== Z$)
    throw new TypeError(Y$ + r);
  for (var n = ex(arguments, 1), s, i = function() {
    if (this instanceof s) {
      var p = r.apply(
        this,
        Gp(n, arguments)
      );
      return Object(p) === p ? p : this;
    }
    return r.apply(
      e,
      Gp(n, arguments)
    );
  }, o = Q$(0, r.length - n.length), a = [], c = 0; c < o; c++)
    a[c] = "$" + c;
  if (s = Function("binder", "return function (" + tx(a, ",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, s.prototype = new u(), u.prototype = null;
  }
  return s;
}, nx = rx, Wl = Function.prototype.bind || nx, sx = Function.prototype.call, ix = Object.prototype.hasOwnProperty, ox = Wl, ax = ox.call(sx, ix), K, cx = k$, ux = U$, lx = B$, fx = q$, on = Um, en = hs, px = H$, Bm = Function, Oc = function(t) {
  try {
    return Bm('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, br = Object.getOwnPropertyDescriptor;
if (br)
  try {
    br({}, "");
  } catch {
    br = null;
  }
var Ec = function() {
  throw new en();
}, hx = br ? function() {
  try {
    return arguments.callee, Ec;
  } catch {
    try {
      return br(arguments, "callee").get;
    } catch {
      return Ec;
    }
  }
}() : Ec, Ur = J$(), dx = W$(), Oe = Object.getPrototypeOf || (dx ? function(t) {
  return t.__proto__;
} : null), Kr = {}, mx = typeof Uint8Array > "u" || !Oe ? K : Oe(Uint8Array), $r = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? K : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? K : ArrayBuffer,
  "%ArrayIteratorPrototype%": Ur && Oe ? Oe([][Symbol.iterator]()) : K,
  "%AsyncFromSyncIteratorPrototype%": K,
  "%AsyncFunction%": Kr,
  "%AsyncGenerator%": Kr,
  "%AsyncGeneratorFunction%": Kr,
  "%AsyncIteratorPrototype%": Kr,
  "%Atomics%": typeof Atomics > "u" ? K : Atomics,
  "%BigInt%": typeof BigInt > "u" ? K : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? K : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? K : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? K : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": cx,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": ux,
  "%Float32Array%": typeof Float32Array > "u" ? K : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? K : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? K : FinalizationRegistry,
  "%Function%": Bm,
  "%GeneratorFunction%": Kr,
  "%Int8Array%": typeof Int8Array > "u" ? K : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? K : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? K : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Ur && Oe ? Oe(Oe([][Symbol.iterator]())) : K,
  "%JSON%": typeof JSON == "object" ? JSON : K,
  "%Map%": typeof Map > "u" ? K : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Ur || !Oe ? K : Oe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? K : Promise,
  "%Proxy%": typeof Proxy > "u" ? K : Proxy,
  "%RangeError%": lx,
  "%ReferenceError%": fx,
  "%Reflect%": typeof Reflect > "u" ? K : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? K : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Ur || !Oe ? K : Oe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? K : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Ur && Oe ? Oe(""[Symbol.iterator]()) : K,
  "%Symbol%": Ur ? Symbol : K,
  "%SyntaxError%": on,
  "%ThrowTypeError%": hx,
  "%TypedArray%": mx,
  "%TypeError%": en,
  "%Uint8Array%": typeof Uint8Array > "u" ? K : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? K : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? K : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? K : Uint32Array,
  "%URIError%": px,
  "%WeakMap%": typeof WeakMap > "u" ? K : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? K : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? K : WeakSet
};
if (Oe)
  try {
    null.error;
  } catch (t) {
    var yx = Oe(Oe(t));
    $r["%Error.prototype%"] = yx;
  }
var vx = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Oc("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Oc("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Oc("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var s = t("%AsyncGenerator%");
    s && Oe && (r = Oe(s.prototype));
  }
  return $r[e] = r, r;
}, zp = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, ds = Wl, Ii = ax, gx = ds.call(Function.call, Array.prototype.concat), bx = ds.call(Function.apply, Array.prototype.splice), Jp = ds.call(Function.call, String.prototype.replace), Ci = ds.call(Function.call, String.prototype.slice), $x = ds.call(Function.call, RegExp.prototype.exec), xx = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Sx = /\\(\\)?/g, wx = function(e) {
  var r = Ci(e, 0, 1), n = Ci(e, -1);
  if (r === "%" && n !== "%")
    throw new on("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new on("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return Jp(e, xx, function(i, o, a, c) {
    s[s.length] = a ? Jp(c, Sx, "$1") : o || i;
  }), s;
}, Ox = function(e, r) {
  var n = e, s;
  if (Ii(zp, n) && (s = zp[n], n = "%" + s[0] + "%"), Ii($r, n)) {
    var i = $r[n];
    if (i === Kr && (i = vx(n)), typeof i > "u" && !r)
      throw new en("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: s,
      name: n,
      value: i
    };
  }
  throw new on("intrinsic " + e + " does not exist!");
}, xn = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new en("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new en('"allowMissing" argument must be a boolean');
  if ($x(/^%?[^%]*%?$/, e) === null)
    throw new on("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = wx(e), s = n.length > 0 ? n[0] : "", i = Ox("%" + s + "%", r), o = i.name, a = i.value, c = !1, u = i.alias;
  u && (s = u[0], bx(n, gx([0, 1], u)));
  for (var p = 1, f = !0; p < n.length; p += 1) {
    var h = n[p], l = Ci(h, 0, 1), d = Ci(h, -1);
    if ((l === '"' || l === "'" || l === "`" || d === '"' || d === "'" || d === "`") && l !== d)
      throw new on("property names with quotes must have matching quotes");
    if ((h === "constructor" || !f) && (c = !0), s += "." + h, o = "%" + s + "%", Ii($r, o))
      a = $r[o];
    else if (a != null) {
      if (!(h in a)) {
        if (!r)
          throw new en("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (br && p + 1 >= n.length) {
        var m = br(a, h);
        f = !!m, f && "get" in m && !("originalValue" in m.get) ? a = m.get : a = a[h];
      } else
        f = Ii(a, h), a = a[h];
      f && !c && ($r[o] = a);
    }
  }
  return a;
}, qm = { exports: {} }, Ac, Kp;
function Yl() {
  if (Kp)
    return Ac;
  Kp = 1;
  var t = xn, e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ac = e, Ac;
}
var Ex = xn, $i = Ex("%Object.getOwnPropertyDescriptor%", !0);
if ($i)
  try {
    $i([], "length");
  } catch {
    $i = null;
  }
var Hm = $i, Wp = Yl(), Ax = Um, Br = hs, Yp = Hm, Px = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Br("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Br("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Br("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Br("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Br("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Br("`loose`, if provided, must be a boolean");
  var s = arguments.length > 3 ? arguments[3] : null, i = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, c = !!Yp && Yp(e, r);
  if (Wp)
    Wp(e, r, {
      configurable: o === null && c ? c.configurable : !o,
      enumerable: s === null && c ? c.enumerable : !s,
      value: n,
      writable: i === null && c ? c.writable : !i
    });
  else if (a || !s && !i && !o)
    e[r] = n;
  else
    throw new Ax("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, $u = Yl(), Gm = function() {
  return !!$u;
};
Gm.hasArrayLengthDefineBug = function() {
  if (!$u)
    return null;
  try {
    return $u([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var jx = Gm, _x = xn, Xp = Px, Rx = jx(), Qp = Hm, Zp = hs, Tx = _x("%Math.floor%"), Ix = function(e, r) {
  if (typeof e != "function")
    throw new Zp("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || Tx(r) !== r)
    throw new Zp("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], s = !0, i = !0;
  if ("length" in e && Qp) {
    var o = Qp(e, "length");
    o && !o.configurable && (s = !1), o && !o.writable && (i = !1);
  }
  return (s || i || !n) && (Rx ? Xp(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : Xp(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = Wl, r = xn, n = Ix, s = hs, i = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || e.call(o, i), c = Yl(), u = r("%Math.max%");
  t.exports = function(h) {
    if (typeof h != "function")
      throw new s("a function is required");
    var l = a(e, o, arguments);
    return n(
      l,
      1 + u(0, h.length - (arguments.length - 1)),
      !0
    );
  };
  var p = function() {
    return a(e, i, arguments);
  };
  c ? c(t.exports, "apply", { value: p }) : t.exports.apply = p;
})(qm);
var Cx = qm.exports, zm = xn, Jm = Cx, Fx = Jm(zm("String.prototype.indexOf")), Mx = function(e, r) {
  var n = zm(e, !!r);
  return typeof n == "function" && Fx(e, ".prototype.") > -1 ? Jm(n) : n;
};
const Vx = {}, Dx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vx
}, Symbol.toStringTag, { value: "Module" })), Nx = /* @__PURE__ */ L$(Dx);
var Xl = typeof Map == "function" && Map.prototype, Pc = Object.getOwnPropertyDescriptor && Xl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Fi = Xl && Pc && typeof Pc.get == "function" ? Pc.get : null, eh = Xl && Map.prototype.forEach, Ql = typeof Set == "function" && Set.prototype, jc = Object.getOwnPropertyDescriptor && Ql ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Mi = Ql && jc && typeof jc.get == "function" ? jc.get : null, th = Ql && Set.prototype.forEach, Lx = typeof WeakMap == "function" && WeakMap.prototype, Gn = Lx ? WeakMap.prototype.has : null, kx = typeof WeakSet == "function" && WeakSet.prototype, zn = kx ? WeakSet.prototype.has : null, Ux = typeof WeakRef == "function" && WeakRef.prototype, rh = Ux ? WeakRef.prototype.deref : null, Bx = Boolean.prototype.valueOf, qx = Object.prototype.toString, Hx = Function.prototype.toString, Gx = String.prototype.match, Zl = String.prototype.slice, tr = String.prototype.replace, zx = String.prototype.toUpperCase, nh = String.prototype.toLowerCase, Km = RegExp.prototype.test, sh = Array.prototype.concat, vt = Array.prototype.join, Jx = Array.prototype.slice, ih = Math.floor, xu = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, _c = Object.getOwnPropertySymbols, Su = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, an = typeof Symbol == "function" && typeof Symbol.iterator == "object", Me = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === an || !0) ? Symbol.toStringTag : null, Wm = Object.prototype.propertyIsEnumerable, oh = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function ah(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Km.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -ih(-t) : ih(t);
    if (n !== t) {
      var s = String(n), i = Zl.call(e, s.length + 1);
      return tr.call(s, r, "$&_") + "." + tr.call(tr.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return tr.call(e, r, "$&_");
}
var wu = Nx, ch = wu.custom, uh = Xm(ch) ? ch : null, Kx = function t(e, r, n, s) {
  var i = r || {};
  if (Zt(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Zt(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Zt(i, "customInspect") ? i.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Zt(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Zt(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = i.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Zm(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var c = String(e);
    return a ? ah(e, c) : c;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return a ? ah(e, u) : u;
  }
  var p = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= p && p > 0 && typeof e == "object")
    return Ou(e) ? "[Array]" : "[Object]";
  var f = pS(i, n);
  if (typeof s > "u")
    s = [];
  else if (Qm(s, e) >= 0)
    return "[Circular]";
  function h(D, z, de) {
    if (z && (s = Jx.call(s), s.push(z)), de) {
      var oe = {
        depth: i.depth
      };
      return Zt(i, "quoteStyle") && (oe.quoteStyle = i.quoteStyle), t(D, oe, n + 1, s);
    }
    return t(D, i, n + 1, s);
  }
  if (typeof e == "function" && !lh(e)) {
    var l = nS(e), d = oi(e, h);
    return "[Function" + (l ? ": " + l : " (anonymous)") + "]" + (d.length > 0 ? " { " + vt.call(d, ", ") + " }" : "");
  }
  if (Xm(e)) {
    var m = an ? tr.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Su.call(e);
    return typeof e == "object" && !an ? Nn(m) : m;
  }
  if (uS(e)) {
    for (var y = "<" + nh.call(String(e.nodeName)), v = e.attributes || [], b = 0; b < v.length; b++)
      y += " " + v[b].name + "=" + Ym(Wx(v[b].value), "double", i);
    return y += ">", e.childNodes && e.childNodes.length && (y += "..."), y += "</" + nh.call(String(e.nodeName)) + ">", y;
  }
  if (Ou(e)) {
    if (e.length === 0)
      return "[]";
    var g = oi(e, h);
    return f && !fS(g) ? "[" + Eu(g, f) + "]" : "[ " + vt.call(g, ", ") + " ]";
  }
  if (Xx(e)) {
    var E = oi(e, h);
    return !("cause" in Error.prototype) && "cause" in e && !Wm.call(e, "cause") ? "{ [" + String(e) + "] " + vt.call(sh.call("[cause]: " + h(e.cause), E), ", ") + " }" : E.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + vt.call(E, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (uh && typeof e[uh] == "function" && wu)
      return wu(e, { depth: p - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (sS(e)) {
    var O = [];
    return eh && eh.call(e, function(D, z) {
      O.push(h(z, e, !0) + " => " + h(D, e));
    }), fh("Map", Fi.call(e), O, f);
  }
  if (aS(e)) {
    var x = [];
    return th && th.call(e, function(D) {
      x.push(h(D, e));
    }), fh("Set", Mi.call(e), x, f);
  }
  if (iS(e))
    return Rc("WeakMap");
  if (cS(e))
    return Rc("WeakSet");
  if (oS(e))
    return Rc("WeakRef");
  if (Zx(e))
    return Nn(h(Number(e)));
  if (tS(e))
    return Nn(h(xu.call(e)));
  if (eS(e))
    return Nn(Bx.call(e));
  if (Qx(e))
    return Nn(h(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === jt)
    return "{ [object globalThis] }";
  if (!Yx(e) && !lh(e)) {
    var T = oi(e, h), M = oh ? oh(e) === Object.prototype : e instanceof Object || e.constructor === Object, A = e instanceof Object ? "" : "null prototype", k = !M && Me && Object(e) === e && Me in e ? Zl.call(or(e), 8, -1) : A ? "Object" : "", S = M || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", I = S + (k || A ? "[" + vt.call(sh.call([], k || [], A || []), ": ") + "] " : "");
    return T.length === 0 ? I + "{}" : f ? I + "{" + Eu(T, f) + "}" : I + "{ " + vt.call(T, ", ") + " }";
  }
  return String(e);
};
function Ym(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Wx(t) {
  return tr.call(String(t), /"/g, "&quot;");
}
function Ou(t) {
  return or(t) === "[object Array]" && (!Me || !(typeof t == "object" && Me in t));
}
function Yx(t) {
  return or(t) === "[object Date]" && (!Me || !(typeof t == "object" && Me in t));
}
function lh(t) {
  return or(t) === "[object RegExp]" && (!Me || !(typeof t == "object" && Me in t));
}
function Xx(t) {
  return or(t) === "[object Error]" && (!Me || !(typeof t == "object" && Me in t));
}
function Qx(t) {
  return or(t) === "[object String]" && (!Me || !(typeof t == "object" && Me in t));
}
function Zx(t) {
  return or(t) === "[object Number]" && (!Me || !(typeof t == "object" && Me in t));
}
function eS(t) {
  return or(t) === "[object Boolean]" && (!Me || !(typeof t == "object" && Me in t));
}
function Xm(t) {
  if (an)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Su)
    return !1;
  try {
    return Su.call(t), !0;
  } catch {
  }
  return !1;
}
function tS(t) {
  if (!t || typeof t != "object" || !xu)
    return !1;
  try {
    return xu.call(t), !0;
  } catch {
  }
  return !1;
}
var rS = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Zt(t, e) {
  return rS.call(t, e);
}
function or(t) {
  return qx.call(t);
}
function nS(t) {
  if (t.name)
    return t.name;
  var e = Gx.call(Hx.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Qm(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function sS(t) {
  if (!Fi || !t || typeof t != "object")
    return !1;
  try {
    Fi.call(t);
    try {
      Mi.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function iS(t) {
  if (!Gn || !t || typeof t != "object")
    return !1;
  try {
    Gn.call(t, Gn);
    try {
      zn.call(t, zn);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function oS(t) {
  if (!rh || !t || typeof t != "object")
    return !1;
  try {
    return rh.call(t), !0;
  } catch {
  }
  return !1;
}
function aS(t) {
  if (!Mi || !t || typeof t != "object")
    return !1;
  try {
    Mi.call(t);
    try {
      Fi.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function cS(t) {
  if (!zn || !t || typeof t != "object")
    return !1;
  try {
    zn.call(t, zn);
    try {
      Gn.call(t, Gn);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function uS(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Zm(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Zm(Zl.call(t, 0, e.maxStringLength), e) + n;
  }
  var s = tr.call(tr.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lS);
  return Ym(s, "single", e);
}
function lS(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + zx.call(e.toString(16));
}
function Nn(t) {
  return "Object(" + t + ")";
}
function Rc(t) {
  return t + " { ? }";
}
function fh(t, e, r, n) {
  var s = n ? Eu(r, n) : vt.call(r, ", ");
  return t + " (" + e + ") {" + s + "}";
}
function fS(t) {
  for (var e = 0; e < t.length; e++)
    if (Qm(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function pS(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = vt.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: vt.call(Array(e + 1), r)
  };
}
function Eu(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + vt.call(t, "," + r) + `
` + e.prev;
}
function oi(t, e) {
  var r = Ou(t), n = [];
  if (r) {
    n.length = t.length;
    for (var s = 0; s < t.length; s++)
      n[s] = Zt(t, s) ? e(t[s], t) : "";
  }
  var i = typeof _c == "function" ? _c(t) : [], o;
  if (an) {
    o = {};
    for (var a = 0; a < i.length; a++)
      o["$" + i[a]] = i[a];
  }
  for (var c in t)
    Zt(t, c) && (r && String(Number(c)) === c && c < t.length || an && o["$" + c] instanceof Symbol || (Km.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
  if (typeof _c == "function")
    for (var u = 0; u < i.length; u++)
      Wm.call(t, i[u]) && n.push("[" + e(i[u]) + "]: " + e(t[i[u]], t));
  return n;
}
var ey = xn, Sn = Mx, hS = Kx, dS = hs, ai = ey("%WeakMap%", !0), ci = ey("%Map%", !0), mS = Sn("WeakMap.prototype.get", !0), yS = Sn("WeakMap.prototype.set", !0), vS = Sn("WeakMap.prototype.has", !0), gS = Sn("Map.prototype.get", !0), bS = Sn("Map.prototype.set", !0), $S = Sn("Map.prototype.has", !0), ef = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, xS = function(t, e) {
  var r = ef(t, e);
  return r && r.value;
}, SS = function(t, e, r) {
  var n = ef(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, wS = function(t, e) {
  return !!ef(t, e);
}, OS = function() {
  var e, r, n, s = {
    assert: function(i) {
      if (!s.has(i))
        throw new dS("Side channel does not contain " + hS(i));
    },
    get: function(i) {
      if (ai && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return mS(e, i);
      } else if (ci) {
        if (r)
          return gS(r, i);
      } else if (n)
        return xS(n, i);
    },
    has: function(i) {
      if (ai && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return vS(e, i);
      } else if (ci) {
        if (r)
          return $S(r, i);
      } else if (n)
        return wS(n, i);
      return !1;
    },
    set: function(i, o) {
      ai && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new ai()), yS(e, i, o)) : ci ? (r || (r = new ci()), bS(r, i, o)) : (n || (n = { key: {}, next: null }), SS(n, i, o));
    }
  };
  return s;
}, ES = String.prototype.replace, AS = /%20/g, Tc = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, tf = {
  default: Tc.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return ES.call(t, AS, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Tc.RFC1738,
  RFC3986: Tc.RFC3986
}, PS = tf, Ic = Object.prototype.hasOwnProperty, vr = Array.isArray, ht = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), jS = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (vr(n)) {
      for (var s = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && s.push(n[i]);
      r.obj[r.prop] = s;
    }
  }
}, ty = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = 0; s < e.length; ++s)
    typeof e[s] < "u" && (n[s] = e[s]);
  return n;
}, _S = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (vr(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Ic.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var s = e;
  return vr(e) && !vr(r) && (s = ty(e, n)), vr(e) && vr(r) ? (r.forEach(function(i, o) {
    if (Ic.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && i && typeof i == "object" ? e[o] = t(a, i, n) : e.push(i);
    } else
      e[o] = i;
  }), e) : Object.keys(r).reduce(function(i, o) {
    var a = r[o];
    return Ic.call(i, o) ? i[o] = t(i[o], a, n) : i[o] = a, i;
  }, s);
}, RS = function(e, r) {
  return Object.keys(r).reduce(function(n, s) {
    return n[s] = r[s], n;
  }, e);
}, TS = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, IS = function(e, r, n, s, i) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var a = "", c = 0; c < o.length; ++c) {
    var u = o.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || i === PS.RFC1738 && (u === 40 || u === 41)) {
      a += o.charAt(c);
      continue;
    }
    if (u < 128) {
      a = a + ht[u];
      continue;
    }
    if (u < 2048) {
      a = a + (ht[192 | u >> 6] + ht[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      a = a + (ht[224 | u >> 12] + ht[128 | u >> 6 & 63] + ht[128 | u & 63]);
      continue;
    }
    c += 1, u = 65536 + ((u & 1023) << 10 | o.charCodeAt(c) & 1023), a += ht[240 | u >> 18] + ht[128 | u >> 12 & 63] + ht[128 | u >> 6 & 63] + ht[128 | u & 63];
  }
  return a;
}, CS = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], s = 0; s < r.length; ++s)
    for (var i = r[s], o = i.obj[i.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
      var u = a[c], p = o[u];
      typeof p == "object" && p !== null && n.indexOf(p) === -1 && (r.push({ obj: o, prop: u }), n.push(p));
    }
  return jS(r), e;
}, FS = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, MS = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, VS = function(e, r) {
  return [].concat(e, r);
}, DS = function(e, r) {
  if (vr(e)) {
    for (var n = [], s = 0; s < e.length; s += 1)
      n.push(r(e[s]));
    return n;
  }
  return r(e);
}, ry = {
  arrayToObject: ty,
  assign: RS,
  combine: VS,
  compact: CS,
  decode: TS,
  encode: IS,
  isBuffer: MS,
  isRegExp: FS,
  maybeMap: DS,
  merge: _S
}, ny = OS, xi = ry, Jn = tf, NS = Object.prototype.hasOwnProperty, ph = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, r) {
    return e + "[" + r + "]";
  },
  repeat: function(e) {
    return e;
  }
}, Pt = Array.isArray, LS = Array.prototype.push, sy = function(t, e) {
  LS.apply(t, Pt(e) ? e : [e]);
}, kS = Date.prototype.toISOString, hh = Jn.default, Ce = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: xi.encode,
  encodeValuesOnly: !1,
  format: hh,
  formatter: Jn.formatters[hh],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return kS.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, US = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Cc = {}, BS = function t(e, r, n, s, i, o, a, c, u, p, f, h, l, d, m, y) {
  for (var v = e, b = y, g = 0, E = !1; (b = b.get(Cc)) !== void 0 && !E; ) {
    var O = b.get(e);
    if (g += 1, typeof O < "u") {
      if (O === g)
        throw new RangeError("Cyclic object value");
      E = !0;
    }
    typeof b.get(Cc) > "u" && (g = 0);
  }
  if (typeof c == "function" ? v = c(r, v) : v instanceof Date ? v = f(v) : n === "comma" && Pt(v) && (v = xi.maybeMap(v, function(oe) {
    return oe instanceof Date ? f(oe) : oe;
  })), v === null) {
    if (i)
      return a && !d ? a(r, Ce.encoder, m, "key", h) : r;
    v = "";
  }
  if (US(v) || xi.isBuffer(v)) {
    if (a) {
      var x = d ? r : a(r, Ce.encoder, m, "key", h);
      return [l(x) + "=" + l(a(v, Ce.encoder, m, "value", h))];
    }
    return [l(r) + "=" + l(String(v))];
  }
  var T = [];
  if (typeof v > "u")
    return T;
  var M;
  if (n === "comma" && Pt(v))
    d && a && (v = xi.maybeMap(v, a)), M = [{ value: v.length > 0 ? v.join(",") || null : void 0 }];
  else if (Pt(c))
    M = c;
  else {
    var A = Object.keys(v);
    M = u ? A.sort(u) : A;
  }
  for (var k = s && Pt(v) && v.length === 1 ? r + "[]" : r, S = 0; S < M.length; ++S) {
    var I = M[S], D = typeof I == "object" && typeof I.value < "u" ? I.value : v[I];
    if (!(o && D === null)) {
      var z = Pt(v) ? typeof n == "function" ? n(k, I) : k : k + (p ? "." + I : "[" + I + "]");
      y.set(e, g);
      var de = ny();
      de.set(Cc, y), sy(T, t(
        D,
        z,
        n,
        s,
        i,
        o,
        n === "comma" && d && Pt(v) ? null : a,
        c,
        u,
        p,
        f,
        h,
        l,
        d,
        m,
        de
      ));
    }
  }
  return T;
}, qS = function(e) {
  if (!e)
    return Ce;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || Ce.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Jn.default;
  if (typeof e.format < "u") {
    if (!NS.call(Jn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var s = Jn.formatters[n], i = Ce.filter;
  return (typeof e.filter == "function" || Pt(e.filter)) && (i = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Ce.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? Ce.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ce.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? Ce.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : Ce.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : Ce.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Ce.encodeValuesOnly,
    filter: i,
    format: n,
    formatter: s,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Ce.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Ce.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ce.strictNullHandling
  };
}, HS = function(t, e) {
  var r = t, n = qS(e), s, i;
  typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : Pt(n.filter) && (i = n.filter, s = i);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var a;
  e && e.arrayFormat in ph ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
  var c = ph[a];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = c === "comma" && e && e.commaRoundTrip;
  s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
  for (var p = ny(), f = 0; f < s.length; ++f) {
    var h = s[f];
    n.skipNulls && r[h] === null || sy(o, BS(
      r[h],
      h,
      c,
      u,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      p
    ));
  }
  var l = o.join(n.delimiter), d = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? d += "utf8=%26%2310003%3B&" : d += "utf8=%E2%9C%93&"), l.length > 0 ? d + l : "";
}, cn = ry, Au = Object.prototype.hasOwnProperty, GS = Array.isArray, we = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: cn.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, zS = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, iy = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, JS = "utf8=%26%2310003%3B", KS = "utf8=%E2%9C%93", WS = function(e, r) {
  var n = { __proto__: null }, s = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = s.split(r.delimiter, i), a = -1, c, u = r.charset;
  if (r.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === KS ? u = "utf-8" : o[c] === JS && (u = "iso-8859-1"), a = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== a) {
      var p = o[c], f = p.indexOf("]="), h = f === -1 ? p.indexOf("=") : f + 1, l, d;
      h === -1 ? (l = r.decoder(p, we.decoder, u, "key"), d = r.strictNullHandling ? null : "") : (l = r.decoder(p.slice(0, h), we.decoder, u, "key"), d = cn.maybeMap(
        iy(p.slice(h + 1), r),
        function(m) {
          return r.decoder(m, we.decoder, u, "value");
        }
      )), d && r.interpretNumericEntities && u === "iso-8859-1" && (d = zS(d)), p.indexOf("[]=") > -1 && (d = GS(d) ? [d] : d), Au.call(n, l) ? n[l] = cn.combine(n[l], d) : n[l] = d;
    }
  return n;
}, YS = function(t, e, r, n) {
  for (var s = n ? e : iy(e, r), i = t.length - 1; i >= 0; --i) {
    var o, a = t[i];
    if (a === "[]" && r.parseArrays)
      o = [].concat(s);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a, u = parseInt(c, 10);
      !r.parseArrays && c === "" ? o = { 0: s } : !isNaN(u) && a !== c && String(u) === c && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (o = [], o[u] = s) : c !== "__proto__" && (o[c] = s);
    }
    s = o;
  }
  return s;
}, XS = function(e, r, n, s) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, c = n.depth > 0 && o.exec(i), u = c ? i.slice(0, c.index) : i, p = [];
    if (u) {
      if (!n.plainObjects && Au.call(Object.prototype, u) && !n.allowPrototypes)
        return;
      p.push(u);
    }
    for (var f = 0; n.depth > 0 && (c = a.exec(i)) !== null && f < n.depth; ) {
      if (f += 1, !n.plainObjects && Au.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      p.push(c[1]);
    }
    return c && p.push("[" + i.slice(c.index) + "]"), YS(p, r, n, s);
  }
}, QS = function(e) {
  if (!e)
    return we;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? we.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? we.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : we.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : we.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : we.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : we.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : we.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : we.decoder,
    delimiter: typeof e.delimiter == "string" || cn.isRegExp(e.delimiter) ? e.delimiter : we.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : we.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : we.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : we.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : we.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : we.strictNullHandling
  };
}, ZS = function(t, e) {
  var r = QS(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? WS(t, r) : t, s = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), o = 0; o < i.length; ++o) {
    var a = i[o], c = XS(a, n[a], r, typeof t == "string");
    s = cn.merge(s, c, r);
  }
  return r.allowSparse === !0 ? s : cn.compact(s);
}, ew = HS, tw = ZS, rw = tf, nw = {
  formats: rw,
  parse: tw,
  stringify: ew
};
const Pu = /* @__PURE__ */ jr(nw);
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function oy(t) {
  return typeof t > "u" || t === null;
}
function sw(t) {
  return typeof t == "object" && t !== null;
}
function iw(t) {
  return Array.isArray(t) ? t : oy(t) ? [] : [t];
}
function ow(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function aw(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function cw(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var uw = oy, lw = sw, fw = iw, pw = aw, hw = cw, dw = ow, xe = {
  isNothing: uw,
  isObject: lw,
  toArray: fw,
  repeat: pw,
  isNegativeZero: hw,
  extend: dw
};
function ay(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function Qn(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = ay(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Qn.prototype = Object.create(Error.prototype);
Qn.prototype.constructor = Qn;
Qn.prototype.toString = function(e) {
  return this.name + ": " + ay(this, e);
};
var ke = Qn;
function Fc(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function Mc(t, e) {
  return xe.repeat(" ", e - t.length) + t;
}
function mw(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, u, p = Math.min(t.line + e.linesAfter, s.length).toString().length, f = e.maxLength - (e.indent + p + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    u = Fc(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      f
    ), a = xe.repeat(" ", e.indent) + Mc((t.line - c + 1).toString(), p) + " | " + u.str + `
` + a;
  for (u = Fc(t.buffer, n[o], s[o], t.position, f), a += xe.repeat(" ", e.indent) + Mc((t.line + 1).toString(), p) + " | " + u.str + `
`, a += xe.repeat("-", e.indent + p + 3 + u.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    u = Fc(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      f
    ), a += xe.repeat(" ", e.indent) + Mc((t.line + c + 1).toString(), p) + " | " + u.str + `
`;
  return a.replace(/\n$/, "");
}
var yw = mw, vw = [
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
], gw = [
  "scalar",
  "sequence",
  "mapping"
];
function bw(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(n) {
      e[String(n)] = r;
    });
  }), e;
}
function $w(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (vw.indexOf(r) === -1)
      throw new ke('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = bw(e.styleAliases || null), gw.indexOf(this.kind) === -1)
    throw new ke('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Te = $w;
function dh(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function xw() {
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
function ju(t) {
  return this.extend(t);
}
ju.prototype.extend = function(e) {
  var r = [], n = [];
  if (e instanceof Te)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  else
    throw new ke("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof Te))
      throw new ke("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new ke("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new ke("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(i) {
    if (!(i instanceof Te))
      throw new ke("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(ju.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = dh(s, "implicit"), s.compiledExplicit = dh(s, "explicit"), s.compiledTypeMap = xw(s.compiledImplicit, s.compiledExplicit), s;
};
var cy = ju, uy = new Te("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), ly = new Te("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), fy = new Te("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), py = new cy({
  explicit: [
    uy,
    ly,
    fy
  ]
});
function Sw(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function ww() {
  return null;
}
function Ow(t) {
  return t === null;
}
var hy = new Te("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Sw,
  construct: ww,
  predicate: Ow,
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
function Ew(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function Aw(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function Pw(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var dy = new Te("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Ew,
  construct: Aw,
  predicate: Pw,
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
function jw(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function _w(t) {
  return 48 <= t && t <= 55;
}
function Rw(t) {
  return 48 <= t && t <= 57;
}
function Tw(t) {
  if (t === null)
    return !1;
  var e = t.length, r = 0, n = !1, s;
  if (!e)
    return !1;
  if (s = t[r], (s === "-" || s === "+") && (s = t[++r]), s === "0") {
    if (r + 1 === e)
      return !0;
    if (s = t[++r], s === "b") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (s !== "0" && s !== "1")
            return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "x") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!jw(t.charCodeAt(r)))
            return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!_w(t.charCodeAt(r)))
            return !1;
          n = !0;
        }
      return n && s !== "_";
    }
  }
  if (s === "_")
    return !1;
  for (; r < e; r++)
    if (s = t[r], s !== "_") {
      if (!Rw(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function Iw(t) {
  var e = t, r = 1, n;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), n = e[0], (n === "-" || n === "+") && (n === "-" && (r = -1), e = e.slice(1), n = e[0]), e === "0")
    return 0;
  if (n === "0") {
    if (e[1] === "b")
      return r * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return r * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function Cw(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !xe.isNegativeZero(t);
}
var my = new Te("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Tw,
  construct: Iw,
  predicate: Cw,
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
}), Fw = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Mw(t) {
  return !(t === null || !Fw.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function Vw(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var Dw = /^[-+]?[0-9]+e/;
function Nw(t, e) {
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
  else if (xe.isNegativeZero(t))
    return "-0.0";
  return r = t.toString(10), Dw.test(r) ? r.replace("e", ".e") : r;
}
function Lw(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || xe.isNegativeZero(t));
}
var yy = new Te("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Mw,
  construct: Vw,
  predicate: Lw,
  represent: Nw,
  defaultStyle: "lowercase"
}), vy = py.extend({
  implicit: [
    hy,
    dy,
    my,
    yy
  ]
}), gy = vy, by = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), $y = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function kw(t) {
  return t === null ? !1 : by.exec(t) !== null || $y.exec(t) !== null;
}
function Uw(t) {
  var e, r, n, s, i, o, a, c = 0, u = null, p, f, h;
  if (e = by.exec(t), e === null && (e = $y.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (r = +e[1], n = +e[2] - 1, s = +e[3], !e[4])
    return new Date(Date.UTC(r, n, s));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (p = +e[10], f = +(e[11] || 0), u = (p * 60 + f) * 6e4, e[9] === "-" && (u = -u)), h = new Date(Date.UTC(r, n, s, i, o, a, c)), u && h.setTime(h.getTime() - u), h;
}
function Bw(t) {
  return t.toISOString();
}
var xy = new Te("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: kw,
  construct: Uw,
  instanceOf: Date,
  represent: Bw
});
function qw(t) {
  return t === "<<" || t === null;
}
var Sy = new Te("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: qw
}), rf = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Hw(t) {
  if (t === null)
    return !1;
  var e, r, n = 0, s = t.length, i = rf;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0)
        return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function Gw(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = rf, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function zw(t) {
  var e = "", r = 0, n, s, i = t.length, o = rf;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function Jw(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var wy = new Te("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Hw,
  construct: Gw,
  predicate: Jw,
  represent: zw
}), Kw = Object.prototype.hasOwnProperty, Ww = Object.prototype.toString;
function Yw(t) {
  if (t === null)
    return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, Ww.call(s) !== "[object Object]")
      return !1;
    for (i in s)
      if (Kw.call(s, i))
        if (!o)
          o = !0;
        else
          return !1;
    if (!o)
      return !1;
    if (e.indexOf(i) === -1)
      e.push(i);
    else
      return !1;
  }
  return !0;
}
function Xw(t) {
  return t !== null ? t : [];
}
var Oy = new Te("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Yw,
  construct: Xw
}), Qw = Object.prototype.toString;
function Zw(t) {
  if (t === null)
    return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], Qw.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1))
      return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function eO(t) {
  if (t === null)
    return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var Ey = new Te("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Zw,
  construct: eO
}), tO = Object.prototype.hasOwnProperty;
function rO(t) {
  if (t === null)
    return !0;
  var e, r = t;
  for (e in r)
    if (tO.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function nO(t) {
  return t !== null ? t : {};
}
var Ay = new Te("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: rO,
  construct: nO
}), nf = gy.extend({
  implicit: [
    xy,
    Sy
  ],
  explicit: [
    wy,
    Oy,
    Ey,
    Ay
  ]
}), nr = Object.prototype.hasOwnProperty, Vi = 1, Py = 2, jy = 3, Di = 4, Vc = 1, sO = 2, mh = 3, iO = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, oO = /[\x85\u2028\u2029]/, aO = /[,\[\]\{\}]/, _y = /^(?:!|!!|![a-z\-]+!)$/i, Ry = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function yh(t) {
  return Object.prototype.toString.call(t);
}
function gt(t) {
  return t === 10 || t === 13;
}
function xr(t) {
  return t === 9 || t === 32;
}
function Be(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Yr(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function cO(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function uO(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function lO(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function vh(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function fO(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var Ty = new Array(256), Iy = new Array(256);
for (var qr = 0; qr < 256; qr++)
  Ty[qr] = vh(qr) ? 1 : 0, Iy[qr] = vh(qr);
function pO(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || nf, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Cy(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = yw(r), new ke(e, r);
}
function V(t, e) {
  throw Cy(t, e);
}
function Ni(t, e) {
  t.onWarning && t.onWarning.call(null, Cy(t, e));
}
var gh = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && V(e, "duplication of %YAML directive"), n.length !== 1 && V(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && V(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && V(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Ni(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && V(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], _y.test(s) || V(e, "ill-formed tag handle (first argument) of the TAG directive"), nr.call(e.tagMap, s) && V(e, 'there is a previously declared suffix for "' + s + '" tag handle'), Ry.test(i) || V(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      V(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function rr(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || V(t, "expected valid JSON character");
    else
      iO.test(a) && V(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function bh(t, e, r, n) {
  var s, i, o, a;
  for (xe.isObject(r) || V(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], nr.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function Xr(t, e, r, n, s, i, o, a, c) {
  var u, p;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), u = 0, p = s.length; u < p; u += 1)
      Array.isArray(s[u]) && V(t, "nested arrays are not supported inside keys"), typeof s == "object" && yh(s[u]) === "[object Object]" && (s[u] = "[object Object]");
  if (typeof s == "object" && yh(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (u = 0, p = i.length; u < p; u += 1)
        bh(t, e, i[u], r);
    else
      bh(t, e, i, r);
  else
    !t.json && !nr.call(r, s) && nr.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, V(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function sf(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : V(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function ge(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; xr(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (gt(s))
      for (sf(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && Ni(t, "deficient indentation"), n;
}
function na(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || Be(r)));
}
function of(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += xe.repeat(`
`, e - 1));
}
function hO(t, e, r) {
  var n, s, i, o, a, c, u, p, f = t.kind, h = t.result, l;
  if (l = t.input.charCodeAt(t.position), Be(l) || Yr(l) || l === 35 || l === 38 || l === 42 || l === 33 || l === 124 || l === 62 || l === 39 || l === 34 || l === 37 || l === 64 || l === 96 || (l === 63 || l === 45) && (s = t.input.charCodeAt(t.position + 1), Be(s) || r && Yr(s)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; l !== 0; ) {
    if (l === 58) {
      if (s = t.input.charCodeAt(t.position + 1), Be(s) || r && Yr(s))
        break;
    } else if (l === 35) {
      if (n = t.input.charCodeAt(t.position - 1), Be(n))
        break;
    } else {
      if (t.position === t.lineStart && na(t) || r && Yr(l))
        break;
      if (gt(l))
        if (c = t.line, u = t.lineStart, p = t.lineIndent, ge(t, !1, -1), t.lineIndent >= e) {
          a = !0, l = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = u, t.lineIndent = p;
          break;
        }
    }
    a && (rr(t, i, o, !1), of(t, t.line - c), i = o = t.position, a = !1), xr(l) || (o = t.position + 1), l = t.input.charCodeAt(++t.position);
  }
  return rr(t, i, o, !1), t.result ? !0 : (t.kind = f, t.result = h, !1);
}
function dO(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (rr(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else
      gt(r) ? (rr(t, n, s, !0), of(t, ge(t, !1, e)), n = s = t.position) : t.position === t.lineStart && na(t) ? V(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  V(t, "unexpected end of the stream within a single quoted scalar");
}
function mO(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return rr(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (rr(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), gt(a))
        ge(t, !1, e);
      else if (a < 256 && Ty[a])
        t.result += Iy[a], t.position++;
      else if ((o = uO(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = cO(a)) >= 0 ? i = (i << 4) + o : V(t, "expected hexadecimal character");
        t.result += fO(i), t.position++;
      } else
        V(t, "unknown escape sequence");
      r = n = t.position;
    } else
      gt(a) ? (rr(t, r, n, !0), of(t, ge(t, !1, e)), r = n = t.position) : t.position === t.lineStart && na(t) ? V(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  V(t, "unexpected end of the stream within a double quoted scalar");
}
function yO(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, u, p, f, h, l, d = /* @__PURE__ */ Object.create(null), m, y, v, b;
  if (b = t.input.charCodeAt(t.position), b === 91)
    p = 93, l = !1, a = [];
  else if (b === 123)
    p = 125, l = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), b = t.input.charCodeAt(++t.position); b !== 0; ) {
    if (ge(t, !0, e), b = t.input.charCodeAt(t.position), b === p)
      return t.position++, t.tag = o, t.anchor = c, t.kind = l ? "mapping" : "sequence", t.result = a, !0;
    r ? b === 44 && V(t, "expected the node content, but found ','") : V(t, "missed comma between flow collection entries"), y = m = v = null, f = h = !1, b === 63 && (u = t.input.charCodeAt(t.position + 1), Be(u) && (f = h = !0, t.position++, ge(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, un(t, e, Vi, !1, !0), y = t.tag, m = t.result, ge(t, !0, e), b = t.input.charCodeAt(t.position), (h || t.line === n) && b === 58 && (f = !0, b = t.input.charCodeAt(++t.position), ge(t, !0, e), un(t, e, Vi, !1, !0), v = t.result), l ? Xr(t, a, d, y, m, v, n, s, i) : f ? a.push(Xr(t, null, d, y, m, v, n, s, i)) : a.push(m), ge(t, !0, e), b = t.input.charCodeAt(t.position), b === 44 ? (r = !0, b = t.input.charCodeAt(++t.position)) : r = !1;
  }
  V(t, "unexpected end of the stream within a flow collection");
}
function vO(t, e) {
  var r, n, s = Vc, i = !1, o = !1, a = e, c = 0, u = !1, p, f;
  if (f = t.input.charCodeAt(t.position), f === 124)
    n = !1;
  else if (f === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; f !== 0; )
    if (f = t.input.charCodeAt(++t.position), f === 43 || f === 45)
      Vc === s ? s = f === 43 ? mh : sO : V(t, "repeat of a chomping mode identifier");
    else if ((p = lO(f)) >= 0)
      p === 0 ? V(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? V(t, "repeat of an indentation width identifier") : (a = e + p - 1, o = !0);
    else
      break;
  if (xr(f)) {
    do
      f = t.input.charCodeAt(++t.position);
    while (xr(f));
    if (f === 35)
      do
        f = t.input.charCodeAt(++t.position);
      while (!gt(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (sf(t), t.lineIndent = 0, f = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && f === 32; )
      t.lineIndent++, f = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), gt(f)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === mh ? t.result += xe.repeat(`
`, i ? 1 + c : c) : s === Vc && i && (t.result += `
`);
      break;
    }
    for (n ? xr(f) ? (u = !0, t.result += xe.repeat(`
`, i ? 1 + c : c)) : u ? (u = !1, t.result += xe.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += xe.repeat(`
`, c) : t.result += xe.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !gt(f) && f !== 0; )
      f = t.input.charCodeAt(++t.position);
    rr(t, r, t.position, !1);
  }
  return !0;
}
function $h(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, V(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !Be(o)))); ) {
    if (a = !0, t.position++, ge(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, un(t, e, jy, !1, !0), i.push(t.result), ge(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      V(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function gO(t, e, r) {
  var n, s, i, o, a, c, u = t.tag, p = t.anchor, f = {}, h = /* @__PURE__ */ Object.create(null), l = null, d = null, m = null, y = !1, v = !1, b;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = f), b = t.input.charCodeAt(t.position); b !== 0; ) {
    if (!y && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, V(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, (b === 63 || b === 58) && Be(n))
      b === 63 ? (y && (Xr(t, f, h, l, d, null, o, a, c), l = d = m = null), v = !0, y = !0, s = !0) : y ? (y = !1, s = !0) : V(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, b = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !un(t, r, Py, !1, !0))
        break;
      if (t.line === i) {
        for (b = t.input.charCodeAt(t.position); xr(b); )
          b = t.input.charCodeAt(++t.position);
        if (b === 58)
          b = t.input.charCodeAt(++t.position), Be(b) || V(t, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Xr(t, f, h, l, d, null, o, a, c), l = d = m = null), v = !0, y = !1, s = !1, l = t.tag, d = t.result;
        else if (v)
          V(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = u, t.anchor = p, !0;
      } else if (v)
        V(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = u, t.anchor = p, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (y && (o = t.line, a = t.lineStart, c = t.position), un(t, e, Di, !0, s) && (y ? d = t.result : m = t.result), y || (Xr(t, f, h, l, d, m, o, a, c), l = d = m = null), ge(t, !0, -1), b = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && b !== 0)
      V(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return y && Xr(t, f, h, l, d, null, o, a, c), v && (t.tag = u, t.anchor = p, t.kind = "mapping", t.result = f), v;
}
function bO(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33)
    return !1;
  if (t.tag !== null && V(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : V(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Be(o); )
      o === 33 && (n ? V(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), _y.test(s) || V(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), aO.test(i) && V(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !Ry.test(i) && V(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    V(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : nr.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : V(t, 'undeclared tag handle "' + s + '"'), !0;
}
function $O(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38)
    return !1;
  for (t.anchor !== null && V(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !Be(r) && !Yr(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && V(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function xO(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42)
    return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !Be(n) && !Yr(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && V(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), nr.call(t.anchorMap, r) || V(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], ge(t, !0, -1), !0;
}
function un(t, e, r, n, s) {
  var i, o, a, c = 1, u = !1, p = !1, f, h, l, d, m, y;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = Di === r || jy === r, n && ge(t, !0, -1) && (u = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; bO(t) || $O(t); )
      ge(t, !0, -1) ? (u = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = u || s), (c === 1 || Di === r) && (Vi === r || Py === r ? m = e : m = e + 1, y = t.position - t.lineStart, c === 1 ? a && ($h(t, y) || gO(t, y, m)) || yO(t, m) ? p = !0 : (o && vO(t, m) || dO(t, m) || mO(t, m) ? p = !0 : xO(t) ? (p = !0, (t.tag !== null || t.anchor !== null) && V(t, "alias node should not have any properties")) : hO(t, m, Vi === r) && (p = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (p = a && $h(t, y))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && V(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), f = 0, h = t.implicitTypes.length; f < h; f += 1)
      if (d = t.implicitTypes[f], d.resolve(t.result)) {
        t.result = d.construct(t.result), t.tag = d.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (nr.call(t.typeMap[t.kind || "fallback"], t.tag))
      d = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (d = null, l = t.typeMap.multi[t.kind || "fallback"], f = 0, h = l.length; f < h; f += 1)
        if (t.tag.slice(0, l[f].tag.length) === l[f].tag) {
          d = l[f];
          break;
        }
    d || V(t, "unknown tag !<" + t.tag + ">"), t.result !== null && d.kind !== t.kind && V(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + d.kind + '", not "' + t.kind + '"'), d.resolve(t.result, t.tag) ? (t.result = d.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : V(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || p;
}
function SO(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (ge(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !Be(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && V(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; xr(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !gt(o));
        break;
      }
      if (gt(o))
        break;
      for (r = t.position; o !== 0 && !Be(o); )
        o = t.input.charCodeAt(++t.position);
      s.push(t.input.slice(r, t.position));
    }
    o !== 0 && sf(t), nr.call(gh, n) ? gh[n](t, n, s) : Ni(t, 'unknown document directive "' + n + '"');
  }
  if (ge(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, ge(t, !0, -1)) : i && V(t, "directives end mark is expected"), un(t, t.lineIndent - 1, Di, !1, !0), ge(t, !0, -1), t.checkLineBreaks && oO.test(t.input.slice(e, t.position)) && Ni(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && na(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, ge(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    V(t, "end of the stream or a document separator is expected");
  else
    return;
}
function Fy(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new pO(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, V(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    SO(r);
  return r.documents;
}
function wO(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = Fy(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function OO(t, e) {
  var r = Fy(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new ke("expected a single document in the stream, but found more");
  }
}
var EO = wO, AO = OO, My = {
  loadAll: EO,
  load: AO
}, Vy = Object.prototype.toString, Dy = Object.prototype.hasOwnProperty, af = 65279, PO = 9, Zn = 10, jO = 13, _O = 32, RO = 33, TO = 34, _u = 35, IO = 37, CO = 38, FO = 39, MO = 42, Ny = 44, VO = 45, Li = 58, DO = 61, NO = 62, LO = 63, kO = 64, Ly = 91, ky = 93, UO = 96, Uy = 123, BO = 124, By = 125, Ve = {};
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
var qO = [
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
], HO = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function GO(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null)
    return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && Dy.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function zO(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new ke("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + xe.repeat("0", n - e.length) + e;
}
var JO = 1, es = 2;
function KO(t) {
  this.schema = t.schema || nf, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = xe.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = GO(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? es : JO, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function xh(t, e) {
  for (var r = xe.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function Ru(t, e) {
  return `
` + xe.repeat(" ", t.indent * e);
}
function WO(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function ki(t) {
  return t === _O || t === PO;
}
function ts(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== af || 65536 <= t && t <= 1114111;
}
function Sh(t) {
  return ts(t) && t !== af && t !== jO && t !== Zn;
}
function wh(t, e, r) {
  var n = Sh(t), s = n && !ki(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== Ny && t !== Ly && t !== ky && t !== Uy && t !== By) && t !== _u && !(e === Li && !s) || Sh(e) && !ki(e) && t === _u || e === Li && s
  );
}
function YO(t) {
  return ts(t) && t !== af && !ki(t) && t !== VO && t !== LO && t !== Li && t !== Ny && t !== Ly && t !== ky && t !== Uy && t !== By && t !== _u && t !== CO && t !== MO && t !== RO && t !== BO && t !== DO && t !== NO && t !== FO && t !== TO && t !== IO && t !== kO && t !== UO;
}
function XO(t) {
  return !ki(t) && t !== Li;
}
function qn(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function qy(t) {
  var e = /^\n* /;
  return e.test(t);
}
var Hy = 1, Tu = 2, Gy = 3, zy = 4, Wr = 5;
function QO(t, e, r, n, s, i, o, a) {
  var c, u = 0, p = null, f = !1, h = !1, l = n !== -1, d = -1, m = YO(qn(t, 0)) && XO(qn(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = qn(t, c), !ts(u))
        return Wr;
      m = m && wh(u, p, a), p = u;
    }
  else {
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = qn(t, c), u === Zn)
        f = !0, l && (h = h || // Foldable line = too long, and not more-indented.
        c - d - 1 > n && t[d + 1] !== " ", d = c);
      else if (!ts(u))
        return Wr;
      m = m && wh(u, p, a), p = u;
    }
    h = h || l && c - d - 1 > n && t[d + 1] !== " ";
  }
  return !f && !h ? m && !o && !s(t) ? Hy : i === es ? Wr : Tu : r > 9 && qy(t) ? Wr : o ? i === es ? Wr : Tu : h ? zy : Gy;
}
function ZO(t, e, r, n, s) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === es ? '""' : "''";
    if (!t.noCompatMode && (qO.indexOf(e) !== -1 || HO.test(e)))
      return t.quotingType === es ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(u) {
      return WO(t, u);
    }
    switch (QO(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !n,
      s
    )) {
      case Hy:
        return e;
      case Tu:
        return "'" + e.replace(/'/g, "''") + "'";
      case Gy:
        return "|" + Oh(e, t.indent) + Eh(xh(e, i));
      case zy:
        return ">" + Oh(e, t.indent) + Eh(xh(eE(e, o), i));
      case Wr:
        return '"' + tE(e) + '"';
      default:
        throw new ke("impossible error: invalid scalar style");
    }
  }();
}
function Oh(t, e) {
  var r = qy(t) ? String(e) : "", n = t[t.length - 1] === `
`, s = n && (t[t.length - 2] === `
` || t === `
`), i = s ? "+" : n ? "" : "-";
  return r + i + `
`;
}
function Eh(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function eE(t, e) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var u = t.indexOf(`
`);
    return u = u !== -1 ? u : t.length, r.lastIndex = u, Ah(t.slice(0, u), e);
  }(), s = t[0] === `
` || t[0] === " ", i, o; o = r.exec(t); ) {
    var a = o[1], c = o[2];
    i = c[0] === " ", n += a + (!s && !i && c !== "" ? `
` : "") + Ah(c, e), s = i;
  }
  return n;
}
function Ah(t, e) {
  if (t === "" || t[0] === " ")
    return t;
  for (var r = / [^ ]/g, n, s = 0, i, o = 0, a = 0, c = ""; n = r.exec(t); )
    a = n.index, a - s > e && (i = o > s ? o : a, c += `
` + t.slice(s, i), s = i + 1), o = a;
  return c += `
`, t.length - s > e && o > s ? c += t.slice(s, o) + `
` + t.slice(o + 1) : c += t.slice(s), c.slice(1);
}
function tE(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = qn(t, s), n = Ve[r], !n && ts(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || zO(r);
  return e;
}
function rE(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (Ft(t, e, a, !1, !1) || typeof a > "u" && Ft(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function Ph(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (Ft(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Ft(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += Ru(t, e)), t.dump && Zn === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function nE(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, u, p;
  for (o = 0, a = i.length; o < a; o += 1)
    p = "", n !== "" && (p += ", "), t.condenseFlow && (p += '"'), c = i[o], u = r[c], t.replacer && (u = t.replacer.call(r, c, u)), Ft(t, e, c, !1, !1) && (t.dump.length > 1024 && (p += "? "), p += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Ft(t, e, u, !1, !1) && (p += t.dump, n += p));
  t.tag = s, t.dump = "{" + n + "}";
}
function sE(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, u, p, f, h;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new ke("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    h = "", (!n || s !== "") && (h += Ru(t, e)), u = o[a], p = r[u], t.replacer && (p = t.replacer.call(r, u, p)), Ft(t, e + 1, u, !0, !0, !0) && (f = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, f && (t.dump && Zn === t.dump.charCodeAt(0) ? h += "?" : h += "? "), h += t.dump, f && (h += Ru(t, e)), Ft(t, e + 1, p, !0, f) && (t.dump && Zn === t.dump.charCodeAt(0) ? h += ":" : h += ": ", h += t.dump, s += h));
  t.tag = i, t.dump = s || "{}";
}
function jh(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, Vy.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (Dy.call(a.represent, c))
          n = a.represent[c](e, c);
        else
          throw new ke("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = n;
      }
      return !0;
    }
  return !1;
}
function Ft(t, e, r, n, s, i, o) {
  t.tag = null, t.dump = r, jh(t, r, !1) || jh(t, r, !0);
  var a = Vy.call(t.dump), c = n, u;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var p = a === "[object Object]" || a === "[object Array]", f, h;
  if (p && (f = t.duplicates.indexOf(r), h = f !== -1), (t.tag !== null && t.tag !== "?" || h || t.indent !== 2 && e > 0) && (s = !1), h && t.usedDuplicates[f])
    t.dump = "*ref_" + f;
  else {
    if (p && h && !t.usedDuplicates[f] && (t.usedDuplicates[f] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (sE(t, e, t.dump, s), h && (t.dump = "&ref_" + f + t.dump)) : (nE(t, e, t.dump), h && (t.dump = "&ref_" + f + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Ph(t, e - 1, t.dump, s) : Ph(t, e, t.dump, s), h && (t.dump = "&ref_" + f + t.dump)) : (rE(t, e, t.dump), h && (t.dump = "&ref_" + f + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && ZO(t, t.dump, e, i, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (t.skipInvalid)
        return !1;
      throw new ke("unacceptable kind of an object to dump " + a);
    }
    t.tag !== null && t.tag !== "?" && (u = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? u = "!" + u : u.slice(0, 18) === "tag:yaml.org,2002:" ? u = "!!" + u.slice(18) : u = "!<" + u + ">", t.dump = u + " " + t.dump);
  }
  return !0;
}
function iE(t, e) {
  var r = [], n = [], s, i;
  for (Iu(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function Iu(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        Iu(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        Iu(t[n[s]], e, r);
}
function oE(t, e) {
  e = e || {};
  var r = new KO(e);
  r.noRefs || iE(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), Ft(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var aE = oE, cE = {
  dump: aE
};
function cf(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var uE = Te, lE = cy, fE = py, Ui = vy, pE = gy, hE = nf, dE = My.load, mE = My.loadAll, yE = cE.dump, vE = ke, gE = {
  binary: wy,
  float: yy,
  map: fy,
  null: hy,
  pairs: Ey,
  set: Ay,
  timestamp: xy,
  bool: dy,
  int: my,
  merge: Sy,
  omap: Oy,
  seq: ly,
  str: uy
}, bE = cf("safeLoad", "load"), $E = cf("safeLoadAll", "loadAll"), xE = cf("safeDump", "dump"), ln = {
  Type: uE,
  Schema: lE,
  FAILSAFE_SCHEMA: fE,
  JSON_SCHEMA: Ui,
  CORE_SCHEMA: pE,
  DEFAULT_SCHEMA: hE,
  load: dE,
  loadAll: mE,
  dump: yE,
  YAMLException: vE,
  types: gE,
  safeLoad: bE,
  safeLoadAll: $E,
  safeDump: xE
};
const {
  fetch: SE,
  Response: wE,
  Headers: OE,
  Request: EE,
  FormData: AE,
  File: PE,
  Blob: jE
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = SE);
typeof globalThis.Headers > "u" && (globalThis.Headers = OE);
typeof globalThis.Request > "u" && (globalThis.Request = EE);
typeof globalThis.Response > "u" && (globalThis.Response = wE);
typeof globalThis.FormData > "u" && (globalThis.FormData = AE);
typeof globalThis.File > "u" && (globalThis.File = PE);
typeof globalThis.Blob > "u" && (globalThis.Blob = jE);
const _E = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, RE = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function Jy(t, e = "reserved") {
  return [...t].map((r) => {
    if (RE(r) || _E(r) && e === "unsafe")
      return r;
    const n = new TextEncoder();
    return Array.from(n.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function uf(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? TE(t) : typeof e == "object" ? IE(t) : CE(t);
}
function Ee(t, e = !1) {
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && t.length > 0 ? Jy(t, e) : t;
}
function TE({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  if (r === "simple")
    return e.map((i) => Ee(i, s)).join(",");
  if (r === "label")
    return `.${e.map((i) => Ee(i, s)).join(".")}`;
  if (r === "matrix")
    return e.map((i) => Ee(i, s)).reduce((i, o) => !i || n ? `${i || ""};${t}=${o}` : `${i},${o}`, "");
  if (r === "form") {
    const i = n ? `&${t}=` : ",";
    return e.map((o) => Ee(o, s)).join(i);
  }
  if (r === "spaceDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => Ee(o, s)).join(` ${i}`);
  }
  if (r === "pipeDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => Ee(o, s)).join(`|${i}`);
  }
}
function IE({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  const i = Object.keys(e);
  if (r === "simple")
    return i.reduce((o, a) => {
      const c = Ee(e[a], s), u = n ? "=" : ",";
      return `${o ? `${o},` : ""}${a}${u}${c}`;
    }, "");
  if (r === "label")
    return i.reduce((o, a) => {
      const c = Ee(e[a], s), u = n ? "=" : ".";
      return `${o ? `${o}.` : "."}${a}${u}${c}`;
    }, "");
  if (r === "matrix" && n)
    return i.reduce((o, a) => {
      const c = Ee(e[a], s);
      return `${o ? `${o};` : ";"}${a}=${c}`;
    }, "");
  if (r === "matrix")
    return i.reduce((o, a) => {
      const c = Ee(e[a], s);
      return `${o ? `${o},` : `;${t}=`}${a},${c}`;
    }, "");
  if (r === "form")
    return i.reduce((o, a) => {
      const c = Ee(e[a], s);
      return `${o ? `${o}${n ? "&" : ","}` : ""}${a}${n ? "=" : ","}${c}`;
    }, "");
}
function CE({
  key: t,
  value: e,
  style: r,
  escape: n
}) {
  if (r === "simple")
    return Ee(e, n);
  if (r === "label")
    return `.${Ee(e, n)}`;
  if (r === "matrix")
    return `;${t}=${Ee(e, n)}`;
  if (r === "form" || r === "deepObject")
    return Ee(e, n);
}
const Cu = {
  serializeRes: Ky,
  mergeInQueryOrForm: Qy
};
async function ms(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, Cu.mergeInQueryOrForm(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await Cu.serializeRes(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
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
const FE = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function ME(t, e) {
  return e && (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0) ? JSON.parse(t) : ln.load(t);
}
function Ky(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: Wy(t.headers)
  }, s = n.headers["content-type"], i = r || FE(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = ME(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
function VE(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function Wy(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = VE(n), e), {});
}
function lf(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function Yy(t, e) {
  return Array.isArray(t) && t.some((r) => lf(r, e));
}
const DE = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, NE = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
class Fu extends File {
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
function Xy(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (p) => p.toString() : (p) => encodeURIComponent(p), u = c(t);
  if (typeof a > "u" && s)
    return [[u, ""]];
  if (lf(a) || Yy(a))
    return [[u, a]];
  if (i)
    return _h(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((p) => p !== "undefined")) {
      const {
        style: p,
        explode: f,
        allowReserved: h
      } = o;
      return _h(t, a, r, {
        style: p,
        explode: f,
        allowReserved: h
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const h = typeof a == "string" ? a : JSON.stringify(a), l = c(h), d = new Fu(l, "blob", {
          type: o.contentType
        });
        return [[u, d]];
      }
      const p = c(String(a)), f = new Fu(p, "blob", {
        type: o.contentType
      });
      return [[u, f]];
    }
    return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) && a.every((p) => typeof p != "object") ? [[u, a.map(c).join(",")]] : [[u, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) ? n === "multi" ? [[u, a.map(c)]] : [[u, a.map(c).join(NE[n || "csv"])]] : [[u, ""]];
}
function _h(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (u) => Ee(u, o), c = r ? (u) => u : (u) => a(u);
  if (typeof e == "string")
    try {
      e = JSON.parse(e);
    } catch {
    }
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(DE[s])]] : s === "deepObject" ? Object.keys(e).map((u) => [c(`${t}[${u}]`), a(e[u])]) : i ? Object.keys(e).map((u) => [c(u), a(e[u])]) : [[c(t), Object.keys(e).map((u) => [`${c(u)},${a(e[u])}`]).join(",")]];
}
function LE(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of Xy(r, n, !0))
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
function Rh(t) {
  if (typeof t == "string")
    try {
      t = JSON.parse(t), Object.entries(t).forEach(([r, n]) => {
        typeof n == "object" && !Array.isArray(n) && (t[r] = JSON.stringify(n));
      });
    } catch {
      return Ee(t, "reserved");
    }
  const e = Object.keys(t).reduce((r, n) => {
    for (const [s, i] of Xy(n, t[n]))
      i instanceof Fu ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return Pu.stringify(e, {
    encode: !1,
    indices: !1
  }) || "";
}
function Qy(t = {}) {
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
      return lf(c) || Yy(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = LE(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = Rh(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const u = Pu.parse(o);
      Object.keys(r).forEach((f) => delete u[f]), a = Pu.stringify(u, {
        encode: !0
      });
    }
    const c = s(a, Rh(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
function kE(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), Cu.mergeInQueryOrForm(n), n = e(n), r(t(n)));
}
function Zy(t, e = {}) {
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
      Accept: Lm
    },
    credentials: s
  }).then((o) => o.body);
}
const ff = (t) => {
  var e, r;
  const {
    baseDoc: n,
    url: s
  } = t, i = (e = n ?? s) !== null && e !== void 0 ? e : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(i, globalThis.document.baseURI)) : i;
}, ev = (t) => {
  const {
    fetch: e,
    http: r
  } = t;
  return e || r || ms;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var UE = /* @__PURE__ */ function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
      n.__proto__ = s;
    } || function(n, s) {
      for (var i in s)
        s.hasOwnProperty(i) && (n[i] = s[i]);
    }, t(e, r);
  };
  return function(e, r) {
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), BE = Object.prototype.hasOwnProperty;
function Mu(t, e) {
  return BE.call(t, e);
}
function Vu(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var n = [];
  for (var s in t)
    Mu(t, s) && n.push(s);
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
function Du(t) {
  for (var e = 0, r = t.length, n; e < r; ) {
    if (n = t.charCodeAt(e), n >= 48 && n <= 57) {
      e++;
      continue;
    }
    return !1;
  }
  return !0;
}
function dr(t) {
  return t.indexOf("/") === -1 && t.indexOf("~") === -1 ? t : t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function tv(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Nu(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (Nu(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = Vu(t), s = n.length, i = 0; i < s; i++)
        if (Nu(t[n[i]]))
          return !0;
    }
  }
  return !1;
}
function Th(t, e) {
  var r = [t];
  for (var n in e) {
    var s = typeof e[n] == "object" ? JSON.stringify(e[n], null, 2) : e[n];
    typeof s < "u" && r.push(n + ": " + s);
  }
  return r.join(`
`);
}
var rv = (
  /** @class */
  function(t) {
    UE(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, Th(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = Th(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  }(Error)
), ye = rv, qE = ze, Qr = {
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
    var n = rs(r, this.path);
    n && (n = ze(n));
    var s = Sr(r, { op: "remove", path: this.from }).removed;
    return Sr(r, { op: "add", path: this.path, value: s }), { newDocument: r, removed: n };
  },
  copy: function(t, e, r) {
    var n = rs(r, this.from);
    return Sr(r, { op: "add", path: this.path, value: ze(n) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: ns(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, HE = {
  add: function(t, e, r) {
    return Du(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
  },
  remove: function(t, e, r) {
    var n = t.splice(e, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(t, e, r) {
    var n = t[e];
    return t[e] = this.value, { newDocument: r, removed: n };
  },
  move: Qr.move,
  copy: Qr.copy,
  test: Qr.test,
  _get: Qr._get
};
function rs(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return Sr(t, r), r.value;
}
function Sr(t, e, r, n, s, i) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : Bi(e, 0)), e.path === "") {
    var o = { newDocument: t };
    if (e.op === "add")
      return o.newDocument = e.value, o;
    if (e.op === "replace")
      return o.newDocument = e.value, o.removed = t, o;
    if (e.op === "move" || e.op === "copy")
      return o.newDocument = rs(t, e.from), e.op === "move" && (o.removed = t), o;
    if (e.op === "test") {
      if (o.test = ns(t, e.value), o.test === !1)
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
    n || (t = ze(t));
    var a = e.path || "", c = a.split("/"), u = t, p = 1, f = c.length, h = void 0, l = void 0, d = void 0;
    for (typeof r == "function" ? d = r : d = Bi; ; ) {
      if (l = c[p], l && l.indexOf("~") != -1 && (l = tv(l)), s && (l == "__proto__" || l == "prototype" && p > 0 && c[p - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && h === void 0 && (u[l] === void 0 ? h = c.slice(0, p).join("/") : p == f - 1 && (h = e.path), h !== void 0 && d(e, 0, t, h)), p++, Array.isArray(u)) {
        if (l === "-")
          l = u.length;
        else {
          if (r && !Du(l))
            throw new ye("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          Du(l) && (l = ~~l);
        }
        if (p >= f) {
          if (r && e.op === "add" && l > u.length)
            throw new ye("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = HE[e.op].call(e, u, l, t);
          if (o.test === !1)
            throw new ye("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (p >= f) {
        var o = Qr[e.op].call(e, u, l, t);
        if (o.test === !1)
          throw new ye("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (u = u[l], r && p < f && (!u || typeof u != "object"))
        throw new ye("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function er(t, e, r, n, s) {
  if (n === void 0 && (n = !0), s === void 0 && (s = !0), r && !Array.isArray(e))
    throw new ye("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (t = ze(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = Sr(t, e[o], r, !0, s, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function GE(t, e, r) {
  var n = Sr(t, e);
  if (n.test === !1)
    throw new ye("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function Bi(t, e, r, n) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new ye("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (Qr[t.op]) {
    if (typeof t.path != "string")
      throw new ye("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new ye('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new ye("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new ye("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && Nu(t.value))
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
        var o = { op: "_get", path: t.from, value: void 0 }, a = nv([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new ye("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else
    throw new ye("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function nv(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new ye("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      er(ze(e), ze(t), r || !0);
    else {
      r = r || Bi;
      for (var n = 0; n < t.length; n++)
        r(t[n], n, e, void 0);
    }
  } catch (s) {
    if (s instanceof ye)
      return s;
    throw s;
  }
}
function ns(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    var r = Array.isArray(t), n = Array.isArray(e), s, i, o;
    if (r && n) {
      if (i = t.length, i != e.length)
        return !1;
      for (s = i; s-- !== 0; )
        if (!ns(t[s], e[s]))
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
      if (o = a[s], !ns(t[o], e[o]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
const zE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: ye,
  _areEquals: ns,
  applyOperation: Sr,
  applyPatch: er,
  applyReducer: GE,
  deepClone: qE,
  getValueByPointer: rs,
  validate: nv,
  validator: Bi
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var pf = /* @__PURE__ */ new WeakMap(), JE = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  }()
), KE = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  }()
);
function WE(t) {
  return pf.get(t);
}
function YE(t, e) {
  return t.observers.get(e);
}
function XE(t, e) {
  t.observers.delete(e.callback);
}
function QE(t, e) {
  e.unobserve();
}
function ZE(t, e) {
  var r = [], n, s = WE(t);
  if (!s)
    s = new JE(t), pf.set(t, s);
  else {
    var i = YE(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = ze(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      Lu(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    Lu(n), clearTimeout(n.next), XE(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new KE(e, n)), n;
}
function Lu(t, e) {
  e === void 0 && (e = !1);
  var r = pf.get(t.object);
  hf(r.value, t.object, t.patches, "", e), t.patches.length && er(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function hf(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = Vu(e), o = Vu(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var u = o[c], p = t[u];
      if (Mu(e, u) && !(e[u] === void 0 && p !== void 0 && Array.isArray(e) === !1)) {
        var f = e[u];
        typeof p == "object" && p != null && typeof f == "object" && f != null && Array.isArray(p) === Array.isArray(f) ? hf(p, f, r, n + "/" + dr(u), s) : p !== f && (s && r.push({ op: "test", path: n + "/" + dr(u), value: ze(p) }), r.push({ op: "replace", path: n + "/" + dr(u), value: ze(f) }));
      } else
        Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + dr(u), value: ze(p) }), r.push({ op: "remove", path: n + "/" + dr(u) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var u = i[c];
        !Mu(t, u) && e[u] !== void 0 && r.push({ op: "add", path: n + "/" + dr(u), value: ze(e[u]) });
      }
  }
}
function e0(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return hf(t, e, n, "", r), n;
}
const t0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: e0,
  generate: Lu,
  observe: ZE,
  unobserve: QE
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, zE, t0, {
  JsonPatchError: rv,
  deepClone: ze,
  escapePathComponent: dr,
  unescapePathComponent: tv
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
function ss(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? fn(c0(t), t, e) : t;
}
function u0(t, e, r) {
  return t.concat(e).map(function(n) {
    return ss(n, r);
  });
}
function l0(t, e) {
  if (!e.customMerge)
    return fn;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : fn;
}
function f0(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Ih(t) {
  return Object.keys(t).concat(f0(t));
}
function sv(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function p0(t, e) {
  return sv(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function h0(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && Ih(t).forEach(function(s) {
    n[s] = ss(t[s], r);
  }), Ih(e).forEach(function(s) {
    p0(t, s) || (sv(t, s) && r.isMergeableObject(e[s]) ? n[s] = l0(s, r)(t[s], e[s], r) : n[s] = ss(e[s], r));
  }), n;
}
function fn(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || u0, r.isMergeableObject = r.isMergeableObject || r0, r.cloneUnlessOtherwiseSpecified = ss;
  var n = Array.isArray(e), s = Array.isArray(t), i = n === s;
  return i ? n ? r.arrayMerge(t, e, r) : h0(t, e, r) : ss(e, r);
}
fn.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, s) {
    return fn(n, s, r);
  }, {});
};
var d0 = fn, m0 = d0;
const y0 = /* @__PURE__ */ jr(m0), ee = {
  add: g0,
  replace: Si,
  remove: b0,
  merge: $0,
  mergeDeep: x0,
  context: S0,
  getIn: A0,
  applyPatch: v0,
  parentPathMatch: E0,
  flatten: ys,
  fullyNormalizeArray: P0,
  normalizeArray: ov,
  isPromise: j0,
  forEachNew: w0,
  forEachNewPrimitive: O0,
  isJsonPatch: uv,
  isContextPatch: T0,
  isPatch: sa,
  isMutation: lv,
  isAdditiveMutation: qi,
  isGenerator: R0,
  isFunction: cv,
  isObject: wr,
  isError: _0
};
function v0(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && Ch(e.path)
  }, e.op === "merge") {
    const n = Dc(t, e.path);
    Object.assign(n, e.value), er(t, [Si(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = Dc(t, e.path), s = y0(n, e.value);
    t = er(t, [Si(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && wr(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${Ch(i)}`,
      value: e.value[i]
    }), s), []);
    er(t, n);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: n
    } = e;
    r.allowMetaPatches && e.meta && qi(e) && (Array.isArray(e.value) || wr(e.value)) && (n = {
      ...n,
      ...e.meta
    }), t = n;
  } else if (er(t, [e]), r.allowMetaPatches && e.meta && qi(e) && (Array.isArray(e.value) || wr(e.value))) {
    const s = {
      ...Dc(t, e.path),
      ...e.meta
    };
    er(t, [Si(e.path, s)]);
  }
  return t;
}
function Ch(t) {
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
function Si(t, e, r) {
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
function $0(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function x0(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function S0(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function w0(t, e) {
  try {
    return iv(t, Uu, e);
  } catch (r) {
    return r;
  }
}
function O0(t, e) {
  try {
    return iv(t, ku, e);
  } catch (r) {
    return r;
  }
}
function iv(t, e, r) {
  const n = t.filter(qi).map((o) => e(o.value, r, o.path)) || [], s = ys(n);
  return av(s);
}
function ku(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => ku(n, e, r.concat(s))) : wr(t) ? Object.keys(t).map((n) => ku(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function Uu(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => Uu(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (wr(t)) {
    const s = Object.keys(t).map((i) => Uu(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = ys(n), n;
}
function E0(t, e) {
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
  return av(ys(ov(t)));
}
function ov(t) {
  return Array.isArray(t) ? t : [t];
}
function ys(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? ys(e) : e));
}
function av(t) {
  return t.filter((e) => typeof e < "u");
}
function wr(t) {
  return t && typeof t == "object";
}
function j0(t) {
  return wr(t) && cv(t.then);
}
function cv(t) {
  return t && typeof t == "function";
}
function _0(t) {
  return t instanceof Error;
}
function uv(t) {
  if (sa(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function R0(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function lv(t) {
  return uv(t) || sa(t) && t.type === "mutation";
}
function qi(t) {
  return lv(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function T0(t) {
  return sa(t) && t.type === "context";
}
function sa(t) {
  return t && typeof t == "object";
}
function Dc(t, e) {
  try {
    return rs(t, e);
  } catch (r) {
    return console.error(r), {};
  }
}
var fv = { exports: {} };
(function(t) {
  (function() {
    var e, r, n, s, i, o = "properties", a = "deepProperties", c = "propertyDescriptors", u = "staticProperties", p = "staticDeepProperties", f = "staticPropertyDescriptors", h = "configuration", l = "deepConfiguration", d = "deepProps", m = "deepStatics", y = "deepConf", v = "initializers", b = "methods", g = "composers", E = "compose";
    function O(q) {
      return Object.getOwnPropertyNames(q).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(q) : []);
    }
    function x(q, J) {
      return Array.prototype.slice.call(arguments, 2).reduce(q, J);
    }
    var T = x.bind(0, function(J, L) {
      if (L)
        for (var le = O(L), ae = 0; ae < le.length; ae += 1)
          Object.defineProperty(J, le[ae], Object.getOwnPropertyDescriptor(L, le[ae]));
      return J;
    });
    function M(q) {
      return typeof q == "function";
    }
    function A(q) {
      return q && typeof q == "object" || M(q);
    }
    function k(q) {
      return q && typeof q == "object" && q.__proto__ == Object.prototype;
    }
    var S = x.bind(0, function q(J, L) {
      if (L === e)
        return J;
      if (Array.isArray(L))
        return (Array.isArray(J) ? J : []).concat(L);
      if (!k(L))
        return L;
      for (var le, ae, Ge = O(L), Pe = 0; Pe < Ge.length; )
        le = Ge[Pe++], (ae = Object.getOwnPropertyDescriptor(L, le)).hasOwnProperty("value") ? ae.value !== e && (J[le] = q(k(J[le]) || Array.isArray(L[le]) ? J[le] : {}, L[le])) : Object.defineProperty(J, le, ae);
      return J;
    });
    function I() {
      return (r = Array.prototype.concat.apply([], arguments).filter(function(q, J, L) {
        return M(q) && L.indexOf(q) === J;
      })).length ? r : e;
    }
    function D(q) {
      return r = /* @__PURE__ */ function() {
        return function L(le) {
          var ae, Ge, Pe = L[E] || {}, At = { __proto__: Pe[b] }, ii = Pe[v], V$ = Array.prototype.slice.apply(arguments), kr = Pe[a];
          if (kr && S(At, kr), (kr = Pe[o]) && T(At, kr), (kr = Pe[c]) && Object.defineProperties(At, kr), !ii || !ii.length)
            return At;
          for (le === e && (le = {}), Pe = 0; Pe < ii.length; )
            M(ae = ii[Pe++]) && (At = (Ge = ae.call(At, le, { instance: At, stamp: L, args: V$ })) === e ? At : Ge);
          return At;
        };
      }(), (n = q[p]) && S(r, n), (n = q[u]) && T(r, n), (n = q[f]) && Object.defineProperties(r, n), n = M(r[E]) ? r[E] : de, T(r[E] = function() {
        return n.apply(this, arguments);
      }, q), r;
    }
    function z(q, J) {
      function L(ae, Ge) {
        A(J[ae]) && (A(q[ae]) || (q[ae] = {}), (Ge || T)(q[ae], J[ae]));
      }
      function le(ae) {
        (r = I(q[ae], J[ae])) && (q[ae] = r);
      }
      return J && A(J = J[E] || J) && (L(b), L(o), L(a, S), L(c), L(u), L(p, S), L(f), L(h), L(l, S), le(v), le(g)), q;
    }
    function de() {
      return D(Array.prototype.concat.apply([this], arguments).reduce(z, {}));
    }
    function oe(q) {
      return M(q) && M(q[E]);
    }
    var X = {};
    function Ne(q, J) {
      return function() {
        return (s = {})[q] = J.apply(e, Array.prototype.concat.apply([{}], arguments)), ((r = this) && r[E] || n).call(r, s);
      };
    }
    X[b] = Ne(b, T), X[o] = X.props = Ne(o, T), X[v] = X.init = Ne(v, I), X[g] = Ne(g, I), X[a] = X[d] = Ne(a, S), X[u] = X.statics = Ne(u, T), X[p] = X[m] = Ne(p, S), X[h] = X.conf = Ne(h, T), X[l] = X[y] = Ne(l, S), X[c] = Ne(c, T), X[f] = Ne(f, T), n = X[E] = T(function() {
      for (var J, L, le = 0, ae = [], Ge = arguments, Pe = this; le < Ge.length; )
        A(J = Ge[le++]) && ae.push(oe(J) ? J : ((s = {})[b] = (L = J)[b] || e, n = L.props, s[o] = A((r = L[o]) || n) ? T({}, n, r) : e, s[v] = I(L.init, L[v]), s[g] = I(L[g]), n = L[d], s[a] = A((r = L[a]) || n) ? S({}, n, r) : e, s[c] = L[c], n = L.statics, s[u] = A((r = L[u]) || n) ? T({}, n, r) : e, n = L[m], s[p] = A((r = L[p]) || n) ? S({}, n, r) : e, r = L[f], s[f] = A((n = L.name && { name: { value: L.name } }) || r) ? T({}, r, n) : e, n = L.conf, s[h] = A((r = L[h]) || n) ? T({}, n, r) : e, n = L[y], s[l] = A((r = L[l]) || n) ? S({}, n, r) : e, s));
      if (J = de.apply(Pe || i, ae), Pe && ae.unshift(Pe), Array.isArray(Ge = J[E][g]))
        for (le = 0; le < Ge.length; )
          J = oe(Pe = Ge[le++]({ stamp: J, composables: ae })) ? Pe : J;
      return J;
    }, X), X.create = function() {
      return this.apply(e, arguments);
    }, (s = {})[u] = X, i = de(s), n[E] = n.bind(), n.version = "4.3.2", t.exports = n;
  })();
})(fv);
var I0 = fv.exports;
const We = /* @__PURE__ */ jr(I0);
var df = function() {
  return !1;
}, C0 = function() {
  return !0;
};
const Lt = C0, F0 = {
  "@@functional/placeholder": !0
};
function fe(t) {
  return t === F0;
}
function re(t) {
  return function e(r) {
    return arguments.length === 0 || fe(r) ? e : t.apply(this, arguments);
  };
}
function U(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return fe(r) ? e : re(function(s) {
          return t(r, s);
        });
      default:
        return fe(r) && fe(n) ? e : fe(r) ? re(function(s) {
          return t(s, n);
        }) : fe(n) ? re(function(s) {
          return t(r, s);
        }) : t(r, n);
    }
  };
}
function M0(t, e) {
  t = t || [], e = e || [];
  var r, n = t.length, s = e.length, i = [];
  for (r = 0; r < n; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < s; )
    i[i.length] = e[r], r += 1;
  return i;
}
function ia(t, e) {
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
      return function(r, n, s, i, o, a, c, u, p) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(r, n, s, i, o, a, c, u, p, f) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function mf(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!fe(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, fe(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : ia(Math.max(0, i), mf(t, n, r));
  };
}
var ce = /* @__PURE__ */ U(function(e, r) {
  return e === 1 ? re(r) : ia(e, mf(e, [], r));
});
function He(t) {
  return function e(r, n, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return fe(r) ? e : U(function(i, o) {
          return t(r, i, o);
        });
      case 2:
        return fe(r) && fe(n) ? e : fe(r) ? U(function(i, o) {
          return t(i, n, o);
        }) : fe(n) ? U(function(i, o) {
          return t(r, i, o);
        }) : re(function(i) {
          return t(r, n, i);
        });
      default:
        return fe(r) && fe(n) && fe(s) ? e : fe(r) && fe(n) ? U(function(i, o) {
          return t(i, o, s);
        }) : fe(r) && fe(s) ? U(function(i, o) {
          return t(i, n, o);
        }) : fe(n) && fe(s) ? U(function(i, o) {
          return t(r, i, o);
        }) : fe(r) ? re(function(i) {
          return t(i, n, s);
        }) : fe(n) ? re(function(i) {
          return t(r, i, s);
        }) : fe(s) ? re(function(i) {
          return t(r, n, i);
        }) : t(r, n, s);
    }
  };
}
const vs = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function V0(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function ar(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!vs(n)) {
      for (var s = 0; s < t.length; ) {
        if (typeof n[t[s]] == "function")
          return n[t[s]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        s += 1;
      }
      if (V0(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function oa(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const Je = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
var D0 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = oa(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
}();
function N0(t) {
  return function(e) {
    return new D0(t, e);
  };
}
var L0 = /* @__PURE__ */ U(/* @__PURE__ */ ar(["all"], N0, function(e, r) {
  for (var n = 0; n < r.length; ) {
    if (!e(r[n]))
      return !1;
    n += 1;
  }
  return !0;
}));
const yf = L0;
function Fh(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function Hi(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function k0(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function Ze(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function U0(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const Kn = typeof Object.is == "function" ? Object.is : U0;
var Mh = Object.prototype.toString, pv = /* @__PURE__ */ function() {
  return Mh.call(arguments) === "[object Arguments]" ? function(e) {
    return Mh.call(e) === "[object Arguments]";
  } : function(e) {
    return Ze("callee", e);
  };
}(), B0 = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), Vh = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Dh = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), q0 = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, Er = /* @__PURE__ */ re(typeof Object.keys == "function" && !Dh ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, s = [], i = Dh && pv(e);
  for (r in e)
    Ze(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (B0)
    for (n = Vh.length - 1; n >= 0; )
      r = Vh[n], Ze(r, e) && !q0(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), H0 = /* @__PURE__ */ re(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
const et = H0;
function Nh(t, e, r, n) {
  var s = Fh(t), i = Fh(e);
  function o(a, c) {
    return vf(a, c, r.slice(), n.slice());
  }
  return !Hi(function(a, c) {
    return !Hi(o, c, a);
  }, i, s);
}
function vf(t, e, r, n) {
  if (Kn(t, e))
    return !0;
  var s = et(t);
  if (s !== et(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (s) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && k0(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && Kn(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!Kn(t.valueOf(), e.valueOf()))
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
      return t.size !== e.size ? !1 : Nh(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : Nh(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var o = Er(t);
  if (o.length !== Er(e).length)
    return !1;
  var a = r.concat([t]), c = n.concat([e]);
  for (i = o.length - 1; i >= 0; ) {
    var u = o[i];
    if (!(Ze(u, e) && vf(e[u], t[u], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var kt = /* @__PURE__ */ U(function(e, r) {
  return vf(e, r, [], []);
});
function G0(t, e, r) {
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
    if (kt(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function Gi(t, e) {
  return G0(e, t, 0) >= 0;
}
function Wn(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function Nc(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var Ln = function(e) {
  return (e < 10 ? "0" : "") + e;
}, z0 = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + Ln(e.getUTCMonth() + 1) + "-" + Ln(e.getUTCDate()) + "T" + Ln(e.getUTCHours()) + ":" + Ln(e.getUTCMinutes()) + ":" + Ln(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function hv(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function gs(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function J0(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function zi(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var K0 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = Je.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function W0(t) {
  return function(e) {
    return new K0(t, e);
  };
}
var Y0 = /* @__PURE__ */ U(/* @__PURE__ */ ar(["fantasy-land/filter", "filter"], W0, function(t, e) {
  return zi(e) ? gs(function(r, n) {
    return t(e[n]) && (r[n] = e[n]), r;
  }, {}, Er(e)) : (
    // else
    J0(t, e)
  );
})), X0 = /* @__PURE__ */ U(function(e, r) {
  return Y0(hv(e), r);
});
const Q0 = X0;
function dv(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return Gi(o, a) ? "<Circular>" : dv(o, a);
  }, n = function(i, o) {
    return Wn(function(a) {
      return Nc(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + Wn(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + Wn(r, t).concat(n(t, Q0(function(i) {
        return /^\d+$/.test(i);
      }, Er(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : Nc(z0(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : Nc(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var s = t.toString();
        if (s !== "[object Object]")
          return s;
      }
      return "{" + n(t, Er(t)).join(", ") + "}";
  }
}
var pn = /* @__PURE__ */ re(function(e) {
  return dv(e, []);
}), Z0 = /* @__PURE__ */ U(function(e, r) {
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
  var o = pn(e), a = n(o, pn(r));
  return a !== void 0 && a === o ? e : r;
});
const gf = Z0;
var eA = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = Je.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), tA = function(e) {
  return function(r) {
    return new eA(e, r);
  };
};
const rA = tA;
var bs = /* @__PURE__ */ U(/* @__PURE__ */ ar(["fantasy-land/map", "map"], rA, function(e, r) {
  switch (Object.prototype.toString.call(r)) {
    case "[object Function]":
      return ce(r.length, function() {
        return e.call(this, r.apply(this, arguments));
      });
    case "[object Object]":
      return gs(function(n, s) {
        return n[s] = e(r[s]), n;
      }, {}, Er(r));
    default:
      return Wn(e, r);
  }
}));
const aa = Number.isInteger || function(e) {
  return e << 0 === e;
};
function bf(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function ca(t, e) {
  var r = t < 0 ? e.length + t : t;
  return bf(e) ? e.charAt(r) : e[r];
}
var $s = /* @__PURE__ */ U(function(e, r) {
  if (r != null)
    return aa(e) ? ca(e, r) : r[e];
}), $f = /* @__PURE__ */ U(function(e, r) {
  return bs($s(e), r);
}), nA = /* @__PURE__ */ re(function(e) {
  return vs(e) ? !0 : !e || typeof e != "object" || bf(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), Lh = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function mv(t, e, r) {
  return function(s, i, o) {
    if (nA(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[Lh] != null)
      return r(s, i, o[Lh]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function sA(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var ua = /* @__PURE__ */ U(function(e, r) {
  return ia(e.length, function() {
    return e.apply(r, arguments);
  });
});
function iA(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function oA(t, e, r, n) {
  return t["@@transducer/result"](r[n](ua(t["@@transducer/step"], t), e));
}
var xf = /* @__PURE__ */ mv(sA, oA, iA), aA = /* @__PURE__ */ function() {
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
function yv(t) {
  return new aA(t);
}
var _r = /* @__PURE__ */ He(function(t, e, r) {
  return xf(typeof t == "function" ? yv(t) : t, e, r);
}), cA = /* @__PURE__ */ re(function(e) {
  return ce(_r(gf, 0, $f("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (!e[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
}), N = /* @__PURE__ */ re(function(e) {
  return function() {
    return e;
  };
}), uA = /* @__PURE__ */ U(function(e, r) {
  return e && r;
});
const lA = uA;
var fA = /* @__PURE__ */ re(function(e) {
  return ce(_r(gf, 0, $f("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function pA(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function hA(t, e, r, n) {
  return r[n](t, e);
}
var dA = /* @__PURE__ */ mv(gs, hA, pA), mA = /* @__PURE__ */ U(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : dA(function(n, s) {
    return M0(n, bs(s, r));
  }, [], e);
});
const yA = mA;
var vA = /* @__PURE__ */ U(function(e, r) {
  return e.apply(this, r);
});
function gA(t, e, r) {
  if (aa(t) && vs(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var bA = /* @__PURE__ */ re(function(e) {
  return e == null;
});
const Ji = bA;
var $A = /* @__PURE__ */ He(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !Ji(n) && Ze(s, n) && typeof n[s] == "object" ? n[s] : aa(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return gA(s, r, n);
});
function Sf(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var xA = /* @__PURE__ */ U(function(e, r) {
  var n = ce(e, r);
  return ce(e, function() {
    return gs(yA, bs(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), wf = /* @__PURE__ */ re(function(e) {
  return xA(e.length, e);
}), Rr = /* @__PURE__ */ U(function(e, r) {
  return Sf(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : wf(lA)(e, r);
});
function vv(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function Of(t, e, r) {
  if (r || (r = new wA()), SA(t))
    return t;
  var n = function(i) {
    var o = r.get(t);
    if (o)
      return o;
    r.set(t, i);
    for (var a in t)
      Object.prototype.hasOwnProperty.call(t, a) && (i[a] = e ? Of(t[a], !0, r) : t[a]);
    return i;
  };
  switch (et(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n(Array(t.length));
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return vv(t);
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
function SA(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var wA = /* @__PURE__ */ function() {
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
}(), OA = /* @__PURE__ */ re(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), EA = /* @__PURE__ */ re(function(e) {
  return !e;
});
const AA = EA;
var xs = /* @__PURE__ */ wf(AA);
function PA(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function Ef(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return vs(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Ss = /* @__PURE__ */ He(/* @__PURE__ */ Ef("slice", function(e, r, n) {
  return Array.prototype.slice.call(n, e, r);
})), gv = /* @__PURE__ */ re(/* @__PURE__ */ Ef("tail", /* @__PURE__ */ Ss(1, 1 / 0)));
function Ie() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return ia(arguments[0].length, _r(PA, arguments[0], gv(arguments)));
}
var jA = /* @__PURE__ */ re(function(t) {
  return ca(0, t);
});
const _A = jA;
function RA(t) {
  return t;
}
var TA = /* @__PURE__ */ re(RA);
const bv = TA;
var Af = /* @__PURE__ */ re(function(e) {
  return ce(e.length, e);
}), IA = /* @__PURE__ */ U(function(e, r) {
  return ce(_r(gf, 0, $f("length", r)), function() {
    var n = arguments, s = this;
    return e.apply(s, Wn(function(i) {
      return i.apply(s, n);
    }, r));
  });
}), CA = /* @__PURE__ */ function() {
  function t(e, r, n, s) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = s, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (Ze(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, Of(this.valueAcc, !1)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function FA(t, e, r) {
  return function(n) {
    return new CA(t, e, r, n);
  };
}
var MA = /* @__PURE__ */ mf(4, [], /* @__PURE__ */ ar([], FA, function(e, r, n, s) {
  var i = yv(function(o, a) {
    var c = n(a), u = e(Ze(c, o) ? o[c] : Of(r, !1), a);
    return u && u["@@transducer/reduced"] ? oa(o) : (o[c] = u, o);
  });
  return xf(i, {}, s);
})), hn = /* @__PURE__ */ U(function(e, r) {
  return r == null || r !== r ? e : r;
}), VA = /* @__PURE__ */ function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !kh(e, !0, this);
  }, t.prototype.has = function(e) {
    return kh(e, !1, this);
  }, t;
}();
function kh(t, e, r) {
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
      return r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? Gi(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
    case "undefined":
      return r._items[n] ? !0 : (e && (r._items[n] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    default:
      return n = Object.prototype.toString.call(t), n in r._items ? Gi(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
  }
}
var DA = /* @__PURE__ */ U(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new VA(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), NA = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = Je.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? oa(n) : n;
  }, t;
}();
function LA(t) {
  return function(e) {
    return new NA(t, e);
  };
}
var kA = /* @__PURE__ */ U(/* @__PURE__ */ ar(["take"], LA, function(e, r) {
  return Ss(0, e < 0 ? 1 / 0 : e, r);
}));
function UA(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return Ss(0, r + 1, e);
}
var BA = /* @__PURE__ */ function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = xf(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
}();
function qA(t) {
  return function(e) {
    return new BA(t, e);
  };
}
var HA = /* @__PURE__ */ U(/* @__PURE__ */ ar([], qA, UA)), la = /* @__PURE__ */ re(function(t) {
  return ca(-1, t);
}), GA = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = Je.result, t.prototype["@@transducer/step"] = function(e, r) {
    if (this.f) {
      if (this.f(r))
        return e;
      this.f = null;
    }
    return this.xf["@@transducer/step"](e, r);
  }, t;
}();
function zA(t) {
  return function(e) {
    return new GA(t, e);
  };
}
var JA = /* @__PURE__ */ U(/* @__PURE__ */ ar(["dropWhile"], zA, function(e, r) {
  for (var n = 0, s = r.length; n < s && e(r[n]); )
    n += 1;
  return Ss(n, 1 / 0, r);
})), KA = /* @__PURE__ */ U(function(e, r) {
  return e || r;
});
const WA = KA;
var YA = /* @__PURE__ */ U(function(e, r) {
  return Sf(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : wf(WA)(e, r);
});
function XA(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var QA = /* @__PURE__ */ re(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : vs(e) ? [] : bf(e) ? "" : zi(e) ? {} : pv(e) ? /* @__PURE__ */ function() {
    return arguments;
  }() : XA(e) ? e.constructor.from("") : void 0;
}), ZA = /* @__PURE__ */ re(function(e) {
  return ce(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), eP = /* @__PURE__ */ U(/* @__PURE__ */ Ef("groupBy", /* @__PURE__ */ MA(function(t, e) {
  return t.push(e), t;
}, []))), tP = /* @__PURE__ */ U(function(e, r) {
  if (e.length === 0 || Ji(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!Ji(n) && Ze(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), rP = /* @__PURE__ */ U(function(e, r) {
  return tP([e], r);
});
const $v = rP;
var Ut = function(t, e) {
  switch (arguments.length) {
    case 0:
      return Ut;
    case 1:
      return /* @__PURE__ */ function() {
        return function r(n) {
          switch (arguments.length) {
            case 0:
              return r;
            default:
              return Kn(t, n);
          }
        };
      }();
    default:
      return Kn(t, e);
  }
}, Pf = /* @__PURE__ */ He(function(e, r, n) {
  return ce(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), nP = /* @__PURE__ */ U(Gi);
const sP = nP;
var iP = /* @__PURE__ */ Ss(0, -1), jf = /* @__PURE__ */ U(function(e, r) {
  return ce(e + 1, function() {
    var n = arguments[e];
    if (n != null && Sf(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(pn(n) + ' does not have a method named "' + r + '"');
  });
}), ws = /* @__PURE__ */ re(function(e) {
  return e != null && kt(e, QA(e));
}), oP = /* @__PURE__ */ re(function(e) {
  return !ws(e);
});
const xv = oP;
var Sv = /* @__PURE__ */ jf(1, "join");
function Uh(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var aP = /* @__PURE__ */ U(function(e, r) {
  return function(n) {
    return function(s) {
      return bs(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
const cP = aP;
function _f(t, e) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    var s = t[n];
    aa(s) ? r = ca(s, r) : r = r[s];
  }
  return r;
}
var uP = /* @__PURE__ */ U(function(e, r) {
  return gs(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, Er(r));
}), lP = /* @__PURE__ */ He(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    Ze(i, r) && (s[i] = Ze(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    Ze(i, n) && !Ze(i, s) && (s[i] = n[i]);
  return s;
}), fP = /* @__PURE__ */ He(function t(e, r, n) {
  return lP(function(s, i, o) {
    return zi(i) && zi(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), Rf = /* @__PURE__ */ U(function(e, r) {
  return fP(function(n, s, i) {
    return i;
  }, e, r);
}), pP = /* @__PURE__ */ U(function(e, r) {
  return yf(hv(e), r);
});
const hP = pP;
var wv = function(t) {
  return {
    value: t,
    map: function(e) {
      return wv(e(t));
    }
  };
}, dP = /* @__PURE__ */ He(function(e, r, n) {
  return e(function(s) {
    return wv(r(s));
  })(n).value;
}), qe = /* @__PURE__ */ U(_f), Ov = /* @__PURE__ */ He(function(e, r, n) {
  return hn(e, _f(r, n));
}), mP = /* @__PURE__ */ He(function(e, r, n) {
  return e(_f(r, n));
});
const fa = mP;
var Ev = /* @__PURE__ */ U(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), Tf = /* @__PURE__ */ He(function(e, r, n) {
  return kt(e, $s(r, n));
}), Ki = /* @__PURE__ */ He(function(e, r, n) {
  return hn(e, $s(r, n));
}), yP = /* @__PURE__ */ He(function(e, r, n) {
  return e($s(r, n));
});
const vP = yP;
var gP = /* @__PURE__ */ U(function(e, r) {
  if (!(Uh(e) && Uh(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = Array(e < r ? r - e : 0), s = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < s; )
    n[i] = i + e, i += 1;
  return n;
}), bP = /* @__PURE__ */ re(oa), dn = /* @__PURE__ */ He(function(e, r, n) {
  return n.replace(e, r);
}), $P = /* @__PURE__ */ U(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), If = /* @__PURE__ */ jf(1, "split"), Av = /* @__PURE__ */ U(function(t, e) {
  return kt(kA(t.length, e), t);
});
function xP(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var SP = /* @__PURE__ */ U(function(e, r) {
  if (!xP(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + pn(e));
  return vv(e).test(r);
}), wP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = Je.result, t.prototype["@@transducer/step"] = function(e, r) {
    return Hi(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
}();
function OP(t) {
  return function(e) {
    return new wP(t, e);
  };
}
var EP = /* @__PURE__ */ U(/* @__PURE__ */ ar([], OP, function(t, e) {
  for (var r = 0, n = e.length, s = [], i; r < n; )
    i = e[r], Hi(t, i, s) || (s[s.length] = i), r += 1;
  return s;
}));
const AP = EP;
var PP = /* @__PURE__ */ He(function(e, r, n) {
  return e(n) ? r(n) : n;
}), pa = N(void 0), cr = kt(pa()), jP = xs(cr);
const Pv = jP;
var jv = kt(null), _P = xs(jv);
const _v = _P;
var RP = xs(Ji), TP = ce(1, Ie(et, Ut("GeneratorFunction")));
const IP = TP;
var CP = ce(1, Ie(et, Ut("AsyncFunction")));
const FP = CP;
var Bt = fA([Ie(et, Ut("Function")), IP, FP]), MP = ce(1, Bt(Array.isArray) ? Array.isArray : Ie(et, Ut("Array")));
const Rv = MP;
var VP = Rr(Rv, ws), DP = Rr(Rv, xv);
const NP = DP;
var Tr = ce(1, Ie(et, Ut("String"))), Tv = kt("");
function Bu(t) {
  "@babel/helpers - typeof";
  return Bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Bu(t);
}
var LP = function(e) {
  return Bu(e) === "object";
};
const Iv = LP;
var kP = ce(1, Rr(_v, YA(Iv, Bt)));
const UP = kP;
var BP = xs(UP);
const qP = BP;
var Cf = cA([Tr, qP, xv]), HP = xs(Bt), GP = ce(1, Rr(_v, Iv)), zP = Ie(et, Ut("Object")), JP = Ie(pn, kt(pn(Object))), KP = fa(Rr(Bt, JP), ["constructor"]), Wi = ce(1, function(t) {
  if (!GP(t) || !zP(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return jv(e) ? !0 : KP(e);
}), WP = ce(1, Ie(et, Ut("Number")));
const YP = WP;
var XP = Rr(YP, isFinite);
const QP = XP;
var ZP = ce(1, QP), e1 = Bt(Number.isFinite) ? ce(1, ua(Number.isFinite, Number)) : ZP;
const t1 = e1;
var r1 = Rr(t1, IA(kt, [Math.floor, bv]));
const n1 = r1;
var s1 = ce(1, n1), i1 = Bt(Number.isInteger) ? ce(1, ua(Number.isInteger, Number)) : s1;
const o1 = i1;
var a1 = ce(1, Ie(et, Ut("RegExp")));
function c1(t) {
  return p1(t) || f1(t) || l1(t) || u1();
}
function u1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l1(t, e) {
  if (t) {
    if (typeof t == "string")
      return qu(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qu(t, e);
  }
}
function f1(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function p1(t) {
  if (Array.isArray(t))
    return qu(t);
}
function qu(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
var h1 = OA(function(t, e) {
  return t.length > e.length;
}), d1 = Ie($P(h1), _A, $s("length")), m1 = Af(function(t, e, r) {
  var n = r.apply(void 0, c1(t));
  return RP(n) ? bP(n) : e;
}), y1 = function(e) {
  var r = d1(e);
  return ce(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return _r(m1(s), void 0, e);
  });
}, Cv = Pf(NP, y1, pa), ha = ZA(sP), is = ce(3, function(t, e, r) {
  var n = qe(t, r), s = qe(iP(t), r);
  if (!HP(n) && !VP(t)) {
    var i = ua(n, s);
    return vA(i, e);
  }
}), v1 = PP(Tr, dn(/[.*+?^${}()|[\]\\-]/g, "\\$&"));
const g1 = v1;
var b1 = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, Bh = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, $1 = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, x1 = function(e, r, n) {
  b1(e, r, n), Bh(n, "str"), Bh(r, "replaceValue"), $1(e);
  var s = new RegExp(a1(e) ? e : g1(e), "g");
  return dn(s, r, n);
};
const S1 = x1;
var w1 = ce(3, S1), O1 = jf(2, "replaceAll"), E1 = Bt(String.prototype.replaceAll) ? O1 : w1, A1 = Af(function(t, e) {
  return Ie(If(""), HA(ha(t)), Sv(""))(e);
}), Ff = Af(function(t, e) {
  return Ie(If(""), JA(ha(t)), Sv(""))(e);
}), Fv = { exports: {} }, ve = Fv.exports = {}, mt, yt;
function Hu() {
  throw new Error("setTimeout has not been defined");
}
function Gu() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? mt = setTimeout : mt = Hu;
  } catch {
    mt = Hu;
  }
  try {
    typeof clearTimeout == "function" ? yt = clearTimeout : yt = Gu;
  } catch {
    yt = Gu;
  }
})();
function Mv(t) {
  if (mt === setTimeout)
    return setTimeout(t, 0);
  if ((mt === Hu || !mt) && setTimeout)
    return mt = setTimeout, setTimeout(t, 0);
  try {
    return mt(t, 0);
  } catch {
    try {
      return mt.call(null, t, 0);
    } catch {
      return mt.call(this, t, 0);
    }
  }
}
function P1(t) {
  if (yt === clearTimeout)
    return clearTimeout(t);
  if ((yt === Gu || !yt) && clearTimeout)
    return yt = clearTimeout, clearTimeout(t);
  try {
    return yt(t);
  } catch {
    try {
      return yt.call(null, t);
    } catch {
      return yt.call(this, t);
    }
  }
}
var _t = [], tn = !1, gr, wi = -1;
function j1() {
  !tn || !gr || (tn = !1, gr.length ? _t = gr.concat(_t) : wi = -1, _t.length && Vv());
}
function Vv() {
  if (!tn) {
    var t = Mv(j1);
    tn = !0;
    for (var e = _t.length; e; ) {
      for (gr = _t, _t = []; ++wi < e; )
        gr && gr[wi].run();
      wi = -1, e = _t.length;
    }
    gr = null, tn = !1, P1(t);
  }
}
ve.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  _t.push(new Dv(t, e)), _t.length === 1 && !tn && Mv(Vv);
};
function Dv(t, e) {
  this.fun = t, this.array = e;
}
Dv.prototype.run = function() {
  this.fun.apply(null, this.array);
};
ve.title = "browser";
ve.browser = !0;
ve.env = {};
ve.argv = [];
ve.version = "";
ve.versions = {};
function qt() {
}
ve.on = qt;
ve.addListener = qt;
ve.once = qt;
ve.off = qt;
ve.removeListener = qt;
ve.removeAllListeners = qt;
ve.emit = qt;
ve.prependListener = qt;
ve.prependOnceListener = qt;
ve.listeners = function(t) {
  return [];
};
ve.binding = function(t) {
  throw new Error("process.binding is not supported");
};
ve.cwd = function() {
  return "/";
};
ve.chdir = function(t) {
  throw new Error("process.chdir is not supported");
};
ve.umask = function() {
  return 0;
};
var _1 = Fv.exports;
const Yi = /* @__PURE__ */ jr(_1), Mf = () => fa(SP(/^win/), ["platform"], Yi), da = (t) => {
  try {
    const e = new URL(t);
    return A1(":", e.protocol);
  } catch {
    return;
  }
}, R1 = Ie(da, Pv), Nv = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, Vf = (t) => {
  if (Yi.browser)
    return !1;
  const e = da(t);
  return cr(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, ma = (t) => {
  const e = da(t);
  return e === "http" || e === "https";
}, T1 = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, Df = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Ki(!1, "keepFileProtocol", e), s = Ki(Mf, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = E1("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, Lv = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  Mf() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < e.length; n += 2)
    r = r.replace(e[n], e[n + 1]);
  return r;
}, Nf = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, ne = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, Xi = () => {
  if (Yi.browser)
    return ne(globalThis.location.href);
  const t = Yi.cwd(), e = la(t);
  return ["/", "\\"].includes(e) ? t : t + (Mf() ? "\\" : "/");
}, Ae = (t, e) => {
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
}, Os = (t) => {
  if (Vf(t))
    return Lv(Df(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, ot = (t) => Vf(t) ? Df(t) : decodeURI(t), I1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: Xi,
  fromFileSystemPath: Lv,
  getExtension: Nv,
  getHash: Nf,
  getProtocol: da,
  hasProtocol: R1,
  isFileSystemPath: Vf,
  isHttpUrl: ma,
  isURI: T1,
  resolve: Ae,
  sanitize: Os,
  stripHash: ne,
  toFileSystemPath: Df,
  unsanitize: ot
}, Symbol.toStringTag, { value: "Module" })), C1 = We({
  props: {
    uri: null,
    mediaType: "text/plain",
    data: null,
    parseResult: null
  },
  init({
    uri: t = this.uri,
    mediaType: e = this.mediaType,
    data: r = this.data,
    parseResult: n = this.parseResult
  } = {}) {
    this.uri = t, this.mediaType = e, this.data = r, this.parseResult = n;
  },
  methods: {
    get extension() {
      return Tr(this.uri) ? Nv(this.uri) : "";
    },
    toString() {
      return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(et(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
    }
  }
}), os = C1, F1 = {
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
    circularReplacer: bv,
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
}, kv = F1, M1 = cP(qe(["resolve", "baseURI"]), $A(["resolve", "baseURI"])), V1 = (t) => Tv(t) ? Xi() : t, Uv = (t, e) => {
  const r = Rf(t, e);
  return dP(M1, V1, r);
};
var kn = function(t) {
  return t && t.Math === Math && t;
}, rt = (
  // eslint-disable-next-line es/no-global-this -- safe
  kn(typeof globalThis == "object" && globalThis) || kn(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  kn(typeof self == "object" && self) || kn(typeof jt == "object" && jt) || kn(typeof jt == "object" && jt) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), ft = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, D1 = ft, ya = !D1(function() {
  var t = (function() {
  }).bind();
  return typeof t != "function" || t.hasOwnProperty("prototype");
}), N1 = ya, Bv = Function.prototype, qh = Bv.apply, Hh = Bv.call, Lf = typeof Reflect == "object" && Reflect.apply || (N1 ? Hh.bind(qh) : function() {
  return Hh.apply(qh, arguments);
}), qv = ya, Hv = Function.prototype, zu = Hv.call, L1 = qv && Hv.bind.bind(zu, zu), pt = qv ? L1 : function(t) {
  return function() {
    return zu.apply(t, arguments);
  };
}, Gv = pt, k1 = Gv({}.toString), U1 = Gv("".slice), kf = function(t) {
  return U1(k1(t), 8, -1);
}, B1 = kf, q1 = pt, zv = function(t) {
  if (B1(t) === "Function")
    return q1(t);
}, Lc = typeof document == "object" && document.all, nt = typeof Lc > "u" && Lc !== void 0 ? function(t) {
  return typeof t == "function" || t === Lc;
} : function(t) {
  return typeof t == "function";
}, Uf = {}, H1 = ft, ur = !H1(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), G1 = ya, ui = Function.prototype.call, Ir = G1 ? ui.bind(ui) : function() {
  return ui.apply(ui, arguments);
}, Jv = {}, Kv = {}.propertyIsEnumerable, Wv = Object.getOwnPropertyDescriptor, z1 = Wv && !Kv.call({ 1: 2 }, 1);
Jv.f = z1 ? function(e) {
  var r = Wv(this, e);
  return !!r && r.enumerable;
} : Kv;
var Es = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, J1 = pt, K1 = ft, W1 = kf, kc = Object, Y1 = J1("".split), X1 = K1(function() {
  return !kc("z").propertyIsEnumerable(0);
}) ? function(t) {
  return W1(t) === "String" ? Y1(t, "") : kc(t);
} : kc, Bf = function(t) {
  return t == null;
}, Q1 = Bf, Z1 = TypeError, va = function(t) {
  if (Q1(t))
    throw new Z1("Can't call method on " + t);
  return t;
}, ej = X1, tj = va, As = function(t) {
  return ej(tj(t));
}, rj = nt, Ot = function(t) {
  return typeof t == "object" ? t !== null : rj(t);
}, qf = {}, Uc = qf, Bc = rt, nj = nt, Gh = function(t) {
  return nj(t) ? t : void 0;
}, Ps = function(t, e) {
  return arguments.length < 2 ? Gh(Uc[t]) || Gh(Bc[t]) : Uc[t] && Uc[t][e] || Bc[t] && Bc[t][e];
}, sj = pt, ga = sj({}.isPrototypeOf), ij = typeof navigator < "u" && String(navigator.userAgent) || "", Yv = rt, qc = ij, zh = Yv.process, Jh = Yv.Deno, Kh = zh && zh.versions || Jh && Jh.version, Wh = Kh && Kh.v8, at, Qi;
Wh && (at = Wh.split("."), Qi = at[0] > 0 && at[0] < 4 ? 1 : +(at[0] + at[1]));
!Qi && qc && (at = qc.match(/Edge\/(\d+)/), (!at || at[1] >= 74) && (at = qc.match(/Chrome\/(\d+)/), at && (Qi = +at[1])));
var oj = Qi, Yh = oj, aj = ft, cj = rt, uj = cj.String, Xv = !!Object.getOwnPropertySymbols && !aj(function() {
  var t = Symbol("symbol detection");
  return !uj(t) || !(Object(t) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Yh && Yh < 41;
}), lj = Xv, Qv = lj && !Symbol.sham && typeof Symbol.iterator == "symbol", fj = Ps, pj = nt, hj = ga, dj = Qv, mj = Object, Zv = dj ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  var e = fj("Symbol");
  return pj(e) && hj(e.prototype, mj(t));
}, yj = String, Hf = function(t) {
  try {
    return yj(t);
  } catch {
    return "Object";
  }
}, vj = nt, gj = Hf, bj = TypeError, ba = function(t) {
  if (vj(t))
    return t;
  throw new bj(gj(t) + " is not a function");
}, $j = ba, xj = Bf, Gf = function(t, e) {
  var r = t[e];
  return xj(r) ? void 0 : $j(r);
}, Hc = Ir, Gc = nt, zc = Ot, Sj = TypeError, wj = function(t, e) {
  var r, n;
  if (e === "string" && Gc(r = t.toString) && !zc(n = Hc(r, t)) || Gc(r = t.valueOf) && !zc(n = Hc(r, t)) || e !== "string" && Gc(r = t.toString) && !zc(n = Hc(r, t)))
    return n;
  throw new Sj("Can't convert object to primitive value");
}, eg = { exports: {} }, Xh = rt, Oj = Object.defineProperty, Ej = function(t, e) {
  try {
    Oj(Xh, t, { value: e, configurable: !0, writable: !0 });
  } catch {
    Xh[t] = e;
  }
  return e;
}, Aj = rt, Pj = Ej, Qh = "__core-js_shared__", Zh = eg.exports = Aj[Qh] || Pj(Qh, {});
(Zh.versions || (Zh.versions = [])).push({
  version: "3.37.0",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var tg = eg.exports, ed = tg, rg = function(t, e) {
  return ed[t] || (ed[t] = e || {});
}, jj = va, _j = Object, ng = function(t) {
  return _j(jj(t));
}, Rj = pt, Tj = ng, Ij = Rj({}.hasOwnProperty), Ht = Object.hasOwn || function(e, r) {
  return Ij(Tj(e), r);
}, Cj = pt, Fj = 0, Mj = Math.random(), Vj = Cj(1 .toString), sg = function(t) {
  return "Symbol(" + (t === void 0 ? "" : t) + ")_" + Vj(++Fj + Mj, 36);
}, Dj = rt, Nj = rg, td = Ht, Lj = sg, kj = Xv, Uj = Qv, Zr = Dj.Symbol, Jc = Nj("wks"), Bj = Uj ? Zr.for || Zr : Zr && Zr.withoutSetter || Lj, Gt = function(t) {
  return td(Jc, t) || (Jc[t] = kj && td(Zr, t) ? Zr[t] : Bj("Symbol." + t)), Jc[t];
}, qj = Ir, rd = Ot, nd = Zv, Hj = Gf, Gj = wj, zj = Gt, Jj = TypeError, Kj = zj("toPrimitive"), Wj = function(t, e) {
  if (!rd(t) || nd(t))
    return t;
  var r = Hj(t, Kj), n;
  if (r) {
    if (e === void 0 && (e = "default"), n = qj(r, t, e), !rd(n) || nd(n))
      return n;
    throw new Jj("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), Gj(t, e);
}, Yj = Wj, Xj = Zv, ig = function(t) {
  var e = Yj(t, "string");
  return Xj(e) ? e : e + "";
}, Qj = rt, sd = Ot, Ju = Qj.document, Zj = sd(Ju) && sd(Ju.createElement), og = function(t) {
  return Zj ? Ju.createElement(t) : {};
}, e_ = ur, t_ = ft, r_ = og, ag = !e_ && !t_(function() {
  return Object.defineProperty(r_("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), n_ = ur, s_ = Ir, i_ = Jv, o_ = Es, a_ = As, c_ = ig, u_ = Ht, l_ = ag, id = Object.getOwnPropertyDescriptor;
Uf.f = n_ ? id : function(e, r) {
  if (e = a_(e), r = c_(r), l_)
    try {
      return id(e, r);
    } catch {
    }
  if (u_(e, r))
    return o_(!s_(i_.f, e, r), e[r]);
};
var f_ = ft, p_ = nt, h_ = /#|\.prototype\./, js = function(t, e) {
  var r = m_[d_(t)];
  return r === v_ ? !0 : r === y_ ? !1 : p_(e) ? f_(e) : !!e;
}, d_ = js.normalize = function(t) {
  return String(t).replace(h_, ".").toLowerCase();
}, m_ = js.data = {}, y_ = js.NATIVE = "N", v_ = js.POLYFILL = "P", g_ = js, od = zv, b_ = ba, $_ = ya, x_ = od(od.bind), cg = function(t, e) {
  return b_(t), e === void 0 ? t : $_ ? x_(t, e) : function() {
    return t.apply(e, arguments);
  };
}, Cr = {}, S_ = ur, w_ = ft, ug = S_ && w_(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), O_ = Ot, E_ = String, A_ = TypeError, Fr = function(t) {
  if (O_(t))
    return t;
  throw new A_(E_(t) + " is not an object");
}, P_ = ur, j_ = ag, __ = ug, li = Fr, ad = ig, R_ = TypeError, Kc = Object.defineProperty, T_ = Object.getOwnPropertyDescriptor, Wc = "enumerable", Yc = "configurable", Xc = "writable";
Cr.f = P_ ? __ ? function(e, r, n) {
  if (li(e), r = ad(r), li(n), typeof e == "function" && r === "prototype" && "value" in n && Xc in n && !n[Xc]) {
    var s = T_(e, r);
    s && s[Xc] && (e[r] = n.value, n = {
      configurable: Yc in n ? n[Yc] : s[Yc],
      enumerable: Wc in n ? n[Wc] : s[Wc],
      writable: !1
    });
  }
  return Kc(e, r, n);
} : Kc : function(e, r, n) {
  if (li(e), r = ad(r), li(n), j_)
    try {
      return Kc(e, r, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw new R_("Accessors not supported");
  return "value" in n && (e[r] = n.value), e;
};
var I_ = ur, C_ = Cr, F_ = Es, lr = I_ ? function(t, e, r) {
  return C_.f(t, e, F_(1, r));
} : function(t, e, r) {
  return t[e] = r, t;
}, Un = rt, M_ = Lf, V_ = zv, D_ = nt, N_ = Uf.f, L_ = g_, Hr = qf, k_ = cg, Gr = lr, cd = Ht, U_ = function(t) {
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
    return M_(t, this, arguments);
  };
  return e.prototype = t.prototype, e;
}, $a = function(t, e) {
  var r = t.target, n = t.global, s = t.stat, i = t.proto, o = n ? Un : s ? Un[r] : Un[r] && Un[r].prototype, a = n ? Hr : Hr[r] || Gr(Hr, r, {})[r], c = a.prototype, u, p, f, h, l, d, m, y, v;
  for (h in e)
    u = L_(n ? h : r + (s ? "." : "#") + h, t.forced), p = !u && o && cd(o, h), d = a[h], p && (t.dontCallGetSet ? (v = N_(o, h), m = v && v.value) : m = o[h]), l = p && m ? m : e[h], !(!u && !i && typeof d == typeof l) && (t.bind && p ? y = k_(l, Un) : t.wrap && p ? y = U_(l) : i && D_(l) ? y = V_(l) : y = l, (t.sham || l && l.sham || d && d.sham) && Gr(y, "sham", !0), Gr(a, h, y), i && (f = r + "Prototype", cd(Hr, f) || Gr(Hr, f, {}), Gr(Hr[f], h, l), t.real && c && (u || !c[h]) && Gr(c, h, l)));
}, B_ = rg, q_ = sg, ud = B_("keys"), zf = function(t) {
  return ud[t] || (ud[t] = q_(t));
}, H_ = ft, G_ = !H_(function() {
  function t() {
  }
  return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
}), z_ = Ht, J_ = nt, K_ = ng, W_ = zf, Y_ = G_, ld = W_("IE_PROTO"), Ku = Object, X_ = Ku.prototype, Jf = Y_ ? Ku.getPrototypeOf : function(t) {
  var e = K_(t);
  if (z_(e, ld))
    return e[ld];
  var r = e.constructor;
  return J_(r) && e instanceof r ? r.prototype : e instanceof Ku ? X_ : null;
}, Q_ = pt, Z_ = ba, eR = function(t, e, r) {
  try {
    return Q_(Z_(Object.getOwnPropertyDescriptor(t, e)[r]));
  } catch {
  }
}, tR = Ot, rR = function(t) {
  return tR(t) || t === null;
}, nR = rR, sR = String, iR = TypeError, oR = function(t) {
  if (nR(t))
    return t;
  throw new iR("Can't set " + sR(t) + " as a prototype");
}, aR = eR, cR = Ot, uR = va, lR = oR, Kf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t = !1, e = {}, r;
  try {
    r = aR(Object.prototype, "__proto__", "set"), r(e, []), t = e instanceof Array;
  } catch {
  }
  return function(s, i) {
    return uR(s), lR(i), cR(s) && (t ? r(s, i) : s.__proto__ = i), s;
  };
}() : void 0), lg = {}, fR = Math.ceil, pR = Math.floor, hR = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? pR : fR)(r);
}, dR = hR, Wf = function(t) {
  var e = +t;
  return e !== e || e === 0 ? 0 : dR(e);
}, mR = Wf, yR = Math.max, vR = Math.min, gR = function(t, e) {
  var r = mR(t);
  return r < 0 ? yR(r + e, 0) : vR(r, e);
}, bR = Wf, $R = Math.min, xR = function(t) {
  var e = bR(t);
  return e > 0 ? $R(e, 9007199254740991) : 0;
}, SR = xR, fg = function(t) {
  return SR(t.length);
}, wR = As, OR = gR, ER = fg, fd = function(t) {
  return function(e, r, n) {
    var s = wR(e), i = ER(s);
    if (i === 0)
      return !t && -1;
    var o = OR(n, i), a;
    if (t && r !== r) {
      for (; i > o; )
        if (a = s[o++], a !== a)
          return !0;
    } else
      for (; i > o; o++)
        if ((t || o in s) && s[o] === r)
          return t || o || 0;
    return !t && -1;
  };
}, AR = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: fd(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: fd(!1)
}, Yf = {}, PR = pt, Qc = Ht, jR = As, _R = AR.indexOf, RR = Yf, pd = PR([].push), pg = function(t, e) {
  var r = jR(t), n = 0, s = [], i;
  for (i in r)
    !Qc(RR, i) && Qc(r, i) && pd(s, i);
  for (; e.length > n; )
    Qc(r, i = e[n++]) && (~_R(s, i) || pd(s, i));
  return s;
}, Xf = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], TR = pg, IR = Xf, CR = IR.concat("length", "prototype");
lg.f = Object.getOwnPropertyNames || function(e) {
  return TR(e, CR);
};
var hg = {};
hg.f = Object.getOwnPropertySymbols;
var FR = Ps, MR = pt, VR = lg, DR = hg, NR = Fr, LR = MR([].concat), kR = FR("Reflect", "ownKeys") || function(e) {
  var r = VR.f(NR(e)), n = DR.f;
  return n ? LR(r, n(e)) : r;
}, hd = Ht, UR = kR, BR = Uf, qR = Cr, dg = function(t, e, r) {
  for (var n = UR(e), s = qR.f, i = BR.f, o = 0; o < n.length; o++) {
    var a = n[o];
    !hd(t, a) && !(r && hd(r, a)) && s(t, a, i(e, a));
  }
}, mg = {}, HR = pg, GR = Xf, zR = Object.keys || function(e) {
  return HR(e, GR);
}, JR = ur, KR = ug, WR = Cr, YR = Fr, XR = As, QR = zR;
mg.f = JR && !KR ? Object.defineProperties : function(e, r) {
  YR(e);
  for (var n = XR(r), s = QR(r), i = s.length, o = 0, a; i > o; )
    WR.f(e, a = s[o++], n[a]);
  return e;
};
var ZR = Ps, eT = ZR("document", "documentElement"), tT = Fr, rT = mg, dd = Xf, nT = Yf, sT = eT, iT = og, oT = zf, md = ">", yd = "<", Wu = "prototype", Yu = "script", yg = oT("IE_PROTO"), Zc = function() {
}, vg = function(t) {
  return yd + Yu + md + t + yd + "/" + Yu + md;
}, vd = function(t) {
  t.write(vg("")), t.close();
  var e = t.parentWindow.Object;
  return t = null, e;
}, aT = function() {
  var t = iT("iframe"), e = "java" + Yu + ":", r;
  return t.style.display = "none", sT.appendChild(t), t.src = String(e), r = t.contentWindow.document, r.open(), r.write(vg("document.F=Object")), r.close(), r.F;
}, fi, Oi = function() {
  try {
    fi = new ActiveXObject("htmlfile");
  } catch {
  }
  Oi = typeof document < "u" ? document.domain && fi ? vd(fi) : aT() : vd(fi);
  for (var t = dd.length; t--; )
    delete Oi[Wu][dd[t]];
  return Oi();
};
nT[yg] = !0;
var Qf = Object.create || function(e, r) {
  var n;
  return e !== null ? (Zc[Wu] = tT(e), n = new Zc(), Zc[Wu] = null, n[yg] = e) : n = Oi(), r === void 0 ? n : rT.f(n, r);
}, cT = Ot, uT = lr, gg = function(t, e) {
  cT(e) && "cause" in e && uT(t, "cause", e.cause);
}, lT = pt, bg = Error, fT = lT("".replace), pT = function(t) {
  return String(new bg(t).stack);
}("zxcasd"), $g = /\n\s*at [^:]*:[^\n]*/, hT = $g.test(pT), dT = function(t, e) {
  if (hT && typeof t == "string" && !bg.prepareStackTrace)
    for (; e--; )
      t = fT(t, $g, "");
  return t;
}, mT = ft, yT = Es, vT = !mT(function() {
  var t = new Error("a");
  return "stack" in t ? (Object.defineProperty(t, "stack", yT(1, 7)), t.stack !== 7) : !0;
}), gT = lr, bT = dT, $T = vT, gd = Error.captureStackTrace, xg = function(t, e, r, n) {
  $T && (gd ? gd(t, e) : gT(t, "stack", bT(r, n)));
}, wn = {}, xT = Gt, ST = wn, wT = xT("iterator"), OT = Array.prototype, ET = function(t) {
  return t !== void 0 && (ST.Array === t || OT[wT] === t);
}, AT = Gt, PT = AT("toStringTag"), Sg = {};
Sg[PT] = "z";
var Zf = String(Sg) === "[object z]", jT = Zf, _T = nt, Ei = kf, RT = Gt, TT = RT("toStringTag"), IT = Object, CT = Ei(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", FT = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, ep = jT ? Ei : function(t) {
  var e, r, n;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (r = FT(e = IT(t), TT)) == "string" ? r : CT ? Ei(e) : (n = Ei(e)) === "Object" && _T(e.callee) ? "Arguments" : n;
}, MT = ep, bd = Gf, VT = Bf, DT = wn, NT = Gt, LT = NT("iterator"), wg = function(t) {
  if (!VT(t))
    return bd(t, LT) || bd(t, "@@iterator") || DT[MT(t)];
}, kT = Ir, UT = ba, BT = Fr, qT = Hf, HT = wg, GT = TypeError, zT = function(t, e) {
  var r = arguments.length < 2 ? HT(t) : e;
  if (UT(r))
    return BT(kT(r, t));
  throw new GT(qT(t) + " is not iterable");
}, JT = Ir, $d = Fr, KT = Gf, WT = function(t, e, r) {
  var n, s;
  $d(t);
  try {
    if (n = KT(t, "return"), !n) {
      if (e === "throw")
        throw r;
      return r;
    }
    n = JT(n, t);
  } catch (i) {
    s = !0, n = i;
  }
  if (e === "throw")
    throw r;
  if (s)
    throw n;
  return $d(n), r;
}, YT = cg, XT = Ir, QT = Fr, ZT = Hf, eI = ET, tI = fg, xd = ga, rI = zT, nI = wg, Sd = WT, sI = TypeError, Ai = function(t, e) {
  this.stopped = t, this.result = e;
}, wd = Ai.prototype, iI = function(t, e, r) {
  var n = r && r.that, s = !!(r && r.AS_ENTRIES), i = !!(r && r.IS_RECORD), o = !!(r && r.IS_ITERATOR), a = !!(r && r.INTERRUPTED), c = YT(e, n), u, p, f, h, l, d, m, y = function(b) {
    return u && Sd(u, "normal", b), new Ai(!0, b);
  }, v = function(b) {
    return s ? (QT(b), a ? c(b[0], b[1], y) : c(b[0], b[1])) : a ? c(b, y) : c(b);
  };
  if (i)
    u = t.iterator;
  else if (o)
    u = t;
  else {
    if (p = nI(t), !p)
      throw new sI(ZT(t) + " is not iterable");
    if (eI(p)) {
      for (f = 0, h = tI(t); h > f; f++)
        if (l = v(t[f]), l && xd(wd, l))
          return l;
      return new Ai(!1);
    }
    u = rI(t, p);
  }
  for (d = i ? t.next : u.next; !(m = XT(d, u)).done; ) {
    try {
      l = v(m.value);
    } catch (b) {
      Sd(u, "throw", b);
    }
    if (typeof l == "object" && l && xd(wd, l))
      return l;
  }
  return new Ai(!1);
}, oI = ep, aI = String, tp = function(t) {
  if (oI(t) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return aI(t);
}, cI = tp, Og = function(t, e) {
  return t === void 0 ? arguments.length < 2 ? "" : e : cI(t);
}, uI = $a, lI = ga, fI = Jf, Zi = Kf, pI = dg, Eg = Qf, eu = lr, tu = Es, hI = gg, dI = xg, mI = iI, yI = Og, vI = Gt, gI = vI("toStringTag"), eo = Error, bI = [].push, mn = function(e, r) {
  var n = lI(ru, this), s;
  Zi ? s = Zi(new eo(), n ? fI(this) : ru) : (s = n ? this : Eg(ru), eu(s, gI, "Error")), r !== void 0 && eu(s, "message", yI(r)), dI(s, mn, s.stack, 1), arguments.length > 2 && hI(s, arguments[2]);
  var i = [];
  return mI(e, bI, { that: i }), eu(s, "errors", i), s;
};
Zi ? Zi(mn, eo) : pI(mn, eo, { name: !0 });
var ru = mn.prototype = Eg(eo.prototype, {
  constructor: tu(1, mn),
  message: tu(1, ""),
  name: tu(1, "AggregateError")
});
uI({ global: !0, constructor: !0, arity: 2 }, {
  AggregateError: mn
});
var $I = Cr.f, xI = function(t, e, r) {
  r in t || $I(t, r, {
    configurable: !0,
    get: function() {
      return e[r];
    },
    set: function(n) {
      e[r] = n;
    }
  });
}, SI = nt, wI = Ot, Od = Kf, OI = function(t, e, r) {
  var n, s;
  return (
    // it can work only with native `setPrototypeOf`
    Od && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    SI(n = e.constructor) && n !== r && wI(s = n.prototype) && s !== r.prototype && Od(t, s), t
  );
}, Ed = Ps, EI = lr, AI = ga, Ad = Kf, Pd = dg, jd = xI, PI = OI, jI = Og, _I = gg, RI = xg, TI = ur, Ag = function(t, e, r, n) {
  var s = "stackTraceLimit", i = n ? 2 : 1, o = t.split("."), a = o[o.length - 1], c = Ed.apply(null, o);
  if (c) {
    var u = c.prototype;
    if (!r)
      return c;
    var p = Ed("Error"), f = e(function(h, l) {
      var d = jI(n ? l : h, void 0), m = n ? new c(h) : new c();
      return d !== void 0 && EI(m, "message", d), RI(m, f, m.stack, 2), this && AI(u, this) && PI(m, this, f), arguments.length > i && _I(m, arguments[i]), m;
    });
    return f.prototype = u, a !== "Error" ? Ad ? Ad(f, p) : Pd(f, p, { name: !0 }) : TI && s in c && (jd(f, c, s), jd(f, c, "prepareStackTrace")), Pd(f, c), f;
  }
}, Pg = $a, II = rt, Et = Lf, jg = Ag, Xu = "WebAssembly", _d = II[Xu], to = new Error("e", { cause: 7 }).cause !== 7, Mr = function(t, e) {
  var r = {};
  r[t] = jg(t, e, to), Pg({ global: !0, constructor: !0, arity: 1, forced: to }, r);
}, rp = function(t, e) {
  if (_d && _d[t]) {
    var r = {};
    r[t] = jg(Xu + "." + t, e, to), Pg({ target: Xu, stat: !0, constructor: !0, arity: 1, forced: to }, r);
  }
};
Mr("Error", function(t) {
  return function(r) {
    return Et(t, this, arguments);
  };
});
Mr("EvalError", function(t) {
  return function(r) {
    return Et(t, this, arguments);
  };
});
Mr("RangeError", function(t) {
  return function(r) {
    return Et(t, this, arguments);
  };
});
Mr("ReferenceError", function(t) {
  return function(r) {
    return Et(t, this, arguments);
  };
});
Mr("SyntaxError", function(t) {
  return function(r) {
    return Et(t, this, arguments);
  };
});
Mr("TypeError", function(t) {
  return function(r) {
    return Et(t, this, arguments);
  };
});
Mr("URIError", function(t) {
  return function(r) {
    return Et(t, this, arguments);
  };
});
rp("CompileError", function(t) {
  return function(r) {
    return Et(t, this, arguments);
  };
});
rp("LinkError", function(t) {
  return function(r) {
    return Et(t, this, arguments);
  };
});
rp("RuntimeError", function(t) {
  return function(r) {
    return Et(t, this, arguments);
  };
});
var CI = $a, FI = Ps, MI = Lf, Rd = ft, VI = Ag, np = "AggregateError", Td = FI(np), Id = !Rd(function() {
  return Td([1]).errors[0] !== 1;
}) && Rd(function() {
  return Td([1], np, { cause: 7 }).cause !== 7;
});
CI({ global: !0, constructor: !0, arity: 2, forced: Id }, {
  AggregateError: VI(np, function(t) {
    return function(r, n) {
      return MI(t, this, arguments);
    };
  }, Id, !0)
});
var DI = rt, NI = nt, Cd = DI.WeakMap, LI = NI(Cd) && /native code/.test(String(Cd)), kI = LI, _g = rt, UI = Ot, BI = lr, nu = Ht, su = tg, qI = zf, HI = Yf, Fd = "Object already initialized", Qu = _g.TypeError, GI = _g.WeakMap, ro, as, no, zI = function(t) {
  return no(t) ? as(t) : ro(t, {});
}, JI = function(t) {
  return function(e) {
    var r;
    if (!UI(e) || (r = as(e)).type !== t)
      throw new Qu("Incompatible receiver, " + t + " required");
    return r;
  };
};
if (kI || su.state) {
  var dt = su.state || (su.state = new GI());
  dt.get = dt.get, dt.has = dt.has, dt.set = dt.set, ro = function(t, e) {
    if (dt.has(t))
      throw new Qu(Fd);
    return e.facade = t, dt.set(t, e), e;
  }, as = function(t) {
    return dt.get(t) || {};
  }, no = function(t) {
    return dt.has(t);
  };
} else {
  var zr = qI("state");
  HI[zr] = !0, ro = function(t, e) {
    if (nu(t, zr))
      throw new Qu(Fd);
    return e.facade = t, BI(t, zr, e), e;
  }, as = function(t) {
    return nu(t, zr) ? t[zr] : {};
  }, no = function(t) {
    return nu(t, zr);
  };
}
var Rg = {
  set: ro,
  get: as,
  has: no,
  enforce: zI,
  getterFor: JI
}, Zu = ur, KI = Ht, Tg = Function.prototype, WI = Zu && Object.getOwnPropertyDescriptor, sp = KI(Tg, "name"), YI = sp && (function() {
}).name === "something", XI = sp && (!Zu || Zu && WI(Tg, "name").configurable), QI = {
  EXISTS: sp,
  PROPER: YI,
  CONFIGURABLE: XI
}, ZI = lr, Ig = function(t, e, r, n) {
  return n && n.enumerable ? t[e] = r : ZI(t, e, r), t;
}, eC = ft, tC = nt, rC = Ot, nC = Qf, Md = Jf, sC = Ig, iC = Gt, el = iC("iterator"), Cg = !1, Tt, iu, ou;
[].keys && (ou = [].keys(), "next" in ou ? (iu = Md(Md(ou)), iu !== Object.prototype && (Tt = iu)) : Cg = !0);
var oC = !rC(Tt) || eC(function() {
  var t = {};
  return Tt[el].call(t) !== t;
});
oC ? Tt = {} : Tt = nC(Tt);
tC(Tt[el]) || sC(Tt, el, function() {
  return this;
});
var Fg = {
  IteratorPrototype: Tt,
  BUGGY_SAFARI_ITERATORS: Cg
}, aC = Zf, cC = ep, uC = aC ? {}.toString : function() {
  return "[object " + cC(this) + "]";
}, lC = Zf, fC = Cr.f, pC = lr, hC = Ht, dC = uC, mC = Gt, Vd = mC("toStringTag"), ip = function(t, e, r, n) {
  var s = r ? t : t && t.prototype;
  s && (hC(s, Vd) || fC(s, Vd, { configurable: !0, value: e }), n && !lC && pC(s, "toString", dC));
}, yC = Fg.IteratorPrototype, vC = Qf, gC = Es, bC = ip, $C = wn, xC = function() {
  return this;
}, SC = function(t, e, r, n) {
  var s = e + " Iterator";
  return t.prototype = vC(yC, { next: gC(+!n, r) }), bC(t, s, !1, !0), $C[s] = xC, t;
}, wC = $a, OC = Ir, Mg = QI, EC = SC, AC = Jf, PC = ip, Dd = Ig, jC = Gt, Nd = wn, Vg = Fg, _C = Mg.PROPER;
Mg.CONFIGURABLE;
Vg.IteratorPrototype;
var pi = Vg.BUGGY_SAFARI_ITERATORS, au = jC("iterator"), Ld = "keys", hi = "values", kd = "entries", RC = function() {
  return this;
}, Dg = function(t, e, r, n, s, i, o) {
  EC(r, e, n);
  var a = function(v) {
    if (v === s && h)
      return h;
    if (!pi && v && v in p)
      return p[v];
    switch (v) {
      case Ld:
        return function() {
          return new r(this, v);
        };
      case hi:
        return function() {
          return new r(this, v);
        };
      case kd:
        return function() {
          return new r(this, v);
        };
    }
    return function() {
      return new r(this);
    };
  }, c = e + " Iterator", u = !1, p = t.prototype, f = p[au] || p["@@iterator"] || s && p[s], h = !pi && f || a(s), l = e === "Array" && p.entries || f, d, m, y;
  if (l && (d = AC(l.call(new t())), d !== Object.prototype && d.next && (PC(d, c, !0, !0), Nd[c] = RC)), _C && s === hi && f && f.name !== hi && (u = !0, h = function() {
    return OC(f, this);
  }), s)
    if (m = {
      values: a(hi),
      keys: i ? h : a(Ld),
      entries: a(kd)
    }, o)
      for (y in m)
        (pi || u || !(y in p)) && Dd(p, y, m[y]);
    else
      wC({ target: e, proto: !0, forced: pi || u }, m);
  return o && p[au] !== h && Dd(p, au, h, { name: s }), Nd[e] = h, m;
}, Ng = function(t, e) {
  return { value: t, done: e };
}, TC = As, Ud = wn, Lg = Rg;
Cr.f;
var IC = Dg, di = Ng, kg = "Array Iterator", CC = Lg.set, FC = Lg.getterFor(kg);
IC(Array, "Array", function(t, e) {
  CC(this, {
    type: kg,
    target: TC(t),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var t = FC(this), e = t.target, r = t.index++;
  if (!e || r >= e.length)
    return t.target = void 0, di(void 0, !0);
  switch (t.kind) {
    case "keys":
      return di(r, !1);
    case "values":
      return di(e[r], !1);
  }
  return di([r, e[r]], !1);
}, "values");
Ud.Arguments = Ud.Array;
var op = pt, MC = Wf, VC = tp, DC = va, NC = op("".charAt), Bd = op("".charCodeAt), LC = op("".slice), qd = function(t) {
  return function(e, r) {
    var n = VC(DC(e)), s = MC(r), i = n.length, o, a;
    return s < 0 || s >= i ? t ? "" : void 0 : (o = Bd(n, s), o < 55296 || o > 56319 || s + 1 === i || (a = Bd(n, s + 1)) < 56320 || a > 57343 ? t ? NC(n, s) : o : t ? LC(n, s, s + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
  };
}, kC = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: qd(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: qd(!0)
}, UC = kC.charAt, BC = tp, Ug = Rg, qC = Dg, Hd = Ng, Bg = "String Iterator", HC = Ug.set, GC = Ug.getterFor(Bg);
qC(String, "String", function(t) {
  HC(this, {
    type: Bg,
    string: BC(t),
    index: 0
  });
}, function() {
  var e = GC(this), r = e.string, n = e.index, s;
  return n >= r.length ? Hd(void 0, !0) : (s = UC(r, n), e.index += s.length, Hd(s, !1));
});
var zC = qf, JC = zC.AggregateError, KC = {
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
}, WC = KC, YC = rt, XC = ip, Gd = wn;
for (var cu in WC)
  XC(YC[cu], cu), Gd[cu] = Gd.Array;
var QC = JC, ZC = QC, eF = ZC, tF = eF, rF = tF, nF = rF, sF = nF, iF = sF;
const oF = /* @__PURE__ */ jr(iF);
class aF extends oF {
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
class cF extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(aF, e);
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
const me = cF;
class uF extends me {
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
const sr = uF;
class Re extends me {
}
class lF extends Re {
}
const bt = lF;
class fF extends me {
  constructor(r, n) {
    super(r, {
      cause: n.cause
    });
    P(this, "plugin");
    this.plugin = n.plugin;
  }
}
const ap = async (t, e, r) => {
  const n = await Promise.all(r.map(is([t], e)));
  return r.filter((s, i) => n[i]);
}, cp = async (t, e, r) => {
  let n;
  for (const s of r)
    try {
      const i = await s[t].call(s, ...e);
      return {
        plugin: s,
        result: i
      };
    } catch (i) {
      n = new fF("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class tl extends me {
}
class up extends me {
}
class pF extends up {
}
const qg = pF;
class hF extends qg {
}
const Hg = hF, dF = async (t, e) => {
  const r = e.resolve.resolvers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.resolve.resolverOpts);
  }), n = await ap("canRead", [t, e], r);
  if (ws(n))
    throw new Hg(t.uri);
  try {
    const {
      result: s
    } = await cp("read", [t], n);
    return s;
  } catch (s) {
    throw new up(`Error while reading file "${t.uri}"`, {
      cause: s
    });
  }
}, mF = async (t, e) => {
  const r = e.parse.parsers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.parse.parserOpts);
  }), n = await ap("canParse", [t, e], r);
  if (ws(n))
    throw new Hg(t.uri);
  try {
    const {
      plugin: s,
      result: i
    } = await cp("parse", [t, e], n);
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new tl(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new tl(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, yF = async (t, e) => {
  const r = os({
    uri: Os(ne(t)),
    mediaType: e.parse.mediaType
  }), n = await dF(r, e);
  return mF(os({
    ...r,
    data: n
  }), e);
};
function vF(t) {
  return t === null;
}
var gF = vF, bF = typeof jt == "object" && jt && jt.Object === Object && jt, Gg = bF, $F = Gg, xF = typeof self == "object" && self && self.Object === Object && self, SF = $F || xF || Function("return this")(), zt = SF, wF = zt, OF = wF.Symbol, lp = OF, zd = lp, zg = Object.prototype, EF = zg.hasOwnProperty, AF = zg.toString, Bn = zd ? zd.toStringTag : void 0;
function PF(t) {
  var e = EF.call(t, Bn), r = t[Bn];
  try {
    t[Bn] = void 0;
    var n = !0;
  } catch {
  }
  var s = AF.call(t);
  return n && (e ? t[Bn] = r : delete t[Bn]), s;
}
var jF = PF, _F = Object.prototype, RF = _F.toString;
function TF(t) {
  return RF.call(t);
}
var IF = TF, Jd = lp, CF = jF, FF = IF, MF = "[object Null]", VF = "[object Undefined]", Kd = Jd ? Jd.toStringTag : void 0;
function DF(t) {
  return t == null ? t === void 0 ? VF : MF : Kd && Kd in Object(t) ? CF(t) : FF(t);
}
var Vr = DF, NF = Array.isArray, xa = NF;
function LF(t) {
  return t != null && typeof t == "object";
}
var Dr = LF, kF = Vr, UF = xa, BF = Dr, qF = "[object String]";
function HF(t) {
  return typeof t == "string" || !UF(t) && BF(t) && kF(t) == qF;
}
var GF = HF, zF = Vr, JF = Dr, KF = "[object Number]";
function WF(t) {
  return typeof t == "number" || JF(t) && zF(t) == KF;
}
var YF = WF, XF = Vr, QF = Dr, ZF = "[object Boolean]";
function eM(t) {
  return t === !0 || t === !1 || QF(t) && XF(t) == ZF;
}
var tM = eM;
function rM(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Sa = rM;
let nM = class {
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
var sM = nM;
function iM() {
  this.__data__ = [], this.size = 0;
}
var oM = iM;
function aM(t, e) {
  return t === e || t !== t && e !== e;
}
var Jg = aM, cM = Jg;
function uM(t, e) {
  for (var r = t.length; r--; )
    if (cM(t[r][0], e))
      return r;
  return -1;
}
var wa = uM, lM = wa, fM = Array.prototype, pM = fM.splice;
function hM(t) {
  var e = this.__data__, r = lM(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : pM.call(e, r, 1), --this.size, !0;
}
var dM = hM, mM = wa;
function yM(t) {
  var e = this.__data__, r = mM(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var vM = yM, gM = wa;
function bM(t) {
  return gM(this.__data__, t) > -1;
}
var $M = bM, xM = wa;
function SM(t, e) {
  var r = this.__data__, n = xM(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
var wM = SM, OM = oM, EM = dM, AM = vM, PM = $M, jM = wM;
function On(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
On.prototype.clear = OM;
On.prototype.delete = EM;
On.prototype.get = AM;
On.prototype.has = PM;
On.prototype.set = jM;
var Oa = On, _M = Oa;
function RM() {
  this.__data__ = new _M(), this.size = 0;
}
var TM = RM;
function IM(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
var CM = IM;
function FM(t) {
  return this.__data__.get(t);
}
var MM = FM;
function VM(t) {
  return this.__data__.has(t);
}
var DM = VM, NM = Vr, LM = Sa, kM = "[object AsyncFunction]", UM = "[object Function]", BM = "[object GeneratorFunction]", qM = "[object Proxy]";
function HM(t) {
  if (!LM(t))
    return !1;
  var e = NM(t);
  return e == UM || e == BM || e == kM || e == qM;
}
var Kg = HM, GM = zt, zM = GM["__core-js_shared__"], JM = zM, uu = JM, Wd = function() {
  var t = /[^.]+$/.exec(uu && uu.keys && uu.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function KM(t) {
  return !!Wd && Wd in t;
}
var WM = KM, YM = Function.prototype, XM = YM.toString;
function QM(t) {
  if (t != null) {
    try {
      return XM.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Wg = QM, ZM = Kg, eV = WM, tV = Sa, rV = Wg, nV = /[\\^$.*+?()[\]{}|]/g, sV = /^\[object .+?Constructor\]$/, iV = Function.prototype, oV = Object.prototype, aV = iV.toString, cV = oV.hasOwnProperty, uV = RegExp(
  "^" + aV.call(cV).replace(nV, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function lV(t) {
  if (!tV(t) || eV(t))
    return !1;
  var e = ZM(t) ? uV : sV;
  return e.test(rV(t));
}
var fV = lV;
function pV(t, e) {
  return t == null ? void 0 : t[e];
}
var hV = pV, dV = fV, mV = hV;
function yV(t, e) {
  var r = mV(t, e);
  return dV(r) ? r : void 0;
}
var En = yV, vV = En, gV = zt, bV = vV(gV, "Map"), fp = bV, $V = En, xV = $V(Object, "create"), Ea = xV, Yd = Ea;
function SV() {
  this.__data__ = Yd ? Yd(null) : {}, this.size = 0;
}
var wV = SV;
function OV(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var EV = OV, AV = Ea, PV = "__lodash_hash_undefined__", jV = Object.prototype, _V = jV.hasOwnProperty;
function RV(t) {
  var e = this.__data__;
  if (AV) {
    var r = e[t];
    return r === PV ? void 0 : r;
  }
  return _V.call(e, t) ? e[t] : void 0;
}
var TV = RV, IV = Ea, CV = Object.prototype, FV = CV.hasOwnProperty;
function MV(t) {
  var e = this.__data__;
  return IV ? e[t] !== void 0 : FV.call(e, t);
}
var VV = MV, DV = Ea, NV = "__lodash_hash_undefined__";
function LV(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = DV && e === void 0 ? NV : e, this;
}
var kV = LV, UV = wV, BV = EV, qV = TV, HV = VV, GV = kV;
function An(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
An.prototype.clear = UV;
An.prototype.delete = BV;
An.prototype.get = qV;
An.prototype.has = HV;
An.prototype.set = GV;
var zV = An, Xd = zV, JV = Oa, KV = fp;
function WV() {
  this.size = 0, this.__data__ = {
    hash: new Xd(),
    map: new (KV || JV)(),
    string: new Xd()
  };
}
var YV = WV;
function XV(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var QV = XV, ZV = QV;
function eD(t, e) {
  var r = t.__data__;
  return ZV(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var Aa = eD, tD = Aa;
function rD(t) {
  var e = tD(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var nD = rD, sD = Aa;
function iD(t) {
  return sD(this, t).get(t);
}
var oD = iD, aD = Aa;
function cD(t) {
  return aD(this, t).has(t);
}
var uD = cD, lD = Aa;
function fD(t, e) {
  var r = lD(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
var pD = fD, hD = YV, dD = nD, mD = oD, yD = uD, vD = pD;
function Pn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
Pn.prototype.clear = hD;
Pn.prototype.delete = dD;
Pn.prototype.get = mD;
Pn.prototype.has = yD;
Pn.prototype.set = vD;
var Yg = Pn, gD = Oa, bD = fp, $D = Yg, xD = 200;
function SD(t, e) {
  var r = this.__data__;
  if (r instanceof gD) {
    var n = r.__data__;
    if (!bD || n.length < xD - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new $D(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
var wD = SD, OD = Oa, ED = TM, AD = CM, PD = MM, jD = DM, _D = wD;
function jn(t) {
  var e = this.__data__ = new OD(t);
  this.size = e.size;
}
jn.prototype.clear = ED;
jn.prototype.delete = AD;
jn.prototype.get = PD;
jn.prototype.has = jD;
jn.prototype.set = _D;
var RD = jn, TD = "__lodash_hash_undefined__";
function ID(t) {
  return this.__data__.set(t, TD), this;
}
var CD = ID;
function FD(t) {
  return this.__data__.has(t);
}
var MD = FD, VD = Yg, DD = CD, ND = MD;
function so(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new VD(); ++e < r; )
    this.add(t[e]);
}
so.prototype.add = so.prototype.push = DD;
so.prototype.has = ND;
var LD = so;
function kD(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
var UD = kD;
function BD(t, e) {
  return t.has(e);
}
var qD = BD, HD = LD, GD = UD, zD = qD, JD = 1, KD = 2;
function WD(t, e, r, n, s, i) {
  var o = r & JD, a = t.length, c = e.length;
  if (a != c && !(o && c > a))
    return !1;
  var u = i.get(t), p = i.get(e);
  if (u && p)
    return u == e && p == t;
  var f = -1, h = !0, l = r & KD ? new HD() : void 0;
  for (i.set(t, e), i.set(e, t); ++f < a; ) {
    var d = t[f], m = e[f];
    if (n)
      var y = o ? n(m, d, f, e, t, i) : n(d, m, f, t, e, i);
    if (y !== void 0) {
      if (y)
        continue;
      h = !1;
      break;
    }
    if (l) {
      if (!GD(e, function(v, b) {
        if (!zD(l, b) && (d === v || s(d, v, r, n, i)))
          return l.push(b);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === m || s(d, m, r, n, i))) {
      h = !1;
      break;
    }
  }
  return i.delete(t), i.delete(e), h;
}
var Xg = WD, YD = zt, XD = YD.Uint8Array, QD = XD;
function ZD(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n, s) {
    r[++e] = [s, n];
  }), r;
}
var eN = ZD;
function tN(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n) {
    r[++e] = n;
  }), r;
}
var rN = tN, Qd = lp, Zd = QD, nN = Jg, sN = Xg, iN = eN, oN = rN, aN = 1, cN = 2, uN = "[object Boolean]", lN = "[object Date]", fN = "[object Error]", pN = "[object Map]", hN = "[object Number]", dN = "[object RegExp]", mN = "[object Set]", yN = "[object String]", vN = "[object Symbol]", gN = "[object ArrayBuffer]", bN = "[object DataView]", em = Qd ? Qd.prototype : void 0, lu = em ? em.valueOf : void 0;
function $N(t, e, r, n, s, i, o) {
  switch (r) {
    case bN:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case gN:
      return !(t.byteLength != e.byteLength || !i(new Zd(t), new Zd(e)));
    case uN:
    case lN:
    case hN:
      return nN(+t, +e);
    case fN:
      return t.name == e.name && t.message == e.message;
    case dN:
    case yN:
      return t == e + "";
    case pN:
      var a = iN;
    case mN:
      var c = n & aN;
      if (a || (a = oN), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      n |= cN, o.set(t, e);
      var p = sN(a(t), a(e), n, s, i, o);
      return o.delete(t), p;
    case vN:
      if (lu)
        return lu.call(t) == lu.call(e);
  }
  return !1;
}
var xN = $N;
function SN(t, e) {
  for (var r = -1, n = e.length, s = t.length; ++r < n; )
    t[s + r] = e[r];
  return t;
}
var wN = SN, ON = wN, EN = xa;
function AN(t, e, r) {
  var n = e(t);
  return EN(t) ? n : ON(n, r(t));
}
var PN = AN;
function jN(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, s = 0, i = []; ++r < n; ) {
    var o = t[r];
    e(o, r, t) && (i[s++] = o);
  }
  return i;
}
var _N = jN;
function RN() {
  return [];
}
var TN = RN, IN = _N, CN = TN, FN = Object.prototype, MN = FN.propertyIsEnumerable, tm = Object.getOwnPropertySymbols, VN = tm ? function(t) {
  return t == null ? [] : (t = Object(t), IN(tm(t), function(e) {
    return MN.call(t, e);
  }));
} : CN, DN = VN;
function NN(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var LN = NN, kN = Vr, UN = Dr, BN = "[object Arguments]";
function qN(t) {
  return UN(t) && kN(t) == BN;
}
var HN = qN, rm = HN, GN = Dr, Qg = Object.prototype, zN = Qg.hasOwnProperty, JN = Qg.propertyIsEnumerable, KN = rm(/* @__PURE__ */ function() {
  return arguments;
}()) ? rm : function(t) {
  return GN(t) && zN.call(t, "callee") && !JN.call(t, "callee");
}, WN = KN, io = { exports: {} };
function YN() {
  return !1;
}
var XN = YN;
io.exports;
(function(t, e) {
  var r = zt, n = XN, s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, u = c || n;
  t.exports = u;
})(io, io.exports);
var Zg = io.exports, QN = 9007199254740991, ZN = /^(?:0|[1-9]\d*)$/;
function eL(t, e) {
  var r = typeof t;
  return e = e ?? QN, !!e && (r == "number" || r != "symbol" && ZN.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var tL = eL, rL = 9007199254740991;
function nL(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= rL;
}
var eb = nL, sL = Vr, iL = eb, oL = Dr, aL = "[object Arguments]", cL = "[object Array]", uL = "[object Boolean]", lL = "[object Date]", fL = "[object Error]", pL = "[object Function]", hL = "[object Map]", dL = "[object Number]", mL = "[object Object]", yL = "[object RegExp]", vL = "[object Set]", gL = "[object String]", bL = "[object WeakMap]", $L = "[object ArrayBuffer]", xL = "[object DataView]", SL = "[object Float32Array]", wL = "[object Float64Array]", OL = "[object Int8Array]", EL = "[object Int16Array]", AL = "[object Int32Array]", PL = "[object Uint8Array]", jL = "[object Uint8ClampedArray]", _L = "[object Uint16Array]", RL = "[object Uint32Array]", pe = {};
pe[SL] = pe[wL] = pe[OL] = pe[EL] = pe[AL] = pe[PL] = pe[jL] = pe[_L] = pe[RL] = !0;
pe[aL] = pe[cL] = pe[$L] = pe[uL] = pe[xL] = pe[lL] = pe[fL] = pe[pL] = pe[hL] = pe[dL] = pe[mL] = pe[yL] = pe[vL] = pe[gL] = pe[bL] = !1;
function TL(t) {
  return oL(t) && iL(t.length) && !!pe[sL(t)];
}
var IL = TL;
function CL(t) {
  return function(e) {
    return t(e);
  };
}
var FL = CL, oo = { exports: {} };
oo.exports;
(function(t, e) {
  var r = Gg, n = e && !e.nodeType && e, s = n && !0 && t && !t.nodeType && t, i = s && s.exports === n, o = i && r.process, a = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  t.exports = a;
})(oo, oo.exports);
var ML = oo.exports, VL = IL, DL = FL, nm = ML, sm = nm && nm.isTypedArray, NL = sm ? DL(sm) : VL, tb = NL, LL = LN, kL = WN, UL = xa, BL = Zg, qL = tL, HL = tb, GL = Object.prototype, zL = GL.hasOwnProperty;
function JL(t, e) {
  var r = UL(t), n = !r && kL(t), s = !r && !n && BL(t), i = !r && !n && !s && HL(t), o = r || n || s || i, a = o ? LL(t.length, String) : [], c = a.length;
  for (var u in t)
    (e || zL.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    qL(u, c))) && a.push(u);
  return a;
}
var KL = JL, WL = Object.prototype;
function YL(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || WL;
  return t === r;
}
var XL = YL;
function QL(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var ZL = QL, ek = ZL, tk = ek(Object.keys, Object), rk = tk, nk = XL, sk = rk, ik = Object.prototype, ok = ik.hasOwnProperty;
function ak(t) {
  if (!nk(t))
    return sk(t);
  var e = [];
  for (var r in Object(t))
    ok.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var ck = ak, uk = Kg, lk = eb;
function fk(t) {
  return t != null && lk(t.length) && !uk(t);
}
var pk = fk, hk = KL, dk = ck, mk = pk;
function yk(t) {
  return mk(t) ? hk(t) : dk(t);
}
var vk = yk, gk = PN, bk = DN, $k = vk;
function xk(t) {
  return gk(t, $k, bk);
}
var Sk = xk, im = Sk, wk = 1, Ok = Object.prototype, Ek = Ok.hasOwnProperty;
function Ak(t, e, r, n, s, i) {
  var o = r & wk, a = im(t), c = a.length, u = im(e), p = u.length;
  if (c != p && !o)
    return !1;
  for (var f = c; f--; ) {
    var h = a[f];
    if (!(o ? h in e : Ek.call(e, h)))
      return !1;
  }
  var l = i.get(t), d = i.get(e);
  if (l && d)
    return l == e && d == t;
  var m = !0;
  i.set(t, e), i.set(e, t);
  for (var y = o; ++f < c; ) {
    h = a[f];
    var v = t[h], b = e[h];
    if (n)
      var g = o ? n(b, v, h, e, t, i) : n(v, b, h, t, e, i);
    if (!(g === void 0 ? v === b || s(v, b, r, n, i) : g)) {
      m = !1;
      break;
    }
    y || (y = h == "constructor");
  }
  if (m && !y) {
    var E = t.constructor, O = e.constructor;
    E != O && "constructor" in t && "constructor" in e && !(typeof E == "function" && E instanceof E && typeof O == "function" && O instanceof O) && (m = !1);
  }
  return i.delete(t), i.delete(e), m;
}
var Pk = Ak, jk = En, _k = zt, Rk = jk(_k, "DataView"), Tk = Rk, Ik = En, Ck = zt, Fk = Ik(Ck, "Promise"), Mk = Fk, Vk = En, Dk = zt, Nk = Vk(Dk, "Set"), Lk = Nk, kk = En, Uk = zt, Bk = kk(Uk, "WeakMap"), qk = Bk, rl = Tk, nl = fp, sl = Mk, il = Lk, ol = qk, rb = Vr, _n = Wg, om = "[object Map]", Hk = "[object Object]", am = "[object Promise]", cm = "[object Set]", um = "[object WeakMap]", lm = "[object DataView]", Gk = _n(rl), zk = _n(nl), Jk = _n(sl), Kk = _n(il), Wk = _n(ol), mr = rb;
(rl && mr(new rl(new ArrayBuffer(1))) != lm || nl && mr(new nl()) != om || sl && mr(sl.resolve()) != am || il && mr(new il()) != cm || ol && mr(new ol()) != um) && (mr = function(t) {
  var e = rb(t), r = e == Hk ? t.constructor : void 0, n = r ? _n(r) : "";
  if (n)
    switch (n) {
      case Gk:
        return lm;
      case zk:
        return om;
      case Jk:
        return am;
      case Kk:
        return cm;
      case Wk:
        return um;
    }
  return e;
});
var Yk = mr, fu = RD, Xk = Xg, Qk = xN, Zk = Pk, fm = Yk, pm = xa, hm = Zg, e2 = tb, t2 = 1, dm = "[object Arguments]", mm = "[object Array]", mi = "[object Object]", r2 = Object.prototype, ym = r2.hasOwnProperty;
function n2(t, e, r, n, s, i) {
  var o = pm(t), a = pm(e), c = o ? mm : fm(t), u = a ? mm : fm(e);
  c = c == dm ? mi : c, u = u == dm ? mi : u;
  var p = c == mi, f = u == mi, h = c == u;
  if (h && hm(t)) {
    if (!hm(e))
      return !1;
    o = !0, p = !1;
  }
  if (h && !p)
    return i || (i = new fu()), o || e2(t) ? Xk(t, e, r, n, s, i) : Qk(t, e, c, r, n, s, i);
  if (!(r & t2)) {
    var l = p && ym.call(t, "__wrapped__"), d = f && ym.call(e, "__wrapped__");
    if (l || d) {
      var m = l ? t.value() : t, y = d ? e.value() : e;
      return i || (i = new fu()), s(m, y, r, n, i);
    }
  }
  return h ? (i || (i = new fu()), Zk(t, e, r, n, s, i)) : !1;
}
var s2 = n2, i2 = s2, vm = Dr;
function nb(t, e, r, n, s) {
  return t === e ? !0 : t == null || e == null || !vm(t) && !vm(e) ? t !== t && e !== e : i2(t, e, r, n, nb, s);
}
var o2 = nb, a2 = o2;
function c2(t, e) {
  return a2(t, e);
}
var u2 = c2;
let l2 = class sb {
  constructor(e, r) {
    this.key = e, this.value = r;
  }
  /**
   * @returns {KeyValuePair}
   */
  clone() {
    const e = new sb();
    return this.key && (e.key = this.key.clone()), this.value && (e.value = this.value.clone()), e;
  }
};
var Pa = l2, f2 = "Expected a function";
function p2(t) {
  if (typeof t != "function")
    throw new TypeError(f2);
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
var ja = p2;
const h2 = ja;
function pu(t) {
  return typeof t == "string" ? (e) => e.element === t : t.constructor && t.extend ? (e) => e instanceof t : t;
}
let ib = class al {
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
    return e = pu(e), new al(this.elements.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(e, r) {
    return e = pu(e), new al(this.elements.filter(h2(e), r));
  }
  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(e, r) {
    return e = pu(e), this.elements.find(e, r);
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
typeof Symbol < "u" && (ib.prototype[Symbol.iterator] = function() {
  return this.elements[Symbol.iterator]();
});
var _a = ib;
const d2 = u2, yi = Pa, Xt = _a;
let m2 = class Pi {
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
    return this.content instanceof Pi ? this.content.toValue() : this.content instanceof yi ? {
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
    let n = new Xt();
    const s = (o, a) => (o.push(a), o), i = (o, a) => {
      a.element === r && o.push(a);
      const c = a.findRecursive(r);
      return c && c.reduce(s, o), a.content instanceof yi && (a.content.key && i(o, a.content.key), a.content.value && i(o, a.content.value)), o;
    };
    return this.content && (this.content.element && i(n, this.content), Array.isArray(this.content) && this.content.reduce(i, n)), e.isEmpty || (n = n.filter((o) => {
      let a = o.parents.map((c) => c.element);
      for (const c in e) {
        const u = e[c], p = a.indexOf(u);
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
    return d2(this.toValue(), e);
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
    if (e instanceof Pi)
      this._content = e;
    else if (e instanceof Xt)
      this.content = e.elements;
    else if (typeof e == "string" || typeof e == "number" || typeof e == "boolean" || e === "null" || e == null)
      this._content = e;
    else if (e instanceof yi)
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
    const r = new Xt();
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
      return new Xt(this.content);
    if (this.content instanceof yi) {
      const e = new Xt([this.content.key]);
      return this.content.value && e.push(this.content.value), e;
    }
    return this.content instanceof Pi ? new Xt([this.content]) : new Xt();
  }
  /**
  * Returns all of the children elements found within the element recursively.
  * @type ArraySlice
  * @see children
  */
  get recursiveChildren() {
    const e = new Xt();
    return this.children.forEach((r) => {
      e.push(r), r.recursiveChildren.forEach((n) => {
        e.push(n);
      });
    }), e;
  }
};
var Jt = m2;
const y2 = Jt;
let v2 = class extends y2 {
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
var g2 = v2;
const b2 = Jt;
var $2 = class extends b2 {
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
const x2 = Jt;
var S2 = class extends x2 {
  constructor(e, r, n) {
    super(e, r, n), this.element = "number";
  }
  primitive() {
    return "number";
  }
};
const w2 = Jt;
var O2 = class extends w2 {
  constructor(e, r, n) {
    super(e, r, n), this.element = "boolean";
  }
  primitive() {
    return "boolean";
  }
};
const E2 = ja, A2 = Jt, gm = _a;
let cs = class extends A2 {
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
    return new gm(this.content.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  reject(e, r) {
    return this.filter(E2(e), r);
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
    return new gm(this.findElements(e, { recursive: !0 }));
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
cs.empty = function() {
  return new this();
};
cs["fantasy-land/empty"] = cs.empty;
typeof Symbol < "u" && (cs.prototype[Symbol.iterator] = function() {
  return this.content[Symbol.iterator]();
});
var ob = cs;
const P2 = Pa, j2 = Jt;
var ab = class extends j2 {
  constructor(e, r, n, s) {
    super(new P2(), n, s), this.element = "member", this.key = e, this.value = r;
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
const _2 = ja, R2 = _a;
let T2 = class cb extends R2 {
  map(e, r) {
    return this.elements.map((n) => e.bind(r)(n.value, n.key, n));
  }
  filter(e, r) {
    return new cb(this.elements.filter((n) => e.bind(r)(n.value, n.key, n)));
  }
  reject(e, r) {
    return this.filter(_2(e.bind(r)));
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
var ub = T2;
const I2 = ja, C2 = Sa, F2 = ob, M2 = ab, V2 = ub;
let D2 = class extends F2 {
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
    if (C2(e))
      return Object.keys(e).forEach((i) => {
        this.set(i, e[i]);
      }), this;
    const n = e, s = this.getMember(n);
    return s ? s.value = r : this.content.push(new M2(n, r)), this;
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
    return new V2(this.content).filter(e, r);
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
    return this.filter(I2(e), r);
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
var N2 = D2;
const L2 = Jt;
var k2 = class extends L2 {
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
const U2 = Jt;
var B2 = class extends U2 {
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
const Rn = Jt, lb = g2, fb = $2, pb = S2, hb = O2, db = ob, mb = ab, pp = N2, q2 = k2, yb = B2, vb = _a, H2 = ub, G2 = Pa;
function Ra(t) {
  return t instanceof Rn ? t : typeof t == "string" ? new fb(t) : typeof t == "number" ? new pb(t) : typeof t == "boolean" ? new hb(t) : t === null ? new lb() : Array.isArray(t) ? new db(t.map(Ra)) : typeof t == "object" ? new pp(t) : t;
}
Rn.prototype.ObjectElement = pp;
Rn.prototype.RefElement = yb;
Rn.prototype.MemberElement = mb;
Rn.prototype.refract = Ra;
vb.prototype.refract = Ra;
var gb = {
  Element: Rn,
  NullElement: lb,
  StringElement: fb,
  NumberElement: pb,
  BooleanElement: hb,
  ArrayElement: db,
  MemberElement: mb,
  ObjectElement: pp,
  LinkElement: q2,
  RefElement: yb,
  refract: Ra,
  ArraySlice: vb,
  ObjectSlice: H2,
  KeyValuePair: G2
};
const z2 = gF, J2 = GF, K2 = YF, W2 = tM, Y2 = Sa, bb = sM, je = gb;
let $b = class {
  constructor(e) {
    this.elementMap = {}, this.elementDetection = [], this.Element = je.Element, this.KeyValuePair = je.KeyValuePair, (!e || !e.noDefault) && this.useDefault(), this._attributeElementKeys = [], this._attributeElementArrayKeys = [];
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
    return this.register("null", je.NullElement).register("string", je.StringElement).register("number", je.NumberElement).register("boolean", je.BooleanElement).register("array", je.ArrayElement).register("object", je.ObjectElement).register("member", je.MemberElement).register("ref", je.RefElement).register("link", je.LinkElement), this.detect(z2, je.NullElement, !1).detect(J2, je.StringElement, !1).detect(K2, je.NumberElement, !1).detect(W2, je.BooleanElement, !1).detect(Array.isArray, je.ArrayElement, !1).detect(Y2, je.ObjectElement, !1), this;
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
    return new bb(this);
  }
};
bb.prototype.Namespace = $b;
var X2 = $b;
const Q2 = X2, Ye = gb;
var Z2 = Q2, rn = Pa, us = Ye.ArraySlice, ao = Ye.ObjectSlice, eU = Ye.Element, Mt = Ye.StringElement, cl = Ye.NumberElement, Vt = Ye.BooleanElement, ul = Ye.NullElement, se = Ye.ArrayElement, R = Ye.ObjectElement, _s = Ye.MemberElement, It = Ye.RefElement, ll = Ye.LinkElement, hp = Ye.refract;
class co extends Mt {
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
class uo extends Mt {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}
class lt extends se {
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
    if (cr(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
}
class lo extends se {
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
    const r = new se([e.start.row, e.start.column, e.start.char]), n = new se([e.end.row, e.end.column, e.end.char]);
    r.classes.push("position"), n.classes.push("position"), this.push(r).push(n);
  }
}
const tU = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", rU = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, nU = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, sU = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof se) && e.classes.includes(t), Qt = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, F = (t) => t({
  hasMethod: tU,
  hasBasicElementProps: rU,
  primitiveEq: nU,
  isElementType: Qt,
  hasClass: sU
}), Se = F(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof eU || t(r) && e(void 0, r)), H = F(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Mt || t(r) && e("string", r)), dp = F(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof cl || t(r) && e("number", r)), mp = F(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof ul || t(r) && e("null", r)), Rs = F(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Vt || t(r) && e("boolean", r)), W = F(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof R || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Ke = F(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof se && !(n instanceof R) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), he = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof _s || t(n) && e("member", n) && r(void 0, n)), xb = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ll || t(n) && e("link", n) && r(void 0, n)), Sb = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof It || t(n) && e("ref", n) && r(void 0, n)), iU = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof co || t(n) && e("annotation", n) && r("array", n)), oU = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof uo || t(n) && e("comment", n) && r("string", n)), wb = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof lt || t(n) && e("parseResult", n) && r("array", n)), Ob = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof lo || t(n) && e("sourceMap", n) && r("array", n)), Or = (t) => Qt("object", t) || Qt("array", t) || Qt("boolean", t) || Qt("number", t) || Qt("string", t) || Qt("null", t) || Qt("member", t), Ts = (t) => Ob(t.meta.get("sourceMap")), aU = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Ke(r) ? yf(ha(r.toValue()), t) : !1;
}, Ta = (t, e) => t.length === 0 ? !0 : yf(ha(e.classes.toValue()), t), cU = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Ts,
  includesClasses: Ta,
  includesSymbols: aU,
  isAnnotationElement: iU,
  isArrayElement: Ke,
  isBooleanElement: Rs,
  isCommentElement: oU,
  isElement: Se,
  isLinkElement: xb,
  isMemberElement: he,
  isNullElement: mp,
  isNumberElement: dp,
  isObjectElement: W,
  isParseResultElement: wb,
  isPrimitiveElement: Or,
  isRefElement: Sb,
  isSourceMapElement: Ob,
  isStringElement: H
}, Symbol.toStringTag, { value: "Module" }));
class Eb extends Z2 {
  constructor() {
    super(), this.register("annotation", co), this.register("comment", uo), this.register("parseResult", lt), this.register("sourceMap", lo);
  }
}
const Ab = new Eb(), Is = (t) => {
  const e = new Eb();
  return Wi(t) && e.use(t), e;
}, uU = () => ({
  predicates: {
    ...cU
  },
  namespace: Ab
}), Pb = uU, Ia = (t, e, r) => {
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
}, Y = {}, Cs = (t) => t == null ? void 0 : t.type, jb = (t) => typeof Cs(t) == "string", yp = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), Ca = (t, {
  visitFnGetter: e = Ia,
  nodeTypeGetter: r = Cs,
  breakSymbol: n = Y,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    enter(u, ...p) {
      let f = u, h = !1;
      for (let l = 0; l < t.length; l += 1)
        if (c[l] === a) {
          const d = e(t[l], r(f), !1);
          if (typeof d == "function") {
            const m = d.call(t[l], f, ...p);
            if (typeof (m == null ? void 0 : m.then) == "function")
              throw new sr("Async visitor not supported in sync mode", {
                visitor: t[l],
                visitFn: d
              });
            if (m === i)
              c[l] = u;
            else if (m === n)
              c[l] = n;
            else {
              if (m === s)
                return m;
              if (m !== void 0)
                if (o)
                  f = m, h = !0;
                else
                  return m;
            }
          }
        }
      return h ? f : void 0;
    },
    leave(u, ...p) {
      for (let f = 0; f < t.length; f += 1)
        if (c[f] === a) {
          const h = e(t[f], r(u), !0);
          if (typeof h == "function") {
            const l = h.call(t[f], u, ...p);
            if (typeof (l == null ? void 0 : l.then) == "function")
              throw new sr("Async visitor not supported in sync mode", {
                visitor: t[f],
                visitFn: h
              });
            if (l === n)
              c[f] = n;
            else if (l !== void 0 && l !== i)
              return l;
          }
        } else
          c[f] === u && (c[f] = a);
    }
  };
}, lU = (t, {
  visitFnGetter: e = Ia,
  nodeTypeGetter: r = Cs,
  breakSymbol: n = Y,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    async enter(u, ...p) {
      let f = u, h = !1;
      for (let l = 0; l < t.length; l += 1)
        if (c[l] === a) {
          const d = e(t[l], r(f), !1);
          if (typeof d == "function") {
            const m = await d.call(t[l], f, ...p);
            if (m === i)
              c[l] = u;
            else if (m === n)
              c[l] = n;
            else {
              if (m === s)
                return m;
              if (m !== void 0)
                if (o)
                  f = m, h = !0;
                else
                  return m;
            }
          }
        }
      return h ? f : void 0;
    },
    async leave(u, ...p) {
      for (let f = 0; f < t.length; f += 1)
        if (c[f] === a) {
          const h = e(t[f], r(u), !0);
          if (typeof h == "function") {
            const l = await h.call(t[f], u, ...p);
            if (l === n)
              c[f] = n;
            else if (l !== void 0 && l !== i)
              return l;
          }
        } else
          c[f] === u && (c[f] = a);
    }
  };
};
Ca[Symbol.for("nodejs.util.promisify.custom")] = lU;
const vp = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = Y,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ia,
  nodeTypeGetter: c = Cs,
  nodePredicate: u = jb,
  nodeCloneFn: p = yp,
  detectCycles: f = !0
} = {}) => {
  const h = r || {};
  let l, d = Array.isArray(t), m = [t], y = -1, v, b = [], g = t;
  const E = [], O = [];
  do {
    y += 1;
    const M = y === m.length;
    let A;
    const k = M && b.length !== 0;
    if (M) {
      if (A = O.length === 0 ? void 0 : E.pop(), g = v, v = O.pop(), k)
        if (d) {
          g = g.slice();
          let I = 0;
          for (const [D, z] of b) {
            const de = D - I;
            z === i ? (g.splice(de, 1), I += 1) : g[de] = z;
          }
        } else {
          g = p(g);
          for (const [I, D] of b)
            g[I] = D;
        }
      y = l.index, m = l.keys, b = l.edits, d = l.inArray, l = l.prev;
    } else if (v !== i && v !== void 0) {
      if (A = d ? y : m[y], g = v[A], g === i || g === void 0)
        continue;
      E.push(A);
    }
    let S;
    if (!Array.isArray(g)) {
      var x;
      if (!u(g))
        throw new sr(`Invalid AST Node:  ${String(g)}`, {
          node: g
        });
      if (f && O.includes(g)) {
        E.pop();
        continue;
      }
      const I = a(e, c(g), M);
      if (I) {
        for (const [D, z] of Object.entries(n))
          e[D] = z;
        S = I.call(e, g, A, v, E, O);
      }
      if (typeof ((x = S) === null || x === void 0 ? void 0 : x.then) == "function")
        throw new sr("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: I
        });
      if (S === s)
        break;
      if (S === o) {
        if (!M) {
          E.pop();
          continue;
        }
      } else if (S !== void 0 && (b.push([A, S]), !M))
        if (u(S))
          g = S;
        else {
          E.pop();
          continue;
        }
    }
    if (S === void 0 && k && b.push([A, g]), !M) {
      var T;
      l = {
        inArray: d,
        index: y,
        keys: m,
        edits: b,
        prev: l
      }, d = Array.isArray(g), m = d ? g : (T = h[c(g)]) !== null && T !== void 0 ? T : [], y = -1, b = [], v !== i && v !== void 0 && O.push(v), v = g;
    }
  } while (l !== void 0);
  return b.length !== 0 ? b[b.length - 1][1] : t;
};
vp[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = Y,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ia,
  nodeTypeGetter: c = Cs,
  nodePredicate: u = jb,
  nodeCloneFn: p = yp,
  detectCycles: f = !0
} = {}) => {
  const h = r || {};
  let l, d = Array.isArray(t), m = [t], y = -1, v, b = [], g = t;
  const E = [], O = [];
  do {
    y += 1;
    const T = y === m.length;
    let M;
    const A = T && b.length !== 0;
    if (T) {
      if (M = O.length === 0 ? void 0 : E.pop(), g = v, v = O.pop(), A)
        if (d) {
          g = g.slice();
          let S = 0;
          for (const [I, D] of b) {
            const z = I - S;
            D === i ? (g.splice(z, 1), S += 1) : g[z] = D;
          }
        } else {
          g = p(g);
          for (const [S, I] of b)
            g[S] = I;
        }
      y = l.index, m = l.keys, b = l.edits, d = l.inArray, l = l.prev;
    } else if (v !== i && v !== void 0) {
      if (M = d ? y : m[y], g = v[M], g === i || g === void 0)
        continue;
      E.push(M);
    }
    let k;
    if (!Array.isArray(g)) {
      if (!u(g))
        throw new sr(`Invalid AST Node: ${String(g)}`, {
          node: g
        });
      if (f && O.includes(g)) {
        E.pop();
        continue;
      }
      const S = a(e, c(g), T);
      if (S) {
        for (const [I, D] of Object.entries(n))
          e[I] = D;
        k = await S.call(e, g, M, v, E, O);
      }
      if (k === s)
        break;
      if (k === o) {
        if (!T) {
          E.pop();
          continue;
        }
      } else if (k !== void 0 && (b.push([M, k]), !T))
        if (u(k))
          g = k;
        else {
          E.pop();
          continue;
        }
    }
    if (k === void 0 && A && b.push([M, g]), !T) {
      var x;
      l = {
        inArray: d,
        index: y,
        keys: m,
        edits: b,
        prev: l
      }, d = Array.isArray(g), m = d ? g : (x = h[c(g)]) !== null && x !== void 0 ? x : [], y = -1, b = [], v !== i && v !== void 0 && O.push(v), v = g;
    }
  } while (l !== void 0);
  return b.length !== 0 ? b[b.length - 1][1] : t;
};
class _b extends sr {
  constructor(r, n) {
    super(r, n);
    P(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class fU extends _b {
}
const pU = fU;
class hU extends _b {
}
const dU = hU, C = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof rn) {
    const {
      key: s,
      value: i
    } = t, o = Se(s) ? C(s, n) : s, a = Se(i) ? C(i, n) : i, c = new rn(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof ao) {
    const s = (a) => C(a, n), i = [...t].map(s), o = new ao(i);
    return r.set(t, o), o;
  }
  if (t instanceof us) {
    const s = (a) => C(a, n), i = [...t].map(s), o = new us(i);
    return r.set(t, o), o;
  }
  if (Se(t)) {
    const s = Le(t);
    if (r.set(t, s), t.content)
      if (Se(t.content))
        s.content = C(t.content, n);
      else if (t.content instanceof rn)
        s.content = C(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => C(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new pU("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
C.safe = (t) => {
  try {
    return C(t);
  } catch {
    return t;
  }
};
const Rb = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new rn(e, r);
}, mU = (t) => {
  const e = [...t];
  return new us(e);
}, yU = (t) => {
  const e = [...t];
  return new ao(e);
}, Tb = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = C(t.meta)), t.attributes.length > 0 && (e._attributes = C(t.attributes)), Se(t.content)) {
    const r = t.content;
    e.content = Tb(r);
  } else
    Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof rn ? e.content = Rb(t.content) : e.content = t.content;
  return e;
}, Le = (t) => {
  if (t instanceof rn)
    return Rb(t);
  if (t instanceof ao)
    return yU(t);
  if (t instanceof us)
    return mU(t);
  if (Se(t))
    return Tb(t);
  throw new dU("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
Le.safe = (t) => {
  try {
    return Le(t);
  } catch {
    return t;
  }
};
const Tn = (t) => W(t) ? "ObjectElement" : Ke(t) ? "ArrayElement" : he(t) ? "MemberElement" : H(t) ? "StringElement" : Rs(t) ? "BooleanElement" : dp(t) ? "NumberElement" : mp(t) ? "NullElement" : xb(t) ? "LinkElement" : Sb(t) ? "RefElement" : void 0, Ib = (t) => Se(t) ? Le(t) : yp(t), Cb = Ie(Tn, Tr), In = {
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
class Fb {
  constructor({
    predicate: e = df,
    returnOnTrue: r,
    returnOnFalse: n
  } = {}) {
    P(this, "result");
    P(this, "predicate");
    P(this, "returnOnTrue");
    P(this, "returnOnFalse");
    this.result = [], this.predicate = e, this.returnOnTrue = r, this.returnOnFalse = n;
  }
  enter(e) {
    return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
  }
}
const De = (t, e, {
  keyMap: r = In,
  ...n
} = {}) => vp(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Tn,
  nodePredicate: Cb,
  nodeCloneFn: Ib,
  ...n
});
De[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = In,
  ...n
} = {}) => vp[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Tn,
  nodePredicate: Cb,
  nodeCloneFn: Ib,
  ...n
});
const Mb = {
  toolboxCreator: Pb,
  visitorOptions: {
    nodeTypeGetter: Tn,
    exposeEdits: !0
  }
}, Cn = (t, e, r = {}) => {
  if (e.length === 0)
    return t;
  const n = Rf(Mb, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((p) => p(o)), c = Ca(a.map(Ki({}, "visitor")), {
    ...i
  });
  a.forEach(is(["pre"], []));
  const u = De(t, c, i);
  return a.forEach(is(["post"], [])), u;
}, vU = async (t, e, r = {}) => {
  if (e.length === 0)
    return t;
  const n = Rf(Mb, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((h) => h(o)), c = Ca[Symbol.for("nodejs.util.promisify.custom")], u = De[Symbol.for("nodejs.util.promisify.custom")], p = c(a.map(Ki({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(is(["pre"], [])));
  const f = await u(t, p, i);
  return await Promise.allSettled(a.map(is(["post"], []))), f;
};
Cn[Symbol.for("nodejs.util.promisify.custom")] = vU;
var Vb = { exports: {} };
(function(t) {
  var e = (() => {
    var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (E, O, x) => O in E ? r(E, O, { enumerable: !0, configurable: !0, writable: !0, value: x }) : E[O] = x, u = (E, O) => {
      for (var x in O || (O = {}))
        o.call(O, x) && c(E, x, O[x]);
      if (i)
        for (var x of i(O))
          a.call(O, x) && c(E, x, O[x]);
      return E;
    }, p = (E, O) => {
      for (var x in O)
        r(E, x, { get: O[x], enumerable: !0 });
    }, f = (E, O, x, T) => {
      if (O && typeof O == "object" || typeof O == "function")
        for (let M of s(O))
          !o.call(E, M) && M !== x && r(E, M, { get: () => O[M], enumerable: !(T = n(O, M)) || T.enumerable });
      return E;
    }, h = (E) => f(r({}, "__esModule", { value: !0 }), E), l = (E, O, x) => (c(E, typeof O != "symbol" ? O + "" : O, x), x), d = {};
    p(d, {
      DEFAULT_OPTIONS: () => v,
      DEFAULT_UUID_LENGTH: () => y,
      default: () => g
    });
    var m = "5.2.0", y = 6, v = {
      dictionary: "alphanum",
      shuffle: !0,
      debug: !1,
      length: y,
      counter: 0
    }, b = class {
      constructor(O = {}) {
        l(this, "counter"), l(this, "debug"), l(this, "dict"), l(this, "version"), l(this, "dictIndex", 0), l(this, "dictRange", []), l(this, "lowerBound", 0), l(this, "upperBound", 0), l(this, "dictLength", 0), l(this, "uuidLength"), l(this, "_digit_first_ascii", 48), l(this, "_digit_last_ascii", 58), l(this, "_alpha_lower_first_ascii", 97), l(this, "_alpha_lower_last_ascii", 123), l(this, "_hex_last_ascii", 103), l(this, "_alpha_upper_first_ascii", 65), l(this, "_alpha_upper_last_ascii", 91), l(this, "_number_dict_ranges", {
          digits: [this._digit_first_ascii, this._digit_last_ascii]
        }), l(this, "_alpha_dict_ranges", {
          lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
          upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
        }), l(this, "_alpha_lower_dict_ranges", {
          lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
        }), l(this, "_alpha_upper_dict_ranges", {
          upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
        }), l(this, "_alphanum_dict_ranges", {
          digits: [this._digit_first_ascii, this._digit_last_ascii],
          lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
          upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
        }), l(this, "_alphanum_lower_dict_ranges", {
          digits: [this._digit_first_ascii, this._digit_last_ascii],
          lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
        }), l(this, "_alphanum_upper_dict_ranges", {
          digits: [this._digit_first_ascii, this._digit_last_ascii],
          upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
        }), l(this, "_hex_dict_ranges", {
          decDigits: [this._digit_first_ascii, this._digit_last_ascii],
          alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
        }), l(this, "_dict_ranges", {
          _number_dict_ranges: this._number_dict_ranges,
          _alpha_dict_ranges: this._alpha_dict_ranges,
          _alpha_lower_dict_ranges: this._alpha_lower_dict_ranges,
          _alpha_upper_dict_ranges: this._alpha_upper_dict_ranges,
          _alphanum_dict_ranges: this._alphanum_dict_ranges,
          _alphanum_lower_dict_ranges: this._alphanum_lower_dict_ranges,
          _alphanum_upper_dict_ranges: this._alphanum_upper_dict_ranges,
          _hex_dict_ranges: this._hex_dict_ranges
        }), l(this, "log", (...S) => {
          const I = [...S];
          if (I[0] = `[short-unique-id] ${S[0]}`, this.debug === !0 && typeof console < "u" && console !== null)
            return console.log(...I);
        }), l(this, "_normalizeDictionary", (S, I) => {
          let D;
          if (S && Array.isArray(S) && S.length > 1)
            D = S;
          else {
            D = [];
            let z;
            this.dictIndex = z = 0;
            const de = `_${S}_dict_ranges`, oe = this._dict_ranges[de];
            Object.keys(oe).forEach((X) => {
              const Ne = X;
              for (this.dictRange = oe[Ne], this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1], this.dictIndex = z = this.lowerBound; this.lowerBound <= this.upperBound ? z < this.upperBound : z > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? z += 1 : z -= 1)
                D.push(String.fromCharCode(this.dictIndex));
            });
          }
          return I && (D = D.sort(() => Math.random() - 0.5)), D;
        }), l(this, "setDictionary", (S, I) => {
          this.dict = this._normalizeDictionary(S, I), this.dictLength = this.dict.length, this.setCounter(0);
        }), l(this, "seq", () => this.sequentialUUID()), l(this, "sequentialUUID", () => {
          let S, I, D = "";
          S = this.counter;
          do
            I = S % this.dictLength, S = Math.trunc(S / this.dictLength), D += this.dict[I];
          while (S !== 0);
          return this.counter += 1, D;
        }), l(this, "rnd", (S = this.uuidLength || y) => this.randomUUID(S)), l(this, "randomUUID", (S = this.uuidLength || y) => {
          let I, D, z;
          if (S === null || typeof S > "u" || S < 1)
            throw new Error("Invalid UUID Length Provided");
          for (I = "", z = 0; z < S; z += 1)
            D = parseInt(
              (Math.random() * this.dictLength).toFixed(0),
              10
            ) % this.dictLength, I += this.dict[D];
          return I;
        }), l(this, "fmt", (S, I) => this.formattedUUID(S, I)), l(this, "formattedUUID", (S, I) => {
          const D = {
            $r: this.randomUUID,
            $s: this.sequentialUUID,
            $t: this.stamp
          };
          return S.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (de) => {
              const oe = de.slice(0, 2), X = parseInt(de.slice(2), 10);
              return oe === "$s" ? D[oe]().padStart(X, "0") : oe === "$t" && I ? D[oe](X, I) : D[oe](X);
            }
          );
        }), l(this, "availableUUIDs", (S = this.uuidLength) => parseFloat(
          Math.pow([...new Set(this.dict)].length, S).toFixed(0)
        )), l(this, "approxMaxBeforeCollision", (S = this.availableUUIDs(this.uuidLength)) => parseFloat(
          Math.sqrt(Math.PI / 2 * S).toFixed(20)
        )), l(this, "collisionProbability", (S = this.availableUUIDs(this.uuidLength), I = this.uuidLength) => parseFloat(
          (this.approxMaxBeforeCollision(S) / this.availableUUIDs(I)).toFixed(20)
        )), l(this, "uniqueness", (S = this.availableUUIDs(this.uuidLength)) => {
          const I = parseFloat(
            (1 - this.approxMaxBeforeCollision(S) / S).toFixed(20)
          );
          return I > 1 ? 1 : I < 0 ? 0 : I;
        }), l(this, "getVersion", () => this.version), l(this, "stamp", (S, I) => {
          const D = Math.floor(+(I || /* @__PURE__ */ new Date()) / 1e3).toString(16);
          if (typeof S == "number" && S === 0)
            return D;
          if (typeof S != "number" || S < 10)
            throw new Error(
              [
                "Param finalLength must be a number greater than or equal to 10,",
                "or 0 if you want the raw hexadecimal timestamp"
              ].join(`
`)
            );
          const z = S - 9, de = Math.round(Math.random() * (z > 15 ? 15 : z)), oe = this.randomUUID(z);
          return `${oe.substring(0, de)}${D}${oe.substring(de)}${de.toString(16)}`;
        }), l(this, "parseStamp", (S, I) => {
          if (I && !/t0|t[1-9]\d{1,}/.test(I))
            throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
          const D = I ? I.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (de) => {
              const oe = {
                $r: (q) => [...Array(q)].map(() => "r").join(""),
                $s: (q) => [...Array(q)].map(() => "s").join(""),
                $t: (q) => [...Array(q)].map(() => "t").join("")
              }, X = de.slice(0, 2), Ne = parseInt(de.slice(2), 10);
              return oe[X](Ne);
            }
          ).replace(
            /^(.*?)(t{8,})(.*)$/g,
            (de, oe, X) => S.substring(oe.length, oe.length + X.length)
          ) : S;
          if (D.length === 8)
            return new Date(parseInt(D, 16) * 1e3);
          if (D.length < 10)
            throw new Error("Stamp length invalid");
          const z = parseInt(D.substring(D.length - 1), 16);
          return new Date(parseInt(D.substring(z, z + 8), 16) * 1e3);
        }), l(this, "setCounter", (S) => {
          this.counter = S;
        }), l(this, "validate", (S, I) => {
          const D = I ? this._normalizeDictionary(I) : this.dict;
          return S.split("").every((z) => D.includes(z));
        });
        const x = u(u({}, v), O);
        this.counter = 0, this.debug = !1, this.dict = [], this.version = m;
        const {
          dictionary: T,
          shuffle: M,
          length: A,
          counter: k
        } = x;
        return this.uuidLength = A, this.setDictionary(T, M), this.setCounter(k), this.debug = x.debug, this.log(this.dict), this.log(
          `Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`
        ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this), this;
      }
    };
    l(b, "default", b);
    var g = b;
    return h(d);
  })();
  t.exports = e.default, typeof window < "u" && (e = e.default);
})(Vb);
var gU = Vb.exports;
const bU = /* @__PURE__ */ jr(gU);
class $U extends sr {
  constructor(r, n) {
    super(r, n);
    P(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
const xU = $U, gp = We({
  props: {
    uuid: null,
    length: null,
    identityMap: null
  },
  init({
    length: t = 6
  } = {}) {
    this.length = 6, this.uuid = new bU({
      length: t
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  },
  methods: {
    identify(t) {
      if (!Se(t))
        throw new xU("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
          value: t
        });
      if (t.meta.hasKey("id") && H(t.meta.get("id")) && !t.meta.get("id").equals(""))
        return t.id;
      if (this.identityMap.has(t))
        return this.identityMap.get(t);
      const e = new Mt(this.generateId());
      return this.identityMap.set(t, e), e;
    },
    forget(t) {
      return this.identityMap.has(t) ? (this.identityMap.delete(t), !0) : !1;
    },
    generateId() {
      return this.uuid.randomUUID();
    }
  }
});
gp({
  length: 6
});
class SU extends Array {
  constructor() {
    super(...arguments);
    P(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new bt("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new bt("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new bt("latest method in MediaTypes class is not yet implemented.");
  }
}
const wU = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return Se(t) && (t.meta.length > 0 && (n.meta = C(t.meta)), t.attributes.length > 0 && (n.attributes = C(t.attributes))), Cn(n, r, {
    toolboxCreator: Pb,
    visitorOptions: {
      nodeTypeGetter: Tn
    }
  });
}, st = (t) => (e, r = {}) => wU(e, {
  ...r,
  Type: t
});
R.refract = st(R);
se.refract = st(se);
Mt.refract = st(Mt);
Vt.refract = st(Vt);
ul.refract = st(ul);
cl.refract = st(cl);
ll.refract = st(ll);
It.refract = st(It);
co.refract = st(co);
uo.refract = st(uo);
lt.refract = st(lt);
lo.refract = st(lo);
const OU = (t, e) => {
  const r = new Fb({
    predicate: t
  });
  return De(e, r), new us(r.result);
}, Db = (t, e) => {
  const r = new Fb({
    predicate: t,
    returnOnTrue: Y
  });
  return De(e, r), Ov(void 0, [0], r.result);
}, Nb = (t) => typeof (t == null ? void 0 : t.type) == "string" ? t.type : Tn(t), Lb = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...In
}, kb = (t, e, {
  keyMap: r = Lb,
  ...n
} = {}) => De(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Nb,
  nodePredicate: Lt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
kb[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = Lb,
  ...r
} = {}) => De[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: Nb,
  nodePredicate: Lt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class EU {
  constructor(e) {
    P(this, "type", "EphemeralArray");
    P(this, "content", []);
    P(this, "reference");
    this.content = e, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}
class AU {
  constructor(e) {
    P(this, "type", "EphemeralObject");
    P(this, "content", []);
    P(this, "reference");
    this.content = e, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
let PU = class {
  constructor() {
    P(this, "ObjectElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new AU(e.content);
        return this.references.set(e, r), r;
      }
    });
    P(this, "EphemeralObject", {
      leave: (e) => e.toObject()
    });
    P(this, "MemberElement", {
      enter: (e) => [e.key, e.value]
    });
    P(this, "ArrayElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new EU(e.content);
        return this.references.set(e, r), r;
      }
    });
    P(this, "EphemeralArray", {
      leave: (e) => e.toArray()
    });
    P(this, "references", /* @__PURE__ */ new WeakMap());
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
    return H(e.href) ? e.href.toValue() : "";
  }
};
const w = (t) => Se(t) ? H(t) || dp(t) || Rs(t) || mp(t) ? t.toValue() : kb(t, new PU()) : t, ji = (t, e = /* @__PURE__ */ new WeakMap()) => (he(t) ? (e.set(t.key, t), ji(t.key, e), e.set(t.value, t), ji(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), ji(r, e);
}), e), jU = (t, e, r) => {
  const n = r.get(t);
  he(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, _U = (t, e, r) => {
  const n = r.get(t);
  W(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, RU = (t, e, r) => {
  const n = r.get(t);
  Ke(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class TU {
  constructor({
    element: e
  }) {
    P(this, "element");
    P(this, "edges");
    this.element = e;
  }
  transclude(e, r) {
    var n;
    if (e === this.element)
      return r;
    if (e === r)
      return this.element;
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : ji(this.element);
    const s = this.edges.get(e);
    if (!cr(s))
      return W(s) ? _U(e, r, this.edges) : Ke(s) ? RU(e, r, this.edges) : he(s) && jU(e, r, this.edges), this.element;
  }
}
const IU = (t, e, r) => new TU({
  element: r
}).transclude(t, e), Fa = (t, e) => {
  const r = hn(t, e);
  return uP((n) => {
    if (Wi(n) && $v("$ref", n) && vP(Tr, "$ref", n)) {
      const s = qe(["$ref"], n), i = Ff("#/", s);
      return qe(i.split("/"), r);
    }
    return Wi(n) ? Fa(n, r) : n;
  }, t);
}, CU = (t, e = Ab) => {
  if (Tr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return Wi(t) && $v("element", t) ? e.fromRefract(t) : e.toElement(t);
}, Ub = CU, fo = (t) => {
  const e = t.meta.length > 0 ? C(t.meta) : void 0, r = t.attributes.length > 0 ? C(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, po = (t, e) => e.clone && e.isMergeableElement(t) ? xt(fo(t), t, e) : t, FU = (t, e) => {
  if (typeof e.customMerge != "function")
    return xt;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : xt;
}, MU = (t) => typeof t.customMetaMerge != "function" ? (e) => C(e) : t.customMetaMerge, VU = (t) => typeof t.customAttributesMerge != "function" ? (e) => C(e) : t.customAttributesMerge, DU = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => po(n, r)), NU = (t, e, r) => {
  const n = W(t) ? fo(t) : fo(e);
  return W(t) && t.forEach((s, i, o) => {
    const a = Le(o);
    a.value = po(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = w(i);
    let c;
    if (W(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const u = t.get(a);
      c = Le(o), c.value = FU(i, r)(u, s);
    } else
      c = Le(o), c.value = po(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, vi = {
  clone: !0,
  isMergeableElement: (t) => W(t) || Ke(t),
  arrayElementMerge: DU,
  objectElementMerge: NU,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
};
function xt(t, e, r) {
  var n, s, i;
  const o = {
    ...vi,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : vi.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : vi.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : vi.objectElementMerge;
  const a = Ke(e), c = Ke(t);
  if (!(a === c))
    return po(e, o);
  const p = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return p.meta = MU(o)(t.meta, e.meta), p.attributes = VU(o)(t.attributes, e.attributes), p;
}
xt.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new R() : t.reduce((r, n) => xt(r, n, e), fo(t[0]));
};
class bp extends me {
}
class LU extends bp {
}
const Bb = LU, kU = async (t, e) => {
  let r = t, n = !1;
  if (!wb(t)) {
    const o = Le(t);
    o.classes.push("result"), r = new lt([o]), n = !0;
  }
  const s = os({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await ap("canDereference", [s, e], e.dereference.strategies);
  if (ws(i))
    throw new Bb(s.uri);
  try {
    const {
      result: o
    } = await cp("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new bp(`Error while dereferencing file "${s.uri}"`, {
      cause: o
    });
  }
}, Fs = We({
  props: {
    name: "",
    /**
     * Whether to allow "empty" files. This includes zero-byte files.
     */
    allowEmpty: !0,
    /**
     * Whether to generate source map during parsing.
     */
    sourceMap: !1,
    /**
     * List of supported file extensions.
     */
    fileExtensions: [],
    /**
     * List of supported media types.
     */
    mediaTypes: []
  },
  init({
    allowEmpty: t = this.allowEmpty,
    sourceMap: e = this.sourceMap,
    fileExtensions: r = this.fileExtensions,
    mediaTypes: n = this.mediaTypes
  } = {}) {
    this.allowEmpty = t, this.sourceMap = e, this.fileExtensions = r, this.mediaTypes = n;
  },
  methods: {
    async canParse() {
      throw new bt("canParse method in Parser stamp is not yet implemented.");
    },
    async parse() {
      throw new bt("parse method in Parser stamp is not yet implemented.");
    }
  }
}), UU = We({
  props: {
    name: null
  },
  methods: {
    canRead() {
      return !1;
    },
    async read() {
      throw new bt("read method in Resolver stamp is not yet implemented.");
    }
  }
}), BU = UU, qU = We(BU, {
  props: {
    timeout: 5e3,
    redirects: 5,
    withCredentials: !1
  },
  init({
    timeout: t = this.timeout,
    redirects: e = this.redirects,
    withCredentials: r = this.withCredentials
  } = {}) {
    this.timeout = t, this.redirects = e, this.withCredentials = r;
  },
  methods: {
    canRead(t) {
      return ma(t.uri);
    },
    async read() {
      throw new bt("read method in HttpResolver stamp is not yet implemented.");
    },
    getHttpClient() {
      throw new bt("getHttpClient method in HttpResolver stamp is not yet implemented.");
    }
  }
}), HU = We({
  props: {
    name: null
  },
  methods: {
    canResolve() {
      return !1;
    },
    async resolve() {
      throw new bt("resolve method in ResolveStrategy stamp is not yet implemented.");
    }
  }
}), GU = HU, zU = We({
  props: {
    name: null
  },
  methods: {
    canDereference() {
      return !1;
    },
    async dereference() {
      throw new bt("dereference method in DereferenceStrategy stamp is not yet implemented.");
    }
  }
}), JU = zU;
class hu extends Array {
  includesCycle(e) {
    return this.filter((r) => r.has(e)).length > 1;
  }
  includes(e, r) {
    return e instanceof Set ? super.includes(e, r) : this.some((n) => n.has(e));
  }
  findItem(e) {
    for (const r of this)
      for (const n of r)
        if (Se(n) && e(n))
          return n;
  }
}
const Ct = We({
  props: {
    uri: "",
    value: null,
    depth: 0,
    refSet: null,
    errors: []
  },
  init({
    depth: t = this.depth,
    refSet: e = this.refSet,
    uri: r = this.uri,
    value: n = this.value
  } = {}) {
    this.uri = r, this.value = n, this.depth = t, this.refSet = e, this.errors = [];
  }
}), KU = We({
  props: {
    rootRef: null,
    refs: [],
    circular: !1
  },
  init({
    refs: t = []
  } = {}) {
    this.refs = [], t.forEach((e) => this.add(e));
  },
  methods: {
    get size() {
      return this.refs.length;
    },
    add(t) {
      return this.has(t) || (this.refs.push(t), this.rootRef = this.rootRef === null ? t : this.rootRef, t.refSet = this), this;
    },
    merge(t) {
      for (const e of t.values())
        this.add(e);
      return this;
    },
    has(t) {
      const e = Tr(t) ? t : t.uri;
      return Pv(this.find(Tf(e, "uri")));
    },
    find(t) {
      return this.refs.find(t);
    },
    *values() {
      yield* this.refs;
    },
    clean() {
      this.refs.forEach((t) => {
        t.refSet = null;
      }), this.rootRef = null, this.refs = [];
    }
  }
}), yn = KU;
class qb extends me {
}
class WU extends qb {
}
const YU = WU;
class XU extends me {
}
class QU extends XU {
}
const $p = QU;
class ZU extends qb {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
const eB = ZU;
class tB extends bp {
}
const nn = tB;
class rB extends up {
}
const nB = rB;
class sB extends tl {
}
const Dt = sB, iB = async (t, e = {}) => {
  const r = Uv(kv, e);
  return kU(t, r);
};
function xp(t, e) {
  function r(...n) {
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, [this.message] = n, e && e.apply(this, n);
  }
  return r.prototype = new Error(), r.prototype.name = t, r.prototype.constructor = r, r;
}
function Fn(t) {
  return Object.prototype.toString.call(t);
}
function oB(t) {
  return Fn(t) === "[object Date]";
}
function aB(t) {
  return Fn(t) === "[object RegExp]";
}
function cB(t) {
  return Fn(t) === "[object Error]";
}
function uB(t) {
  return Fn(t) === "[object Boolean]";
}
function lB(t) {
  return Fn(t) === "[object Number]";
}
function fB(t) {
  return Fn(t) === "[object String]";
}
var Hb = Array.isArray || function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
};
function Ma(t, e) {
  if (t.forEach)
    return t.forEach(e);
  for (var r = 0; r < t.length; r++)
    e(t[r], r, t);
}
var pB = Object.keys || function(e) {
  var r = [];
  for (var n in e)
    r.push(n);
  return r;
}, hB = Object.prototype.propertyIsEnumerable, bm = Object.getOwnPropertySymbols;
function Va(t) {
  var e = pB(t);
  if (bm)
    for (var r = bm(t), n = 0; n < r.length; n++)
      hB.call(t, r[n]) && e.push(r[n]);
  return e;
}
var Da = Object.prototype.hasOwnProperty || function(t, e) {
  return e in t;
};
function Gb(t) {
  if (typeof t == "object" && t !== null) {
    var e;
    if (Hb(t))
      e = [];
    else if (oB(t))
      e = new Date(t.getTime ? t.getTime() : t);
    else if (aB(t))
      e = new RegExp(t);
    else if (cB(t))
      e = { message: t.message };
    else if (uB(t) || lB(t) || fB(t))
      e = Object(t);
    else if (Object.create && Object.getPrototypeOf)
      e = Object.create(Object.getPrototypeOf(t));
    else if (t.constructor === Object)
      e = {};
    else {
      var r = t.constructor && t.constructor.prototype || t.__proto__ || {}, n = function() {
      };
      n.prototype = r, e = new n();
    }
    return Ma(Va(t), function(s) {
      e[s] = t[s];
    }), e;
  }
  return t;
}
function zb(t, e, r) {
  var n = [], s = [], i = !0;
  return function o(a) {
    var c = r ? Gb(a) : a, u = {}, p = !0, f = {
      node: c,
      node_: a,
      path: [].concat(n),
      parent: s[s.length - 1],
      parents: s,
      key: n[n.length - 1],
      isRoot: n.length === 0,
      level: n.length,
      circular: null,
      update: function(d, m) {
        f.isRoot || (f.parent.node[f.key] = d), f.node = d, m && (p = !1);
      },
      delete: function(d) {
        delete f.parent.node[f.key], d && (p = !1);
      },
      remove: function(d) {
        Hb(f.parent.node) ? f.parent.node.splice(f.key, 1) : delete f.parent.node[f.key], d && (p = !1);
      },
      keys: null,
      before: function(d) {
        u.before = d;
      },
      after: function(d) {
        u.after = d;
      },
      pre: function(d) {
        u.pre = d;
      },
      post: function(d) {
        u.post = d;
      },
      stop: function() {
        i = !1;
      },
      block: function() {
        p = !1;
      }
    };
    if (!i)
      return f;
    function h() {
      if (typeof f.node == "object" && f.node !== null) {
        (!f.keys || f.node_ !== f.node) && (f.keys = Va(f.node)), f.isLeaf = f.keys.length === 0;
        for (var d = 0; d < s.length; d++)
          if (s[d].node_ === a) {
            f.circular = s[d];
            break;
          }
      } else
        f.isLeaf = !0, f.keys = null;
      f.notLeaf = !f.isLeaf, f.notRoot = !f.isRoot;
    }
    h();
    var l = e.call(f, f.node);
    return l !== void 0 && f.update && f.update(l), u.before && u.before.call(f, f.node), p && (typeof f.node == "object" && f.node !== null && !f.circular && (s.push(f), h(), Ma(f.keys, function(d, m) {
      n.push(d), u.pre && u.pre.call(f, f.node[d], d);
      var y = o(f.node[d]);
      r && Da.call(f.node, d) && (f.node[d] = y.node), y.isLast = m === f.keys.length - 1, y.isFirst = m === 0, u.post && u.post.call(f, y), n.pop();
    }), s.pop()), u.after && u.after.call(f, f.node)), f;
  }(t).node;
}
function tt(t) {
  this.value = t;
}
tt.prototype.get = function(t) {
  for (var e = this.value, r = 0; r < t.length; r++) {
    var n = t[r];
    if (!e || !Da.call(e, n))
      return;
    e = e[n];
  }
  return e;
};
tt.prototype.has = function(t) {
  for (var e = this.value, r = 0; r < t.length; r++) {
    var n = t[r];
    if (!e || !Da.call(e, n))
      return !1;
    e = e[n];
  }
  return !0;
};
tt.prototype.set = function(t, e) {
  for (var r = this.value, n = 0; n < t.length - 1; n++) {
    var s = t[n];
    Da.call(r, s) || (r[s] = {}), r = r[s];
  }
  return r[t[n]] = e, e;
};
tt.prototype.map = function(t) {
  return zb(this.value, t, !0);
};
tt.prototype.forEach = function(t) {
  return this.value = zb(this.value, t, !1), this.value;
};
tt.prototype.reduce = function(t, e) {
  var r = arguments.length === 1, n = r ? this.value : e;
  return this.forEach(function(s) {
    (!this.isRoot || !r) && (n = t.call(this, n, s));
  }), n;
};
tt.prototype.paths = function() {
  var t = [];
  return this.forEach(function() {
    t.push(this.path);
  }), t;
};
tt.prototype.nodes = function() {
  var t = [];
  return this.forEach(function() {
    t.push(this.node);
  }), t;
};
tt.prototype.clone = function() {
  var t = [], e = [];
  return function r(n) {
    for (var s = 0; s < t.length; s++)
      if (t[s] === n)
        return e[s];
    if (typeof n == "object" && n !== null) {
      var i = Gb(n);
      return t.push(n), e.push(i), Ma(Va(n), function(o) {
        i[o] = r(n[o]);
      }), t.pop(), e.pop(), i;
    }
    return n;
  }(this.value);
};
function Jb(t) {
  return new tt(t);
}
Ma(Va(tt.prototype), function(t) {
  Jb[t] = function(e) {
    var r = [].slice.call(arguments, 1), n = new tt(e);
    return n[t].apply(n, r);
  };
});
var dB = Jb;
const mB = /* @__PURE__ */ jr(dB), yB = ["properties"], vB = ["properties"], gB = [
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
], bB = ["schema/example", "items/example"];
function Kb(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    yB.indexOf(e) > -1 && vB.indexOf(r) === -1 || gB.indexOf(n) > -1 || bB.some((s) => n.indexOf(s) > -1)
  );
}
function $B(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return mB(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), u = fl(this.node, n(a));
      i.push(r.replace(c, u));
    }
  }), i;
}
function fl(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if (ma(s))
    o = Ae(s, i);
  else {
    const a = Ae(Ti, s), u = Ae(a, i).replace(Ti, "");
    o = i.startsWith("/") ? u : u.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const xB = /^([a-z]+:\/\/|\/\/)/i, vn = xp("JSONRefError", function(e, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), Rt = {}, $m = /* @__PURE__ */ new WeakMap(), SB = [
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
], wB = (t) => SB.some((e) => e(t)), OB = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (Kb(i) || wB(i))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof t != "string")
      return new vn("$ref: must be a string (JSON-Ref)", {
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    const a = Yb(t), c = a[0], u = a[1] || "";
    let p;
    try {
      p = o || c ? Wb(c, o) : null;
    } catch (m) {
      return pl(m, {
        pointer: u,
        $ref: t,
        basePath: p,
        fullPath: r
      });
    }
    let f, h;
    if (_B(u, p, i, n) && !s.useCircularStructures) {
      const m = fl(t, p);
      return t === m ? null : ee.replace(r, m);
    }
    if (p == null ? (h = wp(u), f = n.get(h), typeof f > "u" && (f = new vn(`Could not resolve reference: ${t}`, {
      pointer: u,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (f = Xb(p, u), f.__value != null ? f = f.__value : f = f.catch((m) => {
      throw pl(m, {
        pointer: u,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), f instanceof Error)
      return [ee.remove(r), f];
    const l = fl(t, p), d = ee.replace(i, f, {
      $$ref: l
    });
    if (p && p !== o)
      return [d, ee.context(i, {
        baseDoc: p
      })];
    try {
      if (!RB(n.state, d) || s.useCircularStructures)
        return d;
    } catch {
      return null;
    }
  }
}, Sp = Object.assign(OB, {
  docCache: Rt,
  absoluteify: Wb,
  clearCache: EB,
  JSONRefError: vn,
  wrapError: pl,
  getDoc: Qb,
  split: Yb,
  extractFromDoc: Xb,
  fetchJSON: AB,
  extract: hl,
  jsonPointerToArray: wp,
  unescapeJsonPointerToken: Zb
});
function Wb(t, e) {
  if (!xB.test(t)) {
    if (!e)
      throw new vn(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return Ae(e, t);
  }
  return t;
}
function pl(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new vn(`Could not resolve reference: ${r}`, e, t);
}
function Yb(t) {
  return (t + "").split("#");
}
function Xb(t, e) {
  const r = Rt[t];
  if (r && !ee.isPromise(r))
    try {
      const n = hl(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return Qb(t).then((n) => hl(e, n));
}
function EB(t) {
  typeof t < "u" ? delete Rt[t] : Object.keys(Rt).forEach((e) => {
    delete Rt[e];
  });
}
function Qb(t) {
  const e = Rt[t];
  return e ? ee.isPromise(e) ? e : Promise.resolve(e) : (Rt[t] = Sp.fetchJSON(t).then((r) => (Rt[t] = r, r)), Rt[t]);
}
function AB(t) {
  return fetch(t, {
    headers: {
      Accept: Lm
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => ln.load(e));
}
function hl(t, e) {
  const r = wp(t);
  if (r.length < 1)
    return e;
  const n = ee.getIn(e, r);
  if (typeof n > "u")
    throw new vn(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function wp(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(Zb);
}
function Zb(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function e$(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function PB(t) {
  return t.length === 0 ? "" : `/${t.map(e$).join("/")}`;
}
const jB = (t) => !t || t === "/" || t === "#";
function du(t, e) {
  if (jB(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function _B(t, e, r, n) {
  let s = $m.get(n);
  s || (s = {}, $m.set(n, s));
  const i = PB(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && du(a, t))
    return !0;
  let u = "";
  if (r.some((f) => (u = `${u}/${e$(f)}`, s[u] && s[u].some((h) => du(h, o) || du(o, h)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function RB(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return ee.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const TB = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (Kb(i))
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
    return c.push(n.replace(i, {})), t.forEach((u, p) => {
      if (!n.isObject(u)) {
        if (o)
          return null;
        o = !0;
        const l = new TypeError("Elements in allOf must be objects");
        return l.fullPath = r, c.push(l);
      }
      c.push(n.mergeDeep(i, u));
      const f = r.slice(0, -1), h = $B(u, f, {
        getBaseUrlForNodePath: (l) => n.getContext([...r, p, ...l]).baseDoc,
        specmap: n
      });
      c.push(...h);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, IB = {
  key: "parameters",
  plugin: (t, e, r, n) => {
    if (Array.isArray(t) && t.length) {
      const s = Object.assign([], t), i = r.slice(0, -1), o = {
        ...ee.getIn(n.spec, i)
      };
      for (let a = 0; a < t.length; a += 1) {
        const c = t[a];
        try {
          s[a].default = n.parameterMacro(o, c);
        } catch (u) {
          const p = new Error(u);
          return p.fullPath = r, p;
        }
      }
      return ee.replace(r, s);
    }
    return ee.replace(r, t);
  }
}, CB = {
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
    return ee.replace(r, s);
  }
};
class FB {
  constructor(e) {
    this.root = mu(e || {});
  }
  set(e, r) {
    const n = this.getParent(e, !0);
    if (!n) {
      ho(this.root, r, null);
      return;
    }
    const s = e[e.length - 1], {
      children: i
    } = n;
    if (i[s]) {
      ho(i[s], r, n);
      return;
    }
    i[s] = mu(r, n);
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
      return !i[s] && r && (i[s] = mu(null, n)), i[s];
    }, this.root);
  }
}
function mu(t, e) {
  return ho({
    children: {}
  }, t, e);
}
function ho(t, e, r) {
  return t.value = e || {}, t.protoValue = r ? {
    ...r.protoValue,
    ...t.value
  } : t.value, Object.keys(t.children).forEach((n) => {
    const s = t.children[n];
    t.children[n] = ho(s, s.value, t);
  }), t;
}
const xm = 100, MB = 3e3, Sm = () => {
};
class VB {
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
      contextTree: new FB(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), ee, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, e), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(ee.isFunction), this.patches.push(ee.add([], this.spec)), this.patches.push(ee.context([], this.context)), this.updatePatches(this.patches);
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
    return e[this.pluginProp] ? (s = e, i = e[this.pluginProp]) : ee.isFunction(e) ? i = e : ee.isObject(e) && (i = o(e)), Object.assign(i.bind(s), {
      pluginName: e.name || r,
      isGenerator: ee.isGenerator(i)
    });
    function o(a) {
      const c = (u, p) => Array.isArray(u) ? u.every((f, h) => f === p[h]) : !0;
      return function* (p, f) {
        const h = {};
        for (const [d, m] of p.filter(ee.isAdditiveMutation).entries())
          if (d < MB)
            yield* l(m.value, m.path, m);
          else
            return;
        function* l(d, m, y) {
          if (!ee.isObject(d))
            a.key === m[m.length - 1] && (yield a.plugin(d, a.key, m, f));
          else {
            const v = m.length - 1, b = m[v], g = m.indexOf("properties"), E = b === "properties" && v === g, O = f.allowMetaPatches && h[d.$$ref];
            for (const x of Object.keys(d)) {
              const T = d[x], M = m.concat(x), A = ee.isObject(T), k = d.$$ref;
              if (O || A && (f.allowMetaPatches && k && (h[k] = !0), yield* l(T, M, y)), !E && x === a.key) {
                const S = c(n, m);
                (!n || S) && (yield a.plugin(T, x, M, f, y));
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
    ee.normalizeArray(e).forEach((r) => {
      if (r instanceof Error) {
        this.errors.push(r);
        return;
      }
      try {
        if (!ee.isObject(r)) {
          this.debug("updatePatches", "Got a non-object patch", r);
          return;
        }
        if (this.showDebug && this.allPatches.push(r), ee.isPromise(r.value)) {
          this.promisedPatches.push(r), this.promisedPatchThen(r);
          return;
        }
        if (ee.isContextPatch(r)) {
          this.setContext(r.path, r.value);
          return;
        }
        ee.isMutation(r) && this.updateMutations(r);
      } catch (n) {
        console.error(n), this.errors.push(n);
      }
    });
  }
  updateMutations(e) {
    typeof e.value == "object" && !Array.isArray(e.value) && this.allowMetaPatches && (e.value = {
      ...e.value
    });
    const r = ee.applyPatch(this.state, e, {
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
    return ee.getIn(this.state, e);
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
    if (e.pluginCount = e.pluginCount || /* @__PURE__ */ new WeakMap(), e.pluginCount.set(r, (e.pluginCount.get(r) || 0) + 1), e.pluginCount[r] > xm)
      return Promise.resolve({
        spec: e.state,
        errors: e.errors.concat(new Error(`We've reached a hard limit of ${xm} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const i = this.promisedPatches.map((o) => o.value);
      return Promise.all(i.map((o) => o.then(Sm, Sm))).then(() => this.dispatch());
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
      i && (i = ee.fullyNormalizeArray(i), e.updatePatches(i, r));
    }
  }
}
function DB(t) {
  return new VB(t).dispatch();
}
const yr = {
  refs: Sp,
  allOf: TB,
  parameters: IB,
  properties: CB
}, t$ = (t) => t.replace(/\W/gi, "_");
function NB(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${t$(t)}`;
}
function Ms(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? t$(t.operationId) : NB(e, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function Na(t) {
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
      const u = Ms(c, s, a);
      if (u) {
        n[u] ? n[u].push(c) : n[u] = [c];
        const p = n[u];
        if (p.length > 1)
          p.forEach((f, h) => {
            f.__originalOperationId = f.__originalOperationId || f.operationId, f.operationId = `${u}${h + 1}`;
          });
        else if (typeof c.operationId < "u") {
          const f = p[0];
          f.__originalOperationId = f.__originalOperationId || c.operationId, f.operationId = u;
        }
      }
      if (a !== "parameters") {
        const p = [], f = {};
        for (const h in e)
          (h === "produces" || h === "consumes" || h === "security") && (f[h] = e[h], p.push(f));
        if (o && (f.parameters = o, p.push(f)), p.length) {
          for (const h of p)
            for (const l in h)
              if (!c[l])
                c[l] = h[l];
              else if (l === "parameters")
                for (const d of h[l])
                  c[l].some((y) => y.name && y.name === d.name || y.$ref && y.$ref === d.$ref || y.$$ref && y.$$ref === d.$$ref || y === d) || c[l].push(d);
        }
      }
    }
  }
  return e.$$normalized = !0, t;
}
async function Op(t) {
  const {
    spec: e,
    mode: r,
    allowMetaPatches: n = !0,
    pathDiscriminator: s,
    modelPropertyMacro: i,
    parameterMacro: o,
    requestInterceptor: a,
    responseInterceptor: c,
    skipNormalization: u,
    useCircularStructures: p
  } = t, f = ff(t), h = ev(t);
  return l(e);
  function l(d) {
    f && (yr.refs.docCache[f] = d), yr.refs.fetchJSON = Zy(h, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const m = [yr.refs];
    return typeof o == "function" && m.push(yr.parameters), typeof i == "function" && m.push(yr.properties), r !== "strict" && m.push(yr.allOf), DB({
      spec: d,
      context: {
        baseDoc: f
      },
      plugins: m,
      allowMetaPatches: n,
      // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator: s,
      // for lazy resolution
      parameterMacro: o,
      modelPropertyMacro: i,
      useCircularStructures: p
      // eslint-disable-next-line camelcase
    }).then(u ? async (y) => y : Na);
  }
}
function LB() {
  yr.refs.clearCache();
}
const r$ = {
  name: "generic",
  match() {
    return !0;
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = Na({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return Op(t);
  }
};
async function kB(t) {
  return Op(t);
}
const n$ = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, s$ = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.([0123])(?:-rc[012])?$/.test(e);
  } catch {
    return !1;
  }
}, i$ = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Ep = (t) => s$(t) || i$(t), o$ = {
  name: "openapi-2",
  match({
    spec: t
  }) {
    return n$(t);
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = Na({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return kB(t);
  }
};
async function UB(t) {
  return Op(t);
}
const a$ = {
  name: "openapi-3-0",
  match({
    spec: t
  }) {
    return s$(t);
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = Na({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return UB(t);
  }
}, BB = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = ff(t), i = ev(t), o = e || await Zy(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((u) => u.match(a)).resolve(a);
}, c$ = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return BB(r);
}, qB = c$({
  strategies: [a$, o$, r$]
}), HB = async (t, e, r = {}) => {
  const {
    returnEntireTree: n,
    baseDoc: s,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: u,
    strategies: p
  } = r, f = {
    spec: t,
    pathDiscriminator: e,
    baseDoc: s,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: u,
    strategies: p
  }, l = p.find((m) => m.match(f)).normalize(f), d = await qB({
    ...f,
    spec: l,
    allowMetaPatches: !0,
    skipNormalization: !0
  });
  return !n && Array.isArray(e) && e.length && (d.spec = e.reduce((m, y) => m == null ? void 0 : m[y], d.spec) || null), d;
}, GB = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return HB(e, r, s);
};
class Ap extends sr {
}
class zB extends Ap {
  constructor(r, n) {
    super(r, n);
    P(this, "pointer");
    typeof n < "u" && (this.pointer = n.pointer);
  }
}
const dl = zB;
class JB extends Ap {
  constructor(r, n) {
    super(r, n);
    P(this, "tokens");
    typeof n < "u" && (this.tokens = [...n.tokens]);
  }
}
const KB = JB;
class WB extends Ap {
  constructor(r, n) {
    super(r, n);
    P(this, "pointer");
    P(this, "tokens");
    P(this, "failedToken");
    P(this, "failedTokenPosition");
    P(this, "element");
    typeof n < "u" && (this.pointer = n.pointer, Array.isArray(n.tokens) && (this.tokens = [...n.tokens]), this.failedToken = n.failedToken, this.failedTokenPosition = n.failedTokenPosition, this.element = n.element);
  }
}
const Hn = WB, YB = Ie(dn(/~/g, "~0"), dn(/\//g, "~1"), encodeURIComponent), XB = YB, QB = (t) => {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, ZB = Ie(dn(/~1/g, "/"), dn(/~0/g, "~"), QB), e3 = ZB, t3 = (t) => {
  if (Tv(t))
    return [];
  if (!Av("/", t))
    throw new dl(`Invalid JSON Pointer "${t}". JSON Pointers must begin with "/"`, {
      pointer: t
    });
  try {
    const e = Ie(If("/"), bs(e3))(t);
    return gv(e);
  } catch (e) {
    throw new dl(`JSON Pointer parsing of "${t}" encountered an error.`, {
      pointer: t,
      cause: e
    });
  }
}, r3 = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, Qe = (t) => {
  const e = r3(t);
  return Ff("#", e);
}, n3 = (t) => {
  try {
    return t.length === 0 ? "" : `/${t.map(XB).join("/")}`;
  } catch (e) {
    throw new KB("JSON Pointer compilation of tokens encountered an error.", {
      tokens: t,
      cause: e
    });
  }
}, s3 = n3, ct = (t, e) => {
  let r;
  try {
    r = t3(t);
  } catch (n) {
    throw new Hn(`JSON Pointer evaluation failed while parsing the pointer "${t}".`, {
      pointer: t,
      element: C(e),
      cause: n
    });
  }
  return r.reduce((n, s, i) => {
    if (W(n)) {
      if (!n.hasKey(s))
        throw new Hn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ObjectElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: C(n)
        });
      return n.get(s);
    }
    if (Ke(n)) {
      if (!(s in n.content) || !o1(Number(s)))
        throw new Hn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ArrayElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: C(n)
        });
      return n.get(Number(s));
    }
    throw new Hn(`JSON Pointer evaluation failed while evaluating token "${s}" against an unexpected Element`, {
      pointer: t,
      tokens: r,
      failedToken: s,
      failedTokenPosition: i,
      element: C(n)
    });
  }, e);
};
class Pp extends SU {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return la(this.filterByFormat(e));
  }
}
const gn = new Pp("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
let Vs = class extends R {
  constructor(e, r, n) {
    super(e, r, n), this.element = "callback";
  }
}, Ds = class extends R {
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
}, Ns = class extends R {
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
}, La = class extends R {
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
}, ka = class extends R {
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
}, Ls = class extends R {
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
}, ks = class extends R {
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
}, Mn = class extends R {
  constructor(e, r, n) {
    super(e, r, n), this.element = "header";
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new Vt(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Vt(!1);
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
Object.defineProperty(Mn.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Us = class extends R {
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
}, Bs = class extends R {
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
}, qs = class extends R {
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
    if (H(this.operationRef)) {
      var e;
      return (e = this.operationRef) === null || e === void 0 ? void 0 : e.meta.get("operation");
    }
    if (H(this.operationId)) {
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
}, Hs = class extends R {
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
}, Ua = class extends R {
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
}, Ba = class extends R {
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
}, Gs = class extends Mt {
  constructor(e, r, n) {
    super(e, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
class qa extends R {
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
let zs = class extends R {
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
    return this.hasKey("deprecated") ? this.get("deprecated") : new Vt(!1);
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
}, Vn = class extends R {
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
    return this.hasKey("required") ? this.get("required") : new Vt(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Vt(!1);
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
Object.defineProperty(Vn.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Js = class extends R {
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
}, Ks = class extends R {
  constructor(e, r, n) {
    super(e, r, n), this.element = "paths";
  }
}, Ws = class extends R {
  constructor(e, r, n) {
    super(e, r, n), this.element = "reference", this.classes.push("openapi-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}, Ys = class extends R {
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
    return this.hasKey("required") ? this.get("required") : new Vt(!1);
  }
  set required(e) {
    this.set("required", e);
  }
}, Xs = class extends R {
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
}, Qs = class extends R {
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
class Zs extends R {
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
class Ha extends R {
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
class Ga extends R {
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
class za extends R {
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
const i3 = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", Zs), e.register("jSONReference", Ha), e.register("media", Ga), e.register("linkDescription", za), e;
  }
}, o3 = i3, a3 = (t) => {
  if (Se(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, c3 = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...In
};
let u$ = class {
  constructor(e) {
    P(this, "element");
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = xt(r.meta, e.meta), Ts(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = xt(r.attributes, e.attributes));
  }
}, u3 = class extends u$ {
  enter(e) {
    return this.element = C(e), Y;
  }
};
const be = u3, l$ = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, ls = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : ls(r, [...e, r]);
}, l3 = (...t) => {
  if (t.length === 0)
    return;
  let e;
  const r = t.map((n) => ls(n));
  for (; r.every((n) => n.length > 0); ) {
    const n = r.map((i) => i.pop()), s = n[0];
    if (n.every((i) => i === s))
      e = s;
    else
      break;
  }
  return e;
}, wm = (t, e, r = []) => {
  var n;
  const s = (n = l3(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = ls(s);
  for (let a of t) {
    let c = ls(a);
    for (let u = c.length - 1; u >= 0; u--) {
      let p = c[u];
      o.indexOf(p) === -1 && (l$(i, p, ["constructor", ...r]), o.push(p));
    }
  }
  return i.constructor = e, i;
}, ml = (t) => t.filter((e, r) => t.indexOf(e) == r), f$ = /* @__PURE__ */ new WeakMap(), f3 = (t) => f$.get(t), p3 = (t, e) => f$.set(t, e), Om = (t, e) => {
  var r, n;
  const s = ml([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = ml([...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, Em = (t, e) => {
  var r, n, s, i;
  return {
    property: Om((r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}, (n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}),
    method: Om((s = t == null ? void 0 : t.method) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, h3 = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: ml([...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : []]),
    static: Em((s = t == null ? void 0 : t.static) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: Em((o = t == null ? void 0 : t.instance) !== null && o !== void 0 ? o : {}, (a = e == null ? void 0 : e.instance) !== null && a !== void 0 ? a : {})
  };
}, d3 = /* @__PURE__ */ new Map(), m3 = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = ls(s.prototype).map((u) => u.constructor), o = (e = f3(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((u) => !r.has(u));
      for (let u of c)
        n.add(u);
      r.add(s), n.delete(s);
    }
  return [...r];
}, y3 = (...t) => {
  const e = m3(...t).map((r) => d3.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => h3(r, n));
};
function _(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      l$(this, new c(...a));
  }
  i.prototype = wm(s, i), Object.setPrototypeOf(
    i,
    wm(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = y3(...t);
    for (let c of (e = a == null ? void 0 : a.class) !== null && e !== void 0 ? e : []) {
      const u = c(o);
      u && (o = u);
    }
    Am((r = a == null ? void 0 : a.static) !== null && r !== void 0 ? r : {}, o), Am((n = a == null ? void 0 : a.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return p3(o, t), o;
}
const Am = (t, e) => {
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
let fr = class extends u$ {
  constructor({
    specObj: r,
    ...n
  }) {
    super({
      ...n
    });
    P(this, "specObj");
    P(this, "passingOptionsNames", ["specObj"]);
    this.specObj = r;
  }
  retrievePassingOptions() {
    return Ev(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = qe(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return fa(Bt, ["visitors", ...r], this.specObj) ? qe(["visitors", ...r], this.specObj) : qe(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof be && (i == null ? void 0 : i.constructor) === be ? C(n) : (De(n, i, s), i.element);
  }
}, fs = class extends fr {
  constructor({
    specPath: r,
    ignoredFields: n,
    ...s
  }) {
    super({
      ...s
    });
    P(this, "specPath");
    P(this, "ignoredFields");
    this.specPath = r, this.ignoredFields = n || [];
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (H(o) && s.includes(w(o)) && !this.ignoredFields.includes(w(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", w(o)], i), u = new _s(C(o), c);
        this.copyMetaAndAttributes(a, u), u.classes.push("fixed-field"), this.element.content.push(u);
      } else
        this.ignoredFields.includes(w(o)) || this.element.content.push(C(a));
    }), this.copyMetaAndAttributes(r, this.element), Y;
  }
};
class v3 extends _(fs, be) {
  constructor(e) {
    super(e), this.element = new Zs(), this.specPath = N(["document", "objects", "JSONSchema"]);
  }
}
const g3 = v3;
let Kt = class {
  constructor({
    parent: e
  }) {
    P(this, "parent");
    this.parent = e;
  }
};
const St = (t) => W(t) && t.hasKey("$ref");
let b3 = class extends _(fr, Kt, be) {
  ObjectElement(e) {
    const r = St(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), Y;
  }
  ArrayElement(e) {
    return this.element = new se(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = St(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
};
const $3 = b3;
class x3 extends be {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
const S3 = x3;
let w3 = class extends fr {
  constructor({
    specPath: r,
    ignoredFields: n,
    fieldPatternPredicate: s,
    ...i
  }) {
    super({
      ...i
    });
    P(this, "specPath");
    P(this, "ignoredFields");
    P(this, "fieldPatternPredicate", df);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (!this.ignoredFields.includes(w(s)) && this.fieldPatternPredicate(w(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new _s(C(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else
        this.ignoredFields.includes(w(s)) || this.element.content.push(C(i));
    }), this.copyMetaAndAttributes(r, this.element), Y;
  }
}, Ja = class extends w3 {
  constructor(e) {
    super(e), this.fieldPatternPredicate = Cf;
  }
}, O3 = class extends _(Ja, Kt, be) {
  constructor(e) {
    super(e), this.element = new R(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => St(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
const E3 = O3;
let A3 = class extends _(Ja, Kt, be) {
  constructor(e) {
    super(e), this.element = new R(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => St(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
const P3 = A3;
class j3 extends _(Ja, Kt, be) {
  constructor(e) {
    super(e), this.element = new R(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => St(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
const _3 = j3;
let R3 = class extends be {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
};
const T3 = R3;
let I3 = class extends be {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
};
const C3 = I3;
let F3 = class extends _(fr, Kt, be) {
  constructor(e) {
    super(e), this.element = new se(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = St(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
};
const M3 = F3;
let V3 = class extends _(fr, Kt, be) {
  constructor(e) {
    super(e), this.element = new se(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = St(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
};
const D3 = V3;
let N3 = class extends _(fr, Kt, be) {
  constructor(e) {
    super(e), this.element = new se(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = St(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
};
const L3 = N3;
class k3 extends _(Ja, Kt, be) {
  constructor(e) {
    super(e), this.element = new R(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => St(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
const U3 = k3;
let B3 = class extends _(fr, Kt, be) {
  constructor(e) {
    super(e), this.element = new se(), this.element.classes.push("json-schema-links");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "LinkDescription"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
};
const q3 = B3;
class H3 extends _(fs, be) {
  constructor(e) {
    super(e), this.element = new Ha(), this.specPath = N(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = fs.prototype.ObjectElement.call(this, e);
    return H(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
const G3 = H3;
let z3 = class extends be {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
};
const J3 = z3;
let K3 = class extends fr {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    P(this, "alternator");
    this.alternator = r;
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => Pf(i, N(o), pa)), s = Cv(n)(r);
    return this.element = this.toRefractedElement(s, r), Y;
  }
}, W3 = class extends K3 {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: St,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: Lt,
      specPath: ["document", "objects", "JSONSchema"]
    }];
  }
};
const Jr = W3;
class Y3 extends _(fs, be) {
  constructor(e) {
    super(e), this.element = new Ga(), this.specPath = N(["document", "objects", "Media"]);
  }
}
const X3 = Y3;
class Q3 extends _(fs, be) {
  constructor(e) {
    super(e), this.element = new za(), this.specPath = N(["document", "objects", "LinkDescription"]);
  }
}
const Z3 = Q3, Wt = {
  visitors: {
    value: be,
    JSONSchemaOrJSONReferenceVisitor: Jr,
    document: {
      objects: {
        JSONSchema: {
          $visitor: g3,
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
            additionalItems: Jr,
            items: $3,
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
            required: S3,
            properties: E3,
            additionalProperties: Jr,
            patternProperties: P3,
            dependencies: _3,
            // validation keywords for any instance type
            enum: T3,
            type: C3,
            allOf: M3,
            anyOf: D3,
            oneOf: L3,
            not: Jr,
            definitions: U3,
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
            links: q3,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: G3,
          fixedFields: {
            $ref: J3
          }
        },
        Media: {
          $visitor: X3,
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
          $visitor: Z3,
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
            targetSchema: Jr,
            mediaType: {
              $ref: "#/visitors/value"
            },
            method: {
              $ref: "#/visitors/value"
            },
            encType: {
              $ref: "#/visitors/value"
            },
            schema: Jr
          }
        }
      }
    }
  }
}, eq = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zs || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), tq = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ha || t(n) && e("JSONReference", n) && r("object", n)), rq = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ga || t(n) && e("media", n) && r("object", n)), nq = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof za || t(n) && e("linkDescription", n) && r("object", n)), sq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: tq,
  isJSONSchemaElement: eq,
  isLinkDescriptionElement: nq,
  isMediaElement: rq
}, Symbol.toStringTag, { value: "Module" })), iq = () => {
  const t = Is(o3);
  return {
    predicates: {
      ...sq,
      isStringElement: H
    },
    namespace: t
  };
}, oq = iq, aq = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Wt
} = {}) => {
  const s = hp(t), i = Fa(n), o = qe(e, i), a = new o({
    specObj: i
  });
  return De(s, a), Cn(a.element, r, {
    toolboxCreator: oq,
    visitorOptions: {
      keyMap: c3,
      nodeTypeGetter: a3
    }
  });
}, Ka = (t) => (e, r = {}) => aq(e, {
  specPath: t,
  ...r
});
Zs.refract = Ka(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Ha.refract = Ka(["visitors", "document", "objects", "JSONReference", "$visitor"]);
Ga.refract = Ka(["visitors", "document", "objects", "Media", "$visitor"]);
za.refract = Ka(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let Wa = class extends Zs {
  constructor(e, r, n) {
    super(e, r, n), this.element = "schema", this.classes.push("json-schema-draft-4");
  }
  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    throw new Re("idProp getter in Schema class is not not supported.");
  }
  set idProp(e) {
    throw new Re("idProp setter in Schema class is not not supported.");
  }
  get $schema() {
    throw new Re("$schema getter in Schema class is not not supported.");
  }
  set $schema(e) {
    throw new Re("$schema setter in Schema class is not not supported.");
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
    throw new Re("patternProperties getter in Schema class is not not supported.");
  }
  set patternProperties(e) {
    throw new Re("patternProperties setter in Schema class is not not supported.");
  }
  get dependencies() {
    throw new Re("dependencies getter in Schema class is not not supported.");
  }
  set dependencies(e) {
    throw new Re("dependencies setter in Schema class is not not supported.");
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
    throw new Re("definitions getter in Schema class is not not supported.");
  }
  set definitions(e) {
    throw new Re("definitions setter in Schema class is not not supported.");
  }
  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */
  get base() {
    throw new Re("base getter in Schema class is not not supported.");
  }
  set base(e) {
    throw new Re("base setter in Schema class is not not supported.");
  }
  get links() {
    throw new Re("links getter in Schema class is not not supported.");
  }
  set links(e) {
    throw new Re("links setter in Schema class is not not supported.");
  }
  get media() {
    throw new Re("media getter in Schema class is not not supported.");
  }
  set media(e) {
    throw new Re("media setter in Schema class is not not supported.");
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
}, ei = class extends R {
  constructor(e, r, n) {
    super(e, r, n), this.element = "securityRequirement";
  }
}, ti = class extends R {
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
}, ri = class extends R {
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
}, ni = class extends R {
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
}, Ya = class extends R {
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
}, Xa = class extends R {
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
const cq = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Vs), e.register("components", Ds), e.register("contact", Ns), e.register("discriminator", La), e.register("encoding", ka), e.register("example", Ls), e.register("externalDocumentation", ks), e.register("header", Mn), e.register("info", Us), e.register("license", Bs), e.register("link", qs), e.register("mediaType", Hs), e.register("oAuthFlow", Ua), e.register("oAuthFlows", Ba), e.register("openapi", Gs), e.register("openApi3_0", qa), e.register("operation", zs), e.register("parameter", Vn), e.register("pathItem", Js), e.register("paths", Ks), e.register("reference", Ws), e.register("requestBody", Ys), e.register("response", Xs), e.register("responses", Qs), e.register("schema", Wa), e.register("securityRequirement", ei), e.register("securityScheme", ti), e.register("server", ri), e.register("serverVariable", ni), e.register("tag", Ya), e.register("xml", Xa), e;
  }
}, uq = cq, $o = class $o extends se {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push($o.primaryClass);
  }
};
P($o, "primaryClass", "servers");
let ps = $o;
const xo = class xo extends se {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(xo.primaryClass);
  }
};
P(xo, "primaryClass", "security");
let yl = xo;
const So = class So extends se {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(So.primaryClass);
  }
};
P(So, "primaryClass", "tags");
let vl = So;
const wo = class wo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(wo.primaryClass);
  }
};
P(wo, "primaryClass", "server-variables");
let gl = wo;
const Oo = class Oo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Oo.primaryClass);
  }
};
P(Oo, "primaryClass", "components-schemas");
let mo = Oo;
const Eo = class Eo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Eo.primaryClass);
  }
};
P(Eo, "primaryClass", "components-responses");
let bl = Eo;
const Ao = class Ao extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ao.primaryClass), this.classes.push("parameters");
  }
};
P(Ao, "primaryClass", "components-parameters");
let $l = Ao;
const Po = class Po extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Po.primaryClass), this.classes.push("examples");
  }
};
P(Po, "primaryClass", "components-examples");
let xl = Po;
const jo = class jo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(jo.primaryClass);
  }
};
P(jo, "primaryClass", "components-request-bodies");
let Sl = jo;
const _o = class _o extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(_o.primaryClass);
  }
};
P(_o, "primaryClass", "components-headers");
let wl = _o;
const Ro = class Ro extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ro.primaryClass);
  }
};
P(Ro, "primaryClass", "components-security-schemes");
let Ol = Ro;
const To = class To extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(To.primaryClass);
  }
};
P(To, "primaryClass", "components-links");
let El = To;
const Io = class Io extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Io.primaryClass);
  }
};
P(Io, "primaryClass", "components-callbacks");
let Al = Io;
const Co = class Co extends se {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Co.primaryClass), this.classes.push("servers");
  }
};
P(Co, "primaryClass", "path-item-servers");
let yo = Co;
const Fo = class Fo extends se {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Fo.primaryClass), this.classes.push("parameters");
  }
};
P(Fo, "primaryClass", "path-item-parameters");
let Pl = Fo;
const Mo = class Mo extends se {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Mo.primaryClass), this.classes.push("parameters");
  }
};
P(Mo, "primaryClass", "operation-parameters");
let vo = Mo;
const Vo = class Vo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Vo.primaryClass), this.classes.push("examples");
  }
};
P(Vo, "primaryClass", "parameter-examples");
let jl = Vo;
const Do = class Do extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Do.primaryClass), this.classes.push("content");
  }
};
P(Do, "primaryClass", "parameter-content");
let _l = Do;
const No = class No extends se {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(No.primaryClass);
  }
};
P(No, "primaryClass", "operation-tags");
let Rl = No;
const Lo = class Lo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Lo.primaryClass);
  }
};
P(Lo, "primaryClass", "operation-callbacks");
let Tl = Lo;
const ko = class ko extends se {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ko.primaryClass), this.classes.push("security");
  }
};
P(ko, "primaryClass", "operation-security");
let go = ko;
const Uo = class Uo extends se {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Uo.primaryClass), this.classes.push("servers");
  }
};
P(Uo, "primaryClass", "operation-servers");
let bo = Uo;
const Bo = class Bo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Bo.primaryClass), this.classes.push("content");
  }
};
P(Bo, "primaryClass", "request-body-content");
let Il = Bo;
const qo = class qo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(qo.primaryClass), this.classes.push("examples");
  }
};
P(qo, "primaryClass", "media-type-examples");
let Cl = qo;
const Ho = class Ho extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ho.primaryClass);
  }
};
P(Ho, "primaryClass", "media-type-encoding");
let Fl = Ho;
const Go = class Go extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Go.primaryClass);
  }
};
P(Go, "primaryClass", "encoding-headers");
let Ml = Go;
const zo = class zo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(zo.primaryClass);
  }
};
P(zo, "primaryClass", "response-headers");
let Vl = zo;
const Jo = class Jo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Jo.primaryClass), this.classes.push("content");
  }
};
P(Jo, "primaryClass", "response-content");
let Dl = Jo;
const Ko = class Ko extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ko.primaryClass);
  }
};
P(Ko, "primaryClass", "response-links");
let Nl = Ko;
const Wo = class Wo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Wo.primaryClass);
  }
};
P(Wo, "primaryClass", "discriminator-mapping");
let Ll = Wo;
const Yo = class Yo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Yo.primaryClass);
  }
};
P(Yo, "primaryClass", "oauth-flow-scopes");
let kl = Yo;
const Xo = class Xo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Xo.primaryClass);
  }
};
P(Xo, "primaryClass", "link-parameters");
let Ul = Xo;
const Qo = class Qo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Qo.primaryClass), this.classes.push("examples");
  }
};
P(Qo, "primaryClass", "header-examples");
let Bl = Qo;
const Zo = class Zo extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Zo.primaryClass), this.classes.push("content");
  }
};
P(Zo, "primaryClass", "header-content");
let ql = Zo;
const lq = (t) => {
  if (Se(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, fq = {
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
  ...In
};
class p$ {
  constructor(e = {}) {
    P(this, "element");
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = xt(r.meta, e.meta), Ts(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = xt(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
class pq extends p$ {
  enter(e) {
    return this.element = C(e), Y;
  }
}
const j = pq;
class Ue extends p$ {
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
    P(this, "specObj");
    P(this, "passingOptionsNames", ["specObj", "openApiGenericElement", "openApiSemanticElement"]);
    P(this, "openApiGenericElement");
    P(this, "openApiSemanticElement");
    this.specObj = r, this.openApiGenericElement = s, this.openApiSemanticElement = i, Array.isArray(n) && (this.passingOptionsNames = n);
  }
  retrievePassingOptions() {
    return Ev(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = qe(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return fa(Bt, ["visitors", ...r], this.specObj) ? qe(["visitors", ...r], this.specObj) : qe(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof j && (i == null ? void 0 : i.constructor) === j ? C(n) : (De(n, i, s), i.element);
  }
}
const ue = (t) => W(t) && t.hasKey("$ref"), hq = W, dq = W, h$ = (t) => H(t.key) && Av("x-", w(t.key));
class G extends Ue {
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
    P(this, "specPath");
    P(this, "ignoredFields");
    P(this, "canSupportSpecificationExtensions", !0);
    P(this, "specificationExtensionPredicate", h$);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "boolean" && (this.canSupportSpecificationExtensions = s), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (H(o) && s.includes(w(o)) && !this.ignoredFields.includes(w(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", w(o)], i), u = new _s(C(o), c);
        this.copyMetaAndAttributes(a, u), u.classes.push("fixed-field"), this.element.content.push(u);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(a)) {
        const c = this.toRefractedElement(["document", "extension"], a);
        this.element.content.push(c);
      } else
        this.ignoredFields.includes(w(o)) || this.element.content.push(C(a));
    }), this.copyMetaAndAttributes(r, this.element), Y;
  }
}
class mq extends _(G, j) {
  constructor(e) {
    super(e), this.element = new qa(), this.specPath = N(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return G.prototype.ObjectElement.call(this, e);
  }
}
const yq = mq;
class vq extends _(Ue, j) {
  StringElement(e) {
    const r = new Gs(w(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, Y;
  }
}
const gq = vq;
class bq extends Ue {
  MemberElement(e) {
    return this.element = C(e), this.element.classes.push("specification-extension"), Y;
  }
}
const $q = bq;
let xq = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Us(), this.specPath = N(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Sq = xq;
class wq extends j {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
const Oq = wq;
let Eq = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Ns(), this.specPath = N(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Aq = Eq;
let Pq = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Bs(), this.specPath = N(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
};
const jq = Pq;
let _q = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new qs(), this.specPath = N(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return (H(this.element.operationId) || H(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
const Rq = _q;
class Tq extends j {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const Iq = Tq;
class Cq extends j {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const Fq = Cq;
class bn extends Ue {
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
    P(this, "specPath");
    P(this, "ignoredFields");
    P(this, "fieldPatternPredicate", df);
    P(this, "canSupportSpecificationExtensions", !1);
    P(this, "specificationExtensionPredicate", h$);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s), typeof i == "boolean" && (this.canSupportSpecificationExtensions = i), typeof o == "function" && (this.specificationExtensionPredicate = o);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
        const o = this.toRefractedElement(["document", "extension"], i);
        this.element.content.push(o);
      } else if (!this.ignoredFields.includes(w(s)) && this.fieldPatternPredicate(w(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new _s(C(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else
        this.ignoredFields.includes(w(s)) || this.element.content.push(C(i));
    }), this.copyMetaAndAttributes(r, this.element), Y;
  }
}
class B extends bn {
  constructor(e) {
    super(e), this.fieldPatternPredicate = Cf;
  }
}
let Mq = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Ul(), this.specPath = N(["value"]);
  }
};
const Vq = Mq;
let Dq = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new ri(), this.specPath = N(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Nq = Dq;
class Lq extends j {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
const kq = Lq;
let Uq = class extends _(Ue, j) {
  constructor(e) {
    super(e), this.element = new ps();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = hq(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
};
const jp = Uq;
let Bq = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new ni(), this.specPath = N(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
const qq = Bq;
class Hq extends _(B, j) {
  constructor(e) {
    super(e), this.element = new gl(), this.specPath = N(["document", "objects", "ServerVariable"]);
  }
}
const Gq = Hq;
let zq = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Hs(), this.specPath = N(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Jq = zq;
class wt extends Ue {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    P(this, "alternator");
    this.alternator = r || [];
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => Pf(i, N(o), pa)), s = Cv(n)(r);
    return this.element = this.toRefractedElement(s, r), Y;
  }
}
const Kq = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Vs || t(n) && e("callback", n) && r("object", n)), Wq = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ds || t(n) && e("components", n) && r("object", n)), Yq = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ns || t(n) && e("contact", n) && r("object", n)), Xq = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ls || t(n) && e("example", n) && r("object", n)), Qq = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ks || t(n) && e("externalDocumentation", n) && r("object", n)), Dn = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Mn || t(n) && e("header", n) && r("object", n)), Zq = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Us || t(n) && e("info", n) && r("object", n)), eH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bs || t(n) && e("license", n) && r("object", n)), tH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof qs || t(n) && e("link", n) && r("object", n)), rH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gs || t(n) && e("openapi", n) && r("string", n)), nH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof qa || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), d$ = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zs || t(n) && e("operation", n) && r("object", n)), sH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Vn || t(n) && e("parameter", n) && r("object", n)), _p = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Js || t(n) && e("pathItem", n) && r("object", n)), iH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ks || t(n) && e("paths", n) && r("object", n)), ie = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ws || t(n) && e("reference", n) && r("object", n)), oH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ys || t(n) && e("requestBody", n) && r("object", n)), Qa = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xs || t(n) && e("response", n) && r("object", n)), aH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qs || t(n) && e("responses", n) && r("object", n)), cH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wa || t(n) && e("schema", n) && r("object", n)), uH = (t) => Rs(t) && t.classes.includes("boolean-json-schema"), lH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ei || t(n) && e("securityRequirement", n) && r("object", n)), fH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ti || t(n) && e("securityScheme", n) && r("object", n)), pH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ri || t(n) && e("server", n) && r("object", n)), hH = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ni || t(n) && e("serverVariable", n) && r("object", n)), Za = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Hs || t(n) && e("mediaType", n) && r("object", n)), m$ = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof ps || t(s) && e("array", s) && r("array", s) && n("servers", s)), dH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: uH,
  isCallbackElement: Kq,
  isComponentsElement: Wq,
  isContactElement: Yq,
  isExampleElement: Xq,
  isExternalDocumentationElement: Qq,
  isHeaderElement: Dn,
  isInfoElement: Zq,
  isLicenseElement: eH,
  isLinkElement: tH,
  isMediaTypeElement: Za,
  isOpenApi3_0Element: nH,
  isOpenapiElement: rH,
  isOperationElement: d$,
  isParameterElement: sH,
  isPathItemElement: _p,
  isPathsElement: iH,
  isReferenceElement: ie,
  isRequestBodyElement: oH,
  isResponseElement: Qa,
  isResponsesElement: aH,
  isSchemaElement: cH,
  isSecurityRequirementElement: lH,
  isSecuritySchemeElement: fH,
  isServerElement: pH,
  isServerVariableElement: hH,
  isServersElement: m$
}, Symbol.toStringTag, { value: "Module" }));
let mH = class extends _(wt, j) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Lt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = wt.prototype.enter.call(this, e);
    return ie(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
};
const yH = mH;
let Rp = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new R(), this.element.classes.push("examples"), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, vH = class extends Rp {
  constructor(e) {
    super(e), this.element = new Cl();
  }
};
const gH = vH;
let bH = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Fl(), this.specPath = N(["document", "objects", "Encoding"]);
  }
};
const $H = bH;
let xH = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new ei(), this.specPath = N(["value"]);
  }
};
const SH = xH;
let wH = class extends _(Ue, j) {
  constructor(e) {
    super(e), this.element = new yl();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (W(r)) {
        const n = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(n);
      } else
        this.element.push(C(r));
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
};
const OH = wH;
let EH = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Ds(), this.specPath = N(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
};
const AH = EH;
let PH = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Ya(), this.specPath = N(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
};
const jH = PH;
let _H = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Ws(), this.specPath = N(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return H(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
const RH = _H;
let TH = class extends j {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
};
const IH = TH;
let CH = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Vn(), this.specPath = N(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return W(this.element.contentProp) && this.element.contentProp.filter(Za).forEach((n, s) => {
      n.setMetaProperty("media-type", w(s));
    }), r;
  }
};
const FH = CH;
let MH = class extends _(wt, j) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Lt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = wt.prototype.enter.call(this, e);
    return ie(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
};
const VH = MH;
let DH = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Mn(), this.specPath = N(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
};
const NH = DH;
let LH = class extends _(wt, j) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Lt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = wt.prototype.enter.call(this, e);
    return ie(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
};
const kH = LH;
let UH = class extends Rp {
  constructor(e) {
    super(e), this.element = new Bl();
  }
};
const BH = UH;
let ec = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new R(), this.element.classes.push("content"), this.specPath = N(["document", "objects", "MediaType"]);
  }
}, qH = class extends ec {
  constructor(e) {
    super(e), this.element = new ql();
  }
};
const HH = qH;
let GH = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Wa(), this.specPath = N(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const zH = GH, {
  allOf: Pm
} = Wt.visitors.document.objects.JSONSchema.fixedFields;
let JH = class extends Pm {
  ArrayElement(e) {
    const r = Pm.prototype.ArrayElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const KH = JH, {
  anyOf: jm
} = Wt.visitors.document.objects.JSONSchema.fixedFields;
let WH = class extends jm {
  ArrayElement(e) {
    const r = jm.prototype.ArrayElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const YH = WH, {
  oneOf: _m
} = Wt.visitors.document.objects.JSONSchema.fixedFields;
let XH = class extends _m {
  ArrayElement(e) {
    const r = _m.prototype.ArrayElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const QH = XH, {
  items: Rm
} = Wt.visitors.document.objects.JSONSchema.fixedFields;
class ZH extends Rm {
  ObjectElement(e) {
    const r = Rm.prototype.ObjectElement.call(this, e);
    return ie(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
}
const eG = ZH, {
  properties: Tm
} = Wt.visitors.document.objects.JSONSchema.fixedFields;
let tG = class extends Tm {
  ObjectElement(e) {
    const r = Tm.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const rG = tG, {
  type: nG
} = Wt.visitors.document.objects.JSONSchema.fixedFields;
let sG = class extends nG {
  ArrayElement(e) {
    return this.enter(e);
  }
};
const iG = sG, {
  JSONSchemaOrJSONReferenceVisitor: Im
} = Wt.visitors;
class oG extends Im {
  ObjectElement(e) {
    const r = Im.prototype.enter.call(this, e);
    return ie(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
const Cm = oG;
let aG = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new La(), this.specPath = N(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
const cG = aG;
class uG extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Ll(), this.specPath = N(["value"]);
  }
}
const lG = uG;
let fG = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Xa(), this.specPath = N(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
};
const pG = fG;
let hG = class extends Rp {
  constructor(e) {
    super(e), this.element = new jl();
  }
};
const dG = hG;
let mG = class extends ec {
  constructor(e) {
    super(e), this.element = new _l();
  }
};
const yG = mG;
let vG = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new mo(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const gG = vG;
let bG = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new bl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Qa).forEach((n, s) => {
      n.setMetaProperty("http-status-code", w(s));
    }), r;
  }
};
const $G = bG;
let xG = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new $l(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
};
const SG = xG;
let wG = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new xl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
const OG = wG;
class EG extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Sl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
const AG = EG;
let PG = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new wl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.filter(Dn).forEach((n, s) => {
      n.setMetaProperty("header-name", w(s));
    }), r;
  }
};
const jG = PG;
class _G extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Ol(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
const RG = _G;
let TG = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new El(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
};
const IG = TG;
let CG = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Al(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
};
const FG = CG;
let MG = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Ls(), this.specPath = N(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return H(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
const VG = MG;
class DG extends j {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const NG = DG;
let LG = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new ks(), this.specPath = N(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
};
const kG = LG;
let UG = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new ka(), this.specPath = N(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return W(this.element.headers) && this.element.headers.filter(Dn).forEach((n, s) => {
      n.setMetaProperty("header-name", w(s));
    }), r;
  }
};
const BG = UG;
let qG = class extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Ml(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!Dn(n))
        return;
      const i = w(s);
      n.setMetaProperty("headerName", i);
    }), r;
  }
};
const HG = qG;
let GG = class extends _(bn, j) {
  constructor(e) {
    super(e), this.element = new Ks(), this.specPath = N(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = Lt;
  }
  ObjectElement(e) {
    const r = bn.prototype.ObjectElement.call(this, e);
    return this.element.filter(_p).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", C(s));
    }), r;
  }
};
const zG = GG;
let JG = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Ys(), this.specPath = N(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return W(this.element.contentProp) && this.element.contentProp.filter(Za).forEach((n, s) => {
      n.setMetaProperty("media-type", w(s));
    }), r;
  }
};
const KG = JG;
let WG = class extends ec {
  constructor(e) {
    super(e), this.element = new Il();
  }
};
const YG = WG;
let XG = class extends _(bn, j) {
  constructor(e) {
    super(e), this.element = new Vs(), this.specPath = N(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(_p).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", w(s));
    }), r;
  }
};
const QG = XG;
let ZG = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Xs(), this.specPath = N(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return W(this.element.contentProp) && this.element.contentProp.filter(Za).forEach((n, s) => {
      n.setMetaProperty("media-type", w(s));
    }), W(this.element.headers) && this.element.headers.filter(Dn).forEach((n, s) => {
      n.setMetaProperty("header-name", w(s));
    }), r;
  }
};
const ez = ZG;
class tz extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Vl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!Dn(n))
        return;
      const i = w(s);
      n.setMetaProperty("header-name", i);
    }), r;
  }
}
const rz = tz;
class nz extends ec {
  constructor(e) {
    super(e), this.element = new Dl();
  }
}
const sz = nz;
class iz extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Nl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
const oz = iz;
class Fm extends _(G, bn) {
  constructor({
    specPathFixedFields: r,
    specPathPatternedFields: n,
    ...s
  }) {
    super({
      ...s
    });
    P(this, "specPathFixedFields");
    P(this, "specPathPatternedFields");
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
      this.ignoredFields = [...s, ...DA(r.keys(), i)], G.prototype.ObjectElement.call(this, r), this.specPath = this.specPathPatternedFields, this.ignoredFields = i, bn.prototype.ObjectElement.call(this, r);
    } catch (i) {
      throw this.specPath = n, i;
    }
    return Y;
  }
}
let az = class extends _(Fm, j) {
  constructor(e) {
    super(e), this.element = new Qs(), this.specPathFixedFields = N(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${gP(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = Fm.prototype.ObjectElement.call(this, e);
    return this.element.filter(ie).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Qa).forEach((n, s) => {
      const i = C(s);
      this.fieldPatternPredicate(w(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
const cz = az;
class uz extends _(wt, j) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Lt,
      specPath: ["document", "objects", "Response"]
    }];
  }
  ObjectElement(e) {
    const r = wt.prototype.enter.call(this, e);
    return ie(this.element) ? this.element.setMetaProperty("referenced-element", "response") : Qa(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
const lz = uz;
let fz = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new zs(), this.specPath = N(["document", "objects", "Operation"]);
  }
};
const pz = fz;
let hz = class extends j {
  constructor(e) {
    super(e), this.element = new Rl();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(C(e)), Y;
  }
};
const dz = hz;
let y$ = class extends _(Ue, j) {
  constructor(e) {
    super(e), this.element = new se(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      ie(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
}, mz = class extends y$ {
  constructor(e) {
    super(e), this.element = new vo();
  }
};
const yz = mz;
let vz = class extends wt {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: ue,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Lt,
      specPath: ["document", "objects", "RequestBody"]
    }];
  }
  ObjectElement(e) {
    const r = wt.prototype.enter.call(this, e);
    return ie(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
const gz = vz;
class bz extends _(B, j) {
  constructor(r) {
    super(r);
    P(this, "specPath");
    this.element = new Tl(), this.specPath = (n) => ue(n) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(r) {
    const n = B.prototype.ObjectElement.call(this, r);
    return this.element.filter(ie).forEach((s) => {
      s.setMetaProperty("referenced-element", "callback");
    }), n;
  }
}
const $z = bz;
class xz extends _(Ue, j) {
  constructor(e) {
    super(e), this.element = new go();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = W(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
}
const Sz = xz;
let wz = class extends jp {
  constructor(e) {
    super(e), this.element = new bo();
  }
};
const Oz = wz;
let Ez = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Js(), this.specPath = N(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(d$).forEach((n, s) => {
      const i = C(s);
      i.content = w(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), H(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
const Az = Ez;
class Pz extends j {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const jz = Pz;
class _z extends jp {
  constructor(e) {
    super(e), this.element = new yo();
  }
}
const Rz = _z;
class Tz extends y$ {
  constructor(e) {
    super(e), this.element = new Pl();
  }
}
const Iz = Tz;
let Cz = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new ti(), this.specPath = N(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Fz = Cz;
let Mz = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Ba(), this.specPath = N(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Vz = Mz;
let Dz = class extends _(G, j) {
  constructor(e) {
    super(e), this.element = new Ua(), this.specPath = N(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Nz = Dz;
class Lz extends _(B, j) {
  constructor(e) {
    super(e), this.element = new kl(), this.specPath = N(["value"]);
  }
}
const kz = Lz;
class Uz extends _(Ue, j) {
  constructor(e) {
    super(e), this.element = new vl();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = dq(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
}
const Bz = Uz, {
  fixedFields: $e
} = Wt.visitors.document.objects.JSONSchema, qz = {
  visitors: {
    value: j,
    document: {
      objects: {
        OpenApi: {
          $visitor: yq,
          fixedFields: {
            openapi: gq,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: jp,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: OH,
            tags: Bz,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: Sq,
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
            version: Oq
          }
        },
        Contact: {
          $visitor: Aq,
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
          $visitor: jq,
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
          $visitor: Nq,
          fixedFields: {
            url: kq,
            description: {
              $ref: "#/visitors/value"
            },
            variables: Gq
          }
        },
        ServerVariable: {
          $visitor: qq,
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
          $visitor: AH,
          fixedFields: {
            schemas: gG,
            responses: $G,
            parameters: SG,
            examples: OG,
            requestBodies: AG,
            headers: jG,
            securitySchemes: RG,
            links: IG,
            callbacks: FG
          }
        },
        Paths: {
          $visitor: zG
        },
        PathItem: {
          $visitor: Az,
          fixedFields: {
            $ref: jz,
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
            servers: Rz,
            parameters: Iz
          }
        },
        Operation: {
          $visitor: pz,
          fixedFields: {
            tags: dz,
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
            parameters: yz,
            requestBody: gz,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: $z,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: Sz,
            servers: Oz
          }
        },
        ExternalDocumentation: {
          $visitor: kG,
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
          $visitor: FH,
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
            schema: VH,
            example: {
              $ref: "#/visitors/value"
            },
            examples: dG,
            content: yG
          }
        },
        RequestBody: {
          $visitor: KG,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: YG,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: Jq,
          fixedFields: {
            schema: yH,
            example: {
              $ref: "#/visitors/value"
            },
            examples: gH,
            encoding: $H
          }
        },
        Encoding: {
          $visitor: BG,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: HG,
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
          $visitor: cz,
          fixedFields: {
            default: lz
          }
        },
        Response: {
          $visitor: ez,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: rz,
            content: sz,
            links: oz
          }
        },
        Callback: {
          $visitor: QG
        },
        Example: {
          $visitor: VG,
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
            externalValue: NG
          }
        },
        Link: {
          $visitor: Rq,
          fixedFields: {
            operationRef: Iq,
            operationId: Fq,
            parameters: Vq,
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
          $visitor: NH,
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
            schema: kH,
            example: {
              $ref: "#/visitors/value"
            },
            examples: BH,
            content: HH
          }
        },
        Tag: {
          $visitor: jH,
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
          $visitor: RH,
          fixedFields: {
            $ref: IH
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: zH,
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
            type: iG,
            allOf: KH,
            anyOf: YH,
            oneOf: QH,
            not: Cm,
            items: eG,
            properties: rG,
            additionalProperties: Cm,
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
          $visitor: cG,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: lG
          }
        },
        XML: {
          $visitor: pG,
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
          $visitor: Fz,
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
          $visitor: Vz,
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
          $visitor: Nz,
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
            scopes: kz
          }
        },
        SecurityRequirement: {
          $visitor: SH
        }
      },
      extension: {
        $visitor: $q
      }
    }
  }
}, $ = qz, Hz = () => {
  const t = Is(uq);
  return {
    predicates: {
      ...dH,
      isElement: Se,
      isStringElement: H,
      isArrayElement: Ke,
      isObjectElement: W,
      isMemberElement: he,
      includesClasses: Ta,
      hasElementSourceMap: Ts
    },
    namespace: t
  };
}, Gz = Hz, zz = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = hp(t), s = Fa($), i = qe(e, s), o = new i({
    specObj: s
  });
  return De(n, o), Cn(o.element, r, {
    toolboxCreator: Gz,
    visitorOptions: {
      keyMap: fq,
      nodeTypeGetter: lq
    }
  });
}, Z = (t) => (e, r = {}) => zz(e, {
  specPath: t,
  ...r
});
Vs.refract = Z(["visitors", "document", "objects", "Callback", "$visitor"]);
Ds.refract = Z(["visitors", "document", "objects", "Components", "$visitor"]);
Ns.refract = Z(["visitors", "document", "objects", "Contact", "$visitor"]);
Ls.refract = Z(["visitors", "document", "objects", "Example", "$visitor"]);
La.refract = Z(["visitors", "document", "objects", "Discriminator", "$visitor"]);
ka.refract = Z(["visitors", "document", "objects", "Encoding", "$visitor"]);
ks.refract = Z(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Mn.refract = Z(["visitors", "document", "objects", "Header", "$visitor"]);
Us.refract = Z(["visitors", "document", "objects", "Info", "$visitor"]);
Bs.refract = Z(["visitors", "document", "objects", "License", "$visitor"]);
qs.refract = Z(["visitors", "document", "objects", "Link", "$visitor"]);
Hs.refract = Z(["visitors", "document", "objects", "MediaType", "$visitor"]);
Ua.refract = Z(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Ba.refract = Z(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Gs.refract = Z(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
qa.refract = Z(["visitors", "document", "objects", "OpenApi", "$visitor"]);
zs.refract = Z(["visitors", "document", "objects", "Operation", "$visitor"]);
Vn.refract = Z(["visitors", "document", "objects", "Parameter", "$visitor"]);
Js.refract = Z(["visitors", "document", "objects", "PathItem", "$visitor"]);
Ks.refract = Z(["visitors", "document", "objects", "Paths", "$visitor"]);
Ws.refract = Z(["visitors", "document", "objects", "Reference", "$visitor"]);
Ys.refract = Z(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Xs.refract = Z(["visitors", "document", "objects", "Response", "$visitor"]);
Qs.refract = Z(["visitors", "document", "objects", "Responses", "$visitor"]);
Wa.refract = Z(["visitors", "document", "objects", "Schema", "$visitor"]);
ei.refract = Z(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
ti.refract = Z(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
ri.refract = Z(["visitors", "document", "objects", "Server", "$visitor"]);
ni.refract = Z(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Ya.refract = Z(["visitors", "document", "objects", "Tag", "$visitor"]);
Xa.refract = Z(["visitors", "document", "objects", "XML", "$visitor"]);
class tc extends Vs {
}
class rc extends Ds {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class nc extends Ns {
}
class Tp extends La {
}
class Ip extends ka {
}
class sc extends Ls {
}
class ic extends ks {
}
class oc extends Mn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class ac extends Us {
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
const ea = class ea extends Mt {
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
};
P(ea, "default", new ea("https://spec.openapis.org/oas/3.1/dialect/base"));
let Ar = ea;
class cc extends Bs {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class uc extends qs {
}
class lc extends Hs {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Cp extends Ua {
}
class Fp extends Ba {
}
class Mp extends Gs {
}
class Jz extends R {
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
const pr = Jz;
class si extends zs {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(e) {
    this.set("requestBody", e);
  }
}
class fc extends Vn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class ir extends Js {
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
class pc extends Ks {
}
class hr extends Ws {
}
Object.defineProperty(hr.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
Object.defineProperty(hr.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(t) {
    this.set("summary", t);
  },
  enumerable: !0
});
class hc extends Ys {
}
let dc = class extends Xs {
};
class mc extends Qs {
}
class Kz extends R {
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
const Nr = Kz;
class yc extends ei {
}
class vc extends ti {
}
class gc extends ri {
}
class bc extends ni {
}
class Vp extends Ya {
}
class Dp extends Xa {
}
const Wz = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", tc), e.register("components", rc), e.register("contact", nc), e.register("discriminator", Tp), e.register("encoding", Ip), e.register("example", sc), e.register("externalDocumentation", ic), e.register("header", oc), e.register("info", ac), e.register("jsonSchemaDialect", Ar), e.register("license", cc), e.register("link", uc), e.register("mediaType", lc), e.register("oAuthFlow", Cp), e.register("oAuthFlows", Fp), e.register("openapi", Mp), e.register("openApi3_1", pr), e.register("operation", si), e.register("parameter", fc), e.register("pathItem", ir), e.register("paths", pc), e.register("reference", hr), e.register("requestBody", hc), e.register("response", dc), e.register("responses", mc), e.register("schema", Nr), e.register("securityRequirement", yc), e.register("securityScheme", vc), e.register("server", gc), e.register("serverVariable", bc), e.register("tag", Vp), e.register("xml", Dp), e;
  }
}, Np = Wz, ta = class ta extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ta.primaryClass);
  }
};
P(ta, "primaryClass", "components-path-items");
let Hl = ta;
const ra = class ra extends R {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ra.primaryClass);
  }
};
P(ra, "primaryClass", "webhooks");
let Gl = ra;
const ut = (t) => {
  if (Se(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, $t = {
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
  ...In
}, Yz = () => ({
  predicates: t
}) => {
  const e = (n, s) => !t.isParameterElement(n) || !t.isParameterElement(s) || !t.isStringElement(n.name) || !t.isStringElement(n.in) || !t.isStringElement(s.name) || !t.isStringElement(s.in) ? !1 : w(n.name) === w(s.name) && w(n.in) === w(s.in), r = [];
  return {
    visitor: {
      PathItemElement: {
        enter(n, s, i, o, a) {
          if (a.some(t.isComponentsElement))
            return;
          const {
            parameters: c
          } = n;
          t.isArrayElement(c) ? r.push([...c.content]) : r.push([]);
        },
        leave() {
          r.pop();
        }
      },
      OperationElement: {
        leave(n) {
          const s = la(r);
          if (!Array.isArray(s) || s.length === 0)
            return;
          const i = Ov([], ["parameters", "content"], n), o = AP(e, [...i, ...s]);
          n.parameters = new vo(o);
        }
      }
    }
  };
}, Xz = () => ({
  predicates: t
}) => {
  let e;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(r) {
          t.isArrayElement(r.security) && (e = r.security);
        },
        leave() {
          e = void 0;
        }
      },
      OperationElement: {
        leave(r, n, s, i, o) {
          if (o.some(t.isComponentsElement))
            return;
          if (typeof r.security > "u" && typeof e < "u") {
            var u;
            r.security = new go((u = e) === null || u === void 0 ? void 0 : u.content);
          }
        }
      }
    }
  };
}, Qz = () => ({
  predicates: t,
  namespace: e
}) => ({
  visitor: {
    OpenApi3_1Element(r) {
      const n = typeof r.servers > "u", s = t.isArrayElement(r.servers), i = s && r.servers.length === 0, o = e.elements.Server.refract({
        url: "/"
      });
      n || !s ? r.servers = new ps([o]) : s && i && r.servers.push(o);
    },
    PathItemElement(r, n, s, i, o) {
      if (o.some(t.isComponentsElement) || !o.some(t.isOpenApi3_1Element))
        return;
      const a = o.find(t.isOpenApi3_1Element), c = typeof r.servers > "u", u = t.isArrayElement(r.servers), p = u && r.servers.length === 0;
      if (t.isOpenApi3_1Element(a)) {
        var f;
        const h = (f = a.servers) === null || f === void 0 ? void 0 : f.content, l = h ?? [];
        c || !u ? r.servers = new yo(l) : u && p && l.forEach((d) => {
          r.servers.push(d);
        });
      }
    },
    OperationElement(r, n, s, i, o) {
      if (o.some(t.isComponentsElement) || !o.some(t.isOpenApi3_1Element))
        return;
      const a = [...o].reverse().find(t.isPathItemElement), c = typeof r.servers > "u", u = t.isArrayElement(r.servers), p = u && r.servers.length === 0;
      if (t.isPathItemElement(a)) {
        var f;
        const h = (f = a.servers) === null || f === void 0 ? void 0 : f.content, l = h ?? [];
        c || !u ? r.servers = new bo(l) : u && p && l.forEach((d) => {
          r.servers.push(d);
        });
      }
    }
  }
}), zl = (t) => t.replace(/\s/g, ""), Jl = (t) => t.replace(/\W/gi, "_"), Zz = (t, e) => {
  const r = Jl(zl(e.toLowerCase())), n = Jl(zl(t));
  return `${r}${n}`;
}, e8 = (t, e, r) => {
  const n = zl(t);
  return n.length > 0 ? Jl(n) : Zz(e, r);
}, t8 = ({
  operationIdNormalizer: t = e8
} = {}) => ({
  predicates: e,
  namespace: r
}) => {
  const n = [], s = [], i = [];
  return {
    visitor: {
      OpenApi3_1Element: {
        leave() {
          const o = eP((a) => w(a.operationId), s);
          Object.entries(o).forEach(([a, c]) => {
            Array.isArray(c) && (c.length <= 1 || c.forEach((u, p) => {
              const f = `${a}${p + 1}`;
              u.operationId = new r.elements.String(f);
            }));
          }), i.forEach((a) => {
            if (typeof a.operationId > "u")
              return;
            const c = String(w(a.operationId)), u = s.find((p) => w(p.meta.get("originalOperationId")) === c);
            typeof u > "u" || (a.operationId = C.safe(u.operationId), a.meta.set("originalOperationId", c), a.set("__originalOperationId", c));
          }), s.length = 0, i.length = 0;
        }
      },
      PathItemElement: {
        enter(o) {
          const a = hn("path", w(o.meta.get("path")));
          n.push(a);
        },
        leave() {
          n.pop();
        }
      },
      OperationElement: {
        enter(o) {
          if (typeof o.operationId > "u")
            return;
          const a = String(w(o.operationId)), c = la(n), u = hn("method", w(o.meta.get("http-method"))), p = t(a, c, u);
          a !== p && (o.operationId = new r.elements.String(p), o.set("__originalOperationId", a), o.meta.set("originalOperationId", a), s.push(o));
        }
      },
      LinkElement: {
        leave(o) {
          e.isLinkElement(o) && (typeof o.operationId > "u" || i.push(o));
        }
      }
    }
  };
}, r8 = () => ({
  predicates: t
}) => ({
  visitor: {
    ParameterElement: {
      leave(e, r, n, s, i) {
        var o, a;
        if (!i.some(t.isComponentsElement) && !(typeof e.schema > "u" || !t.isSchemaElement(e.schema)) && !(typeof ((o = e.schema) === null || o === void 0 ? void 0 : o.example) > "u" && typeof ((a = e.schema) === null || a === void 0 ? void 0 : a.examples) > "u")) {
          if (typeof e.examples < "u" && t.isObjectElement(e.examples)) {
            const c = e.examples.map((u) => C.safe(u.value));
            typeof e.schema.examples < "u" && e.schema.set("examples", c), typeof e.schema.example < "u" && e.schema.set("example", c);
            return;
          }
          typeof e.example < "u" && (typeof e.schema.examples < "u" && e.schema.set("examples", [C(e.example)]), typeof e.schema.example < "u" && e.schema.set("example", C(e.example)));
        }
      }
    }
  }
}), n8 = () => ({
  predicates: t
}) => ({
  visitor: {
    HeaderElement: {
      leave(e, r, n, s, i) {
        var o, a;
        if (!i.some(t.isComponentsElement) && !(typeof e.schema > "u" || !t.isSchemaElement(e.schema)) && !(typeof ((o = e.schema) === null || o === void 0 ? void 0 : o.example) > "u" && typeof ((a = e.schema) === null || a === void 0 ? void 0 : a.examples) > "u")) {
          if (typeof e.examples < "u" && t.isObjectElement(e.examples)) {
            const c = e.examples.map((u) => C.safe(u.value));
            typeof e.schema.examples < "u" && e.schema.set("examples", c), typeof e.schema.example < "u" && e.schema.set("example", c);
            return;
          }
          typeof e.example < "u" && (typeof e.schema.examples < "u" && e.schema.set("examples", [C(e.example)]), typeof e.schema.example < "u" && e.schema.set("example", C(e.example)));
        }
      }
    }
  }
}), s8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof tc || t(n) && e("callback", n) && r("object", n)), i8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof rc || t(n) && e("components", n) && r("object", n)), o8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof nc || t(n) && e("contact", n) && r("object", n)), a8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof sc || t(n) && e("example", n) && r("object", n)), c8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ic || t(n) && e("externalDocumentation", n) && r("object", n)), u8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof oc || t(n) && e("header", n) && r("object", n)), l8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ac || t(n) && e("info", n) && r("object", n)), v$ = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ar || t(n) && e("jsonSchemaDialect", n) && r("string", n)), f8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof cc || t(n) && e("license", n) && r("object", n)), p8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof uc || t(n) && e("link", n) && r("object", n)), h8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Mp || t(n) && e("openapi", n) && r("string", n)), g$ = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof pr || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), b$ = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof si || t(n) && e("operation", n) && r("object", n)), d8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fc || t(n) && e("parameter", n) && r("object", n)), Pr = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ir || t(n) && e("pathItem", n) && r("object", n)), m8 = (t) => {
  if (!Pr(t) || !H(t.$ref))
    return !1;
  const e = w(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, y8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof pc || t(n) && e("paths", n) && r("object", n)), Lr = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hr || t(n) && e("reference", n) && r("object", n)), v8 = (t) => {
  if (!Lr(t) || !H(t.$ref))
    return !1;
  const e = w(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, g8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hc || t(n) && e("requestBody", n) && r("object", n)), b8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof dc || t(n) && e("response", n) && r("object", n)), $8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof mc || t(n) && e("responses", n) && r("object", n)), Nt = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Nr || t(n) && e("schema", n) && r("object", n)), Lp = (t) => Rs(t) && t.classes.includes("boolean-json-schema"), x8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof yc || t(n) && e("securityRequirement", n) && r("object", n)), S8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vc || t(n) && e("securityScheme", n) && r("object", n)), w8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gc || t(n) && e("server", n) && r("object", n)), O8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof bc || t(n) && e("serverVariable", n) && r("object", n)), E8 = F(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof lc || t(n) && e("mediaType", n) && r("object", n)), A8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: Lp,
  isCallbackElement: s8,
  isComponentsElement: i8,
  isContactElement: o8,
  isExampleElement: a8,
  isExternalDocumentationElement: c8,
  isHeaderElement: u8,
  isInfoElement: l8,
  isJsonSchemaDialectElement: v$,
  isLicenseElement: f8,
  isLinkElement: p8,
  isMediaTypeElement: E8,
  isOpenApi3_1Element: g$,
  isOpenapiElement: h8,
  isOperationElement: b$,
  isParameterElement: d8,
  isPathItemElement: Pr,
  isPathItemElementExternal: m8,
  isPathsElement: y8,
  isReferenceElement: Lr,
  isReferenceElementExternal: v8,
  isRequestBodyElement: g8,
  isResponseElement: b8,
  isResponsesElement: $8,
  isSchemaElement: Nt,
  isSecurityRequirementElement: x8,
  isSecuritySchemeElement: S8,
  isServerElement: w8,
  isServerVariableElement: O8
}, Symbol.toStringTag, { value: "Module" })), P8 = () => {
  const t = Is(Np);
  return {
    predicates: {
      ...A8,
      isElement: Se,
      isStringElement: H,
      isArrayElement: Ke,
      isObjectElement: W,
      isMemberElement: he,
      isServersElement: m$,
      includesClasses: Ta,
      hasElementSourceMap: Ts
    },
    namespace: t
  };
}, $$ = P8;
class j8 extends _(G, j) {
  constructor(e) {
    super(e), this.element = new pr(), this.specPath = N(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, G.prototype.ObjectElement.call(this, e);
  }
}
const _8 = j8, {
  visitors: {
    document: {
      objects: {
        Info: {
          $visitor: R8
        }
      }
    }
  }
} = $;
class T8 extends R8 {
  constructor(e) {
    super(e), this.element = new ac();
  }
}
const I8 = T8, {
  visitors: {
    document: {
      objects: {
        Contact: {
          $visitor: C8
        }
      }
    }
  }
} = $;
class F8 extends C8 {
  constructor(e) {
    super(e), this.element = new nc();
  }
}
const M8 = F8, {
  visitors: {
    document: {
      objects: {
        License: {
          $visitor: V8
        }
      }
    }
  }
} = $;
class D8 extends V8 {
  constructor(e) {
    super(e), this.element = new cc();
  }
}
const N8 = D8, {
  visitors: {
    document: {
      objects: {
        Link: {
          $visitor: L8
        }
      }
    }
  }
} = $;
class k8 extends L8 {
  constructor(e) {
    super(e), this.element = new uc();
  }
}
const U8 = k8;
class B8 extends _(Ue, j) {
  StringElement(e) {
    const r = new Ar(w(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, Y;
  }
}
const q8 = B8, {
  visitors: {
    document: {
      objects: {
        Server: {
          $visitor: H8
        }
      }
    }
  }
} = $;
class G8 extends H8 {
  constructor(e) {
    super(e), this.element = new gc();
  }
}
const z8 = G8, {
  visitors: {
    document: {
      objects: {
        ServerVariable: {
          $visitor: J8
        }
      }
    }
  }
} = $;
class K8 extends J8 {
  constructor(e) {
    super(e), this.element = new bc();
  }
}
const W8 = K8, {
  visitors: {
    document: {
      objects: {
        MediaType: {
          $visitor: Y8
        }
      }
    }
  }
} = $;
class X8 extends Y8 {
  constructor(e) {
    super(e), this.element = new lc();
  }
}
const Q8 = X8, {
  visitors: {
    document: {
      objects: {
        SecurityRequirement: {
          $visitor: Z8
        }
      }
    }
  }
} = $;
class eJ extends Z8 {
  constructor(e) {
    super(e), this.element = new yc();
  }
}
const tJ = eJ, {
  visitors: {
    document: {
      objects: {
        Components: {
          $visitor: rJ
        }
      }
    }
  }
} = $;
class nJ extends rJ {
  constructor(e) {
    super(e), this.element = new rc();
  }
}
const sJ = nJ, {
  visitors: {
    document: {
      objects: {
        Tag: {
          $visitor: iJ
        }
      }
    }
  }
} = $;
class oJ extends iJ {
  constructor(e) {
    super(e), this.element = new Vp();
  }
}
const aJ = oJ, {
  visitors: {
    document: {
      objects: {
        Reference: {
          $visitor: cJ
        }
      }
    }
  }
} = $;
class uJ extends cJ {
  constructor(e) {
    super(e), this.element = new hr();
  }
}
const lJ = uJ, {
  visitors: {
    document: {
      objects: {
        Parameter: {
          $visitor: fJ
        }
      }
    }
  }
} = $;
class pJ extends fJ {
  constructor(e) {
    super(e), this.element = new fc();
  }
}
const hJ = pJ, {
  visitors: {
    document: {
      objects: {
        Header: {
          $visitor: dJ
        }
      }
    }
  }
} = $;
class mJ extends dJ {
  constructor(e) {
    super(e), this.element = new oc();
  }
}
const yJ = mJ;
class Yt {
  constructor({
    parent: e
  }) {
    P(this, "parent");
    this.parent = e;
  }
}
class vJ extends _(G, Yt, j) {
  constructor(e) {
    super(e), this.element = new Nr(), this.specPath = N(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = Ar.default, this.passingOptionsNames.push("parent");
  }
  ObjectElement(e) {
    this.handle$schema(e), this.handle$id(e), this.parent = this.element;
    const r = G.prototype.ObjectElement.call(this, e);
    return H(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
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
    v$(this.openApiSemanticElement.jsonSchemaDialect) ? e = w(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && H(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = w(this.openApiGenericElement.get("jsonSchemaDialect")) : e = w(this.jsonSchemaDefaultDialect), e;
  }
  handle$schema(e) {
    if (cr(this.parent) && !H(e.get("$schema")))
      this.element.setMetaProperty("inherited$schema", this.getJsonSchemaDialect());
    else if (Nt(this.parent) && !H(e.get("$schema"))) {
      const r = hn(w(this.parent.meta.get("inherited$schema")), w(this.parent.$schema));
      this.element.setMetaProperty("inherited$schema", r);
    }
  }
  handle$id(e) {
    const r = this.parent !== void 0 ? C(this.parent.getMetaProperty("inherited$id", [])) : new se(), n = w(e.get("$id"));
    Cf(n) && r.push(n), this.element.setMetaProperty("inherited$id", r);
  }
}
const gJ = vJ;
class bJ extends j {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
const $J = bJ;
class xJ extends j {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const SJ = xJ;
class wJ extends _(B, Yt, j) {
  constructor(e) {
    super(e), this.element = new R(), this.element.classes.push("json-schema-$defs"), this.specPath = N(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const OJ = wJ;
let EJ = class extends _(Ue, Yt, j) {
  constructor(e) {
    super(e), this.element = new se(), this.element.classes.push("json-schema-allOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (W(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = C(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
};
const AJ = EJ;
class PJ extends _(Ue, Yt, j) {
  constructor(e) {
    super(e), this.element = new se(), this.element.classes.push("json-schema-anyOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (W(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = C(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
}
const jJ = PJ;
class _J extends _(Ue, Yt, j) {
  constructor(e) {
    super(e), this.element = new se(), this.element.classes.push("json-schema-oneOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (W(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = C(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
}
const RJ = _J;
class TJ extends _(B, Yt, j) {
  constructor(e) {
    super(e), this.element = new R(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = N(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const IJ = TJ;
class CJ extends _(Ue, Yt, j) {
  constructor(e) {
    super(e), this.element = new se(), this.element.classes.push("json-schema-prefixItems"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (W(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = C(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Y;
  }
}
const FJ = CJ;
class MJ extends _(B, Yt, j) {
  constructor(e) {
    super(e), this.element = new R(), this.element.classes.push("json-schema-properties"), this.specPath = N(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const VJ = MJ;
class DJ extends _(B, Yt, j) {
  constructor(e) {
    super(e), this.element = new R(), this.element.classes.push("json-schema-patternProperties"), this.specPath = N(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const NJ = DJ;
class LJ extends j {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}
const kJ = LJ;
class UJ extends j {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
const BJ = UJ;
class qJ extends j {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
const HJ = qJ;
class GJ extends j {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
const zJ = GJ, {
  visitors: {
    document: {
      objects: {
        Discriminator: {
          $visitor: JJ
        }
      }
    }
  }
} = $;
class KJ extends JJ {
  constructor(e) {
    super(e), this.element = new Tp(), this.canSupportSpecificationExtensions = !0;
  }
}
const WJ = KJ, {
  visitors: {
    document: {
      objects: {
        XML: {
          $visitor: YJ
        }
      }
    }
  }
} = $;
class XJ extends YJ {
  constructor(e) {
    super(e), this.element = new Dp();
  }
}
const QJ = XJ;
class ZJ extends _(B, j) {
  constructor(e) {
    super(e), this.element = new mo(), this.specPath = N(["document", "objects", "Schema"]);
  }
}
const eK = ZJ;
class tK extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Hl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(Lr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const rK = tK, {
  visitors: {
    document: {
      objects: {
        Example: {
          $visitor: nK
        }
      }
    }
  }
} = $;
class sK extends nK {
  constructor(e) {
    super(e), this.element = new sc();
  }
}
const iK = sK, {
  visitors: {
    document: {
      objects: {
        ExternalDocumentation: {
          $visitor: oK
        }
      }
    }
  }
} = $;
class aK extends oK {
  constructor(e) {
    super(e), this.element = new ic();
  }
}
const cK = aK, {
  visitors: {
    document: {
      objects: {
        Encoding: {
          $visitor: uK
        }
      }
    }
  }
} = $;
class lK extends uK {
  constructor(e) {
    super(e), this.element = new Ip();
  }
}
const fK = lK, {
  visitors: {
    document: {
      objects: {
        Paths: {
          $visitor: pK
        }
      }
    }
  }
} = $;
class hK extends pK {
  constructor(e) {
    super(e), this.element = new pc();
  }
}
const dK = hK, {
  visitors: {
    document: {
      objects: {
        RequestBody: {
          $visitor: mK
        }
      }
    }
  }
} = $;
class yK extends mK {
  constructor(e) {
    super(e), this.element = new hc();
  }
}
const vK = yK, {
  visitors: {
    document: {
      objects: {
        Callback: {
          $visitor: Mm
        }
      }
    }
  }
} = $;
class gK extends Mm {
  constructor(e) {
    super(e), this.element = new tc(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Mm.prototype.ObjectElement.call(this, e);
    return this.element.filter(Lr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const bK = gK, {
  visitors: {
    document: {
      objects: {
        Response: {
          $visitor: $K
        }
      }
    }
  }
} = $;
class xK extends $K {
  constructor(e) {
    super(e), this.element = new dc();
  }
}
const SK = xK, {
  visitors: {
    document: {
      objects: {
        Responses: {
          $visitor: wK
        }
      }
    }
  }
} = $;
class OK extends wK {
  constructor(e) {
    super(e), this.element = new mc();
  }
}
const EK = OK, {
  visitors: {
    document: {
      objects: {
        Operation: {
          $visitor: AK
        }
      }
    }
  }
} = $;
class PK extends AK {
  constructor(e) {
    super(e), this.element = new si();
  }
}
const jK = PK, {
  visitors: {
    document: {
      objects: {
        PathItem: {
          $visitor: _K
        }
      }
    }
  }
} = $;
class RK extends _K {
  constructor(e) {
    super(e), this.element = new ir();
  }
}
const TK = RK, {
  visitors: {
    document: {
      objects: {
        SecurityScheme: {
          $visitor: IK
        }
      }
    }
  }
} = $;
class CK extends IK {
  constructor(e) {
    super(e), this.element = new vc();
  }
}
const FK = CK, {
  visitors: {
    document: {
      objects: {
        OAuthFlows: {
          $visitor: MK
        }
      }
    }
  }
} = $;
class VK extends MK {
  constructor(e) {
    super(e), this.element = new Fp();
  }
}
const DK = VK, {
  visitors: {
    document: {
      objects: {
        OAuthFlow: {
          $visitor: NK
        }
      }
    }
  }
} = $;
class LK extends NK {
  constructor(e) {
    super(e), this.element = new Cp();
  }
}
const kK = LK;
class UK extends _(B, j) {
  constructor(e) {
    super(e), this.element = new Gl(), this.specPath = (r) => ue(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(Lr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter(Pr).forEach((n, s) => {
      n.setMetaProperty("webhook-name", w(s));
    }), r;
  }
}
const BK = UK, qK = {
  visitors: {
    value: $.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: _8,
          fixedFields: {
            openapi: $.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: q8,
            servers: $.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: BK,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: $.visitors.document.objects.OpenApi.fixedFields.security,
            tags: $.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: I8,
          fixedFields: {
            title: $.visitors.document.objects.Info.fixedFields.title,
            description: $.visitors.document.objects.Info.fixedFields.description,
            summary: {
              $ref: "#/visitors/value"
            },
            termsOfService: $.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: $.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: M8,
          fixedFields: {
            name: $.visitors.document.objects.Contact.fixedFields.name,
            url: $.visitors.document.objects.Contact.fixedFields.url,
            email: $.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: N8,
          fixedFields: {
            name: $.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: $.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: z8,
          fixedFields: {
            url: $.visitors.document.objects.Server.fixedFields.url,
            description: $.visitors.document.objects.Server.fixedFields.description,
            variables: $.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: W8,
          fixedFields: {
            enum: $.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: $.visitors.document.objects.ServerVariable.fixedFields.default,
            description: $.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: sJ,
          fixedFields: {
            schemas: eK,
            responses: $.visitors.document.objects.Components.fixedFields.responses,
            parameters: $.visitors.document.objects.Components.fixedFields.parameters,
            examples: $.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: $.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: $.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: $.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: $.visitors.document.objects.Components.fixedFields.links,
            callbacks: $.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: rK
          }
        },
        Paths: {
          $visitor: dK
        },
        PathItem: {
          $visitor: TK,
          fixedFields: {
            $ref: $.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: $.visitors.document.objects.PathItem.fixedFields.summary,
            description: $.visitors.document.objects.PathItem.fixedFields.description,
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
            servers: $.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: $.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: jK,
          fixedFields: {
            tags: $.visitors.document.objects.Operation.fixedFields.tags,
            summary: $.visitors.document.objects.Operation.fixedFields.summary,
            description: $.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: $.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: $.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: $.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: $.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: $.visitors.document.objects.Operation.fixedFields.deprecated,
            security: $.visitors.document.objects.Operation.fixedFields.security,
            servers: $.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: cK,
          fixedFields: {
            description: $.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: $.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: hJ,
          fixedFields: {
            name: $.visitors.document.objects.Parameter.fixedFields.name,
            in: $.visitors.document.objects.Parameter.fixedFields.in,
            description: $.visitors.document.objects.Parameter.fixedFields.description,
            required: $.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: $.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: $.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: $.visitors.document.objects.Parameter.fixedFields.style,
            explode: $.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: $.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: $.visitors.document.objects.Parameter.fixedFields.example,
            examples: $.visitors.document.objects.Parameter.fixedFields.examples,
            content: $.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: vK,
          fixedFields: {
            description: $.visitors.document.objects.RequestBody.fixedFields.description,
            content: $.visitors.document.objects.RequestBody.fixedFields.content,
            required: $.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: Q8,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: $.visitors.document.objects.MediaType.fixedFields.example,
            examples: $.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: $.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: fK,
          fixedFields: {
            contentType: $.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: $.visitors.document.objects.Encoding.fixedFields.headers,
            style: $.visitors.document.objects.Encoding.fixedFields.style,
            explode: $.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: $.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: EK,
          fixedFields: {
            default: $.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: SK,
          fixedFields: {
            description: $.visitors.document.objects.Response.fixedFields.description,
            headers: $.visitors.document.objects.Response.fixedFields.headers,
            content: $.visitors.document.objects.Response.fixedFields.content,
            links: $.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: bK
        },
        Example: {
          $visitor: iK,
          fixedFields: {
            summary: $.visitors.document.objects.Example.fixedFields.summary,
            description: $.visitors.document.objects.Example.fixedFields.description,
            value: $.visitors.document.objects.Example.fixedFields.value,
            externalValue: $.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: U8,
          fixedFields: {
            operationRef: $.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: $.visitors.document.objects.Link.fixedFields.operationId,
            parameters: $.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: $.visitors.document.objects.Link.fixedFields.requestBody,
            description: $.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: yJ,
          fixedFields: {
            description: $.visitors.document.objects.Header.fixedFields.description,
            required: $.visitors.document.objects.Header.fixedFields.required,
            deprecated: $.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: $.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: $.visitors.document.objects.Header.fixedFields.style,
            explode: $.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: $.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: $.visitors.document.objects.Header.fixedFields.example,
            examples: $.visitors.document.objects.Header.fixedFields.examples,
            content: $.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: aJ,
          fixedFields: {
            name: $.visitors.document.objects.Tag.fixedFields.name,
            description: $.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: lJ,
          fixedFields: {
            $ref: $.visitors.document.objects.Reference.fixedFields.$ref,
            summary: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            }
          }
        },
        Schema: {
          $visitor: gJ,
          fixedFields: {
            // core vocabulary
            $schema: {
              $ref: "#/visitors/value"
            },
            $vocabulary: $J,
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
            $ref: SJ,
            $defs: OJ,
            $comment: {
              $ref: "#/visitors/value"
            },
            // applicator vocabulary
            allOf: AJ,
            anyOf: jJ,
            oneOf: RJ,
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
            dependentSchemas: IJ,
            prefixItems: FJ,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: VJ,
            patternProperties: NJ,
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
            type: kJ,
            enum: BJ,
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
            dependentRequired: HJ,
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
            examples: zJ,
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
          $visitor: WJ,
          fixedFields: {
            propertyName: $.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: $.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: QJ,
          fixedFields: {
            name: $.visitors.document.objects.XML.fixedFields.name,
            namespace: $.visitors.document.objects.XML.fixedFields.namespace,
            prefix: $.visitors.document.objects.XML.fixedFields.prefix,
            attribute: $.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: $.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: FK,
          fixedFields: {
            type: $.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: $.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: $.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: $.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: $.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: $.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: $.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: DK,
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
          $visitor: kK,
          fixedFields: {
            authorizationUrl: $.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: $.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: $.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: $.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: tJ
        }
      },
      extension: {
        $visitor: $.visitors.document.extension.$visitor
      }
    }
  }
}, HK = qK, GK = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = hp(t), s = Fa(HK), i = qe(e, s), o = new i({
    specObj: s
  });
  return De(n, o), Cn(o.element, r, {
    toolboxCreator: $$,
    visitorOptions: {
      keyMap: $t,
      nodeTypeGetter: ut
    }
  });
}, Q = (t) => (e, r = {}) => GK(e, {
  specPath: t,
  ...r
});
tc.refract = Q(["visitors", "document", "objects", "Callback", "$visitor"]);
rc.refract = Q(["visitors", "document", "objects", "Components", "$visitor"]);
nc.refract = Q(["visitors", "document", "objects", "Contact", "$visitor"]);
sc.refract = Q(["visitors", "document", "objects", "Example", "$visitor"]);
Tp.refract = Q(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Ip.refract = Q(["visitors", "document", "objects", "Encoding", "$visitor"]);
ic.refract = Q(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
oc.refract = Q(["visitors", "document", "objects", "Header", "$visitor"]);
ac.refract = Q(["visitors", "document", "objects", "Info", "$visitor"]);
Ar.refract = Q(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
cc.refract = Q(["visitors", "document", "objects", "License", "$visitor"]);
uc.refract = Q(["visitors", "document", "objects", "Link", "$visitor"]);
lc.refract = Q(["visitors", "document", "objects", "MediaType", "$visitor"]);
Cp.refract = Q(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Fp.refract = Q(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Mp.refract = Q(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
pr.refract = Q(["visitors", "document", "objects", "OpenApi", "$visitor"]);
si.refract = Q(["visitors", "document", "objects", "Operation", "$visitor"]);
fc.refract = Q(["visitors", "document", "objects", "Parameter", "$visitor"]);
ir.refract = Q(["visitors", "document", "objects", "PathItem", "$visitor"]);
pc.refract = Q(["visitors", "document", "objects", "Paths", "$visitor"]);
hr.refract = Q(["visitors", "document", "objects", "Reference", "$visitor"]);
hc.refract = Q(["visitors", "document", "objects", "RequestBody", "$visitor"]);
dc.refract = Q(["visitors", "document", "objects", "Response", "$visitor"]);
mc.refract = Q(["visitors", "document", "objects", "Responses", "$visitor"]);
Nr.refract = Q(["visitors", "document", "objects", "Schema", "$visitor"]);
yc.refract = Q(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
vc.refract = Q(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
gc.refract = Q(["visitors", "document", "objects", "Server", "$visitor"]);
bc.refract = Q(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Vp.refract = Q(["visitors", "document", "objects", "Tag", "$visitor"]);
Dp.refract = Q(["visitors", "document", "objects", "XML", "$visitor"]);
const zK = We(Fs, {
  props: {
    name: "binary"
  },
  methods: {
    async canParse(t) {
      return this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(t.extension);
    },
    async parse(t) {
      try {
        const e = unescape(encodeURIComponent(t.toString())), r = btoa(e), n = new lt();
        if (r.length !== 0) {
          const s = new Mt(r);
          s.classes.push("result"), n.push(s);
        }
        return n;
      } catch (e) {
        throw new Dt(`Error parsing "${t.uri}"`, {
          cause: e
        });
      }
    }
  }
}), JK = We(GU, {
  init() {
    this.name = "openapi-3-1";
  },
  methods: {
    canResolve(t, e) {
      const r = e.dereference.strategies.find((n) => n.name === "openapi-3-1");
      return r === void 0 ? !1 : r.canDereference(t, e);
    },
    async resolve(t, e) {
      const r = e.dereference.strategies.find((i) => i.name === "openapi-3-1");
      if (r === void 0)
        throw new Bb('"openapi-3-1" dereference strategy is not available.');
      const n = yn(), s = Uv(e, {
        resolve: {
          internal: !1
        },
        dereference: {
          refSet: n
        }
      });
      return await r.dereference(t, s), n;
    }
  }
}), x$ = (t) => {
  if (!W(t) || t.hasKey("$$normalized"))
    return t;
  const e = [t8({
    operationIdNormalizer: (n, s, i) => Ms({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), Yz(), Xz(), Qz(), r8(), n8()], r = Cn(t, e, {
    toolboxCreator: $$,
    visitorOptions: {
      keyMap: $t,
      nodeTypeGetter: ut
    }
  });
  return r.set("$$normalized", !0), r;
}, Yn = (t) => (e) => {
  if (e != null && e.$$normalized)
    return e;
  if (Yn.cache.has(e))
    return Yn.cache.get(e);
  const r = pr.refract(e), n = t(r), s = w(n);
  return Yn.cache.set(e, s), s;
};
Yn.cache = /* @__PURE__ */ new WeakMap();
const {
  AbortController: KK,
  AbortSignal: WK
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = KK);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = WK);
const S$ = qU.compose({
  props: {
    name: "http-swagger-client",
    swaggerHTTPClient: ms,
    swaggerHTTPClientConfig: {}
  },
  init({
    swaggerHTTPClient: t = this.swaggerHTTPClient
  } = {}) {
    this.swaggerHTTPClient = t;
  },
  methods: {
    getHttpClient() {
      return this.swaggerHTTPClient;
    },
    async read(t) {
      const e = this.getHttpClient(), r = new AbortController(), {
        signal: n
      } = r, s = setTimeout(() => {
        r.abort();
      }, this.timeout), i = this.getHttpClient().withCredentials || this.withCredentials ? "include" : "same-origin", o = this.redirects === 0 ? "error" : "follow", a = this.redirects > 0 ? this.redirects : void 0;
      try {
        return (await e({
          url: t.uri,
          signal: n,
          userFetch: async (u, p) => {
            let f = await fetch(u, p);
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
          credentials: i,
          redirect: o,
          follow: a,
          ...this.swaggerHTTPClientConfig
        })).text.arrayBuffer();
      } catch (c) {
        throw new qg(`Error downloading "${t.uri}"`, {
          cause: c
        });
      } finally {
        clearTimeout(s);
      }
    }
  }
}), w$ = Fs.compose({
  props: {
    name: "json-swagger-client",
    fileExtensions: [".json"],
    mediaTypes: ["application/json"]
  },
  methods: {
    async canParse(t) {
      const e = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(t.extension), r = this.mediaTypes.includes(t.mediaType);
      if (!e)
        return !1;
      if (r)
        return !0;
      if (!r)
        try {
          return JSON.parse(t.toString()), !0;
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(t) {
      if (this.sourceMap)
        throw new Dt("json-swagger-client parser plugin doesn't support sourceMaps option");
      const e = new lt(), r = t.toString();
      if (this.allowEmpty && r.trim() === "")
        return e;
      try {
        const n = Ub(JSON.parse(r));
        return n.classes.push("result"), e.push(n), e;
      } catch (n) {
        throw new Dt(`Error parsing "${t.uri}"`, {
          cause: n
        });
      }
    }
  }
}), O$ = Fs.compose({
  props: {
    name: "yaml-1-2-swagger-client",
    fileExtensions: [".yaml", ".yml"],
    mediaTypes: ["text/yaml", "application/yaml"]
  },
  methods: {
    async canParse(t) {
      const e = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(t.extension), r = this.mediaTypes.includes(t.mediaType);
      if (!e)
        return !1;
      if (r)
        return !0;
      if (!r)
        try {
          return ln.load(t.toString(), {
            schema: Ui
          }), !0;
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(t) {
      if (this.sourceMap)
        throw new Dt("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
      const e = new lt(), r = t.toString();
      try {
        const n = ln.load(r, {
          schema: Ui
        });
        if (this.allowEmpty && typeof n > "u")
          return e;
        const s = Ub(n);
        return s.classes.push("result"), e.push(s), e;
      } catch (n) {
        throw new Dt(`Error parsing "${t.uri}"`, {
          cause: n
        });
      }
    }
  }
}), E$ = Fs.compose({
  props: {
    name: "openapi-json-3-1-swagger-client",
    fileExtensions: [".json"],
    mediaTypes: new Pp(...gn.filterByFormat("generic"), ...gn.filterByFormat("json")),
    detectionRegExp: /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/
  },
  methods: {
    async canParse(t) {
      const e = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(t.extension), r = this.mediaTypes.includes(t.mediaType);
      if (!e)
        return !1;
      if (r)
        return !0;
      if (!r)
        try {
          const n = t.toString();
          return JSON.parse(n), this.detectionRegExp.test(n);
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(t) {
      if (this.sourceMap)
        throw new Dt("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
      const e = new lt(), r = t.toString();
      if (this.allowEmpty && r.trim() === "")
        return e;
      try {
        const n = JSON.parse(r), s = pr.refract(n, this.refractorOpts);
        return s.classes.push("result"), e.push(s), e;
      } catch (n) {
        throw new Dt(`Error parsing "${t.uri}"`, {
          cause: n
        });
      }
    }
  }
}), A$ = Fs.compose({
  props: {
    name: "openapi-yaml-3-1-swagger-client",
    fileExtensions: [".yaml", ".yml"],
    mediaTypes: new Pp(...gn.filterByFormat("generic"), ...gn.filterByFormat("yaml")),
    detectionRegExp: /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m
  },
  methods: {
    async canParse(t) {
      const e = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(t.extension), r = this.mediaTypes.includes(t.mediaType);
      if (!e)
        return !1;
      if (r)
        return !0;
      if (!r)
        try {
          const n = t.toString();
          return ln.load(n), this.detectionRegExp.test(n);
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(t) {
      if (this.sourceMap)
        throw new Dt("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
      const e = new lt(), r = t.toString();
      try {
        const n = ln.load(r, {
          schema: Ui
        });
        if (this.allowEmpty && typeof n > "u")
          return e;
        const s = pr.refract(n, this.refractorOpts);
        return s.classes.push("result"), e.push(s), e;
      } catch (n) {
        throw new Dt(`Error parsing "${t.uri}"`, {
          cause: n
        });
      }
    }
  }
}), $c = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), $n = (t) => {
  const e = Nf(t);
  return Ff("#", e);
}, YK = (t) => {
  if (!$c(t))
    throw new eB(t);
  return t;
}, kp = (t, e) => {
  const r = YK(t), n = Db((s) => Nt(s) && w(s.$anchor) === r, e);
  if (cr(n))
    throw new YU(`Evaluation failed on token: "${r}"`);
  return n;
}, P$ = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = Nf(w(e.$ref)), n = w(e.meta.get("inherited$id"));
  return `${_r((i, o) => Ae(i, Os(ne(o))), t, [...n, w(e.$ref)])}${r === "#" ? "" : r}`;
}, XK = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = w(e.meta.get("inherited$id"));
  return _r((n, s) => Ae(n, Os(ne(s))), t, [...r, w(e.$id)]);
}, Xn = (t) => {
  if (Xn.cache.has(t))
    return Xn.cache.get(t);
  const e = Nr.refract(t);
  return Xn.cache.set(t, e), e;
};
Xn.cache = /* @__PURE__ */ new WeakMap();
const Fe = (t) => Or(t) ? Xn(t) : t, xc = (t, e) => {
  const {
    cache: r
  } = xc, n = ne(t), s = (c) => Nt(c) && typeof c.$id < "u";
  if (!r.has(e)) {
    const c = OU(s, e);
    r.set(e, Array.from(c));
  }
  const i = r.get(e).find((c) => XK(n, c) === n);
  if (cr(i))
    throw new $p(`Evaluation failed on URI: "${t}"`);
  let o, a;
  return $c($n(t)) ? (o = kp, a = $n(t)) : (o = ct, a = Qe(t)), o(a, i);
};
xc.cache = /* @__PURE__ */ new WeakMap();
const yu = De[Symbol.for("nodejs.util.promisify.custom")], _e = gp(), sn = We({
  props: {
    indirections: null,
    namespace: null,
    reference: null,
    options: null,
    ancestors: null,
    refractCache: null
  },
  init({
    indirections: t = [],
    reference: e,
    namespace: r,
    options: n,
    ancestors: s = new hu(),
    refractCache: i = /* @__PURE__ */ new Map()
  }) {
    this.indirections = t, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new hu(...s), this.refractCache = i;
  },
  methods: {
    toBaseURI(t) {
      return Ae(this.reference.uri, Os(ne(t)));
    },
    async toReference(t) {
      if (this.reference.depth >= this.options.resolve.maxDepth)
        throw new nB(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
      const e = this.toBaseURI(t), {
        refSet: r
      } = this.reference;
      if (r.has(e))
        return r.find(Tf(e, "uri"));
      const n = await yF(ot(e), {
        ...this.options,
        parse: {
          ...this.options.parse,
          mediaType: "text/plain"
        }
      }), s = Ct({
        uri: e,
        value: C(n),
        depth: this.reference.depth + 1
      });
      if (r.add(s), this.options.dereference.immutable) {
        const i = Ct({
          uri: `immutable://${e}`,
          value: n,
          depth: this.reference.depth + 1
        });
        r.add(i);
      }
      return s;
    },
    toAncestorLineage(t) {
      const e = new Set(t.filter(Se));
      return [new hu(...this.ancestors, e), e];
    },
    async ReferenceElement(t, e, r, n, s) {
      if (this.indirections.includes(t))
        return !1;
      const [i, o] = this.toAncestorLineage([...s, r]), a = this.toBaseURI(w(t.$ref)), c = ne(this.reference.uri) === a, u = !c;
      if (!this.options.resolve.internal && c || !this.options.resolve.external && u)
        return !1;
      const p = await this.toReference(w(t.$ref)), f = Ae(a, w(t.$ref));
      this.indirections.push(t);
      const h = Qe(f);
      let l = ct(h, p.value.result);
      if (l.id = _e.identify(l), Or(l)) {
        const g = w(t.meta.get("referenced-element")), E = `${g}-${w(_e.identify(l))}`;
        this.refractCache.has(E) ? l = this.refractCache.get(E) : ue(l) ? (l = hr.refract(l), l.setMetaProperty("referenced-element", g), this.refractCache.set(E, l)) : (l = this.namespace.getElementClass(g).refract(l), this.refractCache.set(E, l));
      }
      if (t === l)
        throw new me("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (i.includes(l)) {
        if (p.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var d, m;
          const g = new It(l.id, {
            type: "reference",
            uri: p.uri,
            $ref: w(t.$ref)
          }), O = ((d = (m = this.options.dereference.strategyOpts["openapi-3-1"]) === null || m === void 0 ? void 0 : m.circularReplacer) !== null && d !== void 0 ? d : this.options.dereference.circularReplacer)(g);
          return he(r) ? r.value = O : Array.isArray(r) && (r[e] = O), r ? !1 : O;
        }
      }
      const y = ne(p.refSet.rootRef.uri) !== p.uri, v = ["error", "replace"].includes(this.options.dereference.circular);
      if ((u || y || Lr(l) || v) && !i.includesCycle(l)) {
        o.add(t);
        const g = sn({
          reference: p,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: i
        });
        l = await yu(l, g, {
          keyMap: $t,
          nodeTypeGetter: ut
        }), o.delete(t);
      }
      this.indirections.pop();
      const b = Le(l);
      return b.setMetaProperty("id", _e.generateId()), b.setMetaProperty("ref-fields", {
        $ref: w(t.$ref),
        // @ts-ignore
        description: w(t.description),
        // @ts-ignore
        summary: w(t.summary)
      }), b.setMetaProperty("ref-origin", p.uri), b.setMetaProperty("ref-referencing-element-id", C(_e.identify(t))), W(l) && W(b) && (t.hasKey("description") && "description" in l && (b.remove("description"), b.set("description", t.get("description"))), t.hasKey("summary") && "summary" in l && (b.remove("summary"), b.set("summary", t.get("summary")))), he(r) ? r.value = b : Array.isArray(r) && (r[e] = b), r ? !1 : b;
    },
    async PathItemElement(t, e, r, n, s) {
      if (!H(t.$ref))
        return;
      if (this.indirections.includes(t))
        return !1;
      const [i, o] = this.toAncestorLineage([...s, r]), a = this.toBaseURI(w(t.$ref)), c = ne(this.reference.uri) === a, u = !c;
      if (!this.options.resolve.internal && c || !this.options.resolve.external && u)
        return;
      const p = await this.toReference(w(t.$ref)), f = Ae(a, w(t.$ref));
      this.indirections.push(t);
      const h = Qe(f);
      let l = ct(h, p.value.result);
      if (l.id = _e.identify(l), Or(l)) {
        const b = `path-item-${w(_e.identify(l))}`;
        this.refractCache.has(b) ? l = this.refractCache.get(b) : (l = ir.refract(l), this.refractCache.set(b, l));
      }
      if (t === l)
        throw new me("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (i.includes(l)) {
        if (p.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var d, m;
          const b = new It(l.id, {
            type: "path-item",
            uri: p.uri,
            $ref: w(t.$ref)
          }), E = ((d = (m = this.options.dereference.strategyOpts["openapi-3-1"]) === null || m === void 0 ? void 0 : m.circularReplacer) !== null && d !== void 0 ? d : this.options.dereference.circularReplacer)(b);
          return he(r) ? r.value = E : Array.isArray(r) && (r[e] = E), r ? !1 : E;
        }
      }
      const y = ne(p.refSet.rootRef.uri) !== p.uri, v = ["error", "replace"].includes(this.options.dereference.circular);
      if ((u || y || Pr(l) && H(l.$ref) || v) && !i.includesCycle(l)) {
        o.add(t);
        const b = sn({
          reference: p,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: i
        });
        l = await yu(l, b, {
          keyMap: $t,
          nodeTypeGetter: ut
        }), o.delete(t);
      }
      if (this.indirections.pop(), Pr(l)) {
        const b = new ir([...l.content], C(l.meta), C(l.attributes));
        b.setMetaProperty("id", _e.generateId()), t.forEach((g, E, O) => {
          b.remove(w(E)), b.content.push(O);
        }), b.remove("$ref"), b.setMetaProperty("ref-fields", {
          $ref: w(t.$ref)
        }), b.setMetaProperty("ref-origin", p.uri), b.setMetaProperty("ref-referencing-element-id", C(_e.identify(t))), l = b;
      }
      return he(r) ? r.value = l : Array.isArray(r) && (r[e] = l), r ? void 0 : l;
    },
    async LinkElement(t, e, r) {
      if (!H(t.operationRef) && !H(t.operationId))
        return;
      if (H(t.operationRef) && H(t.operationId))
        throw new me("LinkElement operationRef and operationId fields are mutually exclusive.");
      let n;
      if (H(t.operationRef)) {
        var s;
        const o = Qe(w(t.operationRef)), a = this.toBaseURI(w(t.operationRef)), c = ne(this.reference.uri) === a, u = !c;
        if (!this.options.resolve.internal && c || !this.options.resolve.external && u)
          return;
        const p = await this.toReference(w(t.operationRef));
        if (n = ct(o, p.value.result), Or(n)) {
          const h = `operation-${w(_e.identify(n))}`;
          this.refractCache.has(h) ? n = this.refractCache.get(h) : (n = si.refract(n), this.refractCache.set(h, n));
        }
        n = Le(n), n.setMetaProperty("ref-origin", p.uri);
        const f = Le(t);
        return (s = f.operationRef) === null || s === void 0 || s.meta.set("operation", n), he(r) ? r.value = f : Array.isArray(r) && (r[e] = f), r ? void 0 : f;
      }
      if (H(t.operationId)) {
        var i;
        const o = w(t.operationId), a = await this.toReference(ot(this.reference.uri));
        if (n = Db((u) => b$(u) && Se(u.operationId) && u.operationId.equals(o), a.value.result), cr(n))
          throw new me(`OperationElement(operationId=${o}) not found.`);
        const c = Le(t);
        return (i = c.operationId) === null || i === void 0 || i.meta.set("operation", n), he(r) ? r.value = c : Array.isArray(r) && (r[e] = c), r ? void 0 : c;
      }
    },
    async ExampleElement(t, e, r) {
      if (!H(t.externalValue))
        return;
      if (t.hasKey("value") && H(t.externalValue))
        throw new me("ExampleElement value and externalValue fields are mutually exclusive.");
      const n = this.toBaseURI(w(t.externalValue)), s = ne(this.reference.uri) === n, i = !s;
      if (!this.options.resolve.internal && s || !this.options.resolve.external && i)
        return;
      const o = await this.toReference(w(t.externalValue)), a = Le(o.value.result);
      a.setMetaProperty("ref-origin", o.uri);
      const c = Le(t);
      return c.value = a, he(r) ? r.value = c : Array.isArray(r) && (r[e] = c), r ? void 0 : c;
    },
    async SchemaElement(t, e, r, n, s) {
      if (!H(t.$ref))
        return;
      if (this.indirections.includes(t))
        return !1;
      const [i, o] = this.toAncestorLineage([...s, r]);
      let a = await this.toReference(ot(this.reference.uri)), {
        uri: c
      } = a;
      const u = P$(c, t), p = ne(u), f = os({
        uri: p
      }), h = hP((O) => O.canRead(f), this.options.resolve.resolvers), l = !h;
      let d = ne(this.reference.uri) === u, m = !d;
      this.indirections.push(t);
      let y;
      try {
        if (h || l) {
          c = this.toBaseURI(u);
          const O = u, x = Fe(a.value.result);
          if (y = xc(O, x), y = Fe(y), y.id = _e.identify(y), !this.options.resolve.internal && d || !this.options.resolve.external && m)
            return;
        } else {
          if (c = this.toBaseURI(u), d = ne(this.reference.uri) === c, m = !d, !this.options.resolve.internal && d || !this.options.resolve.external && m)
            return;
          a = await this.toReference(ot(u));
          const O = Qe(u), x = Fe(a.value.result);
          y = ct(O, x), y = Fe(y), y.id = _e.identify(y);
        }
      } catch (O) {
        if (l && O instanceof $p)
          if ($c($n(u))) {
            if (d = ne(this.reference.uri) === c, m = !d, !this.options.resolve.internal && d || !this.options.resolve.external && m)
              return;
            a = await this.toReference(ot(u));
            const x = $n(u), T = Fe(a.value.result);
            y = kp(x, T), y = Fe(y), y.id = _e.identify(y);
          } else {
            if (c = this.toBaseURI(u), d = ne(this.reference.uri) === c, m = !d, !this.options.resolve.internal && d || !this.options.resolve.external && m)
              return;
            a = await this.toReference(ot(u));
            const x = Qe(u), T = Fe(a.value.result);
            y = ct(x, T), y = Fe(y), y.id = _e.identify(y);
          }
        else
          throw O;
      }
      if (t === y)
        throw new me("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (i.includes(y)) {
        if (a.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var v, b;
          const O = new It(y.id, {
            type: "json-schema",
            uri: a.uri,
            $ref: w(t.$ref)
          }), T = ((v = (b = this.options.dereference.strategyOpts["openapi-3-1"]) === null || b === void 0 ? void 0 : b.circularReplacer) !== null && v !== void 0 ? v : this.options.dereference.circularReplacer)(O);
          return he(r) ? r.value = T : Array.isArray(r) && (r[e] = T), r ? !1 : T;
        }
      }
      const g = ne(a.refSet.rootRef.uri) !== a.uri, E = ["error", "replace"].includes(this.options.dereference.circular);
      if ((m || g || Nt(y) && H(y.$ref) || E) && !i.includesCycle(y)) {
        o.add(t);
        const O = sn({
          reference: a,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: i
        });
        y = await yu(y, O, {
          keyMap: $t,
          nodeTypeGetter: ut
        }), o.delete(t);
      }
      if (this.indirections.pop(), Lp(y)) {
        const O = C(y);
        return O.setMetaProperty("id", _e.generateId()), O.setMetaProperty("ref-fields", {
          $ref: w(t.$ref)
        }), O.setMetaProperty("ref-origin", a.uri), O.setMetaProperty("ref-referencing-element-id", C(_e.identify(t))), he(r) ? r.value = O : Array.isArray(r) && (r[e] = O), r ? !1 : O;
      }
      if (Nt(y)) {
        const O = new Nr([...y.content], C(y.meta), C(y.attributes));
        O.setMetaProperty("id", _e.generateId()), t.forEach((x, T, M) => {
          O.remove(w(T)), O.content.push(M);
        }), O.remove("$ref"), O.setMetaProperty("ref-fields", {
          $ref: w(t.$ref)
        }), O.setMetaProperty("ref-origin", a.uri), O.setMetaProperty("ref-referencing-element-id", C(_e.identify(t))), y = O;
      }
      return he(r) ? r.value = y : Array.isArray(r) && (r[e] = y), r ? void 0 : y;
    }
  }
}), QK = De[Symbol.for("nodejs.util.promisify.custom")], ZK = We(JU, {
  init() {
    this.name = "openapi-3-1";
  },
  methods: {
    canDereference(t) {
      var e;
      return t.mediaType !== "text/plain" ? gn.includes(t.mediaType) : g$((e = t.parseResult) === null || e === void 0 ? void 0 : e.result);
    },
    async dereference(t, e) {
      var r;
      const n = Is(Np), s = (r = e.dereference.refSet) !== null && r !== void 0 ? r : yn(), i = yn();
      let o = s, a;
      s.has(t.uri) ? a = s.find(Tf(t.uri, "uri")) : (a = Ct({
        uri: t.uri,
        value: t.parseResult
      }), s.add(a)), e.dereference.immutable && (s.refs.map((p) => Ct({
        ...p,
        value: C(p.value)
      })).forEach((p) => i.add(p)), a = i.find((p) => p.uri === t.uri), o = i);
      const c = sn({
        reference: a,
        namespace: n,
        options: e
      }), u = await QK(o.rootRef.value, c, {
        keyMap: $t,
        nodeTypeGetter: ut
      });
      return e.dereference.immutable && (i.refs.filter((p) => p.uri.startsWith("immutable://")).map((p) => Ct({
        ...p,
        uri: p.uri.replace(/^immutable:\/\//, "")
      })).forEach((p) => s.add(p)), a = s.find((p) => p.uri === t.uri), o = s), e.dereference.refSet === null && s.clean(), i.clean(), u;
    }
  }
}), j$ = ZK, e6 = (t) => t.slice(2), it = (t) => {
  const e = e6(t);
  return e.reduce((r, n, s) => {
    if (he(n)) {
      const i = String(w(n.key));
      r.push(i);
    } else if (Ke(e[s - 2])) {
      const i = e[s - 2].content.indexOf(n);
      r.push(i);
    }
    return r;
  }, []);
}, gi = (t) => {
  if (t.cause == null)
    return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
}, t6 = xp("SchemaRefError", function(e, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), {
  wrapError: vu
} = Sp, gu = De[Symbol.for("nodejs.util.promisify.custom")], Xe = gp(), _i = sn.compose({
  props: {
    useCircularStructures: !0,
    allowMetaPatches: !1,
    basePath: null
  },
  init({
    allowMetaPatches: t = this.allowMetaPatches,
    useCircularStructures: e = this.useCircularStructures,
    basePath: r = this.basePath
  }) {
    this.allowMetaPatches = t, this.useCircularStructures = e, this.basePath = r;
  },
  methods: {
    async ReferenceElement(t, e, r, n, s) {
      try {
        if (this.indirections.includes(t))
          return !1;
        const [f, h] = this.toAncestorLineage([...s, r]), l = this.toBaseURI(w(t.$ref)), d = ne(this.reference.uri) === l, m = !d;
        if (!this.options.resolve.internal && d || !this.options.resolve.external && m)
          return !1;
        const y = await this.toReference(w(t.$ref)), v = Ae(l, w(t.$ref));
        this.indirections.push(t);
        const b = Qe(v);
        let g = ct(b, y.value.result);
        if (g.id = Xe.identify(g), Or(g)) {
          const T = w(t.meta.get("referenced-element")), M = `${T}-${w(Xe.identify(g))}`;
          this.refractCache.has(M) ? g = this.refractCache.get(M) : ue(g) ? (g = hr.refract(g), g.setMetaProperty("referenced-element", T), this.refractCache.set(M, g)) : (g = this.namespace.getElementClass(T).refract(g), this.refractCache.set(M, g));
        }
        if (t === g)
          throw new me("Recursive Reference Object detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        if (f.includes(g)) {
          if (y.refSet.circular = !0, this.options.dereference.circular === "error")
            throw new me("Circular reference detected");
          if (this.options.dereference.circular === "replace") {
            var i, o;
            const T = new It(g.id, {
              type: "reference",
              uri: y.uri,
              $ref: w(t.$ref),
              baseURI: v,
              referencingElement: t
            }), A = ((i = (o = this.options.dereference.strategyOpts["openapi-3-1"]) === null || o === void 0 ? void 0 : o.circularReplacer) !== null && i !== void 0 ? i : this.options.dereference.circularReplacer)(T);
            return he(r) ? r.value = A : Array.isArray(r) && (r[e] = A), r ? !1 : A;
          }
        }
        const E = ne(y.refSet.rootRef.uri) !== y.uri, O = ["error", "replace"].includes(this.options.dereference.circular);
        if ((m || E || Lr(g) || O) && !f.includesCycle(g)) {
          var a;
          h.add(t);
          const T = _i({
            reference: y,
            namespace: this.namespace,
            indirections: [...this.indirections],
            options: this.options,
            refractCache: this.refractCache,
            ancestors: f,
            allowMetaPatches: this.allowMetaPatches,
            useCircularStructures: this.useCircularStructures,
            basePath: (a = this.basePath) !== null && a !== void 0 ? a : [...it([...s, r, t]), "$ref"]
          });
          g = await gu(g, T, {
            keyMap: $t,
            nodeTypeGetter: ut
          }), h.delete(t);
        }
        this.indirections.pop();
        const x = Le(g);
        if (x.setMetaProperty("ref-fields", {
          $ref: w(t.$ref),
          description: w(t.description),
          summary: w(t.summary)
        }), x.setMetaProperty("ref-origin", y.uri), x.setMetaProperty("ref-referencing-element-id", C(Xe.identify(t))), W(g) && (t.hasKey("description") && "description" in g && (x.remove("description"), x.set("description", t.get("description"))), t.hasKey("summary") && "summary" in g && (x.remove("summary"), x.set("summary", t.get("summary")))), this.allowMetaPatches && W(x) && !x.hasKey("$$ref")) {
          const T = Ae(l, v);
          x.set("$$ref", T);
        }
        return he(r) ? r.value = x : Array.isArray(r) && (r[e] = x), r ? !1 : x;
      } catch (f) {
        var c, u, p;
        const h = gi(f), l = vu(h, {
          baseDoc: this.reference.uri,
          $ref: w(t.$ref),
          pointer: Qe(w(t.$ref)),
          fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...it([...s, r, t]), "$ref"]
        });
        (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (p = u.push) === null || p === void 0 || p.call(u, l);
        return;
      }
    },
    async PathItemElement(t, e, r, n, s) {
      try {
        if (!H(t.$ref))
          return;
        if (this.indirections.includes(t) || Ta(["cycle"], t.$ref))
          return !1;
        const [f, h] = this.toAncestorLineage([...s, r]), l = this.toBaseURI(w(t.$ref)), d = ne(this.reference.uri) === l, m = !d;
        if (!this.options.resolve.internal && d || !this.options.resolve.external && m)
          return;
        const y = await this.toReference(w(t.$ref)), v = Ae(l, w(t.$ref));
        this.indirections.push(t);
        const b = Qe(v);
        let g = ct(b, y.value.result);
        if (g.id = Xe.identify(g), Or(g)) {
          const x = `path-item-${w(Xe.identify(g))}`;
          this.refractCache.has(x) ? g = this.refractCache.get(x) : (g = ir.refract(g), this.refractCache.set(x, g));
        }
        if (t === g)
          throw new me("Recursive Path Item Object reference detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        if (f.includes(g)) {
          if (y.refSet.circular = !0, this.options.dereference.circular === "error")
            throw new me("Circular reference detected");
          if (this.options.dereference.circular === "replace") {
            var i, o;
            const x = new It(g.id, {
              type: "path-item",
              uri: y.uri,
              $ref: w(t.$ref),
              baseURI: v,
              referencingElement: t
            }), M = ((i = (o = this.options.dereference.strategyOpts["openapi-3-1"]) === null || o === void 0 ? void 0 : o.circularReplacer) !== null && i !== void 0 ? i : this.options.dereference.circularReplacer)(x);
            return he(r) ? r.value = M : Array.isArray(r) && (r[e] = M), r ? !1 : M;
          }
        }
        const E = ne(y.refSet.rootRef.uri) !== y.uri, O = ["error", "replace"].includes(this.options.dereference.circular);
        if ((m || E || Pr(g) && H(g.$ref) || O) && !f.includesCycle(g)) {
          var a;
          h.add(t);
          const x = _i({
            reference: y,
            namespace: this.namespace,
            indirections: [...this.indirections],
            options: this.options,
            ancestors: f,
            allowMetaPatches: this.allowMetaPatches,
            useCircularStructures: this.useCircularStructures,
            basePath: (a = this.basePath) !== null && a !== void 0 ? a : [...it([...s, r, t]), "$ref"]
          });
          g = await gu(g, x, {
            keyMap: $t,
            nodeTypeGetter: ut
          }), h.delete(t);
        }
        if (this.indirections.pop(), Pr(g)) {
          const x = new ir([...g.content], C(g.meta), C(g.attributes));
          if (t.forEach((T, M, A) => {
            x.remove(w(M)), x.content.push(A);
          }), x.remove("$ref"), x.setMetaProperty("ref-fields", {
            $ref: w(t.$ref)
          }), x.setMetaProperty("ref-origin", y.uri), x.setMetaProperty("ref-referencing-element-id", C(Xe.identify(t))), this.allowMetaPatches && typeof x.get("$$ref") > "u") {
            const T = Ae(l, v);
            x.set("$$ref", T);
          }
          g = x;
        }
        return he(r) ? r.value = g : Array.isArray(r) && (r[e] = g), r ? void 0 : g;
      } catch (f) {
        var c, u, p;
        const h = gi(f), l = vu(h, {
          baseDoc: this.reference.uri,
          $ref: w(t.$ref),
          pointer: Qe(w(t.$ref)),
          fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...it([...s, r, t]), "$ref"]
        });
        (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (p = u.push) === null || p === void 0 || p.call(u, l);
        return;
      }
    },
    async SchemaElement(t, e, r, n, s) {
      try {
        if (!H(t.$ref))
          return;
        if (this.indirections.includes(t))
          return !1;
        const [f, h] = this.toAncestorLineage([...s, r]);
        let l = await this.toReference(ot(this.reference.uri)), {
          uri: d
        } = l;
        const m = P$(d, t), y = ne(m), v = os({
          uri: y
        }), b = !this.options.resolve.resolvers.some((A) => A.canRead(v)), g = !b;
        let E = ne(this.reference.uri) === m, O = !E;
        this.indirections.push(t);
        let x;
        try {
          if (b || g) {
            d = this.toBaseURI(m);
            const A = m, k = Fe(l.value.result);
            if (x = xc(A, k), x = Fe(x), x.id = Xe.identify(x), !this.options.resolve.internal && E || !this.options.resolve.external && O)
              return;
          } else {
            if (d = this.toBaseURI(m), E = ne(this.reference.uri) === d, O = !E, !this.options.resolve.internal && E || !this.options.resolve.external && O)
              return;
            l = await this.toReference(ot(m));
            const A = Qe(m), k = Fe(l.value.result);
            x = ct(A, k), x = Fe(x), x.id = Xe.identify(x);
          }
        } catch (A) {
          if (g && A instanceof $p)
            if ($c($n(m))) {
              if (E = ne(this.reference.uri) === d, O = !E, !this.options.resolve.internal && E || !this.options.resolve.external && O)
                return;
              l = await this.toReference(ot(m));
              const k = $n(m), S = Fe(l.value.result);
              x = kp(k, S), x = Fe(x), x.id = Xe.identify(x);
            } else {
              if (d = this.toBaseURI(w(m)), E = ne(this.reference.uri) === d, O = !E, !this.options.resolve.internal && E || !this.options.resolve.external && O)
                return;
              l = await this.toReference(ot(m));
              const k = Qe(m), S = Fe(l.value.result);
              x = ct(k, S), x = Fe(x), x.id = Xe.identify(x);
            }
          else
            throw A;
        }
        if (t === x)
          throw new me("Recursive Schema Object reference detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        if (f.includes(x)) {
          if (l.refSet.circular = !0, this.options.dereference.circular === "error")
            throw new me("Circular reference detected");
          if (this.options.dereference.circular === "replace") {
            var i, o;
            const A = new It(x.id, {
              type: "json-schema",
              uri: l.uri,
              $ref: w(t.$ref),
              baseURI: Ae(d, m),
              referencingElement: t
            }), S = ((i = (o = this.options.dereference.strategyOpts["openapi-3-1"]) === null || o === void 0 ? void 0 : o.circularReplacer) !== null && i !== void 0 ? i : this.options.dereference.circularReplacer)(A);
            return he(r) ? r.value = S : Array.isArray(r) && (r[e] = S), r ? !1 : S;
          }
        }
        const T = ne(l.refSet.rootRef.uri) !== l.uri, M = ["error", "replace"].includes(this.options.dereference.circular);
        if ((O || T || Nt(x) && H(x.$ref) || M) && !f.includesCycle(x)) {
          var a;
          h.add(t);
          const A = _i({
            reference: l,
            namespace: this.namespace,
            indirections: [...this.indirections],
            options: this.options,
            useCircularStructures: this.useCircularStructures,
            allowMetaPatches: this.allowMetaPatches,
            ancestors: f,
            basePath: (a = this.basePath) !== null && a !== void 0 ? a : [...it([...s, r, t]), "$ref"]
          });
          x = await gu(x, A, {
            keyMap: $t,
            nodeTypeGetter: ut
          }), h.delete(t);
        }
        if (this.indirections.pop(), Lp(x)) {
          const A = C(x);
          return A.setMetaProperty("ref-fields", {
            $ref: w(t.$ref)
          }), A.setMetaProperty("ref-origin", l.uri), A.setMetaProperty("ref-referencing-element-id", C(Xe.identify(t))), he(r) ? r.value = A : Array.isArray(r) && (r[e] = A), r ? !1 : A;
        }
        if (Nt(x)) {
          const A = new Nr([...x.content], C(x.meta), C(x.attributes));
          if (t.forEach((k, S, I) => {
            A.remove(w(S)), A.content.push(I);
          }), A.remove("$ref"), A.setMetaProperty("ref-fields", {
            $ref: w(t.$ref)
          }), A.setMetaProperty("ref-origin", l.uri), A.setMetaProperty("ref-referencing-element-id", C(Xe.identify(t))), this.allowMetaPatches && typeof A.get("$$ref") > "u") {
            const k = Ae(d, m);
            A.set("$$ref", k);
          }
          x = A;
        }
        return he(r) ? r.value = x : Array.isArray(r) && (r[e] = x), r ? void 0 : x;
      } catch (f) {
        var c, u, p;
        const h = gi(f), l = new t6(`Could not resolve reference: ${h.message}`, {
          baseDoc: this.reference.uri,
          $ref: w(t.$ref),
          fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...it([...s, r, t]), "$ref"]
        }, h);
        (u = this.options.dereference.dereferenceOpts) === null || u === void 0 || (u = u.errors) === null || u === void 0 || (p = u.push) === null || p === void 0 || p.call(u, l);
        return;
      }
    },
    async LinkElement() {
    },
    async ExampleElement(t, e, r, n, s) {
      try {
        return await sn.compose.methods.ExampleElement.call(this, t, e, r, n, s);
      } catch (c) {
        var i, o, a;
        const u = gi(c), p = vu(u, {
          baseDoc: this.reference.uri,
          externalValue: w(t.externalValue),
          fullPath: (i = this.basePath) !== null && i !== void 0 ? i : [...it([...s, r, t]), "externalValue"]
        });
        (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, p);
        return;
      }
    }
  }
}), Up = j$.compose.bind(), r6 = Up({
  init({
    parameterMacro: t,
    options: e
  }) {
    this.parameterMacro = t, this.options = e;
  },
  props: {
    parameterMacro: null,
    options: null,
    macroOperation: null,
    OperationElement: {
      enter(t) {
        this.macroOperation = t;
      },
      leave() {
        this.macroOperation = null;
      }
    },
    ParameterElement: {
      leave(t, e, r, n, s) {
        const i = this.macroOperation === null ? null : w(this.macroOperation), o = w(t);
        try {
          const u = this.parameterMacro(i, o);
          t.set("default", u);
        } catch (u) {
          var a, c;
          const p = new Error(u, {
            cause: u
          });
          p.fullPath = it([...s, r]), (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, p);
        }
      }
    }
  }
}), n6 = Up({
  init({
    modelPropertyMacro: t,
    options: e
  }) {
    this.modelPropertyMacro = t, this.options = e;
  },
  props: {
    modelPropertyMacro: null,
    options: null,
    SchemaElement: {
      leave(t, e, r, n, s) {
        typeof t.properties > "u" || W(t.properties) && t.properties.forEach((i) => {
          if (W(i))
            try {
              const c = this.modelPropertyMacro(w(i));
              i.set("default", c);
            } catch (c) {
              var o, a;
              const u = new Error(c, {
                cause: c
              });
              u.fullPath = [...it([...s, r, t]), "properties"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, u);
            }
        });
      }
    }
  }
}), s6 = Up({
  init({
    options: t
  }) {
    this.options = t;
  },
  props: {
    options: null,
    SchemaElement: {
      leave(t, e, r, n, s) {
        if (typeof t.allOf > "u")
          return;
        if (!Ke(t.allOf)) {
          var i, o;
          const p = new TypeError("allOf must be an array");
          p.fullPath = [...it([...s, r, t]), "allOf"], (i = this.options.dereference.dereferenceOpts) === null || i === void 0 || (i = i.errors) === null || i === void 0 || (o = i.push) === null || o === void 0 || o.call(i, p);
          return;
        }
        if (t.allOf.isEmpty) {
          t.remove("allOf");
          return;
        }
        if (!t.allOf.content.every(Nt)) {
          var c, u;
          const p = new TypeError("Elements in allOf must be objects");
          p.fullPath = [...it([...s, r, t]), "allOf"], (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, p);
          return;
        }
        for (; t.hasKey("allOf"); ) {
          const {
            allOf: p
          } = t;
          t.remove("allOf");
          const f = xt.all([...p.content, t]);
          if (t.hasKey("$$ref") || f.remove("$$ref"), t.hasKey("example")) {
            const h = f.getMember("example");
            h && (h.value = t.get("example"));
          }
          if (t.hasKey("examples")) {
            const h = f.getMember("examples");
            h && (h.value = t.get("examples"));
          }
          t.content = f.content;
        }
      }
    }
  }
}), i6 = De[Symbol.for("nodejs.util.promisify.custom")], o6 = Ca[Symbol.for("nodejs.util.promisify.custom")], _$ = j$.compose({
  props: {
    allowMetaPatches: !1,
    parameterMacro: null,
    modelPropertyMacro: null,
    mode: "non-strict",
    ancestors: null
  },
  init({
    allowMetaPatches: t = this.allowMetaPatches,
    parameterMacro: e = this.parameterMacro,
    modelPropertyMacro: r = this.modelPropertyMacro,
    mode: n = this.mode,
    ancestors: s = []
  } = {}) {
    this.name = "openapi-3-1-swagger-client", this.allowMetaPatches = t, this.parameterMacro = e, this.modelPropertyMacro = r, this.mode = n, this.ancestors = [...s];
  },
  methods: {
    async dereference(t, e) {
      var r;
      const n = [], s = Is(Np), i = (r = e.dereference.refSet) !== null && r !== void 0 ? r : yn(), o = yn();
      let a = i, c;
      i.has(t.uri) ? c = i.find((h) => h.uri === t.uri) : (c = Ct({
        uri: t.uri,
        value: t.parseResult
      }), i.add(c)), e.dereference.immutable && (i.refs.map((h) => Ct({
        ...h,
        value: C(h.value)
      })).forEach((h) => o.add(h)), c = o.find((h) => h.uri === t.uri), a = o);
      const u = _i({
        reference: c,
        namespace: s,
        options: e,
        allowMetaPatches: this.allowMetaPatches,
        ancestors: this.ancestors
      });
      if (n.push(u), typeof this.parameterMacro == "function") {
        const h = r6({
          parameterMacro: this.parameterMacro,
          options: e
        });
        n.push(h);
      }
      if (typeof this.modelPropertyMacro == "function") {
        const h = n6({
          modelPropertyMacro: this.modelPropertyMacro,
          options: e
        });
        n.push(h);
      }
      if (this.mode !== "strict") {
        const h = s6({
          options: e
        });
        n.push(h);
      }
      const p = o6(n, {
        nodeTypeGetter: ut
      }), f = await i6(a.rootRef.value, p, {
        keyMap: $t,
        nodeTypeGetter: ut
      });
      return e.dereference.immutable && (o.refs.filter((h) => h.uri.startsWith("immutable://")).map((h) => Ct({
        ...h,
        uri: h.uri.replace(/^immutable:\/\//, "")
      })).forEach((h) => i.add(h)), c = i.find((h) => h.uri === t.uri), a = i), e.dereference.refSet === null && i.clean(), o.clean(), f;
    }
  }
}), a6 = (t) => {
  const e = w(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
  return new R({
    $ref: e
  }, C(r.meta), C(r.attributes));
}, Bp = async (t) => {
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
    parameterMacro: p = null,
    modelPropertyMacro: f = null,
    mode: h = "non-strict"
  } = t;
  try {
    const {
      cache: l
    } = Bp, d = ma(Xi()) ? Xi() : Ti, m = ff(t), y = Ae(d, m);
    let v;
    l.has(e) ? v = l.get(e) : (v = pr.refract(e), v.classes.push("result"), l.set(e, v));
    const b = new lt([v]), g = s3(o), E = g === "" ? "" : `#${g}`, O = ct(g, v), x = Ct({
      uri: y,
      value: b
    }), T = yn({
      refs: [x]
    });
    g !== "" && (T.rootRef = null);
    const M = [/* @__PURE__ */ new Set([O])], A = [], k = await iB(O, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${y}${E}`,
        resolvers: [S$({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [JK()]
      },
      parse: {
        mediaType: gn.latest(),
        parsers: [E$({
          allowEmpty: !1,
          sourceMap: !1
        }), A$({
          allowEmpty: !1,
          sourceMap: !1
        }), w$({
          allowEmpty: !1,
          sourceMap: !1
        }), O$({
          allowEmpty: !1,
          sourceMap: !1
        }), zK({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [_$({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: p,
          modelPropertyMacro: f,
          mode: h,
          ancestors: M
        })],
        refSet: T,
        dereferenceOpts: {
          errors: A
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? kv.dereference.circularReplacer : a6
      }
    }), S = IU(O, k, v), I = u ? S : x$(S);
    return {
      spec: w(I),
      errors: A
    };
  } catch (l) {
    if (l instanceof dl || l instanceof Hn)
      return {
        spec: null,
        errors: []
      };
    throw l;
  }
};
Bp.cache = /* @__PURE__ */ new WeakMap();
const c6 = {
  name: "openapi-3-1-apidom",
  match({
    spec: t
  }) {
    return i$(t);
  },
  normalize({
    spec: t
  }) {
    return Yn(x$)(t);
  },
  async resolve(t) {
    return Bp(t);
  }
};
function R$(t, e, r) {
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
function u6(t, e) {
  return R$(t, e, !0) || null;
}
function T$(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function l6(t, e) {
  return !t || !t.paths ? null : u6(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = Ms(s, r, n), a = T$(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: f6
} = I1, p6 = () => null, h6 = (t) => Array.isArray(t) ? t : [t], Vm = {
  mapTagOperations: y6,
  makeExecute: d6
};
function d6(t = {}) {
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
function m6(t = {}) {
  const e = Vm.makeExecute(t);
  return {
    apis: Vm.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function y6({
  spec: t,
  cb: e = p6,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return R$(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? h6(c.tags) : [r]).forEach((p) => {
      if (typeof p != "string")
        return;
      i[p] = i[p] || {};
      const f = i[p], h = Ms(c, o, a, {
        v2OperationIdCompatibilityMode: n
      }), l = e({
        spec: t,
        pathName: o,
        method: a,
        operation: c,
        operationId: h
      });
      if (s[h])
        s[h] += 1, f[`${h}${s[h]}`] = l;
      else if (typeof f[h] < "u") {
        const d = s[h] || 1;
        s[h] = d + 1, f[`${h}${s[h]}`] = l;
        const m = f[h];
        delete f[h], f[`${h}${d}`] = m;
      } else
        f[h] = l;
    });
  }), i;
}
var qp = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
qp.parse = g6;
qp.serialize = b6;
var v6 = Object.prototype.toString, bi = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function g6(t, e) {
  if (typeof t != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, n = e || {}, s = n.decode || $6, i = 0; i < t.length; ) {
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
      var u = t.slice(o + 1, a).trim();
      u.charCodeAt(0) === 34 && (u = u.slice(1, -1)), r[c] = w6(u, s);
    }
    i = a + 1;
  }
  return r;
}
function b6(t, e, r) {
  var n = r || {}, s = n.encode || x6;
  if (typeof s != "function")
    throw new TypeError("option encode is invalid");
  if (!bi.test(t))
    throw new TypeError("argument name is invalid");
  var i = s(e);
  if (i && !bi.test(i))
    throw new TypeError("argument val is invalid");
  var o = t + "=" + i;
  if (n.maxAge != null) {
    var a = n.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!bi.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!bi.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    var c = n.expires;
    if (!S6(c) || isNaN(c.valueOf()))
      throw new TypeError("option expires is invalid");
    o += "; Expires=" + c.toUTCString();
  }
  if (n.httpOnly && (o += "; HttpOnly"), n.secure && (o += "; Secure"), n.partitioned && (o += "; Partitioned"), n.priority) {
    var u = typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority;
    switch (u) {
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
function $6(t) {
  return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
}
function x6(t) {
  return encodeURIComponent(t);
}
function S6(t) {
  return v6.call(t) === "[object Date]" || t instanceof Date;
}
function w6(t, e) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Dm(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function I$(t) {
  var e, r;
  return Dm(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (r = e.prototype, !(Dm(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
const O6 = {
  body: E6,
  header: P6,
  query: _6,
  path: j6,
  formData: A6
};
function E6({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function A6({
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
function P6({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function j6({
  req: t,
  value: e,
  parameter: r
}) {
  e !== void 0 && (t.url = t.url.replace(new RegExp(`{${r.name}}`, "g"), encodeURIComponent(e)));
}
function _6({
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
function Sc(t, e) {
  return e.includes("application/json") ? typeof t == "string" ? t : (Array.isArray(t) && (t = t.map((r) => {
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  })), JSON.stringify(t)) : String(t);
}
function R6({
  req: t,
  value: e,
  parameter: r
}) {
  const {
    name: n,
    style: s,
    explode: i,
    content: o
  } = r;
  if (e !== void 0)
    if (o) {
      const a = Object.keys(o)[0];
      t.url = t.url.split(`{${n}}`).join(Jy(Sc(e, a)));
    } else {
      const a = uf({
        key: r.name,
        value: e,
        style: s || "simple",
        explode: i || !1,
        escape: "reserved"
      });
      t.url = t.url.replace(new RegExp(`{${n}}`, "g"), a);
    }
}
function T6({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const n = Object.keys(r.content)[0], s = Sc(e, n);
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
const I6 = ["accept", "authorization", "content-type"];
function C6({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(I6.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = Sc(r, n);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = uf({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function F6({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {};
  const n = typeof r;
  if (r !== void 0 && e.content) {
    const s = Object.keys(e.content)[0];
    t.headers.Cookie = `${e.name}=${Sc(r, s)}`;
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    const s = n === "object" && !Array.isArray(r) && e.explode ? "" : `${e.name}=`;
    t.headers.Cookie = s + uf({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: typeof e.explode > "u" ? !1 : e.explode
    });
  }
}
const M6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: F6,
  header: C6,
  path: R6,
  query: T6
}, Symbol.toStringTag, { value: "Module" })), V6 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: C$
} = V6;
function D6(t, e) {
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
  e = N6({
    request: e,
    securities: s,
    operation: r,
    spec: i
  });
  const c = r.requestBody || {}, u = Object.keys(c.content || {}), p = a && u.indexOf(a) > -1;
  if (n || o) {
    if (a && p)
      e.headers["Content-Type"] = a;
    else if (!a) {
      const l = u[0];
      l && (e.headers["Content-Type"] = l, a = l);
    }
  } else
    a && p && (e.headers["Content-Type"] = a);
  if (!t.responseContentType && r.responses) {
    const l = Object.entries(r.responses).filter(([d, m]) => {
      const y = parseInt(d, 10);
      return y >= 200 && y < 300 && I$(m.content);
    }).reduce((d, [, m]) => d.concat(Object.keys(m.content)), []);
    l.length > 0 && (e.headers.accept = l.join(", "));
  }
  if (n)
    if (a) {
      if (u.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof n == "object") {
            var f, h;
            const l = (f = (h = c.content[a]) === null || h === void 0 ? void 0 : h.encoding) !== null && f !== void 0 ? f : {};
            e.form = {}, Object.keys(n).forEach((d) => {
              e.form[d] = {
                value: n[d],
                encoding: l[d] || {}
              };
            });
          } else
            e.form = n;
        else
          e.body = n;
    } else
      e.body = n;
  return e;
}
function N6({
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
  return i.headers = i.headers || {}, i.query = i.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((p) => {
    Object.keys(p).forEach((f) => {
      const h = o[f], l = u[f];
      if (!h)
        return;
      const d = h.value || h, {
        type: m
      } = l;
      if (h) {
        if (m === "apiKey")
          l.in === "query" && (i.query[l.name] = d), l.in === "header" && (i.headers[l.name] = d), l.in === "cookie" && (i.cookies[l.name] = d);
        else if (m === "http") {
          if (/^basic$/i.test(l.scheme)) {
            const y = d.username || "", v = d.password || "", b = C$(`${y}:${v}`);
            i.headers.Authorization = `Basic ${b}`;
          }
          /^bearer$/i.test(l.scheme) && (i.headers.Authorization = `Bearer ${d}`);
        } else if (m === "oauth2" || m === "openIdConnect") {
          const y = h.token || {}, v = l["x-tokenName"] || "access_token", b = y[v];
          let g = y.token_type;
          (!g || g.toLowerCase() === "bearer") && (g = "Bearer"), i.headers.Authorization = `${g} ${b}`;
        }
      }
    });
  }), i);
}
function L6(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = k6({
    request: e,
    securities: s,
    operation: n,
    spec: r
  }), e.body || e.form || a)
    i ? e.headers["Content-Type"] = i : Array.isArray(n.consumes) ? [e.headers["Content-Type"]] = n.consumes : Array.isArray(r.consumes) ? [e.headers["Content-Type"]] = r.consumes : n.parameters && n.parameters.filter((c) => c.type === "file").length ? e.headers["Content-Type"] = "multipart/form-data" : n.parameters && n.parameters.filter((c) => c.in === "formData").length && (e.headers["Content-Type"] = "application/x-www-form-urlencoded");
  else if (i) {
    const c = n.parameters && n.parameters.filter((p) => p.in === "body").length > 0, u = n.parameters && n.parameters.filter((p) => p.in === "formData").length > 0;
    (c || u) && (e.headers["Content-Type"] = i);
  }
  return !o && Array.isArray(n.produces) && n.produces.length > 0 && (e.headers.accept = n.produces.join(", ")), e;
}
function k6({
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
  return s.headers = s.headers || {}, s.query = s.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((p) => {
    Object.keys(p).forEach((f) => {
      const h = i[f];
      if (!h)
        return;
      const {
        token: l
      } = h, d = h.value || h, m = u[f], {
        type: y
      } = m, v = m["x-tokenName"] || "access_token", b = l && l[v];
      let g = l && l.token_type;
      if (h)
        if (y === "apiKey") {
          const E = m.in === "query" ? "query" : "headers";
          s[E] = s[E] || {}, s[E][m.name] = d;
        } else if (y === "basic")
          if (d.header)
            s.headers.authorization = d.header;
          else {
            const E = d.username || "", O = d.password || "";
            d.base64 = C$(`${E}:${O}`), s.headers.authorization = `Basic ${d.base64}`;
          }
        else
          y === "oauth2" && b && (g = !g || g.toLowerCase() === "bearer" ? "Bearer" : g, s.headers.authorization = `${g} ${b}`);
    });
  }), s);
}
const Nm = (t) => Array.isArray(t) ? t : [], Ri = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, Ti), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
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
}, U6 = xp("OperationNotFoundError", function(e, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), B6 = (t, e) => e.filter((r) => r.name === t), q6 = (t) => {
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
}, H6 = {
  buildRequest: F$
};
function G6({
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
  const u = t || e || ms;
  s && i && !n && (n = T$(s, i));
  const p = H6.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: u,
    ...c
  });
  return p.body && (I$(p.body) || Array.isArray(p.body)) && (p.body = JSON.stringify(p.body)), u(p);
}
function F$(t) {
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
    serverVariables: p,
    http: f,
    signal: h
  } = t;
  let {
    parameters: l,
    parameterBuilders: d
  } = t;
  const m = Ep(e);
  d || (m ? d = M6 : d = O6);
  let v = {
    url: "",
    credentials: f && f.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  h && (v.signal = h), i && (v.requestInterceptor = i), o && (v.responseInterceptor = o), c && (v.userFetch = c);
  const b = l6(e, r);
  if (!b)
    throw new U6(`Operation ${r} not found`);
  const {
    operation: g = {},
    method: E,
    pathName: O
  } = b;
  if (v.url += M$({
    spec: e,
    scheme: s,
    contextUrl: a,
    server: u,
    serverVariables: p,
    pathName: O,
    method: E
  }), !r)
    return delete v.cookies, v;
  v.url += O, v.method = `${E}`.toUpperCase(), l = l || {};
  const x = e.paths[O] || {};
  n && (v.headers.accept = n);
  const T = q6([].concat(Nm(g.parameters)).concat(Nm(x.parameters)));
  T.forEach((A) => {
    const k = d[A.in];
    let S;
    if (A.in === "body" && A.schema && A.schema.properties && (S = l), S = A && A.name && l[A.name], typeof S > "u" ? S = A && A.name && l[`${A.in}.${A.name}`] : B6(A.name, T).length > 1 && console.warn(`Parameter '${A.name}' is ambiguous because the defined spec has more than one parameter with the name: '${A.name}' and the passed-in parameter values did not define an 'in' value.`), S !== null) {
      if (typeof A.default < "u" && typeof S > "u" && (S = A.default), typeof S > "u" && A.required && !A.allowEmptyValue)
        throw new Error(`Required parameter ${A.name} is not provided`);
      if (m && A.schema && A.schema.type === "object" && typeof S == "string")
        try {
          S = JSON.parse(S);
        } catch {
          throw new Error("Could not parse object parameter value string as JSON");
        }
      k && k({
        req: v,
        parameter: A,
        value: S,
        operation: g,
        spec: e
      });
    }
  });
  const M = {
    ...t,
    operation: g
  };
  if (m ? v = D6(M, v) : v = L6(M, v), v.cookies && Object.keys(v.cookies).length) {
    const A = Object.keys(v.cookies).reduce((k, S) => {
      const I = v.cookies[S], D = k ? "&" : "", z = qp.serialize(S, I);
      return k + D + z;
    }, "");
    v.headers.Cookie = A;
  }
  return v.cookies && delete v.cookies, Qy(v), v;
}
const Kl = (t) => t ? t.replace(/\W/g, "") : null;
function M$(t) {
  return Ep(t.spec) ? z6(t) : W6(t);
}
const bu = (t) => Array.isArray(t) && t.length > 0;
function z6({
  spec: t,
  pathName: e,
  method: r,
  server: n,
  contextUrl: s,
  serverVariables: i = {}
}) {
  var o, a;
  let c = [], u = "", p;
  const f = t == null || (o = t.paths) === null || o === void 0 || (o = o[e]) === null || o === void 0 || (o = o[(r || "").toLowerCase()]) === null || o === void 0 ? void 0 : o.servers, h = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 ? void 0 : a.servers, l = t == null ? void 0 : t.servers;
  return c = bu(f) ? f : bu(h) ? h : bu(l) ? l : [km], n && (p = c.find((d) => d.url === n), p && (u = n)), u || ([p] = c, u = p.url), u.includes("{") && K6(u).forEach((m) => {
    if (p.variables && p.variables[m]) {
      const y = p.variables[m], v = i[m] || y.default, b = new RegExp(`{${m}}`, "g");
      u = u.replace(b, v);
    }
  }), J6(u, s);
}
function J6(t = "", e = "") {
  const r = Ri(t && e ? Ae(e, t) : t), n = Ri(e), s = Kl(r.protocol) || Kl(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function K6(t) {
  const e = [], r = /{([^}]+)}/g;
  let n;
  for (; n = r.exec(t); )
    e.push(n[1]);
  return e;
}
function W6({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = Ri(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || Kl(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return i && o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
te.http = ms;
te.makeHttp = kE.bind(null, te.http);
te.resolveStrategies = {
  "openapi-3-1-apidom": c6,
  "openapi-3-0": a$,
  "openapi-2-0": o$,
  generic: r$
};
te.resolve = c$({
  strategies: [te.resolveStrategies["openapi-3-1-apidom"], te.resolveStrategies["openapi-3-0"], te.resolveStrategies["openapi-2-0"], te.resolveStrategies.generic]
});
te.resolveSubtree = GB({
  strategies: [te.resolveStrategies["openapi-3-1-apidom"], te.resolveStrategies["openapi-3-0"], te.resolveStrategies["openapi-2-0"], te.resolveStrategies.generic]
});
te.execute = G6;
te.serializeRes = Ky;
te.serializeHeaders = Wy;
te.clearCache = LB;
te.makeApisTagOperation = m6;
te.buildRequest = F$;
te.helpers = {
  opId: Ms
};
te.getBaseUrl = M$;
te.apidom = {
  resolve: {
    resolvers: {
      HttpResolverSwaggerClient: S$
    }
  },
  parse: {
    parsers: {
      JsonParser: w$,
      YamlParser: O$,
      OpenApiJson3_1Parser: E$,
      OpenApiYaml3_1Parser: A$
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: _$
    }
  }
};
function te(t, e = {}) {
  if (typeof t == "string" ? e.url = t : e = t, !(this instanceof te))
    return new te(e);
  Object.assign(this, e);
  const r = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, te.makeApisTagOperation(this)), this));
  return r.client = this, r;
}
te.prototype = {
  http: ms,
  execute(t) {
    return this.applyDefaults(), te.execute({
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
    return te.resolve({
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
te.prototype.applyDefaults = function() {
  const {
    spec: e
  } = this, r = this.url;
  if (n$(e) && f6(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (Ep(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [km]);
  }
};
export {
  te as S,
  Nx as r
};
