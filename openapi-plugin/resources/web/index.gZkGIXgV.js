var Ux = Object.defineProperty;
var Hx = (t, e, r) => e in t ? Ux(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var x = (t, e, r) => (Hx(t, typeof e != "symbol" ? e + "" : e, r), r), Jp = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var Ec = (t, e, r) => (Jp(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Kp = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Oc = (t, e, r, n) => (Jp(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import { y as qx, v as Tt, o as wn } from "./TriangleExclamation.C66B3qS3.js";
const Hm = "application/json, application/yaml", Fi = "https://swagger.io", qm = Object.freeze({
  url: "/"
}), {
  fetch: Gx,
  Response: zx,
  Headers: Jx,
  Request: Kx,
  FormData: Wx,
  File: Yx,
  Blob: Xx
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = Gx);
typeof globalThis.Headers > "u" && (globalThis.Headers = Jx);
typeof globalThis.Request > "u" && (globalThis.Request = Kx);
typeof globalThis.Response > "u" && (globalThis.Response = zx);
typeof globalThis.FormData > "u" && (globalThis.FormData = Wx);
typeof globalThis.File > "u" && (globalThis.File = Yx);
typeof globalThis.Blob > "u" && (globalThis.Blob = Xx);
var Qx = Error, Zx = EvalError, e$ = RangeError, t$ = ReferenceError, Gm = SyntaxError, bs = TypeError, r$ = URIError, n$ = function() {
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
}, Wp = typeof Symbol < "u" && Symbol, s$ = n$, i$ = function() {
  return typeof Wp != "function" || typeof Symbol != "function" || typeof Wp("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : s$();
}, Ac = {
  __proto__: null,
  foo: {}
}, o$ = Object, a$ = function() {
  return { __proto__: Ac }.foo === Ac.foo && !(Ac instanceof o$);
}, c$ = "Function.prototype.bind called on incompatible ", l$ = Object.prototype.toString, u$ = Math.max, f$ = "[object Function]", Yp = function(e, r) {
  for (var n = [], s = 0; s < e.length; s += 1)
    n[s] = e[s];
  for (var i = 0; i < r.length; i += 1)
    n[i + e.length] = r[i];
  return n;
}, p$ = function(e, r) {
  for (var n = [], s = r || 0, i = 0; s < e.length; s += 1, i += 1)
    n[i] = e[s];
  return n;
}, h$ = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, d$ = function(e) {
  var r = this;
  if (typeof r != "function" || l$.apply(r) !== f$)
    throw new TypeError(c$ + r);
  for (var n = p$(arguments, 1), s, i = function() {
    if (this instanceof s) {
      var f = r.apply(
        this,
        Yp(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      e,
      Yp(n, arguments)
    );
  }, o = u$(0, r.length - n.length), a = [], c = 0; c < o; c++)
    a[c] = "$" + c;
  if (s = Function("binder", "return function (" + h$(a, ",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var l = function() {
    };
    l.prototype = r.prototype, s.prototype = new l(), l.prototype = null;
  }
  return s;
}, m$ = d$, ef = Function.prototype.bind || m$, y$ = Function.prototype.call, v$ = Object.prototype.hasOwnProperty, g$ = ef, b$ = g$.call(y$, v$), X, x$ = Qx, $$ = Zx, S$ = e$, w$ = t$, on = Gm, en = bs, E$ = r$, zm = Function, Pc = function(t) {
  try {
    return zm('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, $r = Object.getOwnPropertyDescriptor;
if ($r)
  try {
    $r({}, "");
  } catch {
    $r = null;
  }
var jc = function() {
  throw new en();
}, O$ = $r ? function() {
  try {
    return arguments.callee, jc;
  } catch {
    try {
      return $r(arguments, "callee").get;
    } catch {
      return jc;
    }
  }
}() : jc, Br = i$(), A$ = a$(), Ae = Object.getPrototypeOf || (A$ ? function(t) {
  return t.__proto__;
} : null), Kr = {}, P$ = typeof Uint8Array > "u" || !Ae ? X : Ae(Uint8Array), Sr = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? X : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? X : ArrayBuffer,
  "%ArrayIteratorPrototype%": Br && Ae ? Ae([][Symbol.iterator]()) : X,
  "%AsyncFromSyncIteratorPrototype%": X,
  "%AsyncFunction%": Kr,
  "%AsyncGenerator%": Kr,
  "%AsyncGeneratorFunction%": Kr,
  "%AsyncIteratorPrototype%": Kr,
  "%Atomics%": typeof Atomics > "u" ? X : Atomics,
  "%BigInt%": typeof BigInt > "u" ? X : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? X : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? X : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? X : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": x$,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": $$,
  "%Float32Array%": typeof Float32Array > "u" ? X : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? X : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? X : FinalizationRegistry,
  "%Function%": zm,
  "%GeneratorFunction%": Kr,
  "%Int8Array%": typeof Int8Array > "u" ? X : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? X : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? X : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Br && Ae ? Ae(Ae([][Symbol.iterator]())) : X,
  "%JSON%": typeof JSON == "object" ? JSON : X,
  "%Map%": typeof Map > "u" ? X : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Br || !Ae ? X : Ae((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? X : Promise,
  "%Proxy%": typeof Proxy > "u" ? X : Proxy,
  "%RangeError%": S$,
  "%ReferenceError%": w$,
  "%Reflect%": typeof Reflect > "u" ? X : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? X : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Br || !Ae ? X : Ae((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? X : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Br && Ae ? Ae(""[Symbol.iterator]()) : X,
  "%Symbol%": Br ? Symbol : X,
  "%SyntaxError%": on,
  "%ThrowTypeError%": O$,
  "%TypedArray%": P$,
  "%TypeError%": en,
  "%Uint8Array%": typeof Uint8Array > "u" ? X : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? X : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? X : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? X : Uint32Array,
  "%URIError%": E$,
  "%WeakMap%": typeof WeakMap > "u" ? X : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? X : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? X : WeakSet
};
if (Ae)
  try {
    null.error;
  } catch (t) {
    var j$ = Ae(Ae(t));
    Sr["%Error.prototype%"] = j$;
  }
var T$ = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Pc("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Pc("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Pc("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var s = t("%AsyncGenerator%");
    s && Ae && (r = Ae(s.prototype));
  }
  return Sr[e] = r, r;
}, Xp = {
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
}, xs = ef, Mi = b$, _$ = xs.call(Function.call, Array.prototype.concat), R$ = xs.call(Function.apply, Array.prototype.splice), Qp = xs.call(Function.call, String.prototype.replace), Di = xs.call(Function.call, String.prototype.slice), C$ = xs.call(Function.call, RegExp.prototype.exec), I$ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, F$ = /\\(\\)?/g, M$ = function(e) {
  var r = Di(e, 0, 1), n = Di(e, -1);
  if (r === "%" && n !== "%")
    throw new on("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new on("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return Qp(e, I$, function(i, o, a, c) {
    s[s.length] = a ? Qp(c, F$, "$1") : o || i;
  }), s;
}, D$ = function(e, r) {
  var n = e, s;
  if (Mi(Xp, n) && (s = Xp[n], n = "%" + s[0] + "%"), Mi(Sr, n)) {
    var i = Sr[n];
    if (i === Kr && (i = T$(n)), typeof i > "u" && !r)
      throw new en("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: s,
      name: n,
      value: i
    };
  }
  throw new on("intrinsic " + e + " does not exist!");
}, En = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new en("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new en('"allowMissing" argument must be a boolean');
  if (C$(/^%?[^%]*%?$/, e) === null)
    throw new on("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = M$(e), s = n.length > 0 ? n[0] : "", i = D$("%" + s + "%", r), o = i.name, a = i.value, c = !1, l = i.alias;
  l && (s = l[0], R$(n, _$([0, 1], l)));
  for (var f = 1, u = !0; f < n.length; f += 1) {
    var d = n[f], p = Di(d, 0, 1), m = Di(d, -1);
    if ((p === '"' || p === "'" || p === "`" || m === '"' || m === "'" || m === "`") && p !== m)
      throw new on("property names with quotes must have matching quotes");
    if ((d === "constructor" || !u) && (c = !0), s += "." + d, o = "%" + s + "%", Mi(Sr, o))
      a = Sr[o];
    else if (a != null) {
      if (!(d in a)) {
        if (!r)
          throw new en("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if ($r && f + 1 >= n.length) {
        var h = $r(a, d);
        u = !!h, u && "get" in h && !("originalValue" in h.get) ? a = h.get : a = a[d];
      } else
        u = Mi(a, d), a = a[d];
      u && !c && (Sr[o] = a);
    }
  }
  return a;
}, Jm = { exports: {} }, Tc, Zp;
function tf() {
  if (Zp)
    return Tc;
  Zp = 1;
  var t = En, e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Tc = e, Tc;
}
var N$ = En, Ei = N$("%Object.getOwnPropertyDescriptor%", !0);
if (Ei)
  try {
    Ei([], "length");
  } catch {
    Ei = null;
  }
var Km = Ei, eh = tf(), V$ = Gm, Ur = bs, th = Km, k$ = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Ur("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Ur("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Ur("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Ur("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Ur("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Ur("`loose`, if provided, must be a boolean");
  var s = arguments.length > 3 ? arguments[3] : null, i = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, c = !!th && th(e, r);
  if (eh)
    eh(e, r, {
      configurable: o === null && c ? c.configurable : !o,
      enumerable: s === null && c ? c.enumerable : !s,
      value: n,
      writable: i === null && c ? c.writable : !i
    });
  else if (a || !s && !i && !o)
    e[r] = n;
  else
    throw new V$("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, El = tf(), Wm = function() {
  return !!El;
};
Wm.hasArrayLengthDefineBug = function() {
  if (!El)
    return null;
  try {
    return El([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var L$ = Wm, B$ = En, rh = k$, U$ = L$(), nh = Km, sh = bs, H$ = B$("%Math.floor%"), q$ = function(e, r) {
  if (typeof e != "function")
    throw new sh("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || H$(r) !== r)
    throw new sh("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], s = !0, i = !0;
  if ("length" in e && nh) {
    var o = nh(e, "length");
    o && !o.configurable && (s = !1), o && !o.writable && (i = !1);
  }
  return (s || i || !n) && (U$ ? rh(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : rh(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = ef, r = En, n = q$, s = bs, i = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || e.call(o, i), c = tf(), l = r("%Math.max%");
  t.exports = function(d) {
    if (typeof d != "function")
      throw new s("a function is required");
    var p = a(e, o, arguments);
    return n(
      p,
      1 + l(0, d.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return a(e, i, arguments);
  };
  c ? c(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(Jm);
var G$ = Jm.exports, Ym = En, Xm = G$, z$ = Xm(Ym("String.prototype.indexOf")), J$ = function(e, r) {
  var n = Ym(e, !!r);
  return typeof n == "function" && z$(e, ".prototype.") > -1 ? Xm(n) : n;
};
const K$ = {}, W$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: K$
}, Symbol.toStringTag, { value: "Module" })), Y$ = /* @__PURE__ */ qx(W$);
var rf = typeof Map == "function" && Map.prototype, _c = Object.getOwnPropertyDescriptor && rf ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Ni = rf && _c && typeof _c.get == "function" ? _c.get : null, ih = rf && Map.prototype.forEach, nf = typeof Set == "function" && Set.prototype, Rc = Object.getOwnPropertyDescriptor && nf ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Vi = nf && Rc && typeof Rc.get == "function" ? Rc.get : null, oh = nf && Set.prototype.forEach, X$ = typeof WeakMap == "function" && WeakMap.prototype, Yn = X$ ? WeakMap.prototype.has : null, Q$ = typeof WeakSet == "function" && WeakSet.prototype, Xn = Q$ ? WeakSet.prototype.has : null, Z$ = typeof WeakRef == "function" && WeakRef.prototype, ah = Z$ ? WeakRef.prototype.deref : null, eS = Boolean.prototype.valueOf, tS = Object.prototype.toString, rS = Function.prototype.toString, nS = String.prototype.match, sf = String.prototype.slice, rr = String.prototype.replace, sS = String.prototype.toUpperCase, ch = String.prototype.toLowerCase, Qm = RegExp.prototype.test, lh = Array.prototype.concat, xt = Array.prototype.join, iS = Array.prototype.slice, uh = Math.floor, Ol = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Cc = Object.getOwnPropertySymbols, Al = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, an = typeof Symbol == "function" && typeof Symbol.iterator == "object", De = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === an || !0) ? Symbol.toStringTag : null, Zm = Object.prototype.propertyIsEnumerable, fh = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function ph(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Qm.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -uh(-t) : uh(t);
    if (n !== t) {
      var s = String(n), i = sf.call(e, s.length + 1);
      return rr.call(s, r, "$&_") + "." + rr.call(rr.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return rr.call(e, r, "$&_");
}
var Pl = Y$, hh = Pl.custom, dh = ty(hh) ? hh : null, oS = function t(e, r, n, s) {
  var i = r || {};
  if (er(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (er(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = er(i, "customInspect") ? i.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (er(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (er(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = i.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return ny(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var c = String(e);
    return a ? ph(e, c) : c;
  }
  if (typeof e == "bigint") {
    var l = String(e) + "n";
    return a ? ph(e, l) : l;
  }
  var f = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return jl(e) ? "[Array]" : "[Object]";
  var u = ES(i, n);
  if (typeof s > "u")
    s = [];
  else if (ry(s, e) >= 0)
    return "[Circular]";
  function d(D, k, te) {
    if (k && (s = iS.call(s), s.push(k)), te) {
      var pe = {
        depth: i.depth
      };
      return er(i, "quoteStyle") && (pe.quoteStyle = i.quoteStyle), t(D, pe, n + 1, s);
    }
    return t(D, i, n + 1, s);
  }
  if (typeof e == "function" && !mh(e)) {
    var p = mS(e), m = ui(e, d);
    return "[Function" + (p ? ": " + p : " (anonymous)") + "]" + (m.length > 0 ? " { " + xt.call(m, ", ") + " }" : "");
  }
  if (ty(e)) {
    var h = an ? rr.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Al.call(e);
    return typeof e == "object" && !an ? Hn(h) : h;
  }
  if ($S(e)) {
    for (var g = "<" + ch.call(String(e.nodeName)), y = e.attributes || [], v = 0; v < y.length; v++)
      g += " " + y[v].name + "=" + ey(aS(y[v].value), "double", i);
    return g += ">", e.childNodes && e.childNodes.length && (g += "..."), g += "</" + ch.call(String(e.nodeName)) + ">", g;
  }
  if (jl(e)) {
    if (e.length === 0)
      return "[]";
    var b = ui(e, d);
    return u && !wS(b) ? "[" + Tl(b, u) + "]" : "[ " + xt.call(b, ", ") + " ]";
  }
  if (lS(e)) {
    var S = ui(e, d);
    return !("cause" in Error.prototype) && "cause" in e && !Zm.call(e, "cause") ? "{ [" + String(e) + "] " + xt.call(lh.call("[cause]: " + d(e.cause), S), ", ") + " }" : S.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + xt.call(S, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (dh && typeof e[dh] == "function" && Pl)
      return Pl(e, { depth: f - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (yS(e)) {
    var C = [];
    return ih && ih.call(e, function(D, k) {
      C.push(d(k, e, !0) + " => " + d(D, e));
    }), yh("Map", Ni.call(e), C, u);
  }
  if (bS(e)) {
    var O = [];
    return oh && oh.call(e, function(D) {
      O.push(d(D, e));
    }), yh("Set", Vi.call(e), O, u);
  }
  if (vS(e))
    return Ic("WeakMap");
  if (xS(e))
    return Ic("WeakSet");
  if (gS(e))
    return Ic("WeakRef");
  if (fS(e))
    return Hn(d(Number(e)));
  if (hS(e))
    return Hn(d(Ol.call(e)));
  if (pS(e))
    return Hn(eS.call(e));
  if (uS(e))
    return Hn(d(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === Tt)
    return "{ [object globalThis] }";
  if (!cS(e) && !mh(e)) {
    var R = ui(e, d), V = fh ? fh(e) === Object.prototype : e instanceof Object || e.constructor === Object, A = e instanceof Object ? "" : "null prototype", M = !V && De && Object(e) === e && De in e ? sf.call(or(e), 8, -1) : A ? "Object" : "", P = V || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", E = P + (M || A ? "[" + xt.call(lh.call([], M || [], A || []), ": ") + "] " : "");
    return R.length === 0 ? E + "{}" : u ? E + "{" + Tl(R, u) + "}" : E + "{ " + xt.call(R, ", ") + " }";
  }
  return String(e);
};
function ey(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function aS(t) {
  return rr.call(String(t), /"/g, "&quot;");
}
function jl(t) {
  return or(t) === "[object Array]" && (!De || !(typeof t == "object" && De in t));
}
function cS(t) {
  return or(t) === "[object Date]" && (!De || !(typeof t == "object" && De in t));
}
function mh(t) {
  return or(t) === "[object RegExp]" && (!De || !(typeof t == "object" && De in t));
}
function lS(t) {
  return or(t) === "[object Error]" && (!De || !(typeof t == "object" && De in t));
}
function uS(t) {
  return or(t) === "[object String]" && (!De || !(typeof t == "object" && De in t));
}
function fS(t) {
  return or(t) === "[object Number]" && (!De || !(typeof t == "object" && De in t));
}
function pS(t) {
  return or(t) === "[object Boolean]" && (!De || !(typeof t == "object" && De in t));
}
function ty(t) {
  if (an)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Al)
    return !1;
  try {
    return Al.call(t), !0;
  } catch {
  }
  return !1;
}
function hS(t) {
  if (!t || typeof t != "object" || !Ol)
    return !1;
  try {
    return Ol.call(t), !0;
  } catch {
  }
  return !1;
}
var dS = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function er(t, e) {
  return dS.call(t, e);
}
function or(t) {
  return tS.call(t);
}
function mS(t) {
  if (t.name)
    return t.name;
  var e = nS.call(rS.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function ry(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function yS(t) {
  if (!Ni || !t || typeof t != "object")
    return !1;
  try {
    Ni.call(t);
    try {
      Vi.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function vS(t) {
  if (!Yn || !t || typeof t != "object")
    return !1;
  try {
    Yn.call(t, Yn);
    try {
      Xn.call(t, Xn);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function gS(t) {
  if (!ah || !t || typeof t != "object")
    return !1;
  try {
    return ah.call(t), !0;
  } catch {
  }
  return !1;
}
function bS(t) {
  if (!Vi || !t || typeof t != "object")
    return !1;
  try {
    Vi.call(t);
    try {
      Ni.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function xS(t) {
  if (!Xn || !t || typeof t != "object")
    return !1;
  try {
    Xn.call(t, Xn);
    try {
      Yn.call(t, Yn);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function $S(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function ny(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return ny(sf.call(t, 0, e.maxStringLength), e) + n;
  }
  var s = rr.call(rr.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, SS);
  return ey(s, "single", e);
}
function SS(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + sS.call(e.toString(16));
}
function Hn(t) {
  return "Object(" + t + ")";
}
function Ic(t) {
  return t + " { ? }";
}
function yh(t, e, r, n) {
  var s = n ? Tl(r, n) : xt.call(r, ", ");
  return t + " (" + e + ") {" + s + "}";
}
function wS(t) {
  for (var e = 0; e < t.length; e++)
    if (ry(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function ES(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = xt.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: xt.call(Array(e + 1), r)
  };
}
function Tl(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + xt.call(t, "," + r) + `
` + e.prev;
}
function ui(t, e) {
  var r = jl(t), n = [];
  if (r) {
    n.length = t.length;
    for (var s = 0; s < t.length; s++)
      n[s] = er(t, s) ? e(t[s], t) : "";
  }
  var i = typeof Cc == "function" ? Cc(t) : [], o;
  if (an) {
    o = {};
    for (var a = 0; a < i.length; a++)
      o["$" + i[a]] = i[a];
  }
  for (var c in t)
    er(t, c) && (r && String(Number(c)) === c && c < t.length || an && o["$" + c] instanceof Symbol || (Qm.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
  if (typeof Cc == "function")
    for (var l = 0; l < i.length; l++)
      Zm.call(t, i[l]) && n.push("[" + e(i[l]) + "]: " + e(t[i[l]], t));
  return n;
}
var sy = En, On = J$, OS = oS, AS = bs, fi = sy("%WeakMap%", !0), pi = sy("%Map%", !0), PS = On("WeakMap.prototype.get", !0), jS = On("WeakMap.prototype.set", !0), TS = On("WeakMap.prototype.has", !0), _S = On("Map.prototype.get", !0), RS = On("Map.prototype.set", !0), CS = On("Map.prototype.has", !0), of = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, IS = function(t, e) {
  var r = of(t, e);
  return r && r.value;
}, FS = function(t, e, r) {
  var n = of(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, MS = function(t, e) {
  return !!of(t, e);
}, DS = function() {
  var e, r, n, s = {
    assert: function(i) {
      if (!s.has(i))
        throw new AS("Side channel does not contain " + OS(i));
    },
    get: function(i) {
      if (fi && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return PS(e, i);
      } else if (pi) {
        if (r)
          return _S(r, i);
      } else if (n)
        return IS(n, i);
    },
    has: function(i) {
      if (fi && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return TS(e, i);
      } else if (pi) {
        if (r)
          return CS(r, i);
      } else if (n)
        return MS(n, i);
      return !1;
    },
    set: function(i, o) {
      fi && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new fi()), jS(e, i, o)) : pi ? (r || (r = new pi()), RS(r, i, o)) : (n || (n = { key: {}, next: null }), FS(n, i, o));
    }
  };
  return s;
}, NS = String.prototype.replace, VS = /%20/g, Fc = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, af = {
  default: Fc.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return NS.call(t, VS, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Fc.RFC1738,
  RFC3986: Fc.RFC3986
}, kS = af, Mc = Object.prototype.hasOwnProperty, gr = Array.isArray, mt = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), LS = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (gr(n)) {
      for (var s = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && s.push(n[i]);
      r.obj[r.prop] = s;
    }
  }
}, iy = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = 0; s < e.length; ++s)
    typeof e[s] < "u" && (n[s] = e[s]);
  return n;
}, BS = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (gr(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Mc.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var s = e;
  return gr(e) && !gr(r) && (s = iy(e, n)), gr(e) && gr(r) ? (r.forEach(function(i, o) {
    if (Mc.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && i && typeof i == "object" ? e[o] = t(a, i, n) : e.push(i);
    } else
      e[o] = i;
  }), e) : Object.keys(r).reduce(function(i, o) {
    var a = r[o];
    return Mc.call(i, o) ? i[o] = t(i[o], a, n) : i[o] = a, i;
  }, s);
}, US = function(e, r) {
  return Object.keys(r).reduce(function(n, s) {
    return n[s] = r[s], n;
  }, e);
}, HS = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, qS = function(e, r, n, s, i) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var a = "", c = 0; c < o.length; ++c) {
    var l = o.charCodeAt(c);
    if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || i === kS.RFC1738 && (l === 40 || l === 41)) {
      a += o.charAt(c);
      continue;
    }
    if (l < 128) {
      a = a + mt[l];
      continue;
    }
    if (l < 2048) {
      a = a + (mt[192 | l >> 6] + mt[128 | l & 63]);
      continue;
    }
    if (l < 55296 || l >= 57344) {
      a = a + (mt[224 | l >> 12] + mt[128 | l >> 6 & 63] + mt[128 | l & 63]);
      continue;
    }
    c += 1, l = 65536 + ((l & 1023) << 10 | o.charCodeAt(c) & 1023), a += mt[240 | l >> 18] + mt[128 | l >> 12 & 63] + mt[128 | l >> 6 & 63] + mt[128 | l & 63];
  }
  return a;
}, GS = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], s = 0; s < r.length; ++s)
    for (var i = r[s], o = i.obj[i.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
      var l = a[c], f = o[l];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: o, prop: l }), n.push(f));
    }
  return LS(r), e;
}, zS = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, JS = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, KS = function(e, r) {
  return [].concat(e, r);
}, WS = function(e, r) {
  if (gr(e)) {
    for (var n = [], s = 0; s < e.length; s += 1)
      n.push(r(e[s]));
    return n;
  }
  return r(e);
}, oy = {
  arrayToObject: iy,
  assign: US,
  combine: KS,
  compact: GS,
  decode: HS,
  encode: qS,
  isBuffer: JS,
  isRegExp: zS,
  maybeMap: WS,
  merge: BS
}, ay = DS, Oi = oy, Qn = af, YS = Object.prototype.hasOwnProperty, vh = {
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
}, jt = Array.isArray, XS = Array.prototype.push, cy = function(t, e) {
  XS.apply(t, jt(e) ? e : [e]);
}, QS = Date.prototype.toISOString, gh = Qn.default, Fe = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Oi.encode,
  encodeValuesOnly: !1,
  format: gh,
  formatter: Qn.formatters[gh],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return QS.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ZS = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Dc = {}, ew = function t(e, r, n, s, i, o, a, c, l, f, u, d, p, m, h, g) {
  for (var y = e, v = g, b = 0, S = !1; (v = v.get(Dc)) !== void 0 && !S; ) {
    var C = v.get(e);
    if (b += 1, typeof C < "u") {
      if (C === b)
        throw new RangeError("Cyclic object value");
      S = !0;
    }
    typeof v.get(Dc) > "u" && (b = 0);
  }
  if (typeof c == "function" ? y = c(r, y) : y instanceof Date ? y = u(y) : n === "comma" && jt(y) && (y = Oi.maybeMap(y, function(pe) {
    return pe instanceof Date ? u(pe) : pe;
  })), y === null) {
    if (i)
      return a && !m ? a(r, Fe.encoder, h, "key", d) : r;
    y = "";
  }
  if (ZS(y) || Oi.isBuffer(y)) {
    if (a) {
      var O = m ? r : a(r, Fe.encoder, h, "key", d);
      return [p(O) + "=" + p(a(y, Fe.encoder, h, "value", d))];
    }
    return [p(r) + "=" + p(String(y))];
  }
  var R = [];
  if (typeof y > "u")
    return R;
  var V;
  if (n === "comma" && jt(y))
    m && a && (y = Oi.maybeMap(y, a)), V = [{ value: y.length > 0 ? y.join(",") || null : void 0 }];
  else if (jt(c))
    V = c;
  else {
    var A = Object.keys(y);
    V = l ? A.sort(l) : A;
  }
  for (var M = s && jt(y) && y.length === 1 ? r + "[]" : r, P = 0; P < V.length; ++P) {
    var E = V[P], D = typeof E == "object" && typeof E.value < "u" ? E.value : y[E];
    if (!(o && D === null)) {
      var k = jt(y) ? typeof n == "function" ? n(M, E) : M : M + (f ? "." + E : "[" + E + "]");
      g.set(e, b);
      var te = ay();
      te.set(Dc, g), cy(R, t(
        D,
        k,
        n,
        s,
        i,
        o,
        n === "comma" && m && jt(y) ? null : a,
        c,
        l,
        f,
        u,
        d,
        p,
        m,
        h,
        te
      ));
    }
  }
  return R;
}, tw = function(e) {
  if (!e)
    return Fe;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || Fe.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Qn.default;
  if (typeof e.format < "u") {
    if (!YS.call(Qn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var s = Qn.formatters[n], i = Fe.filter;
  return (typeof e.filter == "function" || jt(e.filter)) && (i = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Fe.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? Fe.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Fe.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? Fe.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : Fe.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : Fe.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Fe.encodeValuesOnly,
    filter: i,
    format: n,
    formatter: s,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Fe.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Fe.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Fe.strictNullHandling
  };
}, rw = function(t, e) {
  var r = t, n = tw(e), s, i;
  typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : jt(n.filter) && (i = n.filter, s = i);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var a;
  e && e.arrayFormat in vh ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
  var c = vh[a];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = c === "comma" && e && e.commaRoundTrip;
  s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
  for (var f = ay(), u = 0; u < s.length; ++u) {
    var d = s[u];
    n.skipNulls && r[d] === null || cy(o, ew(
      r[d],
      d,
      c,
      l,
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
      f
    ));
  }
  var p = o.join(n.delimiter), m = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? m += "utf8=%26%2310003%3B&" : m += "utf8=%E2%9C%93&"), p.length > 0 ? m + p : "";
}, cn = oy, _l = Object.prototype.hasOwnProperty, nw = Array.isArray, Oe = {
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
}, sw = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, ly = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, iw = "utf8=%26%2310003%3B", ow = "utf8=%E2%9C%93", aw = function(e, r) {
  var n = { __proto__: null }, s = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = s.split(r.delimiter, i), a = -1, c, l = r.charset;
  if (r.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === ow ? l = "utf-8" : o[c] === iw && (l = "iso-8859-1"), a = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== a) {
      var f = o[c], u = f.indexOf("]="), d = u === -1 ? f.indexOf("=") : u + 1, p, m;
      d === -1 ? (p = r.decoder(f, Oe.decoder, l, "key"), m = r.strictNullHandling ? null : "") : (p = r.decoder(f.slice(0, d), Oe.decoder, l, "key"), m = cn.maybeMap(
        ly(f.slice(d + 1), r),
        function(h) {
          return r.decoder(h, Oe.decoder, l, "value");
        }
      )), m && r.interpretNumericEntities && l === "iso-8859-1" && (m = sw(m)), f.indexOf("[]=") > -1 && (m = nw(m) ? [m] : m), _l.call(n, p) ? n[p] = cn.combine(n[p], m) : n[p] = m;
    }
  return n;
}, cw = function(t, e, r, n) {
  for (var s = n ? e : ly(e, r), i = t.length - 1; i >= 0; --i) {
    var o, a = t[i];
    if (a === "[]" && r.parseArrays)
      o = [].concat(s);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a, l = parseInt(c, 10);
      !r.parseArrays && c === "" ? o = { 0: s } : !isNaN(l) && a !== c && String(l) === c && l >= 0 && r.parseArrays && l <= r.arrayLimit ? (o = [], o[l] = s) : c !== "__proto__" && (o[c] = s);
    }
    s = o;
  }
  return s;
}, lw = function(e, r, n, s) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, c = n.depth > 0 && o.exec(i), l = c ? i.slice(0, c.index) : i, f = [];
    if (l) {
      if (!n.plainObjects && _l.call(Object.prototype, l) && !n.allowPrototypes)
        return;
      f.push(l);
    }
    for (var u = 0; n.depth > 0 && (c = a.exec(i)) !== null && u < n.depth; ) {
      if (u += 1, !n.plainObjects && _l.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(c[1]);
    }
    return c && f.push("[" + i.slice(c.index) + "]"), cw(f, r, n, s);
  }
}, uw = function(e) {
  if (!e)
    return Oe;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? Oe.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? Oe.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Oe.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Oe.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Oe.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Oe.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : Oe.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : Oe.decoder,
    delimiter: typeof e.delimiter == "string" || cn.isRegExp(e.delimiter) ? e.delimiter : Oe.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Oe.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Oe.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Oe.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Oe.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Oe.strictNullHandling
  };
}, fw = function(t, e) {
  var r = uw(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? aw(t, r) : t, s = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), o = 0; o < i.length; ++o) {
    var a = i[o], c = lw(a, n[a], r, typeof t == "string");
    s = cn.merge(s, c, r);
  }
  return r.allowSparse === !0 ? s : cn.compact(s);
}, pw = rw, hw = fw, dw = af, mw = {
  formats: dw,
  parse: hw,
  stringify: pw
};
const Rl = /* @__PURE__ */ wn(mw);
function cf(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function uy(t, e) {
  return Array.isArray(t) && t.some((r) => cf(r, e));
}
class Cl extends File {
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
const yw = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, vw = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function fy(t, e = "reserved") {
  return [...t].map((r) => {
    if (vw(r) || yw(r) && e === "unsafe")
      return r;
    const n = new TextEncoder();
    return Array.from(n.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function lf(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? gw(t) : typeof e == "object" ? bw(t) : xw(t);
}
function Re(t, e = !1) {
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && t.length > 0 ? fy(t, e) : t;
}
function gw({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  if (r === "simple")
    return e.map((i) => Re(i, s)).join(",");
  if (r === "label")
    return `.${e.map((i) => Re(i, s)).join(".")}`;
  if (r === "matrix")
    return e.map((i) => Re(i, s)).reduce((i, o) => !i || n ? `${i || ""};${t}=${o}` : `${i},${o}`, "");
  if (r === "form") {
    const i = n ? `&${t}=` : ",";
    return e.map((o) => Re(o, s)).join(i);
  }
  if (r === "spaceDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => Re(o, s)).join(` ${i}`);
  }
  if (r === "pipeDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => Re(o, s)).join(`|${i}`);
  }
}
function bw({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  const i = Object.keys(e);
  if (r === "simple")
    return i.reduce((o, a) => {
      const c = Re(e[a], s), l = n ? "=" : ",";
      return `${o ? `${o},` : ""}${a}${l}${c}`;
    }, "");
  if (r === "label")
    return i.reduce((o, a) => {
      const c = Re(e[a], s), l = n ? "=" : ".";
      return `${o ? `${o}.` : "."}${a}${l}${c}`;
    }, "");
  if (r === "matrix" && n)
    return i.reduce((o, a) => {
      const c = Re(e[a], s);
      return `${o ? `${o};` : ";"}${a}=${c}`;
    }, "");
  if (r === "matrix")
    return i.reduce((o, a) => {
      const c = Re(e[a], s);
      return `${o ? `${o},` : `;${t}=`}${a},${c}`;
    }, "");
  if (r === "form")
    return i.reduce((o, a) => {
      const c = Re(e[a], s);
      return `${o ? `${o}${n ? "&" : ","}` : ""}${a}${n ? "=" : ","}${c}`;
    }, "");
}
function xw({
  key: t,
  value: e,
  style: r,
  escape: n
}) {
  if (r === "simple")
    return Re(e, n);
  if (r === "label")
    return `.${Re(e, n)}`;
  if (r === "matrix")
    return `;${t}=${Re(e, n)}`;
  if (r === "form" || r === "deepObject")
    return Re(e, n);
}
const $w = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, Sw = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function py(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (f) => f.toString() : (f) => encodeURIComponent(f), l = c(t);
  if (typeof a > "u" && s)
    return [[l, ""]];
  if (cf(a) || uy(a))
    return [[l, a]];
  if (i)
    return bh(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((f) => f !== "undefined")) {
      const {
        style: f,
        explode: u,
        allowReserved: d
      } = o;
      return bh(t, a, r, {
        style: f,
        explode: u,
        allowReserved: d
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const d = typeof a == "string" ? a : JSON.stringify(a), p = c(d), m = new Cl(p, "blob", {
          type: o.contentType
        });
        return [[l, m]];
      }
      const f = c(String(a)), u = new Cl(f, "blob", {
        type: o.contentType
      });
      return [[l, u]];
    }
    return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) && a.every((f) => typeof f != "object") ? [[l, a.map(c).join(",")]] : [[l, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) ? n === "multi" ? [[l, a.map(c)]] : [[l, a.map(c).join(Sw[n || "csv"])]] : [[l, ""]];
}
function bh(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (l) => Re(l, o), c = r ? (l) => l : (l) => a(l);
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join($w[s])]] : s === "deepObject" ? Object.keys(e).map((l) => [c(`${t}[${l}]`), a(e[l])]) : i ? Object.keys(e).map((l) => [c(l), a(e[l])]) : [[c(t), Object.keys(e).map((l) => [`${c(l)},${a(e[l])}`]).join(",")]];
}
function ww(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of py(r, n, !0))
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
function xh(t) {
  const e = Object.keys(t).reduce((r, n) => {
    for (const [s, i] of py(n, t[n]))
      i instanceof Cl ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return Rl.stringify(e, {
    encode: !1,
    indices: !1
  }) || "";
}
function uf(t = {}) {
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
      return cf(c) || uy(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = ww(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = xh(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const l = Rl.parse(o);
      Object.keys(r).forEach((u) => delete l[u]), a = Rl.stringify(l, {
        encode: !0
      });
    }
    const c = s(a, xh(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function hy(t) {
  return typeof t > "u" || t === null;
}
function Ew(t) {
  return typeof t == "object" && t !== null;
}
function Ow(t) {
  return Array.isArray(t) ? t : hy(t) ? [] : [t];
}
function Aw(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function Pw(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function jw(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var Tw = hy, _w = Ew, Rw = Ow, Cw = Pw, Iw = jw, Fw = Aw, Se = {
  isNothing: Tw,
  isObject: _w,
  toArray: Rw,
  repeat: Cw,
  isNegativeZero: Iw,
  extend: Fw
};
function dy(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function ss(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = dy(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
ss.prototype = Object.create(Error.prototype);
ss.prototype.constructor = ss;
ss.prototype.toString = function(e) {
  return this.name + ": " + dy(this, e);
};
var Be = ss;
function Nc(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function Vc(t, e) {
  return Se.repeat(" ", e - t.length) + t;
}
function Mw(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, l, f = Math.min(t.line + e.linesAfter, s.length).toString().length, u = e.maxLength - (e.indent + f + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    l = Nc(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      u
    ), a = Se.repeat(" ", e.indent) + Vc((t.line - c + 1).toString(), f) + " | " + l.str + `
` + a;
  for (l = Nc(t.buffer, n[o], s[o], t.position, u), a += Se.repeat(" ", e.indent) + Vc((t.line + 1).toString(), f) + " | " + l.str + `
`, a += Se.repeat("-", e.indent + f + 3 + l.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    l = Nc(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      u
    ), a += Se.repeat(" ", e.indent) + Vc((t.line + c + 1).toString(), f) + " | " + l.str + `
`;
  return a.replace(/\n$/, "");
}
var Dw = Mw, Nw = [
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
], Vw = [
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
function Lw(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (Nw.indexOf(r) === -1)
      throw new Be('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = kw(e.styleAliases || null), Vw.indexOf(this.kind) === -1)
    throw new Be('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Ce = Lw;
function $h(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function Bw() {
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
function Il(t) {
  return this.extend(t);
}
Il.prototype.extend = function(e) {
  var r = [], n = [];
  if (e instanceof Ce)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  else
    throw new Be("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof Ce))
      throw new Be("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new Be("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new Be("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(i) {
    if (!(i instanceof Ce))
      throw new Be("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(Il.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = $h(s, "implicit"), s.compiledExplicit = $h(s, "explicit"), s.compiledTypeMap = Bw(s.compiledImplicit, s.compiledExplicit), s;
};
var my = Il, yy = new Ce("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), vy = new Ce("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), gy = new Ce("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), by = new my({
  explicit: [
    yy,
    vy,
    gy
  ]
});
function Uw(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function Hw() {
  return null;
}
function qw(t) {
  return t === null;
}
var xy = new Ce("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Uw,
  construct: Hw,
  predicate: qw,
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
function Gw(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function zw(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function Jw(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var $y = new Ce("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Gw,
  construct: zw,
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
function Kw(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function Ww(t) {
  return 48 <= t && t <= 55;
}
function Yw(t) {
  return 48 <= t && t <= 57;
}
function Xw(t) {
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
          if (!Kw(t.charCodeAt(r)))
            return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!Ww(t.charCodeAt(r)))
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
      if (!Yw(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function Qw(t) {
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
function Zw(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Se.isNegativeZero(t);
}
var Sy = new Ce("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Xw,
  construct: Qw,
  predicate: Zw,
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
}), eE = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function tE(t) {
  return !(t === null || !eE.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function rE(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var nE = /^[-+]?[0-9]+e/;
function sE(t, e) {
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
  else if (Se.isNegativeZero(t))
    return "-0.0";
  return r = t.toString(10), nE.test(r) ? r.replace("e", ".e") : r;
}
function iE(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Se.isNegativeZero(t));
}
var wy = new Ce("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: tE,
  construct: rE,
  predicate: iE,
  represent: sE,
  defaultStyle: "lowercase"
}), Ey = by.extend({
  implicit: [
    xy,
    $y,
    Sy,
    wy
  ]
}), Oy = Ey, Ay = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Py = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function oE(t) {
  return t === null ? !1 : Ay.exec(t) !== null || Py.exec(t) !== null;
}
function aE(t) {
  var e, r, n, s, i, o, a, c = 0, l = null, f, u, d;
  if (e = Ay.exec(t), e === null && (e = Py.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (r = +e[1], n = +e[2] - 1, s = +e[3], !e[4])
    return new Date(Date.UTC(r, n, s));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (f = +e[10], u = +(e[11] || 0), l = (f * 60 + u) * 6e4, e[9] === "-" && (l = -l)), d = new Date(Date.UTC(r, n, s, i, o, a, c)), l && d.setTime(d.getTime() - l), d;
}
function cE(t) {
  return t.toISOString();
}
var jy = new Ce("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: oE,
  construct: aE,
  instanceOf: Date,
  represent: cE
});
function lE(t) {
  return t === "<<" || t === null;
}
var Ty = new Ce("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: lE
}), ff = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function uE(t) {
  if (t === null)
    return !1;
  var e, r, n = 0, s = t.length, i = ff;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0)
        return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function fE(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = ff, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function pE(t) {
  var e = "", r = 0, n, s, i = t.length, o = ff;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function hE(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var _y = new Ce("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: uE,
  construct: fE,
  predicate: hE,
  represent: pE
}), dE = Object.prototype.hasOwnProperty, mE = Object.prototype.toString;
function yE(t) {
  if (t === null)
    return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, mE.call(s) !== "[object Object]")
      return !1;
    for (i in s)
      if (dE.call(s, i))
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
function vE(t) {
  return t !== null ? t : [];
}
var Ry = new Ce("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: yE,
  construct: vE
}), gE = Object.prototype.toString;
function bE(t) {
  if (t === null)
    return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], gE.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1))
      return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function xE(t) {
  if (t === null)
    return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var Cy = new Ce("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: bE,
  construct: xE
}), $E = Object.prototype.hasOwnProperty;
function SE(t) {
  if (t === null)
    return !0;
  var e, r = t;
  for (e in r)
    if ($E.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function wE(t) {
  return t !== null ? t : {};
}
var Iy = new Ce("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: SE,
  construct: wE
}), pf = Oy.extend({
  implicit: [
    jy,
    Ty
  ],
  explicit: [
    _y,
    Ry,
    Cy,
    Iy
  ]
}), sr = Object.prototype.hasOwnProperty, ki = 1, Fy = 2, My = 3, Li = 4, kc = 1, EE = 2, Sh = 3, OE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, AE = /[\x85\u2028\u2029]/, PE = /[,\[\]\{\}]/, Dy = /^(?:!|!!|![a-z\-]+!)$/i, Ny = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function wh(t) {
  return Object.prototype.toString.call(t);
}
function $t(t) {
  return t === 10 || t === 13;
}
function wr(t) {
  return t === 9 || t === 32;
}
function Ge(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Yr(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function jE(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function TE(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function _E(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function Eh(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function RE(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var Vy = new Array(256), ky = new Array(256);
for (var Hr = 0; Hr < 256; Hr++)
  Vy[Hr] = Eh(Hr) ? 1 : 0, ky[Hr] = Eh(Hr);
function CE(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || pf, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Ly(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = Dw(r), new Be(e, r);
}
function L(t, e) {
  throw Ly(t, e);
}
function Bi(t, e) {
  t.onWarning && t.onWarning.call(null, Ly(t, e));
}
var Oh = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && L(e, "duplication of %YAML directive"), n.length !== 1 && L(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && L(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && L(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Bi(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && L(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], Dy.test(s) || L(e, "ill-formed tag handle (first argument) of the TAG directive"), sr.call(e.tagMap, s) && L(e, 'there is a previously declared suffix for "' + s + '" tag handle'), Ny.test(i) || L(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      L(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function nr(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || L(t, "expected valid JSON character");
    else
      OE.test(a) && L(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function Ah(t, e, r, n) {
  var s, i, o, a;
  for (Se.isObject(r) || L(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], sr.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function Xr(t, e, r, n, s, i, o, a, c) {
  var l, f;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), l = 0, f = s.length; l < f; l += 1)
      Array.isArray(s[l]) && L(t, "nested arrays are not supported inside keys"), typeof s == "object" && wh(s[l]) === "[object Object]" && (s[l] = "[object Object]");
  if (typeof s == "object" && wh(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (l = 0, f = i.length; l < f; l += 1)
        Ah(t, e, i[l], r);
    else
      Ah(t, e, i, r);
  else
    !t.json && !sr.call(r, s) && sr.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, L(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function hf(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : L(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function be(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; wr(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if ($t(s))
      for (hf(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && Bi(t, "deficient indentation"), n;
}
function sa(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || Ge(r)));
}
function df(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Se.repeat(`
`, e - 1));
}
function IE(t, e, r) {
  var n, s, i, o, a, c, l, f, u = t.kind, d = t.result, p;
  if (p = t.input.charCodeAt(t.position), Ge(p) || Yr(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (s = t.input.charCodeAt(t.position + 1), Ge(s) || r && Yr(s)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; p !== 0; ) {
    if (p === 58) {
      if (s = t.input.charCodeAt(t.position + 1), Ge(s) || r && Yr(s))
        break;
    } else if (p === 35) {
      if (n = t.input.charCodeAt(t.position - 1), Ge(n))
        break;
    } else {
      if (t.position === t.lineStart && sa(t) || r && Yr(p))
        break;
      if ($t(p))
        if (c = t.line, l = t.lineStart, f = t.lineIndent, be(t, !1, -1), t.lineIndent >= e) {
          a = !0, p = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = l, t.lineIndent = f;
          break;
        }
    }
    a && (nr(t, i, o, !1), df(t, t.line - c), i = o = t.position, a = !1), wr(p) || (o = t.position + 1), p = t.input.charCodeAt(++t.position);
  }
  return nr(t, i, o, !1), t.result ? !0 : (t.kind = u, t.result = d, !1);
}
function FE(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (nr(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else
      $t(r) ? (nr(t, n, s, !0), df(t, be(t, !1, e)), n = s = t.position) : t.position === t.lineStart && sa(t) ? L(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  L(t, "unexpected end of the stream within a single quoted scalar");
}
function ME(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return nr(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (nr(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), $t(a))
        be(t, !1, e);
      else if (a < 256 && Vy[a])
        t.result += ky[a], t.position++;
      else if ((o = TE(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = jE(a)) >= 0 ? i = (i << 4) + o : L(t, "expected hexadecimal character");
        t.result += RE(i), t.position++;
      } else
        L(t, "unknown escape sequence");
      r = n = t.position;
    } else
      $t(a) ? (nr(t, r, n, !0), df(t, be(t, !1, e)), r = n = t.position) : t.position === t.lineStart && sa(t) ? L(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  L(t, "unexpected end of the stream within a double quoted scalar");
}
function DE(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, l, f, u, d, p, m = /* @__PURE__ */ Object.create(null), h, g, y, v;
  if (v = t.input.charCodeAt(t.position), v === 91)
    f = 93, p = !1, a = [];
  else if (v === 123)
    f = 125, p = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), v = t.input.charCodeAt(++t.position); v !== 0; ) {
    if (be(t, !0, e), v = t.input.charCodeAt(t.position), v === f)
      return t.position++, t.tag = o, t.anchor = c, t.kind = p ? "mapping" : "sequence", t.result = a, !0;
    r ? v === 44 && L(t, "expected the node content, but found ','") : L(t, "missed comma between flow collection entries"), g = h = y = null, u = d = !1, v === 63 && (l = t.input.charCodeAt(t.position + 1), Ge(l) && (u = d = !0, t.position++, be(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, ln(t, e, ki, !1, !0), g = t.tag, h = t.result, be(t, !0, e), v = t.input.charCodeAt(t.position), (d || t.line === n) && v === 58 && (u = !0, v = t.input.charCodeAt(++t.position), be(t, !0, e), ln(t, e, ki, !1, !0), y = t.result), p ? Xr(t, a, m, g, h, y, n, s, i) : u ? a.push(Xr(t, null, m, g, h, y, n, s, i)) : a.push(h), be(t, !0, e), v = t.input.charCodeAt(t.position), v === 44 ? (r = !0, v = t.input.charCodeAt(++t.position)) : r = !1;
  }
  L(t, "unexpected end of the stream within a flow collection");
}
function NE(t, e) {
  var r, n, s = kc, i = !1, o = !1, a = e, c = 0, l = !1, f, u;
  if (u = t.input.charCodeAt(t.position), u === 124)
    n = !1;
  else if (u === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; u !== 0; )
    if (u = t.input.charCodeAt(++t.position), u === 43 || u === 45)
      kc === s ? s = u === 43 ? Sh : EE : L(t, "repeat of a chomping mode identifier");
    else if ((f = _E(u)) >= 0)
      f === 0 ? L(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? L(t, "repeat of an indentation width identifier") : (a = e + f - 1, o = !0);
    else
      break;
  if (wr(u)) {
    do
      u = t.input.charCodeAt(++t.position);
    while (wr(u));
    if (u === 35)
      do
        u = t.input.charCodeAt(++t.position);
      while (!$t(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (hf(t), t.lineIndent = 0, u = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && u === 32; )
      t.lineIndent++, u = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), $t(u)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === Sh ? t.result += Se.repeat(`
`, i ? 1 + c : c) : s === kc && i && (t.result += `
`);
      break;
    }
    for (n ? wr(u) ? (l = !0, t.result += Se.repeat(`
`, i ? 1 + c : c)) : l ? (l = !1, t.result += Se.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += Se.repeat(`
`, c) : t.result += Se.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !$t(u) && u !== 0; )
      u = t.input.charCodeAt(++t.position);
    nr(t, r, t.position, !1);
  }
  return !0;
}
function Ph(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, L(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !Ge(o)))); ) {
    if (a = !0, t.position++, be(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, ln(t, e, My, !1, !0), i.push(t.result), be(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      L(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function VE(t, e, r) {
  var n, s, i, o, a, c, l = t.tag, f = t.anchor, u = {}, d = /* @__PURE__ */ Object.create(null), p = null, m = null, h = null, g = !1, y = !1, v;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = u), v = t.input.charCodeAt(t.position); v !== 0; ) {
    if (!g && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, L(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, (v === 63 || v === 58) && Ge(n))
      v === 63 ? (g && (Xr(t, u, d, p, m, null, o, a, c), p = m = h = null), y = !0, g = !0, s = !0) : g ? (g = !1, s = !0) : L(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, v = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !ln(t, r, Fy, !1, !0))
        break;
      if (t.line === i) {
        for (v = t.input.charCodeAt(t.position); wr(v); )
          v = t.input.charCodeAt(++t.position);
        if (v === 58)
          v = t.input.charCodeAt(++t.position), Ge(v) || L(t, "a whitespace character is expected after the key-value separator within a block mapping"), g && (Xr(t, u, d, p, m, null, o, a, c), p = m = h = null), y = !0, g = !1, s = !1, p = t.tag, m = t.result;
        else if (y)
          L(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = l, t.anchor = f, !0;
      } else if (y)
        L(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = l, t.anchor = f, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (g && (o = t.line, a = t.lineStart, c = t.position), ln(t, e, Li, !0, s) && (g ? m = t.result : h = t.result), g || (Xr(t, u, d, p, m, h, o, a, c), p = m = h = null), be(t, !0, -1), v = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && v !== 0)
      L(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return g && Xr(t, u, d, p, m, null, o, a, c), y && (t.tag = l, t.anchor = f, t.kind = "mapping", t.result = u), y;
}
function kE(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33)
    return !1;
  if (t.tag !== null && L(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : L(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Ge(o); )
      o === 33 && (n ? L(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), Dy.test(s) || L(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), PE.test(i) && L(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !Ny.test(i) && L(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    L(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : sr.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : L(t, 'undeclared tag handle "' + s + '"'), !0;
}
function LE(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38)
    return !1;
  for (t.anchor !== null && L(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !Ge(r) && !Yr(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && L(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function BE(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42)
    return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !Ge(n) && !Yr(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && L(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), sr.call(t.anchorMap, r) || L(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], be(t, !0, -1), !0;
}
function ln(t, e, r, n, s) {
  var i, o, a, c = 1, l = !1, f = !1, u, d, p, m, h, g;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = Li === r || My === r, n && be(t, !0, -1) && (l = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; kE(t) || LE(t); )
      be(t, !0, -1) ? (l = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = l || s), (c === 1 || Li === r) && (ki === r || Fy === r ? h = e : h = e + 1, g = t.position - t.lineStart, c === 1 ? a && (Ph(t, g) || VE(t, g, h)) || DE(t, h) ? f = !0 : (o && NE(t, h) || FE(t, h) || ME(t, h) ? f = !0 : BE(t) ? (f = !0, (t.tag !== null || t.anchor !== null) && L(t, "alias node should not have any properties")) : IE(t, h, ki === r) && (f = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (f = a && Ph(t, g))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && L(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), u = 0, d = t.implicitTypes.length; u < d; u += 1)
      if (m = t.implicitTypes[u], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (sr.call(t.typeMap[t.kind || "fallback"], t.tag))
      m = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (m = null, p = t.typeMap.multi[t.kind || "fallback"], u = 0, d = p.length; u < d; u += 1)
        if (t.tag.slice(0, p[u].tag.length) === p[u].tag) {
          m = p[u];
          break;
        }
    m || L(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && L(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : L(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || f;
}
function UE(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (be(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !Ge(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && L(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; wr(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !$t(o));
        break;
      }
      if ($t(o))
        break;
      for (r = t.position; o !== 0 && !Ge(o); )
        o = t.input.charCodeAt(++t.position);
      s.push(t.input.slice(r, t.position));
    }
    o !== 0 && hf(t), sr.call(Oh, n) ? Oh[n](t, n, s) : Bi(t, 'unknown document directive "' + n + '"');
  }
  if (be(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, be(t, !0, -1)) : i && L(t, "directives end mark is expected"), ln(t, t.lineIndent - 1, Li, !1, !0), be(t, !0, -1), t.checkLineBreaks && AE.test(t.input.slice(e, t.position)) && Bi(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && sa(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, be(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    L(t, "end of the stream or a document separator is expected");
  else
    return;
}
function By(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new CE(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, L(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    UE(r);
  return r.documents;
}
function HE(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = By(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function qE(t, e) {
  var r = By(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Be("expected a single document in the stream, but found more");
  }
}
var GE = HE, zE = qE, Uy = {
  loadAll: GE,
  load: zE
}, Hy = Object.prototype.toString, qy = Object.prototype.hasOwnProperty, mf = 65279, JE = 9, is = 10, KE = 13, WE = 32, YE = 33, XE = 34, Fl = 35, QE = 37, ZE = 38, e0 = 39, t0 = 42, Gy = 44, r0 = 45, Ui = 58, n0 = 61, s0 = 62, i0 = 63, o0 = 64, zy = 91, Jy = 93, a0 = 96, Ky = 123, c0 = 124, Wy = 125, Ne = {};
Ne[0] = "\\0";
Ne[7] = "\\a";
Ne[8] = "\\b";
Ne[9] = "\\t";
Ne[10] = "\\n";
Ne[11] = "\\v";
Ne[12] = "\\f";
Ne[13] = "\\r";
Ne[27] = "\\e";
Ne[34] = '\\"';
Ne[92] = "\\\\";
Ne[133] = "\\N";
Ne[160] = "\\_";
Ne[8232] = "\\L";
Ne[8233] = "\\P";
var l0 = [
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
], u0 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function f0(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null)
    return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && qy.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function p0(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new Be("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Se.repeat("0", n - e.length) + e;
}
var h0 = 1, os = 2;
function d0(t) {
  this.schema = t.schema || pf, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Se.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = f0(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? os : h0, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function jh(t, e) {
  for (var r = Se.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function Ml(t, e) {
  return `
` + Se.repeat(" ", t.indent * e);
}
function m0(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function Hi(t) {
  return t === WE || t === JE;
}
function as(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== mf || 65536 <= t && t <= 1114111;
}
function Th(t) {
  return as(t) && t !== mf && t !== KE && t !== is;
}
function _h(t, e, r) {
  var n = Th(t), s = n && !Hi(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== Gy && t !== zy && t !== Jy && t !== Ky && t !== Wy) && t !== Fl && !(e === Ui && !s) || Th(e) && !Hi(e) && t === Fl || e === Ui && s
  );
}
function y0(t) {
  return as(t) && t !== mf && !Hi(t) && t !== r0 && t !== i0 && t !== Ui && t !== Gy && t !== zy && t !== Jy && t !== Ky && t !== Wy && t !== Fl && t !== ZE && t !== t0 && t !== YE && t !== c0 && t !== n0 && t !== s0 && t !== e0 && t !== XE && t !== QE && t !== o0 && t !== a0;
}
function v0(t) {
  return !Hi(t) && t !== Ui;
}
function Kn(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function Yy(t) {
  var e = /^\n* /;
  return e.test(t);
}
var Xy = 1, Dl = 2, Qy = 3, Zy = 4, Wr = 5;
function g0(t, e, r, n, s, i, o, a) {
  var c, l = 0, f = null, u = !1, d = !1, p = n !== -1, m = -1, h = y0(Kn(t, 0)) && v0(Kn(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; l >= 65536 ? c += 2 : c++) {
      if (l = Kn(t, c), !as(l))
        return Wr;
      h = h && _h(l, f, a), f = l;
    }
  else {
    for (c = 0; c < t.length; l >= 65536 ? c += 2 : c++) {
      if (l = Kn(t, c), l === is)
        u = !0, p && (d = d || // Foldable line = too long, and not more-indented.
        c - m - 1 > n && t[m + 1] !== " ", m = c);
      else if (!as(l))
        return Wr;
      h = h && _h(l, f, a), f = l;
    }
    d = d || p && c - m - 1 > n && t[m + 1] !== " ";
  }
  return !u && !d ? h && !o && !s(t) ? Xy : i === os ? Wr : Dl : r > 9 && Yy(t) ? Wr : o ? i === os ? Wr : Dl : d ? Zy : Qy;
}
function b0(t, e, r, n, s) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === os ? '""' : "''";
    if (!t.noCompatMode && (l0.indexOf(e) !== -1 || u0.test(e)))
      return t.quotingType === os ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(l) {
      return m0(t, l);
    }
    switch (g0(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !n,
      s
    )) {
      case Xy:
        return e;
      case Dl:
        return "'" + e.replace(/'/g, "''") + "'";
      case Qy:
        return "|" + Rh(e, t.indent) + Ch(jh(e, i));
      case Zy:
        return ">" + Rh(e, t.indent) + Ch(jh(x0(e, o), i));
      case Wr:
        return '"' + $0(e) + '"';
      default:
        throw new Be("impossible error: invalid scalar style");
    }
  }();
}
function Rh(t, e) {
  var r = Yy(t) ? String(e) : "", n = t[t.length - 1] === `
`, s = n && (t[t.length - 2] === `
` || t === `
`), i = s ? "+" : n ? "" : "-";
  return r + i + `
`;
}
function Ch(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function x0(t, e) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var l = t.indexOf(`
`);
    return l = l !== -1 ? l : t.length, r.lastIndex = l, Ih(t.slice(0, l), e);
  }(), s = t[0] === `
` || t[0] === " ", i, o; o = r.exec(t); ) {
    var a = o[1], c = o[2];
    i = c[0] === " ", n += a + (!s && !i && c !== "" ? `
` : "") + Ih(c, e), s = i;
  }
  return n;
}
function Ih(t, e) {
  if (t === "" || t[0] === " ")
    return t;
  for (var r = / [^ ]/g, n, s = 0, i, o = 0, a = 0, c = ""; n = r.exec(t); )
    a = n.index, a - s > e && (i = o > s ? o : a, c += `
` + t.slice(s, i), s = i + 1), o = a;
  return c += `
`, t.length - s > e && o > s ? c += t.slice(s, o) + `
` + t.slice(o + 1) : c += t.slice(s), c.slice(1);
}
function $0(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = Kn(t, s), n = Ne[r], !n && as(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || p0(r);
  return e;
}
function S0(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (Mt(t, e, a, !1, !1) || typeof a > "u" && Mt(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function Fh(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (Mt(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Mt(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += Ml(t, e)), t.dump && is === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function w0(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, l, f;
  for (o = 0, a = i.length; o < a; o += 1)
    f = "", n !== "" && (f += ", "), t.condenseFlow && (f += '"'), c = i[o], l = r[c], t.replacer && (l = t.replacer.call(r, c, l)), Mt(t, e, c, !1, !1) && (t.dump.length > 1024 && (f += "? "), f += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Mt(t, e, l, !1, !1) && (f += t.dump, n += f));
  t.tag = s, t.dump = "{" + n + "}";
}
function E0(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, l, f, u, d;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new Be("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    d = "", (!n || s !== "") && (d += Ml(t, e)), l = o[a], f = r[l], t.replacer && (f = t.replacer.call(r, l, f)), Mt(t, e + 1, l, !0, !0, !0) && (u = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, u && (t.dump && is === t.dump.charCodeAt(0) ? d += "?" : d += "? "), d += t.dump, u && (d += Ml(t, e)), Mt(t, e + 1, f, !0, u) && (t.dump && is === t.dump.charCodeAt(0) ? d += ":" : d += ": ", d += t.dump, s += d));
  t.tag = i, t.dump = s || "{}";
}
function Mh(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, Hy.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (qy.call(a.represent, c))
          n = a.represent[c](e, c);
        else
          throw new Be("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = n;
      }
      return !0;
    }
  return !1;
}
function Mt(t, e, r, n, s, i, o) {
  t.tag = null, t.dump = r, Mh(t, r, !1) || Mh(t, r, !0);
  var a = Hy.call(t.dump), c = n, l;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var f = a === "[object Object]" || a === "[object Array]", u, d;
  if (f && (u = t.duplicates.indexOf(r), d = u !== -1), (t.tag !== null && t.tag !== "?" || d || t.indent !== 2 && e > 0) && (s = !1), d && t.usedDuplicates[u])
    t.dump = "*ref_" + u;
  else {
    if (f && d && !t.usedDuplicates[u] && (t.usedDuplicates[u] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (E0(t, e, t.dump, s), d && (t.dump = "&ref_" + u + t.dump)) : (w0(t, e, t.dump), d && (t.dump = "&ref_" + u + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Fh(t, e - 1, t.dump, s) : Fh(t, e, t.dump, s), d && (t.dump = "&ref_" + u + t.dump)) : (S0(t, e, t.dump), d && (t.dump = "&ref_" + u + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && b0(t, t.dump, e, i, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (t.skipInvalid)
        return !1;
      throw new Be("unacceptable kind of an object to dump " + a);
    }
    t.tag !== null && t.tag !== "?" && (l = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? l = "!" + l : l.slice(0, 18) === "tag:yaml.org,2002:" ? l = "!!" + l.slice(18) : l = "!<" + l + ">", t.dump = l + " " + t.dump);
  }
  return !0;
}
function O0(t, e) {
  var r = [], n = [], s, i;
  for (Nl(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function Nl(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        Nl(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        Nl(t[n[s]], e, r);
}
function A0(t, e) {
  e = e || {};
  var r = new d0(e);
  r.noRefs || O0(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), Mt(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var P0 = A0, j0 = {
  dump: P0
};
function yf(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var T0 = Ce, _0 = my, R0 = by, qi = Ey, C0 = Oy, I0 = pf, F0 = Uy.load, M0 = Uy.loadAll, D0 = j0.dump, N0 = Be, V0 = {
  binary: _y,
  float: wy,
  map: gy,
  null: xy,
  pairs: Cy,
  set: Iy,
  timestamp: jy,
  bool: $y,
  int: Sy,
  merge: Ty,
  omap: Ry,
  seq: vy,
  str: yy
}, k0 = yf("safeLoad", "load"), L0 = yf("safeLoadAll", "loadAll"), B0 = yf("safeDump", "dump"), un = {
  Type: T0,
  Schema: _0,
  FAILSAFE_SCHEMA: R0,
  JSON_SCHEMA: qi,
  CORE_SCHEMA: C0,
  DEFAULT_SCHEMA: I0,
  load: F0,
  loadAll: M0,
  dump: D0,
  YAMLException: N0,
  types: V0,
  safeLoad: k0,
  safeLoadAll: L0,
  safeDump: B0
};
const U0 = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function H0(t, e) {
  return e && (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0) ? JSON.parse(t) : un.load(t);
}
function q0(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function ev(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = q0(n), e), {});
}
function tv(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: ev(t.headers)
  }, s = n.headers["content-type"], i = r || U0(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = H0(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
async function fn(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, e = uf(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await tv(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
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
function G0(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), n = uf(n), n = e(n), r(t(n)));
}
function rv(t, e = {}) {
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
      Accept: Hm
    },
    credentials: s
  }).then((o) => o.body);
}
const vf = (t) => {
  var e, r;
  const {
    baseDoc: n,
    url: s
  } = t, i = (e = n ?? s) !== null && e !== void 0 ? e : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(i, globalThis.document.baseURI)) : i;
}, nv = (t) => {
  const {
    fetch: e,
    http: r
  } = t;
  return e || r || fn;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var z0 = /* @__PURE__ */ function() {
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
}(), J0 = Object.prototype.hasOwnProperty;
function Vl(t, e) {
  return J0.call(t, e);
}
function kl(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var n = [];
  for (var s in t)
    Vl(t, s) && n.push(s);
  return n;
}
function Ke(t) {
  switch (typeof t) {
    case "object":
      return JSON.parse(JSON.stringify(t));
    case "undefined":
      return null;
    default:
      return t;
  }
}
function Ll(t) {
  for (var e = 0, r = t.length, n; e < r; ) {
    if (n = t.charCodeAt(e), n >= 48 && n <= 57) {
      e++;
      continue;
    }
    return !1;
  }
  return !0;
}
function mr(t) {
  return t.indexOf("/") === -1 && t.indexOf("~") === -1 ? t : t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function sv(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Bl(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (Bl(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = kl(t), s = n.length, i = 0; i < s; i++)
        if (Bl(t[n[i]]))
          return !0;
    }
  }
  return !1;
}
function Dh(t, e) {
  var r = [t];
  for (var n in e) {
    var s = typeof e[n] == "object" ? JSON.stringify(e[n], null, 2) : e[n];
    typeof s < "u" && r.push(n + ": " + s);
  }
  return r.join(`
`);
}
var iv = (
  /** @class */
  function(t) {
    z0(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, Dh(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = Dh(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  }(Error)
), ve = iv, K0 = Ke, Qr = {
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
    var n = cs(r, this.path);
    n && (n = Ke(n));
    var s = Er(r, { op: "remove", path: this.from }).removed;
    return Er(r, { op: "add", path: this.path, value: s }), { newDocument: r, removed: n };
  },
  copy: function(t, e, r) {
    var n = cs(r, this.from);
    return Er(r, { op: "add", path: this.path, value: Ke(n) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: ls(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, W0 = {
  add: function(t, e, r) {
    return Ll(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
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
function cs(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return Er(t, r), r.value;
}
function Er(t, e, r, n, s, i) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : Gi(e, 0)), e.path === "") {
    var o = { newDocument: t };
    if (e.op === "add")
      return o.newDocument = e.value, o;
    if (e.op === "replace")
      return o.newDocument = e.value, o.removed = t, o;
    if (e.op === "move" || e.op === "copy")
      return o.newDocument = cs(t, e.from), e.op === "move" && (o.removed = t), o;
    if (e.op === "test") {
      if (o.test = ls(t, e.value), o.test === !1)
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
    n || (t = Ke(t));
    var a = e.path || "", c = a.split("/"), l = t, f = 1, u = c.length, d = void 0, p = void 0, m = void 0;
    for (typeof r == "function" ? m = r : m = Gi; ; ) {
      if (p = c[f], p && p.indexOf("~") != -1 && (p = sv(p)), s && (p == "__proto__" || p == "prototype" && f > 0 && c[f - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && d === void 0 && (l[p] === void 0 ? d = c.slice(0, f).join("/") : f == u - 1 && (d = e.path), d !== void 0 && m(e, 0, t, d)), f++, Array.isArray(l)) {
        if (p === "-")
          p = l.length;
        else {
          if (r && !Ll(p))
            throw new ve("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          Ll(p) && (p = ~~p);
        }
        if (f >= u) {
          if (r && e.op === "add" && p > l.length)
            throw new ve("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = W0[e.op].call(e, l, p, t);
          if (o.test === !1)
            throw new ve("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (f >= u) {
        var o = Qr[e.op].call(e, l, p, t);
        if (o.test === !1)
          throw new ve("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (l = l[p], r && f < u && (!l || typeof l != "object"))
        throw new ve("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function tr(t, e, r, n, s) {
  if (n === void 0 && (n = !0), s === void 0 && (s = !0), r && !Array.isArray(e))
    throw new ve("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (t = Ke(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = Er(t, e[o], r, !0, s, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function Y0(t, e, r) {
  var n = Er(t, e);
  if (n.test === !1)
    throw new ve("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function Gi(t, e, r, n) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new ve("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (Qr[t.op]) {
    if (typeof t.path != "string")
      throw new ve("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new ve('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new ve("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new ve("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && Bl(t.value))
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
        var o = { op: "_get", path: t.from, value: void 0 }, a = ov([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new ve("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else
    throw new ve("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function ov(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new ve("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      tr(Ke(e), Ke(t), r || !0);
    else {
      r = r || Gi;
      for (var n = 0; n < t.length; n++)
        r(t[n], n, e, void 0);
    }
  } catch (s) {
    if (s instanceof ve)
      return s;
    throw s;
  }
}
function ls(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    var r = Array.isArray(t), n = Array.isArray(e), s, i, o;
    if (r && n) {
      if (i = t.length, i != e.length)
        return !1;
      for (s = i; s-- !== 0; )
        if (!ls(t[s], e[s]))
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
      if (o = a[s], !ls(t[o], e[o]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
const X0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: ve,
  _areEquals: ls,
  applyOperation: Er,
  applyPatch: tr,
  applyReducer: Y0,
  deepClone: K0,
  getValueByPointer: cs,
  validate: ov,
  validator: Gi
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var gf = /* @__PURE__ */ new WeakMap(), Q0 = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  }()
), Z0 = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  }()
);
function eO(t) {
  return gf.get(t);
}
function tO(t, e) {
  return t.observers.get(e);
}
function rO(t, e) {
  t.observers.delete(e.callback);
}
function nO(t, e) {
  e.unobserve();
}
function sO(t, e) {
  var r = [], n, s = eO(t);
  if (!s)
    s = new Q0(t), gf.set(t, s);
  else {
    var i = tO(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = Ke(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      Ul(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    Ul(n), clearTimeout(n.next), rO(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new Z0(e, n)), n;
}
function Ul(t, e) {
  e === void 0 && (e = !1);
  var r = gf.get(t.object);
  bf(r.value, t.object, t.patches, "", e), t.patches.length && tr(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function bf(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = kl(e), o = kl(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var l = o[c], f = t[l];
      if (Vl(e, l) && !(e[l] === void 0 && f !== void 0 && Array.isArray(e) === !1)) {
        var u = e[l];
        typeof f == "object" && f != null && typeof u == "object" && u != null && Array.isArray(f) === Array.isArray(u) ? bf(f, u, r, n + "/" + mr(l), s) : f !== u && (s && r.push({ op: "test", path: n + "/" + mr(l), value: Ke(f) }), r.push({ op: "replace", path: n + "/" + mr(l), value: Ke(u) }));
      } else
        Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + mr(l), value: Ke(f) }), r.push({ op: "remove", path: n + "/" + mr(l) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var l = i[c];
        !Vl(t, l) && e[l] !== void 0 && r.push({ op: "add", path: n + "/" + mr(l), value: Ke(e[l]) });
      }
  }
}
function iO(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return bf(t, e, n, "", r), n;
}
const oO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: iO,
  generate: Ul,
  observe: sO,
  unobserve: nO
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, X0, oO, {
  JsonPatchError: iv,
  deepClone: Ke,
  escapePathComponent: mr,
  unescapePathComponent: sv
});
var aO = function(e) {
  return cO(e) && !lO(e);
};
function cO(t) {
  return !!t && typeof t == "object";
}
function lO(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || pO(t);
}
var uO = typeof Symbol == "function" && Symbol.for, fO = uO ? Symbol.for("react.element") : 60103;
function pO(t) {
  return t.$$typeof === fO;
}
function hO(t) {
  return Array.isArray(t) ? [] : {};
}
function us(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? pn(hO(t), t, e) : t;
}
function dO(t, e, r) {
  return t.concat(e).map(function(n) {
    return us(n, r);
  });
}
function mO(t, e) {
  if (!e.customMerge)
    return pn;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : pn;
}
function yO(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Nh(t) {
  return Object.keys(t).concat(yO(t));
}
function av(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function vO(t, e) {
  return av(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function gO(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && Nh(t).forEach(function(s) {
    n[s] = us(t[s], r);
  }), Nh(e).forEach(function(s) {
    vO(t, s) || (av(t, s) && r.isMergeableObject(e[s]) ? n[s] = mO(s, r)(t[s], e[s], r) : n[s] = us(e[s], r));
  }), n;
}
function pn(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || dO, r.isMergeableObject = r.isMergeableObject || aO, r.cloneUnlessOtherwiseSpecified = us;
  var n = Array.isArray(e), s = Array.isArray(t), i = n === s;
  return i ? n ? r.arrayMerge(t, e, r) : gO(t, e, r) : us(e, r);
}
pn.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, s) {
    return pn(n, s, r);
  }, {});
};
var bO = pn, xO = bO;
const $O = /* @__PURE__ */ wn(xO), ne = {
  add: wO,
  replace: Ai,
  remove: EO,
  merge: OO,
  mergeDeep: AO,
  context: PO,
  getIn: RO,
  applyPatch: SO,
  parentPathMatch: _O,
  flatten: $s,
  fullyNormalizeArray: CO,
  normalizeArray: lv,
  isPromise: IO,
  forEachNew: jO,
  forEachNewPrimitive: TO,
  isJsonPatch: pv,
  isContextPatch: DO,
  isPatch: ia,
  isMutation: hv,
  isAdditiveMutation: zi,
  isGenerator: MO,
  isFunction: fv,
  isObject: Or,
  isError: FO
};
function SO(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && Vh(e.path)
  }, e.op === "merge") {
    const n = Lc(t, e.path);
    Object.assign(n, e.value), tr(t, [Ai(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = Lc(t, e.path), s = $O(n, e.value);
    t = tr(t, [Ai(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && Or(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${Vh(i)}`,
      value: e.value[i]
    }), s), []);
    tr(t, n);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: n
    } = e;
    r.allowMetaPatches && e.meta && zi(e) && (Array.isArray(e.value) || Or(e.value)) && (n = {
      ...n,
      ...e.meta
    }), t = n;
  } else if (tr(t, [e]), r.allowMetaPatches && e.meta && zi(e) && (Array.isArray(e.value) || Or(e.value))) {
    const s = {
      ...Lc(t, e.path),
      ...e.meta
    };
    tr(t, [Ai(e.path, s)]);
  }
  return t;
}
function Vh(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function wO(t, e) {
  return {
    op: "add",
    path: t,
    value: e
  };
}
function Ai(t, e, r) {
  return {
    op: "replace",
    path: t,
    value: e,
    meta: r
  };
}
function EO(t) {
  return {
    op: "remove",
    path: t
  };
}
function OO(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function AO(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function PO(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function jO(t, e) {
  try {
    return cv(t, ql, e);
  } catch (r) {
    return r;
  }
}
function TO(t, e) {
  try {
    return cv(t, Hl, e);
  } catch (r) {
    return r;
  }
}
function cv(t, e, r) {
  const n = t.filter(zi).map((o) => e(o.value, r, o.path)) || [], s = $s(n);
  return uv(s);
}
function Hl(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => Hl(n, e, r.concat(s))) : Or(t) ? Object.keys(t).map((n) => Hl(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function ql(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => ql(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (Or(t)) {
    const s = Object.keys(t).map((i) => ql(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = $s(n), n;
}
function _O(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, n = e.length; r < n; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function RO(t, e) {
  return e.reduce((r, n) => typeof n < "u" && r ? r[n] : r, t);
}
function CO(t) {
  return uv($s(lv(t)));
}
function lv(t) {
  return Array.isArray(t) ? t : [t];
}
function $s(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? $s(e) : e));
}
function uv(t) {
  return t.filter((e) => typeof e < "u");
}
function Or(t) {
  return t && typeof t == "object";
}
function IO(t) {
  return Or(t) && fv(t.then);
}
function fv(t) {
  return t && typeof t == "function";
}
function FO(t) {
  return t instanceof Error;
}
function pv(t) {
  if (ia(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function MO(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function hv(t) {
  return pv(t) || ia(t) && t.type === "mutation";
}
function zi(t) {
  return hv(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function DO(t) {
  return ia(t) && t.type === "context";
}
function ia(t) {
  return t && typeof t == "object";
}
function Lc(t, e) {
  try {
    return cs(t, e);
  } catch (r) {
    return console.error(r), {};
  }
}
var qn = function(t) {
  return t && t.Math === Math && t;
}, rt = (
  // eslint-disable-next-line es/no-global-this -- safe
  qn(typeof globalThis == "object" && globalThis) || qn(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  qn(typeof self == "object" && self) || qn(typeof Tt == "object" && Tt) || qn(typeof Tt == "object" && Tt) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), pt = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, NO = pt, oa = !NO(function() {
  var t = (function() {
  }).bind();
  return typeof t != "function" || t.hasOwnProperty("prototype");
}), VO = oa, dv = Function.prototype, kh = dv.apply, Lh = dv.call, xf = typeof Reflect == "object" && Reflect.apply || (VO ? Lh.bind(kh) : function() {
  return Lh.apply(kh, arguments);
}), mv = oa, yv = Function.prototype, Gl = yv.call, kO = mv && yv.bind.bind(Gl, Gl), ht = mv ? kO : function(t) {
  return function() {
    return Gl.apply(t, arguments);
  };
}, vv = ht, LO = vv({}.toString), BO = vv("".slice), $f = function(t) {
  return BO(LO(t), 8, -1);
}, UO = $f, HO = ht, gv = function(t) {
  if (UO(t) === "Function")
    return HO(t);
}, Bc = typeof document == "object" && document.all, nt = typeof Bc > "u" && Bc !== void 0 ? function(t) {
  return typeof t == "function" || t === Bc;
} : function(t) {
  return typeof t == "function";
}, Sf = {}, qO = pt, ar = !qO(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), GO = oa, hi = Function.prototype.call, _r = GO ? hi.bind(hi) : function() {
  return hi.apply(hi, arguments);
}, bv = {}, xv = {}.propertyIsEnumerable, $v = Object.getOwnPropertyDescriptor, zO = $v && !xv.call({ 1: 2 }, 1);
bv.f = zO ? function(e) {
  var r = $v(this, e);
  return !!r && r.enumerable;
} : xv;
var Ss = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, JO = ht, KO = pt, WO = $f, Uc = Object, YO = JO("".split), XO = KO(function() {
  return !Uc("z").propertyIsEnumerable(0);
}) ? function(t) {
  return WO(t) === "String" ? YO(t, "") : Uc(t);
} : Uc, wf = function(t) {
  return t == null;
}, QO = wf, ZO = TypeError, aa = function(t) {
  if (QO(t))
    throw new ZO("Can't call method on " + t);
  return t;
}, e1 = XO, t1 = aa, ws = function(t) {
  return e1(t1(t));
}, r1 = nt, At = function(t) {
  return typeof t == "object" ? t !== null : r1(t);
}, Ef = {}, Hc = Ef, qc = rt, n1 = nt, Bh = function(t) {
  return n1(t) ? t : void 0;
}, Es = function(t, e) {
  return arguments.length < 2 ? Bh(Hc[t]) || Bh(qc[t]) : Hc[t] && Hc[t][e] || qc[t] && qc[t][e];
}, s1 = ht, ca = s1({}.isPrototypeOf), i1 = typeof navigator < "u" && String(navigator.userAgent) || "", Sv = rt, Gc = i1, Uh = Sv.process, Hh = Sv.Deno, qh = Uh && Uh.versions || Hh && Hh.version, Gh = qh && qh.v8, ot, Ji;
Gh && (ot = Gh.split("."), Ji = ot[0] > 0 && ot[0] < 4 ? 1 : +(ot[0] + ot[1]));
!Ji && Gc && (ot = Gc.match(/Edge\/(\d+)/), (!ot || ot[1] >= 74) && (ot = Gc.match(/Chrome\/(\d+)/), ot && (Ji = +ot[1])));
var o1 = Ji, zh = o1, a1 = pt, c1 = rt, l1 = c1.String, wv = !!Object.getOwnPropertySymbols && !a1(function() {
  var t = Symbol("symbol detection");
  return !l1(t) || !(Object(t) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && zh && zh < 41;
}), u1 = wv, Ev = u1 && !Symbol.sham && typeof Symbol.iterator == "symbol", f1 = Es, p1 = nt, h1 = ca, d1 = Ev, m1 = Object, Ov = d1 ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  var e = f1("Symbol");
  return p1(e) && h1(e.prototype, m1(t));
}, y1 = String, Of = function(t) {
  try {
    return y1(t);
  } catch {
    return "Object";
  }
}, v1 = nt, g1 = Of, b1 = TypeError, la = function(t) {
  if (v1(t))
    return t;
  throw new b1(g1(t) + " is not a function");
}, x1 = la, $1 = wf, Af = function(t, e) {
  var r = t[e];
  return $1(r) ? void 0 : x1(r);
}, zc = _r, Jc = nt, Kc = At, S1 = TypeError, w1 = function(t, e) {
  var r, n;
  if (e === "string" && Jc(r = t.toString) && !Kc(n = zc(r, t)) || Jc(r = t.valueOf) && !Kc(n = zc(r, t)) || e !== "string" && Jc(r = t.toString) && !Kc(n = zc(r, t)))
    return n;
  throw new S1("Can't convert object to primitive value");
}, Av = { exports: {} }, Jh = rt, E1 = Object.defineProperty, O1 = function(t, e) {
  try {
    E1(Jh, t, { value: e, configurable: !0, writable: !0 });
  } catch {
    Jh[t] = e;
  }
  return e;
}, A1 = rt, P1 = O1, Kh = "__core-js_shared__", Wh = Av.exports = A1[Kh] || P1(Kh, {});
(Wh.versions || (Wh.versions = [])).push({
  version: "3.37.1",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Pv = Av.exports, Yh = Pv, jv = function(t, e) {
  return Yh[t] || (Yh[t] = e || {});
}, j1 = aa, T1 = Object, Tv = function(t) {
  return T1(j1(t));
}, _1 = ht, R1 = Tv, C1 = _1({}.hasOwnProperty), Lt = Object.hasOwn || function(e, r) {
  return C1(R1(e), r);
}, I1 = ht, F1 = 0, M1 = Math.random(), D1 = I1(1 .toString), _v = function(t) {
  return "Symbol(" + (t === void 0 ? "" : t) + ")_" + D1(++F1 + M1, 36);
}, N1 = rt, V1 = jv, Xh = Lt, k1 = _v, L1 = wv, B1 = Ev, Zr = N1.Symbol, Wc = V1("wks"), U1 = B1 ? Zr.for || Zr : Zr && Zr.withoutSetter || k1, Bt = function(t) {
  return Xh(Wc, t) || (Wc[t] = L1 && Xh(Zr, t) ? Zr[t] : U1("Symbol." + t)), Wc[t];
}, H1 = _r, Qh = At, Zh = Ov, q1 = Af, G1 = w1, z1 = Bt, J1 = TypeError, K1 = z1("toPrimitive"), W1 = function(t, e) {
  if (!Qh(t) || Zh(t))
    return t;
  var r = q1(t, K1), n;
  if (r) {
    if (e === void 0 && (e = "default"), n = H1(r, t, e), !Qh(n) || Zh(n))
      return n;
    throw new J1("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), G1(t, e);
}, Y1 = W1, X1 = Ov, Rv = function(t) {
  var e = Y1(t, "string");
  return X1(e) ? e : e + "";
}, Q1 = rt, ed = At, zl = Q1.document, Z1 = ed(zl) && ed(zl.createElement), Cv = function(t) {
  return Z1 ? zl.createElement(t) : {};
}, eA = ar, tA = pt, rA = Cv, Iv = !eA && !tA(function() {
  return Object.defineProperty(rA("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), nA = ar, sA = _r, iA = bv, oA = Ss, aA = ws, cA = Rv, lA = Lt, uA = Iv, td = Object.getOwnPropertyDescriptor;
Sf.f = nA ? td : function(e, r) {
  if (e = aA(e), r = cA(r), uA)
    try {
      return td(e, r);
    } catch {
    }
  if (lA(e, r))
    return oA(!sA(iA.f, e, r), e[r]);
};
var fA = pt, pA = nt, hA = /#|\.prototype\./, Os = function(t, e) {
  var r = mA[dA(t)];
  return r === vA ? !0 : r === yA ? !1 : pA(e) ? fA(e) : !!e;
}, dA = Os.normalize = function(t) {
  return String(t).replace(hA, ".").toLowerCase();
}, mA = Os.data = {}, yA = Os.NATIVE = "N", vA = Os.POLYFILL = "P", gA = Os, rd = gv, bA = la, xA = oa, $A = rd(rd.bind), Fv = function(t, e) {
  return bA(t), e === void 0 ? t : xA ? $A(t, e) : function() {
    return t.apply(e, arguments);
  };
}, Rr = {}, SA = ar, wA = pt, Mv = SA && wA(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), EA = At, OA = String, AA = TypeError, Cr = function(t) {
  if (EA(t))
    return t;
  throw new AA(OA(t) + " is not an object");
}, PA = ar, jA = Iv, TA = Mv, di = Cr, nd = Rv, _A = TypeError, Yc = Object.defineProperty, RA = Object.getOwnPropertyDescriptor, Xc = "enumerable", Qc = "configurable", Zc = "writable";
Rr.f = PA ? TA ? function(e, r, n) {
  if (di(e), r = nd(r), di(n), typeof e == "function" && r === "prototype" && "value" in n && Zc in n && !n[Zc]) {
    var s = RA(e, r);
    s && s[Zc] && (e[r] = n.value, n = {
      configurable: Qc in n ? n[Qc] : s[Qc],
      enumerable: Xc in n ? n[Xc] : s[Xc],
      writable: !1
    });
  }
  return Yc(e, r, n);
} : Yc : function(e, r, n) {
  if (di(e), r = nd(r), di(n), jA)
    try {
      return Yc(e, r, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw new _A("Accessors not supported");
  return "value" in n && (e[r] = n.value), e;
};
var CA = ar, IA = Rr, FA = Ss, cr = CA ? function(t, e, r) {
  return IA.f(t, e, FA(1, r));
} : function(t, e, r) {
  return t[e] = r, t;
}, Gn = rt, MA = xf, DA = gv, NA = nt, VA = Sf.f, kA = gA, qr = Ef, LA = Fv, Gr = cr, sd = Lt, BA = function(t) {
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
    return MA(t, this, arguments);
  };
  return e.prototype = t.prototype, e;
}, ua = function(t, e) {
  var r = t.target, n = t.global, s = t.stat, i = t.proto, o = n ? Gn : s ? Gn[r] : Gn[r] && Gn[r].prototype, a = n ? qr : qr[r] || Gr(qr, r, {})[r], c = a.prototype, l, f, u, d, p, m, h, g, y;
  for (d in e)
    l = kA(n ? d : r + (s ? "." : "#") + d, t.forced), f = !l && o && sd(o, d), m = a[d], f && (t.dontCallGetSet ? (y = VA(o, d), h = y && y.value) : h = o[d]), p = f && h ? h : e[d], !(!l && !i && typeof m == typeof p) && (t.bind && f ? g = LA(p, Gn) : t.wrap && f ? g = BA(p) : i && NA(p) ? g = DA(p) : g = p, (t.sham || p && p.sham || m && m.sham) && Gr(g, "sham", !0), Gr(a, d, g), i && (u = r + "Prototype", sd(qr, u) || Gr(qr, u, {}), Gr(qr[u], d, p), t.real && c && (l || !c[d]) && Gr(c, d, p)));
}, UA = jv, HA = _v, id = UA("keys"), Pf = function(t) {
  return id[t] || (id[t] = HA(t));
}, qA = pt, GA = !qA(function() {
  function t() {
  }
  return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
}), zA = Lt, JA = nt, KA = Tv, WA = Pf, YA = GA, od = WA("IE_PROTO"), Jl = Object, XA = Jl.prototype, jf = YA ? Jl.getPrototypeOf : function(t) {
  var e = KA(t);
  if (zA(e, od))
    return e[od];
  var r = e.constructor;
  return JA(r) && e instanceof r ? r.prototype : e instanceof Jl ? XA : null;
}, QA = ht, ZA = la, eP = function(t, e, r) {
  try {
    return QA(ZA(Object.getOwnPropertyDescriptor(t, e)[r]));
  } catch {
  }
}, tP = At, rP = function(t) {
  return tP(t) || t === null;
}, nP = rP, sP = String, iP = TypeError, oP = function(t) {
  if (nP(t))
    return t;
  throw new iP("Can't set " + sP(t) + " as a prototype");
}, aP = eP, cP = At, lP = aa, uP = oP, Tf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t = !1, e = {}, r;
  try {
    r = aP(Object.prototype, "__proto__", "set"), r(e, []), t = e instanceof Array;
  } catch {
  }
  return function(s, i) {
    return lP(s), uP(i), cP(s) && (t ? r(s, i) : s.__proto__ = i), s;
  };
}() : void 0), Dv = {}, fP = Math.ceil, pP = Math.floor, hP = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? pP : fP)(r);
}, dP = hP, _f = function(t) {
  var e = +t;
  return e !== e || e === 0 ? 0 : dP(e);
}, mP = _f, yP = Math.max, vP = Math.min, gP = function(t, e) {
  var r = mP(t);
  return r < 0 ? yP(r + e, 0) : vP(r, e);
}, bP = _f, xP = Math.min, $P = function(t) {
  var e = bP(t);
  return e > 0 ? xP(e, 9007199254740991) : 0;
}, SP = $P, Nv = function(t) {
  return SP(t.length);
}, wP = ws, EP = gP, OP = Nv, ad = function(t) {
  return function(e, r, n) {
    var s = wP(e), i = OP(s);
    if (i === 0)
      return !t && -1;
    var o = EP(n, i), a;
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
}, AP = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: ad(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: ad(!1)
}, Rf = {}, PP = ht, el = Lt, jP = ws, TP = AP.indexOf, _P = Rf, cd = PP([].push), Vv = function(t, e) {
  var r = jP(t), n = 0, s = [], i;
  for (i in r)
    !el(_P, i) && el(r, i) && cd(s, i);
  for (; e.length > n; )
    el(r, i = e[n++]) && (~TP(s, i) || cd(s, i));
  return s;
}, Cf = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], RP = Vv, CP = Cf, IP = CP.concat("length", "prototype");
Dv.f = Object.getOwnPropertyNames || function(e) {
  return RP(e, IP);
};
var kv = {};
kv.f = Object.getOwnPropertySymbols;
var FP = Es, MP = ht, DP = Dv, NP = kv, VP = Cr, kP = MP([].concat), LP = FP("Reflect", "ownKeys") || function(e) {
  var r = DP.f(VP(e)), n = NP.f;
  return n ? kP(r, n(e)) : r;
}, ld = Lt, BP = LP, UP = Sf, HP = Rr, Lv = function(t, e, r) {
  for (var n = BP(e), s = HP.f, i = UP.f, o = 0; o < n.length; o++) {
    var a = n[o];
    !ld(t, a) && !(r && ld(r, a)) && s(t, a, i(e, a));
  }
}, Bv = {}, qP = Vv, GP = Cf, zP = Object.keys || function(e) {
  return qP(e, GP);
}, JP = ar, KP = Mv, WP = Rr, YP = Cr, XP = ws, QP = zP;
Bv.f = JP && !KP ? Object.defineProperties : function(e, r) {
  YP(e);
  for (var n = XP(r), s = QP(r), i = s.length, o = 0, a; i > o; )
    WP.f(e, a = s[o++], n[a]);
  return e;
};
var ZP = Es, ej = ZP("document", "documentElement"), tj = Cr, rj = Bv, ud = Cf, nj = Rf, sj = ej, ij = Cv, oj = Pf, fd = ">", pd = "<", Kl = "prototype", Wl = "script", Uv = oj("IE_PROTO"), tl = function() {
}, Hv = function(t) {
  return pd + Wl + fd + t + pd + "/" + Wl + fd;
}, hd = function(t) {
  t.write(Hv("")), t.close();
  var e = t.parentWindow.Object;
  return t = null, e;
}, aj = function() {
  var t = ij("iframe"), e = "java" + Wl + ":", r;
  return t.style.display = "none", sj.appendChild(t), t.src = String(e), r = t.contentWindow.document, r.open(), r.write(Hv("document.F=Object")), r.close(), r.F;
}, mi, Pi = function() {
  try {
    mi = new ActiveXObject("htmlfile");
  } catch {
  }
  Pi = typeof document < "u" ? document.domain && mi ? hd(mi) : aj() : hd(mi);
  for (var t = ud.length; t--; )
    delete Pi[Kl][ud[t]];
  return Pi();
};
nj[Uv] = !0;
var If = Object.create || function(e, r) {
  var n;
  return e !== null ? (tl[Kl] = tj(e), n = new tl(), tl[Kl] = null, n[Uv] = e) : n = Pi(), r === void 0 ? n : rj.f(n, r);
}, cj = At, lj = cr, qv = function(t, e) {
  cj(e) && "cause" in e && lj(t, "cause", e.cause);
}, uj = ht, Gv = Error, fj = uj("".replace), pj = function(t) {
  return String(new Gv(t).stack);
}("zxcasd"), zv = /\n\s*at [^:]*:[^\n]*/, hj = zv.test(pj), dj = function(t, e) {
  if (hj && typeof t == "string" && !Gv.prepareStackTrace)
    for (; e--; )
      t = fj(t, zv, "");
  return t;
}, mj = pt, yj = Ss, vj = !mj(function() {
  var t = new Error("a");
  return "stack" in t ? (Object.defineProperty(t, "stack", yj(1, 7)), t.stack !== 7) : !0;
}), gj = cr, bj = dj, xj = vj, dd = Error.captureStackTrace, Jv = function(t, e, r, n) {
  xj && (dd ? dd(t, e) : gj(t, "stack", bj(r, n)));
}, An = {}, $j = Bt, Sj = An, wj = $j("iterator"), Ej = Array.prototype, Oj = function(t) {
  return t !== void 0 && (Sj.Array === t || Ej[wj] === t);
}, Aj = Bt, Pj = Aj("toStringTag"), Kv = {};
Kv[Pj] = "z";
var Ff = String(Kv) === "[object z]", jj = Ff, Tj = nt, ji = $f, _j = Bt, Rj = _j("toStringTag"), Cj = Object, Ij = ji(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", Fj = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, Mf = jj ? ji : function(t) {
  var e, r, n;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (r = Fj(e = Cj(t), Rj)) == "string" ? r : Ij ? ji(e) : (n = ji(e)) === "Object" && Tj(e.callee) ? "Arguments" : n;
}, Mj = Mf, md = Af, Dj = wf, Nj = An, Vj = Bt, kj = Vj("iterator"), Wv = function(t) {
  if (!Dj(t))
    return md(t, kj) || md(t, "@@iterator") || Nj[Mj(t)];
}, Lj = _r, Bj = la, Uj = Cr, Hj = Of, qj = Wv, Gj = TypeError, zj = function(t, e) {
  var r = arguments.length < 2 ? qj(t) : e;
  if (Bj(r))
    return Uj(Lj(r, t));
  throw new Gj(Hj(t) + " is not iterable");
}, Jj = _r, yd = Cr, Kj = Af, Wj = function(t, e, r) {
  var n, s;
  yd(t);
  try {
    if (n = Kj(t, "return"), !n) {
      if (e === "throw")
        throw r;
      return r;
    }
    n = Jj(n, t);
  } catch (i) {
    s = !0, n = i;
  }
  if (e === "throw")
    throw r;
  if (s)
    throw n;
  return yd(n), r;
}, Yj = Fv, Xj = _r, Qj = Cr, Zj = Of, eT = Oj, tT = Nv, vd = ca, rT = zj, nT = Wv, gd = Wj, sT = TypeError, Ti = function(t, e) {
  this.stopped = t, this.result = e;
}, bd = Ti.prototype, iT = function(t, e, r) {
  var n = r && r.that, s = !!(r && r.AS_ENTRIES), i = !!(r && r.IS_RECORD), o = !!(r && r.IS_ITERATOR), a = !!(r && r.INTERRUPTED), c = Yj(e, n), l, f, u, d, p, m, h, g = function(v) {
    return l && gd(l, "normal", v), new Ti(!0, v);
  }, y = function(v) {
    return s ? (Qj(v), a ? c(v[0], v[1], g) : c(v[0], v[1])) : a ? c(v, g) : c(v);
  };
  if (i)
    l = t.iterator;
  else if (o)
    l = t;
  else {
    if (f = nT(t), !f)
      throw new sT(Zj(t) + " is not iterable");
    if (eT(f)) {
      for (u = 0, d = tT(t); d > u; u++)
        if (p = y(t[u]), p && vd(bd, p))
          return p;
      return new Ti(!1);
    }
    l = rT(t, f);
  }
  for (m = i ? t.next : l.next; !(h = Xj(m, l)).done; ) {
    try {
      p = y(h.value);
    } catch (v) {
      gd(l, "throw", v);
    }
    if (typeof p == "object" && p && vd(bd, p))
      return p;
  }
  return new Ti(!1);
}, oT = Mf, aT = String, Df = function(t) {
  if (oT(t) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return aT(t);
}, cT = Df, Yv = function(t, e) {
  return t === void 0 ? arguments.length < 2 ? "" : e : cT(t);
}, lT = ua, uT = ca, fT = jf, Ki = Tf, pT = Lv, Xv = If, rl = cr, nl = Ss, hT = qv, dT = Jv, mT = iT, yT = Yv, vT = Bt, gT = vT("toStringTag"), Wi = Error, bT = [].push, hn = function(e, r) {
  var n = uT(sl, this), s;
  Ki ? s = Ki(new Wi(), n ? fT(this) : sl) : (s = n ? this : Xv(sl), rl(s, gT, "Error")), r !== void 0 && rl(s, "message", yT(r)), dT(s, hn, s.stack, 1), arguments.length > 2 && hT(s, arguments[2]);
  var i = [];
  return mT(e, bT, { that: i }), rl(s, "errors", i), s;
};
Ki ? Ki(hn, Wi) : pT(hn, Wi, { name: !0 });
var sl = hn.prototype = Xv(Wi.prototype, {
  constructor: nl(1, hn),
  message: nl(1, ""),
  name: nl(1, "AggregateError")
});
lT({ global: !0, constructor: !0, arity: 2 }, {
  AggregateError: hn
});
var xT = Rr.f, $T = function(t, e, r) {
  r in t || xT(t, r, {
    configurable: !0,
    get: function() {
      return e[r];
    },
    set: function(n) {
      e[r] = n;
    }
  });
}, ST = nt, wT = At, xd = Tf, ET = function(t, e, r) {
  var n, s;
  return (
    // it can work only with native `setPrototypeOf`
    xd && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    ST(n = e.constructor) && n !== r && wT(s = n.prototype) && s !== r.prototype && xd(t, s), t
  );
}, $d = Es, OT = cr, AT = ca, Sd = Tf, wd = Lv, Ed = $T, PT = ET, jT = Yv, TT = qv, _T = Jv, RT = ar, Qv = function(t, e, r, n) {
  var s = "stackTraceLimit", i = n ? 2 : 1, o = t.split("."), a = o[o.length - 1], c = $d.apply(null, o);
  if (c) {
    var l = c.prototype;
    if (!r)
      return c;
    var f = $d("Error"), u = e(function(d, p) {
      var m = jT(n ? p : d, void 0), h = n ? new c(d) : new c();
      return m !== void 0 && OT(h, "message", m), _T(h, u, h.stack, 2), this && AT(l, this) && PT(h, this, u), arguments.length > i && TT(h, arguments[i]), h;
    });
    return u.prototype = l, a !== "Error" ? Sd ? Sd(u, f) : wd(u, f, { name: !0 }) : RT && s in c && (Ed(u, c, s), Ed(u, c, "prepareStackTrace")), wd(u, c), u;
  }
}, Zv = ua, CT = rt, Pt = xf, eg = Qv, Yl = "WebAssembly", Od = CT[Yl], Yi = new Error("e", { cause: 7 }).cause !== 7, Ir = function(t, e) {
  var r = {};
  r[t] = eg(t, e, Yi), Zv({ global: !0, constructor: !0, arity: 1, forced: Yi }, r);
}, Nf = function(t, e) {
  if (Od && Od[t]) {
    var r = {};
    r[t] = eg(Yl + "." + t, e, Yi), Zv({ target: Yl, stat: !0, constructor: !0, arity: 1, forced: Yi }, r);
  }
};
Ir("Error", function(t) {
  return function(r) {
    return Pt(t, this, arguments);
  };
});
Ir("EvalError", function(t) {
  return function(r) {
    return Pt(t, this, arguments);
  };
});
Ir("RangeError", function(t) {
  return function(r) {
    return Pt(t, this, arguments);
  };
});
Ir("ReferenceError", function(t) {
  return function(r) {
    return Pt(t, this, arguments);
  };
});
Ir("SyntaxError", function(t) {
  return function(r) {
    return Pt(t, this, arguments);
  };
});
Ir("TypeError", function(t) {
  return function(r) {
    return Pt(t, this, arguments);
  };
});
Ir("URIError", function(t) {
  return function(r) {
    return Pt(t, this, arguments);
  };
});
Nf("CompileError", function(t) {
  return function(r) {
    return Pt(t, this, arguments);
  };
});
Nf("LinkError", function(t) {
  return function(r) {
    return Pt(t, this, arguments);
  };
});
Nf("RuntimeError", function(t) {
  return function(r) {
    return Pt(t, this, arguments);
  };
});
var IT = ua, FT = Es, MT = xf, Ad = pt, DT = Qv, Vf = "AggregateError", Pd = FT(Vf), jd = !Ad(function() {
  return Pd([1]).errors[0] !== 1;
}) && Ad(function() {
  return Pd([1], Vf, { cause: 7 }).cause !== 7;
});
IT({ global: !0, constructor: !0, arity: 2, forced: jd }, {
  AggregateError: DT(Vf, function(t) {
    return function(r, n) {
      return MT(t, this, arguments);
    };
  }, jd, !0)
});
var NT = rt, VT = nt, Td = NT.WeakMap, kT = VT(Td) && /native code/.test(String(Td)), LT = kT, tg = rt, BT = At, UT = cr, il = Lt, ol = Pv, HT = Pf, qT = Rf, _d = "Object already initialized", Xl = tg.TypeError, GT = tg.WeakMap, Xi, fs, Qi, zT = function(t) {
  return Qi(t) ? fs(t) : Xi(t, {});
}, JT = function(t) {
  return function(e) {
    var r;
    if (!BT(e) || (r = fs(e)).type !== t)
      throw new Xl("Incompatible receiver, " + t + " required");
    return r;
  };
};
if (LT || ol.state) {
  var yt = ol.state || (ol.state = new GT());
  yt.get = yt.get, yt.has = yt.has, yt.set = yt.set, Xi = function(t, e) {
    if (yt.has(t))
      throw new Xl(_d);
    return e.facade = t, yt.set(t, e), e;
  }, fs = function(t) {
    return yt.get(t) || {};
  }, Qi = function(t) {
    return yt.has(t);
  };
} else {
  var zr = HT("state");
  qT[zr] = !0, Xi = function(t, e) {
    if (il(t, zr))
      throw new Xl(_d);
    return e.facade = t, UT(t, zr, e), e;
  }, fs = function(t) {
    return il(t, zr) ? t[zr] : {};
  }, Qi = function(t) {
    return il(t, zr);
  };
}
var rg = {
  set: Xi,
  get: fs,
  has: Qi,
  enforce: zT,
  getterFor: JT
}, Ql = ar, KT = Lt, ng = Function.prototype, WT = Ql && Object.getOwnPropertyDescriptor, kf = KT(ng, "name"), YT = kf && (function() {
}).name === "something", XT = kf && (!Ql || Ql && WT(ng, "name").configurable), QT = {
  EXISTS: kf,
  PROPER: YT,
  CONFIGURABLE: XT
}, ZT = cr, sg = function(t, e, r, n) {
  return n && n.enumerable ? t[e] = r : ZT(t, e, r), t;
}, e_ = pt, t_ = nt, r_ = At, n_ = If, Rd = jf, s_ = sg, i_ = Bt, Zl = i_("iterator"), ig = !1, Ct, al, cl;
[].keys && (cl = [].keys(), "next" in cl ? (al = Rd(Rd(cl)), al !== Object.prototype && (Ct = al)) : ig = !0);
var o_ = !r_(Ct) || e_(function() {
  var t = {};
  return Ct[Zl].call(t) !== t;
});
o_ ? Ct = {} : Ct = n_(Ct);
t_(Ct[Zl]) || s_(Ct, Zl, function() {
  return this;
});
var og = {
  IteratorPrototype: Ct,
  BUGGY_SAFARI_ITERATORS: ig
}, a_ = Ff, c_ = Mf, l_ = a_ ? {}.toString : function() {
  return "[object " + c_(this) + "]";
}, u_ = Ff, f_ = Rr.f, p_ = cr, h_ = Lt, d_ = l_, m_ = Bt, Cd = m_("toStringTag"), Lf = function(t, e, r, n) {
  var s = r ? t : t && t.prototype;
  s && (h_(s, Cd) || f_(s, Cd, { configurable: !0, value: e }), n && !u_ && p_(s, "toString", d_));
}, y_ = og.IteratorPrototype, v_ = If, g_ = Ss, b_ = Lf, x_ = An, $_ = function() {
  return this;
}, S_ = function(t, e, r, n) {
  var s = e + " Iterator";
  return t.prototype = v_(y_, { next: g_(+!n, r) }), b_(t, s, !1, !0), x_[s] = $_, t;
}, w_ = ua, E_ = _r, ag = QT, O_ = S_, A_ = jf, P_ = Lf, Id = sg, j_ = Bt, Fd = An, cg = og, T_ = ag.PROPER;
ag.CONFIGURABLE;
cg.IteratorPrototype;
var yi = cg.BUGGY_SAFARI_ITERATORS, ll = j_("iterator"), Md = "keys", vi = "values", Dd = "entries", __ = function() {
  return this;
}, lg = function(t, e, r, n, s, i, o) {
  O_(r, e, n);
  var a = function(y) {
    if (y === s && d)
      return d;
    if (!yi && y && y in f)
      return f[y];
    switch (y) {
      case Md:
        return function() {
          return new r(this, y);
        };
      case vi:
        return function() {
          return new r(this, y);
        };
      case Dd:
        return function() {
          return new r(this, y);
        };
    }
    return function() {
      return new r(this);
    };
  }, c = e + " Iterator", l = !1, f = t.prototype, u = f[ll] || f["@@iterator"] || s && f[s], d = !yi && u || a(s), p = e === "Array" && f.entries || u, m, h, g;
  if (p && (m = A_(p.call(new t())), m !== Object.prototype && m.next && (P_(m, c, !0, !0), Fd[c] = __)), T_ && s === vi && u && u.name !== vi && (l = !0, d = function() {
    return E_(u, this);
  }), s)
    if (h = {
      values: a(vi),
      keys: i ? d : a(Md),
      entries: a(Dd)
    }, o)
      for (g in h)
        (yi || l || !(g in f)) && Id(f, g, h[g]);
    else
      w_({ target: e, proto: !0, forced: yi || l }, h);
  return o && f[ll] !== d && Id(f, ll, d, { name: s }), Fd[e] = d, h;
}, ug = function(t, e) {
  return { value: t, done: e };
}, R_ = ws, Nd = An, fg = rg;
Rr.f;
var C_ = lg, gi = ug, pg = "Array Iterator", I_ = fg.set, F_ = fg.getterFor(pg);
C_(Array, "Array", function(t, e) {
  I_(this, {
    type: pg,
    target: R_(t),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var t = F_(this), e = t.target, r = t.index++;
  if (!e || r >= e.length)
    return t.target = void 0, gi(void 0, !0);
  switch (t.kind) {
    case "keys":
      return gi(r, !1);
    case "values":
      return gi(e[r], !1);
  }
  return gi([r, e[r]], !1);
}, "values");
Nd.Arguments = Nd.Array;
var Bf = ht, M_ = _f, D_ = Df, N_ = aa, V_ = Bf("".charAt), Vd = Bf("".charCodeAt), k_ = Bf("".slice), kd = function(t) {
  return function(e, r) {
    var n = D_(N_(e)), s = M_(r), i = n.length, o, a;
    return s < 0 || s >= i ? t ? "" : void 0 : (o = Vd(n, s), o < 55296 || o > 56319 || s + 1 === i || (a = Vd(n, s + 1)) < 56320 || a > 57343 ? t ? V_(n, s) : o : t ? k_(n, s, s + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
  };
}, L_ = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: kd(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: kd(!0)
}, B_ = L_.charAt, U_ = Df, hg = rg, H_ = lg, Ld = ug, dg = "String Iterator", q_ = hg.set, G_ = hg.getterFor(dg);
H_(String, "String", function(t) {
  q_(this, {
    type: dg,
    string: U_(t),
    index: 0
  });
}, function() {
  var e = G_(this), r = e.string, n = e.index, s;
  return n >= r.length ? Ld(void 0, !0) : (s = B_(r, n), e.index += s.length, Ld(s, !1));
});
var z_ = Ef, J_ = z_.AggregateError, K_ = {
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
}, W_ = K_, Y_ = rt, X_ = Lf, Bd = An;
for (var ul in W_)
  X_(Y_[ul], ul), Bd[ul] = Bd.Array;
var Q_ = J_, Z_ = Q_, eR = Z_, tR = eR, rR = tR, nR = rR, sR = nR, iR = sR;
const oR = /* @__PURE__ */ wn(iR);
class aR extends oR {
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
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(aR, e);
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
class ut extends me {
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
class _e extends me {
}
class fl extends _e {
}
var Uf = function() {
  return !1;
}, cR = function() {
  return !0;
};
const Ut = cR;
function he(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function ie(t) {
  return function e(r) {
    return arguments.length === 0 || he(r) ? e : t.apply(this, arguments);
  };
}
function q(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return he(r) ? e : ie(function(s) {
          return t(r, s);
        });
      default:
        return he(r) && he(n) ? e : he(r) ? ie(function(s) {
          return t(s, n);
        }) : he(n) ? ie(function(s) {
          return t(r, s);
        }) : t(r, n);
    }
  };
}
function lR(t, e) {
  t = t || [], e = e || [];
  var r, n = t.length, s = e.length, i = [];
  for (r = 0; r < n; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < s; )
    i[i.length] = e[r], r += 1;
  return i;
}
function fa(t, e) {
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
      return function(r, n, s, i, o, a, c, l, f) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(r, n, s, i, o, a, c, l, f, u) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function Hf(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!he(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, he(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : fa(Math.max(0, i), Hf(t, n, r));
  };
}
var ue = /* @__PURE__ */ q(function(e, r) {
  return e === 1 ? ie(r) : fa(e, Hf(e, [], r));
});
function Je(t) {
  return function e(r, n, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return he(r) ? e : q(function(i, o) {
          return t(r, i, o);
        });
      case 2:
        return he(r) && he(n) ? e : he(r) ? q(function(i, o) {
          return t(i, n, o);
        }) : he(n) ? q(function(i, o) {
          return t(r, i, o);
        }) : ie(function(i) {
          return t(r, n, i);
        });
      default:
        return he(r) && he(n) && he(s) ? e : he(r) && he(n) ? q(function(i, o) {
          return t(i, o, s);
        }) : he(r) && he(s) ? q(function(i, o) {
          return t(i, n, o);
        }) : he(n) && he(s) ? q(function(i, o) {
          return t(r, i, o);
        }) : he(r) ? ie(function(i) {
          return t(i, n, s);
        }) : he(n) ? ie(function(i) {
          return t(r, i, s);
        }) : he(s) ? ie(function(i) {
          return t(r, n, i);
        }) : t(r, n, s);
    }
  };
}
const As = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function uR(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function lr(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!As(n)) {
      for (var s = 0; s < t.length; ) {
        if (typeof n[t[s]] == "function")
          return n[t[s]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        s += 1;
      }
      if (uR(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function pa(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const We = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
var fR = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = We.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = pa(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
}();
function pR(t) {
  return function(e) {
    return new fR(t, e);
  };
}
var qf = /* @__PURE__ */ q(/* @__PURE__ */ lr(["all"], pR, function(e, r) {
  for (var n = 0; n < r.length; ) {
    if (!e(r[n]))
      return !1;
    n += 1;
  }
  return !0;
}));
function Ud(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function Zi(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function hR(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function Ze(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function dR(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const Zn = typeof Object.is == "function" ? Object.is : dR;
var Hd = Object.prototype.toString, mg = /* @__PURE__ */ function() {
  return Hd.call(arguments) === "[object Arguments]" ? function(e) {
    return Hd.call(e) === "[object Arguments]";
  } : function(e) {
    return Ze("callee", e);
  };
}(), mR = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), qd = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Gd = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), yR = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, Pr = /* @__PURE__ */ ie(typeof Object.keys == "function" && !Gd ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, s = [], i = Gd && mg(e);
  for (r in e)
    Ze(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (mR)
    for (n = qd.length - 1; n >= 0; )
      r = qd[n], Ze(r, e) && !yR(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), vR = /* @__PURE__ */ ie(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
const et = vR;
function zd(t, e, r, n) {
  var s = Ud(t), i = Ud(e);
  function o(a, c) {
    return Gf(a, c, r.slice(), n.slice());
  }
  return !Zi(function(a, c) {
    return !Zi(o, c, a);
  }, i, s);
}
function Gf(t, e, r, n) {
  if (Zn(t, e))
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
      if (typeof t.constructor == "function" && hR(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && Zn(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!Zn(t.valueOf(), e.valueOf()))
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
      return t.size !== e.size ? !1 : zd(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : zd(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var a = r.concat([t]), c = n.concat([e]);
  for (i = o.length - 1; i >= 0; ) {
    var l = o[i];
    if (!(Ze(l, e) && Gf(e[l], t[l], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Ht = /* @__PURE__ */ q(function(e, r) {
  return Gf(e, r, [], []);
});
function gR(t, e, r) {
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
    if (Ht(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function eo(t, e) {
  return gR(e, t, 0) >= 0;
}
function es(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function pl(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var zn = function(e) {
  return (e < 10 ? "0" : "") + e;
}, bR = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + zn(e.getUTCMonth() + 1) + "-" + zn(e.getUTCDate()) + "T" + zn(e.getUTCHours()) + ":" + zn(e.getUTCMinutes()) + ":" + zn(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function yg(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function Ps(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function xR(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function to(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var $R = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = We.init, t.prototype["@@transducer/result"] = We.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function SR(t) {
  return function(e) {
    return new $R(t, e);
  };
}
var wR = /* @__PURE__ */ q(/* @__PURE__ */ lr(["fantasy-land/filter", "filter"], SR, function(t, e) {
  return to(e) ? Ps(function(r, n) {
    return t(e[n]) && (r[n] = e[n]), r;
  }, {}, Pr(e)) : (
    // else
    xR(t, e)
  );
})), ER = /* @__PURE__ */ q(function(e, r) {
  return wR(yg(e), r);
});
const OR = ER;
function vg(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return eo(o, a) ? "<Circular>" : vg(o, a);
  }, n = function(i, o) {
    return es(function(a) {
      return pl(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + es(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + es(r, t).concat(n(t, OR(function(i) {
        return /^\d+$/.test(i);
      }, Pr(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : pl(bR(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : pl(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var s = t.toString();
        if (s !== "[object Object]")
          return s;
      }
      return "{" + n(t, Pr(t)).join(", ") + "}";
  }
}
var dn = /* @__PURE__ */ ie(function(e) {
  return vg(e, []);
}), AR = /* @__PURE__ */ q(function(e, r) {
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
  var o = dn(e), a = n(o, dn(r));
  return a !== void 0 && a === o ? e : r;
});
const zf = AR;
var PR = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = We.init, t.prototype["@@transducer/result"] = We.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), jR = function(e) {
  return function(r) {
    return new PR(e, r);
  };
};
const TR = jR;
var js = /* @__PURE__ */ q(/* @__PURE__ */ lr(["fantasy-land/map", "map"], TR, function(e, r) {
  switch (Object.prototype.toString.call(r)) {
    case "[object Function]":
      return ue(r.length, function() {
        return e.call(this, r.apply(this, arguments));
      });
    case "[object Object]":
      return Ps(function(n, s) {
        return n[s] = e(r[s]), n;
      }, {}, Pr(r));
    default:
      return es(e, r);
  }
}));
const ha = Number.isInteger || function(e) {
  return e << 0 === e;
};
function Jf(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function da(t, e) {
  var r = t < 0 ? e.length + t : t;
  return Jf(e) ? e.charAt(r) : e[r];
}
var Ts = /* @__PURE__ */ q(function(e, r) {
  if (r != null)
    return ha(e) ? da(e, r) : r[e];
}), Kf = /* @__PURE__ */ q(function(e, r) {
  return js(Ts(e), r);
}), _R = /* @__PURE__ */ ie(function(e) {
  return As(e) ? !0 : !e || typeof e != "object" || Jf(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), Jd = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function gg(t, e, r) {
  return function(s, i, o) {
    if (_R(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[Jd] != null)
      return r(s, i, o[Jd]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function RR(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var ma = /* @__PURE__ */ q(function(e, r) {
  return fa(e.length, function() {
    return e.apply(r, arguments);
  });
});
function CR(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function IR(t, e, r, n) {
  return t["@@transducer/result"](r[n](ma(t["@@transducer/step"], t), e));
}
var Wf = /* @__PURE__ */ gg(RR, IR, CR), FR = /* @__PURE__ */ function() {
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
function bg(t) {
  return new FR(t);
}
var Fr = /* @__PURE__ */ Je(function(t, e, r) {
  return Wf(typeof t == "function" ? bg(t) : t, e, r);
}), MR = /* @__PURE__ */ ie(function(e) {
  return ue(Fr(zf, 0, Kf("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (!e[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
}), U = /* @__PURE__ */ ie(function(e) {
  return function() {
    return e;
  };
}), DR = /* @__PURE__ */ q(function(e, r) {
  return e && r;
});
const NR = DR;
var VR = /* @__PURE__ */ ie(function(e) {
  return ue(Fr(zf, 0, Kf("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function kR(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function LR(t, e, r, n) {
  return r[n](t, e);
}
var BR = /* @__PURE__ */ gg(Ps, LR, kR), UR = /* @__PURE__ */ q(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : BR(function(n, s) {
    return lR(n, js(s, r));
  }, [], e);
});
const HR = UR;
var qR = /* @__PURE__ */ q(function(e, r) {
  return e.apply(this, r);
}), Yf = /* @__PURE__ */ ie(function(e) {
  return ue(e.length, e);
});
function GR(t, e, r) {
  if (ha(t) && As(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var zR = /* @__PURE__ */ ie(function(e) {
  return e == null;
});
const ro = zR;
var JR = /* @__PURE__ */ Je(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !ro(n) && Ze(s, n) && typeof n[s] == "object" ? n[s] : ha(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return GR(s, r, n);
});
function Xf(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var KR = /* @__PURE__ */ q(function(e, r) {
  var n = ue(e, r);
  return ue(e, function() {
    return Ps(HR, js(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), Qf = /* @__PURE__ */ ie(function(e) {
  return KR(e.length, e);
}), Mr = /* @__PURE__ */ q(function(e, r) {
  return Xf(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : Qf(NR)(e, r);
});
function xg(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function Zf(t, e, r) {
  if (r || (r = new YR()), WR(t))
    return t;
  var n = function(i) {
    var o = r.get(t);
    if (o)
      return o;
    r.set(t, i);
    for (var a in t)
      Object.prototype.hasOwnProperty.call(t, a) && (i[a] = e ? Zf(t[a], !0, r) : t[a]);
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
      return xg(t);
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
function WR(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var YR = /* @__PURE__ */ function() {
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
}(), XR = /* @__PURE__ */ ie(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), QR = /* @__PURE__ */ ie(function(e) {
  return !e;
});
const ZR = QR;
var _s = /* @__PURE__ */ Qf(ZR);
function eC(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function ep(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return As(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Rs = /* @__PURE__ */ Je(/* @__PURE__ */ ep("slice", function(e, r, n) {
  return Array.prototype.slice.call(n, e, r);
})), $g = /* @__PURE__ */ ie(/* @__PURE__ */ ep("tail", /* @__PURE__ */ Rs(1, 1 / 0)));
function Ie() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return fa(arguments[0].length, Fr(eC, arguments[0], $g(arguments)));
}
var tC = /* @__PURE__ */ ie(function(t) {
  return da(0, t);
});
const rC = tC;
function nC(t) {
  return t;
}
var sC = /* @__PURE__ */ ie(nC);
const Sg = sC;
var iC = /* @__PURE__ */ q(function(e, r) {
  return ue(Fr(zf, 0, Kf("length", r)), function() {
    var n = arguments, s = this;
    return e.apply(s, es(function(i) {
      return i.apply(s, n);
    }, r));
  });
}), oC = /* @__PURE__ */ function() {
  function t(e, r, n, s) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = s, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = We.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (Ze(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, Zf(this.valueAcc, !1)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function aC(t, e, r) {
  return function(n) {
    return new oC(t, e, r, n);
  };
}
var cC = /* @__PURE__ */ Hf(4, [], /* @__PURE__ */ lr([], aC, function(e, r, n, s) {
  var i = bg(function(o, a) {
    var c = n(a), l = e(Ze(c, o) ? o[c] : Zf(r, !1), a);
    return l && l["@@transducer/reduced"] ? pa(o) : (o[c] = l, o);
  });
  return Wf(i, {}, s);
})), mn = /* @__PURE__ */ q(function(e, r) {
  return r == null || r !== r ? e : r;
}), lC = /* @__PURE__ */ function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !Kd(e, !0, this);
  }, t.prototype.has = function(e) {
    return Kd(e, !1, this);
  }, t;
}();
function Kd(t, e, r) {
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
      return r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? eo(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
    case "undefined":
      return r._items[n] ? !0 : (e && (r._items[n] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    default:
      return n = Object.prototype.toString.call(t), n in r._items ? eo(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
  }
}
var uC = /* @__PURE__ */ q(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new lC(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), fC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = We.init, t.prototype["@@transducer/result"] = We.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? pa(n) : n;
  }, t;
}();
function pC(t) {
  return function(e) {
    return new fC(t, e);
  };
}
var hC = /* @__PURE__ */ q(/* @__PURE__ */ lr(["take"], pC, function(e, r) {
  return Rs(0, e < 0 ? 1 / 0 : e, r);
}));
function dC(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return Rs(0, r + 1, e);
}
var mC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = We.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = Wf(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
}();
function yC(t) {
  return function(e) {
    return new mC(t, e);
  };
}
var vC = /* @__PURE__ */ q(/* @__PURE__ */ lr([], yC, dC)), ya = /* @__PURE__ */ ie(function(t) {
  return da(-1, t);
}), gC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = We.init, t.prototype["@@transducer/result"] = We.result, t.prototype["@@transducer/step"] = function(e, r) {
    if (this.f) {
      if (this.f(r))
        return e;
      this.f = null;
    }
    return this.xf["@@transducer/step"](e, r);
  }, t;
}();
function bC(t) {
  return function(e) {
    return new gC(t, e);
  };
}
var xC = /* @__PURE__ */ q(/* @__PURE__ */ lr(["dropWhile"], bC, function(e, r) {
  for (var n = 0, s = r.length; n < s && e(r[n]); )
    n += 1;
  return Rs(n, 1 / 0, r);
})), $C = /* @__PURE__ */ q(function(e, r) {
  return e || r;
});
const SC = $C;
var wC = /* @__PURE__ */ q(function(e, r) {
  return Xf(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : Qf(SC)(e, r);
});
function EC(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var OC = /* @__PURE__ */ ie(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : As(e) ? [] : Jf(e) ? "" : to(e) ? {} : mg(e) ? /* @__PURE__ */ function() {
    return arguments;
  }() : EC(e) ? e.constructor.from("") : void 0;
}), AC = /* @__PURE__ */ ie(function(e) {
  return ue(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), PC = /* @__PURE__ */ q(/* @__PURE__ */ ep("groupBy", /* @__PURE__ */ cC(function(t, e) {
  return t.push(e), t;
}, []))), jC = /* @__PURE__ */ q(function(e, r) {
  if (e.length === 0 || ro(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!ro(n) && Ze(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), TC = /* @__PURE__ */ q(function(e, r) {
  return jC([e], r);
});
const wg = TC;
var qt = function(t, e) {
  switch (arguments.length) {
    case 0:
      return qt;
    case 1:
      return /* @__PURE__ */ function() {
        return function r(n) {
          switch (arguments.length) {
            case 0:
              return r;
            default:
              return Zn(t, n);
          }
        };
      }();
    default:
      return Zn(t, e);
  }
}, tp = /* @__PURE__ */ Je(function(e, r, n) {
  return ue(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), _C = /* @__PURE__ */ q(eo);
const RC = _C;
var CC = /* @__PURE__ */ Rs(0, -1), rp = /* @__PURE__ */ q(function(e, r) {
  return ue(e + 1, function() {
    var n = arguments[e];
    if (n != null && Xf(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(dn(n) + ' does not have a method named "' + r + '"');
  });
}), Cs = /* @__PURE__ */ ie(function(e) {
  return e != null && Ht(e, OC(e));
}), IC = /* @__PURE__ */ ie(function(e) {
  return !Cs(e);
});
const Eg = IC;
var Og = /* @__PURE__ */ rp(1, "join");
function Wd(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var FC = /* @__PURE__ */ q(function(e, r) {
  return function(n) {
    return function(s) {
      return js(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
const MC = FC;
function np(t, e) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    var s = t[n];
    ha(s) ? r = da(s, r) : r = r[s];
  }
  return r;
}
var DC = /* @__PURE__ */ q(function(e, r) {
  return Ps(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, Pr(r));
}), NC = /* @__PURE__ */ Je(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    Ze(i, r) && (s[i] = Ze(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    Ze(i, n) && !Ze(i, s) && (s[i] = n[i]);
  return s;
}), VC = /* @__PURE__ */ Je(function t(e, r, n) {
  return NC(function(s, i, o) {
    return to(i) && to(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), sp = /* @__PURE__ */ q(function(e, r) {
  return VC(function(n, s, i) {
    return i;
  }, e, r);
}), kC = /* @__PURE__ */ q(function(e, r) {
  return qf(yg(e), r);
}), Ag = function(t) {
  return {
    value: t,
    map: function(e) {
      return Ag(e(t));
    }
  };
}, LC = /* @__PURE__ */ Je(function(e, r, n) {
  return e(function(s) {
    return Ag(r(s));
  })(n).value;
}), ze = /* @__PURE__ */ q(np), Pg = /* @__PURE__ */ Je(function(e, r, n) {
  return mn(e, np(r, n));
}), BC = /* @__PURE__ */ Je(function(e, r, n) {
  return e(np(r, n));
});
const va = BC;
var jg = /* @__PURE__ */ q(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), Tg = /* @__PURE__ */ Je(function(e, r, n) {
  return Ht(e, Ts(r, n));
}), no = /* @__PURE__ */ Je(function(e, r, n) {
  return mn(e, Ts(r, n));
}), UC = /* @__PURE__ */ Je(function(e, r, n) {
  return e(Ts(r, n));
});
const HC = UC;
var qC = /* @__PURE__ */ q(function(e, r) {
  if (!(Wd(e) && Wd(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = Array(e < r ? r - e : 0), s = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < s; )
    n[i] = i + e, i += 1;
  return n;
}), GC = /* @__PURE__ */ ie(pa), yn = /* @__PURE__ */ Je(function(e, r, n) {
  return n.replace(e, r);
}), zC = /* @__PURE__ */ q(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), ip = /* @__PURE__ */ rp(1, "split"), _g = /* @__PURE__ */ q(function(t, e) {
  return Ht(hC(t.length, e), t);
});
function JC(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var KC = /* @__PURE__ */ q(function(e, r) {
  if (!JC(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + dn(e));
  return xg(e).test(r);
}), WC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = We.init, t.prototype["@@transducer/result"] = We.result, t.prototype["@@transducer/step"] = function(e, r) {
    return Zi(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
}();
function YC(t) {
  return function(e) {
    return new WC(t, e);
  };
}
var XC = /* @__PURE__ */ q(/* @__PURE__ */ lr([], YC, function(t, e) {
  for (var r = 0, n = e.length, s = [], i; r < n; )
    i = e[r], Zi(t, i, s) || (s[s.length] = i), r += 1;
  return s;
}));
const QC = XC;
var ZC = /* @__PURE__ */ Je(function(e, r, n) {
  return e(n) ? r(n) : n;
}), ga = U(void 0), ur = Ht(ga()), eI = _s(ur);
const Rg = eI;
var Cg = Ht(null), tI = _s(Cg);
const Ig = tI;
var rI = _s(ro), nI = ue(1, Ie(et, qt("GeneratorFunction")));
const sI = nI;
var iI = ue(1, Ie(et, qt("AsyncFunction")));
const oI = iI;
var aI = VR([Ie(et, qt("Function")), sI, oI]);
const Gt = aI;
var cI = ue(1, Gt(Array.isArray) ? Array.isArray : Ie(et, qt("Array")));
const Fg = cI;
var lI = Mr(Fg, Cs), uI = Mr(Fg, Eg);
const fI = uI;
var Dr = ue(1, Ie(et, qt("String"))), Mg = Ht("");
function eu(t) {
  "@babel/helpers - typeof";
  return eu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, eu(t);
}
var pI = function(e) {
  return eu(e) === "object";
};
const Dg = pI;
var hI = ue(1, Mr(Ig, wC(Dg, Gt)));
const dI = hI;
var mI = _s(dI);
const yI = mI;
var op = MR([Dr, yI, Eg]), vI = _s(Gt), gI = ue(1, Mr(Ig, Dg)), bI = Ie(et, qt("Object")), xI = Ie(dn, Ht(dn(Object))), $I = va(Mr(Gt, xI), ["constructor"]), vn = ue(1, function(t) {
  if (!gI(t) || !bI(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return Cg(e) ? !0 : $I(e);
}), SI = ue(1, Ie(et, qt("Number")));
const wI = SI;
var EI = Mr(wI, isFinite);
const OI = EI;
var AI = ue(1, OI), PI = Gt(Number.isFinite) ? ue(1, ma(Number.isFinite, Number)) : AI;
const jI = PI;
var TI = Mr(jI, iC(Ht, [Math.floor, Sg]));
const _I = TI;
var RI = ue(1, _I), CI = Gt(Number.isInteger) ? ue(1, ma(Number.isInteger, Number)) : RI;
const II = CI;
var FI = ue(1, Ie(et, qt("RegExp")));
function MI(t) {
  return kI(t) || VI(t) || NI(t) || DI();
}
function DI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NI(t, e) {
  if (t) {
    if (typeof t == "string")
      return tu(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? tu(t, e) : void 0;
  }
}
function VI(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function kI(t) {
  if (Array.isArray(t))
    return tu(t);
}
function tu(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
var LI = XR(function(t, e) {
  return t.length > e.length;
}), BI = Ie(zC(LI), rC, Ts("length")), UI = Yf(function(t, e, r) {
  var n = r.apply(void 0, MI(t));
  return rI(n) ? GC(n) : e;
}), HI = function(e) {
  var r = BI(e);
  return ue(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return Fr(UI(s), void 0, e);
  });
}, Ng = tp(fI, HI, ga), ba = AC(RC), ps = ue(3, function(t, e, r) {
  var n = ze(t, r), s = ze(CC(t), r);
  if (!vI(n) && !lI(t)) {
    var i = ma(n, s);
    return qR(i, e);
  }
}), qI = ZC(Dr, yn(/[.*+?^${}()|[\]\\-]/g, "\\$&"));
const GI = qI;
var zI = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, Yd = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, JI = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, KI = function(e, r, n) {
  zI(e, r, n), Yd(n, "str"), Yd(r, "replaceValue"), JI(e);
  var s = new RegExp(FI(e) ? e : GI(e), "g");
  return yn(s, r, n);
};
const WI = KI;
var YI = ue(3, WI), XI = rp(2, "replaceAll"), QI = Gt(String.prototype.replaceAll) ? XI : YI, ZI = Yf(function(t, e) {
  return Ie(ip(""), vC(ba(t)), Og(""))(e);
}), ap = Yf(function(t, e) {
  return Ie(ip(""), xC(ba(t)), Og(""))(e);
}), Vg = { exports: {} }, ge = Vg.exports = {}, gt, bt;
function ru() {
  throw new Error("setTimeout has not been defined");
}
function nu() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? gt = setTimeout : gt = ru;
  } catch {
    gt = ru;
  }
  try {
    typeof clearTimeout == "function" ? bt = clearTimeout : bt = nu;
  } catch {
    bt = nu;
  }
})();
function kg(t) {
  if (gt === setTimeout)
    return setTimeout(t, 0);
  if ((gt === ru || !gt) && setTimeout)
    return gt = setTimeout, setTimeout(t, 0);
  try {
    return gt(t, 0);
  } catch {
    try {
      return gt.call(null, t, 0);
    } catch {
      return gt.call(this, t, 0);
    }
  }
}
function eF(t) {
  if (bt === clearTimeout)
    return clearTimeout(t);
  if ((bt === nu || !bt) && clearTimeout)
    return bt = clearTimeout, clearTimeout(t);
  try {
    return bt(t);
  } catch {
    try {
      return bt.call(null, t);
    } catch {
      return bt.call(this, t);
    }
  }
}
var _t = [], tn = !1, br, _i = -1;
function tF() {
  !tn || !br || (tn = !1, br.length ? _t = br.concat(_t) : _i = -1, _t.length && Lg());
}
function Lg() {
  if (!tn) {
    var t = kg(tF);
    tn = !0;
    for (var e = _t.length; e; ) {
      for (br = _t, _t = []; ++_i < e; )
        br && br[_i].run();
      _i = -1, e = _t.length;
    }
    br = null, tn = !1, eF(t);
  }
}
ge.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  _t.push(new Bg(t, e)), _t.length === 1 && !tn && kg(Lg);
};
function Bg(t, e) {
  this.fun = t, this.array = e;
}
Bg.prototype.run = function() {
  this.fun.apply(null, this.array);
};
ge.title = "browser";
ge.browser = !0;
ge.env = {};
ge.argv = [];
ge.version = "";
ge.versions = {};
function zt() {
}
ge.on = zt;
ge.addListener = zt;
ge.once = zt;
ge.off = zt;
ge.removeListener = zt;
ge.removeAllListeners = zt;
ge.emit = zt;
ge.prependListener = zt;
ge.prependOnceListener = zt;
ge.listeners = function(t) {
  return [];
};
ge.binding = function(t) {
  throw new Error("process.binding is not supported");
};
ge.cwd = function() {
  return "/";
};
ge.chdir = function(t) {
  throw new Error("process.chdir is not supported");
};
ge.umask = function() {
  return 0;
};
var rF = Vg.exports;
const so = /* @__PURE__ */ wn(rF), cp = () => va(KC(/^win/), ["platform"], so), xa = (t) => {
  try {
    const e = new URL(t);
    return ZI(":", e.protocol);
  } catch {
    return;
  }
}, nF = Ie(xa, Rg), Ug = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, lp = (t) => {
  if (so.browser)
    return !1;
  const e = xa(t);
  return ur(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, $a = (t) => {
  const e = xa(t);
  return e === "http" || e === "https";
}, sF = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, up = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = no(!1, "keepFileProtocol", e), s = no(cp, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = QI("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, Hg = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  cp() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < e.length; n += 2)
    r = r.replace(e[n], e[n + 1]);
  return r;
}, fp = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, oe = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, io = () => {
  if (so.browser)
    return oe(globalThis.location.href);
  const t = so.cwd(), e = ya(t);
  return ["/", "\\"].includes(e) ? t : t + (cp() ? "\\" : "/");
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
}, Is = (t) => {
  if (lp(t))
    return Hg(up(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, at = (t) => lp(t) ? up(t) : decodeURI(t), iF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: io,
  fromFileSystemPath: Hg,
  getExtension: Ug,
  getHash: fp,
  getProtocol: xa,
  hasProtocol: nF,
  isFileSystemPath: lp,
  isHttpUrl: $a,
  isURI: sF,
  resolve: Pe,
  sanitize: Is,
  stripHash: oe,
  toFileSystemPath: up,
  unsanitize: at
}, Symbol.toStringTag, { value: "Module" }));
let hs = class {
  constructor({
    uri: e,
    mediaType: r = "text/plain",
    data: n,
    parseResult: s
  }) {
    x(this, "uri");
    x(this, "mediaType");
    x(this, "data");
    x(this, "parseResult");
    this.uri = e, this.mediaType = r, this.data = n, this.parseResult = s;
  }
  get extension() {
    return Dr(this.uri) ? Ug(this.uri) : "";
  }
  toString() {
    return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(et(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
  }
};
class gn {
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
    const r = Dr(e) ? e : e.uri;
    return Rg(this.find((n) => n.uri === r));
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
const oF = {
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
    circularReplacer: Sg,
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
}, qg = oF, aF = MC(ze(["resolve", "baseURI"]), JR(["resolve", "baseURI"])), cF = (t) => Mg(t) ? io() : t, Gg = (t, e) => {
  const r = sp(t, e);
  return LC(aF, cF, r);
};
class lF extends me {
  constructor(r, n) {
    super(r, {
      cause: n.cause
    });
    x(this, "plugin");
    this.plugin = n.plugin;
  }
}
const pp = async (t, e, r) => {
  const n = await Promise.all(r.map(ps([t], e)));
  return r.filter((s, i) => n[i]);
}, hp = async (t, e, r) => {
  let n;
  for (const s of r)
    try {
      const i = await s[t].call(s, ...e);
      return {
        plugin: s,
        result: i
      };
    } catch (i) {
      n = new lF("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class su extends me {
}
class dp extends me {
}
class zg extends dp {
}
class uF extends zg {
}
const Jg = uF, fF = async (t, e) => {
  const r = e.resolve.resolvers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.resolve.resolverOpts);
  }), n = await pp("canRead", [t, e], r);
  if (Cs(n))
    throw new Jg(t.uri);
  try {
    const {
      result: s
    } = await hp("read", [t], n);
    return s;
  } catch (s) {
    throw new dp(`Error while reading file "${t.uri}"`, {
      cause: s
    });
  }
}, pF = async (t, e) => {
  const r = e.parse.parsers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.parse.parserOpts);
  }), n = await pp("canParse", [t, e], r);
  if (Cs(n))
    throw new Jg(t.uri);
  try {
    const {
      plugin: s,
      result: i
    } = await hp("parse", [t, e], n);
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new su(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new su(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, hF = async (t, e) => {
  const r = new hs({
    uri: Is(oe(t)),
    mediaType: e.parse.mediaType
  }), n = await fF(r, e);
  return pF(new hs({
    ...r,
    data: n
  }), e);
};
function dF(t) {
  return t === null;
}
var mF = dF, yF = typeof Tt == "object" && Tt && Tt.Object === Object && Tt, Kg = yF, vF = Kg, gF = typeof self == "object" && self && self.Object === Object && self, bF = vF || gF || Function("return this")(), Jt = bF, xF = Jt, $F = xF.Symbol, mp = $F, Xd = mp, Wg = Object.prototype, SF = Wg.hasOwnProperty, wF = Wg.toString, Jn = Xd ? Xd.toStringTag : void 0;
function EF(t) {
  var e = SF.call(t, Jn), r = t[Jn];
  try {
    t[Jn] = void 0;
    var n = !0;
  } catch {
  }
  var s = wF.call(t);
  return n && (e ? t[Jn] = r : delete t[Jn]), s;
}
var OF = EF, AF = Object.prototype, PF = AF.toString;
function jF(t) {
  return PF.call(t);
}
var TF = jF, Qd = mp, _F = OF, RF = TF, CF = "[object Null]", IF = "[object Undefined]", Zd = Qd ? Qd.toStringTag : void 0;
function FF(t) {
  return t == null ? t === void 0 ? IF : CF : Zd && Zd in Object(t) ? _F(t) : RF(t);
}
var Nr = FF, MF = Array.isArray, Sa = MF;
function DF(t) {
  return t != null && typeof t == "object";
}
var Vr = DF, NF = Nr, VF = Sa, kF = Vr, LF = "[object String]";
function BF(t) {
  return typeof t == "string" || !VF(t) && kF(t) && NF(t) == LF;
}
var UF = BF, HF = Nr, qF = Vr, GF = "[object Number]";
function zF(t) {
  return typeof t == "number" || qF(t) && HF(t) == GF;
}
var JF = zF, KF = Nr, WF = Vr, YF = "[object Boolean]";
function XF(t) {
  return t === !0 || t === !1 || WF(t) && KF(t) == YF;
}
var QF = XF;
function ZF(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var wa = ZF;
let eM = class {
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
var tM = eM;
function rM() {
  this.__data__ = [], this.size = 0;
}
var nM = rM;
function sM(t, e) {
  return t === e || t !== t && e !== e;
}
var Yg = sM, iM = Yg;
function oM(t, e) {
  for (var r = t.length; r--; )
    if (iM(t[r][0], e))
      return r;
  return -1;
}
var Ea = oM, aM = Ea, cM = Array.prototype, lM = cM.splice;
function uM(t) {
  var e = this.__data__, r = aM(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : lM.call(e, r, 1), --this.size, !0;
}
var fM = uM, pM = Ea;
function hM(t) {
  var e = this.__data__, r = pM(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var dM = hM, mM = Ea;
function yM(t) {
  return mM(this.__data__, t) > -1;
}
var vM = yM, gM = Ea;
function bM(t, e) {
  var r = this.__data__, n = gM(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
var xM = bM, $M = nM, SM = fM, wM = dM, EM = vM, OM = xM;
function Pn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
Pn.prototype.clear = $M;
Pn.prototype.delete = SM;
Pn.prototype.get = wM;
Pn.prototype.has = EM;
Pn.prototype.set = OM;
var Oa = Pn, AM = Oa;
function PM() {
  this.__data__ = new AM(), this.size = 0;
}
var jM = PM;
function TM(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
var _M = TM;
function RM(t) {
  return this.__data__.get(t);
}
var CM = RM;
function IM(t) {
  return this.__data__.has(t);
}
var FM = IM, MM = Nr, DM = wa, NM = "[object AsyncFunction]", VM = "[object Function]", kM = "[object GeneratorFunction]", LM = "[object Proxy]";
function BM(t) {
  if (!DM(t))
    return !1;
  var e = MM(t);
  return e == VM || e == kM || e == NM || e == LM;
}
var Xg = BM, UM = Jt, HM = UM["__core-js_shared__"], qM = HM, hl = qM, em = function() {
  var t = /[^.]+$/.exec(hl && hl.keys && hl.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function GM(t) {
  return !!em && em in t;
}
var zM = GM, JM = Function.prototype, KM = JM.toString;
function WM(t) {
  if (t != null) {
    try {
      return KM.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Qg = WM, YM = Xg, XM = zM, QM = wa, ZM = Qg, eD = /[\\^$.*+?()[\]{}|]/g, tD = /^\[object .+?Constructor\]$/, rD = Function.prototype, nD = Object.prototype, sD = rD.toString, iD = nD.hasOwnProperty, oD = RegExp(
  "^" + sD.call(iD).replace(eD, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function aD(t) {
  if (!QM(t) || XM(t))
    return !1;
  var e = YM(t) ? oD : tD;
  return e.test(ZM(t));
}
var cD = aD;
function lD(t, e) {
  return t == null ? void 0 : t[e];
}
var uD = lD, fD = cD, pD = uD;
function hD(t, e) {
  var r = pD(t, e);
  return fD(r) ? r : void 0;
}
var jn = hD, dD = jn, mD = Jt, yD = dD(mD, "Map"), yp = yD, vD = jn, gD = vD(Object, "create"), Aa = gD, tm = Aa;
function bD() {
  this.__data__ = tm ? tm(null) : {}, this.size = 0;
}
var xD = bD;
function $D(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var SD = $D, wD = Aa, ED = "__lodash_hash_undefined__", OD = Object.prototype, AD = OD.hasOwnProperty;
function PD(t) {
  var e = this.__data__;
  if (wD) {
    var r = e[t];
    return r === ED ? void 0 : r;
  }
  return AD.call(e, t) ? e[t] : void 0;
}
var jD = PD, TD = Aa, _D = Object.prototype, RD = _D.hasOwnProperty;
function CD(t) {
  var e = this.__data__;
  return TD ? e[t] !== void 0 : RD.call(e, t);
}
var ID = CD, FD = Aa, MD = "__lodash_hash_undefined__";
function DD(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = FD && e === void 0 ? MD : e, this;
}
var ND = DD, VD = xD, kD = SD, LD = jD, BD = ID, UD = ND;
function Tn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
Tn.prototype.clear = VD;
Tn.prototype.delete = kD;
Tn.prototype.get = LD;
Tn.prototype.has = BD;
Tn.prototype.set = UD;
var HD = Tn, rm = HD, qD = Oa, GD = yp;
function zD() {
  this.size = 0, this.__data__ = {
    hash: new rm(),
    map: new (GD || qD)(),
    string: new rm()
  };
}
var JD = zD;
function KD(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var WD = KD, YD = WD;
function XD(t, e) {
  var r = t.__data__;
  return YD(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var Pa = XD, QD = Pa;
function ZD(t) {
  var e = QD(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var eN = ZD, tN = Pa;
function rN(t) {
  return tN(this, t).get(t);
}
var nN = rN, sN = Pa;
function iN(t) {
  return sN(this, t).has(t);
}
var oN = iN, aN = Pa;
function cN(t, e) {
  var r = aN(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
var lN = cN, uN = JD, fN = eN, pN = nN, hN = oN, dN = lN;
function _n(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
_n.prototype.clear = uN;
_n.prototype.delete = fN;
_n.prototype.get = pN;
_n.prototype.has = hN;
_n.prototype.set = dN;
var Zg = _n, mN = Oa, yN = yp, vN = Zg, gN = 200;
function bN(t, e) {
  var r = this.__data__;
  if (r instanceof mN) {
    var n = r.__data__;
    if (!yN || n.length < gN - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new vN(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
var xN = bN, $N = Oa, SN = jM, wN = _M, EN = CM, ON = FM, AN = xN;
function Rn(t) {
  var e = this.__data__ = new $N(t);
  this.size = e.size;
}
Rn.prototype.clear = SN;
Rn.prototype.delete = wN;
Rn.prototype.get = EN;
Rn.prototype.has = ON;
Rn.prototype.set = AN;
var PN = Rn, jN = "__lodash_hash_undefined__";
function TN(t) {
  return this.__data__.set(t, jN), this;
}
var _N = TN;
function RN(t) {
  return this.__data__.has(t);
}
var CN = RN, IN = Zg, FN = _N, MN = CN;
function oo(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new IN(); ++e < r; )
    this.add(t[e]);
}
oo.prototype.add = oo.prototype.push = FN;
oo.prototype.has = MN;
var DN = oo;
function NN(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
var VN = NN;
function kN(t, e) {
  return t.has(e);
}
var LN = kN, BN = DN, UN = VN, HN = LN, qN = 1, GN = 2;
function zN(t, e, r, n, s, i) {
  var o = r & qN, a = t.length, c = e.length;
  if (a != c && !(o && c > a))
    return !1;
  var l = i.get(t), f = i.get(e);
  if (l && f)
    return l == e && f == t;
  var u = -1, d = !0, p = r & GN ? new BN() : void 0;
  for (i.set(t, e), i.set(e, t); ++u < a; ) {
    var m = t[u], h = e[u];
    if (n)
      var g = o ? n(h, m, u, e, t, i) : n(m, h, u, t, e, i);
    if (g !== void 0) {
      if (g)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!UN(e, function(y, v) {
        if (!HN(p, v) && (m === y || s(m, y, r, n, i)))
          return p.push(v);
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
var eb = zN, JN = Jt, KN = JN.Uint8Array, WN = KN;
function YN(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n, s) {
    r[++e] = [s, n];
  }), r;
}
var XN = YN;
function QN(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n) {
    r[++e] = n;
  }), r;
}
var ZN = QN, nm = mp, sm = WN, eV = Yg, tV = eb, rV = XN, nV = ZN, sV = 1, iV = 2, oV = "[object Boolean]", aV = "[object Date]", cV = "[object Error]", lV = "[object Map]", uV = "[object Number]", fV = "[object RegExp]", pV = "[object Set]", hV = "[object String]", dV = "[object Symbol]", mV = "[object ArrayBuffer]", yV = "[object DataView]", im = nm ? nm.prototype : void 0, dl = im ? im.valueOf : void 0;
function vV(t, e, r, n, s, i, o) {
  switch (r) {
    case yV:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case mV:
      return !(t.byteLength != e.byteLength || !i(new sm(t), new sm(e)));
    case oV:
    case aV:
    case uV:
      return eV(+t, +e);
    case cV:
      return t.name == e.name && t.message == e.message;
    case fV:
    case hV:
      return t == e + "";
    case lV:
      var a = rV;
    case pV:
      var c = n & sV;
      if (a || (a = nV), t.size != e.size && !c)
        return !1;
      var l = o.get(t);
      if (l)
        return l == e;
      n |= iV, o.set(t, e);
      var f = tV(a(t), a(e), n, s, i, o);
      return o.delete(t), f;
    case dV:
      if (dl)
        return dl.call(t) == dl.call(e);
  }
  return !1;
}
var gV = vV;
function bV(t, e) {
  for (var r = -1, n = e.length, s = t.length; ++r < n; )
    t[s + r] = e[r];
  return t;
}
var xV = bV, $V = xV, SV = Sa;
function wV(t, e, r) {
  var n = e(t);
  return SV(t) ? n : $V(n, r(t));
}
var EV = wV;
function OV(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, s = 0, i = []; ++r < n; ) {
    var o = t[r];
    e(o, r, t) && (i[s++] = o);
  }
  return i;
}
var AV = OV;
function PV() {
  return [];
}
var jV = PV, TV = AV, _V = jV, RV = Object.prototype, CV = RV.propertyIsEnumerable, om = Object.getOwnPropertySymbols, IV = om ? function(t) {
  return t == null ? [] : (t = Object(t), TV(om(t), function(e) {
    return CV.call(t, e);
  }));
} : _V, FV = IV;
function MV(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var DV = MV, NV = Nr, VV = Vr, kV = "[object Arguments]";
function LV(t) {
  return VV(t) && NV(t) == kV;
}
var BV = LV, am = BV, UV = Vr, tb = Object.prototype, HV = tb.hasOwnProperty, qV = tb.propertyIsEnumerable, GV = am(/* @__PURE__ */ function() {
  return arguments;
}()) ? am : function(t) {
  return UV(t) && HV.call(t, "callee") && !qV.call(t, "callee");
}, zV = GV, ao = { exports: {} };
function JV() {
  return !1;
}
var KV = JV;
ao.exports;
(function(t, e) {
  var r = Jt, n = KV, s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, l = c || n;
  t.exports = l;
})(ao, ao.exports);
var rb = ao.exports, WV = 9007199254740991, YV = /^(?:0|[1-9]\d*)$/;
function XV(t, e) {
  var r = typeof t;
  return e = e ?? WV, !!e && (r == "number" || r != "symbol" && YV.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var QV = XV, ZV = 9007199254740991;
function ek(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ZV;
}
var nb = ek, tk = Nr, rk = nb, nk = Vr, sk = "[object Arguments]", ik = "[object Array]", ok = "[object Boolean]", ak = "[object Date]", ck = "[object Error]", lk = "[object Function]", uk = "[object Map]", fk = "[object Number]", pk = "[object Object]", hk = "[object RegExp]", dk = "[object Set]", mk = "[object String]", yk = "[object WeakMap]", vk = "[object ArrayBuffer]", gk = "[object DataView]", bk = "[object Float32Array]", xk = "[object Float64Array]", $k = "[object Int8Array]", Sk = "[object Int16Array]", wk = "[object Int32Array]", Ek = "[object Uint8Array]", Ok = "[object Uint8ClampedArray]", Ak = "[object Uint16Array]", Pk = "[object Uint32Array]", de = {};
de[bk] = de[xk] = de[$k] = de[Sk] = de[wk] = de[Ek] = de[Ok] = de[Ak] = de[Pk] = !0;
de[sk] = de[ik] = de[vk] = de[ok] = de[gk] = de[ak] = de[ck] = de[lk] = de[uk] = de[fk] = de[pk] = de[hk] = de[dk] = de[mk] = de[yk] = !1;
function jk(t) {
  return nk(t) && rk(t.length) && !!de[tk(t)];
}
var Tk = jk;
function _k(t) {
  return function(e) {
    return t(e);
  };
}
var Rk = _k, co = { exports: {} };
co.exports;
(function(t, e) {
  var r = Kg, n = e && !e.nodeType && e, s = n && !0 && t && !t.nodeType && t, i = s && s.exports === n, o = i && r.process, a = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  t.exports = a;
})(co, co.exports);
var Ck = co.exports, Ik = Tk, Fk = Rk, cm = Ck, lm = cm && cm.isTypedArray, Mk = lm ? Fk(lm) : Ik, sb = Mk, Dk = DV, Nk = zV, Vk = Sa, kk = rb, Lk = QV, Bk = sb, Uk = Object.prototype, Hk = Uk.hasOwnProperty;
function qk(t, e) {
  var r = Vk(t), n = !r && Nk(t), s = !r && !n && kk(t), i = !r && !n && !s && Bk(t), o = r || n || s || i, a = o ? Dk(t.length, String) : [], c = a.length;
  for (var l in t)
    (e || Hk.call(t, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Lk(l, c))) && a.push(l);
  return a;
}
var Gk = qk, zk = Object.prototype;
function Jk(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || zk;
  return t === r;
}
var Kk = Jk;
function Wk(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var Yk = Wk, Xk = Yk, Qk = Xk(Object.keys, Object), Zk = Qk, e2 = Kk, t2 = Zk, r2 = Object.prototype, n2 = r2.hasOwnProperty;
function s2(t) {
  if (!e2(t))
    return t2(t);
  var e = [];
  for (var r in Object(t))
    n2.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var i2 = s2, o2 = Xg, a2 = nb;
function c2(t) {
  return t != null && a2(t.length) && !o2(t);
}
var l2 = c2, u2 = Gk, f2 = i2, p2 = l2;
function h2(t) {
  return p2(t) ? u2(t) : f2(t);
}
var d2 = h2, m2 = EV, y2 = FV, v2 = d2;
function g2(t) {
  return m2(t, v2, y2);
}
var b2 = g2, um = b2, x2 = 1, $2 = Object.prototype, S2 = $2.hasOwnProperty;
function w2(t, e, r, n, s, i) {
  var o = r & x2, a = um(t), c = a.length, l = um(e), f = l.length;
  if (c != f && !o)
    return !1;
  for (var u = c; u--; ) {
    var d = a[u];
    if (!(o ? d in e : S2.call(e, d)))
      return !1;
  }
  var p = i.get(t), m = i.get(e);
  if (p && m)
    return p == e && m == t;
  var h = !0;
  i.set(t, e), i.set(e, t);
  for (var g = o; ++u < c; ) {
    d = a[u];
    var y = t[d], v = e[d];
    if (n)
      var b = o ? n(v, y, d, e, t, i) : n(y, v, d, t, e, i);
    if (!(b === void 0 ? y === v || s(y, v, r, n, i) : b)) {
      h = !1;
      break;
    }
    g || (g = d == "constructor");
  }
  if (h && !g) {
    var S = t.constructor, C = e.constructor;
    S != C && "constructor" in t && "constructor" in e && !(typeof S == "function" && S instanceof S && typeof C == "function" && C instanceof C) && (h = !1);
  }
  return i.delete(t), i.delete(e), h;
}
var E2 = w2, O2 = jn, A2 = Jt, P2 = O2(A2, "DataView"), j2 = P2, T2 = jn, _2 = Jt, R2 = T2(_2, "Promise"), C2 = R2, I2 = jn, F2 = Jt, M2 = I2(F2, "Set"), D2 = M2, N2 = jn, V2 = Jt, k2 = N2(V2, "WeakMap"), L2 = k2, iu = j2, ou = yp, au = C2, cu = D2, lu = L2, ib = Nr, Cn = Qg, fm = "[object Map]", B2 = "[object Object]", pm = "[object Promise]", hm = "[object Set]", dm = "[object WeakMap]", mm = "[object DataView]", U2 = Cn(iu), H2 = Cn(ou), q2 = Cn(au), G2 = Cn(cu), z2 = Cn(lu), yr = ib;
(iu && yr(new iu(new ArrayBuffer(1))) != mm || ou && yr(new ou()) != fm || au && yr(au.resolve()) != pm || cu && yr(new cu()) != hm || lu && yr(new lu()) != dm) && (yr = function(t) {
  var e = ib(t), r = e == B2 ? t.constructor : void 0, n = r ? Cn(r) : "";
  if (n)
    switch (n) {
      case U2:
        return mm;
      case H2:
        return fm;
      case q2:
        return pm;
      case G2:
        return hm;
      case z2:
        return dm;
    }
  return e;
});
var J2 = yr, ml = PN, K2 = eb, W2 = gV, Y2 = E2, ym = J2, vm = Sa, gm = rb, X2 = sb, Q2 = 1, bm = "[object Arguments]", xm = "[object Array]", bi = "[object Object]", Z2 = Object.prototype, $m = Z2.hasOwnProperty;
function eL(t, e, r, n, s, i) {
  var o = vm(t), a = vm(e), c = o ? xm : ym(t), l = a ? xm : ym(e);
  c = c == bm ? bi : c, l = l == bm ? bi : l;
  var f = c == bi, u = l == bi, d = c == l;
  if (d && gm(t)) {
    if (!gm(e))
      return !1;
    o = !0, f = !1;
  }
  if (d && !f)
    return i || (i = new ml()), o || X2(t) ? K2(t, e, r, n, s, i) : W2(t, e, c, r, n, s, i);
  if (!(r & Q2)) {
    var p = f && $m.call(t, "__wrapped__"), m = u && $m.call(e, "__wrapped__");
    if (p || m) {
      var h = p ? t.value() : t, g = m ? e.value() : e;
      return i || (i = new ml()), s(h, g, r, n, i);
    }
  }
  return d ? (i || (i = new ml()), Y2(t, e, r, n, s, i)) : !1;
}
var tL = eL, rL = tL, Sm = Vr;
function ob(t, e, r, n, s) {
  return t === e ? !0 : t == null || e == null || !Sm(t) && !Sm(e) ? t !== t && e !== e : rL(t, e, r, n, ob, s);
}
var nL = ob, sL = nL;
function iL(t, e) {
  return sL(t, e);
}
var oL = iL;
let aL = class ab {
  constructor(e, r) {
    this.key = e, this.value = r;
  }
  /**
   * @returns {KeyValuePair}
   */
  clone() {
    const e = new ab();
    return this.key && (e.key = this.key.clone()), this.value && (e.value = this.value.clone()), e;
  }
};
var ja = aL, cL = "Expected a function";
function lL(t) {
  if (typeof t != "function")
    throw new TypeError(cL);
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
var Ta = lL;
const uL = Ta;
function yl(t) {
  return typeof t == "string" ? (e) => e.element === t : t.constructor && t.extend ? (e) => e instanceof t : t;
}
let cb = class uu {
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
    return e = yl(e), new uu(this.elements.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(e, r) {
    return e = yl(e), new uu(this.elements.filter(uL(e), r));
  }
  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(e, r) {
    return e = yl(e), this.elements.find(e, r);
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
typeof Symbol < "u" && (cb.prototype[Symbol.iterator] = function() {
  return this.elements[Symbol.iterator]();
});
var _a = cb;
const fL = oL, xi = ja, Qt = _a;
let pL = class Ri {
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
    return this.content instanceof Ri ? this.content.toValue() : this.content instanceof xi ? {
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
    let n = new Qt();
    const s = (o, a) => (o.push(a), o), i = (o, a) => {
      a.element === r && o.push(a);
      const c = a.findRecursive(r);
      return c && c.reduce(s, o), a.content instanceof xi && (a.content.key && i(o, a.content.key), a.content.value && i(o, a.content.value)), o;
    };
    return this.content && (this.content.element && i(n, this.content), Array.isArray(this.content) && this.content.reduce(i, n)), e.isEmpty || (n = n.filter((o) => {
      let a = o.parents.map((c) => c.element);
      for (const c in e) {
        const l = e[c], f = a.indexOf(l);
        if (f !== -1)
          a = a.splice(0, f);
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
    return fL(this.toValue(), e);
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
    if (e instanceof Ri)
      this._content = e;
    else if (e instanceof Qt)
      this.content = e.elements;
    else if (typeof e == "string" || typeof e == "number" || typeof e == "boolean" || e === "null" || e == null)
      this._content = e;
    else if (e instanceof xi)
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
    const r = new Qt();
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
      return new Qt(this.content);
    if (this.content instanceof xi) {
      const e = new Qt([this.content.key]);
      return this.content.value && e.push(this.content.value), e;
    }
    return this.content instanceof Ri ? new Qt([this.content]) : new Qt();
  }
  /**
  * Returns all of the children elements found within the element recursively.
  * @type ArraySlice
  * @see children
  */
  get recursiveChildren() {
    const e = new Qt();
    return this.children.forEach((r) => {
      e.push(r), r.recursiveChildren.forEach((n) => {
        e.push(n);
      });
    }), e;
  }
};
var Kt = pL;
const hL = Kt;
let dL = class extends hL {
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
var mL = dL;
const yL = Kt;
var vL = class extends yL {
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
const gL = Kt;
var bL = class extends gL {
  constructor(e, r, n) {
    super(e, r, n), this.element = "number";
  }
  primitive() {
    return "number";
  }
};
const xL = Kt;
var $L = class extends xL {
  constructor(e, r, n) {
    super(e, r, n), this.element = "boolean";
  }
  primitive() {
    return "boolean";
  }
};
const SL = Ta, wL = Kt, wm = _a;
let ds = class extends wL {
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
    return new wm(this.content.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  reject(e, r) {
    return this.filter(SL(e), r);
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
    return new wm(this.findElements(e, { recursive: !0 }));
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
ds.empty = function() {
  return new this();
};
ds["fantasy-land/empty"] = ds.empty;
typeof Symbol < "u" && (ds.prototype[Symbol.iterator] = function() {
  return this.content[Symbol.iterator]();
});
var lb = ds;
const EL = ja, OL = Kt;
var ub = class extends OL {
  constructor(e, r, n, s) {
    super(new EL(), n, s), this.element = "member", this.key = e, this.value = r;
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
const AL = Ta, PL = _a;
let jL = class fb extends PL {
  map(e, r) {
    return this.elements.map((n) => e.bind(r)(n.value, n.key, n));
  }
  filter(e, r) {
    return new fb(this.elements.filter((n) => e.bind(r)(n.value, n.key, n)));
  }
  reject(e, r) {
    return this.filter(AL(e.bind(r)));
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
var pb = jL;
const TL = Ta, _L = wa, RL = lb, CL = ub, IL = pb;
let FL = class extends RL {
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
    if (_L(e))
      return Object.keys(e).forEach((i) => {
        this.set(i, e[i]);
      }), this;
    const n = e, s = this.getMember(n);
    return s ? s.value = r : this.content.push(new CL(n, r)), this;
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
    return new IL(this.content).filter(e, r);
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
    return this.filter(TL(e), r);
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
var ML = FL;
const DL = Kt;
var NL = class extends DL {
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
const VL = Kt;
var kL = class extends VL {
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
const In = Kt, hb = mL, db = vL, mb = bL, yb = $L, vb = lb, gb = ub, vp = ML, LL = NL, bb = kL, xb = _a, BL = pb, UL = ja;
function Ra(t) {
  return t instanceof In ? t : typeof t == "string" ? new db(t) : typeof t == "number" ? new mb(t) : typeof t == "boolean" ? new yb(t) : t === null ? new hb() : Array.isArray(t) ? new vb(t.map(Ra)) : typeof t == "object" ? new vp(t) : t;
}
In.prototype.ObjectElement = vp;
In.prototype.RefElement = bb;
In.prototype.MemberElement = gb;
In.prototype.refract = Ra;
xb.prototype.refract = Ra;
var $b = {
  Element: In,
  NullElement: hb,
  StringElement: db,
  NumberElement: mb,
  BooleanElement: yb,
  ArrayElement: vb,
  MemberElement: gb,
  ObjectElement: vp,
  LinkElement: LL,
  RefElement: bb,
  refract: Ra,
  ArraySlice: xb,
  ObjectSlice: BL,
  KeyValuePair: UL
};
const HL = mF, qL = UF, GL = JF, zL = QF, JL = wa, Sb = tM, je = $b;
let wb = class {
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
    return this.register("null", je.NullElement).register("string", je.StringElement).register("number", je.NumberElement).register("boolean", je.BooleanElement).register("array", je.ArrayElement).register("object", je.ObjectElement).register("member", je.MemberElement).register("ref", je.RefElement).register("link", je.LinkElement), this.detect(HL, je.NullElement, !1).detect(qL, je.StringElement, !1).detect(GL, je.NumberElement, !1).detect(zL, je.BooleanElement, !1).detect(Array.isArray, je.ArrayElement, !1).detect(JL, je.ObjectElement, !1), this;
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
    return new Sb(this);
  }
};
Sb.prototype.Namespace = wb;
var KL = wb;
const WL = KL, Ye = $b;
var YL = WL, rn = ja, ms = Ye.ArraySlice, lo = Ye.ObjectSlice, XL = Ye.Element, Dt = Ye.StringElement, fu = Ye.NumberElement, Nt = Ye.BooleanElement, pu = Ye.NullElement, ae = Ye.ArrayElement, I = Ye.ObjectElement, Fs = Ye.MemberElement, It = Ye.RefElement, hu = Ye.LinkElement, gp = Ye.refract;
class uo extends Dt {
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
class fo extends Dt {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}
class ft extends ae {
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
    if (ur(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
}
class po extends ae {
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
    const r = new ae([e.start.row, e.start.column, e.start.char]), n = new ae([e.end.row, e.end.column, e.end.char]);
    r.classes.push("position"), n.classes.push("position"), this.push(r).push(n);
  }
}
const QL = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", ZL = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, e3 = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, t3 = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof ae) && e.classes.includes(t), Zt = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, N = (t) => t({
  hasMethod: QL,
  hasBasicElementProps: ZL,
  primitiveEq: e3,
  isElementType: Zt,
  hasClass: t3
}), we = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof XL || t(r) && e(void 0, r)), W = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Dt || t(r) && e("string", r)), bp = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof fu || t(r) && e("number", r)), xp = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof pu || t(r) && e("null", r)), Ms = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Nt || t(r) && e("boolean", r)), Q = N(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof I || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), Ue = N(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof ae && !(n instanceof I) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), dt = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Fs || t(n) && e("member", n) && r(void 0, n)), Eb = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hu || t(n) && e("link", n) && r(void 0, n)), Ob = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof It || t(n) && e("ref", n) && r(void 0, n)), r3 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof uo || t(n) && e("annotation", n) && r("array", n)), n3 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fo || t(n) && e("comment", n) && r("string", n)), Ab = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ft || t(n) && e("parseResult", n) && r("array", n)), Pb = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof po || t(n) && e("sourceMap", n) && r("array", n)), Ar = (t) => Zt("object", t) || Zt("array", t) || Zt("boolean", t) || Zt("number", t) || Zt("string", t) || Zt("null", t) || Zt("member", t), Ds = (t) => Pb(t.meta.get("sourceMap")), s3 = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Ue(r) ? qf(ba(r.toValue()), t) : !1;
}, Ca = (t, e) => t.length === 0 ? !0 : qf(ba(e.classes.toValue()), t), i3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Ds,
  includesClasses: Ca,
  includesSymbols: s3,
  isAnnotationElement: r3,
  isArrayElement: Ue,
  isBooleanElement: Ms,
  isCommentElement: n3,
  isElement: we,
  isLinkElement: Eb,
  isMemberElement: dt,
  isNullElement: xp,
  isNumberElement: bp,
  isObjectElement: Q,
  isParseResultElement: Ab,
  isPrimitiveElement: Ar,
  isRefElement: Ob,
  isSourceMapElement: Pb,
  isStringElement: W
}, Symbol.toStringTag, { value: "Module" }));
class jb extends YL {
  constructor() {
    super(), this.register("annotation", uo), this.register("comment", fo), this.register("parseResult", ft), this.register("sourceMap", po);
  }
}
const Tb = new jb(), Ns = (t) => {
  const e = new jb();
  return vn(t) && e.use(t), e;
}, o3 = () => ({
  predicates: {
    ...i3
  },
  namespace: Tb
}), _b = o3, Ia = (t, e, r) => {
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
}, Z = {}, Vs = (t) => t == null ? void 0 : t.type, Rb = (t) => typeof Vs(t) == "string", $p = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), Fa = (t, {
  visitFnGetter: e = Ia,
  nodeTypeGetter: r = Vs,
  breakSymbol: n = Z,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    enter(l, f, u, d, p, m) {
      let h = l, g = !1;
      const y = {
        ...m,
        replaceWith(v, b) {
          m.replaceWith(v, b), h = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const b = e(t[v], r(h), !1);
          if (typeof b == "function") {
            const S = b.call(t[v], h, f, u, d, p, y);
            if (typeof (S == null ? void 0 : S.then) == "function")
              throw new ut("Async visitor not supported in sync mode", {
                visitor: t[v],
                visitFn: b
              });
            if (S === i)
              c[v] = h;
            else if (S === n)
              c[v] = n;
            else {
              if (S === s)
                return S;
              if (S !== void 0)
                if (o)
                  h = S, g = !0;
                else
                  return S;
            }
          }
        }
      return g ? h : void 0;
    },
    leave(l, f, u, d, p, m) {
      let h = l;
      const g = {
        ...m,
        replaceWith(y, v) {
          m.replaceWith(y, v), h = y;
        }
      };
      for (let y = 0; y < t.length; y += 1)
        if (c[y] === a) {
          const v = e(t[y], r(h), !0);
          if (typeof v == "function") {
            const b = v.call(t[y], h, f, u, d, p, g);
            if (typeof (b == null ? void 0 : b.then) == "function")
              throw new ut("Async visitor not supported in sync mode", {
                visitor: t[y],
                visitFn: v
              });
            if (b === n)
              c[y] = n;
            else if (b !== void 0 && b !== i)
              return b;
          }
        } else
          c[y] === h && (c[y] = a);
    }
  };
}, a3 = (t, {
  visitFnGetter: e = Ia,
  nodeTypeGetter: r = Vs,
  breakSymbol: n = Z,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    async enter(l, f, u, d, p, m) {
      let h = l, g = !1;
      const y = {
        ...m,
        replaceWith(v, b) {
          m.replaceWith(v, b), h = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const b = e(t[v], r(h), !1);
          if (typeof b == "function") {
            const S = await b.call(t[v], h, f, u, d, p, y);
            if (S === i)
              c[v] = h;
            else if (S === n)
              c[v] = n;
            else {
              if (S === s)
                return S;
              if (S !== void 0)
                if (o)
                  h = S, g = !0;
                else
                  return S;
            }
          }
        }
      return g ? h : void 0;
    },
    async leave(l, f, u, d, p, m) {
      let h = l;
      const g = {
        ...m,
        replaceWith(y, v) {
          m.replaceWith(y, v), h = y;
        }
      };
      for (let y = 0; y < t.length; y += 1)
        if (c[y] === a) {
          const v = e(t[y], r(h), !0);
          if (typeof v == "function") {
            const b = await v.call(t[y], h, f, u, d, p, g);
            if (b === n)
              c[y] = n;
            else if (b !== void 0 && b !== i)
              return b;
          }
        } else
          c[y] === h && (c[y] = a);
    }
  };
};
Fa[Symbol.for("nodejs.util.promisify.custom")] = a3;
const Sp = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = Z,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ia,
  nodeTypeGetter: c = Vs,
  nodePredicate: l = Rb,
  nodeCloneFn: f = $p,
  detectCycles: u = !0
} = {}) => {
  const d = r || {};
  let p, m = Array.isArray(t), h = [t], g = -1, y, v = [], b = t;
  const S = [], C = [];
  do {
    g += 1;
    const V = g === h.length;
    let A;
    const M = V && v.length !== 0;
    if (V) {
      if (A = C.length === 0 ? void 0 : S.pop(), b = y, y = C.pop(), M)
        if (m) {
          b = b.slice();
          let E = 0;
          for (const [D, k] of v) {
            const te = D - E;
            k === i ? (b.splice(te, 1), E += 1) : b[te] = k;
          }
        } else {
          b = f(b);
          for (const [E, D] of v)
            b[E] = D;
        }
      g = p.index, h = p.keys, v = p.edits, m = p.inArray, p = p.prev;
    } else if (y !== i && y !== void 0) {
      if (A = m ? g : h[g], b = y[A], b === i || b === void 0)
        continue;
      S.push(A);
    }
    let P;
    if (!Array.isArray(b)) {
      var O;
      if (!l(b))
        throw new ut(`Invalid AST Node:  ${String(b)}`, {
          node: b
        });
      if (u && C.includes(b)) {
        S.pop();
        continue;
      }
      const E = a(e, c(b), V);
      if (E) {
        for (const [k, te] of Object.entries(n))
          e[k] = te;
        const D = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(k, te) {
            typeof te == "function" ? te(k, b, A, y, S, C) : y && (y[A] = k), V || (b = k);
          }
        };
        P = E.call(e, b, A, y, S, C, D);
      }
      if (typeof ((O = P) === null || O === void 0 ? void 0 : O.then) == "function")
        throw new ut("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: E
        });
      if (P === s)
        break;
      if (P === o) {
        if (!V) {
          S.pop();
          continue;
        }
      } else if (P !== void 0 && (v.push([A, P]), !V))
        if (l(P))
          b = P;
        else {
          S.pop();
          continue;
        }
    }
    if (P === void 0 && M && v.push([A, b]), !V) {
      var R;
      p = {
        inArray: m,
        index: g,
        keys: h,
        edits: v,
        prev: p
      }, m = Array.isArray(b), h = m ? b : (R = d[c(b)]) !== null && R !== void 0 ? R : [], g = -1, v = [], y !== i && y !== void 0 && C.push(y), y = b;
    }
  } while (p !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
Sp[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = Z,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ia,
  nodeTypeGetter: c = Vs,
  nodePredicate: l = Rb,
  nodeCloneFn: f = $p,
  detectCycles: u = !0
} = {}) => {
  const d = r || {};
  let p, m = Array.isArray(t), h = [t], g = -1, y, v = [], b = t;
  const S = [], C = [];
  do {
    g += 1;
    const R = g === h.length;
    let V;
    const A = R && v.length !== 0;
    if (R) {
      if (V = C.length === 0 ? void 0 : S.pop(), b = y, y = C.pop(), A)
        if (m) {
          b = b.slice();
          let P = 0;
          for (const [E, D] of v) {
            const k = E - P;
            D === i ? (b.splice(k, 1), P += 1) : b[k] = D;
          }
        } else {
          b = f(b);
          for (const [P, E] of v)
            b[P] = E;
        }
      g = p.index, h = p.keys, v = p.edits, m = p.inArray, p = p.prev;
    } else if (y !== i && y !== void 0) {
      if (V = m ? g : h[g], b = y[V], b === i || b === void 0)
        continue;
      S.push(V);
    }
    let M;
    if (!Array.isArray(b)) {
      if (!l(b))
        throw new ut(`Invalid AST Node: ${String(b)}`, {
          node: b
        });
      if (u && C.includes(b)) {
        S.pop();
        continue;
      }
      const P = a(e, c(b), R);
      if (P) {
        for (const [D, k] of Object.entries(n))
          e[D] = k;
        const E = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(D, k) {
            typeof k == "function" ? k(D, b, V, y, S, C) : y && (y[V] = D), R || (b = D);
          }
        };
        M = await P.call(e, b, V, y, S, C, E);
      }
      if (M === s)
        break;
      if (M === o) {
        if (!R) {
          S.pop();
          continue;
        }
      } else if (M !== void 0 && (v.push([V, M]), !R))
        if (l(M))
          b = M;
        else {
          S.pop();
          continue;
        }
    }
    if (M === void 0 && A && v.push([V, b]), !R) {
      var O;
      p = {
        inArray: m,
        index: g,
        keys: h,
        edits: v,
        prev: p
      }, m = Array.isArray(b), h = m ? b : (O = d[c(b)]) !== null && O !== void 0 ? O : [], g = -1, v = [], y !== i && y !== void 0 && C.push(y), y = b;
    }
  } while (p !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
class Cb extends ut {
  constructor(r, n) {
    super(r, n);
    x(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class c3 extends Cb {
}
const l3 = c3;
class u3 extends Cb {
}
const f3 = u3, F = (t, e = {}) => {
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
    } = t, o = we(s) ? F(s, n) : s, a = we(i) ? F(i, n) : i, c = new rn(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof lo) {
    const s = (a) => F(a, n), i = [...t].map(s), o = new lo(i);
    return r.set(t, o), o;
  }
  if (t instanceof ms) {
    const s = (a) => F(a, n), i = [...t].map(s), o = new ms(i);
    return r.set(t, o), o;
  }
  if (we(t)) {
    const s = Le(t);
    if (r.set(t, s), t.content)
      if (we(t.content))
        s.content = F(t.content, n);
      else if (t.content instanceof rn)
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
  throw new l3("Value provided to cloneDeep function couldn't be cloned", {
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
const Ib = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new rn(e, r);
}, p3 = (t) => {
  const e = [...t];
  return new ms(e);
}, h3 = (t) => {
  const e = [...t];
  return new lo(e);
}, Fb = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = F(t.meta)), t.attributes.length > 0 && (e._attributes = F(t.attributes)), we(t.content)) {
    const r = t.content;
    e.content = Fb(r);
  } else
    Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof rn ? e.content = Ib(t.content) : e.content = t.content;
  return e;
}, Le = (t) => {
  if (t instanceof rn)
    return Ib(t);
  if (t instanceof lo)
    return h3(t);
  if (t instanceof ms)
    return p3(t);
  if (we(t))
    return Fb(t);
  throw new f3("Value provided to cloneShallow function couldn't be cloned", {
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
const Fn = (t) => Q(t) ? "ObjectElement" : Ue(t) ? "ArrayElement" : dt(t) ? "MemberElement" : W(t) ? "StringElement" : Ms(t) ? "BooleanElement" : bp(t) ? "NumberElement" : xp(t) ? "NullElement" : Eb(t) ? "LinkElement" : Ob(t) ? "RefElement" : void 0, Mb = (t) => we(t) ? Le(t) : $p(t), Db = Ie(Fn, Dr), Mn = {
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
class Nb {
  constructor({
    predicate: e = Uf,
    returnOnTrue: r,
    returnOnFalse: n
  } = {}) {
    x(this, "result");
    x(this, "predicate");
    x(this, "returnOnTrue");
    x(this, "returnOnFalse");
    this.result = [], this.predicate = e, this.returnOnTrue = r, this.returnOnFalse = n;
  }
  enter(e) {
    return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
  }
}
const Ve = (t, e, {
  keyMap: r = Mn,
  ...n
} = {}) => Sp(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Fn,
  nodePredicate: Db,
  nodeCloneFn: Mb,
  ...n
});
Ve[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Mn,
  ...n
} = {}) => Sp[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Fn,
  nodePredicate: Db,
  nodeCloneFn: Mb,
  ...n
});
const Vb = {
  toolboxCreator: _b,
  visitorOptions: {
    nodeTypeGetter: Fn,
    exposeEdits: !0
  }
}, Dn = (t, e, r = {}) => {
  if (e.length === 0)
    return t;
  const n = sp(Vb, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Fa(a.map(no({}, "visitor")), {
    ...i
  });
  a.forEach(ps(["pre"], []));
  const l = Ve(t, c, i);
  return a.forEach(ps(["post"], [])), l;
}, d3 = async (t, e, r = {}) => {
  if (e.length === 0)
    return t;
  const n = sp(Vb, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((d) => d(o)), c = Fa[Symbol.for("nodejs.util.promisify.custom")], l = Ve[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(no({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(ps(["pre"], [])));
  const u = await l(t, f, i);
  return await Promise.allSettled(a.map(ps(["post"], []))), u;
};
Dn[Symbol.for("nodejs.util.promisify.custom")] = d3;
var kb = { exports: {} };
(function(t) {
  var e = (() => {
    var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (S, C, O) => C in S ? r(S, C, { enumerable: !0, configurable: !0, writable: !0, value: O }) : S[C] = O, l = (S, C) => {
      for (var O in C || (C = {}))
        o.call(C, O) && c(S, O, C[O]);
      if (i)
        for (var O of i(C))
          a.call(C, O) && c(S, O, C[O]);
      return S;
    }, f = (S, C) => {
      for (var O in C)
        r(S, O, { get: C[O], enumerable: !0 });
    }, u = (S, C, O, R) => {
      if (C && typeof C == "object" || typeof C == "function")
        for (let V of s(C))
          !o.call(S, V) && V !== O && r(S, V, { get: () => C[V], enumerable: !(R = n(C, V)) || R.enumerable });
      return S;
    }, d = (S) => u(r({}, "__esModule", { value: !0 }), S), p = (S, C, O) => (c(S, typeof C != "symbol" ? C + "" : C, O), O), m = {};
    f(m, {
      DEFAULT_OPTIONS: () => y,
      DEFAULT_UUID_LENGTH: () => g,
      default: () => b
    });
    var h = "5.2.0", g = 6, y = {
      dictionary: "alphanum",
      shuffle: !0,
      debug: !1,
      length: g,
      counter: 0
    }, v = class {
      constructor(C = {}) {
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
        }), p(this, "log", (...P) => {
          const E = [...P];
          if (E[0] = `[short-unique-id] ${P[0]}`, this.debug === !0 && typeof console < "u" && console !== null)
            return console.log(...E);
        }), p(this, "_normalizeDictionary", (P, E) => {
          let D;
          if (P && Array.isArray(P) && P.length > 1)
            D = P;
          else {
            D = [];
            let k;
            this.dictIndex = k = 0;
            const te = `_${P}_dict_ranges`, pe = this._dict_ranges[te];
            Object.keys(pe).forEach((Ee) => {
              const B = Ee;
              for (this.dictRange = pe[B], this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1], this.dictIndex = k = this.lowerBound; this.lowerBound <= this.upperBound ? k < this.upperBound : k > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? k += 1 : k -= 1)
                D.push(String.fromCharCode(this.dictIndex));
            });
          }
          return E && (D = D.sort(() => Math.random() - 0.5)), D;
        }), p(this, "setDictionary", (P, E) => {
          this.dict = this._normalizeDictionary(P, E), this.dictLength = this.dict.length, this.setCounter(0);
        }), p(this, "seq", () => this.sequentialUUID()), p(this, "sequentialUUID", () => {
          let P, E, D = "";
          P = this.counter;
          do
            E = P % this.dictLength, P = Math.trunc(P / this.dictLength), D += this.dict[E];
          while (P !== 0);
          return this.counter += 1, D;
        }), p(this, "rnd", (P = this.uuidLength || g) => this.randomUUID(P)), p(this, "randomUUID", (P = this.uuidLength || g) => {
          let E, D, k;
          if (P === null || typeof P > "u" || P < 1)
            throw new Error("Invalid UUID Length Provided");
          for (E = "", k = 0; k < P; k += 1)
            D = parseInt(
              (Math.random() * this.dictLength).toFixed(0),
              10
            ) % this.dictLength, E += this.dict[D];
          return E;
        }), p(this, "fmt", (P, E) => this.formattedUUID(P, E)), p(this, "formattedUUID", (P, E) => {
          const D = {
            $r: this.randomUUID,
            $s: this.sequentialUUID,
            $t: this.stamp
          };
          return P.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (te) => {
              const pe = te.slice(0, 2), Ee = parseInt(te.slice(2), 10);
              return pe === "$s" ? D[pe]().padStart(Ee, "0") : pe === "$t" && E ? D[pe](Ee, E) : D[pe](Ee);
            }
          );
        }), p(this, "availableUUIDs", (P = this.uuidLength) => parseFloat(
          Math.pow([...new Set(this.dict)].length, P).toFixed(0)
        )), p(this, "approxMaxBeforeCollision", (P = this.availableUUIDs(this.uuidLength)) => parseFloat(
          Math.sqrt(Math.PI / 2 * P).toFixed(20)
        )), p(this, "collisionProbability", (P = this.availableUUIDs(this.uuidLength), E = this.uuidLength) => parseFloat(
          (this.approxMaxBeforeCollision(P) / this.availableUUIDs(E)).toFixed(20)
        )), p(this, "uniqueness", (P = this.availableUUIDs(this.uuidLength)) => {
          const E = parseFloat(
            (1 - this.approxMaxBeforeCollision(P) / P).toFixed(20)
          );
          return E > 1 ? 1 : E < 0 ? 0 : E;
        }), p(this, "getVersion", () => this.version), p(this, "stamp", (P, E) => {
          const D = Math.floor(+(E || /* @__PURE__ */ new Date()) / 1e3).toString(16);
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
          const k = P - 9, te = Math.round(Math.random() * (k > 15 ? 15 : k)), pe = this.randomUUID(k);
          return `${pe.substring(0, te)}${D}${pe.substring(te)}${te.toString(16)}`;
        }), p(this, "parseStamp", (P, E) => {
          if (E && !/t0|t[1-9]\d{1,}/.test(E))
            throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
          const D = E ? E.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (te) => {
              const pe = {
                $r: (j) => [...Array(j)].map(() => "r").join(""),
                $s: (j) => [...Array(j)].map(() => "s").join(""),
                $t: (j) => [...Array(j)].map(() => "t").join("")
              }, Ee = te.slice(0, 2), B = parseInt(te.slice(2), 10);
              return pe[Ee](B);
            }
          ).replace(
            /^(.*?)(t{8,})(.*)$/g,
            (te, pe, Ee) => P.substring(pe.length, pe.length + Ee.length)
          ) : P;
          if (D.length === 8)
            return new Date(parseInt(D, 16) * 1e3);
          if (D.length < 10)
            throw new Error("Stamp length invalid");
          const k = parseInt(D.substring(D.length - 1), 16);
          return new Date(parseInt(D.substring(k, k + 8), 16) * 1e3);
        }), p(this, "setCounter", (P) => {
          this.counter = P;
        }), p(this, "validate", (P, E) => {
          const D = E ? this._normalizeDictionary(E) : this.dict;
          return P.split("").every((k) => D.includes(k));
        });
        const O = l(l({}, y), C);
        this.counter = 0, this.debug = !1, this.dict = [], this.version = h;
        const {
          dictionary: R,
          shuffle: V,
          length: A,
          counter: M
        } = O;
        return this.uuidLength = A, this.setDictionary(R, V), this.setCounter(M), this.debug = O.debug, this.log(this.dict), this.log(
          `Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`
        ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this), this;
      }
    };
    p(v, "default", v);
    var b = v;
    return d(m);
  })();
  t.exports = e.default, typeof window < "u" && (e = e.default);
})(kb);
var m3 = kb.exports;
const y3 = /* @__PURE__ */ wn(m3);
class v3 extends ut {
  constructor(r, n) {
    super(r, n);
    x(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class wp {
  constructor({
    length: e = 6
  } = {}) {
    x(this, "uuid");
    x(this, "identityMap");
    this.uuid = new y3({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  }
  identify(e) {
    if (!we(e))
      throw new v3("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
        value: e
      });
    if (e.meta.hasKey("id") && W(e.meta.get("id")) && !e.meta.get("id").equals(""))
      return e.id;
    if (this.identityMap.has(e))
      return this.identityMap.get(e);
    const r = new Dt(this.generateId());
    return this.identityMap.set(e, r), r;
  }
  forget(e) {
    return this.identityMap.has(e) ? (this.identityMap.delete(e), !0) : !1;
  }
  generateId() {
    return this.uuid.randomUUID();
  }
}
new wp();
class g3 extends Array {
  constructor() {
    super(...arguments);
    x(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new fl("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new fl("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new fl("latest method in MediaTypes class is not yet implemented.");
  }
}
const b3 = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return we(t) && (t.meta.length > 0 && (n.meta = F(t.meta)), t.attributes.length > 0 && (n.attributes = F(t.attributes))), Dn(n, r, {
    toolboxCreator: _b,
    visitorOptions: {
      nodeTypeGetter: Fn
    }
  });
}, st = (t) => (e, r = {}) => b3(e, {
  ...r,
  Type: t
});
I.refract = st(I);
ae.refract = st(ae);
Dt.refract = st(Dt);
Nt.refract = st(Nt);
pu.refract = st(pu);
fu.refract = st(fu);
hu.refract = st(hu);
It.refract = st(It);
uo.refract = st(uo);
fo.refract = st(fo);
ft.refract = st(ft);
po.refract = st(po);
const x3 = (t, e) => {
  const r = new Nb({
    predicate: t
  });
  return Ve(e, r), new ms(r.result);
}, Lb = (t, e) => {
  const r = new Nb({
    predicate: t,
    returnOnTrue: Z
  });
  return Ve(e, r), Pg(void 0, [0], r.result);
}, Bb = (t) => typeof (t == null ? void 0 : t.type) == "string" ? t.type : Fn(t), Ub = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...Mn
}, Hb = (t, e, {
  keyMap: r = Ub,
  ...n
} = {}) => Ve(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Bb,
  nodePredicate: Ut,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
Hb[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = Ub,
  ...r
} = {}) => Ve[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: Bb,
  nodePredicate: Ut,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class $3 {
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
class S3 {
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
let w3 = class {
  constructor() {
    x(this, "ObjectElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new S3(e.content);
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
        const r = new $3(e.content);
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
    var n;
    const s = r[3];
    return ((n = s[s.length - 1]) === null || n === void 0 ? void 0 : n.type) === "EphemeralObject" ? Symbol.for("delete-node") : String(e.toValue());
  }
  LinkElement(e) {
    return W(e.href) ? e.href.toValue() : "";
  }
};
const w = (t) => we(t) ? W(t) || bp(t) || Ms(t) || xp(t) ? t.toValue() : Hb(t, new w3()) : t, Ci = (t, e = /* @__PURE__ */ new WeakMap()) => (dt(t) ? (e.set(t.key, t), Ci(t.key, e), e.set(t.value, t), Ci(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), Ci(r, e);
}), e), E3 = (t, e, r) => {
  const n = r.get(t);
  dt(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, O3 = (t, e, r) => {
  const n = r.get(t);
  Q(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, A3 = (t, e, r) => {
  const n = r.get(t);
  Ue(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class P3 {
  constructor({
    element: e
  }) {
    x(this, "element");
    x(this, "edges");
    this.element = e;
  }
  transclude(e, r) {
    var n;
    if (e === this.element)
      return r;
    if (e === r)
      return this.element;
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : Ci(this.element);
    const s = this.edges.get(e);
    if (!ur(s))
      return Q(s) ? O3(e, r, this.edges) : Ue(s) ? A3(e, r, this.edges) : dt(s) && E3(e, r, this.edges), this.element;
  }
}
const j3 = (t, e, r) => new P3({
  element: r
}).transclude(t, e), Ma = (t, e) => {
  const r = mn(t, e);
  return DC((n) => {
    if (vn(n) && wg("$ref", n) && HC(Dr, "$ref", n)) {
      const s = ze(["$ref"], n), i = ap("#/", s);
      return ze(i.split("/"), r);
    }
    return vn(n) ? Ma(n, r) : n;
  }, t);
}, qb = (t, e = Tb) => {
  if (Dr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return vn(t) && wg("element", t) ? e.fromRefract(t) : e.toElement(t);
}, ho = (t) => {
  const e = t.meta.length > 0 ? F(t.meta) : void 0, r = t.attributes.length > 0 ? F(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, mo = (t, e) => e.clone && e.isMergeableElement(t) ? wt(ho(t), t, e) : t, T3 = (t, e) => {
  if (typeof e.customMerge != "function")
    return wt;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : wt;
}, _3 = (t) => typeof t.customMetaMerge != "function" ? (e) => F(e) : t.customMetaMerge, R3 = (t) => typeof t.customAttributesMerge != "function" ? (e) => F(e) : t.customAttributesMerge, C3 = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => mo(n, r)), I3 = (t, e, r) => {
  const n = Q(t) ? ho(t) : ho(e);
  return Q(t) && t.forEach((s, i, o) => {
    const a = Le(o);
    a.value = mo(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = w(i);
    let c;
    if (Q(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const l = t.get(a);
      c = Le(o), c.value = T3(i, r)(l, s);
    } else
      c = Le(o), c.value = mo(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, $i = {
  clone: !0,
  isMergeableElement: (t) => Q(t) || Ue(t),
  arrayElementMerge: C3,
  objectElementMerge: I3,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
};
function wt(t, e, r) {
  var n, s, i;
  const o = {
    ...$i,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : $i.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : $i.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : $i.objectElementMerge;
  const a = Ue(e), c = Ue(t);
  if (!(a === c))
    return mo(e, o);
  const f = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return f.meta = _3(o)(t.meta, e.meta), f.attributes = R3(o)(t.attributes, e.attributes), f;
}
wt.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new I() : t.reduce((r, n) => wt(r, n, e), ho(t[0]));
};
class Ep extends me {
}
class Gb extends Ep {
}
const F3 = async (t, e) => {
  let r = t, n = !1;
  if (!Ab(t)) {
    const o = Le(t);
    o.classes.push("result"), r = new ft([o]), n = !0;
  }
  const s = new hs({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await pp("canDereference", [s, e], e.dereference.strategies);
  if (Cs(i))
    throw new Gb(s.uri);
  try {
    const {
      result: o
    } = await hp("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new Ep(`Error while dereferencing file "${s.uri}"`, {
      cause: o
    });
  }
};
let ks = class {
  constructor({
    name: e,
    allowEmpty: r = !0,
    sourceMap: n = !1,
    fileExtensions: s = [],
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
    this.name = e, this.allowEmpty = r, this.sourceMap = n, this.fileExtensions = s, this.mediaTypes = i;
  }
};
class M3 {
  constructor({
    name: e
  }) {
    x(this, "name");
    this.name = e;
  }
}
class D3 extends M3 {
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
    x(this, "timeout");
    x(this, "redirects");
    x(this, "withCredentials");
    this.timeout = s, this.redirects = i, this.withCredentials = o;
  }
  // eslint-disable-next-line class-methods-use-this
  canRead(r) {
    return $a(r.uri);
  }
}
class N3 {
  constructor({
    name: e
  }) {
    x(this, "name");
    this.name = e;
  }
}
class V3 {
  constructor({
    name: e
  }) {
    x(this, "name");
    this.name = e;
  }
}
class vl extends Array {
  includesCycle(e) {
    return this.filter((r) => r.has(e)).length > 1;
  }
  includes(e, r) {
    return e instanceof Set ? super.includes(e, r) : this.some((n) => n.has(e));
  }
  findItem(e) {
    for (const r of this)
      for (const n of r)
        if (we(n) && e(n))
          return n;
  }
}
let Ft = class {
  constructor({
    uri: e,
    depth: r = 0,
    refSet: n,
    value: s
  }) {
    x(this, "uri");
    x(this, "depth");
    x(this, "value");
    x(this, "refSet");
    x(this, "errors");
    this.uri = e, this.value = s, this.depth = r, this.refSet = n, this.errors = [];
  }
};
class zb extends me {
}
class k3 extends zb {
}
const L3 = k3;
class B3 extends me {
}
class Op extends B3 {
}
class U3 extends zb {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
const H3 = U3;
class nn extends Ep {
}
class q3 extends dp {
}
class Vt extends su {
}
const G3 = async (t, e = {}) => {
  const r = Gg(qg, e);
  return F3(t, r);
};
function Nn(t) {
  return Object.prototype.toString.call(t);
}
function z3(t) {
  return Nn(t) === "[object Date]";
}
function J3(t) {
  return Nn(t) === "[object RegExp]";
}
function K3(t) {
  return Nn(t) === "[object Error]";
}
function W3(t) {
  return Nn(t) === "[object Boolean]";
}
function Y3(t) {
  return Nn(t) === "[object Number]";
}
function X3(t) {
  return Nn(t) === "[object String]";
}
var Jb = Array.isArray || function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
};
function Da(t, e) {
  if (t.forEach)
    return t.forEach(e);
  for (var r = 0; r < t.length; r++)
    e(t[r], r, t);
}
var Q3 = Object.keys || function(e) {
  var r = [];
  for (var n in e)
    r.push(n);
  return r;
}, Z3 = Object.prototype.propertyIsEnumerable, Em = Object.getOwnPropertySymbols;
function Na(t) {
  var e = Q3(t);
  if (Em)
    for (var r = Em(t), n = 0; n < r.length; n++)
      Z3.call(t, r[n]) && e.push(r[n]);
  return e;
}
var Va = Object.prototype.hasOwnProperty || function(t, e) {
  return e in t;
};
function Kb(t) {
  if (typeof t == "object" && t !== null) {
    var e;
    if (Jb(t))
      e = [];
    else if (z3(t))
      e = new Date(t.getTime ? t.getTime() : t);
    else if (J3(t))
      e = new RegExp(t);
    else if (K3(t))
      e = { message: t.message };
    else if (W3(t) || Y3(t) || X3(t))
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
    return Da(Na(t), function(s) {
      e[s] = t[s];
    }), e;
  }
  return t;
}
function Wb(t, e, r) {
  var n = [], s = [], i = !0;
  return function o(a) {
    var c = r ? Kb(a) : a, l = {}, f = !0, u = {
      node: c,
      node_: a,
      path: [].concat(n),
      parent: s[s.length - 1],
      parents: s,
      key: n[n.length - 1],
      isRoot: n.length === 0,
      level: n.length,
      circular: null,
      update: function(m, h) {
        u.isRoot || (u.parent.node[u.key] = m), u.node = m, h && (f = !1);
      },
      delete: function(m) {
        delete u.parent.node[u.key], m && (f = !1);
      },
      remove: function(m) {
        Jb(u.parent.node) ? u.parent.node.splice(u.key, 1) : delete u.parent.node[u.key], m && (f = !1);
      },
      keys: null,
      before: function(m) {
        l.before = m;
      },
      after: function(m) {
        l.after = m;
      },
      pre: function(m) {
        l.pre = m;
      },
      post: function(m) {
        l.post = m;
      },
      stop: function() {
        i = !1;
      },
      block: function() {
        f = !1;
      }
    };
    if (!i)
      return u;
    function d() {
      if (typeof u.node == "object" && u.node !== null) {
        (!u.keys || u.node_ !== u.node) && (u.keys = Na(u.node)), u.isLeaf = u.keys.length === 0;
        for (var m = 0; m < s.length; m++)
          if (s[m].node_ === a) {
            u.circular = s[m];
            break;
          }
      } else
        u.isLeaf = !0, u.keys = null;
      u.notLeaf = !u.isLeaf, u.notRoot = !u.isRoot;
    }
    d();
    var p = e.call(u, u.node);
    return p !== void 0 && u.update && u.update(p), l.before && l.before.call(u, u.node), f && (typeof u.node == "object" && u.node !== null && !u.circular && (s.push(u), d(), Da(u.keys, function(m, h) {
      n.push(m), l.pre && l.pre.call(u, u.node[m], m);
      var g = o(u.node[m]);
      r && Va.call(u.node, m) && (u.node[m] = g.node), g.isLast = h === u.keys.length - 1, g.isFirst = h === 0, l.post && l.post.call(u, g), n.pop();
    }), s.pop()), l.after && l.after.call(u, u.node)), u;
  }(t).node;
}
function tt(t) {
  this.value = t;
}
tt.prototype.get = function(t) {
  for (var e = this.value, r = 0; r < t.length; r++) {
    var n = t[r];
    if (!e || !Va.call(e, n))
      return;
    e = e[n];
  }
  return e;
};
tt.prototype.has = function(t) {
  for (var e = this.value, r = 0; r < t.length; r++) {
    var n = t[r];
    if (!e || !Va.call(e, n))
      return !1;
    e = e[n];
  }
  return !0;
};
tt.prototype.set = function(t, e) {
  for (var r = this.value, n = 0; n < t.length - 1; n++) {
    var s = t[n];
    Va.call(r, s) || (r[s] = {}), r = r[s];
  }
  return r[t[n]] = e, e;
};
tt.prototype.map = function(t) {
  return Wb(this.value, t, !0);
};
tt.prototype.forEach = function(t) {
  return this.value = Wb(this.value, t, !1), this.value;
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
      var i = Kb(n);
      return t.push(n), e.push(i), Da(Na(n), function(o) {
        i[o] = r(n[o]);
      }), t.pop(), e.pop(), i;
    }
    return n;
  }(this.value);
};
function Yb(t) {
  return new tt(t);
}
Da(Na(tt.prototype), function(t) {
  Yb[t] = function(e) {
    var r = [].slice.call(arguments, 1), n = new tt(e);
    return n[t].apply(n, r);
  };
});
var eB = Yb;
const tB = /* @__PURE__ */ wn(eB), rB = ["properties"], nB = ["properties"], sB = [
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
], iB = ["schema/example", "items/example"];
function Xb(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    rB.indexOf(e) > -1 && nB.indexOf(r) === -1 || sB.indexOf(n) > -1 || iB.some((s) => n.indexOf(s) > -1)
  );
}
function oB(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return tB(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), l = du(this.node, n(a));
      i.push(r.replace(c, l));
    }
  }), i;
}
function du(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if ($a(s))
    o = Pe(s, i);
  else {
    const a = Pe(Fi, s), l = Pe(a, i).replace(Fi, "");
    o = i.startsWith("/") ? l : l.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const aB = /^([a-z]+:\/\/|\/\/)/i;
class bn extends ut {
}
const Rt = {}, Om = /* @__PURE__ */ new WeakMap(), cB = [
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
], lB = (t) => cB.some((e) => e(t)), uB = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (Xb(i) || lB(i))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof t != "string")
      return new bn("$ref: must be a string (JSON-Ref)", {
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    const a = Zb(t), c = a[0], l = a[1] || "";
    let f;
    try {
      f = o || c ? Qb(c, o) : null;
    } catch (h) {
      return mu(h, {
        pointer: l,
        $ref: t,
        basePath: f,
        fullPath: r
      });
    }
    let u, d;
    if (mB(l, f, i, n) && !s.useCircularStructures) {
      const h = du(t, f);
      return t === h ? null : ne.replace(r, h);
    }
    if (f == null ? (d = Pp(l), u = n.get(d), typeof u > "u" && (u = new bn(`Could not resolve reference: ${t}`, {
      pointer: l,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (u = ex(f, l), u.__value != null ? u = u.__value : u = u.catch((h) => {
      throw mu(h, {
        pointer: l,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), u instanceof Error)
      return [ne.remove(r), u];
    const p = du(t, f), m = ne.replace(i, u, {
      $$ref: p
    });
    if (f && f !== o)
      return [m, ne.context(i, {
        baseDoc: f
      })];
    try {
      if (!yB(n.state, m) || s.useCircularStructures)
        return m;
    } catch {
      return null;
    }
  }
}, Ap = Object.assign(uB, {
  docCache: Rt,
  absoluteify: Qb,
  clearCache: fB,
  JSONRefError: bn,
  wrapError: mu,
  getDoc: tx,
  split: Zb,
  extractFromDoc: ex,
  fetchJSON: pB,
  extract: yu,
  jsonPointerToArray: Pp,
  unescapeJsonPointerToken: rx
});
function Qb(t, e) {
  if (!aB.test(t)) {
    if (!e)
      throw new bn(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return Pe(e, t);
  }
  return t;
}
function mu(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new bn(`Could not resolve reference: ${r}`, {
    ...e,
    cause: t
  });
}
function Zb(t) {
  return (t + "").split("#");
}
function ex(t, e) {
  const r = Rt[t];
  if (r && !ne.isPromise(r))
    try {
      const n = yu(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return tx(t).then((n) => yu(e, n));
}
function fB(t) {
  typeof t < "u" ? delete Rt[t] : Object.keys(Rt).forEach((e) => {
    delete Rt[e];
  });
}
function tx(t) {
  const e = Rt[t];
  return e ? ne.isPromise(e) ? e : Promise.resolve(e) : (Rt[t] = Ap.fetchJSON(t).then((r) => (Rt[t] = r, r)), Rt[t]);
}
function pB(t) {
  return fetch(t, {
    headers: {
      Accept: Hm
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => un.load(e));
}
function yu(t, e) {
  const r = Pp(t);
  if (r.length < 1)
    return e;
  const n = ne.getIn(e, r);
  if (typeof n > "u")
    throw new bn(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function Pp(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(rx);
}
function rx(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function nx(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function hB(t) {
  return t.length === 0 ? "" : `/${t.map(nx).join("/")}`;
}
const dB = (t) => !t || t === "/" || t === "#";
function gl(t, e) {
  if (dB(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function mB(t, e, r, n) {
  let s = Om.get(n);
  s || (s = {}, Om.set(n, s));
  const i = hB(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && gl(a, t))
    return !0;
  let l = "";
  if (r.some((u) => (l = `${l}/${nx(u)}`, s[l] && s[l].some((d) => gl(d, o) || gl(o, d)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function yB(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return ne.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const vB = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (Xb(i))
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
    return c.push(n.replace(i, {})), t.forEach((l, f) => {
      if (!n.isObject(l)) {
        if (o)
          return null;
        o = !0;
        const p = new TypeError("Elements in allOf must be objects");
        return p.fullPath = r, c.push(p);
      }
      c.push(n.mergeDeep(i, l));
      const u = r.slice(0, -1), d = oB(l, u, {
        getBaseUrlForNodePath: (p) => n.getContext([...r, f, ...p]).baseDoc,
        specmap: n
      });
      c.push(...d);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, gB = {
  key: "parameters",
  plugin: (t, e, r, n) => {
    if (Array.isArray(t) && t.length) {
      const s = Object.assign([], t), i = r.slice(0, -1), o = {
        ...ne.getIn(n.spec, i)
      };
      for (let a = 0; a < t.length; a += 1) {
        const c = t[a];
        try {
          s[a].default = n.parameterMacro(o, c);
        } catch (l) {
          const f = new Error(l);
          return f.fullPath = r, f;
        }
      }
      return ne.replace(r, s);
    }
    return ne.replace(r, t);
  }
}, bB = {
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
    return ne.replace(r, s);
  }
};
class xB {
  constructor(e) {
    this.root = bl(e || {});
  }
  set(e, r) {
    const n = this.getParent(e, !0);
    if (!n) {
      yo(this.root, r, null);
      return;
    }
    const s = e[e.length - 1], {
      children: i
    } = n;
    if (i[s]) {
      yo(i[s], r, n);
      return;
    }
    i[s] = bl(r, n);
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
      return !i[s] && r && (i[s] = bl(null, n)), i[s];
    }, this.root);
  }
}
function bl(t, e) {
  return yo({
    children: {}
  }, t, e);
}
function yo(t, e, r) {
  return t.value = e || {}, t.protoValue = r ? {
    ...r.protoValue,
    ...t.value
  } : t.value, Object.keys(t.children).forEach((n) => {
    const s = t.children[n];
    t.children[n] = yo(s, s.value, t);
  }), t;
}
const Am = 100, $B = 3e3, Pm = () => {
};
class SB {
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
      contextTree: new xB(),
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
      pathDiscriminator: n
    } = this;
    let s = null, i;
    return e[this.pluginProp] ? (s = e, i = e[this.pluginProp]) : ne.isFunction(e) ? i = e : ne.isObject(e) && (i = o(e)), Object.assign(i.bind(s), {
      pluginName: e.name || r,
      isGenerator: ne.isGenerator(i)
    });
    function o(a) {
      const c = (l, f) => Array.isArray(l) ? l.every((u, d) => u === f[d]) : !0;
      return function* (f, u) {
        const d = {};
        for (const [m, h] of f.filter(ne.isAdditiveMutation).entries())
          if (m < $B)
            yield* p(h.value, h.path, h);
          else
            return;
        function* p(m, h, g) {
          if (!ne.isObject(m))
            a.key === h[h.length - 1] && (yield a.plugin(m, a.key, h, u));
          else {
            const y = h.length - 1, v = h[y], b = h.indexOf("properties"), S = v === "properties" && y === b, C = u.allowMetaPatches && d[m.$$ref];
            for (const O of Object.keys(m)) {
              const R = m[O], V = h.concat(O), A = ne.isObject(R), M = m.$$ref;
              if (C || A && (u.allowMetaPatches && M && (d[M] = !0), yield* p(R, V, g)), !S && O === a.key) {
                const P = c(n, h);
                (!n || P) && (yield a.plugin(R, O, V, u, g));
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
      } catch (n) {
        console.error(n), this.errors.push(n);
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
    if (e.pluginCount = e.pluginCount || /* @__PURE__ */ new WeakMap(), e.pluginCount.set(r, (e.pluginCount.get(r) || 0) + 1), e.pluginCount[r] > Am)
      return Promise.resolve({
        spec: e.state,
        errors: e.errors.concat(new Error(`We've reached a hard limit of ${Am} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const i = this.promisedPatches.map((o) => o.value);
      return Promise.all(i.map((o) => o.then(Pm, Pm))).then(() => this.dispatch());
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
      i && (i = ne.fullyNormalizeArray(i), e.updatePatches(i, r));
    }
  }
}
function wB(t) {
  return new SB(t).dispatch();
}
const vr = {
  refs: Ap,
  allOf: vB,
  parameters: gB,
  properties: bB
}, sx = (t) => t.replace(/\W/gi, "_");
function EB(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${sx(t)}`;
}
function Ls(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? sx(t.operationId) : EB(e, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function ka(t) {
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
      const l = Ls(c, s, a);
      if (l) {
        n[l] ? n[l].push(c) : n[l] = [c];
        const f = n[l];
        if (f.length > 1)
          f.forEach((u, d) => {
            u.__originalOperationId = u.__originalOperationId || u.operationId, u.operationId = `${l}${d + 1}`;
          });
        else if (typeof c.operationId < "u") {
          const u = f[0];
          u.__originalOperationId = u.__originalOperationId || c.operationId, u.operationId = l;
        }
      }
      if (a !== "parameters") {
        const f = [], u = {};
        for (const d in e)
          (d === "produces" || d === "consumes" || d === "security") && (u[d] = e[d], f.push(u));
        if (o && (u.parameters = o, f.push(u)), f.length) {
          for (const d of f)
            for (const p in d)
              if (!c[p])
                c[p] = d[p];
              else if (p === "parameters")
                for (const m of d[p])
                  c[p].some((g) => g.name && g.name === m.name || g.$ref && g.$ref === m.$ref || g.$$ref && g.$$ref === m.$$ref || g === m) || c[p].push(m);
        }
      }
    }
  }
  return e.$$normalized = !0, t;
}
async function jp(t) {
  const {
    spec: e,
    mode: r,
    allowMetaPatches: n = !0,
    pathDiscriminator: s,
    modelPropertyMacro: i,
    parameterMacro: o,
    requestInterceptor: a,
    responseInterceptor: c,
    skipNormalization: l,
    useCircularStructures: f
  } = t, u = vf(t), d = nv(t);
  return p(e);
  function p(m) {
    u && (vr.refs.docCache[u] = m), vr.refs.fetchJSON = rv(d, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const h = [vr.refs];
    return typeof o == "function" && h.push(vr.parameters), typeof i == "function" && h.push(vr.properties), r !== "strict" && h.push(vr.allOf), wB({
      spec: m,
      context: {
        baseDoc: u
      },
      plugins: h,
      allowMetaPatches: n,
      // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator: s,
      // for lazy resolution
      parameterMacro: o,
      modelPropertyMacro: i,
      useCircularStructures: f
      // eslint-disable-next-line camelcase
    }).then(l ? async (g) => g : ka);
  }
}
function OB() {
  vr.refs.clearCache();
}
const ix = {
  name: "generic",
  match() {
    return !0;
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = ka({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return jp(t);
  }
};
async function AB(t) {
  return jp(t);
}
const ox = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, ax = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.([0123])(?:-rc[012])?$/.test(e);
  } catch {
    return !1;
  }
}, cx = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Tp = (t) => ax(t) || cx(t), lx = {
  name: "openapi-2",
  match({
    spec: t
  }) {
    return ox(t);
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = ka({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return AB(t);
  }
};
async function PB(t) {
  return jp(t);
}
const ux = {
  name: "openapi-3-0",
  match({
    spec: t
  }) {
    return ax(t);
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = ka({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return PB(t);
  }
}, jB = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = vf(t), i = nv(t), o = e || await rv(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((l) => l.match(a)).resolve(a);
}, fx = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return jB(r);
}, TB = fx({
  strategies: [ux, lx, ix]
}), _B = async (t, e, r = {}) => {
  const {
    returnEntireTree: n,
    baseDoc: s,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: l,
    strategies: f
  } = r, u = {
    spec: t,
    pathDiscriminator: e,
    baseDoc: s,
    requestInterceptor: i,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: l,
    strategies: f
  }, p = f.find((h) => h.match(u)).normalize(u), m = await TB({
    ...u,
    spec: p,
    allowMetaPatches: !0,
    skipNormalization: !0
  });
  return !n && Array.isArray(e) && e.length && (m.spec = e.reduce((h, g) => h == null ? void 0 : h[g], m.spec) || null), m;
}, RB = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return _B(e, r, s);
};
class _p extends ut {
}
class CB extends _p {
  constructor(r, n) {
    super(r, n);
    x(this, "pointer");
    typeof n < "u" && (this.pointer = n.pointer);
  }
}
const vu = CB;
class IB extends _p {
  constructor(r, n) {
    super(r, n);
    x(this, "tokens");
    typeof n < "u" && (this.tokens = [...n.tokens]);
  }
}
const FB = IB;
class MB extends _p {
  constructor(r, n) {
    super(r, n);
    x(this, "pointer");
    x(this, "tokens");
    x(this, "failedToken");
    x(this, "failedTokenPosition");
    x(this, "element");
    typeof n < "u" && (this.pointer = n.pointer, Array.isArray(n.tokens) && (this.tokens = [...n.tokens]), this.failedToken = n.failedToken, this.failedTokenPosition = n.failedTokenPosition, this.element = n.element);
  }
}
const Wn = MB, DB = Ie(yn(/~/g, "~0"), yn(/\//g, "~1"), encodeURIComponent), NB = DB, VB = (t) => {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, kB = Ie(yn(/~1/g, "/"), yn(/~0/g, "~"), VB), LB = kB, BB = (t) => {
  if (Mg(t))
    return [];
  if (!_g("/", t))
    throw new vu(`Invalid JSON Pointer "${t}". JSON Pointers must begin with "/"`, {
      pointer: t
    });
  try {
    const e = Ie(ip("/"), js(LB))(t);
    return $g(e);
  } catch (e) {
    throw new vu(`JSON Pointer parsing of "${t}" encountered an error.`, {
      pointer: t,
      cause: e
    });
  }
}, UB = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, Qe = (t) => {
  const e = UB(t);
  return ap("#", e);
}, HB = (t) => {
  try {
    return t.length === 0 ? "" : `/${t.map(NB).join("/")}`;
  } catch (e) {
    throw new FB("JSON Pointer compilation of tokens encountered an error.", {
      tokens: t,
      cause: e
    });
  }
}, px = HB, ct = (t, e) => {
  let r;
  try {
    r = BB(t);
  } catch (n) {
    throw new Wn(`JSON Pointer evaluation failed while parsing the pointer "${t}".`, {
      pointer: t,
      element: F(e),
      cause: n
    });
  }
  return r.reduce((n, s, i) => {
    if (Q(n)) {
      if (!n.hasKey(s))
        throw new Wn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ObjectElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: F(n)
        });
      return n.get(s);
    }
    if (Ue(n)) {
      if (!(s in n.content) || !II(Number(s)))
        throw new Wn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ArrayElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: F(n)
        });
      return n.get(Number(s));
    }
    throw new Wn(`JSON Pointer evaluation failed while evaluating token "${s}" against an unexpected Element`, {
      pointer: t,
      tokens: r,
      failedToken: s,
      failedTokenPosition: i,
      element: F(n)
    });
  }, e);
};
class Rp extends g3 {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return ya(this.filterByFormat(e));
  }
}
const xn = new Rp("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
let Bs = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "callback";
  }
}, Us = class extends I {
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
}, Hs = class extends I {
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
}, La = class extends I {
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
}, Ba = class extends I {
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
}, qs = class extends I {
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
}, Gs = class extends I {
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
}, Vn = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "header";
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new Nt(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Nt(!1);
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
let zs = class extends I {
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
}, Js = class extends I {
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
}, Ks = class extends I {
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
}, Ws = class extends I {
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
}, Ua = class extends I {
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
}, Ha = class extends I {
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
}, Ys = class extends Dt {
  constructor(e, r, n) {
    super(e, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
class qa extends I {
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
let Xs = class extends I {
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
    return this.hasKey("deprecated") ? this.get("deprecated") : new Nt(!1);
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
}, kn = class extends I {
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
    return this.hasKey("required") ? this.get("required") : new Nt(!1);
  }
  set required(e) {
    this.set("required", e);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Nt(!1);
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
Object.defineProperty(kn.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Qs = class extends I {
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
}, Zs = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "paths";
  }
}, ei = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "reference", this.classes.push("openapi-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}, ti = class extends I {
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
    return this.hasKey("required") ? this.get("required") : new Nt(!1);
  }
  set required(e) {
    this.set("required", e);
  }
}, ri = class extends I {
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
}, ni = class extends I {
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
class si extends I {
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
class Ga extends I {
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
class za extends I {
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
class Ja extends I {
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
const qB = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", si), e.register("jSONReference", Ga), e.register("media", za), e.register("linkDescription", Ja), e;
  }
}, GB = qB, zB = (t) => {
  if (we(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, JB = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Mn
};
let hx = class {
  constructor(e) {
    x(this, "element");
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = wt(r.meta, e.meta), Ds(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = wt(r.attributes, e.attributes));
  }
}, KB = class extends hx {
  enter(e) {
    return this.element = F(e), Z;
  }
};
const xe = KB, dx = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, ys = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : ys(r, [...e, r]);
}, WB = (...t) => {
  if (t.length === 0)
    return;
  let e;
  const r = t.map((n) => ys(n));
  for (; r.every((n) => n.length > 0); ) {
    const n = r.map((i) => i.pop()), s = n[0];
    if (n.every((i) => i === s))
      e = s;
    else
      break;
  }
  return e;
}, jm = (t, e, r = []) => {
  var n;
  const s = (n = WB(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = ys(s);
  for (let a of t) {
    let c = ys(a);
    for (let l = c.length - 1; l >= 0; l--) {
      let f = c[l];
      o.indexOf(f) === -1 && (dx(i, f, ["constructor", ...r]), o.push(f));
    }
  }
  return i.constructor = e, i;
}, gu = (t) => t.filter((e, r) => t.indexOf(e) == r), mx = /* @__PURE__ */ new WeakMap(), YB = (t) => mx.get(t), XB = (t, e) => mx.set(t, e), Tm = (t, e) => {
  var r, n;
  const s = gu([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = gu([...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, _m = (t, e) => {
  var r, n, s, i;
  return {
    property: Tm((r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}, (n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}),
    method: Tm((s = t == null ? void 0 : t.method) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, QB = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: gu([...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : []]),
    static: _m((s = t == null ? void 0 : t.static) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: _m((o = t == null ? void 0 : t.instance) !== null && o !== void 0 ? o : {}, (a = e == null ? void 0 : e.instance) !== null && a !== void 0 ? a : {})
  };
}, ZB = /* @__PURE__ */ new Map(), eU = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = ys(s.prototype).map((l) => l.constructor), o = (e = YB(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((l) => !r.has(l));
      for (let l of c)
        n.add(l);
      r.add(s), n.delete(s);
    }
  return [...r];
}, tU = (...t) => {
  const e = eU(...t).map((r) => ZB.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => QB(r, n));
};
function _(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      dx(this, new c(...a));
  }
  i.prototype = jm(s, i), Object.setPrototypeOf(
    i,
    jm(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = tU(...t);
    for (let c of (e = a == null ? void 0 : a.class) !== null && e !== void 0 ? e : []) {
      const l = c(o);
      l && (o = l);
    }
    Rm((r = a == null ? void 0 : a.static) !== null && r !== void 0 ? r : {}, o), Rm((n = a == null ? void 0 : a.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return XB(o, t), o;
}
const Rm = (t, e) => {
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
let fr = class extends hx {
  constructor({
    specObj: r,
    ...n
  }) {
    super({
      ...n
    });
    x(this, "specObj");
    x(this, "passingOptionsNames", ["specObj"]);
    this.specObj = r;
  }
  retrievePassingOptions() {
    return jg(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = ze(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return va(Gt, ["visitors", ...r], this.specObj) ? ze(["visitors", ...r], this.specObj) : ze(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof xe && (i == null ? void 0 : i.constructor) === xe ? F(n) : (Ve(n, i, s), i.element);
  }
}, vs = class extends fr {
  constructor({
    specPath: r,
    ignoredFields: n,
    ...s
  }) {
    super({
      ...s
    });
    x(this, "specPath");
    x(this, "ignoredFields");
    this.specPath = r, this.ignoredFields = n || [];
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (W(o) && s.includes(w(o)) && !this.ignoredFields.includes(w(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", w(o)], i), l = new Fs(F(o), c);
        this.copyMetaAndAttributes(a, l), l.classes.push("fixed-field"), this.element.content.push(l);
      } else
        this.ignoredFields.includes(w(o)) || this.element.content.push(F(a));
    }), this.copyMetaAndAttributes(r, this.element), Z;
  }
};
class rU extends _(vs, xe) {
  constructor(e) {
    super(e), this.element = new si(), this.specPath = U(["document", "objects", "JSONSchema"]);
  }
}
const nU = rU;
let Wt = class {
  constructor({
    parent: e
  }) {
    x(this, "parent");
    this.parent = e;
  }
};
const Et = (t) => Q(t) && t.hasKey("$ref");
let sU = class extends _(fr, Wt, xe) {
  ObjectElement(e) {
    const r = Et(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), Z;
  }
  ArrayElement(e) {
    return this.element = new ae(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = Et(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
const iU = sU;
class oU extends xe {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
const aU = oU;
let cU = class extends fr {
  constructor({
    specPath: r,
    ignoredFields: n,
    fieldPatternPredicate: s,
    ...i
  }) {
    super({
      ...i
    });
    x(this, "specPath");
    x(this, "ignoredFields");
    x(this, "fieldPatternPredicate", Uf);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (!this.ignoredFields.includes(w(s)) && this.fieldPatternPredicate(w(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new Fs(F(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else
        this.ignoredFields.includes(w(s)) || this.element.content.push(F(i));
    }), this.copyMetaAndAttributes(r, this.element), Z;
  }
}, Ka = class extends cU {
  constructor(e) {
    super(e), this.fieldPatternPredicate = op;
  }
}, lU = class extends _(Ka, Wt, xe) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => Et(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
const uU = lU;
let fU = class extends _(Ka, Wt, xe) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => Et(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
const pU = fU;
class hU extends _(Ka, Wt, xe) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => Et(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
const dU = hU;
let mU = class extends xe {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
};
const yU = mU;
let vU = class extends xe {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
};
const gU = vU;
let bU = class extends _(fr, Wt, xe) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = Et(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
const xU = bU;
let $U = class extends _(fr, Wt, xe) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = Et(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
const SU = $U;
let wU = class extends _(fr, Wt, xe) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = Et(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
const EU = wU;
class OU extends _(Ka, Wt, xe) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => Et(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
const AU = OU;
let PU = class extends _(fr, Wt, xe) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-links");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "LinkDescription"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
const jU = PU;
class TU extends _(vs, xe) {
  constructor(e) {
    super(e), this.element = new Ga(), this.specPath = U(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = vs.prototype.ObjectElement.call(this, e);
    return W(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
const _U = TU;
let RU = class extends xe {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
};
const CU = RU;
let IU = class extends fr {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    x(this, "alternator");
    this.alternator = r;
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => tp(i, U(o), ga)), s = Ng(n)(r);
    return this.element = this.toRefractedElement(s, r), Z;
  }
}, FU = class extends IU {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: Et,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: Ut,
      specPath: ["document", "objects", "JSONSchema"]
    }];
  }
};
const Jr = FU;
class MU extends _(vs, xe) {
  constructor(e) {
    super(e), this.element = new za(), this.specPath = U(["document", "objects", "Media"]);
  }
}
const DU = MU;
class NU extends _(vs, xe) {
  constructor(e) {
    super(e), this.element = new Ja(), this.specPath = U(["document", "objects", "LinkDescription"]);
  }
}
const VU = NU, Yt = {
  visitors: {
    value: xe,
    JSONSchemaOrJSONReferenceVisitor: Jr,
    document: {
      objects: {
        JSONSchema: {
          $visitor: nU,
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
            items: iU,
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
            required: aU,
            properties: uU,
            additionalProperties: Jr,
            patternProperties: pU,
            dependencies: dU,
            // validation keywords for any instance type
            enum: yU,
            type: gU,
            allOf: xU,
            anyOf: SU,
            oneOf: EU,
            not: Jr,
            definitions: AU,
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
            links: jU,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: _U,
          fixedFields: {
            $ref: CU
          }
        },
        Media: {
          $visitor: DU,
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
          $visitor: VU,
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
}, kU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof si || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), LU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ga || t(n) && e("JSONReference", n) && r("object", n)), BU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof za || t(n) && e("media", n) && r("object", n)), UU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ja || t(n) && e("linkDescription", n) && r("object", n)), HU = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: LU,
  isJSONSchemaElement: kU,
  isLinkDescriptionElement: UU,
  isMediaElement: BU
}, Symbol.toStringTag, { value: "Module" })), qU = () => {
  const t = Ns(GB);
  return {
    predicates: {
      ...HU,
      isStringElement: W
    },
    namespace: t
  };
}, GU = qU, zU = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Yt
} = {}) => {
  const s = gp(t), i = Ma(n), o = ze(e, i), a = new o({
    specObj: i
  });
  return Ve(s, a), Dn(a.element, r, {
    toolboxCreator: GU,
    visitorOptions: {
      keyMap: JB,
      nodeTypeGetter: zB
    }
  });
}, Wa = (t) => (e, r = {}) => zU(e, {
  specPath: t,
  ...r
});
si.refract = Wa(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Ga.refract = Wa(["visitors", "document", "objects", "JSONReference", "$visitor"]);
za.refract = Wa(["visitors", "document", "objects", "Media", "$visitor"]);
Ja.refract = Wa(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let Ya = class extends si {
  constructor(e, r, n) {
    super(e, r, n), this.element = "schema", this.classes.push("json-schema-draft-4");
  }
  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    throw new _e("idProp getter in Schema class is not not supported.");
  }
  set idProp(e) {
    throw new _e("idProp setter in Schema class is not not supported.");
  }
  get $schema() {
    throw new _e("$schema getter in Schema class is not not supported.");
  }
  set $schema(e) {
    throw new _e("$schema setter in Schema class is not not supported.");
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
    throw new _e("patternProperties getter in Schema class is not not supported.");
  }
  set patternProperties(e) {
    throw new _e("patternProperties setter in Schema class is not not supported.");
  }
  get dependencies() {
    throw new _e("dependencies getter in Schema class is not not supported.");
  }
  set dependencies(e) {
    throw new _e("dependencies setter in Schema class is not not supported.");
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
    throw new _e("definitions getter in Schema class is not not supported.");
  }
  set definitions(e) {
    throw new _e("definitions setter in Schema class is not not supported.");
  }
  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */
  get base() {
    throw new _e("base getter in Schema class is not not supported.");
  }
  set base(e) {
    throw new _e("base setter in Schema class is not not supported.");
  }
  get links() {
    throw new _e("links getter in Schema class is not not supported.");
  }
  set links(e) {
    throw new _e("links setter in Schema class is not not supported.");
  }
  get media() {
    throw new _e("media getter in Schema class is not not supported.");
  }
  set media(e) {
    throw new _e("media setter in Schema class is not not supported.");
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
}, ii = class extends I {
  constructor(e, r, n) {
    super(e, r, n), this.element = "securityRequirement";
  }
}, oi = class extends I {
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
}, ai = class extends I {
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
}, ci = class extends I {
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
}, Xa = class extends I {
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
}, Qa = class extends I {
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
const JU = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Bs), e.register("components", Us), e.register("contact", Hs), e.register("discriminator", La), e.register("encoding", Ba), e.register("example", qs), e.register("externalDocumentation", Gs), e.register("header", Vn), e.register("info", zs), e.register("license", Js), e.register("link", Ks), e.register("mediaType", Ws), e.register("oAuthFlow", Ua), e.register("oAuthFlows", Ha), e.register("openapi", Ys), e.register("openApi3_0", qa), e.register("operation", Xs), e.register("parameter", kn), e.register("pathItem", Qs), e.register("paths", Zs), e.register("reference", ei), e.register("requestBody", ti), e.register("response", ri), e.register("responses", ni), e.register("schema", Ya), e.register("securityRequirement", ii), e.register("securityScheme", oi), e.register("server", ai), e.register("serverVariable", ci), e.register("tag", Xa), e.register("xml", Qa), e;
  }
}, KU = JU, $o = class $o extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push($o.primaryClass);
  }
};
x($o, "primaryClass", "servers");
let gs = $o;
const So = class So extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(So.primaryClass);
  }
};
x(So, "primaryClass", "security");
let bu = So;
const wo = class wo extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(wo.primaryClass);
  }
};
x(wo, "primaryClass", "tags");
let xu = wo;
const Eo = class Eo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Eo.primaryClass);
  }
};
x(Eo, "primaryClass", "server-variables");
let $u = Eo;
const Oo = class Oo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Oo.primaryClass);
  }
};
x(Oo, "primaryClass", "components-schemas");
let vo = Oo;
const Ao = class Ao extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ao.primaryClass);
  }
};
x(Ao, "primaryClass", "components-responses");
let Su = Ao;
const Po = class Po extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Po.primaryClass), this.classes.push("parameters");
  }
};
x(Po, "primaryClass", "components-parameters");
let wu = Po;
const jo = class jo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(jo.primaryClass), this.classes.push("examples");
  }
};
x(jo, "primaryClass", "components-examples");
let Eu = jo;
const To = class To extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(To.primaryClass);
  }
};
x(To, "primaryClass", "components-request-bodies");
let Ou = To;
const _o = class _o extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(_o.primaryClass);
  }
};
x(_o, "primaryClass", "components-headers");
let Au = _o;
const Ro = class Ro extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ro.primaryClass);
  }
};
x(Ro, "primaryClass", "components-security-schemes");
let Pu = Ro;
const Co = class Co extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Co.primaryClass);
  }
};
x(Co, "primaryClass", "components-links");
let ju = Co;
const Io = class Io extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Io.primaryClass);
  }
};
x(Io, "primaryClass", "components-callbacks");
let Tu = Io;
const Fo = class Fo extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Fo.primaryClass), this.classes.push("servers");
  }
};
x(Fo, "primaryClass", "path-item-servers");
let go = Fo;
const Mo = class Mo extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Mo.primaryClass), this.classes.push("parameters");
  }
};
x(Mo, "primaryClass", "path-item-parameters");
let _u = Mo;
const Do = class Do extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Do.primaryClass), this.classes.push("parameters");
  }
};
x(Do, "primaryClass", "operation-parameters");
let bo = Do;
const No = class No extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(No.primaryClass), this.classes.push("examples");
  }
};
x(No, "primaryClass", "parameter-examples");
let Ru = No;
const Vo = class Vo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Vo.primaryClass), this.classes.push("content");
  }
};
x(Vo, "primaryClass", "parameter-content");
let Cu = Vo;
const ko = class ko extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ko.primaryClass);
  }
};
x(ko, "primaryClass", "operation-tags");
let Iu = ko;
const Lo = class Lo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Lo.primaryClass);
  }
};
x(Lo, "primaryClass", "operation-callbacks");
let Fu = Lo;
const Bo = class Bo extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Bo.primaryClass), this.classes.push("security");
  }
};
x(Bo, "primaryClass", "operation-security");
let Mu = Bo;
const yx = Mu, Uo = class Uo extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Uo.primaryClass), this.classes.push("servers");
  }
};
x(Uo, "primaryClass", "operation-servers");
let xo = Uo;
const Ho = class Ho extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ho.primaryClass), this.classes.push("content");
  }
};
x(Ho, "primaryClass", "request-body-content");
let Du = Ho;
const qo = class qo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(qo.primaryClass), this.classes.push("examples");
  }
};
x(qo, "primaryClass", "media-type-examples");
let Nu = qo;
const Go = class Go extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Go.primaryClass);
  }
};
x(Go, "primaryClass", "media-type-encoding");
let Vu = Go;
const zo = class zo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(zo.primaryClass);
  }
};
x(zo, "primaryClass", "encoding-headers");
let ku = zo;
const Jo = class Jo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Jo.primaryClass);
  }
};
x(Jo, "primaryClass", "response-headers");
let Lu = Jo;
const Ko = class Ko extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ko.primaryClass), this.classes.push("content");
  }
};
x(Ko, "primaryClass", "response-content");
let Bu = Ko;
const Wo = class Wo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Wo.primaryClass);
  }
};
x(Wo, "primaryClass", "response-links");
let Uu = Wo;
const Yo = class Yo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Yo.primaryClass);
  }
};
x(Yo, "primaryClass", "discriminator-mapping");
let Hu = Yo;
const Xo = class Xo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Xo.primaryClass);
  }
};
x(Xo, "primaryClass", "oauth-flow-scopes");
let qu = Xo;
const Qo = class Qo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Qo.primaryClass);
  }
};
x(Qo, "primaryClass", "link-parameters");
let Gu = Qo;
const Zo = class Zo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Zo.primaryClass), this.classes.push("examples");
  }
};
x(Zo, "primaryClass", "header-examples");
let zu = Zo;
const ea = class ea extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ea.primaryClass), this.classes.push("content");
  }
};
x(ea, "primaryClass", "header-content");
let Ju = ea;
const WU = (t) => {
  if (we(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, YU = {
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
  ...Mn
};
class vx {
  constructor(e = {}) {
    x(this, "element");
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = wt(r.meta, e.meta), Ds(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = wt(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
class XU extends vx {
  enter(e) {
    return this.element = F(e), Z;
  }
}
const T = XU;
class He extends vx {
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
    x(this, "specObj");
    x(this, "passingOptionsNames", ["specObj", "openApiGenericElement", "openApiSemanticElement"]);
    x(this, "openApiGenericElement");
    x(this, "openApiSemanticElement");
    this.specObj = r, this.openApiGenericElement = s, this.openApiSemanticElement = i, Array.isArray(n) && (this.passingOptionsNames = n);
  }
  retrievePassingOptions() {
    return jg(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = ze(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return va(Gt, ["visitors", ...r], this.specObj) ? ze(["visitors", ...r], this.specObj) : ze(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof T && (i == null ? void 0 : i.constructor) === T ? F(n) : (Ve(n, i, s), i.element);
  }
}
const fe = (t) => Q(t) && t.hasKey("$ref"), QU = Q, ZU = Q, gx = (t) => W(t.key) && _g("x-", w(t.key));
class Y extends He {
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
    x(this, "specPath");
    x(this, "ignoredFields");
    x(this, "canSupportSpecificationExtensions", !0);
    x(this, "specificationExtensionPredicate", gx);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "boolean" && (this.canSupportSpecificationExtensions = s), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (W(o) && s.includes(w(o)) && !this.ignoredFields.includes(w(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", w(o)], i), l = new Fs(F(o), c);
        this.copyMetaAndAttributes(a, l), l.classes.push("fixed-field"), this.element.content.push(l);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(a)) {
        const c = this.toRefractedElement(["document", "extension"], a);
        this.element.content.push(c);
      } else
        this.ignoredFields.includes(w(o)) || this.element.content.push(F(a));
    }), this.copyMetaAndAttributes(r, this.element), Z;
  }
}
class e4 extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new qa(), this.specPath = U(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return Y.prototype.ObjectElement.call(this, e);
  }
}
const t4 = e4;
class r4 extends _(He, T) {
  StringElement(e) {
    const r = new Ys(w(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, Z;
  }
}
const n4 = r4;
class s4 extends He {
  MemberElement(e) {
    return this.element = F(e), this.element.classes.push("specification-extension"), Z;
  }
}
const i4 = s4;
let o4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new zs(), this.specPath = U(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
const a4 = o4;
class c4 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
const l4 = c4;
let u4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Hs(), this.specPath = U(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
};
const f4 = u4;
let p4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Js(), this.specPath = U(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
};
const h4 = p4;
let d4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ks(), this.specPath = U(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return (W(this.element.operationId) || W(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
const m4 = d4;
class y4 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const v4 = y4;
class g4 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const b4 = g4;
class $n extends He {
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
    x(this, "specPath");
    x(this, "ignoredFields");
    x(this, "fieldPatternPredicate", Uf);
    x(this, "canSupportSpecificationExtensions", !1);
    x(this, "specificationExtensionPredicate", gx);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s), typeof i == "boolean" && (this.canSupportSpecificationExtensions = i), typeof o == "function" && (this.specificationExtensionPredicate = o);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
        const o = this.toRefractedElement(["document", "extension"], i);
        this.element.content.push(o);
      } else if (!this.ignoredFields.includes(w(s)) && this.fieldPatternPredicate(w(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new Fs(F(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else
        this.ignoredFields.includes(w(s)) || this.element.content.push(F(i));
    }), this.copyMetaAndAttributes(r, this.element), Z;
  }
}
class G extends $n {
  constructor(e) {
    super(e), this.fieldPatternPredicate = op;
  }
}
let x4 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Gu(), this.specPath = U(["value"]);
  }
};
const $4 = x4;
let S4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ai(), this.specPath = U(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
const w4 = S4;
class E4 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
const O4 = E4;
let A4 = class extends _(He, T) {
  constructor(e) {
    super(e), this.element = new gs();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = QU(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
const Cp = A4;
let P4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ci(), this.specPath = U(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
const j4 = P4;
class T4 extends _(G, T) {
  constructor(e) {
    super(e), this.element = new $u(), this.specPath = U(["document", "objects", "ServerVariable"]);
  }
}
const _4 = T4;
let R4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ws(), this.specPath = U(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
const C4 = R4;
class Ot extends He {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    x(this, "alternator");
    this.alternator = r || [];
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => tp(i, U(o), ga)), s = Ng(n)(r);
    return this.element = this.toRefractedElement(s, r), Z;
  }
}
const I4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bs || t(n) && e("callback", n) && r("object", n)), F4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Us || t(n) && e("components", n) && r("object", n)), M4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Hs || t(n) && e("contact", n) && r("object", n)), D4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof qs || t(n) && e("example", n) && r("object", n)), N4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gs || t(n) && e("externalDocumentation", n) && r("object", n)), Ln = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Vn || t(n) && e("header", n) && r("object", n)), V4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zs || t(n) && e("info", n) && r("object", n)), k4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Js || t(n) && e("license", n) && r("object", n)), L4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ks || t(n) && e("link", n) && r("object", n)), B4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ys || t(n) && e("openapi", n) && r("string", n)), U4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof qa || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), bx = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xs || t(n) && e("operation", n) && r("object", n)), H4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof kn || t(n) && e("parameter", n) && r("object", n)), Ip = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qs || t(n) && e("pathItem", n) && r("object", n)), q4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zs || t(n) && e("paths", n) && r("object", n)), ce = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ei || t(n) && e("reference", n) && r("object", n)), G4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ti || t(n) && e("requestBody", n) && r("object", n)), Za = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ri || t(n) && e("response", n) && r("object", n)), z4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ni || t(n) && e("responses", n) && r("object", n)), J4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ya || t(n) && e("schema", n) && r("object", n)), K4 = (t) => Ms(t) && t.classes.includes("boolean-json-schema"), W4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ii || t(n) && e("securityRequirement", n) && r("object", n)), Y4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof oi || t(n) && e("securityScheme", n) && r("object", n)), X4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ai || t(n) && e("server", n) && r("object", n)), Q4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ci || t(n) && e("serverVariable", n) && r("object", n)), ec = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ws || t(n) && e("mediaType", n) && r("object", n)), xx = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof gs || t(s) && e("array", s) && r("array", s) && n("servers", s)), Z4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: K4,
  isCallbackElement: I4,
  isComponentsElement: F4,
  isContactElement: M4,
  isExampleElement: D4,
  isExternalDocumentationElement: N4,
  isHeaderElement: Ln,
  isInfoElement: V4,
  isLicenseElement: k4,
  isLinkElement: L4,
  isMediaTypeElement: ec,
  isOpenApi3_0Element: U4,
  isOpenapiElement: B4,
  isOperationElement: bx,
  isParameterElement: H4,
  isPathItemElement: Ip,
  isPathsElement: q4,
  isReferenceElement: ce,
  isRequestBodyElement: G4,
  isResponseElement: Za,
  isResponsesElement: z4,
  isSchemaElement: J4,
  isSecurityRequirementElement: W4,
  isSecuritySchemeElement: Y4,
  isServerElement: X4,
  isServerVariableElement: Q4,
  isServersElement: xx
}, Symbol.toStringTag, { value: "Module" }));
let e6 = class extends _(Ot, T) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: fe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ut,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = Ot.prototype.enter.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
};
const t6 = e6;
let Fp = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("examples"), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, r6 = class extends Fp {
  constructor(e) {
    super(e), this.element = new Nu();
  }
};
const n6 = r6;
let s6 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Vu(), this.specPath = U(["document", "objects", "Encoding"]);
  }
};
const i6 = s6;
let o6 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new ii(), this.specPath = U(["value"]);
  }
};
const a6 = o6;
let c6 = class extends _(He, T) {
  constructor(e) {
    super(e), this.element = new bu();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Q(r)) {
        const n = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(n);
      } else
        this.element.push(F(r));
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
const l6 = c6;
let u6 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Us(), this.specPath = U(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
};
const f6 = u6;
let p6 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Xa(), this.specPath = U(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
};
const h6 = p6;
let d6 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ei(), this.specPath = U(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return W(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
const m6 = d6;
let y6 = class extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
};
const v6 = y6;
let g6 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new kn(), this.specPath = U(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return Q(this.element.contentProp) && this.element.contentProp.filter(ec).forEach((n, s) => {
      n.setMetaProperty("media-type", w(s));
    }), r;
  }
};
const b6 = g6;
let x6 = class extends _(Ot, T) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: fe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ut,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = Ot.prototype.enter.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
};
const $6 = x6;
let S6 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Vn(), this.specPath = U(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
};
const w6 = S6;
let E6 = class extends _(Ot, T) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: fe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ut,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = Ot.prototype.enter.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
};
const O6 = E6;
let A6 = class extends Fp {
  constructor(e) {
    super(e), this.element = new zu();
  }
};
const P6 = A6;
let tc = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("content"), this.specPath = U(["document", "objects", "MediaType"]);
  }
}, j6 = class extends tc {
  constructor(e) {
    super(e), this.element = new Ju();
  }
};
const T6 = j6;
let _6 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ya(), this.specPath = U(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const R6 = _6, {
  allOf: Cm
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
let C6 = class extends Cm {
  ArrayElement(e) {
    const r = Cm.prototype.ArrayElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const I6 = C6, {
  anyOf: Im
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
let F6 = class extends Im {
  ArrayElement(e) {
    const r = Im.prototype.ArrayElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const M6 = F6, {
  oneOf: Fm
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
let D6 = class extends Fm {
  ArrayElement(e) {
    const r = Fm.prototype.ArrayElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const N6 = D6, {
  items: Mm
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
class V6 extends Mm {
  ObjectElement(e) {
    const r = Mm.prototype.ObjectElement.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
}
const k6 = V6, {
  properties: Dm
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
let L6 = class extends Dm {
  ObjectElement(e) {
    const r = Dm.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const B6 = L6, {
  type: U6
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
let H6 = class extends U6 {
  ArrayElement(e) {
    return this.enter(e);
  }
};
const q6 = H6, {
  JSONSchemaOrJSONReferenceVisitor: Nm
} = Yt.visitors;
class G6 extends Nm {
  ObjectElement(e) {
    const r = Nm.prototype.enter.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
const Vm = G6;
let z6 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new La(), this.specPath = U(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
const J6 = z6;
class K6 extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Hu(), this.specPath = U(["value"]);
  }
}
const W6 = K6;
let Y6 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Qa(), this.specPath = U(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
};
const X6 = Y6;
let Q6 = class extends Fp {
  constructor(e) {
    super(e), this.element = new Ru();
  }
};
const Z6 = Q6;
let e5 = class extends tc {
  constructor(e) {
    super(e), this.element = new Cu();
  }
};
const t5 = e5;
let r5 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new vo(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const n5 = r5;
let s5 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Su(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Za).forEach((n, s) => {
      n.setMetaProperty("http-status-code", w(s));
    }), r;
  }
};
const i5 = s5;
let o5 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new wu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
};
const a5 = o5;
let c5 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Eu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
const l5 = c5;
class u5 extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Ou(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
const f5 = u5;
let p5 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Au(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.filter(Ln).forEach((n, s) => {
      n.setMetaProperty("header-name", w(s));
    }), r;
  }
};
const h5 = p5;
class d5 extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Pu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
const m5 = d5;
let y5 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new ju(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
};
const v5 = y5;
let g5 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Tu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
};
const b5 = g5;
let x5 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new qs(), this.specPath = U(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return W(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
const $5 = x5;
class S5 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const w5 = S5;
let E5 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Gs(), this.specPath = U(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
};
const O5 = E5;
let A5 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ba(), this.specPath = U(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return Q(this.element.headers) && this.element.headers.filter(Ln).forEach((n, s) => {
      n.setMetaProperty("header-name", w(s));
    }), r;
  }
};
const P5 = A5;
let j5 = class extends _(G, T) {
  constructor(e) {
    super(e), this.element = new ku(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!Ln(n))
        return;
      const i = w(s);
      n.setMetaProperty("headerName", i);
    }), r;
  }
};
const T5 = j5;
let _5 = class extends _($n, T) {
  constructor(e) {
    super(e), this.element = new Zs(), this.specPath = U(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = Ut;
  }
  ObjectElement(e) {
    const r = $n.prototype.ObjectElement.call(this, e);
    return this.element.filter(Ip).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", F(s));
    }), r;
  }
};
const R5 = _5;
let C5 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ti(), this.specPath = U(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return Q(this.element.contentProp) && this.element.contentProp.filter(ec).forEach((n, s) => {
      n.setMetaProperty("media-type", w(s));
    }), r;
  }
};
const I5 = C5;
let F5 = class extends tc {
  constructor(e) {
    super(e), this.element = new Du();
  }
};
const M5 = F5;
let D5 = class extends _($n, T) {
  constructor(e) {
    super(e), this.element = new Bs(), this.specPath = U(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(Ip).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", w(s));
    }), r;
  }
};
const N5 = D5;
let V5 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ri(), this.specPath = U(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return Q(this.element.contentProp) && this.element.contentProp.filter(ec).forEach((n, s) => {
      n.setMetaProperty("media-type", w(s));
    }), Q(this.element.headers) && this.element.headers.filter(Ln).forEach((n, s) => {
      n.setMetaProperty("header-name", w(s));
    }), r;
  }
};
const k5 = V5;
class L5 extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Lu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!Ln(n))
        return;
      const i = w(s);
      n.setMetaProperty("header-name", i);
    }), r;
  }
}
const B5 = L5;
class U5 extends tc {
  constructor(e) {
    super(e), this.element = new Bu();
  }
}
const H5 = U5;
class q5 extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Uu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
const G5 = q5;
class km extends _(Y, $n) {
  constructor({
    specPathFixedFields: r,
    specPathPatternedFields: n,
    ...s
  }) {
    super({
      ...s
    });
    x(this, "specPathFixedFields");
    x(this, "specPathPatternedFields");
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
      this.ignoredFields = [...s, ...uC(r.keys(), i)], Y.prototype.ObjectElement.call(this, r), this.specPath = this.specPathPatternedFields, this.ignoredFields = i, $n.prototype.ObjectElement.call(this, r);
    } catch (i) {
      throw this.specPath = n, i;
    }
    return Z;
  }
}
let z5 = class extends _(km, T) {
  constructor(e) {
    super(e), this.element = new ni(), this.specPathFixedFields = U(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${qC(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = km.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Za).forEach((n, s) => {
      const i = F(s);
      this.fieldPatternPredicate(w(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
const J5 = z5;
class K5 extends _(Ot, T) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: fe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ut,
      specPath: ["document", "objects", "Response"]
    }];
  }
  ObjectElement(e) {
    const r = Ot.prototype.enter.call(this, e);
    return ce(this.element) ? this.element.setMetaProperty("referenced-element", "response") : Za(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
const W5 = K5;
let Y5 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Xs(), this.specPath = U(["document", "objects", "Operation"]);
  }
};
const X5 = Y5;
let Q5 = class extends T {
  constructor(e) {
    super(e), this.element = new Iu();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(F(e)), Z;
  }
};
const Z5 = Q5;
let $x = class extends _(He, T) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      ce(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}, eH = class extends $x {
  constructor(e) {
    super(e), this.element = new bo();
  }
};
const tH = eH;
let rH = class extends Ot {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: fe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Ut,
      specPath: ["document", "objects", "RequestBody"]
    }];
  }
  ObjectElement(e) {
    const r = Ot.prototype.enter.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
const nH = rH;
class sH extends _(G, T) {
  constructor(r) {
    super(r);
    x(this, "specPath");
    this.element = new Fu(), this.specPath = (n) => fe(n) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(r) {
    const n = G.prototype.ObjectElement.call(this, r);
    return this.element.filter(ce).forEach((s) => {
      s.setMetaProperty("referenced-element", "callback");
    }), n;
  }
}
const iH = sH;
class oH extends _(He, T) {
  constructor(e) {
    super(e), this.element = new yx();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = Q(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}
const aH = oH;
let cH = class extends Cp {
  constructor(e) {
    super(e), this.element = new xo();
  }
};
const lH = cH;
let uH = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Qs(), this.specPath = U(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(bx).forEach((n, s) => {
      const i = F(s);
      i.content = w(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), W(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
const fH = uH;
class pH extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const hH = pH;
class dH extends Cp {
  constructor(e) {
    super(e), this.element = new go();
  }
}
const mH = dH;
class yH extends $x {
  constructor(e) {
    super(e), this.element = new _u();
  }
}
const vH = yH;
let gH = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new oi(), this.specPath = U(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
};
const bH = gH;
let xH = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ha(), this.specPath = U(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
};
const $H = xH;
let SH = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ua(), this.specPath = U(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
const wH = SH;
class EH extends _(G, T) {
  constructor(e) {
    super(e), this.element = new qu(), this.specPath = U(["value"]);
  }
}
const OH = EH;
class AH extends _(He, T) {
  constructor(e) {
    super(e), this.element = new xu();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = ZU(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}
const PH = AH, {
  fixedFields: $e
} = Yt.visitors.document.objects.JSONSchema, jH = {
  visitors: {
    value: T,
    document: {
      objects: {
        OpenApi: {
          $visitor: t4,
          fixedFields: {
            openapi: n4,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: Cp,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: l6,
            tags: PH,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: a4,
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
            version: l4
          }
        },
        Contact: {
          $visitor: f4,
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
          $visitor: h4,
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
          $visitor: w4,
          fixedFields: {
            url: O4,
            description: {
              $ref: "#/visitors/value"
            },
            variables: _4
          }
        },
        ServerVariable: {
          $visitor: j4,
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
          $visitor: f6,
          fixedFields: {
            schemas: n5,
            responses: i5,
            parameters: a5,
            examples: l5,
            requestBodies: f5,
            headers: h5,
            securitySchemes: m5,
            links: v5,
            callbacks: b5
          }
        },
        Paths: {
          $visitor: R5
        },
        PathItem: {
          $visitor: fH,
          fixedFields: {
            $ref: hH,
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
            servers: mH,
            parameters: vH
          }
        },
        Operation: {
          $visitor: X5,
          fixedFields: {
            tags: Z5,
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
            parameters: tH,
            requestBody: nH,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: iH,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: aH,
            servers: lH
          }
        },
        ExternalDocumentation: {
          $visitor: O5,
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
          $visitor: b6,
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
            schema: $6,
            example: {
              $ref: "#/visitors/value"
            },
            examples: Z6,
            content: t5
          }
        },
        RequestBody: {
          $visitor: I5,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: M5,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: C4,
          fixedFields: {
            schema: t6,
            example: {
              $ref: "#/visitors/value"
            },
            examples: n6,
            encoding: i6
          }
        },
        Encoding: {
          $visitor: P5,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: T5,
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
          $visitor: J5,
          fixedFields: {
            default: W5
          }
        },
        Response: {
          $visitor: k5,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: B5,
            content: H5,
            links: G5
          }
        },
        Callback: {
          $visitor: N5
        },
        Example: {
          $visitor: $5,
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
            externalValue: w5
          }
        },
        Link: {
          $visitor: m4,
          fixedFields: {
            operationRef: v4,
            operationId: b4,
            parameters: $4,
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
          $visitor: w6,
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
            schema: O6,
            example: {
              $ref: "#/visitors/value"
            },
            examples: P6,
            content: T6
          }
        },
        Tag: {
          $visitor: h6,
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
          $visitor: m6,
          fixedFields: {
            $ref: v6
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: R6,
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
            type: q6,
            allOf: I6,
            anyOf: M6,
            oneOf: N6,
            not: Vm,
            items: k6,
            properties: B6,
            additionalProperties: Vm,
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
          $visitor: J6,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: W6
          }
        },
        XML: {
          $visitor: X6,
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
          $visitor: bH,
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
          $visitor: $H,
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
          $visitor: wH,
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
            scopes: OH
          }
        },
        SecurityRequirement: {
          $visitor: a6
        }
      },
      extension: {
        $visitor: i4
      }
    }
  }
}, $ = jH, TH = () => {
  const t = Ns(KU);
  return {
    predicates: {
      ...Z4,
      isElement: we,
      isStringElement: W,
      isArrayElement: Ue,
      isObjectElement: Q,
      isMemberElement: dt,
      includesClasses: Ca,
      hasElementSourceMap: Ds
    },
    namespace: t
  };
}, _H = TH, RH = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = gp(t), s = Ma($), i = ze(e, s), o = new i({
    specObj: s
  });
  return Ve(n, o), Dn(o.element, r, {
    toolboxCreator: _H,
    visitorOptions: {
      keyMap: YU,
      nodeTypeGetter: WU
    }
  });
}, re = (t) => (e, r = {}) => RH(e, {
  specPath: t,
  ...r
});
Bs.refract = re(["visitors", "document", "objects", "Callback", "$visitor"]);
Us.refract = re(["visitors", "document", "objects", "Components", "$visitor"]);
Hs.refract = re(["visitors", "document", "objects", "Contact", "$visitor"]);
qs.refract = re(["visitors", "document", "objects", "Example", "$visitor"]);
La.refract = re(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Ba.refract = re(["visitors", "document", "objects", "Encoding", "$visitor"]);
Gs.refract = re(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Vn.refract = re(["visitors", "document", "objects", "Header", "$visitor"]);
zs.refract = re(["visitors", "document", "objects", "Info", "$visitor"]);
Js.refract = re(["visitors", "document", "objects", "License", "$visitor"]);
Ks.refract = re(["visitors", "document", "objects", "Link", "$visitor"]);
Ws.refract = re(["visitors", "document", "objects", "MediaType", "$visitor"]);
Ua.refract = re(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Ha.refract = re(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Ys.refract = re(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
qa.refract = re(["visitors", "document", "objects", "OpenApi", "$visitor"]);
Xs.refract = re(["visitors", "document", "objects", "Operation", "$visitor"]);
kn.refract = re(["visitors", "document", "objects", "Parameter", "$visitor"]);
Qs.refract = re(["visitors", "document", "objects", "PathItem", "$visitor"]);
Zs.refract = re(["visitors", "document", "objects", "Paths", "$visitor"]);
ei.refract = re(["visitors", "document", "objects", "Reference", "$visitor"]);
ti.refract = re(["visitors", "document", "objects", "RequestBody", "$visitor"]);
ri.refract = re(["visitors", "document", "objects", "Response", "$visitor"]);
ni.refract = re(["visitors", "document", "objects", "Responses", "$visitor"]);
Ya.refract = re(["visitors", "document", "objects", "Schema", "$visitor"]);
ii.refract = re(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
oi.refract = re(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
ai.refract = re(["visitors", "document", "objects", "Server", "$visitor"]);
ci.refract = re(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Xa.refract = re(["visitors", "document", "objects", "Tag", "$visitor"]);
Qa.refract = re(["visitors", "document", "objects", "XML", "$visitor"]);
class rc extends Bs {
}
class nc extends Us {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class sc extends Hs {
}
class Mp extends La {
}
class Dp extends Ba {
}
class ic extends qs {
}
class oc extends Gs {
}
class ac extends Vn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class cc extends zs {
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
const ta = class ta extends Dt {
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
};
x(ta, "default", new ta("https://spec.openapis.org/oas/3.1/dialect/base"));
let jr = ta;
class lc extends Js {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class uc extends Ks {
}
class fc extends Ws {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Np extends Ua {
}
class Vp extends Ha {
}
class kp extends Ys {
}
class pr extends I {
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
class li extends Xs {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(e) {
    this.set("requestBody", e);
  }
}
class pc extends kn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class ir extends Qs {
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
class hc extends Zs {
}
class hr extends ei {
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
class dc extends ti {
}
let mc = class extends ri {
};
class yc extends ni {
}
class kr extends I {
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
class vc extends ii {
}
class gc extends oi {
}
class bc extends ai {
}
class xc extends ci {
}
class Lp extends Xa {
}
class Bp extends Qa {
}
const Up = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", rc), e.register("components", nc), e.register("contact", sc), e.register("discriminator", Mp), e.register("encoding", Dp), e.register("example", ic), e.register("externalDocumentation", oc), e.register("header", ac), e.register("info", cc), e.register("jsonSchemaDialect", jr), e.register("license", lc), e.register("link", uc), e.register("mediaType", fc), e.register("oAuthFlow", Np), e.register("oAuthFlows", Vp), e.register("openapi", kp), e.register("openApi3_1", pr), e.register("operation", li), e.register("parameter", pc), e.register("pathItem", ir), e.register("paths", hc), e.register("reference", hr), e.register("requestBody", dc), e.register("response", mc), e.register("responses", yc), e.register("schema", kr), e.register("securityRequirement", vc), e.register("securityScheme", gc), e.register("server", bc), e.register("serverVariable", xc), e.register("tag", Lp), e.register("xml", Bp), e;
  }
}, ra = class ra extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ra.primaryClass);
  }
};
x(ra, "primaryClass", "components-path-items");
let Ku = ra;
const na = class na extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(na.primaryClass);
  }
};
x(na, "primaryClass", "webhooks");
let Wu = na;
const lt = (t) => {
  if (we(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, St = {
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
  ...Mn
};
class Bn {
  constructor(e, r, n) {
    x(this, "internalStore");
    this.storageElement = e, this.storageField = r, this.storageSubField = n;
  }
  get store() {
    if (!this.internalStore) {
      let e = this.storageElement.get(this.storageField);
      Q(e) || (e = new I(), this.storageElement.set(this.storageField, e));
      let r = e.get(this.storageSubField);
      Ue(r) || (r = new ae(), e.set(this.storageSubField, r)), this.internalStore = r;
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
const CH = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: n
  } = e, s = (a, c) => !r.isParameterElement(a) || !r.isParameterElement(c) || !r.isStringElement(a.name) || !r.isStringElement(a.in) || !r.isStringElement(c.name) || !r.isStringElement(c.in) ? !1 : w(a.name) === w(c.name) && w(a.in) === w(c.in), i = [];
  let o;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(a) {
          o = new Bn(a, t, "parameters");
        },
        leave() {
          o = void 0;
        }
      },
      PathItemElement: {
        enter(a, c, l, f, u) {
          if (u.some(r.isComponentsElement))
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
        leave(a, c, l, f, u) {
          const d = ya(i);
          if (!Array.isArray(d) || d.length === 0)
            return;
          const p = n([...u, l, a]);
          if (o.includes(p))
            return;
          const m = Pg([], ["parameters", "content"], a), h = QC(s, [...m, ...d]);
          a.parameters = new bo(h), o.append(p);
        }
      }
    }
  };
}, IH = ({
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
          i = new Bn(o, t, "security-requirements"), r.isArrayElement(o.security) && (s = o.security);
        },
        leave() {
          i = void 0, s = void 0;
        }
      },
      OperationElement: {
        leave(o, a, c, l, f) {
          if (f.some(r.isComponentsElement))
            return;
          const u = n([...f, c, o]);
          if (i.includes(u))
            return;
          if (typeof o.security > "u" && typeof s < "u") {
            var m;
            o.security = new yx((m = s) === null || m === void 0 ? void 0 : m.content), i.append(u);
          }
        }
      }
    }
  };
}, FH = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    namespace: r,
    ancestorLineageToJSONPointer: n,
    predicates: s
  } = e;
  let i;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(o) {
          const a = typeof o.servers > "u", c = s.isArrayElement(o.servers), l = c && o.servers.length === 0, f = r.elements.Server.refract({
            url: "/"
          });
          a || !c ? o.servers = new gs([f]) : c && l && o.servers.push(f), i = new Bn(o, t, "servers");
        },
        leave() {
          i = void 0;
        }
      },
      PathItemElement(o, a, c, l, f) {
        if (f.some(s.isComponentsElement) || !f.some(s.isOpenApi3_1Element))
          return;
        const u = n([...f, c, o]);
        if (i.includes(u))
          return;
        const d = f.find(s.isOpenApi3_1Element), p = typeof o.servers > "u", m = s.isArrayElement(o.servers), h = m && o.servers.length === 0;
        if (s.isOpenApi3_1Element(d)) {
          var g;
          const y = (g = d.servers) === null || g === void 0 ? void 0 : g.content, v = y ?? [];
          p || !m ? o.servers = new go(v) : m && h && v.forEach((b) => {
            o.servers.push(b);
          }), i.append(u);
        }
      },
      OperationElement(o, a, c, l, f) {
        if (f.some(s.isComponentsElement) || !f.some(s.isOpenApi3_1Element))
          return;
        const u = n([...f, c, o]);
        if (i.includes(u))
          return;
        const d = [...f].reverse().find(s.isPathItemElement), p = typeof o.servers > "u", m = s.isArrayElement(o.servers), h = m && o.servers.length === 0;
        if (s.isPathItemElement(d)) {
          var g;
          const y = (g = d.servers) === null || g === void 0 ? void 0 : g.content, v = y ?? [];
          p || !m ? o.servers = new xo(v) : m && h && v.forEach((b) => {
            o.servers.push(b);
          }), i.append(u);
        }
      }
    }
  };
}, Yu = (t) => t.replace(/\s/g, ""), Xu = (t) => t.replace(/\W/gi, "_"), MH = (t, e) => {
  const r = Xu(Yu(e.toLowerCase())), n = Xu(Yu(t));
  return `${r}${n}`;
}, DH = (t, e, r) => {
  const n = Yu(t);
  return n.length > 0 ? Xu(n) : MH(e, r);
}, NH = ({
  storageField: t = "x-normalized",
  operationIdNormalizer: e = DH
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
        enter(f) {
          l = new Bn(f, t, "operation-ids");
        },
        leave() {
          const f = PC((u) => w(u.operationId), a);
          Object.entries(f).forEach(([u, d]) => {
            Array.isArray(d) && (d.length <= 1 || d.forEach((p, m) => {
              const h = `${u}${m + 1}`;
              p.operationId = new i.elements.String(h);
            }));
          }), c.forEach((u) => {
            if (typeof u.operationId > "u")
              return;
            const d = String(w(u.operationId)), p = a.find((m) => w(m.meta.get("originalOperationId")) === d);
            typeof p > "u" || (u.operationId = F.safe(p.operationId), u.meta.set("originalOperationId", d), u.set("__originalOperationId", d));
          }), a.length = 0, c.length = 0, l = void 0;
        }
      },
      PathItemElement: {
        enter(f) {
          const u = mn("path", w(f.meta.get("path")));
          o.push(u);
        },
        leave() {
          o.pop();
        }
      },
      OperationElement: {
        enter(f, u, d, p, m) {
          if (typeof f.operationId > "u")
            return;
          const h = s([...m, d, f]);
          if (l.includes(h))
            return;
          const g = String(w(f.operationId)), y = ya(o), v = mn("method", w(f.meta.get("http-method"))), b = e(g, y, v);
          g !== b && (f.operationId = new i.elements.String(b), f.set("__originalOperationId", g), f.meta.set("originalOperationId", g), a.push(f), l.append(h));
        }
      },
      LinkElement: {
        leave(f) {
          n.isLinkElement(f) && (typeof f.operationId > "u" || c.push(f));
        }
      }
    }
  };
}, VH = ({
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
          s = new Bn(i, t, "parameter-examples");
        },
        leave() {
          s = void 0;
        }
      },
      ParameterElement: {
        leave(i, o, a, c, l) {
          var f, u;
          if (l.some(r.isComponentsElement) || typeof i.schema > "u" || !r.isSchemaElement(i.schema) || typeof ((f = i.schema) === null || f === void 0 ? void 0 : f.example) > "u" && typeof ((u = i.schema) === null || u === void 0 ? void 0 : u.examples) > "u")
            return;
          const d = n([...l, a, i]);
          if (!s.includes(d)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const p = i.examples.map((m) => F.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", p), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", p), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [F(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", F(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, kH = ({
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
          s = new Bn(i, t, "header-examples");
        },
        leave() {
          s = void 0;
        }
      },
      HeaderElement: {
        leave(i, o, a, c, l) {
          var f, u;
          if (l.some(r.isComponentsElement) || typeof i.schema > "u" || !r.isSchemaElement(i.schema) || typeof ((f = i.schema) === null || f === void 0 ? void 0 : f.example) > "u" && typeof ((u = i.schema) === null || u === void 0 ? void 0 : u.examples) > "u")
            return;
          const d = n([...l, a, i]);
          if (!s.includes(d)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const p = i.examples.map((m) => F.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", p), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", p[0]), s.append(d));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [F(i.example)]), s.append(d)), typeof i.schema.example < "u" && (i.schema.set("example", F(i.example)), s.append(d)));
          }
        }
      }
    }
  };
}, LH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof rc || t(n) && e("callback", n) && r("object", n)), BH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof nc || t(n) && e("components", n) && r("object", n)), UH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof sc || t(n) && e("contact", n) && r("object", n)), HH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ic || t(n) && e("example", n) && r("object", n)), qH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof oc || t(n) && e("externalDocumentation", n) && r("object", n)), GH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ac || t(n) && e("header", n) && r("object", n)), zH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof cc || t(n) && e("info", n) && r("object", n)), Sx = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof jr || t(n) && e("jsonSchemaDialect", n) && r("string", n)), JH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof lc || t(n) && e("license", n) && r("object", n)), KH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof uc || t(n) && e("link", n) && r("object", n)), WH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof kp || t(n) && e("openapi", n) && r("string", n)), wx = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof pr || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), Ex = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof li || t(n) && e("operation", n) && r("object", n)), YH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof pc || t(n) && e("parameter", n) && r("object", n)), Tr = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ir || t(n) && e("pathItem", n) && r("object", n)), XH = (t) => {
  if (!Tr(t) || !W(t.$ref))
    return !1;
  const e = w(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, QH = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hc || t(n) && e("paths", n) && r("object", n)), Lr = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hr || t(n) && e("reference", n) && r("object", n)), ZH = (t) => {
  if (!Lr(t) || !W(t.$ref))
    return !1;
  const e = w(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, e8 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof dc || t(n) && e("requestBody", n) && r("object", n)), t8 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof mc || t(n) && e("response", n) && r("object", n)), r8 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof yc || t(n) && e("responses", n) && r("object", n)), kt = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof kr || t(n) && e("schema", n) && r("object", n)), Hp = (t) => Ms(t) && t.classes.includes("boolean-json-schema"), n8 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vc || t(n) && e("securityRequirement", n) && r("object", n)), s8 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gc || t(n) && e("securityScheme", n) && r("object", n)), i8 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof bc || t(n) && e("server", n) && r("object", n)), o8 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xc || t(n) && e("serverVariable", n) && r("object", n)), a8 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fc || t(n) && e("mediaType", n) && r("object", n)), c8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: Hp,
  isCallbackElement: LH,
  isComponentsElement: BH,
  isContactElement: UH,
  isExampleElement: HH,
  isExternalDocumentationElement: qH,
  isHeaderElement: GH,
  isInfoElement: zH,
  isJsonSchemaDialectElement: Sx,
  isLicenseElement: JH,
  isLinkElement: KH,
  isMediaTypeElement: a8,
  isOpenApi3_1Element: wx,
  isOpenapiElement: WH,
  isOperationElement: Ex,
  isParameterElement: YH,
  isPathItemElement: Tr,
  isPathItemElementExternal: XH,
  isPathsElement: QH,
  isReferenceElement: Lr,
  isReferenceElementExternal: ZH,
  isRequestBodyElement: e8,
  isResponseElement: t8,
  isResponsesElement: r8,
  isSchemaElement: kt,
  isSecurityRequirementElement: n8,
  isSecuritySchemeElement: s8,
  isServerElement: i8,
  isServerVariableElement: o8
}, Symbol.toStringTag, { value: "Module" })), l8 = (t) => {
  const e = t.reduce((r, n, s) => {
    if (dt(n)) {
      const i = String(w(n.key));
      r.push(i);
    } else if (Ue(t[s - 2])) {
      const i = String(t[s - 2].content.indexOf(n));
      r.push(i);
    }
    return r;
  }, []);
  return px(e);
}, u8 = () => {
  const t = Ns(Up);
  return {
    predicates: {
      ...c8,
      isElement: we,
      isStringElement: W,
      isArrayElement: Ue,
      isObjectElement: Q,
      isMemberElement: dt,
      isServersElement: xx,
      includesClasses: Ca,
      hasElementSourceMap: Ds
    },
    ancestorLineageToJSONPointer: l8,
    namespace: t
  };
}, Ox = u8;
class f8 extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new pr(), this.specPath = U(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, Y.prototype.ObjectElement.call(this, e);
  }
}
const p8 = f8, {
  visitors: {
    document: {
      objects: {
        Info: {
          $visitor: h8
        }
      }
    }
  }
} = $;
class d8 extends h8 {
  constructor(e) {
    super(e), this.element = new cc();
  }
}
const m8 = d8, {
  visitors: {
    document: {
      objects: {
        Contact: {
          $visitor: y8
        }
      }
    }
  }
} = $;
class v8 extends y8 {
  constructor(e) {
    super(e), this.element = new sc();
  }
}
const g8 = v8, {
  visitors: {
    document: {
      objects: {
        License: {
          $visitor: b8
        }
      }
    }
  }
} = $;
class x8 extends b8 {
  constructor(e) {
    super(e), this.element = new lc();
  }
}
const $8 = x8, {
  visitors: {
    document: {
      objects: {
        Link: {
          $visitor: S8
        }
      }
    }
  }
} = $;
class w8 extends S8 {
  constructor(e) {
    super(e), this.element = new uc();
  }
}
const E8 = w8;
class O8 extends _(He, T) {
  StringElement(e) {
    const r = new jr(w(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, Z;
  }
}
const A8 = O8, {
  visitors: {
    document: {
      objects: {
        Server: {
          $visitor: P8
        }
      }
    }
  }
} = $;
class j8 extends P8 {
  constructor(e) {
    super(e), this.element = new bc();
  }
}
const T8 = j8, {
  visitors: {
    document: {
      objects: {
        ServerVariable: {
          $visitor: _8
        }
      }
    }
  }
} = $;
class R8 extends _8 {
  constructor(e) {
    super(e), this.element = new xc();
  }
}
const C8 = R8, {
  visitors: {
    document: {
      objects: {
        MediaType: {
          $visitor: I8
        }
      }
    }
  }
} = $;
class F8 extends I8 {
  constructor(e) {
    super(e), this.element = new fc();
  }
}
const M8 = F8, {
  visitors: {
    document: {
      objects: {
        SecurityRequirement: {
          $visitor: D8
        }
      }
    }
  }
} = $;
class N8 extends D8 {
  constructor(e) {
    super(e), this.element = new vc();
  }
}
const V8 = N8, {
  visitors: {
    document: {
      objects: {
        Components: {
          $visitor: k8
        }
      }
    }
  }
} = $;
class L8 extends k8 {
  constructor(e) {
    super(e), this.element = new nc();
  }
}
const B8 = L8, {
  visitors: {
    document: {
      objects: {
        Tag: {
          $visitor: U8
        }
      }
    }
  }
} = $;
class H8 extends U8 {
  constructor(e) {
    super(e), this.element = new Lp();
  }
}
const q8 = H8, {
  visitors: {
    document: {
      objects: {
        Reference: {
          $visitor: G8
        }
      }
    }
  }
} = $;
class z8 extends G8 {
  constructor(e) {
    super(e), this.element = new hr();
  }
}
const J8 = z8, {
  visitors: {
    document: {
      objects: {
        Parameter: {
          $visitor: K8
        }
      }
    }
  }
} = $;
class W8 extends K8 {
  constructor(e) {
    super(e), this.element = new pc();
  }
}
const Y8 = W8, {
  visitors: {
    document: {
      objects: {
        Header: {
          $visitor: X8
        }
      }
    }
  }
} = $;
class Q8 extends X8 {
  constructor(e) {
    super(e), this.element = new ac();
  }
}
const Z8 = Q8;
class Xt {
  constructor({
    parent: e
  }) {
    x(this, "parent");
    this.parent = e;
  }
}
class eq extends _(Y, Xt, T) {
  constructor(e) {
    super(e), this.element = new kr(), this.specPath = U(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = jr.default, this.passingOptionsNames.push("parent");
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
    Sx(this.openApiSemanticElement.jsonSchemaDialect) ? e = w(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && W(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = w(this.openApiGenericElement.get("jsonSchemaDialect")) : e = w(this.jsonSchemaDefaultDialect), e;
  }
  handle$schema(e) {
    if (ur(this.parent) && !W(e.get("$schema")))
      this.element.setMetaProperty("inherited$schema", this.getJsonSchemaDialect());
    else if (kt(this.parent) && !W(e.get("$schema"))) {
      const r = mn(w(this.parent.meta.get("inherited$schema")), w(this.parent.$schema));
      this.element.setMetaProperty("inherited$schema", r);
    }
  }
  handle$id(e) {
    const r = this.parent !== void 0 ? F(this.parent.getMetaProperty("inherited$id", [])) : new ae(), n = w(e.get("$id"));
    op(n) && r.push(n), this.element.setMetaProperty("inherited$id", r);
  }
}
const tq = eq;
class rq extends T {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
const nq = rq;
class sq extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const iq = sq;
class oq extends _(G, Xt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-$defs"), this.specPath = U(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const aq = oq;
let cq = class extends _(He, Xt, T) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-allOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Q(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
};
const lq = cq;
class uq extends _(He, Xt, T) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-anyOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Q(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}
const fq = uq;
class pq extends _(He, Xt, T) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-oneOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Q(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}
const hq = pq;
class dq extends _(G, Xt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = U(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const mq = dq;
class yq extends _(He, Xt, T) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-prefixItems"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Q(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), Z;
  }
}
const vq = yq;
class gq extends _(G, Xt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-properties"), this.specPath = U(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const bq = gq;
class xq extends _(G, Xt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-patternProperties"), this.specPath = U(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const $q = xq;
class Sq extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}
const wq = Sq;
class Eq extends T {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
const Oq = Eq;
class Aq extends T {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
const Pq = Aq;
class jq extends T {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
const Tq = jq, {
  visitors: {
    document: {
      objects: {
        Discriminator: {
          $visitor: _q
        }
      }
    }
  }
} = $;
class Rq extends _q {
  constructor(e) {
    super(e), this.element = new Mp(), this.canSupportSpecificationExtensions = !0;
  }
}
const Cq = Rq, {
  visitors: {
    document: {
      objects: {
        XML: {
          $visitor: Iq
        }
      }
    }
  }
} = $;
class Fq extends Iq {
  constructor(e) {
    super(e), this.element = new Bp();
  }
}
const Mq = Fq;
class Dq extends _(G, T) {
  constructor(e) {
    super(e), this.element = new vo(), this.specPath = U(["document", "objects", "Schema"]);
  }
}
const Nq = Dq;
class Vq extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Ku(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(Lr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const kq = Vq, {
  visitors: {
    document: {
      objects: {
        Example: {
          $visitor: Lq
        }
      }
    }
  }
} = $;
class Bq extends Lq {
  constructor(e) {
    super(e), this.element = new ic();
  }
}
const Uq = Bq, {
  visitors: {
    document: {
      objects: {
        ExternalDocumentation: {
          $visitor: Hq
        }
      }
    }
  }
} = $;
class qq extends Hq {
  constructor(e) {
    super(e), this.element = new oc();
  }
}
const Gq = qq, {
  visitors: {
    document: {
      objects: {
        Encoding: {
          $visitor: zq
        }
      }
    }
  }
} = $;
class Jq extends zq {
  constructor(e) {
    super(e), this.element = new Dp();
  }
}
const Kq = Jq, {
  visitors: {
    document: {
      objects: {
        Paths: {
          $visitor: Wq
        }
      }
    }
  }
} = $;
class Yq extends Wq {
  constructor(e) {
    super(e), this.element = new hc();
  }
}
const Xq = Yq, {
  visitors: {
    document: {
      objects: {
        RequestBody: {
          $visitor: Qq
        }
      }
    }
  }
} = $;
class Zq extends Qq {
  constructor(e) {
    super(e), this.element = new dc();
  }
}
const e7 = Zq, {
  visitors: {
    document: {
      objects: {
        Callback: {
          $visitor: Lm
        }
      }
    }
  }
} = $;
class t7 extends Lm {
  constructor(e) {
    super(e), this.element = new rc(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Lm.prototype.ObjectElement.call(this, e);
    return this.element.filter(Lr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const r7 = t7, {
  visitors: {
    document: {
      objects: {
        Response: {
          $visitor: n7
        }
      }
    }
  }
} = $;
class s7 extends n7 {
  constructor(e) {
    super(e), this.element = new mc();
  }
}
const i7 = s7, {
  visitors: {
    document: {
      objects: {
        Responses: {
          $visitor: o7
        }
      }
    }
  }
} = $;
class a7 extends o7 {
  constructor(e) {
    super(e), this.element = new yc();
  }
}
const c7 = a7, {
  visitors: {
    document: {
      objects: {
        Operation: {
          $visitor: l7
        }
      }
    }
  }
} = $;
class u7 extends l7 {
  constructor(e) {
    super(e), this.element = new li();
  }
}
const f7 = u7, {
  visitors: {
    document: {
      objects: {
        PathItem: {
          $visitor: p7
        }
      }
    }
  }
} = $;
class h7 extends p7 {
  constructor(e) {
    super(e), this.element = new ir();
  }
}
const d7 = h7, {
  visitors: {
    document: {
      objects: {
        SecurityScheme: {
          $visitor: m7
        }
      }
    }
  }
} = $;
class y7 extends m7 {
  constructor(e) {
    super(e), this.element = new gc();
  }
}
const v7 = y7, {
  visitors: {
    document: {
      objects: {
        OAuthFlows: {
          $visitor: g7
        }
      }
    }
  }
} = $;
class b7 extends g7 {
  constructor(e) {
    super(e), this.element = new Vp();
  }
}
const x7 = b7, {
  visitors: {
    document: {
      objects: {
        OAuthFlow: {
          $visitor: $7
        }
      }
    }
  }
} = $;
class S7 extends $7 {
  constructor(e) {
    super(e), this.element = new Np();
  }
}
const w7 = S7;
class E7 extends _(G, T) {
  constructor(e) {
    super(e), this.element = new Wu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = G.prototype.ObjectElement.call(this, e);
    return this.element.filter(Lr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter(Tr).forEach((n, s) => {
      n.setMetaProperty("webhook-name", w(s));
    }), r;
  }
}
const O7 = E7, A7 = {
  visitors: {
    value: $.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: p8,
          fixedFields: {
            openapi: $.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: A8,
            servers: $.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: O7,
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
          $visitor: m8,
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
          $visitor: g8,
          fixedFields: {
            name: $.visitors.document.objects.Contact.fixedFields.name,
            url: $.visitors.document.objects.Contact.fixedFields.url,
            email: $.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: $8,
          fixedFields: {
            name: $.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: $.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: T8,
          fixedFields: {
            url: $.visitors.document.objects.Server.fixedFields.url,
            description: $.visitors.document.objects.Server.fixedFields.description,
            variables: $.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: C8,
          fixedFields: {
            enum: $.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: $.visitors.document.objects.ServerVariable.fixedFields.default,
            description: $.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: B8,
          fixedFields: {
            schemas: Nq,
            responses: $.visitors.document.objects.Components.fixedFields.responses,
            parameters: $.visitors.document.objects.Components.fixedFields.parameters,
            examples: $.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: $.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: $.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: $.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: $.visitors.document.objects.Components.fixedFields.links,
            callbacks: $.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: kq
          }
        },
        Paths: {
          $visitor: Xq
        },
        PathItem: {
          $visitor: d7,
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
          $visitor: f7,
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
          $visitor: Gq,
          fixedFields: {
            description: $.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: $.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: Y8,
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
          $visitor: e7,
          fixedFields: {
            description: $.visitors.document.objects.RequestBody.fixedFields.description,
            content: $.visitors.document.objects.RequestBody.fixedFields.content,
            required: $.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: M8,
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
          $visitor: Kq,
          fixedFields: {
            contentType: $.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: $.visitors.document.objects.Encoding.fixedFields.headers,
            style: $.visitors.document.objects.Encoding.fixedFields.style,
            explode: $.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: $.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: c7,
          fixedFields: {
            default: $.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: i7,
          fixedFields: {
            description: $.visitors.document.objects.Response.fixedFields.description,
            headers: $.visitors.document.objects.Response.fixedFields.headers,
            content: $.visitors.document.objects.Response.fixedFields.content,
            links: $.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: r7
        },
        Example: {
          $visitor: Uq,
          fixedFields: {
            summary: $.visitors.document.objects.Example.fixedFields.summary,
            description: $.visitors.document.objects.Example.fixedFields.description,
            value: $.visitors.document.objects.Example.fixedFields.value,
            externalValue: $.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: E8,
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
          $visitor: Z8,
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
          $visitor: q8,
          fixedFields: {
            name: $.visitors.document.objects.Tag.fixedFields.name,
            description: $.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: J8,
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
          $visitor: tq,
          fixedFields: {
            // core vocabulary
            $schema: {
              $ref: "#/visitors/value"
            },
            $vocabulary: nq,
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
            $ref: iq,
            $defs: aq,
            $comment: {
              $ref: "#/visitors/value"
            },
            // applicator vocabulary
            allOf: lq,
            anyOf: fq,
            oneOf: hq,
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
            dependentSchemas: mq,
            prefixItems: vq,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: bq,
            patternProperties: $q,
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
            type: wq,
            enum: Oq,
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
            dependentRequired: Pq,
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
            examples: Tq,
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
          $visitor: Cq,
          fixedFields: {
            propertyName: $.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: $.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: Mq,
          fixedFields: {
            name: $.visitors.document.objects.XML.fixedFields.name,
            namespace: $.visitors.document.objects.XML.fixedFields.namespace,
            prefix: $.visitors.document.objects.XML.fixedFields.prefix,
            attribute: $.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: $.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: v7,
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
          $visitor: x7,
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
          $visitor: w7,
          fixedFields: {
            authorizationUrl: $.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: $.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: $.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: $.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: V8
        }
      },
      extension: {
        $visitor: $.visitors.document.extension.$visitor
      }
    }
  }
}, P7 = A7, j7 = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = gp(t), s = Ma(P7), i = ze(e, s), o = new i({
    specObj: s
  });
  return Ve(n, o), Dn(o.element, r, {
    toolboxCreator: Ox,
    visitorOptions: {
      keyMap: St,
      nodeTypeGetter: lt
    }
  });
}, ee = (t) => (e, r = {}) => j7(e, {
  specPath: t,
  ...r
});
rc.refract = ee(["visitors", "document", "objects", "Callback", "$visitor"]);
nc.refract = ee(["visitors", "document", "objects", "Components", "$visitor"]);
sc.refract = ee(["visitors", "document", "objects", "Contact", "$visitor"]);
ic.refract = ee(["visitors", "document", "objects", "Example", "$visitor"]);
Mp.refract = ee(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Dp.refract = ee(["visitors", "document", "objects", "Encoding", "$visitor"]);
oc.refract = ee(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
ac.refract = ee(["visitors", "document", "objects", "Header", "$visitor"]);
cc.refract = ee(["visitors", "document", "objects", "Info", "$visitor"]);
jr.refract = ee(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
lc.refract = ee(["visitors", "document", "objects", "License", "$visitor"]);
uc.refract = ee(["visitors", "document", "objects", "Link", "$visitor"]);
fc.refract = ee(["visitors", "document", "objects", "MediaType", "$visitor"]);
Np.refract = ee(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Vp.refract = ee(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
kp.refract = ee(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
pr.refract = ee(["visitors", "document", "objects", "OpenApi", "$visitor"]);
li.refract = ee(["visitors", "document", "objects", "Operation", "$visitor"]);
pc.refract = ee(["visitors", "document", "objects", "Parameter", "$visitor"]);
ir.refract = ee(["visitors", "document", "objects", "PathItem", "$visitor"]);
hc.refract = ee(["visitors", "document", "objects", "Paths", "$visitor"]);
hr.refract = ee(["visitors", "document", "objects", "Reference", "$visitor"]);
dc.refract = ee(["visitors", "document", "objects", "RequestBody", "$visitor"]);
mc.refract = ee(["visitors", "document", "objects", "Response", "$visitor"]);
yc.refract = ee(["visitors", "document", "objects", "Responses", "$visitor"]);
kr.refract = ee(["visitors", "document", "objects", "Schema", "$visitor"]);
vc.refract = ee(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
gc.refract = ee(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
bc.refract = ee(["visitors", "document", "objects", "Server", "$visitor"]);
xc.refract = ee(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Lp.refract = ee(["visitors", "document", "objects", "Tag", "$visitor"]);
Bp.refract = ee(["visitors", "document", "objects", "XML", "$visitor"]);
class T7 extends ks {
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
      const r = unescape(encodeURIComponent(e.toString())), n = btoa(r), s = new ft();
      if (n.length !== 0) {
        const i = new Dt(n);
        i.classes.push("result"), s.push(i);
      }
      return s;
    } catch (r) {
      throw new Vt(`Error parsing "${e.uri}"`, {
        cause: r
      });
    }
  }
}
const _7 = T7;
class R7 extends N3 {
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
      throw new Gb('"openapi-3-1" dereference strategy is not available.');
    const s = new gn(), i = Gg(r, {
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
const C7 = R7, Ax = (t) => {
  if (!Q(t) || t.hasKey("$$normalized"))
    return t;
  const e = [NH({
    operationIdNormalizer: (n, s, i) => Ls({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), CH(), IH(), FH(), VH(), kH()], r = Dn(t, e, {
    toolboxCreator: Ox,
    visitorOptions: {
      keyMap: St,
      nodeTypeGetter: lt
    }
  });
  return r.set("$$normalized", !0), r;
}, ts = (t) => (e) => {
  if (e != null && e.$$normalized)
    return e;
  if (ts.cache.has(e))
    return ts.cache.get(e);
  const r = pr.refract(e), n = t(r), s = w(n);
  return ts.cache.set(e, s), s;
};
ts.cache = /* @__PURE__ */ new WeakMap();
const {
  AbortController: I7,
  AbortSignal: F7
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = I7);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = F7);
class Px extends D3 {
  constructor({
    swaggerHTTPClient: r = fn,
    swaggerHTTPClientConfig: n = {},
    ...s
  } = {}) {
    super({
      ...s,
      name: "http-swagger-client"
    });
    x(this, "swaggerHTTPClient", fn);
    x(this, "swaggerHTTPClientConfig");
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
        userFetch: async (u, d) => {
          let p = await fetch(u, d);
          try {
            p.headers.delete("Content-Type");
          } catch {
            p = new Response(p.body, {
              ...p,
              headers: new Headers(p.headers)
            }), p.headers.delete("Content-Type");
          }
          return p;
        },
        credentials: a,
        redirect: c,
        follow: l,
        ...this.swaggerHTTPClientConfig
      })).text.arrayBuffer();
    } catch (f) {
      throw new zg(`Error downloading "${r.uri}"`, {
        cause: f
      });
    } finally {
      clearTimeout(o);
    }
  }
}
class jx extends ks {
  constructor(e = {}) {
    super({
      ...e,
      name: "json-swagger-client",
      fileExtensions: [".json"],
      mediaTypes: ["application/json"]
    });
  }
  async canParse(e) {
    const r = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), n = this.mediaTypes.includes(e.mediaType);
    if (!r)
      return !1;
    if (n)
      return !0;
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
      throw new Vt("json-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new ft(), n = e.toString();
    if (this.allowEmpty && n.trim() === "")
      return r;
    try {
      const s = qb(JSON.parse(n));
      return s.classes.push("result"), r.push(s), r;
    } catch (s) {
      throw new Vt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class Tx extends ks {
  constructor(e = {}) {
    super({
      ...e,
      name: "yaml-1-2-swagger-client",
      fileExtensions: [".yaml", ".yml"],
      mediaTypes: ["text/yaml", "application/yaml"]
    });
  }
  async canParse(e) {
    const r = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), n = this.mediaTypes.includes(e.mediaType);
    if (!r)
      return !1;
    if (n)
      return !0;
    if (!n)
      try {
        return un.load(e.toString(), {
          schema: qi
        }), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new Vt("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new ft(), n = e.toString();
    try {
      const s = un.load(n, {
        schema: qi
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = qb(s);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new Vt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class _x extends ks {
  constructor(r = {}) {
    super({
      ...r,
      name: "openapi-json-3-1-swagger-client",
      fileExtensions: [".json"],
      mediaTypes: new Rp(...xn.filterByFormat("generic"), ...xn.filterByFormat("json"))
    });
    x(this, "detectionRegExp", /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/);
  }
  async canParse(r) {
    const n = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(r.extension), s = this.mediaTypes.includes(r.mediaType);
    if (!n)
      return !1;
    if (s)
      return !0;
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
      throw new Vt("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new ft(), s = r.toString();
    if (this.allowEmpty && s.trim() === "")
      return n;
    try {
      const i = JSON.parse(s), o = pr.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new Vt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
class Rx extends ks {
  constructor(r = {}) {
    super({
      name: "openapi-yaml-3-1-swagger-client",
      ...r,
      fileExtensions: [".yaml", ".yml"],
      mediaTypes: new Rp(...xn.filterByFormat("generic"), ...xn.filterByFormat("yaml"))
    });
    x(this, "detectionRegExp", /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m);
  }
  async canParse(r) {
    const n = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(r.extension), s = this.mediaTypes.includes(r.mediaType);
    if (!n)
      return !1;
    if (s)
      return !0;
    if (!s)
      try {
        const i = r.toString();
        return un.load(i), this.detectionRegExp.test(i);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(r) {
    if (this.sourceMap)
      throw new Vt("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new ft(), s = r.toString();
    try {
      const i = un.load(s, {
        schema: qi
      });
      if (this.allowEmpty && typeof i > "u")
        return n;
      const o = pr.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new Vt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
const $c = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), Sn = (t) => {
  const e = fp(t);
  return ap("#", e);
}, M7 = (t) => {
  if (!$c(t))
    throw new H3(t);
  return t;
}, qp = (t, e) => {
  const r = M7(t), n = Lb((s) => kt(s) && w(s.$anchor) === r, e);
  if (ur(n))
    throw new L3(`Evaluation failed on token: "${r}"`);
  return n;
}, Cx = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = fp(w(e.$ref)), n = w(e.meta.get("inherited$id"));
  return `${Fr((i, o) => Pe(i, Is(oe(o))), t, [...n, w(e.$ref)])}${r === "#" ? "" : r}`;
}, D7 = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = w(e.meta.get("inherited$id"));
  return Fr((n, s) => Pe(n, Is(oe(s))), t, [...r, w(e.$id)]);
}, rs = (t) => {
  if (rs.cache.has(t))
    return rs.cache.get(t);
  const e = kr.refract(t);
  return rs.cache.set(t, e), e;
};
rs.cache = /* @__PURE__ */ new WeakMap();
const Me = (t) => Ar(t) ? rs(t) : t, Sc = (t, e) => {
  const {
    cache: r
  } = Sc, n = oe(t), s = (c) => kt(c) && typeof c.$id < "u";
  if (!r.has(e)) {
    const c = x3(s, e);
    r.set(e, Array.from(c));
  }
  const i = r.get(e).find((c) => D7(n, c) === n);
  if (ur(i))
    throw new Op(`Evaluation failed on URI: "${t}"`);
  let o, a;
  return $c(Sn(t)) ? (o = qp, a = Sn(t)) : (o = ct, a = Qe(t)), o(a, i);
};
Sc.cache = /* @__PURE__ */ new WeakMap();
const xl = Ve[Symbol.for("nodejs.util.promisify.custom")], Te = new wp(), vt = (t, e, r, n) => {
  dt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class sn {
  constructor({
    reference: e,
    namespace: r,
    options: n,
    indirections: s = [],
    ancestors: i = new vl(),
    refractCache: o = /* @__PURE__ */ new Map()
  }) {
    x(this, "indirections");
    x(this, "namespace");
    x(this, "reference");
    x(this, "options");
    x(this, "ancestors");
    x(this, "refractCache");
    this.indirections = s, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new vl(...i), this.refractCache = o;
  }
  toBaseURI(e) {
    return Pe(this.reference.uri, Is(oe(e)));
  }
  async toReference(e) {
    if (this.reference.depth >= this.options.resolve.maxDepth)
      throw new q3(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    const r = this.toBaseURI(e), {
      refSet: n
    } = this.reference;
    if (n.has(r))
      return n.find(Tg(r, "uri"));
    const s = await hF(at(r), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: "text/plain"
      }
    }), i = new Ft({
      uri: r,
      value: F(s),
      depth: this.reference.depth + 1
    });
    if (n.add(i), this.options.dereference.immutable) {
      const o = new Ft({
        uri: `immutable://${r}`,
        value: s,
        depth: this.reference.depth + 1
      });
      n.add(o);
    }
    return i;
  }
  toAncestorLineage(e) {
    const r = new Set(e.filter(we));
    return [new vl(...this.ancestors, r), r];
  }
  async ReferenceElement(e, r, n, s, i, o) {
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), l = this.toBaseURI(w(e.$ref)), f = oe(this.reference.uri) === l, u = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && u)
      return !1;
    const d = await this.toReference(w(e.$ref)), p = Pe(l, w(e.$ref));
    this.indirections.push(e);
    const m = Qe(p);
    let h = ct(m, d.value.result);
    if (h.id = Te.identify(h), Ar(h)) {
      const C = w(e.meta.get("referenced-element")), O = `${C}-${w(Te.identify(h))}`;
      this.refractCache.has(O) ? h = this.refractCache.get(O) : fe(h) ? (h = hr.refract(h), h.setMetaProperty("referenced-element", C), this.refractCache.set(O, h)) : (h = this.namespace.getElementClass(C).refract(h), this.refractCache.set(O, h));
    }
    if (e === h)
      throw new me("Recursive Reference Object detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(h)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new me("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var g, y;
        const C = new It(h.id, {
          type: "reference",
          uri: d.uri,
          $ref: w(e.$ref)
        }), R = ((g = (y = this.options.dereference.strategyOpts["openapi-3-1"]) === null || y === void 0 ? void 0 : y.circularReplacer) !== null && g !== void 0 ? g : this.options.dereference.circularReplacer)(C);
        return o.replaceWith(R, vt), n ? !1 : R;
      }
    }
    const v = oe(d.refSet.rootRef.uri) !== d.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
    if ((u || v || Lr(h) || b) && !a.includesCycle(h)) {
      c.add(e);
      const C = new sn({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      h = await xl(h, C, {
        keyMap: St,
        nodeTypeGetter: lt
      }), c.delete(e);
    }
    this.indirections.pop();
    const S = Le(h);
    return S.setMetaProperty("id", Te.generateId()), S.setMetaProperty("ref-fields", {
      $ref: w(e.$ref),
      // @ts-ignore
      description: w(e.description),
      // @ts-ignore
      summary: w(e.summary)
    }), S.setMetaProperty("ref-origin", d.uri), S.setMetaProperty("ref-referencing-element-id", F(Te.identify(e))), Q(h) && Q(S) && (e.hasKey("description") && "description" in h && (S.remove("description"), S.set("description", e.get("description"))), e.hasKey("summary") && "summary" in h && (S.remove("summary"), S.set("summary", e.get("summary")))), o.replaceWith(S, vt), n ? !1 : S;
  }
  async PathItemElement(e, r, n, s, i, o) {
    if (!W(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), l = this.toBaseURI(w(e.$ref)), f = oe(this.reference.uri) === l, u = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && u)
      return;
    const d = await this.toReference(w(e.$ref)), p = Pe(l, w(e.$ref));
    this.indirections.push(e);
    const m = Qe(p);
    let h = ct(m, d.value.result);
    if (h.id = Te.identify(h), Ar(h)) {
      const S = `path-item-${w(Te.identify(h))}`;
      this.refractCache.has(S) ? h = this.refractCache.get(S) : (h = ir.refract(h), this.refractCache.set(S, h));
    }
    if (e === h)
      throw new me("Recursive Path Item Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(h)) {
      if (d.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new me("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var g, y;
        const S = new It(h.id, {
          type: "path-item",
          uri: d.uri,
          $ref: w(e.$ref)
        }), O = ((g = (y = this.options.dereference.strategyOpts["openapi-3-1"]) === null || y === void 0 ? void 0 : y.circularReplacer) !== null && g !== void 0 ? g : this.options.dereference.circularReplacer)(S);
        return o.replaceWith(O, vt), n ? !1 : O;
      }
    }
    const v = oe(d.refSet.rootRef.uri) !== d.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
    if ((u || v || Tr(h) && W(h.$ref) || b) && !a.includesCycle(h)) {
      c.add(e);
      const S = new sn({
        reference: d,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      h = await xl(h, S, {
        keyMap: St,
        nodeTypeGetter: lt
      }), c.delete(e);
    }
    if (this.indirections.pop(), Tr(h)) {
      const S = new ir([...h.content], F(h.meta), F(h.attributes));
      S.setMetaProperty("id", Te.generateId()), e.forEach((C, O, R) => {
        S.remove(w(O)), S.content.push(R);
      }), S.remove("$ref"), S.setMetaProperty("ref-fields", {
        $ref: w(e.$ref)
      }), S.setMetaProperty("ref-origin", d.uri), S.setMetaProperty("ref-referencing-element-id", F(Te.identify(e))), h = S;
    }
    return o.replaceWith(h, vt), n ? void 0 : h;
  }
  async LinkElement(e, r, n, s, i, o) {
    if (!W(e.operationRef) && !W(e.operationId))
      return;
    if (W(e.operationRef) && W(e.operationId))
      throw new me("LinkElement operationRef and operationId fields are mutually exclusive.");
    let a;
    if (W(e.operationRef)) {
      var c;
      const f = Qe(w(e.operationRef)), u = this.toBaseURI(w(e.operationRef)), d = oe(this.reference.uri) === u, p = !d;
      if (!this.options.resolve.internal && d || !this.options.resolve.external && p)
        return;
      const m = await this.toReference(w(e.operationRef));
      if (a = ct(f, m.value.result), Ar(a)) {
        const g = `operation-${w(Te.identify(a))}`;
        this.refractCache.has(g) ? a = this.refractCache.get(g) : (a = li.refract(a), this.refractCache.set(g, a));
      }
      a = Le(a), a.setMetaProperty("ref-origin", m.uri);
      const h = Le(e);
      return (c = h.operationRef) === null || c === void 0 || c.meta.set("operation", a), o.replaceWith(h, vt), n ? void 0 : h;
    }
    if (W(e.operationId)) {
      var l;
      const f = w(e.operationId), u = await this.toReference(at(this.reference.uri));
      if (a = Lb((p) => Ex(p) && we(p.operationId) && p.operationId.equals(f), u.value.result), ur(a))
        throw new me(`OperationElement(operationId=${f}) not found.`);
      const d = Le(e);
      return (l = d.operationId) === null || l === void 0 || l.meta.set("operation", a), o.replaceWith(d, vt), n ? void 0 : d;
    }
  }
  async ExampleElement(e, r, n, s, i, o) {
    if (!W(e.externalValue))
      return;
    if (e.hasKey("value") && W(e.externalValue))
      throw new me("ExampleElement value and externalValue fields are mutually exclusive.");
    const a = this.toBaseURI(w(e.externalValue)), c = oe(this.reference.uri) === a, l = !c;
    if (!this.options.resolve.internal && c || !this.options.resolve.external && l)
      return;
    const f = await this.toReference(w(e.externalValue)), u = Le(f.value.result);
    u.setMetaProperty("ref-origin", f.uri);
    const d = Le(e);
    return d.value = u, o.replaceWith(d, vt), n ? void 0 : d;
  }
  async SchemaElement(e, r, n, s, i, o) {
    if (!W(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]);
    let l = await this.toReference(at(this.reference.uri)), {
      uri: f
    } = l;
    const u = Cx(f, e), d = oe(u), p = new hs({
      uri: d
    }), m = kC((R) => R.canRead(p), this.options.resolve.resolvers), h = !m;
    let g = oe(this.reference.uri) === u, y = !g;
    this.indirections.push(e);
    let v;
    try {
      if (m || h) {
        f = this.toBaseURI(u);
        const R = u, V = Me(l.value.result);
        if (v = Sc(R, V), v = Me(v), v.id = Te.identify(v), !this.options.resolve.internal && g || !this.options.resolve.external && y)
          return;
      } else {
        if (f = this.toBaseURI(u), g = oe(this.reference.uri) === f, y = !g, !this.options.resolve.internal && g || !this.options.resolve.external && y)
          return;
        l = await this.toReference(at(u));
        const R = Qe(u), V = Me(l.value.result);
        v = ct(R, V), v = Me(v), v.id = Te.identify(v);
      }
    } catch (R) {
      if (h && R instanceof Op)
        if ($c(Sn(u))) {
          if (g = oe(this.reference.uri) === f, y = !g, !this.options.resolve.internal && g || !this.options.resolve.external && y)
            return;
          l = await this.toReference(at(u));
          const V = Sn(u), A = Me(l.value.result);
          v = qp(V, A), v = Me(v), v.id = Te.identify(v);
        } else {
          if (f = this.toBaseURI(u), g = oe(this.reference.uri) === f, y = !g, !this.options.resolve.internal && g || !this.options.resolve.external && y)
            return;
          l = await this.toReference(at(u));
          const V = Qe(u), A = Me(l.value.result);
          v = ct(V, A), v = Me(v), v.id = Te.identify(v);
        }
      else
        throw R;
    }
    if (e === v)
      throw new me("Recursive Schema Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(v)) {
      if (l.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new me("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var b, S;
        const R = new It(v.id, {
          type: "json-schema",
          uri: l.uri,
          $ref: w(e.$ref)
        }), A = ((b = (S = this.options.dereference.strategyOpts["openapi-3-1"]) === null || S === void 0 ? void 0 : S.circularReplacer) !== null && b !== void 0 ? b : this.options.dereference.circularReplacer)(R);
        return o.replaceWith(A, vt), n ? !1 : A;
      }
    }
    const C = oe(l.refSet.rootRef.uri) !== l.uri, O = ["error", "replace"].includes(this.options.dereference.circular);
    if ((y || C || kt(v) && W(v.$ref) || O) && !a.includesCycle(v)) {
      c.add(e);
      const R = new sn({
        reference: l,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      v = await xl(v, R, {
        keyMap: St,
        nodeTypeGetter: lt
      }), c.delete(e);
    }
    if (this.indirections.pop(), Hp(v)) {
      const R = F(v);
      return R.setMetaProperty("id", Te.generateId()), R.setMetaProperty("ref-fields", {
        $ref: w(e.$ref)
      }), R.setMetaProperty("ref-origin", l.uri), R.setMetaProperty("ref-referencing-element-id", F(Te.identify(e))), o.replaceWith(R, vt), n ? !1 : R;
    }
    if (kt(v)) {
      const R = new kr([...v.content], F(v.meta), F(v.attributes));
      R.setMetaProperty("id", Te.generateId()), e.forEach((V, A, M) => {
        R.remove(w(A)), R.content.push(M);
      }), R.remove("$ref"), R.setMetaProperty("ref-fields", {
        $ref: w(e.$ref)
      }), R.setMetaProperty("ref-origin", l.uri), R.setMetaProperty("ref-referencing-element-id", F(Te.identify(e))), v = R;
    }
    return o.replaceWith(v, vt), n ? void 0 : v;
  }
}
const N7 = Ve[Symbol.for("nodejs.util.promisify.custom")];
class V7 extends V3 {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canDereference(e) {
    var r;
    return e.mediaType !== "text/plain" ? xn.includes(e.mediaType) : wx((r = e.parseResult) === null || r === void 0 ? void 0 : r.result);
  }
  async dereference(e, r) {
    var n;
    const s = Ns(Up), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new gn(), o = new gn();
    let a = i, c;
    i.has(e.uri) ? c = i.find(Tg(e.uri, "uri")) : (c = new Ft({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((u) => new Ft({
      ...u,
      value: F(u.value)
    })).forEach((u) => o.add(u)), c = o.find((u) => u.uri === e.uri), a = o);
    const l = new sn({
      reference: c,
      namespace: s,
      options: r
    }), f = await N7(a.rootRef.value, l, {
      keyMap: St,
      nodeTypeGetter: lt
    });
    return r.dereference.immutable && o.refs.filter((u) => u.uri.startsWith("immutable://")).map((u) => new Ft({
      ...u,
      uri: u.uri.replace(/^immutable:\/\//, "")
    })).forEach((u) => i.add(u)), r.dereference.refSet === null && i.clean(), o.clean(), f;
  }
}
const k7 = (t) => t.slice(2), it = (t) => {
  const e = k7(t);
  return e.reduce((r, n, s) => {
    if (dt(n)) {
      const i = String(w(n.key));
      r.push(i);
    } else if (Ue(e[s - 2])) {
      const i = e[s - 2].content.indexOf(n);
      r.push(i);
    }
    return r;
  }, []);
};
class L7 {
  constructor({
    modelPropertyMacro: e,
    options: r
  }) {
    x(this, "modelPropertyMacro");
    x(this, "options");
    x(this, "SchemaElement", {
      leave: (e, r, n, s, i) => {
        typeof e.properties > "u" || Q(e.properties) && e.properties.forEach((o) => {
          if (Q(o))
            try {
              const l = this.modelPropertyMacro(w(o));
              o.set("default", l);
            } catch (l) {
              var a, c;
              const f = new Error(l, {
                cause: l
              });
              f.fullPath = [...it([...i, n, e]), "properties"], (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, f);
            }
        });
      }
    });
    this.modelPropertyMacro = e, this.options = r;
  }
}
class B7 {
  constructor({
    options: e
  }) {
    x(this, "options");
    x(this, "SchemaElement", {
      leave(e, r, n, s, i) {
        if (typeof e.allOf > "u")
          return;
        if (!Ue(e.allOf)) {
          var o, a;
          const u = new TypeError("allOf must be an array");
          u.fullPath = [...it([...i, n, e]), "allOf"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, u);
          return;
        }
        if (e.allOf.isEmpty) {
          e.remove("allOf");
          return;
        }
        if (!e.allOf.content.every(kt)) {
          var l, f;
          const u = new TypeError("Elements in allOf must be objects");
          u.fullPath = [...it([...i, n, e]), "allOf"], (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (f = l.push) === null || f === void 0 || f.call(l, u);
          return;
        }
        for (; e.hasKey("allOf"); ) {
          const {
            allOf: u
          } = e;
          e.remove("allOf");
          const d = wt.all([...u.content, e]);
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
    });
    this.options = e;
  }
}
var xr;
class U7 {
  constructor({
    parameterMacro: e,
    options: r
  }) {
    x(this, "parameterMacro");
    x(this, "options");
    Kp(this, xr, void 0);
    x(this, "OperationElement", {
      enter: (e) => {
        Oc(this, xr, e);
      },
      leave: () => {
        Oc(this, xr, void 0);
      }
    });
    x(this, "ParameterElement", {
      leave: (e, r, n, s, i) => {
        const o = Ec(this, xr) ? w(Ec(this, xr)) : null, a = w(e);
        try {
          const f = this.parameterMacro(o, a);
          e.set("default", f);
        } catch (f) {
          var c, l;
          const u = new Error(f, {
            cause: f
          });
          u.fullPath = it([...i, n]), (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (l = c.push) === null || l === void 0 || l.call(c, u);
        }
      }
    });
    this.parameterMacro = e, this.options = r;
  }
}
xr = new WeakMap();
const Si = (t) => {
  if (t.cause == null)
    return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
};
class H7 extends ut {
}
const {
  wrapError: $l
} = Ap, Sl = Ve[Symbol.for("nodejs.util.promisify.custom")], Xe = new wp(), dr = (t, e, r, n) => {
  dt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class ns extends sn {
  constructor({
    allowMetaPatches: r = !0,
    useCircularStructures: n = !1,
    basePath: s = null,
    ...i
  }) {
    super(i);
    x(this, "useCircularStructures");
    x(this, "allowMetaPatches");
    x(this, "basePath");
    this.allowMetaPatches = r, this.useCircularStructures = n, this.basePath = s;
  }
  async ReferenceElement(r, n, s, i, o, a) {
    try {
      if (this.indirections.includes(r))
        return !1;
      const [m, h] = this.toAncestorLineage([...o, s]), g = this.toBaseURI(w(r.$ref)), y = oe(this.reference.uri) === g, v = !y;
      if (!this.options.resolve.internal && y || !this.options.resolve.external && v)
        return !1;
      const b = await this.toReference(w(r.$ref)), S = Pe(g, w(r.$ref));
      this.indirections.push(r);
      const C = Qe(S);
      let O = ct(C, b.value.result);
      if (O.id = Xe.identify(O), Ar(O)) {
        const M = w(r.meta.get("referenced-element")), P = `${M}-${w(Xe.identify(O))}`;
        this.refractCache.has(P) ? O = this.refractCache.get(P) : fe(O) ? (O = hr.refract(O), O.setMetaProperty("referenced-element", M), this.refractCache.set(P, O)) : (O = this.namespace.getElementClass(M).refract(O), this.refractCache.set(P, O));
      }
      if (r === O)
        throw new me("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(O)) {
        if (b.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const M = new It(O.id, {
            type: "reference",
            uri: b.uri,
            $ref: w(r.$ref),
            baseURI: S,
            referencingElement: r
          }), E = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(M);
          return a.replaceWith(M, dr), s ? !1 : E;
        }
      }
      const R = oe(b.refSet.rootRef.uri) !== b.uri, V = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || R || Lr(O) || V) && !m.includesCycle(O)) {
        var f;
        h.add(r);
        const M = new ns({
          reference: b,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          refractCache: this.refractCache,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...it([...o, s, r]), "$ref"]
        });
        O = await Sl(O, M, {
          keyMap: St,
          nodeTypeGetter: lt
        }), h.delete(r);
      }
      this.indirections.pop();
      const A = Le(O);
      if (A.setMetaProperty("ref-fields", {
        $ref: w(r.$ref),
        description: w(r.description),
        summary: w(r.summary)
      }), A.setMetaProperty("ref-origin", b.uri), A.setMetaProperty("ref-referencing-element-id", F(Xe.identify(r))), Q(O) && (r.hasKey("description") && "description" in O && (A.remove("description"), A.set("description", r.get("description"))), r.hasKey("summary") && "summary" in O && (A.remove("summary"), A.set("summary", r.get("summary")))), this.allowMetaPatches && Q(A) && !A.hasKey("$$ref")) {
        const M = Pe(g, S);
        A.set("$$ref", M);
      }
      return a.replaceWith(A, dr), s ? !1 : A;
    } catch (m) {
      var u, d, p;
      const h = Si(m), g = $l(h, {
        baseDoc: this.reference.uri,
        $ref: w(r.$ref),
        pointer: Qe(w(r.$ref)),
        fullPath: (u = this.basePath) !== null && u !== void 0 ? u : [...it([...o, s, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (p = d.push) === null || p === void 0 || p.call(d, g);
      return;
    }
  }
  async PathItemElement(r, n, s, i, o, a) {
    try {
      if (!W(r.$ref))
        return;
      if (this.indirections.includes(r) || Ca(["cycle"], r.$ref))
        return !1;
      const [m, h] = this.toAncestorLineage([...o, s]), g = this.toBaseURI(w(r.$ref)), y = oe(this.reference.uri) === g, v = !y;
      if (!this.options.resolve.internal && y || !this.options.resolve.external && v)
        return;
      const b = await this.toReference(w(r.$ref)), S = Pe(g, w(r.$ref));
      this.indirections.push(r);
      const C = Qe(S);
      let O = ct(C, b.value.result);
      if (O.id = Xe.identify(O), Ar(O)) {
        const A = `path-item-${w(Xe.identify(O))}`;
        this.refractCache.has(A) ? O = this.refractCache.get(A) : (O = ir.refract(O), this.refractCache.set(A, O));
      }
      if (r === O)
        throw new me("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(O)) {
        if (b.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const A = new It(O.id, {
            type: "path-item",
            uri: b.uri,
            $ref: w(r.$ref),
            baseURI: S,
            referencingElement: r
          }), P = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(A);
          return a.replaceWith(A, dr), s ? !1 : P;
        }
      }
      const R = oe(b.refSet.rootRef.uri) !== b.uri, V = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || R || Tr(O) && W(O.$ref) || V) && !m.includesCycle(O)) {
        var f;
        h.add(r);
        const A = new ns({
          reference: b,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...it([...o, s, r]), "$ref"]
        });
        O = await Sl(O, A, {
          keyMap: St,
          nodeTypeGetter: lt
        }), h.delete(r);
      }
      if (this.indirections.pop(), Tr(O)) {
        const A = new ir([...O.content], F(O.meta), F(O.attributes));
        if (r.forEach((M, P, E) => {
          A.remove(w(P)), A.content.push(E);
        }), A.remove("$ref"), A.setMetaProperty("ref-fields", {
          $ref: w(r.$ref)
        }), A.setMetaProperty("ref-origin", b.uri), A.setMetaProperty("ref-referencing-element-id", F(Xe.identify(r))), this.allowMetaPatches && typeof A.get("$$ref") > "u") {
          const M = Pe(g, S);
          A.set("$$ref", M);
        }
        O = A;
      }
      return a.replaceWith(O, dr), s ? void 0 : O;
    } catch (m) {
      var u, d, p;
      const h = Si(m), g = $l(h, {
        baseDoc: this.reference.uri,
        $ref: w(r.$ref),
        pointer: Qe(w(r.$ref)),
        fullPath: (u = this.basePath) !== null && u !== void 0 ? u : [...it([...o, s, r]), "$ref"]
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (p = d.push) === null || p === void 0 || p.call(d, g);
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
      let g = await this.toReference(at(this.reference.uri)), {
        uri: y
      } = g;
      const v = Cx(y, r), b = oe(v), S = new hs({
        uri: b
      }), C = !this.options.resolve.resolvers.some((E) => E.canRead(S)), O = !C;
      let R = oe(this.reference.uri) === v, V = !R;
      this.indirections.push(r);
      let A;
      try {
        if (C || O) {
          y = this.toBaseURI(v);
          const E = v, D = Me(g.value.result);
          if (A = Sc(E, D), A = Me(A), A.id = Xe.identify(A), !this.options.resolve.internal && R || !this.options.resolve.external && V)
            return;
        } else {
          if (y = this.toBaseURI(v), R = oe(this.reference.uri) === y, V = !R, !this.options.resolve.internal && R || !this.options.resolve.external && V)
            return;
          g = await this.toReference(at(v));
          const E = Qe(v), D = Me(g.value.result);
          A = ct(E, D), A = Me(A), A.id = Xe.identify(A);
        }
      } catch (E) {
        if (O && E instanceof Op)
          if ($c(Sn(v))) {
            if (R = oe(this.reference.uri) === y, V = !R, !this.options.resolve.internal && R || !this.options.resolve.external && V)
              return;
            g = await this.toReference(at(v));
            const D = Sn(v), k = Me(g.value.result);
            A = qp(D, k), A = Me(A), A.id = Xe.identify(A);
          } else {
            if (y = this.toBaseURI(w(v)), R = oe(this.reference.uri) === y, V = !R, !this.options.resolve.internal && R || !this.options.resolve.external && V)
              return;
            g = await this.toReference(at(v));
            const D = Qe(v), k = Me(g.value.result);
            A = ct(D, k), A = Me(A), A.id = Xe.identify(A);
          }
        else
          throw E;
      }
      if (r === A)
        throw new me("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new nn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(A)) {
        if (g.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const E = new It(A.id, {
            type: "json-schema",
            uri: g.uri,
            $ref: w(r.$ref),
            baseURI: Pe(y, v),
            referencingElement: r
          }), k = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(E);
          return a.replaceWith(k, dr), s ? !1 : k;
        }
      }
      const M = oe(g.refSet.rootRef.uri) !== g.uri, P = ["error", "replace"].includes(this.options.dereference.circular);
      if ((V || M || kt(A) && W(A.$ref) || P) && !m.includesCycle(A)) {
        var f;
        h.add(r);
        const E = new ns({
          reference: g,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: m,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...it([...o, s, r]), "$ref"]
        });
        A = await Sl(A, E, {
          keyMap: St,
          nodeTypeGetter: lt
        }), h.delete(r);
      }
      if (this.indirections.pop(), Hp(A)) {
        const E = F(A);
        return E.setMetaProperty("ref-fields", {
          $ref: w(r.$ref)
        }), E.setMetaProperty("ref-origin", g.uri), E.setMetaProperty("ref-referencing-element-id", F(Xe.identify(r))), a.replaceWith(E, dr), s ? !1 : E;
      }
      if (kt(A)) {
        const E = new kr([...A.content], F(A.meta), F(A.attributes));
        if (r.forEach((D, k, te) => {
          E.remove(w(k)), E.content.push(te);
        }), E.remove("$ref"), E.setMetaProperty("ref-fields", {
          $ref: w(r.$ref)
        }), E.setMetaProperty("ref-origin", g.uri), E.setMetaProperty("ref-referencing-element-id", F(Xe.identify(r))), this.allowMetaPatches && typeof E.get("$$ref") > "u") {
          const D = Pe(y, v);
          E.set("$$ref", D);
        }
        A = E;
      }
      return a.replaceWith(A, dr), s ? void 0 : A;
    } catch (m) {
      var u, d, p;
      const h = Si(m), g = new H7(`Could not resolve reference: ${h.message}`, {
        baseDoc: this.reference.uri,
        $ref: w(r.$ref),
        fullPath: (u = this.basePath) !== null && u !== void 0 ? u : [...it([...o, s, r]), "$ref"],
        cause: h
      });
      (d = this.options.dereference.dereferenceOpts) === null || d === void 0 || (d = d.errors) === null || d === void 0 || (p = d.push) === null || p === void 0 || p.call(d, g);
      return;
    }
  }
  // eslint-disable-next-line class-methods-use-this
  async LinkElement() {
  }
  async ExampleElement(r, n, s, i, o, a) {
    try {
      return await super.ExampleElement(r, n, s, i, o, a);
    } catch (u) {
      var c, l, f;
      const d = Si(u), p = $l(d, {
        baseDoc: this.reference.uri,
        externalValue: w(r.externalValue),
        fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...it([...o, s, r]), "externalValue"]
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (f = l.push) === null || f === void 0 || f.call(l, p);
      return;
    }
  }
}
const q7 = Fa[Symbol.for("nodejs.util.promisify.custom")];
class G7 {
  constructor({
    parameterMacro: e,
    modelPropertyMacro: r,
    mode: n,
    options: s,
    ...i
  }) {
    const o = [];
    o.push(new ns({
      ...i,
      options: s
    })), typeof r == "function" && o.push(new L7({
      modelPropertyMacro: r,
      options: s
    })), n !== "strict" && o.push(new B7({
      options: s
    })), typeof e == "function" && o.push(new U7({
      parameterMacro: e,
      options: s
    }));
    const a = q7(o, {
      nodeTypeGetter: lt
    });
    Object.assign(this, a);
  }
}
const z7 = Ve[Symbol.for("nodejs.util.promisify.custom")];
class Ix extends V7 {
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
    x(this, "allowMetaPatches");
    x(this, "parameterMacro");
    x(this, "modelPropertyMacro");
    x(this, "mode");
    x(this, "ancestors");
    this.name = "openapi-3-1-swagger-client", this.allowMetaPatches = r, this.parameterMacro = n, this.modelPropertyMacro = s, this.mode = i, this.ancestors = [...o];
  }
  async dereference(r, n) {
    var s;
    const i = Ns(Up), o = (s = n.dereference.refSet) !== null && s !== void 0 ? s : new gn(), a = new gn();
    let c = o, l;
    o.has(r.uri) ? l = o.find((d) => d.uri === r.uri) : (l = new Ft({
      uri: r.uri,
      value: r.parseResult
    }), o.add(l)), n.dereference.immutable && (o.refs.map((d) => new Ft({
      ...d,
      value: F(d.value)
    })).forEach((d) => a.add(d)), l = a.find((d) => d.uri === r.uri), c = a);
    const f = new G7({
      reference: l,
      namespace: i,
      options: n,
      allowMetaPatches: this.allowMetaPatches,
      ancestors: this.ancestors,
      modelPropertyMacro: this.modelPropertyMacro,
      mode: this.mode,
      parameterMacro: this.parameterMacro
    }), u = await z7(c.rootRef.value, f, {
      keyMap: St,
      nodeTypeGetter: lt
    });
    return n.dereference.immutable && a.refs.filter((d) => d.uri.startsWith("immutable://")).map((d) => new Ft({
      ...d,
      uri: d.uri.replace(/^immutable:\/\//, "")
    })).forEach((d) => o.add(d)), n.dereference.refSet === null && o.clean(), a.clean(), u;
  }
}
const J7 = (t) => {
  const e = w(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
  return new I({
    $ref: e
  }, F(r.meta), F(r.attributes));
}, Gp = async (t) => {
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
    parameterMacro: f = null,
    modelPropertyMacro: u = null,
    mode: d = "non-strict"
  } = t;
  try {
    const {
      cache: p
    } = Gp, m = $a(io()) ? io() : Fi, h = vf(t), g = Pe(m, h);
    let y;
    p.has(e) ? y = p.get(e) : (y = pr.refract(e), y.classes.push("result"), p.set(e, y));
    const v = new ft([y]), b = px(o), S = b === "" ? "" : `#${b}`, C = ct(b, y), O = new Ft({
      uri: g,
      value: v
    }), R = new gn({
      refs: [O]
    });
    b !== "" && (R.rootRef = void 0);
    const V = [/* @__PURE__ */ new Set([C])], A = [], M = await G3(C, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${g}${S}`,
        resolvers: [new Px({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [new C7()]
      },
      parse: {
        mediaType: xn.latest(),
        parsers: [new _x({
          allowEmpty: !1,
          sourceMap: !1
        }), new Rx({
          allowEmpty: !1,
          sourceMap: !1
        }), new jx({
          allowEmpty: !1,
          sourceMap: !1
        }), new Tx({
          allowEmpty: !1,
          sourceMap: !1
        }), new _7({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [new Ix({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: f,
          modelPropertyMacro: u,
          mode: d,
          ancestors: V
        })],
        refSet: R,
        dereferenceOpts: {
          errors: A
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? qg.dereference.circularReplacer : J7
      }
    }), P = j3(C, M, y), E = l ? P : Ax(P);
    return {
      spec: w(E),
      errors: A
    };
  } catch (p) {
    if (p instanceof vu || p instanceof Wn)
      return {
        spec: null,
        errors: []
      };
    throw p;
  }
};
Gp.cache = /* @__PURE__ */ new WeakMap();
const K7 = {
  name: "openapi-3-1-apidom",
  match({
    spec: t
  }) {
    return cx(t);
  },
  normalize({
    spec: t
  }) {
    return ts(Ax)(t);
  },
  async resolve(t) {
    return Gp(t);
  }
};
function Fx(t, e, r) {
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
function W7(t, e) {
  return Fx(t, e, !0) || null;
}
function Mx(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function Y7(t, e) {
  return !t || !t.paths ? null : W7(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = Ls(s, r, n), a = Mx(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: X7
} = iF, Q7 = () => null, Z7 = (t) => Array.isArray(t) ? t : [t], Bm = {
  mapTagOperations: r9,
  makeExecute: e9
};
function e9(t = {}) {
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
function t9(t = {}) {
  const e = Bm.makeExecute(t);
  return {
    apis: Bm.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function r9({
  spec: t,
  cb: e = Q7,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return Fx(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? Z7(c.tags) : [r]).forEach((f) => {
      if (typeof f != "string")
        return;
      i[f] = i[f] || {};
      const u = i[f], d = Ls(c, o, a, {
        v2OperationIdCompatibilityMode: n
      }), p = e({
        spec: t,
        pathName: o,
        method: a,
        operation: c,
        operationId: d
      });
      if (s[d])
        s[d] += 1, u[`${d}${s[d]}`] = p;
      else if (typeof u[d] < "u") {
        const m = s[d] || 1;
        s[d] = m + 1, u[`${d}${s[d]}`] = p;
        const h = u[d];
        delete u[d], u[`${d}${m}`] = h;
      } else
        u[d] = p;
    });
  }), i;
}
var zp = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
zp.parse = s9;
zp.serialize = i9;
var n9 = Object.prototype.toString, wi = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function s9(t, e) {
  if (typeof t != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, n = e || {}, s = n.decode || o9, i = 0; i < t.length; ) {
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
      l.charCodeAt(0) === 34 && (l = l.slice(1, -1)), r[c] = l9(l, s);
    }
    i = a + 1;
  }
  return r;
}
function i9(t, e, r) {
  var n = r || {}, s = n.encode || a9;
  if (typeof s != "function")
    throw new TypeError("option encode is invalid");
  if (!wi.test(t))
    throw new TypeError("argument name is invalid");
  var i = s(e);
  if (i && !wi.test(i))
    throw new TypeError("argument val is invalid");
  var o = t + "=" + i;
  if (n.maxAge != null) {
    var a = n.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!wi.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!wi.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    var c = n.expires;
    if (!c9(c) || isNaN(c.valueOf()))
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
    var f = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
    switch (f) {
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
function o9(t) {
  return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
}
function a9(t) {
  return encodeURIComponent(t);
}
function c9(t) {
  return n9.call(t) === "[object Date]" || t instanceof Date;
}
function l9(t, e) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
function u9() {
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
const Dx = function() {
  const e = H, r = ke, n = this, s = "parser.js: Parser(): ", i = function() {
    this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
      this.state = e.ACTIVE, this.phraseLength = 0;
    };
  };
  n.ast = void 0, n.stats = void 0, n.trace = void 0, n.callbacks = [];
  let o = 0, a = 0, c = 0, l = 0, f = 0, u, d, p, m, h = new i(), g, y, v;
  const b = () => {
    o = 0, a = 0, c = 0, l = 0, f = 0, u = void 0, d = void 0, p = void 0, m = void 0, h.refresh(), g = void 0, y = void 0, v = void 0;
  }, S = () => {
    const B = `${s}initializeCallbacks(): `;
    let j;
    for (g = [], y = [], j = 0; j < u.length; j += 1)
      g[j] = void 0;
    for (j = 0; j < d.length; j += 1)
      y[j] = void 0;
    let z;
    const J = [];
    for (j = 0; j < u.length; j += 1)
      J.push(u[j].lower);
    for (j = 0; j < d.length; j += 1)
      J.push(d[j].lower);
    for (const K in n.callbacks) {
      if (j = J.indexOf(K.toLowerCase()), j < 0)
        throw new Error(`${B}syntax callback '${K}' not a rule or udt name`);
      if (z = n.callbacks[K] ? n.callbacks[K] : void 0, typeof z == "function" || z === void 0)
        j < u.length ? g[j] = z : y[j - u.length] = z;
      else
        throw new Error(`${B}syntax callback[${K}] must be function reference or falsy)`);
    }
  };
  n.parse = (B, j, z, J) => {
    const K = `${s}parse(): `;
    b(), m = r.stringToChars(z), u = B.rules, d = B.udts;
    const le = j.toLowerCase();
    let ye;
    for (const Un in u)
      if (le === u[Un].lower) {
        ye = u[Un].index;
        break;
      }
    if (ye === void 0)
      throw new Error(`${K}start rule name '${startRule}' not recognized`);
    S(), n.trace && n.trace.init(u, d, m), n.stats && n.stats.init(u, d), n.ast && n.ast.init(u, d, m), v = J, p = [
      {
        type: e.RNM,
        index: ye
      }
    ], Ee(0, 0), p = void 0;
    let qe = !1;
    switch (h.state) {
      case e.ACTIVE:
        throw new Error(`${K}final state should never be 'ACTIVE'`);
      case e.NOMATCH:
        qe = !1;
        break;
      case e.EMPTY:
      case e.MATCH:
        h.phraseLength === m.length ? qe = !0 : qe = !1;
        break;
      default:
        throw new Error("unrecognized state");
    }
    return {
      success: qe,
      state: h.state,
      stateName: e.idName(h.state),
      length: m.length,
      matched: h.phraseLength,
      maxMatched: f,
      maxTreeDepth: c,
      nodeHits: l
    };
  };
  const C = (B, j) => {
    const z = p[B];
    for (let J = 0; J < z.children.length && (Ee(z.children[J], j), h.state === e.NOMATCH); J += 1)
      ;
  }, O = (B, j) => {
    let z, J, K, le;
    const ye = p[B];
    n.ast && (J = n.ast.getLength()), z = !0, K = j, le = 0;
    for (let qe = 0; qe < ye.children.length; qe += 1)
      if (Ee(ye.children[qe], K), h.state === e.NOMATCH) {
        z = !1;
        break;
      } else
        K += h.phraseLength, le += h.phraseLength;
    z ? (h.state = le === 0 ? e.EMPTY : e.MATCH, h.phraseLength = le) : (h.state = e.NOMATCH, h.phraseLength = 0, n.ast && n.ast.setLength(J));
  }, R = (B, j) => {
    let z, J, K, le;
    const ye = p[B];
    if (ye.max === 0) {
      h.state = e.EMPTY, h.phraseLength = 0;
      return;
    }
    for (J = j, K = 0, le = 0, n.ast && (z = n.ast.getLength()); !(J >= m.length || (Ee(B + 1, J), h.state === e.NOMATCH) || h.state === e.EMPTY || (le += 1, K += h.phraseLength, J += h.phraseLength, le === ye.max)); )
      ;
    h.state === e.EMPTY || le >= ye.min ? (h.state = K === 0 ? e.EMPTY : e.MATCH, h.phraseLength = K) : (h.state = e.NOMATCH, h.phraseLength = 0, n.ast && n.ast.setLength(z));
  }, V = (B, j, z, J) => {
    if (j.phraseLength > z) {
      let K = `${s}opRNM(${B.name}): callback function error: `;
      throw K += `sysData.phraseLength: ${j.phraseLength}`, K += ` must be <= remaining chars: ${z}`, new Error(K);
    }
    switch (j.state) {
      case e.ACTIVE:
        if (!J)
          throw new Error(
            `${s}opRNM(${B.name}): callback function return error. ACTIVE state not allowed.`
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
          `${s}opRNM(${B.name}): callback function return error. Unrecognized return state: ${j.state}`
        );
    }
  }, A = (B, j) => {
    let z, J, K;
    const le = p[B], ye = u[le.index], qe = g[ye.index];
    if (o || (J = n.ast && n.ast.ruleDefined(le.index), J && (z = n.ast.getLength(), n.ast.down(le.index, u[le.index].name))), qe) {
      const Un = m.length - j;
      qe(h, m, j, v), V(ye, h, Un, !0), h.state === e.ACTIVE && (K = p, p = ye.opcodes, Ee(0, j), p = K, qe(h, m, j, v), V(ye, h, Un, !1));
    } else
      K = p, p = ye.opcodes, Ee(0, j), p = K;
    o || J && (h.state === e.NOMATCH ? n.ast.setLength(z) : n.ast.up(le.index, ye.name, j, h.phraseLength));
  }, M = (B, j) => {
    const z = p[B];
    h.state = e.NOMATCH, j < m.length && z.min <= m[j] && m[j] <= z.max && (h.state = e.MATCH, h.phraseLength = 1);
  }, P = (B, j) => {
    const z = p[B], J = z.string.length;
    if (h.state = e.NOMATCH, j + J <= m.length) {
      for (let K = 0; K < J; K += 1)
        if (m[j + K] !== z.string[K])
          return;
      h.state = e.MATCH, h.phraseLength = J;
    }
  }, E = (B, j) => {
    let z;
    const J = p[B];
    h.state = e.NOMATCH;
    const K = J.string.length;
    if (K === 0) {
      h.state = e.EMPTY;
      return;
    }
    if (j + K <= m.length) {
      for (let le = 0; le < K; le += 1)
        if (z = m[j + le], z >= 65 && z <= 90 && (z += 32), z !== J.string[le])
          return;
      h.state = e.MATCH, h.phraseLength = K;
    }
  }, D = (B, j, z) => {
    if (j.phraseLength > z) {
      let J = `${s}opUDT(${B.name}): callback function error: `;
      throw J += `sysData.phraseLength: ${j.phraseLength}`, J += ` must be <= remaining chars: ${z}`, new Error(J);
    }
    switch (j.state) {
      case e.ACTIVE:
        throw new Error(`${s}opUDT(${B.name}) ACTIVE state return not allowed.`);
      case e.EMPTY:
        if (B.empty)
          j.phraseLength = 0;
        else
          throw new Error(`${s}opUDT(${B.name}) may not return EMPTY.`);
        break;
      case e.MATCH:
        if (j.phraseLength === 0)
          if (B.empty)
            j.state = e.EMPTY;
          else
            throw new Error(`${s}opUDT(${B.name}) may not return EMPTY.`);
        break;
      case e.NOMATCH:
        j.phraseLength = 0;
        break;
      default:
        throw new Error(
          `${s}opUDT(${B.name}): callback function return error. Unrecognized return state: ${j.state}`
        );
    }
  }, k = (B, j) => {
    let z, J, K;
    const le = p[B], ye = d[le.index];
    h.UdtIndex = ye.index, o || (K = n.ast && n.ast.udtDefined(le.index), K && (J = u.length + le.index, z = n.ast.getLength(), n.ast.down(J, ye.name)));
    const qe = m.length - j;
    y[le.index](h, m, j, v), D(ye, h, qe), o || K && (h.state === e.NOMATCH ? n.ast.setLength(z) : n.ast.up(J, ye.name, j, h.phraseLength));
  }, te = (B, j) => {
    switch (o += 1, Ee(B + 1, j), o -= 1, h.phraseLength = 0, h.state) {
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
  }, pe = (B, j) => {
    switch (o += 1, Ee(B + 1, j), o -= 1, h.phraseLength = 0, h.state) {
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
  }, Ee = (B, j) => {
    const z = `${s}opExecute(): `, J = p[B];
    switch (l += 1, a > c && (c = a), a += 1, h.refresh(), n.trace && n.trace.down(J, j), J.type) {
      case e.ALT:
        C(B, j);
        break;
      case e.CAT:
        O(B, j);
        break;
      case e.REP:
        R(B, j);
        break;
      case e.RNM:
        A(B, j);
        break;
      case e.TRG:
        M(B, j);
        break;
      case e.TBS:
        P(B, j);
        break;
      case e.TLS:
        E(B, j);
        break;
      case e.UDT:
        k(B, j);
        break;
      case e.AND:
        te(B, j);
        break;
      case e.NOT:
        pe(B, j);
        break;
      default:
        throw new Error(`${z}unrecognized operator`);
    }
    o || j + h.phraseLength > f && (f = j + h.phraseLength), n.stats && n.stats.collect(J, h), n.trace && n.trace.up(J, h.state, j, h.phraseLength), a -= 1;
  };
}, Nx = function() {
  const e = "parser.js: Ast()): ", r = H, n = ke, s = this;
  let i, o, a, c = 0;
  const l = [], f = [], u = [];
  s.callbacks = [], s.init = (p, m, h) => {
    f.length = 0, u.length = 0, c = 0, i = p, o = m, a = h;
    let g;
    const y = [];
    for (g = 0; g < i.length; g += 1)
      y.push(i[g].lower);
    for (g = 0; g < o.length; g += 1)
      y.push(o[g].lower);
    for (c = i.length + o.length, g = 0; g < c; g += 1)
      l[g] = void 0;
    for (const v in s.callbacks) {
      const b = v.toLowerCase();
      if (g = y.indexOf(b), g < 0)
        throw new Error(`${e}init: node '${v}' not a rule or udt name`);
      l[g] = s.callbacks[v];
    }
  }, s.ruleDefined = (p) => !!l[p], s.udtDefined = (p) => !!l[i.length + p], s.down = (p, m) => {
    const h = u.length;
    return f.push(h), u.push({
      name: m,
      thisIndex: h,
      thatIndex: void 0,
      state: r.SEM_PRE,
      callbackIndex: p,
      phraseIndex: void 0,
      phraseLength: void 0,
      stack: f.length
    }), h;
  }, s.up = (p, m, h, g) => {
    const y = u.length, v = f.pop();
    return u.push({
      name: m,
      thisIndex: y,
      thatIndex: v,
      state: r.SEM_POST,
      callbackIndex: p,
      phraseIndex: h,
      phraseLength: g,
      stack: f.length
    }), u[v].thatIndex = y, u[v].phraseIndex = h, u[v].phraseLength = g, y;
  }, s.translate = (p) => {
    let m, h;
    for (let g = 0; g < u.length; g += 1)
      h = u[g], m = l[h.callbackIndex], m && (h.state === r.SEM_PRE ? m(r.SEM_PRE, a, h.phraseIndex, h.phraseLength, p) : m && m(r.SEM_POST, a, h.phraseIndex, h.phraseLength, p));
  }, s.setLength = (p) => {
    u.length = p, p > 0 ? f.length = u[p - 1].stack : f.length = 0;
  }, s.getLength = () => u.length;
  function d(p) {
    let m = "";
    for (; p-- > 0; )
      m += " ";
    return m;
  }
  s.toXml = () => {
    let p = "", m = 0;
    return p += `<?xml version="1.0" encoding="utf-8"?>
`, p += `<root nodes="${u.length / 2}" characters="${a.length}">
`, p += `<!-- input string -->
`, p += d(m + 2), p += n.charsToString(a), p += `
`, u.forEach((h) => {
      h.state === r.SEM_PRE ? (m += 1, p += d(m), p += `<node name="${h.name}" index="${h.phraseIndex}" length="${h.phraseLength}">
`, p += d(m + 2), p += n.charsToString(a, h.phraseIndex, h.phraseLength), p += `
`) : (p += d(m), p += `</node><!-- name="${h.name}" -->
`, m -= 1);
    }), p += `</root>
`, p;
  };
}, ke = {
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
}, f9 = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-url-template", ke.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, p9 = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable", ke.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, h9 = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable-name", ke.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, d9 = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["literals", ke.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, m9 = new u9(), Vx = (t) => {
  const e = new Dx();
  return e.ast = new Nx(), e.ast.callbacks["server-url-template"] = f9, e.ast.callbacks["server-variable"] = p9, e.ast.callbacks["server-variable-name"] = h9, e.ast.callbacks.literals = d9, {
    result: e.parse(m9, "server-url-template", t),
    ast: e.ast
  };
}, y9 = (t, {
  strict: e = !1
} = {}) => {
  try {
    const r = Vx(t);
    if (!r.result.success)
      return !1;
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
}, v9 = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, g9 = (t) => v9(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), b9 = ["literals", "server-variable-name"], x9 = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: g9
    },
    ...r
  }, i = Vx(t);
  if (!i.result.success)
    return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => b9.includes(c)).map(([c, l]) => c === "server-variable-name" ? Object.hasOwn(e, l) ? s.encoder(e[l], l) : `{${l}}` : l).join("");
};
function $9() {
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
const S9 = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["slash", ke.charsToString(e, r, n)]), H.SEM_OK), w9 = (t, e, r, n, s) => {
  if (t === H.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["path-template", ke.charsToString(e, r, n)]);
  }
  return H.SEM_OK;
}, E9 = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["path", ke.charsToString(e, r, n)]), H.SEM_OK), O9 = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["path-literal", ke.charsToString(e, r, n)]), H.SEM_OK), A9 = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["query", ke.charsToString(e, r, n)]), H.SEM_OK), P9 = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["query-marker", ke.charsToString(e, r, n)]), H.SEM_OK), j9 = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["fragment", ke.charsToString(e, r, n)]), H.SEM_OK), T9 = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["fragment-marker", ke.charsToString(e, r, n)]), H.SEM_OK), _9 = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["template-expression", ke.charsToString(e, r, n)]), H.SEM_OK), R9 = (t, e, r, n, s) => (t === H.SEM_PRE && s.push(["template-expression-param-name", ke.charsToString(e, r, n)]), H.SEM_OK), C9 = new $9(), I9 = (t) => {
  const e = new Dx();
  return e.ast = new Nx(), e.ast.callbacks["path-template"] = w9, e.ast.callbacks.path = E9, e.ast.callbacks.query = A9, e.ast.callbacks["query-marker"] = P9, e.ast.callbacks.fragment = j9, e.ast.callbacks["fragment-marker"] = T9, e.ast.callbacks.slash = S9, e.ast.callbacks["path-literal"] = O9, e.ast.callbacks["template-expression"] = _9, e.ast.callbacks["template-expression-param-name"] = R9, {
    result: e.parse(C9, "path-template", t),
    ast: e.ast
  };
}, F9 = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, M9 = (t) => F9(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), D9 = ["slash", "path-literal", "query-marker", "query-literal", "template-expression-param-name"], Qu = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: M9
    },
    ...r
  }, i = I9(t);
  if (!i.result.success)
    return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => D9.includes(c)).map(([c, l]) => c === "template-expression-param-name" ? Object.hasOwn(e, l) ? s.encoder(e[l], l) : `{${l}}` : l).join("");
}, N9 = {
  body: V9,
  header: L9,
  query: U9,
  path: B9,
  formData: k9
};
function V9({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function k9({
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
function L9({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function B9({
  req: t,
  value: e,
  parameter: r,
  baseURL: n
}) {
  if (e !== void 0) {
    const s = t.url.replace(n, ""), i = Qu(s, {
      [r.name]: e
    });
    t.url = n + i;
  }
}
function U9({
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
function wc(t, e) {
  return e.includes("application/json") ? typeof t == "string" ? t : (Array.isArray(t) && (t = t.map((r) => {
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  })), JSON.stringify(t)) : String(t);
}
function H9({
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
  if (e === void 0)
    return;
  const c = t.url.replace(n, "");
  let l;
  if (a) {
    const f = Object.keys(a)[0];
    l = Qu(c, {
      [s]: e
    }, {
      encoder: (u) => fy(wc(u, f))
    });
  } else
    l = Qu(c, {
      [s]: e
    }, {
      encoder: (f) => lf({
        key: r.name,
        value: f,
        style: i || "simple",
        explode: o || !1,
        escape: "reserved"
      })
    });
  t.url = n + l;
}
function q9({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const n = Object.keys(r.content)[0], s = wc(e, n);
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
const G9 = ["accept", "authorization", "content-type"];
function z9({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(G9.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = wc(r, n);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = lf({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function J9({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {};
  const n = typeof r;
  if (r !== void 0 && e.content) {
    const s = Object.keys(e.content)[0];
    t.headers.Cookie = `${e.name}=${wc(r, s)}`;
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    const s = n === "object" && !Array.isArray(r) && e.explode ? "" : `${e.name}=`;
    t.headers.Cookie = s + lf({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: typeof e.explode > "u" ? !1 : e.explode
    });
  }
}
const K9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: J9,
  header: z9,
  path: H9,
  query: q9
}, Symbol.toStringTag, { value: "Module" })), W9 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: kx
} = W9;
function Y9(t, e) {
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
  e = X9({
    request: e,
    securities: s,
    operation: r,
    spec: i
  });
  const c = r.requestBody || {}, l = Object.keys(c.content || {}), f = a && l.indexOf(a) > -1;
  if (n || o) {
    if (a && f)
      e.headers["Content-Type"] = a;
    else if (!a) {
      const h = l[0];
      h && (e.headers["Content-Type"] = h, a = h);
    }
  } else
    a && f && (e.headers["Content-Type"] = a);
  if (!t.responseContentType && r.responses) {
    const h = Object.entries(r.responses).filter(([g, y]) => {
      const v = parseInt(g, 10);
      return v >= 200 && v < 300 && vn(y.content);
    }).reduce((g, [, y]) => g.concat(Object.keys(y.content)), []);
    h.length > 0 && (e.headers.accept = h.join(", "));
  }
  if (n)
    if (a) {
      if (l.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof n == "object") {
            var u, d;
            const h = (u = (d = c.content[a]) === null || d === void 0 ? void 0 : d.encoding) !== null && u !== void 0 ? u : {};
            e.form = {}, Object.keys(n).forEach((g) => {
              let y;
              try {
                y = JSON.parse(n[g]);
              } catch {
                y = n[g];
              }
              e.form[g] = {
                value: y,
                encoding: h[g] || {}
              };
            });
          } else if (typeof n == "string") {
            var p, m;
            const h = (p = (m = c.content[a]) === null || m === void 0 ? void 0 : m.encoding) !== null && p !== void 0 ? p : {};
            try {
              e.form = {};
              const g = JSON.parse(n);
              Object.entries(g).forEach(([y, v]) => {
                e.form[y] = {
                  value: v,
                  encoding: h[y] || {}
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
function X9({
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
  return i.headers = i.headers || {}, i.query = i.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((f) => {
    Object.keys(f).forEach((u) => {
      const d = o[u], p = l[u];
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
            const g = m.username || "", y = m.password || "", v = kx(`${g}:${y}`);
            i.headers.Authorization = `Basic ${v}`;
          }
          /^bearer$/i.test(p.scheme) && (i.headers.Authorization = `Bearer ${m}`);
        } else if (h === "oauth2" || h === "openIdConnect") {
          const g = d.token || {}, y = p["x-tokenName"] || "access_token", v = g[y];
          let b = g.token_type;
          (!b || b.toLowerCase() === "bearer") && (b = "Bearer"), i.headers.Authorization = `${b} ${v}`;
        }
      }
    });
  }), i);
}
function Q9(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = Z9({
    request: e,
    securities: s,
    operation: n,
    spec: r
  }), e.body || e.form || a)
    i ? e.headers["Content-Type"] = i : Array.isArray(n.consumes) ? [e.headers["Content-Type"]] = n.consumes : Array.isArray(r.consumes) ? [e.headers["Content-Type"]] = r.consumes : n.parameters && n.parameters.filter((c) => c.type === "file").length ? e.headers["Content-Type"] = "multipart/form-data" : n.parameters && n.parameters.filter((c) => c.in === "formData").length && (e.headers["Content-Type"] = "application/x-www-form-urlencoded");
  else if (i) {
    const c = n.parameters && n.parameters.filter((f) => f.in === "body").length > 0, l = n.parameters && n.parameters.filter((f) => f.in === "formData").length > 0;
    (c || l) && (e.headers["Content-Type"] = i);
  }
  return !o && Array.isArray(n.produces) && n.produces.length > 0 && (e.headers.accept = n.produces.join(", ")), e;
}
function Z9({
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
  return s.headers = s.headers || {}, s.query = s.query || {}, !Object.keys(e).length || !c || !a || Array.isArray(r.security) && !r.security.length ? t : (a.forEach((f) => {
    Object.keys(f).forEach((u) => {
      const d = i[u];
      if (!d)
        return;
      const {
        token: p
      } = d, m = d.value || d, h = l[u], {
        type: g
      } = h, y = h["x-tokenName"] || "access_token", v = p && p[y];
      let b = p && p.token_type;
      if (d)
        if (g === "apiKey") {
          const S = h.in === "query" ? "query" : "headers";
          s[S] = s[S] || {}, s[S][h.name] = m;
        } else if (g === "basic")
          if (m.header)
            s.headers.authorization = m.header;
          else {
            const S = m.username || "", C = m.password || "";
            m.base64 = kx(`${S}:${C}`), s.headers.authorization = `Basic ${m.base64}`;
          }
        else
          g === "oauth2" && v && (b = !b || b.toLowerCase() === "bearer" ? "Bearer" : b, s.headers.authorization = `${b} ${v}`);
    });
  }), s);
}
const Um = (t) => Array.isArray(t) ? t : [], Ii = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, Fi), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
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
class eG extends ut {
}
const tG = (t, e) => e.filter((r) => r.name === t), rG = (t) => {
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
}, nG = {
  buildRequest: Lx
};
function sG({
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
  const l = t || e || fn;
  s && i && !n && (n = Mx(s, i));
  const f = nG.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: l,
    ...c
  });
  return f.body && (vn(f.body) || Array.isArray(f.body)) && (f.body = JSON.stringify(f.body)), l(f);
}
function Lx(t) {
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
    serverVariables: f,
    http: u,
    signal: d
  } = t;
  let {
    parameters: p,
    parameterBuilders: m
  } = t;
  const h = Tp(e);
  m || (h ? m = K9 : m = N9);
  let y = {
    url: "",
    credentials: u && u.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  d && (y.signal = d), i && (y.requestInterceptor = i), o && (y.responseInterceptor = o), c && (y.userFetch = c);
  const v = Y7(e, r);
  if (!v)
    throw new eG(`Operation ${r} not found`);
  const {
    operation: b = {},
    method: S,
    pathName: C
  } = v, O = Bx({
    spec: e,
    scheme: s,
    contextUrl: a,
    server: l,
    serverVariables: f,
    pathName: C,
    method: S
  });
  if (y.url += O, !r)
    return delete y.cookies, y;
  y.url += C, y.method = `${S}`.toUpperCase(), p = p || {};
  const R = e.paths[C] || {};
  n && (y.headers.accept = n);
  const V = rG([].concat(Um(b.parameters)).concat(Um(R.parameters)));
  V.forEach((M) => {
    const P = m[M.in];
    let E;
    if (M.in === "body" && M.schema && M.schema.properties && (E = p), E = M && M.name && p[M.name], typeof E > "u" ? E = M && M.name && p[`${M.in}.${M.name}`] : tG(M.name, V).length > 1 && console.warn(`Parameter '${M.name}' is ambiguous because the defined spec has more than one parameter with the name: '${M.name}' and the passed-in parameter values did not define an 'in' value.`), E !== null) {
      if (typeof M.default < "u" && typeof E > "u" && (E = M.default), typeof E > "u" && M.required && !M.allowEmptyValue)
        throw new Error(`Required parameter ${M.name} is not provided`);
      if (h && M.schema && M.schema.type === "object" && typeof E == "string")
        try {
          E = JSON.parse(E);
        } catch {
          throw new Error("Could not parse object parameter value string as JSON");
        }
      P && P({
        req: y,
        parameter: M,
        value: E,
        operation: b,
        spec: e,
        baseURL: O
      });
    }
  });
  const A = {
    ...t,
    operation: b
  };
  if (h ? y = Y9(A, y) : y = Q9(A, y), y.cookies && Object.keys(y.cookies).length) {
    const M = Object.keys(y.cookies).reduce((P, E) => {
      const D = y.cookies[E], k = P ? "&" : "", te = zp.serialize(E, D);
      return P + k + te;
    }, "");
    y.headers.Cookie = M;
  }
  return y.cookies && delete y.cookies, uf(y);
}
const Zu = (t) => t ? t.replace(/\W/g, "") : null;
function Bx(t) {
  return Tp(t.spec) ? iG(t) : aG(t);
}
const wl = (t) => Array.isArray(t) && t.length > 0;
function iG({
  spec: t,
  pathName: e,
  method: r,
  server: n,
  contextUrl: s,
  serverVariables: i = {}
}) {
  var o, a;
  let c = [], l = "", f;
  const u = t == null || (o = t.paths) === null || o === void 0 || (o = o[e]) === null || o === void 0 || (o = o[(r || "").toLowerCase()]) === null || o === void 0 ? void 0 : o.servers, d = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 ? void 0 : a.servers, p = t == null ? void 0 : t.servers;
  if (c = wl(u) ? u : wl(d) ? d : wl(p) ? p : [qm], n && (f = c.find((m) => m.url === n), f && (l = n)), l || ([f] = c, l = f.url), y9(l, {
    strict: !0
  })) {
    const m = Object.entries({
      ...f.variables
    }).reduce((h, [g, y]) => (h[g] = y.default, h), {});
    l = x9(l, {
      ...m,
      ...i
    });
  }
  return oG(l, s);
}
function oG(t = "", e = "") {
  const r = Ii(t && e ? Pe(e, t) : t), n = Ii(e), s = Zu(r.protocol) || Zu(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function aG({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = Ii(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || Zu(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return i && o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
se.http = fn;
se.makeHttp = G0.bind(null, se.http);
se.resolveStrategies = {
  "openapi-3-1-apidom": K7,
  "openapi-3-0": ux,
  "openapi-2-0": lx,
  generic: ix
};
se.resolve = fx({
  strategies: [se.resolveStrategies["openapi-3-1-apidom"], se.resolveStrategies["openapi-3-0"], se.resolveStrategies["openapi-2-0"], se.resolveStrategies.generic]
});
se.resolveSubtree = RB({
  strategies: [se.resolveStrategies["openapi-3-1-apidom"], se.resolveStrategies["openapi-3-0"], se.resolveStrategies["openapi-2-0"], se.resolveStrategies.generic]
});
se.execute = sG;
se.serializeRes = tv;
se.serializeHeaders = ev;
se.clearCache = OB;
se.makeApisTagOperation = t9;
se.buildRequest = Lx;
se.helpers = {
  opId: Ls
};
se.getBaseUrl = Bx;
se.apidom = {
  resolve: {
    resolvers: {
      HTTPResolverSwaggerClient: Px
    }
  },
  parse: {
    parsers: {
      JsonParser: jx,
      YamlParser: Tx,
      OpenApiJson3_1Parser: _x,
      OpenApiYaml3_1Parser: Rx
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: Ix
    }
  }
};
function se(t, e = {}) {
  if (typeof t == "string" ? e.url = t : e = t, !(this instanceof se))
    return new se(e);
  Object.assign(this, e);
  const r = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, se.makeApisTagOperation(this)), this));
  return r.client = this, r;
}
se.prototype = {
  http: fn,
  execute(t) {
    return this.applyDefaults(), se.execute({
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
    return se.resolve({
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
se.prototype.applyDefaults = function() {
  const {
    spec: e
  } = this, r = this.url;
  if (ox(e) && X7(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (Tp(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [qm]);
  }
};
export {
  se as S,
  Y$ as r
};
