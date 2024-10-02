var Hx = Object.defineProperty;
var Kp = (t) => {
  throw TypeError(t);
};
var qx = (t, e, r) => e in t ? Hx(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var x = (t, e, r) => qx(t, typeof e != "symbol" ? e + "" : e, r), Wp = (t, e, r) => e.has(t) || Kp("Cannot " + r);
var Oc = (t, e, r) => (Wp(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Jp = (t, e, r) => e.has(t) ? Kp("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ac = (t, e, r, n) => (Wp(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import { a1 as Gx, _ as Et, Z as $n } from "./TriangleExclamation.9XEPiFVq.js";
const Hm = "application/json, application/yaml", Fi = "https://swagger.io", qm = Object.freeze({
  url: "/"
}), {
  fetch: zx,
  Response: Kx,
  Headers: Wx,
  Request: Jx,
  FormData: Yx,
  File: Xx,
  Blob: Qx
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = zx);
typeof globalThis.Headers > "u" && (globalThis.Headers = Wx);
typeof globalThis.Request > "u" && (globalThis.Request = Jx);
typeof globalThis.Response > "u" && (globalThis.Response = Kx);
typeof globalThis.FormData > "u" && (globalThis.FormData = Yx);
typeof globalThis.File > "u" && (globalThis.File = Xx);
typeof globalThis.Blob > "u" && (globalThis.Blob = Qx);
var Zx = Error, ew = EvalError, tw = RangeError, rw = ReferenceError, Gm = SyntaxError, bs = TypeError, nw = URIError, sw = function() {
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
}, Yp = typeof Symbol < "u" && Symbol, iw = sw, ow = function() {
  return typeof Yp != "function" || typeof Symbol != "function" || typeof Yp("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : iw();
}, Pc = {
  __proto__: null,
  foo: {}
}, aw = Object, cw = function() {
  return { __proto__: Pc }.foo === Pc.foo && !(Pc instanceof aw);
}, lw = "Function.prototype.bind called on incompatible ", uw = Object.prototype.toString, fw = Math.max, pw = "[object Function]", Xp = function(e, r) {
  for (var n = [], s = 0; s < e.length; s += 1)
    n[s] = e[s];
  for (var i = 0; i < r.length; i += 1)
    n[i + e.length] = r[i];
  return n;
}, hw = function(e, r) {
  for (var n = [], s = r, i = 0; s < e.length; s += 1, i += 1)
    n[i] = e[s];
  return n;
}, dw = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, mw = function(e) {
  var r = this;
  if (typeof r != "function" || uw.apply(r) !== pw)
    throw new TypeError(lw + r);
  for (var n = hw(arguments, 1), s, i = function() {
    if (this instanceof s) {
      var f = r.apply(
        this,
        Xp(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      e,
      Xp(n, arguments)
    );
  }, o = fw(0, r.length - n.length), a = [], c = 0; c < o; c++)
    a[c] = "$" + c;
  if (s = Function("binder", "return function (" + dw(a, ",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var l = function() {
    };
    l.prototype = r.prototype, s.prototype = new l(), l.prototype = null;
  }
  return s;
}, yw = mw, tf = Function.prototype.bind || yw, vw = Function.prototype.call, gw = Object.prototype.hasOwnProperty, bw = tf, xw = bw.call(vw, gw), X, ww = Zx, Ew = ew, Sw = tw, $w = rw, an = Gm, tn = bs, Ow = nw, zm = Function, jc = function(t) {
  try {
    return zm('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, wr = Object.getOwnPropertyDescriptor;
if (wr)
  try {
    wr({}, "");
  } catch {
    wr = null;
  }
var Tc = function() {
  throw new tn();
}, Aw = wr ? function() {
  try {
    return arguments.callee, Tc;
  } catch {
    try {
      return wr(arguments, "callee").get;
    } catch {
      return Tc;
    }
  }
}() : Tc, Ur = ow(), Pw = cw(), Pe = Object.getPrototypeOf || (Pw ? function(t) {
  return t.__proto__;
} : null), Jr = {}, jw = typeof Uint8Array > "u" || !Pe ? X : Pe(Uint8Array), Er = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? X : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? X : ArrayBuffer,
  "%ArrayIteratorPrototype%": Ur && Pe ? Pe([][Symbol.iterator]()) : X,
  "%AsyncFromSyncIteratorPrototype%": X,
  "%AsyncFunction%": Jr,
  "%AsyncGenerator%": Jr,
  "%AsyncGeneratorFunction%": Jr,
  "%AsyncIteratorPrototype%": Jr,
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
  "%Error%": ww,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Ew,
  "%Float32Array%": typeof Float32Array > "u" ? X : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? X : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? X : FinalizationRegistry,
  "%Function%": zm,
  "%GeneratorFunction%": Jr,
  "%Int8Array%": typeof Int8Array > "u" ? X : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? X : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? X : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Ur && Pe ? Pe(Pe([][Symbol.iterator]())) : X,
  "%JSON%": typeof JSON == "object" ? JSON : X,
  "%Map%": typeof Map > "u" ? X : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Ur || !Pe ? X : Pe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? X : Promise,
  "%Proxy%": typeof Proxy > "u" ? X : Proxy,
  "%RangeError%": Sw,
  "%ReferenceError%": $w,
  "%Reflect%": typeof Reflect > "u" ? X : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? X : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Ur || !Pe ? X : Pe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? X : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Ur && Pe ? Pe(""[Symbol.iterator]()) : X,
  "%Symbol%": Ur ? Symbol : X,
  "%SyntaxError%": an,
  "%ThrowTypeError%": Aw,
  "%TypedArray%": jw,
  "%TypeError%": tn,
  "%Uint8Array%": typeof Uint8Array > "u" ? X : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? X : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? X : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? X : Uint32Array,
  "%URIError%": Ow,
  "%WeakMap%": typeof WeakMap > "u" ? X : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? X : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? X : WeakSet
};
if (Pe)
  try {
    null.error;
  } catch (t) {
    var Tw = Pe(Pe(t));
    Er["%Error.prototype%"] = Tw;
  }
var _w = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = jc("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = jc("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = jc("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var s = t("%AsyncGenerator%");
    s && Pe && (r = Pe(s.prototype));
  }
  return Er[e] = r, r;
}, Qp = {
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
}, xs = tf, Mi = xw, Rw = xs.call(Function.call, Array.prototype.concat), Cw = xs.call(Function.apply, Array.prototype.splice), Zp = xs.call(Function.call, String.prototype.replace), Di = xs.call(Function.call, String.prototype.slice), Iw = xs.call(Function.call, RegExp.prototype.exec), Fw = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Mw = /\\(\\)?/g, Dw = function(e) {
  var r = Di(e, 0, 1), n = Di(e, -1);
  if (r === "%" && n !== "%")
    throw new an("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new an("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return Zp(e, Fw, function(i, o, a, c) {
    s[s.length] = a ? Zp(c, Mw, "$1") : o || i;
  }), s;
}, Nw = function(e, r) {
  var n = e, s;
  if (Mi(Qp, n) && (s = Qp[n], n = "%" + s[0] + "%"), Mi(Er, n)) {
    var i = Er[n];
    if (i === Jr && (i = _w(n)), typeof i > "u" && !r)
      throw new tn("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: s,
      name: n,
      value: i
    };
  }
  throw new an("intrinsic " + e + " does not exist!");
}, On = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new tn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new tn('"allowMissing" argument must be a boolean');
  if (Iw(/^%?[^%]*%?$/, e) === null)
    throw new an("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Dw(e), s = n.length > 0 ? n[0] : "", i = Nw("%" + s + "%", r), o = i.name, a = i.value, c = !1, l = i.alias;
  l && (s = l[0], Cw(n, Rw([0, 1], l)));
  for (var f = 1, u = !0; f < n.length; f += 1) {
    var h = n[f], p = Di(h, 0, 1), m = Di(h, -1);
    if ((p === '"' || p === "'" || p === "`" || m === '"' || m === "'" || m === "`") && p !== m)
      throw new an("property names with quotes must have matching quotes");
    if ((h === "constructor" || !u) && (c = !0), s += "." + h, o = "%" + s + "%", Mi(Er, o))
      a = Er[o];
    else if (a != null) {
      if (!(h in a)) {
        if (!r)
          throw new tn("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (wr && f + 1 >= n.length) {
        var d = wr(a, h);
        u = !!d, u && "get" in d && !("originalValue" in d.get) ? a = d.get : a = a[h];
      } else
        u = Mi(a, h), a = a[h];
      u && !c && (Er[o] = a);
    }
  }
  return a;
}, Km = { exports: {} }, _c, eh;
function rf() {
  if (eh) return _c;
  eh = 1;
  var t = On, e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return _c = e, _c;
}
var kw = On, $i = kw("%Object.getOwnPropertyDescriptor%", !0);
if ($i)
  try {
    $i([], "length");
  } catch {
    $i = null;
  }
var Wm = $i, th = rf(), Lw = Gm, Hr = bs, rh = Wm, Vw = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Hr("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Hr("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Hr("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Hr("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Hr("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Hr("`loose`, if provided, must be a boolean");
  var s = arguments.length > 3 ? arguments[3] : null, i = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, c = !!rh && rh(e, r);
  if (th)
    th(e, r, {
      configurable: o === null && c ? c.configurable : !o,
      enumerable: s === null && c ? c.enumerable : !s,
      value: n,
      writable: i === null && c ? c.writable : !i
    });
  else if (a || !s && !i && !o)
    e[r] = n;
  else
    throw new Lw("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Al = rf(), Jm = function() {
  return !!Al;
};
Jm.hasArrayLengthDefineBug = function() {
  if (!Al)
    return null;
  try {
    return Al([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Bw = Jm, Uw = On, nh = Vw, Hw = Bw(), sh = Wm, ih = bs, qw = Uw("%Math.floor%"), Gw = function(e, r) {
  if (typeof e != "function")
    throw new ih("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || qw(r) !== r)
    throw new ih("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], s = !0, i = !0;
  if ("length" in e && sh) {
    var o = sh(e, "length");
    o && !o.configurable && (s = !1), o && !o.writable && (i = !1);
  }
  return (s || i || !n) && (Hw ? nh(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : nh(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = tf, r = On, n = Gw, s = bs, i = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || e.call(o, i), c = rf(), l = r("%Math.max%");
  t.exports = function(h) {
    if (typeof h != "function")
      throw new s("a function is required");
    var p = a(e, o, arguments);
    return n(
      p,
      1 + l(0, h.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return a(e, i, arguments);
  };
  c ? c(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(Km);
var zw = Km.exports, Ym = On, Xm = zw, Kw = Xm(Ym("String.prototype.indexOf")), Ww = function(e, r) {
  var n = Ym(e, !!r);
  return typeof n == "function" && Kw(e, ".prototype.") > -1 ? Xm(n) : n;
};
const Jw = {}, Yw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jw
}, Symbol.toStringTag, { value: "Module" })), Xw = /* @__PURE__ */ Gx(Yw);
var nf = typeof Map == "function" && Map.prototype, Rc = Object.getOwnPropertyDescriptor && nf ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Ni = nf && Rc && typeof Rc.get == "function" ? Rc.get : null, oh = nf && Map.prototype.forEach, sf = typeof Set == "function" && Set.prototype, Cc = Object.getOwnPropertyDescriptor && sf ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ki = sf && Cc && typeof Cc.get == "function" ? Cc.get : null, ah = sf && Set.prototype.forEach, Qw = typeof WeakMap == "function" && WeakMap.prototype, Yn = Qw ? WeakMap.prototype.has : null, Zw = typeof WeakSet == "function" && WeakSet.prototype, Xn = Zw ? WeakSet.prototype.has : null, eE = typeof WeakRef == "function" && WeakRef.prototype, ch = eE ? WeakRef.prototype.deref : null, tE = Boolean.prototype.valueOf, rE = Object.prototype.toString, nE = Function.prototype.toString, sE = String.prototype.match, of = String.prototype.slice, rr = String.prototype.replace, iE = String.prototype.toUpperCase, lh = String.prototype.toLowerCase, Qm = RegExp.prototype.test, uh = Array.prototype.concat, wt = Array.prototype.join, oE = Array.prototype.slice, fh = Math.floor, Pl = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ic = Object.getOwnPropertySymbols, jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, cn = typeof Symbol == "function" && typeof Symbol.iterator == "object", De = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === cn || !0) ? Symbol.toStringTag : null, Zm = Object.prototype.propertyIsEnumerable, ph = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function hh(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Qm.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -fh(-t) : fh(t);
    if (n !== t) {
      var s = String(n), i = of.call(e, s.length + 1);
      return rr.call(s, r, "$&_") + "." + rr.call(rr.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return rr.call(e, r, "$&_");
}
var Tl = Xw, dh = Tl.custom, mh = ty(dh) ? dh : null, aE = function t(e, r, n, s) {
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
    return a ? hh(e, c) : c;
  }
  if (typeof e == "bigint") {
    var l = String(e) + "n";
    return a ? hh(e, l) : l;
  }
  var f = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return _l(e) ? "[Array]" : "[Object]";
  var u = OE(i, n);
  if (typeof s > "u")
    s = [];
  else if (ry(s, e) >= 0)
    return "[Circular]";
  function h(D, L, Q) {
    if (L && (s = oE.call(s), s.push(L)), Q) {
      var de = {
        depth: i.depth
      };
      return er(i, "quoteStyle") && (de.quoteStyle = i.quoteStyle), t(D, de, n + 1, s);
    }
    return t(D, i, n + 1, s);
  }
  if (typeof e == "function" && !yh(e)) {
    var p = yE(e), m = ui(e, h);
    return "[Function" + (p ? ": " + p : " (anonymous)") + "]" + (m.length > 0 ? " { " + wt.call(m, ", ") + " }" : "");
  }
  if (ty(e)) {
    var d = cn ? rr.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : jl.call(e);
    return typeof e == "object" && !cn ? Hn(d) : d;
  }
  if (EE(e)) {
    for (var y = "<" + lh.call(String(e.nodeName)), g = e.attributes || [], v = 0; v < g.length; v++)
      y += " " + g[v].name + "=" + ey(cE(g[v].value), "double", i);
    return y += ">", e.childNodes && e.childNodes.length && (y += "..."), y += "</" + lh.call(String(e.nodeName)) + ">", y;
  }
  if (_l(e)) {
    if (e.length === 0)
      return "[]";
    var b = ui(e, h);
    return u && !$E(b) ? "[" + Rl(b, u) + "]" : "[ " + wt.call(b, ", ") + " ]";
  }
  if (uE(e)) {
    var E = ui(e, h);
    return !("cause" in Error.prototype) && "cause" in e && !Zm.call(e, "cause") ? "{ [" + String(e) + "] " + wt.call(uh.call("[cause]: " + h(e.cause), E), ", ") + " }" : E.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + wt.call(E, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (mh && typeof e[mh] == "function" && Tl)
      return Tl(e, { depth: f - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (vE(e)) {
    var R = [];
    return oh && oh.call(e, function(D, L) {
      R.push(h(L, e, !0) + " => " + h(D, e));
    }), vh("Map", Ni.call(e), R, u);
  }
  if (xE(e)) {
    var $ = [];
    return ah && ah.call(e, function(D) {
      $.push(h(D, e));
    }), vh("Set", ki.call(e), $, u);
  }
  if (gE(e))
    return Fc("WeakMap");
  if (wE(e))
    return Fc("WeakSet");
  if (bE(e))
    return Fc("WeakRef");
  if (pE(e))
    return Hn(h(Number(e)));
  if (dE(e))
    return Hn(h(Pl.call(e)));
  if (hE(e))
    return Hn(tE.call(e));
  if (fE(e))
    return Hn(h(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof Et < "u" && e === Et)
    return "{ [object globalThis] }";
  if (!lE(e) && !yh(e)) {
    var C = ui(e, h), k = ph ? ph(e) === Object.prototype : e instanceof Object || e.constructor === Object, O = e instanceof Object ? "" : "null prototype", M = !k && De && Object(e) === e && De in e ? of.call(or(e), 8, -1) : O ? "Object" : "", P = k || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", A = P + (M || O ? "[" + wt.call(uh.call([], M || [], O || []), ": ") + "] " : "");
    return C.length === 0 ? A + "{}" : u ? A + "{" + Rl(C, u) + "}" : A + "{ " + wt.call(C, ", ") + " }";
  }
  return String(e);
};
function ey(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function cE(t) {
  return rr.call(String(t), /"/g, "&quot;");
}
function _l(t) {
  return or(t) === "[object Array]" && (!De || !(typeof t == "object" && De in t));
}
function lE(t) {
  return or(t) === "[object Date]" && (!De || !(typeof t == "object" && De in t));
}
function yh(t) {
  return or(t) === "[object RegExp]" && (!De || !(typeof t == "object" && De in t));
}
function uE(t) {
  return or(t) === "[object Error]" && (!De || !(typeof t == "object" && De in t));
}
function fE(t) {
  return or(t) === "[object String]" && (!De || !(typeof t == "object" && De in t));
}
function pE(t) {
  return or(t) === "[object Number]" && (!De || !(typeof t == "object" && De in t));
}
function hE(t) {
  return or(t) === "[object Boolean]" && (!De || !(typeof t == "object" && De in t));
}
function ty(t) {
  if (cn)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !jl)
    return !1;
  try {
    return jl.call(t), !0;
  } catch {
  }
  return !1;
}
function dE(t) {
  if (!t || typeof t != "object" || !Pl)
    return !1;
  try {
    return Pl.call(t), !0;
  } catch {
  }
  return !1;
}
var mE = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function er(t, e) {
  return mE.call(t, e);
}
function or(t) {
  return rE.call(t);
}
function yE(t) {
  if (t.name)
    return t.name;
  var e = sE.call(nE.call(t), /^function\s*([\w$]+)/);
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
function vE(t) {
  if (!Ni || !t || typeof t != "object")
    return !1;
  try {
    Ni.call(t);
    try {
      ki.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function gE(t) {
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
function bE(t) {
  if (!ch || !t || typeof t != "object")
    return !1;
  try {
    return ch.call(t), !0;
  } catch {
  }
  return !1;
}
function xE(t) {
  if (!ki || !t || typeof t != "object")
    return !1;
  try {
    ki.call(t);
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
function wE(t) {
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
function EE(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function ny(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return ny(of.call(t, 0, e.maxStringLength), e) + n;
  }
  var s = rr.call(rr.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, SE);
  return ey(s, "single", e);
}
function SE(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + iE.call(e.toString(16));
}
function Hn(t) {
  return "Object(" + t + ")";
}
function Fc(t) {
  return t + " { ? }";
}
function vh(t, e, r, n) {
  var s = n ? Rl(r, n) : wt.call(r, ", ");
  return t + " (" + e + ") {" + s + "}";
}
function $E(t) {
  for (var e = 0; e < t.length; e++)
    if (ry(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function OE(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = wt.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: wt.call(Array(e + 1), r)
  };
}
function Rl(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + wt.call(t, "," + r) + `
` + e.prev;
}
function ui(t, e) {
  var r = _l(t), n = [];
  if (r) {
    n.length = t.length;
    for (var s = 0; s < t.length; s++)
      n[s] = er(t, s) ? e(t[s], t) : "";
  }
  var i = typeof Ic == "function" ? Ic(t) : [], o;
  if (cn) {
    o = {};
    for (var a = 0; a < i.length; a++)
      o["$" + i[a]] = i[a];
  }
  for (var c in t)
    er(t, c) && (r && String(Number(c)) === c && c < t.length || cn && o["$" + c] instanceof Symbol || (Qm.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
  if (typeof Ic == "function")
    for (var l = 0; l < i.length; l++)
      Zm.call(t, i[l]) && n.push("[" + e(i[l]) + "]: " + e(t[i[l]], t));
  return n;
}
var sy = On, An = Ww, AE = aE, PE = bs, fi = sy("%WeakMap%", !0), pi = sy("%Map%", !0), jE = An("WeakMap.prototype.get", !0), TE = An("WeakMap.prototype.set", !0), _E = An("WeakMap.prototype.has", !0), RE = An("Map.prototype.get", !0), CE = An("Map.prototype.set", !0), IE = An("Map.prototype.has", !0), af = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = n, n;
}, FE = function(t, e) {
  var r = af(t, e);
  return r && r.value;
}, ME = function(t, e, r) {
  var n = af(t, e);
  n ? n.value = r : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: r
  };
}, DE = function(t, e) {
  return !!af(t, e);
}, NE = function() {
  var e, r, n, s = {
    assert: function(i) {
      if (!s.has(i))
        throw new PE("Side channel does not contain " + AE(i));
    },
    get: function(i) {
      if (fi && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return jE(e, i);
      } else if (pi) {
        if (r)
          return RE(r, i);
      } else if (n)
        return FE(n, i);
    },
    has: function(i) {
      if (fi && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return _E(e, i);
      } else if (pi) {
        if (r)
          return IE(r, i);
      } else if (n)
        return DE(n, i);
      return !1;
    },
    set: function(i, o) {
      fi && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new fi()), TE(e, i, o)) : pi ? (r || (r = new pi()), CE(r, i, o)) : (n || (n = { key: {}, next: null }), ME(n, i, o));
    }
  };
  return s;
}, kE = String.prototype.replace, LE = /%20/g, Mc = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, cf = {
  default: Mc.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return kE.call(t, LE, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Mc.RFC1738,
  RFC3986: Mc.RFC3986
}, VE = cf, Dc = Object.prototype.hasOwnProperty, gr = Array.isArray, mt = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), BE = function(e) {
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
}, UE = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (gr(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Dc.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var s = e;
  return gr(e) && !gr(r) && (s = iy(e, n)), gr(e) && gr(r) ? (r.forEach(function(i, o) {
    if (Dc.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && i && typeof i == "object" ? e[o] = t(a, i, n) : e.push(i);
    } else
      e[o] = i;
  }), e) : Object.keys(r).reduce(function(i, o) {
    var a = r[o];
    return Dc.call(i, o) ? i[o] = t(i[o], a, n) : i[o] = a, i;
  }, s);
}, HE = function(e, r) {
  return Object.keys(r).reduce(function(n, s) {
    return n[s] = r[s], n;
  }, e);
}, qE = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Nc = 1024, GE = function(e, r, n, s, i) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var a = "", c = 0; c < o.length; c += Nc) {
    for (var l = o.length >= Nc ? o.slice(c, c + Nc) : o, f = [], u = 0; u < l.length; ++u) {
      var h = l.charCodeAt(u);
      if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || i === VE.RFC1738 && (h === 40 || h === 41)) {
        f[f.length] = l.charAt(u);
        continue;
      }
      if (h < 128) {
        f[f.length] = mt[h];
        continue;
      }
      if (h < 2048) {
        f[f.length] = mt[192 | h >> 6] + mt[128 | h & 63];
        continue;
      }
      if (h < 55296 || h >= 57344) {
        f[f.length] = mt[224 | h >> 12] + mt[128 | h >> 6 & 63] + mt[128 | h & 63];
        continue;
      }
      u += 1, h = 65536 + ((h & 1023) << 10 | l.charCodeAt(u) & 1023), f[f.length] = mt[240 | h >> 18] + mt[128 | h >> 12 & 63] + mt[128 | h >> 6 & 63] + mt[128 | h & 63];
    }
    a += f.join("");
  }
  return a;
}, zE = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], s = 0; s < r.length; ++s)
    for (var i = r[s], o = i.obj[i.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
      var l = a[c], f = o[l];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: o, prop: l }), n.push(f));
    }
  return BE(r), e;
}, KE = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, WE = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, JE = function(e, r) {
  return [].concat(e, r);
}, YE = function(e, r) {
  if (gr(e)) {
    for (var n = [], s = 0; s < e.length; s += 1)
      n.push(r(e[s]));
    return n;
  }
  return r(e);
}, oy = {
  arrayToObject: iy,
  assign: HE,
  combine: JE,
  compact: zE,
  decode: qE,
  encode: GE,
  isBuffer: WE,
  isRegExp: KE,
  maybeMap: YE,
  merge: UE
}, ay = NE, Oi = oy, Qn = cf, XE = Object.prototype.hasOwnProperty, cy = {
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
}, gt = Array.isArray, QE = Array.prototype.push, ly = function(t, e) {
  QE.apply(t, gt(e) ? e : [e]);
}, ZE = Date.prototype.toISOString, gh = Qn.default, $e = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: Oi.encode,
  encodeValuesOnly: !1,
  format: gh,
  formatter: Qn.formatters[gh],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return ZE.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, e0 = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, kc = {}, t0 = function t(e, r, n, s, i, o, a, c, l, f, u, h, p, m, d, y, g, v) {
  for (var b = e, E = v, R = 0, $ = !1; (E = E.get(kc)) !== void 0 && !$; ) {
    var C = E.get(e);
    if (R += 1, typeof C < "u") {
      if (C === R)
        throw new RangeError("Cyclic object value");
      $ = !0;
    }
    typeof E.get(kc) > "u" && (R = 0);
  }
  if (typeof f == "function" ? b = f(r, b) : b instanceof Date ? b = p(b) : n === "comma" && gt(b) && (b = Oi.maybeMap(b, function(H) {
    return H instanceof Date ? p(H) : H;
  })), b === null) {
    if (o)
      return l && !y ? l(r, $e.encoder, g, "key", m) : r;
    b = "";
  }
  if (e0(b) || Oi.isBuffer(b)) {
    if (l) {
      var k = y ? r : l(r, $e.encoder, g, "key", m);
      return [d(k) + "=" + d(l(b, $e.encoder, g, "value", m))];
    }
    return [d(r) + "=" + d(String(b))];
  }
  var O = [];
  if (typeof b > "u")
    return O;
  var M;
  if (n === "comma" && gt(b))
    y && l && (b = Oi.maybeMap(b, l)), M = [{ value: b.length > 0 ? b.join(",") || null : void 0 }];
  else if (gt(f))
    M = f;
  else {
    var P = Object.keys(b);
    M = u ? P.sort(u) : P;
  }
  var A = c ? r.replace(/\./g, "%2E") : r, D = s && gt(b) && b.length === 1 ? A + "[]" : A;
  if (i && gt(b) && b.length === 0)
    return D + "[]";
  for (var L = 0; L < M.length; ++L) {
    var Q = M[L], de = typeof Q == "object" && typeof Q.value < "u" ? Q.value : b[Q];
    if (!(a && de === null)) {
      var ye = h && c ? Q.replace(/\./g, "%2E") : Q, V = gt(b) ? typeof n == "function" ? n(D, ye) : D : D + (h ? "." + ye : "[" + ye + "]");
      v.set(e, R);
      var j = ay();
      j.set(kc, v), ly(O, t(
        de,
        V,
        n,
        s,
        i,
        o,
        a,
        c,
        n === "comma" && y && gt(b) ? null : l,
        f,
        u,
        h,
        p,
        m,
        d,
        y,
        g,
        j
      ));
    }
  }
  return O;
}, r0 = function(e) {
  if (!e)
    return $e;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || $e.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Qn.default;
  if (typeof e.format < "u") {
    if (!XE.call(Qn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var s = Qn.formatters[n], i = $e.filter;
  (typeof e.filter == "function" || gt(e.filter)) && (i = e.filter);
  var o;
  if (e.arrayFormat in cy ? o = e.arrayFormat : "indices" in e ? o = e.indices ? "indices" : "repeat" : o = $e.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var a = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : $e.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : $e.addQueryPrefix,
    allowDots: a,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : $e.allowEmptyArrays,
    arrayFormat: o,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : $e.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? $e.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : $e.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : $e.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : $e.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : $e.encodeValuesOnly,
    filter: i,
    format: n,
    formatter: s,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : $e.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : $e.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : $e.strictNullHandling
  };
}, n0 = function(t, e) {
  var r = t, n = r0(e), s, i;
  typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : gt(n.filter) && (i = n.filter, s = i);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var a = cy[n.arrayFormat], c = a === "comma" && n.commaRoundTrip;
  s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
  for (var l = ay(), f = 0; f < s.length; ++f) {
    var u = s[f];
    n.skipNulls && r[u] === null || ly(o, t0(
      r[u],
      u,
      a,
      c,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      l
    ));
  }
  var h = o.join(n.delimiter), p = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), h.length > 0 ? p + h : "";
}, ln = oy, Cl = Object.prototype.hasOwnProperty, s0 = Array.isArray, be = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: ln.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, i0 = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, uy = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, o0 = "utf8=%26%2310003%3B", a0 = "utf8=%E2%9C%93", c0 = function(e, r) {
  var n = { __proto__: null }, s = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
  s = s.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = s.split(r.delimiter, i), a = -1, c, l = r.charset;
  if (r.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === a0 ? l = "utf-8" : o[c] === o0 && (l = "iso-8859-1"), a = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== a) {
      var f = o[c], u = f.indexOf("]="), h = u === -1 ? f.indexOf("=") : u + 1, p, m;
      h === -1 ? (p = r.decoder(f, be.decoder, l, "key"), m = r.strictNullHandling ? null : "") : (p = r.decoder(f.slice(0, h), be.decoder, l, "key"), m = ln.maybeMap(
        uy(f.slice(h + 1), r),
        function(y) {
          return r.decoder(y, be.decoder, l, "value");
        }
      )), m && r.interpretNumericEntities && l === "iso-8859-1" && (m = i0(m)), f.indexOf("[]=") > -1 && (m = s0(m) ? [m] : m);
      var d = Cl.call(n, p);
      d && r.duplicates === "combine" ? n[p] = ln.combine(n[p], m) : (!d || r.duplicates === "last") && (n[p] = m);
    }
  return n;
}, l0 = function(t, e, r, n) {
  for (var s = n ? e : uy(e, r), i = t.length - 1; i >= 0; --i) {
    var o, a = t[i];
    if (a === "[]" && r.parseArrays)
      o = r.allowEmptyArrays && (s === "" || r.strictNullHandling && s === null) ? [] : [].concat(s);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a, l = r.decodeDotInKeys ? c.replace(/%2E/g, ".") : c, f = parseInt(l, 10);
      !r.parseArrays && l === "" ? o = { 0: s } : !isNaN(f) && a !== l && String(f) === l && f >= 0 && r.parseArrays && f <= r.arrayLimit ? (o = [], o[f] = s) : l !== "__proto__" && (o[l] = s);
    }
    s = o;
  }
  return s;
}, u0 = function(e, r, n, s) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, c = n.depth > 0 && o.exec(i), l = c ? i.slice(0, c.index) : i, f = [];
    if (l) {
      if (!n.plainObjects && Cl.call(Object.prototype, l) && !n.allowPrototypes)
        return;
      f.push(l);
    }
    for (var u = 0; n.depth > 0 && (c = a.exec(i)) !== null && u < n.depth; ) {
      if (u += 1, !n.plainObjects && Cl.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(c[1]);
    }
    return c && f.push("[" + i.slice(c.index) + "]"), l0(f, r, n, s);
  }
}, f0 = function(e) {
  if (!e)
    return be;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? be.charset : e.charset, n = typeof e.duplicates > "u" ? be.duplicates : e.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var s = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : be.allowDots : !!e.allowDots;
  return {
    allowDots: s,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : be.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : be.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : be.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : be.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : be.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : be.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : be.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : be.decoder,
    delimiter: typeof e.delimiter == "string" || ln.isRegExp(e.delimiter) ? e.delimiter : be.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : be.depth,
    duplicates: n,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : be.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : be.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : be.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : be.strictNullHandling
  };
}, p0 = function(t, e) {
  var r = f0(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? c0(t, r) : t, s = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), o = 0; o < i.length; ++o) {
    var a = i[o], c = u0(a, n[a], r, typeof t == "string");
    s = ln.merge(s, c, r);
  }
  return r.allowSparse === !0 ? s : ln.compact(s);
}, h0 = n0, d0 = p0, m0 = cf, y0 = {
  formats: m0,
  parse: d0,
  stringify: h0
};
const Il = /* @__PURE__ */ $n(y0);
function lf(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function fy(t, e) {
  return Array.isArray(t) && t.some((r) => lf(r, e));
}
class Fl extends File {
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
const v0 = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, g0 = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function py(t, e = "reserved") {
  return [...t].map((r) => {
    if (g0(r) || v0(r) && e === "unsafe")
      return r;
    const n = new TextEncoder();
    return Array.from(n.encode(r)).map((i) => `0${i.toString(16).toUpperCase()}`.slice(-2)).map((i) => `%${i}`).join("");
  }).join("");
}
function uf(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? b0(t) : typeof e == "object" ? x0(t) : w0(t);
}
function Ce(t, e = !1) {
  return Array.isArray(t) || t !== null && typeof t == "object" ? t = JSON.stringify(t) : (typeof t == "number" || typeof t == "boolean") && (t = String(t)), e && t.length > 0 ? py(t, e) : t;
}
function b0({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  if (r === "simple")
    return e.map((i) => Ce(i, s)).join(",");
  if (r === "label")
    return `.${e.map((i) => Ce(i, s)).join(".")}`;
  if (r === "matrix")
    return e.map((i) => Ce(i, s)).reduce((i, o) => !i || n ? `${i || ""};${t}=${o}` : `${i},${o}`, "");
  if (r === "form") {
    const i = n ? `&${t}=` : ",";
    return e.map((o) => Ce(o, s)).join(i);
  }
  if (r === "spaceDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => Ce(o, s)).join(` ${i}`);
  }
  if (r === "pipeDelimited") {
    const i = n ? `${t}=` : "";
    return e.map((o) => Ce(o, s)).join(`|${i}`);
  }
}
function x0({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  const i = Object.keys(e);
  if (r === "simple")
    return i.reduce((o, a) => {
      const c = Ce(e[a], s), l = n ? "=" : ",";
      return `${o ? `${o},` : ""}${a}${l}${c}`;
    }, "");
  if (r === "label")
    return i.reduce((o, a) => {
      const c = Ce(e[a], s), l = n ? "=" : ".";
      return `${o ? `${o}.` : "."}${a}${l}${c}`;
    }, "");
  if (r === "matrix" && n)
    return i.reduce((o, a) => {
      const c = Ce(e[a], s);
      return `${o ? `${o};` : ";"}${a}=${c}`;
    }, "");
  if (r === "matrix")
    return i.reduce((o, a) => {
      const c = Ce(e[a], s);
      return `${o ? `${o},` : `;${t}=`}${a},${c}`;
    }, "");
  if (r === "form")
    return i.reduce((o, a) => {
      const c = Ce(e[a], s);
      return `${o ? `${o}${n ? "&" : ","}` : ""}${a}${n ? "=" : ","}${c}`;
    }, "");
}
function w0({
  key: t,
  value: e,
  style: r,
  escape: n
}) {
  if (r === "simple")
    return Ce(e, n);
  if (r === "label")
    return `.${Ce(e, n)}`;
  if (r === "matrix")
    return `;${t}=${Ce(e, n)}`;
  if (r === "form" || r === "deepObject")
    return Ce(e, n);
}
const E0 = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, S0 = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
function hy(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (f) => f.toString() : (f) => encodeURIComponent(f), l = c(t);
  if (typeof a > "u" && s)
    return [[l, ""]];
  if (lf(a) || fy(a))
    return [[l, a]];
  if (i)
    return bh(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((f) => f !== "undefined")) {
      const {
        style: f,
        explode: u,
        allowReserved: h
      } = o;
      return bh(t, a, r, {
        style: f,
        explode: u,
        allowReserved: h
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const h = typeof a == "string" ? a : JSON.stringify(a), p = c(h), m = new Fl(p, "blob", {
          type: o.contentType
        });
        return [[l, m]];
      }
      const f = c(String(a)), u = new Fl(f, "blob", {
        type: o.contentType
      });
      return [[l, u]];
    }
    return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) && a.every((f) => typeof f != "object") ? [[l, a.map(c).join(",")]] : [[l, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) ? n === "multi" ? [[l, a.map(c)]] : [[l, a.map(c).join(S0[n || "csv"])]] : [[l, ""]];
}
function bh(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (l) => Ce(l, o), c = r ? (l) => l : (l) => a(l);
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(E0[s])]] : s === "deepObject" ? Object.keys(e).map((l) => [c(`${t}[${l}]`), a(e[l])]) : i ? Object.keys(e).map((l) => [c(l), a(e[l])]) : [[c(t), Object.keys(e).map((l) => [`${c(l)},${a(e[l])}`]).join(",")]];
}
function $0(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of hy(r, n, !0))
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
    for (const [s, i] of hy(n, t[n]))
      i instanceof Fl ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return Il.stringify(e, {
    encode: !1,
    indices: !1
  }) || "";
}
function ff(t = {}) {
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
      return lf(c) || fy(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = $0(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = xh(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const l = Il.parse(o);
      Object.keys(r).forEach((u) => delete l[u]), a = Il.stringify(l, {
        encode: !0
      });
    }
    const c = s(a, xh(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function dy(t) {
  return typeof t > "u" || t === null;
}
function O0(t) {
  return typeof t == "object" && t !== null;
}
function A0(t) {
  return Array.isArray(t) ? t : dy(t) ? [] : [t];
}
function P0(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function j0(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function T0(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var _0 = dy, R0 = O0, C0 = A0, I0 = j0, F0 = T0, M0 = P0, Oe = {
  isNothing: _0,
  isObject: R0,
  toArray: C0,
  repeat: I0,
  isNegativeZero: F0,
  extend: M0
};
function my(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function ss(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = my(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
ss.prototype = Object.create(Error.prototype);
ss.prototype.constructor = ss;
ss.prototype.toString = function(e) {
  return this.name + ": " + my(this, e);
};
var Be = ss;
function Lc(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function Vc(t, e) {
  return Oe.repeat(" ", e - t.length) + t;
}
function D0(t, e) {
  if (e = Object.create(e || null), !t.buffer) return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, l, f = Math.min(t.line + e.linesAfter, s.length).toString().length, u = e.maxLength - (e.indent + f + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    l = Lc(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      u
    ), a = Oe.repeat(" ", e.indent) + Vc((t.line - c + 1).toString(), f) + " | " + l.str + `
` + a;
  for (l = Lc(t.buffer, n[o], s[o], t.position, u), a += Oe.repeat(" ", e.indent) + Vc((t.line + 1).toString(), f) + " | " + l.str + `
`, a += Oe.repeat("-", e.indent + f + 3 + l.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    l = Lc(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      u
    ), a += Oe.repeat(" ", e.indent) + Vc((t.line + c + 1).toString(), f) + " | " + l.str + `
`;
  return a.replace(/\n$/, "");
}
var N0 = D0, k0 = [
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
], L0 = [
  "scalar",
  "sequence",
  "mapping"
];
function V0(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(n) {
      e[String(n)] = r;
    });
  }), e;
}
function B0(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (k0.indexOf(r) === -1)
      throw new Be('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = V0(e.styleAliases || null), L0.indexOf(this.kind) === -1)
    throw new Be('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Ie = B0;
function wh(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function U0() {
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
function Ml(t) {
  return this.extend(t);
}
Ml.prototype.extend = function(e) {
  var r = [], n = [];
  if (e instanceof Ie)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  else
    throw new Be("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof Ie))
      throw new Be("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new Be("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new Be("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(i) {
    if (!(i instanceof Ie))
      throw new Be("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(Ml.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = wh(s, "implicit"), s.compiledExplicit = wh(s, "explicit"), s.compiledTypeMap = U0(s.compiledImplicit, s.compiledExplicit), s;
};
var yy = Ml, vy = new Ie("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), gy = new Ie("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), by = new Ie("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), xy = new yy({
  explicit: [
    vy,
    gy,
    by
  ]
});
function H0(t) {
  if (t === null) return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function q0() {
  return null;
}
function G0(t) {
  return t === null;
}
var wy = new Ie("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: H0,
  construct: q0,
  predicate: G0,
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
function z0(t) {
  if (t === null) return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function K0(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function W0(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var Ey = new Ie("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: z0,
  construct: K0,
  predicate: W0,
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
function J0(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function Y0(t) {
  return 48 <= t && t <= 55;
}
function X0(t) {
  return 48 <= t && t <= 57;
}
function Q0(t) {
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
          if (!J0(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!Y0(t.charCodeAt(r))) return !1;
          n = !0;
        }
      return n && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < e; r++)
    if (s = t[r], s !== "_") {
      if (!X0(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function Z0(t) {
  var e = t, r = 1, n;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), n = e[0], (n === "-" || n === "+") && (n === "-" && (r = -1), e = e.slice(1), n = e[0]), e === "0") return 0;
  if (n === "0") {
    if (e[1] === "b") return r * parseInt(e.slice(2), 2);
    if (e[1] === "x") return r * parseInt(e.slice(2), 16);
    if (e[1] === "o") return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function eS(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Oe.isNegativeZero(t);
}
var Sy = new Ie("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Q0,
  construct: Z0,
  predicate: eS,
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
}), tS = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function rS(t) {
  return !(t === null || !tS.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function nS(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var sS = /^[-+]?[0-9]+e/;
function iS(t, e) {
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
  else if (Oe.isNegativeZero(t))
    return "-0.0";
  return r = t.toString(10), sS.test(r) ? r.replace("e", ".e") : r;
}
function oS(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Oe.isNegativeZero(t));
}
var $y = new Ie("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: rS,
  construct: nS,
  predicate: oS,
  represent: iS,
  defaultStyle: "lowercase"
}), Oy = xy.extend({
  implicit: [
    wy,
    Ey,
    Sy,
    $y
  ]
}), Ay = Oy, Py = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), jy = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function aS(t) {
  return t === null ? !1 : Py.exec(t) !== null || jy.exec(t) !== null;
}
function cS(t) {
  var e, r, n, s, i, o, a, c = 0, l = null, f, u, h;
  if (e = Py.exec(t), e === null && (e = jy.exec(t)), e === null) throw new Error("Date resolve error");
  if (r = +e[1], n = +e[2] - 1, s = +e[3], !e[4])
    return new Date(Date.UTC(r, n, s));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (f = +e[10], u = +(e[11] || 0), l = (f * 60 + u) * 6e4, e[9] === "-" && (l = -l)), h = new Date(Date.UTC(r, n, s, i, o, a, c)), l && h.setTime(h.getTime() - l), h;
}
function lS(t) {
  return t.toISOString();
}
var Ty = new Ie("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: aS,
  construct: cS,
  instanceOf: Date,
  represent: lS
});
function uS(t) {
  return t === "<<" || t === null;
}
var _y = new Ie("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: uS
}), pf = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function fS(t) {
  if (t === null) return !1;
  var e, r, n = 0, s = t.length, i = pf;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0) return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function pS(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = pf, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function hS(t) {
  var e = "", r = 0, n, s, i = t.length, o = pf;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function dS(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Ry = new Ie("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: fS,
  construct: pS,
  predicate: dS,
  represent: hS
}), mS = Object.prototype.hasOwnProperty, yS = Object.prototype.toString;
function vS(t) {
  if (t === null) return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, yS.call(s) !== "[object Object]") return !1;
    for (i in s)
      if (mS.call(s, i))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (e.indexOf(i) === -1) e.push(i);
    else return !1;
  }
  return !0;
}
function gS(t) {
  return t !== null ? t : [];
}
var Cy = new Ie("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: vS,
  construct: gS
}), bS = Object.prototype.toString;
function xS(t) {
  if (t === null) return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], bS.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1)) return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function wS(t) {
  if (t === null) return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var Iy = new Ie("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: xS,
  construct: wS
}), ES = Object.prototype.hasOwnProperty;
function SS(t) {
  if (t === null) return !0;
  var e, r = t;
  for (e in r)
    if (ES.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function $S(t) {
  return t !== null ? t : {};
}
var Fy = new Ie("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: SS,
  construct: $S
}), hf = Ay.extend({
  implicit: [
    Ty,
    _y
  ],
  explicit: [
    Ry,
    Cy,
    Iy,
    Fy
  ]
}), sr = Object.prototype.hasOwnProperty, Li = 1, My = 2, Dy = 3, Vi = 4, Bc = 1, OS = 2, Eh = 3, AS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, PS = /[\x85\u2028\u2029]/, jS = /[,\[\]\{\}]/, Ny = /^(?:!|!!|![a-z\-]+!)$/i, ky = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Sh(t) {
  return Object.prototype.toString.call(t);
}
function St(t) {
  return t === 10 || t === 13;
}
function Sr(t) {
  return t === 9 || t === 32;
}
function Ge(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Xr(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function TS(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function _S(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function RS(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function $h(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function CS(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var Ly = new Array(256), Vy = new Array(256);
for (var qr = 0; qr < 256; qr++)
  Ly[qr] = $h(qr) ? 1 : 0, Vy[qr] = $h(qr);
function IS(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || hf, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function By(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = N0(r), new Be(e, r);
}
function B(t, e) {
  throw By(t, e);
}
function Bi(t, e) {
  t.onWarning && t.onWarning.call(null, By(t, e));
}
var Oh = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && B(e, "duplication of %YAML directive"), n.length !== 1 && B(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && B(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && B(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Bi(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && B(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], Ny.test(s) || B(e, "ill-formed tag handle (first argument) of the TAG directive"), sr.call(e.tagMap, s) && B(e, 'there is a previously declared suffix for "' + s + '" tag handle'), ky.test(i) || B(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      B(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function nr(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || B(t, "expected valid JSON character");
    else AS.test(a) && B(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function Ah(t, e, r, n) {
  var s, i, o, a;
  for (Oe.isObject(r) || B(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], sr.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function Qr(t, e, r, n, s, i, o, a, c) {
  var l, f;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), l = 0, f = s.length; l < f; l += 1)
      Array.isArray(s[l]) && B(t, "nested arrays are not supported inside keys"), typeof s == "object" && Sh(s[l]) === "[object Object]" && (s[l] = "[object Object]");
  if (typeof s == "object" && Sh(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (l = 0, f = i.length; l < f; l += 1)
        Ah(t, e, i[l], r);
    else
      Ah(t, e, i, r);
  else
    !t.json && !sr.call(r, s) && sr.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, B(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function df(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : B(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function we(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; Sr(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (St(s))
      for (df(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && Bi(t, "deficient indentation"), n;
}
function ia(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || Ge(r)));
}
function mf(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Oe.repeat(`
`, e - 1));
}
function FS(t, e, r) {
  var n, s, i, o, a, c, l, f, u = t.kind, h = t.result, p;
  if (p = t.input.charCodeAt(t.position), Ge(p) || Xr(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (s = t.input.charCodeAt(t.position + 1), Ge(s) || r && Xr(s)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; p !== 0; ) {
    if (p === 58) {
      if (s = t.input.charCodeAt(t.position + 1), Ge(s) || r && Xr(s))
        break;
    } else if (p === 35) {
      if (n = t.input.charCodeAt(t.position - 1), Ge(n))
        break;
    } else {
      if (t.position === t.lineStart && ia(t) || r && Xr(p))
        break;
      if (St(p))
        if (c = t.line, l = t.lineStart, f = t.lineIndent, we(t, !1, -1), t.lineIndent >= e) {
          a = !0, p = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = l, t.lineIndent = f;
          break;
        }
    }
    a && (nr(t, i, o, !1), mf(t, t.line - c), i = o = t.position, a = !1), Sr(p) || (o = t.position + 1), p = t.input.charCodeAt(++t.position);
  }
  return nr(t, i, o, !1), t.result ? !0 : (t.kind = u, t.result = h, !1);
}
function MS(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (nr(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else St(r) ? (nr(t, n, s, !0), mf(t, we(t, !1, e)), n = s = t.position) : t.position === t.lineStart && ia(t) ? B(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  B(t, "unexpected end of the stream within a single quoted scalar");
}
function DS(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return nr(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (nr(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), St(a))
        we(t, !1, e);
      else if (a < 256 && Ly[a])
        t.result += Vy[a], t.position++;
      else if ((o = _S(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = TS(a)) >= 0 ? i = (i << 4) + o : B(t, "expected hexadecimal character");
        t.result += CS(i), t.position++;
      } else
        B(t, "unknown escape sequence");
      r = n = t.position;
    } else St(a) ? (nr(t, r, n, !0), mf(t, we(t, !1, e)), r = n = t.position) : t.position === t.lineStart && ia(t) ? B(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  B(t, "unexpected end of the stream within a double quoted scalar");
}
function NS(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, l, f, u, h, p, m = /* @__PURE__ */ Object.create(null), d, y, g, v;
  if (v = t.input.charCodeAt(t.position), v === 91)
    f = 93, p = !1, a = [];
  else if (v === 123)
    f = 125, p = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), v = t.input.charCodeAt(++t.position); v !== 0; ) {
    if (we(t, !0, e), v = t.input.charCodeAt(t.position), v === f)
      return t.position++, t.tag = o, t.anchor = c, t.kind = p ? "mapping" : "sequence", t.result = a, !0;
    r ? v === 44 && B(t, "expected the node content, but found ','") : B(t, "missed comma between flow collection entries"), y = d = g = null, u = h = !1, v === 63 && (l = t.input.charCodeAt(t.position + 1), Ge(l) && (u = h = !0, t.position++, we(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, un(t, e, Li, !1, !0), y = t.tag, d = t.result, we(t, !0, e), v = t.input.charCodeAt(t.position), (h || t.line === n) && v === 58 && (u = !0, v = t.input.charCodeAt(++t.position), we(t, !0, e), un(t, e, Li, !1, !0), g = t.result), p ? Qr(t, a, m, y, d, g, n, s, i) : u ? a.push(Qr(t, null, m, y, d, g, n, s, i)) : a.push(d), we(t, !0, e), v = t.input.charCodeAt(t.position), v === 44 ? (r = !0, v = t.input.charCodeAt(++t.position)) : r = !1;
  }
  B(t, "unexpected end of the stream within a flow collection");
}
function kS(t, e) {
  var r, n, s = Bc, i = !1, o = !1, a = e, c = 0, l = !1, f, u;
  if (u = t.input.charCodeAt(t.position), u === 124)
    n = !1;
  else if (u === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; u !== 0; )
    if (u = t.input.charCodeAt(++t.position), u === 43 || u === 45)
      Bc === s ? s = u === 43 ? Eh : OS : B(t, "repeat of a chomping mode identifier");
    else if ((f = RS(u)) >= 0)
      f === 0 ? B(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? B(t, "repeat of an indentation width identifier") : (a = e + f - 1, o = !0);
    else
      break;
  if (Sr(u)) {
    do
      u = t.input.charCodeAt(++t.position);
    while (Sr(u));
    if (u === 35)
      do
        u = t.input.charCodeAt(++t.position);
      while (!St(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (df(t), t.lineIndent = 0, u = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && u === 32; )
      t.lineIndent++, u = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), St(u)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === Eh ? t.result += Oe.repeat(`
`, i ? 1 + c : c) : s === Bc && i && (t.result += `
`);
      break;
    }
    for (n ? Sr(u) ? (l = !0, t.result += Oe.repeat(`
`, i ? 1 + c : c)) : l ? (l = !1, t.result += Oe.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += Oe.repeat(`
`, c) : t.result += Oe.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !St(u) && u !== 0; )
      u = t.input.charCodeAt(++t.position);
    nr(t, r, t.position, !1);
  }
  return !0;
}
function Ph(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, B(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !Ge(o)))); ) {
    if (a = !0, t.position++, we(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, un(t, e, Dy, !1, !0), i.push(t.result), we(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      B(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function LS(t, e, r) {
  var n, s, i, o, a, c, l = t.tag, f = t.anchor, u = {}, h = /* @__PURE__ */ Object.create(null), p = null, m = null, d = null, y = !1, g = !1, v;
  if (t.firstTabInLine !== -1) return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = u), v = t.input.charCodeAt(t.position); v !== 0; ) {
    if (!y && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, B(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, (v === 63 || v === 58) && Ge(n))
      v === 63 ? (y && (Qr(t, u, h, p, m, null, o, a, c), p = m = d = null), g = !0, y = !0, s = !0) : y ? (y = !1, s = !0) : B(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, v = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !un(t, r, My, !1, !0))
        break;
      if (t.line === i) {
        for (v = t.input.charCodeAt(t.position); Sr(v); )
          v = t.input.charCodeAt(++t.position);
        if (v === 58)
          v = t.input.charCodeAt(++t.position), Ge(v) || B(t, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Qr(t, u, h, p, m, null, o, a, c), p = m = d = null), g = !0, y = !1, s = !1, p = t.tag, m = t.result;
        else if (g)
          B(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = l, t.anchor = f, !0;
      } else if (g)
        B(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = l, t.anchor = f, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (y && (o = t.line, a = t.lineStart, c = t.position), un(t, e, Vi, !0, s) && (y ? m = t.result : d = t.result), y || (Qr(t, u, h, p, m, d, o, a, c), p = m = d = null), we(t, !0, -1), v = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && v !== 0)
      B(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return y && Qr(t, u, h, p, m, null, o, a, c), g && (t.tag = l, t.anchor = f, t.kind = "mapping", t.result = u), g;
}
function VS(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33) return !1;
  if (t.tag !== null && B(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : B(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Ge(o); )
      o === 33 && (n ? B(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), Ny.test(s) || B(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), jS.test(i) && B(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !ky.test(i) && B(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    B(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : sr.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : B(t, 'undeclared tag handle "' + s + '"'), !0;
}
function BS(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38) return !1;
  for (t.anchor !== null && B(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !Ge(r) && !Xr(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && B(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function US(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42) return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !Ge(n) && !Xr(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && B(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), sr.call(t.anchorMap, r) || B(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], we(t, !0, -1), !0;
}
function un(t, e, r, n, s) {
  var i, o, a, c = 1, l = !1, f = !1, u, h, p, m, d, y;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = Vi === r || Dy === r, n && we(t, !0, -1) && (l = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; VS(t) || BS(t); )
      we(t, !0, -1) ? (l = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = l || s), (c === 1 || Vi === r) && (Li === r || My === r ? d = e : d = e + 1, y = t.position - t.lineStart, c === 1 ? a && (Ph(t, y) || LS(t, y, d)) || NS(t, d) ? f = !0 : (o && kS(t, d) || MS(t, d) || DS(t, d) ? f = !0 : US(t) ? (f = !0, (t.tag !== null || t.anchor !== null) && B(t, "alias node should not have any properties")) : FS(t, d, Li === r) && (f = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (f = a && Ph(t, y))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && B(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), u = 0, h = t.implicitTypes.length; u < h; u += 1)
      if (m = t.implicitTypes[u], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (sr.call(t.typeMap[t.kind || "fallback"], t.tag))
      m = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (m = null, p = t.typeMap.multi[t.kind || "fallback"], u = 0, h = p.length; u < h; u += 1)
        if (t.tag.slice(0, p[u].tag.length) === p[u].tag) {
          m = p[u];
          break;
        }
    m || B(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && B(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : B(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || f;
}
function HS(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (we(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !Ge(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && B(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; Sr(o); )
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
    o !== 0 && df(t), sr.call(Oh, n) ? Oh[n](t, n, s) : Bi(t, 'unknown document directive "' + n + '"');
  }
  if (we(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, we(t, !0, -1)) : i && B(t, "directives end mark is expected"), un(t, t.lineIndent - 1, Vi, !1, !0), we(t, !0, -1), t.checkLineBreaks && PS.test(t.input.slice(e, t.position)) && Bi(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && ia(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, we(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    B(t, "end of the stream or a document separator is expected");
  else
    return;
}
function Uy(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new IS(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, B(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    HS(r);
  return r.documents;
}
function qS(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = Uy(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function GS(t, e) {
  var r = Uy(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Be("expected a single document in the stream, but found more");
  }
}
var zS = qS, KS = GS, Hy = {
  loadAll: zS,
  load: KS
}, qy = Object.prototype.toString, Gy = Object.prototype.hasOwnProperty, yf = 65279, WS = 9, is = 10, JS = 13, YS = 32, XS = 33, QS = 34, Dl = 35, ZS = 37, e$ = 38, t$ = 39, r$ = 42, zy = 44, n$ = 45, Ui = 58, s$ = 61, i$ = 62, o$ = 63, a$ = 64, Ky = 91, Wy = 93, c$ = 96, Jy = 123, l$ = 124, Yy = 125, Ne = {};
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
var u$ = [
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
], f$ = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function p$(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null) return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && Gy.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function h$(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new Be("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Oe.repeat("0", n - e.length) + e;
}
var d$ = 1, os = 2;
function m$(t) {
  this.schema = t.schema || hf, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Oe.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = p$(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? os : d$, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function jh(t, e) {
  for (var r = Oe.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function Nl(t, e) {
  return `
` + Oe.repeat(" ", t.indent * e);
}
function y$(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function Hi(t) {
  return t === YS || t === WS;
}
function as(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== yf || 65536 <= t && t <= 1114111;
}
function Th(t) {
  return as(t) && t !== yf && t !== JS && t !== is;
}
function _h(t, e, r) {
  var n = Th(t), s = n && !Hi(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== zy && t !== Ky && t !== Wy && t !== Jy && t !== Yy) && t !== Dl && !(e === Ui && !s) || Th(e) && !Hi(e) && t === Dl || e === Ui && s
  );
}
function v$(t) {
  return as(t) && t !== yf && !Hi(t) && t !== n$ && t !== o$ && t !== Ui && t !== zy && t !== Ky && t !== Wy && t !== Jy && t !== Yy && t !== Dl && t !== e$ && t !== r$ && t !== XS && t !== l$ && t !== s$ && t !== i$ && t !== t$ && t !== QS && t !== ZS && t !== a$ && t !== c$;
}
function g$(t) {
  return !Hi(t) && t !== Ui;
}
function Wn(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function Xy(t) {
  var e = /^\n* /;
  return e.test(t);
}
var Qy = 1, kl = 2, Zy = 3, ev = 4, Yr = 5;
function b$(t, e, r, n, s, i, o, a) {
  var c, l = 0, f = null, u = !1, h = !1, p = n !== -1, m = -1, d = v$(Wn(t, 0)) && g$(Wn(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; l >= 65536 ? c += 2 : c++) {
      if (l = Wn(t, c), !as(l))
        return Yr;
      d = d && _h(l, f, a), f = l;
    }
  else {
    for (c = 0; c < t.length; l >= 65536 ? c += 2 : c++) {
      if (l = Wn(t, c), l === is)
        u = !0, p && (h = h || // Foldable line = too long, and not more-indented.
        c - m - 1 > n && t[m + 1] !== " ", m = c);
      else if (!as(l))
        return Yr;
      d = d && _h(l, f, a), f = l;
    }
    h = h || p && c - m - 1 > n && t[m + 1] !== " ";
  }
  return !u && !h ? d && !o && !s(t) ? Qy : i === os ? Yr : kl : r > 9 && Xy(t) ? Yr : o ? i === os ? Yr : kl : h ? ev : Zy;
}
function x$(t, e, r, n, s) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === os ? '""' : "''";
    if (!t.noCompatMode && (u$.indexOf(e) !== -1 || f$.test(e)))
      return t.quotingType === os ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(l) {
      return y$(t, l);
    }
    switch (b$(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !n,
      s
    )) {
      case Qy:
        return e;
      case kl:
        return "'" + e.replace(/'/g, "''") + "'";
      case Zy:
        return "|" + Rh(e, t.indent) + Ch(jh(e, i));
      case ev:
        return ">" + Rh(e, t.indent) + Ch(jh(w$(e, o), i));
      case Yr:
        return '"' + E$(e) + '"';
      default:
        throw new Be("impossible error: invalid scalar style");
    }
  }();
}
function Rh(t, e) {
  var r = Xy(t) ? String(e) : "", n = t[t.length - 1] === `
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
function w$(t, e) {
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
  if (t === "" || t[0] === " ") return t;
  for (var r = / [^ ]/g, n, s = 0, i, o = 0, a = 0, c = ""; n = r.exec(t); )
    a = n.index, a - s > e && (i = o > s ? o : a, c += `
` + t.slice(s, i), s = i + 1), o = a;
  return c += `
`, t.length - s > e && o > s ? c += t.slice(s, o) + `
` + t.slice(o + 1) : c += t.slice(s), c.slice(1);
}
function E$(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = Wn(t, s), n = Ne[r], !n && as(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || h$(r);
  return e;
}
function S$(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (Mt(t, e, a, !1, !1) || typeof a > "u" && Mt(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function Fh(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (Mt(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Mt(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += Nl(t, e)), t.dump && is === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function $$(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, l, f;
  for (o = 0, a = i.length; o < a; o += 1)
    f = "", n !== "" && (f += ", "), t.condenseFlow && (f += '"'), c = i[o], l = r[c], t.replacer && (l = t.replacer.call(r, c, l)), Mt(t, e, c, !1, !1) && (t.dump.length > 1024 && (f += "? "), f += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Mt(t, e, l, !1, !1) && (f += t.dump, n += f));
  t.tag = s, t.dump = "{" + n + "}";
}
function O$(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, l, f, u, h;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new Be("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    h = "", (!n || s !== "") && (h += Nl(t, e)), l = o[a], f = r[l], t.replacer && (f = t.replacer.call(r, l, f)), Mt(t, e + 1, l, !0, !0, !0) && (u = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, u && (t.dump && is === t.dump.charCodeAt(0) ? h += "?" : h += "? "), h += t.dump, u && (h += Nl(t, e)), Mt(t, e + 1, f, !0, u) && (t.dump && is === t.dump.charCodeAt(0) ? h += ":" : h += ": ", h += t.dump, s += h));
  t.tag = i, t.dump = s || "{}";
}
function Mh(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, qy.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (Gy.call(a.represent, c))
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
  var a = qy.call(t.dump), c = n, l;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var f = a === "[object Object]" || a === "[object Array]", u, h;
  if (f && (u = t.duplicates.indexOf(r), h = u !== -1), (t.tag !== null && t.tag !== "?" || h || t.indent !== 2 && e > 0) && (s = !1), h && t.usedDuplicates[u])
    t.dump = "*ref_" + u;
  else {
    if (f && h && !t.usedDuplicates[u] && (t.usedDuplicates[u] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (O$(t, e, t.dump, s), h && (t.dump = "&ref_" + u + t.dump)) : ($$(t, e, t.dump), h && (t.dump = "&ref_" + u + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Fh(t, e - 1, t.dump, s) : Fh(t, e, t.dump, s), h && (t.dump = "&ref_" + u + t.dump)) : (S$(t, e, t.dump), h && (t.dump = "&ref_" + u + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && x$(t, t.dump, e, i, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (t.skipInvalid) return !1;
      throw new Be("unacceptable kind of an object to dump " + a);
    }
    t.tag !== null && t.tag !== "?" && (l = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? l = "!" + l : l.slice(0, 18) === "tag:yaml.org,2002:" ? l = "!!" + l.slice(18) : l = "!<" + l + ">", t.dump = l + " " + t.dump);
  }
  return !0;
}
function A$(t, e) {
  var r = [], n = [], s, i;
  for (Ll(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function Ll(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        Ll(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        Ll(t[n[s]], e, r);
}
function P$(t, e) {
  e = e || {};
  var r = new m$(e);
  r.noRefs || A$(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), Mt(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var j$ = P$, T$ = {
  dump: j$
};
function vf(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var _$ = Ie, R$ = yy, C$ = xy, qi = Oy, I$ = Ay, F$ = hf, M$ = Hy.load, D$ = Hy.loadAll, N$ = T$.dump, k$ = Be, L$ = {
  binary: Ry,
  float: $y,
  map: by,
  null: wy,
  pairs: Iy,
  set: Fy,
  timestamp: Ty,
  bool: Ey,
  int: Sy,
  merge: _y,
  omap: Cy,
  seq: gy,
  str: vy
}, V$ = vf("safeLoad", "load"), B$ = vf("safeLoadAll", "loadAll"), U$ = vf("safeDump", "dump"), fn = {
  Type: _$,
  Schema: R$,
  FAILSAFE_SCHEMA: C$,
  JSON_SCHEMA: qi,
  CORE_SCHEMA: I$,
  DEFAULT_SCHEMA: F$,
  load: M$,
  loadAll: D$,
  dump: N$,
  YAMLException: k$,
  types: L$,
  safeLoad: V$,
  safeLoadAll: B$,
  safeDump: U$
};
const H$ = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function q$(t, e) {
  return e && (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0) ? JSON.parse(t) : fn.load(t);
}
function G$(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function tv(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = G$(n), e), {});
}
function rv(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: tv(t.headers)
  }, s = n.headers["content-type"], i = r || H$(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = q$(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
async function pn(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, e = ff(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await rv(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
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
function z$(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), n = ff(n), n = e(n), r(t(n)));
}
function nv(t, e = {}) {
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
const gf = (t) => {
  var e, r;
  const {
    baseDoc: n,
    url: s
  } = t, i = (e = n ?? s) !== null && e !== void 0 ? e : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(i, globalThis.document.baseURI)) : i;
}, sv = (t) => {
  const {
    fetch: e,
    http: r
  } = t;
  return e || r || pn;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var K$ = /* @__PURE__ */ function() {
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
}(), W$ = Object.prototype.hasOwnProperty;
function Vl(t, e) {
  return W$.call(t, e);
}
function Bl(t) {
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
function We(t) {
  switch (typeof t) {
    case "object":
      return JSON.parse(JSON.stringify(t));
    case "undefined":
      return null;
    default:
      return t;
  }
}
function Ul(t) {
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
function iv(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Hl(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (Hl(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = Bl(t), s = n.length, i = 0; i < s; i++)
        if (Hl(t[n[i]]))
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
var ov = (
  /** @class */
  function(t) {
    K$(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, Dh(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = Dh(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  }(Error)
), ge = ov, J$ = We, Zr = {
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
    n && (n = We(n));
    var s = $r(r, { op: "remove", path: this.from }).removed;
    return $r(r, { op: "add", path: this.path, value: s }), { newDocument: r, removed: n };
  },
  copy: function(t, e, r) {
    var n = cs(r, this.from);
    return $r(r, { op: "add", path: this.path, value: We(n) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: ls(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, Y$ = {
  add: function(t, e, r) {
    return Ul(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
  },
  remove: function(t, e, r) {
    var n = t.splice(e, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(t, e, r) {
    var n = t[e];
    return t[e] = this.value, { newDocument: r, removed: n };
  },
  move: Zr.move,
  copy: Zr.copy,
  test: Zr.test,
  _get: Zr._get
};
function cs(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return $r(t, r), r.value;
}
function $r(t, e, r, n, s, i) {
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
    n || (t = We(t));
    var a = e.path || "", c = a.split("/"), l = t, f = 1, u = c.length, h = void 0, p = void 0, m = void 0;
    for (typeof r == "function" ? m = r : m = Gi; ; ) {
      if (p = c[f], p && p.indexOf("~") != -1 && (p = iv(p)), s && (p == "__proto__" || p == "prototype" && f > 0 && c[f - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && h === void 0 && (l[p] === void 0 ? h = c.slice(0, f).join("/") : f == u - 1 && (h = e.path), h !== void 0 && m(e, 0, t, h)), f++, Array.isArray(l)) {
        if (p === "-")
          p = l.length;
        else {
          if (r && !Ul(p))
            throw new ge("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          Ul(p) && (p = ~~p);
        }
        if (f >= u) {
          if (r && e.op === "add" && p > l.length)
            throw new ge("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = Y$[e.op].call(e, l, p, t);
          if (o.test === !1)
            throw new ge("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (f >= u) {
        var o = Zr[e.op].call(e, l, p, t);
        if (o.test === !1)
          throw new ge("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (l = l[p], r && f < u && (!l || typeof l != "object"))
        throw new ge("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function tr(t, e, r, n, s) {
  if (n === void 0 && (n = !0), s === void 0 && (s = !0), r && !Array.isArray(e))
    throw new ge("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (t = We(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = $r(t, e[o], r, !0, s, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function X$(t, e, r) {
  var n = $r(t, e);
  if (n.test === !1)
    throw new ge("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function Gi(t, e, r, n) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new ge("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (Zr[t.op]) {
    if (typeof t.path != "string")
      throw new ge("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new ge('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new ge("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new ge("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && Hl(t.value))
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
        var o = { op: "_get", path: t.from, value: void 0 }, a = av([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new ge("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else throw new ge("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function av(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new ge("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      tr(We(e), We(t), r || !0);
    else {
      r = r || Gi;
      for (var n = 0; n < t.length; n++)
        r(t[n], n, e, void 0);
    }
  } catch (s) {
    if (s instanceof ge)
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
const Q$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: ge,
  _areEquals: ls,
  applyOperation: $r,
  applyPatch: tr,
  applyReducer: X$,
  deepClone: J$,
  getValueByPointer: cs,
  validate: av,
  validator: Gi
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var bf = /* @__PURE__ */ new WeakMap(), Z$ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  }()
), eO = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  }()
);
function tO(t) {
  return bf.get(t);
}
function rO(t, e) {
  return t.observers.get(e);
}
function nO(t, e) {
  t.observers.delete(e.callback);
}
function sO(t, e) {
  e.unobserve();
}
function iO(t, e) {
  var r = [], n, s = tO(t);
  if (!s)
    s = new Z$(t), bf.set(t, s);
  else {
    var i = rO(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = We(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      ql(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    ql(n), clearTimeout(n.next), nO(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new eO(e, n)), n;
}
function ql(t, e) {
  e === void 0 && (e = !1);
  var r = bf.get(t.object);
  xf(r.value, t.object, t.patches, "", e), t.patches.length && tr(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function xf(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = Bl(e), o = Bl(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var l = o[c], f = t[l];
      if (Vl(e, l) && !(e[l] === void 0 && f !== void 0 && Array.isArray(e) === !1)) {
        var u = e[l];
        typeof f == "object" && f != null && typeof u == "object" && u != null && Array.isArray(f) === Array.isArray(u) ? xf(f, u, r, n + "/" + mr(l), s) : f !== u && (s && r.push({ op: "test", path: n + "/" + mr(l), value: We(f) }), r.push({ op: "replace", path: n + "/" + mr(l), value: We(u) }));
      } else Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + mr(l), value: We(f) }), r.push({ op: "remove", path: n + "/" + mr(l) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var l = i[c];
        !Vl(t, l) && e[l] !== void 0 && r.push({ op: "add", path: n + "/" + mr(l), value: We(e[l]) });
      }
  }
}
function oO(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return xf(t, e, n, "", r), n;
}
const aO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: oO,
  generate: ql,
  observe: iO,
  unobserve: sO
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, Q$, aO, {
  JsonPatchError: ov,
  deepClone: We,
  escapePathComponent: mr,
  unescapePathComponent: iv
});
var cO = function(e) {
  return lO(e) && !uO(e);
};
function lO(t) {
  return !!t && typeof t == "object";
}
function uO(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || hO(t);
}
var fO = typeof Symbol == "function" && Symbol.for, pO = fO ? Symbol.for("react.element") : 60103;
function hO(t) {
  return t.$$typeof === pO;
}
function dO(t) {
  return Array.isArray(t) ? [] : {};
}
function us(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? hn(dO(t), t, e) : t;
}
function mO(t, e, r) {
  return t.concat(e).map(function(n) {
    return us(n, r);
  });
}
function yO(t, e) {
  if (!e.customMerge)
    return hn;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : hn;
}
function vO(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Nh(t) {
  return Object.keys(t).concat(vO(t));
}
function cv(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function gO(t, e) {
  return cv(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function bO(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && Nh(t).forEach(function(s) {
    n[s] = us(t[s], r);
  }), Nh(e).forEach(function(s) {
    gO(t, s) || (cv(t, s) && r.isMergeableObject(e[s]) ? n[s] = yO(s, r)(t[s], e[s], r) : n[s] = us(e[s], r));
  }), n;
}
function hn(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || mO, r.isMergeableObject = r.isMergeableObject || cO, r.cloneUnlessOtherwiseSpecified = us;
  var n = Array.isArray(e), s = Array.isArray(t), i = n === s;
  return i ? n ? r.arrayMerge(t, e, r) : bO(t, e, r) : us(e, r);
}
hn.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, s) {
    return hn(n, s, r);
  }, {});
};
var xO = hn, wO = xO;
const EO = /* @__PURE__ */ $n(wO), ne = {
  add: $O,
  replace: Ai,
  remove: OO,
  merge: AO,
  mergeDeep: PO,
  context: jO,
  getIn: CO,
  applyPatch: SO,
  parentPathMatch: RO,
  flatten: ws,
  fullyNormalizeArray: IO,
  normalizeArray: uv,
  isPromise: FO,
  forEachNew: TO,
  forEachNewPrimitive: _O,
  isJsonPatch: hv,
  isContextPatch: NO,
  isPatch: oa,
  isMutation: dv,
  isAdditiveMutation: zi,
  isGenerator: DO,
  isFunction: pv,
  isObject: Or,
  isError: MO
};
function SO(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && kh(e.path)
  }, e.op === "merge") {
    const n = Uc(t, e.path);
    Object.assign(n, e.value), tr(t, [Ai(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = Uc(t, e.path), s = EO(n, e.value);
    t = tr(t, [Ai(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && Or(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${kh(i)}`,
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
      ...Uc(t, e.path),
      ...e.meta
    };
    tr(t, [Ai(e.path, s)]);
  }
  return t;
}
function kh(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function $O(t, e) {
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
function OO(t) {
  return {
    op: "remove",
    path: t
  };
}
function AO(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function PO(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function jO(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function TO(t, e) {
  try {
    return lv(t, zl, e);
  } catch (r) {
    return r;
  }
}
function _O(t, e) {
  try {
    return lv(t, Gl, e);
  } catch (r) {
    return r;
  }
}
function lv(t, e, r) {
  const n = t.filter(zi).map((o) => e(o.value, r, o.path)) || [], s = ws(n);
  return fv(s);
}
function Gl(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => Gl(n, e, r.concat(s))) : Or(t) ? Object.keys(t).map((n) => Gl(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function zl(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => zl(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (Or(t)) {
    const s = Object.keys(t).map((i) => zl(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = ws(n), n;
}
function RO(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, n = e.length; r < n; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function CO(t, e) {
  return e.reduce((r, n) => typeof n < "u" && r ? r[n] : r, t);
}
function IO(t) {
  return fv(ws(uv(t)));
}
function uv(t) {
  return Array.isArray(t) ? t : [t];
}
function ws(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? ws(e) : e));
}
function fv(t) {
  return t.filter((e) => typeof e < "u");
}
function Or(t) {
  return t && typeof t == "object";
}
function FO(t) {
  return Or(t) && pv(t.then);
}
function pv(t) {
  return t && typeof t == "function";
}
function MO(t) {
  return t instanceof Error;
}
function hv(t) {
  if (oa(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function DO(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function dv(t) {
  return hv(t) || oa(t) && t.type === "mutation";
}
function zi(t) {
  return dv(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function NO(t) {
  return oa(t) && t.type === "context";
}
function oa(t) {
  return t && typeof t == "object";
}
function Uc(t, e) {
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
  qn(typeof self == "object" && self) || qn(typeof Et == "object" && Et) || qn(typeof Et == "object" && Et) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), pt = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, kO = pt, aa = !kO(function() {
  var t = (function() {
  }).bind();
  return typeof t != "function" || t.hasOwnProperty("prototype");
}), LO = aa, mv = Function.prototype, Lh = mv.apply, Vh = mv.call, wf = typeof Reflect == "object" && Reflect.apply || (LO ? Vh.bind(Lh) : function() {
  return Vh.apply(Lh, arguments);
}), yv = aa, vv = Function.prototype, Kl = vv.call, VO = yv && vv.bind.bind(Kl, Kl), ht = yv ? VO : function(t) {
  return function() {
    return Kl.apply(t, arguments);
  };
}, gv = ht, BO = gv({}.toString), UO = gv("".slice), Ef = function(t) {
  return UO(BO(t), 8, -1);
}, HO = Ef, qO = ht, bv = function(t) {
  if (HO(t) === "Function") return qO(t);
}, Hc = typeof document == "object" && document.all, nt = typeof Hc > "u" && Hc !== void 0 ? function(t) {
  return typeof t == "function" || t === Hc;
} : function(t) {
  return typeof t == "function";
}, Sf = {}, GO = pt, ar = !GO(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), zO = aa, hi = Function.prototype.call, _r = zO ? hi.bind(hi) : function() {
  return hi.apply(hi, arguments);
}, xv = {}, wv = {}.propertyIsEnumerable, Ev = Object.getOwnPropertyDescriptor, KO = Ev && !wv.call({ 1: 2 }, 1);
xv.f = KO ? function(e) {
  var r = Ev(this, e);
  return !!r && r.enumerable;
} : wv;
var Es = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, WO = ht, JO = pt, YO = Ef, qc = Object, XO = WO("".split), QO = JO(function() {
  return !qc("z").propertyIsEnumerable(0);
}) ? function(t) {
  return YO(t) === "String" ? XO(t, "") : qc(t);
} : qc, $f = function(t) {
  return t == null;
}, ZO = $f, e1 = TypeError, ca = function(t) {
  if (ZO(t)) throw new e1("Can't call method on " + t);
  return t;
}, t1 = QO, r1 = ca, Ss = function(t) {
  return t1(r1(t));
}, n1 = nt, jt = function(t) {
  return typeof t == "object" ? t !== null : n1(t);
}, Of = {}, Gc = Of, zc = rt, s1 = nt, Bh = function(t) {
  return s1(t) ? t : void 0;
}, $s = function(t, e) {
  return arguments.length < 2 ? Bh(Gc[t]) || Bh(zc[t]) : Gc[t] && Gc[t][e] || zc[t] && zc[t][e];
}, i1 = ht, la = i1({}.isPrototypeOf), o1 = typeof navigator < "u" && String(navigator.userAgent) || "", Sv = rt, Kc = o1, Uh = Sv.process, Hh = Sv.Deno, qh = Uh && Uh.versions || Hh && Hh.version, Gh = qh && qh.v8, ot, Ki;
Gh && (ot = Gh.split("."), Ki = ot[0] > 0 && ot[0] < 4 ? 1 : +(ot[0] + ot[1]));
!Ki && Kc && (ot = Kc.match(/Edge\/(\d+)/), (!ot || ot[1] >= 74) && (ot = Kc.match(/Chrome\/(\d+)/), ot && (Ki = +ot[1])));
var a1 = Ki, zh = a1, c1 = pt, l1 = rt, u1 = l1.String, $v = !!Object.getOwnPropertySymbols && !c1(function() {
  var t = Symbol("symbol detection");
  return !u1(t) || !(Object(t) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && zh && zh < 41;
}), f1 = $v, Ov = f1 && !Symbol.sham && typeof Symbol.iterator == "symbol", p1 = $s, h1 = nt, d1 = la, m1 = Ov, y1 = Object, Av = m1 ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  var e = p1("Symbol");
  return h1(e) && d1(e.prototype, y1(t));
}, v1 = String, Af = function(t) {
  try {
    return v1(t);
  } catch {
    return "Object";
  }
}, g1 = nt, b1 = Af, x1 = TypeError, ua = function(t) {
  if (g1(t)) return t;
  throw new x1(b1(t) + " is not a function");
}, w1 = ua, E1 = $f, Pf = function(t, e) {
  var r = t[e];
  return E1(r) ? void 0 : w1(r);
}, Wc = _r, Jc = nt, Yc = jt, S1 = TypeError, $1 = function(t, e) {
  var r, n;
  if (e === "string" && Jc(r = t.toString) && !Yc(n = Wc(r, t)) || Jc(r = t.valueOf) && !Yc(n = Wc(r, t)) || e !== "string" && Jc(r = t.toString) && !Yc(n = Wc(r, t))) return n;
  throw new S1("Can't convert object to primitive value");
}, Pv = { exports: {} }, Kh = rt, O1 = Object.defineProperty, A1 = function(t, e) {
  try {
    O1(Kh, t, { value: e, configurable: !0, writable: !0 });
  } catch {
    Kh[t] = e;
  }
  return e;
}, P1 = rt, j1 = A1, Wh = "__core-js_shared__", Jh = Pv.exports = P1[Wh] || j1(Wh, {});
(Jh.versions || (Jh.versions = [])).push({
  version: "3.37.1",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var jv = Pv.exports, Yh = jv, Tv = function(t, e) {
  return Yh[t] || (Yh[t] = e || {});
}, T1 = ca, _1 = Object, _v = function(t) {
  return _1(T1(t));
}, R1 = ht, C1 = _v, I1 = R1({}.hasOwnProperty), Vt = Object.hasOwn || function(e, r) {
  return I1(C1(e), r);
}, F1 = ht, M1 = 0, D1 = Math.random(), N1 = F1(1 .toString), Rv = function(t) {
  return "Symbol(" + (t === void 0 ? "" : t) + ")_" + N1(++M1 + D1, 36);
}, k1 = rt, L1 = Tv, Xh = Vt, V1 = Rv, B1 = $v, U1 = Ov, en = k1.Symbol, Xc = L1("wks"), H1 = U1 ? en.for || en : en && en.withoutSetter || V1, Bt = function(t) {
  return Xh(Xc, t) || (Xc[t] = B1 && Xh(en, t) ? en[t] : H1("Symbol." + t)), Xc[t];
}, q1 = _r, Qh = jt, Zh = Av, G1 = Pf, z1 = $1, K1 = Bt, W1 = TypeError, J1 = K1("toPrimitive"), Y1 = function(t, e) {
  if (!Qh(t) || Zh(t)) return t;
  var r = G1(t, J1), n;
  if (r) {
    if (e === void 0 && (e = "default"), n = q1(r, t, e), !Qh(n) || Zh(n)) return n;
    throw new W1("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), z1(t, e);
}, X1 = Y1, Q1 = Av, Cv = function(t) {
  var e = X1(t, "string");
  return Q1(e) ? e : e + "";
}, Z1 = rt, ed = jt, Wl = Z1.document, eA = ed(Wl) && ed(Wl.createElement), Iv = function(t) {
  return eA ? Wl.createElement(t) : {};
}, tA = ar, rA = pt, nA = Iv, Fv = !tA && !rA(function() {
  return Object.defineProperty(nA("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), sA = ar, iA = _r, oA = xv, aA = Es, cA = Ss, lA = Cv, uA = Vt, fA = Fv, td = Object.getOwnPropertyDescriptor;
Sf.f = sA ? td : function(e, r) {
  if (e = cA(e), r = lA(r), fA) try {
    return td(e, r);
  } catch {
  }
  if (uA(e, r)) return aA(!iA(oA.f, e, r), e[r]);
};
var pA = pt, hA = nt, dA = /#|\.prototype\./, Os = function(t, e) {
  var r = yA[mA(t)];
  return r === gA ? !0 : r === vA ? !1 : hA(e) ? pA(e) : !!e;
}, mA = Os.normalize = function(t) {
  return String(t).replace(dA, ".").toLowerCase();
}, yA = Os.data = {}, vA = Os.NATIVE = "N", gA = Os.POLYFILL = "P", bA = Os, rd = bv, xA = ua, wA = aa, EA = rd(rd.bind), Mv = function(t, e) {
  return xA(t), e === void 0 ? t : wA ? EA(t, e) : function() {
    return t.apply(e, arguments);
  };
}, Rr = {}, SA = ar, $A = pt, Dv = SA && $A(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), OA = jt, AA = String, PA = TypeError, Cr = function(t) {
  if (OA(t)) return t;
  throw new PA(AA(t) + " is not an object");
}, jA = ar, TA = Fv, _A = Dv, di = Cr, nd = Cv, RA = TypeError, Qc = Object.defineProperty, CA = Object.getOwnPropertyDescriptor, Zc = "enumerable", el = "configurable", tl = "writable";
Rr.f = jA ? _A ? function(e, r, n) {
  if (di(e), r = nd(r), di(n), typeof e == "function" && r === "prototype" && "value" in n && tl in n && !n[tl]) {
    var s = CA(e, r);
    s && s[tl] && (e[r] = n.value, n = {
      configurable: el in n ? n[el] : s[el],
      enumerable: Zc in n ? n[Zc] : s[Zc],
      writable: !1
    });
  }
  return Qc(e, r, n);
} : Qc : function(e, r, n) {
  if (di(e), r = nd(r), di(n), TA) try {
    return Qc(e, r, n);
  } catch {
  }
  if ("get" in n || "set" in n) throw new RA("Accessors not supported");
  return "value" in n && (e[r] = n.value), e;
};
var IA = ar, FA = Rr, MA = Es, cr = IA ? function(t, e, r) {
  return FA.f(t, e, MA(1, r));
} : function(t, e, r) {
  return t[e] = r, t;
}, Gn = rt, DA = wf, NA = bv, kA = nt, LA = Sf.f, VA = bA, Gr = Of, BA = Mv, zr = cr, sd = Vt, UA = function(t) {
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
    return DA(t, this, arguments);
  };
  return e.prototype = t.prototype, e;
}, fa = function(t, e) {
  var r = t.target, n = t.global, s = t.stat, i = t.proto, o = n ? Gn : s ? Gn[r] : Gn[r] && Gn[r].prototype, a = n ? Gr : Gr[r] || zr(Gr, r, {})[r], c = a.prototype, l, f, u, h, p, m, d, y, g;
  for (h in e)
    l = VA(n ? h : r + (s ? "." : "#") + h, t.forced), f = !l && o && sd(o, h), m = a[h], f && (t.dontCallGetSet ? (g = LA(o, h), d = g && g.value) : d = o[h]), p = f && d ? d : e[h], !(!l && !i && typeof m == typeof p) && (t.bind && f ? y = BA(p, Gn) : t.wrap && f ? y = UA(p) : i && kA(p) ? y = NA(p) : y = p, (t.sham || p && p.sham || m && m.sham) && zr(y, "sham", !0), zr(a, h, y), i && (u = r + "Prototype", sd(Gr, u) || zr(Gr, u, {}), zr(Gr[u], h, p), t.real && c && (l || !c[h]) && zr(c, h, p)));
}, HA = Tv, qA = Rv, id = HA("keys"), jf = function(t) {
  return id[t] || (id[t] = qA(t));
}, GA = pt, zA = !GA(function() {
  function t() {
  }
  return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
}), KA = Vt, WA = nt, JA = _v, YA = jf, XA = zA, od = YA("IE_PROTO"), Jl = Object, QA = Jl.prototype, Tf = XA ? Jl.getPrototypeOf : function(t) {
  var e = JA(t);
  if (KA(e, od)) return e[od];
  var r = e.constructor;
  return WA(r) && e instanceof r ? r.prototype : e instanceof Jl ? QA : null;
}, ZA = ht, eP = ua, tP = function(t, e, r) {
  try {
    return ZA(eP(Object.getOwnPropertyDescriptor(t, e)[r]));
  } catch {
  }
}, rP = jt, nP = function(t) {
  return rP(t) || t === null;
}, sP = nP, iP = String, oP = TypeError, aP = function(t) {
  if (sP(t)) return t;
  throw new oP("Can't set " + iP(t) + " as a prototype");
}, cP = tP, lP = jt, uP = ca, fP = aP, _f = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t = !1, e = {}, r;
  try {
    r = cP(Object.prototype, "__proto__", "set"), r(e, []), t = e instanceof Array;
  } catch {
  }
  return function(s, i) {
    return uP(s), fP(i), lP(s) && (t ? r(s, i) : s.__proto__ = i), s;
  };
}() : void 0), Nv = {}, pP = Math.ceil, hP = Math.floor, dP = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? hP : pP)(r);
}, mP = dP, Rf = function(t) {
  var e = +t;
  return e !== e || e === 0 ? 0 : mP(e);
}, yP = Rf, vP = Math.max, gP = Math.min, bP = function(t, e) {
  var r = yP(t);
  return r < 0 ? vP(r + e, 0) : gP(r, e);
}, xP = Rf, wP = Math.min, EP = function(t) {
  var e = xP(t);
  return e > 0 ? wP(e, 9007199254740991) : 0;
}, SP = EP, kv = function(t) {
  return SP(t.length);
}, $P = Ss, OP = bP, AP = kv, ad = function(t) {
  return function(e, r, n) {
    var s = $P(e), i = AP(s);
    if (i === 0) return !t && -1;
    var o = OP(n, i), a;
    if (t && r !== r) {
      for (; i > o; )
        if (a = s[o++], a !== a) return !0;
    } else for (; i > o; o++)
      if ((t || o in s) && s[o] === r) return t || o || 0;
    return !t && -1;
  };
}, PP = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: ad(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: ad(!1)
}, Cf = {}, jP = ht, rl = Vt, TP = Ss, _P = PP.indexOf, RP = Cf, cd = jP([].push), Lv = function(t, e) {
  var r = TP(t), n = 0, s = [], i;
  for (i in r) !rl(RP, i) && rl(r, i) && cd(s, i);
  for (; e.length > n; ) rl(r, i = e[n++]) && (~_P(s, i) || cd(s, i));
  return s;
}, If = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], CP = Lv, IP = If, FP = IP.concat("length", "prototype");
Nv.f = Object.getOwnPropertyNames || function(e) {
  return CP(e, FP);
};
var Vv = {};
Vv.f = Object.getOwnPropertySymbols;
var MP = $s, DP = ht, NP = Nv, kP = Vv, LP = Cr, VP = DP([].concat), BP = MP("Reflect", "ownKeys") || function(e) {
  var r = NP.f(LP(e)), n = kP.f;
  return n ? VP(r, n(e)) : r;
}, ld = Vt, UP = BP, HP = Sf, qP = Rr, Bv = function(t, e, r) {
  for (var n = UP(e), s = qP.f, i = HP.f, o = 0; o < n.length; o++) {
    var a = n[o];
    !ld(t, a) && !(r && ld(r, a)) && s(t, a, i(e, a));
  }
}, Uv = {}, GP = Lv, zP = If, KP = Object.keys || function(e) {
  return GP(e, zP);
}, WP = ar, JP = Dv, YP = Rr, XP = Cr, QP = Ss, ZP = KP;
Uv.f = WP && !JP ? Object.defineProperties : function(e, r) {
  XP(e);
  for (var n = QP(r), s = ZP(r), i = s.length, o = 0, a; i > o; ) YP.f(e, a = s[o++], n[a]);
  return e;
};
var ej = $s, tj = ej("document", "documentElement"), rj = Cr, nj = Uv, ud = If, sj = Cf, ij = tj, oj = Iv, aj = jf, fd = ">", pd = "<", Yl = "prototype", Xl = "script", Hv = aj("IE_PROTO"), nl = function() {
}, qv = function(t) {
  return pd + Xl + fd + t + pd + "/" + Xl + fd;
}, hd = function(t) {
  t.write(qv("")), t.close();
  var e = t.parentWindow.Object;
  return t = null, e;
}, cj = function() {
  var t = oj("iframe"), e = "java" + Xl + ":", r;
  return t.style.display = "none", ij.appendChild(t), t.src = String(e), r = t.contentWindow.document, r.open(), r.write(qv("document.F=Object")), r.close(), r.F;
}, mi, Pi = function() {
  try {
    mi = new ActiveXObject("htmlfile");
  } catch {
  }
  Pi = typeof document < "u" ? document.domain && mi ? hd(mi) : cj() : hd(mi);
  for (var t = ud.length; t--; ) delete Pi[Yl][ud[t]];
  return Pi();
};
sj[Hv] = !0;
var Ff = Object.create || function(e, r) {
  var n;
  return e !== null ? (nl[Yl] = rj(e), n = new nl(), nl[Yl] = null, n[Hv] = e) : n = Pi(), r === void 0 ? n : nj.f(n, r);
}, lj = jt, uj = cr, Gv = function(t, e) {
  lj(e) && "cause" in e && uj(t, "cause", e.cause);
}, fj = ht, zv = Error, pj = fj("".replace), hj = function(t) {
  return String(new zv(t).stack);
}("zxcasd"), Kv = /\n\s*at [^:]*:[^\n]*/, dj = Kv.test(hj), mj = function(t, e) {
  if (dj && typeof t == "string" && !zv.prepareStackTrace)
    for (; e--; ) t = pj(t, Kv, "");
  return t;
}, yj = pt, vj = Es, gj = !yj(function() {
  var t = new Error("a");
  return "stack" in t ? (Object.defineProperty(t, "stack", vj(1, 7)), t.stack !== 7) : !0;
}), bj = cr, xj = mj, wj = gj, dd = Error.captureStackTrace, Wv = function(t, e, r, n) {
  wj && (dd ? dd(t, e) : bj(t, "stack", xj(r, n)));
}, Pn = {}, Ej = Bt, Sj = Pn, $j = Ej("iterator"), Oj = Array.prototype, Aj = function(t) {
  return t !== void 0 && (Sj.Array === t || Oj[$j] === t);
}, Pj = Bt, jj = Pj("toStringTag"), Jv = {};
Jv[jj] = "z";
var Mf = String(Jv) === "[object z]", Tj = Mf, _j = nt, ji = Ef, Rj = Bt, Cj = Rj("toStringTag"), Ij = Object, Fj = ji(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", Mj = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, Df = Tj ? ji : function(t) {
  var e, r, n;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (r = Mj(e = Ij(t), Cj)) == "string" ? r : Fj ? ji(e) : (n = ji(e)) === "Object" && _j(e.callee) ? "Arguments" : n;
}, Dj = Df, md = Pf, Nj = $f, kj = Pn, Lj = Bt, Vj = Lj("iterator"), Yv = function(t) {
  if (!Nj(t)) return md(t, Vj) || md(t, "@@iterator") || kj[Dj(t)];
}, Bj = _r, Uj = ua, Hj = Cr, qj = Af, Gj = Yv, zj = TypeError, Kj = function(t, e) {
  var r = arguments.length < 2 ? Gj(t) : e;
  if (Uj(r)) return Hj(Bj(r, t));
  throw new zj(qj(t) + " is not iterable");
}, Wj = _r, yd = Cr, Jj = Pf, Yj = function(t, e, r) {
  var n, s;
  yd(t);
  try {
    if (n = Jj(t, "return"), !n) {
      if (e === "throw") throw r;
      return r;
    }
    n = Wj(n, t);
  } catch (i) {
    s = !0, n = i;
  }
  if (e === "throw") throw r;
  if (s) throw n;
  return yd(n), r;
}, Xj = Mv, Qj = _r, Zj = Cr, eT = Af, tT = Aj, rT = kv, vd = la, nT = Kj, sT = Yv, gd = Yj, iT = TypeError, Ti = function(t, e) {
  this.stopped = t, this.result = e;
}, bd = Ti.prototype, oT = function(t, e, r) {
  var n = r && r.that, s = !!(r && r.AS_ENTRIES), i = !!(r && r.IS_RECORD), o = !!(r && r.IS_ITERATOR), a = !!(r && r.INTERRUPTED), c = Xj(e, n), l, f, u, h, p, m, d, y = function(v) {
    return l && gd(l, "normal", v), new Ti(!0, v);
  }, g = function(v) {
    return s ? (Zj(v), a ? c(v[0], v[1], y) : c(v[0], v[1])) : a ? c(v, y) : c(v);
  };
  if (i)
    l = t.iterator;
  else if (o)
    l = t;
  else {
    if (f = sT(t), !f) throw new iT(eT(t) + " is not iterable");
    if (tT(f)) {
      for (u = 0, h = rT(t); h > u; u++)
        if (p = g(t[u]), p && vd(bd, p)) return p;
      return new Ti(!1);
    }
    l = nT(t, f);
  }
  for (m = i ? t.next : l.next; !(d = Qj(m, l)).done; ) {
    try {
      p = g(d.value);
    } catch (v) {
      gd(l, "throw", v);
    }
    if (typeof p == "object" && p && vd(bd, p)) return p;
  }
  return new Ti(!1);
}, aT = Df, cT = String, Nf = function(t) {
  if (aT(t) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return cT(t);
}, lT = Nf, Xv = function(t, e) {
  return t === void 0 ? arguments.length < 2 ? "" : e : lT(t);
}, uT = fa, fT = la, pT = Tf, Wi = _f, hT = Bv, Qv = Ff, sl = cr, il = Es, dT = Gv, mT = Wv, yT = oT, vT = Xv, gT = Bt, bT = gT("toStringTag"), Ji = Error, xT = [].push, dn = function(e, r) {
  var n = fT(ol, this), s;
  Wi ? s = Wi(new Ji(), n ? pT(this) : ol) : (s = n ? this : Qv(ol), sl(s, bT, "Error")), r !== void 0 && sl(s, "message", vT(r)), mT(s, dn, s.stack, 1), arguments.length > 2 && dT(s, arguments[2]);
  var i = [];
  return yT(e, xT, { that: i }), sl(s, "errors", i), s;
};
Wi ? Wi(dn, Ji) : hT(dn, Ji, { name: !0 });
var ol = dn.prototype = Qv(Ji.prototype, {
  constructor: il(1, dn),
  message: il(1, ""),
  name: il(1, "AggregateError")
});
uT({ global: !0, constructor: !0, arity: 2 }, {
  AggregateError: dn
});
var wT = Rr.f, ET = function(t, e, r) {
  r in t || wT(t, r, {
    configurable: !0,
    get: function() {
      return e[r];
    },
    set: function(n) {
      e[r] = n;
    }
  });
}, ST = nt, $T = jt, xd = _f, OT = function(t, e, r) {
  var n, s;
  return (
    // it can work only with native `setPrototypeOf`
    xd && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    ST(n = e.constructor) && n !== r && $T(s = n.prototype) && s !== r.prototype && xd(t, s), t
  );
}, wd = $s, AT = cr, PT = la, Ed = _f, Sd = Bv, $d = ET, jT = OT, TT = Xv, _T = Gv, RT = Wv, CT = ar, Zv = function(t, e, r, n) {
  var s = "stackTraceLimit", i = n ? 2 : 1, o = t.split("."), a = o[o.length - 1], c = wd.apply(null, o);
  if (c) {
    var l = c.prototype;
    if (!r) return c;
    var f = wd("Error"), u = e(function(h, p) {
      var m = TT(n ? p : h, void 0), d = n ? new c(h) : new c();
      return m !== void 0 && AT(d, "message", m), RT(d, u, d.stack, 2), this && PT(l, this) && jT(d, this, u), arguments.length > i && _T(d, arguments[i]), d;
    });
    return u.prototype = l, a !== "Error" ? Ed ? Ed(u, f) : Sd(u, f, { name: !0 }) : CT && s in c && ($d(u, c, s), $d(u, c, "prepareStackTrace")), Sd(u, c), u;
  }
}, eg = fa, IT = rt, Tt = wf, tg = Zv, Ql = "WebAssembly", Od = IT[Ql], Yi = new Error("e", { cause: 7 }).cause !== 7, Ir = function(t, e) {
  var r = {};
  r[t] = tg(t, e, Yi), eg({ global: !0, constructor: !0, arity: 1, forced: Yi }, r);
}, kf = function(t, e) {
  if (Od && Od[t]) {
    var r = {};
    r[t] = tg(Ql + "." + t, e, Yi), eg({ target: Ql, stat: !0, constructor: !0, arity: 1, forced: Yi }, r);
  }
};
Ir("Error", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Ir("EvalError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Ir("RangeError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Ir("ReferenceError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Ir("SyntaxError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Ir("TypeError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
Ir("URIError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
kf("CompileError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
kf("LinkError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
kf("RuntimeError", function(t) {
  return function(r) {
    return Tt(t, this, arguments);
  };
});
var FT = fa, MT = $s, DT = wf, Ad = pt, NT = Zv, Lf = "AggregateError", Pd = MT(Lf), jd = !Ad(function() {
  return Pd([1]).errors[0] !== 1;
}) && Ad(function() {
  return Pd([1], Lf, { cause: 7 }).cause !== 7;
});
FT({ global: !0, constructor: !0, arity: 2, forced: jd }, {
  AggregateError: NT(Lf, function(t) {
    return function(r, n) {
      return DT(t, this, arguments);
    };
  }, jd, !0)
});
var kT = rt, LT = nt, Td = kT.WeakMap, VT = LT(Td) && /native code/.test(String(Td)), BT = VT, rg = rt, UT = jt, HT = cr, al = Vt, cl = jv, qT = jf, GT = Cf, _d = "Object already initialized", Zl = rg.TypeError, zT = rg.WeakMap, Xi, fs, Qi, KT = function(t) {
  return Qi(t) ? fs(t) : Xi(t, {});
}, WT = function(t) {
  return function(e) {
    var r;
    if (!UT(e) || (r = fs(e)).type !== t)
      throw new Zl("Incompatible receiver, " + t + " required");
    return r;
  };
};
if (BT || cl.state) {
  var yt = cl.state || (cl.state = new zT());
  yt.get = yt.get, yt.has = yt.has, yt.set = yt.set, Xi = function(t, e) {
    if (yt.has(t)) throw new Zl(_d);
    return e.facade = t, yt.set(t, e), e;
  }, fs = function(t) {
    return yt.get(t) || {};
  }, Qi = function(t) {
    return yt.has(t);
  };
} else {
  var Kr = qT("state");
  GT[Kr] = !0, Xi = function(t, e) {
    if (al(t, Kr)) throw new Zl(_d);
    return e.facade = t, HT(t, Kr, e), e;
  }, fs = function(t) {
    return al(t, Kr) ? t[Kr] : {};
  }, Qi = function(t) {
    return al(t, Kr);
  };
}
var ng = {
  set: Xi,
  get: fs,
  has: Qi,
  enforce: KT,
  getterFor: WT
}, eu = ar, JT = Vt, sg = Function.prototype, YT = eu && Object.getOwnPropertyDescriptor, Vf = JT(sg, "name"), XT = Vf && (function() {
}).name === "something", QT = Vf && (!eu || eu && YT(sg, "name").configurable), ZT = {
  EXISTS: Vf,
  PROPER: XT,
  CONFIGURABLE: QT
}, e_ = cr, ig = function(t, e, r, n) {
  return n && n.enumerable ? t[e] = r : e_(t, e, r), t;
}, t_ = pt, r_ = nt, n_ = jt, s_ = Ff, Rd = Tf, i_ = ig, o_ = Bt, tu = o_("iterator"), og = !1, Ct, ll, ul;
[].keys && (ul = [].keys(), "next" in ul ? (ll = Rd(Rd(ul)), ll !== Object.prototype && (Ct = ll)) : og = !0);
var a_ = !n_(Ct) || t_(function() {
  var t = {};
  return Ct[tu].call(t) !== t;
});
a_ ? Ct = {} : Ct = s_(Ct);
r_(Ct[tu]) || i_(Ct, tu, function() {
  return this;
});
var ag = {
  IteratorPrototype: Ct,
  BUGGY_SAFARI_ITERATORS: og
}, c_ = Mf, l_ = Df, u_ = c_ ? {}.toString : function() {
  return "[object " + l_(this) + "]";
}, f_ = Mf, p_ = Rr.f, h_ = cr, d_ = Vt, m_ = u_, y_ = Bt, Cd = y_("toStringTag"), Bf = function(t, e, r, n) {
  var s = r ? t : t && t.prototype;
  s && (d_(s, Cd) || p_(s, Cd, { configurable: !0, value: e }), n && !f_ && h_(s, "toString", m_));
}, v_ = ag.IteratorPrototype, g_ = Ff, b_ = Es, x_ = Bf, w_ = Pn, E_ = function() {
  return this;
}, S_ = function(t, e, r, n) {
  var s = e + " Iterator";
  return t.prototype = g_(v_, { next: b_(+!n, r) }), x_(t, s, !1, !0), w_[s] = E_, t;
}, $_ = fa, O_ = _r, cg = ZT, A_ = S_, P_ = Tf, j_ = Bf, Id = ig, T_ = Bt, Fd = Pn, lg = ag, __ = cg.PROPER;
cg.CONFIGURABLE;
lg.IteratorPrototype;
var yi = lg.BUGGY_SAFARI_ITERATORS, fl = T_("iterator"), Md = "keys", vi = "values", Dd = "entries", R_ = function() {
  return this;
}, ug = function(t, e, r, n, s, i, o) {
  A_(r, e, n);
  var a = function(g) {
    if (g === s && h) return h;
    if (!yi && g && g in f) return f[g];
    switch (g) {
      case Md:
        return function() {
          return new r(this, g);
        };
      case vi:
        return function() {
          return new r(this, g);
        };
      case Dd:
        return function() {
          return new r(this, g);
        };
    }
    return function() {
      return new r(this);
    };
  }, c = e + " Iterator", l = !1, f = t.prototype, u = f[fl] || f["@@iterator"] || s && f[s], h = !yi && u || a(s), p = e === "Array" && f.entries || u, m, d, y;
  if (p && (m = P_(p.call(new t())), m !== Object.prototype && m.next && (j_(m, c, !0, !0), Fd[c] = R_)), __ && s === vi && u && u.name !== vi && (l = !0, h = function() {
    return O_(u, this);
  }), s)
    if (d = {
      values: a(vi),
      keys: i ? h : a(Md),
      entries: a(Dd)
    }, o) for (y in d)
      (yi || l || !(y in f)) && Id(f, y, d[y]);
    else $_({ target: e, proto: !0, forced: yi || l }, d);
  return o && f[fl] !== h && Id(f, fl, h, { name: s }), Fd[e] = h, d;
}, fg = function(t, e) {
  return { value: t, done: e };
}, C_ = Ss, Nd = Pn, pg = ng;
Rr.f;
var I_ = ug, gi = fg, hg = "Array Iterator", F_ = pg.set, M_ = pg.getterFor(hg);
I_(Array, "Array", function(t, e) {
  F_(this, {
    type: hg,
    target: C_(t),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var t = M_(this), e = t.target, r = t.index++;
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
var Uf = ht, D_ = Rf, N_ = Nf, k_ = ca, L_ = Uf("".charAt), kd = Uf("".charCodeAt), V_ = Uf("".slice), Ld = function(t) {
  return function(e, r) {
    var n = N_(k_(e)), s = D_(r), i = n.length, o, a;
    return s < 0 || s >= i ? t ? "" : void 0 : (o = kd(n, s), o < 55296 || o > 56319 || s + 1 === i || (a = kd(n, s + 1)) < 56320 || a > 57343 ? t ? L_(n, s) : o : t ? V_(n, s, s + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
  };
}, B_ = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Ld(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Ld(!0)
}, U_ = B_.charAt, H_ = Nf, dg = ng, q_ = ug, Vd = fg, mg = "String Iterator", G_ = dg.set, z_ = dg.getterFor(mg);
q_(String, "String", function(t) {
  G_(this, {
    type: mg,
    string: H_(t),
    index: 0
  });
}, function() {
  var e = z_(this), r = e.string, n = e.index, s;
  return n >= r.length ? Vd(void 0, !0) : (s = U_(r, n), e.index += s.length, Vd(s, !1));
});
var K_ = Of, W_ = K_.AggregateError, J_ = {
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
}, Y_ = J_, X_ = rt, Q_ = Bf, Bd = Pn;
for (var pl in Y_)
  Q_(X_[pl], pl), Bd[pl] = Bd.Array;
var Z_ = W_, eR = Z_, tR = eR, rR = tR, nR = rR, sR = nR, iR = sR, oR = iR;
const aR = /* @__PURE__ */ $n(oR);
class cR extends aR {
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
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(cR, e);
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
class Re extends me {
}
class hl extends Re {
}
var Hf = function() {
  return !1;
}, Ut = function() {
  return !0;
};
function pe(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function ie(t) {
  return function e(r) {
    return arguments.length === 0 || pe(r) ? e : t.apply(this, arguments);
  };
}
function G(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return pe(r) ? e : ie(function(s) {
          return t(r, s);
        });
      default:
        return pe(r) && pe(n) ? e : pe(r) ? ie(function(s) {
          return t(s, n);
        }) : pe(n) ? ie(function(s) {
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
function pa(t, e) {
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
function qf(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!pe(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, pe(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : pa(Math.max(0, i), qf(t, n, r));
  };
}
var ue = /* @__PURE__ */ G(function(e, r) {
  return e === 1 ? ie(r) : pa(e, qf(e, [], r));
});
function Ke(t) {
  return function e(r, n, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return pe(r) ? e : G(function(i, o) {
          return t(r, i, o);
        });
      case 2:
        return pe(r) && pe(n) ? e : pe(r) ? G(function(i, o) {
          return t(i, n, o);
        }) : pe(n) ? G(function(i, o) {
          return t(r, i, o);
        }) : ie(function(i) {
          return t(r, n, i);
        });
      default:
        return pe(r) && pe(n) && pe(s) ? e : pe(r) && pe(n) ? G(function(i, o) {
          return t(i, o, s);
        }) : pe(r) && pe(s) ? G(function(i, o) {
          return t(i, n, o);
        }) : pe(n) && pe(s) ? G(function(i, o) {
          return t(r, i, o);
        }) : pe(r) ? ie(function(i) {
          return t(i, n, s);
        }) : pe(n) ? ie(function(i) {
          return t(r, i, s);
        }) : pe(s) ? ie(function(i) {
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
function ha(t) {
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
var fR = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = ha(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
}();
function pR(t) {
  return function(e) {
    return new fR(t, e);
  };
}
var Gf = /* @__PURE__ */ G(/* @__PURE__ */ lr(["all"], pR, function(e, r) {
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
var Hd = Object.prototype.toString, yg = /* @__PURE__ */ function() {
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
  var r, n, s = [], i = Gd && yg(e);
  for (r in e)
    Ze(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (mR)
    for (n = qd.length - 1; n >= 0; )
      r = qd[n], Ze(r, e) && !yR(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), et = /* @__PURE__ */ ie(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function zd(t, e, r, n) {
  var s = Ud(t), i = Ud(e);
  function o(a, c) {
    return zf(a, c, r.slice(), n.slice());
  }
  return !Zi(function(a, c) {
    return !Zi(o, c, a);
  }, i, s);
}
function zf(t, e, r, n) {
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
    if (!(Ze(l, e) && zf(e[l], t[l], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Ht = /* @__PURE__ */ G(function(e, r) {
  return zf(e, r, [], []);
});
function vR(t, e, r) {
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
  return vR(e, t, 0) >= 0;
}
function es(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function dl(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var zn = function(e) {
  return (e < 10 ? "0" : "") + e;
}, gR = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + zn(e.getUTCMonth() + 1) + "-" + zn(e.getUTCDate()) + "T" + zn(e.getUTCHours()) + ":" + zn(e.getUTCMinutes()) + ":" + zn(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function vg(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function Ps(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function bR(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function to(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var xR = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = Je.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function wR(t) {
  return function(e) {
    return new xR(t, e);
  };
}
var ER = /* @__PURE__ */ G(/* @__PURE__ */ lr(["fantasy-land/filter", "filter"], wR, function(t, e) {
  return to(e) ? Ps(function(r, n) {
    return t(e[n]) && (r[n] = e[n]), r;
  }, {}, Pr(e)) : (
    // else
    bR(t, e)
  );
})), SR = /* @__PURE__ */ G(function(e, r) {
  return ER(vg(e), r);
});
function gg(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return eo(o, a) ? "<Circular>" : gg(o, a);
  }, n = function(i, o) {
    return es(function(a) {
      return dl(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + es(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + es(r, t).concat(n(t, SR(function(i) {
        return /^\d+$/.test(i);
      }, Pr(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : dl(gR(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : dl(t);
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
var mn = /* @__PURE__ */ ie(function(e) {
  return gg(e, []);
}), Kf = /* @__PURE__ */ G(function(e, r) {
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
  var o = mn(e), a = n(o, mn(r));
  return a !== void 0 && a === o ? e : r;
}), $R = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = Je.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), OR = function(e) {
  return function(r) {
    return new $R(e, r);
  };
}, js = /* @__PURE__ */ G(/* @__PURE__ */ lr(["fantasy-land/map", "map"], OR, function(e, r) {
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
const da = Number.isInteger || function(e) {
  return e << 0 === e;
};
function Wf(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function ma(t, e) {
  var r = t < 0 ? e.length + t : t;
  return Wf(e) ? e.charAt(r) : e[r];
}
var Ts = /* @__PURE__ */ G(function(e, r) {
  if (r != null)
    return da(e) ? ma(e, r) : r[e];
}), Jf = /* @__PURE__ */ G(function(e, r) {
  return js(Ts(e), r);
}), AR = /* @__PURE__ */ ie(function(e) {
  return As(e) ? !0 : !e || typeof e != "object" || Wf(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), Kd = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function bg(t, e, r) {
  return function(s, i, o) {
    if (AR(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[Kd] != null)
      return r(s, i, o[Kd]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function PR(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var ya = /* @__PURE__ */ G(function(e, r) {
  return pa(e.length, function() {
    return e.apply(r, arguments);
  });
});
function jR(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function TR(t, e, r, n) {
  return t["@@transducer/result"](r[n](ya(t["@@transducer/step"], t), e));
}
var Yf = /* @__PURE__ */ bg(PR, TR, jR), _R = /* @__PURE__ */ function() {
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
function xg(t) {
  return new _R(t);
}
var Fr = /* @__PURE__ */ Ke(function(t, e, r) {
  return Yf(typeof t == "function" ? xg(t) : t, e, r);
}), RR = /* @__PURE__ */ ie(function(e) {
  return ue(Fr(Kf, 0, Jf("length", e)), function() {
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
}), CR = /* @__PURE__ */ G(function(e, r) {
  return e && r;
}), IR = /* @__PURE__ */ ie(function(e) {
  return ue(Fr(Kf, 0, Jf("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function FR(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function MR(t, e, r, n) {
  return r[n](t, e);
}
var DR = /* @__PURE__ */ bg(Ps, MR, FR), NR = /* @__PURE__ */ G(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : DR(function(n, s) {
    return lR(n, js(s, r));
  }, [], e);
}), kR = /* @__PURE__ */ G(function(e, r) {
  return e.apply(this, r);
}), Xf = /* @__PURE__ */ ie(function(e) {
  return ue(e.length, e);
});
function LR(t, e, r) {
  if (da(t) && As(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var ro = /* @__PURE__ */ ie(function(e) {
  return e == null;
}), VR = /* @__PURE__ */ Ke(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !ro(n) && Ze(s, n) && typeof n[s] == "object" ? n[s] : da(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return LR(s, r, n);
});
function Qf(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var BR = /* @__PURE__ */ G(function(e, r) {
  var n = ue(e, r);
  return ue(e, function() {
    return Ps(NR, js(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), Zf = /* @__PURE__ */ ie(function(e) {
  return BR(e.length, e);
}), Mr = /* @__PURE__ */ G(function(e, r) {
  return Qf(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : Zf(CR)(e, r);
});
function wg(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function Eg(t, e, r) {
  if (r || (r = new HR()), UR(t))
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
  switch (et(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n(Array(t.length));
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return wg(t);
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
function UR(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var HR = /* @__PURE__ */ function() {
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
}(), qR = /* @__PURE__ */ ie(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), GR = /* @__PURE__ */ ie(function(e) {
  return !e;
}), _s = /* @__PURE__ */ Zf(GR);
function zR(t, e) {
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
var Rs = /* @__PURE__ */ Ke(/* @__PURE__ */ ep("slice", function(e, r, n) {
  return Array.prototype.slice.call(n, e, r);
})), Sg = /* @__PURE__ */ ie(/* @__PURE__ */ ep("tail", /* @__PURE__ */ Rs(1, 1 / 0)));
function Fe() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return pa(arguments[0].length, Fr(zR, arguments[0], Sg(arguments)));
}
var KR = /* @__PURE__ */ ie(function(t) {
  return ma(0, t);
});
function WR(t) {
  return t;
}
var $g = /* @__PURE__ */ ie(WR), JR = /* @__PURE__ */ G(function(e, r) {
  return ue(Fr(Kf, 0, Jf("length", r)), function() {
    var n = arguments, s = this;
    return e.apply(s, es(function(i) {
      return i.apply(s, n);
    }, r));
  });
}), YR = /* @__PURE__ */ function() {
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
    return this.inputs[n] = this.inputs[n] || [n, Eg(this.valueAcc)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function XR(t, e, r) {
  return function(n) {
    return new YR(t, e, r, n);
  };
}
var QR = /* @__PURE__ */ qf(4, [], /* @__PURE__ */ lr([], XR, function(e, r, n, s) {
  var i = xg(function(o, a) {
    var c = n(a), l = e(Ze(c, o) ? o[c] : Eg(r), a);
    return l && l["@@transducer/reduced"] ? ha(o) : (o[c] = l, o);
  });
  return Yf(i, {}, s);
})), yn = /* @__PURE__ */ G(function(e, r) {
  return r == null || r !== r ? e : r;
}), ZR = /* @__PURE__ */ function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !Wd(e, !0, this);
  }, t.prototype.has = function(e) {
    return Wd(e, !1, this);
  }, t;
}();
function Wd(t, e, r) {
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
var eC = /* @__PURE__ */ G(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new ZR(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), tC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = Je.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? ha(n) : n;
  }, t;
}();
function rC(t) {
  return function(e) {
    return new tC(t, e);
  };
}
var nC = /* @__PURE__ */ G(/* @__PURE__ */ lr(["take"], rC, function(e, r) {
  return Rs(0, e < 0 ? 1 / 0 : e, r);
}));
function sC(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return Rs(0, r + 1, e);
}
var iC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = Yf(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
}();
function oC(t) {
  return function(e) {
    return new iC(t, e);
  };
}
var aC = /* @__PURE__ */ G(/* @__PURE__ */ lr([], oC, sC)), va = /* @__PURE__ */ ie(function(t) {
  return ma(-1, t);
}), cC = /* @__PURE__ */ function() {
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
function lC(t) {
  return function(e) {
    return new cC(t, e);
  };
}
var uC = /* @__PURE__ */ G(/* @__PURE__ */ lr(["dropWhile"], lC, function(e, r) {
  for (var n = 0, s = r.length; n < s && e(r[n]); )
    n += 1;
  return Rs(n, 1 / 0, r);
})), fC = /* @__PURE__ */ G(function(e, r) {
  return e || r;
}), pC = /* @__PURE__ */ G(function(e, r) {
  return Qf(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : Zf(fC)(e, r);
});
function hC(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var dC = /* @__PURE__ */ ie(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : As(e) ? [] : Wf(e) ? "" : to(e) ? {} : yg(e) ? /* @__PURE__ */ function() {
    return arguments;
  }() : hC(e) ? e.constructor.from("") : void 0;
}), mC = /* @__PURE__ */ ie(function(e) {
  return ue(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), yC = /* @__PURE__ */ G(/* @__PURE__ */ ep("groupBy", /* @__PURE__ */ QR(function(t, e) {
  return t.push(e), t;
}, []))), vC = /* @__PURE__ */ G(function(e, r) {
  if (e.length === 0 || ro(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!ro(n) && Ze(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), Og = /* @__PURE__ */ G(function(e, r) {
  return vC([e], r);
}), qt = function(t, e) {
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
}, tp = /* @__PURE__ */ Ke(function(e, r, n) {
  return ue(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), gC = /* @__PURE__ */ G(eo), bC = /* @__PURE__ */ Rs(0, -1), rp = /* @__PURE__ */ G(function(e, r) {
  return ue(e + 1, function() {
    var n = arguments[e];
    if (n != null && Qf(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(mn(n) + ' does not have a method named "' + r + '"');
  });
}), Cs = /* @__PURE__ */ ie(function(e) {
  return e != null && Ht(e, dC(e));
}), Ag = /* @__PURE__ */ ie(function(e) {
  return !Cs(e);
}), Pg = /* @__PURE__ */ rp(1, "join");
function Jd(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var xC = /* @__PURE__ */ G(function(e, r) {
  return function(n) {
    return function(s) {
      return js(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
function np(t, e) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    var s = t[n];
    da(s) ? r = ma(s, r) : r = r[s];
  }
  return r;
}
var wC = /* @__PURE__ */ G(function(e, r) {
  return Ps(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, Pr(r));
}), EC = /* @__PURE__ */ Ke(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    Ze(i, r) && (s[i] = Ze(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    Ze(i, n) && !Ze(i, s) && (s[i] = n[i]);
  return s;
}), SC = /* @__PURE__ */ Ke(function t(e, r, n) {
  return EC(function(s, i, o) {
    return to(i) && to(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), sp = /* @__PURE__ */ G(function(e, r) {
  return SC(function(n, s, i) {
    return i;
  }, e, r);
}), $C = /* @__PURE__ */ G(function(e, r) {
  return Gf(vg(e), r);
}), jg = function(t) {
  return {
    value: t,
    map: function(e) {
      return jg(e(t));
    }
  };
}, OC = /* @__PURE__ */ Ke(function(e, r, n) {
  return e(function(s) {
    return jg(r(s));
  })(n).value;
}), ze = /* @__PURE__ */ G(np), Tg = /* @__PURE__ */ Ke(function(e, r, n) {
  return yn(e, np(r, n));
}), ga = /* @__PURE__ */ Ke(function(e, r, n) {
  return e(np(r, n));
}), _g = /* @__PURE__ */ G(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), Rg = /* @__PURE__ */ Ke(function(e, r, n) {
  return Ht(e, Ts(r, n));
}), no = /* @__PURE__ */ Ke(function(e, r, n) {
  return yn(e, Ts(r, n));
}), AC = /* @__PURE__ */ Ke(function(e, r, n) {
  return e(Ts(r, n));
}), PC = /* @__PURE__ */ G(function(e, r) {
  if (!(Jd(e) && Jd(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = Array(e < r ? r - e : 0), s = e < 0 ? r + Math.abs(e) : r - e, i = 0; i < s; )
    n[i] = i + e, i += 1;
  return n;
}), jC = /* @__PURE__ */ ie(ha), vn = /* @__PURE__ */ Ke(function(e, r, n) {
  return n.replace(e, r);
}), TC = /* @__PURE__ */ G(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), ip = /* @__PURE__ */ rp(1, "split"), Cg = /* @__PURE__ */ G(function(t, e) {
  return Ht(nC(t.length, e), t);
});
function _C(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var RC = /* @__PURE__ */ G(function(e, r) {
  if (!_C(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + mn(e));
  return wg(e).test(r);
}), CC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = Je.init, t.prototype["@@transducer/result"] = Je.result, t.prototype["@@transducer/step"] = function(e, r) {
    return Zi(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
}();
function IC(t) {
  return function(e) {
    return new CC(t, e);
  };
}
var FC = /* @__PURE__ */ G(/* @__PURE__ */ lr([], IC, function(t, e) {
  for (var r = 0, n = e.length, s = [], i; r < n; )
    i = e[r], Zi(t, i, s) || (s[s.length] = i), r += 1;
  return s;
})), MC = /* @__PURE__ */ Ke(function(e, r, n) {
  return e(n) ? r(n) : n;
}), ba = U(void 0), ur = Ht(ba()), Ig = _s(ur), Fg = Ht(null), Mg = _s(Fg), DC = _s(ro), NC = ue(1, Fe(et, qt("GeneratorFunction"))), kC = ue(1, Fe(et, qt("AsyncFunction"))), Gt = IR([Fe(et, qt("Function")), NC, kC]), Dg = ue(1, Gt(Array.isArray) ? Array.isArray : Fe(et, qt("Array"))), LC = Mr(Dg, Cs), VC = Mr(Dg, Ag), Dr = ue(1, Fe(et, qt("String"))), Ng = Ht("");
function ru(t) {
  "@babel/helpers - typeof";
  return ru = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ru(t);
}
var kg = function(e) {
  return ru(e) === "object";
}, BC = ue(1, Mr(Mg, pC(kg, Gt))), UC = _s(BC), op = RR([Dr, UC, Ag]), HC = _s(Gt), qC = ue(1, Mr(Mg, kg)), GC = Fe(et, qt("Object")), zC = Fe(mn, Ht(mn(Object))), KC = ga(Mr(Gt, zC), ["constructor"]), gn = ue(1, function(t) {
  if (!qC(t) || !GC(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return Fg(e) ? !0 : KC(e);
}), WC = ue(1, Fe(et, qt("Number"))), JC = Mr(WC, isFinite), YC = ue(1, JC), XC = Gt(Number.isFinite) ? ue(1, ya(Number.isFinite, Number)) : YC, QC = Mr(XC, JR(Ht, [Math.floor, $g])), ZC = ue(1, QC), eI = Gt(Number.isInteger) ? ue(1, ya(Number.isInteger, Number)) : ZC, tI = ue(1, Fe(et, qt("RegExp")));
function rI(t) {
  return oI(t) || iI(t) || sI(t) || nI();
}
function nI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sI(t, e) {
  if (t) {
    if (typeof t == "string") return nu(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? nu(t, e) : void 0;
  }
}
function iI(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function oI(t) {
  if (Array.isArray(t)) return nu(t);
}
function nu(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var aI = qR(function(t, e) {
  return t.length > e.length;
}), cI = Fe(TC(aI), KR, Ts("length")), lI = Xf(function(t, e, r) {
  var n = r.apply(void 0, rI(t));
  return DC(n) ? jC(n) : e;
}), uI = function(e) {
  var r = cI(e);
  return ue(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return Fr(lI(s), void 0, e);
  });
}, Lg = tp(VC, uI, ba), xa = mC(gC), ps = ue(3, function(t, e, r) {
  var n = ze(t, r), s = ze(bC(t), r);
  if (!HC(n) && !LC(t)) {
    var i = ya(n, s);
    return kR(i, e);
  }
}), fI = MC(Dr, vn(/[.*+?^${}()|[\]\\-]/g, "\\$&")), pI = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, Yd = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, hI = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, dI = function(e, r, n) {
  pI(e, r, n), Yd(n, "str"), Yd(r, "replaceValue"), hI(e);
  var s = new RegExp(tI(e) ? e : fI(e), "g");
  return vn(s, r, n);
}, mI = ue(3, dI), yI = rp(2, "replaceAll"), vI = Gt(String.prototype.replaceAll) ? yI : mI, gI = Xf(function(t, e) {
  return Fe(ip(""), aC(xa(t)), Pg(""))(e);
}), ap = Xf(function(t, e) {
  return Fe(ip(""), uC(xa(t)), Pg(""))(e);
}), Vg = { exports: {} }, xe = Vg.exports = {}, bt, xt;
function su() {
  throw new Error("setTimeout has not been defined");
}
function iu() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? bt = setTimeout : bt = su;
  } catch {
    bt = su;
  }
  try {
    typeof clearTimeout == "function" ? xt = clearTimeout : xt = iu;
  } catch {
    xt = iu;
  }
})();
function Bg(t) {
  if (bt === setTimeout)
    return setTimeout(t, 0);
  if ((bt === su || !bt) && setTimeout)
    return bt = setTimeout, setTimeout(t, 0);
  try {
    return bt(t, 0);
  } catch {
    try {
      return bt.call(null, t, 0);
    } catch {
      return bt.call(this, t, 0);
    }
  }
}
function bI(t) {
  if (xt === clearTimeout)
    return clearTimeout(t);
  if ((xt === iu || !xt) && clearTimeout)
    return xt = clearTimeout, clearTimeout(t);
  try {
    return xt(t);
  } catch {
    try {
      return xt.call(null, t);
    } catch {
      return xt.call(this, t);
    }
  }
}
var _t = [], rn = !1, br, _i = -1;
function xI() {
  !rn || !br || (rn = !1, br.length ? _t = br.concat(_t) : _i = -1, _t.length && Ug());
}
function Ug() {
  if (!rn) {
    var t = Bg(xI);
    rn = !0;
    for (var e = _t.length; e; ) {
      for (br = _t, _t = []; ++_i < e; )
        br && br[_i].run();
      _i = -1, e = _t.length;
    }
    br = null, rn = !1, bI(t);
  }
}
xe.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  _t.push(new Hg(t, e)), _t.length === 1 && !rn && Bg(Ug);
};
function Hg(t, e) {
  this.fun = t, this.array = e;
}
Hg.prototype.run = function() {
  this.fun.apply(null, this.array);
};
xe.title = "browser";
xe.browser = !0;
xe.env = {};
xe.argv = [];
xe.version = "";
xe.versions = {};
function zt() {
}
xe.on = zt;
xe.addListener = zt;
xe.once = zt;
xe.off = zt;
xe.removeListener = zt;
xe.removeAllListeners = zt;
xe.emit = zt;
xe.prependListener = zt;
xe.prependOnceListener = zt;
xe.listeners = function(t) {
  return [];
};
xe.binding = function(t) {
  throw new Error("process.binding is not supported");
};
xe.cwd = function() {
  return "/";
};
xe.chdir = function(t) {
  throw new Error("process.chdir is not supported");
};
xe.umask = function() {
  return 0;
};
var wI = Vg.exports;
const so = /* @__PURE__ */ $n(wI), cp = () => ga(RC(/^win/), ["platform"], so), wa = (t) => {
  try {
    const e = new URL(t);
    return gI(":", e.protocol);
  } catch {
    return;
  }
}, EI = Fe(wa, Ig), qg = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, lp = (t) => {
  if (so.browser)
    return !1;
  const e = wa(t);
  return ur(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, Ea = (t) => {
  const e = wa(t);
  return e === "http" || e === "https";
}, SI = (t) => {
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
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = vI("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, Gg = (t) => {
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
  const t = so.cwd(), e = va(t);
  return ["/", "\\"].includes(e) ? t : t + (cp() ? "\\" : "/");
}, je = (t, e) => {
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
    return Gg(up(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, at = (t) => lp(t) ? up(t) : decodeURI(t), $I = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: io,
  fromFileSystemPath: Gg,
  getExtension: qg,
  getHash: fp,
  getProtocol: wa,
  hasProtocol: EI,
  isFileSystemPath: lp,
  isHttpUrl: Ea,
  isURI: SI,
  resolve: je,
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
    return Dr(this.uri) ? qg(this.uri) : "";
  }
  toString() {
    return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(et(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
  }
};
class bn {
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
    return Ig(this.find((n) => n.uri === r));
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
const zg = {
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
    circularReplacer: $g,
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
}, OI = xC(ze(["resolve", "baseURI"]), VR(["resolve", "baseURI"])), AI = (t) => Ng(t) ? io() : t, Kg = (t, e) => {
  const r = sp(t, e);
  return OC(OI, AI, r);
};
class PI extends me {
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
      n = new PI("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class ou extends me {
}
class dp extends me {
}
class Wg extends dp {
}
class Jg extends Wg {
}
const jI = async (t, e) => {
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
}, TI = async (t, e) => {
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
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new ou(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new ou(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, _I = async (t, e) => {
  const r = new hs({
    uri: Is(oe(t)),
    mediaType: e.parse.mediaType
  }), n = await jI(r, e);
  return TI(new hs({
    ...r,
    data: n
  }), e);
};
function RI(t) {
  return t === null;
}
var CI = RI, II = typeof Et == "object" && Et && Et.Object === Object && Et, Yg = II, FI = Yg, MI = typeof self == "object" && self && self.Object === Object && self, DI = FI || MI || Function("return this")(), Kt = DI, NI = Kt, kI = NI.Symbol, mp = kI, Xd = mp, Xg = Object.prototype, LI = Xg.hasOwnProperty, VI = Xg.toString, Kn = Xd ? Xd.toStringTag : void 0;
function BI(t) {
  var e = LI.call(t, Kn), r = t[Kn];
  try {
    t[Kn] = void 0;
    var n = !0;
  } catch {
  }
  var s = VI.call(t);
  return n && (e ? t[Kn] = r : delete t[Kn]), s;
}
var UI = BI, HI = Object.prototype, qI = HI.toString;
function GI(t) {
  return qI.call(t);
}
var zI = GI, Qd = mp, KI = UI, WI = zI, JI = "[object Null]", YI = "[object Undefined]", Zd = Qd ? Qd.toStringTag : void 0;
function XI(t) {
  return t == null ? t === void 0 ? YI : JI : Zd && Zd in Object(t) ? KI(t) : WI(t);
}
var Nr = XI, QI = Array.isArray, Sa = QI;
function ZI(t) {
  return t != null && typeof t == "object";
}
var kr = ZI, eF = Nr, tF = Sa, rF = kr, nF = "[object String]";
function sF(t) {
  return typeof t == "string" || !tF(t) && rF(t) && eF(t) == nF;
}
var iF = sF, oF = Nr, aF = kr, cF = "[object Number]";
function lF(t) {
  return typeof t == "number" || aF(t) && oF(t) == cF;
}
var uF = lF, fF = Nr, pF = kr, hF = "[object Boolean]";
function dF(t) {
  return t === !0 || t === !1 || pF(t) && fF(t) == hF;
}
var mF = dF;
function yF(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var $a = yF;
let vF = class {
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
var gF = vF;
function bF() {
  this.__data__ = [], this.size = 0;
}
var xF = bF;
function wF(t, e) {
  return t === e || t !== t && e !== e;
}
var Qg = wF, EF = Qg;
function SF(t, e) {
  for (var r = t.length; r--; )
    if (EF(t[r][0], e))
      return r;
  return -1;
}
var Oa = SF, $F = Oa, OF = Array.prototype, AF = OF.splice;
function PF(t) {
  var e = this.__data__, r = $F(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : AF.call(e, r, 1), --this.size, !0;
}
var jF = PF, TF = Oa;
function _F(t) {
  var e = this.__data__, r = TF(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var RF = _F, CF = Oa;
function IF(t) {
  return CF(this.__data__, t) > -1;
}
var FF = IF, MF = Oa;
function DF(t, e) {
  var r = this.__data__, n = MF(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
var NF = DF, kF = xF, LF = jF, VF = RF, BF = FF, UF = NF;
function jn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
jn.prototype.clear = kF;
jn.prototype.delete = LF;
jn.prototype.get = VF;
jn.prototype.has = BF;
jn.prototype.set = UF;
var Aa = jn, HF = Aa;
function qF() {
  this.__data__ = new HF(), this.size = 0;
}
var GF = qF;
function zF(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
var KF = zF;
function WF(t) {
  return this.__data__.get(t);
}
var JF = WF;
function YF(t) {
  return this.__data__.has(t);
}
var XF = YF, QF = Nr, ZF = $a, eM = "[object AsyncFunction]", tM = "[object Function]", rM = "[object GeneratorFunction]", nM = "[object Proxy]";
function sM(t) {
  if (!ZF(t))
    return !1;
  var e = QF(t);
  return e == tM || e == rM || e == eM || e == nM;
}
var Zg = sM, iM = Kt, oM = iM["__core-js_shared__"], aM = oM, ml = aM, em = function() {
  var t = /[^.]+$/.exec(ml && ml.keys && ml.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function cM(t) {
  return !!em && em in t;
}
var lM = cM, uM = Function.prototype, fM = uM.toString;
function pM(t) {
  if (t != null) {
    try {
      return fM.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var eb = pM, hM = Zg, dM = lM, mM = $a, yM = eb, vM = /[\\^$.*+?()[\]{}|]/g, gM = /^\[object .+?Constructor\]$/, bM = Function.prototype, xM = Object.prototype, wM = bM.toString, EM = xM.hasOwnProperty, SM = RegExp(
  "^" + wM.call(EM).replace(vM, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $M(t) {
  if (!mM(t) || dM(t))
    return !1;
  var e = hM(t) ? SM : gM;
  return e.test(yM(t));
}
var OM = $M;
function AM(t, e) {
  return t == null ? void 0 : t[e];
}
var PM = AM, jM = OM, TM = PM;
function _M(t, e) {
  var r = TM(t, e);
  return jM(r) ? r : void 0;
}
var Tn = _M, RM = Tn, CM = Kt, IM = RM(CM, "Map"), yp = IM, FM = Tn, MM = FM(Object, "create"), Pa = MM, tm = Pa;
function DM() {
  this.__data__ = tm ? tm(null) : {}, this.size = 0;
}
var NM = DM;
function kM(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var LM = kM, VM = Pa, BM = "__lodash_hash_undefined__", UM = Object.prototype, HM = UM.hasOwnProperty;
function qM(t) {
  var e = this.__data__;
  if (VM) {
    var r = e[t];
    return r === BM ? void 0 : r;
  }
  return HM.call(e, t) ? e[t] : void 0;
}
var GM = qM, zM = Pa, KM = Object.prototype, WM = KM.hasOwnProperty;
function JM(t) {
  var e = this.__data__;
  return zM ? e[t] !== void 0 : WM.call(e, t);
}
var YM = JM, XM = Pa, QM = "__lodash_hash_undefined__";
function ZM(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = XM && e === void 0 ? QM : e, this;
}
var eD = ZM, tD = NM, rD = LM, nD = GM, sD = YM, iD = eD;
function _n(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
_n.prototype.clear = tD;
_n.prototype.delete = rD;
_n.prototype.get = nD;
_n.prototype.has = sD;
_n.prototype.set = iD;
var oD = _n, rm = oD, aD = Aa, cD = yp;
function lD() {
  this.size = 0, this.__data__ = {
    hash: new rm(),
    map: new (cD || aD)(),
    string: new rm()
  };
}
var uD = lD;
function fD(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var pD = fD, hD = pD;
function dD(t, e) {
  var r = t.__data__;
  return hD(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var ja = dD, mD = ja;
function yD(t) {
  var e = mD(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var vD = yD, gD = ja;
function bD(t) {
  return gD(this, t).get(t);
}
var xD = bD, wD = ja;
function ED(t) {
  return wD(this, t).has(t);
}
var SD = ED, $D = ja;
function OD(t, e) {
  var r = $D(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
var AD = OD, PD = uD, jD = vD, TD = xD, _D = SD, RD = AD;
function Rn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
Rn.prototype.clear = PD;
Rn.prototype.delete = jD;
Rn.prototype.get = TD;
Rn.prototype.has = _D;
Rn.prototype.set = RD;
var tb = Rn, CD = Aa, ID = yp, FD = tb, MD = 200;
function DD(t, e) {
  var r = this.__data__;
  if (r instanceof CD) {
    var n = r.__data__;
    if (!ID || n.length < MD - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new FD(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
var ND = DD, kD = Aa, LD = GF, VD = KF, BD = JF, UD = XF, HD = ND;
function Cn(t) {
  var e = this.__data__ = new kD(t);
  this.size = e.size;
}
Cn.prototype.clear = LD;
Cn.prototype.delete = VD;
Cn.prototype.get = BD;
Cn.prototype.has = UD;
Cn.prototype.set = HD;
var qD = Cn, GD = "__lodash_hash_undefined__";
function zD(t) {
  return this.__data__.set(t, GD), this;
}
var KD = zD;
function WD(t) {
  return this.__data__.has(t);
}
var JD = WD, YD = tb, XD = KD, QD = JD;
function oo(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new YD(); ++e < r; )
    this.add(t[e]);
}
oo.prototype.add = oo.prototype.push = XD;
oo.prototype.has = QD;
var ZD = oo;
function eN(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
var tN = eN;
function rN(t, e) {
  return t.has(e);
}
var nN = rN, sN = ZD, iN = tN, oN = nN, aN = 1, cN = 2;
function lN(t, e, r, n, s, i) {
  var o = r & aN, a = t.length, c = e.length;
  if (a != c && !(o && c > a))
    return !1;
  var l = i.get(t), f = i.get(e);
  if (l && f)
    return l == e && f == t;
  var u = -1, h = !0, p = r & cN ? new sN() : void 0;
  for (i.set(t, e), i.set(e, t); ++u < a; ) {
    var m = t[u], d = e[u];
    if (n)
      var y = o ? n(d, m, u, e, t, i) : n(m, d, u, t, e, i);
    if (y !== void 0) {
      if (y)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!iN(e, function(g, v) {
        if (!oN(p, v) && (m === g || s(m, g, r, n, i)))
          return p.push(v);
      })) {
        h = !1;
        break;
      }
    } else if (!(m === d || s(m, d, r, n, i))) {
      h = !1;
      break;
    }
  }
  return i.delete(t), i.delete(e), h;
}
var rb = lN, uN = Kt, fN = uN.Uint8Array, pN = fN;
function hN(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n, s) {
    r[++e] = [s, n];
  }), r;
}
var dN = hN;
function mN(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n) {
    r[++e] = n;
  }), r;
}
var yN = mN, nm = mp, sm = pN, vN = Qg, gN = rb, bN = dN, xN = yN, wN = 1, EN = 2, SN = "[object Boolean]", $N = "[object Date]", ON = "[object Error]", AN = "[object Map]", PN = "[object Number]", jN = "[object RegExp]", TN = "[object Set]", _N = "[object String]", RN = "[object Symbol]", CN = "[object ArrayBuffer]", IN = "[object DataView]", im = nm ? nm.prototype : void 0, yl = im ? im.valueOf : void 0;
function FN(t, e, r, n, s, i, o) {
  switch (r) {
    case IN:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case CN:
      return !(t.byteLength != e.byteLength || !i(new sm(t), new sm(e)));
    case SN:
    case $N:
    case PN:
      return vN(+t, +e);
    case ON:
      return t.name == e.name && t.message == e.message;
    case jN:
    case _N:
      return t == e + "";
    case AN:
      var a = bN;
    case TN:
      var c = n & wN;
      if (a || (a = xN), t.size != e.size && !c)
        return !1;
      var l = o.get(t);
      if (l)
        return l == e;
      n |= EN, o.set(t, e);
      var f = gN(a(t), a(e), n, s, i, o);
      return o.delete(t), f;
    case RN:
      if (yl)
        return yl.call(t) == yl.call(e);
  }
  return !1;
}
var MN = FN;
function DN(t, e) {
  for (var r = -1, n = e.length, s = t.length; ++r < n; )
    t[s + r] = e[r];
  return t;
}
var NN = DN, kN = NN, LN = Sa;
function VN(t, e, r) {
  var n = e(t);
  return LN(t) ? n : kN(n, r(t));
}
var BN = VN;
function UN(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, s = 0, i = []; ++r < n; ) {
    var o = t[r];
    e(o, r, t) && (i[s++] = o);
  }
  return i;
}
var HN = UN;
function qN() {
  return [];
}
var GN = qN, zN = HN, KN = GN, WN = Object.prototype, JN = WN.propertyIsEnumerable, om = Object.getOwnPropertySymbols, YN = om ? function(t) {
  return t == null ? [] : (t = Object(t), zN(om(t), function(e) {
    return JN.call(t, e);
  }));
} : KN, XN = YN;
function QN(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var ZN = QN, ek = Nr, tk = kr, rk = "[object Arguments]";
function nk(t) {
  return tk(t) && ek(t) == rk;
}
var sk = nk, am = sk, ik = kr, nb = Object.prototype, ok = nb.hasOwnProperty, ak = nb.propertyIsEnumerable, ck = am(/* @__PURE__ */ function() {
  return arguments;
}()) ? am : function(t) {
  return ik(t) && ok.call(t, "callee") && !ak.call(t, "callee");
}, lk = ck, ao = { exports: {} };
function uk() {
  return !1;
}
var fk = uk;
ao.exports;
(function(t, e) {
  var r = Kt, n = fk, s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, l = c || n;
  t.exports = l;
})(ao, ao.exports);
var sb = ao.exports, pk = 9007199254740991, hk = /^(?:0|[1-9]\d*)$/;
function dk(t, e) {
  var r = typeof t;
  return e = e ?? pk, !!e && (r == "number" || r != "symbol" && hk.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var mk = dk, yk = 9007199254740991;
function vk(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= yk;
}
var ib = vk, gk = Nr, bk = ib, xk = kr, wk = "[object Arguments]", Ek = "[object Array]", Sk = "[object Boolean]", $k = "[object Date]", Ok = "[object Error]", Ak = "[object Function]", Pk = "[object Map]", jk = "[object Number]", Tk = "[object Object]", _k = "[object RegExp]", Rk = "[object Set]", Ck = "[object String]", Ik = "[object WeakMap]", Fk = "[object ArrayBuffer]", Mk = "[object DataView]", Dk = "[object Float32Array]", Nk = "[object Float64Array]", kk = "[object Int8Array]", Lk = "[object Int16Array]", Vk = "[object Int32Array]", Bk = "[object Uint8Array]", Uk = "[object Uint8ClampedArray]", Hk = "[object Uint16Array]", qk = "[object Uint32Array]", he = {};
he[Dk] = he[Nk] = he[kk] = he[Lk] = he[Vk] = he[Bk] = he[Uk] = he[Hk] = he[qk] = !0;
he[wk] = he[Ek] = he[Fk] = he[Sk] = he[Mk] = he[$k] = he[Ok] = he[Ak] = he[Pk] = he[jk] = he[Tk] = he[_k] = he[Rk] = he[Ck] = he[Ik] = !1;
function Gk(t) {
  return xk(t) && bk(t.length) && !!he[gk(t)];
}
var zk = Gk;
function Kk(t) {
  return function(e) {
    return t(e);
  };
}
var Wk = Kk, co = { exports: {} };
co.exports;
(function(t, e) {
  var r = Yg, n = e && !e.nodeType && e, s = n && !0 && t && !t.nodeType && t, i = s && s.exports === n, o = i && r.process, a = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  t.exports = a;
})(co, co.exports);
var Jk = co.exports, Yk = zk, Xk = Wk, cm = Jk, lm = cm && cm.isTypedArray, Qk = lm ? Xk(lm) : Yk, ob = Qk, Zk = ZN, eL = lk, tL = Sa, rL = sb, nL = mk, sL = ob, iL = Object.prototype, oL = iL.hasOwnProperty;
function aL(t, e) {
  var r = tL(t), n = !r && eL(t), s = !r && !n && rL(t), i = !r && !n && !s && sL(t), o = r || n || s || i, a = o ? Zk(t.length, String) : [], c = a.length;
  for (var l in t)
    (e || oL.call(t, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    nL(l, c))) && a.push(l);
  return a;
}
var cL = aL, lL = Object.prototype;
function uL(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || lL;
  return t === r;
}
var fL = uL;
function pL(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var hL = pL, dL = hL, mL = dL(Object.keys, Object), yL = mL, vL = fL, gL = yL, bL = Object.prototype, xL = bL.hasOwnProperty;
function wL(t) {
  if (!vL(t))
    return gL(t);
  var e = [];
  for (var r in Object(t))
    xL.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var EL = wL, SL = Zg, $L = ib;
function OL(t) {
  return t != null && $L(t.length) && !SL(t);
}
var AL = OL, PL = cL, jL = EL, TL = AL;
function _L(t) {
  return TL(t) ? PL(t) : jL(t);
}
var RL = _L, CL = BN, IL = XN, FL = RL;
function ML(t) {
  return CL(t, FL, IL);
}
var DL = ML, um = DL, NL = 1, kL = Object.prototype, LL = kL.hasOwnProperty;
function VL(t, e, r, n, s, i) {
  var o = r & NL, a = um(t), c = a.length, l = um(e), f = l.length;
  if (c != f && !o)
    return !1;
  for (var u = c; u--; ) {
    var h = a[u];
    if (!(o ? h in e : LL.call(e, h)))
      return !1;
  }
  var p = i.get(t), m = i.get(e);
  if (p && m)
    return p == e && m == t;
  var d = !0;
  i.set(t, e), i.set(e, t);
  for (var y = o; ++u < c; ) {
    h = a[u];
    var g = t[h], v = e[h];
    if (n)
      var b = o ? n(v, g, h, e, t, i) : n(g, v, h, t, e, i);
    if (!(b === void 0 ? g === v || s(g, v, r, n, i) : b)) {
      d = !1;
      break;
    }
    y || (y = h == "constructor");
  }
  if (d && !y) {
    var E = t.constructor, R = e.constructor;
    E != R && "constructor" in t && "constructor" in e && !(typeof E == "function" && E instanceof E && typeof R == "function" && R instanceof R) && (d = !1);
  }
  return i.delete(t), i.delete(e), d;
}
var BL = VL, UL = Tn, HL = Kt, qL = UL(HL, "DataView"), GL = qL, zL = Tn, KL = Kt, WL = zL(KL, "Promise"), JL = WL, YL = Tn, XL = Kt, QL = YL(XL, "Set"), ZL = QL, e2 = Tn, t2 = Kt, r2 = e2(t2, "WeakMap"), n2 = r2, au = GL, cu = yp, lu = JL, uu = ZL, fu = n2, ab = Nr, In = eb, fm = "[object Map]", s2 = "[object Object]", pm = "[object Promise]", hm = "[object Set]", dm = "[object WeakMap]", mm = "[object DataView]", i2 = In(au), o2 = In(cu), a2 = In(lu), c2 = In(uu), l2 = In(fu), yr = ab;
(au && yr(new au(new ArrayBuffer(1))) != mm || cu && yr(new cu()) != fm || lu && yr(lu.resolve()) != pm || uu && yr(new uu()) != hm || fu && yr(new fu()) != dm) && (yr = function(t) {
  var e = ab(t), r = e == s2 ? t.constructor : void 0, n = r ? In(r) : "";
  if (n)
    switch (n) {
      case i2:
        return mm;
      case o2:
        return fm;
      case a2:
        return pm;
      case c2:
        return hm;
      case l2:
        return dm;
    }
  return e;
});
var u2 = yr, vl = qD, f2 = rb, p2 = MN, h2 = BL, ym = u2, vm = Sa, gm = sb, d2 = ob, m2 = 1, bm = "[object Arguments]", xm = "[object Array]", bi = "[object Object]", y2 = Object.prototype, wm = y2.hasOwnProperty;
function v2(t, e, r, n, s, i) {
  var o = vm(t), a = vm(e), c = o ? xm : ym(t), l = a ? xm : ym(e);
  c = c == bm ? bi : c, l = l == bm ? bi : l;
  var f = c == bi, u = l == bi, h = c == l;
  if (h && gm(t)) {
    if (!gm(e))
      return !1;
    o = !0, f = !1;
  }
  if (h && !f)
    return i || (i = new vl()), o || d2(t) ? f2(t, e, r, n, s, i) : p2(t, e, c, r, n, s, i);
  if (!(r & m2)) {
    var p = f && wm.call(t, "__wrapped__"), m = u && wm.call(e, "__wrapped__");
    if (p || m) {
      var d = p ? t.value() : t, y = m ? e.value() : e;
      return i || (i = new vl()), s(d, y, r, n, i);
    }
  }
  return h ? (i || (i = new vl()), h2(t, e, r, n, s, i)) : !1;
}
var g2 = v2, b2 = g2, Em = kr;
function cb(t, e, r, n, s) {
  return t === e ? !0 : t == null || e == null || !Em(t) && !Em(e) ? t !== t && e !== e : b2(t, e, r, n, cb, s);
}
var x2 = cb, w2 = x2;
function E2(t, e) {
  return w2(t, e);
}
var S2 = E2;
let $2 = class lb {
  constructor(e, r) {
    this.key = e, this.value = r;
  }
  /**
   * @returns {KeyValuePair}
   */
  clone() {
    const e = new lb();
    return this.key && (e.key = this.key.clone()), this.value && (e.value = this.value.clone()), e;
  }
};
var Ta = $2, O2 = "Expected a function";
function A2(t) {
  if (typeof t != "function")
    throw new TypeError(O2);
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
var _a = A2;
const P2 = _a;
function gl(t) {
  return typeof t == "string" ? (e) => e.element === t : t.constructor && t.extend ? (e) => e instanceof t : t;
}
let ub = class pu {
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
    return e = gl(e), new pu(this.elements.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(e, r) {
    return e = gl(e), new pu(this.elements.filter(P2(e), r));
  }
  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(e, r) {
    return e = gl(e), this.elements.find(e, r);
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
typeof Symbol < "u" && (ub.prototype[Symbol.iterator] = function() {
  return this.elements[Symbol.iterator]();
});
var Ra = ub;
const j2 = S2, xi = Ta, Qt = Ra;
let T2 = class Ri {
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
    return j2(this.toValue(), e);
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
var Wt = T2;
const _2 = Wt;
let R2 = class extends _2 {
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
var C2 = R2;
const I2 = Wt;
var F2 = class extends I2 {
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
const M2 = Wt;
var D2 = class extends M2 {
  constructor(e, r, n) {
    super(e, r, n), this.element = "number";
  }
  primitive() {
    return "number";
  }
};
const N2 = Wt;
var k2 = class extends N2 {
  constructor(e, r, n) {
    super(e, r, n), this.element = "boolean";
  }
  primitive() {
    return "boolean";
  }
};
const L2 = _a, V2 = Wt, Sm = Ra;
let ds = class extends V2 {
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
    return new Sm(this.content.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  reject(e, r) {
    return this.filter(L2(e), r);
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
    return new Sm(this.findElements(e, { recursive: !0 }));
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
var fb = ds;
const B2 = Ta, U2 = Wt;
var pb = class extends U2 {
  constructor(e, r, n, s) {
    super(new B2(), n, s), this.element = "member", this.key = e, this.value = r;
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
const H2 = _a, q2 = Ra;
let G2 = class hb extends q2 {
  map(e, r) {
    return this.elements.map((n) => e.bind(r)(n.value, n.key, n));
  }
  filter(e, r) {
    return new hb(this.elements.filter((n) => e.bind(r)(n.value, n.key, n)));
  }
  reject(e, r) {
    return this.filter(H2(e.bind(r)));
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
var db = G2;
const z2 = _a, K2 = $a, W2 = fb, J2 = pb, Y2 = db;
let X2 = class extends W2 {
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
    if (K2(e))
      return Object.keys(e).forEach((i) => {
        this.set(i, e[i]);
      }), this;
    const n = e, s = this.getMember(n);
    return s ? s.value = r : this.content.push(new J2(n, r)), this;
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
    return new Y2(this.content).filter(e, r);
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
    return this.filter(z2(e), r);
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
var Q2 = X2;
const Z2 = Wt;
var eV = class extends Z2 {
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
const tV = Wt;
var rV = class extends tV {
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
const Fn = Wt, mb = C2, yb = F2, vb = D2, gb = k2, bb = fb, xb = pb, vp = Q2, nV = eV, wb = rV, Eb = Ra, sV = db, iV = Ta;
function Ca(t) {
  return t instanceof Fn ? t : typeof t == "string" ? new yb(t) : typeof t == "number" ? new vb(t) : typeof t == "boolean" ? new gb(t) : t === null ? new mb() : Array.isArray(t) ? new bb(t.map(Ca)) : typeof t == "object" ? new vp(t) : t;
}
Fn.prototype.ObjectElement = vp;
Fn.prototype.RefElement = wb;
Fn.prototype.MemberElement = xb;
Fn.prototype.refract = Ca;
Eb.prototype.refract = Ca;
var Sb = {
  Element: Fn,
  NullElement: mb,
  StringElement: yb,
  NumberElement: vb,
  BooleanElement: gb,
  ArrayElement: bb,
  MemberElement: xb,
  ObjectElement: vp,
  LinkElement: nV,
  RefElement: wb,
  refract: Ca,
  ArraySlice: Eb,
  ObjectSlice: sV,
  KeyValuePair: iV
};
const oV = CI, aV = iF, cV = uF, lV = mF, uV = $a, $b = gF, Te = Sb;
let Ob = class {
  constructor(e) {
    this.elementMap = {}, this.elementDetection = [], this.Element = Te.Element, this.KeyValuePair = Te.KeyValuePair, (!e || !e.noDefault) && this.useDefault(), this._attributeElementKeys = [], this._attributeElementArrayKeys = [];
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
    return this.register("null", Te.NullElement).register("string", Te.StringElement).register("number", Te.NumberElement).register("boolean", Te.BooleanElement).register("array", Te.ArrayElement).register("object", Te.ObjectElement).register("member", Te.MemberElement).register("ref", Te.RefElement).register("link", Te.LinkElement), this.detect(oV, Te.NullElement, !1).detect(aV, Te.StringElement, !1).detect(cV, Te.NumberElement, !1).detect(lV, Te.BooleanElement, !1).detect(Array.isArray, Te.ArrayElement, !1).detect(uV, Te.ObjectElement, !1), this;
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
    return new $b(this);
  }
};
$b.prototype.Namespace = Ob;
var fV = Ob;
const pV = fV, Ye = Sb;
var hV = pV, nn = Ta, ms = Ye.ArraySlice, lo = Ye.ObjectSlice, dV = Ye.Element, Dt = Ye.StringElement, hu = Ye.NumberElement, Nt = Ye.BooleanElement, du = Ye.NullElement, ae = Ye.ArrayElement, I = Ye.ObjectElement, Fs = Ye.MemberElement, It = Ye.RefElement, mu = Ye.LinkElement, gp = Ye.refract;
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
const mV = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", yV = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, vV = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, gV = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof ae) && e.classes.includes(t), Zt = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, N = (t) => t({
  hasMethod: mV,
  hasBasicElementProps: yV,
  primitiveEq: vV,
  isElementType: Zt,
  hasClass: gV
}), Ae = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof dV || t(r) && e(void 0, r)), J = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Dt || t(r) && e("string", r)), bp = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof hu || t(r) && e("number", r)), xp = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof du || t(r) && e("null", r)), Ms = N(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Nt || t(r) && e("boolean", r)), Z = N(({
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
}) => (n) => n instanceof Fs || t(n) && e("member", n) && r(void 0, n)), Ab = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof mu || t(n) && e("link", n) && r(void 0, n)), Pb = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof It || t(n) && e("ref", n) && r(void 0, n)), bV = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof uo || t(n) && e("annotation", n) && r("array", n)), xV = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fo || t(n) && e("comment", n) && r("string", n)), jb = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ft || t(n) && e("parseResult", n) && r("array", n)), Tb = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof po || t(n) && e("sourceMap", n) && r("array", n)), Ar = (t) => Zt("object", t) || Zt("array", t) || Zt("boolean", t) || Zt("number", t) || Zt("string", t) || Zt("null", t) || Zt("member", t), Ds = (t) => Tb(t.meta.get("sourceMap")), wV = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return Ue(r) ? Gf(xa(r.toValue()), t) : !1;
}, Ia = (t, e) => t.length === 0 ? !0 : Gf(xa(e.classes.toValue()), t), EV = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Ds,
  includesClasses: Ia,
  includesSymbols: wV,
  isAnnotationElement: bV,
  isArrayElement: Ue,
  isBooleanElement: Ms,
  isCommentElement: xV,
  isElement: Ae,
  isLinkElement: Ab,
  isMemberElement: dt,
  isNullElement: xp,
  isNumberElement: bp,
  isObjectElement: Z,
  isParseResultElement: jb,
  isPrimitiveElement: Ar,
  isRefElement: Pb,
  isSourceMapElement: Tb,
  isStringElement: J
}, Symbol.toStringTag, { value: "Module" }));
class _b extends hV {
  constructor() {
    super(), this.register("annotation", uo), this.register("comment", fo), this.register("parseResult", ft), this.register("sourceMap", po);
  }
}
const Rb = new _b(), Ns = (t) => {
  const e = new _b();
  return gn(t) && e.use(t), e;
}, Cb = () => ({
  predicates: {
    ...EV
  },
  namespace: Rb
}), Fa = (t, e, r) => {
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
}, ee = {}, ks = (t) => t == null ? void 0 : t.type, Ib = (t) => typeof ks(t) == "string", wp = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), Ma = (t, {
  visitFnGetter: e = Fa,
  nodeTypeGetter: r = ks,
  breakSymbol: n = ee,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    enter(l, f, u, h, p, m) {
      let d = l, y = !1;
      const g = {
        ...m,
        replaceWith(v, b) {
          m.replaceWith(v, b), d = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const b = e(t[v], r(d), !1);
          if (typeof b == "function") {
            const E = b.call(t[v], d, f, u, h, p, g);
            if (typeof (E == null ? void 0 : E.then) == "function")
              throw new ut("Async visitor not supported in sync mode", {
                visitor: t[v],
                visitFn: b
              });
            if (E === i)
              c[v] = d;
            else if (E === n)
              c[v] = n;
            else {
              if (E === s)
                return E;
              if (E !== void 0)
                if (o)
                  d = E, y = !0;
                else
                  return E;
            }
          }
        }
      return y ? d : void 0;
    },
    leave(l, f, u, h, p, m) {
      let d = l;
      const y = {
        ...m,
        replaceWith(g, v) {
          m.replaceWith(g, v), d = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const v = e(t[g], r(d), !0);
          if (typeof v == "function") {
            const b = v.call(t[g], d, f, u, h, p, y);
            if (typeof (b == null ? void 0 : b.then) == "function")
              throw new ut("Async visitor not supported in sync mode", {
                visitor: t[g],
                visitFn: v
              });
            if (b === n)
              c[g] = n;
            else if (b !== void 0 && b !== i)
              return b;
          }
        } else c[g] === d && (c[g] = a);
    }
  };
}, SV = (t, {
  visitFnGetter: e = Fa,
  nodeTypeGetter: r = ks,
  breakSymbol: n = ee,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    async enter(l, f, u, h, p, m) {
      let d = l, y = !1;
      const g = {
        ...m,
        replaceWith(v, b) {
          m.replaceWith(v, b), d = v;
        }
      };
      for (let v = 0; v < t.length; v += 1)
        if (c[v] === a) {
          const b = e(t[v], r(d), !1);
          if (typeof b == "function") {
            const E = await b.call(t[v], d, f, u, h, p, g);
            if (E === i)
              c[v] = d;
            else if (E === n)
              c[v] = n;
            else {
              if (E === s)
                return E;
              if (E !== void 0)
                if (o)
                  d = E, y = !0;
                else
                  return E;
            }
          }
        }
      return y ? d : void 0;
    },
    async leave(l, f, u, h, p, m) {
      let d = l;
      const y = {
        ...m,
        replaceWith(g, v) {
          m.replaceWith(g, v), d = g;
        }
      };
      for (let g = 0; g < t.length; g += 1)
        if (c[g] === a) {
          const v = e(t[g], r(d), !0);
          if (typeof v == "function") {
            const b = await v.call(t[g], d, f, u, h, p, y);
            if (b === n)
              c[g] = n;
            else if (b !== void 0 && b !== i)
              return b;
          }
        } else c[g] === d && (c[g] = a);
    }
  };
};
Ma[Symbol.for("nodejs.util.promisify.custom")] = SV;
const Ep = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = ee,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Fa,
  nodeTypeGetter: c = ks,
  nodePredicate: l = Ib,
  nodeCloneFn: f = wp,
  detectCycles: u = !0
} = {}) => {
  const h = r || {};
  let p, m = Array.isArray(t), d = [t], y = -1, g, v = [], b = t;
  const E = [], R = [];
  do {
    y += 1;
    const k = y === d.length;
    let O;
    const M = k && v.length !== 0;
    if (k) {
      if (O = R.length === 0 ? void 0 : E.pop(), b = g, g = R.pop(), M)
        if (m) {
          b = b.slice();
          let A = 0;
          for (const [D, L] of v) {
            const Q = D - A;
            L === i ? (b.splice(Q, 1), A += 1) : b[Q] = L;
          }
        } else {
          b = f(b);
          for (const [A, D] of v)
            b[A] = D;
        }
      y = p.index, d = p.keys, v = p.edits, m = p.inArray, p = p.prev;
    } else if (g !== i && g !== void 0) {
      if (O = m ? y : d[y], b = g[O], b === i || b === void 0)
        continue;
      E.push(O);
    }
    let P;
    if (!Array.isArray(b)) {
      var $;
      if (!l(b))
        throw new ut(`Invalid AST Node:  ${String(b)}`, {
          node: b
        });
      if (u && R.includes(b)) {
        E.pop();
        continue;
      }
      const A = a(e, c(b), k);
      if (A) {
        for (const [L, Q] of Object.entries(n))
          e[L] = Q;
        const D = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(L, Q) {
            typeof Q == "function" ? Q(L, b, O, g, E, R) : g && (g[O] = L), k || (b = L);
          }
        };
        P = A.call(e, b, O, g, E, R, D);
      }
      if (typeof (($ = P) === null || $ === void 0 ? void 0 : $.then) == "function")
        throw new ut("Async visitor not supported in sync mode", {
          visitor: e,
          visitFn: A
        });
      if (P === s)
        break;
      if (P === o) {
        if (!k) {
          E.pop();
          continue;
        }
      } else if (P !== void 0 && (v.push([O, P]), !k))
        if (l(P))
          b = P;
        else {
          E.pop();
          continue;
        }
    }
    if (P === void 0 && M && v.push([O, b]), !k) {
      var C;
      p = {
        inArray: m,
        index: y,
        keys: d,
        edits: v,
        prev: p
      }, m = Array.isArray(b), d = m ? b : (C = h[c(b)]) !== null && C !== void 0 ? C : [], y = -1, v = [], g !== i && g !== void 0 && R.push(g), g = b;
    }
  } while (p !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
Ep[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = ee,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Fa,
  nodeTypeGetter: c = ks,
  nodePredicate: l = Ib,
  nodeCloneFn: f = wp,
  detectCycles: u = !0
} = {}) => {
  const h = r || {};
  let p, m = Array.isArray(t), d = [t], y = -1, g, v = [], b = t;
  const E = [], R = [];
  do {
    y += 1;
    const C = y === d.length;
    let k;
    const O = C && v.length !== 0;
    if (C) {
      if (k = R.length === 0 ? void 0 : E.pop(), b = g, g = R.pop(), O)
        if (m) {
          b = b.slice();
          let P = 0;
          for (const [A, D] of v) {
            const L = A - P;
            D === i ? (b.splice(L, 1), P += 1) : b[L] = D;
          }
        } else {
          b = f(b);
          for (const [P, A] of v)
            b[P] = A;
        }
      y = p.index, d = p.keys, v = p.edits, m = p.inArray, p = p.prev;
    } else if (g !== i && g !== void 0) {
      if (k = m ? y : d[y], b = g[k], b === i || b === void 0)
        continue;
      E.push(k);
    }
    let M;
    if (!Array.isArray(b)) {
      if (!l(b))
        throw new ut(`Invalid AST Node: ${String(b)}`, {
          node: b
        });
      if (u && R.includes(b)) {
        E.pop();
        continue;
      }
      const P = a(e, c(b), C);
      if (P) {
        for (const [D, L] of Object.entries(n))
          e[D] = L;
        const A = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(D, L) {
            typeof L == "function" ? L(D, b, k, g, E, R) : g && (g[k] = D), C || (b = D);
          }
        };
        M = await P.call(e, b, k, g, E, R, A);
      }
      if (M === s)
        break;
      if (M === o) {
        if (!C) {
          E.pop();
          continue;
        }
      } else if (M !== void 0 && (v.push([k, M]), !C))
        if (l(M))
          b = M;
        else {
          E.pop();
          continue;
        }
    }
    if (M === void 0 && O && v.push([k, b]), !C) {
      var $;
      p = {
        inArray: m,
        index: y,
        keys: d,
        edits: v,
        prev: p
      }, m = Array.isArray(b), d = m ? b : ($ = h[c(b)]) !== null && $ !== void 0 ? $ : [], y = -1, v = [], g !== i && g !== void 0 && R.push(g), g = b;
    }
  } while (p !== void 0);
  return v.length !== 0 ? v[v.length - 1][1] : t;
};
class Fb extends ut {
  constructor(r, n) {
    super(r, n);
    x(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class $V extends Fb {
}
class OV extends Fb {
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
  if (t instanceof nn) {
    const {
      key: s,
      value: i
    } = t, o = Ae(s) ? F(s, n) : s, a = Ae(i) ? F(i, n) : i, c = new nn(o, a);
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
  if (Ae(t)) {
    const s = Ve(t);
    if (r.set(t, s), t.content)
      if (Ae(t.content))
        s.content = F(t.content, n);
      else if (t.content instanceof nn)
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
  throw new $V("Value provided to cloneDeep function couldn't be cloned", {
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
const Mb = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new nn(e, r);
}, AV = (t) => {
  const e = [...t];
  return new ms(e);
}, PV = (t) => {
  const e = [...t];
  return new lo(e);
}, Db = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = F(t.meta)), t.attributes.length > 0 && (e._attributes = F(t.attributes)), Ae(t.content)) {
    const r = t.content;
    e.content = Db(r);
  } else Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof nn ? e.content = Mb(t.content) : e.content = t.content;
  return e;
}, Ve = (t) => {
  if (t instanceof nn)
    return Mb(t);
  if (t instanceof lo)
    return PV(t);
  if (t instanceof ms)
    return AV(t);
  if (Ae(t))
    return Db(t);
  throw new OV("Value provided to cloneShallow function couldn't be cloned", {
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
const Mn = (t) => Z(t) ? "ObjectElement" : Ue(t) ? "ArrayElement" : dt(t) ? "MemberElement" : J(t) ? "StringElement" : Ms(t) ? "BooleanElement" : bp(t) ? "NumberElement" : xp(t) ? "NullElement" : Ab(t) ? "LinkElement" : Pb(t) ? "RefElement" : void 0, Nb = (t) => Ae(t) ? Ve(t) : wp(t), kb = Fe(Mn, Dr), Dn = {
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
class Lb {
  constructor({
    predicate: e = Hf,
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
const ke = (t, e, {
  keyMap: r = Dn,
  ...n
} = {}) => Ep(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Mn,
  nodePredicate: kb,
  nodeCloneFn: Nb,
  ...n
});
ke[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Dn,
  ...n
} = {}) => Ep[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Mn,
  nodePredicate: kb,
  nodeCloneFn: Nb,
  ...n
});
const Vb = {
  toolboxCreator: Cb,
  visitorOptions: {
    nodeTypeGetter: Mn,
    exposeEdits: !0
  }
}, Nn = (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = sp(Vb, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Ma(a.map(no({}, "visitor")), {
    ...i
  });
  a.forEach(ps(["pre"], []));
  const l = ke(t, c, i);
  return a.forEach(ps(["post"], [])), l;
}, jV = async (t, e, r = {}) => {
  if (e.length === 0) return t;
  const n = sp(Vb, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((h) => h(o)), c = Ma[Symbol.for("nodejs.util.promisify.custom")], l = ke[Symbol.for("nodejs.util.promisify.custom")], f = c(a.map(no({}, "visitor")), {
    ...i
  });
  await Promise.allSettled(a.map(ps(["pre"], [])));
  const u = await l(t, f, i);
  return await Promise.allSettled(a.map(ps(["post"], []))), u;
};
Nn[Symbol.for("nodejs.util.promisify.custom")] = jV;
var Bb = { exports: {} };
(function(t) {
  var e = (() => {
    var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (E, R, $) => R in E ? r(E, R, { enumerable: !0, configurable: !0, writable: !0, value: $ }) : E[R] = $, l = (E, R) => {
      for (var $ in R || (R = {}))
        o.call(R, $) && c(E, $, R[$]);
      if (i)
        for (var $ of i(R))
          a.call(R, $) && c(E, $, R[$]);
      return E;
    }, f = (E, R) => {
      for (var $ in R)
        r(E, $, { get: R[$], enumerable: !0 });
    }, u = (E, R, $, C) => {
      if (R && typeof R == "object" || typeof R == "function")
        for (let k of s(R))
          !o.call(E, k) && k !== $ && r(E, k, { get: () => R[k], enumerable: !(C = n(R, k)) || C.enumerable });
      return E;
    }, h = (E) => u(r({}, "__esModule", { value: !0 }), E), p = (E, R, $) => (c(E, typeof R != "symbol" ? R + "" : R, $), $), m = {};
    f(m, {
      DEFAULT_OPTIONS: () => g,
      DEFAULT_UUID_LENGTH: () => y,
      default: () => b
    });
    var d = "5.2.0", y = 6, g = {
      dictionary: "alphanum",
      shuffle: !0,
      debug: !1,
      length: y,
      counter: 0
    }, v = class {
      constructor(R = {}) {
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
          const A = [...P];
          if (A[0] = `[short-unique-id] ${P[0]}`, this.debug === !0 && typeof console < "u" && console !== null)
            return console.log(...A);
        }), p(this, "_normalizeDictionary", (P, A) => {
          let D;
          if (P && Array.isArray(P) && P.length > 1)
            D = P;
          else {
            D = [];
            let L;
            this.dictIndex = L = 0;
            const Q = `_${P}_dict_ranges`, de = this._dict_ranges[Q];
            Object.keys(de).forEach((ye) => {
              const V = ye;
              for (this.dictRange = de[V], this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1], this.dictIndex = L = this.lowerBound; this.lowerBound <= this.upperBound ? L < this.upperBound : L > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? L += 1 : L -= 1)
                D.push(String.fromCharCode(this.dictIndex));
            });
          }
          return A && (D = D.sort(() => Math.random() - 0.5)), D;
        }), p(this, "setDictionary", (P, A) => {
          this.dict = this._normalizeDictionary(P, A), this.dictLength = this.dict.length, this.setCounter(0);
        }), p(this, "seq", () => this.sequentialUUID()), p(this, "sequentialUUID", () => {
          let P, A, D = "";
          P = this.counter;
          do
            A = P % this.dictLength, P = Math.trunc(P / this.dictLength), D += this.dict[A];
          while (P !== 0);
          return this.counter += 1, D;
        }), p(this, "rnd", (P = this.uuidLength || y) => this.randomUUID(P)), p(this, "randomUUID", (P = this.uuidLength || y) => {
          let A, D, L;
          if (P === null || typeof P > "u" || P < 1)
            throw new Error("Invalid UUID Length Provided");
          for (A = "", L = 0; L < P; L += 1)
            D = parseInt(
              (Math.random() * this.dictLength).toFixed(0),
              10
            ) % this.dictLength, A += this.dict[D];
          return A;
        }), p(this, "fmt", (P, A) => this.formattedUUID(P, A)), p(this, "formattedUUID", (P, A) => {
          const D = {
            $r: this.randomUUID,
            $s: this.sequentialUUID,
            $t: this.stamp
          };
          return P.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (Q) => {
              const de = Q.slice(0, 2), ye = parseInt(Q.slice(2), 10);
              return de === "$s" ? D[de]().padStart(ye, "0") : de === "$t" && A ? D[de](ye, A) : D[de](ye);
            }
          );
        }), p(this, "availableUUIDs", (P = this.uuidLength) => parseFloat(
          Math.pow([...new Set(this.dict)].length, P).toFixed(0)
        )), p(this, "approxMaxBeforeCollision", (P = this.availableUUIDs(this.uuidLength)) => parseFloat(
          Math.sqrt(Math.PI / 2 * P).toFixed(20)
        )), p(this, "collisionProbability", (P = this.availableUUIDs(this.uuidLength), A = this.uuidLength) => parseFloat(
          (this.approxMaxBeforeCollision(P) / this.availableUUIDs(A)).toFixed(20)
        )), p(this, "uniqueness", (P = this.availableUUIDs(this.uuidLength)) => {
          const A = parseFloat(
            (1 - this.approxMaxBeforeCollision(P) / P).toFixed(20)
          );
          return A > 1 ? 1 : A < 0 ? 0 : A;
        }), p(this, "getVersion", () => this.version), p(this, "stamp", (P, A) => {
          const D = Math.floor(+(A || /* @__PURE__ */ new Date()) / 1e3).toString(16);
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
          const L = P - 9, Q = Math.round(Math.random() * (L > 15 ? 15 : L)), de = this.randomUUID(L);
          return `${de.substring(0, Q)}${D}${de.substring(Q)}${Q.toString(16)}`;
        }), p(this, "parseStamp", (P, A) => {
          if (A && !/t0|t[1-9]\d{1,}/.test(A))
            throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
          const D = A ? A.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (Q) => {
              const de = {
                $r: (j) => [...Array(j)].map(() => "r").join(""),
                $s: (j) => [...Array(j)].map(() => "s").join(""),
                $t: (j) => [...Array(j)].map(() => "t").join("")
              }, ye = Q.slice(0, 2), V = parseInt(Q.slice(2), 10);
              return de[ye](V);
            }
          ).replace(
            /^(.*?)(t{8,})(.*)$/g,
            (Q, de, ye) => P.substring(de.length, de.length + ye.length)
          ) : P;
          if (D.length === 8)
            return new Date(parseInt(D, 16) * 1e3);
          if (D.length < 10)
            throw new Error("Stamp length invalid");
          const L = parseInt(D.substring(D.length - 1), 16);
          return new Date(parseInt(D.substring(L, L + 8), 16) * 1e3);
        }), p(this, "setCounter", (P) => {
          this.counter = P;
        }), p(this, "validate", (P, A) => {
          const D = A ? this._normalizeDictionary(A) : this.dict;
          return P.split("").every((L) => D.includes(L));
        });
        const $ = l(l({}, g), R);
        this.counter = 0, this.debug = !1, this.dict = [], this.version = d;
        const {
          dictionary: C,
          shuffle: k,
          length: O,
          counter: M
        } = $;
        return this.uuidLength = O, this.setDictionary(C, k), this.setCounter(M), this.debug = $.debug, this.log(this.dict), this.log(
          `Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`
        ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this), this;
      }
    };
    p(v, "default", v);
    var b = v;
    return h(m);
  })();
  t.exports = e.default, typeof window < "u" && (e = e.default);
})(Bb);
var TV = Bb.exports;
const _V = /* @__PURE__ */ $n(TV);
class RV extends ut {
  constructor(r, n) {
    super(r, n);
    x(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class Sp {
  constructor({
    length: e = 6
  } = {}) {
    x(this, "uuid");
    x(this, "identityMap");
    this.uuid = new _V({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  }
  identify(e) {
    if (!Ae(e))
      throw new RV("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
        value: e
      });
    if (e.meta.hasKey("id") && J(e.meta.get("id")) && !e.meta.get("id").equals(""))
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
new Sp();
class CV extends Array {
  constructor() {
    super(...arguments);
    x(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new hl("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new hl("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new hl("latest method in MediaTypes class is not yet implemented.");
  }
}
const IV = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return Ae(t) && (t.meta.length > 0 && (n.meta = F(t.meta)), t.attributes.length > 0 && (n.attributes = F(t.attributes))), Nn(n, r, {
    toolboxCreator: Cb,
    visitorOptions: {
      nodeTypeGetter: Mn
    }
  });
}, st = (t) => (e, r = {}) => IV(e, {
  ...r,
  Type: t
});
I.refract = st(I);
ae.refract = st(ae);
Dt.refract = st(Dt);
Nt.refract = st(Nt);
du.refract = st(du);
hu.refract = st(hu);
mu.refract = st(mu);
It.refract = st(It);
uo.refract = st(uo);
fo.refract = st(fo);
ft.refract = st(ft);
po.refract = st(po);
const FV = (t, e) => {
  const r = new Lb({
    predicate: t
  });
  return ke(e, r), new ms(r.result);
}, Ub = (t, e) => {
  const r = new Lb({
    predicate: t,
    returnOnTrue: ee
  });
  return ke(e, r), Tg(void 0, [0], r.result);
}, Hb = (t) => typeof (t == null ? void 0 : t.type) == "string" ? t.type : Mn(t), qb = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...Dn
}, Gb = (t, e, {
  keyMap: r = qb,
  ...n
} = {}) => ke(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Hb,
  nodePredicate: Ut,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
Gb[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = qb,
  ...r
} = {}) => ke[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: Hb,
  nodePredicate: Ut,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class MV {
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
class DV {
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
let NV = class {
  constructor() {
    x(this, "ObjectElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new DV(e.content);
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
        const r = new MV(e.content);
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
    return J(e.href) ? e.href.toValue() : "";
  }
};
const S = (t) => Ae(t) ? J(t) || bp(t) || Ms(t) || xp(t) ? t.toValue() : Gb(t, new NV()) : t, Ci = (t, e = /* @__PURE__ */ new WeakMap()) => (dt(t) ? (e.set(t.key, t), Ci(t.key, e), e.set(t.value, t), Ci(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), Ci(r, e);
}), e), kV = (t, e, r) => {
  const n = r.get(t);
  dt(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, LV = (t, e, r) => {
  const n = r.get(t);
  Z(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, VV = (t, e, r) => {
  const n = r.get(t);
  Ue(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class BV {
  constructor({
    element: e
  }) {
    x(this, "element");
    x(this, "edges");
    this.element = e;
  }
  transclude(e, r) {
    var n;
    if (e === this.element) return r;
    if (e === r) return this.element;
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : Ci(this.element);
    const s = this.edges.get(e);
    if (!ur(s))
      return Z(s) ? LV(e, r, this.edges) : Ue(s) ? VV(e, r, this.edges) : dt(s) && kV(e, r, this.edges), this.element;
  }
}
const UV = (t, e, r) => new BV({
  element: r
}).transclude(t, e), Da = (t, e) => {
  const r = yn(t, e);
  return wC((n) => {
    if (gn(n) && Og("$ref", n) && AC(Dr, "$ref", n)) {
      const s = ze(["$ref"], n), i = ap("#/", s);
      return ze(i.split("/"), r);
    }
    return gn(n) ? Da(n, r) : n;
  }, t);
}, zb = (t, e = Rb) => {
  if (Dr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return gn(t) && Og("element", t) ? e.fromRefract(t) : e.toElement(t);
}, ho = (t) => {
  const e = t.meta.length > 0 ? F(t.meta) : void 0, r = t.attributes.length > 0 ? F(t.attributes) : void 0;
  return new t.constructor(void 0, e, r);
}, mo = (t, e) => e.clone && e.isMergeableElement(t) ? Ot(ho(t), t, e) : t, HV = (t, e) => {
  if (typeof e.customMerge != "function")
    return Ot;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : Ot;
}, qV = (t) => typeof t.customMetaMerge != "function" ? (e) => F(e) : t.customMetaMerge, GV = (t) => typeof t.customAttributesMerge != "function" ? (e) => F(e) : t.customAttributesMerge, zV = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => mo(n, r)), KV = (t, e, r) => {
  const n = Z(t) ? ho(t) : ho(e);
  return Z(t) && t.forEach((s, i, o) => {
    const a = Ve(o);
    a.value = mo(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = S(i);
    let c;
    if (Z(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const l = t.get(a);
      c = Ve(o), c.value = HV(i, r)(l, s);
    } else
      c = Ve(o), c.value = mo(s, r);
    n.remove(a), n.content.push(c);
  }), n;
}, wi = {
  clone: !0,
  isMergeableElement: (t) => Z(t) || Ue(t),
  arrayElementMerge: zV,
  objectElementMerge: KV,
  customMerge: void 0,
  customMetaMerge: void 0,
  customAttributesMerge: void 0
};
function Ot(t, e, r) {
  var n, s, i;
  const o = {
    ...wi,
    ...r
  };
  o.isMergeableElement = (n = o.isMergeableElement) !== null && n !== void 0 ? n : wi.isMergeableElement, o.arrayElementMerge = (s = o.arrayElementMerge) !== null && s !== void 0 ? s : wi.arrayElementMerge, o.objectElementMerge = (i = o.objectElementMerge) !== null && i !== void 0 ? i : wi.objectElementMerge;
  const a = Ue(e), c = Ue(t);
  if (!(a === c))
    return mo(e, o);
  const f = a && typeof o.arrayElementMerge == "function" ? o.arrayElementMerge(t, e, o) : o.objectElementMerge(t, e, o);
  return f.meta = qV(o)(t.meta, e.meta), f.attributes = GV(o)(t.attributes, e.attributes), f;
}
Ot.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new I() : t.reduce((r, n) => Ot(r, n, e), ho(t[0]));
};
class $p extends me {
}
class Kb extends $p {
}
const WV = async (t, e) => {
  let r = t, n = !1;
  if (!jb(t)) {
    const o = Ve(t);
    o.classes.push("result"), r = new ft([o]), n = !0;
  }
  const s = new hs({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await pp("canDereference", [s, e], e.dereference.strategies);
  if (Cs(i))
    throw new Kb(s.uri);
  try {
    const {
      result: o
    } = await hp("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new $p(`Error while dereferencing file "${s.uri}"`, {
      cause: o
    });
  }
};
let Ls = class {
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
class JV {
  constructor({
    name: e
  }) {
    x(this, "name");
    this.name = e;
  }
}
class YV extends JV {
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
    return Ea(r.uri);
  }
}
class XV {
  constructor({
    name: e
  }) {
    x(this, "name");
    this.name = e;
  }
}
class QV {
  constructor({
    name: e
  }) {
    x(this, "name");
    this.name = e;
  }
}
class bl extends Array {
  includesCycle(e) {
    return this.filter((r) => r.has(e)).length > 1;
  }
  includes(e, r) {
    return e instanceof Set ? super.includes(e, r) : this.some((n) => n.has(e));
  }
  findItem(e) {
    for (const r of this)
      for (const n of r)
        if (Ae(n) && e(n))
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
class Wb extends me {
}
class ZV extends Wb {
}
class e3 extends me {
}
class Op extends e3 {
}
class t3 extends Wb {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
class sn extends $p {
}
class r3 extends dp {
}
class kt extends ou {
}
const n3 = async (t, e = {}) => {
  const r = Kg(zg, e);
  return WV(t, r);
};
function kn(t) {
  return Object.prototype.toString.call(t);
}
function s3(t) {
  return kn(t) === "[object Date]";
}
function i3(t) {
  return kn(t) === "[object RegExp]";
}
function o3(t) {
  return kn(t) === "[object Error]";
}
function a3(t) {
  return kn(t) === "[object Boolean]";
}
function c3(t) {
  return kn(t) === "[object Number]";
}
function l3(t) {
  return kn(t) === "[object String]";
}
var Jb = Array.isArray || function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
};
function Na(t, e) {
  if (t.forEach)
    return t.forEach(e);
  for (var r = 0; r < t.length; r++)
    e(t[r], r, t);
}
var u3 = Object.keys || function(e) {
  var r = [];
  for (var n in e)
    r.push(n);
  return r;
}, f3 = Object.prototype.propertyIsEnumerable, $m = Object.getOwnPropertySymbols;
function ka(t) {
  var e = u3(t);
  if ($m)
    for (var r = $m(t), n = 0; n < r.length; n++)
      f3.call(t, r[n]) && e.push(r[n]);
  return e;
}
var La = Object.prototype.hasOwnProperty || function(t, e) {
  return e in t;
};
function Yb(t) {
  if (typeof t == "object" && t !== null) {
    var e;
    if (Jb(t))
      e = [];
    else if (s3(t))
      e = new Date(t.getTime ? t.getTime() : t);
    else if (i3(t))
      e = new RegExp(t);
    else if (o3(t))
      e = { message: t.message };
    else if (a3(t) || c3(t) || l3(t))
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
    return Na(ka(t), function(s) {
      e[s] = t[s];
    }), e;
  }
  return t;
}
function Xb(t, e, r) {
  var n = [], s = [], i = !0;
  return function o(a) {
    var c = r ? Yb(a) : a, l = {}, f = !0, u = {
      node: c,
      node_: a,
      path: [].concat(n),
      parent: s[s.length - 1],
      parents: s,
      key: n[n.length - 1],
      isRoot: n.length === 0,
      level: n.length,
      circular: null,
      update: function(m, d) {
        u.isRoot || (u.parent.node[u.key] = m), u.node = m, d && (f = !1);
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
    function h() {
      if (typeof u.node == "object" && u.node !== null) {
        (!u.keys || u.node_ !== u.node) && (u.keys = ka(u.node)), u.isLeaf = u.keys.length === 0;
        for (var m = 0; m < s.length; m++)
          if (s[m].node_ === a) {
            u.circular = s[m];
            break;
          }
      } else
        u.isLeaf = !0, u.keys = null;
      u.notLeaf = !u.isLeaf, u.notRoot = !u.isRoot;
    }
    h();
    var p = e.call(u, u.node);
    return p !== void 0 && u.update && u.update(p), l.before && l.before.call(u, u.node), f && (typeof u.node == "object" && u.node !== null && !u.circular && (s.push(u), h(), Na(u.keys, function(m, d) {
      n.push(m), l.pre && l.pre.call(u, u.node[m], m);
      var y = o(u.node[m]);
      r && La.call(u.node, m) && (u.node[m] = y.node), y.isLast = d === u.keys.length - 1, y.isFirst = d === 0, l.post && l.post.call(u, y), n.pop();
    }), s.pop()), l.after && l.after.call(u, u.node)), u;
  }(t).node;
}
function tt(t) {
  this.value = t;
}
tt.prototype.get = function(t) {
  for (var e = this.value, r = 0; r < t.length; r++) {
    var n = t[r];
    if (!e || !La.call(e, n))
      return;
    e = e[n];
  }
  return e;
};
tt.prototype.has = function(t) {
  for (var e = this.value, r = 0; r < t.length; r++) {
    var n = t[r];
    if (!e || !La.call(e, n))
      return !1;
    e = e[n];
  }
  return !0;
};
tt.prototype.set = function(t, e) {
  for (var r = this.value, n = 0; n < t.length - 1; n++) {
    var s = t[n];
    La.call(r, s) || (r[s] = {}), r = r[s];
  }
  return r[t[n]] = e, e;
};
tt.prototype.map = function(t) {
  return Xb(this.value, t, !0);
};
tt.prototype.forEach = function(t) {
  return this.value = Xb(this.value, t, !1), this.value;
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
      var i = Yb(n);
      return t.push(n), e.push(i), Na(ka(n), function(o) {
        i[o] = r(n[o]);
      }), t.pop(), e.pop(), i;
    }
    return n;
  }(this.value);
};
function Qb(t) {
  return new tt(t);
}
Na(ka(tt.prototype), function(t) {
  Qb[t] = function(e) {
    var r = [].slice.call(arguments, 1), n = new tt(e);
    return n[t].apply(n, r);
  };
});
var p3 = Qb;
const h3 = /* @__PURE__ */ $n(p3), d3 = ["properties"], m3 = ["properties"], y3 = [
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
], v3 = ["schema/example", "items/example"];
function Zb(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    d3.indexOf(e) > -1 && m3.indexOf(r) === -1 || y3.indexOf(n) > -1 || v3.some((s) => n.indexOf(s) > -1)
  );
}
function g3(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return h3(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), l = yu(this.node, n(a));
      i.push(r.replace(c, l));
    }
  }), i;
}
function yu(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if (Ea(s))
    o = je(s, i);
  else {
    const a = je(Fi, s), l = je(a, i).replace(Fi, "");
    o = i.startsWith("/") ? l : l.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const b3 = /^([a-z]+:\/\/|\/\/)/i;
class xn extends ut {
}
const Rt = {}, Om = /* @__PURE__ */ new WeakMap(), x3 = [
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
], w3 = (t) => x3.some((e) => e(t)), E3 = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (Zb(i) || w3(i))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof t != "string")
      return new xn("$ref: must be a string (JSON-Ref)", {
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    const a = tx(t), c = a[0], l = a[1] || "";
    let f;
    try {
      f = o || c ? ex(c, o) : null;
    } catch (d) {
      return vu(d, {
        pointer: l,
        $ref: t,
        basePath: f,
        fullPath: r
      });
    }
    let u, h;
    if (P3(l, f, i, n) && !s.useCircularStructures) {
      const d = yu(t, f);
      return t === d ? null : ne.replace(r, d);
    }
    if (f == null ? (h = Pp(l), u = n.get(h), typeof u > "u" && (u = new xn(`Could not resolve reference: ${t}`, {
      pointer: l,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (u = rx(f, l), u.__value != null ? u = u.__value : u = u.catch((d) => {
      throw vu(d, {
        pointer: l,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), u instanceof Error)
      return [ne.remove(r), u];
    const p = yu(t, f), m = ne.replace(i, u, {
      $$ref: p
    });
    if (f && f !== o)
      return [m, ne.context(i, {
        baseDoc: f
      })];
    try {
      if (!j3(n.state, m) || s.useCircularStructures)
        return m;
    } catch {
      return null;
    }
  }
}, Ap = Object.assign(E3, {
  docCache: Rt,
  absoluteify: ex,
  clearCache: S3,
  JSONRefError: xn,
  wrapError: vu,
  getDoc: nx,
  split: tx,
  extractFromDoc: rx,
  fetchJSON: $3,
  extract: gu,
  jsonPointerToArray: Pp,
  unescapeJsonPointerToken: sx
});
function ex(t, e) {
  if (!b3.test(t)) {
    if (!e)
      throw new xn(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return je(e, t);
  }
  return t;
}
function vu(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new xn(`Could not resolve reference: ${r}`, {
    ...e,
    cause: t
  });
}
function tx(t) {
  return (t + "").split("#");
}
function rx(t, e) {
  const r = Rt[t];
  if (r && !ne.isPromise(r))
    try {
      const n = gu(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return nx(t).then((n) => gu(e, n));
}
function S3(t) {
  typeof t < "u" ? delete Rt[t] : Object.keys(Rt).forEach((e) => {
    delete Rt[e];
  });
}
function nx(t) {
  const e = Rt[t];
  return e ? ne.isPromise(e) ? e : Promise.resolve(e) : (Rt[t] = Ap.fetchJSON(t).then((r) => (Rt[t] = r, r)), Rt[t]);
}
function $3(t) {
  return fetch(t, {
    headers: {
      Accept: Hm
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => fn.load(e));
}
function gu(t, e) {
  const r = Pp(t);
  if (r.length < 1)
    return e;
  const n = ne.getIn(e, r);
  if (typeof n > "u")
    throw new xn(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function Pp(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(sx);
}
function sx(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function ix(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function O3(t) {
  return t.length === 0 ? "" : `/${t.map(ix).join("/")}`;
}
const A3 = (t) => !t || t === "/" || t === "#";
function xl(t, e) {
  if (A3(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function P3(t, e, r, n) {
  let s = Om.get(n);
  s || (s = {}, Om.set(n, s));
  const i = O3(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && xl(a, t))
    return !0;
  let l = "";
  if (r.some((u) => (l = `${l}/${ix(u)}`, s[l] && s[l].some((h) => xl(h, o) || xl(o, h)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function j3(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return ne.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const T3 = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (Zb(i))
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
      const u = r.slice(0, -1), h = g3(l, u, {
        getBaseUrlForNodePath: (p) => n.getContext([...r, f, ...p]).baseDoc,
        specmap: n
      });
      c.push(...h);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, _3 = {
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
}, R3 = {
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
class C3 {
  constructor(e) {
    this.root = wl(e || {});
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
    i[s] = wl(r, n);
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
      return !i[s] && r && (i[s] = wl(null, n)), i[s];
    }, this.root);
  }
}
function wl(t, e) {
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
const Am = 100, I3 = 3e3, Pm = () => {
};
class F3 {
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
      contextTree: new C3(),
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
      const c = (l, f) => Array.isArray(l) ? l.every((u, h) => u === f[h]) : !0;
      return function* (f, u) {
        const h = {};
        for (const [m, d] of f.filter(ne.isAdditiveMutation).entries())
          if (m < I3)
            yield* p(d.value, d.path, d);
          else
            return;
        function* p(m, d, y) {
          if (!ne.isObject(m))
            a.key === d[d.length - 1] && (yield a.plugin(m, a.key, d, u));
          else {
            const g = d.length - 1, v = d[g], b = d.indexOf("properties"), E = v === "properties" && g === b, R = u.allowMetaPatches && h[m.$$ref];
            for (const $ of Object.keys(m)) {
              const C = m[$], k = d.concat($), O = ne.isObject(C), M = m.$$ref;
              if (R || O && (u.allowMetaPatches && M && (h[M] = !0), yield* p(C, k, y)), !E && $ === a.key) {
                const P = c(n, d);
                (!n || P) && (yield a.plugin(C, $, k, u, y));
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
function M3(t) {
  return new F3(t).dispatch();
}
const vr = {
  refs: Ap,
  allOf: T3,
  parameters: _3,
  properties: R3
}, ox = (t) => t.replace(/\W/gi, "_");
function D3(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${ox(t)}`;
}
function Vs(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? ox(t.operationId) : D3(e, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function Va(t) {
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
      const l = Vs(c, s, a);
      if (l) {
        n[l] ? n[l].push(c) : n[l] = [c];
        const f = n[l];
        if (f.length > 1)
          f.forEach((u, h) => {
            u.__originalOperationId = u.__originalOperationId || u.operationId, u.operationId = `${l}${h + 1}`;
          });
        else if (typeof c.operationId < "u") {
          const u = f[0];
          u.__originalOperationId = u.__originalOperationId || c.operationId, u.operationId = l;
        }
      }
      if (a !== "parameters") {
        const f = [], u = {};
        for (const h in e)
          (h === "produces" || h === "consumes" || h === "security") && (u[h] = e[h], f.push(u));
        if (o && (u.parameters = o, f.push(u)), f.length) {
          for (const h of f)
            for (const p in h)
              if (!c[p])
                c[p] = h[p];
              else if (p === "parameters")
                for (const m of h[p])
                  c[p].some((y) => y.name && y.name === m.name || y.$ref && y.$ref === m.$ref || y.$$ref && y.$$ref === m.$$ref || y === m) || c[p].push(m);
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
  } = t, u = gf(t), h = sv(t);
  return p(e);
  function p(m) {
    u && (vr.refs.docCache[u] = m), vr.refs.fetchJSON = nv(h, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const d = [vr.refs];
    return typeof o == "function" && d.push(vr.parameters), typeof i == "function" && d.push(vr.properties), r !== "strict" && d.push(vr.allOf), M3({
      spec: m,
      context: {
        baseDoc: u
      },
      plugins: d,
      allowMetaPatches: n,
      // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator: s,
      // for lazy resolution
      parameterMacro: o,
      modelPropertyMacro: i,
      useCircularStructures: f
      // eslint-disable-next-line camelcase
    }).then(l ? async (y) => y : Va);
  }
}
function N3() {
  vr.refs.clearCache();
}
const ax = {
  name: "generic",
  match() {
    return !0;
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = Va({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return jp(t);
  }
};
async function k3(t) {
  return jp(t);
}
const cx = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, lx = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.([0123])(?:-rc[012])?$/.test(e);
  } catch {
    return !1;
  }
}, ux = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, Tp = (t) => lx(t) || ux(t), fx = {
  name: "openapi-2",
  match({
    spec: t
  }) {
    return cx(t);
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = Va({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return k3(t);
  }
};
async function L3(t) {
  return jp(t);
}
const px = {
  name: "openapi-3-0",
  match({
    spec: t
  }) {
    return lx(t);
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = Va({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return L3(t);
  }
}, V3 = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = gf(t), i = sv(t), o = e || await nv(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((l) => l.match(a)).resolve(a);
}, hx = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return V3(r);
}, B3 = hx({
  strategies: [px, fx, ax]
}), U3 = async (t, e, r = {}) => {
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
  }, p = f.find((d) => d.match(u)).normalize(u), m = await B3({
    ...u,
    spec: p,
    allowMetaPatches: !0,
    skipNormalization: !0
  });
  return !n && Array.isArray(e) && e.length && (m.spec = e.reduce((d, y) => d == null ? void 0 : d[y], m.spec) || null), m;
}, H3 = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return U3(e, r, s);
};
class _p extends ut {
}
class bu extends _p {
  constructor(r, n) {
    super(r, n);
    x(this, "pointer");
    typeof n < "u" && (this.pointer = n.pointer);
  }
}
class q3 extends _p {
  constructor(r, n) {
    super(r, n);
    x(this, "tokens");
    typeof n < "u" && (this.tokens = [...n.tokens]);
  }
}
class Jn extends _p {
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
const G3 = Fe(vn(/~/g, "~0"), vn(/\//g, "~1"), encodeURIComponent), z3 = (t) => {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, K3 = Fe(vn(/~1/g, "/"), vn(/~0/g, "~"), z3), W3 = (t) => {
  if (Ng(t))
    return [];
  if (!Cg("/", t))
    throw new bu(`Invalid JSON Pointer "${t}". JSON Pointers must begin with "/"`, {
      pointer: t
    });
  try {
    const e = Fe(ip("/"), js(K3))(t);
    return Sg(e);
  } catch (e) {
    throw new bu(`JSON Pointer parsing of "${t}" encountered an error.`, {
      pointer: t,
      cause: e
    });
  }
}, J3 = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, Qe = (t) => {
  const e = J3(t);
  return ap("#", e);
}, dx = (t) => {
  try {
    return t.length === 0 ? "" : `/${t.map(G3).join("/")}`;
  } catch (e) {
    throw new q3("JSON Pointer compilation of tokens encountered an error.", {
      tokens: t,
      cause: e
    });
  }
}, ct = (t, e) => {
  let r;
  try {
    r = W3(t);
  } catch (n) {
    throw new Jn(`JSON Pointer evaluation failed while parsing the pointer "${t}".`, {
      pointer: t,
      element: F(e),
      cause: n
    });
  }
  return r.reduce((n, s, i) => {
    if (Z(n)) {
      if (!n.hasKey(s))
        throw new Jn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ObjectElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: F(n)
        });
      return n.get(s);
    }
    if (Ue(n)) {
      if (!(s in n.content) || !eI(Number(s)))
        throw new Jn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ArrayElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: F(n)
        });
      return n.get(Number(s));
    }
    throw new Jn(`JSON Pointer evaluation failed while evaluating token "${s}" against an unexpected Element`, {
      pointer: t,
      tokens: r,
      failedToken: s,
      failedTokenPosition: i,
      element: F(n)
    });
  }, e);
};
class Rp extends CV {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return va(this.filterByFormat(e));
  }
}
const wn = new Rp("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
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
}, Ba = class extends I {
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
}, Ua = class extends I {
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
}, Ln = class extends I {
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
Object.defineProperty(Ln.prototype, "description", {
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
}, Ks = class extends I {
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
}, Ws = class extends I {
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
    if (J(this.operationRef)) {
      var e;
      return (e = this.operationRef) === null || e === void 0 ? void 0 : e.meta.get("operation");
    }
    if (J(this.operationId)) {
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
}, Js = class extends I {
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
}, Ha = class extends I {
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
}, qa = class extends I {
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
class Ga extends I {
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
}, Vn = class extends I {
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
Object.defineProperty(Vn.prototype, "description", {
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
class za extends I {
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
class Ka extends I {
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
class Wa extends I {
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
const Y3 = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", si), e.register("jSONReference", za), e.register("media", Ka), e.register("linkDescription", Wa), e;
  }
}, X3 = (t) => {
  if (Ae(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, Q3 = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Dn
};
let mx = class {
  constructor(e) {
    x(this, "element");
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = Ot(r.meta, e.meta), Ds(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = Ot(r.attributes, e.attributes));
  }
}, Ee = class extends mx {
  enter(e) {
    return this.element = F(e), ee;
  }
};
const yx = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, ys = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : ys(r, [...e, r]);
}, Z3 = (...t) => {
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
  const s = (n = Z3(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = ys(s);
  for (let a of t) {
    let c = ys(a);
    for (let l = c.length - 1; l >= 0; l--) {
      let f = c[l];
      o.indexOf(f) === -1 && (yx(i, f, ["constructor", ...r]), o.push(f));
    }
  }
  return i.constructor = e, i;
}, xu = (t) => t.filter((e, r) => t.indexOf(e) == r), vx = /* @__PURE__ */ new WeakMap(), eB = (t) => vx.get(t), tB = (t, e) => vx.set(t, e), Tm = (t, e) => {
  var r, n;
  const s = xu([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = xu([...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, _m = (t, e) => {
  var r, n, s, i;
  return {
    property: Tm((r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}, (n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}),
    method: Tm((s = t == null ? void 0 : t.method) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, rB = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: xu([...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : []]),
    static: _m((s = t == null ? void 0 : t.static) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: _m((o = t == null ? void 0 : t.instance) !== null && o !== void 0 ? o : {}, (a = e == null ? void 0 : e.instance) !== null && a !== void 0 ? a : {})
  };
}, nB = /* @__PURE__ */ new Map(), sB = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = ys(s.prototype).map((l) => l.constructor), o = (e = eB(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((l) => !r.has(l));
      for (let l of c)
        n.add(l);
      r.add(s), n.delete(s);
    }
  return [...r];
}, iB = (...t) => {
  const e = sB(...t).map((r) => nB.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => rB(r, n));
};
function _(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      yx(this, new c(...a));
  }
  i.prototype = jm(s, i), Object.setPrototypeOf(
    i,
    jm(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = iB(...t);
    for (let c of (e = a == null ? void 0 : a.class) !== null && e !== void 0 ? e : []) {
      const l = c(o);
      l && (o = l);
    }
    Rm((r = a == null ? void 0 : a.static) !== null && r !== void 0 ? r : {}, o), Rm((n = a == null ? void 0 : a.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return tB(o, t), o;
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
let fr = class extends mx {
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
    return _g(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = ze(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return ga(Gt, ["visitors", ...r], this.specObj) ? ze(["visitors", ...r], this.specObj) : ze(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof Ee && (i == null ? void 0 : i.constructor) === Ee ? F(n) : (ke(n, i, s), i.element);
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
      if (J(o) && s.includes(S(o)) && !this.ignoredFields.includes(S(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", S(o)], i), l = new Fs(F(o), c);
        this.copyMetaAndAttributes(a, l), l.classes.push("fixed-field"), this.element.content.push(l);
      } else this.ignoredFields.includes(S(o)) || this.element.content.push(F(a));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
};
class oB extends _(vs, Ee) {
  constructor(e) {
    super(e), this.element = new si(), this.specPath = U(["document", "objects", "JSONSchema"]);
  }
}
let Jt = class {
  constructor({
    parent: e
  }) {
    x(this, "parent");
    this.parent = e;
  }
};
const At = (t) => Z(t) && t.hasKey("$ref");
let aB = class extends _(fr, Jt, Ee) {
  ObjectElement(e) {
    const r = At(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
    return this.element = this.toRefractedElement(r, e), ee;
  }
  ArrayElement(e) {
    return this.element = new ae(), this.element.classes.push("json-schema-items"), e.forEach((r) => {
      const n = At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class cB extends Ee {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-required"), r;
  }
}
let lB = class extends fr {
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
    x(this, "fieldPatternPredicate", Hf);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (!this.ignoredFields.includes(S(s)) && this.fieldPatternPredicate(S(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new Fs(F(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(S(s)) || this.element.content.push(F(i));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}, Ja = class extends lB {
  constructor(e) {
    super(e), this.fieldPatternPredicate = op;
  }
}, uB = class extends _(Ja, Jt, Ee) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-properties"), this.specPath = (r) => At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}, fB = class extends _(Ja, Jt, Ee) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-patternProperties"), this.specPath = (r) => At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
};
class pB extends _(Ja, Jt, Ee) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-dependencies"), this.specPath = (r) => At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let hB = class extends Ee {
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}, dB = class extends Ee {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}, mB = class extends _(fr, Jt, Ee) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-allOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, yB = class extends _(fr, Jt, Ee) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-anyOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, vB = class extends _(fr, Jt, Ee) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-oneOf");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class gB extends _(Ja, Jt, Ee) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-definitions"), this.specPath = (r) => At(r) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
  }
}
let bB = class extends _(fr, Jt, Ee) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-links");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = this.toRefractedElement(["document", "objects", "LinkDescription"], r);
      this.element.push(n);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class xB extends _(vs, Ee) {
  constructor(e) {
    super(e), this.element = new za(), this.specPath = U(["document", "objects", "JSONReference"]);
  }
  ObjectElement(e) {
    const r = vs.prototype.ObjectElement.call(this, e);
    return J(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}
let wB = class extends Ee {
  StringElement(e) {
    const r = this.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, EB = class extends fr {
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
    }) => tp(i, U(o), ba)), s = Lg(n)(r);
    return this.element = this.toRefractedElement(s, r), ee;
  }
}, Wr = class extends EB {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: At,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: Ut,
      specPath: ["document", "objects", "JSONSchema"]
    }];
  }
};
class SB extends _(vs, Ee) {
  constructor(e) {
    super(e), this.element = new Ka(), this.specPath = U(["document", "objects", "Media"]);
  }
}
class $B extends _(vs, Ee) {
  constructor(e) {
    super(e), this.element = new Wa(), this.specPath = U(["document", "objects", "LinkDescription"]);
  }
}
const Yt = {
  visitors: {
    value: Ee,
    JSONSchemaOrJSONReferenceVisitor: Wr,
    document: {
      objects: {
        JSONSchema: {
          $visitor: oB,
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
            additionalItems: Wr,
            items: aB,
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
            required: cB,
            properties: uB,
            additionalProperties: Wr,
            patternProperties: fB,
            dependencies: pB,
            // validation keywords for any instance type
            enum: hB,
            type: dB,
            allOf: mB,
            anyOf: yB,
            oneOf: vB,
            not: Wr,
            definitions: gB,
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
            links: bB,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: {
              $ref: "#/visitors/value"
            }
          }
        },
        JSONReference: {
          $visitor: xB,
          fixedFields: {
            $ref: wB
          }
        },
        Media: {
          $visitor: SB,
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
          $visitor: $B,
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
            targetSchema: Wr,
            mediaType: {
              $ref: "#/visitors/value"
            },
            method: {
              $ref: "#/visitors/value"
            },
            encType: {
              $ref: "#/visitors/value"
            },
            schema: Wr
          }
        }
      }
    }
  }
}, OB = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof si || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), AB = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof za || t(n) && e("JSONReference", n) && r("object", n)), PB = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ka || t(n) && e("media", n) && r("object", n)), jB = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Wa || t(n) && e("linkDescription", n) && r("object", n)), TB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: AB,
  isJSONSchemaElement: OB,
  isLinkDescriptionElement: jB,
  isMediaElement: PB
}, Symbol.toStringTag, { value: "Module" })), _B = () => {
  const t = Ns(Y3);
  return {
    predicates: {
      ...TB,
      isStringElement: J
    },
    namespace: t
  };
}, RB = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Yt
} = {}) => {
  const s = gp(t), i = Da(n), o = ze(e, i), a = new o({
    specObj: i
  });
  return ke(s, a), Nn(a.element, r, {
    toolboxCreator: _B,
    visitorOptions: {
      keyMap: Q3,
      nodeTypeGetter: X3
    }
  });
}, Ya = (t) => (e, r = {}) => RB(e, {
  specPath: t,
  ...r
});
si.refract = Ya(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
za.refract = Ya(["visitors", "document", "objects", "JSONReference", "$visitor"]);
Ka.refract = Ya(["visitors", "document", "objects", "Media", "$visitor"]);
Wa.refract = Ya(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let Xa = class extends si {
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
}, Qa = class extends I {
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
}, Za = class extends I {
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
const CB = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Bs), e.register("components", Us), e.register("contact", Hs), e.register("discriminator", Ba), e.register("encoding", Ua), e.register("example", qs), e.register("externalDocumentation", Gs), e.register("header", Ln), e.register("info", zs), e.register("license", Ks), e.register("link", Ws), e.register("mediaType", Js), e.register("oAuthFlow", Ha), e.register("oAuthFlows", qa), e.register("openapi", Ys), e.register("openApi3_0", Ga), e.register("operation", Xs), e.register("parameter", Vn), e.register("pathItem", Qs), e.register("paths", Zs), e.register("reference", ei), e.register("requestBody", ti), e.register("response", ri), e.register("responses", ni), e.register("schema", Xa), e.register("securityRequirement", ii), e.register("securityScheme", oi), e.register("server", ai), e.register("serverVariable", ci), e.register("tag", Qa), e.register("xml", Za), e;
  }
}, Eo = class Eo extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Eo.primaryClass);
  }
};
x(Eo, "primaryClass", "servers");
let gs = Eo;
const So = class So extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(So.primaryClass);
  }
};
x(So, "primaryClass", "security");
let wu = So;
const $o = class $o extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push($o.primaryClass);
  }
};
x($o, "primaryClass", "tags");
let Eu = $o;
const Oo = class Oo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Oo.primaryClass);
  }
};
x(Oo, "primaryClass", "server-variables");
let Su = Oo;
const Ao = class Ao extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ao.primaryClass);
  }
};
x(Ao, "primaryClass", "components-schemas");
let vo = Ao;
const Po = class Po extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Po.primaryClass);
  }
};
x(Po, "primaryClass", "components-responses");
let $u = Po;
const jo = class jo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(jo.primaryClass), this.classes.push("parameters");
  }
};
x(jo, "primaryClass", "components-parameters");
let Ou = jo;
const To = class To extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(To.primaryClass), this.classes.push("examples");
  }
};
x(To, "primaryClass", "components-examples");
let Au = To;
const _o = class _o extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(_o.primaryClass);
  }
};
x(_o, "primaryClass", "components-request-bodies");
let Pu = _o;
const Ro = class Ro extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ro.primaryClass);
  }
};
x(Ro, "primaryClass", "components-headers");
let ju = Ro;
const Co = class Co extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Co.primaryClass);
  }
};
x(Co, "primaryClass", "components-security-schemes");
let Tu = Co;
const Io = class Io extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Io.primaryClass);
  }
};
x(Io, "primaryClass", "components-links");
let _u = Io;
const Fo = class Fo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Fo.primaryClass);
  }
};
x(Fo, "primaryClass", "components-callbacks");
let Ru = Fo;
const Mo = class Mo extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Mo.primaryClass), this.classes.push("servers");
  }
};
x(Mo, "primaryClass", "path-item-servers");
let go = Mo;
const Do = class Do extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Do.primaryClass), this.classes.push("parameters");
  }
};
x(Do, "primaryClass", "path-item-parameters");
let Cu = Do;
const No = class No extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(No.primaryClass), this.classes.push("parameters");
  }
};
x(No, "primaryClass", "operation-parameters");
let bo = No;
const ko = class ko extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ko.primaryClass), this.classes.push("examples");
  }
};
x(ko, "primaryClass", "parameter-examples");
let Iu = ko;
const Lo = class Lo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Lo.primaryClass), this.classes.push("content");
  }
};
x(Lo, "primaryClass", "parameter-content");
let Fu = Lo;
const Vo = class Vo extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Vo.primaryClass);
  }
};
x(Vo, "primaryClass", "operation-tags");
let Mu = Vo;
const Bo = class Bo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Bo.primaryClass);
  }
};
x(Bo, "primaryClass", "operation-callbacks");
let Du = Bo;
const Uo = class Uo extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Uo.primaryClass), this.classes.push("security");
  }
};
x(Uo, "primaryClass", "operation-security");
let xo = Uo;
const Ho = class Ho extends ae {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ho.primaryClass), this.classes.push("servers");
  }
};
x(Ho, "primaryClass", "operation-servers");
let wo = Ho;
const qo = class qo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(qo.primaryClass), this.classes.push("content");
  }
};
x(qo, "primaryClass", "request-body-content");
let Nu = qo;
const Go = class Go extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Go.primaryClass), this.classes.push("examples");
  }
};
x(Go, "primaryClass", "media-type-examples");
let ku = Go;
const zo = class zo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(zo.primaryClass);
  }
};
x(zo, "primaryClass", "media-type-encoding");
let Lu = zo;
const Ko = class Ko extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ko.primaryClass);
  }
};
x(Ko, "primaryClass", "encoding-headers");
let Vu = Ko;
const Wo = class Wo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Wo.primaryClass);
  }
};
x(Wo, "primaryClass", "response-headers");
let Bu = Wo;
const Jo = class Jo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Jo.primaryClass), this.classes.push("content");
  }
};
x(Jo, "primaryClass", "response-content");
let Uu = Jo;
const Yo = class Yo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Yo.primaryClass);
  }
};
x(Yo, "primaryClass", "response-links");
let Hu = Yo;
const Xo = class Xo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Xo.primaryClass);
  }
};
x(Xo, "primaryClass", "discriminator-mapping");
let qu = Xo;
const Qo = class Qo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Qo.primaryClass);
  }
};
x(Qo, "primaryClass", "oauth-flow-scopes");
let Gu = Qo;
const Zo = class Zo extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Zo.primaryClass);
  }
};
x(Zo, "primaryClass", "link-parameters");
let zu = Zo;
const ea = class ea extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ea.primaryClass), this.classes.push("examples");
  }
};
x(ea, "primaryClass", "header-examples");
let Ku = ea;
const ta = class ta extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ta.primaryClass), this.classes.push("content");
  }
};
x(ta, "primaryClass", "header-content");
let Wu = ta;
const IB = (t) => {
  if (Ae(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, FB = {
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
  ...Dn
};
class gx {
  constructor(e = {}) {
    x(this, "element");
    Object.assign(this, e);
  }
  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(e, r) {
    (e.meta.length > 0 || r.meta.length > 0) && (r.meta = Ot(r.meta, e.meta), Ds(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"))), (e.attributes.length > 0 || e.meta.length > 0) && (r.attributes = Ot(r.attributes, e.attributes));
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
class T extends gx {
  enter(e) {
    return this.element = F(e), ee;
  }
}
class He extends gx {
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
    return _g(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = ze(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return ga(Gt, ["visitors", ...r], this.specObj) ? ze(["visitors", ...r], this.specObj) : ze(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof T && (i == null ? void 0 : i.constructor) === T ? F(n) : (ke(n, i, s), i.element);
  }
}
const fe = (t) => Z(t) && t.hasKey("$ref"), MB = Z, DB = Z, bx = (t) => J(t.key) && Cg("x-", S(t.key));
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
    x(this, "specificationExtensionPredicate", bx);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "boolean" && (this.canSupportSpecificationExtensions = s), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (J(o) && s.includes(S(o)) && !this.ignoredFields.includes(S(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", S(o)], i), l = new Fs(F(o), c);
        this.copyMetaAndAttributes(a, l), l.classes.push("fixed-field"), this.element.content.push(l);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(a)) {
        const c = this.toRefractedElement(["document", "extension"], a);
        this.element.content.push(c);
      } else this.ignoredFields.includes(S(o)) || this.element.content.push(F(a));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}
class NB extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ga(), this.specPath = U(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return Y.prototype.ObjectElement.call(this, e);
  }
}
class kB extends _(He, T) {
  StringElement(e) {
    const r = new Ys(S(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, ee;
  }
}
class LB extends He {
  MemberElement(e) {
    return this.element = F(e), this.element.classes.push("specification-extension"), ee;
  }
}
let VB = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new zs(), this.specPath = U(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
class BB extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
let UB = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Hs(), this.specPath = U(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
}, HB = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ks(), this.specPath = U(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
}, qB = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ws(), this.specPath = U(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return (J(this.element.operationId) || J(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
class GB extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class zB extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class En extends He {
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
    x(this, "fieldPatternPredicate", Hf);
    x(this, "canSupportSpecificationExtensions", !1);
    x(this, "specificationExtensionPredicate", bx);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s), typeof i == "boolean" && (this.canSupportSpecificationExtensions = i), typeof o == "function" && (this.specificationExtensionPredicate = o);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
        const o = this.toRefractedElement(["document", "extension"], i);
        this.element.content.push(o);
      } else if (!this.ignoredFields.includes(S(s)) && this.fieldPatternPredicate(S(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new Fs(F(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else this.ignoredFields.includes(S(s)) || this.element.content.push(F(i));
    }), this.copyMetaAndAttributes(r, this.element), ee;
  }
}
class z extends En {
  constructor(e) {
    super(e), this.fieldPatternPredicate = op;
  }
}
let KB = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new zu(), this.specPath = U(["value"]);
  }
}, WB = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ai(), this.specPath = U(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
class JB extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
let Cp = class extends _(He, T) {
  constructor(e) {
    super(e), this.element = new gs();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = MB(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, YB = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ci(), this.specPath = U(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
class XB extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Su(), this.specPath = U(["document", "objects", "ServerVariable"]);
  }
}
let QB = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Js(), this.specPath = U(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
class Pt extends He {
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
    }) => tp(i, U(o), ba)), s = Lg(n)(r);
    return this.element = this.toRefractedElement(s, r), ee;
  }
}
const ZB = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bs || t(n) && e("callback", n) && r("object", n)), eU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Us || t(n) && e("components", n) && r("object", n)), tU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Hs || t(n) && e("contact", n) && r("object", n)), rU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof qs || t(n) && e("example", n) && r("object", n)), nU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gs || t(n) && e("externalDocumentation", n) && r("object", n)), Bn = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ln || t(n) && e("header", n) && r("object", n)), sU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zs || t(n) && e("info", n) && r("object", n)), iU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ks || t(n) && e("license", n) && r("object", n)), oU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ws || t(n) && e("link", n) && r("object", n)), aU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ys || t(n) && e("openapi", n) && r("string", n)), cU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Ga || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), xx = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xs || t(n) && e("operation", n) && r("object", n)), lU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Vn || t(n) && e("parameter", n) && r("object", n)), Ip = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qs || t(n) && e("pathItem", n) && r("object", n)), uU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zs || t(n) && e("paths", n) && r("object", n)), ce = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ei || t(n) && e("reference", n) && r("object", n)), fU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ti || t(n) && e("requestBody", n) && r("object", n)), ec = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ri || t(n) && e("response", n) && r("object", n)), pU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ni || t(n) && e("responses", n) && r("object", n)), hU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xa || t(n) && e("schema", n) && r("object", n)), dU = (t) => Ms(t) && t.classes.includes("boolean-json-schema"), mU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ii || t(n) && e("securityRequirement", n) && r("object", n)), yU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof oi || t(n) && e("securityScheme", n) && r("object", n)), vU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ai || t(n) && e("server", n) && r("object", n)), gU = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ci || t(n) && e("serverVariable", n) && r("object", n)), tc = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Js || t(n) && e("mediaType", n) && r("object", n)), wx = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof gs || t(s) && e("array", s) && r("array", s) && n("servers", s)), bU = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: dU,
  isCallbackElement: ZB,
  isComponentsElement: eU,
  isContactElement: tU,
  isExampleElement: rU,
  isExternalDocumentationElement: nU,
  isHeaderElement: Bn,
  isInfoElement: sU,
  isLicenseElement: iU,
  isLinkElement: oU,
  isMediaTypeElement: tc,
  isOpenApi3_0Element: cU,
  isOpenapiElement: aU,
  isOperationElement: xx,
  isParameterElement: lU,
  isPathItemElement: Ip,
  isPathsElement: uU,
  isReferenceElement: ce,
  isRequestBodyElement: fU,
  isResponseElement: ec,
  isResponsesElement: pU,
  isSchemaElement: hU,
  isSecurityRequirementElement: mU,
  isSecuritySchemeElement: yU,
  isServerElement: vU,
  isServerVariableElement: gU,
  isServersElement: wx
}, Symbol.toStringTag, { value: "Module" }));
let xU = class extends _(Pt, T) {
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
    const r = Pt.prototype.enter.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, Fp = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("examples"), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, wU = class extends Fp {
  constructor(e) {
    super(e), this.element = new ku();
  }
}, EU = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Lu(), this.specPath = U(["document", "objects", "Encoding"]);
  }
}, SU = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new ii(), this.specPath = U(["value"]);
  }
}, $U = class extends _(He, T) {
  constructor(e) {
    super(e), this.element = new wu();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Z(r)) {
        const n = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(n);
      } else
        this.element.push(F(r));
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, OU = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Us(), this.specPath = U(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
}, AU = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Qa(), this.specPath = U(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
}, PU = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ei(), this.specPath = U(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return J(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
}, jU = class extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}, TU = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Vn(), this.specPath = U(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return Z(this.element.contentProp) && this.element.contentProp.filter(tc).forEach((n, s) => {
      n.setMetaProperty("media-type", S(s));
    }), r;
  }
}, _U = class extends _(Pt, T) {
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
    const r = Pt.prototype.enter.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, RU = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ln(), this.specPath = U(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
}, CU = class extends _(Pt, T) {
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
    const r = Pt.prototype.enter.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}, IU = class extends Fp {
  constructor(e) {
    super(e), this.element = new Ku();
  }
}, rc = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("content"), this.specPath = U(["document", "objects", "MediaType"]);
  }
}, FU = class extends rc {
  constructor(e) {
    super(e), this.element = new Wu();
  }
}, MU = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Xa(), this.specPath = U(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const {
  allOf: Cm
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
let DU = class extends Cm {
  ArrayElement(e) {
    const r = Cm.prototype.ArrayElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const {
  anyOf: Im
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
let NU = class extends Im {
  ArrayElement(e) {
    const r = Im.prototype.ArrayElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const {
  oneOf: Fm
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
let kU = class extends Fm {
  ArrayElement(e) {
    const r = Fm.prototype.ArrayElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const {
  items: Mm
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
class LU extends Mm {
  ObjectElement(e) {
    const r = Mm.prototype.ObjectElement.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
  ArrayElement(e) {
    return this.enter(e);
  }
}
const {
  properties: Dm
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
let VU = class extends Dm {
  ObjectElement(e) {
    const r = Dm.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const {
  type: BU
} = Yt.visitors.document.objects.JSONSchema.fixedFields;
let UU = class extends BU {
  ArrayElement(e) {
    return this.enter(e);
  }
};
const {
  JSONSchemaOrJSONReferenceVisitor: Nm
} = Yt.visitors;
class km extends Nm {
  ObjectElement(e) {
    const r = Nm.prototype.enter.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
}
let HU = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ba(), this.specPath = U(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
class qU extends _(z, T) {
  constructor(e) {
    super(e), this.element = new qu(), this.specPath = U(["value"]);
  }
}
let GU = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Za(), this.specPath = U(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
}, zU = class extends Fp {
  constructor(e) {
    super(e), this.element = new Iu();
  }
}, KU = class extends rc {
  constructor(e) {
    super(e), this.element = new Fu();
  }
}, WU = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new vo(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
}, JU = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new $u(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(ec).forEach((n, s) => {
      n.setMetaProperty("http-status-code", S(s));
    }), r;
  }
}, YU = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Ou(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
}, XU = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Au(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
class QU extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Pu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
let ZU = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new ju(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.filter(Bn).forEach((n, s) => {
      n.setMetaProperty("header-name", S(s));
    }), r;
  }
};
class e4 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Tu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
let t4 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new _u(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}, r4 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Ru(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
}, n4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new qs(), this.specPath = U(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return J(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
class s4 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
let i4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Gs(), this.specPath = U(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
}, o4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ua(), this.specPath = U(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return Z(this.element.headers) && this.element.headers.filter(Bn).forEach((n, s) => {
      n.setMetaProperty("header-name", S(s));
    }), r;
  }
}, a4 = class extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Vu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!Bn(n)) return;
      const i = S(s);
      n.setMetaProperty("headerName", i);
    }), r;
  }
}, c4 = class extends _(En, T) {
  constructor(e) {
    super(e), this.element = new Zs(), this.specPath = U(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = Ut;
  }
  ObjectElement(e) {
    const r = En.prototype.ObjectElement.call(this, e);
    return this.element.filter(Ip).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", F(s));
    }), r;
  }
}, l4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ti(), this.specPath = U(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return Z(this.element.contentProp) && this.element.contentProp.filter(tc).forEach((n, s) => {
      n.setMetaProperty("media-type", S(s));
    }), r;
  }
}, u4 = class extends rc {
  constructor(e) {
    super(e), this.element = new Nu();
  }
}, f4 = class extends _(En, T) {
  constructor(e) {
    super(e), this.element = new Bs(), this.specPath = U(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(Ip).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", S(s));
    }), r;
  }
}, p4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new ri(), this.specPath = U(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return Z(this.element.contentProp) && this.element.contentProp.filter(tc).forEach((n, s) => {
      n.setMetaProperty("media-type", S(s));
    }), Z(this.element.headers) && this.element.headers.filter(Bn).forEach((n, s) => {
      n.setMetaProperty("header-name", S(s));
    }), r;
  }
};
class h4 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Bu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!Bn(n)) return;
      const i = S(s);
      n.setMetaProperty("header-name", i);
    }), r;
  }
}
class d4 extends rc {
  constructor(e) {
    super(e), this.element = new Uu();
  }
}
class m4 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Hu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
class Lm extends _(Y, En) {
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
      this.ignoredFields = [...s, ...eC(r.keys(), i)], Y.prototype.ObjectElement.call(this, r), this.specPath = this.specPathPatternedFields, this.ignoredFields = i, En.prototype.ObjectElement.call(this, r);
    } catch (i) {
      throw this.specPath = n, i;
    }
    return ee;
  }
}
let y4 = class extends _(Lm, T) {
  constructor(e) {
    super(e), this.element = new ni(), this.specPathFixedFields = U(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${PC(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = Lm.prototype.ObjectElement.call(this, e);
    return this.element.filter(ce).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(ec).forEach((n, s) => {
      const i = F(s);
      this.fieldPatternPredicate(S(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
class v4 extends _(Pt, T) {
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
    const r = Pt.prototype.enter.call(this, e);
    return ce(this.element) ? this.element.setMetaProperty("referenced-element", "response") : ec(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
let g4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Xs(), this.specPath = U(["document", "objects", "Operation"]);
  }
}, b4 = class extends T {
  constructor(e) {
    super(e), this.element = new Mu();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(F(e)), ee;
  }
}, Ex = class extends _(He, T) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      ce(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}, x4 = class extends Ex {
  constructor(e) {
    super(e), this.element = new bo();
  }
}, w4 = class extends Pt {
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
    const r = Pt.prototype.enter.call(this, e);
    return ce(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
class E4 extends _(z, T) {
  constructor(r) {
    super(r);
    x(this, "specPath");
    this.element = new Du(), this.specPath = (n) => fe(n) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(r) {
    const n = z.prototype.ObjectElement.call(this, r);
    return this.element.filter(ce).forEach((s) => {
      s.setMetaProperty("referenced-element", "callback");
    }), n;
  }
}
class S4 extends _(He, T) {
  constructor(e) {
    super(e), this.element = new xo();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = Z(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
let $4 = class extends Cp {
  constructor(e) {
    super(e), this.element = new wo();
  }
}, O4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Qs(), this.specPath = U(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = Y.prototype.ObjectElement.call(this, e);
    return this.element.filter(xx).forEach((n, s) => {
      const i = F(s);
      i.content = S(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), J(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
class A4 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class P4 extends Cp {
  constructor(e) {
    super(e), this.element = new go();
  }
}
class j4 extends Ex {
  constructor(e) {
    super(e), this.element = new Cu();
  }
}
let T4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new oi(), this.specPath = U(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
}, _4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new qa(), this.specPath = U(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
}, R4 = class extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new Ha(), this.specPath = U(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
class C4 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Gu(), this.specPath = U(["value"]);
  }
}
class I4 extends _(He, T) {
  constructor(e) {
    super(e), this.element = new Eu();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = DB(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
const {
  fixedFields: Se
} = Yt.visitors.document.objects.JSONSchema, w = {
  visitors: {
    value: T,
    document: {
      objects: {
        OpenApi: {
          $visitor: NB,
          fixedFields: {
            openapi: kB,
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
            security: $U,
            tags: I4,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: VB,
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
            version: BB
          }
        },
        Contact: {
          $visitor: UB,
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
          $visitor: HB,
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
          $visitor: WB,
          fixedFields: {
            url: JB,
            description: {
              $ref: "#/visitors/value"
            },
            variables: XB
          }
        },
        ServerVariable: {
          $visitor: YB,
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
          $visitor: OU,
          fixedFields: {
            schemas: WU,
            responses: JU,
            parameters: YU,
            examples: XU,
            requestBodies: QU,
            headers: ZU,
            securitySchemes: e4,
            links: t4,
            callbacks: r4
          }
        },
        Paths: {
          $visitor: c4
        },
        PathItem: {
          $visitor: O4,
          fixedFields: {
            $ref: A4,
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
            servers: P4,
            parameters: j4
          }
        },
        Operation: {
          $visitor: g4,
          fixedFields: {
            tags: b4,
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
            parameters: x4,
            requestBody: w4,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: E4,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: S4,
            servers: $4
          }
        },
        ExternalDocumentation: {
          $visitor: i4,
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
          $visitor: TU,
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
            schema: _U,
            example: {
              $ref: "#/visitors/value"
            },
            examples: zU,
            content: KU
          }
        },
        RequestBody: {
          $visitor: l4,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: u4,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: QB,
          fixedFields: {
            schema: xU,
            example: {
              $ref: "#/visitors/value"
            },
            examples: wU,
            encoding: EU
          }
        },
        Encoding: {
          $visitor: o4,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: a4,
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
          $visitor: y4,
          fixedFields: {
            default: v4
          }
        },
        Response: {
          $visitor: p4,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: h4,
            content: d4,
            links: m4
          }
        },
        Callback: {
          $visitor: f4
        },
        Example: {
          $visitor: n4,
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
            externalValue: s4
          }
        },
        Link: {
          $visitor: qB,
          fixedFields: {
            operationRef: GB,
            operationId: zB,
            parameters: KB,
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
          $visitor: RU,
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
            schema: CU,
            example: {
              $ref: "#/visitors/value"
            },
            examples: IU,
            content: FU
          }
        },
        Tag: {
          $visitor: AU,
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
          $visitor: PU,
          fixedFields: {
            $ref: jU
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: MU,
          fixedFields: {
            // the following properties are taken directly from the JSON Schema definition and follow the same specifications
            title: Se.title,
            multipleOf: Se.multipleOf,
            maximum: Se.maximum,
            exclusiveMaximum: Se.exclusiveMaximum,
            minimum: Se.minimum,
            exclusiveMinimum: Se.exclusiveMinimum,
            maxLength: Se.maxLength,
            minLength: Se.minLength,
            pattern: Se.pattern,
            maxItems: Se.maxItems,
            minItems: Se.minItems,
            uniqueItems: Se.uniqueItems,
            maxProperties: Se.maxProperties,
            minProperties: Se.minProperties,
            required: Se.required,
            enum: Se.enum,
            // the following properties are taken from the JSON Schema definition but their definitions were adjusted to the OpenAPI Specification
            type: UU,
            allOf: DU,
            anyOf: NU,
            oneOf: kU,
            not: km,
            items: LU,
            properties: VU,
            additionalProperties: km,
            description: Se.description,
            format: Se.format,
            default: Se.default,
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
          $visitor: HU,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: qU
          }
        },
        XML: {
          $visitor: GU,
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
          $visitor: T4,
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
          $visitor: _4,
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
          $visitor: R4,
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
            scopes: C4
          }
        },
        SecurityRequirement: {
          $visitor: SU
        }
      },
      extension: {
        $visitor: LB
      }
    }
  }
}, F4 = () => {
  const t = Ns(CB);
  return {
    predicates: {
      ...bU,
      isElement: Ae,
      isStringElement: J,
      isArrayElement: Ue,
      isObjectElement: Z,
      isMemberElement: dt,
      includesClasses: Ia,
      hasElementSourceMap: Ds
    },
    namespace: t
  };
}, M4 = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = gp(t), s = Da(w), i = ze(e, s), o = new i({
    specObj: s
  });
  return ke(n, o), Nn(o.element, r, {
    toolboxCreator: F4,
    visitorOptions: {
      keyMap: FB,
      nodeTypeGetter: IB
    }
  });
}, re = (t) => (e, r = {}) => M4(e, {
  specPath: t,
  ...r
});
Bs.refract = re(["visitors", "document", "objects", "Callback", "$visitor"]);
Us.refract = re(["visitors", "document", "objects", "Components", "$visitor"]);
Hs.refract = re(["visitors", "document", "objects", "Contact", "$visitor"]);
qs.refract = re(["visitors", "document", "objects", "Example", "$visitor"]);
Ba.refract = re(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Ua.refract = re(["visitors", "document", "objects", "Encoding", "$visitor"]);
Gs.refract = re(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Ln.refract = re(["visitors", "document", "objects", "Header", "$visitor"]);
zs.refract = re(["visitors", "document", "objects", "Info", "$visitor"]);
Ks.refract = re(["visitors", "document", "objects", "License", "$visitor"]);
Ws.refract = re(["visitors", "document", "objects", "Link", "$visitor"]);
Js.refract = re(["visitors", "document", "objects", "MediaType", "$visitor"]);
Ha.refract = re(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
qa.refract = re(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Ys.refract = re(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
Ga.refract = re(["visitors", "document", "objects", "OpenApi", "$visitor"]);
Xs.refract = re(["visitors", "document", "objects", "Operation", "$visitor"]);
Vn.refract = re(["visitors", "document", "objects", "Parameter", "$visitor"]);
Qs.refract = re(["visitors", "document", "objects", "PathItem", "$visitor"]);
Zs.refract = re(["visitors", "document", "objects", "Paths", "$visitor"]);
ei.refract = re(["visitors", "document", "objects", "Reference", "$visitor"]);
ti.refract = re(["visitors", "document", "objects", "RequestBody", "$visitor"]);
ri.refract = re(["visitors", "document", "objects", "Response", "$visitor"]);
ni.refract = re(["visitors", "document", "objects", "Responses", "$visitor"]);
Xa.refract = re(["visitors", "document", "objects", "Schema", "$visitor"]);
ii.refract = re(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
oi.refract = re(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
ai.refract = re(["visitors", "document", "objects", "Server", "$visitor"]);
ci.refract = re(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Qa.refract = re(["visitors", "document", "objects", "Tag", "$visitor"]);
Za.refract = re(["visitors", "document", "objects", "XML", "$visitor"]);
class nc extends Bs {
}
class sc extends Us {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class ic extends Hs {
}
class Mp extends Ba {
}
class Dp extends Ua {
}
class oc extends qs {
}
class ac extends Gs {
}
class cc extends Ln {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class lc extends zs {
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
const ra = class ra extends Dt {
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
};
x(ra, "default", new ra("https://spec.openapis.org/oas/3.1/dialect/base"));
let jr = ra;
class uc extends Ks {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class fc extends Ws {
}
class pc extends Js {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Np extends Ha {
}
class kp extends qa {
}
class Lp extends Ys {
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
class hc extends Vn {
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
class dc extends Zs {
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
class mc extends ti {
}
let yc = class extends ri {
};
class vc extends ni {
}
class Lr extends I {
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
class gc extends ii {
}
class bc extends oi {
}
class xc extends ai {
}
class wc extends ci {
}
class Vp extends Qa {
}
class Bp extends Za {
}
const Up = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", nc), e.register("components", sc), e.register("contact", ic), e.register("discriminator", Mp), e.register("encoding", Dp), e.register("example", oc), e.register("externalDocumentation", ac), e.register("header", cc), e.register("info", lc), e.register("jsonSchemaDialect", jr), e.register("license", uc), e.register("link", fc), e.register("mediaType", pc), e.register("oAuthFlow", Np), e.register("oAuthFlows", kp), e.register("openapi", Lp), e.register("openApi3_1", pr), e.register("operation", li), e.register("parameter", hc), e.register("pathItem", ir), e.register("paths", dc), e.register("reference", hr), e.register("requestBody", mc), e.register("response", yc), e.register("responses", vc), e.register("schema", Lr), e.register("securityRequirement", gc), e.register("securityScheme", bc), e.register("server", xc), e.register("serverVariable", wc), e.register("tag", Vp), e.register("xml", Bp), e;
  }
}, na = class na extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(na.primaryClass);
  }
};
x(na, "primaryClass", "components-path-items");
let Ju = na;
const sa = class sa extends I {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(sa.primaryClass);
  }
};
x(sa, "primaryClass", "webhooks");
let Yu = sa;
const lt = (t) => {
  if (Ae(t))
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
  ...Dn
};
class Un {
  constructor(e, r, n) {
    x(this, "internalStore");
    this.storageElement = e, this.storageField = r, this.storageSubField = n;
  }
  get store() {
    if (!this.internalStore) {
      let e = this.storageElement.get(this.storageField);
      Z(e) || (e = new I(), this.storageElement.set(this.storageField, e));
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
const D4 = ({
  storageField: t = "x-normalized"
} = {}) => (e) => {
  const {
    predicates: r,
    ancestorLineageToJSONPointer: n
  } = e, s = (a, c) => !r.isParameterElement(a) || !r.isParameterElement(c) || !r.isStringElement(a.name) || !r.isStringElement(a.in) || !r.isStringElement(c.name) || !r.isStringElement(c.in) ? !1 : S(a.name) === S(c.name) && S(a.in) === S(c.in), i = [];
  let o;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(a) {
          o = new Un(a, t, "parameters");
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
            parameters: h
          } = a;
          r.isArrayElement(h) ? i.push([...h.content]) : i.push([]);
        },
        leave() {
          i.pop();
        }
      },
      OperationElement: {
        leave(a, c, l, f, u) {
          const h = va(i);
          if (!Array.isArray(h) || h.length === 0)
            return;
          const p = n([...u, l, a]);
          if (o.includes(p))
            return;
          const m = Tg([], ["parameters", "content"], a), d = FC(s, [...m, ...h]);
          a.parameters = new bo(d), o.append(p);
        }
      }
    }
  };
}, N4 = ({
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
          i = new Un(o, t, "security-requirements"), r.isArrayElement(o.security) && (s = o.security);
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
            o.security = new xo((m = s) === null || m === void 0 ? void 0 : m.content), i.append(u);
          }
        }
      }
    }
  };
}, k4 = ({
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
          a || !c ? o.servers = new gs([f]) : c && l && o.servers.push(f), i = new Un(o, t, "servers");
        },
        leave() {
          i = void 0;
        }
      },
      PathItemElement(o, a, c, l, f) {
        if (f.some(s.isComponentsElement) || !f.some(s.isOpenApi3_1Element)) return;
        const u = n([...f, c, o]);
        if (i.includes(u))
          return;
        const h = f.find(s.isOpenApi3_1Element), p = typeof o.servers > "u", m = s.isArrayElement(o.servers), d = m && o.servers.length === 0;
        if (s.isOpenApi3_1Element(h)) {
          var y;
          const g = (y = h.servers) === null || y === void 0 ? void 0 : y.content, v = g ?? [];
          p || !m ? o.servers = new go(v) : m && d && v.forEach((b) => {
            o.servers.push(b);
          }), i.append(u);
        }
      },
      OperationElement(o, a, c, l, f) {
        if (f.some(s.isComponentsElement) || !f.some(s.isOpenApi3_1Element)) return;
        const u = n([...f, c, o]);
        if (i.includes(u))
          return;
        const h = [...f].reverse().find(s.isPathItemElement), p = typeof o.servers > "u", m = s.isArrayElement(o.servers), d = m && o.servers.length === 0;
        if (s.isPathItemElement(h)) {
          var y;
          const g = (y = h.servers) === null || y === void 0 ? void 0 : y.content, v = g ?? [];
          p || !m ? o.servers = new wo(v) : m && d && v.forEach((b) => {
            o.servers.push(b);
          }), i.append(u);
        }
      }
    }
  };
}, Xu = (t) => t.replace(/\s/g, ""), Qu = (t) => t.replace(/\W/gi, "_"), L4 = (t, e) => {
  const r = Qu(Xu(e.toLowerCase())), n = Qu(Xu(t));
  return `${r}${n}`;
}, V4 = (t, e, r) => {
  const n = Xu(t);
  return n.length > 0 ? Qu(n) : L4(e, r);
}, B4 = ({
  storageField: t = "x-normalized",
  operationIdNormalizer: e = V4
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
          l = new Un(f, t, "operation-ids");
        },
        leave() {
          const f = yC((u) => S(u.operationId), a);
          Object.entries(f).forEach(([u, h]) => {
            Array.isArray(h) && (h.length <= 1 || h.forEach((p, m) => {
              const d = `${u}${m + 1}`;
              p.operationId = new i.elements.String(d);
            }));
          }), c.forEach((u) => {
            if (typeof u.operationId > "u") return;
            const h = String(S(u.operationId)), p = a.find((m) => S(m.meta.get("originalOperationId")) === h);
            typeof p > "u" || (u.operationId = F.safe(p.operationId), u.meta.set("originalOperationId", h), u.set("__originalOperationId", h));
          }), a.length = 0, c.length = 0, l = void 0;
        }
      },
      PathItemElement: {
        enter(f) {
          const u = yn("path", S(f.meta.get("path")));
          o.push(u);
        },
        leave() {
          o.pop();
        }
      },
      OperationElement: {
        enter(f, u, h, p, m) {
          if (typeof f.operationId > "u") return;
          const d = s([...m, h, f]);
          if (l.includes(d))
            return;
          const y = String(S(f.operationId)), g = va(o), v = yn("method", S(f.meta.get("http-method"))), b = e(y, g, v);
          y !== b && (f.operationId = new i.elements.String(b), f.set("__originalOperationId", y), f.meta.set("originalOperationId", y), a.push(f), l.append(d));
        }
      },
      LinkElement: {
        leave(f) {
          n.isLinkElement(f) && (typeof f.operationId > "u" || c.push(f));
        }
      }
    }
  };
}, U4 = ({
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
          s = new Un(i, t, "parameter-examples");
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
          const h = n([...l, a, i]);
          if (!s.includes(h)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const p = i.examples.map((m) => F.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", p), s.append(h)), typeof i.schema.example < "u" && (i.schema.set("example", p[0]), s.append(h));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [F(i.example)]), s.append(h)), typeof i.schema.example < "u" && (i.schema.set("example", F(i.example)), s.append(h)));
          }
        }
      }
    }
  };
}, H4 = ({
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
          s = new Un(i, t, "header-examples");
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
          const h = n([...l, a, i]);
          if (!s.includes(h)) {
            if (typeof i.examples < "u" && r.isObjectElement(i.examples)) {
              const p = i.examples.map((m) => F.safe(m.value));
              typeof i.schema.examples < "u" && (i.schema.set("examples", p), s.append(h)), typeof i.schema.example < "u" && (i.schema.set("example", p[0]), s.append(h));
              return;
            }
            typeof i.example < "u" && (typeof i.schema.examples < "u" && (i.schema.set("examples", [F(i.example)]), s.append(h)), typeof i.schema.example < "u" && (i.schema.set("example", F(i.example)), s.append(h)));
          }
        }
      }
    }
  };
}, q4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof nc || t(n) && e("callback", n) && r("object", n)), G4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof sc || t(n) && e("components", n) && r("object", n)), z4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ic || t(n) && e("contact", n) && r("object", n)), K4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof oc || t(n) && e("example", n) && r("object", n)), W4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ac || t(n) && e("externalDocumentation", n) && r("object", n)), J4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof cc || t(n) && e("header", n) && r("object", n)), Y4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof lc || t(n) && e("info", n) && r("object", n)), Sx = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof jr || t(n) && e("jsonSchemaDialect", n) && r("string", n)), X4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof uc || t(n) && e("license", n) && r("object", n)), Q4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fc || t(n) && e("link", n) && r("object", n)), Z4 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Lp || t(n) && e("openapi", n) && r("string", n)), $x = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof pr || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), Ox = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof li || t(n) && e("operation", n) && r("object", n)), e6 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hc || t(n) && e("parameter", n) && r("object", n)), Tr = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ir || t(n) && e("pathItem", n) && r("object", n)), t6 = (t) => {
  if (!Tr(t) || !J(t.$ref))
    return !1;
  const e = S(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, r6 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof dc || t(n) && e("paths", n) && r("object", n)), Vr = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hr || t(n) && e("reference", n) && r("object", n)), n6 = (t) => {
  if (!Vr(t) || !J(t.$ref))
    return !1;
  const e = S(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, s6 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof mc || t(n) && e("requestBody", n) && r("object", n)), i6 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof yc || t(n) && e("response", n) && r("object", n)), o6 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vc || t(n) && e("responses", n) && r("object", n)), Lt = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Lr || t(n) && e("schema", n) && r("object", n)), Hp = (t) => Ms(t) && t.classes.includes("boolean-json-schema"), a6 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gc || t(n) && e("securityRequirement", n) && r("object", n)), c6 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof bc || t(n) && e("securityScheme", n) && r("object", n)), l6 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xc || t(n) && e("server", n) && r("object", n)), u6 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof wc || t(n) && e("serverVariable", n) && r("object", n)), f6 = N(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof pc || t(n) && e("mediaType", n) && r("object", n)), p6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: Hp,
  isCallbackElement: q4,
  isComponentsElement: G4,
  isContactElement: z4,
  isExampleElement: K4,
  isExternalDocumentationElement: W4,
  isHeaderElement: J4,
  isInfoElement: Y4,
  isJsonSchemaDialectElement: Sx,
  isLicenseElement: X4,
  isLinkElement: Q4,
  isMediaTypeElement: f6,
  isOpenApi3_1Element: $x,
  isOpenapiElement: Z4,
  isOperationElement: Ox,
  isParameterElement: e6,
  isPathItemElement: Tr,
  isPathItemElementExternal: t6,
  isPathsElement: r6,
  isReferenceElement: Vr,
  isReferenceElementExternal: n6,
  isRequestBodyElement: s6,
  isResponseElement: i6,
  isResponsesElement: o6,
  isSchemaElement: Lt,
  isSecurityRequirementElement: a6,
  isSecuritySchemeElement: c6,
  isServerElement: l6,
  isServerVariableElement: u6
}, Symbol.toStringTag, { value: "Module" })), h6 = (t) => {
  const e = t.reduce((r, n, s) => {
    if (dt(n)) {
      const i = String(S(n.key));
      r.push(i);
    } else if (Ue(t[s - 2])) {
      const i = String(t[s - 2].content.indexOf(n));
      r.push(i);
    }
    return r;
  }, []);
  return dx(e);
}, Ax = () => {
  const t = Ns(Up);
  return {
    predicates: {
      ...p6,
      isElement: Ae,
      isStringElement: J,
      isArrayElement: Ue,
      isObjectElement: Z,
      isMemberElement: dt,
      isServersElement: wx,
      includesClasses: Ia,
      hasElementSourceMap: Ds
    },
    ancestorLineageToJSONPointer: h6,
    namespace: t
  };
};
class d6 extends _(Y, T) {
  constructor(e) {
    super(e), this.element = new pr(), this.specPath = U(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
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
          $visitor: m6
        }
      }
    }
  }
} = w;
class y6 extends m6 {
  constructor(e) {
    super(e), this.element = new lc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Contact: {
          $visitor: v6
        }
      }
    }
  }
} = w;
class g6 extends v6 {
  constructor(e) {
    super(e), this.element = new ic();
  }
}
const {
  visitors: {
    document: {
      objects: {
        License: {
          $visitor: b6
        }
      }
    }
  }
} = w;
class x6 extends b6 {
  constructor(e) {
    super(e), this.element = new uc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Link: {
          $visitor: w6
        }
      }
    }
  }
} = w;
class E6 extends w6 {
  constructor(e) {
    super(e), this.element = new fc();
  }
}
class S6 extends _(He, T) {
  StringElement(e) {
    const r = new jr(S(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, ee;
  }
}
const {
  visitors: {
    document: {
      objects: {
        Server: {
          $visitor: $6
        }
      }
    }
  }
} = w;
class O6 extends $6 {
  constructor(e) {
    super(e), this.element = new xc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        ServerVariable: {
          $visitor: A6
        }
      }
    }
  }
} = w;
class P6 extends A6 {
  constructor(e) {
    super(e), this.element = new wc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        MediaType: {
          $visitor: j6
        }
      }
    }
  }
} = w;
class T6 extends j6 {
  constructor(e) {
    super(e), this.element = new pc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        SecurityRequirement: {
          $visitor: _6
        }
      }
    }
  }
} = w;
class R6 extends _6 {
  constructor(e) {
    super(e), this.element = new gc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Components: {
          $visitor: C6
        }
      }
    }
  }
} = w;
class I6 extends C6 {
  constructor(e) {
    super(e), this.element = new sc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Tag: {
          $visitor: F6
        }
      }
    }
  }
} = w;
class M6 extends F6 {
  constructor(e) {
    super(e), this.element = new Vp();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Reference: {
          $visitor: D6
        }
      }
    }
  }
} = w;
class N6 extends D6 {
  constructor(e) {
    super(e), this.element = new hr();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Parameter: {
          $visitor: k6
        }
      }
    }
  }
} = w;
class L6 extends k6 {
  constructor(e) {
    super(e), this.element = new hc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Header: {
          $visitor: V6
        }
      }
    }
  }
} = w;
class B6 extends V6 {
  constructor(e) {
    super(e), this.element = new cc();
  }
}
class Xt {
  constructor({
    parent: e
  }) {
    x(this, "parent");
    this.parent = e;
  }
}
class U6 extends _(Y, Xt, T) {
  constructor(e) {
    super(e), this.element = new Lr(), this.specPath = U(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = jr.default, this.passingOptionsNames.push("parent");
  }
  ObjectElement(e) {
    this.handle$schema(e), this.handle$id(e), this.parent = this.element;
    const r = Y.prototype.ObjectElement.call(this, e);
    return J(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), r;
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
    Sx(this.openApiSemanticElement.jsonSchemaDialect) ? e = S(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && J(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = S(this.openApiGenericElement.get("jsonSchemaDialect")) : e = S(this.jsonSchemaDefaultDialect), e;
  }
  handle$schema(e) {
    if (ur(this.parent) && !J(e.get("$schema")))
      this.element.setMetaProperty("inherited$schema", this.getJsonSchemaDialect());
    else if (Lt(this.parent) && !J(e.get("$schema"))) {
      const r = yn(S(this.parent.meta.get("inherited$schema")), S(this.parent.$schema));
      this.element.setMetaProperty("inherited$schema", r);
    }
  }
  handle$id(e) {
    const r = this.parent !== void 0 ? F(this.parent.getMetaProperty("inherited$id", [])) : new ae(), n = S(e.get("$id"));
    op(n) && r.push(n), this.element.setMetaProperty("inherited$id", r);
  }
}
class H6 extends T {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
class q6 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
class G6 extends _(z, Xt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-$defs"), this.specPath = U(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
let z6 = class extends _(He, Xt, T) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-allOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Z(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
};
class K6 extends _(He, Xt, T) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-anyOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Z(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
class W6 extends _(He, Xt, T) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-oneOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Z(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
class J6 extends _(z, Xt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = U(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
class Y6 extends _(He, Xt, T) {
  constructor(e) {
    super(e), this.element = new ae(), this.element.classes.push("json-schema-prefixItems"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (Z(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = F(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), ee;
  }
}
class X6 extends _(z, Xt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-properties"), this.specPath = U(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
class Q6 extends _(z, Xt, T) {
  constructor(e) {
    super(e), this.element = new I(), this.element.classes.push("json-schema-patternProperties"), this.specPath = U(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
class Z6 extends T {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}
class e5 extends T {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
class t5 extends T {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
class r5 extends T {
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
          $visitor: n5
        }
      }
    }
  }
} = w;
class s5 extends n5 {
  constructor(e) {
    super(e), this.element = new Mp(), this.canSupportSpecificationExtensions = !0;
  }
}
const {
  visitors: {
    document: {
      objects: {
        XML: {
          $visitor: i5
        }
      }
    }
  }
} = w;
class o5 extends i5 {
  constructor(e) {
    super(e), this.element = new Bp();
  }
}
class a5 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new vo(), this.specPath = U(["document", "objects", "Schema"]);
  }
}
class c5 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Ju(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(Vr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const {
  visitors: {
    document: {
      objects: {
        Example: {
          $visitor: l5
        }
      }
    }
  }
} = w;
class u5 extends l5 {
  constructor(e) {
    super(e), this.element = new oc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        ExternalDocumentation: {
          $visitor: f5
        }
      }
    }
  }
} = w;
class p5 extends f5 {
  constructor(e) {
    super(e), this.element = new ac();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Encoding: {
          $visitor: h5
        }
      }
    }
  }
} = w;
class d5 extends h5 {
  constructor(e) {
    super(e), this.element = new Dp();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Paths: {
          $visitor: m5
        }
      }
    }
  }
} = w;
class y5 extends m5 {
  constructor(e) {
    super(e), this.element = new dc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        RequestBody: {
          $visitor: v5
        }
      }
    }
  }
} = w;
class g5 extends v5 {
  constructor(e) {
    super(e), this.element = new mc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Callback: {
          $visitor: Vm
        }
      }
    }
  }
} = w;
class b5 extends Vm {
  constructor(e) {
    super(e), this.element = new nc(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = Vm.prototype.ObjectElement.call(this, e);
    return this.element.filter(Vr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const {
  visitors: {
    document: {
      objects: {
        Response: {
          $visitor: x5
        }
      }
    }
  }
} = w;
class w5 extends x5 {
  constructor(e) {
    super(e), this.element = new yc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Responses: {
          $visitor: E5
        }
      }
    }
  }
} = w;
class S5 extends E5 {
  constructor(e) {
    super(e), this.element = new vc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        Operation: {
          $visitor: $5
        }
      }
    }
  }
} = w;
class O5 extends $5 {
  constructor(e) {
    super(e), this.element = new li();
  }
}
const {
  visitors: {
    document: {
      objects: {
        PathItem: {
          $visitor: A5
        }
      }
    }
  }
} = w;
class P5 extends A5 {
  constructor(e) {
    super(e), this.element = new ir();
  }
}
const {
  visitors: {
    document: {
      objects: {
        SecurityScheme: {
          $visitor: j5
        }
      }
    }
  }
} = w;
class T5 extends j5 {
  constructor(e) {
    super(e), this.element = new bc();
  }
}
const {
  visitors: {
    document: {
      objects: {
        OAuthFlows: {
          $visitor: _5
        }
      }
    }
  }
} = w;
class R5 extends _5 {
  constructor(e) {
    super(e), this.element = new kp();
  }
}
const {
  visitors: {
    document: {
      objects: {
        OAuthFlow: {
          $visitor: C5
        }
      }
    }
  }
} = w;
class I5 extends C5 {
  constructor(e) {
    super(e), this.element = new Np();
  }
}
class F5 extends _(z, T) {
  constructor(e) {
    super(e), this.element = new Yu(), this.specPath = (r) => fe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = z.prototype.ObjectElement.call(this, e);
    return this.element.filter(Vr).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter(Tr).forEach((n, s) => {
      n.setMetaProperty("webhook-name", S(s));
    }), r;
  }
}
const M5 = {
  visitors: {
    value: w.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: d6,
          fixedFields: {
            openapi: w.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: S6,
            servers: w.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: F5,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: w.visitors.document.objects.OpenApi.fixedFields.security,
            tags: w.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: y6,
          fixedFields: {
            title: w.visitors.document.objects.Info.fixedFields.title,
            description: w.visitors.document.objects.Info.fixedFields.description,
            summary: {
              $ref: "#/visitors/value"
            },
            termsOfService: w.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: w.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: g6,
          fixedFields: {
            name: w.visitors.document.objects.Contact.fixedFields.name,
            url: w.visitors.document.objects.Contact.fixedFields.url,
            email: w.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: x6,
          fixedFields: {
            name: w.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: w.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: O6,
          fixedFields: {
            url: w.visitors.document.objects.Server.fixedFields.url,
            description: w.visitors.document.objects.Server.fixedFields.description,
            variables: w.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: P6,
          fixedFields: {
            enum: w.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: w.visitors.document.objects.ServerVariable.fixedFields.default,
            description: w.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: I6,
          fixedFields: {
            schemas: a5,
            responses: w.visitors.document.objects.Components.fixedFields.responses,
            parameters: w.visitors.document.objects.Components.fixedFields.parameters,
            examples: w.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: w.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: w.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: w.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: w.visitors.document.objects.Components.fixedFields.links,
            callbacks: w.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: c5
          }
        },
        Paths: {
          $visitor: y5
        },
        PathItem: {
          $visitor: P5,
          fixedFields: {
            $ref: w.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: w.visitors.document.objects.PathItem.fixedFields.summary,
            description: w.visitors.document.objects.PathItem.fixedFields.description,
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
            servers: w.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: w.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: O5,
          fixedFields: {
            tags: w.visitors.document.objects.Operation.fixedFields.tags,
            summary: w.visitors.document.objects.Operation.fixedFields.summary,
            description: w.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: w.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: w.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: w.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: w.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: w.visitors.document.objects.Operation.fixedFields.deprecated,
            security: w.visitors.document.objects.Operation.fixedFields.security,
            servers: w.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: p5,
          fixedFields: {
            description: w.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: w.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: L6,
          fixedFields: {
            name: w.visitors.document.objects.Parameter.fixedFields.name,
            in: w.visitors.document.objects.Parameter.fixedFields.in,
            description: w.visitors.document.objects.Parameter.fixedFields.description,
            required: w.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: w.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: w.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: w.visitors.document.objects.Parameter.fixedFields.style,
            explode: w.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: w.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: w.visitors.document.objects.Parameter.fixedFields.example,
            examples: w.visitors.document.objects.Parameter.fixedFields.examples,
            content: w.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: g5,
          fixedFields: {
            description: w.visitors.document.objects.RequestBody.fixedFields.description,
            content: w.visitors.document.objects.RequestBody.fixedFields.content,
            required: w.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: T6,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: w.visitors.document.objects.MediaType.fixedFields.example,
            examples: w.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: w.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: d5,
          fixedFields: {
            contentType: w.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: w.visitors.document.objects.Encoding.fixedFields.headers,
            style: w.visitors.document.objects.Encoding.fixedFields.style,
            explode: w.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: w.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: S5,
          fixedFields: {
            default: w.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: w5,
          fixedFields: {
            description: w.visitors.document.objects.Response.fixedFields.description,
            headers: w.visitors.document.objects.Response.fixedFields.headers,
            content: w.visitors.document.objects.Response.fixedFields.content,
            links: w.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: b5
        },
        Example: {
          $visitor: u5,
          fixedFields: {
            summary: w.visitors.document.objects.Example.fixedFields.summary,
            description: w.visitors.document.objects.Example.fixedFields.description,
            value: w.visitors.document.objects.Example.fixedFields.value,
            externalValue: w.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: E6,
          fixedFields: {
            operationRef: w.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: w.visitors.document.objects.Link.fixedFields.operationId,
            parameters: w.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: w.visitors.document.objects.Link.fixedFields.requestBody,
            description: w.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: B6,
          fixedFields: {
            description: w.visitors.document.objects.Header.fixedFields.description,
            required: w.visitors.document.objects.Header.fixedFields.required,
            deprecated: w.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: w.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: w.visitors.document.objects.Header.fixedFields.style,
            explode: w.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: w.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: w.visitors.document.objects.Header.fixedFields.example,
            examples: w.visitors.document.objects.Header.fixedFields.examples,
            content: w.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: M6,
          fixedFields: {
            name: w.visitors.document.objects.Tag.fixedFields.name,
            description: w.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: N6,
          fixedFields: {
            $ref: w.visitors.document.objects.Reference.fixedFields.$ref,
            summary: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            }
          }
        },
        Schema: {
          $visitor: U6,
          fixedFields: {
            // core vocabulary
            $schema: {
              $ref: "#/visitors/value"
            },
            $vocabulary: H6,
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
            $ref: q6,
            $defs: G6,
            $comment: {
              $ref: "#/visitors/value"
            },
            // applicator vocabulary
            allOf: z6,
            anyOf: K6,
            oneOf: W6,
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
            dependentSchemas: J6,
            prefixItems: Y6,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: X6,
            patternProperties: Q6,
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
            type: Z6,
            enum: e5,
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
            dependentRequired: t5,
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
            examples: r5,
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
          $visitor: s5,
          fixedFields: {
            propertyName: w.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: w.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: o5,
          fixedFields: {
            name: w.visitors.document.objects.XML.fixedFields.name,
            namespace: w.visitors.document.objects.XML.fixedFields.namespace,
            prefix: w.visitors.document.objects.XML.fixedFields.prefix,
            attribute: w.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: w.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: T5,
          fixedFields: {
            type: w.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: w.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: w.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: w.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: w.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: w.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: w.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: R5,
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
          $visitor: I5,
          fixedFields: {
            authorizationUrl: w.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: w.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: w.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: w.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: R6
        }
      },
      extension: {
        $visitor: w.visitors.document.extension.$visitor
      }
    }
  }
}, D5 = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = gp(t), s = Da(M5), i = ze(e, s), o = new i({
    specObj: s
  });
  return ke(n, o), Nn(o.element, r, {
    toolboxCreator: Ax,
    visitorOptions: {
      keyMap: $t,
      nodeTypeGetter: lt
    }
  });
}, te = (t) => (e, r = {}) => D5(e, {
  specPath: t,
  ...r
});
nc.refract = te(["visitors", "document", "objects", "Callback", "$visitor"]);
sc.refract = te(["visitors", "document", "objects", "Components", "$visitor"]);
ic.refract = te(["visitors", "document", "objects", "Contact", "$visitor"]);
oc.refract = te(["visitors", "document", "objects", "Example", "$visitor"]);
Mp.refract = te(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Dp.refract = te(["visitors", "document", "objects", "Encoding", "$visitor"]);
ac.refract = te(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
cc.refract = te(["visitors", "document", "objects", "Header", "$visitor"]);
lc.refract = te(["visitors", "document", "objects", "Info", "$visitor"]);
jr.refract = te(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
uc.refract = te(["visitors", "document", "objects", "License", "$visitor"]);
fc.refract = te(["visitors", "document", "objects", "Link", "$visitor"]);
pc.refract = te(["visitors", "document", "objects", "MediaType", "$visitor"]);
Np.refract = te(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
kp.refract = te(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Lp.refract = te(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
pr.refract = te(["visitors", "document", "objects", "OpenApi", "$visitor"]);
li.refract = te(["visitors", "document", "objects", "Operation", "$visitor"]);
hc.refract = te(["visitors", "document", "objects", "Parameter", "$visitor"]);
ir.refract = te(["visitors", "document", "objects", "PathItem", "$visitor"]);
dc.refract = te(["visitors", "document", "objects", "Paths", "$visitor"]);
hr.refract = te(["visitors", "document", "objects", "Reference", "$visitor"]);
mc.refract = te(["visitors", "document", "objects", "RequestBody", "$visitor"]);
yc.refract = te(["visitors", "document", "objects", "Response", "$visitor"]);
vc.refract = te(["visitors", "document", "objects", "Responses", "$visitor"]);
Lr.refract = te(["visitors", "document", "objects", "Schema", "$visitor"]);
gc.refract = te(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
bc.refract = te(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
xc.refract = te(["visitors", "document", "objects", "Server", "$visitor"]);
wc.refract = te(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Vp.refract = te(["visitors", "document", "objects", "Tag", "$visitor"]);
Bp.refract = te(["visitors", "document", "objects", "XML", "$visitor"]);
class N5 extends Ls {
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
      throw new kt(`Error parsing "${e.uri}"`, {
        cause: r
      });
    }
  }
}
class k5 extends XV {
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
      throw new Kb('"openapi-3-1" dereference strategy is not available.');
    const s = new bn(), i = Kg(r, {
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
const Px = (t) => {
  if (!Z(t) || t.hasKey("$$normalized")) return t;
  const e = [B4({
    operationIdNormalizer: (n, s, i) => Vs({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), D4(), N4(), k4(), U4(), H4()], r = Nn(t, e, {
    toolboxCreator: Ax,
    visitorOptions: {
      keyMap: $t,
      nodeTypeGetter: lt
    }
  });
  return r.set("$$normalized", !0), r;
}, ts = (t) => (e) => {
  if (e != null && e.$$normalized) return e;
  if (ts.cache.has(e)) return ts.cache.get(e);
  const r = pr.refract(e), n = t(r), s = S(n);
  return ts.cache.set(e, s), s;
};
ts.cache = /* @__PURE__ */ new WeakMap();
const {
  AbortController: L5,
  AbortSignal: V5
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = L5);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = V5);
class jx extends YV {
  constructor({
    swaggerHTTPClient: r = pn,
    swaggerHTTPClientConfig: n = {},
    ...s
  } = {}) {
    super({
      ...s,
      name: "http-swagger-client"
    });
    x(this, "swaggerHTTPClient", pn);
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
        userFetch: async (u, h) => {
          let p = await fetch(u, h);
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
      throw new Wg(`Error downloading "${r.uri}"`, {
        cause: f
      });
    } finally {
      clearTimeout(o);
    }
  }
}
class Tx extends Ls {
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
      throw new kt("json-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new ft(), n = e.toString();
    if (this.allowEmpty && n.trim() === "")
      return r;
    try {
      const s = zb(JSON.parse(n));
      return s.classes.push("result"), r.push(s), r;
    } catch (s) {
      throw new kt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class _x extends Ls {
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
    if (!r) return !1;
    if (n) return !0;
    if (!n)
      try {
        return fn.load(e.toString(), {
          schema: qi
        }), !0;
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(e) {
    if (this.sourceMap)
      throw new kt("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
    const r = new ft(), n = e.toString();
    try {
      const s = fn.load(n, {
        schema: qi
      });
      if (this.allowEmpty && typeof s > "u")
        return r;
      const i = zb(s);
      return i.classes.push("result"), r.push(i), r;
    } catch (s) {
      throw new kt(`Error parsing "${e.uri}"`, {
        cause: s
      });
    }
  }
}
class Rx extends Ls {
  constructor(r = {}) {
    super({
      ...r,
      name: "openapi-json-3-1-swagger-client",
      fileExtensions: [".json"],
      mediaTypes: new Rp(...wn.filterByFormat("generic"), ...wn.filterByFormat("json"))
    });
    x(this, "detectionRegExp", /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/);
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
      throw new kt("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new ft(), s = r.toString();
    if (this.allowEmpty && s.trim() === "")
      return n;
    try {
      const i = JSON.parse(s), o = pr.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new kt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
class Cx extends Ls {
  constructor(r = {}) {
    super({
      name: "openapi-yaml-3-1-swagger-client",
      ...r,
      fileExtensions: [".yaml", ".yml"],
      mediaTypes: new Rp(...wn.filterByFormat("generic"), ...wn.filterByFormat("yaml"))
    });
    x(this, "detectionRegExp", /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m);
  }
  async canParse(r) {
    const n = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(r.extension), s = this.mediaTypes.includes(r.mediaType);
    if (!n) return !1;
    if (s) return !0;
    if (!s)
      try {
        const i = r.toString();
        return fn.load(i), this.detectionRegExp.test(i);
      } catch {
        return !1;
      }
    return !1;
  }
  async parse(r) {
    if (this.sourceMap)
      throw new kt("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
    const n = new ft(), s = r.toString();
    try {
      const i = fn.load(s, {
        schema: qi
      });
      if (this.allowEmpty && typeof i > "u")
        return n;
      const o = pr.refract(i, this.refractorOpts);
      return o.classes.push("result"), n.push(o), n;
    } catch (i) {
      throw new kt(`Error parsing "${r.uri}"`, {
        cause: i
      });
    }
  }
}
const Ec = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), Sn = (t) => {
  const e = fp(t);
  return ap("#", e);
}, B5 = (t) => {
  if (!Ec(t))
    throw new t3(t);
  return t;
}, qp = (t, e) => {
  const r = B5(t), n = Ub((s) => Lt(s) && S(s.$anchor) === r, e);
  if (ur(n))
    throw new ZV(`Evaluation failed on token: "${r}"`);
  return n;
}, Ix = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = fp(S(e.$ref)), n = S(e.meta.get("inherited$id"));
  return `${Fr((i, o) => je(i, Is(oe(o))), t, [...n, S(e.$ref)])}${r === "#" ? "" : r}`;
}, U5 = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = S(e.meta.get("inherited$id"));
  return Fr((n, s) => je(n, Is(oe(s))), t, [...r, S(e.$id)]);
}, rs = (t) => {
  if (rs.cache.has(t))
    return rs.cache.get(t);
  const e = Lr.refract(t);
  return rs.cache.set(t, e), e;
};
rs.cache = /* @__PURE__ */ new WeakMap();
const Me = (t) => Ar(t) ? rs(t) : t, Sc = (t, e) => {
  const {
    cache: r
  } = Sc, n = oe(t), s = (c) => Lt(c) && typeof c.$id < "u";
  if (!r.has(e)) {
    const c = FV(s, e);
    r.set(e, Array.from(c));
  }
  const i = r.get(e).find((c) => U5(n, c) === n);
  if (ur(i))
    throw new Op(`Evaluation failed on URI: "${t}"`);
  let o, a;
  return Ec(Sn(t)) ? (o = qp, a = Sn(t)) : (o = ct, a = Qe(t)), o(a, i);
};
Sc.cache = /* @__PURE__ */ new WeakMap();
const El = ke[Symbol.for("nodejs.util.promisify.custom")], _e = new Sp(), vt = (t, e, r, n) => {
  dt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class on {
  constructor({
    reference: e,
    namespace: r,
    options: n,
    indirections: s = [],
    ancestors: i = new bl(),
    refractCache: o = /* @__PURE__ */ new Map()
  }) {
    x(this, "indirections");
    x(this, "namespace");
    x(this, "reference");
    x(this, "options");
    x(this, "ancestors");
    x(this, "refractCache");
    this.indirections = s, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new bl(...i), this.refractCache = o;
  }
  toBaseURI(e) {
    return je(this.reference.uri, Is(oe(e)));
  }
  async toReference(e) {
    if (this.reference.depth >= this.options.resolve.maxDepth)
      throw new r3(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    const r = this.toBaseURI(e), {
      refSet: n
    } = this.reference;
    if (n.has(r))
      return n.find(Rg(r, "uri"));
    const s = await _I(at(r), {
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
    const r = new Set(e.filter(Ae));
    return [new bl(...this.ancestors, r), r];
  }
  async ReferenceElement(e, r, n, s, i, o) {
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), l = this.toBaseURI(S(e.$ref)), f = oe(this.reference.uri) === l, u = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && u)
      return !1;
    const h = await this.toReference(S(e.$ref)), p = je(l, S(e.$ref));
    this.indirections.push(e);
    const m = Qe(p);
    let d = ct(m, h.value.result);
    if (d.id = _e.identify(d), Ar(d)) {
      const R = S(e.meta.get("referenced-element")), $ = `${R}-${S(_e.identify(d))}`;
      this.refractCache.has($) ? d = this.refractCache.get($) : fe(d) ? (d = hr.refract(d), d.setMetaProperty("referenced-element", R), this.refractCache.set($, d)) : (d = this.namespace.getElementClass(R).refract(d), this.refractCache.set($, d));
    }
    if (e === d)
      throw new me("Recursive Reference Object detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new sn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(d)) {
      if (h.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new me("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var y, g;
        const R = new It(d.id, {
          type: "reference",
          uri: h.uri,
          $ref: S(e.$ref)
        }), C = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)(R);
        return o.replaceWith(C, vt), n ? !1 : C;
      }
    }
    const v = oe(h.refSet.rootRef.uri) !== h.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
    if ((u || v || Vr(d) || b) && !a.includesCycle(d)) {
      c.add(e);
      const R = new on({
        reference: h,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      d = await El(d, R, {
        keyMap: $t,
        nodeTypeGetter: lt
      }), c.delete(e);
    }
    this.indirections.pop();
    const E = Ve(d);
    return E.setMetaProperty("id", _e.generateId()), E.setMetaProperty("ref-fields", {
      $ref: S(e.$ref),
      // @ts-ignore
      description: S(e.description),
      // @ts-ignore
      summary: S(e.summary)
    }), E.setMetaProperty("ref-origin", h.uri), E.setMetaProperty("ref-referencing-element-id", F(_e.identify(e))), Z(d) && Z(E) && (e.hasKey("description") && "description" in d && (E.remove("description"), E.set("description", e.get("description"))), e.hasKey("summary") && "summary" in d && (E.remove("summary"), E.set("summary", e.get("summary")))), o.replaceWith(E, vt), n ? !1 : E;
  }
  async PathItemElement(e, r, n, s, i, o) {
    if (!J(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]), l = this.toBaseURI(S(e.$ref)), f = oe(this.reference.uri) === l, u = !f;
    if (!this.options.resolve.internal && f || !this.options.resolve.external && u)
      return;
    const h = await this.toReference(S(e.$ref)), p = je(l, S(e.$ref));
    this.indirections.push(e);
    const m = Qe(p);
    let d = ct(m, h.value.result);
    if (d.id = _e.identify(d), Ar(d)) {
      const E = `path-item-${S(_e.identify(d))}`;
      this.refractCache.has(E) ? d = this.refractCache.get(E) : (d = ir.refract(d), this.refractCache.set(E, d));
    }
    if (e === d)
      throw new me("Recursive Path Item Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new sn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(d)) {
      if (h.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new me("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var y, g;
        const E = new It(d.id, {
          type: "path-item",
          uri: h.uri,
          $ref: S(e.$ref)
        }), $ = ((y = (g = this.options.dereference.strategyOpts["openapi-3-1"]) === null || g === void 0 ? void 0 : g.circularReplacer) !== null && y !== void 0 ? y : this.options.dereference.circularReplacer)(E);
        return o.replaceWith($, vt), n ? !1 : $;
      }
    }
    const v = oe(h.refSet.rootRef.uri) !== h.uri, b = ["error", "replace"].includes(this.options.dereference.circular);
    if ((u || v || Tr(d) && J(d.$ref) || b) && !a.includesCycle(d)) {
      c.add(e);
      const E = new on({
        reference: h,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      d = await El(d, E, {
        keyMap: $t,
        nodeTypeGetter: lt
      }), c.delete(e);
    }
    if (this.indirections.pop(), Tr(d)) {
      const E = new ir([...d.content], F(d.meta), F(d.attributes));
      E.setMetaProperty("id", _e.generateId()), e.forEach((R, $, C) => {
        E.remove(S($)), E.content.push(C);
      }), E.remove("$ref"), E.setMetaProperty("ref-fields", {
        $ref: S(e.$ref)
      }), E.setMetaProperty("ref-origin", h.uri), E.setMetaProperty("ref-referencing-element-id", F(_e.identify(e))), d = E;
    }
    return o.replaceWith(d, vt), n ? void 0 : d;
  }
  async LinkElement(e, r, n, s, i, o) {
    if (!J(e.operationRef) && !J(e.operationId))
      return;
    if (J(e.operationRef) && J(e.operationId))
      throw new me("LinkElement operationRef and operationId fields are mutually exclusive.");
    let a;
    if (J(e.operationRef)) {
      var c;
      const f = Qe(S(e.operationRef)), u = this.toBaseURI(S(e.operationRef)), h = oe(this.reference.uri) === u, p = !h;
      if (!this.options.resolve.internal && h || !this.options.resolve.external && p)
        return;
      const m = await this.toReference(S(e.operationRef));
      if (a = ct(f, m.value.result), Ar(a)) {
        const y = `operation-${S(_e.identify(a))}`;
        this.refractCache.has(y) ? a = this.refractCache.get(y) : (a = li.refract(a), this.refractCache.set(y, a));
      }
      a = Ve(a), a.setMetaProperty("ref-origin", m.uri);
      const d = Ve(e);
      return (c = d.operationRef) === null || c === void 0 || c.meta.set("operation", a), o.replaceWith(d, vt), n ? void 0 : d;
    }
    if (J(e.operationId)) {
      var l;
      const f = S(e.operationId), u = await this.toReference(at(this.reference.uri));
      if (a = Ub((p) => Ox(p) && Ae(p.operationId) && p.operationId.equals(f), u.value.result), ur(a))
        throw new me(`OperationElement(operationId=${f}) not found.`);
      const h = Ve(e);
      return (l = h.operationId) === null || l === void 0 || l.meta.set("operation", a), o.replaceWith(h, vt), n ? void 0 : h;
    }
  }
  async ExampleElement(e, r, n, s, i, o) {
    if (!J(e.externalValue))
      return;
    if (e.hasKey("value") && J(e.externalValue))
      throw new me("ExampleElement value and externalValue fields are mutually exclusive.");
    const a = this.toBaseURI(S(e.externalValue)), c = oe(this.reference.uri) === a, l = !c;
    if (!this.options.resolve.internal && c || !this.options.resolve.external && l)
      return;
    const f = await this.toReference(S(e.externalValue)), u = Ve(f.value.result);
    u.setMetaProperty("ref-origin", f.uri);
    const h = Ve(e);
    return h.value = u, o.replaceWith(h, vt), n ? void 0 : h;
  }
  async SchemaElement(e, r, n, s, i, o) {
    if (!J(e.$ref))
      return;
    if (this.indirections.includes(e))
      return !1;
    const [a, c] = this.toAncestorLineage([...i, n]);
    let l = await this.toReference(at(this.reference.uri)), {
      uri: f
    } = l;
    const u = Ix(f, e), h = oe(u), p = new hs({
      uri: h
    }), m = $C((C) => C.canRead(p), this.options.resolve.resolvers), d = !m;
    let y = oe(this.reference.uri) === u, g = !y;
    this.indirections.push(e);
    let v;
    try {
      if (m || d) {
        f = this.toBaseURI(u);
        const C = u, k = Me(l.value.result);
        if (v = Sc(C, k), v = Me(v), v.id = _e.identify(v), !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
      } else {
        if (f = this.toBaseURI(u), y = oe(this.reference.uri) === f, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
          return;
        l = await this.toReference(at(u));
        const C = Qe(u), k = Me(l.value.result);
        v = ct(C, k), v = Me(v), v.id = _e.identify(v);
      }
    } catch (C) {
      if (d && C instanceof Op)
        if (Ec(Sn(u))) {
          if (y = oe(this.reference.uri) === f, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          l = await this.toReference(at(u));
          const k = Sn(u), O = Me(l.value.result);
          v = qp(k, O), v = Me(v), v.id = _e.identify(v);
        } else {
          if (f = this.toBaseURI(u), y = oe(this.reference.uri) === f, g = !y, !this.options.resolve.internal && y || !this.options.resolve.external && g)
            return;
          l = await this.toReference(at(u));
          const k = Qe(u), O = Me(l.value.result);
          v = ct(k, O), v = Me(v), v.id = _e.identify(v);
        }
      else
        throw C;
    }
    if (e === v)
      throw new me("Recursive Schema Object reference detected");
    if (this.indirections.length > this.options.dereference.maxDepth)
      throw new sn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    if (a.includes(v)) {
      if (l.refSet.circular = !0, this.options.dereference.circular === "error")
        throw new me("Circular reference detected");
      if (this.options.dereference.circular === "replace") {
        var b, E;
        const C = new It(v.id, {
          type: "json-schema",
          uri: l.uri,
          $ref: S(e.$ref)
        }), O = ((b = (E = this.options.dereference.strategyOpts["openapi-3-1"]) === null || E === void 0 ? void 0 : E.circularReplacer) !== null && b !== void 0 ? b : this.options.dereference.circularReplacer)(C);
        return o.replaceWith(O, vt), n ? !1 : O;
      }
    }
    const R = oe(l.refSet.rootRef.uri) !== l.uri, $ = ["error", "replace"].includes(this.options.dereference.circular);
    if ((g || R || Lt(v) && J(v.$ref) || $) && !a.includesCycle(v)) {
      c.add(e);
      const C = new on({
        reference: l,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: a
      });
      v = await El(v, C, {
        keyMap: $t,
        nodeTypeGetter: lt
      }), c.delete(e);
    }
    if (this.indirections.pop(), Hp(v)) {
      const C = F(v);
      return C.setMetaProperty("id", _e.generateId()), C.setMetaProperty("ref-fields", {
        $ref: S(e.$ref)
      }), C.setMetaProperty("ref-origin", l.uri), C.setMetaProperty("ref-referencing-element-id", F(_e.identify(e))), o.replaceWith(C, vt), n ? !1 : C;
    }
    if (Lt(v)) {
      const C = new Lr([...v.content], F(v.meta), F(v.attributes));
      C.setMetaProperty("id", _e.generateId()), e.forEach((k, O, M) => {
        C.remove(S(O)), C.content.push(M);
      }), C.remove("$ref"), C.setMetaProperty("ref-fields", {
        $ref: S(e.$ref)
      }), C.setMetaProperty("ref-origin", l.uri), C.setMetaProperty("ref-referencing-element-id", F(_e.identify(e))), v = C;
    }
    return o.replaceWith(v, vt), n ? void 0 : v;
  }
}
const H5 = ke[Symbol.for("nodejs.util.promisify.custom")];
class q5 extends QV {
  constructor(e) {
    super({
      ...e ?? {},
      name: "openapi-3-1"
    });
  }
  canDereference(e) {
    var r;
    return e.mediaType !== "text/plain" ? wn.includes(e.mediaType) : $x((r = e.parseResult) === null || r === void 0 ? void 0 : r.result);
  }
  async dereference(e, r) {
    var n;
    const s = Ns(Up), i = (n = r.dereference.refSet) !== null && n !== void 0 ? n : new bn(), o = new bn();
    let a = i, c;
    i.has(e.uri) ? c = i.find(Rg(e.uri, "uri")) : (c = new Ft({
      uri: e.uri,
      value: e.parseResult
    }), i.add(c)), r.dereference.immutable && (i.refs.map((u) => new Ft({
      ...u,
      value: F(u.value)
    })).forEach((u) => o.add(u)), c = o.find((u) => u.uri === e.uri), a = o);
    const l = new on({
      reference: c,
      namespace: s,
      options: r
    }), f = await H5(a.rootRef.value, l, {
      keyMap: $t,
      nodeTypeGetter: lt
    });
    return r.dereference.immutable && o.refs.filter((u) => u.uri.startsWith("immutable://")).map((u) => new Ft({
      ...u,
      uri: u.uri.replace(/^immutable:\/\//, "")
    })).forEach((u) => i.add(u)), r.dereference.refSet === null && i.clean(), o.clean(), f;
  }
}
const G5 = (t) => t.slice(2), it = (t) => {
  const e = G5(t);
  return e.reduce((r, n, s) => {
    if (dt(n)) {
      const i = String(S(n.key));
      r.push(i);
    } else if (Ue(e[s - 2])) {
      const i = e[s - 2].content.indexOf(n);
      r.push(i);
    }
    return r;
  }, []);
};
class z5 {
  constructor({
    modelPropertyMacro: e,
    options: r
  }) {
    x(this, "modelPropertyMacro");
    x(this, "options");
    x(this, "SchemaElement", {
      leave: (e, r, n, s, i) => {
        typeof e.properties > "u" || Z(e.properties) && e.properties.forEach((o) => {
          if (Z(o))
            try {
              const l = this.modelPropertyMacro(S(o));
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
class K5 {
  constructor({
    options: e
  }) {
    x(this, "options");
    x(this, "SchemaElement", {
      leave(e, r, n, s, i) {
        if (typeof e.allOf > "u") return;
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
        if (!e.allOf.content.every(Lt)) {
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
          const h = Ot.all([...u.content, e]);
          if (e.hasKey("$$ref") || h.remove("$$ref"), e.hasKey("example")) {
            const p = h.getMember("example");
            p && (p.value = e.get("example"));
          }
          if (e.hasKey("examples")) {
            const p = h.getMember("examples");
            p && (p.value = e.get("examples"));
          }
          e.content = h.content;
        }
      }
    });
    this.options = e;
  }
}
var xr;
class W5 {
  constructor({
    parameterMacro: e,
    options: r
  }) {
    x(this, "parameterMacro");
    x(this, "options");
    Jp(this, xr);
    x(this, "OperationElement", {
      enter: (e) => {
        Ac(this, xr, e);
      },
      leave: () => {
        Ac(this, xr, void 0);
      }
    });
    x(this, "ParameterElement", {
      leave: (e, r, n, s, i) => {
        const o = Oc(this, xr) ? S(Oc(this, xr)) : null, a = S(e);
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
const Ei = (t) => {
  if (t.cause == null) return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
};
class J5 extends ut {
}
const {
  wrapError: Sl
} = Ap, $l = ke[Symbol.for("nodejs.util.promisify.custom")], Xe = new Sp(), dr = (t, e, r, n) => {
  dt(n) ? n.value = t : Array.isArray(n) && (n[r] = t);
};
class ns extends on {
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
      const [m, d] = this.toAncestorLineage([...o, s]), y = this.toBaseURI(S(r.$ref)), g = oe(this.reference.uri) === y, v = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && v)
        return !1;
      const b = await this.toReference(S(r.$ref)), E = je(y, S(r.$ref));
      this.indirections.push(r);
      const R = Qe(E);
      let $ = ct(R, b.value.result);
      if ($.id = Xe.identify($), Ar($)) {
        const M = S(r.meta.get("referenced-element")), P = `${M}-${S(Xe.identify($))}`;
        this.refractCache.has(P) ? $ = this.refractCache.get(P) : fe($) ? ($ = hr.refract($), $.setMetaProperty("referenced-element", M), this.refractCache.set(P, $)) : ($ = this.namespace.getElementClass(M).refract($), this.refractCache.set(P, $));
      }
      if (r === $)
        throw new me("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new sn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes($)) {
        if (b.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const M = new It($.id, {
            type: "reference",
            uri: b.uri,
            $ref: S(r.$ref),
            baseURI: E,
            referencingElement: r
          }), A = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(M);
          return a.replaceWith(M, dr), s ? !1 : A;
        }
      }
      const C = oe(b.refSet.rootRef.uri) !== b.uri, k = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || C || Vr($) || k) && !m.includesCycle($)) {
        var f;
        d.add(r);
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
        $ = await $l($, M, {
          keyMap: $t,
          nodeTypeGetter: lt
        }), d.delete(r);
      }
      this.indirections.pop();
      const O = Ve($);
      if (O.setMetaProperty("ref-fields", {
        $ref: S(r.$ref),
        description: S(r.description),
        summary: S(r.summary)
      }), O.setMetaProperty("ref-origin", b.uri), O.setMetaProperty("ref-referencing-element-id", F(Xe.identify(r))), Z($) && (r.hasKey("description") && "description" in $ && (O.remove("description"), O.set("description", r.get("description"))), r.hasKey("summary") && "summary" in $ && (O.remove("summary"), O.set("summary", r.get("summary")))), this.allowMetaPatches && Z(O) && !O.hasKey("$$ref")) {
        const M = je(y, E);
        O.set("$$ref", M);
      }
      return a.replaceWith(O, dr), s ? !1 : O;
    } catch (m) {
      var u, h, p;
      const d = Ei(m), y = Sl(d, {
        baseDoc: this.reference.uri,
        $ref: S(r.$ref),
        pointer: Qe(S(r.$ref)),
        fullPath: (u = this.basePath) !== null && u !== void 0 ? u : [...it([...o, s, r]), "$ref"]
      });
      (h = this.options.dereference.dereferenceOpts) === null || h === void 0 || (h = h.errors) === null || h === void 0 || (p = h.push) === null || p === void 0 || p.call(h, y);
      return;
    }
  }
  async PathItemElement(r, n, s, i, o, a) {
    try {
      if (!J(r.$ref))
        return;
      if (this.indirections.includes(r) || Ia(["cycle"], r.$ref))
        return !1;
      const [m, d] = this.toAncestorLineage([...o, s]), y = this.toBaseURI(S(r.$ref)), g = oe(this.reference.uri) === y, v = !g;
      if (!this.options.resolve.internal && g || !this.options.resolve.external && v)
        return;
      const b = await this.toReference(S(r.$ref)), E = je(y, S(r.$ref));
      this.indirections.push(r);
      const R = Qe(E);
      let $ = ct(R, b.value.result);
      if ($.id = Xe.identify($), Ar($)) {
        const O = `path-item-${S(Xe.identify($))}`;
        this.refractCache.has(O) ? $ = this.refractCache.get(O) : ($ = ir.refract($), this.refractCache.set(O, $));
      }
      if (r === $)
        throw new me("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new sn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes($)) {
        if (b.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const O = new It($.id, {
            type: "path-item",
            uri: b.uri,
            $ref: S(r.$ref),
            baseURI: E,
            referencingElement: r
          }), P = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(O);
          return a.replaceWith(O, dr), s ? !1 : P;
        }
      }
      const C = oe(b.refSet.rootRef.uri) !== b.uri, k = ["error", "replace"].includes(this.options.dereference.circular);
      if ((v || C || Tr($) && J($.$ref) || k) && !m.includesCycle($)) {
        var f;
        d.add(r);
        const O = new ns({
          reference: b,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: m,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...it([...o, s, r]), "$ref"]
        });
        $ = await $l($, O, {
          keyMap: $t,
          nodeTypeGetter: lt
        }), d.delete(r);
      }
      if (this.indirections.pop(), Tr($)) {
        const O = new ir([...$.content], F($.meta), F($.attributes));
        if (r.forEach((M, P, A) => {
          O.remove(S(P)), O.content.push(A);
        }), O.remove("$ref"), O.setMetaProperty("ref-fields", {
          $ref: S(r.$ref)
        }), O.setMetaProperty("ref-origin", b.uri), O.setMetaProperty("ref-referencing-element-id", F(Xe.identify(r))), this.allowMetaPatches && typeof O.get("$$ref") > "u") {
          const M = je(y, E);
          O.set("$$ref", M);
        }
        $ = O;
      }
      return a.replaceWith($, dr), s ? void 0 : $;
    } catch (m) {
      var u, h, p;
      const d = Ei(m), y = Sl(d, {
        baseDoc: this.reference.uri,
        $ref: S(r.$ref),
        pointer: Qe(S(r.$ref)),
        fullPath: (u = this.basePath) !== null && u !== void 0 ? u : [...it([...o, s, r]), "$ref"]
      });
      (h = this.options.dereference.dereferenceOpts) === null || h === void 0 || (h = h.errors) === null || h === void 0 || (p = h.push) === null || p === void 0 || p.call(h, y);
      return;
    }
  }
  async SchemaElement(r, n, s, i, o, a) {
    try {
      if (!J(r.$ref))
        return;
      if (this.indirections.includes(r))
        return !1;
      const [m, d] = this.toAncestorLineage([...o, s]);
      let y = await this.toReference(at(this.reference.uri)), {
        uri: g
      } = y;
      const v = Ix(g, r), b = oe(v), E = new hs({
        uri: b
      }), R = !this.options.resolve.resolvers.some((A) => A.canRead(E)), $ = !R;
      let C = oe(this.reference.uri) === v, k = !C;
      this.indirections.push(r);
      let O;
      try {
        if (R || $) {
          g = this.toBaseURI(v);
          const A = v, D = Me(y.value.result);
          if (O = Sc(A, D), O = Me(O), O.id = Xe.identify(O), !this.options.resolve.internal && C || !this.options.resolve.external && k)
            return;
        } else {
          if (g = this.toBaseURI(v), C = oe(this.reference.uri) === g, k = !C, !this.options.resolve.internal && C || !this.options.resolve.external && k)
            return;
          y = await this.toReference(at(v));
          const A = Qe(v), D = Me(y.value.result);
          O = ct(A, D), O = Me(O), O.id = Xe.identify(O);
        }
      } catch (A) {
        if ($ && A instanceof Op)
          if (Ec(Sn(v))) {
            if (C = oe(this.reference.uri) === g, k = !C, !this.options.resolve.internal && C || !this.options.resolve.external && k)
              return;
            y = await this.toReference(at(v));
            const D = Sn(v), L = Me(y.value.result);
            O = qp(D, L), O = Me(O), O.id = Xe.identify(O);
          } else {
            if (g = this.toBaseURI(S(v)), C = oe(this.reference.uri) === g, k = !C, !this.options.resolve.internal && C || !this.options.resolve.external && k)
              return;
            y = await this.toReference(at(v));
            const D = Qe(v), L = Me(y.value.result);
            O = ct(D, L), O = Me(O), O.id = Xe.identify(O);
          }
        else
          throw A;
      }
      if (r === O)
        throw new me("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new sn(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      if (m.includes(O)) {
        if (y.refSet.circular = !0, this.options.dereference.circular === "error")
          throw new me("Circular reference detected");
        if (this.options.dereference.circular === "replace") {
          var c, l;
          const A = new It(O.id, {
            type: "json-schema",
            uri: y.uri,
            $ref: S(r.$ref),
            baseURI: je(g, v),
            referencingElement: r
          }), L = ((c = (l = this.options.dereference.strategyOpts["openapi-3-1"]) === null || l === void 0 ? void 0 : l.circularReplacer) !== null && c !== void 0 ? c : this.options.dereference.circularReplacer)(A);
          return a.replaceWith(L, dr), s ? !1 : L;
        }
      }
      const M = oe(y.refSet.rootRef.uri) !== y.uri, P = ["error", "replace"].includes(this.options.dereference.circular);
      if ((k || M || Lt(O) && J(O.$ref) || P) && !m.includesCycle(O)) {
        var f;
        d.add(r);
        const A = new ns({
          reference: y,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: m,
          basePath: (f = this.basePath) !== null && f !== void 0 ? f : [...it([...o, s, r]), "$ref"]
        });
        O = await $l(O, A, {
          keyMap: $t,
          nodeTypeGetter: lt
        }), d.delete(r);
      }
      if (this.indirections.pop(), Hp(O)) {
        const A = F(O);
        return A.setMetaProperty("ref-fields", {
          $ref: S(r.$ref)
        }), A.setMetaProperty("ref-origin", y.uri), A.setMetaProperty("ref-referencing-element-id", F(Xe.identify(r))), a.replaceWith(A, dr), s ? !1 : A;
      }
      if (Lt(O)) {
        const A = new Lr([...O.content], F(O.meta), F(O.attributes));
        if (r.forEach((D, L, Q) => {
          A.remove(S(L)), A.content.push(Q);
        }), A.remove("$ref"), A.setMetaProperty("ref-fields", {
          $ref: S(r.$ref)
        }), A.setMetaProperty("ref-origin", y.uri), A.setMetaProperty("ref-referencing-element-id", F(Xe.identify(r))), this.allowMetaPatches && typeof A.get("$$ref") > "u") {
          const D = je(g, v);
          A.set("$$ref", D);
        }
        O = A;
      }
      return a.replaceWith(O, dr), s ? void 0 : O;
    } catch (m) {
      var u, h, p;
      const d = Ei(m), y = new J5(`Could not resolve reference: ${d.message}`, {
        baseDoc: this.reference.uri,
        $ref: S(r.$ref),
        fullPath: (u = this.basePath) !== null && u !== void 0 ? u : [...it([...o, s, r]), "$ref"],
        cause: d
      });
      (h = this.options.dereference.dereferenceOpts) === null || h === void 0 || (h = h.errors) === null || h === void 0 || (p = h.push) === null || p === void 0 || p.call(h, y);
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
      const h = Ei(u), p = Sl(h, {
        baseDoc: this.reference.uri,
        externalValue: S(r.externalValue),
        fullPath: (c = this.basePath) !== null && c !== void 0 ? c : [...it([...o, s, r]), "externalValue"]
      });
      (l = this.options.dereference.dereferenceOpts) === null || l === void 0 || (l = l.errors) === null || l === void 0 || (f = l.push) === null || f === void 0 || f.call(l, p);
      return;
    }
  }
}
const Y5 = Ma[Symbol.for("nodejs.util.promisify.custom")];
class X5 {
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
    })), typeof r == "function" && o.push(new z5({
      modelPropertyMacro: r,
      options: s
    })), n !== "strict" && o.push(new K5({
      options: s
    })), typeof e == "function" && o.push(new W5({
      parameterMacro: e,
      options: s
    }));
    const a = Y5(o, {
      nodeTypeGetter: lt
    });
    Object.assign(this, a);
  }
}
const Q5 = ke[Symbol.for("nodejs.util.promisify.custom")];
class Fx extends q5 {
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
    const i = Ns(Up), o = (s = n.dereference.refSet) !== null && s !== void 0 ? s : new bn(), a = new bn();
    let c = o, l;
    o.has(r.uri) ? l = o.find((h) => h.uri === r.uri) : (l = new Ft({
      uri: r.uri,
      value: r.parseResult
    }), o.add(l)), n.dereference.immutable && (o.refs.map((h) => new Ft({
      ...h,
      value: F(h.value)
    })).forEach((h) => a.add(h)), l = a.find((h) => h.uri === r.uri), c = a);
    const f = new X5({
      reference: l,
      namespace: i,
      options: n,
      allowMetaPatches: this.allowMetaPatches,
      ancestors: this.ancestors,
      modelPropertyMacro: this.modelPropertyMacro,
      mode: this.mode,
      parameterMacro: this.parameterMacro
    }), u = await Q5(c.rootRef.value, f, {
      keyMap: $t,
      nodeTypeGetter: lt
    });
    return n.dereference.immutable && a.refs.filter((h) => h.uri.startsWith("immutable://")).map((h) => new Ft({
      ...h,
      uri: h.uri.replace(/^immutable:\/\//, "")
    })).forEach((h) => o.add(h)), n.dereference.refSet === null && o.clean(), a.clean(), u;
  }
}
const Z5 = (t) => {
  const e = S(t.meta.get("baseURI")), r = t.meta.get("referencingElement");
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
    mode: h = "non-strict"
  } = t;
  try {
    const {
      cache: p
    } = Gp, m = Ea(io()) ? io() : Fi, d = gf(t), y = je(m, d);
    let g;
    p.has(e) ? g = p.get(e) : (g = pr.refract(e), g.classes.push("result"), p.set(e, g));
    const v = new ft([g]), b = dx(o), E = b === "" ? "" : `#${b}`, R = ct(b, g), $ = new Ft({
      uri: y,
      value: v
    }), C = new bn({
      refs: [$]
    });
    b !== "" && (C.rootRef = void 0);
    const k = [/* @__PURE__ */ new Set([R])], O = [], M = await n3(R, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${y}${E}`,
        resolvers: [new jx({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [new k5()]
      },
      parse: {
        mediaType: wn.latest(),
        parsers: [new Rx({
          allowEmpty: !1,
          sourceMap: !1
        }), new Cx({
          allowEmpty: !1,
          sourceMap: !1
        }), new Tx({
          allowEmpty: !1,
          sourceMap: !1
        }), new _x({
          allowEmpty: !1,
          sourceMap: !1
        }), new N5({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [new Fx({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: f,
          modelPropertyMacro: u,
          mode: h,
          ancestors: k
        })],
        refSet: C,
        dereferenceOpts: {
          errors: O
        },
        immutable: !1,
        circular: c ? "ignore" : "replace",
        circularReplacer: c ? zg.dereference.circularReplacer : Z5
      }
    }), P = UV(R, M, g), A = l ? P : Px(P);
    return {
      spec: S(A),
      errors: O
    };
  } catch (p) {
    if (p instanceof bu || p instanceof Jn)
      return {
        spec: null,
        errors: []
      };
    throw p;
  }
};
Gp.cache = /* @__PURE__ */ new WeakMap();
const e8 = {
  name: "openapi-3-1-apidom",
  match({
    spec: t
  }) {
    return ux(t);
  },
  normalize({
    spec: t
  }) {
    return ts(Px)(t);
  },
  async resolve(t) {
    return Gp(t);
  }
};
function Mx(t, e, r) {
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
function t8(t, e) {
  return Mx(t, e, !0) || null;
}
function Dx(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function r8(t, e) {
  return !t || !t.paths ? null : t8(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = Vs(s, r, n), a = Dx(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: n8
} = $I, s8 = () => null, i8 = (t) => Array.isArray(t) ? t : [t], Bm = {
  mapTagOperations: c8,
  makeExecute: o8
};
function o8(t = {}) {
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
function a8(t = {}) {
  const e = Bm.makeExecute(t);
  return {
    apis: Bm.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function c8({
  spec: t,
  cb: e = s8,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return Mx(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? i8(c.tags) : [r]).forEach((f) => {
      if (typeof f != "string")
        return;
      i[f] = i[f] || {};
      const u = i[f], h = Vs(c, o, a, {
        v2OperationIdCompatibilityMode: n
      }), p = e({
        spec: t,
        pathName: o,
        method: a,
        operation: c,
        operationId: h
      });
      if (s[h])
        s[h] += 1, u[`${h}${s[h]}`] = p;
      else if (typeof u[h] < "u") {
        const m = s[h] || 1;
        s[h] = m + 1, u[`${h}${s[h]}`] = p;
        const d = u[h];
        delete u[h], u[`${h}${m}`] = d;
      } else
        u[h] = p;
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
zp.parse = u8;
zp.serialize = f8;
var l8 = Object.prototype.toString, Si = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function u8(t, e) {
  if (typeof t != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, n = e || {}, s = n.decode || p8, i = 0; i < t.length; ) {
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
      l.charCodeAt(0) === 34 && (l = l.slice(1, -1)), r[c] = m8(l, s);
    }
    i = a + 1;
  }
  return r;
}
function f8(t, e, r) {
  var n = r || {}, s = n.encode || h8;
  if (typeof s != "function")
    throw new TypeError("option encode is invalid");
  if (!Si.test(t))
    throw new TypeError("argument name is invalid");
  var i = s(e);
  if (i && !Si.test(i))
    throw new TypeError("argument val is invalid");
  var o = t + "=" + i;
  if (n.maxAge != null) {
    var a = n.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!Si.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!Si.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    var c = n.expires;
    if (!d8(c) || isNaN(c.valueOf()))
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
function p8(t) {
  return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
}
function h8(t) {
  return encodeURIComponent(t);
}
function d8(t) {
  return l8.call(t) === "[object Date]" || t instanceof Date;
}
function m8(t, e) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
function y8() {
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
const Nx = function() {
  const e = q, r = Le, n = this, s = "parser.js: Parser(): ", i = function() {
    this.state = e.ACTIVE, this.phraseLength = 0, this.refresh = () => {
      this.state = e.ACTIVE, this.phraseLength = 0;
    };
  };
  n.ast = void 0, n.stats = void 0, n.trace = void 0, n.callbacks = [];
  let o = 0, a = 0, c = 0, l = 0, f = 0, u, h, p, m, d = new i(), y, g, v;
  const b = () => {
    o = 0, a = 0, c = 0, l = 0, f = 0, u = void 0, h = void 0, p = void 0, m = void 0, d.refresh(), y = void 0, g = void 0, v = void 0;
  }, E = () => {
    const V = `${s}initializeCallbacks(): `;
    let j;
    for (y = [], g = [], j = 0; j < u.length; j += 1)
      y[j] = void 0;
    for (j = 0; j < h.length; j += 1)
      g[j] = void 0;
    let H;
    const K = [];
    for (j = 0; j < u.length; j += 1)
      K.push(u[j].lower);
    for (j = 0; j < h.length; j += 1)
      K.push(h[j].lower);
    for (const W in n.callbacks)
      if (n.callbacks.hasOwnProperty(W)) {
        if (j = K.indexOf(W.toLowerCase()), j < 0)
          throw new Error(`${V}syntax callback '${W}' not a rule or udt name`);
        if (H = n.callbacks[W] ? n.callbacks[W] : void 0, typeof H == "function" || H === void 0)
          j < u.length ? y[j] = H : g[j - u.length] = H;
        else
          throw new Error(`${V}syntax callback[${W}] must be function reference or falsy)`);
      }
  };
  n.parse = (V, j, H, K) => {
    const W = `${s}parse(): `;
    b(), m = r.stringToChars(H), u = V.rules, h = V.udts;
    const le = j.toLowerCase();
    let ve;
    for (const Br in u)
      if (u.hasOwnProperty(Br) && le === u[Br].lower) {
        ve = u[Br].index;
        break;
      }
    if (ve === void 0)
      throw new Error(`${W}start rule name '${startRule}' not recognized`);
    E(), n.trace && n.trace.init(u, h, m), n.stats && n.stats.init(u, h), n.ast && n.ast.init(u, h, m), v = K, p = [
      {
        type: e.RNM,
        index: ve
      }
    ], ye(0, 0), p = void 0;
    let qe = !1;
    switch (d.state) {
      case e.ACTIVE:
        throw new Error(`${W}final state should never be 'ACTIVE'`);
      case e.NOMATCH:
        qe = !1;
        break;
      case e.EMPTY:
      case e.MATCH:
        d.phraseLength === m.length ? qe = !0 : qe = !1;
        break;
      default:
        throw new Error("unrecognized state");
    }
    return {
      success: qe,
      state: d.state,
      stateName: e.idName(d.state),
      length: m.length,
      matched: d.phraseLength,
      maxMatched: f,
      maxTreeDepth: c,
      nodeHits: l
    };
  };
  const R = (V, j) => {
    const H = p[V];
    for (let K = 0; K < H.children.length && (ye(H.children[K], j), d.state === e.NOMATCH); K += 1)
      ;
  }, $ = (V, j) => {
    let H, K, W, le;
    const ve = p[V];
    n.ast && (K = n.ast.getLength()), H = !0, W = j, le = 0;
    for (let qe = 0; qe < ve.children.length; qe += 1)
      if (ye(ve.children[qe], W), d.state === e.NOMATCH) {
        H = !1;
        break;
      } else
        W += d.phraseLength, le += d.phraseLength;
    H ? (d.state = le === 0 ? e.EMPTY : e.MATCH, d.phraseLength = le) : (d.state = e.NOMATCH, d.phraseLength = 0, n.ast && n.ast.setLength(K));
  }, C = (V, j) => {
    let H, K, W, le;
    const ve = p[V];
    if (ve.max === 0) {
      d.state = e.EMPTY, d.phraseLength = 0;
      return;
    }
    for (K = j, W = 0, le = 0, n.ast && (H = n.ast.getLength()); !(K >= m.length || (ye(V + 1, K), d.state === e.NOMATCH) || d.state === e.EMPTY || (le += 1, W += d.phraseLength, K += d.phraseLength, le === ve.max)); )
      ;
    d.state === e.EMPTY || le >= ve.min ? (d.state = W === 0 ? e.EMPTY : e.MATCH, d.phraseLength = W) : (d.state = e.NOMATCH, d.phraseLength = 0, n.ast && n.ast.setLength(H));
  }, k = (V, j, H, K) => {
    if (j.phraseLength > H) {
      let W = `${s}opRNM(${V.name}): callback function error: `;
      throw W += `sysData.phraseLength: ${j.phraseLength}`, W += ` must be <= remaining chars: ${H}`, new Error(W);
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
  }, O = (V, j) => {
    let H, K, W;
    const le = p[V], ve = u[le.index], qe = y[ve.index];
    if (o || (K = n.ast && n.ast.ruleDefined(le.index), K && (H = n.ast.getLength(), n.ast.down(le.index, u[le.index].name))), qe) {
      const Br = m.length - j;
      qe(d, m, j, v), k(ve, d, Br, !0), d.state === e.ACTIVE && (W = p, p = ve.opcodes, ye(0, j), p = W, qe(d, m, j, v), k(ve, d, Br, !1));
    } else
      W = p, p = ve.opcodes, ye(0, j), p = W;
    o || K && (d.state === e.NOMATCH ? n.ast.setLength(H) : n.ast.up(le.index, ve.name, j, d.phraseLength));
  }, M = (V, j) => {
    const H = p[V];
    d.state = e.NOMATCH, j < m.length && H.min <= m[j] && m[j] <= H.max && (d.state = e.MATCH, d.phraseLength = 1);
  }, P = (V, j) => {
    const H = p[V], K = H.string.length;
    if (d.state = e.NOMATCH, j + K <= m.length) {
      for (let W = 0; W < K; W += 1)
        if (m[j + W] !== H.string[W])
          return;
      d.state = e.MATCH, d.phraseLength = K;
    }
  }, A = (V, j) => {
    let H;
    const K = p[V];
    d.state = e.NOMATCH;
    const W = K.string.length;
    if (W === 0) {
      d.state = e.EMPTY;
      return;
    }
    if (j + W <= m.length) {
      for (let le = 0; le < W; le += 1)
        if (H = m[j + le], H >= 65 && H <= 90 && (H += 32), H !== K.string[le])
          return;
      d.state = e.MATCH, d.phraseLength = W;
    }
  }, D = (V, j, H) => {
    if (j.phraseLength > H) {
      let K = `${s}opUDT(${V.name}): callback function error: `;
      throw K += `sysData.phraseLength: ${j.phraseLength}`, K += ` must be <= remaining chars: ${H}`, new Error(K);
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
  }, L = (V, j) => {
    let H, K, W;
    const le = p[V], ve = h[le.index];
    d.UdtIndex = ve.index, o || (W = n.ast && n.ast.udtDefined(le.index), W && (K = u.length + le.index, H = n.ast.getLength(), n.ast.down(K, ve.name)));
    const qe = m.length - j;
    g[le.index](d, m, j, v), D(ve, d, qe), o || W && (d.state === e.NOMATCH ? n.ast.setLength(H) : n.ast.up(K, ve.name, j, d.phraseLength));
  }, Q = (V, j) => {
    switch (o += 1, ye(V + 1, j), o -= 1, d.phraseLength = 0, d.state) {
      case e.EMPTY:
        d.state = e.EMPTY;
        break;
      case e.MATCH:
        d.state = e.EMPTY;
        break;
      case e.NOMATCH:
        d.state = e.NOMATCH;
        break;
      default:
        throw new Error(`opAND: invalid state ${d.state}`);
    }
  }, de = (V, j) => {
    switch (o += 1, ye(V + 1, j), o -= 1, d.phraseLength = 0, d.state) {
      case e.EMPTY:
      case e.MATCH:
        d.state = e.NOMATCH;
        break;
      case e.NOMATCH:
        d.state = e.EMPTY;
        break;
      default:
        throw new Error(`opNOT: invalid state ${d.state}`);
    }
  }, ye = (V, j) => {
    const H = `${s}opExecute(): `, K = p[V];
    switch (l += 1, a > c && (c = a), a += 1, d.refresh(), n.trace && n.trace.down(K, j), K.type) {
      case e.ALT:
        R(V, j);
        break;
      case e.CAT:
        $(V, j);
        break;
      case e.REP:
        C(V, j);
        break;
      case e.RNM:
        O(V, j);
        break;
      case e.TRG:
        M(V, j);
        break;
      case e.TBS:
        P(V, j);
        break;
      case e.TLS:
        A(V, j);
        break;
      case e.UDT:
        L(V, j);
        break;
      case e.AND:
        Q(V, j);
        break;
      case e.NOT:
        de(V, j);
        break;
      default:
        throw new Error(`${H}unrecognized operator`);
    }
    o || j + d.phraseLength > f && (f = j + d.phraseLength), n.stats && n.stats.collect(K, d), n.trace && n.trace.up(K, d.state, j, d.phraseLength), a -= 1;
  };
}, kx = function() {
  const e = "parser.js: Ast()): ", r = q, n = Le, s = this;
  let i, o, a, c = 0;
  const l = [], f = [], u = [];
  s.callbacks = [], s.init = (p, m, d) => {
    f.length = 0, u.length = 0, c = 0, i = p, o = m, a = d;
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
        const b = v.toLowerCase();
        if (y = g.indexOf(b), y < 0)
          throw new Error(`${e}init: node '${v}' not a rule or udt name`);
        l[y] = s.callbacks[v];
      }
  }, s.ruleDefined = (p) => !!l[p], s.udtDefined = (p) => !!l[i.length + p], s.down = (p, m) => {
    const d = u.length;
    return f.push(d), u.push({
      name: m,
      thisIndex: d,
      thatIndex: void 0,
      state: r.SEM_PRE,
      callbackIndex: p,
      phraseIndex: void 0,
      phraseLength: void 0,
      stack: f.length
    }), d;
  }, s.up = (p, m, d, y) => {
    const g = u.length, v = f.pop();
    return u.push({
      name: m,
      thisIndex: g,
      thatIndex: v,
      state: r.SEM_POST,
      callbackIndex: p,
      phraseIndex: d,
      phraseLength: y,
      stack: f.length
    }), u[v].thatIndex = g, u[v].phraseIndex = d, u[v].phraseLength = y, g;
  }, s.translate = (p) => {
    let m, d;
    for (let y = 0; y < u.length; y += 1)
      d = u[y], m = l[d.callbackIndex], m && (d.state === r.SEM_PRE ? m(r.SEM_PRE, a, d.phraseIndex, d.phraseLength, p) : m && m(r.SEM_POST, a, d.phraseIndex, d.phraseLength, p));
  }, s.setLength = (p) => {
    u.length = p, p > 0 ? f.length = u[p - 1].stack : f.length = 0;
  }, s.getLength = () => u.length;
  function h(p) {
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
`, p += h(m + 2), p += n.charsToString(a), p += `
`, u.forEach((d) => {
      d.state === r.SEM_PRE ? (m += 1, p += h(m), p += `<node name="${d.name}" index="${d.phraseIndex}" length="${d.phraseLength}">
`, p += h(m + 2), p += n.charsToString(a, d.phraseIndex, d.phraseLength), p += `
`) : (p += h(m), p += `</node><!-- name="${d.name}" -->
`, m -= 1);
    }), p += `</root>
`, p;
  };
}, Le = {
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
}, q = {
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
      case q.ALT:
        return "ALT";
      case q.CAT:
        return "CAT";
      case q.REP:
        return "REP";
      case q.RNM:
        return "RNM";
      case q.TRG:
        return "TRG";
      case q.TBS:
        return "TBS";
      case q.TLS:
        return "TLS";
      case q.UDT:
        return "UDT";
      case q.AND:
        return "AND";
      case q.NOT:
        return "NOT";
      case q.ACTIVE:
        return "ACTIVE";
      case q.EMPTY:
        return "EMPTY";
      case q.MATCH:
        return "MATCH";
      case q.NOMATCH:
        return "NOMATCH";
      case q.SEM_PRE:
        return "SEM_PRE";
      case q.SEM_POST:
        return "SEM_POST";
      case q.SEM_OK:
        return "SEM_OK";
      default:
        return "UNRECOGNIZED STATE";
    }
  }
}, v8 = (t, e, r, n, s) => {
  if (t === q.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-url-template", Le.charsToString(e, r, n)]);
  }
  return q.SEM_OK;
}, g8 = (t, e, r, n, s) => {
  if (t === q.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable", Le.charsToString(e, r, n)]);
  }
  return q.SEM_OK;
}, b8 = (t, e, r, n, s) => {
  if (t === q.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["server-variable-name", Le.charsToString(e, r, n)]);
  }
  return q.SEM_OK;
}, x8 = (t, e, r, n, s) => {
  if (t === q.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["literals", Le.charsToString(e, r, n)]);
  }
  return q.SEM_OK;
}, w8 = new y8(), Lx = (t) => {
  const e = new Nx();
  return e.ast = new kx(), e.ast.callbacks["server-url-template"] = v8, e.ast.callbacks["server-variable"] = g8, e.ast.callbacks["server-variable-name"] = b8, e.ast.callbacks.literals = x8, {
    result: e.parse(w8, "server-url-template", t),
    ast: e.ast
  };
}, E8 = (t, {
  strict: e = !1
} = {}) => {
  try {
    const r = Lx(t);
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
}, S8 = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, $8 = (t) => S8(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), O8 = ["literals", "server-variable-name"], A8 = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: $8
    },
    ...r
  }, i = Lx(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => O8.includes(c)).map(([c, l]) => c === "server-variable-name" ? Object.hasOwn(e, l) ? s.encoder(e[l], l) : `{${l}}` : l).join("");
};
function P8() {
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
const j8 = (t, e, r, n, s) => (t === q.SEM_PRE && s.push(["slash", Le.charsToString(e, r, n)]), q.SEM_OK), T8 = (t, e, r, n, s) => {
  if (t === q.SEM_PRE) {
    if (Array.isArray(s) === !1)
      throw new Error("parser's user data must be an array");
    s.push(["path-template", Le.charsToString(e, r, n)]);
  }
  return q.SEM_OK;
}, _8 = (t, e, r, n, s) => (t === q.SEM_PRE && s.push(["path", Le.charsToString(e, r, n)]), q.SEM_OK), R8 = (t, e, r, n, s) => (t === q.SEM_PRE && s.push(["path-literal", Le.charsToString(e, r, n)]), q.SEM_OK), C8 = (t, e, r, n, s) => (t === q.SEM_PRE && s.push(["query", Le.charsToString(e, r, n)]), q.SEM_OK), I8 = (t, e, r, n, s) => (t === q.SEM_PRE && s.push(["query-marker", Le.charsToString(e, r, n)]), q.SEM_OK), F8 = (t, e, r, n, s) => (t === q.SEM_PRE && s.push(["fragment", Le.charsToString(e, r, n)]), q.SEM_OK), M8 = (t, e, r, n, s) => (t === q.SEM_PRE && s.push(["fragment-marker", Le.charsToString(e, r, n)]), q.SEM_OK), D8 = (t, e, r, n, s) => (t === q.SEM_PRE && s.push(["template-expression", Le.charsToString(e, r, n)]), q.SEM_OK), N8 = (t, e, r, n, s) => (t === q.SEM_PRE && s.push(["template-expression-param-name", Le.charsToString(e, r, n)]), q.SEM_OK), k8 = new P8(), L8 = (t) => {
  const e = new Nx();
  return e.ast = new kx(), e.ast.callbacks["path-template"] = T8, e.ast.callbacks.path = _8, e.ast.callbacks.query = C8, e.ast.callbacks["query-marker"] = I8, e.ast.callbacks.fragment = F8, e.ast.callbacks["fragment-marker"] = M8, e.ast.callbacks.slash = j8, e.ast.callbacks["path-literal"] = R8, e.ast.callbacks["template-expression"] = D8, e.ast.callbacks["template-expression-param-name"] = N8, {
    result: e.parse(k8, "path-template", t),
    ast: e.ast
  };
}, V8 = (t) => {
  try {
    return typeof t == "string" && decodeURIComponent(t) !== t;
  } catch {
    return !1;
  }
}, B8 = (t) => V8(t) ? t : encodeURIComponent(t).replace(/%5B/g, "[").replace(/%5D/g, "]"), U8 = ["slash", "path-literal", "query-marker", "query-literal", "template-expression-param-name"], Zu = (t, e, r = {}) => {
  const s = {
    ...{
      encoder: B8
    },
    ...r
  }, i = L8(t);
  if (!i.result.success) return t;
  const o = [];
  return i.ast.translate(o), o.filter(([c]) => U8.includes(c)).map(([c, l]) => c === "template-expression-param-name" ? Object.hasOwn(e, l) ? s.encoder(e[l], l) : `{${l}}` : l).join("");
}, H8 = {
  body: q8,
  header: z8,
  query: W8,
  path: K8,
  formData: G8
};
function q8({
  req: t,
  value: e
}) {
  e !== void 0 && (t.body = e);
}
function G8({
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
function z8({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function K8({
  req: t,
  value: e,
  parameter: r,
  baseURL: n
}) {
  if (e !== void 0) {
    const s = t.url.replace(n, ""), i = Zu(s, {
      [r.name]: e
    });
    t.url = n + i;
  }
}
function W8({
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
function $c(t, e) {
  return e.includes("application/json") ? typeof t == "string" ? t : (Array.isArray(t) && (t = t.map((r) => {
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  })), JSON.stringify(t)) : String(t);
}
function J8({
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
    const f = Object.keys(a)[0];
    l = Zu(c, {
      [s]: e
    }, {
      encoder: (u) => py($c(u, f))
    });
  } else
    l = Zu(c, {
      [s]: e
    }, {
      encoder: (f) => uf({
        key: r.name,
        value: f,
        style: i || "simple",
        explode: o || !1,
        escape: "reserved"
      })
    });
  t.url = n + l;
}
function Y8({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, e !== void 0 && r.content) {
    const n = Object.keys(r.content)[0], s = $c(e, n);
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
const X8 = ["accept", "authorization", "content-type"];
function Q8({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(X8.indexOf(e.name.toLowerCase()) > -1)) {
    if (r !== void 0 && e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = $c(r, n);
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
function Z8({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {};
  const n = typeof r;
  if (r !== void 0 && e.content) {
    const s = Object.keys(e.content)[0];
    t.headers.Cookie = `${e.name}=${$c(r, s)}`;
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
const eH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: Z8,
  header: Q8,
  path: J8,
  query: Y8
}, Symbol.toStringTag, { value: "Module" })), tH = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: Vx
} = tH;
function rH(t, e) {
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
  e = nH({
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
      const d = l[0];
      d && (e.headers["Content-Type"] = d, a = d);
    }
  } else a && f && (e.headers["Content-Type"] = a);
  if (!t.responseContentType && r.responses) {
    const d = Object.entries(r.responses).filter(([y, g]) => {
      const v = parseInt(y, 10);
      return v >= 200 && v < 300 && gn(g.content);
    }).reduce((y, [, g]) => y.concat(Object.keys(g.content)), []);
    d.length > 0 && (e.headers.accept = d.join(", "));
  }
  if (n)
    if (a) {
      if (l.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof n == "object") {
            var u, h;
            const d = (u = (h = c.content[a]) === null || h === void 0 ? void 0 : h.encoding) !== null && u !== void 0 ? u : {};
            e.form = {}, Object.keys(n).forEach((y) => {
              let g;
              try {
                g = JSON.parse(n[y]);
              } catch {
                g = n[y];
              }
              e.form[y] = {
                value: g,
                encoding: d[y] || {}
              };
            });
          } else if (typeof n == "string") {
            var p, m;
            const d = (p = (m = c.content[a]) === null || m === void 0 ? void 0 : m.encoding) !== null && p !== void 0 ? p : {};
            try {
              e.form = {};
              const y = JSON.parse(n);
              Object.entries(y).forEach(([g, v]) => {
                e.form[g] = {
                  value: v,
                  encoding: d[g] || {}
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
function nH({
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
      const h = o[u], p = l[u];
      if (!h)
        return;
      const m = h.value || h, {
        type: d
      } = p;
      if (h) {
        if (d === "apiKey")
          p.in === "query" && (i.query[p.name] = m), p.in === "header" && (i.headers[p.name] = m), p.in === "cookie" && (i.cookies[p.name] = m);
        else if (d === "http") {
          if (/^basic$/i.test(p.scheme)) {
            const y = m.username || "", g = m.password || "", v = Vx(`${y}:${g}`);
            i.headers.Authorization = `Basic ${v}`;
          }
          /^bearer$/i.test(p.scheme) && (i.headers.Authorization = `Bearer ${m}`);
        } else if (d === "oauth2" || d === "openIdConnect") {
          const y = h.token || {}, g = p["x-tokenName"] || "access_token", v = y[g];
          let b = y.token_type;
          (!b || b.toLowerCase() === "bearer") && (b = "Bearer"), i.headers.Authorization = `${b} ${v}`;
        }
      }
    });
  }), i);
}
function sH(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = iH({
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
function iH({
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
      const h = i[u];
      if (!h)
        return;
      const {
        token: p
      } = h, m = h.value || h, d = l[u], {
        type: y
      } = d, g = d["x-tokenName"] || "access_token", v = p && p[g];
      let b = p && p.token_type;
      if (h)
        if (y === "apiKey") {
          const E = d.in === "query" ? "query" : "headers";
          s[E] = s[E] || {}, s[E][d.name] = m;
        } else if (y === "basic")
          if (m.header)
            s.headers.authorization = m.header;
          else {
            const E = m.username || "", R = m.password || "";
            m.base64 = Vx(`${E}:${R}`), s.headers.authorization = `Basic ${m.base64}`;
          }
        else y === "oauth2" && v && (b = !b || b.toLowerCase() === "bearer" ? "Bearer" : b, s.headers.authorization = `${b} ${v}`);
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
class oH extends ut {
}
const aH = (t, e) => e.filter((r) => r.name === t), cH = (t) => {
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
}, lH = {
  buildRequest: Bx
};
function uH({
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
  const l = t || e || pn;
  s && i && !n && (n = Dx(s, i));
  const f = lH.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: l,
    ...c
  });
  return f.body && (gn(f.body) || Array.isArray(f.body)) && (f.body = JSON.stringify(f.body)), l(f);
}
function Bx(t) {
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
    signal: h
  } = t;
  let {
    parameters: p,
    parameterBuilders: m
  } = t;
  const d = Tp(e);
  m || (d ? m = eH : m = H8);
  let g = {
    url: "",
    credentials: u && u.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  h && (g.signal = h), i && (g.requestInterceptor = i), o && (g.responseInterceptor = o), c && (g.userFetch = c);
  const v = r8(e, r);
  if (!v)
    throw new oH(`Operation ${r} not found`);
  const {
    operation: b = {},
    method: E,
    pathName: R
  } = v, $ = Ux({
    spec: e,
    scheme: s,
    contextUrl: a,
    server: l,
    serverVariables: f,
    pathName: R,
    method: E
  });
  if (g.url += $, !r)
    return delete g.cookies, g;
  g.url += R, g.method = `${E}`.toUpperCase(), p = p || {};
  const C = e.paths[R] || {};
  n && (g.headers.accept = n);
  const k = cH([].concat(Um(b.parameters)).concat(Um(C.parameters)));
  k.forEach((M) => {
    const P = m[M.in];
    let A;
    if (M.in === "body" && M.schema && M.schema.properties && (A = p), A = M && M.name && p[M.name], typeof A > "u" ? A = M && M.name && p[`${M.in}.${M.name}`] : aH(M.name, k).length > 1 && console.warn(`Parameter '${M.name}' is ambiguous because the defined spec has more than one parameter with the name: '${M.name}' and the passed-in parameter values did not define an 'in' value.`), A !== null) {
      if (typeof M.default < "u" && typeof A > "u" && (A = M.default), typeof A > "u" && M.required && !M.allowEmptyValue)
        throw new Error(`Required parameter ${M.name} is not provided`);
      if (d && M.schema && M.schema.type === "object" && typeof A == "string")
        try {
          A = JSON.parse(A);
        } catch {
          throw new Error("Could not parse object parameter value string as JSON");
        }
      P && P({
        req: g,
        parameter: M,
        value: A,
        operation: b,
        spec: e,
        baseURL: $
      });
    }
  });
  const O = {
    ...t,
    operation: b
  };
  if (d ? g = rH(O, g) : g = sH(O, g), g.cookies && Object.keys(g.cookies).length) {
    const M = Object.keys(g.cookies).reduce((P, A) => {
      const D = g.cookies[A], L = P ? "&" : "", Q = zp.serialize(A, D);
      return P + L + Q;
    }, "");
    g.headers.Cookie = M;
  }
  return g.cookies && delete g.cookies, ff(g);
}
const ef = (t) => t ? t.replace(/\W/g, "") : null;
function Ux(t) {
  return Tp(t.spec) ? fH(t) : hH(t);
}
const Ol = (t) => Array.isArray(t) && t.length > 0;
function fH({
  spec: t,
  pathName: e,
  method: r,
  server: n,
  contextUrl: s,
  serverVariables: i = {}
}) {
  var o, a;
  let c = [], l = "", f;
  const u = t == null || (o = t.paths) === null || o === void 0 || (o = o[e]) === null || o === void 0 || (o = o[(r || "").toLowerCase()]) === null || o === void 0 ? void 0 : o.servers, h = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 ? void 0 : a.servers, p = t == null ? void 0 : t.servers;
  if (c = Ol(u) ? u : Ol(h) ? h : Ol(p) ? p : [qm], n && (f = c.find((m) => m.url === n), f && (l = n)), l || ([f] = c, l = f.url), E8(l, {
    strict: !0
  })) {
    const m = Object.entries({
      ...f.variables
    }).reduce((d, [y, g]) => (d[y] = g.default, d), {});
    l = A8(l, {
      ...m,
      ...i
    });
  }
  return pH(l, s);
}
function pH(t = "", e = "") {
  const r = Ii(t && e ? je(e, t) : t), n = Ii(e), s = ef(r.protocol) || ef(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function hH({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = Ii(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || ef(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return i && o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
se.http = pn;
se.makeHttp = z$.bind(null, se.http);
se.resolveStrategies = {
  "openapi-3-1-apidom": e8,
  "openapi-3-0": px,
  "openapi-2-0": fx,
  generic: ax
};
se.resolve = hx({
  strategies: [se.resolveStrategies["openapi-3-1-apidom"], se.resolveStrategies["openapi-3-0"], se.resolveStrategies["openapi-2-0"], se.resolveStrategies.generic]
});
se.resolveSubtree = H3({
  strategies: [se.resolveStrategies["openapi-3-1-apidom"], se.resolveStrategies["openapi-3-0"], se.resolveStrategies["openapi-2-0"], se.resolveStrategies.generic]
});
se.execute = uH;
se.serializeRes = rv;
se.serializeHeaders = tv;
se.clearCache = N3;
se.makeApisTagOperation = a8;
se.buildRequest = Bx;
se.helpers = {
  opId: Vs
};
se.getBaseUrl = Ux;
se.apidom = {
  resolve: {
    resolvers: {
      HTTPResolverSwaggerClient: jx
    }
  },
  parse: {
    parsers: {
      JsonParser: Tx,
      YamlParser: _x,
      OpenApiJson3_1Parser: Rx,
      OpenApiYaml3_1Parser: Cx
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: Fx
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
  http: pn,
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
  if (cx(e) && n8(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (Tp(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [qm]);
  }
};
export {
  se as S,
  Xw as r
};
