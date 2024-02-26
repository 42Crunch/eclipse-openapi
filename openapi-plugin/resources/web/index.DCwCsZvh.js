var U$ = Object.defineProperty;
var B$ = (t, e, r) => e in t ? U$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var E = (t, e, r) => (B$(t, typeof e != "symbol" ? e + "" : e, r), r);
import { x as q$, v as Et, o as jr } from "./extends.lDO40HzL.js";
const Hm = "application/json, application/yaml", Ci = "https://swagger.io", Gm = Object.freeze({
  url: "/"
});
var H$ = Error, G$ = EvalError, J$ = RangeError, z$ = ReferenceError, Jm = SyntaxError, ms = TypeError, K$ = URIError, W$ = function() {
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
}, Kp = typeof Symbol < "u" && Symbol, Y$ = W$, X$ = function() {
  return typeof Kp != "function" || typeof Symbol != "function" || typeof Kp("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Y$();
}, Wp = {
  foo: {}
}, Q$ = Object, Z$ = function() {
  return { __proto__: Wp }.foo === Wp.foo && !({ __proto__: null } instanceof Q$);
}, ex = "Function.prototype.bind called on incompatible ", tx = Object.prototype.toString, rx = Math.max, nx = "[object Function]", Yp = function(e, r) {
  for (var n = [], s = 0; s < e.length; s += 1)
    n[s] = e[s];
  for (var i = 0; i < r.length; i += 1)
    n[i + e.length] = r[i];
  return n;
}, sx = function(e, r) {
  for (var n = [], s = r || 0, i = 0; s < e.length; s += 1, i += 1)
    n[i] = e[s];
  return n;
}, ix = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, ox = function(e) {
  var r = this;
  if (typeof r != "function" || tx.apply(r) !== nx)
    throw new TypeError(ex + r);
  for (var n = sx(arguments, 1), s, i = function() {
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
  }, o = rx(0, r.length - n.length), a = [], c = 0; c < o; c++)
    a[c] = "$" + c;
  if (s = Function("binder", "return function (" + ix(a, ",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, s.prototype = new u(), u.prototype = null;
  }
  return s;
}, ax = ox, ef = Function.prototype.bind || ax, cx = Function.prototype.call, ux = Object.prototype.hasOwnProperty, lx = ef, fx = lx.call(cx, ux), X, px = H$, hx = G$, dx = J$, mx = z$, rn = Jm, Xr = ms, yx = K$, zm = Function, Sc = function(t) {
  try {
    return zm('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, gr = Object.getOwnPropertyDescriptor;
if (gr)
  try {
    gr({}, "");
  } catch {
    gr = null;
  }
var Oc = function() {
  throw new Xr();
}, vx = gr ? function() {
  try {
    return arguments.callee, Oc;
  } catch {
    try {
      return gr(arguments, "callee").get;
    } catch {
      return Oc;
    }
  }
}() : Oc, Nr = X$(), gx = Z$(), Ee = Object.getPrototypeOf || (gx ? function(t) {
  return t.__proto__;
} : null), Gr = {}, bx = typeof Uint8Array > "u" || !Ee ? X : Ee(Uint8Array), br = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? X : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? X : ArrayBuffer,
  "%ArrayIteratorPrototype%": Nr && Ee ? Ee([][Symbol.iterator]()) : X,
  "%AsyncFromSyncIteratorPrototype%": X,
  "%AsyncFunction%": Gr,
  "%AsyncGenerator%": Gr,
  "%AsyncGeneratorFunction%": Gr,
  "%AsyncIteratorPrototype%": Gr,
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
  "%Error%": px,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": hx,
  "%Float32Array%": typeof Float32Array > "u" ? X : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? X : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? X : FinalizationRegistry,
  "%Function%": zm,
  "%GeneratorFunction%": Gr,
  "%Int8Array%": typeof Int8Array > "u" ? X : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? X : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? X : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Nr && Ee ? Ee(Ee([][Symbol.iterator]())) : X,
  "%JSON%": typeof JSON == "object" ? JSON : X,
  "%Map%": typeof Map > "u" ? X : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Nr || !Ee ? X : Ee((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? X : Promise,
  "%Proxy%": typeof Proxy > "u" ? X : Proxy,
  "%RangeError%": dx,
  "%ReferenceError%": mx,
  "%Reflect%": typeof Reflect > "u" ? X : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? X : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Nr || !Ee ? X : Ee((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? X : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Nr && Ee ? Ee(""[Symbol.iterator]()) : X,
  "%Symbol%": Nr ? Symbol : X,
  "%SyntaxError%": rn,
  "%ThrowTypeError%": vx,
  "%TypedArray%": bx,
  "%TypeError%": Xr,
  "%Uint8Array%": typeof Uint8Array > "u" ? X : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? X : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? X : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? X : Uint32Array,
  "%URIError%": yx,
  "%WeakMap%": typeof WeakMap > "u" ? X : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? X : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? X : WeakSet
};
if (Ee)
  try {
    null.error;
  } catch (t) {
    var $x = Ee(Ee(t));
    br["%Error.prototype%"] = $x;
  }
var xx = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Sc("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Sc("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Sc("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var s = t("%AsyncGenerator%");
    s && Ee && (r = Ee(s.prototype));
  }
  return br[e] = r, r;
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
}, ys = ef, Mi = fx, wx = ys.call(Function.call, Array.prototype.concat), Sx = ys.call(Function.apply, Array.prototype.splice), Qp = ys.call(Function.call, String.prototype.replace), Fi = ys.call(Function.call, String.prototype.slice), Ox = ys.call(Function.call, RegExp.prototype.exec), Ex = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ax = /\\(\\)?/g, Px = function(e) {
  var r = Fi(e, 0, 1), n = Fi(e, -1);
  if (r === "%" && n !== "%")
    throw new rn("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new rn("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return Qp(e, Ex, function(i, o, a, c) {
    s[s.length] = a ? Qp(c, Ax, "$1") : o || i;
  }), s;
}, jx = function(e, r) {
  var n = e, s;
  if (Mi(Xp, n) && (s = Xp[n], n = "%" + s[0] + "%"), Mi(br, n)) {
    var i = br[n];
    if (i === Gr && (i = xx(n)), typeof i > "u" && !r)
      throw new Xr("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: s,
      name: n,
      value: i
    };
  }
  throw new rn("intrinsic " + e + " does not exist!");
}, yn = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new Xr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Xr('"allowMissing" argument must be a boolean');
  if (Ox(/^%?[^%]*%?$/, e) === null)
    throw new rn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Px(e), s = n.length > 0 ? n[0] : "", i = jx("%" + s + "%", r), o = i.name, a = i.value, c = !1, u = i.alias;
  u && (s = u[0], Sx(n, wx([0, 1], u)));
  for (var f = 1, l = !0; f < n.length; f += 1) {
    var h = n[f], p = Fi(h, 0, 1), d = Fi(h, -1);
    if ((p === '"' || p === "'" || p === "`" || d === '"' || d === "'" || d === "`") && p !== d)
      throw new rn("property names with quotes must have matching quotes");
    if ((h === "constructor" || !l) && (c = !0), s += "." + h, o = "%" + s + "%", Mi(br, o))
      a = br[o];
    else if (a != null) {
      if (!(h in a)) {
        if (!r)
          throw new Xr("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (gr && f + 1 >= n.length) {
        var m = gr(a, h);
        l = !!m, l && "get" in m && !("originalValue" in m.get) ? a = m.get : a = a[h];
      } else
        l = Mi(a, h), a = a[h];
      l && !c && (br[o] = a);
    }
  }
  return a;
}, Km = { exports: {} }, Ec, Zp;
function tf() {
  if (Zp)
    return Ec;
  Zp = 1;
  var t = yn, e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ec = e, Ec;
}
var _x = yn, xi = _x("%Object.getOwnPropertyDescriptor%", !0);
if (xi)
  try {
    xi([], "length");
  } catch {
    xi = null;
  }
var Wm = xi, eh = tf(), Tx = Jm, Lr = ms, th = Wm, Rx = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Lr("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Lr("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Lr("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Lr("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Lr("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Lr("`loose`, if provided, must be a boolean");
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
    throw new Tx("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, wu = tf(), Ym = function() {
  return !!wu;
};
Ym.hasArrayLengthDefineBug = function() {
  if (!wu)
    return null;
  try {
    return wu([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Ix = Ym, Cx = yn, rh = Rx, Mx = Ix(), nh = Wm, sh = ms, Fx = Cx("%Math.floor%"), Vx = function(e, r) {
  if (typeof e != "function")
    throw new sh("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || Fx(r) !== r)
    throw new sh("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], s = !0, i = !0;
  if ("length" in e && nh) {
    var o = nh(e, "length");
    o && !o.configurable && (s = !1), o && !o.writable && (i = !1);
  }
  return (s || i || !n) && (Mx ? rh(
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
  var e = ef, r = yn, n = Vx, s = ms, i = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || e.call(o, i), c = tf(), u = r("%Math.max%");
  t.exports = function(h) {
    if (typeof h != "function")
      throw new s("a function is required");
    var p = a(e, o, arguments);
    return n(
      p,
      1 + u(0, h.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return a(e, i, arguments);
  };
  c ? c(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(Km);
var Dx = Km.exports, Xm = yn, Qm = Dx, Nx = Qm(Xm("String.prototype.indexOf")), Lx = function(e, r) {
  var n = Xm(e, !!r);
  return typeof n == "function" && Nx(e, ".prototype.") > -1 ? Qm(n) : n;
};
const kx = {}, Ux = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kx
}, Symbol.toStringTag, { value: "Module" })), Bx = /* @__PURE__ */ q$(Ux);
var rf = typeof Map == "function" && Map.prototype, Ac = Object.getOwnPropertyDescriptor && rf ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Vi = rf && Ac && typeof Ac.get == "function" ? Ac.get : null, ih = rf && Map.prototype.forEach, nf = typeof Set == "function" && Set.prototype, Pc = Object.getOwnPropertyDescriptor && nf ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Di = nf && Pc && typeof Pc.get == "function" ? Pc.get : null, oh = nf && Set.prototype.forEach, qx = typeof WeakMap == "function" && WeakMap.prototype, zn = qx ? WeakMap.prototype.has : null, Hx = typeof WeakSet == "function" && WeakSet.prototype, Kn = Hx ? WeakSet.prototype.has : null, Gx = typeof WeakRef == "function" && WeakRef.prototype, ah = Gx ? WeakRef.prototype.deref : null, Jx = Boolean.prototype.valueOf, zx = Object.prototype.toString, Kx = Function.prototype.toString, Wx = String.prototype.match, sf = String.prototype.slice, er = String.prototype.replace, Yx = String.prototype.toUpperCase, ch = String.prototype.toLowerCase, Zm = RegExp.prototype.test, uh = Array.prototype.concat, mt = Array.prototype.join, Xx = Array.prototype.slice, lh = Math.floor, Su = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, jc = Object.getOwnPropertySymbols, Ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, nn = typeof Symbol == "function" && typeof Symbol.iterator == "object", Fe = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === nn || !0) ? Symbol.toStringTag : null, ey = Object.prototype.propertyIsEnumerable, fh = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function ph(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Zm.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -lh(-t) : lh(t);
    if (n !== t) {
      var s = String(n), i = sf.call(e, s.length + 1);
      return er.call(s, r, "$&_") + "." + er.call(er.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return er.call(e, r, "$&_");
}
var Eu = Bx, hh = Eu.custom, dh = ry(hh) ? hh : null, Qx = function t(e, r, n, s) {
  var i = r || {};
  if (Qt(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Qt(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Qt(i, "customInspect") ? i.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Qt(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Qt(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = i.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return sy(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var c = String(e);
    return a ? ph(e, c) : c;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return a ? ph(e, u) : u;
  }
  var f = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return Au(e) ? "[Array]" : "[Object]";
  var l = yw(i, n);
  if (typeof s > "u")
    s = [];
  else if (ny(s, e) >= 0)
    return "[Circular]";
  function h(N, Y, ve) {
    if (Y && (s = Xx.call(s), s.push(Y)), ve) {
      var ue = {
        depth: i.depth
      };
      return Qt(i, "quoteStyle") && (ue.quoteStyle = i.quoteStyle), t(N, ue, n + 1, s);
    }
    return t(N, i, n + 1, s);
  }
  if (typeof e == "function" && !mh(e)) {
    var p = aw(e), d = ci(e, h);
    return "[Function" + (p ? ": " + p : " (anonymous)") + "]" + (d.length > 0 ? " { " + mt.call(d, ", ") + " }" : "");
  }
  if (ry(e)) {
    var m = nn ? er.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ou.call(e);
    return typeof e == "object" && !nn ? Nn(m) : m;
  }
  if (hw(e)) {
    for (var y = "<" + ch.call(String(e.nodeName)), v = e.attributes || [], $ = 0; $ < v.length; $++)
      y += " " + v[$].name + "=" + ty(Zx(v[$].value), "double", i);
    return y += ">", e.childNodes && e.childNodes.length && (y += "..."), y += "</" + ch.call(String(e.nodeName)) + ">", y;
  }
  if (Au(e)) {
    if (e.length === 0)
      return "[]";
    var b = ci(e, h);
    return l && !mw(b) ? "[" + Pu(b, l) + "]" : "[ " + mt.call(b, ", ") + " ]";
  }
  if (tw(e)) {
    var x = ci(e, h);
    return !("cause" in Error.prototype) && "cause" in e && !ey.call(e, "cause") ? "{ [" + String(e) + "] " + mt.call(uh.call("[cause]: " + h(e.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + mt.call(x, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (dh && typeof e[dh] == "function" && Eu)
      return Eu(e, { depth: f - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (cw(e)) {
    var T = [];
    return ih && ih.call(e, function(N, Y) {
      T.push(h(Y, e, !0) + " => " + h(N, e));
    }), yh("Map", Vi.call(e), T, l);
  }
  if (fw(e)) {
    var V = [];
    return oh && oh.call(e, function(N) {
      V.push(h(N, e));
    }), yh("Set", Di.call(e), V, l);
  }
  if (uw(e))
    return _c("WeakMap");
  if (pw(e))
    return _c("WeakSet");
  if (lw(e))
    return _c("WeakRef");
  if (nw(e))
    return Nn(h(Number(e)));
  if (iw(e))
    return Nn(h(Su.call(e)));
  if (sw(e))
    return Nn(Jx.call(e));
  if (rw(e))
    return Nn(h(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === Et)
    return "{ [object globalThis] }";
  if (!ew(e) && !mh(e)) {
    var P = ci(e, h), C = fh ? fh(e) === Object.prototype : e instanceof Object || e.constructor === Object, M = e instanceof Object ? "" : "null prototype", G = !C && Fe && Object(e) === e && Fe in e ? sf.call(ir(e), 8, -1) : M ? "Object" : "", S = C || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", I = S + (G || M ? "[" + mt.call(uh.call([], G || [], M || []), ": ") + "] " : "");
    return P.length === 0 ? I + "{}" : l ? I + "{" + Pu(P, l) + "}" : I + "{ " + mt.call(P, ", ") + " }";
  }
  return String(e);
};
function ty(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Zx(t) {
  return er.call(String(t), /"/g, "&quot;");
}
function Au(t) {
  return ir(t) === "[object Array]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function ew(t) {
  return ir(t) === "[object Date]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function mh(t) {
  return ir(t) === "[object RegExp]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function tw(t) {
  return ir(t) === "[object Error]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function rw(t) {
  return ir(t) === "[object String]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function nw(t) {
  return ir(t) === "[object Number]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function sw(t) {
  return ir(t) === "[object Boolean]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function ry(t) {
  if (nn)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Ou)
    return !1;
  try {
    return Ou.call(t), !0;
  } catch {
  }
  return !1;
}
function iw(t) {
  if (!t || typeof t != "object" || !Su)
    return !1;
  try {
    return Su.call(t), !0;
  } catch {
  }
  return !1;
}
var ow = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Qt(t, e) {
  return ow.call(t, e);
}
function ir(t) {
  return zx.call(t);
}
function aw(t) {
  if (t.name)
    return t.name;
  var e = Wx.call(Kx.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function ny(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function cw(t) {
  if (!Vi || !t || typeof t != "object")
    return !1;
  try {
    Vi.call(t);
    try {
      Di.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function uw(t) {
  if (!zn || !t || typeof t != "object")
    return !1;
  try {
    zn.call(t, zn);
    try {
      Kn.call(t, Kn);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function lw(t) {
  if (!ah || !t || typeof t != "object")
    return !1;
  try {
    return ah.call(t), !0;
  } catch {
  }
  return !1;
}
function fw(t) {
  if (!Di || !t || typeof t != "object")
    return !1;
  try {
    Di.call(t);
    try {
      Vi.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function pw(t) {
  if (!Kn || !t || typeof t != "object")
    return !1;
  try {
    Kn.call(t, Kn);
    try {
      zn.call(t, zn);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function hw(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function sy(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return sy(sf.call(t, 0, e.maxStringLength), e) + n;
  }
  var s = er.call(er.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, dw);
  return ty(s, "single", e);
}
function dw(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Yx.call(e.toString(16));
}
function Nn(t) {
  return "Object(" + t + ")";
}
function _c(t) {
  return t + " { ? }";
}
function yh(t, e, r, n) {
  var s = n ? Pu(r, n) : mt.call(r, ", ");
  return t + " (" + e + ") {" + s + "}";
}
function mw(t) {
  for (var e = 0; e < t.length; e++)
    if (ny(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function yw(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = mt.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: mt.call(Array(e + 1), r)
  };
}
function Pu(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + mt.call(t, "," + r) + `
` + e.prev;
}
function ci(t, e) {
  var r = Au(t), n = [];
  if (r) {
    n.length = t.length;
    for (var s = 0; s < t.length; s++)
      n[s] = Qt(t, s) ? e(t[s], t) : "";
  }
  var i = typeof jc == "function" ? jc(t) : [], o;
  if (nn) {
    o = {};
    for (var a = 0; a < i.length; a++)
      o["$" + i[a]] = i[a];
  }
  for (var c in t)
    Qt(t, c) && (r && String(Number(c)) === c && c < t.length || nn && o["$" + c] instanceof Symbol || (Zm.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
  if (typeof jc == "function")
    for (var u = 0; u < i.length; u++)
      ey.call(t, i[u]) && n.push("[" + e(i[u]) + "]: " + e(t[i[u]], t));
  return n;
}
var iy = yn, vn = Lx, vw = Qx, gw = ms, ui = iy("%WeakMap%", !0), li = iy("%Map%", !0), bw = vn("WeakMap.prototype.get", !0), $w = vn("WeakMap.prototype.set", !0), xw = vn("WeakMap.prototype.has", !0), ww = vn("Map.prototype.get", !0), Sw = vn("Map.prototype.set", !0), Ow = vn("Map.prototype.has", !0), of = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, Ew = function(t, e) {
  var r = of(t, e);
  return r && r.value;
}, Aw = function(t, e, r) {
  var n = of(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, Pw = function(t, e) {
  return !!of(t, e);
}, jw = function() {
  var e, r, n, s = {
    assert: function(i) {
      if (!s.has(i))
        throw new gw("Side channel does not contain " + vw(i));
    },
    get: function(i) {
      if (ui && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return bw(e, i);
      } else if (li) {
        if (r)
          return ww(r, i);
      } else if (n)
        return Ew(n, i);
    },
    has: function(i) {
      if (ui && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return xw(e, i);
      } else if (li) {
        if (r)
          return Ow(r, i);
      } else if (n)
        return Pw(n, i);
      return !1;
    },
    set: function(i, o) {
      ui && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new ui()), $w(e, i, o)) : li ? (r || (r = new li()), Sw(r, i, o)) : (n || (n = { key: {}, next: null }), Aw(n, i, o));
    }
  };
  return s;
}, _w = String.prototype.replace, Tw = /%20/g, Tc = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, af = {
  default: Tc.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return _w.call(t, Tw, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Tc.RFC1738,
  RFC3986: Tc.RFC3986
}, Rw = af, Rc = Object.prototype.hasOwnProperty, mr = Array.isArray, ft = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), Iw = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (mr(n)) {
      for (var s = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && s.push(n[i]);
      r.obj[r.prop] = s;
    }
  }
}, oy = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = 0; s < e.length; ++s)
    typeof e[s] < "u" && (n[s] = e[s]);
  return n;
}, Cw = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (mr(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Rc.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var s = e;
  return mr(e) && !mr(r) && (s = oy(e, n)), mr(e) && mr(r) ? (r.forEach(function(i, o) {
    if (Rc.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && i && typeof i == "object" ? e[o] = t(a, i, n) : e.push(i);
    } else
      e[o] = i;
  }), e) : Object.keys(r).reduce(function(i, o) {
    var a = r[o];
    return Rc.call(i, o) ? i[o] = t(i[o], a, n) : i[o] = a, i;
  }, s);
}, Mw = function(e, r) {
  return Object.keys(r).reduce(function(n, s) {
    return n[s] = r[s], n;
  }, e);
}, Fw = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Vw = function(e, r, n, s, i) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var a = "", c = 0; c < o.length; ++c) {
    var u = o.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || i === Rw.RFC1738 && (u === 40 || u === 41)) {
      a += o.charAt(c);
      continue;
    }
    if (u < 128) {
      a = a + ft[u];
      continue;
    }
    if (u < 2048) {
      a = a + (ft[192 | u >> 6] + ft[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      a = a + (ft[224 | u >> 12] + ft[128 | u >> 6 & 63] + ft[128 | u & 63]);
      continue;
    }
    c += 1, u = 65536 + ((u & 1023) << 10 | o.charCodeAt(c) & 1023), a += ft[240 | u >> 18] + ft[128 | u >> 12 & 63] + ft[128 | u >> 6 & 63] + ft[128 | u & 63];
  }
  return a;
}, Dw = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], s = 0; s < r.length; ++s)
    for (var i = r[s], o = i.obj[i.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
      var u = a[c], f = o[u];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: o, prop: u }), n.push(f));
    }
  return Iw(r), e;
}, Nw = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Lw = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, kw = function(e, r) {
  return [].concat(e, r);
}, Uw = function(e, r) {
  if (mr(e)) {
    for (var n = [], s = 0; s < e.length; s += 1)
      n.push(r(e[s]));
    return n;
  }
  return r(e);
}, ay = {
  arrayToObject: oy,
  assign: Mw,
  combine: kw,
  compact: Dw,
  decode: Fw,
  encode: Vw,
  isBuffer: Lw,
  isRegExp: Nw,
  maybeMap: Uw,
  merge: Cw
}, cy = jw, wi = ay, Wn = af, Bw = Object.prototype.hasOwnProperty, vh = {
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
}, Ot = Array.isArray, qw = Array.prototype.push, uy = function(t, e) {
  qw.apply(t, Ot(e) ? e : [e]);
}, Hw = Date.prototype.toISOString, gh = Wn.default, Ce = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: wi.encode,
  encodeValuesOnly: !1,
  format: gh,
  formatter: Wn.formatters[gh],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return Hw.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Gw = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Ic = {}, Jw = function t(e, r, n, s, i, o, a, c, u, f, l, h, p, d, m, y) {
  for (var v = e, $ = y, b = 0, x = !1; ($ = $.get(Ic)) !== void 0 && !x; ) {
    var T = $.get(e);
    if (b += 1, typeof T < "u") {
      if (T === b)
        throw new RangeError("Cyclic object value");
      x = !0;
    }
    typeof $.get(Ic) > "u" && (b = 0);
  }
  if (typeof c == "function" ? v = c(r, v) : v instanceof Date ? v = l(v) : n === "comma" && Ot(v) && (v = wi.maybeMap(v, function(ue) {
    return ue instanceof Date ? l(ue) : ue;
  })), v === null) {
    if (i)
      return a && !d ? a(r, Ce.encoder, m, "key", h) : r;
    v = "";
  }
  if (Gw(v) || wi.isBuffer(v)) {
    if (a) {
      var V = d ? r : a(r, Ce.encoder, m, "key", h);
      return [p(V) + "=" + p(a(v, Ce.encoder, m, "value", h))];
    }
    return [p(r) + "=" + p(String(v))];
  }
  var P = [];
  if (typeof v > "u")
    return P;
  var C;
  if (n === "comma" && Ot(v))
    d && a && (v = wi.maybeMap(v, a)), C = [{ value: v.length > 0 ? v.join(",") || null : void 0 }];
  else if (Ot(c))
    C = c;
  else {
    var M = Object.keys(v);
    C = u ? M.sort(u) : M;
  }
  for (var G = s && Ot(v) && v.length === 1 ? r + "[]" : r, S = 0; S < C.length; ++S) {
    var I = C[S], N = typeof I == "object" && typeof I.value < "u" ? I.value : v[I];
    if (!(o && N === null)) {
      var Y = Ot(v) ? typeof n == "function" ? n(G, I) : G : G + (f ? "." + I : "[" + I + "]");
      y.set(e, b);
      var ve = cy();
      ve.set(Ic, y), uy(P, t(
        N,
        Y,
        n,
        s,
        i,
        o,
        n === "comma" && d && Ot(v) ? null : a,
        c,
        u,
        f,
        l,
        h,
        p,
        d,
        m,
        ve
      ));
    }
  }
  return P;
}, zw = function(e) {
  if (!e)
    return Ce;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || Ce.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Wn.default;
  if (typeof e.format < "u") {
    if (!Bw.call(Wn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var s = Wn.formatters[n], i = Ce.filter;
  return (typeof e.filter == "function" || Ot(e.filter)) && (i = e.filter), {
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
}, Kw = function(t, e) {
  var r = t, n = zw(e), s, i;
  typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : Ot(n.filter) && (i = n.filter, s = i);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var a;
  e && e.arrayFormat in vh ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
  var c = vh[a];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = c === "comma" && e && e.commaRoundTrip;
  s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
  for (var f = cy(), l = 0; l < s.length; ++l) {
    var h = s[l];
    n.skipNulls && r[h] === null || uy(o, Jw(
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
      f
    ));
  }
  var p = o.join(n.delimiter), d = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? d += "utf8=%26%2310003%3B&" : d += "utf8=%E2%9C%93&"), p.length > 0 ? d + p : "";
}, sn = ay, ju = Object.prototype.hasOwnProperty, Ww = Array.isArray, Oe = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: sn.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Yw = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, ly = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Xw = "utf8=%26%2310003%3B", Qw = "utf8=%E2%9C%93", Zw = function(e, r) {
  var n = { __proto__: null }, s = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = s.split(r.delimiter, i), a = -1, c, u = r.charset;
  if (r.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === Qw ? u = "utf-8" : o[c] === Xw && (u = "iso-8859-1"), a = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== a) {
      var f = o[c], l = f.indexOf("]="), h = l === -1 ? f.indexOf("=") : l + 1, p, d;
      h === -1 ? (p = r.decoder(f, Oe.decoder, u, "key"), d = r.strictNullHandling ? null : "") : (p = r.decoder(f.slice(0, h), Oe.decoder, u, "key"), d = sn.maybeMap(
        ly(f.slice(h + 1), r),
        function(m) {
          return r.decoder(m, Oe.decoder, u, "value");
        }
      )), d && r.interpretNumericEntities && u === "iso-8859-1" && (d = Yw(d)), f.indexOf("[]=") > -1 && (d = Ww(d) ? [d] : d), ju.call(n, p) ? n[p] = sn.combine(n[p], d) : n[p] = d;
    }
  return n;
}, eS = function(t, e, r, n) {
  for (var s = n ? e : ly(e, r), i = t.length - 1; i >= 0; --i) {
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
}, tS = function(e, r, n, s) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, c = n.depth > 0 && o.exec(i), u = c ? i.slice(0, c.index) : i, f = [];
    if (u) {
      if (!n.plainObjects && ju.call(Object.prototype, u) && !n.allowPrototypes)
        return;
      f.push(u);
    }
    for (var l = 0; n.depth > 0 && (c = a.exec(i)) !== null && l < n.depth; ) {
      if (l += 1, !n.plainObjects && ju.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(c[1]);
    }
    return c && f.push("[" + i.slice(c.index) + "]"), eS(f, r, n, s);
  }
}, rS = function(e) {
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
    delimiter: typeof e.delimiter == "string" || sn.isRegExp(e.delimiter) ? e.delimiter : Oe.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Oe.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Oe.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Oe.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Oe.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Oe.strictNullHandling
  };
}, nS = function(t, e) {
  var r = rS(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? Zw(t, r) : t, s = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), o = 0; o < i.length; ++o) {
    var a = i[o], c = tS(a, n[a], r, typeof t == "string");
    s = sn.merge(s, c, r);
  }
  return r.allowSparse === !0 ? s : sn.compact(s);
}, sS = Kw, iS = nS, oS = af, aS = {
  formats: oS,
  parse: iS,
  stringify: sS
};
const _u = /* @__PURE__ */ jr(aS);
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function fy(t) {
  return typeof t > "u" || t === null;
}
function cS(t) {
  return typeof t == "object" && t !== null;
}
function uS(t) {
  return Array.isArray(t) ? t : fy(t) ? [] : [t];
}
function lS(t, e) {
  var r, n, s, i;
  if (e)
    for (i = Object.keys(e), r = 0, n = i.length; r < n; r += 1)
      s = i[r], t[s] = e[s];
  return t;
}
function fS(t, e) {
  var r = "", n;
  for (n = 0; n < e; n += 1)
    r += t;
  return r;
}
function pS(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var hS = fy, dS = cS, mS = uS, yS = fS, vS = pS, gS = lS, Se = {
  isNothing: hS,
  isObject: dS,
  toArray: mS,
  repeat: yS,
  isNegativeZero: vS,
  extend: gS
};
function py(t, e) {
  var r = "", n = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), n + " " + r) : n;
}
function ts(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = py(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
ts.prototype = Object.create(Error.prototype);
ts.prototype.constructor = ts;
ts.prototype.toString = function(e) {
  return this.name + ": " + py(this, e);
};
var Le = ts;
function Cc(t, e, r, n, s) {
  var i = "", o = "", a = Math.floor(s / 2) - 1;
  return n - e > a && (i = " ... ", e = n - a + i.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: i + t.slice(e, r).replace(/\t/g, "→") + o,
    pos: n - e + i.length
    // relative position
  };
}
function Mc(t, e) {
  return Se.repeat(" ", e - t.length) + t;
}
function bS(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], s = [], i, o = -1; i = r.exec(t.buffer); )
    s.push(i.index), n.push(i.index + i[0].length), t.position <= i.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, u, f = Math.min(t.line + e.linesAfter, s.length).toString().length, l = e.maxLength - (e.indent + f + 3);
  for (c = 1; c <= e.linesBefore && !(o - c < 0); c++)
    u = Cc(
      t.buffer,
      n[o - c],
      s[o - c],
      t.position - (n[o] - n[o - c]),
      l
    ), a = Se.repeat(" ", e.indent) + Mc((t.line - c + 1).toString(), f) + " | " + u.str + `
` + a;
  for (u = Cc(t.buffer, n[o], s[o], t.position, l), a += Se.repeat(" ", e.indent) + Mc((t.line + 1).toString(), f) + " | " + u.str + `
`, a += Se.repeat("-", e.indent + f + 3 + u.pos) + `^
`, c = 1; c <= e.linesAfter && !(o + c >= s.length); c++)
    u = Cc(
      t.buffer,
      n[o + c],
      s[o + c],
      t.position - (n[o] - n[o + c]),
      l
    ), a += Se.repeat(" ", e.indent) + Mc((t.line + c + 1).toString(), f) + " | " + u.str + `
`;
  return a.replace(/\n$/, "");
}
var $S = bS, xS = [
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
], wS = [
  "scalar",
  "sequence",
  "mapping"
];
function SS(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(n) {
      e[String(n)] = r;
    });
  }), e;
}
function OS(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (xS.indexOf(r) === -1)
      throw new Le('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = SS(e.styleAliases || null), wS.indexOf(this.kind) === -1)
    throw new Le('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Re = OS;
function bh(t, e) {
  var r = [];
  return t[e].forEach(function(n) {
    var s = r.length;
    r.forEach(function(i, o) {
      i.tag === n.tag && i.kind === n.kind && i.multi === n.multi && (s = o);
    }), r[s] = n;
  }), r;
}
function ES() {
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
function Tu(t) {
  return this.extend(t);
}
Tu.prototype.extend = function(e) {
  var r = [], n = [];
  if (e instanceof Re)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  else
    throw new Le("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(i) {
    if (!(i instanceof Re))
      throw new Le("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new Le("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new Le("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(i) {
    if (!(i instanceof Re))
      throw new Le("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(Tu.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = bh(s, "implicit"), s.compiledExplicit = bh(s, "explicit"), s.compiledTypeMap = ES(s.compiledImplicit, s.compiledExplicit), s;
};
var hy = Tu, dy = new Re("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), my = new Re("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), yy = new Re("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), vy = new hy({
  explicit: [
    dy,
    my,
    yy
  ]
});
function AS(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function PS() {
  return null;
}
function jS(t) {
  return t === null;
}
var gy = new Re("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: AS,
  construct: PS,
  predicate: jS,
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
function _S(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function TS(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function RS(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var by = new Re("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: _S,
  construct: TS,
  predicate: RS,
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
function IS(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function CS(t) {
  return 48 <= t && t <= 55;
}
function MS(t) {
  return 48 <= t && t <= 57;
}
function FS(t) {
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
          if (!IS(t.charCodeAt(r)))
            return !1;
          n = !0;
        }
      return n && s !== "_";
    }
    if (s === "o") {
      for (r++; r < e; r++)
        if (s = t[r], s !== "_") {
          if (!CS(t.charCodeAt(r)))
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
      if (!MS(t.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || s === "_");
}
function VS(t) {
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
function DS(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Se.isNegativeZero(t);
}
var $y = new Re("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: FS,
  construct: VS,
  predicate: DS,
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
}), NS = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function LS(t) {
  return !(t === null || !NS.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function kS(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var US = /^[-+]?[0-9]+e/;
function BS(t, e) {
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
  return r = t.toString(10), US.test(r) ? r.replace("e", ".e") : r;
}
function qS(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Se.isNegativeZero(t));
}
var xy = new Re("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: LS,
  construct: kS,
  predicate: qS,
  represent: BS,
  defaultStyle: "lowercase"
}), wy = vy.extend({
  implicit: [
    gy,
    by,
    $y,
    xy
  ]
}), Sy = wy, Oy = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Ey = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function HS(t) {
  return t === null ? !1 : Oy.exec(t) !== null || Ey.exec(t) !== null;
}
function GS(t) {
  var e, r, n, s, i, o, a, c = 0, u = null, f, l, h;
  if (e = Oy.exec(t), e === null && (e = Ey.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (r = +e[1], n = +e[2] - 1, s = +e[3], !e[4])
    return new Date(Date.UTC(r, n, s));
  if (i = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (c = e[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return e[9] && (f = +e[10], l = +(e[11] || 0), u = (f * 60 + l) * 6e4, e[9] === "-" && (u = -u)), h = new Date(Date.UTC(r, n, s, i, o, a, c)), u && h.setTime(h.getTime() - u), h;
}
function JS(t) {
  return t.toISOString();
}
var Ay = new Re("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: HS,
  construct: GS,
  instanceOf: Date,
  represent: JS
});
function zS(t) {
  return t === "<<" || t === null;
}
var Py = new Re("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: zS
}), cf = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function KS(t) {
  if (t === null)
    return !1;
  var e, r, n = 0, s = t.length, i = cf;
  for (r = 0; r < s; r++)
    if (e = i.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0)
        return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function WS(t) {
  var e, r, n = t.replace(/[\r\n=]/g, ""), s = n.length, i = cf, o = 0, a = [];
  for (e = 0; e < s; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | i.indexOf(n.charAt(e));
  return r = s % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function YS(t) {
  var e = "", r = 0, n, s, i = t.length, o = cf;
  for (n = 0; n < i; n++)
    n % 3 === 0 && n && (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]), r = (r << 8) + t[n];
  return s = i % 3, s === 0 ? (e += o[r >> 18 & 63], e += o[r >> 12 & 63], e += o[r >> 6 & 63], e += o[r & 63]) : s === 2 ? (e += o[r >> 10 & 63], e += o[r >> 4 & 63], e += o[r << 2 & 63], e += o[64]) : s === 1 && (e += o[r >> 2 & 63], e += o[r << 4 & 63], e += o[64], e += o[64]), e;
}
function XS(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var jy = new Re("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: KS,
  construct: WS,
  predicate: XS,
  represent: YS
}), QS = Object.prototype.hasOwnProperty, ZS = Object.prototype.toString;
function eO(t) {
  if (t === null)
    return !0;
  var e = [], r, n, s, i, o, a = t;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (s = a[r], o = !1, ZS.call(s) !== "[object Object]")
      return !1;
    for (i in s)
      if (QS.call(s, i))
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
function tO(t) {
  return t !== null ? t : [];
}
var _y = new Re("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: eO,
  construct: tO
}), rO = Object.prototype.toString;
function nO(t) {
  if (t === null)
    return !0;
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1) {
    if (n = o[e], rO.call(n) !== "[object Object]" || (s = Object.keys(n), s.length !== 1))
      return !1;
    i[e] = [s[0], n[s[0]]];
  }
  return !0;
}
function sO(t) {
  if (t === null)
    return [];
  var e, r, n, s, i, o = t;
  for (i = new Array(o.length), e = 0, r = o.length; e < r; e += 1)
    n = o[e], s = Object.keys(n), i[e] = [s[0], n[s[0]]];
  return i;
}
var Ty = new Re("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: nO,
  construct: sO
}), iO = Object.prototype.hasOwnProperty;
function oO(t) {
  if (t === null)
    return !0;
  var e, r = t;
  for (e in r)
    if (iO.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function aO(t) {
  return t !== null ? t : {};
}
var Ry = new Re("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: oO,
  construct: aO
}), uf = Sy.extend({
  implicit: [
    Ay,
    Py
  ],
  explicit: [
    jy,
    _y,
    Ty,
    Ry
  ]
}), rr = Object.prototype.hasOwnProperty, Ni = 1, Iy = 2, Cy = 3, Li = 4, Fc = 1, cO = 2, $h = 3, uO = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, lO = /[\x85\u2028\u2029]/, fO = /[,\[\]\{\}]/, My = /^(?:!|!!|![a-z\-]+!)$/i, Fy = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function xh(t) {
  return Object.prototype.toString.call(t);
}
function yt(t) {
  return t === 10 || t === 13;
}
function $r(t) {
  return t === 9 || t === 32;
}
function He(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function zr(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function pO(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function hO(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function dO(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function wh(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function mO(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var Vy = new Array(256), Dy = new Array(256);
for (var kr = 0; kr < 256; kr++)
  Vy[kr] = wh(kr) ? 1 : 0, Dy[kr] = wh(kr);
function yO(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || uf, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Ny(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = $S(r), new Le(e, r);
}
function F(t, e) {
  throw Ny(t, e);
}
function ki(t, e) {
  t.onWarning && t.onWarning.call(null, Ny(t, e));
}
var Sh = {
  YAML: function(e, r, n) {
    var s, i, o;
    e.version !== null && F(e, "duplication of %YAML directive"), n.length !== 1 && F(e, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), s === null && F(e, "ill-formed argument of the YAML directive"), i = parseInt(s[1], 10), o = parseInt(s[2], 10), i !== 1 && F(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && ki(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, n) {
    var s, i;
    n.length !== 2 && F(e, "TAG directive accepts exactly two arguments"), s = n[0], i = n[1], My.test(s) || F(e, "ill-formed tag handle (first argument) of the TAG directive"), rr.call(e.tagMap, s) && F(e, 'there is a previously declared suffix for "' + s + '" tag handle'), Fy.test(i) || F(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      F(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[s] = i;
  }
};
function tr(t, e, r, n) {
  var s, i, o, a;
  if (e < r) {
    if (a = t.input.slice(e, r), n)
      for (s = 0, i = a.length; s < i; s += 1)
        o = a.charCodeAt(s), o === 9 || 32 <= o && o <= 1114111 || F(t, "expected valid JSON character");
    else
      uO.test(a) && F(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function Oh(t, e, r, n) {
  var s, i, o, a;
  for (Se.isObject(r) || F(t, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), o = 0, a = s.length; o < a; o += 1)
    i = s[o], rr.call(e, i) || (e[i] = r[i], n[i] = !0);
}
function Kr(t, e, r, n, s, i, o, a, c) {
  var u, f;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), u = 0, f = s.length; u < f; u += 1)
      Array.isArray(s[u]) && F(t, "nested arrays are not supported inside keys"), typeof s == "object" && xh(s[u]) === "[object Object]" && (s[u] = "[object Object]");
  if (typeof s == "object" && xh(s) === "[object Object]" && (s = "[object Object]"), s = String(s), e === null && (e = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (u = 0, f = i.length; u < f; u += 1)
        Oh(t, e, i[u], r);
    else
      Oh(t, e, i, r);
  else
    !t.json && !rr.call(r, s) && rr.call(e, s) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = c || t.position, F(t, "duplicated mapping key")), s === "__proto__" ? Object.defineProperty(e, s, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    }) : e[s] = i, delete r[s];
  return e;
}
function lf(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : F(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function $e(t, e, r) {
  for (var n = 0, s = t.input.charCodeAt(t.position); s !== 0; ) {
    for (; $r(s); )
      s === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), s = t.input.charCodeAt(++t.position);
    if (e && s === 35)
      do
        s = t.input.charCodeAt(++t.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (yt(s))
      for (lf(t), s = t.input.charCodeAt(t.position), n++, t.lineIndent = 0; s === 32; )
        t.lineIndent++, s = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && t.lineIndent < r && ki(t, "deficient indentation"), n;
}
function oa(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || He(r)));
}
function ff(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += Se.repeat(`
`, e - 1));
}
function vO(t, e, r) {
  var n, s, i, o, a, c, u, f, l = t.kind, h = t.result, p;
  if (p = t.input.charCodeAt(t.position), He(p) || zr(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (s = t.input.charCodeAt(t.position + 1), He(s) || r && zr(s)))
    return !1;
  for (t.kind = "scalar", t.result = "", i = o = t.position, a = !1; p !== 0; ) {
    if (p === 58) {
      if (s = t.input.charCodeAt(t.position + 1), He(s) || r && zr(s))
        break;
    } else if (p === 35) {
      if (n = t.input.charCodeAt(t.position - 1), He(n))
        break;
    } else {
      if (t.position === t.lineStart && oa(t) || r && zr(p))
        break;
      if (yt(p))
        if (c = t.line, u = t.lineStart, f = t.lineIndent, $e(t, !1, -1), t.lineIndent >= e) {
          a = !0, p = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = c, t.lineStart = u, t.lineIndent = f;
          break;
        }
    }
    a && (tr(t, i, o, !1), ff(t, t.line - c), i = o = t.position, a = !1), $r(p) || (o = t.position + 1), p = t.input.charCodeAt(++t.position);
  }
  return tr(t, i, o, !1), t.result ? !0 : (t.kind = l, t.result = h, !1);
}
function gO(t, e) {
  var r, n, s;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, n = s = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (tr(t, n, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        n = t.position, t.position++, s = t.position;
      else
        return !0;
    else
      yt(r) ? (tr(t, n, s, !0), ff(t, $e(t, !1, e)), n = s = t.position) : t.position === t.lineStart && oa(t) ? F(t, "unexpected end of the document within a single quoted scalar") : (t.position++, s = t.position);
  F(t, "unexpected end of the stream within a single quoted scalar");
}
function bO(t, e) {
  var r, n, s, i, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return tr(t, r, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (tr(t, r, t.position, !0), a = t.input.charCodeAt(++t.position), yt(a))
        $e(t, !1, e);
      else if (a < 256 && Vy[a])
        t.result += Dy[a], t.position++;
      else if ((o = hO(a)) > 0) {
        for (s = o, i = 0; s > 0; s--)
          a = t.input.charCodeAt(++t.position), (o = pO(a)) >= 0 ? i = (i << 4) + o : F(t, "expected hexadecimal character");
        t.result += mO(i), t.position++;
      } else
        F(t, "unknown escape sequence");
      r = n = t.position;
    } else
      yt(a) ? (tr(t, r, n, !0), ff(t, $e(t, !1, e)), r = n = t.position) : t.position === t.lineStart && oa(t) ? F(t, "unexpected end of the document within a double quoted scalar") : (t.position++, n = t.position);
  }
  F(t, "unexpected end of the stream within a double quoted scalar");
}
function $O(t, e) {
  var r = !0, n, s, i, o = t.tag, a, c = t.anchor, u, f, l, h, p, d = /* @__PURE__ */ Object.create(null), m, y, v, $;
  if ($ = t.input.charCodeAt(t.position), $ === 91)
    f = 93, p = !1, a = [];
  else if ($ === 123)
    f = 125, p = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), $ = t.input.charCodeAt(++t.position); $ !== 0; ) {
    if ($e(t, !0, e), $ = t.input.charCodeAt(t.position), $ === f)
      return t.position++, t.tag = o, t.anchor = c, t.kind = p ? "mapping" : "sequence", t.result = a, !0;
    r ? $ === 44 && F(t, "expected the node content, but found ','") : F(t, "missed comma between flow collection entries"), y = m = v = null, l = h = !1, $ === 63 && (u = t.input.charCodeAt(t.position + 1), He(u) && (l = h = !0, t.position++, $e(t, !0, e))), n = t.line, s = t.lineStart, i = t.position, on(t, e, Ni, !1, !0), y = t.tag, m = t.result, $e(t, !0, e), $ = t.input.charCodeAt(t.position), (h || t.line === n) && $ === 58 && (l = !0, $ = t.input.charCodeAt(++t.position), $e(t, !0, e), on(t, e, Ni, !1, !0), v = t.result), p ? Kr(t, a, d, y, m, v, n, s, i) : l ? a.push(Kr(t, null, d, y, m, v, n, s, i)) : a.push(m), $e(t, !0, e), $ = t.input.charCodeAt(t.position), $ === 44 ? (r = !0, $ = t.input.charCodeAt(++t.position)) : r = !1;
  }
  F(t, "unexpected end of the stream within a flow collection");
}
function xO(t, e) {
  var r, n, s = Fc, i = !1, o = !1, a = e, c = 0, u = !1, f, l;
  if (l = t.input.charCodeAt(t.position), l === 124)
    n = !1;
  else if (l === 62)
    n = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; l !== 0; )
    if (l = t.input.charCodeAt(++t.position), l === 43 || l === 45)
      Fc === s ? s = l === 43 ? $h : cO : F(t, "repeat of a chomping mode identifier");
    else if ((f = dO(l)) >= 0)
      f === 0 ? F(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? F(t, "repeat of an indentation width identifier") : (a = e + f - 1, o = !0);
    else
      break;
  if ($r(l)) {
    do
      l = t.input.charCodeAt(++t.position);
    while ($r(l));
    if (l === 35)
      do
        l = t.input.charCodeAt(++t.position);
      while (!yt(l) && l !== 0);
  }
  for (; l !== 0; ) {
    for (lf(t), t.lineIndent = 0, l = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && l === 32; )
      t.lineIndent++, l = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), yt(l)) {
      c++;
      continue;
    }
    if (t.lineIndent < a) {
      s === $h ? t.result += Se.repeat(`
`, i ? 1 + c : c) : s === Fc && i && (t.result += `
`);
      break;
    }
    for (n ? $r(l) ? (u = !0, t.result += Se.repeat(`
`, i ? 1 + c : c)) : u ? (u = !1, t.result += Se.repeat(`
`, c + 1)) : c === 0 ? i && (t.result += " ") : t.result += Se.repeat(`
`, c) : t.result += Se.repeat(`
`, i ? 1 + c : c), i = !0, o = !0, c = 0, r = t.position; !yt(l) && l !== 0; )
      l = t.input.charCodeAt(++t.position);
    tr(t, r, t.position, !1);
  }
  return !0;
}
function Eh(t, e) {
  var r, n = t.tag, s = t.anchor, i = [], o, a = !1, c;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = i), c = t.input.charCodeAt(t.position); c !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, F(t, "tab characters must not be used in indentation")), !(c !== 45 || (o = t.input.charCodeAt(t.position + 1), !He(o)))); ) {
    if (a = !0, t.position++, $e(t, !0, -1) && t.lineIndent <= e) {
      i.push(null), c = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, on(t, e, Cy, !1, !0), i.push(t.result), $e(t, !0, -1), c = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && c !== 0)
      F(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = n, t.anchor = s, t.kind = "sequence", t.result = i, !0) : !1;
}
function wO(t, e, r) {
  var n, s, i, o, a, c, u = t.tag, f = t.anchor, l = {}, h = /* @__PURE__ */ Object.create(null), p = null, d = null, m = null, y = !1, v = !1, $;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = l), $ = t.input.charCodeAt(t.position); $ !== 0; ) {
    if (!y && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, F(t, "tab characters must not be used in indentation")), n = t.input.charCodeAt(t.position + 1), i = t.line, ($ === 63 || $ === 58) && He(n))
      $ === 63 ? (y && (Kr(t, l, h, p, d, null, o, a, c), p = d = m = null), v = !0, y = !0, s = !0) : y ? (y = !1, s = !0) : F(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, $ = n;
    else {
      if (o = t.line, a = t.lineStart, c = t.position, !on(t, r, Iy, !1, !0))
        break;
      if (t.line === i) {
        for ($ = t.input.charCodeAt(t.position); $r($); )
          $ = t.input.charCodeAt(++t.position);
        if ($ === 58)
          $ = t.input.charCodeAt(++t.position), He($) || F(t, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Kr(t, l, h, p, d, null, o, a, c), p = d = m = null), v = !0, y = !1, s = !1, p = t.tag, d = t.result;
        else if (v)
          F(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = u, t.anchor = f, !0;
      } else if (v)
        F(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = u, t.anchor = f, !0;
    }
    if ((t.line === i || t.lineIndent > e) && (y && (o = t.line, a = t.lineStart, c = t.position), on(t, e, Li, !0, s) && (y ? d = t.result : m = t.result), y || (Kr(t, l, h, p, d, m, o, a, c), p = d = m = null), $e(t, !0, -1), $ = t.input.charCodeAt(t.position)), (t.line === i || t.lineIndent > e) && $ !== 0)
      F(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return y && Kr(t, l, h, p, d, null, o, a, c), v && (t.tag = u, t.anchor = f, t.kind = "mapping", t.result = l), v;
}
function SO(t) {
  var e, r = !1, n = !1, s, i, o;
  if (o = t.input.charCodeAt(t.position), o !== 33)
    return !1;
  if (t.tag !== null && F(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (r = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (n = !0, s = "!!", o = t.input.charCodeAt(++t.position)) : s = "!", e = t.position, r) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : F(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !He(o); )
      o === 33 && (n ? F(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(e - 1, t.position + 1), My.test(s) || F(t, "named tag handle cannot contain such characters"), n = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), fO.test(i) && F(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !Fy.test(i) && F(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    F(t, "tag name is malformed: " + i);
  }
  return r ? t.tag = i : rr.call(t.tagMap, s) ? t.tag = t.tagMap[s] + i : s === "!" ? t.tag = "!" + i : s === "!!" ? t.tag = "tag:yaml.org,2002:" + i : F(t, 'undeclared tag handle "' + s + '"'), !0;
}
function OO(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38)
    return !1;
  for (t.anchor !== null && F(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !He(r) && !zr(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && F(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function EO(t) {
  var e, r, n;
  if (n = t.input.charCodeAt(t.position), n !== 42)
    return !1;
  for (n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !He(n) && !zr(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && F(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), rr.call(t.anchorMap, r) || F(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], $e(t, !0, -1), !0;
}
function on(t, e, r, n, s) {
  var i, o, a, c = 1, u = !1, f = !1, l, h, p, d, m, y;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, i = o = a = Li === r || Cy === r, n && $e(t, !0, -1) && (u = !0, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)), c === 1)
    for (; SO(t) || OO(t); )
      $e(t, !0, -1) ? (u = !0, a = i, t.lineIndent > e ? c = 1 : t.lineIndent === e ? c = 0 : t.lineIndent < e && (c = -1)) : a = !1;
  if (a && (a = u || s), (c === 1 || Li === r) && (Ni === r || Iy === r ? m = e : m = e + 1, y = t.position - t.lineStart, c === 1 ? a && (Eh(t, y) || wO(t, y, m)) || $O(t, m) ? f = !0 : (o && xO(t, m) || gO(t, m) || bO(t, m) ? f = !0 : EO(t) ? (f = !0, (t.tag !== null || t.anchor !== null) && F(t, "alias node should not have any properties")) : vO(t, m, Ni === r) && (f = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : c === 0 && (f = a && Eh(t, y))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && F(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), l = 0, h = t.implicitTypes.length; l < h; l += 1)
      if (d = t.implicitTypes[l], d.resolve(t.result)) {
        t.result = d.construct(t.result), t.tag = d.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (rr.call(t.typeMap[t.kind || "fallback"], t.tag))
      d = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (d = null, p = t.typeMap.multi[t.kind || "fallback"], l = 0, h = p.length; l < h; l += 1)
        if (t.tag.slice(0, p[l].tag.length) === p[l].tag) {
          d = p[l];
          break;
        }
    d || F(t, "unknown tag !<" + t.tag + ">"), t.result !== null && d.kind !== t.kind && F(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + d.kind + '", not "' + t.kind + '"'), d.resolve(t.result, t.tag) ? (t.result = d.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : F(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || f;
}
function AO(t) {
  var e = t.position, r, n, s, i = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && ($e(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (i = !0, o = t.input.charCodeAt(++t.position), r = t.position; o !== 0 && !He(o); )
      o = t.input.charCodeAt(++t.position);
    for (n = t.input.slice(r, t.position), s = [], n.length < 1 && F(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; $r(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !yt(o));
        break;
      }
      if (yt(o))
        break;
      for (r = t.position; o !== 0 && !He(o); )
        o = t.input.charCodeAt(++t.position);
      s.push(t.input.slice(r, t.position));
    }
    o !== 0 && lf(t), rr.call(Sh, n) ? Sh[n](t, n, s) : ki(t, 'unknown document directive "' + n + '"');
  }
  if ($e(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, $e(t, !0, -1)) : i && F(t, "directives end mark is expected"), on(t, t.lineIndent - 1, Li, !1, !0), $e(t, !0, -1), t.checkLineBreaks && lO.test(t.input.slice(e, t.position)) && ki(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && oa(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, $e(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    F(t, "end of the stream or a document separator is expected");
  else
    return;
}
function Ly(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new yO(t, e), n = t.indexOf("\0");
  for (n !== -1 && (r.position = n, F(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    AO(r);
  return r.documents;
}
function PO(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var n = Ly(t, r);
  if (typeof e != "function")
    return n;
  for (var s = 0, i = n.length; s < i; s += 1)
    e(n[s]);
}
function jO(t, e) {
  var r = Ly(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Le("expected a single document in the stream, but found more");
  }
}
var _O = PO, TO = jO, ky = {
  loadAll: _O,
  load: TO
}, Uy = Object.prototype.toString, By = Object.prototype.hasOwnProperty, pf = 65279, RO = 9, rs = 10, IO = 13, CO = 32, MO = 33, FO = 34, Ru = 35, VO = 37, DO = 38, NO = 39, LO = 42, qy = 44, kO = 45, Ui = 58, UO = 61, BO = 62, qO = 63, HO = 64, Hy = 91, Gy = 93, GO = 96, Jy = 123, JO = 124, zy = 125, Ve = {};
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
var zO = [
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
], KO = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function WO(t, e) {
  var r, n, s, i, o, a, c;
  if (e === null)
    return {};
  for (r = {}, n = Object.keys(e), s = 0, i = n.length; s < i; s += 1)
    o = n[s], a = String(e[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = t.compiledTypeMap.fallback[o], c && By.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function YO(t) {
  var e, r, n;
  if (e = t.toString(16).toUpperCase(), t <= 255)
    r = "x", n = 2;
  else if (t <= 65535)
    r = "u", n = 4;
  else if (t <= 4294967295)
    r = "U", n = 8;
  else
    throw new Le("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Se.repeat("0", n - e.length) + e;
}
var XO = 1, ns = 2;
function QO(t) {
  this.schema = t.schema || uf, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = Se.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = WO(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === '"' ? ns : XO, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Ah(t, e) {
  for (var r = Se.repeat(" ", e), n = 0, s = -1, i = "", o, a = t.length; n < a; )
    s = t.indexOf(`
`, n), s === -1 ? (o = t.slice(n), n = a) : (o = t.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (i += r), i += o;
  return i;
}
function Iu(t, e) {
  return `
` + Se.repeat(" ", t.indent * e);
}
function ZO(t, e) {
  var r, n, s;
  for (r = 0, n = t.implicitTypes.length; r < n; r += 1)
    if (s = t.implicitTypes[r], s.resolve(e))
      return !0;
  return !1;
}
function Bi(t) {
  return t === CO || t === RO;
}
function ss(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== pf || 65536 <= t && t <= 1114111;
}
function Ph(t) {
  return ss(t) && t !== pf && t !== IO && t !== rs;
}
function jh(t, e, r) {
  var n = Ph(t), s = n && !Bi(t);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && t !== qy && t !== Hy && t !== Gy && t !== Jy && t !== zy) && t !== Ru && !(e === Ui && !s) || Ph(e) && !Bi(e) && t === Ru || e === Ui && s
  );
}
function eE(t) {
  return ss(t) && t !== pf && !Bi(t) && t !== kO && t !== qO && t !== Ui && t !== qy && t !== Hy && t !== Gy && t !== Jy && t !== zy && t !== Ru && t !== DO && t !== LO && t !== MO && t !== JO && t !== UO && t !== BO && t !== NO && t !== FO && t !== VO && t !== HO && t !== GO;
}
function tE(t) {
  return !Bi(t) && t !== Ui;
}
function qn(t, e) {
  var r = t.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && e + 1 < t.length && (n = t.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function Ky(t) {
  var e = /^\n* /;
  return e.test(t);
}
var Wy = 1, Cu = 2, Yy = 3, Xy = 4, Jr = 5;
function rE(t, e, r, n, s, i, o, a) {
  var c, u = 0, f = null, l = !1, h = !1, p = n !== -1, d = -1, m = eE(qn(t, 0)) && tE(qn(t, t.length - 1));
  if (e || o)
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = qn(t, c), !ss(u))
        return Jr;
      m = m && jh(u, f, a), f = u;
    }
  else {
    for (c = 0; c < t.length; u >= 65536 ? c += 2 : c++) {
      if (u = qn(t, c), u === rs)
        l = !0, p && (h = h || // Foldable line = too long, and not more-indented.
        c - d - 1 > n && t[d + 1] !== " ", d = c);
      else if (!ss(u))
        return Jr;
      m = m && jh(u, f, a), f = u;
    }
    h = h || p && c - d - 1 > n && t[d + 1] !== " ";
  }
  return !l && !h ? m && !o && !s(t) ? Wy : i === ns ? Jr : Cu : r > 9 && Ky(t) ? Jr : o ? i === ns ? Jr : Cu : h ? Xy : Yy;
}
function nE(t, e, r, n, s) {
  t.dump = function() {
    if (e.length === 0)
      return t.quotingType === ns ? '""' : "''";
    if (!t.noCompatMode && (zO.indexOf(e) !== -1 || KO.test(e)))
      return t.quotingType === ns ? '"' + e + '"' : "'" + e + "'";
    var i = t.indent * Math.max(1, r), o = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - i), a = n || t.flowLevel > -1 && r >= t.flowLevel;
    function c(u) {
      return ZO(t, u);
    }
    switch (rE(
      e,
      a,
      t.indent,
      o,
      c,
      t.quotingType,
      t.forceQuotes && !n,
      s
    )) {
      case Wy:
        return e;
      case Cu:
        return "'" + e.replace(/'/g, "''") + "'";
      case Yy:
        return "|" + _h(e, t.indent) + Th(Ah(e, i));
      case Xy:
        return ">" + _h(e, t.indent) + Th(Ah(sE(e, o), i));
      case Jr:
        return '"' + iE(e) + '"';
      default:
        throw new Le("impossible error: invalid scalar style");
    }
  }();
}
function _h(t, e) {
  var r = Ky(t) ? String(e) : "", n = t[t.length - 1] === `
`, s = n && (t[t.length - 2] === `
` || t === `
`), i = s ? "+" : n ? "" : "-";
  return r + i + `
`;
}
function Th(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function sE(t, e) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var u = t.indexOf(`
`);
    return u = u !== -1 ? u : t.length, r.lastIndex = u, Rh(t.slice(0, u), e);
  }(), s = t[0] === `
` || t[0] === " ", i, o; o = r.exec(t); ) {
    var a = o[1], c = o[2];
    i = c[0] === " ", n += a + (!s && !i && c !== "" ? `
` : "") + Rh(c, e), s = i;
  }
  return n;
}
function Rh(t, e) {
  if (t === "" || t[0] === " ")
    return t;
  for (var r = / [^ ]/g, n, s = 0, i, o = 0, a = 0, c = ""; n = r.exec(t); )
    a = n.index, a - s > e && (i = o > s ? o : a, c += `
` + t.slice(s, i), s = i + 1), o = a;
  return c += `
`, t.length - s > e && o > s ? c += t.slice(s, o) + `
` + t.slice(o + 1) : c += t.slice(s), c.slice(1);
}
function iE(t) {
  for (var e = "", r = 0, n, s = 0; s < t.length; r >= 65536 ? s += 2 : s++)
    r = qn(t, s), n = Ve[r], !n && ss(r) ? (e += t[s], r >= 65536 && (e += t[s + 1])) : e += n || YO(r);
  return e;
}
function oE(t, e, r) {
  var n = "", s = t.tag, i, o, a;
  for (i = 0, o = r.length; i < o; i += 1)
    a = r[i], t.replacer && (a = t.replacer.call(r, String(i), a)), (Rt(t, e, a, !1, !1) || typeof a > "u" && Rt(t, e, null, !1, !1)) && (n !== "" && (n += "," + (t.condenseFlow ? "" : " ")), n += t.dump);
  t.tag = s, t.dump = "[" + n + "]";
}
function Ih(t, e, r, n) {
  var s = "", i = t.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], t.replacer && (c = t.replacer.call(r, String(o), c)), (Rt(t, e + 1, c, !0, !0, !1, !0) || typeof c > "u" && Rt(t, e + 1, null, !0, !0, !1, !0)) && ((!n || s !== "") && (s += Iu(t, e)), t.dump && rs === t.dump.charCodeAt(0) ? s += "-" : s += "- ", s += t.dump);
  t.tag = i, t.dump = s || "[]";
}
function aE(t, e, r) {
  var n = "", s = t.tag, i = Object.keys(r), o, a, c, u, f;
  for (o = 0, a = i.length; o < a; o += 1)
    f = "", n !== "" && (f += ", "), t.condenseFlow && (f += '"'), c = i[o], u = r[c], t.replacer && (u = t.replacer.call(r, c, u)), Rt(t, e, c, !1, !1) && (t.dump.length > 1024 && (f += "? "), f += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Rt(t, e, u, !1, !1) && (f += t.dump, n += f));
  t.tag = s, t.dump = "{" + n + "}";
}
function cE(t, e, r, n) {
  var s = "", i = t.tag, o = Object.keys(r), a, c, u, f, l, h;
  if (t.sortKeys === !0)
    o.sort();
  else if (typeof t.sortKeys == "function")
    o.sort(t.sortKeys);
  else if (t.sortKeys)
    throw new Le("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    h = "", (!n || s !== "") && (h += Iu(t, e)), u = o[a], f = r[u], t.replacer && (f = t.replacer.call(r, u, f)), Rt(t, e + 1, u, !0, !0, !0) && (l = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, l && (t.dump && rs === t.dump.charCodeAt(0) ? h += "?" : h += "? "), h += t.dump, l && (h += Iu(t, e)), Rt(t, e + 1, f, !0, l) && (t.dump && rs === t.dump.charCodeAt(0) ? h += ":" : h += ": ", h += t.dump, s += h));
  t.tag = i, t.dump = s || "{}";
}
function Ch(t, e, r) {
  var n, s, i, o, a, c;
  for (s = r ? t.explicitTypes : t.implicitTypes, i = 0, o = s.length; i < o; i += 1)
    if (a = s[i], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof e == "object" && e instanceof a.instanceOf) && (!a.predicate || a.predicate(e))) {
      if (r ? a.multi && a.representName ? t.tag = a.representName(e) : t.tag = a.tag : t.tag = "?", a.represent) {
        if (c = t.styleMap[a.tag] || a.defaultStyle, Uy.call(a.represent) === "[object Function]")
          n = a.represent(e, c);
        else if (By.call(a.represent, c))
          n = a.represent[c](e, c);
        else
          throw new Le("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        t.dump = n;
      }
      return !0;
    }
  return !1;
}
function Rt(t, e, r, n, s, i, o) {
  t.tag = null, t.dump = r, Ch(t, r, !1) || Ch(t, r, !0);
  var a = Uy.call(t.dump), c = n, u;
  n && (n = t.flowLevel < 0 || t.flowLevel > e);
  var f = a === "[object Object]" || a === "[object Array]", l, h;
  if (f && (l = t.duplicates.indexOf(r), h = l !== -1), (t.tag !== null && t.tag !== "?" || h || t.indent !== 2 && e > 0) && (s = !1), h && t.usedDuplicates[l])
    t.dump = "*ref_" + l;
  else {
    if (f && h && !t.usedDuplicates[l] && (t.usedDuplicates[l] = !0), a === "[object Object]")
      n && Object.keys(t.dump).length !== 0 ? (cE(t, e, t.dump, s), h && (t.dump = "&ref_" + l + t.dump)) : (aE(t, e, t.dump), h && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object Array]")
      n && t.dump.length !== 0 ? (t.noArrayIndent && !o && e > 0 ? Ih(t, e - 1, t.dump, s) : Ih(t, e, t.dump, s), h && (t.dump = "&ref_" + l + t.dump)) : (oE(t, e, t.dump), h && (t.dump = "&ref_" + l + " " + t.dump));
    else if (a === "[object String]")
      t.tag !== "?" && nE(t, t.dump, e, i, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (t.skipInvalid)
        return !1;
      throw new Le("unacceptable kind of an object to dump " + a);
    }
    t.tag !== null && t.tag !== "?" && (u = encodeURI(
      t.tag[0] === "!" ? t.tag.slice(1) : t.tag
    ).replace(/!/g, "%21"), t.tag[0] === "!" ? u = "!" + u : u.slice(0, 18) === "tag:yaml.org,2002:" ? u = "!!" + u.slice(18) : u = "!<" + u + ">", t.dump = u + " " + t.dump);
  }
  return !0;
}
function uE(t, e) {
  var r = [], n = [], s, i;
  for (Mu(t, r, n), s = 0, i = n.length; s < i; s += 1)
    e.duplicates.push(r[n[s]]);
  e.usedDuplicates = new Array(i);
}
function Mu(t, e, r) {
  var n, s, i;
  if (t !== null && typeof t == "object")
    if (s = e.indexOf(t), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (e.push(t), Array.isArray(t))
      for (s = 0, i = t.length; s < i; s += 1)
        Mu(t[s], e, r);
    else
      for (n = Object.keys(t), s = 0, i = n.length; s < i; s += 1)
        Mu(t[n[s]], e, r);
}
function lE(t, e) {
  e = e || {};
  var r = new QO(e);
  r.noRefs || uE(t, r);
  var n = t;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), Rt(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var fE = lE, pE = {
  dump: fE
};
function hf(t, e) {
  return function() {
    throw new Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var hE = Re, dE = hy, mE = vy, qi = wy, yE = Sy, vE = uf, gE = ky.load, bE = ky.loadAll, $E = pE.dump, xE = Le, wE = {
  binary: jy,
  float: xy,
  map: yy,
  null: gy,
  pairs: Ty,
  set: Ry,
  timestamp: Ay,
  bool: by,
  int: $y,
  merge: Py,
  omap: _y,
  seq: my,
  str: dy
}, SE = hf("safeLoad", "load"), OE = hf("safeLoadAll", "loadAll"), EE = hf("safeDump", "dump"), an = {
  Type: hE,
  Schema: dE,
  FAILSAFE_SCHEMA: mE,
  JSON_SCHEMA: qi,
  CORE_SCHEMA: yE,
  DEFAULT_SCHEMA: vE,
  load: gE,
  loadAll: bE,
  dump: $E,
  YAMLException: xE,
  types: wE,
  safeLoad: SE,
  safeLoadAll: OE,
  safeDump: EE
};
const {
  fetch: AE,
  Response: PE,
  Headers: jE,
  Request: _E,
  FormData: TE,
  File: RE,
  Blob: IE
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = AE);
typeof globalThis.Headers > "u" && (globalThis.Headers = jE);
typeof globalThis.Request > "u" && (globalThis.Request = _E);
typeof globalThis.Response > "u" && (globalThis.Response = PE);
typeof globalThis.FormData > "u" && (globalThis.FormData = TE);
typeof globalThis.File > "u" && (globalThis.File = RE);
typeof globalThis.Blob > "u" && (globalThis.Blob = IE);
const CE = (t) => ":/?#[]@!$&'()*+,;=".indexOf(t) > -1, ME = (t) => /^[a-z0-9\-._~]+$/i.test(t);
function cn(t, {
  escape: e
} = {}, r) {
  return typeof t == "number" && (t = t.toString()), typeof t != "string" || !t.length || !e ? t : r ? JSON.parse(t) : [...t].map((n) => {
    if (ME(n) || CE(n) && e === "unsafe")
      return n;
    const s = new TextEncoder();
    return Array.from(s.encode(n)).map((o) => `0${o.toString(16).toUpperCase()}`.slice(-2)).map((o) => `%${o}`).join("");
  }).join("");
}
function df(t) {
  const {
    value: e
  } = t;
  return Array.isArray(e) ? FE(t) : typeof e == "object" ? VE(t) : DE(t);
}
function FE({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  const i = (o) => cn(o, {
    escape: s
  });
  if (r === "simple")
    return e.map((o) => i(o)).join(",");
  if (r === "label")
    return `.${e.map((o) => i(o)).join(".")}`;
  if (r === "matrix")
    return e.map((o) => i(o)).reduce((o, a) => !o || n ? `${o || ""};${t}=${a}` : `${o},${a}`, "");
  if (r === "form") {
    const o = n ? `&${t}=` : ",";
    return e.map((a) => i(a)).join(o);
  }
  if (r === "spaceDelimited") {
    const o = n ? `${t}=` : "";
    return e.map((a) => i(a)).join(` ${o}`);
  }
  if (r === "pipeDelimited") {
    const o = n ? `${t}=` : "";
    return e.map((a) => i(a)).join(`|${o}`);
  }
}
function VE({
  key: t,
  value: e,
  style: r,
  explode: n,
  escape: s
}) {
  const i = (a) => cn(a, {
    escape: s
  }), o = Object.keys(e);
  if (r === "simple")
    return o.reduce((a, c) => {
      const u = i(e[c]), f = n ? "=" : ",";
      return `${a ? `${a},` : ""}${c}${f}${u}`;
    }, "");
  if (r === "label")
    return o.reduce((a, c) => {
      const u = i(e[c]), f = n ? "=" : ".";
      return `${a ? `${a}.` : "."}${c}${f}${u}`;
    }, "");
  if (r === "matrix" && n)
    return o.reduce((a, c) => {
      const u = i(e[c]);
      return `${a ? `${a};` : ";"}${c}=${u}`;
    }, "");
  if (r === "matrix")
    return o.reduce((a, c) => {
      const u = i(e[c]);
      return `${a ? `${a},` : `;${t}=`}${c},${u}`;
    }, "");
  if (r === "form")
    return o.reduce((a, c) => {
      const u = i(e[c]);
      return `${a ? `${a}${n ? "&" : ","}` : ""}${c}${n ? "=" : ","}${u}`;
    }, "");
}
function DE({
  key: t,
  value: e,
  style: r,
  escape: n
}) {
  const s = (i) => cn(i, {
    escape: n
  });
  if (r === "simple")
    return s(e);
  if (r === "label")
    return `.${s(e)}`;
  if (r === "matrix")
    return `;${t}=${s(e)}`;
  if (r === "form" || r === "deepObject")
    return s(e);
}
const Fu = {
  serializeRes: Qy,
  mergeInQueryOrForm: rv
};
async function vs(t, e = {}) {
  typeof t == "object" && (e = t, t = e.url), e.headers = e.headers || {}, Fu.mergeInQueryOrForm(e), e.headers && Object.keys(e.headers).forEach((s) => {
    const i = e.headers[s];
    typeof i == "string" && (e.headers[s] = i.replace(/\n+/g, " "));
  }), e.requestInterceptor && (e = await e.requestInterceptor(e) || e);
  const r = e.headers["content-type"] || e.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete e.headers["content-type"], delete e.headers["Content-Type"]);
  let n;
  try {
    n = await (e.userFetch || fetch)(e.url, e), n = await Fu.serializeRes(n, t, e), e.responseInterceptor && (n = await e.responseInterceptor(n) || n);
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
const NE = (t = "") => /(json|xml|yaml|text)\b/.test(t);
function LE(t, e) {
  return e && (e.indexOf("application/json") === 0 || e.indexOf("+json") > 0) ? JSON.parse(t) : an.load(t);
}
function Qy(t, e, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: t.ok,
    url: t.url || e,
    status: t.status,
    statusText: t.statusText,
    headers: Zy(t.headers)
  }, s = n.headers["content-type"], i = r || NE(s);
  return (i ? t.text : t.blob || t.buffer).call(t).then((a) => {
    if (n.text = a, n.data = a, i)
      try {
        const c = LE(a, s);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
function kE(t) {
  return t.includes(", ") ? t.split(", ") : t;
}
function Zy(t = {}) {
  return typeof t.entries != "function" ? {} : Array.from(t.entries()).reduce((e, [r, n]) => (e[r] = kE(n), e), {});
}
function mf(t, e) {
  return !e && typeof navigator < "u" && (e = navigator), e && e.product === "ReactNative" ? !!(t && typeof t == "object" && typeof t.uri == "string") : typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob || ArrayBuffer.isView(t) ? !0 : t !== null && typeof t == "object" && typeof t.pipe == "function";
}
function ev(t, e) {
  return Array.isArray(t) && t.some((r) => mf(r, e));
}
const UE = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, BE = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
class Vu extends File {
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
function tv(t, e, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: s,
    serializationOption: i,
    encoding: o
  } = e, a = typeof e == "object" && !Array.isArray(e) ? e.value : e, c = r ? (f) => f.toString() : (f) => encodeURIComponent(f), u = c(t);
  if (typeof a > "u" && s)
    return [[u, ""]];
  if (mf(a) || ev(a))
    return [[u, a]];
  if (i)
    return Mh(t, a, r, i);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((f) => f !== "undefined")) {
      const {
        style: f,
        explode: l,
        allowReserved: h
      } = o;
      return Mh(t, a, r, {
        style: f,
        explode: l,
        allowReserved: h
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const h = typeof a == "string" ? a : JSON.stringify(a), p = c(h), d = new Vu(p, "blob", {
          type: o.contentType
        });
        return [[u, d]];
      }
      const f = c(String(a)), l = new Vu(f, "blob", {
        type: o.contentType
      });
      return [[u, l]];
    }
    return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) && a.every((f) => typeof f != "object") ? [[u, a.map(c).join(",")]] : [[u, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[u, c(a)]] : Array.isArray(a) ? n === "multi" ? [[u, a.map(c)]] : [[u, a.map(c).join(BE[n || "csv"])]] : [[u, ""]];
}
function Mh(t, e, r, n) {
  const s = n.style || "form", i = typeof n.explode > "u" ? s === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (u) => cn(u, {
    escape: o
  }), c = r ? (u) => u : (u) => cn(u, {
    escape: o
  });
  return typeof e != "object" ? [[c(t), a(e)]] : Array.isArray(e) ? i ? [[c(t), e.map(a)]] : [[c(t), e.map(a).join(UE[s])]] : s === "deepObject" ? Object.keys(e).map((u) => [c(`${t}[${u}]`), a(e[u])]) : i ? Object.keys(e).map((u) => [c(u), a(e[u])]) : [[c(t), Object.keys(e).map((u) => [`${c(u)},${a(e[u])}`]).join(",")]];
}
function qE(t) {
  return Object.entries(t).reduce((e, [r, n]) => {
    for (const [s, i] of tv(r, n, !0))
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
function Fh(t) {
  const e = Object.keys(t).reduce((r, n) => {
    for (const [s, i] of tv(n, t[n]))
      i instanceof Vu ? r[s] = i.valueOf() : r[s] = i;
    return r;
  }, {});
  return _u.stringify(e, {
    encode: !1,
    indices: !1
  }) || "";
}
function rv(t = {}) {
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
      return mf(c) || ev(c);
    }), o = t.headers["content-type"] || t.headers["Content-Type"];
    if (i || /multipart\/form-data/i.test(o)) {
      const a = qE(t.form);
      t.formdata = a, t.body = a;
    } else
      t.body = Fh(n);
    delete t.form;
  }
  if (r) {
    const [i, o] = e.split("?");
    let a = "";
    if (o) {
      const u = _u.parse(o);
      Object.keys(r).forEach((l) => delete u[l]), a = _u.stringify(u, {
        encode: !0
      });
    }
    const c = s(a, Fh(r));
    t.url = i + c, delete t.query;
  }
  return t;
}
function HE(t, e, r) {
  return r = r || ((n) => n), e = e || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), Fu.mergeInQueryOrForm(n), n = e(n), r(t(n)));
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
const yf = (t) => {
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
  return e || r || vs;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var GE = /* @__PURE__ */ function() {
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
}(), JE = Object.prototype.hasOwnProperty;
function Du(t, e) {
  return JE.call(t, e);
}
function Nu(t) {
  if (Array.isArray(t)) {
    for (var e = new Array(t.length), r = 0; r < e.length; r++)
      e[r] = "" + r;
    return e;
  }
  if (Object.keys)
    return Object.keys(t);
  var n = [];
  for (var s in t)
    Du(t, s) && n.push(s);
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
function Lu(t) {
  for (var e = 0, r = t.length, n; e < r; ) {
    if (n = t.charCodeAt(e), n >= 48 && n <= 57) {
      e++;
      continue;
    }
    return !1;
  }
  return !0;
}
function pr(t) {
  return t.indexOf("/") === -1 && t.indexOf("~") === -1 ? t : t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function iv(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
function ku(t) {
  if (t === void 0)
    return !0;
  if (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = t.length; e < r; e++)
        if (ku(t[e]))
          return !0;
    } else if (typeof t == "object") {
      for (var n = Nu(t), s = n.length, i = 0; i < s; i++)
        if (ku(t[n[i]]))
          return !0;
    }
  }
  return !1;
}
function Vh(t, e) {
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
    GE(e, t);
    function e(r, n, s, i, o) {
      var a = this.constructor, c = t.call(this, Vh(r, { name: n, index: s, operation: i, tree: o })) || this;
      return c.name = n, c.index = s, c.operation = i, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = Vh(r, { name: n, index: s, operation: i, tree: o }), c;
    }
    return e;
  }(Error)
), me = ov, zE = Ke, Wr = {
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
    var n = is(r, this.path);
    n && (n = Ke(n));
    var s = xr(r, { op: "remove", path: this.from }).removed;
    return xr(r, { op: "add", path: this.path, value: s }), { newDocument: r, removed: n };
  },
  copy: function(t, e, r) {
    var n = is(r, this.from);
    return xr(r, { op: "add", path: this.path, value: Ke(n) }), { newDocument: r };
  },
  test: function(t, e, r) {
    return { newDocument: r, test: os(t[e], this.value) };
  },
  _get: function(t, e, r) {
    return this.value = t[e], { newDocument: r };
  }
}, KE = {
  add: function(t, e, r) {
    return Lu(e) ? t.splice(e, 0, this.value) : t[e] = this.value, { newDocument: r, index: e };
  },
  remove: function(t, e, r) {
    var n = t.splice(e, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(t, e, r) {
    var n = t[e];
    return t[e] = this.value, { newDocument: r, removed: n };
  },
  move: Wr.move,
  copy: Wr.copy,
  test: Wr.test,
  _get: Wr._get
};
function is(t, e) {
  if (e == "")
    return t;
  var r = { op: "_get", path: e };
  return xr(t, r), r.value;
}
function xr(t, e, r, n, s, i) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0), i === void 0 && (i = 0), r && (typeof r == "function" ? r(e, 0, t, e.path) : Hi(e, 0)), e.path === "") {
    var o = { newDocument: t };
    if (e.op === "add")
      return o.newDocument = e.value, o;
    if (e.op === "replace")
      return o.newDocument = e.value, o.removed = t, o;
    if (e.op === "move" || e.op === "copy")
      return o.newDocument = is(t, e.from), e.op === "move" && (o.removed = t), o;
    if (e.op === "test") {
      if (o.test = os(t, e.value), o.test === !1)
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
    n || (t = Ke(t));
    var a = e.path || "", c = a.split("/"), u = t, f = 1, l = c.length, h = void 0, p = void 0, d = void 0;
    for (typeof r == "function" ? d = r : d = Hi; ; ) {
      if (p = c[f], p && p.indexOf("~") != -1 && (p = iv(p)), s && (p == "__proto__" || p == "prototype" && f > 0 && c[f - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && h === void 0 && (u[p] === void 0 ? h = c.slice(0, f).join("/") : f == l - 1 && (h = e.path), h !== void 0 && d(e, 0, t, h)), f++, Array.isArray(u)) {
        if (p === "-")
          p = u.length;
        else {
          if (r && !Lu(p))
            throw new me("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, e, t);
          Lu(p) && (p = ~~p);
        }
        if (f >= l) {
          if (r && e.op === "add" && p > u.length)
            throw new me("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, e, t);
          var o = KE[e.op].call(e, u, p, t);
          if (o.test === !1)
            throw new me("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
          return o;
        }
      } else if (f >= l) {
        var o = Wr[e.op].call(e, u, p, t);
        if (o.test === !1)
          throw new me("Test operation failed", "TEST_OPERATION_FAILED", i, e, t);
        return o;
      }
      if (u = u[p], r && f < l && (!u || typeof u != "object"))
        throw new me("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i, e, t);
    }
  }
}
function Zt(t, e, r, n, s) {
  if (n === void 0 && (n = !0), s === void 0 && (s = !0), r && !Array.isArray(e))
    throw new me("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (t = Ke(t));
  for (var i = new Array(e.length), o = 0, a = e.length; o < a; o++)
    i[o] = xr(t, e[o], r, !0, s, o), t = i[o].newDocument;
  return i.newDocument = t, i;
}
function WE(t, e, r) {
  var n = xr(t, e);
  if (n.test === !1)
    throw new me("Test operation failed", "TEST_OPERATION_FAILED", r, e, t);
  return n.newDocument;
}
function Hi(t, e, r, n) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new me("Operation is not an object", "OPERATION_NOT_AN_OBJECT", e, t, r);
  if (Wr[t.op]) {
    if (typeof t.path != "string")
      throw new me("Operation `path` property is not a string", "OPERATION_PATH_INVALID", e, t, r);
    if (t.path.indexOf("/") !== 0 && t.path.length > 0)
      throw new me('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", e, t, r);
    if ((t.op === "move" || t.op === "copy") && typeof t.from != "string")
      throw new me("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && t.value === void 0)
      throw new me("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", e, t, r);
    if ((t.op === "add" || t.op === "replace" || t.op === "test") && ku(t.value))
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
        var o = { op: "_get", path: t.from, value: void 0 }, a = av([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new me("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", e, t, r);
      }
    }
  } else
    throw new me("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", e, t, r);
}
function av(t, e, r) {
  try {
    if (!Array.isArray(t))
      throw new me("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (e)
      Zt(Ke(e), Ke(t), r || !0);
    else {
      r = r || Hi;
      for (var n = 0; n < t.length; n++)
        r(t[n], n, e, void 0);
    }
  } catch (s) {
    if (s instanceof me)
      return s;
    throw s;
  }
}
function os(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    var r = Array.isArray(t), n = Array.isArray(e), s, i, o;
    if (r && n) {
      if (i = t.length, i != e.length)
        return !1;
      for (s = i; s-- !== 0; )
        if (!os(t[s], e[s]))
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
      if (o = a[s], !os(t[o], e[o]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
const YE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: me,
  _areEquals: os,
  applyOperation: xr,
  applyPatch: Zt,
  applyReducer: WE,
  deepClone: zE,
  getValueByPointer: is,
  validate: av,
  validator: Hi
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var vf = /* @__PURE__ */ new WeakMap(), XE = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = e;
    }
    return t;
  }()
), QE = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r) {
      this.callback = e, this.observer = r;
    }
    return t;
  }()
);
function ZE(t) {
  return vf.get(t);
}
function e0(t, e) {
  return t.observers.get(e);
}
function t0(t, e) {
  t.observers.delete(e.callback);
}
function r0(t, e) {
  e.unobserve();
}
function n0(t, e) {
  var r = [], n, s = ZE(t);
  if (!s)
    s = new XE(t), vf.set(t, s);
  else {
    var i = e0(s, e);
    n = i && i.observer;
  }
  if (n)
    return n;
  if (n = {}, s.value = Ke(t), e) {
    n.callback = e, n.next = null;
    var o = function() {
      Uu(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = t, n.unobserve = function() {
    Uu(n), clearTimeout(n.next), t0(s, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(e, new QE(e, n)), n;
}
function Uu(t, e) {
  e === void 0 && (e = !1);
  var r = vf.get(t.object);
  gf(r.value, t.object, t.patches, "", e), t.patches.length && Zt(r.value, t.patches);
  var n = t.patches;
  return n.length > 0 && (t.patches = [], t.callback && t.callback(n)), n;
}
function gf(t, e, r, n, s) {
  if (e !== t) {
    typeof e.toJSON == "function" && (e = e.toJSON());
    for (var i = Nu(e), o = Nu(t), a = !1, c = o.length - 1; c >= 0; c--) {
      var u = o[c], f = t[u];
      if (Du(e, u) && !(e[u] === void 0 && f !== void 0 && Array.isArray(e) === !1)) {
        var l = e[u];
        typeof f == "object" && f != null && typeof l == "object" && l != null && Array.isArray(f) === Array.isArray(l) ? gf(f, l, r, n + "/" + pr(u), s) : f !== l && (s && r.push({ op: "test", path: n + "/" + pr(u), value: Ke(f) }), r.push({ op: "replace", path: n + "/" + pr(u), value: Ke(l) }));
      } else
        Array.isArray(t) === Array.isArray(e) ? (s && r.push({ op: "test", path: n + "/" + pr(u), value: Ke(f) }), r.push({ op: "remove", path: n + "/" + pr(u) }), a = !0) : (s && r.push({ op: "test", path: n, value: t }), r.push({ op: "replace", path: n, value: e }));
    }
    if (!(!a && i.length == o.length))
      for (var c = 0; c < i.length; c++) {
        var u = i[c];
        !Du(t, u) && e[u] !== void 0 && r.push({ op: "add", path: n + "/" + pr(u), value: Ke(e[u]) });
      }
  }
}
function s0(t, e, r) {
  r === void 0 && (r = !1);
  var n = [];
  return gf(t, e, n, "", r), n;
}
const i0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: s0,
  generate: Uu,
  observe: n0,
  unobserve: r0
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, YE, i0, {
  JsonPatchError: ov,
  deepClone: Ke,
  escapePathComponent: pr,
  unescapePathComponent: iv
});
var o0 = function(e) {
  return a0(e) && !c0(e);
};
function a0(t) {
  return !!t && typeof t == "object";
}
function c0(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || f0(t);
}
var u0 = typeof Symbol == "function" && Symbol.for, l0 = u0 ? Symbol.for("react.element") : 60103;
function f0(t) {
  return t.$$typeof === l0;
}
function p0(t) {
  return Array.isArray(t) ? [] : {};
}
function as(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? un(p0(t), t, e) : t;
}
function h0(t, e, r) {
  return t.concat(e).map(function(n) {
    return as(n, r);
  });
}
function d0(t, e) {
  if (!e.customMerge)
    return un;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : un;
}
function m0(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Dh(t) {
  return Object.keys(t).concat(m0(t));
}
function cv(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function y0(t, e) {
  return cv(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function v0(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && Dh(t).forEach(function(s) {
    n[s] = as(t[s], r);
  }), Dh(e).forEach(function(s) {
    y0(t, s) || (cv(t, s) && r.isMergeableObject(e[s]) ? n[s] = d0(s, r)(t[s], e[s], r) : n[s] = as(e[s], r));
  }), n;
}
function un(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || h0, r.isMergeableObject = r.isMergeableObject || o0, r.cloneUnlessOtherwiseSpecified = as;
  var n = Array.isArray(e), s = Array.isArray(t), i = n === s;
  return i ? n ? r.arrayMerge(t, e, r) : v0(t, e, r) : as(e, r);
}
un.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, s) {
    return un(n, s, r);
  }, {});
};
var g0 = un, b0 = g0;
const $0 = /* @__PURE__ */ jr(b0), re = {
  add: w0,
  replace: Si,
  remove: S0,
  merge: O0,
  mergeDeep: E0,
  context: A0,
  getIn: T0,
  applyPatch: x0,
  parentPathMatch: _0,
  flatten: gs,
  fullyNormalizeArray: R0,
  normalizeArray: lv,
  isPromise: I0,
  forEachNew: P0,
  forEachNewPrimitive: j0,
  isJsonPatch: hv,
  isContextPatch: F0,
  isPatch: aa,
  isMutation: dv,
  isAdditiveMutation: Gi,
  isGenerator: M0,
  isFunction: pv,
  isObject: wr,
  isError: C0
};
function x0(t, e, r) {
  if (r = r || {}, e = {
    ...e,
    path: e.path && Nh(e.path)
  }, e.op === "merge") {
    const n = Vc(t, e.path);
    Object.assign(n, e.value), Zt(t, [Si(e.path, n)]);
  } else if (e.op === "mergeDeep") {
    const n = Vc(t, e.path), s = $0(n, e.value);
    t = Zt(t, [Si(e.path, s)]).newDocument;
  } else if (e.op === "add" && e.path === "" && wr(e.value)) {
    const n = Object.keys(e.value).reduce((s, i) => (s.push({
      op: "add",
      path: `/${Nh(i)}`,
      value: e.value[i]
    }), s), []);
    Zt(t, n);
  } else if (e.op === "replace" && e.path === "") {
    let {
      value: n
    } = e;
    r.allowMetaPatches && e.meta && Gi(e) && (Array.isArray(e.value) || wr(e.value)) && (n = {
      ...n,
      ...e.meta
    }), t = n;
  } else if (Zt(t, [e]), r.allowMetaPatches && e.meta && Gi(e) && (Array.isArray(e.value) || wr(e.value))) {
    const s = {
      ...Vc(t, e.path),
      ...e.meta
    };
    Zt(t, [Si(e.path, s)]);
  }
  return t;
}
function Nh(t) {
  return Array.isArray(t) ? t.length < 1 ? "" : `/${t.map(
    (e) => (
      // eslint-disable-line prefer-template
      (e + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : t;
}
function w0(t, e) {
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
function S0(t) {
  return {
    op: "remove",
    path: t
  };
}
function O0(t, e) {
  return {
    type: "mutation",
    op: "merge",
    path: t,
    value: e
  };
}
function E0(t, e) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: t,
    value: e
  };
}
function A0(t, e) {
  return {
    type: "context",
    path: t,
    value: e
  };
}
function P0(t, e) {
  try {
    return uv(t, qu, e);
  } catch (r) {
    return r;
  }
}
function j0(t, e) {
  try {
    return uv(t, Bu, e);
  } catch (r) {
    return r;
  }
}
function uv(t, e, r) {
  const n = t.filter(Gi).map((o) => e(o.value, r, o.path)) || [], s = gs(n);
  return fv(s);
}
function Bu(t, e, r) {
  return r = r || [], Array.isArray(t) ? t.map((n, s) => Bu(n, e, r.concat(s))) : wr(t) ? Object.keys(t).map((n) => Bu(t[n], e, r.concat(n))) : e(t, r[r.length - 1], r);
}
function qu(t, e, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const s = e(t, r[r.length - 1], r);
    s && (n = n.concat(s));
  }
  if (Array.isArray(t)) {
    const s = t.map((i, o) => qu(i, e, r.concat(o)));
    s && (n = n.concat(s));
  } else if (wr(t)) {
    const s = Object.keys(t).map((i) => qu(t[i], e, r.concat(i)));
    s && (n = n.concat(s));
  }
  return n = gs(n), n;
}
function _0(t, e) {
  if (!Array.isArray(e))
    return !1;
  for (let r = 0, n = e.length; r < n; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function T0(t, e) {
  return e.reduce((r, n) => typeof n < "u" && r ? r[n] : r, t);
}
function R0(t) {
  return fv(gs(lv(t)));
}
function lv(t) {
  return Array.isArray(t) ? t : [t];
}
function gs(t) {
  return [].concat(...t.map((e) => Array.isArray(e) ? gs(e) : e));
}
function fv(t) {
  return t.filter((e) => typeof e < "u");
}
function wr(t) {
  return t && typeof t == "object";
}
function I0(t) {
  return wr(t) && pv(t.then);
}
function pv(t) {
  return t && typeof t == "function";
}
function C0(t) {
  return t instanceof Error;
}
function hv(t) {
  if (aa(t)) {
    const {
      op: e
    } = t;
    return e === "add" || e === "remove" || e === "replace";
  }
  return !1;
}
function M0(t) {
  return Object.prototype.toString.call(t) === "[object GeneratorFunction]";
}
function dv(t) {
  return hv(t) || aa(t) && t.type === "mutation";
}
function Gi(t) {
  return dv(t) && (t.op === "add" || t.op === "replace" || t.op === "merge" || t.op === "mergeDeep");
}
function F0(t) {
  return aa(t) && t.type === "context";
}
function aa(t) {
  return t && typeof t == "object";
}
function Vc(t, e) {
  try {
    return is(t, e);
  } catch (r) {
    return console.error(r), {};
  }
}
var mv = { exports: {} };
(function(t) {
  (function() {
    var e, r, n, s, i, o = "properties", a = "deepProperties", c = "propertyDescriptors", u = "staticProperties", f = "staticDeepProperties", l = "staticPropertyDescriptors", h = "configuration", p = "deepConfiguration", d = "deepProps", m = "deepStatics", y = "deepConf", v = "initializers", $ = "methods", b = "composers", x = "compose";
    function T(q) {
      return Object.getOwnPropertyNames(q).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(q) : []);
    }
    function V(q, W) {
      return Array.prototype.slice.call(arguments, 2).reduce(q, W);
    }
    var P = V.bind(0, function(W, L) {
      if (L)
        for (var fe = T(L), le = 0; le < fe.length; le += 1)
          Object.defineProperty(W, fe[le], Object.getOwnPropertyDescriptor(L, fe[le]));
      return W;
    });
    function C(q) {
      return typeof q == "function";
    }
    function M(q) {
      return q && typeof q == "object" || C(q);
    }
    function G(q) {
      return q && typeof q == "object" && q.__proto__ == Object.prototype;
    }
    var S = V.bind(0, function q(W, L) {
      if (L === e)
        return W;
      if (Array.isArray(L))
        return (Array.isArray(W) ? W : []).concat(L);
      if (!G(L))
        return L;
      for (var fe, le, ze = T(L), Pe = 0; Pe < ze.length; )
        fe = ze[Pe++], (le = Object.getOwnPropertyDescriptor(L, fe)).hasOwnProperty("value") ? le.value !== e && (W[fe] = q(G(W[fe]) || Array.isArray(L[fe]) ? W[fe] : {}, L[fe])) : Object.defineProperty(W, fe, le);
      return W;
    });
    function I() {
      return (r = Array.prototype.concat.apply([], arguments).filter(function(q, W, L) {
        return C(q) && L.indexOf(q) === W;
      })).length ? r : e;
    }
    function N(q) {
      return r = /* @__PURE__ */ function() {
        return function L(fe) {
          var le, ze, Pe = L[x] || {}, St = { __proto__: Pe[$] }, ai = Pe[v], k$ = Array.prototype.slice.apply(arguments), Dr = Pe[a];
          if (Dr && S(St, Dr), (Dr = Pe[o]) && P(St, Dr), (Dr = Pe[c]) && Object.defineProperties(St, Dr), !ai || !ai.length)
            return St;
          for (fe === e && (fe = {}), Pe = 0; Pe < ai.length; )
            C(le = ai[Pe++]) && (St = (ze = le.call(St, fe, { instance: St, stamp: L, args: k$ })) === e ? St : ze);
          return St;
        };
      }(), (n = q[f]) && S(r, n), (n = q[u]) && P(r, n), (n = q[l]) && Object.defineProperties(r, n), n = C(r[x]) ? r[x] : ve, P(r[x] = function() {
        return n.apply(this, arguments);
      }, q), r;
    }
    function Y(q, W) {
      function L(le, ze) {
        M(W[le]) && (M(q[le]) || (q[le] = {}), (ze || P)(q[le], W[le]));
      }
      function fe(le) {
        (r = I(q[le], W[le])) && (q[le] = r);
      }
      return W && M(W = W[x] || W) && (L($), L(o), L(a, S), L(c), L(u), L(f, S), L(l), L(h), L(p, S), fe(v), fe(b)), q;
    }
    function ve() {
      return N(Array.prototype.concat.apply([this], arguments).reduce(Y, {}));
    }
    function ue(q) {
      return C(q) && C(q[x]);
    }
    var Q = {};
    function De(q, W) {
      return function() {
        return (s = {})[q] = W.apply(e, Array.prototype.concat.apply([{}], arguments)), ((r = this) && r[x] || n).call(r, s);
      };
    }
    Q[$] = De($, P), Q[o] = Q.props = De(o, P), Q[v] = Q.init = De(v, I), Q[b] = De(b, I), Q[a] = Q[d] = De(a, S), Q[u] = Q.statics = De(u, P), Q[f] = Q[m] = De(f, S), Q[h] = Q.conf = De(h, P), Q[p] = Q[y] = De(p, S), Q[c] = De(c, P), Q[l] = De(l, P), n = Q[x] = P(function() {
      for (var W, L, fe = 0, le = [], ze = arguments, Pe = this; fe < ze.length; )
        M(W = ze[fe++]) && le.push(ue(W) ? W : ((s = {})[$] = (L = W)[$] || e, n = L.props, s[o] = M((r = L[o]) || n) ? P({}, n, r) : e, s[v] = I(L.init, L[v]), s[b] = I(L[b]), n = L[d], s[a] = M((r = L[a]) || n) ? S({}, n, r) : e, s[c] = L[c], n = L.statics, s[u] = M((r = L[u]) || n) ? P({}, n, r) : e, n = L[m], s[f] = M((r = L[f]) || n) ? S({}, n, r) : e, r = L[l], s[l] = M((n = L.name && { name: { value: L.name } }) || r) ? P({}, r, n) : e, n = L.conf, s[h] = M((r = L[h]) || n) ? P({}, n, r) : e, n = L[y], s[p] = M((r = L[p]) || n) ? S({}, n, r) : e, s));
      if (W = ve.apply(Pe || i, le), Pe && le.unshift(Pe), Array.isArray(ze = W[x][b]))
        for (fe = 0; fe < ze.length; )
          W = ue(Pe = ze[fe++]({ stamp: W, composables: le })) ? Pe : W;
      return W;
    }, Q), Q.create = function() {
      return this.apply(e, arguments);
    }, (s = {})[u] = Q, i = ve(s), n[x] = n.bind(), n.version = "4.3.2", t.exports = n;
  })();
})(mv);
var V0 = mv.exports;
const z = /* @__PURE__ */ jr(V0);
var bf = function() {
  return !1;
}, D0 = function() {
  return !0;
};
const Vt = D0;
function pe(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function se(t) {
  return function e(r) {
    return arguments.length === 0 || pe(r) ? e : t.apply(this, arguments);
  };
}
function k(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return pe(r) ? e : se(function(s) {
          return t(r, s);
        });
      default:
        return pe(r) && pe(n) ? e : pe(r) ? se(function(s) {
          return t(s, n);
        }) : pe(n) ? se(function(s) {
          return t(r, s);
        }) : t(r, n);
    }
  };
}
function N0(t, e) {
  t = t || [], e = e || [];
  var r, n = t.length, s = e.length, i = [];
  for (r = 0; r < n; )
    i[i.length] = t[r], r += 1;
  for (r = 0; r < s; )
    i[i.length] = e[r], r += 1;
  return i;
}
function ca(t, e) {
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
function $f(t, e, r) {
  return function() {
    for (var n = [], s = 0, i = t, o = 0, a = !1; o < e.length || s < arguments.length; ) {
      var c;
      o < e.length && (!pe(e[o]) || s >= arguments.length) ? c = e[o] : (c = arguments[s], s += 1), n[o] = c, pe(c) ? a = !0 : i -= 1, o += 1;
    }
    return !a && i <= 0 ? r.apply(this, n) : ca(Math.max(0, i), $f(t, n, r));
  };
}
var ce = /* @__PURE__ */ k(function(e, r) {
  return e === 1 ? se(r) : ca(e, $f(e, [], r));
});
function Je(t) {
  return function e(r, n, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return pe(r) ? e : k(function(i, o) {
          return t(r, i, o);
        });
      case 2:
        return pe(r) && pe(n) ? e : pe(r) ? k(function(i, o) {
          return t(i, n, o);
        }) : pe(n) ? k(function(i, o) {
          return t(r, i, o);
        }) : se(function(i) {
          return t(r, n, i);
        });
      default:
        return pe(r) && pe(n) && pe(s) ? e : pe(r) && pe(n) ? k(function(i, o) {
          return t(i, o, s);
        }) : pe(r) && pe(s) ? k(function(i, o) {
          return t(i, n, o);
        }) : pe(n) && pe(s) ? k(function(i, o) {
          return t(r, i, o);
        }) : pe(r) ? se(function(i) {
          return t(i, n, s);
        }) : pe(n) ? se(function(i) {
          return t(r, i, s);
        }) : pe(s) ? se(function(i) {
          return t(r, n, i);
        }) : t(r, n, s);
    }
  };
}
const bs = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function L0(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function or(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!bs(n)) {
      for (var s = 0; s < t.length; ) {
        if (typeof n[t[s]] == "function")
          return n[t[s]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        s += 1;
      }
      if (L0(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function ua(t) {
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
var k0 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.all = !0;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = function(e) {
    return this.all && (e = this.xf["@@transducer/step"](e, !0)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) || (this.all = !1, e = ua(this.xf["@@transducer/step"](e, !1))), e;
  }, t;
}();
function U0(t) {
  return function(e) {
    return new k0(t, e);
  };
}
var B0 = /* @__PURE__ */ k(
  /* @__PURE__ */ or(["all"], U0, function(e, r) {
    for (var n = 0; n < r.length; ) {
      if (!e(r[n]))
        return !1;
      n += 1;
    }
    return !0;
  })
);
const xf = B0;
function Lh(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function Ji(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function q0(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function Qe(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function H0(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const Yn = typeof Object.is == "function" ? Object.is : H0;
var kh = Object.prototype.toString, yv = /* @__PURE__ */ function() {
  return kh.call(arguments) === "[object Arguments]" ? function(e) {
    return kh.call(e) === "[object Arguments]";
  } : function(e) {
    return Qe("callee", e);
  };
}(), G0 = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), Uh = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Bh = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), J0 = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, nr = /* @__PURE__ */ se(typeof Object.keys == "function" && !Bh ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, s = [], i = Bh && yv(e);
  for (r in e)
    Qe(r, e) && (!i || r !== "length") && (s[s.length] = r);
  if (G0)
    for (n = Uh.length - 1; n >= 0; )
      r = Uh[n], Qe(r, e) && !J0(s, r) && (s[s.length] = r), n -= 1;
  return s;
}), z0 = /* @__PURE__ */ se(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
const tt = z0;
function qh(t, e, r, n) {
  var s = Lh(t), i = Lh(e);
  function o(a, c) {
    return wf(a, c, r.slice(), n.slice());
  }
  return !Ji(function(a, c) {
    return !Ji(o, c, a);
  }, i, s);
}
function wf(t, e, r, n) {
  if (Yn(t, e))
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
      if (typeof t.constructor == "function" && q0(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && Yn(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!Yn(t.valueOf(), e.valueOf()))
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
      return t.size !== e.size ? !1 : qh(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : qh(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var o = nr(t);
  if (o.length !== nr(e).length)
    return !1;
  var a = r.concat([t]), c = n.concat([e]);
  for (i = o.length - 1; i >= 0; ) {
    var u = o[i];
    if (!(Qe(u, e) && wf(e[u], t[u], a, c)))
      return !1;
    i -= 1;
  }
  return !0;
}
var Dt = /* @__PURE__ */ k(function(e, r) {
  return wf(e, r, [], []);
});
function K0(t, e, r) {
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
function zi(t, e) {
  return K0(e, t, 0) >= 0;
}
function Xn(t, e) {
  for (var r = 0, n = e.length, s = Array(n); r < n; )
    s[r] = t(e[r]), r += 1;
  return s;
}
function Dc(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var Ln = function(e) {
  return (e < 10 ? "0" : "") + e;
}, W0 = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + Ln(e.getUTCMonth() + 1) + "-" + Ln(e.getUTCDate()) + "T" + Ln(e.getUTCHours()) + ":" + Ln(e.getUTCMinutes()) + ":" + Ln(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function vv(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function $s(t, e, r) {
  for (var n = 0, s = r.length; n < s; )
    e = t(e, r[n]), n += 1;
  return e;
}
function Y0(t, e) {
  for (var r = 0, n = e.length, s = []; r < n; )
    t(e[r]) && (s[s.length] = e[r]), r += 1;
  return s;
}
function Ki(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var X0 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function Q0(t) {
  return function(e) {
    return new X0(t, e);
  };
}
var Z0 = /* @__PURE__ */ k(
  /* @__PURE__ */ or(["fantasy-land/filter", "filter"], Q0, function(t, e) {
    return Ki(e) ? $s(function(r, n) {
      return t(e[n]) && (r[n] = e[n]), r;
    }, {}, nr(e)) : (
      // else
      Y0(t, e)
    );
  })
), eA = /* @__PURE__ */ k(function(e, r) {
  return Z0(vv(e), r);
});
const tA = eA;
function gv(t, e) {
  var r = function(o) {
    var a = e.concat([t]);
    return zi(o, a) ? "<Circular>" : gv(o, a);
  }, n = function(i, o) {
    return Xn(function(a) {
      return Dc(a) + ": " + r(i[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + Xn(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + Xn(r, t).concat(n(t, tA(function(i) {
        return /^\d+$/.test(i);
      }, nr(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : Dc(W0(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : Dc(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var s = t.toString();
        if (s !== "[object Object]")
          return s;
      }
      return "{" + n(t, nr(t)).join(", ") + "}";
  }
}
var ln = /* @__PURE__ */ se(function(e) {
  return gv(e, []);
}), rA = /* @__PURE__ */ k(function(e, r) {
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
  var o = ln(e), a = n(o, ln(r));
  return a !== void 0 && a === o ? e : r;
});
const Sf = rA;
var nA = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), sA = function(e) {
  return function(r) {
    return new nA(e, r);
  };
};
const iA = sA;
var xs = /* @__PURE__ */ k(
  /* @__PURE__ */ or(["fantasy-land/map", "map"], iA, function(e, r) {
    switch (Object.prototype.toString.call(r)) {
      case "[object Function]":
        return ce(r.length, function() {
          return e.call(this, r.apply(this, arguments));
        });
      case "[object Object]":
        return $s(function(n, s) {
          return n[s] = e(r[s]), n;
        }, {}, nr(r));
      default:
        return Xn(e, r);
    }
  })
);
const la = Number.isInteger || function(e) {
  return e << 0 === e;
};
function Of(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
var fa = /* @__PURE__ */ k(function(e, r) {
  var n = e < 0 ? r.length + e : e;
  return Of(r) ? r.charAt(n) : r[n];
}), ws = /* @__PURE__ */ k(function(e, r) {
  if (r != null)
    return la(e) ? fa(e, r) : r[e];
}), Ef = /* @__PURE__ */ k(function(e, r) {
  return xs(ws(e), r);
}), oA = /* @__PURE__ */ se(function(e) {
  return bs(e) ? !0 : !e || typeof e != "object" || Of(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), Hh = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function bv(t, e, r) {
  return function(s, i, o) {
    if (oA(o))
      return t(s, i, o);
    if (o == null)
      return i;
    if (typeof o["fantasy-land/reduce"] == "function")
      return e(s, i, o, "fantasy-land/reduce");
    if (o[Hh] != null)
      return r(s, i, o[Hh]());
    if (typeof o.next == "function")
      return r(s, i, o);
    if (typeof o.reduce == "function")
      return e(s, i, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function aA(t, e, r) {
  for (var n = 0, s = r.length; n < s; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var Ss = /* @__PURE__ */ k(function(e, r) {
  return ca(e.length, function() {
    return e.apply(r, arguments);
  });
});
function cA(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function uA(t, e, r, n) {
  return t["@@transducer/result"](r[n](Ss(t["@@transducer/step"], t), e));
}
var Af = /* @__PURE__ */ bv(aA, uA, cA), lA = /* @__PURE__ */ function() {
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
function $v(t) {
  return new lA(t);
}
var _r = /* @__PURE__ */ Je(function(t, e, r) {
  return Af(typeof t == "function" ? $v(t) : t, e, r);
}), fA = /* @__PURE__ */ se(function(e) {
  return ce(_r(Sf, 0, Ef("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (!e[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
}), D = /* @__PURE__ */ se(function(e) {
  return function() {
    return e;
  };
}), pA = /* @__PURE__ */ k(function(e, r) {
  return e && r;
});
const hA = pA;
var dA = /* @__PURE__ */ se(function(e) {
  return ce(_r(Sf, 0, Ef("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
function mA(t, e, r) {
  for (var n = r.next(); !n.done; )
    e = t(e, n.value), n = r.next();
  return e;
}
function yA(t, e, r, n) {
  return r[n](t, e);
}
var vA = /* @__PURE__ */ bv($s, yA, mA), gA = /* @__PURE__ */ k(function(e, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](e) : typeof e.ap == "function" ? e.ap(r) : typeof e == "function" ? function(n) {
    return e(n)(r(n));
  } : vA(function(n, s) {
    return N0(n, xs(s, r));
  }, [], e);
});
const bA = gA;
var $A = /* @__PURE__ */ k(function(e, r) {
  return e.apply(this, r);
}), xA = /* @__PURE__ */ se(function(e) {
  for (var r = nr(e), n = r.length, s = [], i = 0; i < n; )
    s[i] = e[r[i]], i += 1;
  return s;
});
const wA = xA;
function SA(t, e, r) {
  if (la(t) && bs(r)) {
    var n = [].concat(r);
    return n[t] = e, n;
  }
  var s = {};
  for (var i in r)
    s[i] = r[i];
  return s[t] = e, s;
}
var OA = /* @__PURE__ */ se(function(e) {
  return e == null;
});
const Wi = OA;
var EA = /* @__PURE__ */ Je(function t(e, r, n) {
  if (e.length === 0)
    return r;
  var s = e[0];
  if (e.length > 1) {
    var i = !Wi(n) && Qe(s, n) && typeof n[s] == "object" ? n[s] : la(e[1]) ? [] : {};
    r = t(Array.prototype.slice.call(e, 1), r, i);
  }
  return SA(s, r, n);
});
function Pf(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
var AA = /* @__PURE__ */ k(function(e, r) {
  var n = ce(e, r);
  return ce(e, function() {
    return $s(bA, xs(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}), jf = /* @__PURE__ */ se(function(e) {
  return AA(e.length, e);
}), Tr = /* @__PURE__ */ k(function(e, r) {
  return Pf(e) ? function() {
    return e.apply(this, arguments) && r.apply(this, arguments);
  } : jf(hA)(e, r);
});
function xv(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function _f(t, e, r) {
  if (r || (r = new jA()), PA(t))
    return t;
  var n = function(i) {
    var o = r.get(t);
    if (o)
      return o;
    r.set(t, i);
    for (var a in t)
      Object.prototype.hasOwnProperty.call(t, a) && (i[a] = e ? _f(t[a], !0, r) : t[a]);
    return i;
  };
  switch (tt(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n([]);
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return xv(t);
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
function PA(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var jA = /* @__PURE__ */ function() {
  function t() {
    this.map = {}, this.length = 0;
  }
  return t.prototype.set = function(e, r) {
    const n = this.hash(e);
    let s = this.map[n];
    s || (this.map[n] = s = []), s.push([e, r]), this.length += 1;
  }, t.prototype.hash = function(e) {
    let r = [];
    for (var n in e)
      r.push(Object.prototype.toString.call(e[n]));
    return r.join();
  }, t.prototype.get = function(e) {
    if (this.length <= 180) {
      for (const s in this.map) {
        const i = this.map[s];
        for (let o = 0; o < i.length; o += 1) {
          const a = i[o];
          if (a[0] === e)
            return a[1];
        }
      }
      return;
    }
    const r = this.hash(e), n = this.map[r];
    if (n)
      for (let s = 0; s < n.length; s += 1) {
        const i = n[s];
        if (i[0] === e)
          return i[1];
      }
  }, t;
}(), _A = /* @__PURE__ */ se(function(e) {
  return function(r, n) {
    return e(r, n) ? -1 : e(n, r) ? 1 : 0;
  };
}), TA = /* @__PURE__ */ se(function(e) {
  return !e;
});
const RA = TA;
var gn = /* @__PURE__ */ jf(RA);
function IA(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function Tf(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return bs(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Os = /* @__PURE__ */ Je(
  /* @__PURE__ */ Tf("slice", function(e, r, n) {
    return Array.prototype.slice.call(n, e, r);
  })
), wv = /* @__PURE__ */ se(
  /* @__PURE__ */ Tf(
    "tail",
    /* @__PURE__ */ Os(1, 1 / 0)
  )
);
function Ae() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return ca(arguments[0].length, _r(IA, arguments[0], wv(arguments)));
}
var CA = /* @__PURE__ */ fa(0);
const MA = CA;
function FA(t) {
  return t;
}
var VA = /* @__PURE__ */ se(FA);
const DA = VA;
var Rf = /* @__PURE__ */ se(function(e) {
  return ce(e.length, e);
}), NA = /* @__PURE__ */ k(function(e, r) {
  return ce(_r(Sf, 0, Ef("length", r)), function() {
    var n = arguments, s = this;
    return e.apply(s, Xn(function(i) {
      return i.apply(s, n);
    }, r));
  });
}), LA = /* @__PURE__ */ function() {
  function t(e, r, n, s) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = s, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (Qe(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, _f(this.valueAcc, !1)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function kA(t, e, r) {
  return function(n) {
    return new LA(t, e, r, n);
  };
}
var UA = /* @__PURE__ */ $f(
  4,
  [],
  /* @__PURE__ */ or([], kA, function(e, r, n, s) {
    var i = $v(function(o, a) {
      var c = n(a), u = e(Qe(c, o) ? o[c] : _f(r, !1), a);
      return u && u["@@transducer/reduced"] ? ua(o) : (o[c] = u, o);
    });
    return Af(i, {}, s);
  })
), BA = /* @__PURE__ */ k(function(e, r) {
  return r == null || r !== r ? e : r;
});
const Or = BA;
var qA = /* @__PURE__ */ function() {
  function t() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return t.prototype.add = function(e) {
    return !Gh(e, !0, this);
  }, t.prototype.has = function(e) {
    return Gh(e, !1, this);
  }, t;
}();
function Gh(t, e, r) {
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
      return r._nativeSet !== null ? e ? (s = r._nativeSet.size, r._nativeSet.add(t), i = r._nativeSet.size, i === s) : r._nativeSet.has(t) : n in r._items ? zi(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
    case "undefined":
      return r._items[n] ? !0 : (e && (r._items[n] = !0), !1);
    case "object":
      if (t === null)
        return r._items.null ? !0 : (e && (r._items.null = !0), !1);
    default:
      return n = Object.prototype.toString.call(t), n in r._items ? zi(t, r._items[n]) ? !0 : (e && r._items[n].push(t), !1) : (e && (r._items[n] = [t]), !1);
  }
}
var HA = /* @__PURE__ */ k(function(e, r) {
  for (var n = [], s = 0, i = e.length, o = r.length, a = new qA(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; s < i; )
    a.add(e[s]) && (n[n.length] = e[s]), s += 1;
  return n;
}), GA = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.n = e, this.i = 0;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    this.i += 1;
    var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, r);
    return this.n >= 0 && this.i >= this.n ? ua(n) : n;
  }, t;
}();
function JA(t) {
  return function(e) {
    return new GA(t, e);
  };
}
var zA = /* @__PURE__ */ k(
  /* @__PURE__ */ or(["take"], JA, function(e, r) {
    return Os(0, e < 0 ? 1 / 0 : e, r);
  })
);
function KA(t, e) {
  for (var r = e.length - 1; r >= 0 && t(e[r]); )
    r -= 1;
  return Os(0, r + 1, e);
}
var WA = /* @__PURE__ */ function() {
  function t(e, r) {
    this.f = e, this.retained = [], this.xf = r;
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = function(e) {
    return this.retained = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.retain(e, r) : this.flush(e, r);
  }, t.prototype.flush = function(e, r) {
    return e = Af(this.xf, e, this.retained), this.retained = [], this.xf["@@transducer/step"](e, r);
  }, t.prototype.retain = function(e, r) {
    return this.retained.push(r), e;
  }, t;
}();
function YA(t) {
  return function(e) {
    return new WA(t, e);
  };
}
var XA = /* @__PURE__ */ k(
  /* @__PURE__ */ or([], YA, KA)
), pa = /* @__PURE__ */ fa(-1), QA = /* @__PURE__ */ function() {
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
function ZA(t) {
  return function(e) {
    return new QA(t, e);
  };
}
var eP = /* @__PURE__ */ k(
  /* @__PURE__ */ or(["dropWhile"], ZA, function(e, r) {
    for (var n = 0, s = r.length; n < s && e(r[n]); )
      n += 1;
    return Os(n, 1 / 0, r);
  })
), tP = /* @__PURE__ */ k(function(e, r) {
  return e || r;
});
const rP = tP;
var nP = /* @__PURE__ */ k(function(e, r) {
  return Pf(e) ? function() {
    return e.apply(this, arguments) || r.apply(this, arguments);
  } : jf(rP)(e, r);
});
function sP(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var iP = /* @__PURE__ */ se(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : bs(e) ? [] : Of(e) ? "" : Ki(e) ? {} : yv(e) ? /* @__PURE__ */ function() {
    return arguments;
  }() : sP(e) ? e.constructor.from("") : void 0;
}), oP = /* @__PURE__ */ se(function(e) {
  return ce(e.length, function(r, n) {
    var s = Array.prototype.slice.call(arguments, 0);
    return s[0] = n, s[1] = r, e.apply(this, s);
  });
}), aP = /* @__PURE__ */ k(
  /* @__PURE__ */ Tf(
    "groupBy",
    /* @__PURE__ */ UA(function(t, e) {
      return t.push(e), t;
    }, [])
  )
), cP = /* @__PURE__ */ k(function(e, r) {
  if (e.length === 0 || Wi(r))
    return !1;
  for (var n = r, s = 0; s < e.length; )
    if (!Wi(n) && Qe(e[s], n))
      n = n[e[s]], s += 1;
    else
      return !1;
  return !0;
}), uP = /* @__PURE__ */ k(function(e, r) {
  return cP([e], r);
});
const yr = uP;
var Nt = function(t, e) {
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
              return Yn(t, n);
          }
        };
      }();
    default:
      return Yn(t, e);
  }
}, If = /* @__PURE__ */ Je(function(e, r, n) {
  return ce(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
}), lP = /* @__PURE__ */ k(zi);
const fP = lP;
var pP = /* @__PURE__ */ Os(0, -1), Cf = /* @__PURE__ */ k(function(e, r) {
  return ce(e + 1, function() {
    var n = arguments[e];
    if (n != null && Pf(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(ln(n) + ' does not have a method named "' + r + '"');
  });
}), Es = /* @__PURE__ */ se(function(e) {
  return e != null && Dt(e, iP(e));
}), Sv = /* @__PURE__ */ Cf(1, "join");
function Jh(t) {
  return Object.prototype.toString.call(t) === "[object Number]";
}
var hP = /* @__PURE__ */ k(function(e, r) {
  return function(n) {
    return function(s) {
      return xs(function(i) {
        return r(i, s);
      }, n(e(s)));
    };
  };
});
const dP = hP;
var mP = /* @__PURE__ */ k(function(e, r) {
  return e.map(function(n) {
    for (var s = r, i = 0, o; i < n.length; ) {
      if (s == null)
        return;
      o = n[i], s = la(o) ? fa(o, s) : s[o], i += 1;
    }
    return s;
  });
}), Ue = /* @__PURE__ */ k(function(e, r) {
  return mP([e], r)[0];
}), yP = /* @__PURE__ */ k(function(e, r) {
  return $s(function(n, s) {
    return n[s] = e(r[s], s, r), n;
  }, {}, nr(r));
}), vP = /* @__PURE__ */ Je(function(e, r, n) {
  var s = {}, i;
  r = r || {}, n = n || {};
  for (i in r)
    Qe(i, r) && (s[i] = Qe(i, n) ? e(i, r[i], n[i]) : r[i]);
  for (i in n)
    Qe(i, n) && !Qe(i, s) && (s[i] = n[i]);
  return s;
}), gP = /* @__PURE__ */ Je(function t(e, r, n) {
  return vP(function(s, i, o) {
    return Ki(i) && Ki(o) ? t(e, i, o) : e(s, i, o);
  }, r, n);
}), Ov = /* @__PURE__ */ k(function(e, r) {
  return gP(function(n, s, i) {
    return i;
  }, e, r);
}), bP = /* @__PURE__ */ k(function(e, r) {
  return xf(vv(e), r);
});
const Hu = bP;
var Ev = function(t) {
  return {
    value: t,
    map: function(e) {
      return Ev(e(t));
    }
  };
}, $P = /* @__PURE__ */ Je(function(e, r, n) {
  return e(function(s) {
    return Ev(r(s));
  })(n).value;
});
const xP = $P;
var Av = /* @__PURE__ */ Je(function(e, r, n) {
  return Or(e, Ue(r, n));
}), wP = /* @__PURE__ */ Je(function(e, r, n) {
  return e(Ue(r, n));
});
const ha = wP;
var Pv = /* @__PURE__ */ k(function(e, r) {
  for (var n = {}, s = 0; s < e.length; )
    e[s] in r && (n[e[s]] = r[e[s]]), s += 1;
  return n;
}), da = /* @__PURE__ */ Je(function(e, r, n) {
  return Dt(e, ws(r, n));
}), Gu = /* @__PURE__ */ Je(function(e, r, n) {
  return Or(e, ws(r, n));
}), SP = /* @__PURE__ */ Je(function(e, r, n) {
  return e(ws(r, n));
});
const OP = SP;
var EP = /* @__PURE__ */ k(function(e, r) {
  if (!(Jh(e) && Jh(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = [], s = e; s < r; )
    n.push(s), s += 1;
  return n;
}), AP = /* @__PURE__ */ se(ua), fn = /* @__PURE__ */ Je(function(e, r, n) {
  return n.replace(e, r);
}), PP = /* @__PURE__ */ k(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
}), Mf = /* @__PURE__ */ Cf(1, "split"), jv = /* @__PURE__ */ k(function(t, e) {
  return Dt(zA(t.length, e), t);
});
function jP(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
var _P = /* @__PURE__ */ k(function(e, r) {
  if (!jP(e))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + ln(e));
  return xv(e).test(r);
}), TP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.pred = e, this.items = [];
  }
  return t.prototype["@@transducer/init"] = Ye.init, t.prototype["@@transducer/result"] = Ye.result, t.prototype["@@transducer/step"] = function(e, r) {
    return Ji(this.pred, r, this.items) ? e : (this.items.push(r), this.xf["@@transducer/step"](e, r));
  }, t;
}();
function RP(t) {
  return function(e) {
    return new TP(t, e);
  };
}
var IP = /* @__PURE__ */ k(
  /* @__PURE__ */ or([], RP, function(t, e) {
    for (var r = 0, n = e.length, s = [], i; r < n; )
      i = e[r], Ji(t, i, s) || (s[s.length] = i), r += 1;
    return s;
  })
);
const CP = IP;
var MP = /* @__PURE__ */ Je(function(e, r, n) {
  return e(n) ? r(n) : n;
}), As = D(void 0), Lt = Dt(As()), FP = gn(Lt);
const _v = FP;
var Tv = Dt(null), VP = gn(Tv);
const Rv = VP;
var DP = gn(Wi), NP = ce(1, Ae(tt, Nt("GeneratorFunction")));
const LP = NP;
var kP = ce(1, Ae(tt, Nt("AsyncFunction")));
const UP = kP;
var kt = dA([Ae(tt, Nt("Function")), LP, UP]), BP = ce(1, kt(Array.isArray) ? Array.isArray : Ae(tt, Nt("Array")));
const Iv = BP;
var qP = Tr(Iv, Es), HP = gn(Es);
const Cv = HP;
var GP = Tr(Iv, Cv);
const JP = GP;
var Rr = ce(1, Ae(tt, Nt("String"))), Mv = Dt("");
function Ju(t) {
  "@babel/helpers - typeof";
  return Ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ju(t);
}
var zP = function(e) {
  return Ju(e) === "object";
};
const Fv = zP;
var KP = ce(1, Tr(Rv, nP(Fv, kt)));
const WP = KP;
var YP = gn(WP);
const XP = YP;
var Ff = fA([Rr, XP, Cv]), QP = gn(kt), ZP = ce(1, Tr(Rv, Fv)), e1 = Ae(tt, Nt("Object")), t1 = Ae(ln, Dt(ln(Object))), r1 = ha(Tr(kt, t1), ["constructor"]), Yi = ce(1, function(t) {
  if (!ZP(t) || !e1(t))
    return !1;
  var e = Object.getPrototypeOf(t);
  return Tv(e) ? !0 : r1(e);
}), n1 = ce(1, Ae(tt, Nt("Number")));
const s1 = n1;
var i1 = Tr(s1, isFinite);
const o1 = i1;
var a1 = ce(1, o1), c1 = kt(Number.isFinite) ? ce(1, Ss(Number.isFinite, Number)) : a1;
const u1 = c1;
var l1 = Tr(u1, NA(Dt, [Math.floor, DA]));
const f1 = l1;
var p1 = ce(1, f1), h1 = kt(Number.isInteger) ? ce(1, Ss(Number.isInteger, Number)) : p1;
const d1 = h1;
var m1 = ce(1, Ae(tt, Nt("RegExp"))), y1 = D(As());
const Vv = y1;
var v1 = ce(1, Ss(Promise.all, Promise));
const g1 = v1;
function b1(t) {
  return S1(t) || w1(t) || x1(t) || $1();
}
function $1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function x1(t, e) {
  if (t) {
    if (typeof t == "string")
      return zu(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zu(t, e);
  }
}
function w1(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function S1(t) {
  if (Array.isArray(t))
    return zu(t);
}
function zu(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
var O1 = _A(function(t, e) {
  return t.length > e.length;
}), E1 = Ae(PP(O1), MA, ws("length")), A1 = Rf(function(t, e, r) {
  var n = r.apply(void 0, b1(t));
  return DP(n) ? AP(n) : e;
}), P1 = function(e) {
  var r = E1(e);
  return ce(r, function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return _r(A1(s), void 0, e);
  });
}, Dv = If(JP, P1, As), ma = oP(fP), Xi = ce(3, function(t, e, r) {
  var n = Ue(t, r), s = Ue(pP(t), r);
  if (!QP(n) && !qP(t)) {
    var i = Ss(n, s);
    return $A(i, e);
  }
}), j1 = MP(Rr, fn(/[.*+?^${}()|[\]\\-]/g, "\\$&"));
const _1 = j1;
var T1 = function(e, r, n) {
  if (n == null || e == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, zh = function(e, r) {
  if (typeof e != "string" && !(e instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, R1 = function(e) {
  if (typeof e != "string" && !(e instanceof String) && !(e instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, I1 = function(e, r, n) {
  T1(e, r, n), zh(n, "str"), zh(r, "replaceValue"), R1(e);
  var s = new RegExp(m1(e) ? e : _1(e), "g");
  return fn(s, r, n);
};
const C1 = I1;
var M1 = ce(3, C1), F1 = Cf(2, "replaceAll"), V1 = kt(String.prototype.replaceAll) ? F1 : M1, D1 = Rf(function(t, e) {
  return Ae(Mf(""), XA(ma(t)), Sv(""))(e);
}), Vf = Rf(function(t, e) {
  return Ae(Mf(""), eP(ma(t)), Sv(""))(e);
}), Nv = { exports: {} }, ge = Nv.exports = {}, ht, dt;
function Ku() {
  throw new Error("setTimeout has not been defined");
}
function Wu() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? ht = setTimeout : ht = Ku;
  } catch {
    ht = Ku;
  }
  try {
    typeof clearTimeout == "function" ? dt = clearTimeout : dt = Wu;
  } catch {
    dt = Wu;
  }
})();
function Lv(t) {
  if (ht === setTimeout)
    return setTimeout(t, 0);
  if ((ht === Ku || !ht) && setTimeout)
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
function N1(t) {
  if (dt === clearTimeout)
    return clearTimeout(t);
  if ((dt === Wu || !dt) && clearTimeout)
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
var At = [], Qr = !1, vr, Oi = -1;
function L1() {
  !Qr || !vr || (Qr = !1, vr.length ? At = vr.concat(At) : Oi = -1, At.length && kv());
}
function kv() {
  if (!Qr) {
    var t = Lv(L1);
    Qr = !0;
    for (var e = At.length; e; ) {
      for (vr = At, At = []; ++Oi < e; )
        vr && vr[Oi].run();
      Oi = -1, e = At.length;
    }
    vr = null, Qr = !1, N1(t);
  }
}
ge.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  At.push(new Uv(t, e)), At.length === 1 && !Qr && Lv(kv);
};
function Uv(t, e) {
  this.fun = t, this.array = e;
}
Uv.prototype.run = function() {
  this.fun.apply(null, this.array);
};
ge.title = "browser";
ge.browser = !0;
ge.env = {};
ge.argv = [];
ge.version = "";
ge.versions = {};
function Ut() {
}
ge.on = Ut;
ge.addListener = Ut;
ge.once = Ut;
ge.off = Ut;
ge.removeListener = Ut;
ge.removeAllListeners = Ut;
ge.emit = Ut;
ge.prependListener = Ut;
ge.prependOnceListener = Ut;
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
var k1 = Nv.exports;
const Qi = /* @__PURE__ */ jr(k1), Df = () => ha(_P(/^win/), ["platform"], Qi), ya = (t) => {
  try {
    const e = new URL(t);
    return D1(":", e.protocol);
  } catch {
    return;
  }
}, U1 = Ae(ya, _v), Bv = (t) => {
  const e = t.lastIndexOf(".");
  return e >= 0 ? t.substring(e).toLowerCase() : "";
}, Zr = (t) => {
  if (Qi.browser)
    return !1;
  const e = ya(t);
  return Lt(e) || e === "file" || /^[a-zA-Z]$/.test(e);
}, Sr = (t) => {
  const e = ya(t);
  return e === "http" || e === "https";
}, B1 = (t) => {
  try {
    return new URL(t) && !0;
  } catch {
    return !1;
  }
}, Nf = (t, e) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Gu(!1, "keepFileProtocol", e), s = Gu(Df, "isWindows", e);
  let i = decodeURI(t);
  for (let a = 0; a < r.length; a += 2)
    i = i.replace(r[a], r[a + 1]);
  let o = i.substring(0, 7).toLowerCase() === "file://";
  return o && (i = i[7] === "/" ? i.substring(8) : i.substring(7), s() && i[1] === "/" && (i = `${i[0]}:${i.substring(1)}`), n ? i = `file:///${i}` : (o = !1, i = s() ? i : `/${i}`)), s() && !o && (i = V1("/", "\\", i), i.substring(1, 3) === ":\\" && (i = i[0].toUpperCase() + i.substring(1))), i;
}, qv = (t) => {
  const e = [/\?/g, "%3F", /#/g, "%23"];
  let r = t;
  Df() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < e.length; n += 2)
    r = r.replace(e[n], e[n + 1]);
  return r;
}, Lf = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, de = (t) => {
  const e = t.indexOf("#");
  let r = t;
  return e >= 0 && (r = t.substring(0, e)), r;
}, Zi = () => {
  if (Qi.browser)
    return de(globalThis.location.href);
  const t = Qi.cwd(), e = pa(t);
  return ["/", "\\"].includes(e) ? t : t + (Df() ? "\\" : "/");
}, we = (t, e) => {
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
}, bn = (t) => {
  if (Zr(t))
    return qv(Nf(t));
  try {
    return new URL(t).toString();
  } catch {
    return encodeURI(decodeURI(t)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, be = (t) => Zr(t) ? Nf(t) : decodeURI(t), q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: Zi,
  fromFileSystemPath: qv,
  getExtension: Bv,
  getHash: Lf,
  getProtocol: ya,
  hasProtocol: U1,
  isFileSystemPath: Zr,
  isHttpUrl: Sr,
  isURI: B1,
  resolve: we,
  sanitize: bn,
  stripHash: de,
  toFileSystemPath: Nf,
  unsanitize: be
}, Symbol.toStringTag, { value: "Module" })), H1 = z({
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
      return Rr(this.uri) ? Bv(this.uri) : "";
    },
    toString() {
      return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(tt(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
    }
  }
}), Er = H1, G1 = {
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
    maxDepth: 1 / 0
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
}, J1 = G1, z1 = dP(Ue(["resolve", "baseURI"]), EA(["resolve", "baseURI"])), K1 = (t) => Mv(t) ? Zi() : t, W1 = (t, e) => {
  const r = Ov(t, e);
  return xP(z1, K1, r);
};
var kn = function(t) {
  return t && t.Math === Math && t;
}, nt = (
  // eslint-disable-next-line es/no-global-this -- safe
  kn(typeof globalThis == "object" && globalThis) || kn(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  kn(typeof self == "object" && self) || kn(typeof Et == "object" && Et) || kn(typeof Et == "object" && Et) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), ut = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, Y1 = ut, va = !Y1(function() {
  var t = (function() {
  }).bind();
  return typeof t != "function" || t.hasOwnProperty("prototype");
}), X1 = va, Hv = Function.prototype, Kh = Hv.apply, Wh = Hv.call, kf = typeof Reflect == "object" && Reflect.apply || (X1 ? Wh.bind(Kh) : function() {
  return Wh.apply(Kh, arguments);
}), Gv = va, Jv = Function.prototype, Yu = Jv.call, Q1 = Gv && Jv.bind.bind(Yu, Yu), lt = Gv ? Q1 : function(t) {
  return function() {
    return Yu.apply(t, arguments);
  };
}, zv = lt, Z1 = zv({}.toString), ej = zv("".slice), Uf = function(t) {
  return ej(Z1(t), 8, -1);
}, tj = Uf, rj = lt, Kv = function(t) {
  if (tj(t) === "Function")
    return rj(t);
}, Nc = typeof document == "object" && document.all, st = typeof Nc > "u" && Nc !== void 0 ? function(t) {
  return typeof t == "function" || t === Nc;
} : function(t) {
  return typeof t == "function";
}, Bf = {}, nj = ut, ar = !nj(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), sj = va, fi = Function.prototype.call, Ir = sj ? fi.bind(fi) : function() {
  return fi.apply(fi, arguments);
}, Wv = {}, Yv = {}.propertyIsEnumerable, Xv = Object.getOwnPropertyDescriptor, ij = Xv && !Yv.call({ 1: 2 }, 1);
Wv.f = ij ? function(e) {
  var r = Xv(this, e);
  return !!r && r.enumerable;
} : Yv;
var Ps = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, oj = lt, aj = ut, cj = Uf, Lc = Object, uj = oj("".split), lj = aj(function() {
  return !Lc("z").propertyIsEnumerable(0);
}) ? function(t) {
  return cj(t) === "String" ? uj(t, "") : Lc(t);
} : Lc, qf = function(t) {
  return t == null;
}, fj = qf, pj = TypeError, Hf = function(t) {
  if (fj(t))
    throw new pj("Can't call method on " + t);
  return t;
}, hj = lj, dj = Hf, js = function(t) {
  return hj(dj(t));
}, mj = st, Bt = function(t) {
  return typeof t == "object" ? t !== null : mj(t);
}, Gf = {}, kc = Gf, Uc = nt, yj = st, Yh = function(t) {
  return yj(t) ? t : void 0;
}, _s = function(t, e) {
  return arguments.length < 2 ? Yh(kc[t]) || Yh(Uc[t]) : kc[t] && kc[t][e] || Uc[t] && Uc[t][e];
}, vj = lt, ga = vj({}.isPrototypeOf), gj = typeof navigator < "u" && String(navigator.userAgent) || "", Qv = nt, Bc = gj, Xh = Qv.process, Qh = Qv.Deno, Zh = Xh && Xh.versions || Qh && Qh.version, ed = Zh && Zh.v8, at, eo;
ed && (at = ed.split("."), eo = at[0] > 0 && at[0] < 4 ? 1 : +(at[0] + at[1]));
!eo && Bc && (at = Bc.match(/Edge\/(\d+)/), (!at || at[1] >= 74) && (at = Bc.match(/Chrome\/(\d+)/), at && (eo = +at[1])));
var bj = eo, td = bj, $j = ut, xj = nt, wj = xj.String, Zv = !!Object.getOwnPropertySymbols && !$j(function() {
  var t = Symbol("symbol detection");
  return !wj(t) || !(Object(t) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && td && td < 41;
}), Sj = Zv, eg = Sj && !Symbol.sham && typeof Symbol.iterator == "symbol", Oj = _s, Ej = st, Aj = ga, Pj = eg, jj = Object, tg = Pj ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  var e = Oj("Symbol");
  return Ej(e) && Aj(e.prototype, jj(t));
}, _j = String, Jf = function(t) {
  try {
    return _j(t);
  } catch {
    return "Object";
  }
}, Tj = st, Rj = Jf, Ij = TypeError, ba = function(t) {
  if (Tj(t))
    return t;
  throw new Ij(Rj(t) + " is not a function");
}, Cj = ba, Mj = qf, zf = function(t, e) {
  var r = t[e];
  return Mj(r) ? void 0 : Cj(r);
}, qc = Ir, Hc = st, Gc = Bt, Fj = TypeError, Vj = function(t, e) {
  var r, n;
  if (e === "string" && Hc(r = t.toString) && !Gc(n = qc(r, t)) || Hc(r = t.valueOf) && !Gc(n = qc(r, t)) || e !== "string" && Hc(r = t.toString) && !Gc(n = qc(r, t)))
    return n;
  throw new Fj("Can't convert object to primitive value");
}, rg = { exports: {} }, rd = nt, Dj = Object.defineProperty, Nj = function(t, e) {
  try {
    Dj(rd, t, { value: e, configurable: !0, writable: !0 });
  } catch {
    rd[t] = e;
  }
  return e;
}, Lj = nt, kj = Nj, nd = "__core-js_shared__", sd = rg.exports = Lj[nd] || kj(nd, {});
(sd.versions || (sd.versions = [])).push({
  version: "3.36.0",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var ng = rg.exports, id = ng, sg = function(t, e) {
  return id[t] || (id[t] = e || {});
}, Uj = Hf, Bj = Object, ig = function(t) {
  return Bj(Uj(t));
}, qj = lt, Hj = ig, Gj = qj({}.hasOwnProperty), qt = Object.hasOwn || function(e, r) {
  return Gj(Hj(e), r);
}, Jj = lt, zj = 0, Kj = Math.random(), Wj = Jj(1 .toString), og = function(t) {
  return "Symbol(" + (t === void 0 ? "" : t) + ")_" + Wj(++zj + Kj, 36);
}, Yj = nt, Xj = sg, od = qt, Qj = og, Zj = Zv, e_ = eg, Yr = Yj.Symbol, Jc = Xj("wks"), t_ = e_ ? Yr.for || Yr : Yr && Yr.withoutSetter || Qj, Ht = function(t) {
  return od(Jc, t) || (Jc[t] = Zj && od(Yr, t) ? Yr[t] : t_("Symbol." + t)), Jc[t];
}, r_ = Ir, ad = Bt, cd = tg, n_ = zf, s_ = Vj, i_ = Ht, o_ = TypeError, a_ = i_("toPrimitive"), c_ = function(t, e) {
  if (!ad(t) || cd(t))
    return t;
  var r = n_(t, a_), n;
  if (r) {
    if (e === void 0 && (e = "default"), n = r_(r, t, e), !ad(n) || cd(n))
      return n;
    throw new o_("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), s_(t, e);
}, u_ = c_, l_ = tg, ag = function(t) {
  var e = u_(t, "string");
  return l_(e) ? e : e + "";
}, f_ = nt, ud = Bt, Xu = f_.document, p_ = ud(Xu) && ud(Xu.createElement), cg = function(t) {
  return p_ ? Xu.createElement(t) : {};
}, h_ = ar, d_ = ut, m_ = cg, ug = !h_ && !d_(function() {
  return Object.defineProperty(m_("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), y_ = ar, v_ = Ir, g_ = Wv, b_ = Ps, $_ = js, x_ = ag, w_ = qt, S_ = ug, ld = Object.getOwnPropertyDescriptor;
Bf.f = y_ ? ld : function(e, r) {
  if (e = $_(e), r = x_(r), S_)
    try {
      return ld(e, r);
    } catch {
    }
  if (w_(e, r))
    return b_(!v_(g_.f, e, r), e[r]);
};
var O_ = ut, E_ = st, A_ = /#|\.prototype\./, Ts = function(t, e) {
  var r = j_[P_(t)];
  return r === T_ ? !0 : r === __ ? !1 : E_(e) ? O_(e) : !!e;
}, P_ = Ts.normalize = function(t) {
  return String(t).replace(A_, ".").toLowerCase();
}, j_ = Ts.data = {}, __ = Ts.NATIVE = "N", T_ = Ts.POLYFILL = "P", R_ = Ts, fd = Kv, I_ = ba, C_ = va, M_ = fd(fd.bind), lg = function(t, e) {
  return I_(t), e === void 0 ? t : C_ ? M_(t, e) : function() {
    return t.apply(e, arguments);
  };
}, Cr = {}, F_ = ar, V_ = ut, fg = F_ && V_(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), D_ = Bt, N_ = String, L_ = TypeError, cr = function(t) {
  if (D_(t))
    return t;
  throw new L_(N_(t) + " is not an object");
}, k_ = ar, U_ = ug, B_ = fg, pi = cr, pd = ag, q_ = TypeError, zc = Object.defineProperty, H_ = Object.getOwnPropertyDescriptor, Kc = "enumerable", Wc = "configurable", Yc = "writable";
Cr.f = k_ ? B_ ? function(e, r, n) {
  if (pi(e), r = pd(r), pi(n), typeof e == "function" && r === "prototype" && "value" in n && Yc in n && !n[Yc]) {
    var s = H_(e, r);
    s && s[Yc] && (e[r] = n.value, n = {
      configurable: Wc in n ? n[Wc] : s[Wc],
      enumerable: Kc in n ? n[Kc] : s[Kc],
      writable: !1
    });
  }
  return zc(e, r, n);
} : zc : function(e, r, n) {
  if (pi(e), r = pd(r), pi(n), U_)
    try {
      return zc(e, r, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw new q_("Accessors not supported");
  return "value" in n && (e[r] = n.value), e;
};
var G_ = ar, J_ = Cr, z_ = Ps, ur = G_ ? function(t, e, r) {
  return J_.f(t, e, z_(1, r));
} : function(t, e, r) {
  return t[e] = r, t;
}, Un = nt, K_ = kf, W_ = Kv, Y_ = st, X_ = Bf.f, Q_ = R_, Ur = Gf, Z_ = lg, Br = ur, hd = qt, eT = function(t) {
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
    return K_(t, this, arguments);
  };
  return e.prototype = t.prototype, e;
}, $a = function(t, e) {
  var r = t.target, n = t.global, s = t.stat, i = t.proto, o = n ? Un : s ? Un[r] : Un[r] && Un[r].prototype, a = n ? Ur : Ur[r] || Br(Ur, r, {})[r], c = a.prototype, u, f, l, h, p, d, m, y, v;
  for (h in e)
    u = Q_(n ? h : r + (s ? "." : "#") + h, t.forced), f = !u && o && hd(o, h), d = a[h], f && (t.dontCallGetSet ? (v = X_(o, h), m = v && v.value) : m = o[h]), p = f && m ? m : e[h], !(!u && !i && typeof d == typeof p) && (t.bind && f ? y = Z_(p, Un) : t.wrap && f ? y = eT(p) : i && Y_(p) ? y = W_(p) : y = p, (t.sham || p && p.sham || d && d.sham) && Br(y, "sham", !0), Br(a, h, y), i && (l = r + "Prototype", hd(Ur, l) || Br(Ur, l, {}), Br(Ur[l], h, p), t.real && c && (u || !c[h]) && Br(c, h, p)));
}, tT = sg, rT = og, dd = tT("keys"), Kf = function(t) {
  return dd[t] || (dd[t] = rT(t));
}, nT = ut, sT = !nT(function() {
  function t() {
  }
  return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
}), iT = qt, oT = st, aT = ig, cT = Kf, uT = sT, md = cT("IE_PROTO"), Qu = Object, lT = Qu.prototype, Wf = uT ? Qu.getPrototypeOf : function(t) {
  var e = aT(t);
  if (iT(e, md))
    return e[md];
  var r = e.constructor;
  return oT(r) && e instanceof r ? r.prototype : e instanceof Qu ? lT : null;
}, fT = lt, pT = ba, hT = function(t, e, r) {
  try {
    return fT(pT(Object.getOwnPropertyDescriptor(t, e)[r]));
  } catch {
  }
}, dT = Bt, mT = function(t) {
  return dT(t) || t === null;
}, yT = mT, vT = String, gT = TypeError, bT = function(t) {
  if (yT(t))
    return t;
  throw new gT("Can't set " + vT(t) + " as a prototype");
}, $T = hT, xT = cr, wT = bT, Yf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t = !1, e = {}, r;
  try {
    r = $T(Object.prototype, "__proto__", "set"), r(e, []), t = e instanceof Array;
  } catch {
  }
  return function(s, i) {
    return xT(s), wT(i), t ? r(s, i) : s.__proto__ = i, s;
  };
}() : void 0), pg = {}, ST = Math.ceil, OT = Math.floor, ET = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? OT : ST)(r);
}, AT = ET, Xf = function(t) {
  var e = +t;
  return e !== e || e === 0 ? 0 : AT(e);
}, PT = Xf, jT = Math.max, _T = Math.min, TT = function(t, e) {
  var r = PT(t);
  return r < 0 ? jT(r + e, 0) : _T(r, e);
}, RT = Xf, IT = Math.min, CT = function(t) {
  var e = RT(t);
  return e > 0 ? IT(e, 9007199254740991) : 0;
}, MT = CT, hg = function(t) {
  return MT(t.length);
}, FT = js, VT = TT, DT = hg, yd = function(t) {
  return function(e, r, n) {
    var s = FT(e), i = DT(s);
    if (i === 0)
      return !t && -1;
    var o = VT(n, i), a;
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
}, NT = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: yd(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: yd(!1)
}, Qf = {}, LT = lt, Xc = qt, kT = js, UT = NT.indexOf, BT = Qf, vd = LT([].push), dg = function(t, e) {
  var r = kT(t), n = 0, s = [], i;
  for (i in r)
    !Xc(BT, i) && Xc(r, i) && vd(s, i);
  for (; e.length > n; )
    Xc(r, i = e[n++]) && (~UT(s, i) || vd(s, i));
  return s;
}, Zf = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], qT = dg, HT = Zf, GT = HT.concat("length", "prototype");
pg.f = Object.getOwnPropertyNames || function(e) {
  return qT(e, GT);
};
var mg = {};
mg.f = Object.getOwnPropertySymbols;
var JT = _s, zT = lt, KT = pg, WT = mg, YT = cr, XT = zT([].concat), QT = JT("Reflect", "ownKeys") || function(e) {
  var r = KT.f(YT(e)), n = WT.f;
  return n ? XT(r, n(e)) : r;
}, gd = qt, ZT = QT, eR = Bf, tR = Cr, yg = function(t, e, r) {
  for (var n = ZT(e), s = tR.f, i = eR.f, o = 0; o < n.length; o++) {
    var a = n[o];
    !gd(t, a) && !(r && gd(r, a)) && s(t, a, i(e, a));
  }
}, vg = {}, rR = dg, nR = Zf, sR = Object.keys || function(e) {
  return rR(e, nR);
}, iR = ar, oR = fg, aR = Cr, cR = cr, uR = js, lR = sR;
vg.f = iR && !oR ? Object.defineProperties : function(e, r) {
  cR(e);
  for (var n = uR(r), s = lR(r), i = s.length, o = 0, a; i > o; )
    aR.f(e, a = s[o++], n[a]);
  return e;
};
var fR = _s, pR = fR("document", "documentElement"), hR = cr, dR = vg, bd = Zf, mR = Qf, yR = pR, vR = cg, gR = Kf, $d = ">", xd = "<", Zu = "prototype", el = "script", gg = gR("IE_PROTO"), Qc = function() {
}, bg = function(t) {
  return xd + el + $d + t + xd + "/" + el + $d;
}, wd = function(t) {
  t.write(bg("")), t.close();
  var e = t.parentWindow.Object;
  return t = null, e;
}, bR = function() {
  var t = vR("iframe"), e = "java" + el + ":", r;
  return t.style.display = "none", yR.appendChild(t), t.src = String(e), r = t.contentWindow.document, r.open(), r.write(bg("document.F=Object")), r.close(), r.F;
}, hi, Ei = function() {
  try {
    hi = new ActiveXObject("htmlfile");
  } catch {
  }
  Ei = typeof document < "u" ? document.domain && hi ? wd(hi) : bR() : wd(hi);
  for (var t = bd.length; t--; )
    delete Ei[Zu][bd[t]];
  return Ei();
};
mR[gg] = !0;
var ep = Object.create || function(e, r) {
  var n;
  return e !== null ? (Qc[Zu] = hR(e), n = new Qc(), Qc[Zu] = null, n[gg] = e) : n = Ei(), r === void 0 ? n : dR.f(n, r);
}, $R = Bt, xR = ur, $g = function(t, e) {
  $R(e) && "cause" in e && xR(t, "cause", e.cause);
}, wR = lt, xg = Error, SR = wR("".replace), OR = function(t) {
  return String(new xg(t).stack);
}("zxcasd"), wg = /\n\s*at [^:]*:[^\n]*/, ER = wg.test(OR), AR = function(t, e) {
  if (ER && typeof t == "string" && !xg.prepareStackTrace)
    for (; e--; )
      t = SR(t, wg, "");
  return t;
}, PR = ut, jR = Ps, _R = !PR(function() {
  var t = new Error("a");
  return "stack" in t ? (Object.defineProperty(t, "stack", jR(1, 7)), t.stack !== 7) : !0;
}), TR = ur, RR = AR, IR = _R, Sd = Error.captureStackTrace, Sg = function(t, e, r, n) {
  IR && (Sd ? Sd(t, e) : TR(t, "stack", RR(r, n)));
}, $n = {}, CR = Ht, MR = $n, FR = CR("iterator"), VR = Array.prototype, DR = function(t) {
  return t !== void 0 && (MR.Array === t || VR[FR] === t);
}, NR = Ht, LR = NR("toStringTag"), Og = {};
Og[LR] = "z";
var tp = String(Og) === "[object z]", kR = tp, UR = st, Ai = Uf, BR = Ht, qR = BR("toStringTag"), HR = Object, GR = Ai(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", JR = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, rp = kR ? Ai : function(t) {
  var e, r, n;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (r = JR(e = HR(t), qR)) == "string" ? r : GR ? Ai(e) : (n = Ai(e)) === "Object" && UR(e.callee) ? "Arguments" : n;
}, zR = rp, Od = zf, KR = qf, WR = $n, YR = Ht, XR = YR("iterator"), Eg = function(t) {
  if (!KR(t))
    return Od(t, XR) || Od(t, "@@iterator") || WR[zR(t)];
}, QR = Ir, ZR = ba, eI = cr, tI = Jf, rI = Eg, nI = TypeError, sI = function(t, e) {
  var r = arguments.length < 2 ? rI(t) : e;
  if (ZR(r))
    return eI(QR(r, t));
  throw new nI(tI(t) + " is not iterable");
}, iI = Ir, Ed = cr, oI = zf, aI = function(t, e, r) {
  var n, s;
  Ed(t);
  try {
    if (n = oI(t, "return"), !n) {
      if (e === "throw")
        throw r;
      return r;
    }
    n = iI(n, t);
  } catch (i) {
    s = !0, n = i;
  }
  if (e === "throw")
    throw r;
  if (s)
    throw n;
  return Ed(n), r;
}, cI = lg, uI = Ir, lI = cr, fI = Jf, pI = DR, hI = hg, Ad = ga, dI = sI, mI = Eg, Pd = aI, yI = TypeError, Pi = function(t, e) {
  this.stopped = t, this.result = e;
}, jd = Pi.prototype, vI = function(t, e, r) {
  var n = r && r.that, s = !!(r && r.AS_ENTRIES), i = !!(r && r.IS_RECORD), o = !!(r && r.IS_ITERATOR), a = !!(r && r.INTERRUPTED), c = cI(e, n), u, f, l, h, p, d, m, y = function($) {
    return u && Pd(u, "normal", $), new Pi(!0, $);
  }, v = function($) {
    return s ? (lI($), a ? c($[0], $[1], y) : c($[0], $[1])) : a ? c($, y) : c($);
  };
  if (i)
    u = t.iterator;
  else if (o)
    u = t;
  else {
    if (f = mI(t), !f)
      throw new yI(fI(t) + " is not iterable");
    if (pI(f)) {
      for (l = 0, h = hI(t); h > l; l++)
        if (p = v(t[l]), p && Ad(jd, p))
          return p;
      return new Pi(!1);
    }
    u = dI(t, f);
  }
  for (d = i ? t.next : u.next; !(m = uI(d, u)).done; ) {
    try {
      p = v(m.value);
    } catch ($) {
      Pd(u, "throw", $);
    }
    if (typeof p == "object" && p && Ad(jd, p))
      return p;
  }
  return new Pi(!1);
}, gI = rp, bI = String, np = function(t) {
  if (gI(t) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return bI(t);
}, $I = np, Ag = function(t, e) {
  return t === void 0 ? arguments.length < 2 ? "" : e : $I(t);
}, xI = $a, wI = ga, SI = Wf, to = Yf, OI = yg, Pg = ep, Zc = ur, eu = Ps, EI = $g, AI = Sg, PI = vI, jI = Ag, _I = Ht, TI = _I("toStringTag"), ro = Error, RI = [].push, pn = function(e, r) {
  var n = wI(tu, this), s;
  to ? s = to(new ro(), n ? SI(this) : tu) : (s = n ? this : Pg(tu), Zc(s, TI, "Error")), r !== void 0 && Zc(s, "message", jI(r)), AI(s, pn, s.stack, 1), arguments.length > 2 && EI(s, arguments[2]);
  var i = [];
  return PI(e, RI, { that: i }), Zc(s, "errors", i), s;
};
to ? to(pn, ro) : OI(pn, ro, { name: !0 });
var tu = pn.prototype = Pg(ro.prototype, {
  constructor: eu(1, pn),
  message: eu(1, ""),
  name: eu(1, "AggregateError")
});
xI({ global: !0, constructor: !0, arity: 2 }, {
  AggregateError: pn
});
var II = Cr.f, CI = function(t, e, r) {
  r in t || II(t, r, {
    configurable: !0,
    get: function() {
      return e[r];
    },
    set: function(n) {
      e[r] = n;
    }
  });
}, MI = st, FI = Bt, _d = Yf, VI = function(t, e, r) {
  var n, s;
  return (
    // it can work only with native `setPrototypeOf`
    _d && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    MI(n = e.constructor) && n !== r && FI(s = n.prototype) && s !== r.prototype && _d(t, s), t
  );
}, Td = _s, DI = ur, NI = ga, Rd = Yf, Id = yg, Cd = CI, LI = VI, kI = Ag, UI = $g, BI = Sg, qI = ar, jg = function(t, e, r, n) {
  var s = "stackTraceLimit", i = n ? 2 : 1, o = t.split("."), a = o[o.length - 1], c = Td.apply(null, o);
  if (c) {
    var u = c.prototype;
    if (!r)
      return c;
    var f = Td("Error"), l = e(function(h, p) {
      var d = kI(n ? p : h, void 0), m = n ? new c(h) : new c();
      return d !== void 0 && DI(m, "message", d), BI(m, l, m.stack, 2), this && NI(u, this) && LI(m, this, l), arguments.length > i && UI(m, arguments[i]), m;
    });
    return l.prototype = u, a !== "Error" ? Rd ? Rd(l, f) : Id(l, f, { name: !0 }) : qI && s in c && (Cd(l, c, s), Cd(l, c, "prepareStackTrace")), Id(l, c), l;
  }
}, _g = $a, HI = nt, wt = kf, Tg = jg, tl = "WebAssembly", Md = HI[tl], no = new Error("e", { cause: 7 }).cause !== 7, Mr = function(t, e) {
  var r = {};
  r[t] = Tg(t, e, no), _g({ global: !0, constructor: !0, arity: 1, forced: no }, r);
}, sp = function(t, e) {
  if (Md && Md[t]) {
    var r = {};
    r[t] = Tg(tl + "." + t, e, no), _g({ target: tl, stat: !0, constructor: !0, arity: 1, forced: no }, r);
  }
};
Mr("Error", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Mr("EvalError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Mr("RangeError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Mr("ReferenceError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Mr("SyntaxError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Mr("TypeError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
Mr("URIError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
sp("CompileError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
sp("LinkError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
sp("RuntimeError", function(t) {
  return function(r) {
    return wt(t, this, arguments);
  };
});
var GI = $a, JI = _s, zI = kf, Fd = ut, KI = jg, ip = "AggregateError", Vd = JI(ip), Dd = !Fd(function() {
  return Vd([1]).errors[0] !== 1;
}) && Fd(function() {
  return Vd([1], ip, { cause: 7 }).cause !== 7;
});
GI({ global: !0, constructor: !0, arity: 2, forced: Dd }, {
  AggregateError: KI(ip, function(t) {
    return function(r, n) {
      return zI(t, this, arguments);
    };
  }, Dd, !0)
});
var WI = nt, YI = st, Nd = WI.WeakMap, XI = YI(Nd) && /native code/.test(String(Nd)), QI = XI, Rg = nt, ZI = Bt, eC = ur, ru = qt, nu = ng, tC = Kf, rC = Qf, Ld = "Object already initialized", rl = Rg.TypeError, nC = Rg.WeakMap, so, cs, io, sC = function(t) {
  return io(t) ? cs(t) : so(t, {});
}, iC = function(t) {
  return function(e) {
    var r;
    if (!ZI(e) || (r = cs(e)).type !== t)
      throw new rl("Incompatible receiver, " + t + " required");
    return r;
  };
};
if (QI || nu.state) {
  var pt = nu.state || (nu.state = new nC());
  pt.get = pt.get, pt.has = pt.has, pt.set = pt.set, so = function(t, e) {
    if (pt.has(t))
      throw new rl(Ld);
    return e.facade = t, pt.set(t, e), e;
  }, cs = function(t) {
    return pt.get(t) || {};
  }, io = function(t) {
    return pt.has(t);
  };
} else {
  var qr = tC("state");
  rC[qr] = !0, so = function(t, e) {
    if (ru(t, qr))
      throw new rl(Ld);
    return e.facade = t, eC(t, qr, e), e;
  }, cs = function(t) {
    return ru(t, qr) ? t[qr] : {};
  }, io = function(t) {
    return ru(t, qr);
  };
}
var Ig = {
  set: so,
  get: cs,
  has: io,
  enforce: sC,
  getterFor: iC
}, nl = ar, oC = qt, Cg = Function.prototype, aC = nl && Object.getOwnPropertyDescriptor, op = oC(Cg, "name"), cC = op && (function() {
}).name === "something", uC = op && (!nl || nl && aC(Cg, "name").configurable), lC = {
  EXISTS: op,
  PROPER: cC,
  CONFIGURABLE: uC
}, fC = ur, Mg = function(t, e, r, n) {
  return n && n.enumerable ? t[e] = r : fC(t, e, r), t;
}, pC = ut, hC = st, dC = Bt, mC = ep, kd = Wf, yC = Mg, vC = Ht, sl = vC("iterator"), Fg = !1, jt, su, iu;
[].keys && (iu = [].keys(), "next" in iu ? (su = kd(kd(iu)), su !== Object.prototype && (jt = su)) : Fg = !0);
var gC = !dC(jt) || pC(function() {
  var t = {};
  return jt[sl].call(t) !== t;
});
gC ? jt = {} : jt = mC(jt);
hC(jt[sl]) || yC(jt, sl, function() {
  return this;
});
var Vg = {
  IteratorPrototype: jt,
  BUGGY_SAFARI_ITERATORS: Fg
}, bC = tp, $C = rp, xC = bC ? {}.toString : function() {
  return "[object " + $C(this) + "]";
}, wC = tp, SC = Cr.f, OC = ur, EC = qt, AC = xC, PC = Ht, Ud = PC("toStringTag"), ap = function(t, e, r, n) {
  var s = r ? t : t && t.prototype;
  s && (EC(s, Ud) || SC(s, Ud, { configurable: !0, value: e }), n && !wC && OC(s, "toString", AC));
}, jC = Vg.IteratorPrototype, _C = ep, TC = Ps, RC = ap, IC = $n, CC = function() {
  return this;
}, MC = function(t, e, r, n) {
  var s = e + " Iterator";
  return t.prototype = _C(jC, { next: TC(+!n, r) }), RC(t, s, !1, !0), IC[s] = CC, t;
}, FC = $a, VC = Ir, Dg = lC, DC = MC, NC = Wf, LC = ap, Bd = Mg, kC = Ht, qd = $n, Ng = Vg, UC = Dg.PROPER;
Dg.CONFIGURABLE;
Ng.IteratorPrototype;
var di = Ng.BUGGY_SAFARI_ITERATORS, ou = kC("iterator"), Hd = "keys", mi = "values", Gd = "entries", BC = function() {
  return this;
}, Lg = function(t, e, r, n, s, i, o) {
  DC(r, e, n);
  var a = function(v) {
    if (v === s && h)
      return h;
    if (!di && v && v in f)
      return f[v];
    switch (v) {
      case Hd:
        return function() {
          return new r(this, v);
        };
      case mi:
        return function() {
          return new r(this, v);
        };
      case Gd:
        return function() {
          return new r(this, v);
        };
    }
    return function() {
      return new r(this);
    };
  }, c = e + " Iterator", u = !1, f = t.prototype, l = f[ou] || f["@@iterator"] || s && f[s], h = !di && l || a(s), p = e === "Array" && f.entries || l, d, m, y;
  if (p && (d = NC(p.call(new t())), d !== Object.prototype && d.next && (LC(d, c, !0, !0), qd[c] = BC)), UC && s === mi && l && l.name !== mi && (u = !0, h = function() {
    return VC(l, this);
  }), s)
    if (m = {
      values: a(mi),
      keys: i ? h : a(Hd),
      entries: a(Gd)
    }, o)
      for (y in m)
        (di || u || !(y in f)) && Bd(f, y, m[y]);
    else
      FC({ target: e, proto: !0, forced: di || u }, m);
  return o && f[ou] !== h && Bd(f, ou, h, { name: s }), qd[e] = h, m;
}, kg = function(t, e) {
  return { value: t, done: e };
}, qC = js, Jd = $n, Ug = Ig;
Cr.f;
var HC = Lg, yi = kg, Bg = "Array Iterator", GC = Ug.set, JC = Ug.getterFor(Bg);
HC(Array, "Array", function(t, e) {
  GC(this, {
    type: Bg,
    target: qC(t),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var t = JC(this), e = t.target, r = t.index++;
  if (!e || r >= e.length)
    return t.target = void 0, yi(void 0, !0);
  switch (t.kind) {
    case "keys":
      return yi(r, !1);
    case "values":
      return yi(e[r], !1);
  }
  return yi([r, e[r]], !1);
}, "values");
Jd.Arguments = Jd.Array;
var cp = lt, zC = Xf, KC = np, WC = Hf, YC = cp("".charAt), zd = cp("".charCodeAt), XC = cp("".slice), Kd = function(t) {
  return function(e, r) {
    var n = KC(WC(e)), s = zC(r), i = n.length, o, a;
    return s < 0 || s >= i ? t ? "" : void 0 : (o = zd(n, s), o < 55296 || o > 56319 || s + 1 === i || (a = zd(n, s + 1)) < 56320 || a > 57343 ? t ? YC(n, s) : o : t ? XC(n, s, s + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
  };
}, QC = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Kd(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Kd(!0)
}, ZC = QC.charAt, eM = np, qg = Ig, tM = Lg, Wd = kg, Hg = "String Iterator", rM = qg.set, nM = qg.getterFor(Hg);
tM(String, "String", function(t) {
  rM(this, {
    type: Hg,
    string: eM(t),
    index: 0
  });
}, function() {
  var e = nM(this), r = e.string, n = e.index, s;
  return n >= r.length ? Wd(void 0, !0) : (s = ZC(r, n), e.index += s.length, Wd(s, !1));
});
var sM = Gf, iM = sM.AggregateError, oM = {
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
}, aM = oM, cM = nt, uM = ap, Yd = $n;
for (var au in aM)
  uM(cM[au], au), Yd[au] = Yd.Array;
var lM = iM, fM = lM, pM = fM, hM = pM, dM = hM, mM = dM, yM = mM, vM = yM;
const gM = /* @__PURE__ */ jr(vM);
class bM extends gM {
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
class $M extends Error {
  static [Symbol.hasInstance](e) {
    return super[Symbol.hasInstance](e) || Function.prototype[Symbol.hasInstance].call(bM, e);
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
const ye = $M;
class xM extends ye {
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
const Rs = xM;
class _e extends ye {
}
class wM extends _e {
}
const vt = wM;
class SM extends ye {
  constructor(r, n) {
    super(r, {
      cause: n.cause
    });
    E(this, "plugin");
    this.plugin = n.plugin;
  }
}
const up = async (t, e, r) => {
  const n = await Promise.all(r.map(Xi([t], [e])));
  return r.filter((s, i) => n[i]);
}, lp = async (t, e, r) => {
  let n;
  for (const s of r)
    try {
      const i = await s[t].call(s, ...e);
      return {
        plugin: s,
        result: i
      };
    } catch (i) {
      n = new SM("Error while running plugin", {
        cause: i,
        plugin: s
      });
    }
  return Promise.reject(n);
};
class il extends ye {
}
class fp extends ye {
}
class OM extends fp {
}
const Gg = OM;
class EM extends Gg {
}
const Jg = EM, AM = async (t, e) => {
  const r = e.resolve.resolvers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.resolve.resolverOpts);
  }), n = await up("canRead", t, r);
  if (Es(n))
    throw new Jg(t.uri);
  try {
    const {
      result: s
    } = await lp("read", [t], n);
    return s;
  } catch (s) {
    throw new fp(`Error while reading file "${t.uri}"`, {
      cause: s
    });
  }
}, PM = async (t, e) => {
  const r = e.parse.parsers.map((s) => {
    const i = Object.create(s);
    return Object.assign(i, e.parse.parserOpts);
  }), n = await up("canParse", t, r);
  if (Es(n))
    throw new Jg(t.uri);
  try {
    const {
      plugin: s,
      result: i
    } = await lp("parse", [t], n);
    return !s.allowEmpty && i.isEmpty ? Promise.reject(new il(`Error while parsing file "${t.uri}". File is empty.`)) : i;
  } catch (s) {
    throw new il(`Error while parsing file "${t.uri}"`, {
      cause: s
    });
  }
}, zg = async (t, e) => {
  const r = Er({
    uri: bn(de(t)),
    mediaType: e.parse.mediaType
  }), n = await AM(r, e);
  return PM(Er({
    ...r,
    data: n
  }), e);
};
function jM(t) {
  return t === null;
}
var _M = jM, TM = typeof Et == "object" && Et && Et.Object === Object && Et, Kg = TM, RM = Kg, IM = typeof self == "object" && self && self.Object === Object && self, CM = RM || IM || Function("return this")(), Gt = CM, MM = Gt, FM = MM.Symbol, pp = FM, Xd = pp, Wg = Object.prototype, VM = Wg.hasOwnProperty, DM = Wg.toString, Bn = Xd ? Xd.toStringTag : void 0;
function NM(t) {
  var e = VM.call(t, Bn), r = t[Bn];
  try {
    t[Bn] = void 0;
    var n = !0;
  } catch {
  }
  var s = DM.call(t);
  return n && (e ? t[Bn] = r : delete t[Bn]), s;
}
var LM = NM, kM = Object.prototype, UM = kM.toString;
function BM(t) {
  return UM.call(t);
}
var qM = BM, Qd = pp, HM = LM, GM = qM, JM = "[object Null]", zM = "[object Undefined]", Zd = Qd ? Qd.toStringTag : void 0;
function KM(t) {
  return t == null ? t === void 0 ? zM : JM : Zd && Zd in Object(t) ? HM(t) : GM(t);
}
var Fr = KM, WM = Array.isArray, xa = WM;
function YM(t) {
  return t != null && typeof t == "object";
}
var Vr = YM, XM = Fr, QM = xa, ZM = Vr, eF = "[object String]";
function tF(t) {
  return typeof t == "string" || !QM(t) && ZM(t) && XM(t) == eF;
}
var rF = tF, nF = Fr, sF = Vr, iF = "[object Number]";
function oF(t) {
  return typeof t == "number" || sF(t) && nF(t) == iF;
}
var aF = oF, cF = Fr, uF = Vr, lF = "[object Boolean]";
function fF(t) {
  return t === !0 || t === !1 || uF(t) && cF(t) == lF;
}
var pF = fF;
function hF(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var wa = hF;
let dF = class {
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
var mF = dF;
function yF() {
  this.__data__ = [], this.size = 0;
}
var vF = yF;
function gF(t, e) {
  return t === e || t !== t && e !== e;
}
var Yg = gF, bF = Yg;
function $F(t, e) {
  for (var r = t.length; r--; )
    if (bF(t[r][0], e))
      return r;
  return -1;
}
var Sa = $F, xF = Sa, wF = Array.prototype, SF = wF.splice;
function OF(t) {
  var e = this.__data__, r = xF(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : SF.call(e, r, 1), --this.size, !0;
}
var EF = OF, AF = Sa;
function PF(t) {
  var e = this.__data__, r = AF(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var jF = PF, _F = Sa;
function TF(t) {
  return _F(this.__data__, t) > -1;
}
var RF = TF, IF = Sa;
function CF(t, e) {
  var r = this.__data__, n = IF(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
var MF = CF, FF = vF, VF = EF, DF = jF, NF = RF, LF = MF;
function xn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
xn.prototype.clear = FF;
xn.prototype.delete = VF;
xn.prototype.get = DF;
xn.prototype.has = NF;
xn.prototype.set = LF;
var Oa = xn, kF = Oa;
function UF() {
  this.__data__ = new kF(), this.size = 0;
}
var BF = UF;
function qF(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
var HF = qF;
function GF(t) {
  return this.__data__.get(t);
}
var JF = GF;
function zF(t) {
  return this.__data__.has(t);
}
var KF = zF, WF = Fr, YF = wa, XF = "[object AsyncFunction]", QF = "[object Function]", ZF = "[object GeneratorFunction]", eV = "[object Proxy]";
function tV(t) {
  if (!YF(t))
    return !1;
  var e = WF(t);
  return e == QF || e == ZF || e == XF || e == eV;
}
var Xg = tV, rV = Gt, nV = rV["__core-js_shared__"], sV = nV, cu = sV, em = function() {
  var t = /[^.]+$/.exec(cu && cu.keys && cu.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function iV(t) {
  return !!em && em in t;
}
var oV = iV, aV = Function.prototype, cV = aV.toString;
function uV(t) {
  if (t != null) {
    try {
      return cV.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Qg = uV, lV = Xg, fV = oV, pV = wa, hV = Qg, dV = /[\\^$.*+?()[\]{}|]/g, mV = /^\[object .+?Constructor\]$/, yV = Function.prototype, vV = Object.prototype, gV = yV.toString, bV = vV.hasOwnProperty, $V = RegExp(
  "^" + gV.call(bV).replace(dV, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xV(t) {
  if (!pV(t) || fV(t))
    return !1;
  var e = lV(t) ? $V : mV;
  return e.test(hV(t));
}
var wV = xV;
function SV(t, e) {
  return t == null ? void 0 : t[e];
}
var OV = SV, EV = wV, AV = OV;
function PV(t, e) {
  var r = AV(t, e);
  return EV(r) ? r : void 0;
}
var wn = PV, jV = wn, _V = Gt, TV = jV(_V, "Map"), hp = TV, RV = wn, IV = RV(Object, "create"), Ea = IV, tm = Ea;
function CV() {
  this.__data__ = tm ? tm(null) : {}, this.size = 0;
}
var MV = CV;
function FV(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var VV = FV, DV = Ea, NV = "__lodash_hash_undefined__", LV = Object.prototype, kV = LV.hasOwnProperty;
function UV(t) {
  var e = this.__data__;
  if (DV) {
    var r = e[t];
    return r === NV ? void 0 : r;
  }
  return kV.call(e, t) ? e[t] : void 0;
}
var BV = UV, qV = Ea, HV = Object.prototype, GV = HV.hasOwnProperty;
function JV(t) {
  var e = this.__data__;
  return qV ? e[t] !== void 0 : GV.call(e, t);
}
var zV = JV, KV = Ea, WV = "__lodash_hash_undefined__";
function YV(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = KV && e === void 0 ? WV : e, this;
}
var XV = YV, QV = MV, ZV = VV, eD = BV, tD = zV, rD = XV;
function Sn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
Sn.prototype.clear = QV;
Sn.prototype.delete = ZV;
Sn.prototype.get = eD;
Sn.prototype.has = tD;
Sn.prototype.set = rD;
var nD = Sn, rm = nD, sD = Oa, iD = hp;
function oD() {
  this.size = 0, this.__data__ = {
    hash: new rm(),
    map: new (iD || sD)(),
    string: new rm()
  };
}
var aD = oD;
function cD(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var uD = cD, lD = uD;
function fD(t, e) {
  var r = t.__data__;
  return lD(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var Aa = fD, pD = Aa;
function hD(t) {
  var e = pD(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var dD = hD, mD = Aa;
function yD(t) {
  return mD(this, t).get(t);
}
var vD = yD, gD = Aa;
function bD(t) {
  return gD(this, t).has(t);
}
var $D = bD, xD = Aa;
function wD(t, e) {
  var r = xD(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
var SD = wD, OD = aD, ED = dD, AD = vD, PD = $D, jD = SD;
function On(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
On.prototype.clear = OD;
On.prototype.delete = ED;
On.prototype.get = AD;
On.prototype.has = PD;
On.prototype.set = jD;
var Zg = On, _D = Oa, TD = hp, RD = Zg, ID = 200;
function CD(t, e) {
  var r = this.__data__;
  if (r instanceof _D) {
    var n = r.__data__;
    if (!TD || n.length < ID - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new RD(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
var MD = CD, FD = Oa, VD = BF, DD = HF, ND = JF, LD = KF, kD = MD;
function En(t) {
  var e = this.__data__ = new FD(t);
  this.size = e.size;
}
En.prototype.clear = VD;
En.prototype.delete = DD;
En.prototype.get = ND;
En.prototype.has = LD;
En.prototype.set = kD;
var UD = En, BD = "__lodash_hash_undefined__";
function qD(t) {
  return this.__data__.set(t, BD), this;
}
var HD = qD;
function GD(t) {
  return this.__data__.has(t);
}
var JD = GD, zD = Zg, KD = HD, WD = JD;
function oo(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new zD(); ++e < r; )
    this.add(t[e]);
}
oo.prototype.add = oo.prototype.push = KD;
oo.prototype.has = WD;
var YD = oo;
function XD(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
var QD = XD;
function ZD(t, e) {
  return t.has(e);
}
var eN = ZD, tN = YD, rN = QD, nN = eN, sN = 1, iN = 2;
function oN(t, e, r, n, s, i) {
  var o = r & sN, a = t.length, c = e.length;
  if (a != c && !(o && c > a))
    return !1;
  var u = i.get(t), f = i.get(e);
  if (u && f)
    return u == e && f == t;
  var l = -1, h = !0, p = r & iN ? new tN() : void 0;
  for (i.set(t, e), i.set(e, t); ++l < a; ) {
    var d = t[l], m = e[l];
    if (n)
      var y = o ? n(m, d, l, e, t, i) : n(d, m, l, t, e, i);
    if (y !== void 0) {
      if (y)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!rN(e, function(v, $) {
        if (!nN(p, $) && (d === v || s(d, v, r, n, i)))
          return p.push($);
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
var eb = oN, aN = Gt, cN = aN.Uint8Array, uN = cN;
function lN(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n, s) {
    r[++e] = [s, n];
  }), r;
}
var fN = lN;
function pN(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n) {
    r[++e] = n;
  }), r;
}
var hN = pN, nm = pp, sm = uN, dN = Yg, mN = eb, yN = fN, vN = hN, gN = 1, bN = 2, $N = "[object Boolean]", xN = "[object Date]", wN = "[object Error]", SN = "[object Map]", ON = "[object Number]", EN = "[object RegExp]", AN = "[object Set]", PN = "[object String]", jN = "[object Symbol]", _N = "[object ArrayBuffer]", TN = "[object DataView]", im = nm ? nm.prototype : void 0, uu = im ? im.valueOf : void 0;
function RN(t, e, r, n, s, i, o) {
  switch (r) {
    case TN:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case _N:
      return !(t.byteLength != e.byteLength || !i(new sm(t), new sm(e)));
    case $N:
    case xN:
    case ON:
      return dN(+t, +e);
    case wN:
      return t.name == e.name && t.message == e.message;
    case EN:
    case PN:
      return t == e + "";
    case SN:
      var a = yN;
    case AN:
      var c = n & gN;
      if (a || (a = vN), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      n |= bN, o.set(t, e);
      var f = mN(a(t), a(e), n, s, i, o);
      return o.delete(t), f;
    case jN:
      if (uu)
        return uu.call(t) == uu.call(e);
  }
  return !1;
}
var IN = RN;
function CN(t, e) {
  for (var r = -1, n = e.length, s = t.length; ++r < n; )
    t[s + r] = e[r];
  return t;
}
var MN = CN, FN = MN, VN = xa;
function DN(t, e, r) {
  var n = e(t);
  return VN(t) ? n : FN(n, r(t));
}
var NN = DN;
function LN(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, s = 0, i = []; ++r < n; ) {
    var o = t[r];
    e(o, r, t) && (i[s++] = o);
  }
  return i;
}
var kN = LN;
function UN() {
  return [];
}
var BN = UN, qN = kN, HN = BN, GN = Object.prototype, JN = GN.propertyIsEnumerable, om = Object.getOwnPropertySymbols, zN = om ? function(t) {
  return t == null ? [] : (t = Object(t), qN(om(t), function(e) {
    return JN.call(t, e);
  }));
} : HN, KN = zN;
function WN(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var YN = WN, XN = Fr, QN = Vr, ZN = "[object Arguments]";
function eL(t) {
  return QN(t) && XN(t) == ZN;
}
var tL = eL, am = tL, rL = Vr, tb = Object.prototype, nL = tb.hasOwnProperty, sL = tb.propertyIsEnumerable, iL = am(/* @__PURE__ */ function() {
  return arguments;
}()) ? am : function(t) {
  return rL(t) && nL.call(t, "callee") && !sL.call(t, "callee");
}, oL = iL, ao = { exports: {} };
function aL() {
  return !1;
}
var cL = aL;
ao.exports;
(function(t, e) {
  var r = Gt, n = cL, s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, u = c || n;
  t.exports = u;
})(ao, ao.exports);
var rb = ao.exports, uL = 9007199254740991, lL = /^(?:0|[1-9]\d*)$/;
function fL(t, e) {
  var r = typeof t;
  return e = e ?? uL, !!e && (r == "number" || r != "symbol" && lL.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var pL = fL, hL = 9007199254740991;
function dL(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= hL;
}
var nb = dL, mL = Fr, yL = nb, vL = Vr, gL = "[object Arguments]", bL = "[object Array]", $L = "[object Boolean]", xL = "[object Date]", wL = "[object Error]", SL = "[object Function]", OL = "[object Map]", EL = "[object Number]", AL = "[object Object]", PL = "[object RegExp]", jL = "[object Set]", _L = "[object String]", TL = "[object WeakMap]", RL = "[object ArrayBuffer]", IL = "[object DataView]", CL = "[object Float32Array]", ML = "[object Float64Array]", FL = "[object Int8Array]", VL = "[object Int16Array]", DL = "[object Int32Array]", NL = "[object Uint8Array]", LL = "[object Uint8ClampedArray]", kL = "[object Uint16Array]", UL = "[object Uint32Array]", he = {};
he[CL] = he[ML] = he[FL] = he[VL] = he[DL] = he[NL] = he[LL] = he[kL] = he[UL] = !0;
he[gL] = he[bL] = he[RL] = he[$L] = he[IL] = he[xL] = he[wL] = he[SL] = he[OL] = he[EL] = he[AL] = he[PL] = he[jL] = he[_L] = he[TL] = !1;
function BL(t) {
  return vL(t) && yL(t.length) && !!he[mL(t)];
}
var qL = BL;
function HL(t) {
  return function(e) {
    return t(e);
  };
}
var GL = HL, co = { exports: {} };
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
var JL = co.exports, zL = qL, KL = GL, cm = JL, um = cm && cm.isTypedArray, WL = um ? KL(um) : zL, sb = WL, YL = YN, XL = oL, QL = xa, ZL = rb, ek = pL, tk = sb, rk = Object.prototype, nk = rk.hasOwnProperty;
function sk(t, e) {
  var r = QL(t), n = !r && XL(t), s = !r && !n && ZL(t), i = !r && !n && !s && tk(t), o = r || n || s || i, a = o ? YL(t.length, String) : [], c = a.length;
  for (var u in t)
    (e || nk.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ek(u, c))) && a.push(u);
  return a;
}
var ik = sk, ok = Object.prototype;
function ak(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || ok;
  return t === r;
}
var ck = ak;
function uk(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var lk = uk, fk = lk, pk = fk(Object.keys, Object), hk = pk, dk = ck, mk = hk, yk = Object.prototype, vk = yk.hasOwnProperty;
function gk(t) {
  if (!dk(t))
    return mk(t);
  var e = [];
  for (var r in Object(t))
    vk.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var bk = gk, $k = Xg, xk = nb;
function wk(t) {
  return t != null && xk(t.length) && !$k(t);
}
var Sk = wk, Ok = ik, Ek = bk, Ak = Sk;
function Pk(t) {
  return Ak(t) ? Ok(t) : Ek(t);
}
var jk = Pk, _k = NN, Tk = KN, Rk = jk;
function Ik(t) {
  return _k(t, Rk, Tk);
}
var Ck = Ik, lm = Ck, Mk = 1, Fk = Object.prototype, Vk = Fk.hasOwnProperty;
function Dk(t, e, r, n, s, i) {
  var o = r & Mk, a = lm(t), c = a.length, u = lm(e), f = u.length;
  if (c != f && !o)
    return !1;
  for (var l = c; l--; ) {
    var h = a[l];
    if (!(o ? h in e : Vk.call(e, h)))
      return !1;
  }
  var p = i.get(t), d = i.get(e);
  if (p && d)
    return p == e && d == t;
  var m = !0;
  i.set(t, e), i.set(e, t);
  for (var y = o; ++l < c; ) {
    h = a[l];
    var v = t[h], $ = e[h];
    if (n)
      var b = o ? n($, v, h, e, t, i) : n(v, $, h, t, e, i);
    if (!(b === void 0 ? v === $ || s(v, $, r, n, i) : b)) {
      m = !1;
      break;
    }
    y || (y = h == "constructor");
  }
  if (m && !y) {
    var x = t.constructor, T = e.constructor;
    x != T && "constructor" in t && "constructor" in e && !(typeof x == "function" && x instanceof x && typeof T == "function" && T instanceof T) && (m = !1);
  }
  return i.delete(t), i.delete(e), m;
}
var Nk = Dk, Lk = wn, kk = Gt, Uk = Lk(kk, "DataView"), Bk = Uk, qk = wn, Hk = Gt, Gk = qk(Hk, "Promise"), Jk = Gk, zk = wn, Kk = Gt, Wk = zk(Kk, "Set"), Yk = Wk, Xk = wn, Qk = Gt, Zk = Xk(Qk, "WeakMap"), e2 = Zk, ol = Bk, al = hp, cl = Jk, ul = Yk, ll = e2, ib = Fr, An = Qg, fm = "[object Map]", t2 = "[object Object]", pm = "[object Promise]", hm = "[object Set]", dm = "[object WeakMap]", mm = "[object DataView]", r2 = An(ol), n2 = An(al), s2 = An(cl), i2 = An(ul), o2 = An(ll), hr = ib;
(ol && hr(new ol(new ArrayBuffer(1))) != mm || al && hr(new al()) != fm || cl && hr(cl.resolve()) != pm || ul && hr(new ul()) != hm || ll && hr(new ll()) != dm) && (hr = function(t) {
  var e = ib(t), r = e == t2 ? t.constructor : void 0, n = r ? An(r) : "";
  if (n)
    switch (n) {
      case r2:
        return mm;
      case n2:
        return fm;
      case s2:
        return pm;
      case i2:
        return hm;
      case o2:
        return dm;
    }
  return e;
});
var a2 = hr, lu = UD, c2 = eb, u2 = IN, l2 = Nk, ym = a2, vm = xa, gm = rb, f2 = sb, p2 = 1, bm = "[object Arguments]", $m = "[object Array]", vi = "[object Object]", h2 = Object.prototype, xm = h2.hasOwnProperty;
function d2(t, e, r, n, s, i) {
  var o = vm(t), a = vm(e), c = o ? $m : ym(t), u = a ? $m : ym(e);
  c = c == bm ? vi : c, u = u == bm ? vi : u;
  var f = c == vi, l = u == vi, h = c == u;
  if (h && gm(t)) {
    if (!gm(e))
      return !1;
    o = !0, f = !1;
  }
  if (h && !f)
    return i || (i = new lu()), o || f2(t) ? c2(t, e, r, n, s, i) : u2(t, e, c, r, n, s, i);
  if (!(r & p2)) {
    var p = f && xm.call(t, "__wrapped__"), d = l && xm.call(e, "__wrapped__");
    if (p || d) {
      var m = p ? t.value() : t, y = d ? e.value() : e;
      return i || (i = new lu()), s(m, y, r, n, i);
    }
  }
  return h ? (i || (i = new lu()), l2(t, e, r, n, s, i)) : !1;
}
var m2 = d2, y2 = m2, wm = Vr;
function ob(t, e, r, n, s) {
  return t === e ? !0 : t == null || e == null || !wm(t) && !wm(e) ? t !== t && e !== e : y2(t, e, r, n, ob, s);
}
var v2 = ob, g2 = v2;
function b2(t, e) {
  return g2(t, e);
}
var $2 = b2;
let x2 = class ab {
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
var Pa = x2, w2 = "Expected a function";
function S2(t) {
  if (typeof t != "function")
    throw new TypeError(w2);
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
var ja = S2;
const O2 = ja;
function fu(t) {
  return typeof t == "string" ? (e) => e.element === t : t.constructor && t.extend ? (e) => e instanceof t : t;
}
let cb = class fl {
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
    return e = fu(e), new fl(this.elements.filter(e, r));
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(e, r) {
    return e = fu(e), new fl(this.elements.filter(O2(e), r));
  }
  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(e, r) {
    return e = fu(e), this.elements.find(e, r);
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
const E2 = $2, gi = Pa, Yt = _a;
let A2 = class ji {
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
    return this.content instanceof ji ? this.content.toValue() : this.content instanceof gi ? {
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
    let n = new Yt();
    const s = (o, a) => (o.push(a), o), i = (o, a) => {
      a.element === r && o.push(a);
      const c = a.findRecursive(r);
      return c && c.reduce(s, o), a.content instanceof gi && (a.content.key && i(o, a.content.key), a.content.value && i(o, a.content.value)), o;
    };
    return this.content && (this.content.element && i(n, this.content), Array.isArray(this.content) && this.content.reduce(i, n)), e.isEmpty || (n = n.filter((o) => {
      let a = o.parents.map((c) => c.element);
      for (const c in e) {
        const u = e[c], f = a.indexOf(u);
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
    return E2(this.toValue(), e);
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
    if (e instanceof ji)
      this._content = e;
    else if (e instanceof Yt)
      this.content = e.elements;
    else if (typeof e == "string" || typeof e == "number" || typeof e == "boolean" || e === "null" || e == null)
      this._content = e;
    else if (e instanceof gi)
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
    const r = new Yt();
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
      return new Yt(this.content);
    if (this.content instanceof gi) {
      const e = new Yt([this.content.key]);
      return this.content.value && e.push(this.content.value), e;
    }
    return this.content instanceof ji ? new Yt([this.content]) : new Yt();
  }
  /**
  * Returns all of the children elements found within the element recursively.
  * @type ArraySlice
  * @see children
  */
  get recursiveChildren() {
    const e = new Yt();
    return this.children.forEach((r) => {
      e.push(r), r.recursiveChildren.forEach((n) => {
        e.push(n);
      });
    }), e;
  }
};
var Jt = A2;
const P2 = Jt;
let j2 = class extends P2 {
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
var _2 = j2;
const T2 = Jt;
var R2 = class extends T2 {
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
const I2 = Jt;
var C2 = class extends I2 {
  constructor(e, r, n) {
    super(e, r, n), this.element = "number";
  }
  primitive() {
    return "number";
  }
};
const M2 = Jt;
var F2 = class extends M2 {
  constructor(e, r, n) {
    super(e, r, n), this.element = "boolean";
  }
  primitive() {
    return "boolean";
  }
};
const V2 = ja, D2 = Jt, Sm = _a;
let us = class extends D2 {
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
    return this.filter(V2(e), r);
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
us.empty = function() {
  return new this();
};
us["fantasy-land/empty"] = us.empty;
typeof Symbol < "u" && (us.prototype[Symbol.iterator] = function() {
  return this.content[Symbol.iterator]();
});
var ub = us;
const N2 = Pa, L2 = Jt;
var lb = class extends L2 {
  constructor(e, r, n, s) {
    super(new N2(), n, s), this.element = "member", this.key = e, this.value = r;
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
const k2 = ja, U2 = _a;
let B2 = class fb extends U2 {
  map(e, r) {
    return this.elements.map((n) => e.bind(r)(n.value, n.key, n));
  }
  filter(e, r) {
    return new fb(this.elements.filter((n) => e.bind(r)(n.value, n.key, n)));
  }
  reject(e, r) {
    return this.filter(k2(e.bind(r)));
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
var pb = B2;
const q2 = ja, H2 = wa, G2 = ub, J2 = lb, z2 = pb;
let K2 = class extends G2 {
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
    if (H2(e))
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
    return new z2(this.content).filter(e, r);
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
    return this.filter(q2(e), r);
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
var W2 = K2;
const Y2 = Jt;
var X2 = class extends Y2 {
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
const Q2 = Jt;
var Z2 = class extends Q2 {
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
const Pn = Jt, hb = _2, db = R2, mb = C2, yb = F2, vb = ub, gb = lb, dp = W2, eU = X2, bb = Z2, $b = _a, tU = pb, rU = Pa;
function Ta(t) {
  return t instanceof Pn ? t : typeof t == "string" ? new db(t) : typeof t == "number" ? new mb(t) : typeof t == "boolean" ? new yb(t) : t === null ? new hb() : Array.isArray(t) ? new vb(t.map(Ta)) : typeof t == "object" ? new dp(t) : t;
}
Pn.prototype.ObjectElement = dp;
Pn.prototype.RefElement = bb;
Pn.prototype.MemberElement = gb;
Pn.prototype.refract = Ta;
$b.prototype.refract = Ta;
var xb = {
  Element: Pn,
  NullElement: hb,
  StringElement: db,
  NumberElement: mb,
  BooleanElement: yb,
  ArrayElement: vb,
  MemberElement: gb,
  ObjectElement: dp,
  LinkElement: eU,
  RefElement: bb,
  refract: Ta,
  ArraySlice: $b,
  ObjectSlice: tU,
  KeyValuePair: rU
};
const nU = _M, sU = rF, iU = aF, oU = pF, aU = wa, wb = mF, je = xb;
let Sb = class {
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
    return this.register("null", je.NullElement).register("string", je.StringElement).register("number", je.NumberElement).register("boolean", je.BooleanElement).register("array", je.ArrayElement).register("object", je.ObjectElement).register("member", je.MemberElement).register("ref", je.RefElement).register("link", je.LinkElement), this.detect(nU, je.NullElement, !1).detect(sU, je.StringElement, !1).detect(iU, je.NumberElement, !1).detect(oU, je.BooleanElement, !1).detect(Array.isArray, je.ArrayElement, !1).detect(aU, je.ObjectElement, !1), this;
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
    return new wb(this);
  }
};
wb.prototype.Namespace = Sb;
var cU = Sb;
const uU = cU, Xe = xb;
var lU = uU, en = Pa, ls = Xe.ArraySlice, uo = Xe.ObjectSlice, fU = Xe.Element, It = Xe.StringElement, pl = Xe.NumberElement, Ct = Xe.BooleanElement, hl = Xe.NullElement, ie = Xe.ArrayElement, j = Xe.ObjectElement, Is = Xe.MemberElement, dl = Xe.RefElement, ml = Xe.LinkElement, mp = Xe.refract;
class lo extends It {
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
class fo extends It {
  constructor(e, r, n) {
    super(e, r, n), this.element = "comment";
  }
}
class ct extends ie {
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
    if (Lt(r))
      return !1;
    const n = this.content.findIndex((s) => s === r);
    return n === -1 ? !1 : (this.content[n] = e, !0);
  }
}
class po extends ie {
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
const pU = (t, e) => typeof e == "object" && e !== null && t in e && typeof e[t] == "function", hU = (t) => typeof t == "object" && t != null && "_storedElement" in t && typeof t._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in t, dU = (t, e) => typeof e == "object" && e !== null && "primitive" in e ? typeof e.primitive == "function" && e.primitive() === t : !1, mU = (t, e) => typeof e == "object" && e !== null && "classes" in e && (Array.isArray(e.classes) || e.classes instanceof ie) && e.classes.includes(t), Xt = (t, e) => typeof e == "object" && e !== null && "element" in e && e.element === t, R = (t) => t({
  hasMethod: pU,
  hasBasicElementProps: hU,
  primitiveEq: dU,
  isElementType: Xt,
  hasClass: mU
}), Te = R(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof fU || t(r) && e(void 0, r)), H = R(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof It || t(r) && e("string", r)), yp = R(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof pl || t(r) && e("number", r)), vp = R(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof hl || t(r) && e("null", r)), Cs = R(({
  hasBasicElementProps: t,
  primitiveEq: e
}) => (r) => r instanceof Ct || t(r) && e("boolean", r)), ee = R(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof j || t(n) && e("object", n) && r("keys", n) && r("values", n) && r("items", n)), et = R(({
  hasBasicElementProps: t,
  primitiveEq: e,
  hasMethod: r
}) => (n) => n instanceof ie && !(n instanceof j) || t(n) && e("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), We = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Is || t(n) && e("member", n) && r(void 0, n)), Ob = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ml || t(n) && e("link", n) && r(void 0, n)), Eb = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof dl || t(n) && e("ref", n) && r(void 0, n)), yU = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof lo || t(n) && e("annotation", n) && r("array", n)), vU = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fo || t(n) && e("comment", n) && r("string", n)), Ab = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ct || t(n) && e("parseResult", n) && r("array", n)), Pb = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof po || t(n) && e("sourceMap", n) && r("array", n)), _t = (t) => Xt("object", t) || Xt("array", t) || Xt("boolean", t) || Xt("number", t) || Xt("string", t) || Xt("null", t) || Xt("member", t), gp = (t) => Pb(t.meta.get("sourceMap")), gU = (t, e) => {
  if (t.length === 0)
    return !0;
  const r = e.attributes.get("symbols");
  return et(r) ? xf(ma(r.toValue()), t) : !1;
}, Qn = (t, e) => t.length === 0 ? !0 : xf(ma(e.classes.toValue()), t), bU = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: gp,
  includesClasses: Qn,
  includesSymbols: gU,
  isAnnotationElement: yU,
  isArrayElement: et,
  isBooleanElement: Cs,
  isCommentElement: vU,
  isElement: Te,
  isLinkElement: Ob,
  isMemberElement: We,
  isNullElement: vp,
  isNumberElement: yp,
  isObjectElement: ee,
  isParseResultElement: Ab,
  isPrimitiveElement: _t,
  isRefElement: Eb,
  isSourceMapElement: Pb,
  isStringElement: H
}, Symbol.toStringTag, { value: "Module" }));
class jb extends lU {
  constructor() {
    super(), this.register("annotation", lo), this.register("comment", fo), this.register("parseResult", ct), this.register("sourceMap", po);
  }
}
const _b = new jb(), jn = (t) => {
  const e = new jb();
  return Yi(t) && e.use(t), e;
}, $U = () => ({
  predicates: {
    ...bU
  },
  namespace: _b
}), Tb = $U, bp = (t, e, r) => {
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
}, K = {}, Ra = (t) => t == null ? void 0 : t.type, Rb = (t) => typeof Ra(t) == "string", $p = (t) => Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)), Ib = (t, {
  visitFnGetter: e = bp,
  nodeTypeGetter: r = Ra,
  breakSymbol: n = K,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: i = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(t.length).fill(a);
  return {
    enter(u, ...f) {
      let l = u, h = !1;
      for (let p = 0; p < t.length; p += 1)
        if (c[p] === a) {
          const d = e(t[p], r(l), !1);
          if (typeof d == "function") {
            const m = d.call(t[p], l, ...f);
            if (m === i)
              c[p] = u;
            else if (m === n)
              c[p] = n;
            else {
              if (m === s)
                return m;
              if (m !== void 0)
                if (o)
                  l = m, h = !0;
                else
                  return m;
            }
          }
        }
      return h ? l : void 0;
    },
    leave(u, ...f) {
      for (let l = 0; l < t.length; l += 1)
        if (c[l] === a) {
          const h = e(t[l], r(u), !0);
          if (typeof h == "function") {
            const p = h.call(t[l], u, ...f);
            if (p === n)
              c[l] = n;
            else if (p !== void 0 && p !== i)
              return p;
          }
        } else
          c[l] === u && (c[l] = a);
    }
  };
}, xp = (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = K,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = bp,
  nodeTypeGetter: c = Ra,
  nodePredicate: u = Rb,
  nodeCloneFn: f = $p,
  detectCycles: l = !0
} = {}) => {
  const h = r || {};
  let p, d = Array.isArray(t), m = [t], y = -1, v, $ = [], b = t;
  const x = [], T = [];
  do {
    y += 1;
    const P = y === m.length;
    let C;
    const M = P && $.length !== 0;
    if (P) {
      if (C = T.length === 0 ? void 0 : x.pop(), b = v, v = T.pop(), M)
        if (d) {
          b = b.slice();
          let S = 0;
          for (const [I, N] of $) {
            const Y = I - S;
            N === i ? (b.splice(Y, 1), S += 1) : b[Y] = N;
          }
        } else {
          b = f(b);
          for (const [S, I] of $)
            b[S] = I;
        }
      y = p.index, m = p.keys, $ = p.edits, d = p.inArray, p = p.prev;
    } else if (v !== i && v !== void 0) {
      if (C = d ? y : m[y], b = v[C], b === i || b === void 0)
        continue;
      x.push(C);
    }
    let G;
    if (!Array.isArray(b)) {
      if (!u(b))
        throw new Rs(`Invalid AST Node:  ${String(b)}`, {
          node: b
        });
      if (l && T.includes(b)) {
        x.pop();
        continue;
      }
      const S = a(e, c(b), P);
      if (S) {
        for (const [I, N] of Object.entries(n))
          e[I] = N;
        G = S.call(e, b, C, v, x, T);
      }
      if (G === s)
        break;
      if (G === o) {
        if (!P) {
          x.pop();
          continue;
        }
      } else if (G !== void 0 && ($.push([C, G]), !P))
        if (u(G))
          b = G;
        else {
          x.pop();
          continue;
        }
    }
    if (G === void 0 && M && $.push([C, b]), !P) {
      var V;
      p = {
        inArray: d,
        index: y,
        keys: m,
        edits: $,
        prev: p
      }, d = Array.isArray(b), m = d ? b : (V = h[c(b)]) !== null && V !== void 0 ? V : [], y = -1, $ = [], v !== i && v !== void 0 && T.push(v), v = b;
    }
  } while (p !== void 0);
  return $.length !== 0 ? $[$.length - 1][1] : t;
};
xp[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: s = K,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = bp,
  nodeTypeGetter: c = Ra,
  nodePredicate: u = Rb,
  nodeCloneFn: f = $p,
  detectCycles: l = !0
} = {}) => {
  const h = r || {};
  let p, d = Array.isArray(t), m = [t], y = -1, v, $ = [], b = t;
  const x = [], T = [];
  do {
    y += 1;
    const P = y === m.length;
    let C;
    const M = P && $.length !== 0;
    if (P) {
      if (C = T.length === 0 ? void 0 : x.pop(), b = v, v = T.pop(), M)
        if (d) {
          b = b.slice();
          let S = 0;
          for (const [I, N] of $) {
            const Y = I - S;
            N === i ? (b.splice(Y, 1), S += 1) : b[Y] = N;
          }
        } else {
          b = f(b);
          for (const [S, I] of $)
            b[S] = I;
        }
      y = p.index, m = p.keys, $ = p.edits, d = p.inArray, p = p.prev;
    } else if (v !== i && v !== void 0) {
      if (C = d ? y : m[y], b = v[C], b === i || b === void 0)
        continue;
      x.push(C);
    }
    let G;
    if (!Array.isArray(b)) {
      if (!u(b))
        throw new Rs(`Invalid AST Node: ${String(b)}`, {
          node: b
        });
      if (l && T.includes(b)) {
        x.pop();
        continue;
      }
      const S = a(e, c(b), P);
      if (S) {
        for (const [I, N] of Object.entries(n))
          e[I] = N;
        G = await S.call(e, b, C, v, x, T);
      }
      if (G === s)
        break;
      if (G === o) {
        if (!P) {
          x.pop();
          continue;
        }
      } else if (G !== void 0 && ($.push([C, G]), !P))
        if (u(G))
          b = G;
        else {
          x.pop();
          continue;
        }
    }
    if (G === void 0 && M && $.push([C, b]), !P) {
      var V;
      p = {
        inArray: d,
        index: y,
        keys: m,
        edits: $,
        prev: p
      }, d = Array.isArray(b), m = d ? b : (V = h[c(b)]) !== null && V !== void 0 ? V : [], y = -1, $ = [], v !== i && v !== void 0 && T.push(v), v = b;
    }
  } while (p !== void 0);
  return $.length !== 0 ? $[$.length - 1][1] : t;
};
class Cb extends Rs {
  constructor(r, n) {
    super(r, n);
    E(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
class xU extends Cb {
}
const wU = xU;
class SU extends Cb {
}
const OU = SU, A = (t, e = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = e, n = {
    ...e,
    visited: r
  };
  if (r.has(t))
    return r.get(t);
  if (t instanceof en) {
    const {
      key: s,
      value: i
    } = t, o = Te(s) ? A(s, n) : s, a = Te(i) ? A(i, n) : i, c = new en(o, a);
    return r.set(t, c), c;
  }
  if (t instanceof uo) {
    const s = (a) => A(a, n), i = [...t].map(s), o = new uo(i);
    return r.set(t, o), o;
  }
  if (t instanceof ls) {
    const s = (a) => A(a, n), i = [...t].map(s), o = new ls(i);
    return r.set(t, o), o;
  }
  if (Te(t)) {
    const s = Ne(t);
    if (r.set(t, s), t.content)
      if (Te(t.content))
        s.content = A(t.content, n);
      else if (t.content instanceof en)
        s.content = A(t.content, n);
      else if (Array.isArray(t.content)) {
        const i = (o) => A(o, n);
        s.content = t.content.map(i);
      } else
        s.content = t.content;
    else
      s.content = t.content;
    return s;
  }
  throw new wU("Value provided to cloneDeep function couldn't be cloned", {
    value: t
  });
};
A.safe = (t) => {
  try {
    return A(t);
  } catch {
    return t;
  }
};
const Mb = (t) => {
  const {
    key: e,
    value: r
  } = t;
  return new en(e, r);
}, EU = (t) => {
  const e = [...t];
  return new ls(e);
}, AU = (t) => {
  const e = [...t];
  return new uo(e);
}, Fb = (t) => {
  const e = new t.constructor();
  if (e.element = t.element, t.meta.length > 0 && (e._meta = A(t.meta)), t.attributes.length > 0 && (e._attributes = A(t.attributes)), Te(t.content)) {
    const r = t.content;
    e.content = Fb(r);
  } else
    Array.isArray(t.content) ? e.content = [...t.content] : t.content instanceof en ? e.content = Mb(t.content) : e.content = t.content;
  return e;
}, Ne = (t) => {
  if (t instanceof en)
    return Mb(t);
  if (t instanceof uo)
    return AU(t);
  if (t instanceof ls)
    return EU(t);
  if (Te(t))
    return Fb(t);
  throw new OU("Value provided to cloneShallow function couldn't be cloned", {
    value: t
  });
};
Ne.safe = (t) => {
  try {
    return Ne(t);
  } catch {
    return t;
  }
};
const _n = (t) => ee(t) ? "ObjectElement" : et(t) ? "ArrayElement" : We(t) ? "MemberElement" : H(t) ? "StringElement" : Cs(t) ? "BooleanElement" : yp(t) ? "NumberElement" : vp(t) ? "NullElement" : Ob(t) ? "LinkElement" : Eb(t) ? "RefElement" : void 0, Vb = (t) => Te(t) ? Ne(t) : $p(t), Db = Ae(_n, Rr), Tn = {
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
    predicate: e = bf,
    returnOnTrue: r,
    returnOnFalse: n
  } = {}) {
    E(this, "result");
    E(this, "predicate");
    E(this, "returnOnTrue");
    E(this, "returnOnFalse");
    this.result = [], this.predicate = e, this.returnOnTrue = r, this.returnOnFalse = n;
  }
  enter(e) {
    return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
  }
}
const Ie = (t, e, {
  keyMap: r = Tn,
  ...n
} = {}) => xp(t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: _n,
  nodePredicate: Db,
  nodeCloneFn: Vb,
  ...n
});
Ie[Symbol.for("nodejs.util.promisify.custom")] = async (t, e, {
  keyMap: r = Tn,
  ...n
} = {}) => xp[Symbol.for("nodejs.util.promisify.custom")](t, e, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: _n,
  nodePredicate: Db,
  nodeCloneFn: Vb,
  ...n
});
const PU = {
  toolboxCreator: Tb,
  visitorOptions: {
    nodeTypeGetter: _n,
    exposeEdits: !0
  }
}, Ms = (t, e, r = {}) => {
  if (e.length === 0)
    return t;
  const n = Ov(PU, r), {
    toolboxCreator: s,
    visitorOptions: i
  } = n, o = s(), a = e.map((f) => f(o)), c = Ib(a.map(Gu({}, "visitor")), {
    ...i
  });
  a.forEach(Xi(["pre"], []));
  const u = Ie(t, c, i);
  return a.forEach(Xi(["post"], [])), u;
};
var Lb = { exports: {} };
(function(t) {
  var e = (() => {
    var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (x, T, V) => T in x ? r(x, T, { enumerable: !0, configurable: !0, writable: !0, value: V }) : x[T] = V, u = (x, T) => {
      for (var V in T || (T = {}))
        o.call(T, V) && c(x, V, T[V]);
      if (i)
        for (var V of i(T))
          a.call(T, V) && c(x, V, T[V]);
      return x;
    }, f = (x, T) => {
      for (var V in T)
        r(x, V, { get: T[V], enumerable: !0 });
    }, l = (x, T, V, P) => {
      if (T && typeof T == "object" || typeof T == "function")
        for (let C of s(T))
          !o.call(x, C) && C !== V && r(x, C, { get: () => T[C], enumerable: !(P = n(T, C)) || P.enumerable });
      return x;
    }, h = (x) => l(r({}, "__esModule", { value: !0 }), x), p = (x, T, V) => (c(x, typeof T != "symbol" ? T + "" : T, V), V), d = {};
    f(d, {
      DEFAULT_OPTIONS: () => v,
      DEFAULT_UUID_LENGTH: () => y,
      default: () => b
    });
    var m = "5.0.3", y = 6, v = {
      dictionary: "alphanum",
      shuffle: !0,
      debug: !1,
      length: y,
      counter: 0
    }, $ = class {
      constructor(T = {}) {
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
        }), p(this, "log", (...S) => {
          const I = [...S];
          if (I[0] = `[short-unique-id] ${S[0]}`, this.debug === !0 && typeof console < "u" && console !== null)
            return console.log(...I);
        }), p(this, "setDictionary", (S, I) => {
          let N;
          if (S && Array.isArray(S) && S.length > 1)
            N = S;
          else {
            N = [];
            let Y;
            this.dictIndex = Y = 0;
            const ve = `_${S}_dict_ranges`, ue = this._dict_ranges[ve];
            Object.keys(ue).forEach((Q) => {
              const De = Q;
              for (this.dictRange = ue[De], this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1], this.dictIndex = Y = this.lowerBound; this.lowerBound <= this.upperBound ? Y < this.upperBound : Y > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? Y += 1 : Y -= 1)
                N.push(String.fromCharCode(this.dictIndex));
            });
          }
          I && (N = N.sort(() => Math.random() - 0.5)), this.dict = N, this.dictLength = this.dict.length, this.setCounter(0);
        }), p(this, "seq", () => this.sequentialUUID()), p(this, "sequentialUUID", () => {
          let S, I, N = "";
          S = this.counter;
          do
            I = S % this.dictLength, S = Math.trunc(S / this.dictLength), N += this.dict[I];
          while (S !== 0);
          return this.counter += 1, N;
        }), p(this, "rnd", (S = this.uuidLength || y) => this.randomUUID(S)), p(this, "randomUUID", (S = this.uuidLength || y) => {
          let I, N, Y;
          if (S === null || typeof S > "u" || S < 1)
            throw new Error("Invalid UUID Length Provided");
          for (I = "", Y = 0; Y < S; Y += 1)
            N = parseInt(
              (Math.random() * this.dictLength).toFixed(0),
              10
            ) % this.dictLength, I += this.dict[N];
          return I;
        }), p(this, "fmt", (S, I) => this.formattedUUID(S, I)), p(this, "formattedUUID", (S, I) => {
          const N = {
            $r: this.randomUUID,
            $s: this.sequentialUUID,
            $t: this.stamp
          };
          return S.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (ve) => {
              const ue = ve.slice(0, 2), Q = parseInt(ve.slice(2), 10);
              return ue === "$s" ? N[ue]().padStart(Q, "0") : ue === "$t" && I ? N[ue](Q, I) : N[ue](Q);
            }
          );
        }), p(this, "availableUUIDs", (S = this.uuidLength) => parseFloat(
          Math.pow([...new Set(this.dict)].length, S).toFixed(0)
        )), p(this, "approxMaxBeforeCollision", (S = this.availableUUIDs(this.uuidLength)) => parseFloat(
          Math.sqrt(Math.PI / 2 * S).toFixed(20)
        )), p(this, "collisionProbability", (S = this.availableUUIDs(this.uuidLength), I = this.uuidLength) => parseFloat(
          (this.approxMaxBeforeCollision(S) / this.availableUUIDs(I)).toFixed(20)
        )), p(this, "uniqueness", (S = this.availableUUIDs(this.uuidLength)) => {
          const I = parseFloat(
            (1 - this.approxMaxBeforeCollision(S) / S).toFixed(20)
          );
          return I > 1 ? 1 : I < 0 ? 0 : I;
        }), p(this, "getVersion", () => this.version), p(this, "stamp", (S, I) => {
          const N = Math.floor(+(I || /* @__PURE__ */ new Date()) / 1e3).toString(16);
          if (typeof S == "number" && S === 0)
            return N;
          if (typeof S != "number" || S < 10)
            throw new Error(
              [
                "Param finalLength must be a number greater than or equal to 10,",
                "or 0 if you want the raw hexadecimal timestamp"
              ].join(`
`)
            );
          const Y = S - 9, ve = Math.round(Math.random() * (Y > 15 ? 15 : Y)), ue = this.randomUUID(Y);
          return `${ue.substring(0, ve)}${N}${ue.substring(ve)}${ve.toString(16)}`;
        }), p(this, "parseStamp", (S, I) => {
          if (I && !/t0|t[1-9]\d{1,}/.test(I))
            throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
          const N = I ? I.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (ve) => {
              const ue = {
                $r: (q) => [...Array(q)].map(() => "r").join(""),
                $s: (q) => [...Array(q)].map(() => "s").join(""),
                $t: (q) => [...Array(q)].map(() => "t").join("")
              }, Q = ve.slice(0, 2), De = parseInt(ve.slice(2), 10);
              return ue[Q](De);
            }
          ).replace(
            /^(.*?)(t{8,})(.*)$/g,
            (ve, ue, Q) => S.substring(ue.length, ue.length + Q.length)
          ) : S;
          if (N.length === 8)
            return new Date(parseInt(N, 16) * 1e3);
          if (N.length < 10)
            throw new Error("Stamp length invalid");
          const Y = parseInt(N.substring(N.length - 1), 16);
          return new Date(parseInt(N.substring(Y, Y + 8), 16) * 1e3);
        }), p(this, "setCounter", (S) => {
          this.counter = S;
        });
        const V = u(u({}, v), T);
        this.counter = 0, this.debug = !1, this.dict = [], this.version = m;
        const {
          dictionary: P,
          shuffle: C,
          length: M,
          counter: G
        } = V;
        return this.uuidLength = M, this.setDictionary(P, C), this.setCounter(G), this.debug = V.debug, this.log(this.dict), this.log(
          `Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`
        ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this), this;
      }
    };
    p($, "default", $);
    var b = $;
    return h(d);
  })();
  t.exports = e.default, typeof window < "u" && (e = e.default);
})(Lb);
var jU = Lb.exports;
const _U = /* @__PURE__ */ jr(jU);
class TU extends Rs {
  constructor(r, n) {
    super(r, n);
    E(this, "value");
    typeof n < "u" && (this.value = n.value);
  }
}
const RU = TU, wp = z({
  props: {
    uuid: null,
    length: null,
    identityMap: null
  },
  init({
    length: t = 6
  } = {}) {
    this.length = 6, this.uuid = new _U({
      length: t
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  },
  methods: {
    identify(t) {
      if (!Te(t))
        throw new RU("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
          value: t
        });
      if (t.meta.hasKey("id") && H(t.meta.id) && !t.meta.id.equals(""))
        return t.id;
      if (this.identityMap.has(t))
        return this.identityMap.get(t);
      const e = new It(this.generateId());
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
wp({
  length: 6
});
class IU extends Array {
  constructor() {
    super(...arguments);
    E(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new vt("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new vt("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new vt("latest method in MediaTypes class is not yet implemented.");
  }
}
const CU = (t, {
  Type: e,
  plugins: r = []
}) => {
  const n = new e(t);
  return Ms(n, r, {
    toolboxCreator: Tb,
    visitorOptions: {
      nodeTypeGetter: _n
    }
  });
}, it = (t) => (e, r = {}) => CU(e, {
  ...r,
  Type: t
});
j.refract = it(j);
ie.refract = it(ie);
It.refract = it(It);
Ct.refract = it(Ct);
hl.refract = it(hl);
pl.refract = it(pl);
ml.refract = it(ml);
dl.refract = it(dl);
lo.refract = it(lo);
fo.refract = it(fo);
ct.refract = it(ct);
po.refract = it(po);
const MU = (t, e) => {
  const r = new Nb({
    predicate: t
  });
  return Ie(e, r), new ls(r.result);
}, kb = (t, e) => {
  const r = new Nb({
    predicate: t,
    returnOnTrue: K
  });
  return Ie(e, r), Av(void 0, [0], r.result);
}, Ub = (t) => typeof (t == null ? void 0 : t.type) == "string" ? t.type : _n(t), Bb = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ...Tn
}, qb = (t, e, {
  keyMap: r = Bb,
  ...n
} = {}) => Ie(t, e, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Ub,
  nodePredicate: Vt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
qb[Symbol.for("nodejs.util.promisify.custom")] = async (t, {
  keyMap: e = Bb,
  ...r
} = {}) => Ie[Symbol.for("nodejs.util.promisify.custom")](t, visitor, {
  keyMap: e,
  nodeTypeGetter: Ub,
  nodePredicate: Vt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class FU {
  constructor(e) {
    E(this, "type", "EphemeralArray");
    E(this, "content", []);
    E(this, "reference");
    this.content = e, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}
class VU {
  constructor(e) {
    E(this, "type", "EphemeralObject");
    E(this, "content", []);
    E(this, "reference");
    this.content = e, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
let DU = class {
  constructor() {
    E(this, "ObjectElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new VU(e.content);
        return this.references.set(e, r), r;
      }
    });
    E(this, "EphemeralObject", {
      leave: (e) => e.toObject()
    });
    E(this, "MemberElement", {
      enter: (e) => [e.key, e.value]
    });
    E(this, "ArrayElement", {
      enter: (e) => {
        if (this.references.has(e))
          return this.references.get(e).toReference();
        const r = new FU(e.content);
        return this.references.set(e, r), r;
      }
    });
    E(this, "EphemeralArray", {
      leave: (e) => e.toArray()
    });
    E(this, "references", /* @__PURE__ */ new WeakMap());
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
};
const w = (t) => Te(t) ? H(t) || yp(t) || Cs(t) || vp(t) ? t.toValue() : qb(t, new DU()) : t, _i = (t, e = /* @__PURE__ */ new WeakMap()) => (We(t) ? (e.set(t.key, t), _i(t.key, e), e.set(t.value, t), _i(t.value, e)) : t.children.forEach((r) => {
  e.set(r, t), _i(r, e);
}), e), NU = (t, e, r) => {
  const n = r.get(t);
  We(n) && (n.key === t && (n.key = e, r.delete(t), r.set(e, n)), n.value === t && (n.value = e, r.delete(t), r.set(e, n)));
}, LU = (t, e, r) => {
  const n = r.get(t);
  ee(n) && (n.content = n.map((s, i, o) => o === t ? (r.delete(t), r.set(e, n), e) : o));
}, kU = (t, e, r) => {
  const n = r.get(t);
  et(n) && (n.content = n.map((s) => s === t ? (r.delete(t), r.set(e, n), e) : s));
};
class UU {
  constructor({
    element: e
  }) {
    E(this, "element");
    E(this, "edges");
    this.element = e;
  }
  transclude(e, r) {
    var n;
    if (e === this.element)
      return r;
    if (e === r)
      return this.element;
    this.edges = (n = this.edges) !== null && n !== void 0 ? n : _i(this.element);
    const s = this.edges.get(e);
    if (!Lt(s))
      return ee(s) ? LU(e, r, this.edges) : et(s) ? kU(e, r, this.edges) : We(s) && NU(e, r, this.edges), this.element;
  }
}
const BU = (t, e, r) => new UU({
  element: r
}).transclude(t, e), Ia = (t, e) => {
  const r = Or(t, e);
  return yP((n) => {
    if (Yi(n) && yr("$ref", n) && OP(Rr, "$ref", n)) {
      const s = Ue(["$ref"], n), i = Vf("#/", s);
      return Ue(i.split("/"), r);
    }
    return Yi(n) ? Ia(n, r) : n;
  }, t);
}, qU = (t, e = _b) => {
  if (Rr(t))
    try {
      return e.fromRefract(JSON.parse(t));
    } catch {
    }
  return Yi(t) && yr("element", t) ? e.fromRefract(t) : e.toElement(t);
}, Hb = qU, ho = (t) => {
  const e = A(t.meta), r = A(t.attributes);
  return new t.constructor(void 0, e, r);
}, mo = (t, e) => e.clone && e.isMergeableElement(t) ? hn(ho(t), t, e) : t, HU = (t, e) => {
  if (typeof e.customMerge != "function")
    return hn;
  const r = e.customMerge(t, e);
  return typeof r == "function" ? r : hn;
}, GU = (t, e, r) => t.concat(e)["fantasy-land/map"]((n) => mo(n, r)), JU = (t, e, r) => {
  const n = ee(t) ? ho(t) : ho(e);
  return ee(t) && t.forEach((s, i, o) => {
    const a = Ne(o);
    a.value = mo(s, r), n.content.push(a);
  }), e.forEach((s, i, o) => {
    const a = w(i);
    let c;
    if (ee(t) && t.hasKey(a) && r.isMergeableElement(s)) {
      const u = t.get(a);
      c = Ne(o), c.value = HU(i, r)(u, s);
    } else
      c = Ne(o), c.value = mo(s, r);
    n.remove(a), n.content.push(c);
  }), n;
};
function hn(t, e, r) {
  var n, s, i;
  const o = {
    clone: !0,
    isMergeableElement: (l) => ee(l) || et(l),
    arrayElementMerge: GU,
    objectElementMerge: JU,
    customMerge: void 0
  }, a = {
    ...o,
    ...r
  };
  a.isMergeableElement = (n = a.isMergeableElement) !== null && n !== void 0 ? n : o.isMergeableElement, a.arrayElementMerge = (s = a.arrayElementMerge) !== null && s !== void 0 ? s : o.arrayElementMerge, a.objectElementMerge = (i = a.objectElementMerge) !== null && i !== void 0 ? i : o.objectElementMerge;
  const c = et(e), u = et(t);
  return c === u ? c && typeof a.arrayElementMerge == "function" ? a.arrayElementMerge(t, e, a) : a.objectElementMerge(t, e, a) : mo(e, a);
}
hn.all = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("First argument of deepmerge should be an array.");
  return t.length === 0 ? new j() : t.reduce((r, n) => hn(r, n, e), ho(t[0]));
};
class Sp extends ye {
}
class zU extends Sp {
}
const KU = zU, WU = async (t, e) => {
  let r = t, n = !1;
  if (!Ab(t)) {
    const o = Ne(t);
    o.classes.push("result"), r = new ct([o]), n = !0;
  }
  const s = Er({
    uri: e.resolve.baseURI,
    parseResult: r,
    mediaType: e.parse.mediaType
  }), i = await up("canDereference", s, e.dereference.strategies);
  if (Es(i))
    throw new KU(s.uri);
  try {
    const {
      result: o
    } = await lp("dereference", [s, e], i);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new Sp(`Error while dereferencing file "${s.uri}"`, {
      cause: o
    });
  }
}, Fs = z({
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
      throw new vt("canParse method in Parser stamp is not yet implemented.");
    },
    async parse() {
      throw new vt("parse method in Parser stamp is not yet implemented.");
    }
  }
}), YU = z({
  props: {
    name: null
  },
  methods: {
    canRead() {
      return !1;
    },
    async read() {
      throw new vt("read method in Resolver stamp is not yet implemented.");
    }
  }
}), XU = YU, QU = z(XU, {
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
      return Sr(t.uri);
    },
    async read() {
      throw new vt("read method in HttpResolver stamp is not yet implemented.");
    },
    getHttpClient() {
      throw new vt("getHttpClient method in HttpResolver stamp is not yet implemented.");
    }
  }
}), ZU = z({
  props: {
    name: null
  },
  methods: {
    canResolve() {
      return !1;
    },
    async resolve() {
      throw new vt("resolve method in ResolveStrategy stamp is not yet implemented.");
    }
  }
}), eB = ZU, tB = z({
  props: {
    name: null
  },
  methods: {
    canDereference() {
      return !1;
    },
    async dereference() {
      throw new vt("dereference method in DereferenceStrategy stamp is not yet implemented.");
    }
  }
}), rB = tB;
class pu extends Array {
  includesCycle(e) {
    return this.filter((r) => r.has(e)).length > 1;
  }
  includes(e, r) {
    return e instanceof Set ? super.includes(e, r) : this.some((n) => n.has(e));
  }
  findItem(e) {
    for (const r of this)
      for (const n of r)
        if (Te(n) && e(n))
          return n;
  }
}
const Rn = z({
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
}), nB = z({
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
      const e = Rr(t) ? t : t.uri;
      return _v(this.find(da(e, "uri")));
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
      }), this.refs = [];
    }
  }
}), Ca = nB;
class Gb extends ye {
}
class sB extends Gb {
}
const iB = sB;
class oB extends ye {
}
class aB extends oB {
}
const fs = aB;
class cB extends Gb {
  constructor(e) {
    super(`Invalid JSON Schema $anchor "${e}".`);
  }
}
const uB = cB;
class lB extends Sp {
}
const Tt = lB;
class fB extends fp {
}
const Jb = fB;
class pB extends il {
}
const Mt = pB, hB = async (t, e = {}) => {
  const r = W1(J1, e);
  return WU(t, r);
};
function Op(t, e) {
  function r(...n) {
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, [this.message] = n, e && e.apply(this, n);
  }
  return r.prototype = new Error(), r.prototype.name = t, r.prototype.constructor = r, r;
}
function In(t) {
  return Object.prototype.toString.call(t);
}
function dB(t) {
  return In(t) === "[object Date]";
}
function mB(t) {
  return In(t) === "[object RegExp]";
}
function yB(t) {
  return In(t) === "[object Error]";
}
function vB(t) {
  return In(t) === "[object Boolean]";
}
function gB(t) {
  return In(t) === "[object Number]";
}
function bB(t) {
  return In(t) === "[object String]";
}
var zb = Array.isArray || function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
};
function Ma(t, e) {
  if (t.forEach)
    return t.forEach(e);
  for (var r = 0; r < t.length; r++)
    e(t[r], r, t);
}
var $B = Object.keys || function(e) {
  var r = [];
  for (var n in e)
    r.push(n);
  return r;
}, xB = Object.prototype.propertyIsEnumerable, Om = Object.getOwnPropertySymbols;
function Fa(t) {
  var e = $B(t);
  if (Om)
    for (var r = Om(t), n = 0; n < r.length; n++)
      xB.call(t, r[n]) && e.push(r[n]);
  return e;
}
var Va = Object.prototype.hasOwnProperty || function(t, e) {
  return e in t;
};
function Kb(t) {
  if (typeof t == "object" && t !== null) {
    var e;
    if (zb(t))
      e = [];
    else if (dB(t))
      e = new Date(t.getTime ? t.getTime() : t);
    else if (mB(t))
      e = new RegExp(t);
    else if (yB(t))
      e = { message: t.message };
    else if (vB(t) || gB(t) || bB(t))
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
    return Ma(Fa(t), function(s) {
      e[s] = t[s];
    }), e;
  }
  return t;
}
function Wb(t, e, r) {
  var n = [], s = [], i = !0;
  return function o(a) {
    var c = r ? Kb(a) : a, u = {}, f = !0, l = {
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
        l.isRoot || (l.parent.node[l.key] = d), l.node = d, m && (f = !1);
      },
      delete: function(d) {
        delete l.parent.node[l.key], d && (f = !1);
      },
      remove: function(d) {
        zb(l.parent.node) ? l.parent.node.splice(l.key, 1) : delete l.parent.node[l.key], d && (f = !1);
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
        f = !1;
      }
    };
    if (!i)
      return l;
    function h() {
      if (typeof l.node == "object" && l.node !== null) {
        (!l.keys || l.node_ !== l.node) && (l.keys = Fa(l.node)), l.isLeaf = l.keys.length === 0;
        for (var d = 0; d < s.length; d++)
          if (s[d].node_ === a) {
            l.circular = s[d];
            break;
          }
      } else
        l.isLeaf = !0, l.keys = null;
      l.notLeaf = !l.isLeaf, l.notRoot = !l.isRoot;
    }
    h();
    var p = e.call(l, l.node);
    return p !== void 0 && l.update && l.update(p), u.before && u.before.call(l, l.node), f && (typeof l.node == "object" && l.node !== null && !l.circular && (s.push(l), h(), Ma(l.keys, function(d, m) {
      n.push(d), u.pre && u.pre.call(l, l.node[d], d);
      var y = o(l.node[d]);
      r && Va.call(l.node, d) && (l.node[d] = y.node), y.isLast = m === l.keys.length - 1, y.isFirst = m === 0, u.post && u.post.call(l, y), n.pop();
    }), s.pop()), u.after && u.after.call(l, l.node)), l;
  }(t).node;
}
function rt(t) {
  this.value = t;
}
rt.prototype.get = function(t) {
  for (var e = this.value, r = 0; r < t.length; r++) {
    var n = t[r];
    if (!e || !Va.call(e, n))
      return;
    e = e[n];
  }
  return e;
};
rt.prototype.has = function(t) {
  for (var e = this.value, r = 0; r < t.length; r++) {
    var n = t[r];
    if (!e || !Va.call(e, n))
      return !1;
    e = e[n];
  }
  return !0;
};
rt.prototype.set = function(t, e) {
  for (var r = this.value, n = 0; n < t.length - 1; n++) {
    var s = t[n];
    Va.call(r, s) || (r[s] = {}), r = r[s];
  }
  return r[t[n]] = e, e;
};
rt.prototype.map = function(t) {
  return Wb(this.value, t, !0);
};
rt.prototype.forEach = function(t) {
  return this.value = Wb(this.value, t, !1), this.value;
};
rt.prototype.reduce = function(t, e) {
  var r = arguments.length === 1, n = r ? this.value : e;
  return this.forEach(function(s) {
    (!this.isRoot || !r) && (n = t.call(this, n, s));
  }), n;
};
rt.prototype.paths = function() {
  var t = [];
  return this.forEach(function() {
    t.push(this.path);
  }), t;
};
rt.prototype.nodes = function() {
  var t = [];
  return this.forEach(function() {
    t.push(this.node);
  }), t;
};
rt.prototype.clone = function() {
  var t = [], e = [];
  return function r(n) {
    for (var s = 0; s < t.length; s++)
      if (t[s] === n)
        return e[s];
    if (typeof n == "object" && n !== null) {
      var i = Kb(n);
      return t.push(n), e.push(i), Ma(Fa(n), function(o) {
        i[o] = r(n[o]);
      }), t.pop(), e.pop(), i;
    }
    return n;
  }(this.value);
};
function Yb(t) {
  return new rt(t);
}
Ma(Fa(rt.prototype), function(t) {
  Yb[t] = function(e) {
    var r = [].slice.call(arguments, 1), n = new rt(e);
    return n[t].apply(n, r);
  };
});
var wB = Yb;
const SB = /* @__PURE__ */ jr(wB), OB = ["properties"], EB = ["properties"], AB = [
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
], PB = ["schema/example", "items/example"];
function Xb(t) {
  const e = t[t.length - 1], r = t[t.length - 2], n = t.join("/");
  return (
    // eslint-disable-next-line max-len
    OB.indexOf(e) > -1 && EB.indexOf(r) === -1 || AB.indexOf(n) > -1 || PB.some((s) => n.indexOf(s) > -1)
  );
}
function jB(t, e, {
  specmap: r,
  getBaseUrlForNodePath: n = (i) => r.getContext([...e, ...i]).baseDoc,
  targetKeys: s = ["$ref", "$$ref"]
} = {}) {
  const i = [];
  return SB(t).forEach(function() {
    if (s.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = e.concat(this.path), u = yl(this.node, n(a));
      i.push(r.replace(c, u));
    }
  }), i;
}
function yl(t, e) {
  const [r, n] = t.split("#"), s = e ?? "", i = r ?? "";
  let o;
  if (Sr(s))
    o = we(s, i);
  else {
    const a = we(Ci, s), u = we(a, i).replace(Ci, "");
    o = i.startsWith("/") ? u : u.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const _B = /^([a-z]+:\/\/|\/\/)/i, dn = Op("JSONRefError", function(e, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), Pt = {}, Em = /* @__PURE__ */ new WeakMap(), TB = [
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
], RB = (t) => TB.some((e) => e(t)), IB = {
  key: "$ref",
  plugin: (t, e, r, n) => {
    const s = n.getInstance(), i = r.slice(0, -1);
    if (Xb(i) || RB(i))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof t != "string")
      return new dn("$ref: must be a string (JSON-Ref)", {
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    const a = Zb(t), c = a[0], u = a[1] || "";
    let f;
    try {
      f = o || c ? Qb(c, o) : null;
    } catch (m) {
      return vl(m, {
        pointer: u,
        $ref: t,
        basePath: f,
        fullPath: r
      });
    }
    let l, h;
    if (DB(u, f, i, n) && !s.useCircularStructures) {
      const m = yl(t, f);
      return t === m ? null : re.replace(r, m);
    }
    if (f == null ? (h = Ap(u), l = n.get(h), typeof l > "u" && (l = new dn(`Could not resolve reference: ${t}`, {
      pointer: u,
      $ref: t,
      baseDoc: o,
      fullPath: r
    }))) : (l = e$(f, u), l.__value != null ? l = l.__value : l = l.catch((m) => {
      throw vl(m, {
        pointer: u,
        $ref: t,
        baseDoc: o,
        fullPath: r
      });
    })), l instanceof Error)
      return [re.remove(r), l];
    const p = yl(t, f), d = re.replace(i, l, {
      $$ref: p
    });
    if (f && f !== o)
      return [d, re.context(i, {
        baseDoc: f
      })];
    try {
      if (!NB(n.state, d) || s.useCircularStructures)
        return d;
    } catch {
      return null;
    }
  }
}, Ep = Object.assign(IB, {
  docCache: Pt,
  absoluteify: Qb,
  clearCache: CB,
  JSONRefError: dn,
  wrapError: vl,
  getDoc: t$,
  split: Zb,
  extractFromDoc: e$,
  fetchJSON: MB,
  extract: gl,
  jsonPointerToArray: Ap,
  unescapeJsonPointerToken: r$
});
function Qb(t, e) {
  if (!_B.test(t)) {
    if (!e)
      throw new dn(`Tried to resolve a relative URL, without having a basePath. path: '${t}' basePath: '${e}'`);
    return we(e, t);
  }
  return t;
}
function vl(t, e) {
  let r;
  return t && t.response && t.response.body ? r = `${t.response.body.code} ${t.response.body.message}` : r = t.message, new dn(`Could not resolve reference: ${r}`, e, t);
}
function Zb(t) {
  return (t + "").split("#");
}
function e$(t, e) {
  const r = Pt[t];
  if (r && !re.isPromise(r))
    try {
      const n = gl(e, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return t$(t).then((n) => gl(e, n));
}
function CB(t) {
  typeof t < "u" ? delete Pt[t] : Object.keys(Pt).forEach((e) => {
    delete Pt[e];
  });
}
function t$(t) {
  const e = Pt[t];
  return e ? re.isPromise(e) ? e : Promise.resolve(e) : (Pt[t] = Ep.fetchJSON(t).then((r) => (Pt[t] = r, r)), Pt[t]);
}
function MB(t) {
  return fetch(t, {
    headers: {
      Accept: Hm
    },
    loadSpec: !0
  }).then((e) => e.text()).then((e) => an.load(e));
}
function gl(t, e) {
  const r = Ap(t);
  if (r.length < 1)
    return e;
  const n = re.getIn(e, r);
  if (typeof n > "u")
    throw new dn(`Could not resolve pointer: ${t} does not exist in document`, {
      pointer: t
    });
  return n;
}
function Ap(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got a ${typeof t}`);
  return t[0] === "/" && (t = t.substr(1)), t === "" ? [] : t.split("/").map(r$);
}
function r$(t) {
  return typeof t != "string" ? t : new URLSearchParams(`=${t.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function n$(t) {
  return new URLSearchParams([["", t.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function FB(t) {
  return t.length === 0 ? "" : `/${t.map(n$).join("/")}`;
}
const VB = (t) => !t || t === "/" || t === "#";
function hu(t, e) {
  if (VB(e))
    return !0;
  const r = t.charAt(e.length), n = e.slice(-1);
  return t.indexOf(e) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function DB(t, e, r, n) {
  let s = Em.get(n);
  s || (s = {}, Em.set(n, s));
  const i = FB(r), o = `${e || "<specmap-base>"}#${t}`, a = i.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (e === c && hu(a, t))
    return !0;
  let u = "";
  if (r.some((l) => (u = `${u}/${n$(l)}`, s[u] && s[u].some((h) => hu(h, o) || hu(o, h)))))
    return !0;
  s[a] = (s[a] || []).concat(o);
}
function NB(t, e) {
  const r = [t];
  return e.path.reduce((s, i) => (r.push(s[i]), s[i]), t), n(e.value);
  function n(s) {
    return re.isObject(s) && (r.indexOf(s) >= 0 || Object.keys(s).some((i) => n(s[i])));
  }
}
const LB = {
  key: "allOf",
  plugin: (t, e, r, n, s) => {
    if (s.meta && s.meta.$$ref)
      return;
    const i = r.slice(0, -1);
    if (Xb(i))
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
      const l = r.slice(0, -1), h = jB(u, l, {
        getBaseUrlForNodePath: (p) => n.getContext([...r, f, ...p]).baseDoc,
        specmap: n
      });
      c.push(...h);
    }), a.example && c.push(n.remove([].concat(i, "example"))), c.push(n.mergeDeep(i, a)), a.$$ref || c.push(n.remove([].concat(i, "$$ref"))), c;
  }
}, kB = {
  key: "parameters",
  plugin: (t, e, r, n) => {
    if (Array.isArray(t) && t.length) {
      const s = Object.assign([], t), i = r.slice(0, -1), o = {
        ...re.getIn(n.spec, i)
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
      return re.replace(r, s);
    }
    return re.replace(r, t);
  }
}, UB = {
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
    return re.replace(r, s);
  }
};
class BB {
  constructor(e) {
    this.root = du(e || {});
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
    i[s] = du(r, n);
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
      return !i[s] && r && (i[s] = du(null, n)), i[s];
    }, this.root);
  }
}
function du(t, e) {
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
const Am = 100, Pm = () => {
};
class qB {
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
      contextTree: new BB(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), re, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, e), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(re.isFunction), this.patches.push(re.add([], this.spec)), this.patches.push(re.context([], this.context)), this.updatePatches(this.patches);
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
    return e[this.pluginProp] ? (s = e, i = e[this.pluginProp]) : re.isFunction(e) ? i = e : re.isObject(e) && (i = o(e)), Object.assign(i.bind(s), {
      pluginName: e.name || r,
      isGenerator: re.isGenerator(i)
    });
    function o(a) {
      const c = (u, f) => Array.isArray(u) ? u.every((l, h) => l === f[h]) : !0;
      return function* (f, l) {
        const h = {};
        for (const d of f.filter(re.isAdditiveMutation))
          yield* p(d.value, d.path, d);
        function* p(d, m, y) {
          if (!re.isObject(d))
            a.key === m[m.length - 1] && (yield a.plugin(d, a.key, m, l));
          else {
            const v = m.length - 1, $ = m[v], b = m.indexOf("properties"), x = $ === "properties" && v === b, T = l.allowMetaPatches && h[d.$$ref];
            for (const V of Object.keys(d)) {
              const P = d[V], C = m.concat(V), M = re.isObject(P), G = d.$$ref;
              if (T || M && (l.allowMetaPatches && G && (h[G] = !0), yield* p(P, C, y)), !x && V === a.key) {
                const S = c(n, m);
                (!n || S) && (yield a.plugin(P, V, C, l, y));
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
    re.normalizeArray(e).forEach((r) => {
      if (r instanceof Error) {
        this.errors.push(r);
        return;
      }
      try {
        if (!re.isObject(r)) {
          this.debug("updatePatches", "Got a non-object patch", r);
          return;
        }
        if (this.showDebug && this.allPatches.push(r), re.isPromise(r.value)) {
          this.promisedPatches.push(r), this.promisedPatchThen(r);
          return;
        }
        if (re.isContextPatch(r)) {
          this.setContext(r.path, r.value);
          return;
        }
        re.isMutation(r) && this.updateMutations(r);
      } catch (n) {
        console.error(n), this.errors.push(n);
      }
    });
  }
  updateMutations(e) {
    typeof e.value == "object" && !Array.isArray(e.value) && this.allowMetaPatches && (e.value = {
      ...e.value
    });
    const r = re.applyPatch(this.state, e, {
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
    return re.getIn(this.state, e);
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
    if (e.pluginCount = e.pluginCount || {}, e.pluginCount[r] = (e.pluginCount[r] || 0) + 1, e.pluginCount[r] > Am)
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
      i && (i = re.fullyNormalizeArray(i), e.updatePatches(i, r));
    }
  }
}
function HB(t) {
  return new qB(t).dispatch();
}
const dr = {
  refs: Ep,
  allOf: LB,
  parameters: kB,
  properties: UB
}, s$ = (t) => t.replace(/\W/gi, "_");
function GB(t, e, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${e.toLowerCase()}_${t}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${t.substring(1)}_${e}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${e.toLowerCase()}${s$(t)}`;
}
function Vs(t, e, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !t || typeof t != "object" ? null : (t.operationId || "").replace(/\s/g, "").length ? s$(t.operationId) : GB(e, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function Da(t) {
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
      const u = Vs(c, s, a);
      if (u) {
        n[u] ? n[u].push(c) : n[u] = [c];
        const f = n[u];
        if (f.length > 1)
          f.forEach((l, h) => {
            l.__originalOperationId = l.__originalOperationId || l.operationId, l.operationId = `${u}${h + 1}`;
          });
        else if (typeof c.operationId < "u") {
          const l = f[0];
          l.__originalOperationId = l.__originalOperationId || c.operationId, l.operationId = u;
        }
      }
      if (a !== "parameters") {
        const f = [], l = {};
        for (const h in e)
          (h === "produces" || h === "consumes" || h === "security") && (l[h] = e[h], f.push(l));
        if (o && (l.parameters = o, f.push(l)), f.length) {
          for (const h of f)
            for (const p in h)
              if (!c[p])
                c[p] = h[p];
              else if (p === "parameters")
                for (const d of h[p])
                  c[p].some((y) => y.name && y.name === d.name || y.$ref && y.$ref === d.$ref || y.$$ref && y.$$ref === d.$$ref || y === d) || c[p].push(d);
        }
      }
    }
  }
  return e.$$normalized = !0, t;
}
async function Pp(t) {
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
    useCircularStructures: f
  } = t, l = yf(t), h = sv(t);
  return p(e);
  function p(d) {
    l && (dr.refs.docCache[l] = d), dr.refs.fetchJSON = nv(h, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const m = [dr.refs];
    return typeof o == "function" && m.push(dr.parameters), typeof i == "function" && m.push(dr.properties), r !== "strict" && m.push(dr.allOf), HB({
      spec: d,
      context: {
        baseDoc: l
      },
      plugins: m,
      allowMetaPatches: n,
      // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator: s,
      // for lazy resolution
      parameterMacro: o,
      modelPropertyMacro: i,
      useCircularStructures: f
      // eslint-disable-next-line camelcase
    }).then(u ? async (y) => y : Da);
  }
}
function JB() {
  dr.refs.clearCache();
}
const i$ = {
  name: "generic",
  match() {
    return !0;
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = Da({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return Pp(t);
  }
};
async function zB(t) {
  return Pp(t);
}
const o$ = (t) => {
  try {
    const {
      swagger: e
    } = t;
    return e === "2.0";
  } catch {
    return !1;
  }
}, a$ = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.0\.([0123])(?:-rc[012])?$/.test(e);
  } catch {
    return !1;
  }
}, c$ = (t) => {
  try {
    const {
      openapi: e
    } = t;
    return typeof e == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(e);
  } catch {
    return !1;
  }
}, jp = (t) => a$(t) || c$(t), u$ = {
  name: "openapi-2",
  match({
    spec: t
  }) {
    return o$(t);
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = Da({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return zB(t);
  }
};
async function KB(t) {
  return Pp(t);
}
const l$ = {
  name: "openapi-3-0",
  match({
    spec: t
  }) {
    return a$(t);
  },
  normalize({
    spec: t
  }) {
    const {
      spec: e
    } = Da({
      spec: t
    });
    return e;
  },
  async resolve(t) {
    return KB(t);
  }
}, WB = async (t) => {
  const {
    spec: e,
    requestInterceptor: r,
    responseInterceptor: n
  } = t, s = yf(t), i = sv(t), o = e || await nv(i, {
    requestInterceptor: r,
    responseInterceptor: n
  })(s), a = {
    ...t,
    spec: o
  };
  return t.strategies.find((u) => u.match(a)).resolve(a);
}, f$ = (t) => async (e) => {
  const r = {
    ...t,
    ...e
  };
  return WB(r);
}, YB = f$({
  strategies: [l$, u$, i$]
}), XB = async (t, e, r = {}) => {
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
  }, p = f.find((m) => m.match(l)).normalize(l), d = await YB({
    ...l,
    spec: p,
    allowMetaPatches: !0,
    skipNormalization: !0
  });
  return !n && Array.isArray(e) && e.length && (d.spec = e.reduce((m, y) => m == null ? void 0 : m[y], d.spec) || null), d;
}, QB = (t) => async (e, r, n = {}) => {
  const s = {
    ...t,
    ...n
  };
  return XB(e, r, s);
};
class _p extends Rs {
}
class ZB extends _p {
  constructor(r, n) {
    super(r, n);
    E(this, "pointer");
    typeof n < "u" && (this.pointer = n.pointer);
  }
}
const bl = ZB;
class e3 extends _p {
  constructor(r, n) {
    super(r, n);
    E(this, "tokens");
    typeof n < "u" && (this.tokens = [...n.tokens]);
  }
}
const t3 = e3;
class r3 extends _p {
  constructor(r, n) {
    super(r, n);
    E(this, "pointer");
    E(this, "tokens");
    E(this, "failedToken");
    E(this, "failedTokenPosition");
    E(this, "element");
    typeof n < "u" && (this.pointer = n.pointer, Array.isArray(n.tokens) && (this.tokens = [...n.tokens]), this.failedToken = n.failedToken, this.failedTokenPosition = n.failedTokenPosition, this.element = n.element);
  }
}
const Hn = r3, n3 = Ae(fn(/~/g, "~0"), fn(/\//g, "~1"), encodeURIComponent), s3 = n3, i3 = (t) => {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, o3 = Ae(fn(/~1/g, "/"), fn(/~0/g, "~"), i3), a3 = o3, c3 = (t) => {
  if (Mv(t))
    return [];
  if (!jv("/", t))
    throw new bl(`Invalid JSON Pointer "${t}". JSON Pointers must begin with "/"`, {
      pointer: t
    });
  try {
    const e = Ae(Mf("/"), xs(a3))(t);
    return wv(e);
  } catch (e) {
    throw new bl(`JSON Pointer parsing of "${t}" encountered an error.`, {
      pointer: t,
      cause: e
    });
  }
}, u3 = (t) => {
  const e = t.indexOf("#");
  return e !== -1 ? t.substring(e) : "#";
}, Me = (t) => {
  const e = u3(t);
  return Vf("#", e);
}, l3 = (t) => {
  try {
    return t.length === 0 ? "" : `/${t.map(s3).join("/")}`;
  } catch (e) {
    throw new t3("JSON Pointer compilation of tokens encountered an error.", {
      tokens: t,
      cause: e
    });
  }
}, f3 = l3, p3 = (t, e) => {
  let r;
  try {
    r = c3(t);
  } catch (n) {
    throw new Hn(`JSON Pointer evaluation failed while parsing the pointer "${t}".`, {
      pointer: t,
      element: A(e),
      cause: n
    });
  }
  return r.reduce((n, s, i) => {
    if (ee(n)) {
      if (!n.hasKey(s))
        throw new Hn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ObjectElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: A(n)
        });
      return n.get(s);
    }
    if (et(n)) {
      if (!(s in n.content) || !d1(Number(s)))
        throw new Hn(`JSON Pointer evaluation failed while evaluating token "${s}" against an ArrayElement`, {
          pointer: t,
          tokens: r,
          failedToken: s,
          failedTokenPosition: i,
          element: A(n)
        });
      return n.get(Number(s));
    }
    throw new Hn(`JSON Pointer evaluation failed while evaluating token "${s}" against an unexpected Element`, {
      pointer: t,
      tokens: r,
      failedToken: s,
      failedTokenPosition: i,
      element: A(n)
    });
  }, e);
}, ke = p3;
class Tp extends IU {
  filterByFormat(e = "generic") {
    const r = e === "generic" ? "openapi;version" : e;
    return this.filter((n) => n.includes(r));
  }
  findBy(e = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${e}` : `vnd.oai.openapi+${r};version=${e}`;
    return this.find((i) => i.includes(n)) || this.unknownMediaType;
  }
  latest(e = "generic") {
    return pa(this.filterByFormat(e));
  }
}
const Ar = new Tp("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0");
let Ds = class extends j {
  constructor(e, r, n) {
    super(e, r, n), this.element = "callback";
  }
}, Ns = class extends j {
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
}, Ls = class extends j {
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
}, Na = class extends j {
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
}, La = class extends j {
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
}, ks = class extends j {
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
}, Us = class extends j {
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
}, Cn = class extends j {
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
Object.defineProperty(Cn.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Bs = class extends j {
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
}, qs = class extends j {
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
}, Hs = class extends j {
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
}, Gs = class extends j {
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
}, ka = class extends j {
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
}, Ua = class extends j {
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
}, Js = class extends It {
  constructor(e, r, n) {
    super(e, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
class Ba extends j {
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
let zs = class extends j {
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
}, Mn = class extends j {
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
Object.defineProperty(Mn.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
let Ks = class extends j {
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
}, Ws = class extends j {
  constructor(e, r, n) {
    super(e, r, n), this.element = "paths";
  }
}, Ys = class extends j {
  constructor(e, r, n) {
    super(e, r, n), this.element = "reference", this.classes.push("openapi-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(e) {
    this.set("$ref", e);
  }
}, Xs = class extends j {
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
}, Qs = class extends j {
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
}, Zs = class extends j {
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
class ei extends j {
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
class qa extends j {
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
class Ha extends j {
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
class Ga extends j {
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
const h3 = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("jSONSchemaDraft4", ei), e.register("jSONReference", qa), e.register("media", Ha), e.register("linkDescription", Ga), e;
  }
}, d3 = h3, m3 = (t) => {
  if (Te(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, y3 = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ...Tn
}, v3 = z({
  props: {
    element: null
  },
  // @ts-ignore
  methods: {
    copyMetaAndAttributes(t, e) {
      gp(t) && e.meta.set("sourceMap", t.meta.get("sourceMap"));
    }
  }
}), p$ = v3, g3 = z(p$, {
  methods: {
    enter(t) {
      return this.element = A(t), K;
    }
  }
}), U = g3, b3 = z(p$, {
  props: {
    specObj: null,
    passingOptionsNames: ["specObj"]
  },
  init({
    // @ts-ignore
    specObj: t = this.specObj
  }) {
    this.specObj = t;
  },
  methods: {
    retrievePassingOptions() {
      return Pv(this.passingOptionsNames, this);
    },
    retrieveFixedFields(t) {
      const e = Ue(["visitors", ...t, "fixedFields"], this.specObj);
      return typeof e == "object" && e !== null ? Object.keys(e) : [];
    },
    retrieveVisitor(t) {
      return ha(kt, ["visitors", ...t], this.specObj) ? Ue(["visitors", ...t], this.specObj) : Ue(["visitors", ...t, "$visitor"], this.specObj);
    },
    retrieveVisitorInstance(t, e = {}) {
      const r = this.retrievePassingOptions(), n = this.retrieveVisitor(t), s = {
        ...r,
        ...e
      };
      return new n(s);
    },
    toRefractedElement(t, e, r = {}) {
      const n = this.retrieveVisitorInstance(t, r), s = Object.getPrototypeOf(n);
      return Lt(this.fallbackVisitorPrototype) && (this.fallbackVisitorPrototype = Object.getPrototypeOf(this.retrieveVisitorInstance(["value"]))), this.fallbackVisitorPrototype === s ? A(e) : (Ie(e, n, r), n.element);
    }
  }
}), lr = b3, $3 = z(lr, {
  props: {
    specPath: Vv,
    ignoredFields: []
  },
  init({
    // @ts-ignore
    specPath: t = this.specPath,
    // @ts-ignore
    ignoredFields: e = this.ignoredFields
  } = {}) {
    this.specPath = t, this.ignoredFields = e;
  },
  methods: {
    ObjectElement(t) {
      const e = this.specPath(t), r = this.retrieveFixedFields(e);
      return t.forEach((n, s, i) => {
        if (H(s) && r.includes(w(s)) && !this.ignoredFields.includes(w(s))) {
          const o = this.toRefractedElement([...e, "fixedFields", w(s)], n), a = new Is(A(s), o);
          this.copyMetaAndAttributes(i, a), a.classes.push("fixed-field"), this.element.content.push(a);
        } else
          this.ignoredFields.includes(w(s)) || this.element.content.push(A(i));
      }), this.copyMetaAndAttributes(t, this.element), K;
    }
  }
}), ps = $3, x3 = z(ps, U, {
  props: {
    specPath: D(["document", "objects", "JSONSchema"])
  },
  init() {
    this.element = new ei();
  }
}), w3 = x3, S3 = U, O3 = S3, E3 = U, A3 = E3, P3 = U, j3 = P3, _3 = U, T3 = _3, R3 = U, I3 = R3, C3 = U, M3 = C3, F3 = U, V3 = F3, D3 = U, N3 = D3, L3 = U, k3 = L3, U3 = U, B3 = U3, q3 = z({
  props: {
    parent: null
  },
  // @ts-ignore
  init({
    parent: t = this.parent
  }) {
    this.parent = t, this.passingOptionsNames = [...this.passingOptionsNames, "parent"];
  }
}), zt = q3, bt = (t) => ee(t) && t.hasKey("$ref"), H3 = z(lr, zt, U, {
  methods: {
    ObjectElement(t) {
      const e = bt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
      return this.element = this.toRefractedElement(e, t), K;
    },
    ArrayElement(t) {
      return this.element = new ie(), this.element.classes.push("json-schema-items"), t.forEach((e) => {
        const r = bt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, e);
        this.element.push(n);
      }), this.copyMetaAndAttributes(t, this.element), K;
    }
  }
}), G3 = H3, J3 = U, z3 = J3, K3 = U, W3 = K3, Y3 = U, X3 = Y3, Q3 = U, Z3 = Q3, eq = U, tq = eq, rq = z(U, {
  methods: {
    ArrayElement(t) {
      return this.element = A(t), this.element.classes.push("json-schema-required"), K;
    }
  }
}), nq = rq, sq = z(lr, {
  props: {
    fieldPatternPredicate: bf,
    specPath: Vv,
    ignoredFields: []
  },
  init({
    // @ts-ignore
    specPath: t = this.specPath,
    // @ts-ignore
    ignoredFields: e = this.ignoredFields
  } = {}) {
    this.specPath = t, this.ignoredFields = e;
  },
  methods: {
    ObjectElement(t) {
      return t.forEach((e, r, n) => {
        if (!this.ignoredFields.includes(w(r)) && this.fieldPatternPredicate(w(r))) {
          const s = this.specPath(e), i = this.toRefractedElement(s, e), o = new Is(A(r), i);
          this.copyMetaAndAttributes(n, o), o.classes.push("patterned-field"), this.element.content.push(o);
        } else
          this.ignoredFields.includes(w(r)) || this.element.content.push(A(n));
      }), this.copyMetaAndAttributes(t, this.element), K;
    }
  }
}), iq = sq, oq = z(iq, {
  props: {
    fieldPatternPredicate: Ff
  }
}), Ja = oq, aq = z(Ja, zt, U, {
  props: {
    specPath: (t) => bt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-properties");
  }
}), cq = aq, uq = z(Ja, zt, U, {
  props: {
    specPath: (t) => bt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-patternProperties");
  }
}), lq = uq, fq = z(Ja, zt, U, {
  props: {
    specPath: (t) => bt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-dependencies");
  }
}), pq = fq, hq = z(U, {
  methods: {
    ArrayElement(t) {
      return this.element = A(t), this.element.classes.push("json-schema-enum"), K;
    }
  }
}), dq = hq, mq = z(U, {
  methods: {
    StringElement(t) {
      return this.element = A(t), this.element.classes.push("json-schema-type"), K;
    },
    ArrayElement(t) {
      return this.element = A(t), this.element.classes.push("json-schema-type"), K;
    }
  }
}), yq = mq, vq = z(lr, zt, U, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-allOf");
  },
  methods: {
    ArrayElement(t) {
      return t.forEach((e) => {
        const r = bt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, e);
        this.element.push(n);
      }), this.copyMetaAndAttributes(t, this.element), K;
    }
  }
}), gq = vq, bq = z(lr, zt, U, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-anyOf");
  },
  methods: {
    ArrayElement(t) {
      return t.forEach((e) => {
        const r = bt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, e);
        this.element.push(n);
      }), this.copyMetaAndAttributes(t, this.element), K;
    }
  }
}), $q = bq, xq = z(lr, zt, U, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-oneOf");
  },
  methods: {
    ArrayElement(t) {
      return t.forEach((e) => {
        const r = bt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, e);
        this.element.push(n);
      }), this.copyMetaAndAttributes(t, this.element), K;
    }
  }
}), wq = xq, Sq = z(Ja, zt, U, {
  props: {
    specPath: (t) => bt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-definitions");
  }
}), Oq = Sq, Eq = U, Aq = Eq, Pq = U, jq = Pq, _q = U, Tq = _q, Rq = U, Iq = Rq, Cq = U, Mq = Cq, Fq = z(lr, zt, U, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-links");
  },
  methods: {
    ArrayElement(t) {
      return t.forEach((e) => {
        const r = this.toRefractedElement(["document", "objects", "LinkDescription"], e);
        this.element.push(r);
      }), this.copyMetaAndAttributes(t, this.element), K;
    }
  }
}), Vq = Fq, Dq = U, Nq = Dq, Lq = z(ps, U, {
  props: {
    specPath: D(["document", "objects", "JSONReference"])
  },
  init() {
    this.element = new qa();
  },
  methods: {
    ObjectElement(t) {
      const e = ps.compose.methods.ObjectElement.call(this, t);
      return H(this.element.$ref) && this.element.classes.push("reference-element"), e;
    }
  }
}), kq = Lq, Uq = z(U, {
  methods: {
    StringElement(t) {
      return this.element = A(t), this.element.classes.push("reference-value"), K;
    }
  }
}), Bq = Uq, qq = z(lr, {
  props: {
    alternator: []
  },
  methods: {
    enter(t) {
      const e = this.alternator.map(({
        predicate: n,
        specPath: s
      }) => If(n, D(s), As)), r = Dv(e)(t);
      return this.element = this.toRefractedElement(r, t), K;
    }
  }
}), Hq = qq, Gq = z(Hq, {
  props: {
    alternator: [{
      predicate: bt,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "JSONSchema"]
    }]
  }
}), Hr = Gq, Jq = z(ps, U, {
  props: {
    specPath: D(["document", "objects", "Media"])
  },
  init() {
    this.element = new Ha();
  }
}), zq = Jq, Kq = U, Wq = Kq, Yq = U, Xq = Yq, Qq = z(ps, U, {
  props: {
    specPath: D(["document", "objects", "LinkDescription"])
  },
  init() {
    this.element = new Ga();
  }
}), Zq = Qq, eH = U, tH = eH, rH = U, nH = rH, sH = U, iH = sH, oH = U, aH = oH, cH = U, uH = cH, lH = U, fH = lH, Kt = {
  visitors: {
    value: U,
    JSONSchemaOrJSONReferenceVisitor: Hr,
    document: {
      objects: {
        JSONSchema: {
          $visitor: w3,
          fixedFields: {
            // core vocabulary
            id: O3,
            $schema: A3,
            // validation vocabulary
            // validation keywords for numeric instances (number and integer)
            multipleOf: j3,
            maximum: T3,
            exclusiveMaximum: I3,
            minimum: M3,
            exclusiveMinimum: V3,
            // validation keywords for strings
            maxLength: N3,
            minLength: k3,
            pattern: B3,
            // validation keywords for arrays
            additionalItems: Hr,
            items: G3,
            maxItems: z3,
            minItems: W3,
            uniqueItems: X3,
            // validation keywords for objects
            maxProperties: Z3,
            minProperties: tq,
            required: nq,
            properties: cq,
            additionalProperties: Hr,
            patternProperties: lq,
            dependencies: pq,
            // validation keywords for any instance type
            enum: dq,
            type: yq,
            allOf: gq,
            anyOf: $q,
            oneOf: wq,
            not: Hr,
            definitions: Oq,
            // metadata keywords
            title: Aq,
            description: jq,
            default: Tq,
            // semantic validation with "format"
            format: Iq,
            // JSON Hyper-Schema
            base: Mq,
            links: Vq,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: Nq
          }
        },
        JSONReference: {
          $visitor: kq,
          fixedFields: {
            $ref: Bq
          }
        },
        Media: {
          $visitor: zq,
          fixedFields: {
            binaryEncoding: Wq,
            type: Xq
          }
        },
        LinkDescription: {
          $visitor: Zq,
          fixedFields: {
            href: tH,
            rel: nH,
            title: iH,
            targetSchema: Hr,
            mediaType: aH,
            method: uH,
            encType: fH,
            schema: Hr
          }
        }
      }
    }
  }
}, pH = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ei || t(n) && e("JSONSchemaDraft4", n) && r("object", n)), hH = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof qa || t(n) && e("JSONReference", n) && r("object", n)), dH = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ha || t(n) && e("media", n) && r("object", n)), mH = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ga || t(n) && e("linkDescription", n) && r("object", n)), yH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: hH,
  isJSONSchemaElement: pH,
  isLinkDescriptionElement: mH,
  isMediaElement: dH
}, Symbol.toStringTag, { value: "Module" })), vH = () => {
  const t = jn(d3);
  return {
    predicates: {
      ...yH,
      isStringElement: H
    },
    namespace: t
  };
}, gH = vH, bH = (t, {
  specPath: e = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Kt
} = {}) => {
  const s = mp(t), i = Ia(n), o = Xi(e, [], i);
  return Ie(s, o, {
    state: {
      specObj: i
    }
  }), Ms(o.element, r, {
    toolboxCreator: gH,
    visitorOptions: {
      keyMap: y3,
      nodeTypeGetter: m3
    }
  });
}, za = (t) => (e, r = {}) => bH(e, {
  specPath: t,
  ...r
});
ei.refract = za(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
qa.refract = za(["visitors", "document", "objects", "JSONReference", "$visitor"]);
Ha.refract = za(["visitors", "document", "objects", "Media", "$visitor"]);
Ga.refract = za(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let Ka = class extends ei {
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
}, ti = class extends j {
  constructor(e, r, n) {
    super(e, r, n), this.element = "securityRequirement";
  }
}, Wa = class extends j {
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
}, ri = class extends j {
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
}, ni = class extends j {
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
}, Ya = class extends j {
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
}, Xa = class extends j {
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
const $H = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", Ds), e.register("components", Ns), e.register("contact", Ls), e.register("discriminator", Na), e.register("encoding", La), e.register("example", ks), e.register("externalDocumentation", Us), e.register("header", Cn), e.register("info", Bs), e.register("license", qs), e.register("link", Hs), e.register("mediaType", Gs), e.register("oAuthFlow", ka), e.register("oAuthFlows", Ua), e.register("openapi", Js), e.register("openApi3_0", Ba), e.register("operation", zs), e.register("parameter", Mn), e.register("pathItem", Ks), e.register("paths", Ws), e.register("reference", Ys), e.register("requestBody", Xs), e.register("response", Qs), e.register("responses", Zs), e.register("schema", Ka), e.register("securityRequirement", ti), e.register("securityScheme", Wa), e.register("server", ri), e.register("serverVariable", ni), e.register("tag", Ya), e.register("xml", Xa), e;
  }
}, xH = $H, So = class So extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(So.primaryClass);
  }
};
E(So, "primaryClass", "servers");
let hs = So;
const Oo = class Oo extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Oo.primaryClass);
  }
};
E(Oo, "primaryClass", "security");
let $l = Oo;
const Eo = class Eo extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Eo.primaryClass);
  }
};
E(Eo, "primaryClass", "tags");
let xl = Eo;
const Ao = class Ao extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ao.primaryClass);
  }
};
E(Ao, "primaryClass", "server-variables");
let wl = Ao;
const Po = class Po extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Po.primaryClass);
  }
};
E(Po, "primaryClass", "components-schemas");
let vo = Po;
const jo = class jo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(jo.primaryClass);
  }
};
E(jo, "primaryClass", "components-responses");
let Sl = jo;
const _o = class _o extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(_o.primaryClass), this.classes.push("parameters");
  }
};
E(_o, "primaryClass", "components-parameters");
let Ol = _o;
const To = class To extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(To.primaryClass), this.classes.push("examples");
  }
};
E(To, "primaryClass", "components-examples");
let El = To;
const Ro = class Ro extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ro.primaryClass);
  }
};
E(Ro, "primaryClass", "components-request-bodies");
let Al = Ro;
const Io = class Io extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Io.primaryClass);
  }
};
E(Io, "primaryClass", "components-headers");
let Pl = Io;
const Co = class Co extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Co.primaryClass);
  }
};
E(Co, "primaryClass", "components-security-schemes");
let jl = Co;
const Mo = class Mo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Mo.primaryClass);
  }
};
E(Mo, "primaryClass", "components-links");
let _l = Mo;
const Fo = class Fo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Fo.primaryClass);
  }
};
E(Fo, "primaryClass", "components-callbacks");
let Tl = Fo;
const Vo = class Vo extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Vo.primaryClass), this.classes.push("servers");
  }
};
E(Vo, "primaryClass", "path-item-servers");
let go = Vo;
const Do = class Do extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Do.primaryClass), this.classes.push("parameters");
  }
};
E(Do, "primaryClass", "path-item-parameters");
let Rl = Do;
const No = class No extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(No.primaryClass), this.classes.push("parameters");
  }
};
E(No, "primaryClass", "operation-parameters");
let bo = No;
const Lo = class Lo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Lo.primaryClass), this.classes.push("examples");
  }
};
E(Lo, "primaryClass", "parameter-examples");
let Il = Lo;
const ko = class ko extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ko.primaryClass), this.classes.push("content");
  }
};
E(ko, "primaryClass", "parameter-content");
let Cl = ko;
const Uo = class Uo extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Uo.primaryClass);
  }
};
E(Uo, "primaryClass", "operation-tags");
let Ml = Uo;
const Bo = class Bo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Bo.primaryClass);
  }
};
E(Bo, "primaryClass", "operation-callbacks");
let Fl = Bo;
const qo = class qo extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(qo.primaryClass), this.classes.push("security");
  }
};
E(qo, "primaryClass", "operation-security");
let $o = qo;
const Ho = class Ho extends ie {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ho.primaryClass), this.classes.push("servers");
  }
};
E(Ho, "primaryClass", "operation-servers");
let xo = Ho;
const Go = class Go extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Go.primaryClass), this.classes.push("content");
  }
};
E(Go, "primaryClass", "request-body-content");
let Vl = Go;
const Jo = class Jo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Jo.primaryClass), this.classes.push("examples");
  }
};
E(Jo, "primaryClass", "media-type-examples");
let Dl = Jo;
const zo = class zo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(zo.primaryClass);
  }
};
E(zo, "primaryClass", "media-type-encoding");
let Nl = zo;
const Ko = class Ko extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Ko.primaryClass);
  }
};
E(Ko, "primaryClass", "encoding-headers");
let Ll = Ko;
const Wo = class Wo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Wo.primaryClass);
  }
};
E(Wo, "primaryClass", "response-headers");
let kl = Wo;
const Yo = class Yo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Yo.primaryClass), this.classes.push("content");
  }
};
E(Yo, "primaryClass", "response-content");
let Ul = Yo;
const Xo = class Xo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Xo.primaryClass);
  }
};
E(Xo, "primaryClass", "response-links");
let Bl = Xo;
const Qo = class Qo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Qo.primaryClass);
  }
};
E(Qo, "primaryClass", "discriminator-mapping");
let ql = Qo;
const Zo = class Zo extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(Zo.primaryClass);
  }
};
E(Zo, "primaryClass", "oauth-flow-scopes");
let Hl = Zo;
const ea = class ea extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ea.primaryClass);
  }
};
E(ea, "primaryClass", "link-parameters");
let Gl = ea;
const ta = class ta extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ta.primaryClass), this.classes.push("examples");
  }
};
E(ta, "primaryClass", "header-examples");
let Jl = ta;
const ra = class ra extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ra.primaryClass), this.classes.push("content");
  }
};
E(ra, "primaryClass", "header-content");
let zl = ra;
const wH = (t) => {
  if (Te(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, SH = {
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
  ...Tn
}, h$ = (t, e, r = []) => {
  const n = Object.getOwnPropertyDescriptors(e);
  for (let s of r)
    delete n[s];
  Object.defineProperties(t, n);
}, ds = (t, e = [t]) => {
  const r = Object.getPrototypeOf(t);
  return r === null ? e : ds(r, [...e, r]);
}, OH = (...t) => {
  if (t.length === 0)
    return;
  let e;
  const r = t.map((n) => ds(n));
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
  const s = (n = OH(...t)) !== null && n !== void 0 ? n : Object.prototype, i = Object.create(s), o = ds(s);
  for (let a of t) {
    let c = ds(a);
    for (let u = c.length - 1; u >= 0; u--) {
      let f = c[u];
      o.indexOf(f) === -1 && (h$(i, f, ["constructor", ...r]), o.push(f));
    }
  }
  return i.constructor = e, i;
}, Kl = (t) => t.filter((e, r) => t.indexOf(e) == r), d$ = /* @__PURE__ */ new Map(), EH = (t) => d$.get(t), AH = (t, e) => d$.set(t, e), _m = (t, e) => {
  var r, n;
  const s = Kl([...Object.getOwnPropertyNames(t), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let o of s)
    i[o] = Kl([...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e[o]) !== null && n !== void 0 ? n : []]);
  return i;
}, Tm = (t, e) => {
  var r, n, s, i;
  return {
    property: _m((r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}, (n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}),
    method: _m((s = t == null ? void 0 : t.method) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, PH = (t, e) => {
  var r, n, s, i, o, a;
  return {
    class: Kl([...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : [], ...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : []]),
    static: Tm((s = t == null ? void 0 : t.static) !== null && s !== void 0 ? s : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: Tm((o = t == null ? void 0 : t.instance) !== null && o !== void 0 ? o : {}, (a = e == null ? void 0 : e.instance) !== null && a !== void 0 ? a : {})
  };
}, jH = /* @__PURE__ */ new Map(), _H = (...t) => {
  var e;
  const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([...t]);
  for (; n.size > 0; )
    for (let s of n) {
      const i = ds(s.prototype).map((u) => u.constructor), o = (e = EH(s)) !== null && e !== void 0 ? e : [], c = [...i, ...o].filter((u) => !r.has(u));
      for (let u of c)
        n.add(u);
      r.add(s), n.delete(s);
    }
  return [...r];
}, TH = (...t) => {
  const e = _H(...t).map((r) => jH.get(r)).filter((r) => !!r);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((r, n) => PH(r, n));
};
function _(...t) {
  var e, r, n;
  const s = t.map((a) => a.prototype);
  function i(...a) {
    for (const c of t)
      h$(this, new c(...a));
  }
  i.prototype = jm(s, i), Object.setPrototypeOf(
    i,
    jm(t, null, ["prototype"])
  );
  let o = i;
  {
    const a = TH(...t);
    for (let c of (e = a == null ? void 0 : a.class) !== null && e !== void 0 ? e : []) {
      const u = c(o);
      u && (o = u);
    }
    Rm((r = a == null ? void 0 : a.static) !== null && r !== void 0 ? r : {}, o), Rm((n = a == null ? void 0 : a.instance) !== null && n !== void 0 ? n : {}, o.prototype);
  }
  return AH(o, t), o;
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
class m$ {
  constructor(e = {}) {
    E(this, "element");
    Object.assign(this, e);
  }
  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(e, r) {
    gp(e) && r.meta.set("sourceMap", e.meta.get("sourceMap"));
  }
}
class RH extends m$ {
  enter(e) {
    return this.element = A(e), K;
  }
}
const O = RH;
class qe extends m$ {
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
    E(this, "specObj");
    E(this, "passingOptionsNames", ["specObj", "openApiGenericElement", "openApiSemanticElement"]);
    E(this, "openApiGenericElement");
    E(this, "openApiSemanticElement");
    this.specObj = r, this.openApiGenericElement = s, this.openApiSemanticElement = i, Array.isArray(n) && (this.passingOptionsNames = n);
  }
  retrievePassingOptions() {
    return Pv(this.passingOptionsNames, this);
  }
  retrieveFixedFields(r) {
    const n = Ue(["visitors", ...r, "fixedFields"], this.specObj);
    return typeof n == "object" && n !== null ? Object.keys(n) : [];
  }
  retrieveVisitor(r) {
    return ha(kt, ["visitors", ...r], this.specObj) ? Ue(["visitors", ...r], this.specObj) : Ue(["visitors", ...r, "$visitor"], this.specObj);
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
    return i instanceof O && (i == null ? void 0 : i.constructor) === O ? A(n) : (Ie(n, i, s), i.element);
  }
}
const oe = (t) => ee(t) && t.hasKey("$ref"), y$ = ee, v$ = ee, Rp = (t) => H(t.key) && jv("x-", w(t.key)), IH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isOpenApiExtension: Rp,
  isReferenceLikeElement: oe,
  isServerLikeElement: y$,
  isTagLikeElement: v$
}, Symbol.toStringTag, { value: "Module" }));
class J extends qe {
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
    E(this, "specPath");
    E(this, "ignoredFields");
    E(this, "canSupportSpecificationExtensions", !0);
    E(this, "specificationExtensionPredicate", Rp);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "boolean" && (this.canSupportSpecificationExtensions = s), typeof i == "function" && (this.specificationExtensionPredicate = i);
  }
  ObjectElement(r) {
    const n = this.specPath(r), s = this.retrieveFixedFields(n);
    return r.forEach((i, o, a) => {
      if (H(o) && s.includes(w(o)) && !this.ignoredFields.includes(w(o))) {
        const c = this.toRefractedElement([...n, "fixedFields", w(o)], i), u = new Is(A(o), c);
        this.copyMetaAndAttributes(a, u), u.classes.push("fixed-field"), this.element.content.push(u);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(a)) {
        const c = this.toRefractedElement(["document", "extension"], a);
        this.element.content.push(c);
      } else
        this.ignoredFields.includes(w(o)) || this.element.content.push(A(a));
    }), this.copyMetaAndAttributes(r, this.element), K;
  }
}
class CH extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Ba(), this.specPath = D(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    return J.prototype.ObjectElement.call(this, e);
  }
}
const MH = CH;
class FH extends _(qe, O) {
  StringElement(e) {
    const r = new Js(w(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, K;
  }
}
const VH = FH;
class DH extends qe {
  MemberElement(e) {
    return this.element = A(e), this.element.classes.push("specification-extension"), K;
  }
}
const NH = DH;
let LH = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Bs(), this.specPath = D(["document", "objects", "Info"]), this.canSupportSpecificationExtensions = !0;
  }
};
const kH = LH;
class UH extends O {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("api-version"), this.element.classes.push("version"), r;
  }
}
const BH = UH;
let qH = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Ls(), this.specPath = D(["document", "objects", "Contact"]), this.canSupportSpecificationExtensions = !0;
  }
};
const HH = qH;
let GH = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new qs(), this.specPath = D(["document", "objects", "License"]), this.canSupportSpecificationExtensions = !0;
  }
};
const JH = GH;
let zH = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Hs(), this.specPath = D(["document", "objects", "Link"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = J.prototype.ObjectElement.call(this, e);
    return (H(this.element.operationId) || H(this.element.operationRef)) && this.element.classes.push("reference-element"), r;
  }
};
const KH = zH;
class WH extends O {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const YH = WH;
class XH extends O {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const QH = XH;
class mn extends qe {
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
    E(this, "specPath");
    E(this, "ignoredFields");
    E(this, "fieldPatternPredicate", bf);
    E(this, "canSupportSpecificationExtensions", !1);
    E(this, "specificationExtensionPredicate", Rp);
    this.specPath = r, this.ignoredFields = n || [], typeof s == "function" && (this.fieldPatternPredicate = s), typeof i == "boolean" && (this.canSupportSpecificationExtensions = i), typeof o == "function" && (this.specificationExtensionPredicate = o);
  }
  ObjectElement(r) {
    return r.forEach((n, s, i) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(i)) {
        const o = this.toRefractedElement(["document", "extension"], i);
        this.element.content.push(o);
      } else if (!this.ignoredFields.includes(w(s)) && this.fieldPatternPredicate(w(s))) {
        const o = this.specPath(n), a = this.toRefractedElement(o, n), c = new Is(A(s), a);
        this.copyMetaAndAttributes(i, c), c.classes.push("patterned-field"), this.element.content.push(c);
      } else
        this.ignoredFields.includes(w(s)) || this.element.content.push(A(i));
    }), this.copyMetaAndAttributes(r, this.element), K;
  }
}
class B extends mn {
  constructor(e) {
    super(e), this.fieldPatternPredicate = Ff;
  }
}
let ZH = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Gl(), this.specPath = D(["value"]);
  }
};
const eG = ZH;
let tG = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new ri(), this.specPath = D(["document", "objects", "Server"]), this.canSupportSpecificationExtensions = !0;
  }
};
const rG = tG;
class nG extends O {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("server-url"), r;
  }
}
const sG = nG;
let iG = class extends _(qe, O) {
  constructor(e) {
    super(e), this.element = new hs();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = y$(r) ? ["document", "objects", "Server"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), K;
  }
};
const Ip = iG;
let oG = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new ni(), this.specPath = D(["document", "objects", "ServerVariable"]), this.canSupportSpecificationExtensions = !0;
  }
};
const aG = oG;
class cG extends _(B, O) {
  constructor(e) {
    super(e), this.element = new wl(), this.specPath = D(["document", "objects", "ServerVariable"]);
  }
}
const uG = cG;
let lG = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Gs(), this.specPath = D(["document", "objects", "MediaType"]), this.canSupportSpecificationExtensions = !0;
  }
};
const fG = lG;
class $t extends qe {
  constructor({
    alternator: r,
    ...n
  }) {
    super({
      ...n
    });
    E(this, "alternator");
    this.alternator = r || [];
  }
  enter(r) {
    const n = this.alternator.map(({
      predicate: i,
      specPath: o
    }) => If(i, D(o), As)), s = Dv(n)(r);
    return this.element = this.toRefractedElement(s, r), K;
  }
}
const pG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ds || t(n) && e("callback", n) && r("object", n)), hG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ns || t(n) && e("components", n) && r("object", n)), dG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ls || t(n) && e("contact", n) && r("object", n)), mG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ks || t(n) && e("example", n) && r("object", n)), yG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Us || t(n) && e("externalDocumentation", n) && r("object", n)), Fn = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Cn || t(n) && e("header", n) && r("object", n)), vG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Bs || t(n) && e("info", n) && r("object", n)), gG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof qs || t(n) && e("license", n) && r("object", n)), bG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Hs || t(n) && e("link", n) && r("object", n)), $G = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Js || t(n) && e("openapi", n) && r("string", n)), xG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof Ba || t(s) && e("openApi3_0", s) && r("object", s) && n("api", s)), g$ = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof zs || t(n) && e("operation", n) && r("object", n)), wG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Mn || t(n) && e("parameter", n) && r("object", n)), Cp = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ks || t(n) && e("pathItem", n) && r("object", n)), SG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ws || t(n) && e("paths", n) && r("object", n)), ae = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ys || t(n) && e("reference", n) && r("object", n)), OG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Xs || t(n) && e("requestBody", n) && r("object", n)), Qa = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Qs || t(n) && e("response", n) && r("object", n)), EG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Zs || t(n) && e("responses", n) && r("object", n)), AG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ka || t(n) && e("schema", n) && r("object", n)), PG = (t) => Cs(t) && t.classes.includes("boolean-json-schema"), jG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ti || t(n) && e("securityRequirement", n) && r("object", n)), _G = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ri || t(n) && e("server", n) && r("object", n)), TG = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ni || t(n) && e("serverVariable", n) && r("object", n)), Za = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Gs || t(n) && e("mediaType", n) && r("object", n)), b$ = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof hs || t(s) && e("array", s) && r("array", s) && n("servers", s)), RG = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: PG,
  isCallbackElement: pG,
  isComponentsElement: hG,
  isContactElement: dG,
  isExampleElement: mG,
  isExternalDocumentationElement: yG,
  isHeaderElement: Fn,
  isInfoElement: vG,
  isLicenseElement: gG,
  isLinkElement: bG,
  isMediaTypeElement: Za,
  isOpenApi3_0Element: xG,
  isOpenapiElement: $G,
  isOperationElement: g$,
  isParameterElement: wG,
  isPathItemElement: Cp,
  isPathsElement: SG,
  isReferenceElement: ae,
  isRequestBodyElement: OG,
  isResponseElement: Qa,
  isResponsesElement: EG,
  isSchemaElement: AG,
  isSecurityRequirementElement: jG,
  isServerElement: _G,
  isServerVariableElement: TG,
  isServersElement: b$
}, Symbol.toStringTag, { value: "Module" }));
let IG = class extends _($t, O) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: oe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = $t.prototype.enter.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
};
const CG = IG;
let Mp = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new j(), this.element.classes.push("examples"), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"], this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
}, MG = class extends Mp {
  constructor(e) {
    super(e), this.element = new Dl();
  }
};
const FG = MG;
let VG = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Nl(), this.specPath = D(["document", "objects", "Encoding"]);
  }
};
const DG = VG;
let NG = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new ti(), this.specPath = D(["value"]);
  }
};
const LG = NG;
let kG = class extends _(qe, O) {
  constructor(e) {
    super(e), this.element = new $l();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (ee(r)) {
        const n = this.toRefractedElement(["document", "objects", "SecurityRequirement"], r);
        this.element.push(n);
      } else
        this.element.push(A(r));
    }), this.copyMetaAndAttributes(e, this.element), K;
  }
};
const UG = kG;
let BG = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Ns(), this.specPath = D(["document", "objects", "Components"]), this.canSupportSpecificationExtensions = !0;
  }
};
const qG = BG;
let HG = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Ya(), this.specPath = D(["document", "objects", "Tag"]), this.canSupportSpecificationExtensions = !0;
  }
};
const GG = HG;
let JG = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Ys(), this.specPath = D(["document", "objects", "Reference"]), this.canSupportSpecificationExtensions = !1;
  }
  ObjectElement(e) {
    const r = J.prototype.ObjectElement.call(this, e);
    return H(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
const zG = JG;
let KG = class extends O {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
};
const WG = KG;
let YG = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Mn(), this.specPath = D(["document", "objects", "Parameter"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = J.prototype.ObjectElement.call(this, e);
    return ee(this.element.contentProp) && this.element.contentProp.filter(Za).forEach((n, s) => {
      n.setMetaProperty("media-type", w(s));
    }), r;
  }
};
const XG = YG;
let QG = class extends _($t, O) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: oe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = $t.prototype.enter.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
};
const ZG = QG;
let eJ = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Cn(), this.specPath = D(["document", "objects", "Header"]), this.canSupportSpecificationExtensions = !0;
  }
};
const tJ = eJ;
let rJ = class extends _($t, O) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: oe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "Schema"]
    }];
  }
  ObjectElement(e) {
    const r = $t.prototype.enter.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), r;
  }
};
const nJ = rJ;
let sJ = class extends Mp {
  constructor(e) {
    super(e), this.element = new Jl();
  }
};
const iJ = sJ;
let ec = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new j(), this.element.classes.push("content"), this.specPath = D(["document", "objects", "MediaType"]);
  }
}, oJ = class extends ec {
  constructor(e) {
    super(e), this.element = new zl();
  }
};
const aJ = oJ;
let cJ = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Ka(), this.specPath = D(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0;
  }
};
const uJ = cJ, {
  allOf: Im
} = Kt.visitors.document.objects.JSONSchema.fixedFields, lJ = Im.compose({
  methods: {
    ArrayElement(t) {
      const e = Im.compose.methods.ArrayElement.call(this, t);
      return this.element.filter(ae).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), e;
    }
  }
}), fJ = lJ, {
  anyOf: Cm
} = Kt.visitors.document.objects.JSONSchema.fixedFields, pJ = Cm.compose({
  methods: {
    ArrayElement(t) {
      const e = Cm.compose.methods.ArrayElement.call(this, t);
      return this.element.filter(ae).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), e;
    }
  }
}), hJ = pJ, {
  oneOf: Mm
} = Kt.visitors.document.objects.JSONSchema.fixedFields, dJ = Mm.compose({
  methods: {
    ArrayElement(t) {
      const e = Mm.compose.methods.ArrayElement.call(this, t);
      return this.element.filter(ae).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), e;
    }
  }
}), mJ = dJ, {
  items: Fm
} = Kt.visitors.document.objects.JSONSchema.fixedFields, yJ = Fm.compose({
  methods: {
    ObjectElement(t) {
      const e = Fm.compose.methods.ObjectElement.call(this, t);
      return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), e;
    },
    ArrayElement(t) {
      return this.element = A(t), K;
    }
  }
}), vJ = yJ, {
  properties: Vm
} = Kt.visitors.document.objects.JSONSchema.fixedFields, gJ = Vm.compose({
  methods: {
    ObjectElement(t) {
      const e = Vm.compose.methods.ObjectElement.call(this, t);
      return this.element.filter(ae).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), e;
    }
  }
}), bJ = gJ, {
  type: $J
} = Kt.visitors.document.objects.JSONSchema.fixedFields, xJ = $J.compose({
  methods: {
    ArrayElement(t) {
      return this.element = A(t), K;
    }
  }
}), wJ = xJ, {
  JSONSchemaOrJSONReferenceVisitor: Dm
} = Kt.visitors, SJ = Dm.compose({
  methods: {
    ObjectElement(t) {
      const e = Dm.compose.methods.enter.call(this, t);
      return ae(this.element) && this.element.setMetaProperty("referenced-element", "schema"), e;
    }
  }
}), Nm = SJ;
let OJ = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Na(), this.specPath = D(["document", "objects", "Discriminator"]), this.canSupportSpecificationExtensions = !1;
  }
};
const EJ = OJ;
class AJ extends _(B, O) {
  constructor(e) {
    super(e), this.element = new ql(), this.specPath = D(["value"]);
  }
}
const PJ = AJ;
let jJ = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Xa(), this.specPath = D(["document", "objects", "XML"]), this.canSupportSpecificationExtensions = !0;
  }
};
const _J = jJ;
let TJ = class extends Mp {
  constructor(e) {
    super(e), this.element = new Il();
  }
};
const RJ = TJ;
let IJ = class extends ec {
  constructor(e) {
    super(e), this.element = new Cl();
  }
};
const CJ = IJ;
let MJ = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new vo(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "schema");
    }), r;
  }
};
const FJ = MJ;
let VJ = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Sl(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Qa).forEach((n, s) => {
      n.setMetaProperty("http-status-code", w(s));
    }), r;
  }
};
const DJ = VJ;
let NJ = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Ol(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "parameter");
    }), r;
  }
};
const LJ = NJ;
let kJ = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new El(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "example");
    }), r;
  }
};
const UJ = kJ;
class BJ extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Al(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "requestBody");
    }), r;
  }
}
const qJ = BJ;
let HJ = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Pl(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.filter(Fn).forEach((n, s) => {
      n.setMetaProperty("header-name", w(s));
    }), r;
  }
};
const GJ = HJ;
class JJ extends _(B, O) {
  constructor(e) {
    super(e), this.element = new jl(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "securityScheme");
    }), r;
  }
}
const zJ = JJ;
let KJ = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new _l(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
};
const WJ = KJ;
let YJ = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Tl(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "callback");
    }), r;
  }
};
const XJ = YJ;
let QJ = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new ks(), this.specPath = D(["document", "objects", "Example"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = J.prototype.ObjectElement.call(this, e);
    return H(this.element.externalValue) && this.element.classes.push("reference-element"), r;
  }
};
const ZJ = QJ;
class ez extends O {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const tz = ez;
let rz = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Us(), this.specPath = D(["document", "objects", "ExternalDocumentation"]), this.canSupportSpecificationExtensions = !0;
  }
};
const nz = rz;
let sz = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new La(), this.specPath = D(["document", "objects", "Encoding"]), this.canSupportSpecificationExtensions = !0;
  }
  ObjectElement(e) {
    const r = J.prototype.ObjectElement.call(this, e);
    return ee(this.element.headers) && this.element.headers.filter(Fn).forEach((n, s) => {
      n.setMetaProperty("header-name", w(s));
    }), r;
  }
};
const iz = sz;
let oz = class extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Ll(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!Fn(n))
        return;
      const i = w(s);
      n.setMetaProperty("headerName", i);
    }), r;
  }
};
const az = oz;
let cz = class extends _(mn, O) {
  constructor(e) {
    super(e), this.element = new Ws(), this.specPath = D(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = Vt;
  }
  ObjectElement(e) {
    const r = mn.prototype.ObjectElement.call(this, e);
    return this.element.filter(Cp).forEach((n, s) => {
      s.classes.push("openapi-path-template"), s.classes.push("path-template"), n.setMetaProperty("path", A(s));
    }), r;
  }
};
const uz = cz;
let lz = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Xs(), this.specPath = D(["document", "objects", "RequestBody"]);
  }
  ObjectElement(e) {
    const r = J.prototype.ObjectElement.call(this, e);
    return ee(this.element.contentProp) && this.element.contentProp.filter(Za).forEach((n, s) => {
      n.setMetaProperty("media-type", w(s));
    }), r;
  }
};
const fz = lz;
let pz = class extends ec {
  constructor(e) {
    super(e), this.element = new Vl();
  }
};
const hz = pz;
let dz = class extends _(mn, O) {
  constructor(e) {
    super(e), this.element = new Ds(), this.specPath = D(["document", "objects", "PathItem"]), this.canSupportSpecificationExtensions = !0, this.fieldPatternPredicate = (r) => /{(?<expression>[^}]{1,2083})}/.test(String(r));
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(Cp).forEach((n, s) => {
      n.setMetaProperty("runtime-expression", w(s));
    }), r;
  }
};
const mz = dz;
let yz = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Qs(), this.specPath = D(["document", "objects", "Response"]);
  }
  ObjectElement(e) {
    const r = J.prototype.ObjectElement.call(this, e);
    return ee(this.element.contentProp) && this.element.contentProp.filter(Za).forEach((n, s) => {
      n.setMetaProperty("media-type", w(s));
    }), ee(this.element.headers) && this.element.headers.filter(Fn).forEach((n, s) => {
      n.setMetaProperty("header-name", w(s));
    }), r;
  }
};
const vz = yz;
class gz extends _(B, O) {
  constructor(e) {
    super(e), this.element = new kl(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "header");
    }), this.element.forEach((n, s) => {
      if (!Fn(n))
        return;
      const i = w(s);
      n.setMetaProperty("header-name", i);
    }), r;
  }
}
const bz = gz;
class $z extends ec {
  constructor(e) {
    super(e), this.element = new Ul();
  }
}
const xz = $z;
class wz extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Bl(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "link");
    }), r;
  }
}
const Sz = wz;
class Lm extends _(J, mn) {
  constructor({
    specPathFixedFields: r,
    specPathPatternedFields: n,
    ...s
  }) {
    super({
      ...s
    });
    E(this, "specPathFixedFields");
    E(this, "specPathPatternedFields");
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
      this.ignoredFields = [...s, ...HA(r.keys(), i)], J.prototype.ObjectElement.call(this, r), this.specPath = this.specPathPatternedFields, this.ignoredFields = i, mn.prototype.ObjectElement.call(this, r);
    } catch (i) {
      throw this.specPath = n, i;
    }
    return K;
  }
}
let Oz = class extends _(Lm, O) {
  constructor(e) {
    super(e), this.element = new Zs(), this.specPathFixedFields = D(["document", "objects", "Responses"]), this.canSupportSpecificationExtensions = !0, this.specPathPatternedFields = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"], this.fieldPatternPredicate = (r) => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${EP(100, 600).join("|")})$`).test(String(r));
  }
  ObjectElement(e) {
    const r = Lm.prototype.ObjectElement.call(this, e);
    return this.element.filter(ae).forEach((n) => {
      n.setMetaProperty("referenced-element", "response");
    }), this.element.filter(Qa).forEach((n, s) => {
      const i = A(s);
      this.fieldPatternPredicate(w(i)) && n.setMetaProperty("http-status-code", i);
    }), r;
  }
};
const Ez = Oz;
class Az extends _($t, O) {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: oe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "Response"]
    }];
  }
  ObjectElement(e) {
    const r = $t.prototype.enter.call(this, e);
    return ae(this.element) ? this.element.setMetaProperty("referenced-element", "response") : Qa(this.element) && this.element.setMetaProperty("http-status-code", "default"), r;
  }
}
const Pz = Az;
let jz = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new zs(), this.specPath = D(["document", "objects", "Operation"]);
  }
};
const _z = jz;
let Tz = class extends O {
  constructor(e) {
    super(e), this.element = new Ml();
  }
  ArrayElement(e) {
    return this.element = this.element.concat(A(e)), K;
  }
};
const Rz = Tz;
let $$ = class extends _(qe, O) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("parameters");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], s = this.toRefractedElement(n, r);
      ae(s) && s.setMetaProperty("referenced-element", "parameter"), this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), K;
  }
}, Iz = class extends $$ {
  constructor(e) {
    super(e), this.element = new bo();
  }
};
const Cz = Iz;
let Mz = class extends $t {
  constructor(e) {
    super(e), this.alternator = [{
      predicate: oe,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "RequestBody"]
    }];
  }
  ObjectElement(e) {
    const r = $t.prototype.enter.call(this, e);
    return ae(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), r;
  }
};
const Fz = Mz;
class Vz extends _(B, O) {
  constructor(r) {
    super(r);
    E(this, "specPath");
    this.element = new Fl(), this.specPath = (n) => oe(n) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"];
  }
  ObjectElement(r) {
    const n = B.prototype.ObjectElement.call(this, r);
    return this.element.filter(ae).forEach((s) => {
      s.setMetaProperty("referenced-element", "callback");
    }), n;
  }
}
const Dz = Vz;
class Nz extends _(qe, O) {
  constructor(e) {
    super(e), this.element = new $o();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = ee(r) ? ["document", "objects", "SecurityRequirement"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), K;
  }
}
const Lz = Nz;
let kz = class extends Ip {
  constructor(e) {
    super(e), this.element = new xo();
  }
};
const Uz = kz;
let Bz = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Ks(), this.specPath = D(["document", "objects", "PathItem"]);
  }
  ObjectElement(e) {
    const r = J.prototype.ObjectElement.call(this, e);
    return this.element.filter(g$).forEach((n, s) => {
      const i = A(s);
      i.content = w(i).toUpperCase(), n.setMetaProperty("http-method", i);
    }), H(this.element.$ref) && this.element.classes.push("reference-element"), r;
  }
};
const qz = Bz;
class Hz extends O {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const Gz = Hz;
class Jz extends Ip {
  constructor(e) {
    super(e), this.element = new go();
  }
}
const zz = Jz;
class Kz extends $$ {
  constructor(e) {
    super(e), this.element = new Rl();
  }
}
const Wz = Kz;
let Yz = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Wa(), this.specPath = D(["document", "objects", "SecurityScheme"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Xz = Yz;
let Qz = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new Ua(), this.specPath = D(["document", "objects", "OAuthFlows"]), this.canSupportSpecificationExtensions = !0;
  }
};
const Zz = Qz;
let e8 = class extends _(J, O) {
  constructor(e) {
    super(e), this.element = new ka(), this.specPath = D(["document", "objects", "OAuthFlow"]), this.canSupportSpecificationExtensions = !0;
  }
};
const t8 = e8;
class r8 extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Hl(), this.specPath = D(["value"]);
  }
}
const n8 = r8;
class s8 extends _(qe, O) {
  constructor(e) {
    super(e), this.element = new xl();
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      const n = v$(r) ? ["document", "objects", "Tag"] : ["value"], s = this.toRefractedElement(n, r);
      this.element.push(s);
    }), this.copyMetaAndAttributes(e, this.element), K;
  }
}
const i8 = s8, {
  fixedFields: xe
} = Kt.visitors.document.objects.JSONSchema, o8 = {
  visitors: {
    value: O,
    document: {
      objects: {
        OpenApi: {
          $visitor: MH,
          fixedFields: {
            openapi: VH,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: Ip,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: UG,
            tags: i8,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: kH,
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
            version: BH
          }
        },
        Contact: {
          $visitor: HH,
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
          $visitor: JH,
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
          $visitor: rG,
          fixedFields: {
            url: sG,
            description: {
              $ref: "#/visitors/value"
            },
            variables: uG
          }
        },
        ServerVariable: {
          $visitor: aG,
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
          $visitor: qG,
          fixedFields: {
            schemas: FJ,
            responses: DJ,
            parameters: LJ,
            examples: UJ,
            requestBodies: qJ,
            headers: GJ,
            securitySchemes: zJ,
            links: WJ,
            callbacks: XJ
          }
        },
        Paths: {
          $visitor: uz
        },
        PathItem: {
          $visitor: qz,
          fixedFields: {
            $ref: Gz,
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
            servers: zz,
            parameters: Wz
          }
        },
        Operation: {
          $visitor: _z,
          fixedFields: {
            tags: Rz,
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
            parameters: Cz,
            requestBody: Fz,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: Dz,
            deprecated: {
              $ref: "#/visitors/value"
            },
            security: Lz,
            servers: Uz
          }
        },
        ExternalDocumentation: {
          $visitor: nz,
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
          $visitor: XG,
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
            schema: ZG,
            example: {
              $ref: "#/visitors/value"
            },
            examples: RJ,
            content: CJ
          }
        },
        RequestBody: {
          $visitor: fz,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            content: hz,
            required: {
              $ref: "#/visitors/value"
            }
          }
        },
        MediaType: {
          $visitor: fG,
          fixedFields: {
            schema: CG,
            example: {
              $ref: "#/visitors/value"
            },
            examples: FG,
            encoding: DG
          }
        },
        Encoding: {
          $visitor: iz,
          fixedFields: {
            contentType: {
              $ref: "#/visitors/value"
            },
            headers: az,
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
          $visitor: Ez,
          fixedFields: {
            default: Pz
          }
        },
        Response: {
          $visitor: vz,
          fixedFields: {
            description: {
              $ref: "#/visitors/value"
            },
            headers: bz,
            content: xz,
            links: Sz
          }
        },
        Callback: {
          $visitor: mz
        },
        Example: {
          $visitor: ZJ,
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
            externalValue: tz
          }
        },
        Link: {
          $visitor: KH,
          fixedFields: {
            operationRef: YH,
            operationId: QH,
            parameters: eG,
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
          $visitor: tJ,
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
            schema: nJ,
            example: {
              $ref: "#/visitors/value"
            },
            examples: iJ,
            content: aJ
          }
        },
        Tag: {
          $visitor: GG,
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
          $visitor: zG,
          fixedFields: {
            $ref: WG
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: uJ,
          fixedFields: {
            // the following properties are taken directly from the JSON Schema definition and follow the same specifications
            title: xe.title,
            multipleOf: xe.multipleOf,
            maximum: xe.maximum,
            exclusiveMaximum: xe.exclusiveMaximum,
            minimum: xe.minimum,
            exclusiveMinimum: xe.exclusiveMinimum,
            maxLength: xe.maxLength,
            minLength: xe.minLength,
            pattern: xe.pattern,
            maxItems: xe.maxItems,
            minItems: xe.minItems,
            uniqueItems: xe.uniqueItems,
            maxProperties: xe.maxProperties,
            minProperties: xe.minProperties,
            required: xe.required,
            enum: xe.enum,
            // the following properties are taken from the JSON Schema definition but their definitions were adjusted to the OpenAPI Specification
            type: wJ,
            allOf: fJ,
            anyOf: hJ,
            oneOf: mJ,
            not: Nm,
            items: vJ,
            properties: bJ,
            additionalProperties: Nm,
            description: xe.description,
            format: xe.format,
            default: xe.default,
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
          $visitor: EJ,
          fixedFields: {
            propertyName: {
              $ref: "#/visitors/value"
            },
            mapping: PJ
          }
        },
        XML: {
          $visitor: _J,
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
          $visitor: Xz,
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
          $visitor: Zz,
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
          $visitor: t8,
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
            scopes: n8
          }
        },
        SecurityRequirement: {
          $visitor: LG
        }
      },
      extension: {
        $visitor: NH
      }
    }
  }
}, g = o8, a8 = () => {
  const t = jn(xH);
  return {
    predicates: {
      ...IH,
      ...RG,
      isStringElement: H
    },
    namespace: t
  };
}, c8 = a8, u8 = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = mp(t), s = Ia(g), i = Ue(e, s), o = new i({
    specObj: s
  });
  return Ie(n, o), Ms(o.element, r, {
    toolboxCreator: c8,
    visitorOptions: {
      keyMap: SH,
      nodeTypeGetter: wH
    }
  });
}, te = (t) => (e, r = {}) => u8(e, {
  specPath: t,
  ...r
});
Ds.refract = te(["visitors", "document", "objects", "Callback", "$visitor"]);
Ns.refract = te(["visitors", "document", "objects", "Components", "$visitor"]);
Ls.refract = te(["visitors", "document", "objects", "Contact", "$visitor"]);
ks.refract = te(["visitors", "document", "objects", "Example", "$visitor"]);
Na.refract = te(["visitors", "document", "objects", "Discriminator", "$visitor"]);
La.refract = te(["visitors", "document", "objects", "Encoding", "$visitor"]);
Us.refract = te(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Cn.refract = te(["visitors", "document", "objects", "Header", "$visitor"]);
Bs.refract = te(["visitors", "document", "objects", "Info", "$visitor"]);
qs.refract = te(["visitors", "document", "objects", "License", "$visitor"]);
Hs.refract = te(["visitors", "document", "objects", "Link", "$visitor"]);
Gs.refract = te(["visitors", "document", "objects", "MediaType", "$visitor"]);
ka.refract = te(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Ua.refract = te(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Js.refract = te(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
Ba.refract = te(["visitors", "document", "objects", "OpenApi", "$visitor"]);
zs.refract = te(["visitors", "document", "objects", "Operation", "$visitor"]);
Mn.refract = te(["visitors", "document", "objects", "Parameter", "$visitor"]);
Ks.refract = te(["visitors", "document", "objects", "PathItem", "$visitor"]);
Ws.refract = te(["visitors", "document", "objects", "Paths", "$visitor"]);
Ys.refract = te(["visitors", "document", "objects", "Reference", "$visitor"]);
Xs.refract = te(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Qs.refract = te(["visitors", "document", "objects", "Response", "$visitor"]);
Zs.refract = te(["visitors", "document", "objects", "Responses", "$visitor"]);
Ka.refract = te(["visitors", "document", "objects", "Schema", "$visitor"]);
ti.refract = te(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Wa.refract = te(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
ri.refract = te(["visitors", "document", "objects", "Server", "$visitor"]);
ni.refract = te(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Ya.refract = te(["visitors", "document", "objects", "Tag", "$visitor"]);
Xa.refract = te(["visitors", "document", "objects", "XML", "$visitor"]);
class tc extends Ds {
}
class rc extends Ns {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(e) {
    this.set("pathItems", e);
  }
}
class nc extends Ls {
}
class Fp extends Na {
}
class Vp extends La {
}
class sc extends ks {
}
class ic extends Us {
}
class oc extends Cn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class ac extends Bs {
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
const na = class na extends It {
  constructor(e, r, n) {
    super(e, r, n), this.element = "jsonSchemaDialect";
  }
};
E(na, "default", new na("https://spec.openapis.org/oas/3.1/dialect/base"));
let Pr = na;
class cc extends qs {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(e) {
    this.set("identifier", e);
  }
}
class uc extends Hs {
}
class lc extends Gs {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class Dp extends ka {
}
class Np extends Ua {
}
class Lp extends Js {
}
class l8 extends j {
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
const fr = l8;
class si extends zs {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(e) {
    this.set("requestBody", e);
  }
}
class fc extends Mn {
  get schema() {
    return this.get("schema");
  }
  set schema(e) {
    this.set("schema", e);
  }
}
class gt extends Ks {
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
class pc extends Ws {
}
class xt extends Ys {
}
Object.defineProperty(xt.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(t) {
    this.set("description", t);
  },
  enumerable: !0
});
Object.defineProperty(xt.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(t) {
    this.set("summary", t);
  },
  enumerable: !0
});
class hc extends Xs {
}
let dc = class extends Qs {
};
class mc extends Zs {
}
class f8 extends j {
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
const Ft = f8;
class yc extends ti {
}
class kp extends Wa {
}
class vc extends ri {
}
class gc extends ni {
}
class Up extends Ya {
}
class Bp extends Xa {
}
const p8 = {
  namespace: (t) => {
    const {
      base: e
    } = t;
    return e.register("callback", tc), e.register("components", rc), e.register("contact", nc), e.register("discriminator", Fp), e.register("encoding", Vp), e.register("example", sc), e.register("externalDocumentation", ic), e.register("header", oc), e.register("info", ac), e.register("jsonSchemaDialect", Pr), e.register("license", cc), e.register("link", uc), e.register("mediaType", lc), e.register("oAuthFlow", Dp), e.register("oAuthFlows", Np), e.register("openapi", Lp), e.register("openApi3_1", fr), e.register("operation", si), e.register("parameter", fc), e.register("pathItem", gt), e.register("paths", pc), e.register("reference", xt), e.register("requestBody", hc), e.register("response", dc), e.register("responses", mc), e.register("schema", Ft), e.register("securityRequirement", yc), e.register("securityScheme", kp), e.register("server", vc), e.register("serverVariable", gc), e.register("tag", Up), e.register("xml", Bp), e;
  }
}, bc = p8, sa = class sa extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(sa.primaryClass);
  }
};
E(sa, "primaryClass", "components-path-items");
let Wl = sa;
const ia = class ia extends j {
  constructor(e, r, n) {
    super(e, r, n), this.classes.push(ia.primaryClass);
  }
};
E(ia, "primaryClass", "webhooks");
let Yl = ia;
const Be = (t) => {
  if (Te(t))
    return `${t.element.charAt(0).toUpperCase() + t.element.slice(1)}Element`;
}, Ge = {
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
  ...Tn
}, h8 = () => ({
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
          const s = pa(r);
          if (!Array.isArray(s) || s.length === 0)
            return;
          const i = Av([], ["parameters", "content"], n), o = CP(e, [...i, ...s]);
          n.parameters = new bo(o);
        }
      }
    }
  };
}, d8 = () => ({
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
            r.security = new $o((u = e) === null || u === void 0 ? void 0 : u.content);
          }
        }
      }
    }
  };
}, m8 = () => ({
  predicates: t,
  namespace: e
}) => ({
  visitor: {
    OpenApi3_1Element(r) {
      const n = typeof r.servers > "u", s = t.isArrayElement(r.servers), i = s && r.servers.length === 0, o = e.elements.Server.refract({
        url: "/"
      });
      n || !s ? r.servers = new hs([o]) : s && i && r.servers.push(o);
    },
    PathItemElement(r, n, s, i, o) {
      if (o.some(t.isComponentsElement) || !o.some(t.isOpenApi3_1Element))
        return;
      const a = o.find(t.isOpenApi3_1Element), c = typeof r.servers > "u", u = t.isArrayElement(r.servers), f = u && r.servers.length === 0;
      if (t.isOpenApi3_1Element(a)) {
        var l;
        const h = (l = a.servers) === null || l === void 0 ? void 0 : l.content, p = h ?? [];
        c || !u ? r.servers = new go(p) : u && f && p.forEach((d) => {
          r.servers.push(d);
        });
      }
    },
    OperationElement(r, n, s, i, o) {
      if (o.some(t.isComponentsElement) || !o.some(t.isOpenApi3_1Element))
        return;
      const a = [...o].reverse().find(t.isPathItemElement), c = typeof r.servers > "u", u = t.isArrayElement(r.servers), f = u && r.servers.length === 0;
      if (t.isPathItemElement(a)) {
        var l;
        const h = (l = a.servers) === null || l === void 0 ? void 0 : l.content, p = h ?? [];
        c || !u ? r.servers = new xo(p) : u && f && p.forEach((d) => {
          r.servers.push(d);
        });
      }
    }
  }
}), Xl = (t) => t.replace(/\s/g, ""), Ql = (t) => t.replace(/\W/gi, "_"), y8 = (t, e) => {
  const r = Ql(Xl(e.toLowerCase())), n = Ql(Xl(t));
  return `${r}${n}`;
}, v8 = (t, e, r) => {
  const n = Xl(t);
  return n.length > 0 ? Ql(n) : y8(e, r);
}, g8 = ({
  operationIdNormalizer: t = v8
} = {}) => ({
  predicates: e,
  namespace: r
}) => {
  const n = [], s = [], i = [];
  return {
    visitor: {
      OpenApi3_1Element: {
        leave() {
          const o = aP((a) => w(a.operationId), s);
          Object.entries(o).forEach(([a, c]) => {
            Array.isArray(c) && (c.length <= 1 || c.forEach((u, f) => {
              const l = `${a}${f + 1}`;
              u.operationId = new r.elements.String(l);
            }));
          }), i.forEach((a) => {
            if (typeof a.operationId > "u")
              return;
            const c = String(w(a.operationId)), u = s.find((f) => w(f.meta.get("originalOperationId")) === c);
            typeof u > "u" || (a.operationId = A.safe(u.operationId), a.meta.set("originalOperationId", c), a.set("__originalOperationId", c));
          }), s.length = 0, i.length = 0;
        }
      },
      PathItemElement: {
        enter(o) {
          const a = Or("path", w(o.meta.get("path")));
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
          const a = String(w(o.operationId)), c = pa(n), u = Or("method", w(o.meta.get("http-method"))), f = t(a, c, u);
          a !== f && (o.operationId = new r.elements.String(f), o.set("__originalOperationId", a), o.meta.set("originalOperationId", a), s.push(o));
        }
      },
      LinkElement: {
        leave(o) {
          e.isLinkElement(o) && (typeof o.operationId > "u" || i.push(o));
        }
      }
    }
  };
}, b8 = () => ({
  predicates: t
}) => ({
  visitor: {
    ParameterElement: {
      leave(e, r, n, s, i) {
        var o, a;
        if (!i.some(t.isComponentsElement) && !(typeof e.schema > "u" || !t.isSchemaElement(e.schema)) && !(typeof ((o = e.schema) === null || o === void 0 ? void 0 : o.example) > "u" && typeof ((a = e.schema) === null || a === void 0 ? void 0 : a.examples) > "u")) {
          if (typeof e.examples < "u" && t.isObjectElement(e.examples)) {
            const c = e.examples.map((u) => A.safe(u.value));
            typeof e.schema.examples < "u" && e.schema.set("examples", c), typeof e.schema.example < "u" && e.schema.set("example", c);
            return;
          }
          typeof e.example < "u" && (typeof e.schema.examples < "u" && e.schema.set("examples", [A(e.example)]), typeof e.schema.example < "u" && e.schema.set("example", A(e.example)));
        }
      }
    }
  }
}), $8 = () => ({
  predicates: t
}) => ({
  visitor: {
    HeaderElement: {
      leave(e, r, n, s, i) {
        var o, a;
        if (!i.some(t.isComponentsElement) && !(typeof e.schema > "u" || !t.isSchemaElement(e.schema)) && !(typeof ((o = e.schema) === null || o === void 0 ? void 0 : o.example) > "u" && typeof ((a = e.schema) === null || a === void 0 ? void 0 : a.examples) > "u")) {
          if (typeof e.examples < "u" && t.isObjectElement(e.examples)) {
            const c = e.examples.map((u) => A.safe(u.value));
            typeof e.schema.examples < "u" && e.schema.set("examples", c), typeof e.schema.example < "u" && e.schema.set("example", c);
            return;
          }
          typeof e.example < "u" && (typeof e.schema.examples < "u" && e.schema.set("examples", [A(e.example)]), typeof e.schema.example < "u" && e.schema.set("example", A(e.example)));
        }
      }
    }
  }
}), x8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof tc || t(n) && e("callback", n) && r("object", n)), w8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof rc || t(n) && e("components", n) && r("object", n)), S8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof nc || t(n) && e("contact", n) && r("object", n)), O8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof sc || t(n) && e("example", n) && r("object", n)), E8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ic || t(n) && e("externalDocumentation", n) && r("object", n)), A8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof oc || t(n) && e("header", n) && r("object", n)), P8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof ac || t(n) && e("info", n) && r("object", n)), x$ = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Pr || t(n) && e("jsonSchemaDialect", n) && r("string", n)), j8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof cc || t(n) && e("license", n) && r("object", n)), _8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof uc || t(n) && e("link", n) && r("object", n)), T8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Lp || t(n) && e("openapi", n) && r("string", n)), qp = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r,
  hasClass: n
}) => (s) => s instanceof fr || t(s) && e("openApi3_1", s) && r("object", s) && n("api", s)), w$ = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof si || t(n) && e("operation", n) && r("object", n)), R8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof fc || t(n) && e("parameter", n) && r("object", n)), $c = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gt || t(n) && e("pathItem", n) && r("object", n)), S$ = (t) => {
  if (!$c(t) || !H(t.$ref))
    return !1;
  const e = w(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, I8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof pc || t(n) && e("paths", n) && r("object", n)), Vn = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof xt || t(n) && e("reference", n) && r("object", n)), O$ = (t) => {
  if (!Vn(t) || !H(t.$ref))
    return !1;
  const e = w(t.$ref);
  return typeof e == "string" && e.length > 0 && !e.startsWith("#");
}, C8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof hc || t(n) && e("requestBody", n) && r("object", n)), M8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof dc || t(n) && e("response", n) && r("object", n)), F8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof mc || t(n) && e("responses", n) && r("object", n)), Dn = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof Ft || t(n) && e("schema", n) && r("object", n)), Hp = (t) => Cs(t) && t.classes.includes("boolean-json-schema"), V8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof yc || t(n) && e("securityRequirement", n) && r("object", n)), D8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof vc || t(n) && e("server", n) && r("object", n)), N8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof gc || t(n) && e("serverVariable", n) && r("object", n)), L8 = R(({
  hasBasicElementProps: t,
  isElementType: e,
  primitiveEq: r
}) => (n) => n instanceof lc || t(n) && e("mediaType", n) && r("object", n)), k8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: Hp,
  isCallbackElement: x8,
  isComponentsElement: w8,
  isContactElement: S8,
  isExampleElement: O8,
  isExternalDocumentationElement: E8,
  isHeaderElement: A8,
  isInfoElement: P8,
  isJsonSchemaDialectElement: x$,
  isLicenseElement: j8,
  isLinkElement: _8,
  isMediaTypeElement: L8,
  isOpenApi3_1Element: qp,
  isOpenapiElement: T8,
  isOperationElement: w$,
  isParameterElement: R8,
  isPathItemElement: $c,
  isPathItemElementExternal: S$,
  isPathsElement: I8,
  isReferenceElement: Vn,
  isReferenceElementExternal: O$,
  isRequestBodyElement: C8,
  isResponseElement: M8,
  isResponsesElement: F8,
  isSchemaElement: Dn,
  isSecurityRequirementElement: V8,
  isServerElement: D8,
  isServerVariableElement: N8
}, Symbol.toStringTag, { value: "Module" })), U8 = () => {
  const t = jn(bc);
  return {
    predicates: {
      ...k8,
      isElement: Te,
      isStringElement: H,
      isArrayElement: et,
      isObjectElement: ee,
      isMemberElement: We,
      isServersElement: b$,
      includesClasses: Qn
    },
    namespace: t
  };
}, E$ = U8;
class B8 extends _(J, O) {
  constructor(e) {
    super(e), this.element = new fr(), this.specPath = D(["document", "objects", "OpenApi"]), this.canSupportSpecificationExtensions = !0, this.openApiSemanticElement = this.element;
  }
  ObjectElement(e) {
    return this.openApiGenericElement = e, J.prototype.ObjectElement.call(this, e);
  }
}
const q8 = B8, {
  visitors: {
    document: {
      objects: {
        Info: {
          $visitor: H8
        }
      }
    }
  }
} = g;
class G8 extends H8 {
  constructor(e) {
    super(e), this.element = new ac();
  }
}
const J8 = G8, {
  visitors: {
    document: {
      objects: {
        Contact: {
          $visitor: z8
        }
      }
    }
  }
} = g;
class K8 extends z8 {
  constructor(e) {
    super(e), this.element = new nc();
  }
}
const W8 = K8, {
  visitors: {
    document: {
      objects: {
        License: {
          $visitor: Y8
        }
      }
    }
  }
} = g;
class X8 extends Y8 {
  constructor(e) {
    super(e), this.element = new cc();
  }
}
const Q8 = X8, {
  visitors: {
    document: {
      objects: {
        Link: {
          $visitor: Z8
        }
      }
    }
  }
} = g;
class e6 extends Z8 {
  constructor(e) {
    super(e), this.element = new uc();
  }
}
const t6 = e6;
class r6 extends _(qe, O) {
  StringElement(e) {
    const r = new Pr(w(e));
    return this.copyMetaAndAttributes(e, r), this.element = r, K;
  }
}
const n6 = r6, {
  visitors: {
    document: {
      objects: {
        Server: {
          $visitor: s6
        }
      }
    }
  }
} = g;
class i6 extends s6 {
  constructor(e) {
    super(e), this.element = new vc();
  }
}
const o6 = i6, {
  visitors: {
    document: {
      objects: {
        ServerVariable: {
          $visitor: a6
        }
      }
    }
  }
} = g;
class c6 extends a6 {
  constructor(e) {
    super(e), this.element = new gc();
  }
}
const u6 = c6, {
  visitors: {
    document: {
      objects: {
        MediaType: {
          $visitor: l6
        }
      }
    }
  }
} = g;
class f6 extends l6 {
  constructor(e) {
    super(e), this.element = new lc();
  }
}
const p6 = f6, {
  visitors: {
    document: {
      objects: {
        SecurityRequirement: {
          $visitor: h6
        }
      }
    }
  }
} = g;
class d6 extends h6 {
  constructor(e) {
    super(e), this.element = new yc();
  }
}
const m6 = d6, {
  visitors: {
    document: {
      objects: {
        Components: {
          $visitor: y6
        }
      }
    }
  }
} = g;
class v6 extends y6 {
  constructor(e) {
    super(e), this.element = new rc();
  }
}
const g6 = v6, {
  visitors: {
    document: {
      objects: {
        Tag: {
          $visitor: b6
        }
      }
    }
  }
} = g;
class $6 extends b6 {
  constructor(e) {
    super(e), this.element = new Up();
  }
}
const x6 = $6, {
  visitors: {
    document: {
      objects: {
        Reference: {
          $visitor: w6
        }
      }
    }
  }
} = g;
class S6 extends w6 {
  constructor(e) {
    super(e), this.element = new xt();
  }
}
const O6 = S6, {
  visitors: {
    document: {
      objects: {
        Parameter: {
          $visitor: E6
        }
      }
    }
  }
} = g;
class A6 extends E6 {
  constructor(e) {
    super(e), this.element = new fc();
  }
}
const P6 = A6, {
  visitors: {
    document: {
      objects: {
        Header: {
          $visitor: j6
        }
      }
    }
  }
} = g;
class _6 extends j6 {
  constructor(e) {
    super(e), this.element = new oc();
  }
}
const T6 = _6;
class Wt {
  constructor({
    parent: e
  }) {
    E(this, "parent");
    this.parent = e;
  }
}
class R6 extends _(J, Wt, O) {
  constructor(e) {
    super(e), this.element = new Ft(), this.specPath = D(["document", "objects", "Schema"]), this.canSupportSpecificationExtensions = !0, this.jsonSchemaDefaultDialect = Pr.default, this.passingOptionsNames.push("parent");
  }
  ObjectElement(e) {
    this.handle$schema(e), this.handle$id(e), this.parent = this.element;
    const r = J.prototype.ObjectElement.call(this, e);
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
    x$(this.openApiSemanticElement.jsonSchemaDialect) ? e = w(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== void 0 && H(this.openApiGenericElement.get("jsonSchemaDialect")) ? e = w(this.openApiGenericElement.get("jsonSchemaDialect")) : e = w(this.jsonSchemaDefaultDialect), e;
  }
  handle$schema(e) {
    if (Lt(this.parent) && !H(e.get("$schema")))
      this.element.setMetaProperty("inherited$schema", this.getJsonSchemaDialect());
    else if (Dn(this.parent) && !H(e.get("$schema"))) {
      const r = Or(w(this.parent.meta.get("inherited$schema")), w(this.parent.$schema));
      this.element.setMetaProperty("inherited$schema", r);
    }
  }
  handle$id(e) {
    const r = this.parent !== void 0 ? A(this.parent.getMetaProperty("inherited$id", [])) : new ie(), n = w(e.get("$id"));
    Ff(n) && r.push(n), this.element.setMetaProperty("inherited$id", r);
  }
}
const I6 = R6;
class C6 extends O {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-$vocabulary"), r;
  }
}
const M6 = C6;
class F6 extends O {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("reference-value"), r;
  }
}
const V6 = F6;
class D6 extends _(B, Wt, O) {
  constructor(e) {
    super(e), this.element = new j(), this.element.classes.push("json-schema-$defs"), this.specPath = D(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const N6 = D6;
let L6 = class extends _(qe, Wt, O) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-allOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (ee(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = A(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), K;
  }
};
const k6 = L6;
class U6 extends _(qe, Wt, O) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-anyOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (ee(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = A(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), K;
  }
}
const B6 = U6;
class q6 extends _(qe, Wt, O) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-oneOf"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (ee(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = A(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), K;
  }
}
const H6 = q6;
class G6 extends _(B, Wt, O) {
  constructor(e) {
    super(e), this.element = new j(), this.element.classes.push("json-schema-dependentSchemas"), this.specPath = D(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const J6 = G6;
class z6 extends _(qe, Wt, O) {
  constructor(e) {
    super(e), this.element = new ie(), this.element.classes.push("json-schema-prefixItems"), this.passingOptionsNames.push("parent");
  }
  ArrayElement(e) {
    return e.forEach((r) => {
      if (ee(r)) {
        const n = this.toRefractedElement(["document", "objects", "Schema"], r);
        this.element.push(n);
      } else {
        const n = A(r);
        this.element.push(n);
      }
    }), this.copyMetaAndAttributes(e, this.element), K;
  }
}
const K6 = z6;
class W6 extends _(B, Wt, O) {
  constructor(e) {
    super(e), this.element = new j(), this.element.classes.push("json-schema-properties"), this.specPath = D(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const Y6 = W6;
class X6 extends _(B, Wt, O) {
  constructor(e) {
    super(e), this.element = new j(), this.element.classes.push("json-schema-patternProperties"), this.specPath = D(["document", "objects", "Schema"]), this.passingOptionsNames.push("parent");
  }
}
const Q6 = X6;
class Z6 extends O {
  StringElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-type"), r;
  }
}
const e4 = Z6;
class t4 extends O {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-enum"), r;
  }
}
const r4 = t4;
class n4 extends O {
  ObjectElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-dependentRequired"), r;
  }
}
const s4 = n4;
class i4 extends O {
  ArrayElement(e) {
    const r = super.enter(e);
    return this.element.classes.push("json-schema-examples"), r;
  }
}
const o4 = i4, {
  visitors: {
    document: {
      objects: {
        Discriminator: {
          $visitor: a4
        }
      }
    }
  }
} = g;
class c4 extends a4 {
  constructor(e) {
    super(e), this.element = new Fp(), this.canSupportSpecificationExtensions = !0;
  }
}
const u4 = c4, {
  visitors: {
    document: {
      objects: {
        XML: {
          $visitor: l4
        }
      }
    }
  }
} = g;
class f4 extends l4 {
  constructor(e) {
    super(e), this.element = new Bp();
  }
}
const p4 = f4;
class h4 extends _(B, O) {
  constructor(e) {
    super(e), this.element = new vo(), this.specPath = D(["document", "objects", "Schema"]);
  }
}
const d4 = h4;
class m4 extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Wl(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(Vn).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const y4 = m4, {
  visitors: {
    document: {
      objects: {
        Example: {
          $visitor: v4
        }
      }
    }
  }
} = g;
class g4 extends v4 {
  constructor(e) {
    super(e), this.element = new sc();
  }
}
const b4 = g4, {
  visitors: {
    document: {
      objects: {
        ExternalDocumentation: {
          $visitor: $4
        }
      }
    }
  }
} = g;
class x4 extends $4 {
  constructor(e) {
    super(e), this.element = new ic();
  }
}
const w4 = x4, {
  visitors: {
    document: {
      objects: {
        Encoding: {
          $visitor: S4
        }
      }
    }
  }
} = g;
class O4 extends S4 {
  constructor(e) {
    super(e), this.element = new Vp();
  }
}
const E4 = O4, {
  visitors: {
    document: {
      objects: {
        Paths: {
          $visitor: A4
        }
      }
    }
  }
} = g;
class P4 extends A4 {
  constructor(e) {
    super(e), this.element = new pc();
  }
}
const j4 = P4, {
  visitors: {
    document: {
      objects: {
        RequestBody: {
          $visitor: _4
        }
      }
    }
  }
} = g;
class T4 extends _4 {
  constructor(e) {
    super(e), this.element = new hc();
  }
}
const R4 = T4, {
  visitors: {
    document: {
      objects: {
        Callback: {
          $visitor: km
        }
      }
    }
  }
} = g;
class I4 extends km {
  constructor(e) {
    super(e), this.element = new tc(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = km.prototype.ObjectElement.call(this, e);
    return this.element.filter(Vn).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), r;
  }
}
const C4 = I4, {
  visitors: {
    document: {
      objects: {
        Response: {
          $visitor: M4
        }
      }
    }
  }
} = g;
class F4 extends M4 {
  constructor(e) {
    super(e), this.element = new dc();
  }
}
const V4 = F4, {
  visitors: {
    document: {
      objects: {
        Responses: {
          $visitor: D4
        }
      }
    }
  }
} = g;
class N4 extends D4 {
  constructor(e) {
    super(e), this.element = new mc();
  }
}
const L4 = N4, {
  visitors: {
    document: {
      objects: {
        Operation: {
          $visitor: k4
        }
      }
    }
  }
} = g;
class U4 extends k4 {
  constructor(e) {
    super(e), this.element = new si();
  }
}
const B4 = U4, {
  visitors: {
    document: {
      objects: {
        PathItem: {
          $visitor: q4
        }
      }
    }
  }
} = g;
class H4 extends q4 {
  constructor(e) {
    super(e), this.element = new gt();
  }
}
const G4 = H4, {
  visitors: {
    document: {
      objects: {
        SecurityScheme: {
          $visitor: J4
        }
      }
    }
  }
} = g;
class z4 extends J4 {
  constructor(e) {
    super(e), this.element = new kp();
  }
}
const K4 = z4, {
  visitors: {
    document: {
      objects: {
        OAuthFlows: {
          $visitor: W4
        }
      }
    }
  }
} = g;
class Y4 extends W4 {
  constructor(e) {
    super(e), this.element = new Np();
  }
}
const X4 = Y4, {
  visitors: {
    document: {
      objects: {
        OAuthFlow: {
          $visitor: Q4
        }
      }
    }
  }
} = g;
class Z4 extends Q4 {
  constructor(e) {
    super(e), this.element = new Dp();
  }
}
const eK = Z4;
class tK extends _(B, O) {
  constructor(e) {
    super(e), this.element = new Yl(), this.specPath = (r) => oe(r) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"];
  }
  ObjectElement(e) {
    const r = B.prototype.ObjectElement.call(this, e);
    return this.element.filter(Vn).forEach((n) => {
      n.setMetaProperty("referenced-element", "pathItem");
    }), this.element.filter($c).forEach((n, s) => {
      n.setMetaProperty("webhook-name", w(s));
    }), r;
  }
}
const rK = tK, nK = {
  visitors: {
    value: g.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: q8,
          fixedFields: {
            openapi: g.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: n6,
            servers: g.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: rK,
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: g.visitors.document.objects.OpenApi.fixedFields.security,
            tags: g.visitors.document.objects.OpenApi.fixedFields.tags,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: J8,
          fixedFields: {
            title: g.visitors.document.objects.Info.fixedFields.title,
            description: g.visitors.document.objects.Info.fixedFields.description,
            summary: {
              $ref: "#/visitors/value"
            },
            termsOfService: g.visitors.document.objects.Info.fixedFields.termsOfService,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: g.visitors.document.objects.Info.fixedFields.version
          }
        },
        Contact: {
          $visitor: W8,
          fixedFields: {
            name: g.visitors.document.objects.Contact.fixedFields.name,
            url: g.visitors.document.objects.Contact.fixedFields.url,
            email: g.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: Q8,
          fixedFields: {
            name: g.visitors.document.objects.License.fixedFields.name,
            identifier: {
              $ref: "#/visitors/value"
            },
            url: g.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: o6,
          fixedFields: {
            url: g.visitors.document.objects.Server.fixedFields.url,
            description: g.visitors.document.objects.Server.fixedFields.description,
            variables: g.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: u6,
          fixedFields: {
            enum: g.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: g.visitors.document.objects.ServerVariable.fixedFields.default,
            description: g.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: g6,
          fixedFields: {
            schemas: d4,
            responses: g.visitors.document.objects.Components.fixedFields.responses,
            parameters: g.visitors.document.objects.Components.fixedFields.parameters,
            examples: g.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: g.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: g.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: g.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: g.visitors.document.objects.Components.fixedFields.links,
            callbacks: g.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: y4
          }
        },
        Paths: {
          $visitor: j4
        },
        PathItem: {
          $visitor: G4,
          fixedFields: {
            $ref: g.visitors.document.objects.PathItem.fixedFields.$ref,
            summary: g.visitors.document.objects.PathItem.fixedFields.summary,
            description: g.visitors.document.objects.PathItem.fixedFields.description,
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
            servers: g.visitors.document.objects.PathItem.fixedFields.servers,
            parameters: g.visitors.document.objects.PathItem.fixedFields.parameters
          }
        },
        Operation: {
          $visitor: B4,
          fixedFields: {
            tags: g.visitors.document.objects.Operation.fixedFields.tags,
            summary: g.visitors.document.objects.Operation.fixedFields.summary,
            description: g.visitors.document.objects.Operation.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: g.visitors.document.objects.Operation.fixedFields.operationId,
            parameters: g.visitors.document.objects.Operation.fixedFields.parameters,
            requestBody: g.visitors.document.objects.Operation.fixedFields.requestBody,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: g.visitors.document.objects.Operation.fixedFields.callbacks,
            deprecated: g.visitors.document.objects.Operation.fixedFields.deprecated,
            security: g.visitors.document.objects.Operation.fixedFields.security,
            servers: g.visitors.document.objects.Operation.fixedFields.servers
          }
        },
        ExternalDocumentation: {
          $visitor: w4,
          fixedFields: {
            description: g.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: g.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: P6,
          fixedFields: {
            name: g.visitors.document.objects.Parameter.fixedFields.name,
            in: g.visitors.document.objects.Parameter.fixedFields.in,
            description: g.visitors.document.objects.Parameter.fixedFields.description,
            required: g.visitors.document.objects.Parameter.fixedFields.required,
            deprecated: g.visitors.document.objects.Parameter.fixedFields.deprecated,
            allowEmptyValue: g.visitors.document.objects.Parameter.fixedFields.allowEmptyValue,
            style: g.visitors.document.objects.Parameter.fixedFields.style,
            explode: g.visitors.document.objects.Parameter.fixedFields.explode,
            allowReserved: g.visitors.document.objects.Parameter.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: g.visitors.document.objects.Parameter.fixedFields.example,
            examples: g.visitors.document.objects.Parameter.fixedFields.examples,
            content: g.visitors.document.objects.Parameter.fixedFields.content
          }
        },
        RequestBody: {
          $visitor: R4,
          fixedFields: {
            description: g.visitors.document.objects.RequestBody.fixedFields.description,
            content: g.visitors.document.objects.RequestBody.fixedFields.content,
            required: g.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: p6,
          fixedFields: {
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: g.visitors.document.objects.MediaType.fixedFields.example,
            examples: g.visitors.document.objects.MediaType.fixedFields.examples,
            encoding: g.visitors.document.objects.MediaType.fixedFields.encoding
          }
        },
        Encoding: {
          $visitor: E4,
          fixedFields: {
            contentType: g.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: g.visitors.document.objects.Encoding.fixedFields.headers,
            style: g.visitors.document.objects.Encoding.fixedFields.style,
            explode: g.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: g.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: L4,
          fixedFields: {
            default: g.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: V4,
          fixedFields: {
            description: g.visitors.document.objects.Response.fixedFields.description,
            headers: g.visitors.document.objects.Response.fixedFields.headers,
            content: g.visitors.document.objects.Response.fixedFields.content,
            links: g.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: C4
        },
        Example: {
          $visitor: b4,
          fixedFields: {
            summary: g.visitors.document.objects.Example.fixedFields.summary,
            description: g.visitors.document.objects.Example.fixedFields.description,
            value: g.visitors.document.objects.Example.fixedFields.value,
            externalValue: g.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: t6,
          fixedFields: {
            operationRef: g.visitors.document.objects.Link.fixedFields.operationRef,
            operationId: g.visitors.document.objects.Link.fixedFields.operationId,
            parameters: g.visitors.document.objects.Link.fixedFields.parameters,
            requestBody: g.visitors.document.objects.Link.fixedFields.requestBody,
            description: g.visitors.document.objects.Link.fixedFields.description,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: T6,
          fixedFields: {
            description: g.visitors.document.objects.Header.fixedFields.description,
            required: g.visitors.document.objects.Header.fixedFields.required,
            deprecated: g.visitors.document.objects.Header.fixedFields.deprecated,
            allowEmptyValue: g.visitors.document.objects.Header.fixedFields.allowEmptyValue,
            style: g.visitors.document.objects.Header.fixedFields.style,
            explode: g.visitors.document.objects.Header.fixedFields.explode,
            allowReserved: g.visitors.document.objects.Header.fixedFields.allowReserved,
            schema: {
              $ref: "#/visitors/document/objects/Schema"
            },
            example: g.visitors.document.objects.Header.fixedFields.example,
            examples: g.visitors.document.objects.Header.fixedFields.examples,
            content: g.visitors.document.objects.Header.fixedFields.content
          }
        },
        Tag: {
          $visitor: x6,
          fixedFields: {
            name: g.visitors.document.objects.Tag.fixedFields.name,
            description: g.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: O6,
          fixedFields: {
            $ref: g.visitors.document.objects.Reference.fixedFields.$ref,
            summary: {
              $ref: "#/visitors/value"
            },
            description: {
              $ref: "#/visitors/value"
            }
          }
        },
        Schema: {
          $visitor: I6,
          fixedFields: {
            // core vocabulary
            $schema: {
              $ref: "#/visitors/value"
            },
            $vocabulary: M6,
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
            $ref: V6,
            $defs: N6,
            $comment: {
              $ref: "#/visitors/value"
            },
            // applicator vocabulary
            allOf: k6,
            anyOf: B6,
            oneOf: H6,
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
            prefixItems: K6,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: Y6,
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
            type: e4,
            enum: r4,
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
            dependentRequired: s4,
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
            examples: o4,
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
          $visitor: u4,
          fixedFields: {
            propertyName: g.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: g.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: p4,
          fixedFields: {
            name: g.visitors.document.objects.XML.fixedFields.name,
            namespace: g.visitors.document.objects.XML.fixedFields.namespace,
            prefix: g.visitors.document.objects.XML.fixedFields.prefix,
            attribute: g.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: g.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: K4,
          fixedFields: {
            type: g.visitors.document.objects.SecurityScheme.fixedFields.type,
            description: g.visitors.document.objects.SecurityScheme.fixedFields.description,
            name: g.visitors.document.objects.SecurityScheme.fixedFields.name,
            in: g.visitors.document.objects.SecurityScheme.fixedFields.in,
            scheme: g.visitors.document.objects.SecurityScheme.fixedFields.scheme,
            bearerFormat: g.visitors.document.objects.SecurityScheme.fixedFields.bearerFormat,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: g.visitors.document.objects.SecurityScheme.fixedFields.openIdConnectUrl
          }
        },
        OAuthFlows: {
          $visitor: X4,
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
          $visitor: eK,
          fixedFields: {
            authorizationUrl: g.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: g.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: g.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: g.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: m6
        }
      },
      extension: {
        $visitor: g.visitors.document.extension.$visitor
      }
    }
  }
}, sK = nK, iK = (t, {
  specPath: e = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = mp(t), s = Ia(sK), i = Ue(e, s), o = new i({
    specObj: s
  });
  return Ie(n, o), Ms(o.element, r, {
    toolboxCreator: E$,
    visitorOptions: {
      keyMap: Ge,
      nodeTypeGetter: Be
    }
  });
}, Z = (t) => (e, r = {}) => iK(e, {
  specPath: t,
  ...r
});
tc.refract = Z(["visitors", "document", "objects", "Callback", "$visitor"]);
rc.refract = Z(["visitors", "document", "objects", "Components", "$visitor"]);
nc.refract = Z(["visitors", "document", "objects", "Contact", "$visitor"]);
sc.refract = Z(["visitors", "document", "objects", "Example", "$visitor"]);
Fp.refract = Z(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Vp.refract = Z(["visitors", "document", "objects", "Encoding", "$visitor"]);
ic.refract = Z(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
oc.refract = Z(["visitors", "document", "objects", "Header", "$visitor"]);
ac.refract = Z(["visitors", "document", "objects", "Info", "$visitor"]);
Pr.refract = Z(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
cc.refract = Z(["visitors", "document", "objects", "License", "$visitor"]);
uc.refract = Z(["visitors", "document", "objects", "Link", "$visitor"]);
lc.refract = Z(["visitors", "document", "objects", "MediaType", "$visitor"]);
Dp.refract = Z(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Np.refract = Z(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Lp.refract = Z(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
fr.refract = Z(["visitors", "document", "objects", "OpenApi", "$visitor"]);
si.refract = Z(["visitors", "document", "objects", "Operation", "$visitor"]);
fc.refract = Z(["visitors", "document", "objects", "Parameter", "$visitor"]);
gt.refract = Z(["visitors", "document", "objects", "PathItem", "$visitor"]);
pc.refract = Z(["visitors", "document", "objects", "Paths", "$visitor"]);
xt.refract = Z(["visitors", "document", "objects", "Reference", "$visitor"]);
hc.refract = Z(["visitors", "document", "objects", "RequestBody", "$visitor"]);
dc.refract = Z(["visitors", "document", "objects", "Response", "$visitor"]);
mc.refract = Z(["visitors", "document", "objects", "Responses", "$visitor"]);
Ft.refract = Z(["visitors", "document", "objects", "Schema", "$visitor"]);
yc.refract = Z(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
kp.refract = Z(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
vc.refract = Z(["visitors", "document", "objects", "Server", "$visitor"]);
gc.refract = Z(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Up.refract = Z(["visitors", "document", "objects", "Tag", "$visitor"]);
Bp.refract = Z(["visitors", "document", "objects", "XML", "$visitor"]);
const oK = z(Fs, {
  props: {
    name: "binary"
  },
  methods: {
    async canParse(t) {
      return this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(t.extension);
    },
    async parse(t) {
      try {
        const e = unescape(encodeURIComponent(t.toString())), r = btoa(e), n = new ct();
        if (r.length !== 0) {
          const s = new It(r);
          s.classes.push("result"), n.push(s);
        }
        return n;
      } catch (e) {
        throw new Mt(`Error parsing "${t.uri}"`, {
          cause: e
        });
      }
    }
  }
}), ii = (t) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(t), sr = (t) => {
  const e = Lf(t);
  return Vf("#", e);
}, aK = (t) => {
  if (!ii(t))
    throw new uB(t);
  return t;
}, xc = (t, e) => {
  const r = aK(t), n = kb((s) => Dn(s) && w(s.$anchor) === r, e);
  if (Lt(n))
    throw new iB(`Evaluation failed on token: "${r}"`);
  return n;
}, wo = (t, e) => {
  if (typeof e.$ref > "u")
    return;
  const r = Lf(w(e.$ref)), n = w(e.meta.get("inherited$id"));
  return `${_r((i, o) => we(i, bn(de(o))), t, [...n, w(e.$ref)])}${r === "#" ? "" : r}`;
}, cK = (t, e) => {
  if (typeof e.$id > "u")
    return;
  const r = w(e.meta.get("inherited$id"));
  return _r((n, s) => we(n, bn(de(s))), t, [...r, w(e.$id)]);
}, Zn = (t) => {
  if (Zn.cache.has(t))
    return Zn.cache.get(t);
  const e = Ft.refract(t);
  return Zn.cache.set(t, e), e;
};
Zn.cache = /* @__PURE__ */ new WeakMap();
const Ze = (t) => _t(t) ? Zn(t) : t, oi = (t, e) => {
  const {
    cache: r
  } = oi, n = de(t), s = (c) => Dn(c) && typeof c.$id < "u";
  if (!r.has(e)) {
    const c = MU(s, e);
    r.set(e, Array.from(c));
  }
  const i = r.get(e).find((c) => cK(n, c) === n);
  if (Lt(i))
    throw new fs(`Evaluation failed on URI: "${t}"`);
  let o, a;
  return ii(sr(t)) ? (o = xc, a = sr(t)) : (o = ke, a = Me(t)), o(a, i);
};
oi.cache = /* @__PURE__ */ new WeakMap();
const mu = Ie[Symbol.for("nodejs.util.promisify.custom")], Ti = z({
  props: {
    indirections: [],
    namespace: null,
    reference: null,
    crawledElements: null,
    crawlingMap: null,
    visited: null,
    options: null
  },
  init({
    reference: t,
    namespace: e,
    indirections: r = [],
    visited: n = /* @__PURE__ */ new WeakSet(),
    options: s
  }) {
    this.indirections = r, this.namespace = e, this.reference = t, this.crawledElements = [], this.crawlingMap = {}, this.visited = n, this.options = s;
  },
  methods: {
    toBaseURI(t) {
      return we(this.reference.uri, bn(de(t)));
    },
    async toReference(t) {
      if (this.reference.depth >= this.options.resolve.maxDepth)
        throw new Jb(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
      const e = this.toBaseURI(t), {
        refSet: r
      } = this.reference;
      if (r.has(e))
        return r.find(da(e, "uri"));
      const n = await zg(be(e), {
        ...this.options,
        parse: {
          ...this.options.parse,
          mediaType: "text/plain"
        }
      }), s = Rn({
        uri: e,
        value: n,
        depth: this.reference.depth + 1
      });
      return r.add(s), s;
    },
    ReferenceElement(t) {
      const e = w(t.$ref), r = this.toBaseURI(e);
      if (!this.options.resolve.external && de(this.reference.uri) !== r)
        return !1;
      yr(r, this.crawlingMap) || (this.crawlingMap[r] = this.toReference(e)), this.crawledElements.push(t);
    },
    PathItemElement(t) {
      if (!H(t.$ref))
        return;
      const e = w(t.$ref), r = this.toBaseURI(e);
      !this.options.resolve.external && de(this.reference.uri) !== r || (yr(r, this.crawlingMap) || (this.crawlingMap[r] = this.toReference(e)), this.crawledElements.push(t));
    },
    LinkElement(t) {
      if (!H(t.operationRef) && !H(t.operationId))
        return;
      const e = w(t.operationRef), r = this.toBaseURI(e), n = de(this.reference.uri) !== r;
      if (!(!this.options.resolve.external && n)) {
        if (H(t.operationRef) && H(t.operationId))
          throw new ye("LinkElement operationRef and operationId are mutually exclusive.");
        n && (yr(r, this.crawlingMap) || (this.crawlingMap[r] = this.toReference(e)));
      }
    },
    ExampleElement(t) {
      if (!H(t.externalValue))
        return;
      if (t.hasKey("value") && H(t.externalValue))
        throw new ye("ExampleElement value and externalValue fields are mutually exclusive.");
      const e = w(t.externalValue), r = this.toBaseURI(e);
      !this.options.resolve.external && de(this.reference.uri) !== r || yr(r, this.crawlingMap) || (this.crawlingMap[r] = this.toReference(e));
    },
    async SchemaElement(t) {
      if (this.visited.has(t))
        return !1;
      if (!H(t.$ref)) {
        this.visited.add(t);
        return;
      }
      const e = await this.toReference(be(this.reference.uri));
      let {
        uri: r
      } = e;
      const n = wo(r, t), s = de(n), i = Er({
        uri: s
      }), o = Hu((u) => u.canRead(i), this.options.resolve.resolvers), a = !o, c = (u) => de(this.reference.uri) !== u;
      if (!yr(s, this.crawlingMap))
        try {
          if (o || a)
            this.crawlingMap[s] = e;
          else {
            if (r = this.toBaseURI(w(n)), !this.options.resolve.external && c(r)) {
              this.visited.add(t);
              return;
            }
            this.crawlingMap[s] = this.toReference(be(n));
          }
        } catch (u) {
          if (a && u instanceof fs) {
            if (r = this.toBaseURI(be(n)), !this.options.resolve.external && c(r)) {
              this.visited.add(t);
              return;
            }
            this.crawlingMap[s] = this.toReference(be(n));
          } else
            throw u;
        }
      this.crawledElements.push(t);
    },
    async crawlReferenceElement(t) {
      const e = await this.toReference(w(t.$ref));
      this.indirections.push(t);
      const r = Me(w(t.$ref));
      let n = ke(r, e.value.result);
      if (_t(n)) {
        const i = w(t.meta.get("referenced-element"));
        oe(n) ? (n = xt.refract(n), n.setMetaProperty("referenced-element", i)) : n = this.namespace.getElementClass(i).refract(n);
      }
      if (this.indirections.includes(n))
        throw new ye("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Tt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const s = Ti({
        reference: e,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options
      });
      await mu(n, s, {
        keyMap: Ge,
        nodeTypeGetter: Be
      }), await s.crawl(), this.indirections.pop();
    },
    async crawlPathItemElement(t) {
      const e = await this.toReference(w(t.$ref));
      this.indirections.push(t);
      const r = Me(w(t.$ref));
      let n = ke(r, e.value.result);
      if (_t(n) && (n = gt.refract(n)), this.indirections.includes(n))
        throw new ye("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Tt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const s = Ti({
        reference: e,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options
      });
      await mu(n, s, {
        keyMap: Ge,
        nodeTypeGetter: Be
      }), await s.crawl(), this.indirections.pop();
    },
    async crawlSchemaElement(t) {
      let e = await this.toReference(be(this.reference.uri)), {
        uri: r
      } = e;
      const n = wo(r, t), s = de(n), i = Er({
        uri: s
      }), o = Hu((l) => l.canRead(i), this.options.resolve.resolvers), a = !o, c = (l) => de(this.reference.uri) !== l;
      this.indirections.push(t);
      let u;
      try {
        if (o || a)
          u = oi(
            n,
            // @ts-ignore
            Ze(e.value.result)
          );
        else {
          if (r = this.toBaseURI(w(n)), !this.options.resolve.external && c(r))
            return;
          e = await this.toReference(be(n));
          const l = Me(n);
          u = Ze(
            // @ts-ignore
            ke(l, e.value.result)
          );
        }
      } catch (l) {
        if (a && l instanceof fs)
          if (ii(sr(n))) {
            if (r = this.toBaseURI(w(n)), !this.options.resolve.external && c(r))
              return;
            e = await this.toReference(be(n));
            const h = sr(n);
            u = xc(
              h,
              // @ts-ignore
              Ze(e.value.result)
            );
          } else {
            if (r = this.toBaseURI(w(n)), !this.options.resolve.external && c(r))
              return;
            e = await this.toReference(be(n));
            const h = Me(n);
            u = Ze(
              // @ts-ignore
              ke(h, e.value.result)
            );
          }
        else
          throw l;
      }
      if (this.visited.add(t), this.indirections.includes(u))
        throw new ye("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Tt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const f = Ti({
        reference: e,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        visited: this.visited
      });
      await mu(u, f, {
        keyMap: Ge,
        nodeTypeGetter: Be
      }), await f.crawl(), this.indirections.pop();
    },
    async crawl() {
      await Ae(wA, g1)(this.crawlingMap), this.crawlingMap = null;
      for (const t of this.crawledElements)
        Vn(t) ? await this.crawlReferenceElement(t) : Dn(t) ? await this.crawlSchemaElement(t) : $c(t) && await this.crawlPathItemElement(t);
    }
  }
}), uK = Ie[Symbol.for("nodejs.util.promisify.custom")], lK = z(eB, {
  init() {
    this.name = "openapi-3-1";
  },
  methods: {
    canResolve(t) {
      var e;
      return t.mediaType !== "text/plain" ? Ar.includes(t.mediaType) : qp((e = t.parseResult) === null || e === void 0 ? void 0 : e.result);
    },
    async resolve(t, e) {
      const r = jn(bc), n = Rn({
        uri: t.uri,
        value: t.parseResult
      }), s = Ti({
        reference: n,
        namespace: r,
        options: e
      }), i = Ca();
      return i.add(n), await uK(i.rootRef.value, s, {
        keyMap: Ge,
        nodeTypeGetter: Be
      }), await s.crawl(), i;
    }
  }
}), A$ = (t) => {
  if (!ee(t) || t.hasKey("$$normalized"))
    return t;
  const e = [g8({
    operationIdNormalizer: (n, s, i) => Vs({
      operationId: n
    }, s, i, {
      v2OperationIdCompatibilityMode: !1
    })
  }), h8(), d8(), m8(), b8(), $8()], r = Ms(t, e, {
    toolboxCreator: E$,
    visitorOptions: {
      keyMap: Ge,
      nodeTypeGetter: Be
    }
  });
  return r.set("$$normalized", !0), r;
}, es = (t) => (e) => {
  if (e != null && e.$$normalized)
    return e;
  if (es.cache.has(e))
    return es.cache.get(e);
  const r = fr.refract(e), n = t(r), s = w(n);
  return es.cache.set(e, s), s;
};
es.cache = /* @__PURE__ */ new WeakMap();
const {
  AbortController: fK,
  AbortSignal: pK
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = fK);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = pK);
const P$ = QU.compose({
  props: {
    name: "http-swagger-client",
    swaggerHTTPClient: vs,
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
          userFetch: async (u, f) => {
            let l = await fetch(u, f);
            try {
              l.headers.delete("Content-Type");
            } catch {
              l = new Response(l.body, {
                ...l,
                headers: new Headers(l.headers)
              }), l.headers.delete("Content-Type");
            }
            return l;
          },
          credentials: i,
          redirect: o,
          follow: a,
          ...this.swaggerHTTPClientConfig
        })).text.arrayBuffer();
      } catch (c) {
        throw new Gg(`Error downloading "${t.uri}"`, {
          cause: c
        });
      } finally {
        clearTimeout(s);
      }
    }
  }
}), j$ = Fs.compose({
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
        throw new Mt("json-swagger-client parser plugin doesn't support sourceMaps option");
      const e = new ct(), r = t.toString();
      if (this.allowEmpty && r.trim() === "")
        return e;
      try {
        const n = Hb(JSON.parse(r));
        return n.classes.push("result"), e.push(n), e;
      } catch (n) {
        throw new Mt(`Error parsing "${t.uri}"`, {
          cause: n
        });
      }
    }
  }
}), _$ = Fs.compose({
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
          return an.load(t.toString(), {
            schema: qi
          }), !0;
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(t) {
      if (this.sourceMap)
        throw new Mt("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
      const e = new ct(), r = t.toString();
      try {
        const n = an.load(r, {
          schema: qi
        });
        if (this.allowEmpty && typeof n > "u")
          return e;
        const s = Hb(n);
        return s.classes.push("result"), e.push(s), e;
      } catch (n) {
        throw new Mt(`Error parsing "${t.uri}"`, {
          cause: n
        });
      }
    }
  }
}), T$ = Fs.compose({
  props: {
    name: "openapi-json-3-1-swagger-client",
    fileExtensions: [".json"],
    mediaTypes: new Tp(...Ar.filterByFormat("generic"), ...Ar.filterByFormat("json")),
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
        throw new Mt("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
      const e = new ct(), r = t.toString();
      if (this.allowEmpty && r.trim() === "")
        return e;
      try {
        const n = JSON.parse(r), s = fr.refract(n, this.refractorOpts);
        return s.classes.push("result"), e.push(s), e;
      } catch (n) {
        throw new Mt(`Error parsing "${t.uri}"`, {
          cause: n
        });
      }
    }
  }
}), R$ = Fs.compose({
  props: {
    name: "openapi-yaml-3-1-swagger-client",
    fileExtensions: [".yaml", ".yml"],
    mediaTypes: new Tp(...Ar.filterByFormat("generic"), ...Ar.filterByFormat("yaml")),
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
          return an.load(n), this.detectionRegExp.test(n);
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(t) {
      if (this.sourceMap)
        throw new Mt("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
      const e = new ct(), r = t.toString();
      try {
        const n = an.load(r, {
          schema: qi
        });
        if (this.allowEmpty && typeof n > "u")
          return e;
        const s = fr.refract(n, this.refractorOpts);
        return s.classes.push("result"), e.push(s), e;
      } catch (n) {
        throw new Mt(`Error parsing "${t.uri}"`, {
          cause: n
        });
      }
    }
  }
}), yu = Ie[Symbol.for("nodejs.util.promisify.custom")], Gn = wp(), vu = (t) => (e) => e.meta.hasKey("ref-referencing-element-id") && e.meta.get("ref-referencing-element-id").equals(w(Gn.identify(t))), tn = z({
  props: {
    indirections: null,
    namespace: null,
    reference: null,
    options: null,
    ancestors: null
  },
  init({
    indirections: t = [],
    reference: e,
    namespace: r,
    options: n,
    ancestors: s = new pu()
  }) {
    this.indirections = t, this.namespace = r, this.reference = e, this.options = n, this.ancestors = new pu(...s);
  },
  methods: {
    toBaseURI(t) {
      return we(this.reference.uri, bn(de(t)));
    },
    async toReference(t) {
      if (this.reference.depth >= this.options.resolve.maxDepth)
        throw new Jb(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
      const e = this.toBaseURI(t), {
        refSet: r
      } = this.reference;
      if (r.has(e))
        return r.find(da(e, "uri"));
      const n = await zg(be(e), {
        ...this.options,
        parse: {
          ...this.options.parse,
          mediaType: "text/plain"
        }
      }), s = Rn({
        uri: e,
        value: n,
        depth: this.reference.depth + 1
      });
      return r.add(s), s;
    },
    toAncestorLineage(t) {
      const e = new Set(t.filter(Te));
      return [new pu(...this.ancestors, e), e];
    },
    async ReferenceElement(t, e, r, n, s) {
      const [i, o] = this.toAncestorLineage([...s, r]);
      if (i.includesCycle(t))
        return !1;
      const a = this.toBaseURI(w(t.$ref));
      if (!this.options.resolve.external && de(this.reference.uri) !== a)
        return !1;
      const c = await this.toReference(w(t.$ref)), u = we(a, w(t.$ref));
      this.indirections.push(t);
      const f = Me(u);
      let l = ke(f, c.value.result);
      if (_t(l)) {
        const m = w(t.meta.get("referenced-element"));
        oe(l) ? (l = xt.refract(l), l.setMetaProperty("referenced-element", m)) : l = this.namespace.getElementClass(m).refract(l);
      }
      if (this.indirections.includes(l))
        throw new ye("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Tt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      o.add(t);
      const h = tn({
        reference: c,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: i
      });
      l = await yu(l, h, {
        keyMap: Ge,
        nodeTypeGetter: Be
      }), o.delete(t), this.indirections.pop();
      const p = (m) => {
        const y = Ne(m);
        return y.setMetaProperty("ref-fields", {
          $ref: w(t.$ref),
          // @ts-ignore
          description: w(t.description),
          // @ts-ignore
          summary: w(t.summary)
        }), y.setMetaProperty("ref-origin", c.uri), y.setMetaProperty("ref-referencing-element-id", A(Gn.identify(t))), ee(m) && (t.hasKey("description") && "description" in m && (y.remove("description"), y.set("description", t.get("description"))), t.hasKey("summary") && "summary" in m && (y.remove("summary"), y.set("summary", t.get("summary")))), y;
      };
      if (i.includes(t) || i.includes(l)) {
        var d;
        const m = (d = i.findItem(vu(t))) !== null && d !== void 0 ? d : p(l);
        return We(r) ? r.value = m : Array.isArray(r) && (r[e] = m), !1;
      }
      return p(l);
    },
    async PathItemElement(t, e, r, n, s) {
      const [i, o] = this.toAncestorLineage([...s, r]);
      if (!H(t.$ref))
        return;
      if (i.includesCycle(t))
        return !1;
      const a = this.toBaseURI(w(t.$ref));
      if (!this.options.resolve.external && de(this.reference.uri) !== a)
        return;
      const c = await this.toReference(w(t.$ref)), u = we(a, w(t.$ref));
      this.indirections.push(t);
      const f = Me(u);
      let l = ke(f, c.value.result);
      if (_t(l) && (l = gt.refract(l)), this.indirections.includes(l))
        throw new ye("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Tt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      o.add(t);
      const h = tn({
        reference: c,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: i
      });
      l = await yu(l, h, {
        keyMap: Ge,
        nodeTypeGetter: Be
      }), o.delete(t), this.indirections.pop();
      const p = (m) => {
        const y = new gt([...m.content], A(m.meta), A(m.attributes));
        return t.forEach((v, $, b) => {
          y.remove(w($)), y.content.push(b);
        }), y.remove("$ref"), y.setMetaProperty("ref-fields", {
          $ref: w(t.$ref)
        }), y.setMetaProperty("ref-origin", c.uri), y.setMetaProperty("ref-referencing-element-id", A(Gn.identify(t))), y;
      };
      if (i.includes(t) || i.includes(l)) {
        var d;
        const m = (d = i.findItem(vu(t))) !== null && d !== void 0 ? d : p(l);
        return We(r) ? r.value = m : Array.isArray(r) && (r[e] = m), !1;
      }
      return p(l);
    },
    async LinkElement(t) {
      if (!H(t.operationRef) && !H(t.operationId))
        return;
      if (H(t.operationRef) && H(t.operationId))
        throw new ye("LinkElement operationRef and operationId fields are mutually exclusive.");
      let e;
      if (H(t.operationRef)) {
        var r;
        const s = Me(w(t.operationRef)), i = this.toBaseURI(w(t.operationRef));
        if (!this.options.resolve.external && de(this.reference.uri) !== i)
          return;
        const o = await this.toReference(w(t.operationRef));
        e = ke(s, o.value.result), _t(e) && (e = si.refract(e)), e = Ne(e), e.setMetaProperty("ref-origin", o.uri);
        const a = Ne(t);
        return (r = a.operationRef) === null || r === void 0 || r.meta.set("operation", e), a;
      }
      if (H(t.operationId)) {
        var n;
        const s = w(t.operationId), i = await this.toReference(be(this.reference.uri));
        if (e = kb((a) => w$(a) && Te(a.operationId) && a.operationId.equals(s), i.value.result), Lt(e))
          throw new ye(`OperationElement(operationId=${s}) not found.`);
        const o = Ne(t);
        return (n = o.operationId) === null || n === void 0 || n.meta.set("operation", e), o;
      }
    },
    async ExampleElement(t, e, r, n, s) {
      const [i] = this.toAncestorLineage([...s, r]);
      if (!H(t.externalValue))
        return;
      if (i.includesCycle(t))
        return !1;
      if (t.hasKey("value") && H(t.externalValue))
        throw new ye("ExampleElement value and externalValue fields are mutually exclusive.");
      const o = this.toBaseURI(w(t.externalValue));
      if (!this.options.resolve.external && de(this.reference.uri) !== o)
        return;
      const a = await this.toReference(w(t.externalValue)), c = Ne(a.value.result);
      c.setMetaProperty("ref-origin", a.uri);
      const u = Ne(t);
      return u.value = c, u;
    },
    async SchemaElement(t, e, r, n, s) {
      const [i, o] = this.toAncestorLineage([...s, r]);
      if (!H(t.$ref))
        return;
      if (i.includesCycle(t))
        return !1;
      let a = await this.toReference(be(this.reference.uri)), {
        uri: c
      } = a;
      const u = wo(c, t), f = de(u), l = Er({
        uri: f
      }), h = Hu((b) => b.canRead(l), this.options.resolve.resolvers), p = !h, d = (b) => de(this.reference.uri) !== b;
      this.indirections.push(t);
      let m;
      try {
        if (h || p)
          m = oi(
            u,
            // @ts-ignore
            Ze(a.value.result)
          );
        else {
          if (c = this.toBaseURI(w(u)), !this.options.resolve.external && d(c))
            return;
          a = await this.toReference(be(u));
          const b = Me(u);
          m = Ze(
            // @ts-ignore
            ke(b, a.value.result)
          );
        }
      } catch (b) {
        if (p && b instanceof fs)
          if (ii(sr(u))) {
            if (c = this.toBaseURI(w(u)), !this.options.resolve.external && d(c))
              return;
            a = await this.toReference(be(u));
            const x = sr(u);
            m = xc(
              x,
              // @ts-ignore
              Ze(a.value.result)
            );
          } else {
            if (c = this.toBaseURI(w(u)), !this.options.resolve.external && d(c))
              return;
            a = await this.toReference(be(u));
            const x = Me(u);
            m = Ze(
              // @ts-ignore
              ke(x, a.value.result)
            );
          }
        else
          throw b;
      }
      if (this.indirections.includes(m))
        throw new ye("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new Tt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      o.add(t);
      const y = tn({
        reference: a,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: i
      });
      if (m = await yu(m, y, {
        keyMap: Ge,
        nodeTypeGetter: Be
      }), o.delete(t), this.indirections.pop(), Hp(m)) {
        const b = A(m);
        return b.setMetaProperty("ref-fields", {
          $ref: w(t.$ref)
        }), b.setMetaProperty("ref-origin", a.uri), b.setMetaProperty("ref-referencing-element-id", A(Gn.identify(t))), b;
      }
      const v = (b) => {
        const x = new Ft([...b.content], A(b.meta), A(b.attributes));
        return t.forEach((T, V, P) => {
          x.remove(w(V)), x.content.push(P);
        }), x.remove("$ref"), x.setMetaProperty("ref-fields", {
          $ref: w(t.$ref)
        }), x.setMetaProperty("ref-origin", a.uri), x.setMetaProperty("ref-referencing-element-id", A(Gn.identify(t))), x;
      };
      if (i.includes(t) || i.includes(m)) {
        var $;
        const b = ($ = i.findItem(vu(t))) !== null && $ !== void 0 ? $ : v(m);
        return We(r) ? r.value = b : Array.isArray(r) && (r[e] = b), !1;
      }
      return v(m);
    }
  }
}), hK = Ie[Symbol.for("nodejs.util.promisify.custom")], dK = z(rB, {
  init() {
    this.name = "openapi-3-1";
  },
  methods: {
    canDereference(t) {
      var e;
      return t.mediaType !== "text/plain" ? Ar.includes(t.mediaType) : qp((e = t.parseResult) === null || e === void 0 ? void 0 : e.result);
    },
    async dereference(t, e) {
      const r = jn(bc), n = Or(Ca(), e.dereference.refSet);
      let s;
      n.has(t.uri) ? s = n.find(da(t.uri, "uri")) : (s = Rn({
        uri: t.uri,
        value: t.parseResult
      }), n.add(s));
      const i = tn({
        reference: s,
        namespace: r,
        options: e
      }), o = await hK(n.rootRef.value, i, {
        keyMap: Ge,
        nodeTypeGetter: Be
      });
      return e.dereference.refSet === null && n.clean(), o;
    }
  }
}), I$ = dK, mK = (t) => t.slice(2), ot = (t) => {
  const e = mK(t);
  return e.reduce((r, n, s) => {
    if (We(n)) {
      const i = String(w(n.key));
      r.push(i);
    } else if (et(e[s - 2])) {
      const i = e[s - 2].content.indexOf(n);
      r.push(i);
    }
    return r;
  }, []);
}, bi = (t) => {
  if (t.cause == null)
    return t;
  let {
    cause: e
  } = t;
  for (; e.cause != null; )
    e = e.cause;
  return e;
}, yK = Op("SchemaRefError", function(e, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), {
  wrapError: gu
} = Ep, bu = Ie[Symbol.for("nodejs.util.promisify.custom")], Jn = wp(), $u = (t) => (e) => e.meta.hasKey("ref-referencing-element-id") && e.meta.get("ref-referencing-element-id").equals(w(Jn.identify(t))), Ri = tn.compose({
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
        var i;
        const [f, l] = this.toAncestorLineage([...s, r]);
        if (Qn(["cycle"], t.$ref) || f.includesCycle(t) || !this.options.resolve.external && O$(t))
          return !1;
        const h = await this.toReference(w(t.$ref)), {
          uri: p
        } = h, d = we(p, w(t.$ref));
        this.indirections.push(t);
        const m = Me(d);
        let y = ke(m, h.value.result);
        if (_t(y)) {
          const b = w(t.meta.get("referenced-element"));
          oe(y) ? (y = xt.refract(y), y.setMetaProperty("referenced-element", b)) : y = this.namespace.getElementClass(b).refract(y);
        }
        if (this.indirections.includes(y))
          throw new ye("Recursive JSON Pointer detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new Tt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        if (!this.useCircularStructures && f.includes(y)) {
          if (Sr(p) || Zr(p)) {
            const x = new xt({
              $ref: d
            }, A(t.meta), A(t.attributes));
            return x.get("$ref").classes.push("cycle"), x;
          }
          return !1;
        }
        l.add(t);
        const v = Ri({
          reference: h,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: f,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (i = this.basePath) !== null && i !== void 0 ? i : [...ot([...s, r, t]), "$ref"]
        });
        y = await bu(y, v, {
          keyMap: Ge,
          nodeTypeGetter: Be
        }), l.delete(t), this.indirections.pop();
        const $ = (b) => {
          const x = Ne(b);
          if (x.setMetaProperty("ref-fields", {
            $ref: w(t.$ref),
            description: w(t.description),
            summary: w(t.summary)
          }), x.setMetaProperty("ref-origin", h.uri), x.setMetaProperty("ref-referencing-element-id", A(Jn.identify(t))), ee(b) && (t.hasKey("description") && "description" in b && (x.remove("description"), x.set("description", t.get("description"))), t.hasKey("summary") && "summary" in b && (x.remove("summary"), x.set("summary", t.get("summary")))), this.allowMetaPatches && ee(x) && !x.hasKey("$$ref")) {
            const T = we(p, d);
            x.set("$$ref", T);
          }
          return x;
        };
        if (f.includes(t) || f.includes(y)) {
          var o;
          const b = (o = f.findItem($u(t))) !== null && o !== void 0 ? o : $(y);
          return We(r) ? r.value = b : Array.isArray(r) && (r[e] = b), !1;
        }
        return $(y);
      } catch (f) {
        var a, c, u;
        const l = bi(f), h = gu(l, {
          baseDoc: this.reference.uri,
          $ref: w(t.$ref),
          pointer: Me(w(t.$ref)),
          fullPath: (a = this.basePath) !== null && a !== void 0 ? a : [...ot([...s, r, t]), "$ref"]
        });
        (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, h);
        return;
      }
    },
    async PathItemElement(t, e, r, n, s) {
      try {
        var i;
        const [f, l] = this.toAncestorLineage([...s, r]);
        if (!H(t.$ref))
          return;
        if (Qn(["cycle"], t.$ref) || f.includesCycle(t))
          return !1;
        if (!this.options.resolve.external && S$(t))
          return;
        const h = await this.toReference(w(t.$ref)), {
          uri: p
        } = h, d = we(p, w(t.$ref));
        this.indirections.push(t);
        const m = Me(d);
        let y = ke(m, h.value.result);
        if (_t(y) && (y = gt.refract(y)), this.indirections.includes(y))
          throw new ye("Recursive JSON Pointer detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new Tt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        if (!this.useCircularStructures && f.includes(y)) {
          if (Sr(p) || Zr(p)) {
            const x = new gt({
              $ref: d
            }, A(t.meta), A(t.attributes));
            return x.get("$ref").classes.push("cycle"), x;
          }
          return !1;
        }
        l.add(t);
        const v = Ri({
          reference: h,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: f,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (i = this.basePath) !== null && i !== void 0 ? i : [...ot([...s, r, t]), "$ref"]
        });
        y = await bu(y, v, {
          keyMap: Ge,
          nodeTypeGetter: Be
        }), l.delete(t), this.indirections.pop();
        const $ = (b) => {
          const x = new gt([...b.content], A(b.meta), A(b.attributes));
          if (t.forEach((T, V, P) => {
            x.remove(w(V)), x.content.push(P);
          }), x.remove("$ref"), x.setMetaProperty("ref-fields", {
            $ref: w(t.$ref)
          }), x.setMetaProperty("ref-origin", h.uri), x.setMetaProperty("ref-referencing-element-id", A(Jn.identify(t))), this.allowMetaPatches && typeof x.get("$$ref") > "u") {
            const T = we(p, d);
            x.set("$$ref", T);
          }
          return x;
        };
        if (f.includes(t) || f.includes(y)) {
          var o;
          const b = (o = f.findItem($u(t))) !== null && o !== void 0 ? o : $(y);
          return We(r) ? r.value = b : Array.isArray(r) && (r[e] = b), !1;
        }
        return $(y);
      } catch (f) {
        var a, c, u;
        const l = bi(f), h = gu(l, {
          baseDoc: this.reference.uri,
          $ref: w(t.$ref),
          pointer: Me(w(t.$ref)),
          fullPath: (a = this.basePath) !== null && a !== void 0 ? a : [...ot([...s, r, t]), "$ref"]
        });
        (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, h);
        return;
      }
    },
    async SchemaElement(t, e, r, n, s) {
      try {
        var i;
        const [f, l] = this.toAncestorLineage([...s, r]);
        if (!H(t.$ref))
          return;
        if (Qn(["cycle"], t.$ref) || f.includesCycle(t))
          return !1;
        let h = await this.toReference(be(this.reference.uri)), {
          uri: p
        } = h;
        const d = wo(p, t), m = de(d), y = Er({
          uri: m
        }), v = !this.options.resolve.resolvers.some((P) => P.canRead(y)), $ = !v, b = $ && p !== m;
        if (!this.options.resolve.external && b)
          return;
        this.indirections.push(t);
        let x;
        try {
          if (v || $)
            x = oi(d, Ze(h.value.result));
          else {
            h = await this.toReference(be(d)), p = h.uri;
            const P = Me(d);
            x = Ze(ke(P, h.value.result));
          }
        } catch (P) {
          if ($ && P instanceof fs)
            if (ii(sr(d))) {
              h = await this.toReference(be(d)), p = h.uri;
              const C = sr(d);
              x = xc(C, Ze(h.value.result));
            } else {
              h = await this.toReference(be(d)), p = h.uri;
              const C = Me(d);
              x = Ze(ke(C, h.value.result));
            }
          else
            throw P;
        }
        if (this.indirections.includes(x))
          throw new ye("Recursive Schema Object reference detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new Tt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        if (!this.useCircularStructures && f.includes(x)) {
          if (Sr(p) || Zr(p)) {
            const C = we(p, d), M = new Ft({
              $ref: C
            }, A(t.meta), A(t.attributes));
            return M.get("$ref").classes.push("cycle"), M;
          }
          return !1;
        }
        l.add(t);
        const T = Ri({
          reference: h,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: f,
          basePath: (i = this.basePath) !== null && i !== void 0 ? i : [...ot([...s, r, t]), "$ref"]
        });
        if (x = await bu(x, T, {
          keyMap: Ge,
          nodeTypeGetter: Be
        }), l.delete(t), this.indirections.pop(), Hp(x)) {
          const P = A(x);
          return P.setMetaProperty("ref-fields", {
            $ref: w(t.$ref)
          }), P.setMetaProperty("ref-origin", h.uri), P.setMetaProperty("ref-referencing-element-id", A(Jn.identify(t))), P;
        }
        const V = (P) => {
          const C = new Ft([...P.content], A(P.meta), A(P.attributes));
          if (t.forEach((M, G, S) => {
            C.remove(w(G)), C.content.push(S);
          }), C.remove("$ref"), C.setMetaProperty("ref-fields", {
            $ref: w(t.$ref)
          }), C.setMetaProperty("ref-origin", h.uri), C.setMetaProperty("ref-referencing-element-id", A(Jn.identify(t))), this.allowMetaPatches && typeof C.get("$$ref") > "u") {
            const M = we(p, d);
            C.set("$$ref", M);
          }
          return C;
        };
        if (f.includes(t) || f.includes(x)) {
          var o;
          const P = (o = f.findItem($u(t))) !== null && o !== void 0 ? o : V(x);
          return We(r) ? r.value = P : Array.isArray(r) && (r[e] = P), !1;
        }
        return V(x);
      } catch (f) {
        var a, c, u;
        const l = bi(f), h = new yK(`Could not resolve reference: ${l.message}`, {
          baseDoc: this.reference.uri,
          $ref: w(t.$ref),
          fullPath: (a = this.basePath) !== null && a !== void 0 ? a : [...ot([...s, r, t]), "$ref"]
        }, l);
        (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, h);
        return;
      }
    },
    async LinkElement() {
    },
    async ExampleElement(t, e, r, n, s) {
      try {
        return await tn.compose.methods.ExampleElement.call(this, t, e, r, n, s);
      } catch (c) {
        var i, o, a;
        const u = bi(c), f = gu(u, {
          baseDoc: this.reference.uri,
          externalValue: w(t.externalValue),
          fullPath: (i = this.basePath) !== null && i !== void 0 ? i : [...ot([...s, r, t]), "externalValue"]
        });
        (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, f);
        return;
      }
    }
  }
}), Gp = I$.compose.bind(), vK = Gp({
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
          const f = new Error(u, {
            cause: u
          });
          f.fullPath = ot([...s, r]), (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, f);
        }
      }
    }
  }
}), gK = Gp({
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
        typeof t.properties > "u" || ee(t.properties) && t.properties.forEach((i) => {
          if (ee(i))
            try {
              const c = this.modelPropertyMacro(w(i));
              i.set("default", c);
            } catch (c) {
              var o, a;
              const u = new Error(c, {
                cause: c
              });
              u.fullPath = [...ot([...s, r, t]), "properties"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, u);
            }
        });
      }
    }
  }
}), bK = Gp({
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
        if (!et(t.allOf)) {
          var i, o;
          const l = new TypeError("allOf must be an array");
          l.fullPath = [...ot([...s, r, t]), "allOf"], (i = this.options.dereference.dereferenceOpts) === null || i === void 0 || (i = i.errors) === null || i === void 0 || (o = i.push) === null || o === void 0 || o.call(i, l);
          return;
        }
        if (t.allOf.isEmpty)
          return new Ft(t.content.filter((l) => w(l.key) !== "allOf"), A(t.meta), A(t.attributes));
        if (!t.allOf.content.every(Dn)) {
          var c, u;
          const l = new TypeError("Elements in allOf must be objects");
          l.fullPath = [...ot([...s, r, t]), "allOf"], (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (u = c.push) === null || u === void 0 || u.call(c, l);
          return;
        }
        const f = hn.all([...t.allOf.content, t]);
        if (t.hasKey("$$ref") || f.remove("$$ref"), t.hasKey("example")) {
          const l = f.getMember("example");
          l.value = t.get("example");
        }
        if (t.hasKey("examples")) {
          const l = f.getMember("examples");
          l.value = t.get("examples");
        }
        return f.remove("allOf"), f;
      }
    }
  }
}), $K = Ie[Symbol.for("nodejs.util.promisify.custom")], C$ = I$.compose({
  props: {
    useCircularStructures: !0,
    allowMetaPatches: !1,
    parameterMacro: null,
    modelPropertyMacro: null,
    mode: "non-strict",
    ancestors: null
  },
  init({
    useCircularStructures: t = this.useCircularStructures,
    allowMetaPatches: e = this.allowMetaPatches,
    parameterMacro: r = this.parameterMacro,
    modelPropertyMacro: n = this.modelPropertyMacro,
    mode: s = this.mode,
    ancestors: i = []
  } = {}) {
    this.name = "openapi-3-1-swagger-client", this.useCircularStructures = t, this.allowMetaPatches = e, this.parameterMacro = r, this.modelPropertyMacro = n, this.mode = s, this.ancestors = [...i];
  },
  methods: {
    async dereference(t, e) {
      var r;
      const n = [], s = jn(bc), i = (r = e.dereference.refSet) !== null && r !== void 0 ? r : Ca();
      let o;
      i.has(t.uri) ? o = i.find((f) => f.uri === t.uri) : (o = Rn({
        uri: t.uri,
        value: t.parseResult
      }), i.add(o));
      const a = Ri({
        reference: o,
        namespace: s,
        options: e,
        useCircularStructures: this.useCircularStructures,
        allowMetaPatches: this.allowMetaPatches,
        ancestors: this.ancestors
      });
      if (n.push(a), typeof this.parameterMacro == "function") {
        const f = vK({
          parameterMacro: this.parameterMacro,
          options: e
        });
        n.push(f);
      }
      if (typeof this.modelPropertyMacro == "function") {
        const f = gK({
          modelPropertyMacro: this.modelPropertyMacro,
          options: e
        });
        n.push(f);
      }
      if (this.mode !== "strict") {
        const f = bK({
          options: e
        });
        n.push(f);
      }
      const c = Ib(n, {
        nodeTypeGetter: Be
      }), u = await $K(i.rootRef.value, c, {
        keyMap: Ge,
        nodeTypeGetter: Be
      });
      return e.dereference.refSet === null && i.clean(), u;
    }
  }
}), Jp = async (t) => {
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
    mode: h = "non-strict"
  } = t;
  try {
    const {
      cache: p
    } = Jp, d = Sr(Zi()) ? Zi() : Ci, m = yf(t), y = we(d, m);
    let v;
    p.has(e) ? v = p.get(e) : (v = fr.refract(e), v.classes.push("result"), p.set(e, v));
    const $ = new ct([v]), b = f3(o), x = b === "" ? "" : `#${b}`, T = ke(b, v), V = Rn({
      uri: y,
      value: $
    }), P = Ca({
      refs: [V]
    });
    b !== "" && (P.rootRef = null);
    const C = [/* @__PURE__ */ new Set([T])], M = [], G = await hB(T, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${y}${x}`,
        resolvers: [P$({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: s,
            responseInterceptor: i
          }
        },
        strategies: [lK()]
      },
      parse: {
        mediaType: Ar.latest(),
        parsers: [T$({
          allowEmpty: !1,
          sourceMap: !1
        }), R$({
          allowEmpty: !1,
          sourceMap: !1
        }), j$({
          allowEmpty: !1,
          sourceMap: !1
        }), _$({
          allowEmpty: !1,
          sourceMap: !1
        }), oK({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [C$({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: f,
          modelPropertyMacro: l,
          mode: h,
          ancestors: C
        })],
        refSet: P,
        dereferenceOpts: {
          errors: M
        }
      }
    }), S = BU(T, G, v), I = u ? S : A$(S);
    return {
      spec: w(I),
      errors: M
    };
  } catch (p) {
    if (p instanceof bl || p instanceof Hn)
      return {
        spec: null,
        errors: []
      };
    throw p;
  }
};
Jp.cache = /* @__PURE__ */ new WeakMap();
const xK = {
  name: "openapi-3-1-apidom",
  match({
    spec: t
  }) {
    return c$(t);
  },
  normalize({
    spec: t
  }) {
    return es(A$)(t);
  },
  async resolve(t) {
    return Jp(t);
  }
};
function M$(t, e, r) {
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
function wK(t, e) {
  return M$(t, e, !0) || null;
}
function F$(t, e) {
  return `${e.toLowerCase()}-${t}`;
}
function SK(t, e) {
  return !t || !t.paths ? null : wK(t, ({
    pathName: r,
    method: n,
    operation: s
  }) => {
    if (!s || typeof s != "object")
      return !1;
    const i = s.operationId, o = Vs(s, r, n), a = F$(r, n);
    return [o, a, i].some((c) => c && c === e);
  });
}
const {
  isHttpUrl: OK
} = q1, EK = () => null, AK = (t) => Array.isArray(t) ? t : [t], Um = {
  mapTagOperations: _K,
  makeExecute: PK
};
function PK(t = {}) {
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
function jK(t = {}) {
  const e = Um.makeExecute(t);
  return {
    apis: Um.mapTagOperations({
      v2OperationIdCompatibilityMode: t.v2OperationIdCompatibilityMode,
      spec: t.spec,
      cb: e
    })
  };
}
function _K({
  spec: t,
  cb: e = EK,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const s = {}, i = {};
  return M$(t, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? AK(c.tags) : [r]).forEach((f) => {
      if (typeof f != "string")
        return;
      i[f] = i[f] || {};
      const l = i[f], h = Vs(c, o, a, {
        v2OperationIdCompatibilityMode: n
      }), p = e({
        spec: t,
        pathName: o,
        method: a,
        operation: c,
        operationId: h
      });
      if (s[h])
        s[h] += 1, l[`${h}${s[h]}`] = p;
      else if (typeof l[h] < "u") {
        const d = s[h] || 1;
        s[h] = d + 1, l[`${h}${s[h]}`] = p;
        const m = l[h];
        delete l[h], l[`${h}${d}`] = m;
      } else
        l[h] = p;
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
zp.parse = RK;
zp.serialize = IK;
var TK = Object.prototype.toString, $i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function RK(t, e) {
  if (typeof t != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, n = e || {}, s = n.decode || CK, i = 0; i < t.length; ) {
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
      u.charCodeAt(0) === 34 && (u = u.slice(1, -1)), r[c] = VK(u, s);
    }
    i = a + 1;
  }
  return r;
}
function IK(t, e, r) {
  var n = r || {}, s = n.encode || MK;
  if (typeof s != "function")
    throw new TypeError("option encode is invalid");
  if (!$i.test(t))
    throw new TypeError("argument name is invalid");
  var i = s(e);
  if (i && !$i.test(i))
    throw new TypeError("argument val is invalid");
  var o = t + "=" + i;
  if (n.maxAge != null) {
    var a = n.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!$i.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!$i.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    var c = n.expires;
    if (!FK(c) || isNaN(c.valueOf()))
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
function CK(t) {
  return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
}
function MK(t) {
  return encodeURIComponent(t);
}
function FK(t) {
  return TK.call(t) === "[object Date]" || t instanceof Date;
}
function VK(t, e) {
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
function Bm(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function V$(t) {
  var e, r;
  return Bm(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (r = e.prototype, !(Bm(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
const DK = {
  body: NK,
  header: kK,
  query: BK,
  path: UK,
  formData: LK
};
function NK({
  req: t,
  value: e
}) {
  t.body = e;
}
function LK({
  req: t,
  value: e,
  parameter: r
}) {
  (e || r.allowEmptyValue) && (t.form = t.form || {}, t.form[r.name] = {
    value: e,
    allowEmptyValue: r.allowEmptyValue,
    collectionFormat: r.collectionFormat
  });
}
function kK({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {}, typeof r < "u" && (t.headers[e.name] = r);
}
function UK({
  req: t,
  value: e,
  parameter: r
}) {
  t.url = t.url.split(`{${r.name}}`).join(encodeURIComponent(e));
}
function BK({
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
  return e.includes("application/json") ? typeof t == "string" ? t : JSON.stringify(t) : t.toString();
}
function qK({
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
  if (o) {
    const c = Object.keys(o)[0];
    t.url = t.url.split(`{${n}}`).join(cn(wc(e, c), {
      escape: !0
    }));
    return;
  }
  const a = df({
    key: r.name,
    value: e,
    style: s || "simple",
    explode: i || !1,
    escape: !0
  });
  t.url = t.url.split(`{${n}}`).join(a);
}
function HK({
  req: t,
  value: e,
  parameter: r
}) {
  if (t.query = t.query || {}, r.content) {
    const n = Object.keys(r.content)[0], s = wc(e, n);
    if (s)
      t.query[r.name] = s;
    else if (r.allowEmptyValue && e !== void 0) {
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
const GK = ["accept", "authorization", "content-type"];
function JK({
  req: t,
  parameter: e,
  value: r
}) {
  if (t.headers = t.headers || {}, !(GK.indexOf(e.name.toLowerCase()) > -1)) {
    if (e.content) {
      const n = Object.keys(e.content)[0];
      t.headers[e.name] = wc(r, n);
      return;
    }
    r !== void 0 && !(Array.isArray(r) && r.length === 0) && (t.headers[e.name] = df({
      key: e.name,
      value: r,
      style: e.style || "simple",
      explode: typeof e.explode > "u" ? !1 : e.explode,
      escape: !1
    }));
  }
}
function zK({
  req: t,
  parameter: e,
  value: r
}) {
  t.headers = t.headers || {};
  const n = typeof r;
  if (e.content) {
    const s = Object.keys(e.content)[0];
    t.headers.Cookie = `${e.name}=${wc(r, s)}`;
    return;
  }
  if (r !== void 0 && !(Array.isArray(r) && r.length === 0)) {
    const s = n === "object" && !Array.isArray(r) && e.explode ? "" : `${e.name}=`;
    t.headers.Cookie = s + df({
      key: e.name,
      value: r,
      escape: !1,
      style: e.style || "form",
      explode: typeof e.explode > "u" ? !1 : e.explode
    });
  }
}
const KK = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: zK,
  header: JK,
  path: qK,
  query: HK
}, Symbol.toStringTag, { value: "Module" })), WK = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: D$
} = WK;
function YK(t, e) {
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
  e = XK({
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
  } else
    a && f && (e.headers["Content-Type"] = a);
  if (!t.responseContentType && r.responses) {
    const p = Object.entries(r.responses).filter(([d, m]) => {
      const y = parseInt(d, 10);
      return y >= 200 && y < 300 && V$(m.content);
    }).reduce((d, [, m]) => d.concat(Object.keys(m.content)), []);
    p.length > 0 && (e.headers.accept = p.join(", "));
  }
  if (n)
    if (a) {
      if (u.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof n == "object") {
            var l, h;
            const p = (l = (h = c.content[a]) === null || h === void 0 ? void 0 : h.encoding) !== null && l !== void 0 ? l : {};
            e.form = {}, Object.keys(n).forEach((d) => {
              e.form[d] = {
                value: n[d],
                encoding: p[d] || {}
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
function XK({
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
      const h = o[l], p = u[l];
      if (!h)
        return;
      const d = h.value || h, {
        type: m
      } = p;
      if (h) {
        if (m === "apiKey")
          p.in === "query" && (i.query[p.name] = d), p.in === "header" && (i.headers[p.name] = d), p.in === "cookie" && (i.cookies[p.name] = d);
        else if (m === "http") {
          if (/^basic$/i.test(p.scheme)) {
            const y = d.username || "", v = d.password || "", $ = D$(`${y}:${v}`);
            i.headers.Authorization = `Basic ${$}`;
          }
          /^bearer$/i.test(p.scheme) && (i.headers.Authorization = `Bearer ${d}`);
        } else if (m === "oauth2" || m === "openIdConnect") {
          const y = h.token || {}, v = p["x-tokenName"] || "access_token", $ = y[v];
          let b = y.token_type;
          (!b || b.toLowerCase() === "bearer") && (b = "Bearer"), i.headers.Authorization = `${b} ${$}`;
        }
      }
    });
  }), i);
}
function QK(t, e) {
  const {
    spec: r,
    operation: n,
    securities: s,
    requestContentType: i,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = t;
  if (e = ZK({
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
function ZK({
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
      const h = i[l];
      if (!h)
        return;
      const {
        token: p
      } = h, d = h.value || h, m = u[l], {
        type: y
      } = m, v = m["x-tokenName"] || "access_token", $ = p && p[v];
      let b = p && p.token_type;
      if (h)
        if (y === "apiKey") {
          const x = m.in === "query" ? "query" : "headers";
          s[x] = s[x] || {}, s[x][m.name] = d;
        } else if (y === "basic")
          if (d.header)
            s.headers.authorization = d.header;
          else {
            const x = d.username || "", T = d.password || "";
            d.base64 = D$(`${x}:${T}`), s.headers.authorization = `Basic ${d.base64}`;
          }
        else
          y === "oauth2" && $ && (b = !b || b.toLowerCase() === "bearer" ? "Bearer" : b, s.headers.authorization = `${b} ${$}`);
    });
  }), s);
}
const qm = (t) => Array.isArray(t) ? t : [], Ii = (t) => {
  try {
    return new URL(t);
  } catch {
    const e = new URL(t, Ci), r = String(t).startsWith("/") ? e.pathname : e.pathname.substring(1);
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
}, eW = Op("OperationNotFoundError", function(e, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), tW = (t, e) => e.filter((r) => r.name === t), rW = (t) => {
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
}, nW = {
  buildRequest: N$
};
function sW({
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
  const u = t || e || vs;
  s && i && !n && (n = F$(s, i));
  const f = nW.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: u,
    ...c
  });
  return f.body && (V$(f.body) || Array.isArray(f.body)) && (f.body = JSON.stringify(f.body)), u(f);
}
function N$(t) {
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
    signal: h
  } = t;
  let {
    parameters: p,
    parameterBuilders: d
  } = t;
  const m = jp(e);
  d || (m ? d = KK : d = DK);
  let v = {
    url: "",
    credentials: l && l.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  h && (v.signal = h), i && (v.requestInterceptor = i), o && (v.responseInterceptor = o), c && (v.userFetch = c);
  const $ = SK(e, r);
  if (!$)
    throw new eW(`Operation ${r} not found`);
  const {
    operation: b = {},
    method: x,
    pathName: T
  } = $;
  if (v.url += L$({
    spec: e,
    scheme: s,
    contextUrl: a,
    server: u,
    serverVariables: f,
    pathName: T,
    method: x
  }), !r)
    return delete v.cookies, v;
  v.url += T, v.method = `${x}`.toUpperCase(), p = p || {};
  const V = e.paths[T] || {};
  n && (v.headers.accept = n);
  const P = rW([].concat(qm(b.parameters)).concat(qm(V.parameters)));
  P.forEach((M) => {
    const G = d[M.in];
    let S;
    if (M.in === "body" && M.schema && M.schema.properties && (S = p), S = M && M.name && p[M.name], typeof S > "u" ? S = M && M.name && p[`${M.in}.${M.name}`] : tW(M.name, P).length > 1 && console.warn(`Parameter '${M.name}' is ambiguous because the defined spec has more than one parameter with the name: '${M.name}' and the passed-in parameter values did not define an 'in' value.`), S !== null) {
      if (typeof M.default < "u" && typeof S > "u" && (S = M.default), typeof S > "u" && M.required && !M.allowEmptyValue)
        throw new Error(`Required parameter ${M.name} is not provided`);
      if (m && M.schema && M.schema.type === "object" && typeof S == "string")
        try {
          S = JSON.parse(S);
        } catch {
          throw new Error("Could not parse object parameter value string as JSON");
        }
      G && G({
        req: v,
        parameter: M,
        value: S,
        operation: b,
        spec: e
      });
    }
  });
  const C = {
    ...t,
    operation: b
  };
  if (m ? v = YK(C, v) : v = QK(C, v), v.cookies && Object.keys(v.cookies).length) {
    const M = Object.keys(v.cookies).reduce((G, S) => {
      const I = v.cookies[S], N = G ? "&" : "", Y = zp.serialize(S, I);
      return G + N + Y;
    }, "");
    v.headers.Cookie = M;
  }
  return v.cookies && delete v.cookies, rv(v), v;
}
const Zl = (t) => t ? t.replace(/\W/g, "") : null;
function L$(t) {
  return jp(t.spec) ? iW(t) : cW(t);
}
const xu = (t) => Array.isArray(t) && t.length > 0;
function iW({
  spec: t,
  pathName: e,
  method: r,
  server: n,
  contextUrl: s,
  serverVariables: i = {}
}) {
  var o, a;
  let c = [], u = "", f;
  const l = t == null || (o = t.paths) === null || o === void 0 || (o = o[e]) === null || o === void 0 || (o = o[(r || "").toLowerCase()]) === null || o === void 0 ? void 0 : o.servers, h = t == null || (a = t.paths) === null || a === void 0 || (a = a[e]) === null || a === void 0 ? void 0 : a.servers, p = t == null ? void 0 : t.servers;
  return c = xu(l) ? l : xu(h) ? h : xu(p) ? p : [Gm], n && (f = c.find((d) => d.url === n), f && (u = n)), u || ([f] = c, u = f.url), u.includes("{") && aW(u).forEach((m) => {
    if (f.variables && f.variables[m]) {
      const y = f.variables[m], v = i[m] || y.default, $ = new RegExp(`{${m}}`, "g");
      u = u.replace($, v);
    }
  }), oW(u, s);
}
function oW(t = "", e = "") {
  const r = Ii(t && e ? we(e, t) : t), n = Ii(e), s = Zl(r.protocol) || Zl(n.protocol), i = r.host || n.host, o = r.pathname;
  let a;
  return s && i ? a = `${s}://${i + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function aW(t) {
  const e = [], r = /{([^}]+)}/g;
  let n;
  for (; n = r.exec(t); )
    e.push(n[1]);
  return e;
}
function cW({
  spec: t,
  scheme: e,
  contextUrl: r = ""
}) {
  const n = Ii(r), s = Array.isArray(t.schemes) ? t.schemes[0] : null, i = e || s || Zl(n.protocol) || "http", o = t.host || n.host || "", a = t.basePath || "";
  let c;
  return i && o ? c = `${i}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
ne.http = vs;
ne.makeHttp = HE.bind(null, ne.http);
ne.resolveStrategies = {
  "openapi-3-1-apidom": xK,
  "openapi-3-0": l$,
  "openapi-2-0": u$,
  generic: i$
};
ne.resolve = f$({
  strategies: [ne.resolveStrategies["openapi-3-1-apidom"], ne.resolveStrategies["openapi-3-0"], ne.resolveStrategies["openapi-2-0"], ne.resolveStrategies.generic]
});
ne.resolveSubtree = QB({
  strategies: [ne.resolveStrategies["openapi-3-1-apidom"], ne.resolveStrategies["openapi-3-0"], ne.resolveStrategies["openapi-2-0"], ne.resolveStrategies.generic]
});
ne.execute = sW;
ne.serializeRes = Qy;
ne.serializeHeaders = Zy;
ne.clearCache = JB;
ne.makeApisTagOperation = jK;
ne.buildRequest = N$;
ne.helpers = {
  opId: Vs
};
ne.getBaseUrl = L$;
ne.apidom = {
  resolve: {
    resolvers: {
      HttpResolverSwaggerClient: P$
    }
  },
  parse: {
    parsers: {
      JsonParser: j$,
      YamlParser: _$,
      OpenApiJson3_1Parser: T$,
      OpenApiYaml3_1Parser: R$
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: C$
    }
  }
};
function ne(t, e = {}) {
  if (typeof t == "string" ? e.url = t : e = t, !(this instanceof ne))
    return new ne(e);
  Object.assign(this, e);
  const r = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, ne.makeApisTagOperation(this)), this));
  return r.client = this, r;
}
ne.prototype = {
  http: vs,
  execute(t) {
    return this.applyDefaults(), ne.execute({
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
    return ne.resolve({
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
ne.prototype.applyDefaults = function() {
  const {
    spec: e
  } = this, r = this.url;
  if (o$(e) && OK(r)) {
    const n = new URL(r);
    e.host || (e.host = n.host), e.schemes || (e.schemes = [n.protocol.replace(":", "")]), e.basePath || (e.basePath = "/");
  } else if (jp(e)) {
    const n = Array.isArray(e.servers) && e.servers.length === 0;
    (!e.servers || n) && (e.servers = [Gm]);
  }
};
export {
  ne as S,
  Bx as r
};
