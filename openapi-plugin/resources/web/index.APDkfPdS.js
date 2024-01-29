var Y$ = Object.defineProperty;
var X$ = (e, t, r) => t in e ? Y$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var B = (e, t, r) => (X$(e, typeof t != "symbol" ? t + "" : t, r), r);
import { x as Q$, y as wt, q as Ar } from "./webapp.yF4PwBss.js";
const qm = "application/json, application/yaml", Is = "https://swagger.io", Hm = Object.freeze({
  url: "/"
});
var Z$ = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var i = 42;
  t[r] = i;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var s = Object.getOwnPropertySymbols(t);
  if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(t, r);
    if (o.value !== i || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, Zp = typeof Symbol < "u" && Symbol, eS = Z$, tS = function() {
  return typeof Zp != "function" || typeof Symbol != "function" || typeof Zp("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : eS();
}, eh = {
  foo: {}
}, rS = Object, nS = function() {
  return { __proto__: eh }.foo === eh.foo && !({ __proto__: null } instanceof rS);
}, iS = "Function.prototype.bind called on incompatible ", sS = Object.prototype.toString, oS = Math.max, aS = "[object Function]", th = function(t, r) {
  for (var n = [], i = 0; i < t.length; i += 1)
    n[i] = t[i];
  for (var s = 0; s < r.length; s += 1)
    n[s + t.length] = r[s];
  return n;
}, cS = function(t, r) {
  for (var n = [], i = r || 0, s = 0; i < t.length; i += 1, s += 1)
    n[s] = t[i];
  return n;
}, lS = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, uS = function(t) {
  var r = this;
  if (typeof r != "function" || sS.apply(r) !== aS)
    throw new TypeError(iS + r);
  for (var n = cS(arguments, 1), i, s = function() {
    if (this instanceof i) {
      var f = r.apply(
        this,
        th(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      t,
      th(n, arguments)
    );
  }, o = oS(0, r.length - n.length), a = [], c = 0; c < o; c++)
    a[c] = "$" + c;
  if (i = Function("binder", "return function (" + lS(a, ",") + "){ return binder.apply(this,arguments); }")(s), r.prototype) {
    var l = function() {
    };
    l.prototype = r.prototype, i.prototype = new l(), l.prototype = null;
  }
  return i;
}, fS = uS, ef = Function.prototype.bind || fS, pS = Function.prototype.call, hS = Object.prototype.hasOwnProperty, dS = ef, mS = dS.call(pS, hS), Y, en = SyntaxError, Gm = Function, Yr = TypeError, yc = function(e) {
  try {
    return Gm('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, vr = Object.getOwnPropertyDescriptor;
if (vr)
  try {
    vr({}, "");
  } catch {
    vr = null;
  }
var vc = function() {
  throw new Yr();
}, yS = vr ? function() {
  try {
    return arguments.callee, vc;
  } catch {
    try {
      return vr(arguments, "callee").get;
    } catch {
      return vc;
    }
  }
}() : vc, Dr = tS(), vS = nS(), Oe = Object.getPrototypeOf || (vS ? function(e) {
  return e.__proto__;
} : null), Hr = {}, gS = typeof Uint8Array > "u" || !Oe ? Y : Oe(Uint8Array), gr = {
  "%AggregateError%": typeof AggregateError > "u" ? Y : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Y : ArrayBuffer,
  "%ArrayIteratorPrototype%": Dr && Oe ? Oe([][Symbol.iterator]()) : Y,
  "%AsyncFromSyncIteratorPrototype%": Y,
  "%AsyncFunction%": Hr,
  "%AsyncGenerator%": Hr,
  "%AsyncGeneratorFunction%": Hr,
  "%AsyncIteratorPrototype%": Hr,
  "%Atomics%": typeof Atomics > "u" ? Y : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Y : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Y : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Y : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Y : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? Y : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Y : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Y : FinalizationRegistry,
  "%Function%": Gm,
  "%GeneratorFunction%": Hr,
  "%Int8Array%": typeof Int8Array > "u" ? Y : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Y : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Y : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Dr && Oe ? Oe(Oe([][Symbol.iterator]())) : Y,
  "%JSON%": typeof JSON == "object" ? JSON : Y,
  "%Map%": typeof Map > "u" ? Y : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Dr || !Oe ? Y : Oe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Y : Promise,
  "%Proxy%": typeof Proxy > "u" ? Y : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? Y : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Y : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Dr || !Oe ? Y : Oe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Y : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Dr && Oe ? Oe(""[Symbol.iterator]()) : Y,
  "%Symbol%": Dr ? Symbol : Y,
  "%SyntaxError%": en,
  "%ThrowTypeError%": yS,
  "%TypedArray%": gS,
  "%TypeError%": Yr,
  "%Uint8Array%": typeof Uint8Array > "u" ? Y : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Y : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Y : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Y : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? Y : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Y : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Y : WeakSet
};
if (Oe)
  try {
    null.error;
  } catch (e) {
    var bS = Oe(Oe(e));
    gr["%Error.prototype%"] = bS;
  }
var $S = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = yc("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = yc("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = yc("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && Oe && (r = Oe(i.prototype));
  }
  return gr[t] = r, r;
}, rh = {
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
}, ui = ef, Cs = mS, SS = ui.call(Function.call, Array.prototype.concat), ES = ui.call(Function.apply, Array.prototype.splice), nh = ui.call(Function.call, String.prototype.replace), Vs = ui.call(Function.call, String.prototype.slice), wS = ui.call(Function.call, RegExp.prototype.exec), OS = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, xS = /\\(\\)?/g, AS = function(t) {
  var r = Vs(t, 0, 1), n = Vs(t, -1);
  if (r === "%" && n !== "%")
    throw new en("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new en("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return nh(t, OS, function(s, o, a, c) {
    i[i.length] = a ? nh(c, xS, "$1") : o || s;
  }), i;
}, PS = function(t, r) {
  var n = t, i;
  if (Cs(rh, n) && (i = rh[n], n = "%" + i[0] + "%"), Cs(gr, n)) {
    var s = gr[n];
    if (s === Hr && (s = $S(n)), typeof s > "u" && !r)
      throw new Yr("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: s
    };
  }
  throw new en("intrinsic " + t + " does not exist!");
}, Pr = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Yr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Yr('"allowMissing" argument must be a boolean');
  if (wS(/^%?[^%]*%?$/, t) === null)
    throw new en("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = AS(t), i = n.length > 0 ? n[0] : "", s = PS("%" + i + "%", r), o = s.name, a = s.value, c = !1, l = s.alias;
  l && (i = l[0], ES(n, SS([0, 1], l)));
  for (var f = 1, u = !0; f < n.length; f += 1) {
    var h = n[f], p = Vs(h, 0, 1), d = Vs(h, -1);
    if ((p === '"' || p === "'" || p === "`" || d === '"' || d === "'" || d === "`") && p !== d)
      throw new en("property names with quotes must have matching quotes");
    if ((h === "constructor" || !u) && (c = !0), i += "." + h, o = "%" + i + "%", Cs(gr, o))
      a = gr[o];
    else if (a != null) {
      if (!(h in a)) {
        if (!r)
          throw new Yr("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (vr && f + 1 >= n.length) {
        var y = vr(a, h);
        u = !!y, u && "get" in y && !("originalValue" in y.get) ? a = y.get : a = a[h];
      } else
        u = Cs(a, h), a = a[h];
      u && !c && (gr[o] = a);
    }
  }
  return a;
}, Jm = { exports: {} }, jS = Pr, hl = jS("%Object.defineProperty%", !0), dl = function() {
  if (hl)
    try {
      return hl({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
dl.hasArrayLengthDefineBug = function() {
  if (!dl())
    return null;
  try {
    return hl([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var zm = dl, _S = Pr, bs = _S("%Object.getOwnPropertyDescriptor%", !0);
if (bs)
  try {
    bs([], "length");
  } catch {
    bs = null;
  }
var Km = bs, RS = zm(), tf = Pr, qn = RS && tf("%Object.defineProperty%", !0);
if (qn)
  try {
    qn({}, "a", { value: 1 });
  } catch {
    qn = !1;
  }
var TS = tf("%SyntaxError%"), Nr = tf("%TypeError%"), ih = Km, IS = function(t, r, n) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new Nr("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Nr("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Nr("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Nr("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Nr("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Nr("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, s = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, c = !!ih && ih(t, r);
  if (qn)
    qn(t, r, {
      configurable: o === null && c ? c.configurable : !o,
      enumerable: i === null && c ? c.enumerable : !i,
      value: n,
      writable: s === null && c ? c.writable : !s
    });
  else if (a || !i && !s && !o)
    t[r] = n;
  else
    throw new TS("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Wm = Pr, sh = IS, CS = zm(), oh = Km, ah = Wm("%TypeError%"), VS = Wm("%Math.floor%"), MS = function(t, r) {
  if (typeof t != "function")
    throw new ah("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || VS(r) !== r)
    throw new ah("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, s = !0;
  if ("length" in t && oh) {
    var o = oh(t, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (s = !1);
  }
  return (i || s || !n) && (CS ? sh(t, "length", r, !0, !0) : sh(t, "length", r)), t;
};
(function(e) {
  var t = ef, r = Pr, n = MS, i = r("%TypeError%"), s = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || t.call(o, s), c = r("%Object.defineProperty%", !0), l = r("%Math.max%");
  if (c)
    try {
      c({}, "a", { value: 1 });
    } catch {
      c = null;
    }
  e.exports = function(h) {
    if (typeof h != "function")
      throw new i("a function is required");
    var p = a(t, o, arguments);
    return n(
      p,
      1 + l(0, h.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return a(t, s, arguments);
  };
  c ? c(e.exports, "apply", { value: f }) : e.exports.apply = f;
})(Jm);
var FS = Jm.exports, Ym = Pr, Xm = FS, DS = Xm(Ym("String.prototype.indexOf")), NS = function(t, r) {
  var n = Ym(t, !!r);
  return typeof n == "function" && DS(t, ".prototype.") > -1 ? Xm(n) : n;
};
const LS = {}, kS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LS
}, Symbol.toStringTag, { value: "Module" })), US = /* @__PURE__ */ Q$(kS);
var rf = typeof Map == "function" && Map.prototype, gc = Object.getOwnPropertyDescriptor && rf ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Ms = rf && gc && typeof gc.get == "function" ? gc.get : null, ch = rf && Map.prototype.forEach, nf = typeof Set == "function" && Set.prototype, bc = Object.getOwnPropertyDescriptor && nf ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Fs = nf && bc && typeof bc.get == "function" ? bc.get : null, lh = nf && Set.prototype.forEach, BS = typeof WeakMap == "function" && WeakMap.prototype, Hn = BS ? WeakMap.prototype.has : null, qS = typeof WeakSet == "function" && WeakSet.prototype, Gn = qS ? WeakSet.prototype.has : null, HS = typeof WeakRef == "function" && WeakRef.prototype, uh = HS ? WeakRef.prototype.deref : null, GS = Boolean.prototype.valueOf, JS = Object.prototype.toString, zS = Function.prototype.toString, KS = String.prototype.match, sf = String.prototype.slice, Yt = String.prototype.replace, WS = String.prototype.toUpperCase, fh = String.prototype.toLowerCase, Qm = RegExp.prototype.test, ph = Array.prototype.concat, dt = Array.prototype.join, YS = Array.prototype.slice, hh = Math.floor, ml = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, $c = Object.getOwnPropertySymbols, yl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, tn = typeof Symbol == "function" && typeof Symbol.iterator == "object", Ve = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === tn || !0) ? Symbol.toStringTag : null, Zm = Object.prototype.propertyIsEnumerable, dh = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function mh(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Qm.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -hh(-e) : hh(e);
    if (n !== e) {
      var i = String(n), s = sf.call(t, i.length + 1);
      return Yt.call(i, r, "$&_") + "." + Yt.call(Yt.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Yt.call(t, r, "$&_");
}
var vl = US, yh = vl.custom, vh = ty(yh) ? yh : null, XS = function e(t, r, n, i) {
  var s = r || {};
  if (Kt(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Kt(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Kt(s, "customInspect") ? s.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Kt(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Kt(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = s.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return ny(t, s);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var c = String(t);
    return a ? mh(t, c) : c;
  }
  if (typeof t == "bigint") {
    var l = String(t) + "n";
    return a ? mh(t, l) : l;
  }
  var f = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof t == "object")
    return gl(t) ? "[Array]" : "[Object]";
  var u = mE(s, n);
  if (typeof i > "u")
    i = [];
  else if (ry(i, t) >= 0)
    return "[Circular]";
  function h(N, W, ye) {
    if (W && (i = YS.call(i), i.push(W)), ye) {
      var ce = {
        depth: s.depth
      };
      return Kt(s, "quoteStyle") && (ce.quoteStyle = s.quoteStyle), e(N, ce, n + 1, i);
    }
    return e(N, s, n + 1, i);
  }
  if (typeof t == "function" && !gh(t)) {
    var p = oE(t), d = ss(t, h);
    return "[Function" + (p ? ": " + p : " (anonymous)") + "]" + (d.length > 0 ? " { " + dt.call(d, ", ") + " }" : "");
  }
  if (ty(t)) {
    var y = tn ? Yt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : yl.call(t);
    return typeof t == "object" && !tn ? Mn(y) : y;
  }
  if (pE(t)) {
    for (var g = "<" + fh.call(String(t.nodeName)), b = t.attributes || [], E = 0; E < b.length; E++)
      g += " " + b[E].name + "=" + ey(QS(b[E].value), "double", s);
    return g += ">", t.childNodes && t.childNodes.length && (g += "..."), g += "</" + fh.call(String(t.nodeName)) + ">", g;
  }
  if (gl(t)) {
    if (t.length === 0)
      return "[]";
    var S = ss(t, h);
    return u && !dE(S) ? "[" + bl(S, u) + "]" : "[ " + dt.call(S, ", ") + " ]";
  }
  if (eE(t)) {
    var w = ss(t, h);
    return !("cause" in Error.prototype) && "cause" in t && !Zm.call(t, "cause") ? "{ [" + String(t) + "] " + dt.call(ph.call("[cause]: " + h(t.cause), w), ", ") + " }" : w.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + dt.call(w, ", ") + " }";
  }
  if (typeof t == "object" && o) {
    if (vh && typeof t[vh] == "function" && vl)
      return vl(t, { depth: f - n });
    if (o !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (aE(t)) {
    var _ = [];
    return ch && ch.call(t, function(N, W) {
      _.push(h(W, t, !0) + " => " + h(N, t));
    }), bh("Map", Ms.call(t), _, u);
  }
  if (uE(t)) {
    var F = [];
    return lh && lh.call(t, function(N) {
      F.push(h(N, t));
    }), bh("Set", Fs.call(t), F, u);
  }
  if (cE(t))
    return Sc("WeakMap");
  if (fE(t))
    return Sc("WeakSet");
  if (lE(t))
    return Sc("WeakRef");
  if (rE(t))
    return Mn(h(Number(t)));
  if (iE(t))
    return Mn(h(ml.call(t)));
  if (nE(t))
    return Mn(GS.call(t));
  if (tE(t))
    return Mn(h(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (t === wt)
    return "{ [object globalThis] }";
  if (!ZS(t) && !gh(t)) {
    var P = ss(t, h), I = dh ? dh(t) === Object.prototype : t instanceof Object || t.constructor === Object, C = t instanceof Object ? "" : "null prototype", J = !I && Ve && Object(t) === t && Ve in t ? sf.call(rr(t), 8, -1) : C ? "Object" : "", x = I || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", T = x + (J || C ? "[" + dt.call(ph.call([], J || [], C || []), ": ") + "] " : "");
    return P.length === 0 ? T + "{}" : u ? T + "{" + bl(P, u) + "}" : T + "{ " + dt.call(P, ", ") + " }";
  }
  return String(t);
};
function ey(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function QS(e) {
  return Yt.call(String(e), /"/g, "&quot;");
}
function gl(e) {
  return rr(e) === "[object Array]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function ZS(e) {
  return rr(e) === "[object Date]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function gh(e) {
  return rr(e) === "[object RegExp]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function eE(e) {
  return rr(e) === "[object Error]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function tE(e) {
  return rr(e) === "[object String]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function rE(e) {
  return rr(e) === "[object Number]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function nE(e) {
  return rr(e) === "[object Boolean]" && (!Ve || !(typeof e == "object" && Ve in e));
}
function ty(e) {
  if (tn)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !yl)
    return !1;
  try {
    return yl.call(e), !0;
  } catch {
  }
  return !1;
}
function iE(e) {
  if (!e || typeof e != "object" || !ml)
    return !1;
  try {
    return ml.call(e), !0;
  } catch {
  }
  return !1;
}
var sE = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Kt(e, t) {
  return sE.call(e, t);
}
function rr(e) {
  return JS.call(e);
}
function oE(e) {
  if (e.name)
    return e.name;
  var t = KS.call(zS.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function ry(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function aE(e) {
  if (!Ms || !e || typeof e != "object")
    return !1;
  try {
    Ms.call(e);
    try {
      Fs.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function cE(e) {
  if (!Hn || !e || typeof e != "object")
    return !1;
  try {
    Hn.call(e, Hn);
    try {
      Gn.call(e, Gn);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function lE(e) {
  if (!uh || !e || typeof e != "object")
    return !1;
  try {
    return uh.call(e), !0;
  } catch {
  }
  return !1;
}
function uE(e) {
  if (!Fs || !e || typeof e != "object")
    return !1;
  try {
    Fs.call(e);
    try {
      Ms.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function fE(e) {
  if (!Gn || !e || typeof e != "object")
    return !1;
  try {
    Gn.call(e, Gn);
    try {
      Hn.call(e, Hn);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function pE(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function ny(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return ny(sf.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = Yt.call(Yt.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, hE);
  return ey(i, "single", t);
}
function hE(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + WS.call(t.toString(16));
}
function Mn(e) {
  return "Object(" + e + ")";
}
function Sc(e) {
  return e + " { ? }";
}
function bh(e, t, r, n) {
  var i = n ? bl(r, n) : dt.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function dE(e) {
  for (var t = 0; t < e.length; t++)
    if (ry(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function mE(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = dt.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: dt.call(Array(t + 1), r)
  };
}
function bl(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + dt.call(e, "," + r) + `
` + t.prev;
}
function ss(e, t) {
  var r = gl(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = Kt(e, i) ? t(e[i], e) : "";
  }
  var s = typeof $c == "function" ? $c(e) : [], o;
  if (tn) {
    o = {};
    for (var a = 0; a < s.length; a++)
      o["$" + s[a]] = s[a];
  }
  for (var c in e)
    Kt(e, c) && (r && String(Number(c)) === c && c < e.length || tn && o["$" + c] instanceof Symbol || (Qm.call(/[^\w$]/, c) ? n.push(t(c, e) + ": " + t(e[c], e)) : n.push(c + ": " + t(e[c], e))));
  if (typeof $c == "function")
    for (var l = 0; l < s.length; l++)
      Zm.call(e, s[l]) && n.push("[" + t(s[l]) + "]: " + t(e[s[l]], e));
  return n;
}
var of = Pr, yn = NS, yE = XS, vE = of("%TypeError%"), os = of("%WeakMap%", !0), as = of("%Map%", !0), gE = yn("WeakMap.prototype.get", !0), bE = yn("WeakMap.prototype.set", !0), $E = yn("WeakMap.prototype.has", !0), SE = yn("Map.prototype.get", !0), EE = yn("Map.prototype.set", !0), wE = yn("Map.prototype.has", !0), af = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, OE = function(e, t) {
  var r = af(e, t);
  return r && r.value;
}, xE = function(e, t, r) {
  var n = af(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, AE = function(e, t) {
  return !!af(e, t);
}, PE = function() {
  var t, r, n, i = {
    assert: function(s) {
      if (!i.has(s))
        throw new vE("Side channel does not contain " + yE(s));
    },
    get: function(s) {
      if (os && s && (typeof s == "object" || typeof s == "function")) {
        if (t)
          return gE(t, s);
      } else if (as) {
        if (r)
          return SE(r, s);
      } else if (n)
        return OE(n, s);
    },
    has: function(s) {
      if (os && s && (typeof s == "object" || typeof s == "function")) {
        if (t)
          return $E(t, s);
      } else if (as) {
        if (r)
          return wE(r, s);
      } else if (n)
        return AE(n, s);
      return !1;
    },
    set: function(s, o) {
      os && s && (typeof s == "object" || typeof s == "function") ? (t || (t = new os()), bE(t, s, o)) : as ? (r || (r = new as()), EE(r, s, o)) : (n || (n = { key: {}, next: null }), xE(n, s, o));
    }
  };
  return i;
}, jE = String.prototype.replace, _E = /%20/g, Ec = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, cf = {
  default: Ec.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return jE.call(e, _E, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Ec.RFC1738,
  RFC3986: Ec.RFC3986
}, RE = cf, wc = Object.prototype.hasOwnProperty, dr = Array.isArray, ut = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), TE = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (dr(n)) {
      for (var i = [], s = 0; s < n.length; ++s)
        typeof n[s] < "u" && i.push(n[s]);
      r.obj[r.prop] = i;
    }
  }
}, iy = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, IE = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (dr(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !wc.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return dr(t) && !dr(r) && (i = iy(t, n)), dr(t) && dr(r) ? (r.forEach(function(s, o) {
    if (wc.call(t, o)) {
      var a = t[o];
      a && typeof a == "object" && s && typeof s == "object" ? t[o] = e(a, s, n) : t.push(s);
    } else
      t[o] = s;
  }), t) : Object.keys(r).reduce(function(s, o) {
    var a = r[o];
    return wc.call(s, o) ? s[o] = e(s[o], a, n) : s[o] = a, s;
  }, i);
}, CE = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, VE = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, ME = function(t, r, n, i, s) {
  if (t.length === 0)
    return t;
  var o = t;
  if (typeof t == "symbol" ? o = Symbol.prototype.toString.call(t) : typeof t != "string" && (o = String(t)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var a = "", c = 0; c < o.length; ++c) {
    var l = o.charCodeAt(c);
    if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || s === RE.RFC1738 && (l === 40 || l === 41)) {
      a += o.charAt(c);
      continue;
    }
    if (l < 128) {
      a = a + ut[l];
      continue;
    }
    if (l < 2048) {
      a = a + (ut[192 | l >> 6] + ut[128 | l & 63]);
      continue;
    }
    if (l < 55296 || l >= 57344) {
      a = a + (ut[224 | l >> 12] + ut[128 | l >> 6 & 63] + ut[128 | l & 63]);
      continue;
    }
    c += 1, l = 65536 + ((l & 1023) << 10 | o.charCodeAt(c) & 1023), a += ut[240 | l >> 18] + ut[128 | l >> 12 & 63] + ut[128 | l >> 6 & 63] + ut[128 | l & 63];
  }
  return a;
}, FE = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var s = r[i], o = s.obj[s.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
      var l = a[c], f = o[l];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: o, prop: l }), n.push(f));
    }
  return TE(r), t;
}, DE = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, NE = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, LE = function(t, r) {
  return [].concat(t, r);
}, kE = function(t, r) {
  if (dr(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, sy = {
  arrayToObject: iy,
  assign: CE,
  combine: LE,
  compact: FE,
  decode: VE,
  encode: ME,
  isBuffer: NE,
  isRegExp: DE,
  maybeMap: kE,
  merge: IE
}, oy = PE, $s = sy, Jn = cf, UE = Object.prototype.hasOwnProperty, $h = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, Et = Array.isArray, BE = Array.prototype.push, ay = function(e, t) {
  BE.apply(e, Et(t) ? t : [t]);
}, qE = Date.prototype.toISOString, Sh = Jn.default, Ie = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: $s.encode,
  encodeValuesOnly: !1,
  format: Sh,
  formatter: Jn.formatters[Sh],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return qE.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, HE = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Oc = {}, GE = function e(t, r, n, i, s, o, a, c, l, f, u, h, p, d, y, g) {
  for (var b = t, E = g, S = 0, w = !1; (E = E.get(Oc)) !== void 0 && !w; ) {
    var _ = E.get(t);
    if (S += 1, typeof _ < "u") {
      if (_ === S)
        throw new RangeError("Cyclic object value");
      w = !0;
    }
    typeof E.get(Oc) > "u" && (S = 0);
  }
  if (typeof c == "function" ? b = c(r, b) : b instanceof Date ? b = u(b) : n === "comma" && Et(b) && (b = $s.maybeMap(b, function(ce) {
    return ce instanceof Date ? u(ce) : ce;
  })), b === null) {
    if (s)
      return a && !d ? a(r, Ie.encoder, y, "key", h) : r;
    b = "";
  }
  if (HE(b) || $s.isBuffer(b)) {
    if (a) {
      var F = d ? r : a(r, Ie.encoder, y, "key", h);
      return [p(F) + "=" + p(a(b, Ie.encoder, y, "value", h))];
    }
    return [p(r) + "=" + p(String(b))];
  }
  var P = [];
  if (typeof b > "u")
    return P;
  var I;
  if (n === "comma" && Et(b))
    d && a && (b = $s.maybeMap(b, a)), I = [{ value: b.length > 0 ? b.join(",") || null : void 0 }];
  else if (Et(c))
    I = c;
  else {
    var C = Object.keys(b);
    I = l ? C.sort(l) : C;
  }
  for (var J = i && Et(b) && b.length === 1 ? r + "[]" : r, x = 0; x < I.length; ++x) {
    var T = I[x], N = typeof T == "object" && typeof T.value < "u" ? T.value : b[T];
    if (!(o && N === null)) {
      var W = Et(b) ? typeof n == "function" ? n(J, T) : J : J + (f ? "." + T : "[" + T + "]");
      g.set(t, S);
      var ye = oy();
      ye.set(Oc, g), ay(P, e(
        N,
        W,
        n,
        i,
        s,
        o,
        n === "comma" && d && Et(b) ? null : a,
        c,
        l,
        f,
        u,
        h,
        p,
        d,
        y,
        ye
      ));
    }
  }
  return P;
}, JE = function(t) {
  if (!t)
    return Ie;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || Ie.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Jn.default;
  if (typeof t.format < "u") {
    if (!UE.call(Jn.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = Jn.formatters[n], s = Ie.filter;
  return (typeof t.filter == "function" || Et(t.filter)) && (s = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Ie.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? Ie.allowDots : !!t.allowDots,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Ie.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? Ie.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : Ie.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : Ie.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Ie.encodeValuesOnly,
    filter: s,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Ie.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Ie.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Ie.strictNullHandling
  };
}, zE = function(e, t) {
  var r = e, n = JE(t), i, s;
  typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : Et(n.filter) && (s = n.filter, i = s);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var a;
  t && t.arrayFormat in $h ? a = t.arrayFormat : t && "indices" in t ? a = t.indices ? "indices" : "repeat" : a = "indices";
  var c = $h[a];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = c === "comma" && t && t.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var f = oy(), u = 0; u < i.length; ++u) {
    var h = i[u];
    n.skipNulls && r[h] === null || ay(o, GE(
      r[h],
      h,
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
  var p = o.join(n.delimiter), d = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? d += "utf8=%26%2310003%3B&" : d += "utf8=%E2%9C%93&"), p.length > 0 ? d + p : "";
}, rn = sy, $l = Object.prototype.hasOwnProperty, KE = Array.isArray, we = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: rn.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, WE = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, cy = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, YE = "utf8=%26%2310003%3B", XE = "utf8=%E2%9C%93", QE = function(t, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, s), a = -1, c, l = r.charset;
  if (r.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === XE ? l = "utf-8" : o[c] === YE && (l = "iso-8859-1"), a = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== a) {
      var f = o[c], u = f.indexOf("]="), h = u === -1 ? f.indexOf("=") : u + 1, p, d;
      h === -1 ? (p = r.decoder(f, we.decoder, l, "key"), d = r.strictNullHandling ? null : "") : (p = r.decoder(f.slice(0, h), we.decoder, l, "key"), d = rn.maybeMap(
        cy(f.slice(h + 1), r),
        function(y) {
          return r.decoder(y, we.decoder, l, "value");
        }
      )), d && r.interpretNumericEntities && l === "iso-8859-1" && (d = WE(d)), f.indexOf("[]=") > -1 && (d = KE(d) ? [d] : d), $l.call(n, p) ? n[p] = rn.combine(n[p], d) : n[p] = d;
    }
  return n;
}, ZE = function(e, t, r, n) {
  for (var i = n ? t : cy(t, r), s = e.length - 1; s >= 0; --s) {
    var o, a = e[s];
    if (a === "[]" && r.parseArrays)
      o = [].concat(i);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a, l = parseInt(c, 10);
      !r.parseArrays && c === "" ? o = { 0: i } : !isNaN(l) && a !== c && String(l) === c && l >= 0 && r.parseArrays && l <= r.arrayLimit ? (o = [], o[l] = i) : c !== "__proto__" && (o[c] = i);
    }
    i = o;
  }
  return i;
}, ew = function(t, r, n, i) {
  if (t) {
    var s = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, c = n.depth > 0 && o.exec(s), l = c ? s.slice(0, c.index) : s, f = [];
    if (l) {
      if (!n.plainObjects && $l.call(Object.prototype, l) && !n.allowPrototypes)
        return;
      f.push(l);
    }
    for (var u = 0; n.depth > 0 && (c = a.exec(s)) !== null && u < n.depth; ) {
      if (u += 1, !n.plainObjects && $l.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(c[1]);
    }
    return c && f.push("[" + s.slice(c.index) + "]"), ZE(f, r, n, i);
  }
}, tw = function(t) {
  if (!t)
    return we;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? we.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? we.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : we.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : we.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : we.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : we.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : we.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : we.decoder,
    delimiter: typeof t.delimiter == "string" || rn.isRegExp(t.delimiter) ? t.delimiter : we.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : we.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : we.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : we.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : we.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : we.strictNullHandling
  };
}, rw = function(e, t) {
  var r = tw(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? QE(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = Object.keys(n), o = 0; o < s.length; ++o) {
    var a = s[o], c = ew(a, n[a], r, typeof e == "string");
    i = rn.merge(i, c, r);
  }
  return r.allowSparse === !0 ? i : rn.compact(i);
}, nw = zE, iw = rw, sw = cf, ow = {
  formats: sw,
  parse: iw,
  stringify: nw
};
const Sl = /* @__PURE__ */ Ar(ow);
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function ly(e) {
  return typeof e > "u" || e === null;
}
function aw(e) {
  return typeof e == "object" && e !== null;
}
function cw(e) {
  return Array.isArray(e) ? e : ly(e) ? [] : [e];
}
function lw(e, t) {
  var r, n, i, s;
  if (t)
    for (s = Object.keys(t), r = 0, n = s.length; r < n; r += 1)
      i = s[r], e[i] = t[i];
  return e;
}
function uw(e, t) {
  var r = "", n;
  for (n = 0; n < t; n += 1)
    r += e;
  return r;
}
function fw(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
var pw = ly, hw = aw, dw = cw, mw = uw, yw = fw, vw = lw, Ee = {
  isNothing: pw,
  isObject: hw,
  toArray: dw,
  repeat: mw,
  isNegativeZero: yw,
  extend: vw
};
function uy(e, t) {
  var r = "", n = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), n + " " + r) : n;
}
function Qn(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = uy(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Qn.prototype = Object.create(Error.prototype);
Qn.prototype.constructor = Qn;
Qn.prototype.toString = function(t) {
  return this.name + ": " + uy(this, t);
};
var Ne = Qn;
function xc(e, t, r, n, i) {
  var s = "", o = "", a = Math.floor(i / 2) - 1;
  return n - t > a && (s = " ... ", t = n - a + s.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: s + e.slice(t, r).replace(/\t/g, "→") + o,
    pos: n - t + s.length
    // relative position
  };
}
function Ac(e, t) {
  return Ee.repeat(" ", t - e.length) + e;
}
function gw(e, t) {
  if (t = Object.create(t || null), !e.buffer)
    return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], i = [], s, o = -1; s = r.exec(e.buffer); )
    i.push(s.index), n.push(s.index + s[0].length), e.position <= s.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", c, l, f = Math.min(e.line + t.linesAfter, i.length).toString().length, u = t.maxLength - (t.indent + f + 3);
  for (c = 1; c <= t.linesBefore && !(o - c < 0); c++)
    l = xc(
      e.buffer,
      n[o - c],
      i[o - c],
      e.position - (n[o] - n[o - c]),
      u
    ), a = Ee.repeat(" ", t.indent) + Ac((e.line - c + 1).toString(), f) + " | " + l.str + `
` + a;
  for (l = xc(e.buffer, n[o], i[o], e.position, u), a += Ee.repeat(" ", t.indent) + Ac((e.line + 1).toString(), f) + " | " + l.str + `
`, a += Ee.repeat("-", t.indent + f + 3 + l.pos) + `^
`, c = 1; c <= t.linesAfter && !(o + c >= i.length); c++)
    l = xc(
      e.buffer,
      n[o + c],
      i[o + c],
      e.position - (n[o] - n[o + c]),
      u
    ), a += Ee.repeat(" ", t.indent) + Ac((e.line + c + 1).toString(), f) + " | " + l.str + `
`;
  return a.replace(/\n$/, "");
}
var bw = gw, $w = [
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
], Sw = [
  "scalar",
  "sequence",
  "mapping"
];
function Ew(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(n) {
      t[String(n)] = r;
    });
  }), t;
}
function ww(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if ($w.indexOf(r) === -1)
      throw new Ne('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = Ew(t.styleAliases || null), Sw.indexOf(this.kind) === -1)
    throw new Ne('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var Re = ww;
function Eh(e, t) {
  var r = [];
  return e[t].forEach(function(n) {
    var i = r.length;
    r.forEach(function(s, o) {
      s.tag === n.tag && s.kind === n.kind && s.multi === n.multi && (i = o);
    }), r[i] = n;
  }), r;
}
function Ow() {
  var e = {
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
  }, t, r;
  function n(i) {
    i.multi ? (e.multi[i.kind].push(i), e.multi.fallback.push(i)) : e[i.kind][i.tag] = e.fallback[i.tag] = i;
  }
  for (t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(n);
  return e;
}
function El(e) {
  return this.extend(e);
}
El.prototype.extend = function(t) {
  var r = [], n = [];
  if (t instanceof Re)
    n.push(t);
  else if (Array.isArray(t))
    n = n.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (n = n.concat(t.explicit));
  else
    throw new Ne("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(s) {
    if (!(s instanceof Re))
      throw new Ne("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new Ne("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new Ne("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(s) {
    if (!(s instanceof Re))
      throw new Ne("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var i = Object.create(El.prototype);
  return i.implicit = (this.implicit || []).concat(r), i.explicit = (this.explicit || []).concat(n), i.compiledImplicit = Eh(i, "implicit"), i.compiledExplicit = Eh(i, "explicit"), i.compiledTypeMap = Ow(i.compiledImplicit, i.compiledExplicit), i;
};
var fy = El, py = new Re("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
}), hy = new Re("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
}), dy = new Re("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
}), my = new fy({
  explicit: [
    py,
    hy,
    dy
  ]
});
function xw(e) {
  if (e === null)
    return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
function Aw() {
  return null;
}
function Pw(e) {
  return e === null;
}
var yy = new Re("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: xw,
  construct: Aw,
  predicate: Pw,
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
function jw(e) {
  if (e === null)
    return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
function _w(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function Rw(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var vy = new Re("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: jw,
  construct: _w,
  predicate: Rw,
  represent: {
    lowercase: function(e) {
      return e ? "true" : "false";
    },
    uppercase: function(e) {
      return e ? "TRUE" : "FALSE";
    },
    camelcase: function(e) {
      return e ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function Tw(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function Iw(e) {
  return 48 <= e && e <= 55;
}
function Cw(e) {
  return 48 <= e && e <= 57;
}
function Vw(e) {
  if (e === null)
    return !1;
  var t = e.length, r = 0, n = !1, i;
  if (!t)
    return !1;
  if (i = e[r], (i === "-" || i === "+") && (i = e[++r]), i === "0") {
    if (r + 1 === t)
      return !0;
    if (i = e[++r], i === "b") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (i !== "0" && i !== "1")
            return !1;
          n = !0;
        }
      return n && i !== "_";
    }
    if (i === "x") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (!Tw(e.charCodeAt(r)))
            return !1;
          n = !0;
        }
      return n && i !== "_";
    }
    if (i === "o") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (!Iw(e.charCodeAt(r)))
            return !1;
          n = !0;
        }
      return n && i !== "_";
    }
  }
  if (i === "_")
    return !1;
  for (; r < t; r++)
    if (i = e[r], i !== "_") {
      if (!Cw(e.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || i === "_");
}
function Mw(e) {
  var t = e, r = 1, n;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), n = t[0], (n === "-" || n === "+") && (n === "-" && (r = -1), t = t.slice(1), n = t[0]), t === "0")
    return 0;
  if (n === "0") {
    if (t[1] === "b")
      return r * parseInt(t.slice(2), 2);
    if (t[1] === "x")
      return r * parseInt(t.slice(2), 16);
    if (t[1] === "o")
      return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
function Fw(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Ee.isNegativeZero(e);
}
var gy = new Re("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Vw,
  construct: Mw,
  predicate: Fw,
  represent: {
    binary: function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    },
    octal: function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    },
    decimal: function(e) {
      return e.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), Dw = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Nw(e) {
  return !(e === null || !Dw.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
function Lw(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
var kw = /^[-+]?[0-9]+e/;
function Uw(e, t) {
  var r;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Ee.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), kw.test(r) ? r.replace("e", ".e") : r;
}
function Bw(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || Ee.isNegativeZero(e));
}
var by = new Re("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Nw,
  construct: Lw,
  predicate: Bw,
  represent: Uw,
  defaultStyle: "lowercase"
}), $y = my.extend({
  implicit: [
    yy,
    vy,
    gy,
    by
  ]
}), Sy = $y, Ey = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), wy = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function qw(e) {
  return e === null ? !1 : Ey.exec(e) !== null || wy.exec(e) !== null;
}
function Hw(e) {
  var t, r, n, i, s, o, a, c = 0, l = null, f, u, h;
  if (t = Ey.exec(e), t === null && (t = wy.exec(e)), t === null)
    throw new Error("Date resolve error");
  if (r = +t[1], n = +t[2] - 1, i = +t[3], !t[4])
    return new Date(Date.UTC(r, n, i));
  if (s = +t[4], o = +t[5], a = +t[6], t[7]) {
    for (c = t[7].slice(0, 3); c.length < 3; )
      c += "0";
    c = +c;
  }
  return t[9] && (f = +t[10], u = +(t[11] || 0), l = (f * 60 + u) * 6e4, t[9] === "-" && (l = -l)), h = new Date(Date.UTC(r, n, i, s, o, a, c)), l && h.setTime(h.getTime() - l), h;
}
function Gw(e) {
  return e.toISOString();
}
var Oy = new Re("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: qw,
  construct: Hw,
  instanceOf: Date,
  represent: Gw
});
function Jw(e) {
  return e === "<<" || e === null;
}
var xy = new Re("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Jw
}), lf = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function zw(e) {
  if (e === null)
    return !1;
  var t, r, n = 0, i = e.length, s = lf;
  for (r = 0; r < i; r++)
    if (t = s.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0)
        return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function Kw(e) {
  var t, r, n = e.replace(/[\r\n=]/g, ""), i = n.length, s = lf, o = 0, a = [];
  for (t = 0; t < i; t++)
    t % 4 === 0 && t && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | s.indexOf(n.charAt(t));
  return r = i % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function Ww(e) {
  var t = "", r = 0, n, i, s = e.length, o = lf;
  for (n = 0; n < s; n++)
    n % 3 === 0 && n && (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]), r = (r << 8) + e[n];
  return i = s % 3, i === 0 ? (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]) : i === 2 ? (t += o[r >> 10 & 63], t += o[r >> 4 & 63], t += o[r << 2 & 63], t += o[64]) : i === 1 && (t += o[r >> 2 & 63], t += o[r << 4 & 63], t += o[64], t += o[64]), t;
}
function Yw(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
var Ay = new Re("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: zw,
  construct: Kw,
  predicate: Yw,
  represent: Ww
}), Xw = Object.prototype.hasOwnProperty, Qw = Object.prototype.toString;
function Zw(e) {
  if (e === null)
    return !0;
  var t = [], r, n, i, s, o, a = e;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (i = a[r], o = !1, Qw.call(i) !== "[object Object]")
      return !1;
    for (s in i)
      if (Xw.call(i, s))
        if (!o)
          o = !0;
        else
          return !1;
    if (!o)
      return !1;
    if (t.indexOf(s) === -1)
      t.push(s);
    else
      return !1;
  }
  return !0;
}
function eO(e) {
  return e !== null ? e : [];
}
var Py = new Re("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Zw,
  construct: eO
}), tO = Object.prototype.toString;
function rO(e) {
  if (e === null)
    return !0;
  var t, r, n, i, s, o = e;
  for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1) {
    if (n = o[t], tO.call(n) !== "[object Object]" || (i = Object.keys(n), i.length !== 1))
      return !1;
    s[t] = [i[0], n[i[0]]];
  }
  return !0;
}
function nO(e) {
  if (e === null)
    return [];
  var t, r, n, i, s, o = e;
  for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1)
    n = o[t], i = Object.keys(n), s[t] = [i[0], n[i[0]]];
  return s;
}
var jy = new Re("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: rO,
  construct: nO
}), iO = Object.prototype.hasOwnProperty;
function sO(e) {
  if (e === null)
    return !0;
  var t, r = e;
  for (t in r)
    if (iO.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
function oO(e) {
  return e !== null ? e : {};
}
var _y = new Re("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: sO,
  construct: oO
}), uf = Sy.extend({
  implicit: [
    Oy,
    xy
  ],
  explicit: [
    Ay,
    Py,
    jy,
    _y
  ]
}), Qt = Object.prototype.hasOwnProperty, Ds = 1, Ry = 2, Ty = 3, Ns = 4, Pc = 1, aO = 2, wh = 3, cO = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, lO = /[\x85\u2028\u2029]/, uO = /[,\[\]\{\}]/, Iy = /^(?:!|!!|![a-z\-]+!)$/i, Cy = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Oh(e) {
  return Object.prototype.toString.call(e);
}
function mt(e) {
  return e === 10 || e === 13;
}
function br(e) {
  return e === 9 || e === 32;
}
function Be(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function Jr(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function fO(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
function pO(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function hO(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function xh(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function dO(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
var Vy = new Array(256), My = new Array(256);
for (var Lr = 0; Lr < 256; Lr++)
  Vy[Lr] = xh(Lr) ? 1 : 0, My[Lr] = xh(Lr);
function mO(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || uf, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Fy(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = bw(r), new Ne(t, r);
}
function V(e, t) {
  throw Fy(e, t);
}
function Ls(e, t) {
  e.onWarning && e.onWarning.call(null, Fy(e, t));
}
var Ah = {
  YAML: function(t, r, n) {
    var i, s, o;
    t.version !== null && V(t, "duplication of %YAML directive"), n.length !== 1 && V(t, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), i === null && V(t, "ill-formed argument of the YAML directive"), s = parseInt(i[1], 10), o = parseInt(i[2], 10), s !== 1 && V(t, "unacceptable YAML version of the document"), t.version = n[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Ls(t, "unsupported YAML version of the document");
  },
  TAG: function(t, r, n) {
    var i, s;
    n.length !== 2 && V(t, "TAG directive accepts exactly two arguments"), i = n[0], s = n[1], Iy.test(i) || V(t, "ill-formed tag handle (first argument) of the TAG directive"), Qt.call(t.tagMap, i) && V(t, 'there is a previously declared suffix for "' + i + '" tag handle'), Cy.test(s) || V(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      V(t, "tag prefix is malformed: " + s);
    }
    t.tagMap[i] = s;
  }
};
function Xt(e, t, r, n) {
  var i, s, o, a;
  if (t < r) {
    if (a = e.input.slice(t, r), n)
      for (i = 0, s = a.length; i < s; i += 1)
        o = a.charCodeAt(i), o === 9 || 32 <= o && o <= 1114111 || V(e, "expected valid JSON character");
    else
      cO.test(a) && V(e, "the stream contains non-printable characters");
    e.result += a;
  }
}
function Ph(e, t, r, n) {
  var i, s, o, a;
  for (Ee.isObject(r) || V(e, "cannot merge mappings; the provided source object is unacceptable"), i = Object.keys(r), o = 0, a = i.length; o < a; o += 1)
    s = i[o], Qt.call(t, s) || (t[s] = r[s], n[s] = !0);
}
function zr(e, t, r, n, i, s, o, a, c) {
  var l, f;
  if (Array.isArray(i))
    for (i = Array.prototype.slice.call(i), l = 0, f = i.length; l < f; l += 1)
      Array.isArray(i[l]) && V(e, "nested arrays are not supported inside keys"), typeof i == "object" && Oh(i[l]) === "[object Object]" && (i[l] = "[object Object]");
  if (typeof i == "object" && Oh(i) === "[object Object]" && (i = "[object Object]"), i = String(i), t === null && (t = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (l = 0, f = s.length; l < f; l += 1)
        Ph(e, t, s[l], r);
    else
      Ph(e, t, s, r);
  else
    !e.json && !Qt.call(r, i) && Qt.call(t, i) && (e.line = o || e.line, e.lineStart = a || e.lineStart, e.position = c || e.position, V(e, "duplicated mapping key")), i === "__proto__" ? Object.defineProperty(t, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: s
    }) : t[i] = s, delete r[i];
  return t;
}
function ff(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : V(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function be(e, t, r) {
  for (var n = 0, i = e.input.charCodeAt(e.position); i !== 0; ) {
    for (; br(i); )
      i === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), i = e.input.charCodeAt(++e.position);
    if (t && i === 35)
      do
        i = e.input.charCodeAt(++e.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (mt(i))
      for (ff(e), i = e.input.charCodeAt(e.position), n++, e.lineIndent = 0; i === 32; )
        e.lineIndent++, i = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && e.lineIndent < r && Ls(e, "deficient indentation"), n;
}
function Zo(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Be(r)));
}
function pf(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += Ee.repeat(`
`, t - 1));
}
function yO(e, t, r) {
  var n, i, s, o, a, c, l, f, u = e.kind, h = e.result, p;
  if (p = e.input.charCodeAt(e.position), Be(p) || Jr(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (i = e.input.charCodeAt(e.position + 1), Be(i) || r && Jr(i)))
    return !1;
  for (e.kind = "scalar", e.result = "", s = o = e.position, a = !1; p !== 0; ) {
    if (p === 58) {
      if (i = e.input.charCodeAt(e.position + 1), Be(i) || r && Jr(i))
        break;
    } else if (p === 35) {
      if (n = e.input.charCodeAt(e.position - 1), Be(n))
        break;
    } else {
      if (e.position === e.lineStart && Zo(e) || r && Jr(p))
        break;
      if (mt(p))
        if (c = e.line, l = e.lineStart, f = e.lineIndent, be(e, !1, -1), e.lineIndent >= t) {
          a = !0, p = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = o, e.line = c, e.lineStart = l, e.lineIndent = f;
          break;
        }
    }
    a && (Xt(e, s, o, !1), pf(e, e.line - c), s = o = e.position, a = !1), br(p) || (o = e.position + 1), p = e.input.charCodeAt(++e.position);
  }
  return Xt(e, s, o, !1), e.result ? !0 : (e.kind = u, e.result = h, !1);
}
function vO(e, t) {
  var r, n, i;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, n = i = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (Xt(e, n, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        n = e.position, e.position++, i = e.position;
      else
        return !0;
    else
      mt(r) ? (Xt(e, n, i, !0), pf(e, be(e, !1, t)), n = i = e.position) : e.position === e.lineStart && Zo(e) ? V(e, "unexpected end of the document within a single quoted scalar") : (e.position++, i = e.position);
  V(e, "unexpected end of the stream within a single quoted scalar");
}
function gO(e, t) {
  var r, n, i, s, o, a;
  if (a = e.input.charCodeAt(e.position), a !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = n = e.position; (a = e.input.charCodeAt(e.position)) !== 0; ) {
    if (a === 34)
      return Xt(e, r, e.position, !0), e.position++, !0;
    if (a === 92) {
      if (Xt(e, r, e.position, !0), a = e.input.charCodeAt(++e.position), mt(a))
        be(e, !1, t);
      else if (a < 256 && Vy[a])
        e.result += My[a], e.position++;
      else if ((o = pO(a)) > 0) {
        for (i = o, s = 0; i > 0; i--)
          a = e.input.charCodeAt(++e.position), (o = fO(a)) >= 0 ? s = (s << 4) + o : V(e, "expected hexadecimal character");
        e.result += dO(s), e.position++;
      } else
        V(e, "unknown escape sequence");
      r = n = e.position;
    } else
      mt(a) ? (Xt(e, r, n, !0), pf(e, be(e, !1, t)), r = n = e.position) : e.position === e.lineStart && Zo(e) ? V(e, "unexpected end of the document within a double quoted scalar") : (e.position++, n = e.position);
  }
  V(e, "unexpected end of the stream within a double quoted scalar");
}
function bO(e, t) {
  var r = !0, n, i, s, o = e.tag, a, c = e.anchor, l, f, u, h, p, d = /* @__PURE__ */ Object.create(null), y, g, b, E;
  if (E = e.input.charCodeAt(e.position), E === 91)
    f = 93, p = !1, a = [];
  else if (E === 123)
    f = 125, p = !0, a = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = a), E = e.input.charCodeAt(++e.position); E !== 0; ) {
    if (be(e, !0, t), E = e.input.charCodeAt(e.position), E === f)
      return e.position++, e.tag = o, e.anchor = c, e.kind = p ? "mapping" : "sequence", e.result = a, !0;
    r ? E === 44 && V(e, "expected the node content, but found ','") : V(e, "missed comma between flow collection entries"), g = y = b = null, u = h = !1, E === 63 && (l = e.input.charCodeAt(e.position + 1), Be(l) && (u = h = !0, e.position++, be(e, !0, t))), n = e.line, i = e.lineStart, s = e.position, nn(e, t, Ds, !1, !0), g = e.tag, y = e.result, be(e, !0, t), E = e.input.charCodeAt(e.position), (h || e.line === n) && E === 58 && (u = !0, E = e.input.charCodeAt(++e.position), be(e, !0, t), nn(e, t, Ds, !1, !0), b = e.result), p ? zr(e, a, d, g, y, b, n, i, s) : u ? a.push(zr(e, null, d, g, y, b, n, i, s)) : a.push(y), be(e, !0, t), E = e.input.charCodeAt(e.position), E === 44 ? (r = !0, E = e.input.charCodeAt(++e.position)) : r = !1;
  }
  V(e, "unexpected end of the stream within a flow collection");
}
function $O(e, t) {
  var r, n, i = Pc, s = !1, o = !1, a = t, c = 0, l = !1, f, u;
  if (u = e.input.charCodeAt(e.position), u === 124)
    n = !1;
  else if (u === 62)
    n = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; u !== 0; )
    if (u = e.input.charCodeAt(++e.position), u === 43 || u === 45)
      Pc === i ? i = u === 43 ? wh : aO : V(e, "repeat of a chomping mode identifier");
    else if ((f = hO(u)) >= 0)
      f === 0 ? V(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? V(e, "repeat of an indentation width identifier") : (a = t + f - 1, o = !0);
    else
      break;
  if (br(u)) {
    do
      u = e.input.charCodeAt(++e.position);
    while (br(u));
    if (u === 35)
      do
        u = e.input.charCodeAt(++e.position);
      while (!mt(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (ff(e), e.lineIndent = 0, u = e.input.charCodeAt(e.position); (!o || e.lineIndent < a) && u === 32; )
      e.lineIndent++, u = e.input.charCodeAt(++e.position);
    if (!o && e.lineIndent > a && (a = e.lineIndent), mt(u)) {
      c++;
      continue;
    }
    if (e.lineIndent < a) {
      i === wh ? e.result += Ee.repeat(`
`, s ? 1 + c : c) : i === Pc && s && (e.result += `
`);
      break;
    }
    for (n ? br(u) ? (l = !0, e.result += Ee.repeat(`
`, s ? 1 + c : c)) : l ? (l = !1, e.result += Ee.repeat(`
`, c + 1)) : c === 0 ? s && (e.result += " ") : e.result += Ee.repeat(`
`, c) : e.result += Ee.repeat(`
`, s ? 1 + c : c), s = !0, o = !0, c = 0, r = e.position; !mt(u) && u !== 0; )
      u = e.input.charCodeAt(++e.position);
    Xt(e, r, e.position, !1);
  }
  return !0;
}
function jh(e, t) {
  var r, n = e.tag, i = e.anchor, s = [], o, a = !1, c;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = s), c = e.input.charCodeAt(e.position); c !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, V(e, "tab characters must not be used in indentation")), !(c !== 45 || (o = e.input.charCodeAt(e.position + 1), !Be(o)))); ) {
    if (a = !0, e.position++, be(e, !0, -1) && e.lineIndent <= t) {
      s.push(null), c = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, nn(e, t, Ty, !1, !0), s.push(e.result), be(e, !0, -1), c = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && c !== 0)
      V(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return a ? (e.tag = n, e.anchor = i, e.kind = "sequence", e.result = s, !0) : !1;
}
function SO(e, t, r) {
  var n, i, s, o, a, c, l = e.tag, f = e.anchor, u = {}, h = /* @__PURE__ */ Object.create(null), p = null, d = null, y = null, g = !1, b = !1, E;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = u), E = e.input.charCodeAt(e.position); E !== 0; ) {
    if (!g && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, V(e, "tab characters must not be used in indentation")), n = e.input.charCodeAt(e.position + 1), s = e.line, (E === 63 || E === 58) && Be(n))
      E === 63 ? (g && (zr(e, u, h, p, d, null, o, a, c), p = d = y = null), b = !0, g = !0, i = !0) : g ? (g = !1, i = !0) : V(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, E = n;
    else {
      if (o = e.line, a = e.lineStart, c = e.position, !nn(e, r, Ry, !1, !0))
        break;
      if (e.line === s) {
        for (E = e.input.charCodeAt(e.position); br(E); )
          E = e.input.charCodeAt(++e.position);
        if (E === 58)
          E = e.input.charCodeAt(++e.position), Be(E) || V(e, "a whitespace character is expected after the key-value separator within a block mapping"), g && (zr(e, u, h, p, d, null, o, a, c), p = d = y = null), b = !0, g = !1, i = !1, p = e.tag, d = e.result;
        else if (b)
          V(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = l, e.anchor = f, !0;
      } else if (b)
        V(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = l, e.anchor = f, !0;
    }
    if ((e.line === s || e.lineIndent > t) && (g && (o = e.line, a = e.lineStart, c = e.position), nn(e, t, Ns, !0, i) && (g ? d = e.result : y = e.result), g || (zr(e, u, h, p, d, y, o, a, c), p = d = y = null), be(e, !0, -1), E = e.input.charCodeAt(e.position)), (e.line === s || e.lineIndent > t) && E !== 0)
      V(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return g && zr(e, u, h, p, d, null, o, a, c), b && (e.tag = l, e.anchor = f, e.kind = "mapping", e.result = u), b;
}
function EO(e) {
  var t, r = !1, n = !1, i, s, o;
  if (o = e.input.charCodeAt(e.position), o !== 33)
    return !1;
  if (e.tag !== null && V(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), o === 60 ? (r = !0, o = e.input.charCodeAt(++e.position)) : o === 33 ? (n = !0, i = "!!", o = e.input.charCodeAt(++e.position)) : i = "!", t = e.position, r) {
    do
      o = e.input.charCodeAt(++e.position);
    while (o !== 0 && o !== 62);
    e.position < e.length ? (s = e.input.slice(t, e.position), o = e.input.charCodeAt(++e.position)) : V(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Be(o); )
      o === 33 && (n ? V(e, "tag suffix cannot contain exclamation marks") : (i = e.input.slice(t - 1, e.position + 1), Iy.test(i) || V(e, "named tag handle cannot contain such characters"), n = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
    s = e.input.slice(t, e.position), uO.test(s) && V(e, "tag suffix cannot contain flow indicator characters");
  }
  s && !Cy.test(s) && V(e, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    V(e, "tag name is malformed: " + s);
  }
  return r ? e.tag = s : Qt.call(e.tagMap, i) ? e.tag = e.tagMap[i] + s : i === "!" ? e.tag = "!" + s : i === "!!" ? e.tag = "tag:yaml.org,2002:" + s : V(e, 'undeclared tag handle "' + i + '"'), !0;
}
function wO(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38)
    return !1;
  for (e.anchor !== null && V(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Be(r) && !Jr(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && V(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function OO(e) {
  var t, r, n;
  if (n = e.input.charCodeAt(e.position), n !== 42)
    return !1;
  for (n = e.input.charCodeAt(++e.position), t = e.position; n !== 0 && !Be(n) && !Jr(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position === t && V(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), Qt.call(e.anchorMap, r) || V(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], be(e, !0, -1), !0;
}
function nn(e, t, r, n, i) {
  var s, o, a, c = 1, l = !1, f = !1, u, h, p, d, y, g;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, s = o = a = Ns === r || Ty === r, n && be(e, !0, -1) && (l = !0, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)), c === 1)
    for (; EO(e) || wO(e); )
      be(e, !0, -1) ? (l = !0, a = s, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)) : a = !1;
  if (a && (a = l || i), (c === 1 || Ns === r) && (Ds === r || Ry === r ? y = t : y = t + 1, g = e.position - e.lineStart, c === 1 ? a && (jh(e, g) || SO(e, g, y)) || bO(e, y) ? f = !0 : (o && $O(e, y) || vO(e, y) || gO(e, y) ? f = !0 : OO(e) ? (f = !0, (e.tag !== null || e.anchor !== null) && V(e, "alias node should not have any properties")) : yO(e, y, Ds === r) && (f = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : c === 0 && (f = a && jh(e, g))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && V(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), u = 0, h = e.implicitTypes.length; u < h; u += 1)
      if (d = e.implicitTypes[u], d.resolve(e.result)) {
        e.result = d.construct(e.result), e.tag = d.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (Qt.call(e.typeMap[e.kind || "fallback"], e.tag))
      d = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (d = null, p = e.typeMap.multi[e.kind || "fallback"], u = 0, h = p.length; u < h; u += 1)
        if (e.tag.slice(0, p[u].tag.length) === p[u].tag) {
          d = p[u];
          break;
        }
    d || V(e, "unknown tag !<" + e.tag + ">"), e.result !== null && d.kind !== e.kind && V(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + d.kind + '", not "' + e.kind + '"'), d.resolve(e.result, e.tag) ? (e.result = d.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : V(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || f;
}
function xO(e) {
  var t = e.position, r, n, i, s = !1, o;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (o = e.input.charCodeAt(e.position)) !== 0 && (be(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37)); ) {
    for (s = !0, o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !Be(o); )
      o = e.input.charCodeAt(++e.position);
    for (n = e.input.slice(r, e.position), i = [], n.length < 1 && V(e, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; br(o); )
        o = e.input.charCodeAt(++e.position);
      if (o === 35) {
        do
          o = e.input.charCodeAt(++e.position);
        while (o !== 0 && !mt(o));
        break;
      }
      if (mt(o))
        break;
      for (r = e.position; o !== 0 && !Be(o); )
        o = e.input.charCodeAt(++e.position);
      i.push(e.input.slice(r, e.position));
    }
    o !== 0 && ff(e), Qt.call(Ah, n) ? Ah[n](e, n, i) : Ls(e, 'unknown document directive "' + n + '"');
  }
  if (be(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, be(e, !0, -1)) : s && V(e, "directives end mark is expected"), nn(e, e.lineIndent - 1, Ns, !1, !0), be(e, !0, -1), e.checkLineBreaks && lO.test(e.input.slice(t, e.position)) && Ls(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Zo(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, be(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    V(e, "end of the stream or a document separator is expected");
  else
    return;
}
function Dy(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new mO(e, t), n = e.indexOf("\0");
  for (n !== -1 && (r.position = n, V(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    xO(r);
  return r.documents;
}
function AO(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var n = Dy(e, r);
  if (typeof t != "function")
    return n;
  for (var i = 0, s = n.length; i < s; i += 1)
    t(n[i]);
}
function PO(e, t) {
  var r = Dy(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Ne("expected a single document in the stream, but found more");
  }
}
var jO = AO, _O = PO, Ny = {
  loadAll: jO,
  load: _O
}, Ly = Object.prototype.toString, ky = Object.prototype.hasOwnProperty, hf = 65279, RO = 9, Zn = 10, TO = 13, IO = 32, CO = 33, VO = 34, wl = 35, MO = 37, FO = 38, DO = 39, NO = 42, Uy = 44, LO = 45, ks = 58, kO = 61, UO = 62, BO = 63, qO = 64, By = 91, qy = 93, HO = 96, Hy = 123, GO = 124, Gy = 125, Me = {};
Me[0] = "\\0";
Me[7] = "\\a";
Me[8] = "\\b";
Me[9] = "\\t";
Me[10] = "\\n";
Me[11] = "\\v";
Me[12] = "\\f";
Me[13] = "\\r";
Me[27] = "\\e";
Me[34] = '\\"';
Me[92] = "\\\\";
Me[133] = "\\N";
Me[160] = "\\_";
Me[8232] = "\\L";
Me[8233] = "\\P";
var JO = [
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
], zO = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function KO(e, t) {
  var r, n, i, s, o, a, c;
  if (t === null)
    return {};
  for (r = {}, n = Object.keys(t), i = 0, s = n.length; i < s; i += 1)
    o = n[i], a = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), c = e.compiledTypeMap.fallback[o], c && ky.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[o] = a;
  return r;
}
function WO(e) {
  var t, r, n;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", n = 2;
  else if (e <= 65535)
    r = "u", n = 4;
  else if (e <= 4294967295)
    r = "U", n = 8;
  else
    throw new Ne("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Ee.repeat("0", n - t.length) + t;
}
var YO = 1, ei = 2;
function XO(e) {
  this.schema = e.schema || uf, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = Ee.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = KO(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? ei : YO, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function _h(e, t) {
  for (var r = Ee.repeat(" ", t), n = 0, i = -1, s = "", o, a = e.length; n < a; )
    i = e.indexOf(`
`, n), i === -1 ? (o = e.slice(n), n = a) : (o = e.slice(n, i + 1), n = i + 1), o.length && o !== `
` && (s += r), s += o;
  return s;
}
function Ol(e, t) {
  return `
` + Ee.repeat(" ", e.indent * t);
}
function QO(e, t) {
  var r, n, i;
  for (r = 0, n = e.implicitTypes.length; r < n; r += 1)
    if (i = e.implicitTypes[r], i.resolve(t))
      return !0;
  return !1;
}
function Us(e) {
  return e === IO || e === RO;
}
function ti(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== hf || 65536 <= e && e <= 1114111;
}
function Rh(e) {
  return ti(e) && e !== hf && e !== TO && e !== Zn;
}
function Th(e, t, r) {
  var n = Rh(e), i = n && !Us(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && e !== Uy && e !== By && e !== qy && e !== Hy && e !== Gy) && e !== wl && !(t === ks && !i) || Rh(t) && !Us(t) && e === wl || t === ks && i
  );
}
function ZO(e) {
  return ti(e) && e !== hf && !Us(e) && e !== LO && e !== BO && e !== ks && e !== Uy && e !== By && e !== qy && e !== Hy && e !== Gy && e !== wl && e !== FO && e !== NO && e !== CO && e !== GO && e !== kO && e !== UO && e !== DO && e !== VO && e !== MO && e !== qO && e !== HO;
}
function ex(e) {
  return !Us(e) && e !== ks;
}
function Ln(e, t) {
  var r = e.charCodeAt(t), n;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function Jy(e) {
  var t = /^\n* /;
  return t.test(e);
}
var zy = 1, xl = 2, Ky = 3, Wy = 4, Gr = 5;
function tx(e, t, r, n, i, s, o, a) {
  var c, l = 0, f = null, u = !1, h = !1, p = n !== -1, d = -1, y = ZO(Ln(e, 0)) && ex(Ln(e, e.length - 1));
  if (t || o)
    for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
      if (l = Ln(e, c), !ti(l))
        return Gr;
      y = y && Th(l, f, a), f = l;
    }
  else {
    for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
      if (l = Ln(e, c), l === Zn)
        u = !0, p && (h = h || // Foldable line = too long, and not more-indented.
        c - d - 1 > n && e[d + 1] !== " ", d = c);
      else if (!ti(l))
        return Gr;
      y = y && Th(l, f, a), f = l;
    }
    h = h || p && c - d - 1 > n && e[d + 1] !== " ";
  }
  return !u && !h ? y && !o && !i(e) ? zy : s === ei ? Gr : xl : r > 9 && Jy(e) ? Gr : o ? s === ei ? Gr : xl : h ? Wy : Ky;
}
function rx(e, t, r, n, i) {
  e.dump = function() {
    if (t.length === 0)
      return e.quotingType === ei ? '""' : "''";
    if (!e.noCompatMode && (JO.indexOf(t) !== -1 || zO.test(t)))
      return e.quotingType === ei ? '"' + t + '"' : "'" + t + "'";
    var s = e.indent * Math.max(1, r), o = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s), a = n || e.flowLevel > -1 && r >= e.flowLevel;
    function c(l) {
      return QO(e, l);
    }
    switch (tx(
      t,
      a,
      e.indent,
      o,
      c,
      e.quotingType,
      e.forceQuotes && !n,
      i
    )) {
      case zy:
        return t;
      case xl:
        return "'" + t.replace(/'/g, "''") + "'";
      case Ky:
        return "|" + Ih(t, e.indent) + Ch(_h(t, s));
      case Wy:
        return ">" + Ih(t, e.indent) + Ch(_h(nx(t, o), s));
      case Gr:
        return '"' + ix(t) + '"';
      default:
        throw new Ne("impossible error: invalid scalar style");
    }
  }();
}
function Ih(e, t) {
  var r = Jy(e) ? String(t) : "", n = e[e.length - 1] === `
`, i = n && (e[e.length - 2] === `
` || e === `
`), s = i ? "+" : n ? "" : "-";
  return r + s + `
`;
}
function Ch(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function nx(e, t) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var l = e.indexOf(`
`);
    return l = l !== -1 ? l : e.length, r.lastIndex = l, Vh(e.slice(0, l), t);
  }(), i = e[0] === `
` || e[0] === " ", s, o; o = r.exec(e); ) {
    var a = o[1], c = o[2];
    s = c[0] === " ", n += a + (!i && !s && c !== "" ? `
` : "") + Vh(c, t), i = s;
  }
  return n;
}
function Vh(e, t) {
  if (e === "" || e[0] === " ")
    return e;
  for (var r = / [^ ]/g, n, i = 0, s, o = 0, a = 0, c = ""; n = r.exec(e); )
    a = n.index, a - i > t && (s = o > i ? o : a, c += `
` + e.slice(i, s), i = s + 1), o = a;
  return c += `
`, e.length - i > t && o > i ? c += e.slice(i, o) + `
` + e.slice(o + 1) : c += e.slice(i), c.slice(1);
}
function ix(e) {
  for (var t = "", r = 0, n, i = 0; i < e.length; r >= 65536 ? i += 2 : i++)
    r = Ln(e, i), n = Me[r], !n && ti(r) ? (t += e[i], r >= 65536 && (t += e[i + 1])) : t += n || WO(r);
  return t;
}
function sx(e, t, r) {
  var n = "", i = e.tag, s, o, a;
  for (s = 0, o = r.length; s < o; s += 1)
    a = r[s], e.replacer && (a = e.replacer.call(r, String(s), a)), (_t(e, t, a, !1, !1) || typeof a > "u" && _t(e, t, null, !1, !1)) && (n !== "" && (n += "," + (e.condenseFlow ? "" : " ")), n += e.dump);
  e.tag = i, e.dump = "[" + n + "]";
}
function Mh(e, t, r, n) {
  var i = "", s = e.tag, o, a, c;
  for (o = 0, a = r.length; o < a; o += 1)
    c = r[o], e.replacer && (c = e.replacer.call(r, String(o), c)), (_t(e, t + 1, c, !0, !0, !1, !0) || typeof c > "u" && _t(e, t + 1, null, !0, !0, !1, !0)) && ((!n || i !== "") && (i += Ol(e, t)), e.dump && Zn === e.dump.charCodeAt(0) ? i += "-" : i += "- ", i += e.dump);
  e.tag = s, e.dump = i || "[]";
}
function ox(e, t, r) {
  var n = "", i = e.tag, s = Object.keys(r), o, a, c, l, f;
  for (o = 0, a = s.length; o < a; o += 1)
    f = "", n !== "" && (f += ", "), e.condenseFlow && (f += '"'), c = s[o], l = r[c], e.replacer && (l = e.replacer.call(r, c, l)), _t(e, t, c, !1, !1) && (e.dump.length > 1024 && (f += "? "), f += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), _t(e, t, l, !1, !1) && (f += e.dump, n += f));
  e.tag = i, e.dump = "{" + n + "}";
}
function ax(e, t, r, n) {
  var i = "", s = e.tag, o = Object.keys(r), a, c, l, f, u, h;
  if (e.sortKeys === !0)
    o.sort();
  else if (typeof e.sortKeys == "function")
    o.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new Ne("sortKeys must be a boolean or a function");
  for (a = 0, c = o.length; a < c; a += 1)
    h = "", (!n || i !== "") && (h += Ol(e, t)), l = o[a], f = r[l], e.replacer && (f = e.replacer.call(r, l, f)), _t(e, t + 1, l, !0, !0, !0) && (u = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, u && (e.dump && Zn === e.dump.charCodeAt(0) ? h += "?" : h += "? "), h += e.dump, u && (h += Ol(e, t)), _t(e, t + 1, f, !0, u) && (e.dump && Zn === e.dump.charCodeAt(0) ? h += ":" : h += ": ", h += e.dump, i += h));
  e.tag = s, e.dump = i || "{}";
}
function Fh(e, t, r) {
  var n, i, s, o, a, c;
  for (i = r ? e.explicitTypes : e.implicitTypes, s = 0, o = i.length; s < o; s += 1)
    if (a = i[s], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof t == "object" && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
      if (r ? a.multi && a.representName ? e.tag = a.representName(t) : e.tag = a.tag : e.tag = "?", a.represent) {
        if (c = e.styleMap[a.tag] || a.defaultStyle, Ly.call(a.represent) === "[object Function]")
          n = a.represent(t, c);
        else if (ky.call(a.represent, c))
          n = a.represent[c](t, c);
        else
          throw new Ne("!<" + a.tag + '> tag resolver accepts not "' + c + '" style');
        e.dump = n;
      }
      return !0;
    }
  return !1;
}
function _t(e, t, r, n, i, s, o) {
  e.tag = null, e.dump = r, Fh(e, r, !1) || Fh(e, r, !0);
  var a = Ly.call(e.dump), c = n, l;
  n && (n = e.flowLevel < 0 || e.flowLevel > t);
  var f = a === "[object Object]" || a === "[object Array]", u, h;
  if (f && (u = e.duplicates.indexOf(r), h = u !== -1), (e.tag !== null && e.tag !== "?" || h || e.indent !== 2 && t > 0) && (i = !1), h && e.usedDuplicates[u])
    e.dump = "*ref_" + u;
  else {
    if (f && h && !e.usedDuplicates[u] && (e.usedDuplicates[u] = !0), a === "[object Object]")
      n && Object.keys(e.dump).length !== 0 ? (ax(e, t, e.dump, i), h && (e.dump = "&ref_" + u + e.dump)) : (ox(e, t, e.dump), h && (e.dump = "&ref_" + u + " " + e.dump));
    else if (a === "[object Array]")
      n && e.dump.length !== 0 ? (e.noArrayIndent && !o && t > 0 ? Mh(e, t - 1, e.dump, i) : Mh(e, t, e.dump, i), h && (e.dump = "&ref_" + u + e.dump)) : (sx(e, t, e.dump), h && (e.dump = "&ref_" + u + " " + e.dump));
    else if (a === "[object String]")
      e.tag !== "?" && rx(e, e.dump, t, s, c);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (e.skipInvalid)
        return !1;
      throw new Ne("unacceptable kind of an object to dump " + a);
    }
    e.tag !== null && e.tag !== "?" && (l = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? l = "!" + l : l.slice(0, 18) === "tag:yaml.org,2002:" ? l = "!!" + l.slice(18) : l = "!<" + l + ">", e.dump = l + " " + e.dump);
  }
  return !0;
}
function cx(e, t) {
  var r = [], n = [], i, s;
  for (Al(e, r, n), i = 0, s = n.length; i < s; i += 1)
    t.duplicates.push(r[n[i]]);
  t.usedDuplicates = new Array(s);
}
function Al(e, t, r) {
  var n, i, s;
  if (e !== null && typeof e == "object")
    if (i = t.indexOf(e), i !== -1)
      r.indexOf(i) === -1 && r.push(i);
    else if (t.push(e), Array.isArray(e))
      for (i = 0, s = e.length; i < s; i += 1)
        Al(e[i], t, r);
    else
      for (n = Object.keys(e), i = 0, s = n.length; i < s; i += 1)
        Al(e[n[i]], t, r);
}
function lx(e, t) {
  t = t || {};
  var r = new XO(t);
  r.noRefs || cx(e, r);
  var n = e;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), _t(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var ux = lx, fx = {
  dump: ux
};
function df(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
var px = Re, hx = fy, dx = my, Bs = $y, mx = Sy, yx = uf, vx = Ny.load, gx = Ny.loadAll, bx = fx.dump, $x = Ne, Sx = {
  binary: Ay,
  float: by,
  map: dy,
  null: yy,
  pairs: jy,
  set: _y,
  timestamp: Oy,
  bool: vy,
  int: gy,
  merge: xy,
  omap: Py,
  seq: hy,
  str: py
}, Ex = df("safeLoad", "load"), wx = df("safeLoadAll", "loadAll"), Ox = df("safeDump", "dump"), sn = {
  Type: px,
  Schema: hx,
  FAILSAFE_SCHEMA: dx,
  JSON_SCHEMA: Bs,
  CORE_SCHEMA: mx,
  DEFAULT_SCHEMA: yx,
  load: vx,
  loadAll: gx,
  dump: bx,
  YAMLException: $x,
  types: Sx,
  safeLoad: Ex,
  safeLoadAll: wx,
  safeDump: Ox
};
const {
  fetch: xx,
  Response: Ax,
  Headers: Px,
  Request: jx,
  FormData: _x,
  File: Rx,
  Blob: Tx
} = globalThis;
typeof globalThis.fetch > "u" && (globalThis.fetch = xx);
typeof globalThis.Headers > "u" && (globalThis.Headers = Px);
typeof globalThis.Request > "u" && (globalThis.Request = jx);
typeof globalThis.Response > "u" && (globalThis.Response = Ax);
typeof globalThis.FormData > "u" && (globalThis.FormData = _x);
typeof globalThis.File > "u" && (globalThis.File = Rx);
typeof globalThis.Blob > "u" && (globalThis.Blob = Tx);
const Ix = (e) => ":/?#[]@!$&'()*+,;=".indexOf(e) > -1, Cx = (e) => /^[a-z0-9\-._~]+$/i.test(e);
function on(e, {
  escape: t
} = {}, r) {
  return typeof e == "number" && (e = e.toString()), typeof e != "string" || !e.length || !t ? e : r ? JSON.parse(e) : [...e].map((n) => {
    if (Cx(n) || Ix(n) && t === "unsafe")
      return n;
    const i = new TextEncoder();
    return Array.from(i.encode(n)).map((o) => `0${o.toString(16).toUpperCase()}`.slice(-2)).map((o) => `%${o}`).join("");
  }).join("");
}
function mf(e) {
  const {
    value: t
  } = e;
  return Array.isArray(t) ? Vx(e) : typeof t == "object" ? Mx(e) : Fx(e);
}
function Vx({
  key: e,
  value: t,
  style: r,
  explode: n,
  escape: i
}) {
  const s = (o) => on(o, {
    escape: i
  });
  if (r === "simple")
    return t.map((o) => s(o)).join(",");
  if (r === "label")
    return `.${t.map((o) => s(o)).join(".")}`;
  if (r === "matrix")
    return t.map((o) => s(o)).reduce((o, a) => !o || n ? `${o || ""};${e}=${a}` : `${o},${a}`, "");
  if (r === "form") {
    const o = n ? `&${e}=` : ",";
    return t.map((a) => s(a)).join(o);
  }
  if (r === "spaceDelimited") {
    const o = n ? `${e}=` : "";
    return t.map((a) => s(a)).join(` ${o}`);
  }
  if (r === "pipeDelimited") {
    const o = n ? `${e}=` : "";
    return t.map((a) => s(a)).join(`|${o}`);
  }
}
function Mx({
  key: e,
  value: t,
  style: r,
  explode: n,
  escape: i
}) {
  const s = (a) => on(a, {
    escape: i
  }), o = Object.keys(t);
  if (r === "simple")
    return o.reduce((a, c) => {
      const l = s(t[c]), f = n ? "=" : ",";
      return `${a ? `${a},` : ""}${c}${f}${l}`;
    }, "");
  if (r === "label")
    return o.reduce((a, c) => {
      const l = s(t[c]), f = n ? "=" : ".";
      return `${a ? `${a}.` : "."}${c}${f}${l}`;
    }, "");
  if (r === "matrix" && n)
    return o.reduce((a, c) => {
      const l = s(t[c]);
      return `${a ? `${a};` : ";"}${c}=${l}`;
    }, "");
  if (r === "matrix")
    return o.reduce((a, c) => {
      const l = s(t[c]);
      return `${a ? `${a},` : `;${e}=`}${c},${l}`;
    }, "");
  if (r === "form")
    return o.reduce((a, c) => {
      const l = s(t[c]);
      return `${a ? `${a}${n ? "&" : ","}` : ""}${c}${n ? "=" : ","}${l}`;
    }, "");
}
function Fx({
  key: e,
  value: t,
  style: r,
  escape: n
}) {
  const i = (s) => on(s, {
    escape: n
  });
  if (r === "simple")
    return i(t);
  if (r === "label")
    return `.${i(t)}`;
  if (r === "matrix")
    return `;${e}=${i(t)}`;
  if (r === "form" || r === "deepObject")
    return i(t);
}
const Pl = {
  serializeRes: Yy,
  mergeInQueryOrForm: ev
};
async function fi(e, t = {}) {
  typeof e == "object" && (t = e, e = t.url), t.headers = t.headers || {}, Pl.mergeInQueryOrForm(t), t.headers && Object.keys(t.headers).forEach((i) => {
    const s = t.headers[i];
    typeof s == "string" && (t.headers[i] = s.replace(/\n+/g, " "));
  }), t.requestInterceptor && (t = await t.requestInterceptor(t) || t);
  const r = t.headers["content-type"] || t.headers["Content-Type"];
  /multipart\/form-data/i.test(r) && (delete t.headers["content-type"], delete t.headers["Content-Type"]);
  let n;
  try {
    n = await (t.userFetch || fetch)(t.url, t), n = await Pl.serializeRes(n, e, t), t.responseInterceptor && (n = await t.responseInterceptor(n) || n);
  } catch (i) {
    if (!n)
      throw i;
    const s = new Error(n.statusText || `response status is ${n.status}`);
    throw s.status = n.status, s.statusCode = n.status, s.responseError = i, s;
  }
  if (!n.ok) {
    const i = new Error(n.statusText || `response status is ${n.status}`);
    throw i.status = n.status, i.statusCode = n.status, i.response = n, i;
  }
  return n;
}
const Dx = (e = "") => /(json|xml|yaml|text)\b/.test(e);
function Nx(e, t) {
  return t && (t.indexOf("application/json") === 0 || t.indexOf("+json") > 0) ? JSON.parse(e) : sn.load(e);
}
function Yy(e, t, {
  loadSpec: r = !1
} = {}) {
  const n = {
    ok: e.ok,
    url: e.url || t,
    status: e.status,
    statusText: e.statusText,
    headers: Xy(e.headers)
  }, i = n.headers["content-type"], s = r || Dx(i);
  return (s ? e.text : e.blob || e.buffer).call(e).then((a) => {
    if (n.text = a, n.data = a, s)
      try {
        const c = Nx(a, i);
        n.body = c, n.obj = c;
      } catch (c) {
        n.parseError = c;
      }
    return n;
  });
}
function Lx(e) {
  return e.includes(", ") ? e.split(", ") : e;
}
function Xy(e = {}) {
  return typeof e.entries != "function" ? {} : Array.from(e.entries()).reduce((t, [r, n]) => (t[r] = Lx(n), t), {});
}
function yf(e, t) {
  return !t && typeof navigator < "u" && (t = navigator), t && t.product === "ReactNative" ? !!(e && typeof e == "object" && typeof e.uri == "string") : typeof File < "u" && e instanceof File || typeof Blob < "u" && e instanceof Blob || ArrayBuffer.isView(e) ? !0 : e !== null && typeof e == "object" && typeof e.pipe == "function";
}
function Qy(e, t) {
  return Array.isArray(e) && e.some((r) => yf(r, t));
}
const kx = {
  form: ",",
  spaceDelimited: "%20",
  pipeDelimited: "|"
}, Ux = {
  csv: ",",
  ssv: "%20",
  tsv: "%09",
  pipes: "|"
};
class jl extends File {
  constructor(t, r = "", n = {}) {
    super([t], r, n), this.data = t;
  }
  valueOf() {
    return this.data;
  }
  toString() {
    return this.valueOf();
  }
}
function Zy(e, t, r = !1) {
  const {
    collectionFormat: n,
    allowEmptyValue: i,
    serializationOption: s,
    encoding: o
  } = t, a = typeof t == "object" && !Array.isArray(t) ? t.value : t, c = r ? (f) => f.toString() : (f) => encodeURIComponent(f), l = c(e);
  if (typeof a > "u" && i)
    return [[l, ""]];
  if (yf(a) || Qy(a))
    return [[l, a]];
  if (s)
    return Dh(e, a, r, s);
  if (o) {
    if ([typeof o.style, typeof o.explode, typeof o.allowReserved].some((f) => f !== "undefined")) {
      const {
        style: f,
        explode: u,
        allowReserved: h
      } = o;
      return Dh(e, a, r, {
        style: f,
        explode: u,
        allowReserved: h
      });
    }
    if (typeof o.contentType == "string") {
      if (o.contentType.startsWith("application/json")) {
        const h = typeof a == "string" ? a : JSON.stringify(a), p = c(h), d = new jl(p, "blob", {
          type: o.contentType
        });
        return [[l, d]];
      }
      const f = c(String(a)), u = new jl(f, "blob", {
        type: o.contentType
      });
      return [[l, u]];
    }
    return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) && a.every((f) => typeof f != "object") ? [[l, a.map(c).join(",")]] : [[l, c(JSON.stringify(a))]];
  }
  return typeof a != "object" ? [[l, c(a)]] : Array.isArray(a) ? n === "multi" ? [[l, a.map(c)]] : [[l, a.map(c).join(Ux[n || "csv"])]] : [[l, ""]];
}
function Dh(e, t, r, n) {
  const i = n.style || "form", s = typeof n.explode > "u" ? i === "form" : n.explode, o = r ? !1 : n && n.allowReserved ? "unsafe" : "reserved", a = (l) => on(l, {
    escape: o
  }), c = r ? (l) => l : (l) => on(l, {
    escape: o
  });
  return typeof t != "object" ? [[c(e), a(t)]] : Array.isArray(t) ? s ? [[c(e), t.map(a)]] : [[c(e), t.map(a).join(kx[i])]] : i === "deepObject" ? Object.keys(t).map((l) => [c(`${e}[${l}]`), a(t[l])]) : s ? Object.keys(t).map((l) => [c(l), a(t[l])]) : [[c(e), Object.keys(t).map((l) => [`${c(l)},${a(t[l])}`]).join(",")]];
}
function Bx(e) {
  return Object.entries(e).reduce((t, [r, n]) => {
    for (const [i, s] of Zy(r, n, !0))
      if (Array.isArray(s))
        for (const o of s)
          if (ArrayBuffer.isView(o)) {
            const a = new Blob([o]);
            t.append(i, a);
          } else
            t.append(i, o);
      else if (ArrayBuffer.isView(s)) {
        const o = new Blob([s]);
        t.append(i, o);
      } else
        t.append(i, s);
    return t;
  }, new FormData());
}
function Nh(e) {
  const t = Object.keys(e).reduce((r, n) => {
    for (const [i, s] of Zy(n, e[n]))
      s instanceof jl ? r[i] = s.valueOf() : r[i] = s;
    return r;
  }, {});
  return Sl.stringify(t, {
    encode: !1,
    indices: !1
  }) || "";
}
function ev(e = {}) {
  const {
    url: t = "",
    query: r,
    form: n
  } = e, i = (...s) => {
    const o = s.filter((a) => a).join("&");
    return o ? `?${o}` : "";
  };
  if (n) {
    const s = Object.keys(n).some((a) => {
      const {
        value: c
      } = n[a];
      return yf(c) || Qy(c);
    }), o = e.headers["content-type"] || e.headers["Content-Type"];
    if (s || /multipart\/form-data/i.test(o)) {
      const a = Bx(e.form);
      e.formdata = a, e.body = a;
    } else
      e.body = Nh(n);
    delete e.form;
  }
  if (r) {
    const [s, o] = t.split("?");
    let a = "";
    if (o) {
      const l = Sl.parse(o);
      Object.keys(r).forEach((u) => delete l[u]), a = Sl.stringify(l, {
        encode: !0
      });
    }
    const c = i(a, Nh(r));
    e.url = s + c, delete e.query;
  }
  return e;
}
function qx(e, t, r) {
  return r = r || ((n) => n), t = t || ((n) => n), (n) => (typeof n == "string" && (n = {
    url: n
  }), Pl.mergeInQueryOrForm(n), n = t(n), r(e(n)));
}
function tv(e, t = {}) {
  const {
    requestInterceptor: r,
    responseInterceptor: n
  } = t, i = e.withCredentials ? "include" : "same-origin";
  return (s) => e({
    url: s,
    loadSpec: !0,
    requestInterceptor: r,
    responseInterceptor: n,
    headers: {
      Accept: qm
    },
    credentials: i
  }).then((o) => o.body);
}
const vf = (e) => {
  var t, r;
  const {
    baseDoc: n,
    url: i
  } = e, s = (t = n ?? i) !== null && t !== void 0 ? t : "";
  return typeof ((r = globalThis.document) === null || r === void 0 ? void 0 : r.baseURI) == "string" ? String(new URL(s, globalThis.document.baseURI)) : s;
}, rv = (e) => {
  const {
    fetch: t,
    http: r
  } = e;
  return t || r || fi;
};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
var Hx = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var s in i)
        i.hasOwnProperty(s) && (n[s] = i[s]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Gx = Object.prototype.hasOwnProperty;
function _l(e, t) {
  return Gx.call(e, t);
}
function Rl(e) {
  if (Array.isArray(e)) {
    for (var t = new Array(e.length), r = 0; r < t.length; r++)
      t[r] = "" + r;
    return t;
  }
  if (Object.keys)
    return Object.keys(e);
  var n = [];
  for (var i in e)
    _l(e, i) && n.push(i);
  return n;
}
function Je(e) {
  switch (typeof e) {
    case "object":
      return JSON.parse(JSON.stringify(e));
    case "undefined":
      return null;
    default:
      return e;
  }
}
function Tl(e) {
  for (var t = 0, r = e.length, n; t < r; ) {
    if (n = e.charCodeAt(t), n >= 48 && n <= 57) {
      t++;
      continue;
    }
    return !1;
  }
  return !0;
}
function fr(e) {
  return e.indexOf("/") === -1 && e.indexOf("~") === -1 ? e : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function nv(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Il(e) {
  if (e === void 0)
    return !0;
  if (e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = e.length; t < r; t++)
        if (Il(e[t]))
          return !0;
    } else if (typeof e == "object") {
      for (var n = Rl(e), i = n.length, s = 0; s < i; s++)
        if (Il(e[n[s]]))
          return !0;
    }
  }
  return !1;
}
function Lh(e, t) {
  var r = [e];
  for (var n in t) {
    var i = typeof t[n] == "object" ? JSON.stringify(t[n], null, 2) : t[n];
    typeof i < "u" && r.push(n + ": " + i);
  }
  return r.join(`
`);
}
var iv = (
  /** @class */
  function(e) {
    Hx(t, e);
    function t(r, n, i, s, o) {
      var a = this.constructor, c = e.call(this, Lh(r, { name: n, index: i, operation: s, tree: o })) || this;
      return c.name = n, c.index = i, c.operation = s, c.tree = o, Object.setPrototypeOf(c, a.prototype), c.message = Lh(r, { name: n, index: i, operation: s, tree: o }), c;
    }
    return t;
  }(Error)
), de = iv, Jx = Je, Kr = {
  add: function(e, t, r) {
    return e[t] = this.value, { newDocument: r };
  },
  remove: function(e, t, r) {
    var n = e[t];
    return delete e[t], { newDocument: r, removed: n };
  },
  replace: function(e, t, r) {
    var n = e[t];
    return e[t] = this.value, { newDocument: r, removed: n };
  },
  move: function(e, t, r) {
    var n = ri(r, this.path);
    n && (n = Je(n));
    var i = $r(r, { op: "remove", path: this.from }).removed;
    return $r(r, { op: "add", path: this.path, value: i }), { newDocument: r, removed: n };
  },
  copy: function(e, t, r) {
    var n = ri(r, this.from);
    return $r(r, { op: "add", path: this.path, value: Je(n) }), { newDocument: r };
  },
  test: function(e, t, r) {
    return { newDocument: r, test: ni(e[t], this.value) };
  },
  _get: function(e, t, r) {
    return this.value = e[t], { newDocument: r };
  }
}, zx = {
  add: function(e, t, r) {
    return Tl(t) ? e.splice(t, 0, this.value) : e[t] = this.value, { newDocument: r, index: t };
  },
  remove: function(e, t, r) {
    var n = e.splice(t, 1);
    return { newDocument: r, removed: n[0] };
  },
  replace: function(e, t, r) {
    var n = e[t];
    return e[t] = this.value, { newDocument: r, removed: n };
  },
  move: Kr.move,
  copy: Kr.copy,
  test: Kr.test,
  _get: Kr._get
};
function ri(e, t) {
  if (t == "")
    return e;
  var r = { op: "_get", path: t };
  return $r(e, r), r.value;
}
function $r(e, t, r, n, i, s) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), i === void 0 && (i = !0), s === void 0 && (s = 0), r && (typeof r == "function" ? r(t, 0, e, t.path) : qs(t, 0)), t.path === "") {
    var o = { newDocument: e };
    if (t.op === "add")
      return o.newDocument = t.value, o;
    if (t.op === "replace")
      return o.newDocument = t.value, o.removed = e, o;
    if (t.op === "move" || t.op === "copy")
      return o.newDocument = ri(e, t.from), t.op === "move" && (o.removed = e), o;
    if (t.op === "test") {
      if (o.test = ni(e, t.value), o.test === !1)
        throw new de("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
      return o.newDocument = e, o;
    } else {
      if (t.op === "remove")
        return o.removed = e, o.newDocument = null, o;
      if (t.op === "_get")
        return t.value = e, o;
      if (r)
        throw new de("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", s, t, e);
      return o;
    }
  } else {
    n || (e = Je(e));
    var a = t.path || "", c = a.split("/"), l = e, f = 1, u = c.length, h = void 0, p = void 0, d = void 0;
    for (typeof r == "function" ? d = r : d = qs; ; ) {
      if (p = c[f], p && p.indexOf("~") != -1 && (p = nv(p)), i && (p == "__proto__" || p == "prototype" && f > 0 && c[f - 1] == "constructor"))
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (r && h === void 0 && (l[p] === void 0 ? h = c.slice(0, f).join("/") : f == u - 1 && (h = t.path), h !== void 0 && d(t, 0, e, h)), f++, Array.isArray(l)) {
        if (p === "-")
          p = l.length;
        else {
          if (r && !Tl(p))
            throw new de("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", s, t, e);
          Tl(p) && (p = ~~p);
        }
        if (f >= u) {
          if (r && t.op === "add" && p > l.length)
            throw new de("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", s, t, e);
          var o = zx[t.op].call(t, l, p, e);
          if (o.test === !1)
            throw new de("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
          return o;
        }
      } else if (f >= u) {
        var o = Kr[t.op].call(t, l, p, e);
        if (o.test === !1)
          throw new de("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
        return o;
      }
      if (l = l[p], r && f < u && (!l || typeof l != "object"))
        throw new de("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", s, t, e);
    }
  }
}
function Wt(e, t, r, n, i) {
  if (n === void 0 && (n = !0), i === void 0 && (i = !0), r && !Array.isArray(t))
    throw new de("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n || (e = Je(e));
  for (var s = new Array(t.length), o = 0, a = t.length; o < a; o++)
    s[o] = $r(e, t[o], r, !0, i, o), e = s[o].newDocument;
  return s.newDocument = e, s;
}
function Kx(e, t, r) {
  var n = $r(e, t);
  if (n.test === !1)
    throw new de("Test operation failed", "TEST_OPERATION_FAILED", r, t, e);
  return n.newDocument;
}
function qs(e, t, r, n) {
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new de("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, r);
  if (Kr[e.op]) {
    if (typeof e.path != "string")
      throw new de("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, r);
    if (e.path.indexOf("/") !== 0 && e.path.length > 0)
      throw new de('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", t, e, r);
    if ((e.op === "move" || e.op === "copy") && typeof e.from != "string")
      throw new de("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", t, e, r);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && e.value === void 0)
      throw new de("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", t, e, r);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && Il(e.value))
      throw new de("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", t, e, r);
    if (r) {
      if (e.op == "add") {
        var i = e.path.split("/").length, s = n.split("/").length;
        if (i !== s + 1 && i !== s)
          throw new de("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", t, e, r);
      } else if (e.op === "replace" || e.op === "remove" || e.op === "_get") {
        if (e.path !== n)
          throw new de("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", t, e, r);
      } else if (e.op === "move" || e.op === "copy") {
        var o = { op: "_get", path: e.from, value: void 0 }, a = sv([o], r);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE")
          throw new de("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", t, e, r);
      }
    }
  } else
    throw new de("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", t, e, r);
}
function sv(e, t, r) {
  try {
    if (!Array.isArray(e))
      throw new de("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (t)
      Wt(Je(t), Je(e), r || !0);
    else {
      r = r || qs;
      for (var n = 0; n < e.length; n++)
        r(e[n], n, t, void 0);
    }
  } catch (i) {
    if (i instanceof de)
      return i;
    throw i;
  }
}
function ni(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var r = Array.isArray(e), n = Array.isArray(t), i, s, o;
    if (r && n) {
      if (s = e.length, s != t.length)
        return !1;
      for (i = s; i-- !== 0; )
        if (!ni(e[i], t[i]))
          return !1;
      return !0;
    }
    if (r != n)
      return !1;
    var a = Object.keys(e);
    if (s = a.length, s !== Object.keys(t).length)
      return !1;
    for (i = s; i-- !== 0; )
      if (!t.hasOwnProperty(a[i]))
        return !1;
    for (i = s; i-- !== 0; )
      if (o = a[i], !ni(e[o], t[o]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
const Wx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JsonPatchError: de,
  _areEquals: ni,
  applyOperation: $r,
  applyPatch: Wt,
  applyReducer: Kx,
  deepClone: Jx,
  getValueByPointer: ri,
  validate: sv,
  validator: qs
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
var gf = /* @__PURE__ */ new WeakMap(), Yx = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.observers = /* @__PURE__ */ new Map(), this.obj = t;
    }
    return e;
  }()
), Xx = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      this.callback = t, this.observer = r;
    }
    return e;
  }()
);
function Qx(e) {
  return gf.get(e);
}
function Zx(e, t) {
  return e.observers.get(t);
}
function e1(e, t) {
  e.observers.delete(t.callback);
}
function t1(e, t) {
  t.unobserve();
}
function r1(e, t) {
  var r = [], n, i = Qx(e);
  if (!i)
    i = new Yx(e), gf.set(e, i);
  else {
    var s = Zx(i, t);
    n = s && s.observer;
  }
  if (n)
    return n;
  if (n = {}, i.value = Je(e), t) {
    n.callback = t, n.next = null;
    var o = function() {
      Cl(n);
    }, a = function() {
      clearTimeout(n.next), n.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return n.patches = r, n.object = e, n.unobserve = function() {
    Cl(n), clearTimeout(n.next), e1(i, n), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, i.observers.set(t, new Xx(t, n)), n;
}
function Cl(e, t) {
  t === void 0 && (t = !1);
  var r = gf.get(e.object);
  bf(r.value, e.object, e.patches, "", t), e.patches.length && Wt(r.value, e.patches);
  var n = e.patches;
  return n.length > 0 && (e.patches = [], e.callback && e.callback(n)), n;
}
function bf(e, t, r, n, i) {
  if (t !== e) {
    typeof t.toJSON == "function" && (t = t.toJSON());
    for (var s = Rl(t), o = Rl(e), a = !1, c = o.length - 1; c >= 0; c--) {
      var l = o[c], f = e[l];
      if (_l(t, l) && !(t[l] === void 0 && f !== void 0 && Array.isArray(t) === !1)) {
        var u = t[l];
        typeof f == "object" && f != null && typeof u == "object" && u != null && Array.isArray(f) === Array.isArray(u) ? bf(f, u, r, n + "/" + fr(l), i) : f !== u && (i && r.push({ op: "test", path: n + "/" + fr(l), value: Je(f) }), r.push({ op: "replace", path: n + "/" + fr(l), value: Je(u) }));
      } else
        Array.isArray(e) === Array.isArray(t) ? (i && r.push({ op: "test", path: n + "/" + fr(l), value: Je(f) }), r.push({ op: "remove", path: n + "/" + fr(l) }), a = !0) : (i && r.push({ op: "test", path: n, value: e }), r.push({ op: "replace", path: n, value: t }));
    }
    if (!(!a && s.length == o.length))
      for (var c = 0; c < s.length; c++) {
        var l = s[c];
        !_l(e, l) && t[l] !== void 0 && r.push({ op: "add", path: n + "/" + fr(l), value: Je(t[l]) });
      }
  }
}
function n1(e, t, r) {
  r === void 0 && (r = !1);
  var n = [];
  return bf(e, t, n, "", r), n;
}
const i1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare: n1,
  generate: Cl,
  observe: r1,
  unobserve: t1
}, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, Wx, i1, {
  JsonPatchError: iv,
  deepClone: Je,
  escapePathComponent: fr,
  unescapePathComponent: nv
});
var s1 = function(t) {
  return o1(t) && !a1(t);
};
function o1(e) {
  return !!e && typeof e == "object";
}
function a1(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || u1(e);
}
var c1 = typeof Symbol == "function" && Symbol.for, l1 = c1 ? Symbol.for("react.element") : 60103;
function u1(e) {
  return e.$$typeof === l1;
}
function f1(e) {
  return Array.isArray(e) ? [] : {};
}
function ii(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? an(f1(e), e, t) : e;
}
function p1(e, t, r) {
  return e.concat(t).map(function(n) {
    return ii(n, r);
  });
}
function h1(e, t) {
  if (!t.customMerge)
    return an;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : an;
}
function d1(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function kh(e) {
  return Object.keys(e).concat(d1(e));
}
function ov(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function m1(e, t) {
  return ov(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function y1(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && kh(e).forEach(function(i) {
    n[i] = ii(e[i], r);
  }), kh(t).forEach(function(i) {
    m1(e, i) || (ov(e, i) && r.isMergeableObject(t[i]) ? n[i] = h1(i, r)(e[i], t[i], r) : n[i] = ii(t[i], r));
  }), n;
}
function an(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || p1, r.isMergeableObject = r.isMergeableObject || s1, r.cloneUnlessOtherwiseSpecified = ii;
  var n = Array.isArray(t), i = Array.isArray(e), s = n === i;
  return s ? n ? r.arrayMerge(e, t, r) : y1(e, t, r) : ii(t, r);
}
an.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return an(n, i, r);
  }, {});
};
var v1 = an, g1 = v1;
const b1 = /* @__PURE__ */ Ar(g1), te = {
  add: S1,
  replace: Ss,
  remove: E1,
  merge: w1,
  mergeDeep: O1,
  context: x1,
  getIn: _1,
  applyPatch: $1,
  parentPathMatch: j1,
  flatten: pi,
  fullyNormalizeArray: R1,
  normalizeArray: cv,
  isPromise: T1,
  forEachNew: A1,
  forEachNewPrimitive: P1,
  isJsonPatch: fv,
  isContextPatch: V1,
  isPatch: ea,
  isMutation: pv,
  isAdditiveMutation: Hs,
  isGenerator: C1,
  isFunction: uv,
  isObject: Sr,
  isError: I1
};
function $1(e, t, r) {
  if (r = r || {}, t = {
    ...t,
    path: t.path && Uh(t.path)
  }, t.op === "merge") {
    const n = jc(e, t.path);
    Object.assign(n, t.value), Wt(e, [Ss(t.path, n)]);
  } else if (t.op === "mergeDeep") {
    const n = jc(e, t.path), i = b1(n, t.value);
    e = Wt(e, [Ss(t.path, i)]).newDocument;
  } else if (t.op === "add" && t.path === "" && Sr(t.value)) {
    const n = Object.keys(t.value).reduce((i, s) => (i.push({
      op: "add",
      path: `/${Uh(s)}`,
      value: t.value[s]
    }), i), []);
    Wt(e, n);
  } else if (t.op === "replace" && t.path === "") {
    let {
      value: n
    } = t;
    r.allowMetaPatches && t.meta && Hs(t) && (Array.isArray(t.value) || Sr(t.value)) && (n = {
      ...n,
      ...t.meta
    }), e = n;
  } else if (Wt(e, [t]), r.allowMetaPatches && t.meta && Hs(t) && (Array.isArray(t.value) || Sr(t.value))) {
    const i = {
      ...jc(e, t.path),
      ...t.meta
    };
    Wt(e, [Ss(t.path, i)]);
  }
  return e;
}
function Uh(e) {
  return Array.isArray(e) ? e.length < 1 ? "" : `/${e.map(
    (t) => (
      // eslint-disable-line prefer-template
      (t + "").replace(/~/g, "~0").replace(/\//g, "~1")
    )
    // eslint-disable-line prefer-template
  ).join("/")}` : e;
}
function S1(e, t) {
  return {
    op: "add",
    path: e,
    value: t
  };
}
function Ss(e, t, r) {
  return {
    op: "replace",
    path: e,
    value: t,
    meta: r
  };
}
function E1(e) {
  return {
    op: "remove",
    path: e
  };
}
function w1(e, t) {
  return {
    type: "mutation",
    op: "merge",
    path: e,
    value: t
  };
}
function O1(e, t) {
  return {
    type: "mutation",
    op: "mergeDeep",
    path: e,
    value: t
  };
}
function x1(e, t) {
  return {
    type: "context",
    path: e,
    value: t
  };
}
function A1(e, t) {
  try {
    return av(e, Ml, t);
  } catch (r) {
    return r;
  }
}
function P1(e, t) {
  try {
    return av(e, Vl, t);
  } catch (r) {
    return r;
  }
}
function av(e, t, r) {
  const n = e.filter(Hs).map((o) => t(o.value, r, o.path)) || [], i = pi(n);
  return lv(i);
}
function Vl(e, t, r) {
  return r = r || [], Array.isArray(e) ? e.map((n, i) => Vl(n, t, r.concat(i))) : Sr(e) ? Object.keys(e).map((n) => Vl(e[n], t, r.concat(n))) : t(e, r[r.length - 1], r);
}
function Ml(e, t, r) {
  r = r || [];
  let n = [];
  if (r.length > 0) {
    const i = t(e, r[r.length - 1], r);
    i && (n = n.concat(i));
  }
  if (Array.isArray(e)) {
    const i = e.map((s, o) => Ml(s, t, r.concat(o)));
    i && (n = n.concat(i));
  } else if (Sr(e)) {
    const i = Object.keys(e).map((s) => Ml(e[s], t, r.concat(s)));
    i && (n = n.concat(i));
  }
  return n = pi(n), n;
}
function j1(e, t) {
  if (!Array.isArray(t))
    return !1;
  for (let r = 0, n = t.length; r < n; r += 1)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function _1(e, t) {
  return t.reduce((r, n) => typeof n < "u" && r ? r[n] : r, e);
}
function R1(e) {
  return lv(pi(cv(e)));
}
function cv(e) {
  return Array.isArray(e) ? e : [e];
}
function pi(e) {
  return [].concat(...e.map((t) => Array.isArray(t) ? pi(t) : t));
}
function lv(e) {
  return e.filter((t) => typeof t < "u");
}
function Sr(e) {
  return e && typeof e == "object";
}
function T1(e) {
  return Sr(e) && uv(e.then);
}
function uv(e) {
  return e && typeof e == "function";
}
function I1(e) {
  return e instanceof Error;
}
function fv(e) {
  if (ea(e)) {
    const {
      op: t
    } = e;
    return t === "add" || t === "remove" || t === "replace";
  }
  return !1;
}
function C1(e) {
  return Object.prototype.toString.call(e) === "[object GeneratorFunction]";
}
function pv(e) {
  return fv(e) || ea(e) && e.type === "mutation";
}
function Hs(e) {
  return pv(e) && (e.op === "add" || e.op === "replace" || e.op === "merge" || e.op === "mergeDeep");
}
function V1(e) {
  return ea(e) && e.type === "context";
}
function ea(e) {
  return e && typeof e == "object";
}
function jc(e, t) {
  try {
    return ri(e, t);
  } catch (r) {
    return console.error(r), {};
  }
}
var hv = { exports: {} };
(function(e) {
  (function() {
    var t, r, n, i, s, o = "properties", a = "deepProperties", c = "propertyDescriptors", l = "staticProperties", f = "staticDeepProperties", u = "staticPropertyDescriptors", h = "configuration", p = "deepConfiguration", d = "deepProps", y = "deepStatics", g = "deepConf", b = "initializers", E = "methods", S = "composers", w = "compose";
    function _(H) {
      return Object.getOwnPropertyNames(H).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(H) : []);
    }
    function F(H, K) {
      return Array.prototype.slice.call(arguments, 2).reduce(H, K);
    }
    var P = F.bind(0, function(K, L) {
      if (L)
        for (var ue = _(L), le = 0; le < ue.length; le += 1)
          Object.defineProperty(K, ue[le], Object.getOwnPropertyDescriptor(L, ue[le]));
      return K;
    });
    function I(H) {
      return typeof H == "function";
    }
    function C(H) {
      return H && typeof H == "object" || I(H);
    }
    function J(H) {
      return H && typeof H == "object" && H.__proto__ == Object.prototype;
    }
    var x = F.bind(0, function H(K, L) {
      if (L === t)
        return K;
      if (Array.isArray(L))
        return (Array.isArray(K) ? K : []).concat(L);
      if (!J(L))
        return L;
      for (var ue, le, Ge = _(L), Ae = 0; Ae < Ge.length; )
        ue = Ge[Ae++], (le = Object.getOwnPropertyDescriptor(L, ue)).hasOwnProperty("value") ? le.value !== t && (K[ue] = H(J(K[ue]) || Array.isArray(L[ue]) ? K[ue] : {}, L[ue])) : Object.defineProperty(K, ue, le);
      return K;
    });
    function T() {
      return (r = Array.prototype.concat.apply([], arguments).filter(function(H, K, L) {
        return I(H) && L.indexOf(H) === K;
      })).length ? r : t;
    }
    function N(H) {
      return r = /* @__PURE__ */ function() {
        return function L(ue) {
          var le, Ge, Ae = L[w] || {}, St = { __proto__: Ae[E] }, is = Ae[b], W$ = Array.prototype.slice.apply(arguments), Fr = Ae[a];
          if (Fr && x(St, Fr), (Fr = Ae[o]) && P(St, Fr), (Fr = Ae[c]) && Object.defineProperties(St, Fr), !is || !is.length)
            return St;
          for (ue === t && (ue = {}), Ae = 0; Ae < is.length; )
            I(le = is[Ae++]) && (St = (Ge = le.call(St, ue, { instance: St, stamp: L, args: W$ })) === t ? St : Ge);
          return St;
        };
      }(), (n = H[f]) && x(r, n), (n = H[l]) && P(r, n), (n = H[u]) && Object.defineProperties(r, n), n = I(r[w]) ? r[w] : ye, P(r[w] = function() {
        return n.apply(this, arguments);
      }, H), r;
    }
    function W(H, K) {
      function L(le, Ge) {
        C(K[le]) && (C(H[le]) || (H[le] = {}), (Ge || P)(H[le], K[le]));
      }
      function ue(le) {
        (r = T(H[le], K[le])) && (H[le] = r);
      }
      return K && C(K = K[w] || K) && (L(E), L(o), L(a, x), L(c), L(l), L(f, x), L(u), L(h), L(p, x), ue(b), ue(S)), H;
    }
    function ye() {
      return N(Array.prototype.concat.apply([this], arguments).reduce(W, {}));
    }
    function ce(H) {
      return I(H) && I(H[w]);
    }
    var Q = {};
    function Fe(H, K) {
      return function() {
        return (i = {})[H] = K.apply(t, Array.prototype.concat.apply([{}], arguments)), ((r = this) && r[w] || n).call(r, i);
      };
    }
    Q[E] = Fe(E, P), Q[o] = Q.props = Fe(o, P), Q[b] = Q.init = Fe(b, T), Q[S] = Fe(S, T), Q[a] = Q[d] = Fe(a, x), Q[l] = Q.statics = Fe(l, P), Q[f] = Q[y] = Fe(f, x), Q[h] = Q.conf = Fe(h, P), Q[p] = Q[g] = Fe(p, x), Q[c] = Fe(c, P), Q[u] = Fe(u, P), n = Q[w] = P(function() {
      for (var K, L, ue = 0, le = [], Ge = arguments, Ae = this; ue < Ge.length; )
        C(K = Ge[ue++]) && le.push(ce(K) ? K : ((i = {})[E] = (L = K)[E] || t, n = L.props, i[o] = C((r = L[o]) || n) ? P({}, n, r) : t, i[b] = T(L.init, L[b]), i[S] = T(L[S]), n = L[d], i[a] = C((r = L[a]) || n) ? x({}, n, r) : t, i[c] = L[c], n = L.statics, i[l] = C((r = L[l]) || n) ? P({}, n, r) : t, n = L[y], i[f] = C((r = L[f]) || n) ? x({}, n, r) : t, r = L[u], i[u] = C((n = L.name && { name: { value: L.name } }) || r) ? P({}, r, n) : t, n = L.conf, i[h] = C((r = L[h]) || n) ? P({}, n, r) : t, n = L[g], i[p] = C((r = L[p]) || n) ? x({}, n, r) : t, i));
      if (K = ye.apply(Ae || s, le), Ae && le.unshift(Ae), Array.isArray(Ge = K[w][S]))
        for (ue = 0; ue < Ge.length; )
          K = ce(Ae = Ge[ue++]({ stamp: K, composables: le })) ? Ae : K;
      return K;
    }, Q), Q.create = function() {
      return this.apply(t, arguments);
    }, (i = {})[l] = Q, s = ye(i), n[w] = n.bind(), n.version = "4.3.2", e.exports = n;
  })();
})(hv);
var M1 = hv.exports;
const v = /* @__PURE__ */ Ar(M1);
var F1 = function() {
  return !1;
};
const $f = F1;
var D1 = function() {
  return !0;
};
const Vt = D1;
function fe(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function ne(e) {
  return function t(r) {
    return arguments.length === 0 || fe(r) ? t : e.apply(this, arguments);
  };
}
function k(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return fe(r) ? t : ne(function(i) {
          return e(r, i);
        });
      default:
        return fe(r) && fe(n) ? t : fe(r) ? ne(function(i) {
          return e(i, n);
        }) : fe(n) ? ne(function(i) {
          return e(r, i);
        }) : e(r, n);
    }
  };
}
function N1(e, t) {
  e = e || [], t = t || [];
  var r, n = e.length, i = t.length, s = [];
  for (r = 0; r < n; )
    s[s.length] = e[r], r += 1;
  for (r = 0; r < i; )
    s[s.length] = t[r], r += 1;
  return s;
}
function ta(e, t) {
  switch (e) {
    case 0:
      return function() {
        return t.apply(this, arguments);
      };
    case 1:
      return function(r) {
        return t.apply(this, arguments);
      };
    case 2:
      return function(r, n) {
        return t.apply(this, arguments);
      };
    case 3:
      return function(r, n, i) {
        return t.apply(this, arguments);
      };
    case 4:
      return function(r, n, i, s) {
        return t.apply(this, arguments);
      };
    case 5:
      return function(r, n, i, s, o) {
        return t.apply(this, arguments);
      };
    case 6:
      return function(r, n, i, s, o, a) {
        return t.apply(this, arguments);
      };
    case 7:
      return function(r, n, i, s, o, a, c) {
        return t.apply(this, arguments);
      };
    case 8:
      return function(r, n, i, s, o, a, c, l) {
        return t.apply(this, arguments);
      };
    case 9:
      return function(r, n, i, s, o, a, c, l, f) {
        return t.apply(this, arguments);
      };
    case 10:
      return function(r, n, i, s, o, a, c, l, f, u) {
        return t.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function Sf(e, t, r) {
  return function() {
    for (var n = [], i = 0, s = e, o = 0, a = !1; o < t.length || i < arguments.length; ) {
      var c;
      o < t.length && (!fe(t[o]) || i >= arguments.length) ? c = t[o] : (c = arguments[i], i += 1), n[o] = c, fe(c) ? a = !0 : s -= 1, o += 1;
    }
    return !a && s <= 0 ? r.apply(this, n) : ta(Math.max(0, s), Sf(e, n, r));
  };
}
var L1 = /* @__PURE__ */ k(function(t, r) {
  return t === 1 ? ne(r) : ta(t, Sf(t, [], r));
});
const ae = L1;
function He(e) {
  return function t(r, n, i) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return fe(r) ? t : k(function(s, o) {
          return e(r, s, o);
        });
      case 2:
        return fe(r) && fe(n) ? t : fe(r) ? k(function(s, o) {
          return e(s, n, o);
        }) : fe(n) ? k(function(s, o) {
          return e(r, s, o);
        }) : ne(function(s) {
          return e(r, n, s);
        });
      default:
        return fe(r) && fe(n) && fe(i) ? t : fe(r) && fe(n) ? k(function(s, o) {
          return e(s, o, i);
        }) : fe(r) && fe(i) ? k(function(s, o) {
          return e(s, n, o);
        }) : fe(n) && fe(i) ? k(function(s, o) {
          return e(r, s, o);
        }) : fe(r) ? ne(function(s) {
          return e(s, n, i);
        }) : fe(n) ? ne(function(s) {
          return e(r, s, i);
        }) : fe(i) ? ne(function(s) {
          return e(r, n, s);
        }) : e(r, n, i);
    }
  };
}
const hi = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function k1(e) {
  return e != null && typeof e["@@transducer/step"] == "function";
}
function nr(e, t, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!hi(n)) {
      for (var i = 0; i < e.length; ) {
        if (typeof n[e[i]] == "function")
          return n[e[i]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        i += 1;
      }
      if (k1(n)) {
        var s = t.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return s(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function ra(e) {
  return e && e["@@transducer/reduced"] ? e : {
    "@@transducer/value": e,
    "@@transducer/reduced": !0
  };
}
const We = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(e) {
    return this.xf["@@transducer/result"](e);
  }
};
var U1 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t, this.all = !0;
  }
  return e.prototype["@@transducer/init"] = We.init, e.prototype["@@transducer/result"] = function(t) {
    return this.all && (t = this.xf["@@transducer/step"](t, !0)), this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(r) || (this.all = !1, t = ra(this.xf["@@transducer/step"](t, !1))), t;
  }, e;
}();
function B1(e) {
  return function(t) {
    return new U1(e, t);
  };
}
var q1 = /* @__PURE__ */ k(
  /* @__PURE__ */ nr(["all"], B1, function(t, r) {
    for (var n = 0; n < r.length; ) {
      if (!t(r[n]))
        return !1;
      n += 1;
    }
    return !0;
  })
);
const Ef = q1;
function Bh(e) {
  for (var t = [], r; !(r = e.next()).done; )
    t.push(r.value);
  return t;
}
function Gs(e, t, r) {
  for (var n = 0, i = r.length; n < i; ) {
    if (e(t, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function H1(e) {
  var t = String(e).match(/^function (\w*)/);
  return t == null ? "" : t[1];
}
function Qe(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function G1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
const zn = typeof Object.is == "function" ? Object.is : G1;
var qh = Object.prototype.toString, J1 = /* @__PURE__ */ function() {
  return qh.call(arguments) === "[object Arguments]" ? function(t) {
    return qh.call(t) === "[object Arguments]";
  } : function(t) {
    return Qe("callee", t);
  };
}();
const dv = J1;
var z1 = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), Hh = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Gh = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), K1 = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, W1 = /* @__PURE__ */ ne(typeof Object.keys == "function" && !Gh ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, i = [], s = Gh && dv(t);
  for (r in t)
    Qe(r, t) && (!s || r !== "length") && (i[i.length] = r);
  if (z1)
    for (n = Hh.length - 1; n >= 0; )
      r = Hh[n], Qe(r, t) && !K1(i, r) && (i[i.length] = r), n -= 1;
  return i;
});
const Zt = W1;
var Y1 = /* @__PURE__ */ ne(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
const tt = Y1;
function Jh(e, t, r, n) {
  var i = Bh(e), s = Bh(t);
  function o(a, c) {
    return wf(a, c, r.slice(), n.slice());
  }
  return !Gs(function(a, c) {
    return !Gs(o, c, a);
  }, s, i);
}
function wf(e, t, r, n) {
  if (zn(e, t))
    return !0;
  var i = tt(e);
  if (i !== tt(t))
    return !1;
  if (typeof e["fantasy-land/equals"] == "function" || typeof t["fantasy-land/equals"] == "function")
    return typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t) && typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e);
  if (typeof e.equals == "function" || typeof t.equals == "function")
    return typeof e.equals == "function" && e.equals(t) && typeof t.equals == "function" && t.equals(e);
  switch (i) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof e.constructor == "function" && H1(e.constructor) === "Promise")
        return e === t;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof e == typeof t && zn(e.valueOf(), t.valueOf())))
        return !1;
      break;
    case "Date":
      if (!zn(e.valueOf(), t.valueOf()))
        return !1;
      break;
    case "Error":
      return e.name === t.name && e.message === t.message;
    case "RegExp":
      if (!(e.source === t.source && e.global === t.global && e.ignoreCase === t.ignoreCase && e.multiline === t.multiline && e.sticky === t.sticky && e.unicode === t.unicode))
        return !1;
      break;
  }
  for (var s = r.length - 1; s >= 0; ) {
    if (r[s] === e)
      return n[s] === t;
    s -= 1;
  }
  switch (i) {
    case "Map":
      return e.size !== t.size ? !1 : Jh(e.entries(), t.entries(), r.concat([e]), n.concat([t]));
    case "Set":
      return e.size !== t.size ? !1 : Jh(e.values(), t.values(), r.concat([e]), n.concat([t]));
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
  var o = Zt(e);
  if (o.length !== Zt(t).length)
    return !1;
  var a = r.concat([e]), c = n.concat([t]);
  for (s = o.length - 1; s >= 0; ) {
    var l = o[s];
    if (!(Qe(l, t) && wf(t[l], e[l], a, c)))
      return !1;
    s -= 1;
  }
  return !0;
}
var X1 = /* @__PURE__ */ k(function(t, r) {
  return wf(t, r, [], []);
});
const Mt = X1;
function Q1(e, t, r) {
  var n, i;
  if (typeof e.indexOf == "function")
    switch (typeof t) {
      case "number":
        if (t === 0) {
          for (n = 1 / t; r < e.length; ) {
            if (i = e[r], i === 0 && 1 / i === n)
              return r;
            r += 1;
          }
          return -1;
        } else if (t !== t) {
          for (; r < e.length; ) {
            if (i = e[r], typeof i == "number" && i !== i)
              return r;
            r += 1;
          }
          return -1;
        }
        return e.indexOf(t, r);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return e.indexOf(t, r);
      case "object":
        if (t === null)
          return e.indexOf(t, r);
    }
  for (; r < e.length; ) {
    if (Mt(e[r], t))
      return r;
    r += 1;
  }
  return -1;
}
function Js(e, t) {
  return Q1(t, e, 0) >= 0;
}
function Kn(e, t) {
  for (var r = 0, n = t.length, i = Array(n); r < n; )
    i[r] = e(t[r]), r += 1;
  return i;
}
function _c(e) {
  var t = e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + t.replace(/"/g, '\\"') + '"';
}
var Fn = function(t) {
  return (t < 10 ? "0" : "") + t;
}, Z1 = typeof Date.prototype.toISOString == "function" ? function(t) {
  return t.toISOString();
} : function(t) {
  return t.getUTCFullYear() + "-" + Fn(t.getUTCMonth() + 1) + "-" + Fn(t.getUTCDate()) + "T" + Fn(t.getUTCHours()) + ":" + Fn(t.getUTCMinutes()) + ":" + Fn(t.getUTCSeconds()) + "." + (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
const eA = Z1;
function mv(e) {
  return function() {
    return !e.apply(this, arguments);
  };
}
function di(e, t, r) {
  for (var n = 0, i = r.length; n < i; )
    t = e(t, r[n]), n += 1;
  return t;
}
function tA(e, t) {
  for (var r = 0, n = t.length, i = []; r < n; )
    e(t[r]) && (i[i.length] = t[r]), r += 1;
  return i;
}
function zs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
var rA = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t;
  }
  return e.prototype["@@transducer/init"] = We.init, e.prototype["@@transducer/result"] = We.result, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(r) ? this.xf["@@transducer/step"](t, r) : t;
  }, e;
}();
function nA(e) {
  return function(t) {
    return new rA(e, t);
  };
}
var iA = /* @__PURE__ */ k(
  /* @__PURE__ */ nr(["fantasy-land/filter", "filter"], nA, function(e, t) {
    return zs(t) ? di(function(r, n) {
      return e(t[n]) && (r[n] = t[n]), r;
    }, {}, Zt(t)) : (
      // else
      tA(e, t)
    );
  })
);
const sA = iA;
var oA = /* @__PURE__ */ k(function(t, r) {
  return sA(mv(t), r);
});
const aA = oA;
function yv(e, t) {
  var r = function(o) {
    var a = t.concat([e]);
    return Js(o, a) ? "<Circular>" : yv(o, a);
  }, n = function(s, o) {
    return Kn(function(a) {
      return _c(a) + ": " + r(s[a]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(e)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + Kn(r, e).join(", ") + "))";
    case "[object Array]":
      return "[" + Kn(r, e).concat(n(e, aA(function(s) {
        return /^\d+$/.test(s);
      }, Zt(e)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof e == "object" ? "new Boolean(" + r(e.valueOf()) + ")" : e.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(e.valueOf()) ? r(NaN) : _c(eA(e))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(e)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof e == "object" ? "new Number(" + r(e.valueOf()) + ")" : 1 / e === -1 / 0 ? "-0" : e.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(e).sort()) + ")";
    case "[object String]":
      return typeof e == "object" ? "new String(" + r(e.valueOf()) + ")" : _c(e);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof e.toString == "function") {
        var i = e.toString();
        if (i !== "[object Object]")
          return i;
      }
      return "{" + n(e, Zt(e)).join(", ") + "}";
  }
}
var cA = /* @__PURE__ */ ne(function(t) {
  return yv(t, []);
});
const cn = cA;
var lA = /* @__PURE__ */ k(function(t, r) {
  if (t === r)
    return r;
  function n(c, l) {
    if (c > l != l > c)
      return l > c ? l : c;
  }
  var i = n(t, r);
  if (i !== void 0)
    return i;
  var s = n(typeof t, typeof r);
  if (s !== void 0)
    return s === typeof t ? t : r;
  var o = cn(t), a = n(o, cn(r));
  return a !== void 0 && a === o ? t : r;
});
const Of = lA;
var uA = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t;
  }
  return e.prototype["@@transducer/init"] = We.init, e.prototype["@@transducer/result"] = We.result, e.prototype["@@transducer/step"] = function(t, r) {
    return this.xf["@@transducer/step"](t, this.f(r));
  }, e;
}(), fA = function(t) {
  return function(r) {
    return new uA(t, r);
  };
};
const pA = fA;
var hA = /* @__PURE__ */ k(
  /* @__PURE__ */ nr(["fantasy-land/map", "map"], pA, function(t, r) {
    switch (Object.prototype.toString.call(r)) {
      case "[object Function]":
        return ae(r.length, function() {
          return t.call(this, r.apply(this, arguments));
        });
      case "[object Object]":
        return di(function(n, i) {
          return n[i] = t(r[i]), n;
        }, {}, Zt(r));
      default:
        return Kn(t, r);
    }
  })
);
const mi = hA, na = Number.isInteger || function(t) {
  return t << 0 === t;
};
function xf(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var dA = /* @__PURE__ */ k(function(t, r) {
  var n = t < 0 ? r.length + t : t;
  return xf(r) ? r.charAt(n) : r[n];
});
const ia = dA;
var mA = /* @__PURE__ */ k(function(t, r) {
  if (r != null)
    return na(t) ? ia(t, r) : r[t];
});
const yi = mA;
var yA = /* @__PURE__ */ k(function(t, r) {
  return mi(yi(t), r);
});
const Af = yA;
var vA = /* @__PURE__ */ ne(function(t) {
  return hi(t) ? !0 : !t || typeof t != "object" || xf(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
});
const gA = vA;
var zh = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function vv(e, t, r) {
  return function(i, s, o) {
    if (gA(o))
      return e(i, s, o);
    if (o == null)
      return s;
    if (typeof o["fantasy-land/reduce"] == "function")
      return t(i, s, o, "fantasy-land/reduce");
    if (o[zh] != null)
      return r(i, s, o[zh]());
    if (typeof o.next == "function")
      return r(i, s, o);
    if (typeof o.reduce == "function")
      return t(i, s, o, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function bA(e, t, r) {
  for (var n = 0, i = r.length; n < i; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
var $A = /* @__PURE__ */ k(function(t, r) {
  return ta(t.length, function() {
    return t.apply(r, arguments);
  });
});
const vi = $A;
function SA(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function EA(e, t, r, n) {
  return e["@@transducer/result"](r[n](vi(e["@@transducer/step"], e), t));
}
var wA = /* @__PURE__ */ vv(bA, EA, SA);
const Pf = wA;
var OA = /* @__PURE__ */ function() {
  function e(t) {
    this.f = t;
  }
  return e.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  }, e.prototype["@@transducer/result"] = function(t) {
    return t;
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(t, r);
  }, e;
}();
function gv(e) {
  return new OA(e);
}
var xA = /* @__PURE__ */ He(function(e, t, r) {
  return Pf(typeof e == "function" ? gv(e) : e, t, r);
});
const jr = xA;
var AA = /* @__PURE__ */ ne(function(t) {
  return ae(jr(Of, 0, Af("length", t)), function() {
    for (var r = 0, n = t.length; r < n; ) {
      if (!t[r].apply(this, arguments))
        return !1;
      r += 1;
    }
    return !0;
  });
});
const PA = AA;
var jA = /* @__PURE__ */ ne(function(t) {
  return function() {
    return t;
  };
});
const D = jA;
var _A = /* @__PURE__ */ k(function(t, r) {
  return t && r;
});
const RA = _A;
var TA = /* @__PURE__ */ ne(function(t) {
  return ae(jr(Of, 0, Af("length", t)), function() {
    for (var r = 0, n = t.length; r < n; ) {
      if (t[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
const IA = TA;
function CA(e, t, r) {
  for (var n = r.next(); !n.done; )
    t = e(t, n.value), n = r.next();
  return t;
}
function VA(e, t, r, n) {
  return r[n](e, t);
}
var MA = /* @__PURE__ */ vv(di, VA, CA);
const FA = MA;
var DA = /* @__PURE__ */ k(function(t, r) {
  return typeof r["fantasy-land/ap"] == "function" ? r["fantasy-land/ap"](t) : typeof t.ap == "function" ? t.ap(r) : typeof t == "function" ? function(n) {
    return t(n)(r(n));
  } : FA(function(n, i) {
    return N1(n, mi(i, r));
  }, [], t);
});
const NA = DA;
var LA = /* @__PURE__ */ k(function(t, r) {
  return t.apply(this, r);
});
const kA = LA;
var UA = /* @__PURE__ */ ne(function(t) {
  for (var r = Zt(t), n = r.length, i = [], s = 0; s < n; )
    i[s] = t[r[s]], s += 1;
  return i;
});
const BA = UA;
function qA(e, t, r) {
  if (na(e) && hi(r)) {
    var n = [].concat(r);
    return n[e] = t, n;
  }
  var i = {};
  for (var s in r)
    i[s] = r[s];
  return i[e] = t, i;
}
var HA = /* @__PURE__ */ ne(function(t) {
  return t == null;
});
const Ks = HA;
var GA = /* @__PURE__ */ He(function e(t, r, n) {
  if (t.length === 0)
    return r;
  var i = t[0];
  if (t.length > 1) {
    var s = !Ks(n) && Qe(i, n) && typeof n[i] == "object" ? n[i] : na(t[1]) ? [] : {};
    r = e(Array.prototype.slice.call(t, 1), r, s);
  }
  return qA(i, r, n);
});
const JA = GA;
function jf(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object Function]" || t === "[object AsyncFunction]" || t === "[object GeneratorFunction]" || t === "[object AsyncGeneratorFunction]";
}
var zA = /* @__PURE__ */ k(function(t, r) {
  var n = ae(t, r);
  return ae(t, function() {
    return di(NA, mi(n, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
const KA = zA;
var WA = /* @__PURE__ */ ne(function(t) {
  return KA(t.length, t);
});
const _f = WA;
var YA = /* @__PURE__ */ k(function(t, r) {
  return jf(t) ? function() {
    return t.apply(this, arguments) && r.apply(this, arguments);
  } : _f(RA)(t, r);
});
const _r = YA;
function bv(e) {
  return new RegExp(e.source, e.flags ? e.flags : (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.dotAll ? "s" : ""));
}
function Rf(e, t, r) {
  if (r || (r = new QA()), XA(e))
    return e;
  var n = function(s) {
    var o = r.get(e);
    if (o)
      return o;
    r.set(e, s);
    for (var a in e)
      Object.prototype.hasOwnProperty.call(e, a) && (s[a] = t ? Rf(e[a], !0, r) : e[a]);
    return s;
  };
  switch (tt(e)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(e)));
    case "Array":
      return n([]);
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      return bv(e);
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
      return e.slice();
    default:
      return e;
  }
}
function XA(e) {
  var t = typeof e;
  return e == null || t != "object" && t != "function";
}
var QA = /* @__PURE__ */ function() {
  function e() {
    this.map = {}, this.length = 0;
  }
  return e.prototype.set = function(t, r) {
    const n = this.hash(t);
    let i = this.map[n];
    i || (this.map[n] = i = []), i.push([t, r]), this.length += 1;
  }, e.prototype.hash = function(t) {
    let r = [];
    for (var n in t)
      r.push(Object.prototype.toString.call(t[n]));
    return r.join();
  }, e.prototype.get = function(t) {
    if (this.length <= 180) {
      for (const i in this.map) {
        const s = this.map[i];
        for (let o = 0; o < s.length; o += 1) {
          const a = s[o];
          if (a[0] === t)
            return a[1];
        }
      }
      return;
    }
    const r = this.hash(t), n = this.map[r];
    if (n)
      for (let i = 0; i < n.length; i += 1) {
        const s = n[i];
        if (s[0] === t)
          return s[1];
      }
  }, e;
}(), ZA = /* @__PURE__ */ ne(function(t) {
  return function(r, n) {
    return t(r, n) ? -1 : t(n, r) ? 1 : 0;
  };
});
const e0 = ZA;
var t0 = /* @__PURE__ */ ne(function(t) {
  return !t;
});
const r0 = t0;
var n0 = /* @__PURE__ */ _f(r0);
const vn = n0;
function i0(e, t) {
  return function() {
    return t.call(this, e.apply(this, arguments));
  };
}
function Tf(e, t) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return t();
    var n = arguments[r - 1];
    return hi(n) || typeof n[e] != "function" ? t.apply(this, arguments) : n[e].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var s0 = /* @__PURE__ */ He(
  /* @__PURE__ */ Tf("slice", function(t, r, n) {
    return Array.prototype.slice.call(n, t, r);
  })
);
const gi = s0;
var o0 = /* @__PURE__ */ ne(
  /* @__PURE__ */ Tf(
    "tail",
    /* @__PURE__ */ gi(1, 1 / 0)
  )
);
const $v = o0;
function xe() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return ta(arguments[0].length, jr(i0, arguments[0], $v(arguments)));
}
var a0 = /* @__PURE__ */ ia(0);
const c0 = a0;
function l0(e) {
  return e;
}
var u0 = /* @__PURE__ */ ne(l0);
const f0 = u0;
var p0 = /* @__PURE__ */ ne(function(t) {
  return ae(t.length, t);
});
const If = p0;
var h0 = /* @__PURE__ */ k(function(t, r) {
  return ae(jr(Of, 0, Af("length", r)), function() {
    var n = arguments, i = this;
    return t.apply(i, Kn(function(s) {
      return s.apply(i, n);
    }, r));
  });
});
const d0 = h0;
var m0 = /* @__PURE__ */ function() {
  function e(t, r, n, i) {
    this.valueFn = t, this.valueAcc = r, this.keyFn = n, this.xf = i, this.inputs = {};
  }
  return e.prototype["@@transducer/init"] = We.init, e.prototype["@@transducer/result"] = function(t) {
    var r;
    for (r in this.inputs)
      if (Qe(r, this.inputs) && (t = this.xf["@@transducer/step"](t, this.inputs[r]), t["@@transducer/reduced"])) {
        t = t["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, Rf(this.valueAcc, !1)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), t;
  }, e;
}();
function y0(e, t, r) {
  return function(n) {
    return new m0(e, t, r, n);
  };
}
var v0 = /* @__PURE__ */ Sf(
  4,
  [],
  /* @__PURE__ */ nr([], y0, function(t, r, n, i) {
    var s = gv(function(o, a) {
      var c = n(a), l = t(Qe(c, o) ? o[c] : Rf(r, !1), a);
      return l && l["@@transducer/reduced"] ? ra(o) : (o[c] = l, o);
    });
    return Pf(s, {}, i);
  })
);
const g0 = v0;
var b0 = /* @__PURE__ */ k(function(t, r) {
  return r == null || r !== r ? t : r;
});
const wr = b0;
var $0 = /* @__PURE__ */ function() {
  function e() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return e.prototype.add = function(t) {
    return !Kh(t, !0, this);
  }, e.prototype.has = function(t) {
    return Kh(t, !1, this);
  }, e;
}();
function Kh(e, t, r) {
  var n = typeof e, i, s;
  switch (n) {
    case "string":
    case "number":
      return e === 0 && 1 / e === -1 / 0 ? r._items["-0"] ? !0 : (t && (r._items["-0"] = !0), !1) : r._nativeSet !== null ? t ? (i = r._nativeSet.size, r._nativeSet.add(e), s = r._nativeSet.size, s === i) : r._nativeSet.has(e) : n in r._items ? e in r._items[n] ? !0 : (t && (r._items[n][e] = !0), !1) : (t && (r._items[n] = {}, r._items[n][e] = !0), !1);
    case "boolean":
      if (n in r._items) {
        var o = e ? 1 : 0;
        return r._items[n][o] ? !0 : (t && (r._items[n][o] = !0), !1);
      } else
        return t && (r._items[n] = e ? [!1, !0] : [!0, !1]), !1;
    case "function":
      return r._nativeSet !== null ? t ? (i = r._nativeSet.size, r._nativeSet.add(e), s = r._nativeSet.size, s === i) : r._nativeSet.has(e) : n in r._items ? Js(e, r._items[n]) ? !0 : (t && r._items[n].push(e), !1) : (t && (r._items[n] = [e]), !1);
    case "undefined":
      return r._items[n] ? !0 : (t && (r._items[n] = !0), !1);
    case "object":
      if (e === null)
        return r._items.null ? !0 : (t && (r._items.null = !0), !1);
    default:
      return n = Object.prototype.toString.call(e), n in r._items ? Js(e, r._items[n]) ? !0 : (t && r._items[n].push(e), !1) : (t && (r._items[n] = [e]), !1);
  }
}
const S0 = $0;
var E0 = /* @__PURE__ */ k(function(t, r) {
  for (var n = [], i = 0, s = t.length, o = r.length, a = new S0(), c = 0; c < o; c += 1)
    a.add(r[c]);
  for (; i < s; )
    a.add(t[i]) && (n[n.length] = t[i]), i += 1;
  return n;
});
const w0 = E0;
var O0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.n = t, this.i = 0;
  }
  return e.prototype["@@transducer/init"] = We.init, e.prototype["@@transducer/result"] = We.result, e.prototype["@@transducer/step"] = function(t, r) {
    this.i += 1;
    var n = this.n === 0 ? t : this.xf["@@transducer/step"](t, r);
    return this.n >= 0 && this.i >= this.n ? ra(n) : n;
  }, e;
}();
function x0(e) {
  return function(t) {
    return new O0(e, t);
  };
}
var A0 = /* @__PURE__ */ k(
  /* @__PURE__ */ nr(["take"], x0, function(t, r) {
    return gi(0, t < 0 ? 1 / 0 : t, r);
  })
);
const P0 = A0;
function j0(e, t) {
  for (var r = t.length - 1; r >= 0 && e(t[r]); )
    r -= 1;
  return gi(0, r + 1, t);
}
var _0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.f = t, this.retained = [], this.xf = r;
  }
  return e.prototype["@@transducer/init"] = We.init, e.prototype["@@transducer/result"] = function(t) {
    return this.retained = null, this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(r) ? this.retain(t, r) : this.flush(t, r);
  }, e.prototype.flush = function(t, r) {
    return t = Pf(this.xf, t, this.retained), this.retained = [], this.xf["@@transducer/step"](t, r);
  }, e.prototype.retain = function(t, r) {
    return this.retained.push(r), t;
  }, e;
}();
function R0(e) {
  return function(t) {
    return new _0(e, t);
  };
}
var T0 = /* @__PURE__ */ k(
  /* @__PURE__ */ nr([], R0, j0)
);
const I0 = T0;
var C0 = /* @__PURE__ */ ia(-1);
const sa = C0;
var V0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t;
  }
  return e.prototype["@@transducer/init"] = We.init, e.prototype["@@transducer/result"] = We.result, e.prototype["@@transducer/step"] = function(t, r) {
    if (this.f) {
      if (this.f(r))
        return t;
      this.f = null;
    }
    return this.xf["@@transducer/step"](t, r);
  }, e;
}();
function M0(e) {
  return function(t) {
    return new V0(e, t);
  };
}
var F0 = /* @__PURE__ */ k(
  /* @__PURE__ */ nr(["dropWhile"], M0, function(t, r) {
    for (var n = 0, i = r.length; n < i && t(r[n]); )
      n += 1;
    return gi(n, 1 / 0, r);
  })
);
const D0 = F0;
var N0 = /* @__PURE__ */ k(function(t, r) {
  return t || r;
});
const L0 = N0;
var k0 = /* @__PURE__ */ k(function(t, r) {
  return jf(t) ? function() {
    return t.apply(this, arguments) || r.apply(this, arguments);
  } : _f(L0)(t, r);
});
const U0 = k0;
function B0(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object Uint8ClampedArray]" || t === "[object Int8Array]" || t === "[object Uint8Array]" || t === "[object Int16Array]" || t === "[object Uint16Array]" || t === "[object Int32Array]" || t === "[object Uint32Array]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object BigInt64Array]" || t === "[object BigUint64Array]";
}
var q0 = /* @__PURE__ */ ne(function(t) {
  return t != null && typeof t["fantasy-land/empty"] == "function" ? t["fantasy-land/empty"]() : t != null && t.constructor != null && typeof t.constructor["fantasy-land/empty"] == "function" ? t.constructor["fantasy-land/empty"]() : t != null && typeof t.empty == "function" ? t.empty() : t != null && t.constructor != null && typeof t.constructor.empty == "function" ? t.constructor.empty() : hi(t) ? [] : xf(t) ? "" : zs(t) ? {} : dv(t) ? /* @__PURE__ */ function() {
    return arguments;
  }() : B0(t) ? t.constructor.from("") : void 0;
});
const H0 = q0;
var G0 = /* @__PURE__ */ ne(function(t) {
  return ae(t.length, function(r, n) {
    var i = Array.prototype.slice.call(arguments, 0);
    return i[0] = n, i[1] = r, t.apply(this, i);
  });
});
const J0 = G0;
var z0 = /* @__PURE__ */ k(
  /* @__PURE__ */ Tf(
    "groupBy",
    /* @__PURE__ */ g0(function(e, t) {
      return e.push(t), e;
    }, [])
  )
);
const K0 = z0;
var W0 = /* @__PURE__ */ k(function(t, r) {
  if (t.length === 0 || Ks(r))
    return !1;
  for (var n = r, i = 0; i < t.length; )
    if (!Ks(n) && Qe(t[i], n))
      n = n[t[i]], i += 1;
    else
      return !1;
  return !0;
});
const Y0 = W0;
var X0 = /* @__PURE__ */ k(function(t, r) {
  return Y0([t], r);
});
const mr = X0;
var Sv = function(e, t) {
  switch (arguments.length) {
    case 0:
      return Sv;
    case 1:
      return /* @__PURE__ */ function() {
        return function r(n) {
          switch (arguments.length) {
            case 0:
              return r;
            default:
              return zn(e, n);
          }
        };
      }();
    default:
      return zn(e, t);
  }
};
const ir = Sv;
var Q0 = /* @__PURE__ */ He(function(t, r, n) {
  return ae(Math.max(t.length, r.length, n.length), function() {
    return t.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
});
const Cf = Q0;
var Z0 = /* @__PURE__ */ k(Js);
const eP = Z0;
var tP = /* @__PURE__ */ gi(0, -1);
const rP = tP;
var nP = /* @__PURE__ */ k(function(t, r) {
  return ae(t + 1, function() {
    var n = arguments[t];
    if (n != null && jf(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, t));
    throw new TypeError(cn(n) + ' does not have a method named "' + r + '"');
  });
});
const Vf = nP;
var iP = /* @__PURE__ */ ne(function(t) {
  return t != null && Mt(t, H0(t));
});
const bi = iP;
var sP = /* @__PURE__ */ Vf(1, "join");
const Ev = sP;
function Wh(e) {
  return Object.prototype.toString.call(e) === "[object Number]";
}
var oP = /* @__PURE__ */ k(function(t, r) {
  return function(n) {
    return function(i) {
      return mi(function(s) {
        return r(s, i);
      }, n(t(i)));
    };
  };
});
const aP = oP;
var cP = /* @__PURE__ */ k(function(t, r) {
  return t.map(function(n) {
    for (var i = r, s = 0, o; s < n.length; ) {
      if (i == null)
        return;
      o = n[s], i = na(o) ? ia(o, i) : i[o], s += 1;
    }
    return i;
  });
});
const lP = cP;
var uP = /* @__PURE__ */ k(function(t, r) {
  return lP([t], r)[0];
});
const ze = uP;
var fP = /* @__PURE__ */ k(function(t, r) {
  return di(function(n, i) {
    return n[i] = t(r[i], i, r), n;
  }, {}, Zt(r));
});
const pP = fP;
var hP = /* @__PURE__ */ He(function(t, r, n) {
  var i = {}, s;
  r = r || {}, n = n || {};
  for (s in r)
    Qe(s, r) && (i[s] = Qe(s, n) ? t(s, r[s], n[s]) : r[s]);
  for (s in n)
    Qe(s, n) && !Qe(s, i) && (i[s] = n[s]);
  return i;
});
const dP = hP;
var mP = /* @__PURE__ */ He(function e(t, r, n) {
  return dP(function(i, s, o) {
    return zs(s) && zs(o) ? e(t, s, o) : t(i, s, o);
  }, r, n);
});
const yP = mP;
var vP = /* @__PURE__ */ k(function(t, r) {
  return yP(function(n, i, s) {
    return s;
  }, t, r);
});
const wv = vP;
var gP = /* @__PURE__ */ k(function(t, r) {
  return Ef(mv(t), r);
});
const Fl = gP;
var Ov = function(e) {
  return {
    value: e,
    map: function(t) {
      return Ov(t(e));
    }
  };
}, bP = /* @__PURE__ */ He(function(t, r, n) {
  return t(function(i) {
    return Ov(r(i));
  })(n).value;
});
const $P = bP;
var SP = /* @__PURE__ */ He(function(t, r, n) {
  return wr(t, ze(r, n));
});
const xv = SP;
var EP = /* @__PURE__ */ He(function(t, r, n) {
  return t(ze(r, n));
});
const oa = EP;
var wP = /* @__PURE__ */ k(function(t, r) {
  for (var n = {}, i = 0; i < t.length; )
    t[i] in r && (n[t[i]] = r[t[i]]), i += 1;
  return n;
});
const Av = wP;
var OP = /* @__PURE__ */ He(function(t, r, n) {
  return Mt(t, yi(r, n));
});
const aa = OP;
var xP = /* @__PURE__ */ He(function(t, r, n) {
  return wr(t, yi(r, n));
});
const Dl = xP;
var AP = /* @__PURE__ */ He(function(t, r, n) {
  return t(yi(r, n));
});
const PP = AP;
var jP = /* @__PURE__ */ k(function(t, r) {
  if (!(Wh(t) && Wh(r)))
    throw new TypeError("Both arguments to range must be numbers");
  for (var n = [], i = t; i < r; )
    n.push(i), i += 1;
  return n;
});
const _P = jP;
var RP = /* @__PURE__ */ ne(ra);
const TP = RP;
var IP = /* @__PURE__ */ He(function(t, r, n) {
  return n.replace(t, r);
});
const ln = IP;
var CP = /* @__PURE__ */ k(function(t, r) {
  return Array.prototype.slice.call(r, 0).sort(t);
});
const VP = CP;
var MP = /* @__PURE__ */ Vf(1, "split");
const Mf = MP;
var FP = /* @__PURE__ */ k(function(e, t) {
  return Mt(P0(e.length, t), e);
});
const Pv = FP;
function DP(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
var NP = /* @__PURE__ */ k(function(t, r) {
  if (!DP(t))
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + cn(t));
  return bv(t).test(r);
});
const Ff = NP;
var LP = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.pred = t, this.items = [];
  }
  return e.prototype["@@transducer/init"] = We.init, e.prototype["@@transducer/result"] = We.result, e.prototype["@@transducer/step"] = function(t, r) {
    return Gs(this.pred, r, this.items) ? t : (this.items.push(r), this.xf["@@transducer/step"](t, r));
  }, e;
}();
function kP(e) {
  return function(t) {
    return new LP(e, t);
  };
}
var UP = /* @__PURE__ */ k(
  /* @__PURE__ */ nr([], kP, function(e, t) {
    for (var r = 0, n = t.length, i = [], s; r < n; )
      s = t[r], Gs(e, s, i) || (i[i.length] = s), r += 1;
    return i;
  })
);
const BP = UP;
var qP = /* @__PURE__ */ He(function(t, r, n) {
  return t(n) ? r(n) : n;
});
const HP = qP;
var GP = D(void 0);
const $i = GP;
var JP = Mt($i());
const Ft = JP;
var zP = vn(Ft);
const jv = zP;
var KP = Mt(null);
const Df = KP;
var WP = vn(Df);
const _v = WP;
var YP = vn(Ks);
const XP = YP;
var QP = ae(1, xe(tt, ir("GeneratorFunction")));
const ZP = QP;
var ej = ae(1, xe(tt, ir("AsyncFunction")));
const tj = ej;
var rj = IA([xe(tt, ir("Function")), ZP, tj]);
const Dt = rj;
var nj = ae(1, Dt(Array.isArray) ? Array.isArray : xe(tt, ir("Array")));
const Rv = nj;
var ij = _r(Rv, bi);
const sj = ij;
var oj = vn(bi);
const Tv = oj;
var aj = _r(Rv, Tv);
const cj = aj;
var lj = ae(1, xe(tt, ir("String")));
const Rr = lj;
var uj = Mt("");
const Iv = uj;
function Nl(e) {
  "@babel/helpers - typeof";
  return Nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nl(e);
}
var fj = function(t) {
  return Nl(t) === "object";
};
const Cv = fj;
var pj = ae(1, _r(_v, U0(Cv, Dt)));
const hj = pj;
var dj = vn(hj);
const mj = dj;
var yj = PA([Rr, mj, Tv]);
const Nf = yj;
var vj = vn(Dt);
const gj = vj;
var bj = ae(1, _r(_v, Cv));
const $j = bj;
var Sj = xe(tt, ir("Object")), Ej = xe(cn, Mt(cn(Object))), wj = oa(_r(Dt, Ej), ["constructor"]), Oj = ae(1, function(e) {
  if (!$j(e) || !Sj(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  return Df(t) ? !0 : wj(t);
});
const Ws = Oj;
var xj = ae(1, xe(tt, ir("Number")));
const Aj = xj;
var Pj = _r(Aj, isFinite);
const jj = Pj;
var _j = ae(1, jj), Rj = Dt(Number.isFinite) ? ae(1, vi(Number.isFinite, Number)) : _j;
const Tj = Rj;
var Ij = _r(Tj, d0(Mt, [Math.floor, f0]));
const Cj = Ij;
var Vj = ae(1, Cj), Mj = Dt(Number.isInteger) ? ae(1, vi(Number.isInteger, Number)) : Vj;
const Fj = Mj;
var Dj = ae(1, xe(tt, ir("RegExp")));
const Nj = Dj;
var Lj = D($i());
const un = Lj;
var kj = ae(1, vi(Promise.all, Promise));
const Uj = kj;
function Bj(e) {
  return Jj(e) || Gj(e) || Hj(e) || qj();
}
function qj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hj(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ll(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ll(e, t);
  }
}
function Gj(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Jj(e) {
  if (Array.isArray(e))
    return Ll(e);
}
function Ll(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var zj = e0(function(e, t) {
  return e.length > t.length;
}), Kj = xe(VP(zj), c0, yi("length")), Wj = If(function(e, t, r) {
  var n = r.apply(void 0, Bj(e));
  return XP(n) ? TP(n) : t;
}), Yj = function(t) {
  var r = Kj(t);
  return ae(r, function() {
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return jr(Wj(i), void 0, t);
  });
}, Xj = Cf(cj, Yj, $i);
const Vv = Xj;
var Qj = J0(eP);
const ca = Qj;
var Zj = ae(3, function(e, t, r) {
  var n = ze(e, r), i = ze(rP(e), r);
  if (!gj(n) && !sj(e)) {
    var s = vi(n, i);
    return kA(s, t);
  }
});
const fn = Zj;
var e_ = HP(Rr, ln(/[.*+?^${}()|[\]\\-]/g, "\\$&"));
const t_ = e_;
var r_ = function(t, r, n) {
  if (n == null || t == null || r == null)
    throw TypeError("Input values must not be `null` or `undefined`");
}, Yh = function(t, r) {
  if (typeof t != "string" && !(t instanceof String))
    throw TypeError("`".concat(r, "` must be a string"));
}, n_ = function(t) {
  if (typeof t != "string" && !(t instanceof String) && !(t instanceof RegExp))
    throw TypeError("`searchValue` must be a string or an regexp");
}, i_ = function(t, r, n) {
  r_(t, r, n), Yh(n, "str"), Yh(r, "replaceValue"), n_(t);
  var i = new RegExp(Nj(t) ? t : t_(t), "g");
  return ln(i, r, n);
};
const s_ = i_;
var o_ = ae(3, s_), a_ = Vf(2, "replaceAll"), c_ = Dt(String.prototype.replaceAll) ? a_ : o_;
const l_ = c_;
var u_ = If(function(e, t) {
  return xe(Mf(""), I0(ca(e)), Ev(""))(t);
});
const f_ = u_;
var p_ = If(function(e, t) {
  return xe(Mf(""), D0(ca(e)), Ev(""))(t);
});
const Lf = p_;
var Mv = { exports: {} }, ve = Mv.exports = {}, pt, ht;
function kl() {
  throw new Error("setTimeout has not been defined");
}
function Ul() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? pt = setTimeout : pt = kl;
  } catch {
    pt = kl;
  }
  try {
    typeof clearTimeout == "function" ? ht = clearTimeout : ht = Ul;
  } catch {
    ht = Ul;
  }
})();
function Fv(e) {
  if (pt === setTimeout)
    return setTimeout(e, 0);
  if ((pt === kl || !pt) && setTimeout)
    return pt = setTimeout, setTimeout(e, 0);
  try {
    return pt(e, 0);
  } catch {
    try {
      return pt.call(null, e, 0);
    } catch {
      return pt.call(this, e, 0);
    }
  }
}
function h_(e) {
  if (ht === clearTimeout)
    return clearTimeout(e);
  if ((ht === Ul || !ht) && clearTimeout)
    return ht = clearTimeout, clearTimeout(e);
  try {
    return ht(e);
  } catch {
    try {
      return ht.call(null, e);
    } catch {
      return ht.call(this, e);
    }
  }
}
var Ot = [], Xr = !1, yr, Es = -1;
function d_() {
  !Xr || !yr || (Xr = !1, yr.length ? Ot = yr.concat(Ot) : Es = -1, Ot.length && Dv());
}
function Dv() {
  if (!Xr) {
    var e = Fv(d_);
    Xr = !0;
    for (var t = Ot.length; t; ) {
      for (yr = Ot, Ot = []; ++Es < t; )
        yr && yr[Es].run();
      Es = -1, t = Ot.length;
    }
    yr = null, Xr = !1, h_(e);
  }
}
ve.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  Ot.push(new Nv(e, t)), Ot.length === 1 && !Xr && Fv(Dv);
};
function Nv(e, t) {
  this.fun = e, this.array = t;
}
Nv.prototype.run = function() {
  this.fun.apply(null, this.array);
};
ve.title = "browser";
ve.browser = !0;
ve.env = {};
ve.argv = [];
ve.version = "";
ve.versions = {};
function Nt() {
}
ve.on = Nt;
ve.addListener = Nt;
ve.once = Nt;
ve.off = Nt;
ve.removeListener = Nt;
ve.removeAllListeners = Nt;
ve.emit = Nt;
ve.prependListener = Nt;
ve.prependOnceListener = Nt;
ve.listeners = function(e) {
  return [];
};
ve.binding = function(e) {
  throw new Error("process.binding is not supported");
};
ve.cwd = function() {
  return "/";
};
ve.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
ve.umask = function() {
  return 0;
};
var m_ = Mv.exports;
const Ys = /* @__PURE__ */ Ar(m_), kf = () => oa(Ff(/^win/), ["platform"], Ys), la = (e) => {
  try {
    const t = new URL(e);
    return f_(":", t.protocol);
  } catch {
    return;
  }
}, y_ = xe(la, jv), Lv = (e) => {
  const t = e.lastIndexOf(".");
  return t >= 0 ? e.substr(t).toLowerCase() : "";
}, Qr = (e) => {
  if (Ys.browser)
    return !1;
  const t = la(e);
  return Ft(t) || t === "file" || /^[a-zA-Z]$/.test(t);
}, Er = (e) => {
  const t = la(e);
  return t === "http" || t === "https";
}, v_ = (e) => {
  try {
    return new URL(e) && !0;
  } catch {
    return !1;
  }
}, Uf = (e, t) => {
  const r = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], n = Dl(!1, "keepFileProtocol", t), i = Dl(kf, "isWindows", t);
  let s = decodeURI(e);
  for (let a = 0; a < r.length; a += 2)
    s = s.replace(r[a], r[a + 1]);
  let o = s.substr(0, 7).toLowerCase() === "file://";
  return o && (s = s[7] === "/" ? s.substr(8) : s.substr(7), i() && s[1] === "/" && (s = `${s[0]}:${s.substr(1)}`), n ? s = `file:///${s}` : (o = !1, s = i() ? s : `/${s}`)), i() && !o && (s = l_("/", "\\", s), s.substr(1, 2) === ":\\" && (s = s[0].toUpperCase() + s.substr(1))), s;
}, kv = (e) => {
  const t = [/\?/g, "%3F", /#/g, "%23"];
  let r = e;
  kf() && (r = r.replace(/\\/g, "/")), r = encodeURI(r);
  for (let n = 0; n < t.length; n += 2)
    r = r.replace(t[n], t[n + 1]);
  return r;
}, Bf = (e) => {
  const t = e.indexOf("#");
  return t !== -1 ? e.substr(t) : "#";
}, he = (e) => {
  const t = e.indexOf("#");
  let r = e;
  return t >= 0 && (r = e.substr(0, t)), r;
}, Xs = () => {
  if (Ys.browser)
    return he(globalThis.location.href);
  const e = Ys.cwd(), t = sa(e);
  return ["/", "\\"].includes(t) ? e : e + (kf() ? "\\" : "/");
}, Se = (e, t) => {
  const r = new URL(t, new URL(e, "resolve://"));
  if (r.protocol === "resolve:") {
    const {
      pathname: n,
      search: i,
      hash: s
    } = r;
    return n + i + s;
  }
  return r.toString();
}, gn = (e) => {
  if (Qr(e))
    return kv(Uf(e));
  try {
    return new URL(e).toString();
  } catch {
    return encodeURI(decodeURI(e)).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
}, ge = (e) => Qr(e) ? Uf(e) : decodeURI(e), g_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cwd: Xs,
  fromFileSystemPath: kv,
  getExtension: Lv,
  getHash: Bf,
  getProtocol: la,
  hasProtocol: y_,
  isFileSystemPath: Qr,
  isHttpUrl: Er,
  isURI: v_,
  resolve: Se,
  sanitize: gn,
  stripHash: he,
  toFileSystemPath: Uf,
  unsanitize: ge
}, Symbol.toStringTag, { value: "Module" })), b_ = v({
  props: {
    uri: null,
    mediaType: "text/plain",
    data: null,
    parseResult: null
  },
  init({
    uri: e = this.uri,
    mediaType: t = this.mediaType,
    data: r = this.data,
    parseResult: n = this.parseResult
  } = {}) {
    this.uri = e, this.mediaType = t, this.data = r, this.parseResult = n;
  },
  methods: {
    get extension() {
      return Rr(this.uri) ? Lv(this.uri) : "";
    },
    toString() {
      return typeof this.data == "string" ? this.data : this.data instanceof ArrayBuffer || ["ArrayBuffer"].includes(tt(this.data)) || ArrayBuffer.isView(this.data) ? new TextDecoder("utf-8").decode(this.data) : String(this.data);
    }
  }
}), Or = b_, $_ = {
  parse: {
    /**
     * This is media type that
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
}, S_ = $_, E_ = aP(ze(["resolve", "baseURI"]), JA(["resolve", "baseURI"])), w_ = (e) => Iv(e) ? Xs() : e, O_ = (e, t) => {
  const r = wv(e, t);
  return $P(E_, w_, r);
};
var Dn = function(e) {
  return e && e.Math === Math && e;
}, nt = (
  // eslint-disable-next-line es/no-global-this -- safe
  Dn(typeof globalThis == "object" && globalThis) || Dn(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Dn(typeof self == "object" && self) || Dn(typeof wt == "object" && wt) || Dn(typeof wt == "object" && wt) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), ct = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, x_ = ct, ua = !x_(function() {
  var e = (function() {
  }).bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), A_ = ua, Uv = Function.prototype, Xh = Uv.apply, Qh = Uv.call, qf = typeof Reflect == "object" && Reflect.apply || (A_ ? Qh.bind(Xh) : function() {
  return Qh.apply(Xh, arguments);
}), Bv = ua, qv = Function.prototype, Bl = qv.call, P_ = Bv && qv.bind.bind(Bl, Bl), lt = Bv ? P_ : function(e) {
  return function() {
    return Bl.apply(e, arguments);
  };
}, Hv = lt, j_ = Hv({}.toString), __ = Hv("".slice), Hf = function(e) {
  return __(j_(e), 8, -1);
}, R_ = Hf, T_ = lt, Gv = function(e) {
  if (R_(e) === "Function")
    return T_(e);
}, ql = typeof document == "object" && document.all, I_ = typeof ql > "u" && ql !== void 0, Jv = {
  all: ql,
  IS_HTMLDDA: I_
}, zv = Jv, C_ = zv.all, Ye = zv.IS_HTMLDDA ? function(e) {
  return typeof e == "function" || e === C_;
} : function(e) {
  return typeof e == "function";
}, Gf = {}, V_ = ct, sr = !V_(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), M_ = ua, cs = Function.prototype.call, Tr = M_ ? cs.bind(cs) : function() {
  return cs.apply(cs, arguments);
}, Kv = {}, Wv = {}.propertyIsEnumerable, Yv = Object.getOwnPropertyDescriptor, F_ = Yv && !Wv.call({ 1: 2 }, 1);
Kv.f = F_ ? function(t) {
  var r = Yv(this, t);
  return !!r && r.enumerable;
} : Wv;
var Si = function(e, t) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: t
  };
}, D_ = lt, N_ = ct, L_ = Hf, Rc = Object, k_ = D_("".split), U_ = N_(function() {
  return !Rc("z").propertyIsEnumerable(0);
}) ? function(e) {
  return L_(e) === "String" ? k_(e, "") : Rc(e);
} : Rc, Jf = function(e) {
  return e == null;
}, B_ = Jf, q_ = TypeError, zf = function(e) {
  if (B_(e))
    throw new q_("Can't call method on " + e);
  return e;
}, H_ = U_, G_ = zf, Ei = function(e) {
  return H_(G_(e));
}, Zh = Ye, Xv = Jv, J_ = Xv.all, or = Xv.IS_HTMLDDA ? function(e) {
  return typeof e == "object" ? e !== null : Zh(e) || e === J_;
} : function(e) {
  return typeof e == "object" ? e !== null : Zh(e);
}, Kf = {}, Tc = Kf, Ic = nt, z_ = Ye, ed = function(e) {
  return z_(e) ? e : void 0;
}, wi = function(e, t) {
  return arguments.length < 2 ? ed(Tc[e]) || ed(Ic[e]) : Tc[e] && Tc[e][t] || Ic[e] && Ic[e][t];
}, K_ = lt, fa = K_({}.isPrototypeOf), W_ = typeof navigator < "u" && String(navigator.userAgent) || "", Qv = nt, Cc = W_, td = Qv.process, rd = Qv.Deno, nd = td && td.versions || rd && rd.version, id = nd && nd.v8, ot, Qs;
id && (ot = id.split("."), Qs = ot[0] > 0 && ot[0] < 4 ? 1 : +(ot[0] + ot[1]));
!Qs && Cc && (ot = Cc.match(/Edge\/(\d+)/), (!ot || ot[1] >= 74) && (ot = Cc.match(/Chrome\/(\d+)/), ot && (Qs = +ot[1])));
var Y_ = Qs, sd = Y_, X_ = ct, Q_ = nt, Z_ = Q_.String, Zv = !!Object.getOwnPropertySymbols && !X_(function() {
  var e = Symbol("symbol detection");
  return !Z_(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && sd && sd < 41;
}), eR = Zv, eg = eR && !Symbol.sham && typeof Symbol.iterator == "symbol", tR = wi, rR = Ye, nR = fa, iR = eg, sR = Object, tg = iR ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var t = tR("Symbol");
  return rR(t) && nR(t.prototype, sR(e));
}, oR = String, Wf = function(e) {
  try {
    return oR(e);
  } catch {
    return "Object";
  }
}, aR = Ye, cR = Wf, lR = TypeError, pa = function(e) {
  if (aR(e))
    return e;
  throw new lR(cR(e) + " is not a function");
}, uR = pa, fR = Jf, Yf = function(e, t) {
  var r = e[t];
  return fR(r) ? void 0 : uR(r);
}, Vc = Tr, Mc = Ye, Fc = or, pR = TypeError, hR = function(e, t) {
  var r, n;
  if (t === "string" && Mc(r = e.toString) && !Fc(n = Vc(r, e)) || Mc(r = e.valueOf) && !Fc(n = Vc(r, e)) || t !== "string" && Mc(r = e.toString) && !Fc(n = Vc(r, e)))
    return n;
  throw new pR("Can't convert object to primitive value");
}, rg = { exports: {} }, od = nt, dR = Object.defineProperty, mR = function(e, t) {
  try {
    dR(od, e, { value: t, configurable: !0, writable: !0 });
  } catch {
    od[e] = t;
  }
  return t;
}, yR = nt, vR = mR, ad = "__core-js_shared__", gR = yR[ad] || vR(ad, {}), ng = gR, cd = ng;
(rg.exports = function(e, t) {
  return cd[e] || (cd[e] = t !== void 0 ? t : {});
})("versions", []).push({
  version: "3.34.0",
  mode: "pure",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var ig = rg.exports, bR = zf, $R = Object, sg = function(e) {
  return $R(bR(e));
}, SR = lt, ER = sg, wR = SR({}.hasOwnProperty), Lt = Object.hasOwn || function(t, r) {
  return wR(ER(t), r);
}, OR = lt, xR = 0, AR = Math.random(), PR = OR(1 .toString), og = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + PR(++xR + AR, 36);
}, jR = nt, _R = ig, ld = Lt, RR = og, TR = Zv, IR = eg, Wr = jR.Symbol, Dc = _R("wks"), CR = IR ? Wr.for || Wr : Wr && Wr.withoutSetter || RR, kt = function(e) {
  return ld(Dc, e) || (Dc[e] = TR && ld(Wr, e) ? Wr[e] : CR("Symbol." + e)), Dc[e];
}, VR = Tr, ud = or, fd = tg, MR = Yf, FR = hR, DR = kt, NR = TypeError, LR = DR("toPrimitive"), kR = function(e, t) {
  if (!ud(e) || fd(e))
    return e;
  var r = MR(e, LR), n;
  if (r) {
    if (t === void 0 && (t = "default"), n = VR(r, e, t), !ud(n) || fd(n))
      return n;
    throw new NR("Can't convert object to primitive value");
  }
  return t === void 0 && (t = "number"), FR(e, t);
}, UR = kR, BR = tg, ag = function(e) {
  var t = UR(e, "string");
  return BR(t) ? t : t + "";
}, qR = nt, pd = or, Hl = qR.document, HR = pd(Hl) && pd(Hl.createElement), cg = function(e) {
  return HR ? Hl.createElement(e) : {};
}, GR = sr, JR = ct, zR = cg, lg = !GR && !JR(function() {
  return Object.defineProperty(zR("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), KR = sr, WR = Tr, YR = Kv, XR = Si, QR = Ei, ZR = ag, eT = Lt, tT = lg, hd = Object.getOwnPropertyDescriptor;
Gf.f = KR ? hd : function(t, r) {
  if (t = QR(t), r = ZR(r), tT)
    try {
      return hd(t, r);
    } catch {
    }
  if (eT(t, r))
    return XR(!WR(YR.f, t, r), t[r]);
};
var rT = ct, nT = Ye, iT = /#|\.prototype\./, Oi = function(e, t) {
  var r = oT[sT(e)];
  return r === cT ? !0 : r === aT ? !1 : nT(t) ? rT(t) : !!t;
}, sT = Oi.normalize = function(e) {
  return String(e).replace(iT, ".").toLowerCase();
}, oT = Oi.data = {}, aT = Oi.NATIVE = "N", cT = Oi.POLYFILL = "P", lT = Oi, dd = Gv, uT = pa, fT = ua, pT = dd(dd.bind), ug = function(e, t) {
  return uT(e), t === void 0 ? e : fT ? pT(e, t) : function() {
    return e.apply(t, arguments);
  };
}, Ir = {}, hT = sr, dT = ct, fg = hT && dT(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), mT = or, yT = String, vT = TypeError, ar = function(e) {
  if (mT(e))
    return e;
  throw new vT(yT(e) + " is not an object");
}, gT = sr, bT = lg, $T = fg, ls = ar, md = ag, ST = TypeError, Nc = Object.defineProperty, ET = Object.getOwnPropertyDescriptor, Lc = "enumerable", kc = "configurable", Uc = "writable";
Ir.f = gT ? $T ? function(t, r, n) {
  if (ls(t), r = md(r), ls(n), typeof t == "function" && r === "prototype" && "value" in n && Uc in n && !n[Uc]) {
    var i = ET(t, r);
    i && i[Uc] && (t[r] = n.value, n = {
      configurable: kc in n ? n[kc] : i[kc],
      enumerable: Lc in n ? n[Lc] : i[Lc],
      writable: !1
    });
  }
  return Nc(t, r, n);
} : Nc : function(t, r, n) {
  if (ls(t), r = md(r), ls(n), bT)
    try {
      return Nc(t, r, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw new ST("Accessors not supported");
  return "value" in n && (t[r] = n.value), t;
};
var wT = sr, OT = Ir, xT = Si, cr = wT ? function(e, t, r) {
  return OT.f(e, t, xT(1, r));
} : function(e, t, r) {
  return e[t] = r, e;
}, us = nt, AT = qf, PT = Gv, jT = Ye, _T = Gf.f, RT = lT, kr = Kf, TT = ug, Ur = cr, yd = Lt, IT = function(e) {
  var t = function(r, n, i) {
    if (this instanceof t) {
      switch (arguments.length) {
        case 0:
          return new e();
        case 1:
          return new e(r);
        case 2:
          return new e(r, n);
      }
      return new e(r, n, i);
    }
    return AT(e, this, arguments);
  };
  return t.prototype = e.prototype, t;
}, ha = function(e, t) {
  var r = e.target, n = e.global, i = e.stat, s = e.proto, o = n ? us : i ? us[r] : (us[r] || {}).prototype, a = n ? kr : kr[r] || Ur(kr, r, {})[r], c = a.prototype, l, f, u, h, p, d, y, g, b;
  for (h in t)
    l = RT(n ? h : r + (i ? "." : "#") + h, e.forced), f = !l && o && yd(o, h), d = a[h], f && (e.dontCallGetSet ? (b = _T(o, h), y = b && b.value) : y = o[h]), p = f && y ? y : t[h], !(f && typeof d == typeof p) && (e.bind && f ? g = TT(p, us) : e.wrap && f ? g = IT(p) : s && jT(p) ? g = PT(p) : g = p, (e.sham || p && p.sham || d && d.sham) && Ur(g, "sham", !0), Ur(a, h, g), s && (u = r + "Prototype", yd(kr, u) || Ur(kr, u, {}), Ur(kr[u], h, p), e.real && c && (l || !c[h]) && Ur(c, h, p)));
}, CT = ig, VT = og, vd = CT("keys"), Xf = function(e) {
  return vd[e] || (vd[e] = VT(e));
}, MT = ct, FT = !MT(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), DT = Lt, NT = Ye, LT = sg, kT = Xf, UT = FT, gd = kT("IE_PROTO"), Gl = Object, BT = Gl.prototype, Qf = UT ? Gl.getPrototypeOf : function(e) {
  var t = LT(e);
  if (DT(t, gd))
    return t[gd];
  var r = t.constructor;
  return NT(r) && t instanceof r ? r.prototype : t instanceof Gl ? BT : null;
}, qT = lt, HT = pa, GT = function(e, t, r) {
  try {
    return qT(HT(Object.getOwnPropertyDescriptor(e, t)[r]));
  } catch {
  }
}, JT = Ye, zT = String, KT = TypeError, WT = function(e) {
  if (typeof e == "object" || JT(e))
    return e;
  throw new KT("Can't set " + zT(e) + " as a prototype");
}, YT = GT, XT = ar, QT = WT, Zf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e = !1, t = {}, r;
  try {
    r = YT(Object.prototype, "__proto__", "set"), r(t, []), e = t instanceof Array;
  } catch {
  }
  return function(i, s) {
    return XT(i), QT(s), e ? r(i, s) : i.__proto__ = s, i;
  };
}() : void 0), pg = {}, ZT = Math.ceil, eI = Math.floor, tI = Math.trunc || function(t) {
  var r = +t;
  return (r > 0 ? eI : ZT)(r);
}, rI = tI, ep = function(e) {
  var t = +e;
  return t !== t || t === 0 ? 0 : rI(t);
}, nI = ep, iI = Math.max, sI = Math.min, oI = function(e, t) {
  var r = nI(e);
  return r < 0 ? iI(r + t, 0) : sI(r, t);
}, aI = ep, cI = Math.min, lI = function(e) {
  return e > 0 ? cI(aI(e), 9007199254740991) : 0;
}, uI = lI, hg = function(e) {
  return uI(e.length);
}, fI = Ei, pI = oI, hI = hg, bd = function(e) {
  return function(t, r, n) {
    var i = fI(t), s = hI(i), o = pI(n, s), a;
    if (e && r !== r) {
      for (; s > o; )
        if (a = i[o++], a !== a)
          return !0;
    } else
      for (; s > o; o++)
        if ((e || o in i) && i[o] === r)
          return e || o || 0;
    return !e && -1;
  };
}, dI = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: bd(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: bd(!1)
}, tp = {}, mI = lt, Bc = Lt, yI = Ei, vI = dI.indexOf, gI = tp, $d = mI([].push), dg = function(e, t) {
  var r = yI(e), n = 0, i = [], s;
  for (s in r)
    !Bc(gI, s) && Bc(r, s) && $d(i, s);
  for (; t.length > n; )
    Bc(r, s = t[n++]) && (~vI(i, s) || $d(i, s));
  return i;
}, rp = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], bI = dg, $I = rp, SI = $I.concat("length", "prototype");
pg.f = Object.getOwnPropertyNames || function(t) {
  return bI(t, SI);
};
var mg = {};
mg.f = Object.getOwnPropertySymbols;
var EI = wi, wI = lt, OI = pg, xI = mg, AI = ar, PI = wI([].concat), jI = EI("Reflect", "ownKeys") || function(t) {
  var r = OI.f(AI(t)), n = xI.f;
  return n ? PI(r, n(t)) : r;
}, Sd = Lt, _I = jI, RI = Gf, TI = Ir, yg = function(e, t, r) {
  for (var n = _I(t), i = TI.f, s = RI.f, o = 0; o < n.length; o++) {
    var a = n[o];
    !Sd(e, a) && !(r && Sd(r, a)) && i(e, a, s(t, a));
  }
}, vg = {}, II = dg, CI = rp, VI = Object.keys || function(t) {
  return II(t, CI);
}, MI = sr, FI = fg, DI = Ir, NI = ar, LI = Ei, kI = VI;
vg.f = MI && !FI ? Object.defineProperties : function(t, r) {
  NI(t);
  for (var n = LI(r), i = kI(r), s = i.length, o = 0, a; s > o; )
    DI.f(t, a = i[o++], n[a]);
  return t;
};
var UI = wi, BI = UI("document", "documentElement"), qI = ar, HI = vg, Ed = rp, GI = tp, JI = BI, zI = cg, KI = Xf, wd = ">", Od = "<", Jl = "prototype", zl = "script", gg = KI("IE_PROTO"), qc = function() {
}, bg = function(e) {
  return Od + zl + wd + e + Od + "/" + zl + wd;
}, xd = function(e) {
  e.write(bg("")), e.close();
  var t = e.parentWindow.Object;
  return e = null, t;
}, WI = function() {
  var e = zI("iframe"), t = "java" + zl + ":", r;
  return e.style.display = "none", JI.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(bg("document.F=Object")), r.close(), r.F;
}, fs, ws = function() {
  try {
    fs = new ActiveXObject("htmlfile");
  } catch {
  }
  ws = typeof document < "u" ? document.domain && fs ? xd(fs) : WI() : xd(fs);
  for (var e = Ed.length; e--; )
    delete ws[Jl][Ed[e]];
  return ws();
};
GI[gg] = !0;
var np = Object.create || function(t, r) {
  var n;
  return t !== null ? (qc[Jl] = qI(t), n = new qc(), qc[Jl] = null, n[gg] = t) : n = ws(), r === void 0 ? n : HI.f(n, r);
}, YI = or, XI = cr, $g = function(e, t) {
  YI(t) && "cause" in t && XI(e, "cause", t.cause);
}, QI = lt, Sg = Error, ZI = QI("".replace), eC = function(e) {
  return String(new Sg(e).stack);
}("zxcasd"), Eg = /\n\s*at [^:]*:[^\n]*/, tC = Eg.test(eC), rC = function(e, t) {
  if (tC && typeof e == "string" && !Sg.prepareStackTrace)
    for (; t--; )
      e = ZI(e, Eg, "");
  return e;
}, nC = ct, iC = Si, sC = !nC(function() {
  var e = new Error("a");
  return "stack" in e ? (Object.defineProperty(e, "stack", iC(1, 7)), e.stack !== 7) : !0;
}), oC = cr, aC = rC, cC = sC, Ad = Error.captureStackTrace, wg = function(e, t, r, n) {
  cC && (Ad ? Ad(e, t) : oC(e, "stack", aC(r, n)));
}, bn = {}, lC = kt, uC = bn, fC = lC("iterator"), pC = Array.prototype, hC = function(e) {
  return e !== void 0 && (uC.Array === e || pC[fC] === e);
}, dC = kt, mC = dC("toStringTag"), Og = {};
Og[mC] = "z";
var ip = String(Og) === "[object z]", yC = ip, vC = Ye, Os = Hf, gC = kt, bC = gC("toStringTag"), $C = Object, SC = Os(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", EC = function(e, t) {
  try {
    return e[t];
  } catch {
  }
}, sp = yC ? Os : function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = EC(t = $C(e), bC)) == "string" ? r : SC ? Os(t) : (n = Os(t)) === "Object" && vC(t.callee) ? "Arguments" : n;
}, wC = sp, Pd = Yf, OC = Jf, xC = bn, AC = kt, PC = AC("iterator"), xg = function(e) {
  if (!OC(e))
    return Pd(e, PC) || Pd(e, "@@iterator") || xC[wC(e)];
}, jC = Tr, _C = pa, RC = ar, TC = Wf, IC = xg, CC = TypeError, VC = function(e, t) {
  var r = arguments.length < 2 ? IC(e) : t;
  if (_C(r))
    return RC(jC(r, e));
  throw new CC(TC(e) + " is not iterable");
}, MC = Tr, jd = ar, FC = Yf, DC = function(e, t, r) {
  var n, i;
  jd(e);
  try {
    if (n = FC(e, "return"), !n) {
      if (t === "throw")
        throw r;
      return r;
    }
    n = MC(n, e);
  } catch (s) {
    i = !0, n = s;
  }
  if (t === "throw")
    throw r;
  if (i)
    throw n;
  return jd(n), r;
}, NC = ug, LC = Tr, kC = ar, UC = Wf, BC = hC, qC = hg, _d = fa, HC = VC, GC = xg, Rd = DC, JC = TypeError, xs = function(e, t) {
  this.stopped = e, this.result = t;
}, Td = xs.prototype, zC = function(e, t, r) {
  var n = r && r.that, i = !!(r && r.AS_ENTRIES), s = !!(r && r.IS_RECORD), o = !!(r && r.IS_ITERATOR), a = !!(r && r.INTERRUPTED), c = NC(t, n), l, f, u, h, p, d, y, g = function(E) {
    return l && Rd(l, "normal", E), new xs(!0, E);
  }, b = function(E) {
    return i ? (kC(E), a ? c(E[0], E[1], g) : c(E[0], E[1])) : a ? c(E, g) : c(E);
  };
  if (s)
    l = e.iterator;
  else if (o)
    l = e;
  else {
    if (f = GC(e), !f)
      throw new JC(UC(e) + " is not iterable");
    if (BC(f)) {
      for (u = 0, h = qC(e); h > u; u++)
        if (p = b(e[u]), p && _d(Td, p))
          return p;
      return new xs(!1);
    }
    l = HC(e, f);
  }
  for (d = s ? e.next : l.next; !(y = LC(d, l)).done; ) {
    try {
      p = b(y.value);
    } catch (E) {
      Rd(l, "throw", E);
    }
    if (typeof p == "object" && p && _d(Td, p))
      return p;
  }
  return new xs(!1);
}, KC = sp, WC = String, op = function(e) {
  if (KC(e) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return WC(e);
}, YC = op, Ag = function(e, t) {
  return e === void 0 ? arguments.length < 2 ? "" : t : YC(e);
}, XC = ha, QC = fa, ZC = Qf, Zs = Zf, eV = yg, Pg = np, Hc = cr, Gc = Si, tV = $g, rV = wg, nV = zC, iV = Ag, sV = kt, oV = sV("toStringTag"), eo = Error, aV = [].push, pn = function(t, r) {
  var n = QC(Jc, this), i;
  Zs ? i = Zs(new eo(), n ? ZC(this) : Jc) : (i = n ? this : Pg(Jc), Hc(i, oV, "Error")), r !== void 0 && Hc(i, "message", iV(r)), rV(i, pn, i.stack, 1), arguments.length > 2 && tV(i, arguments[2]);
  var s = [];
  return nV(t, aV, { that: s }), Hc(i, "errors", s), i;
};
Zs ? Zs(pn, eo) : eV(pn, eo, { name: !0 });
var Jc = pn.prototype = Pg(eo.prototype, {
  constructor: Gc(1, pn),
  message: Gc(1, ""),
  name: Gc(1, "AggregateError")
});
XC({ global: !0, constructor: !0, arity: 2 }, {
  AggregateError: pn
});
var cV = Ir.f, lV = function(e, t, r) {
  r in e || cV(e, r, {
    configurable: !0,
    get: function() {
      return t[r];
    },
    set: function(n) {
      t[r] = n;
    }
  });
}, uV = Ye, fV = or, Id = Zf, pV = function(e, t, r) {
  var n, i;
  return (
    // it can work only with native `setPrototypeOf`
    Id && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    uV(n = t.constructor) && n !== r && fV(i = n.prototype) && i !== r.prototype && Id(e, i), e
  );
}, Cd = wi, hV = cr, dV = fa, Vd = Zf, Md = yg, Fd = lV, mV = pV, yV = Ag, vV = $g, gV = wg, bV = sr, jg = function(e, t, r, n) {
  var i = "stackTraceLimit", s = n ? 2 : 1, o = e.split("."), a = o[o.length - 1], c = Cd.apply(null, o);
  if (c) {
    var l = c.prototype;
    if (!r)
      return c;
    var f = Cd("Error"), u = t(function(h, p) {
      var d = yV(n ? p : h, void 0), y = n ? new c(h) : new c();
      return d !== void 0 && hV(y, "message", d), gV(y, u, y.stack, 2), this && dV(l, this) && mV(y, this, u), arguments.length > s && vV(y, arguments[s]), y;
    });
    return u.prototype = l, a !== "Error" ? Vd ? Vd(u, f) : Md(u, f, { name: !0 }) : bV && i in c && (Fd(u, c, i), Fd(u, c, "prepareStackTrace")), Md(u, c), u;
  }
}, _g = ha, $V = nt, $t = qf, Rg = jg, Kl = "WebAssembly", Dd = $V[Kl], to = new Error("e", { cause: 7 }).cause !== 7, Cr = function(e, t) {
  var r = {};
  r[e] = Rg(e, t, to), _g({ global: !0, constructor: !0, arity: 1, forced: to }, r);
}, ap = function(e, t) {
  if (Dd && Dd[e]) {
    var r = {};
    r[e] = Rg(Kl + "." + e, t, to), _g({ target: Kl, stat: !0, constructor: !0, arity: 1, forced: to }, r);
  }
};
Cr("Error", function(e) {
  return function(r) {
    return $t(e, this, arguments);
  };
});
Cr("EvalError", function(e) {
  return function(r) {
    return $t(e, this, arguments);
  };
});
Cr("RangeError", function(e) {
  return function(r) {
    return $t(e, this, arguments);
  };
});
Cr("ReferenceError", function(e) {
  return function(r) {
    return $t(e, this, arguments);
  };
});
Cr("SyntaxError", function(e) {
  return function(r) {
    return $t(e, this, arguments);
  };
});
Cr("TypeError", function(e) {
  return function(r) {
    return $t(e, this, arguments);
  };
});
Cr("URIError", function(e) {
  return function(r) {
    return $t(e, this, arguments);
  };
});
ap("CompileError", function(e) {
  return function(r) {
    return $t(e, this, arguments);
  };
});
ap("LinkError", function(e) {
  return function(r) {
    return $t(e, this, arguments);
  };
});
ap("RuntimeError", function(e) {
  return function(r) {
    return $t(e, this, arguments);
  };
});
var SV = ha, EV = wi, wV = qf, Nd = ct, OV = jg, cp = "AggregateError", Ld = EV(cp), kd = !Nd(function() {
  return Ld([1]).errors[0] !== 1;
}) && Nd(function() {
  return Ld([1], cp, { cause: 7 }).cause !== 7;
});
SV({ global: !0, constructor: !0, arity: 2, forced: kd }, {
  AggregateError: OV(cp, function(e) {
    return function(r, n) {
      return wV(e, this, arguments);
    };
  }, kd, !0)
});
var xV = nt, AV = Ye, Ud = xV.WeakMap, PV = AV(Ud) && /native code/.test(String(Ud)), jV = PV, Tg = nt, _V = or, RV = cr, zc = Lt, Kc = ng, TV = Xf, IV = tp, Bd = "Object already initialized", Wl = Tg.TypeError, CV = Tg.WeakMap, ro, si, no, VV = function(e) {
  return no(e) ? si(e) : ro(e, {});
}, MV = function(e) {
  return function(t) {
    var r;
    if (!_V(t) || (r = si(t)).type !== e)
      throw new Wl("Incompatible receiver, " + e + " required");
    return r;
  };
};
if (jV || Kc.state) {
  var ft = Kc.state || (Kc.state = new CV());
  ft.get = ft.get, ft.has = ft.has, ft.set = ft.set, ro = function(e, t) {
    if (ft.has(e))
      throw new Wl(Bd);
    return t.facade = e, ft.set(e, t), t;
  }, si = function(e) {
    return ft.get(e) || {};
  }, no = function(e) {
    return ft.has(e);
  };
} else {
  var Br = TV("state");
  IV[Br] = !0, ro = function(e, t) {
    if (zc(e, Br))
      throw new Wl(Bd);
    return t.facade = e, RV(e, Br, t), t;
  }, si = function(e) {
    return zc(e, Br) ? e[Br] : {};
  }, no = function(e) {
    return zc(e, Br);
  };
}
var Ig = {
  set: ro,
  get: si,
  has: no,
  enforce: VV,
  getterFor: MV
}, Yl = sr, FV = Lt, Cg = Function.prototype, DV = Yl && Object.getOwnPropertyDescriptor, lp = FV(Cg, "name"), NV = lp && (function() {
}).name === "something", LV = lp && (!Yl || Yl && DV(Cg, "name").configurable), kV = {
  EXISTS: lp,
  PROPER: NV,
  CONFIGURABLE: LV
}, UV = cr, Vg = function(e, t, r, n) {
  return n && n.enumerable ? e[t] = r : UV(e, t, r), e;
}, BV = ct, qV = Ye, HV = or, GV = np, qd = Qf, JV = Vg, zV = kt, Xl = zV("iterator"), Mg = !1, At, Wc, Yc;
[].keys && (Yc = [].keys(), "next" in Yc ? (Wc = qd(qd(Yc)), Wc !== Object.prototype && (At = Wc)) : Mg = !0);
var KV = !HV(At) || BV(function() {
  var e = {};
  return At[Xl].call(e) !== e;
});
KV ? At = {} : At = GV(At);
qV(At[Xl]) || JV(At, Xl, function() {
  return this;
});
var Fg = {
  IteratorPrototype: At,
  BUGGY_SAFARI_ITERATORS: Mg
}, WV = ip, YV = sp, XV = WV ? {}.toString : function() {
  return "[object " + YV(this) + "]";
}, QV = ip, ZV = Ir.f, eM = cr, tM = Lt, rM = XV, nM = kt, Hd = nM("toStringTag"), up = function(e, t, r, n) {
  var i = r ? e : e && e.prototype;
  i && (tM(i, Hd) || ZV(i, Hd, { configurable: !0, value: t }), n && !QV && eM(i, "toString", rM));
}, iM = Fg.IteratorPrototype, sM = np, oM = Si, aM = up, cM = bn, lM = function() {
  return this;
}, uM = function(e, t, r, n) {
  var i = t + " Iterator";
  return e.prototype = sM(iM, { next: oM(+!n, r) }), aM(e, i, !1, !0), cM[i] = lM, e;
}, fM = ha, pM = Tr, Dg = kV, hM = uM, dM = Qf, mM = up, Gd = Vg, yM = kt, Jd = bn, Ng = Fg, vM = Dg.PROPER;
Dg.CONFIGURABLE;
Ng.IteratorPrototype;
var ps = Ng.BUGGY_SAFARI_ITERATORS, Xc = yM("iterator"), zd = "keys", hs = "values", Kd = "entries", gM = function() {
  return this;
}, Lg = function(e, t, r, n, i, s, o) {
  hM(r, t, n);
  var a = function(b) {
    if (b === i && h)
      return h;
    if (!ps && b && b in f)
      return f[b];
    switch (b) {
      case zd:
        return function() {
          return new r(this, b);
        };
      case hs:
        return function() {
          return new r(this, b);
        };
      case Kd:
        return function() {
          return new r(this, b);
        };
    }
    return function() {
      return new r(this);
    };
  }, c = t + " Iterator", l = !1, f = e.prototype, u = f[Xc] || f["@@iterator"] || i && f[i], h = !ps && u || a(i), p = t === "Array" && f.entries || u, d, y, g;
  if (p && (d = dM(p.call(new e())), d !== Object.prototype && d.next && (mM(d, c, !0, !0), Jd[c] = gM)), vM && i === hs && u && u.name !== hs && (l = !0, h = function() {
    return pM(u, this);
  }), i)
    if (y = {
      values: a(hs),
      keys: s ? h : a(zd),
      entries: a(Kd)
    }, o)
      for (g in y)
        (ps || l || !(g in f)) && Gd(f, g, y[g]);
    else
      fM({ target: t, proto: !0, forced: ps || l }, y);
  return o && f[Xc] !== h && Gd(f, Xc, h, { name: i }), Jd[t] = h, y;
}, kg = function(e, t) {
  return { value: e, done: t };
}, bM = Ei, Wd = bn, Ug = Ig;
Ir.f;
var $M = Lg, ds = kg, Bg = "Array Iterator", SM = Ug.set, EM = Ug.getterFor(Bg);
$M(Array, "Array", function(e, t) {
  SM(this, {
    type: Bg,
    target: bM(e),
    // target
    index: 0,
    // next index
    kind: t
    // kind
  });
}, function() {
  var e = EM(this), t = e.target, r = e.index++;
  if (!t || r >= t.length)
    return e.target = void 0, ds(void 0, !0);
  switch (e.kind) {
    case "keys":
      return ds(r, !1);
    case "values":
      return ds(t[r], !1);
  }
  return ds([r, t[r]], !1);
}, "values");
Wd.Arguments = Wd.Array;
var fp = lt, wM = ep, OM = op, xM = zf, AM = fp("".charAt), Yd = fp("".charCodeAt), PM = fp("".slice), Xd = function(e) {
  return function(t, r) {
    var n = OM(xM(t)), i = wM(r), s = n.length, o, a;
    return i < 0 || i >= s ? e ? "" : void 0 : (o = Yd(n, i), o < 55296 || o > 56319 || i + 1 === s || (a = Yd(n, i + 1)) < 56320 || a > 57343 ? e ? AM(n, i) : o : e ? PM(n, i, i + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
  };
}, jM = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Xd(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Xd(!0)
}, _M = jM.charAt, RM = op, qg = Ig, TM = Lg, Qd = kg, Hg = "String Iterator", IM = qg.set, CM = qg.getterFor(Hg);
TM(String, "String", function(e) {
  IM(this, {
    type: Hg,
    string: RM(e),
    index: 0
  });
}, function() {
  var t = CM(this), r = t.string, n = t.index, i;
  return n >= r.length ? Qd(void 0, !0) : (i = _M(r, n), t.index += i.length, Qd(i, !1));
});
var VM = Kf, MM = VM.AggregateError, FM = {
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
}, DM = FM, NM = nt, LM = up, Zd = bn;
for (var Qc in DM)
  LM(NM[Qc], Qc), Zd[Qc] = Zd.Array;
var kM = MM, UM = kM, BM = UM, qM = BM, HM = qM, GM = HM, JM = GM, zM = JM;
const KM = /* @__PURE__ */ Ar(zM);
class WM extends KM {
  constructor(t, r, n) {
    if (super(t, r, n), this.name = this.constructor.name, typeof r == "string" && (this.message = r), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(r).stack, n != null && typeof n == "object" && Object.hasOwn(n, "cause") && !("cause" in this)) {
      const {
        cause: i
      } = n;
      this.cause = i, i instanceof Error && "stack" in i && (this.stack = `${this.stack}
CAUSE: ${i.stack}`);
    }
  }
}
const YM = WM;
class XM extends Error {
  static [Symbol.hasInstance](t) {
    return super[Symbol.hasInstance](t) || Function.prototype[Symbol.hasInstance].call(YM, t);
  }
  constructor(t, r) {
    if (super(t, r), this.name = this.constructor.name, typeof t == "string" && (this.message = t), typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack, r != null && typeof r == "object" && Object.hasOwn(r, "cause") && !("cause" in this)) {
      const {
        cause: n
      } = r;
      this.cause = n, n instanceof Error && "stack" in n && (this.stack = `${this.stack}
CAUSE: ${n.stack}`);
    }
  }
}
const me = XM;
class QM extends me {
  constructor(t, r) {
    if (super(t, r), r != null && typeof r == "object") {
      const {
        cause: n,
        ...i
      } = r;
      Object.assign(this, i);
    }
  }
}
const xi = QM;
class ZM extends me {
}
const je = ZM;
class eF extends je {
}
const yt = eF;
class tF extends me {
  constructor(t, r) {
    super(t, {
      cause: r.cause
    }), this.plugin = r.plugin;
  }
}
const rF = tF, pp = async (e, t, r) => {
  const n = await Promise.all(r.map(fn([e], [t])));
  return r.filter((i, s) => n[s]);
}, hp = async (e, t, r) => {
  let n;
  for (const i of r)
    try {
      const s = await i[e].call(i, ...t);
      return {
        plugin: i,
        result: s
      };
    } catch (s) {
      n = new rF("Error while running plugin", {
        cause: s,
        plugin: i
      });
    }
  return Promise.reject(n);
};
class nF extends me {
}
const Ql = nF;
class iF extends me {
}
const dp = iF;
class sF extends dp {
}
const Gg = sF;
class oF extends Gg {
}
const Jg = oF, aF = async (e, t) => {
  const r = t.resolve.resolvers.map((i) => {
    const s = Object.create(i);
    return Object.assign(s, t.resolve.resolverOpts);
  }), n = await pp("canRead", e, r);
  if (bi(n))
    throw new Jg(e.uri);
  try {
    const {
      result: i
    } = await hp("read", [e], n);
    return i;
  } catch (i) {
    throw new dp(`Error while reading file "${e.uri}"`, {
      cause: i
    });
  }
}, cF = async (e, t) => {
  const r = t.parse.parsers.map((i) => {
    const s = Object.create(i);
    return Object.assign(s, t.parse.parserOpts);
  }), n = await pp("canParse", e, r);
  if (bi(n))
    throw new Jg(e.uri);
  try {
    const {
      plugin: i,
      result: s
    } = await hp("parse", [e], n);
    return !i.allowEmpty && s.isEmpty ? Promise.reject(new Ql(`Error while parsing file "${e.uri}". File is empty.`)) : s;
  } catch (i) {
    throw new Ql(`Error while parsing file "${e.uri}"`, {
      cause: i
    });
  }
}, lF = async (e, t) => {
  const r = Or({
    uri: gn(he(e)),
    mediaType: t.parse.mediaType
  }), n = await aF(r, t);
  return cF(Or({
    ...r,
    data: n
  }), t);
}, zg = lF;
function uF(e) {
  return e === null;
}
var fF = uF, pF = typeof wt == "object" && wt && wt.Object === Object && wt, Kg = pF, hF = Kg, dF = typeof self == "object" && self && self.Object === Object && self, mF = hF || dF || Function("return this")(), Ut = mF, yF = Ut, vF = yF.Symbol, mp = vF, em = mp, Wg = Object.prototype, gF = Wg.hasOwnProperty, bF = Wg.toString, Nn = em ? em.toStringTag : void 0;
function $F(e) {
  var t = gF.call(e, Nn), r = e[Nn];
  try {
    e[Nn] = void 0;
    var n = !0;
  } catch {
  }
  var i = bF.call(e);
  return n && (t ? e[Nn] = r : delete e[Nn]), i;
}
var SF = $F, EF = Object.prototype, wF = EF.toString;
function OF(e) {
  return wF.call(e);
}
var xF = OF, tm = mp, AF = SF, PF = xF, jF = "[object Null]", _F = "[object Undefined]", rm = tm ? tm.toStringTag : void 0;
function RF(e) {
  return e == null ? e === void 0 ? _F : jF : rm && rm in Object(e) ? AF(e) : PF(e);
}
var Vr = RF, TF = Array.isArray, da = TF;
function IF(e) {
  return e != null && typeof e == "object";
}
var Mr = IF, CF = Vr, VF = da, MF = Mr, FF = "[object String]";
function DF(e) {
  return typeof e == "string" || !VF(e) && MF(e) && CF(e) == FF;
}
var NF = DF, LF = Vr, kF = Mr, UF = "[object Number]";
function BF(e) {
  return typeof e == "number" || kF(e) && LF(e) == UF;
}
var qF = BF, HF = Vr, GF = Mr, JF = "[object Boolean]";
function zF(e) {
  return e === !0 || e === !1 || GF(e) && HF(e) == JF;
}
var KF = zF;
function WF(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ma = WF;
let YF = class {
  constructor(t) {
    this.namespace = t || new this.Namespace();
  }
  /**
   * @param {Element} element
   * @returns {object}
   */
  serialise(t) {
    if (!(t instanceof this.namespace.elements.Element))
      throw new TypeError(`Given element \`${t}\` is not an Element instance`);
    const r = {
      element: t.element
    };
    t._meta && t._meta.length > 0 && (r.meta = this.serialiseObject(t.meta)), t._attributes && t._attributes.length > 0 && (r.attributes = this.serialiseObject(t.attributes));
    const n = this.serialiseContent(t.content);
    return n !== void 0 && (r.content = n), r;
  }
  /**
   * @param {object} value
   * @returns {Element}
   */
  deserialise(t) {
    if (!t.element)
      throw new Error("Given value is not an object containing an element name");
    const r = this.namespace.getElementClass(t.element), n = new r();
    n.element !== t.element && (n.element = t.element), t.meta && this.deserialiseObject(t.meta, n.meta), t.attributes && this.deserialiseObject(t.attributes, n.attributes);
    const i = this.deserialiseContent(t.content);
    return (i !== void 0 || n.content === null) && (n.content = i), n;
  }
  // Private API
  serialiseContent(t) {
    if (t instanceof this.namespace.elements.Element)
      return this.serialise(t);
    if (t instanceof this.namespace.KeyValuePair) {
      const r = {
        key: this.serialise(t.key)
      };
      return t.value && (r.value = this.serialise(t.value)), r;
    }
    return t && t.map ? t.length === 0 ? void 0 : t.map(this.serialise, this) : t;
  }
  deserialiseContent(t) {
    if (t) {
      if (t.element)
        return this.deserialise(t);
      if (t.key) {
        const r = new this.namespace.KeyValuePair(this.deserialise(t.key));
        return t.value && (r.value = this.deserialise(t.value)), r;
      }
      if (t.map)
        return t.map(this.deserialise, this);
    }
    return t;
  }
  serialiseObject(t) {
    const r = {};
    if (t.forEach((n, i) => {
      n && (r[i.toValue()] = this.serialise(n));
    }), Object.keys(r).length !== 0)
      return r;
  }
  deserialiseObject(t, r) {
    Object.keys(t).forEach((n) => {
      r.set(n, this.deserialise(t[n]));
    });
  }
};
var XF = YF;
function QF() {
  this.__data__ = [], this.size = 0;
}
var ZF = QF;
function eD(e, t) {
  return e === t || e !== e && t !== t;
}
var Yg = eD, tD = Yg;
function rD(e, t) {
  for (var r = e.length; r--; )
    if (tD(e[r][0], t))
      return r;
  return -1;
}
var ya = rD, nD = ya, iD = Array.prototype, sD = iD.splice;
function oD(e) {
  var t = this.__data__, r = nD(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : sD.call(t, r, 1), --this.size, !0;
}
var aD = oD, cD = ya;
function lD(e) {
  var t = this.__data__, r = cD(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var uD = lD, fD = ya;
function pD(e) {
  return fD(this.__data__, e) > -1;
}
var hD = pD, dD = ya;
function mD(e, t) {
  var r = this.__data__, n = dD(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var yD = mD, vD = ZF, gD = aD, bD = uD, $D = hD, SD = yD;
function $n(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
$n.prototype.clear = vD;
$n.prototype.delete = gD;
$n.prototype.get = bD;
$n.prototype.has = $D;
$n.prototype.set = SD;
var va = $n, ED = va;
function wD() {
  this.__data__ = new ED(), this.size = 0;
}
var OD = wD;
function xD(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var AD = xD;
function PD(e) {
  return this.__data__.get(e);
}
var jD = PD;
function _D(e) {
  return this.__data__.has(e);
}
var RD = _D, TD = Vr, ID = ma, CD = "[object AsyncFunction]", VD = "[object Function]", MD = "[object GeneratorFunction]", FD = "[object Proxy]";
function DD(e) {
  if (!ID(e))
    return !1;
  var t = TD(e);
  return t == VD || t == MD || t == CD || t == FD;
}
var Xg = DD, ND = Ut, LD = ND["__core-js_shared__"], kD = LD, Zc = kD, nm = function() {
  var e = /[^.]+$/.exec(Zc && Zc.keys && Zc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function UD(e) {
  return !!nm && nm in e;
}
var BD = UD, qD = Function.prototype, HD = qD.toString;
function GD(e) {
  if (e != null) {
    try {
      return HD.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qg = GD, JD = Xg, zD = BD, KD = ma, WD = Qg, YD = /[\\^$.*+?()[\]{}|]/g, XD = /^\[object .+?Constructor\]$/, QD = Function.prototype, ZD = Object.prototype, eN = QD.toString, tN = ZD.hasOwnProperty, rN = RegExp(
  "^" + eN.call(tN).replace(YD, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function nN(e) {
  if (!KD(e) || zD(e))
    return !1;
  var t = JD(e) ? rN : XD;
  return t.test(WD(e));
}
var iN = nN;
function sN(e, t) {
  return e == null ? void 0 : e[t];
}
var oN = sN, aN = iN, cN = oN;
function lN(e, t) {
  var r = cN(e, t);
  return aN(r) ? r : void 0;
}
var Sn = lN, uN = Sn, fN = Ut, pN = uN(fN, "Map"), yp = pN, hN = Sn, dN = hN(Object, "create"), ga = dN, im = ga;
function mN() {
  this.__data__ = im ? im(null) : {}, this.size = 0;
}
var yN = mN;
function vN(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var gN = vN, bN = ga, $N = "__lodash_hash_undefined__", SN = Object.prototype, EN = SN.hasOwnProperty;
function wN(e) {
  var t = this.__data__;
  if (bN) {
    var r = t[e];
    return r === $N ? void 0 : r;
  }
  return EN.call(t, e) ? t[e] : void 0;
}
var ON = wN, xN = ga, AN = Object.prototype, PN = AN.hasOwnProperty;
function jN(e) {
  var t = this.__data__;
  return xN ? t[e] !== void 0 : PN.call(t, e);
}
var _N = jN, RN = ga, TN = "__lodash_hash_undefined__";
function IN(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = RN && t === void 0 ? TN : t, this;
}
var CN = IN, VN = yN, MN = gN, FN = ON, DN = _N, NN = CN;
function En(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
En.prototype.clear = VN;
En.prototype.delete = MN;
En.prototype.get = FN;
En.prototype.has = DN;
En.prototype.set = NN;
var LN = En, sm = LN, kN = va, UN = yp;
function BN() {
  this.size = 0, this.__data__ = {
    hash: new sm(),
    map: new (UN || kN)(),
    string: new sm()
  };
}
var qN = BN;
function HN(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var GN = HN, JN = GN;
function zN(e, t) {
  var r = e.__data__;
  return JN(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ba = zN, KN = ba;
function WN(e) {
  var t = KN(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var YN = WN, XN = ba;
function QN(e) {
  return XN(this, e).get(e);
}
var ZN = QN, eL = ba;
function tL(e) {
  return eL(this, e).has(e);
}
var rL = tL, nL = ba;
function iL(e, t) {
  var r = nL(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var sL = iL, oL = qN, aL = YN, cL = ZN, lL = rL, uL = sL;
function wn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
wn.prototype.clear = oL;
wn.prototype.delete = aL;
wn.prototype.get = cL;
wn.prototype.has = lL;
wn.prototype.set = uL;
var Zg = wn, fL = va, pL = yp, hL = Zg, dL = 200;
function mL(e, t) {
  var r = this.__data__;
  if (r instanceof fL) {
    var n = r.__data__;
    if (!pL || n.length < dL - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new hL(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var yL = mL, vL = va, gL = OD, bL = AD, $L = jD, SL = RD, EL = yL;
function On(e) {
  var t = this.__data__ = new vL(e);
  this.size = t.size;
}
On.prototype.clear = gL;
On.prototype.delete = bL;
On.prototype.get = $L;
On.prototype.has = SL;
On.prototype.set = EL;
var wL = On, OL = "__lodash_hash_undefined__";
function xL(e) {
  return this.__data__.set(e, OL), this;
}
var AL = xL;
function PL(e) {
  return this.__data__.has(e);
}
var jL = PL, _L = Zg, RL = AL, TL = jL;
function io(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new _L(); ++t < r; )
    this.add(e[t]);
}
io.prototype.add = io.prototype.push = RL;
io.prototype.has = TL;
var IL = io;
function CL(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var VL = CL;
function ML(e, t) {
  return e.has(t);
}
var FL = ML, DL = IL, NL = VL, LL = FL, kL = 1, UL = 2;
function BL(e, t, r, n, i, s) {
  var o = r & kL, a = e.length, c = t.length;
  if (a != c && !(o && c > a))
    return !1;
  var l = s.get(e), f = s.get(t);
  if (l && f)
    return l == t && f == e;
  var u = -1, h = !0, p = r & UL ? new DL() : void 0;
  for (s.set(e, t), s.set(t, e); ++u < a; ) {
    var d = e[u], y = t[u];
    if (n)
      var g = o ? n(y, d, u, t, e, s) : n(d, y, u, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!NL(t, function(b, E) {
        if (!LL(p, E) && (d === b || i(d, b, r, n, s)))
          return p.push(E);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === y || i(d, y, r, n, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
var eb = BL, qL = Ut, HL = qL.Uint8Array, GL = HL;
function JL(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var zL = JL;
function KL(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var WL = KL, om = mp, am = GL, YL = Yg, XL = eb, QL = zL, ZL = WL, ek = 1, tk = 2, rk = "[object Boolean]", nk = "[object Date]", ik = "[object Error]", sk = "[object Map]", ok = "[object Number]", ak = "[object RegExp]", ck = "[object Set]", lk = "[object String]", uk = "[object Symbol]", fk = "[object ArrayBuffer]", pk = "[object DataView]", cm = om ? om.prototype : void 0, el = cm ? cm.valueOf : void 0;
function hk(e, t, r, n, i, s, o) {
  switch (r) {
    case pk:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case fk:
      return !(e.byteLength != t.byteLength || !s(new am(e), new am(t)));
    case rk:
    case nk:
    case ok:
      return YL(+e, +t);
    case ik:
      return e.name == t.name && e.message == t.message;
    case ak:
    case lk:
      return e == t + "";
    case sk:
      var a = QL;
    case ck:
      var c = n & ek;
      if (a || (a = ZL), e.size != t.size && !c)
        return !1;
      var l = o.get(e);
      if (l)
        return l == t;
      n |= tk, o.set(e, t);
      var f = XL(a(e), a(t), n, i, s, o);
      return o.delete(e), f;
    case uk:
      if (el)
        return el.call(e) == el.call(t);
  }
  return !1;
}
var dk = hk;
function mk(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var yk = mk, vk = yk, gk = da;
function bk(e, t, r) {
  var n = t(e);
  return gk(e) ? n : vk(n, r(e));
}
var $k = bk;
function Sk(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[i++] = o);
  }
  return s;
}
var Ek = Sk;
function wk() {
  return [];
}
var Ok = wk, xk = Ek, Ak = Ok, Pk = Object.prototype, jk = Pk.propertyIsEnumerable, lm = Object.getOwnPropertySymbols, _k = lm ? function(e) {
  return e == null ? [] : (e = Object(e), xk(lm(e), function(t) {
    return jk.call(e, t);
  }));
} : Ak, Rk = _k;
function Tk(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ik = Tk, Ck = Vr, Vk = Mr, Mk = "[object Arguments]";
function Fk(e) {
  return Vk(e) && Ck(e) == Mk;
}
var Dk = Fk, um = Dk, Nk = Mr, tb = Object.prototype, Lk = tb.hasOwnProperty, kk = tb.propertyIsEnumerable, Uk = um(/* @__PURE__ */ function() {
  return arguments;
}()) ? um : function(e) {
  return Nk(e) && Lk.call(e, "callee") && !kk.call(e, "callee");
}, Bk = Uk, so = { exports: {} };
function qk() {
  return !1;
}
var Hk = qk;
so.exports;
(function(e, t) {
  var r = Ut, n = Hk, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, o = s && s.exports === i, a = o ? r.Buffer : void 0, c = a ? a.isBuffer : void 0, l = c || n;
  e.exports = l;
})(so, so.exports);
var rb = so.exports, Gk = 9007199254740991, Jk = /^(?:0|[1-9]\d*)$/;
function zk(e, t) {
  var r = typeof e;
  return t = t ?? Gk, !!t && (r == "number" || r != "symbol" && Jk.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Kk = zk, Wk = 9007199254740991;
function Yk(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Wk;
}
var nb = Yk, Xk = Vr, Qk = nb, Zk = Mr, e2 = "[object Arguments]", t2 = "[object Array]", r2 = "[object Boolean]", n2 = "[object Date]", i2 = "[object Error]", s2 = "[object Function]", o2 = "[object Map]", a2 = "[object Number]", c2 = "[object Object]", l2 = "[object RegExp]", u2 = "[object Set]", f2 = "[object String]", p2 = "[object WeakMap]", h2 = "[object ArrayBuffer]", d2 = "[object DataView]", m2 = "[object Float32Array]", y2 = "[object Float64Array]", v2 = "[object Int8Array]", g2 = "[object Int16Array]", b2 = "[object Int32Array]", $2 = "[object Uint8Array]", S2 = "[object Uint8ClampedArray]", E2 = "[object Uint16Array]", w2 = "[object Uint32Array]", pe = {};
pe[m2] = pe[y2] = pe[v2] = pe[g2] = pe[b2] = pe[$2] = pe[S2] = pe[E2] = pe[w2] = !0;
pe[e2] = pe[t2] = pe[h2] = pe[r2] = pe[d2] = pe[n2] = pe[i2] = pe[s2] = pe[o2] = pe[a2] = pe[c2] = pe[l2] = pe[u2] = pe[f2] = pe[p2] = !1;
function O2(e) {
  return Zk(e) && Qk(e.length) && !!pe[Xk(e)];
}
var x2 = O2;
function A2(e) {
  return function(t) {
    return e(t);
  };
}
var P2 = A2, oo = { exports: {} };
oo.exports;
(function(e, t) {
  var r = Kg, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, o = s && r.process, a = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = a;
})(oo, oo.exports);
var j2 = oo.exports, _2 = x2, R2 = P2, fm = j2, pm = fm && fm.isTypedArray, T2 = pm ? R2(pm) : _2, ib = T2, I2 = Ik, C2 = Bk, V2 = da, M2 = rb, F2 = Kk, D2 = ib, N2 = Object.prototype, L2 = N2.hasOwnProperty;
function k2(e, t) {
  var r = V2(e), n = !r && C2(e), i = !r && !n && M2(e), s = !r && !n && !i && D2(e), o = r || n || i || s, a = o ? I2(e.length, String) : [], c = a.length;
  for (var l in e)
    (t || L2.call(e, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    F2(l, c))) && a.push(l);
  return a;
}
var U2 = k2, B2 = Object.prototype;
function q2(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || B2;
  return e === r;
}
var H2 = q2;
function G2(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var J2 = G2, z2 = J2, K2 = z2(Object.keys, Object), W2 = K2, Y2 = H2, X2 = W2, Q2 = Object.prototype, Z2 = Q2.hasOwnProperty;
function eU(e) {
  if (!Y2(e))
    return X2(e);
  var t = [];
  for (var r in Object(e))
    Z2.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var tU = eU, rU = Xg, nU = nb;
function iU(e) {
  return e != null && nU(e.length) && !rU(e);
}
var sU = iU, oU = U2, aU = tU, cU = sU;
function lU(e) {
  return cU(e) ? oU(e) : aU(e);
}
var uU = lU, fU = $k, pU = Rk, hU = uU;
function dU(e) {
  return fU(e, hU, pU);
}
var mU = dU, hm = mU, yU = 1, vU = Object.prototype, gU = vU.hasOwnProperty;
function bU(e, t, r, n, i, s) {
  var o = r & yU, a = hm(e), c = a.length, l = hm(t), f = l.length;
  if (c != f && !o)
    return !1;
  for (var u = c; u--; ) {
    var h = a[u];
    if (!(o ? h in t : gU.call(t, h)))
      return !1;
  }
  var p = s.get(e), d = s.get(t);
  if (p && d)
    return p == t && d == e;
  var y = !0;
  s.set(e, t), s.set(t, e);
  for (var g = o; ++u < c; ) {
    h = a[u];
    var b = e[h], E = t[h];
    if (n)
      var S = o ? n(E, b, h, t, e, s) : n(b, E, h, e, t, s);
    if (!(S === void 0 ? b === E || i(b, E, r, n, s) : S)) {
      y = !1;
      break;
    }
    g || (g = h == "constructor");
  }
  if (y && !g) {
    var w = e.constructor, _ = t.constructor;
    w != _ && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof _ == "function" && _ instanceof _) && (y = !1);
  }
  return s.delete(e), s.delete(t), y;
}
var $U = bU, SU = Sn, EU = Ut, wU = SU(EU, "DataView"), OU = wU, xU = Sn, AU = Ut, PU = xU(AU, "Promise"), jU = PU, _U = Sn, RU = Ut, TU = _U(RU, "Set"), IU = TU, CU = Sn, VU = Ut, MU = CU(VU, "WeakMap"), FU = MU, Zl = OU, eu = yp, tu = jU, ru = IU, nu = FU, sb = Vr, xn = Qg, dm = "[object Map]", DU = "[object Object]", mm = "[object Promise]", ym = "[object Set]", vm = "[object WeakMap]", gm = "[object DataView]", NU = xn(Zl), LU = xn(eu), kU = xn(tu), UU = xn(ru), BU = xn(nu), pr = sb;
(Zl && pr(new Zl(new ArrayBuffer(1))) != gm || eu && pr(new eu()) != dm || tu && pr(tu.resolve()) != mm || ru && pr(new ru()) != ym || nu && pr(new nu()) != vm) && (pr = function(e) {
  var t = sb(e), r = t == DU ? e.constructor : void 0, n = r ? xn(r) : "";
  if (n)
    switch (n) {
      case NU:
        return gm;
      case LU:
        return dm;
      case kU:
        return mm;
      case UU:
        return ym;
      case BU:
        return vm;
    }
  return t;
});
var qU = pr, tl = wL, HU = eb, GU = dk, JU = $U, bm = qU, $m = da, Sm = rb, zU = ib, KU = 1, Em = "[object Arguments]", wm = "[object Array]", ms = "[object Object]", WU = Object.prototype, Om = WU.hasOwnProperty;
function YU(e, t, r, n, i, s) {
  var o = $m(e), a = $m(t), c = o ? wm : bm(e), l = a ? wm : bm(t);
  c = c == Em ? ms : c, l = l == Em ? ms : l;
  var f = c == ms, u = l == ms, h = c == l;
  if (h && Sm(e)) {
    if (!Sm(t))
      return !1;
    o = !0, f = !1;
  }
  if (h && !f)
    return s || (s = new tl()), o || zU(e) ? HU(e, t, r, n, i, s) : GU(e, t, c, r, n, i, s);
  if (!(r & KU)) {
    var p = f && Om.call(e, "__wrapped__"), d = u && Om.call(t, "__wrapped__");
    if (p || d) {
      var y = p ? e.value() : e, g = d ? t.value() : t;
      return s || (s = new tl()), i(y, g, r, n, s);
    }
  }
  return h ? (s || (s = new tl()), JU(e, t, r, n, i, s)) : !1;
}
var XU = YU, QU = XU, xm = Mr;
function ob(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !xm(e) && !xm(t) ? e !== e && t !== t : QU(e, t, r, n, ob, i);
}
var ZU = ob, eB = ZU;
function tB(e, t) {
  return eB(e, t);
}
var rB = tB;
let nB = class ab {
  constructor(t, r) {
    this.key = t, this.value = r;
  }
  /**
   * @returns {KeyValuePair}
   */
  clone() {
    const t = new ab();
    return this.key && (t.key = this.key.clone()), this.value && (t.value = this.value.clone()), t;
  }
};
var $a = nB, iB = "Expected a function";
function sB(e) {
  if (typeof e != "function")
    throw new TypeError(iB);
  return function() {
    var t = arguments;
    switch (t.length) {
      case 0:
        return !e.call(this);
      case 1:
        return !e.call(this, t[0]);
      case 2:
        return !e.call(this, t[0], t[1]);
      case 3:
        return !e.call(this, t[0], t[1], t[2]);
    }
    return !e.apply(this, t);
  };
}
var Sa = sB;
const oB = Sa;
function rl(e) {
  return typeof e == "string" ? (t) => t.element === e : e.constructor && e.extend ? (t) => t instanceof e : e;
}
let cb = class iu {
  constructor(t) {
    this.elements = t || [];
  }
  /**
   * @returns {Array}
   */
  toValue() {
    return this.elements.map((t) => t.toValue());
  }
  // High Order Functions
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {array} A new array with each element being the result of the callback function
   */
  map(t, r) {
    return this.elements.map(t, r);
  }
  /**
   * Maps and then flattens the results.
   * @param callback - Function to execute for each element.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {array}
   */
  flatMap(t, r) {
    return this.map(t, r).reduce((n, i) => n.concat(i), []);
  }
  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts an element of this array as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArraySlice.prototype
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(t, r) {
    const n = [];
    return this.forEach((i) => {
      const s = t.bind(r)(i);
      s && n.push(s);
    }), n;
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  filter(t, r) {
    return t = rl(t), new iu(this.elements.filter(t, r));
  }
  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(t, r) {
    return t = rl(t), new iu(this.elements.filter(oB(t), r));
  }
  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(t, r) {
    return t = rl(t), this.elements.find(t, r);
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArraySlice.prototype
   */
  forEach(t, r) {
    this.elements.forEach(t, r);
  }
  /**
   * @param callback - Function to execute for each element
   * @param initialValue
   * @memberof ArraySlice.prototype
   */
  reduce(t, r) {
    return this.elements.reduce(t, r);
  }
  /**
   * @param value
   * @returns {boolean}
   * @memberof ArraySlice.prototype
   */
  includes(t) {
    return this.elements.some((r) => r.equals(t));
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
  unshift(t) {
    this.elements.unshift(this.refract(t));
  }
  /**
   * Adds the given element to the end of the slice
   * @parameter {Element} value
   * @memberof ArraySlice.prototype
   */
  push(t) {
    return this.elements.push(this.refract(t)), this;
  }
  /**
   * @parameter {Element} value
   * @memberof ArraySlice.prototype
   */
  add(t) {
    this.push(t);
  }
  // Accessors
  /**
   * @parameter {number} index
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  get(t) {
    return this.elements[t];
  }
  /**
   * @parameter {number} index
   * @memberof ArraySlice.prototype
   */
  getValue(t) {
    const r = this.elements[t];
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
var Ea = cb;
const aB = rB, ys = $a, Jt = Ea;
let cB = class As {
  constructor(t, r, n) {
    r && (this.meta = r), n && (this.attributes = n), this.content = t;
  }
  /**
   * Freezes the element to prevent any mutation.
   * A frozen element will add `parent` property to every child element
   * to allow traversing up the element tree.
   */
  freeze() {
    Object.isFrozen(this) || (this._meta && (this.meta.parent = this, this.meta.freeze()), this._attributes && (this.attributes.parent = this, this.attributes.freeze()), this.children.forEach((t) => {
      t.parent = this, t.freeze();
    }, this), this.content && Array.isArray(this.content) && Object.freeze(this.content), Object.freeze(this));
  }
  primitive() {
  }
  /**
   * Creates a deep clone of the instance
   */
  clone() {
    const t = new this.constructor();
    return t.element = this.element, this.meta.length && (t._meta = this.meta.clone()), this.attributes.length && (t._attributes = this.attributes.clone()), this.content ? this.content.clone ? t.content = this.content.clone() : Array.isArray(this.content) ? t.content = this.content.map((r) => r.clone()) : t.content = this.content : t.content = this.content, t;
  }
  /**
   */
  toValue() {
    return this.content instanceof As ? this.content.toValue() : this.content instanceof ys ? {
      key: this.content.key.toValue(),
      value: this.content.value ? this.content.value.toValue() : void 0
    } : this.content && this.content.map ? this.content.map((t) => t.toValue(), this) : this.content;
  }
  /**
   * Creates a reference pointing at the Element
   * @returns {RefElement}
   * @memberof Element.prototype
   */
  toRef(t) {
    if (this.id.toValue() === "")
      throw Error("Cannot create reference to an element that does not contain an ID");
    const r = new this.RefElement(this.id.toValue());
    return t && (r.path = t), r;
  }
  /**
   * Finds the given elements in the element tree.
   * When providing multiple element names, you must first freeze the element.
   *
   * @param names {...elementNames}
   * @returns {ArraySlice}
   */
  findRecursive(...t) {
    if (arguments.length > 1 && !this.isFrozen)
      throw new Error("Cannot find recursive with multiple element names without first freezing the element. Call `element.freeze()`");
    const r = t.pop();
    let n = new Jt();
    const i = (o, a) => (o.push(a), o), s = (o, a) => {
      a.element === r && o.push(a);
      const c = a.findRecursive(r);
      return c && c.reduce(i, o), a.content instanceof ys && (a.content.key && s(o, a.content.key), a.content.value && s(o, a.content.value)), o;
    };
    return this.content && (this.content.element && s(n, this.content), Array.isArray(this.content) && this.content.reduce(s, n)), t.isEmpty || (n = n.filter((o) => {
      let a = o.parents.map((c) => c.element);
      for (const c in t) {
        const l = t[c], f = a.indexOf(l);
        if (f !== -1)
          a = a.splice(0, f);
        else
          return !1;
      }
      return !0;
    })), n;
  }
  set(t) {
    return this.content = t, this;
  }
  equals(t) {
    return aB(this.toValue(), t);
  }
  getMetaProperty(t, r) {
    if (!this.meta.hasKey(t)) {
      if (this.isFrozen) {
        const n = this.refract(r);
        return n.freeze(), n;
      }
      this.meta.set(t, r);
    }
    return this.meta.get(t);
  }
  setMetaProperty(t, r) {
    this.meta.set(t, r);
  }
  /**
   * @type String
   */
  get element() {
    return this._storedElement || "element";
  }
  set element(t) {
    this._storedElement = t;
  }
  get content() {
    return this._content;
  }
  set content(t) {
    if (t instanceof As)
      this._content = t;
    else if (t instanceof Jt)
      this.content = t.elements;
    else if (typeof t == "string" || typeof t == "number" || typeof t == "boolean" || t === "null" || t == null)
      this._content = t;
    else if (t instanceof ys)
      this._content = t;
    else if (Array.isArray(t))
      this._content = t.map(this.refract);
    else if (typeof t == "object")
      this._content = Object.keys(t).map((r) => new this.MemberElement(r, t[r]));
    else
      throw new Error("Cannot set content to given value");
  }
  /**
   * @type ObjectElement
   */
  get meta() {
    if (!this._meta) {
      if (this.isFrozen) {
        const t = new this.ObjectElement();
        return t.freeze(), t;
      }
      this._meta = new this.ObjectElement();
    }
    return this._meta;
  }
  set meta(t) {
    t instanceof this.ObjectElement ? this._meta = t : this.meta.set(t || {});
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
        const t = new this.ObjectElement();
        return t.freeze(), t;
      }
      this._attributes = new this.ObjectElement();
    }
    return this._attributes;
  }
  set attributes(t) {
    t instanceof this.ObjectElement ? this._attributes = t : this.attributes.set(t || {});
  }
  /**
   * Unique Identifier, MUST be unique throughout an entire element tree.
   * @type StringElement
   */
  get id() {
    return this.getMetaProperty("id", "");
  }
  set id(t) {
    this.setMetaProperty("id", t);
  }
  /**
   * @type ArrayElement
   */
  get classes() {
    return this.getMetaProperty("classes", []);
  }
  set classes(t) {
    this.setMetaProperty("classes", t);
  }
  /**
   * Human-readable title of element
   * @type StringElement
   */
  get title() {
    return this.getMetaProperty("title", "");
  }
  set title(t) {
    this.setMetaProperty("title", t);
  }
  /**
   * Human-readable description of element
   * @type StringElement
   */
  get description() {
    return this.getMetaProperty("description", "");
  }
  set description(t) {
    this.setMetaProperty("description", t);
  }
  /**
   * @type ArrayElement
   */
  get links() {
    return this.getMetaProperty("links", []);
  }
  set links(t) {
    this.setMetaProperty("links", t);
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
    let { parent: t } = this;
    const r = new Jt();
    for (; t; )
      r.push(t), t = t.parent;
    return r;
  }
  /**
   * Returns all of the children elements found within the element.
   * @type ArraySlice
   * @see recursiveChildren
   */
  get children() {
    if (Array.isArray(this.content))
      return new Jt(this.content);
    if (this.content instanceof ys) {
      const t = new Jt([this.content.key]);
      return this.content.value && t.push(this.content.value), t;
    }
    return this.content instanceof As ? new Jt([this.content]) : new Jt();
  }
  /**
  * Returns all of the children elements found within the element recursively.
  * @type ArraySlice
  * @see children
  */
  get recursiveChildren() {
    const t = new Jt();
    return this.children.forEach((r) => {
      t.push(r), r.recursiveChildren.forEach((n) => {
        t.push(n);
      });
    }), t;
  }
};
var Bt = cB;
const lB = Bt;
let uB = class extends lB {
  constructor(t, r, n) {
    super(t || null, r, n), this.element = "null";
  }
  primitive() {
    return "null";
  }
  set() {
    return new Error("Cannot set the value of null");
  }
};
var fB = uB;
const pB = Bt;
var hB = class extends pB {
  constructor(t, r, n) {
    super(t, r, n), this.element = "string";
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
const dB = Bt;
var mB = class extends dB {
  constructor(t, r, n) {
    super(t, r, n), this.element = "number";
  }
  primitive() {
    return "number";
  }
};
const yB = Bt;
var vB = class extends yB {
  constructor(t, r, n) {
    super(t, r, n), this.element = "boolean";
  }
  primitive() {
    return "boolean";
  }
};
const gB = Sa, bB = Bt, Am = Ea;
let oi = class extends bB {
  constructor(t, r, n) {
    super(t || [], r, n), this.element = "array";
  }
  primitive() {
    return "array";
  }
  /**
   * @returns {Element}
   */
  get(t) {
    return this.content[t];
  }
  /**
   * Helper for returning the value of an item
   * This works for both ArrayElement and ObjectElement instances
   */
  getValue(t) {
    const r = this.get(t);
    if (r)
      return r.toValue();
  }
  /**
   * @returns {Element}
   */
  getIndex(t) {
    return this.content[t];
  }
  set(t, r) {
    return this.content[t] = this.refract(r), this;
  }
  remove(t) {
    const r = this.content.splice(t, 1);
    return r.length ? r[0] : null;
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   */
  map(t, r) {
    return this.content.map(t, r);
  }
  /**
   * Maps and then flattens the results.
   * @param callback - Function to execute for each element.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {array}
   */
  flatMap(t, r) {
    return this.map(t, r).reduce((n, i) => n.concat(i), []);
  }
  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts an element of this array as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArrayElement.prototype
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(t, r) {
    const n = [];
    return this.forEach((i) => {
      const s = t.bind(r)(i);
      s && n.push(s);
    }), n;
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  filter(t, r) {
    return new Am(this.content.filter(t, r));
  }
  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  reject(t, r) {
    return this.filter(gB(t), r);
  }
  /**
   * This is a reduce function specifically for Minim arrays and objects. It
   * allows for returning normal values or Minim instances, so it converts any
   * primitives on each step.
   */
  reduce(t, r) {
    let n, i;
    r !== void 0 ? (n = 0, i = this.refract(r)) : (n = 1, i = this.primitive() === "object" ? this.first.value : this.first);
    for (let s = n; s < this.length; s += 1) {
      const o = this.content[s];
      this.primitive() === "object" ? i = this.refract(t(i, o.value, o.key, o, this)) : i = this.refract(t(i, o, s, this));
    }
    return i;
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
  forEach(t, r) {
    this.content.forEach((n, i) => {
      t.bind(r)(n, this.refract(i));
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
  unshift(t) {
    this.content.unshift(this.refract(t));
  }
  /**
   * @param value
   */
  push(t) {
    return this.content.push(this.refract(t)), this;
  }
  /**
   * @param value
   */
  add(t) {
    this.push(t);
  }
  /**
   * Recusively search all descendents using a condition function.
   * @returns {Element[]}
   */
  findElements(t, r) {
    const n = r || {}, i = !!n.recursive, s = n.results === void 0 ? [] : n.results;
    return this.forEach((o, a, c) => {
      i && o.findElements !== void 0 && o.findElements(t, {
        results: s,
        recursive: i
      }), t(o, a, c) && s.push(o);
    }), s;
  }
  /**
   * Recusively search all descendents using a condition function.
   * @param condition
   * @returns {ArraySlice}
   */
  find(t) {
    return new Am(this.findElements(t, { recursive: !0 }));
  }
  /**
   * @param {string} element
   * @returns {ArraySlice}
   */
  findByElement(t) {
    return this.find((r) => r.element === t);
  }
  /**
   * @param {string} className
   * @returns {ArraySlice}
   * @memberof ArrayElement.prototype
   */
  findByClass(t) {
    return this.find((r) => r.classes.includes(t));
  }
  /**
   * Search the tree recursively and find the element with the matching ID
   * @param {string} id
   * @returns {Element}
   * @memberof ArrayElement.prototype
   */
  getById(t) {
    return this.find((r) => r.id.toValue() === t).first;
  }
  /**
   * Looks for matching children using deep equality
   * @param value
   * @returns {boolean}
   */
  includes(t) {
    return this.content.some((r) => r.equals(t));
  }
  /**
   * Looks for matching children using deep equality
   * @param value
   * @returns {boolean}
   * @see includes
   * @deprecated method was replaced by includes
   */
  contains(t) {
    return this.includes(t);
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
  concat(t) {
    return new this.constructor(this.content.concat(t.content));
  }
  "fantasy-land/concat"(t) {
    return this.concat(t);
  }
  "fantasy-land/map"(t) {
    return new this.constructor(this.map(t));
  }
  "fantasy-land/chain"(t) {
    return this.map((r) => t(r), this).reduce((r, n) => r.concat(n), this.empty());
  }
  "fantasy-land/filter"(t) {
    return new this.constructor(this.content.filter(t));
  }
  "fantasy-land/reduce"(t, r) {
    return this.content.reduce(t, r);
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
oi.empty = function() {
  return new this();
};
oi["fantasy-land/empty"] = oi.empty;
typeof Symbol < "u" && (oi.prototype[Symbol.iterator] = function() {
  return this.content[Symbol.iterator]();
});
var lb = oi;
const $B = $a, SB = Bt;
var ub = class extends SB {
  constructor(t, r, n, i) {
    super(new $B(), n, i), this.element = "member", this.key = t, this.value = r;
  }
  /**
   * @type Element
   */
  get key() {
    return this.content.key;
  }
  set key(t) {
    this.content.key = this.refract(t);
  }
  /**
   * @type Element
   */
  get value() {
    return this.content.value;
  }
  set value(t) {
    this.content.value = this.refract(t);
  }
};
const EB = Sa, wB = Ea;
let OB = class fb extends wB {
  map(t, r) {
    return this.elements.map((n) => t.bind(r)(n.value, n.key, n));
  }
  filter(t, r) {
    return new fb(this.elements.filter((n) => t.bind(r)(n.value, n.key, n)));
  }
  reject(t, r) {
    return this.filter(EB(t.bind(r)));
  }
  forEach(t, r) {
    return this.elements.forEach((n, i) => {
      t.bind(r)(n.value, n.key, n, i);
    });
  }
  /**
   * @returns {array}
   */
  keys() {
    return this.map((t, r) => r.toValue());
  }
  /**
   * @returns {array}
   */
  values() {
    return this.map((t) => t.toValue());
  }
};
var pb = OB;
const xB = Sa, AB = ma, PB = lb, jB = ub, _B = pb;
let RB = class extends PB {
  constructor(t, r, n) {
    super(t || [], r, n), this.element = "object";
  }
  primitive() {
    return "object";
  }
  toValue() {
    return this.content.reduce((t, r) => (t[r.key.toValue()] = r.value ? r.value.toValue() : void 0, t), {});
  }
  /**
   * @param key
   * @returns {Element}
   */
  get(t) {
    const r = this.getMember(t);
    if (r)
      return r.value;
  }
  /**
   * @param key
   * @returns {MemberElement}
   */
  getMember(t) {
    if (t !== void 0)
      return this.content.find((r) => r.key.toValue() === t);
  }
  /**
   * @param key
   */
  remove(t) {
    let r = null;
    return this.content = this.content.filter((n) => n.key.toValue() === t ? (r = n, !1) : !0), r;
  }
  /**
   * @param key
   * @returns {Element}
   */
  getKey(t) {
    const r = this.getMember(t);
    if (r)
      return r.key;
  }
  /**
   * Set allows either a key/value pair to be given or an object
   * If an object is given, each key is set to its respective value
   */
  set(t, r) {
    if (AB(t))
      return Object.keys(t).forEach((s) => {
        this.set(s, t[s]);
      }), this;
    const n = t, i = this.getMember(n);
    return i ? i.value = r : this.content.push(new jB(n, r)), this;
  }
  /**
   */
  keys() {
    return this.content.map((t) => t.key.toValue());
  }
  /**
   */
  values() {
    return this.content.map((t) => t.value.toValue());
  }
  /**
   * @returns {boolean}
   */
  hasKey(t) {
    return this.content.some((r) => r.key.equals(t));
  }
  /**
   * @returns {array}
   */
  items() {
    return this.content.map((t) => [t.key.toValue(), t.value.toValue()]);
  }
  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   */
  map(t, r) {
    return this.content.map((n) => t.bind(r)(n.value, n.key, n));
  }
  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts the value, key and member element of this object as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(t, r) {
    const n = [];
    return this.forEach((i, s, o) => {
      const a = t.bind(r)(i, s, o);
      a && n.push(a);
    }), n;
  }
  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @returns {ObjectSlice}
   */
  filter(t, r) {
    return new _B(this.content).filter(t, r);
  }
  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @returns {ObjectSlice}
   *
   * @memberof ObjectElement.prototype
   */
  reject(t, r) {
    return this.filter(xB(t), r);
  }
  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @memberof ObjectElement.prototype
   */
  forEach(t, r) {
    return this.content.forEach((n) => t.bind(r)(n.value, n.key, n));
  }
};
var TB = RB;
const IB = Bt;
var CB = class extends IB {
  constructor(t, r, n) {
    super(t || [], r, n), this.element = "link";
  }
  /**
   * The relation identifier for the link, as defined in RFC 5988.
   * @type StringElement
   */
  get relation() {
    return this.attributes.get("relation");
  }
  set relation(t) {
    this.attributes.set("relation", t);
  }
  /**
   * The URI for the given link.
   * @type StringElement
   */
  get href() {
    return this.attributes.get("href");
  }
  set href(t) {
    this.attributes.set("href", t);
  }
};
const VB = Bt;
var MB = class extends VB {
  constructor(t, r, n) {
    super(t || [], r, n), this.element = "ref", this.path || (this.path = "element");
  }
  /**
   * Path of referenced element to transclude instead of element itself.
   * @type StringElement
   * @default element
   */
  get path() {
    return this.attributes.get("path");
  }
  set path(t) {
    this.attributes.set("path", t);
  }
};
const An = Bt, hb = fB, db = hB, mb = mB, yb = vB, vb = lb, gb = ub, vp = TB, FB = CB, bb = MB, $b = Ea, DB = pb, NB = $a;
function wa(e) {
  return e instanceof An ? e : typeof e == "string" ? new db(e) : typeof e == "number" ? new mb(e) : typeof e == "boolean" ? new yb(e) : e === null ? new hb() : Array.isArray(e) ? new vb(e.map(wa)) : typeof e == "object" ? new vp(e) : e;
}
An.prototype.ObjectElement = vp;
An.prototype.RefElement = bb;
An.prototype.MemberElement = gb;
An.prototype.refract = wa;
$b.prototype.refract = wa;
var Sb = {
  Element: An,
  NullElement: hb,
  StringElement: db,
  NumberElement: mb,
  BooleanElement: yb,
  ArrayElement: vb,
  MemberElement: gb,
  ObjectElement: vp,
  LinkElement: FB,
  RefElement: bb,
  refract: wa,
  ArraySlice: $b,
  ObjectSlice: DB,
  KeyValuePair: NB
};
const LB = fF, kB = NF, UB = qF, BB = KF, qB = ma, Eb = XF, Pe = Sb;
let wb = class {
  constructor(t) {
    this.elementMap = {}, this.elementDetection = [], this.Element = Pe.Element, this.KeyValuePair = Pe.KeyValuePair, (!t || !t.noDefault) && this.useDefault(), this._attributeElementKeys = [], this._attributeElementArrayKeys = [];
  }
  /**
   * Use a namespace plugin or load a generic plugin.
   *
   * @param plugin
   */
  use(t) {
    return t.namespace && t.namespace({ base: this }), t.load && t.load({ base: this }), this;
  }
  /*
   * Use the default namespace. This preloads all the default elements
   * into this registry instance.
   */
  useDefault() {
    return this.register("null", Pe.NullElement).register("string", Pe.StringElement).register("number", Pe.NumberElement).register("boolean", Pe.BooleanElement).register("array", Pe.ArrayElement).register("object", Pe.ObjectElement).register("member", Pe.MemberElement).register("ref", Pe.RefElement).register("link", Pe.LinkElement), this.detect(LB, Pe.NullElement, !1).detect(kB, Pe.StringElement, !1).detect(UB, Pe.NumberElement, !1).detect(BB, Pe.BooleanElement, !1).detect(Array.isArray, Pe.ArrayElement, !1).detect(qB, Pe.ObjectElement, !1), this;
  }
  /**
   * Register a new element class for an element.
   *
   * @param {string} name
   * @param elementClass
   */
  register(t, r) {
    return this._elements = void 0, this.elementMap[t] = r, this;
  }
  /**
   * Unregister a previously registered class for an element.
   *
   * @param {string} name
   */
  unregister(t) {
    return this._elements = void 0, delete this.elementMap[t], this;
  }
  /*
   * Add a new detection function to determine which element
   * class to use when converting existing js instances into
   * refract element.
   */
  detect(t, r, n) {
    return (n === void 0 ? !0 : n) ? this.elementDetection.unshift([t, r]) : this.elementDetection.push([t, r]), this;
  }
  /*
   * Convert an existing Javascript object into refract element instances, which
   * can be further processed or serialized into refract.
   * If the item passed in is already refracted, then it is returned
   * unmodified.
   */
  toElement(t) {
    if (t instanceof this.Element)
      return t;
    let r;
    for (let n = 0; n < this.elementDetection.length; n += 1) {
      const i = this.elementDetection[n][0], s = this.elementDetection[n][1];
      if (i(t)) {
        r = new s(t);
        break;
      }
    }
    return r;
  }
  /*
   * Get an element class given an element name.
   */
  getElementClass(t) {
    const r = this.elementMap[t];
    return r === void 0 ? this.Element : r;
  }
  /*
   * Convert a refract document into refract element instances.
   */
  fromRefract(t) {
    return this.serialiser.deserialise(t);
  }
  /*
   * Convert an element to a Refracted JSON object.
   */
  toRefract(t) {
    return this.serialiser.serialise(t);
  }
  /*
   * Get an object that contains all registered element classes, where
   * the key is the PascalCased element name and the value is the class.
   */
  get elements() {
    return this._elements === void 0 && (this._elements = {
      Element: this.Element
    }, Object.keys(this.elementMap).forEach((t) => {
      const r = t[0].toUpperCase() + t.substr(1);
      this._elements[r] = this.elementMap[t];
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
    return new Eb(this);
  }
};
Eb.prototype.Namespace = wb;
var HB = wb;
const GB = HB, Xe = Sb;
var JB = GB, Zr = $a, ai = Xe.ArraySlice, ao = Xe.ObjectSlice, zB = Xe.Element, Rt = Xe.StringElement, su = Xe.NumberElement, Tt = Xe.BooleanElement, ou = Xe.NullElement, ie = Xe.ArrayElement, j = Xe.ObjectElement, Ai = Xe.MemberElement, au = Xe.RefElement, cu = Xe.LinkElement, gp = Xe.refract;
class KB extends Rt {
  // classes: warning | error
  constructor(t, r, n) {
    super(t, r, n), this.element = "annotation";
  }
  get code() {
    return this.attributes.get("code");
  }
  set code(t) {
    this.attributes.set("code", t);
  }
}
const co = KB;
class WB extends Rt {
  constructor(t, r, n) {
    super(t, r, n), this.element = "comment";
  }
}
const lo = WB;
class YB extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.element = "parseResult";
  }
  get api() {
    return this.children.filter((t) => t.classes.contains("api")).first;
  }
  get results() {
    return this.children.filter((t) => t.classes.contains("result"));
  }
  get result() {
    return this.results.first;
  }
  get annotations() {
    return this.children.filter((t) => t.element === "annotation");
  }
  get warnings() {
    return this.children.filter((t) => t.element === "annotation" && t.classes.contains("warning"));
  }
  get errors() {
    return this.children.filter((t) => t.element === "annotation" && t.classes.contains("error"));
  }
  get isEmpty() {
    return this.children.reject((t) => t.element === "annotation").isEmpty;
  }
  replaceResult(t) {
    const {
      result: r
    } = this;
    if (Ft(r))
      return !1;
    const n = this.content.findIndex((i) => i === r);
    return n === -1 ? !1 : (this.content[n] = t, !0);
  }
}
const at = YB;
class XB extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.element = "sourceMap";
  }
  get positionStart() {
    return this.children.filter((t) => t.classes.contains("position")).get(0);
  }
  get positionEnd() {
    return this.children.filter((t) => t.classes.contains("position")).get(1);
  }
  set position(t) {
    if (t === null)
      return;
    const r = new ie([t.start.row, t.start.column, t.start.char]), n = new ie([t.end.row, t.end.column, t.end.char]);
    r.classes.push("position"), n.classes.push("position"), this.push(r).push(n);
  }
}
const uo = XB, QB = (e, t) => typeof t == "object" && t !== null && e in t && typeof t[e] == "function", ZB = (e) => typeof e == "object" && e != null && "_storedElement" in e && typeof e._storedElement == "string" && // eslint-disable-line no-underscore-dangle
"_content" in e, e3 = (e, t) => typeof t == "object" && t !== null && "primitive" in t ? typeof t.primitive == "function" && t.primitive() === e : !1, t3 = (e, t) => typeof t == "object" && t !== null && "classes" in t && (Array.isArray(t.classes) || t.classes instanceof ie) && t.classes.includes(e), zt = (e, t) => typeof t == "object" && t !== null && "element" in t && t.element === e, r3 = (e) => e({
  hasMethod: QB,
  hasBasicElementProps: ZB,
  primitiveEq: e3,
  isElementType: zt,
  hasClass: t3
}), R = r3, _e = R(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof zB || e(r) && t(void 0, r)), G = R(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof Rt || e(r) && t("string", r)), bp = R(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof su || e(r) && t("number", r)), $p = R(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof ou || e(r) && t("null", r)), Pi = R(({
  hasBasicElementProps: e,
  primitiveEq: t
}) => (r) => r instanceof Tt || e(r) && t("boolean", r)), X = R(({
  hasBasicElementProps: e,
  primitiveEq: t,
  hasMethod: r
}) => (n) => n instanceof j || e(n) && t("object", n) && r("keys", n) && r("values", n) && r("items", n)), et = R(({
  hasBasicElementProps: e,
  primitiveEq: t,
  hasMethod: r
}) => (n) => n instanceof ie && !(n instanceof j) || e(n) && t("array", n) && r("push", n) && r("unshift", n) && r("map", n) && r("reduce", n)), Ke = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ai || e(n) && t("member", n) && r(void 0, n)), Ob = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof cu || e(n) && t("link", n) && r(void 0, n)), xb = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof au || e(n) && t("ref", n) && r(void 0, n)), n3 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof co || e(n) && t("annotation", n) && r("array", n)), i3 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof lo || e(n) && t("comment", n) && r("string", n)), Ab = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof at || e(n) && t("parseResult", n) && r("array", n)), Pb = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof uo || e(n) && t("sourceMap", n) && r("array", n)), Pt = (e) => zt("object", e) || zt("array", e) || zt("boolean", e) || zt("number", e) || zt("string", e) || zt("null", e) || zt("member", e), Sp = (e) => Pb(e.meta.get("sourceMap")), s3 = (e, t) => {
  if (e.length === 0)
    return !0;
  const r = t.attributes.get("symbols");
  return et(r) ? Ef(ca(r.toValue()), e) : !1;
}, Wn = (e, t) => e.length === 0 ? !0 : Ef(ca(t.classes.toValue()), e), o3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasElementSourceMap: Sp,
  includesClasses: Wn,
  includesSymbols: s3,
  isAnnotationElement: n3,
  isArrayElement: et,
  isBooleanElement: Pi,
  isCommentElement: i3,
  isElement: _e,
  isLinkElement: Ob,
  isMemberElement: Ke,
  isNullElement: $p,
  isNumberElement: bp,
  isObjectElement: X,
  isParseResultElement: Ab,
  isPrimitiveElement: Pt,
  isRefElement: xb,
  isSourceMapElement: Pb,
  isStringElement: G
}, Symbol.toStringTag, { value: "Module" }));
class jb extends JB {
  constructor() {
    super(), this.register("annotation", co), this.register("comment", lo), this.register("parseResult", at), this.register("sourceMap", uo);
  }
}
const _b = new jb(), Pn = (e) => {
  const t = new jb();
  return Ws(e) && t.use(e), t;
}, a3 = () => ({
  predicates: {
    ...o3
  },
  namespace: _b
}), Rb = a3, Ep = (e, t, r) => {
  const n = e[t];
  if (n != null) {
    if (!r && typeof n == "function")
      return n;
    const i = r ? n.leave : n.enter;
    if (typeof i == "function")
      return i;
  } else {
    const i = r ? e.leave : e.enter;
    if (i != null) {
      if (typeof i == "function")
        return i;
      const s = i[t];
      if (typeof s == "function")
        return s;
    }
  }
  return null;
}, M = {}, Oa = (e) => e == null ? void 0 : e.type, Tb = (e) => typeof Oa(e) == "string", wp = (e) => Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e)), Ib = (e, {
  visitFnGetter: t = Ep,
  nodeTypeGetter: r = Oa,
  breakSymbol: n = M,
  deleteNodeSymbol: i = null,
  skipVisitingNodeSymbol: s = !1,
  exposeEdits: o = !1
} = {}) => {
  const a = Symbol("skip"), c = new Array(e.length).fill(a);
  return {
    enter(l, ...f) {
      let u = l, h = !1;
      for (let p = 0; p < e.length; p += 1)
        if (c[p] === a) {
          const d = t(e[p], r(u), !1);
          if (typeof d == "function") {
            const y = d.call(e[p], u, ...f);
            if (y === s)
              c[p] = l;
            else if (y === n)
              c[p] = n;
            else {
              if (y === i)
                return y;
              if (y !== void 0)
                if (o)
                  u = y, h = !0;
                else
                  return y;
            }
          }
        }
      return h ? u : void 0;
    },
    leave(l, ...f) {
      for (let u = 0; u < e.length; u += 1)
        if (c[u] === a) {
          const h = t(e[u], r(l), !0);
          if (typeof h == "function") {
            const p = h.call(e[u], l, ...f);
            if (p === n)
              c[u] = n;
            else if (p !== void 0 && p !== s)
              return p;
          }
        } else
          c[u] === l && (c[u] = a);
    }
  };
}, Op = (e, t, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: i = M,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ep,
  nodeTypeGetter: c = Oa,
  nodePredicate: l = Tb,
  nodeCloneFn: f = wp,
  detectCycles: u = !0
} = {}) => {
  const h = r || {};
  let p, d = Array.isArray(e), y = [e], g = -1, b, E = [], S = e;
  const w = [], _ = [];
  do {
    g += 1;
    const P = g === y.length;
    let I;
    const C = P && E.length !== 0;
    if (P) {
      if (I = _.length === 0 ? void 0 : w.pop(), S = b, b = _.pop(), C)
        if (d) {
          S = S.slice();
          let x = 0;
          for (const [T, N] of E) {
            const W = T - x;
            N === s ? (S.splice(W, 1), x += 1) : S[W] = N;
          }
        } else {
          S = f(S);
          for (const [x, T] of E)
            S[x] = T;
        }
      g = p.index, y = p.keys, E = p.edits, d = p.inArray, p = p.prev;
    } else if (b !== s && b !== void 0) {
      if (I = d ? g : y[g], S = b[I], S === s || S === void 0)
        continue;
      w.push(I);
    }
    let J;
    if (!Array.isArray(S)) {
      if (!l(S))
        throw new xi(`Invalid AST Node:  ${String(S)}`, {
          node: S
        });
      if (u && _.includes(S)) {
        w.pop();
        continue;
      }
      const x = a(t, c(S), P);
      if (x) {
        for (const [T, N] of Object.entries(n))
          t[T] = N;
        J = x.call(t, S, I, b, w, _);
      }
      if (J === i)
        break;
      if (J === o) {
        if (!P) {
          w.pop();
          continue;
        }
      } else if (J !== void 0 && (E.push([I, J]), !P))
        if (l(J))
          S = J;
        else {
          w.pop();
          continue;
        }
    }
    if (J === void 0 && C && E.push([I, S]), !P) {
      var F;
      p = {
        inArray: d,
        index: g,
        keys: y,
        edits: E,
        prev: p
      }, d = Array.isArray(S), y = d ? S : (F = h[c(S)]) !== null && F !== void 0 ? F : [], g = -1, E = [], b !== s && b !== void 0 && _.push(b), b = S;
    }
  } while (p !== void 0);
  return E.length !== 0 ? E[E.length - 1][1] : e;
};
Op[Symbol.for("nodejs.util.promisify.custom")] = async (e, t, {
  keyMap: r = null,
  state: n = {},
  breakSymbol: i = M,
  deleteNodeSymbol: s = null,
  skipVisitingNodeSymbol: o = !1,
  visitFnGetter: a = Ep,
  nodeTypeGetter: c = Oa,
  nodePredicate: l = Tb,
  nodeCloneFn: f = wp,
  detectCycles: u = !0
} = {}) => {
  const h = r || {};
  let p, d = Array.isArray(e), y = [e], g = -1, b, E = [], S = e;
  const w = [], _ = [];
  do {
    g += 1;
    const P = g === y.length;
    let I;
    const C = P && E.length !== 0;
    if (P) {
      if (I = _.length === 0 ? void 0 : w.pop(), S = b, b = _.pop(), C)
        if (d) {
          S = S.slice();
          let x = 0;
          for (const [T, N] of E) {
            const W = T - x;
            N === s ? (S.splice(W, 1), x += 1) : S[W] = N;
          }
        } else {
          S = f(S);
          for (const [x, T] of E)
            S[x] = T;
        }
      g = p.index, y = p.keys, E = p.edits, d = p.inArray, p = p.prev;
    } else if (b !== s && b !== void 0) {
      if (I = d ? g : y[g], S = b[I], S === s || S === void 0)
        continue;
      w.push(I);
    }
    let J;
    if (!Array.isArray(S)) {
      if (!l(S))
        throw new xi(`Invalid AST Node: ${String(S)}`, {
          node: S
        });
      if (u && _.includes(S)) {
        w.pop();
        continue;
      }
      const x = a(t, c(S), P);
      if (x) {
        for (const [T, N] of Object.entries(n))
          t[T] = N;
        J = await x.call(t, S, I, b, w, _);
      }
      if (J === i)
        break;
      if (J === o) {
        if (!P) {
          w.pop();
          continue;
        }
      } else if (J !== void 0 && (E.push([I, J]), !P))
        if (l(J))
          S = J;
        else {
          w.pop();
          continue;
        }
    }
    if (J === void 0 && C && E.push([I, S]), !P) {
      var F;
      p = {
        inArray: d,
        index: g,
        keys: y,
        edits: E,
        prev: p
      }, d = Array.isArray(S), y = d ? S : (F = h[c(S)]) !== null && F !== void 0 ? F : [], g = -1, E = [], b !== s && b !== void 0 && _.push(b), b = S;
    }
  } while (p !== void 0);
  return E.length !== 0 ? E[E.length - 1][1] : e;
};
class c3 extends xi {
  constructor(t, r) {
    super(t, r), typeof r < "u" && (this.value = r.value);
  }
}
const Cb = c3;
class l3 extends Cb {
}
const u3 = l3;
class f3 extends Cb {
}
const p3 = f3, A = (e, t = {}) => {
  const {
    visited: r = /* @__PURE__ */ new WeakMap()
  } = t, n = {
    ...t,
    visited: r
  };
  if (r.has(e))
    return r.get(e);
  if (e instanceof Zr) {
    const {
      key: i,
      value: s
    } = e, o = _e(i) ? A(i, n) : i, a = _e(s) ? A(s, n) : s, c = new Zr(o, a);
    return r.set(e, c), c;
  }
  if (e instanceof ao) {
    const i = (a) => A(a, n), s = [...e].map(i), o = new ao(s);
    return r.set(e, o), o;
  }
  if (e instanceof ai) {
    const i = (a) => A(a, n), s = [...e].map(i), o = new ai(s);
    return r.set(e, o), o;
  }
  if (_e(e)) {
    const i = De(e);
    if (r.set(e, i), e.content)
      if (_e(e.content))
        i.content = A(e.content, n);
      else if (e.content instanceof Zr)
        i.content = A(e.content, n);
      else if (Array.isArray(e.content)) {
        const s = (o) => A(o, n);
        i.content = e.content.map(s);
      } else
        i.content = e.content;
    else
      i.content = e.content;
    return i;
  }
  throw new u3("Value provided to cloneDeep function couldn't be cloned", {
    value: e
  });
};
A.safe = (e) => {
  try {
    return A(e);
  } catch {
    return e;
  }
};
const Vb = (e) => {
  const {
    key: t,
    value: r
  } = e;
  return new Zr(t, r);
}, h3 = (e) => {
  const t = [...e];
  return new ai(t);
}, d3 = (e) => {
  const t = [...e];
  return new ao(t);
}, Mb = (e) => {
  const t = new e.constructor();
  if (t.element = e.element, e.meta.length > 0 && (t._meta = A(e.meta)), e.attributes.length > 0 && (t._attributes = A(e.attributes)), _e(e.content)) {
    const r = e.content;
    t.content = Mb(r);
  } else
    Array.isArray(e.content) ? t.content = [...e.content] : e.content instanceof Zr ? t.content = Vb(e.content) : t.content = e.content;
  return t;
}, De = (e) => {
  if (e instanceof Zr)
    return Vb(e);
  if (e instanceof ao)
    return d3(e);
  if (e instanceof ai)
    return h3(e);
  if (_e(e))
    return Mb(e);
  throw new p3("Value provided to cloneShallow function couldn't be cloned", {
    value: e
  });
};
De.safe = (e) => {
  try {
    return De(e);
  } catch {
    return e;
  }
};
const jn = (e) => X(e) ? "ObjectElement" : et(e) ? "ArrayElement" : Ke(e) ? "MemberElement" : G(e) ? "StringElement" : Pi(e) ? "BooleanElement" : bp(e) ? "NumberElement" : $p(e) ? "NullElement" : Ob(e) ? "LinkElement" : xb(e) ? "RefElement" : void 0, Fb = (e) => _e(e) ? De(e) : wp(e), Db = xe(jn, Rr), _n = {
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
}, Nb = v({
  props: {
    result: [],
    predicate: $f,
    returnOnTrue: void 0,
    returnOnFalse: void 0
  },
  init({
    // @ts-ignore
    predicate: e = this.predicate,
    // @ts-ignore
    returnOnTrue: t = this.returnOnTrue,
    // @ts-ignore
    returnOnFalse: r = this.returnOnFalse
  } = {}) {
    this.result = [], this.predicate = e, this.returnOnTrue = t, this.returnOnFalse = r;
  },
  methods: {
    enter(e) {
      return this.predicate(e) ? (this.result.push(e), this.returnOnTrue) : this.returnOnFalse;
    }
  }
}), Te = (e, t, {
  keyMap: r = _n,
  ...n
} = {}) => Op(e, t, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: jn,
  nodePredicate: Db,
  nodeCloneFn: Fb,
  ...n
});
Te[Symbol.for("nodejs.util.promisify.custom")] = async (e, t, {
  keyMap: r = _n,
  ...n
} = {}) => Op[Symbol.for("nodejs.util.promisify.custom")](e, t, {
  // @ts-ignore
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: jn,
  nodePredicate: Db,
  nodeCloneFn: Fb,
  ...n
});
const m3 = {
  toolboxCreator: Rb,
  visitorOptions: {
    nodeTypeGetter: jn,
    exposeEdits: !0
  }
}, ji = (e, t, r = {}) => {
  if (t.length === 0)
    return e;
  const n = wv(m3, r), {
    toolboxCreator: i,
    visitorOptions: s
  } = n, o = i(), a = t.map((f) => f(o)), c = Ib(a.map(Dl({}, "visitor")), {
    ...s
  });
  a.forEach(fn(["pre"], []));
  const l = Te(e, c, s);
  return a.forEach(fn(["post"], [])), l;
};
var Lb = { exports: {} };
(function(e) {
  var t = (() => {
    var r = Object.defineProperty, n = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, s = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, c = (w, _, F) => _ in w ? r(w, _, { enumerable: !0, configurable: !0, writable: !0, value: F }) : w[_] = F, l = (w, _) => {
      for (var F in _ || (_ = {}))
        o.call(_, F) && c(w, F, _[F]);
      if (s)
        for (var F of s(_))
          a.call(_, F) && c(w, F, _[F]);
      return w;
    }, f = (w, _) => {
      for (var F in _)
        r(w, F, { get: _[F], enumerable: !0 });
    }, u = (w, _, F, P) => {
      if (_ && typeof _ == "object" || typeof _ == "function")
        for (let I of i(_))
          !o.call(w, I) && I !== F && r(w, I, { get: () => _[I], enumerable: !(P = n(_, I)) || P.enumerable });
      return w;
    }, h = (w) => u(r({}, "__esModule", { value: !0 }), w), p = (w, _, F) => (c(w, typeof _ != "symbol" ? _ + "" : _, F), F), d = {};
    f(d, {
      DEFAULT_OPTIONS: () => b,
      DEFAULT_UUID_LENGTH: () => g,
      default: () => S
    });
    var y = "5.0.3", g = 6, b = {
      dictionary: "alphanum",
      shuffle: !0,
      debug: !1,
      length: g,
      counter: 0
    }, E = class {
      constructor(_ = {}) {
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
          const T = [...x];
          if (T[0] = `[short-unique-id] ${x[0]}`, this.debug === !0 && typeof console < "u" && console !== null)
            return console.log(...T);
        }), p(this, "setDictionary", (x, T) => {
          let N;
          if (x && Array.isArray(x) && x.length > 1)
            N = x;
          else {
            N = [];
            let W;
            this.dictIndex = W = 0;
            const ye = `_${x}_dict_ranges`, ce = this._dict_ranges[ye];
            Object.keys(ce).forEach((Q) => {
              const Fe = Q;
              for (this.dictRange = ce[Fe], this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1], this.dictIndex = W = this.lowerBound; this.lowerBound <= this.upperBound ? W < this.upperBound : W > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? W += 1 : W -= 1)
                N.push(String.fromCharCode(this.dictIndex));
            });
          }
          T && (N = N.sort(() => Math.random() - 0.5)), this.dict = N, this.dictLength = this.dict.length, this.setCounter(0);
        }), p(this, "seq", () => this.sequentialUUID()), p(this, "sequentialUUID", () => {
          let x, T, N = "";
          x = this.counter;
          do
            T = x % this.dictLength, x = Math.trunc(x / this.dictLength), N += this.dict[T];
          while (x !== 0);
          return this.counter += 1, N;
        }), p(this, "rnd", (x = this.uuidLength || g) => this.randomUUID(x)), p(this, "randomUUID", (x = this.uuidLength || g) => {
          let T, N, W;
          if (x === null || typeof x > "u" || x < 1)
            throw new Error("Invalid UUID Length Provided");
          for (T = "", W = 0; W < x; W += 1)
            N = parseInt(
              (Math.random() * this.dictLength).toFixed(0),
              10
            ) % this.dictLength, T += this.dict[N];
          return T;
        }), p(this, "fmt", (x, T) => this.formattedUUID(x, T)), p(this, "formattedUUID", (x, T) => {
          const N = {
            $r: this.randomUUID,
            $s: this.sequentialUUID,
            $t: this.stamp
          };
          return x.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (ye) => {
              const ce = ye.slice(0, 2), Q = parseInt(ye.slice(2), 10);
              return ce === "$s" ? N[ce]().padStart(Q, "0") : ce === "$t" && T ? N[ce](Q, T) : N[ce](Q);
            }
          );
        }), p(this, "availableUUIDs", (x = this.uuidLength) => parseFloat(
          Math.pow([...new Set(this.dict)].length, x).toFixed(0)
        )), p(this, "approxMaxBeforeCollision", (x = this.availableUUIDs(this.uuidLength)) => parseFloat(
          Math.sqrt(Math.PI / 2 * x).toFixed(20)
        )), p(this, "collisionProbability", (x = this.availableUUIDs(this.uuidLength), T = this.uuidLength) => parseFloat(
          (this.approxMaxBeforeCollision(x) / this.availableUUIDs(T)).toFixed(20)
        )), p(this, "uniqueness", (x = this.availableUUIDs(this.uuidLength)) => {
          const T = parseFloat(
            (1 - this.approxMaxBeforeCollision(x) / x).toFixed(20)
          );
          return T > 1 ? 1 : T < 0 ? 0 : T;
        }), p(this, "getVersion", () => this.version), p(this, "stamp", (x, T) => {
          const N = Math.floor(+(T || /* @__PURE__ */ new Date()) / 1e3).toString(16);
          if (typeof x == "number" && x === 0)
            return N;
          if (typeof x != "number" || x < 10)
            throw new Error(
              [
                "Param finalLength must be a number greater than or equal to 10,",
                "or 0 if you want the raw hexadecimal timestamp"
              ].join(`
`)
            );
          const W = x - 9, ye = Math.round(Math.random() * (W > 15 ? 15 : W)), ce = this.randomUUID(W);
          return `${ce.substring(0, ye)}${N}${ce.substring(ye)}${ye.toString(16)}`;
        }), p(this, "parseStamp", (x, T) => {
          if (T && !/t0|t[1-9]\d{1,}/.test(T))
            throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
          const N = T ? T.replace(
            /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
            (ye) => {
              const ce = {
                $r: (H) => [...Array(H)].map(() => "r").join(""),
                $s: (H) => [...Array(H)].map(() => "s").join(""),
                $t: (H) => [...Array(H)].map(() => "t").join("")
              }, Q = ye.slice(0, 2), Fe = parseInt(ye.slice(2), 10);
              return ce[Q](Fe);
            }
          ).replace(
            /^(.*?)(t{8,})(.*)$/g,
            (ye, ce, Q) => x.substring(ce.length, ce.length + Q.length)
          ) : x;
          if (N.length === 8)
            return new Date(parseInt(N, 16) * 1e3);
          if (N.length < 10)
            throw new Error("Stamp length invalid");
          const W = parseInt(N.substring(N.length - 1), 16);
          return new Date(parseInt(N.substring(W, W + 8), 16) * 1e3);
        }), p(this, "setCounter", (x) => {
          this.counter = x;
        });
        const F = l(l({}, b), _);
        this.counter = 0, this.debug = !1, this.dict = [], this.version = y;
        const {
          dictionary: P,
          shuffle: I,
          length: C,
          counter: J
        } = F;
        return this.uuidLength = C, this.setDictionary(P, I), this.setCounter(J), this.debug = F.debug, this.log(this.dict), this.log(
          `Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`
        ), this.log = this.log.bind(this), this.setDictionary = this.setDictionary.bind(this), this.setCounter = this.setCounter.bind(this), this.seq = this.seq.bind(this), this.sequentialUUID = this.sequentialUUID.bind(this), this.rnd = this.rnd.bind(this), this.randomUUID = this.randomUUID.bind(this), this.fmt = this.fmt.bind(this), this.formattedUUID = this.formattedUUID.bind(this), this.availableUUIDs = this.availableUUIDs.bind(this), this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this), this.collisionProbability = this.collisionProbability.bind(this), this.uniqueness = this.uniqueness.bind(this), this.getVersion = this.getVersion.bind(this), this.stamp = this.stamp.bind(this), this.parseStamp = this.parseStamp.bind(this), this;
      }
    };
    p(E, "default", E);
    var S = E;
    return h(d);
  })();
  e.exports = t.default, typeof window < "u" && (t = t.default);
})(Lb);
var y3 = Lb.exports;
const v3 = /* @__PURE__ */ Ar(y3);
class g3 extends xi {
  constructor(t, r) {
    super(t, r), typeof r < "u" && (this.value = r.value);
  }
}
const b3 = g3, xp = v({
  props: {
    uuid: null,
    length: null,
    identityMap: null
  },
  init({
    length: e = 6
  } = {}) {
    this.length = 6, this.uuid = new v3({
      length: e
    }), this.identityMap = /* @__PURE__ */ new WeakMap();
  },
  methods: {
    identify(e) {
      if (!_e(e))
        throw new b3("Cannot not identify the element. `element` is neither structurally compatible nor a subclass of an Element class.", {
          value: e
        });
      if (e.meta.hasKey("id") && G(e.meta.id) && !e.meta.id.equals(""))
        return e.id;
      if (this.identityMap.has(e))
        return this.identityMap.get(e);
      const t = new Rt(this.generateId());
      return this.identityMap.set(e, t), t;
    },
    forget(e) {
      return this.identityMap.has(e) ? (this.identityMap.delete(e), !0) : !1;
    },
    generateId() {
      return this.uuid.randomUUID();
    }
  }
});
xp({
  length: 6
});
class $3 extends Array {
  constructor() {
    super(...arguments);
    B(this, "unknownMediaType", "application/octet-stream");
  }
  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new yt("filterByFormat method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new yt("findBy method in MediaTypes class is not yet implemented.");
  }
  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new yt("latest method in MediaTypes class is not yet implemented.");
  }
}
const S3 = $3, E3 = (e, {
  Type: t,
  plugins: r = []
}) => {
  const n = new t(e);
  return ji(n, r, {
    toolboxCreator: Rb,
    visitorOptions: {
      nodeTypeGetter: jn
    }
  });
}, it = (e) => (t, r = {}) => E3(t, {
  ...r,
  Type: e
});
j.refract = it(j);
ie.refract = it(ie);
Rt.refract = it(Rt);
Tt.refract = it(Tt);
ou.refract = it(ou);
su.refract = it(su);
cu.refract = it(cu);
au.refract = it(au);
co.refract = it(co);
lo.refract = it(lo);
at.refract = it(at);
uo.refract = it(uo);
const w3 = (e, t) => {
  const r = Nb({
    predicate: e
  });
  return Te(t, r), new ai(r.result);
}, O3 = w3, x3 = (e, t) => {
  const r = Nb({
    predicate: e,
    returnOnTrue: M
  });
  return Te(t, r), xv(void 0, [0], r.result);
}, kb = x3, Ub = (e) => typeof (e == null ? void 0 : e.type) == "string" ? e.type : jn(e), Bb = {
  EphemeralObject: ["content"],
  EphemeralArray: ["content"],
  ..._n
}, qb = (e, t, {
  keyMap: r = Bb,
  ...n
} = {}) => Te(e, t, {
  keyMap: r,
  // @ts-ignore
  nodeTypeGetter: Ub,
  nodePredicate: Vt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...n
});
qb[Symbol.for("nodejs.util.promisify.custom")] = async (e, {
  keyMap: t = Bb,
  ...r
} = {}) => Te[Symbol.for("nodejs.util.promisify.custom")](e, visitor, {
  keyMap: t,
  nodeTypeGetter: Ub,
  nodePredicate: Vt,
  detectCycles: !1,
  deleteNodeSymbol: Symbol.for("delete-node"),
  skipVisitingNodeSymbol: Symbol.for("skip-visiting-node"),
  ...r
});
class A3 {
  constructor(t) {
    B(this, "type", "EphemeralArray");
    B(this, "content", []);
    B(this, "reference");
    this.content = t, this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    return this.reference.push(...this.content), this.reference;
  }
}
const P3 = A3;
class j3 {
  constructor(t) {
    B(this, "type", "EphemeralObject");
    B(this, "content", []);
    B(this, "reference");
    this.content = t, this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
const _3 = j3, R3 = v.init(function() {
  const t = /* @__PURE__ */ new WeakMap();
  this.BooleanElement = function(n) {
    return n.toValue();
  }, this.NumberElement = function(n) {
    return n.toValue();
  }, this.StringElement = function(n) {
    return n.toValue();
  }, this.NullElement = function() {
    return null;
  }, this.ObjectElement = {
    enter(r) {
      if (t.has(r))
        return t.get(r).toReference();
      const n = new _3(r.content);
      return t.set(r, n), n;
    }
  }, this.EphemeralObject = {
    leave(r) {
      return r.toObject();
    }
  }, this.MemberElement = {
    enter(r) {
      return [r.key, r.value];
    }
  }, this.ArrayElement = {
    enter(r) {
      if (t.has(r))
        return t.get(r).toReference();
      const n = new P3(r.content);
      return t.set(r, n), n;
    }
  }, this.EphemeralArray = {
    leave(r) {
      return r.toArray();
    }
  };
}), T3 = (e) => _e(e) ? G(e) || bp(e) || Pi(e) || $p(e) ? e.toValue() : qb(e, R3()) : e, O = T3, Ps = (e, t = /* @__PURE__ */ new WeakMap()) => (Ke(e) ? (t.set(e.key, e), Ps(e.key, t), t.set(e.value, e), Ps(e.value, t)) : e.children.forEach((r) => {
  t.set(r, e), Ps(r, t);
}), t), I3 = (e, t, r) => {
  const n = r.get(e);
  Ke(n) && (n.key === e && (n.key = t, r.delete(e), r.set(t, n)), n.value === e && (n.value = t, r.delete(e), r.set(t, n)));
}, C3 = (e, t, r) => {
  const n = r.get(e);
  X(n) && (n.content = n.map((i, s, o) => o === e ? (r.delete(e), r.set(t, n), t) : o));
}, V3 = (e, t, r) => {
  const n = r.get(e);
  et(n) && (n.content = n.map((i) => i === e ? (r.delete(e), r.set(t, n), t) : i));
}, M3 = v.init(function({
  element: t
}) {
  let r;
  this.transclude = function(i, s) {
    var o;
    if (i === t)
      return s;
    if (i === s)
      return t;
    r = (o = r) !== null && o !== void 0 ? o : Ps(t);
    const a = r.get(i);
    if (!Ft(a))
      return X(a) ? C3(i, s, r) : et(a) ? V3(i, s, r) : Ke(a) && I3(i, s, r), t;
  };
}), F3 = M3, D3 = (e, t, r) => F3({
  element: r
}).transclude(e, t), xa = (e, t) => {
  const r = wr(e, t);
  return pP((n) => {
    if (Ws(n) && mr("$ref", n) && PP(Rr, "$ref", n)) {
      const i = ze(["$ref"], n), s = Lf("#/", i);
      return ze(s.split("/"), r);
    }
    return Ws(n) ? xa(n, r) : n;
  }, e);
}, N3 = (e, t = _b) => {
  if (Rr(e))
    try {
      return t.fromRefract(JSON.parse(e));
    } catch {
    }
  return Ws(e) && mr("element", e) ? t.fromRefract(e) : t.toElement(e);
}, Hb = N3, fo = (e) => {
  const t = A(e.meta), r = A(e.attributes);
  return new e.constructor(void 0, t, r);
}, po = (e, t) => t.clone && t.isMergeableElement(e) ? hn(fo(e), e, t) : e, L3 = (e, t) => {
  if (typeof t.customMerge != "function")
    return hn;
  const r = t.customMerge(e, t);
  return typeof r == "function" ? r : hn;
}, k3 = (e, t, r) => e.concat(t)["fantasy-land/map"]((n) => po(n, r)), U3 = (e, t, r) => {
  const n = X(e) ? fo(e) : fo(t);
  return X(e) && e.forEach((i, s, o) => {
    const a = De(o);
    a.value = po(i, r), n.content.push(a);
  }), t.forEach((i, s, o) => {
    const a = O(s);
    let c;
    if (X(e) && e.hasKey(a) && r.isMergeableElement(i)) {
      const l = e.get(a);
      c = De(o), c.value = L3(s, r)(l, i);
    } else
      c = De(o), c.value = po(i, r);
    n.remove(a), n.content.push(c);
  }), n;
};
function hn(e, t, r) {
  var n, i, s;
  const o = {
    clone: !0,
    isMergeableElement: (u) => X(u) || et(u),
    arrayElementMerge: k3,
    objectElementMerge: U3,
    customMerge: void 0
  }, a = {
    ...o,
    ...r
  };
  a.isMergeableElement = (n = a.isMergeableElement) !== null && n !== void 0 ? n : o.isMergeableElement, a.arrayElementMerge = (i = a.arrayElementMerge) !== null && i !== void 0 ? i : o.arrayElementMerge, a.objectElementMerge = (s = a.objectElementMerge) !== null && s !== void 0 ? s : o.objectElementMerge;
  const c = et(t), l = et(e);
  return c === l ? c && typeof a.arrayElementMerge == "function" ? a.arrayElementMerge(e, t, a) : a.objectElementMerge(e, t, a) : po(t, a);
}
hn.all = (e, t) => {
  if (!Array.isArray(e))
    throw new TypeError("First argument of deepmerge should be an array.");
  return e.length === 0 ? new j() : e.reduce((r, n) => hn(r, n, t), fo(e[0]));
};
class B3 extends me {
}
const Ap = B3;
class q3 extends Ap {
}
const H3 = q3, G3 = async (e, t) => {
  let r = e, n = !1;
  if (!Ab(e)) {
    const o = De(e);
    o.classes.push("result"), r = new at([o]), n = !0;
  }
  const i = Or({
    uri: t.resolve.baseURI,
    parseResult: r,
    mediaType: t.parse.mediaType
  }), s = await pp("canDereference", i, t.dereference.strategies);
  if (bi(s))
    throw new H3(i.uri);
  try {
    const {
      result: o
    } = await hp("dereference", [i, t], s);
    return n ? o.get(0) : o;
  } catch (o) {
    throw new Ap(`Error while dereferencing file "${i.uri}"`, {
      cause: o
    });
  }
}, J3 = v({
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
    allowEmpty: e = this.allowEmpty,
    sourceMap: t = this.sourceMap,
    fileExtensions: r = this.fileExtensions,
    mediaTypes: n = this.mediaTypes
  } = {}) {
    this.allowEmpty = e, this.sourceMap = t, this.fileExtensions = r, this.mediaTypes = n;
  },
  methods: {
    async canParse() {
      throw new yt("canParse method in Parser stamp is not yet implemented.");
    },
    async parse() {
      throw new yt("parse method in Parser stamp is not yet implemented.");
    }
  }
}), _i = J3, z3 = v({
  props: {
    name: null
  },
  methods: {
    canRead() {
      return !1;
    },
    async read() {
      throw new yt("read method in Resolver stamp is not yet implemented.");
    }
  }
}), K3 = z3, W3 = v(K3, {
  props: {
    timeout: 5e3,
    redirects: 5,
    withCredentials: !1
  },
  init({
    timeout: e = this.timeout,
    redirects: t = this.redirects,
    withCredentials: r = this.withCredentials
  } = {}) {
    this.timeout = e, this.redirects = t, this.withCredentials = r;
  },
  methods: {
    canRead(e) {
      return Er(e.uri);
    },
    async read() {
      throw new yt("read method in HttpResolver stamp is not yet implemented.");
    },
    getHttpClient() {
      throw new yt("getHttpClient method in HttpResolver stamp is not yet implemented.");
    }
  }
}), Y3 = W3, X3 = v({
  props: {
    name: null
  },
  methods: {
    canResolve() {
      return !1;
    },
    async resolve() {
      throw new yt("resolve method in ResolveStrategy stamp is not yet implemented.");
    }
  }
}), Q3 = X3, Z3 = v({
  props: {
    name: null
  },
  methods: {
    canDereference() {
      return !1;
    },
    async dereference() {
      throw new yt("dereference method in DereferenceStrategy stamp is not yet implemented.");
    }
  }
}), eq = Z3;
class nl extends Array {
  includesCycle(t) {
    return this.filter((r) => r.has(t)).length > 1;
  }
  includes(t, r) {
    return t instanceof Set ? super.includes(t, r) : this.some((n) => n.has(t));
  }
  findItem(t) {
    for (const r of this)
      for (const n of r)
        if (_e(n) && t(n))
          return n;
  }
}
const tq = v({
  props: {
    uri: "",
    value: null,
    depth: 0,
    refSet: null,
    errors: []
  },
  init({
    depth: e = this.depth,
    refSet: t = this.refSet,
    uri: r = this.uri,
    value: n = this.value
  } = {}) {
    this.uri = r, this.value = n, this.depth = e, this.refSet = t, this.errors = [];
  }
}), Rn = tq, rq = v({
  props: {
    rootRef: null,
    refs: [],
    circular: !1
  },
  init({
    refs: e = []
  } = {}) {
    this.refs = [], e.forEach((t) => this.add(t));
  },
  methods: {
    get size() {
      return this.refs.length;
    },
    add(e) {
      return this.has(e) || (this.refs.push(e), this.rootRef = this.rootRef === null ? e : this.rootRef, e.refSet = this), this;
    },
    merge(e) {
      for (const t of e.values())
        this.add(t);
      return this;
    },
    has(e) {
      const t = Rr(e) ? e : e.uri;
      return jv(this.find(aa(t, "uri")));
    },
    find(e) {
      return this.refs.find(e);
    },
    *values() {
      yield* this.refs;
    },
    clean() {
      this.refs.forEach((e) => {
        e.refSet = null;
      }), this.refs = [];
    }
  }
}), Aa = rq;
class nq extends me {
}
const Gb = nq;
class iq extends Gb {
}
const sq = iq;
class oq extends me {
}
const aq = oq;
class cq extends aq {
}
const ci = cq;
class lq extends Gb {
  constructor(t) {
    super(`Invalid JSON Schema $anchor "${t}".`);
  }
}
const uq = lq;
class fq extends Ap {
}
const jt = fq;
class pq extends dp {
}
const Jb = pq;
class hq extends Ql {
}
const It = hq, dq = async (e, t = {}) => {
  const r = O_(S_, t);
  return G3(e, r);
};
function Pp(e, t) {
  function r(...n) {
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, [this.message] = n, t && t.apply(this, n);
  }
  return r.prototype = new Error(), r.prototype.name = e, r.prototype.constructor = r, r;
}
function Tn(e) {
  return Object.prototype.toString.call(e);
}
function mq(e) {
  return Tn(e) === "[object Date]";
}
function yq(e) {
  return Tn(e) === "[object RegExp]";
}
function vq(e) {
  return Tn(e) === "[object Error]";
}
function gq(e) {
  return Tn(e) === "[object Boolean]";
}
function bq(e) {
  return Tn(e) === "[object Number]";
}
function $q(e) {
  return Tn(e) === "[object String]";
}
var zb = Array.isArray || function(t) {
  return Object.prototype.toString.call(t) === "[object Array]";
};
function Pa(e, t) {
  if (e.forEach)
    return e.forEach(t);
  for (var r = 0; r < e.length; r++)
    t(e[r], r, e);
}
var Sq = Object.keys || function(t) {
  var r = [];
  for (var n in t)
    r.push(n);
  return r;
}, Eq = Object.prototype.propertyIsEnumerable, Pm = Object.getOwnPropertySymbols;
function ja(e) {
  var t = Sq(e);
  if (Pm)
    for (var r = Pm(e), n = 0; n < r.length; n++)
      Eq.call(e, r[n]) && t.push(r[n]);
  return t;
}
var _a = Object.prototype.hasOwnProperty || function(e, t) {
  return t in e;
};
function Kb(e) {
  if (typeof e == "object" && e !== null) {
    var t;
    if (zb(e))
      t = [];
    else if (mq(e))
      t = new Date(e.getTime ? e.getTime() : e);
    else if (yq(e))
      t = new RegExp(e);
    else if (vq(e))
      t = { message: e.message };
    else if (gq(e) || bq(e) || $q(e))
      t = Object(e);
    else if (Object.create && Object.getPrototypeOf)
      t = Object.create(Object.getPrototypeOf(e));
    else if (e.constructor === Object)
      t = {};
    else {
      var r = e.constructor && e.constructor.prototype || e.__proto__ || {}, n = function() {
      };
      n.prototype = r, t = new n();
    }
    return Pa(ja(e), function(i) {
      t[i] = e[i];
    }), t;
  }
  return e;
}
function Wb(e, t, r) {
  var n = [], i = [], s = !0;
  return function o(a) {
    var c = r ? Kb(a) : a, l = {}, f = !0, u = {
      node: c,
      node_: a,
      path: [].concat(n),
      parent: i[i.length - 1],
      parents: i,
      key: n[n.length - 1],
      isRoot: n.length === 0,
      level: n.length,
      circular: null,
      update: function(d, y) {
        u.isRoot || (u.parent.node[u.key] = d), u.node = d, y && (f = !1);
      },
      delete: function(d) {
        delete u.parent.node[u.key], d && (f = !1);
      },
      remove: function(d) {
        zb(u.parent.node) ? u.parent.node.splice(u.key, 1) : delete u.parent.node[u.key], d && (f = !1);
      },
      keys: null,
      before: function(d) {
        l.before = d;
      },
      after: function(d) {
        l.after = d;
      },
      pre: function(d) {
        l.pre = d;
      },
      post: function(d) {
        l.post = d;
      },
      stop: function() {
        s = !1;
      },
      block: function() {
        f = !1;
      }
    };
    if (!s)
      return u;
    function h() {
      if (typeof u.node == "object" && u.node !== null) {
        (!u.keys || u.node_ !== u.node) && (u.keys = ja(u.node)), u.isLeaf = u.keys.length === 0;
        for (var d = 0; d < i.length; d++)
          if (i[d].node_ === a) {
            u.circular = i[d];
            break;
          }
      } else
        u.isLeaf = !0, u.keys = null;
      u.notLeaf = !u.isLeaf, u.notRoot = !u.isRoot;
    }
    h();
    var p = t.call(u, u.node);
    return p !== void 0 && u.update && u.update(p), l.before && l.before.call(u, u.node), f && (typeof u.node == "object" && u.node !== null && !u.circular && (i.push(u), h(), Pa(u.keys, function(d, y) {
      n.push(d), l.pre && l.pre.call(u, u.node[d], d);
      var g = o(u.node[d]);
      r && _a.call(u.node, d) && (u.node[d] = g.node), g.isLast = y === u.keys.length - 1, g.isFirst = y === 0, l.post && l.post.call(u, g), n.pop();
    }), i.pop()), l.after && l.after.call(u, u.node)), u;
  }(e).node;
}
function rt(e) {
  this.value = e;
}
rt.prototype.get = function(e) {
  for (var t = this.value, r = 0; r < e.length; r++) {
    var n = e[r];
    if (!t || !_a.call(t, n))
      return;
    t = t[n];
  }
  return t;
};
rt.prototype.has = function(e) {
  for (var t = this.value, r = 0; r < e.length; r++) {
    var n = e[r];
    if (!t || !_a.call(t, n))
      return !1;
    t = t[n];
  }
  return !0;
};
rt.prototype.set = function(e, t) {
  for (var r = this.value, n = 0; n < e.length - 1; n++) {
    var i = e[n];
    _a.call(r, i) || (r[i] = {}), r = r[i];
  }
  return r[e[n]] = t, t;
};
rt.prototype.map = function(e) {
  return Wb(this.value, e, !0);
};
rt.prototype.forEach = function(e) {
  return this.value = Wb(this.value, e, !1), this.value;
};
rt.prototype.reduce = function(e, t) {
  var r = arguments.length === 1, n = r ? this.value : t;
  return this.forEach(function(i) {
    (!this.isRoot || !r) && (n = e.call(this, n, i));
  }), n;
};
rt.prototype.paths = function() {
  var e = [];
  return this.forEach(function() {
    e.push(this.path);
  }), e;
};
rt.prototype.nodes = function() {
  var e = [];
  return this.forEach(function() {
    e.push(this.node);
  }), e;
};
rt.prototype.clone = function() {
  var e = [], t = [];
  return function r(n) {
    for (var i = 0; i < e.length; i++)
      if (e[i] === n)
        return t[i];
    if (typeof n == "object" && n !== null) {
      var s = Kb(n);
      return e.push(n), t.push(s), Pa(ja(n), function(o) {
        s[o] = r(n[o]);
      }), e.pop(), t.pop(), s;
    }
    return n;
  }(this.value);
};
function Yb(e) {
  return new rt(e);
}
Pa(ja(rt.prototype), function(e) {
  Yb[e] = function(t) {
    var r = [].slice.call(arguments, 1), n = new rt(t);
    return n[e].apply(n, r);
  };
});
var wq = Yb;
const Oq = /* @__PURE__ */ Ar(wq), xq = ["properties"], Aq = ["properties"], Pq = [
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
], jq = ["schema/example", "items/example"];
function Xb(e) {
  const t = e[e.length - 1], r = e[e.length - 2], n = e.join("/");
  return (
    // eslint-disable-next-line max-len
    xq.indexOf(t) > -1 && Aq.indexOf(r) === -1 || Pq.indexOf(n) > -1 || jq.some((i) => n.indexOf(i) > -1)
  );
}
function _q(e, t, {
  specmap: r,
  getBaseUrlForNodePath: n = (s) => r.getContext([...t, ...s]).baseDoc,
  targetKeys: i = ["$ref", "$$ref"]
} = {}) {
  const s = [];
  return Oq(e).forEach(function() {
    if (i.includes(this.key) && typeof this.node == "string") {
      const a = this.path, c = t.concat(this.path), l = lu(this.node, n(a));
      s.push(r.replace(c, l));
    }
  }), s;
}
function lu(e, t) {
  const [r, n] = e.split("#"), i = t ?? "", s = r ?? "";
  let o;
  if (Er(i))
    o = Se(i, s);
  else {
    const a = Se(Is, i), l = Se(a, s).replace(Is, "");
    o = s.startsWith("/") ? l : l.substring(1);
  }
  return n ? `${o}#${n}` : o;
}
const Rq = /^([a-z]+:\/\/|\/\/)/i, dn = Pp("JSONRefError", function(t, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), xt = {}, jm = /* @__PURE__ */ new WeakMap(), Tq = [
  // OpenAPI 2.0 response examples
  (e) => (
    // ["paths", *, *, "responses", *, "examples"]
    e[0] === "paths" && e[3] === "responses" && e[5] === "examples"
  ),
  // OpenAPI 3.0 Response Media Type Examples
  (e) => (
    // ["paths", *, *, "responses", *, "content", *, "example"]
    e[0] === "paths" && e[3] === "responses" && e[5] === "content" && e[7] === "example"
  ),
  (e) => (
    // ["paths", *, *, "responses", *, "content", *, "examples", *, "value"]
    e[0] === "paths" && e[3] === "responses" && e[5] === "content" && e[7] === "examples" && e[9] === "value"
  ),
  // OpenAPI 3.0 Request Body Media Type Examples
  (e) => (
    // ["paths", *, *, "requestBody", "content", *, "example"]
    e[0] === "paths" && e[3] === "requestBody" && e[4] === "content" && e[6] === "example"
  ),
  (e) => (
    // ["paths", *, *, "requestBody", "content", *, "examples", *, "value"]
    e[0] === "paths" && e[3] === "requestBody" && e[4] === "content" && e[6] === "examples" && e[8] === "value"
  ),
  // OAS 3.0 Parameter Examples
  (e) => (
    // ["paths", *, "parameters", *, "example"]
    e[0] === "paths" && e[2] === "parameters" && e[4] === "example"
  ),
  (e) => (
    // ["paths", *, *, "parameters", *, "example"]
    e[0] === "paths" && e[3] === "parameters" && e[5] === "example"
  ),
  (e) => (
    // ["paths", *, "parameters", *, "examples", *, "value"]
    e[0] === "paths" && e[2] === "parameters" && e[4] === "examples" && e[6] === "value"
  ),
  (e) => (
    // ["paths", *, *, "parameters", *, "examples", *, "value"]
    e[0] === "paths" && e[3] === "parameters" && e[5] === "examples" && e[7] === "value"
  ),
  (e) => (
    // ["paths", *, "parameters", *, "content", *, "example"]
    e[0] === "paths" && e[2] === "parameters" && e[4] === "content" && e[6] === "example"
  ),
  (e) => (
    // ["paths", *, "parameters", *, "content", *, "examples", *, "value"]
    e[0] === "paths" && e[2] === "parameters" && e[4] === "content" && e[6] === "examples" && e[8] === "value"
  ),
  (e) => (
    // ["paths", *, *, "parameters", *, "content", *, "example"]
    e[0] === "paths" && e[3] === "parameters" && e[4] === "content" && e[7] === "example"
  ),
  (e) => (
    // ["paths", *, *, "parameters", *, "content", *, "examples", *, "value"]
    e[0] === "paths" && e[3] === "parameters" && e[5] === "content" && e[7] === "examples" && e[9] === "value"
  )
], Iq = (e) => Tq.some((t) => t(e)), Cq = {
  key: "$ref",
  plugin: (e, t, r, n) => {
    const i = n.getInstance(), s = r.slice(0, -1);
    if (Xb(s) || Iq(s))
      return;
    const {
      baseDoc: o
    } = n.getContext(r);
    if (typeof e != "string")
      return new dn("$ref: must be a string (JSON-Ref)", {
        $ref: e,
        baseDoc: o,
        fullPath: r
      });
    const a = Zb(e), c = a[0], l = a[1] || "";
    let f;
    try {
      f = o || c ? Qb(c, o) : null;
    } catch (y) {
      return uu(y, {
        pointer: l,
        $ref: e,
        basePath: f,
        fullPath: r
      });
    }
    let u, h;
    if (Nq(l, f, s, n) && !i.useCircularStructures) {
      const y = lu(e, f);
      return e === y ? null : te.replace(r, y);
    }
    if (f == null ? (h = _p(l), u = n.get(h), typeof u > "u" && (u = new dn(`Could not resolve reference: ${e}`, {
      pointer: l,
      $ref: e,
      baseDoc: o,
      fullPath: r
    }))) : (u = e$(f, l), u.__value != null ? u = u.__value : u = u.catch((y) => {
      throw uu(y, {
        pointer: l,
        $ref: e,
        baseDoc: o,
        fullPath: r
      });
    })), u instanceof Error)
      return [te.remove(r), u];
    const p = lu(e, f), d = te.replace(s, u, {
      $$ref: p
    });
    if (f && f !== o)
      return [d, te.context(s, {
        baseDoc: f
      })];
    try {
      if (!Lq(n.state, d) || i.useCircularStructures)
        return d;
    } catch {
      return null;
    }
  }
}, jp = Object.assign(Cq, {
  docCache: xt,
  absoluteify: Qb,
  clearCache: Vq,
  JSONRefError: dn,
  wrapError: uu,
  getDoc: t$,
  split: Zb,
  extractFromDoc: e$,
  fetchJSON: Mq,
  extract: fu,
  jsonPointerToArray: _p,
  unescapeJsonPointerToken: r$
});
function Qb(e, t) {
  if (!Rq.test(e)) {
    if (!t)
      throw new dn(`Tried to resolve a relative URL, without having a basePath. path: '${e}' basePath: '${t}'`);
    return Se(t, e);
  }
  return e;
}
function uu(e, t) {
  let r;
  return e && e.response && e.response.body ? r = `${e.response.body.code} ${e.response.body.message}` : r = e.message, new dn(`Could not resolve reference: ${r}`, t, e);
}
function Zb(e) {
  return (e + "").split("#");
}
function e$(e, t) {
  const r = xt[e];
  if (r && !te.isPromise(r))
    try {
      const n = fu(t, r);
      return Object.assign(Promise.resolve(n), {
        __value: n
      });
    } catch (n) {
      return Promise.reject(n);
    }
  return t$(e).then((n) => fu(t, n));
}
function Vq(e) {
  typeof e < "u" ? delete xt[e] : Object.keys(xt).forEach((t) => {
    delete xt[t];
  });
}
function t$(e) {
  const t = xt[e];
  return t ? te.isPromise(t) ? t : Promise.resolve(t) : (xt[e] = jp.fetchJSON(e).then((r) => (xt[e] = r, r)), xt[e]);
}
function Mq(e) {
  return fetch(e, {
    headers: {
      Accept: qm
    },
    loadSpec: !0
  }).then((t) => t.text()).then((t) => sn.load(t));
}
function fu(e, t) {
  const r = _p(e);
  if (r.length < 1)
    return t;
  const n = te.getIn(t, r);
  if (typeof n > "u")
    throw new dn(`Could not resolve pointer: ${e} does not exist in document`, {
      pointer: e
    });
  return n;
}
function _p(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected a string, got a ${typeof e}`);
  return e[0] === "/" && (e = e.substr(1)), e === "" ? [] : e.split("/").map(r$);
}
function r$(e) {
  return typeof e != "string" ? e : new URLSearchParams(`=${e.replace(/~1/g, "/").replace(/~0/g, "~")}`).get("");
}
function n$(e) {
  return new URLSearchParams([["", e.replace(/~/g, "~0").replace(/\//g, "~1")]]).toString().slice(1);
}
function Fq(e) {
  return e.length === 0 ? "" : `/${e.map(n$).join("/")}`;
}
const Dq = (e) => !e || e === "/" || e === "#";
function il(e, t) {
  if (Dq(t))
    return !0;
  const r = e.charAt(t.length), n = t.slice(-1);
  return e.indexOf(t) === 0 && (!r || r === "/" || r === "#") && n !== "#";
}
function Nq(e, t, r, n) {
  let i = jm.get(n);
  i || (i = {}, jm.set(n, i));
  const s = Fq(r), o = `${t || "<specmap-base>"}#${e}`, a = s.replace(/allOf\/\d+\/?/g, ""), c = n.contextTree.get([]).baseDoc;
  if (t === c && il(a, e))
    return !0;
  let l = "";
  if (r.some((u) => (l = `${l}/${n$(u)}`, i[l] && i[l].some((h) => il(h, o) || il(o, h)))))
    return !0;
  i[a] = (i[a] || []).concat(o);
}
function Lq(e, t) {
  const r = [e];
  return t.path.reduce((i, s) => (r.push(i[s]), i[s]), e), n(t.value);
  function n(i) {
    return te.isObject(i) && (r.indexOf(i) >= 0 || Object.keys(i).some((s) => n(i[s])));
  }
}
const kq = {
  key: "allOf",
  plugin: (e, t, r, n, i) => {
    if (i.meta && i.meta.$$ref)
      return;
    const s = r.slice(0, -1);
    if (Xb(s))
      return;
    if (!Array.isArray(e)) {
      const l = new TypeError("allOf must be an array");
      return l.fullPath = r, l;
    }
    let o = !1, a = i.value;
    if (s.forEach((l) => {
      a && (a = a[l]);
    }), a = {
      ...a
    }, Object.keys(a).length === 0)
      return;
    delete a.allOf;
    const c = [];
    return c.push(n.replace(s, {})), e.forEach((l, f) => {
      if (!n.isObject(l)) {
        if (o)
          return null;
        o = !0;
        const p = new TypeError("Elements in allOf must be objects");
        return p.fullPath = r, c.push(p);
      }
      c.push(n.mergeDeep(s, l));
      const u = r.slice(0, -1), h = _q(l, u, {
        getBaseUrlForNodePath: (p) => n.getContext([...r, f, ...p]).baseDoc,
        specmap: n
      });
      c.push(...h);
    }), a.example && c.push(n.remove([].concat(s, "example"))), c.push(n.mergeDeep(s, a)), a.$$ref || c.push(n.remove([].concat(s, "$$ref"))), c;
  }
}, Uq = {
  key: "parameters",
  plugin: (e, t, r, n) => {
    if (Array.isArray(e) && e.length) {
      const i = Object.assign([], e), s = r.slice(0, -1), o = {
        ...te.getIn(n.spec, s)
      };
      for (let a = 0; a < e.length; a += 1) {
        const c = e[a];
        try {
          i[a].default = n.parameterMacro(o, c);
        } catch (l) {
          const f = new Error(l);
          return f.fullPath = r, f;
        }
      }
      return te.replace(r, i);
    }
    return te.replace(r, e);
  }
}, Bq = {
  key: "properties",
  plugin: (e, t, r, n) => {
    const i = {
      ...e
    };
    for (const o in e)
      try {
        i[o].default = n.modelPropertyMacro(i[o]);
      } catch (a) {
        const c = new Error(a);
        return c.fullPath = r, c;
      }
    return te.replace(r, i);
  }
};
class qq {
  constructor(t) {
    this.root = sl(t || {});
  }
  set(t, r) {
    const n = this.getParent(t, !0);
    if (!n) {
      ho(this.root, r, null);
      return;
    }
    const i = t[t.length - 1], {
      children: s
    } = n;
    if (s[i]) {
      ho(s[i], r, n);
      return;
    }
    s[i] = sl(r, n);
  }
  // Get the "best" node (node or nearest parent) and return its value.
  get(t) {
    if (t = t || [], t.length < 1)
      return this.root.value;
    let r = this.root, n, i;
    for (let s = 0; s < t.length && (i = t[s], n = r.children, !!n[i]); s += 1)
      r = n[i];
    return r && r.protoValue;
  }
  getParent(t, r) {
    return !t || t.length < 1 ? null : t.length < 2 ? this.root : t.slice(0, -1).reduce((n, i) => {
      if (!n)
        return n;
      const {
        children: s
      } = n;
      return !s[i] && r && (s[i] = sl(null, n)), s[i];
    }, this.root);
  }
}
function sl(e, t) {
  return ho({
    children: {}
  }, e, t);
}
function ho(e, t, r) {
  return e.value = t || {}, e.protoValue = r ? {
    ...r.protoValue,
    ...e.value
  } : e.value, Object.keys(e.children).forEach((n) => {
    const i = e.children[n];
    e.children[n] = ho(i, i.value, e);
  }), e;
}
const _m = 100, Rm = () => {
};
class Hq {
  static getPluginName(t) {
    return t.pluginName;
  }
  static getPatchesOfType(t, r) {
    return t.filter(r);
  }
  constructor(t) {
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
      contextTree: new qq(),
      showDebug: !1,
      allPatches: [],
      // only populated if showDebug is true
      pluginProp: "specMap",
      libMethods: Object.assign(Object.create(this), te, {
        getInstance: () => this
      }),
      allowMetaPatches: !1
    }, t), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = this.plugins.map(this.wrapPlugin.bind(this)).filter(te.isFunction), this.patches.push(te.add([], this.spec)), this.patches.push(te.context([], this.context)), this.updatePatches(this.patches);
  }
  debug(t, ...r) {
    this.debugLevel === t && console.log(...r);
  }
  verbose(t, ...r) {
    this.debugLevel === "verbose" && console.log(`[${t}]   `, ...r);
  }
  wrapPlugin(t, r) {
    const {
      pathDiscriminator: n
    } = this;
    let i = null, s;
    return t[this.pluginProp] ? (i = t, s = t[this.pluginProp]) : te.isFunction(t) ? s = t : te.isObject(t) && (s = o(t)), Object.assign(s.bind(i), {
      pluginName: t.name || r,
      isGenerator: te.isGenerator(s)
    });
    function o(a) {
      const c = (l, f) => Array.isArray(l) ? l.every((u, h) => u === f[h]) : !0;
      return function* (f, u) {
        const h = {};
        for (const d of f.filter(te.isAdditiveMutation))
          yield* p(d.value, d.path, d);
        function* p(d, y, g) {
          if (!te.isObject(d))
            a.key === y[y.length - 1] && (yield a.plugin(d, a.key, y, u));
          else {
            const b = y.length - 1, E = y[b], S = y.indexOf("properties"), w = E === "properties" && b === S, _ = u.allowMetaPatches && h[d.$$ref];
            for (const F of Object.keys(d)) {
              const P = d[F], I = y.concat(F), C = te.isObject(P), J = d.$$ref;
              if (_ || C && (u.allowMetaPatches && J && (h[J] = !0), yield* p(P, I, g)), !w && F === a.key) {
                const x = c(n, y);
                (!n || x) && (yield a.plugin(P, F, I, u, g));
              }
            }
          }
        }
      };
    }
  }
  nextPlugin() {
    return this.wrappedPlugins.find((t) => this.getMutationsForPlugin(t).length > 0);
  }
  nextPromisedPatch() {
    if (this.promisedPatches.length > 0)
      return Promise.race(this.promisedPatches.map((t) => t.value));
  }
  getPluginHistory(t) {
    const r = this.constructor.getPluginName(t);
    return this.pluginHistory[r] || [];
  }
  getPluginRunCount(t) {
    return this.getPluginHistory(t).length;
  }
  getPluginHistoryTip(t) {
    const r = this.getPluginHistory(t);
    return r && r[r.length - 1] || {};
  }
  getPluginMutationIndex(t) {
    const r = this.getPluginHistoryTip(t).mutationIndex;
    return typeof r != "number" ? -1 : r;
  }
  updatePluginHistory(t, r) {
    const n = this.constructor.getPluginName(t);
    this.pluginHistory[n] = this.pluginHistory[n] || [], this.pluginHistory[n].push(r);
  }
  updatePatches(t) {
    te.normalizeArray(t).forEach((r) => {
      if (r instanceof Error) {
        this.errors.push(r);
        return;
      }
      try {
        if (!te.isObject(r)) {
          this.debug("updatePatches", "Got a non-object patch", r);
          return;
        }
        if (this.showDebug && this.allPatches.push(r), te.isPromise(r.value)) {
          this.promisedPatches.push(r), this.promisedPatchThen(r);
          return;
        }
        if (te.isContextPatch(r)) {
          this.setContext(r.path, r.value);
          return;
        }
        te.isMutation(r) && this.updateMutations(r);
      } catch (n) {
        console.error(n), this.errors.push(n);
      }
    });
  }
  updateMutations(t) {
    typeof t.value == "object" && !Array.isArray(t.value) && this.allowMetaPatches && (t.value = {
      ...t.value
    });
    const r = te.applyPatch(this.state, t, {
      allowMetaPatches: this.allowMetaPatches
    });
    r && (this.mutations.push(t), this.state = r);
  }
  removePromisedPatch(t) {
    const r = this.promisedPatches.indexOf(t);
    if (r < 0) {
      this.debug("Tried to remove a promisedPatch that isn't there!");
      return;
    }
    this.promisedPatches.splice(r, 1);
  }
  promisedPatchThen(t) {
    return t.value = t.value.then((r) => {
      const n = {
        ...t,
        value: r
      };
      this.removePromisedPatch(t), this.updatePatches(n);
    }).catch((r) => {
      this.removePromisedPatch(t), this.updatePatches(r);
    }), t.value;
  }
  getMutations(t, r) {
    return t = t || 0, typeof r != "number" && (r = this.mutations.length), this.mutations.slice(t, r);
  }
  getCurrentMutations() {
    return this.getMutationsForPlugin(this.getCurrentPlugin());
  }
  getMutationsForPlugin(t) {
    const r = this.getPluginMutationIndex(t);
    return this.getMutations(r + 1);
  }
  getCurrentPlugin() {
    return this.currentPlugin;
  }
  getLib() {
    return this.libMethods;
  }
  // eslint-disable-next-line no-underscore-dangle
  _get(t) {
    return te.getIn(this.state, t);
  }
  // eslint-disable-next-line no-underscore-dangle
  _getContext(t) {
    return this.contextTree.get(t);
  }
  setContext(t, r) {
    return this.contextTree.set(t, r);
  }
  // eslint-disable-next-line no-underscore-dangle
  _hasRun(t) {
    return this.getPluginRunCount(this.getCurrentPlugin()) > (t || 0);
  }
  dispatch() {
    const t = this, r = this.nextPlugin();
    if (!r) {
      const s = this.nextPromisedPatch();
      if (s)
        return s.then(() => this.dispatch()).catch(() => this.dispatch());
      const o = {
        spec: this.state,
        errors: this.errors
      };
      return this.showDebug && (o.patches = this.allPatches), Promise.resolve(o);
    }
    if (t.pluginCount = t.pluginCount || {}, t.pluginCount[r] = (t.pluginCount[r] || 0) + 1, t.pluginCount[r] > _m)
      return Promise.resolve({
        spec: t.state,
        errors: t.errors.concat(new Error(`We've reached a hard limit of ${_m} plugin runs`))
      });
    if (r !== this.currentPlugin && this.promisedPatches.length) {
      const s = this.promisedPatches.map((o) => o.value);
      return Promise.all(s.map((o) => o.then(Rm, Rm))).then(() => this.dispatch());
    }
    return n();
    function n() {
      t.currentPlugin = r;
      const s = t.getCurrentMutations(), o = t.mutations.length - 1;
      try {
        if (r.isGenerator)
          for (const a of r(s, t.getLib()))
            i(a);
        else {
          const a = r(s, t.getLib());
          i(a);
        }
      } catch (a) {
        console.error(a), i([Object.assign(Object.create(a), {
          plugin: r
        })]);
      } finally {
        t.updatePluginHistory(r, {
          mutationIndex: o
        });
      }
      return t.dispatch();
    }
    function i(s) {
      s && (s = te.fullyNormalizeArray(s), t.updatePatches(s, r));
    }
  }
}
function Gq(e) {
  return new Hq(e).dispatch();
}
const hr = {
  refs: jp,
  allOf: kq,
  parameters: Uq,
  properties: Bq
}, i$ = (e) => e.replace(/\W/gi, "_");
function Jq(e, t, {
  v2OperationIdCompatibilityMode: r
} = {}) {
  if (r) {
    let n = `${t.toLowerCase()}_${e}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return n = n || `${e.substring(1)}_${t}`, n.replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return `${t.toLowerCase()}${i$(e)}`;
}
function Ri(e, t, r = "", {
  v2OperationIdCompatibilityMode: n
} = {}) {
  return !e || typeof e != "object" ? null : (e.operationId || "").replace(/\s/g, "").length ? i$(e.operationId) : Jq(t, r, {
    v2OperationIdCompatibilityMode: n
  });
}
function Ra(e) {
  const {
    spec: t
  } = e, {
    paths: r
  } = t, n = {};
  if (!r || t.$$normalized)
    return e;
  for (const i in r) {
    const s = r[i];
    if (s == null || !["object", "function"].includes(typeof s))
      continue;
    const o = s.parameters;
    for (const a in s) {
      const c = s[a];
      if (c == null || !["object", "function"].includes(typeof c))
        continue;
      const l = Ri(c, i, a);
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
        for (const h in t)
          (h === "produces" || h === "consumes" || h === "security") && (u[h] = t[h], f.push(u));
        if (o && (u.parameters = o, f.push(u)), f.length) {
          for (const h of f)
            for (const p in h)
              if (!c[p])
                c[p] = h[p];
              else if (p === "parameters")
                for (const d of h[p])
                  c[p].some((g) => g.name && g.name === d.name || g.$ref && g.$ref === d.$ref || g.$$ref && g.$$ref === d.$$ref || g === d) || c[p].push(d);
        }
      }
    }
  }
  return t.$$normalized = !0, e;
}
async function Rp(e) {
  const {
    spec: t,
    mode: r,
    allowMetaPatches: n = !0,
    pathDiscriminator: i,
    modelPropertyMacro: s,
    parameterMacro: o,
    requestInterceptor: a,
    responseInterceptor: c,
    skipNormalization: l,
    useCircularStructures: f
  } = e, u = vf(e), h = rv(e);
  return p(t);
  function p(d) {
    u && (hr.refs.docCache[u] = d), hr.refs.fetchJSON = tv(h, {
      requestInterceptor: a,
      responseInterceptor: c
    });
    const y = [hr.refs];
    return typeof o == "function" && y.push(hr.parameters), typeof s == "function" && y.push(hr.properties), r !== "strict" && y.push(hr.allOf), Gq({
      spec: d,
      context: {
        baseDoc: u
      },
      plugins: y,
      allowMetaPatches: n,
      // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator: i,
      // for lazy resolution
      parameterMacro: o,
      modelPropertyMacro: s,
      useCircularStructures: f
      // eslint-disable-next-line camelcase
    }).then(l ? async (g) => g : Ra);
  }
}
function zq() {
  hr.refs.clearCache();
}
const s$ = {
  name: "generic",
  match() {
    return !0;
  },
  normalize({
    spec: e
  }) {
    const {
      spec: t
    } = Ra({
      spec: e
    });
    return t;
  },
  async resolve(e) {
    return Rp(e);
  }
};
async function Kq(e) {
  return Rp(e);
}
const o$ = (e) => {
  try {
    const {
      swagger: t
    } = e;
    return t === "2.0";
  } catch {
    return !1;
  }
}, a$ = (e) => {
  try {
    const {
      openapi: t
    } = e;
    return typeof t == "string" && /^3\.0\.([0123])(?:-rc[012])?$/.test(t);
  } catch {
    return !1;
  }
}, c$ = (e) => {
  try {
    const {
      openapi: t
    } = e;
    return typeof t == "string" && /^3\.1\.(?:[1-9]\d*|0)$/.test(t);
  } catch {
    return !1;
  }
}, Tp = (e) => a$(e) || c$(e), l$ = {
  name: "openapi-2",
  match({
    spec: e
  }) {
    return o$(e);
  },
  normalize({
    spec: e
  }) {
    const {
      spec: t
    } = Ra({
      spec: e
    });
    return t;
  },
  async resolve(e) {
    return Kq(e);
  }
};
async function Wq(e) {
  return Rp(e);
}
const u$ = {
  name: "openapi-3-0",
  match({
    spec: e
  }) {
    return a$(e);
  },
  normalize({
    spec: e
  }) {
    const {
      spec: t
    } = Ra({
      spec: e
    });
    return t;
  },
  async resolve(e) {
    return Wq(e);
  }
}, Yq = async (e) => {
  const {
    spec: t,
    requestInterceptor: r,
    responseInterceptor: n
  } = e, i = vf(e), s = rv(e), o = t || await tv(s, {
    requestInterceptor: r,
    responseInterceptor: n
  })(i), a = {
    ...e,
    spec: o
  };
  return e.strategies.find((l) => l.match(a)).resolve(a);
}, f$ = (e) => async (t) => {
  const r = {
    ...e,
    ...t
  };
  return Yq(r);
}, Xq = f$({
  strategies: [u$, l$, s$]
}), Qq = async (e, t, r = {}) => {
  const {
    returnEntireTree: n,
    baseDoc: i,
    requestInterceptor: s,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: l,
    strategies: f
  } = r, u = {
    spec: e,
    pathDiscriminator: t,
    baseDoc: i,
    requestInterceptor: s,
    responseInterceptor: o,
    parameterMacro: a,
    modelPropertyMacro: c,
    useCircularStructures: l,
    strategies: f
  }, p = f.find((y) => y.match(u)).normalize(u), d = await Xq({
    ...u,
    spec: p,
    allowMetaPatches: !0,
    skipNormalization: !0
  });
  return !n && Array.isArray(t) && t.length && (d.spec = t.reduce((y, g) => y == null ? void 0 : y[g], d.spec) || null), d;
}, Zq = (e) => async (t, r, n = {}) => {
  const i = {
    ...e,
    ...n
  };
  return Qq(t, r, i);
};
class eH extends xi {
}
const Ip = eH;
class tH extends Ip {
  constructor(t, r) {
    super(t, r), typeof r < "u" && (this.pointer = r.pointer);
  }
}
const pu = tH;
class rH extends Ip {
  constructor(t, r) {
    super(t, r), typeof r < "u" && (this.tokens = [...r.tokens]);
  }
}
const nH = rH;
class iH extends Ip {
  constructor(t, r) {
    super(t, r), typeof r < "u" && (this.pointer = r.pointer, Array.isArray(r.tokens) && (this.tokens = [...r.tokens]), this.failedToken = r.failedToken, this.failedTokenPosition = r.failedTokenPosition, this.element = r.element);
  }
}
const kn = iH, sH = xe(ln(/~/g, "~0"), ln(/\//g, "~1"), encodeURIComponent), oH = sH, aH = (e) => {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, cH = xe(ln(/~1/g, "/"), ln(/~0/g, "~"), aH), lH = cH, uH = (e) => {
  if (Iv(e))
    return [];
  if (!Pv("/", e))
    throw new pu(`Invalid JSON Pointer "${e}". JSON Pointers must begin with "/"`, {
      pointer: e
    });
  try {
    const t = xe(Mf("/"), mi(lH))(e);
    return $v(t);
  } catch (t) {
    throw new pu(`JSON Pointer parsing of "${e}" encountered an error.`, {
      pointer: e,
      cause: t
    });
  }
}, fH = (e) => {
  const t = e.indexOf("#");
  return t !== -1 ? e.substring(t) : "#";
}, Ce = (e) => {
  const t = fH(e);
  return Lf("#", t);
}, pH = (e) => {
  try {
    return e.length === 0 ? "" : `/${e.map(oH).join("/")}`;
  } catch (t) {
    throw new nH("JSON Pointer compilation of tokens encountered an error.", {
      tokens: e,
      cause: t
    });
  }
}, hH = pH, dH = (e, t) => {
  let r;
  try {
    r = uH(e);
  } catch (n) {
    throw new kn(`JSON Pointer evaluation failed while parsing the pointer "${e}".`, {
      pointer: e,
      element: A(t),
      cause: n
    });
  }
  return r.reduce((n, i, s) => {
    if (X(n)) {
      if (!n.hasKey(i))
        throw new kn(`JSON Pointer evaluation failed while evaluating token "${i}" against an ObjectElement`, {
          pointer: e,
          tokens: r,
          failedToken: i,
          failedTokenPosition: s,
          element: A(n)
        });
      return n.get(i);
    }
    if (et(n)) {
      if (!(i in n.content) || !Fj(Number(i)))
        throw new kn(`JSON Pointer evaluation failed while evaluating token "${i}" against an ArrayElement`, {
          pointer: e,
          tokens: r,
          failedToken: i,
          failedTokenPosition: s,
          element: A(n)
        });
      return n.get(Number(i));
    }
    throw new kn(`JSON Pointer evaluation failed while evaluating token "${i}" against an unexpected Element`, {
      pointer: e,
      tokens: r,
      failedToken: i,
      failedTokenPosition: s,
      element: A(n)
    });
  }, t);
}, Le = dH;
class Cp extends S3 {
  filterByFormat(t = "generic") {
    const r = t === "generic" ? "openapi;version" : t;
    return this.filter((n) => n.includes(r));
  }
  findBy(t = "3.1.0", r = "generic") {
    const n = r === "generic" ? `vnd.oai.openapi;version=${t}` : `vnd.oai.openapi+${r};version=${t}`;
    return this.find((s) => s.includes(n)) || this.unknownMediaType;
  }
  latest(t = "generic") {
    return sa(this.filterByFormat(t));
  }
}
const mH = new Cp("application/vnd.oai.openapi;version=3.1.0", "application/vnd.oai.openapi+json;version=3.1.0", "application/vnd.oai.openapi+yaml;version=3.1.0"), xr = mH;
let yH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "callback";
  }
};
const Ti = yH;
let vH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "components";
  }
  get schemas() {
    return this.get("schemas");
  }
  set schemas(t) {
    this.set("schemas", t);
  }
  get responses() {
    return this.get("responses");
  }
  set responses(t) {
    this.set("responses", t);
  }
  get parameters() {
    return this.get("parameters");
  }
  set parameters(t) {
    this.set("parameters", t);
  }
  get examples() {
    return this.get("examples");
  }
  set examples(t) {
    this.set("examples", t);
  }
  get requestBodies() {
    return this.get("requestBodies");
  }
  set requestBodies(t) {
    this.set("requestBodies", t);
  }
  get headers() {
    return this.get("headers");
  }
  set headers(t) {
    this.set("headers", t);
  }
  get securitySchemes() {
    return this.get("securitySchemes");
  }
  set securitySchemes(t) {
    this.set("securitySchemes", t);
  }
  get links() {
    return this.get("links");
  }
  set links(t) {
    this.set("links", t);
  }
  get callbacks() {
    return this.get("callbacks");
  }
  set callbacks(t) {
    this.set("callbacks", t);
  }
};
const Ii = vH;
let gH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "contact";
  }
  get name() {
    return this.get("name");
  }
  set name(t) {
    this.set("name", t);
  }
  get url() {
    return this.get("url");
  }
  set url(t) {
    this.set("url", t);
  }
  get email() {
    return this.get("email");
  }
  set email(t) {
    this.set("email", t);
  }
};
const Ci = gH;
let bH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "discriminator";
  }
  get propertyName() {
    return this.get("propertyName");
  }
  set propertyName(t) {
    this.set("propertyName", t);
  }
  get mapping() {
    return this.get("mapping");
  }
  set mapping(t) {
    this.set("mapping", t);
  }
};
const Ta = bH;
let $H = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "encoding";
  }
  get contentType() {
    return this.get("contentType");
  }
  set contentType(t) {
    this.set("contentType", t);
  }
  get headers() {
    return this.get("headers");
  }
  set headers(t) {
    this.set("headers", t);
  }
  get style() {
    return this.get("style");
  }
  set style(t) {
    this.set("style", t);
  }
  get explode() {
    return this.get("explode");
  }
  set explode(t) {
    this.set("explode", t);
  }
  get allowedReserved() {
    return this.get("allowedReserved");
  }
  set allowedReserved(t) {
    this.set("allowedReserved", t);
  }
};
const Ia = $H;
let SH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "example";
  }
  get summary() {
    return this.get("summary");
  }
  set summary(t) {
    this.set("summary", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get value() {
    return this.get("value");
  }
  set value(t) {
    this.set("value", t);
  }
  get externalValue() {
    return this.get("externalValue");
  }
  set externalValue(t) {
    this.set("externalValue", t);
  }
};
const Vi = SH;
let EH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "externalDocumentation";
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get url() {
    return this.get("url");
  }
  set url(t) {
    this.set("url", t);
  }
};
const Mi = EH;
let p$ = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "header";
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new Tt(!1);
  }
  set required(t) {
    this.set("required", t);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Tt(!1);
  }
  set deprecated(t) {
    this.set("deprecated", t);
  }
  get allowEmptyValue() {
    return this.get("allowEmptyValue");
  }
  set allowEmptyValue(t) {
    this.set("allowEmptyValue", t);
  }
  get style() {
    return this.get("style");
  }
  set style(t) {
    this.set("style", t);
  }
  get explode() {
    return this.get("explode");
  }
  set explode(t) {
    this.set("explode", t);
  }
  get allowReserved() {
    return this.get("allowReserved");
  }
  set allowReserved(t) {
    this.set("allowReserved", t);
  }
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
  get example() {
    return this.get("example");
  }
  set example(t) {
    this.set("example", t);
  }
  get examples() {
    return this.get("examples");
  }
  set examples(t) {
    this.set("examples", t);
  }
  get contentProp() {
    return this.get("content");
  }
  set contentProp(t) {
    this.set("content", t);
  }
};
Object.defineProperty(p$.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(e) {
    this.set("description", e);
  },
  enumerable: !0
});
const Fi = p$;
let wH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "info", this.classes.push("info");
  }
  get title() {
    return this.get("title");
  }
  set title(t) {
    this.set("title", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get termsOfService() {
    return this.get("termsOfService");
  }
  set termsOfService(t) {
    this.set("termsOfService", t);
  }
  get contact() {
    return this.get("contact");
  }
  set contact(t) {
    this.set("contact", t);
  }
  get license() {
    return this.get("license");
  }
  set license(t) {
    this.set("license", t);
  }
  get version() {
    return this.get("version");
  }
  set version(t) {
    this.set("version", t);
  }
};
const Di = wH;
let OH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "license";
  }
  get name() {
    return this.get("name");
  }
  set name(t) {
    this.set("name", t);
  }
  get url() {
    return this.get("url");
  }
  set url(t) {
    this.set("url", t);
  }
};
const Ni = OH;
let xH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "link";
  }
  get operationRef() {
    return this.get("operationRef");
  }
  set operationRef(t) {
    this.set("operationRef", t);
  }
  get operationId() {
    return this.get("operationId");
  }
  set operationId(t) {
    this.set("operationId", t);
  }
  get operation() {
    if (G(this.operationRef)) {
      var t;
      return (t = this.operationRef) === null || t === void 0 ? void 0 : t.meta.get("operation");
    }
    if (G(this.operationId)) {
      var r;
      return (r = this.operationId) === null || r === void 0 ? void 0 : r.meta.get("operation");
    }
  }
  set operation(t) {
    this.set("operation", t);
  }
  get parameters() {
    return this.get("parameters");
  }
  set parameters(t) {
    this.set("parameters", t);
  }
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(t) {
    this.set("requestBody", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get server() {
    return this.get("server");
  }
  set server(t) {
    this.set("server", t);
  }
};
const Li = xH;
let AH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "mediaType";
  }
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
  get example() {
    return this.get("example");
  }
  set example(t) {
    this.set("example", t);
  }
  get examples() {
    return this.get("examples");
  }
  set examples(t) {
    this.set("examples", t);
  }
  get encoding() {
    return this.get("encoding");
  }
  set encoding(t) {
    this.set("encoding", t);
  }
};
const ki = AH;
let PH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "oAuthFlow";
  }
  get authorizationUrl() {
    return this.get("authorizationUrl");
  }
  set authorizationUrl(t) {
    this.set("authorizationUrl", t);
  }
  get tokenUrl() {
    return this.get("tokenUrl");
  }
  set tokenUrl(t) {
    this.set("tokenUrl", t);
  }
  get refreshUrl() {
    return this.get("refreshUrl");
  }
  set refreshUrl(t) {
    this.set("refreshUrl", t);
  }
  get scopes() {
    return this.get("scopes");
  }
  set scopes(t) {
    this.set("scopes", t);
  }
};
const Ca = PH;
let jH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "oAuthFlows";
  }
  get implicit() {
    return this.get("implicit");
  }
  set implicit(t) {
    this.set("implicit", t);
  }
  get password() {
    return this.get("password");
  }
  set password(t) {
    this.set("password", t);
  }
  get clientCredentials() {
    return this.get("clientCredentials");
  }
  set clientCredentials(t) {
    this.set("clientCredentials", t);
  }
  get authorizationCode() {
    return this.get("authorizationCode");
  }
  set authorizationCode(t) {
    this.set("authorizationCode", t);
  }
};
const Va = jH;
let _H = class extends Rt {
  constructor(t, r, n) {
    super(t, r, n), this.element = "openapi", this.classes.push("spec-version"), this.classes.push("version");
  }
};
const Ui = _H;
class RH extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "openApi3_0", this.classes.push("api");
  }
  get openapi() {
    return this.get("openapi");
  }
  set openapi(t) {
    this.set("openapi", t);
  }
  get info() {
    return this.get("info");
  }
  set info(t) {
    this.set("info", t);
  }
  get servers() {
    return this.get("servers");
  }
  set servers(t) {
    this.set("servers", t);
  }
  get paths() {
    return this.get("paths");
  }
  set paths(t) {
    this.set("paths", t);
  }
  get components() {
    return this.get("components");
  }
  set components(t) {
    this.set("components", t);
  }
  get security() {
    return this.get("security");
  }
  set security(t) {
    this.set("security", t);
  }
  get tags() {
    return this.get("tags");
  }
  set tags(t) {
    this.set("tags", t);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  set externalDocs(t) {
    this.set("externalDocs", t);
  }
}
const Ma = RH;
let TH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "operation";
  }
  get tags() {
    return this.get("tags");
  }
  set tags(t) {
    this.set("tags", t);
  }
  get summary() {
    return this.get("summary");
  }
  set summary(t) {
    this.set("summary", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  set externalDocs(t) {
    this.set("externalDocs", t);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  get operationId() {
    return this.get("operationId");
  }
  set operationId(t) {
    this.set("operationId", t);
  }
  get parameters() {
    return this.get("parameters");
  }
  set parameters(t) {
    this.set("parameters", t);
  }
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(t) {
    this.set("requestBody", t);
  }
  get responses() {
    return this.get("responses");
  }
  set responses(t) {
    this.set("responses", t);
  }
  get callbacks() {
    return this.get("callbacks");
  }
  set callbacks(t) {
    this.set("callbacks", t);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Tt(!1);
  }
  set deprecated(t) {
    this.set("deprecated", t);
  }
  get security() {
    return this.get("security");
  }
  set security(t) {
    this.set("security", t);
  }
  get servers() {
    return this.get("severs");
  }
  set servers(t) {
    this.set("servers", t);
  }
};
const Bi = TH;
let h$ = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "parameter";
  }
  get name() {
    return this.get("name");
  }
  set name(t) {
    this.set("name", t);
  }
  get in() {
    return this.get("in");
  }
  set in(t) {
    this.set("in", t);
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new Tt(!1);
  }
  set required(t) {
    this.set("required", t);
  }
  get deprecated() {
    return this.hasKey("deprecated") ? this.get("deprecated") : new Tt(!1);
  }
  set deprecated(t) {
    this.set("deprecated", t);
  }
  get allowEmptyValue() {
    return this.get("allowEmptyValue");
  }
  set allowEmptyValue(t) {
    this.set("allowEmptyValue", t);
  }
  get style() {
    return this.get("style");
  }
  set style(t) {
    this.set("style", t);
  }
  get explode() {
    return this.get("explode");
  }
  set explode(t) {
    this.set("explode", t);
  }
  get allowReserved() {
    return this.get("allowReserved");
  }
  set allowReserved(t) {
    this.set("allowReserved", t);
  }
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
  get example() {
    return this.get("example");
  }
  set example(t) {
    this.set("example", t);
  }
  get examples() {
    return this.get("examples");
  }
  set examples(t) {
    this.set("examples", t);
  }
  get contentProp() {
    return this.get("content");
  }
  set contentProp(t) {
    this.set("content", t);
  }
};
Object.defineProperty(h$.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(e) {
    this.set("description", e);
  },
  enumerable: !0
});
const qi = h$;
let IH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "pathItem";
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(t) {
    this.set("$ref", t);
  }
  get summary() {
    return this.get("summary");
  }
  set summary(t) {
    this.set("summary", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get GET() {
    return this.get("get");
  }
  set GET(t) {
    this.set("GET", t);
  }
  get PUT() {
    return this.get("put");
  }
  set PUT(t) {
    this.set("PUT", t);
  }
  get POST() {
    return this.get("post");
  }
  set POST(t) {
    this.set("POST", t);
  }
  get DELETE() {
    return this.get("delete");
  }
  set DELETE(t) {
    this.set("DELETE", t);
  }
  get OPTIONS() {
    return this.get("options");
  }
  set OPTIONS(t) {
    this.set("OPTIONS", t);
  }
  get HEAD() {
    return this.get("head");
  }
  set HEAD(t) {
    this.set("HEAD", t);
  }
  get PATCH() {
    return this.get("patch");
  }
  set PATCH(t) {
    this.set("PATCH", t);
  }
  get TRACE() {
    return this.get("trace");
  }
  set TRACE(t) {
    this.set("TRACE", t);
  }
  get servers() {
    return this.get("servers");
  }
  set servers(t) {
    this.set("servers", t);
  }
  get parameters() {
    return this.get("parameters");
  }
  set parameters(t) {
    this.set("parameters", t);
  }
};
const Hi = IH;
let CH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "paths";
  }
};
const Gi = CH;
let VH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "reference", this.classes.push("openapi-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(t) {
    this.set("$ref", t);
  }
};
const Ji = VH;
let MH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "requestBody";
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get contentProp() {
    return this.get("content");
  }
  set contentProp(t) {
    this.set("content", t);
  }
  get required() {
    return this.hasKey("required") ? this.get("required") : new Tt(!1);
  }
  set required(t) {
    this.set("required", t);
  }
};
const zi = MH;
let FH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "response";
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get headers() {
    return this.get("headers");
  }
  set headers(t) {
    this.set("headers", t);
  }
  get contentProp() {
    return this.get("content");
  }
  set contentProp(t) {
    this.set("content", t);
  }
  get links() {
    return this.get("links");
  }
  set links(t) {
    this.set("links", t);
  }
};
const Ki = FH;
let DH = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "responses";
  }
  get default() {
    return this.get("default");
  }
  set default(t) {
    this.set("default", t);
  }
};
const Wi = DH;
class NH extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "JSONSchemaDraft4";
  }
  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    return this.get("id");
  }
  set idProp(t) {
    this.set("id", t);
  }
  get $schema() {
    return this.get("$schema");
  }
  set $schema(t) {
    this.set("$schema", t);
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
  set multipleOf(t) {
    this.set("multipleOf", t);
  }
  get maximum() {
    return this.get("maximum");
  }
  set maximum(t) {
    this.set("maximum", t);
  }
  get exclusiveMaximum() {
    return this.get("exclusiveMaximum");
  }
  set exclusiveMaximum(t) {
    this.set("exclusiveMaximum", t);
  }
  get minimum() {
    return this.get("minimum");
  }
  set minimum(t) {
    this.set("minimum", t);
  }
  get exclusiveMinimum() {
    return this.get("exclusiveMinimum");
  }
  set exclusiveMinimum(t) {
    this.set("exclusiveMinimum", t);
  }
  /**
   * Validation keywords for strings
   */
  get maxLength() {
    return this.get("maxLength");
  }
  set maxLength(t) {
    this.set("maxLength", t);
  }
  get minLength() {
    return this.get("minLength");
  }
  set minLength(t) {
    this.set("minLength", t);
  }
  get pattern() {
    return this.get("pattern");
  }
  set pattern(t) {
    this.set("pattern", t);
  }
  /**
   * Validation keywords for arrays
   */
  get additionalItems() {
    return this.get("additionalItems");
  }
  set additionalItems(t) {
    this.set("additionalItems", t);
  }
  get items() {
    return this.get("items");
  }
  set items(t) {
    this.set("items", t);
  }
  get maxItems() {
    return this.get("maxItems");
  }
  set maxItems(t) {
    this.set("maxItems", t);
  }
  get minItems() {
    return this.get("minItems");
  }
  set minItems(t) {
    this.set("minItems", t);
  }
  get uniqueItems() {
    return this.get("uniqueItems");
  }
  set uniqueItems(t) {
    this.set("uniqueItems", t);
  }
  /**
   * Validation keywords for objects
   */
  get maxProperties() {
    return this.get("maxProperties");
  }
  set maxProperties(t) {
    this.set("maxProperties", t);
  }
  get minProperties() {
    return this.get("minProperties");
  }
  set minProperties(t) {
    this.set("minProperties", t);
  }
  get required() {
    return this.get("required");
  }
  set required(t) {
    this.set("required", t);
  }
  get properties() {
    return this.get("properties");
  }
  set properties(t) {
    this.set("properties", t);
  }
  get additionalProperties() {
    return this.get("additionalProperties");
  }
  set additionalProperties(t) {
    this.set("additionalProperties", t);
  }
  get patternProperties() {
    return this.get("patternProperties");
  }
  set patternProperties(t) {
    this.set("patternProperties", t);
  }
  get dependencies() {
    return this.get("dependencies");
  }
  set dependencies(t) {
    this.set("dependencies", t);
  }
  /**
   *  Validation keywords for any instance type
   */
  get enum() {
    return this.get("enum");
  }
  set enum(t) {
    this.set("enum", t);
  }
  get type() {
    return this.get("type");
  }
  set type(t) {
    this.set("type", t);
  }
  get allOf() {
    return this.get("allOf");
  }
  set allOf(t) {
    this.set("allOf", t);
  }
  get anyOf() {
    return this.get("anyOf");
  }
  set anyOf(t) {
    this.set("anyOf", t);
  }
  get oneOf() {
    return this.get("oneOf");
  }
  set oneOf(t) {
    this.set("oneOf", t);
  }
  get not() {
    return this.get("not");
  }
  set not(t) {
    this.set("not", t);
  }
  get definitions() {
    return this.get("definitions");
  }
  set definitions(t) {
    this.set("definitions", t);
  }
  /**
   * Metadata keywords
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-6
   */
  get title() {
    return this.get("title");
  }
  set title(t) {
    this.set("title", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get default() {
    return this.get("default");
  }
  set default(t) {
    this.set("default", t);
  }
  /**
   * Semantic validation with "format"
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-7
   */
  get format() {
    return this.get("format");
  }
  set format(t) {
    this.set("format", t);
  }
  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */
  get base() {
    return this.get("base");
  }
  set base(t) {
    this.set("base", t);
  }
  get links() {
    return this.get("links");
  }
  set links(t) {
    this.set("links", t);
  }
  get media() {
    return this.get("media");
  }
  set media(t) {
    this.set("media", t);
  }
  get readOnly() {
    return this.get("readOnly");
  }
  set readOnly(t) {
    this.set("readOnly", t);
  }
}
const Yi = NH;
class LH extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "JSONReference", this.classes.push("json-reference");
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(t) {
    this.set("$ref", t);
  }
}
const Fa = LH;
class kH extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "media";
  }
  get binaryEncoding() {
    return this.get("binaryEncoding");
  }
  set binaryEncoding(t) {
    this.set("binaryEncoding", t);
  }
  get type() {
    return this.get("type");
  }
  set type(t) {
    this.set("type", t);
  }
}
const Da = kH;
class UH extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "linkDescription";
  }
  get href() {
    return this.get("href");
  }
  set href(t) {
    this.set("href", t);
  }
  get rel() {
    return this.get("rel");
  }
  set rel(t) {
    this.set("rel", t);
  }
  get title() {
    return this.get("title");
  }
  set title(t) {
    this.set("title", t);
  }
  get targetSchema() {
    return this.get("targetSchema");
  }
  set targetSchema(t) {
    this.set("targetSchema", t);
  }
  get mediaType() {
    return this.get("mediaType");
  }
  set mediaType(t) {
    this.set("mediaType", t);
  }
  get method() {
    return this.get("method");
  }
  set method(t) {
    this.set("method", t);
  }
  get encType() {
    return this.get("encType");
  }
  set encType(t) {
    this.set("encType", t);
  }
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
}
const Na = UH, BH = {
  namespace: (e) => {
    const {
      base: t
    } = e;
    return t.register("jSONSchemaDraft4", Yi), t.register("jSONReference", Fa), t.register("media", Da), t.register("linkDescription", Na), t;
  }
}, qH = BH, d$ = (e) => {
  if (_e(e))
    return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, m$ = {
  JSONSchemaDraft4Element: ["content"],
  JSONReferenceElement: ["content"],
  MediaElement: ["content"],
  LinkDescriptionElement: ["content"],
  ..._n
}, HH = v({
  props: {
    element: null
  },
  // @ts-ignore
  methods: {
    copyMetaAndAttributes(e, t) {
      Sp(e) && t.meta.set("sourceMap", e.meta.get("sourceMap"));
    }
  }
}), y$ = HH, GH = v(y$, {
  methods: {
    enter(e) {
      return this.element = A(e), M;
    }
  }
}), U = GH, JH = v(y$, {
  props: {
    specObj: null,
    passingOptionsNames: ["specObj"]
  },
  init({
    // @ts-ignore
    specObj: e = this.specObj
  }) {
    this.specObj = e;
  },
  methods: {
    retrievePassingOptions() {
      return Av(this.passingOptionsNames, this);
    },
    retrieveFixedFields(e) {
      const t = ze(["visitors", ...e, "fixedFields"], this.specObj);
      return typeof t == "object" && t !== null ? Object.keys(t) : [];
    },
    retrieveVisitor(e) {
      return oa(Dt, ["visitors", ...e], this.specObj) ? ze(["visitors", ...e], this.specObj) : ze(["visitors", ...e, "$visitor"], this.specObj);
    },
    retrieveVisitorInstance(e, t = {}) {
      const r = this.retrievePassingOptions();
      return this.retrieveVisitor(e)({
        ...r,
        ...t
      });
    },
    toRefractedElement(e, t, r = {}) {
      const n = this.retrieveVisitorInstance(e, r), i = Object.getPrototypeOf(n);
      return Ft(this.fallbackVisitorPrototype) && (this.fallbackVisitorPrototype = Object.getPrototypeOf(this.retrieveVisitorInstance(["value"]))), this.fallbackVisitorPrototype === i ? A(t) : (Te(t, n, {
        keyMap: m$,
        nodeTypeGetter: d$,
        ...r
      }), n.element);
    }
  }
}), lr = JH, zH = v(lr, {
  props: {
    specPath: un,
    ignoredFields: []
  },
  init({
    // @ts-ignore
    specPath: e = this.specPath,
    // @ts-ignore
    ignoredFields: t = this.ignoredFields
  } = {}) {
    this.specPath = e, this.ignoredFields = t;
  },
  methods: {
    ObjectElement(e) {
      const t = this.specPath(e), r = this.retrieveFixedFields(t);
      return e.forEach((n, i, s) => {
        if (G(i) && r.includes(O(i)) && !this.ignoredFields.includes(O(i))) {
          const o = this.toRefractedElement([...t, "fixedFields", O(i)], n), a = new Ai(A(i), o);
          this.copyMetaAndAttributes(s, a), a.classes.push("fixed-field"), this.element.content.push(a);
        } else
          this.ignoredFields.includes(O(i)) || this.element.content.push(A(s));
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), li = zH, KH = v(li, U, {
  props: {
    specPath: D(["document", "objects", "JSONSchema"])
  },
  init() {
    this.element = new Yi();
  }
}), WH = KH, YH = U, XH = YH, QH = U, ZH = QH, eG = U, tG = eG, rG = U, nG = rG, iG = U, sG = iG, oG = U, aG = oG, cG = U, lG = cG, uG = U, fG = uG, pG = U, hG = pG, dG = U, mG = dG, yG = v({
  props: {
    parent: null
  },
  // @ts-ignore
  init({
    parent: e = this.parent
  }) {
    this.parent = e, this.passingOptionsNames = [...this.passingOptionsNames, "parent"];
  }
}), qt = yG, gt = (e) => X(e) && e.hasKey("$ref"), vG = v(lr, qt, U, {
  methods: {
    ObjectElement(e) {
      const t = gt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"];
      return this.element = this.toRefractedElement(t, e), M;
    },
    ArrayElement(e) {
      return this.element = new ie(), this.element.classes.push("json-schema-items"), e.forEach((t) => {
        const r = gt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), gG = vG, bG = U, $G = bG, SG = U, EG = SG, wG = U, OG = wG, xG = U, AG = xG, PG = U, jG = PG, _G = v(U, {
  methods: {
    ArrayElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-required"), M;
    }
  }
}), RG = _G, TG = v(lr, {
  props: {
    fieldPatternPredicate: $f,
    specPath: un,
    ignoredFields: []
  },
  init({
    // @ts-ignore
    specPath: e = this.specPath,
    // @ts-ignore
    ignoredFields: t = this.ignoredFields
  } = {}) {
    this.specPath = e, this.ignoredFields = t;
  },
  methods: {
    ObjectElement(e) {
      return e.forEach((t, r, n) => {
        if (!this.ignoredFields.includes(O(r)) && this.fieldPatternPredicate(O(r))) {
          const i = this.specPath(t), s = this.toRefractedElement(i, t), o = new Ai(A(r), s);
          this.copyMetaAndAttributes(n, o), o.classes.push("patterned-field"), this.element.content.push(o);
        } else
          this.ignoredFields.includes(O(r)) || this.element.content.push(A(n));
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), IG = TG, CG = v(IG, {
  props: {
    fieldPatternPredicate: Nf
  }
}), La = CG, VG = v(La, qt, U, {
  props: {
    specPath: (e) => gt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-properties");
  }
}), MG = VG, FG = v(La, qt, U, {
  props: {
    specPath: (e) => gt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-patternProperties");
  }
}), DG = FG, NG = v(La, qt, U, {
  props: {
    specPath: (e) => gt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-dependencies");
  }
}), LG = NG, kG = v(U, {
  methods: {
    ArrayElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-enum"), M;
    }
  }
}), UG = kG, BG = v(U, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-type"), M;
    },
    ArrayElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-type"), M;
    }
  }
}), qG = BG, HG = v(lr, qt, U, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-allOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = gt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), GG = HG, JG = v(lr, qt, U, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-anyOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = gt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), zG = JG, KG = v(lr, qt, U, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-oneOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = gt(t) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), WG = KG, YG = v(La, qt, U, {
  props: {
    specPath: (e) => gt(e) ? ["document", "objects", "JSONReference"] : ["document", "objects", "JSONSchema"]
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-definitions");
  }
}), XG = YG, QG = U, ZG = QG, eJ = U, tJ = eJ, rJ = U, nJ = rJ, iJ = U, sJ = iJ, oJ = U, aJ = oJ, cJ = v(lr, qt, U, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-links");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = this.toRefractedElement(["document", "objects", "LinkDescription"], t);
        this.element.push(r);
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), lJ = cJ, uJ = U, fJ = uJ, pJ = v(li, U, {
  props: {
    specPath: D(["document", "objects", "JSONReference"])
  },
  init() {
    this.element = new Fa();
  },
  methods: {
    ObjectElement(e) {
      const t = li.compose.methods.ObjectElement.call(this, e);
      return G(this.element.$ref) && this.element.classes.push("reference-element"), t;
    }
  }
}), hJ = pJ, dJ = v(U, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("reference-value"), M;
    }
  }
}), mJ = dJ, yJ = v(lr, {
  props: {
    alternator: []
  },
  methods: {
    enter(e) {
      const t = this.alternator.map(({
        predicate: n,
        specPath: i
      }) => Cf(n, D(i), $i)), r = Vv(t)(e);
      return this.element = this.toRefractedElement(r, e), M;
    }
  }
}), vJ = yJ, gJ = v(vJ, {
  props: {
    alternator: [{
      predicate: gt,
      specPath: ["document", "objects", "JSONReference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "JSONSchema"]
    }]
  }
}), qr = gJ, bJ = v(li, U, {
  props: {
    specPath: D(["document", "objects", "Media"])
  },
  init() {
    this.element = new Da();
  }
}), $J = bJ, SJ = U, EJ = SJ, wJ = U, OJ = wJ, xJ = v(li, U, {
  props: {
    specPath: D(["document", "objects", "LinkDescription"])
  },
  init() {
    this.element = new Na();
  }
}), AJ = xJ, PJ = U, jJ = PJ, _J = U, RJ = _J, TJ = U, IJ = TJ, CJ = U, VJ = CJ, MJ = U, FJ = MJ, DJ = U, NJ = DJ, LJ = {
  visitors: {
    value: U,
    JSONSchemaOrJSONReferenceVisitor: qr,
    document: {
      objects: {
        JSONSchema: {
          $visitor: WH,
          fixedFields: {
            // core vocabulary
            id: XH,
            $schema: ZH,
            // validation vocabulary
            // validation keywords for numeric instances (number and integer)
            multipleOf: tG,
            maximum: nG,
            exclusiveMaximum: sG,
            minimum: aG,
            exclusiveMinimum: lG,
            // validation keywords for strings
            maxLength: fG,
            minLength: hG,
            pattern: mG,
            // validation keywords for arrays
            additionalItems: qr,
            items: gG,
            maxItems: $G,
            minItems: EG,
            uniqueItems: OG,
            // validation keywords for objects
            maxProperties: AG,
            minProperties: jG,
            required: RG,
            properties: MG,
            additionalProperties: qr,
            patternProperties: DG,
            dependencies: LG,
            // validation keywords for any instance type
            enum: UG,
            type: qG,
            allOf: GG,
            anyOf: zG,
            oneOf: WG,
            not: qr,
            definitions: XG,
            // metadata keywords
            title: ZG,
            description: tJ,
            default: nJ,
            // semantic validation with "format"
            format: sJ,
            // JSON Hyper-Schema
            base: aJ,
            links: lJ,
            media: {
              $ref: "#/visitors/document/objects/Media"
            },
            readOnly: fJ
          }
        },
        JSONReference: {
          $visitor: hJ,
          fixedFields: {
            $ref: mJ
          }
        },
        Media: {
          $visitor: $J,
          fixedFields: {
            binaryEncoding: EJ,
            type: OJ
          }
        },
        LinkDescription: {
          $visitor: AJ,
          fixedFields: {
            href: jJ,
            rel: RJ,
            title: IJ,
            targetSchema: qr,
            mediaType: VJ,
            method: FJ,
            encType: NJ,
            schema: qr
          }
        }
      }
    }
  }
}, Ht = LJ, kJ = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Yi || e(n) && t("JSONSchemaDraft4", n) && r("object", n)), UJ = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Fa || e(n) && t("JSONReference", n) && r("object", n)), BJ = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Da || e(n) && t("media", n) && r("object", n)), qJ = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Na || e(n) && t("linkDescription", n) && r("object", n)), HJ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isJSONReferenceElement: UJ,
  isJSONSchemaElement: kJ,
  isLinkDescriptionElement: qJ,
  isMediaElement: BJ
}, Symbol.toStringTag, { value: "Module" })), GJ = () => {
  const e = Pn(qH);
  return {
    predicates: {
      ...HJ,
      isStringElement: G
    },
    namespace: e
  };
}, JJ = GJ, zJ = (e, {
  specPath: t = ["visitors", "document", "objects", "JSONSchema", "$visitor"],
  plugins: r = [],
  specificationObj: n = Ht
} = {}) => {
  const i = gp(e), s = xa(n), o = fn(t, [], s);
  return Te(i, o, {
    state: {
      specObj: s
    }
  }), ji(o.element, r, {
    toolboxCreator: JJ,
    visitorOptions: {
      keyMap: m$,
      nodeTypeGetter: d$
    }
  });
}, ka = (e) => (t, r = {}) => zJ(t, {
  specPath: e,
  ...r
});
Yi.refract = ka(["visitors", "document", "objects", "JSONSchema", "$visitor"]);
Fa.refract = ka(["visitors", "document", "objects", "JSONReference", "$visitor"]);
Da.refract = ka(["visitors", "document", "objects", "Media", "$visitor"]);
Na.refract = ka(["visitors", "document", "objects", "LinkDescription", "$visitor"]);
let KJ = class extends Yi {
  constructor(t, r, n) {
    super(t, r, n), this.element = "schema", this.classes.push("json-schema-draft-4");
  }
  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    throw new je("idProp getter in Schema class is not not supported.");
  }
  set idProp(t) {
    throw new je("idProp setter in Schema class is not not supported.");
  }
  get $schema() {
    throw new je("$schema getter in Schema class is not not supported.");
  }
  set $schema(t) {
    throw new je("$schema setter in Schema class is not not supported.");
  }
  /**
   * Validation keywords for arrays
   */
  get additionalItems() {
    return this.get("additionalItems");
  }
  set additionalItems(t) {
    this.set("additionalItems", t);
  }
  get items() {
    return this.get("items");
  }
  set items(t) {
    this.set("items", t);
  }
  /**
   * Validation keywords for objects
   */
  get additionalProperties() {
    return this.get("additionalProperties");
  }
  set additionalProperties(t) {
    this.set("additionalProperties", t);
  }
  get patternProperties() {
    throw new je("patternProperties getter in Schema class is not not supported.");
  }
  set patternProperties(t) {
    throw new je("patternProperties setter in Schema class is not not supported.");
  }
  get dependencies() {
    throw new je("dependencies getter in Schema class is not not supported.");
  }
  set dependencies(t) {
    throw new je("dependencies setter in Schema class is not not supported.");
  }
  /**
   *  Validation keywords for any instance type
   */
  get type() {
    return this.get("type");
  }
  set type(t) {
    this.set("type", t);
  }
  get not() {
    return this.get("not");
  }
  set not(t) {
    this.set("not", t);
  }
  get definitions() {
    throw new je("definitions getter in Schema class is not not supported.");
  }
  set definitions(t) {
    throw new je("definitions setter in Schema class is not not supported.");
  }
  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */
  get base() {
    throw new je("base getter in Schema class is not not supported.");
  }
  set base(t) {
    throw new je("base setter in Schema class is not not supported.");
  }
  get links() {
    throw new je("links getter in Schema class is not not supported.");
  }
  set links(t) {
    throw new je("links setter in Schema class is not not supported.");
  }
  get media() {
    throw new je("media getter in Schema class is not not supported.");
  }
  set media(t) {
    throw new je("media setter in Schema class is not not supported.");
  }
  /**
   * OpenAPI vocabulary
   */
  get nullable() {
    return this.get("nullable");
  }
  set nullable(t) {
    this.set("nullable", t);
  }
  get discriminator() {
    return this.get("discriminator");
  }
  set discriminator(t) {
    this.set("discriminator", t);
  }
  get writeOnly() {
    return this.get("writeOnly");
  }
  set writeOnly(t) {
    this.set("writeOnly", t);
  }
  get xml() {
    return this.get("xml");
  }
  set xml(t) {
    this.set("xml", t);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  set externalDocs(t) {
    this.set("externalDocs", t);
  }
  get example() {
    return this.get("example");
  }
  set example(t) {
    this.set("example", t);
  }
  get deprecated() {
    return this.get("deprecated");
  }
  set deprecated(t) {
    this.set("deprecated", t);
  }
};
const Ua = KJ;
let WJ = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "securityRequirement";
  }
};
const Xi = WJ;
let YJ = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "securityScheme";
  }
  get type() {
    return this.get("type");
  }
  set type(t) {
    this.set("type", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get name() {
    return this.get("name");
  }
  set name(t) {
    this.set("name", t);
  }
  get in() {
    return this.get("in");
  }
  set in(t) {
    this.set("in", t);
  }
  get scheme() {
    return this.get("scheme");
  }
  set scheme(t) {
    this.set("scheme", t);
  }
  get bearerFormat() {
    return this.get("bearerFormat");
  }
  set bearerFormat(t) {
    this.set("bearerFormat", t);
  }
  get flows() {
    return this.get("flows");
  }
  set flows(t) {
    this.set("flows", t);
  }
  get openIdConnectUrl() {
    return this.get("openIdConnectUrl");
  }
  set openIdConnectUrl(t) {
    this.set("openIdConnectUrl", t);
  }
};
const Ba = YJ;
let XJ = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "server";
  }
  get url() {
    return this.get("url");
  }
  set url(t) {
    this.set("url", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get variables() {
    return this.get("variables");
  }
  set variables(t) {
    this.set("variables", t);
  }
};
const Qi = XJ;
let QJ = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "serverVariable";
  }
  get enum() {
    return this.get("enum");
  }
  set enum(t) {
    this.set("enum", t);
  }
  get default() {
    return this.get("default");
  }
  set default(t) {
    this.set("default", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
};
const Zi = QJ;
let ZJ = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "tag";
  }
  get name() {
    return this.get("name");
  }
  set name(t) {
    this.set("name", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  set externalDocs(t) {
    this.set("externalDocs", t);
  }
};
const qa = ZJ;
let ez = class extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "xml";
  }
  get name() {
    return this.get("name");
  }
  set name(t) {
    this.set("name", t);
  }
  get namespace() {
    return this.get("namespace");
  }
  set namespace(t) {
    this.set("namespace", t);
  }
  get prefix() {
    return this.get("prefix");
  }
  set prefix(t) {
    this.set("prefix", t);
  }
  get attribute() {
    return this.get("attribute");
  }
  set attribute(t) {
    this.set("attribute", t);
  }
  get wrapped() {
    return this.get("wrapped");
  }
  set wrapped(t) {
    this.set("wrapped", t);
  }
};
const Ha = ez, tz = {
  namespace: (e) => {
    const {
      base: t
    } = e;
    return t.register("callback", Ti), t.register("components", Ii), t.register("contact", Ci), t.register("discriminator", Ta), t.register("encoding", Ia), t.register("example", Vi), t.register("externalDocumentation", Mi), t.register("header", Fi), t.register("info", Di), t.register("license", Ni), t.register("link", Li), t.register("mediaType", ki), t.register("oAuthFlow", Ca), t.register("oAuthFlows", Va), t.register("openapi", Ui), t.register("openApi3_0", Ma), t.register("operation", Bi), t.register("parameter", qi), t.register("pathItem", Hi), t.register("paths", Gi), t.register("reference", Ji), t.register("requestBody", zi), t.register("response", Ki), t.register("responses", Wi), t.register("schema", Ua), t.register("securityRequirement", Xi), t.register("securityScheme", Ba), t.register("server", Qi), t.register("serverVariable", Zi), t.register("tag", qa), t.register("xml", Ha), t;
  }
}, rz = tz, yo = class yo extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(yo.primaryClass);
  }
};
B(yo, "primaryClass", "servers");
let hu = yo;
const Vp = hu, vo = class vo extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(vo.primaryClass);
  }
};
B(vo, "primaryClass", "security");
let du = vo;
const nz = du, go = class go extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(go.primaryClass);
  }
};
B(go, "primaryClass", "tags");
let mu = go;
const iz = mu, bo = class bo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(bo.primaryClass);
  }
};
B(bo, "primaryClass", "server-variables");
let yu = bo;
const sz = yu, $o = class $o extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push($o.primaryClass);
  }
};
B($o, "primaryClass", "components-schemas");
let vu = $o;
const v$ = vu, So = class So extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(So.primaryClass);
  }
};
B(So, "primaryClass", "components-responses");
let gu = So;
const oz = gu, Eo = class Eo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Eo.primaryClass), this.classes.push("parameters");
  }
};
B(Eo, "primaryClass", "components-parameters");
let bu = Eo;
const az = bu, wo = class wo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(wo.primaryClass), this.classes.push("examples");
  }
};
B(wo, "primaryClass", "components-examples");
let $u = wo;
const cz = $u, Oo = class Oo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Oo.primaryClass);
  }
};
B(Oo, "primaryClass", "components-request-bodies");
let Su = Oo;
const lz = Su, xo = class xo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(xo.primaryClass);
  }
};
B(xo, "primaryClass", "components-headers");
let Eu = xo;
const uz = Eu, Ao = class Ao extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Ao.primaryClass);
  }
};
B(Ao, "primaryClass", "components-security-schemes");
let wu = Ao;
const fz = wu, Po = class Po extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Po.primaryClass);
  }
};
B(Po, "primaryClass", "components-links");
let Ou = Po;
const pz = Ou, jo = class jo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(jo.primaryClass);
  }
};
B(jo, "primaryClass", "components-callbacks");
let xu = jo;
const hz = xu, _o = class _o extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(_o.primaryClass), this.classes.push("servers");
  }
};
B(_o, "primaryClass", "path-item-servers");
let Au = _o;
const g$ = Au, Ro = class Ro extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Ro.primaryClass), this.classes.push("parameters");
  }
};
B(Ro, "primaryClass", "path-item-parameters");
let Pu = Ro;
const dz = Pu, To = class To extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(To.primaryClass), this.classes.push("parameters");
  }
};
B(To, "primaryClass", "operation-parameters");
let ju = To;
const b$ = ju, Io = class Io extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Io.primaryClass), this.classes.push("examples");
  }
};
B(Io, "primaryClass", "parameter-examples");
let _u = Io;
const mz = _u, Co = class Co extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Co.primaryClass), this.classes.push("content");
  }
};
B(Co, "primaryClass", "parameter-content");
let Ru = Co;
const yz = Ru, Vo = class Vo extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Vo.primaryClass);
  }
};
B(Vo, "primaryClass", "operation-tags");
let Tu = Vo;
const vz = Tu, Mo = class Mo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Mo.primaryClass);
  }
};
B(Mo, "primaryClass", "operation-callbacks");
let Iu = Mo;
const gz = Iu, Fo = class Fo extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Fo.primaryClass), this.classes.push("security");
  }
};
B(Fo, "primaryClass", "operation-security");
let Cu = Fo;
const $$ = Cu, Do = class Do extends ie {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Do.primaryClass), this.classes.push("servers");
  }
};
B(Do, "primaryClass", "operation-servers");
let Vu = Do;
const S$ = Vu, No = class No extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(No.primaryClass), this.classes.push("content");
  }
};
B(No, "primaryClass", "request-body-content");
let Mu = No;
const bz = Mu, Lo = class Lo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Lo.primaryClass), this.classes.push("examples");
  }
};
B(Lo, "primaryClass", "media-type-examples");
let Fu = Lo;
const $z = Fu, ko = class ko extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(ko.primaryClass);
  }
};
B(ko, "primaryClass", "media-type-encoding");
let Du = ko;
const Sz = Du, Uo = class Uo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Uo.primaryClass);
  }
};
B(Uo, "primaryClass", "encoding-headers");
let Nu = Uo;
const Ez = Nu, Bo = class Bo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Bo.primaryClass);
  }
};
B(Bo, "primaryClass", "response-headers");
let Lu = Bo;
const wz = Lu, qo = class qo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(qo.primaryClass), this.classes.push("content");
  }
};
B(qo, "primaryClass", "response-content");
let ku = qo;
const Oz = ku, Ho = class Ho extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Ho.primaryClass);
  }
};
B(Ho, "primaryClass", "response-links");
let Uu = Ho;
const xz = Uu, Go = class Go extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Go.primaryClass);
  }
};
B(Go, "primaryClass", "discriminator-mapping");
let Bu = Go;
const Az = Bu, Jo = class Jo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Jo.primaryClass);
  }
};
B(Jo, "primaryClass", "oauth-flow-scopes");
let qu = Jo;
const Pz = qu, zo = class zo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(zo.primaryClass);
  }
};
B(zo, "primaryClass", "link-parameters");
let Hu = zo;
const jz = Hu, Ko = class Ko extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Ko.primaryClass), this.classes.push("examples");
  }
};
B(Ko, "primaryClass", "header-examples");
let Gu = Ko;
const _z = Gu, Wo = class Wo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Wo.primaryClass), this.classes.push("content");
  }
};
B(Wo, "primaryClass", "header-content");
let Ju = Wo;
const Rz = Ju, E$ = (e) => {
  if (_e(e))
    return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, w$ = {
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
  ..._n
}, Tz = v({
  props: {
    element: null
  },
  // @ts-ignore
  methods: {
    copyMetaAndAttributes(e, t) {
      Sp(e) && t.meta.set("sourceMap", e.meta.get("sourceMap"));
    }
  }
}), O$ = Tz, Iz = v(O$, {
  props: {
    passingOptionsNames: ["specObj", "openApiGenericElement", "openApiSemanticElement"],
    specObj: null,
    openApiGenericElement: null,
    openApiSemanticElement: null
  },
  init({
    // @ts-ignore
    specObj: e = this.specObj,
    // @ts-ignore
    openApiGenericElement: t = this.openApiGenericElement,
    // @ts-ignore
    openApiSemanticElement: r = this.openApiSemanticElement
  }) {
    this.specObj = e, this.openApiGenericElement = t, this.openApiSemanticElement = r;
  },
  methods: {
    retrievePassingOptions() {
      return Av(this.passingOptionsNames, this);
    },
    retrieveFixedFields(e) {
      const t = ze(["visitors", ...e, "fixedFields"], this.specObj);
      return typeof t == "object" && t !== null ? Object.keys(t) : [];
    },
    retrieveVisitor(e) {
      return oa(Dt, ["visitors", ...e], this.specObj) ? ze(["visitors", ...e], this.specObj) : ze(["visitors", ...e, "$visitor"], this.specObj);
    },
    retrieveVisitorInstance(e, t = {}) {
      const r = this.retrievePassingOptions();
      return this.retrieveVisitor(e)({
        ...r,
        ...t
      });
    },
    toRefractedElement(e, t, r = {}) {
      const n = this.retrieveVisitorInstance(e, r), i = Object.getPrototypeOf(n);
      return Ft(this.fallbackVisitorPrototype) && (this.fallbackVisitorPrototype = Object.getPrototypeOf(this.retrieveVisitorInstance(["value"]))), this.fallbackVisitorPrototype === i ? A(t) : (Te(t, n, {
        keyMap: w$,
        nodeTypeGetter: E$,
        ...r
      }), n.element);
    }
  }
}), Ue = Iz, Cz = (e) => X(e) && e.hasKey("openapi") && e.hasKey("info"), Vz = (e) => X(e) && e.hasKey("name") && e.hasKey("in"), se = (e) => X(e) && e.hasKey("$ref"), Mz = (e) => X(e) && e.hasKey("content"), Fz = (e) => X(e) && e.hasKey("description"), x$ = X, A$ = X, Mp = (e) => G(e.key) && Pv("x-", O(e.key)), Dz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isOpenApi3_0LikeElement: Cz,
  isOpenApiExtension: Mp,
  isParameterLikeElement: Vz,
  isReferenceLikeElement: se,
  isRequestBodyLikeElement: Mz,
  isResponseLikeElement: Fz,
  isServerLikeElement: x$,
  isTagLikeElement: A$
}, Symbol.toStringTag, { value: "Module" })), Nz = v(Ue, {
  props: {
    specPath: un,
    ignoredFields: [],
    canSupportSpecificationExtensions: !0,
    specificationExtensionPredicate: Mp
  },
  init({
    // @ts-ignore
    specPath: e = this.specPath,
    // @ts-ignore
    ignoredFields: t = this.ignoredFields,
    // @ts-ignore
    canSupportSpecificationExtensions: r = this.canSupportSpecificationExtensions,
    // @ts-ignore
    specificationExtensionPredicate: n = this.specificationExtensionPredicate
  } = {}) {
    this.specPath = e, this.ignoredFields = t, this.canSupportSpecificationExtensions = r, this.specificationExtensionPredicate = n;
  },
  methods: {
    ObjectElement(e) {
      const t = this.specPath(e), r = this.retrieveFixedFields(t);
      return e.forEach((n, i, s) => {
        if (G(i) && r.includes(O(i)) && !this.ignoredFields.includes(O(i))) {
          const o = this.toRefractedElement([...t, "fixedFields", O(i)], n), a = new Ai(A(i), o);
          this.copyMetaAndAttributes(s, a), a.classes.push("fixed-field"), this.element.content.push(a);
        } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(s)) {
          const o = this.toRefractedElement(["document", "extension"], s);
          this.element.content.push(o);
        } else
          this.ignoredFields.includes(O(i)) || this.element.content.push(A(s));
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), z = Nz, Lz = v(O$, {
  methods: {
    enter(e) {
      return this.element = A(e), M;
    }
  }
}), m = Lz, kz = v(z, m, {
  props: {
    specPath: D(["document", "objects", "OpenApi"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Ma();
  },
  methods: {
    ObjectElement(e) {
      return this.unrefractedElement = e, z.compose.methods.ObjectElement.call(this, e);
    }
  }
}), Uz = kz, Bz = v(Ue, m, {
  methods: {
    StringElement(e) {
      const t = new Ui(O(e));
      return this.copyMetaAndAttributes(e, t), this.element = t, M;
    }
  }
}), qz = Bz, Hz = v(Ue, {
  methods: {
    MemberElement(e) {
      return this.element = A(e), this.element.classes.push("specification-extension"), M;
    }
  }
}), Gz = Hz, Jz = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Info"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Di();
  }
}), zz = Jz, Kz = m, Wz = Kz, Yz = m, Xz = Yz, Qz = m, Zz = Qz, e8 = v(m, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("api-version"), this.element.classes.push("version"), M;
    }
  }
}), t8 = e8, r8 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Contact"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Ci();
  }
}), n8 = r8, i8 = m, s8 = i8, o8 = m, a8 = o8, c8 = m, l8 = c8, u8 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "License"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Ni();
  }
}), f8 = u8, p8 = m, h8 = p8, d8 = m, m8 = d8, y8 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Link"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Li();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return (G(this.element.operationId) || G(this.element.operationRef)) && this.element.classes.push("reference-element"), t;
    }
  }
}), v8 = y8, g8 = v(m, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("reference-value"), M;
    }
  }
}), b8 = g8, $8 = v(m, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("reference-value"), M;
    }
  }
}), S8 = $8, E8 = v(Ue, {
  props: {
    fieldPatternPredicate: $f,
    specPath: un,
    ignoredFields: [],
    canSupportSpecificationExtensions: !1,
    specificationExtensionPredicate: Mp
  },
  init({
    // @ts-ignore
    specPath: e = this.specPath,
    // @ts-ignore
    ignoredFields: t = this.ignoredFields,
    // @ts-ignore
    canSupportSpecificationExtensions: r = this.canSupportSpecificationExtensions,
    // @ts-ignore
    specificationExtensionPredicate: n = this.specificationExtensionPredicate
  } = {}) {
    this.specPath = e, this.ignoredFields = t, this.canSupportSpecificationExtensions = r, this.specificationExtensionPredicate = n;
  },
  methods: {
    ObjectElement(e) {
      return e.forEach((t, r, n) => {
        if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(n)) {
          const i = this.toRefractedElement(["document", "extension"], n);
          this.element.content.push(i);
        } else if (!this.ignoredFields.includes(O(r)) && this.fieldPatternPredicate(O(r))) {
          const i = this.specPath(t), s = this.toRefractedElement(i, t), o = new Ai(A(r), s);
          this.copyMetaAndAttributes(n, o), o.classes.push("patterned-field"), this.element.content.push(o);
        } else
          this.ignoredFields.includes(O(r)) || this.element.content.push(A(n));
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), mn = E8, w8 = v(mn, {
  props: {
    fieldPatternPredicate: Nf
  }
}), q = w8, O8 = v(q, m, {
  props: {
    specPath: D(["value"])
  },
  init() {
    this.element = new jz();
  }
}), x8 = O8, A8 = m, P8 = A8, j8 = m, _8 = j8, R8 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Server"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Qi();
  }
}), T8 = R8, I8 = v(m, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("server-url"), M;
    }
  }
}), C8 = I8, V8 = m, M8 = V8, F8 = v(Ue, m, {
  init() {
    this.element = new Vp();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = x$(t) ? ["document", "objects", "Server"] : ["value"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), Fp = F8, D8 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "ServerVariable"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Zi();
  }
}), N8 = D8, L8 = m, k8 = L8, U8 = m, B8 = U8, q8 = m, H8 = q8, G8 = v(q, m, {
  props: {
    specPath: D(["document", "objects", "ServerVariable"])
  },
  init() {
    this.element = new sz();
  }
}), J8 = G8, z8 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "MediaType"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new ki();
  }
}), K8 = z8, W8 = v(Ue, {
  props: {
    alternator: []
  },
  methods: {
    enter(e) {
      const t = this.alternator.map(({
        predicate: n,
        specPath: i
      }) => Cf(n, D(i), $i)), r = Vv(t)(e);
      return this.element = this.toRefractedElement(r, e), M;
    }
  }
}), bt = W8, Y8 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ti || e(n) && t("callback", n) && r("object", n)), X8 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ii || e(n) && t("components", n) && r("object", n)), Q8 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ci || e(n) && t("contact", n) && r("object", n)), Z8 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Vi || e(n) && t("example", n) && r("object", n)), e4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Mi || e(n) && t("externalDocumentation", n) && r("object", n)), In = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Fi || e(n) && t("header", n) && r("object", n)), t4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Di || e(n) && t("info", n) && r("object", n)), r4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ni || e(n) && t("license", n) && r("object", n)), n4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Li || e(n) && t("link", n) && r("object", n)), i4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ui || e(n) && t("openapi", n) && r("string", n)), s4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r,
  hasClass: n
}) => (i) => i instanceof Ma || e(i) && t("openApi3_0", i) && r("object", i) && n("api", i)), P$ = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Bi || e(n) && t("operation", n) && r("object", n)), o4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof qi || e(n) && t("parameter", n) && r("object", n)), Dp = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Hi || e(n) && t("pathItem", n) && r("object", n)), a4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Gi || e(n) && t("paths", n) && r("object", n)), oe = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ji || e(n) && t("reference", n) && r("object", n)), c4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof zi || e(n) && t("requestBody", n) && r("object", n)), Ga = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ki || e(n) && t("response", n) && r("object", n)), l4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Wi || e(n) && t("responses", n) && r("object", n)), u4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ua || e(n) && t("schema", n) && r("object", n)), f4 = (e) => Pi(e) && e.classes.includes("boolean-json-schema"), p4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Xi || e(n) && t("securityRequirement", n) && r("object", n)), h4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Qi || e(n) && t("server", n) && r("object", n)), d4 = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Zi || e(n) && t("serverVariable", n) && r("object", n)), Ja = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ki || e(n) && t("mediaType", n) && r("object", n)), j$ = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r,
  hasClass: n
}) => (i) => i instanceof Vp || e(i) && t("array", i) && r("array", i) && n("servers", i)), m4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: f4,
  isCallbackElement: Y8,
  isComponentsElement: X8,
  isContactElement: Q8,
  isExampleElement: Z8,
  isExternalDocumentationElement: e4,
  isHeaderElement: In,
  isInfoElement: t4,
  isLicenseElement: r4,
  isLinkElement: n4,
  isMediaTypeElement: Ja,
  isOpenApi3_0Element: s4,
  isOpenapiElement: i4,
  isOperationElement: P$,
  isParameterElement: o4,
  isPathItemElement: Dp,
  isPathsElement: a4,
  isReferenceElement: oe,
  isRequestBodyElement: c4,
  isResponseElement: Ga,
  isResponsesElement: l4,
  isSchemaElement: u4,
  isSecurityRequirementElement: p4,
  isServerElement: h4,
  isServerVariableElement: d4,
  isServersElement: j$
}, Symbol.toStringTag, { value: "Module" })), y4 = v(bt, m, {
  props: {
    alternator: [{
      predicate: se,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "Schema"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = bt.compose.methods.enter.call(this, e);
      return oe(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), v4 = y4, g4 = m, b4 = g4, $4 = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"],
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new j(), this.element.classes.push("examples");
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "example");
      }), t;
    }
  }
}), Np = $4, S4 = v(Np, {
  init() {
    this.element = new $z();
  }
}), E4 = S4, w4 = v(q, m, {
  props: {
    specPath: D(["document", "objects", "Encoding"])
  },
  init() {
    this.element = new Sz();
  }
}), O4 = w4, x4 = v(q, m, {
  props: {
    specPath: D(["value"])
  },
  init() {
    this.element = new Xi();
  }
}), A4 = x4, P4 = v(Ue, m, {
  init() {
    this.element = new nz();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (X(t)) {
          const r = this.toRefractedElement(["document", "objects", "SecurityRequirement"], t);
          this.element.push(r);
        } else
          this.element.push(A(t));
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), j4 = P4, _4 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Components"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Ii();
  }
}), R4 = _4, T4 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Tag"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new qa();
  }
}), I4 = T4, C4 = m, V4 = C4, M4 = m, F4 = M4, D4 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Reference"]),
    canSupportSpecificationExtensions: !1
  },
  init() {
    this.element = new Ji();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return G(this.element.$ref) && this.element.classes.push("reference-element"), t;
    }
  }
}), N4 = D4, L4 = v(m, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("reference-value"), M;
    }
  }
}), k4 = L4, U4 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Parameter"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new qi();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return X(this.element.contentProp) && this.element.contentProp.filter(Ja).forEach((r, n) => {
        r.setMetaProperty("media-type", O(n));
      }), t;
    }
  }
}), B4 = U4, q4 = m, H4 = q4, G4 = m, J4 = G4, z4 = m, K4 = z4, W4 = m, Y4 = W4, X4 = m, Q4 = X4, Z4 = m, eK = Z4, tK = m, rK = tK, nK = m, iK = nK, sK = m, oK = sK, aK = v(bt, m, {
  props: {
    alternator: [{
      predicate: se,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "Schema"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = bt.compose.methods.enter.call(this, e);
      return oe(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), cK = aK, lK = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Header"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Fi();
  }
}), uK = lK, fK = m, pK = fK, hK = m, dK = hK, mK = m, yK = mK, vK = m, gK = vK, bK = m, $K = bK, SK = m, EK = SK, wK = m, OK = wK, xK = v(bt, m, {
  props: {
    alternator: [{
      predicate: se,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "Schema"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = bt.compose.methods.enter.call(this, e);
      return oe(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), AK = xK, PK = m, jK = PK, _K = v(Np, {
  init() {
    this.element = new _z();
  }
}), RK = _K, TK = v(q, m, {
  props: {
    specPath: D(["document", "objects", "MediaType"])
  },
  init() {
    this.element = new j(), this.element.classes.push("content");
  }
}), za = TK, IK = v(za, {
  init() {
    this.element = new Rz();
  }
}), CK = IK, VK = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Schema"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Ua();
  }
}), MK = VK, {
  allOf: Tm
} = Ht.visitors.document.objects.JSONSchema.fixedFields, FK = v(Tm, {
  methods: {
    ArrayElement(e) {
      const t = Tm.compose.methods.ArrayElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), t;
    }
  }
}), DK = FK, {
  anyOf: Im
} = Ht.visitors.document.objects.JSONSchema.fixedFields, NK = v(Im, {
  methods: {
    ArrayElement(e) {
      const t = Im.compose.methods.ArrayElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), t;
    }
  }
}), LK = NK, {
  oneOf: Cm
} = Ht.visitors.document.objects.JSONSchema.fixedFields, kK = v(Cm, {
  methods: {
    ArrayElement(e) {
      const t = Cm.compose.methods.ArrayElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), t;
    }
  }
}), UK = kK, {
  items: Vm
} = Ht.visitors.document.objects.JSONSchema.fixedFields, BK = v(Vm, {
  methods: {
    ObjectElement(e) {
      const t = Vm.compose.methods.ObjectElement.call(this, e);
      return oe(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    },
    ArrayElement(e) {
      return this.element = A(e), M;
    }
  }
}), qK = BK, {
  properties: Mm
} = Ht.visitors.document.objects.JSONSchema.fixedFields, HK = v(Mm, {
  methods: {
    ObjectElement(e) {
      const t = Mm.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), t;
    }
  }
}), GK = HK, {
  type: JK
} = Ht.visitors.document.objects.JSONSchema.fixedFields, zK = v(JK, {
  methods: {
    ArrayElement(e) {
      return this.element = A(e), M;
    }
  }
}), KK = zK, WK = m, YK = WK, XK = m, QK = XK, ZK = m, eW = ZK, tW = m, rW = tW, {
  JSONSchemaOrJSONReferenceVisitor: Fm
} = Ht.visitors, nW = v(Fm, {
  methods: {
    ObjectElement(e) {
      const t = Fm.compose.methods.enter.call(this, e);
      return oe(this.element) && this.element.setMetaProperty("referenced-element", "schema"), t;
    }
  }
}), Dm = nW, iW = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Discriminator"]),
    canSupportSpecificationExtensions: !1
  },
  init() {
    this.element = new Ta();
  }
}), sW = iW, oW = m, aW = oW, cW = v(q, m, {
  props: {
    specPath: D(["value"])
  },
  init() {
    this.element = new Az();
  }
}), lW = cW, uW = v(z, m, {
  props: {
    specPath: D(["document", "objects", "XML"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Ha();
  }
}), fW = uW, pW = m, hW = pW, dW = m, mW = dW, yW = m, vW = yW, gW = m, bW = gW, $W = m, SW = $W, EW = m, wW = EW, OW = v(Np, {
  init() {
    this.element = new mz();
  }
}), xW = OW, AW = v(za, {
  init() {
    this.element = new yz();
  }
}), PW = AW, jW = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Schema"]
  },
  init() {
    this.element = new v$();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "schema");
      }), t;
    }
  }
}), _W = jW, RW = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"]
  },
  init() {
    this.element = new oz();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "response");
      }), this.element.filter(Ga).forEach((r, n) => {
        r.setMetaProperty("http-status-code", O(n));
      }), t;
    }
  }
}), TW = RW, IW = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"]
  },
  init() {
    this.element = new az();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "parameter");
      }), t;
    }
  }
}), CW = IW, VW = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Example"]
  },
  init() {
    this.element = new cz();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "example");
      }), t;
    }
  }
}), MW = VW, FW = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "RequestBody"]
  },
  init() {
    this.element = new lz();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "requestBody");
      }), t;
    }
  }
}), DW = FW, NW = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"]
  },
  init() {
    this.element = new uz();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "header");
      }), this.element.filter(In).forEach((r, n) => {
        r.setMetaProperty("header-name", O(n));
      }), t;
    }
  }
}), LW = NW, kW = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "SecurityScheme"]
  },
  init() {
    this.element = new fz();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "securityScheme");
      }), t;
    }
  }
}), UW = kW, BW = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"]
  },
  init() {
    this.element = new pz();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "link");
      }), t;
    }
  }
}), qW = BW, HW = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"]
  },
  init() {
    this.element = new hz();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "callback");
      }), t;
    }
  }
}), GW = HW, JW = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Example"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Vi();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return G(this.element.externalValue) && this.element.classes.push("reference-element"), t;
    }
  }
}), zW = JW, KW = m, WW = KW, YW = m, XW = YW, QW = m, ZW = QW, e6 = v(m, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("reference-value"), M;
    }
  }
}), t6 = e6, r6 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "ExternalDocumentation"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Mi();
  }
}), n6 = r6, i6 = m, s6 = i6, o6 = m, a6 = o6, c6 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Encoding"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Ia();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return X(this.element.headers) && this.element.headers.filter(In).forEach((r, n) => {
        r.setMetaProperty("header-name", O(n));
      }), t;
    }
  }
}), l6 = c6, u6 = m, f6 = u6, p6 = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"]
  },
  init() {
    this.element = new Ez();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "header");
      }), this.element.forEach((r, n) => {
        if (!In(r))
          return;
        const i = O(n);
        r.setMetaProperty("headerName", i);
      }), t;
    }
  }
}), h6 = p6, d6 = m, m6 = d6, y6 = m, v6 = y6, g6 = m, b6 = g6, $6 = v(mn, m, {
  props: {
    fieldPatternPredicate: Vt,
    specPath: D(["document", "objects", "PathItem"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Gi();
  },
  methods: {
    ObjectElement(e) {
      const t = mn.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Dp).forEach((r, n) => {
        n.classes.push("openapi-path-template"), n.classes.push("path-template"), r.setMetaProperty("path", A(n));
      }), t;
    }
  }
}), S6 = $6, E6 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "RequestBody"])
  },
  init() {
    this.element = new zi();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return X(this.element.contentProp) && this.element.contentProp.filter(Ja).forEach((r, n) => {
        r.setMetaProperty("media-type", O(n));
      }), t;
    }
  }
}), w6 = E6, O6 = m, x6 = O6, A6 = v(za, {
  init() {
    this.element = new bz();
  }
}), P6 = A6, j6 = m, _6 = j6, R6 = v(mn, m, {
  props: {
    fieldPatternPredicate: Ff(/{(?<expression>.*)}/),
    specPath: D(["document", "objects", "PathItem"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Ti();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Dp).forEach((r, n) => {
        r.setMetaProperty("runtime-expression", O(n));
      }), t;
    }
  }
}), T6 = R6, I6 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Response"])
  },
  init() {
    this.element = new Ki();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return X(this.element.contentProp) && this.element.contentProp.filter(Ja).forEach((r, n) => {
        r.setMetaProperty("media-type", O(n));
      }), X(this.element.headers) && this.element.headers.filter(In).forEach((r, n) => {
        r.setMetaProperty("header-name", O(n));
      }), t;
    }
  }
}), C6 = I6, V6 = m, M6 = V6, F6 = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Header"]
  },
  init() {
    this.element = new wz();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "header");
      }), this.element.forEach((r, n) => {
        if (!In(r))
          return;
        const i = O(n);
        r.setMetaProperty("header-name", i);
      }), t;
    }
  }
}), D6 = F6, N6 = v(za, {
  init() {
    this.element = new Oz();
  }
}), L6 = N6, k6 = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Link"]
  },
  init() {
    this.element = new xz();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "link");
      }), t;
    }
  }
}), U6 = k6, B6 = v(z, mn, {
  props: {
    specPathFixedFields: un,
    specPathPatternedFields: un
  },
  methods: {
    ObjectElement(e) {
      const {
        specPath: t,
        ignoredFields: r
      } = this;
      try {
        this.specPath = this.specPathFixedFields;
        const n = this.retrieveFixedFields(this.specPath(e));
        this.ignoredFields = [...r, ...w0(e.keys(), n)], z.compose.methods.ObjectElement.call(this, e), this.specPath = this.specPathPatternedFields, this.ignoredFields = n, mn.compose.methods.ObjectElement.call(this, e);
      } catch (n) {
        throw this.specPath = t, n;
      }
      return M;
    }
  }
}), Nm = B6, q6 = v(Nm, m, {
  props: {
    specPathFixedFields: D(["document", "objects", "Responses"]),
    specPathPatternedFields: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Response"],
    fieldPatternPredicate: Ff(new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${_P(100, 600).join("|")})$`)),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Wi();
  },
  methods: {
    ObjectElement(e) {
      const t = Nm.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "response");
      }), this.element.filter(Ga).forEach((r, n) => {
        const i = A(n);
        this.fieldPatternPredicate(O(i)) && r.setMetaProperty("http-status-code", i);
      }), t;
    }
  }
}), H6 = q6, G6 = v(bt, m, {
  props: {
    alternator: [{
      predicate: se,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "Response"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = bt.compose.methods.enter.call(this, e);
      return oe(this.element) ? this.element.setMetaProperty("referenced-element", "response") : Ga(this.element) && this.element.setMetaProperty("http-status-code", "default"), t;
    }
  }
}), J6 = G6, z6 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "Operation"])
  },
  init() {
    this.element = new Bi();
  }
}), K6 = z6, W6 = v(m, {
  init() {
    this.element = new vz();
  },
  methods: {
    ArrayElement(e) {
      return this.element = this.element.concat(A(e)), M;
    }
  }
}), Y6 = W6, X6 = m, Q6 = X6, Z6 = m, e9 = Z6, t9 = m, r9 = t9, n9 = v(Ue, m, {
  init() {
    this.element = new ie(), this.element.classes.push("parameters");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = se(t) ? ["document", "objects", "Reference"] : ["document", "objects", "Parameter"], n = this.toRefractedElement(r, t);
        oe(n) && n.setMetaProperty("referenced-element", "parameter"), this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), _$ = n9, i9 = v(_$, {
  init() {
    this.element = new b$();
  }
}), s9 = i9, o9 = v(bt, {
  props: {
    alternator: [{
      predicate: se,
      specPath: ["document", "objects", "Reference"]
    }, {
      predicate: Vt,
      specPath: ["document", "objects", "RequestBody"]
    }]
  },
  methods: {
    ObjectElement(e) {
      const t = bt.compose.methods.enter.call(this, e);
      return oe(this.element) && this.element.setMetaProperty("referenced-element", "requestBody"), t;
    }
  }
}), a9 = o9, c9 = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "Callback"]
  },
  init() {
    this.element = new gz();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(oe).forEach((r) => {
        r.setMetaProperty("referenced-element", "callback");
      }), t;
    }
  }
}), l9 = c9, u9 = m, f9 = u9, p9 = v(Ue, m, {
  init() {
    this.element = new $$();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = X(t) ? ["document", "objects", "SecurityRequirement"] : ["value"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), h9 = p9, d9 = v(Fp, {
  init() {
    this.element = new S$();
  }
}), m9 = d9, y9 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "PathItem"])
  },
  init() {
    this.element = new Hi();
  },
  methods: {
    ObjectElement(e) {
      const t = z.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(P$).forEach((r, n) => {
        const i = A(n);
        i.content = O(i).toUpperCase(), r.setMetaProperty("http-method", i);
      }), G(this.element.$ref) && this.element.classes.push("reference-element"), t;
    }
  }
}), v9 = y9, g9 = v(m, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("reference-value"), M;
    }
  }
}), b9 = g9, $9 = m, S9 = $9, E9 = m, w9 = E9, O9 = v(Fp, {
  init() {
    this.element = new g$();
  }
}), x9 = O9, A9 = v(_$, {
  init() {
    this.element = new dz();
  }
}), P9 = A9, j9 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "SecurityScheme"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Ba();
  }
}), _9 = j9, R9 = m, T9 = R9, I9 = m, C9 = I9, V9 = m, M9 = V9, F9 = m, D9 = F9, N9 = m, L9 = N9, k9 = m, U9 = k9, B9 = m, q9 = B9, H9 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "OAuthFlows"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Va();
  }
}), G9 = H9, J9 = v(z, m, {
  props: {
    specPath: D(["document", "objects", "OAuthFlow"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Ca();
  }
}), z9 = J9, K9 = m, W9 = K9, Y9 = m, X9 = Y9, Q9 = m, Z9 = Q9, e5 = v(q, m, {
  props: {
    specPath: D(["value"])
  },
  init() {
    this.element = new Pz();
  }
}), t5 = e5, r5 = v(Ue, m, {
  init() {
    this.element = new iz();
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        const r = A$(t) ? ["document", "objects", "Tag"] : ["value"], n = this.toRefractedElement(r, t);
        this.element.push(n);
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), n5 = r5, {
  fixedFields: $e
} = Ht.visitors.document.objects.JSONSchema, i5 = {
  visitors: {
    value: m,
    document: {
      objects: {
        OpenApi: {
          $visitor: Uz,
          fixedFields: {
            openapi: qz,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            servers: Fp,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            components: {
              $ref: "#/visitors/document/objects/Components"
            },
            security: j4,
            tags: n5,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Info: {
          $visitor: zz,
          fixedFields: {
            title: Wz,
            description: Xz,
            termsOfService: Zz,
            contact: {
              $ref: "#/visitors/document/objects/Contact"
            },
            license: {
              $ref: "#/visitors/document/objects/License"
            },
            version: t8
          }
        },
        Contact: {
          $visitor: n8,
          fixedFields: {
            name: s8,
            url: a8,
            email: l8
          }
        },
        License: {
          $visitor: f8,
          fixedFields: {
            name: h8,
            url: m8
          }
        },
        Server: {
          $visitor: T8,
          fixedFields: {
            url: C8,
            description: M8,
            variables: J8
          }
        },
        ServerVariable: {
          $visitor: N8,
          fixedFields: {
            enum: k8,
            default: B8,
            description: H8
          }
        },
        Components: {
          $visitor: R4,
          fixedFields: {
            schemas: _W,
            responses: TW,
            parameters: CW,
            examples: MW,
            requestBodies: DW,
            headers: LW,
            securitySchemes: UW,
            links: qW,
            callbacks: GW
          }
        },
        Paths: {
          $visitor: S6
        },
        PathItem: {
          $visitor: v9,
          fixedFields: {
            $ref: b9,
            summary: S9,
            description: w9,
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
            servers: x9,
            parameters: P9
          }
        },
        Operation: {
          $visitor: K6,
          fixedFields: {
            tags: Y6,
            summary: Q6,
            description: e9,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            operationId: r9,
            parameters: s9,
            requestBody: a9,
            responses: {
              $ref: "#/visitors/document/objects/Responses"
            },
            callbacks: l9,
            deprecated: f9,
            security: h9,
            servers: m9
          }
        },
        ExternalDocumentation: {
          $visitor: n6,
          fixedFields: {
            description: s6,
            url: a6
          }
        },
        Parameter: {
          $visitor: B4,
          fixedFields: {
            name: H4,
            in: J4,
            description: K4,
            required: Y4,
            deprecated: Q4,
            allowEmptyValue: eK,
            style: rK,
            explode: iK,
            allowReserved: oK,
            schema: cK,
            example: wW,
            examples: xW,
            content: PW
          }
        },
        RequestBody: {
          $visitor: w6,
          fixedFields: {
            description: x6,
            content: P6,
            required: _6
          }
        },
        MediaType: {
          $visitor: K8,
          fixedFields: {
            schema: v4,
            example: b4,
            examples: E4,
            encoding: O4
          }
        },
        Encoding: {
          $visitor: l6,
          fixedFields: {
            contentType: f6,
            headers: h6,
            style: m6,
            explode: v6,
            allowReserved: b6
          }
        },
        Responses: {
          $visitor: H6,
          fixedFields: {
            default: J6
          }
        },
        Response: {
          $visitor: C6,
          fixedFields: {
            description: M6,
            headers: D6,
            content: L6,
            links: U6
          }
        },
        Callback: {
          $visitor: T6
        },
        Example: {
          $visitor: zW,
          fixedFields: {
            summary: WW,
            description: XW,
            value: ZW,
            externalValue: t6
          }
        },
        Link: {
          $visitor: v8,
          fixedFields: {
            operationRef: b8,
            operationId: S8,
            parameters: x8,
            requestBody: P8,
            description: _8,
            server: {
              $ref: "#/visitors/document/objects/Server"
            }
          }
        },
        Header: {
          $visitor: uK,
          fixedFields: {
            description: pK,
            required: dK,
            deprecated: yK,
            allowEmptyValue: gK,
            style: $K,
            explode: EK,
            allowReserved: OK,
            schema: AK,
            example: jK,
            examples: RK,
            content: CK
          }
        },
        Tag: {
          $visitor: I4,
          fixedFields: {
            name: V4,
            description: F4,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: N4,
          fixedFields: {
            $ref: k4
          }
        },
        JSONSchema: {
          $ref: "#/visitors/document/objects/Schema"
        },
        JSONReference: {
          $ref: "#/visitors/document/objects/Reference"
        },
        Schema: {
          $visitor: MK,
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
            type: KK,
            allOf: DK,
            anyOf: LK,
            oneOf: UK,
            not: Dm,
            items: qK,
            properties: GK,
            additionalProperties: Dm,
            description: $e.description,
            format: $e.format,
            default: $e.default,
            // OpenAPI vocabulary
            nullable: YK,
            discriminator: {
              $ref: "#/visitors/document/objects/Discriminator"
            },
            writeOnly: QK,
            xml: {
              $ref: "#/visitors/document/objects/XML"
            },
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            },
            example: eW,
            deprecated: rW
          }
        },
        Discriminator: {
          $visitor: sW,
          fixedFields: {
            propertyName: aW,
            mapping: lW
          }
        },
        XML: {
          $visitor: fW,
          fixedFields: {
            name: hW,
            namespace: mW,
            prefix: vW,
            attribute: bW,
            wrapped: SW
          }
        },
        SecurityScheme: {
          $visitor: _9,
          fixedFields: {
            type: T9,
            description: C9,
            name: M9,
            in: D9,
            scheme: L9,
            bearerFormat: U9,
            flows: {
              $ref: "#/visitors/document/objects/OAuthFlows"
            },
            openIdConnectUrl: q9
          }
        },
        OAuthFlows: {
          $visitor: G9,
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
          $visitor: z9,
          fixedFields: {
            authorizationUrl: W9,
            tokenUrl: X9,
            refreshUrl: Z9,
            scopes: t5
          }
        },
        SecurityRequirement: {
          $visitor: A4
        }
      },
      extension: {
        $visitor: Gz
      }
    }
  }
}, $ = i5, s5 = () => {
  const e = Pn(rz);
  return {
    predicates: {
      ...Dz,
      ...m4,
      isStringElement: G
    },
    namespace: e
  };
}, o5 = s5, a5 = (e, {
  specPath: t = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = gp(e), i = xa($), s = fn(t, [], i);
  return Te(n, s, {
    state: {
      specObj: i
    }
  }), ji(s.element, r, {
    toolboxCreator: o5,
    visitorOptions: {
      keyMap: w$,
      nodeTypeGetter: E$
    }
  });
}, ee = (e) => (t, r = {}) => a5(t, {
  specPath: e,
  ...r
});
Ti.refract = ee(["visitors", "document", "objects", "Callback", "$visitor"]);
Ii.refract = ee(["visitors", "document", "objects", "Components", "$visitor"]);
Ci.refract = ee(["visitors", "document", "objects", "Contact", "$visitor"]);
Vi.refract = ee(["visitors", "document", "objects", "Example", "$visitor"]);
Ta.refract = ee(["visitors", "document", "objects", "Discriminator", "$visitor"]);
Ia.refract = ee(["visitors", "document", "objects", "Encoding", "$visitor"]);
Mi.refract = ee(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Fi.refract = ee(["visitors", "document", "objects", "Header", "$visitor"]);
Di.refract = ee(["visitors", "document", "objects", "Info", "$visitor"]);
Ni.refract = ee(["visitors", "document", "objects", "License", "$visitor"]);
Li.refract = ee(["visitors", "document", "objects", "Link", "$visitor"]);
ki.refract = ee(["visitors", "document", "objects", "MediaType", "$visitor"]);
Ca.refract = ee(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Va.refract = ee(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
Ui.refract = ee(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
Ma.refract = ee(["visitors", "document", "objects", "OpenApi", "$visitor"]);
Bi.refract = ee(["visitors", "document", "objects", "Operation", "$visitor"]);
qi.refract = ee(["visitors", "document", "objects", "Parameter", "$visitor"]);
Hi.refract = ee(["visitors", "document", "objects", "PathItem", "$visitor"]);
Gi.refract = ee(["visitors", "document", "objects", "Paths", "$visitor"]);
Ji.refract = ee(["visitors", "document", "objects", "Reference", "$visitor"]);
zi.refract = ee(["visitors", "document", "objects", "RequestBody", "$visitor"]);
Ki.refract = ee(["visitors", "document", "objects", "Response", "$visitor"]);
Wi.refract = ee(["visitors", "document", "objects", "Responses", "$visitor"]);
Ua.refract = ee(["visitors", "document", "objects", "Schema", "$visitor"]);
Xi.refract = ee(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Ba.refract = ee(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
Qi.refract = ee(["visitors", "document", "objects", "Server", "$visitor"]);
Zi.refract = ee(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
qa.refract = ee(["visitors", "document", "objects", "Tag", "$visitor"]);
Ha.refract = ee(["visitors", "document", "objects", "XML", "$visitor"]);
class c5 extends Ti {
}
const Ka = c5;
class l5 extends Ii {
  get pathItems() {
    return this.get("pathItems");
  }
  set pathItems(t) {
    this.set("pathItems", t);
  }
}
const Wa = l5;
class u5 extends Ci {
}
const Ya = u5;
class f5 extends Ta {
}
const Lp = f5;
class p5 extends Ia {
}
const kp = p5;
class h5 extends Vi {
}
const Xa = h5;
class d5 extends Mi {
}
const Qa = d5;
class m5 extends Fi {
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
}
const Za = m5;
class y5 extends Di {
  get license() {
    return this.get("license");
  }
  set license(t) {
    this.set("license", t);
  }
  get summary() {
    return this.get("summary");
  }
  set summary(t) {
    this.set("summary", t);
  }
}
const ec = y5, Yo = class Yo extends Rt {
  constructor(t, r, n) {
    super(t, r, n), this.element = "jsonSchemaDialect";
  }
};
B(Yo, "default", new Yo("https://spec.openapis.org/oas/3.1/dialect/base"));
let zu = Yo;
const es = zu;
class v5 extends Ni {
  get identifier() {
    return this.get("identifier");
  }
  set identifier(t) {
    this.set("identifier", t);
  }
}
const tc = v5;
class g5 extends Li {
}
const rc = g5;
class b5 extends ki {
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
}
const nc = b5;
class $5 extends Ca {
}
const Up = $5;
class S5 extends Va {
}
const Bp = S5;
class E5 extends Ui {
}
const qp = E5;
class w5 extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "openApi3_1", this.classes.push("api");
  }
  get openapi() {
    return this.get("openapi");
  }
  set openapi(t) {
    this.set("openapi", t);
  }
  get info() {
    return this.get("info");
  }
  set info(t) {
    this.set("info", t);
  }
  get jsonSchemaDialect() {
    return this.get("jsonSchemaDialect");
  }
  set jsonSchemaDialect(t) {
    this.set("jsonSchemaDialect", t);
  }
  get servers() {
    return this.get("servers");
  }
  set servers(t) {
    this.set("servers", t);
  }
  get paths() {
    return this.get("paths");
  }
  set paths(t) {
    this.set("paths", t);
  }
  get components() {
    return this.get("components");
  }
  set components(t) {
    this.set("components", t);
  }
  get security() {
    return this.get("security");
  }
  set security(t) {
    this.set("security", t);
  }
  get tags() {
    return this.get("tags");
  }
  set tags(t) {
    this.set("tags", t);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  set externalDocs(t) {
    this.set("externalDocs", t);
  }
  get webhooks() {
    return this.get("webhooks");
  }
  set webhooks(t) {
    this.set("webhooks", t);
  }
}
const ur = w5;
class O5 extends Bi {
  get requestBody() {
    return this.get("requestBody");
  }
  set requestBody(t) {
    this.set("requestBody", t);
  }
}
const ts = O5;
class x5 extends qi {
  get schema() {
    return this.get("schema");
  }
  set schema(t) {
    this.set("schema", t);
  }
}
const ic = x5;
class A5 extends Hi {
  get GET() {
    return this.get("get");
  }
  set GET(t) {
    this.set("GET", t);
  }
  get PUT() {
    return this.get("put");
  }
  set PUT(t) {
    this.set("PUT", t);
  }
  get POST() {
    return this.get("post");
  }
  set POST(t) {
    this.set("POST", t);
  }
  get DELETE() {
    return this.get("delete");
  }
  set DELETE(t) {
    this.set("DELETE", t);
  }
  get OPTIONS() {
    return this.get("options");
  }
  set OPTIONS(t) {
    this.set("OPTIONS", t);
  }
  get HEAD() {
    return this.get("head");
  }
  set HEAD(t) {
    this.set("HEAD", t);
  }
  get PATCH() {
    return this.get("patch");
  }
  set PATCH(t) {
    this.set("PATCH", t);
  }
  get TRACE() {
    return this.get("trace");
  }
  set TRACE(t) {
    this.set("TRACE", t);
  }
}
const vt = A5;
class P5 extends Gi {
}
const sc = P5;
class Hp extends Ji {
}
Object.defineProperty(Hp.prototype, "description", {
  get() {
    return this.get("description");
  },
  set(e) {
    this.set("description", e);
  },
  enumerable: !0
});
Object.defineProperty(Hp.prototype, "summary", {
  get() {
    return this.get("summary");
  },
  set(e) {
    this.set("summary", e);
  },
  enumerable: !0
});
const er = Hp;
class j5 extends zi {
}
const oc = j5;
let _5 = class extends Ki {
};
const ac = _5;
class R5 extends Wi {
}
const cc = R5;
class T5 extends j {
  constructor(t, r, n) {
    super(t, r, n), this.element = "schema";
  }
  /**
   * Core vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/core
   */
  get $schema() {
    return this.get("$schema");
  }
  set $schema(t) {
    this.set("$schema", t);
  }
  get $vocabulary() {
    return this.get("$vocabulary");
  }
  set $vocabulary(t) {
    this.set("$vocabulary", t);
  }
  get $id() {
    return this.get("$id");
  }
  set $id(t) {
    this.set("$id", t);
  }
  get $anchor() {
    return this.get("$anchor");
  }
  set $anchor(t) {
    this.set("$anchor", t);
  }
  get $dynamicAnchor() {
    return this.get("$dynamicAnchor");
  }
  set $dynamicAnchor(t) {
    this.set("$dynamicAnchor", t);
  }
  get $dynamicRef() {
    return this.get("$dynamicRef");
  }
  set $dynamicRef(t) {
    this.set("$dynamicRef", t);
  }
  get $ref() {
    return this.get("$ref");
  }
  set $ref(t) {
    this.set("$ref", t);
  }
  get $defs() {
    return this.get("$defs");
  }
  set $defs(t) {
    this.set("$defs", t);
  }
  get $comment() {
    return this.get("$comment");
  }
  set $comment(t) {
    this.set("$comment", t);
  }
  /**
   * Applicator vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/applicator
   */
  get allOf() {
    return this.get("allOf");
  }
  set allOf(t) {
    this.set("allOf", t);
  }
  get anyOf() {
    return this.get("anyOf");
  }
  set anyOf(t) {
    this.set("anyOf", t);
  }
  get oneOf() {
    return this.get("oneOf");
  }
  set oneOf(t) {
    this.set("oneOf", t);
  }
  get not() {
    return this.get("not");
  }
  set not(t) {
    this.set("not", t);
  }
  get if() {
    return this.get("if");
  }
  set if(t) {
    this.set("if", t);
  }
  get then() {
    return this.get("then");
  }
  set then(t) {
    this.set("then", t);
  }
  get else() {
    return this.get("else");
  }
  set else(t) {
    this.set("else", t);
  }
  get dependentSchemas() {
    return this.get("dependentSchemas");
  }
  set dependentSchemas(t) {
    this.set("dependentSchemas", t);
  }
  get prefixItems() {
    return this.get("prefixItems");
  }
  set prefixItems(t) {
    this.set("prefixItems", t);
  }
  get items() {
    return this.get("items");
  }
  set items(t) {
    this.set("items", t);
  }
  get containsProp() {
    return this.get("contains");
  }
  set containsProp(t) {
    this.set("contains", t);
  }
  get properties() {
    return this.get("properties");
  }
  set properties(t) {
    this.set("properties", t);
  }
  get patternProperties() {
    return this.get("patternProperties");
  }
  set patternProperties(t) {
    this.set("patternProperties", t);
  }
  get additionalProperties() {
    return this.get("additionalProperties");
  }
  set additionalProperties(t) {
    this.set("additionalProperties", t);
  }
  get propertyNames() {
    return this.get("propertyNames");
  }
  set propertyNames(t) {
    this.set("propertyNames", t);
  }
  /**
   * Unevaluated Locations vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/unevaluated
   */
  get unevaluatedItems() {
    return this.get("unevaluatedItems");
  }
  set unevaluatedItems(t) {
    this.set("unevaluatedItems", t);
  }
  get unevaluatedProperties() {
    return this.get("unevaluatedProperties");
  }
  set unevaluatedProperties(t) {
    this.set("unevaluatedProperties", t);
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
  set type(t) {
    this.set("type", t);
  }
  get enum() {
    return this.get("enum");
  }
  set enum(t) {
    this.set("enum", t);
  }
  get const() {
    return this.get("const");
  }
  set const(t) {
    this.set("const", t);
  }
  /**
   * Validation Keywords for Numeric Instances (number and integer)
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#numeric
   */
  get multipleOf() {
    return this.get("multipleOf");
  }
  set multipleOf(t) {
    this.set("multipleOf", t);
  }
  get maximum() {
    return this.get("maximum");
  }
  set maximum(t) {
    this.set("maximum", t);
  }
  get exclusiveMaximum() {
    return this.get("exclusiveMaximum");
  }
  set exclusiveMaximum(t) {
    this.set("exclusiveMaximum", t);
  }
  get minimum() {
    return this.get("minimum");
  }
  set minimum(t) {
    this.set("minimum", t);
  }
  get exclusiveMinimum() {
    return this.get("exclusiveMinimum");
  }
  set exclusiveMinimum(t) {
    this.set("exclusiveMinimum", t);
  }
  /**
   * Validation Keywords for Strings
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#string
   */
  get maxLength() {
    return this.get("maxLength");
  }
  set maxLength(t) {
    this.set("maxLength", t);
  }
  get minLength() {
    return this.get("minLength");
  }
  set minLength(t) {
    this.set("minLength", t);
  }
  get pattern() {
    return this.get("pattern");
  }
  set pattern(t) {
    this.set("pattern", t);
  }
  /**
   * Validation Keywords for Arrays
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.4
   */
  get maxItems() {
    return this.get("maxItems");
  }
  set maxItems(t) {
    this.set("maxItems", t);
  }
  get minItems() {
    return this.get("minItems");
  }
  set minItems(t) {
    this.set("minItems", t);
  }
  get uniqueItems() {
    return this.get("uniqueItems");
  }
  set uniqueItems(t) {
    this.set("uniqueItems", t);
  }
  get maxContains() {
    return this.get("maxContains");
  }
  set maxContains(t) {
    this.set("maxContains", t);
  }
  get minContains() {
    return this.get("minContains");
  }
  set minContains(t) {
    this.set("minContains", t);
  }
  /**
   * Validation Keywords for Objects
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.5
   */
  get maxProperties() {
    return this.get("maxProperties");
  }
  set maxProperties(t) {
    this.set("maxProperties", t);
  }
  get minProperties() {
    return this.get("minProperties");
  }
  set minProperties(t) {
    this.set("minProperties", t);
  }
  get required() {
    return this.get("required");
  }
  set required(t) {
    this.set("required", t);
  }
  get dependentRequired() {
    return this.get("dependentRequired");
  }
  set dependentRequired(t) {
    this.set("dependentRequired", t);
  }
  /**
   * Vocabulary for Basic Meta-Data Annotations
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/meta-data
   */
  get title() {
    return this.get("title");
  }
  set title(t) {
    this.set("title", t);
  }
  get description() {
    return this.get("description");
  }
  set description(t) {
    this.set("description", t);
  }
  get default() {
    return this.get("default");
  }
  set default(t) {
    this.set("default", t);
  }
  get deprecated() {
    return this.get("deprecated");
  }
  set deprecated(t) {
    this.set("deprecated", t);
  }
  get readOnly() {
    return this.get("readOnly");
  }
  set readOnly(t) {
    this.set("readOnly", t);
  }
  get writeOnly() {
    return this.get("writeOnly");
  }
  set writeOnly(t) {
    this.set("writeOnly", t);
  }
  get examples() {
    return this.get("examples");
  }
  set examples(t) {
    this.set("examples", t);
  }
  /**
   * Vocabularies for Semantic Content With "format"
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/format-annotation
   */
  get format() {
    return this.get("format");
  }
  set format(t) {
    this.set("format", t);
  }
  /**
   * Vocabulary for the Contents of String-Encoded Data
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/content
   */
  get contentEncoding() {
    return this.get("contentEncoding");
  }
  set contentEncoding(t) {
    this.set("contentEncoding", t);
  }
  get contentMediaType() {
    return this.get("contentMediaType");
  }
  set contentMediaType(t) {
    this.set("contentMediaType", t);
  }
  get contentSchema() {
    return this.get("contentSchema");
  }
  set contentSchema(t) {
    this.set("contentSchema", t);
  }
  /**
   * OAS base vocabulary
   *
   * URI: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#baseVocabulary
   */
  get discriminator() {
    return this.get("discriminator");
  }
  set discriminator(t) {
    this.set("discriminator", t);
  }
  get xml() {
    return this.get("xml");
  }
  set xml(t) {
    this.set("xml", t);
  }
  get externalDocs() {
    return this.get("externalDocs");
  }
  set externalDocs(t) {
    this.set("externalDocs", t);
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
  set example(t) {
    this.set("example", t);
  }
}
const Ct = T5;
class I5 extends Xi {
}
const lc = I5;
class C5 extends Ba {
}
const Gp = C5;
class V5 extends Qi {
}
const uc = V5;
class M5 extends Zi {
}
const fc = M5;
class F5 extends qa {
}
const Jp = F5;
class D5 extends Ha {
}
const zp = D5, N5 = {
  namespace: (e) => {
    const {
      base: t
    } = e;
    return t.register("callback", Ka), t.register("components", Wa), t.register("contact", Ya), t.register("discriminator", Lp), t.register("encoding", kp), t.register("example", Xa), t.register("externalDocumentation", Qa), t.register("header", Za), t.register("info", ec), t.register("jsonSchemaDialect", es), t.register("license", tc), t.register("link", rc), t.register("mediaType", nc), t.register("oAuthFlow", Up), t.register("oAuthFlows", Bp), t.register("openapi", qp), t.register("openApi3_1", ur), t.register("operation", ts), t.register("parameter", ic), t.register("pathItem", vt), t.register("paths", sc), t.register("reference", er), t.register("requestBody", oc), t.register("response", ac), t.register("responses", cc), t.register("schema", Ct), t.register("securityRequirement", lc), t.register("securityScheme", Gp), t.register("server", uc), t.register("serverVariable", fc), t.register("tag", Jp), t.register("xml", zp), t;
  }
}, pc = N5, Xo = class Xo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Xo.primaryClass);
  }
};
B(Xo, "primaryClass", "components-path-items");
let Ku = Xo;
const L5 = Ku, Qo = class Qo extends j {
  constructor(t, r, n) {
    super(t, r, n), this.classes.push(Qo.primaryClass);
  }
};
B(Qo, "primaryClass", "webhooks");
let Wu = Qo;
const k5 = Wu, ke = (e) => {
  if (_e(e))
    return `${e.element.charAt(0).toUpperCase() + e.element.slice(1)}Element`;
}, qe = {
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
  ..._n
}, U5 = () => ({
  predicates: e
}) => {
  const t = (n, i) => !e.isParameterElement(n) || !e.isParameterElement(i) || !e.isStringElement(n.name) || !e.isStringElement(n.in) || !e.isStringElement(i.name) || !e.isStringElement(i.in) ? !1 : O(n.name) === O(i.name) && O(n.in) === O(i.in), r = [];
  return {
    visitor: {
      PathItemElement: {
        enter(n, i, s, o, a) {
          if (a.some(e.isComponentsElement))
            return;
          const {
            parameters: c
          } = n;
          e.isArrayElement(c) ? r.push([...c.content]) : r.push([]);
        },
        leave() {
          r.pop();
        }
      },
      OperationElement: {
        leave(n) {
          const i = sa(r);
          if (!Array.isArray(i) || i.length === 0)
            return;
          const s = xv([], ["parameters", "content"], n), o = BP(t, [...s, ...i]);
          n.parameters = new b$(o);
        }
      }
    }
  };
}, B5 = U5, q5 = () => ({
  predicates: e
}) => {
  let t;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(r) {
          e.isArrayElement(r.security) && (t = r.security);
        },
        leave() {
          t = void 0;
        }
      },
      OperationElement: {
        leave(r, n, i, s, o) {
          if (o.some(e.isComponentsElement))
            return;
          if (typeof r.security > "u" && typeof t < "u") {
            var l;
            r.security = new $$((l = t) === null || l === void 0 ? void 0 : l.content);
          }
        }
      }
    }
  };
}, H5 = q5, G5 = () => ({
  predicates: e,
  namespace: t
}) => ({
  visitor: {
    OpenApi3_1Element(r) {
      const n = typeof r.servers > "u", i = e.isArrayElement(r.servers), s = i && r.servers.length === 0, o = t.elements.Server.refract({
        url: "/"
      });
      n || !i ? r.servers = new Vp([o]) : i && s && r.servers.push(o);
    },
    PathItemElement(r, n, i, s, o) {
      if (o.some(e.isComponentsElement) || !o.some(e.isOpenApi3_1Element))
        return;
      const a = o.find(e.isOpenApi3_1Element), c = typeof r.servers > "u", l = e.isArrayElement(r.servers), f = l && r.servers.length === 0;
      if (e.isOpenApi3_1Element(a)) {
        var u;
        const h = (u = a.servers) === null || u === void 0 ? void 0 : u.content, p = h ?? [];
        c || !l ? r.servers = new g$(p) : l && f && p.forEach((d) => {
          r.servers.push(d);
        });
      }
    },
    OperationElement(r, n, i, s, o) {
      if (o.some(e.isComponentsElement) || !o.some(e.isOpenApi3_1Element))
        return;
      const a = [...o].reverse().find(e.isPathItemElement), c = typeof r.servers > "u", l = e.isArrayElement(r.servers), f = l && r.servers.length === 0;
      if (e.isPathItemElement(a)) {
        var u;
        const h = (u = a.servers) === null || u === void 0 ? void 0 : u.content, p = h ?? [];
        c || !l ? r.servers = new S$(p) : l && f && p.forEach((d) => {
          r.servers.push(d);
        });
      }
    }
  }
}), J5 = G5, Yu = (e) => e.replace(/\s/g, ""), Xu = (e) => e.replace(/\W/gi, "_"), z5 = (e, t) => {
  const r = Xu(Yu(t.toLowerCase())), n = Xu(Yu(e));
  return `${r}${n}`;
}, K5 = (e, t, r) => {
  const n = Yu(e);
  return n.length > 0 ? Xu(n) : z5(t, r);
}, W5 = ({
  operationIdNormalizer: e = K5
} = {}) => ({
  predicates: t,
  namespace: r
}) => {
  const n = [], i = [], s = [];
  return {
    visitor: {
      OpenApi3_1Element: {
        leave() {
          const o = K0((a) => O(a.operationId), i);
          Object.entries(o).forEach(([a, c]) => {
            Array.isArray(c) && (c.length <= 1 || c.forEach((l, f) => {
              const u = `${a}${f + 1}`;
              l.operationId = new r.elements.String(u);
            }));
          }), s.forEach((a) => {
            if (typeof a.operationId > "u")
              return;
            const c = String(O(a.operationId)), l = i.find((f) => O(f.meta.get("originalOperationId")) === c);
            typeof l > "u" || (a.operationId = A.safe(l.operationId), a.meta.set("originalOperationId", c), a.set("__originalOperationId", c));
          }), i.length = 0, s.length = 0;
        }
      },
      PathItemElement: {
        enter(o) {
          const a = wr("path", O(o.meta.get("path")));
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
          const a = String(O(o.operationId)), c = sa(n), l = wr("method", O(o.meta.get("http-method"))), f = e(a, c, l);
          a !== f && (o.operationId = new r.elements.String(f), o.set("__originalOperationId", a), o.meta.set("originalOperationId", a), i.push(o));
        }
      },
      LinkElement: {
        leave(o) {
          t.isLinkElement(o) && (typeof o.operationId > "u" || s.push(o));
        }
      }
    }
  };
}, Y5 = W5, X5 = () => ({
  predicates: e
}) => ({
  visitor: {
    ParameterElement: {
      leave(t, r, n, i, s) {
        var o, a;
        if (!s.some(e.isComponentsElement) && !(typeof t.schema > "u" || !e.isSchemaElement(t.schema)) && !(typeof ((o = t.schema) === null || o === void 0 ? void 0 : o.example) > "u" && typeof ((a = t.schema) === null || a === void 0 ? void 0 : a.examples) > "u")) {
          if (typeof t.examples < "u" && e.isObjectElement(t.examples)) {
            const c = t.examples.map((l) => A.safe(l.value));
            typeof t.schema.examples < "u" && t.schema.set("examples", c), typeof t.schema.example < "u" && t.schema.set("example", c);
            return;
          }
          typeof t.example < "u" && (typeof t.schema.examples < "u" && t.schema.set("examples", [A(t.example)]), typeof t.schema.example < "u" && t.schema.set("example", A(t.example)));
        }
      }
    }
  }
}), Q5 = X5, Z5 = () => ({
  predicates: e
}) => ({
  visitor: {
    HeaderElement: {
      leave(t, r, n, i, s) {
        var o, a;
        if (!s.some(e.isComponentsElement) && !(typeof t.schema > "u" || !e.isSchemaElement(t.schema)) && !(typeof ((o = t.schema) === null || o === void 0 ? void 0 : o.example) > "u" && typeof ((a = t.schema) === null || a === void 0 ? void 0 : a.examples) > "u")) {
          if (typeof t.examples < "u" && e.isObjectElement(t.examples)) {
            const c = t.examples.map((l) => A.safe(l.value));
            typeof t.schema.examples < "u" && t.schema.set("examples", c), typeof t.schema.example < "u" && t.schema.set("example", c);
            return;
          }
          typeof t.example < "u" && (typeof t.schema.examples < "u" && t.schema.set("examples", [A(t.example)]), typeof t.schema.example < "u" && t.schema.set("example", A(t.example)));
        }
      }
    }
  }
}), eY = Z5, tY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ka || e(n) && t("callback", n) && r("object", n)), rY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Wa || e(n) && t("components", n) && r("object", n)), nY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ya || e(n) && t("contact", n) && r("object", n)), iY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Xa || e(n) && t("example", n) && r("object", n)), sY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Qa || e(n) && t("externalDocumentation", n) && r("object", n)), oY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Za || e(n) && t("header", n) && r("object", n)), aY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ec || e(n) && t("info", n) && r("object", n)), R$ = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof es || e(n) && t("jsonSchemaDialect", n) && r("string", n)), cY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof tc || e(n) && t("license", n) && r("object", n)), lY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof rc || e(n) && t("link", n) && r("object", n)), uY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof qp || e(n) && t("openapi", n) && r("string", n)), Kp = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r,
  hasClass: n
}) => (i) => i instanceof ur || e(i) && t("openApi3_1", i) && r("object", i) && n("api", i)), T$ = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ts || e(n) && t("operation", n) && r("object", n)), fY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ic || e(n) && t("parameter", n) && r("object", n)), hc = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof vt || e(n) && t("pathItem", n) && r("object", n)), I$ = (e) => {
  if (!hc(e) || !G(e.$ref))
    return !1;
  const t = O(e.$ref);
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, pY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof sc || e(n) && t("paths", n) && r("object", n)), Cn = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof er || e(n) && t("reference", n) && r("object", n)), C$ = (e) => {
  if (!Cn(e) || !G(e.$ref))
    return !1;
  const t = O(e.$ref);
  return typeof t == "string" && t.length > 0 && !t.startsWith("#");
}, hY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof oc || e(n) && t("requestBody", n) && r("object", n)), dY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof ac || e(n) && t("response", n) && r("object", n)), mY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof cc || e(n) && t("responses", n) && r("object", n)), Vn = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof Ct || e(n) && t("schema", n) && r("object", n)), Wp = (e) => Pi(e) && e.classes.includes("boolean-json-schema"), yY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof lc || e(n) && t("securityRequirement", n) && r("object", n)), vY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof uc || e(n) && t("server", n) && r("object", n)), gY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof fc || e(n) && t("serverVariable", n) && r("object", n)), bY = R(({
  hasBasicElementProps: e,
  isElementType: t,
  primitiveEq: r
}) => (n) => n instanceof nc || e(n) && t("mediaType", n) && r("object", n)), $Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBooleanJsonSchemaElement: Wp,
  isCallbackElement: tY,
  isComponentsElement: rY,
  isContactElement: nY,
  isExampleElement: iY,
  isExternalDocumentationElement: sY,
  isHeaderElement: oY,
  isInfoElement: aY,
  isJsonSchemaDialectElement: R$,
  isLicenseElement: cY,
  isLinkElement: lY,
  isMediaTypeElement: bY,
  isOpenApi3_1Element: Kp,
  isOpenapiElement: uY,
  isOperationElement: T$,
  isParameterElement: fY,
  isPathItemElement: hc,
  isPathItemElementExternal: I$,
  isPathsElement: pY,
  isReferenceElement: Cn,
  isReferenceElementExternal: C$,
  isRequestBodyElement: hY,
  isResponseElement: dY,
  isResponsesElement: mY,
  isSchemaElement: Vn,
  isSecurityRequirementElement: yY,
  isServerElement: vY,
  isServerVariableElement: gY
}, Symbol.toStringTag, { value: "Module" })), SY = () => {
  const e = Pn(pc);
  return {
    predicates: {
      ...$Y,
      isElement: _e,
      isStringElement: G,
      isArrayElement: et,
      isObjectElement: X,
      isMemberElement: Ke,
      isServersElement: j$,
      includesClasses: Wn
    },
    namespace: e
  };
}, V$ = SY, EY = v(z, m, {
  props: {
    specPath: D(["document", "objects", "OpenApi"]),
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new ur(), this.openApiSemanticElement = this.element;
  },
  methods: {
    ObjectElement(e) {
      return this.openApiGenericElement = e, z.compose.methods.ObjectElement.call(this, e);
    }
  }
}), wY = EY, {
  visitors: {
    document: {
      objects: {
        Info: {
          $visitor: OY
        }
      }
    }
  }
} = $, xY = v(OY, {
  init() {
    this.element = new ec();
  }
}), AY = xY, PY = m, jY = PY, {
  visitors: {
    document: {
      objects: {
        Contact: {
          $visitor: _Y
        }
      }
    }
  }
} = $, RY = v(_Y, {
  init() {
    this.element = new Ya();
  }
}), TY = RY, {
  visitors: {
    document: {
      objects: {
        License: {
          $visitor: IY
        }
      }
    }
  }
} = $, CY = v(IY, {
  init() {
    this.element = new tc();
  }
}), VY = CY, MY = m, FY = MY, {
  visitors: {
    document: {
      objects: {
        Link: {
          $visitor: DY
        }
      }
    }
  }
} = $, NY = v(DY, {
  init() {
    this.element = new rc();
  }
}), LY = NY, kY = v(Ue, m, {
  methods: {
    StringElement(e) {
      const t = new es(O(e));
      return this.copyMetaAndAttributes(e, t), this.element = t, M;
    }
  }
}), UY = kY, {
  visitors: {
    document: {
      objects: {
        Server: {
          $visitor: BY
        }
      }
    }
  }
} = $, qY = v(BY, {
  init() {
    this.element = new uc();
  }
}), HY = qY, {
  visitors: {
    document: {
      objects: {
        ServerVariable: {
          $visitor: GY
        }
      }
    }
  }
} = $, JY = v(GY, {
  init() {
    this.element = new fc();
  }
}), zY = JY, {
  visitors: {
    document: {
      objects: {
        MediaType: {
          $visitor: KY
        }
      }
    }
  }
} = $, WY = v(KY, {
  init() {
    this.element = new nc();
  }
}), YY = WY, {
  visitors: {
    document: {
      objects: {
        SecurityRequirement: {
          $visitor: XY
        }
      }
    }
  }
} = $, QY = v(XY, {
  init() {
    this.element = new lc();
  }
}), ZY = QY, {
  visitors: {
    document: {
      objects: {
        Components: {
          $visitor: e7
        }
      }
    }
  }
} = $, t7 = v(e7, {
  init() {
    this.element = new Wa();
  }
}), r7 = t7, {
  visitors: {
    document: {
      objects: {
        Tag: {
          $visitor: n7
        }
      }
    }
  }
} = $, i7 = v(n7, {
  init() {
    this.element = new Jp();
  }
}), s7 = i7, {
  visitors: {
    document: {
      objects: {
        Reference: {
          $visitor: o7
        }
      }
    }
  }
} = $, a7 = v(o7, {
  init() {
    this.element = new er();
  }
}), c7 = a7, l7 = m, u7 = l7, f7 = m, p7 = f7, {
  visitors: {
    document: {
      objects: {
        Parameter: {
          $visitor: h7
        }
      }
    }
  }
} = $, d7 = v(h7, {
  init() {
    this.element = new ic();
  }
}), m7 = d7, {
  visitors: {
    document: {
      objects: {
        Header: {
          $visitor: y7
        }
      }
    }
  }
} = $, v7 = v(y7, {
  init() {
    this.element = new Za();
  }
}), g7 = v7, b7 = v({
  props: {
    parent: null
  },
  // @ts-ignore
  init({
    parent: e = this.parent
  }) {
    this.parent = e, this.passingOptionsNames = [...this.passingOptionsNames, "parent"];
  }
}), Gt = b7, $7 = v(z, Gt, m, {
  props: {
    specPath: D(["document", "objects", "Schema"]),
    canSupportSpecificationExtensions: !0,
    jsonSchemaDefaultDialect: es.default
  },
  // @ts-ignore
  init() {
    this.element = new Ct();
    const e = () => {
      let n;
      return this.openApiSemanticElement !== null && R$(this.openApiSemanticElement.jsonSchemaDialect) ? n = O(this.openApiSemanticElement.jsonSchemaDialect) : this.openApiGenericElement !== null && G(this.openApiGenericElement.get("jsonSchemaDialect")) ? n = O(this.openApiGenericElement.get("jsonSchemaDialect")) : n = O(this.jsonSchemaDefaultDialect), n;
    }, t = (n) => {
      if (Df(this.parent) && !G(n.get("$schema")))
        this.element.setMetaProperty("inherited$schema", e());
      else if (Vn(this.parent) && !G(n.get("$schema"))) {
        const i = wr(O(this.parent.meta.get("inherited$schema")), O(this.parent.$schema));
        this.element.setMetaProperty("inherited$schema", i);
      }
    }, r = (n) => {
      const i = this.parent !== null ? A(this.parent.getMetaProperty("inherited$id", [])) : new ie(), s = O(n.get("$id"));
      Nf(s) && i.push(s), this.element.setMetaProperty("inherited$id", i);
    };
    this.ObjectElement = function(i) {
      t(i), r(i), this.parent = this.element;
      const s = z.compose.methods.ObjectElement.call(this, i);
      return G(this.element.$ref) && (this.element.classes.push("reference-element"), this.element.setMetaProperty("referenced-element", "schema")), s;
    }, this.BooleanElement = function(i) {
      return this.element = A(i), this.element.classes.push("boolean-json-schema"), M;
    };
  }
}), S7 = $7, E7 = m, w7 = E7, O7 = v(m, {
  methods: {
    ObjectElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-$vocabulary"), M;
    }
  }
}), x7 = O7, A7 = m, P7 = A7, j7 = m, _7 = j7, R7 = m, T7 = R7, I7 = m, C7 = I7, V7 = v(m, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("reference-value"), M;
    }
  }
}), M7 = V7, F7 = v(q, Gt, m, {
  props: {
    specPath: D(["document", "objects", "Schema"])
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-$defs");
  }
}), D7 = F7, N7 = m, L7 = N7, k7 = v(Ue, Gt, m, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-allOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (X(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = A(t);
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), U7 = k7, B7 = v(Ue, Gt, m, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-anyOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (X(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = A(t);
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), q7 = B7, H7 = v(Ue, Gt, m, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-oneOf");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (X(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = A(t);
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), G7 = H7, J7 = v(q, Gt, m, {
  props: {
    specPath: D(["document", "objects", "Schema"])
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-dependentSchemas");
  }
}), z7 = J7, K7 = v(Ue, Gt, m, {
  init() {
    this.element = new ie(), this.element.classes.push("json-schema-prefixItems");
  },
  methods: {
    ArrayElement(e) {
      return e.forEach((t) => {
        if (X(t)) {
          const r = this.toRefractedElement(["document", "objects", "Schema"], t);
          this.element.push(r);
        } else {
          const r = A(t);
          this.element.push(r);
        }
      }), this.copyMetaAndAttributes(e, this.element), M;
    }
  }
}), W7 = K7, Y7 = v(q, Gt, m, {
  props: {
    specPath: D(["document", "objects", "Schema"])
  },
  // @ts-ignore
  init() {
    this.element = new j(), this.element.classes.push("json-schema-properties");
  }
}), X7 = Y7, Q7 = v(q, Gt, m, {
  props: {
    specPath: D(["document", "objects", "Schema"])
  },
  init() {
    this.element = new j(), this.element.classes.push("json-schema-patternProperties");
  }
}), Z7 = Q7, eX = v(m, {
  methods: {
    StringElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-type"), M;
    },
    ArrayElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-type"), M;
    }
  }
}), tX = eX, rX = v(m, {
  methods: {
    ArrayElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-enum"), M;
    }
  }
}), nX = rX, iX = m, sX = iX, oX = m, aX = oX, cX = m, lX = cX, uX = m, fX = uX, pX = m, hX = pX, dX = m, mX = dX, yX = m, vX = yX, gX = m, bX = gX, $X = m, SX = $X, EX = m, wX = EX, OX = m, xX = OX, AX = m, PX = AX, jX = m, _X = jX, RX = m, TX = RX, IX = m, CX = IX, VX = m, MX = VX, FX = v(m, {
  methods: {
    ArrayElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-required"), M;
    }
  }
}), DX = FX, NX = v(m, {
  methods: {
    ObjectElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-dependentRequired"), M;
    }
  }
}), LX = NX, kX = m, UX = kX, BX = m, qX = BX, HX = m, GX = HX, JX = m, zX = JX, KX = m, WX = KX, YX = m, XX = YX, QX = v(m, {
  methods: {
    ArrayElement(e) {
      return this.element = A(e), this.element.classes.push("json-schema-examples"), M;
    }
  }
}), ZX = QX, eQ = m, tQ = eQ, rQ = m, nQ = rQ, iQ = m, sQ = iQ, oQ = m, aQ = oQ, {
  visitors: {
    document: {
      objects: {
        Discriminator: {
          $visitor: cQ
        }
      }
    }
  }
} = $, lQ = v(cQ, {
  props: {
    canSupportSpecificationExtensions: !0
  },
  init() {
    this.element = new Lp();
  }
}), uQ = lQ, {
  visitors: {
    document: {
      objects: {
        XML: {
          $visitor: fQ
        }
      }
    }
  }
} = $, pQ = v(fQ, {
  init() {
    this.element = new zp();
  }
}), hQ = pQ, dQ = v(q, m, {
  props: {
    specPath: D(["document", "objects", "Schema"])
  },
  init() {
    this.element = new v$();
  }
}), mQ = dQ, yQ = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"]
  },
  init() {
    this.element = new L5();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Cn).forEach((r) => {
        r.setMetaProperty("referenced-element", "pathItem");
      }), t;
    }
  }
}), vQ = yQ, {
  visitors: {
    document: {
      objects: {
        Example: {
          $visitor: gQ
        }
      }
    }
  }
} = $, bQ = v(gQ, {
  init() {
    this.element = new Xa();
  }
}), $Q = bQ, {
  visitors: {
    document: {
      objects: {
        ExternalDocumentation: {
          $visitor: SQ
        }
      }
    }
  }
} = $, EQ = v(SQ, {
  init() {
    this.element = new Qa();
  }
}), wQ = EQ, {
  visitors: {
    document: {
      objects: {
        Encoding: {
          $visitor: OQ
        }
      }
    }
  }
} = $, xQ = v(OQ, {
  init() {
    this.element = new kp();
  }
}), AQ = xQ, {
  visitors: {
    document: {
      objects: {
        Paths: {
          $visitor: PQ
        }
      }
    }
  }
} = $, jQ = v(PQ, {
  init() {
    this.element = new sc();
  }
}), _Q = jQ, {
  visitors: {
    document: {
      objects: {
        RequestBody: {
          $visitor: RQ
        }
      }
    }
  }
} = $, TQ = v(RQ, {
  init() {
    this.element = new oc();
  }
}), IQ = TQ, {
  visitors: {
    document: {
      objects: {
        Callback: {
          $visitor: Lm
        }
      }
    }
  }
} = $, CQ = v(Lm, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"]
  },
  init() {
    this.element = new Ka();
  },
  methods: {
    ObjectElement(e) {
      const t = Lm.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Cn).forEach((r) => {
        r.setMetaProperty("referenced-element", "pathItem");
      }), t;
    }
  }
}), VQ = CQ, {
  visitors: {
    document: {
      objects: {
        Response: {
          $visitor: MQ
        }
      }
    }
  }
} = $, FQ = v(MQ, {
  init() {
    this.element = new ac();
  }
}), DQ = FQ, {
  visitors: {
    document: {
      objects: {
        Responses: {
          $visitor: NQ
        }
      }
    }
  }
} = $, LQ = v(NQ, {
  init() {
    this.element = new cc();
  }
}), kQ = LQ, {
  visitors: {
    document: {
      objects: {
        Operation: {
          $visitor: UQ
        }
      }
    }
  }
} = $, BQ = v(UQ, {
  init() {
    this.element = new ts();
  }
}), qQ = BQ, {
  visitors: {
    document: {
      objects: {
        PathItem: {
          $visitor: HQ
        }
      }
    }
  }
} = $, GQ = v(HQ, {
  init() {
    this.element = new vt();
  }
}), JQ = GQ, {
  visitors: {
    document: {
      objects: {
        SecurityScheme: {
          $visitor: zQ
        }
      }
    }
  }
} = $, KQ = v(zQ, {
  init() {
    this.element = new Gp();
  }
}), WQ = KQ, {
  visitors: {
    document: {
      objects: {
        OAuthFlows: {
          $visitor: YQ
        }
      }
    }
  }
} = $, XQ = v(YQ, {
  init() {
    this.element = new Bp();
  }
}), QQ = XQ, {
  visitors: {
    document: {
      objects: {
        OAuthFlow: {
          $visitor: ZQ
        }
      }
    }
  }
} = $, eZ = v(ZQ, {
  init() {
    this.element = new Up();
  }
}), tZ = eZ, rZ = v(q, m, {
  props: {
    specPath: (e) => se(e) ? ["document", "objects", "Reference"] : ["document", "objects", "PathItem"]
  },
  init() {
    this.element = new k5();
  },
  methods: {
    ObjectElement(e) {
      const t = q.compose.methods.ObjectElement.call(this, e);
      return this.element.filter(Cn).forEach((r) => {
        r.setMetaProperty("referenced-element", "pathItem");
      }), this.element.filter(hc).forEach((r, n) => {
        r.setMetaProperty("webhook-name", O(n));
      }), t;
    }
  }
}), nZ = rZ, iZ = {
  visitors: {
    value: $.visitors.value,
    document: {
      objects: {
        OpenApi: {
          $visitor: wY,
          fixedFields: {
            openapi: $.visitors.document.objects.OpenApi.fixedFields.openapi,
            info: {
              $ref: "#/visitors/document/objects/Info"
            },
            jsonSchemaDialect: UY,
            servers: $.visitors.document.objects.OpenApi.fixedFields.servers,
            paths: {
              $ref: "#/visitors/document/objects/Paths"
            },
            webhooks: nZ,
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
          $visitor: AY,
          fixedFields: {
            title: $.visitors.document.objects.Info.fixedFields.title,
            description: $.visitors.document.objects.Info.fixedFields.description,
            summary: jY,
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
          $visitor: TY,
          fixedFields: {
            name: $.visitors.document.objects.Contact.fixedFields.name,
            url: $.visitors.document.objects.Contact.fixedFields.url,
            email: $.visitors.document.objects.Contact.fixedFields.email
          }
        },
        License: {
          $visitor: VY,
          fixedFields: {
            name: $.visitors.document.objects.License.fixedFields.name,
            identifier: FY,
            url: $.visitors.document.objects.License.fixedFields.url
          }
        },
        Server: {
          $visitor: HY,
          fixedFields: {
            url: $.visitors.document.objects.Server.fixedFields.url,
            description: $.visitors.document.objects.Server.fixedFields.description,
            variables: $.visitors.document.objects.Server.fixedFields.variables
          }
        },
        ServerVariable: {
          $visitor: zY,
          fixedFields: {
            enum: $.visitors.document.objects.ServerVariable.fixedFields.enum,
            default: $.visitors.document.objects.ServerVariable.fixedFields.default,
            description: $.visitors.document.objects.ServerVariable.fixedFields.description
          }
        },
        Components: {
          $visitor: r7,
          fixedFields: {
            schemas: mQ,
            responses: $.visitors.document.objects.Components.fixedFields.responses,
            parameters: $.visitors.document.objects.Components.fixedFields.parameters,
            examples: $.visitors.document.objects.Components.fixedFields.examples,
            requestBodies: $.visitors.document.objects.Components.fixedFields.requestBodies,
            headers: $.visitors.document.objects.Components.fixedFields.headers,
            securitySchemes: $.visitors.document.objects.Components.fixedFields.securitySchemes,
            links: $.visitors.document.objects.Components.fixedFields.links,
            callbacks: $.visitors.document.objects.Components.fixedFields.callbacks,
            pathItems: vQ
          }
        },
        Paths: {
          $visitor: _Q
        },
        PathItem: {
          $visitor: JQ,
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
          $visitor: qQ,
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
          $visitor: wQ,
          fixedFields: {
            description: $.visitors.document.objects.ExternalDocumentation.fixedFields.description,
            url: $.visitors.document.objects.ExternalDocumentation.fixedFields.url
          }
        },
        Parameter: {
          $visitor: m7,
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
          $visitor: IQ,
          fixedFields: {
            description: $.visitors.document.objects.RequestBody.fixedFields.description,
            content: $.visitors.document.objects.RequestBody.fixedFields.content,
            required: $.visitors.document.objects.RequestBody.fixedFields.required
          }
        },
        MediaType: {
          $visitor: YY,
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
          $visitor: AQ,
          fixedFields: {
            contentType: $.visitors.document.objects.Encoding.fixedFields.contentType,
            headers: $.visitors.document.objects.Encoding.fixedFields.headers,
            style: $.visitors.document.objects.Encoding.fixedFields.style,
            explode: $.visitors.document.objects.Encoding.fixedFields.explode,
            allowReserved: $.visitors.document.objects.Encoding.fixedFields.allowReserved
          }
        },
        Responses: {
          $visitor: kQ,
          fixedFields: {
            default: $.visitors.document.objects.Responses.fixedFields.default
          }
        },
        Response: {
          $visitor: DQ,
          fixedFields: {
            description: $.visitors.document.objects.Response.fixedFields.description,
            headers: $.visitors.document.objects.Response.fixedFields.headers,
            content: $.visitors.document.objects.Response.fixedFields.content,
            links: $.visitors.document.objects.Response.fixedFields.links
          }
        },
        Callback: {
          $visitor: VQ
        },
        Example: {
          $visitor: $Q,
          fixedFields: {
            summary: $.visitors.document.objects.Example.fixedFields.summary,
            description: $.visitors.document.objects.Example.fixedFields.description,
            value: $.visitors.document.objects.Example.fixedFields.value,
            externalValue: $.visitors.document.objects.Example.fixedFields.externalValue
          }
        },
        Link: {
          $visitor: LY,
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
          $visitor: g7,
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
          $visitor: s7,
          fixedFields: {
            name: $.visitors.document.objects.Tag.fixedFields.name,
            description: $.visitors.document.objects.Tag.fixedFields.description,
            externalDocs: {
              $ref: "#/visitors/document/objects/ExternalDocumentation"
            }
          }
        },
        Reference: {
          $visitor: c7,
          fixedFields: {
            $ref: $.visitors.document.objects.Reference.fixedFields.$ref,
            summary: u7,
            description: p7
          }
        },
        Schema: {
          $visitor: S7,
          fixedFields: {
            // core vocabulary
            $schema: w7,
            $vocabulary: x7,
            $id: P7,
            $anchor: _7,
            $dynamicAnchor: T7,
            $dynamicRef: C7,
            $ref: M7,
            $defs: D7,
            $comment: L7,
            // applicator vocabulary
            allOf: U7,
            anyOf: q7,
            oneOf: G7,
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
            dependentSchemas: z7,
            prefixItems: W7,
            items: {
              $ref: "#/visitors/document/objects/Schema"
            },
            contains: {
              $ref: "#/visitors/document/objects/Schema"
            },
            properties: X7,
            patternProperties: Z7,
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
            type: tX,
            enum: nX,
            const: sX,
            // validation Keywords for Numeric Instances (number and integer)
            multipleOf: aX,
            maximum: lX,
            exclusiveMaximum: fX,
            minimum: hX,
            exclusiveMinimum: mX,
            // validation Keywords for Strings
            maxLength: vX,
            minLength: bX,
            pattern: SX,
            // validation Keywords for Arrays
            maxItems: wX,
            minItems: xX,
            uniqueItems: PX,
            maxContains: _X,
            minContains: TX,
            // validation Keywords for Objects
            maxProperties: CX,
            minProperties: MX,
            required: DX,
            dependentRequired: LX,
            // basic Meta-Data Annotations vocabulary
            title: UX,
            description: qX,
            default: GX,
            deprecated: zX,
            readOnly: WX,
            writeOnly: XX,
            examples: ZX,
            // semantic Content With "format" vocabulary
            format: tQ,
            // contents of String-Encoded Data vocabulary
            contentEncoding: nQ,
            contentMediaType: sQ,
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
            example: aQ
          }
        },
        Discriminator: {
          $visitor: uQ,
          fixedFields: {
            propertyName: $.visitors.document.objects.Discriminator.fixedFields.propertyName,
            mapping: $.visitors.document.objects.Discriminator.fixedFields.mapping
          }
        },
        XML: {
          $visitor: hQ,
          fixedFields: {
            name: $.visitors.document.objects.XML.fixedFields.name,
            namespace: $.visitors.document.objects.XML.fixedFields.namespace,
            prefix: $.visitors.document.objects.XML.fixedFields.prefix,
            attribute: $.visitors.document.objects.XML.fixedFields.attribute,
            wrapped: $.visitors.document.objects.XML.fixedFields.wrapped
          }
        },
        SecurityScheme: {
          $visitor: WQ,
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
          $visitor: QQ,
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
          $visitor: tZ,
          fixedFields: {
            authorizationUrl: $.visitors.document.objects.OAuthFlow.fixedFields.authorizationUrl,
            tokenUrl: $.visitors.document.objects.OAuthFlow.fixedFields.tokenUrl,
            refreshUrl: $.visitors.document.objects.OAuthFlow.fixedFields.refreshUrl,
            scopes: $.visitors.document.objects.OAuthFlow.fixedFields.scopes
          }
        },
        SecurityRequirement: {
          $visitor: ZY
        }
      },
      extension: {
        $visitor: $.visitors.document.extension.$visitor
      }
    }
  }
}, sZ = iZ, oZ = (e, {
  specPath: t = ["visitors", "document", "objects", "OpenApi", "$visitor"],
  plugins: r = []
} = {}) => {
  const n = gp(e), i = xa(sZ), s = fn(t, [], i);
  return Te(n, s, {
    state: {
      specObj: i
    }
  }), ji(s.element, r, {
    toolboxCreator: V$,
    visitorOptions: {
      keyMap: qe,
      nodeTypeGetter: ke
    }
  });
}, Z = (e) => (t, r = {}) => oZ(t, {
  specPath: e,
  ...r
});
Ka.refract = Z(["visitors", "document", "objects", "Callback", "$visitor"]);
Wa.refract = Z(["visitors", "document", "objects", "Components", "$visitor"]);
Ya.refract = Z(["visitors", "document", "objects", "Contact", "$visitor"]);
Xa.refract = Z(["visitors", "document", "objects", "Example", "$visitor"]);
Lp.refract = Z(["visitors", "document", "objects", "Discriminator", "$visitor"]);
kp.refract = Z(["visitors", "document", "objects", "Encoding", "$visitor"]);
Qa.refract = Z(["visitors", "document", "objects", "ExternalDocumentation", "$visitor"]);
Za.refract = Z(["visitors", "document", "objects", "Header", "$visitor"]);
ec.refract = Z(["visitors", "document", "objects", "Info", "$visitor"]);
es.refract = Z(["visitors", "document", "objects", "OpenApi", "fixedFields", "jsonSchemaDialect"]);
tc.refract = Z(["visitors", "document", "objects", "License", "$visitor"]);
rc.refract = Z(["visitors", "document", "objects", "Link", "$visitor"]);
nc.refract = Z(["visitors", "document", "objects", "MediaType", "$visitor"]);
Up.refract = Z(["visitors", "document", "objects", "OAuthFlow", "$visitor"]);
Bp.refract = Z(["visitors", "document", "objects", "OAuthFlows", "$visitor"]);
qp.refract = Z(["visitors", "document", "objects", "OpenApi", "fixedFields", "openapi"]);
ur.refract = Z(["visitors", "document", "objects", "OpenApi", "$visitor"]);
ts.refract = Z(["visitors", "document", "objects", "Operation", "$visitor"]);
ic.refract = Z(["visitors", "document", "objects", "Parameter", "$visitor"]);
vt.refract = Z(["visitors", "document", "objects", "PathItem", "$visitor"]);
sc.refract = Z(["visitors", "document", "objects", "Paths", "$visitor"]);
er.refract = Z(["visitors", "document", "objects", "Reference", "$visitor"]);
oc.refract = Z(["visitors", "document", "objects", "RequestBody", "$visitor"]);
ac.refract = Z(["visitors", "document", "objects", "Response", "$visitor"]);
cc.refract = Z(["visitors", "document", "objects", "Responses", "$visitor"]);
Ct.refract = Z(["visitors", "document", "objects", "Schema", "$visitor"]);
lc.refract = Z(["visitors", "document", "objects", "SecurityRequirement", "$visitor"]);
Gp.refract = Z(["visitors", "document", "objects", "SecurityScheme", "$visitor"]);
uc.refract = Z(["visitors", "document", "objects", "Server", "$visitor"]);
fc.refract = Z(["visitors", "document", "objects", "ServerVariable", "$visitor"]);
Jp.refract = Z(["visitors", "document", "objects", "Tag", "$visitor"]);
zp.refract = Z(["visitors", "document", "objects", "XML", "$visitor"]);
const aZ = v(_i, {
  props: {
    name: "binary"
  },
  methods: {
    async canParse(e) {
      return this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension);
    },
    async parse(e) {
      try {
        const t = unescape(encodeURIComponent(e.toString())), r = btoa(t), n = new at();
        if (r.length !== 0) {
          const i = new Rt(r);
          i.classes.push("result"), n.push(i);
        }
        return n;
      } catch (t) {
        throw new It(`Error parsing "${e.uri}"`, {
          cause: t
        });
      }
    }
  }
}), cZ = aZ, rs = (e) => /^[A-Za-z_][A-Za-z_0-9.-]*$/.test(e), tr = (e) => {
  const t = Bf(e);
  return Lf("#", t);
}, lZ = (e) => {
  if (!rs(e))
    throw new uq(e);
  return e;
}, dc = (e, t) => {
  const r = lZ(e), n = kb((i) => Vn(i) && O(i.$anchor) === r, t);
  if (Ft(n))
    throw new sq(`Evaluation failed on token: "${r}"`);
  return n;
}, mo = (e, t) => {
  if (typeof t.$ref > "u")
    return;
  const r = Bf(O(t.$ref)), n = O(t.meta.get("inherited$id"));
  return `${jr((s, o) => Se(s, gn(he(o))), e, [...n, O(t.$ref)])}${r === "#" ? "" : r}`;
}, uZ = (e, t) => {
  if (typeof t.$id > "u")
    return;
  const r = O(t.meta.get("inherited$id"));
  return jr((n, i) => Se(n, gn(he(i))), e, [...r, O(t.$id)]);
}, Yn = (e) => {
  if (Yn.cache.has(e))
    return Yn.cache.get(e);
  const t = Ct.refract(e);
  return Yn.cache.set(e, t), t;
};
Yn.cache = /* @__PURE__ */ new WeakMap();
const Ze = (e) => Pt(e) ? Yn(e) : e, ns = (e, t) => {
  const {
    cache: r
  } = ns, n = he(e), i = (c) => Vn(c) && typeof c.$id < "u";
  if (!r.has(t)) {
    const c = O3(i, t);
    r.set(t, Array.from(c));
  }
  const s = r.get(t).find((c) => uZ(n, c) === n);
  if (Ft(s))
    throw new ci(`Evaluation failed on URI: "${e}"`);
  let o, a;
  return rs(tr(e)) ? (o = dc, a = tr(e)) : (o = Le, a = Ce(e)), o(a, s);
};
ns.cache = /* @__PURE__ */ new WeakMap();
const ol = Te[Symbol.for("nodejs.util.promisify.custom")], js = v({
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
    reference: e,
    namespace: t,
    indirections: r = [],
    visited: n = /* @__PURE__ */ new WeakSet(),
    options: i
  }) {
    this.indirections = r, this.namespace = t, this.reference = e, this.crawledElements = [], this.crawlingMap = {}, this.visited = n, this.options = i;
  },
  methods: {
    toBaseURI(e) {
      return Se(this.reference.uri, gn(he(e)));
    },
    async toReference(e) {
      if (this.reference.depth >= this.options.resolve.maxDepth)
        throw new Jb(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
      const t = this.toBaseURI(e), {
        refSet: r
      } = this.reference;
      if (r.has(t))
        return r.find(aa(t, "uri"));
      const n = await zg(ge(t), {
        ...this.options,
        parse: {
          ...this.options.parse,
          mediaType: "text/plain"
        }
      }), i = Rn({
        uri: t,
        value: n,
        depth: this.reference.depth + 1
      });
      return r.add(i), i;
    },
    ReferenceElement(e) {
      const t = O(e.$ref), r = this.toBaseURI(t);
      if (!this.options.resolve.external && he(this.reference.uri) !== r)
        return !1;
      mr(r, this.crawlingMap) || (this.crawlingMap[r] = this.toReference(t)), this.crawledElements.push(e);
    },
    PathItemElement(e) {
      if (!G(e.$ref))
        return;
      const t = O(e.$ref), r = this.toBaseURI(t);
      !this.options.resolve.external && he(this.reference.uri) !== r || (mr(r, this.crawlingMap) || (this.crawlingMap[r] = this.toReference(t)), this.crawledElements.push(e));
    },
    LinkElement(e) {
      if (!G(e.operationRef) && !G(e.operationId))
        return;
      const t = O(e.operationRef), r = this.toBaseURI(t), n = he(this.reference.uri) !== r;
      if (!(!this.options.resolve.external && n)) {
        if (G(e.operationRef) && G(e.operationId))
          throw new me("LinkElement operationRef and operationId are mutually exclusive.");
        n && (mr(r, this.crawlingMap) || (this.crawlingMap[r] = this.toReference(t)));
      }
    },
    ExampleElement(e) {
      if (!G(e.externalValue))
        return;
      if (e.hasKey("value") && G(e.externalValue))
        throw new me("ExampleElement value and externalValue fields are mutually exclusive.");
      const t = O(e.externalValue), r = this.toBaseURI(t);
      !this.options.resolve.external && he(this.reference.uri) !== r || mr(r, this.crawlingMap) || (this.crawlingMap[r] = this.toReference(t));
    },
    async SchemaElement(e) {
      if (this.visited.has(e))
        return !1;
      if (!G(e.$ref)) {
        this.visited.add(e);
        return;
      }
      const t = await this.toReference(ge(this.reference.uri));
      let {
        uri: r
      } = t;
      const n = mo(r, e), i = he(n), s = Or({
        uri: i
      }), o = Fl((l) => l.canRead(s), this.options.resolve.resolvers), a = !o, c = (l) => he(this.reference.uri) !== l;
      if (!mr(i, this.crawlingMap))
        try {
          if (o || a)
            this.crawlingMap[i] = t;
          else {
            if (r = this.toBaseURI(O(n)), !this.options.resolve.external && c(r)) {
              this.visited.add(e);
              return;
            }
            this.crawlingMap[i] = this.toReference(ge(n));
          }
        } catch (l) {
          if (a && l instanceof ci) {
            if (r = this.toBaseURI(ge(n)), !this.options.resolve.external && c(r)) {
              this.visited.add(e);
              return;
            }
            this.crawlingMap[i] = this.toReference(ge(n));
          } else
            throw l;
        }
      this.crawledElements.push(e);
    },
    async crawlReferenceElement(e) {
      const t = await this.toReference(O(e.$ref));
      this.indirections.push(e);
      const r = Ce(O(e.$ref));
      let n = Le(r, t.value.result);
      if (Pt(n)) {
        const s = O(e.meta.get("referenced-element"));
        se(n) ? (n = er.refract(n), n.setMetaProperty("referenced-element", s)) : n = this.namespace.getElementClass(s).refract(n);
      }
      if (this.indirections.includes(n))
        throw new me("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new jt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const i = js({
        reference: t,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options
      });
      await ol(n, i, {
        keyMap: qe,
        nodeTypeGetter: ke
      }), await i.crawl(), this.indirections.pop();
    },
    async crawlPathItemElement(e) {
      const t = await this.toReference(O(e.$ref));
      this.indirections.push(e);
      const r = Ce(O(e.$ref));
      let n = Le(r, t.value.result);
      if (Pt(n) && (n = vt.refract(n)), this.indirections.includes(n))
        throw new me("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new jt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const i = js({
        reference: t,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options
      });
      await ol(n, i, {
        keyMap: qe,
        nodeTypeGetter: ke
      }), await i.crawl(), this.indirections.pop();
    },
    async crawlSchemaElement(e) {
      let t = await this.toReference(ge(this.reference.uri)), {
        uri: r
      } = t;
      const n = mo(r, e), i = he(n), s = Or({
        uri: i
      }), o = Fl((u) => u.canRead(s), this.options.resolve.resolvers), a = !o, c = (u) => he(this.reference.uri) !== u;
      this.indirections.push(e);
      let l;
      try {
        if (o || a)
          l = ns(
            n,
            // @ts-ignore
            Ze(t.value.result)
          );
        else {
          if (r = this.toBaseURI(O(n)), !this.options.resolve.external && c(r))
            return;
          t = await this.toReference(ge(n));
          const u = Ce(n);
          l = Ze(
            // @ts-ignore
            Le(u, t.value.result)
          );
        }
      } catch (u) {
        if (a && u instanceof ci)
          if (rs(tr(n))) {
            if (r = this.toBaseURI(O(n)), !this.options.resolve.external && c(r))
              return;
            t = await this.toReference(ge(n));
            const h = tr(n);
            l = dc(
              h,
              // @ts-ignore
              Ze(t.value.result)
            );
          } else {
            if (r = this.toBaseURI(O(n)), !this.options.resolve.external && c(r))
              return;
            t = await this.toReference(ge(n));
            const h = Ce(n);
            l = Ze(
              // @ts-ignore
              Le(h, t.value.result)
            );
          }
        else
          throw u;
      }
      if (this.visited.add(e), this.indirections.includes(l))
        throw new me("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new jt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      const f = js({
        reference: t,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        visited: this.visited
      });
      await ol(l, f, {
        keyMap: qe,
        nodeTypeGetter: ke
      }), await f.crawl(), this.indirections.pop();
    },
    async crawl() {
      await xe(BA, Uj)(this.crawlingMap), this.crawlingMap = null;
      for (const e of this.crawledElements)
        Cn(e) ? await this.crawlReferenceElement(e) : Vn(e) ? await this.crawlSchemaElement(e) : hc(e) && await this.crawlPathItemElement(e);
    }
  }
}), fZ = js, pZ = Te[Symbol.for("nodejs.util.promisify.custom")], hZ = v(Q3, {
  init() {
    this.name = "openapi-3-1";
  },
  methods: {
    canResolve(e) {
      var t;
      return e.mediaType !== "text/plain" ? xr.includes(e.mediaType) : Kp((t = e.parseResult) === null || t === void 0 ? void 0 : t.result);
    },
    async resolve(e, t) {
      const r = Pn(pc), n = Rn({
        uri: e.uri,
        value: e.parseResult
      }), i = fZ({
        reference: n,
        namespace: r,
        options: t
      }), s = Aa();
      return s.add(n), await pZ(s.rootRef.value, i, {
        keyMap: qe,
        nodeTypeGetter: ke
      }), await i.crawl(), s;
    }
  }
}), dZ = hZ, M$ = (e) => {
  if (!X(e) || e.hasKey("$$normalized"))
    return e;
  const t = [Y5({
    operationIdNormalizer: (n, i, s) => Ri({
      operationId: n
    }, i, s, {
      v2OperationIdCompatibilityMode: !1
    })
  }), B5(), H5(), J5(), Q5(), eY()], r = ji(e, t, {
    toolboxCreator: V$,
    visitorOptions: {
      keyMap: qe,
      nodeTypeGetter: ke
    }
  });
  return r.set("$$normalized", !0), r;
}, Xn = (e) => (t) => {
  if (t != null && t.$$normalized)
    return t;
  if (Xn.cache.has(t))
    return Xn.cache.get(t);
  const r = ur.refract(t), n = e(r), i = O(n);
  return Xn.cache.set(t, i), i;
};
Xn.cache = /* @__PURE__ */ new WeakMap();
const {
  AbortController: mZ,
  AbortSignal: yZ
} = globalThis;
typeof globalThis.AbortController > "u" && (globalThis.AbortController = mZ);
typeof globalThis.AbortSignal > "u" && (globalThis.AbortSignal = yZ);
const F$ = Y3.compose({
  props: {
    name: "http-swagger-client",
    swaggerHTTPClient: fi,
    swaggerHTTPClientConfig: {}
  },
  init({
    swaggerHTTPClient: e = this.swaggerHTTPClient
  } = {}) {
    this.swaggerHTTPClient = e;
  },
  methods: {
    getHttpClient() {
      return this.swaggerHTTPClient;
    },
    async read(e) {
      const t = this.getHttpClient(), r = new AbortController(), {
        signal: n
      } = r, i = setTimeout(() => {
        r.abort();
      }, this.timeout), s = this.getHttpClient().withCredentials || this.withCredentials ? "include" : "same-origin", o = this.redirects === 0 ? "error" : "follow", a = this.redirects > 0 ? this.redirects : void 0;
      try {
        return (await t({
          url: e.uri,
          signal: n,
          userFetch: async (l, f) => {
            let u = await fetch(l, f);
            try {
              u.headers.delete("Content-Type");
            } catch {
              u = new Response(u.body, {
                ...u,
                headers: new Headers(u.headers)
              }), u.headers.delete("Content-Type");
            }
            return u;
          },
          credentials: s,
          redirect: o,
          follow: a,
          ...this.swaggerHTTPClientConfig
        })).text.arrayBuffer();
      } catch (c) {
        throw new Gg(`Error downloading "${e.uri}"`, {
          cause: c
        });
      } finally {
        clearTimeout(i);
      }
    }
  }
}), D$ = _i.compose({
  props: {
    name: "json-swagger-client",
    fileExtensions: [".json"],
    mediaTypes: ["application/json"]
  },
  methods: {
    async canParse(e) {
      const t = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), r = this.mediaTypes.includes(e.mediaType);
      if (!t)
        return !1;
      if (r)
        return !0;
      if (!r)
        try {
          return JSON.parse(e.toString()), !0;
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(e) {
      if (this.sourceMap)
        throw new It("json-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new at(), r = e.toString();
      if (this.allowEmpty && r.trim() === "")
        return t;
      try {
        const n = Hb(JSON.parse(r));
        return n.classes.push("result"), t.push(n), t;
      } catch (n) {
        throw new It(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
}), N$ = _i.compose({
  props: {
    name: "yaml-1-2-swagger-client",
    fileExtensions: [".yaml", ".yml"],
    mediaTypes: ["text/yaml", "application/yaml"]
  },
  methods: {
    async canParse(e) {
      const t = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), r = this.mediaTypes.includes(e.mediaType);
      if (!t)
        return !1;
      if (r)
        return !0;
      if (!r)
        try {
          return sn.load(e.toString(), {
            schema: Bs
          }), !0;
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(e) {
      if (this.sourceMap)
        throw new It("yaml-1-2-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new at(), r = e.toString();
      try {
        const n = sn.load(r, {
          schema: Bs
        });
        if (this.allowEmpty && typeof n > "u")
          return t;
        const i = Hb(n);
        return i.classes.push("result"), t.push(i), t;
      } catch (n) {
        throw new It(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
}), L$ = _i.compose({
  props: {
    name: "openapi-json-3-1-swagger-client",
    fileExtensions: [".json"],
    mediaTypes: new Cp(...xr.filterByFormat("generic"), ...xr.filterByFormat("json")),
    detectionRegExp: /"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))"/
  },
  methods: {
    async canParse(e) {
      const t = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), r = this.mediaTypes.includes(e.mediaType);
      if (!t)
        return !1;
      if (r)
        return !0;
      if (!r)
        try {
          const n = e.toString();
          return JSON.parse(n), this.detectionRegExp.test(n);
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(e) {
      if (this.sourceMap)
        throw new It("openapi-json-3-1-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new at(), r = e.toString();
      if (this.allowEmpty && r.trim() === "")
        return t;
      try {
        const n = JSON.parse(r), i = ur.refract(n, this.refractorOpts);
        return i.classes.push("result"), t.push(i), t;
      } catch (n) {
        throw new It(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
}), k$ = _i.compose({
  props: {
    name: "openapi-yaml-3-1-swagger-client",
    fileExtensions: [".yaml", ".yml"],
    mediaTypes: new Cp(...xr.filterByFormat("generic"), ...xr.filterByFormat("yaml")),
    detectionRegExp: /(?<YAML>^(["']?)openapi\2\s*:\s*(["']?)(?<version_yaml>3\.1\.(?:[1-9]\d*|0))\3(?:\s+|$))|(?<JSON>"openapi"\s*:\s*"(?<version_json>3\.1\.(?:[1-9]\d*|0))")/m
  },
  methods: {
    async canParse(e) {
      const t = this.fileExtensions.length === 0 ? !0 : this.fileExtensions.includes(e.extension), r = this.mediaTypes.includes(e.mediaType);
      if (!t)
        return !1;
      if (r)
        return !0;
      if (!r)
        try {
          const n = e.toString();
          return sn.load(n), this.detectionRegExp.test(n);
        } catch {
          return !1;
        }
      return !1;
    },
    async parse(e) {
      if (this.sourceMap)
        throw new It("openapi-yaml-3-1-swagger-client parser plugin doesn't support sourceMaps option");
      const t = new at(), r = e.toString();
      try {
        const n = sn.load(r, {
          schema: Bs
        });
        if (this.allowEmpty && typeof n > "u")
          return t;
        const i = ur.refract(n, this.refractorOpts);
        return i.classes.push("result"), t.push(i), t;
      } catch (n) {
        throw new It(`Error parsing "${e.uri}"`, {
          cause: n
        });
      }
    }
  }
}), al = Te[Symbol.for("nodejs.util.promisify.custom")], Un = xp(), cl = (e) => (t) => t.meta.hasKey("ref-referencing-element-id") && t.meta.get("ref-referencing-element-id").equals(O(Un.identify(e))), _s = v({
  props: {
    indirections: null,
    namespace: null,
    reference: null,
    options: null,
    ancestors: null
  },
  init({
    indirections: e = [],
    reference: t,
    namespace: r,
    options: n,
    ancestors: i = new nl()
  }) {
    this.indirections = e, this.namespace = r, this.reference = t, this.options = n, this.ancestors = new nl(...i);
  },
  methods: {
    toBaseURI(e) {
      return Se(this.reference.uri, gn(he(e)));
    },
    async toReference(e) {
      if (this.reference.depth >= this.options.resolve.maxDepth)
        throw new Jb(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
      const t = this.toBaseURI(e), {
        refSet: r
      } = this.reference;
      if (r.has(t))
        return r.find(aa(t, "uri"));
      const n = await zg(ge(t), {
        ...this.options,
        parse: {
          ...this.options.parse,
          mediaType: "text/plain"
        }
      }), i = Rn({
        uri: t,
        value: n,
        depth: this.reference.depth + 1
      });
      return r.add(i), i;
    },
    toAncestorLineage(e) {
      const t = new Set(e.filter(_e));
      return [new nl(...this.ancestors, t), t];
    },
    async ReferenceElement(e, t, r, n, i) {
      const [s, o] = this.toAncestorLineage([...i, r]);
      if (s.includesCycle(e))
        return !1;
      const a = this.toBaseURI(O(e.$ref));
      if (!this.options.resolve.external && he(this.reference.uri) !== a)
        return !1;
      const c = await this.toReference(O(e.$ref)), l = Se(a, O(e.$ref));
      this.indirections.push(e);
      const f = Ce(l);
      let u = Le(f, c.value.result);
      if (Pt(u)) {
        const y = O(e.meta.get("referenced-element"));
        se(u) ? (u = er.refract(u), u.setMetaProperty("referenced-element", y)) : u = this.namespace.getElementClass(y).refract(u);
      }
      if (this.indirections.includes(u))
        throw new me("Recursive Reference Object detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new jt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      o.add(e);
      const h = _s({
        reference: c,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: s
      });
      u = await al(u, h, {
        keyMap: qe,
        nodeTypeGetter: ke
      }), o.delete(e), this.indirections.pop();
      const p = (y) => {
        const g = De(y);
        return g.setMetaProperty("ref-fields", {
          $ref: O(e.$ref),
          // @ts-ignore
          description: O(e.description),
          // @ts-ignore
          summary: O(e.summary)
        }), g.setMetaProperty("ref-origin", c.uri), g.setMetaProperty("ref-referencing-element-id", A(Un.identify(e))), X(y) && (e.hasKey("description") && "description" in y && (g.remove("description"), g.set("description", e.get("description"))), e.hasKey("summary") && "summary" in y && (g.remove("summary"), g.set("summary", e.get("summary")))), g;
      };
      if (s.includes(e) || s.includes(u)) {
        var d;
        const y = (d = s.findItem(cl(e))) !== null && d !== void 0 ? d : p(u);
        return Ke(r) ? r.value = y : Array.isArray(r) && (r[t] = y), !1;
      }
      return p(u);
    },
    async PathItemElement(e, t, r, n, i) {
      const [s, o] = this.toAncestorLineage([...i, r]);
      if (!G(e.$ref))
        return;
      if (s.includesCycle(e))
        return !1;
      const a = this.toBaseURI(O(e.$ref));
      if (!this.options.resolve.external && he(this.reference.uri) !== a)
        return;
      const c = await this.toReference(O(e.$ref)), l = Se(a, O(e.$ref));
      this.indirections.push(e);
      const f = Ce(l);
      let u = Le(f, c.value.result);
      if (Pt(u) && (u = vt.refract(u)), this.indirections.includes(u))
        throw new me("Recursive Path Item Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new jt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      o.add(e);
      const h = _s({
        reference: c,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: s
      });
      u = await al(u, h, {
        keyMap: qe,
        nodeTypeGetter: ke
      }), o.delete(e), this.indirections.pop();
      const p = (y) => {
        const g = new vt([...y.content], A(y.meta), A(y.attributes));
        return e.forEach((b, E, S) => {
          g.remove(O(E)), g.content.push(S);
        }), g.remove("$ref"), g.setMetaProperty("ref-fields", {
          $ref: O(e.$ref)
        }), g.setMetaProperty("ref-origin", c.uri), g.setMetaProperty("ref-referencing-element-id", A(Un.identify(e))), g;
      };
      if (s.includes(e) || s.includes(u)) {
        var d;
        const y = (d = s.findItem(cl(e))) !== null && d !== void 0 ? d : p(u);
        return Ke(r) ? r.value = y : Array.isArray(r) && (r[t] = y), !1;
      }
      return p(u);
    },
    async LinkElement(e) {
      if (!G(e.operationRef) && !G(e.operationId))
        return;
      if (G(e.operationRef) && G(e.operationId))
        throw new me("LinkElement operationRef and operationId fields are mutually exclusive.");
      let t;
      if (G(e.operationRef)) {
        var r;
        const i = Ce(O(e.operationRef)), s = this.toBaseURI(O(e.operationRef));
        if (!this.options.resolve.external && he(this.reference.uri) !== s)
          return;
        const o = await this.toReference(O(e.operationRef));
        t = Le(i, o.value.result), Pt(t) && (t = ts.refract(t)), t = De(t), t.setMetaProperty("ref-origin", o.uri);
        const a = De(e);
        return (r = a.operationRef) === null || r === void 0 || r.meta.set("operation", t), a;
      }
      if (G(e.operationId)) {
        var n;
        const i = O(e.operationId), s = await this.toReference(ge(this.reference.uri));
        if (t = kb((a) => T$(a) && _e(a.operationId) && a.operationId.equals(i), s.value.result), Ft(t))
          throw new me(`OperationElement(operationId=${i}) not found.`);
        const o = De(e);
        return (n = o.operationId) === null || n === void 0 || n.meta.set("operation", t), o;
      }
    },
    async ExampleElement(e, t, r, n, i) {
      const [s] = this.toAncestorLineage([...i, r]);
      if (!G(e.externalValue))
        return;
      if (s.includesCycle(e))
        return !1;
      if (e.hasKey("value") && G(e.externalValue))
        throw new me("ExampleElement value and externalValue fields are mutually exclusive.");
      const o = this.toBaseURI(O(e.externalValue));
      if (!this.options.resolve.external && he(this.reference.uri) !== o)
        return;
      const a = await this.toReference(O(e.externalValue)), c = De(a.value.result);
      c.setMetaProperty("ref-origin", a.uri);
      const l = De(e);
      return l.value = c, l;
    },
    async SchemaElement(e, t, r, n, i) {
      const [s, o] = this.toAncestorLineage([...i, r]);
      if (!G(e.$ref))
        return;
      if (s.includesCycle(e))
        return !1;
      let a = await this.toReference(ge(this.reference.uri)), {
        uri: c
      } = a;
      const l = mo(c, e), f = he(l), u = Or({
        uri: f
      }), h = Fl((S) => S.canRead(u), this.options.resolve.resolvers), p = !h, d = (S) => he(this.reference.uri) !== S;
      this.indirections.push(e);
      let y;
      try {
        if (h || p)
          y = ns(
            l,
            // @ts-ignore
            Ze(a.value.result)
          );
        else {
          if (c = this.toBaseURI(O(l)), !this.options.resolve.external && d(c))
            return;
          a = await this.toReference(ge(l));
          const S = Ce(l);
          y = Ze(
            // @ts-ignore
            Le(S, a.value.result)
          );
        }
      } catch (S) {
        if (p && S instanceof ci)
          if (rs(tr(l))) {
            if (c = this.toBaseURI(O(l)), !this.options.resolve.external && d(c))
              return;
            a = await this.toReference(ge(l));
            const w = tr(l);
            y = dc(
              w,
              // @ts-ignore
              Ze(a.value.result)
            );
          } else {
            if (c = this.toBaseURI(O(l)), !this.options.resolve.external && d(c))
              return;
            a = await this.toReference(ge(l));
            const w = Ce(l);
            y = Ze(
              // @ts-ignore
              Le(w, a.value.result)
            );
          }
        else
          throw S;
      }
      if (this.indirections.includes(y))
        throw new me("Recursive Schema Object reference detected");
      if (this.indirections.length > this.options.dereference.maxDepth)
        throw new jt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
      o.add(e);
      const g = _s({
        reference: a,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        ancestors: s
      });
      if (y = await al(y, g, {
        keyMap: qe,
        nodeTypeGetter: ke
      }), o.delete(e), this.indirections.pop(), Wp(y)) {
        const S = A(y);
        return S.setMetaProperty("ref-fields", {
          $ref: O(e.$ref)
        }), S.setMetaProperty("ref-origin", a.uri), S.setMetaProperty("ref-referencing-element-id", A(Un.identify(e))), S;
      }
      const b = (S) => {
        const w = new Ct([...S.content], A(S.meta), A(S.attributes));
        return e.forEach((_, F, P) => {
          w.remove(O(F)), w.content.push(P);
        }), w.remove("$ref"), w.setMetaProperty("ref-fields", {
          $ref: O(e.$ref)
        }), w.setMetaProperty("ref-origin", a.uri), w.setMetaProperty("ref-referencing-element-id", A(Un.identify(e))), w;
      };
      if (s.includes(e) || s.includes(y)) {
        var E;
        const S = (E = s.findItem(cl(e))) !== null && E !== void 0 ? E : b(y);
        return Ke(r) ? r.value = S : Array.isArray(r) && (r[t] = S), !1;
      }
      return b(y);
    }
  }
}), Qu = _s, vZ = Te[Symbol.for("nodejs.util.promisify.custom")], gZ = v(eq, {
  init() {
    this.name = "openapi-3-1";
  },
  methods: {
    canDereference(e) {
      var t;
      return e.mediaType !== "text/plain" ? xr.includes(e.mediaType) : Kp((t = e.parseResult) === null || t === void 0 ? void 0 : t.result);
    },
    async dereference(e, t) {
      const r = Pn(pc), n = wr(Aa(), t.dereference.refSet);
      let i;
      n.has(e.uri) ? i = n.find(aa(e.uri, "uri")) : (i = Rn({
        uri: e.uri,
        value: e.parseResult
      }), n.add(i));
      const s = Qu({
        reference: i,
        namespace: r,
        options: t
      }), o = await vZ(n.rootRef.value, s, {
        keyMap: qe,
        nodeTypeGetter: ke
      });
      return t.dereference.refSet === null && n.clean(), o;
    }
  }
}), U$ = gZ, bZ = (e) => e.slice(2), st = (e) => {
  const t = bZ(e);
  return t.reduce((r, n, i) => {
    if (Ke(n)) {
      const s = String(O(n.key));
      r.push(s);
    } else if (et(t[i - 2])) {
      const s = t[i - 2].content.indexOf(n);
      r.push(s);
    }
    return r;
  }, []);
}, vs = (e) => {
  if (e.cause == null)
    return e;
  let {
    cause: t
  } = e;
  for (; t.cause != null; )
    t = t.cause;
  return t;
}, $Z = Pp("SchemaRefError", function(t, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), {
  wrapError: ll
} = jp, ul = Te[Symbol.for("nodejs.util.promisify.custom")], Bn = xp(), fl = (e) => (t) => t.meta.hasKey("ref-referencing-element-id") && t.meta.get("ref-referencing-element-id").equals(O(Bn.identify(e))), Rs = Qu.compose({
  props: {
    useCircularStructures: !0,
    allowMetaPatches: !1,
    basePath: null
  },
  init({
    allowMetaPatches: e = this.allowMetaPatches,
    useCircularStructures: t = this.useCircularStructures,
    basePath: r = this.basePath
  }) {
    this.allowMetaPatches = e, this.useCircularStructures = t, this.basePath = r;
  },
  methods: {
    async ReferenceElement(e, t, r, n, i) {
      try {
        var s;
        const [f, u] = this.toAncestorLineage([...i, r]);
        if (Wn(["cycle"], e.$ref) || f.includesCycle(e) || !this.options.resolve.external && C$(e))
          return !1;
        const h = await this.toReference(O(e.$ref)), {
          uri: p
        } = h, d = Se(p, O(e.$ref));
        this.indirections.push(e);
        const y = Ce(d);
        let g = Le(y, h.value.result);
        if (Pt(g)) {
          const S = O(e.meta.get("referenced-element"));
          se(g) ? (g = er.refract(g), g.setMetaProperty("referenced-element", S)) : g = this.namespace.getElementClass(S).refract(g);
        }
        if (this.indirections.includes(g))
          throw new me("Recursive JSON Pointer detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new jt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        if (!this.useCircularStructures && f.includes(g)) {
          if (Er(p) || Qr(p)) {
            const w = new er({
              $ref: d
            }, A(e.meta), A(e.attributes));
            return w.get("$ref").classes.push("cycle"), w;
          }
          return !1;
        }
        u.add(e);
        const b = Rs({
          reference: h,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: f,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (s = this.basePath) !== null && s !== void 0 ? s : [...st([...i, r, e]), "$ref"]
        });
        g = await ul(g, b, {
          keyMap: qe,
          nodeTypeGetter: ke
        }), u.delete(e), this.indirections.pop();
        const E = (S) => {
          const w = De(S);
          if (w.setMetaProperty("ref-fields", {
            $ref: O(e.$ref),
            description: O(e.description),
            summary: O(e.summary)
          }), w.setMetaProperty("ref-origin", h.uri), w.setMetaProperty("ref-referencing-element-id", A(Bn.identify(e))), X(S) && (e.hasKey("description") && "description" in S && (w.remove("description"), w.set("description", e.get("description"))), e.hasKey("summary") && "summary" in S && (w.remove("summary"), w.set("summary", e.get("summary")))), this.allowMetaPatches && X(w) && !w.hasKey("$$ref")) {
            const _ = Se(p, d);
            w.set("$$ref", _);
          }
          return w;
        };
        if (f.includes(e) || f.includes(g)) {
          var o;
          const S = (o = f.findItem(fl(e))) !== null && o !== void 0 ? o : E(g);
          return Ke(r) ? r.value = S : Array.isArray(r) && (r[t] = S), !1;
        }
        return E(g);
      } catch (f) {
        var a, c, l;
        const u = vs(f), h = ll(u, {
          baseDoc: this.reference.uri,
          $ref: O(e.$ref),
          pointer: Ce(O(e.$ref)),
          fullPath: (a = this.basePath) !== null && a !== void 0 ? a : [...st([...i, r, e]), "$ref"]
        });
        (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (l = c.push) === null || l === void 0 || l.call(c, h);
        return;
      }
    },
    async PathItemElement(e, t, r, n, i) {
      try {
        var s;
        const [f, u] = this.toAncestorLineage([...i, r]);
        if (!G(e.$ref))
          return;
        if (Wn(["cycle"], e.$ref) || f.includesCycle(e))
          return !1;
        if (!this.options.resolve.external && I$(e))
          return;
        const h = await this.toReference(O(e.$ref)), {
          uri: p
        } = h, d = Se(p, O(e.$ref));
        this.indirections.push(e);
        const y = Ce(d);
        let g = Le(y, h.value.result);
        if (Pt(g) && (g = vt.refract(g)), this.indirections.includes(g))
          throw new me("Recursive JSON Pointer detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new jt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        if (!this.useCircularStructures && f.includes(g)) {
          if (Er(p) || Qr(p)) {
            const w = new vt({
              $ref: d
            }, A(e.meta), A(e.attributes));
            return w.get("$ref").classes.push("cycle"), w;
          }
          return !1;
        }
        u.add(e);
        const b = Rs({
          reference: h,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          ancestors: f,
          allowMetaPatches: this.allowMetaPatches,
          useCircularStructures: this.useCircularStructures,
          basePath: (s = this.basePath) !== null && s !== void 0 ? s : [...st([...i, r, e]), "$ref"]
        });
        g = await ul(g, b, {
          keyMap: qe,
          nodeTypeGetter: ke
        }), u.delete(e), this.indirections.pop();
        const E = (S) => {
          const w = new vt([...S.content], A(S.meta), A(S.attributes));
          if (e.forEach((_, F, P) => {
            w.remove(O(F)), w.content.push(P);
          }), w.remove("$ref"), w.setMetaProperty("ref-fields", {
            $ref: O(e.$ref)
          }), w.setMetaProperty("ref-origin", h.uri), w.setMetaProperty("ref-referencing-element-id", A(Bn.identify(e))), this.allowMetaPatches && typeof w.get("$$ref") > "u") {
            const _ = Se(p, d);
            w.set("$$ref", _);
          }
          return w;
        };
        if (f.includes(e) || f.includes(g)) {
          var o;
          const S = (o = f.findItem(fl(e))) !== null && o !== void 0 ? o : E(g);
          return Ke(r) ? r.value = S : Array.isArray(r) && (r[t] = S), !1;
        }
        return E(g);
      } catch (f) {
        var a, c, l;
        const u = vs(f), h = ll(u, {
          baseDoc: this.reference.uri,
          $ref: O(e.$ref),
          pointer: Ce(O(e.$ref)),
          fullPath: (a = this.basePath) !== null && a !== void 0 ? a : [...st([...i, r, e]), "$ref"]
        });
        (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (l = c.push) === null || l === void 0 || l.call(c, h);
        return;
      }
    },
    async SchemaElement(e, t, r, n, i) {
      try {
        var s;
        const [f, u] = this.toAncestorLineage([...i, r]);
        if (!G(e.$ref))
          return;
        if (Wn(["cycle"], e.$ref) || f.includesCycle(e))
          return !1;
        let h = await this.toReference(ge(this.reference.uri)), {
          uri: p
        } = h;
        const d = mo(p, e), y = he(d), g = Or({
          uri: y
        }), b = !this.options.resolve.resolvers.some((P) => P.canRead(g)), E = !b, S = E && p !== y;
        if (!this.options.resolve.external && S)
          return;
        this.indirections.push(e);
        let w;
        try {
          if (b || E)
            w = ns(d, Ze(h.value.result));
          else {
            h = await this.toReference(ge(d)), p = h.uri;
            const P = Ce(d);
            w = Ze(Le(P, h.value.result));
          }
        } catch (P) {
          if (E && P instanceof ci)
            if (rs(tr(d))) {
              h = await this.toReference(ge(d)), p = h.uri;
              const I = tr(d);
              w = dc(I, Ze(h.value.result));
            } else {
              h = await this.toReference(ge(d)), p = h.uri;
              const I = Ce(d);
              w = Ze(Le(I, h.value.result));
            }
          else
            throw P;
        }
        if (this.indirections.includes(w))
          throw new me("Recursive Schema Object reference detected");
        if (this.indirections.length > this.options.dereference.maxDepth)
          throw new jt(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
        if (!this.useCircularStructures && f.includes(w)) {
          if (Er(p) || Qr(p)) {
            const I = Se(p, d), C = new Ct({
              $ref: I
            }, A(e.meta), A(e.attributes));
            return C.get("$ref").classes.push("cycle"), C;
          }
          return !1;
        }
        u.add(e);
        const _ = Rs({
          reference: h,
          namespace: this.namespace,
          indirections: [...this.indirections],
          options: this.options,
          useCircularStructures: this.useCircularStructures,
          allowMetaPatches: this.allowMetaPatches,
          ancestors: f,
          basePath: (s = this.basePath) !== null && s !== void 0 ? s : [...st([...i, r, e]), "$ref"]
        });
        if (w = await ul(w, _, {
          keyMap: qe,
          nodeTypeGetter: ke
        }), u.delete(e), this.indirections.pop(), Wp(w)) {
          const P = A(w);
          return P.setMetaProperty("ref-fields", {
            $ref: O(e.$ref)
          }), P.setMetaProperty("ref-origin", h.uri), P.setMetaProperty("ref-referencing-element-id", A(Bn.identify(e))), P;
        }
        const F = (P) => {
          const I = new Ct([...P.content], A(P.meta), A(P.attributes));
          if (e.forEach((C, J, x) => {
            I.remove(O(J)), I.content.push(x);
          }), I.remove("$ref"), I.setMetaProperty("ref-fields", {
            $ref: O(e.$ref)
          }), I.setMetaProperty("ref-origin", h.uri), I.setMetaProperty("ref-referencing-element-id", A(Bn.identify(e))), this.allowMetaPatches && typeof I.get("$$ref") > "u") {
            const C = Se(p, d);
            I.set("$$ref", C);
          }
          return I;
        };
        if (f.includes(e) || f.includes(w)) {
          var o;
          const P = (o = f.findItem(fl(e))) !== null && o !== void 0 ? o : F(w);
          return Ke(r) ? r.value = P : Array.isArray(r) && (r[t] = P), !1;
        }
        return F(w);
      } catch (f) {
        var a, c, l;
        const u = vs(f), h = new $Z(`Could not resolve reference: ${u.message}`, {
          baseDoc: this.reference.uri,
          $ref: O(e.$ref),
          fullPath: (a = this.basePath) !== null && a !== void 0 ? a : [...st([...i, r, e]), "$ref"]
        }, u);
        (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (l = c.push) === null || l === void 0 || l.call(c, h);
        return;
      }
    },
    async LinkElement() {
    },
    async ExampleElement(e, t, r, n, i) {
      try {
        return await Qu.compose.methods.ExampleElement.call(this, e, t, r, n, i);
      } catch (c) {
        var s, o, a;
        const l = vs(c), f = ll(l, {
          baseDoc: this.reference.uri,
          externalValue: O(e.externalValue),
          fullPath: (s = this.basePath) !== null && s !== void 0 ? s : [...st([...i, r, e]), "externalValue"]
        });
        (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, f);
        return;
      }
    }
  }
}), Yp = U$.compose.bind(), SZ = Yp({
  init({
    parameterMacro: e,
    options: t
  }) {
    this.parameterMacro = e, this.options = t;
  },
  props: {
    parameterMacro: null,
    options: null,
    macroOperation: null,
    OperationElement: {
      enter(e) {
        this.macroOperation = e;
      },
      leave() {
        this.macroOperation = null;
      }
    },
    ParameterElement: {
      leave(e, t, r, n, i) {
        const s = this.macroOperation === null ? null : O(this.macroOperation), o = O(e);
        try {
          const l = this.parameterMacro(s, o);
          e.set("default", l);
        } catch (l) {
          var a, c;
          const f = new Error(l, {
            cause: l
          });
          f.fullPath = st([...i, r]), (a = this.options.dereference.dereferenceOpts) === null || a === void 0 || (a = a.errors) === null || a === void 0 || (c = a.push) === null || c === void 0 || c.call(a, f);
        }
      }
    }
  }
}), EZ = Yp({
  init({
    modelPropertyMacro: e,
    options: t
  }) {
    this.modelPropertyMacro = e, this.options = t;
  },
  props: {
    modelPropertyMacro: null,
    options: null,
    SchemaElement: {
      leave(e, t, r, n, i) {
        typeof e.properties > "u" || X(e.properties) && e.properties.forEach((s) => {
          if (X(s))
            try {
              const c = this.modelPropertyMacro(O(s));
              s.set("default", c);
            } catch (c) {
              var o, a;
              const l = new Error(c, {
                cause: c
              });
              l.fullPath = [...st([...i, r, e]), "properties"], (o = this.options.dereference.dereferenceOpts) === null || o === void 0 || (o = o.errors) === null || o === void 0 || (a = o.push) === null || a === void 0 || a.call(o, l);
            }
        });
      }
    }
  }
}), wZ = Yp({
  init({
    options: e
  }) {
    this.options = e;
  },
  props: {
    options: null,
    SchemaElement: {
      leave(e, t, r, n, i) {
        if (typeof e.allOf > "u")
          return;
        if (!et(e.allOf)) {
          var s, o;
          const u = new TypeError("allOf must be an array");
          u.fullPath = [...st([...i, r, e]), "allOf"], (s = this.options.dereference.dereferenceOpts) === null || s === void 0 || (s = s.errors) === null || s === void 0 || (o = s.push) === null || o === void 0 || o.call(s, u);
          return;
        }
        if (e.allOf.isEmpty)
          return new Ct(e.content.filter((u) => O(u.key) !== "allOf"), A(e.meta), A(e.attributes));
        if (!e.allOf.content.every(Vn)) {
          var c, l;
          const u = new TypeError("Elements in allOf must be objects");
          u.fullPath = [...st([...i, r, e]), "allOf"], (c = this.options.dereference.dereferenceOpts) === null || c === void 0 || (c = c.errors) === null || c === void 0 || (l = c.push) === null || l === void 0 || l.call(c, u);
          return;
        }
        const f = hn.all([...e.allOf.content, e]);
        if (e.hasKey("$$ref") || f.remove("$$ref"), e.hasKey("example")) {
          const u = f.getMember("example");
          u.value = e.get("example");
        }
        if (e.hasKey("examples")) {
          const u = f.getMember("examples");
          u.value = e.get("examples");
        }
        return f.remove("allOf"), f;
      }
    }
  }
}), OZ = Te[Symbol.for("nodejs.util.promisify.custom")], B$ = U$.compose({
  props: {
    useCircularStructures: !0,
    allowMetaPatches: !1,
    parameterMacro: null,
    modelPropertyMacro: null,
    mode: "non-strict",
    ancestors: null
  },
  init({
    useCircularStructures: e = this.useCircularStructures,
    allowMetaPatches: t = this.allowMetaPatches,
    parameterMacro: r = this.parameterMacro,
    modelPropertyMacro: n = this.modelPropertyMacro,
    mode: i = this.mode,
    ancestors: s = []
  } = {}) {
    this.name = "openapi-3-1-swagger-client", this.useCircularStructures = e, this.allowMetaPatches = t, this.parameterMacro = r, this.modelPropertyMacro = n, this.mode = i, this.ancestors = [...s];
  },
  methods: {
    async dereference(e, t) {
      var r;
      const n = [], i = Pn(pc), s = (r = t.dereference.refSet) !== null && r !== void 0 ? r : Aa();
      let o;
      s.has(e.uri) ? o = s.find((f) => f.uri === e.uri) : (o = Rn({
        uri: e.uri,
        value: e.parseResult
      }), s.add(o));
      const a = Rs({
        reference: o,
        namespace: i,
        options: t,
        useCircularStructures: this.useCircularStructures,
        allowMetaPatches: this.allowMetaPatches,
        ancestors: this.ancestors
      });
      if (n.push(a), typeof this.parameterMacro == "function") {
        const f = SZ({
          parameterMacro: this.parameterMacro,
          options: t
        });
        n.push(f);
      }
      if (typeof this.modelPropertyMacro == "function") {
        const f = EZ({
          modelPropertyMacro: this.modelPropertyMacro,
          options: t
        });
        n.push(f);
      }
      if (this.mode !== "strict") {
        const f = wZ({
          options: t
        });
        n.push(f);
      }
      const c = Ib(n, {
        nodeTypeGetter: ke
      }), l = await OZ(s.rootRef.value, c, {
        keyMap: qe,
        nodeTypeGetter: ke
      });
      return t.dereference.refSet === null && s.clean(), l;
    }
  }
}), Xp = async (e) => {
  const {
    spec: t,
    timeout: r,
    redirects: n,
    requestInterceptor: i,
    responseInterceptor: s,
    pathDiscriminator: o = [],
    allowMetaPatches: a = !1,
    useCircularStructures: c = !1,
    skipNormalization: l = !1,
    parameterMacro: f = null,
    modelPropertyMacro: u = null,
    mode: h = "non-strict"
  } = e;
  try {
    const {
      cache: p
    } = Xp, d = Er(Xs()) ? Xs() : Is, y = vf(e), g = Se(d, y);
    let b;
    p.has(t) ? b = p.get(t) : (b = ur.refract(t), b.classes.push("result"), p.set(t, b));
    const E = new at([b]), S = hH(o), w = S === "" ? "" : `#${S}`, _ = Le(S, b), F = Rn({
      uri: g,
      value: E
    }), P = Aa({
      refs: [F]
    });
    S !== "" && (P.rootRef = null);
    const I = [/* @__PURE__ */ new Set([_])], C = [], J = await dq(_, {
      resolve: {
        /**
         * swagger-client only supports resolving HTTP(S) URLs or spec objects.
         * If runtime env is detected as non-browser one,
         * and baseURI was not provided as part of resolver options,
         * then below baseURI check will make sure that constant HTTPS URL is used as baseURI.
         */
        baseURI: `${g}${w}`,
        resolvers: [F$({
          timeout: r || 1e4,
          redirects: n || 10
        })],
        resolverOpts: {
          swaggerHTTPClientConfig: {
            requestInterceptor: i,
            responseInterceptor: s
          }
        },
        strategies: [dZ()]
      },
      parse: {
        mediaType: xr.latest(),
        parsers: [L$({
          allowEmpty: !1,
          sourceMap: !1
        }), k$({
          allowEmpty: !1,
          sourceMap: !1
        }), D$({
          allowEmpty: !1,
          sourceMap: !1
        }), N$({
          allowEmpty: !1,
          sourceMap: !1
        }), cZ({
          allowEmpty: !1,
          sourceMap: !1
        })]
      },
      dereference: {
        maxDepth: 100,
        strategies: [B$({
          allowMetaPatches: a,
          useCircularStructures: c,
          parameterMacro: f,
          modelPropertyMacro: u,
          mode: h,
          ancestors: I
        })],
        refSet: P,
        dereferenceOpts: {
          errors: C
        }
      }
    }), x = D3(_, J, b), T = l ? x : M$(x);
    return {
      spec: O(T),
      errors: C
    };
  } catch (p) {
    if (p instanceof pu || p instanceof kn)
      return {
        spec: null,
        errors: []
      };
    throw p;
  }
};
Xp.cache = /* @__PURE__ */ new WeakMap();
const xZ = {
  name: "openapi-3-1-apidom",
  match({
    spec: e
  }) {
    return c$(e);
  },
  normalize({
    spec: e
  }) {
    return Xn(M$)(e);
  },
  async resolve(e) {
    return Xp(e);
  }
};
function q$(e, t, r) {
  if (!e || typeof e != "object" || !e.paths || typeof e.paths != "object")
    return null;
  const {
    paths: n
  } = e;
  for (const i in n)
    for (const s in n[i]) {
      if (s.toUpperCase() === "PARAMETERS")
        continue;
      const o = n[i][s];
      if (!o || typeof o != "object")
        continue;
      const a = {
        spec: e,
        pathName: i,
        method: s.toUpperCase(),
        operation: o
      }, c = t(a);
      if (r && c)
        return a;
    }
}
function AZ(e, t) {
  return q$(e, t, !0) || null;
}
function H$(e, t) {
  return `${t.toLowerCase()}-${e}`;
}
function PZ(e, t) {
  return !e || !e.paths ? null : AZ(e, ({
    pathName: r,
    method: n,
    operation: i
  }) => {
    if (!i || typeof i != "object")
      return !1;
    const s = i.operationId, o = Ri(i, r, n), a = H$(r, n);
    return [o, a, s].some((c) => c && c === t);
  });
}
const {
  isHttpUrl: jZ
} = g_, _Z = () => null, RZ = (e) => Array.isArray(e) ? e : [e], km = {
  mapTagOperations: CZ,
  makeExecute: TZ
};
function TZ(e = {}) {
  return ({
    pathName: t,
    method: r,
    operationId: n
  }) => (i, s = {}) => {
    const {
      requestInterceptor: o,
      responseInterceptor: a,
      userFetch: c
    } = e;
    return e.execute({
      spec: e.spec,
      requestInterceptor: o,
      responseInterceptor: a,
      userFetch: c,
      pathName: t,
      method: r,
      parameters: i,
      operationId: n,
      ...s
    });
  };
}
function IZ(e = {}) {
  const t = km.makeExecute(e);
  return {
    apis: km.mapTagOperations({
      v2OperationIdCompatibilityMode: e.v2OperationIdCompatibilityMode,
      spec: e.spec,
      cb: t
    })
  };
}
function CZ({
  spec: e,
  cb: t = _Z,
  defaultTag: r = "default",
  v2OperationIdCompatibilityMode: n
}) {
  const i = {}, s = {};
  return q$(e, ({
    pathName: o,
    method: a,
    operation: c
  }) => {
    (c.tags ? RZ(c.tags) : [r]).forEach((f) => {
      if (typeof f != "string")
        return;
      s[f] = s[f] || {};
      const u = s[f], h = Ri(c, o, a, {
        v2OperationIdCompatibilityMode: n
      }), p = t({
        spec: e,
        pathName: o,
        method: a,
        operation: c,
        operationId: h
      });
      if (i[h])
        i[h] += 1, u[`${h}${i[h]}`] = p;
      else if (typeof u[h] < "u") {
        const d = i[h] || 1;
        i[h] = d + 1, u[`${h}${i[h]}`] = p;
        const y = u[h];
        delete u[h], u[`${h}${d}`] = y;
      } else
        u[h] = p;
    });
  }), s;
}
var Qp = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
Qp.parse = MZ;
Qp.serialize = FZ;
var VZ = Object.prototype.toString, gs = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function MZ(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, n = t || {}, i = n.decode || DZ, s = 0; s < e.length; ) {
    var o = e.indexOf("=", s);
    if (o === -1)
      break;
    var a = e.indexOf(";", s);
    if (a === -1)
      a = e.length;
    else if (a < o) {
      s = e.lastIndexOf(";", o - 1) + 1;
      continue;
    }
    var c = e.slice(s, o).trim();
    if (r[c] === void 0) {
      var l = e.slice(o + 1, a).trim();
      l.charCodeAt(0) === 34 && (l = l.slice(1, -1)), r[c] = kZ(l, i);
    }
    s = a + 1;
  }
  return r;
}
function FZ(e, t, r) {
  var n = r || {}, i = n.encode || NZ;
  if (typeof i != "function")
    throw new TypeError("option encode is invalid");
  if (!gs.test(e))
    throw new TypeError("argument name is invalid");
  var s = i(t);
  if (s && !gs.test(s))
    throw new TypeError("argument val is invalid");
  var o = e + "=" + s;
  if (n.maxAge != null) {
    var a = n.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!gs.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!gs.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + n.path;
  }
  if (n.expires) {
    var c = n.expires;
    if (!LZ(c) || isNaN(c.valueOf()))
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
function DZ(e) {
  return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
}
function NZ(e) {
  return encodeURIComponent(e);
}
function LZ(e) {
  return VZ.call(e) === "[object Date]" || e instanceof Date;
}
function kZ(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Um(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function G$(e) {
  var t, r;
  return Um(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(Um(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
const UZ = {
  body: BZ,
  header: HZ,
  query: JZ,
  path: GZ,
  formData: qZ
};
function BZ({
  req: e,
  value: t
}) {
  e.body = t;
}
function qZ({
  req: e,
  value: t,
  parameter: r
}) {
  (t || r.allowEmptyValue) && (e.form = e.form || {}, e.form[r.name] = {
    value: t,
    allowEmptyValue: r.allowEmptyValue,
    collectionFormat: r.collectionFormat
  });
}
function HZ({
  req: e,
  parameter: t,
  value: r
}) {
  e.headers = e.headers || {}, typeof r < "u" && (e.headers[t.name] = r);
}
function GZ({
  req: e,
  value: t,
  parameter: r
}) {
  e.url = e.url.split(`{${r.name}}`).join(encodeURIComponent(t));
}
function JZ({
  req: e,
  value: t,
  parameter: r
}) {
  if (e.query = e.query || {}, t === !1 && r.type === "boolean" && (t = "false"), t === 0 && ["number", "integer"].indexOf(r.type) > -1 && (t = "0"), t)
    e.query[r.name] = {
      collectionFormat: r.collectionFormat,
      value: t
    };
  else if (r.allowEmptyValue && t !== void 0) {
    const n = r.name;
    e.query[n] = e.query[n] || {}, e.query[n].allowEmptyValue = !0;
  }
}
function mc(e, t) {
  return t.includes("application/json") ? typeof e == "string" ? e : JSON.stringify(e) : e.toString();
}
function zZ({
  req: e,
  value: t,
  parameter: r
}) {
  const {
    name: n,
    style: i,
    explode: s,
    content: o
  } = r;
  if (o) {
    const c = Object.keys(o)[0];
    e.url = e.url.split(`{${n}}`).join(on(mc(t, c), {
      escape: !0
    }));
    return;
  }
  const a = mf({
    key: r.name,
    value: t,
    style: i || "simple",
    explode: s || !1,
    escape: !0
  });
  e.url = e.url.split(`{${n}}`).join(a);
}
function KZ({
  req: e,
  value: t,
  parameter: r
}) {
  if (e.query = e.query || {}, r.content) {
    const n = Object.keys(r.content)[0], i = mc(t, n);
    if (i)
      e.query[r.name] = i;
    else if (r.allowEmptyValue && t !== void 0) {
      const s = r.name;
      e.query[s] = e.query[s] || {}, e.query[s].allowEmptyValue = !0;
    }
    return;
  }
  if (t === !1 && (t = "false"), t === 0 && (t = "0"), t) {
    const {
      style: n,
      explode: i,
      allowReserved: s
    } = r;
    e.query[r.name] = {
      value: t,
      serializationOption: {
        style: n,
        explode: i,
        allowReserved: s
      }
    };
  } else if (r.allowEmptyValue && t !== void 0) {
    const n = r.name;
    e.query[n] = e.query[n] || {}, e.query[n].allowEmptyValue = !0;
  }
}
const WZ = ["accept", "authorization", "content-type"];
function YZ({
  req: e,
  parameter: t,
  value: r
}) {
  if (e.headers = e.headers || {}, !(WZ.indexOf(t.name.toLowerCase()) > -1)) {
    if (t.content) {
      const n = Object.keys(t.content)[0];
      e.headers[t.name] = mc(r, n);
      return;
    }
    typeof r < "u" && (e.headers[t.name] = mf({
      key: t.name,
      value: r,
      style: t.style || "simple",
      explode: typeof t.explode > "u" ? !1 : t.explode,
      escape: !1
    }));
  }
}
function XZ({
  req: e,
  parameter: t,
  value: r
}) {
  e.headers = e.headers || {};
  const n = typeof r;
  if (t.content) {
    const i = Object.keys(t.content)[0];
    e.headers.Cookie = `${t.name}=${mc(r, i)}`;
    return;
  }
  if (n !== "undefined") {
    const i = n === "object" && !Array.isArray(r) && t.explode ? "" : `${t.name}=`;
    e.headers.Cookie = i + mf({
      key: t.name,
      value: r,
      escape: !1,
      style: t.style || "form",
      explode: typeof t.explode > "u" ? !1 : t.explode
    });
  }
}
const QZ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cookie: XZ,
  header: YZ,
  path: zZ,
  query: KZ
}, Symbol.toStringTag, { value: "Module" })), ZZ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, {
  btoa: J$
} = ZZ;
function eee(e, t) {
  const {
    operation: r,
    requestBody: n,
    securities: i,
    spec: s,
    attachContentTypeForEmptyPayload: o
  } = e;
  let {
    requestContentType: a
  } = e;
  t = tee({
    request: t,
    securities: i,
    operation: r,
    spec: s
  });
  const c = r.requestBody || {}, l = Object.keys(c.content || {}), f = a && l.indexOf(a) > -1;
  if (n || o) {
    if (a && f)
      t.headers["Content-Type"] = a;
    else if (!a) {
      const p = l[0];
      p && (t.headers["Content-Type"] = p, a = p);
    }
  } else
    a && f && (t.headers["Content-Type"] = a);
  if (!e.responseContentType && r.responses) {
    const p = Object.entries(r.responses).filter(([d, y]) => {
      const g = parseInt(d, 10);
      return g >= 200 && g < 300 && G$(y.content);
    }).reduce((d, [, y]) => d.concat(Object.keys(y.content)), []);
    p.length > 0 && (t.headers.accept = p.join(", "));
  }
  if (n)
    if (a) {
      if (l.indexOf(a) > -1)
        if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data")
          if (typeof n == "object") {
            var u, h;
            const p = (u = (h = c.content[a]) === null || h === void 0 ? void 0 : h.encoding) !== null && u !== void 0 ? u : {};
            t.form = {}, Object.keys(n).forEach((d) => {
              t.form[d] = {
                value: n[d],
                encoding: p[d] || {}
              };
            });
          } else
            t.form = n;
        else
          t.body = n;
    } else
      t.body = n;
  return t;
}
function tee({
  request: e,
  securities: t = {},
  operation: r = {},
  spec: n
}) {
  var i;
  const s = {
    ...e
  }, {
    authorized: o = {}
  } = t, a = r.security || n.security || [], c = o && !!Object.keys(o).length, l = (n == null || (i = n.components) === null || i === void 0 ? void 0 : i.securitySchemes) || {};
  return s.headers = s.headers || {}, s.query = s.query || {}, !Object.keys(t).length || !c || !a || Array.isArray(r.security) && !r.security.length ? e : (a.forEach((f) => {
    Object.keys(f).forEach((u) => {
      const h = o[u], p = l[u];
      if (!h)
        return;
      const d = h.value || h, {
        type: y
      } = p;
      if (h) {
        if (y === "apiKey")
          p.in === "query" && (s.query[p.name] = d), p.in === "header" && (s.headers[p.name] = d), p.in === "cookie" && (s.cookies[p.name] = d);
        else if (y === "http") {
          if (/^basic$/i.test(p.scheme)) {
            const g = d.username || "", b = d.password || "", E = J$(`${g}:${b}`);
            s.headers.Authorization = `Basic ${E}`;
          }
          /^bearer$/i.test(p.scheme) && (s.headers.Authorization = `Bearer ${d}`);
        } else if (y === "oauth2" || y === "openIdConnect") {
          const g = h.token || {}, b = p["x-tokenName"] || "access_token", E = g[b];
          let S = g.token_type;
          (!S || S.toLowerCase() === "bearer") && (S = "Bearer"), s.headers.Authorization = `${S} ${E}`;
        }
      }
    });
  }), s);
}
function ree(e, t) {
  const {
    spec: r,
    operation: n,
    securities: i,
    requestContentType: s,
    responseContentType: o,
    attachContentTypeForEmptyPayload: a
  } = e;
  if (t = nee({
    request: t,
    securities: i,
    operation: n,
    spec: r
  }), t.body || t.form || a)
    s ? t.headers["Content-Type"] = s : Array.isArray(n.consumes) ? [t.headers["Content-Type"]] = n.consumes : Array.isArray(r.consumes) ? [t.headers["Content-Type"]] = r.consumes : n.parameters && n.parameters.filter((c) => c.type === "file").length ? t.headers["Content-Type"] = "multipart/form-data" : n.parameters && n.parameters.filter((c) => c.in === "formData").length && (t.headers["Content-Type"] = "application/x-www-form-urlencoded");
  else if (s) {
    const c = n.parameters && n.parameters.filter((f) => f.in === "body").length > 0, l = n.parameters && n.parameters.filter((f) => f.in === "formData").length > 0;
    (c || l) && (t.headers["Content-Type"] = s);
  }
  return !o && Array.isArray(n.produces) && n.produces.length > 0 && (t.headers.accept = n.produces.join(", ")), t;
}
function nee({
  request: e,
  securities: t = {},
  operation: r = {},
  spec: n
}) {
  const i = {
    ...e
  }, {
    authorized: s = {},
    specSecurity: o = []
  } = t, a = r.security || o, c = s && !!Object.keys(s).length, l = n.securityDefinitions;
  return i.headers = i.headers || {}, i.query = i.query || {}, !Object.keys(t).length || !c || !a || Array.isArray(r.security) && !r.security.length ? e : (a.forEach((f) => {
    Object.keys(f).forEach((u) => {
      const h = s[u];
      if (!h)
        return;
      const {
        token: p
      } = h, d = h.value || h, y = l[u], {
        type: g
      } = y, b = y["x-tokenName"] || "access_token", E = p && p[b];
      let S = p && p.token_type;
      if (h)
        if (g === "apiKey") {
          const w = y.in === "query" ? "query" : "headers";
          i[w] = i[w] || {}, i[w][y.name] = d;
        } else if (g === "basic")
          if (d.header)
            i.headers.authorization = d.header;
          else {
            const w = d.username || "", _ = d.password || "";
            d.base64 = J$(`${w}:${_}`), i.headers.authorization = `Basic ${d.base64}`;
          }
        else
          g === "oauth2" && E && (S = !S || S.toLowerCase() === "bearer" ? "Bearer" : S, i.headers.authorization = `${S} ${E}`);
    });
  }), i);
}
const Bm = (e) => Array.isArray(e) ? e : [], Ts = (e) => {
  try {
    return new URL(e);
  } catch {
    const t = new URL(e, Is), r = String(e).startsWith("/") ? t.pathname : t.pathname.substring(1);
    return {
      hash: t.hash,
      host: "",
      hostname: "",
      href: "",
      origin: "",
      password: "",
      pathname: r,
      port: "",
      protocol: "",
      search: t.search,
      searchParams: t.searchParams
    };
  }
}, iee = Pp("OperationNotFoundError", function(t, r, n) {
  this.originalError = n, Object.assign(this, r || {});
}), see = (e, t) => t.filter((r) => r.name === e), oee = (e) => {
  const t = {};
  e.forEach((n) => {
    t[n.in] || (t[n.in] = {}), t[n.in][n.name] = n;
  });
  const r = [];
  return Object.keys(t).forEach((n) => {
    Object.keys(t[n]).forEach((i) => {
      r.push(t[n][i]);
    });
  }), r;
}, aee = {
  buildRequest: z$
};
function cee({
  http: e,
  fetch: t,
  // This is legacy
  spec: r,
  operationId: n,
  pathName: i,
  method: s,
  parameters: o,
  securities: a,
  ...c
}) {
  const l = e || t || fi;
  i && s && !n && (n = H$(i, s));
  const f = aee.buildRequest({
    spec: r,
    operationId: n,
    parameters: o,
    securities: a,
    http: l,
    ...c
  });
  return f.body && (G$(f.body) || Array.isArray(f.body)) && (f.body = JSON.stringify(f.body)), l(f);
}
function z$(e) {
  const {
    spec: t,
    operationId: r,
    responseContentType: n,
    scheme: i,
    requestInterceptor: s,
    responseInterceptor: o,
    contextUrl: a,
    userFetch: c,
    server: l,
    serverVariables: f,
    http: u,
    signal: h
  } = e;
  let {
    parameters: p,
    parameterBuilders: d
  } = e;
  const y = Tp(t);
  d || (y ? d = QZ : d = UZ);
  let b = {
    url: "",
    credentials: u && u.withCredentials ? "include" : "same-origin",
    headers: {},
    cookies: {}
  };
  h && (b.signal = h), s && (b.requestInterceptor = s), o && (b.responseInterceptor = o), c && (b.userFetch = c);
  const E = PZ(t, r);
  if (!E)
    throw new iee(`Operation ${r} not found`);
  const {
    operation: S = {},
    method: w,
    pathName: _
  } = E;
  if (b.url += K$({
    spec: t,
    scheme: i,
    contextUrl: a,
    server: l,
    serverVariables: f,
    pathName: _,
    method: w
  }), !r)
    return delete b.cookies, b;
  b.url += _, b.method = `${w}`.toUpperCase(), p = p || {};
  const F = t.paths[_] || {};
  n && (b.headers.accept = n);
  const P = oee([].concat(Bm(S.parameters)).concat(Bm(F.parameters)));
  P.forEach((C) => {
    const J = d[C.in];
    let x;
    if (C.in === "body" && C.schema && C.schema.properties && (x = p), x = C && C.name && p[C.name], typeof x > "u" ? x = C && C.name && p[`${C.in}.${C.name}`] : see(C.name, P).length > 1 && console.warn(`Parameter '${C.name}' is ambiguous because the defined spec has more than one parameter with the name: '${C.name}' and the passed-in parameter values did not define an 'in' value.`), x !== null) {
      if (typeof C.default < "u" && typeof x > "u" && (x = C.default), typeof x > "u" && C.required && !C.allowEmptyValue)
        throw new Error(`Required parameter ${C.name} is not provided`);
      if (y && C.schema && C.schema.type === "object" && typeof x == "string")
        try {
          x = JSON.parse(x);
        } catch {
          throw new Error("Could not parse object parameter value string as JSON");
        }
      J && J({
        req: b,
        parameter: C,
        value: x,
        operation: S,
        spec: t
      });
    }
  });
  const I = {
    ...e,
    operation: S
  };
  if (y ? b = eee(I, b) : b = ree(I, b), b.cookies && Object.keys(b.cookies).length) {
    const C = Object.keys(b.cookies).reduce((J, x) => {
      const T = b.cookies[x], N = J ? "&" : "", W = Qp.serialize(x, T);
      return J + N + W;
    }, "");
    b.headers.Cookie = C;
  }
  return b.cookies && delete b.cookies, ev(b), b;
}
const Zu = (e) => e ? e.replace(/\W/g, "") : null;
function K$(e) {
  return Tp(e.spec) ? lee(e) : pee(e);
}
const pl = (e) => Array.isArray(e) && e.length > 0;
function lee({
  spec: e,
  pathName: t,
  method: r,
  server: n,
  contextUrl: i,
  serverVariables: s = {}
}) {
  var o, a;
  let c = [], l = "", f;
  const u = e == null || (o = e.paths) === null || o === void 0 || (o = o[t]) === null || o === void 0 || (o = o[(r || "").toLowerCase()]) === null || o === void 0 ? void 0 : o.servers, h = e == null || (a = e.paths) === null || a === void 0 || (a = a[t]) === null || a === void 0 ? void 0 : a.servers, p = e == null ? void 0 : e.servers;
  return c = pl(u) ? u : pl(h) ? h : pl(p) ? p : [Hm], n && (f = c.find((d) => d.url === n), f && (l = n)), l || ([f] = c, l = f.url), l.includes("{") && fee(l).forEach((y) => {
    if (f.variables && f.variables[y]) {
      const g = f.variables[y], b = s[y] || g.default, E = new RegExp(`{${y}}`, "g");
      l = l.replace(E, b);
    }
  }), uee(l, i);
}
function uee(e = "", t = "") {
  const r = Ts(e && t ? Se(t, e) : e), n = Ts(t), i = Zu(r.protocol) || Zu(n.protocol), s = r.host || n.host, o = r.pathname;
  let a;
  return i && s ? a = `${i}://${s + o}` : a = o, a[a.length - 1] === "/" ? a.slice(0, -1) : a;
}
function fee(e) {
  const t = [], r = /{([^}]+)}/g;
  let n;
  for (; n = r.exec(e); )
    t.push(n[1]);
  return t;
}
function pee({
  spec: e,
  scheme: t,
  contextUrl: r = ""
}) {
  const n = Ts(r), i = Array.isArray(e.schemes) ? e.schemes[0] : null, s = t || i || Zu(n.protocol) || "http", o = e.host || n.host || "", a = e.basePath || "";
  let c;
  return s && o ? c = `${s}://${o + a}` : c = a, c[c.length - 1] === "/" ? c.slice(0, -1) : c;
}
re.http = fi;
re.makeHttp = qx.bind(null, re.http);
re.resolveStrategies = {
  "openapi-3-1-apidom": xZ,
  "openapi-3-0": u$,
  "openapi-2-0": l$,
  generic: s$
};
re.resolve = f$({
  strategies: [re.resolveStrategies["openapi-3-1-apidom"], re.resolveStrategies["openapi-3-0"], re.resolveStrategies["openapi-2-0"], re.resolveStrategies.generic]
});
re.resolveSubtree = Zq({
  strategies: [re.resolveStrategies["openapi-3-1-apidom"], re.resolveStrategies["openapi-3-0"], re.resolveStrategies["openapi-2-0"], re.resolveStrategies.generic]
});
re.execute = cee;
re.serializeRes = Yy;
re.serializeHeaders = Xy;
re.clearCache = zq;
re.makeApisTagOperation = IZ;
re.buildRequest = z$;
re.helpers = {
  opId: Ri
};
re.getBaseUrl = K$;
re.apidom = {
  resolve: {
    resolvers: {
      HttpResolverSwaggerClient: F$
    }
  },
  parse: {
    parsers: {
      JsonParser: D$,
      YamlParser: N$,
      OpenApiJson3_1Parser: L$,
      OpenApiYaml3_1Parser: k$
    }
  },
  dereference: {
    strategies: {
      OpenApi3_1SwaggerClientDereferenceStrategy: B$
    }
  }
};
function re(e, t = {}) {
  if (typeof e == "string" ? t.url = e : t = e, !(this instanceof re))
    return new re(t);
  Object.assign(this, t);
  const r = this.resolve().then(() => (this.disableInterfaces || Object.assign(this, re.makeApisTagOperation(this)), this));
  return r.client = this, r;
}
re.prototype = {
  http: fi,
  execute(e) {
    return this.applyDefaults(), re.execute({
      spec: this.spec,
      http: this.http,
      securities: {
        authorized: this.authorizations
      },
      contextUrl: typeof this.url == "string" ? this.url : void 0,
      requestInterceptor: this.requestInterceptor || null,
      responseInterceptor: this.responseInterceptor || null,
      ...e
    });
  },
  resolve(e = {}) {
    return re.resolve({
      spec: this.spec,
      url: this.url,
      http: this.http || this.fetch,
      allowMetaPatches: this.allowMetaPatches,
      useCircularStructures: this.useCircularStructures,
      requestInterceptor: this.requestInterceptor || null,
      responseInterceptor: this.responseInterceptor || null,
      skipNormalization: this.skipNormalization || !1,
      ...e
    }).then((t) => (this.originalSpec = this.spec, this.spec = t.spec, this.errors = t.errors, this));
  }
};
re.prototype.applyDefaults = function() {
  const {
    spec: t
  } = this, r = this.url;
  if (o$(t) && jZ(r)) {
    const n = new URL(r);
    t.host || (t.host = n.host), t.schemes || (t.schemes = [n.protocol.replace(":", "")]), t.basePath || (t.basePath = "/");
  } else if (Tp(t)) {
    const n = Array.isArray(t.servers) && t.servers.length === 0;
    (!t.servers || n) && (t.servers = [Hm]);
  }
};
export {
  re as S,
  US as r
};
